// "🎯 Học vs Chơi" (tab o /admin): moi tuan hoc sinh HOC nhieu hon hay CHOI nong trai nhieu hon —
// de co giao quyet dinh nen dau tu tinh nang hoc hay tinh nang game. Chi giao vien (requireAdmin).
//
// Nguon du lieu HOC (da co san, du 8 tuan):
//  - scores.studyDays            : cac ngay em co hoc (client gui khi dong bo diem)
//  - part_done first_ms / last_ms: phan bai lam lan dau / lan cap nhat diem gan nhat (chi 2 moc / phan)
//  - daily_points                : cau dung MOI trong bai hoc (lesson_correct) + cau dung o luot thi thu dau (exam_correct)
//                                  (MySQL giu het; ban file JSON local chi giu 14 ngay)
//  - stars (week / prev_week)    : sao chi kiem duoc khi hoc — chi co tuan nay + tuan truoc
// Nguon du lieu CHOI:
//  - BO DEM MOI farm_activity (user_id, day, quiz, acts, opens): dem nhe moi yeu cau /api/farm thanh cong,
//    gom trong bo nho, ghi xuong 1 lan / phut. Chi co so lieu tu luc deploy ban nay tro di.
//  - farms.updated_ms (MySQL): lan cuoi nong trai cua em thay doi
// Ket qua tong hop giu 5 phut (?moi=1 de doc lai ngay).
const path = require('path');

