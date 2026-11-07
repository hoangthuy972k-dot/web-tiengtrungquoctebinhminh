/* Kiem thu bo ma + bo nhan dien "The giay A/B/C/D" (public/js/thegiay-ma.js).
   Khong can thu vien: tu ve anh xam tong hop (the xoay, co gian, nghieng phoi
   canh, lam mo, nhieu, nen roi mat, ngon tay cam the) roi doi chieu ket qua.
   Chay:  node tools/test-thegiay.js          (in so lieu, thoat 1 neu sai)   */
'use strict';
const M = require('../public/js/thegiay-ma.js');

let hat = 20261107;
function rnd() { hat = (hat * 1103515245 + 12345) >>> 0; return hat / 4294967296; }
function gauss() { let u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
let loi = 0;
function kiem(dk, msg) { if (!dk) { loi++; console.log('  ✗ ' + msg); } }

/* ---------- 1. bo ma ---------- */
if (require.main === module) (function () {
  const all = [];
  for (let id = 1; id <= M.SO_TOI_DA; id++) {
    let x = M.maHoa(id);
    for (let k = 0; k < 4; k++) { all.push({ id, k, m: x }); x = M.xoay(x); }
  }
  let dmin = 99, wmin = 99, wmax = 0;
  for (let a = 0; a < all.length; a++) for (let b = a + 1; b < all.length; b++) dmin = Math.min(dmin, M.demBit(all[a].m ^ all[b].m));
  for (let id = 1; id <= M.SO_TOI_DA; id++) { const w = M.demBit(M.maHoa(id)); wmin = Math.min(wmin, w); wmax = Math.max(wmax, w); }
  console.log('Bo ma: 60 so x 4 huong, khoang cach Hamming nho nhat = ' + dmin + ', so o den ' + wmin + '–' + wmax + '/25');
  kiem(dmin >= 6, 'khoang cach ma < 6');
  // sua loi: lat ngau nhien 0..2 bit van ra dung; 3 bit thi khong doc nham
  let dung = 0, nham3 = 0, tong = 0;
  for (const e of all) {
    for (let t = 0; t < 20; t++) {
      const sl = t % 3; let m = e.m; const da = {};
      while (Object.keys(da).length < sl) { const b = Math.floor(rnd() * 25); if (!da[b]) { da[b] = 1; m ^= 1 << b; } }
      const g = M.giai(m >>> 0, 2); tong++;
      if (g && g.id === e.id && g.k === e.k) dung++;
      let m3 = e.m; const d3 = {};
      while (Object.keys(d3).length < 3) { const b = Math.floor(rnd() * 25); if (!d3[b]) { d3[b] = 1; m3 ^= 1 << b; } }
      const g3 = M.giai(m3 >>> 0, 2);
      if (g3 && (g3.id !== e.id || g3.k !== e.k)) nham3++;
    }
  }
  console.log('Sua loi 0–2 bit: ' + dung + '/' + tong + ' dung; lat 3 bit doc nham: ' + nham3);
  kiem(dung === tong, 'sua loi 0–2 bit chua dung het');
  kiem(nham3 === 0, 'lat 3 bit bi doc nham');
})();

/* ---------- 2. ve anh tong hop ---------- */
function maTran(q) { // hinh vuong don vi -> q, tra ma tran 3x3 [a b c; d e f; g h 1]
  const x0 = q[0][0], y0 = q[0][1], x1 = q[1][0], y1 = q[1][1], x2 = q[2][0], y2 = q[2][1], x3 = q[3][0], y3 = q[3][1];
  const sx = x0 - x1 + x2 - x3, sy = y0 - y1 + y2 - y3;
  const dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2, den = dx1 * dy2 - dx2 * dy1;
  const G = (sx * dy2 - dx2 * sy) / den, H = (dx1 * sy - sx * dy1) / den;
  return [x1 - x0 + G * x1, x3 - x0 + H * x3, x0, y1 - y0 + G * y1, y3 - y0 + H * y3, y0, G, H, 1];
}
function nghich(m) {
  const [a, b, c, d, e, f, g, h, i] = m;
  const A = e * i - f * h, B = -(d * i - f * g), C = d * h - e * g;
  const det = a * A + b * B + c * C;
  return [A / det, -(b * i - c * h) / det, (b * f - c * e) / det, B / det, (a * i - c * g) / det, -(a * f - c * d) / det, C / det, -(a * h - b * g) / det, (a * e - b * d) / det];
}
function anhMoi(w, h) { return { w, h, d: new Float32Array(w * h) }; }
// nen roi mat: chuyen sac sang toi, hinh chu nhat / tron, net chu, o ban co, hinh vuong gia (ma sai)
function veNen(A, soVat) {
  const { w, h, d } = A;
  const g0 = 90 + rnd() * 80, gx = (rnd() - 0.5) * 80, gy = (rnd() - 0.5) * 80;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) d[y * w + x] = g0 + gx * x / w + gy * y / h;
  for (let n = 0; n < soVat; n++) {
    const kieu = rnd(), cx = rnd() * w, cy = rnd() * h, s = 6 + rnd() * Math.min(w, h) * 0.12, v = rnd() * 255;
    if (kieu < 0.3) hcn(A, cx, cy, s, s * (0.3 + rnd() * 1.4), rnd() * Math.PI, () => v);
    else if (kieu < 0.5) tron(A, cx, cy, s / 2, v);
    else if (kieu < 0.65) { // net chu / song
      for (let t = 0; t < 6; t++) hcn(A, cx + t * s * 0.25, cy, s * 0.08, s * (0.3 + rnd()), rnd() * 0.4, () => 20 + rnd() * 40);
    } else if (kieu < 0.78) { // ban co
      const o = 2 + rnd() * 8, goc = rnd() * Math.PI;
      hcn(A, cx, cy, s, s, goc, (u, v2) => ((Math.floor(u / o) + Math.floor(v2 / o)) & 1) ? 230 : 25);
    } else { // hinh vuong gia: vien den + 5x5 ngau nhien (ma sai) tren nen trang
      const la = []; for (let i = 0; i < 25; i++) la.push(rnd() < 0.5);
      const goc = rnd() * Math.PI, c = s * 1.3;
      hcn(A, cx, cy, c, c, goc, (u, v2) => {
        const U = u / c * 9 - 1, V = v2 / c * 9 - 1;
        if (U < 0 || V < 0 || U >= 7 || V >= 7) return 215;
        const a = Math.floor(U), b = Math.floor(V);
        if (a === 0 || b === 0 || a === 6 || b === 6) return 30;
        return la[(b - 1) * 5 + (a - 1)] ? 30 : 215;
      });
    }
  }
}
function hcn(A, cx, cy, sw, sh, goc, fn) {
  const { w, h, d } = A, co = Math.cos(goc), si = Math.sin(goc), R = Math.hypot(sw, sh) / 2 + 1;
  for (let y = Math.max(0, Math.floor(cy - R)); y < Math.min(h, cy + R); y++) for (let x = Math.max(0, Math.floor(cx - R)); x < Math.min(w, cx + R); x++) {
    const dx = x + 0.5 - cx, dy = y + 0.5 - cy, u = dx * co + dy * si + sw / 2, v = -dx * si + dy * co + sh / 2;
    if (u >= 0 && v >= 0 && u < sw && v < sh) d[y * w + x] = fn(u, v);
  }
}
function tron(A, cx, cy, r, v) {
  const { w, h, d } = A;
  for (let y = Math.max(0, Math.floor(cy - r)); y < Math.min(h, cy + r); y++) for (let x = Math.max(0, Math.floor(cx - r)); x < Math.min(w, cx + r); x++)
    if ((x + 0.5 - cx) ** 2 + (y + 0.5 - cy) ** 2 < r * r) d[y * w + x] = v;
}
const SC = 7 + 2 * M.LE; // canh the (o)
// Gia tri tai diem (U, V) tren the (don vi o, goc tren-trai cua the = 0,0)
function giaTriThe(l, U, V, giay, muc) {
  const X = U - M.LE, Y = V - M.LE;
  if (X >= 0 && Y >= 0 && X < 7 && Y < 7) return l[Math.floor(Y) * 7 + Math.floor(X)] ? muc : giay;
  // chu A/B/C/D: khoi den 0.26 x 0.36 cach ma 0.8 o; so the o goc
  const c = SC / 2, k = M.LE - 0.8;
  const khoi = [[c, k, 0.13, 0.18], [SC - k, c, 0.18, 0.13], [c, SC - k, 0.13, 0.18], [k, c, 0.18, 0.13], [0.38, 0.32, 0.12, 0.1]];
  for (const [x, y, hx, hy] of khoi) if (Math.abs(U - x) < hx && Math.abs(V - y) < hy) return muc + 30;
  return giay;
}
// ve the id: tam (cx, cy), canh ma (px), xoay goc (do, chieu kim dong ho), nghieng phoi canh p
function veThe(A, id, cx, cy, maPx, gocDo, p, giay, muc) {
  const { w, h, d } = A, l = M.luoi(id), s = maPx * SC / 7, t = gocDo * Math.PI / 180;
  const co = Math.cos(t), si = Math.sin(t);
  const q = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([u, v], i) => {
    // nghieng: canh tren / duoi (hoac trai / phai) ngan lai nhu nhin xien
    const k = 1 + (p.y || 0) * v + (p.x || 0) * u;
    const X = u * s / 2 * (1 + (p.y || 0) * v), Y = v * s / 2 * (1 + (p.x || 0) * u);
    void k; void i;
    return [cx + X * co - Y * si, cy + X * si + Y * co];
  });
  const Hi = nghich(maTran(q));
  const xs = q.map(a => a[0]), ys = q.map(a => a[1]);
  const ss = 3;
  for (let y = Math.max(0, Math.floor(Math.min(...ys))); y < Math.min(h, Math.ceil(Math.max(...ys))); y++) {
    for (let x = Math.max(0, Math.floor(Math.min(...xs))); x < Math.min(w, Math.ceil(Math.max(...xs))); x++) {
      let tong = 0, trong = 0;
      for (let a = 0; a < ss; a++) for (let b = 0; b < ss; b++) {
        const X = x + (a + 0.5) / ss, Y = y + (b + 0.5) / ss;
        const z = Hi[6] * X + Hi[7] * Y + Hi[8], u = (Hi[0] * X + Hi[1] * Y + Hi[2]) / z, v = (Hi[3] * X + Hi[4] * Y + Hi[5]) / z;
        if (u < 0 || v < 0 || u >= 1 || v >= 1) continue;
        trong++; tong += giaTriThe(l, u * SC, v * SC, giay, muc);
      }
      if (trong) d[y * w + x] = (d[y * w + x] * (ss * ss - trong) + tong) / (ss * ss);
    }
  }
  // dap an: canh nao huong len tren. Xoay t (chieu kim dong ho) => canh chuan e nam o huong e*90 + t
  let dap = 0, best = 1e9;
  for (let e = 0; e < 4; e++) { const a = ((e * 90 + gocDo) % 360 + 360) % 360, dd = Math.min(a, 360 - a); if (dd < best) { best = dd; dap = e; } }
  return { q, dap, s };
}
// ngon tay cam o mep the (khong de len ma)
function veTay(A, the, cx, cy, gocDo) {
  const t = gocDo * Math.PI / 180, co = Math.cos(t), si = Math.sin(t), s = the.s;
  const vt = [[-0.47, 0.2], [0.47, 0.25], [-0.2, 0.47]][Math.floor(rnd() * 3)];
  const X = vt[0] * s, Y = vt[1] * s;
  tron(A, cx + X * co - Y * si, cy + X * si + Y * co, s * 0.055, 120 + rnd() * 60);
}
function lamMo(A, r) {
  if (!r) return;
  const { w, h, d } = A, t = new Float32Array(d.length);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let s = 0, n = 0;
    for (let k = -r; k <= r; k++) { const xx = x + k; if (xx >= 0 && xx < w) { s += d[y * w + xx]; n++; } }
    t[y * w + x] = s / n;
  }
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let s = 0, n = 0;
    for (let k = -r; k <= r; k++) { const yy = y + k; if (yy >= 0 && yy < h) { s += t[yy * w + x]; n++; } }
    d[y * w + x] = s / n;
  }
}
function ra8(A, nhieu) {
  const o = new Uint8Array(A.d.length);
  for (let i = 0; i < o.length; i++) o[i] = Math.max(0, Math.min(255, Math.round(A.d[i] + gauss() * nhieu)));
  return o;
}

