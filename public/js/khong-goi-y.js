/* Tat goi y tu dien cua trinh duyet o moi o lam bai.
   Trinh duyet nho nhung gi hoc sinh tung go roi hien danh sach (会, 要, ni…)
   ngay duoi o dien tu — lo dap an va roi mat. O nao cung duoc tat ngay khi
   xuat hien (ke ca o do JS ve sau), tru:
   · o da ghi ro autocomplete (email, username…),
   · o trong form co mat khau (dang nhap / dang ky) — de trinh quan ly mat khau van chay. */
(function () {
  'use strict';
  var KIEU = /^(text|search|number|tel|url)?$/i;

  function tat(el) {
    var ac = el.getAttribute('autocomplete');
    if (ac && ac !== 'on') return;
    if (el.tagName === 'INPUT' && !KIEU.test(el.getAttribute('type') || '')) return;
    var f = el.form || (el.closest && el.closest('form'));
    if (f && f.querySelector('input[type="password"]')) return;
    el.setAttribute('autocomplete', 'off');
    el.setAttribute('autocorrect', 'off');
    el.setAttribute('autocapitalize', 'off');
    el.setAttribute('spellcheck', 'false');
  }
  function quet(n) {
    if (!n || n.nodeType !== 1) return;
    if (n.matches && n.matches('input, textarea')) tat(n);
    if (n.querySelectorAll) Array.prototype.forEach.call(n.querySelectorAll('input, textarea'), tat);
  }
  if (window.MutationObserver) {
    new MutationObserver(function (ds) {
      ds.forEach(function (d) { Array.prototype.forEach.call(d.addedNodes, quet); });
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { quet(document.body); });
  else quet(document.body);
})();
