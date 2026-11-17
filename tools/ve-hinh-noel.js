/* Ve hinh SVG mua Noel cho nong trai (2026-11-17): cay thong Noel 2x2 cua tung nong trai, cay thong lon cua
   thi tran va cac mon trang tri (ngoi sao, no, qua chau, day den, chuong, keo gay, hop qua, bong tuyet).
   Phong cach chung: mau phang, vien dam #2b1d3a, bong sang nhe.
   Chay: node tools/ve-hinh-noel.js  (ghi de vao public/images/farm) */
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'public', 'images', 'farm');
const V = '#2b1d3a';
const svg = (noi, vb) => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' + (vb || '0 0 100 100') + '">\n' + noi + '\n</svg>\n';
const g = (s, w) => '<g stroke="' + V + '" stroke-width="' + (w || 3) + '" stroke-linejoin="round" stroke-linecap="round">' + s + '</g>';
const r1 = (n) => Math.round(n * 10) / 10;

// 1 tang la thong: dinh (cx, top), day rong 2*hw o do cao bot, mep duoi luon song (n vom)
function tang(cx, top, bot, hw, n) {
  const h = bot - top;
  let d = 'M' + cx + ' ' + top + 'Q' + r1(cx - hw * 0.42) + ' ' + r1(top + h * 0.5) + ' ' + r1(cx - hw) + ' ' + bot;
  const b = (2 * hw) / n;
  for (let i = 0; i < n; i++) {
    const x1 = cx - hw + b * (i + 1), xm = x1 - b / 2;
    d += 'Q' + r1(xm) + ' ' + r1(bot + h * 0.16) + ' ' + r1(x1) + ' ' + (i === n - 1 ? bot : r1(bot - h * 0.03));
  }
  return d + 'Q' + r1(cx + hw * 0.42) + ' ' + r1(top + h * 0.5) + ' ' + cx + ' ' + top + 'Z';
}
// phan bong toi ben phai cua tang (cat theo vien tang)
function bongPhai(cx, top, bot, hw) {
  const h = bot - top;
  return 'M' + (cx + 1) + ' ' + top + 'Q' + r1(cx + hw * 0.3) + ' ' + r1(top + h * 0.55) + ' ' + r1(cx + hw * 0.18) + ' ' + r1(bot + h * 0.3) +
    'H' + r1(cx + hw + 8) + 'V' + (top - 2) + 'Z';
}
// tuyet dong tren mep duoi ben trai moi tang (vai vet trang mem)
function tuyetMep(cx, bot, hw, n, h) {
  const b = (2 * hw) / n;
  let s = '';
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    const xm = cx - hw + b * (i + 0.5);
    s += '<ellipse cx="' + r1(xm) + '" cy="' + r1(bot + h * 0.05) + '" rx="' + r1(b * 0.34) + '" ry="' + r1(Math.max(1.3, h * 0.06)) + '"/>';
  }
  return s;
}
function cayThong(T, opt) {
  const cx = opt.cx;
  let defs = '', than = '', bong = '', vien = '', sang = '', tuyet = '';
  T.forEach((t, i) => {
    const d = tang(cx, t[0], t[1], t[2], t[3]);
    defs += '<clipPath id="' + opt.id + i + '"><path d="' + d + '"/></clipPath>';
    than += '<path d="' + d + '" fill="' + opt.xanh[i % opt.xanh.length] + '" stroke="none"/>' +
      '<path d="' + bongPhai(cx, t[0], t[1], t[2]) + '" fill="' + opt.toi + '" clip-path="url(#' + opt.id + i + ')" stroke="none"/>' +
      // vet sang ben trai
      '<path d="M' + r1(cx - t[2] * 0.28) + ' ' + r1(t[0] + (t[1] - t[0]) * 0.42) + 'Q' + r1(cx - t[2] * 0.5) + ' ' + r1(t[0] + (t[1] - t[0]) * 0.7) + ' ' + r1(cx - t[2] * 0.66) + ' ' + r1(t[0] + (t[1] - t[0]) * 0.86) + '" fill="none" stroke="' + opt.sang + '" stroke-width="' + opt.ws + '" stroke-linecap="round" clip-path="url(#' + opt.id + i + ')"/>' +
      '<path d="' + d + '" fill="none" stroke="' + V + '" stroke-width="' + opt.wv + '" stroke-linejoin="round"/>' +
      '<g fill="#fff" opacity=".92">' + tuyetMep(cx, t[1], t[2], t[3], t[1] - t[0]) + '</g>';
  });
  return { defs, than };
}

