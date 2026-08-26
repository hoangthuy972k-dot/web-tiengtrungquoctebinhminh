(function () {
  'use strict';

  var STORAGE_KEYS = {
    user: 'hyv_user',
    pinyinHidden: 'hyv_pinyin_hidden'
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
  var READY_LEVELS = { hsk1: true, hsk2: true, yct: true };
  var practiceLevel = 'hsk1';

  function renderLevelCards() {
    var grid = $('#levelGrid');
    grid.innerHTML = '';
    APP_DATA.levels.forEach(function (level) {
      var isReady = !!READY_LEVELS[level.id];
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'level-card' + (isReady ? '' : ' is-disabled');
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
        '<span class="level-card-cta">' +
          (isReady
            ? 'Xem lộ trình ' + level.totalLessons + ' bài <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
            : 'Sắp ra mắt') +
        '</span>';
      card.addEventListener('click', function () {
        if (!isReady) {
          showToast(level.name + ' đang được xây dựng, quay lại sau nhé!');
          return;
        }
        if (READY_LEVELS[level.id]) {
          practiceLevel = level.id;
          renderPracticeLevelTabs();
          renderLessonList();
        }
        document.getElementById('practice').scrollIntoView({ behavior: 'smooth' });
      });
      grid.appendChild(card);
    });
  }

  /* ---------------- Practice level tabs (HSK1 / HSK2) ---------------- */

  var PRACTICE_LEVEL_LABEL = { hsk1: 'HSK 1', hsk2: 'HSK 2', yct: 'YCT' };

  function renderPracticeLevelTabs() {
    var wrap = $('#lessonListTabs');
    if (!wrap) return;
    var levels = Object.keys(READY_LEVELS).filter(function (id) { return READY_LEVELS[id]; });
    wrap.innerHTML = '';
    levels.forEach(function (id) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lesson-tab' + (id === practiceLevel ? ' active' : '');
      btn.textContent = PRACTICE_LEVEL_LABEL[id] || id.toUpperCase();
      btn.addEventListener('click', function () {
        practiceLevel = id;
        renderPracticeLevelTabs();
        renderLessonList();
      });
      wrap.appendChild(btn);
    });
  }

  /* ---------------- Lesson list (links out to standalone lesson pages) ---------------- */

  function renderLessonList() {
    var wrap = $('#lessonList');
    if (!wrap) return;
    var lessons = (APP_DATA.lessons && APP_DATA.lessons[practiceLevel]) || [];
    wrap.innerHTML = '';

    lessons.forEach(function (lesson) {
      var card = document.createElement('a');
      card.className = 'lesson-card-link';
      card.href = lesson.fullPageUrl;

      card.innerHTML =
        '<span class="lesson-card-num">' + lesson.number + '</span>' +
        '<div class="lesson-card-body">' +
          '<h3>' + lesson.title + '</h3>' +
          (lesson.titleHanzi ? '<span class="lesson-card-hanzi hanzi">' + lesson.titleHanzi + ' · ' + lesson.titlePinyin + '</span>' : '') +
          (lesson.topic ? '<p class="lesson-card-topic">' + lesson.topic + '</p>' : '') +
          '<div class="lesson-card-stats">' +
            (lesson.vocabCount ? '<span>📚 ' + lesson.vocabCount + ' từ mới</span>' : '') +
            (lesson.dialogueCount ? '<span>💬 ' + lesson.dialogueCount + ' hội thoại</span>' : '') +
            (lesson.grammarCount ? '<span>📐 ' + lesson.grammarCount + ' điểm ngữ pháp</span>' : '') +
          '</div>' +
        '</div>' +
        '<svg class="icon lesson-card-arrow" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

      wrap.appendChild(card);
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
    renderPracticeLevelTabs();
    renderLessonList();
    renderHeroWord();
    initAuth();

    $('#heroWordRefresh').addEventListener('click', renderHeroWord);
    $('#ctaStart').addEventListener('click', function () {
      document.getElementById('levels').scrollIntoView({ behavior: 'smooth' });
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
