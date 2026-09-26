/* ══════════════════════════════════════════════════════════
   BÀI TẬP SGK 练习 — đúng các dạng trong sách, trò thứ 5 ở bước Luyện tập
     BaiTapSgk.mount(hop, sgkData, { key, onDone })
   sgkData = [phần…], mỗi phần:
   · kho   — 选择合适的词语填空: khung từ + câu có ＿＿ (một câu có thể nhiều chỗ)
   · ab    — 选择正确答案: chọn A/B
   · vitri — 给括号里的词选择适当的位置: chọn vị trí A/B/C/D cho từ trong ngoặc
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var LS_PREFIX = 'hyv_sgk:';
  var TRONG = '＿＿';
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function doc(key) { try { return JSON.parse(localStorage.getItem(LS_PREFIX + key)) || {}; } catch (e) { return {}; } }
  function ghi(key, v) { try { localStorage.setItem(LS_PREFIX + key, JSON.stringify(v)); } catch (e) { /* bo qua */ } }

  function mount(hop, parts, opts) {
    opts = opts || {};
    if (!hop || !parts || !parts.length) return;
    var key = opts.key || 'mac-dinh';
    var st = doc(key);
    st.kho = st.kho || {};   // "p" -> { o: [tu|null theo tung cho trong], kt: bool }
    st.ab = st.ab || {};     // "p_c" -> chi so
    st.vt = st.vt || {};     // "p_c" -> 'A'..'D'
    var chon = {};           // "p" -> chi so o trong dang chon (phan kho)
    function luu() { ghi(key, st); }

    // Danh sach o trong cua phan kho: [{c, j, dap}]
    function oKho(p) {
      var ds = [];
      p.cau.forEach(function (c, ci) { c.dap.forEach(function (d, j) { ds.push({ c: ci, j: j, dap: d }); }); });
      return ds;
    }

    function diem() {
      var dung = 0, tong = 0, lam = 0;
      parts.forEach(function (p, pi) {
        if (p.kieu === 'kho') {
          var ds = oKho(p), s = st.kho[pi];
          tong += ds.length;
          if (s && s.kt) { lam += ds.length; ds.forEach(function (o, i) { if (s.o[i] === o.dap) dung++; }); }
        } else {
          p.cau.forEach(function (c, ci) {
            tong++;
            var v = (p.kieu === 'ab' ? st.ab : st.vt)[pi + '_' + ci];
            if (v != null) { lam++; if (v === c.ans) dung++; }
          });
        }
      });
      return { dung: dung, tong: tong, lam: lam };
    }

    function veKho(p, pi) {
      var ds = oKho(p);
      var s = st.kho[pi] || (st.kho[pi] = { o: ds.map(function () { return null; }), kt: false });
      if (s.o.length !== ds.length) s.o = ds.map(function () { return null; });
      var dangChon = chon[pi];
      if (dangChon == null || s.o[dangChon] != null) {
        dangChon = s.o.indexOf(null);
        chon[pi] = dangChon;
      }
      var daDung = s.o.filter(Boolean);
      var i = 0;
      var cauHtml = p.cau.map(function (c, ci) {
        var manh = c.s.split(TRONG), out = esc(manh[0]);
        for (var k = 1; k < manh.length; k++) {
          var idx = i++, o = ds[idx], v = s.o[idx];
          var cls = 'nd-o' + (v ? ' is-full' : '') + (!s.kt && idx === dangChon ? ' is-active' : '') + (s.kt ? (v === o.dap ? ' is-ok' : ' is-bad') : '');
          out += '<button type="button" class="' + cls + '" data-sk-o="' + pi + '_' + idx + '"' + (s.kt ? ' disabled' : '') + '>' + (v ? esc(v) : '&nbsp;') + '</button>' +
            (s.kt && v !== o.dap ? '<span class="nd-sua">' + esc(o.dap) + '</span>' : '') + esc(manh[k]);
        }
        return '<li class="lv-zh">' + out + '</li>';
      }).join('');
      var xong = s.o.indexOf(null) < 0;
      return '<div class="nd-kho sk-kho">' + p.tu.map(function (w) {
          var dem = daDung.filter(function (x) { return x === w; }).length;
          return '<button type="button" class="lv-chip nd-tu" data-sk-tu="' + pi + '" data-w="' + esc(w) + '"' + (dem || s.kt ? ' disabled' : '') + '>' + esc(w) + '</button>';
        }).join('') + '</div>' +
        '<ol class="sk-list">' + cauHtml + '</ol>' +
        '<div class="lv-actions">' + (s.kt
          ? '<button type="button" class="lv-btn ghost sm" data-sk-lai="' + pi + '">Làm lại phần này</button>'
          : '<button type="button" class="lv-btn sm" data-sk-kt="' + pi + '"' + (xong ? '' : ' disabled') + '>Kiểm tra</button><span class="lv-hint">' +
            (xong ? 'Điền xong — bấm Kiểm tra.' : 'Bấm ô trống rồi chọn từ trong khung. Mỗi từ dùng một lần.') + '</span>') + '</div>';
    }

    function veAb(p, pi) {
      return '<ol class="sk-list">' + p.cau.map(function (c, ci) {
        var v = st.ab[pi + '_' + ci], xong = v != null;
        return '<li><div class="lv-zh sk-cau">' + esc(c.s) + '</div><div class="sk-ab">' + c.opts.map(function (o, oi) {
            var cls = 'lv-chip pb-opt' + (xong ? (oi === c.ans ? ' is-right' : (oi === v ? ' is-wrong' : '')) : '');
            return '<button type="button" class="' + cls + '" data-sk-ab="' + pi + '_' + ci + '_' + oi + '"' + (xong ? ' disabled' : '') + '>' + 'AB'.charAt(oi) + '. ' + esc(o) + '</button>';
          }).join('') + '</div>' +
          (xong ? '<div class="pb-why ' + (v === c.ans ? 'ok' : 'bad') + '"><b>' + (v === c.ans ? '✓ Đúng.' : '✗ Chưa đúng.') + '</b> ' + esc(c.giai || '') + '</div>' : '') +
        '</li>';
      }).join('') + '</ol>';
    }

    function veViTri(p, pi) {
      return '<ol class="sk-list">' + p.cau.map(function (c, ci) {
        var v = st.vt[pi + '_' + ci], xong = v != null;
        var html = esc(c.s).replace(/[ABCD]/g, function (L) {
          var cls = 'sk-vt' + (xong ? (L === c.ans ? ' is-right' : (L === v ? ' is-wrong' : '')) : '');
          return '<button type="button" class="' + cls + '" data-sk-vt="' + pi + '_' + ci + '_' + L + '"' + (xong ? ' disabled' : '') + '>' + L + '</button>';
        });
        var dungCau = xong ? c.s.replace(c.ans, c.tu).replace(/[ABCD]/g, '') : '';
        return '<li><div class="lv-zh sk-cau">' + html + ' <span class="sk-ngoac">（' + esc(c.tu) + '）</span></div>' +
          (xong ? '<div class="pb-why ' + (v === c.ans ? 'ok' : 'bad') + '"><b>' + (v === c.ans ? '✓ Đúng.' : '✗ Chưa đúng — vị trí ' + c.ans + '.') + '</b> <span class="lv-zh">' + esc(dungCau) + '</span><br>' + esc(c.giai || '') + '</div>' : '') +
        '</li>';
      }).join('') + '</ol>';
    }

    function ve() {
      var d = diem();
      hop.classList.add('lv');
      hop.innerHTML =
        '<div class="lv-sx-sum">Đã làm <b>' + d.lam + '/' + d.tong + '</b> · đúng <b>' + d.dung + '</b>' +
          (d.lam ? ' <button type="button" class="lv-btn ghost sm" id="skLaiHet">Làm lại tất cả</button>' : '') + '</div>' +
        parts.map(function (p, pi) {
          return '<div class="lv-card sk-part"><div class="sk-head"><span class="lv-num">' + (pi + 1) + '</span>' +
            '<div><h3 class="lv-zh">' + esc(p.de) + '</h3><div class="pb-vn">' + esc(p.vn || '') + '</div></div></div>' +
            (p.kieu === 'kho' ? veKho(p, pi) : p.kieu === 'ab' ? veAb(p, pi) : veViTri(p, pi)) + '</div>';
        }).join('');
      if (d.lam === d.tong && d.tong && typeof opts.onDone === 'function') opts.onDone({ correct: d.dung, total: d.tong });
    }

    hop.onclick = function (e) {
      var b = e.target.closest('button');
      if (!b || b.disabled) return;
      var a;
      if (b.id === 'skLaiHet') { st = { kho: {}, ab: {}, vt: {} }; chon = {}; luu(); ve(); return; }
      if ((a = b.getAttribute('data-sk-o'))) {
        var x = a.split('_'), s = st.kho[+x[0]];
        if (s.o[+x[1]] != null) { s.o[+x[1]] = null; luu(); }
        chon[+x[0]] = +x[1]; ve(); return;
      }
      if ((a = b.getAttribute('data-sk-tu'))) {
        var pi = +a, s2 = st.kho[pi];
        var o = chon[pi] != null && s2.o[chon[pi]] == null ? chon[pi] : s2.o.indexOf(null);
        if (o < 0) return;
        s2.o[o] = b.getAttribute('data-w'); chon[pi] = null; luu(); ve(); return;
      }
      if ((a = b.getAttribute('data-sk-kt'))) { st.kho[+a].kt = true; luu(); ve(); return; }
      if ((a = b.getAttribute('data-sk-lai'))) { delete st.kho[+a]; chon[+a] = null; luu(); ve(); return; }
      if ((a = b.getAttribute('data-sk-ab'))) { var y = a.split('_'); st.ab[y[0] + '_' + y[1]] = +y[2]; luu(); ve(); return; }
      if ((a = b.getAttribute('data-sk-vt'))) { var z = a.split('_'); st.vt[z[0] + '_' + z[1]] = z[2]; luu(); ve(); }
    };
    ve();
  }

  window.BaiTapSgk = { mount: mount };
})();
