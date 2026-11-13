/* O chon "So cau" dung chung cho cac tro hoc sinh choi tren dien thoai (Che do lop hoc):
   Thi dua tren dien thoai (lop.js), Cuoc dua ki thu (lop-dua.js), tro camera qua ma QR (lop-cam.js).
   Cac moc 10 / 20 / 30 / 40 / 50 (chi hien moc nho hon so cau bai co), "Tat ca (n cau)" va o "So khac"
   (it nhat 5, nhieu nhat = so cau cac bai dang chon lam duoc, khong qua 100). Go so lon hon thi tu ve
   muc toi da va bao "Bai nay chi co n cau".
     LopSoCau.kep(n, max)        -> so cau hop le gan n nhat
     LopSoCau.html(chon, max)    -> cac nut [data-so] (nut dang chon co class "on") + o so .sc-o
     LopSoCau.gan(el, max, cb)   -> gan su kien trong el; cb(n) moi khi doi so cau (da kep)              */
(function () {
  'use strict';
  var MOC = [10, 20, 30, 40, 50], MIN = 5, MAX = 100;
  function tran(max) { return Math.max(1, Math.min(MAX, Math.floor(+max || 0))); }
  function kep(n, max) {
    var m = tran(max);
    n = Math.round(+n || 0);
    if (!(n > 0)) n = Math.min(10, m);
    return Math.max(Math.min(MIN, m), Math.min(m, n));
  }
  function html(chon, max) {
    var m = tran(max), ds = MOC.filter(function (n) { return n < m; }), h = '';
    chon = kep(chon, m);
    ds.forEach(function (n) { h += '<button type="button" data-so="' + n + '" class="' + (n === chon ? 'on' : '') + '">' + n + ' câu</button>'; });
    // bai co nhieu hon 100 cau: moi lan choi toi da 100
    h += '<button type="button" data-so="' + m + '" class="' + (chon === m ? 'on' : '') + '">' + (+max > MAX ? 'Tối đa' : 'Tất cả') + ' <small>(' + m + ' câu)</small></button>';
    if (m > MIN) {
      var khac = chon !== m && ds.indexOf(chon) < 0;
      h += '<label class="sc-khac' + (khac ? ' on' : '') + '">Số khác <input type="number" class="sc-o" inputmode="numeric" min="' + MIN + '" max="' + m + '" step="1" value="' + (khac ? chon : '') +
        '" placeholder="' + MIN + '–' + m + '" aria-label="Số câu khác (từ ' + MIN + ' đến ' + m + ')"></label>';
    }
    return h + '<small class="sc-bao" role="status" hidden></small>';
  }
  function gan(el, max, cb) {
    var m = tran(max);
    function danh(n, tuO, giuO) {
      Array.prototype.forEach.call(el.querySelectorAll('[data-so]'), function (b) { b.classList.toggle('on', !tuO && +b.getAttribute('data-so') === n); });
      var o = el.querySelector('.sc-o');
      if (o) { o.parentNode.classList.toggle('on', !!tuO); if (!tuO && !giuO) o.value = ''; }
    }
    function bao(msg) { var b = el.querySelector('.sc-bao'); if (b) { b.textContent = msg; b.hidden = !msg; } }
    Array.prototype.forEach.call(el.querySelectorAll('[data-so]'), function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation(); // trang goi co the dang bat [data-so] o khung ngoai (lop-dua.js)
        var n = +b.getAttribute('data-so');
        danh(n, false); bao('');
        cb(n);
      });
    });
    var o = el.querySelector('.sc-o');
    if (!o) return;
    function doc(chot) {
      var v = parseInt(o.value, 10);
      if (!(v > 0)) { if (chot) bao(''); return; }
      var n = kep(v, m);
      bao(v > m ? (+max > MAX ? 'Mỗi lần chơi tối đa ' + m + ' câu' : 'Bài này chỉ có ' + m + ' câu') : v < n ? 'Ít nhất ' + n + ' câu' : '');
      if (chot && v !== n) o.value = n;
      if (v !== n && !chot) return; // dang go do: chua doi vi so chua hop le
      // trung mot moc co san thi sang luon nut do
      var nut = el.querySelector('[data-so="' + n + '"]');
      danh(n, !nut, !chot); // dang go thi giu so trong o (go 10 roi go tiep 0 thanh 100)
      cb(n);
    }
    o.addEventListener('input', function () { doc(false); });
    o.addEventListener('change', function () { doc(true); });
    o.addEventListener('keydown', function (e) { e.stopPropagation(); if (e.key === 'Enter') { e.preventDefault(); o.blur(); } });
    o.addEventListener('click', function (e) { e.stopPropagation(); });
  }
  window.LopSoCau = { MOC: MOC, MIN: MIN, MAX: MAX, kep: kep, html: html, gan: gan };
})();
