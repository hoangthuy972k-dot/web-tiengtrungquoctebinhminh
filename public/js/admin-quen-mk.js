/* Trang Bao cao — tab "Quen mat khau": hoc sinh gui yeu cau tu khung dang nhap,
   co bam "Cap ma" lay ma 6 so (het han 48 gio) kem tin nhan Zalo soan san, gui cho
   em; em tu nhap ma + mat khau moi. May chu KHONG gui gi — co tu dan vao Zalo.
   Nut [data-qmk-cap="userId"] o bat ky dau (vd trang chi tiet hoc sinh) cung cap ma duoc. */
(function () {
  'use strict';

  var PW_KEY = 'hyv_admin_pw';
  var SITE_KEY = 'hyv_admin_site';
  var ds = [];

  function tr() { return window.__tr; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function site() {
    var s = '';
    try { s = localStorage.getItem(SITE_KEY) || ''; } catch (e) { /* bo qua */ }
    return (s || location.origin).replace(/\/+$/, '');
  }
  function goi(method, url, body) {
    return fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': sessionStorage.getItem(PW_KEY) || '' },
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) throw new Error(d.error || ('Lỗi ' + r.status));
        return d;
      });
    });
  }
  function luc(ms) {
    var p = Math.round((Date.now() - ms) / 60000);
    if (p < 1) return 'vừa xong';
    if (p < 60) return p + ' phút trước';
    if (p < 1440) return Math.round(p / 60) + ' giờ trước';
    return Math.round(p / 1440) + ' ngày trước';
  }
  function tenGoi(ten) { var w = String(ten || '').trim().split(/\s+/); return w[w.length - 1] || 'em'; }
  function tinNhan(d) {
    return 'Chào ' + tenGoi(d.ten) + ', mã đặt lại mật khẩu Hi Hán của em là: ' + d.ma + ' (dùng được trong 48 giờ).\n' +
      'Em vào ' + site() + ' → Đăng nhập → bấm "Quên mật khẩu?" → ở mục "Đã có mã 6 số từ cô?" nhập email ' + d.email +
      ', mã ' + d.ma + ' và mật khẩu mới nhé. Nhớ ghi lại mật khẩu mới!';
  }
  function saoChep(text, nut) {
    function xong() { if (nut) { var cu = nut.textContent; nut.textContent = '✓ Đã sao chép'; setTimeout(function () { nut.textContent = cu; }, 1600); } }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(xong, function () { /* bo qua */ });
    else {
      var t = document.createElement('textarea');
      t.value = text; document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); xong(); } catch (e) { /* bo qua */ }
      document.body.removeChild(t);
    }
  }
  function kqHtml(d) {
    var tn = tinNhan(d);
    return '<div class="qmk-ma-hop">' +
      '<div class="qmk-ma-so">' + esc(d.ma) + '</div>' +
      '<div class="qmk-ma-phu">Mã của <b>' + esc(d.ten) + '</b> · ' + esc(d.email) + ' · hết hạn ' + new Date(d.het).toLocaleString('vi-VN') + '</div>' +
      '<textarea class="qmk-ma-tn" rows="4" readonly>' + esc(tn) + '</textarea>' +
      '<button type="button" class="btn btn-primary qmk-chep">📋 Sao chép tin nhắn Zalo</button>' +
    '</div>';
  }
  function capMa(userId, requestId) {
    return goi('POST', '/api/admin/reset-code', { userId: userId, requestId: requestId || '' });
  }

  // Nut cap ma dung o noi khac (trang chi tiet hoc sinh)
  document.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-qmk-cap]') : null;
    if (b) {
      var o = b.parentNode.querySelector('.qmk-kq');
      b.disabled = true;
      capMa(b.getAttribute('data-qmk-cap')).then(function (d) {
        if (o) o.innerHTML = kqHtml(d);
      }).catch(function (err) { if (o) o.textContent = '⚠ ' + err.message; })
        .then(function () { b.disabled = false; });
      return;
    }
    var c = e.target.closest ? e.target.closest('.qmk-chep') : null;
    if (c) saoChep(c.parentNode.querySelector('.qmk-ma-tn').value, c);
  });

  function demTab() {
    var el = $('#qmkTabDem');
    if (!el) return;
    el.textContent = ds.length;
    el.hidden = !ds.length;
  }
  function tai() {
    return goi('GET', '/api/admin/pw-requests').then(function (d) { ds = d.ds || []; demTab(); return ds; });
  }

  function hocSinh() { var d = tr() && tr().data(); return (d && d.students) || []; }

  function render() {
    var box = $('#trQmk');
    if (!box) return;
    box.innerHTML = '<p class="tr-hint">Đang tải…</p>';
    tai().then(function () {
      var khop = ds.filter(function (r) { return r.userId; });
      box.innerHTML =
        '<section class="admin-section">' +
          '<div class="tr-toolbar"><div class="admin-section-title">🔑 Yêu cầu quên mật khẩu</div>' +
          (khop.length > 1 ? '<button type="button" class="btn btn-outline" id="qmkTatCa">Cấp mã cho cả ' + khop.length + ' em đã khớp</button>' : '') + '</div>' +
          '<p class="tr-hint">Học sinh bấm “Quên mật khẩu?” ở khung đăng nhập sẽ hiện ở đây. Cô bấm <b>Cấp mã</b>, sao chép tin nhắn gửi em qua Zalo — em tự nhập mã và đặt mật khẩu mới (mã dùng 48 giờ, sai 5 lần tự huỷ). Cũng có thể cấp mã cho bất kỳ em nào trong trang chi tiết học sinh.</p>' +
          '<div id="qmkTatCaKq"></div>' +
          (ds.length ? '<div class="qmk-ds">' + ds.map(dongHtml).join('') + '</div>'
            : '<p class="admin-empty">Chưa có yêu cầu nào. 🎉</p>') +
        '</section>';
      $all('.qmk-dong', box).forEach(ganDong);
      var tc = $('#qmkTatCa', box);
      if (tc) tc.addEventListener('click', function () {
        tc.disabled = true;
        var kq = [], chuoi = Promise.resolve();
        khop.forEach(function (r) {
          chuoi = chuoi.then(function () { return capMa(r.userId).then(function (d) { kq.push(tinNhan(d)); }).catch(function () { /* bo qua em loi */ }); });
        });
        chuoi.then(function () {
          $('#qmkTatCaKq', box).innerHTML = '<div class="qmk-ma-hop"><div class="qmk-ma-phu">Đã cấp ' + kq.length + ' mã. Tin nhắn cho từng em (cách nhau bằng dòng trống):</div>' +
            '<textarea class="qmk-ma-tn" rows="10" readonly>' + esc(kq.join('\n\n')) + '</textarea>' +
            '<button type="button" class="btn btn-primary qmk-chep">📋 Sao chép tất cả</button></div>';
          tc.disabled = false;
        });
      });
    }).catch(function (err) { box.innerHTML = '<p class="admin-empty">⚠ ' + esc(err.message) + '</p>'; });
  }

  function dongHtml(r) {
    var ai = r.userId
      ? '<b>' + esc(r.ten) + '</b> <span class="qmk-em">' + esc(r.email) + '</span>' + (r.daCap ? ' <span class="qmk-nhan">đã cấp mã, chờ em đổi</span>' : '')
      : '<span class="qmk-chua">Chưa khớp tài khoản — em ghi: “' + esc(r.nhap) + '”</span>';
    var chon = r.userId ? '' :
      '<label class="qmk-chon">Chọn đúng em: <select class="qmk-sel"><option value="">— tìm trong danh sách —</option>' +
        hocSinh().slice().sort(function (a, b) { return String(a.name).localeCompare(String(b.name), 'vi'); }).map(function (s) {
          return '<option value="' + esc(s.id) + '">' + esc(s.name) + ' · ' + esc(s.email) + '</option>';
        }).join('') + '</select></label>';
    return '<div class="qmk-dong" data-id="' + esc(r.id) + '" data-uid="' + esc(r.userId) + '">' +
      '<div class="qmk-dau"><div>' + ai + (r.userId ? '<div class="qmk-phu">Em ghi: “' + esc(r.nhap) + '”</div>' : '') + '</div>' +
      '<span class="qmk-luc">' + luc(r.luc) + '</span></div>' + chon +
      '<div class="qmk-nut"><button type="button" class="btn btn-primary qmk-cap"' + (r.userId ? '' : ' disabled') + '>🔑 ' + (r.daCap ? 'Cấp lại mã' : 'Cấp mã') + '</button>' +
      '<button type="button" class="btn btn-ghost qmk-bo">Bỏ qua</button></div>' +
      '<div class="qmk-kq"></div></div>';
  }
  function ganDong(el) {
    var cap = $('.qmk-cap', el), sel = $('.qmk-sel', el);
    if (sel) sel.addEventListener('change', function () { cap.disabled = !sel.value; });
    cap.addEventListener('click', function () {
      var uid = el.getAttribute('data-uid') || (sel && sel.value);
      if (!uid) return;
      cap.disabled = true;
      // yeu cau ghi bang ten: cap xong thi dong yeu cau luon (da gan dung em)
      capMa(uid, el.getAttribute('data-uid') ? '' : el.getAttribute('data-id')).then(function (d) {
        $('.qmk-kq', el).innerHTML = kqHtml(d);
      }).catch(function (err) { $('.qmk-kq', el).textContent = '⚠ ' + err.message; })
        .then(function () { cap.disabled = false; });
    });
    $('.qmk-bo', el).addEventListener('click', function () {
      if (!window.confirm('Bỏ qua yêu cầu này?')) return;
      goi('POST', '/api/admin/pw-requests/xong', { id: el.getAttribute('data-id') }).then(function () {
        ds = ds.filter(function (r) { return r.id !== el.getAttribute('data-id'); });
        demTab();
        el.parentNode.removeChild(el);
      }).catch(function (err) { alert(err.message); });
    });
  }

  window.__trQmk = { render: render, tai: tai };
  // Dem so yeu cau ngay khi co da dang nhap trang Bao cao
  if (sessionStorage.getItem(PW_KEY)) tai().catch(function () { /* bo qua */ });
})();
