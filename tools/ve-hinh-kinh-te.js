/* Ve cac hinh SVG phang (vien dam #2b1d3a, mau am) cho phan kinh te nong trai 2026-11-13:
   hang che bien, nguyen lieu cho, cay quy, nha may, o "Thêm", do trang tri vung dat, icon vong quay.
   Chay: node tools/ve-hinh-kinh-te.js  (ghi vao public/images/farm, khong ghi de file da co tru khi --de) */
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'public', 'images', 'farm');
const DE = process.argv.includes('--de');
const V = '#2b1d3a';
const svg = (noi) => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">\n' + noi + '\n</svg>\n';
const bong = (rx) => '<ellipse cx="50" cy="87" rx="' + (rx || 32) + '" ry="5" fill="#000" opacity=".15"/>';
const g = (s) => '<g stroke="' + V + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">' + s + '</g>';

// bao tai (bot, duong, thuc an)
function bao(mau, nhan, chu, mauChu) {
  return svg(bong(30) + g(
    '<path d="M28 34Q24 60 26 80Q50 88 74 80Q76 60 72 34Z" fill="' + mau + '"/>' +
    '<path d="M28 34Q34 24 40 30Q50 20 60 30Q66 24 72 34Q50 40 28 34Z" fill="' + nhan + '"/>' +
    '<path d="M40 30Q50 36 60 30" fill="none" stroke-width="2.5"/>' +
    '<rect x="36" y="50" width="28" height="20" rx="4" fill="#fff8ec"/>') +
    '<text x="50" y="66" text-anchor="middle" font-size="15" font-weight="900" fill="' + (mauChu || V) + '" font-family="Noto Serif SC, serif">' + chu + '</text>' +
    '<path d="M32 44Q30 60 32 74" stroke="#fff" stroke-width="3" opacity=".5" fill="none" stroke-linecap="round"/>');
}
// coc nuoc ep
function coc(mau, qua) {
  return svg(bong(24) + g(
    '<path d="M32 30H68L64 82Q50 86 36 82Z" fill="#e3f2fd"/>' +
    '<path d="M34 42H66L63 80Q50 84 37 80Z" fill="' + mau + '"/>' +
    '<path d="M58 18L52 52" stroke-width="4"/><path d="M58 18L52 52" stroke="#ff8a80" stroke-width="2"/>' +
    qua) + '<path d="M38 46L40 74" stroke="#fff" stroke-width="3" opacity=".55" stroke-linecap="round"/>');
}
const H = {};
// ---- hang che bien ----
H['sp-mifen'] = bao('#fafafa', '#e0e0e0', '米', V);
H['sp-yumimian'] = bao('#ffe082', '#ffd54f', '玉', '#7a2e1f');
H['sp-mianbao'] = svg(bong(34) + g('<path d="M16 64Q14 40 34 36Q50 30 66 36Q86 40 84 64Q84 76 70 78H30Q16 76 16 64Z" fill="#e0a25a"/>' +
  '<path d="M20 60Q22 44 36 42Q50 38 64 42Q78 44 80 60" fill="#f2c27e" stroke-width="2.5"/>' +
  '<path d="M34 46L40 58M48 44L52 58M62 46L64 58" stroke-width="2.5"/>') + '<path d="M26 66Q50 72 74 66" stroke="#b9773a" stroke-width="3" fill="none" stroke-linecap="round"/>');
H['sp-binggan'] = svg(bong(34) + g('<rect x="18" y="40" width="64" height="40" rx="6" fill="#4fc3f7"/><path d="M18 52H82" stroke-width="2.5"/>' +
  '<circle cx="36" cy="38" r="13" fill="#e8b46a"/><circle cx="62" cy="36" r="13" fill="#d99a4e"/>') +
  '<g fill="' + V + '"><circle cx="32" cy="35" r="2"/><circle cx="39" cy="41" r="2"/><circle cx="58" cy="33" r="2"/><circle cx="66" cy="39" r="2"/></g>' +
  '<text x="50" y="73" text-anchor="middle" font-size="13" font-weight="900" fill="#fff" font-family="Noto Serif SC, serif">饼干</text>');
H['sp-dangao'] = svg(bong(32) + g('<path d="M20 52H80V78Q50 84 20 78Z" fill="#ffe0b2"/><path d="M20 52Q50 44 80 52Q80 60 50 62Q20 60 20 52Z" fill="#fff"/>' +
  '<path d="M20 66Q50 72 80 66" fill="none" stroke="#f48fb1" stroke-width="4"/>' +
  '<path d="M50 44V30" stroke-width="3"/><path d="M50 30Q46 24 50 18Q54 24 50 30Z" fill="#ffca28" stroke-width="2"/>') +
  '<g stroke="' + V + '" stroke-width="2"><circle cx="34" cy="50" r="4" fill="#e53935"/><circle cx="66" cy="50" r="4" fill="#e53935"/></g>');
