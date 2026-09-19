(function () {
  'use strict';

  var PW_KEY = 'hyv_admin_pw';
  var INACTIVE_DAYS = 3;   // qua so ngay nay chua hoc -> dua vao "Can quan tam"
  var LOW_ACC = 60;        // do chinh xac duoi muc nay (khi da lam >= 20 cau) -> can quan tam

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(str) {
    return String(str == null ? '' : str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // ---------- Danh muc bai hoc (tu /js/data.js) ----------
  var LEVELS = (typeof APP_DATA !== 'undefined' && APP_DATA.levels) || [];
  var LEVEL_NAME = {};
  LEVELS.forEach(function (l) { LEVEL_NAME[l.id] = l.name; });
  var LESSON_BY_URL = {};
  if (typeof APP_DATA !== 'undefined' && APP_DATA.lessons) {
    Object.keys(APP_DATA.lessons).forEach(function (lv) {
      (APP_DATA.lessons[lv] || []).forEach(function (ls) {
        if (ls.fullPageUrl) LESSON_BY_URL[ls.fullPageUrl] = { level: lv, number: ls.number, title: ls.title, hanzi: ls.titleHanzi };
      });
    });
  }
  function levelName(id) { return LEVEL_NAME[id] || (id ? String(id).toUpperCase() : '—'); }

  // Cac phan cua 1 bai (theo thu tu lo trinh). Khoa = ten phan luu trong lessonScores.
  var PARTS = [
    { key: 'warmup', label: 'Khởi động' },
    { key: 'vocab', label: 'Từ vựng' },
    { key: 'flash', label: 'Thẻ nhớ' },
    { key: 'dialog', label: 'Hội thoại' },
    { key: 'roleplay', label: 'Nhập vai' },
    { key: 'grammar', label: 'Ngữ pháp' },
    { key: 'game', label: 'Trò chơi' },
    { key: 'listen', label: 'Nghe' },
    { key: 'speak', label: 'Nói' },
    { key: 'translate', label: 'Dịch' },
    { key: 'workbook', label: 'Sách BT' },
    { key: 'page', label: 'Trang bài' },
    { key: 'final', label: 'Kiểm tra cuối' }
  ];

  // Gom 1 muc diem ve { c, t } (so cau dung / tong) hoac { done: true }
  function tally(v) {
    if (!v || typeof v !== 'object') return null;
    if (typeof v.correct === 'number' && typeof v.total === 'number') return { c: v.correct, t: v.total };
    if (v.done) return { done: true };
    var c = 0, t = 0, any = false, done = false;
    Object.keys(v).forEach(function (k) {
      var x = tally(v[k]);
      if (!x) return;
      if (x.done) { done = true; return; }
      any = true; c += x.c; t += x.t;
    });
    if (any) return { c: c, t: t };
    return done ? { done: true } : null;
  }
  function add(a, b) {
    if (!b) return a;
    if (!a) return b;
    if (b.done && a.done) return a;
    if (b.done) return a;
    if (a.done) return b;
    return { c: a.c + b.c, t: a.t + b.t };
  }
  // Diem tung phan cua 1 bai: { vocab: {c,t}, page: {c,t}, ... }
  function lessonParts(ls) {
    var out = {};
    Object.keys(ls || {}).forEach(function (k) {
      var key = k;
      if (k.indexOf('page-') === 0) key = 'page';
      else if (k.indexOf('workbook') === 0) key = 'workbook';
      else if (k === 'quiz' || k === 'quick') key = 'final';
      if (!PARTS.some(function (p) { return p.key === key; })) return;
      var x = tally(ls[k]);
      if (x) out[key] = add(out[key], x);
    });
    return out;
  }
  function pct(x) { return x && !x.done && x.t ? Math.round(100 * x.c / x.t) : null; }

  // ---------- Tong hop 1 hoc sinh ----------
  function daysSince(iso) {
    if (!iso) return null;
    return Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  }
  function last7Minutes(s) {
    var arr = [];
    for (var i = 6; i >= 0; i--) {
      var d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
      arr.push({ day: d, min: (s.minutes30 || {})[d] || 0, studied: (s.studyDays || []).indexOf(d) !== -1 });
    }
    return arr;
  }
  function summarize(s) {
    var lessons = 0, c = 0, t = 0;
    Object.keys(s.lessonScores || {}).forEach(function (url) {
      if (!LESSON_BY_URL[url]) return;
      var parts = lessonParts(s.lessonScores[url]);
      if (Object.keys(parts).length) lessons++;
      Object.keys(parts).forEach(function (k) { var x = parts[k]; if (!x.done) { c += x.c; t += x.t; } });
    });
    var week = last7Minutes(s);
    s._lessons = lessons;
    s._acc = t ? Math.round(100 * c / t) : null;
    s._answered = t;
    s._week = week;
    s._min7 = week.reduce(function (a, d) { return a + d.min; }, 0);
    s._since = daysSince(s.lastActive);
    return s;
  }

  function relTime(days, iso) {
    if (!iso) return 'Chưa học';
    var min = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
    if (min < 1) return 'Vừa xong';
    if (min < 60) return min + ' phút trước';
    var hr = Math.floor(min / 60);
    if (hr < 24) return hr + ' giờ trước';
    return days + ' ngày trước';
  }
  function accClass(a) { return a == null ? 'is-none' : a >= 80 ? 'is-good' : a >= LOW_ACC ? 'is-mid' : 'is-low'; }
  function fmtMin(m) {
    m = Math.round(m || 0);
    if (m < 60) return m + ' phút';
    return Math.floor(m / 60) + ' giờ ' + (m % 60) + ' phút';
  }

  // ---------- Trang thai ----------
  var DATA = null;
  var TRAFFIC = null;

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
  function adminFetch(url) {
    return fetch(url, { headers: { 'X-Admin-Password': sessionStorage.getItem(PW_KEY) || '' } });
  }
  function handle(r) {
    if (r.status === 401) { sessionStorage.removeItem(PW_KEY); showGate('Sai mật khẩu quản trị, vui lòng đăng nhập lại.'); return null; }
    if (r.status === 503) { return r.json().then(function (d) { showGate(d.error); return null; }); }
    if (!r.ok) throw new Error('http ' + r.status);
    return r.json();
  }

  var CLASSES = null; // { classes, members, assignments, done, now } tu /api/admin/classes

  function className(id) {
    var c = CLASSES && CLASSES.classes.filter(function (x) { return x.id === id; })[0];
    return c ? c.name : '';
  }

  function load() {
    Promise.all([
      adminFetch('/api/admin/report').then(handle),
      adminFetch('/api/admin/stats').then(handle).catch(function () { return null; }),
      adminFetch('/api/admin/classes').then(handle).catch(function () { return null; })
    ]).then(function (res) {
      if (!res[0]) return;
      DATA = res[0];
      DATA.students.forEach(summarize);
      TRAFFIC = res[1] && res[1].traffic;
      CLASSES = res[2] || { classes: [], members: {}, assignments: [], done: {}, now: Date.now() };
      fillLevelFilter();
      fillClassFilter();
      renderClass();
      if (window.__trClasses) window.__trClasses.render();
      $('#adminUpdatedAt').textContent = new Date().toLocaleTimeString('vi-VN');
      showDash();
      var hash = location.hash.replace('#hs-', '');
      if (hash) openStudent(hash, true);
    }).catch(function () {
      showGate('Không kết nối được máy chủ, thử lại sau.');
    });
  }

  function fillLevelFilter() {
    var sel = $('#trLevel');
    var cur = sel.value;
    var used = {};
    DATA.students.forEach(function (s) { if (s.level) used[s.level] = 1; });
    sel.innerHTML = '<option value="">Tất cả cấp</option>' + Object.keys(used).map(function (id) {
      return '<option value="' + esc(id) + '">' + esc(levelName(id)) + '</option>';
    }).join('');
    sel.value = used[cur] ? cur : '';
  }

  function fillClassFilter() {
    var sel = $('#trClassFilter');
    var cur = sel.value;
    sel.innerHTML = '<option value="">Tất cả lớp</option>' + CLASSES.classes.map(function (c) {
      return '<option value="' + esc(c.id) + '">' + esc(c.name) + '</option>';
    }).join('') + '<option value="none">Chưa vào lớp</option>';
    sel.value = cur && (cur === 'none' || CLASSES.classes.some(function (c) { return c.id === cur; })) ? cur : '';
  }

  // ---------- Man hinh ca lop ----------
  function renderClass() {
    var all = DATA.students;
    var active7 = all.filter(function (s) { return s._since != null && s._since < 7; }).length;
    var needs = all.filter(needsAttention);
    var weekStars = all.reduce(function (a, s) { return a + (s.stars.week || 0); }, 0);
    var min7 = all.reduce(function (a, s) { return a + s._min7; }, 0);
    $('#trSummary').innerHTML = [
      { label: 'Học sinh', value: all.length, sub: 'đã đăng ký tài khoản' },
      { label: 'Học trong 7 ngày', value: active7, sub: all.length ? Math.round(100 * active7 / all.length) + '% cả lớp' : '' },
      { label: 'Cần quan tâm', value: needs.length, sub: 'lâu chưa học hoặc điểm thấp', warn: needs.length > 0 },
      { label: 'Thời gian học 7 ngày', value: fmtMin(min7), sub: 'cả lớp cộng lại' },
      { label: 'Sao cả lớp tuần này', value: '⭐ ' + weekStars, sub: 'tính từ thứ Hai' }
    ].map(function (c) {
      return '<div class="admin-card' + (c.warn ? ' is-warn' : '') + '"><div class="admin-card-label">' + c.label + '</div>' +
        '<div class="admin-card-value">' + c.value + '</div>' + (c.sub ? '<div class="admin-card-sub">' + c.sub + '</div>' : '') + '</div>';
    }).join('');

    renderAttention(needs);
    renderTable();
    renderTraffic();
  }

  function needsAttention(s) {
    return s._since == null || s._since >= INACTIVE_DAYS || (s._acc != null && s._answered >= 20 && s._acc < LOW_ACC);
  }
  function attentionReason(s) {
    var r = [];
    if (s._since == null) r.push('Chưa học buổi nào');
    else if (s._since >= INACTIVE_DAYS) r.push(s._since + ' ngày chưa vào học');
    if (s._acc != null && s._answered >= 20 && s._acc < LOW_ACC) r.push('Đúng ' + s._acc + '% (' + s._answered + ' câu)');
    return r.join(' · ');
  }
  function renderAttention(list) {
    var wrap = $('#trAttnWrap');
    wrap.hidden = !list.length;
    list = list.slice().sort(function (a, b) { return (b._since == null ? 9999 : b._since) - (a._since == null ? 9999 : a._since); });
    $('#trAttn').innerHTML = list.slice(0, 12).map(function (s) {
      return '<button type="button" class="tr-attn-item" data-id="' + esc(s.id) + '">' +
        '<span class="tr-attn-name">' + esc(s.name) + '</span>' +
        '<span class="tr-attn-lv">' + esc(levelName(s.level)) + '</span>' +
        '<span class="tr-attn-why">' + esc(attentionReason(s)) + '</span></button>';
    }).join('') + (list.length > 12 ? '<div class="tr-attn-more">và ' + (list.length - 12) + ' học sinh khác — lọc "Lâu chưa học nhất" ở bảng dưới.</div>' : '');
    $all('.tr-attn-item', wrap).forEach(function (b) {
      b.addEventListener('click', function () { openStudent(b.getAttribute('data-id')); });
    });
  }

  function currentList() {
    var q = ($('#trSearch').value || '').trim().toLowerCase();
    var lv = $('#trLevel').value;
    var cl = $('#trClassFilter').value;
    var sort = $('#trSort').value;
    var list = DATA.students.filter(function (s) {
      if (lv && s.level !== lv) return false;
      if (cl === 'none' && s.classId) return false;
      if (cl && cl !== 'none' && s.classId !== cl) return false;
      if (q && (s.name || '').toLowerCase().indexOf(q) === -1 && (s.email || '').toLowerCase().indexOf(q) === -1) return false;
      return true;
    });
    var since = function (s) { return s._since == null ? 99999 : s._since; };
    var cmp = {
      active: function (a, b) { return since(a) - since(b) || (b.lastActive || '').localeCompare(a.lastActive || ''); },
      inactive: function (a, b) { return since(b) - since(a); },
      week: function (a, b) { return (b.stars.week || 0) - (a.stars.week || 0); },
      minutes: function (a, b) { return b._min7 - a._min7; },
      acc: function (a, b) { return (a._acc == null ? 101 : a._acc) - (b._acc == null ? 101 : b._acc); },
      name: function (a, b) { return (a.name || '').localeCompare(b.name || '', 'vi'); }
    }[sort];
    return list.sort(cmp);
  }

  function weekBars(week) {
    var max = Math.max(20, Math.max.apply(null, week.map(function (d) { return d.min; })));
    return '<span class="tr-bars" aria-hidden="true">' + week.map(function (d) {
      var h = d.min ? Math.max(3, Math.round(22 * d.min / max)) : (d.studied ? 3 : 0);
      return '<i style="height:' + h + 'px" class="' + (d.min || d.studied ? 'on' : '') + '"></i>';
    }).join('') + '</span>';
  }

  function renderTable() {
    var list = currentList();
    $('#trEmpty').hidden = list.length > 0;
    $('#trBody').innerHTML = list.map(function (s) {
      var stale = s._since == null || s._since >= INACTIVE_DAYS;
      return '<tr class="tr-row" tabindex="0" data-id="' + esc(s.id) + '">' +
        '<td><div class="admin-name">' + esc(s.name) + '</div><div class="tr-email">' + esc(s.email) + '</div>' +
          (s.classId && className(s.classId) ? '<div class="tr-class-tag">🏫 ' + esc(className(s.classId)) + '</div>' : '') + '</td>' +
        '<td>' + esc(levelName(s.level)) + '</td>' +
        '<td><span class="tr-chip ' + (stale ? 'is-stale' : 'is-fresh') + '">' + relTime(s._since, s.lastActive) + '</span></td>' +
        '<td><div class="tr-week">' + weekBars(s._week) + '<span>' + fmtMin(s._min7) + '</span></div></td>' +
        '<td>' + s._lessons + '</td>' +
        '<td><span class="tr-acc ' + accClass(s._acc) + '">' + (s._acc == null ? '—' : s._acc + '%') + '</span></td>' +
        '<td>⭐ ' + (s.stars.week || 0) + ' <span class="tr-muted">/ ' + (s.stars.total || 0) + '</span></td>' +
        '<td>' + (s.streak ? '🔥 ' + s.streak : '—') + '</td>' +
      '</tr>';
    }).join('');
    $all('.tr-row').forEach(function (tr) {
      function go() { openStudent(tr.getAttribute('data-id')); }
      tr.addEventListener('click', go);
      tr.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    });
  }

  function renderTraffic() {
    var t = TRAFFIC;
    if (!t) { $('#adminTrafficCards').innerHTML = ''; return; }
    $('#adminTrafficCards').innerHTML = [
      { label: 'Lượt xem hôm nay', value: t.pageviewsToday },
      { label: 'Lượt xem 7 ngày', value: t.pageviews7d },
      { label: 'Lượt xem 30 ngày', value: t.pageviews30d },
      { label: 'Người truy cập hôm nay', value: t.uniqueVisitorsToday },
      { label: 'Người truy cập 7 ngày', value: t.uniqueVisitors7d },
      { label: 'Tổng người truy cập', value: t.uniqueVisitorsAllTime }
    ].map(function (c) {
      return '<div class="admin-card"><div class="admin-card-label">' + c.label + '</div><div class="admin-card-value is-sm">' + c.value + '</div></div>';
    }).join('');
  }

  // ---------- Chi tiet 1 hoc sinh ----------
  function openStudent(id, fromHash) {
    var s = DATA.students.filter(function (x) { return x.id === id; })[0];
    if (!s) return;
    if (!fromHash) history.replaceState(null, '', '#hs-' + id);
    $('#trClass').hidden = true;
    var box = $('#trDetail');
    box.hidden = false;
    box.innerHTML = detailHtml(s);
    $('#trBack', box).addEventListener('click', closeStudent);
    window.scrollTo(0, 0);
  }
  function closeStudent() {
    history.replaceState(null, '', location.pathname);
    $('#trDetail').hidden = true;
    $('#trClass').hidden = false;
  }

  function calendar(s) {
    var cells = [];
    for (var i = 29; i >= 0; i--) {
      var d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10);
      var m = (s.minutes30 || {})[d] || 0;
      var studied = m > 0 || (s.studyDays || []).indexOf(d) !== -1;
      var lvl = !studied ? 0 : m >= 30 ? 3 : m >= 10 ? 2 : 1;
      cells.push('<i class="l' + lvl + '" title="' + d.slice(8, 10) + '/' + d.slice(5, 7) + (studied ? ' · ' + (m ? fmtMin(m) : 'có học') : ' · không học') + '"></i>');
    }
    var n = cells.filter(function (c) { return c.indexOf('l0') === -1; }).length;
    return '<div class="tr-cal-wrap"><div class="tr-cal">' + cells.join('') + '</div>' +
      '<div class="tr-cal-legend">30 ngày qua · học <b>' + n + '</b> ngày · <i class="l1"></i> dưới 10 phút <i class="l2"></i> 10–30 phút <i class="l3"></i> trên 30 phút</div></div>';
  }

  function cell(x) {
    if (!x) return '<td class="tr-c is-empty">·</td>';
    if (x.done) return '<td class="tr-c is-done" title="Đã xem">✓</td>';
    var p = pct(x);
    return '<td class="tr-c ' + accClass(p) + '" title="' + x.c + '/' + x.t + ' câu đúng">' + (p == null ? '—' : p + '%') + '</td>';
  }

  function lessonTables(s) {
    var byLevel = {};
    Object.keys(s.lessonScores || {}).forEach(function (url) {
      var info = LESSON_BY_URL[url];
      if (!info) return;
      var parts = lessonParts(s.lessonScores[url]);
      if (!Object.keys(parts).length) return;
      (byLevel[info.level] = byLevel[info.level] || []).push({ info: info, parts: parts });
    });
    var order = LEVELS.map(function (l) { return l.id; });
    var lvs = Object.keys(byLevel).sort(function (a, b) { return order.indexOf(a) - order.indexOf(b); });
    if (!lvs.length) return '<p class="admin-empty">Học sinh chưa làm bài tập nào trong các bài học.</p>';
    return lvs.map(function (lv) {
      var rows = byLevel[lv].sort(function (a, b) { return a.info.number - b.info.number; });
      var cols = PARTS.filter(function (p) { return rows.some(function (r) { return r.parts[p.key]; }); });
      var total = (APP_DATA.lessons[lv] || []).length;
      return '<div class="tr-lv">' +
        '<div class="tr-lv-h">' + esc(levelName(lv)) + ' <span class="tr-muted">· đã học ' + rows.length + '/' + total + ' bài</span></div>' +
        '<div class="admin-table-wrap"><table class="admin-table tr-lessons"><thead><tr><th>Bài</th>' +
          cols.map(function (p) { return '<th>' + p.label + '</th>'; }).join('') + '</tr></thead><tbody>' +
          rows.map(function (r) {
            return '<tr><td class="tr-ls-name"><b>Bài ' + r.info.number + '</b> <span class="tr-muted">' + esc(r.info.title || '') + '</span></td>' +
              cols.map(function (p) { return cell(r.parts[p.key]); }).join('') + '</tr>';
          }).join('') +
        '</tbody></table></div></div>';
    }).join('');
  }

  function detailHtml(s) {
    var tiles = [
      { label: 'Học gần nhất', value: relTime(s._since, s.lastActive) },
      { label: 'Thời gian 7 ngày', value: fmtMin(s._min7), sub: 'tổng ' + fmtMin(s.totalMinutes) },
      { label: 'Bài đã học', value: s._lessons },
      { label: 'Độ chính xác', value: s._acc == null ? '—' : s._acc + '%', sub: s._answered ? s._answered + ' câu đã làm' : '' },
      { label: 'Sao', value: '⭐ ' + (s.stars.total || 0), sub: 'tuần này ' + (s.stars.week || 0) + ' · hôm nay ' + (s.stars.today || 0) },
      { label: 'Chuỗi ngày học', value: s.streak ? '🔥 ' + s.streak : '—' }
    ];
    var exams = (s.exams || []).length
      ? '<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Đề thi</th><th>Điểm</th><th>Đúng</th><th>Thời gian</th><th>Ngày thi</th></tr></thead><tbody>' +
        s.exams.map(function (e) {
          var p = e.maxScore ? Math.round(100 * e.score / e.maxScore) : null;
          return '<tr><td>' + esc(e.title) + '</td><td><span class="tr-acc ' + accClass(p) + '">' + e.score + '/' + e.maxScore + '</span></td>' +
            '<td>' + (e.correct != null ? e.correct + '/' + e.total : '—') + '</td>' +
            '<td>' + (e.usedSec ? Math.round(e.usedSec / 60) + ' phút' : '—') + '</td>' +
            '<td>' + new Date(e.submittedMs).toLocaleDateString('vi-VN') + '</td></tr>';
        }).join('') + '</tbody></table></div>'
      : '<p class="tr-muted">Chưa thi thử lần nào.</p>';
    var words = (s.wrongWords || []).length
      ? '<div class="tr-words">' + s.wrongWords.map(function (w) { return '<span class="tr-word">' + esc(w) + '</span>'; }).join('') + '</div>'
      : '<p class="tr-muted">Không có từ nào đang sai.</p>';
    return '<button type="button" class="btn btn-outline tr-back" id="trBack">← Quay lại cả lớp</button>' +
      '<div class="tr-d-head"><div><div class="tr-d-name">' + esc(s.name) + '</div>' +
        '<div class="tr-muted">' + esc(s.email) + ' · ' + esc(levelName(s.level)) + ' · ' + (s.classId && className(s.classId) ? '🏫 ' + esc(className(s.classId)) : 'chưa vào lớp') + ' · tham gia ' + (s.createdAt ? new Date(s.createdAt).toLocaleDateString('vi-VN') : '—') + '</div></div>' +
        (needsAttention(s) ? '<span class="tr-chip is-stale">⚠ ' + esc(attentionReason(s)) + '</span>' : '') + '</div>' +
      '<section class="admin-cards">' + tiles.map(function (c) {
        return '<div class="admin-card"><div class="admin-card-label">' + c.label + '</div><div class="admin-card-value is-sm">' + c.value + '</div>' +
          (c.sub ? '<div class="admin-card-sub">' + c.sub + '</div>' : '') + '</div>';
      }).join('') + '</section>' +
      '<section class="admin-section"><div class="admin-section-title">📅 Ngày học</div>' + calendar(s) + '</section>' +
      '<section class="admin-section"><div class="admin-section-title">📚 Kết quả từng bài</div>' +
        '<p class="tr-hint">Ô màu xanh ≥ 80%, vàng 60–79%, đỏ dưới 60%. ✓ = đã xem xong. Rê chuột vào ô để xem số câu đúng.</p>' + lessonTables(s) + '</section>' +
      '<section class="admin-section"><div class="admin-section-title">📝 Thi thử HSK</div>' + exams + '</section>' +
      '<section class="admin-section"><div class="admin-section-title">🔁 Từ cần ôn</div>' +
        '<p class="tr-hint">Ôn tập ngắt quãng: ' + (s.srsTotal || 0) + ' từ trong lịch ôn, <b>' + (s.srsDue || 0) + '</b> từ đến hạn ôn hôm nay. Các từ học sinh đang làm sai:</p>' + words + '</section>';
  }

  // ---------- Xuat CSV ----------
  function csv() {
    if (!DATA) return;
    var rows = [['Tên', 'Email', 'Cấp', 'Học gần nhất', 'Số ngày chưa học', 'Phút học 7 ngày', 'Bài đã học', 'Độ chính xác (%)', 'Số câu đã làm', 'Sao tuần', 'Tổng sao', 'Chuỗi ngày', 'Số lần thi thử']];
    currentList().forEach(function (s) {
      rows.push([s.name, s.email, levelName(s.level), s.lastActive ? new Date(s.lastActive).toLocaleString('vi-VN') : '',
        s._since == null ? '' : s._since, s._min7, s._lessons, s._acc == null ? '' : s._acc, s._answered,
        s.stars.week || 0, s.stars.total || 0, s.streak || 0, (s.exams || []).length]);
    });
    var text = '﻿' + rows.map(function (r) {
      return r.map(function (v) { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }).join(',');
    }).join('\n');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
    a.download = 'bao-cao-hoc-sinh-' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  // ---------- Su kien ----------
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
        load();
      })
      .catch(function () {
        $('#adminGateError').textContent = 'Không kết nối được máy chủ, thử lại sau.';
        $('#adminGateError').hidden = false;
      });
  });
  $('#adminRefresh').addEventListener('click', load);
  $('#adminCsv').addEventListener('click', csv);
  $('#adminLogout').addEventListener('click', function () {
    sessionStorage.removeItem(PW_KEY);
    $('#adminPasswordInput').value = '';
    closeStudent();
    showGate('');
  });
  // Tab "Hoc sinh" / "Lop & bai giao"
  function showTab(name) {
    $all('.tr-tab').forEach(function (b) {
      var on = b.getAttribute('data-tab') === name;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    var classes = name === 'classes';
    $('#trClasses').hidden = !classes;
    if (classes) { $('#trClass').hidden = true; $('#trDetail').hidden = true; }
    else { closeStudent(); }
  }
  $all('.tr-tab').forEach(function (b) {
    b.addEventListener('click', function () { showTab(b.getAttribute('data-tab')); });
  });

  // Dung chung voi admin-classes.js
  window.__tr = {
    $: $, $all: $all, esc: esc, levelName: levelName, LEVELS: LEVELS, LESSON_BY_URL: LESSON_BY_URL,
    adminFetch: adminFetch, reload: load,
    data: function () { return DATA; },
    classes: function () { return CLASSES; },
    openStudent: function (id) { showTab('students'); openStudent(id); }
  };

  ['#trSearch', '#trLevel', '#trClassFilter', '#trSort'].forEach(function (sel) {
    $(sel).addEventListener(sel === '#trSearch' ? 'input' : 'change', function () { if (DATA) renderTable(); });
  });

  if (sessionStorage.getItem(PW_KEY)) load();
  else showGate('');
})();
