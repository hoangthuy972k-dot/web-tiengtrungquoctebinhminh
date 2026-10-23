// Phien choi truc tiep (Che do lop hoc): giao vien chieu cau hoi len bang,
// hoc sinh vao /choi bang ma phong tren dien thoai (khong can tai khoan),
// bam A/B/C/D, giao vien lat dap an, may cham diem theo toc do.
// Phong chi luu trong bo nho — tat may chu la mat, du cho mot tiet hoc.
// Hai kieu phong: 'gv' (giao vien dieu khien tung cau, mac dinh) va 'nhip'
// (moi em tu lam lan luot ca bo cau theo toc do cua minh).
const crypto = require('crypto');

const MAX_PHONG = 300;
const MAX_HS = 80;
const HET_HAN_MS = 4 * 60 * 60 * 1000;   // phong bo khong qua 4 tieng thi xoa
const TAO_MOI_GIO = 12;                   // moi IP tao toi da 12 phong / gio

const phong = new Map();     // ma -> phong
const taoTheoIp = new Map(); // ip -> [thoi diem tao]

function token() { return crypto.randomBytes(12).toString('hex'); }
function maMoi() {
  for (let i = 0; i < 50; i++) {
    const ma = String(crypto.randomInt(100000, 1000000));
    if (!phong.has(ma)) return ma;
  }
  return null;
}
function donPhong() {
  const now = Date.now();
  for (const [ma, p] of phong) if (now - p.cham > HET_HAN_MS) phong.delete(ma);
  for (const [ip, ds] of taoTheoIp) {
    const con = ds.filter((t) => now - t < 3600000);
    if (con.length) taoTheoIp.set(ip, con); else taoTheoIp.delete(ip);
  }
}
setInterval(donPhong, 10 * 60 * 1000).unref();