H['sp-nailao'] = svg(bong(32) + g('<path d="M16 70L76 40L84 64L24 84Z" fill="#ffca28"/><path d="M16 70L76 40L70 30L14 58Z" fill="#ffe082"/><path d="M76 40L84 64" />') +
  '<g fill="#e0a800" stroke="' + V + '" stroke-width="2"><circle cx="40" cy="66" r="5"/><circle cx="60" cy="62" r="4"/><circle cx="52" cy="74" r="3"/><circle cx="36" cy="52" r="3"/></g>');
H['sp-suannai'] = svg(bong(24) + g('<path d="M30 36H70L64 82H36Z" fill="#fff"/><path d="M28 30H72V38H28Z" fill="#f48fb1"/>' +
  '<rect x="36" y="50" width="28" height="16" rx="4" fill="#fce4ec"/>') +
  '<text x="50" y="62" text-anchor="middle" font-size="10" font-weight="900" fill="#ad1457" font-family="Noto Serif SC, serif">酸奶</text>' +
  '<g stroke="' + V + '" stroke-width="2"><circle cx="44" cy="26" r="5" fill="#e53935"/><circle cx="56" cy="25" r="5" fill="#8e24aa"/></g>');
H['sp-caomeizhi'] = coc('#f06292', '<path d="M68 28Q78 22 80 32Q78 42 68 38Z" fill="#e53935" stroke-width="2.5"/><path d="M68 28L72 24L76 28" fill="#5cb83f" stroke-width="2"/>');
H['sp-fanqiezhi'] = coc('#e53935', '<circle cx="74" cy="32" r="8" fill="#ef4136" stroke-width="2.5"/><path d="M70 25L74 28L78 25" fill="#5cb83f" stroke-width="2"/>');
H['sp-putaozhi'] = svg(bong(22) + g('<path d="M42 16H58V30Q70 38 70 52V80Q50 86 30 80V52Q30 38 42 30Z" fill="#7e57c2"/><rect x="42" y="12" width="16" height="8" rx="2" fill="#ffd54f"/>' +
  '<rect x="34" y="52" width="32" height="18" rx="4" fill="#fff8ec"/>') +
  '<g fill="#7e57c2" stroke="' + V + '" stroke-width="1.5"><circle cx="44" cy="61" r="3.5"/><circle cx="51" cy="61" r="3.5"/><circle cx="47.5" cy="66" r="3.5"/><circle cx="58" cy="61" r="3.5"/></g>' +
  '<path d="M36 36Q34 46 36 74" stroke="#fff" stroke-width="3" opacity=".45" fill="none" stroke-linecap="round"/>');
// ---- nguyen lieu ----
H['sp-duong'] = bao('#e1f5fe', '#b3e5fc', '糖', '#0277bd');
H['sp-yan'] = svg(bong(22) + g('<path d="M34 40Q34 30 50 30Q66 30 66 40V80Q50 86 34 80Z" fill="#fafafa"/><path d="M34 40Q50 46 66 40Q66 30 50 30Q34 30 34 40Z" fill="#b0bec5"/>' +
  '<rect x="38" y="54" width="24" height="18" rx="4" fill="#e3f2fd"/>') +
  '<text x="50" y="68" text-anchor="middle" font-size="13" font-weight="900" fill="#1565c0" font-family="Noto Serif SC, serif">盐</text>' +
  '<g fill="' + V + '"><circle cx="45" cy="36" r="1.6"/><circle cx="50" cy="34" r="1.6"/><circle cx="55" cy="36" r="1.6"/></g>');
H['sp-siliao'] = bao('#aed581', '#8bc34a', '料', '#33691e');
// ---- cay quy ----
const nhansamCay = '<g id="ns"><path d="M0 0V-24" stroke="' + V + '" stroke-width="3"/>' +
  '<g stroke="' + V + '" stroke-width="2.2"><path d="M0-24Q-12-30-16-22Q-8-18 0-24Z" fill="#5aa845"/><path d="M0-24Q12-30 16-22Q8-18 0-24Z" fill="#6cbf4f"/><path d="M0-24Q-4-38 0-40Q4-38 0-24Z" fill="#7cc456"/></g>' +
  '<g stroke="' + V + '" stroke-width="1.6"><circle cx="-2" cy="-42" r="2.6" fill="#e53935"/><circle cx="2" cy="-44" r="2.6" fill="#e53935"/><circle cx="0" cy="-40" r="2.6" fill="#ef5350"/></g></g>';
