/* ============================================================
   Che do lop hoc — tro choi dau gio chieu len lop
   Tro dau tien: "Bat loi sai tiep suc" (dung kho cau Dung/Sai cua phan Ngu phap)
   ============================================================ */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $all = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // Moi cap: file bai tap ngu phap + cach nhan dien URL bai hoc cua cap do
  var LEVELS = {
    hsk1:   { files: ['/js/grammar-hsk1.js', '/js/grammar-errors-hsk1.js'],     re: /^\/lessons\/hsk1-bai-(\d+)\.html$/ },
    hsk1v3: { files: ['/js/grammar-hsk1v3.js', '/js/grammar-errors-hsk1v3.js'], re: /^\/lessons\/hsk1v3-bai-(\d+)\.html$/ },
    hsk2:   { files: ['/js/hsk2-grammar-exercises.js', '/js/grammar-errors-hsk2.js'], re: /^\/lessons\/bai-(\d+)\.html$/ },
    hsk2v3: { files: ['/js/grammar-hsk2v3.js', '/js/grammar-errors-hsk2v3.js'], re: /^\/lessons\/hsk2v3-bai-(\d+)\.html$/ },
    hsk3:   { files: ['/js/grammar-hsk3.js', '/js/grammar-errors-hsk3.js'],     re: /^\/lessons\/hsk3-bai-(\d+)\.html$/ },
    hsk4:   { files: ['/js/grammar-hsk4.js', '/js/grammar-errors-hsk4.js'],     re: /^\/lessons\/hsk4-bai-(\d+)\.html$/ },
    yct:    { files: ['/js/grammar-yct.js', '/js/grammar-errors-yct.js'],       re: /^\/lessons\/yct-bai-(\d+)\.html$/ }
  };

  var state = {
    level: 'hsk3',
    lessons: [],        // [{n, url, judges:[...]}]
    picked: {},         // { url: true }
    teams: 4,
    scores: [],
    timer: { secs: 30, left: 30, id: null, running: false },
    rows: [],           // 5 cau dang chieu
    revealed: {}
  };

  /* ---------------- tien ich ---------------- */
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function save() {
    try {
      localStorage.setItem('hyv_lop', JSON.stringify({ level: state.level, teams: state.teams, secs: state.timer.secs }));
    } catch (e) { /* bo qua */ }
  }
  function restore() {
    try {
      var d = JSON.parse(localStorage.getItem('hyv_lop') || '{}');
      if (d.level && LEVELS[d.level]) state.level = d.level;
      if (d.teams) state.teams = d.teams;
      if (d.secs) { state.timer.secs = d.secs; state.timer.left = d.secs; }
    } catch (e) { /* bo qua */ }
  }

  /* ---------------- nap du lieu mot cap ---------------- */
  var loaded = {};
  function loadLevel(level) {
    var def = LEVELS[level];
    if (!def) return Promise.resolve();
    if (loaded[level]) return Promise.resolve();
    return Promise.all(def.files.map(function (src) {
      return new Promise(function (resolve) {
        var el = document.createElement('script');
        el.src = src;
        el.onload = resolve;
        el.onerror = function () { resolve(); };   // thieu file thi bo qua
        document.head.appendChild(el);
      });
    })).then(function () { loaded[level] = true; });
  }

  // Chi nhan nhung cau tieng Trung that. Loai cac muc noi ve phat am / cach doc
  // (vi du: '二十五 doc la "二五"') vi chieu len lop lam tro tim cau sai thi khong hop.
  // Phan chu thich trong ngoac duoc tach ra de hien nho ben duoi.
  function cleanSentence(raw) {
    if (!raw) return null;
    var s = String(raw).trim();
    if (s.indexOf('／') >= 0) s = s.split('／')[0].trim();   // '你好！／你好吗？' -> lay ve dau
    var note = '';
    s = s.replace(/[（(]([^）)]*)[）)]\s*$/, function (m, inner) { note = inner.trim(); return ''; }).trim();
    if (!s) return null;
    if (/[A-Za-zÀ-ỹ]/.test(s)) return null;                 // con chu Latin -> khong phai cau Han thuan
    var han = s.match(/[一-鿿]/g);
    if (!han || han.length < 2) return null;
    return { text: s, note: note };
  }

  // Ghep dan cac the tu dau cau dap an. The dai thu truoc de khong khop nham
  // (vi du "你" va "你们"); dau cau khong co the rieng thi bo qua.
  // Tra ve mang thu tu dung cua tung the, hoac null neu bo the khong khop dap an.
  function sortOrder(words, answer) {
    var pool = words.map(function (w, i) { return { w: w, i: i, used: false }; })
      .sort(function (a, b) { return b.w.length - a.w.length; });
    var rest = answer, rank = 0, out = [];
    while (rest.length) {
      var found = null;
      for (var k = 0; k < pool.length; k++) {
        if (!pool[k].used && rest.indexOf(pool[k].w) === 0) { found = pool[k]; break; }
      }
      if (!found) {
        if (/^[。！？，、；：“”"'（）]/.test(rest)) { rest = rest.slice(1); continue; }
        return null;
      }
      found.used = true;
      out[found.i] = ++rank;
      rest = rest.slice(found.w.length);
    }
    return pool.every(function (p) { return p.used; }) ? out : null;
  }
  function sortUsable(words, answer) { return !!sortOrder(words, answer); }

  // Moi bai gom hai nguon cau cho tro "Bat loi sai":
  //  1) cau Dung/Sai san co trong bai tap ngu phap (HSK 2 3.0, HSK 3, HSK 4)
  //  2) khoi "Loi hoc sinh Viet hay mac" — co o MOI cap, moi loi cho 1 cau sai va 1 cau dung
  function collectLessons(level) {
    var def = LEVELS[level];
    var bank = {}, errBank = {};
    [window.GRAMMAR_EXTRA, window.HSK2_GRAMMAR_EXERCISES].forEach(function (src) {
      if (!src) return;
      Object.keys(src).forEach(function (url) { if (def.re.test(url)) bank[url] = src[url]; });
    });
    if (window.GRAMMAR_ERRORS) {
      Object.keys(window.GRAMMAR_ERRORS).forEach(function (url) {
        if (def.re.test(url)) errBank[url] = window.GRAMMAR_ERRORS[url];
      });
    }

    var urls = {};
    Object.keys(bank).forEach(function (u) { urls[u] = 1; });
    Object.keys(errBank).forEach(function (u) { urls[u] = 1; });

    var out = [];
    Object.keys(urls).forEach(function (url) {
      var judges = [], seen = {};
      (bank[url] || []).forEach(function (g) {
        (g.items || []).forEach(function (q) {
          if (q.type !== 'judge') return;
          var c = cleanSentence(q.sentence);
          if (!c || seen[c.text]) return;
          seen[c.text] = 1;
          var f = q.correctVersion ? cleanSentence(q.correctVersion) : null;
          judges.push({
            sentence: c.text, note: c.note, isCorrect: !!q.isCorrect,
            fix: f ? f.text : '', why: q.explanation || '', point: g.point || ''
          });
        });
      });
      (errBank[url] || []).forEach(function (e) {
        var w = cleanSentence(e.wrong), r = cleanSentence(e.right);
        if (!w || !r) return;                       // bo nhung loi khong phai cau Han
        if (!seen[w.text]) {
          seen[w.text] = 1;
          judges.push({ sentence: w.text, note: w.note, isCorrect: false, fix: r.text, why: e.why, point: e.point || '' });
        }
        // cau dung chuan cua chinh diem do — dung lam cau "khong co loi"
        if (!seen[r.text]) {
          seen[r.text] = 1;
          judges.push({ sentence: r.text, note: r.note, isCorrect: true, fix: '', why: '', point: e.point || '' });
        }
      });

      // Cau dien tu — dung cho tro gio the A/B/C
      var mcs = [], seenMc = {};
      // Cau sap xep — dung cho tro xep cau bang nguoi
      var sorts = [], seenSort = {};
      (bank[url] || []).forEach(function (g) {
        (g.items || []).forEach(function (q) {
          if (!q.type || q.type === 'mc') {
            if (!q.options || q.options.length < 2 || typeof q.answer !== 'number') return;
            var key = (q.pre || '') + '|' + (q.blank || '') + '|' + (q.post || '');
            if (seenMc[key]) return;
            seenMc[key] = 1;
            mcs.push({
              pre: q.pre || '', post: q.post || '',
              options: q.options.slice(0, 3), answer: q.answer,
              context: q.context || '', why: q.explanation || '', point: g.point || ''
            });
            return;
          }
          if (q.type === 'sort' && Array.isArray(q.words) && q.words.length >= 3 && q.answer) {
            // Mot so cau cu co hai dap an ngan boi ／ — chi lay ve dau
            var ans = String(q.answer).split('／')[0].trim();
            if (seenSort[ans] || !sortUsable(q.words, ans)) return;
            seenSort[ans] = 1;
            sorts.push({
              words: q.words.slice(), answer: ans,
              context: q.context || '', why: q.explanation || '', point: g.point || ''
            });
          }
        });
      });

      if (judges.length || mcs.length || sorts.length) {
        out.push({ n: parseInt(def.re.exec(url)[1], 10), url: url, judges: judges, mcs: mcs, sorts: sorts });
      }
    });
    out.sort(function (a, b) { return a.n - b.n; });
    return out;
  }

  /* ---------------- man hinh chuan bi ---------------- */
  function renderLessons() {
    var wrap = $('#lopLessons');
    if (!state.lessons.length) {
      wrap.innerHTML = '<span style="color:#8d8279">Cấp này chưa có câu Đúng/Sai để chơi.</span>';
      updateCount();
      return;
    }
    wrap.innerHTML = state.lessons.map(function (l) {
      return '<button type="button" class="lop-lesson-chip' + (state.picked[l.url] ? ' on' : '') +
        '" data-url="' + l.url + '">Bài ' + l.n + ' <small style="opacity:.6">(' + l.judges.length + ')</small></button>';
    }).join('');
    $all('.lop-lesson-chip', wrap).forEach(function (b) {
      b.addEventListener('click', function () {
        var u = b.getAttribute('data-url');
        if (state.picked[u]) delete state.picked[u]; else state.picked[u] = true;
        b.classList.toggle('on');
        updateCount();
      });
    });
    updateCount();
  }

  function pickedJudges() {
    var out = [];
    state.lessons.forEach(function (l) {
      if (state.picked[l.url]) out = out.concat(l.judges);
    });
    return out;
  }
  function pickedMcs() {
    var out = [];
    state.lessons.forEach(function (l) {
      if (state.picked[l.url]) out = out.concat(l.mcs || []);
    });
    return out;
  }
  function pickedSorts() {
    var out = [];
    state.lessons.forEach(function (l) {
      if (state.picked[l.url]) out = out.concat(l.sorts || []);
    });
    return out;
  }

  // Ten cac bai dang chon, vi du "Bài 1" hoac "Bài 1, 3, 7"
  function pickedLabel() {
    var ns = state.lessons.filter(function (l) { return state.picked[l.url]; }).map(function (l) { return l.n; });
    if (!ns.length) return '';
    if (ns.length === state.lessons.length) return 'Tất cả ' + ns.length + ' bài';
    if (ns.length > 6) return ns.length + ' bài';
    return 'Bài ' + ns.join(', ');
  }

  function updateCount() {
    var n = pickedJudges().length;
    var m = pickedMcs().length;
    var label = pickedLabel();
    $('#lopCountErrfix').textContent = n ? n + ' câu' : 'chọn bài';
    $('.lop-game-card[data-game="errfix"]').disabled = n < 3;
    $('#lopCountAbc').textContent = m ? m + ' câu' : 'chọn bài';
    $('.lop-game-card[data-game="abc"]').disabled = m < 1;
    var s = pickedSorts().length;
    $('#lopCountSort').textContent = s ? s + ' câu' : 'chọn bài';
    $('.lop-game-card[data-game="sort"]').disabled = s < 1;
    var st = $('#lopPickState');
    if (st) {
      st.textContent = label
        ? '✓ Đang chọn: ' + label + ' · ' + n + ' câu'
        : 'Chưa chọn bài nào — bấm vào số bài bên dưới để chọn.';
      st.classList.toggle('none', !label);
    }
  }

  function switchLevel(level) {
    state.level = level;
    state.picked = {};
    $('#lopLessons').textContent = 'Đang tải…';
    loadLevel(level).then(function () {
      state.lessons = collectLessons(level);
      // mac dinh: chon tat ca cac bai
      state.lessons.forEach(function (l) { state.picked[l.url] = true; });
      renderLessons();
      save();
    });
  }

  /* ---------------- bang diem to ---------------- */
  function resetScores() {
    state.scores = [];
    for (var i = 0; i < state.teams; i++) state.scores.push(0);
  }
  function renderScorebar() {
    var top = Math.max.apply(null, state.scores);
    $('#lopScorebar').innerHTML = state.scores.map(function (s, i) {
      return '<div class="lop-team' + (s > 0 && s === top ? ' lead' : '') + '">' +
        '<div class="lop-team-name">Tổ ' + (i + 1) + '</div>' +
        '<div class="lop-team-score">' + s + '</div>' +
        '<div class="lop-team-btns">' +
          '<button type="button" data-team="' + i + '" data-d="1">+</button>' +
          '<button type="button" data-team="' + i + '" data-d="-1">−</button>' +
        '</div></div>';
    }).join('') +
    '<button type="button" class="lop-mini-btn" id="lopResetScore" style="align-self:center">Xoá điểm</button>';

    $all('#lopScorebar [data-team]').forEach(function (b) {
      b.addEventListener('click', function () {
        addScore(parseInt(b.getAttribute('data-team'), 10), parseInt(b.getAttribute('data-d'), 10));
      });
    });
    $('#lopResetScore').addEventListener('click', function () { resetScores(); renderScorebar(); });
  }
  function addScore(i, d) {
    if (i < 0 || i >= state.scores.length) return;
    state.scores[i] = Math.max(0, state.scores[i] + d);
    renderScorebar();
  }

  /* ---------------- dong ho ---------------- */
  function paintTimer() {
    var t = state.timer;
    var m = Math.floor(t.left / 60), s = t.left % 60;
    var el = $('#lopTimer');
    el.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    el.classList.toggle('is-low', t.left <= 5 && t.left > 0);
    $('#lopTimerToggle').textContent = t.running ? '⏸ Dừng' : '▶ Bắt đầu';
    $('#lopTimerSet').textContent = t.secs + 's';
  }
  function toggleTimer() {
    var t = state.timer;
    if (t.running) { clearInterval(t.id); t.running = false; paintTimer(); return; }
    if (t.left <= 0) t.left = t.secs;
    t.running = true;
    t.id = setInterval(function () {
      t.left--;
      if (t.left <= 0) {
        t.left = 0;
        clearInterval(t.id);
        t.running = false;
        try { beep(); } catch (e) { /* bo qua */ }
      }
      paintTimer();
    }, 1000);
    paintTimer();
  }
  function resetTimer() {
    var t = state.timer;
    clearInterval(t.id); t.running = false; t.left = t.secs; paintTimer();
  }
  function cycleTimerSecs() {
    var opts = [15, 30, 45, 60, 90];
    var i = opts.indexOf(state.timer.secs);
    state.timer.secs = opts[(i + 1) % opts.length];
    resetTimer();
    save();
  }
  function beep() {
    var ctx = new (window.AudioContext || window.webkitAudioContext)();
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 880; o.type = 'sine';
    g.gain.setValueAtTime(0.18, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    o.start(); o.stop(ctx.currentTime + 0.6);
  }

  /* ---------------- tro: bat loi sai tiep suc ---------------- */
  function dealRows() {
    var pool = pickedJudges();
    var wrong = shuffle(pool.filter(function (q) { return !q.isCorrect; }));
    var right = shuffle(pool.filter(function (q) { return q.isCorrect; }));
    // 5 cau: 3 sai + 2 dung, thieu ben nao thi bu ben kia
    var rows = wrong.slice(0, 3).concat(right.slice(0, 2));
    if (rows.length < 5) rows = rows.concat(wrong.slice(3), right.slice(2)).slice(0, 5);
    state.rows = shuffle(rows);
    state.revealed = {};
  }

  function renderErrfix() {
    var pts = {};
    state.rows.forEach(function (r) { if (r.point) pts[r.point] = 1; });
    var ptList = Object.keys(pts).slice(0, 3);

    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Tìm câu <b style="color:#ff8f82">SAI</b> và sửa lại cho đúng</span>' +
        ptList.map(function (p) { return '<span class="lop-point">📐 ' + esc(p) + '</span>'; }).join('') +
      '</div>' +
      '<div class="lop-rows">' + state.rows.map(function (r, i) {
        return '<div class="lop-row" data-i="' + i + '">' +
          '<div class="lop-row-num">' + (i + 1) + '</div>' +
          '<div class="lop-row-zh">' + esc(r.sentence) +
            (r.note ? '<span class="lop-row-note">(' + esc(r.note) + ')</span>' : '') + '</div>' +
          '<div class="lop-row-mark"></div>' +
        '</div>';
      }).join('') + '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopRevealAll">Lật tất cả đáp án (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopNewRound">5 câu khác →</button>' +
      '</div>';

    $all('#lopStage .lop-row').forEach(function (el) {
      el.addEventListener('click', function () { revealRow(parseInt(el.getAttribute('data-i'), 10)); });
    });
    $('#lopRevealAll').addEventListener('click', revealAll);
    $('#lopNewRound').addEventListener('click', function () { dealRows(); renderErrfix(); resetTimer(); });
  }

  function revealRow(i) {
    if (state.revealed[i]) return;
    state.revealed[i] = true;
    var r = state.rows[i];
    var el = $('#lopStage .lop-row[data-i="' + i + '"]');
    if (!el) return;
    el.classList.add(r.isCorrect ? 'revealed-ok' : 'revealed-bad');
    $('.lop-row-mark', el).textContent = r.isCorrect ? '✓' : '✗';
    if (!r.isCorrect) {
      var fix = document.createElement('div');
      fix.className = 'lop-row-fix';
      fix.innerHTML =
        (r.fix ? '<div class="fix-zh">✓ ' + esc(r.fix) + '</div>' : '') +
        (r.why ? '<div class="fix-why">💡 ' + esc(r.why) + '</div>' : '');
      el.appendChild(fix);
    }
  }
  function revealAll() {
    state.rows.forEach(function (_, i) { revealRow(i); });
  }

  /* ---------------- tro: gio the A/B/C ---------------- */
  var ABC = ['A', 'B', 'C', 'D'];

  function dealAbc() {
    state.deck = shuffle(pickedMcs());
    state.pos = 0;
    state.abcShown = false;
  }

  function renderAbc() {
    var q = state.deck[state.pos];
    if (!q) {
      $('#lopStage').innerHTML =
        '<div class="lop-stage-actions"><button type="button" class="lop-act" id="lopNewRound">Bộ câu mới →</button></div>';
      $('#lopNewRound').addEventListener('click', function () { dealAbc(); renderAbc(); resetTimer(); });
      return;
    }
    // Dap an trong du lieu luon o vi tri dau — phai tron lai
    if (!q._order) {
      q._order = shuffle(q.options.map(function (_, i) { return i; }));
      q._ans = q._order.indexOf(q.answer);
    }

    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Câu ' + (state.pos + 1) + '/' + state.deck.length + ' · cả lớp giơ thẻ <b>A</b> / <b>B</b> / <b>C</b></span>' +
        (q.point ? '<span class="lop-point">📐 ' + esc(q.point) + '</span>' : '') +
      '</div>' +
      (q.context ? '<div class="lop-abc-context">🗣️ ' + esc(q.context) + '</div>' : '') +
      '<div class="lop-abc-sentence">' + esc(q.pre) + '<span class="lop-blank">＿＿</span>' + esc(q.post) + '</div>' +
      '<div class="lop-abc-opts">' + q._order.map(function (oi, i) {
        return '<div class="lop-abc-opt" data-i="' + i + '">' +
          '<span class="lop-abc-key">' + ABC[i] + '</span>' +
          '<span class="lop-abc-text">' + esc(q.options[oi]) + '</span>' +
        '</div>';
      }).join('') + '</div>' +
      '<div id="lopAbcWhy" class="lop-abc-why" hidden></div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopAbcReveal">Lật đáp án (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopAbcNext">Câu tiếp theo →</button>' +
      '</div>';

    $('#lopAbcReveal').addEventListener('click', revealAbc);
    $('#lopAbcNext').addEventListener('click', nextAbc);
    $all('#lopStage .lop-abc-opt').forEach(function (el) { el.addEventListener('click', revealAbc); });
    state.abcShown = false;
  }

  function revealAbc() {
    if (state.abcShown) return;
    var q = state.deck[state.pos];
    if (!q) return;
    state.abcShown = true;
    $all('#lopStage .lop-abc-opt').forEach(function (el, i) {
      el.classList.add(i === q._ans ? 'is-right' : 'is-dim');
    });
    if (q.why) {
      var w = $('#lopAbcWhy');
      w.hidden = false;
      w.textContent = '💡 ' + q.why;
    }
  }
  function nextAbc() {
    if (state.pos < state.deck.length - 1) state.pos++;
    else { dealAbc(); }
    renderAbc();
    resetTimer();
  }

  /* ---------------- tro: xep cau bang nguoi ---------------- */
  function dealSort() {
    state.deck = shuffle(pickedSorts());
    state.pos = 0;
    state.sortShown = false;
  }

  function renderSort() {
    var q = state.deck[state.pos];
    if (!q) {
      $('#lopStage').innerHTML =
        '<div class="lop-stage-actions"><button type="button" class="lop-act" id="lopNewRound">Bộ câu mới →</button></div>';
      $('#lopNewRound').addEventListener('click', function () { dealSort(); renderSort(); resetTimer(); });
      return;
    }
    if (!q._mix) q._mix = shuffle(q.words);

    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Câu ' + (state.pos + 1) + '/' + state.deck.length + ' · mỗi tổ cử <b>' + q._mix.length + ' em</b> lên bảng, mỗi em cầm một thẻ</span>' +
        (q.point ? '<span class="lop-point">📐 ' + esc(q.point) + '</span>' : '') +
      '</div>' +
      (q.context ? '<div class="lop-abc-context">🗣️ ' + esc(q.context) + '</div>' : '') +
      '<div class="lop-sort-cards">' + q._mix.map(function (w, i) {
        return '<div class="lop-sort-card"><span class="lop-sort-no">' + (i + 1) + '</span>' +
          '<span class="lop-sort-w">' + esc(w) + '</span></div>';
      }).join('') + '</div>' +
      '<div id="lopSortAns" class="lop-sort-answer" hidden></div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopSortReveal">Lật đáp án (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopSortNext">Câu tiếp theo →</button>' +
      '</div>';

    $('#lopSortReveal').addEventListener('click', revealSort);
    $('#lopSortNext').addEventListener('click', nextSort);
    state.sortShown = false;
  }

  function revealSort() {
    if (state.sortShown) return;
    var q = state.deck[state.pos];
    if (!q) return;
    state.sortShown = true;
    // Danh lai so thu tu dung cho tung the — de hoc sinh biet minh phai dung o dau
    var order = sortOrder(q._mix, q.answer);
    var cards = $all('#lopStage .lop-sort-card');
    if (order) order.forEach(function (rank, i) {
      if (cards[i]) $('.lop-sort-no', cards[i]).textContent = rank;
    });
    var box = $('#lopSortAns');
    box.hidden = false;
    box.innerHTML = '<div class="lop-sort-zh">✓ ' + esc(q.answer) + '</div>' +
      (q.why ? '<div class="lop-sort-why">💡 ' + esc(q.why) + '</div>' : '');
  }
  function nextSort() {
    if (state.pos < state.deck.length - 1) state.pos++;
    else dealSort();
    renderSort();
    resetTimer();
  }

  /* ---------------- quay so bao danh ---------------- */
  var rollTimer = null;
  function openRoll() {
    $('#lopRollBox').hidden = false;
    doRoll();
  }
  function doRoll() {
    var size = Math.max(2, Math.min(99, parseInt($('#lopClassSize').value, 10) || 50));
    $('#lopClassSize').value = size;
    var el = $('#lopRollNumber');
    var ticks = 18;
    clearInterval(rollTimer);
    rollTimer = setInterval(function () {
      el.textContent = 1 + Math.floor(Math.random() * size);
      if (--ticks <= 0) {
        clearInterval(rollTimer);
        $('#lopRollHint').textContent = 'Mời em số ' + el.textContent + ' lên bảng.';
      }
    }, 60);
    $('#lopRollHint').textContent = '';
  }

  /* ---------------- chuyen man hinh ---------------- */
  var LEVEL_NAME = {
    hsk1: 'HSK 1', hsk1v3: 'HSK 1 · 3.0', hsk2: 'HSK 2', hsk2v3: 'HSK 2 · 3.0',
    hsk3: 'HSK 3', hsk4: 'HSK 4', yct: 'YCT'
  };

  var GAME_TITLE = { errfix: 'Bắt lỗi sai tiếp sức', abc: 'Giơ thẻ A / B / C', sort: 'Xếp câu bằng người' };
  var GAME_SECS = { errfix: 30, abc: 10, sort: 60 };

  function startGame(game) {
    var n = game === 'abc' ? pickedMcs().length : game === 'sort' ? pickedSorts().length : pickedJudges().length;
    if (!n || (game === 'errfix' && n < 3)) return;
    state.game = game;
    $('#lopTitle').textContent = GAME_TITLE[game];
    $('#lopSub').textContent = (LEVEL_NAME[state.level] || '') + ' · ' + pickedLabel();
    resetScores();
    renderScorebar();
    // Moi tro mot nhip: gio the tra loi nhanh, xep cau can thoi gian len bang
    state.timer.secs = GAME_SECS[game] || 30;
    if (game === 'abc') { dealAbc(); renderAbc(); }
    else if (game === 'sort') { dealSort(); renderSort(); }
    else { dealRows(); renderErrfix(); }
    resetTimer();
    $('#lopSetup').hidden = true;
    $('#lopPlay').hidden = false;
  }
  function exitGame() {
    clearInterval(state.timer.id);
    state.timer.running = false;
    $('#lopPlay').hidden = true;
    $('#lopSetup').hidden = false;
  }

  /* ---------------- khoi tao ---------------- */
  function init() {
    restore();
    $('#lopLevel').value = state.level;
    $all('#lopTeamPick button').forEach(function (b) {
      b.classList.toggle('active', parseInt(b.getAttribute('data-n'), 10) === state.teams);
      b.addEventListener('click', function () {
        state.teams = parseInt(b.getAttribute('data-n'), 10);
        $all('#lopTeamPick button').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        save();
      });
    });

    $('#lopLevel').addEventListener('change', function () { switchLevel(this.value); });
    $('#lopPickAll').addEventListener('click', function () {
      state.lessons.forEach(function (l) { state.picked[l.url] = true; });
      renderLessons();
    });
    $('#lopPickNone').addEventListener('click', function () { state.picked = {}; renderLessons(); });
    $('#lopPickRandom').addEventListener('click', function () {
      if (!state.lessons.length) return;
      state.picked = {};
      var l = state.lessons[Math.floor(Math.random() * state.lessons.length)];
      state.picked[l.url] = true;
      renderLessons();
    });

    $all('.lop-game-card').forEach(function (c) {
      c.addEventListener('click', function () { startGame(c.getAttribute('data-game')); });
    });
    $('#lopExit').addEventListener('click', exitGame);
    $('#lopTimerToggle').addEventListener('click', toggleTimer);
    $('#lopTimerSet').addEventListener('click', cycleTimerSecs);
    $('#lopRoll').addEventListener('click', openRoll);
    $('#lopRollAgain').addEventListener('click', doRoll);
    $('#lopRollClose').addEventListener('click', function () { clearInterval(rollTimer); $('#lopRollBox').hidden = true; });

    document.addEventListener('keydown', function (e) {
      if ($('#lopPlay').hidden) return;
      if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
      var g = state.game;
      if (e.code === 'Space') {
        e.preventDefault();
        if (g === 'abc') revealAbc(); else if (g === 'sort') revealSort(); else revealAll();
        return;
      }
      if (e.code === 'ArrowRight' || e.code === 'Enter') {
        if (g === 'abc') { e.preventDefault(); nextAbc(); }
        else if (g === 'sort') { e.preventDefault(); nextSort(); }
        return;
      }
      if (e.key === 'n' || e.key === 'N') {
        if (g === 'abc') { dealAbc(); renderAbc(); }
        else if (g === 'sort') { dealSort(); renderSort(); }
        else { dealRows(); renderErrfix(); }
        resetTimer(); return;
      }
      if (e.key === 't' || e.key === 'T') { toggleTimer(); return; }
      if (e.key === 'r' || e.key === 'R') { openRoll(); return; }
      if (/^[1-6]$/.test(e.key)) { addScore(parseInt(e.key, 10) - 1, 1); }
    });

    switchLevel(state.level);
    paintTimer();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
