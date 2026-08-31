(function () {
  'use strict';

  var STORAGE_KEYS = {
    visitedLessons: 'hyv_visited_lessons',
    studyDays: 'hyv_study_days',
    pinyinVisible: 'hyv_pinyin_visible',
    lessonScores: 'hyv_lesson_scores',
    auth: 'hyv_auth',
    visitorId: 'hyv_visitor_id',
    authPrompted: 'hyv_auth_prompted'
  };

  // Diem that theo tung phan cua tung bai hoc, ghi lai khi hoc sinh hoan thanh
  // 1 luot quiz/game — dung cho man hinh "Ket qua cuoi bai".
  function recordLessonScore(lesson, section, data) {
    var all = readJSON(STORAGE_KEYS.lessonScores, {});
    var ls = all[lesson.fullPageUrl] || {};
    ls[section] = data;
    all[lesson.fullPageUrl] = ls;
    writeJSON(STORAGE_KEYS.lessonScores, all);
    syncProgressToServer();
  }

  function recordGameScore(lesson, subtype, correct, total) {
    var all = readJSON(STORAGE_KEYS.lessonScores, {});
    var ls = all[lesson.fullPageUrl] || {};
    var game = ls.game || {};
    game[subtype] = { correct: correct, total: total };
    ls.game = game;
    all[lesson.fullPageUrl] = ls;
    writeJSON(STORAGE_KEYS.lessonScores, all);
    syncProgressToServer();
  }

  function getLessonScores(lesson) {
    var all = readJSON(STORAGE_KEYS.lessonScores, {});
    return all[lesson.fullPageUrl] || {};
  }

  // Gui tong diem THAT (tinh tu du lieu that da luu) len server de xep
  // hang — chi khi hoc sinh da dang nhap that (co token). Khong lam gi
  // neu chua dang nhap (diem van luu local binh thuong).
  function syncProgressToServer() {
    var auth = readJSON(STORAGE_KEYS.auth, null);
    if (!auth || !auth.token) return;

    var allScores = readJSON(STORAGE_KEYS.lessonScores, {});
    var totalCorrect = 0, totalQuestions = 0, lessonsDone = 0;
    Object.keys(allScores).forEach(function (lessonUrl) {
      var sections = allScores[lessonUrl];
      var hasAny = false;
      Object.keys(sections).forEach(function (key) {
        var val = sections[key];
        if (key === 'game') {
          Object.keys(val).forEach(function (sub) {
            totalCorrect += val[sub].correct;
            totalQuestions += val[sub].total;
            hasAny = true;
          });
        } else if (typeof val.total === 'number') {
          totalCorrect += val.correct;
          totalQuestions += val.total;
          hasAny = true;
        } else if (val.done) {
          hasAny = true;
        }
      });
      if (hasAny) lessonsDone++;
    });
    var studyDays = readJSON(STORAGE_KEYS.studyDays, []);
    var streak = computeStreak(studyDays);

    fetch('/api/scores/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth.token },
      body: JSON.stringify({
        totalCorrect: totalCorrect, totalQuestions: totalQuestions, streak: streak, lessonsDone: lessonsDone,
        studyDays: studyDays, lessonScores: allScores
      })
    }).catch(function () {});
  }

  // Gop tien do tu server (chuoi ngay hoc + diem tung bai) vao du lieu
  // dang co tren thiet bi nay, de dang nhap cung 1 tai khoan tren may
  // tinh hay dien thoai deu thay CUNG mot chuoi ngay hoc / diem so —
  // khong bao gio ghi de mat du lieu, chi gop (union) hai ben.
  function mergeProgressFromServer(progress) {
    if (!progress) return;
    var localDays = readJSON(STORAGE_KEYS.studyDays, []);
    var mergedDays = localDays.slice();
    (progress.studyDays || []).forEach(function (d) {
      if (mergedDays.indexOf(d) === -1) mergedDays.push(d);
    });
    writeJSON(STORAGE_KEYS.studyDays, mergedDays);

    var localScores = readJSON(STORAGE_KEYS.lessonScores, {});
    var mergedScores = {};
    Object.keys(localScores).forEach(function (k) { mergedScores[k] = localScores[k]; });
    Object.keys(progress.lessonScores || {}).forEach(function (k) { mergedScores[k] = progress.lessonScores[k]; });
    writeJSON(STORAGE_KEYS.lessonScores, mergedScores);

    renderStreak();
    renderStatTiles();
  }

  // Khi mo trang va da co phien dang nhap san (tu lan truoc), keo tien
  // do moi nhat tu server ve ngay — de neu vua hoc tren thiet bi khac,
  // thiet bi nay cung thay chuoi ngay hoc/diem cap nhat ma khong can
  // hoc lai. Neu server bao phien het han (token cu), tu dong dang xuat.
  function refreshProgressFromServer() {
    var auth = readJSON(STORAGE_KEYS.auth, null);
    if (!auth || !auth.token) return;
    fetch('/api/auth/me', { headers: { 'Authorization': 'Bearer ' + auth.token } })
      .then(function (r) {
        if (r.status === 401) {
          localStorage.removeItem(STORAGE_KEYS.auth);
          renderUserChip();
          renderAuthBanner();
          return null;
        }
        return r.json();
      })
      .then(function (data) {
        if (!data) return;
        mergeProgressFromServer(data.progress);
        syncProgressToServer();
      })
      .catch(function () {});
  }

  /* ---------------- Analytics (luot truy cap + thoi gian hoc, gui ve server) ---------------- */

  function getVisitorId() {
    var id = localStorage.getItem(STORAGE_KEYS.visitorId);
    if (id) return id;
    id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() :
      'v-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
    try { localStorage.setItem(STORAGE_KEYS.visitorId, id); } catch (e) {}
    return id;
  }

  function currentUserId() {
    var auth = readJSON(STORAGE_KEYS.auth, null);
    return auth && auth.user ? auth.user.id : null;
  }

  function initAnalytics() {
    var visitorId = getVisitorId();
    fetch('/api/track/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visitorId: visitorId })
    }).catch(function () {});

    var HEARTBEAT_MS = 60000;
    setInterval(function () {
      if (document.hidden) return;
      fetch('/api/track/heartbeat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorId: visitorId, userId: currentUserId(), seconds: HEARTBEAT_MS / 1000 })
      }).catch(function () {});
    }, HEARTBEAT_MS);
  }

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

  var DASHBOARD_LEVEL_IDS = ['hsk1', 'hsk1v3', 'hsk2', 'hsk3', 'yct'];
  var LEVEL_COLOR = { hsk1: 'red', hsk1v3: 'blue', hsk2: 'green', hsk3: 'gold', yct: 'blue' };
  var LEVEL_SHORT = { hsk1: 'HSK1', hsk1v3: 'HSK1·3.0', hsk2: 'HSK2', hsk3: 'HSK3', yct: 'YCT1' };
  var READY_LEVELS = { hsk1: true, hsk1v3: true, hsk2: true, hsk3: true, yct: true };
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

  var PRACTICE_LEVEL_LABEL = { hsk1: 'HSK 1', hsk1v3: 'HSK 1 (3.0 Mới)', hsk2: 'HSK 2', hsk3: 'HSK 3', yct: 'YCT 1' };

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
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
  }

  function showLevelDetail(id) {
    currentLevelId = id;
    $('#home').hidden = true;
    $('#levelDetail').hidden = false;
    $('#lessonHub').hidden = true;
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
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
    game: { label: 'Game ôn tập', emoji: '🎮', color: 'indigo' },
    speak: { label: 'Luyện nói', emoji: '🗣️', color: 'purple' },
    translate: { label: 'Luyện dịch', emoji: '🔄', color: 'pink' },
    workbook: { label: 'Luyện tập sách bài tập', emoji: '📓', color: 'green' }
  };

  // match/fill/sort/errfix/mc gop chung vao 1 o "Game on tap" tren giao dien chinh
  // (thay vi hien 4 o rieng le); ben trong o do la man hinh chon game.
  var LEVEL_GAME_TYPES = {
    hsk1: ['match', 'fill', 'sort', 'mc'],
    hsk1v3: ['match', 'fill', 'sort', 'mc'],
    hsk2: ['match', 'fill', 'sort', 'errfix'],
    hsk3: ['match', 'fill', 'sort', 'errfix']
  };

  // Danh sách tab thật theo đúng thứ tự hiển thị trên từng loại trang bài học.
  var LEVEL_HUB_TABS = {
    hsk1: ['vocab', 'flash', 'grammar', 'dialog', 'listen', 'game', 'speak', 'translate'],
    hsk1v3: ['warmup', 'vocab', 'flash', 'grammar', 'dialog', 'listen', 'game', 'speak', 'translate', 'workbook'],
    hsk2: ['vocab', 'flash', 'grammar', 'dialog', 'game', 'listen', 'speak', 'translate'],
    hsk3: ['vocab', 'flash', 'grammar', 'dialog', 'game', 'listen', 'speak', 'translate'],
    yct: null // trang YCT dùng cấu trúc tab riêng (yk-tab), chưa hỗ trợ mở qua hub
  };

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
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
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
      if (tabId === 'warmup') {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          showWarmupPractice(levelId, lesson);
        });
      } else if (tabId === 'vocab') {
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
      } else if (tabId === 'game') {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          showGamePractice(levelId, lesson);
        });
      } else if (tabId === 'translate') {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          showTranslatePractice(levelId, lesson);
        });
      } else if (tabId === 'workbook') {
        tile.addEventListener('click', function (e) {
          e.preventDefault();
          showWorkbookPractice(levelId, lesson);
        });
      }
      grid.appendChild(tile);
    });

    if (!tabIds) {
      grid.innerHTML = '<p style="color:var(--color-gray-600);grid-column:1/-1;">Bài học này dùng giao diện riêng, bấm vào để mở đầy đủ.</p>';
    }

    var ctaWrap = $('#hubCtaWrap');
    ctaWrap.innerHTML = '';
    if (tabIds) {
      var cta = document.createElement('button');
      cta.type = 'button';
      cta.className = 'hub-cta';
      cta.innerHTML = '🏆 Xem kết quả cuối bài';
      cta.addEventListener('click', function () { showResultsPractice(levelId, lesson); });
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

  /* ---------------- Warmup (khoi dong: noi hinh anh voi chu Han) ---------------- */

  var wpItems = [];
  var wpSel = null;
  var wpDone = null;

  function showWarmupPractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#warmupPractice').hidden = false;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
    $('#wpContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';

    loadLessonWarmup(lesson).then(function (data) {
      wpItems = data || [];
      wpSel = null;
      wpDone = new Set();
      $('#wpSubtitle').textContent = wpItems.length
        ? wpItems.length + ' cặp hình ảnh - chữ Hán để ghép'
        : 'Bài học này chưa có phần khởi động';
      if (wpItems.length) pgbInit('wpq', wpItems.length);
      renderWarmupPractice();
    }).catch(function () {
      $('#wpContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được nội dung khởi động của bài này.</p>';
    });

    $('#warmupPractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderWarmupPractice() {
    var wrap = $('#wpContent');
    if (!wpItems.length) {
      wrap.innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có phần khởi động.</p>';
      return;
    }
    var shuffledCards = shuffle(wpItems.slice());
    var shuffledOpts = shuffle(wpItems.slice());
    wrap.innerHTML =
      pgbHtml('wpq', wpItems.length) +
      '<div class="wu-grid" id="wpGrid">' +
        shuffledCards.map(function (w) {
          var media = /^\//.test(w.img)
            ? '<div class="wu-photo"><img src="' + w.img + '" alt="" loading="lazy"></div>'
            : '<div class="wu-emoji">' + w.img + '</div>';
          return '<div class="wu-card" id="wpc_' + w.letter + '" data-letter="' + w.letter + '">' +
            media + '<div class="wu-label">（ ？ ）</div></div>';
        }).join('') +
      '</div>' +
      '<div style="margin:var(--space-4) 0 var(--space-2);font-weight:600;color:var(--color-gray-600);font-size:0.9rem;">Các từ để nối:</div>' +
      '<div class="wu-options" id="wpOpts">' +
        shuffledOpts.map(function (w) {
          return '<button type="button" class="wu-opt" id="wpopt_' + w.letter + '" data-letter="' + w.letter + '">' + w.letter + '. ' + w.label + '</button>';
        }).join('') +
      '</div>' +
      '<div style="min-height:24px;font-size:0.9rem;margin-top:var(--space-3);" id="wpFb"></div>';
    pgbPaint('wpq');

    $all('.wu-card', wrap).forEach(function (card) {
      card.addEventListener('click', function () { wpSelectCard(card.dataset.letter, card); });
    });
    $all('.wu-opt', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { wpSelectOpt(btn.dataset.letter); });
    });
  }

  function wpSelectCard(letter, el) {
    if (wpDone.has(letter)) return;
    $all('.wu-card', $('#wpContent')).forEach(function (c) {
      if (!c.classList.contains('matched')) c.classList.remove('is-sel');
    });
    wpSel = letter;
    el.classList.add('is-sel');
    $('#wpFb').innerHTML = '<span style="color:var(--color-blue-600);">← Bây giờ chọn đáp án chữ!</span>';
  }

  function wpSelectOpt(letter) {
    var fb = $('#wpFb');
    if (!wpSel) { fb.innerHTML = '<span style="color:var(--color-gold-500);">Hãy chọn hình ảnh trước!</span>'; return; }
    if (wpDone.has('O' + letter)) return;
    var correct = wpSel === letter;
    var idx = wpItems.findIndex(function (w) { return w.letter === wpSel; });
    var cardEl = document.getElementById('wpc_' + wpSel);
    var optEl = document.getElementById('wpopt_' + letter);
    var w = wpItems[idx];
    if (correct) {
      cardEl.classList.add('matched');
      cardEl.classList.remove('is-sel');
      cardEl.querySelector('.wu-label').innerHTML = '<strong>' + w.label + '</strong><br><span class="wu-py">' + w.py + '</span>';
      optEl.classList.add('is-correct');
      optEl.disabled = true;
      wpDone.add(wpSel); wpDone.add('O' + letter);
      pgbRecord('wpq', idx, true);
      wpSel = null;
      fb.innerHTML = '<span style="color:var(--color-green-600);">✓ Đúng rồi!</span>';
      if (wpDone.size === wpItems.length * 2) {
        fb.innerHTML = '<span style="color:var(--color-red-600);font-weight:700;">🎉 Hoàn thành! Bạn đã ghép đúng tất cả!</span>';
        recordLessonScore(currentHubLesson, 'warmup', { correct: wpItems.length, total: wpItems.length });
      }
    } else {
      optEl.classList.add('is-wrong');
      fb.innerHTML = '<span style="color:var(--color-red-600);">✗ Chưa đúng, thử lại!</span>';
      setTimeout(function () { optEl.classList.remove('is-wrong'); }, 600);
    }
  }

  /* ---------------- Workbook practice (Luyen tap sach bai tap) ---------------- */

  var wbSections = [];
  var wbActiveIdx = 0;

  function showWorkbookPractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#workbookPractice').hidden = false;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
    $('#wbContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';
    $('#wbTabs').innerHTML = '';

    loadLessonWorkbook(lesson).then(function (data) {
      wbSections = (data && data.sections) || [];
      wbActiveIdx = 0;
      if (!wbSections.length) {
        $('#wbTabs').innerHTML = '';
        $('#wbContent').innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có nội dung sách bài tập.</p>';
        return;
      }
      renderWbTabs();
      renderWbContent();
    }).catch(function () {
      $('#wbContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được nội dung sách bài tập của bài này.</p>';
    });

    $('#workbookPractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderWbTabs() {
    var wrap = $('#wbTabs');
    wrap.innerHTML = wbSections.map(function (s, i) {
      return '<button type="button" class="vp-tab' + (i === wbActiveIdx ? ' active' : '') + '" data-wb-idx="' + i + '">' + s.title + '</button>';
    }).join('');
    $all('.vp-tab', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        wbActiveIdx = parseInt(btn.getAttribute('data-wb-idx'), 10);
        renderWbTabs();
        renderWbContent();
      });
    });
  }

  function wbRenderTable(block) {
    var theadHtml = block.headers
      ? '<thead><tr>' + block.headers.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead>'
      : '';
    var rowsHtml = block.rows.map(function (row) {
      return '<tr>' + row.map(function (cell) { return '<td>' + (cell === '' ? '—' : cell) + '</td>'; }).join('') + '</tr>';
    }).join('');
    return '<div class="wb-block">' +
      (block.caption ? '<div class="wb-block-caption">' + block.caption + '</div>' : '') +
      '<div class="wb-table-wrap"><table class="wb-table">' + theadHtml + '<tbody>' + rowsHtml + '</tbody></table></div>' +
      (block.note ? '<p class="wb-note">' + block.note + '</p>' : '') +
      '</div>';
  }

  function wbRenderPhotos(block) {
    return '<div class="wb-block">' +
      (block.caption ? '<div class="wb-block-caption">' + block.caption + '</div>' : '') +
      '<div class="wb-photo-grid">' +
      block.items.map(function (it) {
        return '<div class="wb-photo-card">' +
          '<div class="wb-photo-img"><img src="' + it.img + '" alt="" loading="lazy"></div>' +
          '<div class="wb-photo-py">' + it.py + '</div>' +
          '<div class="wb-photo-hz hanzi">' + it.hz + '</div>' +
          '</div>';
      }).join('') +
      '</div></div>';
  }

  function wbRenderTones() {
    var tones = [
      { label: '1 (ā)', cls: 'tone-1' },
      { label: '2 (á)', cls: 'tone-2' },
      { label: '3 (ǎ)', cls: 'tone-3' },
      { label: '4 (à)', cls: 'tone-4' }
    ];
    return '<div class="wb-block">' +
      '<div class="wb-block-caption">Bốn thanh điệu cơ bản</div>' +
      '<div class="wb-tone-chart">' +
      tones.map(function (t) {
        return '<div class="wb-tone-col"><div class="wb-tone-line ' + t.cls + '"></div><div class="wb-tone-label">' + t.label + '</div></div>';
      }).join('') +
      '</div></div>';
  }

  var wbBlockSeq = 0;
  function wbRenderBlankdrill(block) {
    var blockId = 'wbdrill-' + (wbBlockSeq++);
    return '<div class="wb-block" id="' + blockId + '">' +
      (block.caption ? '<div class="wb-block-caption">' + block.caption + '</div>' : '') +
      '<p class="wb-note">Nghe audio phía trên, điền trực tiếp vào ô trống rồi bấm "Xem đáp án" để đối chiếu.</p>' +
      '<div class="wb-drill-chips">' +
      block.items.map(function (it) {
        return '<span class="wb-drill-chip">' + it.before +
          '<input type="text" class="wb-drill-input" maxlength="6" autocomplete="off" spellcheck="false">' +
          it.after +
          '<span class="wb-drill-answer">→ ' + it.answer + '</span></span>';
      }).join('') +
      '</div>' +
      '<button type="button" class="wb-reveal-btn" data-reveal-target="' + blockId + '">👁️ Xem đáp án</button>' +
      '</div>';
  }

  function wbRenderTonemc(block) {
    return '<div class="wb-block">' +
      (block.caption ? '<div class="wb-block-caption">' + block.caption + '</div>' : '') +
      '<p class="wb-note">Nghe audio phía trên, bấm chọn đáp án đúng.</p>' +
      '<div class="wb-tonemc-list">' +
      block.items.map(function (it, i) {
        var blankHtml = block.noBlank ? '' : '<span class="wb-tonemc-blank">？</span>';
        return '<div class="wb-tonemc-item">' +
          '<span class="wb-tonemc-prompt' + (block.noBlank ? ' hanzi' : '') + '">' + it.before + blankHtml + it.after + '</span>' +
          '<div class="wb-tonemc-opts">' +
          it.options.map(function (opt) {
            return '<button type="button" class="wb-tonemc-opt"' + (opt === it.answer ? ' data-correct="1"' : '') + '>' + opt + '</button>';
          }).join('') +
          '</div></div>';
      }).join('') +
      '</div>' +
      (block.note ? '<p class="wb-note">' + block.note + '</p>' : '') +
      '</div>';
  }

  function wbRenderWordlist(block) {
    var isPairs = Array.isArray(block.items[0]);
    return '<div class="wb-block">' +
      (block.caption ? '<div class="wb-block-caption">' + block.caption + '</div>' : '') +
      '<p class="wb-note">Nghe audio phía trên rồi đọc theo.</p>' +
      '<div class="wb-wordlist">' +
      block.items.map(function (it, i) {
        var text = isPairs ? it.join(' / ') : it;
        return '<span class="wb-word-chip"><span class="wb-word-num">' + (i + 1) + '</span>' + text + '</span>';
      }).join('') +
      '</div></div>';
  }

  var wbMatchSelMap = {};
  var wbMatchDoneMap = {};

  function wbRenderPyMatch(block) {
    var blockId = 'wbmatch-' + (wbBlockSeq++);
    var order = shuffle(block.items.map(function (_, i) { return i; }));
    return '<div class="wb-block" id="' + blockId + '">' +
      (block.caption ? '<div class="wb-block-caption">' + block.caption + '</div>' : '') +
      '<p class="wb-note">Nghe audio phía trên, bấm 1 pinyin bên trái rồi bấm hán tự tương ứng bên phải.</p>' +
      '<div class="mg-wrap wb-pymatch-wrap" data-wb-match-id="' + blockId + '">' +
        '<div class="mg-col"><div class="mg-col-label">Pinyin</div><div class="wb-pymatch-left">' +
          block.items.map(function (it, i) {
            return '<button type="button" class="mg-item" data-wpy-li="' + i + '">' + it.py + '</button>';
          }).join('') +
        '</div></div>' +
        '<div class="mg-col"><div class="mg-col-label">Hán tự</div><div class="wb-pymatch-right">' +
          order.map(function (ri) {
            return '<button type="button" class="mg-item hanzi" data-wpy-ri="' + ri + '">' + block.items[ri].hz + '</button>';
          }).join('') +
        '</div></div>' +
      '</div>' +
      '<div class="mg-fb" data-wpy-fb="' + blockId + '"></div>' +
      '</div>';
  }

  function wbMatchClickLeft(i, blockEl, blockId) {
    wbMatchSelMap[blockId] = i;
    $all('.mg-item[data-wpy-li]', blockEl).forEach(function (el) { el.classList.remove('is-sel'); });
    blockEl.querySelector('.mg-item[data-wpy-li="' + i + '"]').classList.add('is-sel');
    var fb = blockEl.querySelector('[data-wpy-fb]');
    if (fb) fb.textContent = '';
  }

  function wbMatchClickRight(ri, block, blockEl, blockId) {
    var fb = blockEl.querySelector('[data-wpy-fb]');
    var sel = wbMatchSelMap[blockId];
    if (sel === undefined || sel === null) {
      fb.innerHTML = '<span style="color:var(--color-gold-500);">← Chọn pinyin trước</span>';
      return;
    }
    var rightEl = blockEl.querySelector('.mg-item[data-wpy-ri="' + ri + '"]');
    if (rightEl.classList.contains('is-correct')) return;
    var leftEl = blockEl.querySelector('.mg-item[data-wpy-li="' + sel + '"]');
    var isCorrect = sel === ri;
    if (isCorrect) {
      leftEl.classList.remove('is-sel');
      leftEl.classList.add('is-correct');
      rightEl.classList.add('is-correct');
      wbMatchDoneMap[blockId].add(sel);
      fb.innerHTML = '<span style="color:var(--color-green-600);">✓ Đúng rồi!</span>';
      if (wbMatchDoneMap[blockId].size === block.items.length) {
        fb.innerHTML = '<span style="color:var(--color-red-600);font-weight:700;">🎉 Hoàn thành! Ghép đúng tất cả!</span>';
      }
    } else {
      leftEl.classList.remove('is-sel');
      rightEl.classList.add('mg-shake');
      fb.innerHTML = '<span style="color:var(--color-red-600);">✗ Chưa đúng, thử lại!</span>';
      setTimeout(function () { rightEl.classList.remove('mg-shake'); }, 350);
    }
    wbMatchSelMap[blockId] = null;
  }

  var mtAnswers = {};
  var mtSubmitted = false;

  function mtOptHtml(qKey, opt) {
    if (opt.img) {
      return '<button type="button" class="mt-opt mt-opt-pic" data-mt-q="' + qKey + '" data-mt-key="' + opt.key + '">' +
        '<img src="' + opt.img + '" alt="" loading="lazy"><span class="mt-opt-key">' + opt.key + '</span></button>';
    }
    return '<button type="button" class="mt-opt mt-opt-text" data-mt-q="' + qKey + '" data-mt-key="' + opt.key + '">' +
      '<span class="mt-opt-key">' + opt.key + '</span>' +
      '<span class="mt-opt-body"><span class="hanzi">' + opt.text + '</span>' + (opt.py ? '<span class="mt-opt-py">' + opt.py + '</span>' : '') + '</span>' +
      '</button>';
  }

  function mtQuestionHtml(q, qKey) {
    var promptHtml = q.prompt
      ? '<div class="mt-q-prompt">' + (q.promptPy ? '<div class="mt-q-py">' + q.promptPy + '</div>' : '') + '<div class="hanzi">' + q.prompt.replace(/\n/g, '<br>') + '</div></div>'
      : '';
    var pendingTag = !q.answer ? '<span class="mt-q-pending">Đang chờ đáp án</span>' : '';
    return '<div class="mt-q" data-mt-qkey="' + qKey + '">' +
      '<div class="mt-q-num">' + q.n + '</div>' +
      '<div class="mt-q-body">' + promptHtml +
      '<div class="mt-q-opts">' + q.options.map(function (o) { return mtOptHtml(qKey, o); }).join('') + '</div>' +
      pendingTag +
      '</div></div>';
  }

  function wbRenderMockTest(block) {
    var listeningHtml = block.listening.map(function (q) { return mtQuestionHtml(q, 'L' + q.n); }).join('');
    var readingHtml = block.reading.map(function (q) { return mtQuestionHtml(q, 'R' + q.n); }).join('');
    var hasPending = block.listening.concat(block.reading).some(function (q) { return !q.answer; });
    return '<div class="wb-block mt-wrap">' +
      '<div class="mt-part-title">🎧 Nghe (câu 1–10)</div>' +
      (hasPending ? '<p class="wb-note">Phần này chưa có đáp án chính thức từ sách, tạm thời chưa chấm điểm — vẫn có thể chọn để luyện tập.</p>' : '') +
      '<div class="mt-q-list">' + listeningHtml + '</div>' +
      '<div class="mt-part-title">📖 Đọc (câu 11–20)</div>' +
      '<div class="mt-q-list">' + readingHtml + '</div>' +
      '<div id="mtResultBar" class="mt-result-bar" hidden></div>' +
      '<button type="button" id="mtSubmitBtn" class="wb-reveal-btn">✅ Nộp bài</button>' +
      '</div>';
  }

  function mtGrade(block) {
    var all = block.listening.concat(block.reading);
    var correctCount = 0;
    var gradableCount = 0;
    all.forEach(function (q) {
      var qKey = (block.listening.indexOf(q) > -1 ? 'L' : 'R') + q.n;
      var picked = mtAnswers[qKey];
      var qEl = document.querySelector('.mt-q[data-mt-qkey="' + qKey + '"]');
      if (!q.answer) {
        if (qEl) $all('.mt-opt', qEl).forEach(function (btn) { btn.disabled = true; });
        return;
      }
      gradableCount++;
      var isCorrect = picked === q.answer;
      if (isCorrect) correctCount++;
      if (!qEl) return;
      $all('.mt-opt', qEl).forEach(function (btn) {
        btn.disabled = true;
        var key = btn.getAttribute('data-mt-key');
        if (key === q.answer) btn.classList.add('is-correct');
        else if (key === picked) btn.classList.add('is-wrong');
      });
    });
    return { correct: correctCount, total: gradableCount };
  }

  function wbRenderDialoguePics(block) {
    return '<div class="wb-block">' +
      (block.caption ? '<div class="wb-block-caption">' + block.caption + '</div>' : '') +
      '<div class="wb-dlgpic-grid">' +
      block.items.map(function (it, i) {
        return '<div class="wb-dlgpic-card">' +
          '<div class="wb-dlgpic-num">' + (i + 1) + '</div>' +
          '<div class="wb-dlgpic-img"><img src="' + it.img + '" alt="" loading="lazy"></div>' +
          '<div class="wb-dlgpic-lines">' + it.lines.map(function (l) { return '<div>' + l + '</div>'; }).join('') + '</div>' +
          '</div>';
      }).join('') +
      '</div></div>';
  }

  function renderWbContent() {
    var section = wbSections[wbActiveIdx];
    var wrap = $('#wbContent');
    if (!section) { wrap.innerHTML = ''; return; }
    var audioHtml = section.audio
      ? '<div class="wb-audio-box"><div class="wb-audio-label">🎧 Audio gốc sách bài tập</div><audio controls preload="none" src="' + section.audio + '"></audio></div>'
      : '';
    var blocksHtml = (section.blocks || []).map(function (block) {
      if (block.type === 'table') return wbRenderTable(block);
      if (block.type === 'photos') return wbRenderPhotos(block);
      if (block.type === 'tones') return wbRenderTones();
      if (block.type === 'blankdrill') return wbRenderBlankdrill(block);
      if (block.type === 'tonemc') return wbRenderTonemc(block);
      if (block.type === 'dialoguepics') return wbRenderDialoguePics(block);
      if (block.type === 'wordlist') return wbRenderWordlist(block);
      if (block.type === 'pymatch') return wbRenderPyMatch(block);
      if (block.type === 'mocktest') return wbRenderMockTest(block);
      return '';
    }).join('');
    wrap.innerHTML = audioHtml + blocksHtml;
    $all('.wb-pymatch-wrap', wrap).forEach(function (wrapEl) {
      var blockId = wrapEl.getAttribute('data-wb-match-id');
      var blockEl = document.getElementById(blockId);
      var pyList = $all('.wb-pymatch-left .mg-item', wrapEl).map(function (el) { return el.textContent; });
      var hzByRi = {};
      $all('.wb-pymatch-right .mg-item', wrapEl).forEach(function (el) { hzByRi[el.getAttribute('data-wpy-ri')] = el.textContent; });
      var block = { items: pyList.map(function (py) { return { py: py }; }) };
      wbMatchSelMap[blockId] = null;
      wbMatchDoneMap[blockId] = new Set();
      $all('.mg-item[data-wpy-li]', wrapEl).forEach(function (btn) {
        btn.addEventListener('click', function () { wbMatchClickLeft(parseInt(btn.getAttribute('data-wpy-li'), 10), blockEl, blockId); });
      });
      $all('.mg-item[data-wpy-ri]', wrapEl).forEach(function (btn) {
        btn.addEventListener('click', function () { wbMatchClickRight(parseInt(btn.getAttribute('data-wpy-ri'), 10), block, blockEl, blockId); });
      });
    });
    var mockTestBlock = (section.blocks || []).filter(function (b) { return b.type === 'mocktest'; })[0];
    if (mockTestBlock) {
      mtAnswers = {};
      mtSubmitted = false;
      $all('.mt-opt', wrap).forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (mtSubmitted) return;
          var qKey = btn.getAttribute('data-mt-q');
          var qEl = btn.closest('.mt-q');
          $all('.mt-opt', qEl).forEach(function (b) { b.classList.remove('is-selected'); });
          btn.classList.add('is-selected');
          mtAnswers[qKey] = btn.getAttribute('data-mt-key');
        });
      });
      var submitBtn = $('#mtSubmitBtn');
      if (submitBtn) {
        submitBtn.addEventListener('click', function () {
          if (mtSubmitted) { renderWbContent(); return; }
          mtSubmitted = true;
          var result = mtGrade(mockTestBlock);
          var bar = $('#mtResultBar');
          bar.hidden = false;
          bar.innerHTML = '🎯 Bạn làm đúng <strong>' + result.correct + '/' + result.total + '</strong> câu.';
          recordLessonScore(currentHubLesson, 'workbook-mocktest', { correct: result.correct, total: result.total });
          submitBtn.textContent = '🔄 Làm lại';
        });
      }
    }
    $all('.wb-tonemc-opt', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.wb-tonemc-item');
        if (item.classList.contains('is-done')) return;
        var correct = btn.hasAttribute('data-correct');
        $all('.wb-tonemc-opt', item).forEach(function (b) {
          b.disabled = true;
          if (b.hasAttribute('data-correct')) b.classList.add('is-correct');
        });
        if (!correct) btn.classList.add('is-wrong');
        item.classList.add('is-done');
      });
    });
    $all('.wb-reveal-btn', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = document.getElementById(btn.getAttribute('data-reveal-target'));
        if (!target) return;
        var revealed = target.classList.toggle('is-revealed');
        btn.textContent = revealed ? '🙈 Ẩn đáp án' : '👁️ Xem đáp án';
      });
    });
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
            wuData: iframe.contentWindow.wuData || [],
            wbData: iframe.contentWindow.wbData || null,
            vocabData: iframe.contentWindow.vocabData || [],
            dialogData: iframe.contentWindow.dialogData || [],
            listenData: iframe.contentWindow.listenData || [],
            speakingData: iframe.contentWindow.speakingData || null,
            matchData: iframe.contentWindow.matchData || [],
            fillData: iframe.contentWindow.fillData || [],
            sortData: iframe.contentWindow.sortData || [],
            errorFixData: iframe.contentWindow.errorFixData || [],
            mcData: iframe.contentWindow.mcData || [],
            translateData: iframe.contentWindow.translateData || [],
            translateDataRev: iframe.contentWindow.translateDataRev || []
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

  function loadLessonWarmup(lesson) {
    return loadLessonRawData(lesson).then(function (data) { return data.wuData; });
  }

  function loadLessonWorkbook(lesson) {
    return loadLessonRawData(lesson).then(function (data) { return data.wbData; });
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

  function loadLessonGameData(lesson) {
    return loadLessonRawData(lesson).then(function (data) {
      return {
        match: data.matchData,
        fill: data.fillData,
        sort: data.sortData,
        errfix: data.errorFixData,
        mc: data.mcData
      };
    });
  }

  function loadLessonTranslate(lesson) {
    return loadLessonRawData(lesson).then(function (data) {
      return { vi2zh: data.translateData, zh2vi: data.translateDataRev };
    });
  }

  function audioBaseFor(lesson) {
    var m = lesson.fullPageUrl.match(/\/lessons\/(hsk1-|hsk1v3-)?bai-(\d+)\.html/);
    if (!m) return null;
    return m[1] ? '/audio/' + m[1] + 'bai-' + m[2] : '/audio/bai-' + m[2];
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

  // ---- Hán tự: nét chữ thật (HanziWriter) + luyện viết, gắn ngay trong thẻ từ vựng ----
  var vpHzWriters = {};
  var strokeDataCache = {};
  var hanziWriterLibPromise = null;

  function ensureHanziWriterLib() {
    if (typeof HanziWriter !== 'undefined') return Promise.resolve();
    if (hanziWriterLibPromise) return hanziWriterLibPromise;
    hanziWriterLibPromise = new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = '/js/vendor/hanzi-writer.min.js';
      s.onload = function () { resolve(); };
      s.onerror = function () { resolve(); };
      document.head.appendChild(s);
    });
    return hanziWriterLibPromise;
  }

  function strokesUrlFor(lesson) {
    var m = lesson.fullPageUrl.match(/\/lessons\/(hsk1-|hsk1v3-)?bai-(\d+)\.html/);
    if (!m || !m[1]) return null;
    return '/js/' + m[1] + 'bai-' + m[2] + '-strokes.js';
  }

  function loadStrokeData(lesson) {
    var key = lesson.fullPageUrl;
    if (Object.prototype.hasOwnProperty.call(strokeDataCache, key)) return Promise.resolve(strokeDataCache[key]);
    var url = strokesUrlFor(lesson);
    if (!url) { strokeDataCache[key] = null; return Promise.resolve(null); }
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('no strokes');
      return r.text();
    }).then(function (text) {
      var m = text.match(/const STROKE_DATA\s*=\s*(\{[\s\S]*\});?\s*$/);
      var data = m ? JSON.parse(m[1]) : null;
      strokeDataCache[key] = data;
      return data;
    }).catch(function () {
      strokeDataCache[key] = null;
      return null;
    });
  }

  function vpToggleHz(btn, vi) {
    var panel = $('#vphzp' + vi);
    var open = !panel.classList.contains('open');
    panel.classList.toggle('open', open);
    btn.textContent = open ? '🀄 Ẩn Hán tự' : '🀄 Xem Hán tự (' + vpVocab[vi].hanzi.length + ' chữ)';
    if (open) vpEnsureHzWriters(vi);
  }

  function vpEnsureHzWriters(vi) {
    Promise.all([ensureHanziWriterLib(), loadStrokeData(currentHubLesson)]).then(function (res) {
      var strokeData = res[1];
      if (!strokeData || typeof HanziWriter === 'undefined') return;
      (vpVocab[vi].hanzi || []).forEach(function (h, hi) {
        var key = vi + '_' + hi;
        if (vpHzWriters[key]) return;
        var charData = strokeData[h.c];
        if (!charData) return;
        var target = $('#vphzw' + key);
        if (!target) return;
        target.innerHTML = '';
        vpHzWriters[key] = HanziWriter.create(target, h.c, {
          width: 130, height: 130, padding: 6,
          showOutline: true, strokeAnimationSpeed: 1, delayBetweenStrokes: 280,
          strokeColor: '#2b2420', radicalColor: '#c84b31', outlineColor: '#e6dcc9',
          charDataLoader: function () { return charData; }
        });
      });
    });
  }

  function vpHzReplay(vi, hi) {
    var w = vpHzWriters[vi + '_' + hi];
    if (w) w.animateCharacter();
  }

  function vpHzQuiz(vi, hi) {
    var w = vpHzWriters[vi + '_' + hi];
    var fb = $('#vphzfb' + vi + '_' + hi);
    if (!w) { if (fb) fb.textContent = 'Đang tải dữ liệu nét chữ, thử lại sau giây lát...'; return; }
    if (fb) fb.textContent = '✏️ Hãy vẽ từng nét vào ô trên nhé!';
    w.quiz({
      onMistake: function () { if (fb) fb.textContent = '❌ Chưa đúng nét, thử lại nhé!'; },
      onCorrectStroke: function () { if (fb) fb.textContent = '✅ Đúng rồi! Vẽ tiếp nét sau...'; },
      onComplete: function (summary) { if (fb) fb.textContent = '🎉 Viết xong! (Sai ' + summary.totalMistakes + ' lần)'; }
    });
  }

  function vpHzItemHtml(h, vi, hi) {
    return '<div class="hz-item"><div class="hz-writer-wrap">' +
      '<div class="hz-writer-box" id="vphzw' + vi + '_' + hi + '"><span class="hz-fallback">' + h.c + '</span></div>' +
      '<div class="hz-writer-under"><span class="hzw-py">' + h.p + '</span>' +
      '<button type="button" class="hz-replay-btn" data-hz-replay="' + vi + '_' + hi + '">▶ Xem thứ tự nét</button>' +
      '<button type="button" class="hz-quiz-btn" data-hz-quiz="' + vi + '_' + hi + '">✏️ Luyện viết</button>' +
      '</div><div class="hz-quiz-fb" id="vphzfb' + vi + '_' + hi + '"></div></div>' +
      '<div class="hz-info">' +
      '<div class="hz-row"><span class="hz-k">Loại:</span> ' + h.type + ' <span class="hz-strokes">' + h.st + ' nét</span></div>' +
      '<div class="hz-row"><span class="hz-k">Bộ thủ:</span> <span class="hz-rad-dot"></span> <span class="hz-rad">' + h.rad + '</span></div>' +
      '<div class="hz-row"><span class="hz-k">Nghĩa:</span> ' + h.mean + '</div>' +
      '<div class="hz-row"><span class="hz-k">Bút thuận:</span> ' + h.ord + '</div>' +
      '<div class="hz-row"><span class="hz-k">Dễ nhầm:</span> ' + h.cf + '</div>' +
      '</div><div class="hz-tip"><b>💡 Mẹo nhớ:</b> ' + h.tip + '</div>' +
      '<div class="hz-words"><span class="hz-wl">Từ đại diện:</span> ' + h.w + '</div></div>';
  }

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
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
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

  // Khoi giai nghia/cach dung/collocation chi hien khi tu vung co field
  // "explain" — dung cho tu vung kieu moi (hien tai la HSK3), khong anh
  // huong den cac bai HSK1/HSK2/HSK1(3.0) van dung du lieu cu.
  function vpWordRichHtml(v) {
    if (!v.explain) return '';
    var explainHtml = v.explain.length > 1
      ? '<ol class="vp-explain-list">' + v.explain.map(function (e) { return '<li>' + e + '</li>'; }).join('') + '</ol>'
      : '<div class="vp-explain-text">' + v.explain[0] + '</div>';
    var usageHtml = v.usage ? '<div class="vp-word-usage"><span class="vp-usage-label">Cách dùng:</span> ' + v.usage + '</div>' : '';
    var colloHtml = (v.collo && v.collo.length)
      ? '<div class="vp-word-collo"><div class="vp-collo-label">Ví dụ cụm từ:</div><div class="vp-collo-chips">' +
          v.collo.map(function (c) { return '<span class="vp-collo-chip hanzi">' + c + '</span>'; }).join('') +
        '</div></div>'
      : '';
    return '<div class="vp-word-explain"><div class="vp-explain-label">Nghĩa:</div>' + explainHtml + '</div>' + usageHtml + colloHtml;
  }

  // Voi tu vung kieu moi, hien ca 3 cau vi du (danh so) thay vi chi 1 cau
  // nhu truoc — khop voi bang cach trinh bay tu vung moi.
  function vpWordAllExamplesHtml(v) {
    var list = v.exList || [];
    if (!list.length) return '';
    var items = list.map(function (ex) {
      return '<li><div class="vp-word-row"><span class="vp-word-zh hanzi" style="font-size:1.15rem;">' + ex.zh + '</span>' +
        '<button type="button" class="vp-speak-btn" data-speak="' + ex.zh.replace(/"/g, '&quot;') + '">🔊</button></div>' +
        '<div class="vp-word-py">' + ex.py + '</div><div class="vp-word-vn">' + ex.vn + '</div></li>';
    }).join('');
    return '<div class="vp-word-example vp-word-examples-all"><div class="vp-examples-label">Ví dụ:</div><ol class="vp-examples-list">' + items + '</ol></div>';
  }

  function renderVpList() {
    var wrap = $('#vpContent');
    wrap.innerHTML = '<div class="vp-list-grid"></div>';
    var grid = wrap.firstChild;
    vpVocab.forEach(function (v, vi) {
      var ex = v.exList && v.exList[0];
      var card = document.createElement('div');
      card.className = 'vp-word-card';
      var hzs = (v.hanzi || []).map(function (h, hi) { return vpHzItemHtml(h, vi, hi); }).join('');
      card.innerHTML =
        '<div class="vp-word-row"><span class="vp-word-zh hanzi">' + v.zh + '</span><button type="button" class="vp-speak-btn" data-speak="' + v.zh.replace(/"/g, '&quot;') + '">🔊</button></div>' +
        '<div class="vp-word-py">' + v.py + '</div>' +
        '<div class="vp-word-vn">' + v.vn + '</div>' +
        (v.pos ? '<span class="vp-word-pos">' + v.pos + '</span>' : '') +
        vpWordRichHtml(v) +
        (v.explain ? vpWordAllExamplesHtml(v) : (ex ? '<div class="vp-word-example"><div class="vp-word-row"><span class="vp-word-zh hanzi" style="font-size:1.3rem;">' + ex.zh + '</span><button type="button" class="vp-speak-btn" data-speak="' + ex.zh.replace(/"/g, '&quot;') + '">🔊</button></div><div class="vp-word-py">' + ex.py + '</div><div class="vp-word-vn">' + ex.vn + '</div></div>' : '')) +
        (hzs ? '<div class="vc-hz"><button type="button" class="hz-btn" data-hz-toggle="' + vi + '">🀄 Xem Hán tự (' + v.hanzi.length + ' chữ)</button><div class="hz-panel" id="vphzp' + vi + '">' + hzs + '</div></div>' : '') +
        (v.checkList ? v.checkList.map(function (c, ci) { return renderVpCheckHtml(c, vi + '_' + ci); }).join('') : (v.check ? renderVpCheckHtml(v.check, vi) : ''));
      grid.appendChild(card);
    });
    $all('[data-speak]', grid).forEach(function (btn) {
      btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-speak')); });
    });
    $all('[data-hz-toggle]', grid).forEach(function (btn) {
      btn.addEventListener('click', function () { vpToggleHz(btn, parseInt(btn.getAttribute('data-hz-toggle'), 10)); });
    });
    $all('[data-hz-replay]', grid).forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var parts = btn.getAttribute('data-hz-replay').split('_');
        vpHzReplay(parseInt(parts[0], 10), parseInt(parts[1], 10));
      });
    });
    $all('[data-hz-quiz]', grid).forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var parts = btn.getAttribute('data-hz-quiz').split('_');
        vpHzQuiz(parseInt(parts[0], 10), parseInt(parts[1], 10));
      });
    });
    wireVpCheckWidgets(grid);
  }

  // Khung luyện dịch nho nhỏ gắn ngay dưới mỗi thẻ từ vựng: học sinh tự gõ
  // bản dịch, bấm "Xem đáp án mẫu" để đối chiếu ngay (khong tu dong cham diem).
  function renderVpCheckHtml(check, vi) {
    var isZh = check.promptLang === 'zh';
    return '<div class="vp-check-box">' +
      '<div class="vp-check-label">✏️ Luyện dịch câu này</div>' +
      '<div class="vp-check-q' + (isZh ? ' hanzi' : '') + '">' + check.prompt + '</div>' +
      '<textarea class="vp-check-input" data-check-input="' + vi + '" rows="2" placeholder="Nhập bản dịch của bạn..."></textarea>' +
      '<button type="button" class="vp-check-btn" data-check-reveal="' + vi + '">Xem đáp án mẫu</button>' +
      '<div class="vp-check-answer" data-check-answer="' + vi + '" hidden>' +
        '<strong>Đáp án mẫu:</strong> <span class="hanzi">' + check.answer + '</span>' +
        (check.answerPy ? '<div class="vp-check-py">' + check.answerPy + '</div>' : '') +
        (check.note ? '<div class="vp-check-note">💡 ' + check.note + '</div>' : '') +
      '</div>' +
    '</div>';
  }

  function wireVpCheckWidgets(grid) {
    $all('[data-check-reveal]', grid).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = btn.getAttribute('data-check-reveal');
        var panel = grid.querySelector('[data-check-answer="' + idx + '"]');
        if (panel) panel.hidden = false;
        btn.disabled = true;
      });
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

  // ══════════════════════════════════════════
  // THANH TIẾN ĐỘ DÙNG CHUNG (progress bar) — gắn vào MỌI màn luyện tập có
  // chấm đúng/sai: từ vựng, hội thoại, nghe, dịch, game, ngữ pháp. Mỗi câu
  // là 1 ô vuông nhỏ: xanh = đúng, đỏ = sai, xám = chưa làm. Làm đúng liên
  // tiếp ≥3 câu thì hiện lời cổ vũ ngẫu nhiên.
  // ══════════════════════════════════════════
  var PGB_PRAISE = ['Làm tốt lắm! 🎉', 'Xuất sắc, phát huy nhé! 🌟', 'Chuẩn không cần chỉnh! 👏', 'Quá đỉnh! 🔥', 'Giỏi quá đi! 💪', 'Đúng liên tục rồi đó! ✨'];
  var pgbState = {}; // id -> { results:[true/false/null...], streak:0 }

  function pgbInit(id, total) {
    pgbState[id] = { results: new Array(total).fill(null), streak: 0 };
  }

  function pgbHtml(id, total) {
    if (!pgbState[id]) pgbInit(id, total);
    return '<div class="pgb-wrap">' +
      '<div class="pgb-head"><span class="pgb-score" id="' + id + '-score">0/' + total + ' đúng</span><span class="pgb-praise" id="' + id + '-praise"></span></div>' +
      '<div class="pgb-track" id="' + id + '-track"></div>' +
      '</div>';
  }

  function pgbPaint(id) {
    var st = pgbState[id];
    if (!st) return;
    var scoreEl = $('#' + id + '-score');
    var trackEl = $('#' + id + '-track');
    var correct = st.results.filter(function (r) { return r === true; }).length;
    if (scoreEl) scoreEl.textContent = correct + '/' + st.results.length + ' đúng';
    if (trackEl) {
      trackEl.innerHTML = st.results.map(function (r) {
        var cls = r === true ? 'pgb-seg-correct' : r === false ? 'pgb-seg-wrong' : 'pgb-seg-empty';
        return '<span class="pgb-seg ' + cls + '"></span>';
      }).join('');
    }
  }

  function pgbRecord(id, index, isCorrect) {
    var st = pgbState[id];
    if (!st) return;
    st.results[index] = isCorrect;
    if (isCorrect) st.streak++; else st.streak = 0;
    pgbPaint(id);
    var praiseEl = $('#' + id + '-praise');
    if (praiseEl) {
      if (st.streak >= 3) {
        praiseEl.textContent = PGB_PRAISE[Math.floor(Math.random() * PGB_PRAISE.length)];
        praiseEl.classList.add('show');
        setTimeout(function () { praiseEl.classList.remove('show'); }, 2200);
      } else {
        praiseEl.classList.remove('show');
      }
    }
  }

  function renderVpQuiz(mode) {
    if (!vpQuiz) {
      vpQuiz = { order: shuffle(vpVocab.map(function (_, i) { return i; })), pos: 0, score: 0 };
      pgbInit('vpq', vpQuiz.order.length);
    }
    var wrap = $('#vpContent');
    if (vpQuiz.pos >= vpQuiz.order.length) {
      recordLessonScore(currentHubLesson, 'vocab', { correct: vpQuiz.score, total: vpQuiz.order.length });
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
      else label = opt.zh + ' <span class="py-inline">(' + opt.py + ')</span>';
      return '<button type="button" class="vp-option-btn" data-idx="' + i + '">' + label + '</button>';
    }).join('');

    wrap.innerHTML =
      pgbHtml('vpq', total) +
      '<div class="vp-quiz-counter">Câu ' + (vpQuiz.pos + 1) + '/' + total + '</div>' +
      '<div class="vp-quiz-card">' +
        '<div class="vp-quiz-prompt">' + promptHtml + '</div>' +
        '<div class="vp-quiz-options">' + optionsHtml + '</div>' +
      '</div>';
    pgbPaint('vpq');

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
        pgbRecord('vpq', vpQuiz.pos, isCorrect);
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
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = false;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
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
        explanation: '没关系 dùng để đáp lại lời xin lỗi, nghĩa là "không sao đâu".' },
      { context: 'Bạn gặp thầy hiệu trưởng lần đầu trong hành lang trường, bạn nên chào thế nào?',
        pre: '', blank: '您好', post: '！', options: ['您好', '你好', '你们好'], answer: 0,
        explanation: '您 dùng khi chào người có địa vị/tuổi tác cao hơn để thể hiện sự tôn trọng.' },
      { context: 'Bạn vô tình giẫm chân bạn cùng bàn trong lớp, bạn xin lỗi và bạn ấy đáp lại thế nào?',
        pre: '对不起！——', blank: '没关系', post: '！', options: ['没关系', '您好', '再见'], answer: 0,
        explanation: '没关系 là câu đáp chuẩn khi ai đó xin lỗi mình.' },
      { type: 'sort', context: 'Sắp xếp thành câu chào hỏi thân mật.',
        words: ['你', '好', '！'], answer: '你好！',
        explanation: '你好 là cách chào phổ biến nhất khi gặp người ngang hàng, thân mật.' },
      { type: 'judge', context: 'Bạn chào một nhóm bạn cùng lúc.',
        sentence: '你们好！', isCorrect: true,
        explanation: '你们 là số nhiều của 你, dùng đúng khi chào nhiều người cùng lúc.' }
    ],
    '/lessons/bai-1.html': [
      { pre: '我', blank: '要', post: '去北京旅游。', options: ['要', '最', '也'], answer: 0,
        explanation: '要 đặt trước động từ để diễn tả ý muốn/dự định làm việc gì.' },
      { pre: '我', blank: '最', post: '喜欢踢足球。', options: ['要', '最', '也'], answer: 1,
        explanation: '最 đặt trước tính từ/động từ chỉ trạng thái tâm lý (như 喜欢) để diễn tả mức độ cao nhất.' },
      { pre: '我们要不要买', blank: '几', post: '个新的椅子？', options: ['几', '多', '最'], answer: 0,
        explanation: '几 dùng để hỏi số lượng nhỏ chưa xác định, phía sau bắt buộc có lượng từ + danh từ.' },
      { pre: '六个', blank: '多', post: '月，我要去旅游。', options: ['多', '几', '最'], answer: 0,
        explanation: '多 đặt SAU lượng từ khi số đếm nhỏ hơn 10, diễn tả nghĩa "hơn".' },
      { context: 'Bạn chia sẻ dự định nghỉ hè của mình với bạn bè.',
        pre: '暑假我', blank: '要', post: '去旅游。', options: ['要', '最', '也'], answer: 0,
        explanation: '要 đặt trước động từ diễn tả ý muốn/dự định.' },
      { context: 'Bạn được hỏi môn thể thao mình thích nhất.',
        pre: '我', blank: '最', post: '喜欢踢足球。', options: ['最', '要', '几'], answer: 0,
        explanation: '最 biểu thị mức độ cao nhất.' },
      { type: 'sort', context: 'Sắp xếp thành câu nói về sở thích thể thao.',
        words: ['我', '最', '喜欢', '踢', '足球', '。'], answer: '我最喜欢踢足球。',
        explanation: '最 phải đứng ngay trước động từ/tính từ chỉ trạng thái tâm lý (喜欢) để diễn tả mức độ cao nhất.' },
      { type: 'judge', context: 'Học sinh Việt hay nhầm vị trí của 多 khi số đếm lớn hơn 10.',
        sentence: '我们十多个人要去旅游。', isCorrect: true,
        explanation: '多 đặt SAU số đếm khi số đó lớn hơn 10 (十多 = hơn mười) — câu này ĐÚNG.' }
    ],
    '/lessons/hsk1-bai-2.html': [
      { pre: '', blank: '谢谢', post: '你，你人真好！', options: ['谢谢', '再见', '不客气'], answer: 0,
        explanation: '谢谢 dùng để cảm ơn ai đó, thường đi kèm đối tượng phía sau (谢谢 + người).' },
      { pre: '谢谢你送我东西', blank: '不客气', post: '！', options: ['不客气', '没关系', '再见'], answer: 0,
        explanation: '不客气 dùng để đáp lại lời CẢM ƠN (谢谢); khác với 没关系 (đã học bài 1) dùng để đáp lại lời XIN LỖI (对不起).' },
      { pre: '老师，', blank: '再见', post: '！', options: ['再见', '你好', '谢谢'], answer: 0,
        explanation: '再见 dùng khi CHIA TAY; 你好 (đã học bài 1) chỉ dùng khi GẶP MẶT, không dùng khi chia tay.' },
      { context: 'Bạn cùng lớp cho bạn mượn bút, bạn cảm ơn và bạn ấy nên đáp lại thế nào?',
        pre: '谢谢你！——', blank: '不客气', post: '！', options: ['不客气', '再见', '对不起'], answer: 0,
        explanation: '不客气 là cách đáp chuẩn khi ai đó cảm ơn mình.' },
      { context: 'Hết giờ học, bạn chào tạm biệt thầy giáo trước khi ra về.',
        pre: '老师，', blank: '再见', post: '！', options: ['再见', '谢谢', '你好'], answer: 0,
        explanation: '再见 dùng khi chia tay, kết thúc cuộc gặp.' },
      { type: 'sort', context: 'Sắp xếp thành câu cảm ơn.',
        words: ['谢', '谢', '你', '！'], answer: '谢谢你！',
        explanation: '谢谢 + đối tượng được cảm ơn.' },
      { type: 'judge', context: 'Bạn cảm ơn bạn mình, bạn ấy nên đáp lại thế nào?',
        sentence: '谢谢你！——你好！', isCorrect: false, correctVersion: '谢谢你！——不客气！',
        explanation: 'Đáp lại lời cảm ơn (谢谢) phải dùng 不客气; 你好 chỉ dùng để chào gặp mặt.' }
    ],
    '/lessons/hsk1-bai-3.html': [
      { pre: '你叫', blank: '什么', post: '名字？', options: ['什么', '吗', '是'], answer: 0,
        explanation: '什么 là đại từ nghi vấn hỏi "cái gì", đứng trước danh từ (名字); 吗 là trợ từ đặt cuối câu, 是 là động từ khẳng định.' },
      { pre: '我', blank: '是', post: '学生。', options: ['是', '什么', '吗'], answer: 0,
        explanation: '是 dùng để khẳng định danh tính/thân phận, đứng giữa chủ ngữ và danh từ.' },
      { pre: '你是学生', blank: '吗', post: '？', options: ['吗', '什么', '是'], answer: 0,
        explanation: '吗 là trợ từ nghi vấn, luôn đặt ở CUỐI câu trần thuật để biến thành câu hỏi Có/Không.' },
      { context: 'Bạn gặp một bạn mới trong lớp, muốn hỏi tên bạn ấy.',
        pre: '你', blank: '叫什么名字', post: '？', options: ['叫什么名字', '是学生吗', '是中国人'], answer: 0,
        explanation: '叫什么名字 là cách hỏi tên chuẩn khi mới gặp ai đó.' },
      { context: 'Bạn muốn xác nhận xem người mới quen có phải giáo viên hay không.',
        pre: '你', blank: '是', post: '老师吗？', options: ['是', '叫', '什么'], answer: 0,
        explanation: '是 dùng để khẳng định thân phận/danh tính trong câu hỏi Có/Không với 吗.' },
      { type: 'sort', context: 'Sắp xếp thành câu hỏi tên người mới quen.',
        words: ['你', '叫', '什么', '名字', '？'], answer: '你叫什么名字？',
        explanation: '什么 đứng trước danh từ (名字) làm tân ngữ trong câu hỏi.' },
      { type: 'judge', context: 'Bạn hỏi xác nhận nghề nghiệp của ai đó.',
        sentence: '他是老师吗？', isCorrect: true,
        explanation: '吗 đặt cuối câu trần thuật để tạo câu hỏi Có/Không — câu này ĐÚNG.' }
    ],
    '/lessons/hsk1-bai-4.html': [
      { pre: '', blank: '谁', post: '是你的老师？', options: ['谁', '什么', '哪'], answer: 0,
        explanation: '谁 dùng để hỏi về NGƯỜI (ai); 什么 (đã học bài 3) hỏi về VẬT/SỰ VIỆC.' },
      { pre: '这是他', blank: '的', post: '书。', options: ['的', '是', '呢'], answer: 0,
        explanation: '的 là trợ từ kết cấu biểu thị sở hữu, đứng giữa đại từ/danh từ và danh từ trung tâm.' },
      { pre: '我是学生，你', blank: '呢', post: '？', options: ['呢', '吗', '谁'], answer: 0,
        explanation: '呢 đặt cuối câu để hỏi lại thông tin đã nhắc ở vế trước (A...呢?); khác với 吗 (đã học) dùng đặt câu hỏi Có/Không hoàn toàn mới.' },
      { context: 'Bạn thấy một quyển sách lạ trên bàn, muốn hỏi ai là chủ nhân.',
        pre: '这本书是', blank: '谁', post: '的？', options: ['谁', '什么', '哪'], answer: 0,
        explanation: '谁 dùng để hỏi về NGƯỜI (chủ nhân của vật).' },
      { context: 'Bạn giới thiệu về bạn thân của mình với người khác.',
        pre: '她是我', blank: '的', post: '朋友。', options: ['的', '呢', '谁'], answer: 0,
        explanation: '的 nối giữa đại từ sở hữu và danh từ để biểu thị quan hệ sở hữu.' },
      { type: 'sort', context: 'Sắp xếp thành câu hỏi về danh tính một người.',
        words: ['她', '是', '谁', '？'], answer: '她是谁？',
        explanation: '谁 đặt ở vị trí tân ngữ nghi vấn để hỏi về người.' },
      { type: 'judge', context: 'Bạn giới thiệu quan hệ bạn bè.',
        sentence: '他是我的同学。', isCorrect: true,
        explanation: '的 nối giữa đại từ sở hữu (我) và danh từ (同学) — câu này ĐÚNG.' }
    ],
    '/lessons/hsk1-bai-5.html': [
      { pre: '你家有', blank: '几', post: '口人？', options: ['几', '多', '什么'], answer: 0,
        explanation: '几 dùng hỏi số lượng NHỎ (dưới 10), phía sau bắt buộc có lượng từ (口) rồi mới đến danh từ.' },
      { pre: '你女儿今年', blank: '多', post: '大了？', options: ['多', '几', '了'], answer: 0,
        explanation: '多 kết hợp với tính từ (大) để hỏi mức độ/tuổi tác của người LỚN; 几 chỉ dùng hỏi số nhỏ trực tiếp trước lượng từ.' },
      { pre: '李老师今年五十岁', blank: '了', post: '。', options: ['了', '呢', '吗'], answer: 0,
        explanation: '了 đặt cuối câu để biểu thị một tình huống/trạng thái MỚI vừa xảy ra hoặc thay đổi.' },
      { context: 'Bạn hỏi thăm số người trong gia đình bạn mới quen.',
        pre: '你家有', blank: '几', post: '口人？', options: ['几', '多', '谁'], answer: 0,
        explanation: '几 dùng hỏi số lượng nhỏ (dưới 10), cần lượng từ theo sau.' },
      { context: 'Bạn muốn hỏi tuổi của một người lớn, không phải trẻ nhỏ.',
        pre: '您', blank: '今年多大', post: '了？', options: ['今年多大', '几岁', '叫什么名字'], answer: 0,
        explanation: '多大 dùng hỏi tuổi người lớn lịch sự; 几岁 chỉ dùng hỏi tuổi trẻ em.' },
      { type: 'sort', context: 'Sắp xếp thành câu hỏi thăm số người trong gia đình.',
        words: ['你', '家', '有', '几', '口', '人', '？'], answer: '你家有几口人？',
        explanation: '几 phải đi kèm lượng từ (口) rồi mới đến danh từ.' },
      { type: 'judge', context: 'Bạn kể tuổi của một người bạn.',
        sentence: '我朋友今年十岁了。', isCorrect: true,
        explanation: '了 đặt cuối câu để thông báo tuổi tác như một thông tin mới — câu này ĐÚNG.' }
    ],
    '/lessons/hsk1-bai-6.html': [
      { pre: '我', blank: '会', post: '写汉字。', options: ['会', '很', '怎么'], answer: 0,
        explanation: '会 (động từ năng nguyện) đặt trước động từ để biểu thị năng lực đạt được qua học tập/rèn luyện.' },
      { pre: '中国菜', blank: '很', post: '好吃。', options: ['很', '会', '怎么'], answer: 0,
        explanation: '很 đặt trước tính từ (好吃) tạo câu vị ngữ tính từ, biểu thị mức độ; không dùng 会 vì 好吃 là tính từ chứ không phải kỹ năng học được.' },
      { pre: '这个汉字', blank: '怎么', post: '读？', options: ['怎么', '会', '很'], answer: 0,
        explanation: '怎么 đặt trước động từ (读) để hỏi CÁCH THỨC thực hiện hành động.' },
      { context: 'Bạn khoe với bạn bè rằng mình đã học được cách viết chữ Hán.',
        pre: '我', blank: '会', post: '写汉字了！', options: ['会', '很', '怎么'], answer: 0,
        explanation: '会 biểu thị năng lực đã học được qua rèn luyện.' },
      { context: 'Bạn không biết đọc một chữ Hán, muốn hỏi bạn cùng lớp.',
        pre: '这个字', blank: '怎么', post: '读？', options: ['怎么', '什么', '谁'], answer: 0,
        explanation: '怎么 đặt trước động từ để hỏi CÁCH THỨC thực hiện.' },
      { type: 'sort', context: 'Sắp xếp thành câu khoe khả năng viết chữ Hán.',
        words: ['我', '会', '写', '汉字', '。'], answer: '我会写汉字。',
        explanation: '会 đặt trước động từ (写) để biểu thị năng lực học được.' },
      { type: 'judge', context: 'Bạn nhận xét về món ăn Trung Quốc.',
        sentence: '中国菜很好吃。', isCorrect: true,
        explanation: '很 + tính từ (好吃) tạo câu vị ngữ tính từ chuẩn — câu này ĐÚNG.' }
    ],
    '/lessons/hsk1-bai-7.html': [
      { pre: '今天9', blank: '月', post: '1号。', options: ['月', '号', '星期'], answer: 0,
        explanation: '月 (tháng) đặt trước 号 (ngày) theo thứ tự lớn→nhỏ: tháng trước, ngày sau.' },
      { pre: '', blank: '昨天', post: '你去学校了吗？', options: ['昨天', '明天', '号'], answer: 0,
        explanation: '昨天 (hôm qua) chỉ thời gian ĐÃ QUA, phân biệt với 明天 (ngày mai, tương lai) và 号 (chỉ số ngày trong tháng).' },
      { pre: '我', blank: '去', post: '学校看书。', options: ['去', '看', '请'], answer: 0,
        explanation: '去 + Nơi chốn + Động từ 2 diễn tả "đi đến nơi nào đó để làm việc gì" (câu liên động).' },
      { context: 'Bạn hẹn bạn cùng lớp cùng đến trường để đọc sách.',
        pre: '我们', blank: '去', post: '学校看书吧。', options: ['去', '看', '请'], answer: 0,
        explanation: '去 + Nơi chốn + Động từ diễn tả "đi đến đâu để làm gì".' },
      { context: 'Bạn hỏi hôm nay là thứ mấy để sắp xếp lịch học.',
        pre: '今天', blank: '星期几', post: '？', options: ['星期几', '几号', '什么'], answer: 0,
        explanation: '星期几 dùng hỏi THỨ trong tuần.' },
      { type: 'sort', context: 'Sắp xếp thành câu rủ bạn đi trường đọc sách.',
        words: ['我', '去', '学校', '看', '书', '。'], answer: '我去学校看书。',
        explanation: '去 + Nơi chốn + Động từ 2 diễn tả câu liên động "đi đâu để làm gì".' },
      { type: 'judge', context: 'Bạn hỏi đầy đủ ngày tháng và thứ trong cùng một câu.',
        sentence: '今天几月几号星期几？', isCorrect: false, correctVersion: '今天几月几号？今天星期几？',
        explanation: '几号 và 星期几 là hai câu hỏi riêng biệt, không ghép chung vào một câu.' }
    ],
    '/lessons/hsk1-bai-8.html': [
      { pre: '我', blank: '想', post: '买一个杯子。', options: ['想', '去', '会'], answer: 0,
        explanation: '想 (động từ năng nguyện) đặt trước động từ để biểu đạt nguyện vọng/dự định; 会 (đã học bài 6) biểu thị năng lực học được, khác nghĩa.' },
      { pre: '这个杯子', blank: '多少', post: '钱？', options: ['多少', '几', '多'], answer: 0,
        explanation: '多少 dùng hỏi số lượng LỚN (thường >10), đặc biệt khi hỏi giá tiền; 几 (đã học bài 5) chỉ hỏi số nhỏ dưới 10.' },
      { pre: '我家有三', blank: '口', post: '人。', options: ['口', '个', '杯'], answer: 0,
        explanation: '口 là lượng từ CHUYÊN DÙNG để đếm số thành viên trong gia đình; 个 là lượng từ dùng chung cho hầu hết danh từ khác.' },
      { context: 'Bạn đang ở quán trà, muốn gọi đồ uống.',
        pre: '我', blank: '想', post: '喝茶。', options: ['想', '会', '去'], answer: 0,
        explanation: '想 biểu đạt nguyện vọng muốn làm gì.' },
      { context: 'Bạn hỏi giá một món đồ trong cửa hàng.',
        pre: '这个杯子', blank: '多少钱', post: '？', options: ['多少钱', '几个', '怎么样'], answer: 0,
        explanation: '多少钱 dùng hỏi giá tiền (số lớn).' },
      { type: 'sort', context: 'Sắp xếp thành câu hỏi giá tiền.',
        words: ['这个', '杯子', '多少', '钱', '？'], answer: '这个杯子多少钱？',
        explanation: '多少 đặt trước 钱 để hỏi giá.' },
      { type: 'judge', context: 'Bạn gọi trà trong quán.',
        sentence: '我想喝几茶。', isCorrect: false, correctVersion: '我想喝茶。',
        explanation: '茶 không cần thêm 几 khi không hỏi/nêu số lượng cụ thể.' }
    ],
    '/lessons/hsk1-bai-9.html': [
      { pre: '我朋友', blank: '在', post: '学校。', options: ['在', '是', '有'], answer: 0,
        explanation: '在 làm động từ, đi với từ chỉ nơi chốn để diễn tả vị trí của người/vật (không dùng 是 hay 有 ở đây).' },
      { pre: '我的杯子在', blank: '哪儿', post: '？', options: ['哪儿', '什么', '谁'], answer: 0,
        explanation: '哪儿 dùng để hỏi VỊ TRÍ của người/vật; 什么 (đã học) hỏi vật/sự việc, 谁 (đã học) hỏi người.' },
      { pre: '我的小猫', blank: '呢', post: '？', options: ['呢', '吗', '哪儿'], answer: 0,
        explanation: '呢 đặt sau đối tượng đã biết để hỏi nhanh về vị trí hiện tại của nó (Đối tượng + 呢?).' },
      { context: 'Bạn tìm con mèo của mình khắp nhà mà không thấy.',
        pre: '我的猫', blank: '在哪儿', post: '？', options: ['在哪儿', '是谁', '叫什么'], answer: 0,
        explanation: '在哪儿 dùng hỏi VỊ TRÍ của người/vật.' },
      { context: 'Bạn giới thiệu nghề nghiệp và nơi làm việc của bố mình.',
        pre: '我爸爸', blank: '在', post: '医院工作。', options: ['在', '是', '有'], answer: 0,
        explanation: '在 + nơi chốn + động từ diễn tả nơi diễn ra hành động.' },
      { type: 'sort', context: 'Sắp xếp thành câu giới thiệu nơi làm việc của bố.',
        words: ['我', '爸爸', '在', '医院', '工作', '。'], answer: '我爸爸在医院工作。',
        explanation: '在 + nơi chốn + động từ diễn tả nơi diễn ra hành động.' },
      { type: 'judge', context: 'Bạn hỏi vị trí một món đồ.',
        sentence: '我的杯子在哪儿？', isCorrect: true,
        explanation: '哪儿 dùng đúng vị trí để hỏi nơi chốn — câu này ĐÚNG.' }
    ],
    '/lessons/hsk1-bai-10.html': [
      { pre: '桌子上', blank: '有', post: '一个电脑。', options: ['有', '是', '在'], answer: 0,
        explanation: '有 dùng để khẳng định sự TỒN TẠI của vật tại một vị trí (Nơi chốn + 有 + Vật); phủ định là 没有.' },
      { pre: '桌子上有电脑', blank: '和', post: '书。', options: ['和', '的', '呢'], answer: 0,
        explanation: '和 là liên từ dùng để nối hai danh từ ngang hàng (A 和 B).' },
      { pre: '我', blank: '能', post: '坐这儿吗？', options: ['能', '会', '想'], answer: 0,
        explanation: '能 biểu thị khả năng/xin phép làm việc gì, dùng trong cấu trúc "能...吗?" để hỏi xin phép lịch sự; 会/想 (đã học) mang nghĩa khác.' },
      { context: 'Bạn muốn xin phép ngồi vào chỗ trống bên cạnh một người lạ.',
        pre: '我', blank: '能', post: '坐这儿吗？', options: ['能', '会', '想'], answer: 0,
        explanation: '能...吗 dùng để xin phép một cách lịch sự.' },
      { context: 'Bạn mời khách vào nhà ngồi.',
        pre: '', blank: '请坐', post: '！', options: ['请坐', '再见', '对不起'], answer: 0,
        explanation: '请 + động từ dùng để mời/đề nghị lịch sự.' },
      { type: 'sort', context: 'Sắp xếp thành câu nói về đồ vật trên bàn.',
        words: ['桌子', '上', '有', '一', '个', '电脑', '。'], answer: '桌子上有一个电脑。',
        explanation: '有 dùng khẳng định sự tồn tại: Nơi chốn + 有 + Vật.' },
      { type: 'judge', context: 'Bạn xin phép ngồi vào chỗ trống.',
        sentence: '我能坐这儿吗？', isCorrect: true,
        explanation: '能...吗 dùng xin phép lịch sự — câu này ĐÚNG.' }
    ],
    '/lessons/hsk1-bai-11.html': [
      { pre: '现在十', blank: '点', post: '十分。', options: ['点', '分', '号'], answer: 0,
        explanation: '点 dùng để nói GIỜ, đứng trước 分 (phút) theo thứ tự giờ→phút.' },
      { pre: '妈妈', blank: '六点', post: '做饭。', options: ['六点', '现在', '前'], answer: 0,
        explanation: 'Cụm từ chỉ thời gian (六点) làm trạng ngữ, đứng SAU chủ ngữ và TRƯỚC động từ (không đặt cuối câu như trong tiếng Việt).' },
      { pre: '星期五', blank: '前', post: '，我们回家。', options: ['前', '现在', '点'], answer: 0,
        explanation: '前 đặt SAU mốc thời gian (星期五) để diễn tả "trước mốc đó".' },
      { context: 'Bạn hẹn bạn bè đi ăn trưa, muốn biết mấy giờ họ rảnh.',
        pre: '你', blank: '什么时候', post: '吃饭？', options: ['什么时候', '几点', '怎么样'], answer: 0,
        explanation: '什么时候 dùng hỏi mốc/khoảng thời gian chung chung.' },
      { context: 'Bạn hỏi giờ hiện tại để không đến muộn.',
        pre: '', blank: '现在几点', post: '？', options: ['现在几点', '今天几号', '你几岁'], answer: 0,
        explanation: '现在几点 dùng hỏi giờ hiện tại.' },
      { type: 'sort', context: 'Sắp xếp thành câu nói giờ hiện tại.',
        words: ['现在', '十', '点', '十', '分', '。'], answer: '现在十点十分。',
        explanation: '点 (giờ) luôn đứng trước 分 (phút).' },
      { type: 'judge', context: 'Bạn kể giờ mẹ nấu cơm.',
        sentence: '我六点做饭。', isCorrect: true,
        explanation: 'Cụm thời gian (六点) làm trạng ngữ, đứng trước động từ — câu này ĐÚNG.' }
    ],
    '/lessons/hsk1-bai-12.html': [
      { pre: '明天天气', blank: '怎么样', post: '？', options: ['怎么样', '怎么', '多少'], answer: 0,
        explanation: '怎么样 dùng hỏi về TÍNH CHẤT/TÌNH TRẠNG của sự vật; 怎么 (đã học bài 6) hỏi CÁCH THỨC hành động.' },
      { pre: '外面', blank: '太', post: '热了。', options: ['太', '很', '怎么样'], answer: 0,
        explanation: '太 + tính từ + 了 biểu thị mức độ VƯỢT TRỘI (quá mức); 很 (đã học) chỉ mức độ thông thường, không cần thêm 了.' },
      { pre: '我身体不', blank: '太', post: '好。', options: ['太', '很', '怎么样'], answer: 0,
        explanation: 'Phủ định của 太 là "不太" (không...lắm); khác với thể khẳng định phải có 了 ở cuối.' },
      { context: 'Bạn muốn biết cảm nhận của bạn bè về chuyến du lịch vừa rồi.',
        pre: '你觉得那次旅行', blank: '怎么样', post: '？', options: ['怎么样', '多少钱', '谁的'], answer: 0,
        explanation: '怎么样 dùng hỏi ý kiến/đánh giá về một sự việc.' },
      { context: 'Trời hôm nay rất nóng, bạn than thở với bạn bè.',
        pre: '今天', blank: '太热了', post: '！', options: ['太热了', '很热', '不热'], answer: 0,
        explanation: '太...了 biểu thị mức độ vượt trội (quá mức).' },
      { type: 'sort', context: 'Sắp xếp thành câu hỏi thăm thời tiết.',
        words: ['今天', '天气', '怎么样', '？'], answer: '今天天气怎么样？',
        explanation: '怎么样 dùng hỏi về tình trạng/tính chất, đặt cuối câu.' },
      { type: 'judge', context: 'Bạn than nóng và biến nó thành câu hỏi.',
        sentence: '今天太热了吗？', isCorrect: false, correctVersion: '今天太热了。',
        explanation: '太...了 là câu khẳng định cảm thán, không kết hợp với 吗 để tạo câu hỏi.' }
    ],
    '/lessons/hsk1-bai-13.html': [
      { pre: '', blank: '喂', post: '，你在做什么呢？', options: ['喂', '吧', '呢'], answer: 0,
        explanation: '喂 là thán từ chuyên dùng ở ĐẦU cuộc gọi điện thoại.' },
      { pre: '我', blank: '在', post: '睡觉呢。', options: ['在', '会', '想'], answer: 0,
        explanation: '在 + động từ (+呢) diễn tả hành động đang DIỄN RA (thì tiếp diễn); phủ định dùng 没(在), không dùng 呢.' },
      { pre: '她在工作呢，你下午打', blank: '吧', post: '。', options: ['吧', '呢', '吗'], answer: 0,
        explanation: '吧 đặt cuối câu để làm dịu giọng, biến câu thành lời đề nghị nhẹ nhàng.' },
      { context: 'Bạn gọi điện cho bạn nhưng không thấy trả lời tin nhắn, có thể bạn ấy đang bận học.',
        pre: '她可能', blank: '在学习呢', post: '。', options: ['在学习呢', '会学习', '想学习'], answer: 0,
        explanation: '在+động từ+呢 diễn tả hành động đang diễn ra.' },
      { context: 'Bạn đề nghị bạn mình gọi điện cho bạn vào buổi tối.',
        pre: '你晚上给我打电话', blank: '吧', post: '。', options: ['吧', '呢', '吗'], answer: 0,
        explanation: '吧 đặt cuối câu làm dịu giọng, biến câu thành lời đề nghị nhẹ nhàng.' },
      { type: 'sort', context: 'Sắp xếp thành câu nói mình đang ngủ.',
        words: ['我', '在', '睡觉', '呢', '。'], answer: '我在睡觉呢。',
        explanation: '在 + động từ + 呢 diễn tả hành động đang diễn ra.' },
      { type: 'judge', context: 'Bạn đề nghị bạn gọi điện vào buổi chiều.',
        sentence: '你下午打给我电话吧。', isCorrect: false, correctVersion: '你下午给我打电话吧。',
        explanation: '给 (cho) phải đứng TRƯỚC động từ chính (打电话): 给+người+打电话, không tách rời 打...电话.' }
    ],
    '/lessons/hsk1-bai-14.html': [
      { pre: '我买', blank: '了', post: '不少衣服。', options: ['了', '的', '呢'], answer: 0,
        explanation: '了 đặt ngay sau động từ để biểu thị hành động đã HOÀN THÀNH.' },
      { pre: '40分钟', blank: '后', post: '，我回来。', options: ['后', '前', '了'], answer: 0,
        explanation: '后 đặt SAU một khoảng thời gian cụ thể để chỉ mốc "sau khi... thì..."; trái nghĩa với 前 (đã học bài 11).' },
      { pre: '这些', blank: '都', post: '是他的东西。', options: ['都', '也', '很'], answer: 0,
        explanation: '都 đặt sau đối tượng số nhiều để nhấn mạnh TẤT CẢ đối tượng đó đều có chung tính chất.' },
      { context: 'Bạn vừa đi mua sắm về, kể lại với bạn bè là mình đã mua khá nhiều đồ.',
        pre: '我', blank: '买了', post: '不少东西。', options: ['买了', '买', '要买'], answer: 0,
        explanation: '了 đặt sau động từ biểu thị hành động đã HOÀN THÀNH.' },
      { context: 'Bạn hẹn gặp bạn bè sau một khoảng thời gian cụ thể.',
        pre: '三十分钟', blank: '后', post: '，我们见面。', options: ['后', '前', '了'], answer: 0,
        explanation: '后 đặt sau khoảng thời gian để chỉ mốc "sau khi... thì...".' },
      { type: 'sort', context: 'Sắp xếp thành câu kể việc vừa mua sắm.',
        words: ['我', '买', '了', '不少', '衣服', '。'], answer: '我买了不少衣服。',
        explanation: '了 đặt ngay sau động từ để biểu thị hành động đã hoàn thành.' },
      { type: 'judge', context: 'Bạn khen những bộ quần áo mới mua.',
        sentence: '这些都衣服很漂亮。', isCorrect: false, correctVersion: '这些衣服都很漂亮。',
        explanation: '都 phải đứng ngay trước vị ngữ (很漂亮), sau chủ ngữ đầy đủ (这些衣服), không chen vào giữa danh từ.' }
    ],
    '/lessons/hsk1-bai-15.html': [
      { pre: '我', blank: '是', post: '昨天来的。', options: ['是', '的', '了'], answer: 0,
        explanation: 'Cấu trúc 是……的 nhấn mạnh THỜI GIAN/ĐỊA ĐIỂM/CÁCH THỨC của hành động đã xảy ra; 是 có thể lược bỏ ở câu khẳng định.' },
      { pre: '我们不是坐出租车来', blank: '的', post: '。', options: ['的', '了', '吗'], answer: 0,
        explanation: 'Ở thể phủ định của 是……的, bắt buộc phải giữ nguyên 的 ở cuối câu (không được lược bỏ như thể khẳng định).' },
      { pre: '2011', blank: '年', post: '9月，我认识了他。', options: ['年', '月', '号'], answer: 0,
        explanation: '年 (năm) đặt đầu tiên trong cách nói ngày tháng năm, theo thứ tự giảm dần từ đơn vị lớn (năm) đến nhỏ (tháng, ngày).' },
      { context: 'Bạn kể cho bạn mới quen biết mình đã đến thành phố này khi nào.',
        pre: '我', blank: '是', post: '去年来的。', options: ['是', '的', '了'], answer: 0,
        explanation: '是……的 nhấn mạnh thời gian/cách thức của một hành động đã xảy ra.' },
      { context: 'Bạn giải thích với bạn bè rằng nhóm mình không đi bằng máy bay.',
        pre: '我们不是坐飞机来', blank: '的', post: '。', options: ['的', '了', '吗'], answer: 0,
        explanation: 'Thể phủ định của 是……的 bắt buộc giữ 的 ở cuối câu.' },
      { type: 'sort', context: 'Sắp xếp thành câu kể thời điểm mình đến.',
        words: ['我', '是', '昨天', '来', '的', '。'], answer: '我是昨天来的。',
        explanation: '是……的 nhấn mạnh thời gian của hành động đã xảy ra.' },
      { type: 'judge', context: 'Bạn giải thích cách nhóm mình đã đến.',
        sentence: '我们不是坐飞机来的。', isCorrect: true,
        explanation: 'Thể phủ định của 是……的 giữ nguyên 的 ở cuối câu — câu này ĐÚNG.' }
    ],
    '/lessons/bai-2.html': [
      { pre: '', blank: '是不是', post: '明天爸爸休息？', options: ['是不是', '怎么样', '多'], answer: 0,
        explanation: '是不是 dùng khi người nói đã đoán khá chắc, muốn hỏi lại xác nhận; có thể đứng đầu, giữa hoặc cuối câu.' },
      { pre: '我', blank: '每天', post: '六点起床。', options: ['每天', '今天', '明天'], answer: 0,
        explanation: '每 + lượng từ + danh từ (每天) biểu thị "mỗi ngày", thường đi cùng 都 phía sau vị ngữ để nhấn mạnh tính lặp lại đều đặn.' },
      { pre: '大卫', blank: '多高', post: '？', options: ['多高', '怎么样', '几岁'], answer: 0,
        explanation: '多 + tính từ (高) dùng hỏi MỨC ĐỘ cụ thể, khi trả lời phải nêu con số cụ thể; khác với 怎么样 chỉ hỏi tình trạng chung chung.' },
      { context: 'Bạn đoán bạn mình chăm chỉ tập thể dục nên ít khi ốm.',
        pre: '你很少生病，', blank: '是不是', post: '喜欢运动？', options: ['是不是', '多', '每天'], answer: 0,
        explanation: '是不是 dùng khi đã đoán khá chắc, muốn hỏi lại xác nhận.' },
      { context: 'Bạn kể về thói quen buổi sáng đều đặn của mình.',
        pre: '我', blank: '每天', post: '都六点起床。', options: ['每天', '今天', '明天'], answer: 0,
        explanation: '每+danh từ+都 biểu thị "mỗi... đều...".' },
      { type: 'sort', context: 'Sắp xếp thành câu kể thói quen buổi sáng.',
        words: ['我', '每天', '六点', '起床', '。'], answer: '我每天六点起床。',
        explanation: '每+danh từ (每天) làm trạng ngữ đứng trước cụm thời gian+động từ.' },
      { type: 'judge', context: 'Bạn đoán bạn mình thích vận động.',
        sentence: '你是不是喜欢运动？', isCorrect: true,
        explanation: '是不是 dùng khi đã đoán khá chắc — câu này ĐÚNG.' }
    ],
    '/lessons/bai-3.html': [
      { pre: '左边那个红色', blank: '的', post: '是我的。', options: ['的', '了', '吧'], answer: 0,
        explanation: '(Tính từ/Đại từ chỉ định) + 的 dùng thay thế cho cả cụm danh từ khi trung tâm ngữ đã rõ trong ngữ cảnh, không cần lặp lại danh từ như tiếng Việt.' },
      { pre: '我看', blank: '一下', post: '。', options: ['一下', '的', '都'], answer: 0,
        explanation: '一下 đặt ngay sau động từ (看) để làm giảm nhẹ mức độ/thời lượng hành động, nghĩa là "thử xem, một chút".' },
      { pre: '你女儿的房间', blank: '真', post: '漂亮。', options: ['真', '很', '太'], answer: 0,
        explanation: '真 đặt trước tính từ để nhấn mạnh CẢM XÚC/ĐÁNH GIÁ thật sự của người nói; khác với 很 (khách quan hơn) hay 太 (chỉ mức vượt trội).' },
      { context: 'Bạn đang chọn mua đồ, muốn chỉ định cái mình thích mà không cần lặp lại tên đồ vật.',
        pre: '我要', blank: '红色的', post: '。', options: ['红色的', '的红色', '红色是'], answer: 0,
        explanation: '(Tính từ)+的 dùng thay cho cả cụm danh từ khi ngữ cảnh đã rõ.' },
      { context: 'Bạn nhờ ai đó xem giúp mình một chút.',
        pre: '你', blank: '看一下', post: '，好吗？', options: ['看一下', '看', '一下看'], answer: 0,
        explanation: '一下 đặt sau động từ làm giảm nhẹ mức độ/thời lượng hành động.' },
      { type: 'sort', context: 'Sắp xếp thành câu nhờ ai đó xem thử.',
        words: ['我', '看', '一下', '。'], answer: '我看一下。',
        explanation: '一下 đặt ngay sau động từ để giảm nhẹ mức độ hành động.' },
      { type: 'judge', context: 'Bạn khen màu sắc một món đồ.',
        sentence: '这个红色很漂亮。', isCorrect: false, correctVersion: '这个颜色很漂亮。',
        explanation: '红色 là một MÀU cụ thể (màu đỏ); muốn nói chung về "màu sắc" phải dùng 颜色.' }
    ],
    '/lessons/bai-4.html': [
      { pre: '这本书', blank: '是', post: '我买的。', options: ['是', '的', '了'], answer: 0,
        explanation: '是……的 nhấn mạnh CHỦ THỂ (ai) đã thực hiện hành động trong quá khứ; câu khẳng định có thể lược bỏ 是.' },
      { pre: '我十一岁', blank: '的时候', post: '开始踢足球。', options: ['的时候', '的', '了'], answer: 0,
        explanation: '……的时候 đặt sau cụm từ chỉ thời gian/hành động để diễn tả MỐC THỜI GIAN mà sự việc khác xảy ra ("khi...", "lúc...").' },
      { pre: '电影', blank: '已经', post: '开始了。', options: ['已经', '是', '的'], answer: 0,
        explanation: '已经 đặt trước động từ/tính từ, thường kết hợp với 了 ở cuối câu, biểu thị hành động ĐÃ hoàn thành hoặc đạt đến một mức độ nào đó.' },
      { context: 'Bạn hỏi ai đã mua món quà sinh nhật này.',
        pre: '这个礼物是', blank: '谁买', post: '的？', options: ['谁买', '买谁', '是谁'], answer: 0,
        explanation: '是……的 nhấn mạnh CHỦ THỂ thực hiện hành động trong quá khứ.' },
      { context: 'Bạn kể lại một kỷ niệm thời thơ ấu.',
        pre: '我五岁', blank: '的时候', post: '，喜欢踢足球。', options: ['的时候', '了', '是'], answer: 0,
        explanation: '……的时候 diễn tả mốc thời gian mà sự việc khác xảy ra.' },
      { type: 'sort', context: 'Sắp xếp thành câu kể bộ phim đã bắt đầu.',
        words: ['电影', '已经', '开始', '了', '。'], answer: '电影已经开始了。',
        explanation: '已经 đặt trước động từ, kết hợp 了 cuối câu biểu thị đã hoàn thành.' },
      { type: 'judge', context: 'Bạn kể ai đã mua quyển sách này.',
        sentence: '这本书是的我买。', isCorrect: false, correctVersion: '这本书是我买的。',
        explanation: '是……的 phải đặt 的 ở CUỐI câu (sau chủ thể+động từ), không đặt giữa câu.' }
    ],
    '/lessons/bai-5.html': [
      { pre: '你不想去，', blank: '就', post: '在家休息吧。', options: ['就', '还', '太'], answer: 0,
        explanation: '就 liên kết với thông tin đã nêu trước đó để đưa ra quyết định/kết luận nhanh chóng.' },
      { pre: '这件衣服大吗？', blank: '还', post: '行，不太大。', options: ['还', '很', '真'], answer: 0,
        explanation: '还 + tính từ tích cực biểu thị mức độ CHẤP NHẬN ĐƯỢC (tạm ổn, không xuất sắc nhưng cũng không tệ).' },
      { pre: '今天天气', blank: '有点儿', post: '冷。', options: ['有点儿', '一点儿', '太'], answer: 0,
        explanation: '有点儿 đặt TRƯỚC tính từ/động từ tâm lý (thường mang sắc thái không hài lòng); phân biệt với 一点儿 (đặt SAU tính từ, mang nghĩa trung tính).' },
      { context: 'Bạn bè rủ đi đâu đó, bạn muốn quyết định nhanh dựa theo gợi ý vừa nghe.',
        pre: '这儿不错，', blank: '就', post: '在这儿吧。', options: ['就', '还', '有点儿'], answer: 0,
        explanation: '就 liên kết với thông tin đã nêu để đưa ra quyết định nhanh.' },
      { context: 'Bạn được hỏi thăm sức khỏe sau khi ốm.',
        pre: '我身体', blank: '还', post: '可以。', options: ['还', '有点儿', '就'], answer: 0,
        explanation: '还+tính từ tích cực biểu thị mức độ tạm ổn, chấp nhận được.' },
      { type: 'sort', context: 'Sắp xếp thành câu khuyên bạn cứ ở nhà nghỉ ngơi.',
        words: ['你', '不想', '去', '，', '就', '在家', '休息', '吧', '。'], answer: '你不想去，就在家休息吧。',
        explanation: '就 liên kết thông tin đã nêu trước đó để đưa ra quyết định nhanh.' },
      { type: 'judge', context: 'Bạn than thở về thời tiết.',
        sentence: '今天天气有点儿冷。', isCorrect: true,
        explanation: '有点儿 đặt trước tính từ, mang sắc thái không hài lòng nhẹ — câu này ĐÚNG.' }
    ],
    '/lessons/bai-6.html': [
      { pre: '你', blank: '怎么', post: '不吃饭？', options: ['怎么', '怎么样', '什么'], answer: 0,
        explanation: '怎么 đứng trước động từ/tính từ để hỏi NGUYÊN NHÂN/LÝ DO, mang sắc thái ngạc nhiên; khác với 怎么样 (hỏi tình trạng chung) hay 什么 (hỏi vật/sự việc).' },
      { pre: '这个星期我', blank: '天天', post: '都吃羊肉。', options: ['天天', '经常', '所以'], answer: 0,
        explanation: 'Lượng từ lặp lại dạng AA (天天) + 都 nhấn mạnh TẤT CẢ cá thể trong nhóm đều như vậy (mỗi ngày đều...).' },
      { pre: '', blank: '因为', post: '她生病了，所以没上课。', options: ['因为', '所以', '就'], answer: 0,
        explanation: '因为 mở đầu vế chỉ NGUYÊN NHÂN, kết hợp với 所以 (chỉ kết quả) ở vế sau.' },
      { context: 'Bạn thấy bạn mình bỏ bữa, ngạc nhiên hỏi lý do.',
        pre: '你', blank: '怎么', post: '不吃饭？', options: ['怎么', '怎么样', '什么'], answer: 0,
        explanation: '怎么 đứng trước động từ để hỏi NGUYÊN NHÂN, mang sắc thái ngạc nhiên.' },
      { context: 'Bạn giải thích lý do mình nghỉ học hôm qua.',
        pre: '', blank: '因为', post: '我生病了，所以没上课。', options: ['因为', '所以', '就'], answer: 0,
        explanation: '因为 mở đầu vế chỉ nguyên nhân, đi cùng 所以 ở vế kết quả.' },
      { type: 'sort', context: 'Sắp xếp thành câu giải thích lý do nghỉ học.',
        words: ['因为', '她', '生病', '了', '，', '所以', '没', '上课', '。'], answer: '因为她生病了，所以没上课。',
        explanation: '因为...所以... nối vế nguyên nhân và vế kết quả.' },
      { type: 'judge', context: 'Bạn hỏi lý do bạn bỏ bữa.',
        sentence: '你怎么样不吃饭？', isCorrect: false, correctVersion: '你怎么不吃饭？',
        explanation: 'Hỏi NGUYÊN NHÂN dùng 怎么, không dùng 怎么样 (hỏi tình trạng chung).' }
    ],
    '/lessons/bai-7.html': [
      { pre: '已经九点多了，他怎么', blank: '还', post: '在学习？', options: ['还', '就', '离'], answer: 0,
        explanation: '还 biểu thị hành động/trạng thái VẪN đang tiếp diễn (chưa kết thúc như mong đợi).' },
      { pre: '我们坐公共汽车一个小时', blank: '就', post: '到学校了。', options: ['就', '还', '到'], answer: 0,
        explanation: '就 biểu thị hành động xảy ra SỚM/NHANH/thuận lợi theo quan điểm người nói (chỉ mất 1 tiếng thôi).' },
      { pre: '你家', blank: '离', post: '公司远吗？', options: ['离', '在', '到'], answer: 0,
        explanation: '离 dùng chỉ KHOẢNG CÁCH tương quan giữa hai địa điểm/mốc (A离B+远/近); 在 chỉ VỊ TRÍ, không chỉ khoảng cách.' },
      { context: 'Đã khuya rồi mà bạn thấy đèn phòng bạn cùng phòng vẫn sáng.',
        pre: '这么晚了，他怎么', blank: '还', post: '在学习？', options: ['还', '就', '离'], answer: 0,
        explanation: '还 biểu thị trạng thái VẪN đang tiếp diễn.' },
      { context: 'Bạn hỏi thăm khoảng cách từ nhà bạn mới quen đến trường.',
        pre: '你家', blank: '离', post: '学校远吗？', options: ['离', '在', '到'], answer: 0,
        explanation: '离 dùng chỉ khoảng cách giữa hai địa điểm.' },
      { type: 'sort', context: 'Sắp xếp thành câu hỏi khoảng cách đến công ty.',
        words: ['你', '家', '离', '公司', '远', '吗', '？'], answer: '你家离公司远吗？',
        explanation: '离 dùng chỉ khoảng cách giữa hai địa điểm (A离B+远/近).' },
      { type: 'judge', context: 'Bạn thấy bạn cùng phòng học khuya.',
        sentence: '已经九点多了，他怎么还在学习？', isCorrect: true,
        explanation: '还 biểu thị trạng thái vẫn đang tiếp diễn — câu này ĐÚNG.' }
    ],
    '/lessons/bai-8.html': [
      { pre: '我们下午去看电影，', blank: '好吗', post: '？', options: ['好吗', '是不是', '怎么样'], answer: 0,
        explanation: '……，好吗？ đặt cuối câu đề nghị để trưng cầu ý kiến LỊCH SỰ; 是不是 dùng khi đã đoán chắc điều gì đó, không phải để đề nghị.' },
      { pre: '明天下午', blank: '再', post: '去吧。', options: ['再', '就', '还'], answer: 0,
        explanation: '再 diễn tả hành động sẽ lặp lại/tiếp tục trong tương lai, thường sau khi hoàn thành một điều kiện.' },
      { pre: '老师', blank: '让', post: '我给大卫打电话。', options: ['让', '请', '告诉'], answer: 0,
        explanation: '让 là động từ cầu khiến trong câu kiêm ngữ (Chủ ngữ+让+Kiêm ngữ+Động từ2), nghĩa "bảo/để ai làm gì"; 请 mang sắc thái mời lịch sự hơn.' },
      { context: 'Bạn đề nghị bạn bè một kế hoạch và muốn hỏi ý kiến họ.',
        pre: '我们明天去看电影，', blank: '好吗', post: '？', options: ['好吗', '是不是', '怎么样'], answer: 0,
        explanation: '……，好吗？ dùng cuối câu đề nghị để hỏi ý kiến lịch sự.' },
      { context: 'Bạn nhờ đồng nghiệp gọi điện giúp cho khách hàng.',
        pre: '老师', blank: '让', post: '我给你打电话。', options: ['让', '请', '告诉'], answer: 0,
        explanation: '让 trong câu kiêm ngữ nghĩa "bảo/để ai làm gì".' },
      { type: 'sort', context: 'Sắp xếp thành câu rủ bạn đi xem phim.',
        words: ['我们', '明天', '去', '看', '电影', '，', '好吗', '？'], answer: '我们明天去看电影，好吗？',
        explanation: '……，好吗？ đặt cuối câu đề nghị để hỏi ý kiến lịch sự.' },
      { type: 'judge', context: 'Bạn nhờ ai đó gọi điện giúp.',
        sentence: '老师叫我给你打电话。', isCorrect: true,
        explanation: '叫 trong câu kiêm ngữ nghĩa "bảo/sai ai làm gì" — câu này ĐÚNG.' }
    ],
    '/lessons/bai-9.html': [
      { pre: '我听', blank: '懂', post: '了。', options: ['懂', '完', '错'], answer: 0,
        explanation: '懂 làm bổ ngữ kết quả sau động từ 听, biểu thị kết quả "nghe HIỂU"; 完 nghĩa "xong", 错 nghĩa "sai".' },
      { pre: '你', blank: '从', post: '几岁开始学习跳舞？', options: ['从', '离', '就'], answer: 0,
        explanation: '从 biểu thị ĐIỂM XUẤT PHÁT của thời gian/địa điểm (从+mốc); 离 chỉ khoảng cách, không chỉ điểm bắt đầu.' },
      { pre: '这是他的', blank: '第一', post: '个工作。', options: ['第一', '一个', '最'], answer: 0,
        explanation: '第 + số đếm biểu thị SỐ THỨ TỰ (第一 = thứ nhất); 一个 chỉ số lượng, không mang nghĩa thứ tự.' },
      { context: 'Bạn nghe giảng xong, xác nhận với giáo viên là mình đã hiểu.',
        pre: '老师，我', blank: '听懂', post: '了。', options: ['听懂', '听完', '听错'], answer: 0,
        explanation: '懂 làm bổ ngữ kết quả biểu thị kết quả "nghe HIỂU".' },
      { context: 'Bạn kể lại mình bắt đầu học nhảy từ khi nào.',
        pre: '我', blank: '从', post: '五岁开始学跳舞。', options: ['从', '离', '就'], answer: 0,
        explanation: '从 biểu thị điểm xuất phát về thời gian/địa điểm.' },
      { type: 'sort', context: 'Sắp xếp thành câu xác nhận đã nghe hiểu.',
        words: ['我', '听', '懂', '了', '。'], answer: '我听懂了。',
        explanation: '懂 làm bổ ngữ kết quả sau động từ 听.' },
      { type: 'judge', context: 'Bạn kể mình học múa từ khi nào.',
        sentence: '你从几岁学习跳舞开始？', isCorrect: false, correctVersion: '你从几岁开始学习跳舞？',
        explanation: '从+mốc phải đứng trước 开始, và 开始 đứng trước cụm động từ chính (学习跳舞).' }
    ],
    '/lessons/bai-10.html': [
      { pre: '', blank: '别', post: '玩手机了，快去学习吧。', options: ['别', '不', '没'], answer: 0,
        explanation: '别 + Động từ + 了 dùng để khuyên ngăn ai đó DỪNG một hành động; 不 chỉ phủ định thông thường, không mang sắc thái khuyên ngăn dứt khoát này.' },
      { pre: '运动', blank: '对', post: '身体很好。', options: ['对', '从', '离'], answer: 0,
        explanation: '对 dùng chỉ mối tương quan/tác động giữa sự vật này với sự vật khác (对+tân ngữ+động từ/tính từ), ở đây nghĩa "có ích đối với...".' },
      { pre: '老师', blank: '对', post: '学生非常好。', options: ['对', '给', '离'], answer: 0,
        explanation: '对 dùng biểu thị thái độ hướng tới đối tượng (đối xử tốt VỚI ai); 给 mang nghĩa "cho, tặng", khác chức năng ngữ pháp.' },
      { context: 'Bạn thấy em trai chơi điện thoại quá lâu, nhắc nhở em.',
        pre: '', blank: '别', post: '玩手机了，快去学习！', options: ['别', '不', '没'], answer: 0,
        explanation: '别+động từ+了 dùng khuyên ngăn ai đó dừng hành động.' },
      { context: 'Bạn giải thích lợi ích của việc tập thể dục.',
        pre: '运动', blank: '对', post: '身体很好。', options: ['对', '从', '给'], answer: 0,
        explanation: '对 dùng chỉ mối tương quan/tác động đến đối tượng.' },
      { type: 'sort', context: 'Sắp xếp thành câu nhắc em trai đừng chơi điện thoại.',
        words: ['别', '玩', '手机', '了', '，', '快', '去', '学习', '！'], answer: '别玩手机了，快去学习！',
        explanation: '别+động từ+了 khuyên ngăn ai đó dừng hành động.' },
      { type: 'judge', context: 'Bạn nói về lợi ích của vận động.',
        sentence: '运动对身体很好。', isCorrect: true,
        explanation: '对 dùng chỉ tác động tích cực đến đối tượng (身体) — câu này ĐÚNG.' }
    ],
    '/lessons/bai-11.html': [
      { pre: '这是我妈妈做', blank: '的', post: '饭。', options: ['的', '了', '对'], answer: 0,
        explanation: 'Khi cụm động từ (妈妈做) bổ nghĩa cho danh từ theo sau (饭), bắt buộc phải có trợ từ 的 ở giữa.' },
      { pre: '哥哥', blank: '比', post: '姐姐高。', options: ['比', '对', '从'], answer: 0,
        explanation: '比 dùng để SO SÁNH sự khác biệt giữa hai đối tượng A và B (A+比+B+tính từ).' },
      { pre: '', blank: '可能', post: '我明天不来上课了。', options: ['可能', '希望', '懂'], answer: 0,
        explanation: '可能 đặt trước câu để diễn đạt một sự PHỎNG ĐOÁN/ước chừng về khả năng xảy ra; 希望 mang sắc thái mong muốn, khác với phỏng đoán.' },
      { context: 'Bạn giới thiệu món ăn do chính mẹ mình nấu.',
        pre: '这是我妈妈做', blank: '的', post: '菜。', options: ['的', '了', '着'], answer: 0,
        explanation: 'Khi cụm động từ bổ nghĩa cho danh từ, cần thêm 的.' },
      { context: 'Bạn so sánh chiều cao giữa hai anh em.',
        pre: '哥哥', blank: '比', post: '弟弟高。', options: ['比', '对', '从'], answer: 0,
        explanation: '比 dùng so sánh sự khác biệt giữa hai đối tượng.' },
      { type: 'sort', context: 'Sắp xếp thành câu so sánh chiều cao.',
        words: ['哥哥', '比', '姐姐', '高', '。'], answer: '哥哥比姐姐高。',
        explanation: '比 dùng so sánh: A+比+B+tính từ.' },
      { type: 'judge', context: 'Bạn so sánh giá hai món đồ.',
        sentence: '这个比那个便宜比。', isCorrect: false, correctVersion: '这个比那个便宜。',
        explanation: '比 chỉ xuất hiện MỘT LẦN ở đầu cấu trúc so sánh, không lặp lại ở cuối câu.' }
    ],
    '/lessons/bai-12.html': [
      { pre: '他说', blank: '得', post: '很好。', options: ['得', '的', '了'], answer: 0,
        explanation: '得 đặt sau động từ (说) để dẫn vào bổ ngữ trạng thái (很好), mô tả/đánh giá kết quả hành động; khác với 的 (sở hữu) và 了 (hoàn thành).' },
      { pre: '他', blank: '比', post: '我学得好。', options: ['比', '对', '得'], answer: 0,
        explanation: 'Khi kết hợp so sánh 比 với bổ ngữ trạng thái, 比 có thể đặt TRƯỚC động từ (A+比+B+V+得+tính từ) để so sánh mức độ thực hiện hành động.' },
      { pre: '他学', blank: '得', post: '比我好。', options: ['得', '的', '了'], answer: 0,
        explanation: 'Đây là biến thể vị trí khác của 比 kết hợp bổ ngữ trạng thái (A+V+得+比+B+tính từ) — cả hai dạng đều đúng và mang nghĩa như nhau.' },
      { context: 'Bạn khen bạn mình nói tiếng Trung rất giỏi.',
        pre: '你汉语说', blank: '得', post: '真好！', options: ['得', '的', '了'], answer: 0,
        explanation: '得 dẫn vào bổ ngữ trạng thái để đánh giá kết quả hành động.' },
      { context: 'Bạn so sánh kết quả học tập giữa mình và bạn.',
        pre: '他', blank: '比', post: '我学得好。', options: ['比', '对', '从'], answer: 0,
        explanation: '比 kết hợp bổ ngữ trạng thái để so sánh mức độ thực hiện hành động.' },
      { type: 'sort', context: 'Sắp xếp thành câu khen ai đó nói giỏi.',
        words: ['他', '说', '得', '很', '好', '。'], answer: '他说得很好。',
        explanation: '得 dẫn vào bổ ngữ trạng thái sau động từ (说).' },
      { type: 'judge', context: 'Bạn so sánh khả năng nói của hai người.',
        sentence: '他比我说得好。', isCorrect: true,
        explanation: '比 đặt trước động từ khi kết hợp với bổ ngữ trạng thái — câu này ĐÚNG.' }
    ],
    '/lessons/bai-13.html': [
      { pre: '她手里拿', blank: '着', post: '铅笔。', options: ['着', '了', '得'], answer: 0,
        explanation: '着 biểu thị một hành động/trạng thái đang được DUY TRÌ, TIẾP DIỄN; khác 了 (chỉ sự hoàn thành) và 得 (dẫn vào bổ ngữ trạng thái).' },
      { pre: '你', blank: '不是', post: '去过中国吗？', options: ['不是', '可能', '希望'], answer: 0,
        explanation: '不是……吗？ dùng để XÁC NHẬN LẠI một thông tin, thường mang ý ngạc nhiên/phản bác nhẹ.' },
      { pre: '', blank: '往', post: '前走，到了路口再往右走。', options: ['往', '从', '离'], answer: 0,
        explanation: '往 chỉ HƯỚNG di chuyển của hành động (往+hướng/nơi chốn+động từ), thường dùng khi chỉ đường; khác 从 (chỉ điểm xuất phát) và 离 (chỉ khoảng cách).' },
      { context: 'Bạn mô tả tư thế một người bạn đang đứng chờ, tay cầm điện thoại.',
        pre: '她手里拿', blank: '着', post: '手机。', options: ['着', '了', '过'], answer: 0,
        explanation: '着 biểu thị hành động/trạng thái đang được duy trì.' },
      { context: 'Bạn chỉ đường cho khách du lịch đến khách sạn.',
        pre: '你一直', blank: '往前走', post: '，就到了。', options: ['往前走', '往前', '走前'], answer: 0,
        explanation: '往+hướng+động từ chỉ hướng di chuyển, thường dùng khi chỉ đường.' },
      { type: 'sort', context: 'Sắp xếp thành câu mô tả người đang cầm bút chì.',
        words: ['她', '手里', '拿', '着', '铅笔', '。'], answer: '她手里拿着铅笔。',
        explanation: '着 biểu thị trạng thái đang được duy trì, đặt ngay sau động từ.' },
      { type: 'judge', context: 'Bạn xác nhận lại thông tin về việc ai đó đã từng đến Trung Quốc.',
        sentence: '你不是去过中国吗？', isCorrect: true,
        explanation: '不是……吗？ dùng xác nhận lại thông tin — câu này ĐÚNG.' }
    ],
    '/lessons/bai-14.html': [
      { pre: '你看', blank: '过', post: '那个电影吗？', options: ['过', '了', '着'], answer: 0,
        explanation: '过 biểu thị một hành động đã từng xảy ra trong QUÁ KHỨ, nhấn mạnh KINH NGHIỆM đã trải qua; 了 chỉ sự hoàn thành, 着 chỉ trạng thái đang duy trì.' },
      { pre: '', blank: '虽然', post: '北京很远，但是你一定要去看看。', options: ['虽然', '因为', '可能'], answer: 0,
        explanation: '虽然 mở đầu vế NHƯỢNG BỘ, luôn đi kèm 但是 ở vế sau; 因为 mở đầu vế NGUYÊN NHÂN, không phải nhượng bộ.' },
      { pre: '我去过', blank: '一次', post: '中国。', options: ['一次', '一下', '有点儿'], answer: 0,
        explanation: '次 là lượng từ chỉ SỐ LẦN một hành động xảy ra, đứng sau động từ+过; 一下 chỉ mức độ nhẹ/thử làm, không đếm số lần.' },
      { context: 'Bạn được hỏi đã từng xem một bộ phim cụ thể chưa.',
        pre: '你', blank: '看过', post: '那个电影吗？', options: ['看过', '看了', '看着'], answer: 0,
        explanation: '过 biểu thị một hành động đã từng xảy ra, nhấn mạnh kinh nghiệm.' },
      { context: 'Bạn nhận xét chữ Hán tuy khó nhưng bạn vẫn thích viết.',
        pre: '', blank: '虽然', post: '汉字很难，但是我很喜欢写汉字。', options: ['虽然', '因为', '可能'], answer: 0,
        explanation: '虽然 mở đầu vế nhượng bộ, đi cùng 但是 ở vế sau.' },
      { type: 'sort', context: 'Sắp xếp thành câu kể đã đến Trung Quốc một lần.',
        words: ['我', '去', '过', '一', '次', '中国', '。'], answer: '我去过一次中国。',
        explanation: '过 biểu thị kinh nghiệm, 次 (lượng từ số lần) đứng sau động từ+过.' },
      { type: 'judge', context: 'Bạn nói về chữ Hán khó nhưng vẫn thích viết.',
        sentence: '但是汉字很难，虽然我很喜欢写汉字。', isCorrect: false, correctVersion: '虽然汉字很难，但是我很喜欢写汉字。',
        explanation: '虽然 phải mở đầu vế NHƯỢNG BỘ trước, 但是 mở đầu vế KHẲNG ĐỊNH sau — không đảo ngược thứ tự hai liên từ.' }
    ],
    '/lessons/bai-15.html': [
      { pre: '今天阴，比昨天', blank: '更', post: '冷。', options: ['更', '太', '真'], answer: 0,
        explanation: '更 nhấn mạnh mức độ TĂNG THÊM khi so sánh hai đối tượng (A比B更+tính từ); 太 chỉ mức vượt trội tuyệt đối, không mang tính so sánh tương đối.' },
      { pre: '新年', blank: '就要', post: '到了。', options: ['就要', '已经', '还'], answer: 0,
        explanation: '就要/快要/快/要……了 diễn tả một việc SẮP xảy ra trong tương lai gần; 已经 chỉ việc ĐÃ xảy ra rồi, ngược nghĩa thời gian.' },
      { pre: '衣服', blank: '都', post: '买好了。', options: ['都', '就', '还'], answer: 0,
        explanation: '都……了 nhấn mạnh TẤT CẢ đối tượng đều đã đạt trạng thái/kết quả nêu ra.' },
      { context: 'Bạn so sánh thời tiết hôm nay lạnh hơn hôm qua.',
        pre: '今天', blank: '比昨天更', post: '冷。', options: ['比昨天更', '比昨天', '更比昨天'], answer: 0,
        explanation: '更 nhấn mạnh mức độ tăng thêm khi so sánh.' },
      { context: 'Bạn thông báo năm mới sắp đến gần.',
        pre: '新年', blank: '就要', post: '到了。', options: ['就要', '已经', '还'], answer: 0,
        explanation: '就要...了 diễn tả một việc sắp xảy ra trong tương lai gần.' },
      { type: 'sort', context: 'Sắp xếp thành câu thông báo năm mới sắp đến.',
        words: ['新年', '就要', '到', '了', '。'], answer: '新年就要到了。',
        explanation: '就要...了 diễn tả một việc sắp xảy ra trong tương lai gần.' },
      { type: 'judge', context: 'Bạn so sánh thời tiết hôm nay lạnh hơn hôm qua.',
        sentence: '今天比昨天冷更。', isCorrect: false, correctVersion: '今天比昨天更冷。',
        explanation: '更 phải đứng NGAY TRƯỚC tính từ (冷), không đặt sau tính từ.' }
    ],
    '/lessons/hsk3-bai-2.html': [
      { point: 'Bổ ngữ xu hướng đơn 「V + 来 / 去」',
        items: [
          { context: 'Em bé nói với mẹ là mình sẽ về đến nhà ngay.',
            pre: '我马上', blank: '回家去', post: '。', options: ['回家去', '回去家', '回去家去'], answer: 0,
            explanation: 'Tân ngữ nơi chốn (家) BẮT BUỘC đứng GIỮA động từ 回 và 去: 回 + 家 + 去, không được tách rời hay đảo vị trí.' },
          { type: 'sort', context: 'Sắp xếp thành câu diễn tả bạn lên lầu lấy ô cho bạn mình.',
            words: ['我', '上楼', '去', '给', '你', '拿', '把', '伞', '。'], answer: '我上楼去给你拿把伞。',
            explanation: 'Trật tự: Chủ ngữ + 上楼去 (V+nơi chốn+去) + 给你 (giới từ) + 拿把伞 (V+lượng từ+O).' },
          { type: 'translate', context: 'Dịch câu sau sang tiếng Trung, áp dụng bổ ngữ xu hướng V+来/去.',
            promptLang: 'vi', prompt: 'Sách tiếng Trung bạn mang đến chưa?',
            answer: '汉语书你带来了吗？', answerPy: 'Hànyǔ shū nǐ dàilai le ma?',
            explanation: '带 (mang) + 来 (đến, hướng về người nói) — tân ngữ sự vật 汉语书 được đưa lên ĐẦU CÂU làm chủ đề, 来 đặt ngay sau động từ 带.' },
        ] },
      { point: 'Hai hành động liên tiếp 「V了……就V……」',
        items: [
          { context: 'Hoàn thành câu theo mẫu V了……就V…… (hai hành động liên tiếp).',
            pre: '我下了课', blank: '就', post: '吃饭。', options: ['就', '才', '还'], answer: 0,
            explanation: 'V了……就V…… diễn tả hai hành động xảy ra LIÊN TIẾP, hành động thứ hai xảy ra ngay sau hành động thứ nhất.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他到办公室了我就告诉他。', isCorrect: false, correctVersion: '他到了办公室我就告诉他。',
            explanation: '了 phải đứng NGAY SAU động từ 到, TRƯỚC tân ngữ 办公室, không đặt sau tân ngữ.' },
          { type: 'translate', context: 'Dịch câu sau, áp dụng cấu trúc V了……就V……, chú ý câu có 2 chủ ngữ khác nhau.',
            promptLang: 'vi', prompt: 'Bố về đến nhà là chúng tôi ăn cơm ngay.',
            answer: '爸爸回来了我们就吃饭。', answerPy: 'Bàba huílai le wǒmen jiù chīfàn.',
            explanation: 'Khi câu có 2 chủ ngữ khác nhau (爸爸 và 我们), chủ ngữ thứ hai phải đặt NGAY TRƯỚC 就.' },
        ] },
      { point: 'Câu phản vấn 「能……吗？」',
        items: [
          { context: 'Chọn cách diễn đạt phản vấn đúng theo mẫu 能……吗？',
            pre: '你每天晚上吃了饭就睡觉，也不出去走走，', blank: '能不胖吗', post: '？', options: ['能不胖吗', '能胖吗', '不能胖吗'], answer: 0,
            explanation: '能不胖吗 (dạng phủ định) mang ý nghĩa thực chất là KHẲNG ĐỊNH — "chắc chắn sẽ béo" (会胖).' },
          { type: 'judge', context: 'Câu phản vấn sau có mang ý nghĩa thực chất là "không thể học tốt được" không?',
            sentence: '你不做作业，也不练习，能学好吗？', isCorrect: true,
            explanation: '能学好吗 (dạng khẳng định) mang ý nghĩa thực chất PHỦ ĐỊNH — "không thể học tốt được" (不能学好). Câu này đúng ngữ pháp và đúng ý phản vấn.' },
          { type: 'translate', context: 'Dịch câu sau sang tiếng Trung, dùng câu phản vấn 能……吗？',
            promptLang: 'vi', prompt: 'Anh ấy làm việc bận như vậy, sao mà không mệt được?',
            answer: '他工作这么忙，能不累吗？', answerPy: 'Tā gōngzuò zhème máng, néng bú lèi ma?',
            explanation: '能不累吗 (dạng phủ định) mang ý nghĩa thực chất KHẲNG ĐỊNH — "chắc chắn rất mệt" (一定很累).' },
        ] },
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
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = false;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
    $('#grSubtitle').textContent = 'Đang tải...';
    $('#grContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';

    grMode = 'lesson';
    renderGrTabs();

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

  // Du lieu bai tap ngu phap co 2 dang: mang PHANG (cu — 1 tab "Bai tap" duy
  // nhat, dung cho da so bai hoc), hoac mang NHOM theo tung diem ngu phap
  // (moi phan tu co {point, items}) — dung khi 1 bai hoc muon tach rieng tab
  // cho tung diem (hien tai la HSK3). Phat hien dang bang cach xem phan tu
  // dau tien co field "items" (mang) hay khong.
  function grRawExercises() {
    return GRAMMAR_EXERCISES[currentHubLesson.fullPageUrl] || [];
  }
  function grIsGrouped(raw) {
    return raw.length > 0 && raw[0] && Array.isArray(raw[0].items);
  }
  function grCurrentItems() {
    var raw = grRawExercises();
    if (grIsGrouped(raw)) {
      var idx = (typeof grMode === 'string' && grMode.indexOf('exercise_') === 0) ? parseInt(grMode.slice(9), 10) : 0;
      return (raw[idx] && raw[idx].items) || [];
    }
    return raw;
  }

  function renderGrTabs() {
    var wrap = $('#grTabs');
    if (!wrap) return;
    wrap.innerHTML = '';
    var lessonBtn = document.createElement('button');
    lessonBtn.type = 'button';
    lessonBtn.className = 'vp-tab' + (grMode === 'lesson' ? ' active' : '');
    lessonBtn.textContent = 'Bài học';
    lessonBtn.addEventListener('click', function () { grMode = 'lesson'; grQuiz = null; renderGrTabs(); renderGrammarContent(); });
    wrap.appendChild(lessonBtn);

    var raw = grRawExercises();
    if (grIsGrouped(raw)) {
      raw.forEach(function (g, gi) {
        var modeId = 'exercise_' + gi;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'vp-tab' + (grMode === modeId ? ' active' : '');
        btn.textContent = 'Bài tập ' + (gi + 1);
        btn.addEventListener('click', function () { grMode = modeId; grQuiz = null; renderGrTabs(); renderGrammarContent(); });
        wrap.appendChild(btn);
      });
    } else if (raw.length) {
      var btn2 = document.createElement('button');
      btn2.type = 'button';
      btn2.className = 'vp-tab' + (grMode === 'exercise' ? ' active' : '');
      btn2.textContent = 'Bài tập';
      btn2.addEventListener('click', function () { grMode = 'exercise'; grQuiz = null; renderGrTabs(); renderGrammarContent(); });
      wrap.appendChild(btn2);
    }
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

  var GR_TYPE_LABEL = {
    mc: '✏️ Điền từ', sort: '🧩 Sắp xếp câu', judge: '⚖️ Đúng hay sai?', translate: '🔄 Dịch câu'
  };

  function renderGrammarExercise() {
    var wrap = $('#grContent');
    var raw = grRawExercises();
    var items = grCurrentItems();
    var groupTitle = null;
    if (grIsGrouped(raw) && grMode.indexOf('exercise_') === 0) {
      var gidx = parseInt(grMode.slice(9), 10);
      groupTitle = raw[gidx] && raw[gidx].point;
    }
    var groupTitleHtml = groupTitle ? '<div class="gr-group-title">📐 ' + groupTitle + '</div>' : '';
    if (!items.length) {
      wrap.innerHTML = groupTitleHtml + '<p style="color:var(--color-gray-500);">Bài học này chưa có bài tập ngữ pháp.</p>';
      return;
    }
    if (!grQuiz) { grQuiz = { pos: 0, score: 0 }; pgbInit('grq', items.length); }

    if (grQuiz.pos >= items.length) {
      recordLessonScore(currentHubLesson, 'grammar', { correct: grQuiz.score, total: items.length });
      wrap.innerHTML =
        groupTitleHtml +
        '<div class="vp-quiz-done"><strong>' + grQuiz.score + '/' + items.length + '</strong>' +
        '<p style="color:var(--color-gray-600);margin-bottom:var(--space-5);">Bạn đã hoàn thành bài tập ngữ pháp.</p>' +
        '<button type="button" class="btn btn-primary" id="grRestart">Làm lại</button></div>';
      $('#grRestart').addEventListener('click', function () { grQuiz = null; renderGrammarExercise(); });
      return;
    }

    var total = items.length;
    var q = items[grQuiz.pos];
    var type = q.type || 'mc';

    wrap.innerHTML =
      groupTitleHtml +
      pgbHtml('grq', total) +
      '<div class="vp-quiz-counter">Câu ' + (grQuiz.pos + 1) + '/' + total + ' <span class="gr-type-badge">' + GR_TYPE_LABEL[type] + '</span></div>' +
      '<div class="vp-quiz-card" id="grCard">' +
        (q.context ? '<div class="gr-exercise-context">🗣️ ' + q.context + '</div>' : '') +
        '<div id="grBody"></div>' +
        '<div id="grExplain" style="margin-top:var(--space-4);font-size:0.9rem;color:var(--color-gray-600);"></div>' +
        '<div id="grNextWrap"></div>' +
      '</div>';
    pgbPaint('grq');

    if (type === 'sort') renderGrSort(q);
    else if (type === 'judge') renderGrJudge(q);
    else if (type === 'translate') renderGrTranslate(q);
    else renderGrMC(q);
  }

  function grFinishQuestion(isCorrect, explanation) {
    if (isCorrect) grQuiz.score++;
    pgbRecord('grq', grQuiz.pos, isCorrect);
    $('#grExplain').textContent = '💡 ' + explanation;
    var total = grCurrentItems().length;
    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'btn btn-primary';
    nextBtn.style.marginTop = 'var(--space-4)';
    nextBtn.textContent = (grQuiz.pos + 1 < total) ? 'Câu tiếp theo →' : 'Xem kết quả';
    nextBtn.addEventListener('click', function () {
      grQuiz.pos++;
      renderGrammarExercise();
    });
    $('#grNextWrap').appendChild(nextBtn);
  }

  function renderGrMC(q) {
    var body = $('#grBody');
    var optionsHtml = q.options.map(function (opt, i) {
      return '<button type="button" class="vp-option-btn" data-idx="' + i + '">' + opt + '</button>';
    }).join('');
    body.innerHTML =
      '<div class="gr-exercise-sentence hanzi">' + q.pre + '<span class="blank">___</span>' + q.post + '</div>' +
      '<div class="vp-quiz-options">' + optionsHtml + '</div>';

    $all('.vp-option-btn', body).forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var isCorrect = i === q.answer;
        $all('.vp-option-btn', body).forEach(function (b, j) {
          b.disabled = true;
          if (j === q.answer) b.classList.add('is-correct');
          else if (j === i) b.classList.add('is-wrong');
        });
        grFinishQuestion(isCorrect, q.explanation);
      });
    });
  }

  function renderGrSort(q) {
    var body = $('#grBody');
    var shuffled = shuffle(q.words.slice());
    var placed = [];

    body.innerHTML =
      '<p style="color:var(--color-gray-600);font-size:0.88rem;margin-bottom:var(--space-3);">Sắp xếp các từ dưới đây thành câu đúng:</p>' +
      '<div class="sg-bank" id="grBank"></div>' +
      '<div class="sg-answer" id="grAnswer"></div>' +
      '<button type="button" class="btn btn-primary" id="grCheckSort" style="margin-top:var(--space-4);">Kiểm tra</button>';

    function renderBank() {
      var bankEl = $('#grBank');
      bankEl.innerHTML = shuffled.map(function (w, wi) {
        var isPunc = /^[。！？，、；：]$/.test(w);
        var used = placed.some(function (p) { return p.wi === wi; });
        return '<span class="sg-chip' + (isPunc ? ' is-punc' : '') + (used ? ' is-used' : '') + '" data-wi="' + wi + '">' + w + '</span>';
      }).join('');
      $all('.sg-chip', bankEl).forEach(function (chip) {
        chip.addEventListener('click', function () {
          if (chip.classList.contains('is-used')) return;
          var wi = parseInt(chip.getAttribute('data-wi'), 10);
          placed.push({ wi: wi, word: shuffled[wi] });
          renderBank();
          renderAnswer();
        });
      });
    }
    function renderAnswer() {
      var answerEl = $('#grAnswer');
      answerEl.innerHTML = placed.map(function (p) {
        var isPunc = /^[。！？，、；：]$/.test(p.word);
        return '<span class="sg-placed' + (isPunc ? ' is-punc' : '') + '" data-wi="' + p.wi + '">' + p.word + '</span>';
      }).join('');
      $all('.sg-placed', answerEl).forEach(function (chip) {
        chip.addEventListener('click', function () {
          var wi = parseInt(chip.getAttribute('data-wi'), 10);
          placed = placed.filter(function (p) { return p.wi !== wi; });
          renderBank();
          renderAnswer();
        });
      });
    }
    renderBank();
    renderAnswer();

    $('#grCheckSort').addEventListener('click', function () {
      var joined = placed.map(function (p) { return p.word; }).join('');
      var isCorrect = joined === q.answer;
      $('#grCard').classList.add(isCorrect ? 'is-correct' : 'is-wrong');
      this.disabled = true;
      grFinishQuestion(isCorrect, isCorrect ? q.explanation : 'Đáp án đúng: "' + q.answer + '". ' + q.explanation);
    });
  }

  function renderGrJudge(q) {
    var body = $('#grBody');
    body.innerHTML =
      '<div class="gr-exercise-sentence hanzi">' + q.sentence + '</div>' +
      '<div class="gr-judge-btns">' +
        '<button type="button" class="btn btn-outline" data-judge="true">✓ Đúng</button>' +
        '<button type="button" class="btn btn-outline" data-judge="false">✗ Sai</button>' +
      '</div>';

    $all('[data-judge]', body).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var picked = btn.getAttribute('data-judge') === 'true';
        var isCorrect = picked === q.isCorrect;
        $all('[data-judge]', body).forEach(function (b) { b.disabled = true; });
        btn.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
        var exp = q.explanation;
        if (!q.isCorrect && q.correctVersion) exp = 'Câu đúng: "' + q.correctVersion + '". ' + exp;
        grFinishQuestion(isCorrect, exp);
      });
    });
  }

  // Bai tap dich cau ap dung ngu phap: hoc sinh tu go dap an, bam nut de xem
  // dap an mau + giai thich (khong the tu dong cham diem cau tu do nen tinh
  // la "hoan thanh" ngay khi xem dap an, giong cach lam cua man Luyen dich).
  function renderGrTranslate(q) {
    var body = $('#grBody');
    var isZh = q.promptLang === 'zh';
    body.innerHTML =
      '<div class="gr-translate-prompt' + (isZh ? ' hanzi' : '') + '">' + q.prompt + '</div>' +
      '<textarea class="gr-translate-input" id="grTransInput" rows="2" placeholder="Nhập câu dịch của bạn..."></textarea>' +
      '<button type="button" class="btn btn-primary" id="grShowAnswer">Xem đáp án mẫu</button>' +
      '<div class="gr-translate-answer" id="grTransAnswer" hidden>' +
        '<strong>Đáp án mẫu:</strong> <span class="hanzi">' + q.answer + '</span>' +
        (q.answerPy ? '<div class="gr-translate-py">' + q.answerPy + '</div>' : '') +
      '</div>';

    $('#grShowAnswer').addEventListener('click', function () {
      $('#grTransAnswer').hidden = false;
      this.disabled = true;
      grFinishQuestion(true, q.explanation);
    });
  }

  /* ---------------- Dialogue practice (Hoi thoai: 4 doan + audio goc that) ---------------- */

  var dpScenes = [];
  var dpIndex = 0;
  var dpViewed = null;
  var dpQuizState = {};
  var dpFlatOffsets = [];
  var dpTotalQuiz = 0;

  function showDialoguePractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = false;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
    $('#dpSubtitle').textContent = 'Đang tải...';
    $('#dpTabs').innerHTML = '';
    $('#dpContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';

    loadLessonDialog(lesson).then(function (dialogData) {
      dpScenes = dialogData;
      dpIndex = 0;
      dpViewed = new Set();
      dpQuizState = {};
      dpFlatOffsets = [];
      dpTotalQuiz = 0;
      dialogData.forEach(function (scene) {
        dpFlatOffsets.push(dpTotalQuiz);
        dpTotalQuiz += (scene.preQuiz && scene.preQuiz.length) || 0;
      });
      if (dpTotalQuiz > 0) pgbInit('dpq', dpTotalQuiz);
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

    var hasQuiz = scene.preQuiz && scene.preQuiz.length;
    if (!dpQuizState[dpIndex]) dpQuizState[dpIndex] = { answers: {}, revealed: !hasQuiz };
    var state = dpQuizState[dpIndex];

    var quizHtml = '';
    if (hasQuiz) {
      quizHtml =
        '<div class="dp-quiz-box">' +
          '<div class="dp-quiz-title">🎧 Nghe audio rồi trả lời trước khi xem nội dung bài khóa</div>' +
          scene.preQuiz.map(function (q, qi) {
            var answered = state.answers[qi] !== undefined;
            var optsHtml = q.opts.map(function (opt, oi) {
              var cls = 'dp-quiz-opt';
              if (answered) {
                if (oi === q.ans) cls += ' is-correct';
                else if (oi === state.answers[qi]) cls += ' is-wrong';
              }
              return '<button type="button" class="' + cls + '" data-qi="' + qi + '" data-oi="' + oi + '"' + (answered ? ' disabled' : '') + '>' + opt + '</button>';
            }).join('');
            return '<div class="dp-quiz-q">' +
              '<div class="dp-quiz-qtext">Câu ' + (qi + 1) + '. ' + q.q + '</div>' +
              '<div class="dp-quiz-opts">' + optsHtml + '</div>' +
            '</div>';
          }).join('') +
          (!state.revealed ? '<button type="button" class="dp-quiz-skip" id="dpQuizSkip">Bỏ qua, xem luôn nội dung bài khóa →</button>' : '') +
        '</div>';
    }

    var linesHtml = '';
    if (state.revealed) {
      linesHtml = scene.lines.map(function (line) {
        var isB = line.sp === 1;
        return '<div class="dp-line' + (isB ? ' is-b' : '') + '">' +
          '<div class="dp-avatar">' + (isB ? 'B' : 'A') + '</div>' +
          '<div class="dp-bubble"><div class="dp-zh hanzi">' + line.zh + '</div><div class="dp-py">' + line.py + '</div><div class="dp-vn">' + line.vn + '</div></div>' +
          '</div>';
      }).join('');
      linesHtml = '<div class="dp-content-label">📖 Nội dung bài khóa</div>' + linesHtml;
      if (dpViewed) {
        dpViewed.add(dpIndex);
        if (dpViewed.size === dpScenes.length) recordLessonScore(currentHubLesson, 'dialog', { done: true });
      }
    }

    wrap.innerHTML =
      (dpTotalQuiz > 0 ? pgbHtml('dpq', dpTotalQuiz) : '') +
      '<div class="dp-scene-label">🎭 ' + scene.scene + '</div>' +
      audioHtml +
      quizHtml +
      linesHtml;
    if (dpTotalQuiz > 0) pgbPaint('dpq');

    var audioEl = $('.dp-audio-box audio', wrap);
    if (audioEl) {
      audioEl.addEventListener('error', function () {
        var box = audioEl.closest('.dp-audio-box');
        if (box) box.innerHTML = '<span class="dp-audio-missing">⚠️ Chưa có audio gốc cho đoạn này.</span>';
      });
    }

    if (hasQuiz && !state.revealed) {
      $all('.dp-quiz-opt', wrap).forEach(function (btn) {
        btn.addEventListener('click', function () {
          var qi = parseInt(btn.getAttribute('data-qi'), 10);
          var oi = parseInt(btn.getAttribute('data-oi'), 10);
          if (state.answers[qi] !== undefined) return;
          state.answers[qi] = oi;
          pgbRecord('dpq', dpFlatOffsets[dpIndex] + qi, oi === scene.preQuiz[qi].ans);
          if (Object.keys(state.answers).length === scene.preQuiz.length) state.revealed = true;
          renderDialogueScene();
        });
      });
      var skipBtn = $('#dpQuizSkip', wrap);
      if (skipBtn) skipBtn.addEventListener('click', function () { state.revealed = true; renderDialogueScene(); });
    }
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
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = false;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
    $('#lpContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';

    lpMode = 'meaning';
    $all('#lpTabs .vp-tab').forEach(function (t) { t.classList.toggle('active', t.getAttribute('data-lp-tab') === 'meaning'); });

    Promise.all([loadLessonVocab(lesson), loadLessonListenData(lesson)]).then(function (res) {
      lpVocab = res[0];
      lpListenData = res[1];
      lpQuiz = null;
      lpWorkbookScore = null;
      var isWorkbook = lpListenData && lpListenData.type === 'workbook';
      $('#lpTabs').hidden = isWorkbook;
      renderListenContent();
    }).catch(function () {
      $('#lpContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được dữ liệu luyện nghe của bài này.</p>';
    });

    $('#listenPractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderListenContent() {
    if (lpListenData && lpListenData.type === 'workbook') renderListenWorkbook();
    else if (lpMode === 'dialog') renderListenDialogPassages();
    else renderListenMCQuiz();
  }

  // Đề nghe thật lấy từ sách bài tập (workbook): audio thật (không phải TTS),
  // câu 1-10 dạng điền khuyết (nghe rồi gõ từ còn thiếu, bấm xem đáp án mẫu —
  // chấm đúng/sai ngay lúc bấm bằng cách so khớp với đáp án), câu 11-15 dạng
  // trắc nghiệm nghe hội thoại chọn đáp án đúng. Tổng 15 câu được chấm điểm
  // và lưu vào recordLessonScore để hiện trong màn "Kết quả cuối bài".
  var lpWorkbookScore = null;
  var LP_WB_TOTAL = 15;

  function lpWorkbookUpdateScore() {
    var correct = 0;
    Object.keys(lpWorkbookScore.dictCorrect).forEach(function (k) { if (lpWorkbookScore.dictCorrect[k]) correct++; });
    Object.keys(lpWorkbookScore.mcCorrect).forEach(function (k) { if (lpWorkbookScore.mcCorrect[k]) correct++; });
    recordLessonScore(currentHubLesson, 'listen', { correct: correct, total: LP_WB_TOTAL });
  }

  function renderListenWorkbook() {
    var wrap = $('#lpContent');
    var data = lpListenData;
    if (!lpWorkbookScore) { lpWorkbookScore = { dictCorrect: {}, mcCorrect: {} }; pgbInit('lpwq', LP_WB_TOTAL); }

    var dictationHtml = data.dictation.map(function (item) {
      var linesHtml = item.lines.map(function (line, li) {
        var inputId = 'lpDictInput-' + item.num + '-' + li;
        return '<div class="lp-dict-line">' +
          (line.speaker ? '<span class="lp-dict-speaker">' + line.speaker + '：</span>' : '') +
          '<span class="lp-dict-pre hanzi">' + line.pre + '</span>' +
          '<input type="text" class="lp-dict-input" id="' + inputId + '" data-num="' + item.num + '" data-li="' + li + '" placeholder="…">' +
          '<span class="lp-dict-post hanzi">' + line.post + '</span>' +
        '</div>';
      }).join('');
      var answerHtml = item.lines.map(function (line) {
        return '<div class="lp-dict-answer-line">' +
          '<span class="hanzi">' + (line.speaker ? line.speaker + '：' : '') + line.pre + line.blank + line.post + '</span>' +
          '<div class="lp-dict-answer-py">' + line.py + '</div>' +
          '<div class="lp-dict-answer-vn">' + line.vn + '</div>' +
        '</div>';
      }).join('');
      return '<div class="lp-dict-item">' +
        '<div class="lp-dict-num">Câu ' + item.num + ' <span class="lp-dict-result" data-result-num="' + item.num + '"></span></div>' +
        linesHtml +
        '<button type="button" class="lp-dict-reveal" data-reveal-num="' + item.num + '">Xem đáp án</button>' +
        '<div class="lp-dict-answer" data-answer-num="' + item.num + '" hidden>' + answerHtml + '</div>' +
      '</div>';
    }).join('');

    var mcHtml = data.mc.map(function (item) {
      var optsHtml = item.options.map(function (opt, oi) {
        return '<button type="button" class="lp-mc-opt" data-mc-num="' + item.num + '" data-oi="' + oi + '">' + String.fromCharCode(65 + oi) + '. ' + opt + '</button>';
      }).join('');
      return '<div class="lp-mc-item">' +
        '<div class="lp-dict-num">Câu ' + item.num + '</div>' +
        '<div class="lp-mc-opts">' + optsHtml + '</div>' +
        '<div class="lp-mc-explain" data-explain-num="' + item.num + '" hidden></div>' +
      '</div>';
    }).join('');

    wrap.innerHTML =
      '<div class="lp-wb-audio-pin">' +
        '<div class="lp-wb-audio-pin-label">🎧 Audio đề nghe · Câu 1-15</div>' +
        '<audio class="lp-wb-audio" controls preload="none" src="' + data.audio + '"></audio>' +
      '</div>' +
      pgbHtml('lpwq', LP_WB_TOTAL) +
      '<div class="lp-wb-part">' +
        '<div class="lp-wb-part-title">Phần 1-2 · Câu 1-10 — Nghe và điền vào chỗ trống</div>' +
        dictationHtml +
      '</div>' +
      '<div class="lp-wb-part">' +
        '<div class="lp-wb-part-title">Phần 3 · Câu 11-15 — Nghe hội thoại, chọn đáp án đúng</div>' +
        mcHtml +
      '</div>';

    $all('.lp-dict-reveal', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var num = btn.getAttribute('data-reveal-num');
        if (lpWorkbookScore.dictCorrect[num] !== undefined) return;
        var item = data.dictation.find(function (d) { return String(d.num) === num; });
        var allCorrect = true;
        item.lines.forEach(function (line, li) {
          var input = $('#lpDictInput-' + num + '-' + li, wrap);
          var val = (input.value || '').trim();
          var isLineCorrect = val === line.blank;
          if (!isLineCorrect) allCorrect = false;
          input.disabled = true;
          input.classList.add(isLineCorrect ? 'is-correct' : 'is-wrong');
        });
        lpWorkbookScore.dictCorrect[num] = allCorrect;
        $('[data-result-num="' + num + '"]', wrap).textContent = allCorrect ? '✓ Đúng' : '✗ Sai';
        $('[data-result-num="' + num + '"]', wrap).classList.add(allCorrect ? 'is-correct' : 'is-wrong');
        $('[data-answer-num="' + num + '"]', wrap).hidden = false;
        btn.disabled = true;
        pgbRecord('lpwq', parseInt(num, 10) - 1, allCorrect);
        lpWorkbookUpdateScore();
      });
    });

    $all('.lp-mc-opt', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var num = btn.getAttribute('data-mc-num');
        if (lpWorkbookScore.mcCorrect[num] !== undefined) return;
        var item = data.mc.find(function (m) { return String(m.num) === num; });
        var oi = parseInt(btn.getAttribute('data-oi'), 10);
        lpWorkbookScore.mcCorrect[num] = (oi === item.ans);
        $all('.lp-mc-opt[data-mc-num="' + num + '"]', wrap).forEach(function (b, i) {
          b.disabled = true;
          if (i === item.ans) b.classList.add('is-correct');
          else if (i === oi) b.classList.add('is-wrong');
        });
        var explainEl = $('[data-explain-num="' + num + '"]', wrap);
        explainEl.hidden = false;
        explainEl.textContent = '💡 ' + item.explain;
        pgbRecord('lpwq', parseInt(num, 10) - 1, oi === item.ans);
        lpWorkbookUpdateScore();
      });
    });
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
      var label = lpMode === 'hanzi' ? (opt.zh + ' <span class="py-inline">(' + opt.py + ')</span>') : opt.vn;
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
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = false;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
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

  /* ---------------- Game on tap (gop chung match/fill/sort/errfix/mc vao 1 man hinh) ---------------- */
  /* Giu nguyen du lieu va logic kiem tra tu lesson-engine.js (buildMatch/buildFill/buildSort/
     buildErrorFix/buildMC), chi doi giao dien sang theme do/trang cua trang chinh. */

  var GAME_TYPE_DEFS = {
    match: { label: 'Ghép từ / Nối câu', emoji: '🔗', color: 'purple', desc: 'Ghép các từ/cụm từ thành cặp đúng nghĩa' },
    fill: { label: 'Điền từ', emoji: '✏️', color: 'orange', desc: 'Điền từ còn thiếu vào chỗ trống' },
    sort: { label: 'Sắp xếp câu', emoji: '🧩', color: 'indigo', desc: 'Sắp xếp các từ thành câu đúng' },
    errfix: { label: 'Sửa lỗi sai', emoji: '🛠️', color: 'pink', desc: 'Tìm câu đúng để sửa lỗi sai thường gặp' },
    mc: { label: 'Trắc nghiệm', emoji: '🎯', color: 'teal', desc: 'Chọn đáp án đúng cho mỗi câu hỏi' }
  };

  var gpGameData = null;
  var gpMode = null;

  function showGamePractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = false;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
    $('#gpContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';

    gpMode = null;
    loadLessonGameData(lesson).then(function (data) {
      gpGameData = data;
      renderGameScreen();
    }).catch(function () {
      $('#gpContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được nội dung game của bài này.</p>';
    });

    $('#gamePractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderGameScreen() {
    if (gpMode === null) renderGamePicker();
    else renderGameByType(gpMode);
  }

  function renderGamePicker() {
    var wrap = $('#gpContent');
    var types = LEVEL_GAME_TYPES[currentHubLevelId] || [];
    wrap.innerHTML = '<div class="game-picker-grid">' + types.map(function (type) {
      var def = GAME_TYPE_DEFS[type];
      var count = (gpGameData && gpGameData[type] || []).length;
      return '<button type="button" class="game-picker-card"' + (count ? ' data-game-type="' + type + '"' : ' disabled') + '>' +
        '<div class="game-picker-icon" style="background:var(--color-' + def.color + '-50);color:var(--color-' + def.color + '-600)">' + def.emoji + '</div>' +
        '<div class="game-picker-title">' + def.label + '</div>' +
        '<div class="game-picker-desc">' + (count ? def.desc : 'Chưa có nội dung') + '</div>' +
      '</button>';
    }).join('') + '</div>';

    $all('.game-picker-card[data-game-type]', wrap).forEach(function (card) {
      card.addEventListener('click', function () {
        gpMode = card.getAttribute('data-game-type');
        renderGameScreen();
      });
    });
  }

  function renderGameByType(type) {
    var wrap = $('#gpContent');
    var def = GAME_TYPE_DEFS[type];
    var data = (gpGameData && gpGameData[type]) || [];
    wrap.innerHTML =
      '<button type="button" class="level-detail-back" id="gpBackToPicker">' +
        '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>' +
        'Chọn trò chơi khác' +
      '</button>' +
      '<div class="game-type-header"><span class="game-type-icon" style="background:var(--color-' + def.color + '-50);color:var(--color-' + def.color + '-600)">' + def.emoji + '</span><h2>' + def.label + '</h2></div>' +
      '<div id="gpGameArea"></div>';
    $('#gpBackToPicker').addEventListener('click', function () { gpMode = null; renderGameScreen(); });

    if (!data.length) {
      $('#gpGameArea').innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có nội dung.</p>';
      return;
    }

    if (type === 'match') renderGameMatch(data);
    else if (type === 'fill') renderGameFill(data);
    else if (type === 'sort') renderGameSort(data);
    else if (type === 'errfix') renderGameMcList(data, { wrongPrefix: true, gameKey: 'errfix' });
    else if (type === 'mc') renderGameMcList(data, { wrongPrefix: false, gameKey: 'mc' });
  }

  var gmSel = null;
  var gmDone = null;
  var gmOrder = [];

  function renderGameMatch(data) {
    gmSel = null;
    gmDone = new Set();
    gmOrder = shuffle(data.map(function (_, i) { return i; }));

    pgbInit('gmMatch', data.length);
    var wrap = $('#gpGameArea');
    wrap.innerHTML =
      pgbHtml('gmMatch', data.length) +
      '<p style="color:var(--color-gray-600);font-size:0.88rem;margin-bottom:var(--space-4);">Bấm 1 ô <b>bên trái</b> → bấm ô <b>bên phải</b> để ghép thành cặp đúng.</p>' +
      '<div class="mg-wrap">' +
        '<div class="mg-col"><div class="mg-col-label">TỪ 1</div><div id="mgLeft"></div></div>' +
        '<div class="mg-col"><div class="mg-col-label">TỪ 2</div><div id="mgRight"></div></div>' +
      '</div>' +
      '<div class="mg-fb" id="mgFb"></div>' +
      '<button type="button" class="btn btn-outline" id="mgReset" style="margin-top:var(--space-4);">Làm lại</button>';
    pgbPaint('gmMatch');

    var leftWrap = $('#mgLeft');
    var rightWrap = $('#mgRight');
    data.forEach(function (pair, i) {
      var item = document.createElement('button');
      item.type = 'button';
      item.className = 'mg-item';
      item.textContent = pair.left;
      item.setAttribute('data-li', i);
      item.addEventListener('click', function () { gmClickLeft(i); });
      leftWrap.appendChild(item);
    });
    gmOrder.forEach(function (ri) {
      var item = document.createElement('button');
      item.type = 'button';
      item.className = 'mg-item';
      item.textContent = data[ri].right;
      item.setAttribute('data-ri', ri);
      item.addEventListener('click', function () { gmClickRight(ri, data); });
      rightWrap.appendChild(item);
    });

    $('#mgReset').addEventListener('click', function () { renderGameMatch(data); });
  }

  function gmClickLeft(i) {
    if (gmDone.has('L' + i)) return;
    $all('.mg-item[data-li]').forEach(function (el) { el.classList.remove('is-sel'); });
    gmSel = i;
    $('.mg-item[data-li="' + i + '"]').classList.add('is-sel');
    $('#mgFb').textContent = '';
  }

  function gmClickRight(ri, data) {
    var fb = $('#mgFb');
    if (gmSel === null) {
      fb.innerHTML = '<span style="color:var(--color-gold-500);">← Chọn vế trái trước</span>';
      return;
    }
    if (gmDone.has('R' + ri)) return;
    var isCorrect = gmSel === ri;
    var leftEl = $('.mg-item[data-li="' + gmSel + '"]');
    var rightEl = $('.mg-item[data-ri="' + ri + '"]');
    if (isCorrect) {
      leftEl.classList.remove('is-sel');
      leftEl.classList.add('is-correct');
      rightEl.classList.add('is-correct');
      gmDone.add('L' + gmSel);
      gmDone.add('R' + ri);
      pgbRecord('gmMatch', gmSel, true);
      fb.innerHTML = '<span style="color:var(--color-green-600);">✓ Đúng rồi!</span>';
      if (gmDone.size === data.length * 2) {
        recordGameScore(currentHubLesson, 'match', data.length, data.length);
        setTimeout(function () { fb.innerHTML = '<span style="color:var(--color-red-600);font-weight:700;">🎉 Hoàn thành! Xuất sắc!</span>'; }, 300);
      }
    } else {
      leftEl.classList.remove('is-sel');
      rightEl.classList.add('mg-shake');
      fb.innerHTML = '<span style="color:var(--color-red-600);">✗ Chưa đúng, thử lại!</span>';
      setTimeout(function () { rightEl.classList.remove('mg-shake'); }, 350);
    }
    gmSel = null;
  }

  function renderGameFill(data) {
    pgbInit('gmFill', data.length);
    var wrap = $('#gpGameArea');
    wrap.innerHTML =
      pgbHtml('gmFill', data.length) +
      data.map(function (q, i) {
      return '<div class="sp-card fg-card" id="fgCard' + i + '">' +
        '<div class="fg-text hanzi"><span class="fg-num">' + (i + 1) + '</span>' + q.pre + '<input type="text" class="fg-input" id="fgInput' + i + '" placeholder="___">' + q.post + '</div>' +
        (q.hint ? '<div class="fg-hint">' + q.hint + '</div>' : '') +
        '<div class="fg-fb" id="fgFb' + i + '"></div>' +
      '</div>';
    }).join('') +
      '<div class="fg-actions">' +
        '<button type="button" class="btn btn-primary" id="fgCheck">Kiểm tra đáp án</button>' +
        '<button type="button" class="btn btn-outline" id="fgReset">Làm lại</button>' +
      '</div>' +
      '<div class="fg-score" id="fgScore" hidden></div>';
    pgbPaint('gmFill');

    $('#fgCheck').addEventListener('click', function () {
      var ok = 0;
      data.forEach(function (q, i) {
        var input = $('#fgInput' + i);
        var card = $('#fgCard' + i);
        var fb = $('#fgFb' + i);
        var v = input.value.trim().replace(/\s+/g, '');
        var a = q.ans.replace(/\s+/g, '');
        var correct = v === a;
        card.classList.remove('is-correct', 'is-wrong');
        card.classList.add(correct ? 'is-correct' : 'is-wrong');
        input.classList.remove('is-correct', 'is-wrong');
        input.classList.add(correct ? 'is-correct' : 'is-wrong');
        fb.textContent = correct ? '✓ Đúng rồi!' : '✗ Đáp án: "' + q.ans + '"' + (q.exp ? ' — ' + q.exp : '');
        fb.className = 'fg-fb ' + (correct ? 'is-correct' : 'is-wrong');
        pgbRecord('gmFill', i, correct);
        if (correct) ok++;
      });
      recordGameScore(currentHubLesson, 'fill', ok, data.length);
      var scoreEl = $('#fgScore');
      scoreEl.hidden = false;
      var pct = Math.round(ok / data.length * 100);
      scoreEl.textContent = ok + '/' + data.length + ' — ' + (pct === 100 ? '🎉 Hoàn hảo!' : pct >= 70 ? '👍 Làm tốt!' : '💪 Thử lại nhé!');
    });

    $('#fgReset').addEventListener('click', function () { renderGameFill(data); });
  }

  var gsState = [];

  function renderGameSort(data) {
    gsState = data.map(function (s) {
      return { placed: [], words: shuffle(s.words.slice()) };
    });

    pgbInit('gmSort', data.length);
    var wrap = $('#gpGameArea');
    wrap.innerHTML =
      pgbHtml('gmSort', data.length) +
      data.map(function (s, i) {
      return '<div class="sp-card sg-card" id="sgCard' + i + '">' +
        '<button type="button" class="vp-quiz-play-btn" data-speak="' + (s.audio || s.ans).replace(/"/g, '&quot;') + '">🔊 Nghe câu cần sắp xếp</button>' +
        '<div class="sg-bank" id="sgBank' + i + '"></div>' +
        '<div class="sg-answer" id="sgAnswer' + i + '"></div>' +
        '<div class="sg-fb" id="sgFb' + i + '"></div>' +
      '</div>';
    }).join('') +
      '<div class="fg-actions">' +
        '<button type="button" class="btn btn-primary" id="sgCheck">Kiểm tra đáp án</button>' +
        '<button type="button" class="btn btn-outline" id="sgReset">Làm lại</button>' +
      '</div>' +
      '<div class="fg-score" id="sgScore" hidden></div>';
    pgbPaint('gmSort');

    $all('[data-speak]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-speak')); });
    });

    data.forEach(function (s, i) {
      renderSortBank(i);
      renderSortAnswer(i);
    });

    $('#sgCheck').addEventListener('click', function () {
      var ok = 0;
      data.forEach(function (s, i) {
        var placed = gsState[i].placed.map(function (p) { return p.word; }).join('');
        var correct = placed === s.ans;
        var card = $('#sgCard' + i);
        var fb = $('#sgFb' + i);
        card.classList.remove('is-correct', 'is-wrong');
        card.classList.add(correct ? 'is-correct' : 'is-wrong');
        fb.textContent = correct ? '✓ Đúng!' : '✗ Đáp án: "' + s.ans + '"';
        fb.className = 'sg-fb ' + (correct ? 'is-correct' : 'is-wrong');
        pgbRecord('gmSort', i, correct);
        if (correct) ok++;
      });
      recordGameScore(currentHubLesson, 'sort', ok, data.length);
      var scoreEl = $('#sgScore');
      scoreEl.hidden = false;
      var pct = Math.round(ok / data.length * 100);
      scoreEl.textContent = ok + '/' + data.length + ' — ' + (pct === 100 ? '🎉 Xuất sắc!' : pct >= 60 ? '👍 Làm tốt!' : '💪 Xem lại và thử lại!');
    });

    $('#sgReset').addEventListener('click', function () { renderGameSort(data); });
  }

  function renderSortBank(i) {
    var bankEl = $('#sgBank' + i);
    var st = gsState[i];
    bankEl.innerHTML = st.words.map(function (w, wi) {
      var isPunc = /^[。！？，、；：]$/.test(w);
      var used = st.placed.some(function (p) { return p.wi === wi; });
      return '<span class="sg-chip' + (isPunc ? ' is-punc' : '') + (used ? ' is-used' : '') + '" data-wi="' + wi + '">' + w + '</span>';
    }).join('');
    $all('.sg-chip', bankEl).forEach(function (chip) {
      chip.addEventListener('click', function () {
        if (chip.classList.contains('is-used')) return;
        var wi = parseInt(chip.getAttribute('data-wi'), 10);
        st.placed.push({ wi: wi, word: st.words[wi] });
        renderSortBank(i);
        renderSortAnswer(i);
      });
    });
  }

  function renderSortAnswer(i) {
    var answerEl = $('#sgAnswer' + i);
    var st = gsState[i];
    answerEl.innerHTML = st.placed.map(function (p) {
      var isPunc = /^[。！？，、；：]$/.test(p.word);
      return '<span class="sg-placed' + (isPunc ? ' is-punc' : '') + '" data-wi="' + p.wi + '">' + p.word + '</span>';
    }).join('');
    $all('.sg-placed', answerEl).forEach(function (chip) {
      chip.addEventListener('click', function () {
        var wi = parseInt(chip.getAttribute('data-wi'), 10);
        st.placed = st.placed.filter(function (p) { return p.wi !== wi; });
        renderSortBank(i);
        renderSortAnswer(i);
      });
    });
    $('#sgFb' + i).className = 'sg-fb';
    $('#sgFb' + i).textContent = '';
    $('#sgCard' + i).classList.remove('is-correct', 'is-wrong');
  }

  function renderGameMcList(data, opts) {
    var pgbId = 'gm-' + (opts.gameKey || 'mc');
    pgbInit(pgbId, data.length);
    var wrap = $('#gpGameArea');
    wrap.innerHTML =
      pgbHtml(pgbId, data.length) +
      data.map(function (q, i) {
      var promptHtml = opts.wrongPrefix
        ? '❌ ' + q.wrong + '<div class="mc-sub">👆 Câu này sai — chọn câu SỬA ĐÚNG bên dưới:</div>'
        : q.q;
      var optsHtml = q.opts.map(function (o, j) {
        return '<button type="button" class="vp-option-btn" data-qi="' + i + '" data-oi="' + j + '">' + o + '</button>';
      }).join('');
      return '<div class="sp-card mc-card" id="mcCard' + i + '">' +
        '<div class="mc-prompt hanzi"><span class="fg-num">' + (i + 1) + '</span>' + promptHtml + '</div>' +
        '<div class="vp-quiz-options mc-opts">' + optsHtml + '</div>' +
        '<div class="mc-fb" id="mcFb' + i + '"></div>' +
      '</div>';
    }).join('') + '<div class="fg-score" id="mcScore" hidden></div>';
    pgbPaint(pgbId);

    var answered = {};

    function updateScore() {
      var done = Object.keys(answered).length;
      if (!done) return;
      var ok = 0;
      Object.keys(answered).forEach(function (k) { if (answered[k]) ok++; });
      var scoreEl = $('#mcScore');
      scoreEl.hidden = false;
      scoreEl.textContent = 'Đã trả lời ' + done + '/' + data.length + ' câu — Đúng ' + ok + '/' + done;
      recordGameScore(currentHubLesson, opts.gameKey || 'mc', ok, data.length);
    }

    $all('.vp-option-btn', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var qi = parseInt(btn.getAttribute('data-qi'), 10);
        var oi = parseInt(btn.getAttribute('data-oi'), 10);
        if (answered.hasOwnProperty(qi)) return;
        var q = data[qi];
        var correct = oi === q.ans;
        answered[qi] = correct;
        pgbRecord(pgbId, qi, correct);
        $all('.vp-option-btn[data-qi="' + qi + '"]', wrap).forEach(function (b, j) {
          b.disabled = true;
          if (j === q.ans) b.classList.add('is-correct');
          else if (j === oi && !correct) b.classList.add('is-wrong');
        });
        var fb = $('#mcFb' + qi);
        fb.className = 'mc-fb ' + (correct ? 'is-correct' : 'is-wrong');
        fb.textContent = (correct ? '✓ Đúng rồi!' : '✗ Đáp án: "' + q.opts[q.ans] + '"') + (q.exp ? ' — ' + q.exp : '');
        updateScore();
      });
    });
  }

  /* ---------------- Translate practice (Luyen dich: Viet<->Trung, tu kiem tra) ---------------- */

  var tpDirection = 'vi2zh';
  var tpDataSets = { vi2zh: [], zh2vi: [] };
  var tpQuiz = null;

  function tpActiveData() { return tpDataSets[tpDirection] || []; }

  function showTranslatePractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = false;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = true;
    $('#tpContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';

    tpDirection = 'vi2zh';
    $all('.tp-dir-btn').forEach(function (btn) { btn.classList.toggle('active', btn.getAttribute('data-tp-dir') === 'vi2zh'); });

    loadLessonTranslate(lesson).then(function (data) {
      tpDataSets = data;
      tpQuiz = null;
      renderTranslateContent();
    }).catch(function () {
      $('#tpContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được nội dung luyện dịch của bài này.</p>';
    });

    $('#translatePractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderTranslateContent() {
    var wrap = $('#tpContent');
    var tpData = tpActiveData();
    if (!tpData.length) {
      wrap.innerHTML = '<p style="color:var(--color-gray-500);">Bài học này chưa có bài luyện dịch cho chiều này.</p>';
      return;
    }
    if (!tpQuiz) { tpQuiz = { pos: 0 }; pgbInit('tpq', tpData.length); }

    if (tpQuiz.pos >= tpData.length) {
      wrap.innerHTML =
        '<div class="vp-quiz-done"><strong>' + tpData.length + '/' + tpData.length + '</strong>' +
        '<p style="color:var(--color-gray-600);margin-bottom:var(--space-5);">Bạn đã hoàn thành lượt luyện dịch này.</p>' +
        '<button type="button" class="btn btn-primary" id="tpRestart">Luyện lại</button></div>';
      $('#tpRestart').addEventListener('click', function () { tpQuiz = null; renderTranslateContent(); });
      return;
    }

    var total = tpData.length;
    var item = tpData[tpQuiz.pos];

    var promptHtml = tpDirection === 'vi2zh'
      ? '<div class="tp-prompt-vi">“' + item.vi + '”</div>'
      : '<div class="tp-prompt-zh"><span class="hanzi">' + item.zh + '</span><button type="button" class="vp-speak-btn" data-speak="' + item.zh.replace(/"/g, '&quot;') + '">🔊</button></div>' +
        '<div class="tp-prompt-py">' + item.py + '</div>';

    wrap.innerHTML =
      pgbHtml('tpq', total) +
      '<div class="vp-quiz-counter">Câu ' + (tpQuiz.pos + 1) + '/' + total + '</div>' +
      '<div class="vp-quiz-card tp-card">' +
        promptHtml +
        '<textarea class="tp-input" id="tpInput" placeholder="' + (tpDirection === 'vi2zh' ? 'Nhập bản dịch tiếng Trung...' : 'Nhập bản dịch tiếng Việt...') + '"></textarea>' +
        '<button type="button" class="tp-reveal-btn" id="tpReveal">Xem đáp án tham khảo</button>' +
        '<div class="tp-answer" id="tpAnswer" hidden></div>' +
      '</div>';
    pgbPaint('tpq');

    $all('[data-speak]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-speak')); });
    });
    if (tpDirection === 'zh2vi') vpSpeak(item.zh);

    $('#tpReveal').addEventListener('click', function () {
      var answerEl = $('#tpAnswer');
      answerEl.hidden = false;
      if (tpDirection === 'vi2zh') {
        answerEl.innerHTML =
          '<div class="tp-answer-zh hanzi">' + item.zh + ' <button type="button" class="vp-speak-btn" data-speak="' + item.zh.replace(/"/g, '&quot;') + '">🔊</button></div>' +
          '<div class="tp-answer-py">' + item.py + '</div>';
        vpSpeak(item.zh);
      } else {
        answerEl.innerHTML = '<div class="tp-answer-vi">' + item.vi + '</div>';
      }
      $all('[data-speak]', answerEl).forEach(function (btn) {
        btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-speak')); });
      });
      $('#tpReveal').style.display = 'none';

      var selfCheck = document.createElement('div');
      selfCheck.className = 'tp-self-check';
      selfCheck.innerHTML =
        '<div class="tp-self-check-label">Bạn dịch đúng không?</div>' +
        '<button type="button" class="tp-self-btn tp-self-yes">✅ Mình dịch đúng</button>' +
        '<button type="button" class="tp-self-btn tp-self-no">❌ Mình dịch chưa đúng</button>';
      answerEl.appendChild(selfCheck);

      function goNext() {
        var nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'btn btn-primary tp-next-btn';
        nextBtn.textContent = (tpQuiz.pos + 1 < total) ? 'Câu tiếp theo →' : 'Hoàn thành';
        nextBtn.addEventListener('click', function () {
          tpQuiz.pos++;
          renderTranslateContent();
        });
        answerEl.appendChild(nextBtn);
      }

      $('.tp-self-yes', selfCheck).addEventListener('click', function () {
        pgbRecord('tpq', tpQuiz.pos, true);
        selfCheck.remove();
        goNext();
      });
      $('.tp-self-no', selfCheck).addEventListener('click', function () {
        pgbRecord('tpq', tpQuiz.pos, false);
        selfCheck.remove();
        goNext();
      });
    });
  }

  /* ---------------- Results (Ket qua cuoi bai) — tong hop diem THAT tu cac phan da lam ---------------- */

  var RESULT_SECTION_DEFS = [
    { key: 'vocab', label: 'Từ vựng', emoji: '📖', color: 'red' },
    { key: 'grammar', label: 'Ngữ pháp', emoji: '🎓', color: 'blue' },
    { key: 'game', label: 'Game ôn tập', emoji: '🎮', color: 'indigo' },
    { key: 'dialog', label: 'Hội thoại · Shadowing', emoji: '🗣️', color: 'green' }
  ];

  function showResultsPractice(levelId, lesson) {
    currentHubLevelId = levelId;
    currentHubLesson = lesson;
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = false;
    $('#leaderboard').hidden = true;

    renderResultsContent(lesson);
    $('#resultsPractice').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderResultsContent(lesson) {
    var scores = getLessonScores(lesson);
    var wrap = $('#rpContent');

    var sectionResults = RESULT_SECTION_DEFS.map(function (def) {
      var raw = scores[def.key];
      if (!raw) return null;
      if (def.key === 'game') {
        var correct = 0, total = 0;
        Object.keys(raw).forEach(function (k) { correct += raw[k].correct; total += raw[k].total; });
        if (!total) return null;
        return { def: def, scored: true, correct: correct, total: total, pct: Math.round(correct / total * 100) };
      }
      if (raw.done) return { def: def, scored: false, done: true };
      if (typeof raw.total === 'number' && raw.total > 0) {
        return { def: def, scored: true, correct: raw.correct, total: raw.total, pct: Math.round(raw.correct / raw.total * 100) };
      }
      return null;
    }).filter(Boolean);

    if (!sectionResults.length) {
      wrap.innerHTML = '<p style="color:var(--color-gray-500);">Bạn chưa hoàn thành phần nào của bài học này. Hãy làm Từ vựng, Ngữ pháp, Game ôn tập hoặc Hội thoại trước, rồi quay lại đây xem kết quả nhé!</p>';
      return;
    }

    var overallSum = 0;
    sectionResults.forEach(function (s) { overallSum += s.scored ? s.pct : 100; });
    var overallPct = Math.round(overallSum / sectionResults.length);

    var message = overallPct >= 90 ? 'Xuất sắc! Bạn đã nắm chắc bài học này.' :
      overallPct >= 70 ? 'Khá tốt! Ôn thêm một chút nữa nhé.' :
      'Cần luyện tập thêm để nắm chắc bài học này.';
    var ringColor = overallPct >= 90 ? 'var(--color-green-600)' : overallPct >= 70 ? 'var(--color-gold-500)' : 'var(--color-red-600)';

    var circumference = 2 * Math.PI * 52;
    var offset = circumference * (1 - overallPct / 100);

    var rowsHtml = sectionResults.map(function (s) {
      if (s.scored) {
        return '<div class="rp-row">' +
          '<span class="rp-row-icon is-' + s.def.color + '">' + s.def.emoji + '</span>' +
          '<span class="rp-row-label">' + s.def.label + '</span>' +
          '<div class="rp-row-bar"><div class="rp-row-bar-fill is-' + s.def.color + '" style="width:' + s.pct + '%"></div></div>' +
          '<span class="rp-row-pct">' + s.pct + '%</span>' +
        '</div>';
      }
      return '<div class="rp-row">' +
        '<span class="rp-row-icon is-' + s.def.color + '">' + s.def.emoji + '</span>' +
        '<span class="rp-row-label">' + s.def.label + '</span>' +
        '<span class="rp-row-done">✓ Đã hoàn thành</span>' +
      '</div>';
    }).join('');

    var vocabResult = sectionResults.filter(function (s) { return s.def.key === 'vocab' && s.scored; })[0];
    var grammarResult = sectionResults.filter(function (s) { return s.def.key === 'grammar' && s.scored; })[0];
    var wordsToReview = vocabResult ? (vocabResult.total - vocabResult.correct) : null;
    var sentencesToReview = grammarResult ? (grammarResult.total - grammarResult.correct) : null;

    var statsHtml = '';
    if (wordsToReview !== null || sentencesToReview !== null) {
      statsHtml = '<div class="rp-stats">' +
        (wordsToReview !== null ? '<div class="rp-stat"><strong>' + wordsToReview + '</strong><span>Từ cần ôn lại</span></div>' : '') +
        (sentencesToReview !== null ? '<div class="rp-stat"><strong>' + sentencesToReview + '</strong><span>Câu cần ôn lại</span></div>' : '') +
      '</div>';
    }

    wrap.innerHTML =
      '<div class="rp-ring-card">' +
        '<svg viewBox="0 0 120 120" class="rp-ring">' +
          '<circle cx="60" cy="60" r="52" class="rp-ring-track"></circle>' +
          '<circle cx="60" cy="60" r="52" class="rp-ring-fill" style="stroke:' + ringColor + ';stroke-dasharray:' + circumference + ';stroke-dashoffset:' + offset + '"></circle>' +
        '</svg>' +
        '<div class="rp-ring-label">' + overallPct + '%</div>' +
        '<p class="rp-ring-msg">' + message + '</p>' +
      '</div>' +
      '<div class="rp-breakdown">' +
        '<h3>Chi tiết theo từng phần</h3>' +
        rowsHtml +
      '</div>' +
      statsHtml +
      '<button type="button" class="btn btn-primary rp-cta" id="rpGoReview">↻ Đi tới Ôn tập</button>';

    $('#rpGoReview').addEventListener('click', showDashboard);
  }

  /* ---------------- Leaderboard (real ranking across registered students) ---------------- */

  function showLeaderboard() {
    $('#home').hidden = true;
    $('#levelDetail').hidden = true;
    $('#lessonHub').hidden = true;
    $('#warmupPractice').hidden = true;
    $('#workbookPractice').hidden = true;
    $('#vocabPractice').hidden = true;
    $('#flashcardPractice').hidden = true;
    $('#grammarPractice').hidden = true;
    $('#dialoguePractice').hidden = true;
    $('#listenPractice').hidden = true;
    $('#speakPractice').hidden = true;
    $('#gamePractice').hidden = true;
    $('#translatePractice').hidden = true;
    $('#resultsPractice').hidden = true;
    $('#leaderboard').hidden = false;

    var content = $('#leaderboardContent');
    content.innerHTML = '<p style="color:var(--color-gray-500);">Đang tải bảng xếp hạng...</p>';

    fetch('/api/leaderboard')
      .then(function (r) { return r.json(); })
      .then(function (data) { renderLeaderboard(data.leaderboard || []); })
      .catch(function () {
        content.innerHTML = '<p style="color:var(--color-gray-500);">Không tải được bảng xếp hạng, thử lại sau.</p>';
      });

    $('#leaderboard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderLeaderboard(rows) {
    var content = $('#leaderboardContent');
    var auth = readJSON(STORAGE_KEYS.auth, null);
    var myEmail = auth && auth.user ? auth.user.email : null;

    if (!rows.length) {
      content.innerHTML =
        '<div class="lb-empty">' +
          '<p>Chưa có ai trên bảng xếp hạng.</p>' +
          '<p style="color:var(--color-gray-500);font-size:0.9rem;">Đăng ký tài khoản và hoàn thành bài tập để trở thành người đầu tiên!</p>' +
        '</div>';
      return;
    }

    content.innerHTML =
      '<div class="lb-list">' +
      rows.map(function (row) {
        var isMe = myEmail && row.name && auth.user.name === row.name && auth.user.level === row.level;
        var pct = row.totalQuestions ? Math.round(row.totalCorrect / row.totalQuestions * 100) : 0;
        return '<div class="lb-row' + (isMe ? ' is-me' : '') + '">' +
          '<span class="lb-rank">' + medalFor(row.rank) + '</span>' +
          '<span class="lb-name">' + row.name + (isMe ? ' <em>(bạn)</em>' : '') + '</span>' +
          '<span class="lb-level">' + (row.level || '').toUpperCase() + '</span>' +
          '<span class="lb-streak">🔥 ' + row.streak + '</span>' +
          '<span class="lb-score">' + row.totalCorrect + '/' + row.totalQuestions + ' (' + pct + '%)</span>' +
        '</div>';
      }).join('') +
      '</div>';
  }

  /* ---------------- Bang xep hang "hom nay" tren trang chu ---------------- */

  function medalFor(rank) {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return '#' + rank;
  }

  function renderTodayLeaderboard() {
    var content = $('#todayLbContent');
    if (!content) return;
    fetch('/api/leaderboard/today')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var rows = data.leaderboard || [];
        var auth = readJSON(STORAGE_KEYS.auth, null);
        if (!rows.length) {
          content.innerHTML = '<p class="dash-today-lb-empty">Chưa có ai học hôm nay — hãy là người đầu tiên!</p>';
          return;
        }
        content.innerHTML = '<div class="lb-list">' +
          rows.map(function (row) {
            var isMe = auth && auth.user && auth.user.name === row.name && auth.user.level === row.level;
            var pct = row.totalQuestions ? Math.round(row.totalCorrect / row.totalQuestions * 100) : 0;
            return '<div class="lb-row' + (isMe ? ' is-me' : '') + '">' +
              '<span class="lb-rank">' + medalFor(row.rank) + '</span>' +
              '<span class="lb-name">' + row.name + (isMe ? ' <em>(bạn)</em>' : '') + '</span>' +
              '<span class="lb-level">' + (row.level || '').toUpperCase() + '</span>' +
              '<span class="lb-streak">🔥 ' + row.streak + '</span>' +
              '<span class="lb-score">' + row.totalCorrect + '/' + row.totalQuestions + ' (' + pct + '%)</span>' +
            '</div>';
          }).join('') +
          '</div>';
      })
      .catch(function () {
        content.innerHTML = '<p class="dash-today-lb-empty">Không tải được bảng xếp hạng, thử lại sau.</p>';
      });
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

  var STREAK_MILESTONES = [3, 7, 14, 30, 60, 100, 200, 365];

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

    var reached = null;
    var next = null;
    STREAK_MILESTONES.forEach(function (m) {
      if (streak >= m) reached = m;
      if (next === null && streak < m) next = m;
    });
    var badgeEl = $('#streakBadge');
    if (reached) {
      badgeEl.innerHTML = '<span class="streak-badge-pill">🏅 Đã đạt mốc ' + reached + ' ngày!</span>' +
        (next ? '<span class="streak-badge-next">Còn ' + (next - streak) + ' ngày nữa để đạt mốc ' + next + ' ngày</span>' : '');
    } else if (next) {
      badgeEl.innerHTML = '<span class="streak-badge-next">Học ' + next + ' ngày liên tiếp để nhận huy hiệu đầu tiên!</span>';
    } else {
      badgeEl.innerHTML = '';
    }
  }

  /* ---------------- Stat tiles (real progress recorded from lesson pages) ---------------- */

  var STAT_TILE_DEFS = [
    { key: 'levels', label: 'Cấp độ', icon: 'is-red', svg: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/>' },
    { key: 'lessons', label: 'Bài học', icon: 'is-gold', svg: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
    { key: 'vocab', label: 'Từ vựng', icon: 'is-green', svg: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>' },
    { key: 'examples', label: 'Câu ví dụ', icon: 'is-blue', svg: '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' }
  ];

  // Tong noi dung THAT cua toan bo nen tang (khong phai so bai nguoi dung da xem) —
  // tinh truc tiep tu du lieu that: HSK1 15 bai (164 tu, 182 vi du) + HSK2 15 bai
  // (172 tu, 516 vi du) + YCT 11 bai (100 tu, 101 vi du). Cap nhat lai neu them noi dung.
  var PLATFORM_TOTALS = { levels: 5, lessons: 48, vocab: 572, examples: 1003 };

  function computeProgressStats() {
    return PLATFORM_TOTALS;
  }

  /* ---------------- Global pinyin toggle (persists across every screen) ---------------- */

  function initPinyinToggle() {
    var btn = $('#pinyinToggle');
    var stored = readJSON(STORAGE_KEYS.pinyinVisible, true);
    var visible = stored !== false;

    function apply() {
      document.body.classList.toggle('pinyin-hidden', !visible);
      btn.setAttribute('aria-pressed', String(visible));
    }
    apply();

    btn.addEventListener('click', function () {
      visible = !visible;
      writeJSON(STORAGE_KEYS.pinyinVisible, visible);
      apply();
    });
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

  /* ---------------- Auth (tai khoan that, phien luu trong localStorage) ---------------- */

  // Nhac dang ky/dang nhap ngay tren trang chu: hoc sinh chua tung dang
  // nhap tren thiet bi nay (hoac phien da het han) se thay banner moi
  // ho dang ky/dang nhap; da dang nhap hop le thi banner tu an, khong
  // lam phien.
  function renderAuthBanner() {
    var banner = $('#authBanner');
    if (!banner) return;
    var auth = readJSON(STORAGE_KEYS.auth, null);
    banner.hidden = !!auth;
  }

  function renderUserChip() {
    var auth = readJSON(STORAGE_KEYS.auth, null);
    var name = auth && auth.user ? (auth.user.name || auth.user.email) : 'Khách';
    $('#userName').textContent = name;
    $('#userAvatar').textContent = name.trim().charAt(0).toUpperCase();
  }

  function initAuth() {
    var overlay = $('#authModal');
    var closeBtn = $('#authModalClose');
    var sidebarUserBtn = $('#sidebarUserBtn');
    var authBannerRegisterBtn = $('#authBannerRegister');
    var authBannerLoginBtn = $('#authBannerLogin');

    function openModal(tab) {
      overlay.classList.add('is-open');
      setAuthTab(tab || 'login');
      var firstInput = $('#' + tab + 'Panel') ? $('#' + tab + 'Panel input') : $('#loginPanel input');
      if (firstInput) setTimeout(function () { firstInput.focus(); }, 50);
    }
    function closeModal() {
      overlay.classList.remove('is-open');
    }

    if (authBannerRegisterBtn) authBannerRegisterBtn.addEventListener('click', function () { openModal('register'); });
    if (authBannerLoginBtn) authBannerLoginBtn.addEventListener('click', function () { openModal('login'); });

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
      if (tab === 'register') {
        $('#authModalTitle').textContent = 'Tạo tài khoản học sinh';
        $('#authModalSub').textContent = 'Đăng ký để lưu tiến độ học và chuỗi ngày học của bạn.';
      } else {
        $('#authModalTitle').textContent = 'Chào mừng trở lại';
        $('#authModalSub').textContent = 'Đăng nhập để tiếp tục hành trình học tiếng Trung của bạn.';
      }
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

    function setSession(token, user, progress) {
      writeJSON(STORAGE_KEYS.auth, { token: token, user: user });
      renderUserChip();
      renderAuthBanner();
      if (progress) mergeProgressFromServer(progress);
      syncProgressToServer();
    }

    function setFormError(form, message) {
      var errEl = form.querySelector('.form-error');
      if (!errEl) {
        errEl = document.createElement('p');
        errEl.className = 'form-error';
        form.insertBefore(errEl, form.querySelector('button[type="submit"]'));
      }
      errEl.textContent = message || '';
      errEl.hidden = !message;
    }

    $('#loginPanel').addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.target;
      var email = $('#loginEmail').value.trim();
      var password = $('#loginPassword').value;
      setFormError(form, '');
      fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password })
      }).then(function (r) { return r.json().then(function (data) { return { ok: r.ok, data: data }; }); })
        .then(function (res) {
          if (!res.ok) { setFormError(form, res.data.error || 'Đăng nhập thất bại.'); return; }
          setSession(res.data.token, res.data.user, res.data.progress);
          closeModal();
          showToast('Đăng nhập thành công! Chào mừng trở lại, ' + res.data.user.name + '.');
        })
        .catch(function () { setFormError(form, 'Không kết nối được máy chủ, thử lại sau.'); });
    });

    $('#registerPanel').addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.target;
      var name = $('#registerName').value.trim();
      var email = $('#registerEmail').value.trim();
      var password = $('#registerPassword').value;
      var level = $('#registerLevel').value;
      setFormError(form, '');
      fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, password: password, level: level })
      }).then(function (r) { return r.json().then(function (data) { return { ok: r.ok, data: data }; }); })
        .then(function (res) {
          if (!res.ok) { setFormError(form, res.data.error || 'Đăng ký thất bại.'); return; }
          setSession(res.data.token, res.data.user, res.data.progress);
          closeModal();
          showToast('Tạo tài khoản thành công! Chào mừng ' + res.data.user.name + '.');
        })
        .catch(function () { setFormError(form, 'Không kết nối được máy chủ, thử lại sau.'); });
    });

    sidebarUserBtn.addEventListener('click', function () {
      var auth = readJSON(STORAGE_KEYS.auth, null);
      if (auth) {
        if (!window.confirm('Đăng xuất khỏi tài khoản?')) return;
        if (auth.token) {
          fetch('/api/auth/logout', { method: 'POST', headers: { 'Authorization': 'Bearer ' + auth.token } }).catch(function () {});
        }
        localStorage.removeItem(STORAGE_KEYS.auth);
        renderUserChip();
        renderAuthBanner();
        showToast('Đã đăng xuất.');
      } else {
        openModal('login');
      }
    });

    renderUserChip();
    syncProgressToServer();

    var currentAuth = readJSON(STORAGE_KEYS.auth, null);
    if (!currentAuth) {
      var alreadyPrompted = false;
      try { alreadyPrompted = sessionStorage.getItem(STORAGE_KEYS.authPrompted) === '1'; } catch (e) {}
      if (!alreadyPrompted) {
        try { sessionStorage.setItem(STORAGE_KEYS.authPrompted, '1'); } catch (e) {}
        setTimeout(function () { openModal('register'); }, 600);
      }
    }
  }

  /* ---------------- Init ---------------- */

  function init() {
    $('#footerYear').textContent = new Date().getFullYear();

    initSidebar();
    renderLevelCards();
    renderLevelSubmenu();
    renderStreak();
    renderStatTiles();
    renderTodayLeaderboard();
    initAuth();
    renderAuthBanner();
    refreshProgressFromServer();
    initAnalytics();
    initPinyinToggle();

    $('#levelDetailBack').addEventListener('click', showDashboard);
    $('#lessonHubBack').addEventListener('click', function () {
      if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $('#wbBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $('#wpBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
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
    $('#gpBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $('#tpBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $('#rpBack').addEventListener('click', function () {
      if (currentHubLevelId && currentHubLesson) showLessonHub(currentHubLevelId, currentHubLesson);
      else if (currentLevelId) showLevelDetail(currentLevelId);
      else showDashboard();
    });
    $all('.tp-dir-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        tpDirection = btn.getAttribute('data-tp-dir');
        tpQuiz = null;
        $all('.tp-dir-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderTranslateContent();
      });
    });
    $all('a[href="#home"]').forEach(function (link) {
      link.addEventListener('click', showDashboard);
    });
    $('#navLeaderboard').addEventListener('click', function (e) {
      e.preventDefault();
      showLeaderboard();
    });
    $('#ctaStart').addEventListener('click', function () { selectLevel(practiceLevel); });
    $('#ctaStreak').addEventListener('click', function () { selectLevel(practiceLevel); });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