const tuyetCay = '<g id="tl"><path d="M0 0V-18" stroke="' + V + '" stroke-width="3"/>' +
  '<g stroke="' + V + '" stroke-width="2.2"><path d="M0-18Q-14-22-16-14Q-6-12 0-18Z" fill="#81c784"/><path d="M0-18Q14-22 16-14Q6-12 0-18Z" fill="#66bb6a"/>' +
  '<path d="M0-20Q-12-30-6-40Q0-32 0-20Z" fill="#fff"/><path d="M0-20Q12-30 6-40Q0-32 0-20Z" fill="#fff"/><path d="M0-20Q-5-34 0-44Q5-34 0-20Z" fill="#f3e5f5"/></g>' +
  '<circle cx="0" cy="-26" r="3" fill="#ffd54f" stroke="' + V + '" stroke-width="1.6"/></g>';
const ruong = '<rect x="11" y="47" width="78" height="38" rx="13" fill="#8a5430" stroke="' + V + '" stroke-width="3"/><rect x="12.5" y="48.5" width="75" height="28" rx="11" fill="#a8693f"/>' +
  '<path d="M20 59H80M19 68H81" stroke="#8a5430" stroke-width="3" stroke-linecap="round"/>';
H.nhansam = svg('<defs>' + nhansamCay + '</defs>' + bong(40) + ruong + '<use href="#ns" x="28" y="66"/><use href="#ns" x="50" y="74"/><use href="#ns" x="72" y="66"/>');
H.tuyetlien = svg('<defs>' + tuyetCay + '</defs>' + bong(40) + ruong + '<use href="#tl" x="28" y="66"/><use href="#tl" x="50" y="74"/><use href="#tl" x="72" y="66"/>');
H['sp-nhansam'] = svg(bong(28) + g('<path d="M44 30Q38 44 42 58Q34 70 26 78M46 58Q48 72 44 84M52 56Q62 68 72 76M52 56Q58 44 54 30" fill="none" stroke-width="7"/>') +
  '<path d="M44 30Q38 44 42 58Q34 70 26 78M46 58Q48 72 44 84M52 56Q62 68 72 76M52 56Q58 44 54 30" fill="none" stroke="#f3d6a4" stroke-width="3.5" stroke-linecap="round"/>' +
  '<path d="M44 34Q50 26 54 34Q56 44 52 56Q46 58 42 56Q40 44 44 34Z" fill="#f0cf96" stroke="' + V + '" stroke-width="3"/>' +
  g('<path d="M49 28V14" stroke-width="3"/><path d="M49 16Q38 8 34 16Q42 20 49 16Z" fill="#5aa845" stroke-width="2.2"/><path d="M49 16Q60 8 64 16Q56 20 49 16Z" fill="#6cbf4f" stroke-width="2.2"/>') +
  '<g stroke="' + V + '" stroke-width="1.6"><circle cx="47" cy="10" r="3" fill="#e53935"/><circle cx="52" cy="9" r="3" fill="#e53935"/></g>');
H['sp-tuyetlien'] = svg(bong(28) + g('<path d="M50 80V56" stroke-width="4"/><path d="M50 74Q30 74 26 62Q40 60 50 70Z" fill="#81c784" stroke-width="2.5"/><path d="M50 74Q70 74 74 62Q60 60 50 70Z" fill="#66bb6a" stroke-width="2.5"/>' +
  '<path d="M50 58Q26 50 28 30Q42 34 50 58Z" fill="#fff"/><path d="M50 58Q74 50 72 30Q58 34 50 58Z" fill="#fff"/>' +
  '<path d="M50 58Q36 36 50 16Q64 36 50 58Z" fill="#f3e5f5"/>') + '<circle cx="50" cy="44" r="5" fill="#ffd54f" stroke="' + V + '" stroke-width="2"/>');
// ---- nha may ----
function nha(mau, mai, hinh) {
  return svg(bong(38) + g('<rect x="16" y="44" width="68" height="40" rx="3" fill="' + mau + '"/><path d="M10 46L50 18L90 46Z" fill="' + mai + '"/>' +
    '<rect x="42" y="60" width="16" height="24" rx="2" fill="#8d6e63"/>') + hinh);
}
H['xg-bot'] = nha('#ffe0b2', '#e5533d', g('<circle cx="70" cy="28" r="4" fill="#fff"/><path d="M70 28L70 6M70 28L90 30M70 28L68 50M70 28L50 26" stroke-width="3"/>' +
  '<path d="M70 6L76 8L72 26ZM90 30L88 36L72 30ZM68 50L62 48L68 30ZM50 26L52 20L68 28Z" fill="#fff8ec" stroke-width="2"/>') + '<rect x="22" y="56" width="14" height="12" rx="2" fill="#bbdefb" stroke="' + V + '" stroke-width="2.5"/>');
