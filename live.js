// Phien choi truc tiep (Che do lop hoc): giao vien chieu cau hoi len bang,
// hoc sinh vao /choi bang ma phong tren dien thoai (khong can tai khoan),
// bam A/B/C/D, giao vien lat dap an, may cham diem theo toc do.
// Phong chi luu trong bo nho — tat may chu la mat, du cho mot tiet hoc.
// Ba kieu phong: 'gv' (giao vien dieu khien tung cau, mac dinh), 'nhip'
// (moi em tu lam lan luot ca bo cau theo toc do cua minh) va 'the' (hoc sinh
// gio the giay in ma, giao vien quet ca lop bang camera dien thoai — /quet).
// Kieu thu tu 'chuong' (Rung Chuong Vang — public/js/lop-chuong.js): ca lop "tren
// san", tra loi sai hoac khong tra loi thi roi san; co cau cuu tro (chi ban da roi
// san tra loi), phao may bay giay, va cau Chuong Vang cuoi cung.
// Kieu 'tro' (public/js/lop-tro.js): moi em choi mot tro choi mot nguoi tren dien thoai
// ('bay' — Tu ngu biet bay, 'doantau' — Doan tau tri thuc) voi cung bo cau giao vien gui;
// dien thoai tu cham roi bao tien do / diem len (tin dien thoai, nhung kep trong khoang hop ly).
// Co the chia 2–4 to: hoc sinh tu chon to tren dien thoai; diem to = TRUNG BINH diem cac ban
// + thuong "ca to cung ve dich" (+20 moi khi ca to xong cau k / ca to ve ga). Choi lai giu phong.
// Kieu 'keo' (public/js/lop-keo-qr.js): Keo co tri thuc qua ma QR — hoc sinh chon to, hai to dau nhau
// (giao vien chon cap). Moi cau giao vien ra (/cau), ai thuoc hai to tra loi tren dien thoai; lat dap an:
// to co TI LE ban dung cao hon (dung / so thanh vien, nen to dong nguoi khong loi the) keo day 1 nac,
// bang nhau thi to tra loi dung nhanh hon (trung binh) keo; keo du so nac la thang.
const crypto = require('crypto');
const CauHoi = require('./cau-hoi');

