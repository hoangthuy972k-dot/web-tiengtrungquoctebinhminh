/* Nut "🏡 Về nông trại" — hoc sinh bam "Học kiếm sao" o nong trai (link co &tu=nt) sang trang hoc,
   hoc xong bam nut nay de quay lai nong trai. Nho trong sessionStorage cua tab (6 gio), bam ✕ de an.
   Nap TRUOC app.js o index.html (app.js xoa ?hoc=…&tu=nt khoi thanh dia chi), lesson-engine.js tu nap. */
(function () {
  'use strict';
  var KHOA = 'hyv_tu_nt', HAN = 6 * 3600 * 1000;
  function doc() { try { return +sessionStorage.getItem(KHOA) || 0; } catch (e) { return 0; } }
  function ghi(v) { try { if (v) sessionStorage.setItem(KHOA, String(v)); else sessionStorage.removeItem(KHOA); } catch (e) { /* bo qua */ } }
  if (/[?&]tu=nt(?:&|$)/.test(location.search || '')) ghi(Date.now());
  var t = doc();
  if (!t || Date.now() - t > HAN) { if (t) ghi(0); return; }
  if (/\/nong-trai/.test(location.pathname)) return;

  function ve() {
    if (document.getElementById('veNongTrai')) return;
    var st = document.createElement('style');
    st.textContent = '#veNongTrai{position:fixed;left:14px;bottom:14px;z-index:9990;display:flex;align-items:center;gap:6px;' +
      'font:700 15px/1.2 "Be Vietnam Pro",system-ui,sans-serif}' +
      '#veNongTrai a{display:inline-flex;align-items:center;gap:6px;padding:10px 16px;border-radius:999px;background:#2f8a57;color:#fff;' +
      'text-decoration:none;border:2.5px solid #1d5c38;box-shadow:0 4px 0 #1d5c38}' +
      '#veNongTrai a:active{transform:translateY(3px);box-shadow:0 1px 0 #1d5c38}' +
      '#veNongTrai a:focus-visible,#veNongTrai button:focus-visible{outline:3px solid #ffc83d;outline-offset:2px}' +
      '#veNongTrai button{width:30px;height:30px;border-radius:50%;border:2px solid #1d5c38;background:#fff;color:#1d5c38;font:inherit;cursor:pointer}' +
      '@media print{#veNongTrai{display:none}}';
    document.head.appendChild(st);
    var d = document.createElement('div');
    d.id = 'veNongTrai';
    d.innerHTML = '<a href="/nong-trai" title="Quay lại nông trại của em">🏡 Về nông trại</a>' +
      '<button type="button" aria-label="Ẩn nút về nông trại" title="Ẩn">✕</button>';
    d.querySelector('a').addEventListener('click', function () { ghi(0); });
    d.querySelector('button').addEventListener('click', function () { ghi(0); d.remove(); });
    document.body.appendChild(d);
  }
  if (document.body) ve(); else document.addEventListener('DOMContentLoaded', ve);
})();
