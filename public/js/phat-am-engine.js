/* ══════════════════════════════════════════
   PHÁT ÂM ENGINE — self-contained, does not depend on
   lesson-engine.js (which expects vocabData/wuData/etc.)
   Expects globals from phat-am-data.js: INITIALS, FINALS, TONES
   ══════════════════════════════════════════ */
(function () {
  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.8;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  /* ---------------- Tabs ---------------- */
  function showTab(tab) {
    document.querySelectorAll('[data-pa-tab]').forEach(function (b) {
      b.classList.toggle('active', b.dataset.paTab === tab);
    });
    document.querySelectorAll('.main .section').forEach(function (s) {
      s.classList.toggle('active', s.id === tab);
    });
  }
  document.querySelectorAll('[data-pa-tab]').forEach(function (btn) {
    btn.addEventListener('click', function () { showTab(btn.dataset.paTab); });
  });

  /* ---------------- Initials / Finals (expandable grid) ---------------- */
  function renderSoundList(containerId, groups) {
    var container = document.getElementById(containerId);
    var html = groups.map(function (g, gi) {
      var cards = g.items.map(function (item, ii) {
        return '<div class="pa-card" data-g="' + gi + '" data-i="' + ii + '">' +
          '<div class="pa-card-main">' + item.c + '</div>' +
          '<div class="pa-card-speak">🔊 Nghe</div>' +
          '</div>';
      }).join('');
      return '<div class="pa-group-title">' + g.group + '</div><div class="pa-grid">' + cards + '</div>';
    }).join('');
    container.innerHTML = html;
    container.querySelectorAll('.pa-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var gi = parseInt(card.dataset.g, 10);
        var ii = parseInt(card.dataset.i, 10);
        var item = groups[gi].items[ii];
        var wasOpen = card.classList.contains('is-open');
        // close any open detail in this list
        container.querySelectorAll('.pa-card.is-open').forEach(function (c) { c.classList.remove('is-open'); });
        var existingDetail = container.querySelector('.pa-card-detail');
        if (existingDetail) existingDetail.remove();
        speak(item.c === 'ü' ? 'v' : item.c);
        if (wasOpen) return;
        card.classList.add('is-open');
        var detail = document.createElement('div');
        detail.className = 'pa-card-detail';
        detail.innerHTML =
          '<div class="pa-tip"><b>Cách phát âm:</b> ' + item.tip + '</div>' +
          '<div class="pa-example">📝 Ví dụ: ' + item.example + '</div>';
        card.insertAdjacentElement('afterend', detail);
      });
    });
  }

  /* ---------------- Tones ---------------- */
  function renderTones() {
    var container = document.getElementById('pa-tones-list');
    container.innerHTML = TONES.map(function (t, i) {
      return '<div class="pa-tone-card" data-i="' + i + '">' +
        '<div class="pa-tone-mark">' + (t.mark || '·') + '</div>' +
        '<div class="pa-tone-syllable">' + t.syllable + '</div>' +
        '<div class="pa-tone-name">' + t.name + '</div>' +
        '<div class="pa-tone-tip">' + t.tip + '</div>' +
        '</div>';
    }).join('');
    container.querySelectorAll('.pa-tone-card').forEach(function (card, i) {
      card.addEventListener('click', function () { speak(TONES[i].syllable); });
    });
  }

  /* ---------------- Combo builder ---------------- */
  function renderCombo() {
    var initSel = document.getElementById('pa-combo-initial');
    var finalSel = document.getElementById('pa-combo-final');
    var initOpts = ['<option value="">(không có — vận mẫu đứng riêng)</option>'];
    INITIALS.forEach(function (g) {
      g.items.forEach(function (item) { initOpts.push('<option value="' + item.c + '">' + item.c + '</option>'); });
    });
    initSel.innerHTML = initOpts.join('');
    var finalOpts = [];
    FINALS.forEach(function (g) {
      g.items.forEach(function (item) {
        var base = item.c.split(' ')[0];
        finalOpts.push('<option value="' + base + '">' + item.c + '</option>');
      });
    });
    finalSel.innerHTML = finalOpts.join('');
    function updateSyllable() {
      var syll = (initSel.value || '') + (finalSel.value || '');
      document.getElementById('pa-combo-syllable').textContent = syll || '?';
    }
    initSel.addEventListener('change', updateSyllable);
    finalSel.addEventListener('change', updateSyllable);
    document.getElementById('pa-combo-speak').addEventListener('click', function () {
      speak(document.getElementById('pa-combo-syllable').textContent);
    });
    updateSyllable();
  }

  /* ---------------- Quiz (listen and guess the tone) ---------------- */
  var quizScore = { correct: 0, total: 0 };
  var quizCurrent = null;
  function nextQuiz() {
    quizCurrent = TONES[Math.floor(Math.random() * TONES.length)];
    var wrongs = TONES.filter(function (t) { return t !== quizCurrent; })
      .sort(function () { return Math.random() - 0.5; }).slice(0, 3);
    var opts = [quizCurrent].concat(wrongs).sort(function () { return Math.random() - 0.5; });
    var wrap = document.getElementById('pa-quiz-opts');
    wrap.innerHTML = opts.map(function (t) {
      return '<button type="button" class="pa-quiz-opt" data-name="' + t.name + '">' + t.name + '</button>';
    }).join('');
    wrap.querySelectorAll('.pa-quiz-opt').forEach(function (btn) {
      btn.addEventListener('click', function () { answerQuiz(btn); });
    });
    playQuiz();
  }
  function playQuiz() { if (quizCurrent) speak(quizCurrent.syllable); }
  function answerQuiz(btn) {
    document.querySelectorAll('.pa-quiz-opt').forEach(function (b) { b.disabled = true; });
    var ok = btn.dataset.name === quizCurrent.name;
    btn.classList.add(ok ? 'is-ok' : 'is-bad');
    if (!ok) {
      var correctBtn = Array.from(document.querySelectorAll('.pa-quiz-opt')).find(function (b) { return b.dataset.name === quizCurrent.name; });
      if (correctBtn) correctBtn.classList.add('is-ok');
    }
    quizScore.total++;
    if (ok) quizScore.correct++;
    document.getElementById('pa-quiz-score').textContent = 'Điểm: ' + quizScore.correct + '/' + quizScore.total;
    setTimeout(nextQuiz, 1100);
  }

  document.getElementById('pa-quiz-play').addEventListener('click', playQuiz);

  renderSoundList('pa-initials-list', INITIALS);
  renderSoundList('pa-finals-list', FINALS);
  renderTones();
  renderCombo();
  nextQuiz();
})();
