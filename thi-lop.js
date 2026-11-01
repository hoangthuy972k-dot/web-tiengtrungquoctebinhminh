// Thi tren lop (Che do lop hoc -> /thi-lop): giao vien chon 1 de trong kho thi thu
// HSK (public/exam/tests), chieu ma QR; hoc sinh vao /thi?ma=... tren dien thoai /
// may tinh va lam bai bang dung giao dien phong thi (exam.js, che do "lop").
// - Phan Nghe: may giao vien phat file nghe qua loa lop, hoc sinh chi chon dap an;
//   giao vien bam "Mo phan Doc" khi het bai nghe.
// - Dong ho dem nguoc chung cho ca lop (hetLuc tren may chu), giao vien co the cong gio.
// - Nop bai: may chu cham lai bang dap an trong de (gradeExam), giao vien xem bang diem
//   + thong ke tung cau. Hoc sinh thay diem / dap an ngay hoac khi giao vien cong bo.
// Khac live.js: phong DUOC LUU (MySQL bang thi_lop, hoac data/thi_lop.json) — may chu
// khoi dong lai giua gio thi thi bai lam va diem van con.
const crypto = require('crypto');
const path = require('path');

const MAX_HS = 80;
const MAX_PHONG_MO = 40;            // so phong dang mo cung luc (chua thu bai)
const GIU_TRONG_BO_NHO_MS = 6 * 3600 * 1000;
const AN_HAN_MS = 20 * 1000;        // het gio + 20 giay ma may hoc sinh chua tu nop -> may chu thu bai
const PHAN_HOP_LE = ['listen', 'read', 'write'];
// Thoi gian tung phan theo de thi that (phut) — dung khi giao vien chi chon vai phan
const PHUT_CHUAN = {
  hsk1: { listen: 15, read: 17 }, hsk2: { listen: 25, read: 22 },
  hsk3: { listen: 35, read: 30, write: 15 }, hsk4: { listen: 30, read: 40, write: 25 },
  hsk5: { listen: 30, read: 45, write: 40 }, hsk6: { listen: 35, read: 50, write: 45 },
};

function token() { return crypto.randomBytes(12).toString('hex'); }
function sachTen(s) {
  return String(s || '').replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 40);
}
function soSanhTen(s) { return sachTen(s).toLowerCase().normalize('NFC'); }

