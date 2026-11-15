/* Ve hinh SVG phang (vien dam #2b1d3a) cho nong trai CAP CAO 31–100 (2026-11-15):
   cay moi (ruong + nong san), vat nuoi moi (3 trang thai + san pham), nha may moi, hang che bien moi,
   do trang tri, cong trinh moc cap, bien danh hieu theo bac, nha kinh, dinh dong chuyen gia.
   Chay: node tools/ve-hinh-cap-cao.js  (ghi vao public/images/farm, khong ghi de file da co tru khi --de) */
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'public', 'images', 'farm');
const DE = process.argv.includes('--de');
const V = '#2b1d3a';
const svg = (noi) => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n' + noi + '\n</svg>\n';
const bong = (rx, cy) => '<ellipse cx="50" cy="' + (cy || 87) + '" rx="' + (rx || 32) + '" ry="5" fill="#000" opacity=".15"/>';
const g = (s, w) => '<g stroke="' + V + '" stroke-width="' + (w || 3) + '" stroke-linejoin="round" stroke-linecap="round">' + s + '</g>';
const chu = (x, y, s, size, mau, extra) => '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="' + size + '" font-weight="900" fill="' + (mau || V) + '" font-family="Noto Serif SC, serif"' + (extra || '') + '>' + s + '</text>';
const sang = (d, w, o) => '<path d="' + d + '" fill="none" stroke="#fff" stroke-width="' + (w || 2.5) + '" opacity="' + (o || 0.55) + '" stroke-linecap="round"/>';
const ruong = '<rect x="11" y="47" width="78" height="38" rx="13" fill="#8a5430" stroke="' + V + '" stroke-width="3"/><rect x="12.5" y="48.5" width="75" height="28" rx="11" fill="#a8693f"/>' +
  '<path d="M20 59H80M19 68H81" stroke="#8a5430" stroke-width="3" stroke-linecap="round"/>';
const ruongNuoc = '<rect x="11" y="47" width="78" height="38" rx="13" fill="#8a5430" stroke="' + V + '" stroke-width="3"/><rect x="15" y="50" width="70" height="26" rx="10" fill="#4fc3f7"/>' +
  '<path d="M22 58q4 -2 8 0t8 0M54 66q4 -2 8 0t8 0" fill="none" stroke="#b3e5fc" stroke-width="1.6" stroke-linecap="round"/>';
const banCay = (defs, id, sx) => svg('<defs>' + defs + '</defs>' + bong(40) + (sx || ruong) + '<use href="#' + id + '" x="28" y="66"/><use href="#' + id + '" x="72" y="66"/><use href="#' + id + '" x="50" y="76"/>');
// hoa 5 canh (mai, mau don nho)
const hoa5 = (cx, cy, r, mau, nhuy) => {
  let s = '';
  for (let i = 0; i < 5; i++) { const a = (i * 72 - 90) * Math.PI / 180; s += '<circle cx="' + (cx + Math.cos(a) * r).toFixed(1) + '" cy="' + (cy + Math.sin(a) * r).toFixed(1) + '" r="' + (r * 0.85).toFixed(1) + '" fill="' + mau + '"/>'; }
  return '<g stroke="' + V + '" stroke-width="1.4">' + s + '</g><circle cx="' + cx + '" cy="' + cy + '" r="' + (r * 0.55).toFixed(1) + '" fill="' + (nhuy || '#ffd54f') + '" stroke="' + V + '" stroke-width="1.2"/>';
};
// mat vat nuoi: mo / buon / vui
function mat(x1, x2, y, kieu, r) {
  r = r || 3.6;
  if (kieu === 'vui') return '<path d="M' + (x1 - r) + ' ' + (y + 1) + 'Q' + x1 + ' ' + (y - r - 1) + ' ' + (x1 + r) + ' ' + (y + 1) + 'M' + (x2 - r) + ' ' + (y + 1) + 'Q' + x2 + ' ' + (y - r - 1) + ' ' + (x2 + r) + ' ' + (y + 1) + '" fill="none" stroke="' + V + '" stroke-width="2.4" stroke-linecap="round"/>';
  if (kieu === 'buon') return '<path d="M' + (x1 - r) + ' ' + y + 'A' + r + ' ' + r + ' 0 0 0 ' + (x1 + r) + ' ' + y + 'ZM' + (x2 - r) + ' ' + y + 'A' + r + ' ' + r + ' 0 0 0 ' + (x2 + r) + ' ' + y + 'Z" fill="' + V + '"/>' +
    '<path d="M' + (x1 - r - 1) + ' ' + (y - r - 1) + 'L' + (x1 + r) + ' ' + (y - r + 1) + 'M' + (x2 + r + 1) + ' ' + (y - r - 1) + 'L' + (x2 - r) + ' ' + (y - r + 1) + '" stroke="' + V + '" stroke-width="2" stroke-linecap="round"/>';
  return '<circle cx="' + x1 + '" cy="' + y + '" r="' + r + '" fill="' + V + '"/><circle cx="' + x2 + '" cy="' + y + '" r="' + r + '" fill="' + V + '"/>' +
    '<circle cx="' + (x1 + 1.2) + '" cy="' + (y - 1.2) + '" r="1.2" fill="#fff"/><circle cx="' + (x2 + 1.2) + '" cy="' + (y - 1.2) + '" r="1.2" fill="#fff"/>';
}
const batRong = '<g transform="translate(4 70)">' + g('<path d="M0 6Q2 16 12 16Q22 16 24 6Z" fill="#a1887f"/><ellipse cx="12" cy="6" rx="12" ry="3.5" fill="#d7ccc8"/>', 2.2) + '</g>';
const H = {};

/* ======================= CAY MOI ======================= */
// 茶 che: bui tra tron, la non tren ngon
const chaCay = '<g id="cha"><g stroke="' + V + '" stroke-width="2.4" stroke-linejoin="round"><ellipse cx="0" cy="-11" rx="15" ry="12" fill="#2f7d3c"/>' +
  '<path d="M-12-12Q-14-22-6-24Q-2-30 4-26Q12-28 13-18Q16-10 8-8Z" fill="#4caf50"/></g>' +
  '<g stroke="' + V + '" stroke-width="1.6" stroke-linejoin="round"><path d="M-3-24Q-6-32-1-36Q2-30-3-24Z" fill="#a5e07f"/><path d="M4-25Q8-32 12-31Q10-25 4-25Z" fill="#8bc34a"/></g>' +
  '<path d="M-8-16Q-4-18 0-16M2-14Q6-16 9-13" fill="none" stroke="#7cc456" stroke-width="1.4" stroke-linecap="round"/></g>';
H.cha = banCay(chaCay, 'cha');
H['sp-cha'] = svg(bong(30) + g('<ellipse cx="50" cy="70" rx="34" ry="12" fill="#d7b377"/><ellipse cx="50" cy="67" rx="30" ry="9" fill="#e9cf98"/>') +
  '<path d="M24 67Q50 74 76 67" fill="none" stroke="#b8935a" stroke-width="1.6"/>' +
  g('<path d="M50 64V34" stroke-width="3"/><path d="M50 50Q30 50 24 36Q40 30 50 50Z" fill="#4caf50"/><path d="M50 44Q70 46 76 30Q60 24 50 44Z" fill="#66bb6a"/><path d="M50 36Q44 22 50 12Q56 22 50 36Z" fill="#a5e07f"/>', 2.6) +
  '<path d="M48 48Q38 44 30 38M52 42Q62 38 70 32" fill="none" stroke="#2e7d32" stroke-width="1.4"/>' + sang('M47 30Q48 22 50 16', 1.6));