module.exports = function (app, o) {
  const NGAY = 864e5;
  const SO_TUAN = 8;
  const NHO_MS = 5 * 60 * 1000;
  const GHI_MS = 60 * 1000;
  const GIU_NGAY = 120; // bo dem chi giu 120 ngay gan nhat
  const FILE = path.join(o.DATA_DIR, 'farm_activity.json'); // { 'YYYY-MM-DD': { userId: { q, a, v } } }

  // ---------------- Bo dem hoat dong nong trai ----------------
  // Phan loai 1 yeu cau POST /api/farm/... thanh cong:
  //  q (cau hoi tieng Trung): gui dap an (/tl, /nhanhtl); cho an = 3 cau dung, tuoi nuoc = 1 cau dung (cau hoi chay o client)
  //  a (thao tac): moi POST con lai — tru lay cau hoi (/cau, /moi cua thu thach, /bat), danh dau da xem, va duong thu nghiem (/_...)
  //  v (mo nong trai): GET /api/farm
  const LAY_CAU = /(^|\/)(cau|giupcau)(\/|$)|^\/(chuhan|chuyengia|dukhach)\/moi$|^\/(pl|noel\/tv)\/bat$|^\/xuong\/nhanh$/;
  function phanLoai(method, p, body) {
    if (method === 'GET') return p === '/' || p === '' ? { v: 1 } : null;
    if (method !== 'POST' || /(^|\/)_/.test(p)) return null;
    if (/(^|\/)(tl|nhanhtl)(\/|$)/.test(p)) return { q: 1 };
    if (p === '/act') {
      const a = String((body && body.a) || '');
      if (a === 'choan') return { q: 3, a: 1 };
      if (a === 'tuoi') return { q: 1, a: 1 };
      if (a === 'xemnk' || a === 'capxem') return null;
      return { a: 1 };
    }
    if (LAY_CAU.test(p)) return null;
    return { a: 1 };
  }
  const dem = new Map(); // 'userId|ngay' -> { q, a, v } chua ghi
  app.use('/api/farm', (req, res, next) => {
    let loai = null;
    try { loai = phanLoai(req.method, req.path, req.body); } catch (e) { loai = null; }
    if (loai) {
      res.on('finish', () => {
        try {
          if (res.statusCode >= 400 || !req.user || !req.user.id) return;
          const k = req.user.id + '|' + o.vnDayKey();
          const x = dem.get(k) || { q: 0, a: 0, v: 0 };
          x.q += loai.q || 0; x.a += loai.a || 0; x.v += loai.v || 0;
          dem.set(k, x);
        } catch (e) { /* khong bao gio lam hong nong trai */ }
      });
    }
    next();
  });

  let dangGhi = null;
  async function ghiDem() {
    if (dangGhi) return dangGhi;
    if (!dem.size) return;
    const ds = Array.from(dem, ([k, x]) => { const i = k.lastIndexOf('|'); return { uid: k.slice(0, i), ngay: k.slice(i + 1), x }; });
    dem.clear();
    dangGhi = (async () => {
      try {
        if (!o.USE_DB) {
          const all = o.readJsonFile(FILE) || {};
          ds.forEach(({ uid, ngay, x }) => {
            const m = all[ngay] || (all[ngay] = {});
            const r = m[uid] || (m[uid] = { q: 0, a: 0, v: 0 });
            r.q += x.q; r.a += x.a; r.v += x.v;
          });
          const han = new Date(Date.now() - GIU_NGAY * NGAY).toISOString().slice(0, 10);
          Object.keys(all).forEach((d) => { if (d < han) delete all[d]; });
          o.writeJsonFile(FILE, all);
          return;
        }
        for (let i = 0; i < ds.length; i += 200) {
          const lo = ds.slice(i, i + 200);
          await o.db().query(
            'INSERT INTO farm_activity (user_id, day, quiz, acts, opens) VALUES ' + lo.map(() => '(?,?,?,?,?)').join(',') +
              ' ON DUPLICATE KEY UPDATE quiz = quiz + VALUES(quiz), acts = acts + VALUES(acts), opens = opens + VALUES(opens)',
            lo.flatMap(({ uid, ngay, x }) => [uid, ngay, x.q, x.a, x.v])
          );
        }
      } catch (err) {
        console.error('Hoc vs Choi — khong ghi duoc bo dem nong trai:', err.message);
      }
    })().finally(() => { dangGhi = null; });
    return dangGhi;
  }
  setInterval(ghiDem, GHI_MS).unref();

  async function initTable() {
    if (!o.USE_DB) return;
    await o.db().query(
      'CREATE TABLE IF NOT EXISTS farm_activity (' +
        'user_id VARCHAR(36) NOT NULL, day CHAR(10) NOT NULL, ' +
        'quiz INT NOT NULL DEFAULT 0, acts INT NOT NULL DEFAULT 0, opens INT NOT NULL DEFAULT 0, ' +
        'PRIMARY KEY (user_id, day), INDEX idx_day (day), ' +
        'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
      ')'
    );
    // don dong cu (1 lan moi khi khoi dong)
    await o.db().query('DELETE FROM farm_activity WHERE day < ?', [new Date(Date.now() - GIU_NGAY * NGAY).toISOString().slice(0, 10)]);
  }

  // ---------------- Doc du lieu ----------------
  async function docBoDem(tuNgay) {
    const out = []; // { uid, ngay, q, a, v }
    if (!o.USE_DB) {
      const all = o.readJsonFile(FILE) || {};
      Object.keys(all).forEach((ngay) => {
        if (ngay < tuNgay) return;
        Object.keys(all[ngay] || {}).forEach((uid) => { const r = all[ngay][uid] || {}; out.push({ uid, ngay, q: r.q || 0, a: r.a || 0, v: r.v || 0 }); });
      });
    } else {
      const [rows] = await o.db().query('SELECT user_id, day, quiz, acts, opens FROM farm_activity WHERE day >= ?', [tuNgay]);
      rows.forEach((r) => out.push({ uid: r.user_id, ngay: String(r.day), q: r.quiz || 0, a: r.acts || 0, v: r.opens || 0 }));
    }
    // cong ca phan dang nam trong bo nho (chua ghi)
    dem.forEach((x, k) => { const i = k.lastIndexOf('|'); const ngay = k.slice(i + 1); if (ngay >= tuNgay) out.push({ uid: k.slice(0, i), ngay, q: x.q, a: x.a, v: x.v }); });
    return out;
  }
  async function ngayDauBoDem() {
    if (!o.USE_DB) {
      const ks = Object.keys(o.readJsonFile(FILE) || {}).sort();
      return ks[0] || (dem.size ? o.vnDayKey() : null);
    }
    const [[r]] = await o.db().query('SELECT MIN(day) AS d FROM farm_activity');
    return (r && r.d ? String(r.d) : null) || (dem.size ? o.vnDayKey() : null);
  }
  async function docDiemNgay(tuNgay) {
    const out = []; // { uid, ngay, lc, ec }
    if (!o.USE_DB) {
      const all = o.readJsonFile(o.DAILY_POINTS_FILE) || {};
      Object.keys(all).forEach((ngay) => {
        if (ngay < tuNgay) return;
        Object.keys(all[ngay] || {}).forEach((uid) => { const r = all[ngay][uid] || {}; out.push({ uid, ngay, lc: r.lessonCorrect || 0, ec: r.examCorrect || 0 }); });
      });
      return out;
    }
    const [rows] = await o.db().query('SELECT user_id, day, lesson_correct, exam_correct FROM daily_points WHERE day >= ?', [tuNgay]);
    rows.forEach((r) => out.push({ uid: r.user_id, ngay: String(r.day), lc: r.lesson_correct || 0, ec: r.exam_correct || 0 }));
    return out;
  }
  // Chi cot ngay hoc (khong doc diem tung bai cho nhe)
  async function docNgayHoc() {
    const out = {};
    if (!o.USE_DB) {
      const all = o.readJsonFile(o.SCORES_FILE) || {};
      Object.keys(all).forEach((uid) => { out[uid] = Array.isArray(all[uid] && all[uid].studyDays) ? all[uid].studyDays : []; });
      return out;
    }
    const [rows] = await o.db().query('SELECT user_id, study_days FROM scores');
    rows.forEach((r) => { try { out[r.user_id] = JSON.parse(r.study_days || '[]'); } catch (e) { out[r.user_id] = []; } });
    return out;
  }
  async function docNongTrai() {
    const out = {}; // uid -> { ms } (ms = lan cuoi nong trai thay doi, chi MySQL)
    if (!o.USE_DB) {
      Object.keys(o.readJsonFile(path.join(o.DATA_DIR, 'farms.json')) || {}).forEach((uid) => { out[uid] = { ms: null }; });
      return out;
    }
    const [rows] = await o.db().query('SELECT user_id, updated_ms FROM farms');
    rows.forEach((r) => { out[r.user_id] = { ms: Number(r.updated_ms) || null }; });
    return out;
  }

  // ---------------- Tong hop ----------------
  function tuanCuaNgay(ngay) {
    const d = new Date(ngay + 'T00:00:00Z');
    if (isNaN(d)) return null;
    return new Date(d.getTime() - ((d.getUTCDay() + 6) % 7) * NGAY).toISOString().slice(0, 10);
  }
  function nhanTuan(t) {
    const a = new Date(t + 'T00:00:00Z'), b = new Date(a.getTime() + 6 * NGAY);
    const f = (d) => d.getUTCDate() + '/' + (d.getUTCMonth() + 1);
    return f(a) + ' – ' + f(b);
  }
  function rong() { return { ngayHoc: new Set(), phan: 0, phanMoi: 0, cauDung: 0, cauThi: 0, ngayChoi: new Set(), cauNT: 0, thaoTac: 0, moNT: 0 }; }

  async function tongHop() {
    const now = Date.now();
    await ghiDem();
    const tuanNay = o.vnWeekKey(now);
    const tuans = [];
    for (let i = SO_TUAN - 1; i >= 0; i--) tuans.push(o.vnWeekKey(now - i * 7 * NGAY));
    const tuNgay = tuans[0];
    const tuMs = Date.parse(tuNgay + 'T00:00:00Z') - o.VN_OFFSET_MS;
    const trongTuan = new Set(tuans);

    const [names, st, partDone, ngayHoc, diemNgay, boDem, ngayDau, sao, nt] = await Promise.all([
      o.loadUserNames(), o.loadClassState(), o.loadPartDone(null), docNgayHoc(), docDiemNgay(tuNgay),
      docBoDem(tuNgay), ngayDauBoDem(), o.loadAllStars(), docNongTrai(),
    ]);

    const m = new Map(); // uid -> Map(tuan -> so lieu)
    function o1(uid, tuan) {
      if (!tuan || !trongTuan.has(tuan) || !names[uid]) return null;
      let u = m.get(uid);
      if (!u) { u = new Map(); m.set(uid, u); }
      let x = u.get(tuan);
      if (!x) { x = rong(); u.set(tuan, x); }
      return x;
    }
    // Hoc: ngay hoc
    Object.keys(ngayHoc).forEach((uid) => (ngayHoc[uid] || []).forEach((ngay) => {
      if (typeof ngay !== 'string' || ngay < tuNgay) return;
      const x = o1(uid, tuanCuaNgay(ngay));
      if (x) x.ngayHoc.add(ngay);
    }));
    // Hoc: phan bai (lan dau + lan cap nhat cuoi)
    Object.keys(partDone || {}).forEach((uid) => Object.keys(partDone[uid] || {}).forEach((url) => {
      const parts = partDone[uid][url] || {};
      Object.keys(parts).forEach((p) => {
        const f = Number(parts[p].firstMs) || 0, l = Number(parts[p].lastMs) || 0;
        const nf = f ? o.vnDayKey(f) : '', nl = l ? o.vnDayKey(l) : '';
        if (f >= tuMs) { const x = o1(uid, tuanCuaNgay(nf)); if (x) { x.phan++; x.phanMoi++; x.ngayHoc.add(nf); } }
        if (l >= tuMs && nl !== nf) { const x = o1(uid, tuanCuaNgay(nl)); if (x) { x.phan++; x.ngayHoc.add(nl); } }
      });
    }));
    // Hoc: cau dung moi (bai hoc + thi thu)
    diemNgay.forEach((r) => {
      const x = o1(r.uid, tuanCuaNgay(r.ngay));
      if (!x) return;
      x.cauDung += r.lc; x.cauThi += r.ec;
      if (r.lc + r.ec > 0) x.ngayHoc.add(r.ngay);
    });
    // Choi: bo dem nong trai (+ ngay choi gan nhat — dung khi khong co farms.updated_ms)
    const ntNgayCua = {};
    boDem.forEach((r) => {
      const x = o1(r.uid, tuanCuaNgay(r.ngay));
      if (!x) return;
      x.cauNT += r.q; x.thaoTac += r.a; x.moNT += r.v;
      if (r.q + r.a + r.v > 0) {
        x.ngayChoi.add(r.ngay);
        if (!ntNgayCua[r.uid] || r.ngay > ntNgayCua[r.uid]) ntNgayCua[r.uid] = r.ngay;
      }
    });
    // Sao: chi tuan nay + tuan truoc
    const tuanTruoc = tuans[SO_TUAN - 2];
    const saoCua = {};
    (sao || []).forEach((s) => {
      saoCua[s.userId] = {
        nay: s.week === tuanNay ? (s.weekStars || 0) : 0,
        truoc: s.week === tuanTruoc ? (s.weekStars || 0) : s.prevWeek === tuanTruoc ? (s.prevWeekStars || 0) : 0,
      };
    });

    // Lop cua tung em + ten (danh sach lop da noi tai khoan duoc uu tien)
    const lopCua = {}, tenCua = {};
    Object.keys(st.members || {}).forEach((uid) => { if (st.members[uid]) lopCua[uid] = st.members[uid].classId; });
    (st.roster || []).forEach((r) => { if (r.userId) { tenCua[r.userId] = r.name; if (!lopCua[r.userId]) lopCua[r.userId] = r.classId; } });
    const lopCo = new Set((st.classes || []).map((c) => c.id));

    // Tong theo tuan cho 1 nhom hoc sinh
    function tongNhom(loc) {
      return tuans.map((t) => {
        const g = { tuan: t, nhan: nhanTuan(t), nguoiHoc: 0, nguoiChoi: 0, ca2: 0, chiChoi: 0, chiHoc: 0,
          ngayHoc: 0, phan: 0, phanMoi: 0, cauDung: 0, cauThi: 0, ngayChoi: 0, cauNT: 0, thaoTac: 0, moNT: 0, sao: null };
        m.forEach((u, uid) => {
          if (!loc(uid)) return;
          const x = u.get(t);
          if (!x) return;
          const hoc = x.ngayHoc.size > 0, choi = x.ngayChoi.size > 0;
          if (hoc) g.nguoiHoc++;
          if (choi) g.nguoiChoi++;
          if (hoc && choi) g.ca2++;
          if (choi && !hoc) g.chiChoi++;
          if (hoc && !choi) g.chiHoc++;
          g.ngayHoc += x.ngayHoc.size; g.phan += x.phan; g.phanMoi += x.phanMoi; g.cauDung += x.cauDung; g.cauThi += x.cauThi;
          g.ngayChoi += x.ngayChoi.size; g.cauNT += x.cauNT; g.thaoTac += x.thaoTac; g.moNT += x.moNT;
        });
        if (t === tuanNay || t === tuanTruoc) {
          g.sao = 0;
          Object.keys(saoCua).forEach((uid) => { if (names[uid] && loc(uid)) g.sao += t === tuanNay ? saoCua[uid].nay : saoCua[uid].truoc; });
        }
        return g;
      });
    }
    const tatCa = tongNhom(() => true);
    const lops = (st.classes || []).map((c) => ({ id: c.id, ten: c.name, tuan: tongNhom((uid) => lopCua[uid] === c.id) }));
    const chuaLop = tongNhom((uid) => !lopCua[uid] || !lopCo.has(lopCua[uid]));
    if (chuaLop.some((g) => g.nguoiHoc || g.nguoiChoi)) lops.push({ id: '', ten: 'Chưa vào lớp', tuan: chuaLop });

    // Tung hoc sinh: tuan nay + tuan truoc (chi em co hoat dong trong 2 tuan nay)
    const lopTen = {};
    (st.classes || []).forEach((c) => { lopTen[c.id] = c.name; });
    const tom = (x, s) => (x ? {
      ngayHoc: x.ngayHoc.size, phan: x.phan, cauDung: x.cauDung + x.cauThi, sao: s,
      ngayChoi: x.ngayChoi.size, cauNT: x.cauNT, thaoTac: x.thaoTac,
    } : { ngayHoc: 0, phan: 0, cauDung: 0, sao: s, ngayChoi: 0, cauNT: 0, thaoTac: 0 });
    const hocSinh = [];
    m.forEach((u, uid) => {
      const a = u.get(tuanNay), b = u.get(tuanTruoc);
      const s = saoCua[uid] || { nay: 0, truoc: 0 };
      if (!a && !b && !s.nay && !s.truoc) return;
      const lid = lopCua[uid] && lopCo.has(lopCua[uid]) ? lopCua[uid] : '';
      hocSinh.push({
        id: uid, ten: String(tenCua[uid] || names[uid] || '(học sinh)'), lop: lid, lopTen: lid ? lopTen[lid] : '',
        nay: tom(a, s.nay), truoc: tom(b, s.truoc),
        ntLuc: nt[uid] ? nt[uid].ms : null, ntNgay: ntNgayCua[uid] || null, coNT: !!nt[uid],
      });
    });
    // em chi co sao (chua co dong nao trong m) van hien
    Object.keys(saoCua).forEach((uid) => {
      if (m.has(uid) || !names[uid] || (!saoCua[uid].nay && !saoCua[uid].truoc)) return;
      const lid = lopCua[uid] && lopCo.has(lopCua[uid]) ? lopCua[uid] : '';
      hocSinh.push({ id: uid, ten: String(tenCua[uid] || names[uid]), lop: lid, lopTen: lid ? lopTen[lid] : '',
        nay: tom(null, saoCua[uid].nay), truoc: tom(null, saoCua[uid].truoc), ntLuc: nt[uid] ? nt[uid].ms : null, ntNgay: ntNgayCua[uid] || null, coNT: !!nt[uid] });
    });
    hocSinh.sort((x, y) => x.ten.localeCompare(y.ten, 'vi'));

    return {
      taoLuc: now, tuanNay, tuanTruoc, tuans,
      demTu: ngayDau, // ngay bat dau co so lieu nong trai (bo dem)
      diemNgayDu: o.USE_DB, // daily_points giu du 8 tuan (MySQL) hay chi 14 ngay (file JSON)
      tatCa, lops, hocSinh,
    };
  }

  let nho = null, dangTinh = null;
  // GET /api/admin/hoc-choi[?moi=1 bo qua bo nho 5 phut]
  app.get('/api/admin/hoc-choi', o.requireAdmin, o.asyncRoute(async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    if (nho && Date.now() - nho.taoLuc < NHO_MS && req.query.moi !== '1') return res.json(Object.assign({ nho: true }, nho));
    if (!dangTinh) dangTinh = tongHop().finally(() => { dangTinh = null; });
    nho = await dangTinh;
    res.json(nho);
  }));

  return { initTable, ghiDem };
};
