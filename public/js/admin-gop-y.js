/* Trang Bao cao — tab "Gop y": doc gop y hoc sinh gui tu nut Tro giup,
   danh dau da doc va tra loi (hoc sinh da dang nhap thay cau tra loi ngay
   trong muc Gop y tren web). */
(function () {
  'use strict';
  var PW_KEY = 'hyv_admin_pw';
  var state = { items: [], loai: {}, loc: 'chua', dangTai: false };

  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function goi(url, opts) {
    opts = opts || {};
    opts.headers = Object.assign({ 'X-Admin-Password': sessionStorage.getItem(PW_KEY) || '' }, opts.headers || {});
    if (opts.body) opts.headers['Content-Type'] = 'application/json';
    return fetch(url, opts).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) throw new Error(j.error || 'Lỗi máy chủ.');
        return j;
      });
    });
  }
  function thoiGian(ms) {
    var d = new Date(ms);
    return d.toLocaleDateString('vi-VN') + ' ' + d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  }

  function demTab(n) {
    var el = $('#gyTabDem');
    if (!el) return;
    el.hidden = !n;
    el.textContent = n > 99 ? '99+' : String(n);
  }

  function tai() {
    if (!sessionStorage.getItem(PW_KEY)) return Promise.resolve();
    state.dangTai = true;
    return goi('/api/admin/gop-y').then(function (d) {
      state.items = d.items || [];
      state.loai = d.loai || {};
      demTab(d.chuaDoc || 0);
    }).catch(function () { /* chua dang nhap / loi mang: bo qua */ })
      .then(function () { state.dangTai = false; });
  }

  function ve() {
    var hop = $('#trGopY');
    if (!hop) return;
    var ds = state.items.filter(function (x) {
      if (state.loc === 'chua') return !x.docMs;
      if (state.loc === 'chuaTraLoi') return !x.traLoi;
      return true;
    });
    var chuaDoc = state.items.filter(function (x) { return !x.docMs; }).length;
    hop.innerHTML =
      '<section class="admin-section">' +
        '<div class="admin-section-title">💬 Góp ý của học sinh</div>' +
        '<p class="tc-hint">Học sinh gửi từ nút <b>Trợ giúp → Góp ý cho cô</b> ở góc phải mọi trang. Em nào đã đăng nhập sẽ thấy câu trả lời của thầy/cô ngay trong mục đó.</p>' +
        '<div class="gy-loc">' +
          ['chua', 'chuaTraLoi', 'tatCa'].map(function (k) {
            var ten = { chua: 'Chưa đọc (' + chuaDoc + ')', chuaTraLoi: 'Chưa trả lời', tatCa: 'Tất cả (' + state.items.length + ')' }[k];
            return '<button type="button" class="gy-loc-nut' + (state.loc === k ? ' is-on' : '') + '" data-gy-loc="' + k + '">' + ten + '</button>';
          }).join('') +
          '<button type="button" class="btn btn-outline gy-lammoi" data-gy-lammoi>🔄 Làm mới</button>' +
        '</div>' +
        (ds.length ? '<div class="gy-ds">' + ds.map(veMuc).join('') + '</div>'
          : '<p class="admin-empty">' + (state.loc === 'chua' ? 'Đã đọc hết góp ý. 🎉' : 'Chưa có góp ý nào.') + '</p>') +
      '</section>';
  }

  function veMuc(x) {
    return '<article class="gy-muc' + (x.docMs ? '' : ' is-moi') + '" data-gy-id="' + esc(x.id) + '">' +
      '<header class="gy-dau">' +
        '<span class="gy-loai gy-loai-' + esc(x.loai) + '">' + esc(state.loai[x.loai] || x.loai) + '</span>' +
        '<b class="gy-ten">' + esc(x.ten) + '</b>' +
        '<span class="gy-tg">' + esc(thoiGian(x.createdMs)) + '</span>' +
        (x.docMs ? '' : '<span class="gy-moi">Mới</span>') +
      '</header>' +
      '<p class="gy-nd">' + esc(x.noiDung) + '</p>' +
      (x.trang ? '<p class="gy-trang">📍 ' + esc(x.trang) + '</p>' : '') +
      (x.traLoi ? '<p class="gy-tl"><b>Đã trả lời:</b> ' + esc(x.traLoi) + '</p>' : '') +
      '<div class="gy-hanh-dong">' +
        (x.userId
          ? '<textarea class="gy-nhap" rows="2" maxlength="1000" placeholder="' + (x.traLoi ? 'Sửa câu trả lời…' : 'Trả lời em này…') + '"></textarea>' +
            '<button type="button" class="btn btn-primary" data-gy-traloi>Gửi trả lời</button>'
          : '<span class="gy-khach">Khách chưa đăng nhập — không trả lời trên web được.</span>') +
        (x.docMs ? '' : '<button type="button" class="btn btn-outline" data-gy-doc>Đánh dấu đã đọc</button>') +
      '</div>' +
      '<p class="gy-kq" aria-live="polite"></p>' +
    '</article>';
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('button');
    if (!t || !t.closest('#trGopY')) return;
    if (t.hasAttribute('data-gy-loc')) { state.loc = t.getAttribute('data-gy-loc'); ve(); return; }
    if (t.hasAttribute('data-gy-lammoi')) { tai().then(ve); return; }
    var muc = t.closest('[data-gy-id]');
    if (!muc) return;
    var id = muc.getAttribute('data-gy-id');
    var kq = muc.querySelector('.gy-kq');
    var body = {};
    if (t.hasAttribute('data-gy-traloi')) {
      var nd = muc.querySelector('.gy-nhap').value.trim();
      if (!nd) { kq.textContent = 'Viết câu trả lời trước đã.'; return; }
      body = { traLoi: nd, daDoc: true };
    } else if (t.hasAttribute('data-gy-doc')) {
      body = { daDoc: true };
    } else return;
    t.disabled = true;
    kq.textContent = 'Đang lưu…';
    goi('/api/admin/gop-y/' + encodeURIComponent(id), { method: 'POST', body: JSON.stringify(body) })
      .then(function () { return tai(); })
      .then(ve)
      .catch(function (err) { kq.textContent = err.message; t.disabled = false; });
  });

  window.__trGopY = { render: function () { tai().then(ve); } };
  // Hien so gop y chua doc tren tab ngay khi vao trang
  setTimeout(tai, 800);
})();
