/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — CHO DEM CUOI TUAN 夜市 (2026-11-23). May chu: nong-trai-chodem.js
   · Mo 18:00 thu Sau -> het Chu nhat (gio VN). Ngoai gio: dem nguoc + xem truoc.
   · Khach NPC NOI cau goi hang (NTX.docKiem; chu an, "Nghe lại" + "Xem chữ"). Em chon hang + so luong + luong tu,
     khach hoi 多少钱 thi chon cau tra loi gia. Khach tan gau hoi 1 cau tu bai em da hoc.
   · Banner nho khi cho dem dang mo + nut trong "⋯ Thêm" (data-mo="chodem").
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$, $all = N.$all, esc = N.esc, img = N.img;
  var C = { d: null, kh: null, chon: { k: '', n: 0, l: '' }, xem: false, daDoc: '', ket: null, tai: false, gui: false, chip: null };
  var SO = ['', '一', '两', '三', '四', '五', '六', '七', '八', '九', '十'];
  var VN = 7 * 3600000;

  function am(k) { try { N.tieng(k); } catch (e) { /* may khong phat tieng */ } }
  function kt() { return (S.st && S.st.kt && S.st.kt.chodem) || null; }
  function ngayVn() { return new Date(N.bayGio() + VN).toISOString().slice(0, 10); }
  function thuVn() { return new Date(N.bayGio() + VN).getUTCDay(); }
  function hai(n) { return (n < 10 ? '0' : '') + n; }
  function demNguoc(ms) {
    var s = Math.max(0, Math.floor(ms / 1000)), ng = Math.floor(s / 86400); s %= 86400;
    return (ng ? ng + ' ngày ' : '') + hai(Math.floor(s / 3600)) + ':' + hai(Math.floor((s % 3600) / 60)) + ':' + hai(s % 60);
  }
  function avKhach(kh, vui) {
    if (!window.NhanVat || !kh) return '<span class="cd-av-thay" aria-hidden="true">🙂</span>';
    var av = Object.assign({}, kh.av);
    if (vui === 1) av.mat = 'tit';
    return NhanVat.svg(av, 'cd-av-svg');
  }
  function tai() {
    if (C.tai) return;
    C.tai = true;
    N.goi('/api/farm/chodem').then(function (r) {
      C.tai = false; C.d = r; C.kh = r.kh || null;
      ve();
    }, function (e) { C.tai = false; N.bao(e.message, 'loi'); });
  }
  function ve() { var bd = N.bangDang(); if (bd && bd.loai === 'chodem') N.veBang(); }
  function docNghe(zh, cb) {
    N.docKiem(zh, function (ok) { if (!ok) { C.xem = true; C.khongNghe = true; var tb = $('[data-cd-tb]'); if (tb) tb.hidden = false; hienChu(); } if (cb) cb(ok); });
  }
  function hienChu() {
    var b = $('[data-cd-loi]');
    if (b && C.kh) { b.innerHTML = htmlLoi(C.kh); ganDoc(b); }
  }
  function cauKhach(kh) { return N.giaiNghe(kh.nghe); }
  function htmlLoi(kh) {
    var zh = cauKhach(kh);
    if (!C.xem) return '<span class="cd-loi-an" aria-label="Khách đang nói — bấm Nghe lại">🔊 <i></i><i></i><i></i> <small>Nghe khách nói…</small></span>';
    return '<b lang="zh" class="cd-loi-zh" data-cd-doc="' + esc(zh) + '">' + esc(zh) + '</b>';
  }

  /* ---------------- canh quay hang ---------------- */
  function canh(noiDung, opt) {
    opt = opt || {};
    var den = '';
    for (var i = 0; i < 5; i++) den += '<img class="cd-den cd-den-' + i + '" src="' + N.anh('chodem-den') + '" alt="" draggable="false">';
    return '<div class="cd-canh' + (opt.dong ? ' dong' : '') + '">' +
      '<img class="cd-mai" src="' + N.anh('chodem-mai') + '" alt="" draggable="false">' +
      '<div class="cd-day-den" aria-hidden="true">' + den + '</div>' +
      '<div class="cd-giua">' + noiDung + '</div>' +
      '<img class="cd-quay" src="' + N.anh('chodem-quay') + '" alt="" draggable="false">' +
      (opt.hang ? '<div class="cd-hang-quay" aria-hidden="true">' + opt.hang + '</div>' : '') +
      '</div>';
  }
  function hangTrenQuay(d) {
    return (d.xem || []).slice(0, 4).map(function (x) { return img('sp-' + x.k); }).join('');
  }
  function thanhTin(d) {
    return '<div class="cd-tin">' +
      '<span>🌙 Đêm nay <b>' + d.dem.da + '/' + d.dem.toiDa + '</b> khách</span>' +
      '<span>📅 Cuối tuần <b>' + d.tuan.da + '/' + d.tuan.toiDa + '</b></span>' +
      '<span>' + img('ic-xu') + ' Hạn mức bán còn <b>' + d.ban.con + '</b></span>' +
      '<span>💰 Đã kiếm <b>' + d.tong.xu + '</b> xu</span></div>';
  }

  /* ---------------- ngoai gio: dem nguoc + xem truoc ---------------- */
  function veDong(than, d) {
    var h = canh('<div class="cd-bien-dong"><b lang="zh" data-cd-doc="周五晚上见！">周五晚上见！</b><small>Zhōuwǔ wǎnshang jiàn! — Hẹn gặp tối thứ Sáu!</small></div>', { dong: true });
    h += '<div class="cd-dem"><span>🏮 Chợ đêm mở sau</span><b data-cd-dem>' + demNguoc(d.moLuc - N.bayGio()) + '</b><small>Mở từ 18:00 thứ Sáu đến hết Chủ nhật (giờ Việt Nam)</small></div>';
    h += htmlCachChoi(d);
    if (d.xem && d.xem.length) {
      h += '<h3 class="cd-h">Giá chợ đêm của hàng trong kho em</h3><div class="cd-gia-ds">' + d.xem.map(function (x) {
        return '<div class="cd-gia">' + img('sp-' + x.k) + '<b lang="zh" data-cd-doc="' + esc(x.zh) + '">' + esc(x.zh) + '</b><small>' + esc(x.py) + ' · ' + esc(x.vn) + '</small>' +
          '<em>' + x.ban + ' → <strong>' + x.tu + '–' + x.den + '</strong> xu/<span lang="zh">' + esc(x.l) + '</span></em></div>';
      }).join('') + '</div>';
    } else h += '<p class="nt-trong">Kho chưa có hàng — thu hoạch, nhặt trứng, câu cá… để có hàng bán ở chợ đêm nhé!</p>';
    than.innerHTML = h;
  }
  function htmlCachChoi(d) {
    return '<div class="cd-gt"><p>🏮 Tối cuối tuần, khách đến quầy và <b>nói bằng tiếng Trung</b> món họ muốn mua. Nghe kỹ: <b>món gì</b>, <b>bao nhiêu</b>, <b>lượng từ</b> nào — đưa đúng thì khách trả <b>giá cao hơn cửa hàng</b> (×1,3–1,5; hàng đột biến, cây lai ×1,5–1,7) và còn boa thêm!</p>' +
      '<p class="cd-mau">Ví dụ: <b lang="zh" data-cd-doc="' + esc(d.mau.zh) + '">' + esc(d.mau.zh) + '</b> <small>' + esc(d.mau.py) + ' — ' + esc(d.mau.vn) + '</small></p>' +
      '<p class="cd-luat">Mỗi đêm ' + d.dem.toiDa + ' khách, cả cuối tuần ' + d.tuan.toiDa + ' khách · tiền bán tính vào hạn mức bán hằng ngày · có khách hỏi chuyện bằng câu trong bài em đã học.</p></div>';
  }

  /* ---------------- dang mo ---------------- */
  function veMo(than, d) {
    var kh = C.kh, h = '';
    if (C.ket) { veKet(than, d); return; }
    if (!kh) {
      var noi = d.con > 0
        ? '<div class="cd-cho"><p>Quầy hàng đã thắp đèn — khách đang dạo chợ…</p><button type="button" class="nt-nut nt-nut-xanh cd-nut-to" data-cd-moi>🙋 Mời khách vào</button></div>'
        : '<div class="cd-cho"><p>' + (d.tuan.da >= d.tuan.toiDa ? 'Cuối tuần này em đã đón ' + d.tuan.toiDa + ' vị khách — tuần sau gặp lại!' : 'Đêm nay đã hết khách — mai chợ lại đông nhé!') + '</p></div>';
      h = canh(noi, { hang: hangTrenQuay(d) }) + thanhTin(d);
      if (!d.tong.khach) h += htmlCachChoi(d);
      if (d.ls && d.ls.length) h += htmlLs(d);
      than.innerHTML = h;
      var moi = $('[data-cd-moi]', than);
      if (moi) moi.addEventListener('click', function () { moiKhach(moi); });
      return;
    }
    var ten = '<span class="cd-ten"><b lang="zh">' + esc(kh.kh.zh) + '</b> ' + esc(kh.kh.py) + ' · ' + esc(kh.kh.vn) + '</span>';
    var bong = '<div class="cd-bong" data-cd-loi aria-live="polite">' + htmlLoi(kh) + '</div>';
    var nut = '<div class="cd-nghe-nut"><button type="button" class="nt-nut" data-cd-nghe>🔊 Nghe lại</button>' +
      (C.xem ? '' : '<button type="button" class="nt-nut" data-cd-xem>👀 Xem chữ</button>') + '</div>' +
      '<p class="cd-tb" data-cd-tb' + ((N.mayKhongNghe() || C.khongNghe) && C.xem ? '' : ' hidden') + '>Máy chưa phát được tiếng — em đọc chữ nhé.</p>';
    h = canh('<div class="cd-khach vao" data-cd-khach>' + bong + '<span class="cd-av">' + avKhach(kh.kh) + '</span>' + ten + '</div>', { hang: hangTrenQuay(d) });
    h += nut;
    if (kh.loai === 'chat') h += veChat(kh);
    else if (kh.buoc === 'gia') h += veGia(kh);
    else h += veChon(kh);
    h += '<div class="cd-bo"><button type="button" class="cd-lk" data-cd-bo>Mời khách về (bỏ qua)</button></div>';
    h += thanhTin(d);
    than.innerHTML = h;
    ganChung(than);
    if (kh.loai === 'chat') ganChat(than, kh);
    else if (kh.buoc === 'gia') ganGia(than, kh);
    else ganChon(than, kh);
    // khach moi den: noi ngay (1 lan)
    if (C.daDoc !== kh.id) {
      C.daDoc = kh.id;
      if (N.mayKhongNghe()) { C.xem = true; hienChu(); var tb = $('[data-cd-tb]', than); if (tb) tb.hidden = false; }
      setTimeout(function () { if (C.kh && C.kh.id === kh.id) docNghe(cauKhach(kh)); }, 450);
    }
  }
  function ganChung(than) {
    var ng = $('[data-cd-nghe]', than);
    if (ng) ng.addEventListener('click', function () { if (C.kh) docNghe(cauKhach(C.kh)); });
    var xm = $('[data-cd-xem]', than);
    if (xm) xm.addEventListener('click', function () { C.xem = true; xm.remove(); hienChu(); });
    var bo = $('[data-cd-bo]', than);
    if (bo) bo.addEventListener('click', function () {
      if (C.gui) return;
      C.gui = true;
      N.goi('/api/farm/chodem/bo', {}).then(function (r) { C.gui = false; nhanKet(r); }, function (e) { C.gui = false; N.bao(e.message, 'loi'); });
    });
  }
  // cham chu Han trong bang -> doc to
  function ganDoc(than) {
    $all('[data-cd-doc]', than).forEach(function (el) {
      el.addEventListener('click', function () { N.doc(el.getAttribute('data-cd-doc')); });
    });
  }

  function veChon(kh) {
    var c = C.chon;
    var h = '<div class="cd-chon">';
    h += '<h3 class="cd-h"><span>1</span> Khách muốn mua gì? <small>什么</small></h3><div class="cd-o-hang">' + kh.ds.map(function (x) {
      return '<button type="button" class="cd-o' + (c.k === x.k ? ' chon' : '') + '" data-cd-k="' + esc(x.k) + '" aria-pressed="' + (c.k === x.k) + '">' + img('sp-' + x.k) +
        '<b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + '</small><small class="cd-vn">' + esc(x.vn) + '</small></button>';
    }).join('') + '</div>';
    h += '<h3 class="cd-h"><span>2</span> Bao nhiêu? <small>几</small></h3><div class="cd-o-so">';
    for (var i = 1; i <= 10; i++) h += '<button type="button" class="cd-so' + (c.n === i ? ' chon' : '') + '" data-cd-n="' + i + '" aria-pressed="' + (c.n === i) + '"><b>' + i + '</b><small lang="zh">' + (i === 2 ? '二·两' : SO[i]) + '</small></button>';
    h += '</div>';
    h += '<h3 class="cd-h"><span>3</span> Lượng từ <small>量词</small></h3><div class="cd-o-lg">' + kh.lgs.map(function (x) {
      return '<button type="button" class="cd-lg' + (c.l === x.zh ? ' chon' : '') + '" data-cd-l="' + esc(x.zh) + '" aria-pressed="' + (c.l === x.zh) + '"><b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + '</small><small class="cd-vn">' + esc(x.vn) + '</small></button>';
    }).join('') + '</div>';
    var du = c.k && c.n && c.l;
    h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh cd-nut-to" data-cd-dua' + (du ? '' : ' disabled') + '>🛍️ Đưa hàng' +
      (du ? ' <small lang="zh">' + SO[c.n] + esc(c.l) + esc((kh.ds.filter(function (x) { return x.k === c.k; })[0] || {}).zh || '') + '</small>' : '') + '</button></div></div>';
    return h;
  }
  function ganChon(than, kh) {
    $all('[data-cd-k]', than).forEach(function (b) {
      b.addEventListener('click', function () { C.chon.k = b.getAttribute('data-cd-k'); var x = kh.ds.filter(function (y) { return y.k === C.chon.k; })[0]; if (x) N.doc(x.zh); N.veBang(); });
    });
    $all('[data-cd-n]', than).forEach(function (b) {
      b.addEventListener('click', function () { C.chon.n = +b.getAttribute('data-cd-n'); N.veBang(); });
    });
    $all('[data-cd-l]', than).forEach(function (b) {
      b.addEventListener('click', function () { C.chon.l = b.getAttribute('data-cd-l'); N.doc(C.chon.l); N.veBang(); });
    });
    var dua = $('[data-cd-dua]', than);
    if (dua) dua.addEventListener('click', function () {
      if (C.gui) return;
      C.gui = true; dua.disabled = true;
      N.goi('/api/farm/chodem/ban', { k: C.chon.k, n: C.chon.n, l: C.chon.l }).then(function (r) {
        C.gui = false;
        if (r.buoc === 'gia') {
          C.kh = r.kh;
          am('dung');
          N.veBang();
          setTimeout(function () { N.doc('多少钱？'); }, 300);
          return;
        }
        nhanKet(r);
      }, function (e) { C.gui = false; dua.disabled = false; N.bao(e.message, 'loi'); if (e.status === 400) tai(); });
    });
  }

  function veGia(kh) {
    var g = kh.gia, sp = S.cat.SP[g.k] || {};
    var h = '<div class="cd-chon cd-hoi-gia"><p class="cd-gia-dau">✔ Đúng món rồi! Khách hỏi <b lang="zh" data-cd-doc="多少钱？">多少钱？</b> <small>duōshao qián? — bao nhiêu tiền?</small></p>' +
      '<p class="cd-gia-tinh">Giá chợ đêm: <b>' + g.gia + ' xu</b> / <span lang="zh">' + esc(g.l) + '</span> ' + esc(g.lPy) + ' · em đưa <b>' + g.n + '</b> <span lang="zh">' + esc(g.l) + esc(sp.zh || '') + '</span>. Một xu = <span lang="zh">一块钱</span>. Chọn câu trả lời đúng:</p>' +
      '<div class="cd-o-gia">' + g.opts.map(function (o, i) {
        return '<button type="button" class="cd-gia-o" data-cd-gia="' + i + '"><b lang="zh">' + esc(o.zh) + '</b><small>' + esc(o.py) + '</small></button>';
      }).join('') + '</div>' +
      '<div class="cd-bo"><button type="button" class="cd-lk" data-cd-gia="-1">Bỏ qua câu giá (vẫn bán, không có tiền boa)</button></div></div>';
    return h;
  }
  function ganGia(than) {
    $all('[data-cd-gia]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (C.gui) return;
        var i = +b.getAttribute('data-cd-gia');
        if (i >= 0) { var o = C.kh.gia.opts[i]; if (o) N.doc(o.zh); }
        C.gui = true;
        N.goi('/api/farm/chodem/gia', { chon: i }).then(function (r) { C.gui = false; nhanKet(r); }, function (e) { C.gui = false; N.bao(e.message, 'loi'); if (e.status === 400) tai(); });
      });
    });
    // giu nut bo qua o duoi (data-cd-bo cua khach) — o buoc gia khong cho moi ve
    var bo = $('[data-cd-bo]', than);
    if (bo) bo.parentNode.hidden = true;
  }

  function veChat(kh) {
    var q = kh.q;
    return '<div class="cd-chon cd-chat"><p class="cd-chat-dau">💬 Khách muốn trò chuyện — câu hỏi lấy từ bài em đã học:</p><div class="kt-cau"><p class="kt-cau-so"><b>' + esc((q.hoi && q.hoi.lenh) || 'Chọn câu trả lời đúng') + '</b></p>' +
      N.htmlKt(q, 'cdq') + '<div class="kt-cau-kq" aria-live="polite"></div></div></div>';
  }
  function ganChat(than, kh) {
    var q = kh.q, khoa = false;
    N.ganKt(than, q, 'cdq', function (body, chon) {
      if (khoa) return;
      khoa = true;
      N.goi('/api/farm/chodem/chat', body).then(function (r) {
        N.danhDauKt(than, q, r, chon, 'cdq');
        am(r.dung ? 'dung' : 'sai');
        N.docKt(r);
        r.loai = 'chat';
        r.giai = N.giaiKt(r, q);
        nhanKet(r);
      }, function (e) { khoa = false; N.moLaiKt(than, q); N.bao(e.message, 'loi'); if (e.status === 400) tai(); });
    });
  }

  function nhanKet(r) {
    if (r.st) N.nhanTrangThai(r.st);
    if (r.cd) C.d = r.cd;
    r.khach = C.kh ? C.kh.kh : null;
    r.loai = r.loai || (C.kh ? C.kh.loai : 'mua');
    C.ket = r; C.kh = null; C.chon = { k: '', n: 0, l: '' }; C.xem = false;
    if (r.loai !== 'chat') am(r.dung ? 'dung' : 'sai');
    if (r.dung && r.camOn) setTimeout(function () { N.doc(r.camOn.zh); }, 350);
    else if (!r.dung && r.dap && r.dap.cau) setTimeout(function () { N.doc(r.dap.cau.zh); }, 350);
    if (r.dung && N.fx && r.xu) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, false);
    N.veBang();
  }

  function veKet(than, d) {
    var r = C.ket, kh = r.khach, h = '', loi;
    if (r.dung) loi = '<div class="cd-bong vui"><b lang="zh" data-cd-doc="' + esc(r.camOn.zh) + '">' + esc(r.camOn.zh) + '</b><small>' + esc(r.camOn.py) + ' — ' + esc(r.camOn.vn) + '</small></div>';
    else {
      var rv = r.raVe || { zh: '没关系，我下次再来。', py: 'Méi guānxi, wǒ xià cì zài lái.', vn: 'Không sao, lần sau tôi lại đến.' };
      loi = '<div class="cd-bong"><b lang="zh" data-cd-doc="' + esc(rv.zh) + '">' + esc(rv.zh) + '</b><small>' + esc(rv.py) + ' — ' + esc(rv.vn) + '</small></div>';
    }
    h = canh('<div class="cd-khach ' + (r.dung ? 'vui' : 'di') + '">' + loi + '<span class="cd-av">' + avKhach(kh, r.dung ? 1 : 0) + '</span>' +
      (kh ? '<span class="cd-ten"><b lang="zh">' + esc(kh.zh) + '</b> ' + esc(kh.py) + '</span>' : '') + '</div>', { hang: hangTrenQuay(d) });
    h += '<div class="cd-ket ' + (r.dung ? 'dung' : 'sai') + '">';
    if (r.loai === 'chat') {
      h += r.dung ? '<h3>✔ Trả lời đúng — khách vui vẻ boa thêm!</h3>' : '<h3>✘ Chưa đúng — khách cười rồi chào tạm biệt</h3>';
      if (r.giai) h += '<div class="cd-giai">' + r.giai + '</div>';
      if (r.dung) h += '<p class="cd-tien">' + img('ic-xu') + ' +' + (r.xu || 0) + ' xu · +' + (r.xp || 0) + ' XP</p>';
    } else if (r.dung) {
      h += '<h3>🎉 Bán được hàng!</h3><p class="cd-tien">' + img('ic-xu') + ' <b>+' + r.xu + ' xu</b> <small>(' + r.goc + ' xu giá chợ đêm' +
        (r.boaLg ? ' + ' + r.boaLg + ' boa vì đúng lượng từ' : '') + (r.boaGia ? ' + ' + r.boaGia + ' boa vì trả lời đúng giá' : '') + ') · +' + r.xp + ' XP</small></p>';
      if (r.catHanMuc > 0) h += '<p class="cd-nho">Hạn mức bán hôm nay chỉ còn đủ cho ' + r.xu + ' xu (thiếu ' + r.catHanMuc + ') — học thêm sao để mở rộng hạn mức nhé!</p>';
      if (r.dungLg === false) h += '<p class="cd-nho">💡 Lượng từ đúng là <b lang="zh">' + esc(r.dap.l) + '</b> ' + esc(r.dap.lPy) + ' (' + esc(r.dap.lVn) + ') — đúng lượng từ thì khách boa thêm.</p>';
      if (r.giaDap && !r.giaDung) h += '<p class="cd-nho">💡 ' + (r.boQua ? 'Câu trả lời giá' : 'Giá đúng là') + ': <b lang="zh" data-cd-doc="' + esc(r.giaDap.zh) + '">' + esc(r.giaDap.zh) + '</b> ' + esc(r.giaDap.py) + ' (' + r.giaDap.v + ' xu)</p>';
      h += htmlDap(r.dap, true);
    } else {
      h += '<h3>' + (r.boQua ? 'Khách đã về' : r.hetHang ? 'Kho không đủ hàng' : '✘ Chưa đúng ý khách') + '</h3>';
      if (r.loi) h += '<p class="cd-nho">' + esc(r.loi) + '</p>';
      if (r.dap) {
        var sai = [];
        if (r.dungHang === false) sai.push('món hàng');
        if (r.dungSo === false) sai.push('số lượng');
        if (sai.length) h += '<p class="cd-nho">Em chọn chưa đúng <b>' + sai.join(' và ') + '</b>. Hàng vẫn còn nguyên trong kho.</p>';
        h += htmlDap(r.dap, false);
      } else if (r.zh || r.doc) h += '<div class="cd-giai">' + N.giaiKt(r, { hoi: {} }) + '</div>';
    }
    h += '</div>';
    h += '<div class="nt-hang-nut">' + (d.con > 0 ? '<button type="button" class="nt-nut nt-nut-xanh cd-nut-to" data-cd-tiep>🙋 Mời khách tiếp (' + d.con + ')</button>' : '<button type="button" class="nt-nut" data-cd-tiep>Xong đêm nay ✓</button>') + '</div>';
    h += thanhTin(d);
    than.innerHTML = h;
    var t = $('[data-cd-tiep]', than);
    t.addEventListener('click', function () {
      C.ket = null;
      if (d.con > 0) moiKhach(t); else N.veBang();
    });
  }
  // dap an: cau khach noi (chu Han + pinyin + nghia) + mon / so / luong tu
  function htmlDap(a, dung) {
    if (!a) return '';
    return '<div class="cd-dap">' + img('sp-' + a.k) + '<div><p class="cd-dap-cau"><b lang="zh" data-cd-doc="' + esc(a.cau.zh) + '">' + esc(a.cau.zh) + '</b> 🔊</p>' +
      '<p class="cd-dap-py">' + esc(a.cau.py) + '</p><p class="cd-dap-vn">' + esc(a.cau.vn) + '</p>' +
      '<p class="cd-dap-tach">' + (dung ? 'Khách mua' : 'Khách cần') + ': <b lang="zh">' + SO[a.n] + esc(a.l) + esc(a.zh) + '</b> · ' + a.n + ' ' + esc(a.vn.toLowerCase()) +
      ' · lượng từ <b lang="zh">' + esc(a.l) + '</b> ' + esc(a.lPy) + '</p></div></div>';
  }
  function htmlLs(d) {
    return '<h3 class="cd-h">Khách vừa ghé <small>cuối tuần này</small></h3><div class="cd-ls">' + d.ls.map(function (x) {
      var sp = x.k && S.cat.SP[x.k];
      return '<span class="cd-ls-o ' + (x.dung ? 'dung' : 'sai') + '">' + (sp ? img('sp-' + x.k) : '💬') + (x.dung ? '✔ +' + x.xu : '✘') + '</span>';
    }).join('') + '</div>';
  }

  function moiKhach(nut) {
    if (C.gui) return;
    C.gui = true;
    if (nut) nut.disabled = true;
    N.goi('/api/farm/chodem/khach', {}).then(function (r) {
      C.gui = false;
      C.kh = r.kh; C.d = r.cd; C.ket = null; C.xem = false; C.chon = { k: '', n: 0, l: '' };
      am('mua');
      N.veBang();
    }, function (e) { C.gui = false; if (nut) nut.disabled = false; N.bao(e.message, 'loi'); if (e.status === 400) tai(); });
  }

  N.dangKy('chodem', function (than) {
    $('#ntBangTit').textContent = 'Chợ đêm cuối tuần 夜市';
    N.datTab([], '');
    if (!C.d || !S.st) { than.innerHTML = '<p class="nt-trong">Đang thắp đèn lồng…</p>'; tai(); return; }
    var d = C.d;
    if (d.lv < d.lvMo) {
      than.innerHTML = canh('<div class="cd-bien-dong"><b>🔒</b><small>Chợ đêm mở cho nông trại từ cấp ' + d.lvMo + '</small></div>', { dong: true }) + htmlCachChoi(d);
    } else if (!d.mo) veDong(than, d);
    else veMo(than, d);
    $all('img', than).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    ganDoc(than);
  });

  /* ---------------- nut trong "⋯ Thêm" + banner ---------------- */
  function taoNut() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || $('#ntThemChoDem')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-them-o'; b.id = 'ntThemChoDem'; b.setAttribute('data-mo', 'chodem');
    b.innerHTML = '<img src="' + N.anh('chodem-ic') + '" alt="" draggable="false"><span class="nt-muc-chu"><b>Chợ đêm <span lang="zh">夜市</span></b><small id="ntCdPhu">tối thứ Sáu – Chủ nhật · nghe khách gọi hàng</small></span><i class="nt-cham" id="ntCdCham" hidden></i>';
    var sau = luoi.querySelector('[data-mo="kt-mk"]');
    luoi.insertBefore(b, sau ? sau.nextSibling : null);
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      if (S.tham && N.veNha) N.veNha();
      C.d = null; C.ket = null;
      N.moBang('chodem');
    });
  }
  taoNut();

  function anChipHomNay() { try { return localStorage.getItem('hyv_cd_an') === ngayVn(); } catch (e) { return false; } }
  function chip() {
    if (C.chip) return C.chip;
    var w = document.createElement('div');
    w.className = 'cd-chip';
    w.innerHTML = '<button type="button" class="cd-chip-mo" data-cd-chip></button><button type="button" class="cd-chip-x" aria-label="Ẩn thông báo chợ đêm hôm nay">✕</button>';
    w.querySelector('[data-cd-chip]').addEventListener('click', function () {
      if (S.tham && N.veNha) N.veNha();
      C.d = null; C.ket = null; N.moBang('chodem');
    });
    w.querySelector('.cd-chip-x').addEventListener('click', function () {
      try { localStorage.setItem('hyv_cd_an', ngayVn()); } catch (e) { /* bo qua */ }
      boChip();
    });
    document.body.appendChild(w);
    C.chip = w;
    return w;
  }
  function boChip() { if (C.chip) { C.chip.remove(); C.chip = null; } }
  function capNhat() {
    var x = kt();
    var phu = $('#ntCdPhu'), cham = $('#ntCdCham');
    if (!x) { boChip(); return; }
    if (phu) {
      phu.textContent = x.khoa ? 'mở ở cấp ' + x.lvMo + ' · tối thứ Sáu – Chủ nhật'
        : x.mo ? (x.con > 0 || x.dang ? '🏮 đang mở · còn ' + x.con + ' khách' : 'đang mở · đêm nay hết khách')
          : 'mở 18:00 thứ Sáu · còn ' + demNguoc(x.moLuc - N.bayGio());
    }
    var co = x.mo && !x.khoa && (x.con > 0 || x.dang);
    if (cham) cham.hidden = !co;
    if (!co || anChipHomNay() || S.tham) { boChip(); return; }
    var c = chip(), nut = c.querySelector('[data-cd-chip]');
    c.classList.toggle('thap', !!document.getElementById('nnmChip'));
    var thu6 = thuVn() === 5;
    nut.setAttribute('aria-label', 'Chợ đêm cuối tuần đang mở — còn ' + x.con + ' khách đêm nay. Bấm để vào quầy hàng.');
    nut.innerHTML = '<img src="' + N.anh('chodem-den') + '" alt="" draggable="false"><span><b lang="zh">夜市</b> ' + (thu6 ? 'Tối T6 · ' : '') + 'Chợ đêm' +
      (x.dang ? ' · khách chờ' : ' · ' + x.con + ' khách') + '</span>';
    c.hidden = !!document.body.classList.contains('co-bang');
  }
  N.sau.push(capNhat);
  N.nhip.push(function () {
    // dem nguoc trong bang (ngoai gio) + tu mo cua khi den 18:00 thu Sau
    var el = $('[data-cd-dem]');
    if (el && C.d && !C.d.mo) {
      var con = C.d.moLuc - N.bayGio();
      el.textContent = demNguoc(con);
      if (con <= 0) { C.d = null; ve(); }
    }
    if (C.chip) C.chip.hidden = !!document.body.classList.contains('co-bang') || !!S.tham;
    var x = kt(), phu = $('#ntCdPhu');
    if (x && !x.mo && phu && !x.khoa && !$('#ntThem').hidden) phu.textContent = 'mở 18:00 thứ Sáu · còn ' + demNguoc(x.moLuc - N.bayGio());
  });
  if (S.st) capNhat();
})();