const H = {};

// ---- Cay thong Noel 2x2 cua nong trai (100x100). Ngon cay o (50,13) de ngoi sao gan len ----
(function () {
  const T = [[50, 79, 39, 6], [37, 65, 31, 5], [24, 51, 22, 4], [13, 35, 14, 3]];
  const c = cayThong(T, { cx: 50, id: 'ntl', xanh: ['#2f9e5c', '#34a863', '#3bb26b', '#43bb73'], toi: '#1f7a45', sang: '#86dca2', ws: 2.6, wv: 3 });
  H['noel-thong'] = svg('<defs>' + c.defs + '</defs>' +
    '<ellipse cx="50" cy="93" rx="36" ry="5" fill="#000" opacity=".15"/>' +
    g('<rect x="44.5" y="74" width="11" height="12" rx="2" fill="#8d5a3b"/>') +
    c.than +
    // chau gom do vien vang
    g('<path d="M36 84H64L61 96H39Z" fill="#d84339"/><rect x="33" y="80.5" width="34" height="6" rx="2.5" fill="#ffc93c"/>', 2.6) +
    '<path d="M41 89.5L42 94" stroke="#ff8a7a" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M37 83.5H62" stroke="#fff3c4" stroke-width="1.6" stroke-linecap="round" opacity=".8"/>');
})();

// ---- Cay thong lon cua thi tran (200x240): 6 tang, chan de go phu tuyet ----
(function () {
  const T = [[86, 196, 88, 8], [68, 168, 74, 7], [52, 140, 60, 6], [38, 112, 47, 5], [26, 86, 34, 4], [16, 58, 22, 3]];
  const c = cayThong(T, { cx: 100, id: 'ntt', xanh: ['#2a9457', '#2f9e5c', '#34a863', '#3bb26b', '#43bb73', '#4cc27b'], toi: '#1d6f40', sang: '#8fe2a9', ws: 3.2, wv: 3.5 });
  H['noel-cay-lon'] = svg('<defs>' + c.defs + '</defs>' +
    // nen tuyet duoi goc
    '<ellipse cx="100" cy="226" rx="94" ry="11" fill="#e8f3ff" stroke="' + V + '" stroke-width="3"/>' +
    '<ellipse cx="72" cy="223" rx="26" ry="3.5" fill="#fff"/><ellipse cx="138" cy="227" rx="18" ry="3" fill="#fff"/>' +
    g('<rect x="90" y="190" width="20" height="22" rx="3" fill="#8d5a3b"/><path d="M104 194V208" stroke="#6d4029"/>', 3.5) +
    c.than +
    // chan de go
    g('<path d="M70 206H130L124 226H76Z" fill="#b5703f"/><rect x="66" y="201" width="68" height="9" rx="3" fill="#d58f52"/>' +
      '<path d="M82 212V222M100 212V224M118 212V222" stroke-width="2.4"/>', 3.2) +
    '<path d="M72 203.5H124" stroke="#f6c98f" stroke-width="2" stroke-linecap="round"/>', '0 0 200 240');
})();

// ---- Cac mon trang tri (icon 100x100, cung dung de treo len cay) ----
const sao5 = (cx, cy, R, r) => {
  let d = '';
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? r : R;
    d += (i ? 'L' : 'M') + r1(cx + rr * Math.cos(a)) + ' ' + r1(cy + rr * Math.sin(a));
  }
  return d + 'Z';
};
H['noel-sao'] = svg(g('<path d="' + sao5(50, 53, 42, 18) + '" fill="#ffc93c"/>', 3.5) +
  '<path d="M50 11L50 35 L67 41Z" fill="#ffe28a" opacity=".9"/><path d="' + sao5(50, 53, 42, 18) + '" fill="none" stroke="' + V + '" stroke-width="3.5" stroke-linejoin="round"/>' +
  '<path d="M50 53L76 88L58 64Z" fill="#e09b12" opacity=".55"/><circle cx="40" cy="44" r="4" fill="#fff" opacity=".85"/>');
H['noel-no'] = svg(g(
  '<path d="M46 50Q24 26 14 36Q8 48 22 58Q34 62 46 54Z" fill="#e53935"/>' +
  '<path d="M54 50Q76 26 86 36Q92 48 78 58Q66 62 54 54Z" fill="#e53935"/>' +
  '<path d="M45 55L30 86L40 82L46 90L52 58Z" fill="#c62828"/><path d="M55 55L70 86L60 82L54 90L48 58Z" fill="#c62828"/>' +
  '<rect x="42" y="44" width="16" height="16" rx="5" fill="#ef5350"/>', 3.2) +
  '<path d="M22 40Q28 36 36 44" stroke="#ff9e94" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M64 44Q72 36 78 40" stroke="#ff9e94" stroke-width="3" fill="none" stroke-linecap="round"/>');
