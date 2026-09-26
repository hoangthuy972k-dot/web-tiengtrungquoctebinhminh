/* ══════════════════════════════════════════════════════════
   PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — dùng chung cho app (Luyện thêm)
   và thẻ "Phân biệt từ" trên trang bài đầy đủ (hsk5-extra.js):
     PhanBiet.mount(hop, synonymData, { key, say, onDone })
   Mỗi cặp: giống nhau → khác nhau → làm thử.
   Cặp có g.sgk (lấy từ SGK) thì vẽ đúng như sách: bảng 共同点 / 不同点 so
   hàng đối hàng, và 做一做 tích 1 hoặc CẢ HAI từ cho mỗi câu.
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
    st.chon = st.chon || {};   // cau chon 1 tu: "g_q" -> chi so
    st.tich = st.tich || {};   // 做一做: "g_q" -> [bool, bool]
    st.xong = st.xong || {};   // 做一做 da kiem tra: "g_q" -> true
    var coLoa = typeof opts.say === 'function';
    function loa(t) {
      return coLoa ? '<button type="button" class="pb-loa" data-pb-say="' + esc(t) + '" aria-label="Nghe đọc">' + LOA + '</button>' : '';
    }
    function luu() { ghi(key, st); }

    // Danh sach cau tinh diem: [{g, q, loai:'chon'|'tich'}]
    var dsCau = [];
    data.forEach(function (g, gi) {
      if (g.sgk && g.sgk.lamThu) g.sgk.lamThu.forEach(function (c, qi) { if (!c.mau) dsCau.push({ g: gi, q: qi, loai: 'tich' }); });
      else (g.quiz || []).forEach(function (_, qi) { dsCau.push({ g: gi, q: qi, loai: 'chon' }); });
    });
    var tongCau = dsCau.length;

    function oBang(o) {
      if (!o) return '';
      return '<div class="pb-b-t lv-zh">' + esc(o.t) + '</div><div class="pb-vn">' + esc(o.vn || '') + '</div>' +
        (o.vd ? '<div class="pb-b-vd"><span class="lv-zh">如：' + esc(o.vd) + '</span> ' + loa(o.vd) + (o.vdVn ? '<div class="pb-vn">' + esc(o.vdVn) + '</div>' : '') + '</div>' : '');
    }

    function veSgk(g, gi) {
      var s = g.sgk, w1 = g.items[0].word, w2 = g.items[1].word;
      var bang = '<div class="pb-bang-wrap"><table class="pb-bang">' +
        '<thead><tr><th></th><th class="lv-zh">' + esc(w1) + ' ' + loa(w1) + '</th><th class="lv-zh">' + esc(w2) + ' ' + loa(w2) + '</th></tr></thead><tbody>' +
        '<tr class="pb-chung"><th scope="row" class="lv-zh">共同点</th><td colspan="2">' + oBang(s.chung) + '</td></tr>' +
        s.khac.map(function (r, i) {
          return '<tr>' + (i === 0 ? '<th scope="row" rowspan="' + s.khac.length + '" class="lv-zh">不同点</th>' : '') +
            '<td>' + (i + 1) + '. ' + oBang(r.a) + '</td><td>' + (i + 1) + '. ' + oBang(r.b) + '</td></tr>';
        }).join('') +
        '</tbody></table></div>';
      var lam = (s.lamThu || []).map(function (c, qi) {
        var k = gi + '_' + qi;
        var tich = c.mau ? c.dap : (st.tich[k] || [false, false]);
        var xong = c.mau || st.xong[k];
        var dung = xong && tich[0] === c.dap[0] && tich[1] === c.dap[1];
        return '<tr class="pb-lt' + (c.mau ? ' is-mau' : xong ? (dung ? ' is-dung' : ' is-sai') : '') + '" data-g="' + gi + '" data-q="' + qi + '">' +
          '<td class="lv-zh">(' + (qi + 1) + ') ' + esc(c.s) + (c.mau ? ' <span class="pb-mau">Ví dụ</span>' : '') +
            (xong && !c.mau ? '<div class="pb-why ' + (dung ? 'ok' : 'bad') + '"><b>' + (dung ? '✓ Đúng.' : '✗ Chưa đúng — đáp án: ' +
              [w1, w2].filter(function (_, j) { return c.dap[j]; }).join(' và ') + '.') + '</b> ' + esc(c.giai || '') + '</div>' : '') +
            (c.mau ? '<div class="pb-vn">' + esc(c.giai || '') + '</div>' : '') + '</td>' +
          [0, 1].map(function (j) {
            return '<td class="pb-tich-o"><button type="button" class="pb-tich' + (tich[j] ? ' is-on' : '') +
              (xong ? (c.dap[j] ? ' is-dap' : (tich[j] ? ' is-thua' : '')) : '') + '" data-j="' + j + '"' + (xong ? ' disabled' : '') +
              ' aria-pressed="' + (tich[j] ? 'true' : 'false') + '" aria-label="' + esc([w1, w2][j]) + '">' + (tich[j] || (xong && c.dap[j]) ? '✓' : '') + '</button></td>';
          }).join('') +
          '<td class="pb-kt-o">' + (xong ? '' : '<button type="button" class="lv-btn sm pb-kt"' + (tich[0] || tich[1] ? '' : ' disabled') + '>Kiểm tra</button>') + '</td>' +
        '</tr>';
      }).join('');
      return '<div class="pb-sgk-tag">Theo SGK · 词语辨析</div>' + bang +
        (lam ? '<div class="lv-label">做一做 · Chọn từ điền vào chỗ trống — tích một hoặc CẢ HAI từ nếu cả hai đều đúng</div>' +
          '<div class="pb-bang-wrap"><table class="pb-lam"><thead><tr><th></th><th class="lv-zh">' + esc(w1) + '</th><th class="lv-zh">' + esc(w2) + '</th><th></th></tr></thead><tbody>' +
          lam + '</tbody></table></div>' : '');
    }

    function veThuong(g, gi) {
      return '<div class="pb-same"><b>Giống nhau:</b> ' + esc(g.same) +
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
        }).join('') : '');
    }

    function ve() {
      hop.classList.add('lv');
      hop.innerHTML =
        '<div class="lv-card lv-intro-card">Lên HSK 5, cái khó không còn là cấu trúc mà là <b>chọn đúng từ trong mấy từ cùng nghĩa</b>. ' +
          'Đọc phần giống nhau, khác nhau rồi làm thử ngay bên dưới mỗi cặp.</div>' +
        (tongCau ? '<div class="lv-sx-sum" id="pbSum"></div>' : '') +
        data.map(function (g, gi) {
          return '<div class="lv-card pb-card">' +
            '<div class="pb-head"><span class="lv-num">' + (gi + 1) + '</span><h3 class="lv-zh">' + esc(g.pair) + '</h3></div>' +
            (g.sgk ? veSgk(g, gi) : veThuong(g, gi)) +
          '</div>';
        }).join('');
      hop.querySelectorAll('.pb-q').forEach(function (row) {
        var c = st.chon[row.getAttribute('data-g') + '_' + row.getAttribute('data-q')];
        if (c != null) hienCau(row, c);
      });
      tongKet();
    }

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
      dsCau.forEach(function (c) {
        var g = data[c.g], k = c.g + '_' + c.q;
        if (c.loai === 'chon') {
          var v = st.chon[k];
          if (v != null) { lam++; if (v === g.quiz[c.q].answer) dung++; }
        } else if (st.xong[k]) {
          lam++;
          var d = g.sgk.lamThu[c.q].dap, t = st.tich[k] || [];
          if (!!t[0] === d[0] && !!t[1] === d[1]) dung++;
        }
      });
      if (el) el.innerHTML = 'Đã làm <b>' + lam + '/' + tongCau + '</b> câu · đúng <b>' + dung + '</b>' +
        (lam ? ' <button type="button" class="lv-btn ghost sm" id="pbLai">Làm lại</button>' : '');
      if (lam === tongCau && tongCau && typeof opts.onDone === 'function') opts.onDone({ correct: dung, total: tongCau });
    }

    hop.onclick = function (e) {
      var s = e.target.closest('[data-pb-say]');
      if (s) { opts.say(s.getAttribute('data-pb-say')); return; }
      if (e.target.closest('#pbLai')) { st.chon = {}; st.tich = {}; st.xong = {}; luu(); ve(); return; }
      var b = e.target.closest('.pb-opt');
      if (b && !b.disabled) {
        var row = b.closest('.pb-q');
        var chon = +b.getAttribute('data-o');
        st.chon[row.getAttribute('data-g') + '_' + row.getAttribute('data-q')] = chon;
        luu(); hienCau(row, chon); tongKet();
        return;
      }
      var tr = e.target.closest('.pb-lt');
      if (!tr || tr.classList.contains('is-mau')) return;
      var k = tr.getAttribute('data-g') + '_' + tr.getAttribute('data-q');
      var t = e.target.closest('.pb-tich');
      if (t && !t.disabled) {
        var arr = (st.tich[k] || [false, false]).slice();
        arr[+t.getAttribute('data-j')] = !arr[+t.getAttribute('data-j')];
        st.tich[k] = arr; luu(); ve();
        return;
      }
      if (e.target.closest('.pb-kt')) { st.xong[k] = true; luu(); ve(); }
    };

    ve();
  }

  window.PhanBiet = { mount: mount };
})();
