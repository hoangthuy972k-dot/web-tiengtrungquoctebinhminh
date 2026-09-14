/* ============================================================
   Thi thử HSK — trang danh sách đề (index.js)
   - Kết quả lần gần nhất của từng đề (lưu trên máy)
   - Bảng xếp hạng: tổng hợp theo cấp độ hoặc theo từng đề
   ============================================================ */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $all = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var pad = function (x) { return (x < 10 ? '0' : '') + x; };

  // ---------- Kết quả lần gần nhất + nhãn nút ----------
  var hist = {};
  try { hist = JSON.parse(localStorage.getItem('hyv_exam_results') || '{}'); } catch (e) { hist = {}; }
  $all('[data-last]').forEach(function (el) {
    var r = hist[el.getAttribute('data-last')];
    if (!r) return;
    var d = new Date(r.at);
    el.innerHTML = 'Lần gần nhất: <b>' + r.score + '/' + r.max + ' điểm</b> (' + r.correct + '/' + r.total + ' câu, ' + (r.pass ? 'Đạt' : 'Chưa đạt') + ') · ' + pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear();
  });
  $all('[data-start]').forEach(function (a) {
    try {
      var st = JSON.parse(localStorage.getItem('hyv_exam_' + a.getAttribute('data-start')) || 'null');
      if (st && !st.submitted && Object.keys(st.answers || {}).length) a.textContent = 'Làm tiếp';
      else if (st && st.submitted) a.textContent = 'Xem kết quả / Làm lại';
    } catch (e) { /* ignore */ }
  });

  // ---------- Bảng xếp hạng ----------
  var rankEl = $('#rank');
  if (!rankEl) return;
  var select = $('#rankSelect');
  var list = $('#rankList');
  var LIMIT = 10;
  var showAll = false;
  var lastData = null;

  function token() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a.token : null; } catch (e) { return null; }
  }
  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec || 0));
    var h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60;
    return (h ? h + ':' + pad(m) : m) + ':' + pad(s);
  }
  function badge(rank) {
    return '<span class="rk-pos' + (rank <= 3 ? ' top' + rank : '') + '">' + rank + '</span>';
  }

  function rowHtml(row, mode) {
    var detail = mode === 'exam'
      ? '<span class="rk-cell"><small>Điểm thi</small><b>' + row.score + '/' + row.maxScore + '</b>' + (row.pass ? '<i class="rk-pass">Đạt</i>' : '') + '</span>' +
        '<span class="rk-cell rk-time"><small>Thời gian</small><b>' + fmtTime(row.usedSec) + '</b></span>'
      : '<span class="rk-cell"><small>Số đề</small><b>' + row.exams + '<i class="rk-unit"> đề</i></b></span>' +
        '<span class="rk-cell rk-time"><small>Tổng thời gian</small><b>' + fmtTime(row.usedSec) + '</b></span>';
    return '<li class="rk-row' + (row.isMe ? ' is-me' : '') + '">' + badge(row.rank) +
      '<span class="rk-name">' + esc(row.name) + (row.isMe ? ' <em>Bạn</em>' : '') + '</span>' + detail +
      '<span class="rk-points"><b>' + row.rankPoints + '</b><small>điểm</small></span></li>';
  }

  function render(data) {
    lastData = data;
    var mode = data.mode;
    var sub = $('#rankSub');
    if (mode === 'exam') {
      sub.textContent = data.count + ' học sinh đã thi ' + data.exam.title + '. Xếp theo điểm xếp hạng, bằng điểm thì ai làm nhanh hơn đứng trên.';
    } else {
      sub.textContent = data.count + ' học sinh · cộng điểm xếp hạng của tất cả ' + data.examCount + ' đề đã thi. Thi càng nhiều đề, điểm càng cao.';
    }
    if (!data.rows.length) {
      list.innerHTML = '<li class="rk-empty">Chưa có ai trên bảng xếp hạng' + (mode === 'exam' ? ' của đề này' : '') + '. Đăng nhập và làm bài ngay để đứng đầu!</li>';
      $('#rankMore').hidden = true;
      renderMe(data);
      return;
    }
    var rows = showAll ? data.rows : data.rows.slice(0, LIMIT);
    list.innerHTML = rows.map(function (r) { return rowHtml(r, mode); }).join('');
    var more = $('#rankMore');
    more.hidden = data.rows.length <= LIMIT;
    more.textContent = showAll ? 'Thu gọn' : 'Xem thêm (' + (data.rows.length - LIMIT) + ' học sinh)';
    renderMe(data);
  }

  // Hàng "Bạn" khi mình không nằm trong phần đang hiển thị
  function renderMe(data) {
    var meBox = $('#rankMe');
    var shown = showAll ? data.rows : data.rows.slice(0, LIMIT);
    var visible = data.me && shown.some(function (r) { return r.isMe; });
    if (data.me && !visible) {
      meBox.innerHTML = '<div class="rk-me-label">Vị trí của bạn</div><ul class="rk-list">' + rowHtml(data.me, data.mode) + '</ul>';
      meBox.hidden = false;
    } else if (!data.me) {
      meBox.innerHTML = '<p class="rk-hint">' + (token()
        ? 'Bạn chưa có lượt thi nào được xếp hạng' + (data.mode === 'exam' ? ' ở đề này' : '') + '.'
        : 'Đăng nhập tài khoản ở <a href="/">trang chủ</a> trước khi thi để có tên trên bảng xếp hạng.') + '</p>';
      meBox.hidden = false;
    } else {
      meBox.hidden = true;
    }
  }

  function load() {
    var v = select.value;
    var url = '/api/exam/leaderboard?' + (v.indexOf('level:') === 0 ? 'level=' + encodeURIComponent(v.slice(6)) : 'exam=' + encodeURIComponent(v));
    list.innerHTML = '<li class="rk-empty">Đang tải bảng xếp hạng…</li>';
    var headers = {};
    if (token()) headers.Authorization = 'Bearer ' + token();
    fetch(url, { headers: headers })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(render)
      .catch(function () {
        list.innerHTML = '<li class="rk-empty">Không tải được bảng xếp hạng. <button type="button" class="rk-retry" id="rankRetry">Thử lại</button></li>';
        $('#rankMore').hidden = true;
        $('#rankMe').hidden = true;
        var b = $('#rankRetry');
        if (b) b.addEventListener('click', load);
      });
  }

  function choose(value, scroll) {
    if (!$all('option', select).some(function (o) { return o.value === value; })) return false;
    select.value = value;
    showAll = false;
    load();
    if (scroll) rankEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  }

  select.addEventListener('change', function () { showAll = false; load(); });
  $('#rankMore').addEventListener('click', function () { showAll = !showAll; if (lastData) render(lastData); });
  $all('[data-rank-of]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      choose(a.getAttribute('data-rank-of'), true);
      try { history.replaceState(null, '', '?rank=' + encodeURIComponent(a.getAttribute('data-rank-of')) + '#rank'); } catch (err) { /* ignore */ }
    });
  });

  var wanted = new URLSearchParams(location.search).get('rank');
  if (!wanted || !choose(wanted, false)) load();
})();
