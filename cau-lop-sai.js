// "📊 Câu lớp hay sai" (tab o /admin): nhung cau / tu ca lop lam sai nhieu nhat trong tuan,
// de co giao giang lai tren lop. Chi giao vien (requireAdmin) — hoc sinh khong bao gio thay du lieu cua ban khac.
//
// Nguon du lieu (chi hoc sinh DA DANG NHAP khi luyen tap moi co):
//  - kho "Câu em từng sai" (public/js/cau-sai.js) dong bo len tai khoan qua "bai dang lam do":
//    resume['/lessons/on-hom-nay.html'].sai.v = { ds: [cau dang con sai], da: [cau da sua dung], tu: { chu: [ms] } }
//    moi cau: id (bam url + loai + noi dung — giong nhau giua cac em), ts (cac lan sai), tl (dap an em chon sai)
//  - reviewWrongWords trong diem (tu dang no o bai on — khong co moc thoi gian) + srs[chu].url (de tra nghia)
//  - part_done (phan bai em da lam, lan dau / lan doi diem cuoi) -> uoc luong so ban "da lam" phan do
// Doc du lieu tung em 1 lan / yeu cau, giu ket qua 5 phut (lop <= 60 em).
module.exports = function (app, o) {
  const GIA = '/lessons/on-hom-nay.html';
  const NHO_MS = 5 * 60 * 1000;
  const NGAY = 864e5;
  const nho = new Map(); // "classId|tuan" -> { t, data }

  function dauTuan(ms) { return Date.parse(o.vnWeekKey(ms) + 'T00:00:00Z') - o.VN_OFFSET_MS; }
  function khoang(tuan, now) {
    const d0 = dauTuan(now);
    if (tuan === 1) return { tu: d0 - 7 * NGAY, den: d0 };
    if (tuan === 4) return { tu: d0 - 21 * NGAY, den: d0 + 7 * NGAY };
    return { tu: d0, den: d0 + 7 * NGAY };
  }
  function ngayVn(ms) { const d = new Date(ms + o.VN_OFFSET_MS); return d.getUTCDate() + '/' + (d.getUTCMonth() + 1); }

  // HTML (de cua chinh trang, hay du lieu hoc sinh gui len) -> chu tron: khong bao gio dua HTML cua hoc sinh vao trang quan tri
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

  // 1 cau trong kho -> cau de hien cho giao vien (chu tron)
  function moTa(c) {
    if (!c || typeof c !== 'object') return null;
    if (c.k === 'xep') {
      if (!Array.isArray(c.tu) || !c.dap) return null;
      return { loai: 'sap-xep', lenh: chuTho(c.lenh || 'Xếp các từ thành câu đúng', 100), de: '', ctx: chuTho(c.ctx, 200),
        tu: c.tu.slice(0, 14).map((w) => chuTho(w, 24)), dap: chuTho(c.dap, 160), why: chuTho(c.why, 400) };
    }
    if (c.k === 'go') {
      if (!c.dap) return null;
      const de = c.html ? chuTho(c.html, 400) : [chuTho(c.pre, 200), '＿＿', chuTho(c.post, 200)].join(' ').trim();
      return { loai: 'dien-tu', lenh: chuTho(c.lenh || 'Điền từ còn thiếu vào chỗ trống', 100), de, dap: chuTho(c.dap, 60),
        goiY: chuTho(c.hint, 100), why: chuTho(c.why, 400) };
    }
    if (c.k || !Array.isArray(c.opts) || typeof c.dung !== 'number' || c.dung < 0 || c.dung >= c.opts.length) return null;
    const opts = c.opts.slice(0, 6).map((x) => chuTho(x, 160));
    const lenh = chuTho(c.lenh, 120);
    const loai = c.nghe ? 'nghe' : /^Từ này nghĩa là gì/.test(lenh) ? 'tu-vung' : 'trac-nghiem';
    return { loai, lenh, de: c.html ? chuTho(c.html, 400) : chuTho(c.zh, 300), ctx: chuTho(c.ctx, 200),
      nghe: chuTho(c.nghe, 160), py: chuTho(c.py, 160), opts, dung: c.dung, dap: opts[c.dung] || '', why: chuTho(c.why, 400) };
  }

  // Hoc sinh co tai khoan trong lop: danh sach lop (roster) da noi tai khoan + thanh vien vao bang ma lop
  function hsCuaLop(st, classId, names) {
    const m = new Map();
    (st.roster || []).filter((r) => r.classId === classId && r.userId).forEach((r) => m.set(r.userId, r.name));
    Object.keys(st.members || {}).forEach((uid) => {
      if (st.members[uid] && st.members[uid].classId === classId && !m.has(uid)) m.set(uid, (names && names[uid]) || '(học sinh)');
    });
    return Array.from(m, ([uid, ten]) => ({ uid, ten: String(ten || '(học sinh)') }));
  }

  function phanCua(src) { return src === 'kt' ? 'final' : src === 'luyen' || src === 'ohn' ? 'game' : null; }

  async function tongHop(st, classId, tuan) {
    const now = Date.now();
    const { tu, den } = khoang(tuan, now);
    const trong = (t) => t >= tu && t < den;
    const names = await o.loadUserNames();
    const hs = hsCuaLop(st, classId, names);
    const uids = hs.map((h) => h.uid);
    const [kho, diem, partDone] = await Promise.all([
      Promise.all(uids.map((u) => Promise.resolve().then(() => o.loadResume(u)).catch(() => ({})))),
      Promise.all(uids.map((u) => Promise.resolve().then(() => o.loadScoreOf(u)).catch(() => null))),
      uids.length ? Promise.resolve().then(() => o.loadPartDone(uids)).catch(() => ({})) : {},
    ]);

    const cau = new Map();   // id -> tong hop
    const tuM = new Map();   // chu -> { quen: Set, lanQuen, no: Set, url }
    let coKho = 0, coSai = 0;
    function themTu(zh, h, loai, n, url) {
      zh = String(zh || '').trim();
      if (!zh || zh.length > 12) return;
      const w = tuM.get(zh) || { zh, quen: new Map(), lanQuen: 0, no: new Map(), url: '' };
      tuM.set(zh, w);
      if (loai === 'quen') { w.quen.set(h.uid, h.ten); w.lanQuen += n; } else w.no.set(h.uid, h.ten);
      if (!w.url && url) w.url = url;
    }

    hs.forEach((h, i) => {
      const e = kho[i] && kho[i][GIA] && kho[i][GIA].sai;
      const v = e && e.v && typeof e.v === 'object' ? e.v : null;
      if (v) coKho++;
      // cau sai cua em nay trong khoang (ds + da, cung id thi gop)
      const cuaEm = new Map();
      (v && Array.isArray(v.ds) ? v.ds : []).concat(v && Array.isArray(v.da) ? v.da : []).forEach((x) => {
        if (!x || typeof x.id !== 'string' || x.id.length > 40 || !x.c) return;
        const lan = (Array.isArray(x.ts) && x.ts.length ? x.ts : [x.t]).map(Number).filter((t) => t > 0 && trong(t));
        if (!lan.length) return;
        const r = cuaEm.get(x.id) || { x, lan: new Set(), tl: [] };
        if ((Number(x.t) || 0) > (Number(r.x.t) || 0)) r.x = x;
        lan.forEach((t) => r.lan.add(t));
        (Array.isArray(x.tl) ? x.tl : []).forEach((p) => { if (Array.isArray(p) && p[0] && trong(Number(p[1]))) r.tl.push(p); });
        cuaEm.set(x.id, r);
      });
      if (cuaEm.size) coSai++;
      cuaEm.forEach((r, id) => {
        const a = cau.get(id) || { id, x: r.x, hs: [], lan: 0, tl: {} };
        if ((Number(r.x.t) || 0) > (Number(a.x.t) || 0)) a.x = r.x;
        a.hs.push(h);
        a.lan += r.lan.size;
        const daDem = new Set();
        r.tl.forEach((p) => { const k = p[0] + '|' + p[1]; if (daDem.has(k)) return; daDem.add(k); const s = chuTho(p[0], 60); if (s) a.tl[s] = (a.tl[s] || 0) + 1; });
        cau.set(id, a);
      });
      // tu: lan quen co moc thoi gian (kho tu) + tu dang no o bai on (khong moc)
      const sc = diem[i] || {};
      const srs = sc.srs && typeof sc.srs === 'object' ? sc.srs : {};
      const tuLog = v && v.tu && typeof v.tu === 'object' && !Array.isArray(v.tu) ? v.tu : {};
      Object.keys(tuLog).forEach((zh) => {
        const n = (Array.isArray(tuLog[zh]) ? tuLog[zh] : []).map(Number).filter(trong).length;
        if (n) themTu(zh, h, 'quen', n, srs[zh] && srs[zh].url);
      });
      const no = new Set();
      Object.values(sc.reviewWrongWords || {}).forEach((ds) => (Array.isArray(ds) ? ds : []).forEach((zh) => { if (typeof zh === 'string') no.add(zh); }));
      no.forEach((zh) => themTu(zh, h, 'no', 0, srs[zh] && srs[zh].url));
    });

    const tenSx = (arr) => arr.map((h) => h.ten).sort((a, b) => a.localeCompare(b, 'vi'));
    const dsCau = Array.from(cau.values()).map((a) => {
      const m = moTa(a.x.c);
      if (!m) return null;
      const url = typeof a.x.url === 'string' ? a.x.url : '';
      const b = o.MUC_LUC_BAI.theoUrl[url];
      const lv = (b && b.lv) || String(a.x.lv || '');
      // so ban da lam phan nay trong khoang (uoc luong tu part_done) — luon tinh ca cac ban da sai
      let lam = null;
      const phan = b && phanCua(a.x.src);
      if (phan) {
        const ai = new Set(a.hs.map((h) => h.uid));
        uids.forEach((u) => {
          const p = partDone[u] && partDone[u][url] && partDone[u][url][phan];
          if (p && (trong(Number(p.firstMs)) || trong(Number(p.lastMs)))) ai.add(u);
        });
        lam = ai.size;
      }
      const dapChuan = String(m.dap || '').replace(/\s+/g, '');
      const saiNhieu = Object.keys(a.tl).filter((k) => k.replace(/\s+/g, '') !== dapChuan)
        .sort((x, y) => a.tl[y] - a.tl[x])[0];
      return Object.assign(m, {
        id: a.id,
        nguon: String(a.x.src || ''),
        bai: { lv, cap: o.MUC_LUC_BAI.tenCap[lv] || lv, so: b ? b.so : null, url: b ? url : '' },
        saiNhieu: saiNhieu ? { a: saiNhieu, n: a.tl[saiNhieu] } : null,
        hs: a.hs.length, lam, lan: a.lan, ten: tenSx(a.hs),
        tMoi: Number(a.x.t) || 0,
      });
    }).filter(Boolean)
      .sort((x, y) => y.hs - x.hs || y.lan - x.lan || y.tMoi - x.tMoi)
      .slice(0, 20);

    const dsTu = Array.from(tuM.values()).map((w) => {
      const ai = new Map(w.quen);
      w.no.forEach((ten, uid) => ai.set(uid, ten));
      let py = '', vn = '';
      if (w.url) {
        const v = (o.tuVungBai(w.url) || []).find((x) => x.zh === w.zh);
        if (v) { py = v.py; vn = v.vn; }
      }
      return { zh: w.zh, py, vn, quen: w.quen.size, lanQuen: w.lanQuen, no: w.no.size, hs: ai.size,
        ten: Array.from(ai.values()).sort((a, b) => a.localeCompare(b, 'vi')) };
    }).sort((x, y) => y.quen - x.quen || y.hs - x.hs || y.lanQuen - x.lanQuen || x.zh.localeCompare(y.zh))
      .slice(0, 20);

    const cls = st.classes.find((c) => c.id === classId);
    const nhanTuan = tuan === 1 ? 'Tuần trước' : tuan === 4 ? '4 tuần gần đây' : 'Tuần này';
    return {
      lop: cls ? { id: cls.id, ten: cls.name } : null,
      tuan, tu, den,
      nhan: nhanTuan + ' (' + ngayVn(tu) + ' – ' + ngayVn(den - NGAY) + ')',
      si: hs.length, coKho, coSai,
      cau: dsCau, tuVung: dsTu,
      taoLuc: now,
    };
  }

  // GET /api/admin/cau-sai?classId=&tuan=0|1|4[&moi=1 bo qua bo nho 5 phut]
  app.get('/api/admin/cau-sai', o.requireAdmin, o.asyncRoute(async (req, res) => {
    const st = await o.loadClassState();
    const names = await o.loadUserNames();
    const lops = st.classes.map((c) => ({ id: c.id, ten: c.name, si: hsCuaLop(st, c.id, names).length }));
    let classId = String(req.query.classId || '');
    if (!st.classes.some((c) => c.id === classId)) classId = st.classes[0] ? st.classes[0].id : '';
    const tuan = [0, 1, 4].indexOf(Number(req.query.tuan)) >= 0 ? Number(req.query.tuan) : 0;
    res.setHeader('Cache-Control', 'no-store');
    if (!classId) return res.json({ lops, lop: null, tuan, si: 0, coKho: 0, coSai: 0, cau: [], tuVung: [], taoLuc: Date.now() });
    const key = classId + '|' + tuan;
    const c = nho.get(key);
    if (c && Date.now() - c.t < NHO_MS && req.query.moi !== '1') return res.json(Object.assign({}, c.data, { lops, nho: true }));
    const data = await tongHop(st, classId, tuan);
    nho.set(key, { t: Date.now(), data });
    if (nho.size > 60) {
      for (const [k, x] of nho) if (Date.now() - x.t >= NHO_MS) nho.delete(k);
    }
    res.json(Object.assign({}, data, { lops }));
  }));
};
