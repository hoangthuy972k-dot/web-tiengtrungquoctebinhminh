/* Gap thu bong — tro on bai theo to tren man chieu (khung chung: lop-onto.js).
   Moi luot mot to tra loi cau hoi. Dung: to duoc dieu khien can gap — can tu lac trai / phai,
   giao vien bam THA (Space) dung luc de can ha xuong gap thu ngay ben duoi. Thu thuong to
   (de gap, 1 diem), thu hiem nho hon (3 diem, de tuot), thu quy nho nhat (5 diem, hay tuot).
   Bong ⭐ x2: lan gap duoc thu tiep theo cua to duoc nhan doi diem. Bong 🎁 bat ngo: cuop 1 thu
   cua to khac hoac duoc gap them 1 luot. Gap hut thi duoc 1 vien keo an ui (1 diem). Sai: mat luot.
   Het so vong hoac may het thu thi trao giai theo tong diem trong tu thu cua moi to. */
(function () {
  'use strict';
  if (!window.LopOnTo) return;

  var V = '#2b1d3a';
  var SO_COT = 7, X0 = 0.215, X1 = 0.935;         // vung dat thu trong long kinh (ti le be rong)
  var X_LO = 0.09;                                  // tam o lay thu (ben trai)
  var TOC = { cham: 1.1, vua: 1.7, nhanh: 2.5 };    // rad/giay cua con lac
  var HANG = {
    thuong: { co: 0.108, trung: 0.043, tuot: 0, ten: 'Thường' },
    hiem: { co: 0.092, trung: 0.033, tuot: 0.15, ten: 'Hiếm' },
    quy: { co: 0.08, trung: 0.025, tuot: 0.3, ten: 'Siêu hiếm' },
    dacbiet: { co: 0.088, trung: 0.035, tuot: 0, ten: 'Đặc biệt' }
  };

  /* ---------------- hinh ve thu bong (SVG phang, vien dam) ---------------- */
  function svg(noi, cls) { return '<svg class="' + (cls || '') + '" viewBox="0 0 100 100" aria-hidden="true">' + noi + '</svg>'; }
  function mat(y, mau) {
    return '<circle cx="38" cy="' + y + '" r="4.6" fill="' + V + '"/><circle cx="62" cy="' + y + '" r="4.6" fill="' + V + '"/>' +
      '<circle cx="39.6" cy="' + (y - 1.6) + '" r="1.5" fill="#fff"/><circle cx="63.6" cy="' + (y - 1.6) + '" r="1.5" fill="#fff"/>' +
      '<ellipse cx="29" cy="' + (y + 9) + '" rx="6" ry="3.6" fill="' + (mau || '#ff8fa3') + '" opacity=".6"/><ellipse cx="71" cy="' + (y + 9) + '" rx="6" ry="3.6" fill="' + (mau || '#ff8fa3') + '" opacity=".6"/>';
  }
  function mieng(y) { return '<path d="M45 ' + y + 'q5 5 10 0" fill="none" stroke="' + V + '" stroke-width="3" stroke-linecap="round"/>'; }
  var NET = ' stroke="' + V + '" stroke-width="4" stroke-linejoin="round"';
  var VE = {
    gau: function () {
      return '<circle cx="24" cy="30" r="13" fill="#b5774a"' + NET + '/><circle cx="76" cy="30" r="13" fill="#b5774a"' + NET + '/>' +
        '<circle cx="24" cy="30" r="6" fill="#e8c39e"/><circle cx="76" cy="30" r="6" fill="#e8c39e"/>' +
        '<ellipse cx="50" cy="58" rx="36" ry="33" fill="#b5774a"' + NET + '/>' +
        '<ellipse cx="50" cy="69" rx="14" ry="10.5" fill="#e8c39e" stroke="' + V + '" stroke-width="3"/>' +
        '<ellipse cx="50" cy="64.5" rx="5" ry="3.6" fill="' + V + '"/>' + mat(52) + mieng(70);
    },
    tho: function () {
      return '<ellipse cx="36" cy="24" rx="9" ry="22" transform="rotate(-12 36 24)" fill="#fff"' + NET + '/><ellipse cx="64" cy="24" rx="9" ry="22" transform="rotate(12 64 24)" fill="#fff"' + NET + '/>' +
        '<ellipse cx="36" cy="25" rx="4" ry="14" transform="rotate(-12 36 25)" fill="#ffb3c6"/><ellipse cx="64" cy="25" rx="4" ry="14" transform="rotate(12 64 25)" fill="#ffb3c6"/>' +
        '<ellipse cx="50" cy="63" rx="34" ry="30" fill="#fff"' + NET + '/>' +
        '<path d="M46 66h8l-4 4z" fill="#ff7aa2" stroke="' + V + '" stroke-width="2" stroke-linejoin="round"/>' + mat(58) + mieng(72);
    },
    vit: function () {
      return '<path d="M46 22q4-14 12-8q-6 2-4 10" fill="#ffd23f"' + NET + '/>' +
        '<circle cx="50" cy="56" r="35" fill="#ffd23f"' + NET + '/>' +
        '<ellipse cx="50" cy="68" rx="17" ry="8.5" fill="#ff9f1c"' + NET + '/><path d="M36 68h28" stroke="' + V + '" stroke-width="2.5"/>' + mat(52, '#ff9f6b');
    },
    meo: function () {
      return '<path d="M20 44L26 10L48 28Z" fill="#f4a259"' + NET + '/><path d="M80 44L74 10L52 28Z" fill="#f4a259"' + NET + '/>' +
        '<path d="M27 32L29 19L39 28Z" fill="#ffc6a8"/><path d="M73 32L71 19L61 28Z" fill="#ffc6a8"/>' +
        '<ellipse cx="50" cy="60" rx="36" ry="31" fill="#f4a259"' + NET + '/>' +
        '<path d="M44 33v8M50 31v9M56 33v8" stroke="#c96f2a" stroke-width="3.5" stroke-linecap="round"/>' +
        '<path d="M47 64h6l-3 3z" fill="#ff7aa2" stroke="' + V + '" stroke-width="2"/>' +
        '<path d="M14 62h14M14 70l14-3M86 62H72M86 70l-14-3" stroke="' + V + '" stroke-width="2" stroke-linecap="round"/>' + mat(54) + mieng(68);
    },
    khunglong: function () {
      return '<path d="M26 36l7-17 8 15M42 30l8-19 8 19M59 34l8-15 7 17" fill="#ffd23f"' + NET + '/>' +
        '<ellipse cx="50" cy="60" rx="38" ry="31" fill="#7bc96f"' + NET + '/>' +
        '<ellipse cx="50" cy="72" rx="20" ry="11" fill="#b8e6a6" stroke="' + V + '" stroke-width="3"/>' +
        '<circle cx="44" cy="70" r="2.2" fill="' + V + '"/><circle cx="56" cy="70" r="2.2" fill="' + V + '"/>' +
        '<circle cx="28" cy="52" r="3" fill="#4f9d47"/><circle cx="74" cy="48" r="3.5" fill="#4f9d47"/>' + mat(54) + mieng(77);
    },
    gautruc: function () {
      return '<circle cx="24" cy="30" r="13" fill="' + V + '"/><circle cx="76" cy="30" r="13" fill="' + V + '"/>' +
        '<ellipse cx="50" cy="58" rx="36" ry="33" fill="#fff"' + NET + '/>' +
        '<ellipse cx="37" cy="54" rx="9" ry="11" transform="rotate(25 37 54)" fill="' + V + '"/><ellipse cx="63" cy="54" rx="9" ry="11" transform="rotate(-25 63 54)" fill="' + V + '"/>' +
        '<circle cx="38" cy="53" r="3.4" fill="#fff"/><circle cx="62" cy="53" r="3.4" fill="#fff"/>' +
        '<ellipse cx="50" cy="66" rx="5.5" ry="3.8" fill="' + V + '"/>' +
        '<ellipse cx="27" cy="68" rx="5" ry="3" fill="#ff8fa3" opacity=".6"/><ellipse cx="73" cy="68" rx="5" ry="3" fill="#ff8fa3" opacity=".6"/>' + mieng(71);
    },
    cavoi: function () {
      return '<path d="M44 26q-6-12 0-16M50 24q0-14 0-16M56 26q6-12 0-16" fill="none" stroke="#7fc8f8" stroke-width="4" stroke-linecap="round"/>' +
        '<path d="M80 56q16-14 14-26q-10 2-14 12q-2-12-12-14q-2 12 8 22z" fill="#5aa9e6"' + NET + '/>' +
        '<ellipse cx="48" cy="62" rx="40" ry="30" fill="#5aa9e6"' + NET + '/>' +
        '<path d="M14 66q34 26 68 0q-6 22-34 23q-28-1-34-23z" fill="#cfeaff" stroke="' + V + '" stroke-width="3"/>' +
        '<circle cx="34" cy="56" r="4.6" fill="' + V + '"/><circle cx="58" cy="56" r="4.6" fill="' + V + '"/>' +
        '<circle cx="35.6" cy="54.4" r="1.5" fill="#fff"/><circle cx="59.6" cy="54.4" r="1.5" fill="#fff"/>' + mieng(64).replace('M45', 'M41');
    },
    kylan: function () {
      return '<path d="M50 2L42 30H58Z" fill="#ffd23f"' + NET + '/><path d="M45 21h10M47 13h6" stroke="#e0a400" stroke-width="2.5"/>' +
        '<path d="M22 40L24 18L40 30Z" fill="#fff"' + NET + '/><path d="M78 40L76 18L60 30Z" fill="#fff"' + NET + '/>' +
        '<path d="M20 50q-12 12-6 30q6-8 12-8q-2 10 4 16" fill="#ff8fc7"' + NET + '/>' +
        '<ellipse cx="52" cy="62" rx="34" ry="31" fill="#fff"' + NET + '/>' +
        '<path d="M24 46q8-16 26-16q-12 6-12 18q-8-6-14-2z" fill="#9b8cff" stroke="' + V + '" stroke-width="3" stroke-linejoin="round"/>' +
        '<circle cx="80" cy="20" r="3" fill="#ffd23f"/><path d="M88 34l3 6 6 2-6 2-3 6-3-6-6-2 6-2z" fill="#ffd23f" stroke="' + V + '" stroke-width="2"/>' +
        mat(58, '#ff8fc7').replace(/cx="38"/g, 'cx="40"').replace(/cx="39.6"/g, 'cx="41.6"') + mieng(72).replace('M45', 'M47');
    },
    rong: function () {
      return '<path d="M26 34q-10-16 0-26q0 12 10 18zM74 34q10-16 0-26q0 12-10 18z" fill="#ffd23f"' + NET + '/>' +
        '<path d="M14 54l-8-6 10-2M86 54l8-6-10-2" fill="#f7b267"' + NET + '/>' +
        '<ellipse cx="50" cy="58" rx="36" ry="32" fill="#e4572e"' + NET + '/>' +
        '<path d="M36 30l6 8 8-10 8 10 6-8" fill="none" stroke="#ffd23f" stroke-width="3.5" stroke-linejoin="round"/>' +
        '<ellipse cx="50" cy="70" rx="18" ry="11" fill="#f7b267" stroke="' + V + '" stroke-width="3"/>' +
        '<circle cx="44" cy="68" r="2.2" fill="' + V + '"/><circle cx="56" cy="68" r="2.2" fill="' + V + '"/>' +
        '<path d="M30 76q-12 4-16 12M70 76q12 4 16 12" fill="none" stroke="' + V + '" stroke-width="2.5" stroke-linecap="round"/>' + mat(52, '#ffb38a') + mieng(75);
    },
    x2: function () {
      return '<circle cx="50" cy="52" r="42" fill="#fff"' + NET + '/><path d="M8 52a42 42 0 0 1 84 0z" fill="#ffd23f"' + NET + '/>' +
        '<rect x="8" y="48" width="84" height="8" fill="#f0a800" stroke="' + V + '" stroke-width="3"/>' +
        '<path d="M50 14l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2z" fill="#fff6c8" stroke="' + V + '" stroke-width="3" stroke-linejoin="round"/>' +
        '<text x="50" y="84" text-anchor="middle" font-family="Be Vietnam Pro, sans-serif" font-weight="900" font-size="24" fill="' + V + '">x2</text>' +
        '<ellipse cx="30" cy="30" rx="7" ry="4" transform="rotate(-35 30 30)" fill="#fff" opacity=".8"/>';
    },
    qua: function () {
      return '<circle cx="50" cy="52" r="42" fill="#fff"' + NET + '/><path d="M8 52a42 42 0 0 1 84 0z" fill="#9b5de5"' + NET + '/>' +
        '<rect x="8" y="48" width="84" height="8" fill="#7a3fc4" stroke="' + V + '" stroke-width="3"/>' +
        '<rect x="36" y="24" width="28" height="20" rx="3" fill="#ff6b8b" stroke="' + V + '" stroke-width="3"/><path d="M50 24v20M36 32h28" stroke="#ffd23f" stroke-width="4"/>' +
        '<path d="M50 24q-10-10-12-2q4 4 12 2q10-10 12-2q-4 4-12 2" fill="#ffd23f" stroke="' + V + '" stroke-width="2.5"/>' +
        '<text x="50" y="84" text-anchor="middle" font-family="Be Vietnam Pro, sans-serif" font-weight="900" font-size="26" fill="#7a3fc4">?</text>' +
        '<ellipse cx="28" cy="32" rx="7" ry="4" transform="rotate(-35 28 32)" fill="#fff" opacity=".7"/>';
    },
    keo: function () {
      return '<path d="M30 50L8 34v32zM70 50l22-16v32z" fill="#ff8fc7"' + NET + '/>' +
        '<circle cx="50" cy="50" r="23" fill="#ff5d8f"' + NET + '/>' +
        '<path d="M36 40q14 6 28 0M34 52q16 7 32 0M38 63q12 4 24 0" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>';
    }
  };
  var THU = {
    gau: { ten: 'Gấu nâu', hang: 'thuong', diem: 1 },
    tho: { ten: 'Thỏ bông', hang: 'thuong', diem: 1 },
    vit: { ten: 'Vịt vàng', hang: 'thuong', diem: 1 },
    meo: { ten: 'Mèo cam', hang: 'thuong', diem: 1 },
    khunglong: { ten: 'Khủng long', hang: 'hiem', diem: 3 },
    gautruc: { ten: 'Gấu trúc', hang: 'hiem', diem: 3 },
    cavoi: { ten: 'Cá voi xanh', hang: 'hiem', diem: 3 },
    kylan: { ten: 'Kỳ lân', hang: 'quy', diem: 5 },
    rong: { ten: 'Rồng đỏ', hang: 'quy', diem: 5 },
    x2: { ten: 'Bóng ⭐ x2', hang: 'dacbiet', diem: 0 },
    qua: { ten: 'Bóng 🎁 bất ngờ', hang: 'dacbiet', diem: 0 },
    keo: { ten: 'Kẹo an ủi', hang: 'thuong', diem: 1 }
  };
  function hinhThu(loai, cls) { return svg(VE[loai](), cls || 'gt-svg'); }

  var CANG =
    '<svg class="gt-cang-svg" viewBox="0 0 80 74" aria-hidden="true">' +
      '<path class="gt-tay gt-tay-t" d="M33 18L16 42L27 66" fill="none" stroke="' + V + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path class="gt-tay gt-tay-t" d="M33 18L16 42L27 66" fill="none" stroke="#c9ccd6" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path class="gt-tay gt-tay-p" d="M47 18L64 42L53 66" fill="none" stroke="' + V + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path class="gt-tay gt-tay-p" d="M47 18L64 42L53 66" fill="none" stroke="#c9ccd6" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<rect x="24" y="2" width="32" height="20" rx="7" fill="#e9a23b" stroke="' + V + '" stroke-width="4"/>' +
      '<circle cx="40" cy="12" r="4" fill="#fff6c8" stroke="' + V + '" stroke-width="2.5"/>' +
    '</svg>';
  var LOGO = '<svg viewBox="0 0 100 100"><rect x="14" y="8" width="72" height="86" rx="12" fill="#ff8fb1" stroke="' + V + '" stroke-width="4"/>' +
    '<rect x="22" y="20" width="56" height="48" rx="6" fill="#e6f6ff" stroke="' + V + '" stroke-width="3.5"/>' +
    '<path d="M50 20v12" stroke="' + V + '" stroke-width="3"/><path d="M44 32l-5 8 4 6M56 32l5 8-4 6" fill="none" stroke="' + V + '" stroke-width="3.5" stroke-linecap="round"/>' +
    '<circle cx="36" cy="60" r="8" fill="#b5774a" stroke="' + V + '" stroke-width="3"/><circle cx="54" cy="61" r="7" fill="#ffd23f" stroke="' + V + '" stroke-width="3"/><circle cx="66" cy="58" r="6" fill="#7bc96f" stroke="' + V + '" stroke-width="3"/>' +
    '<circle cx="64" cy="82" r="6" fill="#e4572e" stroke="' + V + '" stroke-width="3"/><rect x="28" y="77" width="22" height="10" rx="5" fill="#fff" stroke="' + V + '" stroke-width="3"/></svg>';

  /* ---------------- trang thai van ---------------- */
  var G = null, T = null;
  function moi() {
    return { luot: 0, vongHt: 1, thu: [], ke: [], x2: [], pha: 'cho', x: 0.6, goc: 0, t0: 0, raf: 0 };
  }
  function soThu(cfg) { return Math.min(SO_COT * 2, Math.max(8, Math.round(cfg.soTo * cfg.vong * 0.7) + 1)); }
  function taoMay() {
    var M = soThu(G.cfg), ds = [];
    var quy = M >= 12 ? 2 : 1, x2 = M >= 10 ? 2 : 1, qua = M >= 10 ? 2 : 1, hiem = Math.max(2, Math.round(M * 0.24));
    var i;
    for (i = 0; i < quy; i++) ds.push(i % 2 ? 'rong' : 'kylan');
    for (i = 0; i < x2; i++) ds.push('x2');
    for (i = 0; i < qua; i++) ds.push('qua');
    var dsHiem = G.tron(['khunglong', 'gautruc', 'cavoi']);
    for (i = 0; i < hiem; i++) ds.push(dsHiem[i % 3]);
    var dsThuong = G.tron(['gau', 'tho', 'vit', 'meo']);
    for (i = 0; ds.length < M; i++) ds.push(dsThuong[i % 4]);
    ds = G.tron(ds);
    // tang duoi: lap du 7 cot truoc, roi xep tang tren vao cac cot ngau nhien
    var cotTren = G.tron([0, 1, 2, 3, 4, 5, 6]);
    T.thu = ds.map(function (loai, k) {
      return { id: k, loai: loai, cot: k < SO_COT ? k : cotTren[k - SO_COT], tang: k < SO_COT ? 0 : 1, con: true };
    });
  }
  function tamCot(c) { return X0 + (c + 0.5) * (X1 - X0) / SO_COT; }
  function thuTrenCung(c) {
    var ds = T.thu.filter(function (t) { return t.con && t.cot === c; });
    ds.sort(function (a, b) { return b.tang - a.tang; });
    return ds[0] || null;
  }
  function conThu() { return T.thu.some(function (t) { return t.con; }); }
  function diemTo(i) { return T.ke[i].reduce(function (s, x) { return s + x.diem; }, 0); }

  /* ---------------- ve man choi ---------------- */
  function veKhung() {
    var bong = '';
    for (var i = 0; i < 12; i++) bong += '<i style="--i:' + i + '"></i>';
    G.man.innerHTML =
      '<div class="gt-choi">' +
        '<div class="gt-may">' +
          '<div class="gt-bien"><span class="gt-den">' + bong + '</span><b>🧸 GẮP THÚ BÔNG</b><span class="gt-den">' + bong + '</span></div>' +
          '<div class="gt-kinh" id="gtKinh">' +
            '<div class="gt-ray"></div>' +
            '<div class="gt-lo"><span>LỐI RA</span></div>' +
            '<div class="gt-cang is-mo" id="gtCang"><div class="gt-day" id="gtDay"></div><div class="gt-dau" id="gtDau">' + CANG + '</div></div>' +
            '<div class="gt-san"></div>' +
            '<div class="gt-bong-kinh"></div>' +
          '</div>' +
          '<div class="gt-ban">' +
            '<div class="gt-can-dk" aria-hidden="true"><i></i></div>' +
            '<div class="gt-tin" id="gtTin" aria-live="polite"></div>' +
            '<button type="button" class="gt-tha" id="gtTha" hidden>THẢ<small>Space</small></button>' +
            '<button type="button" class="ot-nut ot-nut--vang ot-nut--to gt-hoi-nut" id="gtHoi" hidden></button>' +
          '</div>' +
        '</div>' +
        '<aside class="gt-ke" id="gtKe"></aside>' +
      '</div>';
    G.$('#gtTha').addEventListener('click', tha);
    G.$('#gtHoi').addEventListener('click', moCau);
    T.thu.forEach(function (t) {
      var el = document.createElement('div');
      el.className = 'gt-thu gt-thu--' + THU[t.loai].hang;
      el.setAttribute('data-id', t.id);
      el.title = THU[t.loai].ten + (THU[t.loai].diem ? ' · ' + THU[t.loai].diem + ' điểm' : '');
      el.innerHTML = hinhThu(t.loai) + (THU[t.loai].hang === 'hiem' || THU[t.loai].hang === 'quy' ? '<span class="gt-sang"></span>' : '');
      t.el = el;
      G.$('#gtKinh').appendChild(el);
    });
    datViTri();
    veKe();
  }
  // Kich thuoc / vi tri theo be rong long kinh hien tai
  function datViTri() {
    var k = G.$('#gtKinh');
    if (!k) return;
    var W = k.clientWidth, H = k.clientHeight;
    T.W = W; T.H = H;
    var san = H * 0.92;
    T.san = san;
    var cang = G.$('#gtCang');
    T.coCang = Math.min(W * 0.12, H * 0.2);
    cang.style.setProperty('--cc', T.coCang + 'px');
    T.ray = H * 0.06;
    var day = {};
    T.thu.forEach(function (t) {
      if (!t.con || t.cam) return;
      var h = HANG[THU[t.loai].hang], s = Math.min(W * h.co, H * 0.24);
      t.s = s;
      var duoi = T.thu.filter(function (u) { return u.con && u.cot === t.cot && u.tang < t.tang; })[0];
      var y = duoi && t.tang ? san - duoi.s * 0.78 - s * 0.94 : san - s * 0.94;
      t.y = y;
      t.el.style.width = s + 'px';
      t.el.style.height = s + 'px';
      t.el.style.left = (tamCot(t.cot) * W - s / 2 + (t.tang ? (t.cot % 2 ? 4 : -4) : 0)) + 'px';
      t.el.style.top = y + 'px';
      t.el.style.zIndex = 5 + t.tang;
      day[t.cot] = 1;
    });
    if (T.pha !== 'tha') datDay(T.ray * 0.6);
    datCang(T.x);
  }
  function datCang(x) { var c = G.$('#gtCang'); if (c) c.style.left = (x * 100) + '%'; }
  function datDay(px) { var d = G.$('#gtDay'); if (d) d.style.height = Math.max(4, px) + 'px'; }

  function veKe() {
    var box = G.$('#gtKe');
    if (!box) return;
    var html = '';
    for (var i = 0; i < G.cfg.soTo; i++) {
      var t = G.to(i), ke = T.ke[i];
      html += '<div class="gt-ke-to' + (i === T.luot && G.pha === 'choi' ? ' is-luot' : '') + '" data-i="' + i + '" style="--tc:' + t.mau + '">' +
        '<div class="gt-ke-dau"><img src="' + G.esc(t.hinh) + '" alt="" draggable="false"><b>' + G.esc(t.ten) + '</b>' +
          (T.x2[i] ? '<span class="gt-ke-x2" title="Lần gắp tới được nhân đôi">⭐ x2</span>' : '') +
          '<span class="gt-ke-diem">' + diemTo(i) + '</span></div>' +
        '<div class="gt-ke-ngan">' + (ke.length ? ke.map(function (x, k) {
          return '<span class="gt-ke-thu' + (x.moi ? ' is-moi' : '') + '" data-k="' + k + '" title="' + G.esc(THU[x.loai].ten + ' · ' + x.diem + ' điểm') + '">' +
            hinhThu(x.loai) + '<i' + (x.x2 ? ' class="is-x2"' : '') + '>' + x.diem + '</i></span>';
        }).join('') : '<span class="gt-ke-trong">Tủ còn trống</span>') + '</div>' +
      '</div>';
    }
    box.innerHTML = html;
    T.ke.forEach(function (ke) { ke.forEach(function (x) { x.moi = false; }); });
  }
  function tin(html) { var el = G.$('#gtTin'); if (el) el.innerHTML = html; }

  /* ---------------- luot choi ---------------- */
  function batLuot() {
    if (!conThu()) { ketThuc('Máy đã hết thú bông!'); return; }
    T.pha = 'cho';
    G.veVong('Vòng ' + T.vongHt + '/' + G.cfg.vong);
    veKe();
    var t = G.to(T.luot);
    tin('Lượt của <b style="color:' + t.mau + '">' + G.esc(t.ten) + '</b>');
    G.$('#gtTha').hidden = true;
    var h = G.$('#gtHoi');
    h.hidden = false;
    h.innerHTML = '❓ Câu hỏi cho ' + G.esc(t.ten) + ' <kbd>Enter</kbd>';
    h.focus();
  }
  function moCau() {
    if (T.pha !== 'cho') return;
    T.pha = 'hoi';
    G.$('#gtHoi').hidden = true;
    G.hoi({
      to: T.luot,
      phu: '🕹️ Đúng → được gắp thú',
      nutDung: '🕹️ Điều khiển cần gắp ▶',
      nutSai: 'Chuyển lượt ▶',
      xong: function (dung) {
        if (dung) choGap();
        else { G.toast('😅 ' + G.esc(G.to(T.luot).ten) + ' mất lượt gắp này'); hetLuot(); }
      }
    });
  }
  function choGap() {
    T.pha = 'lac';
    var t = G.to(T.luot);
    tin('<b style="color:' + t.mau + '">' + G.esc(t.ten) + '</b> — hô “THẢ!” đúng lúc nhé');
    G.$('#gtHoi').hidden = true;
    var b = G.$('#gtTha');
    b.hidden = false;
    b.disabled = false;
    b.focus();
    var cang = G.$('#gtCang');
    cang.classList.add('is-mo');
    cang.classList.remove('is-dong', 'is-di');
    // vi tri tinh theo dong ho (khong theo so khung hinh) — luc bam THA lay dung vi tri dang thay
    T.goc = Math.random() * Math.PI * 2;
    T.t0 = performance.now();
    cancelAnimationFrame(T.raf);
    var ve = G.van;
    var buoc = function () {
      if (ve !== G.van || T.pha !== 'lac') return;
      capNhatX();
      T.raf = requestAnimationFrame(buoc);
    };
    capNhatX();
    T.raf = requestAnimationFrame(buoc);
    // Thi qua ma QR: doi truong bam THA tren dien thoai; may chu gui lai thoi diem bam (ms tinh tu luc mo luot)
    if (G.qr) {
      b.hidden = true;
      tin('📱 <b style="color:' + t.mau + '">' + G.esc(t.ten) + '</b> — đội trưởng bấm <b>THẢ</b> trên điện thoại đúng lúc nhé!');
      G.qr.chon({ loai: 'tha', dongHo: function (t0) { T.t0 = t0; }, tuDong: function () { return null; } }, function (ms) { tha(ms); });
    }
  }
  function capNhatX(luc) {
    var goc = T.goc + ((typeof luc === 'number' ? luc : performance.now()) - T.t0) / 1000 * (TOC[G.cfg.x.toc] || TOC.vua);
    T.x = (X0 + X1) / 2 + (X1 - X0) / 2 * 1.02 * Math.sin(goc);
    datCang(T.x);
  }
  // ms (thi qua ma QR): tha dung vi tri can luc doi truong bam (ms sau luc mo luot); khong co thi lay vi tri hien tai
  function tha(ms) {
    if (T.pha !== 'lac') return;
    capNhatX(typeof ms === 'number' ? T.t0 + ms : null);
    T.pha = 'tha';
    cancelAnimationFrame(T.raf);
    var b = G.$('#gtTha');
    b.disabled = true;
    // cot gan nhat co thu
    var tot = null, kc = 9;
    for (var c = 0; c < SO_COT; c++) {
      var tt = thuTrenCung(c);
      if (!tt) continue;
      var d = Math.abs(T.x - tamCot(c));
      if (d < kc) { kc = d; tot = tt; }
    }
    var trung = tot && kc <= HANG[THU[tot.loai].hang].trung ? tot : null;
    var gan = tot && kc < (X1 - X0) / SO_COT * 0.75 ? tot : null; // ha xuong cham dau thu ben canh
    var dau = G.$('#gtDau'), hc = dau.offsetHeight || T.coCang;
    var dich = gan ? gan.y + gan.s * 0.5 - hc : T.san - hc - 2;
    tin('Cần gắp đang hạ xuống…');
    G.snd.roi();
    datDay(dich);
    var tuot = trung && Math.random() < HANG[THU[trung.loai].hang].tuot;
    G.sau(950, function () {
      var cang = G.$('#gtCang');
      cang.classList.remove('is-mo');
      cang.classList.add('is-dong');
      G.snd.cach();
      G.sau(380, function () {
        if (trung) {
          trung.cam = true;
          var el = trung.el;
          el.classList.add('is-cam');
          el.style.left = '50%';
          el.style.top = (hc * 0.62) + 'px';
          el.style.zIndex = '';
          dau.appendChild(el);
        }
        G.snd.len();
        datDay(T.ray * 0.6);
        if (trung && tuot) {
          G.sau(480, function () { roiLai(trung); });
          G.sau(1000, function () { ketQua(null, 'tuot', trung); });
        } else if (trung) {
          G.sau(1000, function () { veLo(trung); });
        } else {
          G.sau(1000, function () { ketQua(null, gan ? 'truot' : 'hut'); });
        }
      });
    });
  }
  // Thu tuot khoi can, roi lai cho cu trong may
  function roiLai(t) {
    t.cam = false;
    t.el.classList.remove('is-cam');
    t.el.classList.add('is-roi');
    G.$('#gtKinh').appendChild(t.el);
    datViTri();
    G.snd.rung();
    G.sau(600, function () { if (t.el) t.el.classList.remove('is-roi'); });
  }
  function veLo(t) {
    var cang = G.$('#gtCang');
    cang.classList.add('is-di');
    T.x = X_LO;
    datCang(T.x);
    G.sau(1000, function () {
      cang.classList.remove('is-dong');
      cang.classList.add('is-mo');
      var el = t.el, hc = G.$('#gtDau').offsetHeight || T.coCang;
      el.style.setProperty('--roi', Math.max(40, T.san - (T.ray * 0.6 + hc * 0.62) - t.s * 0.7) + 'px');
      el.classList.remove('is-cam');
      el.classList.add('is-xuong');
      G.snd.pop();
      G.sau(650, function () {
        cang.classList.remove('is-di');
        t.con = false;
        t.cam = false;
        el.remove();
        ketQua(t, 'trung');
      });
    });
  }
  function ketQua(t, kieu, tTuot) {
    var i = T.luot, ten = G.esc(G.to(i).ten);
    if (!t) {
      // gap hut / tuot: keo an ui 1 diem
      T.ke[i].push({ loai: 'keo', diem: 1, moi: true });
      veKe();
      G.snd.sai();
      var loi = kieu === 'tuot' ? '😱 Tuột mất ' + G.esc(THU[tTuot.loai].ten) + ' rồi!' : kieu === 'truot' ? '😅 Càng trượt khỏi thú bông!' : '😅 Gắp hụt rồi!';
      tin(loi + ' ' + ten + ' nhận <b>1 viên kẹo an ủi</b> 🍬');
      G.toast(loi + ' — ' + ten + ' được 1 kẹo an ủi (+1)');
      G.sau(1700, hetLuot);
      return;
    }
    var th = THU[t.loai];
    if (t.loai === 'x2') {
      T.x2[i] = true;
      G.bao('⭐ x2!', '');
      G.snd.sao();
      tin(ten + ' có <b>⭐ x2</b>: lần gắp được thú tiếp theo nhân đôi điểm!');
      veKe();
      G.sau(1900, hetLuot);
      return;
    }
    if (t.loai === 'qua') { batNgo(); return; }
    var diem = th.diem, nhan = false;
    if (T.x2[i]) { diem *= 2; nhan = true; T.x2[i] = false; }
    T.ke[i].push({ loai: t.loai, diem: diem, x2: nhan, moi: true });
    veKe();
    if (th.hang === 'quy') { G.bao('🌟 ' + th.ten + ' +' + diem, 'xanh'); G.snd.ken(); }
    else if (th.hang === 'hiem') { G.bao('✨ ' + th.ten + ' +' + diem, 'lam'); G.snd.sao(); }
    else G.snd.thang();
    tin(ten + ' gắp được <b>' + th.ten + '</b> +' + diem + (nhan ? ' (⭐ x2)' : '') + '!');
    G.sau(th.hang === 'thuong' ? 1300 : 1900, hetLuot);
  }

  /* ---------------- bong bat ngo ---------------- */
  function batNgo() {
    var i = T.luot, coCuop = [];
    for (var j = 0; j < G.cfg.soTo; j++) if (j !== i && T.ke[j].length) coCuop.push(j);
    var kq = coCuop.length && Math.random() < 0.5 ? 'cuop' : 'luot';
    var hinh = '<div class="ot-hop-hinh">' + hinhThu('qua', 'gt-svg') + '</div>';
    var el = G.hop({ html: hinh + '<h3>🎁 Bóng bất ngờ!</h3><p class="gt-quay" id="gtQuay">…</p>', mau: '#9b5de5' });
    G.snd.sao();
    var chu = ['🦝 Cướp 1 thú', '🔁 Thêm 1 lượt'], n = 0, q = el.querySelector('#gtQuay');
    var hen = setInterval(function () { if (q) q.textContent = chu[n++ % 2]; G.snd.bam(); }, 140);
    G.sau(1500, function () {
      clearInterval(hen);
      if (kq === 'luot' && G.qr) {
        // qua ma QR: tu sang luot gap them, doi truong bam THA tiep tren dien thoai
        G.hop({ html: hinh + '<h3>🔁 Thêm 1 lượt gắp!</h3><p>' + G.esc(G.to(i).ten) + ' được gắp thêm một lần nữa — đội trưởng chuẩn bị bấm THẢ!</p>', mau: '#9b5de5' });
        G.snd.thang();
        G.sau(1800, function () { G.dongHop(); choGap(); });
        return;
      }
      if (kq === 'luot') {
        G.hop({
          html: hinh + '<h3>🔁 Thêm 1 lượt gắp!</h3><p>' + G.esc(G.to(i).ten) + ' được điều khiển cần gắp thêm một lần nữa — không cần trả lời câu hỏi.</p>',
          mau: '#9b5de5',
          nut: [{ t: '🕹️ Gắp tiếp ▶', cls: 'ot-nut--vang ot-nut--to', phim: 'enter', fn: function () { G.dongHop(); choGap(); } }]
        });
        G.snd.thang();
        return;
      }
      G.hop({
        html: hinh + '<h3>🦝 Cướp 1 thú bông!</h3><p>' + G.esc(G.to(i).ten) + ' chọn tổ muốn “mượn” một thú (chọn ngẫu nhiên trong tủ):</p>',
        mau: '#9b5de5',
        nut: coCuop.map(function (j, k) {
          var t = G.to(j);
          return { t: '<img class="gt-hop-to" src="' + G.esc(t.hinh) + '" alt="">' + G.esc(t.ten) + ' <small>(' + T.ke[j].length + ' món)</small>', cls: 'gt-nut-to', phim: String(k + 1),
            tat: !!G.qr, fn: function () { G.dongHop(); cuop(j); } };
        })
      });
      clearInterval(hen);
      // qua ma QR: doi truong chon to bi "muon" thu tren dien thoai (het gio thi may chon ngau nhien)
      if (G.qr) {
        G.qr.chon({
          loai: 'cuop',
          ds: coCuop.map(function (j) { return { v: String(j), nhan: G.to(j).ten, phu: T.ke[j].length + ' món · ' + diemTo(j) + ' điểm' }; }),
          tuDong: function () { return coCuop[Math.floor(Math.random() * coCuop.length)]; }
        }, function (j) {
          j = +j;
          if (coCuop.indexOf(j) < 0) j = coCuop[0];
          G.dongHop();
          cuop(j);
        });
      }
    });
    setTimeout(function () { clearInterval(hen); }, 1600);
  }
  function cuop(j) {
    var i = T.luot, ke = T.ke[j];
    // uu tien thu that (khong phai keo)
    var thu = ke.map(function (x, k) { return k; }).filter(function (k) { return ke[k].loai !== 'keo'; });
    var k = (thu.length ? thu : ke.map(function (x, k2) { return k2; }))[Math.floor(Math.random() * (thu.length || ke.length))];
    var x = ke.splice(k, 1)[0];
    x.moi = true;
    T.ke[i].push(x);
    veKe();
    G.snd.truot();
    G.bao('🦝 +' + THU[x.loai].ten, 'do');
    tin(G.esc(G.to(i).ten) + ' lấy <b>' + THU[x.loai].ten + '</b> (' + x.diem + ' điểm) từ ' + G.esc(G.to(j).ten) + '!');
    G.sau(1900, hetLuot);
  }

  function hetLuot() {
    if (G.pha !== 'choi') return;
    var cang = G.$('#gtCang');
    if (cang) { cang.classList.remove('is-dong', 'is-di'); cang.classList.add('is-mo'); }
    // thi qua ma QR: bao xong luot cua to nay (kem dong ket qua) — lop-onto-qr.js chuyen to / vong
    if (G.qr) { var el = G.$('#gtTin'); veKe(); G.qr.het(el ? el.textContent : ''); return; }
    T.luot++;
    if (T.luot >= G.cfg.soTo) {
      T.luot = 0;
      T.vongHt++;
      if (T.vongHt > G.cfg.vong) { ketThuc(''); return; }
    }
    if (!conThu()) { ketThuc('Máy đã hết thú bông!'); return; }
    batLuot();
  }
  function ketThuc(loi) {
    cancelAnimationFrame(T.raf);
    T.pha = 'het';
    var hang = [];
    for (var i = 0; i < G.cfg.soTo; i++) {
      var ke = T.ke[i];
      var phu = '<div class="gt-tu-buc">' + ke.slice(0, 15).map(function (x) { return '<span>' + hinhThu(x.loai) + '</span>'; }).join('') +
        (ke.length > 15 ? '<em>+' + (ke.length - 15) + '</em>' : '') + '</div>';
      hang.push({ i: i, diem: diemTo(i), nho: ke.filter(function (x) { return x.loai !== 'keo'; }).length, phu: phu,
        ghi: ke.slice(0, 6).map(function (x) { return '<span class="gt-con-thu">' + hinhThu(x.loai) + '</span>'; }).join('') });
    }
    G.ketThuc({ hang: hang, don: 'điểm', tieuDe: 'Tủ thú vô địch', loi: (loi ? loi + ' · ' : '') + 'Điểm = tổng điểm thú bông và kẹo trong tủ' });
  }

  window.LopOnTo.dangKy({
    id: 'gapthu',
    ten: 'Gắp thú bông',
    logo: LOGO,
    nhac: 'vui',
    luat: 'Các tổ lần lượt trả lời câu hỏi. <b>Đúng</b> thì được điều khiển cần gắp: cần tự lắc qua lại, cô bấm <b>THẢ</b> (phím Space) đúng lúc để gắp thú ngay bên dưới. ' +
      'Thú thường 1 điểm · thú hiếm 3 điểm · siêu hiếm 5 điểm (nhỏ hơn, dễ tuột). Bóng <b>⭐ x2</b> nhân đôi lần gắp sau, bóng <b>🎁 bất ngờ</b> cho cướp 1 thú hoặc thêm 1 lượt. ' +
      'Gắp hụt được 1 kẹo an ủi. <b>Sai</b> thì mất lượt.',
    vong: { ten: 'Số vòng', ds: [3, 4, 5, 6], md: 4 },
    them: [{ k: 'toc', ten: 'Tốc độ cần gắp', md: 'vua', ds: [['cham', '🐢 Chậm'], ['vua', '🐇 Vừa'], ['nhanh', '⚡ Nhanh']] }],
    batDau: function (g) {
      G = g;
      T = moi();
      for (var i = 0; i < G.cfg.soTo; i++) { T.ke.push([]); T.x2.push(false); }
      taoMay();
      T.x = (X0 + X1) / 2;
      veKhung();
      batLuot();
    },
    // Thi qua ma QR (lop-onto-qr.js): dung canh may gap, moi to duoc thuong gap mot luot (doi truong bam THA tren dien thoai)
    qr: {
      batDau: function (g) {
        G = g;
        T = moi();
        for (var i = 0; i < G.cfg.soTo; i++) { T.ke.push([]); T.x2.push(false); }
        taoMay();
        T.x = (X0 + X1) / 2;
        veKhung();
        tin('📱 Cả lớp trả lời trên điện thoại — tổ đủ bạn đúng được gắp thú!');
      },
      hanh: function (i) { T.luot = i; veKe(); choGap(); },
      xong: function () { return !T || !conThu(); },
      ketThuc: function () { if (T) ketThuc(conThu() ? '' : 'Máy đã hết thú bông!'); }
    },
    doiCo: function () { if (T && G.$('#gtKinh')) datViTri(); },
    phim: function (e, g, k) {
      if (!T) return false;
      if ((k === ' ' || k === 'enter') && T.pha === 'lac') { tha(); return true; }
      if (k === 'enter' && T.pha === 'cho') { moCau(); return true; }
      if (k === ' ' && T.pha === 'cho') { moCau(); return true; }
      return false;
    },
    dong: function () { if (T) cancelAnimationFrame(T.raf); T = null; }
  });
})();
