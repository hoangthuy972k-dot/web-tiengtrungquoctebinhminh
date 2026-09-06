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
  var READY_LEVELS = { hsk1: true, hsk1v3: true, hsk2: true, hsk3: true, hsk4: true, yct: true };
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
    hsk3: ['match', 'fill', 'sort', 'errfix'],
    hsk4: ['match', 'fill', 'sort', 'errfix']
  };

  // Danh sách tab thật theo đúng thứ tự hiển thị trên từng loại trang bài học.
  var LEVEL_HUB_TABS = {
    hsk1: ['vocab', 'flash', 'grammar', 'dialog', 'listen', 'game', 'speak', 'translate'],
    hsk1v3: ['warmup', 'vocab', 'flash', 'grammar', 'dialog', 'listen', 'game', 'speak', 'translate', 'workbook'],
    hsk2: ['vocab', 'flash', 'grammar', 'dialog', 'game', 'listen', 'speak', 'translate'],
    hsk3: ['vocab', 'flash', 'grammar', 'dialog', 'game', 'listen', 'speak', 'translate'],
    hsk4: ['vocab', 'flash', 'grammar', 'dialog', 'game', 'listen', 'speak', 'translate'],
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
        mc: data.mcData,
        errorFixMode: data.errorFixMode
      };
    });
  }

  function loadLessonTranslate(lesson) {
    return loadLessonRawData(lesson).then(function (data) {
      return { vi2zh: data.translateData, zh2vi: data.translateDataRev };
    });
  }

  function audioBaseFor(lesson) {
    var m = lesson.fullPageUrl.match(/\/lessons\/(hsk1-|hsk1v3-|hsk2-|hsk3-|hsk4-)?bai-(\d+)\.html/);
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
    ],
    '/lessons/hsk4-bai-1.html': [
      { point: '「不仅……也/还/而且……」',
        items: [
          { context: 'Hoàn thành câu: cô ấy không những học giỏi, mà tính cách cũng rất tốt.',
            pre: '她', blank: '不仅', post: '学习好，性格也很好。', options: ['不仅', '虽然', '因为'], answer: 0,
            explanation: '不仅……也…… dùng để bổ sung thêm một ý ngoài điều vừa nêu, khi chủ ngữ hai vế giống nhau thì 不仅 đứng SAU chủ ngữ.' },
          { context: 'Hoàn thành câu: hai người sống chung, không những cần tình yêu lãng mạn, càng cần tính cách hợp nhau.',
            pre: '两个人共同生活，', blank: '不仅', post: '需要浪漫的爱情，更需要性格上互相吸引。', options: ['不仅', '即使', '从来'], answer: 0,
            explanation: '不仅……更…… là biến thể nhấn mạnh hơn của 不仅……也……, 更 nêu ý quan trọng hơn ở vế sau.' },
          { context: 'Hoàn thành câu: không những tôi thích uống cà phê, bạn tôi cũng thích.',
            pre: '', blank: '不仅', post: '我喜欢喝咖啡，我朋友也喜欢。', options: ['不仅', '只有', '即使'], answer: 0,
            explanation: 'Khi chủ ngữ hai vế KHÁC NHAU (我 và 我朋友), 不仅 đứng TRƯỚC chủ ngữ của vế 1.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他不仅足球踢得好，性格也不错。', isCorrect: true,
            explanation: 'Câu đúng: chủ ngữ 他 giống nhau ở hai vế, 不仅 đứng ngay sau chủ ngữ, 也 hô ứng ở vế sau.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他也不仅足球踢得好，性格好。', isCorrect: false, correctVersion: '他不仅足球踢得好，性格也不错。',
            explanation: '也 không được đặt trước 不仅; 也 phải đứng ở VẾ SAU, ngay trước vị ngữ thứ hai (性格也不错).' },
          { type: 'sort', context: 'Sắp xếp câu: anh ấy không những hóm hỉnh, mà tính cách cũng rất tốt.',
            words: ['他', '不仅', '很', '幽默', '，', '性格', '也', '很', '好', '。'], answer: '他不仅很幽默，性格也很好。',
            explanation: '不仅 sau chủ ngữ 他, 也 sau chủ ngữ ẩn của vế 2 (性格).' },
          { type: 'sort', context: 'Sắp xếp câu: không những cô ấy xinh đẹp, mà còn rất thông minh.',
            words: ['她', '不仅', '长得', '漂亮', '，', '还', '很', '聪明', '。'], answer: '她不仅长得漂亮，还很聪明。',
            explanation: '不仅……还…… là một cặp hô ứng khác của cùng cấu trúc, thay cho 也.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 不仅……也……',
            promptLang: 'vi', prompt: 'Cô ấy không những xinh đẹp, mà còn rất thông minh.',
            answer: '她不仅长得漂亮，也很聪明。', answerPy: 'Tā bùjǐn zhǎng de piàoliang, yě hěn cōngming.',
            explanation: '不仅……也…… — không những … mà còn ….' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Không những tôi thích xem phim, bạn tôi cũng thích.',
            answer: '不仅我喜欢看电影，我朋友也喜欢。', answerPy: 'Bùjǐn wǒ xǐhuan kàn diànyǐng, wǒ péngyou yě xǐhuan.',
            explanation: 'Chủ ngữ khác nhau nên 不仅 đứng trước chủ ngữ của vế 1.' },
          { context: 'Hoàn thành câu: cô ấy không những học giỏi, mà thể thao cũng rất giỏi.',
            pre: '她', blank: '不仅', post: '学习好，运动也很好。', options: ['不仅', '刚', '即使'], answer: 0,
            explanation: '不仅……也…… — không những … mà còn ….' },
        ] },
      { point: '「从来」— từ trước đến nay',
        items: [
          { context: 'Hoàn thành câu: anh ấy đi họp từ trước đến giờ chưa bao giờ đến muộn.',
            pre: '他开会', blank: '从来', post: '不迟到。', options: ['从来', '刚', '即使'], answer: 0,
            explanation: '从来 (phó từ) đứng trước 不/没, diễn tả từ quá khứ đến hiện tại luôn luôn như vậy.' },
          { context: 'Hoàn thành câu: tôi từ trước đến giờ chưa từng vui như vậy.',
            pre: '我', blank: '从来', post: '没这么快乐过。', options: ['从来', '刚才', '一直都'], answer: 0,
            explanation: '从来没……过 — chưa từng … bao giờ.' },
          { context: 'Hoàn thành câu: quán mì này từ trước đến giờ chỉ bán một loại.',
            pre: '这家面馆', blank: '从来', post: '只卖一种东西。', options: ['从来', '刚', '最好'], answer: 0,
            explanation: '从来 + chỉ/luôn — nhấn mạnh tính không đổi từ trước đến nay.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '虽然我们认识的时间不长，但我从来没这么快乐过。', isCorrect: true,
            explanation: 'Câu đúng: 虽然……但…… kết hợp 从来没……过 để nhấn mạnh mức độ chưa từng có.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我从来这么快乐没过。', isCorrect: false, correctVersion: '我从来没这么快乐过。',
            explanation: '从来 phải đứng ngay trước 没/不, không được tách rời khỏi 没.' },
          { type: 'sort', context: 'Sắp xếp câu: anh ấy từ trước đến giờ đều rất đúng giờ.',
            words: ['他', '从来', '都', '很', '准时', '。'], answer: '他从来都很准时。',
            explanation: '从来都 + tính từ — nhấn mạnh sự ổn định lâu dài.' },
          { type: 'sort', context: 'Sắp xếp câu: cô ấy từ trước đến giờ chưa từng nói dối tôi.',
            words: ['她', '从来', '没', '骗', '过', '我', '。'], answer: '她从来没骗过我。',
            explanation: '从来没 + V + 过 — chưa từng làm gì.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 从来.',
            promptLang: 'vi', prompt: 'Anh ấy từ trước đến giờ chưa từng nổi giận với tôi.',
            answer: '他从来没跟我生过气。', answerPy: 'Tā cónglái méi gēn wǒ shēngguo qì.',
            explanation: '从来没……过 — chưa từng ….' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Từ trước đến giờ cô ấy đều rất quan tâm đến bạn bè.',
            answer: '她从来都很关心朋友。', answerPy: 'Tā cónglái dōu hěn guānxīn péngyou.',
            explanation: '从来都 + tính từ/động từ — luôn luôn như vậy.' },
          { context: 'Hoàn thành câu: cô ấy từ trước đến giờ chưa từng đến muộn.',
            pre: '她', blank: '从来', post: '没迟到过。', options: ['从来', '刚', '最好'], answer: 0,
            explanation: '从来没……过 — chưa từng ….' },
        ] },
      { point: '「刚」so sánh với 「刚才」',
        items: [
          { context: 'Hoàn thành câu: chúng tôi vừa mới quen nhau.',
            pre: '我们', blank: '刚', post: '认识，还不太熟悉。', options: ['刚', '刚才', '从来'], answer: 0,
            explanation: '刚 (phó từ) đứng sau chủ ngữ, trước động từ, diễn tả việc vừa mới xảy ra.' },
          { context: 'Hoàn thành câu: tôi vừa mới xem qua hộp thư, không có thư mới.',
            pre: '我', blank: '刚', post: '看了邮箱，没有新邮件。', options: ['刚', '刚才', '一直'], answer: 0,
            explanation: '刚 có thể đi cùng thời lượng phía sau động từ (刚看了); 刚才 (danh từ) thì không.' },
          { context: 'Hoàn thành câu: (đứng đầu câu) vừa nãy tôi đi vệ sinh, bạn có gọi điện cho tôi không?',
            pre: '', blank: '刚才', post: '我去洗手间了，你给我打电话了？', options: ['刚才', '刚', '从来'], answer: 0,
            explanation: '刚才 (danh từ chỉ thời gian) có thể đứng ĐẦU CÂU, trước chủ ngữ — điều mà 刚 không làm được.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们搬来刚一个星期，还不熟悉。', isCorrect: false, correctVersion: '我们刚搬来一个星期，还不熟悉。',
            explanation: '刚 phải đứng ngay sau chủ ngữ và trước động từ (我们 + 刚 + 搬来), không đặt sau động từ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你为什么刚才不说，现在才说？', isCorrect: true,
            explanation: 'Câu đúng: 刚才 có thể theo sau bởi phủ định 不, còn 刚 thì không được dùng theo cách này.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi vừa từ phòng họp qua đây.',
            words: ['我', '刚', '从', '会议室', '过来', '。'], answer: '我刚从会议室过来。',
            explanation: '刚 đứng sau chủ ngữ 我, trước cụm giới từ 从会议室.' },
          { type: 'sort', context: 'Sắp xếp câu: vừa nãy tôi đi vệ sinh rồi, bạn gọi điện cho tôi lúc nào?',
            words: ['刚才', '我', '去', '洗手间', '了', '，', '你', '什么时候', '给', '我', '打电话', '的', '？'], answer: '刚才我去洗手间了，你什么时候给我打电话的？',
            explanation: '刚才 đứng đầu câu vì là danh từ chỉ thời gian, không phải phó từ.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 刚.',
            promptLang: 'vi', prompt: 'Chúng tôi vừa mới chuyển đến đây một tuần.',
            answer: '我们刚搬来这儿一个星期。', answerPy: 'Wǒmen gāng bānlái zhèr yí ge xīngqī.',
            explanation: '刚 đứng sau chủ ngữ, trước động từ, có thể mang thời lượng phía sau.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 刚才.',
            promptLang: 'vi', prompt: 'Vừa nãy ai gọi điện cho bạn vậy?',
            answer: '刚才是谁给你打电话的？', answerPy: 'Gāngcái shì shéi gěi nǐ dǎ diànhuà de?',
            explanation: '刚才 đứng đầu câu, là danh từ chỉ thời gian.' },
        ] },
      { point: '「即使……也……」',
        items: [
          { context: 'Hoàn thành câu: cho dù công việc bận, anh ấy cũng sẽ gọi điện cho gia đình mỗi ngày.',
            pre: '即使工作很忙，他', blank: '也', post: '会每天给家人打电话。', options: ['也', '才', '刚'], answer: 0,
            explanation: '即使……也…… — 也 phải đứng ngay sau chủ ngữ của vế 2, trước động từ.' },
          { context: 'Hoàn thành câu: cho dù chỉ là chuyện nhỏ bình thường, nó cũng có thể khiến người ta cảm động.',
            pre: '', blank: '即使', post: '只是一件普通的小事，它也能让人感动。', options: ['即使', '不仅', '从来'], answer: 0,
            explanation: '即使 đứng đầu vế 1, nêu tình huống nhượng bộ giả thiết hoặc đã tồn tại.' },
          { context: 'Hoàn thành câu: cho dù thất bại, ấn tượng cô ấy để lại vẫn khiến người ta ngưỡng mộ.',
            pre: '即使失败了，她留下的印象', blank: '也', post: '让人羡慕。', options: ['也', '才', '就'], answer: 0,
            explanation: '即使……也…… diễn tả: dù A xảy ra, kết quả B vẫn không đổi.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '即使工作很忙，也他每天打电话。', isCorrect: false, correctVersion: '即使工作很忙，他也每天打电话。',
            explanation: '也 phải đứng SAU chủ ngữ của vế 2 (他也……), không đặt trước chủ ngữ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '即使他脾气不太好，我也还是很喜欢他。', isCorrect: true,
            explanation: 'Câu đúng: 即使……也还是…… — cho dù … tôi vẫn ….' },
          { type: 'sort', context: 'Sắp xếp câu: cho dù chỉ là ăn cơm, trò chuyện với họ, họ cũng sẽ cảm thấy rất hạnh phúc.',
            words: ['即使', '只是', '跟', '他们', '吃吃饭', '、', '聊聊天', '，', '他们', '也', '会', '觉得', '很', '幸福', '。'], answer: '即使只是跟他们吃吃饭、聊聊天，他们也会觉得很幸福。',
            explanation: '即使 mở đầu vế điều kiện nhượng bộ, 也 hô ứng ở vế kết quả.' },
          { type: 'sort', context: 'Sắp xếp câu: cho dù mỗi ngày đều tăng ca, anh ấy cũng không hề than phiền.',
            words: ['即使', '每天', '都', '加班', '，', '他', '也', '从来', '不', '抱怨', '。'], answer: '即使每天都加班，他也从来不抱怨。',
            explanation: '即使……也…… có thể kết hợp thêm 从来不 ở vế sau để nhấn mạnh.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 即使……也……',
            promptLang: 'vi', prompt: 'Cho dù về nhà rất muộn, đèn nhà anh ấy vẫn luôn sáng.',
            answer: '即使回家很晚，他家的灯也一直亮着。', answerPy: 'Jíshǐ huí jiā hěn wǎn, tā jiā de dēng yě yìzhí liàngzhe.',
            explanation: '即使……也…… — cho dù … vẫn ….' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Cho dù tính tình cô ấy không tốt lắm, mọi người vẫn thích cô ấy.',
            answer: '即使她脾气不太好，大家也还是喜欢她。', answerPy: 'Jíshǐ tā píqi bú tài hǎo, dàjiā yě háishi xǐhuan tā.',
            explanation: '即使……也还是…… — cho dù … mọi người vẫn ….' },
        ] },
      { point: '「(在)……上」— chỉ phương diện, khía cạnh',
        items: [
          { context: 'Hoàn thành câu: hai người cần thu hút lẫn nhau về mặt tính cách.',
            pre: '两个人需要性格', blank: '上', post: '互相吸引。', options: ['上', '里', '下'], answer: 0,
            explanation: 'danh từ chỉ phương vị 上 đứng sau danh từ chỉ phạm vi (性格 + 上), diễn tả "về mặt/phương diện nào đó".' },
          { context: 'Hoàn thành câu: về mặt công việc, chúng tôi luôn giúp đỡ lẫn nhau.',
            pre: '在工作', blank: '上', post: '，我们一直互相帮助。', options: ['上', '中', '内'], answer: 0,
            explanation: '在……上 — cấu trúc đầy đủ với 在 ở đầu, 上 ở cuối cụm danh từ chỉ phạm vi.' },
          { context: 'Hoàn thành câu: bài tập hôm nay là ôn từ mới, ngày mai sẽ kiểm tra trên lớp.',
            pre: '今天的作业是复习生词，明天课', blank: '上', post: '听写。', options: ['上', '里', '中'], answer: 0,
            explanation: '课上 = trên lớp, trong giờ học — 上 chỉ phạm vi "trong khuôn khổ tiết học".' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '两个人需要性格互相上吸引。', isCorrect: false, correctVersion: '两个人需要性格上互相吸引。',
            explanation: '上 phải đứng ngay sau danh từ chỉ phạm vi (性格), không được chen 互相 vào giữa.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你觉得北方和南方在饮食上有什么不同？', isCorrect: true,
            explanation: 'Câu đúng: 在……上 nêu phạm vi so sánh (饮食 = ăn uống).' },
          { type: 'sort', context: 'Sắp xếp câu: về mặt cuộc sống, chúng tôi luôn giúp đỡ lẫn nhau.',
            words: ['在', '生活', '上', '，', '我们', '一直', '互相', '帮助', '。'], answer: '在生活上，我们一直互相帮助。',
            explanation: '在 + danh từ phạm vi + 上, đứng đầu câu làm trạng ngữ.' },
          { type: 'sort', context: 'Sắp xếp câu: ngay cả khi ấn tượng ban đầu không tốt, nó vẫn có thể thay đổi.',
            words: ['即使', '第一', '印象', '不好', '，', '它', '也', '可以', '改变', '。'], answer: '即使第一印象不好，它也可以改变。',
            explanation: 'Ôn lại 即使……也…… kết hợp với từ vựng bài học (印象).' },
          { type: 'translate', context: 'Dịch câu sau, dùng (在)……上.',
            promptLang: 'vi', prompt: 'Về phương diện tình cảm, tôi cảm thấy mình rất hạnh phúc.',
            answer: '在感情上，我觉得自己很幸福。', answerPy: 'Zài gǎnqíng shang, wǒ juéde zìjǐ hěn xìngfú.',
            explanation: '在……上 — về phương diện, khía cạnh nào đó.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Về vấn đề này, hai người tốt nhất nên hiểu nhau nhiều hơn.',
            answer: '在这件事上，两个人最好多互相理解。', answerPy: 'Zài zhè jiàn shì shang, liǎng ge rén zuìhǎo duō hùxiāng lǐjiě.',
            explanation: '在……上 kết hợp 最好 nêu lời khuyên.' },
        ] },
    ],
    '/lessons/hsk4-bai-2.html': [
      { point: '「正好」',
        items: [
          { context: 'Hoàn thành câu: táo 8 tệ rưỡi, dưa hấu 11 tệ rưỡi, vừa đúng 20 tệ.',
            pre: '苹果八块五，西瓜十一块五，', blank: '正好', post: '二十块。', options: ['正好', '差不多', '尽管'], answer: 0,
            explanation: '正好 (tính từ) — vừa vặn, đúng số lượng, không thừa không thiếu.' },
          { context: 'Hoàn thành câu: chúng tôi chiều nay đi đá bóng, đúng dịp cùng đi luôn nhé.',
            pre: '我们下午要去踢足球，', blank: '正好', post: '一起去吧。', options: ['正好', '却', '而'], answer: 0,
            explanation: '正好 (phó từ) — đúng dịp, gặp dịp làm gì đó.' },
          { context: 'Hoàn thành câu: bạn đến đúng lúc thật, ví tôi mất rồi, cho tôi mượn ít tiền nhé.',
            pre: '你来得', blank: '正好', post: '，我的钱包不见了，借我点儿钱吧。', options: ['正好', '差不多', '尽管'], answer: 0,
            explanation: '来得正好 — cụm cố định, đến rất đúng lúc.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们下午要去踢足球，正好一起去吧。', isCorrect: true,
            explanation: 'Câu đúng: 正好 (phó từ) đứng trước động từ, nêu ý gặp dịp làm gì.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '苹果八块五，西瓜十一块五，二十块正好。', isCorrect: false, correctVersion: '苹果八块五，西瓜十一块五，正好二十块。',
            explanation: '正好 phải đứng TRƯỚC số lượng khi làm định ngữ nhấn mạnh sự vừa vặn, không đặt sau.' },
          { type: 'sort', context: 'Sắp xếp câu: bạn đến đúng lúc thật, tôi vừa định gọi điện cho bạn.',
            words: ['你', '来', '得', '正好', '，', '我', '正', '想', '给', '你', '打电话', '呢', '。'], answer: '你来得正好，我正想给你打电话呢。',
            explanation: '来得正好 — cụm cố định.' },
          { type: 'sort', context: 'Sắp xếp câu: chỉ cần bạn rảnh, đúng dịp chúng ta cùng đi dạo phố.',
            words: ['只要', '你', '有', '空', '，', '正好', '我们', '一起', '去', '逛街', '。'], answer: '只要你有空，正好我们一起去逛街。',
            explanation: '正好 (phó từ) nêu dịp thuận tiện để làm việc gì đó.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 正好.',
            promptLang: 'vi', prompt: 'Trương Viễn còn đặc biệt bay từ nước ngoài về, đúng dịp mượn cơ hội này gặp mặt.',
            answer: '张远还专门从国外飞回来呢，正好借这个机会见见。', answerPy: 'Zhāng Yuǎn hái zhuānmén cóng guówài fēi huilai ne, zhènghǎo jiè zhège jīhuì jiànjian.',
            explanation: '正好 + động từ — đúng dịp làm gì.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Hôm nay đúng là sinh nhật tôi, đúng dịp mọi người cùng ăn mừng luôn.',
            answer: '今天正好是我的生日，正好大家一起庆祝一下。', answerPy: 'Jīntiān zhènghǎo shì wǒ de shēngrì, zhènghǎo dàjiā yìqǐ qìngzhù yíxià.',
            explanation: '正好 vừa làm tính từ (đúng là) vừa làm phó từ (đúng dịp) trong cùng một câu.' },
        ] },
      { point: '「差不多」so sánh với 「几乎」',
        items: [
          { context: 'Hoàn thành câu: đến được gần một nửa rồi, Trương Viễn còn đặc biệt bay từ nước ngoài về nữa.',
            pre: '', blank: '差不多', post: '一半儿吧，张远还专门从国外飞回来呢。', options: ['差不多', '尽管', '正好'], answer: 0,
            explanation: '差不多 (phó từ) đứng trước số lượng, diễn tả xấp xỉ.' },
          { context: 'Hoàn thành câu: hai chị em tính cách gần như giống nhau.',
            pre: '姐妹俩性格', blank: '差不多', post: '。', options: ['差不多', '几乎', '却'], answer: 0,
            explanation: '差不多 (tính từ) làm vị ngữ, diễn tả sự tương đồng, không khác biệt nhiều — 几乎 không có cách dùng làm vị ngữ này.' },
          { context: 'Hoàn thành câu: việc này tôi suýt quên mất rồi.',
            pre: '这件事我', blank: '几乎', post: '忘了。', options: ['几乎', '差不多', '正好'], answer: 0,
            explanation: '几乎 có thể diễn tả việc suýt xảy ra ngoài ý muốn (ở đây là suýt quên) — 差不多 không có cách dùng này.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '李老师差不多六十岁了。', isCorrect: true,
            explanation: 'Câu đúng: 差不多 đứng trước số lượng (六十岁), diễn tả xấp xỉ — 几乎 không dùng được trước số lượng theo cách này.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他们俩几乎六十岁了。', isCorrect: false, correctVersion: '他们俩差不多六十岁了。',
            explanation: '几乎 không thể đứng trực tiếp trước số lượng để diễn tả "xấp xỉ bao nhiêu tuổi" — phải dùng 差不多.' },
          { type: 'sort', context: 'Sắp xếp câu: anh ấy nói tiếng Trung rất giỏi, gần như giống người Trung Quốc rồi.',
            words: ['他', '汉语', '说', '得', '很', '好', '，', '差不多', '跟', '中国人', '一样', '了', '。'], answer: '他汉语说得很好，差不多跟中国人一样了。',
            explanation: '差不多 + 跟……一样 — gần như giống….' },
          { type: 'sort', context: 'Sắp xếp câu: nếu không phải bạn gọi điện cho tôi, tôi suýt quên mất chuyện hai ta gặp nhau rồi.',
            words: ['要不是', '你', '给', '我', '打电话', '，', '我', '差不多', '忘', '了', '咱俩', '见面', '的', '事', '。'], answer: '要不是你给我打电话，我差不多忘了咱俩见面的事。',
            explanation: '差不多 trước động từ — suýt nữa, gần như.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 差不多.',
            promptLang: 'vi', prompt: 'Gần được một nửa số bạn học đến tham gia họp lớp.',
            answer: '差不多一半的同学来参加了同学聚会。', answerPy: 'Chàbuduō yíbàn de tóngxué lái cānjiāle tóngxué jùhuì.',
            explanation: '差不多 + số lượng — gần được bao nhiêu.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 几乎.',
            promptLang: 'vi', prompt: 'Tôi suýt nữa quên mất chuyện hôm nay có họp lớp.',
            answer: '我几乎忘了今天有同学聚会的事。', answerPy: 'Wǒ jīhū wàngle jīntiān yǒu tóngxué jùhuì de shì.',
            explanation: '几乎 diễn tả việc suýt xảy ra ngoài ý muốn.' },
        ] },
      { point: '「尽管」',
        items: [
          { context: 'Hoàn thành câu: mặc dù đã tốt nghiệp nhiều năm như vậy, chúng tôi vẫn thường xuyên liên lạc.',
            pre: '', blank: '尽管', post: '已经毕业这么多年，我们还是经常联系的。', options: ['尽管', '正好', '却'], answer: 0,
            explanation: '尽管 đứng đầu vế câu thứ nhất, nêu một sự thật (đã tốt nghiệp nhiều năm).' },
          { context: 'Hoàn thành câu: món quà này tuy không đắt, nhưng lại khiến tôi rất cảm động.',
            pre: '这份礼物', blank: '尽管', post: '不贵，但却让我非常感动。', options: ['尽管', '差不多', '而'], answer: 0,
            explanation: '尽管……但却…… — kết hợp 尽管 và 却 để tăng sắc thái tương phản.' },
          { context: 'Hoàn thành câu: mặc dù bây giờ công việc bận rộn, nhưng cuối tuần anh ấy vẫn đi chơi thể thao với bạn bè.',
            pre: '', blank: '尽管', post: '现在工作很忙，可到了周末他还是会跟朋友去打球。', options: ['尽管', '正好', '几乎'], answer: 0,
            explanation: '尽管……可……还是…… — nêu sự thật rồi nêu kết quả không như dự đoán.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '尽管认识不到一个月，但他们已经决定结婚了。', isCorrect: true,
            explanation: 'Câu đúng: 尽管 nêu sự thật (quen chưa đầy một tháng), 但 nêu kết quả không như dự đoán thông thường.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他写得比较慢，尽管写得还是很好看。', isCorrect: false, correctVersion: '尽管他写得比较慢，但写得还是很好看。',
            explanation: '尽管 phải đứng ở ĐẦU vế câu thứ nhất (nêu sự thật), không đặt ở vế thứ hai.' },
          { type: 'sort', context: 'Sắp xếp câu: mặc dù trời hơi lạnh, chúng tôi vẫn muốn ra ngoài đi dạo phố.',
            words: ['尽管', '天气', '有点儿', '冷', '，', '但', '我们', '还是', '想', '出去', '逛街', '。'], answer: '尽管天气有点儿冷，但我们还是想出去逛街。',
            explanation: '尽管……但……还是…… — cấu trúc tương phản đầy đủ.' },
          { type: 'sort', context: 'Sắp xếp câu: mặc dù anh ấy tính khí hơi nóng nảy, nhưng làm việc rất nghiêm túc.',
            words: ['叔叔', '尽管', '脾气', '有点儿', '大', '，', '但', '工作', '很', '认真', '。'], answer: '叔叔尽管脾气有点儿大，但工作很认真。',
            explanation: '尽管 có thể đứng sau chủ ngữ (叔叔) khi chủ ngữ của cả hai vế giống nhau.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 尽管……但是……',
            promptLang: 'vi', prompt: 'Mặc dù mới quen chưa đầy một tháng, nhưng họ đã quyết định kết hôn.',
            answer: '尽管认识不到一个月，但他们已经决定结婚了。', answerPy: 'Jǐnguǎn rènshi bú dào yí ge yuè, dàn tāmen yǐjīng juédìng jié hūn le.',
            explanation: '尽管……但…… — mặc dù … nhưng ….' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Mặc dù cuộc sống đôi khi nhàm chán, nhưng có bạn bè ở bên sẽ tốt hơn nhiều.',
            answer: '尽管生活有时候很无聊，但有朋友陪着就会好很多。', answerPy: 'Jǐnguǎn shēnghuó yǒu shíhou hěn wúliáo, dàn yǒu péngyou péizhe jiù huì hǎo hěn duō.',
            explanation: '尽管……但…… kết hợp với từ vựng bài học (无聊, 陪).' },
        ] },
      { point: '「却」',
        items: [
          { context: 'Hoàn thành câu: một người tính khí không tốt tuy chưa chắc khiến người khác ghét, nhưng lại rất khó kết bạn.',
            pre: '一个脾气不好的人虽然不一定让人讨厌，但是', blank: '却', post: '很难跟人交朋友。', options: ['却', '尽管', '而'], answer: 0,
            explanation: '却 (phó từ) đứng sau 但是, trước vị ngữ, tăng sắc thái tương phản nhẹ nhàng.' },
          { context: 'Hoàn thành câu: có người cho rằng có nhà có xe là hạnh phúc, có người lại cho rằng tình yêu mới là hạnh phúc.',
            pre: '有人觉得有房子和汽车就是幸福，有人', blank: '却', post: '认为找到真正的爱情才是幸福。', options: ['却', '正好', '差不多'], answer: 0,
            explanation: '却 đứng ngay sau chủ ngữ của vế thứ hai (有人), trước động từ 认为.' },
          { context: 'Hoàn thành câu: bây giờ nhiều người tuy sống cùng tòa nhà, nhưng lại chưa từng nói chuyện.',
            pre: '现在很多人虽然住在同一个楼里，但是', blank: '却', post: '从来没说过话。', options: ['却', '尽管', '而'], answer: 0,
            explanation: '却 kết hợp với 虽然……但是…… để nhấn mạnh sự tương phản.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他喜欢锻炼身体，他弟弟却很懒得运动。', isCorrect: true,
            explanation: 'Câu đúng: 却 đứng sau chủ ngữ của vế 2 (他弟弟), nêu sự tương phản với vế 1.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '却他弟弟很懒得运动。', isCorrect: false, correctVersion: '他弟弟却很懒得运动。',
            explanation: '却 không thể đứng ở ĐẦU CÂU trước chủ ngữ — phải đứng SAU chủ ngữ.' },
          { type: 'sort', context: 'Sắp xếp câu: có người ăn rất ít, nhưng lại không gầy.',
            words: ['有的', '人', '吃', '得', '很', '少', '，', '但', '不', '瘦', '，', '却', '让', '人', '羡慕', '。'], answer: '有的人吃得很少，但不瘦，却让人羡慕。',
            explanation: '却 nêu kết quả bất ngờ (không gầy, lại còn khiến người khác ghen tị).' },
          { type: 'sort', context: 'Sắp xếp câu: cô ấy tính tình rất tốt, nhưng lại ít bạn bè.',
            words: ['她', '性格', '很', '好', '，', '朋友', '却', '很', '少', '。'], answer: '她性格很好，朋友却很少。',
            explanation: '却 nêu sự tương phản giữa "tính tốt" và "ít bạn bè".' },
          { type: 'translate', context: 'Dịch câu sau, dùng 却.',
            promptLang: 'vi', prompt: 'Anh ấy thích rèn luyện thân thể, còn em trai anh ấy lại rất lười vận động.',
            answer: '他喜欢锻炼身体，他弟弟却很懒得运动。', answerPy: 'Tā xǐhuan duànliàn shēntǐ, tā dìdi què hěn lǎnde yùndòng.',
            explanation: '却 nêu sự tương phản nhẹ nhàng giữa hai chủ thể khác nhau.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Anh ấy tính khí không tốt lắm, nhưng lại rất dễ kết bạn.',
            answer: '他脾气不太好，但却很容易交朋友。', answerPy: 'Tā píqi bú tài hǎo, dàn què hěn róngyì jiāo péngyou.',
            explanation: '但……却…… — nhưng lại….' },
        ] },
      { point: '「而」',
        items: [
          { context: 'Hoàn thành câu: chữ "明", bên trái chữ "日" nghĩa là mặt trời, còn bên phải chữ "月" nghĩa là mặt trăng.',
            pre: '"明"字，左边的"日"意思是太阳，', blank: '而', post: '右边的"月"意思是月亮。', options: ['而', '却', '尽管'], answer: 0,
            explanation: '而 nối hai vế câu liệt kê song song (đồng đẳng), không mang sắc thái tương phản mạnh.' },
          { context: 'Hoàn thành câu: đàn ông về nhà không thích nói với vợ, còn phụ nữ thì thích nói với chồng.',
            pre: '男人回到家不喜欢跟妻子说，', blank: '而', post: '女人喜欢跟丈夫说。', options: ['而', '正好', '差不多'], answer: 0,
            explanation: '而 nối hai vế đối lập song song (đàn ông >< phụ nữ).' },
          { context: 'Hoàn thành câu: còn cách hiểu của tôi là: khi bạn gặp khó khăn, bạn chân chính sẽ đứng ra.',
            pre: '', blank: '而', post: '我的理解是：当你遇到困难的时候，真正的朋友会站出来。', options: ['而', '却', '尽管'], answer: 0,
            explanation: '而 đứng đầu câu, dẫn vào một ý kiến/quan điểm khác để so sánh với ý trước đó.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '有人喜欢待在家里，而有人喜欢出去逛街。', isCorrect: true,
            explanation: 'Câu đúng: 而 nối hai vế song song, đối lập nhẹ nhàng về sở thích.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '她理解的友谊是真诚，不是而利益。', isCorrect: false, correctVersion: '她理解的友谊是真诚，而不是利益。',
            explanation: '而 phải đứng TRƯỚC 不是, tạo thành cụm cố định 而不是 (mà không phải là).' },
          { type: 'sort', context: 'Sắp xếp câu: có người thích ở nhà, còn có người thích ra ngoài đi dạo phố.',
            words: ['有人', '喜欢', '待', '在', '家里', '，', '而', '有人', '喜欢', '出去', '逛街', '。'], answer: '有人喜欢待在家里，而有人喜欢出去逛街。',
            explanation: '而 nối hai vế câu đối lập về chủ thể và hành động.' },
          { type: 'sort', context: 'Sắp xếp câu: cô ấy hiểu tình bạn là sự chân thành, mà không phải là lợi ích.',
            words: ['她', '理解', '的', '友谊', '是', '真诚', '，', '而', '不是', '利益', '。'], answer: '她理解的友谊是真诚，而不是利益。',
            explanation: '而不是…… — mà không phải là….' },
          { type: 'translate', context: 'Dịch câu sau, dùng 而.',
            promptLang: 'vi', prompt: 'Người già thích nhìn lại quá khứ, còn người trẻ thích hướng về tương lai.',
            answer: '老年人喜欢往回看，而年轻人喜欢往前看。', answerPy: 'Lǎonián rén xǐhuan wǎng huí kàn, ér niánqīng rén xǐhuan wǎng qián kàn.',
            explanation: '而 nối hai vế đối lập song song về nhóm người và xu hướng.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Có nơi cả bốn mùa đều có thể thấy tuyết, mà có nơi cả đời chưa từng thấy tuyết.',
            answer: '有的地方一年四季都可以见到雪，而有的地方一辈子都没见过雪。', answerPy: 'Yǒude dìfang yì nián sìjì dōu kěyǐ jiàndào xuě, ér yǒude dìfang yíbèizi dōu méi jiànguo xuě.',
            explanation: '而 nối hai vế đối lập về địa điểm và hiện tượng thời tiết.' },
        ] },
    ],
    '/lessons/hsk4-bai-3.html': [
      { point: '「挺……的」',
        items: [
          { context: 'Hoàn thành câu: những câu hỏi họ hỏi đều khá dễ, chỉ là tôi hơi hồi hộp.',
            pre: '他们问的问题都', blank: '挺', post: '容易的，就是我有点儿紧张。', options: ['挺', '却', '而'], answer: 0,
            explanation: '挺……的 — khá, rất (mức độ, khẩu ngữ), thường đi cùng 的 ở cuối.' },
          { context: 'Hoàn thành câu: đồ ở cửa hàng này khá tốt, tôi thường đến đây mua đồ.',
            pre: '这家店的东西', blank: '挺', post: '好的，我经常来这儿买东西。', options: ['挺', '本来', '另外'], answer: 0,
            explanation: '挺 + tính từ + 的 — diễn tả mức độ khá cao.' },
          { context: 'Hoàn thành câu: tôi khá thích nơi này, môi trường xung quanh yên tĩnh hơn nhiều.',
            pre: '我', blank: '挺', post: '喜欢这个地方的，周围环境比以前住的地方安静很多。', options: ['挺', '不管', '首先'], answer: 0,
            explanation: '挺 + động từ tâm lý (喜欢) + 的.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他们问的问题都挺容易的，就是我有点儿紧张。', isCorrect: true,
            explanation: 'Câu đúng: 挺……的 diễn tả mức độ khá, kết hợp tự nhiên với 有点儿 ở vế sau.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我挺喜欢，这个地方的。', isCorrect: false, correctVersion: '我挺喜欢这个地方的。',
            explanation: '挺……的 phải bao trọn cụm động từ + tân ngữ ở giữa, không tách rời tân ngữ ra sau dấu phẩy.' },
          { type: 'sort', context: 'Sắp xếp câu: mấy ngày nay khá lạnh, bạn không cần mặc nhiều quần áo như vậy đâu.',
            words: ['这', '几天', '挺', '冷', '的', '，', '你', '不用', '穿', '这么', '多', '衣服', '。'], answer: '这几天挺冷的，你不用穿这么多衣服。',
            explanation: '挺……的 — khá lạnh (mức độ vừa phải).' },
          { type: 'sort', context: 'Sắp xếp câu: căn phòng đó vừa yên tĩnh vừa sạch sẽ, tôi khá thích ở đó.',
            words: ['那个', '房间', '又', '安静', '又', '干净', '，', '我', '挺', '喜欢', '的', '。'], answer: '那个房间又安静又干净，我挺喜欢的。',
            explanation: '又……又…… kết hợp 挺……的, ôn lại cấu trúc HSK2.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 挺……的.',
            promptLang: 'vi', prompt: 'Công việc hiện tại của tôi khá tốt, đồng nghiệp cũng rất nhiệt tình.',
            answer: '我现在的工作挺好的，同事也很热情。', answerPy: 'Wǒ xiànzài de gōngzuò tǐng hǎo de, tóngshì yě hěn rèqíng.',
            explanation: '挺……的 — khá tốt (mức độ vừa phải, khẩu ngữ).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Cuộc phỏng vấn hôm nay khá thuận lợi, tôi cảm thấy khá tự tin.',
            answer: '今天的面试挺顺利的，我觉得挺有信心的。', answerPy: 'Jīntiān de miànshì tǐng shùnlì de, wǒ juéde tǐng yǒu xìnxīn de.',
            explanation: '挺……的 dùng hai lần trong câu, mỗi lần bao trọn một cụm từ khác nhau.' },
        ] },
      { point: '「本来」',
        items: [
          { context: 'Hoàn thành câu: ban đầu là Tiểu Lý phụ trách, nhưng anh ấy đột nhiên bị bệnh phải nhập viện.',
            pre: '', blank: '本来', post: '是小李负责的，但是他突然生病住院了。', options: ['本来', '另外', '挺'], answer: 0,
            explanation: '本来 diễn tả trạng thái ban đầu, trước khi có sự thay đổi.' },
          { context: 'Hoàn thành câu: việc này lẽ ra nên nghe theo anh ấy.',
            pre: '这件事', blank: '本来', post: '应该听他的。', options: ['本来', '首先', '不管'], answer: 0,
            explanation: '本来 + 应该 — lẽ ra nên (theo lý mà nói).' },
          { context: 'Hoàn thành câu: trước đây tôi không biết lái xe, nhưng bây giờ lái rất giỏi.',
            pre: '我', blank: '本来', post: '不会开车，但现在开得特别好。', options: ['本来', '另外', '其次'], answer: 0,
            explanation: '本来……但现在…… — trước đây … nhưng bây giờ ….' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '本来是他负责的，但是因为突然生病，所以就交给我来做了。', isCorrect: true,
            explanation: 'Câu đúng: 本来 mở đầu câu, nêu trạng thái ban đầu, kết hợp 但是……所以…… hợp lý.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他负责本来是这件事的。', isCorrect: false, correctVersion: '本来是他负责这件事的。',
            explanation: '本来 phải đứng ở đầu câu hoặc ngay trước phần vị ngữ chính, không chen giữa động từ và tân ngữ.' },
          { type: 'sort', context: 'Sắp xếp câu: việc này ban đầu do anh ấy phụ trách, nhưng cuối cùng lại giao cho tôi làm.',
            words: ['这', '件', '事', '本来', '是', '他', '负责', '的', '，', '但', '最后', '却', '交给', '我', '做', '了', '。'], answer: '这件事本来是他负责的，但最后却交给我做了。',
            explanation: '本来……但……却…… — kết hợp với 却.' },
          { type: 'sort', context: 'Sắp xếp câu: trước đây tôi vốn không tự tin, nhưng bây giờ đã khác rồi.',
            words: ['我', '本来', '没有', '信心', '，', '但', '现在', '不', '一样', '了', '。'], answer: '我本来没有信心，但现在不一样了。',
            explanation: '本来 diễn tả trạng thái ban đầu, tương phản với 现在.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 本来.',
            promptLang: 'vi', prompt: 'Ban đầu tôi không muốn đi ứng tuyển, nhưng bạn tôi khuyên tôi nên thử.',
            answer: '我本来不想去应聘，但我朋友劝我应该试试。', answerPy: 'Wǒ běnlái bù xiǎng qù yìngpìn, dàn wǒ péngyou quàn wǒ yīnggāi shìshi.',
            explanation: '本来 nêu trạng thái/ý định ban đầu, trước khi có sự thay đổi.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Việc này vốn dĩ không khó, nhưng vì thời gian gấp nên trở nên căng thẳng.',
            answer: '这件事本来不难，但因为时间紧，所以变得很紧张。', answerPy: 'Zhè jiàn shì běnlái bù nán, dàn yīnwèi shíjiān jǐn, suǒyǐ biàn de hěn jǐnzhāng.',
            explanation: '本来……但因为……所以…… — kết hợp nhiều cấu trúc câu phức.' },
        ] },
      { point: '「另外」so sánh với 「另」',
        items: [
          { context: 'Hoàn thành câu: chuyên ngành tôi học chính là luật, hơn nữa đồng nghiệp đều rất quý tôi. Ngoài ra, thu nhập cũng không tệ.',
            pre: '', blank: '另外', post: '，收入也不错。', options: ['另外', '本来', '首先'], answer: 0,
            explanation: '另外 (liên từ) đứng đầu câu mới, bổ sung thêm thông tin — chỉ 另外 làm được việc này, không dùng 另.' },
          { context: 'Hoàn thành câu: phía trước xe hơi nhiều, chúng ta đi đường khác, sẽ không muộn đâu.',
            pre: '前面车有点儿多，我们走', blank: '另外', post: '一条路，不会迟到的。', options: ['另外', '不管', '其次'], answer: 0,
            explanation: '另外 (đại từ) + số lượng + danh từ — cái khác (另 cũng đúng ở đây, nhưng 另外 tự nhiên hơn trong khẩu ngữ).' },
          { context: 'Hoàn thành câu: anh ấy đến họp, còn cung cấp thêm không ít tài liệu mới.',
            pre: '他这次来参加会议，还', blank: '另外', post: '提供了不少新的材料。', options: ['另外', '挺', '本来'], answer: 0,
            explanation: '另外 (phó từ) đứng trước động từ, đi cùng 还 — còn … thêm.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '另外，这份工作的收入也挺好的。', isCorrect: true,
            explanation: 'Câu đúng: 另外 làm liên từ mở đầu câu mới, bổ sung ý — chỉ 另外 dùng được ở vị trí này, 另 thì không.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这份工作不错。另，收入也挺好的。', isCorrect: false, correctVersion: '这份工作不错。另外，收入也挺好的。',
            explanation: '另 không thể đứng một mình đầu câu để nối ý như liên từ — vị trí này bắt buộc dùng 另外.' },
          { type: 'sort', context: 'Sắp xếp câu: chiếc áo sơ mi này không vấn đề gì, nhưng quần thì hãy đổi cái khác đi.',
            words: ['这', '件', '衬衫', '没', '问题', '，', '但', '裤子', '你', '换', '另外', '一', '条', '吧', '。'], answer: '这件衬衫没问题，但裤子你换另外一条吧。',
            explanation: '另外 (đại từ) + số lượng — cái khác.' },
          { type: 'sort', context: 'Sắp xếp câu: ngoài ra, chúng ta còn cần chuẩn bị thêm một số tài liệu.',
            words: ['另外', '，', '咱们', '还', '需要', '准备', '一些', '材料', '。'], answer: '另外，咱们还需要准备一些材料。',
            explanation: '另外 (liên từ) mở đầu câu bổ sung, kết hợp 咱们.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 另外 (liên từ, mở đầu câu).',
            promptLang: 'vi', prompt: 'Chuyên ngành của tôi khá phù hợp với công việc này. Ngoài ra, tôi cũng rất thích công ty này.',
            answer: '我的专业挺符合这份工作的。另外，我也很喜欢这家公司。', answerPy: 'Wǒ de zhuānyè tǐng fúhé zhè fèn gōngzuò de. Lìngwài, wǒ yě hěn xǐhuan zhè jiā gōngsī.',
            explanation: '另外 làm liên từ, đứng đầu câu mới bổ sung ý.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 另外 (đại từ + số lượng).',
            promptLang: 'vi', prompt: 'Cái áo này màu không hợp với bạn, thử cái khác đi.',
            answer: '这件衣服的颜色不适合你，试试另外一件吧。', answerPy: 'Zhè jiàn yīfu de yánsè bú shìhé nǐ, shìshi lìngwài yí jiàn ba.',
            explanation: '另外 (đại từ) + số lượng + danh từ — chỉ vật khác.' },
        ] },
      { point: '「首先……其次……」',
        items: [
          { context: 'Hoàn thành câu: trước hết, phải mặc trang phục lịch sự, điều này sẽ để lại ấn tượng tốt.',
            pre: '', blank: '首先', post: '，要穿正式的衣服，这会给面试者留下一个好的印象。', options: ['首先', '另外', '不管'], answer: 0,
            explanation: '首先 mở đầu điều thứ nhất khi liệt kê theo trình tự.' },
          { context: 'Hoàn thành câu: tiếp theo, khi ứng tuyển đừng hồi hộp, phải tự tin vào bản thân.',
            pre: '', blank: '其次', post: '，应聘时不要紧张，要对自己有信心。', options: ['其次', '本来', '挺'], answer: 0,
            explanation: '其次 tiếp nối 首先, nêu điều thứ hai.' },
          { context: 'Hoàn thành câu: trước hết bạn phải tự tin vào bản thân, tiếp theo mới có thể làm tốt công việc này.',
            pre: '首先你要对自己有信心，', blank: '其次', post: '才能做好这份工作。', options: ['其次', '另外', '却'], answer: 0,
            explanation: '首先……其次……才…… — trước hết … tiếp theo mới ….' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '首先要准备材料，其次才能去应聘。', isCorrect: true,
            explanation: 'Câu đúng: 首先……其次……才…… liệt kê trình tự hợp lý, có quan hệ điều kiện-kết quả giữa hai vế.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '其次要有信心，首先要准备材料。', isCorrect: false, correctVersion: '首先要准备材料，其次要有信心。',
            explanation: '首先 luôn phải đứng trước 其次 để đúng trình tự liệt kê thứ nhất → thứ hai, không đảo ngược.' },
          { type: 'sort', context: 'Sắp xếp câu: trước hết phải để lại ấn tượng tốt, tiếp theo công việc mới thuận lợi.',
            words: ['首先', '要', '留下', '好', '印象', '，', '其次', '工作', '才', '能', '顺利', '。'], answer: '首先要留下好印象，其次工作才能顺利。',
            explanation: '首先……其次……才…… — liệt kê trình tự kèm quan hệ điều kiện.' },
          { type: 'sort', context: 'Sắp xếp câu: bất kể làm công việc gì, trước hết phải nghiêm túc, thứ đến phải thành thật.',
            words: ['不管', '做', '什么', '工作', '，', '首先', '要', '认真', '，', '其次', '要', '诚实', '。'], answer: '不管做什么工作，首先要认真，其次要诚实。',
            explanation: '不管……首先……其次…… — kết hợp nhiều điểm ngữ pháp của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 首先……其次……',
            promptLang: 'vi', prompt: 'Trước hết tôi rất thích công ty này, tiếp theo thu nhập cũng khá tốt.',
            answer: '首先我很喜欢这家公司，其次收入也挺好的。', answerPy: 'Shǒuxiān wǒ hěn xǐhuan zhè jiā gōngsī, qícì shōurù yě tǐng hǎo de.',
            explanation: '首先……其次…… liệt kê hai lý do theo trình tự.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Trước hết bạn cần chuẩn bị tài liệu, tiếp theo mới có thể đi ứng tuyển.',
            answer: '首先你需要准备材料，其次才能去应聘。', answerPy: 'Shǒuxiān nǐ xūyào zhǔnbèi cáiliào, qícì cái néng qù yìngpìn.',
            explanation: '首先……其次……才…… ôn lại cấu trúc.' },
        ] },
      { point: '「不管」',
        items: [
          { context: 'Hoàn thành câu: bất kể là đi học, đi làm, hay hẹn gặp người khác, đúng giờ đều rất quan trọng.',
            pre: '所以', blank: '不管', post: '是上课、上班，还是与别人约会，准时都非常重要。', options: ['不管', '本来', '另外'], answer: 0,
            explanation: '不管是……还是……都…… — bất kể là … hay là … đều ….' },
          { context: 'Hoàn thành câu: bất kể làm việc gì, trước hết nên hiểu rõ vì sao mình làm.',
            pre: '', blank: '不管', post: '做什么事情，首先应该明白你为什么要做。', options: ['不管', '首先', '其次'], answer: 0,
            explanation: '不管 + đại từ nghi vấn (什么) + 都/首先都…… .' },
          { context: 'Hoàn thành câu: bất kể bận hay không bận, ngày nào anh ấy cũng phải rèn luyện thân thể.',
            pre: '', blank: '不管', post: '忙不忙，他每天都要锻炼一个小时身体。', options: ['不管', '挺', '另外'], answer: 0,
            explanation: '不管 + chính phản (忙不忙) + 都…… .' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '不管是谁面试我，我都会诚实地回答。', isCorrect: true,
            explanation: 'Câu đúng: 不管是谁……都…… — bất kể ai … đều ….' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '不管时间安排得多紧张，我们会按时完成。', isCorrect: false, correctVersion: '不管时间安排得多紧张，我们都会按时完成。',
            explanation: '不管 bắt buộc phải có 都 (hoặc 也) ở vế sau để khẳng định kết quả không đổi — thiếu 都 là sai.' },
          { type: 'sort', context: 'Sắp xếp câu: bất kể ai phụ trách việc này, đều phải cẩn thận.',
            words: ['不管', '谁', '负责', '这', '件', '事', '，', '都', '要', '认真', '对待', '。'], answer: '不管谁负责这件事，都要认真对待。',
            explanation: '不管谁……都…… — bất kể ai … đều ….' },
          { type: 'sort', context: 'Sắp xếp câu: bất kể kết quả thế nào, tôi vẫn có lòng tin vào bản thân.',
            words: ['不管', '结果', '怎么样', '，', '我', '都', '对', '自己', '有', '信心', '。'], answer: '不管结果怎么样，我都对自己有信心。',
            explanation: '不管……都…… kết hợp 对……有信心.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 不管……都……',
            promptLang: 'vi', prompt: 'Bất kể công việc sắp xếp căng thẳng thế nào, chúng tôi đều sẽ hoàn thành đúng hạn.',
            answer: '不管工作安排得多紧张，我们都会按时完成。', answerPy: 'Bùguǎn gōngzuò ānpái de duō jǐnzhāng, wǒmen dōu huì ànshí wánchéng.',
            explanation: '不管……都…… kết hợp từ vựng 安排/紧张 của bài.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Bất kể là với đồng nghiệp hay với khách hàng, thành thật đều rất quan trọng.',
            answer: '不管是与同事还是与顾客，诚实都很重要。', answerPy: 'Bùguǎn shì yǔ tóngshì háishi yǔ gùkè, chéngshí dōu hěn zhòngyào.',
            explanation: '不管是……还是……都…… kết hợp 与, ôn lại điểm ngữ pháp của bài.' },
        ] },
    ],
    '/lessons/hsk4-bai-4.html': [
      { point: '「以为」',
        items: [
          { context: 'Hoàn thành câu: cô ấy nói tiếng Trung giỏi như vậy, tôi còn tưởng cô ấy là người Trung Quốc.',
            pre: '她汉语说得那么好，我还', blank: '以为', post: '她是中国人。', options: ['以为', '原来', '按照'], answer: 0,
            explanation: '以为 — cho rằng, tưởng là (nhưng thực tế khác).' },
          { context: 'Hoàn thành câu: tôi cứ tưởng công việc mới tốt hơn công việc cũ, ai ngờ vẫn không bằng công việc cũ.',
            pre: '我', blank: '以为', post: '新工作比以前的好，没想到还没有以前好呢。', options: ['以为', '甚至', '并'], answer: 0,
            explanation: '以为……没想到…… — nghĩ là … nhưng không ngờ ….' },
          { context: 'Hoàn thành câu: Mark cứ tưởng hôm nay là thứ Hai, đến trường mới phát hiện hôm nay là chủ nhật.',
            pre: '马克', blank: '以为', post: '今天是星期一，到了学校一看，才发现今天是星期天。', options: ['以为', '按照', '原来'], answer: 0,
            explanation: '以为 + mệnh đề — điều người nói tưởng là đúng.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我以为当经理很简单，没想到并不容易。', isCorrect: true,
            explanation: 'Câu đúng: 以为……没想到……并…… kết hợp hợp lý, chỉ ra thực tế khác với suy nghĩ ban đầu.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '没想到她是中国人，我以为汉语说得那么好。', isCorrect: false, correctVersion: '她汉语说得那么好，我还以为她是中国人。',
            explanation: '以为 phải nêu điều người nói tưởng TRƯỚC, rồi 没想到/其实 mới nêu sự thật SAU — không đảo ngược trật tự.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi cứ tưởng còn nửa tiếng nữa mới đến, ai ngờ xe đến sớm hơn.',
            words: ['我', '以为', '还', '有', '半', '小时', '就', '到', '了', '，', '没想到', '车', '提前', '到', '了'], answer: '我以为还有半小时就到了，没想到车提前到了。',
            explanation: '以为……没想到…… kết hợp 提前, ôn lại từ vựng của bài.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi cứ tưởng làm sếp rất đơn giản, thực ra lại không dễ chút nào.',
            words: ['我', '以为', '当', '经理', '很', '简单', '，', '其实', '很', '不', '容易'], answer: '我以为当经理很简单，其实很不容易。',
            explanation: '以为……其实…… — nghĩ là … nhưng thực ra ….' },
          { type: 'translate', context: 'Dịch câu sau, dùng 以为.',
            promptLang: 'vi', prompt: 'Tôi cứ tưởng làm quen với công việc mới rất nhanh, ai ngờ hoàn toàn không đơn giản.',
            answer: '我以为适应新工作很快，没想到完全不简单。', answerPy: 'Wǒ yǐwéi shìyìng xīn gōngzuò hěn kuài, méi xiǎngdào wánquán bù jiǎndān.',
            explanation: '以为……没想到……完全…… kết hợp nhiều từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Anh ấy vốn cho rằng kinh doanh rất dễ kiếm tiền, ai ngờ hoàn toàn không phải vậy.',
            answer: '他本来以为做生意很容易赚钱，没想到完全不是这样。', answerPy: 'Tā běnlái yǐwéi zuò shēngyi hěn róngyì zhuàn qián, méi xiǎngdào wánquán bú shì zhèyàng.',
            explanation: '本来以为……没想到……完全…… kết hợp nhiều từ vựng của bài.' },
        ] },
      { point: '「原来」so sánh với 「本来」',
        items: [
          { context: 'Hoàn thành câu: theo kế hoạch ban đầu nên là hai tuần, nhưng chúng tôi có thể hoàn thành sớm hơn.',
            pre: '按', blank: '原来', post: '的计划应该是两周，但是我们可以提前完成。', options: ['原来', '按照', '甚至'], answer: 0,
            explanation: '原来 (tính từ) + 的 + danh từ — nguyên bản, ban đầu.' },
          { context: 'Hoàn thành câu: tôi còn tưởng là ai giúp tôi dọn phòng, hóa ra là bạn à!',
            pre: '我还以为是谁帮我打扫房间呢，', blank: '原来', post: '是你啊！', options: ['原来', '本来', '按照'], answer: 0,
            explanation: '原来 (phó từ) — hóa ra là, phát hiện điều trước đây không biết.' },
          { context: 'Hoàn thành câu: đi tàu từ Bắc Kinh đến Thượng Hải, trước đây nhanh nhất cần khoảng 12 tiếng.',
            pre: '坐火车从北京到上海，', blank: '原来', post: '最快差不多需要12个小时，现在有了高铁，5个小时就能到。', options: ['原来', '并', '甚至'], answer: 0,
            explanation: '原来 (danh từ/phó từ) — chỉ tình huống trước đây, khác với hiện tại.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我家原来住这儿附近，不过这里以前不像现在有这么多楼房。', isCorrect: true,
            explanation: 'Câu đúng: 原来 (phó từ) chỉ tình huống trước đây, tương phản với 现在.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这是它原来颜色。', isCorrect: false, correctVersion: '这是它原来的颜色。',
            explanation: '原来 làm tính từ bổ nghĩa cho danh từ bắt buộc phải có 的 ở giữa — không được bỏ.' },
          { type: 'sort', context: 'Sắp xếp câu: quyển sách này lẽ ra hôm qua phải trả lại cho bạn rồi, thật ngại quá.',
            words: ['这', '本', '书', '本来', '应该', '昨天', '还', '给', '你', '，', '真', '不好意思'], answer: '这本书本来应该昨天还给你，真不好意思。',
            explanation: '本来 (phó từ) — lẽ ra phải như vậy, khác với 原来 (hóa ra là).' },
          { type: 'sort', context: 'Sắp xếp câu: Mark cứ đợi Lý Minh gọi lại, nhưng cả tối không thấy gọi, hóa ra Lý Minh nhớ nhầm số điện thoại.',
            words: ['马克', '一直', '等', '李明', '回', '电话', '，', '可是', '电话', '一', '晚上', '都', '没', '来', '，', '原来', '李明', '把', '马克', '的', '电话', '号码', '记', '错', '了'], answer: '马克一直等李明回电话，可是电话一晚上都没来，原来李明把马克的电话号码记错了。',
            explanation: '原来 (phó từ) — phát hiện ra sự thật trước đây không biết.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 原来 (phó từ, hóa ra là).',
            promptLang: 'vi', prompt: 'Tôi cứ tưởng là ai gọi điện, hóa ra là giám đốc Vương.',
            answer: '我还以为是谁打电话呢，原来是王经理啊！', answerPy: 'Wǒ hái yǐwéi shì shéi dǎ diànhuà ne, yuánlái shì Wáng jīnglǐ a!',
            explanation: '还以为……原来是…… — kết hợp 以为 và 原来.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 本来 (phó từ, lẽ ra phải như vậy).',
            promptLang: 'vi', prompt: 'Việc này lẽ ra nên nghe theo giám đốc Mã.',
            answer: '这件事本来应该听马经理的。', answerPy: 'Zhè jiàn shì běnlái yīnggāi tīng Mǎ jīnglǐ de.',
            explanation: '本来 + 应该 — lẽ ra nên, phân biệt với 原来 (hóa ra là).' },
        ] },
      { point: '「并」',
        items: [
          { context: 'Hoàn thành câu: tôi vốn cho rằng kinh doanh rất đơn giản, sau này mới phát hiện thực ra không hề dễ dàng.',
            pre: '我原来以为做生意很简单，后来才发现其实', blank: '并', post: '不容易。', options: ['并', '甚至', '按照'], answer: 0,
            explanation: '并 + 不 — nhấn mạnh ngữ khí phủ định, thường sau 其实.' },
          { context: 'Hoàn thành câu: thực ra người ta làm công việc gì có thể không liên quan nhiều đến chuyên ngành đã học.',
            pre: '其实，人们将来做什么工作可能和上学学的专业', blank: '并', post: '没有太大关系。', options: ['并', '原来', '以为'], answer: 0,
            explanation: '并 + 没有 — nhấn mạnh phủ định, phủ nhận cách nghĩ thông thường.' },
          { context: 'Hoàn thành câu: theo điều tra, mỗi người nên ngủ ít nhất 7 tiếng, nhưng điều này không hề phù hợp với tất cả mọi người.',
            pre: '但是这', blank: '并', post: '不适合每一个人。', options: ['并', '按照', '甚至'], answer: 0,
            explanation: '并 + 不适合 — nhấn mạnh phủ định.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我原来以为做生意很简单，后来才发现其实并不容易。', isCorrect: true,
            explanation: 'Câu đúng: 并 đứng trước 不, nhấn mạnh ngữ khí phủ định, phù hợp với ngữ cảnh chuyển ý.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这件事并容易。', isCorrect: false, correctVersion: '这件事并不容易。',
            explanation: '并 luôn phải đi kèm một từ phủ định (不/没有) ngay sau nó — không thể đứng một mình trước tính từ khẳng định.' },
          { type: 'sort', context: 'Sắp xếp câu: đến muộn sẽ khiến người khác cảm thấy bạn không có trách nhiệm, khiến bạn bỏ lỡ cơ hội quan trọng.',
            words: ['迟到', '会', '让', '别人', '觉得', '你', '没有', '责任心', '，', '使', '你', '错过', '重要', '的', '机会'], answer: '迟到会让别人觉得你没有责任心，使你错过重要的机会。',
            explanation: 'Ôn lại từ vựng 责任 kết hợp trong câu phức nhiều vế.' },
          { type: 'sort', context: 'Sắp xếp câu: nghe nói việc kinh doanh của công ty đó rất tốt, nhưng thực ra không hề như vậy.',
            words: ['听说', '那', '家', '公司', '的', '生意', '很', '好', '，', '但', '其实', '并', '不是', '这样'], answer: '听说那家公司的生意很好，但其实并不是这样。',
            explanation: '并不是这样 — không hề như vậy.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 并.',
            promptLang: 'vi', prompt: 'Tôi cứ tưởng làm sếp rất dễ, ai ngờ hoàn toàn không hề đơn giản.',
            answer: '我以为当经理很容易，没想到并不简单。', answerPy: 'Wǒ yǐwéi dāng jīnglǐ hěn róngyì, méi xiǎngdào bìng bù jiǎndān.',
            explanation: '以为……没想到……并不…… kết hợp nhiều điểm ngữ pháp.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Việc năng lực cao không nhất định có nghĩa là có trách nhiệm, hai điều này không hề có quan hệ trực tiếp.',
            answer: '能力高不一定意味着有责任心，这两者并没有直接关系。', answerPy: 'Nénglì gāo bùyídìng yìwèizhe yǒu zérènxīn, zhè liǎng zhě bìng méiyǒu zhíjiē guānxi.',
            explanation: '并没有 — nhấn mạnh phủ định trong câu chỉ ra thực tế.' },
        ] },
      { point: '「按照」',
        items: [
          { context: 'Hoàn thành câu: công việc năm nay của chúng tôi đều đã hoàn thành theo kế hoạch.',
            pre: '我们今年的工作都已经', blank: '按照', post: '计划完成了。', options: ['按照', '原来', '甚至'], answer: 0,
            explanation: '按照 + 计划 — theo kế hoạch.' },
          { context: 'Hoàn thành câu: lần này tài liệu đều đã chuẩn bị theo yêu cầu của ngân hàng rồi chứ?',
            pre: '这回材料都', blank: '按照', post: '银行的要求准备好了吧？', options: ['按照', '并', '以为'], answer: 0,
            explanation: '按照 + 要求 — theo yêu cầu.' },
          { context: 'Hoàn thành câu: theo kinh nghiệm, vấn đề này chắc có thể giải quyết nhanh, mọi người cứ yên tâm.',
            pre: '', blank: '按照', post: '经验，这个问题应该可以很快解决，请大家放心。', options: ['按照', '甚至', '原来'], answer: 0,
            explanation: '按照 + 经验 — theo kinh nghiệm.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '按照这个办法做，别再写错了。', isCorrect: true,
            explanation: 'Câu đúng: 按照 + danh từ + động từ, diễn tả làm theo một cách thức nào đó.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '经理说得对，按照。', isCorrect: false, correctVersion: '经理说得对，按照他说的做吧。',
            explanation: '按照 là giới từ, bắt buộc phải có danh từ/mệnh đề theo sau — không thể đứng một mình cuối câu.' },
          { type: 'sort', context: 'Sắp xếp câu: nếu không theo kế hoạch mà làm, chúng ta có thể không hoàn thành công việc năm nay.',
            words: ['如果', '不', '按照', '计划', '做', '，', '我们', '可能', '完不成', '今年', '的', '工作', '了'], answer: '如果不按照计划做，我们可能完不成今年的工作了。',
            explanation: '如果不按照……可能…… — kết hợp cấu trúc giả thiết.' },
          { type: 'sort', context: 'Sắp xếp câu: cứ theo cách này mà làm, đừng viết sai nữa.',
            words: ['按照', '这个', '办法', '做', '，', '别', '再', '写', '错', '了'], answer: '按照这个办法做，别再写错了。',
            explanation: '按照 + danh từ + động từ — theo … mà làm.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 按照.',
            promptLang: 'vi', prompt: 'Chúng tôi đều đã chuẩn bị tài liệu theo yêu cầu của công ty.',
            answer: '我们都已经按照公司的要求准备好材料了。', answerPy: 'Wǒmen dōu yǐjīng ànzhào gōngsī de yāoqiú zhǔnbèi hǎo cáiliào le.',
            explanation: '按照 + 要求 — theo yêu cầu.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Theo kế hoạch ban đầu, bản điều tra này phải làm trong hai tuần.',
            answer: '按原来的计划，这份调查要用两周时间做完。', answerPy: 'Àn yuánlái de jìhuà, zhè fèn diàochá yào yòng liǎng zhōu shíjiān zuòwán.',
            explanation: '按 + 原来的计划 — kết hợp điểm ngữ pháp 原来.' },
        ] },
      { point: '「甚至」',
        items: [
          { context: 'Hoàn thành câu: ngôi nhà này cách công ty anh cũng không xa, anh có thể đi xe buýt thậm chí có thể đạp xe đạp đi làm.',
            pre: '这个房子离您公司也不远，您可以坐公共汽车', blank: '甚至', post: '可以骑自行车上班。', options: ['甚至', '并', '按照'], answer: 0,
            explanation: '甚至 — thậm chí, nhấn mạnh ví dụ nổi bật cuối cùng.' },
          { context: 'Hoàn thành câu: rất nhiều lúc, chúng ta không thể không làm một số việc mà bản thân không muốn thậm chí rất không thích.',
            pre: '很多时候，我们不得不去做一些自己不愿意做', blank: '甚至', post: '是非常不喜欢的工作。', options: ['甚至', '原来', '以为'], answer: 0,
            explanation: '甚至是 — thậm chí là, nhấn mạnh mức độ cao hơn.' },
          { context: 'Hoàn thành câu: đến muộn sẽ khiến bạn bỏ lỡ cơ hội quan trọng, thậm chí sẽ khiến người khác không còn tin bạn nữa.',
            pre: '迟到会使你错过重要的机会，', blank: '甚至', post: '会让别人不再相信你。', options: ['甚至', '并', '按照'], answer: 0,
            explanation: '甚至 đặt trước vế câu cuối cùng, nhấn mạnh hậu quả nghiêm trọng nhất.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '她们俩长得太像了，甚至连家人都认不出来。', isCorrect: true,
            explanation: 'Câu đúng: 甚至连……都…… nhấn mạnh trường hợp nổi bật nhất trong chuỗi liệt kê.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '甚至他很努力工作。', isCorrect: false, correctVersion: '他工作很努力，甚至周末也不休息。',
            explanation: '甚至 phải đặt sau ít nhất một vế/mục đã liệt kê trước đó để làm nổi bật mục cuối — không thể mở đầu câu đơn độc mà không có phần liệt kê đi trước.' },
          { type: 'sort', context: 'Sắp xếp câu: bạn thân của tôi thậm chí không đến tham gia lễ cưới của tôi, điều đó khiến tôi rất buồn.',
            words: ['我', '的', '好', '朋友', '甚至', '没有', '来', '参加', '我', '的', '婚礼', '，', '这', '让', '我', '很', '难过'], answer: '我的好朋友甚至没有来参加我的婚礼，这让我很难过。',
            explanation: '甚至 nhấn mạnh việc bất ngờ, ngoài dự đoán.' },
          { type: 'sort', context: 'Sắp xếp câu: rất nhiều lúc, chúng ta không thể không làm những việc mình không thích, thậm chí rất ghét.',
            words: ['很多', '时候', '，', '我们', '不得不', '去', '做', '自己', '不', '喜欢', '甚至', '很', '讨厌', '的', '工作'], answer: '很多时候，我们不得不去做自己不喜欢甚至很讨厌的工作。',
            explanation: '不得不……甚至…… — kết hợp hai điểm ngữ pháp của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 甚至.',
            promptLang: 'vi', prompt: 'Cô ấy làm việc rất chăm chỉ, thậm chí cuối tuần cũng không nghỉ ngơi.',
            answer: '她工作很努力，甚至周末也不休息。', answerPy: 'Tā gōngzuò hěn nǔlì, shènzhì zhōumò yě bù xiūxi.',
            explanation: '甚至 nhấn mạnh mức độ vượt xa dự đoán thông thường.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Anh ấy dù năng lực cao, kinh nghiệm phong phú, thậm chí thông minh, nhưng nếu không có trách nhiệm cũng khó thành công.',
            answer: '他即使能力高、经验丰富，甚至很聪明，但如果没有责任心，也很难成功。', answerPy: 'Tā jíshǐ nénglì gāo, jīngyàn fēngfù, shènzhì hěn cōngming, dàn rúguǒ méiyǒu zérènxīn, yě hěn nán chénggōng.',
            explanation: '即使……甚至……但如果……也…… kết hợp nhiều điểm ngữ pháp của bài và Bài trước.' },
        ] },
    ],
    '/lessons/hsk4-bai-5.html': [
      { point: '「肯定」',
        items: [
          { context: 'Hoàn thành câu: anh yên tâm, chất lượng chắc chắn không "giảm giá".',
            pre: '您放心，质量', blank: '肯定', post: '不"打折"。', options: ['肯定', '实在', '尤其'], answer: 0,
            explanation: '肯定 (phó từ) — chắc chắn, nhất định.' },
          { context: 'Hoàn thành câu: uống quá nhiều rượu chắc chắn không tốt cho sức khỏe.',
            pre: '喝太多酒', blank: '肯定', post: '对身体不好。', options: ['肯定', '再说', '受到'], answer: 0,
            explanation: '肯定 + tính từ phủ định — chắc chắn không tốt.' },
          { context: 'Hoàn thành câu: việc không thể xác định, việc chưa từng xảy ra, tốt nhất đừng nói.',
            pre: '不能', blank: '肯定', post: '的事、没发生过的事，最好不要说。', options: ['肯定', '实际', '考虑'], answer: 0,
            explanation: '肯定 (tính từ) — xác định, rõ ràng.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你放心，我们肯定不会迟到的。', isCorrect: true,
            explanation: 'Câu đúng: 肯定 (phó từ) đứng trước 不会……的, nhấn mạnh sự chắc chắn.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '那个公园肯定六点关门，也肯定六点半关门。', isCorrect: false, correctVersion: '那个公园可能是六点，也可能是六点半关门，不能肯定。',
            explanation: '肯定 diễn tả sự CHẮC CHẮN duy nhất — không thể dùng 肯定 cho hai khả năng mâu thuẫn nhau cùng lúc.' },
          { type: 'sort', context: 'Sắp xếp câu: công viên đó có thể là 6 giờ, cũng có thể là 6 giờ rưỡi đóng cửa, không thể xác định chính xác.',
            words: ['那个', '公园', '可能', '是', '六点', '，', '也', '可能', '是', '六点半', '关门', '，', '不能', '肯定'], answer: '那个公园可能是六点，也可能是六点半关门，不能肯定。',
            explanation: '不能肯定 — không thể xác định chắc chắn.' },
          { type: 'sort', context: 'Sắp xếp câu: nhanh lên, không sớm nữa đâu, chúng ta đừng đến muộn.',
            words: ['快点儿', '，', '不', '早', '了', '，', '咱们', '别', '迟到', '了'], answer: '快点儿，不早了，咱们别迟到了。',
            explanation: 'Ôn lại cấu trúc câu mệnh lệnh kết hợp 咱们.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 肯定.',
            promptLang: 'vi', prompt: 'Bạn yên tâm, chiếc sô pha này chất lượng chắc chắn có đảm bảo.',
            answer: '你放心，这个沙发的质量肯定有保证。', answerPy: 'Nǐ fàngxīn, zhège shāfā de zhìliàng kěndìng yǒu bǎozhèng.',
            explanation: '肯定 + có bảo đảm — chắc chắn được đảm bảo.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Bản điều tra đó chắc chắn có thể hoàn thành đúng hạn.',
            answer: '那份调查肯定能按时完成。', answerPy: 'Nà fèn diàochá kěndìng néng ànshí wánchéng.',
            explanation: '肯定能……完成 kết hợp 按时, ôn lại từ vựng Bài 4.' },
        ] },
      { point: '「再说」',
        items: [
          { context: 'Hoàn thành câu: chuyện hiện tại, làm xong rồi tính; chuyện sau này, sau này rồi tính.',
            pre: '现在的事，做了', blank: '再说', post: '；以后的事，以后再说。', options: ['再说', '肯定', '实际'], answer: 0,
            explanation: '再说 (động từ) — gác lại để tính sau.' },
          { context: 'Hoàn thành câu: hôm nay mua đồ nhiều quá rồi. Hơn nữa, tháng này nhà mình đã tiêu hơn năm nghìn rồi.',
            pre: '今天买的东西太多了。', blank: '再说', post: '，这个月家里已经花了五千多了。', options: ['再说', '尤其', '考虑'], answer: 0,
            explanation: '再说 (liên từ) đứng đầu câu mới, bổ sung thêm lý do.' },
          { context: 'Hoàn thành câu: chuyến 8 giờ tối, không cần vội, hơn nữa tôi chỉ đi vài ngày thôi.',
            pre: '晚上八点的，不用急，', blank: '再说', post: '，我就去几天，不用带多少东西。', options: ['再说', '受到', '肯定'], answer: 0,
            explanation: '再说 (liên từ) bổ sung một lý do nữa cho việc "không cần vội".' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '钱不够了，再说，下次再买吧。', isCorrect: true,
            explanation: 'Câu đúng: 再说 (liên từ) bổ sung lý do "tiền không đủ", dẫn đến kết luận "để lần sau mua".' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '再说是以后的事，现在的事做了。', isCorrect: false, correctVersion: '现在的事，做了再说；以后的事，以后再说。',
            explanation: '再说 (động từ, gác lại để tính sau) phải đứng SAU hành động đã hoàn thành (做了再说), không đặt lên đầu câu làm chủ ngữ.' },
          { type: 'sort', context: 'Sắp xếp câu: bạn thân của tôi thậm chí không đến tham gia lễ cưới của tôi, điều đó khiến tôi rất buồn.',
            words: ['我', '的', '好', '朋友', '甚至', '没有', '来', '参加', '我', '的', '婚礼', '，', '这', '让', '我', '很', '难过'], answer: '我的好朋友甚至没有来参加我的婚礼，这让我很难过。',
            explanation: 'Ôn lại điểm ngữ pháp 甚至 của Bài 4.' },
          { type: 'sort', context: 'Sắp xếp câu: bạn không thích chiếc áo khoác đó à? Sao lại không mua vậy?',
            words: ['你', '不是', '很', '喜欢', '那', '件', '大衣', '吗', '？', '怎么', '不', '买', '了', '呢'], answer: '你不是很喜欢那件大衣吗？怎么不买了呢？',
            explanation: '不是……吗 — câu hỏi phản vấn, ôn lại cấu trúc HSK3.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 再说 (liên từ).',
            promptLang: 'vi', prompt: 'Chiếc sô pha này giá hơi cao. Hơn nữa, tháng này nhà tôi đã tiêu nhiều tiền rồi.',
            answer: '这个沙发价格有点儿高。再说，这个月我家已经花了不少钱了。', answerPy: 'Zhège shāfā jiàgé yǒudiǎnr gāo. Zàishuō, zhège yuè wǒ jiā yǐjīng huāle bùshǎo qián le.',
            explanation: '再说 (liên từ) bổ sung lý do thứ hai, kết hợp 沙发/价格, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 再说 (động từ).',
            promptLang: 'vi', prompt: 'Tôi thực sự rất thích chiếc áo đó, nhưng hết size của tôi rồi, để lần sau vậy.',
            answer: '我真的很喜欢那件衣服，不过没我的号了，下次再说吧。', answerPy: 'Wǒ zhēnde hěn xǐhuan nà jiàn yīfu, búguò méi wǒ de hào le, xià cì zàishuō ba.',
            explanation: '下次再说 — để lần sau tính, gác lại việc.' },
        ] },
      { point: '「实际」',
        items: [
          { context: 'Hoàn thành câu: các bạn lập kế hoạch nên gắn liền với thực tế.',
            pre: '你们做计划应该联系', blank: '实际', post: '。', options: ['实际', '标准', '效果'], answer: 0,
            explanation: '联系实际 (danh từ) — gắn liền với thực tế.' },
          { context: 'Hoàn thành câu: công việc thực tế có thể giúp tôi hiểu rõ hơn kiến thức trong sách vở.',
            pre: '', blank: '实际', post: '工作能让我更理解书本上的知识。', options: ['实际', '肯定', '尤其'], answer: 0,
            explanation: '实际 (tính từ) + 工作 — công việc thực tế, cụ thể.' },
          { context: 'Hoàn thành câu: thực tế thì, rất nhiều thứ không được như quảng cáo nói.',
            pre: '', blank: '实际上', post: '，很多东西并不像广告上说的那么好。', options: ['实际上', '肯定', '再说'], answer: 0,
            explanation: '实际上 (phó từ) mở đầu câu, mang ý chuyển ngoặt so với điều vừa nói.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '广告只会介绍优点，实际上很多东西并不像广告上说的那么好。', isCorrect: true,
            explanation: 'Câu đúng: 实际上 mở đầu vế sau, chuyển ý từ "quảng cáo nói tốt" sang "thực tế không hẳn vậy".' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '实际上你们做计划应该联系。', isCorrect: false, correctVersion: '你们做计划应该联系实际。',
            explanation: '实际 làm danh từ (thực tế, tình huống khách quan) phải đứng làm tân ngữ sau 联系 — không thể tách rời đặt 实际上 lên đầu câu trong ngữ cảnh này.' },
          { type: 'sort', context: 'Sắp xếp câu: nhưng đây suy cho cùng chỉ là câu chuyện, thực tế không phải vậy.',
            words: ['但', '这', '到底', '只', '是', '故事', '，', '实际', '不', '是', '这样'], answer: '但这到底只是故事，实际不是这样。',
            explanation: '实际 (phó từ, ngắn gọn) chỉ ra thực tế khác với câu chuyện tưởng tượng.' },
          { type: 'sort', context: 'Sắp xếp câu: có người thích không ngừng đổi việc, họ luôn nghĩ công việc mới nhất định tốt hơn hiện tại.',
            words: ['有些', '人', '喜欢', '不停', '地', '换', '工作', '，', '他们', '总', '以为', '新', '工作', '一定', '比', '现在', '的', '好'], answer: '有些人喜欢不停地换工作，他们总以为新工作一定比现在的好。',
            explanation: '总以为 kết hợp 以为, ôn lại điểm ngữ pháp Bài 4.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 实际上.',
            promptLang: 'vi', prompt: 'Thực tế thì, kinh doanh không đơn giản như tôi từng nghĩ.',
            answer: '实际上，做生意并不像我原来想的那么简单。', answerPy: 'Shíjìshang, zuò shēngyi bìng bú xiàng wǒ yuánlái xiǎng de nàme jiǎndān.',
            explanation: '实际上……并不像……那么…… kết hợp 原来, ôn lại điểm ngữ pháp Bài 4.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 实际 (danh từ).',
            promptLang: 'vi', prompt: 'Lập kế hoạch phải gắn liền với thực tế, không thể chỉ nói suông trên giấy.',
            answer: '做计划得联系实际，不能只在纸上说说。', answerPy: 'Zuò jìhuà děi liánxì shíjì, bù néng zhǐ zài zhǐ shang shuōshuo.',
            explanation: '联系实际 — gắn liền với thực tế.' },
        ] },
      { point: '「对……来说」',
        items: [
          { context: 'Hoàn thành câu: đối với tôi, kiểu dáng quần áo có thịnh hành hay không không phải là điều quan trọng.',
            pre: '', blank: '对我来说', post: '，衣服的样子流行不流行并不是很重要。', options: ['对我来说', '实际上', '再说'], answer: 0,
            explanation: '对……来说 — đối với … mà nói, nêu góc nhìn.' },
          { context: 'Hoàn thành câu: đối với một người phụ nữ mà nói, xinh đẹp, thông minh đều quan trọng, nhưng thực ra quan trọng hơn là niềm vui.',
            pre: '', blank: '对一个女人来说', post: '，漂亮、聪明都很重要，但其实更重要的是快乐。', options: ['对一个女人来说', '尤其是女人', '肯定是女人'], answer: 0,
            explanation: '对 + đối tượng + 来说 — nêu góc nhìn của đối tượng đó.' },
          { context: 'Hoàn thành câu: đối với một con cá lớn mà nói, một cốc nước không giúp được gì.',
            pre: '但是，', blank: '对一条大鱼来说', post: '，一杯水是没有什么帮助的。', options: ['对一条大鱼来说', '实际上大鱼', '尤其大鱼'], answer: 0,
            explanation: '对……来说 làm rõ góc nhìn khác biệt giữa hai đối tượng so sánh (cá nhỏ và cá lớn).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '对我来说，价格并不是最重要的，质量才是最重要的。', isCorrect: true,
            explanation: 'Câu đúng: 对我来说 mở đầu câu, nêu góc nhìn cá nhân về việc gì quan trọng hơn.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '价格对我来说并不是最重要的来说。', isCorrect: false, correctVersion: '对我来说，价格并不是最重要的。',
            explanation: '对……来说 là một cụm cố định trọn vẹn (对 + đối tượng + 来说) — không được lặp lại 来说 thêm lần nữa ở cuối câu.' },
          { type: 'sort', context: 'Sắp xếp câu: đối với những người lớn tuổi mà nói, sức khỏe quan trọng hơn tất cả mọi thứ.',
            words: ['对', '那些', '年龄', '大', '的', '人', '来说', '，', '健康', '比', '什么', '都', '重要'], answer: '对那些年龄大的人来说，健康比什么都重要。',
            explanation: '对……来说 kết hợp 年龄, ôn lại từ vựng của bài.' },
          { type: 'sort', context: 'Sắp xếp câu: đối với công ty mà nói, khách hàng hài lòng là điều quan trọng nhất.',
            words: ['对', '公司', '来说', '，', '顾客', '满意', '是', '最', '重要', '的'], answer: '对公司来说，顾客满意是最重要的。',
            explanation: '对……来说 kết hợp 顾客, ôn lại từ vựng Bài 3.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 对……来说.',
            promptLang: 'vi', prompt: 'Đối với người trẻ mà nói, tích lũy kinh nghiệm quan trọng hơn kiếm tiền.',
            answer: '对年轻人来说，积累经验比赚钱更重要。', answerPy: 'Duì niánqīng rén láishuō, jīlěi jīngyàn bǐ zhuàn qián gèng zhòngyào.',
            explanation: '对……来说 kết hợp 积累/经验/赚, ôn lại nhiều từ vựng Bài 3-4.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Đối với chiếc tủ lạnh này mà nói, hiệu quả làm lạnh là quan trọng nhất.',
            answer: '对这台冰箱来说，制冷效果是最重要的。', answerPy: 'Duì zhè tái bīngxiāng láishuō, zhìlěng xiàoguǒ shì zuì zhòngyào de.',
            explanation: '对……来说 kết hợp 台/制冷/效果, ôn lại nhiều từ vựng của bài.' },
        ] },
      { point: '「尤其」so sánh với 「特别」',
        items: [
          { context: 'Hoàn thành câu: con gái anh thật đáng yêu, trông rất giống anh, đặc biệt là đôi mắt.',
            pre: '您女儿真可爱，长得真像您，', blank: '尤其', post: '是眼睛。', options: ['尤其', '实在', '肯定'], answer: 0,
            explanation: '尤其是 — đặc biệt là, chỉ khía cạnh nổi bật nhất.' },
          { context: 'Hoàn thành câu: bây giờ mua sắm trên mạng ngày càng thịnh hành, người trẻ đặc biệt thích mua đồ trên mạng.',
            pre: '现在网上购物变得越来越流行了，年轻人', blank: '尤其', post: '喜欢在网上买东西。', options: ['尤其', '再说', '受到'], answer: 0,
            explanation: '尤其 + động từ — đặc biệt (làm gì).' },
          { context: 'Hoàn thành câu: vì sức khỏe, chúng ta nên mỗi năm đi khám sức khỏe, đặc biệt là những người 40-50 tuổi.',
            pre: '为了健康，我们应该每年都去医院做一次身体检查，', blank: '尤其', post: '是那些四五十岁的人。', options: ['尤其', '实际', '考虑'], answer: 0,
            explanation: '尤其是 + đối tượng nổi bật — đặc biệt là những người ….' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我对音乐很感兴趣，尤其是贝多芬的音乐，我喜欢极了。', isCorrect: true,
            explanation: 'Câu đúng: 尤其是 chỉ khía cạnh nổi bật nhất (âm nhạc của Beethoven) trong tình huống tổng thể (yêu thích âm nhạc).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '那本小说讲了一个爱情故事，很浪漫，让人尤其感动。', isCorrect: false, correctVersion: '那本小说讲了一个爱情故事，很浪漫，让人特别感动。',
            explanation: '特别 làm phó từ còn có nghĩa "rất, vô cùng" (格外) để nhấn mạnh mức độ — 尤其 không có cách dùng này, chỉ dùng để chỉ khía cạnh nổi bật nhất trong so sánh.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi đặc biệt thích vận động, nhất là đá bóng.',
            words: ['我', '特别', '喜欢', '运动', '，', '尤其', '是', '踢足球'], answer: '我特别喜欢运动，尤其是踢足球。',
            explanation: '特别 (rất) kết hợp 尤其是 (đặc biệt là) trong cùng một câu, mỗi từ giữ vai trò riêng.' },
          { type: 'sort', context: 'Sắp xếp câu: cửa hàng mì này làm rất ngon, được rất nhiều người ở địa phương yêu thích.',
            words: ['这家', '面馆', '做', '得', '很', '好吃', '，', '受到', '了', '当地', '很多', '人', '的', '喜爱'], answer: '这家面馆做得很好吃，受到了当地很多人的喜爱。',
            explanation: '受到……的喜爱 kết hợp 受到, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 尤其 (đặc biệt là khía cạnh nổi bật nhất).',
            promptLang: 'vi', prompt: 'Cô ấy rất thích mua sắm, đặc biệt là mua quần áo.',
            answer: '她很喜欢购物，尤其是买衣服。', answerPy: 'Tā hěn xǐhuan gòuwù, yóuqí shì mǎi yīfu.',
            explanation: '尤其是 kết hợp 购物, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 特别 (rất, không thể thay bằng 尤其).',
            promptLang: 'vi', prompt: 'Bộ phim này rất cảm động, khiến tôi vô cùng thích nó.',
            answer: '这部电影很感人，让我特别喜欢它。', answerPy: 'Zhè bù diànyǐng hěn gǎnrén, ràng wǒ tèbié xǐhuan tā.',
            explanation: '特别 mang nghĩa "rất, vô cùng" — chỉ 特别 dùng được ở đây, không thể thay bằng 尤其.' },
        ] },
    ],
    '/lessons/hsk4-bai-6.html': [
      { point: '「竟然」',
        items: [
          { context: 'Hoàn thành câu: bài hát này rất hay, gần đây rất thịnh hành, bạn lại chưa từng nghe qua sao?',
            pre: '这个歌特别好听，最近很流行，你', blank: '竟然', post: '没听过？', options: ['竟然', '值得', '其中'], answer: 0,
            explanation: '竟然 (phó từ) — không ngờ, diễn tả sự việc ngoài dự đoán.' },
          { context: 'Hoàn thành câu: về nhà rồi, tôi mới phát hiện, không ngờ lại quên mất việc mua nước trái cây!',
            pre: '回家以后，我才发现，', blank: '竟然', post: '忘了去商场的超市买果汁！', options: ['竟然', '倍', '各'], answer: 0,
            explanation: '竟然 + động từ (忘了) — không ngờ lại làm gì.' },
          { context: 'Hoàn thành câu: người đến quán ăn này nhiều đến không ngờ, xếp hàng đã xếp ra tận ngoài cửa rồi!',
            pre: '来这家饭馆吃饭的人', blank: '竟然', post: '这么多，排队都排到门口外边去了！', options: ['竟然', '内', '满'], answer: 0,
            explanation: '竟然 + tính từ (这么多) — không ngờ lại nhiều đến vậy.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '在我听来，上海话和北京话几乎完全不同，你竟然听得懂？', isCorrect: true,
            explanation: 'Câu đúng: 竟然 diễn tả sự ngạc nhiên trước khả năng nghe hiểu ngoài dự đoán.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我竟然知道明天会下雨。', isCorrect: false, correctVersion: '我没想到明天竟然会下雨。',
            explanation: '竟然 chỉ dùng để diễn tả điều BẤT NGỜ, NGOÀI DỰ ĐOÁN đã xảy ra — không dùng để nói về một việc chủ ngữ tự biết trước/dự đoán được.' },
          { type: 'sort', context: 'Sắp xếp câu: thật không ngờ, đường xa như vậy bạn lại đi bằng xe đạp?',
            words: ['真是', '没想到', '，', '这么', '远', '的', '路', '你', '竟然', '骑', '自行车', '来', '了', '？'], answer: '真是没想到，这么远的路你竟然骑自行车来了？',
            explanation: '竟然 nhấn mạnh sự ngạc nhiên, ngoài dự đoán.' },
          { type: 'sort', context: 'Sắp xếp câu: hôm nay thời tiết tốt, mà tôi lại thích đạp xe đạp, lại có thể rèn luyện thân thể, chẳng phải tốt sao?',
            words: ['今天', '天气', '好', '，', '而且', '我', '喜欢', '骑', '自行车', '，', '又', '能', '锻炼', '身体', '，', '不', '好', '吗', '？'], answer: '今天天气好，而且我喜欢骑自行车，又能锻炼身体，不好吗？',
            explanation: '不好吗 — câu hỏi phản vấn, ôn lại cấu trúc câu.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 竟然.',
            promptLang: 'vi', prompt: 'Tôi cứ tưởng cô ấy sẽ đến muộn, không ngờ cô ấy lại đến sớm hơn tôi.',
            answer: '我以为她会迟到，没想到她竟然比我来得早。', answerPy: 'Wǒ yǐwéi tā huì chídào, méi xiǎngdào tā jìngrán bǐ wǒ lái de zǎo.',
            explanation: '以为……没想到……竟然…… kết hợp 以为, ôn lại điểm ngữ pháp Bài 4.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Anh ấy làm việc chăm chỉ như vậy, không ngờ lại không được thăng chức.',
            answer: '他工作那么努力，竟然没有被提升。', answerPy: 'Tā gōngzuò nàme nǔlì, jìngrán méiyǒu bèi tíshēng.',
            explanation: '竟然 + phủ định — không ngờ lại không….' },
        ] },
      { point: '「倍」',
        items: [
          { context: 'Hoàn thành câu: năm lần hai là mười.',
            pre: '二的五', blank: '倍', post: '是十。', options: ['倍', '内', '各'], answer: 0,
            explanation: '倍 (lượng từ) — chỉ số lần, bội số.' },
          { context: 'Hoàn thành câu: lương của anh ấy gấp đôi tôi.',
            pre: '我的工资是每月5000块，他的工资是我的两', blank: '倍', post: '。', options: ['倍', '满', '内'], answer: 0,
            explanation: '是……的两倍 — gấp đôi….' },
          { context: 'Hoàn thành câu: giá hôm nay gấp đôi giá hôm qua.',
            pre: '我记得昨天才三块五一斤，今天的价格是昨天的两', blank: '倍', post: '。', options: ['倍', '各', '内'], answer: 0,
            explanation: '是……的两倍 kết hợp 价格, ôn lại từ vựng của bài.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '200是100的两倍。', isCorrect: true,
            explanation: 'Câu đúng: 是……的……倍 — cấu trúc so sánh bội số, 倍 đứng độc lập không kèm danh từ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他的工资是我两倍块钱。', isCorrect: false, correctVersion: '他的工资是我的两倍。',
            explanation: '倍 là lượng từ độc lập, phía sau KHÔNG được kèm thêm danh từ (như 块钱) — chỉ dùng 是……的+số+倍.' },
          { type: 'sort', context: 'Sắp xếp câu: mỗi năm tháng bảy tháng tám, có rất nhiều du khách đến đây chơi, lúc nhiều nhất gấp ba lần bình thường.',
            words: ['每年', '七八月', '，', '有', '很多', '游客', '来', '这儿', '玩儿', '，', '最多', '的', '时候', '是', '平时', '的', '三倍'], answer: '每年七八月，有很多游客来这儿玩儿，最多的时候是平时的三倍。',
            explanation: '是平时的三倍 — gấp ba lần bình thường.' },
          { type: 'sort', context: 'Sắp xếp câu: chất lượng của chiếc sô pha này khá tốt, giá cả cũng phù hợp.',
            words: ['这个', '沙发', '的', '质量', '比较', '好', '，', '价格', '也', '合适'], answer: '这个沙发的质量比较好，价格也合适。',
            explanation: 'Ôn lại từ vựng 质量/价格 của Bài 5.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 倍.',
            promptLang: 'vi', prompt: 'Năm nay thu nhập của công ty chúng tôi gấp đôi năm ngoái.',
            answer: '今年我们公司的收入是去年的两倍。', answerPy: 'Jīnnián wǒmen gōngsī de shōurù shì qùnián de liǎng bèi.',
            explanation: '是……的两倍 kết hợp 收入, ôn lại từ vựng Bài 3.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Số người ứng tuyển năm nay gấp ba lần năm ngoái.',
            answer: '今年应聘的人数是去年的三倍。', answerPy: 'Jīnnián yìngpìn de rénshù shì qùnián de sān bèi.',
            explanation: '是……的三倍 kết hợp 应聘, ôn lại từ vựng Bài 3.' },
        ] },
      { point: '「值得」so sánh với 「值」',
        items: [
          { context: 'Hoàn thành câu: bất kể từ góc độ giá cả mà xem, hay từ chất lượng mà xem, đều đáng để cân nhắc.',
            pre: '不管从价格方面看，还是从质量上看，都是', blank: '值得', post: '考虑的。', options: ['值得', '竟然', '其中'], answer: 0,
            explanation: '值得 (động từ) + 考虑 — đáng để cân nhắc.' },
          { context: 'Hoàn thành câu: bạn nên sửa đổi tính khí của mình, đừng lúc nào cũng nổi giận vì chuyện nhỏ, không đáng đâu.',
            pre: '你应该改改自己的脾气，别总是为一点儿小事生气，不', blank: '值得', post: '。', options: ['值得', '倍', '各'], answer: 0,
            explanation: '不值得 (động từ, đứng một mình mang nghĩa "không đáng") — lưu ý: nếu là tính từ 值 thì chỉ nói "不值" (không thêm 得).' },
          { context: 'Hoàn thành câu: ưu điểm ở anh ấy càng đáng để chúng ta khám phá, học hỏi.',
            pre: '他身上的优点更', blank: '值得', post: '我们去发现、去学习。', options: ['值得', '内', '满'], answer: 0,
            explanation: '值得 + chúng ta + động từ — đáng để … làm gì.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这个沙发价钱不贵，质量又好，值得买。', isCorrect: true,
            explanation: 'Câu đúng: 值得 (động từ) + 买, diễn tả giá tiền hợp lý xứng đáng để mua.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这个手机值得五千块。', isCorrect: false, correctVersion: '这个手机值五千块。',
            explanation: '值 (không phải 值得) mới dùng được với số tiền cụ thể phía sau — 值得 chỉ mang động từ/cụm động từ, không mang trực tiếp số tiền.' },
          { type: 'sort', context: 'Sắp xếp câu: quyển sách này đáng để đọc.',
            words: ['这', '本', '书', '值得', '一', '看'], answer: '这本书值得一看。',
            explanation: '值得一看 — đáng để xem/đọc.' },
          { type: 'sort', context: 'Sắp xếp câu: chai rượu vang này đáng giá một nghìn tệ.',
            words: ['这', '瓶', '葡萄酒', '值', '一千', '块'], answer: '这瓶葡萄酒值一千块。',
            explanation: '值 + số tiền, ôn lại từ vựng 葡萄 Bài 5.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 值得.',
            promptLang: 'vi', prompt: 'Vấn đề này đáng để mọi người chú ý.',
            answer: '这个问题值得大家注意。', answerPy: 'Zhège wèntí zhídé dàjiā zhùyì.',
            explanation: '值得 + 大家注意 — đáng để mọi người chú ý.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 值 (tính từ, đứng một mình).',
            promptLang: 'vi', prompt: 'Một chiếc áo len không đáng tốn hai nghìn tệ.',
            answer: '一件毛衣不值花两千块。', answerPy: 'Yí jiàn máoyī bù zhí huā liǎngqiān kuài.',
            explanation: '不值 — không đáng, ôn lại điểm ngữ pháp của bài.' },
        ] },
      { point: '「其中」',
        items: [
          { context: 'Hoàn thành câu: một số sách còn có chương trình giảm giá, trong đó, tiểu thuyết giảm 25%.',
            pre: '一些图书还有打折活动，', blank: '其中', post: '，小说7.5折，地图8折。', options: ['其中', '竟然', '值得'], answer: 0,
            explanation: '其中 (danh từ) — trong đó, chỉ phạm vi bên trong tập hợp vừa nêu.' },
          { context: 'Hoàn thành câu: chúng ta không chỉ phải biết đọc sách, còn phải biết chọn trong số đó những cuốn sách hay.',
            pre: '我们不仅要会读书，还要会选择', blank: '其中', post: '的好书来读。', options: ['其中', '倍', '各'], answer: 0,
            explanation: '其中 + 的 + danh từ — trong số đó có….' },
          { context: 'Hoàn thành câu: tuy vợ làm việc rất bận, nhưng cô ấy bận trong đó cũng vui trong đó.',
            pre: '虽然妻子工作很忙，但是她忙在', blank: '其中', post: '也乐在其中。', options: ['其中', '内', '满'], answer: 0,
            explanation: '忙在其中/乐在其中 — cụm cố định diễn tả sự tận hưởng công việc.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '很多人能取得成功，其中努力是最重要的因素。', isCorrect: true,
            explanation: 'Câu đúng: 其中 mở đầu vế bổ sung, chỉ ra yếu tố cụ thể trong số các yếu tố góp phần thành công.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '其中我有很多爱好。', isCorrect: false, correctVersion: '我有很多爱好，其中我最喜欢看书。',
            explanation: '其中 phải đứng SAU khi đã nêu ra một tập hợp/nhóm cụ thể (như "有很多爱好") — không thể mở đầu câu khi chưa có gì để "trong đó" chỉ vào.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi có rất nhiều sở thích, trong đó tôi thích nhất là xem phim.',
            words: ['我', '有', '很多', '爱好', '，', '其中', '我', '最', '喜欢', '的', '是', '看', '电影'], answer: '我有很多爱好，其中我最喜欢的是看电影。',
            explanation: '其中 + mệnh đề bổ sung chi tiết.' },
          { type: 'sort', context: 'Sắp xếp câu: tuy liên lạc với bạn học cũ họp lớp khá phiền phức, nhưng trong đó cũng có niềm vui riêng.',
            words: ['虽然', '联系', '老同学', '聚会', '比较', '麻烦', '，', '但', '其中', '也', '有', '它', '的', '乐趣'], answer: '虽然联系老同学聚会比较麻烦，但其中也有它的乐趣。',
            explanation: '其中也有……乐趣 — trong đó cũng có niềm vui riêng.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 其中.',
            promptLang: 'vi', prompt: 'Cửa hàng có rất nhiều loại vali, trong đó có một loại rất nhẹ.',
            answer: '店里有很多种行李箱，其中有一种很轻。', answerPy: 'Diàn li yǒu hěn duō zhǒng xínglixiāng, qízhōng yǒu yì zhǒng hěn qīng.',
            explanation: '其中有一种 kết hợp 行李箱/轻, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chúng tôi đã điều tra gần bảy nghìn nhân viên văn phòng, trong đó 64% người thường xuyên tăng ca.',
            answer: '我们调查了近七千名上班族，其中有百分之六十四的人经常加班。', answerPy: 'Wǒmen diàochále jìn qīqiān míng shàngbānzú, qízhōng yǒu bǎifēnzhī liùshísì de rén jīngcháng jiābān.',
            explanation: '其中有百分之…… kết hợp 百分之, ôn lại từ vựng của bài.' },
        ] },
      { point: '「（在）……下」',
        items: [
          { context: 'Hoàn thành câu: trong tình huống thông thường, bạn chi tiền càng nhiều, đồ mua được cũng càng tốt.',
            pre: '一般', blank: '情况下', post: '，你花的钱越多，买的东西也就越好。', options: ['情况下', '其中', '值得'], answer: 0,
            explanation: '一般情况下 — trong tình huống thông thường, cấu trúc "……下" chỉ điều kiện.' },
          { context: 'Hoàn thành câu: trong tình huống mùa đông khá lạnh, ăn bát mì nóng sẽ khiến người ta cảm thấy rất dễ chịu.',
            pre: '在冬天比较冷的', blank: '情况下', post: '，吃碗热面条会让人觉得很舒服。', options: ['情况下', '倍', '各'], answer: 0,
            explanation: '在……情况下 — trong tình huống….' },
          { context: 'Hoàn thành câu: dưới sự giúp đỡ của thầy cô và các bạn học, tiếng Trung của anh ấy tiến bộ rất nhanh.',
            pre: '在老师和同学们的', blank: '帮助下', post: '，他的汉语提高得非常快。', options: ['帮助下', '内', '满'], answer: 0,
            explanation: '在……帮助下 — dưới sự giúp đỡ của….' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '在大家的努力下，公司的生意越做越好。', isCorrect: true,
            explanation: 'Câu đúng: 在……努力下 — dưới sự nỗ lực của …, thành phần giữa là danh từ song âm tiết (努力) có định ngữ đứng trước.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '在忙情况下，我没时间休息。', isCorrect: false, correctVersion: '在工作很忙的情况下，我没时间休息。',
            explanation: 'Thành phần đứng giữa "在……下" phải là danh từ/động từ SONG ÂM TIẾT có định ngữ bổ nghĩa đầy đủ đứng trước (如 工作很忙的情况) — không thể dùng trực tiếp tính từ đơn "忙" mà thiếu 情况/的.' },
          { type: 'sort', context: 'Sắp xếp câu: khi thi đừng căng thẳng, trong tình huống bình tĩnh, bạn có thể phát huy tốt hơn.',
            words: ['考试', '时', '别', '紧张', '；', '在', '冷静', '的', '情况下', '，', '你', '可以', '发挥', '得', '更好'], answer: '考试时别紧张；在冷静的情况下，你可以发挥得更好。',
            explanation: '在……情况下 kết hợp 紧张, ôn lại từ vựng Bài 3.' },
          { type: 'sort', context: 'Sắp xếp câu: trò chơi giáo học không chỉ giúp học sinh học được kiến thức, quan trọng hơn là cung cấp môi trường học tập vui vẻ.',
            words: ['游戏', '教学', '不仅', '让', '学生', '学到', '了', '知识', '，', '更', '重要', '的', '是', '提供', '了', '快乐', '的', '学习', '环境'], answer: '游戏教学不仅让学生学到了知识，更重要的是提供了快乐的学习环境。',
            explanation: '不仅……更重要的是…… kết hợp 知识, ôn lại từ vựng Bài 4.' },
          { type: 'translate', context: 'Dịch câu sau, dùng (在)……下.',
            promptLang: 'vi', prompt: 'Dưới sự cố gắng của tất cả mọi người, công việc đã được hoàn thành thuận lợi.',
            answer: '在大家的努力下，工作顺利完成了。', answerPy: 'Zài dàjiā de nǔlì xia, gōngzuò shùnlì wánchéng le.',
            explanation: '在……努力下 kết hợp 顺利, ôn lại từ vựng Bài 4.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Trong tình huống thời gian gấp gáp, chúng tôi vẫn hoàn thành nhiệm vụ đúng hạn.',
            answer: '在时间紧张的情况下，我们还是按时完成了任务。', answerPy: 'Zài shíjiān jǐnzhāng de qíngkuàng xia, wǒmen háishi ànshí wánchéngle rènwu.',
            explanation: '在……情况下 kết hợp 紧张/按时, ôn lại nhiều từ vựng.' },
        ] },
    ],
    '/lessons/hsk4-bai-7.html': [
      { point: '「估计」so sánh với 「可能」',
        items: [
          { context: 'Hoàn thành câu: tôi vẫn chưa quen với khí hậu miền Bắc, đoán là do thời tiết quá khô.',
            pre: '我还不习惯北方的气候，', blank: '估计', post: '是天气太干。', options: ['估计', '来不及', '要是'], answer: 0,
            explanation: '估计 (động từ) — đoán chừng, có thể trực tiếp làm vị ngữ.' },
          { context: 'Hoàn thành câu: bạn đã đi hỏi Tiểu Vương chưa? Đoán chừng anh ấy sẽ có cách.',
            pre: '你有没有去问问小王？', blank: '估计', post: '他应该有办法。', options: ['估计', '既', '出现'], answer: 0,
            explanation: '估计 + mệnh đề — đoán chừng….' },
          { context: 'Hoàn thành câu: anh ấy bao nhiêu ngày không đến lớp, nguyên nhân có khả năng nhất chính là anh ấy đã về nước.',
            pre: '他这么多天没来上课，最', blank: '可能', post: '的原因就是他回国了。', options: ['可能', '估计', '反对'], answer: 0,
            explanation: '可能 (tính từ) — có thể xảy ra, chỉ 可能 làm được tính từ, 估计 không có cách dùng này.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '今天的工作估计完不成了，因为出了点儿问题。', isCorrect: true,
            explanation: 'Câu đúng: 估计 (động từ) trực tiếp làm vị ngữ, theo sau là cả một vế câu.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他很估计还不知道这件事。', isCorrect: false, correctVersion: '他很可能还不知道这件事。',
            explanation: '很 chỉ kết hợp được với 可能 (rất có thể) để nhấn mạnh — 估计 không có cách dùng thêm 很 phía trước.' },
          { type: 'sort', context: 'Sắp xếp câu: máy bay trễ giờ, đoán chừng anh ấy phải đến 6 giờ chiều mới đến Thượng Hải.',
            words: ['机场', '通知', '飞机', '晚点', '一个', '小时', '，', '估计', '他', '下午', '六点', '才', '能', '到', '上海'], answer: '机场通知飞机晚点一个小时，估计他下午六点才能到上海。',
            explanation: '估计 + mệnh đề — đoán chừng, ôn lại từ vựng của bài.' },
          { type: 'sort', context: 'Sắp xếp câu: rất có thể anh ấy vẫn chưa biết việc này.',
            words: ['很', '可能', '他', '还', '不', '知道', '这', '件', '事'], answer: '很可能他还不知道这件事。',
            explanation: '很可能 đứng đầu câu, nhấn mạnh khả năng.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 估计.',
            promptLang: 'vi', prompt: 'Nhà hàng đó đi muộn người sẽ rất đông, lúc này đi chắc không kịp nữa rồi.',
            answer: '那个饭馆儿去晚了人特别多，这会儿去估计来不及了。', answerPy: 'Nàge fànguǎnr qù wǎnle rén tèbié duō, zhè huìr qù gūjì láibují le.',
            explanation: '估计 kết hợp 来不及, ôn lại điểm ngữ pháp của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 可能 (động từ năng nguyện).',
            promptLang: 'vi', prompt: 'Đã muộn thế này rồi, thầy giáo có thể đã nghỉ rồi, bạn đừng gọi điện nữa.',
            answer: '已经这么晚了，老师可能已经休息了，你别打电话了。', answerPy: 'Yǐjīng zhème wǎn le, lǎoshī kěnéng yǐjīng xiūxi le, nǐ bié dǎ diànhuà le.',
            explanation: '可能 đứng trước động từ 休息, bổ nghĩa cho động từ.' },
        ] },
      { point: '「来不及」',
        items: [
          { context: 'Hoàn thành câu: đợi đến khi cơ thể bạn xuất hiện vấn đề, hối hận cũng không kịp nữa.',
            pre: '等你身体出现问题了，后悔就', blank: '来不及', post: '了。', options: ['来不及', '估计', '要是'], answer: 0,
            explanation: '来不及 đứng một mình cuối câu — không kịp nữa.' },
          { context: 'Hoàn thành câu: hôm nay không kịp họp nữa rồi, ngày mai chúng ta tìm thời gian bàn vấn đề này nhé.',
            pre: '今天', blank: '来不及', post: '开会了，明天我们再找时间说这个问题吧。', options: ['来不及', '既', '出现'], answer: 0,
            explanation: '来不及 + động từ (开会) — không kịp làm gì.' },
          { context: 'Hoàn thành câu: bạn chẳng phải đã hẹn bạn học 2 giờ chiều gặp mặt sao? Không đi ngay là không kịp đâu.',
            pre: '你不是和同学约了下午两点见面吗？再不走就', blank: '来不及', post: '了。', options: ['来不及', '可能', '反对'], answer: 0,
            explanation: '再不……就来不及了 — không làm ngay thì sẽ không kịp.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '节目8点开始，现在去恐怕来不及了。', isCorrect: true,
            explanation: 'Câu đúng: 来不及 đứng một mình, diễn tả không kịp vì thời gian ngắn.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我来不及了明天再去图书馆还书。', isCorrect: false, correctVersion: '我本来打算去图书馆还书，可是来不及了，明天再去吧。',
            explanation: '来不及 phải gắn với hành động cụ thể bị lỡ (như "还书") trong cùng một mệnh đề hợp lý — không thể chen ngang tùy tiện giữa hai vế không liên quan về mặt logic thời gian.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi vốn định đi thư viện trả sách, nhưng không kịp nữa rồi.',
            words: ['我', '本来', '打算', '去', '图书馆', '还', '书', '，', '可是', '来不及', '了'], answer: '我本来打算去图书馆还书，可是来不及了。',
            explanation: '本来打算……可是来不及了 kết hợp 本来, ôn lại điểm ngữ pháp Bài 4.' },
          { type: 'sort', context: 'Sắp xếp câu: nguyên bản máy bay 10 giờ mới cất cánh.',
            words: ['原来', '飞机', '10点', '才', '起飞'], answer: '原来飞机10点才起飞。',
            explanation: '原来 kết hợp 才, ôn lại điểm ngữ pháp Bài 4.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 来不及.',
            promptLang: 'vi', prompt: 'Chương trình 8 giờ bắt đầu, bây giờ đi e là không kịp nữa rồi.',
            answer: '节目8点开始，现在去恐怕来不及了。', answerPy: 'Jiémù bā diǎn kāishǐ, xiànzài qù kǒngpà láibují le.',
            explanation: '恐怕来不及了 — e là không kịp nữa.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Vé máy bay đã đặt xong, không kịp đổi thời gian nữa.',
            answer: '机票已经订好了，来不及改时间了。', answerPy: 'Jīpiào yǐjīng dìnghǎo le, láibují gǎi shíjiān le.',
            explanation: '来不及 + động từ (改) — không kịp làm gì.' },
        ] },
      { point: '「离合词重叠」(AAB)',
        items: [
          { context: 'Hoàn thành câu: chúng ta ăn trưa xong thì đi dạo ở công viên gần đây đi.',
            pre: '咱们午饭后就去附近的公园', blank: '散散步', post: '吧。', options: ['散散步', '散步散', '散了步'], answer: 0,
            explanation: '散步 (từ ly hợp) lặp lại theo dạng AAB thành 散散步 — diễn tả việc làm nhẹ nhàng, thời gian ngắn.' },
          { context: 'Hoàn thành câu: sao vali nặng thế này! Bạn nhanh đến giúp tôi một tay đi.',
            pre: '行李箱怎么这么重啊！你快来', blank: '帮帮', post: '我的忙。', options: ['帮帮', '帮忙帮', '帮了帮'], answer: 0,
            explanation: '帮忙 (từ ly hợp) lặp lại thành 帮帮忙 — tùy tiện, nhẹ nhàng.' },
          { context: 'Hoàn thành câu: cuối tuần Mark thường ở ký túc xá đọc sách, nghe nhạc, ngủ một chút.',
            pre: '周末马克一般在宿舍看看书、听听音乐、', blank: '睡睡觉', post: '。', options: ['睡睡觉', '睡觉睡', '睡了觉'], answer: 0,
            explanation: '睡觉 (từ ly hợp) lặp lại thành 睡睡觉 — thử làm, thời gian ngắn.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你有时间应该多回家看看爸妈，聊聊天儿。', isCorrect: true,
            explanation: 'Câu đúng: 聊天儿 (từ ly hợp) lặp lại thành 聊聊天儿 theo đúng dạng AAB.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你快来帮我忙忙。', isCorrect: false, correctVersion: '你快来帮帮我的忙。',
            explanation: 'Từ ly hợp 帮忙 lặp lại đúng dạng phải là AAB (帮帮忙 / 帮帮…的忙) — lặp lại chữ B (忙忙) ở cuối là sai vị trí.' },
          { type: 'sort', context: 'Sắp xếp câu: bơi lội cũng vậy, đối với sức khỏe đặc biệt tốt.',
            words: ['游游泳', '也', '不错', '，', '对', '身体', '特别', '好'], answer: '游游泳也不错，对身体特别好。',
            explanation: '游泳 (từ ly hợp) lặp lại thành 游游泳.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi đã liên hệ giúp bạn với Tiểu Lý xong rồi, có thời gian thì gặp mặt một chút đi.',
            words: ['我', '帮', '你', '跟', '小李', '联系', '好', '了', '，', '有', '时间', '就', '见见面', '吧'], answer: '我帮你跟小李联系好了，有时间就见见面吧。',
            explanation: '见面 (từ ly hợp) lặp lại thành 见见面.' },
          { type: 'translate', context: 'Dịch câu sau, dùng dạng lặp AAB của từ ly hợp 聊天.',
            promptLang: 'vi', prompt: 'Bạn có thời gian nên về nhà thăm bố mẹ nhiều hơn, trò chuyện với họ một chút.',
            answer: '你有时间应该多回家看看爸妈，跟他们聊聊天儿。', answerPy: 'Nǐ yǒu shíjiān yīnggāi duō huí jiā kànkan bàmā, gēn tāmen liáoliao tiānr.',
            explanation: '聊天儿 → 聊聊天儿, dạng lặp AAB.' },
          { type: 'translate', context: 'Dịch câu sau, dùng dạng lặp AAB của từ ly hợp 见面.',
            promptLang: 'vi', prompt: 'Tôi đã giúp bạn liên hệ với Tiểu Lý xong rồi, các bạn tìm thời gian gặp mặt một chút đi.',
            answer: '我帮你跟小李联系好了，你们找时间见见面吧。', answerPy: 'Wǒ bāng nǐ gēn Xiǎo Lǐ liánxì hǎo le, nǐmen zhǎo shíjiān jiànjianmiàn ba.',
            explanation: '见面 → 见见面, dạng lặp AAB.' },
        ] },
      { point: '「要是……(的话)，就……」',
        items: [
          { context: 'Hoàn thành câu: nếu sức khỏe là số 1, những thứ khác đều là số 0 phía sau số 1.',
            pre: '', blank: '要是', post: '健康是1，其他都是1后面的0。', options: ['要是', '来不及', '估计'], answer: 0,
            explanation: '要是 — liên từ giả thiết, nếu như.' },
          { context: 'Hoàn thành câu: nếu bạn muốn đến du học ở trường đại học Trung Quốc, thì cần chuẩn bị tốt những điều này.',
            pre: '', blank: '要是', post: '你想来中国的大学留学，那么就需要做好这些准备。', options: ['要是', '既', '可能'], answer: 0,
            explanation: '要是……那么就…… — nếu … thì cần….' },
          { context: 'Hoàn thành câu: nếu chất lượng tốt hơn người khác, thì giá cả đắt hơn một chút cũng có thể chấp nhận được.',
            pre: '', blank: '要是', post: '质量比别人的好的话，那么价格贵一点儿也是可以接受的。', options: ['要是', '出现', '反对'], answer: 0,
            explanation: '要是……的话，那么……也…… kết hợp 质量, ôn lại từ vựng Bài 5.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '要是有时间，我们就一起去公园散步吧。', isCorrect: true,
            explanation: 'Câu đúng: 要是……就…… — nếu có thời gian thì cùng đi.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你要是有时间。', isCorrect: false, correctVersion: '你要是有时间，就跟我说一声。',
            explanation: '要是 chỉ nêu giả thiết ở vế đầu — câu bắt buộc phải có vế 就 theo sau để nêu kết quả/hành động, không thể dừng lại chỉ với vế giả thiết.' },
          { type: 'sort', context: 'Sắp xếp câu: nếu đi bằng cái này, 20 phút là có thể đến.',
            words: ['要是', '坐', '这个', '，', '20分钟', '就', '能', '到'], answer: '要是坐这个，20分钟就能到。',
            explanation: '要是……就…… — nếu … thì….' },
          { type: 'sort', context: 'Sắp xếp câu: nếu không đủ, thì mua thêm hai chai nữa đi.',
            words: ['要是', '不', '够', '的话', '，', '再', '买', '两', '瓶', '吧'], answer: '要是不够的话，再买两瓶吧。',
            explanation: '要是……的话，…… kết hợp 瓶, ôn lại từ vựng Bài 5.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 要是……就……',
            promptLang: 'vi', prompt: 'Nếu bạn có thời gian, thì mình cùng đi công viên đi dạo đi.',
            answer: '你要是有时间，就跟我们一起去公园散步吧。', answerPy: 'Nǐ yàoshi yǒu shíjiān, jiù gēn wǒmen yìqǐ qù gōngyuán sànbù ba.',
            explanation: '要是……就…… kết hợp 散步, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Nếu chất lượng không tốt lắm, thì giá rẻ cũng không đáng mua.',
            answer: '要是质量不太好的话，那么价格便宜也不值得买。', answerPy: 'Yàoshi zhìliàng bú tài hǎo dehuà, nàme jiàgé piányi yě bù zhídé mǎi.',
            explanation: '要是……的话，那么……也不值得…… kết hợp 值得, ôn lại từ vựng Bài 6.' },
        ] },
      { point: '「既……又/也/还……」',
        items: [
          { context: 'Hoàn thành câu: đi dạo là phương pháp luyện tập đơn giản nhất trong cuộc sống, vừa có thể vận động cơ thể, vừa có thể giảm cân.',
            pre: '散步是生活中最简单的锻炼方法，', blank: '既', post: '可以活动身体，又可以减肥。', options: ['既', '要是', '估计'], answer: 0,
            explanation: '既……又…… — vừa … vừa….' },
          { context: 'Hoàn thành câu: người khéo ăn nói vừa dễ kết bạn, cũng dễ đạt được thành công.',
            pre: '会说话的人', blank: '既', post: '容易交到朋友，也容易获得成功。', options: ['既', '来不及', '出现'], answer: 0,
            explanation: '既……也…… — vừa … cũng….' },
          { context: 'Hoàn thành câu: người đó làm việc vừa không nghiêm túc, động tác lại chậm.',
            pre: '他那个人做事', blank: '既', post: '不认真，动作还慢。', options: ['既', '反对', '可能'], answer: 0,
            explanation: '既……还…… (mang nghĩa tiêu cực) — vừa … lại….' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '散步既可以活动身体，又可以减肥，而且不会像跑步那样辛苦。', isCorrect: true,
            explanation: 'Câu đúng: 既……又…… nối hai cấu trúc động từ tính giống nhau (可以活动身体 / 可以减肥), đều mang nghĩa tích cực.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这个人既聪明，又笨。', isCorrect: false, correctVersion: '这个人既聪明，又努力。',
            explanation: '既……又…… yêu cầu hai vế phải cùng chiều nghĩa (đều tích cực hoặc đều tiêu cực) — 聪明 (tích cực) và 笨 (tiêu cực) mâu thuẫn nhau, không thể nối bằng 既……又….' },
          { type: 'sort', context: 'Sắp xếp câu: đi dạo vừa có thể vận động cơ thể, vừa có thể giảm cân, hơn nữa lại không vất vả như chạy bộ.',
            words: ['散步', '既', '可以', '活动', '身体', '，', '又', '可以', '减肥', '，', '而且', '不会', '像', '跑步', '那样', '辛苦'], answer: '散步既可以活动身体，又可以减肥，而且不会像跑步那样辛苦。',
            explanation: '既……又…… kết hợp 减肥/辛苦, ôn lại từ vựng của bài.' },
          { type: 'sort', context: 'Sắp xếp câu: người đó vừa có năng lực，又有责任心，公司很重视他。',
            words: ['那个', '人', '既', '有', '能力', '，', '又', '有', '责任心', '，', '公司', '很', '重视', '他'], answer: '那个人既有能力，又有责任心，公司很重视他。',
            explanation: '既……又…… kết hợp 责任, ôn lại từ vựng Bài 3.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 既……又……',
            promptLang: 'vi', prompt: 'Chiếc sô pha này vừa chất lượng tốt, giá cả lại phù hợp.',
            answer: '这个沙发既质量好，价格又合适。', answerPy: 'Zhège shāfā jì zhìliàng hǎo, jiàgé yòu héshì.',
            explanation: '既……又…… kết hợp 质量/价格, ôn lại từ vựng Bài 5.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Đi dạo vừa có thể giúp tiêu hóa, cũng có thể làm sâu sắc thêm tình cảm gia đình.',
            answer: '散步既可以帮助消化，也可以加深家人的感情。', answerPy: 'Sànbù jì kěyǐ bāngzhù xiāohuà, yě kěyǐ jiāshēn jiārén de gǎnqíng.',
            explanation: '既……也…… kết hợp 感情, ôn lại từ vựng của bài.' },
        ] },
    ],
    '/lessons/hsk4-bai-8.html': [
      { point: '「使」',
        items: [
          { context: 'Hoàn thành câu: nghe nói lúc buồn bã ăn miếng sô cô la, còn có thể khiến tâm trạng người ta trở nên vui vẻ.',
            pre: '听说伤心难过的时候吃块儿巧克力，还能', blank: '使', post: '人的心情变得愉快。', options: ['使', '只要', '因此'], answer: 0,
            explanation: '使 (khiến cho) + đối tượng + kết quả — cấu trúc gây khiến.' },
          { context: 'Hoàn thành câu: cô ấy nhìn còn chưa từng nhìn tôi lấy một cái, làm thế nào mới có thể khiến cô ấy thích tôi đây?',
            pre: '她看都没看过我一眼，怎么样才能', blank: '使', post: '她喜欢我呢？', options: ['使', '往往', '可不是'], answer: 0,
            explanation: '使 + 她 + 喜欢我 — khiến cô ấy thích tôi.' },
          { context: 'Hoàn thành câu: ba năm sống ở Trung Quốc khiến anh ấy có nhiều ý tưởng mới về âm nhạc.',
            pre: '在中国生活的三年', blank: '使', post: '他在音乐方面有了很多新的想法。', options: ['使', '证明', '成为'], answer: 0,
            explanation: '使 + 他 + 有了……想法 — khiến anh ấy có ý tưởng.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '房间里应该多放一些绿色植物，使空气变得更新鲜。', isCorrect: true,
            explanation: 'Câu đúng: 使 + 空气 + 变得更新鲜, đúng cấu trúc gây khiến trong văn viết.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这件事使我，我明白了很多道理。', isCorrect: false, correctVersion: '这件事使我明白了很多道理。',
            explanation: '使 + đối tượng + kết quả phải liền một mạch, không được tách đối tượng ra khỏi phần kết quả bằng dấu phẩy và lặp lại chủ ngữ.' },
          { type: 'sort', context: 'Sắp xếp câu: nghe xong chuyện này, khiến tôi hiểu ra rất nhiều đạo lý.',
            words: ['听', '完', '这', '件', '事', '，', '使', '我', '明白', '了', '很多', '道理'], answer: '听完这件事，使我明白了很多道理。',
            explanation: '使 + 我 + 明白了……道理 — khiến tôi hiểu ra….' },
          { type: 'sort', context: 'Sắp xếp câu: trong lúc phiền muộn, hãy thử một số cách khiến bản thân vui vẻ hơn.',
            words: ['在', '你', '烦恼', '的', '时候', '，', '试试', '一些', '能', '使', '自己', '更', '愉快', '的', '办法'], answer: '在你烦恼的时候，试试一些能使自己更愉快的办法。',
            explanation: '使自己更愉快 kết hợp 烦恼/愉快, ôn lại từ vựng Bài 7 và của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 使.',
            promptLang: 'vi', prompt: 'Trong phòng nên đặt thêm một ít cây xanh, khiến không khí trở nên trong lành hơn.',
            answer: '房间里应该多放一些绿色植物，使空气变得更新鲜。', answerPy: 'Fángjiān li yīnggāi duō fàng yìxiē lǜsè zhíwù, shǐ kōngqì biàn de gèng xīnxiān.',
            explanation: '使 + 空气 + 变得更新鲜 kết hợp 植物/空气, ôn lại từ vựng Bài 7.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Lúc bạn phiền muộn, hãy nghĩ vài cách khiến bản thân vui vẻ hơn.',
            answer: '在你烦恼的时候，想一些办法使自己更愉快。', answerPy: 'Zài nǐ fánnǎo de shíhou, xiǎng yìxiē bànfǎ shǐ zìjǐ gèng yúkuài.',
            explanation: '使自己更愉快 kết hợp 烦恼/愉快, ôn lại từ vựng của bài và Bài 7.' },
        ] },
      { point: '「只要……就……」',
        items: [
          { context: 'Hoàn thành câu: chỉ cần lần này bạn chuẩn bị thật tốt, nhất định có thể đá tốt trận đấu.',
            pre: '', blank: '只要', post: '这次你好好儿准备，一定能把比赛踢好。', options: ['只要', '使', '因此'], answer: 0,
            explanation: '只要……就/一定…… — chỉ cần … thì nhất định….' },
          { context: 'Hoàn thành câu: chỉ cần bạn để tâm là sẽ phát hiện ra, xung quanh có nhiều việc thú vị như vậy.',
            pre: '', blank: '只要', post: '你用心就会发现，身边有那么多有意思的事情。', options: ['只要', '往往', '可不是'], answer: 0,
            explanation: '只要……就会…… — chỉ cần … là sẽ….' },
          { context: 'Hoàn thành câu: đối với tôi, chỉ cần được làm việc mình thích, đó chính là hạnh phúc.',
            pre: '对我来说，', blank: '只要', post: '能做自己喜欢的事，就是幸福。', options: ['只要', '证明', '成为'], answer: 0,
            explanation: '只要……就是…… — chỉ cần … chính là….' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '只要能取得好的成绩，就一定会参加。', isCorrect: true,
            explanation: 'Câu đúng: 只要 nêu điều kiện cần thiết, 就 nêu kết quả tương ứng.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '只要你用心。', isCorrect: false, correctVersion: '只要你用心，就会发现生活中的美到处都是。',
            explanation: '只要 chỉ nêu điều kiện — bắt buộc phải có vế 就 theo sau nêu rõ kết quả, không thể dừng câu ở vế điều kiện.' },
          { type: 'sort', context: 'Sắp xếp câu: chỉ cần bạn cố gắng nhiều hơn một chút, bố mẹ nhất định sẽ ủng hộ bạn.',
            words: ['只要', '你', '再', '努力', '一点儿', '，', '爸妈', '一定', '会', '支持', '你'], answer: '只要你再努力一点儿，爸妈一定会支持你。',
            explanation: '只要……一定会…… kết hợp 支持, ôn lại từ vựng Bài 6.' },
          { type: 'sort', context: 'Sắp xếp câu: chỉ cần đạt được thành tích tốt, thì nhất định sẽ được tham gia.',
            words: ['只要', '能', '取得', '好', '的', '成绩', '，', '就', '一定', '会', '参加'], answer: '只要能取得好的成绩，就一定会参加。',
            explanation: '只要……就一定会…… — chỉ cần … thì nhất định sẽ….' },
          { type: 'translate', context: 'Dịch câu sau, dùng 只要……就……',
            promptLang: 'vi', prompt: 'Chỉ cần bạn kiên nhẫn chờ đợi, tin tức nhất định sẽ đến.',
            answer: '只要你耐心等待，消息就一定会来。', answerPy: 'Zhǐyào nǐ nàixīn děngdài, xiāoxi jiù yídìng huì lái.',
            explanation: '只要……就一定会…… kết hợp 耐心, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chỉ cần có tâm, cái đẹp trong cuộc sống ở khắp nơi.',
            answer: '只要有心，生活中的美到处都是。', answerPy: 'Zhǐyào yǒuxīn, shēnghuó zhōng de měi dàochù dōu shì.',
            explanation: '只要……到处都是 kết hợp 到处, ôn lại từ vựng của bài.' },
        ] },
      { point: '「可不是」',
        items: [
          { context: 'Hoàn thành câu: A: không ngờ chúng ta đã tốt nghiệp mười năm rồi. B: đúng vậy! Thời gian trôi nhanh quá.',
            pre: 'A：没想到咱们毕业都已经十年了。B：', blank: '可不是', post: '！时间过得太快了，真想大家。', options: ['可不是', '只要', '因此'], answer: 0,
            explanation: '可不是 — đúng vậy, bày tỏ tán thành với lời người trước.' },
          { context: 'Hoàn thành câu: A: gặp kẹt xe, tâm trạng cũng "tắc". B: đúng vậy! Sáng đi làm kẹt xe sợ trễ.',
            pre: 'A：遇到堵车，心情也"堵"。B：', blank: '可不是', post: '！上班堵车怕迟到，下班堵车怕回家晚。', options: ['可不是', '使', '往往'], answer: 0,
            explanation: '可不是 đứng độc lập tạo thành câu tán thành.' },
          { context: 'Hoàn thành câu: A: sân quần vợt này dịch vụ không tệ, ấn tượng của tôi rất tốt. B: đúng vậy! Ở đây không những môi trường tốt.',
            pre: 'A：这家网球馆的服务不错，给我的印象很好。B：', blank: '可不是', post: '！这儿不仅环境好，还免费提供吃的和水。', options: ['可不是', '证明', '成为'], answer: 0,
            explanation: '可不是 — tán thành, khẩu ngữ thường dùng khi trò chuyện.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: 'A：他每天穿这么少，能不感冒吗？B：可不是，穿得太少肯定容易感冒。', isCorrect: true,
            explanation: 'Câu đúng: 可不是 đứng độc lập bày tỏ đồng tình, sau đó bổ sung thêm ý kiến.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '可不是这件事情很麻烦。', isCorrect: false, correctVersion: 'A：这件事情很麻烦。B：可不是！确实很麻烦。',
            explanation: '可不是 phải đứng ĐỘC LẬP thành câu tán thành đáp lại lời người khác vừa nói — không thể ghép trực tiếp vào đầu câu trần thuật của chính mình.' },
          { type: 'sort', context: 'Sắp xếp câu: đúng vậy, thời tiết gần đây khô quá, mọi người đều dễ bị ho.',
            words: ['可不是', '，', '最近', '天气', '太', '干', '了', '，', '大家', '都', '容易', '咳嗽'], answer: '可不是，最近天气太干了，大家都容易咳嗽。',
            explanation: '可不是 kết hợp 咳嗽, ôn lại từ vựng Bài 7.' },
          { type: 'sort', context: 'Sắp xếp câu: đúng vậy，马克的性格真好，大家都愿意找他帮忙。',
            words: ['可不是', '，', '马克', '的', '性格', '真', '好', '，', '大家', '都', '愿意', '找', '他', '帮忙'], answer: '可不是，马克的性格真好，大家都愿意找他帮忙。',
            explanation: '可不是 đứng đầu, tán thành nhận xét về tính cách.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 可不是.',
            promptLang: 'vi', prompt: 'A: Anh ấy mỗi ngày mặc ít như vậy, sao có thể không cảm cúm được? B: Đúng vậy, mặc ít quá chắc chắn dễ cảm cúm.',
            answer: 'A：他每天穿这么少，能不感冒吗？B：可不是，穿得太少肯定容易感冒。', answerPy: 'Tā měitiān chuān zhème shǎo, néng bù gǎnmào ma? Kěbúshi, chuān de tài shǎo kěndìng róngyì gǎnmào.',
            explanation: '可不是 kết hợp 肯定, ôn lại từ vựng Bài 5.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'A: Gần đây thời tiết sao khô thế này! B: Đúng vậy, nghe nói cả tháng rồi không có mưa.',
            answer: 'A：最近天气怎么这么干呢！B：可不，听说都一个月没下雨了。', answerPy: 'Zuìjìn tiānqì zěnme zhème gān ne! Kěbù, tīngshuō dōu yí ge yuè méi xiàyǔ le.',
            explanation: '可不是 có thể rút gọn thành 可不.' },
        ] },
      { point: '「因此」',
        items: [
          { context: 'Hoàn thành câu: tôi quen biết anh ấy nhiều năm rồi, vì vậy, rất hiểu tính cách của anh ấy.',
            pre: '我认识他很多年，', blank: '因此', post: '，很了解他的性格。', options: ['因此', '只要', '可不是'], answer: 0,
            explanation: '因此 — do đó, vì vậy, nối nguyên nhân với kết quả.' },
          { context: 'Hoàn thành câu: tính cách, năng lực của mỗi học sinh khác nhau, vì vậy, giáo viên phải dùng phương pháp khác nhau.',
            pre: '每个学生的性格、能力不同，', blank: '因此', post: '，老师要根据学生的特点，用不同的方法。', options: ['因此', '使', '往往'], answer: 0,
            explanation: '因此 kết hợp 特点, ôn lại từ vựng của bài.' },
          { context: 'Hoàn thành câu: thái độ sống phải tự mình lựa chọn, vì vậy, khi gặp phiền muộn, bạn nên nghĩ cách.',
            pre: '生活的态度要自己选择，', blank: '因此', post: '，遇到烦恼时，你应该想一些办法。', options: ['因此', '证明', '成为'], answer: 0,
            explanation: '因此 mở đầu vế kết quả, kết hợp 态度, ôn lại từ vựng của bài.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '做好小事是完成大事的第一步，因此我们不应该轻视小事。', isCorrect: true,
            explanation: 'Câu đúng: 因此 nối nguyên nhân (làm tốt việc nhỏ là bước đầu) với kết quả (không nên coi thường việc nhỏ).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '因为我认识他很多年，因此很了解他的性格。', isCorrect: false, correctVersion: '我认识他很多年，因此很了解他的性格。',
            explanation: '因此 không được dùng kết hợp với 因为 trong cùng một câu — chỉ chọn một trong hai để nối nguyên nhân-kết quả.' },
          { type: 'sort', context: 'Sắp xếp câu: Tiểu Vũ gần đây tâm trạng không tốt, vì vậy chúng ta nên nhiều quan tâm cô ấy hơn một chút.',
            words: ['小雨', '最近', '心情', '不好', '，', '因此', '我们', '应该', '多', '关心', '她', '一点儿'], answer: '小雨最近心情不好，因此我们应该多关心她一点儿。',
            explanation: '因此 kết hợp 心情, ôn lại từ vựng của bài.' },
          { type: 'sort', context: 'Sắp xếp câu: không ai có thể biết trước sau này sẽ xảy ra chuyện gì, vì vậy要提前做好准备。',
            words: ['没人', '能', '提前', '知道', '以后', '会', '发生', '什么', '事', '，', '因此', '要', '提前', '做好', '准备'], answer: '没人能提前知道以后会发生什么事，因此要提前做好准备。',
            explanation: '因此 kết hợp 发生, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 因此.',
            promptLang: 'vi', prompt: 'Tính cách, năng lực của mỗi học sinh khác nhau, vì vậy, giáo viên phải căn cứ vào đặc điểm của học sinh mà dạy.',
            answer: '每个学生的性格、能力不同，因此，老师要根据学生的特点来教。', answerPy: 'Měi ge xuésheng de xìnggé, nénglì bùtóng, yīncǐ, lǎoshī yào gēnjù xuésheng de tèdiǎn lái jiāo.',
            explanation: '因此 kết hợp 特点, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Làm tốt việc nhỏ là bước đầu tiên hoàn thành việc lớn, vì vậy chúng ta không nên coi thường việc nhỏ.',
            answer: '做好小事是完成大事的第一步，因此我们不应该轻视小事。', answerPy: 'Zuòhǎo xiǎo shì shì wánchéng dà shì de dì-yī bù, yīncǐ wǒmen bù yīnggāi qīngshì xiǎo shì.',
            explanation: '因此 mở đầu vế kết quả.' },
        ] },
      { point: '「往往」so sánh với 「经常」',
        items: [
          { context: 'Hoàn thành câu: sự lựa chọn màu sắc quần áo của các cô gái thường liên quan đến tính cách của họ.',
            pre: '女孩子对衣服颜色的选择', blank: '往往', post: '与她们的性格有关。', options: ['往往', '使', '因此'], answer: 0,
            explanation: '往往 diễn tả quy luật đã được quan sát/tổng kết.' },
          { context: 'Hoàn thành câu: tài xế taxi có kinh nghiệm thường rất quen thuộc với tình hình đường xá.',
            pre: '有经验的出租车司机', blank: '往往', post: '对道路情况都非常熟悉。', options: ['往往', '只要', '可不是'], answer: 0,
            explanation: '往往 kết hợp mệnh đề nêu rõ tình huống liên quan (对道路情况都非常熟悉).' },
          { context: 'Hoàn thành câu: ngoài tên chính thức, ở nhà, bố mẹ thường chỉ gọi tên thân mật của con.',
            pre: '除了正式的名字，在家里，父母', blank: '往往', post: '只叫孩子的小名。', options: ['往往', '证明', '成为'], answer: 0,
            explanation: '往往只叫 — thường chỉ gọi, diễn tả quy luật đã quan sát.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '上大学时我很喜欢运动，经常在周末打篮球、踢足球。', isCorrect: true,
            explanation: 'Câu đúng: 经常 chỉ hành động lặp lại nhiều lần, không cần nêu điều kiện/kết quả liên quan.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '上大学时我很喜欢运动，往打篮球、踢足球。', isCorrect: false, correctVersion: '上大学时我很喜欢运动，往往打篮球、踢足球。',
            explanation: '往往 không thể rút gọn thành 往 — chỉ có 经常 mới rút gọn được thành 常, còn 往往 phải giữ nguyên đầy đủ hai chữ.' },
          { type: 'sort', context: 'Sắp xếp câu: lúc cửa hàng giảm giá, có người thường mua một số đồ mà bản thân vốn không cần.',
            words: ['在', '商家', '打折', '的', '时候', '，', '有', '的', '人', '经常', '会', '买', '一些', '自己', '本来', '不', '需要', '的', '东西'], answer: '在商家打折的时候，有的人经常会买一些自己本来不需要的东西。',
            explanation: '经常 kết hợp 打折/本来, ôn lại từ vựng của bài và Bài 4.' },
          { type: 'sort', context: 'Sắp xếp câu: nếu thiếu điều tra、不听别人说明情况，不理解往往就可能发生。',
            words: ['要是', '缺少', '调查', '、', '不', '听', '别人', '说明', '情况', '，', '不', '理解', '往往', '就', '可能', '发生'], answer: '要是缺少调查、不听别人说明情况，不理解往往就可能发生。',
            explanation: '往往就可能发生 kết hợp 缺少/说明/发生, ôn lại nhiều từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 往往.',
            promptLang: 'vi', prompt: 'Người khéo ăn nói thường dễ kết bạn, cũng dễ đạt được thành công.',
            answer: '会说话的人往往容易交到朋友，也容易获得成功。', answerPy: 'Huì shuōhuà de rén wǎngwǎng róngyì jiāodào péngyou, yě róngyì huòdé chénggōng.',
            explanation: '往往 kết hợp 获得, ôn lại từ vựng Bài 4.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 经常 (có thể rút gọn thành 常).',
            promptLang: 'vi', prompt: 'Anh ấy thường xuyên đi công viên đi dạo, tôi cũng thường cùng anh ấy đi.',
            answer: '他经常去公园散步，我也常和他一起去。', answerPy: 'Tā jīngcháng qù gōngyuán sànbù, wǒ yě cháng hé tā yìqǐ qù.',
            explanation: '经常/常 kết hợp 散步, ôn lại từ vựng Bài 7.' },
        ] },
    ],
    '/lessons/hsk4-bai-9.html': [
      { point: '「难道」',
        items: [
          { context: 'Hoàn thành câu: sao lại mua nhiều bánh quy và sô cô la thế này? Chẳng lẽ bạn không giảm cân nữa à?',
            pre: '怎么又买了这么多饼干和巧克力？', blank: '难道', post: '你不减肥了？', options: ['难道', '可是', '结果'], answer: 0,
            explanation: '难道 (phó từ) — tăng cường ngữ khí phản vấn.' },
          { context: 'Hoàn thành câu: A: này, mười giờ rồi, sao bạn còn chưa đến? B: chẳng lẽ bạn không xem tin nhắn?',
            pre: 'A：喂，都十点了，你怎么还不来？B：', blank: '难道', post: '你没看短信？我今天有事去不了了。', options: ['难道', '通过', '至少'], answer: 0,
            explanation: '难道 + phủ định (没看) — diễn tả ý khẳng định (chắc chắn bạn đã xem).' },
          { context: 'Hoàn thành câu: bạn chẳng phải hai giờ đã xuất phát sao? Chẳng lẽ trên đường mất hơn hai tiếng?',
            pre: '你不是两点就出发了吗？', blank: '难道', post: '路上花了两个多小时？', options: ['难道', '面对', '暂时'], answer: 0,
            explanation: '难道 nhấn mạnh sự ngạc nhiên/nghi vấn.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '难道汉语真的这么难吗？', isCorrect: true,
            explanation: 'Câu đúng: 难道……吗 là câu hỏi phản vấn khẳng định, mang hàm ý phủ định (nhấn mạnh tiếng Trung KHÔNG khó).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '难道你不知道这件事。', isCorrect: false, correctVersion: '难道你不知道这件事吗？',
            explanation: '难道 dùng trong câu hỏi phản vấn bắt buộc phải kết thúc bằng 吗 (hoặc dấu hỏi tương đương) — không thể dùng câu trần thuật với dấu chấm.' },
          { type: 'sort', context: 'Sắp xếp câu: bạn đừng uống nhiều rượu như vậy nữa! Chẳng lẽ bạn không sợ say sao?',
            words: ['你', '别', '再', '喝', '这么', '多', '酒', '了', '！', '难道', '你', '不', '怕', '醉', '吗', '？'], answer: '你别再喝这么多酒了！难道你不怕醉吗？',
            explanation: '难道……吗 — câu hỏi phản vấn.' },
          { type: 'sort', context: 'Sắp xếp câu: bạn lại ho rồi à? Chẳng lẽ cảm cúm chưa khỏi hẳn sao?',
            words: ['你', '又', '咳嗽', '了', '？', '难道', '感冒', '还没', '好', '吗', '？'], answer: '你又咳嗽了？难道感冒还没好吗？',
            explanation: '难道……吗 kết hợp 咳嗽, ôn lại từ vựng Bài 7.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 难道.',
            promptLang: 'vi', prompt: 'Này, mười giờ rồi, chẳng lẽ bạn còn chưa đến lớp học sao?',
            answer: '喂，都十点了，难道你还不来教室吗？', answerPy: 'Wèi, dōu shí diǎn le, nándào nǐ hái bù lái jiàoshì ma?',
            explanation: '难道……吗 — chẳng lẽ … sao.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chẳng lẽ bạn không nghe điện thoại? Tôi gọi cho bạn nhiều lần rồi.',
            answer: '难道你没接电话吗？我给你打了好几次了。', answerPy: 'Nándào nǐ méi jiē diànhuà ma? Wǒ gěi nǐ dǎle hǎojǐ cì le.',
            explanation: '难道……吗 — chẳng lẽ … sao.' },
        ] },
      { point: '「通过」so sánh với 「经过」',
        items: [
          { context: 'Hoàn thành câu: bất kỳ thành công nào cũng phải qua nỗ lực mới có thể đạt được.',
            pre: '任何成功都要', blank: '通过', post: '努力才能得到。', options: ['通过', '经过', '结果'], answer: 0,
            explanation: '通过 (giới từ) — nhấn mạnh cách thức, phương tiện đạt được mục đích.' },
          { context: 'Hoàn thành câu: con phố này chỉ có thể đi bộ qua.',
            pre: '这条街只能步行', blank: '通过', post: '。', options: ['通过', '经过', '难道'], answer: 0,
            explanation: '通过 (động từ) — xuyên qua từ đầu này đến đầu kia.' },
          { context: 'Hoàn thành câu: sau hết lần thất bại này đến lần khác, cuối cùng anh ấy đã thành công.',
            pre: '', blank: '经过', post: '一次次失败之后，他终于成功了。', options: ['经过', '通过', '至少'], answer: 0,
            explanation: '经过 (động từ) — nhấn mạnh quá trình diễn ra sự việc.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我通过那家公司的面试了。经理对我印象不错，他要我明天就正式去上班。', isCorrect: true,
            explanation: 'Câu đúng: 通过 (động từ) ở đây mang nghĩa "đạt tiêu chuẩn, vượt qua" (通过面试).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '小王把事情的通过告诉我了，原来这件事真的跟你没关系。', isCorrect: false, correctVersion: '小王把事情的经过告诉我了，原来这件事真的跟你没关系。',
            explanation: '经过 có thể làm danh từ chỉ diễn biến sự việc (事情的经过) — 通过 KHÔNG có cách dùng làm danh từ này.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi正好经过这儿，顺便过来看看你。',
            words: ['我', '正好', '经过', '这儿', '，', '顺便', '过来', '看看', '你'], answer: '我正好经过这儿，顺便过来看看你。',
            explanation: '经过 (động từ) — đi ngang qua nơi nào đó, kết hợp 顺便, ôn lại từ vựng Bài 5.' },
          { type: 'sort', context: 'Sắp xếp câu: hy vọng thông qua hoạt động lần này khơi dậy hứng thú của mọi người, để mọi người hiểu công ty chúng tôi hơn.',
            words: ['希望', '通过', '这次', '活动', '引起', '大家', '的', '兴趣', '，', '让', '大家', '更', '了解', '我们', '公司'], answer: '希望通过这次活动引起大家的兴趣，让大家更了解我们公司。',
            explanation: '通过 (giới từ) + 活动 kết hợp 活动, ôn lại từ vựng Bài 8.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 通过 (giới từ).',
            promptLang: 'vi', prompt: 'Chương trình "Con người và tự nhiên" này luôn được yêu thích, thông qua nó tôi đã hiểu được không ít điều.',
            answer: '《人与自然》这个节目一直很受欢迎，通过它我了解了不少。', answerPy: 'Rén yǔ zìrán zhège jiémù yìzhí hěn shòu huānyíng, tōngguò tā wǒ liǎojiěle bùshǎo.',
            explanation: '通过 (giới từ) + đại từ + động từ — nhờ vào nó mà….' },
          { type: 'translate', context: 'Dịch câu sau, dùng 经过 (động từ, quá trình).',
            promptLang: 'vi', prompt: 'Nhờ nỗ lực của mọi người, công ty làm ăn ngày càng lớn mạnh.',
            answer: '经过大家的努力，公司的生意越做越大。', answerPy: 'Jīngguò dàjiā de nǔlì, gōngsī de shēngyi yuè zuò yuè dà.',
            explanation: '经过 (động từ) + 努力 kết hợp 生意, ôn lại từ vựng Bài 4.' },
        ] },
      { point: '「可是」',
        items: [
          { context: 'Hoàn thành câu: A: sao bạn lại muốn đổi việc nữa, thu nhập ở đây chẳng phải khá cao sao? B: tuy thu nhập cao, nhưng thường xuyên phải tăng ca.',
            pre: 'A：你怎么又想换工作了，这儿的收入不是挺高的吗？B：虽然收入高，', blank: '可是', post: '经常要加班，很少有时间和家人在一起。', options: ['可是', '通过', '难道'], answer: 0,
            explanation: '虽然……可是…… — tuy … nhưng….' },
          { context: 'Hoàn thành câu: lúc nhỏ, mọi người đều nói tôi giống mẹ. Nhưng lớn lên, họ lại nói tôi giống bố hơn.',
            pre: '小时候，大家都说我像我妈，尤其是性格。', blank: '可是', post: '长大后，他们说我更像爸爸。', options: ['可是', '经过', '至少'], answer: 0,
            explanation: '可是 đứng đầu câu mới, diễn tả sự chuyển ý.' },
          { context: 'Hoàn thành câu: lúc đó bố mẹ và họ hàng của cô ấy đều không ủng hộ cô ấy, nhưng cô ấy khăng khăng giữ lựa chọn của mình.',
            pre: '当时她的父母和亲戚都不支持她，', blank: '可是', post: '她坚持自己的选择。', options: ['可是', '结果', '面对'], answer: 0,
            explanation: '可是 kết hợp 坚持, ôn lại từ vựng của bài.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '虽然收入高，可是经常要加班，很少有时间和家人在一起。', isCorrect: true,
            explanation: 'Câu đúng: 虽然……可是…… là cấu trúc chuyển ý phổ biến.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '因为收入高，可是经常要加班。', isCorrect: false, correctVersion: '虽然收入高，可是经常要加班。',
            explanation: '可是 diễn tả sự CHUYỂN Ý/tương phản — vế trước phải nêu một sự thật đối lập (thường dùng 虽然), không thể ghép với 因为 (quan hệ nhân quả, không tương phản).' },
          { type: 'sort', context: 'Sắp xếp câu: anh ấy tuy viết chậm hơn một chút，可是写得很仔细。',
            words: ['他', '虽然', '写', '得', '比较', '慢', '，', '可是', '写', '得', '很', '仔细'], answer: '他虽然写得比较慢，可是写得很仔细。',
            explanation: '虽然……可是…… — tuy … nhưng….' },
          { type: 'sort', context: 'Sắp xếp câu: tôi đã hẹn vài bạn học sáng thứ Bảy đi đánh quần vợt，可是我周六有事，去不了。',
            words: ['我', '约', '了', '几', '个', '同学', '星期六', '上午', '去', '打', '网球', '，', '可是', '我', '周六', '有事', '，', '去不了'], answer: '我约了几个同学星期六上午去打网球，可是我周六有事，去不了。',
            explanation: '可是 kết hợp 网球, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 虽然……可是……',
            promptLang: 'vi', prompt: 'Bạn tại sao không thích Tiểu Vương? Anh ấy chẳng phải khá thành thật sao? Tuy anh ấy thành thật, nhưng tính khí không tốt lắm.',
            answer: '你为什么不喜欢小王？他不是挺诚实的吗？虽然他诚实，可是脾气不太好。', answerPy: 'Nǐ wèishénme bù xǐhuan Xiǎo Wáng? Tā bú shì tǐng chéngshí de ma? Suīrán tā chéngshí, kěshì píqi bú tài hǎo.',
            explanation: '虽然……可是…… kết hợp 诚实, ôn lại từ vựng Bài 3.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Cô ấy đã từ bỏ công việc luật sư, nhưng lại thành công trở thành một nhà văn.',
            answer: '她放弃了律师的工作，可是却成功地成为了一名作家。', answerPy: 'Tā fàngqìle lǜshī de gōngzuò, kěshì què chénggōng de chéngwéile yì míng zuòjiā.',
            explanation: '可是……成为 kết hợp 放弃/成为/作家, ôn lại nhiều từ vựng của bài.' },
        ] },
      { point: '「结果」',
        items: [
          { context: 'Hoàn thành câu: đừng lo lắng về kết quả, đừng cân nhắc việc có thất bại hay không.',
            pre: '不要担心', blank: '结果', post: '，不要考虑会不会失败。', options: ['结果', '过程', '区别'], answer: 0,
            explanation: '结果 (danh từ) — kết quả, trạng thái cuối cùng.' },
          { context: 'Hoàn thành câu: tháng sau nộp kết quả điều tra lên.',
            pre: '下个月把调查', blank: '结果', post: '交上来。', options: ['结果', '过程', '暂时'], answer: 0,
            explanation: '调查结果 — kết quả điều tra.' },
          { context: 'Hoàn thành câu: vợ tôi muốn giảm cân, nên mỗi sáng cô ấy đều đi cưỡi ngựa. Kết quả là con ngựa lại giảm mất 20 cân.',
            pre: '我妻子想减肥，所以她每天早上都去骑马。', blank: '结果', post: '马竟然在一个月之内瘦了二十斤。', options: ['结果', '至少', '区别'], answer: 0,
            explanation: '结果 (liên từ) — diễn tả kết quả bất ngờ ở vế sau.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '有些人爱说"差不多"。例如，每天的工作都是完成得差不多，结果，积累下来，就变成差很多了。', isCorrect: true,
            explanation: 'Câu đúng: 结果 (liên từ) chỉ ra kết quả tích lũy từ tình huống lặp lại nhiều lần ở vế trước.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '结果我不知道昨天的面试。', isCorrect: false, correctVersion: '昨天的面试结果怎么样？',
            explanation: '结果 làm danh từ phải gắn với sự việc cụ thể đã có kết luận (如 面试结果) — không thể dùng để mở đầu một câu diễn tả sự "không biết", vì bản thân 结果 hàm ý đã CÓ kết luận.' },
          { type: 'sort', context: 'Sắp xếp câu: không có ai tùy tiện thành công, thành công đều là kết quả của nỗ lực.',
            words: ['没有', '人', '随随便便', '成功', '，', '成功', '都', '是', '努力', '的', '结果'], answer: '没有人随随便便成功，成功都是努力的结果。',
            explanation: '结果 (danh từ) kết hợp 随便, ôn lại từ vựng của bài.' },
          { type: 'sort', context: 'Sắp xếp câu: tối qua tôi làm việc đến rất khuya mới ngủ，结果第二天起晚了。',
            words: ['昨天', '晚上', '我', '一直', '工作', '到', '很', '晚', '才', '睡', '，', '结果', '第二天', '起', '晚', '了'], answer: '昨天晚上我一直工作到很晚才睡，结果第二天起晚了。',
            explanation: '结果 (liên từ) — kết quả bất ngờ/không mong muốn.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 结果 (danh từ).',
            promptLang: 'vi', prompt: 'Không có ai tùy tiện là có thể thành công, thành công đều là dựa vào nỗ lực mà có được.',
            answer: '没有人随随便便就能成功，结果都是靠努力得来的。', answerPy: 'Méiyǒu rén suísuíbiànbiàn jiù néng chénggōng, jiéguǒ dōu shì kào nǔlì délái de.',
            explanation: '结果 (danh từ) kết hợp 随便, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 结果 (liên từ).',
            promptLang: 'vi', prompt: 'Anh ấy quyết định đi bằng con đường khác, kết quả lại đến muộn nửa tiếng.',
            answer: '他决定走另外一条路，结果却晚到了半个小时。', answerPy: 'Tā juédìng zǒu lìngwài yì tiáo lù, jiéguǒ què wǎn dàole bàn ge xiǎoshí.',
            explanation: '结果 (liên từ) kết hợp 另外, ôn lại từ vựng Bài 3.' },
        ] },
      { point: '「上」',
        items: [
          { context: 'Hoàn thành câu: tàu điện ngầm của thành phố này đã có lịch sử hơn trăm năm rồi.',
            pre: '这个城市的地铁已经有', blank: '上', post: '百年的历史了。', options: ['上', '结果', '过程'], answer: 0,
            explanation: '上 (động từ) + 百 — đạt đến trên trăm (năm).' },
          { context: 'Hoàn thành câu: mỗi năm có hàng nghìn hàng vạn học sinh tốt nghiệp cấp ba tham gia thi nghệ thuật.',
            pre: '每年有成千', blank: '上', post: '万的高中毕业生参加艺术考试。', options: ['上', '至少', '区别'], answer: 0,
            explanation: '成千上万 — cụm cố định, hàng nghìn hàng vạn.' },
          { context: 'Hoàn thành câu: Edison chính là sau khi tìm hàng nghìn loại vật liệu mới tìm được vật liệu thắp sáng bóng đèn.',
            pre: '爱迪生就是在找了', blank: '上', post: '千种材料后才找到了能点亮电灯的材料。', options: ['上', '通过', '难道'], answer: 0,
            explanation: '上千种 — trên nghìn loại, kết hợp 材料, ôn lại từ vựng Bài 3.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '每年有成千上万的高中毕业生参加艺术考试。', isCorrect: true,
            explanation: 'Câu đúng: 上 (động từ) + 万, kết hợp thành cụm cố định 成千上万.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这本书上很有名。', isCorrect: false, correctVersion: '这本书很有名。',
            explanation: '上 làm động từ (đạt đến, đủ số lượng) BẮT BUỘC phải có tân ngữ chỉ số lượng lớn theo sau (như 上百、上千) — không thể dùng 上 khi không có số lượng, và không liên quan gì đến tính từ "nổi tiếng".' },
          { type: 'sort', context: 'Sắp xếp câu: tấm báo cũ vốn chỉ đáng giá hai ba hào này có thể bán được giá cao hai ba trăm tệ.',
            words: ['这张', '本来', '值', '两三', '毛钱', '的', '旧报纸', '可以', '卖出', '两三百元', '的', '高价'], answer: '这张本来值两三毛钱的旧报纸可以卖出两三百元的高价。',
            explanation: 'Ôn lại từ vựng 本来 Bài 4 kết hợp với ngữ cảnh giá trị tăng vọt.' },
          { type: 'sort', context: 'Sắp xếp câu: sự việc này xảy ra vào năm 1914，后来上百人都知道了这件事。',
            words: ['这', '件', '事', '发生', '在', '1914年', '，', '后来', '上', '百', '人', '都', '知道', '了', '这', '件', '事'], answer: '这件事发生在1914年，后来上百人都知道了这件事。',
            explanation: '上百人 kết hợp 发生, ôn lại từ vựng Bài 8.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 上.',
            promptLang: 'vi', prompt: 'Bộ phim này rất nổi tiếng, đã có hàng nghìn người xem qua.',
            answer: '这个电影很有名，已经有上千人看过了。', answerPy: 'Zhège diànyǐng hěn yǒumíng, yǐjīng yǒu shàng qiān rén kànguo le.',
            explanation: '上千人 — trên nghìn người.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Trường học này đã có lịch sử trên trăm năm.',
            answer: '这所学校已经有上百年的历史了。', answerPy: 'Zhè suǒ xuéxiào yǐjīng yǒu shàng bǎi nián de lìshǐ le.',
            explanation: '上百年 — trên trăm năm.' },
        ] },
    ],
    '/lessons/hsk4-bai-10.html': [
      { point: '「不过」so sánh với 「但是」',
        items: [
          { context: 'Hoàn thành câu: tôi bây giờ trên có già, dưới có nhỏ, ngoài công việc còn phải chăm sóc mẹ và con. Nhưng bây giờ tôi rất hạnh phúc.',
            pre: '除了工作以外，家里还有母亲和儿子需要照顾。', blank: '不过', post: '现在我很幸福。', options: ['不过', '由于', '关键'], answer: 0,
            explanation: '不过 (liên từ) — chuyển ý nhẹ nhàng hơn 但是.' },
          { context: 'Hoàn thành câu: xin lỗi, loại bánh kem đó đã bán hết rồi, nhưng ông có thể nếm thử loại bánh quy này.',
            pre: '对不起，先生，那种蛋糕已经卖完了，', blank: '不过', post: '，您可以尝一下这种饼干。', options: ['不过', '答案', '确实'], answer: 0,
            explanation: '不过 dùng đưa ra ý kiến/lời đề nghị nhẹ nhàng, lịch sự.' },
          { context: 'Hoàn thành câu: bạn khách sáo quá rồi, tôi chỉ là đưa ra vài ý kiến thôi.',
            pre: '你太客气了，我', blank: '不过', post: '是给了些建议。', options: ['不过', '比如', '由于'], answer: 0,
            explanation: '不过 (phó từ) — "chỉ", nhấn mạnh số lượng/phạm vi nhỏ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '去年我不过50公斤，今年怎么这么胖了？', isCorrect: true,
            explanation: 'Câu đúng: 不过 (phó từ) + số lượng, nghĩa "chỉ".' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '别人的方法也许很有效，不过并不一定适合你。', isCorrect: true,
            explanation: 'Câu đúng: 不过 (liên từ) dùng ở đầu vế sau để chỉ chuyển ý, tương đương 但是 nhưng ngữ khí nhẹ hơn.' },
          { type: 'sort', context: 'Sắp xếp câu: chiếc áo đẹp thế này, nhưng giá hơi cao, mua một cái đi.',
            words: ['这么', '漂亮', '的', '衣服', '，', '不过', '价格', '有点儿', '高', '，', '买', '一', '件', '吧', '。'], answer: '这么漂亮的衣服，不过价格有点儿高，买一件吧。',
            explanation: '不过 kết hợp 价格, ôn lại từ vựng Bài 5.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi vốn đã định bỏ cuộc rồi, nhưng lời bạn vừa nói khiến tôi thay đổi ý định.',
            words: ['我', '本来', '已经', '打算', '放弃', '了', '，', '但是', '你', '刚才', '的', '话', '让', '我', '改变', '了', '主意', '。'], answer: '我本来已经打算放弃了，但是你刚才的话让我改变了主意。',
            explanation: '本来……但是 kết hợp 放弃, ôn lại từ vựng Bài 9.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 不过.',
            promptLang: 'vi', prompt: 'Chúng tôi chỉ bàn vài chuyện về công việc thôi, chuyện khác đều không bàn.',
            answer: '我们不过谈了点儿工作方面的问题，别的都没谈。', answerPy: 'Wǒmen búguò tánle diǎnr gōngzuò fāngmiàn de wèntí, biéde dōu méi tán.',
            explanation: '不过 (phó từ) — chỉ, nhấn mạnh phạm vi nhỏ.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Tôi có thể không đi được, nhưng bây giờ tôi rất rảnh, buổi tối gọi lại cho bạn nhé.',
            answer: '我可能去不了，不过现在我很闲，晚上再给你打电话吧。', answerPy: 'Wǒ kěnéng qù bu liǎo, búguò xiànzài wǒ hěn xián, wǎnshang zài gěi nǐ dǎ diànhuà ba.',
            explanation: '不过 — nhưng, chuyển ý.' },
        ] },
      { point: '「确实」',
        items: [
          { context: 'Hoàn thành câu: tình yêu thực sự là nguyên nhân quan trọng của hôn nhân, nhưng chỉ có tình yêu thôi thì không đủ.',
            pre: '爱情', blank: '确实', post: '是结婚的重要原因，但仅有爱情是不够的。', options: ['确实', '不过', '关键'], answer: 0,
            explanation: '确实 (phó từ) — khẳng định tính xác thực của tình huống khách quan.' },
          { context: 'Hoàn thành câu: tôi nói thật đấy, bạn thực sự trẻ hơn, đẹp hơn trước rồi.',
            pre: '我说的是真的，你', blank: '确实', post: '比以前更年轻、更漂亮了。', options: ['确实', '由于', '比如'], answer: 0,
            explanation: '确实 + tính từ — khẳng định điều nói là đúng.' },
          { context: 'Hoàn thành câu: con gái tôi thực sự rất tốt, nhớ lúc nó vừa nhận lương tháng đầu tiên.',
            pre: '我女儿', blank: '确实', post: '不错，记得她刚拿到第一个月工资时。', options: ['确实', '将来', '答案'], answer: 0,
            explanation: '确实不错 — thực sự không tệ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这次考试确实很难，很多同学都没考好。', isCorrect: true,
            explanation: 'Câu đúng: 确实 khẳng định tính xác thực của tình huống khách quan (đề thi thực sự khó).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他确实认为这个办法不好，我们换一个吧。', isCorrect: false, correctVersion: '他的确认为这个办法不好，我们换一个吧。',
            explanation: '确实 dùng để khẳng định TÍNH XÁC THỰC của một tình huống khách quan, không dùng để nhấn mạnh một Ý KIẾN chủ quan (trường hợp này nên dùng 的确 hoặc bỏ để câu tự nhiên hơn).' },
          { type: 'sort', context: 'Sắp xếp câu: terminal quá cao rồi, cuối cùng leo lên được rồi, mệt chết tôi rồi.',
            words: ['终于', '爬', '上来', '了', '，', '累死', '我', '了', '，', '这', '山', '太', '高', '了', '！'], answer: '终于爬上来了，累死我了，这山太高了！',
            explanation: 'Câu dẫn nhập cho bài luyện tập 确实 (SGK trang 129).' },
          { type: 'sort', context: 'Sắp xếp câu: bạn thực sự nói đúng, leo núi rất mệt nhưng phong cảnh rất đẹp.',
            words: ['你', '确实', '说', '得', '对', '，', '爬山', '很', '累', '但是', '风景', '很', '美', '。'], answer: '你确实说得对，爬山很累但是风景很美。',
            explanation: '确实说得对 kết hợp 风景, ôn lại từ vựng Bài 6.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 确实.',
            promptLang: 'vi', prompt: 'Phòng học thực sự hơi nóng, mở cửa sổ ra đi.',
            answer: '教室里确实有点儿热，把窗户打开吧。', answerPy: 'Jiàoshì li quèshí yǒudiǎnr rè, bǎ chuānghu dǎkāi ba.',
            explanation: '确实有点儿……— thực sự hơi….' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Hai người quen biết nhau đã không dễ dàng, còn phải hiểu nhau, thích nhau, cùng sống với nhau, một mạch đến cuối đời, thực sự cần rất nhiều nỗ lực.',
            answer: '两个人相识已经不容易，还要互相了解、互相喜欢、一起生活，一直到生命的最后，确实需要很多努力。', answerPy: 'Liǎng ge rén xiāngshí yǐjīng bù róngyì, hái yào hùxiāng liǎojiě, hùxiāng xǐhuan, yìqǐ shēnghuó, yìzhí dào shēngmìng de zuìhòu, quèshí xūyào hěn duō nǔlì.',
            explanation: '确实需要…… — thực sự cần….' },
        ] },
      { point: '「在……看来」',
        items: [
          { context: 'Hoàn thành câu: trong mắt nhiều người, nghe nhạc流行 chỉ là sở thích của người trẻ.',
            pre: '', blank: '在很多人看来', post: '，听流行音乐仅仅是年轻人的爱好。', options: ['在很多人看来', '由于工作需要', '不过是建议'], answer: 0,
            explanation: '在……看来 — thành phần chêm xen, dẫn ra ý kiến/quan điểm.' },
          { context: 'Hoàn thành câu: theo tôi thấy, kết quả thi đấu không phải quan trọng nhất.',
            pre: '', blank: '在我看来', post: '，比赛结果并不是最重要的。', options: ['在我看来', '确实不错', '比如说'], answer: 0,
            explanation: '在我看来 — theo tôi thấy.' },
          { context: 'Hoàn thành câu: theo tôi thấy, kiếm được nhiều tiền hay không không phải điều quan trọng nhất, hứng thú mới là điều mấu chốt.',
            pre: '', blank: '在我看来', post: '，赚钱多少不是最重要的，兴趣才是关键。', options: ['在我看来', '由于种种原因', '答案确实'], answer: 0,
            explanation: '在我看来 kết hợp 关键, ôn lại từ vựng của bài.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '在他看来，学习外语最重要的是多听多说，而不是死记单词。', isCorrect: true,
            explanation: 'Câu đúng: 在……看来 dẫn ra ý kiến/quan điểm của người được nêu (他).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '在看来，这个问题不难解决。', isCorrect: false, correctVersion: '在我看来，这个问题不难解决。',
            explanation: '在……看来 bắt buộc phải có chủ thể quan điểm (người/nhóm người) chen giữa 在 và 看来, không thể bỏ trống.' },
          { type: 'sort', context: 'Sắp xếp câu: Đặng Á Bình là vận động viên bóng bàn của Trung Quốc, chiều cao chỉ có 1m55, nhưng theo tôi thấy, cô ấy là vận động viên xuất sắc nhất.',
            words: ['邓亚萍', '是', '中国', '的', '乒乓球', '运动员', '，', '她', '的', '身高', '只有', '一米五五', '，', '在', '我', '看来', '，', '她', '是', '最', '优秀', '的', '运动员', '。'], answer: '邓亚萍是中国的乒乓球运动员，她的身高只有一米五五，在我看来，她是最优秀的运动员。',
            explanation: '在我看来 kết hợp 优秀, ôn lại từ vựng của bài.' },
          { type: 'sort', context: 'Sắp xếp câu: có người nói thời gian là tiền bạc, nhưng theo tôi thấy, sức khỏe mới là thứ quan trọng nhất.',
            words: ['有人', '说', '时间', '就', '是', '金钱', '，', '不过', '在', '我', '看来', '，', '健康', '才', '是', '最', '重要', '的', '。'], answer: '有人说时间就是金钱，不过在我看来，健康才是最重要的。',
            explanation: '在我看来 kết hợp 不过, ôn lại điểm ngữ pháp của bài.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 在……看来.',
            promptLang: 'vi', prompt: 'Theo tôi thấy, bạn không cần vội, chậm mà chắc mới là quan trọng nhất.',
            answer: '在我看来，你不用着急，慢慢来才是最重要的。', answerPy: 'Zài wǒ kànlái, nǐ bú yòng zháojí, mànman lái cái shì zuì zhòngyào de.',
            explanation: '在我看来 — theo tôi thấy.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Theo bố mẹ thấy, tìm được công việc ổn định mới là điều quan trọng nhất.',
            answer: '在父母看来，找到一份稳定的工作才是最重要的。', answerPy: 'Zài fùmǔ kànlái, zhǎodào yí fèn wěndìng de gōngzuò cái shì zuì zhòngyào de.',
            explanation: '在……看来 — theo … thấy.' },
        ] },
      { point: '「由于」',
        items: [
          { context: 'Hoàn thành câu: tết năm nay họ vốn định ra nước ngoài đi dạo, nhưng vì người già trong nhà đột nhiên bị ốm, nên họ đành phải từ bỏ kế hoạch này.',
            pre: '今年春节他们本来打算出国去逛逛，但是', blank: '由于', post: '家里的老人突然生病了，所以他们只好放弃了这个计划。', options: ['由于', '不过', '确实'], answer: 0,
            explanation: '由于 (liên từ) — chỉ nguyên nhân, đứng ở vế đầu của câu phức.' },
          { context: 'Hoàn thành câu: khi bạn bị ốm, nếu vì thiếu tiền mà không thể kịp thời đi khám bệnh, sức khỏe rất khó được đảm bảo.',
            pre: '当你生病了，如果', blank: '由于', post: '缺钱而不能及时去看医生，你的健康都很难得到保证。', options: ['由于', '比如', '关键'], answer: 0,
            explanation: '由于 + cụm từ chỉ nguyên nhân.' },
          { context: 'Hoàn thành câu: vì nhu cầu công việc, tháng 10 năm ngoái tôi đã đến Thượng Hải, đến đàm phán kinh doanh với một công ty.',
            pre: '', blank: '由于', post: '工作的需要，我去年十月去了趟上海，跟一家公司去谈生意。', options: ['由于', '将来', '经济'], answer: 0,
            explanation: '由于 (giới từ) + cụm danh từ.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '由于种种原因，我们不得不改变原来的计划。', isCorrect: true,
            explanation: 'Câu đúng: 由于 (giới từ) + cụm danh từ (种种原因) chỉ nguyên nhân.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这次活动的举办时间不得不改到下周，由于。', isCorrect: false, correctVersion: '由于种种原因，这次活动的举办时间不得不改到下周。',
            explanation: '由于 chỉ nguyên nhân phải đứng ở ĐẦU vế câu chứa nguyên nhân, không thể đặt lẻ ở cuối câu không có nội dung theo sau.' },
          { type: 'sort', context: 'Sắp xếp câu: hôm nay thi không tốt lắm là vì tối qua ngủ không đủ giấc.',
            words: ['由于', '昨晚', '没', '睡', '够', '觉', '，', '今天', '考得', '不怎么样', '。'], answer: '由于昨晚没睡够觉，今天考得不怎么样。',
            explanation: '由于 kết hợp 睡够觉, chỉ nguyên nhân.' },
          { type: 'sort', context: 'Sắp xếp câu: máy bay vì thời tiết xấu nên vẫn chưa cất cánh.',
            words: ['飞机', '由于', '天气', '不好', '，', '还', '没', '起飞', '。'], answer: '飞机由于天气不好，还没起飞。',
            explanation: '由于 + nguyên nhân (天气不好).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 由于.',
            promptLang: 'vi', prompt: 'Vì công việc bận rộn, tôi đã lâu không về nhà thăm bố mẹ rồi.',
            answer: '由于工作忙，我已经很久没回家看望父母了。', answerPy: 'Yóuyú gōngzuò máng, wǒ yǐjīng hěn jiǔ méi huí jiā kànwàng fùmǔ le.',
            explanation: '由于 + nguyên nhân, ôn lại từ vựng của bài (母亲/看望).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Vì kinh tế điều kiện không tốt, cô ấy phải bỏ học đi làm.',
            answer: '由于经济条件不好，她不得不放弃学习去工作。', answerPy: 'Yóuyú jīngjì tiáojiàn bù hǎo, tā bùdébù fàngqì xuéxí qù gōngzuò.',
            explanation: '由于经济条件 kết hợp 经济/条件, ôn lại từ vựng của bài.' },
        ] },
      { point: '「比如」',
        items: [
          { context: 'Hoàn thành câu: còn có người nói, lúc nhỏ hạnh phúc là một món đồ, ví dụ như cục tẩy, viên kẹo, có được là rất hạnh phúc.',
            pre: '还有人说，小时候幸福是一件东西，', blank: '比如', post: '一块橡皮、一块糖，得到了就很幸福。', options: ['比如', '由于', '不过'], answer: 0,
            explanation: '比如 (động từ) — dẫn ra ví dụ.' },
          { context: 'Hoàn thành câu: mỗi người đều có thứ mình đặc biệt hứng thú, ví dụ như, nhà văn thích viết tiểu thuyết.',
            pre: '每个人都有自己特别感兴趣的东西，', blank: '比如', post: '，作家爱写小说，画家爱画画儿。', options: ['比如', '确实', '关键'], answer: 0,
            explanation: '比如 dẫn ra ví dụ cụ thể cho ý vừa nêu.' },
          { context: 'Hoàn thành câu: trước khi du lịch tốt nhất nên lập kế hoạch, ví dụ như định đi mấy nơi, đi xe thế nào.',
            pre: '旅游前最好做个计划，', blank: '比如', post: '要去几个地方，怎么坐车。', options: ['比如', '在我看来', '将来'], answer: 0,
            explanation: '比如 kết hợp 计划, đưa ra ví dụ minh họa.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '有时候，质量很好的东西也会很便宜，比如，春天来了冬天的衣服就会打折。', isCorrect: true,
            explanation: 'Câu đúng: 比如 dẫn ra ví dụ (mùa đông sang xuân, quần áo đông giảm giá) minh họa cho ý "chất lượng tốt cũng có thể rẻ".' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '比如很多东西不能用钱买到，时间、感情等。', isCorrect: false, correctVersion: '很多东西不能用钱买到，比如时间、感情等。',
            explanation: '比如 phải đứng SAU câu/ý chung rồi mới dẫn ra ví dụ cụ thể, không thể đặt ở đầu câu trước khi nêu ý chung.' },
          { type: 'sort', context: 'Sắp xếp câu: trong tiếng Hán, chúng ta gọi phần bên trái của các chữ 海、江、河 là "ba chấm thủy". Chữ Hán như vậy còn có rất nhiều, ví dụ 湖、法.',
            words: ['这样', '的', '汉字', '还有', '很多', '，', '比如', '湖', '、', '法', '。'], answer: '这样的汉字还有很多，比如湖、法。',
            explanation: '比如 dẫn ra ví dụ cụ thể (湖,法) cho ý "chữ Hán như vậy còn nhiều".' },
          { type: 'sort', context: 'Sắp xếp câu: mới đến một môi trường mới, có rất nhiều cách để khiến bản thân thích nghi nhanh hơn một chút, ví dụ chủ động làm quen với bạn bè mới.',
            words: ['刚', '到', '一个', '新', '环境', '，', '有', '很多', '种', '方法', '来', '使', '自己', '快', '一点儿', '适应', '，', '比如', '主动', '认识', '新', '朋友', '。'], answer: '刚到一个新环境，有很多种方法来使自己快一点儿适应，比如主动认识新朋友。',
            explanation: '比如 dẫn ra ví dụ cụ thể cho "phương pháp thích nghi".' },
          { type: 'translate', context: 'Dịch câu sau, dùng 比如.',
            promptLang: 'vi', prompt: 'Rất nhiều nghề nghiệp cần dùng đến tiếng Trung, ví dụ như phiên dịch viên, giáo viên.',
            answer: '很多职业都需要用到汉语，比如翻译、老师。', answerPy: 'Hěn duō zhíyè dōu xūyào yòngdào Hànyǔ, bǐrú fānyì, lǎoshī.',
            explanation: '比如 kết hợp 职业/翻译, ôn lại từ vựng của bài.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Có rất nhiều cách để bản thân cảm thấy hạnh phúc, ví dụ như đọc sách, nghe nhạc, gặp gỡ bạn bè.',
            answer: '有很多方法能让自己感到幸福，比如看书、听音乐、见朋友。', answerPy: 'Yǒu hěn duō fāngfǎ néng ràng zìjǐ gǎndào xìngfú, bǐrú kàn shū, tīng yīnyuè, jiàn péngyou.',
            explanation: '比如 dẫn ra ví dụ, ôn lại chủ đề hạnh phúc của bài.' },
        ] },
    ],
    '/lessons/hsk4-bai-11.html': [
      { point: '「连」',
        items: [
          { context: 'Hoàn thành câu: bạn giỏi quá! Ngay cả báo tiếng Trung cũng đọc hiểu được.',
            pre: '你太厉害了！', blank: '连', post: '中文报纸都看得懂。', options: ['连', '否则', '然而'], answer: 0,
            explanation: '连 + tân ngữ đặt trước + 都 — nhấn mạnh ví dụ cực đoan.' },
          { context: 'Hoàn thành câu: nếu ngay cả bản thân bạn cũng không thích chính mình, thì làm sao khiến người khác thích bạn được?',
            pre: '如果', blank: '连', post: '你自己都不喜欢自己，又怎么能让别人喜欢你呢？', options: ['连', '无论', '同时'], answer: 0,
            explanation: '连 + chủ ngữ + 都 — nhấn mạnh.' },
          { context: 'Hoàn thành câu: quảng cáo hầu như ở đâu cũng có, ngay cả trong thang máy tòa nhà tôi ở cũng có ba quảng cáo.',
            pre: '广告几乎无处不在，', blank: '连', post: '我住的楼的电梯里都有三个广告。', options: ['连', '由于', '比如'], answer: 0,
            explanation: '连……都 — nhấn mạnh; câu có 几乎 (ôn lại Bài 2).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他病得很厉害，连水都喝不下。', isCorrect: true,
            explanation: 'Câu đúng: 连 + tân ngữ (水) đặt trước + 都 + động từ phủ định.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他连中文报纸看得懂。', isCorrect: false, correctVersion: '他连中文报纸都看得懂。',
            explanation: '连 bắt buộc đi kèm 也/都 phía sau; thiếu 都 câu không thành cấu trúc nhấn mạnh.' },
          { type: 'sort', context: 'Sắp xếp câu: chiếc vali này nặng quá, ngay cả người lớn cũng nhấc không nổi, trẻ con càng nhấc không nổi.',
            words: ['这个', '箱子', '太', '重', '了', '，', '连', '大人', '都', '拿不动', '，', '小孩子', '更', '拿不动', '了', '。'], answer: '这个箱子太重了，连大人都拿不动，小孩子更拿不动了。',
            explanation: '连……都 — bài luyện tập SGK (1); ôn lại bổ ngữ khả năng 拿不动.' },
          { type: 'sort', context: 'Sắp xếp câu: Anna rất tức giận vì chuyện này, ngay cả cơm cũng không muốn ăn.',
            words: ['安娜', '因为', '这件', '事', '很', '生气', '，', '连', '饭', '都', '不', '想', '吃', '了', '。'], answer: '安娜因为这件事很生气，连饭都不想吃了。',
            explanation: '连……都 — bài luyện tập SGK (3).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 连.',
            promptLang: 'vi', prompt: 'Vấn đề này ngay cả giáo sư cũng giải quyết không được, chúng ta càng không giải quyết nổi.',
            answer: '这个问题连教授都解决不了，我们更解决不了了。', answerPy: 'Zhège wèntí lián jiàoshòu dōu jiějué bu liǎo, wǒmen gèng jiějué bu liǎo le.',
            explanation: '连……都 + bổ ngữ khả năng 解决不了 — bài luyện tập SGK (2).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Anh ấy bận đến mức ngay cả ngày chủ nhật cũng không có thời gian rảnh.',
            answer: '他忙得连礼拜天都没有空儿。', answerPy: 'Tā máng de lián lǐbàitiān dōu méiyǒu kòngr.',
            explanation: '连……都 kết hợp 礼拜天/空儿 (ôn lại từ vựng Bài 10).' },
        ] },
      { point: '「否则」',
        items: [
          { context: 'Hoàn thành câu: anh ấy chắc chắn có việc quan trọng tìm bạn, nếu không sẽ không gọi điện nhiều lần như vậy.',
            pre: '他一定有重要的事找你，', blank: '否则', post: '不会打这么多次电话来。', options: ['否则', '然而', '同时'], answer: 0,
            explanation: '否则 — nếu không thì (kết quả suy ra từ vế trước).' },
          { context: 'Hoàn thành câu: bạn tốt nhất nên đến công ty tìm cô ấy trước bốn giờ chiều, nếu không thì sáng mai đi lại.',
            pre: '你最好下午四点前去公司找她，', blank: '否则', post: '就明天早上再去。', options: ['否则', '连', '无论'], answer: 0,
            explanation: '否则 đưa ra một lựa chọn khác.' },
          { context: 'Hoàn thành câu: muốn thi tốt còn phải chú ý phương pháp thi, nếu không câu biết làm cũng không có thời gian làm.',
            pre: '还得注意考试的方法，', blank: '否则', post: '会做的题也没时间做了。', options: ['否则', '比如', '确实'], answer: 0,
            explanation: '否则 — hậu quả nếu không làm theo.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '要想减肥成功，一定要坚持，否则很难看到效果。', isCorrect: true,
            explanation: 'Câu đúng: 否则 nối vế hậu quả; ôn lại 坚持 (Bài 9).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '否则你不认真复习，考试就会不及格。', isCorrect: false, correctVersion: '你要认真复习，否则考试就会不及格。',
            explanation: '否则 phải đứng ở đầu VẾ SAU (vế hậu quả), không đứng đầu câu thay cho 如果.' },
          { type: 'sort', context: 'Sắp xếp câu: quảng cáo lý tưởng không nên quá dài, nếu không người xem sẽ không có kiên nhẫn xem hết.',
            words: ['理想', '的', '广告', '不', '应该', '太', '长', '，', '否则', '观众', '会', '没有', '耐心', '看完', '。'], answer: '理想的广告不应该太长，否则观众会没有耐心看完。',
            explanation: '否则 — bài luyện tập SGK (1); ôn lại 理想 (Bài 9).' },
          { type: 'sort', context: 'Sắp xếp câu: trước khi đi Mỹ du học nên học tốt tiếng Anh trước, nếu không sẽ khó thích nghi với cuộc sống ở đó.',
            words: ['去', '美国', '留学', '前', '应该', '先', '学好', '英语', '，', '否则', '很难', '适应', '那里', '的', '生活', '。'], answer: '去美国留学前应该先学好英语，否则很难适应那里的生活。',
            explanation: '否则 — bài luyện tập SGK (3); ôn lại 适应 (Bài 8).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 否则.',
            promptLang: 'vi', prompt: 'Bạn phải hình thành thói quen đọc sách mỗi ngày, nếu không kiến thức sẽ rất có hạn.',
            answer: '你得养成每天阅读的习惯，否则知识会很有限。', answerPy: 'Nǐ děi yǎngchéng měi tiān yuèdú de xíguàn, fǒuzé zhīshi huì hěn yǒuxiàn.',
            explanation: '否则 kết hợp 养成/阅读 (từ mới của bài).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chúng ta phải xuất phát sớm một chút, nếu không sẽ không kịp chuyến tàu 8 giờ.',
            answer: '我们得早点儿出发，否则就来不及坐八点的火车了。', answerPy: 'Wǒmen děi zǎo diǎnr chūfā, fǒuzé jiù láibují zuò bā diǎn de huǒchē le.',
            explanation: '否则 kết hợp 来不及 (ôn lại Bài 7).' },
        ] },
      { point: '「无论」so sánh với 「不管」',
        items: [
          { context: 'Hoàn thành câu: bất kể là tạp chí bình thường, hay tiểu thuyết nổi tiếng, chỉ cần mở ra sẽ phát hiện nhiều chuyện thú vị.',
            pre: '', blank: '无论', post: '是普通杂志，还是著名小说，只要打开它们，就会发现很多有意思的事情。', options: ['无论', '否则', '然而'], answer: 0,
            explanation: '无论……还是……，就/都…… — kết quả không đổi; ôn lại 只要……就 (Bài 8).' },
          { context: 'Hoàn thành câu: bất kể làm việc gì đều phải chú ý phương pháp.',
            pre: '', blank: '无论', post: '做什么事都要注意方法。', options: ['无论', '同时', '连'], answer: 0,
            explanation: '无论 + đại từ nghi vấn phiếm chỉ (什么) + 都.' },
          { context: 'Hoàn thành câu: tuy áp lực rất lớn, nhưng vì lý tưởng chung, dù thế nào cũng nhất định không được từ bỏ.',
            pre: '虽然压力很大，但是为了我们共同的理想，', blank: '无论', post: '如何一定不能放弃。', options: ['无论', '不管', '否则'], answer: 0,
            explanation: '无论如何 — chỉ dùng 无论, KHÔNG dùng 不管 trước 如何 (từ trang trọng).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '不管热不热，他总是穿这么多。', isCorrect: true,
            explanation: 'Câu đúng: sau 不管 có thể dùng hình thức khẳng định-phủ định (热不热).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '无论热不热，他总是穿这么多。', isCorrect: false, correctVersion: '无论热还是不热，他总是穿这么多。',
            explanation: 'Sau 无论, hình thức khẳng định-phủ định thường phải thêm 还是/跟/与 vào giữa (热还是不热); dùng 热不热 trực tiếp là cách nói của 不管.' },
          { type: 'sort', context: 'Sắp xếp câu: bất kể người khác nói gì, tôi chỉ tin vào những gì mắt mình nhìn thấy.',
            words: ['无论', '别人', '说', '什么', '，', '我', '只', '相信', '自己', '眼睛', '看见', '的', '东西', '。'], answer: '无论别人说什么，我只相信自己眼睛看见的东西。',
            explanation: '无论 + 什么 — bài 做一做 SGK (1).' },
          { type: 'sort', context: 'Sắp xếp câu: ánh sáng, không khí và nước, bất kể đối với động thực vật hay con người, ba thứ này đều không thể thiếu.',
            words: ['阳光', '、', '空气', '和', '水', '，', '无论', '是', '对', '动植物', '，', '还是', '对', '人', '来说', '，', '都', '是', '不可', '缺少', '的', '。'], answer: '阳光、空气和水，无论是对动植物，还是对人来说，都是不可缺少的。',
            explanation: '无论……还是……都 — bài 做一做 SGK (5); ôn lại 对……来说 (Bài 5) và 缺少 (Bài 8).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 无论.',
            promptLang: 'vi', prompt: 'Bất kể là công việc hay học tập, "nói suông không luyện" đều không được.',
            answer: '无论是工作还是学习，"光说不练"都是不行的。', answerPy: 'Wúlùn shì gōngzuò háishi xuéxí, "guāng shuō bú liàn" dōu shì bùxíng de.',
            explanation: '无论……还是……都 — bài 做一做 SGK (3).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Theo tôi thấy, bất kể kết quả thế nào, chỉ cần đã nỗ lực thì đều đáng để tự hào.',
            answer: '在我看来，无论结果怎么样，只要努力过了，就都值得骄傲。', answerPy: 'Zài wǒ kànlái, wúlùn jiéguǒ zěnmeyàng, zhǐyào nǔlìguo le, jiù dōu zhídé jiāo\'ào.',
            explanation: '无论……都 kết hợp 在……看来 (Bài 10), 结果 (Bài 9), 值得 (Bài 6).' },
        ] },
      { point: '「然而」',
        items: [
          { context: 'Hoàn thành câu: anh ấy tuy thất bại rất nhiều lần, nhưng vẫn luôn không từ bỏ.',
            pre: '他虽然失败了很多次，', blank: '然而', post: '一直没有放弃。', options: ['然而', '否则', '同时'], answer: 0,
            explanation: '然而 — chuyển ý (văn viết); ôn lại 失败/放弃 (Bài 9).' },
          { context: 'Hoàn thành câu: nhiều người cảm thấy cuộc sống mình hạnh phúc, tuy nhiên cách nhìn của mỗi người về hạnh phúc lại không giống nhau.',
            pre: '很多人觉得自己的生活是幸福的，', blank: '然而', post: '每个人对幸福的看法却不完全相同。', options: ['然而', '无论', '连'], answer: 0,
            explanation: '然而……却 — chuyển ý; ôn lại 却 (Bài 2).' },
          { context: 'Hoàn thành câu: tuy nhiên, bạn không thể hoàn toàn tin vào nội dung trong sách.',
            pre: '', blank: '然而', post: '，你不能完全相信书本上的内容，要有自己的看法和判断。', options: ['然而', '由于', '比如'], answer: 0,
            explanation: '然而 đứng đầu vế sau, có dấu phẩy để ngắt.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他从小就想成为一名警察，然而由于身体原因，最后只好放弃了。', isCorrect: true,
            explanation: 'Câu đúng: 然而 + 由于 (Bài 10) + 只好 (từ mới) — bài luyện tập SGK (1).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '然而他失败了很多次，一直没有放弃。', isCorrect: false, correctVersion: '他虽然失败了很多次，然而一直没有放弃。',
            explanation: '然而 phải đứng ở đầu VẾ SAU để chuyển ý, không đứng đầu vế trước.' },
          { type: 'sort', context: 'Sắp xếp câu: nói phức tạp một vấn đề đơn giản không hề khó, tuy nhiên nói đơn giản một vấn đề phức tạp mới thực sự khó.',
            words: ['把', '简单', '的', '问题', '说', '复杂', '并', '不', '难', '，', '然而', '把', '复杂', '的', '问题', '说', '简单', '才', '真正', '难', '。'], answer: '把简单的问题说复杂并不难，然而把复杂的问题说简单才真正难。',
            explanation: '然而 — bài luyện tập SGK (2); ôn lại 并 (Bài 4) và câu chữ 把.' },
          { type: 'sort', context: 'Sắp xếp câu: có người cho rằng chỉ cần có tiền là sẽ hạnh phúc, tuy nhiên rất nhiều thứ không thể dùng tiền mua được.',
            words: ['有的', '人', '觉得', '只要', '有', '钱', '就', '会', '幸福', '，', '然而', '很多', '东西', '是', '不能', '用', '钱', '买到', '的', '。'], answer: '有的人觉得只要有钱就会幸福，然而很多东西是不能用钱买到的。',
            explanation: '然而 — bài luyện tập SGK (3); ôn lại 只要……就 (Bài 8) và bài đọc Bài 10.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 然而.',
            promptLang: 'vi', prompt: 'Đọc sách có rất nhiều lợi ích, tuy nhiên thời gian của mỗi người đều có hạn, nên phải chọn sách hay để đọc.',
            answer: '读书有很多好处，然而每个人的时间都是有限的，所以要选好书来读。', answerPy: 'Dú shū yǒu hěn duō hǎochù, rán\'ér měi ge rén de shíjiān dōu shì yǒuxiàn de, suǒyǐ yào xuǎn hǎo shū lái dú.',
            explanation: '然而 nối ý bài đọc 5; ôn lại 有限.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Kế hoạch này nghe rất lý tưởng, tuy nhiên thực tế thực hiện thì lại phức tạp hơn nhiều.',
            answer: '这个计划听起来很理想，然而实际做起来却复杂得多。', answerPy: 'Zhège jìhuà tīng qilai hěn lǐxiǎng, rán\'ér shíjì zuò qilai què fùzá de duō.',
            explanation: '然而……却 kết hợp 实际 (Bài 5), 理想 (Bài 9), 复杂 (từ mới).' },
        ] },
      { point: '「同时」',
        items: [
          { context: 'Hoàn thành câu: vì suy nghĩ của trẻ con không phức tạp nên chúng luôn vui vẻ. Đồng thời, trẻ con cũng là thành thật nhất.',
            pre: '因为小孩子的想法没有那么复杂，所以他们总是很快乐。', blank: '同时', post: '，小孩子也是最诚实的。', options: ['同时', '否则', '然而'], answer: 0,
            explanation: '同时 (liên từ) + 也 — hơn nữa, tiến thêm một bước.' },
          { context: 'Hoàn thành câu: đọc sách làm phong phú kiến thức; đồng thời, nó còn làm phong phú tình cảm của bạn.',
            pre: '阅读能丰富你的知识；', blank: '同时', post: '，它还会丰富你的情感，使你的生活更精彩。', options: ['同时', '无论', '连'], answer: 0,
            explanation: '同时……还 — tiến thêm; ôn lại 使 (Bài 8).' },
          { context: 'Hoàn thành câu: trong lúc học tiếng Trung, tôi còn hiểu thêm văn hóa Trung Quốc.',
            pre: '在学习汉语的', blank: '同时', post: '，我还了解了中国文化，认识了很多中国朋友。', options: ['同时', '之后', '顺序'], answer: 0,
            explanation: '在……的同时 (danh từ) — hành động xảy ra cùng lúc.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '李教授讲的这个故事让人觉得好笑的同时，又让人觉得有些难过。', isCorrect: true,
            explanation: 'Câu đúng: ……的同时，又…… — hai cảm xúc cùng lúc; ôn lại 让 (Bài 8).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他是我们的老师，同时是我们的朋友。', isCorrect: false, correctVersion: '他是我们的老师，同时也是我们的朋友。',
            explanation: '同时 (liên từ "hơn nữa") thường phải kết hợp 也/又/还 ở vế sau — thiếu 也 câu nghe cụt và không rõ nghĩa tiến thêm; bài luyện tập SGK (1).' },
          { type: 'sort', context: 'Sắp xếp câu: cô ấy là nhà khoa học nổi tiếng, đồng thời cũng là một người mẹ tốt.',
            words: ['她', '是', '著名', '的', '科学家', '，', '同时', '也', '是', '一位', '好', '母亲', '。'], answer: '她是著名的科学家，同时也是一位好母亲。',
            explanation: '同时……也 — bài luyện tập SGK (2); ôn lại 母亲 (Bài 10).' },
          { type: 'sort', context: 'Sắp xếp câu: anh trai tôi trong lúc học thạc sĩ, còn làm việc ở một công ty.',
            words: ['我', '哥哥', '在', '读', '硕士', '的', '同时', '，', '还', '在', '一个', '公司', '工作', '。'], answer: '我哥哥在读硕士的同时，还在一个公司工作。',
            explanation: '在……的同时 — bài luyện tập SGK (3); ôn lại 硕士 (Bài 10).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 同时.',
            promptLang: 'vi', prompt: 'Kiên trì đọc sách có thể tăng thêm kiến thức, đồng thời còn giúp giảm bớt áp lực.',
            answer: '坚持阅读能增加知识，同时还能帮助减轻压力。', answerPy: 'Jiānchí yuèdú néng zēngjiā zhīshi, tóngshí hái néng bāngzhù jiǎnqīng yālì.',
            explanation: '同时……还 kết hợp 增加/阅读 (từ mới), 压力 (Bài 5).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Trong lúc kiếm tiền, chúng ta cũng nên chú ý sức khỏe, nếu không có sức khỏe thì có tiền cũng không hạnh phúc.',
            answer: '在赚钱的同时，我们也应该注意身体，否则没有健康，有钱也不会幸福。', answerPy: 'Zài zhuàn qián de tóngshí, wǒmen yě yīnggāi zhùyì shēntǐ, fǒuzé méiyǒu jiànkāng, yǒu qián yě bú huì xìngfú.',
            explanation: '在……的同时 + 否则 (từ mới), ôn lại chủ đề Bài 10.' },
        ] },
    ],
    '/lessons/hsk4-bai-12.html': [
      { point: '「并且」',
        items: [
          { context: 'Hoàn thành câu: anh ấy làm việc rất nghiêm túc, hơn nữa có kinh nghiệm phong phú.',
            pre: '他做事很认真，', blank: '并且', post: '有丰富的经验，让他负责很合适。', options: ['并且', '相反', '对于'], answer: 0,
            explanation: '并且 nối hai tính chất song song; ôn lại 让 (Bài 8).' },
          { context: 'Hoàn thành câu: căn nhà này đồ đạc đều mới, hơn nữa giá cũng rẻ.',
            pre: '这房子的家具都很新，', blank: '并且', post: '价格也便宜，真的很值得考虑。', options: ['并且', '也许', '无法'], answer: 0,
            explanation: '并且……也 — tiến thêm một bước; ôn lại 值得 (Bài 6).' },
          { context: 'Hoàn thành câu: hy vọng kịp thời phát hiện vấn đề, đồng thời tìm ra chính xác cách giải quyết.',
            pre: '希望能及时发现问题，', blank: '并且', post: '准确地找到解决问题的方法。', options: ['并且', '否则', '然而'], answer: 0,
            explanation: '并且 nối hai động từ song song; ôn lại 准确 (Bài 11).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这种植物开的花比普通的花大很多，并且特别漂亮。', isCorrect: true,
            explanation: 'Câu đúng: 并且 nối hai tính chất (大 và 漂亮) — ví dụ SGK (2).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '并且他做事很认真，有丰富的经验。', isCorrect: false, correctVersion: '他做事很认真，并且有丰富的经验。',
            explanation: '并且 phải đứng GIỮA hai thành phần/vế được nối, không đứng đầu câu.' },
          { type: 'sort', context: 'Sắp xếp câu: hôm nay mưa to hơn nữa gió cũng rất lớn, nên chúng tôi đành ở nhà.',
            words: ['今天', '雨', '很', '大', '，', '并且', '风', '也', '很', '大', '，', '所以', '我们', '只好', '留', '在', '家里', '了', '。'], answer: '今天雨很大，并且风也很大，所以我们只好留在家里了。',
            explanation: '并且 — bài luyện tập SGK (1); ôn lại 只好 (Bài 11).' },
          { type: 'sort', context: 'Sắp xếp câu: nhiều người chọn đi tàu điện ngầm đi làm, vì không những tiết kiệm thời gian, hơn nữa còn rất thân thiện với môi trường.',
            words: ['很多', '人', '都', '选择', '坐', '地铁', '上下班', '，', '因为', '不但', '节约', '时间', '，', '并且', '很', '环保', '。'], answer: '很多人都选择坐地铁上下班，因为不但节约时间，并且很环保。',
            explanation: '并且 — bài luyện tập SGK (2); 节约 từ mới.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 并且.',
            promptLang: 'vi', prompt: 'Chỉ cần bạn kiên trì nỗ lực, hơn nữa chú ý phương pháp, cuối cùng nhất định sẽ đạt được thành công.',
            answer: '只要你坚持努力，并且注意方法，最后就一定能获得成功。', answerPy: 'Zhǐyào nǐ jiānchí nǔlì, bìngqiě zhùyì fāngfǎ, zuìhòu jiù yídìng néng huòdé chénggōng.',
            explanation: '并且 — bài luyện tập SGK (3); ôn lại 只要……就 (Bài 8), 坚持 (Bài 9).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Thầy ấy giải thích rất chi tiết, hơn nữa còn dùng nhiều ví dụ, nên học sinh đều hiểu.',
            answer: '他解释得很详细，并且还用了很多例子，所以学生都听懂了。', answerPy: 'Tā jiěshì de hěn xiángxì, bìngqiě hái yòngle hěn duō lìzi, suǒyǐ xuésheng dōu tīngdǒng le.',
            explanation: '并且 kết hợp 解释/详细 (từ mới của bài).' },
        ] },
      { point: '「再……也……」',
        items: [
          { context: 'Hoàn thành câu: chuyện đã xảy ra rồi, bạn có hối hận thế nào cũng không thể thay đổi.',
            pre: '事情已经发生了，你', blank: '再', post: '后悔也无法改变，别伤心了。', options: ['再', '又', '还'], answer: 0,
            explanation: '再……也 — giả thiết nhượng bộ (dù có … thế nào); ôn lại phân biệt 再/又 (HSK2).' },
          { context: 'Hoàn thành câu: dùng nước muối giặt, mặc lâu đến đâu quần áo cũng không dễ phai màu.',
            pre: '用盐水来洗新衣服，这样穿得再久、洗的次数', blank: '再', post: '多，衣服也不容易掉颜色。', options: ['再', '更', '很'], answer: 0,
            explanation: '再 + tính từ (多)，也…… — dù nhiều đến đâu cũng….' },
          { context: 'Hoàn thành câu: bất kể người khác có không đồng ý thế nào, cũng nên nói ra.',
            pre: '不管别人', blank: '再', post: '怎么不同意、不支持，也应该说出来。', options: ['再', '才', '就'], answer: 0,
            explanation: '不管……再怎么……也 — kết hợp 不管 (Bài 3).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '如果一个人不积极、不努力，条件再好也不会成功。', isCorrect: true,
            explanation: 'Câu đúng: 再好也不会 — bài luyện tập SGK (1); ôn lại 条件 (Bài 10).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你再后悔无法改变，别伤心了。', isCorrect: false, correctVersion: '你再后悔也无法改变，别伤心了。',
            explanation: 'Cấu trúc nhượng bộ 再……也…… bắt buộc có 也 ở vế sau; thiếu 也 câu mất nghĩa "dù … cũng".' },
          { type: 'sort', context: 'Sắp xếp câu: các bạn chỉ cần bình thường học nghiêm túc, đề thi khó đến đâu cũng không cần sợ.',
            words: ['同学们', '只要', '平时', '认真', '学习', '，', '考试', '的', '题', '再', '难', '也', '不用', '怕', '。'], answer: '同学们只要平时认真学习，考试的题再难也不用怕。',
            explanation: '再……也 — bài luyện tập SGK (2); ôn lại 只要 (Bài 8).' },
          { type: 'sort', context: 'Sắp xếp câu: có những chuyện qua rồi thì qua rồi, đừng hối hận, hối hận thế nào cũng không có tác dụng.',
            words: ['有些', '事情', '过去', '了', '就', '过去', '了', '，', '不要', '后悔', '，', '再', '后悔', '也', '没有', '用', '。'], answer: '有些事情过去了就过去了，不要后悔，再后悔也没有用。',
            explanation: '再……也 — bài luyện tập SGK (3).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 再……也……',
            promptLang: 'vi', prompt: 'Phương pháp không đúng thì tốn nhiều thời gian đến đâu cũng không hoàn thành được nhiệm vụ.',
            answer: '方法不对，花再多的时间也完成不了任务。', answerPy: 'Fāngfǎ bú duì, huā zài duō de shíjiān yě wánchéng bu liǎo rènwu.',
            explanation: '再多……也 kết hợp 任务 (từ mới) + bổ ngữ khả năng 完成不了.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Dù người khác có giải thích chi tiết đến đâu, bạn cũng phải tự mình cân nhắc kỹ.',
            answer: '别人解释得再详细，你也得自己仔细考虑。', answerPy: 'Biérén jiěshì de zài xiángxì, nǐ yě děi zìjǐ zǐxì kǎolǜ.',
            explanation: '再……也 kết hợp 解释/详细/仔细 (từ mới của bài).' },
        ] },
      { point: '「对于」so sánh với 「关于」',
        items: [
          { context: 'Hoàn thành câu: đối với việc này, quan điểm của tôi khác với mọi người.',
            pre: '', blank: '对于', post: '这件事，我跟大家的看法不同。', options: ['对于', '并且', '相反'], answer: 0,
            explanation: '对于 nêu đối tượng; ôn lại 看法 (Bài 11).' },
          { context: 'Hoàn thành câu: thầy cho rằng đối với giáo viên mà nói, điều gì khó làm nhất?',
            pre: '那您认为', blank: '对于', post: '老师来说，什么是最难做到的？', options: ['对于', '关于', '由于'], answer: 0,
            explanation: '对于……来说 — 关于 không dùng với 来说.' },
          { context: 'Hoàn thành câu: hôm qua trên báo thấy một bài về ngôi sao này, mới biết cô ấy còn là sinh viên.',
            pre: '昨天在报纸上看到一篇', blank: '关于', post: '这位明星的新闻，才知道她竟然还只是一位在校大学生。', options: ['关于', '对于', '至于'], answer: 0,
            explanation: '关于 nêu phạm vi/chủ đề của bài báo — 对于 không dùng được (bài 做一做 SGK 5); ôn lại 竟然 (Bài 6).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他对于每个需要帮助的人都会热情、耐心地提供帮助。', isCorrect: true,
            explanation: 'Câu đúng: 对于 có thể đứng SAU chủ ngữ (他对于……).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他关于每个需要帮助的人都会热情地提供帮助。', isCorrect: false, correctVersion: '他对于每个需要帮助的人都会热情地提供帮助。',
            explanation: '关于 chỉ đứng TRƯỚC chủ ngữ và nêu phạm vi; đối tượng chịu tác động sau chủ ngữ phải dùng 对于.' },
          { type: 'sort', context: 'Sắp xếp câu: về tình hình phương diện này, mọi người tốt nhất lên mạng tra thử.',
            words: ['关于', '这', '方面', '的', '情况', '，', '大家', '最好', '上网', '去', '查一查', '。'], answer: '关于这方面的情况，大家最好上网去查一查。',
            explanation: '关于 — bài 做一做 SGK (2) chỉ dùng 关于.' },
          { type: 'sort', context: 'Sắp xếp câu: hiện nay mọi người đối với môi trường tự nhiên ngày càng chú ý bảo vệ.',
            words: ['现在', '人们', '对于', '自然', '环境', '越来越', '注意', '保护', '了', '。'], answer: '现在人们对于自然环境越来越注意保护了。',
            explanation: '对于 sau chủ ngữ — bài 做一做 SGK (4); 保护 từ mới.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 对于.',
            promptLang: 'vi', prompt: 'Đối với những người mới học tiếng Trung, bài đọc này hơi khó.',
            answer: '对于刚学汉语的人来说，这个阅读题有点儿难。', answerPy: 'Duìyú gāng xué Hànyǔ de rén lái shuō, zhège yuèdú tí yǒudiǎnr nán.',
            explanation: '对于……来说 — bài luyện tập SGK (3); ôn lại 阅读 (Bài 11).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Về việc thế nào là hạnh phúc, mỗi người đều có quan điểm khác nhau của mình.',
            answer: '关于什么是幸福，每个人都有自己不同的看法。', answerPy: 'Guānyú shénme shì xìngfú, měi ge rén dōu yǒu zìjǐ bùtóng de kànfǎ.',
            explanation: '关于 nêu phạm vi chủ đề; ôn lại chủ đề 幸福 (Bài 10).' },
        ] },
      { point: '「名量词重叠」— Lặp lại danh từ/lượng từ',
        items: [
          { context: 'Hoàn thành câu: ai cũng biết sử dụng ngôn ngữ, nhưng nói sao cho hay lại là một nghệ thuật.',
            pre: '', blank: '人人', post: '都会使用语言，但是怎么用语言把话说好却是一门艺术。', options: ['人人', '人们', '一个人'], answer: 0,
            explanation: '人人 = mỗi người, làm chủ ngữ, thường đi với 都; ôn lại 却 (Bài 2).' },
          { context: 'Hoàn thành câu: ông Bạch ngày nào cũng đến quán cà phê đó ngồi một lát.',
            pre: '白先生', blank: '天天', post: '都去那家咖啡馆坐一会儿。', options: ['天天', '一天', '今天'], answer: 0,
            explanation: '天天 = mỗi ngày, làm trạng ngữ.' },
          { context: 'Hoàn thành câu: mỗi việc nhỏ đều nên được xem là một cơ hội học tập.',
            pre: '', blank: '件件', post: '小事都应该被看成是一次学习的机会。', options: ['件件', '一件', '几件'], answer: 0,
            explanation: '件件 = mỗi việc, làm định ngữ của chủ ngữ; ôn lại câu chữ 被.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '年年都有很多公司来学校招人，这为找工作的毕业生提供了很多机会。', isCorrect: true,
            explanation: 'Câu đúng: 年年 làm trạng ngữ — bài luyện tập SGK (3).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我喜欢本本书。', isCorrect: false, correctVersion: '我每本书都喜欢。',
            explanation: 'Danh/lượng từ lặp lại KHÔNG được làm tân ngữ hoặc định ngữ của tân ngữ; phải dùng 每……都 hoặc đưa lên làm chủ ngữ.' },
          { type: 'sort', context: 'Sắp xếp câu: mỗi người chỉ cần kiên trì đọc sách, đều có thể ngày càng xuất sắc.',
            words: ['人人', '只要', '坚持', '阅读', '，', '就', '都', '可以', '变得', '越来越', '优秀', '。'], answer: '人人只要坚持阅读，就都可以变得越来越优秀。',
            explanation: '人人 — bài luyện tập SGK (1); ôn lại 只要……就 (Bài 8), 优秀 (Bài 10).' },
          { type: 'sort', context: 'Sắp xếp câu: ngôn ngữ của nhà văn này rất hài hước, quyển nào cũng rất đáng đọc.',
            words: ['这个', '作家', '的', '语言', '很', '幽默', '，', '本本', '都', '很', '值得', '看', '。'], answer: '这个作家的语言很幽默，本本都很值得看。',
            explanation: '本本 — bài luyện tập SGK (2); ôn lại 值得 (Bài 6), 幽默 (Bài 8).' },
          { type: 'translate', context: 'Dịch câu sau, dùng danh từ lặp lại.',
            promptLang: 'vi', prompt: 'Ngày nào anh ấy cũng dành nửa tiếng đọc sách, vì vậy kiến thức rất phong phú.',
            answer: '他天天都花半个小时阅读，因此知识很丰富。', answerPy: 'Tā tiāntiān dōu huā bàn ge xiǎoshí yuèdú, yīncǐ zhīshi hěn fēngfù.',
            explanation: '天天 + 因此 (Bài 8); ôn lại bài đọc Bài 11.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Ai cũng có khuyết điểm, quan trọng là có dám thừa nhận hay không.',
            answer: '人人都有缺点，关键是敢不敢承认。', answerPy: 'Rénrén dōu yǒu quēdiǎn, guānjiàn shì gǎn bu gǎn chéngrèn.',
            explanation: '人人 + 关键 (Bài 10) + 缺点 (Bài 9).' },
        ] },
      { point: '「相反」',
        items: [
          { context: 'Hoàn thành câu: dùng cách cũ không những không giải quyết được, ngược lại, sẽ khiến vấn đề phức tạp hơn.',
            pre: '如果还是使用以前的办法，不但不能解决任何问题，', blank: '相反', post: '，会使问题变得更复杂。', options: ['相反', '并且', '同时'], answer: 0,
            explanation: '相反 (liên từ) — chuyển ý/tăng tiến; ôn lại 使 (Bài 8).' },
          { context: 'Hoàn thành câu: kết quả điều tra hầu như hoàn toàn trái ngược với điều họ nghĩ.',
            pre: '调查结果和他们想的几乎完全', blank: '相反', post: '，他们不得不改变原来的计划。', options: ['相反', '相同', '一样'], answer: 0,
            explanation: '相反 (tính từ) làm vị ngữ; ôn lại 几乎 (Bài 2), 不得不 (Bài 4).' },
          { context: 'Hoàn thành câu: không ngờ sự việc lại phát triển theo hướng ngược lại.',
            pre: '我本来以为任务能顺利完成，没想到事情正好向', blank: '相反的', post: '方向发展。', options: ['相反的', '相反', '相同的'], answer: 0,
            explanation: '相反 bổ nghĩa danh từ phải có 的: 相反的方向; ôn lại 本来 (Bài 3), 以为 (Bài 4).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '一个正确的选择，往往是成功的开始，相反，一个错误的选择可能让你失去很多机会。', isCorrect: true,
            explanation: 'Câu đúng: 相反 nối vế đối lập — bài luyện tập SGK (1); ôn lại 往往 (Bài 8).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '事情向相反方向发展了。', isCorrect: false, correctVersion: '事情向相反的方向发展了。',
            explanation: 'Khi 相反 bổ nghĩa cho danh từ, bắt buộc phải có 的 (相反的方向).' },
          { type: 'sort', context: 'Sắp xếp câu: chị gái rất trầm tính, ít nói; ngược lại, em gái thì hoạt bát, cả ngày nói không ngừng.',
            words: ['姐姐', '非常', '安静', '，', '很少', '说话', '，', '相反', '，', '妹妹', '很', '活泼', '，', '整天', '说', '个', '不停', '。'], answer: '姐姐非常安静，很少说话，相反，妹妹很活泼，整天说个不停。',
            explanation: '相反 — bài luyện tập SGK (2); ôn lại 活泼 (Bài 8).' },
          { type: 'sort', context: 'Sắp xếp câu: người già luôn thích hồi tưởng quá khứ của mình, ngược lại, người trẻ thì thích nghĩ về tương lai.',
            words: ['老年人', '总是', '喜欢', '回忆', '自己', '的', '过去', '，', '相反', '，', '年轻人', '更', '喜欢', '想', '将来', '。'], answer: '老年人总是喜欢回忆自己的过去，相反，年轻人更喜欢想将来。',
            explanation: '相反 — bài luyện tập SGK (3); ôn lại 将来 (Bài 10).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 相反.',
            promptLang: 'vi', prompt: 'Nói thẳng không khiến anh ấy hiểu ra, ngược lại, còn gây ra hiểu lầm.',
            answer: '直接说并没有让他明白，相反，还引起了误会。', answerPy: 'Zhíjiē shuō bìng méiyǒu ràng tā míngbai, xiāngfǎn, hái yǐnqǐle wùhuì.',
            explanation: '相反 kết hợp 直接/引起/误会 (từ mới), 并 (Bài 4).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Ý kiến của hai người họ hoàn toàn trái ngược, nên phải bàn bạc kỹ hơn.',
            answer: '他们俩的意见完全相反，所以得再仔细商量商量。', answerPy: 'Tāmen liǎ de yìjiàn wánquán xiāngfǎn, suǒyǐ děi zài zǐxì shāngliang shāngliang.',
            explanation: '相反 (tính từ) + 意见/仔细/商量 (từ mới của bài).' },
        ] },
    ],
    '/lessons/hsk4-bai-13.html': [
      { point: '「大概」so sánh với 「也许」',
        items: [
          { context: 'Hoàn thành câu: ông 8 tuổi đã lên sân khấu biểu diễn, đến nay đại khái đã hát hơn 60 năm.',
            pre: '他8岁就开始上台演出，到现在', blank: '大概', post: '唱了60多年了。', options: ['大概', '也许', '偶尔'], answer: 0,
            explanation: '大概 + số lượng — ước lượng; 也许 KHÔNG dùng với số lượng.' },
          { context: 'Hoàn thành câu: kế hoạch này tôi nghĩ hiệu trưởng có lẽ sẽ đồng ý.',
            pre: '你的这个计划，我想校长', blank: '大概', post: '会同意。', options: ['大概', '十分', '稍微'], answer: 0,
            explanation: '大概 suy đoán với khả năng cao; ôn lại 校长.' },
          { context: 'Hoàn thành câu: tôi vốn muốn học luật, nhưng sau phát hiện hứng thú với báo chí hơn, có lẽ sau này sẽ thành phóng viên.',
            pre: '我原来想学习法律，不过后来我发现自己对新闻更感兴趣，', blank: '也许', post: '以后我会成为一名记者。', options: ['也许', '大概', '大约'], answer: 0,
            explanation: '也许 diễn tả dự định tương lai chưa chắc — 大概 không có cách dùng này; ôn lại 原来 (Bài 4), 不过 (Bài 10).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '大概有三分之二的人反对这样做。', isCorrect: true,
            explanation: 'Câu đúng: 大概 ước lượng số lượng (三分之二); ôn lại phân số 分之 (Bài 6).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '您最近在拍哪部电影？能谈谈电影的也许内容吗？', isCorrect: false, correctVersion: '您最近在拍哪部电影？能谈谈电影的大概内容吗？',
            explanation: '大概 làm được tính từ (大概的内容 = nội dung đại khái); 也许 chỉ là phó từ, không bổ nghĩa danh từ — bài 做一做 SGK (5).' },
          { type: 'sort', context: 'Sắp xếp câu: bác tài, tôi đi ga tàu, khoảng bao lâu thì đến? — Bây giờ không tắc, ước chừng hai mươi phút là đến.',
            words: ['师傅', '，', '我', '去', '火车站', '，', '大概', '要', '多长', '时间', '？', '现在', '不', '堵车', '，', '估计', '二十', '分钟', '就', '能', '到', '。'], answer: '师傅，我去火车站，大概要多长时间？现在不堵车，估计二十分钟就能到。',
            explanation: '大概 — bài luyện tập SGK (1); ôn lại 估计 (Bài 7).' },
          { type: 'sort', context: 'Sắp xếp câu: ông Trương luôn đúng giờ, họp chưa bao giờ đến muộn. Hôm nay đến giờ vẫn chưa đến, có lẽ có việc gì, bạn gọi hỏi ông ấy đi.',
            words: ['老张', '一直', '很', '准时', '，', '今天', '到', '现在', '还', '没', '来', '，', '大概', '是', '有', '什么', '事情', '，', '你', '打', '个', '电话', '问问', '他', '吧', '。'], answer: '老张一直很准时，今天到现在还没来，大概是有什么事情，你打个电话问问他吧。',
            explanation: '大概 — phán đoán khẳng định (SGK 比一比); ôn lại 准时 (Bài 4).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 大概.',
            promptLang: 'vi', prompt: 'Đọc sách nên có chọn lọc, có sách chỉ cần đọc nhanh, hiểu ý đại khái là được, có sách lại cần đọc kỹ.',
            answer: '读书应该有选择，有些书只要快速阅读、了解大概的意思就行，有些书却需要仔细阅读。', answerPy: 'Dú shū yīnggāi yǒu xuǎnzé, yǒuxiē shū zhǐyào kuàisù yuèdú, liǎojiě dàgài de yìsi jiù xíng, yǒuxiē shū què xūyào zǐxì yuèdú.',
            explanation: '大概的 (tính từ) — bài luyện tập SGK (3); ôn lại 阅读 (Bài 11), 仔细 (Bài 12), 却 (Bài 2).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Con nhà nghèo sớm tự lập, có lẽ họ không có nhiều tiền, nhưng có thể trải nghiệm nhiều hơn con nhà giàu.',
            answer: '穷人的孩子早当家，他们也许没有很多钱，却可能比富人家的孩子经历得更多。', answerPy: 'Qióng rén de háizi zǎo dāngjiā, tāmen yěxǔ méiyǒu hěn duō qián, què kěnéng bǐ fù rén jiā de háizi jīnglì de gèng duō.',
            explanation: '也许 (suy đoán nhẹ) — bài 做一做 SGK (2), 大概 không hợp; ôn lại 穷/富 (Bài 10), 经历 (Bài 9).' },
        ] },
      { point: '「偶尔」',
        items: [
          { context: 'Hoàn thành câu: tôi thường học hát theo TV, thỉnh thoảng hát vài câu với người Trung Quốc.',
            pre: '我常常跟着电视学唱京剧，', blank: '偶尔', post: '跟中国人一起唱上几句。', options: ['偶尔', '经常', '十分'], answer: 0,
            explanation: '偶尔 đối lập với 常常 — tần suất thấp.' },
          { context: 'Hoàn thành câu: 64% thường xuyên tăng ca, 28% thỉnh thoảng tăng ca.',
            pre: '有64%的人经常加班，28%', blank: '偶尔', post: '加班。', options: ['偶尔', '大概', '继续'], answer: 0,
            explanation: '偶尔 — thỉnh thoảng; ôn lại 加班 (Bài 5), 百分之 (Bài 6).' },
          { context: 'Hoàn thành câu: cỏ ba lá thường có ba lá, nhưng thỉnh thoảng cũng xuất hiện loại bốn lá.',
            pre: '三叶草的叶子一般为三个，但', blank: '偶尔', post: '也会出现四个叶子的。', options: ['偶尔', '总是', '稍微'], answer: 0,
            explanation: '偶尔 — hiếm khi; ôn lại 叶子 (Bài 12).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我平时上班忙，很少有时间运动，但是周末偶尔会约朋友一块儿去打篮球。', isCorrect: true,
            explanation: 'Câu đúng: 平时……很少……偶尔 — bài luyện tập SGK (2).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他偶尔每天都去公园跑步。', isCorrect: false, correctVersion: '他偶尔去公园跑步。',
            explanation: '偶尔 (tần suất thấp) mâu thuẫn với 每天都 (tần suất cao) — không thể dùng cùng nhau.' },
          { type: 'sort', context: 'Sắp xếp câu: để giảm cân, tôi hầu như tối nào cũng kiên trì chạy bộ, thỉnh thoảng mới nghỉ một buổi.',
            words: ['为了', '减肥', '，', '我', '几乎', '每天', '晚上', '都', '坚持', '跑步', '，', '偶尔', '才', '休息', '一次', '。'], answer: '为了减肥，我几乎每天晚上都坚持跑步，偶尔才休息一次。',
            explanation: '偶尔 — bài luyện tập SGK (1); ôn lại 几乎 (Bài 2), 坚持 (Bài 9).' },
          { type: 'sort', context: 'Sắp xếp câu: cô ấy và chồng rất ít ăn ở nhà, thỉnh thoảng mới tự nấu một bữa.',
            words: ['她', '和', '丈夫', '很少', '在', '家', '吃饭', '，', '偶尔', '才', '自己', '做', '一顿', '。'], answer: '她和丈夫很少在家吃饭，偶尔才自己做一顿。',
            explanation: '偶尔 — bài luyện tập SGK (3).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 偶尔.',
            promptLang: 'vi', prompt: 'Ông tôi thường uống trà, thỉnh thoảng mới uống cà phê.',
            answer: '我爷爷经常喝茶，偶尔才喝咖啡。', answerPy: 'Wǒ yéye jīngcháng hē chá, ǒu\'ěr cái hē kāfēi.',
            explanation: '经常……偶尔才…… — đối lập tần suất.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Anh ấy hầu như không bao giờ đi muộn, thỉnh thoảng đến muộn thì chắc chắn là do tắc đường.',
            answer: '他几乎从来不迟到，偶尔来晚了，肯定是由于堵车。', answerPy: 'Tā jīhū cónglái bù chídào, ǒu\'ěr lái wǎn le, kěndìng shì yóuyú dǔchē.',
            explanation: '偶尔 kết hợp 几乎 (Bài 2), 从来 (Bài 1), 肯定 (Bài 5), 由于 (Bài 10).' },
        ] },
      { point: '「由」',
        items: [
          { context: 'Hoàn thành câu: theo quy định, việc này nên do bác sĩ Vương phụ trách.',
            pre: '按照规定，这件事情应该', blank: '由', post: '王大夫负责。', options: ['由', '由于', '对于'], answer: 0,
            explanation: '由 + người + 负责 — do ai phụ trách; ôn lại 按照 (Bài 4), 规定 (Bài 12).' },
          { context: 'Hoàn thành câu: từ "幽默" sớm nhất là do ông Lâm Ngữ Đường dịch sang.',
            pre: '"幽默"这个词最早是', blank: '由', post: '林语堂先生翻译过来的。', options: ['由', '让', '被'], answer: 0,
            explanation: '由……翻译 — dẫn ra người thực hiện; ôn lại 翻译 (Bài 10).' },
          { context: 'Hoàn thành câu: hoạt động lần này tiếp tục do bạn phụ trách.',
            pre: '这次活动继续', blank: '由', post: '你负责，相信也一定会很成功。', options: ['由', '给', '为'], answer: 0,
            explanation: '由你负责 — do bạn phụ trách; 继续 từ mới.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这篇文章是介绍京剧的，由两个部分组成。', isCorrect: true,
            explanation: 'Câu đúng: 由……组成 — do … tạo thành; ôn lại 文章 (Bài 11), 部分 từ mới.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '由于天气不好，这次活动由推迟了。', isCorrect: false, correctVersion: '由于天气不好，这次活动推迟了。',
            explanation: '由 phải đi kèm NGƯỜI thực hiện (由 + ai + động từ); không có đối tượng thì không dùng 由. Phân biệt 由 (do ai) với 由于 (vì — Bài 10).' },
          { type: 'sort', context: 'Sắp xếp câu: việc này chẳng phải giám đốc Mã chuyên phụ trách sao? — Anh ấy đã rời công ty, hiện do giám đốc Vương phụ trách.',
            words: ['这件', '事', '不是', '马经理', '专门', '负责', '吗', '？', '他', '已经', '离开', '公司', '了', '，', '现在', '由', '王经理', '负责', '。'], answer: '这件事不是马经理专门负责吗？他已经离开公司了，现在由王经理负责。',
            explanation: '由 — bài luyện tập SGK (1); ôn lại 专门 (Bài 9).' },
          { type: 'sort', context: 'Sắp xếp câu: hoạt động dã ngoại mùa thu lần trước Tiểu Hạ tổ chức không tệ, mọi người chơi rất vui, lần này vẫn do cô ấy phụ trách đi.',
            words: ['上次', '的', '秋游', '活动', '小夏', '组织', '得', '不错', '，', '大家', '都', '玩儿', '得', '很', '高兴', '，', '这次', '还', '由', '她', '负责', '吧', '。'], answer: '上次的秋游活动小夏组织得不错，大家都玩儿得很高兴，这次还由她负责吧。',
            explanation: '由 — bài luyện tập SGK (3).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 由.',
            promptLang: 'vi', prompt: 'Bài văn này gồm hai phần: phần đầu do tôi viết, phần hai do bạn tôi viết.',
            answer: '这篇文章由两部分组成：前一部分由我写，第二部分由我朋友写。', answerPy: 'Zhè piān wénzhāng yóu liǎng bùfen zǔchéng: qián yí bùfen yóu wǒ xiě, dì-èr bùfen yóu wǒ péngyou xiě.',
            explanation: '由 — bài luyện tập SGK (2); 部分 từ mới, 文章 (Bài 11).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Việc chuẩn bị lễ hội văn hóa do thầy Lý phụ trách, các vấn đề cụ thể do học sinh thảo luận và quyết định.',
            answer: '文化节的准备工作由李老师负责，具体问题由学生讨论决定。', answerPy: 'Wénhuà jié de zhǔnbèi gōngzuò yóu Lǐ lǎoshī fùzé, jùtǐ wèntí yóu xuésheng tǎolùn juédìng.',
            explanation: '由……负责 / 由……决定 — kết hợp 讨论 (từ mới).' },
        ] },
      { point: '「进行」',
        items: [
          { context: 'Hoàn thành câu: bây giờ nghỉ 15 phút, 10 giờ rưỡi hội nghị tiếp tục.',
            pre: '现在休息十五分钟，十点半会议继续', blank: '进行', post: '。', options: ['进行', '举行', '进步'], answer: 0,
            explanation: '继续进行 — tiếp tục diễn ra; ôn lại 会议.' },
          { context: 'Hoàn thành câu: có người đã tiến hành khảo sát trên Internet.',
            pre: '有人在互联网上专门', blank: '进行', post: '过调查。', options: ['进行', '做到', '达到'], answer: 0,
            explanation: '进行调查 — 进行 + động từ hai âm tiết chính thức; ôn lại 专门 (Bài 9).' },
          { context: 'Hoàn thành câu: họ chủ động giao lưu với người khác, hơn nữa nhờ người khác sửa lỗi.',
            pre: '他们会主动与他人', blank: '进行', post: '交流，并且请别人帮助他们改错。', options: ['进行', '继续', '申请'], answer: 0,
            explanation: '进行交流; ôn lại 并且 (Bài 12), 主动 (Bài 8).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们对这个问题进行了详细的讨论。', isCorrect: true,
            explanation: 'Câu đúng: 进行了……讨论 — 讨论 là động từ hai âm tiết chính thức; ôn lại 详细 (Bài 12).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们中午一起进行吃饭吧。', isCorrect: false, correctVersion: '我们中午一起吃饭吧。',
            explanation: '进行 KHÔNG dùng với hành động sinh hoạt hàng ngày/tạm thời (吃饭, 睡觉…), chỉ dùng với hoạt động chính thức (调查/讨论/研究).' },
          { type: 'sort', context: 'Sắp xếp câu: đã 6 giờ rồi, sao hội nghị vẫn chưa kết thúc? — Vẫn đang tiến hành, có lẽ còn nửa tiếng nữa.',
            words: ['都', '六点', '了', '，', '会议', '怎么', '还', '没', '结束', '？', '还', '在', '进行', '，', '大概', '还', '要', '半个', '小时', '。'], answer: '都六点了，会议怎么还没结束？还在进行，大概还要半个小时。',
            explanation: '进行 — bài luyện tập SGK (1); 大概 ngữ pháp của bài.' },
          { type: 'sort', context: 'Sắp xếp câu: chúng tôi đã tiến hành khảo sát với 1000 sinh viên, kết quả phát hiện hơn 80% hy vọng được du học.',
            words: ['我们', '对', '1000', '名', '大学生', '进行', '了', '调查', '，', '结果', '发现', '超过', '80%', '的', '人', '希望', '能', '出国', '留学', '。'], answer: '我们对1000名大学生进行了调查，结果发现超过80%的人希望能出国留学。',
            explanation: '进行 — bài luyện tập SGK (3); ôn lại 结果 (Bài 9), 超过 (Bài 2).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 进行.',
            promptLang: 'vi', prompt: 'Nghe nói bạn định xin đi du học, chuẩn bị đến đâu rồi? — Đang tiến hành, tài liệu sắp chuẩn bị xong.',
            answer: '听说你要申请去国外留学，准备得怎么样了？——正在进行，材料差不多准备好了。', answerPy: 'Tīngshuō nǐ yào shēnqǐng qù guówài liúxué, zhǔnbèi de zěnmeyàng le? — Zhèngzài jìnxíng, cáiliào chàbuduō zhǔnbèi hǎo le.',
            explanation: '进行 — bài luyện tập SGK (2); 申请 từ mới, 材料 (Bài 4).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Trước khi quyết định, chúng ta nên tiến hành thảo luận kỹ lưỡng, nếu không dễ mắc sai lầm.',
            answer: '做决定之前，我们应该进行仔细的讨论，否则容易犯错误。', answerPy: 'Zuò juédìng zhīqián, wǒmen yīnggāi jìnxíng zǐxì de tǎolùn, fǒuzé róngyì fàn cuòwù.',
            explanation: '进行讨论 kết hợp 之前 (Bài 11), 仔细 (Bài 12), 否则 (Bài 11), 错误 từ mới.' },
        ] },
      { point: '「随着」',
        items: [
          { context: 'Hoàn thành câu: cùng với sự phát triển của xã hội, Kinh kịch cũng đang thay đổi.',
            pre: '', blank: '随着', post: '社会的发展，京剧也在改变，以适应不同年龄观众的需要。', options: ['随着', '由于', '关于'], answer: 0,
            explanation: '随着……的发展 — điều kiện dẫn đến thay đổi; ôn lại 发展 (Bài 10).' },
          { context: 'Hoàn thành câu: cùng với tuổi tác tăng lên, họ sẽ phát hiện cuộc sống luôn thay đổi.',
            pre: '', blank: '随着', post: '年龄的增长，他们会发现生活总是在不停地变化。', options: ['随着', '对于', '通过'], answer: 0,
            explanation: '随着……的增长; ôn lại 年龄 (Bài 5).' },
          { context: 'Hoàn thành câu: cùng với nhận thức về trà ngày càng sâu, người ta dần coi nó là thức uống giải khát.',
            pre: '后来，', blank: '随着', post: '人们对茶的认识的加深，慢慢开始把它当作解渴的饮料。', options: ['随着', '除了', '为了'], answer: 0,
            explanation: '随着……的加深 — theo đà nhận thức sâu hơn; ôn lại 把……当作.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '随着互联网的发展，越来越多的人喜欢在网上写日记。', isCorrect: true,
            explanation: 'Câu đúng: 随着……的发展，越来越…… — bài luyện tập SGK (1); 互联网 từ mới.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '随着社会发展，京剧也在改变。', isCorrect: false, correctVersion: '随着社会的发展，京剧也在改变。',
            explanation: 'Sau 随着 cần cụm danh từ hóa có từ bổ nghĩa (社会的发展 / 年龄的增长), thường thêm 的 — không dùng cụm chủ-vị trần.' },
          { type: 'sort', context: 'Sắp xếp câu: cùng với sự phát triển của xã hội, tiêu chuẩn của cái đẹp luôn thay đổi; xưa lấy béo làm đẹp, nay lấy gầy làm đẹp.',
            words: ['随着', '社会', '的', '发展', '，', '美', '的', '标准', '一直', '在', '变', '，', '过去', '人们', '以', '胖', '为', '美', '，', '现在', '的', '人', '以', '瘦', '为', '美', '。'], answer: '随着社会的发展，美的标准一直在变，过去人们以胖为美，现在的人以瘦为美。',
            explanation: '随着 — bài luyện tập SGK (2); ôn lại 标准 (Bài 10).' },
          { type: 'sort', context: 'Sắp xếp câu: hồi nhỏ chúng ta thường có nhiều lý tưởng lãng mạn, nhưng cùng với tuổi tác tăng lên, những giấc mơ ấy dần rời xa chúng ta.',
            words: ['小时候', '我们', '往往', '会', '有', '许多', '浪漫', '的', '理想', '，', '但是', '随着', '年龄', '的', '增长', '，', '那些', '梦', '慢慢地', '离', '我们', '远去', '了', '。'], answer: '小时候我们往往会有许多浪漫的理想，但是随着年龄的增长，那些梦慢慢地离我们远去了。',
            explanation: '随着 — bài luyện tập SGK (3); ôn lại 往往 (Bài 8), 理想 (Bài 9), 浪漫 (Bài 7).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 随着.',
            promptLang: 'vi', prompt: 'Cùng với sự phát triển của kinh tế, cuộc sống của người dân ngày càng tốt hơn.',
            answer: '随着经济的发展，人们的生活越来越好了。', answerPy: 'Suízhe jīngjì de fāzhǎn, rénmen de shēnghuó yuè lái yuè hǎo le.',
            explanation: '随着……的发展 kết hợp 经济 (Bài 10) + 越来越.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Cùng với thời gian trôi qua, thói quen uống trà đã trở thành một phần không thể thiếu trong cuộc sống của người Trung Quốc.',
            answer: '随着时间的过去，喝茶的习惯已成为中国人生活中不可缺少的一部分。', answerPy: 'Suízhe shíjiān de guòqù, hē chá de xíguàn yǐ chéngwéi Zhōngguó rén shēnghuó zhōng bù kě quēshǎo de yí bùfen.',
            explanation: '随着 kết hợp 成为/缺少 (Bài 8) + 部分 (từ mới).' },
        ] },
    ],
    '/lessons/hsk4-bai-14.html': [
      { point: '「够」',
        items: [
          { context: 'Hoàn thành câu: hơn nữa, vali đã đủ nặng rồi!',
            pre: '再说，箱子已经', blank: '够', post: '重的了！', options: ['够', '很', '太'], answer: 0,
            explanation: '够 + Tính từ + 的了 — đã đạt mức; ôn lại 再说 (Bài 11).' },
          { context: 'Hoàn thành câu: thường ngủ đủ tám tiếng là được.',
            pre: '一般睡', blank: '够', post: '八小时就可以了。', options: ['够', '完', '到'], answer: 0,
            explanation: 'Động từ + 够 + số lượng — đủ về số lượng.' },
          { context: 'Hoàn thành câu: không chỉ vì họ chưa đủ dũng cảm, mà còn vì họ yêu cầu bản thân quá cao.',
            pre: '这不仅是因为他们', blank: '不够', post: '勇敢，还因为他们对自己要求太高。', options: ['不够', '不太', '没有'], answer: 0,
            explanation: '不够 + Tính từ — chưa đủ; ôn lại 不仅……还 (Bài 6), 勇敢 (Bài 9).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '一共两百三十九块七。——我带的现金不够，还是刷卡吧。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1): 现金不够 (đủ về số lượng); ôn lại 现金/刷卡 (Bài 5).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这些菜够多了的，咱们俩肯定吃不了。', isCorrect: false, correctVersion: '这些菜够多的了，咱们俩肯定吃不了。',
            explanation: 'Trật tự đúng: 够 + Tính từ + 的 + 了 (够多的了), không phải 够多了的. Ôn lại bổ ngữ khả năng 吃不了 (Bài 5).' },
          { type: 'sort', context: 'Sắp xếp câu: bạn đến đủ đúng giờ đấy, vừa đúng 8 giờ. — Vậy thì tốt, tôi còn tưởng đến muộn.',
            words: ['你', '来', '得', '够', '准时', '的', '，', '正好', '8点', '。', '那', '就', '好', '，', '我', '还', '以为', '迟到', '了', '。'], answer: '你来得够准时的，正好8点。那就好，我还以为迟到了。',
            explanation: '够……的 — bài luyện tập SGK (2); ôn lại 准时 (Bài 4), 以为 (Bài 4).' },
          { type: 'sort', context: 'Sắp xếp câu: khách đến, nhất định phải để khách ăn đủ, ăn no.',
            words: ['客人', '来', '了', '，', '一定', '要', '让', '客人', '吃够', '、', '吃饱', '。'], answer: '客人来了，一定要让客人吃够、吃饱。',
            explanation: '吃够 — động từ + 够; ôn lại câu kiêm ngữ 让.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 够.',
            promptLang: 'vi', prompt: 'Chỗ tiền này không đủ mua vé máy bay, chúng ta vẫn nên đi tàu hỏa.',
            answer: '这些钱不够买飞机票，我们还是坐火车吧。', answerPy: 'Zhèxiē qián bú gòu mǎi fēijī piào, wǒmen háishi zuò huǒchē ba.',
            explanation: '不够 + động từ — không đủ để; ôn lại 还是……吧 (Bài 1).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Trời hôm nay đủ lạnh rồi, bạn mặc thêm cái áo dày một chút đi.',
            answer: '今天天气够冷的了，你多穿一件厚一点儿的衣服吧。', answerPy: 'Jīntiān tiānqì gòu lěng de le, nǐ duō chuān yí jiàn hòu yìdiǎnr de yīfu ba.',
            explanation: '够冷的了 + 厚 (Bài 13).' },
        ] },
      { point: '「以」',
        items: [
          { context: 'Hoàn thành câu: tôi nhất định hoàn thành với tốc độ nhanh nhất.',
            pre: '经理您放心，我一定', blank: '以', post: '最快的速度完成。', options: ['以', '用', '把'], answer: 0,
            explanation: '以 + cách thức + động từ — bằng, với; ôn lại 放心 (Bài 5).' },
          { context: 'Hoàn thành câu: chúng ta nên lấy những người dám nói thật làm gương.',
            pre: '我们应该以那些敢说真话的人', blank: '为', post: '镜子，这样才能及时发现自己的缺点。', options: ['为', '是', '做'], answer: 0,
            explanation: '以……为…… — lấy … làm …; ôn lại 敢 (Bài 9), 及时 (Bài 7), 缺点 (Bài 8).' },
          { context: 'Hoàn thành câu: người Trung Quốc thường mời bạn đi nhà hàng ăn cơm, để thể hiện sự tôn trọng với khách.',
            pre: '中国人往往会请重要的朋友去饭店吃饭，', blank: '以', post: '表示对客人的尊重和礼貌。', options: ['以', '于是', '因此'], answer: 0,
            explanation: '以 — liên từ mục đích (để, nhằm), đầu vế sau cùng chủ ngữ; ôn lại 往往 (Bài 8), 尊重 (Bài 11).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '汉语普通话以北京话为标准。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (2): 以……为标准 = lấy … làm chuẩn; ôn lại 普通话 (Bài 12), 标准 (Bài 10).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们去看电影，以他能放松一下。', isCorrect: false, correctVersion: '我们去看电影，以放松一下。',
            explanation: '以 (mục đích) yêu cầu hai vế CÙNG chủ ngữ — vế sau không được đổi chủ ngữ thành 他. Ôn lại 放松 (Bài 9).' },
          { type: 'sort', context: 'Sắp xếp câu: theo trình độ hiện tại của chúng ta, giải quyết vấn đề này vẫn còn hơi khó.',
            words: ['以', '我们', '现在', '的', '水平', '，', '解决', '这个', '问题', '还', '有点儿', '困难', '。'], answer: '以我们现在的水平，解决这个问题还有点儿困难。',
            explanation: '以 + căn cứ — bài luyện tập SGK (1); ôn lại 水平 (Bài 2), 解决 (Bài 3).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi thấy nên hạ giá vé công viên, để nhiều người hơn có thể vào chơi.',
            words: ['我', '觉得', '应该', '降低', '公园', '门票', '价格', '，', '以', '让', '更多', '的', '人', '能', '进去', '玩儿', '。'], answer: '我觉得应该降低公园门票价格，以让更多的人能进去玩儿。',
            explanation: '以 (mục đích) — bài luyện tập SGK (3); ôn lại 降低 (Bài 10), 价格 (Bài 5).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 以……为…….',
            promptLang: 'vi', prompt: 'Công ty chúng tôi lấy khách hàng làm trung tâm, lấy chất lượng làm tiêu chuẩn.',
            answer: '我们公司以顾客为中心，以质量为标准。', answerPy: 'Wǒmen gōngsī yǐ gùkè wéi zhōngxīn, yǐ zhìliàng wéi biāozhǔn.',
            explanation: '以 A 为 B; ôn lại 顾客/质量 (Bài 6), 标准 (Bài 10).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Nhiều người tắt đèn một tiếng để ủng hộ hoạt động "Giờ Trái đất", nhằm nhắc nhở mọi người tiết kiệm điện.',
            answer: '很多人关灯一小时支持"地球一小时"活动，以提醒人们节约用电。', answerPy: 'Hěn duō rén guān dēng yì xiǎoshí zhīchí "Dìqiú Yì Xiǎoshí" huódòng, yǐ tíxǐng rénmen jiéyuē yòng diàn.',
            explanation: '以 mục đích; ôn lại 支持 (Bài 11), 提醒 (Bài 4), 节约 (Bài 12).' },
        ] },
      { point: '「既然」',
        items: [
          { context: 'Hoàn thành câu: đã là tối mai công ty tắt đèn cúp điện, thì chúng ta chắc chắn không phải tăng ca.',
            pre: '', blank: '既然', post: '明天晚上公司会关灯停电，那么我们肯定不用加班了。', options: ['既然', '因为', '虽然'], answer: 0,
            explanation: '既然……那么…… — sự thật đã có → kết luận; ôn lại 肯定/加班 (Bài 5).' },
          { context: 'Hoàn thành câu: bạn đã không muốn chơi bóng, sao còn chơi?',
            pre: '你既然不愿意打球，为什么', blank: '还', post: '要打？', options: ['还', '才', '再'], answer: 0,
            explanation: '既然……，为什么还…… — phối hợp trong câu hỏi; ôn lại 愿意 (Bài 4).' },
          { context: 'Hoàn thành câu: đã vậy thì đành sắp xếp vào tuần sau.',
            pre: '既然这样，', blank: '就', post: '只好安排在下周了。', options: ['就', '却', '并'], answer: 0,
            explanation: '既然……就…… — 就 phối hợp ở vế sau; ôn lại 只好 (Bài 3), 安排 (Bài 6).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '既然这里的景色这么好，以后我们可以常来。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1); ôn lại 景色 (Bài 6).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '既然天气不好，但是我们不去爬山了。', isCorrect: false, correctVersion: '既然天气不好，我们就不去爬山了。',
            explanation: '既然 KHÔNG đi với 但是 (chuyển ý); vế sau phải là kết luận với 就/也/那么.' },
          { type: 'sort', context: 'Sắp xếp câu: tôi vừa xem, tổng cộng 20 người, có 15 người đồng ý kế hoạch này, đã đa số đồng ý thì chúng ta thông qua kế hoạch.',
            words: ['我', '刚才', '看', '了', '一下', '，', '一共', '二十', '个', '人', '，', '有', '十五', '个', '人', '同意', '这个', '计划', '，', '既然', '大部分', '人', '都', '同意', '，', '那', '我们', '就', '通过', '这个', '计划', '了', '。'], answer: '我刚才看了一下，一共二十个人，有十五个人同意这个计划，既然大部分人都同意，那我们就通过这个计划了。',
            explanation: '既然 — bài luyện tập SGK (2); ôn lại 通过 (Bài 9), 部分 (Bài 13).' },
          { type: 'sort', context: 'Sắp xếp câu: có những chuyện qua rồi là qua rồi, đã không thể quay lại, thì hãy để những chuyện đã qua trong tim, coi là một hồi ức.',
            words: ['有些', '事情', '过去', '了', '就是', '过去', '了', '，', '既然', '再', '也', '不能', '回头', '，', '那么', '就', '把', '那些', '过去', '的', '事情', '放在', '心里', '，', '当成', '一种', '回忆', '。'], answer: '有些事情过去了就是过去了，既然再也不能回头，那么就把那些过去的事情放在心里，当成一种回忆。',
            explanation: '既然……那么就…… — bài luyện tập SGK (3); ôn lại 再也不 (Bài 9), 回忆 (Bài 8).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 既然.',
            promptLang: 'vi', prompt: 'Đã biết bảo vệ môi trường quan trọng như vậy, chúng ta hãy bắt đầu từ những việc nhỏ quanh mình.',
            answer: '既然保护环境这么重要，我们就从身边的小事做起吧。', answerPy: 'Jìrán bǎohù huánjìng zhème zhòngyào, wǒmen jiù cóng shēnbiān de xiǎo shì zuòqǐ ba.',
            explanation: '既然……就……; ôn lại 保护 (Bài 12).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Đã không thích ngành báo chí, thì cân nhắc ngành khác đi, mẹ và bố đều không phản đối.',
            answer: '既然你不喜欢新闻专业，那就考虑考虑其他专业吧，我和你爸都不反对。', answerPy: 'Jìrán nǐ bù xǐhuan xīnwén zhuānyè, nà jiù kǎolǜ kǎolǜ qítā zhuānyè ba, wǒ hé nǐ bà dōu bù fǎnduì.',
            explanation: '既然……那就……; ôn lại 考虑 (Bài 3), 反对 (Bài 10), động từ lặp 考虑考虑.' },
        ] },
      { point: '「于是」so sánh với 「因此」',
        items: [
          { context: 'Hoàn thành câu: ngày em gái tôi sinh vừa đúng có trận tuyết lớn, thế là bố mẹ đặt tên em là Hạ Tuyết.',
            pre: '我妹妹出生那天，正好下了一场大雪，', blank: '于是', post: '我爸妈就给她取名叫夏雪。', options: ['于是', '因此', '既然'], answer: 0,
            explanation: '于是 — sự việc sau xảy ra tiếp theo sự việc trước; ôn lại 正好 (Bài 4).' },
          { context: 'Hoàn thành câu: anh ấy 3 tuổi đến đây, không bao giờ rời đi. Vì vậy, anh có tình cảm rất sâu với nơi này.',
            pre: '他三岁跟父母一起来到这儿，就再也没离开过这里。', blank: '因此', post: '，他对这个地方感情很深。', options: ['因此', '于是', '然而'], answer: 0,
            explanation: 'Vế sau là NHẬN ĐỊNH (感情很深), không phải sự việc xảy ra → chỉ dùng 因此 (Bài 8).' },
          { context: 'Hoàn thành câu: mọi người đều đồng ý nghỉ đông đi du lịch, thế là chúng tôi bắt đầu thảo luận đi đâu.',
            pre: '大家都同意寒假去旅行，', blank: '于是', post: '，我们开始讨论去哪里旅行的问题。', options: ['于是', '否则', '同时'], answer: 0,
            explanation: '于是 — hành động tiếp nối (bắt đầu thảo luận); ôn lại 讨论 (Bài 13), 否则 (Bài 11).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '那是1994年的冬天，那场雪下得特别大。大家都很激动，于是都跑到外面去玩儿雪了。', isCorrect: true,
            explanation: 'Câu đúng — bài 做一做 SGK (4): 于是 nối hành động xảy ra ngay sau; ôn lại 激动 (Bài 6).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '习惯是不容易改变的，于是，在孩子小的时候，父母要帮他们养成好的生活、学习习惯。', isCorrect: false, correctVersion: '习惯是不容易改变的，因此，在孩子小的时候，父母要帮他们养成好的生活、学习习惯。',
            explanation: 'Bài 做一做 SGK (2): vế sau là kết luận/lời khuyên (要……), không phải sự việc tiếp nối → dùng 因此, không dùng 于是. Ôn lại 养成 (Bài 7).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi hẹn bạn ở cửa trung tâm thương mại, tôi đến sớm một lát, thế là vào trong dạo một vòng.',
            words: ['我', '约', '了', '朋友', '在', '商场', '门口', '见面', '，', '我', '早', '到', '了', '一会儿', '，', '于是', '就', '进去', '逛', '了', '逛', '。'], answer: '我约了朋友在商场门口见面，我早到了一会儿，于是就进去逛了逛。',
            explanation: '于是 — bài luyện tập SGK (1); ôn lại 约 (Bài 4), 逛 (Bài 5).' },
          { type: 'sort', context: 'Sắp xếp câu: mấy năm gần đây giá máy tính xách tay giảm mạnh, thế là ngày càng nhiều sinh viên mua được máy tính.',
            words: ['最近', '几年', '，', '笔记本', '电脑', '的', '价格', '大大', '降低', '，', '于是', '越来越', '多', '的', '大学生', '买', '得', '起', '电脑', '了', '。'], answer: '最近几年，笔记本电脑的价格大大降低，于是越来越多的大学生买得起电脑了。',
            explanation: '于是 — bài luyện tập SGK (2); ôn lại 降低 (Bài 10), 买得起 (Bài 5).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 于是.',
            promptLang: 'vi', prompt: 'Học một ngôn ngữ không đơn giản, nhiều người lúc mới học thấy rất khó, thế là bỏ cuộc.',
            answer: '学习一种语言不是简单的事情，许多人在开始学的时候觉得很困难，于是就放弃了。', answerPy: 'Xuéxí yì zhǒng yǔyán bú shì jiǎndān de shìqing, xǔduō rén zài kāishǐ xué de shíhou juéde hěn kùnnan, yúshì jiù fàngqì le.',
            explanation: 'Bài luyện tập SGK (3); ôn lại 语言 (Bài 12), 放弃 (Bài 9).' },
          { type: 'translate', context: 'Dịch câu sau, phân biệt 于是 / 因此.',
            promptLang: 'vi', prompt: 'Cuộc sống thường không diễn ra theo kế hoạch của chúng ta. Vì vậy, chỉ có kế hoạch thôi chưa đủ, còn cần kịp thời thay đổi kế hoạch ban đầu.',
            answer: '生活往往不会按照我们的计划来进行。因此，光有计划还不行，还需要我们能及时地对原来的计划做出改变。', answerPy: 'Shēnghuó wǎngwǎng bú huì ànzhào wǒmen de jìhuà lái jìnxíng. Yīncǐ, guāng yǒu jìhuà hái bù xíng, hái xūyào wǒmen néng jíshí de duì yuánlái de jìhuà zuòchū gǎibiàn.',
            explanation: 'Bài 做一做 SGK (5): vế sau là nhận định → 因此; ôn lại 往往 (Bài 8), 进行 (Bài 13), 光 (Bài 5).' },
        ] },
      { point: '「什么的」',
        items: [
          { context: 'Hoàn thành câu: còn nước khoáng, nước trái cây các thứ nữa.',
            pre: '好，还有矿泉水、果汁', blank: '什么的', post: '。', options: ['什么的', '等等的', '之类'], answer: 0,
            explanation: '什么的 sau danh sách liệt kê — khẩu ngữ; ôn lại 矿泉水 (Bài 5).' },
          { context: 'Hoàn thành câu: cân nhắc ngành khác đi, tiếng Trung, quan hệ quốc tế gì đó.',
            pre: '那就考虑考虑其他专业吧，中文、国际关系', blank: '什么的', post: '，我和你爸都不反对。', options: ['什么的', '怎么样', '什么'], answer: 0,
            explanation: '什么的 — còn những ngành tương tự; ôn lại 国际 (Bài 11), 反对 (Bài 10).' },
          { context: 'Hoàn thành câu: còn hình thành thói quen bỏ rác vào thùng rác, vân vân.',
            pre: '还有养成把垃圾丢进垃圾桶的习惯', blank: '什么的', post: '。', options: ['什么的', '一样', '什么'], answer: 0,
            explanation: '什么的 sau cụm động từ; ôn lại 养成 (Bài 7), câu chữ 把.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们有很多共同的爱好，经常一起打球、爬山、看电影什么的。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1); ôn lại 共同 (Bài 10), 爱好 (Bài 1).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '什么的我周末喜欢看书、听音乐。', isCorrect: false, correctVersion: '我周末喜欢看书、听音乐什么的。',
            explanation: '什么的 phải đứng SAU các ví dụ liệt kê, không đứng đầu câu.' },
          { type: 'sort', context: 'Sắp xếp câu: nhiều thứ dùng tiền không mua được, ví dụ như thời gian, tình bạn, sức khỏe các thứ.',
            words: ['很多', '东西', '是', '用', '钱', '买不到', '的', '，', '比如', '时间', '、', '友谊', '、', '健康', '什么的', '。'], answer: '很多东西是用钱买不到的，比如时间、友谊、健康什么的。',
            explanation: '什么的 — bài luyện tập SGK (2); ôn lại 买不到 (Bài 5), 友谊 (Bài 11).' },
          { type: 'sort', context: 'Sắp xếp câu: tác dụng của điện thoại ngày càng lớn, người ta có thể dùng nó để mua sắm, chụp ảnh, xem tin tức các thứ.',
            words: ['现在', '手机', '的', '作用', '越来越', '大', '，', '人们', '可以', '用', '它', '来', '购物', '、', '照相', '、', '看', '新闻', '什么的', '。'], answer: '现在手机的作用越来越大，人们可以用它来购物、照相、看新闻什么的。',
            explanation: '什么的 — bài luyện tập SGK (3); ôn lại 作用 (Bài 12), 购物 (Bài 5).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 什么的.',
            promptLang: 'vi', prompt: 'Khi đi công tác tôi thường tự mang khăn, kem đánh răng, bàn chải các thứ.',
            answer: '出差的时候我一般自己带毛巾、牙膏、牙刷什么的。', answerPy: 'Chū chāi de shíhou wǒ yìbān zìjǐ dài máojīn, yágāo, yáshuā shénme de.',
            explanation: '什么的 sau danh sách; từ mới của bài.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Để bảo vệ môi trường, chúng ta có thể ít lái xe, tiết kiệm điện, từ chối dùng túi nilông, vân vân.',
            answer: '为了保护环境，我们可以少开车、节约用电、拒绝使用塑料袋什么的。', answerPy: 'Wèile bǎohù huánjìng, wǒmen kěyǐ shǎo kāi chē, jiéyuē yòng diàn, jùjué shǐyòng sùliàodài shénme de.',
            explanation: '什么的 sau chuỗi cụm động từ; ôn lại 为了 (Bài 4), 节约/使用 (Bài 12).' },
        ] },
    ],
    '/lessons/hsk4-bai-15.html': [
      { point: '「想起来」',
        items: [
          { context: 'Hoàn thành câu: tôi nhớ ra rồi, đứa bé này vừa thông minh vừa đáng yêu.',
            pre: '我想', blank: '起来', post: '了，这孩子又聪明又可爱，你们教育得真好！', options: ['起来', '出来', '过来'], answer: 0,
            explanation: '想起来 — nhớ lại; ôn lại 又……又 (Bài 1), 教育 (Bài 12).' },
          { context: 'Hoàn thành câu: tôi chợt nhớ ra phải đi ngân hàng, nên không thể cùng bạn đến đại sứ quán.',
            pre: '我突然', blank: '想起来', post: '得去银行，所以不能陪你去大使馆了。', options: ['想起来', '想出来', '想到'], answer: 0,
            explanation: '想起来 — nhớ ra việc đã có; ôn lại 突然 (Bài 8), 陪 (Bài 3).' },
          { context: 'Hoàn thành câu: bạn nằm đọc sách như vậy không tốt cho mắt, mau ngồi dậy!',
            pre: '你这样躺着看书对眼睛不好，快', blank: '坐起来', post: '！', options: ['坐起来', '坐下去', '坐过来'], answer: 0,
            explanation: '起来 — bổ ngữ xu hướng từ dưới lên; ôn lại 躺 (Bài 7).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你看见我钱包放哪儿了吗？——我想起来了，你放在沙发上了。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (2): 想起来 nhớ lại; ôn lại 钱包 (Bài 4).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他的名字我想起来不。', isCorrect: false, correctVersion: '他的名字我想不起来。',
            explanation: 'Phủ định bổ ngữ khả năng: 想不起来 (不 chèn giữa), không đặt 不 ở cuối.' },
          { type: 'sort', context: 'Sắp xếp câu: khi cậu bé bước đến mời cô ấy nhảy, cô ấy ngượng ngùng đứng dậy.',
            words: ['当', '那个', '男孩', '走过来', '邀请', '她', '跳舞', '时', '，', '她', '害羞', '地', '站', '了', '起来', '。'], answer: '当那个男孩走过来邀请她跳舞时，她害羞地站了起来。',
            explanation: '站起来 — bài luyện tập SGK (1); ôn lại 邀请 (Bài 6), 害羞 từ mới.' },
          { type: 'sort', context: 'Sắp xếp câu: mỗi người đều có hồi ức đẹp về thời thơ ấu, nhớ lại thì luôn cảm thấy hạnh phúc.',
            words: ['每个', '人', '都', '对', '小时候', '有', '美好', '的', '回忆', '，', '想起来', '总是', '觉得', '很', '幸福', '。'], answer: '每个人都对小时候有美好的回忆，想起来总是觉得很幸福。',
            explanation: '想起来 — bài luyện tập SGK (3); ôn lại 回忆 (Bài 8), 幸福 (Bài 10).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 想起来.',
            promptLang: 'vi', prompt: 'Tôi chợt nhớ ra hôm nay là sinh nhật mẹ, tôi phải mau về nhà.',
            answer: '我突然想起来今天是妈妈的生日，我得赶快回家。', answerPy: 'Wǒ tūrán xiǎng qilai jīntiān shì māma de shēngrì, wǒ děi gǎnkuài huí jiā.',
            explanation: '想起来 + 赶 (từ mới) + 突然 (Bài 8).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Người ngồi làm việc lâu, khoảng một tiếng nhất định phải đứng dậy vận động.',
            answer: '长时间坐着工作的人，一小时左右一定要站起来活动活动。', answerPy: 'Cháng shíjiān zuòzhe gōngzuò de rén, yì xiǎoshí zuǒyòu yídìng yào zhàn qilai huódòng huódòng.',
            explanation: '站起来 + 左右 (ngữ pháp bài) + 一定 + động từ lặp 活动活动.' },
        ] },
      { point: '「弄」',
        items: [
          { context: 'Hoàn thành câu: đều làm xong rồi, mang sang cho anh ngay.',
            pre: '都', blank: '弄', post: '好了，马上给您送过去。', options: ['弄', '做', '搞'], answer: 0,
            explanation: '弄好 = 准备好 — khẩu ngữ; ôn lại 送过去 (Bài 3).' },
          { context: 'Hoàn thành câu: lát nữa khiêng sofa cẩn thận chút, đừng làm hỏng.',
            pre: '一会儿搬沙发的时候要小心点儿，别', blank: '弄坏', post: '了。', options: ['弄坏', '弄好', '弄清楚'], answer: 0,
            explanation: '弄坏 = 碰坏 — làm hỏng; ôn lại 沙发 (Bài 11).' },
          { context: 'Hoàn thành câu: ngày nào cũng vì việc nhỏ phê bình nó, khiến hai mẹ con đều không vui.',
            pre: '每天因为这些小事批评她，', blank: '弄得', post: '我俩心情都不好。', options: ['弄得', '弄好', '弄坏'], answer: 0,
            explanation: '弄得 + kết quả — khiến cho; ôn lại 心情 (Bài 8).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '老师提醒我们考试时要仔细，千万别弄错了。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1): 弄错 = làm sai; ôn lại 仔细 (Bài 12), 千万 (bài này).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '孩子把衣服弄了脏。', isCorrect: false, correctVersion: '孩子把衣服弄脏了。',
            explanation: 'Bổ ngữ kết quả đứng ngay sau 弄: 弄脏了, không chèn 了 vào giữa. Ôn lại 脏 (Bài 14).' },
          { type: 'sort', context: 'Sắp xếp câu: sống ở đây, bên ngoài lúc nào cũng ồn ào, tối dù đóng cửa sổ tiếng vẫn to, khiến tôi ngủ không ngon.',
            words: ['住在', '这里', '，', '外面', '不管', '什么', '时候', '都', '很', '热闹', '，', '晚上', '即使', '关上', '了', '窗户', '声音', '也', '很大', '，', '弄得', '我', '睡不好', '觉', '。'], answer: '住在这里，外面不管什么时候都很热闹，晚上即使关上了窗户声音也很大，弄得我睡不好觉。',
            explanation: '弄得 — bài luyện tập SGK (2); ôn lại 不管 (Bài 3), 即使 (Bài 9).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi làm nhầm hướng rồi, xe buýt đi phía tây phải đón ở bên đối diện.',
            words: ['我', '把', '方向', '弄错', '了', '，', '去', '西边', '的', '公共', '汽车', '应该', '在', '对面', '坐', '。'], answer: '我把方向弄错了，去西边的公共汽车应该在对面坐。',
            explanation: '把……弄错 — bài luyện tập SGK (3); ôn lại 方向 (Bài 10), 对面 (Bài 2).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 弄.',
            promptLang: 'vi', prompt: 'Cha mẹ nên trò chuyện với con, làm rõ vấn đề của chúng.',
            answer: '父母应该和孩子聊聊天儿，弄清楚他们的问题。', answerPy: 'Fùmǔ yīnggāi hé háizi liáoliao tiānr, nòng qīngchu tāmen de wèntí.',
            explanation: '弄清楚 — làm rõ; động từ lặp 聊聊天儿.' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chìa khóa là bạn làm mất à? — Xin lỗi, tôi không cố ý.',
            answer: '钥匙是你弄丢的吗？——抱歉，我不是故意的。', answerPy: 'Yàoshi shì nǐ nòng diū de ma? — Bàoqiàn, wǒ bú shì gùyì de.',
            explanation: '弄丢 + 丢 (Bài 14), 抱歉 (Bài 14), 故意 (từ mới).' },
        ] },
      { point: '「千万」so sánh với 「一定」',
        items: [
          { context: 'Hoàn thành câu: khen tuyệt đối đừng quá nhiều, khen quá nhiều có thể gây áp lực cho trẻ.',
            pre: '表扬', blank: '千万', post: '不要太多，过多的表扬可能会给孩子带来压力。', options: ['千万', '一定', '实在'], answer: 0,
            explanation: '千万 + 不要 — dặn dò trong câu phủ định; ôn lại 压力 (Bài 5).' },
          { context: 'Hoàn thành câu: cảm ơn sự ủng hộ của ngài, tôi nhất định sẽ tiếp tục nỗ lực.',
            pre: '感谢您的支持和鼓励，我', blank: '一定', post: '会继续努力。', options: ['一定', '千万', '差不多'], answer: 0,
            explanation: 'Quyết tâm ngôi thứ nhất với 会 → chỉ dùng 一定; 千万 không có cách dùng này. Ôn lại 支持 (Bài 11), 鼓励 (Bài 14).' },
          { context: 'Hoàn thành câu: khóc không nhất thiết là chuyện xấu, khóc có thể giúp người ta thoát khỏi tâm trạng xấu.',
            pre: '哭并不', blank: '一定', post: '是件坏事，哭可以让人从坏心情中走出来。', options: ['一定', '千万', '肯定'], answer: 0,
            explanation: 'Bài 做一做 SGK (2): 不一定 = không nhất thiết → chỉ 一定; ôn lại 并不 (Bài 4).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '不管压力有多么大，千万不能放弃，而是要继续坚持下去。', isCorrect: true,
            explanation: 'Câu đúng — bài 做一做 SGK (1): 千万不能 (cả 一定 cũng được); ôn lại 不管 (Bài 3), 放弃/坚持 (Bài 9).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '如果你有千万的语言基础和经济条件，那么出国学习外语是最好的选择。', isCorrect: false, correctVersion: '如果你有一定的语言基础和经济条件，那么出国学习外语是最好的选择。',
            explanation: '一定的 + danh từ (tính từ: ở mức độ nhất định) — 千万 không làm tính từ. Ôn lại 基础 (Bài 13), 条件 (Bài 6).' },
          { type: 'sort', context: 'Sắp xếp câu: lần này bạn nhất định phải điền theo yêu cầu, cẩn thận một chút, tuyệt đối đừng viết sai.',
            words: ['这次', '你', '一定', '要', '按照', '要求', '认真', '填写', '，', '小心', '一点儿', '，', '千万', '别', '写错', '了', '。'], answer: '这次你一定要按照要求认真填写，小心一点儿，千万别写错了。',
            explanation: 'Bài 做一做 SGK (3): 一定要 (khẳng định) + 千万别 (phủ định); ôn lại 按照 (Bài 4), 填写.' },
          { type: 'sort', context: 'Sắp xếp câu: hứng thú là người thầy tốt nhất, nếu trẻ hứng thú với một việc, nó nhất định sẽ nỗ lực học, hiệu quả cũng tốt hơn.',
            words: ['兴趣', '是', '最好', '的', '老师', '，', '如果', '孩子', '对', '一件', '事情', '感', '兴趣', '，', '那', '他', '一定', '会', '努力', '地', '去', '学习', '，', '效果', '也', '会', '更好', '。'], answer: '兴趣是最好的老师，如果孩子对一件事情感兴趣，那他一定会努力地去学习，效果也会更好。',
            explanation: 'Bài 做一做 SGK (4): 一定会 = chắc chắn (tất nhiên) → chỉ 一定; ôn lại 效果 (Bài 9).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 千万.',
            promptLang: 'vi', prompt: 'Nếu chuyện chưa từng xảy ra, thì tuyệt đối đừng nói bừa.',
            answer: '要是事情没有发生过，就千万别乱说。', answerPy: 'Yàoshi shìqing méiyǒu fāshēngguo, jiù qiānwàn bié luàn shuō.',
            explanation: 'Bài luyện tập SGK (2); ôn lại 要是……就 (Bài 5), 乱 (Bài 14).' },
          { type: 'translate', context: 'Dịch câu sau, phân biệt 千万 / 一定.',
            promptLang: 'vi', prompt: 'Trong hộp này toàn cốc và đĩa, khiêng lúc tuyệt đối phải cẩn thận, đừng làm vỡ.',
            answer: '这个箱子里都是杯子和盘子，搬的时候千万要小心，别弄坏了。', answerPy: 'Zhège xiāngzi li dōu shì bēizi hé pánzi, bān de shíhou qiānwàn yào xiǎoxīn, bié nòng huài le.',
            explanation: 'Bài luyện tập SGK (3): 千万要小心 + 别弄坏 (弄 ngữ pháp bài); ôn lại 盘子 (Bài 11).' },
        ] },
      { point: '「来」',
        items: [
          { context: 'Hoàn thành câu: sofa này to thế, hai người chắc chắn không khiêng nổi, để tôi khiêng cùng.',
            pre: '这个沙发这么大，你们两个肯定抬不动，我', blank: '来', post: '帮你们一起抬。', options: ['来', '去', '在'], answer: 0,
            explanation: '我来 + động từ — để tôi làm; ôn lại 抬不动 (Bài 5, 11).' },
          { context: 'Hoàn thành câu: Tiểu Vương kinh nghiệm phong phú, lần này để cậu ấy phụ trách đi.',
            pre: '小王经验比较丰富，并且做事认真，这次就让他', blank: '来', post: '负责吧。', options: ['来', '去', '给'], answer: 0,
            explanation: '让他来负责 — 来 trước động từ chỉ sắp thực hiện; ôn lại 丰富 (Bài 8), 并且 (Bài 12), 负责 (Bài 10).' },
          { context: 'Hoàn thành câu: có trẻ sẽ khóc, ném đồ hoặc cố tình gõ đập để thu hút sự chú ý của cha mẹ.',
            pre: '有的孩子会通过哭、扔东西或者故意敲打', blank: '来', post: '引起父母的注意。', options: ['来', '去', '为'], answer: 0,
            explanation: '通过 A 来 B — dùng A để B; ôn lại 通过 (Bài 9), 引起 (Bài 12).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这两件衣服我都喜欢，不知道买哪件好，你来帮我选一件吧。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1): 你来帮我选.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我来了帮你搬东西。', isCorrect: false, correctVersion: '我来帮你搬东西。',
            explanation: '来 (sắp làm gì) đứng trực tiếp trước động từ, không thêm 了 giữa 来 và động từ.' },
          { type: 'sort', context: 'Sắp xếp câu: trường chúng tôi thường tổ chức hoạt động, để sinh viên giao lưu qua hoạt động.',
            words: ['我们', '学校', '经常', '会', '举办', '一些', '活动', '，', '让', '学生', '通过', '活动', '来', '互相', '交流', '。'], answer: '我们学校经常会举办一些活动，让学生通过活动来互相交流。',
            explanation: '通过……来 — bài luyện tập SGK (2); ôn lại 举办 (Bài 11), 互相 (Bài 6), 交流 (Bài 5).' },
          { type: 'sort', context: 'Sắp xếp câu: phóng viên luôn cần điều tra khắp nơi, dùng sự thật để nói.',
            words: ['记者', '总是', '需要', '到处', '调查', '，', '用', '事实', '来', '说话', '。'], answer: '记者总是需要到处调查，用事实来说话。',
            explanation: '用……来 — bài luyện tập SGK (3); ôn lại 记者 (Bài 10), 到处 (Bài 8), 调查 (Bài 6).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 来.',
            promptLang: 'vi', prompt: 'Việc dọn phòng để tôi làm, bạn đi nghỉ đi.',
            answer: '整理房间的事我来做，你去休息吧。', answerPy: 'Zhěnglǐ fángjiān de shì wǒ lái zuò, nǐ qù xiūxi ba.',
            explanation: '我来做 + 整理 (từ mới).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chúng ta nên dùng khuyến khích và khen ngợi để giúp trẻ hình thành thói quen tốt.',
            answer: '我们应该用鼓励和表扬来帮助孩子养成好习惯。', answerPy: 'Wǒmen yīnggāi yòng gǔlì hé biǎoyáng lái bāngzhù háizi yǎngchéng hǎo xíguàn.',
            explanation: '用……来 + 鼓励 (Bài 14), 表扬 (từ mới), 养成 (Bài 7).' },
        ] },
      { point: '「左右」',
        items: [
          { context: 'Hoàn thành câu: cuốn sách mua trên mạng ước chừng ba ngày là đến.',
            pre: '网上买的那本书估计三天', blank: '左右', post: '就能到。', options: ['左右', '大概', '差不多'], answer: 0,
            explanation: '左右 đứng SAU số lượng; 大概 phải đứng trước. Ôn lại 估计 (Bài 7).' },
          { context: 'Hoàn thành câu: phía trước khoảng 500 mét có bãi đỗ xe miễn phí.',
            pre: '前方500米', blank: '左右', post: '有个免费停车场，您可以把车停到那儿。', options: ['左右', '大约', '多少'], answer: 0,
            explanation: '500米左右 — xấp xỉ; ôn lại 停 (Bài 14), 免费 (Bài 5).' },
          { context: 'Hoàn thành câu: trẻ khoảng bảy tuổi thường hiếu động, không ngồi yên.',
            pre: '七岁', blank: '左右', post: '的儿童普遍好动，坐不住。', options: ['左右', '以上', '之间'], answer: 0,
            explanation: '七岁左右的 + danh từ; ôn lại 普遍 (Bài 13).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '从这儿打车去机场要一个小时左右，我们还是坐地铁吧。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1); ôn lại 还是……吧 (Bài 1).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这次活动左右有一百人参加。', isCorrect: false, correctVersion: '这次活动有一百人左右参加。',
            explanation: '左右 là danh từ chỉ đứng SAU số lượng (一百人左右), không đứng trước như 大概/大约.' },
          { type: 'sort', context: 'Sắp xếp câu: kết quả phỏng vấn khoảng một tuần là có, có tin chúng tôi sẽ thông báo ngay.',
            words: ['面试', '结果', '一个', '星期', '左右', '就', '能', '出来', '，', '有', '消息', '我们', '会', '马上', '通知', '你', '。'], answer: '面试结果一个星期左右就能出来，有消息我们会马上通知你。',
            explanation: '左右 — bài luyện tập SGK (2); ôn lại 面试 (Bài 10), 消息 (Bài 9), 通知 (Bài 4).' },
          { type: 'sort', context: 'Sắp xếp câu: giám đốc Mã cuối tháng 7 đi Bắc Kinh công tác, khoảng 10 ngày mới về.',
            words: ['马经理', '7月底', '去', '北京', '出差', '，', '十天', '左右', '才', '能', '回来', '。'], answer: '马经理7月底去北京出差，十天左右才能回来。',
            explanation: '左右 — bài luyện tập SGK (3); ôn lại 出差 (Bài 14), 月底 (Bài 11), 才 (Bài 3).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 左右.',
            promptLang: 'vi', prompt: 'Cháu tôi khoảng 8 tuổi bắt đầu học piano, ngày nào cũng luyện khoảng một tiếng.',
            answer: '我孙子八岁左右开始学弹钢琴，每天练习一个小时左右。', answerPy: 'Wǒ sūnzi bā suì zuǒyòu kāishǐ xué tán gāngqín, měi tiān liànxí yí ge xiǎoshí zuǒyòu.',
            explanation: '左右 sau tuổi và sau thời lượng; 孙子/弹钢琴 từ mới.' },
          { type: 'translate', context: 'Dịch câu sau, phân biệt 大概 / 左右.',
            promptLang: 'vi', prompt: 'Buổi biểu diễn đại khái 7 giờ rưỡi bắt đầu, kéo dài khoảng hai tiếng.',
            answer: '演出大概七点半开始，要进行两个小时左右。', answerPy: 'Yǎnchū dàgài qī diǎn bàn kāishǐ, yào jìnxíng liǎng ge xiǎoshí zuǒyòu.',
            explanation: '大概 đứng trước, 左右 đứng sau số lượng; ôn lại 演出/进行 (Bài 13).' },
        ] },
    ],
    '/lessons/hsk4-bai-16.html': [
      { point: '「可」',
        items: [
          { context: 'Hoàn thành câu: đây đúng là vấn đề lớn, tôi cũng không rõ lắm.',
            pre: '这', blank: '可', post: '是个大问题，我也不太清楚。', options: ['可', '太', '真'], answer: 0,
            explanation: '可 + 是 — nhấn mạnh khẩu ngữ.' },
          { context: 'Hoàn thành câu: tuần sau tôi phải đến sứ quán làm visa rồi, thế này biết làm sao?',
            pre: '下个星期我就要去使馆办签证了，这', blank: '可', post: '怎么办？', options: ['可', '却', '才'], answer: 0,
            explanation: '可 trong câu hỏi tăng ngữ khí; ôn lại 就要……了 (Bài 2).' },
          { context: 'Hoàn thành câu: cắt tóc tiết kiệm được thật nhiều tiền.',
            pre: '我办了一张那个理发店的会员卡，理发', blank: '可', post: '节约了不少钱。', options: ['可', '也', '还'], answer: 0,
            explanation: '可 + động từ + 了 — nhấn mạnh; ôn lại 理发 (Bài 7), 节约 (Bài 12).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '他可真马虎，竟然连火车票都没拿。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1): 可真 + tính từ; ôn lại 竟然 (Bài 6), 连……都 (Bài 11), 马虎 (từ mới).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '办法简单可了，把报名表格填好给我就可以了。', isCorrect: false, correctVersion: '办法可简单了，把报名表格填好给我就可以了。',
            explanation: 'Phó từ 可 đứng TRƯỚC tính từ: 可简单了 (bài luyện tập SGK 2), không đặt sau.' },
          { type: 'sort', context: 'Sắp xếp câu: phòng anh ấy bừa bộn thế, dọn dẹp thật là phiền.',
            words: ['他', '房间', '这么', '乱', '，', '整理', '起来', '可', '麻烦', '了', '。'], answer: '他房间这么乱，整理起来可麻烦了。',
            explanation: '可……了 — bài luyện tập SGK (3); ôn lại 整理 (Bài 15), 起来 (Bài 15), 乱 (Bài 14).' },
          { type: 'sort', context: 'Sắp xếp câu: chàng trai này thật giỏi, mười năm kiếm cho công ty nhiều tiền như vậy.',
            words: ['这个', '小伙子', '可', '真', '厉害', '，', '十年', '就', '给', '公司', '赚', '了', '这么', '多', '钱', '。'], answer: '这个小伙子可真厉害，十年就给公司赚了这么多钱。',
            explanation: '可真 + tính từ; ôn lại 厉害 (Bài 11), 赚 (Bài 10).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 可.',
            promptLang: 'vi', prompt: 'Ở ngoại ô không khí thật trong lành, cuối tuần đến đó thư giãn rất thoải mái.',
            answer: '郊区的空气可新鲜了，周末去那儿放松放松很舒服。', answerPy: 'Jiāoqū de kōngqì kě xīnxiān le, zhōumò qù nàr fàngsōng fàngsōng hěn shūfu.',
            explanation: '可……了 + 郊区 (từ mới) + 新鲜 (Bài 7) + 放松 (Bài 9).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Thư mời còn chưa fax đến, thế này biết làm sao?',
            answer: '邀请信还没传真过来，这可怎么办？', answerPy: 'Yāoqǐngxìn hái méi chuánzhēn guòlai, zhè kě zěnme bàn?',
            explanation: '这可怎么办 + 传真 (từ mới), 邀请 (Bài 6).' },
        ] },
      { point: '「恐怕」so sánh với 「怕」',
        items: [
          { context: 'Hoàn thành câu: nghe xong câu trả lời của tôi, có lẽ cậu đã biết đáp án rồi.',
            pre: '听完我的回答，', blank: '恐怕', post: '你已经知道我的答案了吧。', options: ['恐怕', '怕', '害怕'], answer: 0,
            explanation: '恐怕 = 大概/也许 (phỏng đoán) đứng trước chủ ngữ — 怕 không dùng được.' },
          { context: 'Hoàn thành câu: lần họp mặt này sao chuẩn bị nhiều món thế? Tôi sợ họ ăn không hết.',
            pre: '这次聚会你们怎么准备了这么多菜呢？我', blank: '怕', post: '他们吃不了。', options: ['怕', '恐怕', '大概'], answer: 0,
            explanation: 'Bài 做一做 SGK (2): 怕 + mệnh đề có chủ ngữ khác (他们) — 恐怕 chỉ đứng trước động từ; ôn lại 聚会 (Bài 8), 吃不了 (Bài 5).' },
          { context: 'Hoàn thành câu: gặp bất cứ khó khăn nào cũng đừng sợ, chỉ cần nỗ lực, thành công ngày càng gần.',
            pre: '遇到任何困难都不要', blank: '怕', post: '，只要你努力，成功就离你越来越近。', options: ['怕', '恐怕', '担心'], answer: 0,
            explanation: 'Bài 做一做 SGK (5): 怕 = sợ, dùng độc lập/mang tân ngữ — 恐怕 không có nghĩa này; ôn lại 任何 (Bài 11).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '如果没有你们的帮助，这次找工作恐怕不会这么顺利。', isCorrect: true,
            explanation: 'Câu đúng — bài 做一做 SGK (1): 恐怕/怕 đều được (ước đoán kèm lo); ôn lại 顺利 (Bài 9).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '好久没见过他了，他离开这里怕有二十天了。', isCorrect: false, correctVersion: '好久没见过他了，他离开这里恐怕有二十天了。',
            explanation: 'Phỏng đoán thuần túy (= 大概) chỉ dùng 恐怕, không dùng 怕 (SGK 比一比 điểm 4).' },
          { type: 'sort', context: 'Sắp xếp câu: sofa này e là hai người không khiêng nổi, bạn gọi thêm hai người đến khiêng cùng.',
            words: ['这个', '沙发', '恐怕', '两个', '人', '抬不动', '，', '你', '再', '去', '叫', '两个', '人', '过来', '一起', '抬', '。'], answer: '这个沙发恐怕两个人抬不动，你再去叫两个人过来一起抬。',
            explanation: '恐怕 — bài luyện tập SGK (1); ôn lại 抬不动 (Bài 11, 15).' },
          { type: 'sort', context: 'Sắp xếp câu: xe va không nghiêm trọng, chỉ là cửa xe bị xước, e rằng phải sửa mất mấy ngày.',
            words: ['车', '撞', '得', '不', '严重', '，', '就是', '把', '车门', '擦', '坏', '了', '，', '恐怕', '要', '修', '好几', '天', '。'], answer: '车撞得不严重，就是把车门擦坏了，恐怕要修好几天。',
            explanation: '恐怕 — bài luyện tập SGK (2); ôn lại 撞 (Bài 7), 擦 (Bài 11), 好几 (Bài 11).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 恐怕.',
            promptLang: 'vi', prompt: 'Cái vali này hơi nhỏ, e là không đựng hết đồ của bạn.',
            answer: '这个行李箱有点儿小，恐怕装不下你的东西。', answerPy: 'Zhège xínglixiāng yǒudiǎnr xiǎo, kǒngpà zhuāngbuxià nǐ de dōngxi.',
            explanation: 'Bài luyện tập SGK (3); ôn lại 行李箱 (Bài 4), bổ ngữ khả năng 装不下.' },
          { type: 'translate', context: 'Dịch câu sau, phân biệt 恐怕 / 怕.',
            promptLang: 'vi', prompt: 'Tôi vốn định nghỉ là đi ngay, nhưng e là bây giờ không đi được, thầy bảo tôi dịch mấy bài văn.',
            answer: '我本来想放假就走，但恐怕现在走不了，老师让我翻译几篇文章。', answerPy: 'Wǒ běnlái xiǎng fàng jià jiù zǒu, dàn kǒngpà xiànzài zǒubuliǎo, lǎoshī ràng wǒ fānyì jǐ piān wénzhāng.',
            explanation: 'Bài 做一做 SGK (4): 恐怕 đứng trước chủ ngữ 现在; ôn lại 本来 (Bài 10), 翻译 (Bài 10), 文章 (Bài 11).' },
        ] },
      { point: '「到底」',
        items: [
          { context: 'Hoàn thành câu: chẳng phải bạn mua vé tàu rồi sao? Rốt cuộc bạn tính thế nào?',
            pre: '你不是已经买好火车票了吗？你', blank: '到底', post: '怎么打算的呀？', options: ['到底', '大概', '千万'], answer: 0,
            explanation: '到底 + 怎么 — truy hỏi; ôn lại 不是……吗 (Bài 6).' },
          { context: 'Hoàn thành câu: rốt cuộc ai đi thi đấu, mọi người vẫn chưa quyết định.',
            pre: '', blank: '到底', post: '谁去参加比赛，大家还没决定。', options: ['到底', '究竟谁', '恐怕'], answer: 0,
            explanation: 'Chủ ngữ là 谁 → 到底 đứng TRƯỚC chủ ngữ; ôn lại 决定 (Bài 5).' },
          { context: 'Hoàn thành câu: hôm nay tôi nhất định dạo phố cùng bạn đến cùng.',
            pre: '今天我一定陪你逛街逛', blank: '到底', post: '，保证让你买到合适的衣服。', options: ['到底', '到头', '到家'], answer: 0,
            explanation: '到底 — động từ "đến cùng"; ôn lại 陪 (Bài 3), 保证 (Bài 12), 合适 (Bài 15).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '虽然这是两棵不同的植物，但是它们到底有什么区别，我也说不清楚。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1): 到底 + 什么; ôn lại 植物 (Bài 12), 区别 (Bài 8).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你到底去过北京吗？', isCorrect: false, correctVersion: '你到底去没去过北京？',
            explanation: '到底 KHÔNG dùng trong câu hỏi có 吗 — phải dùng câu hỏi chính phản hoặc đại từ nghi vấn.' },
          { type: 'sort', context: 'Sắp xếp câu: từ đây đi thẳng đến cùng, sẽ thấy một bãi đỗ xe miễn phí.',
            words: ['从', '这儿', '一直', '往前', '走', '到底', '，', '就', '能', '看到', '一个', '免费', '停车场', '。'], answer: '从这儿一直往前走到底，就能看到一个免费停车场。',
            explanation: '走到底 — bài luyện tập SGK (2); ôn lại 停车场 (Bài 14), 免费 (Bài 5).' },
          { type: 'sort', context: 'Sắp xếp câu: mai là ngày cuối đăng ký rồi, rốt cuộc bạn có tham gia hay không?',
            words: ['明天', '就是', '报名', '的', '最后', '一天', '了', '，', '你', '到底', '参加', '不', '参加', '？'], answer: '明天就是报名的最后一天了，你到底参加不参加？',
            explanation: '到底 + câu hỏi chính phản — bài luyện tập SGK (3); 报名 từ mới.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 到底.',
            promptLang: 'vi', prompt: 'Tôi gọi điện mấy lần không ai nghe, không biết rốt cuộc anh ấy có chuyện gì.',
            answer: '我打了好几次电话都没人接，不知道他到底是怎么回事。', answerPy: 'Wǒ dǎle hǎo jǐ cì diànhuà dōu méi rén jiē, bù zhīdào tā dàodǐ shì zěnme huí shì.',
            explanation: '到底是怎么回事; ôn lại 好几 (Bài 11), 接 (Bài 4).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Chỉ cần kiên trì đến cùng, bạn nhất định có thể thành công.',
            answer: '只要坚持到底，你就一定能成功。', answerPy: 'Zhǐyào jiānchí dàodǐ, nǐ jiù yídìng néng chénggōng.',
            explanation: '坚持到底 (động từ); ôn lại 只要……就 (Bài 8), 坚持 (Bài 9).' },
        ] },
      { point: '「拿……来说」',
        items: [
          { context: 'Hoàn thành câu: lấy học tiếng Trung mà nói, trước hết phải chú ý chuẩn bị bài.',
            pre: '就', blank: '拿', post: '学汉语来说吧，首先要注意课前预习。', options: ['拿', '对', '把'], answer: 0,
            explanation: '拿……来说 — nêu ví dụ; 预习 từ mới; ôn lại 首先 (Bài 10).' },
          { context: 'Hoàn thành câu: lấy anh ấy mà nói, không chỉ chuyên ngành phù hợp mà còn có kinh nghiệm.',
            pre: '拿他', blank: '来说', post: '，他不仅专业符合职业要求，而且还有工作经验。', options: ['来说', '来看', '说来'], answer: 0,
            explanation: '拿……来说; ôn lại 符合 (Bài 10), 不仅……而且 (Bài 6), 经验 (Bài 8).' },
          { context: 'Hoàn thành câu: lấy các chữ "河, 流, 洗, 汁" mà nói, đều liên quan đến nước.',
            pre: '', blank: '拿', post: '"河、流、洗、汁"这几个字来说，它们都跟水有关。', options: ['拿', '用', '以'], answer: 0,
            explanation: '拿……来说 — ví dụ minh họa; ôn lại 有关 (Bài 8).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '有的人一遇到困难就想放弃，拿小王来说，他换了三次工作都没坚持下来。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1): 拿小王来说; ôn lại 一……就 (Bài 2), 放弃/坚持 (Bài 9).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '拿我来说，学习汉语很有意思。（nghĩa: đối với tôi mà nói）', isCorrect: false, correctVersion: '对我来说，学习汉语很有意思。',
            explanation: 'Nêu góc nhìn/cảm nhận của ai dùng 对……来说 (Bài 5); 拿……来说 dùng để đưa VÍ DỤ minh họa.' },
          { type: 'sort', context: 'Sắp xếp câu: bảo vệ môi trường nên bắt đầu từ việc nhỏ, lấy túi nilông mà nói, mỗi người dùng ít một chút là giảm được nhiều ô nhiễm.',
            words: ['保护', '环境', '应该', '从', '小事', '做起', '，', '拿', '塑料袋', '来说', '，', '每个', '人', '少用', '一点儿', '，', '就', '能', '减少', '很多', '污染', '。'], answer: '保护环境应该从小事做起，拿塑料袋来说，每个人少用一点儿，就能减少很多污染。',
            explanation: '拿……来说 — bài luyện tập SGK (2); ôn lại 塑料袋/减少/污染 (Bài 14).' },
          { type: 'sort', context: 'Sắp xếp câu: không có kế hoạch làm việc dễ khiến người ta luống cuống, lấy tôi mà nói, hôm qua không lập kế hoạch, kết quả chẳng làm xong việc gì.',
            words: ['没有', '工作', '计划', '很', '容易', '让', '人', '手忙脚乱', '，', '拿', '我', '来说', '，', '昨天', '没', '做', '计划', '，', '结果', '什么', '事', '都', '没', '做完', '。'], answer: '没有工作计划很容易让人手忙脚乱，拿我来说，昨天没做计划，结果什么事都没做完。',
            explanation: '拿……来说 — bài luyện tập SGK (3); ôn lại 结果 (Bài 9), 什么……都 (Bài 3).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 拿……来说.',
            promptLang: 'vi', prompt: 'Ngày càng nhiều người thích ra ngoại ô, lấy công ty tôi mà nói, một nửa đồng nghiệp cuối tuần đều ra ngoại ô.',
            answer: '越来越多的人喜欢去郊区，拿我们公司来说，一半的同事周末都去郊区。', answerPy: 'Yuè lái yuè duō de rén xǐhuan qù jiāoqū, ná wǒmen gōngsī lái shuō, yíbàn de tóngshì zhōumò dōu qù jiāoqū.',
            explanation: '拿……来说 + 郊区 (từ mới) + 一半 (Bài 5).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Khen ngợi phải kịp thời, lấy con gái tôi mà nói, mỗi lần được khen nó đều tự tin hơn.',
            answer: '表扬要及时，拿我女儿来说，每次受到表扬她都更自信。', answerPy: 'Biǎoyáng yào jíshí, ná wǒ nǚ\'ér lái shuō, měi cì shòudào biǎoyáng tā dōu gèng zìxìn.',
            explanation: '拿……来说 + 表扬 (Bài 15), 及时 (Bài 7), 自信 (từ mới).' },
        ] },
      { point: '「敢」',
        items: [
          { context: 'Hoàn thành câu: chúng ta nên coi những người dám nói thật là "tấm gương".',
            pre: '我们应该把那些', blank: '敢', post: '说真话的人当成"镜子"。', options: ['敢', '会', '肯'], answer: 0,
            explanation: '敢 + 说 — dám nói; ôn lại 把……当成.' },
          { context: 'Hoàn thành câu: từ đó tôi không dám nằm đọc sách nữa.',
            pre: '所以从那儿以后我就', blank: '不敢', post: '再躺着看书了。', options: ['不敢', '不会', '不能'], answer: 0,
            explanation: '不敢再 + động từ; ôn lại 躺 (Bài 7), 着 (Bài 2).' },
          { context: 'Hoàn thành câu: nếu bạn dám thành thật nói ra mình không hiểu mặt nào, không chứng tỏ bạn kém.',
            pre: '如果你', blank: '敢', post: '诚实地说出自己对哪方面不了解，并不说明自己比别人差。', options: ['敢', '想', '得'], answer: 0,
            explanation: '敢 + 诚实地说出; ôn lại 诚实 (Bài 10), 并不 (Bài 4).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你怎么敢在这么冷的天穿这么少？小心咳嗽得更厉害。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1); ôn lại 咳嗽 (Bài 7), 厉害 (Bài 11).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '她打网球打得特别棒，没有人敢不跟她比赛。（nghĩa: không ai dám thi với cô ấy）', isCorrect: false, correctVersion: '她打网球打得特别棒，没有人敢跟她比赛。',
            explanation: 'Phủ định đặt trước 敢 (不敢 / 没有人敢), không đặt sau 敢 khi muốn nói "không ai dám" — bài luyện tập SGK (2); 棒 (Bài 15).' },
          { type: 'sort', context: 'Sắp xếp câu: giáo viên nên tạo môi trường học vui vẻ cho học sinh, để các em dám nói ra ý kiến của mình.',
            words: ['老师', '应该', '为', '学生', '提供', '一种', '愉快', '的', '学习', '环境', '，', '让', '他们', '敢', '说出', '自己', '的', '看法', '。'], answer: '老师应该为学生提供一种愉快的学习环境，让他们敢说出自己的看法。',
            explanation: '敢 — bài luyện tập SGK (3); ôn lại 提供 (Bài 6), 愉快 (Bài 8), 看法 (Bài 15).' },
          { type: 'sort', context: 'Sắp xếp câu: hồi nhỏ tôi rất sợ tiêm, bây giờ đã dám một mình đi bệnh viện rồi.',
            words: ['小时候', '我', '特别', '害怕', '打针', '，', '现在', '已经', '敢', '一个', '人', '去', '医院', '了', '。'], answer: '小时候我特别害怕打针，现在已经敢一个人去医院了。',
            explanation: '敢 + động từ; ôn lại 害怕 (Bài 9), 打针 (Bài 15).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 敢.',
            promptLang: 'vi', prompt: 'Cô ấy hơi nhút nhát, trên lớp không dám giơ tay trả lời câu hỏi.',
            answer: '她有点儿害羞，上课时不敢举手回答问题。', answerPy: 'Tā yǒudiǎnr hàixiū, shàng kè shí bù gǎn jǔ shǒu huídá wèntí.',
            explanation: '不敢 + 举手; ôn lại 害羞 (Bài 15), 举 (Bài 11).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Bạn dám từ chối yêu cầu của bạn thân không? — Dám, vì từ chối cũng là có trách nhiệm với bạn bè.',
            answer: '你敢拒绝好朋友的要求吗？——敢，因为拒绝也是对朋友负责。', answerPy: 'Nǐ gǎn jùjué hǎo péngyou de yāoqiú ma? — Gǎn, yīnwèi jùjué yě shì duì péngyou fùzé.',
            explanation: '敢……吗 + 拒绝 (Bài 14), 负责 (Bài 10).' },
        ] },
    ],
    '/lessons/hsk4-bai-17.html': [
      { point: '「倒」',
        items: [
          { context: 'Hoàn thành câu: đi Trường Thành thì đúng là ý hay, vậy mai chúng ta đi nhé.',
            pre: '去长城', blank: '倒', post: '是一个好主意，那我们明天去吧。', options: ['倒', '却', '可'], answer: 0,
            explanation: '倒是 — nhượng bộ/khẳng định một phần; ôn lại 主意 (Bài 6).' },
          { context: 'Hoàn thành câu: tôi tưởng đi taxi nhanh hơn, không ngờ lại còn chậm hơn đi xe đạp.',
            pre: '我以为坐出租车会快些，没想到', blank: '倒', post: '比骑车还慢。', options: ['倒', '就', '才'], answer: 0,
            explanation: '倒 — trái với dự đoán; ôn lại 以为 (Bài 4), 比……还 (Bài 5).' },
          { context: 'Hoàn thành câu: làm phiền rót cho tôi cốc cà phê, tôi buồn ngủ chết mất.',
            pre: '麻烦你给我', blank: '倒', post: '杯咖啡吧，困死我了。', options: ['倒', '拿', '做'], answer: 0,
            explanation: '倒 — động từ "rót"; ôn lại 困 (Bài 4), 死 (Bài 12).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你说得倒是容易，做起来可就难了！', isCorrect: true,
            explanation: 'Câu đúng — 倒是 ngữ khí trách móc (SGK ví dụ 4); ôn lại 起来 (Bài 15), 可 (Bài 16).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我的房间不大，倒挺干净的却。', isCorrect: false, correctVersion: '我的房间不大，倒挺干净的。',
            explanation: '倒 đứng trước vị ngữ (倒挺干净的), không thêm 却 ở cuối — bài luyện tập SGK (2); ôn lại 挺……的 (Bài 6).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi rót cho bạn cốc trà nhé. — Được, bạn muốn uống hồng trà hay trà xanh?',
            words: ['我', '给', '你', '倒', '杯', '茶', '吧', '。', '好的', '。', '你', '想', '喝', '红茶', '还是', '绿茶', '？'], answer: '我给你倒杯茶吧。好的。你想喝红茶还是绿茶？',
            explanation: '倒杯茶 — bài luyện tập SGK (1); ôn lại 还是 (câu hỏi lựa chọn).' },
          { type: 'sort', context: 'Sắp xếp câu: con ngài nói với tôi muốn tốt nghiệp đại học đi làm diễn viên. — Nó nói thì hay đấy, nhưng chưa bao giờ luyện biểu diễn.',
            words: ['他', '倒是', '说', '得', '好听', '，', '可', '从来', '没', '练习', '过', '表演', '。'], answer: '他倒是说得好听，可从来没练习过表演。',
            explanation: '倒是……，可…… — bài luyện tập SGK (3); ôn lại 从来 (Bài 1), 表演 (Bài 13), 演员 (Bài 13).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 倒.',
            promptLang: 'vi', prompt: 'Sở thú thì rất náo nhiệt, chỉ là gấu trúc phần lớn đang ngủ.',
            answer: '动物园倒是很热闹，就是熊猫大多在睡觉。', answerPy: 'Dòngwùyuán dào shì hěn rènao, jiù shì xióngmāo dàduō zài shuì jiào.',
            explanation: '倒是……就是…… + 热闹 (từ mới).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Tôi tưởng ngoại ô sẽ lạnh, không ngờ lại ấm hơn thành phố.',
            answer: '我以为郊区会很冷，没想到倒比城市还暖和。', answerPy: 'Wǒ yǐwéi jiāoqū huì hěn lěng, méi xiǎngdào dào bǐ chéngshì hái nuǎnhuo.',
            explanation: '没想到倒比……还 + 郊区 (Bài 16), 暖和 (từ mới).' },
        ] },
      { point: '「干」',
        items: [
          { context: 'Hoàn thành câu: mỗi lần bạn bảo nó làm gì, nó làm như hiểu lời bạn.',
            pre: '每次你让它', blank: '干', post: '什么，它就像能听懂你的话一样去做。', options: ['干', '弄', '搞'], answer: 0,
            explanation: '干什么 — khẩu ngữ "làm gì"; ôn lại 像……一样 (Bài 6).' },
          { context: 'Hoàn thành câu: cảm ơn, tôi nhất định sẽ làm tốt.',
            pre: '谢谢您，我一定会好好儿', blank: '干', post: '的。', options: ['干', '干净', '弄'], answer: 0,
            explanation: '好好儿干 — làm cho tốt; ôn lại 一定 (Bài 15).' },
          { context: 'Hoàn thành câu: tóc ướt hết, lau khô tóc trước đi, đừng để cảm.',
            pre: '头发都湿了，先把头发擦', blank: '干', post: '，别感冒了。', options: ['干', '好', '完'], answer: 0,
            explanation: '擦干 (gān) — bổ ngữ kết quả "khô"; ôn lại 湿 (Bài 7), 擦 (Bài 11).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '新来的服务员干得很不错，来吃饭的客人都十分满意。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (2): 干得很不错; ôn lại 十分 (Bài 13), 满意 (Bài 6).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '这牛肉干(gàn)味道真不错，在哪儿买的？', isCorrect: false, correctVersion: '这牛肉干(gānr)味道真不错，在哪儿买的？',
            explanation: '干 trong 牛肉干 là danh từ "đồ khô", đọc gān(r), không đọc gàn — SGK ví dụ (5).' },
          { type: 'sort', context: 'Sắp xếp câu: bạn đang làm gì thế? Cần tôi giúp không? — Tôi muốn treo bản đồ Trung Quốc lên bức tường này.',
            words: ['你', '在', '干', '什么', '呢', '？', '要', '我', '帮忙', '吗', '？', '我', '想', '在', '这面', '墙', '上', '挂', '一张', '中国', '地图', '。'], answer: '你在干什么呢？要我帮忙吗？我想在这面墙上挂一张中国地图。',
            explanation: '干什么 — bài luyện tập SGK (1); ôn lại 挂 (Bài 16), 地图.' },
          { type: 'sort', context: 'Sắp xếp câu: các bạn có thời gian thì giúp Tiểu Vương nhiều vào, việc trong tay cậu ấy vừa nhiều vừa khó, một mình e là làm không xong.',
            words: ['你们', '有', '时间', '的话', '多', '帮帮', '小王', '，', '他', '手里', '的', '工作', '又', '多', '又', '难', '，', '一个', '人', '恐怕', '干不完', '。'], answer: '你们有时间的话多帮帮小王，他手里的工作又多又难，一个人恐怕干不完。',
            explanation: '干不完 — bài luyện tập SGK (3); ôn lại 又……又 (Bài 1), 恐怕 (Bài 16).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 干.',
            promptLang: 'vi', prompt: 'Hướng dẫn viên công việc không dễ, nhưng anh ấy làm rất vui vẻ.',
            answer: '导游的工作不容易，但是他干得很愉快。', answerPy: 'Dǎoyóu de gōngzuò bù róngyì, dànshì tā gàn de hěn yúkuài.',
            explanation: '干得 + bổ ngữ; ôn lại 导游 (Bài 16), 愉快 (Bài 8).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Ngoài trời mưa to, quần áo phơi hai ngày vẫn chưa khô.',
            answer: '外面下大雨，衣服晾了两天仍然没干。', answerPy: 'Wàimiàn xià dà yǔ, yīfu liàngle liǎng tiān réngrán méi gān.',
            explanation: '干 (gān, khô) + 仍然 (ngữ pháp bài).' },
        ] },
      { point: '「趟」so sánh với 「次」',
        items: [
          { context: 'Hoàn thành câu: tháng trước tôi đi sở thú Bắc Kinh một chuyến.',
            pre: '上个月我去了', blank: '趟', post: '北京动物园，那里约有500种动物。', options: ['趟', '遍', '场'], answer: 0,
            explanation: '去了一趟 — hành động đi-về; ôn lại 遍 (Bài 13).' },
          { context: 'Hoàn thành câu: trưa tôi gọi cho bạn mấy cuộc, sao bạn không nghe máy?',
            pre: '中午我给你打了好几', blank: '次', post: '电话，你怎么都不接呢？', options: ['次', '趟', '遍'], answer: 0,
            explanation: 'Bài 做一做 SGK (3): 打电话 không phải hành động đi-về → chỉ dùng 次; ôn lại 好几 (Bài 11), 接 (Bài 4).' },
          { context: 'Hoàn thành câu: anh ấy không kịp chuyến xe buýt cuối, đành đi taxi về nhà.',
            pre: '他没赶上最后一', blank: '趟', post: '公共汽车，只好坐出租车回家了。', options: ['趟', '次', '辆'], answer: 0,
            explanation: 'Bài 做一做 SGK (4): chuyến xe theo tuyến → 趟 (≈ 辆); 次 không dùng. Ôn lại 赶上 (Bài 15), 只好 (Bài 3).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '去年放暑假的时候，我去了一趟北京动物园。', isCorrect: true,
            explanation: 'Câu đúng — bài 做一做 SGK (1): 趟/次 đều được với 去; 放暑假 từ mới.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '西红柿鸡蛋汤的做法很简单，我保证你一趟就能学会。', isCorrect: false, correctVersion: '西红柿鸡蛋汤的做法很简单，我保证你一次就能学会。',
            explanation: 'Bài 做一做 SGK (5): 学会 không phải hành động đi-về → dùng 次, không dùng 趟; ôn lại 保证 (Bài 12), 汤 (Bài 7).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi ra siêu thị một chuyến, bạn có gì cần mua không? — Mua ít bánh quy và sô-cô-la về nhé.',
            words: ['我', '去', '一趟', '超市', '，', '你', '有', '什么', '要', '买', '的', '吗', '？', '买', '点儿', '饼干', '和', '巧克力', '回来', '吧', '。'], answer: '我去一趟超市，你有什么要买的吗？买点儿饼干和巧克力回来吧。',
            explanation: '去一趟 — bài luyện tập SGK (1); ôn lại 饼干 (Bài 7), 巧克力 (Bài 7).' },
          { type: 'sort', context: 'Sắp xếp câu: giám đốc, tôi muốn về nhà một chuyến, xin nghỉ một ngày được không? — Đương nhiên được. Sao thế? Người không khỏe à?',
            words: ['经理', '，', '我', '想', '回', '一趟', '家', '，', '我', '想', '请', '一天', '假', '可以', '吗', '？', '当然', '可以', '。', '怎么', '了', '？', '身体', '不', '舒服', '？'], answer: '经理，我想回一趟家，我想请一天假可以吗？当然可以。怎么了？身体不舒服？',
            explanation: '回一趟家 — bài luyện tập SGK (2); ôn lại 请假 (Bài 4).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 趟.',
            promptLang: 'vi', prompt: 'Nghỉ đông năm nay tôi đi Quảng Đông một chuyến, dù là mùa đông nhưng ở đó rất ấm, còn ăn được nhiều hoa quả tươi.',
            answer: '今年寒假我去了一趟广东，尽管现在是冬天，但那儿非常暖和，还能吃到许多新鲜的水果。', answerPy: 'Jīnnián hánjià wǒ qùle yí tàng Guǎngdōng, jǐnguǎn xiànzài shì dōngtiān, dàn nàr fēicháng nuǎnhuo, hái néng chīdào xǔduō xīnxiān de shuǐguǒ.',
            explanation: 'Bài luyện tập SGK (3); ôn lại 寒假 (Bài 15), 尽管 (Bài 9), 新鲜 (Bài 7); 暖和 từ mới.' },
          { type: 'translate', context: 'Dịch câu sau, phân biệt 趟 / 次.',
            promptLang: 'vi', prompt: 'Trên đường về tôi tiện thể ghé ngân hàng một chuyến, chuyện này tôi đã nói với bạn hai lần rồi.',
            answer: '回来的路上我顺便去了趟银行，这件事我已经跟你说过两次了。', answerPy: 'Huílai de lùshang wǒ shùnbiàn qùle tàng yínháng, zhè jiàn shì wǒ yǐjīng gēn nǐ shuōguo liǎng cì le.',
            explanation: '去了趟 (đi-về) vs 说过两次 (hành động nói); ôn lại 顺便 (Bài 4).' },
        ] },
      { point: '「为了……而……」',
        items: [
          { context: 'Hoàn thành câu: cây cối sẽ cạnh tranh vì ánh nắng, không khí và nước.',
            pre: '植物会为了阳光、空气和水', blank: '而', post: '竞争。', options: ['而', '才', '就'], answer: 0,
            explanation: '为了……而…… — mục đích + hành động; 竞争 từ mới.' },
          { context: 'Hoàn thành câu: gió bắc và gió nam vì so ai có năng lực hơn mà cãi nhau.',
            pre: '北风与南风', blank: '为了', post: '比谁更有能力而吵了起来。', options: ['为了', '由于', '因为'], answer: 0,
            explanation: '为了 + mục đích + 而; ôn lại 吵 (Bài 8), 起来 (Bài 15).' },
          { context: 'Hoàn thành câu: nhiều động thực vật vì bảo vệ mình mà thay đổi màu sắc hoặc hình dáng.',
            pre: '不少动物和植物为了保护自己', blank: '而', post: '改变身体的颜色或样子。', options: ['而', '却', '但'], answer: 0,
            explanation: '为了……而改变; ôn lại 保护 (Bài 12), 改变 (Bài 8).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '胖一点儿没关系，健康最重要。千万不要为了减肥而不吃饭。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1): 为了减肥而不吃饭; ôn lại 千万 (Bài 15), 减肥 (Bài 7).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我们不应该而为了钱工作，应该让钱为我们工作。', isCorrect: false, correctVersion: '我们不应该为了钱而工作，应该让钱为我们工作。',
            explanation: 'Trật tự: 为了 + mục đích + 而 + động từ (为了钱而工作) — bài luyện tập SGK (2).' },
          { type: 'sort', context: 'Sắp xếp câu: đừng vì bận công việc mà quên bố mẹ, tìm thời gian ở bên họ, hoặc gọi điện, đừng đợi đến lúc không kịp mới hối hận.',
            words: ['不要', '为了', '忙', '工作', '而', '忘了', '父母', '，', '找', '时间', '陪陪', '父母', '吧', '，', '或者', '给', '他们', '打', '个', '电话', '，', '不要', '等到', '来不及', '的', '时候', '才', '感到', '后悔', '。'], answer: '不要为了忙工作而忘了父母，找时间陪陪父母吧，或者给他们打个电话，不要等到来不及的时候才感到后悔。',
            explanation: '为了……而 — bài luyện tập SGK (3); ôn lại 陪 (Bài 3), 来不及 (Bài 4), 后悔 (Bài 9).' },
          { type: 'sort', context: 'Sắp xếp câu: để tỏ tình hữu nghị, Trung Quốc tặng gấu trúc làm quà cho một số nước khác.',
            words: ['为了', '表示', '友好', '，', '中国', '把', '大熊猫', '作为', '礼物', '送给', '其他', '一些', '国家', '。'], answer: '为了表示友好，中国把大熊猫作为礼物送给其他一些国家。',
            explanation: '为了 đầu câu (Bài 4) — so sánh với 为了……而; ôn lại 友好 (Bài 12), 作为 (Bài 10).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 为了……而…….',
            promptLang: 'vi', prompt: 'Có người vì kiếm tiền mà làm hại động vật, điều này không nên chút nào.',
            answer: '有的人为了赚钱而伤害动物，这一点儿也不应该。', answerPy: 'Yǒude rén wèile zhuàn qián ér shānghài dòngwù, zhè yìdiǎnr yě bù yīnggāi.',
            explanation: '为了赚钱而伤害; ôn lại 赚 (Bài 10), 一点儿也不 (Bài 6).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Để bảo vệ rừng, chúng ta nên tiết kiệm giấy, đừng vì tiện lợi mà lãng phí tài nguyên.',
            answer: '为了保护森林，我们应该节约用纸，不要为了方便而浪费资源。', answerPy: 'Wèile bǎohù sēnlín, wǒmen yīnggāi jiéyuē yòng zhǐ, búyào wèile fāngbiàn ér làngfèi zīyuán.',
            explanation: '为了……而浪费; ôn lại 节约 (Bài 12), 浪费 (Bài 14); 森林 từ mới.' },
        ] },
      { point: '「仍然」',
        items: [
          { context: 'Hoàn thành câu: cho dù ở đáy biển sâu mấy kilômét vẫn có thể nhìn thấy đồ vật.',
            pre: '就算在几公里深的海底也', blank: '仍然', post: '能看到东西。', options: ['仍然', '竟然', '突然'], answer: 0,
            explanation: '就算……也仍然 — vẫn như cũ; ôn lại 就算 (Bài 11).' },
          { context: 'Hoàn thành câu: người thông minh hơn động vật, nhưng động vật vẫn có nhiều điểm đáng học.',
            pre: '人比动物聪明，但动物', blank: '仍然', post: '有很多值得人学习的地方。', options: ['仍然', '既然', '果然'], answer: 0,
            explanation: '仍然 — tình huống không thay đổi; ôn lại 值得 (Bài 7).' },
          { context: 'Hoàn thành câu: nếu sau 90 phút vẫn 0-0, theo quy định có thể đá hiệp phụ.',
            pre: '足球决赛时，如果90分钟后', blank: '仍然', post: '是0比0，按照规定，可以进行加时赛来决定输赢。', options: ['仍然', '竟然', '居然'], answer: 0,
            explanation: '仍然是 — vẫn là; ôn lại 按照 (Bài 4), 规定 (Bài 12), 输 (Bài 16).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我又跟我丈夫谈了这件事，他仍然不同意。——你再跟他好好儿商量一下。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1); ôn lại 商量 (Bài 12), 丈夫.' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '真是没想到，四年的大学生活仍然这么快就结束了！', isCorrect: false, correctVersion: '真是没想到，四年的大学生活竟然这么快就结束了！',
            explanation: 'Bài 做一做 SGK (1): ngạc nhiên ngoài dự đoán → 竟然 (Bài 6), không phải 仍然 (vẫn như cũ).' },
          { type: 'sort', context: 'Sắp xếp câu: dù đây chỉ là một hiểu lầm, cô ấy vẫn rất giận.',
            words: ['尽管', '这', '只是', '一场', '误会', '，', '她', '仍然', '很', '生气', '。'], answer: '尽管这只是一场误会，她仍然很生气。',
            explanation: '尽管……仍然 — bài luyện tập SGK (2); ôn lại 尽管 (Bài 9), 误会 (Bài 12).' },
          { type: 'sort', context: 'Sắp xếp câu: người 70 tuổi còn có ước mơ, vẫn trẻ; người 20 tuổi đã từ bỏ lý tưởng, tim đã già rồi.',
            words: ['一个', '70岁', '还', '有', '梦', '的', '老人', '，', '仍然', '是', '年轻', '的', '；', '一个', '20岁', '就', '放弃', '了', '理想', '的', '人', '，', '心', '已经', '老', '了', '。'], answer: '一个70岁还有梦的老人，仍然是年轻的；一个20岁就放弃了理想的人，心已经老了。',
            explanation: '仍然 — bài luyện tập SGK (3); ôn lại 放弃/理想 (Bài 9); 梦 từ mới.' },
          { type: 'translate', context: 'Dịch câu sau, dùng 仍然.',
            promptLang: 'vi', prompt: 'Nghỉ hè năm ngoái tôi đi Vân Nam một chuyến. Giờ nhớ lại, tôi vẫn thấy đó là chuyến đi vui vẻ, rất khó quên.',
            answer: '去年放暑假的时候我去了一趟云南。现在回忆起来，我仍然觉得那是一次愉快的旅行，非常难忘。', answerPy: 'Qùnián fàng shǔjià de shíhou wǒ qùle yí tàng Yúnnán. Xiànzài huíyì qilai, wǒ réngrán juéde nà shì yí cì yúkuài de lǚxíng, fēicháng nánwàng.',
            explanation: 'SGK 扩展 (3); ôn lại 回忆 (Bài 8), 起来 (Bài 15), 趟 (ngữ pháp bài), 难忘.' },
          { type: 'translate', context: 'Dịch câu sau, phân biệt 仍然 / 竟然 / 既然 / 突然.',
            promptLang: 'vi', prompt: 'Chỉ cần bạn không từ bỏ nỗ lực, thì vẫn có hy vọng. Bạn sẽ luôn tìm được con đường phù hợp.',
            answer: '只要你不放弃努力，就仍然有希望。你总会找到一条合适的路。', answerPy: 'Zhǐyào nǐ bú fàngqì nǔlì, jiù réngrán yǒu xīwàng. Nǐ zǒng huì zhǎodào yì tiáo héshì de lù.',
            explanation: 'Bài 做一做 SGK (3): 仍然有希望; ôn lại 只要……就 (Bài 8), 合适 (Bài 15).' },
        ] },
    ],
    '/lessons/hsk4-bai-18.html': [
      { point: '「是否」',
        items: [
          { context: 'Hoàn thành câu: nó còn nhỏ thế, tôi không biết nó có đọc hiểu được không.',
            pre: '不过她这么小，我不知道她', blank: '是否', post: '能读懂。', options: ['是否', '否则', '到底'], answer: 0,
            explanation: '不知道……是否…… — nghi vấn gián tiếp; ôn lại 不过 (Bài 10), 否则 (Bài 11).' },
          { context: 'Hoàn thành câu: hôn nhân có hạnh phúc hay không chẳng liên quan đến điều này.',
            pre: '实际上，婚姻', blank: '是否', post: '幸福跟这个没有关系。', options: ['是否', '是不是吗', '也许'], answer: 0,
            explanation: '婚姻是否幸福 làm chủ ngữ; ôn lại 实际上 (Bài 10), 幸福 (Bài 10).' },
          { context: 'Hoàn thành câu: cũng có người chủ yếu xem mình có thích công việc đó hay không.',
            pre: '当然，也有人主要看自己', blank: '是否', post: '喜欢这份工作。', options: ['是否', '难道', '恐怕'], answer: 0,
            explanation: '看……是否……; ôn lại 主要 (Bài 6), 份 (Bài 10).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '麻烦你帮我改签到后天的同一航班。——您稍等，我查一下是否还有座位。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1): 查一下是否还有; ôn lại 航班 (Bài 4), 座位 (Bài 3).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '你是否能来吗？', isCorrect: false, correctVersion: '你是否能来？',
            explanation: '是否 đã mang nghĩa "có … không" nên KHÔNG thêm 吗 ở cuối câu.' },
          { type: 'sort', context: 'Sắp xếp câu: khi nghe phê bình, nên bình tĩnh nghĩ xem ý kiến hay đề nghị họ đưa ra có đúng hay không.',
            words: ['当', '我们', '听到', '批评', '时', '，', '应该', '冷静', '地', '想想', '他们', '提出', '的', '意见', '或者', '建议', '是否', '正确', '。'], answer: '当我们听到批评时，应该冷静地想想他们提出的意见或者建议是否正确。',
            explanation: '是否正确 — bài luyện tập SGK (2); ôn lại 批评 (Bài 15), 冷静 (Bài 16), 意见 (Bài 12).' },
          { type: 'sort', context: 'Sắp xếp câu: một người có kiên trì được hay không, có ảnh hưởng quan trọng đến việc họ gần hay xa thành công.',
            words: ['一个', '人', '是否', '能', '坚持', '，', '对于', '他', '离', '成功', '的', '远近', '有着', '重要', '的', '影响', '。'], answer: '一个人是否能坚持，对于他离成功的远近有着重要的影响。',
            explanation: '是否 làm chủ ngữ — bài luyện tập SGK (3); ôn lại 坚持 (Bài 9), 对于 (Bài 12).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 是否.',
            promptLang: 'vi', prompt: 'Tôi không biết thư mời đã fax đến hay chưa, để tôi tra thử.',
            answer: '我不知道邀请信是否已经传真过来了，我查一下。', answerPy: 'Wǒ bù zhīdào yāoqǐngxìn shìfǒu yǐjīng chuánzhēn guòlai le, wǒ chá yíxià.',
            explanation: '是否 + 已经; ôn lại 传真 (Bài 16), 邀请 (Bài 6).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Trang web này có an toàn hay không, chúng ta phải cẩn thận xem xét trước rồi mới thanh toán.',
            answer: '这个网站是否安全，我们要先仔细看看，然后再付款。', answerPy: 'Zhège wǎngzhàn shìfǒu ānquán, wǒmen yào xiān zǐxì kànkan, ránhòu zài fù kuǎn.',
            explanation: '是否安全 + 网站/付款 (từ mới); ôn lại 仔细 (Bài 12), 先……然后再 (Bài 3).' },
        ] },
      { point: '「受不了」',
        items: [
          { context: 'Hoàn thành câu: ngày nào cũng nhìn màn hình máy tính, mắt thật sự chịu không nổi.',
            pre: '不过天天对着电脑看，眼睛实在', blank: '受不了', post: '。', options: ['受不了', '受得了', '难受'], answer: 0,
            explanation: '受不了 — chịu không nổi; ôn lại 实在 (Bài 11).' },
          { context: 'Hoàn thành câu: tôi thật chịu không nổi bạn, rốt cuộc bạn còn dạo bao lâu?',
            pre: '我真的', blank: '受不了', post: '你了，你到底还要逛多久？', options: ['受不了', '受得了', '看不了'], answer: 0,
            explanation: '受不了 + đại từ; ôn lại 到底 (Bài 16), 逛 (Bài 5).' },
          { context: 'Hoàn thành câu: thật chịu không nổi thầy như vậy! Một động tác đơn giản bắt luyện hai ba chục lần.',
            pre: '真', blank: '受不了', post: '这样的老师！一个简单的动作让我们练二三十遍。', options: ['受不了', '了不起', '受欢迎'], answer: 0,
            explanation: '受不了 + cụm danh từ; ôn lại 动作 (Bài 7), 遍 (Bài 13).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我真受不了你的房间了，你桌子上太乱了，找时间好好儿整理一下。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1); ôn lại 乱 (Bài 14), 整理 (Bài 15).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '我很受不了这种压力。', isCorrect: false, correctVersion: '我实在受不了这种压力。',
            explanation: '受不了 là bổ ngữ khả năng, không dùng 很 bổ nghĩa; dùng 真/实在. Ôn lại 压力 (Bài 5).' },
          { type: 'sort', context: 'Sắp xếp câu: mở cửa sổ ra đi, tôi nóng chịu không nổi rồi. — Do bạn mặc nhiều quá, cởi cái áo ngoài ra đi.',
            words: ['开', '一下', '窗户', '吧', '，', '我', '热', '得', '受不了', '了', '。', '是', '你', '穿', '得', '太', '多', '了', '，', '把', '外面', '那件', '衣服', '脱', '了', '吧', '。'], answer: '开一下窗户吧，我热得受不了了。是你穿得太多了，把外面那件衣服脱了吧。',
            explanation: '热得受不了 — bài luyện tập SGK (2); ôn lại 脱 (Bài 7), câu chữ 把.' },
          { type: 'sort', context: 'Sắp xếp câu: sao bạn lại muốn đổi việc? Thu nhập ở đây chẳng phải khá cao sao? — Nhưng tôi chịu không nổi việc ngày nào cũng tăng ca.',
            words: ['你', '怎么', '又', '想', '换', '工作', '了', '？', '这儿', '的', '收入', '不是', '挺', '高', '的', '吗', '？', '可是', '我', '受不了', '天天', '加班', '。'], answer: '你怎么又想换工作了？这儿的收入不是挺高的吗？可是我受不了天天加班。',
            explanation: '受不了 + cụm động từ — bài luyện tập SGK (3); ôn lại 收入 (Bài 10), 不是……吗 (Bài 6), 加班 (Bài 5).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 受不了.',
            promptLang: 'vi', prompt: 'Trời nóng chịu không nổi, chúng ta đến ngoại ô nghỉ mát đi.',
            answer: '天气热得受不了，咱们去郊区凉快凉快吧。', answerPy: 'Tiānqì rè de shòubuliǎo, zánmen qù jiāoqū liángkuai liángkuai ba.',
            explanation: '热得受不了 + 郊区 (Bài 16) + 凉快 (Bài 17).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Cô ấy không chịu nổi thái độ của giám đốc, thế là quyết định rời công ty.',
            answer: '她受不了经理的态度，于是决定离开公司。', answerPy: 'Tā shòubuliǎo jīnglǐ de tàidu, yúshì juédìng líkāi gōngsī.',
            explanation: '受不了 + 态度 (Bài 8) + 于是 (Bài 14).' },
        ] },
      { point: '「接着」so sánh với 「然后」',
        items: [
          { context: 'Hoàn thành câu: ngay sau đó lại mơ thấy tôi nhảy lên xe, cùng cảnh sát bắt kẻ xấu.',
            pre: '突然开过来一辆车，非常危险，', blank: '接着', post: '又梦见我跳到车上，跟警察一起抓住了一个坏人。', options: ['接着', '先', '于是'], answer: 0,
            explanation: '接着又 — nối tiếp ngay; ôn lại 突然 (Bài 8), 跳 (Bài 11).' },
          { context: 'Hoàn thành câu: tôi nói xong rồi, bạn nói tiếp đi.',
            pre: '我说完了，你', blank: '接着', post: '说吧。', options: ['接着', '然后', '先'], answer: 0,
            explanation: 'Bài 做一做 SGK (2): chủ ngữ khác nhau (我 → 你) → chỉ dùng 接着, không dùng 然后.' },
          { context: 'Hoàn thành câu: bạn lên mạng xem trước đi, so sánh nhiều vào, rồi hãy quyết định.',
            pre: '你先上网看看吧，多比较比较，', blank: '然后', post: '再做决定。', options: ['然后', '接着', '于是'], answer: 0,
            explanation: 'Bài 做一做 SGK (3): 先……然后再 — cấu trúc cố định với 然后; ôn lại 比较 (Bài 5), 决定 (Bài 5).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '妹妹刚参加工作一年就买了房子，接着就结了婚，今年又生了一个小男孩儿，生活得很幸福。', isCorrect: true,
            explanation: 'Câu đúng — bài 做一做 SGK (1): 接着/然后 đều được; ôn lại 结婚 (Bài 7), 幸福 (Bài 10).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '今天的课就到这儿，下节课然后讲这个问题。', isCorrect: false, correctVersion: '今天的课就到这儿，下节课接着讲这个问题。',
            explanation: 'Bài 做一做 SGK (5): "tiếp tục giảng" → 接着讲; 然后 không có nghĩa "tiếp tục". Ôn lại 节 (Bài 12).' },
          { type: 'sort', context: 'Sắp xếp câu: tôi vừa đi chơi tennis, nóng chết mất, mau lấy khăn cho tôi. — Lau mồ hôi xong tiếp theo uống cốc nước đi.',
            words: ['我', '刚才', '去', '打', '网球', '了', '，', '热死', '我', '了', '，', '快', '给', '我', '拿', '条', '毛巾', '吧', '。', '擦', '完', '汗', '接着', '喝', '杯', '水', '吧', '。'], answer: '我刚才去打网球了，热死我了，快给我拿条毛巾吧。擦完汗接着喝杯水吧。',
            explanation: '接着 — bài luyện tập SGK (1); ôn lại 毛巾 (Bài 14), 擦 (Bài 11), 汗 (Bài 7).' },
          { type: 'sort', context: 'Sắp xếp câu: vào cửa hàng, vợ mua một chiếc áo sơ mi trước, ngay sau đó lại mua một chiếc quần.',
            words: ['进', '了', '商店', '，', '妻子', '先', '买', '了', '一件', '衬衫', '，', '接着', '又', '买', '了', '一条', '裤子', '。'], answer: '进了商店，妻子先买了一件衬衫，接着又买了一条裤子。',
            explanation: 'Bài 做一做 SGK (4): 先……接着又 (然后 cũng được); ôn lại 衬衫 (Bài 5), 裤子 (Bài 5).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 接着.',
            promptLang: 'vi', prompt: 'Ngày nào anh ấy cũng dậy sớm tập thể dục, ngay sau đó đi làm.',
            answer: '他每天很早起床去锻炼，接着就去上班。', answerPy: 'Tā měi tiān hěn zǎo qǐ chuáng qù duànliàn, jiēzhe jiù qù shàng bān.',
            explanation: 'Bài luyện tập SGK (2); ôn lại 锻炼 (Bài 7).' },
          { type: 'translate', context: 'Dịch câu sau, phân biệt 接着 / 然后.',
            promptLang: 'vi', prompt: 'Gặp từ không biết, tôi sẽ tra từ điển ngay, sau đó ghi vào sổ, rồi tiếp tục đọc.',
            answer: '遇到不认识的词语，我会马上查词典，然后写在本子上，接着继续读。', answerPy: 'Yùdào bú rènshi de cíyǔ, wǒ huì mǎshàng chá cídiǎn, ránhòu xiě zài běnzi shang, jiēzhe jìxù dú.',
            explanation: 'Bài luyện tập SGK (3): 然后 (trình tự) + 接着 (tiếp tục); ôn lại 词典 (Bài 3), 继续 (Bài 13).' },
        ] },
      { point: '「除此以外」',
        items: [
          { context: 'Hoàn thành câu: ngoài ra, bạn còn có thể dùng nó để nghe nhạc, xem phim, thanh toán mua sắm.',
            pre: '打电话、发短信已经成了人们普遍使用的联系方法。', blank: '除此以外', post: '，你还可以用它来听音乐、看电影、付款购物等。', options: ['除此以外', '除了以外', '另外此'], answer: 0,
            explanation: '除此以外 — ngoài điều đã nói; ôn lại 普遍 (Bài 13), 用……来 (Bài 15).' },
          { context: 'Hoàn thành câu: hai anh em rất giống nhau, nhưng ngoài điều đó hầu như không tìm được điểm chung nào khác.',
            pre: '兄弟俩长得很像，但', blank: '除此以外', post: '几乎再找不到其他共同点。', options: ['除此以外', '除了', '此外之'], answer: 0,
            explanation: '除此以外几乎再找不到……; ôn lại 俩 (Bài 5), 几乎 (Bài 2), 共同 (Bài 10).' },
          { context: 'Hoàn thành câu: người miền Bắc Tết thích ăn sủi cảo vì ngon, ngoài ra còn vì cả nhà ngồi gói sủi cảo là dịp giao lưu.',
            pre: '是因为饺子味道鲜美，', blank: '除此以外', post: '，还因为过年时全家人坐在一起包饺子，是很好的交流机会。', options: ['除此以外', '因此', '于是'], answer: 0,
            explanation: '除此以外，还因为……; ôn lại 味道 (Bài 7), 交流 (Bài 5).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '骑自行车是一种很好的、锻炼身体的方式。除此以外，它还不会污染环境。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1); ôn lại 方式 (từ mới), 污染 (Bài 14).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '除此以外，手机可以打电话，还可以看电影。', isCorrect: false, correctVersion: '手机可以打电话。除此以外，还可以看电影。',
            explanation: '此 phải chỉ nội dung ĐÃ NÓI TRƯỚC ĐÓ — 除此以外 không đứng đầu đoạn khi chưa có nội dung A.' },
          { type: 'sort', context: 'Sắp xếp câu: mùa đông da dễ khô, phụ nữ đặc biệt chú ý bảo vệ da. Nên chọn sản phẩm dưỡng ẩm, ngoài ra còn nên ăn nhiều hoa quả.',
            words: ['冬季', '皮肤', '往往', '容易', '变得', '干燥', '，', '应该', '选择', '保湿', '的', '护肤品', '，', '除此以外', '，', '还', '要', '多', '吃', '水果', '。'], answer: '冬季皮肤往往容易变得干燥，应该选择保湿的护肤品，除此以外，还要多吃水果。',
            explanation: '除此以外 — bài luyện tập SGK (2); ôn lại 皮肤 (Bài 7), 往往 (Bài 8), 干燥 (Bài 7).' },
          { type: 'sort', context: 'Sắp xếp câu: khi mua đồ, khách hàng đương nhiên cân nhắc chất lượng và giá cả, ngoài ra còn xem dịch vụ sau bán có tốt không.',
            words: ['买', '东西', '时', '，', '顾客', '当然', '会', '考虑', '它', '的', '质量', '和', '价格', '，', '除此以外', '，', '还', '会', '看', '售后', '服务', '是否', '好', '。'], answer: '买东西时，顾客当然会考虑它的质量和价格，除此以外，还会看售后服务是否好。',
            explanation: '除此以外 + 是否 — bài luyện tập SGK (3); ôn lại 顾客/质量 (Bài 6), 价格 (Bài 5).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 除此以外.',
            promptLang: 'vi', prompt: 'Nhật ký trên mạng tiện cho giao lưu. Ngoài ra, còn tiết kiệm giấy, bảo vệ môi trường.',
            answer: '网上日记方便大家的交流。除此以外，还能节约用纸，保护环境。', answerPy: 'Wǎngshang rìjì fāngbiàn dàjiā de jiāoliú. Chú cǐ yǐwài, hái néng jiéyuē yòng zhǐ, bǎohù huánjìng.',
            explanation: '除此以外，还…… + 日记 (từ mới) + 节约 (Bài 12).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Hai người này sinh cùng ngày, ngoài điều đó ra không có điểm chung nào khác.',
            answer: '这两个人同一天出生，除此以外没有其他共同点。', answerPy: 'Zhè liǎng ge rén tóng yì tiān chūshēng, chú cǐ yǐwài méiyǒu qítā gòngtóngdiǎn.',
            explanation: '除此以外没有……; ôn lại 出生 (Bài 7), 其他 (Bài 4).' },
        ] },
      { point: '「把……叫作……」',
        items: [
          { context: 'Hoàn thành câu: nên người ta gọi Trái đất là "làng toàn cầu".',
            pre: '所以现在人们都把地球', blank: '叫作', post: '"地球村"。', options: ['叫作', '叫', '作为'], answer: 0,
            explanation: '把……叫作 + tên gọi; ôn lại 地球 (Bài 14).' },
          { context: 'Hoàn thành câu: người ta gọi Hoàng Hà là "sông Mẹ".',
            pre: '黄河全长5464公里，人们', blank: '把', post: '它叫作"母亲河"。', options: ['把', '被', '让'], answer: 0,
            explanation: '把 + đối tượng + 叫作; ôn lại 公里 (Bài 17), 母亲 (Bài 15).' },
          { context: 'Hoàn thành câu: người ta gọi thói quen này là "sưởi nhà".',
            pre: '中国人搬了新家后会邀请亲戚朋友到家里来吃顿饭。人们把这个习惯', blank: '叫作', post: '"暖房"。', options: ['叫作', '当作', '看作'], answer: 0,
            explanation: '把……叫作 — đặt tên gọi (khác 当作 = coi là, Bài 13); ôn lại 邀请 (Bài 6), 亲戚 (Bài 5).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '在汉语里，像"海""河"这些字左边的部分是一样的，人们把它叫作"三点水"。', isCorrect: true,
            explanation: 'Câu đúng — bài luyện tập SGK (1); ôn lại 部分 (Bài 13).' },
          { type: 'judge', context: 'Xét câu sau có đúng ngữ pháp không.',
            sentence: '人们叫作地球把"地球村"。', isCorrect: false, correctVersion: '人们把地球叫作"地球村"。',
            explanation: 'Trật tự: 把 + đối tượng + 叫作 + tên gọi — 叫作 phải đứng sau tân ngữ của 把.' },
          { type: 'sort', context: 'Sắp xếp câu: Trung Quốc có 56 dân tộc, người Hán đông nhất, 55 dân tộc khác do số người ít nên người ta gọi là "dân tộc thiểu số".',
            words: ['中国', '有', '56个', '民族', '，', '其中', '汉族', '人', '的', '数量', '最多', '，', '汉族', '以外', '的', '55个', '民族', '由于', '人数', '较少', '，', '人们', '把', '它们', '叫作', '"少数民族"', '。'], answer: '中国有56个民族，其中汉族人的数量最多，汉族以外的55个民族由于人数较少，人们把它们叫作"少数民族"。',
            explanation: '把……叫作 — bài luyện tập SGK (2); ôn lại 民族 (Bài 11), 其中 (Bài 6), 数量 (Bài 14), 由于 (Bài 10).' },
          { type: 'sort', context: 'Sắp xếp câu: chất lượng và giá cả có liên hệ, đồ tốt thường đắt hơn. Người ta quen gọi đó là "tiền nào của nấy".',
            words: ['东西', '的', '质量', '和', '价格', '是', '有', '联系', '的', '，', '质量', '好', '的', '东西', '一般', '价格', '也', '会', '比较', '高', '。', '人们', '习惯', '上', '把', '这', '叫作', '"一分钱一分货"', '。'], answer: '东西的质量和价格是有联系的，质量好的东西一般价格也会比较高。人们习惯上把这叫作"一分钱一分货"。',
            explanation: '把……叫作 — bài luyện tập SGK (3); ôn lại 质量 (Bài 6), 联系 (Bài 2).' },
          { type: 'translate', context: 'Dịch câu sau, dùng 把……叫作.',
            promptLang: 'vi', prompt: 'Vì gấu trúc rất đáng yêu, người Trung Quốc gọi nó là "quốc bảo".',
            answer: '因为大熊猫非常可爱，中国人把它叫作"国宝"。', answerPy: 'Yīnwèi dà xióngmāo fēicháng kě\'ài, Zhōngguó rén bǎ tā jiàozuò "guóbǎo".',
            explanation: '把……叫作; ôn lại 熊猫 (Bài 17), 可爱 (Bài 15).' },
          { type: 'translate', context: 'Dịch câu sau.',
            promptLang: 'vi', prompt: 'Vì rừng có thể làm sạch không khí, người ta gọi rừng là "lá phổi của Trái đất".',
            answer: '因为森林可以让空气变干净，人们把森林叫作"地球的肺"。', answerPy: 'Yīnwèi sēnlín kěyǐ ràng kōngqì biàn gānjìng, rénmen bǎ sēnlín jiàozuò "dìqiú de fèi".',
            explanation: '把……叫作 + 森林 (Bài 17), 地球 (Bài 14).' },
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
    errfixWord: { label: 'Chọn từ thích hợp', emoji: '📝', color: 'pink', desc: 'Chọn từ đúng để điền vào chỗ trống (bài gốc trong SGK)' },
    mc: { label: 'Trắc nghiệm', emoji: '🎯', color: 'teal', desc: 'Chọn đáp án đúng cho mỗi câu hỏi' }
  };

  // errorFixData được tái sử dụng theo 2 kiểu: mặc định là "sửa lỗi sai" (chọn
  // câu đúng), một số bài (vd. HSK4 dùng nguyên bài SGK) là "chọn từ thích hợp"
  // điền vào chỗ trống — data file đánh dấu bằng errorFixMode:'wordchoice'.
  function errfixDef() {
    var isWordChoice = gpGameData && gpGameData.errorFixMode === 'wordchoice';
    return isWordChoice ? GAME_TYPE_DEFS.errfixWord : GAME_TYPE_DEFS.errfix;
  }

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
      var def = type === 'errfix' ? errfixDef() : GAME_TYPE_DEFS[type];
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
    var def = type === 'errfix' ? errfixDef() : GAME_TYPE_DEFS[type];
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
    else if (type === 'errfix') renderGameMcList(data, { wrongPrefix: gpGameData.errorFixMode !== 'wordchoice', blankMode: gpGameData.errorFixMode === 'wordchoice', gameKey: 'errfix' });
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
      var promptHtml = opts.blankMode
        ? '📝 ' + q.wrong + '<div class="mc-sub">👆 Chọn từ thích hợp điền vào chỗ trống:</div>'
        : opts.wrongPrefix
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
