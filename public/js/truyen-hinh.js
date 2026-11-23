/* Tranh minh hoa cho tung truyen (/truyen) — ve tay bang SVG, net dam #2b1d3a, mau am.
   window.TRUYEN_HINH[ten] -> chuoi <svg>. Ten = truong "hinh" cua truyen trong truyen-data.js.
   Them truyen moi chu de khac: ve them 1 muc o day (khung 120x120, nen tron "nhan dan"). */
(function () {
  'use strict';
  var V = '#2b1d3a';
  function S(nen, ruot) {
    return '<svg class="tr-svg" viewBox="0 0 120 120" aria-hidden="true" focusable="false">' +
      '<circle cx="60" cy="60" r="54" fill="' + nen + '" stroke="' + V + '" stroke-width="4"/>' +
      '<g stroke="' + V + '" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">' + ruot + '</g></svg>';
  }
  window.TRUYEN_HINH = {
    // nha co mai do, cua, cua so, trai tim
    nha: S('#fde6c8',
      '<path d="M24 58 L60 28 L96 58 Z" fill="#e0654f"/>' +
      '<rect x="32" y="56" width="56" height="38" rx="3" fill="#ffd98a"/>' +
      '<rect x="52" y="70" width="16" height="24" rx="2" fill="#8a5a0f"/>' +
      '<rect x="37" y="63" width="11" height="11" rx="2" fill="#bfe3f2"/><rect x="72" y="63" width="11" height="11" rx="2" fill="#bfe3f2"/>' +
      '<path d="M60 47 c-3-5-10-2-7 3 l7 6 l7-6 c3-5-4-8-7-3 z" fill="#e0654f" stroke-width="3"/>'),
    // dia sui cao bay hoi
    suicao: S('#fff1d6',
      '<ellipse cx="60" cy="80" rx="40" ry="13" fill="#fff"/>' +
      '<path d="M26 78 q14-26 30 0 z" fill="#fff6e0"/><path d="M50 80 q14-30 32 0 z" fill="#fff6e0"/><path d="M70 77 q12-22 26 0 z" fill="#fff6e0"/>' +
      '<path d="M35 66 l2 4 M42 63 l0 5 M60 63 l1 5 M68 62 l-1 5 M80 66 l1 4" stroke-width="3"/>' +
      '<path d="M44 44 q-5-6 0-12 q5-6 0-12 M62 42 q-5-6 0-12 q5-6 0-12" fill="none" stroke-width="3.5"/>'),
    // meo con
    meo: S('#e8f1e4',
      '<path d="M33 52 L36 26 L52 40 Z" fill="#f2bf6b"/><path d="M87 52 L84 26 L68 40 Z" fill="#f2bf6b"/>' +
      '<ellipse cx="60" cy="64" rx="31" ry="27" fill="#f2bf6b"/>' +
      '<circle cx="49" cy="60" r="3.5" fill="' + V + '"/><circle cx="71" cy="60" r="3.5" fill="' + V + '"/>' +
      '<path d="M57 70 h6 l-3 4 z" fill="#e0654f" stroke-width="3"/>' +
      '<path d="M60 74 q-5 6-10 2 M60 74 q5 6 10 2" fill="none" stroke-width="3"/>' +
      '<path d="M28 66 h14 M28 74 l14-3 M92 66 h-14 M92 74 l-14-3" stroke-width="2.5"/>'),
    // ao phong + the gia
    ao: S('#e4eefb',
      '<path d="M42 30 L30 36 L18 52 L30 60 L36 54 L36 94 L84 94 L84 54 L90 60 L102 52 L90 36 L78 30 Q60 44 42 30 Z" fill="#6aa36f"/>' +
      '<path d="M50 32 q10 10 20 0" fill="none" stroke-width="3.5"/>' +
      '<path d="M72 64 l14 0 l6 7 l-6 7 l-14 0 z" fill="#ffd98a" stroke-width="3.5"/><circle cx="76" cy="71" r="2" fill="' + V + '"/>'),
    // vien thuoc + coc nuoc am
    thuoc: S('#fde7e3',
      '<g transform="rotate(-35 46 54)"><rect x="24" y="44" width="44" height="20" rx="10" fill="#fff"/><path d="M46 44 v20 h-12 a10 10 0 0 1 0-20 z" fill="#e0654f"/></g>' +
      '<path d="M66 64 h30 l-4 30 h-22 z" fill="#bfe3f2"/>' +
      '<path d="M74 56 q-4-5 0-10 M86 56 q-4-5 0-10" fill="none" stroke-width="3.5"/>'),
    // may bay qua may
    maybay: S('#dff0fb',
      '<path d="M26 82 q0-10 12-10 q4-10 16-6 q10-2 12 8 q8 0 8 8 z" fill="#fff"/>' +
      '<path d="M30 56 L92 34 q10-3 8 6 L42 66 Z" fill="#fffdf8"/>' +
      '<path d="M58 48 L50 28 L60 26 L74 42 Z" fill="#e0654f"/><path d="M62 58 L66 76 L76 74 L76 52 Z" fill="#e0654f"/>' +
      '<path d="M32 58 L24 46 L32 44 L40 54 Z" fill="#e9a23b"/>'),
    // truong hoc co co
    truong: S('#eef6df',
      '<rect x="26" y="52" width="68" height="42" rx="3" fill="#ffd98a"/>' +
      '<path d="M20 54 L60 32 L100 54 Z" fill="#e0654f"/>' +
      '<rect x="53" y="72" width="14" height="22" fill="#8a5a0f"/>' +
      '<rect x="32" y="62" width="12" height="11" fill="#bfe3f2" stroke-width="3.5"/><rect x="76" y="62" width="12" height="11" fill="#bfe3f2" stroke-width="3.5"/>' +
      '<path d="M60 32 V14" /><path d="M60 15 h16 l-4 5 l4 5 h-16" fill="#e0654f" stroke-width="3.5"/>'),
    // banh sinh nhat
    banh: S('#fbe5ee',
      '<rect x="28" y="62" width="64" height="30" rx="5" fill="#fff6e0"/>' +
      '<path d="M28 70 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0" fill="#f6b6c8" stroke-width="3.5"/>' +
      '<rect x="40" y="48" width="40" height="16" rx="4" fill="#f6b6c8"/>' +
      '<rect x="57" y="32" width="6" height="16" rx="2" fill="#bfe3f2" stroke-width="3"/>' +
      '<path d="M60 18 q6 7 0 12 q-6-5 0-12 z" fill="#e9a23b" stroke-width="3"/>'),
    // qua bong da
    bong: S('#e2f2e5',
      '<circle cx="60" cy="60" r="32" fill="#fff"/>' +
      '<path d="M60 47 l12 9 -5 14 h-14 l-5-14 z" fill="' + V + '"/>' +
      '<path d="M60 47 V30 M72 56 l15-6 M67 70 l9 13 M53 70 l-9 13 M48 56 l-15-6" stroke-width="3.5"/>'),
    // sach mo + but chi
    sach: S('#fff0dc',
      '<path d="M60 40 q-16-10-36-6 v50 q20-4 36 6 z" fill="#fff"/><path d="M60 40 q16-10 36-6 v50 q-20-4-36 6 z" fill="#fff"/>' +
      '<path d="M32 46 h18 M32 56 h18 M70 46 h18 M70 56 h14" stroke-width="3"/>' +
      '<g transform="rotate(35 86 70)"><rect x="80" y="44" width="11" height="40" rx="2" fill="#e9a23b" stroke-width="3.5"/><path d="M80 84 l5.5 10 l5.5-10 z" fill="#fff6e0" stroke-width="3.5"/></g>'),
    // bao li xi + hoa mai
    tet: S('#fde3dc',
      '<rect x="24" y="36" width="40" height="56" rx="5" fill="#d8402f"/>' +
      '<path d="M24 46 q20 14 40 0" fill="none" stroke-width="3.5"/><circle cx="44" cy="62" r="8" fill="#ffd34d" stroke-width="3.5"/>' +
      '<g fill="#ffd34d"><circle cx="82" cy="40" r="8"/><circle cx="94" cy="50" r="8"/><circle cx="90" cy="64" r="8"/><circle cx="76" cy="64" r="8"/><circle cx="72" cy="50" r="8"/></g>' +
      '<circle cx="83" cy="53" r="4.5" fill="#e0654f" stroke-width="3"/><path d="M83 70 q-2 14 6 22" fill="none" stroke="#8a5a0f"/>'),
    // vali co dan anh meo
    vali: S('#e6ecfa',
      '<path d="M48 36 v-8 h24 v8" fill="none"/>' +
      '<rect x="28" y="36" width="64" height="54" rx="8" fill="#3a3a4a"/>' +
      '<path d="M44 36 v54 M76 36 v54" stroke="#6b6b80" stroke-width="3"/>' +
      '<circle cx="40" cy="95" r="4" fill="#fff"/><circle cx="80" cy="95" r="4" fill="#fff"/>' +
      '<rect x="50" y="52" width="20" height="18" rx="3" fill="#ffd98a" stroke-width="3"/><circle cx="56" cy="61" r="1.6" fill="' + V + '" stroke-width="2"/><circle cx="64" cy="61" r="1.6" fill="' + V + '" stroke-width="2"/>'),
    // xe dap vang
    xedap: S('#fdf2cf',
      '<circle cx="34" cy="76" r="17" fill="#fff"/><circle cx="86" cy="76" r="17" fill="#fff"/>' +
      '<circle cx="34" cy="76" r="3" fill="' + V + '"/><circle cx="86" cy="76" r="3" fill="' + V + '"/>' +
      '<path d="M34 76 L52 50 L78 50 L86 76 M52 50 L60 76 L78 50 M60 76 L34 76" fill="none" stroke="#e9a23b" stroke-width="6"/>' +
      '<path d="M34 76 L52 50 L78 50 L86 76 M52 50 L60 76 L78 50 M60 76 L34 76" fill="none" stroke-width="2"/>' +
      '<path d="M48 44 h10 M78 50 l-3-12 h8" fill="none"/>'),
    // huy chuong hang nhi
    cup: S('#e5f0fb',
      '<path d="M44 22 L56 56 M76 22 L64 56" stroke="#4472ea" stroke-width="10"/><path d="M44 22 L56 56 M76 22 L64 56" stroke-width="2"/>' +
      '<circle cx="60" cy="72" r="22" fill="#cfd6e0"/><circle cx="60" cy="72" r="14" fill="#eef1f5" stroke-width="3"/>' +
      '<text x="60" y="79" text-anchor="middle" font-size="20" font-weight="900" font-family="Be Vietnam Pro, sans-serif" fill="' + V + '" stroke="none">2</text>'),
    // gau truc + la tre
    gautruc: S('#e3f3dc',
      '<circle cx="36" cy="38" r="11" fill="' + V + '"/><circle cx="84" cy="38" r="11" fill="' + V + '"/>' +
      '<ellipse cx="60" cy="62" rx="34" ry="30" fill="#fff"/>' +
      '<ellipse cx="47" cy="58" rx="8" ry="10" fill="' + V + '" transform="rotate(25 47 58)"/><ellipse cx="73" cy="58" rx="8" ry="10" fill="' + V + '" transform="rotate(-25 73 58)"/>' +
      '<circle cx="48" cy="57" r="2.4" fill="#fff" stroke="none"/><circle cx="72" cy="57" r="2.4" fill="#fff" stroke="none"/>' +
      '<ellipse cx="60" cy="72" rx="5" ry="3.5" fill="' + V + '"/><path d="M54 79 q6 5 12 0" fill="none" stroke-width="3"/>' +
      '<path d="M92 96 L104 70" stroke="#6aa36f" stroke-width="5"/><path d="M98 82 q12-4 14 6 q-10 2-14-6 z" fill="#6aa36f" stroke-width="3"/>'),
    // dien thoai quet ma
    dienthoai: S('#e7e3f6',
      '<rect x="38" y="20" width="44" height="80" rx="8" fill="#3a3a4a"/><rect x="43" y="30" width="34" height="58" rx="3" fill="#fff" stroke-width="3"/>' +
      '<g fill="' + V + '" stroke="none"><rect x="47" y="36" width="10" height="10"/><rect x="63" y="36" width="10" height="10"/><rect x="47" y="52" width="10" height="10"/>' +
      '<rect x="65" y="54" width="4" height="4"/><rect x="61" y="60" width="4" height="4"/><rect x="69" y="60" width="4" height="4"/></g>' +
      '<path d="M46 72 h28" stroke="#e0654f" stroke-width="3"/><circle cx="60" cy="94" r="2" fill="#fff" stroke="none"/>'),
    // qua ot + lua
    ot: S('#fde6d8',
      '<path d="M40 44 q-10 30 8 46 q14 12 34 2 q-22-6-24-30 q-2-12 0-18 z" fill="#d8402f"/>' +
      '<path d="M40 44 q8-6 18 0" fill="#6aa36f" stroke-width="3.5"/><path d="M49 41 q2-12 12-16" fill="none" stroke="#3f7a44" stroke-width="5"/>' +
      '<path d="M80 52 q-6-10 2-20 q2 8 8 10 q4-8 2-14 q12 10 6 26 q-6 8-18-2 z" fill="#f2bf6b" stroke-width="3.5"/>'),
    // Truong Thanh tren doi + mat troi
    truongthanh: S('#fdeed2',
      '<circle cx="88" cy="34" r="11" fill="#ffd34d" stroke-width="3.5"/>' +
      '<path d="M8 92 Q40 52 64 70 T112 56 L112 100 L8 100 Z" fill="#8fc48b" stroke-width="4"/>' +
      '<path d="M14 84 Q40 54 64 70 T106 60" fill="none" stroke="#c98b4f" stroke-width="10"/>' +
      '<path d="M14 84 Q40 54 64 70 T106 60" fill="none" stroke-width="2.5"/>' +
      '<rect x="56" y="54" width="16" height="16" fill="#e8b07a" stroke-width="3.5"/><path d="M56 54 v-4 h4 v4 M64 54 v-4 h4 v4" fill="none" stroke-width="3"/>'),
  };
})();
