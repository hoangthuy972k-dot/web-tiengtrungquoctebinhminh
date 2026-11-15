/* /lop?csai=1 — mo tu tab "📊 Câu lớp hay sai" o trang quan tri (nut "▶ Tạo bài ôn"):
   nap san cac cau ca lop hay sai vao "Thẻ trả lời" (window.LopThe, lop-the.js) de on lai tren lop.
   Cau do trang quan tri ghi vao localStorage hyv_csai_on = { t, nhan, cau: [{ options, answer, pre, noBlank, context, why }] }. */
(function () {
  'use strict';
  if (!/[?&]csai=1(?:&|$)/.test(location.search)) return;
  var d = null;
  try { d = JSON.parse(localStorage.getItem('hyv_csai_on') || 'null'); } catch (e) { d = null; }
  // bo tham so tren thanh dia chi: tai lai trang khong mo lai bai on cu
  try { history.replaceState(null, '', location.pathname + location.hash); } catch (e) { /* bo qua */ }
  if (!d || !Array.isArray(d.cau) || !d.cau.length || !(Date.now() - (d.t || 0) < 60 * 60 * 1000)) return;
  var lan = 0;
  function mo() {
    if (!window.LopThe) { if (++lan < 50) setTimeout(mo, 200); return; }
    window.LopThe.mo({ cau: d.cau, nhan: String(d.nhan || 'Câu lớp hay sai') });
  }
  if (document.readyState === 'complete') setTimeout(mo, 300);
  else window.addEventListener('load', function () { setTimeout(mo, 300); });
})();
