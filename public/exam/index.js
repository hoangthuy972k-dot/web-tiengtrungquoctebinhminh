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

  // ---------- Trạng thái từng đề: kết quả gần nhất, đang làm dở ----------
  var hist = {};
  try { hist = JSON.parse(localStorage.getItem('hyv_exam_results') || '{}'); } catch (e) { hist = {}; }
  function dangLam(id) {
    try {
      var st = JSON.parse(localStorage.getItem('hyv_exam_' + id) || 'null');
      if (st && !st.submitted && Object.keys(st.answers || {}).length) return 'doing';
      if (st && st.submitted) return 'done';
    } catch (e) { /* ignore */ }
    return '';
  }
  $all('[data-last]').forEach(function (el) {
    var id = el.getAttribute('data-last');
    var r = hist[id];
    var doing = dangLam(id) === 'doing';
    if (!r) {
      if (doing) el.innerHTML = '<span class="ex-st is-doing">Đang làm dở</span>';
      return;
    }
    var d = new Date(r.at);
    el.innerHTML = '<span class="ex-st ' + (r.pass ? 'is-pass' : 'is-fail') + '">' + r.score + '/' + r.max + ' · ' + (r.pass ? 'Đạt' : 'Chưa đạt') + '</span>' +
      '<small>' + r.correct + '/' + r.total + ' câu đúng · ' + pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear() + '</small>' +
      (doing ? '<span class="ex-st is-doing">Đang làm lại</span>' : '');
  });
  $all('[data-start]').forEach(function (a) {
    var s = dangLam(a.getAttribute('data-start'));
    if (s === 'doing') { a.textContent = 'Làm tiếp'; a.classList.add('is-doing'); }
    else if (s === 'done') { a.textContent = 'Xem kết quả'; a.classList.add('is-done'); }
  });

  // ---------- Thư mục cấp độ: bấm mới mở danh sách đề ----------
  var FOLDER_KEY = 'hyv_exam_folder';
  // Tiến độ trên từng thư mục: đã thi bao nhiêu đề, điểm cao nhất
  $all('[data-prog]').forEach(function (el) {
    var lv = el.getAttribute('data-prog');
    var ids = $all('#lv-' + lv + ' [data-test]').map(function (t) { return t.getAttribute('data-test'); });
    var xong = ids.filter(function (id) { return hist[id]; });
    var best = null;
    xong.forEach(function (id) { if (!best || hist[id].score > best.score) best = hist[id]; });
    el.querySelector('i').style.width = Math.round(xong.length / (ids.length || 1) * 100) + '%';
    el.querySelector('small').textContent = xong.length
      ? 'Đã thi ' + xong.length + '/' + ids.length + ' đề · cao nhất ' + best.score + '/' + best.max
      : 'Chưa thi đề nào';
  });
  function moThuMuc(lv, cuon) {
    $all('[data-folder]').forEach(function (b) {
      var on = b.getAttribute('data-folder') === lv;
      b.setAttribute('aria-expanded', on ? 'true' : 'false');
      b.classList.toggle('is-open', on);
      var panel = document.getElementById('lv-' + b.getAttribute('data-folder'));
      if (panel) panel.hidden = !on;
    });
    try { if (lv) sessionStorage.setItem(FOLDER_KEY, lv); else sessionStorage.removeItem(FOLDER_KEY); } catch (e) { /* ignore */ }
    if (lv && cuon) {
      var p = document.getElementById('lv-' + lv);
      if (p && p.getBoundingClientRect().top > window.innerHeight * 0.6) p.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  $all('[data-folder]').forEach(function (b) {
    b.addEventListener('click', function () {
      moThuMuc(b.getAttribute('aria-expanded') === 'true' ? '' : b.getAttribute('data-folder'), true);
    });
  });
  $all('[data-close-folder]').forEach(function (b) {
    b.addEventListener('click', function () {
      var lv = b.closest('[data-level]').getAttribute('data-level');
      moThuMuc('', false);
      var f = document.querySelector('[data-folder="' + lv + '"]');
      if (f) f.focus();
    });
  });
  // Quay lại từ phòng thi (cùng phiên): mở lại thư mục vừa xem
  try { var daMo = sessionStorage.getItem(FOLDER_KEY); if (daMo && document.getElementById('lv-' + daMo)) moThuMuc(daMo, false); } catch (e) { /* ignore */ }

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