const MAX_PHONG = 300;
const MAX_HS = 80;
const MAX_HS_CHUONG = 100; // Rung Chuong Vang: ca khoi lop len san
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
// Kieu 'dua' (Cuoc dua ki thu — public/dua.html, public/js/lop-dua.js): nhu 'nhip' (moi em tu lam theo nhip rieng)
// nhung moi em chon mot linh vat; moi cau dung linh vat chay len 1 buoc, sau moi p.moc cau (3 hoac 5) dien thoai
// hien toan canh duong dua. Man chieu ve duong dua trong rung.
const LINH_VAT = ['tho', 'rua', 'khi', 'cao', 'voi', 'ngua', 'meo', 'cho', 'huou', 'ga', 'vit', 'bo', 'cuu', 'heo', 'sutu', 'ho', 'gautruc', 'khunglong'];
const tuLam = (p) => p.kieu === 'nhip' || p.kieu === 'dua';
// Toan canh duong dua cho dien thoai: moi ban mot dong (ten, linh vat, so buoc), em duoc danh dau
function toanCanh(p, h) {
  const bxh = bangXepHang(p);
  return { tong: p.ds ? p.ds.length : 0, ds: bxh.slice(0, 40).map((r) => ({ ten: r.ten, lv: r.lv, buoc: r.dungSo, xong: r.xong, hang: r.hang, la: r.pid === h.pid })),
    hang: bxh.findIndex((r) => r.pid === h.pid) + 1, soHs: bxh.length };
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
  // Kieu 'tro': diem truoc, roi ai xong, roi lam duoc nhieu hon, roi it giay hon
  if (p.kieu === 'tro') return (a, b) => (b.diem || 0) - (a.diem || 0) || (b.xong ? 1 : 0) - (a.xong ? 1 : 0) ||
    (b.lam || 0) - (a.lam || 0) || (a.giay || 0) - (b.giay || 0) || a.vao - b.vao;
  if (tuLam(p)) return (a, b) => (b.dungSo || 0) - (a.dungSo || 0) || b.diem - a.diem || dongHo(a, b);
  // Kieu 'chuong': con tren san truoc, roi den diem, roi san muon hon thi xep tren
  if (p.kieu === 'chuong') return (a, b) => (b.con ? 1 : 0) - (a.con ? 1 : 0) || (b.vang ? 1 : 0) - (a.vang ? 1 : 0) ||
    b.diem - a.diem || (b.roiLuc || 0) - (a.roiLuc || 0) || a.vao - b.vao;
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

/* ---- Rung Chuong Vang ---- */
// Dua mot em tro lai san; ly do hien tren dien thoai: 'cuu' cau cuu tro,
// 'phao' phao may bay giay, 'tatcasai' ca san cung sai, 'gv' co bam tay
function veSan(h, ly) {
  h.con = true; h.roiCau = 0; h.roiLuc = 0; h.muon = false;
  h.cuuSeq = (h.cuuSeq || 0) + 1; h.cuuLy = ly; h.cuuSo = (h.cuuSo || 0) + 1;
}
function dsChuong(p) {
  const lat = p.pha === 'lat' || p.pha === 'het';
  const hang = {};
  [...p.hs.values()].sort(soSanh(p)).forEach((h, i) => { hang[h.pid] = i + 1; });
  return [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => {
    const tl = h.tl && h.tl.qid === p.qid ? h.tl : null;
    return {
      pid: h.pid, ten: h.ten, so: h.vao, con: !!h.con, diem: h.diem, daTL: !!tl,
      chon: lat && tl ? tl.chon : -1, roiCau: h.roiCau || 0, roiLuc: h.roiLuc || 0, muon: !!h.muon,
      cuuSo: h.cuuSo || 0, vang: !!h.vang, hang: hang[h.pid],
    };
  });
}
function conLaiMs(p) {
  if (!p.cau || p.khoaTl) return 0;
  const da = (p.dungLuc || Date.now()) - p.batDau;
  return Math.max(0, p.cau.secs * 1000 - da);
}
// Lat dap an: cau thuong -> ai tren san ma sai / khong tra loi thi roi san, dung +10;
// cau cuu tro -> ban da roi san tra loi dung, nhanh nhat truoc, duoc tro lai (toi da toiDa)
function latChuong(p, b) {
  const now = Date.now();
  const c = p.cau;
  if (p.dung < 0) {
    const d = Number(b.dung);
    if (Number.isInteger(d) && d >= 0 && d < c.opts.length) p.dung = d;
  }
  p.pha = 'lat'; p.khoaTl = true; p.dungLuc = 0;
  const kq = { qid: p.qid, so: c.so, cuu: !!c.cuu, cuoi: !!c.cuoi, roi: [], ve: [], vang: [] };
  const dungCau = (h) => !!(p.dung >= 0 && h.tl && h.tl.qid === p.qid && h.tl.chon === p.dung);
  if (c.cuu) {
    const dung = [...p.hs.values()].filter((h) => !h.con && dungCau(h)).sort((x, y) => x.tl.ms - y.tl.ms);
    dung.slice(0, c.toiDa > 0 ? c.toiDa : dung.length).forEach((h) => { veSan(h, 'cuu'); kq.ve.push(h.pid); });
    for (const h of p.hs.values()) h.kq = { qid: p.qid, tinh: false, dung: dungCau(h), ve: kq.ve.indexOf(h.pid) >= 0, roi: false, cong: 0 };
    p.tatCaSai = null;
  } else {
    let truoc = 0;
    for (const h of p.hs.values()) {
      const d = dungCau(h);
      h.kq = { qid: p.qid, tinh: !!h.con, dung: d, ve: false, roi: false, cong: 0 };
      if (!h.con) continue;
      truoc++;
      if (d) {
        h.diem += 10; h.kq.cong = 10;
        if (c.cuoi) { h.vang = true; kq.vang.push(h.pid); }
      } else {
        h.con = false; h.roiCau = c.so; h.roiLuc = now; h.kq.roi = true; kq.roi.push(h.pid);
      }
    }
    // Ca san cung sai (tru cau Chuong Vang): giao vien chon cho ca nhom quay lai hay giu ket qua
    p.tatCaSai = truoc && kq.roi.length === truoc && !c.cuoi ? { qid: p.qid, so: c.so, pids: kq.roi.slice() } : null;
    if (kq.vang.length) tinPhong(p, '🔔 ' + kq.vang.length + ' bạn rung chuông vàng!');
  }
  p.ketQua = kq;
}

function bangXepHang(p) {
  return [...p.hs.values()]
    .sort(soSanh(p))
    .map((h, i) => ({
      pid: h.pid, ten: h.ten, diem: h.diem, cong: h.cong || 0, chuoi: h.chuoi, hang: i + 1,
      lam: h.i || 0, dungSo: h.dungSo || 0, xong: !!h.xong, lv: h.lv || '',
    }));
}

/* ---- Tro choi tren dien thoai (kieu 'tro') ---- */
const TRO = { bay: 1, doantau: 1 };
const TOC_BAY = ['cham', 'vua', 'nhanh'];
const MUC_TAU = ['de', 'vua', 'kho'];
function so(v, min, max) { const n = Math.round(Number(v)); return Number.isFinite(n) ? Math.max(min, Math.min(max, n)) : min; }
// Bo cau giao vien gui: chi giu cac truong tro choi dung, cat do dai
function sachCauTro(tro, ds) {
  if (!Array.isArray(ds)) return [];
  if (tro === 'bay') {
    return ds.slice(0, 60).map((q) => q && Array.isArray(q.words) && {
      words: q.words.slice(0, 30).map((w) => chuoi(w, 40)), answer: chuoi(q.answer, 300),
      context: chuoi(q.context, 300), why: chuoi(q.why, 500),
    }).filter((q) => q && q.words.filter((w) => w.trim()).length >= 2);
  }
  return ds.slice(0, 10).map((q) => {
    if (!q || !Array.isArray(q.options)) return null;
    const options = q.options.slice(0, 6).map((o) => chuoi(o, 100));
    const answer = Number(q.answer);
    if (options.length < 2 || !Number.isInteger(answer) || answer < 0 || answer >= options.length || !options[answer].trim()) return null;
    return { pre: chuoi(q.pre, 300), post: chuoi(q.post, 300), options, answer, noBlank: !!q.noBlank, context: chuoi(q.context, 300), why: chuoi(q.why, 500) };
  }).filter(Boolean);
}
function bxhTro(p) {
  const tong = p.tro ? p.tro.tong : 0;
  return [...p.hs.values()].sort(soSanh(p)).map((h, i) => ({
    pid: h.pid, ten: h.ten, diem: h.diem || 0, hang: i + 1, lam: h.lam || 0, tong, dung: h.dungSo || 0,
    loi: h.loi || 0, giay: h.giay || 0, xong: !!h.xong,
  }));
}
function hangTro(p, h) { return [...p.hs.values()].sort(soSanh(p)).indexOf(h) + 1; }
// Ten cac to cua phong co chia to (tro / keo co)
function tenToPhong(p) { return p.tro ? p.tro.to : p.keo ? p.keo.to : []; }

/* ---- Keo co qua ma QR (kieu 'keo') ---- */
function tvKeo(p, to) { return [...p.hs.values()].filter((h) => h.to === to); }
function dsToKeo(p) { return p.keo.to.map((ten, i) => ({ ten, soTv: tvKeo(p, i).length })); }
function benKeo(p, to) {
  const tv = tvKeo(p, to);
  const dung = tv.filter((h) => p.dung >= 0 && h.tl && h.tl.qid === p.qid && h.tl.chon === p.dung);
  const daTL = tv.filter((h) => h.tl && h.tl.qid === p.qid).length;
  const ms = dung.length ? Math.round(dung.reduce((s, h) => s + h.tl.ms, 0) / dung.length) : 0;
  return { to, soTv: tv.length, daTL, dung: dung.length, tiLe: tv.length ? dung.length / tv.length : 0, ms };
}
function latKeo(p, b) {
  const k = p.keo;
  if (p.dung < 0) { const d = Number(b.dung); if (Number.isInteger(d) && d >= 0 && p.cau && d < p.cau.opts.length) p.dung = d; }
  p.pha = 'lat';
  const L = benKeo(p, k.L), R = benKeo(p, k.R);
  let keo = -1;
  if (L.tiLe > R.tiLe) keo = k.L;
  else if (R.tiLe > L.tiLe) keo = k.R;
  else if (L.dung && R.dung && L.ms !== R.ms) keo = L.ms < R.ms ? k.L : k.R;
  if (keo >= 0 && k.thang < 0) {
    k.nac += keo === k.L ? -1 : 1;
    if (Math.abs(k.nac) >= k.max) k.thang = keo;
  }
  for (const h of p.hs.values()) {
    const d = !!(p.dung >= 0 && h.tl && h.tl.qid === p.qid && h.tl.chon === p.dung);
    if (d && (h.to === k.L || h.to === k.R)) h.diem++;
  }
  k.kq = { qid: p.qid, L, R, keo, nac: k.nac, thang: k.thang };
  if (keo >= 0) tinPhong(p, (k.thang >= 0 ? '🏆 ' + k.to[keo] + ' thắng kéo co!' : '💪 ' + k.to[keo] + ' kéo được 1 nấc'));
}
const THUONG_TO = 20;
// Moc da qua cua mot em: bay = so cau da xep xong; doan tau = 1 khi tau ve ga
function mocTro(p, h) { return p.tro.game === 'bay' ? (h.xong ? p.tro.tong : h.lam || 0) : (h.xong ? 1 : 0); }
// Cac to: diem trung binh cua thanh vien + thuong, xep hang; moi to kem danh sach thanh vien
function dsTo(p) {
  const t = p.tro;
  if (!t.to.length) return [];
  const ds = t.to.map((ten, i) => {
    const tv = [...p.hs.values()].filter((h) => h.to === i).sort((a, b) => a.vao - b.vao);
    const tb = tv.length ? Math.round(tv.reduce((s, h) => s + (h.diem || 0), 0) / tv.length) : 0;
    const gioi = tv.slice().sort((a, b) => (b.diem || 0) - (a.diem || 0) || (a.giay || 0) - (b.giay || 0))[0];
    return {
      i, ten, tb, thuong: t.thuong[i] ? t.thuong[i].diem : 0, diem: tb + (t.thuong[i] ? t.thuong[i].diem : 0),
      soTv: tv.length, soXong: tv.filter((h) => h.xong).length, gioi: gioi && gioi.diem > 0 ? { ten: gioi.ten, diem: gioi.diem } : null,
      tv: tv.map((h) => ({ pid: h.pid, ten: h.ten, lam: h.lam || 0, diem: h.diem || 0, xong: !!h.xong })),
    };
  });
  const xep = ds.slice().sort((a, b) => b.diem - a.diem || b.soXong - a.soXong || a.i - b.i);
  xep.forEach((x, k) => { x.hang = k + 1; });
  return ds;
}
// Sau moi lan bao diem: to cua em h da "ca to cung xong" moc nao chua -> +20 moi moc
function xetThuongTo(p, h) {
  const t = p.tro;
  if (!t.to.length || h.to == null || h.to < 0) return;
  const tv = [...p.hs.values()].filter((x) => x.to === h.to);
  if (!tv.length) return;
  const th = t.thuong[h.to] || (t.thuong[h.to] = { diem: 0, moc: {} });
  const min = Math.min(...tv.map((x) => mocTro(p, x)));
  for (let k = 1; k <= min; k++) {
    if (th.moc[k]) continue;
    th.moc[k] = 1;
    th.diem += THUONG_TO;
    tinPhong(p, t.game === 'bay' ? '🎉 ' + t.to[h.to] + ' cả tổ xong câu ' + k + '! +' + THUONG_TO : '🎉 ' + t.to[h.to] + ' cả tổ về ga! +' + THUONG_TO);
    p.su[0].to = h.to;
  }
}
// Ai dang choi (co to, neu phong chia to) da xong het chua -> tu ket thuc van
function xetHetVan(p) {
  const choi = [...p.hs.values()].filter((h) => !p.tro.to.length || (h.to != null && h.to >= 0));
  if (choi.length && choi.every((h) => h.xong)) { p.pha = 'het'; tinPhong(p, '🏁 Tất cả các bạn đã chơi xong!'); }
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
    const kieu = k0 === 'nhip' || k0 === 'dua' || k0 === 'the' || k0 === 'chuong' || k0 === 'tro' || k0 === 'keo' ? k0 : 'gv';
    const p = { ma, kieu, khoa: token(), tao: Date.now(), cham: Date.now(), pha: 'cho', qid: 0, cau: null, dung: -1, batDau: 0, hs: new Map(), soVao: 0, ds: null };
    // Kieu 'tro': ten tro choi co dinh tu luc tao phong; bo cau gui kem khi bat dau
    if (kieu === 'keo') {
      // to: ten cac to cua lop (2–6); L, R: hai to dang dau; max: so nac de thang
      const to = Array.isArray((req.body || {}).to) ? req.body.to.map((x) => sachTen(x)).filter(Boolean).slice(0, 6) : [];
      if (to.length < 2) return res.status(400).json({ error: 'Kéo co cần ít nhất 2 tổ.' });
      p.keo = { to, L: 0, R: 1, nac: 0, max: 5, thang: -1, kq: null };
      p.dong = false;
    }
    if (kieu === 'tro') {
      // to: 2–4 ten to (khong co = ca lop, xep hang ca nhan)
      const to = Array.isArray((req.body || {}).to) ? req.body.to.map((x) => sachTen(x)).filter(Boolean).slice(0, 4) : [];
      p.tro = { game: TRO[(req.body || {}).tro] ? req.body.tro : 'bay', cau: [], tong: 0, opt: {}, to: to.length >= 2 ? to : [], thuong: {}, van: 0 };
      p.dong = false;
    }
    // Kieu 'the': khoa quet rieng cho dien thoai (nam trong ma QR) — chi quet va bam lat/tiep
    if (kieu === 'the') { p.quet = token(); p.theTl = {}; p.theDs = []; p.lenh = { seq: 0, loai: '' }; p.quetLuc = 0; }
    if (kieu === 'chuong') { p.daBatDau = false; p.ketQua = null; p.tatCaSai = null; p.khoaTl = false; p.dungLuc = 0; p.dong = false; }
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
    if (p.kieu === 'chuong') {
      // cuoi: cau Chuong Vang; cuu: cau cuu tro (chi ban da roi san), toiDa: so ban duoc cuu toi da (0 = khong gioi han)
      p.cau.cuoi = !!b.cuoi && !b.cuu;
      p.cau.cuu = !!b.cuu;
      p.cau.toiDa = Math.max(0, Math.min(MAX_HS_CHUONG, Number(b.toiDa) || 0));
      p.khoaTl = false; p.dungLuc = 0; p.ketQua = null; p.tatCaSai = null; p.daBatDau = true;
    }
    if (p.kieu === 'the') {
      p.theTl = {};
      if (Array.isArray(b.theDs)) p.theDs = [...new Set(b.theDs.map(Number).filter((n) => Number.isInteger(n) && n >= 1 && n <= MAX_THE))].slice(0, MAX_THE);
    }
    res.json({ ok: true, qid: p.qid });
  });

  app.post('/api/live/:ma/lat', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.kieu === 'keo') {
      if (p.pha === 'hoi') latKeo(p, req.body || {});
      return res.json({ ok: true, kq: p.keo.kq, keo: p.keo });
    }
    if (p.kieu === 'chuong') {
      if (p.pha === 'hoi') latChuong(p, req.body || {});
      return res.json({ ok: true, ketQua: p.ketQua, tatCaSai: p.tatCaSai, ds: dsChuong(p) });
    }
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
    if (p.kieu === 'chuong') {
      // sanh: true -> mo lai sanh cho (ai vao van len san); false -> bat dau, ai vao sau thi dung ngoai san
      const sanh = !!(req.body || {}).sanh;
      for (const h of p.hs.values()) {
        h.con = true; h.diem = 0; h.roiCau = 0; h.roiLuc = 0; h.vang = false; h.muon = false; h.tl = null; h.kq = null; h.cuuSo = 0;
      }
      p.daBatDau = !sanh; p.pha = 'cho'; p.cau = null; p.dung = -1; p.ketQua = null; p.tatCaSai = null;
      p.khoaTl = false; p.dungLuc = 0; p.dong = false;
      return res.json({ ok: true, ds: dsChuong(p) });
    }
    if (p.kieu === 'tro') {
      // { cau: [...], toc: 'vua' (bay), muc: 'vua' (doan tau) } — moi em choi ca bo cau nay
      const b = req.body || {}, t = p.tro;
      const cau = sachCauTro(t.game, b.cau);
      if (cau.length < 2) return res.status(400).json({ error: t.game === 'bay' ? 'Cần ít nhất 2 câu sắp xếp.' : 'Cần ít nhất 2 câu trắc nghiệm.' });
      t.cau = cau;
      t.tong = cau.length;
      t.opt = t.game === 'bay' ? { toc: TOC_BAY.indexOf(b.toc) >= 0 ? b.toc : 'vua', nhieu: so(b.nhieu, 0, 2) } : { muc: MUC_TAU.indexOf(b.muc) >= 0 ? b.muc : 'vua' };
      // bam lai (Choi lai) = van moi trong cung phong, giu ten va to cua cac em
      t.van++;
      t.thuong = {};
      p.pha = 'choi';
      p.batDau = Date.now();
      p.su = [];
      for (const h of p.hs.values()) Object.assign(h, { diem: 0, lam: 0, dungSo: 0, loi: 0, giay: 0, xong: false, xongLuc: 0 });
      return res.json({ ok: true, tong: t.tong, van: t.van });
    }
    if (!tuLam(p)) return res.status(400).json({ error: 'Phòng này không phải kiểu tự làm.' });
    // Cuoc dua: hien toan canh sau moi 3 hoac 5 cau
    if (p.kieu === 'dua') p.moc = Number((req.body || {}).moc) === 5 ? 5 : 3;
    // cau trac nghiem / xep cau (keo tha) / noi tu — xem cau-hoi.js
    const ds = CauHoi.chuanBo((req.body || {}).cau, 200);
    if (!ds.length) return res.status(400).json({ error: 'Chưa có câu hỏi nào.' });
    p.ds = ds;
    // Thong ke chua bai: moi cau dem so ban chon tung dap an (xep / noi: [dung, sai])
    p.tk = ds.map(CauHoi.tkMoi);
    p.pha = 'choi';
    p.batDau = Date.now();
    for (const h of p.hs.values()) { h.diem = 0; h.chuoi = 0; giaoBo(p, h); }
    res.json({ ok: true, tong: ds.length });
  });

  // ---- Rung Chuong Vang: cuu tro / dat tay / dong ho ----
  app.post('/api/live/:ma/cuu', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.kieu !== 'chuong') return res.status(400).json({ error: 'Phòng này không phải Rung Chuông Vàng.' });
    const b = req.body || {};
    const ly = ['cuu', 'phao', 'tatcasai', 'gv'].indexOf(b.ly) >= 0 ? b.ly : 'gv';
    const pids = Array.isArray(b.pids) ? b.pids.slice(0, MAX_HS_CHUONG).map((x) => String(x).slice(0, 20)) : [];
    let n = 0;
    pids.forEach((pid) => { const h = p.hs.get(pid); if (h && !h.con) { veSan(h, ly); n++; } });
    if (ly === 'tatcasai') p.tatCaSai = null;
    res.json({ ok: true, n, ds: dsChuong(p) });
  });
  app.post('/api/live/:ma/dat', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.kieu !== 'chuong') return res.status(400).json({ error: 'Phòng này không phải Rung Chuông Vàng.' });
    const b = req.body || {};
    const h = p.hs.get(String(b.pid || ''));
    if (!h) return res.status(404).json({ error: 'Không thấy bạn này trong phòng.' });
    if (b.con && !h.con) veSan(h, 'gv');
    else if (!b.con && h.con) { h.con = false; h.vang = false; h.roiCau = p.cau ? p.cau.so : 0; h.roiLuc = Date.now(); }
    res.json({ ok: true, ds: dsChuong(p) });
  });
  app.post('/api/live/:ma/gio', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.kieu !== 'chuong') return res.status(400).json({ error: 'Phòng này không phải Rung Chuông Vàng.' });
    const b = req.body || {};
    if (p.pha === 'hoi') {
      const now = Date.now();
      if (b.het) { p.khoaTl = true; p.dungLuc = 0; }
      else if (b.chay === false && !p.dungLuc && !p.khoaTl) p.dungLuc = now;
      else if (b.chay === true && p.dungLuc) { p.batDau += now - p.dungLuc; p.dungLuc = 0; }
    }
    res.json({ ok: true, khoa: !!p.khoaTl, tam: !!p.dungLuc, conLai: conLaiMs(p) });
  });

  app.post('/api/live/:ma/xong', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if ((p.kieu === 'chuong' || p.kieu === 'tro' || p.kieu === 'keo') && (req.body || {}).dong) p.dong = true;
    p.pha = 'het';
    if (p.kieu === 'tro') return res.json({ ok: true, bxh: bxhTro(p), to: dsTo(p) });
    res.json({ ok: true, bxh: bangXepHang(p).slice(0, 10), tk: tuLam(p) ? (p.tk || null) : undefined });
  });

  app.post('/api/live/:ma/duoi', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    p.hs.delete(String((req.body || {}).pid || ''));
    res.json({ ok: true });
  });

  app.get('/api/live/:ma/gv', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.kieu === 'the') return res.json({ kieu: 'the', pha: p.pha, qid: p.qid, tl: p.theTl, lenh: p.lenh, quetLuc: p.quetLuc, may: !!p.may, mayLuc: p.mayLuc || 0 });
    if (p.kieu === 'keo') {
      const k = p.keo;
      return res.json({ kieu: 'keo', pha: p.pha, qid: p.qid, soHs: p.hs.size, keo: { L: k.L, R: k.R, nac: k.nac, max: k.max, thang: k.thang },
        ds: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => ({ pid: h.pid, ten: h.ten, to: h.to == null ? -1 : h.to })),
        ben: { L: benKeo(p, k.L), R: benKeo(p, k.R) }, kq: p.pha === 'lat' ? k.kq : null, su: p.su || [],
        bxh: bangXepHang(p).filter((r) => { const h = p.hs.get(r.pid); return h && (h.to === k.L || h.to === k.R); }).slice(0, 10) });
    }
    if (p.kieu === 'tro') {
      const bxh = bxhTro(p);
      return res.json({ kieu: 'tro', tro: p.tro.game, pha: p.pha, soHs: p.hs.size, tong: p.tro.tong, batDau: p.batDau, opt: p.tro.opt, van: p.tro.van,
        ds: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => ({ pid: h.pid, ten: h.ten, to: h.to == null ? -1 : h.to })),
        soXong: bxh.filter((r) => r.xong).length, bxh, su: p.su || [], toTen: p.tro.to, to: dsTo(p) });
    }
    if (p.kieu === 'chuong') {
      let daTL = 0, canTL = 0, soCon = 0;
      const phanBo = p.cau ? p.cau.opts.map(() => 0) : [];
      for (const h of p.hs.values()) {
        if (h.con) soCon++;
        const tl = h.tl && h.tl.qid === p.qid;
        if (tl && phanBo[h.tl.chon] != null) phanBo[h.tl.chon]++;
        if (p.pha === 'hoi' && p.cau && (p.cau.cuu ? !h.con : h.con)) { canTL++; if (tl) daTL++; }
      }
      return res.json({
        kieu: 'chuong', pha: p.pha, qid: p.qid, daBatDau: !!p.daBatDau, khoa: !!p.khoaTl, tam: !!p.dungLuc, conLai: conLaiMs(p),
        cau: p.cau ? { so: p.cau.so, cuoi: !!p.cau.cuoi, cuu: !!p.cau.cuu } : null,
        soHs: p.hs.size, soCon, daTL, canTL,
        phanBo: p.pha === 'lat' || p.pha === 'het' ? phanBo : null,
        ketQua: p.ketQua, tatCaSai: p.tatCaSai, ds: dsChuong(p),
      });
    }
    const phanBo = p.cau ? p.cau.opts.map(() => 0) : [];
    let daTL = 0;
    for (const h of p.hs.values()) {
      if (h.tl && h.tl.qid === p.qid) { daTL++; if (phanBo[h.tl.chon] != null) phanBo[h.tl.chon]++; }
    }
    if (tuLam(p)) {
      const bxh = bangXepHang(p);
      return res.json({ kieu: p.kieu, pha: p.pha, soHs: p.hs.size, tong: p.ds ? p.ds.length : 0, batDau: p.batDau, moc: p.moc || 0,
        ds: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => ({ pid: h.pid, ten: h.ten, lv: h.lv || '' })),
        soXong: bxh.filter((r) => r.xong).length, bxh, su: p.su || [], tk: p.tk || null });
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
    // phong tro choi: het van van vao duoc (cho van choi lai), chi khi co dong phong moi thoi
    if (p.pha === 'het' && !(p.kieu === 'tro' && !p.dong)) return res.status(410).json({ error: 'Phòng này đã kết thúc.' });
    let ten = sachTen((req.body || {}).ten);
    if (!ten) return res.status(400).json({ error: 'Em nhập tên trước nhé.' });
    const toiDa = p.kieu === 'chuong' ? MAX_HS_CHUONG : MAX_HS;
    if (p.hs.size >= toiDa) return res.status(409).json({ error: 'Phòng đã đủ ' + toiDa + ' bạn.' });
    const trung = new Set([...p.hs.values()].map((h) => h.ten.toLowerCase()));
    if (trung.has(ten.toLowerCase())) {
      let n = 2;
      while (trung.has((ten + ' ' + n).toLowerCase())) n++;
      ten = ten.slice(0, 17) + ' ' + n;
    }
    // Cuoc dua: phai chon linh vat (vao tu /choi thi bao chuyen sang /dua de chon)
    let lv = '';
    if (p.kieu === 'dua') {
      lv = String((req.body || {}).lv || '');
      if (LINH_VAT.indexOf(lv) < 0) return res.status(400).json({ error: 'Em chọn một linh vật để đua nhé!', dua: true });
    }
    const h = { pid: token().slice(0, 10), tok: token(), ten, diem: 0, chuoi: 0, cong: 0, hang: 0, tl: null, vao: ++p.soVao, lv };
    if (tuLam(p) && p.ds) giaoBo(p, h);
    // Rung Chuong Vang: vao truoc khi bat dau thi len san; vao muon thi dung ngoai, co co the cho len
    if (p.kieu === 'chuong') Object.assign(h, { con: !p.daBatDau, muon: !!p.daBatDau, roiCau: 0, roiLuc: 0, vang: false, cuuSeq: 0, cuuSo: 0, kq: null });
    if (p.kieu === 'tro') Object.assign(h, { lam: 0, dungSo: 0, loi: 0, giay: 0, xong: false, xongLuc: 0, to: p.tro.to.length ? null : -1 });
    if (p.kieu === 'keo') h.to = null;
    p.hs.set(h.pid, h);
    res.json({ pid: h.pid, tok: h.tok, ten: h.ten });
  });

  app.post('/api/live/:ma/tl', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    const b = req.body || {};
    const h = layHs(p, b, res); if (!h) return;
    if (tuLam(p)) {
      if (p.pha !== 'choi') return res.status(409).json({ error: 'Cô chưa bắt đầu hoặc đã kết thúc.' });
      if (h.xong) return res.json({ xong: true, diem: h.diem });
      if (Number(b.i) !== h.i) return res.status(409).json({ error: 'Câu này em làm rồi.', lech: true });
      const c = p.ds[h.thuTu[h.i]];
      const kq = CauHoi.cham(c, b);
      if (!kq.hopLe) return res.status(400).json({ error: 'Đáp án không hợp lệ.' });
      const dung = kq.dung;
      if (p.tk && p.tk[h.thuTu[h.i]]) p.tk[h.thuTu[h.i]][kq.o]++;
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
        dung, dap: CauHoi.dapAn(c), cong, why: c.why, diem: h.diem, chuoi: h.chuoi, xong: h.xong,
        hangCu: vn.hangCu, vuot: vn.vuot.slice(0, 3), dauBang: vn.dauBang,
        moc: dung && h.dungSo % 3 === 0, vt: viTri(p, h),
        // cuoc dua: sau moi p.moc cau (va khi ve dich) hien toan canh duong dua
        dua: p.kieu === 'dua' && (h.xong || h.i % (p.moc || 3) === 0) ? toanCanh(p, h) : undefined,
      });
    }
    if (p.pha !== 'hoi' || Number(b.qid) !== p.qid) return res.status(409).json({ error: 'Câu này đã đóng rồi.' });
    if (p.kieu === 'keo' && h.to !== p.keo.L && h.to !== p.keo.R) return res.status(409).json({ error: 'Tổ em đang cổ vũ — chờ lượt tổ em nhé!' });
    if (h.tl && h.tl.qid === p.qid) return res.json({ ok: true, chon: h.tl.chon });
    if (p.kieu === 'chuong') {
      if (p.cau.cuu && h.con) return res.status(409).json({ error: 'Câu cứu trợ chỉ dành cho các bạn đã rời sàn.' });
      if (p.khoaTl || (!p.dungLuc && Date.now() > p.batDau + p.cau.secs * 1000 + 1500)) return res.status(409).json({ error: 'Hết giờ rồi!' });
    }
    const chon = Number(b.chon);
    if (!Number.isInteger(chon) || chon < 0 || chon >= p.cau.opts.length) return res.status(400).json({ error: 'Đáp án không hợp lệ.' });
    h.tl = { qid: p.qid, chon, ms: Date.now() - p.batDau };
    res.json({ ok: true, chon });
  });

  // ---- kieu 'tro': dien thoai lay bo cau khi bat dau, roi bao tien do / ket qua ----
  app.get('/api/live/:ma/du', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    const h = layHs(p, req.query, res); if (!h) return;
    if (p.kieu !== 'tro') return res.status(400).json({ error: 'Phòng này không phải trò chơi điện thoại.' });
    if (p.pha !== 'choi') return res.status(409).json({ error: 'Cô chưa bắt đầu hoặc đã kết thúc.' });
    if (p.tro.to.length && (h.to == null || h.to < 0)) return res.status(409).json({ error: 'Em chọn tổ trước nhé.', chonTo: true });
    res.json({ tro: p.tro.game, cau: p.tro.cau, opt: p.tro.opt, tong: p.tro.tong, van: p.tro.van });
  });
  // Hoc sinh chon to { pid, tok, to } — doi duoc khi chua bat dau lam van nay
  app.post('/api/live/:ma/to', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    const b = req.body || {};
    const h = layHs(p, b, res); if (!h) return;
    const ten = tenToPhong(p);
    if ((p.kieu !== 'tro' && p.kieu !== 'keo') || !ten.length) return res.status(400).json({ error: 'Phòng này không chia tổ.' });
    const to = Number(b.to);
    if (!Number.isInteger(to) || to < 0 || to >= ten.length) return res.status(400).json({ error: 'Tổ không hợp lệ.' });
    if (p.kieu === 'tro' && h.to !== to && p.pha === 'choi' && (h.lam || h.xong) && h.to != null) return res.status(409).json({ error: 'Em đang chơi rồi, không đổi tổ được nữa.' });
    // keo co: dang co cau hoi ma em vua tra loi thi khong doi to (khoi gian lan ti le)
    if (p.kieu === 'keo' && h.to !== to && h.to != null && h.to >= 0 && h.tl && h.tl.qid === p.qid && p.pha === 'hoi') return res.status(409).json({ error: 'Đợi hết câu này rồi hãy đổi tổ nhé.' });
    h.to = to;
    res.json({ ok: true, to, ten: ten[to] });
  });
  // Keo co: giao vien chon cap dau / so nac; moi: true -> van moi (dat day ve giua)
  app.post('/api/live/:ma/keo', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.kieu !== 'keo') return res.status(400).json({ error: 'Phòng này không phải kéo co.' });
    const b = req.body || {}, k = p.keo, n = k.to.length;
    const L = Number(b.L), R = Number(b.R);
    if (Number.isInteger(L) && Number.isInteger(R) && L !== R && L >= 0 && R >= 0 && L < n && R < n) { k.L = L; k.R = R; }
    if (b.max != null) k.max = so(b.max, 3, 9);
    if (b.moi) { k.nac = 0; k.thang = -1; k.kq = null; p.pha = 'cho'; p.cau = null; p.dung = -1; for (const h of p.hs.values()) { h.tl = null; h.diem = 0; } }
    res.json({ ok: true, keo: k });
  });
  // { pid, tok, lam, dung, loi, giay, diem, xong } — tin dien thoai nhung kep gia tri; da xong thi khong sua nua
  app.post('/api/live/:ma/tien', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    const b = req.body || {};
    const h = layHs(p, b, res); if (!h) return;
    if (p.kieu !== 'tro') return res.status(400).json({ error: 'Phòng này không phải trò chơi điện thoại.' });
    if (p.pha !== 'choi' && !h.xong) return res.status(409).json({ error: 'Cô chưa bắt đầu hoặc đã kết thúc.' });
    // diem cua van truoc gui tre (co da bam Choi lai) thi bo
    if (b.van != null && Number(b.van) !== p.tro.van) return res.status(409).json({ error: 'Ván này đã kết thúc.', van: p.tro.van });
    if (!h.xong) {
      const tong = p.tro.tong || 1;
      const truoc = h.diem > 0 ? hangTro(p, h) : 0;
      h.lam = so(b.lam, 0, tong);
      h.dungSo = so(b.dung, 0, h.lam);
      h.loi = so(b.loi, 0, 999);
      h.giay = so(b.giay, 0, 3 * 3600);
      h.diem = so(b.diem, 0, 100 * tong);
      if (b.xong) {
        h.xong = true; h.xongLuc = Date.now();
        tinPhong(p, '🏁 ' + h.ten + ' hoàn thành — ' + h.diem + ' điểm');
      }
      const hang = hangTro(p, h);
      if (!b.xong && hang === 1 && truoc !== 1 && h.diem > 0 && !p.tro.to.length) tinPhong(p, '👑 ' + h.ten + ' lên dẫn đầu!');
      xetThuongTo(p, h);
      if (h.xong) xetHetVan(p);
    }
    res.json({ ok: true, hang: hangTro(p, h), soHs: p.hs.size, diem: h.diem, xong: h.xong });
  });

  app.get('/api/live/:ma/hs', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    const h = layHs(p, req.query, res); if (!h) return;
    if (p.kieu === 'tro') {
      const out = { kieu: 'tro', tro: p.tro.game, pha: p.pha, ten: h.ten, diem: h.diem || 0, soHs: p.hs.size, tong: p.tro.tong,
        lam: h.lam || 0, dungSo: h.dungSo || 0, xong: !!h.xong, batDau: p.batDau, van: p.tro.van, dong: !!p.dong };
      if (p.tro.to.length) {
        const ds = dsTo(p);
        out.to = h.to == null ? -1 : h.to;
        out.dsTo = ds.map((x) => ({ ten: x.ten, soTv: x.soTv, diem: x.diem, hang: x.hang, soXong: x.soXong }));
      }
      if (h.xong || p.pha === 'het') out.hang = hangTro(p, h);
      if (p.pha === 'het') out.bxh = bxhTro(p).slice(0, 5).map((r) => ({ ten: r.ten, diem: r.diem }));
      return res.json(out);
    }
    if (tuLam(p)) {
      const out = { kieu: p.kieu, pha: p.pha, ten: h.ten, diem: h.diem, soHs: p.hs.size, tong: p.ds ? p.ds.length : 0, i: h.i || 0, dungSo: h.dungSo || 0, xong: !!h.xong, lv: h.lv || '', moc: p.moc || 0 };
      if (p.kieu === 'dua' && (h.xong || p.pha === 'het' || req.query.canh)) out.dua = toanCanh(p, h);
      if (p.pha === 'choi' && !h.xong && p.ds) {
        if (h.tgI !== h.i) { h.tgI = h.i; h.tg = Date.now(); } // bat dau tinh gio tu luc em nhin thay cau
        out.cau = CauHoi.choHs(p.ds[h.thuTu[h.i]]);
      }
      if (h.xong || p.pha === 'het') out.hang = bangXepHang(p).findIndex((r) => r.pid === h.pid) + 1;
      if (p.pha === 'choi') out.vt = viTri(p, h);
      if (h.tin && h.tin.length) { out.tin = h.tin; h.tin = []; }
      if (p.pha === 'het') out.bxh = bangXepHang(p).slice(0, 5).map((r) => ({ ten: r.ten, diem: r.diem }));
      return res.json(out);
    }
    if (p.kieu === 'chuong') {
      const xh = [...p.hs.values()].sort(soSanh(p));
      let soCon = 0;
      for (const x of p.hs.values()) if (x.con) soCon++;
      const out = {
        kieu: 'chuong', pha: p.pha, qid: p.qid, ten: h.ten, diem: h.diem, con: !!h.con, muon: !!h.muon, vang: !!h.vang,
        roiCau: h.roiCau || 0, soHs: p.hs.size, soCon, hang: xh.indexOf(h) + 1, daBatDau: !!p.daBatDau,
        chon: h.tl && h.tl.qid === p.qid ? h.tl.chon : -1, cuu: { seq: h.cuuSeq || 0, ly: h.cuuLy || '' }, dong: !!p.dong,
      };
      if (p.cau && (p.pha === 'hoi' || p.pha === 'lat')) {
        out.cau = { zh: p.cau.zh, opts: p.cau.opts, so: p.cau.so, tong: p.cau.tong, cuoi: !!p.cau.cuoi, cuu: !!p.cau.cuu };
        if (p.pha === 'hoi') { out.conLai = conLaiMs(p); out.tam = !!p.dungLuc; out.khoa = !!p.khoaTl; }
      }
      if (p.pha === 'lat') {
        out.dung = p.dung;
        out.kq = h.kq && h.kq.qid === p.qid ? h.kq : null;
        out.soRoi = p.ketQua ? p.ketQua.roi.length : 0;
        out.soVe = p.ketQua ? p.ketQua.ve.length : 0;
      }
      if (p.pha === 'het') {
        out.soVang = xh.filter((x) => x.vang).length;
        out.bxh = xh.slice(0, 5).map((x) => ({ ten: x.ten, diem: x.diem, con: !!x.con, vang: !!x.vang }));
      }
      return res.json(out);
    }
    if (p.kieu === 'keo') {
      const k = p.keo;
      const out = { kieu: 'keo', pha: p.pha, qid: p.qid, ten: h.ten, diem: h.diem, soHs: p.hs.size, dong: !!p.dong,
        to: h.to == null ? -1 : h.to, dsTo: dsToKeo(p), keo: { L: k.L, R: k.R, nac: k.nac, max: k.max, thang: k.thang, tenL: k.to[k.L], tenR: k.to[k.R] },
        chon: h.tl && h.tl.qid === p.qid ? h.tl.chon : -1, cong: 0 };
      if (p.cau && (p.pha === 'hoi' || p.pha === 'lat')) {
        out.cau = { zh: p.cau.zh, opts: p.cau.opts, so: p.cau.so, tong: p.cau.tong };
        if (p.pha === 'hoi') out.conLai = Math.max(0, p.cau.secs * 1000 - (Date.now() - p.batDau));
      }
      if (p.pha === 'lat') { out.dung = p.dung; out.kq = k.kq; }
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
