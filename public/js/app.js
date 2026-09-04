(function () {
  'use strict';

  var STORAGE_KEYS = {
    visitedLessons: 'hyv_visited_lessons',
    studyDays: 'hyv_study_days',
    pinyinVisible: 'hyv_pinyin_visible',
    lessonScores: 'hyv_lesson_scores',
    auth: 'hyv_auth',
    visitorId: 'hyv_visitor_id',
    authPrompted: 'hyv_auth_prompted',
    reviewWrongWords: 'hyv_review_wrong_words'
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

  // Mot vai o trong Hub (vd "Luyen tap sach bai tap") ghi diem duoi 1 khoa
  // khac ten voi chinh tabId cua no — anh xa lai o day de biet tra cuu dau.
  var HUB_TAB_SCORE_KEY = { workbook: 'workbook-mocktest' };

  // Dung de hien dau "da lam" tren tung o trong Hub bai hoc, va tinh % tien
  // do tong the — doc lai dung du lieu diem da luu (hyv_lesson_scores), thay
  // vi 1 co "da hoc" nhi phan cho ca bai như truoc (khong bao gio cap nhat
  // khi hoc qua man hinh Hub, chi cap nhat khi mo trang bai hoc cu rieng).
  function isHubTileDone(lesson, tabId) {
    var scores = getLessonScores(lesson);
    if (tabId === 'game') {
      var gameRaw = scores.game;
      return !!(gameRaw && Object.keys(gameRaw).length);
    }
    var key = HUB_TAB_SCORE_KEY[tabId] || tabId;
    var raw = scores[key];
    if (!raw) return false;
    if (raw.done) return true;
    if (typeof raw.total === 'number' && raw.total > 0) return true;
    return false;
  }

  function lessonHasAnyProgress(lesson) {
    return Object.keys(getLessonScores(lesson)).length > 0;
  }

  // Gui tong diem THAT (tinh tu du lieu that da luu) len server de xep
  // hang — chi khi hoc sinh da dang nhap that (co token). Khong lam gi
  // neu chua dang nhap (diem van luu local binh thuong).
  // Nhieu su kien co the goi ham nay gan nhu cung luc (vd 1 cu click vua
  // qua markStudyDay vua qua rvSaveWrongWords) — debounce 400ms de gop
  // lai thanh 1 request DUY NHAT, luon doc du lieu localStorage MOI NHAT
  // tai thoi diem no thuc su chay, tranh 2 request ghi de nhau (lost update).
  var syncProgressTimer = null;
  function syncProgressToServer() {
    clearTimeout(syncProgressTimer);
    syncProgressTimer = setTimeout(doSyncProgressToServer, 400);
  }
  function doSyncProgressToServer() {
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
    var reviewWrongWords = readJSON(STORAGE_KEYS.reviewWrongWords, {});

    fetch('/api/scores/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + auth.token },
      body: JSON.stringify({
        totalCorrect: totalCorrect, totalQuestions: totalQuestions, streak: streak, lessonsDone: lessonsDone,
        studyDays: studyDays, lessonScores: allScores, reviewWrongWords: reviewWrongWords
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

    var localReviewWords = readJSON(STORAGE_KEYS.reviewWrongWords, {});
    var mergedReviewWords = {};
    Object.keys(localReviewWords).forEach(function (k) { mergedReviewWords[k] = localReviewWords[k]; });
    Object.keys(progress.reviewWrongWords || {}).forEach(function (k) { mergedReviewWords[k] = progress.reviewWrongWords[k]; });
    writeJSON(STORAGE_KEYS.reviewWrongWords, mergedReviewWords);

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

  // Ghi nhan "hom nay co vao hoc" ngay khi hoc sinh tuong tac voi bat ky
  // bai tap nao (khong can lam het ca bai) — dung cho "Chuoi ngay hoc".
  function markStudyDay() {
    var days = readJSON(STORAGE_KEYS.studyDays, []);
    var key = dateKey(new Date());
    if (days.indexOf(key) === -1) {
      days.push(key);
      writeJSON(STORAGE_KEYS.studyDays, days);
      syncProgressToServer();
    }
  }

  var PRACTICE_SECTION_IDS = ['warmupPractice', 'workbookPractice', 'vocabPractice', 'flashcardPractice',
    'grammarPractice', 'dialoguePractice', 'listenPractice', 'speakPractice', 'gamePractice', 'translatePractice',
    'reviewPractice'];

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

  var DASHBOARD_LEVEL_IDS = ['hsk1', 'hsk1v3', 'hsk2', 'hsk3', 'hsk4', 'hsk5', 'yct'];
  var LEVEL_COLOR = { hsk1: 'red', hsk1v3: 'blue', hsk2: 'green', hsk3: 'gold', hsk4: 'green', hsk5: 'gold', yct: 'blue' };
  var LEVEL_SHORT = { hsk1: 'HSK1', hsk1v3: 'HSK1·3.0', hsk2: 'HSK2', hsk3: 'HSK3', hsk4: 'HSK4', hsk5: 'HSK5', yct: 'YCT1' };
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

  var PRACTICE_LEVEL_LABEL = { hsk1: 'HSK 1', hsk1v3: 'HSK 1 (3.0 Mới)', hsk2: 'HSK 2', hsk3: 'HSK 3', hsk4: 'HSK 4', hsk5: 'HSK 5', yct: 'YCT 1' };

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
    $('#reviewPractice').hidden = true;
    renderStreak();
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
    $('#reviewPractice').hidden = true;
    $('#levelDetailTitle').textContent = PRACTICE_LEVEL_LABEL[id] || id.toUpperCase();
    renderLessonList(id);
    $('#levelDetail').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------------- Lesson list (opens the lesson hub instead of navigating away) ---------------- */

  // Cu 3 bai co 1 "the on tap tong hop" chen ngay sau bai thu 3 trong nhom
  // (vd sau Bai 3 -> on Bai 1-2-3; sau Bai 6 -> on Bai 4-5-6). Hien tai moi
  // co du lieu cho nhom dau tien (HSK3 Bai 1-3) de lam thu; cac nhom khac
  // se bo sung dan sau khi duyet giao dien nay.
  // Chia 1 cap do thanh cac nhom on tap moi 3 bai (nhom cuoi co the con 1-2
  // bai le neu tong so bai khong chia het cho 3) — dung chung cho moi cap do
  // thay vi liet ke tay tung nhom.
  function rvBuildGroups(totalLessons) {
    var groups = [];
    for (var start = 1; start <= totalLessons; start += 3) {
      var end = Math.min(start + 2, totalLessons);
      var lessons = [];
      for (var n = start; n <= end; n++) lessons.push(n);
      groups.push({ afterNumber: end, lessons: lessons });
    }
    return groups;
  }

  var REVIEW_GROUPS = {
    hsk3: rvBuildGroups(20),
    hsk1: rvBuildGroups(15),
    hsk2: rvBuildGroups(15),
    hsk1v3: rvBuildGroups(15)
  };

  function renderLessonList(id) {
    var wrap = $('#levelDetailList');
    if (!wrap) return;
    var lessons = (APP_DATA.lessons && APP_DATA.lessons[id]) || [];
    var visited = readJSON(STORAGE_KEYS.visitedLessons, {});
    var reviewGroups = REVIEW_GROUPS[id] || [];
    wrap.innerHTML = '';

    lessons.forEach(function (lesson) {
      var isDone = !!visited[lesson.fullPageUrl] || lessonHasAnyProgress(lesson);
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

      reviewGroups.forEach(function (group) {
        if (group.afterNumber !== lesson.number) return;
        var first = group.lessons[0], last = group.lessons[group.lessons.length - 1];
        var title = 'Ôn tập tổng hợp: Bài ' + first + ' – ' + last;
        var rcard = document.createElement('button');
        rcard.type = 'button';
        rcard.className = 'lesson-card-link rv-lesson-card';
        rcard.innerHTML =
          '<span class="lesson-card-num rv-lesson-num">🔄</span>' +
          '<div class="lesson-card-body">' +
            '<h3>' + title + '</h3>' +
            '<p class="lesson-card-topic">Trộn từ vựng ' + group.lessons.length + ' bài để kiểm tra lại toàn diện trước khi học tiếp.</p>' +
          '</div>' +
          '<span class="lesson-card-progress">Ôn tập</span>' +
          '<svg class="icon lesson-card-arrow" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
        rcard.addEventListener('click', function () {
          showReviewPractice(id, group.lessons, title);
        });
        wrap.appendChild(rcard);
      });
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
    $('#reviewPractice').hidden = true;
    $('#lessonHub').dataset.levelId = levelId;
    $('#lessonHubTitle').textContent = 'Bài ' + lesson.number + (lesson.titleHanzi ? ': ' + lesson.titleHanzi : '') + ' – ' + lesson.title;

    var tabIds = LEVEL_HUB_TABS[levelId] || [];
    var doneCount = tabIds.filter(function (t) { return isHubTileDone(lesson, t); }).length;
    var pct = tabIds.length ? Math.round((doneCount / tabIds.length) * 100) : 0;
    $('#hubProgressFill').style.width = pct + '%';
    $('#hubProgressPct').textContent = pct + '%';

    var grid = $('#hubTileGrid');
    grid.innerHTML = '';
    tabIds.forEach(function (tabId) {
      var def = HUB_TAB_DEFS[tabId];
      if (!def) return;
      var done = isHubTileDone(lesson, tabId);
      var tile = document.createElement('a');
      tile.className = 'hub-tile' + (done ? ' is-done' : '');
      tile.href = lesson.fullPageUrl + '#' + tabId;
      tile.innerHTML =
        '<div class="hub-tile-icon" style="background:var(--color-' + def.color + '-50);color:var(--color-' + def.color + '-600)">' + def.emoji + '</div>' +
        '<span class="hub-tile-label">' + def.label + '</span>' +
        (done ? '<span class="hub-tile-check">✓ Đã làm</span>' : '') +
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
    $('#reviewPractice').hidden = true;
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
    $('#reviewPractice').hidden = true;
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
    var m = lesson.fullPageUrl.match(/\/lessons\/(hsk1-|hsk1v3-|hsk2-|hsk3-)?bai-(\d+)\.html/);
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
    $('#reviewPractice').hidden = true;
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

  function pgbRecord(id, index, isCorrect, praiseThreshold) {
    var st = pgbState[id];
    if (!st) return;
    st.results[index] = isCorrect;
    if (isCorrect) st.streak++; else st.streak = 0;
    pgbPaint(id);
    var praiseEl = $('#' + id + '-praise');
    if (praiseEl) {
      if (st.streak >= (praiseThreshold || 3)) {
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

  /* ---------------- On tap tong hop (tron tu vung nhieu bai, moi 3 bai 1 luot on) ---------------- */

  var RV_ROUNDS = [
    { id: 1, label: 'Ôn từ vựng', desc: 'Xem lại toàn bộ từ vựng của các bài trước khi vào kiểm tra.' },
    { id: 2, label: 'Chọn đúng nghĩa', desc: 'Nhìn chữ Hán, chọn nghĩa tiếng Việt phù hợp.' },
    { id: 3, label: 'Nhớ Pinyin', desc: 'Không nhìn đáp án, nhận diện âm đọc có thanh điệu.' },
    { id: 4, label: 'Điền từ theo câu', desc: 'Dùng ngữ cảnh để chọn đúng từ còn thiếu.' },
    { id: 5, label: 'Kiểm tra tổng hợp', desc: 'Trộn nghĩa, Pinyin và câu ví dụ trong một lượt.' },
    { id: 6, label: 'Từ cần ôn lại', desc: 'Ôn lại các từ bạn đã trả lời sai hoặc chưa nắm chắc.' }
  ];

  var rvVocab = [];
  var rvQuiz = {};
  var rvRound = 2;
  // Tu da tra loi sai o bat ky vong nao — luu theo chu Han (w.zh) de con
  // ghi duoc vao localStorage, va nho lau dai giua cac lan hoc (khong mat
  // khi tat trinh duyet). rvGroupKey xac dinh "on tap nay la cua nhom bai nao".
  var rvWrongWords = new Set();
  var rvGroupKey = '';

  function rvMakeGroupKey(levelId, lessonNumbers) {
    return levelId + ':' + lessonNumbers.slice().sort(function (a, b) { return a - b; }).join(',');
  }

  function rvLoadWrongWords(groupKey) {
    var all = readJSON(STORAGE_KEYS.reviewWrongWords, {});
    return new Set(all[groupKey] || []);
  }

  function rvSaveWrongWords() {
    var all = readJSON(STORAGE_KEYS.reviewWrongWords, {});
    all[rvGroupKey] = Array.from(rvWrongWords);
    writeJSON(STORAGE_KEYS.reviewWrongWords, all);
    syncProgressToServer();
  }

  function loadReviewVocab(levelId, lessonNumbers) {
    var lessons = (APP_DATA.lessons && APP_DATA.lessons[levelId]) || [];
    var targets = lessonNumbers.map(function (n) {
      var found = null;
      lessons.forEach(function (l) { if (l.number === n) found = l; });
      return found;
    }).filter(Boolean);
    return Promise.all(targets.map(function (lesson) {
      return loadLessonVocab(lesson).then(function (vocab) {
        return vocab.map(function (w) {
          var copy = Object.assign({}, w);
          copy.__lessonNumber = lesson.number;
          return copy;
        });
      });
    })).then(function (arrays) {
      var all = [];
      arrays.forEach(function (arr) { all = all.concat(arr); });
      return shuffle(all);
    });
  }

  function rvPickDistractors(pool, exclude, count) {
    return shuffle(pool.filter(function (w) { return w !== exclude; })).slice(0, count);
  }

  // Tim 1 cau vi du that (exList) co chua nguyen van tu can hoi, roi cat
  // thanh pre/post de tao cau dien-tu-vao-cho-trong — khong bia cau moi.
  function rvClozeFor(word) {
    var list = word.exList || [];
    for (var i = 0; i < list.length; i++) {
      var ex = list[i];
      if (ex && ex.zh && ex.zh.indexOf(word.zh) !== -1) {
        var idx = ex.zh.indexOf(word.zh);
        return { pre: ex.zh.slice(0, idx), post: ex.zh.slice(idx + word.zh.length), vn: ex.vn };
      }
    }
    return null;
  }

  // Dong co dung chung cho ca 4 vong kiem tra (nghia / pinyin / dien-cau / tron):
  // moi vong chi khac nhau o cach lay "tu dung" tu 1 item va cach hien thi de bai.
  function rvQuizStep(pgbId, state, wordOf, promptHtmlOf, optionLabelOf, isZhOptionOf, onDone) {
    var wrap = $('#rvContent');
    var total = state.items.length;
    if (state.pos >= total) {
      wrap.innerHTML = '<div class="vp-quiz-done"><strong>' + state.score + '/' + total + '</strong>' +
        '<p style="color:var(--color-gray-600);margin-bottom:var(--space-5);">Bạn đã hoàn thành lượt ôn tập này.</p>' +
        '<button type="button" class="btn btn-primary" id="rvRetryBtn">Luyện lại</button></div>';
      $('#rvRetryBtn').addEventListener('click', onDone);
      return;
    }
    var item = state.items[state.pos];
    var word = wordOf(item);
    var distractors = rvPickDistractors(rvVocab, word, 3);
    var options = shuffle([word].concat(distractors));
    var isZh = isZhOptionOf(item);
    var optionsHtml = options.map(function (opt, i) {
      return '<button type="button" class="vp-option-btn' + (isZh ? ' hanzi' : '') + '" data-idx="' + i + '">' + optionLabelOf(item, opt) + '</button>';
    }).join('');
    wrap.innerHTML = pgbHtml(pgbId, total) +
      '<div class="vp-quiz-counter">Câu ' + (state.pos + 1) + '/' + total + '</div>' +
      '<div class="vp-quiz-card">' + promptHtmlOf(item) + '<div class="vp-quiz-options">' + optionsHtml + '</div></div>';
    pgbPaint(pgbId);
    $all('[data-speak]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-speak')); });
    });
    $all('.vp-option-btn', wrap).forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        var isCorrect = options[i] === word;
        $all('.vp-option-btn', wrap).forEach(function (b, j) {
          b.disabled = true;
          if (options[j] === word) b.classList.add('is-correct');
          else if (j === i) b.classList.add('is-wrong');
        });
        if (isCorrect) { state.score++; rvWrongWords.delete(word.zh); } else { rvWrongWords.add(word.zh); }
        rvSaveWrongWords();
        pgbRecord(pgbId, state.pos, isCorrect, 5);
        setTimeout(function () {
          state.pos++;
          rvQuizStep(pgbId, state, wordOf, promptHtmlOf, optionLabelOf, isZhOptionOf, onDone);
        }, 900);
      });
    });
  }

  function rvWordPromptHtml(zh, py) {
    return '<div class="vp-quiz-prompt"><div class="vp-quiz-prompt-zh hanzi">' + zh +
      '<button type="button" class="vp-speak-btn" data-speak="' + zh.replace(/"/g, '&quot;') + '">🔊</button></div>' +
      (py ? '<div class="vp-quiz-prompt-py">' + py + '</div>' : '') + '</div>';
  }

  function rvClozePromptHtml(cloze) {
    return '<div class="rv-cloze-prompt"><div class="rv-cloze-sentence hanzi">' + cloze.pre +
      '<span class="rv-cloze-blank">____</span>' + cloze.post + '</div>' +
      '<div class="rv-cloze-hint">' + cloze.vn + '</div></div>';
  }

  function rvRenderWordList() {
    var wrap = $('#rvContent');
    wrap.innerHTML = '<div class="vp-list-grid">' + rvVocab.map(function (w) {
      return '<div class="vp-word-card"><div class="vp-word-row">' +
        '<span class="vp-word-zh hanzi">' + w.zh + '</span>' +
        '<button type="button" class="vp-speak-btn" data-speak="' + w.zh.replace(/"/g, '&quot;') + '">🔊</button></div>' +
        '<div class="vp-quiz-prompt-py" style="margin-top:4px;">' + w.py + '</div>' +
        '<div style="margin-top:4px;">' + w.vn + '</div>' +
        '<span class="rv-word-badge">Bài ' + w.__lessonNumber + '</span>' +
        '</div>';
    }).join('') + '</div>';
    $all('[data-speak]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { vpSpeak(btn.getAttribute('data-speak')); });
    });
  }

  function rvRenderMeaningQuiz() {
    if (!rvQuiz.meaning) { rvQuiz.meaning = { items: shuffle(rvVocab), pos: 0, score: 0 }; pgbInit('rvqmeaning', rvQuiz.meaning.items.length); }
    rvQuizStep('rvqmeaning', rvQuiz.meaning,
      function (item) { return item; },
      function (item) { return rvWordPromptHtml(item.zh, item.py); },
      function (item, opt) { return opt.vn; },
      function () { return false; },
      function () { rvQuiz.meaning = null; rvRenderMeaningQuiz(); });
  }

  function rvRenderPinyinQuiz() {
    if (!rvQuiz.pinyin) { rvQuiz.pinyin = { items: shuffle(rvVocab), pos: 0, score: 0 }; pgbInit('rvqpinyin', rvQuiz.pinyin.items.length); }
    rvQuizStep('rvqpinyin', rvQuiz.pinyin,
      function (item) { return item; },
      function (item) { return rvWordPromptHtml(item.zh, null); },
      function (item, opt) { return opt.py; },
      function () { return false; },
      function () { rvQuiz.pinyin = null; rvRenderPinyinQuiz(); });
  }

  function rvRenderClozeQuiz() {
    if (!rvQuiz.cloze) {
      var items = rvVocab.map(function (w) { return { w: w, cloze: rvClozeFor(w) }; }).filter(function (x) { return x.cloze; });
      rvQuiz.cloze = { items: shuffle(items), pos: 0, score: 0 };
      pgbInit('rvqcloze', rvQuiz.cloze.items.length);
    }
    rvQuizStep('rvqcloze', rvQuiz.cloze,
      function (item) { return item.w; },
      function (item) { return rvClozePromptHtml(item.cloze); },
      function (item, opt) { return opt.zh; },
      function () { return true; },
      function () { rvQuiz.cloze = null; rvRenderClozeQuiz(); });
  }

  // Xay danh sach cau hoi "tron loai" (nghia / pinyin / dien-cau) tu 1 danh
  // sach tu bat ky — dung chung cho vong 5 (toan bo tu) va vong 6 (chi tu sai).
  function rvBuildTypedItems(words) {
    var types = ['meaning', 'pinyin', 'cloze'];
    return shuffle(words).map(function (w) {
      var cloze = rvClozeFor(w);
      var avail = cloze ? types : ['meaning', 'pinyin'];
      var type = avail[Math.floor(Math.random() * avail.length)];
      return { w: w, type: type, cloze: cloze };
    });
  }

  function rvTypedPromptHtml(item) {
    if (item.type === 'meaning') return rvWordPromptHtml(item.w.zh, item.w.py);
    if (item.type === 'pinyin') return rvWordPromptHtml(item.w.zh, null);
    return rvClozePromptHtml(item.cloze);
  }

  function rvTypedOptionLabel(item, opt) {
    if (item.type === 'meaning') return opt.vn;
    if (item.type === 'pinyin') return opt.py;
    return opt.zh;
  }

  function rvRenderMixedQuiz() {
    if (!rvQuiz.mix) {
      rvQuiz.mix = { items: rvBuildTypedItems(rvVocab), pos: 0, score: 0 };
      pgbInit('rvqmix', rvQuiz.mix.items.length);
    }
    rvQuizStep('rvqmix', rvQuiz.mix,
      function (item) { return item.w; },
      rvTypedPromptHtml,
      rvTypedOptionLabel,
      function (item) { return item.type === 'cloze'; },
      function () { rvQuiz.mix = null; rvRenderMixedQuiz(); });
  }

  // Vong "Tu can on lai": chi lay nhung tu da tra loi sai o bat ky vong nao
  // (kho song, cap nhat lien tuc — dung sai roi lai dung thi tu se tu bien
  // mat khoi danh sach nay). Xay lai tu dau moi khi vao vong, de luon phan
  // anh dung trang thai hien tai.
  function rvRenderWeakQuiz() {
    var wrap = $('#rvContent');
    var words = rvVocab.filter(function (w) { return rvWrongWords.has(w.zh); });
    if (!words.length) {
      wrap.innerHTML = '<div class="vp-quiz-done">' +
        '<p style="color:var(--color-gray-600);">🎉 Hiện chưa có từ nào cần ôn lại. Hãy làm các vòng khác — từ nào bạn trả lời sai sẽ tự động xuất hiện ở đây để ôn lại.</p></div>';
      return;
    }
    rvQuiz.weak = { items: rvBuildTypedItems(words), pos: 0, score: 0 };
    pgbInit('rvqweak', rvQuiz.weak.items.length);
    rvQuizStep('rvqweak', rvQuiz.weak,
      function (item) { return item.w; },
      rvTypedPromptHtml,
      rvTypedOptionLabel,
      function (item) { return item.type === 'cloze'; },
      function () { rvRenderWeakQuiz(); });
  }

  function renderRvRoundTabs() {
    var wrap = $('#rvRoundGrid');
    wrap.innerHTML = RV_ROUNDS.map(function (r) {
      var desc = r.id === 6 ? r.desc + ' (' + rvWrongWords.size + ' từ)' : r.desc;
      return '<button type="button" class="rv-round-card' + (rvRound === r.id ? ' active' : '') + '" data-round="' + r.id + '">' +
        '<span class="rv-round-tag">VÒNG ' + r.id + '</span>' +
        '<span class="rv-round-title">' + r.label + '</span>' +
        '<span class="rv-round-desc">' + desc + '</span>' +
        '</button>';
    }).join('');
    $all('.rv-round-card', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () { rvRenderRound(parseInt(btn.getAttribute('data-round'), 10)); });
    });
  }

  function rvRenderRound(id) {
    rvRound = id;
    renderRvRoundTabs();
    if (id === 1) rvRenderWordList();
    else if (id === 2) rvRenderMeaningQuiz();
    else if (id === 3) rvRenderPinyinQuiz();
    else if (id === 4) rvRenderClozeQuiz();
    else if (id === 5) rvRenderMixedQuiz();
    else rvRenderWeakQuiz();
  }

  function showReviewPractice(levelId, lessonNumbers, title, subtitle) {
    currentHubLevelId = levelId;
    currentHubLesson = null;
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
    $('#leaderboard').hidden = true;
    $('#reviewPractice').hidden = false;
    $('#rvTitle').textContent = title;
    $('#rvSubtitle').textContent = subtitle || 'Trộn từ vựng nhiều bài để kiểm tra lại toàn diện.';
    $('#rvRoundGrid').innerHTML = '';
    $('#rvContent').innerHTML = '<p style="color:var(--color-gray-500);">Đang tải...</p>';
    rvQuiz = {};
    rvRound = 2;
    rvGroupKey = rvMakeGroupKey(levelId, lessonNumbers);
    rvWrongWords = rvLoadWrongWords(rvGroupKey);
    loadReviewVocab(levelId, lessonNumbers).then(function (vocab) {
      rvVocab = vocab;
      rvRenderRound(2);
    }).catch(function () {
      $('#rvContent').innerHTML = '<p style="color:var(--color-gray-500);">Không tải được dữ liệu ôn tập.</p>';
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
    $('#reviewPractice').hidden = true;
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
      recordLessonScore(currentHubLesson, 'flash', { correct: fcTally.yes, total: total });
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
    '/lessons/hsk3-bai-1.html': [
      { point: 'Bổ ngữ kết quả 「好」',
        items: [
          { context: 'Hoàn thành câu: vé xem phim đã mua xong rồi.',
            pre: '电影票已经', blank: '买好', post: '了。', options: ['买好', '买完', '在买'], answer: 0,
            explanation: '好 diễn tả hành động hoàn thành và khiến người nói hài lòng, khác với 完 chỉ đơn thuần hoàn thành.' },
          { context: 'Hoàn thành câu: cơm vẫn chưa nấu xong, mời đợi chút.',
            pre: '饭还没', blank: '做好', post: '，请等一会儿。', options: ['做好', '做完', '在做'], answer: 0,
            explanation: '没 + V + 好 = chưa hoàn thành xong (và hài lòng).' },
          { context: 'Hoàn thành câu: đồ đi du lịch chuẩn bị xong chưa?',
            pre: '去旅游的东西', blank: '准备好', post: '了吗？', options: ['准备好', '准备完', '在准备'], answer: 0,
            explanation: '准备好 = chuẩn bị xong và sẵn sàng, hài lòng với kết quả.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我早就好想了。', isCorrect: false, correctVersion: '我早就想好了。',
            explanation: 'Bổ ngữ 好 phải đứng NGAY SAU động từ 想: 想 + 好, không đảo ngược thứ tự.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '电影票买好了吗？', isCorrect: true,
            explanation: 'Câu đúng: V + 好 + 了 + 吗 hỏi về việc đã hoàn thành và hài lòng chưa.' },
          { type: 'sort', context: 'Sắp xếp câu: những thứ mang theo tôi hôm qua đã chuẩn bị xong.',
            words: ['这些', '我', '昨天', '就', '准备', '好', '了', '。'], answer: '这些我昨天就准备好了。',
            explanation: '就 nhấn mạnh việc hoàn thành sớm; 准备好了 = V + 好 + 了.' },
          { type: 'sort', context: 'Sắp xếp câu: mẹ tôi đã nấu xong bữa tối.',
            words: ['妈妈', '已经', '做好', '晚饭', '了', '。'], answer: '妈妈已经做好晚饭了。',
            explanation: '做好 (V+好) + 晚饭 (tân ngữ) + 了.' },
          { type: 'translate', context: 'Dịch câu sau, dùng bổ ngữ kết quả 好.',
            promptLang: 'vi', prompt: 'Bài tập của tôi đã làm xong rồi.',
            answer: '我的作业写好了。', answerPy: 'Wǒ de zuòyè xiěhǎo le.',
            explanation: '写 + 好 + 了 = viết/làm xong và hài lòng.' },
          { type: 'translate', context: 'Dịch câu sau, dùng bổ ngữ kết quả 好.',
            promptLang: 'vi', prompt: 'Bạn nghĩ xong chưa, có muốn đi cùng tôi không?',
            answer: '你想好了吗，要不要跟我去？', answerPy: 'Nǐ xiǎnghǎo le ma, yào bu yào gēn wǒ qù?',
            explanation: '想 + 好 + 了 + 吗 = đã nghĩ xong (và quyết định) chưa.' },
          { context: 'Hoàn thành câu: anh ấy đã tìm được quán ăn ngon rồi.',
            pre: '他已经', blank: '找好', post: '饭馆儿了。', options: ['找好', '找完', '在找'], answer: 0,
            explanation: '找好 = tìm được và hài lòng với kết quả tìm được.' },
        ] },
      { point: '「一……也/都 + 不/没……」biểu thị phủ định hoàn toàn',
        items: [
          { context: 'Hoàn thành câu: tôi một quả táo cũng không muốn ăn.',
            pre: '我一个苹果', blank: '也不', post: '想吃。', options: ['也不', '也没', '都是'], answer: 0,
            explanation: '一 + lượng từ + danh từ + 也 + 不 + động từ = phủ định hoàn toàn.' },
          { context: 'Hoàn thành câu: điện thoại, máy tính, bản đồ, một cái cũng không thể thiếu.',
            pre: '手机、电脑、地图，一个', blank: '也不能', post: '少。', options: ['也不能', '也能', '都能'], answer: 0,
            explanation: '也不能 nhấn mạnh KHÔNG THỂ thiếu bất kỳ cái nào.' },
          { context: 'Hoàn thành câu: anh ấy không mệt chút nào.',
            pre: '他一点儿', blank: '也不', post: '累。', options: ['也不', '也没', '都很'], answer: 0,
            explanation: '一点儿 + 也 + 不 + tính từ = hoàn toàn không (tính từ) chút nào.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '昨天他一件衣服都没买。', isCorrect: true,
            explanation: 'Câu đúng: 一 + lượng từ + danh từ + 都 + 没 + động từ = phủ định hoàn toàn trong quá khứ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我一点儿钱不带都了。', isCorrect: false, correctVersion: '我一点儿钱都没带。',
            explanation: 'Cấu trúc đúng: 一点儿 + danh từ + 都 + 没 + động từ, không đảo lộn thứ tự các thành phần.' },
          { type: 'sort', context: 'Sắp xếp câu: hôm nay sáng sớm tôi cà phê cũng không uống chút nào.',
            words: ['今天', '早上', '我', '一点儿', '咖啡', '都', '没', '喝', '。'], answer: '今天早上我一点儿咖啡都没喝。',
            explanation: '一点儿 + danh từ + 都 + 没 + động từ.' },
          { type: 'sort', context: 'Sắp xếp câu: tuần này tôi rất bận, một chút thời gian cũng không có.',
            words: ['这个', '星期', '我', '很', '忙', '，', '一点儿', '时间', '也', '没有', '。'], answer: '这个星期我很忙，一点儿时间也没有。',
            explanation: '一点儿 + danh từ + 也 + 没有 = không có chút nào.' },
          { type: 'translate', context: 'Dịch câu sau, dùng cấu trúc 一……也/都+不/没.',
            promptLang: 'vi', prompt: 'Chị Lệ một tách trà cũng không uống.',
            answer: '小丽一杯茶也没喝。', answerPy: 'Xiǎolì yì bēi chá yě méi hē.',
            explanation: '一 + lượng từ + danh từ + 也 + 没 + động từ.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Vì không mang tiền nên tôi một thứ gì cũng không thể mua.',
            answer: '因为没带钱，所以我一点儿东西也不能买。', answerPy: 'Yīnwèi méi dài qián, suǒyǐ wǒ yìdiǎnr dōngxi yě bù néng mǎi.',
            explanation: '一点儿 + danh từ + 也 + 不能 + động từ.' },
          { context: 'Hoàn thành câu: chỗ đó không xa chút nào.',
            pre: '那个地方', blank: '一点儿也不', post: '远。', options: ['一点儿也不', '一点儿都是', '有点儿'], answer: 0,
            explanation: '一点儿也不 + tính từ = hoàn toàn không (tính từ).' },
        ] },
      { point: 'Liên từ 「那」đứng đầu câu',
        items: [
          { context: 'Hoàn thành đối thoại: A: Tôi không muốn đi mua sắm. B: Vậy thì tôi cũng không đi nữa.',
            pre: 'A：我不想去买东西。B：', blank: '那', post: '我也不去了。', options: ['那', '就', '才'], answer: 0,
            explanation: '那 đứng đầu câu B, nêu kết quả dựa trên điều A vừa nói.' },
          { context: 'Hoàn thành đối thoại: A: Bên ngoài mưa to, không đá bóng được nữa. B: Vậy chúng ta ở nhà xem tivi đi.',
            pre: 'A：外边下大雨了，不能去踢球了。B：', blank: '那', post: '我们在家看电视吧。', options: ['那', '所以', '因为'], answer: 0,
            explanation: '那 nêu đề nghị dựa trên tình huống vừa được nhắc đến.' },
          { context: 'Hoàn thành đối thoại: A: Xin lỗi, điện thoại màu đỏ đã bán hết rồi. B: Vậy thì cho tôi màu xanh vậy.',
            pre: 'A：对不起，红色的手机已经卖完了。B：', blank: '那', post: '给我绿色的吧。', options: ['那', '但是', '而且'], answer: 0,
            explanation: '那 dẫn ra lựa chọn thay thế dựa trên thông tin A vừa cho biết.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '那也不能一直玩儿啊。', isCorrect: true,
            explanation: 'Câu đúng: 那 đứng đầu câu, nêu nhận xét dựa trên điều vừa nghe.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我也不去了那。', isCorrect: false, correctVersion: '那我也不去了。',
            explanation: '那 phải đứng ĐẦU CÂU, không đặt ở cuối câu.' },
          { type: 'sort', context: 'Sắp xếp câu: A nói không muốn ăn cơm, B nói vậy thì chúng ta ăn trái cây đi.',
            words: ['那', '我们', '吃', '水果', '吧', '。'], answer: '那我们吃水果吧。',
            explanation: '那 đứng đầu câu nêu đề nghị.' },
          { type: 'sort', context: 'Sắp xếp câu: vậy tôi cũng ôn tập một chút vậy.',
            words: ['那', '我', '也', '复习', '一下', '吧', '。'], answer: '那我也复习一下吧。',
            explanation: '那 + Chủ ngữ + Vị ngữ.' },
          { type: 'translate', context: 'Dịch câu sau, dùng liên từ 那 đứng đầu câu.',
            promptLang: 'vi', prompt: 'Bạn không muốn đi leo núi à? Vậy chúng ta đi xem phim đi.',
            answer: '你不想去爬山吗？那我们去看电影吧。', answerPy: 'Nǐ bù xiǎng qù páshān ma? Nà wǒmen qù kàn diànyǐng ba.',
            explanation: '那 mở đầu câu đề nghị dựa trên câu hỏi trước đó.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Nếu bạn không thích trà, vậy thì uống cà phê đi.',
            answer: '如果你不喜欢茶，那就喝咖啡吧。', answerPy: 'Rúguǒ nǐ bù xǐhuan chá, nà jiù hē kāfēi ba.',
            explanation: '那 kết hợp với 就 sau mệnh đề 如果 để nêu kết quả/đề nghị.' },
          { context: 'Hoàn thành đối thoại: A: Tôi chưa nghĩ xong nên đi đâu. B: Vậy để tôi chọn giúp bạn.',
            pre: 'A：我还没想好去哪儿。B：', blank: '那', post: '我帮你选吧。', options: ['那', '还', '才'], answer: 0,
            explanation: '那 nêu đề nghị dựa trên tình huống A vừa nói.' },
        ] },
    ],
    '/lessons/hsk3-bai-3.html': [
      { point: '「还是」和「或者」',
        items: [
          { context: 'Hỏi bạn muốn uống trà hay cà phê (câu hỏi lựa chọn).',
            pre: '你要喝茶', blank: '还是', post: '喝咖啡？', options: ['还是', '或者', '也是'], answer: 0,
            explanation: '还是 dùng trong CÂU HỎI lựa chọn, không dùng 或者.' },
          { context: 'Nói rằng ăn cơm hoặc ăn mì đều được (câu trần thuật).',
            pre: '今天晚上吃米饭', blank: '或者', post: '面条都可以。', options: ['或者', '还是', '就是'], answer: 0,
            explanation: '或者 dùng trong CÂU TRẦN THUẬT khi 2 lựa chọn đều chấp nhận được.' },
          { context: 'Chọn từ đúng: câu có vế lựa chọn mang hình thức nghi vấn.',
            pre: '我不知道这个人是男的', blank: '还是', post: '女的。', options: ['还是', '或者', '也许'], answer: 0,
            explanation: 'Khi vế lựa chọn tự nó là mệnh đề nghi vấn (là nam hay là nữ), chỉ dùng được 还是.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你喜欢红色或者喜欢蓝色？', isCorrect: false, correctVersion: '你喜欢红色还是喜欢蓝色？',
            explanation: 'Đây là câu hỏi lựa chọn, phải dùng 还是 chứ không phải 或者.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '茶或者咖啡都可以，随便你。', isCorrect: true,
            explanation: 'Câu trần thuật nêu 2 lựa chọn đều được, dùng 或者 là đúng.' },
          { type: 'sort', context: 'Sắp xếp câu hỏi bạn thích màu đỏ hay màu xanh.',
            words: ['你', '喜欢', '红的', '还是', '绿的', '？'], answer: '你喜欢红的还是绿的？',
            explanation: '还是 nối 2 phần trong câu hỏi lựa chọn.' },
          { type: 'sort', context: 'Sắp xếp câu: khi trời lạnh hoặc mệt, uống trà nóng sẽ dễ chịu.',
            words: ['天', '冷', '了', '或者', '累', '了', '的', '时候', '，', '喝', '杯', '热茶', '会', '很', '舒服', '。'], answer: '天冷了或者累了的时候，喝杯热茶会很舒服。',
            explanation: '或者 nối 2 điều kiện tương đương trong câu trần thuật.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 还是 (câu hỏi lựa chọn).',
            promptLang: 'vi', prompt: 'Bạn muốn mua quần hay mua áo sơ mi?',
            answer: '你想买裤子还是买衬衫？', answerPy: 'Nǐ xiǎng mǎi kùzi háishi mǎi chènshān?',
            explanation: 'Câu hỏi lựa chọn dùng 还是.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 或者 (câu trần thuật).',
            promptLang: 'vi', prompt: 'Bạn có thể uống trà hoa hoặc trà xanh, đều được.',
            answer: '你可以喝花茶或者绿茶，都可以。', answerPy: 'Nǐ kěyǐ hē huāchá huòzhě lǜchá, dōu kěyǐ.',
            explanation: 'Câu trần thuật nêu 2 lựa chọn dùng 或者.' },
          { context: 'Chọn từ đúng: sinh nhật anh ấy tháng mấy, tôi không nhớ (mệnh đề nhúng mang hình thức nghi vấn).',
            pre: '他的生日是10月', blank: '还是', post: '11月，我不记得了。', options: ['还是', '或者', '可能'], answer: 0,
            explanation: 'Mệnh đề nhúng "là tháng mấy" mang hình thức nghi vấn nên chỉ dùng 还是.' },
        ] },
      { point: 'Câu tồn tại 「Xứ sở + V着 + Số lượng + Danh từ」',
        items: [
          { context: 'Hoàn thành câu: trên bàn để một ly cà phê.',
            pre: '桌子上', blank: '放着', post: '一杯咖啡。', options: ['放着', '放了', '在放'], answer: 0,
            explanation: 'Câu tồn tại dùng cấu trúc V + 着 để diễn tả trạng thái đang tồn tại.' },
          { context: 'Chọn cụm đúng vị trí số lượng từ.',
            pre: '桌子上放着', blank: '一杯', post: '咖啡。', options: ['一杯', '杯一', '一个杯'], answer: 0,
            explanation: 'Số từ + lượng từ (一杯) phải đứng NGUYÊN VẸN trước danh từ, không tách rời hay đảo ngược.' },
          { context: 'Câu phủ định của câu tồn tại.',
            pre: '桌子上', blank: '没放着', post: '咖啡。', options: ['没放着', '不放着', '没有放'], answer: 0,
            explanation: 'Phủ định của câu tồn tại: [nơi chốn] + 没 + V + 着 + danh từ (bỏ lượng từ).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '桌子上放着这杯咖啡。', isCorrect: false, correctVersion: '桌子上放着一杯咖啡。',
            explanation: 'Danh từ trong câu tồn tại phải là vật KHÔNG XÁC ĐỊNH (一杯咖啡), không dùng danh từ xác định như 这杯咖啡.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '墙上写着很多字。', isCorrect: true,
            explanation: 'Câu đúng: [nơi chốn] + V着 + [số lượng+danh từ không xác định].' },
          { type: 'sort', context: 'Sắp xếp câu: trên tường treo một bức tranh.',
            words: ['墙', '上', '挂', '着', '一', '张', '画', '。'], answer: '墙上挂着一张画。',
            explanation: '[nơi chốn] + V + 着 + [số lượng+danh từ].' },
          { type: 'sort', context: 'Sắp xếp câu: trong phòng ngồi rất nhiều học sinh.',
            words: ['教室', '里', '坐', '着', '很多', '学生', '。'], answer: '教室里坐着很多学生。',
            explanation: 'Cấu trúc câu tồn tại với động từ 坐.' },
          { type: 'translate', context: 'Dịch câu sau, dùng câu tồn tại V+着.',
            promptLang: 'vi', prompt: 'Trên bàn để rất nhiều đồ uống.',
            answer: '桌子上放着很多饮料。', answerPy: 'Zhuōzi shang fàngzhe hěn duō yǐnliào.',
            explanation: '[nơi chốn]+V着+[danh từ không xác định].' },
          { type: 'translate', context: 'Dịch câu sau, dùng dạng phủ định của câu tồn tại.',
            promptLang: 'vi', prompt: 'Trên bàn không để trái cây.',
            answer: '桌子上没放着水果。', answerPy: 'Zhuōzi shang méi fàngzhe shuǐguǒ.',
            explanation: 'Phủ định: [nơi chốn]+没+V+着+danh từ.' },
          { context: 'Chọn động từ phù hợp cho câu tồn tại về người ở tầng trên.',
            pre: '我家楼上', blank: '住着', post: '一位老师。', options: ['住着', '住了', '在住'], answer: 0,
            explanation: '住 (ở) + 着 diễn tả trạng thái đang tồn tại/cư trú.' },
        ] },
      { point: 'Trợ động từ 「会」biểu thị khả năng',
        items: [
          { context: 'Hoàn thành câu: mặc ít thế sẽ bị cảm lạnh đấy.',
            pre: '你穿得那么少，', blank: '会', post: '感冒的。', options: ['会', '是', '在'], answer: 0,
            explanation: '会 + động từ diễn tả khả năng sẽ xảy ra trong tương lai.' },
          { context: 'Hoàn thành câu: đừng lo, tôi sẽ tự chăm sóc bản thân.',
            pre: '别担心，我', blank: '会', post: '照顾好自己。', options: ['会', '要', '在'], answer: 0,
            explanation: '会 biểu thị khả năng/lời hứa về việc chưa xảy ra.' },
          { context: 'Hoàn thành câu: uống trà nóng sẽ rất dễ chịu.',
            pre: '喝杯热茶', blank: '会', post: '很舒服。', options: ['会', '是', '有'], answer: 0,
            explanation: '会 + tính từ diễn tả kết quả có thể xảy ra.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你不给他打电话，他会不高兴的。', isCorrect: true,
            explanation: 'Câu đúng: mệnh đề điều kiện đứng trước, 会 diễn tả kết quả có thể xảy ra.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '昨天我会去爬山了。', isCorrect: false, correctVersion: '昨天我去爬山了。',
            explanation: '会 chỉ dùng cho sự việc CHƯA xảy ra (tương lai/khả năng), không dùng cho sự việc đã xảy ra trong quá khứ (昨天).' },
          { type: 'sort', context: 'Sắp xếp câu: nếu bạn không cẩn thận thì sẽ bị cảm lạnh.',
            words: ['如果', '你', '不', '小心', '，', '就', '会', '感冒', '的', '。'], answer: '如果你不小心，就会感冒的。',
            explanation: '会 kết hợp với 如果……就…… diễn tả khả năng xảy ra khi có điều kiện.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi nghĩ trời chiều nay sẽ mưa.',
            words: ['我', '觉得', '今天', '下午', '会', '下雨', '。'], answer: '我觉得今天下午会下雨。',
            explanation: '会 + động từ diễn tả dự đoán về tương lai.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 会 biểu thị khả năng.',
            promptLang: 'vi', prompt: 'Nếu bạn không nói với anh ấy thì anh ấy sẽ không biết.',
            answer: '如果你不告诉他，他就会不知道。', answerPy: 'Rúguǒ nǐ bú gàosu tā, tā jiù huì bù zhīdào.',
            explanation: '会 diễn tả điều có thể xảy ra khi có điều kiện.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Uống đồ uống lạnh nhiều quá sẽ không tốt cho sức khỏe.',
            answer: '喝太多冷饮料会对身体不好。', answerPy: 'Hē tài duō lěng yǐnliào huì duì shēntǐ bù hǎo.',
            explanation: '会 + tính từ/cụm từ diễn tả kết quả có thể xảy ra.' },
          { context: 'Chọn đáp án đúng: nếu con không mặc đủ ấm thì sẽ bị cảm lạnh.',
            pre: '孩子穿得不够暖和，', blank: '会', post: '感冒的。', options: ['会', '要', '在'], answer: 0,
            explanation: '会 diễn tả khả năng xảy ra trong tương lai gần.' },
        ] },
    ],
    '/lessons/hsk3-bai-4.html': [
      { point: '「又……又……」— mô tả hai đặc điểm cùng tồn tại',
        items: [
          { context: 'Hoàn thành câu: quả dưa hấu này vừa to vừa ngọt.',
            pre: '这个西瓜', blank: '又', post: '大又甜。', options: ['又', '也', '还'], answer: 0,
            explanation: '又……又…… mô tả hai đặc điểm cùng tồn tại, đặt ngay trước mỗi tính từ.' },
          { context: 'Hoàn thành câu: cô phục vụ đó vừa trẻ vừa xinh.',
            pre: '那个服务员又年轻', blank: '又', post: '漂亮。', options: ['又', '就', '才'], answer: 0,
            explanation: '又 phải lặp lại trước tính từ thứ hai, không thay bằng 就/才.' },
          { context: 'Chọn từ đúng để nối hai tính từ liên tiếp mô tả cùng một người.',
            pre: '她', blank: '又', post: '聪明又热情。', options: ['又', '还', '再'], answer: 0,
            explanation: '又……又…… là cấu trúc cố định, không thay bằng 还/再.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '她漂亮又热情。', isCorrect: false, correctVersion: '她又漂亮又热情。',
            explanation: 'Thiếu 又 đứng trước tính từ thứ nhất — cấu trúc phải là 又+adj1+又+adj2.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这条路又小又难走。', isCorrect: true,
            explanation: 'Câu đúng theo cấu trúc 又+adj1+又+adj2.' },
          { type: 'sort', context: 'Sắp xếp câu: cái bánh kem này vừa rẻ vừa ngon.',
            words: ['这个', '蛋糕', '又', '便宜', '又', '好吃', '。'], answer: '这个蛋糕又便宜又好吃。',
            explanation: '又 đặt ngay trước mỗi tính từ được liệt kê.' },
          { type: 'sort', context: 'Sắp xếp câu: cô ấy làm việc vừa nghiêm túc vừa nhiệt tình.',
            words: ['她', '工作', '又', '认真', '又', '热情', '。'], answer: '她工作又认真又热情。',
            explanation: '又……又…… bổ nghĩa cho động từ 工作 qua hai tính từ đi kèm.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 又……又……',
            promptLang: 'vi', prompt: 'Con đường này vừa nhỏ vừa khó đi.',
            answer: '这条路又小又难走。', answerPy: 'Zhè tiáo lù yòu xiǎo yòu nán zǒu.',
            explanation: '又……又…… mô tả hai đặc điểm (ôn lại 条/难 đã học ở Bài 2-3).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Nếu quần áo vừa rẻ vừa đẹp thì tôi sẽ mua nhiều một chút.',
            answer: '如果衣服又便宜又好看，我就多买一点儿。', answerPy: 'Rúguǒ yīfu yòu piányi yòu hǎokàn, wǒ jiù duō mǎi yìdiǎnr.',
            explanation: '又……又…… kết hợp với 如果……就…… diễn tả giả thiết — kết quả.' },
          { context: 'Chọn từ đúng: bạn nữ vừa cao vừa xinh kia là học sinh khối hai.',
            pre: '那个', blank: '又', post: '高又漂亮的女孩儿是二年级的。', options: ['又', '太', '很'], answer: 0,
            explanation: '又……又…… làm định ngữ trước danh từ qua trợ từ 的.' },
        ] },
      { point: 'Động tác đi kèm 「V1着(O1) + V2(O2)」',
        items: [
          { context: 'Hoàn thành câu: em trai vừa ăn táo vừa làm bài tập.',
            pre: '弟弟吃', blank: '着', post: '苹果写作业。', options: ['着', '了', '过'], answer: 0,
            explanation: '着 gắn ngay sau động từ thứ nhất, diễn tả trạng thái đi kèm của hành động chính.' },
          { context: 'Hoàn thành câu: rất nhiều người cầm hoa tươi đứng ở cửa.',
            pre: '很多人拿', blank: '着', post: '鲜花站在门口。', options: ['着', '了', '的'], answer: 0,
            explanation: 'V1着 (拿着) đứng trước V2 (站) diễn tả hai hành động xảy ra đồng thời.' },
          { context: 'Hoàn thành câu: cô ấy luôn cười khi nói chuyện với khách hàng.',
            pre: '她总是笑', blank: '着', post: '跟客人说话。', options: ['着', '过', '了'], answer: 0,
            explanation: '笑着 diễn tả trạng thái đi kèm của hành động chính 说话.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '她总是回答着笑老师的问题。', isCorrect: false, correctVersion: '她总是笑着回答老师的问题。',
            explanation: 'Động từ diễn tả trạng thái đi kèm (笑) phải đứng trước và gắn liền với 着, rồi mới đến động từ chính (回答).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '周先生和周太太坐着看电视。', isCorrect: true,
            explanation: 'Câu đúng theo cấu trúc V1着+V2.' },
          { type: 'sort', context: 'Sắp xếp câu: chúng ta về nhà vừa ăn bánh kem vừa xem tivi, thế nào?',
            words: ['我们', '回家', '吃', '着', '蛋糕', '看', '电视', '，', '怎么样', '？'], answer: '我们回家吃着蛋糕看电视，怎么样？',
            explanation: 'V1(吃)着+V2(看) diễn tả hai hành động đồng thời.' },
          { type: 'sort', context: 'Sắp xếp câu: những người đó cầm sách đứng ở cửa.',
            words: ['那些', '人', '拿', '着', '书', '站', '在', '门口', '。'], answer: '那些人拿着书站在门口。',
            explanation: '拿着(V1) đứng trước 站(V2), không đảo ngược thứ tự.' },
          { type: 'translate', context: 'Dịch câu sau, dùng V1着+V2.',
            promptLang: 'vi', prompt: 'Ông Chu và bà Chu ngồi xem tivi.',
            answer: '周先生和周太太坐着看电视。', answerPy: 'Zhōu xiānsheng hé Zhōu tàitai zuòzhe kàn diànshì.',
            explanation: '坐着(V1)+看电视(V2) (ôn lại 太太 đã học ở Bài 2).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Bọn trẻ đang vừa ăn bánh kem vừa xem tivi.',
            answer: '孩子们正吃着蛋糕看电视。', answerPy: 'Háizimen zhèng chīzhe dàngāo kàn diànshì.',
            explanation: 'V1着+V2 diễn tả hai hành động đồng thời.' },
          { context: 'Chọn từ đúng: cô ấy luôn cười trả lời câu hỏi của thầy giáo.',
            pre: '她总是笑', blank: '着', post: '回答老师的问题。', options: ['着', '了', '过'], answer: 0,
            explanation: '着 gắn liền sau động từ diễn tả trạng thái đi kèm (笑).' },
        ] },
    ],
    '/lessons/hsk3-bai-5.html': [
      { point: 'Trợ từ 「了」chỉ sự thay đổi',
        items: [
          { context: 'Hoàn thành câu: tháng trước rất lạnh, bây giờ không lạnh nữa.',
            pre: '上个月很冷，现在天气不那么冷', blank: '了', post: '。', options: ['了', '的', '过'], answer: 0,
            explanation: '了 đặt cuối câu diễn tả tình huống đã thay đổi so với trước.' },
          { context: 'Hoàn thành câu: mấy hôm trước tôi hơi sốt, giờ đỡ nhiều rồi.',
            pre: '我前几天有点儿发烧，现在好多', blank: '了', post: '。', options: ['了', '过', '着'], answer: 0,
            explanation: '了 diễn tả sự thay đổi tình trạng sức khỏe so với trước.' },
          { context: 'Chọn từ đúng: bây giờ tôi thích mùa hè rồi (trước đây thì không).',
            pre: '我现在喜欢夏天', blank: '了', post: '。', options: ['了', '呢', '吗'], answer: 0,
            explanation: '了 diễn tả sự thay đổi thái độ/sở thích so với trước.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我明天喜欢夏天了。', isCorrect: false, correctVersion: '我现在喜欢夏天了。',
            explanation: '了 chỉ sự thay đổi dùng cho tình huống đã/đang xảy ra so với trước, không dùng với 明天 (tương lai).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这条裙子是去年买的，今年就不能穿了。', isCorrect: true,
            explanation: 'Câu đúng: 了 diễn tả sự thay đổi — năm nay không mặc vừa nữa, khác với năm ngoái.' },
          { type: 'sort', context: 'Sắp xếp câu: bây giờ thời tiết không lạnh nữa.',
            words: ['现在', '天气', '不', '那么', '冷', '了', '。'], answer: '现在天气不那么冷了。',
            explanation: '了 đặt cuối câu diễn tả sự thay đổi.' },
          { type: 'sort', context: 'Sắp xếp câu: con trai tôi bị ốm rồi.',
            words: ['我', '儿子', '生病', '了', '。'], answer: '我儿子生病了。',
            explanation: '了 diễn tả tình huống mới xuất hiện (con vốn khỏe mạnh, giờ bị ốm).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 了 diễn tả sự thay đổi.',
            promptLang: 'vi', prompt: 'Tôi khỏi cảm rồi, ngày mai bạn không cần đến chăm sóc tôi nữa.',
            answer: '我感冒好了，明天你不用来照顾我了。', answerPy: 'Wǒ gǎnmào hǎo le, míngtiān nǐ búyòng lái zhàogù wǒ le.',
            explanation: '了 diễn tả hai sự thay đổi liên tiếp (khỏi bệnh, không cần chăm sóc nữa).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Mùa xuân đến rồi, hoa đều nở cả rồi.',
            answer: '春天到了，花都开了。', answerPy: 'Chūntiān dào le, huā dōu kāi le.',
            explanation: '了 diễn tả sự thay đổi theo mùa.' },
          { context: 'Chọn từ đúng: cái quần này giờ không mặc vừa nữa.',
            pre: '这条裤子现在已经不能穿', blank: '了', post: '。', options: ['了', '过', '着'], answer: 0,
            explanation: '了 diễn tả sự thay đổi so với trước (trước mặc vừa, giờ không vừa nữa).' },
        ] },
      { point: '「越来越 + tính từ/động từ tâm lý」— mức độ tăng dần',
        items: [
          { context: 'Hoàn thành câu: chữ Hán tôi biết ngày càng nhiều.',
            pre: '我认识的汉字', blank: '越来越', post: '多。', options: ['越来越', '很', '非常'], answer: 0,
            explanation: '越来越 diễn tả mức độ tăng dần theo thời gian.' },
          { context: 'Hoàn thành câu: bạn ngày càng xinh đẹp.',
            pre: '你', blank: '越来越', post: '漂亮。', options: ['越来越', '太', '真'], answer: 0,
            explanation: '越来越 + tính từ, không thêm phó từ mức độ khác phía trước.' },
          { context: 'Chọn từ đúng: tôi ngày càng thích vận động.',
            pre: '我', blank: '越来越', post: '喜欢运动。', options: ['越来越', '已经', '正在'], answer: 0,
            explanation: '越来越 + động từ tâm lý (喜欢) diễn tả mức độ tăng dần.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '天气越来越很热了。', isCorrect: false, correctVersion: '天气越来越热了。',
            explanation: 'Không được thêm phó từ mức độ (很) vào trước tính từ trong cấu trúc 越来越+tính từ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我做的饭越来越好吃。', isCorrect: true,
            explanation: 'Câu đúng theo cấu trúc 越来越+tính từ.' },
          { type: 'sort', context: 'Sắp xếp câu: dạo này tôi ngày càng béo lên.',
            words: ['我', '最近', '越来越', '胖', '了', '。'], answer: '我最近越来越胖了。',
            explanation: '越来越+tính từ diễn tả sự thay đổi mức độ.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi thấy tiếng Trung ngày càng khó.',
            words: ['我', '觉得', '汉语', '越来越', '难', '了', '。'], answer: '我觉得汉语越来越难了。',
            explanation: '越来越+tính từ làm bổ ngữ trong mệnh đề 觉得.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 越……越……',
            promptLang: 'vi', prompt: 'Con đường này càng đi càng khó đi.',
            answer: '这条路越走越难走。', answerPy: 'Zhè tiáo lù yuè zǒu yuè nán zǒu.',
            explanation: '越……越…… (biến thể của 越来越) diễn tả mức độ tăng theo hành động.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Dạo này tôi ngày càng bận rộn.',
            answer: '我最近越来越忙了。', answerPy: 'Wǒ zuìjìn yuè lái yuè máng le.',
            explanation: '越来越+tính từ diễn tả sự thay đổi gần đây.' },
          { context: 'Chọn từ đúng: cơm tôi nấu ngày càng ngon.',
            pre: '我做的饭', blank: '越来越', post: '好吃。', options: ['越来越', '已经', '正在'], answer: 0,
            explanation: '越来越+tính từ diễn tả xu hướng thay đổi.' },
        ] },
    ],
    '/lessons/hsk3-bai-6.html': [
      { point: 'Bổ ngữ khả năng 「Động từ + 得/不 + bổ ngữ」',
        items: [
          { context: 'Hoàn thành câu: xe cộ ồn quá, tôi nghe không rõ bạn nói gì.',
            pre: '车太吵了，我听', blank: '不清楚', post: '你说什么。', options: ['不清楚', '得清楚', '很清楚'], answer: 0,
            explanation: 'Bổ ngữ khả năng dạng phủ định: Động từ(听)+不+bổ ngữ(清楚).' },
          { context: 'Hoàn thành câu: chữ này viết to, tôi nhìn rõ.',
            pre: '这个字写得很大，我看', blank: '得清楚', post: '。', options: ['得清楚', '不清楚', '很清楚'], answer: 0,
            explanation: 'Bổ ngữ khả năng dạng khẳng định: Động từ(看)+得+bổ ngữ(清楚).' },
          { context: 'Chọn từ đúng: tôi tìm không thấy cuốn sách đó ở đâu cả.',
            pre: '我', blank: '找不到', post: '那本书。', options: ['找不到', '找得到', '不找到'], answer: 0,
            explanation: '找不到 = bổ ngữ khả năng dạng phủ định (Động từ+不+bổ ngữ 到).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '楼太高了，我上不去。', isCorrect: true,
            explanation: 'Câu đúng: 上不去 = Động từ(上)+不+bổ ngữ xu hướng(去).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我看清楚不那个汉字。', isCorrect: false, correctVersion: '我看不清楚那个汉字。',
            explanation: '不 phải đứng ngay sau động từ, trước bổ ngữ: 看+不+清楚, không đảo vị trí 不 và bổ ngữ.' },
          { type: 'sort', context: 'Sắp xếp câu: không có kính, tôi một chữ cũng không nhìn rõ.',
            words: ['没有', '眼镜', '，', '我', '一', '个', '字', '也', '看', '不', '清楚', '。'], answer: '没有眼镜，我一个字也看不清楚。',
            explanation: '看不清楚 = bổ ngữ khả năng phủ định (ôn lại 眼镜/清楚 vừa học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi muốn mời Tiểu Lệ ăn cơm nhưng tìm không được quán ngon.',
            words: ['我', '想', '请', '小丽', '吃饭', '，', '但是', '找', '不', '到', '好', '饭馆儿', '。'], answer: '我想请小丽吃饭，但是找不到好饭馆儿。',
            explanation: '找不到 = bổ ngữ khả năng phủ định, kết hợp 但是 diễn tả tương phản.' },
          { type: 'translate', context: 'Dịch câu sau, dùng bổ ngữ khả năng phủ định.',
            promptLang: 'vi', prompt: 'Vì bài tập hôm nay đặc biệt khó nên tôi làm không xong.',
            answer: '因为今天的作业特别难，所以我做不完。', answerPy: 'Yīnwèi jīntiān de zuòyè tèbié nán, suǒyǐ wǒ zuò bu wán.',
            explanation: '因为……所以…… kết hợp 做不完 (bổ ngữ khả năng phủ định) (ôn lại 特别/作业 đã học).' },
          { type: 'translate', context: 'Dịch câu sau, dùng bổ ngữ khả năng khẳng định.',
            promptLang: 'vi', prompt: 'Nếu bạn đeo kính thì sẽ nhìn rõ được chữ đó.',
            answer: '如果你戴眼镜，就看得清楚那个字。', answerPy: 'Rúguǒ nǐ dài yǎnjìng, jiù kàn de qīngchu nàge zì.',
            explanation: '如果……就…… kết hợp 看得清楚 (bổ ngữ khả năng khẳng định).' },
          { context: 'Chọn từ đúng: điện thoại nói không giải thích rõ được, bạn đến nhà tôi đi.',
            pre: '电话里讲', blank: '不明白', post: '，你来我家吧。', options: ['不明白', '得明白', '很明白'], answer: 0,
            explanation: '讲不明白 = bổ ngữ khả năng dạng phủ định (ôn lại 讲/明白 vừa học trong bài này).' },
        ] },
      { point: '「呢」hỏi vị trí: 「Danh từ + 呢」',
        items: [
          { context: 'Hoàn thành câu: kính của tôi đâu rồi? Bạn nhìn thấy không?',
            pre: '我的眼镜', blank: '呢', post: '？你看见了吗？', options: ['呢', '吗', '吧'], answer: 0,
            explanation: '"Danh từ+呢" hỏi vị trí đồ vật, nghĩa là "…ở đâu rồi?".' },
          { context: 'Hoàn thành câu: sữa đâu? Chưa mua đâu.',
            pre: '牛奶', blank: '呢', post: '？还没买呢。', options: ['呢', '吗', '呀'], answer: 0,
            explanation: '呢 đặt ngay sau danh từ để hỏi vị trí, không cần thêm 在哪儿.' },
          { context: 'Chọn từ đúng: điện thoại của bạn đâu? Ba lấy đi rồi.',
            pre: '你的手机', blank: '呢', post: '？爸爸拿走了。', options: ['呢', '吗', '啊'], answer: 0,
            explanation: '"Danh từ+呢" là cách hỏi vị trí ngắn gọn, thông dụng trong khẩu ngữ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你的车在哪儿呢？', isCorrect: false, correctVersion: '你的车呢？',
            explanation: '"Danh từ+呢" đã tự mang nghĩa hỏi vị trí, không cần thêm 在哪儿 phía trước 呢.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '妈妈呢？', isCorrect: true,
            explanation: 'Câu đúng: "Danh từ+呢" hỏi người/vật đang ở đâu.' },
          { type: 'sort', context: 'Sắp xếp câu: có phải lúc nãy để trên bàn không?',
            words: ['是', '不是', '刚才', '放', '在', '桌子', '上', '了', '？'], answer: '是不是刚才放在桌子上了？',
            explanation: '刚才 đứng trước động từ diễn tả thời điểm vài phút trước.' },
          { type: 'sort', context: 'Sắp xếp câu: em mau lại đây giúp anh đi.',
            words: ['你', '快', '过来', '帮忙', '啊', '。'], answer: '你快过来帮忙啊。',
            explanation: '帮忙 (động từ ly hợp) đứng cuối câu sau 过来 (ôn lại 帮忙 vừa học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng "danh từ+呢" hỏi vị trí.',
            promptLang: 'vi', prompt: 'Chìa khóa của tôi đâu? Tôi tìm không thấy.',
            answer: '我的钥匙呢？我找不到。', answerPy: 'Wǒ de yàoshi ne? Wǒ zhǎo bu dào.',
            explanation: '"钥匙+呢" hỏi vị trí, kết hợp 找不到 (ôn lại 钥匙 đã học ở Bài 2).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Cái ô của bạn đâu? Có thể trời sẽ mưa đấy.',
            answer: '你的伞呢？可能要下雨了。', answerPy: 'Nǐ de sǎn ne? Kěnéng yào xiàyǔ le.',
            explanation: '"伞+呢" hỏi vị trí (ôn lại 伞 đã học ở Bài 2).' },
          { context: 'Chọn từ đúng: sách của bạn đâu? Để đâu rồi?',
            pre: '你的书', blank: '呢', post: '？放在哪儿了？', options: ['呢', '吗', '啊'], answer: 0,
            explanation: '"Danh từ+呢" hỏi vị trí, câu hỏi tiếp theo 放在哪儿了 làm rõ nghĩa hơn.' },
        ] },
      { point: '「刚」và「刚才」— hai cách nói VỪA MỚI',
        items: [
          { context: 'Hoàn thành câu: bố vừa mới ra ngoài.',
            pre: '爸爸', blank: '刚', post: '出去。', options: ['刚', '刚才', '才'], answer: 0,
            explanation: '刚 (phó từ) chỉ đứng trước động từ, không đứng đầu câu.' },
          { context: 'Hoàn thành câu: vừa nãy bố ra ngoài rồi.',
            pre: '', blank: '刚才', post: '爸爸出去了。', options: ['刚才', '刚', '才'], answer: 0,
            explanation: '刚才 (danh từ) có thể đứng đầu câu, khác với 刚 chỉ đứng trước động từ.' },
          { context: 'Chọn từ đúng: mình vừa làm xong bài, còn bạn thì sao?',
            pre: '我', blank: '刚', post: '做完，你呢？', options: ['刚', '才', '刚才'], answer: 0,
            explanation: '刚 đứng ngay trước động từ 做完 diễn tả hành động vừa xảy ra.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '刚才我喝了一杯咖啡。', isCorrect: true,
            explanation: 'Câu đúng: 刚才 (danh từ) đứng đầu câu diễn tả thời điểm vài phút trước.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '刚才儿子刚做完作业。', isCorrect: false, correctVersion: '儿子刚做完作业。',
            explanation: '刚 và 刚才 mang nghĩa gần giống nhau, không dùng lặp cả hai trong cùng một câu.' },
          { type: 'sort', context: 'Sắp xếp câu: kính, Chu Minh vừa nãy để trên bàn rồi.',
            words: ['眼镜', '周明', '刚才', '放', '在', '桌子', '上', '了', '。'], answer: '眼镜周明刚才放在桌子上了。',
            explanation: '刚才 đứng sau chủ ngữ 周明, trước động từ 放.' },
          { type: 'sort', context: 'Sắp xếp câu: mình vừa tập thể dục xong là qua ngay.',
            words: ['我', '锻炼', '完', '了', '就', '过去', '。'], answer: '我锻炼完了就过去。',
            explanation: '锻炼完了 diễn tả hành động vừa hoàn thành (ôn lại 锻炼 vừa học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 刚 (phó từ, trước động từ).',
            promptLang: 'vi', prompt: 'Tôi vừa tập thể dục xong, hơi mệt.',
            answer: '我刚锻炼完，有点儿累。', answerPy: 'Wǒ gāng duànliàn wán, yǒudiǎnr lèi.',
            explanation: '刚 đứng trước động từ 锻炼完 diễn tả hành động vừa hoàn thành.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 刚才 (danh từ).',
            promptLang: 'vi', prompt: 'Vừa nãy có người gọi điện tìm bạn, nhưng bạn đang tập thể dục.',
            answer: '刚才有人打电话找你，但是你正在锻炼。', answerPy: 'Gāngcái yǒu rén dǎ diànhuà zhǎo nǐ, dànshì nǐ zhèngzài duànliàn.',
            explanation: '刚才 đứng đầu câu, kết hợp 但是 diễn tả tương phản (ôn lại 锻炼 vừa học trong bài này).' },
          { context: 'Chọn từ đúng: đúng vậy, lúc nãy còn mưa to thế.',
            pre: '是啊，', blank: '刚才', post: '还下得那么大。', options: ['刚才', '刚', '才'], answer: 0,
            explanation: '刚才 đứng đầu câu diễn tả thời điểm vài phút trước (ôn lại 刚才 vừa học trong bài này).' },
        ] },
    ],
    '/lessons/hsk3-bai-7.html': [
      { point: 'Cách diễn tả khoảng thời gian (bổ ngữ thời lượng)',
        items: [
          { context: 'Hoàn thành câu: cô ấy làm việc ba năm rồi.',
            pre: '她工作', blank: '了三年', post: '。', options: ['了三年', '三年了', '了三年了'], answer: 0,
            explanation: 'Sub+V+了+khoảng thời gian: bổ ngữ thời lượng (三年) đứng ngay sau 了.' },
          { context: 'Hoàn thành câu: chúng tôi hát hai tiếng đồng hồ.',
            pre: '我们', blank: '唱了两个小时', post: '歌。', options: ['唱了两个小时', '两个小时唱了', '唱两个小时了'], answer: 0,
            explanation: 'V+了+khoảng thời gian+O: 唱+了+两个小时+歌.' },
          { context: 'Chọn từ đúng: tôi ngồi đây nửa tiếng rồi đấy (và vẫn đang ngồi).',
            pre: '我都在这儿坐了半个小时', blank: '了', post: '。', options: ['了', '过', '着'], answer: 0,
            explanation: 'Thêm 了 cuối câu diễn tả hành động vẫn đang tiếp diễn đến hiện tại.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '她三年了在北京工作。', isCorrect: false, correctVersion: '她在北京工作三年了。',
            explanation: 'Bổ ngữ thời lượng (三年) phải đứng ngay sau động từ (工作), không tách rời.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我学习了一年汉语了。', isCorrect: true,
            explanation: 'Câu đúng: V+了+khoảng thời gian+O+了 diễn tả hành động vẫn đang tiếp diễn.' },
          { type: 'sort', context: 'Sắp xếp câu: cô ấy làm việc ở ngân hàng hai năm rồi mới đến công ty chúng tôi.',
            words: ['她', '在', '银行', '工作', '了', '两年', '以后', '来', '的', '我们', '公司', '。'], answer: '她在银行工作了两年以后来的我们公司。',
            explanation: 'V+了+khoảng thời gian diễn tả khoảng thời gian hành động kéo dài (ôn lại 银行 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi và cô ấy quen nhau năm năm rồi.',
            words: ['我', '跟', '她', '都', '认识', '五年', '了', '。'], answer: '我跟她都认识五年了。',
            explanation: '认识+了+khoảng thời gian+了 diễn tả mối quan hệ kéo dài đến hiện tại.' },
          { type: 'translate', context: 'Dịch câu sau, dùng bổ ngữ thời lượng.',
            promptLang: 'vi', prompt: 'Cô ấy làm việc ở công ty này ba năm rồi.',
            answer: '她在这家公司工作三年了。', answerPy: 'Tā zài zhè jiā gōngsī gōngzuò sān nián le.',
            explanation: 'V+khoảng thời gian+了 diễn tả khoảng thời gian hành động kéo dài.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Anh ấy đợi tôi ở cửa công ty nửa tiếng rồi.',
            answer: '他在公司门口等了我半个小时了。', answerPy: 'Tā zài gōngsī ménkǒu děngle wǒ bàn ge xiǎoshí le.',
            explanation: 'V+了+khoảng thời gian+了 diễn tả hành động vẫn đang tiếp diễn.' },
          { context: 'Chọn từ đúng: bà tôi làm việc ở ngân hàng rất lâu rồi.',
            pre: '我奶奶在银行工作很久', blank: '了', post: '。', options: ['了', '过', '着'], answer: 0,
            explanation: '很久了 diễn tả khoảng thời gian dài (ôn lại 久 vừa học trong bài này).' },
        ] },
      { point: '「对……感兴趣 / 有兴趣」— diễn tả sự hứng thú',
        items: [
          { context: 'Hoàn thành câu: họ thích xem phim.',
            pre: '他们', blank: '对电影感兴趣', post: '。', options: ['对电影感兴趣', '感兴趣对电影', '电影对感兴趣'], answer: 0,
            explanation: 'Cấu trúc: Sub+对+đối tượng+感兴趣.' },
          { context: 'Hoàn thành câu: con trai tôi không thích chơi bóng rổ.',
            pre: '我儿子对打篮球', blank: '不感兴趣', post: '。', options: ['不感兴趣', '感兴趣不', '不对感兴趣'], answer: 0,
            explanation: 'Dạng phủ định: 对……不感兴趣.' },
          { context: 'Chọn từ đúng: tôi thích cô ấy hơn.',
            pre: '我对她', blank: '更感兴趣', post: '。', options: ['更感兴趣', '感兴趣更', '更对感兴趣'], answer: 0,
            explanation: 'Phó từ mức độ (更) đặt ngay trước 感兴趣.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我很对音乐感兴趣。', isCorrect: false, correctVersion: '我对音乐很感兴趣。',
            explanation: 'Phó từ mức độ (很) phải đặt trước 感兴趣, không đặt trước giới từ 对.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '同学们对汉语有兴趣。', isCorrect: true,
            explanation: 'Câu đúng: Sub+对+đối tượng+有兴趣.' },
          { type: 'sort', context: 'Sắp xếp câu: cả hai đều thích âm nhạc à?',
            words: ['你们', '都', '对', '音乐', '感兴趣', '吗', '？'], answer: '你们都对音乐感兴趣吗？',
            explanation: '都 đặt trước 对, 感兴趣 đứng cuối câu.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi không thích leo núi, leo núi mệt lắm.',
            words: ['我', '对', '爬山', '不', '感兴趣', '，', '爬山', '太', '累', '了', '。'], answer: '我对爬山不感兴趣，爬山太累了。',
            explanation: '对……不感兴趣 = dạng phủ định (ôn lại 爬山 đã học ở Bài 3).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 对……感兴趣.',
            promptLang: 'vi', prompt: 'Bạn thích môn thể thao nào?',
            answer: '你对什么运动感兴趣？', answerPy: 'Nǐ duì shénme yùndòng gǎn xìngqù?',
            explanation: '对+đối tượng nghi vấn (什么运动)+感兴趣.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Nếu bạn thích âm nhạc thì cùng đi nghe hòa nhạc với tôi đi.',
            answer: '如果你对音乐感兴趣，就跟我一起去听音乐会吧。', answerPy: 'Rúguǒ nǐ duì yīnyuè gǎn xìngqù, jiù gēn wǒ yìqǐ qù tīng yīnyuèhuì ba.',
            explanation: '如果……就…… kết hợp 对……感兴趣 (ôn lại 音乐会 đã học ở Bài 6).' },
          { context: 'Chọn từ đúng: cô ấy thích âm nhạc, còn tôi thích cô ấy hơn.',
            pre: '她对音乐感兴趣，我对她', blank: '更感兴趣', post: '。', options: ['更感兴趣', '很感兴趣不', '感兴趣更多'], answer: 0,
            explanation: '更 (phó từ mức độ) đặt trước 感兴趣 diễn tả mức độ so sánh cao hơn.' },
        ] },
      { point: 'Dùng 「半」「刻」「差」để nói giờ',
        items: [
          { context: 'Hoàn thành câu: bây giờ là 7 giờ rưỡi.',
            pre: '现在是七点', blank: '半', post: '。', options: ['半', '刻', '差'], answer: 0,
            explanation: '[giờ]+半 = giờ rưỡi (30 phút).' },
          { context: 'Hoàn thành câu: bạn đến muộn mười lăm phút rồi.',
            pre: '你迟到了一', blank: '刻', post: '钟。', options: ['刻', '半', '差'], answer: 0,
            explanation: '一刻钟 = 15 phút, dùng làm bổ ngữ thời lượng.' },
          { context: 'Chọn từ đúng: đã kém mười lăm phút nữa là 8 giờ rồi.',
            pre: '已经', blank: '差', post: '一刻八点了！', options: ['差', '半', '刻'], answer: 0,
            explanation: '差+[thời lượng]+[giờ] = cách nói giờ kém.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '现在一刻差八点。', isCorrect: false, correctVersion: '现在差一刻八点。',
            explanation: 'Cấu trúc nói giờ kém: 差+[khoảng thời gian]+[giờ], không đảo 差 ra sau.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '现在差五分十二点。', isCorrect: true,
            explanation: 'Câu đúng: 差+五分+十二点 = kém 5 phút nữa 12 giờ.' },
          { type: 'sort', context: 'Sắp xếp câu: bạn không phải nói 7 giờ rưỡi đến đón tôi sao?',
            words: ['你', '不是', '说', '七点', '半', '来', '接', '我', '吗', '？'], answer: '你不是说七点半来接我吗？',
            explanation: '[giờ]+半 = giờ rưỡi (ôn lại 接 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: không phải tôi đến muộn, mà là đồng hồ của bạn chạy nhanh mười lăm phút.',
            words: ['不是', '我', '迟到', '了', '，', '是', '你', '的', '表', '快', '了', '一', '刻', '钟', '。'], answer: '不是我迟到了，是你的表快了一刻钟。',
            explanation: '一刻钟 làm bổ ngữ số lượng diễn tả 15 phút.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 差 để nói giờ kém.',
            promptLang: 'vi', prompt: 'Bây giờ là kém mười lăm phút nữa 9 giờ.',
            answer: '现在差一刻九点。', answerPy: 'Xiànzài chà yí kè jiǔ diǎn.',
            explanation: '差+一刻+九点 = kém 15 phút nữa 9 giờ.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 半 để nói giờ rưỡi.',
            promptLang: 'vi', prompt: 'Bạn có thể đến đón tôi lúc 7 giờ rưỡi không?',
            answer: '你能七点半来接我吗？', answerPy: 'Nǐ néng qī diǎn bàn lái jiē wǒ ma?',
            explanation: '七点半 = 7 giờ rưỡi.' },
          { context: 'Chọn từ đúng: chúng ta phải đi nhanh thôi, kém mười lăm phút nữa 9 giờ rồi.',
            pre: '现在', blank: '差', post: '一刻九点，我们得快点儿走了。', options: ['差', '半', '刻'], answer: 0,
            explanation: '差+一刻+九点 (ôn lại 差 vừa học trong bài này).' },
        ] },
    ],
    '/lessons/hsk3-bai-8.html': [
      { point: '「又」và「再」— hai cách nói LẠI',
        items: [
          { context: 'Hoàn thành câu: tuần trước tôi mua một cái quần, hôm qua lại mua thêm một cái.',
            pre: '上个星期我买了一条裤子，昨天', blank: '又', post: '买了一条。', options: ['又', '再', '还'], answer: 0,
            explanation: '又 dùng cho hành động ĐÃ lặp lại (mua rồi).' },
          { context: 'Hoàn thành câu: bạn chỉ ăn một chút cơm thôi, ăn thêm chút nữa đi.',
            pre: '你只吃了一点儿饭，', blank: '再', post: '吃一点儿吧。', options: ['再', '又', '就'], answer: 0,
            explanation: '再 dùng cho hành động CHƯA xảy ra (lời đề nghị).' },
          { context: 'Chọn từ đúng: hôm nay chúng ta lại thi không tốt rồi.',
            pre: '我们今天', blank: '又', post: '没考好。', options: ['又', '再', '才'], answer: 0,
            explanation: '又 diễn tả việc ĐÃ xảy ra một lần nữa.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我昨天看了一个电影，今天再看了一个。', isCorrect: false, correctVersion: '我昨天看了一个电影，今天又看了一个。',
            explanation: '再 chỉ dùng cho hành động CHƯA xảy ra; ở đây "hôm nay xem" là việc đã xảy ra rồi nên phải dùng 又.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '家里只有一个面包了，我们再买一些吧。', isCorrect: true,
            explanation: 'Câu đúng: 再 dùng cho đề nghị về việc CHƯA xảy ra (ôn lại 面包 đã học ở Bài 1).' },
          { type: 'sort', context: 'Sắp xếp câu: hôm qua đi xem thử, hôm nay lại đi xem tiếp.',
            words: ['昨天', '去', '看', '了', '看', '，', '今天', '又', '去', '看', '了', '看', '。'], answer: '昨天去看了看，今天又去看了看。',
            explanation: '又 diễn tả hành động đã lặp lại (ôn lại chủ đề bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: căn phòng đó tôi hôm qua đi rồi, ngày mai vẫn muốn đi lại một lần nữa.',
            words: ['那个', '饭馆', '我', '昨天', '去', '了', '一次', '，', '明天', '还', '想', '再', '去', '一次', '。'], answer: '那个饭馆我昨天去了一次，明天还想再去一次。',
            explanation: '再 diễn tả dự định lặp lại trong tương lai.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 又 (hành động đã lặp lại).',
            promptLang: 'vi', prompt: 'Con trai tôi lại thi không tốt, thật lo quá.',
            answer: '我儿子又没考好，真着急！', answerPy: 'Wǒ érzi yòu méi kǎohǎo, zhēn zháojí!',
            explanation: '又 diễn tả việc thi không tốt ĐÃ lặp lại (ôn lại 着急 đã học ở Bài 1).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 再 (hành động chưa xảy ra).',
            promptLang: 'vi', prompt: 'Nếu bạn không hài lòng thì chúng ta đi xem nhà khác đi.',
            answer: '如果你不满意，我们就再去看看别的房子吧。', answerPy: 'Rúguǒ nǐ bù mǎnyì, wǒmen jiù zài qù kànkan biéde fángzi ba.',
            explanation: '再 diễn tả đề nghị về việc chưa xảy ra.' },
          { context: 'Chọn từ đúng: hôm qua đi xem thử, hôm nay lại đi xem tiếp, ngày mai còn định đi xem nữa.',
            pre: '昨天去看了看，今天', blank: '又', post: '去看了看，明天还要再去看看。', options: ['又', '再', '也'], answer: 0,
            explanation: '又 diễn tả việc đã xảy ra (hôm nay), khác với 再 diễn tả việc chưa xảy ra (ngày mai) trong cùng câu.' },
        ] },
      { point: 'Đại từ nghi vấn dùng linh hoạt: 「疑问代词 + 就 + 疑问代词」',
        items: [
          { context: 'Hoàn thành câu: thứ gì rẻ thì tôi mua thứ đó.',
            pre: '什么东西便宜我', blank: '就', post: '买什么。', options: ['就', '才', '也'], answer: 0,
            explanation: '就 đứng giữa hai đại từ nghi vấn giống nhau (什么…什么) diễn tả đối tượng không xác định.' },
          { context: 'Hoàn thành câu: ngày nào bạn rảnh thì đến nhà tôi ngày đó.',
            pre: '你哪天有时间', blank: '就', post: '哪天来我家吧。', options: ['就', '才', '还'], answer: 0,
            explanation: '就 nối hai đại từ nghi vấn giống nhau (哪天…哪天).' },
          { context: 'Chọn từ đúng: bạn ngồi đâu tôi ngồi đó.',
            pre: '你坐哪儿我', blank: '就', post: '坐哪儿。', options: ['就', '才', '也'], answer: 0,
            explanation: 'Chủ ngữ thứ hai (我) đặt trước 就 vì hai mệnh đề có chủ ngữ khác nhau (你/我).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '想吃什么吃就什么。', isCorrect: false, correctVersion: '想吃什么就吃什么。',
            explanation: '就 phải đứng ngay trước động từ thứ hai (吃), không chen vào giữa động từ và tân ngữ nghi vấn.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你喝什么我就喝什么。', isCorrect: true,
            explanation: 'Câu đúng: chủ ngữ khác nhau (你/我), chủ ngữ thứ hai đặt trước 就.' },
          { type: 'sort', context: 'Sắp xếp câu: bạn ngồi đâu tôi ngồi đó.',
            words: ['你', '坐', '哪儿', '我', '就', '坐', '哪儿', '。'], answer: '你坐哪儿我就坐哪儿。',
            explanation: '疑问代词+就+疑问代词 diễn tả sự tùy ý theo người kia (điểm ngữ pháp bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi muốn ăn gì thì làm đó, muốn ăn bao nhiêu thì làm bấy nhiêu.',
            words: ['我', '想', '吃', '什么', '就', '做', '什么', '，', '想', '吃', '多少', '就', '做', '多少', '。'], answer: '我想吃什么就做什么，想吃多少就做多少。',
            explanation: 'Hai cặp đại từ nghi vấn 什么…什么 và 多少…多少 lặp lại cấu trúc.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 疑问代词+就+疑问代词.',
            promptLang: 'vi', prompt: 'Bạn muốn ngồi đâu thì tôi ngồi đó.',
            answer: '你想坐哪儿我就坐哪儿。', answerPy: 'Nǐ xiǎng zuò nǎr wǒ jiù zuò nǎr.',
            explanation: '哪儿…哪儿 diễn tả vị trí không xác định, tùy theo người kia chọn.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Ai thích cô ấy thì cô ấy thích lại người đó.',
            answer: '谁喜欢她，她就喜欢谁。', answerPy: 'Shéi xǐhuan tā, tā jiù xǐhuan shéi.',
            explanation: 'Chủ ngữ khác nhau (谁/她), chủ ngữ thứ hai (她) đặt trước 就.' },
          { context: 'Chọn từ đúng: bạn uống gì mình uống đó.',
            pre: '你喝什么我', blank: '就', post: '喝什么。', options: ['就', '才', '还'], answer: 0,
            explanation: '就 nối hai đại từ nghi vấn giống nhau (什么…什么), chủ ngữ thứ hai (我) đặt trước 就.' },
        ] },
    ],
    '/lessons/hsk3-bai-9.html': [
      { point: '「越A越B」— B thay đổi theo A',
        items: [
          { context: 'Hoàn thành câu: mưa càng rơi càng to.',
            pre: '雨', blank: '越下越大', post: '。', options: ['越下越大', '下越越大', '越越下大'], answer: 0,
            explanation: '越+A(下)+越+B(大): 越 đặt ngay trước mỗi động từ/tính từ.' },
          { context: 'Hoàn thành câu: tiếng Trung của bạn càng nói càng giỏi.',
            pre: '你的中文', blank: '越说越好', post: '了。', options: ['越说越好', '说越好越', '越越说好'], answer: 0,
            explanation: '越A越B diễn tả B thay đổi theo sự biến đổi của A.' },
          { context: 'Chọn từ đúng: núi càng cao, đường càng khó đi.',
            pre: '山越高，路', blank: '越难走', post: '。', options: ['越难走', '难越走', '越走难'], answer: 0,
            explanation: '越+A(高)，越+B(难走): hai vế đều mang cấu trúc 越+tính từ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '休息越多，好越快。', isCorrect: false, correctVersion: '休息得越多，好得越快。',
            explanation: 'Khi động từ/tính từ mang bổ ngữ trình độ (休息得, 好得), phải giữ 得 trước khi thêm 越……越……' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你总是吃甜的东西，会越吃越胖。', isCorrect: true,
            explanation: 'Câu đúng: 越吃越胖 diễn tả mức độ béo tăng theo hành động ăn.' },
          { type: 'sort', context: 'Sắp xếp câu: núi càng cao, đường càng khó đi.',
            words: ['山', '越', '高', '，', '路', '越', '难走', '。'], answer: '山越高，路越难走。',
            explanation: '越A越B với hai vế song song (ôn lại chủ đề bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: chỉ cần bạn nghỉ ngơi nhiều thì sẽ khỏi nhanh hơn.',
            words: ['只要', '你', '多', '休息', '，', '就', '会', '好', '得', '更', '快', '。'], answer: '只要你多休息，就会好得更快。',
            explanation: '只要……就…… kết hợp cấu trúc 得+更+tính từ (ôn lại 更 đã học ở Bài 6).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 越A越B.',
            promptLang: 'vi', prompt: 'Tiếng Trung của bạn ngày càng nói giỏi rồi!',
            answer: '你的中文越说越好了！', answerPy: 'Nǐ de Zhōngwén yuè shuō yuè hǎo le!',
            explanation: '越说越好 diễn tả mức độ tăng dần theo hành động nói.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Núi càng cao, không khí càng lạnh.',
            answer: '山越高，空气越冷。', answerPy: 'Shān yuè gāo, kōngqì yuè lěng.',
            explanation: '越A越B với A và B là hai tính từ khác nhau.' },
          { context: 'Chọn từ đúng: cuốn sách này viết hay thật, càng đọc càng thú vị.',
            pre: '这本书写得真不错，', blank: '越看越有意思', post: '，你也看看吧。', options: ['越看越有意思', '看越有意思越', '越越看有意思'], answer: 0,
            explanation: '越看越有意思 diễn tả mức độ hứng thú tăng theo hành động đọc.' },
        ] },
      { point: 'Câu so sánh bằng: 「A 跟 B 一样 (+tính từ)」',
        items: [
          { context: 'Hoàn thành câu: cuốn sách này giống cuốn sách kia.',
            pre: '这本书', blank: '跟', post: '那本书一样。', options: ['跟', '比', '对'], answer: 0,
            explanation: 'Cấu trúc A跟B一样 dùng giới từ 跟 để nối hai đối tượng so sánh.' },
          { context: 'Hoàn thành câu: con trai cao bằng bố.',
            pre: '儿子跟爸爸', blank: '一样高', post: '。', options: ['一样高', '高一样', '一样的高'], answer: 0,
            explanation: 'Tính từ (高) đặt ngay sau 一样 để chỉ rõ khía cạnh so sánh.' },
          { context: 'Chọn từ đúng: màu xe này khác với xe kia.',
            pre: '这辆车的颜色跟那辆车', blank: '不一样', post: '。', options: ['不一样', '不太一样也', '一样不'], answer: 0,
            explanation: 'Phủ định của 一样 là thêm 不 vào TRƯỚC 一样.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '她的汉语说得中国人一样好跟。', isCorrect: false, correctVersion: '她的汉语说得跟中国人一样好。',
            explanation: '跟+B phải đứng ngay trước 一样, không đặt 跟 ở cuối câu.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这条裤子的颜色跟那条一样。', isCorrect: true,
            explanation: 'Câu đúng: A跟B一样 diễn tả so sánh bằng (ôn lại 裤子 đã học ở Bài 3).' },
          { type: 'sort', context: 'Sắp xếp câu: tiếng Trung cô ấy nói hay như người Trung Quốc vậy.',
            words: ['她', '的', '汉语', '说得', '跟', '中国人', '一样', '好', '。'], answer: '她的汉语说得跟中国人一样好。',
            explanation: 'A(她的汉语)跟B(中国人)一样+tính từ(好) (ôn lại chủ đề bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: tuy hai cái áo sơ mi này giá tiền giống nhau nhưng chất lượng khác nhau.',
            words: ['虽然', '这', '两', '件', '衬衫', '价钱', '一样', '，', '但是', '质量', '不', '一样', '。'], answer: '虽然这两件衬衫价钱一样，但是质量不一样。',
            explanation: '虽然……但是…… kết hợp 一样/不一样 (ôn lại 衬衫 đã học ở Bài 3).' },
          { type: 'translate', context: 'Dịch câu sau, dùng A跟B一样(+tính từ).',
            promptLang: 'vi', prompt: 'Chiếc quần này màu sắc giống với chiếc kia.',
            answer: '这条裤子的颜色跟那条一样。', answerPy: 'Zhè tiáo kùzi de yánsè gēn nà tiáo yíyàng.',
            explanation: '跟+B+一样 diễn tả so sánh bằng (ôn lại 裤子 đã học ở Bài 3).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Giáo viên tiếng Trung của chúng tôi nói tiếng Anh cũng giỏi như người Mỹ vậy.',
            answer: '我们的汉语老师说英语说得跟美国人一样好。', answerPy: 'Wǒmen de Hànyǔ lǎoshī shuō Yīngyǔ shuō de gēn Měiguórén yíyàng hǎo.',
            explanation: 'V得+跟+B+一样+tính từ diễn tả mức độ làm việc gì đó bằng ai.' },
          { context: 'Chọn từ đúng: cá mẹ nấu ngày càng ngon, ngon như ngoài quán vậy.',
            pre: '你的鱼越做越好，', blank: '跟', post: '饭馆的一样好吃。', options: ['跟', '对', '比'], answer: 0,
            explanation: '跟+B+一样+tính từ diễn tả so sánh bằng (ôn lại 一样 vừa học trong bài này).' },
        ] },
    ],
    '/lessons/hsk3-bai-10.html': [
      { point: 'Câu so sánh (2): 「A比B + tính từ + 一点儿/一些/得多/多了」',
        items: [
          { context: 'Hoàn thành câu: Marco cao hơn mình một chút.',
            pre: '马可比我高', blank: '一点儿', post: '。', options: ['一点儿', '得多', '一样'], answer: 0,
            explanation: '一点儿 diễn tả mức chênh lệch nhỏ sau tính từ trong câu 比.' },
          { context: 'Hoàn thành câu: môn Toán khó hơn Lịch Sử nhiều.',
            pre: '数学比历史难', blank: '多了', post: '。', options: ['多了', '一点儿', '一些'], answer: 0,
            explanation: '多了 diễn tả mức chênh lệch rất lớn.' },
          { context: 'Chọn từ đúng: bài tập hôm nay nhiều hơn hôm qua rất nhiều.',
            pre: '今天的作业比昨天多', blank: '得多', post: '。', options: ['得多', '一点儿', '一样'], answer: 0,
            explanation: '得多 (sau tính từ 多) diễn tả mức chênh lệch rất lớn.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '数学比历史了难多。', isCorrect: false, correctVersion: '数学比历史难多了。',
            explanation: '"多了" phải đặt liền sau tính từ (难), không tách rời hoặc đảo vị trí với 了.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '学校里边的没有学校外边的那么安静。', isCorrect: true,
            explanation: 'Câu đúng: dạng phủ định "A没有B(那么)+tính từ" (ôn lại 安静 đã học ở Bài 8).' },
          { type: 'sort', context: 'Sắp xếp câu: mình thấy môn Toán khó hơn Lịch Sử nhiều.',
            words: ['我', '觉得', '数学', '比', '历史', '难', '多', '了', '。'], answer: '我觉得数学比历史难多了。',
            explanation: 'A比B+tính từ+多了 (ôn lại chủ đề bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: giờ này, đi xe đạp nhanh hơn nhiều so với đi xe buýt.',
            words: ['这个', '时间', '，', '骑车', '比', '坐', '公共汽车', '快', '得', '多', '。'], answer: '这个时间，骑车比坐公共汽车快得多。',
            explanation: 'A比B+tính từ+得多 diễn tả mức chênh lệch rất lớn (ôn lại 骑 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng A比B+tính từ+一点儿.',
            promptLang: 'vi', prompt: 'Marco cao hơn mình một chút.',
            answer: '马可比我高一点儿。', answerPy: 'Mǎkě bǐ wǒ gāo yìdiǎnr.',
            explanation: 'A比B+tính từ+一点儿 diễn tả mức chênh lệch nhỏ.' },
          { type: 'translate', context: 'Dịch câu sau, dùng A没有B(那么)+tính từ.',
            promptLang: 'vi', prompt: 'Bên trong trường không yên tĩnh bằng bên ngoài trường.',
            answer: '学校里边的没有学校外边的那么安静。', answerPy: 'Xuéxiào lǐbian de méiyǒu xuéxiào wàibian de nàme ānjìng.',
            explanation: 'A没有B那么+tính từ diễn tả phủ định của so sánh.' },
          { context: 'Chọn từ đúng: chiếc xe này rẻ hơn chiếc kia hai ba trăm đồng.',
            pre: '这辆车比那辆便宜', blank: '两三百块钱', post: '。', options: ['两三百块钱', '得多两三百', '一点儿两三百'], answer: 0,
            explanation: 'A比B便宜+số tiền cụ thể diễn tả mức chênh lệch chính xác.' },
        ] },
      { point: 'Cách diễn tả số ước lượng: hai số liên tiếp ghép lại',
        items: [
          { context: 'Hoàn thành câu: mỗi ngày chúng ta học một hai tiếng thôi.',
            pre: '我们每天学', blank: '一两个', post: '小时吧。', options: ['一两个', '两一个', '一个两'], answer: 0,
            explanation: 'Số ước lượng ghép hai số liên tiếp theo thứ tự tăng dần: 一两 (không phải 两一).' },
          { context: 'Hoàn thành câu: gần đó có ba bốn trạm xe.',
            pre: '附近有', blank: '三四个', post: '车站。', options: ['三四个', '个三四', '三四车站个'], answer: 0,
            explanation: 'Số ước lượng (三四) đứng TRƯỚC lượng từ (个): [số]+lượng từ+danh từ.' },
          { context: 'Chọn từ đúng: đi xe đạp bảy tám phút là đến được.',
            pre: '骑车', blank: '七八', post: '分钟就能到。', options: ['七八', '八七', '七八九'], answer: 0,
            explanation: 'Số ước lượng hai số liên tiếp theo thứ tự tăng dần (七八).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们每天学两一个小时吧。', isCorrect: false, correctVersion: '我们每天学一两个小时吧。',
            explanation: 'Số ước lượng phải theo đúng thứ tự tăng dần (一两), không phải 两一.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你都喝了三四杯咖啡了，别再喝了！', isCorrect: true,
            explanation: 'Câu đúng: 三四杯 = số ước lượng đúng thứ tự.' },
          { type: 'sort', context: 'Sắp xếp câu: gần đó có ba bốn trạm xe.',
            words: ['附近', '有', '三四', '个', '车站', '。'], answer: '附近有三四个车站。',
            explanation: '[số ước lượng]+lượng từ+danh từ (ôn lại 附近 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: bạn đổi bốn năm chiếc rồi nhỉ?',
            words: ['你', '已经', '换', '了', '四五', '辆', '了', '吧', '？'], answer: '你已经换了四五辆了吧？',
            explanation: '四五辆 = số ước lượng làm bổ ngữ số lượng (ôn lại 换 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng số ước lượng.',
            promptLang: 'vi', prompt: 'Mỗi ngày chúng ta học một hai tiếng thôi.',
            answer: '我们每天学一两个小时吧。', answerPy: 'Wǒmen měitiān xué yì-liǎng ge xiǎoshí ba.',
            explanation: '一两个 = số ước lượng ghép hai số liên tiếp.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Gần đó có ba bốn trạm xe.',
            answer: '附近有三四个车站。', answerPy: 'Fùjìn yǒu sān-sì ge chēzhàn.',
            explanation: '三四个 = số ước lượng (ôn lại 附近 đã học trong bài này).' },
          { context: 'Chọn từ đúng: con trai tôi cao hơn tôi rồi, thật ra nó chỉ mười bảy mười tám tuổi thôi.',
            pre: '我儿子比我高了，其实他才', blank: '十七八', post: '岁。', options: ['十七八', '十八七', '十七十八'], answer: 0,
            explanation: '十七八岁 = số ước lượng ghép hai số liên tiếp (17, 18).' },
        ] },
    ],
    '/lessons/hsk3-bai-11.html': [
      { point: 'Câu chữ 「把」(1): 「A 把 B + động từ + ……」',
        items: [
          { context: 'Hoàn thành câu: giúp mình trả quyển từ điển này nhé.',
            pre: '帮我', blank: '把这本词典还了', post: '吧。', options: ['把这本词典还了', '这本词典把还了', '还了把这本词典'], answer: 0,
            explanation: '把+B(这本词典)+động từ(还) phải đứng liền nhau theo đúng thứ tự.' },
          { context: 'Hoàn thành câu: nhớ tắt đèn nhé.',
            pre: '记得', blank: '把灯关了', post: '。', options: ['把灯关了', '灯把关了', '关了把灯'], answer: 0,
            explanation: '把+B(灯)+động từ(关) diễn tả hành động xử lý sự vật xác định.' },
          { context: 'Chọn từ đúng: bạn đừng quên điện thoại nhé.',
            pre: '你', blank: '别把', post: '手机忘了。', options: ['别把', '把别', '不把'], answer: 0,
            explanation: 'Phó từ phủ định (别) phải đặt TRƯỚC từ 把.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我把电脑不能给你。', isCorrect: false, correctVersion: '我不能把电脑给你。',
            explanation: 'Động từ năng nguyện (不能) phải đặt TRƯỚC từ 把, không đặt sau.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我把爸爸的生日忘了。', isCorrect: true,
            explanation: 'Câu đúng: 把+B(生日)+动词(忘)+了 diễn tả sự việc bị quên.' },
          { type: 'sort', context: 'Sắp xếp câu: giúp mình trả quyển từ điển này nhé.',
            words: ['帮', '我', '把', '这', '本', '词典', '还', '了', '吧', '。'], answer: '帮我把这本词典还了吧。',
            explanation: '把字句: A(帮我)+把+B(这本词典)+động từ(还) (ôn lại 词典 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: sau khi họp xong, đừng quên tắt máy điều hòa nhé.',
            words: ['会议', '结束', '后', '，', '别', '忘记', '把', '空调', '关', '了', '。'], answer: '会议结束后，别忘记把空调关了。',
            explanation: '别忘记+把+B(空调)+动词(关) (ôn lại 会议/空调 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 把字句.',
            promptLang: 'vi', prompt: 'Con quên mất sinh nhật bố rồi.',
            answer: '我把爸爸的生日忘了。', answerPy: 'Wǒ bǎ bàba de shēngrì wàng le.',
            explanation: '把+B(生日)+动词(忘)+了 diễn tả sự việc bị quên.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Xin lỗi, tôi quên mất chuyện đó rồi.',
            answer: '对不起，我把那件事忘了。', answerPy: 'Duìbuqǐ, wǒ bǎ nà jiàn shì wàng le.',
            explanation: '把字句 diễn tả sự việc bị quên.' },
          { context: 'Chọn từ đúng: sau khi họp xong, đừng quên tắt máy điều hòa nhé.',
            pre: '会议结束后，', blank: '别忘记把', post: '空调关了。', options: ['别忘记把', '把别忘记', '忘记别把'], answer: 0,
            explanation: '别忘记 đứng trước 把字句 (ôn lại 忘记 đã học trong bài này).' },
        ] },
      { point: 'Cách diễn tả số ước lượng (2): 「左右」',
        items: [
          { context: 'Hoàn thành câu: cuối tuần tôi thường dậy khoảng 10 giờ.',
            pre: '周末我一般十点', blank: '左右', post: '起床。', options: ['左右', '一两', '三四'], answer: 0,
            explanation: '左右 đặt SAU con số cụ thể để diễn tả số ước lượng.' },
          { context: 'Hoàn thành câu: công ty chúng tôi có khoảng năm trăm người.',
            pre: '我们公司有五百人', blank: '左右', post: '。', options: ['左右', '一些', '一点儿'], answer: 0,
            explanation: '五百人左右 = số ước lượng, không chính xác tuyệt đối.' },
          { context: 'Chọn từ đúng: giám đốc Vương khoảng 2 giờ có gọi điện đến.',
            pre: '王经理两点', blank: '左右', post: '来了个电话。', options: ['左右', '一两', '多了'], answer: 0,
            explanation: '两点左右 = khoảng 2 giờ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这个笔记本电脑左右要五千块。', isCorrect: false, correctVersion: '这个笔记本电脑要五千块左右。',
            explanation: '左右 phải đặt SAU con số cụ thể (五千块左右), không đặt trước.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们公司有五百人左右。', isCorrect: true,
            explanation: 'Câu đúng: 五百人左右 = số ước lượng đúng vị trí.' },
          { type: 'sort', context: 'Sắp xếp câu: chiếc máy tính xách tay này khi tôi mua năm ngoái giá khoảng năm nghìn đồng.',
            words: ['这个', '笔记本', '电脑', '我', '去年', '买', '的', '时候', '要', '五千', '块', '左右', '。'], answer: '这个笔记本电脑我去年买的时候要五千块左右。',
            explanation: '五千块左右 = số ước lượng (ôn lại 笔记本电脑 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: giám đốc Chu khoảng 3 giờ sẽ đến công ty.',
            words: ['周', '经理', '三点', '左右', '会', '到', '公司', '。'], answer: '周经理三点左右会到公司。',
            explanation: '三点左右 = số ước lượng về thời gian.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 左右.',
            promptLang: 'vi', prompt: 'Giám đốc Chu khoảng 3 giờ sẽ đến công ty.',
            answer: '周经理三点左右会到公司。', answerPy: 'Zhōu jīnglǐ sān diǎn zuǒyòu huì dào gōngsī.',
            explanation: '三点左右 = số ước lượng.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chiếc máy tính xách tay đó cô ấy mua năm ngoái với giá khoảng tám nghìn đồng.',
            answer: '那个笔记本电脑她去年买的时候要八千块左右。', answerPy: 'Nàge bǐjìběn diànnǎo tā qùnián mǎi de shíhou yào bāqiān kuài zuǒyòu.',
            explanation: '八千块左右 = số ước lượng (ôn lại 笔记本电脑 đã học trong bài này).' },
          { context: 'Chọn từ đúng: hội thao khi nào kết thúc? Khoảng 5 giờ thôi.',
            pre: '运动会什么时候结束？五点', blank: '左右', post: '吧。', options: ['左右', '一点儿', '一些'], answer: 0,
            explanation: '五点左右 = số ước lượng (ôn lại 结束 đã học trong bài này).' },
        ] },
    ],
    '/lessons/hsk3-bai-12.html': [
      { point: 'Phân biệt 「才」và 「就」trước động từ',
        items: [
          { context: 'Hoàn thành câu: tôi sáng nay năm giờ đã dậy rồi (cảm thấy sớm).',
            pre: '我早上五点', blank: '就起床了', post: '。', options: ['就起床了', '才起床了', '起床就了'], answer: 0,
            explanation: '就 diễn tả hành động xảy ra SỚM, NHANH theo cảm nhận người nói.' },
          { context: 'Hoàn thành câu: tám giờ vào học, cậu ấy chín giờ mới dậy (cảm thấy muộn).',
            pre: '八点上课，他九点', blank: '才起床', post: '。', options: ['才起床', '就起床', '起床才'], answer: 0,
            explanation: '才 diễn tả hành động xảy ra MUỘN, CHẬM theo cảm nhận người nói.' },
          { context: 'Chọn từ đúng: sao anh đi ngủ sớm thế?',
            pre: '你怎么这么早', blank: '就要', post: '睡觉了？', options: ['就要', '才要', '要就'], answer: 0,
            explanation: '就 đứng ngay trước động từ, diễn tả việc xảy ra sớm hơn bình thường.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我早上五点起床就了。', isCorrect: false, correctVersion: '我早上五点就起床了。',
            explanation: '就 phải đứng NGAY TRƯỚC động từ, không tách rời hoặc đặt sau 了.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '来机场的路上我才发现忘带护照了。', isCorrect: true,
            explanation: 'Câu đúng: 才 đứng trước động từ 发现, diễn tả việc phát hiện muộn.' },
          { type: 'sort', context: 'Sắp xếp câu: ngồi máy bay một tiếng là đến rồi.',
            words: ['坐', '飞机', '一个', '小时', '就', '到', '了', '。'], answer: '坐飞机一个小时就到了。',
            explanation: '就 diễn tả hành động xảy ra nhanh (ôn lại 飞机 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: trên đường ra sân bay em mới phát hiện quên mang hộ chiếu.',
            words: ['来', '机场', '的', '路上', '我', '才', '发现', '忘', '带', '护照', '了', '。'], answer: '来机场的路上我才发现忘带护照了。',
            explanation: '才 diễn tả hành động xảy ra muộn (ôn lại 护照 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 就.',
            promptLang: 'vi', prompt: 'Mười phút nữa tôi đến ngay.',
            answer: '我十分钟就到。', answerPy: 'Wǒ shí fēnzhōng jiù dào.',
            explanation: '就 diễn tả hành động xảy ra nhanh, thuận lợi.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 才.',
            promptLang: 'vi', prompt: 'Em trai ba tiếng mới làm xong bài tập.',
            answer: '弟弟三个小时才做完作业。', answerPy: 'Dìdi sān ge xiǎoshí cái zuòwán zuòyè.',
            explanation: '才 diễn tả hành động xảy ra chậm, không thuận lợi.' },
          { context: 'Chọn từ đúng: máy bay sắp cất cánh rồi, nhanh lên đi.',
            pre: '飞机', blank: '就要起飞了', post: '，快点吧。', options: ['就要起飞了', '才要起飞了', '要起飞就了'], answer: 0,
            explanation: '就要……了 diễn tả sự việc sắp xảy ra (ôn lại 起飞 đã học trong bài này).' },
        ] },
      { point: 'Câu chữ 「把」(2): 「A 把 B + động từ + 在/到/给……」',
        items: [
          { context: 'Hoàn thành câu: em đã để ảnh của em vào túi của anh rồi đấy.',
            pre: '我已经', blank: '把我的照片放在', post: '你的包里了。', options: ['把我的照片放在', '我的照片把放在', '放在把我的照片'], answer: 0,
            explanation: '把+B(照片)+động từ(放)+在+vị trí phải đúng thứ tự, không đảo lộn.' },
          { context: 'Hoàn thành câu: vậy em giúp anh xếp quần áo vào vali nhé.',
            pre: '那我帮你', blank: '把衣服放到', post: '行李箱里吧。', options: ['把衣服放到', '衣服把放到', '放到把衣服'], answer: 0,
            explanation: '把+B(衣服)+động từ(放)+到+vị trí (ôn lại 行李箱 đã học trong bài này).' },
          { context: 'Chọn từ đúng: bạn tôi cho tôi mượn sách rồi.',
            pre: '我朋友', blank: '把书借给', post: '我了。', options: ['把书借给', '把书给借', '书把借给'], answer: 0,
            explanation: '把+B(书)+động từ(借)+给+người diễn tả chuyển giao sự vật cho người khác.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我把照片你的包在放了。', isCorrect: false, correctVersion: '我把照片放在你的包里了。',
            explanation: 'Động từ (放) phải đứng NGAY SAU 把+B(照片), trước 在+vị trí, không đảo ngược.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '司机把我送到机场了。', isCorrect: true,
            explanation: 'Câu đúng: 把+B(我)+动词(送)+到+vị trí(机场) đúng cấu trúc.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi thấy cậu nên để những đồ quan trọng ở chỗ tôi thì hơn.',
            words: ['我', '看', '你', '还是', '把', '重要', '的', '东西', '放在', '我', '这儿', '吧', '。'], answer: '我看你还是把重要的东西放在我这儿吧。',
            explanation: '把+B(东西)+động từ(放)+在+vị trí (điểm ngữ pháp trọng tâm bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi viết những đồ học sinh cần mang lên bảng.',
            words: ['我', '把', '学生', '需要', '带', '的', '东西', '写在', '黑板', '上', '。'], answer: '我把学生需要带的东西写在黑板上。',
            explanation: '把+B(东西)+động từ(写)+在+vị trí (ôn lại 需要/黑板 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 把字句.',
            promptLang: 'vi', prompt: 'Bạn để hộ chiếu trong vali rồi à?',
            answer: '你把护照放在行李箱里了吗？', answerPy: 'Nǐ bǎ hùzhào fàng zài xínglixiāng li le ma?',
            explanation: '把+B(护照)+động từ(放)+在+vị trí (ôn lại 护照/行李箱 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Tài xế đưa tôi đến sân bay rồi.',
            answer: '司机把我送到机场了。', answerPy: 'Sījī bǎ wǒ sòngdào jīchǎng le.',
            explanation: '把+B(我)+động từ(送)+到+vị trí (ôn lại 司机 đã học trong bài này).' },
          { context: 'Chọn từ đúng: em trai không trả tiền lại cho anh trai.',
            pre: '弟弟没', blank: '把钱还给', post: '哥哥。', options: ['把钱还给', '钱把还给', '还给把钱'], answer: 0,
            explanation: 'Phó từ phủ định (没) đặt TRƯỚC 把; 把+B(钱)+động từ(还)+给+người.' },
        ] },
    ],
    '/lessons/hsk3-bai-13.html': [
      { point: 'Bổ ngữ chỉ phương hướng dạng kết hợp (复合趋向补语)',
        items: [
          { context: 'Hoàn thành câu: thầy giáo lấy ra một quyển sách.',
            pre: '老师', blank: '拿出一本书来', post: '。', options: ['拿出一本书来', '拿一本书出来去', '出来拿一本书'], answer: 0,
            explanation: 'V(拿)+趋向1(出)+Sự vật(一本书)+来 — tân ngữ sự vật có thể đặt giữa 出 và 来.' },
          { context: 'Hoàn thành câu: con chó nhỏ chạy ra khỏi phòng.',
            pre: '小狗从房间', blank: '跑出来', post: '。', options: ['跑出来', '出来跑', '跑来出'], answer: 0,
            explanation: '跑+出来 = bổ ngữ xu hướng kép diễn tả hướng ra ngoài.' },
          { context: 'Chọn từ đúng: thầy giáo đi vào lớp học.',
            pre: '老师走进', blank: '教室来', post: '。', options: ['教室来', '来教室', '教室'], answer: 0,
            explanation: 'Khi tân ngữ là NƠI CHỐN (教室), phải đặt TRƯỚC 来/去, không đặt sau.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '老师走进来教室。', isCorrect: false, correctVersion: '老师走进教室来。',
            explanation: 'Tân ngữ nơi chốn (教室) phải đặt TRƯỚC 来, không đặt sau 来.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '哥哥买回来一个西瓜。', isCorrect: true,
            explanation: 'Câu đúng: tân ngữ sự vật (西瓜) có thể đặt SAU cả cụm 回来.' },
          { type: 'sort', context: 'Sắp xếp câu: ngồi lâu còn có thể đứng dậy nghỉ một lát.',
            words: ['坐', '久', '了', '还', '可以', '站', '起来', '休息', '一会儿', '。'], answer: '坐久了还可以站起来休息一会儿。',
            explanation: '站+起来 = bổ ngữ xu hướng kép (ôn lại 起来 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: bố mang một ít quà từ nước ngoài về.',
            words: ['爸爸', '从', '国外', '带', '回来', '一些', '礼物', '。'], answer: '爸爸从国外带回来一些礼物。',
            explanation: '带+回来+Sự vật(礼物) — tân ngữ sự vật đặt sau cả cụm (ôn lại 礼物 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng bổ ngữ xu hướng kép.',
            promptLang: 'vi', prompt: 'Con chó nhỏ chạy ra khỏi phòng.',
            answer: '小狗从房间跑出来。', answerPy: 'Xiǎogǒu cóng fángjiān pǎo chulai.',
            explanation: '跑+出来 diễn tả hướng chuyển động ra ngoài.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Anh trai mua một quả dưa hấu mang về.',
            answer: '哥哥买回来一个西瓜。', answerPy: 'Gēge mǎi huilai yí ge xīguā.',
            explanation: '买+回来+Sự vật, tân ngữ đặt sau cả cụm bổ ngữ.' },
          { context: 'Chọn từ đúng: thang máy hỏng rồi, tôi trèo lên đấy.',
            pre: '电梯坏了，我是', blank: '爬上来', post: '的。', options: ['爬上来', '上来爬', '爬来上'], answer: 0,
            explanation: '爬+上来 = bổ ngữ xu hướng kép diễn tả hướng lên (ôn lại 坏 đã học trong bài này).' },
        ] },
      { point: 'Cấu trúc 「一边……一边……」',
        items: [
          { context: 'Hoàn thành câu: mẹ vừa hát vừa nấu cơm.',
            pre: '妈妈', blank: '一边唱歌一边', post: '做饭。', options: ['一边唱歌一边', '唱歌一边一边', '一边一边唱歌'], answer: 0,
            explanation: '一边 phải đứng NGAY TRƯỚC mỗi động từ (唱歌/做饭), đủ cả hai lần.' },
          { context: 'Hoàn thành câu: thầy giáo vừa nói vừa cười.',
            pre: '老师', blank: '边说边笑', post: '。', options: ['边说边笑', '说边笑边', '边边说笑'], answer: 0,
            explanation: '边……边…… là dạng lược bỏ 一 của 一边……一边…….' },
          { context: 'Chọn từ đúng: chồng tôi thích vừa ăn sáng vừa đọc báo.',
            pre: '我丈夫喜欢', blank: '一边吃早饭一边', post: '看报纸。', options: ['一边吃早饭一边', '吃早饭一边一边', '一边一边吃早饭'], answer: 0,
            explanation: '一边+V1+一边+V2, hai hành động do CÙNG một chủ thể thực hiện.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '妈妈一边唱歌做饭。', isCorrect: false, correctVersion: '妈妈一边唱歌一边做饭。',
            explanation: 'Cấu trúc 一边……一边…… cần đủ CẢ HAI 一边, không được bỏ một bên.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '是啊，一边喝咖啡一边说了些过去的事。', isCorrect: true,
            explanation: 'Câu đúng: 一边+喝咖啡+一边+说了些过去的事 diễn tả hai hành động đồng thời.' },
          { type: 'sort', context: 'Sắp xếp câu: có thể vừa ăn vừa xem.',
            words: ['可以', '一边', '吃', '一边', '看', '。'], answer: '可以一边吃一边看。',
            explanation: '一边+V1+一边+V2 diễn tả hai hành động cùng lúc (điểm ngữ pháp trọng tâm bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: Tiểu Lệ và bạn học cũ vừa uống cà phê vừa trò chuyện.',
            words: ['小丽', '和', '老同学', '边', '喝', '咖啡', '边', '聊天儿', '。'], answer: '小丽和老同学边喝咖啡边聊天儿。',
            explanation: '边……边…… (ôn lại 老同学/遇到 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 一边……一边……',
            promptLang: 'vi', prompt: 'Mẹ vừa hát vừa nấu cơm.',
            answer: '妈妈一边唱歌一边做饭。', answerPy: 'Māma yìbiān chànggē yìbiān zuò fàn.',
            explanation: '一边+V1+一边+V2 diễn tả hai hành động đồng thời.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Thầy giáo vừa nói vừa cười.',
            answer: '老师边说边笑。', answerPy: 'Lǎoshī biān shuō biān xiào.',
            explanation: '边……边…… là dạng lược bỏ 一 của 一边……一边…….' },
          { context: 'Chọn từ đúng: đúng vậy, vừa uống cà phê vừa nói chuyện xưa.',
            pre: '是啊，', blank: '一边喝咖啡一边', post: '说了些过去的事。', options: ['一边喝咖啡一边', '喝咖啡一边一边', '一边一边喝咖啡'], answer: 0,
            explanation: '一边……一边…… (ôn lại 过去 đã học trong bài này).' },
        ] },
    ],
    '/lessons/hsk3-bai-14.html': [
      { point: 'Câu chữ 「把」(3): 「A 把 B + động từ + bổ ngữ kết quả/xu hướng」',
        items: [
          { context: 'Hoàn thành câu: tôi giặt quần áo sạch sẽ rồi.',
            pre: '我把衣服', blank: '洗干净了', post: '。', options: ['洗干净了', '洗了干净', '干净洗了'], answer: 0,
            explanation: '把+B(衣服)+动词(洗)+bổ ngữ kết quả(干净) — bổ ngữ đứng NGAY SAU động từ.' },
          { context: 'Hoàn thành câu: mẹ vẫn chưa nấu cơm xong.',
            pre: '妈妈还没', blank: '把饭做好', post: '呢。', options: ['把饭做好', '饭把做好', '把做饭好'], answer: 0,
            explanation: '把+B(饭)+动词(做)+bổ ngữ kết quả(好) diễn tả kết quả của hành động.' },
          { context: 'Chọn từ đúng: cậu hãy mang trái cây đến đây.',
            pre: '你', blank: '把水果拿过来', post: '。', options: ['把水果拿过来', '水果把拿过来', '把拿水果过来'], answer: 0,
            explanation: '把+B(水果)+动词(拿)+bổ ngữ xu hướng(过来) — thứ tự không được đảo.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我把衣服洗。', isCorrect: false, correctVersion: '我把衣服洗干净了。',
            explanation: 'Câu 把字句3 cần có bổ ngữ kết quả/xu hướng SAU động từ, không thể chỉ có động từ đơn thuần.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '请同学们把铅笔拿出来。', isCorrect: true,
            explanation: 'Câu đúng: 把+B(铅笔)+动词(拿)+bổ ngữ xu hướng(出来) đúng cấu trúc.' },
          { type: 'sort', context: 'Sắp xếp câu: sao bạn ăn hết đồ trong tủ lạnh vậy?',
            words: ['你', '怎么', '把', '冰箱', '里', '的', '东西', '都', '吃完', '了', '？'], answer: '你怎么把冰箱里的东西都吃完了？',
            explanation: '把+B(东西)+动词(吃)+bổ ngữ kết quả(完) (ôn lại 冰箱 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: bạn vặn to tiếng tivi lên một chút.',
            words: ['你', '把', '电视', '声音', '开大', '一点儿', '。'], answer: '你把电视声音开大一点儿。',
            explanation: '把+B(声音)+动词(开)+bổ ngữ kết quả(大) (ôn lại 声音 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 把字句.',
            promptLang: 'vi', prompt: 'Mời các bạn học sinh lấy bút chì ra.',
            answer: '请同学们把铅笔拿出来。', answerPy: 'Qǐng tóngxuémen bǎ qiānbǐ ná chulai.',
            explanation: '把+B(铅笔)+动词(拿)+bổ ngữ xu hướng(出来).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chúng sẽ dọn phòng sạch sẽ.',
            answer: '他们会把房间打扫干净。', answerPy: 'Tāmen huì bǎ fángjiān dǎsǎo gānjìng.',
            explanation: '把+B(房间)+动词(打扫)+bổ ngữ kết quả(干净).' },
          { context: 'Chọn từ đúng: sao đột nhiên nổi gió to thế, thổi cả ô bay mất rồi!',
            pre: '怎么突然刮大风了，', blank: '把伞都刮跑了', post: '！', options: ['把伞都刮跑了', '伞把都刮跑了', '把都伞刮跑了'], answer: 0,
            explanation: '把+B(伞)+动词(刮)+bổ ngữ kết quả(跑了) (ôn lại 刮风 đã học trong bài này).' },
        ] },
      { point: 'Cấu trúc 「先……，再/又……，然后……」',
        items: [
          { context: 'Hoàn thành câu: về nhà xong, tôi làm bài tập trước, sau đó ăn cơm.',
            pre: '回家以后，我', blank: '先做作业，然后', post: '吃饭。', options: ['先做作业，然后', '做作业先，然后', '然后先做作业'], answer: 0,
            explanation: '先……然后…… diễn tả trình tự hành động dự định.' },
          { context: 'Hoàn thành câu: tôi ngồi một tiếng xe buýt trước, lại ngồi tàu điện ngầm mới đến.',
            pre: '我先坐了一个小时公共汽车，', blank: '又坐了一会儿地铁', post: '才到小刚家。', options: ['又坐了一会儿地铁', '再坐了一会儿地铁', '先坐了一会儿地铁'], answer: 0,
            explanation: '又 diễn tả hành động ĐÃ xảy ra (quá khứ), khác với 再 (chưa xảy ra).' },
          { context: 'Chọn từ đúng: bạn xem xong chương trình tivi đã, sau đó gọi lại cho tôi.',
            pre: '你先把电视节目看完吧，', blank: '然后再', post: '给我回电话。', options: ['然后再', '再然后', '又然后'], answer: 0,
            explanation: '然后再 diễn tả hành động tiếp theo, chưa xảy ra.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '回家以后，我又做作业，然后吃饭。', isCorrect: false, correctVersion: '回家以后，我先做作业，然后吃饭。',
            explanation: '先……然后…… diễn tả trình tự dự định; 又 chỉ dùng cho hành động ĐÃ xảy ra, không phù hợp ở đây.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '先把米饭做好，然后再把新鲜的水果放进去。', isCorrect: true,
            explanation: 'Câu đúng: 先……然后再…… diễn tả trình tự các bước.' },
          { type: 'sort', context: 'Sắp xếp câu: chúng ta xem thực đơn trước đã, sau đó gọi món, được không?',
            words: ['我们', '先', '看看', '菜单', '，', '然后', '再', '点菜', '，', '好吗', '？'], answer: '我们先看看菜单，然后再点菜，好吗？',
            explanation: '先……然后再…… diễn tả trình tự hành động (ôn lại 菜单 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi rửa cốc xong trước, sau đó mới rửa đĩa.',
            words: ['我', '先', '把', '杯子', '洗完', '，', '然后', '再', '洗', '盘子', '。'], answer: '我先把杯子洗完，然后再洗盘子。',
            explanation: '先……然后再…… diễn tả trình tự hành động (ôn lại 盘子 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 先……然后……',
            promptLang: 'vi', prompt: 'Về nhà xong, tôi làm bài tập trước, sau đó ăn cơm.',
            answer: '回家以后，我先做作业，然后吃饭。', answerPy: 'Huí jiā yǐhòu, wǒ xiān zuò zuòyè, ránhòu chī fàn.',
            explanation: '先……然后…… diễn tả trình tự hành động.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Trước tiên nấu cơm xong, sau đó cho trái cây tươi vào.',
            answer: '先把米饭做好，然后再把新鲜的水果放进去。', answerPy: 'Xiān bǎ mǐfàn zuòhǎo, ránhòu zài bǎ xīnxiān de shuǐguǒ fàng jinqu.',
            explanation: '先……然后再…… diễn tả trình tự các bước.' },
          { context: 'Chọn từ đúng: chúng ta xem ghế trước, rồi xem bàn, sau đó đi ăn cơm.',
            pre: '我们', blank: '先看椅子，再看桌子，然后', post: '去吃饭。', options: ['先看椅子，再看桌子，然后', '再看椅子，先看桌子，然后', '然后看椅子，先看桌子，再'], answer: 0,
            explanation: '先……再……然后…… diễn tả trình tự nhiều bước liên tiếp.' },
        ] },
    ],
    '/lessons/hsk3-bai-15.html': [
      { point: 'Cấu trúc 「除了……以外，都/还/也……」',
        items: [
          { context: 'Hoàn thành câu: ngoài bạn Vân ra, những người khác đều đến rồi.',
            pre: '', blank: '除了小云，其他人都', post: '来了。', options: ['除了小云，其他人都', '小云除了其他人都', '其他人都除了小云'], answer: 0,
            explanation: '除了+A(小云)，其他+都+V diễn tả loại trừ một phần, các phần còn lại giống nhau.' },
          { context: 'Hoàn thành câu: ngoài hát ra, anh ấy còn thích nhảy múa.',
            pre: '', blank: '除了唱歌以外，他还', post: '喜欢跳舞。', options: ['除了唱歌以外，他还', '他除了唱歌还以外', '除了他唱歌以外还'], answer: 0,
            explanation: '除了……以外，还…… diễn tả bổ sung thêm điều khác giống với điều đã nêu.' },
          { context: 'Chọn từ đúng: ngoài Tết Nguyên đán, Tết Trung thu ra, lễ hội bia cũng là ngày lễ quan trọng.',
            pre: '', blank: '除了春节、中秋节以外，', post: '啤酒节也是这里很重要的节日。', options: ['除了春节、中秋节以外，', '春节、中秋节除了以外，', '除了以外春节、中秋节，'], answer: 0,
            explanation: '除了+A+以外，也…… diễn tả bổ sung thêm điều tương tự.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '除了这个汉字，别的汉字我不都认识。', isCorrect: false, correctVersion: '除了这个汉字以外，别的汉字我都认识。',
            explanation: 'Cấu trúc 除了……以外，都…… không đi cùng phủ định 不都; phải dùng 都 khẳng định.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '除了汉语以外，我还会说英语。', isCorrect: true,
            explanation: 'Câu đúng: 除了……以外，还…… diễn tả bổ sung thêm điều khác.' },
          { type: 'sort', context: 'Sắp xếp câu: ngoài câu này ý nghĩa hơi không rõ ràng ra, còn lại đều không có vấn đề gì.',
            words: ['除了', '这个', '句子', '意思', '有些', '不清楚', '外', '，', '其他', '都', '没', '什么', '问题', '。'], answer: '除了这个句子意思有些不清楚外，其他都没什么问题。',
            explanation: '除了……都…… diễn tả loại trừ một phần (ôn lại 句子 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: ngoài xem tin tức ra, mọi người còn có thể nghe nhạc trên mạng.',
            words: ['除了', '看', '新闻', '，', '人们', '还', '可以', '在', '网上', '听', '歌', '。'], answer: '除了看新闻，人们还可以在网上听歌。',
            explanation: '除了……还可以…… diễn tả bổ sung thêm điều khác (ôn lại 新闻 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 除了……以外.',
            promptLang: 'vi', prompt: 'Ngoài tiếng Trung ra, tôi còn biết nói tiếng Anh.',
            answer: '除了汉语以外，我还会说英语。', answerPy: 'Chúle Hànyǔ yǐwài, wǒ hái huì shuō Yīngyǔ.',
            explanation: '除了……以外，还…… diễn tả bổ sung thêm điều khác.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Ngoài bạn Vân ra, những người khác đều đến rồi.',
            answer: '除了小云，其他人都来了。', answerPy: 'Chúle Xiǎoyún, qítā rén dōu lái le.',
            explanation: '除了……都…… diễn tả loại trừ một phần.' },
          { context: 'Chọn từ đúng: ngoài mùa hè ra, tôi đều thích.',
            pre: '我啊，', blank: '除了夏天以外，我都', post: '喜欢。', options: ['除了夏天以外，我都', '我除了夏天都以外', '除了以外夏天我都'], answer: 0,
            explanation: '除了……以外，都…… diễn tả loại trừ một phần.' },
        ] },
      { point: 'Đại từ nghi vấn được sử dụng linh hoạt (2): 「什么」làm đại từ chỉ thị',
        items: [
          { context: 'Hoàn thành câu: nhà hàng này có món gì đặc biệt ngon không?',
            pre: '这个饭馆有没有', blank: '什么特别好吃的菜', post: '？', options: ['什么特别好吃的菜', '特别什么好吃的菜', '好吃的什么特别菜'], answer: 0,
            explanation: '什么 làm đại từ chỉ thị đứng trước cụm danh từ, thể hiện thái độ lịch sự hơn.' },
          { context: 'Hoàn thành câu: bạn viết tốt lắm, không có vấn đề gì.',
            pre: '你写得很好，', blank: '没什么问题', post: '。', options: ['没什么问题', '什么没问题', '没问题什么'], answer: 0,
            explanation: '没+什么+N là cấu trúc phủ định lịch sự, nghĩa không đổi khi bỏ 什么.' },
          { context: 'Chọn từ đúng: cuối tuần bạn có dự định gì không?',
            pre: '周末你有没有', blank: '什么打算', post: '？', options: ['什么打算', '打算什么', '有什么打算没'], answer: 0,
            explanation: '有没有+什么+N hỏi một cách lịch sự về sự tồn tại.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你写得很好，问题没什么。', isCorrect: false, correctVersion: '你写得很好，没什么问题。',
            explanation: '什么 làm đại từ chỉ thị phải đứng TRƯỚC danh từ (问题), theo cấu trúc 没+什么+danh từ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '以后有什么不明白的地方，可以给我打电话或者发电子邮件。', isCorrect: true,
            explanation: 'Câu đúng: 什么 làm đại từ chỉ thị trước cụm 不明白的地方.' },
          { type: 'sort', context: 'Sắp xếp câu: sau này có chỗ nào không hiểu, em có thể gọi điện cho thầy.',
            words: ['以后', '有', '什么', '不明白', '的', '地方', '，', '可以', '给', '我', '打电话', '。'], answer: '以后有什么不明白的地方，可以给我打电话。',
            explanation: '什么 làm đại từ chỉ thị (ôn lại 发 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: hôm nay báo có tin tức gì không?',
            words: ['今天', '报纸', '上', '有', '什么', '新闻', '吗', '？'], answer: '今天报纸上有什么新闻吗？',
            explanation: '什么 làm đại từ chỉ thị (ôn lại 新闻 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 什么 làm đại từ chỉ thị.',
            promptLang: 'vi', prompt: 'Bạn viết tốt lắm, không có vấn đề gì.',
            answer: '你写得很好，没什么问题。', answerPy: 'Nǐ xiě de hěn hǎo, méi shénme wèntí.',
            explanation: '没+什么+N là cấu trúc phủ định lịch sự.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Cuối tuần bạn có dự định gì không?',
            answer: '周末你有没有什么打算？', answerPy: 'Zhōumò nǐ yǒu méiyǒu shénme dǎsuàn?',
            explanation: '有没有+什么+N hỏi một cách lịch sự.' },
          { context: 'Chọn từ đúng: tôi chỉ mua vài cái áo, cái khác cũng chẳng mua gì đâu.',
            pre: '我记得我只买了几件衣服，', blank: '其他也没买什么', post: '啊。', options: ['其他也没买什么', '其他什么也没买不', '也其他没买什么'], answer: 0,
            explanation: '什么 làm đại từ chỉ thị (ôn lại 其他 đã học trong bài này).' },
        ] },
      { point: 'Cách diễn tả mức độ: 「极了」',
        items: [
          { context: 'Hoàn thành câu: con chó nhỏ của tôi đáng yêu lắm.',
            pre: '我的小狗', blank: '可爱极了', post: '。', options: ['可爱极了', '极了可爱', '可爱了极'], answer: 0,
            explanation: 'Adj(可爱) + 极了 diễn tả mức độ cao nhất, 极了 luôn đứng SAU tính từ.' },
          { context: 'Hoàn thành câu: hôm nay thời tiết lạnh lắm.',
            pre: '今天天气', blank: '冷极了', post: '。', options: ['冷极了', '极了冷', '极冷了'], answer: 0,
            explanation: 'Adj(冷) + 极了 diễn tả mức độ cực điểm.' },
          { context: 'Chọn từ đúng: cậu ấy hài lòng lắm.',
            pre: '不用花钱，还有新衣服穿，他', blank: '满意极了', post: '。', options: ['满意极了', '极了满意', '满意了极'], answer: 0,
            explanation: '动词心理(满意) + 极了 diễn tả mức độ cực điểm.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我的小狗极了可爱。', isCorrect: false, correctVersion: '我的小狗可爱极了。',
            explanation: '极了 phải đứng SAU tính từ/động từ tâm lý (可爱), không đặt trước.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '那件衣服我喜欢极了。', isCorrect: true,
            explanation: 'Câu đúng: 动词心理(喜欢) + 极了 diễn tả mức độ cực điểm.' },
          { type: 'sort', context: 'Sắp xếp câu: mùa hè ở đây nóng lắm, bạn không thấy vậy sao?',
            words: ['这儿', '的', '夏天', '热极了', '，', '你', '不', '觉得', '吗', '？'], answer: '这儿的夏天热极了，你不觉得吗？',
            explanation: 'Adj(热) + 极了 diễn tả mức độ cực điểm.' },
          { type: 'sort', context: 'Sắp xếp câu: chiếc áo đó tôi thích lắm.',
            words: ['那', '件', '衣服', '我', '喜欢', '极了', '。'], answer: '那件衣服我喜欢极了。',
            explanation: '动词心理(喜欢) + 极了 diễn tả mức độ cực điểm.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 极了.',
            promptLang: 'vi', prompt: 'Con chó nhỏ của tôi đáng yêu lắm.',
            answer: '我的小狗可爱极了。', answerPy: 'Wǒ de xiǎogǒu kě\'ài jí le.',
            explanation: 'Adj + 极了 diễn tả mức độ cao nhất.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Hôm nay thời tiết lạnh lắm.',
            answer: '今天天气冷极了。', answerPy: 'Jīntiān tiānqì lěng jí le.',
            explanation: 'Adj + 极了 diễn tả mức độ cao nhất.' },
          { context: 'Chọn từ đúng: căn nhà đó có cây có cỏ, tốt quá!',
            pre: '有树有草，', blank: '好极了', post: '！', options: ['好极了', '极了好', '好了极'], answer: 0,
            explanation: 'Adj(好) + 极了 diễn tả mức độ cực điểm (ôn lại 街道 đã học trong bài này).' },
        ] },
    ],
    '/lessons/hsk3-bai-16.html': [
      { point: 'Cấu trúc 「如果……(的话)，(主语)就……」',
        items: [
          { context: 'Hoàn thành câu: nếu bạn mệt quá thì nghỉ một lát đi.',
            pre: '', blank: '如果你太累了，就', post: '休息一会儿。', options: ['如果你太累了，就', '你如果太累了，就', '如果就你太累了，'], answer: 0,
            explanation: '如果 + giả thiết，就 + kết quả — cấu trúc cơ bản.' },
          { context: 'Hoàn thành câu: nếu bạn thích thì tôi mua cho bạn.',
            pre: '如果你喜欢，', blank: '我就给你买', post: '。', options: ['我就给你买', '就我给你买', '我给你就买'], answer: 0,
            explanation: 'Chủ ngữ của mệnh đề thứ hai (我) phải đặt TRƯỚC 就.' },
          { context: 'Chọn từ đúng: nếu khó chịu thì đi bệnh viện khám thử đi.',
            pre: '', blank: '如果不舒服，就', post: '去医院检查一下吧。', options: ['如果不舒服，就', '不舒服如果，就', '如果就不舒服，'], answer: 0,
            explanation: '如果 + giả thiết，就 + kết quả (ôn lại 检查 đã học trong bài này).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '如果你喜欢，就我给你买。', isCorrect: false, correctVersion: '如果你喜欢，我就给你买。',
            explanation: 'Chủ ngữ của mệnh đề thứ hai phải đặt TRƯỚC 就, không đặt sau.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '如果有钱的话，我就去旅游。', isCorrect: true,
            explanation: 'Câu đúng: 如果……(的话)，(chủ ngữ)就…… đúng cấu trúc.' },
          { type: 'sort', context: 'Sắp xếp câu: tuy bây giờ tiền không còn là vấn đề nhưng chủ yếu là không có thời gian.',
            words: ['虽然', '现在', '钱', '不是', '问题', '了', '，', '但是', '主要', '是', '没有', '时间', '。'], answer: '虽然现在钱不是问题了，但是主要是没有时间。',
            explanation: '虽然……但是…… diễn tả sự tương phản (ôn lại đã học ở Bài 13).' },
          { type: 'sort', context: 'Sắp xếp câu: nếu có thể dùng nhiều hơn từ ngữ lịch sự, quan hệ sẽ tốt hơn.',
            words: ['如果', '能', '多', '用', '一些', '礼貌', '的', '词语', '，', '关系', '就', '会', '变', '得', '更好', '。'], answer: '如果能多用一些礼貌的词语，关系就会变得更好。',
            explanation: '如果……就…… diễn tả giả thiết — kết quả (ôn lại 词语 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 如果……就……',
            promptLang: 'vi', prompt: 'Nếu bạn mệt quá thì nghỉ một lát đi.',
            answer: '如果你太累了，就休息一会儿。', answerPy: 'Rúguǒ nǐ tài lèi le, jiù xiūxi yíhuìr.',
            explanation: '如果……就…… diễn tả giả thiết — kết quả.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Nếu khó chịu thì đi bệnh viện khám thử đi.',
            answer: '如果不舒服，就去医院检查一下吧。', answerPy: 'Rúguǒ bù shūfu, jiù qù yīyuàn jiǎnchá yíxià ba.',
            explanation: '如果……就…… diễn tả giả thiết — kết quả.' },
          { context: 'Chọn từ đúng: chỉ cần bạn cười nhiều với người khác thì người khác sẽ sẵn lòng giúp bạn.',
            pre: '', blank: '只要你多对别人笑笑，别人就会', post: '愿意帮助你。', options: ['只要你多对别人笑笑，别人就会', '如果只要你多对别人笑笑，', '你只要多对别人笑笑就会，'], answer: 0,
            explanation: '只要……就…… diễn tả điều kiện đủ (ôn lại 别人 đã học trong bài này).' },
        ] },
      { point: 'Bổ ngữ chỉ trạng thái phức tạp có 「得」',
        items: [
          { context: 'Hoàn thành câu: bọn trẻ chơi đến mức không muốn về nhà.',
            pre: '孩子们', blank: '玩儿得不想回家', post: '。', options: ['玩儿得不想回家', '得玩儿不想回家', '玩儿不想得回家'], answer: 0,
            explanation: 'Động từ(玩儿) + 得 + cụm động từ(不想回家) diễn tả mức độ trạng thái.' },
          { context: 'Hoàn thành câu: em trai vui đến mức nhảy dựng lên.',
            pre: '弟弟', blank: '高兴得跳了起来', post: '。', options: ['高兴得跳了起来', '跳了起来高兴得', '得高兴跳了起来'], answer: 0,
            explanation: 'Tính từ(高兴) + 得 + cụm động từ(跳了起来) diễn tả mức độ trạng thái.' },
          { context: 'Chọn từ đúng: con trai mệt đến mức hết giờ làm là đi ngủ luôn.',
            pre: '儿子', blank: '累得下了班就睡觉了', post: '。', options: ['累得下了班就睡觉了', '得累下了班就睡觉了', '累下了班得就睡觉了'], answer: 0,
            explanation: 'Tính từ(累) + 得 + cụm động từ diễn tả mức độ trạng thái.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '孩子们不想回家得玩儿。', isCorrect: false, correctVersion: '孩子们玩儿得不想回家。',
            explanation: 'Cấu trúc bổ ngữ trạng thái: động từ(玩儿)+得+cụm động từ(不想回家), không đảo ngược.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '人们忙得没时间跟别人见面。', isCorrect: true,
            explanation: 'Câu đúng: 忙(tính từ)+得+没时间跟别人见面(cụm động từ) diễn tả mức độ bận.' },
          { type: 'sort', context: 'Sắp xếp câu: lúc mới sinh bố nó vui đến mức cả đêm không ngủ được.',
            words: ['刚', '出生', '时', '她', '爸爸', '高兴', '得', '一个', '晚上', '都', '没', '睡着', '。'], answer: '刚出生时她爸爸高兴得一个晚上都没睡着。',
            explanation: '高兴 + 得 + cụm động từ diễn tả mức độ trạng thái.' },
          { type: 'sort', context: 'Sắp xếp câu: gầy đến mức chỉ có 40 cân.',
            words: ['瘦', '得', '只有', '40', '公斤', '。'], answer: '瘦得只有40公斤。',
            explanation: '瘦 + 得 + cụm từ diễn tả mức độ (ôn lại 公斤 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng bổ ngữ trạng thái có 得.',
            promptLang: 'vi', prompt: 'Bọn trẻ chơi đến mức không muốn về nhà.',
            answer: '孩子们玩儿得不想回家。', answerPy: 'Háizimen wánr de bù xiǎng huí jiā.',
            explanation: 'Động từ + 得 + cụm động từ diễn tả mức độ.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Em trai vui đến mức nhảy dựng lên.',
            answer: '弟弟高兴得跳了起来。', answerPy: 'Dìdi gāoxìng de tiàole qilai.',
            explanation: 'Tính từ + 得 + cụm động từ diễn tả mức độ.' },
          { context: 'Chọn từ đúng: gầy đến mức tôi không nhận ra bạn nữa.',
            pre: '', blank: '瘦得我都不认识你了', post: '。', options: ['瘦得我都不认识你了', '得瘦我都不认识你了', '瘦我都得不认识你了'], answer: 0,
            explanation: '瘦 + 得 + cụm động từ diễn tả mức độ.' },
        ] },
      { point: 'Tính từ có một âm tiết được lặp lại (AA的)',
        items: [
          { context: 'Hoàn thành câu: hoa bạn tặng đỏ đỏ, tôi rất thích.',
            pre: '你送的花', blank: '红红的', post: '，我很喜欢。', options: ['红红的', '红的红', '的红红'], answer: 0,
            explanation: 'Tính từ đơn âm tiết (红) lặp lại thành "AA的".' },
          { context: 'Hoàn thành câu: anh ấy mũi nhỏ nhỏ, giống ai vậy?',
            pre: '他鼻子', blank: '小小的', post: '，长得像谁？', options: ['小小的', '小的小', '的小小'], answer: 0,
            explanation: 'Tính từ đơn âm tiết (小) lặp lại thành "AA的".' },
          { context: 'Chọn từ đúng: con gái bạn trắng trắng, mũm mĩm, đáng yêu thật!',
            pre: '你女儿长得', blank: '白白的、胖胖的', post: '，真可爱！', options: ['白白的、胖胖的', '白的白、胖的胖', '白白、胖胖的的'], answer: 0,
            explanation: 'Tính từ đơn âm tiết (白/胖) lặp lại thành "AA的" (ôn lại 可爱 đã học trong bài này).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他鼻子小的小，长得像谁？', isCorrect: false, correctVersion: '他鼻子小小的，长得像谁？',
            explanation: 'Tính từ đơn âm tiết lặp lại phải viết liền thành "AA的" (小小的), không tách rời.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这些草绿绿的，真漂亮。', isCorrect: true,
            explanation: 'Câu đúng: 绿绿的 là dạng "AA的" đúng cấu trúc.' },
          { type: 'sort', context: 'Sắp xếp câu: mấy ngọn cỏ này xanh xanh, đẹp thật.',
            words: ['这些', '草', '绿绿', '的', '，', '真', '漂亮', '。'], answer: '这些草绿绿的，真漂亮。',
            explanation: 'Tính từ đơn âm tiết (绿) lặp lại thành "AA的".' },
          { type: 'sort', context: 'Sắp xếp câu: mũi giống bố, cao cao.',
            words: ['鼻子', '像', '爸爸', '，', '高高', '的', '。'], answer: '鼻子像爸爸，高高的。',
            explanation: 'Tính từ đơn âm tiết (高) lặp lại thành "AA的" (ôn lại 鼻子 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng "AA的".',
            promptLang: 'vi', prompt: 'Anh ấy mũi nhỏ nhỏ, giống ai vậy?',
            answer: '他鼻子小小的，长得像谁？', answerPy: 'Tā bízi xiǎoxiǎo de, zhǎng de xiàng shéi?',
            explanation: 'Tính từ đơn âm tiết lặp lại thành "AA的".' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Hoa bạn tặng đỏ đỏ, tôi rất thích.',
            answer: '你送的花红红的，我很喜欢。', answerPy: 'Nǐ sòng de huā hónghóng de, wǒ hěn xǐhuan.',
            explanation: 'Tính từ đơn âm tiết lặp lại thành "AA的".' },
          { context: 'Chọn từ đúng: người tóc dài dài này là chị gái phải không?',
            pre: '这个头发', blank: '长长的', post: '是姐姐吧？', options: ['长长的', '长的长', '的长长'], answer: 0,
            explanation: 'Tính từ đơn âm tiết (长) lặp lại thành "AA的" (ôn lại 头发 đã học trong bài này).' },
        ] },
    ],
    '/lessons/hsk3-bai-17.html': [
      { point: 'Động từ có hai âm tiết được lặp lại (ABAB)',
        items: [
          { context: 'Hoàn thành câu: bạn giới thiệu chúng tôi làm quen đi.',
            pre: '你', blank: '介绍我们认识认识', post: '吧。', options: ['介绍我们认识认识', '介绍认识认识我们', '认识认识介绍我们'], answer: 0,
            explanation: 'Tân ngữ (我们) đứng TRƯỚC động từ lặp dạng ABAB (认识认识).' },
          { context: 'Hoàn thành câu: đây là quyển sách mới, bạn học thử đi.',
            pre: '这是本新书，你', blank: '学习学习', post: '吧。', options: ['学习学习', '学学习习', '习学习学'], answer: 0,
            explanation: 'Động từ hai âm tiết (学习) lặp lại thành dạng ABAB.' },
          { context: 'Chọn từ đúng: tôi thật sự nên tập luyện nhiều hơn.',
            pre: '我真应该多', blank: '锻炼锻炼', post: '了。', options: ['锻炼锻炼', '锻锻炼炼', '炼锻炼锻'], answer: 0,
            explanation: 'Động từ hai âm tiết (锻炼) lặp lại thành dạng ABAB, diễn tả hành động ngắn.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你介绍认识认识我们吧。', isCorrect: false, correctVersion: '你介绍我们认识认识吧。',
            explanation: 'Tân ngữ (我们) phải đặt TRƯỚC động từ lặp (认识认识), không chen vào giữa.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他是新来的，有时间你帮助帮助他吧。', isCorrect: true,
            explanation: 'Câu đúng: 帮助帮助 là dạng ABAB đúng cấu trúc, diễn tả hành động ngắn.' },
          { type: 'sort', context: 'Sắp xếp câu: anh ấy là ai vậy? Bạn giới thiệu chúng tôi làm quen đi.',
            words: ['他', '是', '谁', '？', '你', '介绍', '我们', '认识认识', '吧', '。'], answer: '他是谁？你介绍我们认识认识吧。',
            explanation: 'Động từ hai âm tiết (认识) lặp lại thành dạng ABAB.' },
          { type: 'sort', context: 'Sắp xếp câu: vì sức khỏe, tôi thật sự nên tập luyện nhiều hơn.',
            words: ['为了', '健康', '，', '我', '真', '应该', '多', '锻炼锻炼', '了', '。'], answer: '为了健康，我真应该多锻炼锻炼了。',
            explanation: '锻炼锻炼 là dạng ABAB (ôn lại 为了 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng động từ lặp dạng ABAB.',
            promptLang: 'vi', prompt: 'Anh ấy mới đến, lúc nào rảnh bạn giúp đỡ anh ấy chút đi.',
            answer: '他是新来的，有时间你帮助帮助他吧。', answerPy: 'Tā shì xīn lái de, yǒu shíjiān nǐ bāngzhu bāngzhu tā ba.',
            explanation: '帮助帮助 là dạng ABAB, diễn tả hành động thử làm.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Bạn giới thiệu chúng tôi làm quen đi.',
            answer: '你介绍我们认识认识吧。', answerPy: 'Nǐ jièshào wǒmen rènshi rènshi ba.',
            explanation: '认识认识 là dạng ABAB.' },
          { context: 'Chọn từ đúng: bạn nghỉ ngơi một chút đi.',
            pre: '你', blank: '休息休息', post: '吧。', options: ['休息休息', '休休息息', '息休息休'], answer: 0,
            explanation: 'Động từ hai âm tiết (休息) lặp lại thành dạng ABAB.' },
        ] },
      { point: 'Đại từ nghi vấn được sử dụng linh hoạt (3)',
        items: [
          { context: 'Hoàn thành câu: ai cũng thích Tiểu Lệ.',
            pre: '', blank: '谁都喜欢', post: '小丽。', options: ['谁都喜欢', '谁喜欢都', '都谁喜欢'], answer: 0,
            explanation: '谁 + 都 + vị ngữ diễn tả toàn bộ đối tượng không ngoại lệ.' },
          { context: 'Hoàn thành câu: Tiểu Cương cái gì cũng thích ăn.',
            pre: '小刚', blank: '什么都喜欢吃', post: '。', options: ['什么都喜欢吃', '什么喜欢都吃', '都什么喜欢吃'], answer: 0,
            explanation: '什么 + 都 + vị ngữ diễn tả toàn bộ đối tượng không ngoại lệ.' },
          { context: 'Chọn từ đúng: gần đây tôi thấy chỗ nào cũng khó chịu.',
            pre: '最近我觉得', blank: '哪儿都不舒服', post: '。', options: ['哪儿都不舒服', '哪儿不舒服都', '都哪儿不舒服'], answer: 0,
            explanation: '哪儿 + 都 + vị ngữ diễn tả toàn bộ đối tượng không ngoại lệ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '谁小丽都喜欢。', isCorrect: false, correctVersion: '谁都喜欢小丽。',
            explanation: '都 phải đứng NGAY SAU đại từ nghi vấn (谁), trước động từ, không tách rời cấu trúc.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们怎么去公园都可以。', isCorrect: true,
            explanation: 'Câu đúng: 怎么……都…… diễn tả mọi cách thức đều được.' },
          { type: 'sort', context: 'Sắp xếp câu: ai cũng biết vận động tốt cho sức khỏe.',
            words: ['谁', '都', '知道', '运动', '对', '身体', '好', '。'], answer: '谁都知道运动对身体好。',
            explanation: '谁 + 都 + vị ngữ diễn tả toàn bộ không ngoại lệ.' },
          { type: 'sort', context: 'Sắp xếp câu: chúng ta đi công viên thế nào cũng được.',
            words: ['我们', '怎么', '去', '公园', '都', '可以', '。'], answer: '我们怎么去公园都可以。',
            explanation: '怎么 + 都 + vị ngữ diễn tả mọi cách thức đều được.' },
          { type: 'translate', context: 'Dịch câu sau, dùng đại từ nghi vấn + 都.',
            promptLang: 'vi', prompt: 'Ai cũng thích Tiểu Lệ.',
            answer: '谁都喜欢小丽。', answerPy: 'Shéi dōu xǐhuan Xiǎolì.',
            explanation: '谁 + 都 + vị ngữ diễn tả toàn bộ không ngoại lệ.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Gần đây tôi thấy chỗ nào cũng khó chịu.',
            answer: '最近我觉得哪儿都不舒服。', answerPy: 'Zuìjìn wǒ juéde nǎr dōu bù shūfu.',
            explanation: '哪儿 + 都 + vị ngữ diễn tả toàn bộ không ngoại lệ.' },
          { context: 'Chọn từ đúng: chỉ cần bạn vận động dựa theo tình trạng sức khỏe thì cơ thể sẽ khỏe hơn.',
            pre: '只要你根据情况运动，', blank: '身体就会更健康', post: '。', options: ['身体就会更健康', '就身体会更健康', '身体会就更健康'], answer: 0,
            explanation: '只要……就…… diễn tả điều kiện đủ (ôn lại 情况 đã học trong bài này).' },
        ] },
    ],
    '/lessons/hsk3-bai-18.html': [
      { point: 'Cấu trúc 「只要……，就……」',
        items: [
          { context: 'Hoàn thành câu: chỉ cần tôi thích, nhất định sẽ mua.',
            pre: '我', blank: '只要喜欢，就一定会买', post: '。', options: ['只要喜欢，就一定会买', '就喜欢，只要一定会买', '只要一定会买，就喜欢'], answer: 0,
            explanation: '只要……就…… diễn tả điều kiện cần và kết quả tương ứng.' },
          { context: 'Hoàn thành câu: chỉ cần bạn mua cho tôi, tôi sẽ chăm nó tốt.',
            pre: '只要你给我买，', blank: '我就能照顾好它', post: '。', options: ['我就能照顾好它', '就我能照顾好它', '我能就照顾好它'], answer: 0,
            explanation: 'Chủ ngữ của mệnh đề thứ hai (我) phải đặt TRƯỚC 就.' },
          { context: 'Chọn từ đúng: chỉ cần tôi muốn, tôi tin họ sẽ đồng ý thôi.',
            pre: '', blank: '只要我愿意，我相信他们就会', post: '同意的。', options: ['只要我愿意，我相信他们就会', '我只要愿意相信他们，就会', '只要我相信愿意，他们就会'], answer: 0,
            explanation: '只要……就…… diễn tả điều kiện đủ (ôn lại 愿意/相信 đã học trong bài này).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我有时间只要，就一定跟你去旅游。', isCorrect: false, correctVersion: '只要我有时间，就一定跟你去旅游。',
            explanation: '只要 phải đứng ở ĐẦU câu hoặc trước chủ ngữ thứ nhất, không đặt sau chủ ngữ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '只要你想去，我就跟你去。', isCorrect: true,
            explanation: 'Câu đúng: 只要……就…… đúng cấu trúc, chủ ngữ thứ hai (我) đứng trước 就.' },
          { type: 'sort', context: 'Sắp xếp câu: không có vấn đề gì, chỉ cần tôi có, nhất định sẽ cho anh mượn.',
            words: ['没', '问题', '，', '只要', '我', '有', '，', '就', '一定', '会', '借', '给', '你', '的', '。'], answer: '没问题，只要我有，就一定会借给你的。',
            explanation: '只要……就…… diễn tả điều kiện đủ.' },
          { type: 'sort', context: 'Sắp xếp câu: chỉ cần bạn muốn đi, tôi sẽ đi cùng bạn.',
            words: ['只要', '你', '想', '去', '，', '我', '就', '跟', '你', '去', '。'], answer: '只要你想去，我就跟你去。',
            explanation: '只要……就…… diễn tả điều kiện đủ.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 只要……就……',
            promptLang: 'vi', prompt: 'Chỉ cần bạn mua cho tôi, tôi sẽ chăm nó tốt.',
            answer: '只要你给我买，我就能照顾好它。', answerPy: 'Zhǐyào nǐ gěi wǒ mǎi, wǒ jiù néng zhàogù hǎo tā.',
            explanation: '只要……就…… diễn tả điều kiện đủ.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chỉ cần tôi có thời gian, nhất định sẽ đi du lịch cùng bạn.',
            answer: '只要我有时间，就一定跟你去旅游。', answerPy: 'Zhǐyào wǒ yǒu shíjiān, jiù yídìng gēn nǐ qù lǚyóu.',
            explanation: '只要……就…… diễn tả điều kiện đủ.' },
          { context: 'Chọn từ đúng: chỉ cần bạn không mệt, chúng ta sẽ đi.',
            pre: '', blank: '只要你不累，我们就去', post: '。', options: ['只要你不累，我们就去', '你只要不累，就我们去', '只要我们不累，你就去'], answer: 0,
            explanation: '只要……就…… diễn tả điều kiện đủ.' },
        ] },
      { point: 'Giới từ 「关于」',
        items: [
          { context: 'Hoàn thành câu: gần đây tôi xem một số phim về văn hóa Trung Quốc.',
            pre: '我最近看了一些', blank: '关于中国文化的电影', post: '。', options: ['关于中国文化的电影', '中国文化关于的电影', '电影关于中国文化的'], answer: 0,
            explanation: '关于 + chủ đề + 的 + danh từ đứng ở giữa câu, làm định ngữ.' },
          { context: 'Hoàn thành câu: về việc này, chúng tôi vẫn chưa quyết định.',
            pre: '', blank: '关于这件事，我们还没有决定呢', post: '。', options: ['关于这件事，我们还没有决定呢', '这件事关于，我们还没有决定呢', '我们关于这件事还没有决定呢'], answer: 0,
            explanation: '关于 phải đứng TRƯỚC danh từ nó giới thiệu (这件事), thường đứng đầu câu.' },
          { context: 'Chọn từ đúng: về công việc này, còn vấn đề gì không?',
            pre: '', blank: '关于这个工作，还有什么问题吗', post: '？', options: ['关于这个工作，还有什么问题吗', '这个工作关于，还有什么问题吗', '还有什么问题关于这个工作吗'], answer: 0,
            explanation: '关于 đứng đầu câu, dẫn ra chủ đề được nói đến.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这件事关于，我们还没有决定呢。', isCorrect: false, correctVersion: '关于这件事，我们还没有决定呢。',
            explanation: '关于 phải đứng TRƯỚC danh từ nó giới thiệu (这件事), không đặt sau.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '关于出国学习的事，妈妈已经同意了。', isCorrect: true,
            explanation: 'Câu đúng: 关于 + chủ đề + 的 + 事 đứng đầu câu, đúng cấu trúc.' },
          { type: 'sort', context: 'Sắp xếp câu: về ngày lễ của Trung Quốc, ngoài Tết Nguyên đán ra, những cái khác tôi đều không hiểu rõ.',
            words: ['关于', '中国', '的', '节日', '，', '除了', '春节', '以外', '，', '别的', '我', '都', '不', '了解', '。'], answer: '关于中国的节日，除了春节以外，别的我都不了解。',
            explanation: '关于 đứng đầu câu, dẫn ra chủ đề (ôn lại 除了……以外 đã học ở Bài 15).' },
          { type: 'sort', context: 'Sắp xếp câu: về việc đi du học nước ngoài, mẹ đã đồng ý rồi.',
            words: ['关于', '出国', '学习', '的', '事', '，', '妈妈', '已经', '同意', '了', '。'], answer: '关于出国学习的事，妈妈已经同意了。',
            explanation: '关于 + chủ đề + 的 + 事 (ôn lại 同意 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 关于.',
            promptLang: 'vi', prompt: 'Về công việc này, còn vấn đề gì không?',
            answer: '关于这个工作，还有什么问题吗？', answerPy: 'Guānyú zhège gōngzuò, hái yǒu shénme wèntí ma?',
            explanation: '关于 đứng đầu câu, dẫn ra chủ đề.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Gần đây tôi xem một số phim về văn hóa Trung Quốc.',
            answer: '我最近看了一些关于中国文化的电影。', answerPy: 'Wǒ zuìjìn kànle yìxiē guānyú Zhōngguó wénhuà de diànyǐng.',
            explanation: '关于 + chủ đề + 的 + danh từ làm định ngữ.' },
          { context: 'Chọn từ đúng: về điểm này, tôi đồng ý.',
            pre: '', blank: '关于这一点，我同意', post: '。', options: ['关于这一点，我同意', '这一点关于，我同意', '我关于这一点同意'], answer: 0,
            explanation: '关于 + chủ đề đứng đầu câu (ôn lại 同意 đã học trong bài này).' },
        ] },
    ],
    '/lessons/hsk3-bai-19.html': [
      { point: 'Nghĩa mở rộng của bổ ngữ chỉ phương hướng',
        items: [
          { context: 'Hoàn thành câu: bạn không nhận ra à? Đó là Tiểu Cương đấy.',
            pre: '你没', blank: '看出来', post: '吗？他是小刚啊。', options: ['看出来', '出来看', '看来出'], answer: 0,
            explanation: 'V(看) + 出来 diễn tả sự phân biệt, nhận ra.' },
          { context: 'Hoàn thành câu: chỉ cần bố nó bắt chước tiếng chim con kêu là con bé lập tức yên lặng ngay.',
            pre: '只要他爸爸学小鸟叫，她马上就', blank: '安静下来', post: '了。', options: ['安静下来', '下来安静', '安静来下'], answer: 0,
            explanation: 'Adj(安静) + 下来 diễn tả sự chuyển từ động sang tĩnh.' },
          { context: 'Chọn từ đúng: anh cũng nhớ ra rồi.',
            pre: '我也', blank: '想起来', post: '了。', options: ['想起来', '起来想', '想来起'], answer: 0,
            explanation: 'V(想) + 起来 diễn tả sự hồi tưởng, nhớ lại có kết quả.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这个字你出来能写吗？', isCorrect: false, correctVersion: '这个字你能写出来吗？',
            explanation: '出来 phải đứng SAU cả cụm động từ (能写), không chen vào giữa.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '天黑下来了，孩子们要回家了。', isCorrect: true,
            explanation: 'Câu đúng: 黑(tính từ) + 下来 diễn tả sự chuyển biến, 了 đặt sau 下来.' },
          { type: 'sort', context: 'Sắp xếp câu: chiếc xe phía trước càng chạy càng chậm, dừng hẳn lại rồi.',
            words: ['前边', '的', '车', '越', '开', '越', '慢', '，', '停', '下来', '了', '。'], answer: '前边的车越开越慢，停下来了。',
            explanation: '停 + 下来 diễn tả sự chuyển từ động sang tĩnh.' },
          { type: 'sort', context: 'Sắp xếp câu: xin lỗi, tôi không nhớ ra tên bạn nữa.',
            words: ['对不起', '，', '我', '想', '不', '起来', '你', '的', '名字', '了', '。'], answer: '对不起，我想不起来你的名字了。',
            explanation: '想不起来 = phủ định chen giữa 想 và 起来.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 出来 diễn tả sự nhận ra.',
            promptLang: 'vi', prompt: 'Bạn không nhận ra à? Đó là Tiểu Cương đấy.',
            answer: '你没看出来吗？他是小刚啊。', answerPy: 'Nǐ méi kàn chulai ma? Tā shì Xiǎogāng a.',
            explanation: 'V(看) + 出来 diễn tả sự phân biệt, nhận ra.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Hôm nay anh ấy mặc âu phục xanh, trông như hơn 40 tuổi.',
            answer: '他今天穿蓝西服，看上去像40多岁。', answerPy: 'Tā jīntiān chuān lán xīfú, kàn shangqu xiàng sìshí duō suì.',
            explanation: '看上去 diễn tả sự đánh giá qua quan sát, không mang nghĩa hồi tưởng.' },
          { context: 'Chọn từ đúng: đây là món bạn nấu à? Trông có vẻ ngon lắm.',
            pre: '这是你做的饭吗？', blank: '看起来很好吃', post: '。', options: ['看起来很好吃', '起来看很好吃', '看很好吃起来'], answer: 0,
            explanation: '看起来 diễn tả sự đánh giá, ước lượng qua quan sát.' },
        ] },
      { point: '「使」「叫」「让」',
        items: [
          { context: 'Hoàn thành câu: đọc sách khiến tôi vui vẻ.',
            pre: '读书', blank: '使我快乐', post: '。', options: ['使我快乐', '快乐使我', '使快乐我'], answer: 0,
            explanation: '使 + đối tượng(我) + kết quả(快乐), không đảo lộn thứ tự.' },
          { context: 'Hoàn thành câu: thi cử khiến tôi rất căng thẳng.',
            pre: '考试', blank: '让我很紧张', post: '。', options: ['让我很紧张', '很紧张让我', '让很紧张我'], answer: 0,
            explanation: '让 + đối tượng(我) + kết quả(很紧张).' },
          { context: 'Chọn từ đúng: mặc đồ thể thao khiến anh ấy trẻ hơn.',
            pre: '穿运动服', blank: '让他更年轻', post: '。', options: ['让他更年轻', '他更年轻让', '让更年轻他'], answer: 0,
            explanation: '让 + đối tượng(他) + kết quả(更年轻), 让 đứng NGAY SAU nguyên nhân.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '读书快乐使我。', isCorrect: false, correctVersion: '读书使我快乐。',
            explanation: 'Cấu trúc 使/叫/让 + đối tượng + kết quả: 使+我(đối tượng)+快乐(kết quả), không đảo lộn.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这样可以使她的脸看上去漂亮一些。', isCorrect: true,
            explanation: 'Câu đúng: 使 + đối tượng(她的脸) + kết quả(看上去漂亮一些).' },
          { type: 'sort', context: 'Sắp xếp câu: tấm ảnh này khiến tôi nhớ đến nhà mình.',
            words: ['这', '张', '照片', '让', '我', '想起', '了', '我', '的', '家', '。'], answer: '这张照片让我想起了我的家。',
            explanation: '让 + đối tượng(我) + kết quả(想起了我的家) (ôn lại 张 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: màu xanh sẽ khiến khuôn mặt tôi trông trẻ hơn một chút.',
            words: ['蓝色', '会', '让', '我', '的', '脸', '看上去', '更', '年轻', '些', '。'], answer: '蓝色会让我的脸看上去更年轻些。',
            explanation: '让 + đối tượng(我的脸) + kết quả(看上去更年轻些) (ôn lại 蓝 đã học trong bài này).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 使/叫/让.',
            promptLang: 'vi', prompt: 'Thi cử khiến tôi rất căng thẳng.',
            answer: '考试让我很紧张。', answerPy: 'Kǎoshì ràng wǒ hěn jǐnzhāng.',
            explanation: '让 + đối tượng + kết quả diễn tả sự khiến cho.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Đọc sách khiến tôi vui vẻ.',
            answer: '读书使我快乐。', answerPy: 'Dúshū shǐ wǒ kuàilè.',
            explanation: '使 + đối tượng + kết quả diễn tả sự khiến cho.' },
          { context: 'Chọn từ đúng: tôi muốn gửi ảnh cho mọi người sớm, để bạn bè cũng vui vẻ một chút.',
            pre: '我想快点儿把照片发给大家，', blank: '叫朋友们也高兴高兴', post: '。', options: ['叫朋友们也高兴高兴', '朋友们叫也高兴高兴', '叫也朋友们高兴高兴'], answer: 0,
            explanation: '叫 thường dùng trong văn nói, + đối tượng(朋友们) + kết quả(也高兴高兴).' },
        ] },
    ],
    '/lessons/hsk3-bai-20.html': [
      { point: 'Câu có từ 「被」',
        items: [
          { context: 'Hoàn thành câu: máy ảnh của tôi bị ai lấy mất rồi?',
            pre: '我的照相机', blank: '被谁拿走了', post: '？', options: ['被谁拿走了', '谁被拿走了', '被拿走了谁'], answer: 0,
            explanation: '主语(照相机)+被+宾语(谁)+动词(拿走), đúng thứ tự câu bị động.' },
          { context: 'Hoàn thành câu: chúng tôi thường bị người khác nhận nhầm.',
            pre: '我们经常', blank: '被别人认错', post: '。', options: ['被别人认错', '认错被别人', '别人被认错'], answer: 0,
            explanation: '主语(我们)+被+宾语(别人)+动词(认错).' },
          { context: 'Chọn từ đúng: vấn đề dù khó đến mấy cũng sẽ được giải quyết.',
            pre: '多么难的问题，', blank: '都会被解决的', post: '。', options: ['都会被解决的', '都被会解决的', '被都会解决的'], answer: 0,
            explanation: '都+会+被+解决, 被 đứng NGAY TRƯỚC động từ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '问题被没有解决呢还。', isCorrect: false, correctVersion: '问题还没有被解决呢。',
            explanation: 'Phó từ phủ định (没有) và các thành phần khác phải đặt TRƯỚC 被, không đặt sau.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我被他影响的。', isCorrect: true,
            explanation: 'Câu đúng: 主语(我)+被+宾语(他)+动词(影响), đúng cấu trúc câu bị động.' },
          { type: 'sort', context: 'Sắp xếp câu: bệnh nhân vẫn chưa được đưa đến bệnh viện.',
            words: ['病人', '还', '没', '被', '送', '到', '医院', '呢', '。'], answer: '病人还没被送到医院呢。',
            explanation: 'Phó từ phủ định (还没) đặt TRƯỚC 被.' },
          { type: 'sort', context: 'Sắp xếp câu: tháng sau cô ấy sẽ được mẹ gửi sang Mỹ.',
            words: ['下个月', '她', '会', '被', '妈妈', '送到', '美国', '。'], answer: '下个月她会被妈妈送到美国。',
            explanation: 'Động từ năng nguyện (会) đặt TRƯỚC 被.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 被.',
            promptLang: 'vi', prompt: 'Mình bị anh ấy ảnh hưởng đấy.',
            answer: '我被他影响的。', answerPy: 'Wǒ bèi tā yǐngxiǎng de.',
            explanation: '主语+被+宾语+动词 diễn tả câu bị động.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Vấn đề vẫn chưa được giải quyết.',
            answer: '问题还没有被解决呢。', answerPy: 'Wèntí hái méiyǒu bèi jiějué ne.',
            explanation: 'Phó từ phủ định (还没有) đặt TRƯỚC 被.' },
          { context: 'Chọn từ đúng: bánh kem bị em trai ăn hết rồi.',
            pre: '蛋糕', blank: '让弟弟吃完了', post: '。', options: ['让弟弟吃完了', '弟弟让吃完了', '让吃完了弟弟'], answer: 0,
            explanation: '主语(蛋糕)+让+宾语(弟弟)+动词(吃完), 让 tương đương 被 trong câu bị động.' },
        ] },
      { point: 'Cấu trúc 「只有……，才……」',
        items: [
          { context: 'Hoàn thành câu: chỉ có làm xong bài tập mới được xem tivi.',
            pre: '', blank: '只有写完作业，才能', post: '看电视。', options: ['只有写完作业，才能', '写完作业只有，才能', '只有才写完作业，能'], answer: 0,
            explanation: '只有 + điều kiện duy nhất，才 + kết quả.' },
          { context: 'Hoàn thành câu: xem ra chỉ có tình yêu mới có thể khiến người ta thay đổi.',
            pre: '看来', blank: '只有爱，才能让人有变化', post: '。', options: ['只有爱，才能让人有变化', '爱只有，才能让人有变化', '只有爱才，能让人有变化'], answer: 0,
            explanation: '只有 + điều kiện(爱)，才 + kết quả(能让人有变化).' },
          { context: 'Chọn từ đúng: chỉ có bố mẹ các bạn mới phân biệt được ai là anh, ai là em.',
            pre: '', blank: '只有你们的爸爸妈妈才能分出来', post: '哪个是哥哥，哪个是弟弟。', options: ['只有你们的爸爸妈妈才能分出来', '你们的爸爸妈妈只有才能分出来', '只有才你们的爸爸妈妈能分出来'], answer: 0,
            explanation: '只有 + điều kiện duy nhất，才能 + kết quả.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '写完作业只有，才能看电视。', isCorrect: false, correctVersion: '只有写完作业，才能看电视。',
            explanation: '只有 phải đứng ở ĐẦU câu, trước điều kiện, không đặt giữa câu.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '只有妈妈做的饭，她才爱吃。', isCorrect: true,
            explanation: 'Câu đúng: 只有 + điều kiện duy nhất(妈妈做的饭)，才 + kết quả(爱吃).' },
          { type: 'sort', context: 'Sắp xếp câu: chỉ khi thực sự bắt tay vào làm mới hiểu được nó khó đến đâu.',
            words: ['只有', '真正', '做', '事情', '的', '时候', '，', '才', '能', '了解', '有', '多', '难', '。'], answer: '只有真正做事情的时候，才能了解有多难。',
            explanation: '只有……才…… diễn tả điều kiện duy nhất (ôn lại 真正 đã học trong bài này).' },
          { type: 'sort', context: 'Sắp xếp câu: chỉ có cơm mẹ nấu cô ấy mới thích ăn.',
            words: ['只有', '妈妈', '做', '的', '饭', '，', '她', '才', '爱', '吃', '。'], answer: '只有妈妈做的饭，她才爱吃。',
            explanation: '只有……才…… diễn tả điều kiện duy nhất.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 只有……才……',
            promptLang: 'vi', prompt: 'Chỉ có làm xong bài tập mới được xem tivi.',
            answer: '只有写完作业，才能看电视。', answerPy: 'Zhǐyǒu xiěwán zuòyè, cái néng kàn diànshì.',
            explanation: '只有……才…… diễn tả điều kiện duy nhất.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chỉ khi thực sự bắt tay vào làm mới hiểu được nó khó đến đâu.',
            answer: '只有真正做事情的时候，才能了解有多难。', answerPy: 'Zhǐyǒu zhēnzhèng zuò shìqing de shíhou, cái néng liǎojiě yǒu duō nán.',
            explanation: '只有……才…… diễn tả điều kiện duy nhất.' },
          { context: 'Chọn từ đúng: chỉ có giày làm từ da bò tốt thật, mang mới thoải mái.',
            pre: '', blank: '只有真的好牛皮做出来的鞋，穿着才', post: '舒服。', options: ['只有真的好牛皮做出来的鞋，穿着才', '真的好牛皮只有做出来的鞋，穿着才', '只有真的好牛皮做出来的鞋，才穿着'], answer: 0,
            explanation: '只有……才…… diễn tả điều kiện duy nhất.' },
        ] },
    ],
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
          { context: 'Bạn đang đứng ở tầng 1, gọi bạn mình đang ở tầng 2 xuống.',
            pre: '你', blank: '下来', post: '吧。', options: ['下来', '下去', '上来'], answer: 0,
            explanation: '下来 = đi XUỐNG, hướng VỀ PHÍA người nói (người nói đang ở dưới).' },
          { context: 'Bạn đang ở tầng 2, nói với người ở tầng 1 rằng bạn sẽ xuống.',
            pre: '我', blank: '下去', post: '。', options: ['下去', '下来', '上去'], answer: 0,
            explanation: '下去 = đi XUỐNG, hướng RA XA người nói (người nói đang ở trên).' },
          { context: 'Mọi người đang ngồi, bạn rủ họ đứng dậy.',
            pre: '大家', blank: '起来', post: '吧！', options: ['起来', '起去', '起'], answer: 0,
            explanation: '起 CHỈ kết hợp được với 来 (起来 = đứng dậy), KHÔNG có "起去".' },
          { context: 'Bạn nói với bố mẹ là ngày mai bạn sẽ về trường.',
            pre: '我明天', blank: '回学校去', post: '。', options: ['回学校去', '回去学校', '学校回去'], answer: 0,
            explanation: 'Tân ngữ nơi chốn (学校) đứng GIỮA động từ 回 và 去: 回 + 学校 + 去.' },
          { context: 'Bạn hỏi bạn mình đã MANG hộ chiếu đến (về phía người nói) chưa.',
            pre: '你', blank: '带来', post: '护照了吗？', options: ['带来', '带去', '带上来'], answer: 0,
            explanation: '带来 = mang ĐẾN, hướng về phía người nói; tân ngữ sự vật (护照) đứng ngay sau 带来.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们进去教室上课吧。', isCorrect: false, correctVersion: '我们进教室去上课吧。',
            explanation: 'Tân ngữ nơi chốn (教室) phải đứng GIỮA 进 và 去: 进 + 教室 + 去, không đặt 去 ngay sau 进.' },
          { type: 'judge', context: 'Bạn đang ở trường, hỏi bạn mình mấy giờ quay lại trường (nơi bạn đang đứng).',
            sentence: '你几点回学校来？', isCorrect: true,
            explanation: 'Câu đúng: 回 + 学校 (nơi chốn) + 来 (về phía người nói) — đúng trật tự và đúng hướng vì người nói đang ở trường.' },
          { type: 'sort', context: 'Sắp xếp câu diễn tả anh ấy xuống lầu mua đồ.',
            words: ['他', '下楼', '去', '买', '东西', '了', '。'], answer: '他下楼去买东西了。',
            explanation: '下楼去 = V(下) + 楼(nơi chốn) + 去, diễn tả đi xuống, hướng RA XA người nói.' },
          { type: 'sort', context: 'Sắp xếp câu hỏi bạn mình khi nào sẽ qua chơi (hướng về phía người nói).',
            words: ['你', '什么时候', '过来', '玩儿', '？'], answer: '你什么时候过来玩儿？',
            explanation: '过来 = đi qua, hướng VỀ PHÍA người nói; không có tân ngữ nơi chốn nên 过 và 来 đứng liền nhau.' },
          { type: 'translate', context: 'Dịch câu sau, dùng bổ ngữ xu hướng V+来/去, chú ý tân ngữ nơi chốn phải ở giữa.',
            promptLang: 'vi', prompt: 'Anh ấy đi vào văn phòng làm việc rồi.',
            answer: '他进办公室去了。', answerPy: 'Tā jìn bàngōngshì qù le.',
            explanation: '进 + 办公室 (nơi chốn) + 去 (hướng ra xa người nói) — tân ngữ nơi chốn luôn đứng GIỮA.' },
        ] },
      { point: 'Hai hành động liên tiếp 「V了……就V……」',
        items: [
          { context: 'Hoàn thành câu theo mẫu V了……就V…… (hai hành động liên tiếp).',
            pre: '我下了课', blank: '就', post: '吃饭。', options: ['就', '才', '还'], answer: 0,
            explanation: 'V了……就V…… diễn tả hai hành động xảy ra LIÊN TIẾP, hành động thứ hai xảy ra ngay sau hành động thứ nhất.' },
          { context: 'Cô ấy tan ca là về nhà ngay.',
            pre: '她下了班', blank: '就', post: '回家。', options: ['就', '才', '也'], answer: 0,
            explanation: '就 nối hai hành động liên tiếp: 下班 xong là 回家 ngay lập tức.' },
          { context: 'Chọn vị trí đúng của 了 trong câu.',
            pre: '我', blank: '吃了饭', post: '就去学校。', options: ['吃了饭', '吃饭了', '了吃饭'], answer: 0,
            explanation: '了 phải đứng NGAY SAU động từ 吃, TRƯỚC tân ngữ 饭: 吃 + 了 + 饭.' },
          { context: 'Anh trai về đến nhà là em gái sẽ nấu cơm ngay (2 chủ ngữ khác nhau).',
            pre: '哥哥回来了，妹妹', blank: '就', post: '做饭。', options: ['就', '才', '都'], answer: 0,
            explanation: 'Khi có hai chủ ngữ khác nhau (哥哥, 妹妹), chủ ngữ thứ hai phải đứng NGAY TRƯỚC 就.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他到了机场我们就出发。', isCorrect: true,
            explanation: 'Câu đúng: 到 + 了 + 机场 (tân ngữ), chủ ngữ thứ hai (我们) đứng ngay trước 就 + 出发.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我吃饭了就睡觉。', isCorrect: false, correctVersion: '我吃了饭就睡觉。',
            explanation: '了 phải đứng NGAY SAU động từ (吃), TRƯỚC tân ngữ (饭): 吃了饭, không phải 吃饭了.' },
          { type: 'sort', context: 'Sắp xếp câu: Tiểu Vương tan làm là đi tập thể dục ngay.',
            words: ['小王', '下', '了', '班', '就', '去', '运动', '。'], answer: '小王下了班就去运动。',
            explanation: 'V1(下) + 了 + tân ngữ(班) + 就 + V2(去运动).' },
          { type: 'sort', context: 'Sắp xếp câu: Bố mẹ về đến nhà, chúng tôi liền ăn cơm ngay (2 chủ ngữ khác nhau).',
            words: ['爸爸妈妈', '回来', '了', '，', '我们', '就', '吃饭', '。'], answer: '爸爸妈妈回来了，我们就吃饭。',
            explanation: 'Chủ ngữ thứ hai (我们) đứng ngay trước 就.' },
          { type: 'translate', context: 'Dịch câu sau, áp dụng cấu trúc V了……就V……',
            promptLang: 'vi', prompt: 'Tôi tan học xong là đi thư viện ngay.',
            answer: '我下了课就去图书馆。', answerPy: 'Wǒ xiàle kè jiù qù túshūguǎn.',
            explanation: '下了课 (V1+了+tân ngữ) + 就 + 去图书馆 (V2).' },
          { type: 'translate', context: 'Dịch câu sau, chú ý câu có 2 chủ ngữ khác nhau.',
            promptLang: 'vi', prompt: 'Anh ấy đến văn phòng là thư ký sẽ báo cho giám đốc ngay.',
            answer: '他到了办公室秘书就告诉经理。', answerPy: 'Tā dàole bàngōngshì mìshū jiù gàosu jīnglǐ.',
            explanation: 'Chủ ngữ thứ hai (秘书) đứng ngay trước 就.' },
        ] },
      { point: 'Câu phản vấn 「能……吗？」',
        items: [
          { context: 'Chọn cách diễn đạt phản vấn đúng theo mẫu 能……吗？',
            pre: '你每天晚上吃了饭就睡觉，也不出去走走，', blank: '能不胖吗', post: '？', options: ['能不胖吗', '能胖吗', '不能胖吗'], answer: 0,
            explanation: '能不胖吗 (dạng phủ định) mang ý nghĩa thực chất là KHẲNG ĐỊNH — "chắc chắn sẽ béo" (会胖).' },
          { context: 'Học sinh không ôn bài, không luyện tập gì cả — chắc chắn thi không tốt.',
            pre: '你什么都不复习，', blank: '能考好吗', post: '？', options: ['能考好吗', '能不考好吗', '不能考好吗'], answer: 0,
            explanation: '能考好吗 (dạng khẳng định) mang ý nghĩa thực chất PHỦ ĐỊNH: "không thể thi tốt được".' },
          { context: 'Trời đang mưa rất to, người nói khẳng định chắc chắn sẽ bị ướt nếu ra ngoài không mang ô.',
            pre: '雨下得这么大，不带伞出去，', blank: '能不湿吗', post: '？', options: ['能不湿吗', '能湿吗', '不能湿吗'], answer: 0,
            explanation: '能不湿吗 (dạng phủ định) mang ý nghĩa thực chất KHẲNG ĐỊNH: "chắc chắn sẽ bị ướt".' },
          { type: 'judge', context: 'Câu phản vấn sau có mang ý nghĩa thực chất là "không thể học tốt được" không?',
            sentence: '你不做作业，也不练习，能学好吗？', isCorrect: true,
            explanation: '能学好吗 (dạng khẳng định) mang ý nghĩa thực chất PHỦ ĐỊNH — "không thể học tốt được" (不能学好). Câu này đúng ngữ pháp và đúng ý phản vấn.' },
          { type: 'judge', context: 'Xét câu sau có mang ý nghĩa thực chất là "sức khỏe chắc chắn tốt" không?',
            sentence: '他每天都运动，身体能不好吗？', isCorrect: true,
            explanation: 'Đúng — 能不好吗 (dạng phủ định) mang ý nghĩa thực chất KHẲNG ĐỊNH: "sức khỏe chắc chắn tốt".' },
          { type: 'judge', context: 'Xét câu sau có mang ý nghĩa thực chất là "không thể học tốt tiếng Trung được" không?',
            sentence: '你天天玩儿手机，不看书，能学好汉语吗？', isCorrect: true,
            explanation: 'Đúng — 能学好吗 (dạng khẳng định) mang ý nghĩa thực chất PHỦ ĐỊNH: "không thể học tốt tiếng Trung được".' },
          { type: 'sort', context: 'Sắp xếp câu phản vấn: Anh ấy ngày nào cũng ngủ rất muộn, sao mà không mệt được?',
            words: ['他', '天天', '都', '很', '晚', '睡觉', '，', '能', '不', '累', '吗', '？'], answer: '他天天都很晚睡觉，能不累吗？',
            explanation: '能不累吗 (dạng phủ định) mang ý nghĩa thực chất KHẲNG ĐỊNH: "chắc chắn rất mệt".' },
          { type: 'sort', context: 'Sắp xếp câu phản vấn: Con không ăn cơm, cũng không uống nước, sao mà khỏe được?',
            words: ['你', '不', '吃饭', '，', '也', '不', '喝水', '，', '能', '好', '吗', '？'], answer: '你不吃饭，也不喝水，能好吗？',
            explanation: '能好吗 (dạng khẳng định) mang ý nghĩa thực chất PHỦ ĐỊNH: "không thể khỏe được".' },
          { type: 'translate', context: 'Dịch câu sau sang tiếng Trung, dùng câu phản vấn 能……吗？',
            promptLang: 'vi', prompt: 'Anh ấy làm việc bận như vậy, sao mà không mệt được?',
            answer: '他工作这么忙，能不累吗？', answerPy: 'Tā gōngzuò zhème máng, néng bú lèi ma?',
            explanation: '能不累吗 (dạng phủ định) mang ý nghĩa thực chất KHẲNG ĐỊNH — "chắc chắn rất mệt" (一定很累).' },
          { type: 'translate', context: 'Dịch câu sau sang tiếng Trung, dùng câu phản vấn 能……吗？',
            promptLang: 'vi', prompt: 'Bạn tối nào cũng chơi đến 12 giờ mới ngủ, sáng hôm sau sao mà không buồn ngủ được?',
            answer: '你每天晚上玩儿到12点才睡觉，第二天早上能不困吗？', answerPy: 'Nǐ měitiān wǎnshang wánr dào shí\'èr diǎn cái shuìjiào, dì-èr tiān zǎoshang néng bú kùn ma?',
            explanation: '能不困吗 (dạng phủ định) mang ý nghĩa thực chất KHẲNG ĐỊNH: "chắc chắn sẽ buồn ngủ".' },
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
    $('#reviewPractice').hidden = true;
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
    $('#reviewPractice').hidden = true;
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
    $('#reviewPractice').hidden = true;
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
  // Tong so cau = dictation.length + mc.length, tinh dong theo tung bai (khac
  // nhau giua cac level: HSK2 la 10+5=15, HSK3 co the la 10+10=20...).
  function lpWbTotal() {
    var d = lpListenData;
    return ((d.dictation && d.dictation.length) || 0) + ((d.mc && d.mc.length) || 0);
  }

  function lpWorkbookUpdateScore() {
    var correct = 0;
    Object.keys(lpWorkbookScore.dictCorrect).forEach(function (k) { if (lpWorkbookScore.dictCorrect[k]) correct++; });
    Object.keys(lpWorkbookScore.mcCorrect).forEach(function (k) { if (lpWorkbookScore.mcCorrect[k]) correct++; });
    recordLessonScore(currentHubLesson, 'listen', { correct: correct, total: lpWbTotal() });
  }

  function renderListenWorkbook() {
    var wrap = $('#lpContent');
    var data = lpListenData;
    if (!lpWorkbookScore) { lpWorkbookScore = { dictCorrect: {}, mcCorrect: {} }; pgbInit('lpwq', lpWbTotal()); }

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
      // Cau 11-20 (neu co field "lines") cung nghe-dien-chinh-ta truoc, nhung
      // blank chi 1 cum tu ngan (khong dai nhu cau 1-10); day la buoc tu
      // kiem tra rieng, KHONG tinh vao diem — diem chinh van tinh theo dap
      // an trac nghiem ben duoi (dung dinh dang de thi goc).
      var mcDictHtml = '';
      if (item.lines && item.lines.length) {
        var mcLinesHtml = item.lines.map(function (line, li) {
          var inputId = 'lpMcDictInput-' + item.num + '-' + li;
          return '<div class="lp-dict-line">' +
            (line.speaker ? '<span class="lp-dict-speaker">' + line.speaker + '：</span>' : '') +
            '<span class="lp-dict-pre hanzi">' + line.pre + '</span>' +
            '<input type="text" class="lp-dict-input" id="' + inputId + '" data-mcdict-num="' + item.num + '" data-li="' + li + '" placeholder="…">' +
            '<span class="lp-dict-post hanzi">' + line.post + '</span>' +
          '</div>';
        }).join('');
        var mcAnswerHtml = item.lines.map(function (line) {
          return '<div class="lp-dict-answer-line">' +
            '<span class="hanzi">' + (line.speaker ? line.speaker + '：' : '') + line.pre + line.blank + line.post + '</span>' +
            '<div class="lp-dict-answer-py">' + line.py + '</div>' +
            '<div class="lp-dict-answer-vn">' + line.vn + '</div>' +
          '</div>';
        }).join('');
        mcDictHtml =
          '<div class="lp-mc-dict">' +
            mcLinesHtml +
            '<button type="button" class="lp-mcdict-reveal" data-mcdict-reveal="' + item.num + '">Xem đáp án chính tả</button>' +
            '<div class="lp-dict-answer" data-mcdict-answer="' + item.num + '" hidden>' + mcAnswerHtml + '</div>' +
          '</div>';
      }
      var optsHtml = item.options.map(function (opt, oi) {
        return '<button type="button" class="lp-mc-opt" data-mc-num="' + item.num + '" data-oi="' + oi + '">' + String.fromCharCode(65 + oi) + '. ' + opt + '</button>';
      }).join('');
      return '<div class="lp-mc-item">' +
        '<div class="lp-dict-num">Câu ' + item.num + '</div>' +
        mcDictHtml +
        '<div class="lp-mc-opts">' + optsHtml + '</div>' +
        '<div class="lp-mc-explain" data-explain-num="' + item.num + '" hidden></div>' +
      '</div>';
    }).join('');

    var dictCount = data.dictation.length;
    var mcCount = data.mc.length;
    var total = dictCount + mcCount;

    wrap.innerHTML =
      '<div class="lp-wb-audio-pin">' +
        '<div class="lp-wb-audio-pin-label">🎧 Audio đề nghe · Câu 1-' + total + '</div>' +
        '<audio class="lp-wb-audio" controls preload="none" src="' + data.audio + '"></audio>' +
      '</div>' +
      pgbHtml('lpwq', total) +
      '<div class="lp-wb-part">' +
        '<div class="lp-wb-part-title">Câu 1-' + dictCount + ' — Nghe và điền vào chỗ trống</div>' +
        dictationHtml +
      '</div>' +
      '<div class="lp-wb-part">' +
        '<div class="lp-wb-part-title">Câu ' + (dictCount + 1) + '-' + total + ' — Nghe hội thoại, chọn đáp án đúng</div>' +
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

    $all('.lp-mcdict-reveal', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var num = btn.getAttribute('data-mcdict-reveal');
        var item = data.mc.find(function (m) { return String(m.num) === num; });
        item.lines.forEach(function (line, li) {
          var input = $('#lpMcDictInput-' + num + '-' + li, wrap);
          var val = (input.value || '').trim();
          input.disabled = true;
          input.classList.add(val === line.blank ? 'is-correct' : 'is-wrong');
        });
        $('[data-mcdict-answer="' + num + '"]', wrap).hidden = false;
        btn.disabled = true;
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
    $('#reviewPractice').hidden = true;
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
    $('#reviewPractice').hidden = true;
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
    $('#reviewPractice').hidden = true;
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
    if (!tpQuiz) { tpQuiz = { pos: 0, score: 0 }; pgbInit('tpq', tpData.length); }

    if (tpQuiz.pos >= tpData.length) {
      recordLessonScore(currentHubLesson, 'translate', { correct: tpQuiz.score, total: tpData.length });
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
        tpQuiz.score++;
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
    $('#reviewPractice').hidden = true;

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

    document.addEventListener('click', function (e) {
      var section = e.target.closest('.dash-section');
      if (!section || PRACTICE_SECTION_IDS.indexOf(section.id) === -1) return;
      if (e.target.closest('.level-detail-back')) return;
      markStudyDay();
    });

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
    $('#rvBack').addEventListener('click', function () {
      if (currentHubLevelId) showLevelDetail(currentHubLevelId);
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
