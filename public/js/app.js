(function () {
  'use strict';

  var STORAGE_KEYS = {
    user: 'hyv_user',
    visitedLessons: 'hyv_visited_lessons',
    studyDays: 'hyv_study_days'
  };

  /* ---------------- Utilities ---------------- */

  function $(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function $all(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
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

  function dateKey(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  /* ---------------- Sidebar nav ---------------- */

  function initSidebar() {
    var sidebar = $('#appSidebar');
    var scrim = $('#appScrim');
    var toggle = $('#sidebarToggle');

    function openSidebar() {
      sidebar.classList.add('is-open');
      scrim.classList.add('is-visible');
      toggle.setAttribute('aria-expanded', 'true');
    }
    function closeSidebar() {
      sidebar.classList.remove('is-open');
      scrim.classList.remove('is-visible');
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', function () {
      sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar();
    });
    scrim.addEventListener('click', closeSidebar);
    $all('.app-nav-item, .app-nav-subitem', sidebar).forEach(function (item) {
      item.addEventListener('click', closeSidebar);
    });

    var levelsToggle = $('#levelsToggle');
    var levelsSubmenu = $('#levelsSubmenu');
    levelsToggle.addEventListener('click', function () {
      var isOpen = levelsToggle.classList.toggle('is-open');
      levelsSubmenu.classList.toggle('is-open', isOpen);
      levelsToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  function renderLevelSubmenu() {
    var wrap = $('#levelsSubmenu');
    wrap.innerHTML = '';
    DASHBOARD_LEVEL_IDS.forEach(function (id) {
      var level = APP_DATA.levels.find(function (l) { return l.id === id; });
      if (!level) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'app-nav-subitem' + (id === practiceLevel ? ' is-active' : '');
      btn.innerHTML = '<span class="app-nav-dot is-' + LEVEL_COLOR[id] + '"></span>' + level.name;
      btn.addEventListener('click', function () { selectLevel(id); });
      wrap.appendChild(btn);
    });
  }

  /* ---------------- Level cards ---------------- */

  var DASHBOARD_LEVEL_IDS = ['hsk1', 'hsk2', 'hsk3', 'yct'];
  var LEVEL_COLOR = { hsk1: 'red', hsk2: 'green', hsk3: 'gold', yct: 'blue' };
  var LEVEL_SHORT = { hsk1: 'HSK1', hsk2: 'HSK2', hsk3: 'HSK3', yct: 'YCT1' };
  var READY_LEVELS = { hsk1: true, hsk2: true, yct: true };
  var practiceLevel = 'hsk2';

  function renderLevelCards() {
    var grid = $('#levelGrid');
    grid.innerHTML = '';
    DASHBOARD_LEVEL_IDS.forEach(function (id) {
      var level = APP_DATA.levels.find(function (l) { return l.id === id; });
      if (!level) return;
      var isReady = !!READY_LEVELS[id];
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'level-card' + (isReady ? '' : ' is-disabled');
      card.setAttribute('data-level', id);
      card.innerHTML =
        '<div class="level-badge is-' + LEVEL_COLOR[id] + '">' + LEVEL_SHORT[id] + '</div>' +
        '<div class="level-card-body">' +
          '<h3>' + level.name + '</h3>' +
          '<span class="level-sub">Hán ngữ tiêu chuẩn</span>' +
        '</div>';
      card.addEventListener('click', function () {
        if (!isReady) {
          showToast(level.name + ' đang được xây dựng, quay lại sau nhé!');
          return;
        }
        selectLevel(id);
      });
      grid.appendChild(card);
    });
  }

  var PRACTICE_LEVEL_LABEL = { hsk1: 'HSK 1', hsk2: 'HSK 2', hsk3: 'HSK 3', yct: 'YCT 1' };

  function selectLevel(id) {
    if (!READY_LEVELS[id]) {
      var level = APP_DATA.levels.find(function (l) { return l.id === id; });
      showToast((level ? level.name : id) + ' đang được xây dựng, quay lại sau nhé!');
      return;
    }
    practiceLevel = id;
    renderLevelSubmenu();
    showLevelDetail(id);
  }

  /* ---------------- View toggle: dashboard <-> level detail <-> lesson hub ---------------- */

  var currentLevelId = null;

  function showDashboard() {
    $('#home').hidden = false;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
  }

  function showLevelDetail(id) {
    currentLevelId = id;
    $('#home').hidden = true;
    $('#levelDetail').hidden = false;
    $('#lessonHub').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#levelDetailTitle').textContent = PRACTICE_LEVEL_LABEL[id] || id.toUpperCase();
    renderLessonList(id);
    $('#levelDetail').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------------- Lesson list (opens the lesson hub instead of navigating away) ---------------- */

  function renderLessonList(id) {
    var wrap = $('#levelDetailList');
    if (!wrap) return;
    var lessons = (APP_DATA.lessons && APP_DATA.lessons[id]) || [];
    var visited = readJSON(STORAGE_KEYS.visitedLessons, {});
    wrap.innerHTML = '';

    lessons.forEach(function (lesson) {
      var isDone = !!visited[lesson.fullPageUrl];
      var card = document.createElement('a');
      card.className = 'lesson-card-link';
      card.href = lesson.fullPageUrl;

      card.innerHTML =
        '<span class="lesson-card-num">' + String(lesson.number).padStart(2, '0') + '</span>' +
        '<div class="lesson-card-body">' +
          '<h3>Bài ' + lesson.number + ': ' + lesson.title + '</h3>' +
          (lesson.titleHanzi ? '<span class="lesson-card-hanzi hanzi">' + lesson.titleHanzi + ' · ' + lesson.titlePinyin + '</span>' : '') +
          (lesson.topic ? '<p class="lesson-card-topic">' + lesson.topic + '</p>' : '') +
          '<div class="lesson-card-stats">' +
            (lesson.vocabCount ? '<span>📚 ' + lesson.vocabCount + ' từ mới</span>' : '') +
            (lesson.dialogueCount ? '<span>💬 ' + lesson.dialogueCount + ' hội thoại</span>' : '') +
            (lesson.grammarCount ? '<span>📐 ' + lesson.grammarCount + ' điểm ngữ pháp</span>' : '') +
          '</div>' +
        '</div>' +
        '<span class="lesson-card-progress' + (isDone ? ' is-done' : '') + '">' + (isDone ? '✓ Đã học' : 'Chưa học') + '</span>' +
        '<svg class="icon lesson-card-arrow" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

      card.addEventListener('click', function (e) {
        e.preventDefault();
        showLessonHub(id, lesson);
      });

      wrap.appendChild(card);
    });
  }

  /* ---------------- Lesson hub (danh mục dạng bài bên trong 1 bài học) ---------------- */

  // Mỗi dạng bài tương ứng với đúng 1 tab CÓ THẬT trên trang bài học (mở qua #hash).
  // Chỉ những dạng có tab thật mới bấm được; các ô "Sắp ra mắt" chưa có nội dung.
  var HUB_TAB_DEFS = {
    warmup: { label: 'Khởi động', emoji: '🎯', color: 'pink' },
    vocab: { label: 'Từ vựng', emoji: '📚', color: 'red' },
    flash: { label: 'Flashcard', emoji: '🃏', color: 'gold' },
    grammar: { label: 'Ngữ pháp', emoji: '📐', color: 'blue' },
    dialog: { label: 'Hội thoại · Shadowing', emoji: '💬', color: 'green' },
    match: { label: 'Ghép từ / Nối câu', emoji: '🔗', color: 'purple' },
    listen: { label: 'Luyện nghe', emoji: '🎧', color: 'teal' },
    fill: { label: 'Điền từ', emoji: '✏️', color: 'orange' },
    sort: { label: 'Sắp xếp câu', emoji: '🧩', color: 'indigo' },
    errfix: { label: 'Sửa lỗi sai', emoji: '🛠️', color: 'pink' },
    mc: { label: 'Trắc nghiệm', emoji: '🎯', color: 'teal' },
    speak: { label: 'Luyện nói', emoji: '🗣️', color: 'purple' }
  };

  // Danh sách tab thật theo đúng thứ tự hiển thị trên từng loại trang bài học.
  var LEVEL_HUB_TABS = {
    hsk1: ['warmup', 'vocab', 'flash', 'grammar', 'dialog', 'listen', 'fill', 'sort', 'match', 'mc', 'speak'],
    hsk2: ['warmup', 'vocab', 'flash', 'grammar', 'dialog', 'match', 'listen', 'fill', 'sort', 'errfix', 'speak'],
    yct: null // trang YCT dùng cấu trúc tab riêng (yk-tab), chưa hỗ trợ mở qua hub
  };
  var LEVEL_HUB_CTA_TAB = { hsk2: 'tongket' };

  var currentHubLevelId = null;
  var currentHubLesson = null;

  function showLessonHub(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    var visited = readJSON(STORAGE_KEYS.visitedLessons, {});
    var isDone = !!visited[lesson.fullPageUrl];

    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = false;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#lessonHub').dataset.levelId = levelId;
    $('#lessonHubTitle').textContent = 'Bài ' + lesson.number + (lesson.titleHanzi ? ': ' + lesson.titleHanzi : '') + ' – ' + lesson.title;

    var pct = isDone ? 100 : 0;
    $('#hubProgressFill').style.width = pct + '%';
    $('#hubProgressPct').textContent = pct + '%';

    var tabIds = LEVEL_HUB_TABS[levelId];
    var grid = $('#hubTileGrid');
    grid.innerHTML = '';
    (tabIds || []).forEach(function (tabId) {
      var def = HUB_TAB_DEFS[tabId];
      if (!def) return;
      var tile = document.createElement('a');
      tile.className = 'hub-tile';
      tile.href = lesson.fullPageUrl + '#' + tabId;
      tile.innerHTML =
        '<div class="hub-tile-icon" style="background:var(--color-' + def.color + '-50);color:var(--color-' + def.color + '-600)">' + def.emoji + '</div>' +
        '<span class="hub-tile-label">' + def.label + '</span>' +
        '<svg class="icon hub-tile-arrow" viewBox="0 0 24 24" aria-hidden="true" width="18" height="18"><polyline points="9 18 15 12 9 6"/></svg>';
      if (tabId === 'vocab') {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          showVocabPractice(levelId, lesson);
        });
      } else if (tabId === 'flash') {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          showFlashcardPractice(levelId, lesson);
        });
      } else if (tabId === 'grammar') {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          showGrammarPractice(levelId, lesson);
        });
      } else if (tabId === 'dialog') {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          showDialoguePractice(levelId, lesson);
        });
      } else if (tabId === 'listen') {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          showListenPractice(levelId, lesson);
        });
      } else if (tabId === 'speak') {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          showSpeakPractice(levelId, lesson);
        });
      }
      grid.appendChild(tile);
    });

    if (!tabIds) {
      grid.innerHTML = '<p style="color:var(--color-gray-600);grid-column:1/-1;">Bài học này dùng giao diện riêng, bấm vào để mở đầy đủ.</p>';
    }

    var ctaWrap = $('#hubCtaWrap');
    ctaWrap.innerHTML = '';
    var ctaTab = LEVEL_HUB_CTA_TAB[levelId];
    if (ctaTab) {
      var cta = document.createElement('a');
      cta.className = 'hub-cta';
      cta.href = lesson.fullPageUrl + '#' + ctaTab;
      cta.innerHTML = '🏆 Xem kết quả cuối bài';
      ctaWrap.appendChild(cta);
    } else if (!tabIds) {
      var openLink = document.createElement('a');
      openLink.className = 'hub-cta';
      openLink.href = lesson.fullPageUrl;
      openLink.textContent = 'Mở bài học';
      ctaWrap.appendChild(openLink);
    }

    $('#lessonHub').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------------- Vocab practice (danh sach tu + 4 che do quiz) ---------------- */

  var vpZhVoice = null;
  function vpSpeak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.9;
    if (!vpZhVoice) {
      vpZhVoice = window.speechSynthesis.getVoices().filter(function (v) { return /^zh/i.test(v.lang); })[0] || null;
    }
    if (vpZhVoice) u.voice = vpZhVoice;
    window.speechSynthesis.speak(u);
  }

  // Bai hoc data.js khai bao "var vocabData = [...]", "var dialogData = [...]"
  // o top-level; cac bai khac nhau deu dung lai cung ten bien nen khong the
  // <script src> thang vao trang chinh (se bi loi/de lan nhau). Nap qua 1
  // iframe rieng (dung <script src> binh thuong, khong eval, khong script
  // inline - hop le voi CSP); vi la "var" nen no gan thang vao window cua
  // iframe, doc xong la huy iframe.
  var lessonDataCache = {};
  function loadLessonRawData(lesson) {
    if (lessonDataCache[lesson.fullPageUrl]) return Promise.resolve(lessonDataCache[lesson.fullPageUrl]);
    var dataUrl = lesson.fullPageUrl.replace('/lessons/', '/js/').replace('.html', '-data.js');
    return new Promise(function (resolve, reject) {
      var iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      var doc = iframe.contentDocument;
      doc.open();
      doc.write('<!doctype html><html><body></body></html>');
      doc.close();
      var script = doc.createElement('script');
      script.src = dataUrl;
      script.onload = function () {
        var data;
        try {
          data = JSON.parse(JSON.stringify({
            vocabData: iframe.contentWindow.vocabData || [],
            dialogData: iframe.contentWindow.dialogData || [],
            listenData: iframe.contentWindow.listenData || [],
            speakingData: iframe.contentWindow.speakingData || null
          }));
        } catch (e) {
          document.body.removeChild(iframe);
          reject(e);
          return;
        }
        document.body.removeChild(iframe);
        lessonDataCache[lesson.fullPageUrl] = data;
        resolve(data);
      };
      script.onerror = function () {
        document.body.removeChild(iframe);
        reject(new Error('Không tải được ' + dataUrl));
      };
      doc.body.appendChild(script);
    });
  }

  function loadLessonVocab(lesson) {
    return loadLessonRawData(lesson).then(function (data) { return data.vocabData; });
  }

  function loadLessonDialog(lesson) {
    return loadLessonRawData(lesson).then(function (data) { return data.dialogData; });
  }

  function loadLessonListenData(lesson) {
    return loadLessonRawData(lesson).then(function (data) { return data.listenData; });
  }

  function loadLessonSpeaking(lesson) {
    return loadLessonRawData(lesson).then(function (data) { return data.speakingData; });
  }

  function audioBaseFor(lesson) {
    var m = lesson.fullPageUrl.match(/\/lessons\/(hsk1-)?bai-(\d+)\.html/);
    if (!m) return null;
    return m[1] ? '/audio/hsk1-bai-' + m[2] : '/audio/bai-' + m[2];
  }

  var VP_TABS = [
    { id: 'list', label: 'Danh sách từ' },
    { id: 'zh-vn', label: 'Trung → Việt' },
    { id: 'vn-zh', label: 'Việt → Trung' },
    { id: 'py-zh', label: 'Pinyin → Hán tự' },
    { id: 'listen-zh', label: 'Nghe → chọn từ' }
  ];
  var vpMode = 'list';
  var vpVocab = [];
  var vpQuiz = null; // {order:[idx...], pos:0, score:0}

  function showVocabPractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#vocabPractice').hidden = false;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#vpContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';
    $('#vpSubtitle').textContent = 'Đang tải...';

    loadLessonVocab(lesson).then(function (vocabData) {
      vpVocab = vocabData;
      vpMode = 'list';
      $('#vpSubtitle').textContent = vocabData.length + ' từ trong bài học này';
      renderVpTabs();
      renderVpContent();
    }).catch(function () {
      $('#vpContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được dữ liệu từ vựng của bài này.</p>';
    });

    $('#vocabPractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderVpTabs() {
    var wrap = $('#vpTabs');
    wrap.innerHTML = '';
    VP_TABS.forEach(function (t) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'vp-tab' + (t.id === vpMode ? ' active' : '');
      btn.textContent = t.label;
      btn.addEventListener('click', function () {
        vpMode = t.id;
        vpQuiz = null;
        renderVpTabs();
        renderVpContent();
      });
      wrap.appendChild(btn);
    });
  }

  function renderVpContent() {
    if (vpMode === 'list') {
      renderVpList();
    } else {
      renderVpQuiz(vpMode);
    }
  }

  function renderVpList() {
    var wrap = $('#vpContent');
    wrap.innerHTML = '<div class="vp-list-grid"></div>';
    var grid = wrap.firstChild;
    vpVocab.forEach(function (v) {
      var ex = v.exList && v.exList[0];
      var card = document.createElement('div');
      card.className = 'vp-word-card';
      card.innerHTML =
        '<div class="vp-word-row"><span class="vp-word-zh hanzi">' + v.zh + '</span><button type="button" class="vp-speak-btn" data-speak="' + v.zh.replace(/"/g, '&quot;') + '">🔊</button></div>' +
        '<div class="vp-word-py">' + v.py + '</div>' +
        '<div class="vp-word-vn">' + v.vn + '</div>' +
        (v.pos ? '<span class="vp-word-pos">' + v.pos + '</span>' : '') +
        (ex ? '<div class="vp-word-example"><div class="vp-word-row"><span class="vp-word-zh hanzi" style="font-size:1.3rem;">' + ex.zh + '</span><button type="button" class="vp-speak-btn" data-speak="' + ex.zh.replace(/"/g, '&quot;') + '">🔊</button></div><div class="vp-word-py">' + ex.py + '</div><div class="vp-word-vn">' + ex.vn + '</div></div>' : '');
      grid.appendChild(card);
    });
    $all('[data-speak]', grid).forEach(function (btn) {
      btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-speak')); });
    });
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function renderVpQuiz(mode) {
    if (!vpQuiz) {
      vpQuiz = { order: shuffle(vpVocab.map(function (_, i) { return i; })), pos: 0, score: 0 };
    }
    var wrap = $('#vpContent');
    if (vpQuiz.pos >= vpQuiz.order.length) {
      wrap.innerHTML =
        '<div class="vp-quiz-done"><strong>' + vpQuiz.score + '/' + vpQuiz.order.length + '</strong>' +
        '<p style="color:var(--color-gray-600);margin-bottom:var(--space-5);">Bạn đã hoàn thành lượt luyện tập này.</p>' +
        '<button type="button" class="btn btn-primary" id="vpRestart">Luyện lại</button></div>';
      $('#vpRestart').addEventListener('click', function () { vpQuiz = null; renderVpQuiz(mode); });
      return;
    }

    var total = vpQuiz.order.length;
    var idx = vpQuiz.order[vpQuiz.pos];
    var word = vpVocab[idx];
    var distractorPool = vpVocab.filter(function (_, i) { return i !== idx; });
    var distractors = shuffle(distractorPool).slice(0, 3);
    var options = shuffle([word].concat(distractors));

    var segs = '';
    for (var i = 0; i < total; i++) segs += '<div class="vp-quiz-seg' + (i < vpQuiz.pos ? ' is-done' : '') + '"></div>';

    var promptHtml;
    if (mode === 'zh-vn') {
      promptHtml = '<div class="vp-quiz-prompt-zh hanzi">' + word.zh + '<button type="button" class="vp-speak-btn" data-speak="' + word.zh.replace(/"/g, '&quot;') + '">🔊</button></div><div class="vp-quiz-prompt-py">' + word.py + '</div>';
    } else if (mode === 'vn-zh') {
      promptHtml = '<div class="vp-quiz-prompt-vn">' + word.vn + '</div>';
    } else if (mode === 'py-zh') {
      promptHtml = '<div class="vp-quiz-prompt-vn">' + word.py + '</div>';
    } else {
      promptHtml = '<button type="button" class="vp-quiz-play-btn" data-speak="' + word.zh.replace(/"/g, '&quot;') + '">🔊 Nghe</button>';
    }

    var optionsHtml = options.map(function (opt, i) {
      var label;
      if (mode === 'zh-vn') label = opt.vn;
      else if (mode === 'vn-zh') label = opt.zh;
      else if (mode === 'py-zh') label = opt.zh;
      else label = opt.zh + ' (' + opt.py + ')';
      return '<button type="button" class="vp-option-btn" data-idx="' + i + '">' + label + '</button>';
    }).join('');

    wrap.innerHTML =
      '<div class="vp-quiz-progress">' + segs + '</div>' +
      '<div class="vp-quiz-counter">Câu ' + (vpQuiz.pos + 1) + '/' + total + '</div>' +
      '<div class="vp-quiz-card">' +
        '<div class="vp-quiz-prompt">' + promptHtml + '</div>' +
        '<div class="vp-quiz-options">' + optionsHtml + '</div>' +
      '</div>';

    $all('[data-speak]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-speak')); });
    });
    if (mode === 'listen-zh') vpSpeak(word.zh);

    $all('.vp-option-btn', wrap).forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var isCorrect = options[i] === word;
        $all('.vp-option-btn', wrap).forEach(function (b, j) {
          b.disabled = true;
          if (options[j] === word) b.classList.add('is-correct');
          else if (j === i) b.classList.add('is-wrong');
        });
        if (isCorrect) vpQuiz.score++;
        setTimeout(function () {
          vpQuiz.pos++;
          renderVpQuiz(mode);
        }, 700);
      });
    });
  }

  /* ---------------- Flashcard practice (lat the tung tu, tu danh gia nho/chua nho) ---------------- */

  var fcVocab = [];
  var fcIndex = 0;
  var fcTally = { yes: 0, no: 0 };

  function showFlashcardPractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = false;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#fcContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';
    $('#fcSubtitle').textContent = 'Đang tải...';

    loadLessonVocab(lesson).then(function (vocabData) {
      fcVocab = vocabData;
      fcIndex = 0;
      fcTally = { yes: 0, no: 0 };
      renderFlashcard();
    }).catch(function () {
      $('#fcContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được dữ liệu từ vựng của bài này.</p>';
    });

    $('#flashcardPractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderFlashcard() {
    var total = fcVocab.length;
    if (fcIndex >= total) {
      $('#fcSubtitle').textContent = 'Hoàn thành';
      $('#fcContent').innerHTML =
        '<div class="vp-quiz-done"><strong>🟢 ' + fcTally.yes + ' · 🔴 ' + fcTally.no + '</strong>' +
        '<p style="color:var(--color-gray-600);margin-bottom:var(--space-5);">Bạn đã ôn hết ' + total + ' thẻ từ vựng.</p>' +
        '<button type="button" class="btn btn-primary" id="fcRestart">Ôn lại</button></div>';
      $('#fcRestart').addEventListener('click', function () {
        fcIndex = 0;
        fcTally = { yes: 0, no: 0 };
        renderFlashcard();
      });
      return;
    }

    var word = fcVocab[fcIndex];
    var ex = word.exList && word.exList[0];
    $('#fcSubtitle').textContent = 'Thẻ ' + (fcIndex + 1) + '/' + total;

    var segs = '';
    for (var i = 0; i < total; i++) segs += '<div class="vp-quiz-seg' + (i < fcIndex ? ' is-done' : '') + '"></div>';

    $('#fcContent').innerHTML =
      '<div class="vp-quiz-progress">' + segs + '</div>' +
      '<div class="fc-card-wrap"><div class="fc-card" id="fcCard">' +
        '<div class="fc-face fc-front">' +
          '<span class="fc-zh hanzi">' + word.zh + '</span>' +
          '<button type="button" class="vp-speak-btn" id="fcSpeakBtn">🔊</button>' +
          '<span class="fc-hint">❓ Chạm để lật thẻ</span>' +
        '</div>' +
        '<div class="fc-face fc-back">' +
          '<span class="fc-py">' + word.py + '</span>' +
          '<span class="fc-vn">' + word.vn + '</span>' +
          (ex ? '<span class="fc-example">' + ex.zh + ' · ' + ex.vn + '</span>' : '') +
        '</div>' +
      '</div></div>' +
      '<div class="fc-actions">' +
        '<button type="button" class="fc-btn fc-btn-no" id="fcNo">🔴 Chưa nhớ</button>' +
        '<button type="button" class="fc-btn fc-btn-yes" id="fcYes">🟢 Đã nhớ</button>' +
      '</div>';

    var card = $('#fcCard');
    card.addEventListener('click', function () {
      card.classList.toggle('is-flipped');
    });
    $('#fcSpeakBtn').addEventListener('click', function (e) {
      e.stopPropagation();
      vpSpeak(word.zh);
    });
    $('#fcNo').addEventListener('click', function () {
      fcTally.no++;
      fcIndex++;
      renderFlashcard();
    });
    $('#fcYes').addEventListener('click', function () {
      fcTally.yes++;
      fcIndex++;
      renderFlashcard();
    });
  }

  /* ---------------- Grammar practice (Bai hoc + Bai tap) ---------------- */

  // Bai tap ngu phap tu soan theo skill ngu-phap-tieng-trung: chi dung tu vung
  // da hoc tinh den bai nay, blank la 1 lua chon ngu phap that (khong tach
  // vun cau co dinh), moi cau co giai thich ro nguyen nhan dung/sai.
  // PILOT: moi hoan thanh Bai 1 HSK1 va Bai 1 HSK2 de xin xac nhan truoc khi
  // lam tiep cho toan bo 15 bai HSK1 + 15 bai HSK2 con lai.
  var GRAMMAR_EXERCISES = {
    '/lessons/hsk1-bai-1.html': [
      { pre: '', blank: '你', post: '好！', options: ['你', '您', '你们'], answer: 0,
        explanation: '你 dùng khi chào một người ngang vai, thân mật.' },
      { pre: '', blank: '您', post: '好！', options: ['你', '您', '你们'], answer: 1,
        explanation: '您 dùng để chào người lớn tuổi hơn hoặc cần thể hiện sự tôn trọng.' },
      { pre: '', blank: '你们', post: '好！', options: ['你', '您', '你们'], answer: 2,
        explanation: '你们 dùng khi chào nhiều người cùng lúc (số nhiều).' },
      { pre: '对不起！', blank: '没关系', post: '！', options: ['没关系', '你好', '对不起'], answer: 0,
        explanation: '没关系 dùng để đáp lại lời xin lỗi, nghĩa là "không sao đâu".' }
    ],
    '/lessons/bai-1.html': [
      { pre: '我', blank: '要', post: '去北京旅游。', options: ['要', '最', '也'], answer: 0,
        explanation: '要 đặt trước động từ để diễn tả ý muốn/dự định làm việc gì.' },
      { pre: '我', blank: '最', post: '喜欢踢足球。', options: ['要', '最', '也'], answer: 1,
        explanation: '最 đặt trước tính từ/động từ chỉ trạng thái tâm lý (như 喜欢) để diễn tả mức độ cao nhất.' },
      { pre: '我们要不要买', blank: '几', post: '个新的椅子？', options: ['几', '多', '最'], answer: 0,
        explanation: '几 dùng để hỏi số lượng nhỏ chưa xác định, phía sau bắt buộc có lượng từ + danh từ.' },
      { pre: '六个', blank: '多', post: '月，我要去旅游。', options: ['多', '几', '最'], answer: 0,
        explanation: '多 đặt SAU lượng từ khi số đếm nhỏ hơn 10, diễn tả nghĩa "hơn".' }
    ]
  };

  // "Bai hoc" doc lai dung noi dung ngu phap DA CO SAN trong .grammar-card cua
  // chinh trang bai hoc (khong bia lai), qua fetch + DOMParser (khong eval,
  // khong script - hop le CSP). "Bai tap" dung du lieu tu soan rieng ben duoi,
  // ap dung skill ngu-phap-tieng-trung (chi dung tu da hoc, giai thich ro).
  var grammarCache = {};
  function loadLessonGrammar(lesson) {
    if (grammarCache[lesson.fullPageUrl]) return Promise.resolve(grammarCache[lesson.fullPageUrl]);
    return fetch(lesson.fullPageUrl)
      .then(function (r) { return r.text(); })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var section = doc.getElementById('grammar');
        var cards = section ? $all('.grammar-card', section).map(function (card) {
          var titleEl = card.querySelector('.g-title');
          var numEl = titleEl ? titleEl.querySelector('.g-num') : null;
          var title = titleEl ? titleEl.textContent.replace(numEl ? numEl.textContent : '', '').trim() : '';
          var sub = card.querySelector('.g-sub') ? card.querySelector('.g-sub').textContent.trim() : '';
          var ruleHtml = card.querySelector('.g-rule') ? card.querySelector('.g-rule').innerHTML.trim() : '';
          var rows = $all('.g-table tbody tr', card).map(function (tr) {
            var tds = $all('td', tr);
            return {
              zh: tds[0] ? tds[0].textContent.trim() : '',
              py: tds[1] ? tds[1].textContent.trim() : '',
              vn: tds[2] ? tds[2].textContent.trim() : ''
            };
          });
          return { title: title, sub: sub, ruleHtml: ruleHtml, rows: rows };
        }) : [];
        grammarCache[lesson.fullPageUrl] = cards;
        return cards;
      });
  }

  var grMode = 'lesson';
  var grPoints = [];
  var grQuiz = null;

  function showGrammarPractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = false;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#grSubtitle').textContent = 'Đang tải...';
    $('#grContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';

    grMode = 'lesson';
    $all('#grTabs .vp-tab').forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-gr-tab') === 'lesson'); });

    loadLessonGrammar(lesson).then(function (points) {
      grPoints = points;
      grQuiz = null;
      $('#grSubtitle').textContent = points.length + ' cấu trúc trong bài học này';
      renderGrammarContent();
    }).catch(function () {
      $('#grContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được nội dung ngữ pháp của bài này.</p>';
    });

    $('#grammarPractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderGrammarContent() {
    if (grMode === 'lesson') renderGrammarLesson();
    else renderGrammarExercise();
  }

  function renderGrammarLesson() {
    var wrap = $('#grContent');
    if (!grPoints.length) {
      wrap.innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có nội dung ngữ pháp.</p>';
      return;
    }
    wrap.innerHTML = grPoints.map(function (p, i) {
      var examplesHtml = p.rows.map(function (row) {
        return '<div class="gr-example-item"><div class="gr-example-zh hanzi">' + row.zh +
          ' <button type="button" class="vp-speak-btn" data-speak="' + row.zh.replace(/"/g, '&quot;') + '">🔊</button></div>' +
          '<div class="gr-example-py">' + row.py + '</div>' +
          '<div class="gr-example-vn">' + row.vn + '</div></div>';
      }).join('');
      return '<div class="gr-card">' +
        '<div class="gr-step"><span class="gr-num is-red">' + (i * 2 + 1) + '</span><div class="gr-step-text"><b>Cấu trúc:</b> ' + p.title + (p.ruleHtml ? '<br>' + p.ruleHtml : '') + '</div></div>' +
        (p.sub ? '<div class="gr-step"><span class="gr-num is-red">' + (i * 2 + 2) + '</span><div class="gr-step-text"><b>Cách dùng:</b> ' + p.sub + '</div></div>' : '') +
        (examplesHtml ? '<div class="gr-example-box"><div class="gr-step" style="margin-bottom:8px;"><span class="gr-num is-gold">' + '★' + '</span><div class="gr-step-text"><b>Ví dụ:</b></div></div>' + examplesHtml + '</div>' : '') +
        '</div>';
    }).join('');
    $all('[data-speak]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-speak')); });
    });
  }

  function renderGrammarExercise() {
    var wrap = $('#grContent');
    var items = GRAMMAR_EXERCISES[currentHubLesson.fullPageUrl] || [];
    if (!items.length) {
      wrap.innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có bài tập ngữ pháp.</p>';
      return;
    }
    if (!grQuiz) grQuiz = { pos: 0, score: 0 };

    if (grQuiz.pos >= items.length) {
      wrap.innerHTML =
        '<div class="vp-quiz-done"><strong>' + grQuiz.score + '/' + items.length + '</strong>' +
        '<p style="color:var(--color-gray-600);margin-bottom:var(--space-5);">Bạn đã hoàn thành bài tập ngữ pháp.</p>' +
        '<button type="button" class="btn btn-primary" id="grRestart">Làm lại</button></div>';
      $('#grRestart').addEventListener('click', function () { grQuiz = null; renderGrammarExercise(); });
      return;
    }

    var total = items.length;
    var q = items[grQuiz.pos];
    var segs = '';
    for (var i = 0; i < total; i++) segs += '<div class="vp-quiz-seg' + (i < grQuiz.pos ? ' is-done' : '') + '"></div>';

    var optionsHtml = q.options.map(function (opt, i) {
      return '<button type="button" class="vp-option-btn" data-idx="' + i + '">' + opt + '</button>';
    }).join('');

    wrap.innerHTML =
      '<div class="vp-quiz-progress">' + segs + '</div>' +
      '<div class="vp-quiz-counter">Câu ' + (grQuiz.pos + 1) + '/' + total + '</div>' +
      '<div class="vp-quiz-card">' +
        '<div class="gr-exercise-sentence hanzi">' + q.pre + '<span class="blank">___</span>' + q.post + '</div>' +
        '<div class="vp-quiz-options">' + optionsHtml + '</div>' +
        '<div id="grExplain" style="margin-top:var(--space-4);font-size:0.9rem;color:var(--color-gray-600);"></div>' +
      '</div>';

    $all('.vp-option-btn', wrap).forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var isCorrect = i === q.answer;
        $all('.vp-option-btn', wrap).forEach(function (b, j) {
          b.disabled = true;
          if (j === q.answer) b.classList.add('is-correct');
          else if (j === i) b.classList.add('is-wrong');
        });
        $('#grExplain').textContent = '💡 ' + q.explanation;
        if (isCorrect) grQuiz.score++;
        setTimeout(function () {
          grQuiz.pos++;
          renderGrammarExercise();
        }, 1800);
      });
    });
  }

  /* ---------------- Dialogue practice (Hoi thoai: 4 doan + audio goc that) ---------------- */

  var dpScenes = [];
  var dpIndex = 0;

  function showDialoguePractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = false;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#dpSubtitle').textContent = 'Đang tải...';
    $('#dpTabs').innerHTML = '';
    $('#dpContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';

    loadLessonDialog(lesson).then(function (dialogData) {
      dpScenes = dialogData;
      dpIndex = 0;
      $('#dpSubtitle').textContent = dialogData.length + ' đoạn hội thoại';
      renderDialogueTabs();
      renderDialogueScene();
    }).catch(function () {
      $('#dpContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được nội dung hội thoại của bài này.</p>';
    });

    $('#dialoguePractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderDialogueTabs() {
    var wrap = $('#dpTabs');
    wrap.innerHTML = '';
    dpScenes.forEach(function (scene, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'vp-tab' + (i === dpIndex ? ' active' : '');
      var parts = (scene.scene || '').split('·');
      btn.textContent = (i + 1) + ' · ' + (parts[1] || parts[0] || '').trim();
      btn.addEventListener('click', function () {
        dpIndex = i;
        renderDialogueTabs();
        renderDialogueScene();
      });
      wrap.appendChild(btn);
    });
  }

  function renderDialogueScene() {
    var wrap = $('#dpContent');
    var scene = dpScenes[dpIndex];
    if (!scene) {
      wrap.innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có hội thoại.</p>';
      return;
    }
    var audioBase = audioBaseFor(currentHubLesson);
    var audioSrc = audioBase ? audioBase + '/dlg-' + (dpIndex + 1) + '.mp3' : null;

    var audioHtml = audioSrc
      ? '<div class="dp-audio-box"><div class="dp-audio-label">🎙️ Audio gốc giáo trình</div><audio controls preload="none" src="' + audioSrc + '"></audio></div>'
      : '<div class="dp-audio-box"><span class="dp-audio-missing">⚠️ Chưa có audio gốc cho đoạn này.</span></div>';

    var linesHtml = scene.lines.map(function (line) {
      var isB = line.sp === 1;
      return '<div class="dp-line' + (isB ? ' is-b' : '') + '">' +
        '<div class="dp-avatar">' + (isB ? 'B' : 'A') + '</div>' +
        '<div class="dp-bubble"><div class="dp-zh hanzi">' + line.zh + '</div><div class="dp-py">' + line.py + '</div><div class="dp-vn">' + line.vn + '</div></div>' +
        '</div>';
    }).join('');

    wrap.innerHTML =
      '<div class="dp-scene-label">🎭 ' + scene.scene + '</div>' +
      audioHtml +
      linesHtml;
  }

  /* ---------------- Listen practice (Luyen nghe: chon nghia / chon chu Han / hoi thoai) ---------------- */

  var lpMode = 'meaning';
  var lpVocab = [];
  var lpListenData = [];
  var lpQuiz = null;

  function showListenPractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = false;
    $('#speakPractice').hidden = true;
    $('#lpContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';

    lpMode = 'meaning';
    $all('#lpTabs .vp-tab').forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-lp-tab') === 'meaning'); });

    Promise.all([loadLessonVocab(lesson), loadLessonListenData(lesson)]).then(function (res) {
      lpVocab = res[0];
      lpListenData = res[1];
      lpQuiz = null;
      renderListenContent();
    }).catch(function () {
      $('#lpContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được dữ liệu luyện nghe của bài này.</p>';
    });

    $('#listenPractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderListenContent() {
    if (lpMode === 'dialog') renderListenDialogPassages();
    else renderListenMCQuiz();
  }

  function renderListenMCQuiz() {
    var wrap = $('#lpContent');
    if (!lpVocab.length) {
      wrap.innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có từ vựng để luyện nghe.</p>';
      return;
    }
    if (!lpQuiz) lpQuiz = { order: shuffle(lpVocab.map(function (_, i) { return i; })), pos: 0, score: 0 };

    var total = lpQuiz.order.length;
    if (lpQuiz.pos >= total) {
      wrap.innerHTML =
        '<div class="vp-quiz-done"><strong>' + lpQuiz.score + '/' + total + '</strong>' +
        '<p style="color:var(--color-gray-600);margin-bottom:var(--space-5);">Bạn đã hoàn thành lượt luyện nghe này.</p>' +
        '<button type="button" class="btn btn-primary" id="lpRestart">Luyện lại</button></div>';
      $('#lpRestart').addEventListener('click', function () { lpQuiz = null; renderListenMCQuiz(); });
      return;
    }

    var idx = lpQuiz.order[lpQuiz.pos];
    var word = lpVocab[idx];
    var distractors = shuffle(lpVocab.filter(function (_, i) { return i !== idx; })).slice(0, 3);
    var options = shuffle([word].concat(distractors));

    var segs = '';
    for (var i = 0; i < total; i++) segs += '<div class="vp-quiz-seg' + (i < lpQuiz.pos ? ' is-done' : '') + '"></div>';

    var optionsHtml = options.map(function (opt, i) {
      var label = lpMode === 'hanzi' ? (opt.zh + ' (' + opt.py + ')') : opt.vn;
      return '<button type="button" class="vp-option-btn" data-idx="' + i + '">' + label + '</button>';
    }).join('');

    wrap.innerHTML =
      '<div class="vp-quiz-progress">' + segs + '</div>' +
      '<div class="vp-quiz-counter">Câu ' + (lpQuiz.pos + 1) + '/' + total + '</div>' +
      '<div class="vp-quiz-card">' +
        '<div class="vp-quiz-prompt"><button type="button" class="vp-quiz-play-btn" id="lpPlayBtn">🔊 Nghe</button></div>' +
        '<div class="vp-quiz-options">' + optionsHtml + '</div>' +
      '</div>';

    $('#lpPlayBtn').addEventListener('click', function () { vpSpeak(word.zh); });
    vpSpeak(word.zh);

    $all('.vp-option-btn', wrap).forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var isCorrect = options[i] === word;
        $all('.vp-option-btn', wrap).forEach(function (b, j) {
          b.disabled = true;
          if (options[j] === word) b.classList.add('is-correct');
          else if (j === i) b.classList.add('is-wrong');
        });
        if (isCorrect) lpQuiz.score++;
        setTimeout(function () {
          lpQuiz.pos++;
          renderListenMCQuiz();
        }, 900);
      });
    });
  }

  function renderListenDialogPassages() {
    var wrap = $('#lpContent');
    if (!lpListenData.length) {
      wrap.innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có bài luyện nghe hội thoại.</p>';
      return;
    }
    wrap.innerHTML = lpListenData.map(function (group, gi) {
      var questionsHtml = group.questions.map(function (q, qi) {
        var optsHtml = q.opts.map(function (opt, oi) {
          return '<button type="button" class="lp-opt-btn" data-gi="' + gi + '" data-qi="' + qi + '" data-oi="' + oi + '">' + opt + '</button>';
        }).join('');
        return '<div class="lp-question"><div class="lp-question-text">' + (qi + 1) + '. ' + q.q + '</div><div class="lp-question-opts">' + optsHtml + '</div></div>';
      }).join('');
      return '<div class="lp-passage">' +
        '<button type="button" class="vp-quiz-play-btn" data-audio="' + group.audio.replace(/"/g, '&quot;') + '">🔊 Nghe đoạn ' + (gi + 1) + '</button>' +
        questionsHtml +
        '</div>';
    }).join('');

    $all('[data-audio]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-audio')); });
    });
    $all('.lp-opt-btn', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var gi = parseInt(btn.getAttribute('data-gi'), 10);
        var qi = parseInt(btn.getAttribute('data-qi'), 10);
        var oi = parseInt(btn.getAttribute('data-oi'), 10);
        var q = lpListenData[gi].questions[qi];
        var siblingBtns = btn.parentElement.querySelectorAll('.lp-opt-btn');
        siblingBtns.forEach(function (b, i) {
          b.disabled = true;
          if (i === q.ans) b.classList.add('is-correct');
          else if (i === oi && oi !== q.ans) b.classList.add('is-wrong');
        });
      });
    });
  }

  /* ---------------- Speaking practice (Luyen noi: reuses the lesson's real speakingData) ---------------- */
  /* Two shapes exist in the data files: HSK2 "questions" (flat, all with real recording + AI scoring),
     and HSK1 "t1/t2/t3" (3-tier: mo phong / co huong dan / noi tu do, only tier 3 has recording). */

  var spData = null;
  var spTierMode = 1;
  var spRecState = {};

  function showSpeakPractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = false;
    $('#spTabs').innerHTML = '';
    $('#spContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';

    loadLessonSpeaking(lesson).then(function (speakingData) {
      spData = speakingData;
      spTierMode = 1;
      spRecState = {};
      renderSpeakTabs();
      renderSpeakContent();
    }).catch(function () {
      $('#spContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được nội dung luyện nói của bài này.</p>';
    });

    $('#speakPractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  var SP_TIER_LABELS = { 1: 'Tầng 1 · Mô phỏng', 2: 'Tầng 2 · Có hướng dẫn', 3: 'Tầng 3 · Nói tự do' };

  function renderSpeakTabs() {
    var wrap = $('#spTabs');
    if (!spData || spData.questions) {
      wrap.innerHTML = '';
      return;
    }
    wrap.innerHTML = [1, 2, 3].map(function (tier) {
      return '<button type="button" class="vp-tab' + (tier === spTierMode ? ' active' : '') + '" data-sp-tier="' + tier + '">' + SP_TIER_LABELS[tier] + '</button>';
    }).join('');
    $all('[data-sp-tier]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        spTierMode = parseInt(btn.getAttribute('data-sp-tier'), 10);
        $all('[data-sp-tier]', wrap).forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderSpeakContent();
      });
    });
  }

  function renderSpeakContent() {
    var wrap = $('#spContent');
    if (!spData) {
      wrap.innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có bài luyện nói.</p>';
      return;
    }
    if (spData.questions) {
      renderSpeakQuestions(wrap, spData.questions);
    } else if (spTierMode === 1 && spData.t1) {
      renderSpeakTier1(wrap, spData.t1);
    } else if (spTierMode === 2 && spData.t2) {
      renderSpeakTier2(wrap, spData.t2);
    } else if (spTierMode === 3 && spData.t3) {
      renderSpeakTier3(wrap, spData.t3);
    } else {
      wrap.innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có bài luyện nói.</p>';
    }
  }

  function bindSpeakButtons(wrap) {
    $all('[data-speak]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-speak')); });
    });
    $all('.sp-toggle-btn', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = $('#' + btn.getAttribute('data-target'));
        target.hidden = !target.hidden;
      });
    });
  }

  function recorderBoxHtml(i, referenceText) {
    return '<div class="sp-rec-box" id="spRec' + i + '" data-ref="' + referenceText.replace(/"/g, '&quot;') + '">' +
      '<div class="sp-rec-row">' +
        '<button type="button" class="sp-rec-btn sp-rec-start" data-action="rec-start" data-idx="' + i + '">🎙️ Ghi âm</button>' +
        '<button type="button" class="sp-rec-btn sp-rec-stop" data-action="rec-stop" data-idx="' + i + '" disabled>⏹ Dừng</button>' +
        '<button type="button" class="sp-rec-btn sp-rec-play" data-action="rec-play" data-idx="' + i + '" disabled>▶ Nghe lại</button>' +
        '<button type="button" class="sp-rec-btn sp-rec-submit" data-action="rec-submit" data-idx="' + i + '" disabled>📤 Chấm điểm</button>' +
      '</div>' +
      '<div class="sp-rec-status" id="spRecStatus' + i + '">Bấm 🎙️ Ghi âm rồi đọc to câu mẫu ở trên.</div>' +
      '<div class="sp-rec-result" id="spRecResult' + i + '"></div>' +
    '</div>';
  }

  function bindRecorderButtons(wrap) {
    $all('[data-action="rec-start"]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { spRecStart(parseInt(btn.getAttribute('data-idx'), 10)); });
    });
    $all('[data-action="rec-stop"]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { spRecStop(parseInt(btn.getAttribute('data-idx'), 10)); });
    });
    $all('[data-action="rec-play"]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { spRecPlay(parseInt(btn.getAttribute('data-idx'), 10)); });
    });
    $all('[data-action="rec-submit"]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { spRecSubmit(parseInt(btn.getAttribute('data-idx'), 10)); });
    });
  }

  function renderSpeakQuestions(wrap, questions) {
    wrap.innerHTML = questions.map(function (q, i) {
      return '<div class="sp-card">' +
        '<div class="sp-question">' +
          '<button type="button" class="vp-quiz-play-btn" data-speak="' + q.q_zh.replace(/"/g, '&quot;') + '">🔊 Nghe câu hỏi</button>' +
          '<div class="sp-q-zh hanzi">' + q.q_zh + '</div>' +
          '<div class="sp-q-vn">' + q.q_vn + '</div>' +
        '</div>' +
        (q.hint ? '<div class="sp-hint">' + q.hint + '</div>' : '') +
        '<button type="button" class="sp-toggle-btn" data-target="spSample' + i + '">Xem câu trả lời gợi ý ▾</button>' +
        '<div class="sp-sample" id="spSample' + i + '" hidden>' +
          '<div class="sp-sample-zh hanzi">' + q.sample + ' <button type="button" class="vp-speak-btn" data-speak="' + q.sample.replace(/"/g, '&quot;') + '">🔊</button></div>' +
          '<div class="sp-sample-vn">' + q.sample_vn + '</div>' +
        '</div>' +
        (q.note ? '<div class="sp-note">💡 ' + q.note + '</div>' : '') +
        recorderBoxHtml(i, q.sample) +
      '</div>';
    }).join('');

    bindSpeakButtons(wrap);
    bindRecorderButtons(wrap);
  }

  function renderSpeakTier1(wrap, t1) {
    var models = (t1.models || []).map(function (m) {
      return '<div class="sp-model-card">' +
        '<div class="sp-model-zh hanzi">' + m.zh + ' <button type="button" class="vp-speak-btn" data-speak="' + m.zh.replace(/"/g, '&quot;') + '">🔊</button></div>' +
        '<div class="sp-model-py">' + m.py + '</div>' +
        '<div class="sp-model-vn">' + m.vn + '</div>' +
      '</div>';
    }).join('');
    wrap.innerHTML = '<div class="sp-tier-intro">' + (t1.intro || '') + '</div><div class="sp-model-grid">' + models + '</div>';
    bindSpeakButtons(wrap);
  }

  function renderSpeakTier2(wrap, t2) {
    var drills = (t2.drills || []).map(function (dr, i) {
      var frame = (dr.frame || '').replace(/＿＿/g, '<b>＿＿</b>');
      var optsHtml = (dr.options || []).map(function (o) { return '<span class="sp-drill-opt">' + o + '</span>'; }).join('');
      var samplesHtml = (dr.samples || []).map(function (s) {
        return '<div class="sp-drill-sample">✓ ' + s + ' <button type="button" class="vp-speak-btn" data-speak="' + s.replace(/"/g, '&quot;') + '">🔊</button></div>';
      }).join('');
      return '<div class="sp-drill-card">' +
        '<div class="sp-drill-frame hanzi">' + frame + '</div>' +
        '<div class="sp-drill-py">' + (dr.frame_py || '') + '</div>' +
        '<div class="sp-drill-vn">' + (dr.vn || '') + '</div>' +
        '<div class="sp-drill-opts">' + optsHtml + '</div>' +
        '<button type="button" class="sp-toggle-btn" data-target="spDrill' + i + '">Xem câu mẫu ▾</button>' +
        '<div class="sp-drill-samples" id="spDrill' + i + '" hidden>' + samplesHtml + '</div>' +
      '</div>';
    }).join('');
    wrap.innerHTML = '<div class="sp-tier-intro">' + (t2.intro || '') + '</div><div class="sp-drill-grid">' + drills + '</div>';
    bindSpeakButtons(wrap);
  }

  function renderSpeakTier3(wrap, t3) {
    var tasks = (t3.tasks || []).map(function (t, i) {
      var chips = (t.structure || []).map(function (s) { return '<span class="sp-hint">' + s + '</span>'; }).join('');
      return '<div class="sp-card">' +
        '<div class="sp-task-role">' + t.role + '</div>' +
        '<div class="sp-task-guide">' + t.guide + '</div>' +
        '<div class="sp-hint-row">' + chips + '</div>' +
        '<button type="button" class="sp-toggle-btn" data-target="spSample' + i + '">Xem đoạn nói mẫu ▾</button>' +
        '<div class="sp-sample" id="spSample' + i + '" hidden>' +
          '<div class="sp-sample-zh hanzi">' + t.sample + ' <button type="button" class="vp-speak-btn" data-speak="' + t.sample.replace(/"/g, '&quot;') + '">🔊</button></div>' +
          '<div class="sp-sample-vn">' + t.sample_vn + '</div>' +
        '</div>' +
        (t.note ? '<div class="sp-note">💡 ' + t.note + '</div>' : '') +
        recorderBoxHtml(i, t.sample) +
      '</div>';
    }).join('');
    wrap.innerHTML = '<div class="sp-tier-intro">' + (t3.intro || '') + '</div>' + tasks;
    bindSpeakButtons(wrap);
    bindRecorderButtons(wrap);
  }

  function spRecStart(i) {
    var statusEl = $('#spRecStatus' + i);
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      statusEl.textContent = 'Trình duyệt không hỗ trợ ghi âm.';
      return;
    }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var mr = new MediaRecorder(stream);
      var chunks = [];
      mr.ondataavailable = function (e) { if (e.data.size > 0) chunks.push(e.data); };
      mr.onstop = function () {
        stream.getTracks().forEach(function (t) { t.stop(); });
        var blob = new Blob(chunks, { type: mr.mimeType || 'audio/webm' });
        spRecState[i] = spRecState[i] || {};
        spRecState[i].blob = blob;
        spRecState[i].url = URL.createObjectURL(blob);
        statusEl.textContent = '✓ Đã ghi âm xong. Nghe lại hoặc gửi chấm điểm.';
        var box = $('#spRec' + i);
        box.querySelector('.sp-rec-play').disabled = false;
        box.querySelector('.sp-rec-submit').disabled = false;
        box.querySelector('.sp-rec-start').disabled = false;
      };
      mr.start();
      spRecState[i] = spRecState[i] || {};
      spRecState[i].mr = mr;
      statusEl.textContent = '🔴 Đang ghi âm... bấm ⏹ khi nói xong.';
      var box = $('#spRec' + i);
      box.querySelector('.sp-rec-start').disabled = true;
      box.querySelector('.sp-rec-stop').disabled = false;
    }).catch(function () {
      statusEl.textContent = 'Không thể truy cập micro — hãy cho phép quyền micro rồi thử lại.';
    });
  }

  function spRecStop(i) {
    if (spRecState[i] && spRecState[i].mr && spRecState[i].mr.state === 'recording') spRecState[i].mr.stop();
    $('#spRec' + i).querySelector('.sp-rec-stop').disabled = true;
  }

  function spRecPlay(i) {
    if (!spRecState[i] || !spRecState[i].url) return;
    new Audio(spRecState[i].url).play();
  }

  function spRecSubmit(i) {
    if (!spRecState[i] || !spRecState[i].blob) return;
    var box = $('#spRec' + i);
    var referenceText = box.dataset.ref;
    var statusEl = $('#spRecStatus' + i);
    var resultEl = $('#spRecResult' + i);
    statusEl.textContent = '⏳ Đang chấm điểm...';
    box.querySelector('.sp-rec-submit').disabled = true;
    var reader = new FileReader();
    reader.onloadend = function () {
      var b64 = reader.result.split(',')[1];
      fetch('/api/speech-assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ audioBase64: b64, mimeType: spRecState[i].blob.type, referenceText: referenceText })
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, data: j }; }); })
        .then(function (res) {
          box.querySelector('.sp-rec-submit').disabled = false;
          if (!res.ok) {
            statusEl.textContent = '';
            resultEl.innerHTML = '<div class="sp-rec-fallback">🙈 Chưa bật chấm điểm AI (' + (res.data.error || '') + '). Hãy tự nghe lại và đối chiếu với câu mẫu ở trên nhé!</div>';
            return;
          }
          var d = res.data;
          resultEl.innerHTML = '<div class="sp-rec-scores">' +
            '<div class="sp-rec-score-item"><span>Phát âm</span><b>' + Math.round(d.pronunciation) + '</b></div>' +
            '<div class="sp-rec-score-item"><span>Độ chính xác</span><b>' + Math.round(d.accuracy) + '</b></div>' +
            '<div class="sp-rec-score-item"><span>Trôi chảy</span><b>' + Math.round(d.fluency) + '</b></div>' +
            '<div class="sp-rec-score-item"><span>Đầy đủ</span><b>' + Math.round(d.completeness) + '</b></div>' +
            '</div>' + (d.recognizedText ? '<div class="sp-rec-recognized">Máy nghe được: "' + d.recognizedText + '"</div>' : '');
          statusEl.textContent = '✓ Đã chấm điểm xong.';
        }).catch(function () {
          box.querySelector('.sp-rec-submit').disabled = false;
          statusEl.textContent = '';
          resultEl.innerHTML = '<div class="sp-rec-fallback">Không gửi được — hãy thử lại, hoặc tự đối chiếu với câu mẫu.</div>';
        });
    };
    reader.readAsDataURL(spRecState[i].blob);
  }

  /* ---------------- Streak (based on real lesson visits recorded in localStorage) ---------------- */

  var WEEKDAY_LABELS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

  function currentWeekDates() {
    var today = new Date();
    var day = today.getDay(); // 0 = Sunday
    var mondayOffset = day === 0 ? -6 : 1 - day;
    var monday = new Date(today);
    monday.setDate(today.getDate() + mondayOffset);
    var out = [];
    for (var i = 0; i < 7; i++) {
      var d = new Date(monday);
      d.setDate(monday.getDate() + i);
      out.push(d);
    }
    return out;
  }

  function computeStreak(studyDays) {
    var set = {};
    studyDays.forEach(function (d) { set[d] = true; });
    var streak = 0;
    var cursor = new Date();
    if (!set[dateKey(cursor)]) {
      cursor.setDate(cursor.getDate() - 1);
    }
    while (set[dateKey(cursor)]) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  function renderStreak() {
    var studyDays = readJSON(STORAGE_KEYS.studyDays, []);
    var streak = computeStreak(studyDays);
    $('#streakCount').textContent = streak + ' ngày';

    var todayKey = dateKey(new Date());
    var days = currentWeekDates();
    var wrap = $('#streakDays');
    wrap.innerHTML = '';
    days.forEach(function (d, i) {
      var key = dateKey(d);
      var isDone = studyDays.indexOf(key) !== -1;
      var isToday = key === todayKey;
      var el = document.createElement('div');
      el.className = 'dash-streak-day';
      el.innerHTML =
        '<span>' + WEEKDAY_LABELS[i] + '</span>' +
        '<span class="dash-streak-dot' + (isDone ? ' is-done' : '') + (isToday ? ' is-today' : '') + '"></span>';
      wrap.appendChild(el);
    });
  }

  /* ---------------- Stat tiles (real progress recorded from lesson pages) ---------------- */

  var STAT_TILE_DEFS = [
    { key: 'levels', label: 'Cấp độ', icon: 'is-red', svg: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>' },
    { key: 'lessons', label: 'Bài học', icon: 'is-gold', svg: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
    { key: 'vocab', label: 'Từ vựng', icon: 'is-green', svg: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>' },
    { key: 'examples', label: 'Câu ví dụ', icon: 'is-blue', svg: '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' }
  ];

  function computeProgressStats() {
    var visited = readJSON(STORAGE_KEYS.visitedLessons, {});
    var lessons = 0, vocab = 0, examples = 0;
    Object.keys(visited).forEach(function (pageKey) {
      lessons++;
      vocab += visited[pageKey].vocab || 0;
      examples += visited[pageKey].examples || 0;
    });
    return { levels: DASHBOARD_LEVEL_IDS.length, lessons: lessons, vocab: vocab, examples: examples };
  }

  function renderStatTiles() {
    var stats = computeProgressStats();
    var wrap = $('#statTiles');
    wrap.innerHTML = '';
    STAT_TILE_DEFS.forEach(function (def) {
      var tile = document.createElement('div');
      tile.className = 'stat-tile';
      tile.innerHTML =
        '<div class="stat-tile-icon ' + def.icon + '"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">' + def.svg + '</svg></div>' +
        '<div><strong>' + stats[def.key] + '</strong><span>' + def.label + '</span></div>';
      wrap.appendChild(tile);
    });
  }

  /* ---------------- Auth (demo only, localStorage) ---------------- */

  function initAuth() {
    var overlay = $('#authModal');
    var closeBtn = $('#authModalClose');
    var sidebarUserBtn = $('#sidebarUserBtn');

    function openModal(tab) {
      overlay.classList.add('is-open');
      setAuthTab(tab || 'login');
      var firstInput = $('#' + tab + 'Panel') ? $('#' + tab + 'Panel input') : $('#loginPanel input');
      if (firstInput) setTimeout(function () { firstInput.focus(); }, 50);
    }
    function closeModal() {
      overlay.classList.remove('is-open');
    }

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
      var name = user ? (user.name || user.email) : 'Học sinh Demo';
      $('#userName').textContent = name;
      $('#userAvatar').textContent = name.trim().charAt(0).toUpperCase();
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

    sidebarUserBtn.addEventListener('click', function () {
      var user = readJSON(STORAGE_KEYS.user, null);
      if (user) {
        if (!window.confirm('Đăng xuất khỏi tài khoản demo?')) return;
        localStorage.removeItem(STORAGE_KEYS.user);
        renderUserChip();
        showToast('Đã đăng xuất.');
      } else {
        openModal('login');
      }
    });

    renderUserChip();
  }

  /* ---------------- Init ---------------- */

  function init() {
    $('#footerYear').textContent = new Date().getFullYear();

    initSidebar();
    renderLevelCards();
    renderLevelSubmenu();
    renderStreak();
    renderStatTiles();
    initAuth();

    $('#levelDetailBack').addEventListener('click', showDashboard);
    $('#lessonHubBack').addEventListener('click', function () {
      if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $('#vocabBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $('#fcBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $('#grBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $all('#grTabs .vp-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        grMode = tab.getAttribute('data-gr-tab');
        grQuiz = null;
        $all('#grTabs .vp-tab').forEach(function (t) { t.classList.toggle('active', t === tab); });
        renderGrammarContent();
      });
    });
    $('#dpBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $('#lpBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $all('#lpTabs .vp-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        lpMode = tab.getAttribute('data-lp-tab');
        lpQuiz = null;
        $all('#lpTabs .vp-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        renderListenContent();
      });
    });
    $('#spBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $all('a[href="#home"]').forEach(function (link) {
      link.addEventListener('click', showDashboard);
    });
    $('#ctaStart').addEventListener('click', function () { selectLevel(practiceLevel); });
    $('#ctaStreak').addEventListener('click', function () { selectLevel(practiceLevel); });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