function sachTen(s) {
  return String(s || '').replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 20);
}
function chuoi(s, n) { return String(s == null ? '' : s).slice(0, n); }
function tron(n) {
  const a = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) { const j = crypto.randomInt(0, i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
// Kieu 'nhip': moi em mot thu tu cau rieng (ban ben canh kho nhin bai nhau)
function giaoBo(p, h) {
  h.thuTu = tron(p.ds.length);
  h.i = 0; h.dungSo = 0; h.xong = false; h.tgI = -1; h.tg = 0; h.xongLuc = 0;
}

function bangXepHang(p) {
  return [...p.hs.values()]
    .sort((a, b) => b.diem - a.diem || (a.xongLuc || Infinity) - (b.xongLuc || Infinity) || a.vao - b.vao)
    .map((h, i) => ({
      pid: h.pid, ten: h.ten, diem: h.diem, cong: h.cong || 0, chuoi: h.chuoi, hang: i + 1,
      lam: h.i || 0, dungSo: h.dungSo || 0, xong: !!h.xong,
    }));
}

module.exports = function gan(app) {
  function layPhong(req, res) {
    const p = phong.get(String(req.params.ma || ''));
    if (!p) { res.status(404).json({ error: 'Không tìm thấy phòng. Em kiểm tra lại mã trên bảng nhé.' }); return null; }
    p.cham = Date.now();
    return p;
  }
  function laGv(p, req, res) {
    const k = (req.body && req.body.khoa) || req.query.khoa;
    if (k !== p.khoa) { res.status(403).json({ error: 'Không có quyền điều khiển phòng này.' }); return false; }
    return true;
  }
  function layHs(p, src, res) {
    const h = p.hs.get(String(src.pid || ''));
    if (!h || h.tok !== src.tok) { res.status(403).json({ error: 'Em chưa vào phòng hoặc đã bị mời ra.', raKhoi: true }); return null; }
    return h;
  }

  // ---- giao vien ----
  app.post('/api/live/tao', (req, res) => {
    donPhong();
    // dia chi do proxy cua hosting them vao CUOI x-forwarded-for (giong clientIp trong server.js)
    const ip = String(req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress || 'x';
    const ds = taoTheoIp.get(ip) || [];
    if (ds.length >= TAO_MOI_GIO) return res.status(429).json({ error: 'Tạo phòng nhiều quá, đợi một lúc rồi thử lại nhé.' });
    if (phong.size >= MAX_PHONG) return res.status(503).json({ error: 'Máy chủ đang có quá nhiều phòng, thử lại sau nhé.' });
    const ma = maMoi();
    if (!ma) return res.status(503).json({ error: 'Chưa tạo được mã phòng, thử lại nhé.' });
    ds.push(Date.now()); taoTheoIp.set(ip, ds);
    const kieu = (req.body || {}).kieu === 'nhip' ? 'nhip' : 'gv';
    const p = { ma, kieu, khoa: token(), tao: Date.now(), cham: Date.now(), pha: 'cho', qid: 0, cau: null, dung: -1, batDau: 0, hs: new Map(), soVao: 0, ds: null };
    phong.set(ma, p);
    res.json({ ma, khoa: p.khoa });
  });

  app.post('/api/live/:ma/cau', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    const b = req.body || {};
    const opts = Array.isArray(b.opts) ? b.opts.slice(0, 4).map((o) => chuoi(o, 120)) : [];
    if (opts.length < 2) return res.status(400).json({ error: 'Câu hỏi cần ít nhất 2 đáp án.' });
    const dung = Number(b.dung);
    p.qid++;
    p.pha = 'hoi';
    p.cau = { zh: chuoi(b.zh, 300), opts, secs: Math.max(5, Math.min(300, Number(b.secs) || 30)), so: Number(b.so) || p.qid, tong: Number(b.tong) || 0 };
    p.dung = Number.isInteger(dung) && dung >= 0 && dung < opts.length ? dung : -1;
    p.batDau = Date.now();
    for (const h of p.hs.values()) { h.tl = null; h.cong = 0; }
    res.json({ ok: true, qid: p.qid });
  });

  app.post('/api/live/:ma/lat', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.pha !== 'hoi') return res.json({ ok: true, bxh: bangXepHang(p).slice(0, 10) });
    p.pha = 'lat';
    const secsMs = p.cau.secs * 1000;
    for (const h of p.hs.values()) {
      h.cong = 0;
      if (h.tl && h.tl.qid === p.qid && h.tl.chon === p.dung) {
        // dung: 500 diem nen + toi da 500 diem toc do, chuoi dung lien tiep thuong them
        const nhanh = Math.max(0, 1 - h.tl.ms / secsMs);
        h.chuoi++;
        h.cong = 500 + Math.round(500 * nhanh) + Math.min(3, h.chuoi - 1) * 100;
        h.diem += h.cong;
      } else {
        h.chuoi = 0;
      }
    }
    const bxh = bangXepHang(p);
    bxh.forEach((r) => { p.hs.get(r.pid).hang = r.hang; });
    res.json({ ok: true, bxh: bxh.slice(0, 10) });
  });

  // Kieu 'nhip': giao vien gui ca bo cau va bat dau, hoc sinh tu lam
  app.post('/api/live/:ma/batdau', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.kieu !== 'nhip') return res.status(400).json({ error: 'Phòng này không phải kiểu tự làm.' });
    const ds = (Array.isArray((req.body || {}).cau) ? req.body.cau : []).slice(0, 200).map((c) => {
      const opts = Array.isArray(c.opts) ? c.opts.slice(0, 4).map((o) => chuoi(o, 120)) : [];
      const dung = Number(c.dung);
      return { zh: chuoi(c.zh, 300), ctx: chuoi(c.ctx, 200), why: chuoi(c.why, 300), opts, dung: Number.isInteger(dung) && dung >= 0 && dung < opts.length ? dung : -1 };
    }).filter((c) => c.opts.length >= 2 && c.dung >= 0);
    if (!ds.length) return res.status(400).json({ error: 'Chưa có câu hỏi nào.' });
    p.ds = ds;
    p.pha = 'choi';
    p.batDau = Date.now();
    for (const h of p.hs.values()) { h.diem = 0; h.chuoi = 0; giaoBo(p, h); }
    res.json({ ok: true, tong: ds.length });
  });

  app.post('/api/live/:ma/xong', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    p.pha = 'het';
    res.json({ ok: true, bxh: bangXepHang(p).slice(0, 10) });
  });

  app.post('/api/live/:ma/duoi', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    p.hs.delete(String((req.body || {}).pid || ''));
    res.json({ ok: true });
  });

  app.get('/api/live/:ma/gv', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    const phanBo = p.cau ? p.cau.opts.map(() => 0) : [];
    let daTL = 0;
    for (const h of p.hs.values()) {
      if (h.tl && h.tl.qid === p.qid) { daTL++; if (phanBo[h.tl.chon] != null) phanBo[h.tl.chon]++; }
    }
    if (p.kieu === 'nhip') {
      const bxh = bangXepHang(p);
      return res.json({ kieu: 'nhip', pha: p.pha, soHs: p.hs.size, tong: p.ds ? p.ds.length : 0, batDau: p.batDau,
        ds: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => ({ pid: h.pid, ten: h.ten })),
        soXong: bxh.filter((r) => r.xong).length, bxh });
    }
    res.json({
      pha: p.pha, qid: p.qid, soHs: p.hs.size, daTL,
      phanBo: p.pha === 'lat' || p.pha === 'het' ? phanBo : null,
      ds: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => ({ pid: h.pid, ten: h.ten })),
      bxh: bangXepHang(p).slice(0, 10),
    });
  });

  // ---- hoc sinh ----
  app.post('/api/live/:ma/vao', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    if (p.pha === 'het') return res.status(410).json({ error: 'Phòng này đã kết thúc.' });
    let ten = sachTen((req.body || {}).ten);
    if (!ten) return res.status(400).json({ error: 'Em nhập tên trước nhé.' });
    if (p.hs.size >= MAX_HS) return res.status(409).json({ error: 'Phòng đã đủ ' + MAX_HS + ' bạn.' });
    const trung = new Set([...p.hs.values()].map((h) => h.ten.toLowerCase()));
    if (trung.has(ten.toLowerCase())) {
      let n = 2;
      while (trung.has((ten + ' ' + n).toLowerCase())) n++;
      ten = ten.slice(0, 17) + ' ' + n;
    }
    const h = { pid: token().slice(0, 10), tok: token(), ten, diem: 0, chuoi: 0, cong: 0, hang: 0, tl: null, vao: ++p.soVao };
    if (p.kieu === 'nhip' && p.ds) giaoBo(p, h);
    p.hs.set(h.pid, h);
    res.json({ pid: h.pid, tok: h.tok, ten: h.ten });
  });

  app.post('/api/live/:ma/tl', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    const b = req.body || {};
    const h = layHs(p, b, res); if (!h) return;
    if (p.kieu === 'nhip') {
      if (p.pha !== 'choi') return res.status(409).json({ error: 'Cô chưa bắt đầu hoặc đã kết thúc.' });
      if (h.xong) return res.json({ xong: true, diem: h.diem });
      if (Number(b.i) !== h.i) return res.status(409).json({ error: 'Câu này em làm rồi.', lech: true });
      const c = p.ds[h.thuTu[h.i]];
      const chon = Number(b.chon);
      if (!Number.isInteger(chon) || chon < 0 || chon >= c.opts.length) return res.status(400).json({ error: 'Đáp án không hợp lệ.' });
      const dung = chon === c.dung;
      let cong = 0;
      if (dung) {
        // dung: 500 + toi da 500 theo toc do (20 giay), chuoi dung lien tiep thuong them
        const ms = h.tgI === h.i ? Date.now() - h.tg : 20000;
        h.chuoi++; h.dungSo++;
        cong = 500 + Math.round(500 * Math.max(0, 1 - ms / 20000)) + Math.min(3, h.chuoi - 1) * 100;
        h.diem += cong;
      } else h.chuoi = 0;
      h.i++;
      if (h.i >= p.ds.length) { h.xong = true; h.xongLuc = Date.now(); }
      return res.json({ dung, dap: c.dung, cong, why: c.why, diem: h.diem, chuoi: h.chuoi, xong: h.xong });
    }
    if (p.pha !== 'hoi' || Number(b.qid) !== p.qid) return res.status(409).json({ error: 'Câu này đã đóng rồi.' });
    if (h.tl && h.tl.qid === p.qid) return res.json({ ok: true, chon: h.tl.chon });
    const chon = Number(b.chon);
    if (!Number.isInteger(chon) || chon < 0 || chon >= p.cau.opts.length) return res.status(400).json({ error: 'Đáp án không hợp lệ.' });
    h.tl = { qid: p.qid, chon, ms: Date.now() - p.batDau };
    res.json({ ok: true, chon });
  });

  app.get('/api/live/:ma/hs', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    const h = layHs(p, req.query, res); if (!h) return;
    if (p.kieu === 'nhip') {
      const out = { kieu: 'nhip', pha: p.pha, ten: h.ten, diem: h.diem, soHs: p.hs.size, tong: p.ds ? p.ds.length : 0, i: h.i || 0, dungSo: h.dungSo || 0, xong: !!h.xong };
      if (p.pha === 'choi' && !h.xong && p.ds) {
        if (h.tgI !== h.i) { h.tgI = h.i; h.tg = Date.now(); } // bat dau tinh gio tu luc em nhin thay cau
        const c = p.ds[h.thuTu[h.i]];
        out.cau = { zh: c.zh, ctx: c.ctx, opts: c.opts };
      }
      if (h.xong || p.pha === 'het') out.hang = bangXepHang(p).findIndex((r) => r.pid === h.pid) + 1;
      if (p.pha === 'het') out.bxh = bangXepHang(p).slice(0, 5).map((r) => ({ ten: r.ten, diem: r.diem }));
      return res.json(out);
    }
    const daTL = h.tl && h.tl.qid === p.qid ? h.tl.chon : -1;
    const out = { pha: p.pha, qid: p.qid, ten: h.ten, diem: h.diem, soHs: p.hs.size, chon: daTL };
    if (p.cau && (p.pha === 'hoi' || p.pha === 'lat')) {
      out.cau = { zh: p.cau.zh, opts: p.cau.opts, so: p.cau.so, tong: p.cau.tong };
      if (p.pha === 'hoi') out.conLai = Math.max(0, p.cau.secs * 1000 - (Date.now() - p.batDau));
    }
    if (p.pha === 'lat' || p.pha === 'het') {
      out.dung = p.pha === 'lat' ? p.dung : -1;
      out.cong = h.cong || 0;
      out.chuoi = h.chuoi;
      out.hang = h.hang || bangXepHang(p).findIndex((r) => r.pid === h.pid) + 1;
    }
    if (p.pha === 'het') out.bxh = bangXepHang(p).slice(0, 5).map((r) => ({ ten: r.ten, diem: r.diem }));
    res.json(out);
  });
};
