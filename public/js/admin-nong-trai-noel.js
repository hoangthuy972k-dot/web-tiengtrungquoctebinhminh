/* Trang Bao cao — tab "Tin nhắn nông trại": phan mua Noel (chi xem) — nong-trai-noel-thiep.js.
   Thiep Giang sinh cac em trong lop gui nhau, thiep cac em gui co (moi lop, ca Thi tran Tu Do), qua bo vao tat Noel.
   admin-nong-trai-tin.js goi __trNtNoel.tai(goi, lop) khi tai va __trNtNoel.html(lop, esc, thoiGian) khi ve. */
(function () {
  'use strict';
  var st = { d: null };
  function tai(goi, lop) {
    return goi('/api/admin/farm-noel?lop=' + encodeURIComponent(lop || '')).then(function (d) { st.d = d; }, function () { st.d = null; });
  }
  function html(lop, esc, thoiGian) {
    var d = st.d;
    if (!d || (lop && d.lop !== lop)) return '';
    var co = '<div class="admin-section-title" style="font-size:1rem">👩‍🏫 Thiệp các em gửi cô (mọi lớp)</div>' + (d.co.length ? '<div class="gy-ds">' + d.co.slice(0, 60).map(function (x) {
      return '<article class="gy-muc"><header class="gy-dau"><b class="gy-ten">' + esc(x.tenTu) + '</b> · ' + esc(x.lop) + '<span class="gy-tg">' + esc(thoiGian(x.t)) + '</span></header>' +
        '<p class="gy-nd">💌 <span lang="zh">' + esc(x.cau) + '</span> — ' + esc(x.vn) + ' <small>(mẫu ' + esc(x.m) + ')</small></p></article>';
    }).join('') + '</div>' : '<p class="admin-empty">Chưa có em nào gửi thiệp cho cô.</p>');
    var the = '<div class="admin-section-title" style="font-size:1rem">💌 Thiệp giữa các em trong lớp</div>' + (d.the.length ? '<div class="gy-ds">' + d.the.slice(0, 80).map(function (x) {
      return '<article class="gy-muc"><header class="gy-dau"><b class="gy-ten">' + esc(x.tenTu) + '</b> → ' + esc(x.tenDen) + '<span class="gy-tg">' + esc(thoiGian(x.t)) + '</span></header>' +
        '<p class="gy-nd"><span lang="zh">' + esc(x.cau) + '</span> <small>(mẫu ' + esc(x.m) + (x.mo ? ' · đã mở' : ' · chưa mở') + ')</small></p></article>';
    }).join('') + '</div>' : '<p class="admin-empty">Lớp này chưa có thiệp nào.</p>');
    var tat = '<div class="admin-section-title" style="font-size:1rem">🧦 Quà bỏ vào tất Noel</div>' + (d.tat.length ? '<div class="gy-ds">' + d.tat.slice(0, 80).map(function (x) {
      return '<article class="gy-muc"><header class="gy-dau"><b class="gy-ten">' + esc(x.tenTu) + '</b> → ' + esc(x.tenDen) + '<span class="gy-tg">' + esc(thoiGian(x.t)) + '</span></header>' +
        '<p class="gy-nd">🎁 ' + esc(x.mon) + ' · <span lang="zh">' + esc(x.cau) + '</span>' + (x.mo ? ' · đã mở' : ' · chờ 25/12') + '</p></article>';
    }).join('') + '</div>' : '<p class="admin-empty">Chưa có quà nào trong tất của lớp này.</p>');
    return '<section class="admin-section"><div class="admin-section-title">🎄 Mùa Noel ' + esc(d.nam) + ': thiệp &amp; tất Noel</div>' +
      '<p class="tc-hint">Chỉ xem. Học sinh chỉ chọn câu chúc mẫu (không gõ tự do). Mỗi em gửi tối đa 5 thiệp/ngày, bỏ tối đa 3 món quà nhỏ/ngày vào tất bạn cùng thị trấn (≤ 50 xu hoặc ≤ 10 món, không hàng quý); tất mở từ 25/12.</p>' +
      co + the + tat + '</section>';
  }
  window.__trNtNoel = { tai: tai, html: html };
})();