H['xg-banh'] = nha('#ffccbc', '#8d6e63', g('<rect x="64" y="12" width="10" height="20" fill="#bcaaa4"/>') + '<g fill="#fff" opacity=".9"><circle cx="70" cy="6" r="4"/><circle cx="76" cy="2" r="3"/></g>' +
  g('<path d="M20 58Q22 50 30 50Q38 50 38 58Q38 64 29 64Q20 64 20 58Z" fill="#e0a25a" stroke-width="2.5"/>') + '<path d="M24 54L28 60M30 52L33 60" stroke="' + V + '" stroke-width="2"/>');
H['xg-sua'] = nha('#e3f2fd', '#42a5f5', g('<path d="M66 52H78V58Q82 62 82 70V82H62V70Q62 62 66 58Z" fill="#cfd8dc" stroke-width="2.5"/><rect x="65" y="48" width="14" height="5" rx="2" fill="#90a4ae" stroke-width="2"/>') +
  '<g fill="#fff" stroke="' + V + '" stroke-width="2.5"><path d="M20 54h16v12H20Z"/><circle cx="25" cy="58" r="2" fill="' + V + '"/><circle cx="31" cy="62" r="2" fill="' + V + '"/></g>');
H['xg-ep'] = nha('#f3e5f5', '#ab47bc', '<g stroke="' + V + '" stroke-width="2.5"><circle cx="72" cy="66" r="7" fill="#e53935"/><circle cx="64" cy="74" r="6" fill="#7e57c2"/><circle cx="76" cy="77" r="6" fill="#ffb300"/>' +
  '<path d="M22 52H36L34 70H24Z" fill="#fff"/><path d="M23 58H35L34 70H24Z" fill="#f06292"/></g>');
// ---- o "Thêm" ----
H['tb-bando'] = svg(bong(36) + g('<path d="M14 26L36 18L64 26L86 18V74L64 82L36 74L14 82Z" fill="#fff3d6"/><path d="M36 18V74M64 26V82" stroke-width="2.5"/>') +
  '<path d="M22 66Q30 50 44 54T60 44T78 30" fill="none" stroke="#e5533d" stroke-width="3" stroke-dasharray="3 5" stroke-linecap="round"/>' +
  g('<circle cx="22" cy="66" r="5" fill="#7cc456" stroke-width="2.5"/><path d="M74 22L82 30M82 22L74 30" stroke="#e5533d" stroke-width="3.5"/>') +
  '<path d="M44 40Q50 36 54 42Q50 48 44 40Z" fill="#81d4fa" stroke="' + V + '" stroke-width="2"/>');
H['tb-cho'] = svg(bong(38) + g('<rect x="16" y="46" width="68" height="36" rx="4" fill="#fff8ec"/><path d="M12 30H88L84 46H16Z" fill="#ffd54f"/>' +
  '<path d="M28 30L26 46M44 30L44 46M60 30L62 46M76 30L78 46" stroke-width="2.5"/><path d="M12 30L20 18H80L88 30Z" fill="#e5533d"/>') +
  '<path d="M24 74L38 62L50 68L66 52L76 56" fill="none" stroke="#2e7d32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M70 50L77 51L75 58" fill="none" stroke="#2e7d32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>');
H['tb-xuong'] = svg(bong(38) + g('<path d="M12 84V44L30 54V44L48 54V44L66 54V24H82V84Z" fill="#b0bec5"/><rect x="20" y="62" width="10" height="10" fill="#ffd54f" stroke-width="2.5"/><rect x="38" y="62" width="10" height="10" fill="#ffd54f" stroke-width="2.5"/><rect x="56" y="62" width="10" height="10" fill="#ffd54f" stroke-width="2.5"/>') +
  '<g fill="#fff" stroke="' + V + '" stroke-width="2"><circle cx="74" cy="14" r="6"/><circle cx="84" cy="8" r="4"/></g>');
H['tb-tiem'] = svg(bong(38) + g('<rect x="16" y="40" width="68" height="44" rx="3" fill="#fff8ec"/><rect x="24" y="54" width="22" height="30" fill="#8d6e63"/><rect x="54" y="54" width="22" height="18" rx="2" fill="#bbdefb"/>' +
  '<path d="M12 40Q18 48 24 40Q30 48 36 40Q42 48 48 40Q54 48 60 40Q66 48 72 40Q78 48 84 40Q88 40 88 36L84 22H16L12 36Z" fill="#ff7aa2"/>') +
  '<path d="M24 22L20 40M40 22L38 40M56 22L56 40M72 22L74 40" stroke="#fff" stroke-width="3"/>' +
  '<rect x="34" y="8" width="32" height="14" rx="4" fill="#ffd54f" stroke="' + V + '" stroke-width="2.5"/><text x="50" y="19" text-anchor="middle" font-size="10" font-weight="900" fill="' + V + '" font-family="Noto Serif SC, serif">小店</text>');