/* ---------- 3. lop hoc tong hop ---------- */
function lopHoc(w, h, soThe, maMin, maMax, opt) {
  opt = opt || {};
  const A = anhMoi(w, h);
  veNen(A, opt.soVat || 60);
  const ids = []; for (let i = 1; i <= 60; i++) ids.push(i);
  for (let i = ids.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; }
  const cot = Math.ceil(Math.sqrt(soThe * w / h)), hang = Math.ceil(soThe / cot), cw = w / cot, ch = h / hang;
  const dung = {};
  for (let n = 0; n < soThe; n++) {
    const id = ids[n], c = n % cot, r = Math.floor(n / cot);
    // xa hon (hang tren) thi nho hon
    const maPx = maMax - (maMax - maMin) * (r / Math.max(1, hang - 1)) * (0.7 + rnd() * 0.3);
    const cx = (c + 0.5) * cw + (rnd() - 0.5) * cw * 0.25, cy = (r + 0.5) * ch + (rnd() - 0.5) * ch * 0.2;
    const goc = Math.floor(rnd() * 4) * 90 + (rnd() - 0.5) * 2 * (opt.lech == null ? 25 : opt.lech);
    const p = { x: (rnd() - 0.5) * (opt.nghieng || 0.3), y: (rnd() - 0.5) * (opt.nghieng || 0.3) };
    const giay = 150 + rnd() * 90, muc = 15 + rnd() * 45;
    const t = veThe(A, id, cx, cy, maPx, goc, p, giay, muc);
    if (opt.tay !== false) veTay(A, t, cx, cy, goc);
    dung[id] = t.dap;
  }
  lamMo(A, opt.mo == null ? 1 : opt.mo);
  return { gr: ra8(A, opt.nhieu == null ? 5 : opt.nhieu), dung };
}
function chay(ten, w, h, soLan, soThe, maMin, maMax, opt) {
  let tong = 0, dung = 0, sai = 0, la = 0, ms = 0, msMax = 0;
  for (let l = 0; l < soLan; l++) {
    const s = lopHoc(w, h, soThe, maMin, maMax, opt);
    const t0 = process.hrtime.bigint();
    const kq = M.phatHien(s.gr, w, h, {});
    const t = Number(process.hrtime.bigint() - t0) / 1e6;
    ms += t; msMax = Math.max(msMax, t);
    tong += soThe;
    const thay = {};
    kq.forEach(r => {
      if (!(r.id in s.dung)) { la++; return; }
      thay[r.id] = 1;
      if (r.dap === s.dung[r.id]) dung++; else sai++;
    });
  }
  console.log(ten + ': ' + dung + '/' + tong + ' the doc dung (' + (100 * dung / tong).toFixed(1) + '%), sai dap an ' + sai + ', so the la ' + la +
    ', ' + (ms / soLan).toFixed(1) + ' ms/khung (max ' + msMax.toFixed(1) + ')');
  return { tong, dung, sai, la };
}

