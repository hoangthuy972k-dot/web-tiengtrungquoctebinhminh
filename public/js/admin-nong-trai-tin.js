/* Trang Bao cao — tab "Tin nhắn nông trại": tin nhan TU DO hoc sinh gui nhau o nong trai (nong-trai-tin.js).
   Xem theo lop (tin bi bao cao len dau), xoa tin, khoa nhan tu do cua 1 em N ngay, bat / tat go tu do cho ca lop. */
(function () {
  'use strict';
  var PW_KEY = 'hyv_admin_pw';
  var state = { d: null, lop: '' };
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function goi(url, opts) {
    opts = opts || {};
    opts.headers = Object.assign({ 'X-Admin-Password': sessionStorage.getItem(PW_KEY) || '' }, opts.headers || {});
    if (opts.body) opts.headers['Content-Type'] = 'application/json';
    return fetch(url, opts).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw new Error(j.error || 'Lỗi máy chủ.'); return j; }); });
  }
  function thoiGian(ms) { var d = new Date(ms); return d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }); }
  function demTab(n) { var el = $('#ntinTabDem'); if (!el) return; el.hidden = !n; el.textContent = n > 99 ? '99+' : String(n); }
  function tai() {
    if (!sessionStorage.getItem(PW_KEY)) return Promise.resolve();
    return goi('/api/admin/farm-tin' + (state.lop ? '?lop=' + encodeURIComponent(state.lop) : '')).then(function (d) { state.d = d; state.lop = d.lop; demTab(d.tongBaoCao || 0); }).catch(function () { /* chua dang nhap */ });
  }
  function ve() {
    var hop = $('#trNtTin'), d = state.d;
    if (!hop) return;
    if (!d) { hop.innerHTML = '<section class="admin-section"><p class="admin-empty">Đang tải…</p></section>'; return; }
    var lop = d.lops.filter(function (l) { return l.id === d.lop; })[0];
    hop.innerHTML = '<section class="admin-section"><div class="admin-section-title">🌾 Tin nhắn tự do ở nông trại</div>' +
      '<p class="tc-hint">Học sinh cùng lớp viết tin cho nhau khi sang thăm nông trại (tối đa 120 ký tự, có bộ lọc từ xấu, số điện thoại, đường link). Tin bị học sinh báo cáo nằm trên cùng. Tin tự xoá sau 30 ngày.</p>' +
      '<div class="gy-loc"><label>Lớp: <select data-nt-lop>' + d.lops.map(function (l) { return '<option value="' + esc(l.id) + '"' + (l.id === d.lop ? ' selected' : '') + '>' + esc(l.ten) + (l.bc ? ' · 🚩 ' + l.bc : '') + (l.mo ? '' : ' (đang tắt)') + '</option>'; }).join('') + '</select></label>' +
      (lop ? '<label class="nt-tin-ct"><input type="checkbox" data-nt-mo' + (lop.mo ? ' checked' : '') + '> Cho phép gõ tự do ở lớp này</label>' : '') +
      '<button type="button" class="btn btn-outline gy-lammoi" data-nt-lammoi>🔄 Làm mới</button></div>' +
      (d.khoa.length ? '<p class="tc-hint">Đang khoá nhắn tự do: ' + d.khoa.map(function (k) { return '<b>' + esc(k.ten) + '</b> (đến ' + esc(thoiGian(k.den)) + ') <button type="button" class="btn btn-outline" data-nt-khoa="' + esc(k.id) + '" data-ngay="0">Mở khoá</button>'; }).join(' · ') + '</p>' : '') +
      (d.ds.length ? '<div class="gy-ds">' + d.ds.map(function (x) {
        return '<article class="gy-muc' + (x.bc ? ' is-moi' : '') + '" data-nt-id="' + esc(x.id) + '" data-den="' + esc(x.den) + '" data-tu="' + esc(x.tu) + '">' +
          '<header class="gy-dau">' + (x.bc ? '<span class="gy-moi">🚩 Bị báo cáo</span>' : '') + '<b class="gy-ten">' + esc(x.tenTu || '(đã xoá tài khoản)') + '</b> → ' + esc(x.tenDen) +
          '<span class="gy-tg">' + esc(thoiGian(x.t)) + '</span></header>' +
          '<p class="gy-nd">' + esc(x.tx) + '</p>' +
          '<div class="gy-hanh-dong"><button type="button" class="btn btn-outline" data-nt-xoa>Xoá tin</button>' +
          '<button type="button" class="btn btn-outline" data-nt-khoa="' + esc(x.tu) + '" data-ngay="3">Khoá nhắn tự do của ' + esc(x.tenTu || 'em này') + ' 3 ngày</button>' +
          '<button type="button" class="btn btn-outline" data-nt-khoa="' + esc(x.tu) + '" data-ngay="7">7 ngày</button></div><p class="gy-kq" aria-live="polite"></p></article>';
      }).join('') + '</div>' : '<p class="admin-empty">Lớp này chưa có tin nhắn tự do nào.</p>') + '</section>';
  }
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t.closest || !t.closest('#trNtTin')) return;
    if (t.hasAttribute('data-nt-lop')) { state.lop = t.value; tai().then(ve); }
    if (t.hasAttribute('data-nt-mo')) goi('/api/admin/farm-tin/lop', { method: 'POST', body: JSON.stringify({ classId: state.lop, mo: t.checked }) }).then(tai).then(ve).catch(function (err) { alert(err.message); });
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('button');
    if (!t || !t.closest('#trNtTin')) return;
    if (t.hasAttribute('data-nt-lammoi')) { tai().then(ve); return; }
    var muc = t.closest('[data-nt-id]'), kq = muc && muc.querySelector('.gy-kq');
    var xong = function () { return tai().then(ve); }, loi = function (err) { if (kq) kq.textContent = err.message; else alert(err.message); t.disabled = false; };
    if (t.hasAttribute('data-nt-xoa')) {
      if (!confirm('Xoá tin nhắn này?')) return;
      t.disabled = true;
      goi('/api/admin/farm-tin/xoa', { method: 'POST', body: JSON.stringify({ den: muc.getAttribute('data-den'), id: muc.getAttribute('data-nt-id') }) }).then(xong).catch(loi);
    } else if (t.hasAttribute('data-nt-khoa')) {
      var ngay = +t.getAttribute('data-ngay');
      if (ngay && !confirm('Khoá nhắn tự do của em này ' + ngay + ' ngày? (câu mẫu vẫn gửi được)')) return;
      t.disabled = true;
      goi('/api/admin/farm-tin/khoa', { method: 'POST', body: JSON.stringify({ userId: t.getAttribute('data-nt-khoa'), ngay: ngay }) }).then(xong).catch(loi);
    }
  });
  window.__trNtTin = { render: function () { ve(); tai().then(ve); } };
  setTimeout(tai, 1200);
})();
