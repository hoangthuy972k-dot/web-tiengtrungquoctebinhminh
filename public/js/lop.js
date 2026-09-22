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
      localStorage.setItem('hyv_lop', JSON.stringify({ level: state.level, teams: state.teams, secs: state.timer.secs, sound: audio.on }));
    } catch (e) { /* bo qua */ }
  }
  function restore() {
    try {
      var d = JSON.parse(localStorage.getItem('hyv_lop') || '{}');
      if (d.level && LEVELS[d.level]) state.level = d.level;
      if (d.teams) state.teams = d.teams;
      if (d.secs) { state.timer.secs = d.secs; state.timer.left = d.secs; }
      if (d.sound === false) audio.on = false;
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
    // Kiem tra dau gio
    var total = m + s + n;
    $('#lopCountQuiz').textContent = m ? Math.min(10, m) + ' câu' : 'chọn bài';
    $('.lop-test-card[data-test="quiz"]').disabled = m < 1;
    $('#lopCountPaper').textContent = total ? total + ' câu' : 'chọn bài';
    $('.lop-test-card[data-test="paper"]').disabled = total < 1;
    $('.lop-test-card[data-test="dictation"]').disabled = !label;
    // Cac tro dung tu vung: chua chon bai thi khoa lai cho de hieu
    $all('.lop-game-card').forEach(function (c) {
      if (c.querySelector('.lop-count-vocab')) c.disabled = !label;
    });

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
      // Khong tu tich san bai nao — thay/co bam bai nao thi ra bai do
      renderLessons();
      save();
    });
  }

  /* ---------------- tu vung cua cac bai da chon ----------------
     Moi trang bai hoc co file /js/<bai>-data.js khai bao bien toan cuc vocabData.
     Nap trong iframe an de cac bai khong ghi de len nhau.                        */
  var vocabCache = {};
  function loadVocabOf(url) {
    if (vocabCache[url]) return Promise.resolve(vocabCache[url]);
    var src = url.replace('/lessons/', '/js/').replace('.html', '-data.js');
    return new Promise(function (resolve) {
      var ifr = document.createElement('iframe');
      ifr.style.display = 'none';
      document.body.appendChild(ifr);
      var doc = ifr.contentDocument;
      doc.open(); doc.write('<!doctype html><html><body></body></html>'); doc.close();
      function done(list) {
        vocabCache[url] = list;
        try { document.body.removeChild(ifr); } catch (e) { /* bo qua */ }
        resolve(list);
      }
      var sc = doc.createElement('script');
      sc.src = src;
      sc.onload = function () {
        var w = ifr.contentWindow;
        var raw = w.vocabData || [];
        done({
          vocab: raw.filter(function (v) { return v && v.zh && v.vn; }).map(function (v) {
            return {
              zh: v.zh, py: v.py || '', vn: v.vn, hv: v.hv || '',
              em: v.em || v.img || '', pos: v.pos || '',
              hanzi: Array.isArray(v.hanzi) ? v.hanzi : [],
              ex_zh: v.ex_zh || '', ex_py: v.ex_py || '', ex_vn: v.ex_vn || ''
            };
          }),
          translate: (w.translateData || []).filter(function (t) { return t && t.vi && t.zh; })
            .map(function (t) { return { vi: t.vi, zh: t.zh, py: t.py || '' }; }),
          dialogs: (w.dialogData || []).filter(function (d) { return d && Array.isArray(d.lines) && d.lines.length >= 4; })
            .map(function (d) {
              return {
                scene: d.scene || '',
                lines: d.lines.filter(function (l) { return l && l.zh; })
                  .map(function (l) { return { sp: l.sp || 0, zh: l.zh, py: l.py || '', vn: l.vn || '' }; })
              };
            })
        });
      };
      sc.onerror = function () { done({ vocab: [], translate: [], dialogs: [] }); };
      doc.body.appendChild(sc);
    });
  }
  function loadPickedVocab() {
    var urls = state.lessons.filter(function (l) { return state.picked[l.url]; })
      .map(function (l) { return l.url; });
    return Promise.all(urls.map(loadVocabOf)).then(function (parts) {
      var vocab = [], trans = [], dialogs = [], seen = {}, seenT = {};
      parts.forEach(function (p) {
        (p.vocab || []).forEach(function (v) {
          if (seen[v.zh]) return;
          seen[v.zh] = 1;
          vocab.push(v);
        });
        (p.translate || []).forEach(function (t) {
          if (seenT[t.zh]) return;
          seenT[t.zh] = 1;
          trans.push(t);
        });
        dialogs = dialogs.concat(p.dialogs || []);
      });
      state.trans = trans;
      state.dialogs = dialogs;
      return vocab;
    });
  }

  // Doc chu Han bang giong may — de goi tu trong tro Bingo
  function speakZh(text) {
    try {
      if (!window.speechSynthesis) return;
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    } catch (e) { /* bo qua */ }
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
    var truoc = state.scores[i];
    state.scores[i] = Math.max(0, truoc + d);
    if (state.scores[i] !== truoc) { try { d > 0 ? sndUp() : sndDown(); } catch (e) { /* bo qua */ } }
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
  function startTimer() {
    var t = state.timer;
    if (t.running) return;
    if (t.left <= 0) t.left = t.secs;
    t.running = true;
    t.id = setInterval(function () {
      t.left--;
      if (t.left <= 0) {
        t.left = 0;
        clearInterval(t.id);
        t.running = false;
        try { sndEnd(); } catch (e) { /* bo qua */ }
      } else {
        try { sndTick(t.left <= 5); } catch (e) { /* bo qua */ }
      }
      paintTimer();
    }, 1000);
    paintTimer();
  }
  function stopTimer() {
    clearInterval(state.timer.id);
    state.timer.running = false;
    paintTimer();
  }
  function toggleTimer() {
    if (state.timer.running) stopTimer(); else startTimer();
  }
  // Vao tro moi hay sang cau moi la dong ho chay ngay — khong phai voi tay bam
  // "Bat dau". Goi resetTimer(false) khi chi muon dat lai ma chua chay.
  function resetTimer(auto) {
    var t = state.timer;
    clearInterval(t.id);
    t.running = false;
    t.left = t.secs;
    paintTimer();
    if (auto !== false) startTimer();
  }
  function cycleTimerSecs() {
    var opts = [15, 30, 45, 60, 90];
    var i = opts.indexOf(state.timer.secs);
    var dangChay = state.timer.running;
    state.timer.secs = opts[(i + 1) % opts.length];
    resetTimer(dangChay);
    save();
  }
  /* ---------------- am thanh lop hoc ----------------
     Tu tao bang Web Audio, khong can tai file nao. Trinh duyet chi cho phat
     tieng sau khi nguoi dung bam chuot mot lan — tren lop luon bam nut truoc
     khi bam dong ho nen khong sao.                                          */
  var audio = { ctx: null, on: true };
  function audioCtx() {
    if (!audio.on) return null;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!audio.ctx) audio.ctx = new AC();
    if (audio.ctx.state === 'suspended') audio.ctx.resume();
    return audio.ctx;
  }
  // Mot tieng don: cao do, do dai, dang song, do to, cho bao lau moi keu, cao do cuoi
  function tone(freq, dur, type, vol, delay, endFreq) {
    var ctx = audioCtx();
    if (!ctx) return;
    var t0 = ctx.currentTime + (delay || 0);
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(t0); o.stop(t0 + dur + 0.03);
  }

  function sndTick(urgent) {
    // Tich… tac… — nam giay cuoi keu cao hon va to hon cho hoc sinh giat minh
    tone(urgent ? 1560 : 1040, 0.04, 'square', urgent ? 0.13 : 0.045);
  }
  function sndUp() {
    tone(880, 0.09, 'triangle', 0.24);
    tone(1320, 0.17, 'triangle', 0.20, 0.07);
  }
  function sndDown() {
    tone(430, 0.18, 'triangle', 0.16, 0, 250);
  }
  function sndEnd() {
    // Ba tieng chuong het gio + duoi ngan vang lai
    [0, 0.22, 0.44].forEach(function (d) {
      tone(1175, 0.20, 'sine', 0.30, d);
      tone(1568, 0.16, 'sine', 0.14, d);
    });
    tone(784, 1.5, 'sine', 0.22, 0.66);
    tone(1175, 1.2, 'sine', 0.10, 0.66);
  }
  function toggleSound() {
    audio.on = !audio.on;
    if (audio.on) { audioCtx(); sndUp(); }
    paintSound();
    save();
  }
  function paintSound() {
    var b = $('#lopSound');
    if (!b) return;
    b.textContent = audio.on ? '🔊' : '🔇';
    b.title = audio.on ? 'Đang bật tiếng — bấm để tắt' : 'Đang tắt tiếng — bấm để bật';
    b.classList.toggle('is-off', !audio.on);
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

  /* ---------------- tro: Bingo 3x3 ---------------- */
  function startBingo(vocab) {
    state.bingoWords = shuffle(vocab).slice(0, 15);
    state.bingoCalled = [];
    state.bingoPhase = 'write';
    renderBingo();
  }

  function renderBingo() {
    if (state.bingoPhase === 'write') {
      $('#lopStage').innerHTML =
        '<div class="lop-stage-head"><span>Bước 1 · Mỗi em kẻ lưới <b>3×3</b> trong vở rồi chọn <b>9</b> trong ' +
          state.bingoWords.length + ' từ dưới đây để điền vào</span>' +
          (state.bingoWords.length < 13
            ? '<span class="lop-point">⚠️ Ít từ quá — nên chọn thêm bài để có từ 15 từ trở lên</span>'
            : '') +
        '</div>' +
        '<div class="lop-bingo-list">' + state.bingoWords.map(function (v, i) {
          return '<div class="lop-bingo-word"><span class="lop-bingo-no">' + (i + 1) + '</span>' +
            '<span class="lop-bingo-zh">' + esc(v.zh) + '</span>' +
            '<span class="lop-bingo-py">' + esc(v.py) + '</span></div>';
        }).join('') + '</div>' +
        '<div class="lop-stage-actions">' +
          '<button type="button" class="lop-act" id="lopBingoGo">Cả lớp viết xong → Bắt đầu gọi từ</button>' +
        '</div>';
      $('#lopBingoGo').addEventListener('click', function () {
        state.bingoPhase = 'call';
        state.bingoPool = shuffle(state.bingoWords.slice());
        renderBingo();
        callBingo();
      });
      return;
    }

    var cur = state.bingoCalled[state.bingoCalled.length - 1];
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head"><span>Bước 2 · Nghe nghĩa, ai có từ đó thì gạch. Đủ 3 ô thẳng hàng thì hô <b>中了!</b></span>' +
        '<span class="lop-point">Đã gọi ' + state.bingoCalled.length + '/' + state.bingoWords.length + '</span></div>' +
      (cur
        ? '<div class="lop-bingo-call">' +
            '<div class="lop-bingo-vn">' + esc(cur.vn) + '</div>' +
            '<div class="lop-bingo-reveal" id="lopBingoReveal" hidden>' +
              '<span class="lop-bingo-big">' + esc(cur.zh) + '</span>' +
              '<span class="lop-bingo-bigpy">' + esc(cur.py) + '</span>' +
            '</div>' +
          '</div>'
        : '<div class="lop-bingo-call"><div class="lop-bingo-vn">Bấm “Gọi từ” để bắt đầu</div></div>') +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopBingoNext">Gọi từ tiếp theo (Space)</button>' +
        (cur ? '<button type="button" class="lop-act ghost" id="lopBingoShow">Hiện chữ Hán</button>' : '') +
        '<button type="button" class="lop-act ghost" id="lopBingoRestart">Ván mới</button>' +
      '</div>' +
      (state.bingoCalled.length
        ? '<div class="lop-bingo-done">Đã gọi: ' + state.bingoCalled.map(function (v) {
            return '<span>' + esc(v.zh) + '</span>';
          }).join('') + '</div>'
        : '');

    $('#lopBingoNext').addEventListener('click', callBingo);
    var showBtn = $('#lopBingoShow');
    if (showBtn) showBtn.addEventListener('click', function () {
      var r = $('#lopBingoReveal');
      if (r) r.hidden = false;
      if (cur) speakZh(cur.zh);
    });
    $('#lopBingoRestart').addEventListener('click', function () {
      startBingo(state.vocab || []);
    });
  }

  function callBingo() {
    if (state.bingoPhase !== 'call') return;
    if (!state.bingoPool || !state.bingoPool.length) return;
    var v = state.bingoPool.shift();
    state.bingoCalled.push(v);
    renderBingo();
    speakZh(v.zh);
  }

  /* ---------------- tro: nhin hinh doan chu ---------------- */
  function dealGuess(vocab) {
    state.deck = shuffle(vocab.filter(function (v) { return v.em; }));
    state.pos = 0;
    state.guessShown = false;
  }

  function renderGuess() {
    var v = state.deck[state.pos];
    if (!v) {
      $('#lopStage').innerHTML =
        '<div class="lop-stage-actions"><button type="button" class="lop-act" id="lopNewRound">Bộ từ mới →</button></div>';
      $('#lopNewRound').addEventListener('click', function () { dealGuess(state.vocab || []); renderGuess(); });
      return;
    }
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head"><span>Từ ' + (state.pos + 1) + '/' + state.deck.length + ' · tổ nào đoán được chữ Hán và pinyin thì giơ tay</span></div>' +
      '<div class="lop-guess-em">' + esc(v.em) + '</div>' +
      '<div class="lop-guess-answer" id="lopGuessAns" hidden>' +
        '<div class="lop-guess-zh">' + esc(v.zh) + '</div>' +
        '<div class="lop-guess-py">' + esc(v.py) + '</div>' +
        '<div class="lop-guess-vn">' + esc(v.vn) + '</div>' +
      '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopGuessReveal">Lật đáp án (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopGuessNext">Từ tiếp theo →</button>' +
      '</div>';
    $('#lopGuessReveal').addEventListener('click', revealGuess);
    $('#lopGuessNext').addEventListener('click', nextGuess);
    state.guessShown = false;
  }
  function revealGuess() {
    if (state.guessShown) return;
    state.guessShown = true;
    var el = $('#lopGuessAns');
    if (el) el.hidden = false;
    var v = state.deck[state.pos];
    if (v) speakZh(v.zh);
  }
  function nextGuess() {
    if (state.pos < state.deck.length - 1) state.pos++;
    else dealGuess(state.vocab || []);
    renderGuess();
    resetTimer();
  }

  /* ---------------- tro: lat o doan chu ---------------- */
  // 9 o che hinh. Hai o thuong (+1 diem), mot o mat luot — dat ngau nhien.
  function dealTiles(vocab) {
    if (!state.tileFace) state.tileFace = 'zh';   // mac dinh che CHU HAN
    var pool = state.tileFace === 'em'
      ? vocab.filter(function (v) { return v.em; })
      : vocab.filter(function (v) { return /^[一-鿿]{1,4}$/.test(v.zh); });
    state.tileWord = shuffle(pool.length ? pool : vocab)[0];
    var marks = shuffle([1, 1, 1, 1, 1, 1, 'bonus', 'bonus', 'skip']);
    state.tiles = marks.map(function (m) { return { open: false, mark: m }; });
    state.tileShown = false;
  }

  function renderTiles() {
    var v = state.tileWord;
    if (!v) {
      $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Chưa có từ để chơi.</span></div>';
      return;
    }
    var face = state.tileFace === 'em' ? (v.em || v.zh) : v.zh;
    var isZh = state.tileFace !== 'em';
    // Tu cang dai thi chu cang phai nho de van nam gon trong o vuong
    var sizeClass = isZh ? ' len-' + Math.min(4, (v.zh || '').length) : '';

    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Mỗi tổ lần lượt chọn mở <b>một ô</b> rồi đoán. Có ô <b>thưởng +1</b> và ô <b>mất lượt</b>.</span>' +
        '<span class="lop-point">Đang che: ' + (isZh ? 'chữ Hán' : 'hình minh hoạ') + '</span>' +
      '</div>' +
      '<div class="lop-tiles-wrap">' +
        '<div class="lop-tiles-pic' + (isZh ? ' is-zh' : '') + sizeClass + '">' + esc(face) + '</div>' +
        '<div class="lop-tiles-grid">' + state.tiles.map(function (t, i) {
          return '<button type="button" class="lop-tile' + (t.open ? ' is-open' : '') + '" data-i="' + i + '">' +
            (t.open ? (t.mark === 'bonus' ? '⭐' : t.mark === 'skip' ? '⛔' : '') : (i + 1)) +
          '</button>';
        }).join('') + '</div>' +
      '</div>' +
      '<div class="lop-guess-answer" id="lopTileAns"' + (state.tileShown ? '' : ' hidden') + '>' +
        '<div class="lop-guess-zh">' + esc(v.zh) + '</div>' +
        '<div class="lop-guess-py">' + esc(v.py) + '</div>' +
        '<div class="lop-guess-vn">' + esc(v.vn) + '</div>' +
      '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopTileReveal">Lật đáp án (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopTileNext">Từ tiếp theo →</button>' +
        '<button type="button" class="lop-act ghost" id="lopTileFace">Che ' + (isZh ? 'hình minh hoạ' : 'chữ Hán') + '</button>' +
      '</div>';

    $all('#lopStage .lop-tile').forEach(function (btn) {
      btn.addEventListener('click', function () { openTile(parseInt(btn.getAttribute('data-i'), 10)); });
    });
    $('#lopTileReveal').addEventListener('click', revealTiles);
    $('#lopTileNext').addEventListener('click', function () {
      dealTiles(state.vocab || []); renderTiles(); resetTimer();
    });
    $('#lopTileFace').addEventListener('click', function () {
      state.tileFace = isZh ? 'em' : 'zh';
      dealTiles(state.vocab || []); renderTiles(); resetTimer();
    });
  }

  function openTile(i) {
    var t = state.tiles[i];
    if (!t || t.open) return;
    t.open = true;
    renderTiles();
    if (t.mark === 'bonus') flashNote('⭐ Ô thưởng! Tổ vừa chọn được +1 điểm');
    else if (t.mark === 'skip') flashNote('⛔ Ô mất lượt! Chuyển sang tổ kế tiếp');
  }
  function revealTiles() {
    state.tiles.forEach(function (t) { t.open = true; });
    state.tileShown = true;
    renderTiles();
    if (state.tileWord) speakZh(state.tileWord.zh);
  }

  // Bao nhanh giua man hinh, tu tat sau vai giay
  function flashNote(text) {
    var el = document.createElement('div');
    el.className = 'lop-flash';
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(function () { el.classList.add('out'); }, 1500);
    setTimeout(function () { try { document.body.removeChild(el); } catch (e) { /* bo qua */ } }, 2100);
  }

  /* ---------------- tro: ban noi toi doan ---------------- */
  function dealTaboo(vocab) {
    state.deck = shuffle(vocab);
    state.pos = 0;
    state.tabooGot = 0;
    state.tabooSkip = 0;
  }

  function renderTaboo() {
    var v = state.deck[state.pos];
    if (!v) {
      $('#lopStage').innerHTML =
        '<div class="lop-taboo-done">Hết từ · đoán được <b>' + state.tabooGot + '</b> từ</div>' +
        '<div class="lop-stage-actions"><button type="button" class="lop-act" id="lopNewRound">Lượt mới →</button></div>';
      $('#lopNewRound').addEventListener('click', function () { dealTaboo(state.vocab || []); renderTaboo(); resetTimer(); });
      return;
    }
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Em đoán <b>quay lưng</b> với màn hình · tổ mô tả bằng tiếng Trung, <b>cấm nói chính từ này</b></span>' +
        '<span class="lop-point">Đoán được: ' + state.tabooGot + ' · bỏ qua: ' + state.tabooSkip + '</span>' +
      '</div>' +
      '<div class="lop-taboo-card">' +
        '<div class="lop-taboo-zh">' + esc(v.zh) + '</div>' +
        '<div class="lop-taboo-py">' + esc(v.py) + '</div>' +
        '<div class="lop-taboo-vn">' + esc(v.vn) + '</div>' +
      '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopTabooOk">✓ Đoán đúng (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopTabooSkip">↷ Bỏ qua</button>' +
      '</div>';
    $('#lopTabooOk').addEventListener('click', function () { tabooNext(true); });
    $('#lopTabooSkip').addEventListener('click', function () { tabooNext(false); });
  }
  function tabooNext(got) {
    if (got) state.tabooGot++; else state.tabooSkip++;
    state.pos++;
    renderTaboo();
  }

  /* ---------------- tro: dich nhanh Viet -> Trung ---------------- */
  function dealTrans() {
    state.deck = shuffle(state.trans || []);
    state.pos = 0;
    state.transShown = false;
  }

  function renderTrans() {
    var t = state.deck[state.pos];
    if (!t) {
      $('#lopStage').innerHTML =
        '<div class="lop-stage-head"><span>Các bài đã chọn chưa có câu dịch. Chọn thêm bài khác nhé.</span></div>';
      return;
    }
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Câu ' + (state.pos + 1) + '/' + state.deck.length + ' · mỗi tổ cử 1 em lên bảng viết câu tiếng Trung</span>' +
      '</div>' +
      '<div class="lop-trans-vi">' + esc(t.vi) + '</div>' +
      '<div class="lop-trans-answer" id="lopTransAns" hidden>' +
        '<div class="lop-trans-zh">' + esc(t.zh) + '</div>' +
        (t.py ? '<div class="lop-trans-py">' + esc(t.py) + '</div>' : '') +
      '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopTransReveal">Lật đáp án (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopTransNext">Câu tiếp theo →</button>' +
      '</div>';
    $('#lopTransReveal').addEventListener('click', revealTrans);
    $('#lopTransNext').addEventListener('click', nextTrans);
    state.transShown = false;
  }
  function revealTrans() {
    if (state.transShown) return;
    state.transShown = true;
    var el = $('#lopTransAns');
    if (el) el.hidden = false;
    var t = state.deck[state.pos];
    if (t) speakZh(t.zh);
  }
  function nextTrans() {
    if (state.pos < state.deck.length - 1) state.pos++;
    else dealTrans();
    renderTrans();
    resetTimer();
  }

  /* ---------------- tro: nghe nhanh chi chu ---------------- */
  function dealListen(vocab) {
    var pool = shuffle(vocab).slice(0, 9);
    state.listenGrid = shuffle(pool);
    state.listenTarget = state.listenGrid[Math.floor(Math.random() * state.listenGrid.length)];
    state.listenPicked = {};
  }

  function renderListen() {
    var t = state.listenTarget;
    if (!t) {
      $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Chưa có từ để chơi.</span></div>';
      return;
    }
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Hai tổ cử một em lên bảng · nghe xong, ai <b>chỉ đúng chữ</b> trước thì thắng</span>' +
      '</div>' +
      '<div class="lop-listen-grid">' + state.listenGrid.map(function (v, i) {
        var st = state.listenPicked[i];
        return '<button type="button" class="lop-listen-cell' + (st ? ' ' + st : '') + '" data-i="' + i + '">' +
          esc(v.zh) + '</button>';
      }).join('') + '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopListenPlay">🔊 Đọc từ (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopListenNext">Từ khác →</button>' +
      '</div>';

    $all('#lopStage .lop-listen-cell').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = parseInt(btn.getAttribute('data-i'), 10);
        if (state.listenPicked[i]) return;
        state.listenPicked[i] = (state.listenGrid[i] === state.listenTarget) ? 'is-right' : 'is-wrong';
        renderListen();
        if (state.listenGrid[i] === state.listenTarget) flashNote('✓ Đúng rồi — ' + state.listenTarget.vn);
      });
    });
    $('#lopListenPlay').addEventListener('click', function () { speakZh(t.zh); });
    $('#lopListenNext').addEventListener('click', function () {
      dealListen(state.vocab || []); renderListen(); resetTimer(); speakZh(state.listenTarget.zh);
    });
    speakZh(t.zh);
  }

  /* ---------------- tro: doan chu qua bo thu ---------------- */
  function dealHanzi(vocab) {
    var pool = [];
    vocab.forEach(function (v) {
      (v.hanzi || []).forEach(function (h) {
        if (h && h.c && (h.rad || h.tip)) pool.push({ h: h, vn: v.vn });
      });
    });
    state.deck = shuffle(pool);
    state.pos = 0;
    state.hanziShown = false;
  }

  function renderHanzi() {
    var item = state.deck[state.pos];
    if (!item) {
      $('#lopStage').innerHTML =
        '<div class="lop-stage-head"><span>Các bài đã chọn chưa có dữ liệu chiết tự. Chọn thêm bài khác nhé.</span></div>';
      return;
    }
    var h = item.h;
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Chữ ' + (state.pos + 1) + '/' + state.deck.length + ' · nghe manh mối rồi đoán xem là chữ gì</span>' +
      '</div>' +
      '<div class="lop-hz-clues">' +
        (h.rad ? '<div class="lop-hz-clue"><span>Bộ thủ</span><b>' + esc(h.rad) + '</b></div>' : '') +
        (h.st ? '<div class="lop-hz-clue"><span>Số nét</span><b>' + esc(h.st) + '</b></div>' : '') +
        (h.type ? '<div class="lop-hz-clue"><span>Cấu tạo</span><b>' + esc(h.type) + '</b></div>' : '') +
        (h.mean ? '<div class="lop-hz-clue"><span>Nghĩa</span><b>' + esc(h.mean) + '</b></div>' : '') +
      '</div>' +
      (h.tip ? '<div class="lop-hz-tip">💡 ' + esc(h.tip) + '</div>' : '') +
      '<div class="lop-hz-answer" id="lopHzAns" hidden>' +
        '<div class="lop-hz-char">' + esc(h.c) + '</div>' +
        '<div class="lop-hz-py">' + esc(h.p || '') + '</div>' +
        (h.w ? '<div class="lop-hz-words">' + esc(h.w) + '</div>' : '') +
        (h.cf ? '<div class="lop-hz-cf">Dễ nhầm với: ' + esc(h.cf) + '</div>' : '') +
      '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopHzReveal">Lật đáp án (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopHzNext">Chữ tiếp theo →</button>' +
      '</div>';
    $('#lopHzReveal').addEventListener('click', revealHanzi);
    $('#lopHzNext').addEventListener('click', nextHanzi);
    state.hanziShown = false;
  }
  function revealHanzi() {
    if (state.hanziShown) return;
    state.hanziShown = true;
    var el = $('#lopHzAns');
    if (el) el.hidden = false;
    var item = state.deck[state.pos];
    if (item) speakZh(item.h.c);
  }
  function nextHanzi() {
    if (state.pos < state.deck.length - 1) state.pos++;
    else dealHanzi(state.vocab || []);
    renderHanzi();
    resetTimer();
  }

  /* ---------------- tro: dong vai hoi thoai ---------------- */
  function dealRole() {
    var ds = state.dialogs || [];
    state.role = { d: ds.length ? shuffle(ds)[0] : null, hide: 1, shown: {} };
  }

  function renderRole() {
    var r = state.role;
    if (!r || !r.d) {
      $('#lopStage').innerHTML =
        '<div class="lop-stage-head"><span>Các bài đã chọn chưa có bài khoá hội thoại. Chọn thêm bài khác nhé.</span></div>';
      return;
    }
    var d = r.d;
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>' + esc(d.scene || 'Bài khoá') + ' · hai em lên đóng vai, em giữ <b>vai ' + (r.hide === 1 ? 'B' : 'A') + '</b> phải tự nói lời bị che</span>' +
      '</div>' +
      '<div class="lop-role-lines">' + d.lines.map(function (l, i) {
        var hidden = (l.sp === r.hide) && !r.shown[i];
        return '<div class="lop-role-line' + (l.sp === r.hide ? ' is-b' : '') + '" data-i="' + i + '">' +
          '<span class="lop-role-who">' + (l.sp === r.hide ? 'B' : 'A') + '</span>' +
          (hidden
            ? '<span class="lop-role-hidden">' + (l.vn ? esc(l.vn) : '（ … ）') + '</span>'
            : '<span class="lop-role-zh">' + esc(l.zh) + '</span>') +
        '</div>';
      }).join('') + '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopRoleReveal">Hiện hết lời bị che (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopRoleSwap">Đổi vai che</button>' +
        '<button type="button" class="lop-act ghost" id="lopRoleNext">Bài khoá khác →</button>' +
      '</div>';

    $all('#lopStage .lop-role-line').forEach(function (el) {
      el.addEventListener('click', function () {
        var i = parseInt(el.getAttribute('data-i'), 10);
        r.shown[i] = 1;
        renderRole();
        var l = d.lines[i];
        if (l) speakZh(l.zh);
      });
    });
    $('#lopRoleReveal').addEventListener('click', revealRole);
    $('#lopRoleSwap').addEventListener('click', function () {
      r.hide = r.hide === 1 ? 0 : 1;
      r.shown = {};
      renderRole();
    });
    $('#lopRoleNext').addEventListener('click', function () { dealRole(); renderRole(); resetTimer(); });
  }
  function revealRole() {
    var r = state.role;
    if (!r || !r.d) return;
    r.d.lines.forEach(function (_, i) { r.shown[i] = 1; });
    renderRole();
  }

  /* ---------------- tro: am Han Viet doan chu ---------------- */
  function dealHv(vocab) {
    state.deck = shuffle(vocab.filter(function (v) { return v.hv; }));
    state.pos = 0;
    state.hvShown = false;
  }

  function renderHv() {
    var v = state.deck[state.pos];
    if (!v) {
      $('#lopStage').innerHTML =
        '<div class="lop-stage-head"><span>Các bài đã chọn chưa có âm Hán–Việt. Chọn thêm bài khác nhé.</span></div>';
      return;
    }
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Từ ' + (state.pos + 1) + '/' + state.deck.length + ' · nghe âm Hán–Việt, đoán xem chữ Hán viết thế nào</span>' +
      '</div>' +
      '<div class="lop-hv-card">' +
        '<div class="lop-hv-am">' + esc(v.hv) + '</div>' +
        // Nhieu tu Han-Viet trung luon voi nghia tieng Viet (giai quyet, hoc sinh…) —
        // hien lai lan nua thi thua, nen chi hien khi khac nhau.
        (v.vn.trim().toLowerCase() !== v.hv.trim().toLowerCase()
          ? '<div class="lop-hv-vn">' + esc(v.vn) + '</div>' : '') +
      '</div>' +
      '<div class="lop-hv-answer" id="lopHvAns" hidden>' +
        '<div class="lop-hv-zh">' + esc(v.zh) + '</div>' +
        '<div class="lop-hv-py">' + esc(v.py) + '</div>' +
      '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopHvReveal">Lật đáp án (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopHvNext">Từ tiếp theo →</button>' +
      '</div>';
    $('#lopHvReveal').addEventListener('click', revealHv);
    $('#lopHvNext').addEventListener('click', nextHv);
    state.hvShown = false;
  }
  function revealHv() {
    if (state.hvShown) return;
    state.hvShown = true;
    var el = $('#lopHvAns');
    if (el) el.hidden = false;
    var v = state.deck[state.pos];
    if (v) speakZh(v.zh);
  }
  function nextHv() {
    if (state.pos < state.deck.length - 1) state.pos++;
    else dealHv(state.vocab || []);
    renderHv();
    resetTimer();
  }

  /* ---------------- tro: noi nghia nhanh ---------------- */
  function dealMatch(vocab) {
    var pick = shuffle(vocab).slice(0, 6);
    state.matchZh = pick;
    state.matchVn = shuffle(pick.slice());
    state.matchSel = null;
    state.matchDone = {};
  }

  function renderMatch() {
    var LETTER = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (!state.matchZh || !state.matchZh.length) {
      $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Chưa có từ để chơi.</span></div>';
      return;
    }
    var left = state.matchZh.map(function (v, i) {
      var done = state.matchDone[v.zh];
      return '<button type="button" class="lop-match-cell' + (done ? ' is-done' : '') +
        (state.matchSel === i ? ' is-sel' : '') + '" data-side="zh" data-i="' + i + '">' +
        '<span class="lop-match-no">' + (i + 1) + '</span>' +
        '<span class="lop-match-zh">' + esc(v.zh) + '</span></button>';
    }).join('');
    var right = state.matchVn.map(function (v, i) {
      var done = state.matchDone[v.zh];
      return '<button type="button" class="lop-match-cell' + (done ? ' is-done' : '') +
        '" data-side="vn" data-i="' + i + '">' +
        '<span class="lop-match-no">' + LETTER[i] + '</span>' +
        '<span class="lop-match-vn">' + esc(v.vn) + '</span></button>';
    }).join('');

    var left2 = Object.keys(state.matchDone).length;
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Tổ đọc từng cặp, ví dụ <b>1 – C</b>. Thầy/cô bấm chữ Hán rồi bấm nghĩa để kiểm tra.</span>' +
        '<span class="lop-point">Đã nối ' + left2 + '/' + state.matchZh.length + '</span>' +
      '</div>' +
      '<div class="lop-match-wrap"><div class="lop-match-col">' + left + '</div>' +
      '<div class="lop-match-col">' + right + '</div></div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopMatchReveal">Nối hết (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopMatchNext">Bộ từ khác →</button>' +
      '</div>';

    $all('#lopStage .lop-match-cell').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var side = btn.getAttribute('data-side');
        var i = parseInt(btn.getAttribute('data-i'), 10);
        if (side === 'zh') {
          if (state.matchDone[state.matchZh[i].zh]) return;
          state.matchSel = (state.matchSel === i) ? null : i;
          renderMatch();
          return;
        }
        if (state.matchSel === null) return;
        var a = state.matchZh[state.matchSel], b = state.matchVn[i];
        if (a.zh === b.zh) {
          state.matchDone[a.zh] = 1;
          state.matchSel = null;
          renderMatch();
          speakZh(a.zh);
          flashNote('✓ ' + a.zh + ' — ' + a.vn);
        } else {
          btn.classList.add('is-wrong');
          setTimeout(function () { btn.classList.remove('is-wrong'); }, 600);
        }
      });
    });
    $('#lopMatchReveal').addEventListener('click', function () {
      state.matchZh.forEach(function (v) { state.matchDone[v.zh] = 1; });
      state.matchSel = null;
      renderMatch();
    });
    $('#lopMatchNext').addEventListener('click', function () {
      dealMatch(state.vocab || []); renderMatch(); resetTimer();
    });
  }

  /* ---------------- tro: noi tu 接龙 ----------------
     Web lam trong tai: giu chuoi tu, hien chu can noi, va tra trong kho tu vung
     cua cac bai da chon xem con tu nao noi duoc. Thay/co chi bam, khong phai go. */
  // Von tu HSK khong du day cho luat 接龙 chat (chu dau = chu cuoi) — chuoi dut ngay.
  // Nen: uu tien chu cuoi, het duong thi lay chu khac trong tu vua noi; het han
  // thi noi long thanh "tu co CHUA chu do".
  // Chi dung tu thuan chu Han — mot so muc co ngoac hoac dau (笔记本(电脑), 聊天(儿))
  // se lam chu noi thanh dau ngoac.
  function chainClean(v) { return /^[一-鿿]{2,4}$/.test(v.zh); }
  function chainPool(ch, mode) {
    var used = {};
    (state.chain ? state.chain.list : []).forEach(function (v) { used[v.zh] = 1; });
    return (state.vocab || []).filter(function (v) {
      if (used[v.zh] || !chainClean(v)) return false;
      return mode === 'strict' ? v.zh.charAt(0) === ch : v.zh.indexOf(ch) >= 0;
    });
  }
  function chainHasWay(ch) {
    return chainPool(ch, 'strict').length > 0 || chainPool(ch, 'loose').length > 0;
  }
  // Chon chu tiep theo tu tu vua noi: thu chu cuoi truoc, roi den cac chu con lai.
  // Tranh giu nguyen chu cu, neu khong chuoi cu quan quanh mot chu (子 → 裤子 → 裙子…).
  function chainPickChar(word, avoid) {
    var chars = word.split('');
    var order = [chars[chars.length - 1]].concat(chars.slice(0, -1).reverse());
    var fresh = order.filter(function (c) { return c !== avoid; });
    for (var i = 0; i < fresh.length; i++) if (chainHasWay(fresh[i])) return fresh[i];
    for (var j = 0; j < order.length; j++) if (chainHasWay(order[j])) return order[j];
    return order[0];
  }

  function dealChain(vocab) {
    state.chain = { list: [], char: '' };
    // Bat dau bang tu ma chu cuoi con nhieu duong di nhat
    var cands = shuffle(vocab.filter(chainClean)).slice(0, 60);
    var best = null, bestN = -1;
    cands.forEach(function (v) {
      var ch = v.zh.charAt(v.zh.length - 1);
      var n = (state.vocab || []).filter(function (x) {
        return x.zh !== v.zh && chainClean(x) && x.zh.indexOf(ch) >= 0;
      }).length;
      if (n > bestN) { bestN = n; best = v; }
    });
    var start = best || cands[0] || vocab[0];
    if (start) {
      state.chain.list = [start];
      state.chain.char = chainPickChar(start.zh);
    }
  }

  function chainLastChar() {
    return state.chain ? state.chain.char : '';
  }
  function chainOptions() {
    var ch = chainLastChar();
    if (!ch) return { list: [], loose: false };
    var strict = chainPool(ch, 'strict');
    if (strict.length) return { list: strict, loose: false };
    return { list: chainPool(ch, 'loose'), loose: true };
  }

  function renderChain() {
    var c = state.chain;
    if (!c || !c.list.length) {
      $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Chưa có từ để chơi.</span></div>';
      return;
    }
    var ch = chainLastChar();
    var opt = chainOptions();
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Tổ nào nói được từ ' + (opt.loose ? '<b>có chứa</b>' : '<b>bắt đầu bằng</b>') +
          ' chữ này thì được điểm' + (opt.loose ? ' · đã hết từ nối đầu nên nới lỏng luật' : '') + '</span>' +
        '<span class="lop-point">Chuỗi dài ' + c.list.length + ' từ</span>' +
      '</div>' +
      '<div class="lop-chain-char">' + esc(ch) + '</div>' +
      '<div class="lop-chain-list">' + c.list.map(function (v, i) {
        return '<span class="lop-chain-word' + (i === c.list.length - 1 ? ' is-last' : '') + '">' + esc(v.zh) + '</span>';
      }).join('<span class="lop-chain-arrow">→</span>') + '</div>' +
      '<div class="lop-chain-pick" id="lopChainPick" hidden>' +
        (opt.list.length
          ? '<div class="lop-chain-hint">Bấm vào từ học sinh vừa nói để nối tiếp · còn ' + opt.list.length + ' từ nối được</div>' +
            '<div class="lop-chain-opts">' + opt.list.slice(0, 24).map(function (v, i) {
              return '<button type="button" class="lop-chain-opt" data-i="' + i + '">' +
                esc(v.zh) + '<small>' + esc(v.py) + '</small></button>';
            }).join('') + '</div>'
          : '<div class="lop-chain-hint">Hết từ nối được trong các bài đã chọn — bấm “Chữ khác” để sang lượt mới.</div>') +
      '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopChainShow">Xem các từ nối được (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopChainNew">Chuỗi mới →</button>' +
      '</div>';

    $('#lopChainShow').addEventListener('click', function () {
      var box = $('#lopChainPick');
      if (box) box.hidden = false;
    });
    $('#lopChainNew').addEventListener('click', function () {
      dealChain(state.vocab || []); renderChain(); resetTimer();
    });
    $all('#lopStage .lop-chain-opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var v = opt.list[parseInt(btn.getAttribute('data-i'), 10)];
        if (!v) return;
        state.chain.list.push(v);
        state.chain.char = chainPickChar(v.zh, state.chain.char);
        renderChain();
        speakZh(v.zh);
        resetTimer();
      });
    });
    speakZh(ch);
  }

  /* ---------------- tro: thi viet bang nhanh ---------------- */
  function dealWrite(vocab) {
    var words = vocab.slice();
    var sents = vocab.filter(function (v) { return v.ex_zh; });
    state.writeMode = state.writeMode || 'word';
    state.deck = shuffle(state.writeMode === 'sentence' && sents.length ? sents : words);
    state.pos = 0;
    state.writeShown = false;
  }

  function renderWrite() {
    var v = state.deck[state.pos];
    if (!v) {
      $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Chưa có nội dung để chơi.</span></div>';
      return;
    }
    var sentence = state.writeMode === 'sentence';
    var zh = sentence ? v.ex_zh : v.zh;
    var py = sentence ? v.ex_py : v.py;
    var vn = sentence ? v.ex_vn : v.vn;

    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>' + (state.pos + 1) + '/' + state.deck.length + ' · nghe rồi viết lên bảng — <b>' +
          (sentence ? 'cả câu' : 'một từ') + '</b></span>' +
        '<span class="lop-point">Nghĩa: ' + esc(vn) + '</span>' +
      '</div>' +
      '<div class="lop-write-box">' +
        '<button type="button" class="lop-write-play" id="lopWritePlay">🔊 Nghe lại</button>' +
        '<div class="lop-write-hint">Máy đọc ' + (sentence ? 'câu' : 'từ') + ' này — các tổ viết chữ Hán lên bảng</div>' +
      '</div>' +
      '<div class="lop-write-answer" id="lopWriteAns" hidden>' +
        '<div class="lop-write-zh">' + esc(zh) + '</div>' +
        (py ? '<div class="lop-write-py">' + esc(py) + '</div>' : '') +
      '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopWriteReveal">Lật đáp án để chấm (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopWriteNext">Câu tiếp theo →</button>' +
        '<button type="button" class="lop-act ghost" id="lopWriteMode">Chuyển sang ' + (sentence ? 'viết từ' : 'viết câu') + '</button>' +
      '</div>';

    $('#lopWritePlay').addEventListener('click', function () { speakZh(zh); });
    $('#lopWriteReveal').addEventListener('click', revealWrite);
    $('#lopWriteNext').addEventListener('click', nextWrite);
    $('#lopWriteMode').addEventListener('click', function () {
      state.writeMode = sentence ? 'word' : 'sentence';
      dealWrite(state.vocab || []);
      renderWrite();
      resetTimer();
    });
    state.writeShown = false;
    speakZh(zh);
  }
  function revealWrite() {
    if (state.writeShown) return;
    state.writeShown = true;
    var el = $('#lopWriteAns');
    if (el) el.hidden = false;
  }
  function nextWrite() {
    if (state.pos < state.deck.length - 1) state.pos++;
    else dealWrite(state.vocab || []);
    renderWrite();
    resetTimer();
  }

  /* ---------------- cong diem xay dung bai ----------------
     Em nao gio tay tra loi thi bam mot cai la cong ngay 1 diem. Diem nay
     hien luon o Bang lop cua hoc sinh nen cac em thay minh duoc bao nhieu.
     Bam nham thi co nut − de tru lai.                                     */
  var build = { classes: [], roster: [], classId: '', loc: '' };

  function openBuild() {
    $('#lopBuildBox').hidden = false;
    if (!adminPw()) {
      $('#lopBuildGate').hidden = false;
      $('#lopBuildMain').hidden = true;
      return;
    }
    loadBuild();
  }
  function loadBuild() {
    $('#lopBuildGate').hidden = true;
    $('#lopBuildMain').hidden = false;
    $('#lopBuildHint').textContent = 'Đang tải danh sách…';
    return apiAdmin('/api/admin/points?classId=' + encodeURIComponent(build.classId))
      .then(function (d) {
        build.classes = d.classes || [];
        build.roster = d.roster || [];
        var sel = $('#lopBuildClass');
        sel.innerHTML = build.classes.map(function (c) {
          return '<option value="' + c.id + '"' + (c.id === build.classId ? ' selected' : '') + '>' +
            esc(c.name) + ' (' + c.size + ')</option>';
        }).join('');
        if (!build.classId && build.classes.length) {
          build.classId = build.classes[0].id;
          sel.value = build.classId;
          return loadBuild();
        }
        renderBuild();
      })
      .catch(function (e) {
        $('#lopBuildGate').hidden = false;
        $('#lopBuildMain').hidden = true;
        $('#lopBuildErr').hidden = false;
        $('#lopBuildErr').textContent = e.message;
      });
  }

  function renderBuild() {
    var q = build.loc.trim().toLowerCase();
    var ds = build.roster.filter(function (r) {
      return !q || r.name.toLowerCase().indexOf(q) >= 0 || String(r.no) === q;
    });
    if (!build.roster.length) {
      $('#lopBuildList').innerHTML = '';
      $('#lopBuildHint').textContent = 'Lớp này chưa có danh sách. Vào trang Báo cáo → Lớp & bài giao để dán danh sách.';
      return;
    }
    $('#lopBuildList').innerHTML = ds.map(function (r) {
      return '<div class="lop-build-row' + (r.build > 0 ? ' has' : '') + '" data-id="' + r.id + '">' +
        '<span class="lop-build-no">' + r.no + '</span>' +
        '<span class="lop-build-name">' + esc(r.name) + '</span>' +
        '<span class="lop-build-sum">' + (r.build > 0 ? '+' + r.build : '') + '</span>' +
        '<button type="button" class="lop-build-minus" data-d="-1" title="Trừ 1 điểm">−</button>' +
        '<button type="button" class="lop-build-plus" data-d="1">+1</button>' +
      '</div>';
    }).join('');
    var tong = build.roster.reduce(function (a, r) { return a + (r.build || 0); }, 0);
    $('#lopBuildHint').textContent = build.roster.length + ' học sinh · cả lớp đã được cộng ' + tong + ' điểm';
  }

  function chamBuild(rosterId, d) {
    var r = build.roster.find(function (x) { return x.id === rosterId; });
    if (!r) return;
    if (d < 0 && !r.build) return;              // chua co diem thi khong tru xuong am
    var truoc = r.build;
    r.build = Math.max(0, r.build + d);         // hien ngay, khong cho may chu
    renderBuild();
    flashNote((d > 0 ? '✋ +1 · ' : '− 1 · ') + r.name + ' — tổng ' + r.build);
    apiAdmin('/api/admin/points', {
      method: 'POST',
      body: JSON.stringify({ classId: build.classId, rosterId: rosterId, kind: 'build', value: d })
    }).then(function (res) {
      if (res && typeof res.build === 'number') { r.build = res.build; renderBuild(); }
    }).catch(function (e) {
      r.build = truoc;                          // may chu tu choi thi tra lai nhu cu
      renderBuild();
      $('#lopBuildHint').textContent = e.message;
    });
  }

  /* ---------------- goi ten hoc sinh len bang ----------------
     Khong quay ngau nhien thuan: uu tien em LAU CHUA duoc goi, roi den em it
     bi goi nhat. Ten hoc sinh lay tu danh sach lop tren may chu, can mat khau
     quan tri, va khong luu vao trinh duyet ngoai phien lam viec.            */
  var call = { pw: '', classes: [], roster: [], classId: '', cur: null, session: {} };

  function adminPw() {
    if (call.pw) return call.pw;
    try { return sessionStorage.getItem('hyv_admin_pw') || ''; } catch (e) { return ''; }
  }
  function apiAdmin(path, opts) {
    opts = opts || {};
    opts.headers = Object.assign({ 'X-Admin-Password': adminPw() }, opts.headers || {});
    if (opts.body) opts.headers['Content-Type'] = 'application/json';
    return fetch(path, opts).then(function (r) {
      return r.json().then(function (d) {
        if (!r.ok) throw new Error(d && d.error ? d.error : 'Lỗi máy chủ.');
        return d;
      });
    });
  }

  function openCall() {
    $('#lopCallBox').hidden = false;
    if (!adminPw()) {
      $('#lopCallGate').hidden = false;
      $('#lopCallMain').hidden = true;
      return;
    }
    loadCallRoster();
  }
  function loadCallRoster() {
    $('#lopCallGate').hidden = true;
    $('#lopCallMain').hidden = false;
    $('#lopCallHint').textContent = 'Đang tải danh sách…';
    return apiAdmin('/api/admin/oral?classId=' + encodeURIComponent(call.classId))
      .then(function (d) {
        call.classes = d.classes || [];
        call.roster = d.roster || [];
        var sel = $('#lopCallClass');
        sel.innerHTML = call.classes.map(function (c) {
          return '<option value="' + c.id + '"' + (c.id === call.classId ? ' selected' : '') + '>' +
            esc(c.name) + ' (' + c.size + ')</option>';
        }).join('');
        if (!call.classId && call.classes.length) {
          call.classId = call.classes[0].id;
          sel.value = call.classId;
          return loadCallRoster();
        }
        $('#lopCallHint').textContent = call.roster.length
          ? call.roster.length + ' học sinh · em chưa được gọi lần nào sẽ ra trước'
          : 'Lớp này chưa có danh sách. Vào trang Báo cáo → Lớp & bài giao để dán danh sách.';
      })
      .catch(function (e) {
        $('#lopCallGate').hidden = false;
        $('#lopCallMain').hidden = true;
        $('#lopCallErr').hidden = false;
        $('#lopCallErr').textContent = e.message;
      });
  }

  // Diem uu tien: chua goi lan nao > lau chua goi > it lan bi goi.
  // Them chut ngau nhien de hai em ngang nhau khong phai lan nao cung cung thu tu.
  function callPick() {
    if (!call.roster.length) return null;
    var now = Date.now();
    // Trong cung mot buoi khong goi lai em da goi, ke ca khi chua kip cham diem
    var fresh = call.roster.filter(function (r) { return !call.session[r.id]; });
    var pool = fresh.length ? fresh : call.roster;
    if (!fresh.length) call.session = {};   // het luot thi bat dau vong moi
    var scored = pool.map(function (r) {
      var days = r.lastMs ? (now - r.lastMs) / 86400000 : 999;
      return { r: r, w: days * 10 - r.times * 3 + Math.random() * 6 };
    });
    scored.sort(function (a, b) { return b.w - a.w; });
    call.session[scored[0].r.id] = 1;
    return scored[0].r;
  }

  function renderCall() {
    var r = call.cur;
    if (!r) return;
    var meta = [];
    if (r.no) meta.push('Số ' + r.no);
    if (r.lastMs) {
      var d = Math.floor((Date.now() - r.lastMs) / 86400000);
      meta.push('gọi gần nhất ' + (d <= 0 ? 'hôm nay' : d + ' ngày trước'));
    } else meta.push('chưa được gọi lần nào');
    if (r.times) meta.push('đã gọi ' + r.times + ' lần');
    if (r.avg !== null && r.avg !== undefined) meta.push('điểm TB ' + r.avg);

    $('#lopCallName').textContent = r.name;
    $('#lopCallMeta').textContent = meta.join(' · ');
    $('#lopCallScore').hidden = false;
    $('#lopCallNums').innerHTML = [0,1,2,3,4,5,6,7,8,9,10].map(function (n) {
      return '<button type="button" class="lop-call-num" data-n="' + n + '">' + n + '</button>';
    }).join('');
    $all('#lopCallNums .lop-call-num').forEach(function (b) {
      b.addEventListener('click', function () { saveCall(parseInt(b.getAttribute('data-n'), 10)); });
    });
  }

  function saveCall(score) {
    var r = call.cur;
    if (!r) return;
    $('#lopCallHint').textContent = 'Đang lưu…';
    apiAdmin('/api/admin/oral', { method: 'POST', body: JSON.stringify({ classId: call.classId, rosterId: r.id, score: score }) })
      .then(function () {
        flashNote(score === null ? ('Đã ghi: ' + r.name + ' vắng/bỏ qua') : ('✓ ' + r.name + ' — ' + score + ' điểm'));
        return loadCallRoster();
      })
      .then(function () {
        call.cur = null;
        $('#lopCallName').textContent = '—';
        $('#lopCallMeta').textContent = '';
        $('#lopCallScore').hidden = true;
      })
      .catch(function (e) { $('#lopCallHint').textContent = e.message; });
  }

  /* ================= KIEM TRA DAU GIO =================
     Khac voi tro choi o cho CA LOP cung lam va co diem: hoc sinh viet vao vo
     (hoac lam de giay), xong thi chieu bang dap an len de doi vo cham cheo.  */

  var TEST_TITLE = {
    dictation: 'Đọc chính tả Hán tự 听写',
    quiz: 'Kiểm tra nhanh 10 câu',
    paper: 'Đề giấy in ra'
  };

  /* ---- 1. Doc chinh ta 听写 ---- */
  function dealDict(vocab) {
    var sents = vocab.filter(function (v) { return v.ex_zh; });
    var pool = state.dictMode === 'sentence' && sents.length ? sents : vocab;
    state.dict = { deck: shuffle(pool).slice(0, state.dictN || 10), pos: 0, key: false };
  }

  function dictPart(v) {
    var s = state.dictMode === 'sentence';
    return { zh: s ? v.ex_zh : v.zh, py: s ? v.ex_py : v.py, vn: s ? v.ex_vn : v.vn };
  }

  function renderDict() {
    var d = state.dict;
    if (!d || !d.deck.length) {
      $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Các bài này chưa có từ vựng để đọc chính tả.</span></div>';
      return;
    }
    if (d.key) return renderDictKey();

    var p = dictPart(d.deck[d.pos]);
    var sentence = state.dictMode === 'sentence';
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>' + (sentence ? 'Câu' : 'Từ') + ' số <b>' + (d.pos + 1) + '</b> / ' + d.deck.length +
        ' · nghe rồi viết <b>chữ Hán</b> và <b>phiên âm</b> vào vở</span>' +
      '</div>' +
      '<div class="lop-dict-box">' +
        '<div class="lop-dict-no">' + (d.pos + 1) + '</div>' +
        (state.dictHideVn ? '<div class="lop-dict-vn muted">(đã ẩn nghĩa — chỉ nghe)</div>'
                          : '<div class="lop-dict-vn">' + esc(p.vn || '') + '</div>') +
        '<button type="button" class="lop-write-play" id="lopDictPlay">🔊 Đọc lại</button>' +
      '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act ghost" id="lopDictPrev">← Quay lại</button>' +
        '<button type="button" class="lop-act" id="lopDictNext">' +
          (d.pos === d.deck.length - 1 ? 'Đọc xong — hiện đáp án' : (sentence ? 'Câu' : 'Từ') + ' tiếp theo →') +
        '</button>' +
        '<button type="button" class="lop-act ghost" id="lopDictVn">' +
          (state.dictHideVn ? 'Hiện nghĩa tiếng Việt' : 'Ẩn nghĩa (khó hơn)') + '</button>' +
        '<button type="button" class="lop-act ghost" id="lopDictMode">' +
          (sentence ? 'Chuyển sang đọc từ' : 'Chuyển sang đọc câu') + '</button>' +
      '</div>';

    $('#lopDictPlay').addEventListener('click', function () { speakZh(p.zh); });
    $('#lopDictPrev').addEventListener('click', function () {
      if (d.pos > 0) { d.pos--; renderDict(); resetTimer(); }
    });
    $('#lopDictNext').addEventListener('click', function () {
      if (d.pos < d.deck.length - 1) { d.pos++; renderDict(); resetTimer(); }
      else { d.key = true; renderDictKey(); }
    });
    $('#lopDictVn').addEventListener('click', function () {
      state.dictHideVn = !state.dictHideVn;
      renderDict();
    });
    $('#lopDictMode').addEventListener('click', function () {
      state.dictMode = sentence ? 'word' : 'sentence';
      dealDict(state.vocab || []);
      renderDict();
      resetTimer();
    });
    speakZh(p.zh);
  }

  function renderDictKey() {
    var d = state.dict;
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Bảng đáp án — <b>đổi vở chấm chéo</b>, mỗi câu đúng cả chữ Hán lẫn phiên âm được <b>1 điểm</b></span>' +
        '<span class="lop-point">Tổng ' + d.deck.length + ' điểm</span>' +
      '</div>' +
      '<div class="lop-key-grid">' + d.deck.map(function (v, i) {
        var p = dictPart(v);
        return '<div class="lop-key-item">' +
          '<div class="lop-key-no">' + (i + 1) + '</div>' +
          '<div class="lop-key-main">' +
            '<div class="lop-key-zh">' + esc(p.zh) + '</div>' +
            '<div class="lop-key-py">' + esc(p.py || '') + '</div>' +
            '<div class="lop-key-vn">' + esc(p.vn || '') + '</div>' +
          '</div></div>';
      }).join('') + '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act ghost" id="lopDictBack">← Xem lại bài đọc</button>' +
        '<button type="button" class="lop-act" id="lopDictNew">🎲 Bộ từ mới</button>' +
      '</div>';

    $('#lopDictBack').addEventListener('click', function () { d.key = false; renderDict(); });
    $('#lopDictNew').addEventListener('click', function () {
      dealDict(state.vocab || []);
      renderDict();
      resetTimer();
    });
  }

  /* ---- 2. Kiem tra nhanh 10 cau ---- */
  function dealQuiz() {
    var deck = shuffle(pickedMcs()).slice(0, 10).map(function (q) {
      var order = shuffle(q.options.map(function (_, i) { return i; }));
      return { q: q, order: order, ans: order.indexOf(q.answer) };
    });
    state.quiz = { deck: deck, pos: 0, key: false };
  }

  function renderQuiz() {
    var z = state.quiz;
    if (!z || !z.deck.length) {
      $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Các bài này chưa có câu trắc nghiệm.</span></div>';
      return;
    }
    if (z.key) return renderQuizKey();

    var it = z.deck[z.pos], q = it.q;
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Câu <b>' + (z.pos + 1) + '</b> / ' + z.deck.length + ' · ghi <b>A</b>, <b>B</b> hoặc <b>C</b> vào vở</span>' +
        (q.point ? '<span class="lop-point">📐 ' + esc(q.point) + '</span>' : '') +
      '</div>' +
      (q.context ? '<div class="lop-abc-context">🗣️ ' + esc(q.context) + '</div>' : '') +
      '<div class="lop-abc-sentence">' + esc(q.pre) + '<span class="lop-blank">＿＿</span>' + esc(q.post) + '</div>' +
      '<div class="lop-abc-opts">' + it.order.map(function (oi, i) {
        return '<div class="lop-abc-opt">' +
          '<span class="lop-abc-key">' + ABC[i] + '</span>' +
          '<span class="lop-abc-text">' + esc(q.options[oi]) + '</span>' +
        '</div>';
      }).join('') + '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act ghost" id="lopQuizPrev">← Quay lại</button>' +
        '<button type="button" class="lop-act" id="lopQuizNext">' +
          (z.pos === z.deck.length - 1 ? 'Hết giờ — hiện bảng đáp án' : 'Câu tiếp theo →') + '</button>' +
      '</div>';

    $('#lopQuizPrev').addEventListener('click', function () {
      if (z.pos > 0) { z.pos--; renderQuiz(); resetTimer(); }
    });
    $('#lopQuizNext').addEventListener('click', function () {
      if (z.pos < z.deck.length - 1) { z.pos++; renderQuiz(); resetTimer(); }
      else { z.key = true; renderQuizKey(); }
    });
  }

  function renderQuizKey() {
    var z = state.quiz;
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head">' +
        '<span>Bảng đáp án — <b>đổi vở chấm chéo</b>, mỗi câu đúng <b>1 điểm</b></span>' +
        '<span class="lop-point">Tổng ' + z.deck.length + ' điểm</span>' +
      '</div>' +
      '<div class="lop-key-grid quiz">' + z.deck.map(function (it, i) {
        var q = it.q;
        return '<div class="lop-key-item">' +
          '<div class="lop-key-no">' + (i + 1) + '</div>' +
          '<div class="lop-key-main">' +
            '<div class="lop-key-letter">' + ABC[it.ans] + '</div>' +
            '<div class="lop-key-zh small">' + esc(q.pre) +
              '<b>' + esc(q.options[q.answer]) + '</b>' + esc(q.post) + '</div>' +
          '</div></div>';
      }).join('') + '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act ghost" id="lopQuizBack">← Xem lại đề</button>' +
        '<button type="button" class="lop-act" id="lopQuizNew">🎲 Bộ câu mới</button>' +
      '</div>';

    $('#lopQuizBack').addEventListener('click', function () { z.key = false; z.pos = 0; renderQuiz(); });
    $('#lopQuizNew').addEventListener('click', function () { dealQuiz(); renderQuiz(); resetTimer(); });
  }

  /* ---- 3. De giay in ra — nhieu ma de ---- */
  function paperDeal() {
    var n = parseInt($('#lopPaperN').value, 10) || 8;
    var nv = parseInt($('#lopPaperV').value, 10) || 4;
    var mcs = shuffle(pickedMcs()), sorts = shuffle(pickedSorts()), judges = shuffle(pickedJudges());

    // Uu tien trac nghiem cho de cham, them chut xep cau va dung/sai cho du dang
    var nSort = Math.min(sorts.length, Math.round(n * 0.25));
    var nJudge = Math.min(judges.length, Math.round(n * 0.25));
    var nMc = Math.min(mcs.length, n - nSort - nJudge);

    // Cau nay khong duoc lo dap an cho cau kia: sau khi chon xong phan trac nghiem,
    // bo nhung cau Dung/Sai hay xep tu co cung noi dung voi cau da chon.
    var used = {};
    mcs.slice(0, nMc).forEach(function (q) {
      used[String((q.pre || '') + q.options[q.answer] + (q.post || '')).replace(/\s/g, '')] = 1;
    });
    function fresh(text) { return !used[String(text || '').replace(/\s/g, '')]; }
    sorts = sorts.filter(function (q) { return fresh(q.answer); });
    judges = judges.filter(function (q) { return fresh(q.sentence) && fresh(q.fix); });
    nSort = Math.min(sorts.length, nSort);
    nJudge = Math.min(judges.length, nJudge);
    // Thieu ben nao thi bu bang ben con du
    var missing = n - nMc - nSort - nJudge;
    while (missing > 0) {
      if (nSort < sorts.length) { nSort++; missing--; continue; }
      if (nJudge < judges.length) { nJudge++; missing--; continue; }
      break;
    }

    var base = mcs.slice(0, nMc).map(function (q) { return { t: 'mc', q: q }; })
      .concat(sorts.slice(0, nSort).map(function (q) { return { t: 'sort', q: q }; }))
      .concat(judges.slice(0, nJudge).map(function (q) { return { t: 'judge', q: q }; }));

    var versions = [];
    for (var v = 0; v < nv; v++) {
      versions.push({
        code: 101 + v,
        items: shuffle(base).map(function (it) {
          if (it.t === 'sort') return { t: 'sort', q: it.q, words: shuffle(it.q.words) };
          if (it.t === 'judge') return { t: 'judge', q: it.q };
          var order = shuffle(it.q.options.map(function (_, i) { return i; }));
          return { t: 'mc', q: it.q, order: order, ans: order.indexOf(it.q.answer) };
        })
      });
    }
    state.paper = { versions: versions, total: base.length };
  }

  // Mot so cau co dong goi y noi thang quy tac ("Nhan manh viec xay ra MUON thi dung 才").
  // Khi thay/co muon ra de kho hon thi bo cac dong do di — nhan ra bang cach:
  // goi y co chu Han ma chu do lai nam trong chinh cac phuong an tra loi.
  function paperCtx(it) {
    var c = it.q.context || '';
    if (!c || !$('#lopPaperHard') || !$('#lopPaperHard').checked) return c;
    if (it.t !== 'mc') return c;
    var han = c.match(/[一-鿿]/g) || [];
    var opts = it.q.options.join('');
    for (var k = 0; k < han.length; k++) if (opts.indexOf(han[k]) >= 0) return '';
    return c;
  }

  function paperQuestion(it, i) {
    var q = it.q, ctx = paperCtx(it), body;
    if (it.t === 'mc') {
      body = '<div class="ps-zh">' + esc(q.pre) + '<span class="ps-blank">＿＿＿</span>' + esc(q.post) + '</div>' +
        '<div class="ps-opts">' + it.order.map(function (oi, k) {
          return '<span class="ps-opt"><b>' + ABC[k] + '.</b> ' + esc(q.options[oi]) + '</span>';
        }).join('') + '</div>';
    } else if (it.t === 'sort') {
      body = '<div class="ps-cards">' + it.words.map(function (w) {
        return '<span class="ps-card">' + esc(w) + '</span>';
      }).join('') + '</div>' +
      '<div class="ps-line">→ ________________________________________</div>';
    } else {
      body = '<div class="ps-zh">' + esc(q.sentence) + '</div>' +
        '<div class="ps-judge">Đúng ☐　Sai ☐　—　nếu sai, sửa lại: ______________________</div>';
    }
    return '<div class="ps-q">' +
      '<div class="ps-no">' + (i + 1) + '.</div>' +
      '<div class="ps-body">' + (ctx ? '<div class="ps-ctx">' + esc(ctx) + '</div>' : '') + body + '</div>' +
    '</div>';
  }

  function paperRender() {
    var sub = (LEVEL_NAME[state.level] || '') + ' · ' + pickedLabel();
    var html = state.paper.versions.map(function (ver) {
      return '<section class="lop-sheet">' +
        '<div class="ps-head">' +
          '<div class="ps-school">KIỂM TRA ĐẦU GIỜ · TIẾNG TRUNG</div>' +
          '<div class="ps-code">Mã đề ' + ver.code + '</div>' +
        '</div>' +
        '<div class="ps-meta">' + esc(sub) + ' · thời gian 10 phút</div>' +
        '<div class="ps-fields">' +
          '<span>Họ và tên: ..................................................</span>' +
          '<span>Lớp: ..................</span>' +
          '<span class="ps-mark">Điểm: ..........</span>' +
        '</div>' +
        ver.items.map(paperQuestion).join('') +
      '</section>';
    }).join('');

    if ($('#lopPaperKey').checked) {
      html += '<section class="lop-sheet ps-key">' +
        '<div class="ps-head"><div class="ps-school">BẢNG ĐÁP ÁN — dành cho giáo viên</div></div>' +
        '<div class="ps-meta">' + esc(sub) + ' · ' + state.paper.total + ' câu mỗi đề</div>' +
        state.paper.versions.map(function (ver) {
          return '<div class="ps-keyblock">' +
            '<div class="ps-keycode">Mã đề ' + ver.code + '</div>' +
            '<ol class="ps-keylist">' + ver.items.map(function (it) {
              if (it.t === 'mc') return '<li><b>' + ABC[it.ans] + '</b> — ' + esc(it.q.options[it.q.answer]) + '</li>';
              if (it.t === 'sort') return '<li>' + esc(it.q.answer) + '</li>';
              return '<li>' + (it.q.isCorrect ? 'Đúng' : 'Sai → ' + esc(it.q.fix || '')) + '</li>';
            }).join('') + '</ol>' +
          '</div>';
        }).join('') +
      '</section>';
    }
    $('#lopPaperSheets').innerHTML = html;
  }

  function openPaper() {
    if (!pickedLabel()) return;
    $('#lopSetup').hidden = true;
    $('#lopPaper').hidden = false;
    paperDeal();
    paperRender();
    window.scrollTo(0, 0);
  }
  function closePaper() {
    $('#lopPaper').hidden = true;
    $('#lopSetup').hidden = false;
  }

  /* ---- mo mot dang kiem tra ---- */
  function startTest(kind) {
    if (kind === 'paper') return openPaper();
    if (!pickedLabel()) return;
    if (kind === 'quiz' && !pickedMcs().length) return;

    state.game = kind;
    $('#lopTitle').textContent = TEST_TITLE[kind];
    $('#lopSub').textContent = (LEVEL_NAME[state.level] || '') + ' · ' + pickedLabel();
    resetScores();
    renderScorebar();
    state.timer.secs = kind === 'dictation' ? 30 : 45;
    $('#lopScorebar').hidden = true;
    resetTimer();
    $('#lopSetup').hidden = true;
    $('#lopPlay').hidden = false;

    if (kind === 'quiz') { dealQuiz(); renderQuiz(); return; }

    $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Đang tải từ vựng của các bài đã chọn…</span></div>';
    loadPickedVocab().then(function (vocab) {
      state.vocab = vocab;
      if (!vocab.length) {
        $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Các bài này chưa có dữ liệu từ vựng.</span></div>';
        return;
      }
      dealDict(vocab);
      renderDict();
      resetTimer();
    });
  }

  /* ---------------- chuyen man hinh ---------------- */
  var LEVEL_NAME = {
    hsk1: 'HSK 1', hsk1v3: 'HSK 1 · 3.0', hsk2: 'HSK 2', hsk2v3: 'HSK 2 · 3.0',
    hsk3: 'HSK 3', hsk4: 'HSK 4', yct: 'YCT'
  };

  var GAME_TITLE = {
    errfix: 'Bắt lỗi sai tiếp sức', abc: 'Giơ thẻ A / B / C', sort: 'Xếp câu bằng người',
    bingo: 'Bingo 3×3', guess: 'Nhìn hình đoán chữ', tiles: 'Lật ô đoán chữ', taboo: 'Bạn nói tôi đoán',
    trans: 'Dịch nhanh Việt → Trung', listen: 'Nghe nhanh chỉ chữ', hanzi: 'Đoán chữ qua bộ thủ',
    role: 'Đóng vai bài khoá', hv: 'Âm Hán–Việt đoán chữ', match: 'Nối nghĩa nhanh',
    chain: 'Nối từ 接龙', write: 'Thi viết bảng nhanh'
  };
  var GAME_SECS = {
    errfix: 30, abc: 10, sort: 60, bingo: 30, guess: 20, tiles: 30, taboo: 60,
    trans: 60, listen: 15, hanzi: 30, role: 90, hv: 20, match: 45,
    chain: 20, write: 30
  };
  var VOCAB_GAMES = {
    bingo: 1, guess: 1, tiles: 1, taboo: 1, trans: 1, listen: 1, hanzi: 1,
    role: 1, hv: 1, match: 1, chain: 1, write: 1
  };

  function startGame(game) {
    if (!VOCAB_GAMES[game]) {
      var n = game === 'abc' ? pickedMcs().length : game === 'sort' ? pickedSorts().length : pickedJudges().length;
      if (!n || (game === 'errfix' && n < 3)) return;
    } else if (!pickedLabel()) return;

    state.game = game;
    $('#lopTitle').textContent = GAME_TITLE[game];
    $('#lopSub').textContent = (LEVEL_NAME[state.level] || '') + ' · ' + pickedLabel();
    resetScores();
    renderScorebar();
    // Moi tro mot nhip: gio the tra loi nhanh, xep cau can thoi gian len bang
    $('#lopScorebar').hidden = false;
    state.timer.secs = GAME_SECS[game] || 30;
    resetTimer();
    $('#lopSetup').hidden = true;
    $('#lopPlay').hidden = false;

    if (VOCAB_GAMES[game]) {
      $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Đang tải từ vựng của các bài đã chọn…</span></div>';
      loadPickedVocab().then(function (vocab) {
        state.vocab = vocab;
        if (!vocab.length) {
          $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Các bài này chưa có dữ liệu từ vựng.</span></div>';
          return;
        }
        if (game === 'bingo') startBingo(vocab);
        else if (game === 'tiles') { dealTiles(vocab); renderTiles(); }
        else if (game === 'taboo') { dealTaboo(vocab); renderTaboo(); }
        else if (game === 'trans') { dealTrans(); renderTrans(); }
        else if (game === 'listen') { dealListen(vocab); renderListen(); }
        else if (game === 'hanzi') { dealHanzi(vocab); renderHanzi(); }
        else if (game === 'role') { dealRole(); renderRole(); }
        else if (game === 'hv') { dealHv(vocab); renderHv(); }
        else if (game === 'match') { dealMatch(vocab); renderMatch(); }
        else if (game === 'chain') { dealChain(vocab); renderChain(); }
        else if (game === 'write') { dealWrite(vocab); renderWrite(); }
        else { dealGuess(vocab); renderGuess(); }
        resetTimer();
      });
      return;
    }

    if (game === 'abc') { dealAbc(); renderAbc(); }
    else if (game === 'sort') { dealSort(); renderSort(); }
    else { dealRows(); renderErrfix(); }
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
    $all('.lop-test-card').forEach(function (c) {
      c.addEventListener('click', function () { startTest(c.getAttribute('data-test')); });
    });
    $('#lopPaperClose').addEventListener('click', closePaper);
    $('#lopPaperAgain').addEventListener('click', function () { paperDeal(); paperRender(); });
    $('#lopPaperPrint').addEventListener('click', function () { window.print(); });
    ['#lopPaperN', '#lopPaperV'].forEach(function (id) {
      $(id).addEventListener('change', function () { paperDeal(); paperRender(); });
    });
    $('#lopPaperKey').addEventListener('change', paperRender);
    $('#lopPaperHard').addEventListener('change', paperRender);
    $('#lopExit').addEventListener('click', exitGame);
    $('#lopTimerToggle').addEventListener('click', toggleTimer);
    $('#lopTimerSet').addEventListener('click', cycleTimerSecs);
    $('#lopSound').addEventListener('click', toggleSound);
    $('#lopBuild').addEventListener('click', openBuild);
    $('#lopCall').addEventListener('click', openCall);
    $('#lopCallClose').addEventListener('click', function () { $('#lopCallBox').hidden = true; });
    $('#lopCallClass').addEventListener('change', function () {
      call.classId = this.value;
      call.cur = null;
      call.session = {};
      $('#lopCallName').textContent = '—';
      $('#lopCallMeta').textContent = '';
      $('#lopCallScore').hidden = true;
      loadCallRoster();
    });
    $('#lopCallPick').addEventListener('click', function () {
      var r = callPick();
      if (!r) { $('#lopCallHint').textContent = 'Lớp này chưa có danh sách học sinh.'; return; }
      call.cur = r;
      renderCall();
    });
    $('#lopCallSkip').addEventListener('click', function () { saveCall(null); });
    $('#lopCallLogin').addEventListener('submit', function (e) {
      e.preventDefault();
      call.pw = $('#lopCallPw').value;
      try { sessionStorage.setItem('hyv_admin_pw', call.pw); } catch (err) { /* bo qua */ }
      $('#lopCallErr').hidden = true;
      loadCallRoster();
    });
    $('#lopBuildClose').addEventListener('click', function () { $('#lopBuildBox').hidden = true; });
    $('#lopBuildClass').addEventListener('change', function () { build.classId = this.value; loadBuild(); });
    $('#lopBuildFind').addEventListener('input', function () { build.loc = this.value; renderBuild(); });
    $('#lopBuildLogin').addEventListener('submit', function (e) {
      e.preventDefault();
      call.pw = $('#lopBuildPw').value;
      try { sessionStorage.setItem('hyv_admin_pw', call.pw); } catch (err) { /* bo qua */ }
      $('#lopBuildErr').hidden = true;
      loadBuild();
    });
    $('#lopBuildList').addEventListener('click', function (e) {
      var b = e.target.closest('[data-d]');
      if (!b) return;
      var row = b.closest('.lop-build-row');
      chamBuild(row.getAttribute('data-id'), parseInt(b.getAttribute('data-d'), 10));
    });

    document.addEventListener('keydown', function (e) {
      if ($('#lopPlay').hidden) return;
      if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
      var g = state.game;
      if (e.code === 'Space') {
        e.preventDefault();
        if (g === 'abc') revealAbc();
        else if (g === 'sort') revealSort();
        else if (g === 'bingo') callBingo();
        else if (g === 'guess') revealGuess();
        else if (g === 'tiles') revealTiles();
        else if (g === 'taboo') tabooNext(true);
        else if (g === 'trans') revealTrans();
        else if (g === 'hanzi') revealHanzi();
        else if (g === 'listen') { if (state.listenTarget) speakZh(state.listenTarget.zh); }
        else if (g === 'role') revealRole();
        else if (g === 'hv') revealHv();
        else if (g === 'match') {
          state.matchZh.forEach(function (v) { state.matchDone[v.zh] = 1; });
          state.matchSel = null; renderMatch();
        }
        else if (g === 'chain') { var b = $('#lopChainPick'); if (b) b.hidden = false; }
        else if (g === 'dictation') { var dp = $('#lopDictPlay'); if (dp) dp.click(); }
        else if (g === 'quiz') { var qn = $('#lopQuizNext'); if (qn) qn.click(); }
        else if (g === 'write') revealWrite();
        else revealAll();
        return;
      }
      if (e.code === 'ArrowRight' || e.code === 'Enter') {
        if (g === 'abc') { e.preventDefault(); nextAbc(); }
        else if (g === 'sort') { e.preventDefault(); nextSort(); }
        else if (g === 'guess') { e.preventDefault(); nextGuess(); }
        else if (g === 'bingo') { e.preventDefault(); callBingo(); }
        else if (g === 'taboo') { e.preventDefault(); tabooNext(false); }
        else if (g === 'tiles') { e.preventDefault(); dealTiles(state.vocab || []); renderTiles(); resetTimer(); }
        else if (g === 'trans') { e.preventDefault(); nextTrans(); }
        else if (g === 'hanzi') { e.preventDefault(); nextHanzi(); }
        else if (g === 'listen') { e.preventDefault(); dealListen(state.vocab || []); renderListen(); resetTimer(); }
        else if (g === 'hv') { e.preventDefault(); nextHv(); }
        else if (g === 'match') { e.preventDefault(); dealMatch(state.vocab || []); renderMatch(); resetTimer(); }
        else if (g === 'role') { e.preventDefault(); dealRole(); renderRole(); resetTimer(); }
        else if (g === 'write') { e.preventDefault(); nextWrite(); }
        else if (g === 'dictation') { e.preventDefault(); var dn = $('#lopDictNext'); if (dn) dn.click(); }
        else if (g === 'quiz') { e.preventDefault(); var qx = $('#lopQuizNext'); if (qx) qx.click(); }
        else if (g === 'chain') { e.preventDefault(); dealChain(state.vocab || []); renderChain(); resetTimer(); }
        return;
      }
      if (e.key === 'n' || e.key === 'N') {
        if (g === 'abc') { dealAbc(); renderAbc(); }
        else if (g === 'sort') { dealSort(); renderSort(); }
        else if (g === 'guess') { dealGuess(state.vocab || []); renderGuess(); }
        else if (g === 'bingo') { startBingo(state.vocab || []); }
        else if (g === 'tiles') { dealTiles(state.vocab || []); renderTiles(); }
        else if (g === 'taboo') { dealTaboo(state.vocab || []); renderTaboo(); }
        else if (g === 'trans') { dealTrans(); renderTrans(); }
        else if (g === 'listen') { dealListen(state.vocab || []); renderListen(); }
        else if (g === 'hanzi') { dealHanzi(state.vocab || []); renderHanzi(); }
        else if (g === 'role') { dealRole(); renderRole(); }
        else if (g === 'hv') { dealHv(state.vocab || []); renderHv(); }
        else if (g === 'match') { dealMatch(state.vocab || []); renderMatch(); }
        else if (g === 'chain') { dealChain(state.vocab || []); renderChain(); }
        else if (g === 'write') { dealWrite(state.vocab || []); renderWrite(); }
        else { dealRows(); renderErrfix(); }
        resetTimer(); return;
      }
      if (e.key === 't' || e.key === 'T') { toggleTimer(); return; }
      if (e.key === 'r' || e.key === 'R') { openBuild(); return; }
      if (/^[1-6]$/.test(e.key)) { addScore(parseInt(e.key, 10) - 1, 1); }
    });

    switchLevel(state.level);
    paintTimer();
    paintSound();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