function chau(mau, toi, sang, soc) {
  return svg('<ellipse cx="50" cy="93" rx="22" ry="3.5" fill="#000" opacity=".12"/>' + g(
    '<path d="M50 6Q58 6 58 14" fill="none" stroke-width="3"/>' +
    '<circle cx="50" cy="58" r="33" fill="' + mau + '"/>' +
    '<rect x="41" y="17" width="18" height="10" rx="3" fill="#ffc93c"/>', 3.2) +
    '<path d="M50 91A33 33 0 0 0 81 47Q76 78 50 91Z" fill="' + toi + '" opacity=".6"/>' +
    (soc ? '<path d="M18 52Q50 64 82 52" stroke="' + soc + '" stroke-width="5" fill="none"/><path d="M19 66Q50 78 81 66" stroke="' + soc + '" stroke-width="3" fill="none" opacity=".8"/>' : '') +
    '<circle cx="50" cy="58" r="33" fill="none" stroke="' + V + '" stroke-width="3.2"/>' +
    '<ellipse cx="37" cy="44" rx="8" ry="11" transform="rotate(35 37 44)" fill="' + sang + '" opacity=".75"/><circle cx="33" cy="64" r="3" fill="#fff" opacity=".6"/>');
}
H['noel-chau'] = chau('#e53935', '#a01e1e', '#ffb3aa', '#ffc93c');
H['noel-chau-2'] = chau('#3f7fe0', '#1f4fa8', '#bcd7ff', '#fff');
H['noel-chau-3'] = chau('#ffc93c', '#d08a00', '#fff3c4', '#e53935');
H['noel-chau-4'] = chau('#9c5bd6', '#6a2fa0', '#e2c6ff', '#ffc93c');
H['noel-den'] = svg('<path d="M4 30Q27 56 50 34Q73 12 96 40" fill="none" stroke="' + V + '" stroke-width="3" stroke-linecap="round"/>' +
  [[16, 44, '#ff5252'], [38, 44, '#ffd740'], [62, 25, '#40c4ff'], [84, 30, '#69f0ae']].map((b) => g(
    '<rect x="' + (b[0] - 4) + '" y="' + (b[1] - 4) + '" width="8" height="7" rx="1.5" fill="#6d6d6d"/>' +
    '<path d="M' + b[0] + ' ' + (b[1] + 3) + 'Q' + (b[0] - 9) + ' ' + (b[1] + 16) + ' ' + b[0] + ' ' + (b[1] + 26) + 'Q' + (b[0] + 9) + ' ' + (b[1] + 16) + ' ' + b[0] + ' ' + (b[1] + 3) + 'Z" fill="' + b[2] + '"/>', 2.6) +
    '<ellipse cx="' + (b[0] - 2.5) + '" cy="' + (b[1] + 13) + '" rx="2" ry="4" fill="#fff" opacity=".7"/>').join(''));
H['noel-chuong'] = svg('<ellipse cx="50" cy="92" rx="26" ry="4" fill="#000" opacity=".12"/>' + g(
  '<path d="M50 18Q74 18 76 50Q77 68 86 76H14Q23 68 24 50Q26 18 50 18Z" fill="#ffc93c"/>' +
  '<circle cx="50" cy="83" r="8" fill="#e09b12"/><rect x="45" y="10" width="10" height="9" rx="3" fill="#e09b12"/>' +
  '<path d="M36 22Q22 8 18 18Q16 28 36 26Z" fill="#e53935"/><path d="M64 22Q78 8 82 18Q84 28 64 26Z" fill="#e53935"/><circle cx="50" cy="23" r="5" fill="#ef5350"/>', 3.2) +
  '<path d="M33 40Q32 56 28 66" stroke="#fff3c4" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M62 30Q70 46 70 66Q74 72 80 75" stroke="#e09b12" stroke-width="5" fill="none" opacity=".55"/>');