H['tb-nhancong'] = svg(bong(30) + g('<path d="M24 84Q24 62 50 62Q76 62 76 84Z" fill="#64b5f6"/><circle cx="50" cy="44" r="16" fill="#ffd9b8"/>' +
  '<path d="M26 38Q50 22 74 38L70 42H30Z" fill="#ffd54f"/><path d="M34 36Q36 18 50 18Q64 18 66 36Z" fill="#ffca28"/>' +
  '<path d="M40 62L50 74L60 62" fill="#fff" stroke-width="2.5"/>') + '<g fill="' + V + '"><circle cx="44" cy="46" r="2.2"/><circle cx="56" cy="46" r="2.2"/></g>' +
  '<path d="M45 52Q50 56 55 52" stroke="' + V + '" stroke-width="2.4" fill="none" stroke-linecap="round"/>');
H['tb-xuatkhau'] = svg(bong(40) + g('<rect x="10" y="34" width="50" height="34" rx="4" fill="#ffb74d"/><path d="M60 44H78L88 56V68H60Z" fill="#4fc3f7"/><path d="M66 48H76L82 56H66Z" fill="#e1f5fe" stroke-width="2.2"/>' +
  '<circle cx="26" cy="72" r="8" fill="#6d4c41"/><circle cx="74" cy="72" r="8" fill="#6d4c41"/>') +
  '<g fill="#fff" stroke="' + V + '" stroke-width="2"><rect x="16" y="40" width="16" height="12" rx="2"/><rect x="36" y="40" width="16" height="12" rx="2"/></g>' +
  '<text x="35" y="64" text-anchor="middle" font-size="10" font-weight="900" fill="#7a2e1f" font-family="Noto Serif SC, serif">出口</text>');
H['tb-daugia'] = svg(bong(34) + g('<rect x="18" y="72" width="44" height="10" rx="3" fill="#a1887f"/>' +
  '<path d="M44 52L76 20" stroke-width="7"/><path d="M44 52L76 20" stroke="#c98a5a" stroke-width="3.5"/>' +
  '<rect x="24" y="30" width="34" height="18" rx="5" fill="#8d6e63" transform="rotate(-45 41 39)"/>') +
  '<path d="M66 70L82 66M70 78L86 80" stroke="#ffd54f" stroke-width="3.5" stroke-linecap="round"/>');
// ---- do trang tri vung dat ----
H['pl-lang'] = svg(bong(28) + g('<rect x="26" y="74" width="48" height="10" rx="3" fill="#a9afb9"/><path d="M32 74V30Q32 18 50 18Q68 18 68 30V74Z" fill="#cfd5dc"/>' +
  '<path d="M38 72V32Q38 26 50 26Q62 26 62 32V72" fill="none" stroke="#a9afb9" stroke-width="2"/>') +
  '<text x="50" y="46" text-anchor="middle" font-size="15" font-weight="900" fill="#7a2e1f">ā á</text><text x="50" y="64" text-anchor="middle" font-size="15" font-weight="900" fill="#7a2e1f">ǎ à</text>');
H['pl-thung'] = svg(bong(30) + g('<path d="M50 84V50" stroke-width="7"/><path d="M50 84V50" stroke="#8d6e63" stroke-width="3.5"/>' +
  '<circle cx="50" cy="36" r="26" fill="#7cc456"/><circle cx="32" cy="46" r="12" fill="#6cbf4f"/><circle cx="68" cy="46" r="12" fill="#5aa845"/>') +
  '<g font-family="Noto Serif SC, serif" font-weight="900" font-size="12" fill="#fff"><text x="38" y="32">字</text><text x="52" y="44">词</text><text x="28" y="50">汉</text><text x="60" y="26">语</text></g>' +
  '<g stroke="' + V + '" stroke-width="1.8"><circle cx="40" cy="20" r="3" fill="#ffd54f"/><circle cx="66" cy="54" r="3" fill="#ffd54f"/></g>');
H['pl-pho'] = svg(bong(38) + g('<rect x="20" y="48" width="60" height="36" rx="2" fill="#fff3d6"/><path d="M12 50L22 34H78L88 50Z" fill="#43a047"/><path d="M18 34L26 22H74L82 34Z" fill="#2e7d32"/>' +
  '<rect x="42" y="60" width="16" height="24" fill="#c62828"/><rect x="24" y="58" width="12" height="12" fill="#bbdefb" stroke-width="2.5"/><rect x="64" y="58" width="12" height="12" fill="#bbdefb" stroke-width="2.5"/>') +
  '<rect x="38" y="38" width="24" height="10" rx="2" fill="#ffd54f" stroke="' + V + '" stroke-width="2"/><text x="50" y="46.5" text-anchor="middle" font-size="8" font-weight="900" fill="' + V + '" font-family="Noto Serif SC, serif">茶馆</text>' +
  '<g stroke="' + V + '" stroke-width="2"><circle cx="16" cy="58" r="5" fill="#e53935"/><circle cx="84" cy="58" r="5" fill="#e53935"/></g>');
