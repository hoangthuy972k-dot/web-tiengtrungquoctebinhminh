/* ══════════════════════════════════════════════════════════
   PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — dùng chung cho app (Luyện thêm)
   và thẻ "Phân biệt từ" trên trang bài đầy đủ (hsk5-extra.js):
     PhanBiet.mount(hop, synonymData, { key, say, onDone })
   Mỗi cặp: giống nhau → khác nhau (2 cột) → làm thử chọn từ đúng.
   Câu đã làm được lưu lại; làm hết thì báo điểm cho lộ trình.
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var LS_PREFIX = 'hyv_phanbiet:';
  var LOA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>';
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function doc(key) { try { return JSON.parse(localStorage.getItem(LS_PREFIX + key)) || {}; } catch (e) { return {}; } }
  function ghi(key, v) { try { localStorage.setItem(LS_PREFIX + key, JSON.stringify(v)); } catch (e) { /* bo qua */ } }

  function mount(hop, data, opts) {
    opts = opts || {};
    if (!hop || !data || !data.length) return;
    var key = opts.key || 'mac-dinh';
    var st = doc(key);
    st.chon = st.chon || {};
    var coLoa = typeof opts.say === 'function';
    function loa(t) {
      return coLoa ? '<button type="button" class="pb-loa" data-pb-say="' + esc(t) + '" aria-label="Nghe đọc">' + LOA + '</button>' : '';
    }
    var tongCau = 0;
    data.forEach(function (g) { tongCau += (g.quiz || []).length; });

    hop.classList.add('lv');
    hop.innerHTML =
      '<div class="lv-card lv-intro-card">Lên HSK 5, cái khó không còn là cấu trúc mà là <b>chọn đúng từ trong mấy từ cùng nghĩa</b>. ' +
        'Đọc phần giống nhau, khác nhau rồi làm thử ngay bên dưới mỗi cặp.</div>' +
      (tongCau ? '<div class="lv-sx-sum" id="pbSum"></div>' : '') +
      data.map(function (g, gi) {
        return '<div class="lv-card pb-card">' +
          '<div class="pb-head"><span class="lv-num">' + (gi + 1) + '</span><h3 class="lv-zh">' + esc(g.pair) + '</h3></div>' +
          '<div class="pb-same"><b>Giống nhau:</b> ' + esc(g.same) +
            (g.sameEx ? '<div class="pb-ex"><div class="lv-zh">' + esc(g.sameEx.zh) + ' ' + loa(g.sameEx.zh) + '</div><div class="pb-vn">' + esc(g.sameEx.vn) + '</div></div>' : '') +
          '</div>' +
          '<div class="lv-label">Khác nhau ở đâu</div>' +
          '<div class="pb-cols">' + g.items.map(function (it) {
            return '<div class="pb-col"><div class="pb-word lv-zh">' + esc(it.word) + ' ' + loa(it.word) + '</div>' +
              '<ul class="pb-points">' + it.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
              it.ex.map(function (e) {
                return '<div class="pb-ex"><div class="lv-zh">' + esc(e.zh) + ' ' + loa(e.zh) + '</div><div class="pb-vn">' + esc(e.vn) + '</div></div>';
              }).join('') + '</div>';
          }).join('') + '</div>' +
          ((g.quiz || []).length ? '<div class="lv-label">Làm thử — chọn từ đúng</div>' + g.quiz.map(function (q, qi) {
            return '<div class="pb-q" data-g="' + gi + '" data-q="' + qi + '">' +
              '<div class="pb-q-cau lv-zh">' + (qi + 1) + '. ' + esc(q.sentence) + '</div>' +
              '<div class="pb-q-opts">' + q.options.map(function (o, oi) {
                return '<button type="button" class="lv-chip pb-opt" data-o="' + oi + '">' + esc(o) + '</button>';
              }).join('') + '</div><div class="pb-why" hidden></div></div>';
          }).join('') : '') +
        '</div>';
      }).join('');

    function hienCau(row, chon) {
      var g = data[+row.getAttribute('data-g')], q = g.quiz[+row.getAttribute('data-q')];
      var dung = chon === q.answer;
      row.querySelectorAll('.pb-opt').forEach(function (x) {
        var o = +x.getAttribute('data-o');
        x.classList.toggle('is-right', o === q.answer);
        x.classList.toggle('is-wrong', o === chon && !dung);
        x.disabled = true;
      });
      var why = row.querySelector('.pb-why');
      why.hidden = false;
      why.className = 'pb-why ' + (dung ? 'ok' : 'bad');
      why.innerHTML = '<b>' + (dung ? '✓ Đúng.' : '✗ Chưa đúng.') + '</b> ' + esc(q.why) +
        (q.both ? ' <i>(Từ kia cũng không sai ngữ pháp, nhưng kém tự nhiên hơn ở câu này.)</i>' : '');
    }
    function tongKet() {
      var el = hop.querySelector('#pbSum');
      var lam = 0, dung = 0;
      data.forEach(function (g, gi) {
        (g.quiz || []).forEach(function (q, qi) {
          var c = st.chon[gi + '_' + qi];
          if (c != null) { lam++; if (c === q.answer) dung++; }
        });
      });
      if (el) el.innerHTML = 'Đã làm <b>' + lam + '/' + tongCau + '</b> câu · đúng <b>' + dung + '</b>' +
        (lam ? ' <button type="button" class="lv-btn ghost sm" id="pbLai">Làm lại</button>' : '');
      var lai = hop.querySelector('#pbLai');
      if (lai) lai.addEventListener('click', function () { st.chon = {}; ghi(key, st); mount(hop, data, opts); });
      if (lam === tongCau && tongCau && typeof opts.onDone === 'function') opts.onDone({ correct: dung, total: tongCau });
    }

    hop.querySelectorAll('.pb-q').forEach(function (row) {
      var c = st.chon[row.getAttribute('data-g') + '_' + row.getAttribute('data-q')];
      if (c != null) hienCau(row, c);
    });
    tongKet();

    if (hop._pbNghe) hop.removeEventListener('click', hop._pbNghe);
    hop._pbNghe = function (e) {
      var s = e.target.closest('[data-pb-say]');
      if (s) { opts.say(s.getAttribute('data-pb-say')); return; }
      var b = e.target.closest('.pb-opt');
      if (!b || b.disabled) return;
      var row = b.closest('.pb-q');
      var chon = +b.getAttribute('data-o');
      st.chon[row.getAttribute('data-g') + '_' + row.getAttribute('data-q')] = chon;
      ghi(key, st);
      hienCau(row, chon);
      tongKet();
    };
    hop.addEventListener('click', hop._pbNghe);
  }

  window.PhanBiet = { mount: mount };
})();
