/* Xe tuan loc giao qua 驯鹿送礼物 — tro dua theo to mua Noel tren man chieu (khung chung: lop-onto.js).
   Dem tuyet: moi to mot lan duong bay tu Bac Cuc 北极 (trai) toi lang Noel 圣诞村 (phai), doc duong co H ngoi nha
   (nha thu H la lang Noel). Moi to mot xe truot tuyet mau to, tuan loc keo, linh vat cua to cam cuong.
     · Tra loi DUNG: xe bay them 1 chang; bay qua ngoi nha chua co qua thi tha mot hop qua vao ong khoi
       (cua so sang den, ong khoi nha khoi) — so qua = so nha da giao.
     · SAI: xe truot bang lui nua chang (khong mat qua da giao, nhung phai bay lai doan do).
   To toi lang Noel (giao du H qua) dau tien thang -> ong gia Noel bay ngang man hinh "Hô hô hô! 圣诞快乐！", phao hoa,
   roi buc trao giai cua lop-onto.js. Het so cau: to giao nhieu qua nhat (roi bay xa nhat) thang.
   Choi tren bang: cac to lan luot, moi luot mot cau (G.hoi — co bam dap an to chon). Qua ma QR (lop-onto-qr.js):
   moi cau ca lop cung tra loi tren dien thoai, to du ti le dung bay tiep, to khong du truot bang.
   So cau: hang "So cau" dung chung (10–50 / Tat ca / so khac ≤ 100, lop-socau.js) — cau chi lay tu cac bai co chon.
   Hinh ong gia Noel / tuan loc chep tu public/js/nong-trai-noel.js (svgOngGia / tuanLoc), khong nap module nong trai.
   Giam chuyen dong: cham hon, tuyet thua va roi cham hon — khong an tuyet / ong gia Noel. */
