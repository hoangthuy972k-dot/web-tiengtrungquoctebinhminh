(function () {
  'use strict';

  var STORAGE_KEYS = {
    user: 'hyv_user',
    learned: 'hyv_learned_words',
    streak: 'hyv_streak',
    sessions: 'hyv_sessions',
    accuracy: 'hyv_accuracy',
    pinyinHidden: 'hyv_pinyin_hidden'
  };

  var QUESTIONS_PER_SESSION = 8;

  var state = {
    practiceLevel: 'hsk1',
    mode: 'mcq-meaning',
    activeLesson: null,
    session: null
  };

  /* ---------------- Utilities ---------------- */

  function $(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function $all(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function sample(arr, n) {
    return shuffle(arr).slice(0, n);
  }

  function readJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* localStorage unavailable (private mode, quota) - fail silently for demo mode */
    }
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function dayDiff(a, b) {
    var d1 = new Date(a + 'T00:00:00');
    var d2 = new Date(b + 'T00:00:00');
    return Math.round((d2 - d1) / 86400000);
  }

  var toastTimer;
  function showToast(message) {
    var toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 2600);
  }

  /* ---------------- Speech: text-to-speech playback + speech recognition ---------------- */
  /*
   * Audio is generated on-device via the browser's Web Speech API (no audio
   * files to host). Playback quality depends on the zh-CN voice installed on
   * the visitor's OS/browser. Recognition (for speaking exercises) uses
   * webkitSpeechRecognition where available and degrades to a self-check
   * flow ("Tôi đã luyện xong") when the browser doesn't support it.
   */

  var zhVoice = null;
  function pickZhVoice() {
    if (!window.speechSynthesis) return null;
    var voices = window.speechSynthesis.getVoices();
    return voices.filter(function (v) { return /^zh/i.test(v.lang); })[0] || null;
  }
  if (window.speechSynthesis) {
    zhVoice = pickZhVoice();
    window.speechSynthesis.onvoiceschanged = function () { zhVoice = pickZhVoice(); };
  }

  function speakText(text) {
    if (!window.speechSynthesis) {
      showToast('Trình duyệt của bạn chưa hỗ trợ phát âm.');
      return;
    }
    window.speechSynthesis.cancel();
    var utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-CN';
    utter.rate = 0.9;
    if (zhVoice) utter.voice = zhVoice;
    window.speechSynthesis.speak(utter);
  }

  function makeSpeakButton(text, label) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'speak-btn';
    btn.setAttribute('aria-label', label || 'Nghe phát âm');
    btn.innerHTML = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18 6a9 9 0 0 1 0 12"/></svg>';
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      speakText(text);
    });
    return btn;
  }

  var SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  function createRecognizer(onResult, onError) {
    if (!SpeechRecognitionCtor) return null;
    var rec = new SpeechRecognitionCtor();
    rec.lang = 'zh-CN';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = function (e) {
      var transcript = e.results[0][0].transcript;
      onResult(transcript);
    };
    rec.onerror = function (e) { if (onError) onError(e.error); };
    return rec;
  }

  /* ---------------- Header / nav ---------------- */

  function initNav() {
    var toggle = $('#navToggle');
    var panel = $('#mobilePanel');
    toggle.addEventListener('click', function () {
      var isOpen = panel.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    $all('.mobile-panel a').forEach(function (link) {
      link.addEventListener('click', function () {
        panel.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initSearch() {
    function wireForm(formId, inputId) {
      var form = $(formId);
      var input = $(inputId);
      if (!form) return;
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        applyLessonFilter(input.value);
        document.getElementById('levels').scrollIntoView({ behavior: 'smooth' });
      });
      input.addEventListener('input', function () {
        applyLessonFilter(input.value);
      });
    }
    wireForm('#lessonSearchForm', '#lessonSearch');
    wireForm('#lessonSearchFormMobile', '#lessonSearchMobile');
  }

  function applyLessonFilter(query) {
    var q = query.trim().toLowerCase();
    var cards = $all('.level-card');
    var anyVisible = false;
    cards.forEach(function (card) {
      var haystack = card.getAttribute('data-search') || '';
      var match = !q || haystack.indexOf(q) !== -1;
      card.style.display = match ? '' : 'none';
      if (match) anyVisible = true;
    });
    var grid = $('#levelGrid');
    var emptyMsg = $('#levelEmptyMsg');
    if (!anyVisible) {
      if (!emptyMsg) {
        emptyMsg = document.createElement('p');
        emptyMsg.id = 'levelEmptyMsg';
        emptyMsg.style.color = 'var(--color-gray-600)';
        emptyMsg.textContent = 'Không tìm thấy bài học phù hợp. Thử từ khoá khác.';
        grid.parentNode.appendChild(emptyMsg);
      }
    } else if (emptyMsg) {
      emptyMsg.remove();
    }
  }

  /* ---------------- Level cards ---------------- */

  var LEVEL_ICON_CLASS = { hsk1: 'is-red', hsk2: 'is-gold', hsk3: 'is-red', hsk4: 'is-gold', yct: 'is-red' };

  function renderLevelCards() {
    var grid = $('#levelGrid');
    grid.innerHTML = '';
    APP_DATA.levels.forEach(function (level) {
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'level-card';
      card.setAttribute('data-level', level.id);
      card.setAttribute('data-search', (level.name + ' ' + level.subtitle + ' ' + level.description).toLowerCase());
      card.innerHTML =
        '<div class="level-badge ' + LEVEL_ICON_CLASS[level.id] + ' hanzi">' + (level.id === 'yct' ? '儿' : level.name.replace('HSK ', '')) + '</div>' +
        '<div>' +
          '<h3>' + level.name + '</h3>' +
          '<span class="level-sub">' + level.subtitle + '</span>' +
        '</div>' +
        '<p>' + level.description + '</p>' +
        '<div class="level-meta">' +
          '<div><dt>' + level.totalLessons + '</dt><dd>Bài học</dd></div>' +
          '<div><dt>' + level.totalVocab + '</dt><dd>Từ vựng</dd></div>' +
        '</div>' +
        '<span class="level-card-cta">Luyện tập ngay ' +
          '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
        '</span>';
      card.addEventListener('click', function () {
        setPracticeLevel(level.id);
        document.getElementById('practice').scrollIntoView({ behavior: 'smooth' });
      });
      grid.appendChild(card);
    });
  }

  /* ---------------- HSK2 lesson syllabus ---------------- */

  function getLessonById(lessonId) {
    var lessons = (APP_DATA.lessons && APP_DATA.lessons.hsk2) || [];
    return lessons.filter(function (l) { return l.id === lessonId; })[0] || null;
  }

  function renderLessonList() {
    var wrap = $('#lessonList');
    if (!wrap) return;
    var lessons = (APP_DATA.lessons && APP_DATA.lessons.hsk2) || [];
    wrap.innerHTML = '';

    lessons.forEach(function (lesson, idx) {
      var item = document.createElement('details');
      item.className = 'lesson-item';
      if (idx === 0) item.open = true;

      var dialoguesHtml = (lesson.dialogues || []).map(function (d) {
        var linesHtml = d.lines.map(function (line) {
          return '<div class="dialogue-line is-' + line.speaker.toLowerCase() + '">' +
            '<span class="dialogue-speaker">' + line.speaker + '</span>' +
            '<div class="dialogue-bubble">' +
              '<p class="hanzi">' + line.hanzi + ' <button type="button" class="speak-btn speak-btn-inline" data-speak="' + line.hanzi + '" aria-label="Nghe câu này"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true" width="14" height="14"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg></button></p>' +
              '<p class="pinyin">' + line.pinyin + '</p>' +
              '<p class="vi">' + line.vi + '</p>' +
            '</div>' +
          '</div>';
        }).join('');
        return '<div class="dialogue-block"><h5>' + d.place + '</h5>' +
          (d.scene ? '<p class="dialogue-scene">' + d.scene + '</p>' : '') +
          linesHtml + '</div>';
      }).join('');

      var grammarHtml = lesson.grammar.map(function (g) {
        var formulaHtml = g.formula ? '<code class="grammar-formula">' + g.formula + '</code>' : '';
        var examplesHtml = '';
        if (g.examples) {
          examplesHtml = '<ul class="grammar-examples">' + g.examples.map(function (ex) {
            return '<li><span class="hanzi">' + ex.hanzi + '</span><span class="pinyin">' + ex.pinyin + '</span><span class="vi">' + ex.vi + '</span></li>';
          }).join('') + '</ul>';
        } else if (g.qaExamples) {
          examplesHtml = '<ul class="grammar-examples grammar-qa">' + g.qaExamples.map(function (ex) {
            return '<li>' +
              '<span class="hanzi">' + ex.q.hanzi + ' – ' + ex.a.hanzi + '</span>' +
              '<span class="pinyin">' + ex.q.pinyin + ' – ' + ex.a.pinyin + '</span>' +
              '<span class="vi">' + ex.vi + '</span>' +
            '</li>';
          }).join('') + '</ul>';
        }
        return '<li><strong class="hanzi">' + g.term + '</strong>' + formulaHtml + '<p class="grammar-note">' + g.note + '</p>' + examplesHtml + '</li>';
      }).join('');

      var vocabRowsHtml = lesson.vocab.map(function (w) {
        return '<tr>' +
          '<td class="hanzi">' + w.hanzi + ' <button type="button" class="speak-btn speak-btn-inline" data-speak="' + w.hanzi + '" aria-label="Nghe phát âm ' + w.hanzi + '"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true" width="14" height="14"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg></button></td>' +
          '<td class="pinyin-cell">' + w.pinyin + '</td>' +
          '<td>' + (w.pos || '') + '</td>' +
          '<td>' + w.meaning + '</td>' +
        '</tr>';
      }).join('');
      var vocabHtml = '<div class="table-scroll"><table class="vocab-table">' +
        '<thead><tr><th>Chữ Hán</th><th>Phiên âm</th><th>Từ loại</th><th>Nghĩa tiếng Việt</th></tr></thead>' +
        '<tbody>' + vocabRowsHtml + '</tbody></table></div>';

      var mistakesHtml = '';
      if (lesson.commonMistakes && lesson.commonMistakes.length) {
        mistakesHtml = '<div class="lesson-block-full mistakes-block">' +
          '<h4>⚠ Lỗi thường gặp của học sinh Việt</h4>' +
          '<ul class="mistakes-list">' + lesson.commonMistakes.map(function (m) {
            return '<li><span class="wrong">✗ ' + m.wrong + '</span><span class="right">✓ ' + m.right + '</span><p>' + m.note + '</p></li>';
          }).join('') + '</ul>' +
        '</div>';
      }

      var navId = lesson.id;
      item.innerHTML =
        '<summary class="lesson-summary">' +
          '<span class="lesson-num">' + lesson.number + '</span>' +
          '<div>' +
            '<h3>' + lesson.title + '</h3>' +
            (lesson.titleHanzi ? '<span class="lesson-title-hanzi hanzi">' + lesson.titleHanzi + ' · ' + lesson.titlePinyin + '</span>' : '') +
          '</div>' +
          '<svg class="icon chevron" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><polyline points="6 9 12 15 18 9"/></svg>' +
        '</summary>' +
        '<div class="lesson-body lesson-body-full">' +
          '<nav class="lesson-quicknav">' +
            '<a href="#' + navId + '-baikhoa">📖 Bài khoá</a>' +
            '<a href="#' + navId + '-tumoi">🀄 Từ mới</a>' +
            '<a href="#' + navId + '-nguphap">✏️ Ngữ pháp</a>' +
            '<a href="#' + navId + '-baitap">🎯 Bài tập</a>' +
          '</nav>' +
          (dialoguesHtml ? '<div class="lesson-block-full" id="' + navId + '-baikhoa"><h4>Bài khoá</h4><div class="dialogue-grid">' + dialoguesHtml + '</div></div>' : '') +
          '<div class="lesson-block-full" id="' + navId + '-tumoi"><h4>Từ mới (' + lesson.vocab.length + ' từ)</h4>' + vocabHtml + '</div>' +
          '<div class="lesson-block-full" id="' + navId + '-nguphap"><h4>Ngữ pháp trọng tâm</h4><ul class="lesson-grammar-list">' + grammarHtml + '</ul></div>' +
          mistakesHtml +
          '<div class="lesson-block-full" id="' + navId + '-baitap">' +
            '<h4>Bài tập theo cấp độ</h4>' +
            '<div class="tiered-exercises" id="tiered-' + navId + '"></div>' +
          '</div>' +
          '<div class="lesson-cta-row">' +
            '<button class="btn btn-primary lesson-practice-btn" type="button" data-lesson-id="' + lesson.id + '">' +
              'Luyện tập nhanh (trắc nghiệm ngẫu nhiên)' +
            '</button>' +
            (lesson.fullPageUrl ? '<a class="btn btn-outline" href="' + lesson.fullPageUrl + '" target="_blank" rel="noopener">Xem trang bài học đầy đủ ↗</a>' : '') +
          '</div>' +
        '</div>';

      wrap.appendChild(item);
      renderTieredExercises($('#tiered-' + navId, item), lesson);
    });

    wrap.addEventListener('click', function (e) {
      var link = e.target.closest ? e.target.closest('.lesson-quicknav a') : null;
      if (link) {
        e.preventDefault();
        var target = document.getElementById(link.getAttribute('href').slice(1));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      var speakBtn = e.target.closest ? e.target.closest('.speak-btn[data-speak]') : null;
      if (speakBtn) {
        e.preventDefault();
        speakText(speakBtn.getAttribute('data-speak'));
        return;
      }
      var btn = e.target.closest ? e.target.closest('.lesson-practice-btn') : null;
      if (!btn) return;
      startLessonPractice(btn.getAttribute('data-lesson-id'));
    });
  }

  /* ---------------- Tiered lesson exercises (Cấp 1/2/3, batch "Kiểm tra") ---------------- */

  function buildQuizActions(onCheck, onReset) {
    var bar = document.createElement('div');
    bar.className = 'quiz-actions';

    var checkBtn = document.createElement('button');
    checkBtn.type = 'button';
    checkBtn.className = 'btn btn-primary btn-sm';
    checkBtn.textContent = 'Kiểm tra';

    var retryBtn = document.createElement('button');
    retryBtn.type = 'button';
    retryBtn.className = 'btn btn-outline btn-sm';
    retryBtn.textContent = 'Làm lại';

    var scoreSpan = document.createElement('span');
    scoreSpan.className = 'quiz-score';

    checkBtn.addEventListener('click', function () {
      var result = onCheck();
      scoreSpan.textContent = 'Đúng ' + result.correct + '/' + result.total + ' câu';
      scoreSpan.className = 'quiz-score is-visible ' +
        (result.correct === result.total ? 'is-good' : result.correct === 0 ? 'is-bad' : 'is-mid');
    });
    retryBtn.addEventListener('click', function () {
      onReset();
      scoreSpan.textContent = '';
      scoreSpan.className = 'quiz-score';
    });

    bar.appendChild(checkBtn);
    bar.appendChild(retryBtn);
    bar.appendChild(scoreSpan);
    return bar;
  }

  function renderListeningMcqBlock(block) {
    var wrap = document.createElement('div');
    wrap.className = 'exercise-block';
    wrap.innerHTML = '<h5>' + block.title + '</h5>';

    var body = document.createElement('div');
    body.className = 'listening-rows';
    var rows = [];

    block.items.forEach(function (item, i) {
      var row = document.createElement('div');
      row.className = 'listening-row';

      var head = document.createElement('div');
      head.className = 'listening-head';
      head.innerHTML = '<span class="listening-num">' + (i + 1) + '</span>';
      head.appendChild(makeSpeakButton(item.audioText, 'Nghe câu hỏi ' + (i + 1)));

      var optWrap = document.createElement('div');
      optWrap.className = 'options-grid listening-options';
      var opts = shuffle(item.options);
      var btns = opts.map(function (opt) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'option-btn hanzi';
        b.textContent = opt;
        b.addEventListener('click', function () {
          btns.forEach(function (bb) { bb.classList.remove('is-picked'); });
          b.classList.add('is-picked');
          optWrap.dataset.selected = opt;
        });
        optWrap.appendChild(b);
        return b;
      });

      row.appendChild(head);
      row.appendChild(optWrap);
      body.appendChild(row);
      rows.push({ item: item, optWrap: optWrap, btns: btns, row: row });
    });

    wrap.appendChild(body);
    var actions = buildQuizActions(function () {
      var correct = 0;
      rows.forEach(function (r) {
        var sel = r.optWrap.dataset.selected;
        var ok = sel === r.item.answer;
        r.row.classList.remove('is-correct', 'is-wrong');
        if (sel) r.row.classList.add(ok ? 'is-correct' : 'is-wrong');
        if (ok) correct++;
      });
      return { correct: correct, total: rows.length };
    }, function () {
      rows.forEach(function (r) {
        r.btns.forEach(function (b) { b.classList.remove('is-picked'); });
        r.row.classList.remove('is-correct', 'is-wrong');
        delete r.optWrap.dataset.selected;
      });
    });
    wrap.appendChild(actions);
    return wrap;
  }

  function renderListeningFillBlock(block) {
    var wrap = document.createElement('div');
    wrap.className = 'exercise-block';
    wrap.innerHTML = '<h5>' + block.title + '</h5>';

    var body = document.createElement('div');
    body.className = 'choose2-rows';
    var rows = [];

    block.items.forEach(function (item, i) {
      var row = document.createElement('div');
      row.className = 'choose2-row';

      var sentEl = document.createElement('p');
      sentEl.className = 'choose2-sentence hanzi';
      sentEl.textContent = (i + 1) + '. ' + item.display;
      sentEl.prepend(makeSpeakButton(item.audioText, 'Nghe câu đầy đủ'));

      var btnWrap = document.createElement('div');
      btnWrap.className = 'choose2-btns';
      var btns = item.choices.map(function (choice) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'choose2-btn hanzi';
        b.textContent = choice;
        b.addEventListener('click', function () {
          btns.forEach(function (bb) { bb.classList.remove('is-picked'); });
          b.classList.add('is-picked');
          btnWrap.dataset.selected = choice;
        });
        btnWrap.appendChild(b);
        return b;
      });

      row.appendChild(sentEl);
      row.appendChild(btnWrap);
      body.appendChild(row);
      rows.push({ item: item, btnWrap: btnWrap, btns: btns, row: row });
    });

    wrap.appendChild(body);
    var actions = buildQuizActions(function () {
      var correct = 0;
      rows.forEach(function (r) {
        var sel = r.btnWrap.dataset.selected;
        var ok = sel === r.item.answer;
        r.row.classList.remove('is-correct', 'is-wrong');
        if (sel) r.row.classList.add(ok ? 'is-correct' : 'is-wrong');
        if (ok) correct++;
      });
      return { correct: correct, total: rows.length };
    }, function () {
      rows.forEach(function (r) {
        r.btns.forEach(function (b) { b.classList.remove('is-picked'); });
        r.row.classList.remove('is-correct', 'is-wrong');
        delete r.btnWrap.dataset.selected;
      });
    });
    wrap.appendChild(actions);
    return wrap;
  }

  function renderWordOrderBlock(block) {
    var wrap = document.createElement('div');
    wrap.className = 'exercise-block';
    wrap.innerHTML = '<h5>' + block.title + '</h5>';

    var body = document.createElement('div');
    body.className = 'word-order-rows';
    var rows = [];

    block.items.forEach(function (item, i) {
      var row = document.createElement('div');
      row.className = 'word-order-row';

      var label = document.createElement('p');
      label.className = 'word-order-label';
      label.innerHTML = '<span>' + (i + 1) + '. Nghe và sắp xếp:</span>';
      label.appendChild(makeSpeakButton(item.audioText, 'Nghe câu ' + (i + 1)));

      var answerZone = document.createElement('div');
      answerZone.className = 'sentence-build-answer';
      var tokenZone = document.createElement('div');
      tokenZone.className = 'sentence-build-tokens';

      var shuffled = shuffle(item.tokens);
      var picked = [];

      function renderTokens() {
        tokenZone.innerHTML = '';
        shuffled.forEach(function (token, idx) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'token-btn hanzi';
          btn.textContent = token;
          var used = picked.indexOf(idx) !== -1;
          btn.disabled = used;
          if (used) btn.classList.add('is-picked');
          btn.addEventListener('click', function () {
            picked.push(idx);
            renderTokens();
            renderAnswer();
          });
          tokenZone.appendChild(btn);
        });
      }
      function renderAnswer() {
        answerZone.innerHTML = '';
        picked.forEach(function (idx, pos) {
          var chip = document.createElement('button');
          chip.type = 'button';
          chip.className = 'token-btn hanzi is-picked';
          chip.textContent = shuffled[idx];
          chip.addEventListener('click', function () {
            picked.splice(pos, 1);
            renderTokens();
            renderAnswer();
          });
          answerZone.appendChild(chip);
        });
      }
      renderTokens();
      renderAnswer();

      row.appendChild(label);
      row.appendChild(answerZone);
      row.appendChild(tokenZone);
      body.appendChild(row);
      rows.push({
        item: item,
        row: row,
        getPicked: function () { return picked.map(function (idx) { return shuffled[idx]; }); },
        reset: function () { picked = []; renderTokens(); renderAnswer(); }
      });
    });

    wrap.appendChild(body);
    var actions = buildQuizActions(function () {
      var correct = 0;
      rows.forEach(function (r) {
        var built = r.getPicked();
        var ok = built.length === r.item.tokens.length && built.every(function (t, i) { return t === r.item.tokens[i]; });
        r.row.classList.remove('is-correct', 'is-wrong');
        r.row.classList.add(ok ? 'is-correct' : 'is-wrong');
        if (ok) correct++;
      });
      return { correct: correct, total: rows.length };
    }, function () {
      rows.forEach(function (r) {
        r.reset();
        r.row.classList.remove('is-correct', 'is-wrong');
      });
    });
    wrap.appendChild(actions);
    return wrap;
  }

  function renderLineOrderBlock(block) {
    var wrap = document.createElement('div');
    wrap.className = 'exercise-block';
    wrap.innerHTML = '<h5>' + block.title + '</h5>' + (block.hint ? '<p class="line-order-hint">' + block.hint + '</p>' : '');

    var answerZone = document.createElement('div');
    answerZone.className = 'line-order-answer';
    var tokenZone = document.createElement('div');
    tokenZone.className = 'line-order-tokens';

    var shuffled = shuffle(block.lines);
    var picked = [];

    function renderTokens() {
      tokenZone.innerHTML = '';
      shuffled.forEach(function (line, idx) {
        var used = picked.indexOf(idx) !== -1;
        var item = document.createElement('div');
        item.className = 'line-token' + (used ? ' is-picked is-disabled' : '');
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', used ? '-1' : '0');
        var hanziSpan = document.createElement('span');
        hanziSpan.className = 'hanzi';
        hanziSpan.textContent = line.hanzi;
        item.appendChild(hanziSpan);
        item.appendChild(makeSpeakButton(line.hanzi, 'Nghe câu này'));
        if (!used) {
          var pick = function () { picked.push(idx); renderTokens(); renderAnswer(); };
          item.addEventListener('click', pick);
          item.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
          });
        }
        tokenZone.appendChild(item);
      });
    }
    function renderAnswer() {
      answerZone.innerHTML = '';
      picked.forEach(function (idx, pos) {
        var chip = document.createElement('div');
        chip.className = 'line-token is-picked';
        chip.setAttribute('role', 'button');
        chip.setAttribute('tabindex', '0');
        var numSpan = document.createElement('span');
        numSpan.className = 'line-order-num';
        numSpan.textContent = pos + 1;
        var hanziSpan = document.createElement('span');
        hanziSpan.className = 'hanzi';
        hanziSpan.textContent = shuffled[idx].hanzi;
        chip.appendChild(numSpan);
        chip.appendChild(hanziSpan);
        chip.appendChild(makeSpeakButton(shuffled[idx].hanzi, 'Nghe câu này'));
        var remove = function () { picked.splice(pos, 1); renderTokens(); renderAnswer(); };
        chip.addEventListener('click', remove);
        chip.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); remove(); }
        });
        answerZone.appendChild(chip);
      });
    }
    renderTokens();
    renderAnswer();

    wrap.appendChild(answerZone);
    wrap.appendChild(tokenZone);

    var actions = buildQuizActions(function () {
      var built = picked.map(function (idx) { return shuffled[idx]; });
      var ok = built.length === block.lines.length && built.every(function (l, i) { return l === block.lines[i]; });
      answerZone.classList.remove('is-correct', 'is-wrong');
      answerZone.classList.add(ok ? 'is-correct' : 'is-wrong');
      return { correct: ok ? 1 : 0, total: 1 };
    }, function () {
      picked = [];
      renderTokens();
      renderAnswer();
      answerZone.classList.remove('is-correct', 'is-wrong');
    });
    wrap.appendChild(actions);
    return wrap;
  }

  function speechUnsupportedNote(text) {
    var note = document.createElement('p');
    note.className = 'speech-support-note';
    note.textContent = text;
    return note;
  }

  function normalizeZh(s) {
    return (s || '').replace(/[，。！？、,.!?\s]/g, '');
  }

  function renderShadowingBlock(block) {
    var wrap = document.createElement('div');
    wrap.className = 'exercise-block';
    wrap.innerHTML = '<h5>' + block.title + '</h5>';
    if (!SpeechRecognitionCtor) {
      wrap.appendChild(speechUnsupportedNote('Trình duyệt chưa hỗ trợ ghi âm nhận diện — hãy nghe mẫu, tự luyện nói rồi đánh dấu khi xong.'));
    }

    var body = document.createElement('div');
    body.className = 'shadow-rows';

    block.items.forEach(function (item, i) {
      var row = document.createElement('div');
      row.className = 'shadow-row';

      var head = document.createElement('div');
      head.className = 'shadow-head';
      var numSpan = document.createElement('span');
      numSpan.className = 'listening-num';
      numSpan.textContent = i + 1;
      var textSpan = document.createElement('span');
      textSpan.className = 'hanzi shadow-text';
      textSpan.textContent = item.text;
      head.appendChild(numSpan);
      head.appendChild(textSpan);
      head.appendChild(makeSpeakButton(item.text, 'Nghe mẫu'));
      row.appendChild(head);

      var resultEl = document.createElement('p');
      resultEl.className = 'shadow-result';

      if (SpeechRecognitionCtor) {
        var recBtn = document.createElement('button');
        recBtn.type = 'button';
        recBtn.className = 'record-btn';
        recBtn.textContent = '🎤 Ghi âm luyện nói';
        recBtn.addEventListener('click', function () {
          if (recBtn.classList.contains('is-recording')) return;
          recBtn.classList.add('is-recording');
          recBtn.textContent = '🎙️ Đang nghe...';
          resultEl.textContent = '';
          resultEl.className = 'shadow-result';
          var recognizer = createRecognizer(function (transcript) {
            recBtn.classList.remove('is-recording');
            recBtn.textContent = '🎤 Ghi âm luyện nói';
            var a = normalizeZh(transcript);
            var b = normalizeZh(item.text);
            var ok = a.indexOf(b) !== -1 || b.indexOf(a) !== -1;
            resultEl.textContent = 'Bạn nói: "' + transcript + '"';
            resultEl.className = 'shadow-result ' + (ok ? 'is-good' : 'is-mid');
          }, function () {
            recBtn.classList.remove('is-recording');
            recBtn.textContent = '🎤 Ghi âm luyện nói';
            resultEl.textContent = 'Không nhận diện được giọng nói, hãy thử lại.';
            resultEl.className = 'shadow-result is-mid';
          });
          recognizer.start();
        });
        row.appendChild(recBtn);
      } else {
        var doneBtn = document.createElement('button');
        doneBtn.type = 'button';
        doneBtn.className = 'btn btn-outline btn-sm';
        doneBtn.textContent = 'Tôi đã luyện xong';
        doneBtn.addEventListener('click', function () {
          doneBtn.classList.toggle('is-done');
          doneBtn.textContent = doneBtn.classList.contains('is-done') ? '✓ Đã luyện' : 'Tôi đã luyện xong';
        });
        row.appendChild(doneBtn);
      }

      row.appendChild(resultEl);
      body.appendChild(row);
    });

    wrap.appendChild(body);
    return wrap;
  }

  function renderQASpeakingBlock(block) {
    var wrap = document.createElement('div');
    wrap.className = 'exercise-block';
    wrap.innerHTML = '<h5>' + block.title + '</h5>';
    if (!SpeechRecognitionCtor) {
      wrap.appendChild(speechUnsupportedNote('Trình duyệt chưa hỗ trợ ghi âm nhận diện — hãy nghe câu hỏi, tự trả lời rồi xem câu mẫu để đối chiếu.'));
    }

    var body = document.createElement('div');
    body.className = 'shadow-rows';

    block.items.forEach(function (item, i) {
      var row = document.createElement('div');
      row.className = 'shadow-row';

      var head = document.createElement('div');
      head.className = 'shadow-head';
      var numSpan = document.createElement('span');
      numSpan.className = 'listening-num';
      numSpan.textContent = i + 1;
      var textSpan = document.createElement('span');
      textSpan.className = 'hanzi shadow-text';
      textSpan.textContent = item.questionText;
      head.appendChild(numSpan);
      head.appendChild(textSpan);
      head.appendChild(makeSpeakButton(item.questionText, 'Nghe câu hỏi'));
      row.appendChild(head);

      var resultEl = document.createElement('p');
      resultEl.className = 'shadow-result';

      var actionsRow = document.createElement('div');
      actionsRow.className = 'shadow-actions';

      if (SpeechRecognitionCtor) {
        var recBtn = document.createElement('button');
        recBtn.type = 'button';
        recBtn.className = 'record-btn';
        recBtn.textContent = '🎤 Trả lời';
        recBtn.addEventListener('click', function () {
          if (recBtn.classList.contains('is-recording')) return;
          recBtn.classList.add('is-recording');
          recBtn.textContent = '🎙️ Đang nghe...';
          resultEl.textContent = '';
          resultEl.className = 'shadow-result';
          var recognizer = createRecognizer(function (transcript) {
            recBtn.classList.remove('is-recording');
            recBtn.textContent = '🎤 Trả lời';
            var ok = item.keywords.some(function (kw) { return transcript.indexOf(kw) !== -1; });
            resultEl.textContent = 'Bạn trả lời: "' + transcript + '"';
            resultEl.className = 'shadow-result ' + (ok ? 'is-good' : 'is-mid');
          }, function () {
            recBtn.classList.remove('is-recording');
            recBtn.textContent = '🎤 Trả lời';
            resultEl.textContent = 'Không nhận diện được, hãy thử lại.';
            resultEl.className = 'shadow-result is-mid';
          });
          recognizer.start();
        });
        actionsRow.appendChild(recBtn);
      }

      var sampleEl = document.createElement('p');
      sampleEl.className = 'free-practice-answer hanzi';
      sampleEl.hidden = true;
      sampleEl.textContent = item.sampleAnswer;

      var sampleBtn = document.createElement('button');
      sampleBtn.type = 'button';
      sampleBtn.className = 'btn btn-ghost btn-sm';
      sampleBtn.textContent = 'Xem câu trả lời mẫu';
      sampleBtn.addEventListener('click', function () {
        sampleEl.hidden = !sampleEl.hidden;
        sampleBtn.textContent = sampleEl.hidden ? 'Xem câu trả lời mẫu' : 'Ẩn câu mẫu';
      });
      actionsRow.appendChild(sampleBtn);

      row.appendChild(actionsRow);
      row.appendChild(resultEl);
      row.appendChild(sampleEl);
      body.appendChild(row);
    });

    wrap.appendChild(body);
    return wrap;
  }

  function renderExerciseBlock(block) {
    if (block.type === 'listening-mcq') return renderListeningMcqBlock(block);
    if (block.type === 'listening-fill') return renderListeningFillBlock(block);
    if (block.type === 'word-order') return renderWordOrderBlock(block);
    if (block.type === 'line-order') return renderLineOrderBlock(block);
    if (block.type === 'shadowing') return renderShadowingBlock(block);
    if (block.type === 'qa-speaking') return renderQASpeakingBlock(block);
    return null;
  }

  function renderTieredExercises(container, lesson) {
    if (!container || !lesson.tieredExercises) return;
    container.innerHTML = '';

    var tierOrder = [];
    var tierBlocks = {};
    lesson.tieredExercises.forEach(function (block) {
      if (!tierBlocks[block.tier]) {
        tierBlocks[block.tier] = [];
        tierOrder.push(block.tier);
      }
      tierBlocks[block.tier].push(block);
    });

    tierOrder.forEach(function (tierNum) {
      var tierWrap = document.createElement('div');
      tierWrap.className = 'tier-group';
      var heading = document.createElement('div');
      heading.className = 'tier-heading';
      heading.innerHTML = '<span class="tier-badge">Cấp ' + tierNum + '</span>';
      tierWrap.appendChild(heading);

      tierBlocks[tierNum].forEach(function (block) {
        var blockEl = renderExerciseBlock(block);
        if (blockEl) tierWrap.appendChild(blockEl);
      });

      container.appendChild(tierWrap);
    });
  }

  function startLessonPractice(lessonId) {
    var lesson = getLessonById(lessonId);
    if (!lesson) return;
    state.practiceLevel = 'hsk2';
    state.activeLesson = lessonId;
    $all('.level-pill').forEach(function (pill) {
      pill.classList.toggle('is-active', pill.getAttribute('data-level') === 'hsk2');
    });
    updateLessonBanner();
    document.getElementById('practice').scrollIntoView({ behavior: 'smooth' });
    startSession();
  }

  function updateLessonBanner() {
    var banner = $('#lessonBanner');
    if (!banner) return;
    var lesson = state.activeLesson ? getLessonById(state.activeLesson) : null;
    if (lesson) {
      banner.hidden = false;
      $('#lessonBannerText').textContent = 'Đang luyện theo Bài ' + lesson.number + ' – ' + lesson.title;
    } else {
      banner.hidden = true;
    }
  }

  function initLessonBanner() {
    var clearBtn = $('#lessonBannerClear');
    if (!clearBtn) return;
    clearBtn.addEventListener('click', function () {
      state.activeLesson = null;
      updateLessonBanner();
      startSession();
    });
  }

  /* ---------------- Hero word of the day ---------------- */

  function allVocab() {
    var out = [];
    Object.keys(APP_DATA.vocab).forEach(function (level) {
      out = out.concat(APP_DATA.vocab[level]);
    });
    return out;
  }

  function renderHeroWord() {
    var word = sample(allVocab(), 1)[0];
    $('#heroHanzi').textContent = word.hanzi;
    $('#heroPinyin').textContent = word.pinyin;
    $('#heroMeaning').textContent = word.meaning;
  }

  /* ---------------- Practice: level pills + tabs ---------------- */

  function renderPracticeLevelPills() {
    var wrap = $('#practiceLevelPills');
    wrap.innerHTML = '';
    APP_DATA.levels.forEach(function (level) {
      var pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'level-pill' + (level.id === state.practiceLevel ? ' is-active' : '');
      pill.textContent = level.name;
      pill.setAttribute('data-level', level.id);
      pill.addEventListener('click', function () {
        setPracticeLevel(level.id);
      });
      wrap.appendChild(pill);
    });
  }

  function setPracticeLevel(levelId) {
    state.practiceLevel = levelId;
    state.activeLesson = null;
    updateLessonBanner();
    $all('.level-pill').forEach(function (pill) {
      pill.classList.toggle('is-active', pill.getAttribute('data-level') === levelId);
    });
    startSession();
  }

  function initModeTabs() {
    $all('.practice-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        $all('.practice-tab').forEach(function (t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
        state.mode = tab.getAttribute('data-mode');
        startSession();
      });
    });
  }

  /* ---------------- Exercise generation ---------------- */

  function buildMcqQuestions(pool, field) {
    var picks = sample(pool, Math.min(QUESTIONS_PER_SESSION, pool.length));
    return picks.map(function (word) {
      var distractors = sample(pool.filter(function (w) { return w.id !== word.id; }), 3).map(function (w) { return w[field]; });
      var options = shuffle(distractors.concat([word[field]]));
      return {
        type: field === 'meaning' ? 'mcq-meaning' : field === 'pinyin' ? 'mcq-pinyin' : 'mcq-hanzi',
        wordId: word.id,
        word: word,
        options: options,
        answer: word[field]
      };
    });
  }

  function buildFillBlankQuestions(pool) {
    var picks = sample(pool, Math.min(QUESTIONS_PER_SESSION, pool.length));
    return picks.map(function (item) {
      return {
        type: 'fill-blank',
        id: item.id,
        sentence: item.sentence,
        options: shuffle(item.options),
        answer: item.answer
      };
    });
  }

  function buildSentenceQuestions(pool) {
    var picks = sample(pool, Math.min(QUESTIONS_PER_SESSION, pool.length));
    return picks.map(function (item) {
      return {
        type: 'sentence-build',
        id: item.id,
        tokens: item.tokens,
        shuffled: shuffle(item.tokens),
        translation: item.translation
      };
    });
  }

  function buildDialogueQAQuestions(lesson) {
    if (!lesson || !lesson.dialogueQA) return [];
    var pool = lesson.dialogueQA;
    var picks = sample(pool, Math.min(QUESTIONS_PER_SESSION, pool.length));
    return picks.map(function (item) {
      var dialogue = (lesson.dialogues || []).filter(function (d) { return d.id === item.dialogueId; })[0];
      return {
        type: 'dialogue-qa',
        id: item.id,
        dialogue: dialogue,
        question: item.question,
        options: shuffle(item.options),
        answer: item.answer
      };
    });
  }

  function buildSession() {
    var level = state.practiceLevel;
    var mode = state.mode;
    var lesson = state.activeLesson ? getLessonById(state.activeLesson) : null;

    var vocabPool = lesson ? lesson.vocab : APP_DATA.vocab[level];
    var fillBlankPool = lesson ? lesson.fillBlank : (APP_DATA.fillBlank[level] || []);
    var sentencePool = lesson ? lesson.sentenceBuild : (APP_DATA.sentenceBuild[level] || []);

    var questions;
    if (mode === 'mcq-meaning') questions = buildMcqQuestions(vocabPool, 'meaning');
    else if (mode === 'mcq-pinyin') questions = buildMcqQuestions(vocabPool, 'pinyin');
    else if (mode === 'mcq-hanzi') questions = buildMcqQuestions(vocabPool, 'hanzi');
    else if (mode === 'fill-blank') questions = buildFillBlankQuestions(fillBlankPool);
    else if (mode === 'dialogue-qa') questions = buildDialogueQAQuestions(lesson);
    else questions = buildSentenceQuestions(sentencePool);

    return {
      level: level,
      mode: mode,
      lessonId: state.activeLesson,
      questions: questions,
      index: 0,
      score: 0,
      answeredCorrectWordIds: [],
      totalAnswered: 0,
      answeredCurrent: false
    };
  }

  function startSession() {
    state.session = buildSession();
    $('#restartExerciseBtn').hidden = true;
    renderQuestion();
  }

  /* ---------------- Rendering exercise UI ---------------- */

  function updateProgressBar() {
    var s = state.session;
    if (!s.questions.length) {
      $('#exerciseCounter').textContent = 'Không có câu hỏi';
      $('#exerciseScore').textContent = s.score;
      $('#exerciseProgressFill').style.width = '0%';
      return;
    }
    var total = s.questions.length;
    var current = Math.min(s.index + 1, total);
    $('#exerciseCounter').textContent = 'Câu ' + current + ' / ' + total;
    $('#exerciseScore').textContent = s.score;
    $('#exerciseProgressFill').style.width = ((current - 1) / total) * 100 + '%';
  }

  function clearFeedback() {
    var banner = $('#feedbackBanner');
    banner.className = 'feedback-banner';
    banner.textContent = '';
  }

  function renderQuestion() {
    var s = state.session;
    clearFeedback();
    $('#nextExerciseBtn').hidden = true;
    $('#restartExerciseBtn').hidden = true;

    if (!s.questions.length) {
      $('#exerciseBody').innerHTML = '<p style="text-align:center; color: var(--color-gray-600);">Chưa có dữ liệu bài tập cho lựa chọn này.</p>';
      updateProgressBar();
      return;
    }

    if (s.index >= s.questions.length) {
      renderSummary();
      return;
    }

    updateProgressBar();
    var q = s.questions[s.index];
    var body = $('#exerciseBody');

    if (q.type === 'mcq-meaning' || q.type === 'mcq-pinyin' || q.type === 'mcq-hanzi') {
      renderMcq(body, q);
    } else if (q.type === 'fill-blank') {
      renderFillBlank(body, q);
    } else if (q.type === 'sentence-build') {
      renderSentenceBuild(body, q);
    } else if (q.type === 'dialogue-qa') {
      renderDialogueQA(body, q);
    }
  }

  var MODE_LABEL = {
    'mcq-meaning': 'Trắc nghiệm • Chọn nghĩa đúng',
    'mcq-pinyin': 'Trắc nghiệm • Chọn Pinyin đúng',
    'mcq-hanzi': 'Trắc nghiệm • Chọn Hán tự đúng',
    'fill-blank': 'Điền từ vào chỗ trống',
    'sentence-build': 'Ghép câu đúng thứ tự',
    'dialogue-qa': 'Đọc hiểu hội thoại'
  };

  function renderMcq(body, q) {
    var promptHtml;
    if (q.type === 'mcq-meaning') {
      promptHtml = '<div class="hanzi-prompt hanzi">' + q.word.hanzi + '</div><div class="sub-prompt">' + q.word.pinyin + '</div>';
    } else if (q.type === 'mcq-pinyin') {
      promptHtml = '<div class="hanzi-prompt hanzi">' + q.word.hanzi + '</div><div class="sub-prompt">Chọn phiên âm Pinyin đúng</div>';
    } else {
      promptHtml = '<div class="question-text">"' + q.word.meaning + '"</div><div class="sub-prompt">Chọn Hán tự đúng</div>';
    }

    body.innerHTML =
      '<span class="exercise-mode-label">' + MODE_LABEL[q.type] + '</span>' +
      '<div class="exercise-prompt">' + promptHtml + '</div>' +
      '<div class="options-grid" id="optionsGrid"></div>';

    var grid = $('#optionsGrid', body);
    q.options.forEach(function (opt) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', function () {
        handleAnswer(opt === q.answer, { correctWordId: q.wordId });
        markOptionButtons(grid, opt, q.answer);
      });
      grid.appendChild(btn);
    });
  }

  function markOptionButtons(grid, selected, answer) {
    $all('.option-btn', grid).forEach(function (btn) {
      btn.disabled = true;
      if (btn.textContent === answer) btn.classList.add('is-correct');
      else if (btn.textContent === selected) btn.classList.add('is-wrong');
    });
  }

  function renderFillBlank(body, q) {
    body.innerHTML =
      '<span class="exercise-mode-label">' + MODE_LABEL['fill-blank'] + '</span>' +
      '<div class="exercise-prompt"><div class="question-text hanzi">' + q.sentence + '</div></div>' +
      '<div class="options-grid" id="optionsGrid"></div>';

    var grid = $('#optionsGrid', body);
    q.options.forEach(function (opt) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', function () {
        handleAnswer(opt === q.answer, {});
        markOptionButtons(grid, opt, q.answer);
      });
      grid.appendChild(btn);
    });
  }

  function renderDialogueQA(body, q) {
    var dialogueHtml = '';
    if (q.dialogue) {
      dialogueHtml = '<div class="qa-dialogue"><h5>' + q.dialogue.place + '</h5>' +
        q.dialogue.lines.map(function (line) {
          return '<p><strong>' + line.speaker + ':</strong> <span class="hanzi">' + line.hanzi + '</span> <span class="qa-vi">(' + line.vi + ')</span></p>';
        }).join('') +
      '</div>';
    }

    body.innerHTML =
      '<span class="exercise-mode-label">' + MODE_LABEL['dialogue-qa'] + '</span>' +
      dialogueHtml +
      '<div class="exercise-prompt"><div class="question-text">' + q.question + '</div></div>' +
      '<div class="options-grid" id="optionsGrid"></div>';

    var grid = $('#optionsGrid', body);
    q.options.forEach(function (opt) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', function () {
        handleAnswer(opt === q.answer, {});
        markOptionButtons(grid, opt, q.answer);
      });
      grid.appendChild(btn);
    });
  }

  function renderSentenceBuild(body, q) {
    body.innerHTML =
      '<span class="exercise-mode-label">' + MODE_LABEL['sentence-build'] + '</span>' +
      '<div class="exercise-prompt"><div class="sub-prompt">Sắp xếp các từ để tạo thành câu đúng nghĩa:</div>' +
      '<div class="question-text">"' + q.translation + '"</div></div>' +
      '<div class="sentence-build-answer" id="answerZone" aria-label="Câu bạn đang ghép"></div>' +
      '<div class="sentence-build-tokens" id="tokenZone"></div>' +
      '<div class="exercise-actions" style="justify-content:center; margin-top: var(--space-4);">' +
        '<button class="btn btn-outline" id="clearTokensBtn" type="button">Xoá</button>' +
        '<button class="btn btn-primary" id="checkSentenceBtn" type="button">Kiểm tra</button>' +
      '</div>';

    var picked = [];
    var tokenZone = $('#tokenZone', body);
    var answerZone = $('#answerZone', body);

    function renderTokens() {
      tokenZone.innerHTML = '';
      q.shuffled.forEach(function (token, idx) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'token-btn hanzi';
        btn.textContent = token;
        var used = picked.indexOf(idx) !== -1;
        btn.disabled = used;
        if (used) btn.classList.add('is-picked');
        btn.addEventListener('click', function () {
          picked.push(idx);
          renderTokens();
          renderAnswer();
        });
        tokenZone.appendChild(btn);
      });
    }

    function renderAnswer() {
      answerZone.innerHTML = '';
      picked.forEach(function (idx, position) {
        var chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'token-btn hanzi is-picked';
        chip.textContent = q.shuffled[idx];
        chip.title = 'Bấm để bỏ từ này';
        chip.addEventListener('click', function () {
          picked.splice(position, 1);
          renderTokens();
          renderAnswer();
        });
        answerZone.appendChild(chip);
      });
    }

    renderTokens();
    renderAnswer();

    $('#clearTokensBtn', body).addEventListener('click', function () {
      picked = [];
      renderTokens();
      renderAnswer();
    });

    $('#checkSentenceBtn', body).addEventListener('click', function () {
      var builtSentence = picked.map(function (idx) { return q.shuffled[idx]; });
      var isCorrect = builtSentence.length === q.tokens.length && builtSentence.every(function (t, i) { return t === q.tokens[i]; });
      $all('.token-btn', tokenZone).forEach(function (btn) { btn.disabled = true; });
      $('#checkSentenceBtn', body).disabled = true;
      $('#clearTokensBtn', body).disabled = true;
      handleAnswer(isCorrect, {});
      if (!isCorrect) {
        answerZone.insertAdjacentHTML('afterend',
          '<p style="color: var(--color-error); font-weight:700; margin-top: var(--space-2);">Đáp án đúng: <span class="hanzi">' + q.tokens.join(' ') + '</span></p>');
      }
    });
  }

  function handleAnswer(isCorrect, meta) {
    var s = state.session;
    if (s.answeredCurrent) return;
    s.answeredCurrent = true;
    s.totalAnswered++;
    if (isCorrect) {
      s.score++;
      if (meta && meta.correctWordId) s.answeredCorrectWordIds.push(meta.correctWordId);
    }

    var banner = $('#feedbackBanner');
    banner.className = 'feedback-banner is-visible ' + (isCorrect ? 'is-correct' : 'is-wrong');
    banner.innerHTML = isCorrect
      ? '<svg class="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Chính xác! Làm tốt lắm.'
      : '<svg class="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Chưa đúng, xem đáp án đúng ở trên nhé.';

    $('#exerciseScore').textContent = s.score;
    $('#nextExerciseBtn').hidden = false;
    $('#nextExerciseBtn').textContent = s.index >= s.questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo';
  }

  function renderSummary() {
    var s = state.session;
    var total = s.totalAnswered || s.questions.length;
    var accuracy = total ? Math.round((s.score / total) * 100) : 0;

    $('#exerciseCounter').textContent = 'Hoàn thành';
    $('#exerciseProgressFill').style.width = '100%';
    clearFeedback();
    $('#nextExerciseBtn').hidden = true;
    $('#restartExerciseBtn').hidden = false;

    $('#exerciseBody').innerHTML =
      '<div class="session-summary">' +
        '<div class="big-score">' + s.score + '/' + s.questions.length + '</div>' +
        '<p style="color: var(--color-gray-600); margin: var(--space-2) 0 0;">Độ chính xác phiên này: <strong>' + accuracy + '%</strong></p>' +
      '</div>';

    recordSessionResult(s);
  }

  function initExerciseButtons() {
    $('#nextExerciseBtn').addEventListener('click', function () {
      state.session.index++;
      state.session.answeredCurrent = false;
      renderQuestion();
    });
    $('#restartExerciseBtn').addEventListener('click', function () {
      startSession();
    });
  }

  /* ---------------- Dashboard / progress persistence ---------------- */

  function recordSessionResult(session) {
    var learned = readJSON(STORAGE_KEYS.learned, []);
    session.answeredCorrectWordIds.forEach(function (id) {
      if (learned.indexOf(id) === -1) learned.push(id);
    });
    writeJSON(STORAGE_KEYS.learned, learned);

    var acc = readJSON(STORAGE_KEYS.accuracy, { correct: 0, total: 0 });
    acc.correct += session.score;
    acc.total += session.totalAnswered || session.questions.length;
    writeJSON(STORAGE_KEYS.accuracy, acc);

    var sessions = readJSON(STORAGE_KEYS.sessions, 0) + 1;
    writeJSON(STORAGE_KEYS.sessions, sessions);

    bumpStreak();
    updateDashboard();
    showToast('Đã lưu kết quả: ' + session.score + '/' + session.questions.length + ' câu đúng.');
  }

  function bumpStreak() {
    var streak = readJSON(STORAGE_KEYS.streak, { lastDate: null, count: 0 });
    var today = todayStr();
    if (streak.lastDate === today) {
      /* already counted today */
    } else if (streak.lastDate && dayDiff(streak.lastDate, today) === 1) {
      streak.count += 1;
      streak.lastDate = today;
    } else {
      streak.count = 1;
      streak.lastDate = today;
    }
    writeJSON(STORAGE_KEYS.streak, streak);
  }

  function updateDashboard() {
    var learned = readJSON(STORAGE_KEYS.learned, []);
    var streak = readJSON(STORAGE_KEYS.streak, { lastDate: null, count: 0 });
    var acc = readJSON(STORAGE_KEYS.accuracy, { correct: 0, total: 0 });
    var sessions = readJSON(STORAGE_KEYS.sessions, 0);

    $('#statMastered').textContent = learned.length;
    $('#statStreak').textContent = streak.count + (streak.count === 1 ? ' ngày' : ' ngày');
    $('#statAccuracy').textContent = acc.total ? Math.round((acc.correct / acc.total) * 100) + '%' : '0%';
    $('#statSessions').textContent = sessions;

    var dots = $('#streakDots');
    dots.innerHTML = '';
    var activeCount = Math.min(streak.count, 7);
    for (var i = 0; i < 7; i++) {
      var dot = document.createElement('span');
      dot.className = 'streak-dot' + (i < activeCount ? ' is-active' : '');
      dots.appendChild(dot);
    }
  }

  function initResetProgress() {
    $('#resetProgressBtn').addEventListener('click', function () {
      if (!window.confirm('Đặt lại toàn bộ tiến độ học tập trên trình duyệt này?')) return;
      Object.keys(STORAGE_KEYS).forEach(function (k) {
        if (k === 'user') return;
        localStorage.removeItem(STORAGE_KEYS[k]);
      });
      updateDashboard();
      showToast('Đã đặt lại tiến độ học tập.');
    });
  }

  /* ---------------- Auth (demo only, localStorage) ---------------- */

  function initAuth() {
    var overlay = $('#authModal');
    var loginBtn = $('#loginBtn');
    var registerBtn = $('#registerBtn');
    var closeBtn = $('#authModalClose');
    var userChip = $('#userChip');

    function openModal(tab) {
      overlay.classList.add('is-open');
      setAuthTab(tab || 'login');
      var firstInput = $('#' + tab + 'Panel') ? $('#' + tab + 'Panel input') : $('#loginPanel input');
      if (firstInput) setTimeout(function () { firstInput.focus(); }, 50);
    }
    function closeModal() {
      overlay.classList.remove('is-open');
    }

    loginBtn.addEventListener('click', function () { openModal('login'); });
    registerBtn.addEventListener('click', function () { openModal('register'); });
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });

    function setAuthTab(tab) {
      $all('.auth-tab').forEach(function (t) {
        t.classList.toggle('is-active', t.getAttribute('data-auth') === tab);
      });
      $all('.auth-panel').forEach(function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-auth-panel') === tab);
      });
    }

    $all('.auth-tab').forEach(function (tab) {
      tab.addEventListener('click', function () { setAuthTab(tab.getAttribute('data-auth')); });
    });
    $all('[data-auth-switch]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        setAuthTab(link.getAttribute('data-auth-switch'));
      });
    });

    function setLoggedInUser(name, email) {
      writeJSON(STORAGE_KEYS.user, { name: name, email: email });
      renderUserChip();
    }

    function renderUserChip() {
      var user = readJSON(STORAGE_KEYS.user, null);
      if (user) {
        loginBtn.hidden = true;
        registerBtn.hidden = true;
        userChip.hidden = false;
        $('#userName').textContent = user.name || user.email;
        $('#userAvatar').textContent = (user.name || user.email || 'H').trim().charAt(0).toUpperCase();
      } else {
        loginBtn.hidden = false;
        registerBtn.hidden = false;
        userChip.hidden = true;
      }
    }

    $('#loginPanel').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = $('#loginEmail').value.trim();
      if (!email) return;
      setLoggedInUser(email.split('@')[0], email);
      closeModal();
      showToast('Đăng nhập thành công (chế độ demo).');
    });

    $('#registerPanel').addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#registerName').value.trim();
      var email = $('#registerEmail').value.trim();
      if (!name || !email) return;
      setLoggedInUser(name, email);
      closeModal();
      showToast('Tạo tài khoản thành công! Chào mừng ' + name + '.');
    });

    userChip.addEventListener('click', function () {
      if (!window.confirm('Đăng xuất khỏi tài khoản demo?')) return;
      localStorage.removeItem(STORAGE_KEYS.user);
      renderUserChip();
      showToast('Đã đăng xuất.');
    });

    renderUserChip();
  }

  /* ---------------- Init ---------------- */

  function initPinyinToggle() {
    var btn = $('#pinyinToggle');
    if (!btn) return;
    function apply(hidden) {
      document.body.classList.toggle('pinyin-hidden', hidden);
      btn.setAttribute('aria-pressed', String(!hidden));
      btn.lastChild.textContent = hidden ? ' Ẩn' : ' Hiện';
    }
    var hidden = readJSON(STORAGE_KEYS.pinyinHidden, false);
    apply(hidden);
    btn.addEventListener('click', function () {
      hidden = !hidden;
      writeJSON(STORAGE_KEYS.pinyinHidden, hidden);
      apply(hidden);
    });
  }

  function init() {
    $('#footerYear').textContent = new Date().getFullYear();

    initNav();
    initSearch();
    initPinyinToggle();
    renderLevelCards();
    renderLessonList();
    initLessonBanner();
    renderHeroWord();
    renderPracticeLevelPills();
    initModeTabs();
    initExerciseButtons();
    initResetProgress();
    initAuth();
    updateDashboard();

    $('#heroWordRefresh').addEventListener('click', renderHeroWord);
    $('#ctaStart').addEventListener('click', function () {
      document.getElementById('levels').scrollIntoView({ behavior: 'smooth' });
    });

    startSession();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
