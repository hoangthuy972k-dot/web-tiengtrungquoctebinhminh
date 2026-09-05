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
