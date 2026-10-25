// Phien choi truc tiep (Che do lop hoc): giao vien chieu cau hoi len bang,
// hoc sinh vao /choi bang ma phong tren dien thoai (khong can tai khoan),
// bam A/B/C/D, giao vien lat dap an, may cham diem theo toc do.
// Phong chi luu trong bo nho — tat may chu la mat, du cho mot tiet hoc.
// Ba kieu phong: 'gv' (giao vien dieu khien tung cau, mac dinh), 'nhip'
// (moi em tu lam lan luot ca bo cau theo toc do cua minh) va 'the' (hoc sinh
// gio the giay in ma, giao vien quet ca lop bang camera dien thoai — /quet).
const crypto = require('crypto');

const MAX_PHONG = 300;
const MAX_HS = 80;
const MAX_THE = 100;  // so the in san (public/js/the-ma.js)
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

// Kieu 'nhip' (leo nui): xep theo so cau dung (do cao) truoc, bang nhau moi xet
// diem toc do — vi tri tren nui luon khop thu hang. Kieu 'gv': theo diem.
function soSanh(p) {
  const dongHo = (a, b) => (a.xongLuc || Infinity) - (b.xongLuc || Infinity) || a.vao - b.vao;
  if (p.kieu === 'nhip') return (a, b) => (b.dungSo || 0) - (a.dungSo || 0) || b.diem - a.diem || dongHo(a, b);
  return (a, b) => b.diem - a.diem || dongHo(a, b);
}
function thuTuPid(p) { return [...p.hs.values()].sort(soSanh(p)).map((h) => h.pid); }
// Ghi mot dong "tin chay" cho man chieu (giu 10 tin moi nhat)
function tinPhong(p, txt) {
  p.su = p.su || [];
  p.su.unshift({ id: (p.suId = (p.suId || 0) + 1), t: Date.now(), txt });
  if (p.su.length > 10) p.su.length = 10;
}
// So sanh thu tu truoc/sau khi em h ghi diem: ai bi vuot, co len dau bang khong
function vuotNhau(p, h, truoc) {
  const sau = thuTuPid(p);
  const cu = truoc.indexOf(h.pid), moi = sau.indexOf(h.pid);
  const biVuot = truoc.filter((pid, k) => k < cu && sau.indexOf(pid) > moi).map((pid) => p.hs.get(pid)).filter(Boolean);
  biVuot.forEach((x) => {
    x.tin = x.tin || [];
    x.tin.push({ loai: 'biVuot', ten: h.ten });
    if (x.tin.length > 3) x.tin.shift();
  });
  return { hangCu: cu + 1, hang: moi + 1, vuot: biVuot.map((x) => x.ten), dauBang: moi === 0 && cu !== 0 };
}
// Vi tri cua em trong doan: hang, ban dung ngay tren / ngay duoi, top 3 + lan can
function viTri(p, h) {
  const bxh = bangXepHang(p);
  const k = bxh.findIndex((r) => r.pid === h.pid);
  if (k < 0) return null;
  const me = bxh[k], tr = bxh[k - 1], sa = bxh[k + 1];
  const gon = (r) => r && { ten: r.ten, hang: r.hang, dungSo: r.dungSo, diem: r.diem };
  const chon = {};
  [0, 1, 2, k - 1, k, k + 1].forEach((j) => { if (j >= 0 && j < bxh.length) chon[j] = 1; });
  return {
    hang: me.hang, soHs: bxh.length, dungSo: me.dungSo,
    truoc: gon(tr), sau: gon(sa),
    nhom: Object.keys(chon).map(Number).sort((a, b) => a - b).map((j) => Object.assign(gon(bxh[j]), { la: j === k })),
    doan: bxh.map((r) => r.dungSo)          // do cao cua ca lop (khong ten) cho thanh leo nui nho
  };
}