(function () {
  'use strict';
  if (!window.LopOnTo) return;

  var V = '#2b1d3a';
  var GIAM = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var BAY_MS = GIAM ? 2100 : 1400;   // thoi gian xe bay 1 chang
  var TRUOT_MS = GIAM ? 1500 : 950;
  var QUA_MS = GIAM ? 1150 : 760;    // hop qua roi vao ong khoi
  var MAU_QUA = ['#e53935', '#43a047', '#1e88e5', '#fdd835', '#8e24aa', '#fb8c00'];

  /* ---------------- hinh ve ---------------- */
  // Tuan loc (chep tu nong-trai-noel.js, doi ten lop: tl-chan / tl-mui) — huong mat sang TRAI, nhom ngoai lat lai
  function tuanLoc(x, y, dau, tre) {
    return '<g transform="translate(' + x + ' ' + y + ')">' +
      '<g class="tl-chan" style="animation-delay:-' + tre + 's"><path d="M12 5 L17 19" stroke="' + V + '" stroke-width="5" stroke-linecap="round"/><path d="M12 5 L17 19" stroke="#8a5530" stroke-width="2.6" stroke-linecap="round"/></g>' +
      '<g class="tl-chan b" style="animation-delay:-' + (tre + 0.18) + 's"><path d="M-12 5 L-17 19" stroke="' + V + '" stroke-width="5" stroke-linecap="round"/><path d="M-12 5 L-17 19" stroke="#8a5530" stroke-width="2.6" stroke-linecap="round"/></g>' +
      '<path d="M21 -3 q7 -3 6 -9" fill="none" stroke="' + V + '" stroke-width="3" stroke-linecap="round"/>' +
      '<ellipse cx="0" cy="0" rx="22" ry="9.5" fill="#a86b3c" stroke="' + V + '" stroke-width="2.2"/>' +
      '<ellipse cx="-2" cy="4" rx="14" ry="4" fill="#e8c9a0"/>' +
      '<path d="M-14 -4 C-18 -10 -22 -15 -24 -19 L-17 -23 C-14 -17 -10 -11 -6 -7 Z" fill="#a86b3c" stroke="' + V + '" stroke-width="2" stroke-linejoin="round"/>' +
      '<g fill="none" stroke="#6b4423" stroke-width="2.4" stroke-linecap="round"><path d="M-22 -26 l-3 -11 m1.5 4 l-6 -3 m7.5 -1 l-1 -7"/><path d="M-17 -26 l2 -10 m-1 4 l5 -4 m-4 0 l1 -6"/></g>' +
      '<ellipse cx="-27" cy="-23" rx="9" ry="6.2" transform="rotate(-14 -27 -23)" fill="#a86b3c" stroke="' + V + '" stroke-width="2"/>' +
      '<path d="M-19 -27 l6 -4 l-1 6 z" fill="#e8c9a0" stroke="' + V + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<circle cx="-27" cy="-25" r="1.6" fill="' + V + '"/>' +
      (dau ? '<circle cx="-36.5" cy="-21" r="6.5" class="tl-mui-hao" fill="#ff5252" opacity=".35"/>' : '') +
      '<circle cx="-36" cy="-21.5" r="' + (dau ? 3.4 : 2.6) + '" fill="' + (dau ? '#ff3b3b' : '#4a2c1a') + '" stroke="' + V + '" stroke-width="1.4"/>' +
      '<path d="M-8 -9 C-6 -2 6 -2 8 -9" fill="none" stroke="#c62828" stroke-width="3.2"/><circle cx="0" cy="-3" r="2.4" fill="#ffd54f" stroke="' + V + '" stroke-width="1.2"/>' +
      '</g>';
  }
  // Ong gia Noel (chep tu svgOngGia cua nong-trai-noel.js)
  function ongGia() {
    return '<g><ellipse cx="179" cy="31" rx="15" ry="14" fill="#d32f2f" stroke="' + V + '" stroke-width="2.2"/>' +
      '<rect x="164" y="34" width="30" height="5" fill="#fff" stroke="' + V + '" stroke-width="1.6"/>' +
      '<path d="M168 27 C160 28 156 30 154 32" stroke="' + V + '" stroke-width="7" stroke-linecap="round"/><path d="M168 27 C160 28 156 30 154 32" stroke="#d32f2f" stroke-width="4.2" stroke-linecap="round"/>' +
      '<circle cx="153" cy="32" r="3.4" fill="#fff" stroke="' + V + '" stroke-width="1.5"/>' +
      '<circle cx="175" cy="12" r="8.5" fill="#ffd7b5" stroke="' + V + '" stroke-width="2"/>' +
      '<path d="M166 13 C164 24 172 30 178 26 C183 23 184 17 183 13 C179 17 171 17 166 13 Z" fill="#fff" stroke="' + V + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<circle cx="170.5" cy="10.5" r="1.3" fill="' + V + '"/><circle cx="168" cy="14" r="2" fill="#ff8a80"/>' +
      '<path d="M166 7 C168 -1 182 -4 188 0 C194 2 196 8 199 9" fill="#d32f2f" stroke="' + V + '" stroke-width="2" stroke-linejoin="round"/>' +
      '<rect x="165" y="4" width="20" height="5" rx="2.5" fill="#fff" stroke="' + V + '" stroke-width="1.6"/>' +
      '<circle cx="200" cy="9" r="3.4" fill="#fff" stroke="' + V + '" stroke-width="1.5"/></g>';
  }
  // Xe truot tuyet (mau to) — ve theo toa do cua nong trai roi lat ngang (x -> 228 - x) cho xe bay sang PHAI
  function thanXe(mau) {
    return '<path d="M128 52 C128 40 140 36 150 38 L198 38 C208 38 216 32 220 22 C230 28 230 44 220 54 C212 62 196 66 176 66 L146 66 C136 66 128 60 128 52 Z" fill="' + mau + '" stroke="' + V + '" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<path d="M134 52 C136 44 144 42 152 43 L196 43" fill="none" stroke="#ffca28" stroke-width="2.6" stroke-linecap="round"/>' +
      '<circle cx="160" cy="54" r="3" fill="#ffca28" stroke="' + V + '" stroke-width="1.2"/><circle cx="176" cy="55" r="3" fill="#ffca28" stroke="' + V + '" stroke-width="1.2"/><circle cx="192" cy="54" r="3" fill="#ffca28" stroke="' + V + '" stroke-width="1.2"/>' +
      '<path d="M146 66 L146 75 M200 64 L200 75" stroke="' + V + '" stroke-width="2.6"/>' +
      '<path d="M120 76 L214 76 C224 76 230 70 228 62" fill="none" stroke="' + V + '" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M120 76 L214 76 C224 76 230 70 228 62" fill="none" stroke="#ffca28" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path d="M120 76 C112 76 112 66 120 67" fill="none" stroke="#ffca28" stroke-width="2.6" stroke-linecap="round"/>';
  }
  function baoQua() {
    return '<g><ellipse cx="208" cy="24" rx="14" ry="15" fill="#8d5a2b" stroke="' + V + '" stroke-width="2.2"/>' +
      '<rect x="199" y="2" width="9" height="9" rx="1.5" fill="#43a047" stroke="' + V + '" stroke-width="1.6"/><rect x="208" y="5" width="8" height="8" rx="1.5" fill="#1e88e5" stroke="' + V + '" stroke-width="1.6"/>' +
      '<path d="M200 12 q8 4 16 0" fill="none" stroke="#5d3a1a" stroke-width="2.4"/></g>';
  }
  var LAT = 'transform="translate(228 0) scale(-1 1)"';
  // Xe cua to: hinh = linh vat cua to (anh SVG cua lop) cam cuong, doi mu Noel; santa = ve ong gia Noel thay linh vat
  function noiXe(mau, hinh, santa) {
    return '<g ' + LAT + '>' +
        '<path d="M162 30 C130 30 100 22 64 24" fill="none" stroke="#7a4a1e" stroke-width="1.6"/><path d="M162 31 C120 34 60 26 12 22" fill="none" stroke="#7a4a1e" stroke-width="1.6"/>' +
        '<path d="M126 52 L102 48 M126 56 L52 46" stroke="#5d3a1a" stroke-width="2" stroke-linecap="round"/>' +
        tuanLoc(92, 48, false, 0.3) + tuanLoc(40, 42, true, 0) + baoQua() + (santa ? ongGia() : '') +
      '</g>' +
      (santa ? '' : '<image href="' + esc(hinh) + '" x="31" y="-10" width="44" height="44"/>' +
        '<path d="M37 -2 C40 -16 52 -24 64 -20 C60 -16 58 -10 60 -4 Z" fill="#d32f2f" stroke="' + V + '" stroke-width="1.8" stroke-linejoin="round"/>' +
        '<rect x="35" y="-5" width="28" height="5" rx="2.5" fill="#fff" stroke="' + V + '" stroke-width="1.4"/><circle cx="65" cy="-20" r="3.2" fill="#fff" stroke="' + V + '" stroke-width="1.4"/>') +
      '<g ' + LAT + '>' + thanXe(mau) + '</g>';
  }
  function svgXe(mau, hinh, santa, cls) {
    return '<svg class="' + (cls || 'tl-xe-svg') + '" viewBox="-14 -30 256 116" aria-hidden="true">' + noiXe(mau, hinh, santa) + '</svg>';
  }
  // Ngoi nha co ong khoi (viewBox 60 x 64): cua so .tl-cua sang len khi da co qua
  function svgNha(k) {
    var mai = ['#7a3b2e', '#355c7d', '#6c4a8a', '#2e6b4f'][k % 4], tuong = ['#f3d9a4', '#f6e7c8', '#e9c9a0', '#f1dcc0'][k % 4];
    return '<svg class="tl-nha-svg" viewBox="0 0 60 64" aria-hidden="true">' +
      '<rect x="38" y="6" width="9" height="18" fill="#b5523b" stroke="' + V + '" stroke-width="2.2"/>' +
      '<path d="M36.5 7 h12 v-3 a2 2 0 0 0 -2 -2 h-8 a2 2 0 0 0 -2 2 z" fill="#fff" stroke="' + V + '" stroke-width="1.6"/>' +
      '<rect x="9" y="28" width="42" height="32" fill="' + tuong + '" stroke="' + V + '" stroke-width="2.4"/>' +
      '<path d="M3 31 L30 8 L57 31 Z" fill="' + mai + '" stroke="' + V + '" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<path d="M5 30 L30 9 L55 30" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<rect class="tl-cua" x="13" y="35" width="10" height="10" rx="1.5" stroke="' + V + '" stroke-width="2"/>' +
      '<rect class="tl-cua" x="38" y="35" width="10" height="10" rx="1.5" stroke="' + V + '" stroke-width="2"/>' +
      '<path d="M18 35v10M13 40h10M43 35v10M38 40h10" stroke="' + V + '" stroke-width="1.2"/>' +
      '<rect x="25" y="44" width="10" height="16" rx="1.5" fill="#8a5530" stroke="' + V + '" stroke-width="2"/>' +
      '<circle cx="30" cy="40" r="3.6" fill="none" stroke="#2e7d32" stroke-width="2.4"/><circle cx="30" cy="43.4" r="1.1" fill="#e53935"/>' +
      '<path d="M2 62 Q15 56 30 60 T58 61 V64 H2 Z" fill="#fff" stroke="' + V + '" stroke-width="1.6"/>' +
      '</svg>';
  }
  // Lang Noel: cay thong lon, hai nha nho, bien 圣诞村
  function svgLang() {
    var den = '';
    [[60, 30, '#ff5252'], [52, 44, '#ffd54f'], [68, 46, '#40c4ff'], [47, 58, '#69f0ae'], [73, 60, '#ff5252'], [58, 56, '#ffd54f']].forEach(function (d, k) {
      den += '<circle class="tl-den-cay" style="animation-delay:' + (k * 0.27).toFixed(2) + 's" cx="' + d[0] + '" cy="' + d[1] + '" r="2.6" fill="' + d[2] + '" stroke="' + V + '" stroke-width=".8"/>';
    });
    return '<svg class="tl-lang-svg" viewBox="0 0 120 90" aria-hidden="true">' +
      '<g transform="translate(-2 30) scale(.82)">' + svgNhaTho('#355c7d') + '</g>' +
      '<g transform="translate(74 34) scale(.78)">' + svgNhaTho('#7a3b2e') + '</g>' +
      '<rect x="56" y="70" width="8" height="10" fill="#6b4423" stroke="' + V + '" stroke-width="2"/>' +
      '<path d="M60 12 L82 46 H72 L86 72 H34 L48 46 H38 Z" fill="#2e7d32" stroke="' + V + '" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<path d="M44 46 H76 M40 72 H80" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".85"/>' + den +
      '<path class="tl-sao-cay" d="M60 2 l3 7 7 .6 -5.4 4.6 1.7 7 -6.3 -3.8 -6.3 3.8 1.7 -7 -5.4 -4.6 7 -.6 z" fill="#ffd54f" stroke="' + V + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M0 84 Q30 76 60 82 T120 82 V90 H0 Z" fill="#fff" stroke="' + V + '" stroke-width="1.6"/>' +
      '</svg>';
  }
  function svgNhaTho(mai) {
    return '<rect x="34" y="6" width="8" height="14" fill="#b5523b" stroke="' + V + '" stroke-width="2.2"/>' +
      '<rect x="6" y="26" width="38" height="28" fill="#f6e7c8" stroke="' + V + '" stroke-width="2.4"/>' +
      '<path d="M1 29 L25 8 L49 29 Z" fill="' + mai + '" stroke="' + V + '" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<path d="M3 28 L25 9 L47 28" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>' +
      '<rect class="tl-cua" x="11" y="33" width="9" height="9" rx="1.5" stroke="' + V + '" stroke-width="2"/>' +
      '<rect x="27" y="38" width="9" height="16" rx="1.5" fill="#8a5530" stroke="' + V + '" stroke-width="2"/>';
  }
  // Bac Cuc: ong soc keo do trang, qua cau vang, go tuyet
  var SVG_CUC = '<svg class="tl-cuc-svg" viewBox="0 0 60 90" aria-hidden="true">' +
    '<path d="M2 88 Q8 62 30 60 Q54 62 58 88 Z" fill="#fff" stroke="' + V + '" stroke-width="2.2"/>' +
    '<path d="M14 72 Q22 66 30 70" fill="none" stroke="#c9dcf2" stroke-width="3" stroke-linecap="round"/>' +
    '<rect x="25" y="12" width="10" height="56" rx="3" fill="#fff" stroke="' + V + '" stroke-width="2.4"/>' +
    '<path d="M25 18 l10 -6 M25 28 l10 -6 M25 38 l10 -6 M25 48 l10 -6 M25 58 l10 -6 M25 66 l10 -6" stroke="#e53935" stroke-width="4"/>' +
    '<rect x="25" y="12" width="10" height="56" rx="3" fill="none" stroke="' + V + '" stroke-width="2.4"/>' +
    '<circle cx="30" cy="9" r="7" fill="#ffd54f" stroke="' + V + '" stroke-width="2.2"/><circle cx="27.5" cy="6.5" r="2" fill="#fff" opacity=".8"/>' +
    '</svg>';
  function svgHop(mau, cls) {
    return '<svg class="' + (cls || 'tl-hop') + '" viewBox="0 0 30 30" aria-hidden="true">' +
      '<rect x="3" y="11" width="24" height="17" rx="2" fill="' + mau + '" stroke="' + V + '" stroke-width="2.2"/>' +
      '<rect x="1.5" y="7" width="27" height="6" rx="2" fill="' + mau + '" stroke="' + V + '" stroke-width="2.2"/>' +
      '<path d="M15 7v21" stroke="#ffd54f" stroke-width="3.4"/><path d="M15 7 C9 0 4 4 9 7 M15 7 C21 0 26 4 21 7" fill="none" stroke="#ffd54f" stroke-width="2.4" stroke-linecap="round"/>' +
      '</svg>';
  }
  var LOGO = '<svg viewBox="0 0 100 100"><rect width="100" height="100" fill="#1d2b5a"/>' +
    '<circle cx="78" cy="22" r="12" fill="#fff6c8"/><circle cx="83" cy="18" r="11" fill="#1d2b5a"/>' +
    '<circle cx="14" cy="14" r="1.6" fill="#fff"/><circle cx="40" cy="10" r="1.2" fill="#fff"/><circle cx="58" cy="26" r="1.4" fill="#fff"/><circle cx="24" cy="34" r="1" fill="#fff"/>' +
    '<path d="M0 82 Q25 70 50 78 T100 76 V100 H0 Z" fill="#fff"/>' +
    '<g transform="translate(3 38) scale(.37)">' + noiXe('#d32f2f', '', true) + '</g></svg>';

  /* ---------------- tien ich ---------------- */
  var G = null, T = null;
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function coTieng() { var b = G && G.$('#otSound'); return !(b && b.classList.contains('is-off')); }
  function docTrung(t) {
    if (!t || !coTieng() || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(t), v = window.speechSynthesis.getVoices() || [];
      for (var i = 0; i < v.length; i++) if (/^zh[-_]CN/i.test(v[i].lang)) { u.voice = v[i]; break; }
      u.lang = 'zh-CN'; u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch (e) { /* bo qua */ }
  }
  function sndChuong() { [1568, 1760, 1568, 2093].forEach(function (f, k) { G.tone(f, 0.12, 'triangle', 0.07, k * 0.09); G.tone(f * 2, 0.08, 'sine', 0.025, k * 0.09); }); }
  function sndQua() { G.tone(880, 0.1, 'triangle', 0.12); G.tone(1320, 0.16, 'triangle', 0.1, 0.08); G.noise(0.12, 0.08, 0.16, 2600, 1.4); }
  function sndHoHo() { [0, 0.32, 0.64].forEach(function (d) { G.tone(165, 0.24, 'sawtooth', 0.05, d, 130); G.tone(330, 0.2, 'triangle', 0.05, d, 260); }); }

  // So nha (= so qua) tren duong bay: tu dong theo so luot moi to, hoac co chon 5 / 7 / 10
  function soNha(cfg, qr) {
    var x = cfg.x && cfg.x.nha;
    if (x && x !== 'tu' && +x > 0) return +x;
    var luot = qr ? cfg.vong : Math.floor(cfg.vong / Math.max(2, cfg.soTo));
    return Math.max(3, Math.min(10, Math.round(luot * (qr ? 0.6 : 0.7))));
  }
  function qua(i) { return Math.min(T.H, Math.floor(T.max[i] + 1e-9)); }
  function toi(i) { return T.s[i] >= T.H - 1e-9; }
  // Vi tri ngang (%) cua chang s tren lan: 0 = Bac Cuc, H = lang Noel
  function xPct(s) { return 7 + Math.max(0, Math.min(T.H, s)) / T.H * 84; }

  /* ---------------- ve ---------------- */
  function veKhung() {
    var lan = '';
    for (var i = 0; i < G.cfg.soTo; i++) {
      var t = G.to(i), nha = '';
      for (var k = 1; k < T.H; k++) nha += '<div class="tl-nha" data-k="' + k + '" style="left:' + xPct(k).toFixed(2) + '%"><span class="tl-khoi" aria-hidden="true"><i></i><i></i><i></i></span>' + svgNha(k + i) + '<span class="tl-so">' + k + '</span></div>';
      lan += '<div class="tl-lan" data-i="' + i + '" style="--tc:' + t.mau + '">' +
        '<span class="tl-lan-ten"><img src="' + esc(t.hinh) + '" alt="" draggable="false"><b>' + esc(t.ten) + '</b></span>' +
        '<div class="tl-tuyet-nen" aria-hidden="true"></div>' +
        '<div class="tl-cuc" aria-hidden="true">' + SVG_CUC + '</div>' + nha +
        '<div class="tl-nha tl-lang" data-k="' + T.H + '" style="left:' + xPct(T.H).toFixed(2) + '%">' + svgLang() + '<span class="tl-so">' + T.H + '</span></div>' +
        '<div class="tl-xe" data-i="' + i + '" style="left:' + xPct(T.s[i]).toFixed(2) + '%"><div class="tl-xe-nhun">' + svgXe(t.mau, t.hinh) + '</div>' +
          '<span class="tl-vet" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span></div>' +
      '</div>';
    }
    var den = '';
    for (var d = 0; d < 26; d++) den += '<i style="--m:' + MAU_QUA[d % MAU_QUA.length] + ';animation-delay:' + (d % 4 * 0.45).toFixed(2) + 's"></i>';
    var sao = '';
    for (var s = 0; s < 40; s++) sao += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;top:' + (Math.random() * 70).toFixed(1) + '%;animation-delay:' + (Math.random() * 3).toFixed(2) + 's"></i>';
    G.man.innerHTML =
      '<div class="tl-choi' + (GIAM ? ' is-giam' : '') + '">' +
        '<div class="tl-troi" aria-hidden="true"><span class="tl-cuc-quang"></span><span class="tl-trang"></span><span class="tl-sao">' + sao + '</span></div>' +
        '<div class="tl-day-den" aria-hidden="true">' + den + '</div>' +
        '<div class="tl-to" id="tlTo"></div>' +
        '<div class="tl-duong" id="tlDuong" style="--n:' + G.cfg.soTo + ';--H:' + T.H + '">' + lan + '</div>' +
        '<div class="tl-ban">' +
          '<div class="tl-tin" id="tlTin" aria-live="polite"></div>' +
          '<button type="button" class="ot-nut ot-nut--vang ot-nut--to" id="tlHoi" hidden></button>' +
        '</div>' +
        '<canvas class="tl-tuyet" id="tlTuyet" aria-hidden="true"></canvas>' +
      '</div>';
    G.$('#tlHoi').addEventListener('click', moCau);
    veTo();
    coDo();
    tuyet(G.$('#tlTuyet'));
  }
  // Kich thuoc nha / xe theo chieu cao lan va do dai duong (khong tran khi nhieu nha hoac man hep)
  function coDo() {
    var d = G.$('#tlDuong'), lan = d && d.querySelector('.tl-lan');
    if (!lan) return;
    var h = lan.clientHeight, w = lan.clientWidth;
    var nha = Math.max(24, Math.min(h * 0.58, w * 0.72 / T.H, 100));
    var xe = Math.max(64, Math.min(h * 1.65, w * 0.26, 270));
    d.style.setProperty('--nha', nha.toFixed(1) + 'px');
    d.style.setProperty('--xe', xe.toFixed(1) + 'px');
  }
  function veTo() {
    var box = G.$('#tlTo');
    if (!box) return;
    var h = '';
    for (var i = 0; i < G.cfg.soTo; i++) {
      var t = G.to(i), q = qua(i);
      h += '<span class="tl-chip' + (i === T.luot && T.pha !== 'het' && !G.qr ? ' is-luot' : '') + (toi(i) ? ' is-toi' : '') + '" style="--tc:' + t.mau + '">' +
        '<img src="' + esc(t.hinh) + '" alt="" draggable="false"><b>' + esc(t.ten) + '</b>' +
        '<em>🎁 ' + q + '/' + T.H + '</em><span class="tl-chip-thanh"><i style="width:' + (T.s[i] / T.H * 100).toFixed(1) + '%"></i></span></span>';
    }
    box.innerHTML = h;
  }
  // Ten to trong dong tin (nen dem): the mau to chu trang — doc duoc ca voi to mau toi
  function tenTo(i) { var t = G.to(i); return '<b class="tl-ten" style="--tc:' + t.mau + '">' + esc(t.ten) + '</b>'; }
  function tin(h) { var el = G.$('#tlTin'); if (el) el.innerHTML = h; }
  function xeEl(i) { return G.$('.tl-xe[data-i="' + i + '"]'); }
  function datXe(i) { var el = xeEl(i); if (el) el.style.left = xPct(T.s[i]).toFixed(2) + '%'; }
  function lop(el, cls, ms) {
    if (!el) return;
    el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
    if (ms) setTimeout(function () { el.classList.remove(cls); }, ms);
  }

  /* ---------------- tuyet roi (canvas) ---------------- */
  function tuyet(cv) {
    if (!cv || !cv.getContext) return;
    var c = cv.getContext('2d'), ds = [], w = 0, h = 0, last = 0;
    function co() {
      var r = cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
      w = r.width; h = r.height;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(w * h / (GIAM ? 26000 : 14000));
      while (ds.length < n) ds.push(bong(true));
      ds.length = Math.min(ds.length, n);
    }
    function bong(dau) {
      return { x: Math.random() * w, y: dau ? Math.random() * h : -8, r: 1.2 + Math.random() * 2.6, v: (GIAM ? 12 : 26) + Math.random() * (GIAM ? 14 : 34), p: Math.random() * 6.28, a: 0.55 + Math.random() * 0.4 };
    }
    co();
    (function vong(now) {
      if (!cv.isConnected) return;
      requestAnimationFrame(vong);
      if (document.hidden) { last = 0; return; }
      var dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      if (Math.abs(cv.getBoundingClientRect().width - w) > 2) co();
      c.clearRect(0, 0, w, h);
      for (var k = 0; k < ds.length; k++) {
        var b = ds[k];
        b.y += b.v * dt; b.p += dt * 0.9; b.x += Math.sin(b.p) * 12 * dt;
        if (b.y > h + 6) { ds[k] = bong(false); continue; }
        c.globalAlpha = b.a;
        c.fillStyle = '#fff';
        c.beginPath(); c.arc(b.x, b.y, b.r, 0, 6.283); c.fill();
      }
      c.globalAlpha = 1;
    })(performance.now());
  }

  /* ---------------- bay / tha qua / truot bang ---------------- */
  // Xe to i bay them 1 chang; nha nao chua co qua tren doan bay thi tha qua vao ong khoi. xong() khi xong het hieu ung.
  function bay(i, xong) {
    var s0 = T.s[i], s1 = Math.min(T.H, s0 + 1), el = xeEl(i);
    T.s[i] = s1;
    T.dung[i]++;
    var moi = [];
    for (var k = Math.floor(T.max[i] + 1e-9) + 1; k <= Math.floor(s1 + 1e-9); k++) moi.push(k);
    T.max[i] = Math.max(T.max[i], s1);
    if (el) { el.style.transitionDuration = BAY_MS + 'ms'; el.classList.add('is-bay'); }
    datXe(i);
    sndChuong();
    moi.forEach(function (k) {
      var tre = Math.max(0, BAY_MS * (k - s0) / (s1 - s0) - QUA_MS * 0.55);
      G.sau(tre, function () { thaQua(i, k); });
    });
    tin(moi.length
      ? '🛷 ' + tenTo(i) + ' bay tới ' + (moi[moi.length - 1] >= T.H ? '<b>làng Noel 圣诞村 <i>Shèngdàn cūn</i></b>' : 'nhà số ' + moi[moi.length - 1]) + ' và thả quà vào ống khói 🎁'
      : '🛷 ' + tenTo(i) + ' bay lại đoạn vừa trượt — nhà này đã có quà rồi!');
    G.sau(BAY_MS + 120, function () {
      if (el) { el.classList.remove('is-bay'); lop(el, 'is-dap', 700); }
      veTo();
    });
    G.sau(BAY_MS + (moi.length ? QUA_MS * 0.5 + 500 : 400), xong);
  }
  function thaQua(i, k) {
    var lan = G.$('.tl-lan[data-i="' + i + '"]'), xe = xeEl(i), nha = lan && lan.querySelector('.tl-nha[data-k="' + k + '"]');
    if (!lan || !xe || !nha) return;
    var r0 = lan.getBoundingClientRect(), rx = xe.getBoundingClientRect(), rn = nha.getBoundingClientRect();
    var hop = document.createElement('span');
    hop.className = 'tl-qua-roi';
    hop.innerHTML = svgHop(MAU_QUA[(k + i) % MAU_QUA.length]);
    lan.appendChild(hop);
    var sz = Math.max(16, rn.width * 0.38);
    hop.style.width = hop.style.height = sz + 'px';
    var x0 = rx.left - r0.left + rx.width * 0.16 - sz / 2, y0 = rx.top - r0.top + rx.height * 0.2;
    // ong khoi nha thuong o ~70% be ngang, lang Noel: ngon cay
    var x1 = rn.left - r0.left + rn.width * (k >= T.H ? 0.5 : 0.71) - sz / 2, y1 = rn.top - r0.top + (k >= T.H ? rn.height * 0.15 : rn.height * 0.02) - sz * 0.5;
    // ket qua (nha sang den) khong phu thuoc hieu ung: tab nen / may cham van cap nhat dung gio
    var da = false;
    var di = function () {
      if (da) return;
      da = true;
      if (hop.parentNode) hop.remove();
      nha.classList.add('is-co');
      nha.style.setProperty('--tc', G.to(i).mau);
      lop(nha, 'is-nhan', 900);
      sndQua();
      veTo();
    };
    if (hop.animate) {
      var a = hop.animate([
        { transform: 'translate(' + x0 + 'px,' + y0 + 'px) scale(.6) rotate(-20deg)', opacity: 0 },
        { transform: 'translate(' + (x0 + (x1 - x0) * 0.4) + 'px,' + (y0 - sz * 0.6) + 'px) scale(1) rotate(10deg)', opacity: 1, offset: 0.3 },
        { transform: 'translate(' + x1 + 'px,' + y1 + 'px) scale(.85) rotate(0)', opacity: 1, offset: 0.85 },
        { transform: 'translate(' + x1 + 'px,' + (y1 + sz * 0.6) + 'px) scale(.4)', opacity: 0 }
      ], { duration: QUA_MS, easing: 'cubic-bezier(.35,0,.6,1)', fill: 'forwards' });
      a.onfinish = di;
    }
    setTimeout(di, QUA_MS + 60);
  }
  function truot(i, xong) {
    var el = xeEl(i), s0 = T.s[i];
    T.s[i] = Math.max(0, s0 - 0.5);
    if (el) { el.style.transitionDuration = TRUOT_MS + 'ms'; lop(el, 'is-truot', TRUOT_MS + 100); }
    datXe(i);
    G.snd.truot();
    veTo();
    return s0 > 0;
  }

  /* ---------------- choi tren bang: cac to lan luot ---------------- */
  function batLuot() {
    if (G.pha !== 'choi' || T.pha === 'het') return;
    if (T.daHoi >= G.cfg.vong) { ketThucHet('Hết ' + G.cfg.vong + ' câu — tổ giao được nhiều quà nhất thắng!'); return; }
    T.pha = 'cho';
    G.veVong('Câu ' + (T.daHoi + 1) + '/' + G.cfg.vong);
    veTo();
    var t = G.to(T.luot), b = G.$('#tlHoi');
    G.$all('.tl-lan').forEach(function (l) { l.classList.toggle('is-luot', +l.getAttribute('data-i') === T.luot); });
    tin('Lượt của ' + tenTo(T.luot) + ' — trả lời đúng để xe tuần lộc bay tới nhà tiếp theo 🎁');
    b.hidden = false;
    b.innerHTML = '❓ Câu hỏi cho ' + esc(t.ten) + ' <kbd>Enter</kbd>';
    b.focus();
  }
  function moCau() {
    if (!T || T.pha !== 'cho' || G.qr) return;
    T.pha = 'hoi';
    T.daHoi++;
    G.$('#tlHoi').hidden = true;
    var i = T.luot, cuoi = T.s[i] + 1 >= T.H - 1e-9;
    G.hoi({
      to: i,
      phu: cuoi ? '🎄 Đúng → tới làng Noel!' : '🎁 Đúng → bay tới nhà tiếp theo',
      nutDung: cuoi ? '🎄 Bay về làng Noel ▶' : '🛷 Bay đi giao quà ▶',
      nutSai: '🧊 Trượt băng… lượt sau ▶',
      xong: function (dung) {
        T.pha = 'chay';
        if (dung) {
          bay(i, function () { if (toi(i)) veDich(i); else hetLuot(); });
          return;
        }
        var co = truot(i);
        tin('🧊 ' + tenTo(i) + ' ' + (co ? 'trượt băng, lùi nửa chặng!' : 'trượt chân ở Bắc Cực — chưa đi được!'));
        G.sau(TRUOT_MS + 400, hetLuot);
      }
    });
  }
  function hetLuot() {
    if (G.pha !== 'choi' || !T || T.pha === 'het') return;
    T.luot = (T.luot + 1) % G.cfg.soTo;
    batLuot();
  }

  /* ---------------- ve dich: ong gia Noel chuc mung ---------------- */
  function veDich(i) {
    T.pha = 'het';
    var t = G.to(i), loi = t.ten + ' giao hết ' + T.H + ' món quà, tới làng Noel đầu tiên!';
    G.$all('.tl-lan').forEach(function (l) { l.classList.remove('is-luot'); });
    var b = G.$('#tlHoi'); if (b) b.hidden = true;
    var lang = G.$('.tl-lan[data-i="' + i + '"] .tl-lang');
    if (lang) lang.classList.add('is-sang');
    veTo();
    tin('🎉 ' + tenTo(i) + ' tới làng Noel!');
    var choi = G.$('.tl-choi');
    if (!choi) { ketThucHet(loi); return; }
    var m = document.createElement('div');
    m.className = 'tl-mung';
    m.innerHTML = '<canvas class="tl-phao" aria-hidden="true"></canvas>' +
      '<div class="tl-ong-bay" aria-hidden="true"><div class="tl-xe-nhun">' + svgXe('#d32f2f', '', true, 'tl-ong-svg') + '</div><span class="tl-vet"><i></i><i></i><i></i><i></i><i></i><i></i></span></div>' +
      '<div class="tl-mung-the" style="--tc:' + t.mau + '">' +
        '<p class="tl-hoho">🎅 Hô hô hô!<br><span lang="zh">圣诞快乐！</span></p>' +
        '<p class="tl-py">Shèngdàn kuàilè! — Giáng sinh vui vẻ!</p>' +
        '<p class="tl-mung-to"><img src="' + esc(t.hinh) + '" alt="" draggable="false"><b>' + esc(t.ten) + '</b> giao hết <b>' + T.H + '</b> món quà 🎁</p>' +
        '<button type="button" class="ot-nut ot-nut--vang ot-nut--to" id="tlBang">🏆 Xem bảng vàng <kbd>Enter</kbd></button>' +
      '</div>';
    choi.appendChild(m);
    G.$('#tlBang').addEventListener('click', function () { ketThucHet(loi); });
    G.$('#tlBang').focus();
    T.pha = 'mung';
    T.loi = loi;
    G.snd.ken();
    G.sau(500, sndHoHo);
    G.sau(1300, function () { docTrung('圣诞快乐'); });
    phaoHoa(m.querySelector('.tl-phao'));
    // QR: khong co ai bam thi tu sang bang vang
    if (G.qr) G.sau(GIAM ? 15000 : 12000, function () { if (T && T.pha === 'mung') ketThucHet(loi); });
  }
  function phaoHoa(cv) {
    if (!cv || !cv.getContext) return;
    var c = cv.getContext('2d'), w = 0, h = 0, hat = [], hen = 0, last = 0;
    var r = cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    w = r.width; h = r.height; cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); c.setTransform(dpr, 0, 0, dpr, 0, 0);
    function no() {
      var x = w * (0.12 + Math.random() * 0.76), y = h * (0.12 + Math.random() * 0.35), mau = MAU_QUA[Math.floor(Math.random() * MAU_QUA.length)], n = GIAM ? 26 : 46;
      for (var k = 0; k < n; k++) {
        var g = k / n * 6.283, v = (GIAM ? 60 : 110) + Math.random() * (GIAM ? 50 : 110);
        hat.push({ x: x, y: y, vx: Math.cos(g) * v, vy: Math.sin(g) * v, t: 0, life: 1.3 + Math.random() * 0.7, mau: Math.random() < 0.3 ? '#fff6c8' : mau });
      }
      G.tone(200 + Math.random() * 120, 0.3, 'sine', 0.05, 0, 70);
    }
    (function vong(now) {
      if (!cv.isConnected) return;
      requestAnimationFrame(vong);
      var dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      hen -= dt;
      if (hen <= 0) { no(); hen = GIAM ? 1.6 : 0.75; }
      c.clearRect(0, 0, w, h);
      hat = hat.filter(function (p) { return p.t < p.life; });
      hat.forEach(function (p) {
        p.t += dt; p.vy += 60 * dt; p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx * dt; p.y += p.vy * dt;
        c.globalAlpha = Math.max(0, 1 - p.t / p.life);
        c.fillStyle = p.mau;
        c.beginPath(); c.arc(p.x, p.y, 2.6, 0, 6.283); c.fill();
      });
      c.globalAlpha = 1;
    })(performance.now());
  }
  function ketThucHet(loi) {
    if (!T || T.xong) return;
    T.xong = true;
    T.pha = 'het';
    var hang = [];
    for (var i = 0; i < G.cfg.soTo; i++) {
      var t = G.to(i), q = qua(i);
      hang.push({ i: i, diem: q, nho: Math.round(T.s[i] * 2) * 1000 + T.dung[i],
        phu: '<div class="tl-buc">' + svgXe(t.mau, t.hinh, false, 'tl-buc-svg') + '<span>' + (toi(i) ? '🎄 Tới làng Noel' : '🛷 Chặng ' + (Math.round(T.s[i] * 10) / 10) + '/' + T.H) + '</span></div>',
        ghi: T.dung[i] + ' câu đúng' });
    }
    G.ketThuc({ hang: hang, don: 'quà', tieuDe: 'Giao quà Noel 🎄', loi: '🎅 Hô hô hô! 圣诞快乐 Shèngdàn kuàilè! — ' + esc(loi) });
  }

  function taoVan(g, qr) {
    G = g;
    var H = soNha(G.cfg, qr), s = [], mx = [], d = [];
    for (var i = 0; i < G.cfg.soTo; i++) { s.push(0); mx.push(0); d.push(0); }
    T = { H: H, s: s, max: mx, dung: d, luot: 0, daHoi: 0, pha: 'cho', xong: false };
    veKhung();
    G.sau(80, coDo);
  }

  window.LopOnTo.dangKy({
    id: 'tuanloc',
    ten: 'Xe tuần lộc giao quà 驯鹿送礼物',
    logo: LOGO,
    nhac: 'noel',
    toMax: 4,
    soCau: true,
    luat: '<span lang="zh">驯鹿送礼物</span> <i>xùnlù sòng lǐwù</i> — Đêm Noel tuyết rơi, mỗi tổ lái một <b>xe tuần lộc</b> từ Bắc Cực 北极 <i>Běijí</i> tới <b>làng Noel</b>. Trả lời <b>đúng</b> thì xe bay tới nhà tiếp theo, ' +
      '<b>thả quà vào ống khói</b> 🎁; trả lời <b>sai</b> thì xe <b>trượt băng lùi nửa chặng</b> 🧊. Tổ giao hết quà, tới làng Noel đầu tiên thắng — ' +
      'ông già Noel sẽ ra chúc mừng! Hết số câu thì tổ giao nhiều quà nhất thắng.',
    vong: { ten: 'Số câu', md: 20, ds: [20] },
    them: [{ k: 'nha', ten: 'Số nhà giao quà', md: 'tu', ds: [['tu', '✨ Tự động <small>theo số câu</small>'], ['5', '🏠 5 nhà'], ['7', '🏘️ 7 nhà'], ['10', '🌃 10 nhà']] }],
    ghiSoCau: function (cfg, qr) {
      var H = soNha(cfg, qr);
      return qr ? 'Cả lớp cùng trả lời mỗi câu · đường bay ' + H + ' nhà'
        : '≈ ' + Math.floor(cfg.vong / Math.max(2, cfg.soTo)) + ' lượt mỗi tổ · đường bay ' + H + ' nhà';
    },
    qrKhongChon: true,
    qrDong: 'bay tới nhà tiếp theo, thả quà',
    qrLuat: '<b>bay tới nhà tiếp theo, thả quà vào ống khói</b> 🎁; tổ chưa đủ thì xe <b>trượt băng lùi nửa chặng</b> 🧊. Tổ tới làng Noel đầu tiên thắng!',
    batDau: function (g) {
      taoVan(g, false);
      batLuot();
    },
    // Thi qua ma QR (lop-onto-qr.js): to du ti le dung bay 1 chang, to khong du truot bang (ketVong)
    qr: {
      batDau: function (g) {
        taoVan(g, true);
        T.luot = -1;
        tin('📱 Cả lớp trả lời trên điện thoại — tổ có từ ' + G.cfg.nguong + '% bạn đúng được bay tới nhà tiếp theo 🎁');
      },
      hanh: function (i) {
        T.pha = 'chay';
        bay(i, function () {
          if (toi(i)) { veDich(i); return; }
          T.pha = 'cho';
          var el = G.$('#tlTin');
          G.qr.het(el ? el.textContent : '');
        });
      },
      ketVong: function (sai, so, cuoi, xong) {
        sai.forEach(function (i) {
          var lui = truot(i);
          G.qr.tin(i, '🧊 ' + G.to(i).ten + (lui ? ' trượt băng, lùi nửa chặng' : ' trượt chân ở Bắc Cực'));
        });
        if (sai.length) tin('🧊 ' + sai.map(function (i) { return tenTo(i); }).join(', ') + ' trượt băng!');
        G.sau(sai.length ? TRUOT_MS + 300 : 100, xong);
      },
      xong: function () { return !T || T.pha === 'het' || T.pha === 'mung' || T.xong; },
      ketThuc: function () { if (T && !T.xong && T.pha !== 'mung') ketThucHet('Hết ' + G.cfg.vong + ' câu — tổ giao được nhiều quà nhất thắng!'); }
    },
    doiCo: function () { if (T && G.$('#tlDuong')) coDo(); },
    phim: function (e, g, k) {
      if (!T) return false;
      if ((k === 'enter' || k === ' ') && T.pha === 'cho') { moCau(); return true; }
      if (k === 'enter' && T.pha === 'mung') { ketThucHet(T.loi || ''); return true; }
      return false;
    },
    dong: function () { T = null; if (window.speechSynthesis) try { window.speechSynthesis.cancel(); } catch (e) { /* bo qua */ } }
  });
})();
