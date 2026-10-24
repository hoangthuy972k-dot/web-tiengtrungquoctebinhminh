/* ============================================================
   Che do lop hoc — tro choi dau gio chieu len lop
   Tro dau tien: "Bat loi sai tiep suc" (dung kho cau Dung/Sai cua phan Ngu phap)
   ============================================================ */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $all = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // Cac cap co trong Che do lop hoc. Du lieu moi cap dung san o /js/lop-<cap>.js
  // (tools/build-lop.js): bai tap rieng cua tung bai + bai tap ngu phap chung da loc cau co chu chua hoc.
  var LEVELS = { hsk1: 1, hsk1v3: 1, hsk2: 1, hsk2v3: 1, hsk3v3: 1, hsk3: 1, hsk4: 1, hsk5: 1, hsk6: 1, yct: 1 };
  // Ma phien ban cua chinh lop.js (may chu dong dau ?v=) — dung lai cho file du lieu tai sau
  var VER = (function () {
    var s = document.currentScript && document.currentScript.src || '';
    var m = s.match(/[?&]v=([^&]+)/);
    return m ? m[1] : String(Date.now()).slice(0, 7);
  })();

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
      localStorage.setItem('hyv_lop', JSON.stringify({ level: state.level, teams: state.teams, secs: state.timer.secs, sound: audio.on, teamNames: state.teamNames || [] }));
    } catch (e) { /* bo qua */ }
  }
  function restore() {
    try {
      var d = JSON.parse(localStorage.getItem('hyv_lop') || '{}');
      if (d.level && LEVELS[d.level]) state.level = d.level;
      if (d.teams) state.teams = d.teams;
      if (d.secs) { state.timer.secs = d.secs; state.timer.left = d.secs; }
      if (d.sound === false) audio.on = false;
      if (Array.isArray(d.teamNames)) state.teamNames = d.teamNames;
    } catch (e) { /* bo qua */ }
  }

  /* ---------------- nap du lieu mot cap ---------------- */
  var loaded = {};
  function loadLevel(level) {
    if (!LEVELS[level]) return Promise.resolve();
    if (loaded[level]) return Promise.resolve();
    return new Promise(function (resolve) {
      var el = document.createElement('script');
      el.src = '/js/lop-' + level + '.js?v=' + VER;
      el.onload = function () { loaded[level] = true; resolve(); };
      el.onerror = function () { resolve(); };   // thieu file thi bo qua
      document.head.appendChild(el);
    });
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

  // Moi bai: bai tap rieng cua bai + bai tap ngu phap chung (chi cau toan chu da hoc) — xem tools/build-lop.js
  function collectLessons(level) {
    var list = (window.LOP_DATA && window.LOP_DATA[level]) || [];
    return list.map(function (l) {
      return { n: l.n, url: l.url, title: l.title || '', judges: l.judges || [], mcs: l.mcs || [], sorts: l.sorts || [] };
    }).sort(function (a, b) { return a.n - b.n; });
  }

  /* ---------------- man hinh chuan bi ---------------- */
  function renderLessons() {
    var wrap = $('#lopLessons');
    if (!state.lessons.length) {
      wrap.innerHTML = '<span style="color:#8d8279">Cấp này chưa có bài nào.</span>';
      updateCount();
      return;
    }
    wrap.innerHTML = state.lessons.map(function (l) {
      return '<button type="button" class="lop-lesson-chip' + (state.picked[l.url] ? ' on' : '') +
        '" data-url="' + l.url + '"' + (l.title ? ' title="' + esc(l.title) + '"' : '') + '>Bài ' + l.n + ' <small style="opacity:.6">(' + (l.judges.length + l.mcs.length + l.sorts.length) + ')</small></button>';
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
    // Keo co / hop bi mat / dua tau dung chung bo cau A/B/C
    $all('.lop-count-mc').forEach(function (el) {
      el.textContent = m ? m + ' câu' : 'chọn bài';
      el.closest('.lop-game-card').disabled = m < 4;
    });
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
    if ($('#lopShow')) $('#lopShow').disabled = !label;
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
      var x2 = fx.x2[i] ? ' on' : fx.used[i] ? ' used' : '';
      return '<div class="lop-team' + (s > 0 && s === top ? ' lead' : '') + (fx.bump === i ? ' bump' : '') + '" style="--tc:' + teamColor(i) + '">' +
        '<div class="lop-team-m">' + teamMascot(i) + (s > 0 && s === top ? '<span class="lop-crown">👑</span>' : '') + '</div>' +
        '<div class="lop-team-info"><div class="lop-team-name">' + esc(teamName(i)) + '</div>' +
          '<div class="lop-team-meta">' +
            (fx.last === i && fx.streak >= 2 ? '<span class="lop-streak">🔥' + fx.streak + '</span>' : '') +
            '<button type="button" class="lop-x2' + x2 + '" data-x2="' + i + '" title="Thẻ ×2: điểm lần ghi tiếp theo được nhân đôi (mỗi tổ 1 lần)">×2</button>' +
          '</div></div>' +
        '<div class="lop-team-score">' + s + (fx.float && fx.float.i === i ? '<span class="lop-float">' + fx.float.t + '</span>' : '') + '</div>' +
        '<div class="lop-team-btns">' +
          '<button type="button" data-team="' + i + '" data-d="1">+</button>' +
          '<button type="button" data-team="' + i + '" data-d="-1">−</button>' +
        '</div></div>';
    }).join('') +
    '<button type="button" class="lop-mini-btn" id="lopResetScore" style="align-self:center">Xoá điểm</button>';
    fx.bump = -1; fx.float = null;
    $all('#lopScorebar [data-x2]').forEach(function (b) {
      b.addEventListener('click', function () {
        var i = parseInt(b.getAttribute('data-x2'), 10);
        if (fx.used[i]) return;
        fx.x2[i] = !fx.x2[i];
        if (fx.x2[i]) flashBanner(teamMascot(i) + ' ' + teamName(i) + ' dùng thẻ ×2!', 'x2');
        renderScorebar();
      });
    });

    $all('#lopScorebar [data-team]').forEach(function (b) {
      b.addEventListener('click', function () {
        addScore(parseInt(b.getAttribute('data-team'), 10), parseInt(b.getAttribute('data-d'), 10));
      });
    });
    $('#lopResetScore').addEventListener('click', function () { resetScores(); renderScorebar(); });
  }
  function addScore(i, d) {
    if (i < 0 || i >= state.scores.length) return;
    var truoc = state.scores[i], them = d, ghi = [];
    if (d > 0) {
      var mul = state.show ? state.show.plan[state.show.idx].mul : 1;
      if (mul > 1) { them *= mul; ghi.push('×' + mul); }
      if (fx.x2[i]) { them *= 2; fx.x2[i] = false; fx.used[i] = true; ghi.push('thẻ ×2'); }
      // chuoi thang: cung mot to ghi diem 3 lan lien tiep -> thuong +1
      if (fx.last === i) fx.streak++; else { fx.last = i; fx.streak = 1; }
      if (fx.streak === 3) { them += 1; fx.streak = 0; fx.last = -1; try { sndFire(); } catch (e) { /* */ } flashBanner('🔥 ' + teamName(i) + ' chuỗi 3 — thưởng +1!', 'fire'); }
    } else if (fx.last === i) { fx.last = -1; fx.streak = 0; }
    state.scores[i] = Math.max(0, truoc + them);
    if (state.scores[i] !== truoc) {
      try { them > 0 ? sndUp() : sndDown(); } catch (e) { /* bo qua */ }
      fx.bump = i;
      fx.float = { i: i, t: (them > 0 ? '+' : '') + (state.scores[i] - truoc) };
    }
    renderScorebar();
  }

  /* ---------------- dong ho ---------------- */
  function paintTimer() {
    var t = state.timer;
    var m = Math.floor(t.left / 60), s = t.left % 60;
    var el = $('#lopTimer');
    el.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
    el.classList.toggle('is-low', t.left <= 5 && t.left > 0);
    // thanh thoi gian chay ngang duoi thanh tren (san khau khi choi)
    var bar = $('.lop-bar');
    if (bar) {
      bar.style.setProperty('--tleft', t.secs ? Math.max(0, Math.min(1, t.left / t.secs)) : 1);
      bar.classList.toggle('is-low', t.left <= 5 && t.left > 0);
    }
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
        // choi bang dien thoai: het gio la lat dap an luon
        if (state.live && state.game === 'abc') revealAbc();
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

  // Goi y cua cau (vd "có" cho 有, "đừng" cho 别) thuong chinh la nghia cua dap an
  // -> an mac dinh, thay/co bam "💡 Gợi ý" (hoac phim G) moi hien len bang.
  function hintHtml(q) {
    if (!q || !q.hint) return '';
    return '<div class="lop-hint"><button type="button" class="lop-hint-btn" aria-expanded="false">💡 Gợi ý</button>' +
      '<span class="lop-hint-text" hidden>' + esc(q.hint) + '</span></div>';
  }
  function toggleHint(btn) {
    var b = btn || $('#lopStage .lop-hint-btn');
    var t = b && b.nextElementSibling;
    if (!t) return;
    var show = t.hidden;
    t.hidden = !show;
    b.setAttribute('aria-expanded', show ? 'true' : 'false');
    b.classList.toggle('open', show);
  }
  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest ? e.target.closest('.lop-hint-btn') : null;
    if (b) toggleHint(b);
  });

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
      '<div class="lop-abc-sentence' + (q.noBlank ? ' is-q' : '') + '">' + esc(q.pre) + (q.noBlank ? '' : '<span class="lop-blank">＿＿</span>') + esc(q.post) + '</div>' +
      hintHtml(q) +
      '<div class="lop-abc-opts">' + q._order.map(function (oi, i) {
        return '<div class="lop-abc-opt" data-i="' + i + '">' +
          '<span class="lop-abc-key" data-k="' + ABC[i] + '">' + ABC[i] + '</span>' +
          '<span class="lop-abc-text">' + esc(q.options[oi]) + '</span>' +
        '</div>';
      }).join('') + '</div>' +
      '<div id="lopAbcWhy" class="lop-abc-why" hidden></div>' +
      '<div class="lop-live-strip" id="lopLiveStrip" hidden></div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopAbcReveal">Lật đáp án (Space)</button>' +
        '<button type="button" class="lop-act ghost" id="lopAbcNext">Câu tiếp theo →</button>' +
        '<button type="button" class="lop-act ghost" id="lopLiveBtn">' + (state.live ? '📱 Phòng ' + liveMa() : '📱 Chơi bằng điện thoại') + '</button>' +
        (state.live ? '<button type="button" class="lop-act ghost" id="lopLiveEnd">🏆 Kết thúc &amp; xếp hạng</button>' : '') +
      '</div>';

    $('#lopAbcReveal').addEventListener('click', revealAbc);
    $('#lopAbcNext').addEventListener('click', nextAbc);
    $('#lopLiveBtn').addEventListener('click', moLive);
    if ($('#lopLiveEnd')) $('#lopLiveEnd').addEventListener('click', function () { liveKetThuc(true); renderAbc(); resetTimer(false); });
    $all('#lopStage .lop-abc-opt').forEach(function (el) { el.addEventListener('click', revealAbc); });
    state.abcShown = false;
    liveDayCau(q);
  }

  function revealAbc() {
    if (state.abcShown) return;
    var q = state.deck[state.pos];
    if (!q) return;
    state.abcShown = true;
    $all('#lopStage .lop-abc-opt').forEach(function (el, i) {
      el.classList.add(i === q._ans ? 'is-right' : 'is-dim');
    });
    liveLat();
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

  /* ---------------- choi bang dien thoai (phien truc tiep, may chu: live.js) ---------------- */
  // Hoc sinh vao /choi bang ma phong, bam A/B/C/D; may cham theo toc do.
  // Chi dung cho tro "Gio the A/B/C". state.live = { ma, khoa, poll, info, sanh }
  function liveApi(method, path, body) {
    var l = state.live;
    var url = '/api/live/' + (l ? l.ma + '/' : '') + path + (method === 'GET' ? '?khoa=' + encodeURIComponent(l.khoa) : '');
    return fetch(url, {
      method: method,
      headers: method === 'GET' ? {} : { 'Content-Type': 'application/json' },
      body: method === 'GET' ? undefined : JSON.stringify(Object.assign({ khoa: l ? l.khoa : '' }, body || {})),
      cache: 'no-store',
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) throw new Error(d.error || 'Lỗi kết nối');
        return d;
      });
    });
  }
  function liveMa() { return state.live.ma.replace(/(\d{3})(\d{3})/, '$1 $2'); }

  function moLive() {
    if (state.live) { moSanh(); return; }
    var b = $('#lopLiveBtn');
    if (b) b.disabled = true;
    fetch('/api/live/tao', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; }); })
      .then(function (d) {
        state.live = { ma: d.ma, khoa: d.khoa, info: null, sanh: false };
        state.live.poll = setInterval(liveTai, 1000);
        moSanh();
      })
      .catch(function (e) { alert('Chưa mở được phòng: ' + e.message); })
      .then(function () { if (b) b.disabled = false; });
  }

  // Sanh cho: ma QR + ma phong + danh sach hoc sinh da vao
  function moSanh() {
    var l = state.live, qr = '';
    var link = location.origin + '/choi?ma=' + l.ma;
    try {
      var g = qrcode(0, 'M'); g.addData(link); g.make();
      qr = g.createSvgTag({ cellSize: 8, margin: 2, scalable: true });
    } catch (e) { /* khong co QR thi van con ma so */ }
    stopTimer();
    var box = $('#lopFx');
    box.innerHTML = '<div class="lop-fx-card lop-live-card">' +
      '<div class="lop-live-top">' +
        '<div class="lop-live-qr">' + qr + '</div>' +
        '<div class="lop-live-info">' +
          '<div class="lop-live-lb">Mở điện thoại, quét mã QR hoặc vào</div>' +
          '<div class="lop-live-url">' + esc(location.host) + '/choi</div>' +
          '<div class="lop-live-lb">Mã phòng</div>' +
          '<div class="lop-live-ma">' + liveMa() + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="lop-live-dem" id="lopLiveDem">Chưa có bạn nào vào</div>' +
      '<div class="lop-live-ds" id="lopLiveDs"></div>' +
      '<div class="lop-fx-actions">' +
        '<button type="button" class="lop-act" id="lopLiveGo">Bắt đầu câu hỏi ▶</button>' +
        '<button type="button" class="lop-act ghost" id="lopLiveOff">Tắt phiên điện thoại</button>' +
      '</div></div>';
    box.hidden = false;
    l.sanh = true;
    veSanh();
    $('#lopLiveGo').addEventListener('click', function () {
      l.sanh = false; closeFx();
      // gui lai cau dang chieu cho ca lop, dong ho chay lai tu dau
      renderAbc(); resetTimer();
    });
    $('#lopLiveOff').addEventListener('click', function () {
      closeFx(); liveKetThuc(false); renderAbc(); resetTimer(false);
    });
  }
  function veSanh() {
    var l = state.live;
    if (!l || !l.sanh || !$('#lopLiveDs')) return;
    var ds = (l.info && l.info.ds) || [];
    $('#lopLiveDem').innerHTML = ds.length ? '<b>' + ds.length + '</b> bạn đã vào lớp' : 'Chưa có bạn nào vào';
    $('#lopLiveDs').innerHTML = ds.map(function (h) {
      return '<button type="button" class="lop-live-hs" data-pid="' + esc(h.pid) + '" title="Bấm để mời bạn này ra">' + esc(h.ten) + '</button>';
    }).join('');
    $all('#lopLiveDs [data-pid]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (!confirm('Mời "' + b.textContent + '" ra khỏi phòng?')) return;
        liveApi('POST', 'duoi', { pid: b.getAttribute('data-pid') }).then(liveTai);
      });
    });
  }

  function liveTai() {
    var l = state.live;
    if (!l) return;
    liveApi('GET', 'gv').then(function (d) {
      if (state.live !== l) return;
      var cu = l.info;
      l.info = d;
      if (l.sanh && (!cu || cu.soHs !== d.soHs || cu.ds.length !== d.ds.length)) veSanh();
      veDai();
      // ca lop da tra loi het thi tu lat dap an
      if (state.game === 'abc' && d.pha === 'hoi' && d.soHs > 0 && d.daTL >= d.soHs && !state.abcShown && !l.sanh) revealAbc();
    }).catch(function () { /* mang chap chon: lan sau thu lai */ });
  }

  // Dai thong tin duoi cau hoi: so ban da tra loi / bang xep hang sau khi lat
  function veDai() {
    var l = state.live, el = $('#lopLiveStrip');
    if (!l || !el || state.game !== 'abc') return;
    var d = l.info;
    el.hidden = false;
    if (!d) { el.innerHTML = '📱 Phòng <b>' + liveMa() + '</b>'; return; }
    if (d.pha === 'lat' && d.phanBo) {
      $all('#lopStage .lop-abc-opt').forEach(function (o, i) {
        var n = o.querySelector('.lop-live-n');
        if (!n) { n = document.createElement('span'); n.className = 'lop-live-n'; o.appendChild(n); }
        n.textContent = (d.phanBo[i] || 0) + ' 👤';
      });
      el.innerHTML = '<div class="lop-live-bxh">' + d.bxh.slice(0, 5).map(function (r) {
        return '<div class="lop-live-row"><span class="lop-live-hang">' + (['🥇', '🥈', '🥉'][r.hang - 1] || r.hang) + '</span>' +
          '<span class="lop-live-ten">' + esc(r.ten) + (r.chuoi >= 2 ? ' 🔥' + r.chuoi : '') + '</span>' +
          (r.cong ? '<span class="lop-live-cong">+' + r.cong + '</span>' : '<span></span>') +
          '<b>' + r.diem + '</b></div>';
      }).join('') + '</div>';
      return;
    }
    el.innerHTML = '📱 Phòng <b>' + liveMa() + '</b> · <b class="lop-live-big">' + d.daTL + '</b> / ' + d.soHs + ' bạn đã trả lời';
  }

  function liveDayCau(q) {
    var l = state.live;
    if (!l || !q) return;
    l.info = l.info ? Object.assign({}, l.info, { pha: 'hoi', daTL: 0, phanBo: null }) : null;
    veDai();
    liveApi('POST', 'cau', {
      zh: q.pre + (q.noBlank ? '' : '＿＿') + q.post,
      opts: q._order.map(function (oi) { return q.options[oi]; }),
      dung: q._ans,
      secs: state.timer.secs,
      so: state.pos + 1,
      tong: state.deck.length,
    }).catch(function () { /* bo qua */ });
  }
  function liveLat() {
    if (!state.live) return;
    stopTimer(); // da lat thi dung dong ho, khoi keu tich tac
    liveApi('POST', 'lat').then(liveTai).catch(function () { /* bo qua */ });
  }

  // Ket thuc phien: hien bang xep hang chung cuoc (ca nhan)
  function liveKetThuc(hienBxh) {
    var l = state.live;
    if (!l) return;
    clearInterval(l.poll);
    var p = liveApi('POST', 'xong'); // liveApi doc state.live nen goi truoc khi xoa
    state.live = null;
    if (!hienBxh) { p.catch(function () { /* */ }); return; }
    p.then(function (d) { veBxhCuoi(d.bxh || []); }).catch(function () { /* */ });
  }
  function veBxhCuoi(bxh) {
    var mau = ['#e8b63a', '#9aa7b8', '#c47b45'];
    var top = bxh.slice(0, 3);
    var thu = [1, 0, 2].filter(function (i) { return top[i]; });
    var box = $('#lopFx');
    box.innerHTML = '<div class="lop-fx-card">' +
      '<div class="lop-award-title">🏆 Bảng vàng cá nhân</div>' +
      (top.length ? '<div class="lop-podium">' + thu.map(function (i) {
        var r = top[i];
        return '<div class="lop-pod p' + (i + 1) + '" style="--tc:' + mau[i] + '">' +
          '<div class="lop-pod-n">' + esc(r.ten) + '</div><div class="lop-pod-s">' + r.diem + ' điểm</div>' +
          '<div class="lop-pod-col">' + ['🥇', '🥈', '🥉'][i] + '</div></div>';
      }).join('') + '</div>' : '<p>Chưa có bạn nào ghi điểm.</p>') +
      (bxh.length > 3 ? '<div class="lop-award-rest">' + bxh.slice(3, 10).map(function (r) {
        return '<span>' + r.hang + '. ' + esc(r.ten) + ' · ' + r.diem + '</span>';
      }).join('') + '</div>' : '') +
      '<div class="lop-fx-actions"><button type="button" class="lop-act" id="lopFxClose">Đóng</button></div></div>';
    box.hidden = false;
    try { sndFanfare(); } catch (e) { /* */ }
    if (top.length) startConfetti();
    $('#lopFxClose').addEventListener('click', closeFx);
  }

  /* ---------------- tro dau to dung cau trac nghiem: keo co, hop bi mat, dua tau ---------------- */
  // Ca ba dung chung bo cau A/B/C cua cac bai da chon (state.deck/state.pos),
  // khung cau hoi giong "Gio the" nhung gon hon de con cho cho hinh tro choi.
  var MC_GAMES = { tug: 1, mine: 1, train: 1, nhip: 1 };

  function mcDeal() {
    state.deck = shuffle(pickedMcs());
    state.pos = 0;
    state.mcShown = false;
  }
  function mcCur() {
    if (!state.deck[state.pos]) mcDeal();
    return state.deck[state.pos];
  }
  function mcNext() {
    state.pos++;
    if (state.pos >= state.deck.length) mcDeal();
    state.mcShown = false;
  }
  function mcHtml(q) {
    if (!q) return '';
    if (!q._order) {
      q._order = shuffle(q.options.map(function (_, i) { return i; }));
      q._ans = q._order.indexOf(q.answer);
    }
    var lo = state.mcShown;
    return '<div class="lop-mc" id="lopMcBox">' +
      (q.context ? '<div class="lop-abc-context">🗣️ ' + esc(q.context) + '</div>' : '') +
      '<div class="lop-abc-sentence' + (q.noBlank ? ' is-q' : '') + '">' + esc(q.pre) + (q.noBlank ? '' : '<span class="lop-blank">＿＿</span>') + esc(q.post) + '</div>' +
      hintHtml(q) +
      '<div class="lop-abc-opts">' + q._order.map(function (oi, i) {
        return '<div class="lop-abc-opt' + (lo ? (i === q._ans ? ' is-right' : ' is-dim') : '') + '">' +
          '<span class="lop-abc-key" data-k="' + ABC[i] + '">' + ABC[i] + '</span>' +
          '<span class="lop-abc-text">' + esc(q.options[oi]) + '</span>' +
        '</div>';
      }).join('') + '</div>' +
      '<div id="lopMcWhy" class="lop-abc-why"' + (lo && q.why ? '>💡 ' + esc(q.why) : ' hidden>') + '</div>' +
    '</div>';
  }
  function mcReveal() {
    var q = state.deck[state.pos];
    if (!q || state.mcShown) return;
    state.mcShown = true;
    $all('#lopMcBox .lop-abc-opt').forEach(function (el, i) {
      el.classList.add(i === q._ans ? 'is-right' : 'is-dim');
    });
    if (q.why && $('#lopMcWhy')) { $('#lopMcWhy').hidden = false; $('#lopMcWhy').textContent = '💡 ' + q.why; }
  }
  function teamOpts(sel) {
    var s = '';
    for (var i = 0; i < state.teams; i++) s += '<option value="' + i + '"' + (i === sel ? ' selected' : '') + '>' + teamMascot(i) + ' ' + esc(teamName(i)) + '</option>';
    return s;
  }

  /* ---- Keo co: hai to, to nao tra loi dung truoc keo nut day ve phia minh 1 nac ---- */
  function dealTug() {
    mcDeal();
    state.tug = { L: 0, R: Math.min(1, state.teams - 1), pos: 0, max: 5, xong: -1, da: false };
  }
  function tugPct() { var t = state.tug; return 50 + t.pos * (42 / t.max); }
  function renderTug() {
    var t = state.tug, q = mcCur();
    var ben = function (s) {
      var i = t[s];
      return '<div class="lop-tug-side ' + s + '" style="--tc:' + teamColor(i) + '">' +
        '<span class="lop-tug-m">' + teamMascot(i) + '</span>' +
        '<select class="lop-tug-sel" data-side="' + s + '" aria-label="Chọn tổ bên ' + (s === 'L' ? 'trái' : 'phải') + '">' + teamOpts(i) + '</select></div>';
    };
    var nac = '';
    for (var k = -t.max; k <= t.max; k++) nac += '<i style="left:' + (50 + k * (42 / t.max)) + '%"></i>';
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head"><span>Kéo co · tổ nào trả lời đúng trước kéo dây về phía mình — kéo ' + t.max + ' nấc là thắng</span></div>' +
      '<div class="lop-tug">' + ben('L') +
        '<div class="lop-tug-track"><div class="lop-tug-nac">' + nac + '</div><div class="lop-tug-rope"></div>' +
          '<div class="lop-tug-knot" id="lopTugKnot" style="left:' + tugPct() + '%">🎀</div></div>' +
        ben('R') + '</div>' +
      (t.xong >= 0
        ? '<div class="lop-tug-win" style="--tc:' + teamColor(t.xong) + '">' + teamMascot(t.xong) + ' <b>' + esc(teamName(t.xong)) + '</b> thắng kéo co!</div>' +
          '<div class="lop-stage-actions"><button type="button" class="lop-act" id="lopTugNew">Ván mới ▶</button></div>'
        : mcHtml(q) +
          '<div class="lop-stage-actions">' +
            '<button type="button" class="lop-act lop-team-act" data-side="L" style="--tc:' + teamColor(t.L) + '">◀ ' + esc(teamName(t.L)) + ' đúng</button>' +
            '<button type="button" class="lop-act ghost" id="lopMcReveal">Lật đáp án</button>' +
            '<button type="button" class="lop-act ghost" id="lopMcNext">Câu tiếp →</button>' +
            '<button type="button" class="lop-act lop-team-act" data-side="R" style="--tc:' + teamColor(t.R) + '">' + esc(teamName(t.R)) + ' đúng ▶</button>' +
          '</div>');
    $all('#lopStage .lop-tug-sel').forEach(function (s) {
      s.addEventListener('change', function () {
        var side = s.getAttribute('data-side'), v = parseInt(s.value, 10);
        var khac = side === 'L' ? 'R' : 'L';
        if (t[khac] === v) t[khac] = t[side]; // chon trung thi doi cho hai ben
        t[side] = v;
        renderTug();
      });
    });
    $all('#lopStage .lop-team-act').forEach(function (b) {
      b.addEventListener('click', function () { tugWin(b.getAttribute('data-side')); });
    });
    if ($('#lopTugNew')) $('#lopTugNew').addEventListener('click', function () { dealTug(); renderTug(); resetTimer(); });
    if ($('#lopMcReveal')) $('#lopMcReveal').addEventListener('click', mcReveal);
    if ($('#lopMcNext')) $('#lopMcNext').addEventListener('click', tugNext);
  }
  function tugWin(side) {
    var t = state.tug;
    if (t.xong >= 0 || t.da) return;
    t.da = true;
    t.pos += side === 'L' ? -1 : 1;
    var team = t[side];
    mcReveal();
    stopTimer();
    addScore(team, 1);
    $('#lopTugKnot').style.left = tugPct() + '%';
    $all('#lopStage .lop-team-act').forEach(function (b) { b.disabled = true; });
    var tr = $('.lop-tug-side.' + side);
    if (tr) { tr.classList.remove('keo'); void tr.offsetWidth; tr.classList.add('keo'); }
    if (Math.abs(t.pos) >= t.max) {
      t.xong = team;
      stopTimer();
      setTimeout(function () {
        addScore(team, 3);
        flashBanner('🏆 ' + teamMascot(team) + ' ' + teamName(team) + ' thắng kéo co! +3', 'fire');
        try { sndFanfare(); } catch (e) { /* */ }
        renderTug();
      }, 700);
    }
  }
  function tugNext() {
    if (state.tug.xong >= 0) return;
    state.tug.da = false;
    mcNext(); renderTug(); resetTimer();
  }

  /* ---- Hop bi mat: tra loi dung thi duoc mo mot hop — co diem, co qua, co bom ---- */
  var HOP_MAU = [
    { t: '+1', d: 1, n: 5 }, { t: '+2', d: 2, n: 4 }, { t: '+3', d: 3, n: 2 },
    { t: '🎁 +5', d: 5, n: 1, c: 'qua' }, { t: '💣 −2', d: -2, n: 3, c: 'bom' }, { t: '⭐ Thêm lượt', d: 0, n: 1, c: 'sao', them: 1 }
  ];
  function dealMine() {
    mcDeal();
    var hop = [];
    HOP_MAU.forEach(function (h) { for (var k = 0; k < h.n; k++) hop.push(h); });
    state.mine = { hop: shuffle(hop), mo: {}, turn: 0, buoc: 'hoi', moi: -1 };
  }
  function renderMine() {
    var m = state.mine, q = mcCur(), ti = m.turn;
    var conHop = m.hop.length - Object.keys(m.mo).length;
    var nut = '';
    if (!conHop) nut = '<button type="button" class="lop-act" id="lopMineNew">Bảng hộp mới ▶</button>';
    else if (m.buoc === 'hoi') nut =
      '<button type="button" class="lop-act lop-team-act" id="lopMineOk" style="--tc:' + teamColor(ti) + '">✓ Đúng — chọn hộp</button>' +
      '<button type="button" class="lop-act ghost" id="lopMcReveal">Lật đáp án</button>' +
      '<button type="button" class="lop-act ghost" id="lopMineNo">✗ Sai — lượt tổ sau</button>';
    else if (m.buoc === 'sai') nut = '<button type="button" class="lop-act" id="lopMineTiep">Lượt tổ sau →</button>';
    $('#lopStage').innerHTML =
      '<div class="lop-mine-turn" style="--tc:' + teamColor(ti) + '">' + teamMascot(ti) + ' Lượt của <b>' + esc(teamName(ti)) + '</b>' +
        (m.buoc === 'chon' ? ' — chọn một hộp!' : m.buoc === 'sai' ? ' — chưa đúng rồi' : '') + '</div>' +
      '<div class="lop-mine">' +
        '<div class="lop-mine-grid' + (m.buoc === 'chon' ? ' is-pick' : '') + '">' + m.hop.map(function (h, i) {
          if (m.mo[i]) return '<div class="lop-mine-cell open ' + (h.c || (h.d >= 3 ? 'to' : '')) + (m.moi === i ? ' moi' : '') + '">' + h.t + '</div>';
          return '<button type="button" class="lop-mine-cell" data-hop="' + i + '"' + (m.buoc === 'chon' ? '' : ' disabled') + '>' + (i + 1) + '</button>';
        }).join('') + '</div>' +
        (conHop ? mcHtml(q) : '<div class="lop-tug-win">Đã mở hết hộp!</div>') +
      '</div>' +
      '<div class="lop-stage-actions">' + nut + '</div>';
    m.moi = -1;
    $all('#lopStage [data-hop]').forEach(function (b) {
      b.addEventListener('click', function () { moHop(parseInt(b.getAttribute('data-hop'), 10)); });
    });
    if ($('#lopMineOk')) $('#lopMineOk').addEventListener('click', function () { mcReveal(); m.buoc = 'chon'; try { sndUp(); } catch (e) { /* */ } renderMine(); });
    if ($('#lopMineNo')) $('#lopMineNo').addEventListener('click', function () { mcReveal(); m.buoc = 'sai'; try { sndDown(); } catch (e) { /* */ } renderMine(); });
    if ($('#lopMineTiep')) $('#lopMineTiep').addEventListener('click', mineTiep);
    if ($('#lopMineNew')) $('#lopMineNew').addEventListener('click', function () { dealMine(); renderMine(); resetTimer(); });
    if ($('#lopMcReveal')) $('#lopMcReveal').addEventListener('click', mcReveal);
  }
  function moHop(i) {
    var m = state.mine;
    if (m.buoc !== 'chon' || m.mo[i]) return;
    var h = m.hop[i], ti = m.turn;
    m.mo[i] = 1; m.moi = i;
    if (h.d) addScore(ti, h.d);
    if (h.c === 'bom') flashBanner('💣 Bùm! ' + teamName(ti) + ' −2', 'x2');
    else if (h.c === 'qua') flashBanner('🎁 ' + teamName(ti) + ' trúng quà +5!', 'fire');
    else if (h.them) flashBanner('⭐ ' + teamName(ti) + ' được thêm một lượt!', 'fire');
    m.buoc = 'mo';
    renderMine();
    stopTimer();
    // de ca lop nhin thay hop vua mo roi moi sang cau sau
    setTimeout(function () { if (state.game === 'mine' && state.mine === m) { if (!h.them) m.turn = (m.turn + 1) % state.teams; m.buoc = 'hoi'; mcNext(); renderMine(); resetTimer(); } }, 1600);
  }
  function mineTiep() {
    var m = state.mine;
    m.turn = (m.turn + 1) % state.teams;
    m.buoc = 'hoi';
    mcNext(); renderMine(); resetTimer();
  }

  /* ---- Dua tau: moi to mot doan tau, tra loi dung chay them mot ga ---- */
  function dealTrain() {
    mcDeal();
    var p = [];
    for (var i = 0; i < state.teams; i++) p.push(0);
    state.train = { p: p, dich: 7, xong: -1, ghi: {} };
  }
  function trainP(p) { return (p / state.train.dich).toFixed(4); }
  function renderTrain() {
    var tr = state.train, q = mcCur();
    var ga = '';
    for (var k = 1; k < tr.dich; k++) ga += '<i style="--p:' + trainP(k) + '"></i>';
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head"><span>Đua tàu · tổ nào trả lời đúng chạy thêm một ga — tới ga ' + tr.dich + ' 🏁 là về đích (+3)</span></div>' +
      '<div class="lop-train">' + tr.p.map(function (p, i) {
        return '<div class="lop-train-row" style="--tc:' + teamColor(i) + '">' +
          '<span class="lop-train-name">' + teamMascot(i) + ' ' + esc(teamName(i)) + '</span>' +
          '<div class="lop-train-track"><div class="lop-train-rail"></div><div class="lop-train-ga">' + ga + '</div><span class="lop-train-flag">🏁</span>' +
            '<div class="lop-train-car" id="lopTrain' + i + '" style="--p:' + trainP(p) + '"><span>🚂🚃🚃</span></div></div>' +
          '<button type="button" class="lop-train-ok" data-t="' + i + '"' + (tr.ghi[i] || tr.xong >= 0 ? ' disabled' : '') + ' title="' + esc(teamName(i)) + ' trả lời đúng (phím ' + (i + 1) + ')">✓ ' + (i + 1) + '</button>' +
        '</div>';
      }).join('') + '</div>' +
      (tr.xong >= 0
        ? '<div class="lop-tug-win" style="--tc:' + teamColor(tr.xong) + '">' + teamMascot(tr.xong) + ' <b>' + esc(teamName(tr.xong)) + '</b> về đích đầu tiên!</div>' +
          '<div class="lop-stage-actions"><button type="button" class="lop-act" id="lopTrainNew">Đua lại ▶</button></div>'
        : mcHtml(q) +
          '<div class="lop-stage-actions">' +
            '<button type="button" class="lop-act" id="lopMcReveal">Lật đáp án (Space)</button>' +
            '<button type="button" class="lop-act ghost" id="lopMcNext">Câu tiếp →</button>' +
          '</div>');
    $all('#lopStage [data-t]').forEach(function (b) {
      b.addEventListener('click', function () { trainOk(parseInt(b.getAttribute('data-t'), 10)); });
    });
    if ($('#lopMcReveal')) $('#lopMcReveal').addEventListener('click', mcReveal);
    if ($('#lopMcNext')) $('#lopMcNext').addEventListener('click', trainNext);
    if ($('#lopTrainNew')) $('#lopTrainNew').addEventListener('click', function () { dealTrain(); renderTrain(); resetTimer(); });
  }
  function trainOk(i) {
    var tr = state.train;
    if (tr.xong >= 0 || tr.ghi[i] || i >= tr.p.length) return;
    tr.ghi[i] = 1;
    tr.p[i]++;
    addScore(i, 1);
    var car = $('#lopTrain' + i);
    if (car) car.style.setProperty('--p', trainP(tr.p[i]));
    var b = $('#lopStage [data-t="' + i + '"]');
    if (b) b.disabled = true;
    if (tr.p[i] >= tr.dich) {
      tr.xong = i;
      stopTimer();
      setTimeout(function () {
        addScore(i, 3);
        flashBanner('🏁 ' + teamMascot(i) + ' ' + teamName(i) + ' về đích! +3', 'fire');
        try { sndFanfare(); } catch (e) { /* */ }
        renderTrain();
      }, 900);
    }
  }
  function trainNext() {
    if (state.train.xong >= 0) return;
    state.train.ghi = {};
    mcNext(); renderTrain(); resetTimer();
  }

  /* ---- Thi dua tren dien thoai: moi em tu lam ca bo cau theo nhip rieng (phong kieu 'nhip') ---- */
  // Man chieu chi hien ma QR luc dau, sau do la bang xep hang + tien do tung em.
  function qrSvg(link) {
    try { var g = qrcode(0, 'M'); g.addData(link); g.make(); return g.createSvgTag({ cellSize: 8, margin: 2, scalable: true }); }
    catch (e) { return ''; }
  }
  function startNhip() {
    $('#lopScorebar').hidden = true;
    stopTimer();
    state.nhipSo = state.nhipSo || 10;
    $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Đang mở phòng…</span></div>';
    fetch('/api/live/tao', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kieu: 'nhip' }) })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; }); })
      .then(function (d) {
        if (state.game !== 'nhip') return;
        state.live = { ma: d.ma, khoa: d.khoa, kieu: 'nhip', info: null, ve: '' };
        state.live.poll = setInterval(nhipTai, 1500);
        renderNhip();
      })
      .catch(function (e) {
        $('#lopStage').innerHTML = '<div class="lop-stage-head"><span>Chưa mở được phòng: ' + esc(e.message) + '</span></div>';
      });
  }
  function nhipTai() {
    var l = state.live;
    if (!l || l.kieu !== 'nhip') return;
    liveApi('GET', 'gv').then(function (d) {
      if (state.live !== l || state.game !== 'nhip') return;
      l.info = d;
      renderNhip();
    }).catch(function () { /* mang chap chon: lan sau thu lai */ });
  }
  function renderNhip() {
    var l = state.live;
    if (!l) {
      $('#lopStage').innerHTML = '<div class="lop-tug-win">Phiên thi đã kết thúc</div>' +
        '<div class="lop-stage-actions"><button type="button" class="lop-act" id="lopNhipMoi">Mở phòng mới ▶</button></div>';
      $('#lopNhipMoi').addEventListener('click', startNhip);
      return;
    }
    var d = l.info || { pha: 'cho', ds: [], bxh: [], soHs: 0 };
    var link = location.origin + '/choi?ma=' + l.ma;
    var tong = pickedMcs().length;
    // Dung khung mot lan cho moi pha, cac lan hoi sau chi cap nhat phan dong
    if (l.ve !== d.pha) {
      l.ve = d.pha;
      if (d.pha === 'cho') {
        var so = [10, 20, 30].filter(function (n) { return n < tong; }).concat([tong]);
        if (so.indexOf(state.nhipSo) < 0) state.nhipSo = so[0];
        $('#lopStage').innerHTML =
          '<div class="lop-nhip-card">' +
            '<div class="lop-live-top">' +
              '<div class="lop-live-qr">' + qrSvg(link) + '</div>' +
              '<div class="lop-live-info">' +
                '<div class="lop-live-lb">Mở điện thoại, quét mã QR hoặc vào</div>' +
                '<div class="lop-live-url">' + esc(location.host) + '/choi</div>' +
                '<div class="lop-live-lb">Mã phòng</div>' +
                '<div class="lop-live-ma">' + liveMa() + '</div>' +
              '</div>' +
            '</div>' +
            '<div class="lop-live-dem" id="lopLiveDem"></div>' +
            '<div class="lop-live-ds" id="lopLiveDs"></div>' +
            '<div class="lop-nhip-so"><span>Mỗi em làm</span>' + so.map(function (n) {
              return '<button type="button" data-so="' + n + '" class="' + (n === state.nhipSo ? 'on' : '') + '">' + (n === tong ? 'Tất cả ' + n : n) + ' câu</button>';
            }).join('') + '</div>' +
            '<div class="lop-fx-actions"><button type="button" class="lop-act" id="lopNhipGo">Bắt đầu cho cả lớp làm ▶</button></div>' +
          '</div>';
        $all('#lopStage [data-so]').forEach(function (b) {
          b.addEventListener('click', function () {
            state.nhipSo = parseInt(b.getAttribute('data-so'), 10);
            $all('#lopStage [data-so]').forEach(function (x) { x.classList.toggle('on', x === b); });
          });
        });
        $('#lopNhipGo').addEventListener('click', nhipBatDau);
      } else if (d.pha === 'choi') {
        $('#lopStage').innerHTML =
          '<div class="lop-nhip-head">' +
            '<div class="lop-nhip-tk"><div>📱 Phòng <b>' + liveMa() + '</b></div>' +
              '<div><b class="lop-live-big" id="lopNhipXong">0</b> / <span id="lopNhipSoHs">0</span> bạn đã làm xong · ⏱ <span id="lopNhipGio">00:00</span></div>' +
              '<div class="lop-nhip-goi">Vào muộn? Quét mã bên cạnh hoặc vào ' + esc(location.host) + '/choi</div></div>' +
            '<div class="lop-nhip-qr">' + qrSvg(link) + '</div>' +
          '</div>' +
          '<div class="lop-leo" id="lopLeo">' +
            '<div class="lop-nui" id="lopNui">' +
              '<svg class="lop-nui-hinh" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">' +
                '<polygon points="0,60 22,34 34,40 70,4 86,26 100,60" fill="rgba(255,255,255,.10)"/>' +
                '<polygon points="70,4 63,13 67,12 70,15 74,11 77,14" fill="rgba(255,255,255,.55)"/>' +
                '<polyline points="6,53 68,8" fill="none" stroke="rgba(255,207,92,.55)" stroke-width=".6" stroke-dasharray="1.6 1.2"/>' +
              '</svg>' +
              '<span class="lop-nui-co">🚩</span>' +
              '<span class="lop-nui-trai">⛺ Chân núi</span>' +
              '<span class="lop-nui-dinh" id="lopNuiDinh"></span>' +
            '</div>' +
            '<aside class="lop-leo-ben">' +
              '<div class="lop-leo-h">🏆 Dẫn đầu</div><div id="lopLeoTop"></div>' +
              '<div class="lop-leo-h">📣 Diễn biến</div><div class="lop-leo-tin" id="lopLeoTin"></div>' +
            '</aside>' +
          '</div>' +
          '<div class="lop-nhip-bxh" id="lopNhipBxh" hidden></div>' +
          '<div class="lop-stage-actions">' +
            '<button type="button" class="lop-act ghost" id="lopNhipXem">📋 Xem dạng danh sách</button>' +
            '<button type="button" class="lop-act" id="lopNhipEnd">🏁 Kết thúc &amp; trao giải</button>' +
          '</div>';
        l.cham = {}; l.suMoi = 0; l.xem = 'nui';
        $('#lopNhipXem').addEventListener('click', function () {
          l.xem = l.xem === 'nui' ? 'ds' : 'nui';
          $('#lopLeo').hidden = l.xem !== 'nui';
          $('#lopNhipBxh').hidden = l.xem === 'nui';
          this.textContent = l.xem === 'nui' ? '📋 Xem dạng danh sách' : '⛰️ Xem đoàn leo núi';
        });
        $('#lopNhipEnd').addEventListener('click', function () {
          var moi = (state.live && state.live.info) || d; // so lieu moi nhat, khong phai luc dung khung
          if (moi.soXong < moi.soHs && !confirm('Còn bạn chưa làm xong. Kết thúc luôn?')) return;
          liveKetThuc(true);
          renderNhip();
        });
      }
    }
    if (d.pha === 'cho' && $('#lopLiveDs')) {
      $('#lopLiveDem').innerHTML = d.ds.length ? '<b>' + d.ds.length + '</b> bạn đã vào lớp' : 'Chưa có bạn nào vào';
      var cu = $('#lopLiveDs').getAttribute('data-n');
      if (cu !== String(d.ds.length)) {
        $('#lopLiveDs').setAttribute('data-n', d.ds.length);
        $('#lopLiveDs').innerHTML = d.ds.map(function (h) {
          return '<button type="button" class="lop-live-hs" data-pid="' + esc(h.pid) + '" title="Bấm để mời bạn này ra">' + esc(h.ten) + '</button>';
        }).join('');
        $all('#lopLiveDs [data-pid]').forEach(function (b) {
          b.addEventListener('click', function () {
            if (!confirm('Mời "' + b.textContent + '" ra khỏi phòng?')) return;
            liveApi('POST', 'duoi', { pid: b.getAttribute('data-pid') }).then(nhipTai);
          });
        });
      }
    }
    if (d.pha === 'choi' && $('#lopNhipBxh')) {
      $('#lopNhipXong').textContent = d.soXong;
      $('#lopNhipSoHs').textContent = d.soHs;
      var giay = Math.floor((Date.now() - (l.bd || Date.now())) / 1000);
      $('#lopNhipGio').textContent = (giay < 600 ? '0' : '') + Math.floor(giay / 60) + ':' + (giay % 60 < 10 ? '0' : '') + giay % 60;
      $('#lopNhipBxh').innerHTML = d.bxh.map(function (r) {
        var pt = d.tong ? Math.round(r.lam / d.tong * 100) : 0;
        return '<div class="lop-nhip-row' + (r.xong ? ' xong' : '') + '">' +
          '<span class="lop-live-hang">' + (['🥇', '🥈', '🥉'][r.hang - 1] || r.hang) + '</span>' +
          '<span class="lop-live-ten">' + esc(r.ten) + (r.chuoi >= 3 ? ' 🔥' : '') + '</span>' +
          '<span class="lop-nhip-tien"><i style="width:' + pt + '%"></i><em>' + (r.xong ? '🏁 xong' : r.lam + '/' + d.tong) + '</em></span>' +
          '<span class="lop-nhip-dung">✓ ' + r.dungSo + '</span>' +
          '<b>' + r.diem + '</b></div>';
      }).join('') || '<div class="lop-stage-head"><span>Chưa có bạn nào vào phòng.</span></div>';
      veNui(l, d);
    }
  }

  /* ---- Doan leo nui: moi cau dung leo len mot bac, ca lop thay nhau ---- */
  var MAU_NG = ['#e5484d', '#2f7cf6', '#f2a516', '#1f9d55', '#a855f7', '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#84cc16'];
  function mauTen(t) { var h = 0; for (var i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0; return MAU_NG[h % MAU_NG.length]; }
  function chuDau(t) { var w = String(t).trim().split(/\s+/); return (w[w.length - 1] || '?').charAt(0).toUpperCase(); }
  function veNui(l, d) {
    var nui = $('#lopNui');
    if (!nui || !l.cham) return;
    var tong = Math.max(1, d.tong || 1);
    $('#lopNuiDinh').textContent = 'Đỉnh: ' + tong + ' câu đúng';
    // Nguoi cung do cao dan deu theo be ngang ngon nui o do cao do (chan nui
    // rong nen chua duoc nhieu em), xep so le len xuong cho ten khoi de nhau
    var soBac = {}, demBac = {}, conLai = {};
    d.bxh.forEach(function (r) { soBac[r.dungSo] = (soBac[r.dungSo] || 0) + 1; });
    d.bxh.forEach(function (r) {
      var bac = r.dungSo, k = demBac[bac] = (demBac[bac] || 0) + 1, n = soBac[bac];
      var t = Math.min(1, bac / tong);
      var trai = 70 - (1 - t) * 62, phai = 70 + (1 - t) * 26;   // suon nui o do cao t (dinh o 70%)
      var x = n === 1 ? 6 + t * 62 : trai + 3 + (phai - trai - 6) * (k - 0.5) / n;
      var y = 86 - t * 72 + (n > 1 && k % 2 === 0 ? 6 : 0);
      var el = l.cham[r.pid];
      if (!el) {
        el = document.createElement('div');
        el.className = 'lop-ng';
        el.innerHTML = '<span class="lop-ng-av"></span><em></em>';
        nui.appendChild(el);
        l.cham[r.pid] = el;
      }
      el.style.left = x + '%';
      el.style.top = y + '%';
      el.style.zIndex = 100 - r.hang;
      el.style.setProperty('--c', mauTen(r.ten));
      el.querySelector('.lop-ng-av').textContent = r.hang <= 3 ? ['🥇', '🥈', '🥉'][r.hang - 1] : chuDau(r.ten);
      // nhan gon: top 3 ghi du ten, con lai ghi ten goi (chu cuoi)
      el.querySelector('em').textContent = r.hang <= 3 ? r.ten : String(r.ten).trim().split(/\s+/).pop();
      el.classList.toggle('dau', r.hang === 1 && r.dungSo > 0);
      el.classList.toggle('xong', r.xong);
      el.classList.toggle('top3', r.hang <= 3);
      el.title = r.ten + ' · hạng ' + r.hang + ' · ' + r.dungSo + ' câu đúng · ' + r.diem + ' điểm';
      conLai[r.pid] = 1;
    });
    Object.keys(l.cham).forEach(function (pid) {
      if (!conLai[pid]) { l.cham[pid].remove(); delete l.cham[pid]; }
    });
    $('#lopLeoTop').innerHTML = d.bxh.slice(0, 5).map(function (r) {
      return '<div class="lop-leo-r"><span>' + (['🥇', '🥈', '🥉'][r.hang - 1] || r.hang) + '</span><b>' + esc(r.ten) + '</b><i>' + r.dungSo + ' câu</i></div>';
    }).join('') || '<div class="lop-leo-trong">Chưa có ai vào</div>';
    var su = d.su || [];
    $('#lopLeoTin').innerHTML = su.slice(0, 6).map(function (x) {
      return '<div class="lop-leo-t' + (x.id > l.suMoi ? ' moi' : '') + '">' + esc(x.txt) + '</div>';
    }).join('') || '<div class="lop-leo-trong">Cuộc leo núi bắt đầu!</div>';
    // tin lon (doi nguoi dan dau, nguoi dau tien ve dich) bay qua man chieu
    su.filter(function (x) { return x.id > l.suMoi; }).reverse().forEach(function (x) {
      if (/^👑|^🏁/.test(x.txt) && l.suMoi) { try { flashBanner(x.txt, 'fire'); sndUp(); } catch (e) { /* bo qua */ } }
    });
    if (su[0]) l.suMoi = Math.max(l.suMoi, su[0].id);
  }
  function nhipBatDau() {
    var l = state.live;
    if (!l) return;
    var b = $('#lopNhipGo');
    b.disabled = true;
    var cau = shuffle(pickedMcs()).slice(0, state.nhipSo).map(function (q) {
      var thu = shuffle(q.options.map(function (_, i) { return i; }));
      return {
        zh: q.pre + (q.noBlank ? '' : '＿＿') + q.post,
        ctx: q.context || '', why: q.why || '',
        opts: thu.map(function (oi) { return q.options[oi]; }),
        dung: thu.indexOf(q.answer),
      };
    });
    liveApi('POST', 'batdau', { cau: cau }).then(function () {
      l.bd = Date.now();
      try { sndFanfare(); } catch (e) { /* */ }
      nhipTai();
    }).catch(function (e) { b.disabled = false; alert(e.message); });
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
        // Diem nay len thang cot "Miệng" o bang lop, hoc sinh mo trang chu la thay
        flashNote(score === null ? ('Đã ghi: ' + r.name + ' vắng/bỏ qua')
          : ('✓ ' + r.name + ' — ' + score + ' điểm · đã lên bảng lớp'));
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
    paper: 'Đề giấy in ra',
    phatam: 'Kiểm tra phát âm 拼音'
  };

  /* ══════════ KIEM TRA PHAT AM ══════════
     Rieng phan phat am, KHONG dinh den cap do / bai HSK o tren — chon
     bai trong 13 bai cua giao trinh phat am. Ba kieu kiem tra:
       viet — may doc, hoc sinh viet phien am vao vo, cuoi hien dap an
       chon — may doc, chieu 4 lua chon, ca lop gio the A/B/C/D
       doc  — chieu am tiet, goi hoc sinh doc, thay co cham Dung/Sai   */
  var paChon = {};          // so bai -> 1
  var paKieu = 'doc';
  var paSoTu = 3;             // moi luot kiem may tu
  var paNguon = 'ghep';        // mac dinh kiem tra tu HAI AM TIET
  var paBai = (typeof PHAT_AM_BAI !== 'undefined') ? PHAT_AM_BAI : [];

  function paLuu() {
    try {
      localStorage.setItem('hyv_pa', JSON.stringify({ bai: Object.keys(paChon), kieu: paKieu, nguon: paNguon, soTu: paSoTu }));
    } catch (e) { /* bo qua */ }
  }
  function paDoc() {
    try {
      var d = JSON.parse(localStorage.getItem('hyv_pa') || '{}');
      (d.bai || []).forEach(function (s) { paChon[s] = 1; });
      if (d.kieu) paKieu = d.kieu;
      // Ten nguon da doi (tu1/tu2 -> ghep/don/tu) nen phai kiem lai,
      // khong thi ban cu luu trong may thay co se ra 0 muc.
      if (['ghep', 'don', 'tu', 'tron'].indexOf(d.nguon) >= 0) paNguon = d.nguon;
      if (d.soTu) paSoTu = Math.max(1, Math.min(6, d.soTu));
    } catch (e) { /* bo qua */ }
  }

  function paVeBai() {
    var wrap = $('#lopPaList');
    if (!wrap) return;
    wrap.innerHTML = paBai.map(function (b) {
      return '<button type="button" class="lop-lesson-chip' + (paChon[b.so] ? ' on' : '') +
        '" data-pa="' + b.so + '" title="' + esc(b.ten) + '">Bài ' + b.so +
        ' <i>' + esc(b.am) + '</i></button>';
    }).join('');
    $all('[data-pa]', wrap).forEach(function (b) {
      b.addEventListener('click', function () {
        var s = b.getAttribute('data-pa');
        if (paChon[s]) delete paChon[s]; else paChon[s] = 1;
        b.classList.toggle('on');
        paDem(); paLuu();
      });
    });
    paDem();
  }
  function paDem() {
    var ds = paBai.filter(function (b) { return paChon[b.so]; });
    var p = $('#lopPaCount');
    if (!p) return;
    if (!ds.length) { p.textContent = 'Chưa chọn bài nào — bấm vào số bài bên dưới.'; p.classList.remove('on'); }
    else {
      p.innerHTML = '✓ Đang chọn: <b>' + ds.map(function (b) { return 'Bài ' + b.so; }).join(' · ') +
        '</b> — ' + paKho().length + (paNguon === 'don' ? ' âm tiết' : ' mục');
      p.classList.add('on');
    }
    var nut = $('#lopPaStart');
    if (nut) nut.disabled = !ds.length;
  }
  /* Kho tu cua cac bai da chon, theo nguon dang chon:
     tu1 = am tiet don · tu2 = tu hai am tiet · tron = ca hai. */
  function paKho() {
    var ra = [], thay = {};
    paBai.forEach(function (b) {
      if (!paChon[b.so]) return;
      var nguon = [];
      if (paNguon === 'ghep' || paNguon === 'tron') nguon = nguon.concat(b.ghep || []);
      if (paNguon === 'don' || paNguon === 'tron') nguon = nguon.concat(b.don || []);
      if (paNguon === 'tu' || paNguon === 'tron') nguon = nguon.concat(b.tu || []);
      nguon.forEach(function (t) {
        var k = (t.zh || '') + '|' + t.py;
        if (thay[k]) return;
        thay[k] = 1;
        ra.push({ zh: t.zh || '', py: t.py, vn: t.vn || '', anh: t.anh || '', bai: b.so });
      });
    });
    return ra;
  }

  function paTrong() {
    var a = [];
    for (var i = 0; i < paSoTu; i++) a.push(null);
    return a;
  }

  function paBoMoi() {
    var kho = paKho();
    return {
      luot: (state.pa ? state.pa.luot : 0) + 1,
      bo: shuffle(kho).slice(0, paSoTu),
      ket: paTrong(),
      hien: false,
      de: null,
      tong: state.pa ? state.pa.tong : { hs: 0, dung: 0, tong: 0 }
    };
  }

  function paBatDau() {
    if (!paKho().length) return;
    state.game = 'phatam';
    state.pa = null;
    state.pa = paBoMoi();
    state.pa.tong = { hs: 0, dung: 0, tong: 0 };
    $('#lopTitle').textContent = TEST_TITLE.phatam;
    $('#lopSub').textContent = 'Phát âm · ' + paBai.filter(function (b) { return paChon[b.so]; })
      .map(function (b) { return 'Bài ' + b.so; }).join(' · ');
    resetScores();
    renderScorebar();
    state.timer.secs = 30;
    $('#lopScorebar').hidden = false;
    resetTimer();
    $('#lopSetup').hidden = true;
    $('#lopPlay').hidden = false;
    paVe();
  }

  /* ---- mot luot: ba tu cho mot hoc sinh ---- */
  function paVe() {
    var d = state.pa;
    if (!d) return;
    var t = d.tong;
    var xong = d.ket.every(function (x) { return x !== null; });
    var dungLuot = d.ket.filter(function (x) { return x === true; }).length;

    var head =
      '<div class="lop-stage-head">' +
        '<span>Lượt <b>' + d.luot + '</b> · gọi <b>một em</b> lên kiểm tra <b>' + d.bo.length + ' từ</b></span>' +
        '<span class="lop-pa-tong">Đã kiểm <b>' + t.hs + '</b> em · đúng <b>' + t.dung + '/' + t.tong + '</b> từ</span>' +
      '</div>';

    var the = d.bo.map(function (w, i) {
      var k = d.ket[i];
      var hienPy = paKieu === 'doc' || d.hien;
      var o = '';
      if (paKieu === 'chon') {
        if (!d.de) d.de = d.bo.map(function (x) { return window.PhatAmDe.raDe(x.py, 4); });
        var de = d.de[i];
        o = '<div class="lop-pa-lua nho">' + de.luaChon.map(function (x, j) {
          return '<span class="lop-pa-o' + (d.hien ? (j === de.dung ? ' dung' : ' mo') : '') + '">' +
            '<b>' + 'ABCD'[j] + '</b>' + esc(x) + '</span>';
        }).join('') + '</div>';
      } else {
        // Tranh cat tu chinh slide — co thi hien, khong co thi thoi.
        o = (w.anh ? '<img class="lop-pa-anh" src="' + esc(w.anh) + '" alt="" loading="lazy">' : '') +
            '<div class="lop-pa-py' + (hienPy ? '' : ' an') + '">' +
              (hienPy ? esc(w.py) : '· · ·') + '</div>' +
            '<div class="lop-pa-zh2">' +
              (d.hien ? esc([w.zh, w.vn].filter(Boolean).join(' · ')) || '&nbsp;' : '&nbsp;') + '</div>';
      }
      return '<div class="lop-pa-the' + (k === true ? ' dung' : k === false ? ' sai' : '') + '">' +
        '<span class="lop-pa-stt">' + (i + 1) + '</span>' + o +
        '<div class="lop-pa-cham">' +
          '<button type="button" class="lop-pa-v" data-cham="' + i + '" data-ok="1">✓</button>' +
          '<button type="button" class="lop-pa-x" data-cham="' + i + '" data-ok="0">✗</button>' +
        '</div>' +
      '</div>';
    }).join('');

    $('#lopStage').innerHTML = head +
      '<div class="lop-pa-bo">' + the + '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act ghost" id="lopPaPlay">🔊 Đọc 3 từ</button>' +
        '<button type="button" class="lop-act ghost" id="lopPaHien">' +
          (d.hien ? 'Ẩn đáp án' : 'Hiện đáp án') + '</button>' +
        '<button type="button" class="lop-act" id="lopPaNext">' +
          (xong ? 'Em này ' + dungLuot + '/' + d.bo.length + ' — gọi em tiếp theo →' : 'Em tiếp theo →') + '</button>' +
        '<button type="button" class="lop-act ghost" id="lopPaKetThuc">Xong — xem tổng kết</button>' +
      '</div>';

    $all('[data-cham]').forEach(function (b) {
      b.addEventListener('click', function () {
        var i = +b.getAttribute('data-cham');
        var ok = b.getAttribute('data-ok') === '1';
        d.ket[i] = (d.ket[i] === ok) ? null : ok;   // bam lai lan nua thi bo cham
        paVe();
      });
    });
    $('#lopPaPlay').addEventListener('click', function () { paDocBo(d.bo); });
    $('#lopPaHien').addEventListener('click', function () { d.hien = !d.hien; paVe(); });
    $('#lopPaNext').addEventListener('click', paLuotSau);
    $('#lopPaKetThuc').addEventListener('click', paTongKet);

    if (paKieu !== 'doc' && !d.daDoc) { d.daDoc = true; paDocBo(d.bo); }
  }

  /* Doc lan luot ba tu, cach nhau mot nhip cho hoc sinh kip viet. */
  function paDocBo(bo) {
    bo.forEach(function (w, i) {
      setTimeout(function () { speakZh(w.zh || w.py); }, i * 1800);
    });
  }

  function paLuotSau() {
    var d = state.pa;
    var cham = d.ket.filter(function (x) { return x !== null; });
    if (cham.length) {
      d.tong.hs++;
      d.tong.dung += d.ket.filter(function (x) { return x === true; }).length;
      d.tong.tong += cham.length;
    }
    state.pa = paBoMoi();
    paVe();
    resetTimer();
  }

  function paTongKet() {
    var d = state.pa;
    var cham = d.ket.filter(function (x) { return x !== null; });
    if (cham.length) {
      d.tong.hs++;
      d.tong.dung += d.ket.filter(function (x) { return x === true; }).length;
      d.tong.tong += cham.length;
      d.ket = paTrong();
    }
    var t = d.tong;
    var pt = t.tong ? Math.round(t.dung / t.tong * 100) : 0;
    $('#lopStage').innerHTML =
      '<div class="lop-stage-head"><span>Tổng kết buổi kiểm tra phát âm</span></div>' +
      '<div class="lop-pa-hop">' +
        '<div class="lop-pa-tk">' + t.hs + '</div>' +
        '<p class="lop-pa-nhac">em đã kiểm tra · đúng <b>' + t.dung + '/' + t.tong + '</b> từ (' + pt + '%)</p>' +
      '</div>' +
      '<div class="lop-stage-actions">' +
        '<button type="button" class="lop-act" id="lopPaLai">Kiểm tra tiếp →</button>' +
      '</div>';
    $('#lopPaLai').addEventListener('click', function () {
      state.pa = paBoMoi();
      state.pa.tong = t;
      paVe();
      resetTimer();
    });
  }

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
      '<div class="lop-abc-sentence' + (q.noBlank ? ' is-q' : '') + '">' + esc(q.pre) + (q.noBlank ? '' : '<span class="lop-blank">＿＿</span>') + esc(q.post) + '</div>' +
      hintHtml(q) +
      '<div class="lop-abc-opts">' + it.order.map(function (oi, i) {
        return '<div class="lop-abc-opt">' +
          '<span class="lop-abc-key" data-k="' + ABC[i] + '">' + ABC[i] + '</span>' +
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
            '<div class="lop-key-zh small">' + (q.noBlank ? esc(q.pre) + ' → <b>' + esc(q.options[q.answer]) + '</b>' :
              esc(q.pre) + '<b>' + esc(q.options[q.answer]) + '</b>' + esc(q.post)) + '</div>' +
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
    var kho = $('#lopPaperHard') && $('#lopPaperHard').checked;
    // De giay: goi y (truong hint) in kem o che do thuong, bo han o che do kho
    if (it.q.hint && !kho) c = (c ? c + ' — ' : '') + 'Gợi ý: ' + it.q.hint;
    if (!c || !kho) return c;
    if (it.t !== 'mc') return c;
    var han = c.match(/[一-鿿]/g) || [];
    var opts = it.q.options.join('');
    for (var k = 0; k < han.length; k++) if (opts.indexOf(han[k]) >= 0) return '';
    return c;
  }

  function paperQuestion(it, i) {
    var q = it.q, ctx = paperCtx(it), body;
    if (it.t === 'mc') {
      body = '<div class="ps-zh">' + esc(q.pre) + (q.noBlank ? '' : '<span class="ps-blank">＿＿＿</span>') + esc(q.post) + '</div>' +
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
    // Kiem tra phat am co bo chon bai rieng — mo bang chon truoc.
    if (kind === 'phatam') {
      var f = $('#lopPaField');
      f.hidden = false;
      f.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
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
    hsk1: 'HSK 1', hsk1v3: 'HSK 1 · 3.0', hsk2: 'HSK 2', hsk2v3: 'HSK 2 · 3.0', hsk3v3: 'HSK 3 · 3.0',
    hsk3: 'HSK 3', hsk4: 'HSK 4', hsk5: 'HSK 5', hsk6: 'HSK 6', yct: 'YCT'
  };

  var GAME_TITLE = {
    errfix: 'Bắt lỗi sai tiếp sức', abc: 'Giơ thẻ A / B / C', sort: 'Xếp câu bằng người',
    bingo: 'Bingo 3×3', guess: 'Nhìn hình đoán chữ', tiles: 'Lật ô đoán chữ', taboo: 'Bạn nói tôi đoán',
    trans: 'Dịch nhanh Việt → Trung', listen: 'Nghe nhanh chỉ chữ', hanzi: 'Đoán chữ qua bộ thủ',
    role: 'Đóng vai bài khoá', hv: 'Âm Hán–Việt đoán chữ', match: 'Nối nghĩa nhanh',
    chain: 'Nối từ 接龙', write: 'Thi viết bảng nhanh',
    tug: 'Kéo co tri thức', mine: 'Hộp bí mật', train: 'Đua tàu tri thức', nhip: 'Thi đua trên điện thoại'
  };
  var GAME_SECS = {
    errfix: 30, abc: 10, sort: 60, bingo: 30, guess: 20, tiles: 30, taboo: 60,
    trans: 60, listen: 15, hanzi: 30, role: 90, hv: 20, match: 45,
    chain: 20, write: 30, tug: 15, mine: 20, train: 20
  };
  var VOCAB_GAMES = {
    bingo: 1, guess: 1, tiles: 1, taboo: 1, trans: 1, listen: 1, hanzi: 1,
    role: 1, hv: 1, match: 1, chain: 1, write: 1
  };

  function startGame(game) {
    if (!VOCAB_GAMES[game]) {
      var n = game === 'abc' || MC_GAMES[game] ? pickedMcs().length : game === 'sort' ? pickedSorts().length : pickedJudges().length;
      if (!n || (game === 'errfix' && n < 3)) return;
    } else if (!pickedLabel()) return;

    state.game = game;
    $('#lopTitle').textContent = GAME_TITLE[game];
    $('#lopSub').textContent = (LEVEL_NAME[state.level] || '') + ' · ' + pickedLabel();
    if (!state.show || state.scores.length !== state.teams) { resetScores(); if (!state.show) resetFx(); }
    renderScorebar();
    paintShowBar();
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
    else if (game === 'tug') { dealTug(); renderTug(); }
    else if (game === 'mine') { dealMine(); renderMine(); }
    else if (game === 'train') { dealTrain(); renderTrain(); }
    else if (game === 'nhip') startNhip();
    else if (game === 'sort') { dealSort(); renderSort(); }
    else { dealRows(); renderErrfix(); }
  }
  function exitGame() {
    endShow();
    liveKetThuc(false);
    clearInterval(state.timer.id);
    state.timer.running = false;
    $('#lopPlay').hidden = true;
    $('#lopSetup').hidden = false;
    // Kiem tra phat am co bang chon bai rieng — quay ra thi ve dung bang
    // do va cuon toi noi, khong bat thay/co tim lai tu dau trang.
    if (state.game === 'phatam') {
      var pf = $('#lopPaField');
      pf.hidden = false;
      pf.scrollIntoView({ block: 'center' });
    }
  }

  /* ================= GAMESHOW: to co linh vat, chuoi thang, the x2, vong quay, 3 vong, buc trao giai =================
     Them khong khi thi dau cho moi tro choi: diem cua to luon hien o day, chung cho ca buoi hoc. */
  var TEAM_DEF = [
    { m: '🐉', n: 'Rồng Vàng', c: '#c9971c' },
    { m: '🐯', n: 'Hổ Lửa', c: '#d2452f' },
    { m: '🐼', n: 'Gấu Trúc', c: '#2f3b45' },
    { m: '🦊', n: 'Cáo Cam', c: '#e07a1f' },
    { m: '🐬', n: 'Cá Heo', c: '#2479b5' },
    { m: '🦚', n: 'Khổng Tước', c: '#23906a' }
  ];
  function teamName(i) { return (state.teamNames && state.teamNames[i]) || TEAM_DEF[i].n; }
  function teamColor(i) { return TEAM_DEF[i].c; }
  function teamMascot(i) { return TEAM_DEF[i].m; }

  // Hieu ung cham diem: chuoi thang, the x2, nhan doi o vong cuoi
  var fx = { last: -1, streak: 0, x2: {}, used: {}, bump: -1, float: null };
  function resetFx() { fx = { last: -1, streak: 0, x2: {}, used: {}, bump: -1, float: null }; }

  function sndFanfare() {
    [523, 659, 784, 1047].forEach(function (f, k) { tone(f, 0.22, 'triangle', 0.22, k * 0.13); });
    tone(1047, 0.9, 'sine', 0.18, 0.55); tone(1319, 0.9, 'sine', 0.12, 0.55);
  }
  function sndFire() { tone(660, 0.08, 'square', 0.12); tone(990, 0.08, 'square', 0.12, 0.08); tone(1320, 0.18, 'square', 0.12, 0.16); }

  function flashBanner(text, cls) {
    var b = document.createElement('div');
    b.className = 'lop-banner ' + (cls || '');
    b.textContent = text;
    document.body.appendChild(b);
    setTimeout(function () { b.classList.add('out'); }, 1300);
    setTimeout(function () { b.remove(); }, 1800);
  }

  /* ---- the cua cac to tren man hinh chuan bi: linh vat + ten sua duoc ---- */
  function renderTeamNames() {
    var box = $('#lopTeamNames');
    if (!box) return;
    box.innerHTML = '';
    for (var i = 0; i < state.teams; i++) {
      var row = document.createElement('label');
      row.className = 'lop-tn';
      row.style.setProperty('--tc', teamColor(i));
      row.innerHTML = '<span class="lop-tn-m">' + teamMascot(i) + '</span>' +
        '<input type="text" maxlength="18" data-tn="' + i + '" value="' + esc(teamName(i)) + '" aria-label="Tên tổ ' + (i + 1) + '">';
      box.appendChild(row);
    }
    $all('input[data-tn]', box).forEach(function (inp) {
      inp.addEventListener('input', function () {
        state.teamNames = state.teamNames || [];
        state.teamNames[parseInt(inp.getAttribute('data-tn'), 10)] = inp.value.trim();
        save();
      });
    });
  }

  /* ---- vong quay chon to ---- */
  function openWheel() {
    var n = state.teams, box = $('#lopFx');
    var seg = 360 / n, stops = [];
    for (var i = 0; i < n; i++) stops.push(teamColor(i) + ' ' + (i * seg) + 'deg ' + ((i + 1) * seg) + 'deg');
    var labels = '';
    for (var k = 0; k < n; k++) {
      var goc = (k * seg + seg / 2) * Math.PI / 180;
      labels += '<span class="lop-wheel-lb" style="left:' + (50 + 33 * Math.sin(goc)).toFixed(1) + '%;top:' + (50 - 33 * Math.cos(goc)).toFixed(1) + '%">' + teamMascot(k) + '</span>';
    }
    box.innerHTML = '<div class="lop-fx-card lop-wheel-card">' +
      '<div class="lop-wheel-wrap"><div class="lop-wheel-ptr">▼</div>' +
      '<div class="lop-wheel" id="lopWheelDisc" style="background:conic-gradient(' + stops.join(',') + ')">' + labels + '</div></div>' +
      '<div class="lop-wheel-res" id="lopWheelRes">Bấm “Quay” để chọn tổ trả lời</div>' +
      '<div class="lop-fx-actions"><button type="button" class="lop-act" id="lopWheelSpin">🎡 Quay</button>' +
      '<button type="button" class="lop-act ghost" id="lopFxClose">Đóng</button></div></div>';
    box.hidden = false;
    var angle = 0;
    $('#lopFxClose').addEventListener('click', closeFx);
    $('#lopWheelSpin').addEventListener('click', function () {
      var pick = Math.floor(Math.random() * n);
      // kim o dinh: quay de giua o "pick" ve 0deg
      var target = 360 * 5 + (360 - (pick * seg + seg / 2));
      angle = angle - (angle % 360) + target;
      var disc = $('#lopWheelDisc');
      disc.style.transform = 'rotate(' + angle + 'deg)';
      $('#lopWheelRes').textContent = '…';
      var ticks = 0, tid = setInterval(function () { sndTick(false); if (++ticks > 22) clearInterval(tid); }, 120);
      setTimeout(function () {
        clearInterval(tid);
        sndUp();
        var r = $('#lopWheelRes');
        r.innerHTML = '<b style="color:' + teamColor(pick) + '">' + teamMascot(pick) + ' ' + esc(teamName(pick)) + '</b> trả lời!';
      }, 3200);
    });
  }
  function closeFx() { var b = $('#lopFx'); b.hidden = true; b.innerHTML = ''; stopConfetti(); }

  /* ---- buc trao giai + phao giay ---- */
  var confetti = null;
  function startConfetti() {
    var cv = document.createElement('canvas');
    cv.className = 'lop-confetti';
    document.body.appendChild(cv);
    var ctx = cv.getContext('2d'), W = cv.width = innerWidth, H = cv.height = innerHeight;
    var colors = TEAM_DEF.map(function (t) { return t.c; }).concat(['#ffd166', '#ef476f', '#06d6a0']);
    var bits = [];
    for (var i = 0; i < 160; i++) bits.push({ x: Math.random() * W, y: -Math.random() * H, r: 4 + Math.random() * 6, c: colors[i % colors.length], v: 2 + Math.random() * 3, a: Math.random() * 6, s: (Math.random() - 0.5) * 0.2 });
    var stop = false;
    (function tick() {
      if (stop) return;
      ctx.clearRect(0, 0, W, H);
      bits.forEach(function (b) {
        b.y += b.v; b.x += Math.sin(b.a += 0.03) * 1.2;
        if (b.y > H + 10) { b.y = -10; b.x = Math.random() * W; }
        ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.a); ctx.fillStyle = b.c; ctx.fillRect(-b.r / 2, -b.r / 4, b.r, b.r / 2); ctx.restore();
      });
      requestAnimationFrame(tick);
    })();
    confetti = { el: cv, stop: function () { stop = true; cv.remove(); } };
  }
  function stopConfetti() { if (confetti) { confetti.stop(); confetti = null; } }

  function openAward() {
    clearInterval(state.timer.id); state.timer.running = false; paintTimer();
    var order = state.scores.map(function (s, i) { return { i: i, s: s }; }).sort(function (a, b) { return b.s - a.s; });
    var podium = [order[1], order[0], order[2]].filter(Boolean);
    var place = function (o) { return order.indexOf(o) + 1; };
    var box = $('#lopFx');
    box.innerHTML = '<div class="lop-fx-card lop-award-card">' +
      '<div class="lop-award-title">🏆 Bục vinh quang</div>' +
      '<div class="lop-podium">' + podium.map(function (o) {
        var p = place(o);
        return '<div class="lop-pod p' + p + '" style="--tc:' + teamColor(o.i) + '">' +
          '<div class="lop-pod-m">' + teamMascot(o.i) + '</div>' +
          '<div class="lop-pod-n">' + esc(teamName(o.i)) + '</div>' +
          '<div class="lop-pod-s">' + o.s + ' điểm</div>' +
          '<div class="lop-pod-col"><span>' + ['🥇', '🥈', '🥉'][p - 1] + '</span></div></div>';
      }).join('') + '</div>' +
      (order.length > 3 ? '<div class="lop-award-rest">' + order.slice(3).map(function (o, k) {
        return '<span>' + (k + 4) + '. ' + teamMascot(o.i) + ' ' + esc(teamName(o.i)) + ' — ' + o.s + '</span>';
      }).join('') + '</div>' : '') +
      '<div class="lop-fx-actions"><button type="button" class="lop-act" id="lopFxClose">Chơi tiếp</button>' +
      '<button type="button" class="lop-act ghost" id="lopAwardNew">Ván mới (xoá điểm)</button></div></div>';
    box.hidden = false;
    sndFanfare();
    startConfetti();
    $('#lopFxClose').addEventListener('click', closeFx);
    $('#lopAwardNew').addEventListener('click', function () { closeFx(); resetScores(); resetFx(); endShow(); renderScorebar(); });
  }

  /* ---- Gameshow 3 vong: tu chon tro hop voi bai da chon ---- */
  var SHOW_ROUNDS = [
    { ten: 'Vòng 1 · Khởi động', mo: 'Cả lớp cùng chơi, trả lời thật nhanh!', tro: ['abc', 'listen', 'match', 'hv', 'train'], mul: 1 },
    { ten: 'Vòng 2 · Tăng tốc', mo: 'Mỗi tổ cử đại diện — phối hợp để ghi điểm.', tro: ['sort', 'errfix', 'tiles', 'guess', 'hanzi', 'mine'], mul: 1 },
    { ten: 'Vòng 3 · Về đích', mo: 'Mọi điểm ở vòng này được NHÂN ĐÔI ×2!', tro: ['write', 'taboo', 'chain', 'tug'], mul: 2 }
  ];
  function troDuoc(g) {
    if (g === 'abc' || MC_GAMES[g]) return pickedMcs().length >= 4;
    if (g === 'sort') return pickedSorts().length >= 2;
    if (g === 'errfix') return pickedJudges().length >= 5;
    return !!pickedLabel();
  }
  function startShow() {
    if (!pickedLabel()) return;
    var plan = SHOW_ROUNDS.map(function (r) {
      var ok = shuffle(r.tro.filter(troDuoc));
      return { ten: r.ten, mo: r.mo, mul: r.mul, game: ok[0] || 'match' };
    });
    state.show = { plan: plan, idx: 0 };
    resetScores(); resetFx();
    showIntro();
  }
  function showIntro() {
    var sh = state.show, r = sh.plan[sh.idx];
    var box = $('#lopFx');
    box.innerHTML = '<div class="lop-fx-card lop-intro-card">' +
      '<div class="lop-intro-step">' + sh.plan.map(function (p, k) {
        return '<span class="' + (k < sh.idx ? 'done' : k === sh.idx ? 'on' : '') + '">' + (k + 1) + '</span>';
      }).join('<i></i>') + '</div>' +
      '<div class="lop-intro-ten">' + esc(r.ten) + '</div>' +
      '<div class="lop-intro-game">' + esc(GAME_TITLE[r.game] || '') + '</div>' +
      '<div class="lop-intro-mo">' + esc(r.mo) + '</div>' +
      '<div class="lop-intro-cd" id="lopIntroCd"></div>' +
      '<div class="lop-fx-actions"><button type="button" class="lop-act" id="lopIntroGo">Bắt đầu vòng này ▶</button></div></div>';
    box.hidden = false;
    sndFanfare();
    $('#lopIntroGo').addEventListener('click', function () {
      var cd = $('#lopIntroCd'), n = 3;
      this.disabled = true;
      cd.textContent = n; sndTick(true);
      var t = setInterval(function () {
        n--;
        if (n > 0) { cd.textContent = n; sndTick(true); return; }
        clearInterval(t); cd.textContent = '开始!'; sndUp();
        setTimeout(function () { closeFx(); startGame(r.game); }, 450);
      }, 700);
    });
  }
  function nextShowRound() {
    var sh = state.show;
    if (!sh) return;
    if (sh.idx >= sh.plan.length - 1) { openAward(); return; }
    sh.idx++;
    showIntro();
  }
  function endShow() { state.show = null; paintShowBar(); }
  function paintShowBar() {
    var sh = state.show, badge = $('#lopRound'), nx = $('#lopNextRound');
    if (!badge || !nx) return;
    badge.hidden = !sh; nx.hidden = !sh;
    if (sh) {
      var r = sh.plan[sh.idx];
      badge.textContent = (sh.idx + 1) + '/' + sh.plan.length + (r.mul > 1 ? ' · ×2' : '');
      badge.classList.toggle('x2', r.mul > 1);
      nx.textContent = sh.idx >= sh.plan.length - 1 ? '🏁 Trao giải' : 'Vòng tiếp ▶';
    }
  }

  /* ---- sap xep lai man hinh chuan bi: nhom tro choi + nhan thoi luong / cach choi ---- */
  var GAME_GROUPS = [
    { ten: '⚡ Khởi động nhanh — cả lớp cùng chơi', g: ['abc', 'listen', 'match', 'hv'] },
    { ten: '🏆 Đấu tổ kịch tính', g: ['tug', 'train', 'mine'] },
    { ten: '📱 Học sinh dùng điện thoại', g: ['nhip'] },
    { ten: '📚 Ôn từ vựng', g: ['bingo', 'guess', 'tiles', 'hanzi', 'chain'] },
    { ten: '🧩 Câu & ngữ pháp', g: ['errfix', 'sort', 'trans'] },
    { ten: '🎤 Nói – viết', g: ['taboo', 'role', 'write'] }
  ];
  var GAME_TAGS = {
    abc: ['3–5′', 'cả lớp'], listen: ['3′', '2 em đấu'], match: ['3′', 'theo tổ'], hv: ['3–5′', 'theo tổ'],
    bingo: ['5–7′', 'cá nhân'], guess: ['3–5′', 'theo tổ'], tiles: ['5′', 'theo tổ'], hanzi: ['5′', 'theo tổ'], chain: ['3–5′', 'theo tổ'],
    errfix: ['5′', 'đại diện'], sort: ['5–7′', 'vận động'], trans: ['5′', 'đại diện'],
    taboo: ['5′', 'nói'], role: ['5–7′', 'đóng vai'], write: ['5′', 'lên bảng'],
    nhip: ['5–10′', 'quét mã QR', 'tự làm'], tug: ['5′', '2 tổ đấu'], train: ['5–7′', 'các tổ đua'], mine: ['5–7′', 'theo lượt']
  };
  function decorateSetup() {
    var grid = $('.lop-games');
    if (!grid || grid.getAttribute('data-ok')) return;
    grid.setAttribute('data-ok', '1');
    var cards = {};
    $all('.lop-game-card', grid).forEach(function (c) { cards[c.getAttribute('data-game')] = c; });
    grid.innerHTML = '';
    GAME_GROUPS.forEach(function (grp) {
      var h = document.createElement('div');
      h.className = 'lop-group';
      h.textContent = grp.ten;
      grid.appendChild(h);
      grp.g.forEach(function (k) {
        var c = cards[k];
        if (!c) return;
        var tags = GAME_TAGS[k] || [];
        if (tags.length && !c.querySelector('.lop-game-tags')) {
          var t = document.createElement('span');
          t.className = 'lop-game-tags';
          t.innerHTML = tags.map(function (x) { return '<i>' + esc(x) + '</i>'; }).join('');
          c.appendChild(t);
        }
        grid.appendChild(c);
        delete cards[k];
      });
    });
    Object.keys(cards).forEach(function (k) { grid.appendChild(cards[k]); });
  }

  /* ---------------- khoi tao ---------------- */
  function init() {
    restore();
    // Khi vao man choi: doi nen sang san khau mau (body.lop-playing)
    var playEl = $('#lopPlay');
    if (playEl && window.MutationObserver) {
      var syncPlaying = function () { document.body.classList.toggle('lop-playing', !playEl.hidden); };
      new MutationObserver(syncPlaying).observe(playEl, { attributes: true, attributeFilter: ['hidden'] });
      syncPlaying();
    }
    decorateSetup();
    renderTeamNames();
    $('#lopShow').addEventListener('click', startShow);
    $('#lopWheel').addEventListener('click', openWheel);
    $('#lopAward').addEventListener('click', openAward);
    $('#lopNextRound').addEventListener('click', nextShowRound);
    $('#lopLevel').value = state.level;
    $all('#lopTeamPick button').forEach(function (b) {
      b.classList.toggle('active', parseInt(b.getAttribute('data-n'), 10) === state.teams);
      b.addEventListener('click', function () {
        state.teams = parseInt(b.getAttribute('data-n'), 10);
        $all('#lopTeamPick button').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        renderTeamNames();
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
    paDoc();
    paVeBai();
    $all('#lopPaKieu button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-pk') === paKieu);
      b.addEventListener('click', function () {
        paKieu = b.getAttribute('data-pk');
        $all('#lopPaKieu button').forEach(function (x) { x.classList.toggle('on', x === b); });
        paLuu();
      });
    });
    $('#lopPaAll').addEventListener('click', function () {
      paBai.forEach(function (b) { paChon[b.so] = 1; });
      paVeBai(); paLuu();
    });
    $('#lopPaNone').addEventListener('click', function () {
      paChon = {}; paVeBai(); paLuu();
    });
    $all('#lopPaNguon button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-pn') === paNguon);
      b.addEventListener('click', function () {
        paNguon = b.getAttribute('data-pn');
        $all('#lopPaNguon button').forEach(function (x) { x.classList.toggle('on', x === b); });
        paDem(); paLuu();
      });
    });
    $all('#lopPaSoTu button').forEach(function (b) {
      b.classList.toggle('on', +b.getAttribute('data-ps') === paSoTu);
      b.addEventListener('click', function () {
        paSoTu = +b.getAttribute('data-ps');
        $all('#lopPaSoTu button').forEach(function (x) { x.classList.toggle('on', x === b); });
        var g = $('#lopPaGiaiSo');
        if (g) g.textContent = paSoTu;
        paDem(); paLuu();
      });
    });
    var g0 = $('#lopPaGiaiSo');
    if (g0) g0.textContent = paSoTu;
    $('#lopPaStart').addEventListener('click', paBatDau);

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
        else if (MC_GAMES[g]) mcReveal();
        else revealAll();
        return;
      }
      // Dua tau: phim 1..6 = to do tra loi dung
      if (g === 'train' && /^[1-6]$/.test(e.key)) { trainOk(parseInt(e.key, 10) - 1); return; }
      if (e.code === 'ArrowRight' || e.code === 'Enter') {
        if (g === 'abc') { e.preventDefault(); nextAbc(); }
        else if (g === 'tug') { e.preventDefault(); tugNext(); }
        else if (g === 'train') { e.preventDefault(); trainNext(); }
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
      if (e.key === 'g' || e.key === 'G') { toggleHint(); return; }
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
