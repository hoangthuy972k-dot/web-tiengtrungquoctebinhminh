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
// Kieu 'onto' (public/js/lop-onto-qr.js): Gap thu bong / Xay lau dai / Duong bang bi mat qua ma QR — hoc sinh chon to,
// moi vong ca lop tra loi cung mot cau (trac nghiem / xep cau / noi tu, may chu cham). Lat dap an: to co ti le dung >= nguong
// (50% / 70%) duoc hanh dong (khong to nao dat thi to tot nhat co it nhat 1 ban dung), xep theo ti le roi toc do. Moi to duoc
// hanh dong: ban dung nhanh nhat la "doi truong luot nay", bam tren dien thoai (/hanh) — chi dung luot, dung nguoi, mot lan.
// Canh tro choi (diem, thu bong, lau dai, o bang) tinh tren man chieu; may chu chi giu ten, to, dap an va ket qua cuoi.
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

// Phong do HOC SINH tu mo de on bai voi ban (trang /game -> "On bai cu" -> "On voi ban", public/js/on-bai-cu.js).
// Chi kieu 'nhip' / 'dua', phai dang nhap moi mo duoc (ban be vao bang ma QR thi khong can tai khoan) va gioi han
// chat hon phong giao vien: moi tai khoan 1 phong dang mo, toi da 12 ban, toi da 30 cau, 30 phut khong ai choi thi
// tu dong, moi gio mo toi da 6 phong / tai khoan (20 / IP — ca lop hay chung mot dia chi mang cua truong).
// p.hsChu = id tai khoan chu phong. p.han (giay, chi phong hoc sinh): "Ghe nong" — ca phong cung mot dong ho, het gio
// la het van; xep hang theo so cau dung, bang nhau thi ai sai it hon dung tren.
const HS_MAX_BAN = 12;
const HS_MAX_CAU = 30;
const HS_NGHI_MS = 30 * 60 * 1000;
const HS_DONG_GIU_MS = 2 * 60 * 1000;   // dong roi giu them 2 phut cho dien thoai kip xem bang cuoi
const HS_TAO_GIO_TK = 6;
const HS_TAO_GIO_IP = 20;
const HS_HAN = [60, 90, 120];
const phongCuaHs = new Map(); // id tai khoan -> ma phong dang mo
const taoTheoHs = new Map();  // 'u:<id>' | 'i:<ip>' -> [thoi diem tao]
function xoaPhong(ma, p) {
  phong.delete(ma);
  if (p && p.hsChu && phongCuaHs.get(p.hsChu) === ma) phongCuaHs.delete(p.hsChu);
}
function dongHs(p, ly) {
  if (p.dong) return;
  p.dong = true; p.dongLuc = Date.now(); p.dongLy = ly || '';
  p.pha = 'het';
  if (phongCuaHs.get(p.hsChu) === p.ma) phongCuaHs.delete(p.hsChu);
}
// Phong hoc sinh: het gio Ghe nong -> het van; lau khong ai choi -> dong; dong qua 2 phut -> xoa. Tra ve false neu da xoa.
function xetHs(p, now) {
  if (!p.hsChu) return true;
  if (p.dong) { if (now - p.dongLuc > HS_DONG_GIU_MS) { xoaPhong(p.ma, p); return false; } return true; }
  if (p.han && p.pha === 'choi' && now >= p.hetLuc) { p.pha = 'het'; tinPhong(p, '⏰ Hết giờ!'); }
  if (now - p.hdLuc > HS_NGHI_MS) dongHs(p, 'nghi');
  return true;
}
function lanGanDay(k, now) {
  const ds = (taoTheoHs.get(k) || []).filter((t) => now - t < 3600000);
  if (ds.length) taoTheoHs.set(k, ds); else taoTheoHs.delete(k);
  return ds;
}
// Bo < > trong moi chuoi cua bo cau hoc sinh gui len (dien thoai ban be hien bang textContent / esc, day la lop chan thu hai)
function sachSau(x, sau) {
  if (typeof x === 'string') return x.replace(/[<>]/g, '');
  if (!x || typeof x !== 'object' || sau > 3) return x;
  if (Array.isArray(x)) return x.slice(0, 40).map((y) => sachSau(y, sau + 1));
  const o = {};
  Object.keys(x).slice(0, 12).forEach((k) => { o[k] = sachSau(x[k], sau + 1); });
  return o;
}

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
  for (const [ma, p] of phong) { if (now - p.cham > HET_HAN_MS) xoaPhong(ma, p); else xetHs(p, now); }
  for (const k of [...taoTheoHs.keys()]) lanGanDay(k, now);
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
  // Ghe nong (phong hoc sinh co gioi han thoi gian): so cau dung, bang nhau thi ai sai it hon (ti le dung cao hon)
  if (tuLam(p) && p.han) return (a, b) => (b.dungSo || 0) - (a.dungSo || 0) || (a.i || 0) - (b.i || 0) || b.diem - a.diem || dongHo(a, b);
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
function tenToPhong(p) { return p.tro ? p.tro.to : p.keo ? p.keo.to : p.onto ? p.onto.to : []; }