// 糯米 gao nep: bong lua trang ngà
const nuomiCay = '<g id="nm"><g fill="none" stroke-linecap="round"><path d="M0 0Q-2-18 6-30M0 0Q1-16-7-28M0 0V-24" stroke="' + V + '" stroke-width="4.5"/>' +
  '<path d="M0 0Q-2-18 6-30M0 0Q1-16-7-28M0 0V-24" stroke="#9ccc65" stroke-width="2"/></g>' +
  '<g stroke="' + V + '" stroke-width="1.4" fill="#fbf6e4"><ellipse cx="7" cy="-31" rx="3" ry="4.4" transform="rotate(30 7 -31)"/><ellipse cx="4" cy="-25" rx="2.6" ry="3.8" transform="rotate(30 4 -25)"/>' +
  '<ellipse cx="-8" cy="-29" rx="3" ry="4.4" transform="rotate(-30 -8 -29)"/><ellipse cx="-5" cy="-23" rx="2.6" ry="3.8" transform="rotate(-30 -5 -23)"/><ellipse cx="0" cy="-26" rx="2.8" ry="4"/></g></g>';
H.nuomi = banCay(nuomiCay, 'nm');
H['sp-nuomi'] = svg(bong(30) + g('<path d="M16 54Q18 80 50 82Q82 80 84 54Z" fill="#6d9bc3"/><ellipse cx="50" cy="54" rx="34" ry="8" fill="#8fb8dc"/>') +
  g('<path d="M22 54Q24 34 50 32Q76 34 78 54Q50 60 22 54Z" fill="#fbf6e4"/>', 2.6) +
  '<g fill="#e6dcc0"><ellipse cx="38" cy="44" rx="2" ry="3.4" transform="rotate(-30 38 44)"/><ellipse cx="52" cy="40" rx="2" ry="3.4"/><ellipse cx="62" cy="47" rx="2" ry="3.4" transform="rotate(30 62 47)"/><ellipse cx="46" cy="50" rx="2" ry="3.4" transform="rotate(60 46 50)"/></g>' +
  '<path d="M26 68Q50 76 74 68" fill="none" stroke="#fff" stroke-width="2.4" opacity=".5" stroke-linecap="round"/>' + chu(50, 78, '糯', 10, '#fff'));
// 竹笋 mang tre
const sunCay = '<g id="sun"><g stroke="' + V + '" stroke-width="2.4" stroke-linejoin="round"><path d="M-9 0Q-10-14 0-32Q10-14 9 0Z" fill="#c8a26b"/>' +
  '<path d="M-9 0Q-6-10 3-14Q8-6 9 0Z" fill="#a67c45"/><path d="M-8-12Q-2-20 5-22" fill="none" stroke-width="1.8"/></g>' +
  '<path d="M0-32Q-3-38 1-42" fill="none" stroke="' + V + '" stroke-width="4" stroke-linecap="round"/><path d="M0-32Q-3-38 1-42" fill="none" stroke="#9ccc65" stroke-width="1.8" stroke-linecap="round"/>' +
  '<path d="M-5-8L-2-24" stroke="#e8cb94" stroke-width="1.6" stroke-linecap="round"/></g>';
H.zhusun = banCay(sunCay, 'sun');
H['sp-zhusun'] = svg(bong(26) + g('<path d="M30 84Q26 50 50 12Q74 50 70 84Q50 90 30 84Z" fill="#c8a26b"/><path d="M30 84Q36 60 58 52Q70 66 70 84Q50 90 30 84Z" fill="#a67c45"/>' +
  '<path d="M33 66Q46 48 62 42M36 48Q46 34 56 28" fill="none" stroke-width="2.2"/>') +
  '<path d="M50 12Q46 4 52 0" fill="none" stroke="' + V + '" stroke-width="5" stroke-linecap="round"/><path d="M50 12Q46 4 52 0" fill="none" stroke="#9ccc65" stroke-width="2.4" stroke-linecap="round"/>' + sang('M38 74Q38 50 48 30', 3));
// 荔枝 vai thieu
const qVai = (x, y, r) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#e53935" stroke="' + V + '" stroke-width="1.6"/><circle cx="' + (x - r * 0.35).toFixed(1) + '" cy="' + (y - r * 0.35).toFixed(1) + '" r="' + (r * 0.3).toFixed(1) + '" fill="#ff8a80"/>';
const vaiCay = '<g id="vai"><path d="M0 0V-14" stroke="' + V + '" stroke-width="5" stroke-linecap="round"/><path d="M0 0V-14" stroke="#8d6e63" stroke-width="2.4" stroke-linecap="round"/>' +
  '<g stroke="' + V + '" stroke-width="2.4"><ellipse cx="0" cy="-24" rx="15" ry="12" fill="#2f7d3c"/><ellipse cx="-3" cy="-27" rx="10" ry="7" fill="#43a047"/></g>' + qVai(-7, -19, 3.4) + qVai(6, -21, 3.4) + qVai(0, -15, 3.2) + qVai(9, -29, 3) + '</g>';
H.lizhi = banCay(vaiCay, 'vai');
H['sp-lizhi'] = svg(bong(30) + g('<path d="M50 20Q46 30 40 40M50 20Q56 32 64 38M50 20V12" fill="none" stroke-width="3"/><path d="M50 14Q62 6 70 12Q60 18 50 14Z" fill="#4caf50" stroke-width="2.4"/>') +
  '<g stroke="' + V + '" stroke-width="2.6"><circle cx="36" cy="54" r="14" fill="#e53935"/><circle cx="66" cy="52" r="14" fill="#d32f2f"/></g>' +
  '<g fill="#b71c1c"><circle cx="32" cy="50" r="1.6"/><circle cx="40" cy="56" r="1.6"/><circle cx="34" cy="60" r="1.6"/><circle cx="62" cy="48" r="1.6"/><circle cx="70" cy="56" r="1.6"/><circle cx="66" cy="60" r="1.6"/></g>' +
  g('<path d="M38 70Q40 62 52 62Q64 62 64 74Q62 86 50 86Q38 86 38 70Z" fill="#fdfbf2"/><path d="M38 72Q34 78 40 84Q36 74 38 72Z" fill="#e53935" stroke-width="2"/>', 2.6) +
  sang('M30 48Q32 44 36 43', 2) + sang('M44 68Q46 64 50 64', 2, 0.8));
// 莲藕 cu sen (ruong nuoc + la sen + hoa)
const laSen = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" stroke="' + V + '" stroke-width="2" stroke-linejoin="round"><path d="M0 0L10 -2.5A10.5 6.5 0 1 0 10 2.5Z" fill="#66bb6a"/><path d="M0 0L-6 -3M0 0L-7 2" fill="none" stroke="#3f8f48" stroke-width="1.2"/></g>';
const hoaSen = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" stroke="' + V + '" stroke-width="1.8" stroke-linejoin="round"><path d="M0 0Q-11 1 -13 -5Q-5 -6 0 0ZM0 0Q11 1 13 -5Q5 -6 0 0Z" fill="#f48fb1"/><path d="M0 0Q-8 -5 -8 -13Q-1 -9 0 0ZM0 0Q8 -5 8 -13Q1 -9 0 0Z" fill="#f8bbd0"/><path d="M0 0Q-4.5 -9 0 -17Q4.5 -9 0 0Z" fill="#fde0ea"/></g>';
H.lianou = svg(bong(40) + ruongNuoc + laSen(28, 62, 1) + laSen(70, 70, 0.9) + laSen(52, 56, 0.8) +
  '<path d="M44 66Q42 54 46 44" fill="none" stroke="' + V + '" stroke-width="4.4" stroke-linecap="round"/><path d="M44 66Q42 54 46 44" fill="none" stroke="#3f8f48" stroke-width="1.8" stroke-linecap="round"/>' + hoaSen(46, 46, 1.1) +
  '<path d="M74 64Q76 50 72 42" fill="none" stroke="' + V + '" stroke-width="4.4" stroke-linecap="round"/><path d="M74 64Q76 50 72 42" fill="none" stroke="#3f8f48" stroke-width="1.8" stroke-linecap="round"/>' + hoaSen(72, 44, 0.8));
