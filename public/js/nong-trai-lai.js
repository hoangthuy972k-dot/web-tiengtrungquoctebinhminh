/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — PHONG LAI GIONG 育种室 (2026-11-23, co giao: "them tinh nang lai giong cay")
   · Chon 2 loai nong san trong kho (4 qua / loai; qua dot bien 突变 1 qua la du) -> 20 xu + 3 cau hoi tu bai em hoc
     (dung >= 2) -> dung cong thuc: hat giong lai (+2 moi cha/me dot bien), ghi vao So lai giong.
   · So lai giong: 16 giong, giong chua tim ra chi hien goi y (khong lo cay cha me).
   · Ten giong lai ghep tu chu cua cay cha me: hoc cach tao tu (莓瓜 = 莓 + 瓜).
   May chu: nong-trai-lai.js (/api/farm/lai, /lai/bat, /lai/tl).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$, $all = N.$all, esc = N.esc, img = N.img;
  var L = { d: null, a: '', b: '', chay: null, ket: null, tai: false };

  function tai() {
    if (L.tai) return;
    L.tai = true;
    N.goi('/api/farm/lai').then(function (r) { L.tai = false; L.d = r; veLai(); }, function (e) { L.tai = false; N.bao(e.message, 'loi'); });
  }
  function veLai() { var bd = N.bangDang(); if (bd && bd.loai === 'lai') N.veBang(); }
  // nong san dung lam cha me duoc: cay thuong da mo theo cap (khong quy, khong lai) hoac qua dot bien cua no
  function chaMe(k) {
    var sp = S.cat.SP[k];
    if (!sp) return null;
    var goc = sp.db ? sp.goc : k, c = S.cat.CAY[goc];
    if (!c || c.hiem || c.lai || c.lv > S.st.lv) return null;
    return { k: k, goc: goc, db: !!sp.db, can: sp.db ? 1 : L.d.canQua, co: (S.st.kho || {})[k] || 0, sp: sp };
  }
  function dsChaMe() {
    return Object.keys(S.st.kho || {}).map(chaMe).filter(Boolean).sort(function (x, y) { return (y.co >= y.can) - (x.co >= x.can) || x.goc.localeCompare(y.goc); });
  }
  function o(k, nhan) {
    if (!k) return '<button type="button" class="nl-o trong" data-nl-o="' + nhan + '"><span>＋</span><small>Chọn cây ' + nhan.toUpperCase() + '</small></button>';
    var sp = S.cat.SP[k];
    return '<button type="button" class="nl-o" data-nl-o="' + nhan + '" aria-label="Bỏ chọn ' + esc(sp.vn) + '">' + img('sp-' + k) +
      '<b lang="zh">' + esc(sp.zh) + '</b><small>' + esc(sp.vn) + (sp.db ? ' 🧬' : '') + '</small></button>';
  }

  function veChinh(than) {
    var d = L.d;
    var h = N.htmlGt ? N.htmlGt('lai') : '';
    h += '<div class="nl"><p class="nl-gt">🧬 Ghép 2 loại cây thành <b>giống mới</b> — <span lang="zh">杂交</span> zájiāo (lai giống). ' +
      'Tên giống lai ghép từ chữ của cây bố mẹ: <span lang="zh">草莓</span> + <span lang="zh">西瓜</span> → <span lang="zh">莓瓜</span>!</p>';
    if (!d.mo) { than.innerHTML = h + '<p class="nt-trong">🔒 Phòng lai giống mở ở cấp ' + d.lvMo + '.</p></div>'; return; }
    var A = L.a && chaMe(L.a), B = L.b && chaMe(L.b);
    if (L.a && !A) L.a = ''; if (L.b && !B) L.b = '';
    var du = A && B && A.goc !== B.goc && A.co >= A.can && B.co >= B.can && S.st.xu >= d.phi && d.hom < d.toiDaNgay;
    h += '<div class="nl-ghep">' + o(L.a, 'a') + '<span class="nl-x" aria-hidden="true">✕</span>' + o(L.b, 'b') + '<span class="nl-x" aria-hidden="true">→</span>' +
      '<div class="nl-o kq"><span>?</span><small>Giống mới</small></div></div>' +
      '<p class="nl-phi">Mỗi lần lai: <b>' + d.canQua + ' quả mỗi loại</b> (quả đột biến 🧬 chỉ cần 1 và cho thêm ' + d.hatDb + ' hạt) · ' + img('ic-xu') + ' ' + d.phi + ' xu · ' +
      d.soCau + ' câu hỏi (đúng ' + d.canDung + ') · hôm nay ' + d.hom + '/' + d.toiDaNgay + ' lần</p>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-nl-lai' + (du ? '' : ' disabled') + '>🧬 Lai giống</button></div>';
    var ds = dsChaMe();
    h += '<h3 class="nl-h">Nông sản trong kho</h3>' + (ds.length ? '<div class="nl-kho">' + ds.map(function (x) {
      var chon = x.k === L.a || x.k === L.b, thieu = x.co < x.can;
      return '<button type="button" class="nl-mon' + (chon ? ' chon' : '') + (thieu ? ' thieu' : '') + (x.db ? ' db' : '') + '" data-nl-k="' + x.k + '"' + (thieu ? ' aria-disabled="true"' : '') + '>' +
        img('sp-' + x.k) + '<b lang="zh">' + esc(x.sp.zh) + '</b><small>' + esc(x.sp.vn) + '</small><em>' + x.co + '/' + x.can + '</em></button>';
    }).join('') + '</div>' : '<p class="nt-trong">Kho chưa có nông sản — thu hoạch vài ô ruộng rồi quay lại nhé!</p>');
    // so lai giong
    var biet = d.so.filter(function (x) { return x.biet; }).length;
    h += '<h3 class="nl-h">📖 Sổ lai giống <small>' + biet + '/' + d.so.length + ' giống</small></h3><div class="nl-so">' + d.so.map(function (x) {
      if (x.biet) {
        var c = S.cat.CAY;
        return '<div class="nl-the biet">' + img('sp-' + x.k) + '<b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + ' · ' + esc(x.vn) + '</small>' +
          '<span class="nl-cm">' + img('sp-' + x.cha[0]) + '＋' + img('sp-' + x.cha[1]) + '</span><p>' + esc(x.ghep) + '</p>' +
          '<em>' + img('ic-xu') + ' ' + x.ban + ' · ' + N.thoiLuong(x.phut) + '</em></div>';
      }
      return '<div class="nl-the an' + (x.moDuoc ? '' : ' khoa') + '"><span class="nl-hoi">?</span><p>' + esc(x.goiY) + '</p>' + (x.moDuoc ? '' : '<em>🔒 cây bố mẹ mở ở cấp ' + x.lvMo + '</em>') + '</div>';
    }).join('') + '</div></div>';
    than.innerHTML = h;
    $all('img', than).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    $all('[data-nl-k]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-nl-k'), x = chaMe(k);
        if (!x) return;
        if (x.co < x.can) { N.bao('Cần ' + x.can + ' ' + x.sp.vn.toLowerCase() + ' (em có ' + x.co + ').'); return; }
        if (k === L.a) L.a = ''; else if (k === L.b) L.b = '';
        else if (!L.a) L.a = k; else if (!L.b) L.b = k; else L.b = k;
        N.doc(x.sp.zh);
        N.veBang();
      });
    });
    $all('[data-nl-o]', than).forEach(function (b) {
      b.addEventListener('click', function () { if (b.getAttribute('data-nl-o') === 'a') L.a = ''; else L.b = ''; N.veBang(); });
    });
    var nut = $('[data-nl-lai]', than);
    if (nut) nut.addEventListener('click', function () {
      if (A && B && A.goc === B.goc) return N.bao('Chọn 2 loại cây KHÁC nhau nhé.');
      nut.disabled = true;
      N.goi('/api/farm/lai/bat', { a: L.a, b: L.b }).then(function (r) {
        L.chay = { ds: r.ds, i: 0, can: r.can };
        N.tieng('mua');
        N.veBang();
      }, function (e) { nut.disabled = false; N.bao(e.message, 'loi'); N.tieng('sai'); });
    });
  }

  // 3 cau hoi (giong luot cau o cac phan khac cua nong trai)
  function veCau(than) {
    var c = L.chay, q = c.ds[c.i], khoa = false;
    if (!q) return;
    var hh = q.hoi || {}, A = S.cat.SP[L.a] || {}, B = S.cat.SP[L.b] || {};
    var html = '<p class="nl-dau">🧬 Đang lai <b lang="zh">' + esc(A.zh || '') + '</b> × <b lang="zh">' + esc(B.zh || '') + '</b> · cần đúng ' + c.can + '/' + c.ds.length + '</p>' +
      '<div class="kt-cau"><p class="kt-cau-so">Câu ' + (c.i + 1) + '/' + c.ds.length + ' · <b>' + esc(hh.lenh || '') + '</b></p>';
    if (hh.nghe) html += '<button type="button" class="nt-nghe" data-nl-nghe>🔊 Nghe</button><p class="nt-nghe-tb" data-nl-nghe-tb aria-live="polite"></p>';
    html += N.htmlKt(q, 'kc') + '<div class="kt-cau-kq" aria-live="polite"></div></div>';
    than.innerHTML = html;
    if (hh.nghe) {
      var zh = N.giaiNghe(hh.nghe), tb = $('[data-nl-nghe-tb]', than);
      var hien = function () { tb.innerHTML = 'Máy chưa phát được tiếng — chữ Hán: <b lang="zh">' + esc(zh) + '</b>'; };
      if (N.mayKhongNghe()) hien();
      N.docKiem(zh, function () {});
      $('[data-nl-nghe]', than).addEventListener('click', function () { N.docKiem(zh, function (ok) { if (!ok) hien(); }); });
    }
    N.ganKt(than, q, 'kc', function (body, chon) {
      if (khoa) return;
      khoa = true;
      N.goi('/api/farm/lai/tl', body).then(function (r) {
        N.danhDauKt(than, q, r, chon, 'kc');
        N.tieng(r.dung ? 'dung' : 'sai');
        N.docKt(r);
        var kq = $('.kt-cau-kq', than);
        c.i++;
        kq.innerHTML = '<p class="kt-cau-dg ' + (r.dung ? 'dung' : 'sai') + '">' + (r.dung ? '✔ Đúng rồi!' : '✘ Chưa đúng') + '</p>' + N.giaiKt(r, q) +
          (r.ket ? '<button type="button" class="nt-nut nt-nut-xanh" data-nl-xem>Xem kết quả lai →</button>' : '<button type="button" class="nt-nut nt-nut-xanh" data-nl-tiep>Câu tiếp →</button>');
        if (r.ket) {
          if (r.st) N.nhanTrangThai(r.st);
          if (r.lai) L.d = r.lai;
          $('[data-nl-xem]', kq).addEventListener('click', function () { L.chay = null; L.ket = r.ket; N.veBang(); });
        } else $('[data-nl-tiep]', kq).addEventListener('click', function () { N.veBang(); });
      }, function (e) { khoa = false; N.moLaiKt(than, q); N.bao(e.message, 'loi'); if (e.status === 400) { L.chay = null; tai(); } });
    });
  }

  function veKet(than) {
    var k = L.ket, h = '<div class="nt-chuc nl-ket">';
    if (!k.dat) {
      h += '<h2>Chưa lai được</h2><p>Đúng ' + k.dung + '/' + k.so + ' — cần ' + L.d.canDung + '. Em <b>chưa tốn</b> nông sản hay xu nào — ôn bài rồi thử lại nhé!</p>';
    } else if (k.loi) {
      h += '<h2>Chưa lai được</h2><p>' + esc(k.loi) + '</p>';
    } else if (k.giong) {
      var g = k.giong;
      h += '<span class="nl-ket-hinh">' + img('sp-' + g.k) + '</span><h2>' + (g.moi ? '🎉 Phát hiện giống mới!' : 'Lai thành công!') + '</h2>' +
        '<p class="nl-ket-ten"><b lang="zh">' + esc(g.zh) + '</b> ' + esc(g.py) + ' · ' + esc(g.vn) + '</p>' +
        '<p class="nl-ket-ghep">Tên ghép: ' + esc(g.ghep) + '</p>' +
        '<p>+<b>' + g.hat + ' hạt giống lai</b> — chạm một ô ruộng trống để gieo. Giống lai bán được giá cao hơn cây bố mẹ!</p>';
      N.tieng('len'); N.doc(g.zh);
      if (N.fx) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, g.moi);
    } else {
      h += '<h2>Hai cây này chưa lai ra giống mới</h2><p>Phòng thí nghiệm đã dùng một nửa số quả. Thử cặp khác nhé!</p>' +
        (k.goiY ? '<p class="nl-goi">💡 Mẹo: <b>' + esc(k.goiY.cay) + '</b> <span lang="zh">' + esc(k.goiY.zh) + '</span> hợp với một cây khác — ' + esc(k.goiY.chu) + '</p>' : '');
      N.tieng('sai');
    }
    h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-nl-ve>← Phòng lai giống</button></div></div>';
    than.innerHTML = h;
    $('[data-nl-ve]', than).addEventListener('click', function () { L.ket = null; N.veBang(); });
  }

  N.dangKy('lai', function (than) {
    $('#ntBangTit').textContent = 'Phòng lai giống 育种室';
    N.datTab([], '');
    if (L.chay) return veCau(than);
    if (L.ket) return veKet(than);
    if (!L.d || !S.st) { than.innerHTML = '<p class="nt-trong">Đang mở phòng lai giống…</p>'; tai(); return; }
    veChinh(than);
  });

  // nut trong "⋯ Thêm" (nhom Lam an)
  function taoNut() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || $('#ntThemLai')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-them-o'; b.id = 'ntThemLai'; b.setAttribute('data-mo', 'lai');
    b.innerHTML = '<span class="nt-them-emo" aria-hidden="true">🧬</span><span class="nt-muc-chu"><b>Lai giống</b><small>ghép 2 cây thành giống mới 杂交</small></span>';
    var sau = luoi.querySelector('[data-mo="kt-xuong"]');
    luoi.insertBefore(b, sau ? sau.nextSibling : null);
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      if (S.tham && N.veNha) N.veNha();
      L.d = null; N.moBang('lai');
    });
  }
  taoNut();

  // bong noi o ruong dang trong giong lai: giai thich ten ghep
  N.sauNoi.push(function (o) {
    if (!o || o.k !== 'o' || !o.c) return;
    var c = S.cat.CAY[o.c];
    if (!c || !c.lai) return;
    var noi = $('#ntNoi');
    noi.insertAdjacentHTML('beforeend', '<p class="nt-noi-phu nl-noi">🧬 Giống lai <span lang="zh">杂交</span>: ' + esc(c.ghep || '') + '</p>');
    N.datViTriNoi();
  });
})();
