// Sinh bo ma cho "The tra loi" (kieu Plickers): moi the la luoi 5x5 o du lieu
// trong vien den. Chon 100 ma sao cho moi ma va ca 4 huong xoay cua no cach
// nhau it nhat KC bit — doc sai 2 o van nhan dung the va dung huong.
// Chay: node tools/tao-ma-the.js  -> in mang ma de dan vao public/js/the-ma.js
'use strict';

const SO_MA = 100;
const KC = 7;

// PRNG co dinh hat giong — chay lai ra cung bo ma
let hat = 20261025;
function ngauNhien() {
  hat = (hat * 1103515245 + 12345) >>> 0;
  return hat / 4294967296;
}

function xoay(m) {
  // xoay 90 do theo chieu kim dong ho: moi[r][c] = cu[4-c][r]
  let out = 0;
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
    const bit = (m >>> (24 - ((4 - c) * 5 + r))) & 1;
    out |= bit << (24 - (r * 5 + c));
  }
  return out >>> 0;
}
function dem(x) { let n = 0; while (x) { n += x & 1; x >>>= 1; } return n; }

const chon = [];
const daCo = [];
let thu = 0;
while (chon.length < SO_MA && thu < 5e6) {
  thu++;
  const m = Math.floor(ngauNhien() * (1 << 25)) >>> 0;
  const den = dem(m);
  if (den < 9 || den > 16) continue;
  const r = [m];
  for (let i = 1; i < 4; i++) r.push(xoay(r[i - 1]));
  let ok = true;
  for (let i = 0; i < 4 && ok; i++) for (let j = i + 1; j < 4; j++) if (dem(r[i] ^ r[j]) < KC) { ok = false; break; }
  for (let i = 0; i < 4 && ok; i++) for (const x of daCo) if (dem(r[i] ^ x) < KC) { ok = false; break; }
  if (!ok) continue;
  chon.push(m);
  daCo.push(...r);
}
if (chon.length < SO_MA) throw new Error('chi tim duoc ' + chon.length + ' ma');
console.log(JSON.stringify(chon));
console.error(chon.length + ' ma, khoang cach toi thieu ' + KC + ', thu ' + thu + ' lan');
