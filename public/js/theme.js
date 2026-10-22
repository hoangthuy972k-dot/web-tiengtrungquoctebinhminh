/* Che do sang / toi — chay trong <head> truoc khi ve trang de khong chop nen trang.
   Khong chon gi: theo cai dat cua may (prefers-color-scheme). Da bam nut: luu
   'light' hoac 'dark' trong localStorage (hyv_theme) — dung chung cho trang chu
   va trang bai hoc day du.
   Trang bai hoc (co .site-header) tu gan them nut mat trang / mat troi o goc tren;
   trang chu co nut rieng (#themeToggle, xu ly trong app.js). */
(function () {
  var KEY = 'hyv_theme';
  var root = document.documentElement;
  try {
    var t = localStorage.getItem(KEY);
    if (t === 'dark' || t === 'light') root.setAttribute('data-theme', t);
  } catch (e) { /* trinh duyet chan bo nho: theo may */ }

  function mayToi() { return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches); }
  function hienTai() {
    var t = root.getAttribute('data-theme');
    return t === 'dark' || t === 'light' ? t : (mayToi() ? 'dark' : 'light');
  }

  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>';
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';

  function ganNut() {
    var head = document.querySelector('.site-header');
    if (!head || !root.classList.contains('ho-tro-toi') || document.getElementById('themeToggle')) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.id = 'themeToggle';
    b.className = 'lt-theme-toggle';
    function ve() {
      var toi = hienTai() === 'dark';
      b.innerHTML = toi ? SUN : MOON;
      b.setAttribute('aria-pressed', toi ? 'true' : 'false');
      b.setAttribute('aria-label', toi ? 'Chuyển sang nền sáng' : 'Chuyển sang nền tối');
      b.title = 'Nền sáng / nền tối';
    }
    b.addEventListener('click', function () {
      var moi = hienTai() === 'dark' ? 'light' : 'dark';
      var may = mayToi() ? 'dark' : 'light';
      try {
        if (moi === may) localStorage.removeItem(KEY);
        else localStorage.setItem(KEY, moi);
      } catch (e) { /* bo qua */ }
      if (moi === may) root.removeAttribute('data-theme');
      else root.setAttribute('data-theme', moi);
      ve();
    });
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      if (mq.addEventListener) mq.addEventListener('change', ve);
    }
    ve();
    head.appendChild(b);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ganNut);
  else ganNut();
})();