/* ---- On bai theo to qua ma QR (kieu 'onto') ---- */
const GAME_ONTO = { gapthu: 1, laudai: 1, duongbang: 1 };
const LOAI_LUOT = { tha: 1, manh: 1, o: 1, cuop: 1 };
const LOAI_O = { an: 1, nut: 1, ca: 1, daan: 1 };
function sachMau(m) { return /^#[0-9a-f]{3,8}$/i.test(String(m || '')) ? String(m) : ''; }
function toOnTo(b) { return Array.isArray(b.to) ? b.to.map((x) => sachTen(x)).filter(Boolean).slice(0, 6) : []; }
function tvOnTo(p, to) { return [...p.hs.values()].filter((h) => h.to === to); }
function daTlOnTo(p, h) { return !!(h.tl && h.tl.qid === p.qid); }
function dungOnTo(p, h) { return daTlOnTo(p, h) && h.tl.dung; }
// Lat dap an: thong ke tung to, to nao duoc hanh dong (theo thu tu) va doi truong (ban dung nhanh nhat)
function latOnTo(p) {
  const o = p.onto;
  const ds = o.to.map((ten, i) => {
    const tv = tvOnTo(p, i);
    const dung = tv.filter((h) => dungOnTo(p, h)).sort((a, b) => a.tl.ms - b.tl.ms);
    const ms = dung.length ? Math.round(dung.reduce((s, h) => s + h.tl.ms, 0) / dung.length) : 0;
    return { to: i, soTv: tv.length, daTL: tv.filter((h) => daTlOnTo(p, h)).length, dung: dung.length, tiLe: tv.length ? dung.length / tv.length : 0, ms, dt: dung.map((h) => h.pid) };
  });
  const xep = (a, b) => b.tiLe - a.tiLe || a.ms - b.ms || a.to - b.to;
  let duoc = ds.filter((x) => x.dung > 0 && x.tiLe >= o.nguong - 1e-9);
  if (!duoc.length) duoc = ds.filter((x) => x.dung > 0).sort(xep).slice(0, 1);
  duoc.sort(xep);
  for (const h of p.hs.values()) if (dungOnTo(p, h)) { h.diem++; h.dungSo = (h.dungSo || 0) + 1; }
  o.dt = {};
  ds.forEach((x) => { o.dt[x.to] = x.dt; });
  const doiTruong = {};
  duoc.forEach((x) => { const h = p.hs.get(x.dt[0]); if (h) doiTruong[x.to] = { pid: h.pid, ten: h.ten }; });
  o.kq = { qid: p.qid, dap: CauHoi.dapAn(o.c), why: o.c.why || '', duoc: duoc.map((x) => x.to), doiTruong,
    to: ds.map((x) => ({ to: x.to, soTv: x.soTv, daTL: x.daTL, dung: x.dung, tiLe: x.tiLe, ms: x.ms })) };
  p.pha = 'lat';
}
function luotCong(o) {
  const l = o.luot;
  return l && { id: l.id, to: l.to, pid: l.pid, ten: l.ten, loai: l.loai, v: l.v, xong: l.xong, tuDong: l.tuDong };
}
function dsToOnTo(p) { return p.onto.to.map((ten, i) => ({ ten, mau: p.onto.mau[i] || '', soTv: tvOnTo(p, i).length })); }

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

module.exports = function gan(app, tuy) {
  // tuy.auth: middleware dang nhap cua server.js (gan req.user) — chi dung cho phong hoc sinh tu mo
  const canDangNhap = (tuy && tuy.auth) || ((req, res) => res.status(401).json({ error: 'Chưa đăng nhập.' }));
  function layPhong(req, res) {
    const p = phong.get(String(req.params.ma || ''));
    if (!p || !xetHs(p, Date.now())) { res.status(404).json({ error: 'Không tìm thấy phòng. Em kiểm tra lại mã trên bảng nhé.' }); return null; }
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
    const kieu = k0 === 'nhip' || k0 === 'dua' || k0 === 'the' || k0 === 'chuong' || k0 === 'tro' || k0 === 'keo' || k0 === 'onto' ? k0 : 'gv';
    const p = { ma, kieu, khoa: token(), tao: Date.now(), cham: Date.now(), pha: 'cho', qid: 0, cau: null, dung: -1, batDau: 0, hs: new Map(), soVao: 0, ds: null };
    if (kieu === 'onto') {
      // game: tro dang choi; to / mau: cac to cua lop (2–6); secs: giay moi cau; nguong: ti le dung de duoc hanh dong
      const b = req.body || {}, to = toOnTo(b);
      if (to.length < 2) return res.status(400).json({ error: 'Cần ít nhất 2 tổ.' });
      p.onto = { game: GAME_ONTO[b.game] ? b.game : 'gapthu', to, mau: (Array.isArray(b.mau) ? b.mau : []).slice(0, 6).map(sachMau),
        secs: [15, 20, 30].indexOf(Number(b.secs)) >= 0 ? Number(b.secs) : 20, nguong: Number(b.nguong) === 0.7 ? 0.7 : 0.5,
        van: 1, soCau: 0, c: null, kq: null, dt: {}, luot: null, luotSeq: 0, tin: [], tinSeq: 0, ket: null };
      p.dong = false;
    }
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

  // ---- hoc sinh tu mo phong on bai voi ban (phai dang nhap) ----
  app.post('/api/live/tao-hs', canDangNhap, (req, res) => {
    donPhong();
    const now = Date.now();
    const uid = String((req.user && req.user.id) || '');
    if (!uid) return res.status(401).json({ error: 'Chưa đăng nhập.' });
    const k0 = (req.body || {}).kieu;
    if (k0 !== 'nhip' && k0 !== 'dua') return res.status(400).json({ error: 'Kiểu phòng không hợp lệ.' });
    const cu = phong.get(phongCuaHs.get(uid) || '');
    if (cu && cu.hsChu === uid && xetHs(cu, now) && !cu.dong) {
      return res.status(409).json({ error: 'Em đang có một phòng mở (mã ' + cu.ma + '). Đóng phòng đó rồi mới mở phòng mới được nhé.', daCo: true, ma: cu.ma });
    }
    const ip = String(req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress || 'x';
    const dsTk = lanGanDay('u:' + uid, now), dsIp = lanGanDay('i:' + ip, now);
    if (dsTk.length >= HS_TAO_GIO_TK || dsIp.length >= HS_TAO_GIO_IP) return res.status(429).json({ error: 'Em mở phòng nhiều quá rồi, nghỉ một lúc rồi mở lại nhé.' });
    if (phong.size >= MAX_PHONG) return res.status(503).json({ error: 'Máy chủ đang có quá nhiều phòng, thử lại sau nhé.' });
    const ma = maMoi();
    if (!ma) return res.status(503).json({ error: 'Chưa tạo được mã phòng, thử lại nhé.' });
    dsTk.push(now); taoTheoHs.set('u:' + uid, dsTk);
    dsIp.push(now); taoTheoHs.set('i:' + ip, dsIp);
    const p = { ma, kieu: k0, khoa: token(), tao: now, cham: now, pha: 'cho', qid: 0, cau: null, dung: -1, batDau: 0, hs: new Map(), soVao: 0, ds: null,
      hsChu: uid, hdLuc: now, dong: false, dongLuc: 0, dongLy: '', han: 0, hetLuc: 0 };
    phong.set(ma, p);
    phongCuaHs.set(uid, ma);
    res.json({ ma, khoa: p.khoa, toiDa: HS_MAX_BAN, toiDaCau: HS_MAX_CAU });
  });
  // Dong phong cua chinh minh ma khong can khoa phong (vd. lo dong the trinh duyet, mo lai tren may khac)
  app.post('/api/live/dong-hs', canDangNhap, (req, res) => {
    const uid = String((req.user && req.user.id) || '');
    const p = phong.get(phongCuaHs.get(uid) || '');
    if (p && p.hsChu === uid) dongHs(p, 'chu');
    res.json({ ok: true, da: !!p });
  });
  // Chu phong roi di (bam Dong phong, hoac dong trang — sendBeacon kem khoa tren duong dan)
  app.post('/api/live/:ma/dong', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (!p.hsChu) return res.status(400).json({ error: 'Phòng này không đóng kiểu này được.' });
    dongHs(p, 'chu');
    res.json({ ok: true });
  });

  app.post('/api/live/:ma/cau', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    const b = req.body || {};
    if (p.kieu === 'onto') {
      // { cau: { trac nghiem | xep | noi } (cau-hoi.js), so, tong } — ca lop cung tra loi, may chu giu dap an
      const c = CauHoi.chuan(b.cau);
      if (!c) return res.status(400).json({ error: 'Câu hỏi không hợp lệ.' });
      const o = p.onto;
      p.qid++;
      p.pha = 'hoi';
      o.soCau++;
      o.c = c; o.kq = null; o.luot = null; o.dt = {};
      p.cau = { secs: o.secs, so: so(b.so, 1, 999), tong: so(b.tong, 0, 999) };
      p.batDau = Date.now();
      for (const h of p.hs.values()) h.tl = null;
      return res.json({ ok: true, qid: p.qid });
    }
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
    if (p.kieu === 'onto') {
      if (p.pha === 'hoi' && p.onto.c) latOnTo(p);
      return res.json({ ok: true, kq: p.onto.kq });
    }
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
    if (p.hsChu && p.dong) return res.status(410).json({ error: 'Phòng này đã đóng.' });
    // Cuoc dua: hien toan canh sau moi 3 hoac 5 cau
    if (p.kieu === 'dua') p.moc = Number((req.body || {}).moc) === 5 ? 5 : 3;
    // cau trac nghiem / xep cau (keo tha) / noi tu — xem cau-hoi.js. Phong hoc sinh: toi da 30 cau, bo < > trong moi chuoi
    const cauGui = (req.body || {}).cau;
    const ds = p.hsChu ? CauHoi.chuanBo(sachSau(Array.isArray(cauGui) ? cauGui.slice(0, HS_MAX_CAU) : [], 0), HS_MAX_CAU)
      : CauHoi.chuanBo(cauGui, 200);
    if (!ds.length) return res.status(400).json({ error: 'Chưa có câu hỏi nào.' });
    if (p.hsChu) {
      // Ghe nong: ca phong cung mot dong ho (60 / 90 / 120 giay), het gio la het van
      const han = Number((req.body || {}).han);
      p.han = p.kieu === 'nhip' && HS_HAN.indexOf(han) >= 0 ? han : 0;
      p.hetLuc = p.han ? Date.now() + p.han * 1000 : 0;
      p.hdLuc = Date.now();
      p.su = [];
    }
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
    if ((p.kieu === 'chuong' || p.kieu === 'tro' || p.kieu === 'keo' || p.kieu === 'onto') && (req.body || {}).dong) p.dong = true;
    if (p.kieu === 'onto') {
      // { hang: [{ to, hang, diem }], don } — ket qua cuoi do man chieu tinh (canh tro choi nam o man chieu)
      const b = req.body || {}, o = p.onto, n = o.to.length;
      if (Array.isArray(b.hang)) {
        const da = {};
        o.ket = { don: chuoi(b.don, 12) || 'điểm', hang: b.hang.slice(0, 6).map((x) => x && ({ to: Number(x.to), hang: so(x.hang, 1, 6), diem: so(x.diem, 0, 9999) }))
          .filter((x) => x && Number.isInteger(x.to) && x.to >= 0 && x.to < n && !da[x.to] && (da[x.to] = 1)) };
      }
      o.luot = null;
      p.pha = 'het';
      return res.json({ ok: true });
    }
    p.pha = 'het';
    if (p.hsChu) p.hdLuc = Date.now();
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
    if (p.kieu === 'onto') {
      const o = p.onto;
      return res.json({ kieu: 'onto', game: o.game, pha: p.pha, qid: p.qid, soHs: p.hs.size,
        ds: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => ({ pid: h.pid, ten: h.ten, to: h.to == null ? -1 : h.to })),
        to: o.to.map((ten, i) => { const tv = tvOnTo(p, i); return { soTv: tv.length, daTL: tv.filter((h) => daTlOnTo(p, h)).length }; }),
        luot: luotCong(o), kq: p.pha === 'lat' ? o.kq : null });
    }
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
      const hsPhu = p.hsChu ? { hsChu: true, dong: !!p.dong, dongLy: p.dongLy || '', toiDa: HS_MAX_BAN, han: p.han || 0,
        conLai: p.han && p.pha === 'choi' ? Math.max(0, p.hetLuc - Date.now()) : 0 } : null;
      return res.json(Object.assign({ kieu: p.kieu, pha: p.pha, soHs: p.hs.size, tong: p.ds ? p.ds.length : 0, batDau: p.batDau, moc: p.moc || 0,
        ds: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => ({ pid: h.pid, ten: h.ten, lv: h.lv || '' })),
        soXong: bxh.filter((r) => r.xong).length, bxh, su: p.su || [], tk: p.tk || null }, hsPhu));
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
    if (p.pha === 'het' && !((p.kieu === 'tro' || p.kieu === 'onto' || p.hsChu) && !p.dong)) return res.status(410).json({ error: 'Phòng này đã kết thúc.' });
    let ten = sachTen((req.body || {}).ten);
    if (!ten) return res.status(400).json({ error: 'Em nhập tên trước nhé.' });
    const toiDa = p.hsChu ? HS_MAX_BAN : p.kieu === 'chuong' ? MAX_HS_CHUONG : MAX_HS;
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
    if (p.hsChu) p.hdLuc = Date.now();
    // Rung Chuong Vang: vao truoc khi bat dau thi len san; vao muon thi dung ngoai, co co the cho len
    if (p.kieu === 'chuong') Object.assign(h, { con: !p.daBatDau, muon: !!p.daBatDau, roiCau: 0, roiLuc: 0, vang: false, cuuSeq: 0, cuuSo: 0, kq: null });
    if (p.kieu === 'tro') Object.assign(h, { lam: 0, dungSo: 0, loi: 0, giay: 0, xong: false, xongLuc: 0, to: p.tro.to.length ? null : -1 });
    if (p.kieu === 'keo') h.to = null;
    if (p.kieu === 'onto') { h.to = null; h.dungSo = 0; }
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
      if (p.hsChu) p.hdLuc = Date.now();
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
    if (p.kieu === 'onto') {
      // { qid, chon | xep | noi } — may chu cham, chua bao dung / sai truoc khi lat
      const o = p.onto;
      if (h.to == null || h.to < 0 || h.to >= o.to.length) return res.status(409).json({ error: 'Em chọn tổ trước nhé.', chonTo: true });
      if (daTlOnTo(p, h)) return res.json({ ok: true, daGui: true });
      if (Date.now() > p.batDau + o.secs * 1000 + 1500) return res.status(409).json({ error: 'Hết giờ rồi!' });
      const kq = CauHoi.cham(o.c, b);
      if (!kq.hopLe) return res.status(400).json({ error: 'Đáp án không hợp lệ.' });
      h.tl = { qid: p.qid, dung: kq.dung, ms: Date.now() - p.batDau, chon: o.c.k ? -1 : kq.o };
      return res.json({ ok: true, daGui: true });
    }
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
    if ((p.kieu !== 'tro' && p.kieu !== 'keo' && p.kieu !== 'onto') || !ten.length) return res.status(400).json({ error: 'Phòng này không chia tổ.' });
    const to = Number(b.to);
    if (!Number.isInteger(to) || to < 0 || to >= ten.length) return res.status(400).json({ error: 'Tổ không hợp lệ.' });
    if (p.kieu === 'tro' && h.to !== to && p.pha === 'choi' && (h.lam || h.xong) && h.to != null) return res.status(409).json({ error: 'Em đang chơi rồi, không đổi tổ được nữa.' });
    // keo co: dang co cau hoi ma em vua tra loi thi khong doi to (khoi gian lan ti le)
    if (p.kieu === 'keo' && h.to !== to && h.to != null && h.to >= 0 && h.tl && h.tl.qid === p.qid && p.pha === 'hoi') return res.status(409).json({ error: 'Đợi hết câu này rồi hãy đổi tổ nhé.' });
    if (p.kieu === 'onto' && h.to !== to && h.to != null && h.to >= 0 && daTlOnTo(p, h) && (p.pha === 'hoi' || p.pha === 'lat')) return res.status(409).json({ error: 'Đợi hết câu này rồi hãy đổi tổ nhé.' });
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

  /* ---- On bai theo to qua ma QR (kieu 'onto') ---- */
  function laOnTo(p, res) {
    if (p.kieu !== 'onto') { res.status(400).json({ error: 'Phòng này không phải ôn bài theo tổ.' }); return false; }
    return true;
  }
  // Cai dat phong (giu phong khi giao vien doi tro / so to): { game, to, mau, secs, nguong, moi } — moi: van moi, xoa diem
  app.post('/api/live/:ma/onto', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res) || !laOnTo(p, res)) return;
    const b = req.body || {}, o = p.onto;
    if (GAME_ONTO[b.game]) o.game = b.game;
    const to = toOnTo(b);
    if (to.length >= 2) {
      o.to = to;
      o.mau = (Array.isArray(b.mau) ? b.mau : []).slice(0, 6).map(sachMau);
      for (const h of p.hs.values()) if (h.to != null && h.to >= to.length) h.to = null;
    }
    if ([15, 20, 30].indexOf(Number(b.secs)) >= 0) o.secs = Number(b.secs);
    if (b.nguong != null) o.nguong = Number(b.nguong) === 0.7 ? 0.7 : 0.5;
    if (b.moi) {
      o.van++; o.soCau = 0; o.c = null; o.kq = null; o.dt = {}; o.luot = null; o.tin = []; o.ket = null;
      p.pha = 'cho'; p.cau = null; p.dong = false;
      for (const h of p.hs.values()) { h.tl = null; h.diem = 0; h.dungSo = 0; }
    }
    res.json({ ok: true, to: o.to, pha: p.pha });
  });
  // Mo luot hanh dong cho mot to duoc thuong: { to, loai: tha|manh|o|cuop, ds: [{ v, nhan, phu, loai, tat }], han (giay) }
  // Doi truong = ban dung nhanh nhat cua to con trong phong. Khong con ai -> khongCo (man chieu tu chon).
  app.post('/api/live/:ma/luot', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res) || !laOnTo(p, res)) return;
    const b = req.body || {}, o = p.onto, to = Number(b.to);
    if (p.pha !== 'lat' || !o.kq) return res.status(409).json({ error: 'Chưa lật đáp án.' });
    if (!Number.isInteger(to) || o.kq.duoc.indexOf(to) < 0) return res.status(400).json({ error: 'Tổ này không được hành động lượt này.' });
    const loai = LOAI_LUOT[b.loai] ? b.loai : 'tha';
    const ds = (Array.isArray(b.ds) ? b.ds : []).slice(0, 8).map((x) => x && ({
      v: chuoi(x.v, 20), nhan: chuoi(x.nhan, 40), phu: chuoi(x.phu, 60), loai: LOAI_O[x.loai] ? x.loai : '', tat: !!x.tat,
    })).filter((x) => x && x.v);
    if (loai !== 'tha' && !ds.some((x) => !x.tat)) return res.status(400).json({ error: 'Không có lựa chọn nào.' });
    const pid = (o.dt[to] || []).find((id) => { const h = p.hs.get(id); return h && h.to === to; });
    const h = pid ? p.hs.get(pid) : null;
    o.luot = { id: ++o.luotSeq, to, loai, ds, han: so(b.han, 5, 20) * 1000, pid: h ? h.pid : '', ten: h ? h.ten : '', batDau: Date.now(),
      v: null, xong: !h, tuDong: !h };
    res.json({ ok: true, id: o.luot.id, pid: o.luot.pid, ten: o.luot.ten, han: o.luot.han, khongCo: !h });
  });
  // Het gio (hoac doi truong khong bam): chot luot — tra lai lua chon cua doi truong neu kip, khong thi tuDong
  app.post('/api/live/:ma/chot', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res) || !laOnTo(p, res)) return;
    const l = p.onto.luot;
    if (!l || l.id !== Number((req.body || {}).id)) return res.status(409).json({ error: 'Lượt này đã qua.' });
    if (!l.xong) { l.xong = true; l.tuDong = true; }
    res.json({ ok: true, v: l.v, tuDong: l.tuDong });
  });
  // Dong ket qua cua mot luot cho dien thoai: { to, txt }
  app.post('/api/live/:ma/tin', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res) || !laOnTo(p, res)) return;
    const b = req.body || {}, o = p.onto, to = Number(b.to);
    const txt = chuoi(b.txt, 200).replace(/[\u0000-\u001f<>]/g, '').trim();
    if (txt) {
      o.tin.push({ id: ++o.tinSeq, qid: p.qid, to: Number.isInteger(to) && to >= 0 && to < o.to.length ? to : -1, txt });
      if (o.tin.length > 12) o.tin.shift();
    }
    o.luot = null;
    res.json({ ok: true });
  });
  // Doi truong bam tren dien thoai: { pid, tok, id, v } — chi doi truong cua luot dang mo, mot lan, trong han
  app.post('/api/live/:ma/hanh', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    const b = req.body || {};
    const h = layHs(p, b, res); if (!h) return;
    if (!laOnTo(p, res)) return;
    const l = p.onto.luot, now = Date.now();
    if (!l || l.id !== Number(b.id) || p.pha !== 'lat') return res.status(409).json({ error: 'Lượt này đã qua rồi.' });
    if (l.pid !== h.pid) return res.status(403).json({ error: 'Chỉ đội trưởng lượt này được chọn.' });
    if (l.xong) return res.status(409).json({ error: l.tuDong ? 'Hết giờ — máy đã tự chọn.' : 'Em đã chọn rồi.' });
    if (now > l.batDau + l.han + 1000) return res.status(409).json({ error: 'Hết giờ rồi!' });
    let v;
    if (l.loai === 'tha') v = Math.max(0, Math.min(l.han, now - l.batDau));
    else {
      const x = l.ds.find((y) => y.v === chuoi(b.v, 20) && !y.tat);
      if (!x) return res.status(400).json({ error: 'Lựa chọn không hợp lệ.' });
      v = x.v;
    }
    l.v = v; l.xong = true;
    res.json({ ok: true });
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
      // Phong hoc sinh: giu = het van van giu phong cho chu phong bam "Choi lai"; dong = chu phong da dong han
      if (p.hsChu) {
        out.hsChu = true; out.giu = !p.dong; out.dong = !!p.dong;
        if (p.han) { out.han = p.han; if (p.pha === 'choi') out.conLai = Math.max(0, p.hetLuc - Date.now()); }
        if (p.han && p.pha === 'het') out.bxh = bangXepHang(p).slice(0, 5).map((r) => ({ ten: r.ten, diem: r.dungSo + ' từ' }));
      }
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
    if (p.kieu === 'onto') {
      const o = p.onto, now = Date.now();
      const out = { kieu: 'onto', game: o.game, pha: p.pha, qid: p.qid, ten: h.ten, diem: h.diem || 0, soHs: p.hs.size, dong: !!p.dong,
        to: h.to == null ? -1 : h.to, dsTo: dsToOnTo(p), van: o.van, soCau: o.soCau, nguong: o.nguong };
      if (o.c && (p.pha === 'hoi' || p.pha === 'lat')) {
        out.cau = Object.assign(CauHoi.choHs(o.c), { so: p.cau ? p.cau.so : o.soCau, tong: p.cau ? p.cau.tong : 0 });
        out.daGui = daTlOnTo(p, h);
        out.chon = out.daGui ? h.tl.chon : -1;
        if (p.pha === 'hoi') out.conLai = Math.max(0, o.secs * 1000 - (now - p.batDau));
      }
      if (p.pha === 'lat' && o.kq) {
        out.kq = { dap: o.kq.dap, why: o.kq.why, dung: dungOnTo(p, h), duoc: o.kq.duoc, to: o.kq.to, doiTruong: o.kq.doiTruong };
        const l = o.luot;
        if (l) out.luot = { id: l.id, to: l.to, ten: l.ten, la: l.pid === h.pid, loai: l.loai, ds: l.pid === h.pid ? l.ds : [],
          conLai: Math.max(0, l.batDau + l.han - now), xong: l.xong, tuDong: l.tuDong };
        out.tin = o.tin.filter((x) => x.qid === p.qid);
      }
      if (p.pha === 'het') out.ket = o.ket;
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
