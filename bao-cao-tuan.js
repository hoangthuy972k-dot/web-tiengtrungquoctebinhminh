// "📋 Báo cáo tuần" (tab o /admin): bao cao tung hoc sinh cua 1 lop trong 1 tuan — chu yeu de co giao
// gui phu huynh (tin nhan Zalo soan san o trang quan tri). Chi giao vien (requireAdmin).
// GET /api/admin/bao-cao-tuan?lop=<classId>&tuan=<YYYY-MM-DD thu Hai, gio VN>[&moi=1 bo qua bo nho 5 phut]
//
// Nguon du lieu (giong hoc-choi.js / cau-lop-sai.js, chay ca MySQL lan file JSON):
//  - scores.studyDays            : ngay em co hoc (client gui khi dong bo diem); scores.srs: tu -> bai (tra pinyin / nghia)
//  - part_done first_ms / last_ms: phan bai lam lan dau / lam lai trong tuan (+ diem moi nhat cua phan do)
//  - daily_points                : cau dung MOI trong bai hoc + cau dung luot thi thu dau (file JSON chi giu 14 ngay)
//  - stars (week / prev_week)    : sao cua 2 tuan gan nhat EM CO HOC; tuan o giua 2 moc / sau moc cuoi = 0; cu hon = khong biet
//  - exam_attempts               : bai thi thu HSK nop trong tuan; thi_lop: bai thi tren lop (thi-lop.js) nop trong tuan
//  - resume['/lessons/on-hom-nay.html'].sai.v: kho "Câu em từng sai" (cau sai + tu quen, co moc thoi gian)
//  - farm_activity (hoc-choi.js) : chi de tham khao — so ngay vao nong trai, so cau hoi tieng Trung o nong trai
// Ten hoc sinh chi doc tu CSDL luc chay (danh sach lop / tai khoan), khong ghi vao kho ma.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

