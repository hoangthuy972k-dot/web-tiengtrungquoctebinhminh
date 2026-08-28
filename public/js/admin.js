(function () {
  'use strict';

  var PW_KEY = 'hyv_admin_pw';

  function $(sel) { return document.querySelector(sel); }

  function relativeTime(iso) {
    if (!iso) return 'Chưa có';
    var diffMs = Date.now() - new Date(iso).getTime();
    var min = Math.floor(diffMs / 60000);
    if (min < 1) return 'Vừa xong';
    if (min < 60) return min + ' phút trước';
    var hr = Math.floor(min / 60);
    if (hr < 24) return hr + ' giờ trước';
    var day = Math.floor(hr / 24);
    return day + ' ngày trước';
  }

  function formatMinutes(total) {
    if (!total) return '0 phút';
    var h = Math.floor(total / 60);
    var m = total % 60;
    if (h > 0) return h + ' giờ ' + m + ' phút';
    return m + ' phút';
  }

  function showGate(errorMsg) {
    $('#adminDash').hidden = true;
    $('#adminGate').hidden = false;
    var err = $('#adminGateError');
    err.textContent = errorMsg || '';
    err.hidden = !errorMsg;
  }

  function showDash() {
    $('#adminGate').hidden = true;
    $('#adminDash').hidden = false;
  }

  function adminFetch(url, options) {
    var pw = sessionStorage.getItem(PW_KEY) || '';
    options = options || {};
    options.headers = Object.assign({}, options.headers, { 'X-Admin-Password': pw });
    return fetch(url, options);
  }

  function renderTraffic(t) {
    var cards = [
      { label: 'Lượt xem hôm nay', value: t.pageviewsToday },
      { label: 'Lượt xem 7 ngày qua', value: t.pageviews7d },
      { label: 'Lượt xem 30 ngày qua', value: t.pageviews30d },
      { label: 'Tổng lượt xem', value: t.pageviewsAllTime },
      { label: 'Người truy cập (hôm nay)', value: t.uniqueVisitorsToday },
      { label: 'Người truy cập (7 ngày)', value: t.uniqueVisitors7d },
      { label: 'Người truy cập (tổng)', value: t.uniqueVisitorsAllTime }
    ];
    $('#adminTrafficCards').innerHTML = cards.map(function (c) {
      return '<div class="admin-card"><div class="admin-card-label">' + c.label + '</div>' +
        '<div class="admin-card-value">' + c.value + '</div></div>';
    }).join('');
  }

  var LEVEL_LABEL = { hsk1: 'HSK 1', hsk2: 'HSK 2', hsk3: 'HSK 3', hsk4: 'HSK 4', yct: 'YCT' };

  function renderStudents(students) {
    var body = $('#adminStudentBody');
    var empty = $('#adminStudentEmpty');
    if (!students.length) {
      body.innerHTML = '';
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    body.innerHTML = students.map(function (s) {
      return '<tr>' +
        '<td class="admin-name">' + escapeHtml(s.name) + '</td>' +
        '<td>' + escapeHtml(s.email) + '</td>' +
        '<td>' + (LEVEL_LABEL[s.level] || s.level) + '</td>' +
        '<td>' + formatMinutes(s.totalMinutes) + '</td>' +
        '<td>' + relativeTime(s.lastActive) + '</td>' +
        '<td>' + s.streak + ' ngày</td>' +
        '<td>' + s.totalCorrect + ' / ' + s.totalQuestions + '</td>' +
        '</tr>';
    }).join('');
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function loadStats() {
    adminFetch('/api/admin/stats').then(function (r) {
      if (r.status === 401) { sessionStorage.removeItem(PW_KEY); showGate('Sai mật khẩu quản trị, vui lòng đăng nhập lại.'); return null; }
      if (r.status === 503) { return r.json().then(function (d) { showGate(d.error); return null; }); }
      return r.json();
    }).then(function (data) {
      if (!data) return;
      renderTraffic(data.traffic);
      renderStudents(data.students);
      $('#adminUpdatedAt').textContent = new Date().toLocaleTimeString('vi-VN');
      showDash();
    }).catch(function () {
      showGate('Không kết nối được máy chủ, thử lại sau.');
    });
  }

  $('#adminLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var pw = $('#adminPasswordInput').value;
    fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw })
    }).then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
      .then(function (res) {
        if (!res.ok) {
          $('#adminGateError').textContent = res.data.error || 'Sai mật khẩu.';
          $('#adminGateError').hidden = false;
          return;
        }
        sessionStorage.setItem(PW_KEY, pw);
        loadStats();
      })
      .catch(function () {
        $('#adminGateError').textContent = 'Không kết nối được máy chủ, thử lại sau.';
        $('#adminGateError').hidden = false;
      });
  });

  $('#adminRefresh').addEventListener('click', loadStats);
  $('#adminLogout').addEventListener('click', function () {
    sessionStorage.removeItem(PW_KEY);
    $('#adminPasswordInput').value = '';
    showGate('');
  });

  if (sessionStorage.getItem(PW_KEY)) {
    loadStats();
  } else {
    showGate('');
  }
})();