H['pl-dao'] = svg(bong(28) + g('<path d="M36 84L40 34H60L64 84Z" fill="#fff"/><path d="M38 64H62M39 50H61" stroke="#e5533d" stroke-width="6"/>' +
  '<rect x="36" y="22" width="28" height="14" rx="2" fill="#ffd54f"/><path d="M34 22L50 8L66 22Z" fill="#e5533d"/>') +
  '<path d="M64 26L90 18M64 30L90 38M36 26L10 18M36 30L10 38" stroke="#ffe082" stroke-width="3" opacity=".9" stroke-linecap="round"/>' +
  '<path d="M20 86Q35 80 50 86T80 86" stroke="#4fc3f7" stroke-width="4" fill="none" stroke-linecap="round"/>');
H['pl-de'] = svg(bong(32) + g('<rect x="26" y="74" width="48" height="10" rx="3" fill="#c62828"/>' +
  '<path d="M30 74Q24 58 36 52Q48 48 44 38Q40 26 52 20Q64 16 68 26Q60 24 58 30Q66 34 62 42Q56 50 62 58Q68 66 66 74Z" fill="#ffca28"/>' +
  '<path d="M52 20L50 12L56 18M62 18L66 10L66 20" fill="#ffca28" stroke-width="2.5"/>') +
  '<circle cx="60" cy="24" r="2.4" fill="' + V + '"/><path d="M38 60Q44 56 42 50M50 44Q56 40 54 34" stroke="#e09b12" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
  '<circle cx="74" cy="22" r="5" fill="#e53935" stroke="' + V + '" stroke-width="2"/>');
// ---- icon vong quay ----
H['ic-hat'] = svg(bong(24) + g('<path d="M30 36Q28 62 30 82H70Q72 62 70 36Z" fill="#c8a165"/><path d="M30 36Q50 28 70 36L66 26H34Z" fill="#a67c42"/>' +
  '<rect x="38" y="50" width="24" height="20" rx="4" fill="#fff8ec"/>') + g('<path d="M50 66V56" stroke-width="2.5"/><path d="M50 58Q42 52 42 60Q46 62 50 58Z" fill="#7cc456" stroke-width="2"/><path d="M50 58Q58 52 58 60Q54 62 50 58Z" fill="#5aa845" stroke-width="2"/>'));
H['ic-mat'] = svg(bong(26) + g('<circle cx="50" cy="50" r="30" fill="#e0dce6"/><path d="M38 38L62 62M62 38L38 62" stroke-width="6"/>'));
H['ic-chuot'] = svg(bong(30) + g('<path d="M24 70Q20 44 46 42Q72 40 80 62Q82 72 72 74H30Q24 74 24 70Z" fill="#b0a8b9"/>' +
  '<circle cx="62" cy="38" r="10" fill="#c9c1d2"/><circle cx="62" cy="38" r="5" fill="#ffb3c8" stroke-width="2"/>' +
  '<path d="M24 70Q10 72 12 58Q14 50 20 54" fill="none" stroke-width="3"/>') + '<circle cx="74" cy="56" r="2.6" fill="' + V + '"/><circle cx="82" cy="64" r="2.4" fill="#ff7aa2"/>' +
  '<path d="M80 66L92 62M80 68L92 70" stroke="' + V + '" stroke-width="1.6"/>');
H['ic-x2'] = svg(bong(30) + g('<path d="M30 80Q34 50 40 30M50 82V26M70 80Q66 50 60 30" fill="none" stroke-width="3"/>' +
  '<g fill="#ffd54f" stroke-width="2"><ellipse cx="40" cy="30" rx="5" ry="9"/><ellipse cx="50" cy="24" rx="5" ry="9"/><ellipse cx="60" cy="30" rx="5" ry="9"/><ellipse cx="36" cy="46" rx="4" ry="8"/><ellipse cx="64" cy="46" rx="4" ry="8"/></g>' +
  '<path d="M30 64H70" stroke="#e5533d" stroke-width="6"/>') +
  '<rect x="54" y="62" width="34" height="22" rx="8" fill="#e5533d" stroke="' + V + '" stroke-width="3"/><text x="71" y="79" text-anchor="middle" font-size="15" font-weight="900" fill="#fff">×2</text>');

