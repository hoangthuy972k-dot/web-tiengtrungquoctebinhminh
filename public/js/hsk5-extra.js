/* ══════════════════════════════════════════════════════════
   BA THẺ RIÊNG CỦA HSK 5
   Lên trình độ này cái khó đã đổi: học sinh không còn vướng
   "câu này cấu trúc gì" mà vướng "chọn từ nào trong mấy từ
   cùng nghĩa". Ba thẻ dưới đây đánh đúng chỗ đó.

   · 辨析   — phân biệt từ gần nghĩa
   · 汉越   — bắc cầu âm Hán–Việt, kèm cảnh báo từ bẫy
   · 写作   — viết đoạn 80 chữ theo dạng đề thi
   Chạy sau lesson-engine.js, không đụng gì vào engine.
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function say(t) { if (typeof speakZh === 'function') speakZh(t); }
  function spk(t) {
    return '<button type="button" class="h5-spk" data-h5-say="' + esc(t).replace(/"/g, '&quot;') + '">🔊</button>';
  }

  /* ---------- 1. Phân biệt từ gần nghĩa ---------- */
  function buildSynonym() {
    var box = document.getElementById('synonym-wrap');
    if (!box || typeof synonymData === 'undefined') return;

    box.innerHTML = synonymData.map(function (g, gi) {
      var cols = g.items.map(function (it) {
        return '<div class="h5-col">' +
          '<div class="h5-col-word">' + esc(it.word) + ' ' + spk(it.word) + '</div>' +
          '<ul class="h5-col-points">' + it.points.map(function (p) {
            return '<li>' + esc(p) + '</li>';
          }).join('') + '</ul>' +
          '<div class="h5-col-ex">' + it.ex.map(function (e) {
            return '<div class="h5-ex"><div class="h5-ex-zh">' + esc(e.zh) + ' ' + spk(e.zh) + '</div>' +
              '<div class="h5-ex-vn">' + esc(e.vn) + '</div></div>';
          }).join('') + '</div>' +
        '</div>';
      }).join('');

      var quiz = (g.quiz || []).map(function (q, qi) {
        return '<div class="h5-q" data-g="' + gi + '" data-q="' + qi + '">' +
          '<div class="h5-q-sentence">' + (qi + 1) + '. ' + esc(q.sentence) + '</div>' +
          '<div class="h5-q-opts">' + q.options.map(function (o, oi) {
            return '<button type="button" class="h5-opt" data-g="' + gi + '" data-q="' + qi + '" data-o="' + oi + '">' + esc(o) + '</button>';
          }).join('') + '</div>' +
          '<div class="h5-q-why" hidden></div>' +
        '</div>';
      }).join('');

      return '<div class="h5-card">' +
        '<div class="h5-card-head"><span class="h5-num">' + (gi + 1) + '</span>' + esc(g.pair) + '</div>' +
        '<div class="h5-same"><b>Giống nhau:</b> ' + esc(g.same) +
          (g.sameEx ? '<div class="h5-ex same"><div class="h5-ex-zh">' + esc(g.sameEx.zh) + ' ' + spk(g.sameEx.zh) + '</div>' +
            '<div class="h5-ex-vn">' + esc(g.sameEx.vn) + '</div></div>' : '') +
        '</div>' +
        '<div class="h5-diff-title">Khác nhau ở đâu</div>' +
        '<div class="h5-cols">' + cols + '</div>' +
        (quiz ? '<div class="h5-quiz-title">Làm thử — chọn từ đúng</div>' + quiz : '') +
      '</div>';
    }).join('');

    box.addEventListener('click', function (e) {
      var b = e.target.closest('.h5-opt');
      if (!b) return;
      var g = synonymData[+b.dataset.g], q = g.quiz[+b.dataset.q];
      var row = b.closest('.h5-q');
      var ok = +b.dataset.o === q.answer;
      row.querySelectorAll('.h5-opt').forEach(function (x) {
        x.classList.toggle('is-right', +x.dataset.o === q.answer);
        x.disabled = true;
      });
      if (!ok) b.classList.add('is-wrong');
      var why = row.querySelector('.h5-q-why');
      why.hidden = false;
      why.innerHTML = (ok ? '✅ Đúng. ' : '❌ Chưa đúng. ') + esc(q.why) +
        (q.both ? ' <i>(Từ kia cũng không sai ngữ pháp, nhưng kém tự nhiên hơn ở câu này.)</i>' : '');
    });
  }

  /* Bac cau Han-Viet gio nam trong lesson-engine.js — dung chung cho moi bai */

  /* ---------- 3. Viết đoạn 80 chữ ---------- */
  function buildWriting() {
    var box = document.getElementById('writing-wrap');
    if (!box || typeof writingData === 'undefined') return;
    var d = writingData;
    var KEY = 'hyv_write_' + location.pathname;

    box.innerHTML =
      '<div class="h5-w-prompt">' +
        '<div class="h5-w-label">Đề bài</div>' +
        '<div class="h5-w-words">' + d.words.map(function (w) {
          return '<span class="h5-w-word">' + esc(w) + '</span>';
        }).join('') + '</div>' +
        '<div class="h5-w-task">' + esc(d.prompt) + '</div>' +
      '</div>' +

      '<div class="h5-w-outline"><div class="h5-w-label">Dàn ý gợi ý</div><ol>' +
        d.outline.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') +
      '</ol></div>' +

      '<div class="h5-w-editor">' +
        '<div class="h5-w-label">Bài làm của em</div>' +
        '<textarea id="h5-w-text" rows="7" placeholder="Viết bằng chữ Hán vào đây…"></textarea>' +
        '<div class="h5-w-count"><span id="h5-w-n">0</span> chữ Hán ' +
          '<span class="h5-w-target">· mục tiêu khoảng 80</span></div>' +
      '</div>' +

      '<div class="h5-w-check"><div class="h5-w-label">Tự kiểm trước khi nộp</div>' +
        d.checklist.map(function (c, i) {
          return '<label class="h5-w-item"><input type="checkbox" data-i="' + i + '"> ' + esc(c) + '</label>';
        }).join('') +
        '<div class="h5-w-auto" id="h5-w-auto"></div>' +
      '</div>' +

      '<button type="button" class="h5-w-toggle" id="h5-w-toggle">Xem bài mẫu ▾</button>' +
      '<div class="h5-w-model" id="h5-w-model" hidden>' +
        '<div class="h5-w-label">Bài mẫu</div>' +
        '<div class="h5-w-model-zh">' + esc(d.model.zh) + ' ' + spk(d.model.zh) + '</div>' +
        '<div class="h5-w-model-py">' + esc(d.model.py) + '</div>' +
        '<div class="h5-w-model-vn">' + esc(d.model.vn) + '</div>' +
      '</div>';

    var ta = document.getElementById('h5-w-text');
    try { ta.value = localStorage.getItem(KEY) || ''; } catch (e) { /* bo qua */ }

    function refresh() {
      var t = ta.value;
      var han = (t.match(/[一-鿿]/g) || []).length;
      document.getElementById('h5-w-n').textContent = han;
      // Kiem tra tu dong: da dung du 5 tu cho san chua
      var missing = d.words.filter(function (w) { return t.indexOf(w) < 0; });
      var el = document.getElementById('h5-w-auto');
      if (!t.trim()) { el.innerHTML = ''; return; }
      el.innerHTML = missing.length
        ? '<span class="miss">Còn thiếu từ: <b>' + missing.map(esc).join('、') + '</b></span>'
        : '<span class="ok">✅ Đã dùng đủ cả ' + d.words.length + ' từ cho sẵn</span>';
      try { localStorage.setItem(KEY, t); } catch (e) { /* bo qua */ }
    }
    ta.addEventListener('input', refresh);
    refresh();

    document.getElementById('h5-w-toggle').addEventListener('click', function () {
      var m = document.getElementById('h5-w-model');
      m.hidden = !m.hidden;
      this.textContent = m.hidden ? 'Xem bài mẫu ▾' : 'Ẩn bài mẫu ▴';
    });
  }

  /* ---------- Ghi chu cho ban ghi am cua giao trinh ----------
     File nghe cua 标准教程 doc LIEN MOT MACH ca bai, khong cat theo tung doan.
     Engine gan no vao doan dau, nen phai noi ro keo hoc sinh tuong chi doan 1. */
  function labelFullTextAudio() {
    var first = document.querySelector('#dlg-wrap .dlg-card .audio-box .audio-hint');
    if (!first) return;
    if (document.querySelectorAll('#dlg-wrap .dlg-card').length < 2) return;
    first.textContent = 'Bản ghi âm gốc đọc liền TOÀN BÀI (không cắt theo đoạn) — ' +
      'nghe hết một lượt trước, rồi quay lại đọc từng đoạn bên dưới.';
  }
  // Engine do file bang fetch nen khung audio xuat hien muon hon mot nhip
  setTimeout(labelFullTextAudio, 900);
  setTimeout(labelFullTextAudio, 2500);

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-h5-say]');
    if (b) say(b.getAttribute('data-h5-say'));
  });

  buildSynonym();
  buildWriting();
})();
