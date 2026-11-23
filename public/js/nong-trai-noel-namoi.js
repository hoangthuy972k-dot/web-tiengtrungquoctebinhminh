/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Dem nguoc nam moi 新年快乐 (2026-11-18). May chu: nong-trai-noel-namoi.js
   (st.kt.nnm = { gio, nam, moc, dem, le, phao, da, qua } chi gui ngay 31/12 va 1/1–6/1).
   - 31/12: chip "🎆 Còn hh:mm:ss đến năm <nam>", 10 giay cuoi dem so to giua man hinh (十 九 八 …).
   - 00:00: phao hoa (canvas) phu ca nong trai + thi tran trong gio dau tien hoac den khi em dong;
     loi chuc 新年快乐！ (cham de nghe) + nut nhan qua nam moi (1 lan, may chu kiem).
   - 1/1–6/1: chip "🧧 Quà năm mới" (chua nhan) / ngay 1/1 "🎆 新年快乐" (xem lai phao hoa).
   May giam chuyen dong: it phao hon, bay cham hon (khong tat).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, esc = N.esc, S = N.S;
  var GIO = 3600000;
  var Y = { x: null, lech: 0, chip: null, dem: null, dangPhao: false, tuDong: false, ph: null, gui: false, soCu: -1 };
  var SO_ZH = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  var SO_PY = ['líng', 'yī', 'èr', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ', 'shí'];

  function giam() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function bay() { return Date.now() + Y.lech; }
  function daDong(nam) { try { return localStorage.getItem('hyv_nnm_dong') === String(nam); } catch (e) { return false; } }
  function ghiDong(nam) { try { localStorage.setItem('hyv_nnm_dong', String(nam)); } catch (e) { /* bo qua */ } }
  // 1/1–6/1 (tinh ca khi trang mo tu dem 31/12 roi qua giao thua); may chu kiem lai khi nhan qua
  function laLe(x) { var t = bay(); return !!x && (x.le || (t >= x.moc && t < x.moc + 6 * 86400000)); }
  function hai(n) { return (n < 10 ? '0' : '') + n; }

  /* ---------------- chip tren man hinh ---------------- */
  function chip() {
    if (Y.chip) return Y.chip;
    var b = document.createElement('button');
    b.type = 'button';
    b.id = 'nnmChip';
    b.className = 'nnm-chip';
    b.addEventListener('click', function () {
      var x = Y.x;
      if (!x) return;
      if (bay() < x.moc) { N.doc('新年快乐！'); N.bao('🎆 Đêm nay 0 giờ có pháo hoa trên nông trại — nhớ quay lại xem nhé!'); return; }
      moPhao(false);
    });
    document.body.appendChild(b);
    Y.chip = b;
    return b;
  }
  function boChip() { if (Y.chip) { Y.chip.remove(); Y.chip = null; } }

  function nhip() {
    var x = Y.x;
    if (!x) { boChip(); return; }
    var t = bay();
    if (t < x.moc) {
      var con = x.moc - t;
      if (!x.dem || con > 86400000) { boChip(); return; }
      var s = Math.ceil(con / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), g = s % 60;
      var c = chip();
      c.classList.remove('qua');
      c.innerHTML = '<span aria-hidden="true">🎆</span> Còn <b>' + hai(h) + ':' + hai(m) + ':' + hai(g) + '</b> đến năm ' + x.nam;
      c.setAttribute('aria-label', 'Còn ' + h + ' giờ ' + m + ' phút ' + g + ' giây đến năm ' + x.nam);
      if (s <= 10) demTo(s); else if (Y.dem) { Y.dem.remove(); Y.dem = null; }
      return;
    }
    if (Y.dem) { Y.dem.remove(); Y.dem = null; }
    // da sang nam moi
    var sau = t - x.moc;
    if (sau < GIO && !Y.dangPhao && !daDong(x.nam)) moPhao(true);
    if (Y.dangPhao && Y.tuDong && sau >= GIO) dongPhao(false);
    var ngay1 = sau < 86400000;
    if ((!x.da && laLe(x)) || ngay1) {
      var c2 = chip();
      c2.classList.add('qua');
      c2.innerHTML = x.da ? '<span aria-hidden="true">🎆</span> <b lang="zh">新年快乐</b>' : '<span aria-hidden="true">🧧</span> Quà năm mới <b>' + x.nam + '</b>';
      c2.setAttribute('aria-label', x.da ? 'Xem lại pháo hoa năm mới' : 'Nhận quà năm mới ' + x.nam);
      c2.hidden = Y.dangPhao;
    } else boChip();
  }
  // 10 giay cuoi: so to giua man hinh kem chu Han
  function demTo(s) {
    if (Y.soCu === s && Y.dem) return;
    Y.soCu = s;
    if (!Y.dem) {
      Y.dem = document.createElement('div');
      Y.dem.className = 'nnm-dem';
      Y.dem.setAttribute('aria-live', 'polite');
      document.body.appendChild(Y.dem);
    }
    Y.dem.innerHTML = '<b>' + s + '</b><span lang="zh">' + SO_ZH[s] + '</span><small>' + SO_PY[s] + '</small>';
    Y.dem.classList.remove('nhay'); void Y.dem.offsetWidth; Y.dem.classList.add('nhay');
  }

  /* ---------------- phao hoa (canvas) ---------------- */
  var MAU = [
    ['#ff5252', '#ff8a80', '#fff'], ['#ffd740', '#fff59d', '#ffab00'], ['#40c4ff', '#80d8ff', '#fff'], ['#69f0ae', '#b9f6ca', '#ffd740'],
    ['#ff80ab', '#ea80fc', '#fff'], ['#ffab40', '#ffd180', '#ff5252'], ['#b388ff', '#8c9eff', '#fff'], ['#ffffff', '#ffd740', '#ff80ab'],
  ];
  function Phao(cv, it) {
    var ctx = cv.getContext('2d'), W = 0, H = 0, dpr = 1, ten = [], hat = [], loe = [], chay = true, raf = 0, cuoi = 0, hen = 0;
    var tl = it ? 0.62 : 1, soHat = it ? 0.45 : 1, cach = it ? 1500 : 520;
    function co() {
      dpr = Math.min(window.devicePixelRatio || 1, innerWidth < 640 ? 1.5 : 2);
      W = innerWidth; H = innerHeight;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    co();
    window.addEventListener('resize', co);
    function rd(a, b) { return a + Math.random() * (b - a); }
    function ban(x) {
      var ty = H * rd(0.1, 0.42), tx = x == null ? W * rd(0.12, 0.88) : x;
      var cao = H + 10 - ty, g = 360;
      ten.push({ x: tx + rd(-30, 30), y: H + 10, vx: rd(-25, 25), vy: -Math.sqrt(2 * g * cao), g: g, ty: ty, m: MAU[Math.floor(Math.random() * MAU.length)], vet: [] });
    }
    function no(x, y, m) {
      var kieu = Math.random(), n, i, a, v, sp = Math.min(W, H) * (W < 640 ? 0.42 : 0.32);
      loe.push({ x: x, y: y, r: sp * 0.9, s: 1, m: m[0] });
      function hatMoi(vx, vy, mau, song, can, lap) {
        hat.push({ x: x, y: y, vx: vx, vy: vy, m: mau, s: song, max: song, can: can, lap: lap, vet: [], nhap: Math.random() < 0.25 });
      }
      if (kieu < 0.4) { // cau tron (peony) 2 mau
        n = Math.round(rd(70, 100) * soHat);
        for (i = 0; i < n; i++) { a = Math.random() * Math.PI * 2; v = sp * Math.sqrt(Math.random()) * rd(0.85, 1.15); hatMoi(Math.cos(a) * v, Math.sin(a) * v, m[i % 2], rd(1.1, 1.7), 1.3, false); }
      } else if (kieu < 0.6) { // vong tron + loi
        n = Math.round(56 * soHat);
        var lech = rd(0, Math.PI);
        for (i = 0; i < n; i++) { a = lech + i / n * Math.PI * 2; hatMoi(Math.cos(a) * sp, Math.sin(a) * sp * 0.75, m[0], 1.5, 1.1, false); }
        for (i = 0; i < n / 2; i++) { a = Math.random() * Math.PI * 2; v = sp * 0.35 * Math.random(); hatMoi(Math.cos(a) * v, Math.sin(a) * v, m[2], 1.2, 1.4, true); }
      } else if (kieu < 0.8) { // lieu ru vang (willow)
        n = Math.round(80 * soHat);
        for (i = 0; i < n; i++) { a = Math.random() * Math.PI * 2; v = sp * 0.8 * Math.sqrt(Math.random()); hatMoi(Math.cos(a) * v, Math.sin(a) * v - 30, i % 3 ? '#ffd54f' : '#ffb300', rd(2.2, 3), 2.2, true); }
      } else if (kieu < 0.9) { // trai tim
        n = Math.round(70 * soHat);
        for (i = 0; i < n; i++) {
          var t = i / n * Math.PI * 2, hx = 16 * Math.pow(Math.sin(t), 3), hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
          hatMoi(hx * sp / 17, hy * sp / 17, i % 4 ? '#ff5c8a' : '#fff', 1.5, 1.2, false);
        }
      } else { // lap lanh (crackle) nhieu mau
        n = Math.round(90 * soHat);
        for (i = 0; i < n; i++) { a = Math.random() * Math.PI * 2; v = sp * rd(0.2, 1); hatMoi(Math.cos(a) * v, Math.sin(a) * v, MAU[i % MAU.length][0], rd(1, 1.6), 1.5, true); }
      }
    }
    function buoc(ts) {
      if (!chay) return;
      raf = requestAnimationFrame(buoc);
      var dt = Math.min(0.05, (ts - (cuoi || ts)) / 1000) * tl;
      cuoi = ts;
      if (ts - hen > cach / tl) { hen = ts; ban(); if (!it && Math.random() < 0.3) ban(); }
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineCap = 'round';
      // anh sang luc no
      for (var l = loe.length - 1; l >= 0; l--) {
        var L = loe[l];
        L.s -= dt * 3.2;
        if (L.s <= 0) { loe.splice(l, 1); continue; }
        var gr = ctx.createRadialGradient(L.x, L.y, 0, L.x, L.y, L.r);
        gr.addColorStop(0, 'rgba(255,255,255,' + (0.28 * L.s) + ')');
        gr.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gr;
        ctx.beginPath(); ctx.arc(L.x, L.y, L.r, 0, Math.PI * 2); ctx.fill();
      }
      // phao dang bay len
      for (var r = ten.length - 1; r >= 0; r--) {
        var R = ten[r];
        R.vet.push(R.x, R.y); if (R.vet.length > 16) R.vet.splice(0, 2);
        R.vy += R.g * dt; R.x += R.vx * dt; R.y += R.vy * dt;
        if (R.vy >= -40 || R.y <= R.ty) { ten.splice(r, 1); no(R.x, R.y, R.m); continue; }
        ctx.strokeStyle = 'rgba(255,214,120,0.85)'; ctx.lineWidth = 2.2;
        ctx.beginPath(); ctx.moveTo(R.vet[0], R.vet[1]);
        for (var v = 2; v < R.vet.length; v += 2) ctx.lineTo(R.vet[v], R.vet[v + 1]);
        ctx.lineTo(R.x, R.y); ctx.stroke();
        ctx.fillStyle = '#fff8d0'; ctx.beginPath(); ctx.arc(R.x, R.y, 2.4, 0, Math.PI * 2); ctx.fill();
        if (Math.random() < 0.5) hat.push({ x: R.x, y: R.y, vx: rd(-20, 20), vy: rd(10, 50), m: '#ffcf70', s: 0.5, max: 0.5, can: 2, lap: false, vet: [], nhap: false, nho: 1 });
      }
      // hat sau khi no (co duoi, rot cham, nhap nhay)
      for (var p = hat.length - 1; p >= 0; p--) {
        var P = hat[p];
        P.s -= dt;
        if (P.s <= 0) {
          hat.splice(p, 1);
          if (P.nhap && !it && hat.length < 1400) for (var k = 0; k < 3; k++) hat.push({ x: P.x, y: P.y, vx: rd(-50, 50), vy: rd(-50, 50), m: '#fff', s: 0.25, max: 0.25, can: 3, lap: true, vet: [], nhap: false, nho: 1 });
          continue;
        }
        P.vet.push(P.x, P.y); if (P.vet.length > (P.nho ? 4 : 12)) P.vet.splice(0, 2);
        var keo = Math.exp(-P.can * dt);
        P.vx *= keo; P.vy = P.vy * keo + 70 * dt;
        P.x += P.vx * dt; P.y += P.vy * dt;
        var a = Math.max(0, P.s / P.max);
        if (P.lap && Math.random() < 0.35) a *= 0.25;
        ctx.globalAlpha = a;
        ctx.strokeStyle = P.m; ctx.lineWidth = P.nho ? 1.2 : 2;
        ctx.beginPath(); ctx.moveTo(P.vet[0], P.vet[1]);
        for (var q = 2; q < P.vet.length; q += 2) ctx.lineTo(P.vet[q], P.vet[q + 1]);
        ctx.lineTo(P.x, P.y); ctx.stroke();
        ctx.fillStyle = P.m; ctx.beginPath(); ctx.arc(P.x, P.y, P.nho ? 1 : 1.7, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    }
    // mo man: 3 qua phao cung luc
    setTimeout(function () { if (chay) { ban(W * 0.25); ban(W * 0.5); ban(W * 0.75); } }, 200);
    raf = requestAnimationFrame(buoc);
    return {
      dung: function () { chay = false; cancelAnimationFrame(raf); window.removeEventListener('resize', co); },
      ban: function (x) { ban(x); },
    };
  }

  N.phaoHoa = Phao; // dung chung: phao hoa giao thua Tet (public/js/nong-trai-tet.js)

  function moPhao(tuDong) {
    var x = Y.x;
    if (!x || Y.dangPhao) return;
    Y.dangPhao = true;
    Y.tuDong = tuDong;
    if (Y.chip) Y.chip.hidden = true;
    var lop = document.createElement('div');
    lop.id = 'nnmPhao';
    lop.className = 'nnm-phao';
    lop.innerHTML = '<div class="nnm-dem-troi" aria-hidden="true"></div><canvas class="nnm-cv" aria-hidden="true"></canvas>' +
      '<section class="nnm-chao" role="dialog" aria-label="Chúc mừng năm mới ' + x.nam + '">' +
      '<button type="button" class="nnm-dong" aria-label="Đóng pháo hoa">✕</button>' +
      '<button type="button" class="nnm-zh" data-nnm-doc lang="zh">新年快乐！</button>' +
      '<p class="nnm-py">Xīnnián kuàilè! <span aria-hidden="true">🔊</span></p>' +
      '<p class="nnm-vn">Chúc mừng năm mới <b>' + x.nam + '</b> 🎉</p>' +
      '<div class="nnm-qua" id="nnmQua">' + quaHtml() + '</div></section>';
    document.body.appendChild(lop);
    document.body.classList.add('co-nnm');
    requestAnimationFrame(function () { lop.classList.add('hien'); });
    Y.ph = Phao(lop.querySelector('canvas'), giam());
    lop.querySelector('.nnm-dong').addEventListener('click', function () { dongPhao(true); });
    lop.querySelector('[data-nnm-doc]').addEventListener('click', function () { N.doc('新年快乐！'); if (Y.ph) Y.ph.ban(); });
    ganQua();
    N.tieng('mung');
  }
  function quaHtml() {
    var x = Y.x;
    if (!laLe(x)) return '';
    if (x.da) return '<p class="nnm-da">🧧 Em đã nhận quà năm mới ' + x.nam + '. Chúc em năm mới học thật giỏi!</p>';
    return '<button type="button" class="nnm-nhan" id="nnmNhan">🧧 Nhận quà năm mới</button><small>' + x.qua.xu + ' xu + ' + x.qua.xp + ' KN + 1 món bất ngờ · 1 lần, đến hết 6/1</small>';
  }
  function tenMon(m) {
    if (!m) return '';
    if (m.loai === 'xu') return '+' + m.n + ' xu';
    var c = S.cat || {}, t = (m.loai === 'con' ? c.CON : m.loai === 'tt' ? c.TT : c.SP) || {}, v = t[m.k] || {};
    return (m.n > 1 ? m.n + ' ' : '') + (v.vn || m.k) + (v.zh ? ' <span lang="zh">' + esc(v.zh) + '</span>' : '');
  }
  function ganQua() {
    var b = $('#nnmNhan');
    if (!b) return;
    b.addEventListener('click', function () {
      if (Y.gui) return;
      Y.gui = true; b.disabled = true;
      N.goi('/api/farm/noel/namoi', {}).then(function (r) {
        Y.gui = false;
        if (r.st) N.nhanTrangThai(r.st);
        var q = r.qua, o = $('#nnmQua');
        if (o) o.innerHTML = '<p class="nnm-da nhan">🧧 Em nhận được <b>' + q.xu + ' xu</b>, <b>' + q.xp + ' KN</b>' + (q.mon ? ' và <b>' + tenMon(q.mon) + '</b>' : '') + '!</p>';
        if (N.fx && N.fx.mung) N.fx.mung(o || null, true);
        N.doc('新年快乐！');
        for (var i = 0; i < 4 && Y.ph; i++) setTimeout(function () { if (Y.ph) Y.ph.ban(); }, i * 160);
      }, function (e) { Y.gui = false; b.disabled = false; N.bao(e.message, 'loi'); });
    });
  }
  function dongPhao(boi) {
    var lop = $('#nnmPhao');
    if (boi && Y.x) ghiDong(Y.x.nam);
    Y.dangPhao = false;
    if (Y.ph) { Y.ph.dung(); Y.ph = null; }
    document.body.classList.remove('co-nnm');
    if (lop) { lop.classList.remove('hien'); setTimeout(function () { lop.remove(); }, 450); }
    if (Y.chip) Y.chip.hidden = false;
    nhip();
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && Y.dangPhao) dongPhao(true); });

  N.sau.push(function (st) {
    var x = st && st.kt && st.kt.nnm;
    Y.x = x && !S.tham ? x : (S.tham ? Y.x : null);
    if (x) Y.lech = x.gio - Date.now();
    var q = $('#nnmQua');
    if (q && Y.x && !Y.gui && !q.querySelector('.nhan')) { q.innerHTML = quaHtml(); ganQua(); }
    nhip();
  });
  N.nhip.push(nhip);
  if (S.st) { var x0 = S.st.kt && S.st.kt.nnm; if (x0) { Y.x = x0; Y.lech = x0.gio - Date.now(); } nhip(); }
})();
