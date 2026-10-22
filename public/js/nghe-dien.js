/* ══════════════════════════════════════════════════════════
   NGHE VÀ ĐIỀN TỪ — luyện nghe trên bài khoá (app, màn Bài khoá)
     NgheDien.mount(hop, { lines:[{zh}], words:[từ mới], key, say, onDone })
   Máy tự đục lỗ các TỪ MỚI của bài có trong bài khoá (mỗi từ một lần,
   rải đều các đoạn), trộn thêm vài từ nhiễu vào khung từ. Học sinh nghe
   audio gốc của bài khoá rồi chọn từ điền vào chỗ trống, bấm Kiểm tra.
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var LS_PREFIX = 'hyv_nghedien:';
  var TOI_DA = 16;
  var LOA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>';
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function doc(key) { try { return JSON.parse(localStorage.getItem(LS_PREFIX + key)) || {}; } catch (e) { return {}; } }
  function ghi(key, v) { try { localStorage.setItem(LS_PREFIX + key, JSON.stringify(v)); } catch (e) { /* bo qua */ } }

  // Chon cho duc lo: moi tu moi mot lan (lan dau xuat hien), khong chong nhau,
  // qua TOI_DA thi lay rai deu tu dau den cuoi bai
  function taoLo(lines, words) {
    var tu = words.filter(function (w, i) { return w && w.length >= 1 && words.indexOf(w) === i; })
      .sort(function (a, b) { return b.length - a.length; });
    var ung = [];
    var daDung = {};
    lines.forEach(function (ln, li) {
      var zh = ln.zh || '';
      var chiem = [];
      tu.forEach(function (w) {
        if (daDung[w]) return;
        var p = zh.indexOf(w);
        while (p >= 0) {
          var trung = chiem.some(function (c) { return p < c[1] && p + w.length > c[0]; });
          if (!trung) {
            chiem.push([p, p + w.length]);
            ung.push({ li: li, p: p, w: w });
            daDung[w] = 1;
            break;
          }
          p = zh.indexOf(w, p + 1);
        }
      });
    });
    ung.sort(function (a, b) { return a.li - b.li || a.p - b.p; });
    if (ung.length > TOI_DA) {
      var buoc = ung.length / TOI_DA, chon = [];
      for (var i = 0; i < TOI_DA; i++) chon.push(ung[Math.floor(i * buoc)]);
      ung = chon;
    }
    return ung;
  }

  function tron(arr, hat) {
    var a = arr.slice(), s = hat || 13;
    for (var i = a.length - 1; i > 0; i--) {
      s = (s * 9301 + 49297) % 233280;
      var j = Math.floor(s / 233280 * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function mount(hop, opts) {
    opts = opts || {};
    if (!hop || !opts.lines || !opts.lines.length) return;
    var lines = opts.lines, key = opts.key || 'mac-dinh';
    var lo = taoLo(lines, opts.words || []);
    if (lo.length < 3) { hop.innerHTML = ''; return; }
    var dapAn = lo.map(function (x) { return x.w; });
    var nhieu = tron((opts.words || []).filter(function (w) { return dapAn.indexOf(w) < 0; }), 7).slice(0, 4);
    var kho = tron(dapAn.concat(nhieu), 29);

    var st = doc(key);
    if (!st.dien || st.dien.length !== lo.length || st.n !== lo.length) st = { n: lo.length, dien: lo.map(function () { return null; }), kt: false };
    var dangChon = -1;
    function luu() { ghi(key, st); }
    function oTrongDau() { for (var i = 0; i < st.dien.length; i++) if (st.dien[i] == null) return i; return -1; }

    function ve() {
      var daDung = {};
      st.dien.forEach(function (k) { if (k != null) daDung[k] = 1; });
      if (dangChon < 0 || st.dien[dangChon] != null) dangChon = oTrongDau();
      var soDung = st.kt ? st.dien.filter(function (k, i) { return k != null && kho[k] === dapAn[i]; }).length : 0;

      // Ghep doan van co cho trong
      var theoDong = {};
      lo.forEach(function (x, i) { (theoDong[x.li] = theoDong[x.li] || []).push({ p: x.p, w: x.w, i: i }); });
      var doanHtml = lines.map(function (ln, li) {
        var zh = ln.zh || '', ds = theoDong[li] || [], out = '', p = 0;
        ds.sort(function (a, b) { return a.p - b.p; }).forEach(function (o) {
          out += esc(zh.slice(p, o.p));
          var k = st.dien[o.i], cls = 'nd-o';
          if (k != null) cls += ' is-full';
          if (!st.kt && o.i === dangChon) cls += ' is-active';
          if (st.kt) cls += (k != null && kho[k] === o.w) ? ' is-ok' : ' is-bad';
          out += '<button type="button" class="' + cls + '" data-nd-o="' + o.i + '"' + (st.kt ? ' disabled' : '') + ' aria-label="Chỗ trống ' + (o.i + 1) + '">' +
            '<sup>' + (o.i + 1) + '</sup>' + (k != null ? esc(kho[k]) : '&nbsp;') + '</button>' +
            (st.kt && !(k != null && kho[k] === o.w) ? '<span class="nd-sua">' + esc(o.w) + '</span>' : '');
          p = o.p + o.w.length;
        });
        out += esc(zh.slice(p));
        return '<p class="nd-doan"><span class="lv-zh">' + out + '</span>' +
          (typeof opts.say === 'function' ? ' <button type="button" class="pb-loa" data-nd-say="' + li + '" aria-label="Nghe riêng đoạn này (giọng máy)" title="Nghe riêng đoạn này (giọng máy)">' + LOA + '</button>' : '') + '</p>';
      }).join('');

      hop.innerHTML =
        '<div class="lv-card nd">' +
          '<div class="nd-head"><div class="lv-label">🎧 Nghe và chọn từ điền vào chỗ trống</div>' +
            (st.kt ? '<b class="nd-diem">' + soDung + '/' + lo.length + '</b>' : '<span class="lv-hint">' + st.dien.filter(function (k) { return k != null; }).length + '/' + lo.length + ' chỗ</span>') + '</div>' +
          '<p class="lv-note">Mở audio bài khoá ở trên, vừa nghe vừa chọn từ trong khung điền vào chỗ trống đang sáng. Bấm vào ô đã điền để đổi từ khác.</p>' +
          '<div class="nd-kho">' + kho.map(function (w, k) {
            return '<button type="button" class="lv-chip nd-tu" data-nd-tu="' + k + '"' + (daDung[k] || st.kt ? ' disabled' : '') + '>' + esc(w) + '</button>';
          }).join('') + '</div>' +
          '<div class="nd-bai">' + doanHtml + '</div>' +
          '<div class="lv-actions">' +
            (st.kt
              ? '<button type="button" class="lv-btn ghost sm" id="ndLai">Làm lại</button><span class="lv-hint">' +
                (soDung === lo.length ? 'Tuyệt vời, nghe đúng hết!' : 'Chỗ sai có từ đúng màu xanh bên cạnh — nghe lại đoạn đó một lần nữa.') + '</span>'
              : '<button type="button" class="lv-btn sm" id="ndKt"' + (oTrongDau() < 0 ? '' : ' disabled') + '>Kiểm tra</button>' +
                '<span class="lv-hint">' + (oTrongDau() < 0 ? 'Điền xong rồi — bấm Kiểm tra.' : 'Điền hết các chỗ trống để kiểm tra.') + '</span>') +
          '</div>' +
        '</div>';
    }

    hop.onclick = function (e) {
      var b = e.target.closest('button');
      if (!b || b.disabled) return;
      if (b.hasAttribute('data-nd-say')) { opts.say(lines[+b.getAttribute('data-nd-say')].zh); return; }
      if (b.hasAttribute('data-nd-o')) {
        var i = +b.getAttribute('data-nd-o');
        if (st.dien[i] != null) { st.dien[i] = null; luu(); }
        dangChon = i; ve(); return;
      }
      if (b.hasAttribute('data-nd-tu')) {
        var o = dangChon >= 0 && st.dien[dangChon] == null ? dangChon : oTrongDau();
        if (o < 0) return;
        st.dien[o] = +b.getAttribute('data-nd-tu');
        dangChon = -1; luu(); ve(); return;
      }
      if (b.id === 'ndKt') {
        st.kt = true; luu(); ve();
        if (typeof opts.onDone === 'function') {
          opts.onDone({ correct: st.dien.filter(function (k, i) { return kho[k] === dapAn[i]; }).length, total: lo.length });
        }
        return;
      }
      if (b.id === 'ndLai') { st = { n: lo.length, dien: lo.map(function () { return null; }), kt: false }; dangChon = -1; luu(); ve(); }
    };
    ve();
  }

  window.NgheDien = { mount: mount, _taoLo: taoLo };
})();