function bangXepHang(p) {
  return [...p.hs.values()]
    .sort(soSanh(p))
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
    const k0 = (req.body || {}).kieu;
    const kieu = k0 === 'nhip' || k0 === 'the' ? k0 : 'gv';
    const p = { ma, kieu, khoa: token(), tao: Date.now(), cham: Date.now(), pha: 'cho', qid: 0, cau: null, dung: -1, batDau: 0, hs: new Map(), soVao: 0, ds: null };
    // Kieu 'the': khoa quet rieng cho dien thoai (nam trong ma QR) — chi quet va bam lat/tiep
    if (kieu === 'the') { p.quet = token(); p.theTl = {}; p.theDs = []; p.lenh = { seq: 0, loai: '' }; p.quetLuc = 0; }
    phong.set(ma, p);
    res.json(kieu === 'the' ? { ma, khoa: p.khoa, quet: p.quet } : { ma, khoa: p.khoa });
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
    if (p.kieu === 'the') {
      p.theTl = {};
      if (Array.isArray(b.theDs)) p.theDs = [...new Set(b.theDs.map(Number).filter((n) => Number.isInteger(n) && n >= 1 && n <= MAX_THE))].slice(0, MAX_THE);
    }
    res.json({ ok: true, qid: p.qid });
  });

  app.post('/api/live/:ma/lat', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.pha !== 'hoi') return res.json({ ok: true, bxh: bangXepHang(p).slice(0, 10) });
    p.pha = 'lat';
    const truocLat = thuTuPid(p);
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
    const sauLat = bxh.map((r) => r.pid);
    bxh.forEach((r) => {
      const x = p.hs.get(r.pid), cu = truocLat.indexOf(r.pid), moi = r.hang - 1;
      x.hang = r.hang;
      x.hangCu = cu + 1;
      x.vuot = truocLat.filter((pid, k) => k < cu && sauLat.indexOf(pid) > moi).map((pid) => p.hs.get(pid).ten).slice(0, 3);
    });
    if (bxh[0] && truocLat[0] !== bxh[0].pid && bxh[0].diem > 0) tinPhong(p, '👑 ' + bxh[0].ten + ' lên dẫn đầu');
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
    if (p.kieu === 'the') return res.json({ kieu: 'the', pha: p.pha, qid: p.qid, tl: p.theTl, lenh: p.lenh, quetLuc: p.quetLuc, may: !!p.may, mayLuc: p.mayLuc || 0 });
    const phanBo = p.cau ? p.cau.opts.map(() => 0) : [];
    let daTL = 0;
    for (const h of p.hs.values()) {
      if (h.tl && h.tl.qid === p.qid) { daTL++; if (phanBo[h.tl.chon] != null) phanBo[h.tl.chon]++; }
    }
    if (p.kieu === 'nhip') {
      const bxh = bangXepHang(p);
      return res.json({ kieu: 'nhip', pha: p.pha, soHs: p.hs.size, tong: p.ds ? p.ds.length : 0, batDau: p.batDau,
        ds: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => ({ pid: h.pid, ten: h.ten })),
        soXong: bxh.filter((r) => r.xong).length, bxh, su: p.su || [] });
    }
    res.json({
      pha: p.pha, qid: p.qid, soHs: p.hs.size, daTL,
      phanBo: p.pha === 'lat' || p.pha === 'het' ? phanBo : null,
      ds: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => ({ pid: h.pid, ten: h.ten })),
      bxh: bangXepHang(p).slice(0, 10),
    });
  });

  // ---- dien thoai quet the (kieu 'the') ----
  // Chi MOT dien thoai duoc quet moi phong: may dau tien mo trang quet giu cho;
  // hoc sinh co chup lai ma QR cung khong gui dap an gia duoc.
  function laMayQuet(p, src, res) {
    if (p.kieu !== 'the' || !src || src.quet !== p.quet) { res.status(403).json({ error: 'Mã quét không đúng hoặc đã đổi. Quét lại mã QR trên màn chiếu nhé.' }); return false; }
    const may = chuoi(src.may, 40);
    if (!may) { res.status(400).json({ error: 'Thiếu mã thiết bị.' }); return false; }
    if (!p.may) p.may = may;
    else if (p.may !== may) { res.status(403).json({ error: 'Đã có một điện thoại khác đang quét phòng này. Trên màn chiếu bấm “Đổi điện thoại” nếu cô muốn dùng máy này.' }); return false; }
    p.mayLuc = Date.now();
    return true;
  }
  app.post('/api/live/:ma/doimay', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.kieu !== 'the') return res.status(400).json({ error: 'Phòng này không dùng thẻ.' });
    p.quet = token(); p.may = null; p.mayLuc = 0;
    res.json({ ok: true, quet: p.quet });
  });
  app.get('/api/live/:ma/quet', (req, res) => {
    const p = layPhong(req, res); if (!p || !laMayQuet(p, req.query, res)) return;
    const out = { pha: p.pha, qid: p.qid, theDs: p.theDs, tl: p.theTl, lenh: p.lenh.seq };
    if (p.cau && (p.pha === 'hoi' || p.pha === 'lat')) out.cau = { zh: p.cau.zh, opts: p.cau.opts, so: p.cau.so, tong: p.cau.tong };
    if (p.pha === 'lat') out.dung = p.dung;
    res.json(out);
  });
  // Gui cac the vua doc duoc: { quet, qid, the: { '12': 0..3, ... } } — doc lai thi lay lan moi nhat
  app.post('/api/live/:ma/quet', (req, res) => {
    const p = layPhong(req, res); const b = req.body || {}; if (!p || !laMayQuet(p, b, res)) return;
    if (p.pha !== 'hoi' || Number(b.qid) !== p.qid) return res.status(409).json({ error: 'Câu hỏi đã đổi.', qid: p.qid, pha: p.pha });
    const soDa = p.cau ? p.cau.opts.length : 4;
    const dsThe = p.theDs.length ? new Set(p.theDs) : null;
    let moi = 0;
    Object.keys(b.the || {}).slice(0, MAX_THE).forEach((k) => {
      const id = Number(k), chon = Number(b.the[k]);
      if (!Number.isInteger(id) || id < 1 || id > MAX_THE || (dsThe && !dsThe.has(id))) return;
      if (!Number.isInteger(chon) || chon < 0 || chon >= soDa) return;
      if (p.theTl[id] !== chon) moi++;
      p.theTl[id] = chon;
    });
    if (moi) p.quetLuc = Date.now();
    res.json({ ok: true, n: Object.keys(p.theTl).length });
  });
  // Dien thoai bam 'Lat dap an' / 'Cau tiep' — man chieu doc lenh moi qua /gv roi tu lam
  app.post('/api/live/:ma/dieu', (req, res) => {
    const p = layPhong(req, res); const b = req.body || {}; if (!p || !laMayQuet(p, b, res)) return;
    const loai = ['lat', 'tiep', 'xong'].indexOf(b.lenh) >= 0 ? b.lenh : '';
    if (!loai) return res.status(400).json({ error: 'Lệnh không hợp lệ.' });
    p.lenh = { seq: p.lenh.seq + 1, loai };
    res.json({ ok: true, seq: p.lenh.seq });
  });

  // ---- hoc sinh ----
  app.post('/api/live/:ma/vao', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    if (p.kieu === 'the') return res.status(400).json({ error: 'Phòng này dùng thẻ giấy, không vào bằng điện thoại.' });
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
      const truoc = thuTuPid(p);
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
      const vn = vuotNhau(p, h, truoc);
      if (vn.dauBang) tinPhong(p, '👑 ' + h.ten + ' lên dẫn đầu!');
      else if (vn.vuot.length && vn.hang <= 5) tinPhong(p, '🔥 ' + h.ten + ' vượt ' + vn.vuot.slice(0, 2).join(', ') + (vn.vuot.length > 2 ? ' và ' + (vn.vuot.length - 2) + ' bạn' : ''));
      else if (dung && h.chuoi >= 5 && h.chuoi % 5 === 0) tinPhong(p, '⚡ ' + h.ten + ' đúng liền ' + h.chuoi + ' câu');
      if (h.xong) tinPhong(p, '🏁 ' + h.ten + ' về đích — hạng ' + vn.hang);
      return res.json({
        dung, dap: c.dung, cong, why: c.why, diem: h.diem, chuoi: h.chuoi, xong: h.xong,
        hangCu: vn.hangCu, vuot: vn.vuot.slice(0, 3), dauBang: vn.dauBang,
        moc: dung && h.dungSo % 3 === 0, vt: viTri(p, h)
      });
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
      if (p.pha === 'choi') out.vt = viTri(p, h);
      if (h.tin && h.tin.length) { out.tin = h.tin; h.tin = []; }
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
      out.hangCu = h.hangCu || 0;
      out.vuot = h.vuot || [];
    }
    if (p.pha === 'het') out.bxh = bangXepHang(p).slice(0, 5).map((r) => ({ ten: r.ten, diem: r.diem }));
    res.json(out);
  });
};