H['sp-lianou'] = svg(bong(36) + g('<path d="M14 58Q12 44 26 44H40Q46 44 46 56Q46 68 38 68H26Q14 68 14 58Z" fill="#e8c9a0"/>' +
  '<path d="M44 52Q46 40 58 40H72Q86 42 86 56Q86 70 72 70H58Q46 68 44 52Z" fill="#f0d6b0"/>' +
  '<ellipse cx="78" cy="55" rx="8" ry="13" fill="#fbecd2"/>') +
  '<g fill="#c9a77a" stroke="' + V + '" stroke-width="1.2"><circle cx="78" cy="49" r="2"/><circle cx="82" cy="55" r="2"/><circle cx="78" cy="61" r="2"/><circle cx="74" cy="55" r="2"/><circle cx="78" cy="55" r="1.4"/></g>' +
  '<path d="M45 46V64" stroke="#b08a5c" stroke-width="2"/>' + sang('M20 52Q24 48 34 48', 2.4) + sang('M52 46Q58 44 66 44', 2.4) +
  g('<path d="M20 70Q22 80 30 80" fill="none" stroke-width="2"/><path d="M60 72Q64 82 70 82" fill="none" stroke-width="2"/>', 2));
// 红枣 tao do
const qTao = (x, y) => '<ellipse cx="' + x + '" cy="' + y + '" rx="2.8" ry="3.8" fill="#c62828" stroke="' + V + '" stroke-width="1.4"/>';
const taoCay = '<g id="tao"><path d="M0 0Q-2-10 0-16" stroke="' + V + '" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M0 0Q-2-10 0-16" stroke="#795548" stroke-width="2.4" stroke-linecap="round" fill="none"/>' +
  '<g stroke="' + V + '" stroke-width="2.2"><ellipse cx="0" cy="-26" rx="14" ry="11" fill="#558b2f"/><ellipse cx="2" cy="-29" rx="9" ry="6" fill="#7cb342"/></g>' + qTao(-8, -20) + qTao(5, -18) + qTao(9, -27) + qTao(-3, -31) + qTao(-1, -23) + '</g>';
H.hongzao = banCay(taoCay, 'tao');
H['sp-hongzao'] = svg(bong(32) + g('<ellipse cx="50" cy="72" rx="36" ry="11" fill="#f5e6c8"/><ellipse cx="50" cy="69" rx="30" ry="7" fill="#fff8e7"/>') +
  '<g stroke="' + V + '" stroke-width="2.4">' + [[36, 60, -20], [50, 58, 10], [64, 61, 30], [43, 48, -40], [58, 48, 25], [50, 38, 0]].map((p) =>
    '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="8" ry="11" fill="#c62828" transform="rotate(' + p[2] + ' ' + p[0] + ' ' + p[1] + ')"/>').join('') + '</g>' +
  '<g fill="#ef5350"><ellipse cx="34" cy="56" rx="2" ry="3"/><ellipse cx="48" cy="54" rx="2" ry="3"/><ellipse cx="62" cy="57" rx="2" ry="3"/><ellipse cx="48" cy="35" rx="2" ry="3"/></g>' +
  '<path d="M50 28V22" stroke="' + V + '" stroke-width="2.4" stroke-linecap="round"/>');
// 牡丹 hoa mau don
const mauDon = (x, y, s, mau, mau2) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')" stroke="' + V + '" stroke-width="1.6" stroke-linejoin="round">' +
  '<path d="M-12 2Q-16-8-8-10Q-6-16 0-14Q6-16 8-10Q16-8 12 2Q6 8 0 6Q-6 8-12 2Z" fill="' + mau + '"/>' +
  '<path d="M-7-2Q-9-9-3-9Q0-13 3-9Q9-9 7-2Q3 2 0 1Q-3 2-7-2Z" fill="' + mau2 + '"/><circle cx="0" cy="-4" r="2.4" fill="#ffd54f" stroke-width="1.2"/></g>';
const donCay = '<g id="don"><g stroke="' + V + '" stroke-width="2.2" stroke-linejoin="round"><path d="M0 0Q-14-4-16-14Q-6-14 0 0Z" fill="#43a047"/><path d="M0 0Q14-4 16-14Q6-14 0 0Z" fill="#558b2f"/>' +
  '<path d="M0 0Q-8-12-4-20Q4-12 0 0Z" fill="#66bb6a"/></g>' + mauDon(0, -26, 1, '#ec407a', '#f8bbd0') + '</g>';
H.mudan = banCay(donCay, 'don');
H['sp-mudan'] = svg(bong(28) + g('<path d="M50 84Q48 70 50 56" fill="none" stroke-width="3"/><path d="M50 74Q30 74 24 60Q40 56 50 74Z" fill="#43a047"/><path d="M50 70Q70 70 76 56Q60 52 50 70Z" fill="#558b2f"/>', 2.6) +
  mauDon(50, 40, 2.4, '#ec407a', '#f8bbd0') + sang('M34 34Q36 28 42 26', 2.2));

