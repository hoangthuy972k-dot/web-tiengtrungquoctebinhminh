/* ══════════════════════════════════════════════════════════
   BÀI TẬP SGK 练习 — đúng các dạng trong sách, trò thứ 5 ở bước Luyện tập
     BaiTapSgk.mount(hop, sgkData, { key, onDone })
   sgkData = [phần…], mỗi phần:
   · kho   — 选择合适的词语填空: khung từ + câu/đoạn có ＿＿ (một câu có thể nhiều chỗ)
   · ab    — 选择正确答案: chọn A/B
   · vitri — 给括号里的词选择适当的位置: chọn vị trí A/B/C/D cho từ trong ngoặc
   HSK 6 thêm:
   · mr — 模仿例子，写出更多的词语: gõ các từ có cùng chữ (chu) — so với đáp án sách + từ đúng khác
   · gx — 用所给词语或结构改写句子: viết lại câu có dùng từ/cấu trúc cho sẵn → so đáp án, tự đánh giá
   · mp — 阅读语段，模仿造句: đọc đoạn mẫu, điền vào câu khung → xem câu mẫu, tự đánh giá
   · bc — 扩展 病句: sửa câu sai → xem chỗ sai + câu đúng, tự đánh giá
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var LS_PREFIX = 'hyv_sgk:';
  var TRONG = '＿＿';
  var HAN = /[㐀-鿿]+/g;
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function doc(key) { try { return JSON.parse(localStorage.getItem(LS_PREFIX + key)) || {}; } catch (e) { return {}; } }
  function ghi(key, v) { try { localStorage.setItem(LS_PREFIX + key, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function boDau(t) { return String(t || '').replace(/[\s，。！？、,.!?；;：:“”"'‘’（）()…—]/g, ''); }
  function soHan(t) { return (String(t || '').match(/[㐀-鿿]/g) || []).length; }
  // Tô chữ có dấu chấm bên dưới (练习1): 爽快 + 快 -> 爽<em>快</em>
  function chamChu(tu, chu) {
    var i = tu.indexOf(chu);
    return i < 0 ? esc(tu) : esc(tu.slice(0, i)) + '<em class="sk-dot">' + esc(chu) + '</em>' + esc(tu.slice(i + chu.length));
  }
  function gachChan(t) { return esc(t).replace(/【/g, '<u class="sk-u">').replace(/】/g, '</u>'); }
  var TU_DANH_GIA = ['gx', 'mp', 'bc'];

  function mount(hop, parts, opts) {
    opts = opts || {};
    if (!hop || !parts || !parts.length) return;
    var key = opts.key || 'mac-dinh';
    var st = doc(key);
    function chuan() {
      st.kho = st.kho || {};   // "p" -> { o: [tu|null theo tung cho trong], kt: bool }
      st.ab = st.ab || {};     // "p_c" -> chi so
      st.vt = st.vt || {};     // "p_c" -> 'A'..'D'
      st.mr = st.mr || {};     // "p_c" -> { t: chuoi em go, kt: bool }
      st.vl = st.vl || {};     // "p_c" -> { t: bai em viet | [o khung], xem: bool, tu: true|false (tu danh gia) }
    }
    chuan();
    var chon = {};           // "p" -> chi so o trong dang chon (phan kho)
    var baoLoi = {};         // "p_c" -> loi nhac tam thoi (chua luu)
    function luu() { ghi(key, st); }

    // Danh sach o trong cua phan kho: [{c, j, dap}]
    function oKho(p) {
      var ds = [];
      p.cau.forEach(function (c, ci) { c.dap.forEach(function (d, j) { ds.push({ c: ci, j: j, dap: d }); }); });
      return ds;
    }

    // Tu em go cho phan mr: tach theo dau cach / dau phay
    function tuGo(t) { return String(t || '').split(/[\s,，、;；/]+/).map(function (x) { return x.trim(); }).filter(Boolean); }
    function chamMr(c, t) {
      var dung = (c.dap || []).concat(c.them || []);
      return tuGo(t).map(function (w) {
        return { w: w, loai: dung.indexOf(w) >= 0 ? 'ok' : w.indexOf(c.chu) < 0 ? 'bad' : 'hoi' };
      });
    }
    function mrDat(c, s) { return chamMr(c, s.t).filter(function (x) { return x.loai === 'ok'; }).length >= 2; }

    function diem() {
      var dung = 0, tong = 0, lam = 0;
      parts.forEach(function (p, pi) {
        if (p.kieu === 'kho') {
          var ds = oKho(p), s = st.kho[pi];
          tong += ds.length;
          if (s && s.kt) { lam += ds.length; ds.forEach(function (o, i) { if (s.o[i] === o.dap) dung++; }); }
        } else if (p.kieu === 'mr') {
          p.cau.forEach(function (c, ci) {
            tong++;
            var s = st.mr[pi + '_' + ci];
            if (s && s.kt) { lam++; if (mrDat(c, s)) dung++; }
          });
        } else if (TU_DANH_GIA.indexOf(p.kieu) >= 0) {
          p.cau.forEach(function (c, ci) {
            tong++;
            var s = st.vl[pi + '_' + ci];
            if (s && s.tu != null) { lam++; if (s.tu) dung++; }
          });
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
        '<ol class="sk-list' + (p.cau.length === 1 ? ' sk-doan' : '') + '">' + cauHtml + '</ol>' +
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

    /* ----- mr: 写出更多的词语 ----- */
    function veMr(p, pi) {
      var vd = p.vd ? '<div class="sk-vd lv-zh"><span>例：' + chamChu(p.vd.tu, p.vd.chu) + '：</span>' +
        (p.vd.ds || []).map(function (w) { return '<span class="sk-vd-w">' + chamChu(w, p.vd.chu) + '</span>'; }).join('') + '</div>' : '';
      return vd + '<ol class="sk-list sk-mr">' + p.cau.map(function (c, ci) {
        var k = pi + '_' + ci, s = st.mr[k] || { t: '', kt: false };
        var top = '<div class="sk-mr-tu lv-zh">' + chamChu(c.tu, c.chu) + '：</div>';
        if (!s.kt) {
          return '<li>' + top + '<div class="sk-mr-nhap"><input type="text" class="sk-input lv-zh" data-sk-mr-in="' + k + '" value="' + esc(s.t) +
            '" placeholder="Gõ 3–4 từ có chữ ' + esc(c.chu) + ', cách nhau bằng dấu cách" autocomplete="off" autocorrect="off" spellcheck="false">' +
            '<button type="button" class="lv-btn sm" data-sk-mr-kt="' + k + '">Kiểm tra</button></div>' +
            (baoLoi[k] ? '<div class="sk-nhac">' + esc(baoLoi[k]) + '</div>' : '') + '</li>';
        }
        var ds = chamMr(c, s.t), dat = mrDat(c, s);
        return '<li>' + top +
          '<div class="sk-mr-kq">' + ds.map(function (x) {
            return '<span class="sk-w is-' + x.loai + ' lv-zh" title="' + (x.loai === 'ok' ? 'Đúng' : x.loai === 'bad' ? 'Không có chữ ' + esc(c.chu) : 'Chưa có trong đáp án — hỏi thầy/cô') + '">' + esc(x.w) + '</span>';
          }).join('') + '</div>' +
          '<div class="pb-why ' + (dat ? 'ok' : 'bad') + '"><b>' + (dat ? '✓ Tốt!' : '✗ Cần ít nhất 2 từ đúng.') + '</b> ' +
            'Đáp án SGK: <span class="lv-zh">' + (c.dap || []).map(function (w) { return chamChu(w, c.chu); }).join('、') + '</span>' +
            (c.them && c.them.length ? '<br>Cũng đúng: <span class="lv-zh">' + esc(c.them.join('、')) + '</span>' : '') +
            (c.giai ? '<br>' + esc(c.giai) : '') +
            (ds.some(function (x) { return x.loai === 'hoi'; }) ? '<br><small>Từ gạch vàng có chữ ' + esc(c.chu) + ' nhưng chưa có trong danh sách — có thể vẫn đúng, em hỏi thầy/cô nhé.</small>' : '') +
          '</div>' +
          '<div class="lv-actions"><button type="button" class="lv-btn ghost sm" data-sk-mr-lai="' + k + '">Làm lại câu này</button></div></li>';
      }).join('') + '</ol>';
    }

    /* ----- Tự đánh giá sau khi xem đáp án (gx, mp, bc) ----- */
    function nutDanhGia(k, s) {
      if (s.tu != null) {
        return '<div class="sk-tdg-kq ' + (s.tu ? 'ok' : 'bad') + '">' + (s.tu ? (s.khop ? '✓ Trùng khớp đáp án — đúng!' : '✓ Em ghi là viết đúng') : '✗ Em ghi là chưa đúng — đọc lại đáp án nhé') +
          ' <button type="button" class="lv-btn ghost sm" data-sk-vl-lai="' + k + '">Làm lại</button></div>';
      }
      return '<div class="sk-tdg"><span>So với đáp án, câu của em:</span>' +
        '<button type="button" class="lv-btn sm" data-sk-tdg="' + k + '_1">✓ Đúng ý, đúng cấu trúc</button>' +
        '<button type="button" class="lv-btn ghost sm" data-sk-tdg="' + k + '_0">✗ Chưa đúng</button></div>';
    }

    function veGx(p, pi) {
      return '<ol class="sk-list sk-viet">' + p.cau.map(function (c, ci) {
        var k = pi + '_' + ci, s = st.vl[k] || { t: '' };
        var dau = '<div class="lv-zh sk-cau">' + esc(c.s) + ' <span class="sk-ngoac">（' + esc(c.tu) + '）</span></div>';
        if (!s.xem) {
          return '<li>' + dau + '<textarea class="sk-ta lv-zh" rows="2" data-sk-vl-in="' + k + '" placeholder="Viết lại câu, có dùng ' + esc(c.tu) + '…" spellcheck="false">' + esc(s.t) + '</textarea>' +
            '<div class="lv-actions"><button type="button" class="lv-btn sm" data-sk-vl-kt="' + k + '">Kiểm tra</button>' +
            (baoLoi[k] ? '<span class="sk-nhac">' + esc(baoLoi[k]) + '</span>' : '') + '</div></li>';
        }
        var trung = boDau(s.t) === boDau(c.dap);
        return '<li>' + dau +
          '<div class="sk-bai"><span class="sk-nhan">Câu của em</span><span class="lv-zh">' + esc(s.t) + '</span></div>' +
          '<div class="pb-why ok"><b>Đáp án SGK:</b> <span class="lv-zh">' + esc(c.dap) + '</span>' + (c.giai ? '<br>' + esc(c.giai) : '') + '</div>' +
          (trung && s.tu == null ? '' : nutDanhGia(k, s)) + '</li>';
      }).join('') + '</ol>';
    }

    function veBc(p, pi) {
      return '<ol class="sk-list sk-viet">' + p.cau.map(function (c, ci) {
        var k = pi + '_' + ci, s = st.vl[k] || { t: c.s };
        if (!s.xem) {
          return '<li><div class="lv-zh sk-cau">' + esc(c.s) + '</div>' +
            '<textarea class="sk-ta lv-zh" rows="2" data-sk-vl-in="' + k + '" spellcheck="false">' + esc(s.t != null ? s.t : c.s) + '</textarea>' +
            '<div class="lv-actions"><button type="button" class="lv-btn sm" data-sk-vl-kt="' + k + '">Kiểm tra</button>' +
            '<span class="lv-hint">' + (baoLoi[k] ? esc(baoLoi[k]) : 'Tìm chỗ sai rồi sửa ngay trong ô.') + '</span></div></li>';
        }
        var i = c.s.indexOf(c.sai);
        var toSai = i < 0 ? esc(c.s) : esc(c.s.slice(0, i)) + '<mark class="sk-sai">' + esc(c.sai) + '</mark>' + esc(c.s.slice(i + c.sai.length));
        return '<li><div class="lv-zh sk-cau">' + toSai + '</div>' +
          '<div class="sk-bai"><span class="sk-nhan">Em sửa</span><span class="lv-zh">' + esc(s.t) + '</span></div>' +
          '<div class="pb-why ok">' + (c.loai ? '<span class="lv-tag">' + esc(c.loai) + '</span> ' : '') + '<b>Câu đúng:</b> <span class="lv-zh">' + esc(c.dap) + '</span>' +
            (c.giai ? '<br>' + esc(c.giai) : '') + '</div>' +
          (boDau(s.t) === boDau(c.dap) && s.tu == null ? '' : nutDanhGia(k, s)) + '</li>';
      }).join('') + '</ol>';
    }

    function veMp(p, pi) {
      return '<ol class="sk-list sk-viet">' + p.cau.map(function (c, ci) {
        var k = pi + '_' + ci, s = st.vl[k] || {};
        var o = Array.isArray(s.t) ? s.t : [];
        var manh = c.khung.split(TRONG);
        var mau = '<div class="sk-mau lv-zh">' + gachChan(c.mau) + '</div>';
        if (!s.xem) {
          var khung = esc(manh[0]);
          for (var j = 1; j < manh.length; j++) {
            khung += '<input type="text" class="sk-input sk-o-mp lv-zh" data-sk-mp="' + k + '_' + (j - 1) + '" value="' + esc(o[j - 1] || '') + '" autocomplete="off" spellcheck="false">' + esc(manh[j]);
          }
          return '<li>' + mau + '<div class="sk-khung lv-zh">' + khung + '</div>' +
            '<div class="lv-actions"><button type="button" class="lv-btn sm" data-sk-vl-kt="' + k + '">Xem câu mẫu</button>' +
            (baoLoi[k] ? '<span class="sk-nhac">' + esc(baoLoi[k]) + '</span>' : '<span class="lv-hint">Bắt chước phần gạch chân để điền.</span>') + '</div></li>';
        }
        var cuaEm = esc(manh[0]), mauDien = esc(manh[0]);
        for (var m = 1; m < manh.length; m++) {
          cuaEm += '<b class="sk-dien">' + esc(o[m - 1] || '') + '</b>' + esc(manh[m]);
          mauDien += '<b class="sk-dien">' + esc(c.dap[m - 1] || '') + '</b>' + esc(manh[m]);
        }
        return '<li>' + mau +
          '<div class="sk-bai"><span class="sk-nhan">Câu của em</span><span class="lv-zh">' + cuaEm + '</span></div>' +
          '<div class="pb-why ok"><b>Câu mẫu:</b> <span class="lv-zh">' + mauDien + '</span>' + (c.giai ? '<br>' + esc(c.giai) : '') + '</div>' +
          nutDanhGia(k, s) + '</li>';
      }).join('') + '</ol>';
    }

    function vePhan(p, pi) {
      switch (p.kieu) {
        case 'kho': return veKho(p, pi);
        case 'ab': return veAb(p, pi);
        case 'mr': return veMr(p, pi);
        case 'gx': return veGx(p, pi);
        case 'bc': return veBc(p, pi);
        case 'mp': return veMp(p, pi);
        default: return veViTri(p, pi);
      }
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
            vePhan(p, pi) + '</div>';
        }).join('');
      if (d.lam === d.tong && d.tong && typeof opts.onDone === 'function') opts.onDone({ correct: d.dung, total: d.tong });
    }

    // Luu chu dang go (khong ve lai de khong mat con tro)
    hop.oninput = function (e) {
      var el = e.target, a;
      if ((a = el.getAttribute('data-sk-mr-in'))) { st.mr[a] = { t: el.value, kt: false }; luu(); return; }
      if ((a = el.getAttribute('data-sk-vl-in'))) { st.vl[a] = { t: el.value }; luu(); return; }
      if ((a = el.getAttribute('data-sk-mp'))) {
        var x = a.split('_'), k = x[0] + '_' + x[1];
        var s = st.vl[k] || (st.vl[k] = { t: [] });
        if (!Array.isArray(s.t)) s.t = [];
        s.t[+x[2]] = el.value; luu();
      }
    };
    hop.onkeydown = function (e) {
      var a = e.target.getAttribute && e.target.getAttribute('data-sk-mr-in');
      if (a && e.key === 'Enter') { e.preventDefault(); kiemMr(a); }
    };

    function kiemMr(k) {
      var x = k.split('_'), c = parts[+x[0]].cau[+x[1]];
      var s = st.mr[k] || { t: '' };
      if (!tuGo(s.t).length) { baoLoi[k] = 'Em gõ vài từ có chữ ' + c.chu + ' trước đã.'; ve(); return; }
      delete baoLoi[k];
      st.mr[k] = { t: s.t, kt: true }; luu(); ve();
    }

    function kiemViet(k) {
      var x = k.split('_'), p = parts[+x[0]], c = p.cau[+x[1]];
      var s = st.vl[k] || {};
      delete baoLoi[k];
      if (p.kieu === 'mp') {
        var o = Array.isArray(s.t) ? s.t : [];
        var soO = c.khung.split(TRONG).length - 1;
        for (var i = 0; i < soO; i++) if (!soHan(o[i])) { baoLoi[k] = 'Em điền đủ các chỗ trống trước đã.'; ve(); return; }
        st.vl[k] = { t: o, xem: true };
      } else if (p.kieu === 'gx') {
        var t = String(s.t || '').trim();
        if (soHan(t) < 4) { baoLoi[k] = 'Em viết lại cả câu trước đã.'; ve(); return; }
        var thieu = (String(c.tu).match(HAN) || []).filter(function (h) { return t.indexOf(h) < 0; });
        if (thieu.length) { baoLoi[k] = 'Câu của em chưa dùng ' + thieu.join('……') + ' — đề bắt buộc dùng từ/cấu trúc trong ngoặc.'; ve(); return; }
        // Trung nguyen van dap an thi tinh dung luon
        st.vl[k] = boDau(t) === boDau(c.dap) ? { t: t, xem: true, tu: true, khop: true } : { t: t, xem: true };
      } else {
        var tb = String(s.t != null ? s.t : c.s).trim();
        if (boDau(tb) === boDau(c.s)) { baoLoi[k] = 'Em chưa sửa gì — câu này có một chỗ dùng từ sai.'; ve(); return; }
        st.vl[k] = boDau(tb) === boDau(c.dap) ? { t: tb, xem: true, tu: true, khop: true } : { t: tb, xem: true };
      }
      luu(); ve();
    }

    hop.onclick = function (e) {
      var b = e.target.closest('button');
      if (!b || b.disabled) return;
      var a;
      if (b.id === 'skLaiHet') { st = {}; chuan(); chon = {}; baoLoi = {}; luu(); ve(); return; }
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
      if ((a = b.getAttribute('data-sk-vt'))) { var z = a.split('_'); st.vt[z[0] + '_' + z[1]] = z[2]; luu(); ve(); return; }
      if ((a = b.getAttribute('data-sk-mr-kt'))) { kiemMr(a); return; }
      if ((a = b.getAttribute('data-sk-mr-lai'))) { st.mr[a] = { t: '', kt: false }; luu(); ve(); return; }
      if ((a = b.getAttribute('data-sk-vl-kt'))) { kiemViet(a); return; }
      if ((a = b.getAttribute('data-sk-tdg'))) {
        var w = a.split('_'), k2 = w[0] + '_' + w[1];
        st.vl[k2].tu = w[2] === '1'; luu(); ve(); return;
      }
      if ((a = b.getAttribute('data-sk-vl-lai'))) { delete st.vl[a]; luu(); ve(); }
    };
    ve();
  }

  window.BaiTapSgk = { mount: mount };
})();