H['noel-keo'] = svg('<defs><mask id="kg"><path d="M58 92V36Q58 16 42 16Q28 16 28 30" fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round"/></mask></defs>' +
  '<path d="M58 92V36Q58 16 42 16Q28 16 28 30" fill="none" stroke="' + V + '" stroke-width="20" stroke-linecap="round"/>' +
  '<path d="M58 92V36Q58 16 42 16Q28 16 28 30" fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round"/>' +
  '<g mask="url(#kg)"><g fill="#e53935" transform="rotate(-30 50 50)">' + [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => '<rect x="-20" y="' + (i * 13 - 10) + '" width="140" height="6"/>').join('') + '</g></g>' +
  '<path d="M53 40V86" stroke="#fff" stroke-width="2.5" opacity=".6" stroke-linecap="round"/>');
H['noel-qua'] = svg('<ellipse cx="50" cy="91" rx="38" ry="4.5" fill="#000" opacity=".14"/>' + g(
  '<rect x="16" y="44" width="68" height="44" rx="4" fill="#e53935"/><rect x="12" y="32" width="76" height="16" rx="4" fill="#ef5350"/>' +
  '<rect x="44" y="32" width="12" height="56" fill="#ffc93c"/>' +
  '<path d="M50 32Q30 6 22 18Q18 30 50 32Z" fill="#ffc93c"/><path d="M50 32Q70 6 78 18Q82 30 50 32Z" fill="#ffc93c"/>', 3.2) +
  '<path d="M20 52V82" stroke="#ff9e94" stroke-width="3" stroke-linecap="round" opacity=".8"/><path d="M60 50H82V84H60Z" fill="#a01e1e" opacity=".35"/>');
H['noel-qua-2'] = svg('<ellipse cx="50" cy="91" rx="34" ry="4.5" fill="#000" opacity=".14"/>' + g(
  '<rect x="20" y="40" width="60" height="48" rx="4" fill="#2f9e5c"/><rect x="16" y="30" width="68" height="14" rx="4" fill="#43bb73"/>' +
  '<rect x="44" y="30" width="12" height="58" fill="#fff8ec"/>' +
  '<path d="M50 30Q34 8 26 18Q22 28 50 30Z" fill="#e53935"/><path d="M50 30Q66 8 74 18Q78 28 50 30Z" fill="#e53935"/>', 3.2) +
  '<path d="M60 46H80V84H60Z" fill="#1f7a45" opacity=".4"/>');
H['noel-qua-3'] = svg('<ellipse cx="50" cy="91" rx="32" ry="4.5" fill="#000" opacity=".14"/>' + g(
  '<rect x="22" y="36" width="56" height="52" rx="4" fill="#3f7fe0"/><rect x="18" y="26" width="64" height="14" rx="4" fill="#64a0ff"/>' +
  '<rect x="44" y="26" width="12" height="62" fill="#fff"/><rect x="22" y="56" width="56" height="10" fill="#fff"/>' +
  '<path d="M50 26Q36 6 28 14Q24 24 50 26Z" fill="#fff"/><path d="M50 26Q64 6 72 14Q76 24 50 26Z" fill="#fff"/>', 3.2) +
  '<path d="M60 42H78V84H60Z" fill="#1f4fa8" opacity=".35"/>');
H['noel-tuyet'] = svg(g([0, 60, 120].map((a) => '<g transform="rotate(' + a + ' 50 50)"><path d="M50 10V90"/><path d="M50 24L40 14M50 24L60 14M50 76L40 86M50 76L60 86"/></g>').join(''), 9) +
  '<g stroke="#bfe3ff" stroke-width="4.5" stroke-linecap="round" fill="none">' + [0, 60, 120].map((a) => '<g transform="rotate(' + a + ' 50 50)"><path d="M50 10V90"/><path d="M50 24L40 14M50 24L60 14M50 76L40 86M50 76L60 86"/></g>').join('') + '</g>' +
  '<circle cx="50" cy="50" r="8" fill="#fff" stroke="' + V + '" stroke-width="3"/>');
// mu ong gia Noel nho (doi tren chip cap)
H['noel-mu'] = svg(g('<path d="M18 70Q22 30 52 20Q74 16 84 40Q74 32 66 36Q76 52 78 70Z" fill="#e53935"/>' +
  '<rect x="12" y="64" width="72" height="16" rx="8" fill="#fff"/><circle cx="86" cy="42" r="9" fill="#fff"/>', 3.2) +
  '<path d="M30 58Q36 38 52 30" stroke="#ff9e94" stroke-width="4" fill="none" stroke-linecap="round"/>');

Object.keys(H).forEach((k) => fs.writeFileSync(path.join(DIR, k + '.svg'), H[k]));
console.log('Da ve ' + Object.keys(H).length + ' hinh: ' + Object.keys(H).join(', '));
