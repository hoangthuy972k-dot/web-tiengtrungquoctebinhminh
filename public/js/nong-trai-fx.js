/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — hieu ung "suong tay" (2026-11). Chi la hinh: phao giay, lap lanh, xu bay, so dem len,
   rung nhe, dong dau, bang ron, chuoi dung 🔥. Am thanh do public/js/nong-trai.js phat (tieng()).
   Nguyen tac: chi transform / opacity (WAAPI), toi da TOI_DA hat cung luc, tu don DOM, tab an thi bo qua,
   khong chan thao tac (pointer-events: none, hieu ung thuong <= 600 ms).
   ══════════════════════════════════════════════════════════════════ */
window.NTFX = (function () {
  'use strict';
  var TOI_DA = 30, dem = 0, cham = { x: innerWidth / 2, y: innerHeight / 2 };
  var MAU = ['#ffd54f', '#ff8a65', '#81c784', '#64b5f6', '#ce93d8', '#ff7aa2'];
  document.addEventListener('pointerdown', function (e) { cham = { x: e.clientX, y: e.clientY }; }, true);
  function duoc(n) { return !document.hidden && dem + (n || 1) <= TOI_DA && !!document.body && typeof document.body.animate === 'function'; }
  function tam(el) {
    if (!el) return { x: cham.x, y: cham.y };
    if (el.x != null && el.y != null) return el;
    var r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }
  // 1 hat: the div co dinh, chay 1 animation roi tu xoa
  function hat(cls, x, y, khung, ms, tre, html, kieu) {
    if (!duoc()) return null;
    var e = document.createElement('div');
    e.className = 'fx-hat ' + cls;
    if (html) e.textContent = html;
    if (kieu) e.setAttribute('style', kieu);
    e.style.left = x + 'px'; e.style.top = y + 'px';
    document.body.appendChild(e);
    dem++;
    var a = e.animate(khung, { duration: ms, delay: tre || 0, easing: 'cubic-bezier(.2,.8,.3,1)', fill: 'both' });
    var xong = function () { if (e.parentNode) { e.remove(); dem--; } };
    a.onfinish = xong; a.oncancel = xong;
    setTimeout(xong, ms + (tre || 0) + 400);
    return e;
  }
  // Phao giay: n manh (toi da 18) bung tu 1 diem roi roi xuong
  function phao(noi, n) {
    var p = tam(noi);
    n = Math.min(18, n || 14);
    for (var i = 0; i < n; i++) {
      var g = Math.random() * Math.PI * 2, d = 50 + Math.random() * 90, dx = Math.cos(g) * d, dy = Math.sin(g) * d - 40;
      hat('fx-giay', p.x, p.y, [
        { transform: 'translate(-50%,-50%) translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: 'translate(-50%,-50%) translate(' + dx.toFixed(0) + 'px,' + dy.toFixed(0) + 'px) rotate(' + (Math.random() * 360).toFixed(0) + 'deg)', opacity: 1, offset: 0.55 },
        { transform: 'translate(-50%,-50%) translate(' + (dx * 1.15).toFixed(0) + 'px,' + (dy + 90).toFixed(0) + 'px) rotate(' + (Math.random() * 720).toFixed(0) + 'deg)', opacity: 0 },
      ], 780 + Math.random() * 220, i * 8, '', 'background:' + MAU[i % MAU.length] + (i % 3 === 0 ? ';border-radius:50%' : ''));
    }
  }
  // Lap lanh: n ngoi sao nho quanh 1 diem / 1 phan tu
  function lapLanh(noi, n) {
    var p = tam(noi);
    n = Math.min(8, n || 5);
    for (var i = 0; i < n; i++) {
      var g = (i / n) * Math.PI * 2 + Math.random() * 0.6, d = 22 + Math.random() * 26;
      hat('fx-sao', p.x, p.y, [
        { transform: 'translate(-50%,-50%) scale(0.2)', opacity: 0 },
        { transform: 'translate(-50%,-50%) translate(' + (Math.cos(g) * d * 0.6).toFixed(0) + 'px,' + (Math.sin(g) * d * 0.6).toFixed(0) + 'px) scale(1.1)', opacity: 1, offset: 0.4 },
        { transform: 'translate(-50%,-50%) translate(' + (Math.cos(g) * d).toFixed(0) + 'px,' + (Math.sin(g) * d).toFixed(0) + 'px) scale(0.3)', opacity: 0 },
      ], 520, i * 30, '✦');
    }
  }
  // Xu bay tu 1 diem toi 1 phan tu (o xu tren HUD), toi da 6 dong
  function xuBay(tu, den, n) {
    var a = tam(tu), b = tam(den);
    n = Math.max(1, Math.min(6, n || 4));
    for (var i = 0; i < n; i++) {
      var lx = (Math.random() - 0.5) * 50, ly = (Math.random() - 0.5) * 30;
      hat('fx-xu', a.x, a.y, [
        { transform: 'translate(-50%,-50%) scale(0.5)', opacity: 0 },
        { transform: 'translate(-50%,-50%) translate(' + lx.toFixed(0) + 'px,' + (ly - 26).toFixed(0) + 'px) scale(1)', opacity: 1, offset: 0.25 },
        { transform: 'translate(-50%,-50%) translate(' + (b.x - a.x).toFixed(0) + 'px,' + (b.y - a.y).toFixed(0) + 'px) scale(0.6)', opacity: 0.9 },
      ], 520, i * 45);
    }
  }
  // So dem len / xuong trong 1 phan tu (dinh = ham dinh dang so)
  var dangDem = new WeakMap(), luotDem = 0;
  function demLen(el, tu, den, ms, dinh) {
    if (!el) return;
    dinh = dinh || String;
    var luot = ++luotDem;
    dangDem.set(el, luot); // lan dem moi nhat cua phan tu nay (lan cu tu dung)
    if (document.hidden || tu === den) { el.textContent = dinh(den); return; }
    var t0 = performance.now(), dai = ms || 500;
    (function buoc(t) {
      if (dangDem.get(el) !== luot) return;
      var k = Math.min(1, (t - t0) / dai), e = 1 - Math.pow(1 - k, 3);
      el.textContent = dinh(Math.round(tu + (den - tu) * e));
      if (k < 1) requestAnimationFrame(buoc);
    })(t0);
    // phong khi trinh duyet khong chay requestAnimationFrame (tab nen): het gio van dat dung so cuoi
    setTimeout(function () { if (dangDem.get(el) === luot) el.textContent = dinh(den); }, dai + 90);
  }
  function chay(el, khung, ms) { if (el && el.animate && !document.hidden) try { el.animate(khung, { duration: ms, easing: 'ease-out' }); } catch (e) { /* bo qua */ } }
  // Nay nhe (nut vua bam, o xu vua nhan tien…), rung nhe (sai), vong xanh (dung)
  function nhay(el, to) { chay(el, [{ scale: '1' }, { scale: String(to || 1.14) }, { scale: '0.97' }, { scale: '1' }], 380); }
  function rung(el) { chay(el, [{ translate: '0' }, { translate: '-6px' }, { translate: '5px' }, { translate: '-3px' }, { translate: '2px' }, { translate: '0' }], 320); }
  function xanh(el) {
    if (!el || !duoc()) return;
    var r = el.getBoundingClientRect();
    hat('fx-vong', r.left + r.width / 2, r.top + r.height / 2, [
      { transform: 'translate(-50%,-50%) scale(0.92)', opacity: 0.9 },
      { transform: 'translate(-50%,-50%) scale(1.12)', opacity: 0 },
    ], 480, 0, '', 'width:' + r.width + 'px;height:' + r.height + 'px;border-radius:' + (getComputedStyle(el).borderRadius || '14px'));
    nhay(el, 1.05);
  }
  // Chu noi bay len (🔥 x5!, +10…)
  function chuBay(noi, chu, to) {
    var p = tam(noi);
    hat('fx-chu' + (to ? ' to' : ''), p.x, p.y, [
      { transform: 'translate(-50%,-50%) scale(0.4)', opacity: 0 },
      { transform: 'translate(-50%,-90%) scale(1.15)', opacity: 1, offset: 0.25 },
      { transform: 'translate(-50%,-130%) scale(1)', opacity: 1, offset: 0.7 },
      { transform: 'translate(-50%,-170%) scale(0.9)', opacity: 0 },
    ], to ? 1100 : 850, 0, chu);
  }
  // Chuoi dung lien tiep: 3 / 5 / 10 … cang cao cang ruc ro
  function chuoi(n, noi) {
    var p = tam(noi);
    chuBay(p, '🔥 x' + n + '!', n >= 5);
    lapLanh(p, n >= 10 ? 8 : n >= 5 ? 6 : 4);
    if (n >= 10) phao(p, 14);
  }
  // Dong dau "xong viec"
  function dongDau(noi, chu) {
    var p = tam(noi);
    hat('fx-dau', p.x, p.y, [
      { transform: 'translate(-50%,-50%) rotate(-14deg) scale(2.4)', opacity: 0 },
      { transform: 'translate(-50%,-50%) rotate(-14deg) scale(0.92)', opacity: 1, offset: 0.22 },
      { transform: 'translate(-50%,-50%) rotate(-14deg) scale(1)', opacity: 1, offset: 0.75 },
      { transform: 'translate(-50%,-50%) rotate(-14deg) scale(1)', opacity: 0 },
    ], 1100, 0, chu || '✔ XONG');
  }
  // Bang ron tren dau man hinh (len cap, qua tram…) — khong chan thao tac
  function bangRon(chu) {
    if (document.hidden || !document.body.animate) return;
    var e = document.createElement('div');
    e.className = 'fx-ron';
    e.textContent = chu;
    document.body.appendChild(e);
    var a = e.animate([
      { transform: 'translate(-50%,-140%)', opacity: 0 },
      { transform: 'translate(-50%,0)', opacity: 1, offset: 0.14 },
      { transform: 'translate(-50%,0)', opacity: 1, offset: 0.8 },
      { transform: 'translate(-50%,-140%)', opacity: 0 },
    ], { duration: 1900, easing: 'cubic-bezier(.2,.9,.3,1)' });
    a.onfinish = function () { e.remove(); };
    setTimeout(function () { e.remove(); }, 2400);
  }
  // An mung ngan (qua vong quay, thu hang nha may, thang dau gia, qua tram, qua cot truyen)
  function mung(noi, lon) { var p = tam(noi); phao(p, lon ? 18 : 10); lapLanh(p, lon ? 7 : 4); }
  return { phao: phao, lapLanh: lapLanh, xuBay: xuBay, demLen: demLen, nhay: nhay, rung: rung, xanh: xanh, chuBay: chuBay, chuoi: chuoi,
    dongDau: dongDau, bangRon: bangRon, mung: mung, diem: function () { return cham; }, soHat: function () { return dem; } };
})();
