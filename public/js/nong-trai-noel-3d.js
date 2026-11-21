/* ══════════════════════════════════════════════════════════════════
   CAY THONG NOEL 3D XOAY (2026-11, co giao: "cho xoay duoc ca cay thong Noel, sao cho chan that nhat")
   · Ve bang canvas 2D (khong WebGL, khong thu vien): cay = 7 tang tan la hinh non, moi tang la vai tram "chum la"
     dat tren be mat non trong khong gian 3D -> chieu phoi canh, to bong theo huong nang, sap xep xa -> gan.
   · Day den xoan oc quanh cay, do trang tri cac ban treo nam dung cho tren canh (ra sau cay thi bi la che),
     hop qua quanh goc, ngoi sao tren ngon tu xoay, tuyet dong tren dau canh, tham goc cay.
   · Keo ngang (chuot / ngon tay) de xoay, tha ra con troi theo da; de yen thi tu xoay cham. Phim ← → cung xoay.
     Cham vao 1 mon dang o phia truoc -> goi o.cham(mon).
   · Dien thoai: it chum la hon, do phan giai 1x. Tab an / canvas roi khoi trang thi dung. Giam chuyen dong: khong tu xoay.
   API: NTCay3D.tao(canvas, o) -> { dung(), datMon(ds) }
     o.mon: [{ hinh: url, k, co (0..1 kich co tuong doi), du: du lieu tra lai khi cham }]
     o.qua: [url...] (hop qua duoi goc) · o.sao: true/false · o.saoSang · o.den: 0..1 (ti le bong den sang) · o.hao
     o.tuXoay (mac dinh true) · o.cham(du) · o.nen: 'dem' | 'trong' (mac dinh trong suot)
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var PI2 = Math.PI * 2;
  var DIEN_THOAI = (function () { try { return matchMedia('(max-width: 760px), (pointer: coarse)').matches; } catch (e) { return false; } })();
  function giam() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function rngTao(seed) { var s = seed >>> 0 || 1; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

  /* ---------- hinh ban ve san (offscreen): chum la thong o nhieu muc sang, bong den, anh trang tri ---------- */
  var MAU_LA = [[18, 66, 40], [26, 96, 52], [38, 128, 62], [58, 156, 72], [92, 184, 92]];
  var CHUM = null;
  function veChum() {
    if (CHUM) return CHUM;
    CHUM = [];
    var S = 64;
    for (var m = 0; m < 10; m++) {
      for (var tuyet = 0; tuyet < 2; tuyet++) {
        var c = document.createElement('canvas');
        c.width = S; c.height = S;
        var g = c.getContext('2d'), t = m / 9;
        var r = Math.round(14 + t * 90), gr = Math.round(52 + t * 140), b = Math.round(34 + t * 64);
        var r2 = Math.round(r * 0.62), g2 = Math.round(gr * 0.66), b2 = Math.round(b * 0.7);
        // than chum: quat la hinh giot nuoc chuc xuong, vien toi -> nhieu chum chong len nhau tao khoi tan cay
        g.translate(S / 2, S * 0.22);
        var grad = g.createLinearGradient(0, 0, 0, S * 0.7);
        grad.addColorStop(0, 'rgb(' + r + ',' + gr + ',' + b + ')');
        grad.addColorStop(1, 'rgb(' + r2 + ',' + g2 + ',' + b2 + ')');
        g.fillStyle = grad;
        g.strokeStyle = 'rgba(10,36,24,0.55)';
        g.lineWidth = 1.6;
        g.beginPath();
        g.moveTo(0, 0);
        g.quadraticCurveTo(S * 0.36, S * 0.26, S * 0.3, S * 0.62);
        g.quadraticCurveTo(S * 0.15, S * 0.52, 0, S * 0.7);
        g.quadraticCurveTo(-S * 0.15, S * 0.52, -S * 0.3, S * 0.62);
        g.quadraticCurveTo(-S * 0.36, S * 0.26, 0, 0);
        g.fill(); g.stroke();
        // gan la kim
        g.strokeStyle = 'rgba(' + Math.min(255, r + 50) + ',' + Math.min(255, gr + 50) + ',' + Math.min(255, b + 30) + ',0.55)';
        g.lineWidth = 1.1;
        for (var k = -3; k <= 3; k++) {
          g.beginPath(); g.moveTo(0, S * 0.06); g.lineTo(k * S * 0.075, S * 0.5 + Math.abs(k) * 1.5); g.stroke();
        }
        if (tuyet) {
          // tuyet dong tren mep tren chum
          g.fillStyle = 'rgba(255,255,255,0.95)';
          g.beginPath();
          g.moveTo(-S * 0.2, S * 0.2);
          g.quadraticCurveTo(0, S * 0.02, S * 0.2, S * 0.2);
          g.quadraticCurveTo(S * 0.08, S * 0.27, 0, S * 0.22);
          g.quadraticCurveTo(-S * 0.1, S * 0.28, -S * 0.2, S * 0.2);
          g.fill();
        }
        CHUM.push(c);
      }
    }
    return CHUM;
  }
  var DEN = {};
  function veDen(mau) {
    if (DEN[mau]) return DEN[mau];
    var c = document.createElement('canvas'), S = 32;
    c.width = S; c.height = S;
    var g = c.getContext('2d'), gr = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
    gr.addColorStop(0, '#ffffff');
    gr.addColorStop(0.18, mau);
    gr.addColorStop(0.45, mau.replace('rgb(', 'rgba(').replace(')', ',0.35)'));
    gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, S, S);
    DEN[mau] = c;
    return c;
  }
  var MAU_DEN = ['rgb(255,82,82)', 'rgb(255,215,64)', 'rgb(64,196,255)', 'rgb(105,240,174)', 'rgb(255,128,171)', 'rgb(255,171,64)'];
  var ANH = {};
  function anh(url) {
    if (!url) return null;
    if (ANH[url]) return ANH[url];
    var im = new Image();
    im.decoding = 'async';
    im.src = url;
    ANH[url] = im;
    return im;
  }
  function sanSang(im) { return im && im.complete && im.naturalWidth > 0; }

  /* ---------- hinh dang cay (don vi: chieu cao cay = 1, y = 0 o goc tan, 1 o ngon) ---------- */
  var SO_TANG = 7;
  function banKinh(y) {
    // moi tang loe ra o mep duoi roi thu lai -> dang "vay" xep chong cua cay thong that
    var tang = Math.min(SO_TANG - 1, Math.floor(y * SO_TANG)), f = y * SO_TANG - tang;
    var goc = 0.44 * Math.pow(1 - tang / SO_TANG, 1.05) + 0.03;
    return goc * (1 - 0.42 * f) * (1 - y * 0.12);
  }

  function tao(cv, o) {
    o = o || {};
    var ctx = cv && cv.getContext && cv.getContext('2d');
    if (!ctx) return null;
    var dpr = DIEN_THOAI ? 1 : Math.min(2, window.devicePixelRatio || 1);
    var W = 1, H = 1;
    var chum = veChum();
    var rnd = rngTao(20261125);
    // chum la: vong theo chieu cao, so chum ti le chu vi
    var la = [], mat = DIEN_THOAI ? 0.62 : 1;
    for (var y = 0.02; y < 0.985; y += 0.022) {
      var R = banKinh(y), n = Math.max(3, Math.round(R * 128 * mat));
      for (var i = 0; i < n; i++) {
        var ph = (i + rnd() * 0.7) / n * PI2 + y * 7;
        la.push({ t: 0, ph: ph, y: y + (rnd() - 0.5) * 0.01, r: R * (0.9 + rnd() * 0.14), s: 0.045 + R * 0.085 + rnd() * 0.018, tuyet: rnd() < 0.16 && y > 0.05, n: rnd() });
        if (R > 0.12 && rnd() < 0.55) la.push({ t: 0, ph: ph + 0.3, y: y + 0.008, r: R * (0.55 + rnd() * 0.2), s: 0.06 + R * 0.08, tuyet: false, n: rnd() });
      }
    }
    // day den xoan oc
    var den = [], SO_DEN = DIEN_THOAI ? 70 : 110;
    for (var d = 0; d < SO_DEN; d++) {
      var tt = d / SO_DEN, yy = 0.04 + tt * 0.88;
      den.push({ t: 1, ph: tt * PI2 * 5.5, y: yy, r: banKinh(yy) * 1.03 + 0.008, mau: MAU_DEN[d % MAU_DEN.length], pha: rnd() * PI2, i: d });
    }
    var mon = [], qua = [];
    function datMon(ds) {
      mon = [];
      (ds || []).forEach(function (m, i) {
        // phan bo deu tren be mat theo goc vang (khong chong len nhau), tranh ngon va day
        // day R2 (hang so plastic): rai deu 2 chieu; mat do theo dien tich be mat non (duoi rong nhieu hon tren)
        var u = (i * 0.5698402910 + 0.37) % 1, yy = 0.06 + 0.8 * (1 - Math.sqrt(1 - u * 0.96));
        mon.push({ t: 2, ph: PI2 * ((i * 0.7548776662 + 0.5) % 1), y: yy, r: banKinh(yy) * 1.04 + 0.012, s: 0.085 * (m.co || 1), im: anh(m.hinh), du: m.du, lac: rnd() * PI2 });
      });
    }
    function datQua(ds) {
      qua = [];
      (ds || []).forEach(function (u, i) {
        var n2 = ds.length, ph = i / Math.max(1, n2) * PI2 + (i % 2) * 0.35;
        qua.push({ t: 3, ph: ph, y: -0.06, r: 0.3 + (i % 3) * 0.07, s: 0.13 - (i % 3) * 0.02, im: anh(u) });
      });
    }
    datMon(o.mon);
    datQua(o.qua);
    var sao = anh(o.saoAnh);
    var CAM = { goc: 0.6, toc: 0, keo: null, luc: performance.now(), tuXoay: o.tuXoay !== false && !giam(), cao: 0.2 };
    var dung = false, raf = 0, cuoi = performance.now();

    function co() {
      var r = cv.getBoundingClientRect();
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    }
    co();
    var ro = window.ResizeObserver ? new ResizeObserver(co) : null;
    if (ro) ro.observe(cv); else window.addEventListener('resize', co);

    // chieu 1 diem (ph quanh truc, ban kinh r, do cao y) -> man hinh: out.sx, out.sy, out.z (> 0 = phia truoc), out.k (phoi canh)
    var P = { cx: 0, day: 0, cao: 0, k: 0 };
    function chieu(ph, r, y, out) {
      var a = ph + CAM.goc, x = Math.sin(a) * r, z = Math.cos(a) * r;
      var ce = Math.cos(CAM.cao), se = Math.sin(CAM.cao);
      var yv = y * ce - z * se * 0.9, zv = z * ce + y * se * 0.3;
      var k = 2.6 / (2.6 - zv); // phoi canh nhe
      out.sx = P.cx + x * P.cao * k;
      out.sy = P.day - yv * P.cao * k;
      out.z = zv; out.k = k; out.nx = Math.sin(a); out.nz = Math.cos(a);
      return out;
    }
    var tam = {};
    function sang(nx, nz, y) {
      // nang tu tren-trai-truoc
      var l = nx * -0.55 + nz * 0.62 + 0.42;
      return Math.max(0, Math.min(1, 0.2 + l * 0.62 + y * 0.12));
    }

    function veKhung(now) {
      var dt = Math.min(0.05, (now - cuoi) / 1000);
      cuoi = now;
      if (!CAM.keo) {
        if (Math.abs(CAM.toc) > 0.02) { CAM.goc += CAM.toc * dt; CAM.toc *= Math.pow(0.04, dt); }
        else if (CAM.tuXoay && now - CAM.luc > 1800) CAM.goc += 0.22 * dt;
      }
      var g = ctx;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, W, H);
      P.cao = Math.min(H * 0.76, W * 1.2);
      P.cx = W / 2;
      P.day = H * 0.86;
      // bong + tuyet duoi goc
      var rg = g.createRadialGradient(P.cx, P.day + P.cao * 0.02, 0, P.cx, P.day + P.cao * 0.02, P.cao * 0.55);
      rg.addColorStop(0, 'rgba(255,255,255,0.9)');
      rg.addColorStop(0.6, 'rgba(232,242,255,0.55)');
      rg.addColorStop(1, 'rgba(232,242,255,0)');
      g.fillStyle = rg;
      g.beginPath(); g.ellipse(P.cx, P.day + P.cao * 0.02, P.cao * 0.55, P.cao * 0.12, 0, 0, PI2); g.fill();
      g.fillStyle = 'rgba(30,40,70,0.22)';
      g.beginPath(); g.ellipse(P.cx + P.cao * 0.03, P.day + P.cao * 0.015, P.cao * 0.3, P.cao * 0.06, 0, 0, PI2); g.fill();
      // than cay + tham goc cay
      var tw = P.cao * 0.07;
      var gt = g.createLinearGradient(P.cx - tw / 2, 0, P.cx + tw / 2, 0);
      gt.addColorStop(0, '#5a3418'); gt.addColorStop(0.45, '#8a5a2e'); gt.addColorStop(1, '#4a2a12');
      g.fillStyle = gt;
      g.fillRect(P.cx - tw / 2, P.day - P.cao * 0.08, tw, P.cao * 0.1);
      g.fillStyle = '#c62828';
      g.beginPath(); g.ellipse(P.cx, P.day + P.cao * 0.005, P.cao * 0.2, P.cao * 0.045, 0, 0, PI2); g.fill();
      g.strokeStyle = '#fff'; g.lineWidth = Math.max(2, P.cao * 0.012);
      g.beginPath(); g.ellipse(P.cx, P.day + P.cao * 0.005, P.cao * 0.2, P.cao * 0.045, 0, 0, PI2); g.stroke();

      // gom moi thu, sap xa -> gan
      var ds = [], i, x;
      for (i = 0; i < la.length; i++) { x = la[i]; chieu(x.ph, x.r, x.y + 0.07, x); ds.push(x); }
      for (i = 0; i < den.length; i++) { x = den[i]; chieu(x.ph, x.r, x.y + 0.07, x); ds.push(x); }
      for (i = 0; i < mon.length; i++) { x = mon[i]; chieu(x.ph, x.r, x.y + 0.07, x); ds.push(x); }
      for (i = 0; i < qua.length; i++) { x = qua[i]; chieu(x.ph, x.r, x.y + 0.07, x); x.z += 0.02; ds.push(x); }
      ds.sort(function (a, b) { return a.z - b.z; });
      var tiLeDen = o.den == null ? 1 : o.den, tg = now / 1000;
      for (i = 0; i < ds.length; i++) {
        x = ds[i];
        if (x.t === 0) {
          var sg = sang(x.nx, x.nz, x.y) * (0.55 + 0.45 * x.k) - (x.r < banKinh(x.y) * 0.8 ? 0.22 : 0) + (x.n - 0.5) * 0.12;
          var m = Math.max(0, Math.min(9, Math.round(sg * 9)));
          var anhLa = chum[m * 2 + (x.tuyet && x.nz > -0.2 ? 1 : 0)];
          var sz = x.s * P.cao * x.k * 1.25;
          // chum ben mep cay nghieng ra ngoai theo huong nhin (giua cay chuc thang xuong)
          var goc = -x.nx * 0.75, cs = Math.cos(goc), sn = Math.sin(goc);
          g.setTransform(dpr * cs, dpr * sn, -dpr * sn, dpr * cs, x.sx * dpr, x.sy * dpr);
          g.drawImage(anhLa, -sz / 2, -sz * 0.22, sz, sz);
          g.setTransform(dpr, 0, 0, dpr, 0, 0);
        } else if (x.t === 1) {
          var bat = (x.i / den.length) < tiLeDen;
          var nhap = bat ? 0.65 + 0.35 * Math.sin(tg * 3 + x.pha) : 0;
          var to = P.cao * 0.03 * x.k * (bat ? 1 + nhap * 0.5 : 0.6);
          g.globalAlpha = bat ? Math.max(0.15, 0.4 + 0.6 * (x.nz * 0.5 + 0.5)) : 0.45;
          if (bat) g.drawImage(veDen(x.mau), x.sx - to, x.sy - to, to * 2, to * 2);
          else { g.fillStyle = '#9aa3ad'; g.beginPath(); g.arc(x.sx, x.sy, P.cao * 0.006, 0, PI2); g.fill(); }
          g.globalAlpha = 1;
        } else if (x.t === 2 || x.t === 3) {
          if (!sanSang(x.im)) continue;
          var s2 = x.s * P.cao * x.k, yy2 = x.sy;
          var toi = x.t === 2 ? Math.max(0.35, 0.55 + 0.45 * x.nz) : 1;
          if (x.t === 2) {
            // day treo + lac nhe
            var lac = Math.sin(tg * 1.6 + x.lac) * 0.08;
            g.strokeStyle = 'rgba(255,236,170,0.7)'; g.lineWidth = 1;
            g.beginPath(); g.moveTo(x.sx, yy2 - s2 * 0.75); g.lineTo(x.sx, yy2 - s2 * 0.4); g.stroke();
            g.save();
            g.translate(x.sx, yy2 - s2 * 0.42);
            g.rotate(lac);
            g.globalAlpha = toi; // phia sau cay: mo dan (phan lon da bi la che)
            g.drawImage(x.im, -s2 / 2, 0, s2, s2);
            g.restore();
            g.globalAlpha = 1;
            x.mx = x.sx; x.my = yy2 + s2 * 0.08; x.mr = s2 * 0.6;
          } else {
            g.drawImage(x.im, x.sx - s2 / 2, yy2 - s2 * 0.85, s2, s2);
          }
        }
      }
      // ngoi sao tren ngon: xoay quanh truc doc (co dan ngang), hao quang
      var ngon = chieu(0, 0, 1.08, tam), ss = P.cao * 0.16;
      ngon.x = ngon.sx; ngon.y = ngon.sy;
      if (o.sao !== false) {
        if (o.saoSang) {
          var hg = g.createRadialGradient(ngon.x, ngon.y, 0, ngon.x, ngon.y, ss * 1.5);
          hg.addColorStop(0, 'rgba(255,246,176,' + (0.75 + 0.2 * Math.sin(tg * 2)) + ')');
          hg.addColorStop(0.4, 'rgba(255,213,79,0.35)');
          hg.addColorStop(1, 'rgba(255,213,79,0)');
          g.fillStyle = hg;
          g.beginPath(); g.arc(ngon.x, ngon.y, ss * 1.5, 0, PI2); g.fill();
        }
        if (sanSang(sao)) {
          var sx = Math.max(0.22, Math.abs(Math.cos(CAM.goc * 1.5)));
          g.save(); g.translate(ngon.x, ngon.y); g.scale(sx, 1);
          g.drawImage(sao, -ss / 2, -ss / 2, ss, ss);
          g.restore();
        }
      }
      if (o.hao) {
        var hz = g.createRadialGradient(P.cx, P.day - P.cao * 0.5, P.cao * 0.1, P.cx, P.day - P.cao * 0.5, P.cao * 0.75);
        hz.addColorStop(0, 'rgba(255,240,180,0.12)'); hz.addColorStop(1, 'rgba(255,240,180,0)');
        g.fillStyle = hz; g.fillRect(0, 0, W, H);
      }
    }

    function vong(now) {
      if (dung) return;
      if (!cv.isConnected) { huy(); return; }
      if (!document.hidden) veKhung(now);
      raf = requestAnimationFrame(vong);
    }
    raf = requestAnimationFrame(vong);

    // keo de xoay
    var keo = null;
    function xuong(e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      keo = { x0: e.clientX, x: e.clientX, t: performance.now(), di: 0 };
      CAM.keo = true; CAM.toc = 0;
      try { cv.setPointerCapture(e.pointerId); } catch (er) { /* bo qua */ }
    }
    function di(e) {
      if (!keo) return;
      var dx = e.clientX - keo.x, now = performance.now(), dtt = Math.max(1, now - keo.t);
      keo.di += Math.abs(dx);
      var dg = dx / Math.max(160, W * 0.45) * Math.PI;
      CAM.goc += dg;
      CAM.toc = CAM.toc * 0.5 + (dg / (dtt / 1000)) * 0.5;
      keo.x = e.clientX; keo.t = now;
      if (keo.di > 6) e.preventDefault();
    }
    function len(e) {
      if (!keo) return;
      var k = keo;
      keo = null; CAM.keo = false; CAM.luc = performance.now();
      if (k.di >= 6) cv._keoLuc = performance.now(); // de khung ngoai biet day la keo xoay, khong phai cham
      if (performance.now() - k.t > 120) CAM.toc = 0;
      if (k.di < 6 && o.cham) chamVao(e);
    }
    function chamVao(e) {
      var r = cv.getBoundingClientRect(), px = e.clientX - r.left, py = e.clientY - r.top, tot = null, kc = 1e9;
      mon.forEach(function (m) {
        if (m.mr == null || m.z < -0.05) return;
        var d2 = Math.hypot(m.mx - px, m.my - py);
        if (d2 < m.mr && d2 < kc) { kc = d2; tot = m; }
      });
      if (tot) o.cham(tot.du);
    }
    cv.addEventListener('pointerdown', xuong);
    cv.addEventListener('pointermove', di);
    cv.addEventListener('pointerup', len);
    cv.addEventListener('pointercancel', function () { keo = null; CAM.keo = false; CAM.luc = performance.now(); });
    cv.style.touchAction = 'pan-y';
    cv.style.cursor = 'grab';
    if (!cv.hasAttribute('tabindex')) cv.setAttribute('tabindex', '0');
    cv.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { CAM.toc = -2.4; CAM.luc = performance.now(); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { CAM.toc = 2.4; CAM.luc = performance.now(); e.preventDefault(); }
    });
    function huy() {
      dung = true;
      cancelAnimationFrame(raf);
      if (ro) ro.disconnect(); else window.removeEventListener('resize', co);
    }
    return { dung: huy, datMon: datMon, datQua: datQua, xoay: function (g) { CAM.goc = g; } };
  }
  window.NTCay3D = { tao: tao };
})();