module.exports = function (app, o) {
  const NGAY = 864e5;
  const NHO_MS = 5 * 60 * 1000;
  const SO_TUAN = 8;
  const GIA = '/lessons/on-hom-nay.html';
  const PUBLIC_DIR = path.join(__dirname, 'public');
  const F_DIEM_NGAY = path.join(o.DATA_DIR, 'daily_points.json');
  const F_NONG_TRAI = path.join(o.DATA_DIR, 'farm_activity.json');
  const F_THI = path.join(o.DATA_DIR, 'exam_attempts.json');
  const F_THI_LOP = path.join(o.DATA_DIR, 'thi_lop.json');
  const TEN_PHAN = {
    warmup: 'Khởi động', vocab: 'Từ vựng', flash: 'Thẻ nhớ', dialog: 'Hội thoại', roleplay: 'Nhập vai', grammar: 'Ngữ pháp',
    game: 'Trò chơi', listen: 'Nghe', speak: 'Nói', translate: 'Dịch', workbook: 'Sách bài tập', page: 'Trang bài', final: 'Kiểm tra cuối',
  };
  const THU_TU_PHAN = Object.keys(TEN_PHAN);

  // ---------- Muc luc bai (ten bai tieng Viet nhu tren web) ----------
  const BAI = (() => {
    const theoUrl = {}, tenCap = {};
    try {
      const d = vm.runInNewContext(
        fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'data.js'), 'utf8') + '\n;({ levels: APP_DATA.levels, lessons: APP_DATA.lessons })',
        {}, { timeout: 2000 }
      );
      (d.levels || []).forEach((l) => { tenCap[l.id] = l.name; });
      Object.keys(d.lessons || {}).forEach((lv) => (d.lessons[lv] || []).forEach((b) => {
        if (b && b.fullPageUrl) theoUrl[b.fullPageUrl] = { lv, so: b.number, ten: String(b.title || ''), zh: String(b.titleHanzi || '') };
      }));
    } catch (err) { console.error('Bao cao tuan: khong doc duoc muc luc bai —', err.message); }
    return { theoUrl, tenCap };
  })();
  function moTaBai(url) {
    const b = BAI.theoUrl[url];
    if (!b) return { url, ten: url === GIA ? 'Ôn hôm nay' : 'Bài luyện tập', cap: '', so: null, zh: '' };
    return { url, ten: b.ten, zh: b.zh, so: b.so, cap: BAI.tenCap[b.lv] || b.lv };
  }
  // Pinyin / nghia cua 1 tu: bai em hoc tu do truoc (srs[zh].url / url cau sai), khong co thi tra ca muc luc (chi 1 lan)
  let chiMucTu = null;
  function traTu(zh, urls) {
    for (const u of urls) {
      if (!u) continue;
      const v = (o.tuVungBai(u) || []).find((x) => x.zh === zh);
      if (v) return { py: v.py, vn: v.vn };
    }
    if (!chiMucTu) {
      chiMucTu = new Map();
      Object.keys(BAI.theoUrl).forEach((u) => (o.tuVungBai(u) || []).forEach((v) => { if (!chiMucTu.has(v.zh)) chiMucTu.set(v.zh, { py: v.py, vn: v.vn }); }));
    }
    return chiMucTu.get(zh) || { py: '', vn: '' };
  }

  // ---------- Chu tron (khong bao gio dua HTML cua hoc sinh vao trang quan tri) ----------
  const THUC_THE = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
  const HAN = '[\\u2e80-\\u9fff\\uf900-\\ufaff\\uff00-\\uffef\\u3000-\\u303f]';
  const KHOANG_HAN = new RegExp('(' + HAN + ')\\s+(?=' + HAN + ')', 'g');
  function chuTho(s, n) {
    s = String(s == null ? '' : s)
      .replace(/<(rt|rp|script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
        if (e[0] === '#') {
          const c = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
          return c > 0 && c < 0x110000 ? String.fromCodePoint(c) : '';
        }
        const t = THUC_THE[e.toLowerCase()];
        return t != null ? t : m;
      })
      .replace(/\s+/g, ' ').replace(KHOANG_HAN, '$1').trim();
    return n && s.length > n ? s.slice(0, n) + '…' : s;
  }
  // 1 cau trong kho "Câu em từng sai" -> { loai, lenh, de, py, dap }
  function moTaCau(c) {
    if (!c || typeof c !== 'object') return null;
    if (c.k === 'xep') return c.dap ? { loai: 'Sắp xếp câu', lenh: chuTho(c.lenh || 'Xếp các từ thành câu đúng', 80), de: '', py: '', dap: chuTho(c.dap, 120) } : null;
    if (c.k === 'go') {
      if (!c.dap) return null;
      const de = c.html ? chuTho(c.html, 160) : [chuTho(c.pre, 80), '＿＿', chuTho(c.post, 80)].join(' ').trim();
      return { loai: 'Điền từ', lenh: chuTho(c.lenh || 'Điền từ còn thiếu', 80), de, py: '', dap: chuTho(c.dap, 60) };
    }
    if (c.k || !Array.isArray(c.opts) || typeof c.dung !== 'number' || c.dung < 0 || c.dung >= c.opts.length) return null;
    const lenh = chuTho(c.lenh, 100);
    return {
      loai: c.nghe ? 'Nghe' : /^Từ này nghĩa là gì/.test(lenh) ? 'Từ vựng' : 'Trắc nghiệm',
      lenh, de: c.html ? chuTho(c.html, 160) : chuTho(c.zh || c.nghe, 160), py: chuTho(c.py, 120), dap: chuTho(c.opts[c.dung], 100),
    };
  }

  // ---------- Tuan (gio VN, bat dau thu Hai) ----------
  const congNgay = (k, n) => new Date(Date.parse(k + 'T00:00:00Z') + n * NGAY).toISOString().slice(0, 10);
  const msDau = (t) => Date.parse(t + 'T00:00:00Z') - o.VN_OFFSET_MS;
  function nhanTuan(t) {
    const f = (k) => Number(k.slice(8, 10)) + '/' + Number(k.slice(5, 7));
    return f(t) + ' – ' + f(congNgay(t, 6));
  }
  const tuanCuaNgay = (ngay) => (/^\d{4}-\d{2}-\d{2}$/.test(ngay) ? o.vnWeekKey(Date.parse(ngay + 'T12:00:00Z') - o.VN_OFFSET_MS) : null);
  function dsTuan(now) {
    const out = [];
    for (let i = 0; i < SO_TUAN; i++) { const t = o.vnWeekKey(now - i * 7 * NGAY); out.push({ k: t, nhan: nhanTuan(t) }); }
    return out;
  }

  // Hoc sinh co tai khoan trong lop (danh sach lop da noi tai khoan + thanh vien vao bang ma lop) + ten chua noi tai khoan
  function hsCuaLop(st, classId, names) {
    const m = new Map(), chuaTk = [];
    (st.roster || []).filter((r) => r.classId === classId).sort((a, b) => (a.sort || 0) - (b.sort || 0)).forEach((r) => {
      if (r.userId && names[r.userId]) m.set(r.userId, r.name || names[r.userId]);
      else if (!r.userId) chuaTk.push({ id: 'r:' + r.id, ten: String(r.name || '(học sinh)') });
    });
    Object.keys(st.members || {}).forEach((uid) => {
      if (st.members[uid] && st.members[uid].classId === classId && !m.has(uid) && names[uid]) m.set(uid, names[uid]);
    });
    return { coTk: Array.from(m, ([id, ten]) => ({ id, ten: String(ten || '(học sinh)') })), chuaTk };
  }

  // ---------- Doc du lieu (chi cac em trong lop) ----------
  async function docDiemNgay(uids, tu, den) {
    const out = []; // { uid, ngay, lc, ec }
    let tuNgayCo = null; // ngay som nhat con giu (file JSON chi giu 14 ngay)
    if (!o.USE_DB) {
      const all = o.readJsonFile(F_DIEM_NGAY) || {};
      const ks = Object.keys(all).sort();
      tuNgayCo = ks[0] || null;
      const ai = new Set(uids);
      ks.forEach((ngay) => {
        if (ngay < tu || ngay > den) return;
        Object.keys(all[ngay] || {}).forEach((uid) => {
          if (!ai.has(uid)) return;
          const r = all[ngay][uid] || {};
          out.push({ uid, ngay, lc: r.lessonCorrect || 0, ec: r.examCorrect || 0 });
        });
      });
      return { out, tuNgayCo };
    }
    if (!uids.length) return { out, tuNgayCo: '0000-00-00' };
    const [rows] = await o.db().query('SELECT user_id, day, lesson_correct, exam_correct FROM daily_points WHERE user_id IN (?) AND day >= ? AND day <= ?', [uids, tu, den]);
    rows.forEach((r) => out.push({ uid: r.user_id, ngay: String(r.day), lc: r.lesson_correct || 0, ec: r.exam_correct || 0 }));
    return { out, tuNgayCo: '0000-00-00' }; // MySQL giu het
  }
  async function docNongTrai(uids, tu, den) {
    const out = []; // { uid, ngay, q, a, v }
    let tuNgayCo = null;
    try {
      if (!o.USE_DB) {
        const all = o.readJsonFile(F_NONG_TRAI) || {};
        const ks = Object.keys(all).sort();
        tuNgayCo = ks[0] || null;
        const ai = new Set(uids);
        ks.forEach((ngay) => {
          if (ngay < tu || ngay > den) return;
          Object.keys(all[ngay] || {}).forEach((uid) => { if (ai.has(uid)) { const r = all[ngay][uid] || {}; out.push({ uid, ngay, q: r.q || 0, a: r.a || 0, v: r.v || 0 }); } });
        });
      } else {
        const [[m]] = await o.db().query('SELECT MIN(day) AS d FROM farm_activity');
        tuNgayCo = m && m.d ? String(m.d) : null;
        if (uids.length) {
          const [rows] = await o.db().query('SELECT user_id, day, quiz, acts, opens FROM farm_activity WHERE user_id IN (?) AND day >= ? AND day <= ?', [uids, tu, den]);
          rows.forEach((r) => out.push({ uid: r.user_id, ngay: String(r.day), q: r.quiz || 0, a: r.acts || 0, v: r.opens || 0 }));
        }
      }
    } catch (e) { /* chua co bo dem nong trai — bo qua */ }
    return { out, tuNgayCo };
  }
  async function docThiThu(uids, tuMs, denMs) {
    let list = [];
    try {
      if (!o.USE_DB) {
        const ai = new Set(uids);
        list = (o.readJsonFile(F_THI) || []).filter((a) => a && ai.has(a.userId) && a.submittedMs >= tuMs && a.submittedMs < denMs);
      } else if (uids.length) {
        const [rows] = await o.db().query(
          'SELECT user_id, exam_id, submitted_ms, correct, total, score, max_score FROM exam_attempts WHERE user_id IN (?) AND submitted_ms >= ? AND submitted_ms < ?',
          [uids, tuMs, denMs]
        );
        list = rows.map((r) => ({ userId: r.user_id, examId: r.exam_id, submittedMs: Number(r.submitted_ms), correct: r.correct, total: r.total, score: r.score, maxScore: r.max_score }));
      }
    } catch (e) { list = []; }
    return list;
  }
  async function docThiLop(tuMs, denMs) {
    let raws = [];
    try {
      if (!o.USE_DB) raws = Object.values(o.readJsonFile(F_THI_LOP) || {});
      else {
        // phong tao truoc dau tuan toi 1 ngay van co the nop trong tuan (hiem) — lay rong ra 1 ngay
        const [rows] = await o.db().query('SELECT du_lieu FROM thi_lop WHERE tao_ms >= ? AND tao_ms < ?', [tuMs - NGAY, denMs]);
        raws = rows.map((r) => r.du_lieu);
      }
    } catch (e) { raws = []; }
    const out = []; // { userId, rosterId, ten, diem, max, c, t, ms }
    raws.forEach((raw) => {
      let p;
      try { p = typeof raw === 'string' ? JSON.parse(raw) : raw; } catch (e) { return; }
      if (!p || !Array.isArray(p.hs)) return;
      p.hs.forEach((h) => {
        if (!h || !h.kq || !(h.nop >= tuMs && h.nop < denMs)) return;
        out.push({ userId: h.userId || null, rosterId: h.rosterId || null, ten: chuTho(p.tieuDe || 'Bài thi trên lớp', 80),
          diem: h.kq.score, max: h.kq.max, c: h.kq.correct, t: h.kq.total, ms: h.nop });
      });
    });
    return out;
  }

  // Sao cua 1 tuan: chi biet chac khi tuan do >= moc prevWeek cua em (xem rollStarDay trong server.js)
  function saoTuan(s, t) {
    if (!s || !s.week) return 0;
    if (s.week === t) return s.weekStars || 0;
    if (s.prevWeek === t) return s.prevWeekStars || 0;
    if (t > s.week) return 0;
    if (s.prevWeek && t > s.prevWeek) return 0;
    return null;
  }

  // ---------- Tong hop ----------
  async function tongHop(st, classId, tuan) {
    const now = Date.now();
    const truoc = congNgay(tuan, -7);
    const tu = msDau(tuan), den = tu + 7 * NGAY, tuTruoc = tu - 7 * NGAY;
    const ngayCuoi = congNgay(tuan, 6);
    const names = await o.loadUserNames();
    const { coTk, chuaTk } = hsCuaLop(st, classId, names);
    const uids = coTk.map((h) => h.id);
    const an = (p) => Promise.resolve().then(p).catch(() => null);
    const [diem, resume, sao, partDone, dn, nt, thi, thiLop] = await Promise.all([
      Promise.all(uids.map((u) => an(() => o.loadScoreOf(u)))),
      Promise.all(uids.map((u) => an(() => o.loadResume(u)))),
      Promise.all(uids.map((u) => an(() => o.loadStar(u)))),
      uids.length ? an(() => o.loadPartDone(uids)) : {},
      docDiemNgay(uids, truoc, ngayCuoi),
      docNongTrai(uids, truoc, ngayCuoi),
      docThiThu(uids, tu, den),
      docThiLop(tu, den),
    ]);
    // file JSON chi giu 14 ngay: tuan con it nhat 1 ngay trong file thi van hien (ghi chu 'mot-phan')
    const coDiemNgay = (t) => !!dn.tuNgayCo && dn.tuNgayCo <= congNgay(t, 6);
    const phuDiemNgay = (t) => (!dn.tuNgayCo || dn.tuNgayCo > congNgay(t, 6) ? 'khong' : dn.tuNgayCo > t ? 'mot-phan' : 'du');
    const rosterCua = {};
    (st.roster || []).forEach((r) => { if (r.userId) rosterCua[r.id] = r.userId; });

    function rongTuan() { return { ngay: new Set(), bai: new Map(), phan: 0, phanMoi: 0, cauDung: 0, cauThi: 0 }; }
    const hs = coTk.map((h, i) => {
      const uid = h.id;
      const w = { [tuan]: rongTuan(), [truoc]: rongTuan() };
      const vao = (ngay) => w[tuanCuaNgay(ngay)];
      const sc = diem[i] || {};
      (Array.isArray(sc.studyDays) ? sc.studyDays : []).forEach((ngay) => { const x = typeof ngay === 'string' && vao(ngay); if (x) x.ngay.add(ngay); });
      // phan bai: lan dau / lam lai trong tuan
      const pd = (partDone && partDone[uid]) || {};
      Object.keys(pd).forEach((url) => Object.keys(pd[url] || {}).forEach((k) => {
        const p = pd[url][k] || {};
        const f = Number(p.firstMs) || 0, l = Number(p.lastMs) || 0;
        const nf = f ? o.vnDayKey(f) : '', nl = l ? o.vnDayKey(l) : '';
        const ghi = (x, ngay, moi) => {
          x.ngay.add(ngay); x.phan++; if (moi) x.phanMoi++;
          const b = x.bai.get(url) || x.bai.set(url, []).get(url);
          b.push({ k, ten: TEN_PHAN[k] || k, c: p.correct || 0, t: p.total || 0, moi });
        };
        const xf = nf && vao(nf), xl = nl && vao(nl);
        if (xf) ghi(xf, nf, true);
        if (xl && xl !== xf) ghi(xl, nl, false);
      }));
      dn.out.forEach((r) => { if (r.uid !== uid) return; const x = vao(r.ngay); if (!x) return; x.cauDung += r.lc; x.cauThi += r.ec; if (r.lc + r.ec > 0) x.ngay.add(r.ngay); });

      // nong trai (tham khao)
      const ntTuan = (t) => {
        if (!nt.tuNgayCo || congNgay(t, 6) < nt.tuNgayCo) return null;
        const g = { ngay: new Set(), cau: 0, thaoTac: 0 };
        nt.out.forEach((r) => { if (r.uid === uid && tuanCuaNgay(r.ngay) === t && r.q + r.a + r.v > 0) { g.ngay.add(r.ngay); g.cau += r.q; g.thaoTac += r.a; } });
        return { ngay: g.ngay.size, cau: g.cau, thaoTac: g.thaoTac };
      };

      // bai kiem tra trong tuan: thi thu HSK + thi tren lop + Kiem tra cuoi bai
      const ktra = [];
      thi.filter((a) => a.userId === uid).forEach((a) => {
        const def = o.loadExamDef ? o.loadExamDef(a.examId) : null;
        ktra.push({ loai: 'thi', ten: chuTho((def && def.title) || ('Đề thi thử ' + a.examId), 80), diem: a.score, max: a.maxScore, c: a.correct, t: a.total, ngay: o.vnDayKey(a.submittedMs) });
        w[tuan].ngay.add(o.vnDayKey(a.submittedMs));
      });
      thiLop.filter((x) => x.userId === uid || (x.rosterId && rosterCua[x.rosterId] === uid)).forEach((x) => {
        ktra.push({ loai: 'lop', ten: x.ten, diem: x.diem, max: x.max, c: x.c, t: x.t, ngay: o.vnDayKey(x.ms) });
      });
      w[tuan].bai.forEach((ps, url) => ps.forEach((p) => {
        if (p.k === 'final' && p.t > 0) { const b = moTaBai(url); ktra.push({ loai: 'bai', ten: 'Kiểm tra cuối' + (b.so != null ? ' Bài ' + b.so : '') + (b.cap ? ' · ' + b.cap : ''), diem: null, max: null, c: p.c, t: p.t, ngay: null }); }
      }));

      // tu / cau em sai trong tuan (kho "Câu em từng sai")
      const v = resume[i] && resume[i][GIA] && resume[i][GIA].sai && resume[i][GIA].sai.v;
      const trong = (t) => t >= tu && t < den;
      const srs = sc.srs && typeof sc.srs === 'object' ? sc.srs : {};
      const cauM = new Map();
      if (v && typeof v === 'object') {
        [['ds', false], ['da', true]].forEach(([k, daSua]) => (Array.isArray(v[k]) ? v[k] : []).forEach((x) => {
          if (!x || typeof x.id !== 'string' || !x.c) return;
          const lan = (Array.isArray(x.ts) && x.ts.length ? x.ts : [x.t]).map(Number).filter((t) => t > 0 && trong(t));
          if (!lan.length) return;
          const r = cauM.get(x.id) || { x, lan: new Set(), daSua };
          lan.forEach((t) => r.lan.add(t));
          if (!daSua) r.daSua = false;
          cauM.set(x.id, r);
        }));
      }
      const tuLog = v && v.tu && typeof v.tu === 'object' && !Array.isArray(v.tu) ? v.tu : {};
      const tuM = new Map();
      Object.keys(tuLog).forEach((zh) => {
        const n = (Array.isArray(tuLog[zh]) ? tuLog[zh] : []).map(Number).filter(trong).length;
        if (n && zh.length <= 12) tuM.set(zh, n);
      });
      // cau tu vung sai cung la 1 lan quen tu (tu = de cau)
      const urlCau = [];
      cauM.forEach((r) => {
        if (typeof r.x.url === 'string') urlCau.push(r.x.url);
        const m = moTaCau(r.x.c);
        if (m && m.loai === 'Từ vựng' && m.de && m.de.length <= 8 && /[㐀-鿿]/.test(m.de)) tuM.set(m.de, (tuM.get(m.de) || 0) + r.lan.size);
      });
      const tuSai = Array.from(tuM, ([zh, lan]) => ({ zh, lan })).sort((a, b) => b.lan - a.lan || a.zh.localeCompare(b.zh)).slice(0, 6)
        .map((x) => Object.assign(x, traTu(x.zh, [srs[x.zh] && srs[x.zh].url].concat(urlCau))));
      const cauSai = Array.from(cauM.values()).map((r) => {
        const m = moTaCau(r.x.c);
        if (!m || m.loai === 'Từ vựng') return null;
        const b = typeof r.x.url === 'string' && BAI.theoUrl[r.x.url] ? moTaBai(r.x.url) : null;
        return Object.assign(m, { lan: r.lan.size, daSua: r.daSua, bai: b ? 'Bài ' + b.so + (b.cap ? ' · ' + b.cap : '') : '', t: Number(r.x.t) || 0 });
      }).filter(Boolean).sort((a, b) => b.lan - a.lan || b.t - a.t).slice(0, 3).map((x) => { delete x.t; return x; });

      const tom = (x, t, day) => {
        const coDiem = coDiemNgay(t);
        const r = {
          ngay: Array.from(x.ngay).filter((k) => tuanCuaNgay(k) === t).sort(), phan: x.phan, phanMoi: x.phanMoi,
          cauDung: coDiem ? x.cauDung : null, cauThi: coDiem ? x.cauThi : null, sao: saoTuan(sao[i], t),
        };
        r.soNgay = r.ngay.length;
        if (day) {
          r.bai = Array.from(x.bai, ([url, ps]) => Object.assign(moTaBai(url), {
            phan: ps.sort((a, b) => THU_TU_PHAN.indexOf(a.k) - THU_TU_PHAN.indexOf(b.k)),
          })).sort((a, b) => (a.cap === b.cap ? (a.so || 0) - (b.so || 0) : a.cap < b.cap ? -1 : 1));
          r.ktra = ktra;
          r.tuSai = tuSai;
          r.cauSai = cauSai;
          r.nt = ntTuan(t);
        } else {
          r.nt = ntTuan(t);
          delete r.ngay;
        }
        return r;
      };
      return { id: uid, ten: h.ten, coTk: true, nay: tom(w[tuan], tuan, true), truoc: tom(w[truoc], truoc, false) };
    });
    chuaTk.forEach((h) => hs.push({ id: h.id, ten: h.ten, coTk: false, nay: null, truoc: null }));

    const cls = (st.classes || []).find((c) => c.id === classId);
    return {
      lop: cls ? { id: cls.id, ten: cls.name } : null,
      tuan, tuanTruoc: truoc, tuanNay: o.vnWeekKey(now), nhan: nhanTuan(tuan), nhanTruoc: nhanTuan(truoc),
      cauDungDu: { nay: phuDiemNgay(tuan), truoc: phuDiemNgay(truoc) },
      ntTu: nt.tuNgayCo,
      hs, taoLuc: now,
    };
  }

  const nho = new Map(); // "lop|tuan" -> { t, data }
  app.get('/api/admin/bao-cao-tuan', o.requireAdmin, o.asyncRoute(async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    const now = Date.now();
    const st = await o.loadClassState();
    const names = await o.loadUserNames();
    const lops = (st.classes || []).map((c) => { const x = hsCuaLop(st, c.id, names); return { id: c.id, ten: c.name, si: x.coTk.length + x.chuaTk.length }; });
    const tuans = dsTuan(now);
    let tuan = String(req.query.tuan || '');
    if (!tuans.some((t) => t.k === tuan)) tuan = tuans[0].k;
    let lop = String(req.query.lop || '');
    if (!lops.some((l) => l.id === lop)) lop = lops[0] ? lops[0].id : '';
    const chung = { lops, tuans };
    if (!lop) return res.json(Object.assign({ lop: null, tuan, nhan: nhanTuan(tuan), hs: [], taoLuc: now }, chung));
    const key = lop + '|' + tuan;
    const c = nho.get(key);
    if (c && now - c.t < NHO_MS && req.query.moi !== '1') return res.json(Object.assign({}, c.data, chung, { nho: true }));
    const data = await tongHop(st, lop, tuan);
    nho.set(key, { t: Date.now(), data });
    if (nho.size > 40) for (const [k, x] of nho) if (Date.now() - x.t >= NHO_MS) nho.delete(k);
    res.json(Object.assign({}, data, chung));
  }));

  return { initTable: async () => {} };
};