// require() tu script khac: chi lay ham ve anh, khong chay kiem thu nhan dien
if (require.main !== module) { module.exports = { M, rnd, anhMoi, veNen, veThe, veTay, lamMo, ra8, lopHoc }; return; }
console.log('\nNhan dien tren anh tong hop:');
// 1) tung the don: co ma 16..220 px, moi goc xoay
(function () {
  let tong = 0, dung = 0;
  const co = [16, 18, 20, 24, 30, 40, 60, 90, 140, 220];
  for (const c of co) {
    let d1 = 0;
    for (let g = 0; g < 360; g += 15) {
      const W = Math.max(400, Math.ceil(c * 2.4 / 4) * 4), H = W * 3 / 4, A = anhMoi(W, H);
      veNen(A, 10);
      const t = veThe(A, 1 + (g / 15) % 60, W / 2, H / 2, c, g + (rnd() - 0.5) * 6, { x: (rnd() - 0.5) * 0.3, y: (rnd() - 0.5) * 0.3 }, 200, 30);
      lamMo(A, c < 30 ? 1 : 0);
      const kq = M.phatHien(ra8(A, 4), W, H, {});
      tong++;
      if (kq.some(r => r.id === 1 + (g / 15) % 60 && r.dap === t.dap)) { dung++; d1++; }
    }
    if (d1 < 24) console.log('  ma ' + c + ' px: ' + d1 + '/24');
  }
  console.log('The don (ma 16–220 px, 24 goc xoay, nghieng): ' + dung + '/' + tong);
  kiem(dung >= tong - 4, 'the don doc thieu'); // ma 16 px = 2.3 px/o la gioi han duoi, cho phep hut vai the
})();
const r1 = chay('Lop 30 the, 960x540, ma 22–44 px (3–6 m)', 960, 540, 6, 30, 22, 44, {});
kiem(r1.sai === 0 && r1.la === 0 && r1.dung >= r1.tong * 0.98, 'lop 30 the 960');
const r2 = chay('Lop 45 the, 1280x720, ma 22–44 px', 1280, 720, 4, 45, 22, 44, {});
kiem(r2.sai === 0 && r2.la === 0 && r2.dung >= r2.tong * 0.98, 'lop 45 the 1280');
const r3 = chay('Lop 40 the, 960x540, ma 18–30 px (rat xa), mo + nhieu manh', 960, 540, 4, 40, 18, 30, { nhieu: 8, mo: 1 });
kiem(r3.sai === 0 && r3.la === 0, 'lop xa: co the sai / la');
const r4 = chay('Lop 30 the, 960x540, nghieng manh 0.5, xoay lech 35°', 960, 540, 4, 30, 26, 48, { nghieng: 0.5, lech: 35 });
kiem(r4.sai === 0 && r4.la === 0, 'lop nghieng: co the sai / la');

// 2) bao dong gia: nen roi khong co the
(function () {
  let la = 0, ms = 0;
  const N = 40;
  for (let l = 0; l < N; l++) {
    const A = anhMoi(960, 540);
    veNen(A, 160);
    lamMo(A, l % 2);
    const t0 = process.hrtime.bigint();
    la += M.phatHien(ra8(A, 6), 960, 540, {}).length;
    ms += Number(process.hrtime.bigint() - t0) / 1e6;
  }
  console.log('Bao dong gia: ' + la + ' the tren ' + N + ' khung nen roi (moi khung 160 vat, co hinh vuong ma sai), ' + (ms / N).toFixed(1) + ' ms/khung');
  kiem(la === 0, 'co bao dong gia');
})();

console.log(loi ? '\n' + loi + ' kiem tra KHONG dat' : '\nTat ca kiem tra dat');
process.exit(loi ? 1 : 0);
