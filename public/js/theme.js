/* Che do sang / toi — chay trong <head> truoc khi ve trang de khong chop nen trang.
   Khong chon gi: theo cai dat cua may (prefers-color-scheme). Da bam nut: luu
   'light' hoac 'dark' trong localStorage (hyv_theme). */
(function () {
  try {
    var t = localStorage.getItem('hyv_theme');
    if (t === 'dark' || t === 'light') document.documentElement.setAttribute('data-theme', t);
  } catch (e) { /* trinh duyet chan bo nho: theo may */ }
})();
