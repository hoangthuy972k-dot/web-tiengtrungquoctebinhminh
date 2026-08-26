/* ══════════════════════════════════════════
   YCT ENGINE — powers the 9-tab kid interface
   (Từ vựng / Viết chữ / Flashcard / Nối từ / Ghép cặp /
    Dịch / Nghe / Luyện tập / Điểm)
   Expects globals: YCT_VOCAB (array), YCT_QUIZ (array), STROKE_DATA (optional)
   ══════════════════════════════════════════ */
(function () {
  var YCT_VOCAB = (typeof window.YCT_VOCAB !== 'undefined') ? window.YCT_VOCAB : (typeof vocabData !== 'undefined' ? vocabData : []);
  var YCT_QUIZ = (typeof window.YCT_QUIZ !== 'undefined') ? window.YCT_QUIZ : (typeof mcData !== 'undefined' ? mcData : []);
  var YCT_FILL = (typeof window.YCT_FILL !== 'undefined') ? window.YCT_FILL : (typeof fillData !== 'undefined' ? fillData : []);

  var scoreState = {
    quiz: { correct: 0, total: 0 },
    listen: { correct: 0, total: 0 },
    wrongMatches: 0
  };

  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  function stripTones(s) {
    return (s || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z]/g, '');
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pickRandom(arr, n, excludeIdx) {
    var pool = arr.map(function (v, i) { return i; }).filter(function (i) { return i !== excludeIdx; });
    pool = shuffle(pool);
    return pool.slice(0, n).map(function (i) { return arr[i]; });
  }

  /* ---------------- Tab switching ---------------- */
  function showTab(tab) {
    document.querySelectorAll('.yk-tab').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.tab === tab);
    });
    document.querySelectorAll('.yk-panel').forEach(function (p) {
      p.style.display = (p.id === 'yk-panel-' + tab) ? '' : 'none';
    });
    var renderer = TAB_RENDERERS[tab];
    if (renderer && !renderer._done) { renderer(); renderer._done = true; }
  }

  /* ---------------- Từ vựng ---------------- */
  function renderVocabTab() {
    var rows = YCT_VOCAB.map(function (v) {
      return '<tr>' +
        '<td class="yk-hanzi-cell">' + v.zh + '</td>' +
        '<td class="yk-py-cell">' + v.py + '</td>' +
        '<td>' + v.vn + '</td>' +
        '<td><button type="button" class="yk-speak-btn" data-speak="' + v.zh + '">🔊</button></td>' +
        '</tr>';
    }).join('');
    document.getElementById('yk-panel-tuvung').innerHTML =
      '<div class="yk-panel-title">🌈 Bảng từ vựng mới (生词)</div>' +
      '<div style="overflow-x:auto"><table class="yk-vocab-table"><thead><tr><th>Chữ Hán</th><th>Pinyin</th><th>Nghĩa</th><th>Nghe</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    document.querySelectorAll('#yk-panel-tuvung [data-speak]').forEach(function (btn) {
      btn.addEventListener('click', function () { speak(btn.dataset.speak); });
    });
  }

  /* ---------------- Viết chữ ---------------- */
  var writerIdx = 0;
  var hzWriter = null;
  function renderWriterTab() {
    var panel = document.getElementById('yk-panel-vietchu');
    panel.innerHTML =
      '<div class="yk-panel-title">🖍️ Bé tập viết chữ Hán</div>' +
      '<div class="yk-writer-wrap">' +
        '<div class="yk-writer-hanzi" id="yw-hanzi"></div>' +
        '<div class="yk-writer-py" id="yw-py"></div>' +
        '<div class="yk-writer-vn" id="yw-vn"></div>' +
        '<div class="yk-writer-box" id="yw-box"></div>' +
        '<div class="yk-writer-quizfb" id="yw-quizfb"></div>' +
        '<div class="yk-writer-info" id="yw-info"></div>' +
        '<div class="yk-writer-nav">' +
          '<button type="button" class="yk-btn yk-btn-outline" id="yw-prev">← Trở lại</button>' +
          '<button type="button" class="yk-btn yk-btn-gold" id="yw-play">✏️ Xem</button>' +
          '<button type="button" class="yk-btn yk-btn-outline" id="yw-quiz">🎯 Thi</button>' +
          '<button type="button" class="yk-btn yk-btn-primary" id="yw-next">Tiếp →</button>' +
        '</div>' +
      '</div>';
    document.getElementById('yw-prev').addEventListener('click', function () { moveWriter(-1); });
    document.getElementById('yw-next').addEventListener('click', function () { moveWriter(1); });
    document.getElementById('yw-play').addEventListener('click', function () {
      if (!hzWriter) return;
      try { hzWriter.cancelQuiz(); } catch (e) {}
      document.getElementById('yw-quizfb').textContent = '';
      hzWriter.animateCharacter();
    });
    document.getElementById('yw-quiz').addEventListener('click', quizWriterChar);
    writerIdx = 0;
    paintWriter();
  }
  function writerChars() {
    var out = [];
    YCT_VOCAB.forEach(function (v) {
      (v.hanzi || []).forEach(function (h) { out.push(h); });
    });
    return out;
  }
  function moveWriter(delta) {
    var chars = writerChars();
    writerIdx = (writerIdx + delta + chars.length) % chars.length;
    paintWriter();
  }
  function paintWriter() {
    var chars = writerChars();
    if (!chars.length) return;
    var h = chars[writerIdx];
    document.getElementById('yw-hanzi').textContent = h.c;
    document.getElementById('yw-py').textContent = h.p;
    document.getElementById('yw-vn').textContent = h.mean;
    document.getElementById('yw-quizfb').textContent = '';
    document.getElementById('yw-info').innerHTML =
      '<div><b>Bộ thủ &amp; cấu trúc:</b> ' + h.rad + '</div>' +
      '<div><b>Cách nhớ:</b> ' + h.tip + '</div>' +
      '<div><b>Ví dụ:</b> ' + h.w + '</div>';
    var box = document.getElementById('yw-box');
    box.innerHTML = '';
    if (typeof HanziWriter !== 'undefined' && typeof STROKE_DATA !== 'undefined' && STROKE_DATA[h.c]) {
      var charData = STROKE_DATA[h.c];
      hzWriter = HanziWriter.create(box, h.c, {
        width: 220, height: 220, padding: 8,
        showOutline: true, strokeAnimationSpeed: 1, delayBetweenStrokes: 260,
        strokeColor: '#4a3540', radicalColor: '#e0577a', outlineColor: '#ffe3ec',
        charDataLoader: function () { return charData; }
      });
    } else {
      box.innerHTML = '<span style="font-size:3rem;font-family:\'Noto Serif SC\',serif;color:#e0577a">' + h.c + '</span>';
      hzWriter = null;
    }
  }
  function quizWriterChar() {
    var fb = document.getElementById('yw-quizfb');
    if (!hzWriter) {
      if (fb) fb.textContent = 'Chữ này chưa có dữ liệu để luyện viết.';
      return;
    }
    if (fb) fb.textContent = '✏️ Con hãy vẽ từng nét vào ô trên nhé!';
    hzWriter.quiz({
      onMistake: function () { if (fb) fb.textContent = '❌ Chưa đúng nét, thử lại nhé!'; },
      onCorrectStroke: function () { if (fb) fb.textContent = '✅ Đúng rồi! Vẽ tiếp nét sau...'; },
      onComplete: function (summary) {
        if (fb) fb.textContent = '🎉 Con đã viết xong! (Sai ' + summary.totalMistakes + ' lần)';
      }
    });
  }

  /* ---------------- Flashcard ---------------- */
  var flashIdx = 0;
  var flashFlipped = false;
  var flashOrder = [];
  function renderFlashTab() {
    flashOrder = YCT_VOCAB.map(function (_, i) { return i; });
    flashIdx = 0;
    flashFlipped = false;
    document.getElementById('yk-panel-flashcard').innerHTML =
      '<div class="yk-panel-title">🃏 Lật thẻ siêu tốc</div>' +
      '<div class="yk-flash-ctr" id="yf-ctr"></div>' +
      '<div class="yk-flash-card" id="yf-card"></div>' +
      '<div class="yk-btn-row">' +
        '<button type="button" class="yk-btn yk-btn-outline" id="yf-prev">← Trở lại</button>' +
        '<button type="button" class="yk-btn yk-btn-gold" id="yf-flip">🔄 Lật</button>' +
        '<button type="button" class="yk-btn yk-btn-primary" id="yf-next">Tiếp →</button>' +
      '</div>';
    document.getElementById('yf-card').addEventListener('click', flipFlash);
    document.getElementById('yf-flip').addEventListener('click', flipFlash);
    document.getElementById('yf-prev').addEventListener('click', function () { moveFlash(-1); });
    document.getElementById('yf-next').addEventListener('click', function () { moveFlash(1); });
    paintFlash();
  }
  function moveFlash(delta) {
    flashIdx = (flashIdx + delta + flashOrder.length) % flashOrder.length;
    flashFlipped = false;
    paintFlash();
  }
  function flipFlash() { flashFlipped = !flashFlipped; paintFlash(); }
  function paintFlash() {
    var v = YCT_VOCAB[flashOrder[flashIdx]];
    document.getElementById('yf-ctr').textContent = (flashIdx + 1) + ' / ' + flashOrder.length;
    var card = document.getElementById('yf-card');
    if (!flashFlipped) {
      card.innerHTML = '<div class="yk-fc-hanzi">' + v.zh + '</div><div class="yk-fc-hint">Bấm để xem nghĩa</div>';
    } else {
      card.innerHTML = '<div class="yk-fc-hanzi" style="font-size:1.6rem">' + v.vn + '</div>';
    }
  }

  /* ---------------- Nối từ (click-match columns) ---------------- */
  var noituState = { leftSel: null, matched: {} };
  function renderNoituTab() {
    var items = shuffle(YCT_VOCAB).slice(0, Math.min(8, YCT_VOCAB.length));
    var left = shuffle(items);
    var right = shuffle(items);
    noituState = { leftSel: null, matched: {} };
    var leftHtml = left.map(function (v, i) {
      return '<button type="button" class="yk-match-item" data-side="l" data-id="' + v.n + '">' + v.zh + '</button>';
    }).join('');
    var rightHtml = right.map(function (v) {
      return '<button type="button" class="yk-match-item" data-side="r" data-id="' + v.n + '">' + v.vn + '</button>';
    }).join('');
    document.getElementById('yk-panel-noitu').innerHTML =
      '<div class="yk-panel-title">🔗 Game Nối Chữ Tìm Bạn</div>' +
      '<div class="yk-match-grid"><div class="yk-match-col">' + leftHtml + '</div><div class="yk-match-col">' + rightHtml + '</div></div>' +
      '<div class="yk-btn-row"><button type="button" class="yk-btn yk-btn-outline" id="yn-reset">🔄 Chơi lại</button></div>';
    document.querySelectorAll('#yk-panel-noitu .yk-match-item').forEach(function (btn) {
      btn.addEventListener('click', function () { onNoituClick(btn); });
    });
    document.getElementById('yn-reset').addEventListener('click', function () { renderNoituTab(); });
  }
  function onNoituClick(btn) {
    if (btn.classList.contains('is-ok')) return;
    var side = btn.dataset.side;
    var id = btn.dataset.id;
    document.querySelectorAll('#yk-panel-noitu .yk-match-item[data-side="' + side + '"]').forEach(function (b) {
      if (!b.classList.contains('is-ok')) b.classList.remove('is-selected');
    });
    btn.classList.add('is-selected');
    if (!noituState.leftSel) { noituState.leftSel = btn; return; }
    if (noituState.leftSel.dataset.side === side) { noituState.leftSel = btn; return; }
    var a = noituState.leftSel, b = btn;
    if (a.dataset.id === b.dataset.id) {
      a.classList.add('is-ok'); b.classList.add('is-ok');
      a.classList.remove('is-selected'); b.classList.remove('is-selected');
    } else {
      a.classList.add('is-bad'); b.classList.add('is-bad');
      scoreState.wrongMatches++;
      setTimeout(function () {
        a.classList.remove('is-bad', 'is-selected');
        b.classList.remove('is-bad', 'is-selected');
      }, 500);
    }
    noituState.leftSel = null;
  }

  /* ---------------- Ghép cặp (memory game) ---------------- */
  var memState = { flipped: [], steps: 0, lock: false };
  function renderMemoryTab() {
    var n = Math.min(8, YCT_VOCAB.length);
    var items = shuffle(YCT_VOCAB).slice(0, n);
    var cards = [];
    items.forEach(function (v) {
      cards.push({ pair: v.n, face: v.zh });
      cards.push({ pair: v.n, face: v.py });
    });
    cards = shuffle(cards);
    memState = { flipped: [], steps: 0, lock: false };
    var html = cards.map(function (c, i) {
      return '<div class="yk-memory-card" data-idx="' + i + '" data-pair="' + c.pair + '" data-face="' + c.face + '"></div>';
    }).join('');
    document.getElementById('yk-panel-ghepcap').innerHTML =
      '<div class="yk-panel-title">🧠 Thử tài trí nhớ</div>' +
      '<div class="yk-memory-grid" id="ym-grid">' + html + '</div>' +
      '<div class="yk-btn-row"><button type="button" class="yk-btn yk-btn-outline" id="ym-reset">🔄 Chơi lại</button></div>' +
      '<div class="yk-memory-steps" id="ym-steps">Số bước đi: 0</div>';
    document.querySelectorAll('.yk-memory-card').forEach(function (c) {
      c.addEventListener('click', function () { onMemoryClick(c); });
    });
    document.getElementById('ym-reset').addEventListener('click', renderMemoryTab);
  }
  function onMemoryClick(card) {
    if (memState.lock) return;
    if (card.classList.contains('is-flipped') || card.classList.contains('is-matched')) return;
    card.classList.add('is-flipped');
    card.textContent = card.dataset.face;
    memState.flipped.push(card);
    if (memState.flipped.length === 2) {
      memState.steps++;
      document.getElementById('ym-steps').textContent = 'Số bước đi: ' + memState.steps;
      var a = memState.flipped[0], b = memState.flipped[1];
      if (a.dataset.pair === b.dataset.pair) {
        a.classList.add('is-matched'); b.classList.add('is-matched');
        memState.flipped = [];
      } else {
        memState.lock = true;
        scoreState.wrongMatches++;
        setTimeout(function () {
          a.classList.remove('is-flipped'); a.textContent = '';
          b.classList.remove('is-flipped'); b.textContent = '';
          memState.flipped = [];
          memState.lock = false;
        }, 700);
      }
    }
  }

  /* ---------------- Dịch (type pinyin) ---------------- */
  var dichOrder = [];
  var dichIdx = 0;
  function renderDichTab() {
    dichOrder = shuffle(YCT_VOCAB.map(function (_, i) { return i; }));
    dichIdx = 0;
    document.getElementById('yk-panel-dich').innerHTML =
      '<div class="yk-panel-title">⌨️ Ai gõ chữ siêu nhất?</div>' +
      '<div class="yk-translate-wrap">' +
        '<div class="yk-translate-vn">Nghĩa là gì: <strong id="yd-vn"></strong></div>' +
        '<input type="text" class="yk-translate-input" id="yd-input" placeholder="Gõ pinyin (không dấu cũng được)..." autocomplete="off" />' +
        '<div class="yk-translate-fb" id="yd-fb"></div>' +
        '<div class="yk-btn-row">' +
          '<button type="button" class="yk-btn yk-btn-primary" id="yd-check">Kiểm tra</button>' +
          '<button type="button" class="yk-btn yk-btn-outline" id="yd-answer">Đáp án</button>' +
          '<button type="button" class="yk-btn yk-btn-gold" id="yd-next">Câu khác</button>' +
        '</div>' +
      '</div>';
    document.getElementById('yd-check').addEventListener('click', checkDich);
    document.getElementById('yd-answer').addEventListener('click', showDichAnswer);
    document.getElementById('yd-next').addEventListener('click', nextDich);
    paintDich();
  }
  function paintDich() {
    var v = YCT_VOCAB[dichOrder[dichIdx]];
    document.getElementById('yd-vn').textContent = v.vn;
    document.getElementById('yd-input').value = '';
    document.getElementById('yd-fb').textContent = '';
    document.getElementById('yd-fb').className = 'yk-translate-fb';
  }
  function checkDich() {
    var v = YCT_VOCAB[dichOrder[dichIdx]];
    var input = document.getElementById('yd-input').value;
    var ok = stripTones(input) === stripTones(v.py);
    var fb = document.getElementById('yd-fb');
    fb.textContent = ok ? '🎉 Chính xác!' : '❌ Chưa đúng, thử lại nhé!';
    fb.className = 'yk-translate-fb ' + (ok ? 'ok' : 'bad');
  }
  function showDichAnswer() {
    var v = YCT_VOCAB[dichOrder[dichIdx]];
    var fb = document.getElementById('yd-fb');
    fb.innerHTML = 'Đáp án: <span class="yk-translate-answer">' + v.zh + '</span> (' + v.py + ')';
    fb.className = 'yk-translate-fb';
  }
  function nextDich() {
    dichIdx = (dichIdx + 1) % dichOrder.length;
    paintDich();
  }

  /* ---------------- Nghe (listening) ---------------- */
  var listenOrder = [];
  var listenIdx = 0;
  function renderListenTab() {
    listenOrder = shuffle(YCT_VOCAB.map(function (_, i) { return i; }));
    listenIdx = 0;
    document.getElementById('yk-panel-nghe').innerHTML =
      '<div class="yk-panel-title">🎧 Luyện Tai Tinh</div>' +
      '<div class="yk-listen-wrap">' +
        '<button type="button" class="yk-listen-play" id="yl-play">🔊 Nghe</button>' +
        '<div id="yl-opts"></div>' +
      '</div>';
    document.getElementById('yl-play').addEventListener('click', playListen);
    paintListen();
  }
  function paintListen() {
    var v = YCT_VOCAB[listenOrder[listenIdx]];
    var wrongs = pickRandom(YCT_VOCAB, 3, listenOrder[listenIdx]);
    var opts = shuffle([v].concat(wrongs));
    var html = opts.map(function (o) {
      return '<button type="button" class="yk-listen-opt" data-ok="' + (o.n === v.n) + '">' + o.vn + '</button>';
    }).join('');
    document.getElementById('yl-opts').innerHTML = html;
    document.querySelectorAll('.yk-listen-opt').forEach(function (btn) {
      btn.addEventListener('click', function () { answerListen(btn); });
    });
    playListen();
  }
  function playListen() {
    var v = YCT_VOCAB[listenOrder[listenIdx]];
    speak(v.zh);
  }
  function answerListen(btn) {
    if (btn.disabled) return;
    document.querySelectorAll('.yk-listen-opt').forEach(function (b) { b.disabled = true; });
    var ok = btn.dataset.ok === 'true';
    btn.classList.add(ok ? 'is-ok' : 'is-bad');
    scoreState.listen.total++;
    if (ok) scoreState.listen.correct++;
    setTimeout(function () {
      listenIdx = (listenIdx + 1) % listenOrder.length;
      paintListen();
    }, 900);
  }

  /* ---------------- Luyện tập (progressive quiz) ---------------- */
  var quizIdx = 0;
  function renderQuizTab() {
    quizIdx = 0;
    paintQuiz();
  }
  function paintQuiz() {
    var panel = document.getElementById('yk-panel-luyentap');
    if (quizIdx >= YCT_QUIZ.length) {
      panel.innerHTML =
        '<div class="yk-panel-title">🏆 Vượt Chướng Ngại Vật</div>' +
        '<div class="yk-quiz-wrap"><p>🎉 Con đã hoàn thành tất cả câu hỏi!</p>' +
        '<button type="button" class="yk-btn yk-btn-primary" id="yq-restart">Làm lại từ đầu</button></div>';
      document.getElementById('yq-restart').addEventListener('click', renderQuizTab);
      return;
    }
    var q = YCT_QUIZ[quizIdx];
    var optsHtml = q.opts.map(function (o, i) {
      return '<button type="button" class="yk-quiz-opt" data-i="' + i + '">' + o + '</button>';
    }).join('');
    panel.innerHTML =
      '<div class="yk-panel-title">🏆 Vượt Chướng Ngại Vật</div>' +
      '<div class="yk-quiz-wrap">' +
        '<div class="yk-quiz-q">Câu ' + (quizIdx + 1) + ': ' + q.q + '</div>' +
        optsHtml +
        '<div class="yk-btn-row"><button type="button" class="yk-btn yk-btn-gold" id="yq-next" disabled>Câu tiếp</button></div>' +
      '</div>';
    document.querySelectorAll('.yk-quiz-opt').forEach(function (btn) {
      btn.addEventListener('click', function () { answerQuiz(btn, q); });
    });
    document.getElementById('yq-next').addEventListener('click', function () { quizIdx++; paintQuiz(); });
  }
  function answerQuiz(btn, q) {
    if (document.getElementById('yq-next').disabled === false && btn.disabled) return;
    var i = parseInt(btn.dataset.i, 10);
    document.querySelectorAll('.yk-quiz-opt').forEach(function (b) { b.disabled = true; });
    scoreState.quiz.total++;
    if (i === q.ans) {
      btn.classList.add('is-ok');
      scoreState.quiz.correct++;
    } else {
      btn.classList.add('is-bad');
      document.querySelectorAll('.yk-quiz-opt')[q.ans].classList.add('is-ok');
    }
    document.getElementById('yq-next').disabled = false;
  }

  /* ---------------- Điền từ ---------------- */
  function renderFillTab() {
    var panel = document.getElementById('yk-panel-dientu');
    if (!YCT_FILL.length) {
      panel.innerHTML = '<div class="yk-panel-title">✏️ Điền vào chỗ trống</div><p style="text-align:center;color:var(--yk-soft)">Bài này chưa có bài tập điền từ.</p>';
      return;
    }
    var items = YCT_FILL.map(function (f, i) {
      return '<div class="yk-fill-item" data-idx="' + i + '">' +
        '<span class="yk-fill-text">' + f.pre + '</span>' +
        '<input type="text" class="yk-fill-input" data-ans="' + f.ans + '" placeholder="?" />' +
        '<span class="yk-fill-text">' + f.post + '</span>' +
        '<span class="yk-fill-hint">' + f.hint + '</span>' +
        '<span class="yk-fill-fb" id="yfl-fb-' + i + '"></span>' +
        '</div>';
    }).join('');
    panel.innerHTML =
      '<div class="yk-panel-title">✏️ Điền vào chỗ trống</div>' +
      '<div class="yk-hint">Đọc tình huống rồi gõ chữ Hán thích hợp vào ô trống nhé!</div>' +
      '<div id="yfl-list">' + items + '</div>' +
      '<div class="yk-btn-row">' +
        '<button type="button" class="yk-btn yk-btn-primary" id="yfl-check">Kiểm tra đáp án</button>' +
        '<button type="button" class="yk-btn yk-btn-outline" id="yfl-reset">Làm lại</button>' +
      '</div>' +
      '<div class="yk-fill-score" id="yfl-score"></div>';
    document.getElementById('yfl-check').addEventListener('click', checkFill);
    document.getElementById('yfl-reset').addEventListener('click', renderFillTab);
  }
  function checkFill() {
    var inputs = document.querySelectorAll('.yk-fill-input');
    var correct = 0;
    inputs.forEach(function (inp, i) {
      var ok = inp.value.trim() === inp.dataset.ans;
      var fb = document.getElementById('yfl-fb-' + i);
      if (ok) {
        correct++;
        inp.classList.add('is-ok'); inp.classList.remove('is-bad');
        fb.textContent = '✓';
      } else {
        inp.classList.add('is-bad'); inp.classList.remove('is-ok');
        fb.textContent = '✗ ' + inp.dataset.ans;
      }
    });
    document.getElementById('yfl-score').textContent = 'Điểm: ' + correct + '/' + inputs.length;
  }

  /* ---------------- Điểm ---------------- */
  function renderScoreTab() {
    document.getElementById('yk-panel-diem').innerHTML =
      '<div class="yk-panel-title">📊 Bảng Thành Tích</div>' +
      '<div class="yk-score-grid">' +
        '<div class="yk-score-card"><div class="yk-score-label">🏆 Trắc nghiệm</div><div class="yk-score-value" id="ys-quiz"></div></div>' +
        '<div class="yk-score-card"><div class="yk-score-label">🎧 Tai tinh</div><div class="yk-score-value" id="ys-listen"></div></div>' +
        '<div class="yk-score-card"><div class="yk-score-label">😅 Nối sai</div><div class="yk-score-value" id="ys-wrong"></div></div>' +
      '</div>';
    paintScore();
  }
  function paintScore() {
    var q = document.getElementById('ys-quiz');
    var l = document.getElementById('ys-listen');
    var w = document.getElementById('ys-wrong');
    if (q) q.textContent = scoreState.quiz.correct + '/' + scoreState.quiz.total;
    if (l) l.textContent = scoreState.listen.correct + '/' + scoreState.listen.total;
    if (w) w.textContent = scoreState.wrongMatches;
  }

  var TAB_RENDERERS = {
    tuvung: renderVocabTab,
    vietchu: renderWriterTab,
    flashcard: renderFlashTab,
    noitu: renderNoituTab,
    ghepcap: renderMemoryTab,
    dientu: renderFillTab,
    dich: renderDichTab,
    nghe: renderListenTab,
    luyentap: renderQuizTab,
    diem: renderScoreTab
  };

  function initYctLesson() {
    document.querySelectorAll('.yk-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showTab(btn.dataset.tab);
        if (btn.dataset.tab === 'diem') paintScore();
      });
    });
    var slideBtn = document.getElementById('yk-slide-btn');
    if (slideBtn) slideBtn.addEventListener('click', function () { window.print(); });
    showTab('tuvung');
  }

  window.initYctLesson = initYctLesson;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initYctLesson);
  } else {
    initYctLesson();
  }
})();