// ---- cot truyen (nong-trai-truyen.js): o "Câu chuyện" + do trang tri tung chuong + ky vat cuoi mua ----
H['tb-truyen'] = svg(bong(34) + g('<path d="M14 26Q32 18 50 26V80Q32 72 14 80Z" fill="#fff8ec"/><path d="M86 26Q68 18 50 26V80Q68 72 86 80Z" fill="#fff3d6"/>' +
  '<path d="M22 38Q32 34 42 38M22 48Q32 44 42 48M22 58Q32 54 42 58M58 38Q68 34 78 38M58 48Q68 44 78 48" fill="none" stroke-width="2.5"/>') +
  '<path d="M62 54Q70 50 78 54V70L70 64L62 70Z" fill="#e5533d" stroke="' + V + '" stroke-width="2.5" stroke-linejoin="round"/>');
H['tr-fengling'] = svg(bong(22) + g('<path d="M50 8V20" /><path d="M30 34Q30 20 50 20Q70 20 70 34Z" fill="#4fc3f7"/><path d="M26 34H74" stroke-width="4"/>' +
  '<path d="M36 34V56M50 34V64M64 34V56" stroke-width="2.5"/><rect x="32" y="56" width="8" height="16" rx="3" fill="#ffd54f"/><rect x="60" y="56" width="8" height="16" rx="3" fill="#ffd54f"/>' +
  '<rect x="44" y="64" width="12" height="18" rx="3" fill="#ff8a65"/>') + '<path d="M76 50Q84 54 80 62M20 46Q14 52 20 58" fill="none" stroke="#90caf9" stroke-width="2.5" stroke-linecap="round"/>');
H['tr-zhulan'] = svg(bong(32) + g('<path d="M22 50Q50 12 78 50" fill="none" stroke-width="7"/><path d="M22 50Q50 12 78 50" fill="none" stroke="#c98a5a" stroke-width="3"/>' +
  '<path d="M18 50H82L74 82H26Z" fill="#e0b97a"/><path d="M22 60H78M24 70H76M34 50L36 82M50 50V82M66 50L64 82" stroke="#a67c42" stroke-width="2.5"/>') +
  '<g stroke="' + V + '" stroke-width="2.2"><ellipse cx="40" cy="48" rx="8" ry="10" fill="#fff3d6"/><ellipse cx="56" cy="46" rx="8" ry="10" fill="#ffe0b2"/></g>');
H['tr-heiban'] = svg(bong(34) + g('<path d="M26 84L34 64M74 84L66 64" stroke-width="5"/><rect x="14" y="20" width="72" height="48" rx="4" fill="#8d6e63"/><rect x="20" y="26" width="60" height="36" rx="2" fill="#2e5d4b"/>') +
  '<text x="50" y="50" text-anchor="middle" font-size="14" font-weight="900" fill="#fff">ā á ǎ à</text><rect x="62" y="64" width="12" height="4" rx="1" fill="#fff" stroke="' + V + '" stroke-width="1.5"/>');
H['tr-suanpan'] = svg(bong(34) + g('<rect x="14" y="30" width="72" height="50" rx="5" fill="#a1887f"/><rect x="20" y="36" width="60" height="38" rx="2" fill="#fff3d6"/><path d="M20 48H80" stroke-width="3"/>' +
  '<path d="M30 36V74M44 36V74M58 36V74M72 36V74" stroke-width="2"/>') +
  '<g stroke="' + V + '" stroke-width="2"><ellipse cx="30" cy="42" rx="5" ry="3.5" fill="#e5533d"/><ellipse cx="44" cy="44" rx="5" ry="3.5" fill="#e5533d"/><ellipse cx="58" cy="42" rx="5" ry="3.5" fill="#e5533d"/><ellipse cx="72" cy="44" rx="5" ry="3.5" fill="#e5533d"/>' +
  '<ellipse cx="30" cy="58" rx="5" ry="3.5" fill="#ffb300"/><ellipse cx="30" cy="66" rx="5" ry="3.5" fill="#ffb300"/><ellipse cx="44" cy="54" rx="5" ry="3.5" fill="#ffb300"/><ellipse cx="58" cy="62" rx="5" ry="3.5" fill="#ffb300"/><ellipse cx="58" cy="70" rx="5" ry="3.5" fill="#ffb300"/><ellipse cx="72" cy="56" rx="5" ry="3.5" fill="#ffb300"/></g>');
H['tr-huoguo'] = svg(bong(36) + g('<path d="M30 84L36 70M70 84L64 70" stroke-width="5"/><ellipse cx="50" cy="68" rx="38" ry="8" fill="#c98a5a"/>' +
  '<path d="M26 44H74V56Q74 66 50 66Q26 66 26 56Z" fill="#b0bec5"/><ellipse cx="50" cy="44" rx="24" ry="7" fill="#e53935"/><path d="M50 37V51" stroke-width="2.5"/><path d="M18 46H26M74 46H82" stroke-width="5"/>') +
  '<g stroke="' + V + '" stroke-width="1.8"><circle cx="40" cy="43" r="3.5" fill="#fff"/><circle cx="60" cy="45" r="3.5" fill="#7cc456"/><circle cx="44" cy="47" r="2.5" fill="#ffd54f"/></g>' +
  '<path d="M40 30Q36 24 40 18M52 30Q48 22 52 14M62 30Q58 24 62 18" fill="none" stroke="#cfd8dc" stroke-width="3" stroke-linecap="round"/>');
