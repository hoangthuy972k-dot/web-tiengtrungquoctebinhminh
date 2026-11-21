/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — CHE DO NHE (2026-11, "lam nong trai nhe hon tren dien thoai")
   · body.nt-nhe: tat lop canh (may, buom, chim), tuyet roi, ong gia Noel bay, may / dom dom vung que,
     moi chuyen dong trang tri cua do vat tren ruong va bong do (filter) — do vat, thanh thoi gian, bong bong viec
     van du. Luu theo may (hyv_nt_nhe = '1' bat / '0' em da chon tat).
   · Nut bat / tat trong "⋯ Thêm" (nhom Cài đặt). May cham (khung hinh dau trang > 34 ms, hoac may it nhan / it RAM)
     ma em chua tung chon -> goi y 1 lan.
   · File nay chay ngay sau nong-trai.js de lop body co truoc khi cac module khac ve.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$;
  function doc() { try { return localStorage.getItem('hyv_nt_nhe'); } catch (e) { return null; } }
  function ghi(v) { try { localStorage.setItem('hyv_nt_nhe', v); } catch (e) { /* bo qua */ } }
  function bat() { return document.body.classList.contains('nt-nhe'); }
  document.body.classList.toggle('nt-nhe', doc() === '1');

  var nut = null;
  function capNhat() {
    if (!nut) return;
    var on = bat();
    nut.querySelector('b').textContent = 'Chế độ nhẹ: ' + (on ? 'Bật' : 'Tắt');
    nut.querySelector('small').textContent = on ? 'đã tắt tuyết, mây, hiệu ứng trang trí · chạm để tắt' : 'máy chậm, giật? chạm để bớt hiệu ứng cho mượt';
    nut.setAttribute('aria-pressed', on ? 'true' : 'false');
  }
  function doi() {
    var on = !bat();
    document.body.classList.toggle('nt-nhe', on);
    ghi(on ? '1' : '0');
    capNhat();
    N.bao(on ? '🐢 Đã bật Chế độ nhẹ — bớt hiệu ứng để nông trại chạy mượt hơn.' : '✨ Đã tắt Chế độ nhẹ — hiệu ứng trở lại.');
  }
  function taoNut() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || nut) return;
    nut = document.createElement('button');
    nut.type = 'button'; nut.className = 'nt-them-o nt-them-nhe'; nut.id = 'ntCheDoNhe';
    nut.innerHTML = '<span class="nt-them-emo" aria-hidden="true">🐢</span><span class="nt-muc-chu"><b></b><small></small></span>';
    var sau = luoi.querySelector('[data-mo="kt-sotay"]');
    luoi.insertBefore(nut, sau ? sau.nextSibling : null);
    nut.addEventListener('click', doi);
    capNhat();
  }
  taoNut();

  // goi y 1 lan cho may cham (chi khi em chua tung tu chon)
  function goiY() {
    if (doc() !== null || bat()) return;
    try { if (localStorage.getItem('hyv_nt_nhe_goi')) return; localStorage.setItem('hyv_nt_nhe_goi', '1'); } catch (e) { return; }
    N.bao('🐢 Nông trại hơi giật? Vào ⋯ Thêm → bật “Chế độ nhẹ” cho mượt hơn.');
  }
  var mayYeu = (navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
  if (mayYeu) setTimeout(goiY, 8000);
  else if (window.requestAnimationFrame) {
    // do 3 giay khung hinh (sau 4 giay dau, luc nong trai da ve xong); trung vi > 34 ms = may dang cham
    setTimeout(function () {
      if (document.hidden || bat() || doc() !== null) return;
      var ds = [], t0 = 0, dau = performance.now();
      (function khung(t) {
        if (t0) ds.push(t - t0);
        t0 = t;
        if (t - dau < 3000 && !document.hidden) { requestAnimationFrame(khung); return; }
        if (ds.length < 20) return;
        ds.sort(function (a, b) { return a - b; });
        if (ds[Math.floor(ds.length / 2)] > 34) goiY();
      })(dau);
    }, 4000);
  }
  window.NTNhe = { bat: bat, doi: doi };
})();
