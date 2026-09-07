/* ============================================================
   Thi thử HSK — engine phòng thi (exam.js)
   - Tải đề theo ?id=, render các dạng câu hỏi
   - Bảng câu hỏi bên phải: câu đã làm / chưa làm, bấm để nhảy tới câu
   - Đồng hồ đếm ngược, hết giờ tự nộp
   - Xác nhận khi Thoát / Nộp bài; lưu bài đang làm vào localStorage
   - Kết quả: điểm từng phần, đúng/sai từng câu, đáp án + văn bản nghe
   ============================================================ */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $all = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  var ICONS = {
    headphones: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    cross: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
  };

  var id = new URLSearchParams(location.search).get('id') || 'hsk2-test-1';
  var STORE = 'hyv_exam_' + id;
  var RESULTS = 'hyv_exam_results';
  var data = null;
  var state = { answers: {}, startedAt: 0, submitted: false, result: null };
  var timerId = null;
  var questionIndex = {}; // n -> {q, part, section, group}
  var allQuestions = [];

  // ---------- Tải đề ----------
  var s = document.createElement('script');
  s.src = '/exam/tests/' + encodeURIComponent(id) + '.js';
  s.onload = function () { data = window.EXAM_DATA; init(); };
  s.onerror = function () { $('#exMain').innerHTML = '<div class="ex-card"><h3>Không tìm thấy đề thi</h3><p><a href="/exam/">← Quay lại danh sách đề</a></p></div>'; };
  document.head.appendChild(s);

  function init() {
    document.title = data.title + ' — Thi thử HSK';
    $('#exTitle').textContent = data.title;
    indexQuestions();
    loadState();
    if (!state.startedAt) { state.startedAt = Date.now(); saveState(); }
    render();
    bindTop();
    if (state.submitted) showResult(); else startTimer();
  }

  function indexQuestions() {
    allQuestions = [];
    data.sections.forEach(function (sec) {
      sec.parts.forEach(function (part) {
        var qs = [];
        if (part.groups) part.groups.forEach(function (g) { g.questions.forEach(function (q) { qs.push({ q: q, group: g }); }); });
        else part.questions.forEach(function (q) { qs.push({ q: q, group: null }); });
        qs.forEach(function (it) {
          it.part = part; it.section = sec;
          questionIndex[it.q.n] = it;
          allQuestions.push(it);
        });
      });
    });
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORE);
      if (raw) { var st = JSON.parse(raw); if (st && st.answers) state = st; }
    } catch (e) { /* ignore */ }
  }
  function saveState() { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* ignore */ } }
  function clearState() { try { localStorage.removeItem(STORE); } catch (e) { /* ignore */ } }

  // ---------- Render ----------
  function render() {
    var html = '';
    data.sections.forEach(function (sec, si) {
      var total = countSection(sec);
      html += '<div class="ex-sec-head" id="sec-' + sec.id + '"><span class="ex-sec-icon">' + (ICONS[sec.icon] || '') + '</span>' +
        '<span>' + esc(sec.name) + ': (' + total + ' câu)</span><span class="ex-info" title="' + esc(sec.note || '') + '">' + ICONS.info + '</span></div>';
      if (sec.audio) {
        html += '<div class="ex-audio"><span class="ex-audio-label">🎧 Audio phần Nghe</span>' +
          '<audio id="exAudio" controls preload="auto" src="' + esc(sec.audio) + '"></audio>' +
          (sec.note ? '<div class="ex-audio-note">' + esc(sec.note) + '</div>' : '') + '</div>';
      }
      sec.parts.forEach(function (part) { html += renderPart(part, sec); });
      var next = data.sections[si + 1];
      if (next) {
        html += '<div class="ex-next"><span class="ex-sec-icon">' + (ICONS[next.icon] || '') + '</span><span>' + esc(next.name) + ': (' + countSection(next) + ' câu)</span>' +
          '<button type="button" data-goto="sec-' + next.id + '">Chuyển tới phần ' + esc(next.name) + ' ›</button></div>';
      }
    });
    $('#exMain').innerHTML = html;
    renderSide();
    bindMain();
    applyAnswersToDom();
    var audio = $('#exAudio');
    if (audio) audio.playbackRate = parseFloat($('#exSpeed').value);
  }

  function countSection(sec) {
    var n = 0;
    sec.parts.forEach(function (p) { n += p.groups ? p.groups.reduce(function (a, g) { return a + g.questions.length; }, 0) : p.questions.length; });
    return n;
  }

  function textBlock(q, cls) {
    return '<div class="ex-text ' + (cls || '') + '">' + (q.py ? '<div class="py">' + esc(q.py) + '</div>' : '') + '<div class="zh">' + esc(q.zh) + '</div></div>';
  }
  function cardHead(label) {
    return '<div class="ex-card-head"><h3>' + esc(label) + '</h3><span class="ex-flag" title="Câu hỏi">' + ICONS.flag + '</span></div>';
  }
  function letterBtns(n, keys) {
    return '<div class="ex-letters">' + keys.map(function (k) {
      return '<button type="button" class="ex-letter" data-n="' + n + '" data-v="' + k + '">' + k + '</button>';
    }).join('') + '</div>';
  }
  function tfBtns(n) {
    return '<div class="ex-judge-btns">' +
      '<button type="button" class="ex-tf" data-n="' + n + '" data-v="true" aria-label="Đúng">' + ICONS.check + '</button>' +
      '<button type="button" class="ex-tf" data-n="' + n + '" data-v="false" aria-label="Sai">' + ICONS.cross + '</button></div>';
  }

  function renderPart(part, sec) {
    var h = '<p class="ex-part-intro"><b>' + esc(part.name) + '</b> · ' + esc(part.intro || '') + '</p>';
    if (part.type === 'judge-pic') {
      part.questions.forEach(function (q) {
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n) +
          '<div class="ex-judge"><img src="' + data.img + q.img + '" alt="Hình câu ' + q.n + '" loading="lazy" />' + tfBtns(q.n) + '</div>' +
          '<div class="ex-explain" data-explain="' + q.n + '" hidden></div></div>';
      });
    } else if (part.type === 'pic-match') {
      part.groups.forEach(function (g) {
        var keys = Object.keys(g.pics);
        h += '<div class="ex-card" id="q-' + g.range[0] + '" data-group="' + g.range[0] + '">' + cardHead('Câu ' + g.range[0] + ' - ' + g.range[1]) +
          '<div class="ex-pics">' + keys.map(function (k) { return '<div class="ex-pic"><img src="' + data.img + g.pics[k] + '" alt="Hình ' + k + '" loading="lazy" /><span class="ex-pic-k">' + k + '</span></div>'; }).join('') + '</div>' +
          (g.example ? '<p class="ex-example">' + esc(g.example) + '</p>' : '');
        g.questions.forEach(function (q) {
          h += '<div class="ex-row" id="q-' + q.n + '" data-n="' + q.n + '"><span class="ex-row-n">' + q.n + '.</span><div class="ex-row-text">' + (q.zh ? textBlock(q) : '') +
            '<div class="ex-explain" data-explain="' + q.n + '" hidden></div></div>' + letterBtns(q.n, keys) + '</div>';
        });
        h += '</div>';
      });
    } else if (part.type === 'mc') {
      part.questions.forEach(function (q) {
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n) +
          (q.zh ? textBlock(q) + '<div style="height:10px"></div>' : '') +
          '<div class="ex-opts">' + q.options.map(function (o, i) {
            var k = 'ABC'[i];
            return '<button type="button" class="ex-opt" data-n="' + q.n + '" data-v="' + k + '"><span class="ex-opt-k">' + k + '</span><div class="py">' + esc(o.py || '') + '</div><div class="zh">' + esc(o.zh) + '</div></button>';
          }).join('') + '</div><div class="ex-explain" data-explain="' + q.n + '" hidden></div></div>';
      });
    } else if (part.type === 'word-fill') {
      var keysW = part.words.map(function (w) { return w.k; });
      h += '<div class="ex-card" id="q-' + part.range[0] + '" data-group="' + part.range[0] + '">' + cardHead('Câu ' + part.range[0] + ' - ' + part.range[1]) +
        '<div class="ex-bank">' + part.words.map(function (w) { return '<div class="ex-bank-item' + (w.used ? ' used' : '') + '"><b>' + w.k + '</b><span><span class="py">' + esc(w.py) + '</span><span class="zh">' + esc(w.zh) + '</span></span></div>'; }).join('') + '</div>' +
        (part.example ? '<p class="ex-example">' + esc(part.example) + '</p>' : '');
      part.questions.forEach(function (q) {
        h += '<div class="ex-row" id="q-' + q.n + '" data-n="' + q.n + '"><span class="ex-row-n">' + q.n + '.</span><div class="ex-row-text">' + textBlock(q) +
          '<div class="ex-explain" data-explain="' + q.n + '" hidden></div></div>' + letterBtns(q.n, keysW) + '</div>';
      });
      h += '</div>';
    } else if (part.type === 'judge-text') {
      part.questions.forEach(function (q) {
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n) +
          '<div class="ex-judge-text"><div>' + textBlock(q) + '<div class="ex-star ex-text"><div class="py">' + esc(q.starPy || '') + '</div><div class="zh">' + esc(q.star) + '</div></div></div>' + tfBtns(q.n) + '</div>' +
          '<div class="ex-explain" data-explain="' + q.n + '" hidden></div></div>';
      });
    } else if (part.type === 'sent-match') {
      part.groups.forEach(function (g) {
        var keysS = g.options.map(function (o) { return o.k; });
        h += '<div class="ex-card" id="q-' + g.range[0] + '" data-group="' + g.range[0] + '">' + cardHead('Câu ' + g.range[0] + ' - ' + g.range[1]) +
          '<div class="ex-bank sent">' + g.options.map(function (o) { return '<div class="ex-bank-item' + (o.used ? ' used' : '') + '"><b>' + o.k + '.</b><span class="ex-text"><span class="py">' + esc(o.py) + '</span><span class="zh">' + esc(o.zh) + '</span></span></div>'; }).join('') + '</div>' +
          (g.example ? '<p class="ex-example">' + esc(g.example) + '</p>' : '');
        g.questions.forEach(function (q) {
          h += '<div class="ex-row" id="q-' + q.n + '" data-n="' + q.n + '"><span class="ex-row-n">' + q.n + '.</span><div class="ex-row-text">' + textBlock(q) +
            '<div class="ex-explain" data-explain="' + q.n + '" hidden></div></div>' + letterBtns(q.n, keysS) + '</div>';
        });
        h += '</div>';
      });
    }
    return h;
  }

  // ---------- Sidebar ----------
  function renderSide() {
    var h = '<div class="ex-timer-box"><span class="ex-timer" id="exTimer">' + ICONS.clock + '<span id="exTimerTxt">--:--:--</span></span>' +
      '<button type="button" class="ex-btn-primary" id="exSubmit">Nộp bài</button></div>' +
      '<div class="ex-nav" id="exNav">';
    data.sections.forEach(function (sec) {
      h += '<h3>' + esc(sec.name) + '</h3>';
      sec.parts.forEach(function (part) {
        h += '<h4>' + esc(part.name) + '</h4><div class="ex-nav-grid">';
        var qs = part.groups ? [].concat.apply([], part.groups.map(function (g) { return g.questions; })) : part.questions;
        qs.forEach(function (q) { h += '<button type="button" class="ex-dot" data-dot="' + q.n + '" data-goto="q-' + q.n + '">' + q.n + '</button>'; });
        h += '</div>';
      });
    });
    h += '<div class="ex-nav-legend"><span>Chưa làm</span><span class="l-done">Đã làm</span></div></div>';
    $('#exSide').innerHTML = h;
    $('#exSubmit').addEventListener('click', confirmSubmit);
  }

  // ---------- Sự kiện ----------
  function bindMain() {
    $('#exMain').addEventListener('click', function (e) {
      var goto = e.target.closest('[data-goto]');
      if (goto) { scrollToId(goto.getAttribute('data-goto')); return; }
      if (state.submitted) return;
      var btn = e.target.closest('[data-n][data-v]');
      if (!btn) return;
      var n = parseInt(btn.getAttribute('data-n'), 10);
      var v = btn.getAttribute('data-v');
      if (v === 'true') v = true; else if (v === 'false') v = false;
      if (state.answers[n] === v) delete state.answers[n]; else state.answers[n] = v;
      saveState();
      applyAnswersToDom();
    });
    document.addEventListener('click', function (e) {
      var goto = e.target.closest('#exSide [data-goto]');
      if (goto) scrollToId(goto.getAttribute('data-goto'));
    });
  }

  function scrollToId(idStr) {
    var el = document.getElementById(idStr);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function applyAnswersToDom() {
    $all('#exMain [data-n][data-v]').forEach(function (b) {
      var n = parseInt(b.getAttribute('data-n'), 10);
      var v = b.getAttribute('data-v'); if (v === 'true') v = true; else if (v === 'false') v = false;
      b.classList.toggle('sel', state.answers[n] === v);
    });
    $all('.ex-dot').forEach(function (d) {
      var n = parseInt(d.getAttribute('data-dot'), 10);
      d.classList.toggle('done', state.answers[n] !== undefined);
    });
  }

  function bindTop() {
    $('#exBack').addEventListener('click', function () {
      if (state.submitted) { location.href = '/exam/'; return; }
      openModal('Thoát bài thi', 'Bạn có chắc chắn muốn thoát không? Bài làm hiện tại sẽ được lưu lại để bạn làm tiếp sau.', 'Thoát', function () { location.href = '/exam/'; });
    });
    var menu = $('#exMenu'), optBtn = $('#exOptBtn');
    optBtn.addEventListener('click', function (e) { e.stopPropagation(); menu.hidden = !menu.hidden; optBtn.setAttribute('aria-expanded', String(!menu.hidden)); });
    document.addEventListener('click', function (e) { if (!menu.hidden && !menu.contains(e.target)) menu.hidden = true; });
    $('#exSpeed').addEventListener('input', function () {
      var r = parseFloat(this.value); $('#exSpeedVal').textContent = r + 'x';
      var a = $('#exAudio'); if (a) a.playbackRate = r;
    });
    $('#exPy').addEventListener('change', function () { document.body.classList.toggle('py-off', !this.checked); });
    window.addEventListener('beforeunload', function (e) {
      if (state.submitted) return;
      e.preventDefault(); e.returnValue = '';
    });
  }

  // ---------- Đồng hồ ----------
  function remainingSec() { return Math.max(0, data.durationSec - Math.floor((Date.now() - state.startedAt) / 1000)); }
  function fmt(sec) {
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s2 = sec % 60;
    return [h, m, s2].map(function (x) { return (x < 10 ? '0' : '') + x; }).join(':');
  }
  function startTimer() {
    var tick = function () {
      var r = remainingSec();
      $('#exTimerTxt').textContent = fmt(r);
      $('#exTimer').classList.toggle('low', r <= 300);
      if (r <= 0) { clearInterval(timerId); submit(true); }
    };
    tick(); timerId = setInterval(tick, 1000);
  }

  // ---------- Modal ----------
  function openModal(title, text, okLabel, onOk) {
    var root = $('#exModalRoot');
    root.innerHTML = '<div class="ex-modal-bg"><div class="ex-modal" role="dialog" aria-modal="true"><h3>' + esc(title) + '</h3><p>' + esc(text) + '</p>' +
      '<div class="ex-modal-actions"><button type="button" class="ex-btn-ghost" id="exModalCancel">Hủy</button><button type="button" class="ex-btn-primary" id="exModalOk">' + esc(okLabel) + '</button></div></div></div>';
    $('#exModalCancel').addEventListener('click', closeModal);
    $('.ex-modal-bg').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
    $('#exModalOk').addEventListener('click', function () { closeModal(); onOk(); });
    $('#exModalOk').focus();
  }
  function closeModal() { $('#exModalRoot').innerHTML = ''; }

  function confirmSubmit() {
    var left = allQuestions.length - Object.keys(state.answers).length;
    var msg = left > 0 ? 'Bạn còn ' + left + ' câu chưa làm. Bạn có chắc chắn muốn nộp bài không?' : 'Bạn có chắc chắn muốn nộp bài không?';
    openModal('Nộp bài', msg, 'Đồng ý', function () { submit(false); });
  }

  // ---------- Chấm bài ----------
  function submit(auto) {
    if (state.submitted) return;
    clearInterval(timerId);
    var res = { sections: [], correct: 0, total: allQuestions.length, score: 0, max: data.maxScore, at: Date.now(), auto: !!auto, usedSec: Math.min(data.durationSec, Math.floor((Date.now() - state.startedAt) / 1000)) };
    data.sections.forEach(function (sec) {
      var sr = { id: sec.id, name: sec.name, correct: 0, total: 0, parts: [] };
      sec.parts.forEach(function (part) {
        var qs = part.groups ? [].concat.apply([], part.groups.map(function (g) { return g.questions; })) : part.questions;
        var pr = { name: part.name, correct: 0, total: qs.length };
        qs.forEach(function (q) { if (state.answers[q.n] === q.answer) pr.correct++; });
        sr.correct += pr.correct; sr.total += pr.total; sr.parts.push(pr);
      });
      sr.score = Math.round(sr.correct / sr.total * (data.maxScore / data.sections.length));
      res.correct += sr.correct; res.score += sr.score; res.sections.push(sr);
    });
    res.pass = res.score >= data.passScore;
    state.submitted = true; state.result = res; saveState();
    try {
      var hist = JSON.parse(localStorage.getItem(RESULTS) || '{}');
      hist[id] = { score: res.score, max: res.max, correct: res.correct, total: res.total, pass: res.pass, at: res.at };
      localStorage.setItem(RESULTS, JSON.stringify(hist));
    } catch (e) { /* ignore */ }
    showResult();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showResult() {
    var res = state.result;
    // đánh dấu từng câu
    allQuestions.forEach(function (it) {
      var q = it.q, chosen = state.answers[q.n], ok = chosen === q.answer;
      var card = document.getElementById('q-' + q.n);
      if (card) card.classList.add(chosen === undefined ? 'is-skip' : ok ? 'is-correct' : 'is-wrong');
      $all('#exMain [data-n="' + q.n + '"][data-v]').forEach(function (b) {
        var v = b.getAttribute('data-v'); if (v === 'true') v = true; else if (v === 'false') v = false;
        b.classList.remove('sel');
        if (v === q.answer) b.classList.add('ok');
        else if (v === chosen) b.classList.add('bad');
        b.disabled = true;
      });
      var ex = $('[data-explain="' + q.n + '"]');
      if (ex) {
        var ansTxt = typeof q.answer === 'boolean' ? (q.answer ? '✓ Đúng' : '✗ Sai') : q.answer;
        var h = '<div class="ans">Đáp án: ' + esc(ansTxt) + (chosen === undefined ? ' · Bạn chưa chọn' : ok ? ' · Bạn chọn đúng' : ' · Bạn chọn: ' + esc(typeof chosen === 'boolean' ? (chosen ? '✓' : '✗') : chosen)) + '</div>';
        if (q.script) h += '<div class="zh hanzi">' + esc(q.script) + '</div>';
        if (q.scriptVn) h += '<div class="vn">' + esc(q.scriptVn) + '</div>';
        if (q.vn && !q.scriptVn) h += '<div class="vn">' + esc(q.vn) + (q.starVn ? '<br>★ ' + esc(q.starVn) : '') + '</div>';
        ex.innerHTML = h; ex.hidden = false;
      }
    });
    // sidebar kết quả
    var pct = Math.round(res.score / res.max * 100);
    var C = 2 * Math.PI * 80;
    var d = new Date(res.at);
    var pad = function (x) { return (x < 10 ? '0' : '') + x; };
    var dateStr = d.getFullYear() + '.' + pad(d.getMonth() + 1) + '.' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
    var h2 = '<div class="ex-result"><h3>' + esc(data.title) + '</h3><div class="date">' + dateStr + (res.auto ? ' · Hết giờ, tự động nộp' : '') + '</div>' +
      '<div class="ex-ring' + (res.pass ? ' pass' : '') + '"><svg viewBox="0 0 190 190"><circle class="track" cx="95" cy="95" r="80"/><circle class="bar" cx="95" cy="95" r="80" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - pct / 100)) + '"/></svg>' +
      '<div class="ex-ring-txt"><b>' + pct + '%</b><span>' + (res.pass ? 'Đạt' : 'Chưa đạt') + '</span></div></div>' +
      '<div class="ex-stats"><div><small>Chính xác</small><b>' + res.correct + '</b></div><div><small>Số điểm</small><b>' + res.score + '</b><small>/ ' + res.max + '</small></div><div><small>Câu hỏi</small><b>' + res.total + '</b></div></div>' +
      '<div class="ex-result-actions"><button type="button" class="ex-btn-primary" id="exRetry">Làm lại</button><a class="ex-btn-ghost" href="/exam/">Đề khác</a></div></div>';
    h2 += '<div class="ex-breakdown">';
    res.sections.forEach(function (sr) {
      var sp = Math.round(sr.correct / sr.total * 100);
      h2 += '<div class="ex-bd-sec">' + (sr.id === 'listen' ? '🎧' : '📖') + ' ' + esc(sr.name) + ' (' + sr.correct + '/' + sr.total + ') <span style="margin-left:auto;font-weight:600;color:#6b625c">' + sr.score + ' điểm</span></div>' +
        '<div class="ex-bar big"><i style="width:' + sp + '%"></i></div>';
      sr.parts.forEach(function (pr) {
        var pp = Math.round(pr.correct / pr.total * 100);
        h2 += '<div class="ex-bd-row"><span>' + esc(pr.name) + ' (' + pr.correct + '/' + pr.total + '):</span><div class="ex-bar"><i style="width:' + pp + '%"></i></div><span>' + pp + '%</span></div>';
      });
    });
    h2 += '</div><div class="ex-nav" id="exNav"><h3>Xem lại câu hỏi</h3>';
    data.sections.forEach(function (sec) {
      sec.parts.forEach(function (part) {
        h2 += '<h4>' + esc(sec.name) + ' · ' + esc(part.name) + '</h4><div class="ex-nav-grid">';
        var qs = part.groups ? [].concat.apply([], part.groups.map(function (g) { return g.questions; })) : part.questions;
        qs.forEach(function (q) {
          var chosen = state.answers[q.n];
          var cls = chosen === undefined ? '' : chosen === q.answer ? ' ok' : ' bad';
          h2 += '<button type="button" class="ex-dot' + cls + '" data-goto="q-' + q.n + '">' + q.n + '</button>';
        });
        h2 += '</div>';
      });
    });
    h2 += '</div>';
    $('#exSide').innerHTML = h2;
    $('#exRetry').addEventListener('click', function () {
      openModal('Làm lại đề này', 'Kết quả hiện tại sẽ được giữ trong lịch sử, bài làm sẽ bắt đầu lại từ đầu với thời gian đầy đủ.', 'Làm lại', function () {
        clearState(); location.reload();
      });
    });
  }
})();
