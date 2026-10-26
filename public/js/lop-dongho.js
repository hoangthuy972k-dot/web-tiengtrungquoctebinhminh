/* Dong ho dem nguoc vui — man chieu len lop (che do lop hoc /lop).
   9 kieu hinh ve chon tu bang xem truoc co hoat hinh: bong bay, dong ho cat,
   ten lua, duong dua, nen, hoa no, rua va tho, banh tron, so lon.
   Hai che do:
   · toan man hinh — bat phim tat (Space, R, mui ten, F, M, T, N, K, 1-9, Esc);
   · o noi nho goc phai duoi — keo tha duoc, KHONG bat phim de tro choi phia
     duoi van dung phim tat cua no.
   Dem gio theo moc performance.now() (khong cong don tung nhip) nen khong bi
   troi, van dung khi tab bi an.
   Mo bang window.LopDongHo.mo({ giay: 60, nho: false, chay: false, kieu: 'bong' }). */
(function () {
  'use strict';

  var PREF_KEY = 'hyv_dongho';
  var MAX_MS = 5999000; // 99:59
  var PRESET = [10, 30, 60, 120, 180, 300, 600];
  var MAU = ['#ff5d73', '#ffb02e', '#ffd23f', '#4ade80', '#38bdf8', '#a78bfa', '#f472b6', '#fb923c'];
  var THU_TU = ['bong', 'cat', 'tenlua', 'duong', 'nen', 'hoa', 'rua', 'banh', 'so'];

  var S = {
    built: false, mo: false, nho: false, kieu: 'bong', am: true, tich: false, coPref: false,
    vt: null, canh: null, xem: [], xemMo: false, xemT0: 0, truoc: null, chuSo: '', cuoi: null
  };
  // tong: do dai luot (ms); con: thoi gian con lai tai moc; moc: performance.now() luc bat dau/chinh
  var T = { tong: 60000, con: 60000, moc: 0, chay: false, daChay: false, xong: false, giayCuoi: -1 };
  var root, mini, soEl, miniSoEl, miniTien, raf = 0, hen = 0, uid = 0, keo = null;

  function $(sel) { return root.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
  function m$(sel) { return mini.querySelector(sel); }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function giam() { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }
  function bayGio() { return window.performance && performance.now ? performance.now() : Date.now(); }
  function kep(v, a, b) { return v < a ? a : v > b ? b : v; }
  function f1(n) { return Math.round(n * 10) / 10; }
  function f3(n) { return Math.round(n * 1000) / 1000; }
  function dinhDang(s) { var m = Math.floor(s / 60), g = s % 60; return m + ':' + (g < 10 ? '0' : '') + g; }
  function nhanGiay(g) { return g < 60 ? g + ' giây' : (g / 60) + ' phút'; }
  function hien(el, on) {
    if (el && el._h !== on) { el._h = on; el.style.visibility = on ? '' : 'hidden'; }
  }
  // Diem tren duong tron, goc tinh theo chieu kim dong ho tu dinh (do)
  function diem(cx, cy, r, deg) {
    var a = deg * Math.PI / 180;
    return [cx + r * Math.sin(a), cy - r * Math.cos(a)];
  }
  // Hinh quat tu goc a0 den a1 (do, chieu kim dong ho tu dinh)
  function quat(cx, cy, r, a0, a1) {
    var span = a1 - a0, p0, p1;
    if (span <= 0.05) return '';
    if (span >= 359.95) {
      return 'M' + cx + ' ' + (cy - r) + 'A' + r + ' ' + r + ' 0 1 1 ' + cx + ' ' + (cy + r) +
        'A' + r + ' ' + r + ' 0 1 1 ' + cx + ' ' + (cy - r) + 'Z';
    }
    p0 = diem(cx, cy, r, a0); p1 = diem(cx, cy, r, a1);
    return 'M' + cx + ' ' + cy + 'L' + f1(p0[0]) + ' ' + f1(p0[1]) +
      'A' + r + ' ' + r + ' 0 ' + (span > 180 ? 1 : 0) + ' 1 ' + f1(p1[0]) + ' ' + f1(p1[1]) + 'Z';
  }
  function ngoiSao(n, R, r) {
    var d = '', i, a, rr;
    for (i = 0; i < n * 2; i++) {
      a = Math.PI * i / n - Math.PI / 2;
      rr = i % 2 ? r : R;
      d += (i ? 'L' : 'M') + f1(Math.cos(a) * rr) + ' ' + f1(Math.sin(a) * rr);
    }
    return d + 'Z';
  }

  /* ---------------- am thanh (WebAudio, khong can file) ---------------- */
  var ac = null, onBuf = null;
  function amCtx() {
    if (!S.am) return null;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ac) { try { ac = new AC(); } catch (e) { return null; } }
    if (ac.state === 'suspended' && ac.resume) ac.resume();
    return ac;
  }
  function tone(freq, dur, type, vol, delay, endFreq) {
    var c = amCtx();
    if (!c) return;
    var t0 = c.currentTime + (delay || 0);
    var o = c.createOscillator(), g = c.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(c.destination);
    o.start(t0); o.stop(t0 + dur + 0.03);
  }
  // Tieng xao (nhieu trang qua bo loc): no bong, vut ten lua, thoi nen
  function on(dur, vol, delay, tu, den, loai, tan) {
    var c = amCtx();
    if (!c) return;
    if (!onBuf) {
      var n = Math.floor(c.sampleRate * 2.5), d, i;
      onBuf = c.createBuffer(1, n, c.sampleRate);
      d = onBuf.getChannelData(0);
      for (i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    }
    var t0 = c.currentTime + (delay || 0);
    var src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    src.buffer = onBuf;
    f.type = loai || 'bandpass';
    f.Q.value = 0.9;
    f.frequency.setValueAtTime(tu, t0);
    if (den) f.frequency.exponentialRampToValueAtTime(den, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + (tan || 0.01));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(c.destination);
    src.start(t0); src.stop(t0 + dur + 0.05);
  }
  function chuong(f, delay, vol) {
    tone(f, 1.6, 'sine', vol, delay);
    tone(f * 2.76, 0.6, 'sine', vol * 0.3, delay);
    tone(f * 5.4, 0.25, 'sine', vol * 0.12, delay);
  }
  function sndTich(s) { tone(s % 2 ? 1700 : 1250, 0.03, 'triangle', 0.09); }
  function sndBip(s) {
    var f = s === 1 ? 1320 : 990;
    tone(f, 0.18, 'sine', 0.2);
    tone(f, 0.12, 'square', 0.05);
  }

  /* ---------------- chi tiet ve dung chung ---------------- */
  function may(x, y, s) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><path class="dh-may" fill="#fff" opacity=".92" ' +
      'd="M10 22C3 22 0 17 2 12C4 7 9 6 12 8C14 2 21 0 26 3C30 0 37 2 38 8C43 8 46 12 45 17C44 21 41 22 38 22Z"/></g>';
  }
  function saoLap(ds, mau) {
    return '<g class="dh-sao">' + ds.map(function (d) {
      return '<g transform="translate(' + d[0] + ' ' + d[1] + ') scale(' + d[2] + ')"><path class="dh-sao-x" style="animation-delay:' + d[3] + 's" ' +
        'd="M0-6L1.5-1.5L6 0L1.5 1.5L0 6L-1.5 1.5L-6 0L-1.5-1.5Z" fill="' + (mau || '#ffd23f') + '"/></g>';
    }).join('') + '</g>';
  }
  function phao(cx, cy, n) {
    var s = '<g class="dh-phao" transform="translate(' + cx + ' ' + cy + ')">', i, a, d;
    for (i = 0; i < n; i++) {
      a = i / n * Math.PI * 2 + Math.random() * 0.5;
      d = 48 + Math.random() * 46;
      s += '<rect x="-2.2" y="-4" width="4.4" height="8" rx="1.2" fill="' + MAU[i % MAU.length] + '" style="--dx:' +
        f1(Math.cos(a) * d) + 'px;--dy:' + f1(Math.sin(a) * d * 0.85 + 22) + 'px;--rz:' + Math.round(Math.random() * 540 - 270) + 'deg"/>';
    }
    return s + '</g>';
  }
  function cay(x, y) {
    return '<rect x="' + (x - 2) + '" y="' + y + '" width="4" height="10" rx="1" fill="#8a5a33"/>' +
      '<circle cx="' + x + '" cy="' + (y - 4) + '" r="9" fill="#4fae5a"/><circle cx="' + (x - 3) + '" cy="' + (y - 7) + '" r="4" fill="#74c972"/>';
  }

  // Duong dua: duong cong hinh chu S, phang o hai dau; lay mau san de xe chay deu
  var DUONG = (function () {
    var n = 64, pts = [], len = [0], i, t, dx, dy;
    for (i = 0; i <= n; i++) {
      t = i / n;
      pts.push([20 + 148 * t, 128 + 26 * Math.sin(2 * Math.PI * t) * Math.sin(Math.PI * t)]);
      if (i) {
        dx = pts[i][0] - pts[i - 1][0]; dy = pts[i][1] - pts[i - 1][1];
        len.push(len[i - 1] + Math.sqrt(dx * dx + dy * dy));
      }
    }
    return { pts: pts, len: len, d: 'M' + pts.map(function (q) { return f1(q[0]) + ' ' + f1(q[1]); }).join('L') };
  })();
  function diemDuong(p) {
    var L = DUONG.len, n = L.length, dai = p * L[n - 1], i = 1;
    while (i < n - 1 && L[i] < dai) i++;
    var a = DUONG.pts[i - 1], b = DUONG.pts[i], k = kep((dai - L[i - 1]) / (L[i] - L[i - 1] || 1), 0, 1);
    return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI];
  }

  var KHOI = [[100, 182, 15], [82, 184, 13], [118, 184, 13], [64, 186, 11], [136, 186, 11], [48, 189, 9], [152, 189, 9], [100, 172, 10]];
  var HOA_NU = [0, 12, -12, 8, -8, 4, -4, 10, -10, 6];
  var VUN = [[24, 42], [70, 56], [128, 32], [190, 52], [246, 40], [306, 57]];

  /* ---------------- 9 kieu dong ho ----------------
     svg(u): ve khung (u = so rieng cho id clipPath/gradient)
     ve(r, p): cap nhat theo tien do p (0 = vua bat dau, 1 = het gio); r = cac phan tu [data-r]
     am(): tieng ket thuc rieng cua kieu do */
  var KIEU = {
    bong: {
      ten: 'Bóng bay', ic: '🎈', phu: 'Bùm!',
      mo: 'Bơm bóng phồng dần, hết giờ bóng nổ “bùm”, giấy màu tung bay.',
      svg: function () {
        return '<svg viewBox="0 0 200 200" aria-hidden="true">' +
          may(10, 26, 0.9) + may(142, 14, 0.7) +
          '<path data-r="ong" fill="none" stroke="#6c7a99" stroke-width="3.2" stroke-linecap="round"/>' +
          '<g class="dh-bom">' +
            '<g class="dh-bom-tay"><rect x="158" y="118" width="4" height="34" rx="2" fill="#8b95a8"/><rect x="146" y="113" width="28" height="8" rx="4" fill="#ffb02e"/></g>' +
            '<rect x="147" y="146" width="26" height="42" rx="7" fill="#4d7cfe"/>' +
            '<rect x="151" y="152" width="5" height="30" rx="2.5" fill="#fff" opacity=".35"/>' +
            '<rect x="142" y="186" width="36" height="8" rx="4" fill="#2f4fb8"/>' +
          '</g>' +
          '<g data-r="bong"><g class="dh-bong-lac">' +
            '<path d="M0-58C30-58 46-34 46-8C46 20 22 40 2 44H-2C-22 40-46 20-46-8C-46-34-30-58 0-58Z" fill="#ff5d73"/>' +
            '<path d="M-5 51L0 43L5 51Z" fill="#e0445a"/>' +
            '<ellipse cx="-21" cy="-30" rx="8" ry="15" transform="rotate(28 -21 -30)" fill="#fff" opacity=".5"/>' +
            '<circle cx="-22" cy="6" r="5" fill="#ffa3b1" opacity=".8"/><circle cx="22" cy="6" r="5" fill="#ffa3b1" opacity=".8"/>' +
            '<circle cx="-13" cy="-6" r="3.6" fill="#7a1f33"/><circle cx="13" cy="-6" r="3.6" fill="#7a1f33"/>' +
            '<path d="M-10 8Q0 17 10 8" fill="none" stroke="#7a1f33" stroke-width="3.2" stroke-linecap="round"/>' +
          '</g></g>' +
          phao(95, 92, 22) +
          '<g transform="translate(95 92)"><g class="dh-bum-x">' +
            '<path d="' + ngoiSao(9, 30, 17) + '" fill="#ffd23f" stroke="#ff9f1c" stroke-width="2" stroke-linejoin="round"/>' +
            '<text y="5.5" text-anchor="middle" font-size="15" font-weight="800" fill="#d6336c">Bùm!</text>' +
          '</g></g>' +
        '</svg>';
      },
      ve: function (r, p) {
        var s = 0.32 + 0.68 * p, ky = 92 + 51 * s;
        r.bong.setAttribute('transform', 'translate(95 92) scale(' + f3(s) + ')');
        r.ong.setAttribute('d', 'M95 ' + f1(ky) + 'C95 ' + f1(ky + 26) + ' 118 188 147 177');
        r.el.classList.toggle('is-cang', p > 0.85);
      },
      am: function () {
        on(0.2, 0.9, 0, 2200, 300, 'lowpass');
        tone(170, 0.2, 'sine', 0.45, 0, 45);
        tone(1568, 0.14, 'triangle', 0.12, 0.28);
        tone(2093, 0.16, 'triangle', 0.12, 0.4);
        tone(2637, 0.3, 'triangle', 0.1, 0.52);
      }
    },

    cat: {
      ten: 'Đồng hồ cát', ic: '⏳', phu: 'Cát đã chảy hết',
      mo: 'Cát chảy từ bầu trên xuống bầu dưới, nhẹ nhàng và dễ nhìn.',
      svg: function (u) {
        var G = 'M62 32H138C138 70 108 86 103 100C108 114 138 130 138 168H62C62 130 92 114 97 100C92 86 62 70 62 32Z';
        return '<svg viewBox="0 0 200 200" aria-hidden="true">' +
          '<defs><clipPath id="dhcl' + u + '"><path d="' + G + '"/></clipPath></defs>' +
          '<ellipse cx="100" cy="188" rx="64" ry="6" fill="#000" opacity=".08"/>' +
          '<g class="dh-cat-quay">' +
            '<path d="' + G + '" fill="#f4fbff" fill-opacity=".75"/>' +
            '<g clip-path="url(#dhcl' + u + ')">' +
              '<rect data-r="tren" x="55" y="40" width="90" height="61" fill="#f2b84b"/>' +
              '<line data-r="dong" class="dh-cat-dong" x1="100" y1="98" x2="100" y2="170" stroke="#e9a93a" stroke-width="2.6" stroke-dasharray="3 3"/>' +
              '<path data-r="duoi" fill="#f2b84b"/>' +
            '</g>' +
            '<path d="' + G + '" fill="none" stroke="#a9cfe6" stroke-width="3"/>' +
            '<path d="M70 38C72 60 84 76 92 88M70 162C72 140 82 126 90 116" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".75"/>' +
            '<rect x="50" y="31" width="6" height="138" rx="3" fill="#8a5225"/><rect x="144" y="31" width="6" height="138" rx="3" fill="#8a5225"/>' +
            '<rect x="44" y="20" width="112" height="13" rx="6" fill="#b06a32"/><rect x="44" y="167" width="112" height="13" rx="6" fill="#b06a32"/>' +
            '<rect x="50" y="23" width="100" height="3" rx="1.5" fill="#d08a4c"/><rect x="50" y="170" width="100" height="3" rx="1.5" fill="#d08a4c"/>' +
          '</g>' +
          saoLap([[34, 52, 1.2, 0], [168, 66, 1, 0.4], [30, 150, 0.9, 0.8], [172, 140, 1.3, 0.2]]) +
        '</svg>';
      },
      ve: function (r, p) {
        var h = 60 * Math.pow(1 - p, 0.6);
        var h2 = 54 * Math.pow(p, 0.85), top = 172 - h2, k = Math.min(10, h2), e = top + Math.min(6, h2);
        r.tren.setAttribute('y', f1(100 - h));
        r.tren.setAttribute('height', f1(h + 1));
        r.duoi.setAttribute('d', 'M50 173V' + f1(e) + 'Q100 ' + f1(top - k) + ' 150 ' + f1(e) + 'V173Z');
        r.dong.setAttribute('y2', f1(top - k + 2));
        hien(r.dong, p < 1);
      },
      am: function () { chuong(1319, 0, 0.2); chuong(1047, 0.45, 0.2); chuong(1568, 0.9, 0.12); }
    },

    tenlua: {
      ten: 'Tên lửa', ic: '🚀', phu: 'Cất cánh!', toi: true,
      mo: 'Tên lửa trên bệ phóng, khói dày dần — hết giờ là phóng vút lên trời.',
      svg: function () {
        var s = '<svg viewBox="0 0 200 200" aria-hidden="true">', i;
        for (i = 0; i < 18; i++) {
          s += '<circle class="dh-sao-dem" cx="' + Math.round(8 + Math.random() * 184) + '" cy="' + Math.round(6 + Math.random() * 120) +
            '" r="' + (Math.random() < 0.3 ? 1.6 : 1) + '" fill="#fff" style="animation-delay:-' + f1(Math.random() * 3) + 's"/>';
        }
        s += '<path d="M34 20A15 15 0 1 0 50 42A12 12 0 1 1 34 20Z" fill="#ffe9a8"/>' +
          '<ellipse cx="100" cy="190" rx="96" ry="11" fill="#2b3566"/>' +
          '<g fill="none" stroke="#8a93b8" stroke-width="2.4"><path d="M148 64V184M162 64V184M148 64H162M148 82L162 98M162 82L148 98M148 114L162 130M162 114L148 130M148 146L162 162M162 146L148 162M148 106H118"/></g>' +
          '<rect x="66" y="172" width="68" height="9" rx="3" fill="#6b7395"/><rect x="74" y="167" width="52" height="6" rx="2" fill="#8a93b8"/>' +
          '<g class="dh-tl"><g class="dh-tl-rung">' +
            '<g data-r="lua"><g class="dh-tl-lua">' +
              '<path d="M-10 0Q-8 22 0 40Q8 22 10 0Z" fill="#ff7a1c"/><path d="M-7 0Q-5 16 0 28Q5 16 7 0Z" fill="#ffb02e"/><path d="M-4 0Q-2 9 0 16Q2 9 4 0Z" fill="#fff3a8"/>' +
            '</g></g>' +
            '<path d="M85 128L68 158L70 168L86 156Z" fill="#e8453c"/><path d="M115 128L132 158L130 168L114 156Z" fill="#e8453c"/>' +
            '<path d="M100 56C114 70 118 96 116 150H84C82 96 86 70 100 56Z" fill="#f4f6fb"/>' +
            '<path d="M100 56C108 64 112 72 113.5 82H86.5C88 72 92 64 100 56Z" fill="#e8453c"/>' +
            '<path d="M108 88C111 104 111 126 110 146" fill="none" stroke="#d6dbe8" stroke-width="3" stroke-linecap="round"/>' +
            '<circle cx="100" cy="104" r="10" fill="#5ec8f2" stroke="#3a4a6b" stroke-width="4"/><circle cx="96.5" cy="100.5" r="3" fill="#fff" opacity=".7"/>' +
            '<path d="M90 150H110L113 160H87Z" fill="#6b7488"/>' +
            '<path d="M100 132V150" stroke="#e8453c" stroke-width="5"/>' +
          '</g></g>' +
          '<g class="dh-khoi">';
        for (i = 0; i < KHOI.length; i++) {
          s += '<circle data-r="k' + i + '" cx="' + KHOI[i][0] + '" cy="' + KHOI[i][1] + '" r="0" fill="' + (i % 2 ? '#d7dcea' : '#eef0f7') + '"/>';
        }
        return s + '</g></svg>';
      },
      ve: function (r, p) {
        var k = kep((p - 0.5) / 0.5, 0, 1), i, q;
        r.lua.setAttribute('transform', 'translate(100 159) scale(' + f3(k) + ')');
        for (i = 0; i < KHOI.length; i++) {
          q = KHOI[i];
          r['k' + i].setAttribute('r', f1(q[2] * kep(p * 1.6 - i * 0.08, 0, 1)));
        }
      },
      am: function () {
        on(2.2, 0.45, 0, 260, 3400, 'bandpass', 0.7);
        tone(70, 1.5, 'sawtooth', 0.1, 0, 38);
        tone(440, 0.7, 'triangle', 0.07, 1.1, 1760);
      }
    },

    duong: {
      ten: 'Đường đua', ic: '🏁', phu: 'Về đích!',
      mo: 'Xe đua nhỏ chạy dọc đường cong, hết giờ là cán vạch đích.',
      svg: function () {
        var s = '<svg viewBox="0 0 200 200" aria-hidden="true">', i, j;
        s += '<g class="dh-mattroi"><circle cx="30" cy="30" r="13" fill="#ffd23f"/>' +
          '<path d="M30 9V4M30 51V56M9 30H4M51 30H56M15 15L11 11M45 45L49 49M45 15L49 11M15 45L11 49" stroke="#ffc21a" stroke-width="3" stroke-linecap="round"/></g>' +
          may(118, 16, 0.75) +
          '<ellipse cx="100" cy="134" rx="98" ry="58" fill="#7cc35b"/><ellipse cx="100" cy="129" rx="92" ry="51" fill="#9ad67b"/>' +
          cay(40, 96) + cay(150, 158) + cay(88, 88) +
          '<circle cx="62" cy="172" r="5" fill="#6cbf5a"/><circle cx="68" cy="174" r="4" fill="#5aa84a"/>' +
          '<path d="' + DUONG.d + '" fill="none" stroke="#f4efe2" stroke-width="23" stroke-linecap="round" stroke-linejoin="round"/>' +
          '<path d="' + DUONG.d + '" fill="none" stroke="#5b5f6e" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>' +
          '<path d="' + DUONG.d + '" fill="none" stroke="#fff" stroke-width="1.4" stroke-dasharray="5 5"/>' +
          '<path data-r="vet" d="' + DUONG.d + '" pathLength="100" fill="none" stroke="#ffd23f" stroke-width="3" stroke-linecap="round" stroke-dasharray="0 100"/>' +
          '<rect x="21" y="119" width="3" height="18" fill="#fff"/>';
        for (i = 0; i < 2; i++) {
          for (j = 0; j < 6; j++) s += '<rect x="' + (161 + i * 3) + '" y="' + (119 + j * 3) + '" width="3" height="3" fill="' + ((i + j) % 2 ? '#fff' : '#222') + '"/>';
        }
        s += '<rect x="171" y="86" width="2.6" height="44" rx="1.3" fill="#5b5f6e"/><g class="dh-co">';
        for (i = 0; i < 4; i++) {
          for (j = 0; j < 3; j++) s += '<rect x="' + (173.6 + i * 5) + '" y="' + (86 + j * 5) + '" width="5" height="5" fill="' + ((i + j) % 2 ? '#fff' : '#222') + '"/>';
        }
        s += '</g>' +
          '<g data-r="xe"><g class="dh-xe-nhun">' +
            '<g class="dh-xe-gio"><path d="M-20-8H-27M-19-4H-31M-20 0H-26" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></g>' +
            '<path d="M-15-1V-6Q-15-9-11-9H-6L-2-15H7L11-9H13Q16-9 16-5V-1Z" fill="#ff4d5e"/>' +
            '<path d="M-1-14H6L9-9.5H-3.5Z" fill="#c9eeff"/>' +
            '<path d="M-14-5H15" stroke="#fff" stroke-width="1.4"/>' +
            '<circle cx="15" cy="-6" r="1.3" fill="#fff3a8"/>' +
            '<g transform="translate(-8 -1)"><g class="dh-banh-xe"><circle r="4.2" fill="#2b2a3a"/><circle r="1.6" fill="#d9dde6"/><path d="M0-3.4V3.4" stroke="#d9dde6" stroke-width="1"/></g></g>' +
            '<g transform="translate(9 -1)"><g class="dh-banh-xe"><circle r="4.2" fill="#2b2a3a"/><circle r="1.6" fill="#d9dde6"/><path d="M0-3.4V3.4" stroke="#d9dde6" stroke-width="1"/></g></g>' +
          '</g></g>' +
          saoLap([[182, 74, 1, 0], [158, 80, 0.8, 0.5], [190, 112, 0.9, 0.3]]) +
        '</svg>';
        return s;
      },
      ve: function (r, p) {
        var d = diemDuong(p);
        r.xe.setAttribute('transform', 'translate(' + f1(d[0]) + ' ' + f1(d[1]) + ') rotate(' + f1(d[2]) + ')');
        r.vet.setAttribute('stroke-dasharray', f1(p * 100) + ' 100');
        hien(r.vet, p > 0.004);
      },
      am: function () {
        tone(392, 0.14, 'square', 0.1); tone(494, 0.14, 'square', 0.06);
        tone(392, 0.26, 'square', 0.1, 0.2); tone(494, 0.26, 'square', 0.06, 0.2);
        tone(523, 0.12, 'triangle', 0.18, 0.6); tone(659, 0.12, 'triangle', 0.18, 0.72);
        tone(784, 0.12, 'triangle', 0.18, 0.84); tone(1047, 0.5, 'triangle', 0.18, 0.96);
      }
    },

    nen: {
      ten: 'Ngọn nến', ic: '🕯️', phu: 'Nến đã tắt', toi: true,
      mo: 'Cây nến chảy dần, ngọn lửa lung linh — hết giờ thì lửa tắt, khói bay lên.',
      svg: function (u) {
        return '<svg viewBox="0 0 200 200" aria-hidden="true">' +
          '<defs>' +
            '<linearGradient id="dhng' + u + '" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#d94a63"/><stop offset=".35" stop-color="#ff93a4"/><stop offset=".7" stop-color="#ff6f86"/><stop offset="1" stop-color="#c9405a"/></linearGradient>' +
            '<radialGradient id="dhns' + u + '"><stop offset="0" stop-color="#fff1b0" stop-opacity=".75"/><stop offset=".45" stop-color="#ffcf6b" stop-opacity=".25"/><stop offset="1" stop-color="#ffcf6b" stop-opacity="0"/></radialGradient>' +
          '</defs>' +
          '<g data-r="sang"><circle class="dh-nen-sang" r="48" fill="url(#dhns' + u + ')"/></g>' +
          '<path d="M150 176C168 170 170 188 152 188" fill="none" stroke="#e3b04b" stroke-width="4.5" stroke-linecap="round"/>' +
          '<ellipse cx="100" cy="183" rx="56" ry="11" fill="#b07c26"/><ellipse cx="100" cy="179" rx="56" ry="10" fill="#e3b04b"/>' +
          '<ellipse cx="100" cy="178" rx="44" ry="6.5" fill="#c9952f"/>' +
          '<ellipse data-r="vung" cx="100" cy="178" rx="24" ry="3.5" fill="#ff8a9c"/>' +
          '<rect data-r="than" x="78" width="44" rx="5" fill="url(#dhng' + u + ')"/>' +
          '<rect data-r="g1" x="81" width="6" height="16" rx="3" fill="#ffa3b3"/>' +
          '<rect data-r="g2" x="111" width="5" height="10" rx="2.5" fill="#ffa3b3"/>' +
          '<ellipse data-r="dinh" cx="100" rx="22" ry="4.5" fill="#ffc0cb"/>' +
          '<line data-r="bac" x1="100" x2="100" stroke="#3a2a2a" stroke-width="2.2" stroke-linecap="round"/>' +
          '<g data-r="lua"><g class="dh-nen-lua">' +
            '<path d="M0 0C-10-6-9-20 0-34C9-20 10-6 0 0Z" fill="#ffb02e"/>' +
            '<path d="M0-2C-5-6-4-14 0-21C4-14 5-6 0-2Z" fill="#fff3a8"/>' +
            '<ellipse cx="0" cy="-3" rx="3" ry="2.4" fill="#7fb7ff" opacity=".7"/>' +
          '</g></g>' +
          '<g data-r="khoi"><g class="dh-nen-khoi">' +
            '<path d="M0 0C-6-7 6-12 0-20C-6-27 6-32 0-40" fill="none" stroke="#d8d0e0" stroke-width="2.6" stroke-linecap="round"/>' +
            '<path d="M-6 2C-12-5 0-10-6-18" fill="none" stroke="#bfb5cc" stroke-width="2" stroke-linecap="round"/>' +
            '<path d="M6 2C0-5 12-10 6-18" fill="none" stroke="#bfb5cc" stroke-width="2" stroke-linecap="round"/>' +
          '</g></g>' +
        '</svg>';
      },
      ve: function (r, p) {
        var H = 16 + 110 * (1 - p), y = 178 - H;
        r.than.setAttribute('y', f1(y)); r.than.setAttribute('height', f1(H));
        r.dinh.setAttribute('cy', f1(y));
        r.g1.setAttribute('y', f1(y)); r.g2.setAttribute('y', f1(y));
        r.bac.setAttribute('y1', f1(y)); r.bac.setAttribute('y2', f1(y - 9));
        r.lua.setAttribute('transform', 'translate(100 ' + f1(y - 7) + ')');
        r.sang.setAttribute('transform', 'translate(100 ' + f1(y - 22) + ')');
        r.khoi.setAttribute('transform', 'translate(100 ' + f1(y - 12) + ')');
        r.vung.setAttribute('rx', f1(24 + 22 * p)); r.vung.setAttribute('ry', f1(3.5 + 3 * p));
      },
      am: function () {
        on(0.6, 0.3, 0, 900, 220, 'lowpass', 0.15);
        chuong(784, 0.55, 0.13); chuong(988, 0.95, 0.11);
      }
    },

    hoa: {
      ten: 'Hoa nở', ic: '🌸', phu: 'Hoa nở rồi!',
      mo: 'Từng cánh hoa mở ra một — kiểu êm dịu, hợp lúc làm bài yên lặng.',
      svg: function (u) {
        var s = '<svg viewBox="0 0 200 200" aria-hidden="true">', i;
        s += '<defs><radialGradient id="dhhs' + u + '"><stop offset="0" stop-color="#fff6c2" stop-opacity=".95"/><stop offset="1" stop-color="#fff6c2" stop-opacity="0"/></radialGradient></defs>' +
          '<circle class="dh-hoa-sang" cx="100" cy="86" r="70" fill="url(#dhhs' + u + ')"/>' +
          '<ellipse cx="100" cy="194" rx="46" ry="5" fill="#000" opacity=".07"/>' +
          '<g class="dh-hoa-dau">' +
            '<path d="M100 154C96 132 104 112 100 88" fill="none" stroke="#5aa84a" stroke-width="5" stroke-linecap="round"/>' +
            '<path d="M100 146C86 134 74 136 68 144C80 152 92 150 100 146Z" fill="#6cbf5a"/>' +
            '<path d="M100 132C114 120 126 122 132 130C120 138 108 136 100 132Z" fill="#5aa84a"/>' +
            '<path d="M100 94C92 98 86 94 84 88C92 86 97 88 100 94ZM100 94C108 98 114 94 116 88C108 86 103 88 100 94Z" fill="#6cbf5a"/>';
        for (i = 0; i < 10; i++) {
          s += '<g data-r="c' + i + '"><path d="M0 0C-14-12-13-38 0-46C13-38 14-12 0 0Z" fill="' + (i % 2 ? '#ffa8cb' : '#ff8fb8') + '" stroke="#f26b9f" stroke-width="1.2"/>' +
            '<path d="M0-8C-3-18-3-28 0-36" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round"/></g>';
        }
        s += '<g data-r="nhuy"><circle r="13" fill="#ffd23f" stroke="#f2a93b" stroke-width="2"/>' +
              '<g class="dh-hoa-ngu"><path d="M-7-2Q-4.5 0.5-2-2M2-2Q4.5 0.5 7-2" fill="none" stroke="#8a4b12" stroke-width="1.6" stroke-linecap="round"/></g>' +
              '<g class="dh-hoa-thuc"><circle cx="-4.5" cy="-2" r="1.8" fill="#8a4b12"/><circle cx="4.5" cy="-2" r="1.8" fill="#8a4b12"/>' +
                '<path d="M-5 3Q0 7.5 5 3" fill="none" stroke="#8a4b12" stroke-width="1.6" stroke-linecap="round"/></g>' +
            '</g>' +
          '</g>' +
          '<path d="M72 160H128L121 194H79Z" fill="#e07a4f"/><path d="M76 172H124" stroke="#f39a6e" stroke-width="3"/>' +
          '<rect x="68" y="152" width="64" height="12" rx="4" fill="#c9643a"/>' +
          saoLap([[40, 50, 1.1, 0], [162, 44, 1.3, 0.5], [30, 120, 0.8, 0.9], [170, 116, 1, 0.3], [100, 18, 0.9, 0.7]], '#ffc94a') +
        '</svg>';
        return s;
      },
      ve: function (r, p) {
        var i, o, a, b, g, rc = 6 + 7 * p;
        for (i = 0; i < 10; i++) {
          o = kep(p * 10 - i, 0, 1);
          o = o * o * (3 - 2 * o);
          a = i * 36;
          if (a > 180) a -= 360;
          b = HOA_NU[i];
          g = b + (a - b) * o;
          r['c' + i].setAttribute('transform', 'translate(100 86) rotate(' + f1(g) + ') scale(' + f3(0.7 + 0.3 * o) + ')');
        }
        r.nhuy.setAttribute('transform', 'translate(100 86) scale(' + f3(rc / 13) + ')');
      },
      am: function () {
        [523, 587, 659, 784, 880, 1047, 1319].forEach(function (f, i) { tone(f, 1.1, 'sine', 0.11, i * 0.11); });
      }
    },

    rua: {
      ten: 'Rùa và Thỏ', ic: '🐢', phu: 'Rùa về đích!',
      mo: 'Thỏ ngủ quên dưới gốc cây, rùa chậm mà chắc bò dần về vạch đích.',
      svg: function () {
        var s = '<svg viewBox="0 0 200 200" aria-hidden="true">', i, j;
        s += may(18, 24, 0.8) + may(150, 34, 0.6) +
          '<ellipse cx="100" cy="176" rx="98" ry="30" fill="#9bd77f"/>' +
          '<rect x="104" y="96" width="9" height="56" rx="3" fill="#9a6a3d"/>' +
          '<circle cx="108" cy="86" r="26" fill="#5fb85a"/><circle cx="90" cy="96" r="15" fill="#6cc46f"/><circle cx="127" cy="96" r="16" fill="#4fa64f"/>' +
          '<circle cx="100" cy="78" r="3" fill="#ff6b6b"/><circle cx="118" cy="92" r="3" fill="#ff6b6b"/><circle cx="92" cy="98" r="3" fill="#ff6b6b"/>' +
          // tho ngu
          '<g class="dh-tho">' +
            '<ellipse cx="143" cy="132" rx="2.8" ry="9" transform="rotate(-62 143 132)" fill="#f6f2ec" stroke="#d6ccc0"/>' +
            '<ellipse cx="146" cy="134" rx="2.8" ry="9" transform="rotate(-52 146 134)" fill="#f6f2ec" stroke="#d6ccc0"/>' +
            '<circle cx="122" cy="144" r="4" fill="#fff"/>' +
            '<ellipse cx="136" cy="146" rx="14" ry="8" fill="#f6f2ec" stroke="#d6ccc0"/>' +
            '<circle cx="149" cy="142" r="7" fill="#f6f2ec" stroke="#d6ccc0"/>' +
            '<circle cx="155.5" cy="143" r="1.3" fill="#ff8fa3"/>' +
            '<path class="dh-tho-ngu" d="M148 141Q150 142.8 152 141" fill="none" stroke="#5a4a40" stroke-width="1.2" stroke-linecap="round"/>' +
            '<g class="dh-tho-thuc"><circle cx="151" cy="140.5" r="1.7" fill="#3a2a2a"/><text x="157" y="130" font-size="13" font-weight="800" fill="#e8453c">!</text></g>' +
            '<g class="dh-zzz" fill="#6a7fa8" font-weight="700">' +
              '<text class="dh-z" x="154" y="130" font-size="7">z</text>' +
              '<text class="dh-z" x="159" y="122" font-size="9" style="animation-delay:.8s">z</text>' +
              '<text class="dh-z" x="165" y="112" font-size="11" style="animation-delay:1.6s">z</text>' +
            '</g>' +
          '</g>' +
          '<rect x="6" y="154" width="188" height="15" rx="7.5" fill="#e9cf98"/>' +
          '<path d="M14 161.5H186" stroke="#d8b878" stroke-width="1.4" stroke-dasharray="4 5"/>' +
          '<rect x="22" y="154" width="3" height="15" fill="#fff"/>';
        for (i = 0; i < 2; i++) {
          for (j = 0; j < 5; j++) s += '<rect x="' + (178 + i * 3) + '" y="' + (154 + j * 3) + '" width="3" height="3" fill="' + ((i + j) % 2 ? '#fff' : '#222') + '"/>';
        }
        s += '<rect x="172" y="120" width="3" height="42" fill="#7a5a3a"/><rect x="186" y="120" width="3" height="42" fill="#7a5a3a"/>' +
          '<g class="dh-bang-dich"><rect x="166" y="110" width="29" height="12" rx="2" fill="#fff" stroke="#e8453c" stroke-width="1.5"/>' +
            '<text x="180.5" y="119" text-anchor="middle" font-size="7.5" font-weight="800" fill="#e8453c">ĐÍCH</text></g>' +
          '<g data-r="rua"><g class="dh-rua-nhun">' +
            '<rect class="dh-chan dh-chan-b" x="-9" y="-5" width="5" height="7" rx="2" fill="#5f9c43"/>' +
            '<rect class="dh-chan dh-chan-b" x="7" y="-5" width="5" height="7" rx="2" fill="#5f9c43"/>' +
            '<path d="M-15-4L-21-2L-15-1Z" fill="#7cc35b"/>' +
            '<rect x="8" y="-9" width="8" height="5" rx="2" fill="#8fd16a"/>' +
            '<circle cx="16" cy="-9" r="5.4" fill="#8fd16a"/><circle cx="18" cy="-10" r="1.2" fill="#1f2a1f"/>' +
            '<path d="M16.5-6.4Q18.5-5.2 20.2-6.6" fill="none" stroke="#1f2a1f" stroke-width=".9" stroke-linecap="round"/>' +
            '<path d="M-15-3C-15-20 13-20 13-3Z" fill="#3f9a4b"/>' +
            '<path d="M-8-3L-6-10L1-12L6-9L7-3M-6-10L-11-7M6-9L10-6M1-12L0-16" fill="none" stroke="#2c7a39" stroke-width="1.2"/>' +
            '<path d="M-16-3H14" stroke="#f2c14e" stroke-width="2.6" stroke-linecap="round"/>' +
            '<rect class="dh-chan" x="-12" y="-4" width="5" height="7" rx="2" fill="#7cc35b"/>' +
            '<rect class="dh-chan" x="4" y="-4" width="5" height="7" rx="2" fill="#7cc35b"/>' +
          '</g></g>' +
          saoLap([[166, 96, 1.1, 0], [194, 100, 0.9, 0.4], [150, 104, 0.8, 0.8]]) +
        '</svg>';
        return s;
      },
      ve: function (r, p) {
        r.rua.setAttribute('transform', 'translate(' + f1(24 + 150 * p) + ' 161) scale(1.3)');
        r.el.classList.toggle('is-day', p >= 0.9);
      },
      am: function () {
        [[392, 0], [523, 0.14], [659, 0.28], [784, 0.42]].forEach(function (n) {
          tone(n[0], 0.12, 'triangle', 0.16, n[1]); tone(n[0], 0.12, 'sawtooth', 0.04, n[1]);
        });
        tone(659, 0.14, 'triangle', 0.16, 0.72); tone(784, 0.7, 'triangle', 0.18, 0.88); tone(784, 0.7, 'sawtooth', 0.04, 0.88);
      }
    },

    banh: {
      ten: 'Bánh tròn', ic: '🥧', phu: 'Hết bánh rồi!',
      mo: 'Chiếc bánh dâu bị “ăn” dần từng miếng như biểu đồ tròn.',
      svg: function () {
        var s = '<svg viewBox="0 0 200 200" aria-hidden="true">', i, q;
        s += '<ellipse cx="100" cy="192" rx="72" ry="6" fill="#000" opacity=".07"/>' +
          '<circle cx="100" cy="104" r="86" fill="#fff" stroke="#eadfce" stroke-width="3"/>' +
          '<circle cx="100" cy="104" r="75" fill="none" stroke="#f3ebdf" stroke-width="2"/>';
        for (i = 0; i < VUN.length; i++) {
          q = diem(100, 104, VUN[i][1], VUN[i][0]);
          s += '<circle data-r="v' + i + '" cx="' + f1(q[0]) + '" cy="' + f1(q[1]) + '" r="' + (i % 2 ? 1.8 : 2.4) + '" fill="#e9a84a"/>';
        }
        s += '<path data-r="vo" fill="#e9a84a" stroke="#c9822e" stroke-width="1.6" stroke-linejoin="round"/>' +
          '<path data-r="nhan" fill="#ff7f9c"/>';
        for (i = 0; i < 8; i++) {
          q = diem(100, 104, 60, 45 * i);
          s += '<line data-r="l' + i + '" x1="100" y1="104" x2="' + f1(q[0]) + '" y2="' + f1(q[1]) + '" stroke="#e46b86" stroke-width="1.4"/>';
        }
        for (i = 0; i < 16; i++) {
          q = diem(100, 104, 65, 11.25 + 22.5 * i);
          s += '<circle data-r="m' + i + '" cx="' + f1(q[0]) + '" cy="' + f1(q[1]) + '" r="3.6" fill="#fff7ef"/>';
        }
        for (i = 0; i < 8; i++) {
          q = diem(100, 104, 40, 22.5 + 45 * i);
          s += '<g data-r="q' + i + '"><path d="M' + f1(q[0]) + ' ' + f1(q[1] - 5) + 'q2-6 7-7" fill="none" stroke="#3f8a3a" stroke-width="1.6" stroke-linecap="round"/>' +
            '<circle cx="' + f1(q[0]) + '" cy="' + f1(q[1]) + '" r="6.5" fill="#e8233f"/><circle cx="' + f1(q[0] - 2) + '" cy="' + f1(q[1] - 2) + '" r="2" fill="#fff" opacity=".6"/></g>';
        }
        s += '<circle data-r="tam" cx="100" cy="104" r="9" fill="#fff7ef"/>' +
          '<g data-r="dia"><g class="dh-dia-nhay" fill="#c3cad6" stroke="#9aa3b2" stroke-width=".6">' +
            '<rect x="95.5" y="38" width="2" height="16" rx="1"/><rect x="99" y="38" width="2" height="16" rx="1"/><rect x="102.5" y="38" width="2" height="16" rx="1"/>' +
            '<rect x="95" y="52" width="10" height="6" rx="2.5"/><rect x="98.5" y="57" width="3" height="30" rx="1.5"/>' +
          '</g></g>' +
          saoLap([[30, 40, 1.1, 0], [172, 36, 1, 0.5], [176, 170, 1.2, 0.2], [24, 168, 0.9, 0.8]]) +
        '</svg>';
        return s;
      },
      ve: function (r, p) {
        var A = 360 * p, i;
        r.vo.setAttribute('d', quat(100, 104, 70, A, 360));
        r.nhan.setAttribute('d', quat(100, 104, 60, A, 360));
        for (i = 0; i < 8; i++) {
          hien(r['l' + i], i === 0 ? A < 359.5 : 45 * i > A + 0.5);
          hien(r['q' + i], 22.5 + 45 * i > A + 7);
        }
        for (i = 0; i < 16; i++) hien(r['m' + i], 11.25 + 22.5 * i > A + 3);
        for (i = 0; i < VUN.length; i++) hien(r['v' + i], VUN[i][0] < A - 4);
        hien(r.tam, A < 352);
        r.dia.setAttribute('transform', 'rotate(' + f1(A - 14) + ' 100 104)');
      },
      am: function () {
        tone(260, 0.09, 'square', 0.1, 0, 130); tone(240, 0.09, 'square', 0.1, 0.18, 120);
        tone(260, 0.09, 'square', 0.1, 0.42, 130); tone(240, 0.09, 'square', 0.1, 0.6, 120);
        chuong(1568, 0.9, 0.14);
      }
    },

    so: {
      ten: 'Số lớn', ic: '🔢', phu: '', toi: true,
      mo: 'Chỉ có số thật to và vòng tiến độ đổi màu xanh → vàng → đỏ.',
      svg: function () {
        var s = '<svg viewBox="0 0 200 200" aria-hidden="true"><g class="dh-so-g">', i, a, b, dai;
        s += '<circle cx="100" cy="100" r="88" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="13"/>';
        for (i = 0; i < 60; i++) {
          dai = i % 5 === 0;
          a = diem(100, 100, 74, i * 6); b = diem(100, 100, dai ? 80 : 77, i * 6);
          s += '<line x1="' + f1(a[0]) + '" y1="' + f1(a[1]) + '" x2="' + f1(b[0]) + '" y2="' + f1(b[1]) + '" stroke="#fff" stroke-opacity="' + (dai ? '.45' : '.18') + '" stroke-width="' + (dai ? 2 : 1) + '"/>';
        }
        return s + '<circle data-r="vong" cx="100" cy="100" r="88" fill="none" stroke="#4ade80" stroke-width="13" stroke-linecap="round" stroke-dasharray="552.92 552.92" transform="rotate(-90 100 100)"/>' +
          '<circle data-r="dau" r="4.5" fill="#fff"/>' +
          '<text data-r="chu" class="dh-so-chu" x="100" y="114" text-anchor="middle" font-size="40" font-weight="800" fill="#fff">1:00</text>' +
        '</g></svg>';
      },
      ve: function (r, p) {
        var f = 1 - p, q = diem(100, 100, 88, 360 * f), t = dinhDang(Math.ceil(f * 60 - 1e-6));
        r.vong.setAttribute('stroke-dashoffset', f1(552.92 * p));
        r.vong.setAttribute('stroke', f > 0.5 ? '#4ade80' : f > 0.2 ? '#fbbf24' : '#fb7185');
        hien(r.vong, f > 0.001);
        r.dau.setAttribute('cx', f1(q[0])); r.dau.setAttribute('cy', f1(q[1]));
        hien(r.dau, f > 0.001);
        if (r.chu._t !== t) { r.chu._t = t; r.chu.textContent = t; }
      },
      am: function () {
        [1047, 1319, 1568, 2093].forEach(function (f, i) { tone(f, 0.2, 'triangle', 0.15, i * 0.1); });
        tone(1047, 0.9, 'triangle', 0.1, 0.5); tone(1319, 0.9, 'triangle', 0.09, 0.5); tone(1568, 0.9, 'triangle', 0.08, 0.5);
      }
    }
  };

  function taoCanh(k, el) {
    el.innerHTML = KIEU[k].svg(++uid);
    var r = { el: el, k: k };
    Array.prototype.forEach.call(el.querySelectorAll('[data-r]'), function (x) { r[x.getAttribute('data-r')] = x; });
    return r;
  }

  /* ---------------- luu lua chon ---------------- */
  function luuPref() {
    ghiLS(PREF_KEY, { kieu: S.kieu, giay: Math.round(T.tong / 1000), tich: S.tich, am: S.am, vt: S.vt });
  }
  function napPref() {
    var p = docLS(PREF_KEY, null) || {};
    var g = +p.giay;
    S.coPref = !!KIEU[p.kieu];
    S.kieu = KIEU[p.kieu] ? p.kieu : 'bong';
    T.tong = g >= 1 && g <= MAX_MS / 1000 ? Math.round(g) * 1000 : 60000;
    T.con = T.tong;
    S.tich = p.tich === true;
    S.am = p.am !== false;
    S.vt = p.vt && typeof p.vt.x === 'number' && typeof p.vt.y === 'number' ? { x: p.vt.x, y: p.vt.y } : null;
  }

  /* ---------------- dung khung ---------------- */
  function dung() {
    var preset = PRESET.map(function (g) {
      return '<button type="button" class="dh-chip" data-g="' + g + '">' + nhanGiay(g) + '</button>';
    }).join('');
    var the = THU_TU.map(function (k, i) {
      var d = KIEU[k];
      return '<button type="button" class="dh-the" data-k="' + k + '">' +
        '<span class="dh-the-xem dh-t-' + k + '"><span class="dh-c is-chay" data-xem="' + k + '"></span></span>' +
        '<span class="dh-the-ten"><kbd>' + (i + 1) + '</kbd>' + d.ic + ' ' + d.ten + '</span>' +
        '<span class="dh-the-mo">' + d.mo + '</span>' +
      '</button>';
    }).join('');

    root = document.createElement('div');
    root.id = 'lopDongHo';
    root.className = 'dh';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Đồng hồ đếm ngược');
    root.innerHTML =
      '<header class="dh-bar">' +
        '<b class="dh-title">⏱️ Đồng hồ đếm ngược</b>' +
        '<button type="button" class="dh-btn" id="dhKieu" title="Chọn kiểu đồng hồ (K)">🎨 <span id="dhKieuTen"></span></button>' +
        '<span class="dh-bar-gap"></span>' +
        '<button type="button" class="dh-btn dh-ic" id="dhTich">🕰️</button>' +
        '<button type="button" class="dh-btn dh-ic" id="dhAm"></button>' +
        '<button type="button" class="dh-btn" id="dhNho" title="Thu nhỏ thành ô nổi ở góc màn hình (N)">🗗 <span class="dh-an-hep">Thu nhỏ</span></button>' +
        '<button type="button" class="dh-btn dh-ic" id="dhFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="dh-btn" id="dhDong" title="Đóng (Esc)">✕ <span class="dh-an-hep">Đóng</span></button>' +
      '</header>' +
      '<div class="dh-main">' +
        '<div class="dh-canh-wrap"><div class="dh-c" id="dhCanh"></div>' +
          '<div class="dh-het" id="dhHet" role="status" hidden></div>' +
        '</div>' +
        '<div class="dh-so"><div class="dh-so-so" id="dhSo"></div><div class="dh-trang" id="dhTrang"></div></div>' +
      '</div>' +
      '<div class="dh-dieu">' +
        '<div class="dh-hang" role="group" aria-label="Chọn nhanh thời gian">' + preset +
          '<form class="dh-tuy" id="dhTuy" novalidate>' +
            '<input type="text" id="dhNhap" inputmode="numeric" autocomplete="off" maxlength="8" placeholder="phút:giây" aria-label="Tự đặt thời gian, ví dụ 1:30" title="Ví dụ: 1:30 · 45s · 2 (phút)">' +
            '<button type="submit" class="dh-chip">Đặt</button>' +
          '</form>' +
        '</div>' +
        '<div class="dh-hang">' +
          '<button type="button" class="dh-btn dh-to" id="dhTru" title="Bớt 10 giây (↓)">−10s</button>' +
          '<button type="button" class="dh-go" id="dhGo"></button>' +
          '<button type="button" class="dh-btn dh-to" id="dhCong" title="Thêm 10 giây (↑)">+10s</button>' +
          '<button type="button" class="dh-btn dh-to" id="dhLai" title="Làm lại (R)">↺ <span class="dh-an-hep">Làm lại</span></button>' +
        '</div>' +
      '</div>' +
      '<div class="dh-giay" id="dhGiay" aria-hidden="true"></div>' +
      '<div class="dh-panel" id="dhXem" hidden><div class="dh-panel-card" role="dialog" aria-labelledby="dhXemTitle">' +
        '<div class="dh-panel-head"><h2 id="dhXemTitle">Chọn kiểu đồng hồ</h2><button type="button" class="dh-x" id="dhXemDong" aria-label="Đóng bảng chọn kiểu">✕</button></div>' +
        '<div class="dh-luoi">' + the + '</div>' +
        '<p class="dh-goi-y">Phím tắt: <kbd>Space</kbd> chạy / dừng · <kbd>R</kbd> làm lại · <kbd>↑</kbd> <kbd>↓</kbd> ±10 giây · <kbd>1</kbd>–<kbd>9</kbd> đổi kiểu · ' +
          '<kbd>N</kbd> thu nhỏ · <kbd>F</kbd> toàn màn hình · <kbd>M</kbd> tắt tiếng · <kbd>T</kbd> tích tắc · <kbd>Esc</kbd> đóng</p>' +
      '</div></div>';
    document.body.appendChild(root);

    mini = document.createElement('div');
    mini.className = 'dh-mini';
    mini.hidden = true;
    mini.setAttribute('role', 'timer');
    mini.setAttribute('aria-label', 'Đồng hồ đếm ngược');
    mini.title = 'Kéo để di chuyển · bấm đúp để phóng to';
    mini.innerHTML =
      '<div class="dh-mini-tren"><span class="dh-mini-ic" id="dhMiniIc" aria-hidden="true"></span><span class="dh-mini-so" id="dhMiniSo"></span></div>' +
      '<div class="dh-mini-het" aria-live="polite"></div>' +
      '<div class="dh-mini-bar"><span id="dhMiniTien"></span></div>' +
      '<div class="dh-mini-nut">' +
        '<button type="button" id="dhMiniGo"></button>' +
        '<button type="button" id="dhMiniLai" title="Làm lại" aria-label="Làm lại">↺</button>' +
        '<button type="button" id="dhMiniTo" title="Phóng to toàn màn hình" aria-label="Phóng to">⤢</button>' +
        '<button type="button" id="dhMiniDong" title="Đóng đồng hồ" aria-label="Đóng đồng hồ">✕</button>' +
      '</div>';
    document.body.appendChild(mini);
    soEl = $('#dhSo');
    miniSoEl = m$('#dhMiniSo');
    miniTien = m$('#dhMiniTien');

    $('#dhKieu').addEventListener('click', function () { moXem(); });
    $('#dhTich').addEventListener('click', doiTich);
    $('#dhAm').addEventListener('click', doiAm);
    $('#dhNho').addEventListener('click', function () { cheDo(true); });
    $('#dhFull').addEventListener('click', toanManHinh);
    $('#dhDong').addEventListener('click', dong);
    $('#dhGo').addEventListener('click', batTat);
    $('#dhTru').addEventListener('click', function () { chinh(-10000); });
    $('#dhCong').addEventListener('click', function () { chinh(10000); });
    $('#dhLai').addEventListener('click', datLai);
    $all('.dh-chip[data-g]').forEach(function (b) {
      b.addEventListener('click', function () { datThoiGian(+b.getAttribute('data-g') * 1000); });
    });
    $('#dhTuy').addEventListener('submit', function (e) {
      e.preventDefault();
      var o = $('#dhNhap'), g = docNhap(o.value);
      if (!g) {
        o.classList.remove('is-loi');
        void o.offsetWidth;
        o.classList.add('is-loi');
        o.title = 'Chưa hiểu thời gian này. Ví dụ: 1:30 · 45s · 2 (phút)';
        return;
      }
      o.classList.remove('is-loi');
      o.value = dinhDang(Math.min(g, MAX_MS / 1000));
      o.blur();
      datThoiGian(g * 1000);
    });
    $('#dhNhap').addEventListener('input', function () { this.classList.remove('is-loi'); });
    $('#dhXemDong').addEventListener('click', dongXem);
    $('#dhXem').addEventListener('click', function (e) {
      if (e.target.id === 'dhXem') return dongXem();
      var b = e.target.closest('.dh-the');
      if (b) { chonKieu(b.getAttribute('data-k')); dongXem(); }
    });

    // O noi: nut khong lay focus de phim Space/Enter van ve tro choi phia duoi
    Array.prototype.forEach.call(mini.querySelectorAll('button'), function (b) {
      b.addEventListener('mousedown', function (e) { e.preventDefault(); });
    });
    m$('#dhMiniGo').addEventListener('click', function () { batTat(); this.blur(); });
    m$('#dhMiniLai').addEventListener('click', function () { datLai(); this.blur(); });
    m$('#dhMiniTo').addEventListener('click', function () { this.blur(); cheDo(false); });
    m$('#dhMiniDong').addEventListener('click', function () { this.blur(); dong(); });
    mini.addEventListener('dblclick', function (e) { if (!e.target.closest('button')) cheDo(false); });
    mini.addEventListener('pointerdown', batDauKeo);
    mini.addEventListener('pointermove', dangKeo);
    mini.addEventListener('pointerup', thaKeo);
    mini.addEventListener('pointercancel', thaKeo);

    window.addEventListener('keydown', phim, true);
    window.addEventListener('resize', function () { if (S.vt && !mini.hidden) datViTri(S.vt.x, S.vt.y); });
    document.addEventListener('visibilitychange', function () { if (!document.hidden && S.mo) { capNhat(); vongLap(); } });
    document.addEventListener('fullscreenchange', function () { noiCha(); if (S.mo) veNut(); });
    S.built = true;
  }

  // Doc o tu nhap: "1:30", "1.30", "90s", "45 giây", "2" (= 2 phut), "2p"
  function docNhap(s) {
    var m;
    s = String(s || '').trim().toLowerCase();
    if (!s) return 0;
    m = s.match(/^(\d{1,2})\s*[:.,'h ]\s*(\d{1,2})$/);
    if (m) return kep(+m[1] * 60 + +m[2], 0, MAX_MS / 1000);
    m = s.match(/^(\d{1,4})\s*(s|g|gi|giây|giay|")$/);
    if (m) return kep(+m[1], 0, MAX_MS / 1000);
    m = s.match(/^(\d{1,2})\s*(m|p|ph|phút|phut|')?$/);
    if (m) return kep(+m[1] * 60, 0, MAX_MS / 1000);
    return 0;
  }

  /* ---------------- dem gio (khong troi) ---------------- */
  function conLai() { return T.chay ? Math.max(0, T.con - (bayGio() - T.moc)) : T.con; }

  function batTat() { if (T.chay) tamDung(); else batDau(); }

  function batDau() {
    if (T.chay) return;
    if (T.xong || T.con <= 0) datLai();
    amCtx(); // mo khoa am thanh ngay trong thao tac bam cua giao vien
    T.moc = bayGio();
    T.chay = true;
    T.daChay = true;
    T.giayCuoi = Math.ceil(T.con / 1000);
    canhCls();
    veNut();
    vongLap();
    capNhat();
  }

  function tamDung() {
    if (!T.chay) return;
    var c = conLai();
    if (c <= 0) { ketThuc(); return; }
    T.con = c;
    T.chay = false;
    canhCls();
    veNut();
    vongLap();
    capNhat();
  }

  function datLai() {
    T.chay = false;
    T.xong = false;
    T.daChay = false;
    T.con = T.tong;
    T.giayCuoi = -1;
    boHet();
    canhCls();
    veNut();
    vongLap();
    capNhat();
  }

  function datThoiGian(ms) {
    T.tong = kep(Math.round(ms / 1000) * 1000, 1000, MAX_MS);
    luuPref();
    datLai();
  }

  // +/- thoi gian: chua chay thi doi do dai luot; dang chay/dung giua chung thi doi thoi gian con lai
  function chinh(d) {
    if (T.xong) {
      if (d <= 0) return;
      // Het gio roi ma them 10 giay: cho chay tiep 10 giay nua
      T.xong = false;
      boHet();
      T.con = d;
      if (T.con > T.tong) T.tong = T.con;
      T.chay = false;
      batDau();
      return;
    }
    if (!T.chay && !T.daChay) {
      T.tong = kep(T.tong + d, 1000, MAX_MS);
      T.con = T.tong;
      luuPref();
      veNut();
      capNhat();
      return;
    }
    var c = kep(conLai() + d, 0, MAX_MS);
    if (c > T.tong) T.tong = c;
    T.con = c;
    if (T.chay) T.moc = bayGio();
    T.giayCuoi = Math.ceil(c / 1000);
    if (c <= 0) { ketThuc(); return; }
    veNut();
    capNhat();
  }

  // Chi goi tu capNhat/tamDung/chinh; co T.xong nen moi luot chi ket thuc dung mot lan
  function ketThuc() {
    if (T.xong) return;
    T.chay = false;
    T.con = 0;
    T.xong = true;
    T.daChay = true;
    vongLap();
    capNhat();
    var k = KIEU[S.kieu];
    root.classList.add('is-het');
    mini.classList.add('is-het');
    canhCls();
    var h = $('#dhHet');
    h.innerHTML = '<b>Hết giờ!</b>' + (k.phu ? '<span>' + k.phu + '</span>' : '');
    h.hidden = false;
    m$('.dh-mini-het').textContent = 'Hết giờ!';
    phaoGiay();
    k.am();
    veNut();
  }

  function boHet() {
    if (!S.built) return;
    root.classList.remove('is-het');
    mini.classList.remove('is-het');
    $('#dhHet').hidden = true;
    $('#dhGiay').innerHTML = '';
    m$('.dh-mini-het').textContent = '';
  }

  /* ---------------- vong ve ---------------- */
  function vongLap() {
    if (S.mo && !raf && (T.chay || (S.xemMo && !giam()))) raf = requestAnimationFrame(khung);
    if (T.chay && !hen) hen = setInterval(capNhat, 250); // van chay khi tab an (rAF bi dung)
    else if (!T.chay && hen) { clearInterval(hen); hen = 0; }
  }
  function khung() {
    raf = 0;
    if (!S.mo) return;
    capNhat();
    if (S.xemMo && !giam()) veXem();
    if (T.chay || (S.xemMo && !giam())) raf = requestAnimationFrame(khung);
  }

  function capNhat() {
    if (!S.built) return;
    var c = conLai();
    if (T.chay && c <= 0) { ketThuc(); return; }
    var s = Math.ceil(c / 1000);
    if (T.chay && s !== T.giayCuoi) {
      T.giayCuoi = s;
      if (s <= 5) { sndBip(s); nhip(); }
      else if (S.tich) sndTich(s);
    }
    ve(c);
  }

  function soHtml(chu) {
    var h = '', i, c;
    for (i = 0; i < chu.length; i++) {
      c = chu.charAt(i);
      h += c === ':' ? '<i class="dh-hai">:</i>' : '<i>' + c + '</i>';
    }
    return h;
  }

  function ve(c) {
    var chu = dinhDang(Math.ceil(c / 1000));
    if (chu !== S.chuSo) {
      S.chuSo = chu;
      var h = soHtml(chu);
      soEl.innerHTML = h;
      miniSoEl.innerHTML = h;
    }
    var p = T.tong > 0 ? kep(1 - c / T.tong, 0, 1) : 1;
    var cuoi = !T.xong && T.daChay && c > 0 && c <= 5000;
    if (cuoi !== S.cuoi) {
      S.cuoi = cuoi;
      root.classList.toggle('is-cuoi', cuoi);
      mini.classList.toggle('is-cuoi', cuoi);
      if (S.canh) S.canh.el.classList.toggle('is-cuoi', cuoi);
    }
    if (!S.nho && S.canh) KIEU[S.kieu].ve(S.canh, p);
    miniTien.style.transform = 'scaleX(' + f3(1 - p) + ')';
  }

  // Nhip dap cua so trong 5 giay cuoi
  function nhip() {
    [soEl, miniSoEl].forEach(function (el) {
      el.classList.remove('is-nhip');
      void el.offsetWidth;
      el.classList.add('is-nhip');
    });
  }

  function canhCls() {
    if (!S.canh) return;
    S.canh.el.classList.toggle('is-chay', T.chay);
    S.canh.el.classList.toggle('is-het', T.xong);
  }

  function phaoGiay() {
    var box = $('#dhGiay');
    box.innerHTML = '';
    if (giam() || S.nho) return;
    var em = S.kieu === 'hoa' || S.kieu === 'nen';
    var mau = em ? ['#ff8fb8', '#ffc2d9', '#ffe08a', '#fff'] : MAU;
    var n = em ? 22 : 40, h = '', i;
    for (i = 0; i < n; i++) {
      h += '<i style="left:' + f1(Math.random() * 100) + '%;background:' + mau[i % mau.length] +
        ';--t:' + f1(2.6 + Math.random() * 1.8) + 's;--d:' + f1(Math.random() * 0.9) + 's;--x:' + Math.round(Math.random() * 160 - 80) +
        'px;--r:' + Math.round(Math.random() * 720 - 360) + 'deg' + (i % 3 === 0 ? ';border-radius:50%;width:11px;height:11px' : '') + '"></i>';
    }
    box.innerHTML = h;
  }

  /* ---------------- nut & trang thai ---------------- */
  function veNut() {
    if (!S.built) return;
    var dungGiua = !T.chay && T.daChay && !T.xong;
    var go = $('#dhGo');
    go.innerHTML = (T.chay ? '⏸ Tạm dừng' : T.xong ? '↻ Chạy lại' : dungGiua ? '▶ Chạy tiếp' : '▶ Bắt đầu') + ' <kbd>Space</kbd>';
    go.classList.toggle('is-chay', T.chay);
    root.classList.toggle('is-dung', dungGiua);
    root.classList.toggle('is-chay', T.chay);
    mini.classList.toggle('is-dung', dungGiua);
    $('#dhTrang').textContent = dungGiua ? 'Đang tạm dừng' : (!T.chay && !T.xong ? 'Sẵn sàng' : '');
    var a = $('#dhAm');
    a.textContent = S.am ? '🔊' : '🔇';
    a.title = (S.am ? 'Đang bật tiếng — bấm để tắt' : 'Đang tắt tiếng — bấm để bật') + ' (M)';
    a.classList.toggle('is-off', !S.am);
    var t = $('#dhTich');
    t.title = (S.tich ? 'Đang bật tiếng tích tắc — bấm để tắt' : 'Tiếng tích tắc đang tắt — bấm để bật') + ' (T)';
    t.setAttribute('aria-pressed', S.tich ? 'true' : 'false');
    t.classList.toggle('is-off', !S.tich);
    $('#dhFull').title = document.fullscreenElement === root ? 'Thoát toàn màn hình (F)' : 'Toàn màn hình (F)';
    $all('.dh-chip[data-g]').forEach(function (b) { b.classList.toggle('is-on', +b.getAttribute('data-g') * 1000 === T.tong); });
    $('#dhKieuTen').textContent = KIEU[S.kieu].ic + ' ' + KIEU[S.kieu].ten;
    var mg = m$('#dhMiniGo');
    mg.textContent = T.chay ? '⏸' : T.xong ? '↻' : '▶';
    mg.title = T.chay ? 'Tạm dừng' : T.xong ? 'Chạy lại' : 'Bắt đầu';
    mg.setAttribute('aria-label', mg.title);
    m$('#dhMiniIc').textContent = KIEU[S.kieu].ic;
  }

  function doiAm() {
    S.am = !S.am;
    luuPref();
    veNut();
    if (S.am) tone(988, 0.14, 'triangle', 0.18);
  }
  function doiTich() {
    S.tich = !S.tich;
    luuPref();
    veNut();
    if (S.tich) { sndTich(1); sndTich(0); }
  }

  function chonKieu(k) {
    if (!KIEU[k]) return;
    S.kieu = k;
    root.setAttribute('data-kieu', k);
    root.classList.toggle('is-toi', !!KIEU[k].toi);
    S.canh = taoCanh(k, $('#dhCanh'));
    S.cuoi = null;
    canhCls();
    $all('.dh-the').forEach(function (b) {
      var on = b.getAttribute('data-k') === k;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    if (T.xong) {
      var h = $('#dhHet');
      h.innerHTML = '<b>Hết giờ!</b>' + (KIEU[k].phu ? '<span>' + KIEU[k].phu + '</span>' : '');
    }
    luuPref();
    veNut();
    capNhat();
  }

  /* ---------------- bang chon kieu (xem truoc co hoat hinh) ---------------- */
  function moXem() {
    if (!S.xem.length) {
      $all('[data-xem]').forEach(function (el) {
        var k = el.getAttribute('data-xem');
        S.xem.push({ k: k, r: taoCanh(k, el) });
      });
    }
    $('#dhXem').hidden = false;
    S.xemMo = true;
    S.xemT0 = bayGio();
    $all('.dh-the').forEach(function (b) {
      var on = b.getAttribute('data-k') === S.kieu;
      b.classList.toggle('is-on', on);
      if (on) b.focus({ preventScroll: true });
    });
    if (giam()) {
      S.xem.forEach(function (x) { KIEU[x.k].ve(x.r, 0.6); });
    } else {
      veXem();
      vongLap();
    }
  }
  function dongXem() {
    if (!S.built || $('#dhXem').hidden) return;
    $('#dhXem').hidden = true;
    S.xemMo = false;
    var g = $('#dhKieu');
    if (!root.hidden) g.focus({ preventScroll: true });
  }
  function veXem() {
    var now = bayGio();
    S.xem.forEach(function (x, i) {
      var t = (now - S.xemT0 + i * 650) % 5200, p = Math.min(1, t / 3800);
      KIEU[x.k].ve(x.r, p);
      x.r.el.classList.toggle('is-het', t > 3800);
      x.r.el.classList.toggle('is-cuoi', p > 0.82 && p < 1);
    });
  }

  /* ---------------- o noi nho: keo tha ---------------- */
  function datViTri(x, y) {
    var w = mini.offsetWidth, h = mini.offsetHeight;
    x = kep(x, 4, Math.max(4, window.innerWidth - w - 4));
    y = kep(y, 4, Math.max(4, window.innerHeight - h - 4));
    S.vt = { x: Math.round(x), y: Math.round(y) };
    mini.style.left = S.vt.x + 'px';
    mini.style.top = S.vt.y + 'px';
    mini.style.right = 'auto';
    mini.style.bottom = 'auto';
  }
  function batDauKeo(e) {
    if (e.button !== 0 || e.target.closest('button')) return;
    var r = mini.getBoundingClientRect();
    keo = { id: e.pointerId, dx: e.clientX - r.left, dy: e.clientY - r.top };
    try { mini.setPointerCapture(e.pointerId); } catch (x) { /* bo qua */ }
    mini.classList.add('is-keo');
    e.preventDefault();
  }
  function dangKeo(e) {
    if (!keo || e.pointerId !== keo.id) return;
    datViTri(e.clientX - keo.dx, e.clientY - keo.dy);
  }
  function thaKeo(e) {
    if (!keo || (e && e.pointerId !== keo.id)) return;
    keo = null;
    mini.classList.remove('is-keo');
    luuPref();
  }

  /* ---------------- che do / toan man hinh ---------------- */
  // Tro choi khac dang o che do toan man hinh thi phai dat dong ho vao trong
  // phan tu do, neu khong se bi che mat
  function noiCha() {
    if (!S.built) return;
    var fs = document.fullscreenElement;
    if (fs && (fs === root || root.contains(fs))) return;
    var cha = fs && !/^(canvas|video|img|iframe|svg)$/i.test(fs.tagName) ? fs : document.body;
    if (root.parentNode !== cha) cha.appendChild(root);
    if (mini.parentNode !== cha) cha.appendChild(mini);
  }

  // exitFullscreen/requestFullscreen co the khong tra ve Promise o trinh duyet cu
  function lamYen(x) { if (x && x.catch) x.catch(function () { /* bo qua */ }); }
  function thoatFs() {
    if (!document.fullscreenElement || !document.exitFullscreen) return;
    try { lamYen(document.exitFullscreen()); } catch (e) { /* bo qua */ }
  }
  function toanManHinh() {
    if (document.fullscreenElement) thoatFs();
    else if (root.requestFullscreen) { try { lamYen(root.requestFullscreen()); } catch (e) { /* bo qua */ } }
  }

  function cheDo(nho) {
    S.nho = !!nho;
    if (S.nho) {
      if (document.fullscreenElement === root) thoatFs();
      dongXem();
      if (root.contains(document.activeElement)) document.activeElement.blur();
      root.hidden = true;
      document.documentElement.classList.remove('dh-open');
      noiCha();
      mini.hidden = false;
      if (S.vt) datViTri(S.vt.x, S.vt.y);
      if (S.truoc && document.contains(S.truoc) && S.truoc.focus) S.truoc.focus({ preventScroll: true });
    } else {
      mini.hidden = true;
      noiCha();
      root.hidden = false;
      document.documentElement.classList.add('dh-open');
      if (!S.canh || S.canh.k !== S.kieu) chonKieu(S.kieu);
      $('#dhGo').focus({ preventScroll: true });
    }
    S.cuoi = null;
    veNut();
    capNhat();
    vongLap();
  }

  /* ---------------- phim tat (chi khi toan man hinh) ---------------- */
  function phim(e) {
    if (!S.mo || S.nho || !root || root.hidden) return;
    var trongO = e.target && /input|select|textarea/i.test(e.target.tagName);
    if (e.key === 'Escape') {
      e.stopImmediatePropagation();
      if (!$('#dhXem').hidden) dongXem();
      else if (trongO) e.target.blur();
      else if (!document.fullscreenElement) dong();
      return;
    }
    if (trongO) { if (root.contains(e.target)) e.stopImmediatePropagation(); return; }
    // Dong ho dang chiem man hinh thi phim tat cua tro choi phia sau khong duoc chay
    e.stopImmediatePropagation();
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = e.key;
    if (e.code === 'Space' || k === ' ' || k === 'Spacebar') { e.preventDefault(); batTat(); }
    else if (k === 'r' || k === 'R') datLai();
    else if (k === 'ArrowUp') { e.preventDefault(); chinh(10000); }
    else if (k === 'ArrowDown') { e.preventDefault(); chinh(-10000); }
    else if (k === 'f' || k === 'F') toanManHinh();
    else if (k === 'm' || k === 'M') doiAm();
    else if (k === 't' || k === 'T') doiTich();
    else if (k === 'n' || k === 'N') cheDo(true);
    else if (k === 'k' || k === 'K') { if ($('#dhXem').hidden) moXem(); else dongXem(); }
    else if (k >= '1' && k <= '9' && k.length === 1) { chonKieu(THU_TU[+k - 1]); dongXem(); }
  }

  /* ---------------- mo / dong ---------------- */
  function mo(opt) {
    opt = opt || {};
    var dangMo = S.mo;
    if (!S.built) { napPref(); dung(); }
    if (!dangMo) {
      var a = document.activeElement;
      S.truoc = a && a !== document.body && !root.contains(a) && !mini.contains(a) ? a : null;
    }
    S.mo = true;
    if (opt.kieu && KIEU[opt.kieu]) S.kieu = opt.kieu;
    if (!S.canh || S.canh.k !== S.kieu) chonKieu(S.kieu);
    var g = +opt.giay;
    if (g > 0) datThoiGian(g * 1000);
    else if (T.xong) datLai();
    cheDo(!!opt.nho);
    if (opt.chay) batDau();
    if (!opt.nho && !S.coPref && !opt.kieu) { S.coPref = true; moXem(); }
  }

  function dong() {
    if (!S.built) return;
    tamDung();
    if (document.fullscreenElement === root) thoatFs();
    dongXem();
    S.mo = false;
    root.hidden = true;
    mini.hidden = true;
    document.documentElement.classList.remove('dh-open');
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    vongLap();
    if (S.truoc && document.contains(S.truoc) && S.truoc.focus) S.truoc.focus({ preventScroll: true });
    S.truoc = null;
  }

  window.LopDongHo = { mo: mo, dong: dong };
})();