module.exports = function ganThiLop(app, d) {
  const FILE = path.join(d.DATA_DIR, 'thi_lop.json');
  const phong = new Map(); // ma -> phong (dang dung)
  const ban = new Set();   // ma cac phong co thay doi chua ghi

  async function initTable() {
    if (!d.USE_DB) return;
    await d.db().query(
      'CREATE TABLE IF NOT EXISTS thi_lop (' +
        'ma VARCHAR(8) PRIMARY KEY, ' +
        'exam_id VARCHAR(40) NOT NULL, ' +
        'tao_ms BIGINT NOT NULL, ' +
        'cap_nhat_ms BIGINT NOT NULL, ' +
        'du_lieu MEDIUMTEXT NOT NULL, ' +
        'INDEX idx_tao (tao_ms)' +
      ')'
    );
  }

  // ---------- luu / doc ----------
  function dongGoi(p) {
    return JSON.stringify(Object.assign({}, p, { hs: [...p.hs.values()], cham: undefined }));
  }
  function moGoi(raw) {
    let o;
    try { o = JSON.parse(raw); } catch (e) { return null; }
    if (!o || !o.ma) return null;
    o.hs = new Map((o.hs || []).map((h) => [h.pid, h]));
    o.cham = Date.now();
    return o;
  }
  async function ghi(p) {
    ban.delete(p.ma);
    const raw = dongGoi(p);
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      all[p.ma] = raw;
      d.writeJsonFile(FILE, all);
      return;
    }
    await d.db().query(
      'INSERT INTO thi_lop (ma, exam_id, tao_ms, cap_nhat_ms, du_lieu) VALUES (?,?,?,?,?) ' +
        'ON DUPLICATE KEY UPDATE cap_nhat_ms = VALUES(cap_nhat_ms), du_lieu = VALUES(du_lieu)',
      [p.ma, p.examId, p.tao, Date.now(), raw]
    );
  }
  function ghiNgay(p) { return ghi(p).catch((e) => { ban.add(p.ma); console.error('thi-lop: chua ghi duoc phong', p.ma, e.message); }); }
  async function docTuKho(ma) {
    if (!d.USE_DB) {
      const raw = (d.readJsonFile(FILE) || {})[ma];
      return raw ? moGoi(raw) : null;
    }
    const [rows] = await d.db().query('SELECT du_lieu FROM thi_lop WHERE ma = ? LIMIT 1', [ma]);
    return rows[0] ? moGoi(rows[0].du_lieu) : null;
  }
  async function layPhong(ma) {
    ma = String(ma || '');
    if (!/^\d{6}$/.test(ma)) return null;
    let p = phong.get(ma);
    if (!p) {
      p = await docTuKho(ma);
      if (p) phong.set(ma, p);
    }
    if (p) p.cham = Date.now();
    return p;
  }
  async function maMoi() {
    for (let i = 0; i < 40; i++) {
      const ma = String(crypto.randomInt(100000, 1000000));
      if (!phong.has(ma) && !(await docTuKho(ma))) return ma;
    }
    return null;
  }

  // Ghi dinh ky cac phong co bai lam moi; thu bai khi het gio; nha phong cu khoi bo nho
  setInterval(() => {
    const now = Date.now();
    for (const p of phong.values()) {
      if (p.pha === 'lam' && now > p.hetLuc + AN_HAN_MS) thuBai(p, true);
      if (ban.has(p.ma)) ghiNgay(p);
      else if (now - p.cham > GIU_TRONG_BO_NHO_MS) phong.delete(p.ma);
    }
  }, 5000).unref();

  // ---------- cham ----------
  // De chi gom cac phan giao vien chon; moi phan van toi da 100 diem nhu de that
  function deCuaPhong(p) {
    const def = d.loadExamDef(p.examId);
    if (!def) return null;
    const per = def.maxScore / def.sections.length;
    const sections = def.sections.filter((s) => p.phan.indexOf(s.id) !== -1);
    return Object.assign({}, def, {
      sections,
      maxScore: Math.round(per * sections.length),
      passScore: Math.round((def.passScore / def.maxScore) * per * sections.length),
      total: sections.reduce((a, s) => a + s.answers.length, 0),
    });
  }
  function chamHs(p, h, auto) {
    const def = deCuaPhong(p);
    if (!def) return;
    const g = d.gradeExam(def, h.tl || {});
    h.nop = Date.now();
    h.auto = !!auto;
    h.kq = { correct: g.correct, total: g.total, score: g.score, max: def.maxScore, pass: g.score >= def.passScore, sec: g.sec, dung: g.dung,
      giay: Math.max(0, Math.round((Math.min(h.nop, p.hetLuc || h.nop) - (p.batDau || h.nop)) / 1000)) };
  }
  function thuBai(p, auto) {
    for (const h of p.hs.values()) if (!h.nop) chamHs(p, h, true);
    p.pha = 'xong';
    p.thuLuc = Date.now();
    p.hetLuc = Math.min(p.hetLuc || p.thuLuc, p.thuLuc);
    p.tuThu = !!auto;
    ghiNgay(p);
  }
  function soDaLam(tl) {
    return Object.keys(tl || {}).filter((k) => tl[k] !== '' && tl[k] != null).length;
  }

  // ---------- hoc sinh ----------
  function layHs(p, src, res) {
    const h = p.hs.get(String(src.pid || ''));
    if (!h || h.tok !== src.tok) { res.status(403).json({ error: 'Em chưa vào phòng thi hoặc đã vào trên máy khác.', raKhoi: true }); return null; }
    h.thay = Date.now();
    return h;
  }
  function trangThaiHs(p, h) {
    const o = {
      ma: p.ma, tieuDe: p.tieuDe, examId: p.pha === 'cho' ? '' : p.examId, phan: p.phan, pha: p.pha, now: Date.now(),
      batDau: p.batDau || 0, hetLuc: p.hetLuc || 0, ngheXong: !!p.ngheXong, nghe: p.nghe || null,
      soHs: p.hs.size, hienKq: p.hienKq, congBo: !!p.congBo,
    };
    if (h) {
      o.ten = h.ten; o.daNop = !!h.nop;
      if (h.nop && (p.hienKq === 'ngay' || p.congBo)) o.kq = { correct: h.kq.correct, total: h.kq.total, score: h.kq.score, max: h.kq.max, pass: h.kq.pass, auto: h.auto };
    }
    return o;
  }

  async function nguoiDung(req) {
    const uid = await d.optionalUserId(req);
    if (!uid) return null;
    const ten = (await d.loadUserNames())[uid];
    return ten ? { id: uid, ten } : null;
  }

  // Thong tin truoc khi vao: ten de, danh sach lop (neu giao vien chon lop), ten tai khoan
  app.get('/api/thi-lop/:ma/thong-tin', d.asyncRoute(async (req, res) => {
    const p = await layPhong(req.params.ma);
    if (!p) return res.status(404).json({ error: 'Không tìm thấy phòng thi. Em kiểm tra lại mã trên bảng nhé.' });
    const u = await nguoiDung(req);
    const daVao = {};
    for (const h of p.hs.values()) if (h.rosterId) daVao[h.rosterId] = 1;
    let goiY = '';
    if (u && p.ds) {
      const st = await d.loadClassState();
      const r = st.roster.find((x) => x.userId === u.id && p.ds.some((y) => y.id === x.id));
      if (r) goiY = r.id;
    }
    res.json({
      ma: p.ma, tieuDe: p.tieuDe, pha: p.pha, tenLop: p.tenLop || '',
      ds: p.ds ? p.ds.map((r) => ({ id: r.id, ten: r.ten, da: !!daVao[r.id] })) : null,
      tk: u ? u.ten : '', goiY,
    });
  }));

  app.post('/api/thi-lop/:ma/vao', d.asyncRoute(async (req, res) => {
    const p = await layPhong(req.params.ma);
    if (!p) return res.status(404).json({ error: 'Không tìm thấy phòng thi. Em kiểm tra lại mã trên bảng nhé.' });
    const b = req.body || {};
    const u = await nguoiDung(req);
    let h = null, ten = '', rosterId = '';
    if (p.ds) {
      const r = p.ds.find((x) => x.id === String(b.rosterId || ''));
      if (!r) return res.status(400).json({ error: 'Em chọn tên mình trong danh sách lớp nhé.' });
      rosterId = r.id; ten = r.ten;
      h = [...p.hs.values()].find((x) => x.rosterId === rosterId) || null;
    } else {
      ten = sachTen(b.ten);
      if (ten.length < 2) return res.status(400).json({ error: 'Em nhập họ tên (ít nhất 2 chữ) nhé.' });
      h = [...p.hs.values()].find((x) => soSanhTen(x.ten) === soSanhTen(ten)) || null;
    }
    // Cung tai khoan (doi tu dien thoai sang may tinh) hoac giao vien da bam "Cho vao lai" -> lay lai cho cu, giu bai dang lam
    if (h) {
      const cungTk = u && h.userId && h.userId === u.id;
      if (!cungTk && !h.moLai) {
        return res.status(409).json({ error: (p.ds ? 'Bạn ' + ten + ' đã vào phòng thi trên một máy khác.' : 'Tên này đã có trong phòng thi.') +
          ' Nếu đúng là em vừa đổi máy, nhờ thầy cô bấm “Cho vào lại” cạnh tên em rồi vào lại.' });
      }
      h.tok = token(); h.moLai = false; h.thay = Date.now();
      if (u) h.userId = u.id;
      ban.add(p.ma);
      return res.json({ pid: h.pid, tok: h.tok, tl: h.tl || {}, sec: h.sec || 0, phong: trangThaiHs(p, h) });
    }
    if (p.pha === 'xong') return res.status(403).json({ error: 'Bài thi này đã thu bài rồi.' });
    if (p.hs.size >= MAX_HS) return res.status(403).json({ error: 'Phòng thi đã đủ ' + MAX_HS + ' bạn.' });
    h = { pid: token().slice(0, 10), tok: token(), ten, rosterId: rosterId || null, userId: u ? u.id : null, vao: Date.now(), thay: Date.now(), tl: {}, sec: 0, lam: 0, nop: 0, kq: null, auto: false, moLai: false };
    p.hs.set(h.pid, h);
    ghiNgay(p);
    res.json({ pid: h.pid, tok: h.tok, tl: {}, sec: 0, phong: trangThaiHs(p, h) });
  }));

  app.get('/api/thi-lop/:ma/hs', d.asyncRoute(async (req, res) => {
    const p = await layPhong(req.params.ma);
    if (!p) return res.status(404).json({ error: 'Không tìm thấy phòng thi.' });
    const h = layHs(p, req.query, res); if (!h) return;
    res.json(trangThaiHs(p, h));
  }));

  function nhanBaiLam(raw) {
    const tl = d.cleanExamAnswers(raw);
    return Object.keys(tl).length > 250 ? {} : tl;
  }

  // Luu bai dang lam (may hoc sinh gui moi khi chon / go dap an) — giao vien thay tien do,
  // het gio ma may em mat mang thi may chu cham bai da luu cuoi cung
  app.post('/api/thi-lop/:ma/luu', d.asyncRoute(async (req, res) => {
    const p = await layPhong(req.params.ma);
    if (!p) return res.status(404).json({ error: 'Không tìm thấy phòng thi.' });
    const b = req.body || {};
    const h = layHs(p, b, res); if (!h) return;
    if (p.pha === 'lam' && !h.nop) {
      h.tl = nhanBaiLam(b.tl);
      h.lam = soDaLam(h.tl);
      h.sec = Math.max(0, Math.min(2, Number(b.sec) || 0));
      ban.add(p.ma);
    }
    res.json(trangThaiHs(p, h));
  }));

  app.post('/api/thi-lop/:ma/nop', d.asyncRoute(async (req, res) => {
    const p = await layPhong(req.params.ma);
    if (!p) return res.status(404).json({ error: 'Không tìm thấy phòng thi.' });
    const b = req.body || {};
    const h = layHs(p, b, res); if (!h) return;
    if (p.pha === 'cho') return res.status(400).json({ error: 'Bài thi chưa bắt đầu.' });
    if (!h.nop) {
      // Het gio qua lau (may chu da tu thu bai) thi giu bai da luu, khong nhan ban moi
      if (p.pha === 'lam' || Date.now() <= p.hetLuc + AN_HAN_MS) { h.tl = nhanBaiLam(b.tl); h.lam = soDaLam(h.tl); }
      chamHs(p, h, !!b.auto);
      ghiNgay(p);
    }
    res.json(trangThaiHs(p, h));
  }));

  // ---------- giao vien (mat khau quan tri) ----------
  app.get('/api/thi-lop/de', d.requireAdmin, (req, res) => {
    const items = d.listExamDefs().map((def) => ({
      id: def.id, level: def.level, title: def.title, durationSec: def.durationSec,
      sections: def.sections.map((s) => ({ id: s.id, name: s.name, so: s.answers.length, phut: (PHUT_CHUAN[def.level] || {})[s.id] || 0 })),
    }));
    res.json({ items });
  });

  app.post('/api/thi-lop/tao', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const b = req.body || {};
    const def = d.loadExamDef(String(b.examId || ''));
    if (!def) return res.status(404).json({ error: 'Không tìm thấy đề thi.' });
    const coPhan = def.sections.map((s) => s.id);
    const phan = (Array.isArray(b.phan) ? b.phan : coPhan).filter((x) => PHAN_HOP_LE.indexOf(x) !== -1 && coPhan.indexOf(x) !== -1);
    if (!phan.length) return res.status(400).json({ error: 'Chọn ít nhất một phần thi.' });
    let dangMo = 0;
    for (const x of phong.values()) if (x.pha !== 'xong') dangMo++;
    if (dangMo >= MAX_PHONG_MO) return res.status(503).json({ error: 'Đang có quá nhiều phòng thi chưa thu bài. Thu bài các phòng cũ trước nhé.' });
    const ma = await maMoi();
    if (!ma) return res.status(503).json({ error: 'Chưa tạo được mã phòng, thử lại nhé.' });
    let ds = null, tenLop = '';
    if (b.classId) {
      const st = await d.loadClassState();
      const lop = st.classes.find((c) => c.id === String(b.classId));
      if (!lop) return res.status(404).json({ error: 'Không tìm thấy lớp.' });
      tenLop = lop.name;
      ds = st.roster.filter((r) => r.classId === lop.id).sort((x, y) => x.sort - y.sort).map((r) => ({ id: r.id, ten: r.name }));
      if (!ds.length) return res.status(400).json({ error: 'Lớp ' + lop.name + ' chưa có danh sách học sinh.' });
    }
    const phut = Math.max(1, Math.min(240, Math.round(Number(b.phut) || def.durationSec / 60 || 60)));
    const p = {
      ma, examId: def.id, tieuDe: def.title + (phan.length < coPhan.length ? ' · ' + def.sections.filter((s) => phan.indexOf(s.id) !== -1).map((s) => s.name).join(' + ') : ''),
      phan, phut, tao: Date.now(), cham: Date.now(), pha: 'cho', batDau: 0, hetLuc: 0, thuLuc: 0,
      ngheXong: phan[0] !== 'listen', nghe: null, hienKq: b.hienKq === 'ngay' ? 'ngay' : 'sau', congBo: false,
      classId: ds ? String(b.classId) : null, tenLop, ds, hs: new Map(),
    };
    phong.set(ma, p);
    await ghi(p);
    res.json({ ma });
  }));

  // Cac bai thi da to chuc (moi nhat truoc)
  app.get('/api/thi-lop/ds', d.requireAdmin, d.asyncRoute(async (req, res) => {
    let list = [];
    if (!d.USE_DB) list = Object.values(d.readJsonFile(FILE) || {}).map(moGoi).filter(Boolean);
    else {
      const [rows] = await d.db().query('SELECT du_lieu FROM thi_lop ORDER BY tao_ms DESC LIMIT 60');
      list = rows.map((r) => moGoi(r.du_lieu)).filter(Boolean);
    }
    // ban trong bo nho moi hon ban da ghi
    list = list.map((x) => phong.get(x.ma) || x).sort((a, b) => b.tao - a.tao).slice(0, 60);
    res.json({ items: list.map((p) => {
      const nop = [...p.hs.values()].filter((h) => h.nop);
      return {
        ma: p.ma, tieuDe: p.tieuDe, tenLop: p.tenLop || '', tao: p.tao, pha: p.pha, soHs: p.hs.size, soNop: nop.length,
        tb: nop.length ? Math.round(nop.reduce((s, h) => s + h.kq.score, 0) / nop.length) : null, max: nop[0] ? nop[0].kq.max : null,
      };
    }) });
  }));

  async function phongGv(req, res) {
    const p = await layPhong(req.params.ma);
    if (!p) { res.status(404).json({ error: 'Không tìm thấy phòng thi.' }); return null; }
    return p;
  }
  function trangThaiGv(p, chiTiet) {
    const now = Date.now();
    const def = deCuaPhong(p);
    return {
      ma: p.ma, examId: p.examId, tieuDe: p.tieuDe, phan: p.phan, phut: p.phut, pha: p.pha, now,
      tao: p.tao, batDau: p.batDau, hetLuc: p.hetLuc, thuLuc: p.thuLuc, ngheXong: !!p.ngheXong, nghe: p.nghe,
      hienKq: p.hienKq, congBo: !!p.congBo, tenLop: p.tenLop || '', classId: p.classId,
      max: def ? def.maxScore : 0, dat: def ? def.passScore : 0, tong: def ? def.total : 0,
      chuaVao: p.ds ? p.ds.filter((r) => ![...p.hs.values()].some((h) => h.rosterId === r.id)).map((r) => r.ten) : [],
      hs: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => {
        const o = { pid: h.pid, ten: h.ten, vao: h.vao, lam: h.lam || 0, sec: h.sec || 0, nop: h.nop || 0, auto: !!h.auto, moLai: !!h.moLai,
          mat: !h.nop && p.pha === 'lam' && now - (h.thay || 0) > 20000 };
        if (h.kq) {
          o.kq = { correct: h.kq.correct, total: h.kq.total, score: h.kq.score, max: h.kq.max, pass: h.kq.pass, sec: h.kq.sec, giay: h.kq.giay };
          if (chiTiet) { o.dung = h.kq.dung; o.tl = h.tl; }
        }
        return o;
      }),
    };
  }

  app.get('/api/thi-lop/:ma/gv', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const p = await phongGv(req, res); if (!p) return;
    res.json(trangThaiGv(p, req.query.chiTiet === '1'));
  }));

  app.post('/api/thi-lop/:ma/batdau', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const p = await phongGv(req, res); if (!p) return;
    if (p.pha === 'cho') {
      p.pha = 'lam';
      p.batDau = Date.now();
      p.hetLuc = p.batDau + p.phut * 60000;
      await ghi(p);
    }
    res.json(trangThaiGv(p));
  }));

  // Cong / bot gio cho ca lop
  app.post('/api/thi-lop/:ma/gio', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const p = await phongGv(req, res); if (!p) return;
    const phut = Math.max(-30, Math.min(60, Math.round(Number((req.body || {}).phut) || 0)));
    if (p.pha === 'lam' && phut) {
      p.hetLuc = Math.max(Date.now() + 30000, p.hetLuc + phut * 60000);
      p.phut = Math.round((p.hetLuc - p.batDau) / 60000);
      await ghi(p);
    }
    res.json(trangThaiGv(p));
  }));

  // Trang thai bai nghe tren may giao vien: cau dang phat (hoc sinh thay "Dang phat cau 5"), het phan Nghe
  app.post('/api/thi-lop/:ma/nghe', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const p = await phongGv(req, res); if (!p) return;
    const b = req.body || {};
    p.nghe = { cau: Math.max(0, Math.min(200, Number(b.cau) || 0)), phat: !!b.phat, luc: Date.now() };
    if (b.xong && !p.ngheXong) { p.ngheXong = true; await ghi(p); }
    res.json({ ok: true, ngheXong: !!p.ngheXong });
  }));

  app.post('/api/thi-lop/:ma/thu', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const p = await phongGv(req, res); if (!p) return;
    if (p.pha !== 'xong') thuBai(p, false);
    res.json(trangThaiGv(p, true));
  }));

  app.post('/api/thi-lop/:ma/congbo', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const p = await phongGv(req, res); if (!p) return;
    p.congBo = !!(req.body || {}).bat;
    await ghi(p);
    res.json(trangThaiGv(p));
  }));

  // Hoc sinh doi may / tai lai trang bi mat ma: cho em vao lai dung cho cu (giu bai dang lam)
  app.post('/api/thi-lop/:ma/molai', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const p = await phongGv(req, res); if (!p) return;
    const h = p.hs.get(String((req.body || {}).pid || ''));
    if (h) { h.moLai = true; ban.add(p.ma); }
    res.json(trangThaiGv(p));
  }));

  // Moi ra (vao nham ten, may thu...)
  app.post('/api/thi-lop/:ma/moi-ra', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const p = await phongGv(req, res); if (!p) return;
    p.hs.delete(String((req.body || {}).pid || ''));
    await ghi(p);
    res.json(trangThaiGv(p));
  }));

  app.post('/api/thi-lop/:ma/xoa', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const ma = String(req.params.ma || '');
    phong.delete(ma);
    ban.delete(ma);
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      delete all[ma];
      d.writeJsonFile(FILE, all);
    } else await d.db().query('DELETE FROM thi_lop WHERE ma = ?', [ma]);
    res.json({ ok: true });
  }));

  return { initTable };
};