/* ======================= VAT NUOI MOI ======================= */
// 桑蚕 tam: con tam trang tren la dau
function tam(kieu) {
  const la = kieu === 'doi'
    ? g('<path d="M20 78Q40 70 62 78" fill="none" stroke-width="3"/><path d="M40 74Q36 62 44 58Q48 66 40 74Z" fill="#9ccc65" stroke-width="2"/>', 2.6)
    : g('<path d="M10 74Q30 46 66 50Q92 54 90 74Q60 90 10 74Z" fill="#5aa845"/><path d="M14 72Q50 64 86 70" fill="none" stroke="#2e7d32" stroke-width="2"/>', 2.6) +
      '<path d="M30 70L36 60M48 68L54 56M66 68L70 58" stroke="#2e7d32" stroke-width="1.6" stroke-linecap="round"/>';
  const than = '<g stroke="' + V + '" stroke-width="2.6">' + [[70, 62, 9], [58, 60, 10], [46, 59, 10.5], [34, 58, 11]].map((p) => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="#fbf8f0"/>').join('') +
    '<circle cx="24" cy="54" r="12" fill="#fffdf8"/></g>' +
    '<path d="M58 51V69M46 50V68" stroke="#e6dccf" stroke-width="1.6"/><g fill="' + V + '"><circle cx="56" cy="70" r="1.5"/><circle cx="46" cy="70" r="1.5"/><circle cx="66" cy="70" r="1.5"/></g>' +
    '<path d="M16 44Q14 38 18 36M30 43Q32 37 28 35" fill="none" stroke="' + V + '" stroke-width="2" stroke-linecap="round"/>' +
    mat(19, 29, 53, kieu === 'doi' ? 'buon' : kieu === 'xong' ? 'vui' : 'mo', 2.6) +
    '<ellipse cx="16" cy="59" rx="2.6" ry="1.6" fill="#ff8fa3" opacity=".85"/><ellipse cx="32" cy="59" rx="2.6" ry="1.6" fill="#ff8fa3" opacity=".85"/>' +
    (kieu === 'doi' ? '<path d="M21 61Q24 59 27 61" fill="none" stroke="' + V + '" stroke-width="1.8" stroke-linecap="round"/>' : '<path d="M21 60Q24 63 27 60" fill="none" stroke="' + V + '" stroke-width="1.8" stroke-linecap="round"/>');
  const ken = kieu === 'xong' ? '<g transform="translate(66 68) scale(.38)">' + kenHinh + '</g>' : '';
  return svg(bong(40, 86) + la + (kieu === 'doi' ? batRong : '') + than + ken);
}
const kenHinh = g('<ellipse cx="34" cy="52" rx="18" ry="26" fill="#fffef6" transform="rotate(-20 34 52)"/><ellipse cx="66" cy="54" rx="18" ry="26" fill="#fff8e1" transform="rotate(18 66 54)"/>', 3.2) +
  '<path d="M24 38Q34 52 30 70M58 36Q70 50 66 72" fill="none" stroke="#e8dcc0" stroke-width="2.4"/>';
H.can = tam('mo'); H['can-doi'] = tam('doi'); H['can-xong'] = tam('xong');
H['sp-canjian'] = svg(bong(32) + g('<path d="M14 78Q50 70 86 78" fill="none" stroke="#c8a26b" stroke-width="5"/>', 2) + '<g transform="translate(0 6)">' + kenHinh + '</g>' +
  g('<ellipse cx="50" cy="40" rx="12" ry="17" fill="#fffef6"/>', 2.8) + '<path d="M44 30Q52 40 48 54" fill="none" stroke="#e8dcc0" stroke-width="2"/>' + sang('M26 46Q28 40 32 38', 2));
// 牦牛 bo Tay Tang
function yak(kieu) {
  const than = g('<path d="M30 46Q36 30 58 32Q82 30 88 48Q92 60 86 70L84 80H76L74 72H46L44 80H36L34 70Q24 62 30 46Z" fill="#5d4037"/>' +
    '<path d="M34 66L38 74L42 68L46 76L50 68L56 76L60 68L66 76L70 68L76 76L80 68L86 72" fill="none" stroke="#3e2723" stroke-width="2.4"/>' +
    '<path d="M50 34Q58 26 70 30" fill="none" stroke="#3e2723" stroke-width="2"/>', 2.8);
  const dau = g('<path d="M10 44Q8 30 22 28Q36 28 36 42Q36 58 24 60Q12 60 10 44Z" fill="#6d4c41"/><ellipse cx="22" cy="54" rx="9" ry="6" fill="#bcaaa4"/>' +
    '<path d="M12 30Q2 24 4 14Q12 22 16 26Z" fill="#f5f0e1"/><path d="M32 30Q42 24 40 14Q32 22 28 26Z" fill="#f5f0e1"/>' +
    '<path d="M14 32Q22 26 32 32" fill="#8d6e63" stroke-width="2"/>', 2.6) +
    '<g fill="' + V + '"><ellipse cx="19" cy="54" rx="1.4" ry="1"/><ellipse cx="25" cy="54" rx="1.4" ry="1"/></g>' +
    mat(16, 28, 43, kieu === 'doi' ? 'buon' : kieu === 'xong' ? 'vui' : 'mo', 3) +
    '<ellipse cx="12" cy="50" rx="2.6" ry="1.6" fill="#ff8fa3" opacity=".7"/><ellipse cx="32" cy="50" rx="2.6" ry="1.6" fill="#ff8fa3" opacity=".7"/>';
  const duoi = g('<path d="M88 50Q96 56 94 66" fill="none" stroke-width="2.4"/><path d="M94 64L98 72L90 70Z" fill="#3e2723" stroke-width="2"/>', 2.4);
  const sua = kieu === 'xong' ? '<g transform="translate(70 56) scale(.36)">' + binhSua('#e0f2f1', '牦') + '</g>' : '';
  return svg(bong(40, 86) + duoi + than + dau + (kieu === 'doi' ? batRong.replace('translate(4 70)', 'translate(66 66)') : '') + sua);
}
function binhSua(mau, c) {
  return g('<path d="M38 14H62V28Q74 36 74 50V84Q50 92 26 84V50Q26 36 38 28Z" fill="#fafafa"/><rect x="36" y="8" width="28" height="10" rx="3" fill="#26a69a"/>' +
    '<rect x="30" y="52" width="40" height="24" rx="5" fill="' + mau + '"/>', 3.2) + chu(50, 71, c, 18, '#00796b') +
    '<path d="M32 40Q30 56 32 80" stroke="#fff" stroke-width="3" opacity=".6" fill="none" stroke-linecap="round"/>';
}
H.maoniu = yak('mo'); H['maoniu-doi'] = yak('doi'); H['maoniu-xong'] = yak('xong');
H['sp-maoniunai'] = svg(bong(24) + binhSua('#e0f2f1', '牦') + '<path d="M40 60L46 54L50 58L54 52L60 60Z" fill="#80cbc4" stroke="#00796b" stroke-width="1.2" opacity=".0"/>');
// 孔雀 chim cong
const matCong = (x, y, s) => '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><ellipse rx="5" ry="6" fill="#ffd54f" stroke="' + V + '" stroke-width="1.4"/><ellipse rx="3.4" ry="4.2" fill="#26a69a"/><ellipse rx="1.8" ry="2.4" fill="#1a237e"/></g>';
function cong(kieu) {
  let duoi = '';
  if (kieu === 'doi') {
    duoi = g('<path d="M58 62Q80 70 96 84Q78 86 54 74Z" fill="#2e7d32"/>', 2.4) + matCong(84, 80, 0.8) + matCong(74, 74, 0.7);
  } else {
    duoi = g('<path d="M58 66Q20 50 26 20Q50 0 74 6Q100 20 92 56Q80 70 58 66Z" fill="#2e7d32"/><path d="M58 64Q34 50 38 26Q54 12 70 16Q88 26 82 54Z" fill="#43a047"/>', 2.6) +
      [[34, 30], [44, 18], [58, 12], [72, 14], [84, 24], [88, 40], [30, 44], [70, 30], [50, 30], [62, 44], [78, 48]].map((p) => matCong(p[0], p[1], 0.85)).join('');
  }
  const than = g('<path d="M44 84L46 72M56 84L54 72" fill="none" stroke="#8d6e63" stroke-width="3"/>', 2) +
    g('<path d="M36 70Q34 56 46 54Q60 54 62 66Q60 78 48 78Q38 78 36 70Z" fill="#1e88e5"/>' +
      '<path d="M44 56Q40 44 42 32Q44 24 50 26Q54 30 52 38Q50 48 52 56Z" fill="#1565c0"/>', 2.6) +
    '<path d="M44 24L42 16M48 24L48 14M52 25L56 17" stroke="' + V + '" stroke-width="1.6" stroke-linecap="round"/><g fill="#1e88e5" stroke="' + V + '" stroke-width="1.2"><circle cx="42" cy="15" r="2"/><circle cx="48" cy="13" r="2"/><circle cx="56" cy="16" r="2"/></g>' +
    g('<path d="M42 32L34 34L42 37Z" fill="#ffb300" stroke-width="1.8"/>', 1.8) +
    (kieu === 'xong' ? '<path d="M44 30Q46 27 48 30" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>' : kieu === 'doi' ? '<path d="M44 31H48" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M43 27L48 28.5" stroke="' + V + '" stroke-width="1.4"/>' :
      '<circle cx="46" cy="30" r="2.6" fill="#fff"/><circle cx="46" cy="30" r="1.5" fill="' + V + '"/>') +
    '<path d="M44 60Q50 64 56 60" fill="none" stroke="#90caf9" stroke-width="1.6" stroke-linecap="round"/>';
  const long = kieu === 'xong' ? '<g transform="translate(70 52) scale(.36) rotate(20 50 50)">' + longCong + '</g>' : '';
  return svg(bong(38, 86) + duoi + (kieu === 'doi' ? batRong : '') + than + long);
}
const longCong = g('<path d="M50 96Q48 60 50 20" fill="none" stroke-width="3.4"/><path d="M50 82Q26 60 34 30Q42 8 50 6Q58 8 66 30Q74 60 50 82Z" fill="#2e7d32"/>' +
  '<path d="M50 74Q34 56 40 34Q46 18 50 16Q54 18 60 34Q66 56 50 74Z" fill="#43a047"/>', 3) +
  matCong(50, 30, 2.2) + '<path d="M50 40V90" stroke="#a5d6a7" stroke-width="2"/>';
H.kongque = cong('mo'); H['kongque-doi'] = cong('doi'); H['kongque-xong'] = cong('xong');
H['sp-kongqueyu'] = svg(bong(18) + '<g transform="rotate(16 50 50)">' + longCong + '</g>');

/* ======================= NHA MAY MOI (2x2) ======================= */
const maiCong = (x1, x2, y, mau, cao) => '<path d="M' + (x1 - 6) + ' ' + y + 'Q' + (x1 + 4) + ' ' + (y - 2) + ' ' + (x1 + 8) + ' ' + (y - cao) + 'H' + (x2 - 8) + 'Q' + (x2 - 4) + ' ' + (y - 2) + ' ' + (x2 + 6) + ' ' + y + 'Z" fill="' + mau + '"/>';
const bien = (x, y, c, nen, mauChu) => g('<rect x="' + (x - 9) + '" y="' + (y - 9) + '" width="18" height="18" rx="2" fill="' + (nen || '#c62828') + '"/>', 2.4) + chu(x, y + 5, c, 13, mauChu || '#ffd54f');
H['xg-cha'] = svg(bong(40) + g('<rect x="16" y="46" width="68" height="38" rx="2" fill="#d7b377"/>' + maiCong(16, 84, 48, '#2e7d32', 18) + '<path d="M22 30H78" stroke-width="2"/>' +
  '<rect x="40" y="60" width="20" height="24" rx="2" fill="#8d6e63"/><rect x="22" y="56" width="12" height="12" fill="#fff3cf"/><rect x="66" y="56" width="12" height="12" fill="#fff3cf"/>') +
  '<path d="M28 56V68M22 62H34M72 56V68M66 62H78" stroke="' + V + '" stroke-width="1.6"/>' + bien(50, 38, '茶', '#c62828') +
  g('<path d="M84 78Q96 70 92 58Q86 64 84 78Z" fill="#66bb6a" stroke-width="2"/>', 2) + '<g fill="#fff" opacity=".9"><circle cx="62" cy="18" r="4"/><circle cx="68" cy="12" r="3"/><circle cx="74" cy="8" r="2.4"/></g>');
H['xg-si'] = svg(bong(40) + g('<rect x="14" y="46" width="62" height="38" rx="2" fill="#ffe0b2"/>' + maiCong(14, 76, 48, '#c62828', 16) +
  '<rect x="34" y="60" width="18" height="24" rx="2" fill="#8d6e63"/><rect x="20" y="56" width="10" height="12" fill="#fff8e1"/><rect x="58" y="56" width="12" height="12" fill="#fff8e1"/>') +
  bien(45, 39, '丝', '#6a1b9a') + g('<circle cx="84" cy="64" r="12" fill="#a1887f"/><circle cx="84" cy="64" r="4" fill="#5d4037"/><path d="M84 52V76M72 64H96M76 56L92 72M92 56L76 72" stroke-width="1.6"/>', 2.4) +
  g('<path d="M58 70H76V84H58Z" fill="#e91e63" stroke-width="2"/><path d="M58 76H76" stroke="#ffd54f" stroke-width="2"/>', 2));
H['xg-gao'] = svg(bong(40) + g('<rect x="16" y="46" width="66" height="38" rx="2" fill="#fff3e0"/>' + maiCong(16, 82, 48, '#6d4c41', 16) +
  '<rect x="40" y="60" width="18" height="24" rx="2" fill="#a1887f"/><rect x="22" y="56" width="12" height="12" fill="#fffde7"/><rect x="64" y="56" width="12" height="12" fill="#fffde7"/>') +
  bien(49, 39, '糕', '#e65100') +
  g('<ellipse cx="88" cy="80" rx="10" ry="4" fill="#d7b377"/><rect x="78" y="70" width="20" height="10" fill="#e9cf98"/><ellipse cx="88" cy="70" rx="10" ry="4" fill="#d7b377"/><rect x="80" y="62" width="16" height="8" fill="#e9cf98"/><ellipse cx="88" cy="62" rx="8" ry="3" fill="#c8a26b"/>', 2.2) +
  '<g fill="#fff" opacity=".9"><circle cx="88" cy="54" r="3"/><circle cx="92" cy="48" r="2.4"/></g>' +
  g('<path d="M12 48V58" stroke-width="1.6"/><ellipse cx="12" cy="62" rx="5" ry="6" fill="#e53935" stroke-width="2"/>', 2));

/* ======================= HANG CHE BIEN MOI ======================= */
H['sp-chaye'] = svg(bong(26) + g('<rect x="28" y="26" width="44" height="58" rx="6" fill="#2e7d32"/><ellipse cx="50" cy="26" rx="22" ry="6" fill="#c62828"/><rect x="34" y="42" width="32" height="28" rx="4" fill="#fff8e1"/>', 3) +
  chu(50, 64, '茶', 20, '#2e7d32') + sang('M32 34Q30 56 32 78', 3));
H['sp-suyoucha'] = svg(bong(30) + g('<path d="M18 46Q20 78 50 80Q80 78 82 46Z" fill="#8d6e63"/><ellipse cx="50" cy="46" rx="32" ry="9" fill="#a1887f"/><ellipse cx="50" cy="46" rx="26" ry="6" fill="#e8d3a8"/>') +
  '<path d="M26 60Q50 68 74 60" fill="none" stroke="#5d4037" stroke-width="2"/><g fill="none" stroke="#bdbdbd" stroke-width="2.4" stroke-linecap="round"><path d="M40 36Q36 28 42 22"/><path d="M52 34Q48 24 54 18"/><path d="M62 36Q58 30 62 24"/></g>' +
  '<ellipse cx="44" cy="45" rx="6" ry="1.8" fill="#fff8e1"/>');
H['sp-huacha'] = svg(bong(26) + g('<path d="M28 34L72 34L68 84H32Z" fill="#fce4ec"/><path d="M28 34L36 22H64L72 34Z" fill="#f48fb1"/>', 3) + mauDon(50, 56, 1.3, '#ec407a', '#f8bbd0') + chu(50, 80, '花茶', 10, '#ad1457'));
H['sp-sichou'] = svg(bong(32) + g('<path d="M22 40H70V76H22Z" fill="#e53935"/><ellipse cx="22" cy="58" rx="8" ry="18" fill="#c62828"/><ellipse cx="70" cy="58" rx="8" ry="18" fill="#ef5350"/>' +
  '<path d="M70 70Q84 76 90 86H74Q70 80 66 76" fill="#e53935"/>', 2.8) + '<ellipse cx="70" cy="58" rx="3" ry="7" fill="#b71c1c"/>' +
  '<g fill="none" stroke="#ffd54f" stroke-width="1.8"><path d="M30 48Q36 44 42 48T54 48T66 48"/><path d="M30 60Q36 56 42 60T54 60T66 60"/></g>' + sang('M28 44H64', 2));
H['sp-sijin'] = svg(bong(30) + g('<path d="M16 40Q50 30 84 40L76 64Q50 56 24 64Z" fill="#42a5f5"/><path d="M24 64Q50 56 76 64L70 84Q50 78 30 84Z" fill="#1e88e5"/>', 2.8) +
  matCong(50, 46, 1.4) + '<path d="M24 64L18 74M30 84L26 92M70 84L74 92M76 64L82 74" stroke="' + V + '" stroke-width="1.6" stroke-linecap="round"/>');
H['sp-zaogao'] = svg(bong(32) + g('<path d="M18 50L50 36L82 50V74L50 88L18 74Z" fill="#c8874a"/><path d="M18 50L50 36L82 50L50 64Z" fill="#e3a868"/><path d="M50 64V88" stroke-width="2"/>', 2.8) +
  '<g stroke="' + V + '" stroke-width="1.8">' + [[36, 50], [50, 46], [64, 50], [50, 56]].map((p) => '<ellipse cx="' + p[0] + '" cy="' + p[1] + '" rx="5" ry="3.4" fill="#c62828"/>').join('') + '</g>');

/* ======================= TRANG TRI MOI ======================= */
H.meihua = svg(bong(28) + g('<path d="M50 86Q46 66 52 54Q44 44 34 40M52 54Q60 44 70 36M50 66Q38 62 30 54" fill="none" stroke-width="6"/>', 3) +
  '<path d="M50 86Q46 66 52 54Q44 44 34 40M52 54Q60 44 70 36M50 66Q38 62 30 54" fill="none" stroke="#5d4037" stroke-width="3" stroke-linecap="round"/>' +
  hoa5(34, 38, 4, '#e53935') + hoa5(70, 34, 4.4, '#e53935') + hoa5(30, 52, 3.6, '#ef5350') + hoa5(58, 44, 3.4, '#e53935') + hoa5(44, 46, 3, '#ff5252') + hoa5(62, 24, 3, '#ef5350') + hoa5(42, 30, 3, '#e53935') +
  g('<path d="M36 86H64L60 76H40Z" fill="#8d6e63" stroke-width="2.4"/>', 2.4));
H.jinlichi = svg('<ellipse cx="50" cy="82" rx="47" ry="8" fill="#000" opacity=".15"/>' + g('<ellipse cx="50" cy="57" rx="44" ry="27" fill="#8e95a1"/><ellipse cx="50" cy="53" rx="44" ry="26" fill="#c3c9d2"/><ellipse cx="50" cy="53" rx="34" ry="19" fill="#29b6f6"/>') +
  [[36, 50, 20, '#ff7043'], [60, 56, -160, '#fafafa'], [52, 44, 200, '#ffa726']].map((p) => '<g transform="translate(' + p[0] + ' ' + p[1] + ') rotate(' + p[2] + ')" stroke="' + V + '" stroke-width="1.6"><path d="M-9 0Q-4-5 4-4Q10-2 10 0Q10 2 4 4Q-4 5-9 0Z" fill="' + p[3] + '"/><path d="M-9 0L-14-4L-13 0L-14 4Z" fill="' + p[3] + '"/><circle cx="6" cy="-1" r=".9" fill="' + V + '" stroke="none"/></g>').join('') +
  '<circle cx="58" cy="50" r="2" fill="#e53935"/>' + laSen(70, 50, 0.7) + laSen(30, 60, 0.6) + '<path d="M40 64q3-2 6 0t6 0" fill="none" stroke="#b3e5fc" stroke-width="1.6" stroke-linecap="round"/>');
H.fengzheng = svg(bong(18) + g('<path d="M50 86V60" stroke-width="3"/><path d="M50 60Q40 40 30 24" fill="none" stroke-width="1.4" stroke-dasharray="3 3"/>', 2) +
  g('<path d="M30 24Q40 30 50 26T70 30T86 26" fill="none" stroke-width="7"/>', 3) + '<path d="M30 24Q40 30 50 26T70 30T86 26" fill="none" stroke="#ffd54f" stroke-width="3.6" stroke-linecap="round"/>' +
  '<g fill="#e53935" stroke="' + V + '" stroke-width="1.4"><circle cx="44" cy="28" r="3"/><circle cx="58" cy="27" r="3"/><circle cx="72" cy="30" r="3"/></g>' +
  g('<path d="M14 18Q22 10 32 16Q36 24 30 30Q20 32 14 26Z" fill="#e53935"/><path d="M16 14L12 6M26 12L28 4" fill="none" stroke-width="2"/>', 2.4) + mat(20, 27, 21, 'mo', 1.8) +
  g('<path d="M86 26L94 20L92 30Z" fill="#43a047" stroke-width="2"/>', 2) + g('<path d="M44 86H56" stroke-width="3"/>', 3));
H.fenghuang = svg(bong(30) + g('<path d="M30 86H70V76H30Z" fill="#9e9e9e"/><path d="M34 76H66V70H34Z" fill="#bdbdbd"/>', 2.6) +
  g('<path d="M50 70Q30 66 22 44Q14 26 26 16Q22 34 36 46Q30 30 40 22Q40 42 50 52Z" fill="#ffb300"/><path d="M50 70Q70 66 84 50Q92 40 88 24Q82 40 70 46Q78 30 70 20Q66 40 54 52Z" fill="#ffca28"/>', 2.6) +
  g('<path d="M44 70Q42 54 50 46Q58 54 56 70Z" fill="#ffd54f"/><path d="M50 46Q48 34 54 28Q60 30 58 36L64 36L58 40Q56 44 50 46Z" fill="#ffd54f"/>', 2.4) +
  '<circle cx="56" cy="32" r="1.4" fill="' + V + '"/><path d="M54 28Q52 20 58 16M55 28Q58 22 64 22" fill="none" stroke="' + V + '" stroke-width="1.6" stroke-linecap="round"/>' +
  sang('M28 30Q30 40 38 46', 1.8) + sang('M80 32Q78 40 70 46', 1.8));
H['nha-kinh'] = svg(bong(44) + g('<rect x="10" y="44" width="80" height="40" fill="#b3e5fc" fill-opacity=".75"/><path d="M10 44Q50 8 90 44Z" fill="#e1f5fe" fill-opacity=".85"/>') +
  '<g fill="#43a047" stroke="' + V + '" stroke-width="1.8"><ellipse cx="24" cy="76" rx="8" ry="6"/><ellipse cx="42" cy="74" rx="9" ry="8"/><ellipse cx="60" cy="76" rx="8" ry="6"/><ellipse cx="76" cy="74" rx="8" ry="8"/></g>' +
  '<g fill="#e53935" stroke="' + V + '" stroke-width="1.2"><circle cx="40" cy="70" r="2.2"/><circle cx="46" cy="74" r="2.2"/><circle cx="74" cy="70" r="2.2"/></g>' +
  g('<path d="M30 84V30M50 84V18M70 84V30M10 64H90M18 34L82 34" fill="none" stroke-width="2"/><rect x="44" y="64" width="12" height="20" fill="#fff" fill-opacity=".6" stroke-width="2"/>', 2.4) +
  sang('M16 50L24 40M34 48L46 30M58 30L66 42', 2.4, 0.8));
H['cg-ding'] = svg(bong(30) + g('<rect x="26" y="78" width="48" height="8" rx="2" fill="#9e9e9e"/><path d="M32 78L28 62M50 78V64M68 78L72 62" stroke-width="5"/>', 2.6) +
  '<path d="M32 78L28 62M50 78V64M68 78L72 62" stroke="#a1662f" stroke-width="2.4" stroke-linecap="round"/>' +
  g('<path d="M20 34H80Q80 66 50 68Q20 66 20 34Z" fill="#b87333"/><path d="M26 34V22H34V34M66 34V22H74V34" fill="none" stroke-width="3.4"/><rect x="18" y="30" width="64" height="8" rx="2" fill="#cd8a4a"/>', 2.8) +
  '<path d="M30 46H70M28 54H72" stroke="#7b4a1e" stroke-width="2"/>' + chu(50, 62, '鼎', 10, '#ffe082') + sang('M26 42Q28 54 34 60', 2.4));

/* ======================= CONG TRINH MOC CAP (2x2) ======================= */
H['lm-yuedongmen'] = svg(bong(46) + g('<rect x="6" y="30" width="88" height="54" fill="#f5f5f0"/><path d="M2 32H98L92 22H8Z" fill="#546e7a"/>') +
  g('<circle cx="50" cy="58" r="20" fill="#a5d6a7"/>', 3) + '<path d="M36 70Q44 56 50 64Q56 54 64 70" fill="#66bb6a" stroke="' + V + '" stroke-width="1.6"/><ellipse cx="50" cy="74" rx="14" ry="3" fill="#bcaaa4"/>' +
  hoa5(60, 52, 2.4, '#f48fb1') + '<path d="M8 22H92" stroke="#90a4ae" stroke-width="1.6"/><g stroke="' + V + '" stroke-width="1.2" fill="#b0bec5">' + [16, 30, 44, 58, 72, 86].map((x) => '<rect x="' + (x - 4) + '" y="24" width="8" height="6" rx="1"/>').join('') + '</g>' +
  g('<path d="M88 84V44M84 50H92M84 60H92" fill="none" stroke="#7cb342" stroke-width="3"/>', 2) + g('<path d="M88 44Q80 40 78 34Q86 36 88 44ZM88 44Q96 40 98 34Q90 36 88 44Z" fill="#9ccc65" stroke-width="1.6"/>', 1.6));
H['lm-jiuquqiao'] = svg('<ellipse cx="50" cy="84" rx="48" ry="8" fill="#000" opacity=".15"/>' + g('<ellipse cx="50" cy="60" rx="46" ry="26" fill="#4fc3f7"/>', 3) +
  '<path d="M16 64q4-2 8 0t8 0M66 74q4-2 8 0t8 0M70 48q4-2 8 0" fill="none" stroke="#b3e5fc" stroke-width="1.6" stroke-linecap="round"/>' +
  g('<path d="M4 74L30 66L22 54L56 46L48 36L96 30L96 38L56 44L64 54L30 62L38 74L8 82Z" fill="#eceff1"/>', 2.6) +
  g('<path d="M8 72L30 64M24 52L56 44M50 34L94 28" fill="none" stroke="#e53935" stroke-width="3"/>', 1.6) +
  '<g stroke="#e53935" stroke-width="2">' + [[12, 71], [20, 68], [30, 56], [42, 53], [54, 41], [66, 38], [78, 35], [90, 33]].map((p) => '<path d="M' + p[0] + ' ' + p[1] + 'V' + (p[1] - 6) + '"/>').join('') + '</g>' +
  laSen(78, 70, 0.8) + hoaSen(82, 66, 0.6) + laSen(20, 46, 0.6));
H['lm-tiantan'] = svg(bong(46) + g('<ellipse cx="50" cy="80" rx="44" ry="8" fill="#e0e0e0"/><path d="M6 80V74H94V80" fill="#f5f5f5"/><ellipse cx="50" cy="74" rx="44" ry="8" fill="#fafafa"/>' +
  '<ellipse cx="50" cy="68" rx="34" ry="6" fill="#f5f5f5"/><path d="M28 66V40H72V66Z" fill="#c62828"/><path d="M34 66V44M42 66V44M50 66V44M58 66V44M66 66V44" stroke-width="1.6"/>', 2.6) +
  g('<path d="M18 44Q50 30 82 44Q50 52 18 44Z" fill="#1565c0"/><path d="M26 32Q50 20 74 32Q50 40 26 32Z" fill="#1976d2"/><path d="M34 22Q50 8 66 22Q50 28 34 22Z" fill="#1e88e5"/>', 2.4) +
  g('<path d="M50 12V4" stroke-width="3"/><circle cx="50" cy="4" r="3" fill="#ffd54f" stroke-width="1.6"/>', 2) +
  '<path d="M24 44Q50 36 76 44M30 32Q50 26 70 32" fill="none" stroke="#ffd54f" stroke-width="1.8"/>');
H['lm-changcheng'] = svg('<ellipse cx="50" cy="86" rx="48" ry="6" fill="#000" opacity=".15"/>' + g('<path d="M0 88Q20 56 44 66Q66 46 100 56V88Z" fill="#7cb342"/>', 2.6) +
  g('<path d="M2 80L46 60L98 44V58L46 72L2 92Z" fill="#bcaaa4"/><path d="M2 80L46 60L98 44" fill="none"/>', 2.6) +
  '<g fill="#a1887f" stroke="' + V + '" stroke-width="1.8">' + [[6, 78], [14, 74], [22, 71], [30, 67], [38, 63], [54, 57], [62, 54], [70, 52], [78, 50], [86, 47], [94, 45]].map((p) => '<rect x="' + (p[0] - 3) + '" y="' + (p[1] - 6) + '" width="6" height="6"/>').join('') + '</g>' +
  g('<rect x="38" y="36" width="20" height="30" fill="#d7ccc8"/><path d="M36 36H60L56 28H40Z" fill="#8d6e63"/><path d="M44 66V56Q48 50 52 56V66" fill="#5d4037"/>', 2.4) +
  '<path d="M12 84L50 66M60 64L94 52" stroke="#8d6e63" stroke-width="1.4"/>' + chu(48, 50, '长城', 8, '#5d4037'));
const rong9 = (x, mau) => '<path d="M' + x + ' 62Q' + (x + 4) + ' 48 ' + (x + 8) + ' 56T' + (x + 16) + ' 50T' + (x + 22) + ' 58" fill="none" stroke="' + V + '" stroke-width="5" stroke-linecap="round"/>' +
  '<path d="M' + x + ' 62Q' + (x + 4) + ' 48 ' + (x + 8) + ' 56T' + (x + 16) + ' 50T' + (x + 22) + ' 58" fill="none" stroke="' + mau + '" stroke-width="2.6" stroke-linecap="round"/>' +
  '<circle cx="' + (x + 24) + '" cy="58" r="3" fill="' + mau + '" stroke="' + V + '" stroke-width="1.4"/>';
H['lm-jiulongbi'] = svg(bong(46) + g('<rect x="4" y="34" width="92" height="44" fill="#26a69a"/><rect x="2" y="76" width="96" height="8" fill="#bdbdbd"/><path d="M0 36H100L94 24H6Z" fill="#ffc107"/>', 2.6) +
  '<path d="M8 28H92" stroke="#ff8f00" stroke-width="1.6"/>' + rong9(8, '#ffd54f') + rong9(38, '#ef5350') + rong9(68, '#ffd54f') +
  '<g fill="#e3f2fd" opacity=".7"><circle cx="30" cy="42" r="3"/><circle cx="62" cy="68" r="3"/><circle cx="90" cy="44" r="2.4"/></g>' + '<path d="M4 72H96" stroke="#00897b" stroke-width="2"/>');
H['lm-huanghelou'] = svg(bong(40) + g('<rect x="22" y="76" width="56" height="10" fill="#e0e0e0"/><rect x="30" y="56" width="40" height="20" fill="#c62828"/><rect x="34" y="38" width="32" height="16" fill="#c62828"/><rect x="38" y="22" width="24" height="14" fill="#c62828"/>', 2.4) +
  g(maiCong(26, 74, 58, '#ffc107', 6) + maiCong(30, 70, 40, '#ffc107', 6) + maiCong(34, 66, 24, '#ffc107', 6) + '<path d="M40 18L50 6L60 18Z" fill="#ffb300"/>', 2.4) +
  '<path d="M38 60V74M46 60V74M54 60V74M62 60V74M42 42V52M50 42V52M58 42V52" stroke="#ffd54f" stroke-width="1.6"/>' +
  g('<path d="M78 16Q84 10 90 14Q86 16 84 20Z" fill="#fafafa" stroke-width="1.6"/><path d="M84 14L96 8M84 14L72 10" fill="none" stroke-width="1.6"/>', 1.6));
H['lm-xiongmao'] = svg(bong(46) + g('<path d="M4 84H96V70H4Z" fill="#9ccc65"/>', 2.4) + g('<path d="M8 80V60M8 64H30M30 80V60M70 80V60M70 64H92M92 80V60" fill="none" stroke="#a1887f" stroke-width="3"/>', 1.6) +
  g('<path d="M14 70V16M22 70V24M84 70V20" fill="none" stroke-width="5"/>', 3) + '<path d="M14 70V16M22 70V24M84 70V20" stroke="#7cb342" stroke-width="2.6" stroke-linecap="round"/>' +
  g('<path d="M14 30Q4 26 2 20Q10 22 14 30ZM22 36Q32 32 34 26Q26 28 22 36ZM84 32Q94 28 96 22Q88 24 84 32Z" fill="#9ccc65" stroke-width="1.6"/>', 1.6) +
  g('<ellipse cx="50" cy="66" rx="16" ry="14" fill="#fff8ec"/><circle cx="50" cy="44" r="13" fill="#fff8ec"/><circle cx="39" cy="34" r="5" fill="#3a3045"/><circle cx="61" cy="34" r="5" fill="#3a3045"/>' +
    '<ellipse cx="38" cy="68" rx="6" ry="9" fill="#3a3045"/><ellipse cx="62" cy="68" rx="6" ry="9" fill="#3a3045"/>', 2.6) +
  '<g fill="#3a3045"><ellipse cx="45" cy="44" rx="3.6" ry="4.6" transform="rotate(30 45 44)"/><ellipse cx="55" cy="44" rx="3.6" ry="4.6" transform="rotate(-30 55 44)"/></g><circle cx="45" cy="43" r="1.4" fill="#fff"/><circle cx="55" cy="43" r="1.4" fill="#fff"/>' +
  '<ellipse cx="50" cy="50" rx="2.4" ry="1.6" fill="' + V + '"/>' + g('<path d="M60 60L72 46" stroke-width="4"/>', 2) + '<path d="M60 60L72 46" stroke="#7cb342" stroke-width="2" stroke-linecap="round"/>' +
  g('<rect x="74" y="72" width="18" height="10" fill="#fff3cf" stroke-width="2"/>', 2) + chu(83, 80, '熊猫', 6, '#3a3045'));
H['lm-chuanqi'] = svg(bong(46) + g('<path d="M10 86H90V76H10Z" fill="#9e9e9e"/><path d="M20 76H80V66H20Z" fill="#bdbdbd"/><path d="M30 66H70V58H30Z" fill="#e0e0e0"/>', 2.6) +
  g('<path d="M42 58L46 16H54L58 58Z" fill="#ffca28"/><path d="M50 2L54 10L62 11L56 16L58 24L50 20L42 24L44 16L38 11L46 10Z" fill="#ffd54f"/>', 2.6) +
  '<path d="M48 22L46 54" stroke="#fff8e1" stroke-width="2" opacity=".8"/>' +
  g('<path d="M22 70Q50 62 78 70L74 76Q50 70 26 76Z" fill="#c62828" stroke-width="2"/>', 2) + chu(50, 73, '传奇', 6, '#ffd54f') +
  '<g fill="#fff59d"><path d="M16 30l2 4 4 1-4 1-2 4-2-4-4-1 4-1z"/><path d="M84 22l2 4 4 1-4 1-2 4-2-4-4-1 4-1z"/><path d="M80 52l1.4 3 3 .6-3 .6-1.4 3-1.4-3-3-.6 3-.6z"/></g>');

/* ======================= BIEN DANH HIEU (bac 1–6) ======================= */
const BAC_MAU = [null, ['#26a69a', '#e0f2f1'], ['#1e88e5', '#e3f2fd'], ['#8e24aa', '#f3e5f5'], ['#fb8c00', '#fff3e0'], ['#c62828', '#ffebee'], ['#ffb300', '#fff8e1']];
const BAC_CHU = [null, '种田能手', '农场主', '大农场主', '农业专家', '农业大师', '传奇农场主'];
BAC_CHU.forEach((t, i) => {
  if (!t) return;
  const [vien, nen] = BAC_MAU[i], sz = t.length >= 5 ? 9 : t.length === 4 ? 11 : 13;
  H['bac-' + i] = svg(bong(30) + g('<path d="M22 84V44M78 84V44" stroke-width="5"/>', 3) + '<path d="M22 84V44M78 84V44" stroke="#8d6e63" stroke-width="2.6" stroke-linecap="round"/>' +
    g('<rect x="10" y="22" width="80" height="30" rx="4" fill="' + vien + '"/><rect x="15" y="27" width="70" height="20" rx="2" fill="' + (i === 6 ? '#b71c1c' : '#5d2a1a') + '"/>', 2.8) +
    chu(50, 41.5, t, sz, i === 6 ? '#ffd54f' : '#ffe082') +
    g('<path d="M50 52V60" stroke-width="1.6"/><circle cx="50" cy="63" r="4" fill="' + vien + '" stroke-width="1.6"/><path d="M47 66L45 74M53 66L55 74" stroke="' + vien + '" stroke-width="2"/>', 1.6) +
    '<g fill="' + nen + '"><circle cx="14" cy="26" r="2"/><circle cx="86" cy="26" r="2"/><circle cx="14" cy="48" r="2"/><circle cx="86" cy="48" r="2"/></g>' +
    (i >= 5 ? '<g fill="#fff59d"><path d="M10 14l1.6 3.2 3.2.8-3.2.8L10 22l-1.6-3.2-3.2-.8 3.2-.8z"/><path d="M90 12l1.6 3.2 3.2.8-3.2.8L90 20l-1.6-3.2-3.2-.8 3.2-.8z"/></g>' : ''));
});

// ---- ghi file ----
let moi = 0, giu = 0;
Object.keys(H).forEach((k) => {
  const f = path.join(DIR, k + '.svg');
  if (fs.existsSync(f) && !DE) { giu++; return; }
  fs.writeFileSync(f, H[k]);
  moi++;
});
// mon le hoi da co hinh -> dung lai cho hang che bien cung ten (sp-<ma>)
[['mon-zongzi', 'sp-zongzi'], ['mon-yuebing', 'sp-yuebing'], ['mon-tangyuan', 'sp-tangyuan']].forEach(([a, b]) => {
  const src = path.join(DIR, a + '.svg'), dst = path.join(DIR, b + '.svg');
  if (fs.existsSync(src) && (!fs.existsSync(dst) || DE)) { fs.copyFileSync(src, dst); moi++; }
});
console.log('Da ve ' + moi + ' hinh moi, giu ' + giu + ' hinh da co (them --de de ve lai).');
