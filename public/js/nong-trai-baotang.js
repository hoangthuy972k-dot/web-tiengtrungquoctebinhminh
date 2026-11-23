/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — BAO TANG NONG TRAI 博物馆 (2026-11-24)
   · Album suu tap moi thu em tung co: 8 phong trung bay 展厅 (nong san, dot bien, giong lai, vat nuoi, ca,
     hang che bien, thu cung, do trang tri doc quyen). Hien vat da co: hinh + chu Han + pinyin + nghia + ngay co lan dau,
     bam la doc to; chua co: bong den "?" + goi y cach co.
   · Cot moc 10/25/50/75/100% + hoan thanh tung phong: danh hieu 称号 (hien canh ten nhan vat) + thuong 1 lan.
   · Huong dan vien 导游: 5 cau ve hien vat cua em, 1 lan / phong / ngay.
   · Sang tham ban: nut "Bảo tàng" xem bo suu tap cua ban (chi doc).
   May chu: nong-trai-baotang.js (/api/farm/baotang, /xem/:id, /nhan, /chon, /hdv/bat, /hdv/tl).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$, $all = N.$all, esc = N.esc, img = N.img;
  var B = { d: null, tai: false, sanh: '', chay: null, ket: null, ban: null, chBan: {} };

  function tai() {
    if (B.tai) return;
    B.tai = true;
    N.goi('/api/farm/baotang').then(function (r) { B.tai = false; B.d = r; veLai('baotang'); }, function (e) { B.tai = false; N.bao(e.message, 'loi'); });
  }
  function taiBan() {
    var b = B.ban;
    if (!b || b.tai) return;
    b.tai = true;
    N.goi('/api/farm/baotang/xem/' + encodeURIComponent(b.id)).then(function (r) {
      b.tai = false; b.d = r; B.chBan[b.id] = r.ch || null; veLai('baotang-ban');
    }, function (e) { b.tai = false; N.bao(e.message, 'loi'); N.dongBang(); });
  }
  function veLai(loai) { var bd = N.bangDang(); if (bd && bd.loai === loai) N.veBang(); }
  function ngayCo(co) {
    if (co === 'c') return 'có từ trước';
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(co || '');
    return m ? 'lần đầu ' + m[3] + '/' + m[2] + '/' + m[1] : '';
  }
  function thanh(n, tong) {
    var p = tong ? Math.round(n * 100 / tong) : 0;
    return '<span class="btg-thanh" role="progressbar" aria-valuemin="0" aria-valuemax="' + tong + '" aria-valuenow="' + n + '"><i style="width:' + p + '%"></i></span>';
  }
  function htmlCh(ch, to) {
    if (!ch) return '';
    return '<span class="btg-ch' + (to ? ' to' : '') + '">' + img(ch.huy) + '<b lang="zh">' + esc(ch.zh) + '</b>' + (to ? '<small>' + esc(ch.py) + ' · ' + esc(ch.vn) + '</small>' : '') + '</span>';
  }

  /* ---------------- sanh chinh ---------------- */
  function veTong(than, d, rieng) {
    var pt = d.tong ? Math.round(d.n * 100 / d.tong) : 0;
    var h = '<div class="btg">';
    h += '<div class="btg-dau">' + img('baotang-guan', 'btg-dau-hinh') + '<div class="btg-dau-chu">' +
      '<button type="button" class="btg-ten" data-btg-doc="博物馆"><b lang="zh">' + (rieng ? '我的博物馆' : esc(d.ten || '') + '的博物馆') + '</b><small>' +
      (rieng ? 'wǒ de bówùguǎn · Bảo tàng nông trại của em' : 'de bówùguǎn · Bảo tàng của ' + esc(d.ten || 'bạn')) + ' 🔊</small></button>' +
      '<p class="btg-so">Đã sưu tập <b>' + d.n + '/' + d.tong + '</b> hiện vật (' + pt + '%)</p>' + thanh(d.n, d.tong) +
      (d.ch ? '<p class="btg-deo">Danh hiệu: ' + htmlCh(d.ch, true) + '</p>' : '') + '</div></div>';
    if (rieng) h += veMoc(d);
    h += '<h3 class="btg-h">🏛 Các phòng trưng bày <span lang="zh">展厅</span></h3><div class="btg-sanh">' + d.sanh.map(function (s) {
      var dau = s.ds.filter(function (v) { return v.co; })[0];
      var hdv = rieng && s.hdv && s.hdv.du && !s.hdv.da;
      return '<button type="button" class="btg-o' + (s.n >= s.tong ? ' xong' : '') + '" data-btg-s="' + s.k + '">' +
        '<span class="btg-o-hinh">' + (dau ? img(dau.hinh) : '<span class="btg-o-emo" aria-hidden="true">' + s.emo + '</span>') + '</span>' +
        '<b lang="zh">' + esc(s.zh) + '厅</b><small>' + esc(s.py) + ' tīng · ' + esc(s.vn) + '</small>' + thanh(s.n, s.tong) +
        '<em>' + s.n + '/' + s.tong + (s.n >= s.tong ? ' ✓' : '') + '</em>' + (hdv ? '<span class="btg-o-hdv" title="Hướng dẫn viên đang chờ">🎧</span>' : '') + '</button>';
    }).join('') + '</div>';
    if (rieng) h += '<p class="btg-meo">💡 Mọi thứ em có trên nông trại (thu hoạch, câu cá, chế biến, lai giống, trang trí…) sẽ tự vào bảo tàng. Chạm hiện vật để nghe đọc tên.</p>';
    else h += '<div class="nt-hang-nut"><button type="button" class="nt-nut" data-btg-dong>← Về nông trại của bạn</button></div>';
    than.innerHTML = h + '</div>';
    ganChung(than);
    $all('[data-btg-s]', than).forEach(function (b) {
      b.addEventListener('click', function () { B.sanh = b.getAttribute('data-btg-s'); N.veBang(); var k = $('#ntBangThan'); if (k) k.scrollTop = 0; });
    });
    var dg = $('[data-btg-dong]', than);
    if (dg) dg.addEventListener('click', function () { N.dongBang(); });
    if (rieng) ganMoc(than);
  }
  function veMoc(d) {
    var ds = d.moc || [], ch = d.ch && d.ch.k;
    var tenSanh = {};
    d.sanh.forEach(function (s) { tenSanh[s.k] = s; });
    return '<h3 class="btg-h">🏅 Danh hiệu & cột mốc <span lang="zh">称号</span></h3><div class="btg-moc">' + ds.map(function (m) {
      var dk = m.loai === 'p' ? 'Sưu tập ' + m.can + ' hiện vật (' + m.p + '%)' : 'Hoàn thành phòng ' + (tenSanh[m.sanh] ? tenSanh[m.sanh].zh + ' ' + tenSanh[m.sanh].vn.toLowerCase() : '');
      var qua = '+' + m.xu + ' xu' + (m.tt ? ' + đồ trang trí độc quyền' : '');
      var nut;
      if (m.da) nut = m.k === ch ? '<span class="btg-moc-deo">✓ Đang đeo</span><button type="button" class="nt-nut btg-nho" data-btg-chon="">Tháo</button>'
        : '<button type="button" class="nt-nut btg-nho" data-btg-chon="' + m.k + '">Đeo danh hiệu</button>';
      else if (m.dat) nut = '<button type="button" class="nt-nut nt-nut-xanh btg-nho" data-btg-nhan="' + m.k + '">🎁 Nhận thưởng</button>';
      else nut = '<span class="btg-moc-con">' + Math.min(m.can, m.loai === 'p' ? d.n : (tenSanh[m.sanh] || {}).n || 0) + '/' + m.can + '</span>';
      return '<div class="btg-moc-o' + (m.da ? ' da' : m.dat ? ' dat' : '') + '">' + img(m.huy, m.da || m.dat ? '' : 'btg-mo') +
        '<div><button type="button" class="btg-moc-ten" data-btg-doc="' + esc(m.zh) + '"><b lang="zh">' + esc(m.zh) + '</b> <small>' + esc(m.py) + '</small></button>' +
        '<p>' + esc(m.vn) + ' · <span>' + esc(dk) + '</span></p><p class="btg-qua">' + qua + '</p></div><span class="btg-moc-nut">' + nut + '</span></div>';
    }).join('') + '</div>';
  }
  function ganMoc(than) {
    $all('[data-btg-nhan]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        N.goi('/api/farm/baotang/nhan', { m: b.getAttribute('data-btg-nhan') }).then(function (r) {
          if (r.st) N.nhanTrangThai(r.st);
          B.d = r.bt;
          N.tieng('len');
          if (r.ch) N.doc(r.ch.zh);
          if (N.fx && N.fx.mung) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, true);
          N.moBangNho('<div class="nt-chuc btg-chuc">' + (r.ch ? img(r.ch.huy, 'btg-chuc-huy') : '') + '<h2>🎉 Danh hiệu mới!</h2>' +
            (r.ch ? '<p class="btg-chuc-ten"><b lang="zh">' + esc(r.ch.zh) + '</b> ' + esc(r.ch.py) + ' · ' + esc(r.ch.vn) + '</p>' : '') +
            '<p>+' + r.xu + ' xu' + (r.tt ? ' · ' + img(r.tt.k, 'btg-chuc-tt') + ' <b lang="zh">' + esc(r.tt.zh) + '</b> ' + esc(r.tt.vn) + ' (đã cất vào túi đồ — đặt lên nông trại nhé!)' : '') + '</p>' +
            '<p class="btg-meo">Danh hiệu hiện cạnh tên nhân vật của em trên nông trại.</p></div>');
          N.veBang();
        }, function (e) { b.disabled = false; N.bao(e.message, 'loi'); });
      });
    });
    $all('[data-btg-chon]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        N.goi('/api/farm/baotang/chon', { m: b.getAttribute('data-btg-chon') }).then(function (r) {
          if (r.st) N.nhanTrangThai(r.st);
          if (B.d) B.d.ch = r.ch;
          N.tieng('mua');
          N.veBang();
        }, function (e) { b.disabled = false; N.bao(e.message, 'loi'); });
      });
    });
  }
  function ganChung(than) {
    $all('img', than).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    $all('[data-btg-doc]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        N.doc(b.getAttribute('data-btg-doc'));
        b.classList.remove('btg-nay'); void b.offsetWidth; b.classList.add('btg-nay');
      });
    });
  }

  /* ---------------- mot phong trung bay ---------------- */
  function veSanh(than, d, rieng) {
    var s = d.sanh.filter(function (x) { return x.k === B.sanh; })[0];
    if (!s) { B.sanh = ''; return veTong(than, d, rieng); }
    var h = '<div class="btg"><button type="button" class="nt-nut btg-lui" data-btg-lui>← Sảnh chính</button>' +
      '<div class="btg-sanh-dau"><span class="btg-o-emo" aria-hidden="true">' + s.emo + '</span><button type="button" class="btg-ten" data-btg-doc="' + esc(s.zh) + '厅">' +
      '<b lang="zh">' + esc(s.zh) + '厅</b><small>' + esc(s.py) + ' tīng · Phòng ' + esc(s.vn.toLowerCase()) + ' 🔊</small></button>' +
      '<p class="btg-so"><b>' + s.n + '/' + s.tong + '</b> hiện vật</p>' + thanh(s.n, s.tong) + '</div>';
    if (rieng && s.hdv) {
      var hv = B.d.hdv || {};
      h += '<div class="btg-hdv">' + '<span class="btg-hdv-ic" aria-hidden="true">🎧</span><div><b>Hướng dẫn viên <span lang="zh">导游</span></b><p>' +
        (s.hdv.da ? 'Hôm nay em đã tham quan phòng này rồi — mai quay lại nhé!'
          : s.hdv.du ? hv.so + ' câu về hiện vật của em · đúng mỗi câu +' + hv.xu + ' xu, +' + hv.xp + ' XP (1 lần / ngày)'
            : 'Sưu tập ít nhất ' + hv.min + ' hiện vật trong phòng này để hướng dẫn viên giới thiệu.') + '</p></div>' +
        '<button type="button" class="nt-nut nt-nut-xanh" data-btg-hdv' + (s.hdv.du && !s.hdv.da ? '' : ' disabled') + '>Bắt đầu</button></div>';
    }
    var nhom = [], theo = {};
    s.ds.forEach(function (v) { if (!theo[v.nhom]) { theo[v.nhom] = []; nhom.push(v.nhom); } theo[v.nhom].push(v); });
    nhom.forEach(function (ten) {
      var ds = theo[ten], co = ds.filter(function (v) { return v.co; }).length;
      if (nhom.length > 1) h += '<h3 class="btg-h">' + esc(ten) + ' <small>' + co + '/' + ds.length + '</small></h3>';
      h += '<div class="btg-luoi">' + ds.map(function (v) {
        if (v.co) {
          return '<button type="button" class="btg-the co" data-btg-doc="' + esc(v.zh) + '">' + img(v.hinh) + '<b lang="zh">' + esc(v.zh) + '</b><small class="btg-py">' + esc(v.py) +
            '</small><small>' + esc(v.vn) + '</small><em>' + ngayCo(v.co) + '</em><i class="btg-loa" aria-hidden="true">🔊</i></button>';
        }
        return '<div class="btg-the an"><span class="btg-bong">' + img(v.hinh) + '<span class="btg-hoi">?</span></span>' +
          (rieng && v.goi ? '<p>' + esc(v.goi) + '</p>' : '<p>Chưa sưu tập</p>') + '</div>';
      }).join('') + '</div>';
    });
    than.innerHTML = h + '</div>';
    ganChung(than);
    $('[data-btg-lui]', than).addEventListener('click', function () { B.sanh = ''; N.veBang(); });
    var nut = $('[data-btg-hdv]', than);
    if (nut) nut.addEventListener('click', function () {
      nut.disabled = true;
      N.goi('/api/farm/baotang/hdv/bat', { s: s.k }).then(function (r) {
        B.chay = { ds: r.ds, i: 0, s: s, dung: 0 };
        N.tieng('mua');
        N.veBang();
      }, function (e) { nut.disabled = false; N.bao(e.message, 'loi'); N.tieng('sai'); });
    });
  }

  /* ---------------- huong dan vien: luot cau hoi ---------------- */
  var LENH = { hinh: 'Đây là hiện vật nào? <span lang="zh">这是什么？</span>', nghia: 'Tên này nghĩa là gì?', chu: 'Chọn tên tiếng Trung đúng', tranh: 'Hiện vật nào đây?' };
  function htmlBt(q) {
    var h = q.hoi || {}, html = '<p class="btg-lenh">' + (LENH[q.loai] || '') + '</p>';
    if (q.loai === 'hinh') html += '<div class="btg-hoi-hinh">' + img(h.hinh) + '</div>';
    else if (q.loai === 'nghia') html += '<div class="btg-hoi-zh"><b lang="zh">' + esc(h.zh) + '</b><span>' + esc(h.py) + '</span></div>';
    else if (q.loai === 'chu') html += '<div class="btg-hoi-vn">' + esc(h.vn) + '</div>';
    else html += '<div class="btg-hoi-zh"><b lang="zh">' + esc(h.zh) + '</b></div>';
    var zh = q.loai === 'hinh' || q.loai === 'chu';
    html += '<div class="btg-lua' + (q.loai === 'tranh' ? ' hinh' : '') + (zh ? ' zh' : '') + '">' + q.lua.map(function (l, j) {
      return '<button type="button" data-btg-lua="' + j + '"' + (zh ? ' lang="zh"' : '') + (q.loai === 'tranh' ? ' aria-label="Lựa chọn ' + (j + 1) + '"' : '') + '>' +
        (q.loai === 'tranh' ? img(l) : esc(l)) + '</button>';
    }).join('') + '</div>';
    return html;
  }
  function veCau(than) {
    var c = B.chay, q = c.ds[c.i], khoa = false;
    if (!q) return;
    var la = q.k === 'bt';
    var html = '<p class="btg-dau-hdv">🎧 Hướng dẫn viên · phòng <b lang="zh">' + esc(c.s.zh) + '厅</b></p>' +
      '<div class="kt-cau"><p class="kt-cau-so">Câu ' + (c.i + 1) + '/' + c.ds.length + (la ? '' : ' · <b>' + esc((q.hoi || {}).lenh || '') + '</b> <small>(từ bài em đã học)</small>') + '</p>';
    if (!la && q.hoi && q.hoi.nghe) html += '<button type="button" class="nt-nghe" data-btg-nghe>🔊 Nghe</button><p class="nt-nghe-tb" data-btg-nghe-tb aria-live="polite"></p>';
    html += (la ? htmlBt(q) : N.htmlKt(q, 'btgk')) + '<div class="kt-cau-kq" aria-live="polite"></div></div>';
    than.innerHTML = html;
    ganChung(than);
    if (!la && q.hoi && q.hoi.nghe) {
      var zhN = N.giaiNghe(q.hoi.nghe), tb = $('[data-btg-nghe-tb]', than);
      var hien = function () { tb.innerHTML = 'Máy chưa phát được tiếng — chữ Hán: <b lang="zh">' + esc(zhN) + '</b>'; };
      if (N.mayKhongNghe()) hien();
      $('[data-btg-nghe]', than).addEventListener('click', function () { N.docKiem(zhN, function (ok) { if (!ok) hien(); }); });
    }
    function gui(body, chon) {
      if (khoa) return;
      khoa = true;
      N.goi('/api/farm/baotang/hdv/tl', body).then(function (r) {
        if (la) {
          $all('[data-btg-lua]', than).forEach(function (x, j) { x.disabled = true; x.classList.add(j === r.dap ? 'dung' : j === chon ? 'sai' : 'mo'); });
        } else N.danhDauKt(than, q, r, chon, 'btgk');
        N.tieng(r.dung ? 'dung' : 'sai');
        if (la) N.doc(r.zh); else N.docKt(r);
        if (r.dung) c.dung++;
        c.i++;
        var kq = $('.kt-cau-kq', than);
        kq.innerHTML = '<p class="kt-cau-dg ' + (r.dung ? 'dung' : 'sai') + '">' + (r.dung ? '✔ Đúng rồi!' : '✘ Chưa đúng') + '</p>' +
          (la ? '<button type="button" class="btg-giai" data-btg-doc="' + esc(r.zh) + '">' + (r.hinh ? img(r.hinh) : '') + '<b lang="zh">' + esc(r.zh) + '</b> ' + esc(r.py) + ' · ' + esc(r.vn) + ' 🔊</button>' : N.giaiKt(r, q)) +
          (r.ket ? '<button type="button" class="nt-nut nt-nut-xanh" data-btg-xem>Xem kết quả →</button>' : '<button type="button" class="nt-nut nt-nut-xanh" data-btg-tiep>Câu tiếp →</button>');
        ganChung(kq);
        if (r.ket) {
          if (r.st) N.nhanTrangThai(r.st);
          if (r.bt) B.d = r.bt;
          $('[data-btg-xem]', kq).addEventListener('click', function () { B.chay = null; B.ket = r.ket; N.veBang(); });
        } else $('[data-btg-tiep]', kq).addEventListener('click', function () { N.veBang(); });
      }, function (e) {
        khoa = false;
        if (!la) N.moLaiKt(than, q);
        N.bao(e.message, 'loi');
        if (e.status === 400) { B.chay = null; B.d = null; N.veBang(); }
      });
    }
    if (la) $all('[data-btg-lua]', than).forEach(function (b) { b.addEventListener('click', function () { var j = +b.getAttribute('data-btg-lua'); gui({ chon: j }, j); }); });
    else N.ganKt(than, q, 'btgk', gui);
  }
  function veKet(than) {
    var k = B.ket, gioi = k.dung === k.so;
    than.innerHTML = '<div class="nt-chuc btg-ket"><span class="btg-ket-ic" aria-hidden="true">🎧</span><h2>' + (gioi ? '🎉 Em là hướng dẫn viên nhí!' : 'Cảm ơn em đã tham quan!') + '</h2>' +
      '<p>Đúng <b>' + k.dung + '/' + k.so + '</b> câu · +' + k.xu + ' xu · +' + k.xp + ' XP</p>' +
      '<p class="btg-ket-cau" lang="zh">' + (gioi ? '你真棒！' : '谢谢参观！') + '</p><p class="btg-meo">' + (gioi ? 'Nǐ zhēn bàng! — Em giỏi quá!' : 'Xièxie cānguān! — Cảm ơn đã tham quan!') + '</p>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-btg-ve>← Về phòng trưng bày</button></div></div>';
    N.tieng(gioi ? 'len' : 'xu');
    N.doc(gioi ? '你真棒！' : '谢谢参观！');
    $('[data-btg-ve]', than).addEventListener('click', function () { B.ket = null; N.veBang(); });
  }

  N.dangKy('baotang', function (than) {
    $('#ntBangTit').textContent = 'Bảo tàng nông trại 博物馆';
    N.datTab([], '');
    if (B.chay) return veCau(than);
    if (B.ket) return veKet(than);
    if (!B.d) { than.innerHTML = '<p class="nt-trong">Đang mở cửa bảo tàng…</p>'; tai(); return; }
    if (B.sanh) return veSanh(than, B.d, true);
    veTong(than, B.d, true);
  });
  N.dangKy('baotang-ban', function (than) {
    var b = B.ban;
    $('#ntBangTit').textContent = 'Bảo tàng của ' + (b ? b.ten : 'bạn') + ' 博物馆';
    N.datTab([], '');
    if (!b) { N.dongBang(); return; }
    if (!b.d) { than.innerHTML = '<p class="nt-trong">Đang mở cửa bảo tàng của bạn…</p>'; taiBan(); return; }
    if (B.sanh) return veSanh(than, b.d, false);
    veTong(than, b.d, false);
  });

  // nut trong "⋯ Thêm" (nhom Hoc & thu thach) — cham do khi co cot moc cho nhan thuong
  function taoNut() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || $('#ntThemBt')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-them-o'; b.id = 'ntThemBt'; b.setAttribute('data-mo', 'baotang');
    b.innerHTML = '<img src="' + N.anh('baotang-guan') + '" alt="" draggable="false"><span class="nt-muc-chu"><b>Bảo tàng nông trại</b><small id="ntBtPhu">博物馆 · sưu tập mọi thứ em có</small></span><i class="nt-cham" id="ntBtCham" hidden></i>';
    luoi.appendChild(b);
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      if (S.tham && N.veNha) N.veNha();
      B.d = null; B.sanh = ''; B.ket = null;
      N.moBang('baotang');
    });
  }
  taoNut();

  // nut "Bảo tàng" tren thanh viec lam khi sang tham ban
  function taoNutTham() {
    var dock = $('#ntTham .nt-tham-nut');
    if (!dock || $('#ntThamBt')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-cu nt-tc'; b.id = 'ntThamBt';
    b.innerHTML = '<span class="nt-tc-ic" aria-hidden="true">🏛</span><span class="nt-tc-chu">Bảo tàng</span>';
    dock.appendChild(b);
    b.addEventListener('click', function () {
      if (!S.tham) return;
      B.ban = { id: S.tham.id, ten: S.tham.ten, d: null };
      B.sanh = '';
      N.moBang('baotang-ban');
    });
  }
  taoNutTham();

  // danh hieu canh ten nhan vat (chu nong trai) tren ban do
  function ganDanhHieu() {
    var el = $('#ntDat .nt-nv:not(.khach) .nt-nv-ten');
    if (!el) return;
    var cu = $('.btg-tag', el);
    var ch = null;
    if (S.tham) {
      var id = S.tham.id;
      if (!(id in B.chBan)) {
        B.chBan[id] = null;
        N.goi('/api/farm/baotang/xem/' + encodeURIComponent(id) + '?gon=1').then(function (r) { B.chBan[id] = r.ch || null; ganDanhHieu(); }, function () {});
      }
      ch = B.chBan[id];
    } else ch = S.st && S.st.kt && S.st.kt.bt ? S.st.kt.bt.ch : null;
    var khoa = ch ? ch.k + ch.zh : '';
    if (cu && cu.getAttribute('data-k') === khoa) return;
    if (cu) cu.remove();
    if (!ch) return;
    var t = document.createElement('span');
    t.className = 'btg-tag'; t.setAttribute('data-k', khoa); t.title = ch.zh + ' ' + ch.py + ' · ' + ch.vn;
    t.innerHTML = img(ch.huy) + '<b lang="zh">' + esc(ch.zh) + '</b>';
    el.insertBefore(t, el.firstChild);
  }
  N.sauVe.push(ganDanhHieu);
  N.sau.push(function (st) {
    var bt = st && st.kt && st.kt.bt;
    var cham = $('#ntBtCham'), phu = $('#ntBtPhu');
    if (cham) cham.hidden = !(bt && bt.nhan > 0);
    if (phu && bt) phu.textContent = '博物馆 · ' + bt.n + '/' + bt.tong + ' hiện vật' + (bt.nhan > 0 ? ' · có quà!' : '');
    ganDanhHieu();
  });
  // nhat ky: nhan danh hieu bao tang
  N.htmlNk.bt = function (e) {
    return { hinh: 'baotang-huy-3', chu: '🏛 Bảo tàng: em nhận danh hiệu <b lang="zh">' + esc(e.zh || '') + '</b> ' + esc(e.vn || '') + '.' };
  };
})();
