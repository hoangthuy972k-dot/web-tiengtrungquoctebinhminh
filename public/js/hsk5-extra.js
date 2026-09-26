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
  var LOA_SVG = '<svg class="loa-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function say(t) { if (typeof speakZh === 'function') speakZh(t); }
  function spk(t) {
    return '<button type="button" class="h5-spk" data-h5-say="' + esc(t).replace(/"/g, '&quot;') + '" aria-label="Nghe đọc">' + LOA_SVG + '</button>';
  }

  /* ---------- 1. Phân biệt từ gần nghĩa ---------- */
  function buildSynonym() {
    var box = document.getElementById('synonym-wrap');
    if (!box || typeof synonymData === 'undefined') return;

    // Co phan-biet.js thi dung chung ban voi app (cau da lam luu lai, dung chung ket qua)
    if (window.PhanBiet) {
      var ten = (location.pathname.match(/([\w-]+?)(?:\.html)?$/) || [])[1] || location.pathname;
      window.PhanBiet.mount(box, synonymData, { key: ten, say: say });
      return;
    }

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

  /* ---------- 3. Luyện viết: xếp câu + đoạn 80 chữ, chấm và sửa lỗi (luyen-viet.js) ---------- */
  function buildWriting() {
    var box = document.getElementById('writing-wrap');
    if (!box || typeof writingData === 'undefined' || !window.LuyenViet) return;
    // Cung khoa luu voi buoc 6 cua lo trinh — bai dang viet do o dau cung thay
    var ten = (location.pathname.match(/([\w-]+?)(?:\.html)?$/) || [])[1] || location.pathname;
    window.LuyenViet.mount(box, writingData, { key: ten });
  }


  /* ══════════════════════════════════════════════════════════
     🎧 NGHE THEO DẠNG ĐỀ — nghe trước, nhìn chữ sau
     ══════════════════════════════════════════════════════════ */
  function buildListenExam() {
    var box = document.getElementById('listenexam-wrap');
    if (!box || typeof listenExamData === 'undefined') return;
    var d = listenExamData;

    box.innerHTML =
      '<div class="h5-hv-intro">' + d.intro + '<div class="h5-src">' + esc(d.source) + '</div></div>' +
      d.items.map(function (it, i) {
        return '<div class="h5-card h5-le" data-i="' + i + '">' +
          '<div class="h5-card-head"><span class="h5-num">' + it.n + '</span>' +
            '<button type="button" class="h5-play" data-le-play="' + i + '">' + LOA_SVG + 'Nghe đoạn hội thoại</button>' +
          '</div>' +
          '<div class="h5-le-q">' + esc(it.q) + '<span class="h5-le-qvn">' + esc(it.qvn) + '</span></div>' +
          '<div class="h5-q-opts">' + it.opts.map(function (o, oi) {
            return '<button type="button" class="h5-opt" data-le-opt="' + i + '_' + oi + '">' +
              '<b>' + 'ABCD'.charAt(oi) + '.</b> ' + esc(o) + '</button>';
          }).join('') + '</div>' +
          '<div class="h5-q-why" hidden></div>' +
          '<button type="button" class="h5-w-toggle h5-small" data-le-script="' + i + '">Xem nguyên văn ▾</button>' +
          '<div class="h5-le-script" hidden>' +
            it.lines.map(function (l) {
              return '<div class="h5-le-line"><span class="h5-le-sp">' + l.sp + '</span>' +
                '<span class="h5-le-zh">' + esc(l.zh) + '</span> ' + spk(l.zh) + '</div>';
            }).join('') +
            '<div class="h5-le-words">Từ của bài xuất hiện ở đây: ' +
              it.words.map(function (w) { return '<b>' + esc(w) + '</b>'; }).join(' · ') + '</div>' +
          '</div>' +
        '</div>';
      }).join('');

    function playItem(i) {
      var it = d.items[i], k = 0;
      (function next() {
        if (k >= it.lines.length) return;
        var line = it.lines[k++];
        say(line.zh);
        // Cho moi luot doc xong roi moi doc tiep — uoc theo do dai cau
        setTimeout(next, 900 + line.zh.length * 210);
      })();
    }

    box.addEventListener('click', function (e) {
      var p = e.target.closest('[data-le-play]');
      if (p) { playItem(+p.getAttribute('data-le-play')); return; }

      var s = e.target.closest('[data-le-script]');
      if (s) {
        var card = s.closest('.h5-le');
        var sc = card.querySelector('.h5-le-script');
        sc.hidden = !sc.hidden;
        s.textContent = sc.hidden ? 'Xem nguyên văn ▾' : 'Ẩn nguyên văn ▴';
        return;
      }

      var o = e.target.closest('[data-le-opt]');
      if (!o) return;
      var parts = o.getAttribute('data-le-opt').split('_');
      var it = d.items[+parts[0]], pick = +parts[1];
      var card2 = o.closest('.h5-le');
      card2.querySelectorAll('.h5-opt').forEach(function (b, bi) {
        b.classList.toggle('is-right', bi === it.ans);
        b.disabled = true;
      });
      if (pick !== it.ans) o.classList.add('is-wrong');
      var why = card2.querySelector('.h5-q-why');
      why.hidden = false;
      why.innerHTML = (pick === it.ans ? '✅ Đúng. ' : '❌ Chưa đúng. ') + esc(it.why);
    });
  }

  /* ══════════════════════════════════════════════════════════
     💬 TÌNH HUỐNG — hoàn thành hội thoại (Cấp 2)
     ══════════════════════════════════════════════════════════ */
  function buildSituation() {
    var box = document.getElementById('situation-wrap');
    if (!box || typeof situationData === 'undefined') return;
    var d = situationData;
    var KEY = 'hyv_situ_' + location.pathname;
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { saved = {}; }

    box.innerHTML =
      '<div class="h5-hv-intro">' + d.intro + '</div>' +
      d.items.map(function (it, i) {
        return '<div class="h5-card h5-si">' +
          '<div class="h5-si-scene">🎬 ' + esc(it.scene) + '</div>' +
          '<div class="h5-si-a"><span class="h5-si-sp">' + esc(it.a.sp) + '</span>' +
            '<span class="h5-le-zh">' + esc(it.a.zh) + '</span> ' + spk(it.a.zh) +
            '<div class="h5-ex-vn">' + esc(it.a.vn) + '</div></div>' +
          '<div class="h5-si-need">Yêu cầu: ' + it.need.map(function (n) {
            return '<span class="task-chip">' + esc(n) + '</span>';
          }).join('') + '</div>' +
          '<textarea class="h5-si-box" data-si="' + i + '" rows="2" placeholder="Lời đáp của em…"></textarea>' +
          '<button type="button" class="h5-w-toggle h5-small" data-si-show="' + i + '">Xem câu mẫu ▾</button>' +
          '<div class="h5-si-sample" hidden>' +
            '<div class="h5-le-zh">' + esc(it.sample) + ' ' + spk(it.sample) + '</div>' +
            '<div class="h5-w-model-py">' + esc(it.samplePy) + '</div>' +
            '<div class="h5-ex-vn">' + esc(it.sampleVn) + '</div>' +
            '<div class="h5-si-tip"><b>💡 Lưu ý:</b> ' + esc(it.tip) + '</div>' +
          '</div>' +
        '</div>';
      }).join('');

    box.querySelectorAll('[data-si]').forEach(function (ta) {
      var i = ta.getAttribute('data-si');
      if (saved[i]) ta.value = saved[i];
      ta.addEventListener('input', function () {
        saved[i] = ta.value;
        try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) { /* bo qua */ }
      });
    });
    box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-si-show]');
      if (!b) return;
      var s = b.nextElementSibling;
      s.hidden = !s.hidden;
      b.textContent = s.hidden ? 'Xem câu mẫu ▾' : 'Ẩn câu mẫu ▴';
    });
  }

  /* ══════════════════════════════════════════════════════════
     🎯 NÓI SAO CHO HAY — 得体 / 语体
     ══════════════════════════════════════════════════════════ */
  function buildRegister() {
    var box = document.getElementById('register-wrap');
    if (!box || typeof registerData === 'undefined') return;
    var d = registerData;

    box.innerHTML =
      '<div class="h5-hv-intro">' + d.intro + '</div>' +
      d.items.map(function (it, i) {
        return '<div class="h5-card h5-rg">' +
          '<div class="h5-si-scene">🎬 ' + esc(it.scene) + '</div>' +
          '<div class="h5-rg-pair">' +
            ['a', 'b'].map(function (k) {
              return '<button type="button" class="h5-rg-opt" data-rg="' + i + '_' + k + '">' +
                '<span class="h5-rg-key">' + k.toUpperCase() + '</span>' +
                '<span class="h5-le-zh">' + esc(it[k]) + '</span></button>';
            }).join('') +
          '</div>' +
          '<div class="h5-q-why" hidden></div>' +
        '</div>';
      }).join('');

    box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-rg]');
      if (!b) return;
      var parts = b.getAttribute('data-rg').split('_');
      var it = d.items[+parts[0]], pick = parts[1];
      var card = b.closest('.h5-rg');
      card.querySelectorAll('.h5-rg-opt').forEach(function (x) {
        var k = x.getAttribute('data-rg').split('_')[1];
        x.classList.toggle('is-right', k === it.better);
        x.disabled = true;
      });
      if (pick !== it.better) b.classList.add('is-wrong');
      var why = card.querySelector('.h5-q-why');
      why.hidden = false;
      why.innerHTML = (pick === it.better ? '✅ Chọn chuẩn. ' : '❌ Câu kia phù hợp hơn. ') + esc(it.why);
    });
  }

  /* ══════════════════════════════════════════════════════════
     🗣️ KỂ LẠI BÀI ĐỌC 复述 (Cấp 3)
     ══════════════════════════════════════════════════════════ */
  function buildRetell() {
    var box = document.getElementById('retell-wrap');
    if (!box || typeof retellData === 'undefined') return;
    var d = retellData;

    // Co ke-lai.js thi dung ban co ghi am + may cham (chung bai lam voi buoc 7 cua lo trinh)
    if (window.KeLai) {
      var goc = (typeof dialogData !== 'undefined' ? dialogData : []).map(function (dd) {
        return (dd.lines || []).map(function (ln) { return ln.zh || ''; }).join('');
      }).join('');
      var ten = (location.pathname.match(/([\w-]+?)(?:\.html)?$/) || [])[1] || location.pathname;
      window.KeLai.mount(box, d, { key: ten, goc: goc, say: say });
      return;
    }

    box.innerHTML =
      '<div class="h5-hv-intro">' + d.intro + '</div>' +
      '<div class="h5-rt-grid">' + d.outline.map(function (o, i) {
        return '<div class="h5-rt-step">' +
          '<div class="h5-rt-no">' + (i + 1) + '</div>' +
          '<div class="h5-rt-body">' +
            '<div class="h5-rt-name">' + esc(o.step) + '</div>' +
            '<div class="h5-rt-cue">' + esc(o.cue) + '</div>' +
            '<div class="h5-rt-words">' + o.words.map(function (w) {
              return '<span class="h5-rt-w">' + esc(w) + '</span>';
            }).join('') + '</div>' +
          '</div></div>';
      }).join('') + '</div>' +
      '<div class="h5-w-check"><div class="h5-w-label">Kể xong tự chấm</div>' +
        d.checklist.map(function (c, i) {
          return '<label class="h5-w-item"><input type="checkbox" data-rt="' + i + '"> ' + esc(c) + '</label>';
        }).join('') +
      '</div>';
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
  buildListenExam();
  buildSituation();
  buildRegister();
  buildRetell();
  buildWriting();
})();