H['tr-yusan'] = svg(bong(26) + g('<path d="M50 30V78Q50 86 42 84" fill="none" stroke-width="4"/><path d="M12 48Q14 18 50 16Q86 18 88 48Q78 40 69 48Q60 40 50 48Q40 40 31 48Q22 40 12 48Z" fill="#e53935"/>' +
  '<path d="M50 16Q40 30 31 48M50 16Q60 30 69 48M50 16V48" fill="none" stroke-width="2.2"/><path d="M50 16V10" stroke-width="4"/>') +
  '<path d="M20 62L17 70M80 60L77 68M30 74L27 82" stroke="#4fc3f7" stroke-width="3" stroke-linecap="round"/>');
H['tr-zhenglong'] = svg(bong(34) + g('<rect x="18" y="56" width="64" height="24" rx="8" fill="#e0b97a"/><rect x="18" y="36" width="64" height="24" rx="8" fill="#ecc98c"/>' +
  '<path d="M18 48H82M18 68H82" stroke="#a67c42" stroke-width="2.5"/><path d="M22 36Q50 14 78 36Z" fill="#d7a866"/><circle cx="50" cy="22" r="4" fill="#a67c42"/>') +
  '<path d="M34 14Q30 8 34 2M50 10Q46 4 50 -2M66 14Q62 8 66 2" fill="none" stroke="#cfd8dc" stroke-width="3" stroke-linecap="round"/>');
H['tr-caideng'] = svg(bong(40) + g('<path d="M16 86V30M84 86V30" stroke-width="7"/><path d="M16 86V30M84 86V30" stroke="#c62828" stroke-width="3.5"/>' +
  '<path d="M8 30H92L86 18H14Z" fill="#e53935"/><path d="M16 36Q50 56 84 36" fill="none" stroke-width="2.5"/>') +
  '<g stroke="' + V + '" stroke-width="2.2"><ellipse cx="30" cy="50" rx="6" ry="8" fill="#ffd54f"/><ellipse cx="50" cy="56" rx="6" ry="8" fill="#ff8a65"/><ellipse cx="70" cy="50" rx="6" ry="8" fill="#81c784"/></g>' +
  '<text x="50" y="28" text-anchor="middle" font-size="9" font-weight="900" fill="#ffd54f" font-family="Noto Serif SC, serif">青竹村</text>');
H['tr-heying'] = svg(bong(32) + g('<path d="M34 86L42 66M66 86L58 66" stroke-width="5"/><rect x="14" y="18" width="72" height="52" rx="4" fill="#ffd54f"/><rect x="21" y="25" width="58" height="38" rx="2" fill="#bfe3f7"/>' +
  '<path d="M21 54Q50 44 79 54V63H21Z" fill="#9ad66f" stroke-width="2"/>') +
  '<g stroke="' + V + '" stroke-width="2"><circle cx="32" cy="46" r="5" fill="#f5cfa8"/><circle cx="44" cy="43" r="5" fill="#ffd9b8"/><circle cx="56" cy="46" r="5.5" fill="#ffd9b8"/><circle cx="68" cy="44" r="5" fill="#f5cfa8"/>' +
  '<path d="M27 58Q32 50 37 58M39 56Q44 48 49 56M50 59Q56 51 62 59M63 57Q68 49 73 57" fill="#ef5350"/></g>');

H['tb-sotay'] = svg(bong(30) + g('<rect x="22" y="14" width="56" height="70" rx="6" fill="#ffd54f"/><rect x="30" y="14" width="48" height="70" rx="5" fill="#fff8ec"/>' +
  '<path d="M38 30H68M38 42H68M38 54H58" stroke-width="3"/><path d="M22 26H30M22 40H30M22 54H30M22 68H30" stroke-width="3"/>') +
  '<circle cx="64" cy="66" r="11" fill="#4caf50" stroke="' + V + '" stroke-width="3"/><text x="64" y="71.5" text-anchor="middle" font-size="15" font-weight="900" fill="#fff">?</text>');

let n = 0;
Object.keys(H).forEach((k) => {
  const f = path.join(DIR, k + '.svg');
  if (fs.existsSync(f) && !DE) return;
  fs.writeFileSync(f, H[k]);
  n++;
});
console.log('Da ve', n, '/', Object.keys(H).length, 'hinh vao', DIR);
