/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Le hoi Tet Nguyen dan 春节 (2026-11-24). May chu: nong-trai-tet.js
   (st.kt.tet = { mua, nam, gc, con, tet, tru, yx, moc, gio, gd, conNgay, me, ly, on, lxMoi }; danh muc S.cat.TET).
   - body.nt-tet: mau do – vang, day den long tren dau, canh dao / mai roi nhe, chip dem nguoc 除夕 tren thanh tren,
     bang chao (dong duoc), nhac "新年好". Che do nhe (body.nt-nhe) tat het trang tri dong.
   - 除夕: dem nguoc den giao thua, 10 giay cuoi so to, 00:00 phao hoa (dung chung NTX.phaoHoa cua nam moi) + pháo đỏ.
   - Bang 'tet': 🧧 Tết (on bai nhan qua, tien mung tuoi, do den) · 🏮 Trang trí · 🥟 Bếp Tết · 🧧 Lì xì · 📖 Từ vựng · 🏮 Đố đèn.
   - Ban nhan li xi: lan sau mo nong trai thay bao li xi kem loi chuc (chu Han + pinyin + nghia, doc to).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$, $all = N.$all, esc = N.esc, img = N.img;
  var T = { d: null, tai: false, lech: 0, on: null, onKet: null, me: null, meKet: null, lx: null, lxKq: null, nau: null, bep: null,
    chip: null, dem: null, phao: null, dangPhao: false, baoLx: 0, nhac: false, daDung: false, soCu: -1 };
  var SO_ZH = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  var SO_PY = ['líng', 'yī', 'èr', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ', 'shí'];

  function cat() { return (S.cat && S.cat.TET) || null; }
  function tt() { var x = S.st && S.st.kt && S.st.kt.tet; return x && x.mua && cat() ? x : null; }
  function bay() { return Date.now() + T.lech; }
  function giam() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function nhe() { return document.body.classList.contains('nt-nhe'); }
  function hai(n) { return (n < 10 ? '0' : '') + n; }
  function ngayVn(s) { return s ? +s.slice(8) + '/' + +s.slice(5, 7) : ''; }
  function xuHtml(n) { return '<span class="tet-xu">' + img('ic-xu') + Number(n).toLocaleString('vi-VN') + '</span>'; }
  function laBang() { var b = N.bangDang(); return b && b.loai === 'tet'; }
  function veLai() { if (laBang()) N.veBang(); }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } return null; }
  // nut chu Han bam de nghe
  function nutZh(zh, py, vn, cls) {
    return '<button type="button" class="tet-zh' + (cls ? ' ' + cls : '') + '" data-tet-doc="' + esc(zh) + '"><b lang="zh">' + esc(zh) + '</b>' +
      (py ? '<span lang="zh-Latn">' + esc(py) + '</span>' : '') + (vn ? '<small>' + esc(vn) + '</small>' : '') + '<em aria-hidden="true">🔊</em></button>';
  }
  function ganDoc(than) {
    $all('[data-tet-doc]', than).forEach(function (b) {
      b.addEventListener('click', function (e) { e.stopPropagation(); N.doc(b.getAttribute('data-tet-doc')); });
    });
  }

  function tai() {
    if (T.tai) return;
    T.tai = true;
    N.goi('/api/farm/tet').then(function (r) { T.tai = false; T.d = r; veLai(); }, function (e) { T.tai = false; N.bao(e.message, 'loi'); });
  }
  function moBang(tab) {
    if (N.dongThiTran) N.dongThiTran();
    if (S.tham && N.veNha) N.veNha();
    T.d = null;
    N.moBang('tet', tab || 'le');
  }

  /* ---------------- chip dem nguoc tren thanh tren ---------------- */
  function chuChip(x) {
    var t = bay();
    if (t < x.moc) {
      var con = x.moc - t;
      if (con <= 86400000) {
        var s = Math.ceil(con / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), g = s % 60;
        return { h: '<span class="tet-chip-ic" aria-hidden="true">🧨</span><span class="tet-chip-chu"><b>' + hai(h) + ':' + hai(m) + ':' + hai(g) + '</b><small lang="zh">除夕 · giao thừa</small></span>',
          a: 'Còn ' + h + ' giờ ' + m + ' phút đến giao thừa', giay: s };
      }
      var n = Math.ceil((x.moc - 86400000 - t) / 86400000);
      return { h: '<span class="tet-chip-ic" aria-hidden="true">🧨</span><span class="tet-chip-chu"><b>' + n + ' ngày</b><small><span lang="zh">除夕</span> chúxī</small></span>',
        a: 'Còn ' + n + ' ngày đến đêm giao thừa — mở lễ hội Tết' };
    }
    if (x.gd === 'yx') {
      return { h: '<span class="tet-chip-ic" aria-hidden="true">🏮</span><span class="tet-chip-chu"><b lang="zh">元宵</b><small>đố đèn</small></span>', a: 'Rằm tháng Giêng — đố đèn 猜灯谜' };
    }
    return { h: '<span class="tet-chip-ic" aria-hidden="true">🧧</span><span class="tet-chip-chu"><b lang="zh">' + esc(x.gc || '春节') + '</b><small>năm ' + esc((x.con && x.con.vn) || '') + '</small></span>',
      a: 'Lễ hội Tết ' + (x.gc || '') + ' — mở bảng Tết' };
  }
  function veChip() {
    var x = tt(), hud = $('.nt-hud');
    if (!x || !hud) { if (T.chip) { T.chip.remove(); T.chip = null; } return; }
    if (!T.chip || !T.chip.isConnected) {
      var b = document.createElement('button');
      b.type = 'button';
      b.id = 'ntTetChip';
      b.className = 'nt-chip tet-chip';
      b.addEventListener('click', function () {
        var y = tt();
        if (y && bay() >= y.moc && bay() - y.moc < 86400000) { moPhao(false); return; }
        moBang('le');
      });
      var nhac = hud.querySelector('.nt-chip-nhac');
      if (nhac && nhac.parentNode === hud) hud.insertBefore(b, nhac); else hud.appendChild(b);
      T.chip = b;
    }
    var c = chuChip(x);
    var h = c.h + (x.lxMoi ? '<i class="tet-chip-cham" aria-hidden="true"></i>' : '');
    if (T.chip.getAttribute('data-h') !== h) { T.chip.innerHTML = h; T.chip.setAttribute('data-h', h); }
    T.chip.setAttribute('aria-label', c.a);
    return c;
  }

  /* ---------------- dem nguoc 10 giay + phao hoa giao thua ---------------- */
  function demTo(s) {
    if (T.soCu === s && T.dem) return;
    T.soCu = s;
    if (!T.dem) {
      T.dem = document.createElement('div');
      T.dem.className = 'nnm-dem tet-dem';
      T.dem.setAttribute('aria-live', 'polite');
      document.body.appendChild(T.dem);
    }
    T.dem.innerHTML = '<b>' + s + '</b><span lang="zh">' + SO_ZH[s] + '</span><small>' + SO_PY[s] + '</small>';
    T.dem.classList.remove('nhay'); void T.dem.offsetWidth; T.dem.classList.add('nhay');
  }
  function boDem() { if (T.dem) { T.dem.remove(); T.dem = null; } T.soCu = -1; }
  function daDongPhao(nam) { return ls('hyv_tet_phao') === String(nam); }
  function phaoDo() {
    // hai chum phao do hai ben (hinh ve tay tet-bianpao) rung + giay do bay
    var h = '<div class="tet-phao-do trai" aria-hidden="true">' + img('tet-bianpao') + '</div><div class="tet-phao-do phai" aria-hidden="true">' + img('tet-bianpao') + '</div><div class="tet-giay" aria-hidden="true">';
    for (var i = 0; i < 26; i++) h += '<i style="left:' + ((i * 37) % 100) + '%;animation-delay:-' + ((i * 0.37) % 3).toFixed(2) + 's;animation-duration:' + (2.6 + (i % 5) * 0.5) + 's"></i>';
    return h + '</div>';
  }
  function quaHtml() {
    var x = tt();
    if (!x) return '';
    if (x.ly && x.ly.da) return '<p class="nnm-da">🧧 Em đã nhận tiền mừng tuổi <span lang="zh">压岁钱</span> năm nay. Chúc em học thật giỏi!</p>';
    if (!x.ly || !x.ly.mo) return '';
    var c = cat();
    return '<button type="button" class="nnm-nhan tet-nhan" data-tet-ly>🧧 Nhận tiền mừng tuổi <span lang="zh">压岁钱</span></button><small>' + c.LY.xu + ' xu + ' + c.LY.xp + ' KN · 1 lần mỗi Tết</small>';
  }
  function moPhao(tuDong) {
    var x = tt();
    if (!x || T.dangPhao) return;
    T.dangPhao = true;
    var lop = document.createElement('div');
    lop.id = 'tetPhao';
    lop.className = 'nnm-phao tet-phao';
    lop.innerHTML = '<div class="nnm-dem-troi tet-troi" aria-hidden="true"></div><canvas class="nnm-cv" aria-hidden="true"></canvas>' + phaoDo() +
      '<section class="nnm-chao tet-chao" role="dialog" aria-label="Chúc mừng năm mới">' +
      '<button type="button" class="nnm-dong" aria-label="Đóng pháo hoa">✕</button>' +
      '<button type="button" class="nnm-zh" data-tet-doc="新年快乐！万事如意！" lang="zh">新年快乐！</button>' +
      '<p class="nnm-py">Xīnnián kuàilè! Wànshì rúyì! <span aria-hidden="true">🔊</span></p>' +
      '<p class="nnm-vn">Chúc mừng năm mới <b lang="zh">' + esc(x.gc) + '</b> — năm con ' + esc(x.con.vn) + ' <span lang="zh">' + esc(x.con.zh) + '</span> ' + esc(x.con.py) + '!</p>' +
      '<div class="nnm-qua" id="tetQua">' + quaHtml() + '</div></section>';
    document.body.appendChild(lop);
    document.body.classList.add('co-nnm');
    T.tuDong = tuDong;
    requestAnimationFrame(function () { lop.classList.add('hien'); });
    if (N.phaoHoa) T.phao = N.phaoHoa(lop.querySelector('canvas'), giam() || nhe());
    lop.querySelector('.nnm-dong').addEventListener('click', function () { dongPhao(true); });
    lop.querySelector('[data-tet-doc]').addEventListener('click', function () { N.doc('新年快乐！万事如意！'); if (T.phao) T.phao.ban(); });
    ganLy(lop);
    N.tieng('mung');
  }
  function dongPhao(boi) {
    var lop = $('#tetPhao'), x = tt();
    if (boi && x) ls('hyv_tet_phao', String(x.nam));
    T.dangPhao = false;
    if (T.phao) { T.phao.dung(); T.phao = null; }
    document.body.classList.remove('co-nnm');
    if (lop) { lop.classList.remove('hien'); setTimeout(function () { lop.remove(); }, 450); }
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && T.dangPhao) dongPhao(true); });
  function ganLy(goc) {
    var b = goc.querySelector('[data-tet-ly]');
    if (!b) return;
    b.addEventListener('click', function () {
      b.disabled = true;
      N.goi('/api/farm/tet/qua', {}).then(function (r) {
        if (r.st) N.nhanTrangThai(r.st);
        var o = b.parentNode;
        o.innerHTML = '<p class="nnm-da nhan">🧧 Em nhận được <b>' + r.qua.xu + ' xu</b> và <b>' + r.qua.xp + ' KN</b> tiền mừng tuổi!</p>';
        if (N.fx && N.fx.mung) N.fx.mung(o, true);
        N.doc('恭喜发财！');
        if (T.phao) for (var i = 0; i < 4; i++) setTimeout(function () { if (T.phao) T.phao.ban(); }, i * 160);
        if (T.d) { T.d = null; veLai(); }
      }, function (e) { b.disabled = false; N.bao(e.message, 'loi'); });
    });
  }

  function nhip() {
    var x = tt();
    if (!x) { boDem(); return; }
    var c = veChip();
    var t = bay();
    if (t < x.moc) {
      if (c && c.giay != null && c.giay <= 10) demTo(c.giay); else if (T.dem) boDem();
      return;
    }
    if (T.dem) boDem();
    var sau = t - x.moc;
    if (sau < (x.phao || 3600000) && !T.dangPhao && !daDongPhao(x.nam)) moPhao(true);
    if (T.dangPhao && T.tuDong && sau >= (x.phao || 3600000)) dongPhao(false);
  }

  /* ---------------- trang tri chung mua Tet (body.nt-tet) ---------------- */
  function dayDen() {
    var el = $('#ntTetDay');
    if (!el) return;
    var W = Math.max(320, innerWidth), n = Math.max(4, Math.round(W / 92)), h = '', buoc = W / n;
    h += '<path d="M0 6Q' + (W / 4) + ' 22 ' + (W / 2) + ' 8T' + W + ' 6" fill="none" stroke="#2b1d3a" stroke-width="2.4"/>';
    for (var i = 0; i < n; i++) {
      var x = Math.round(buoc * (i + 0.5)), y = 12 + Math.round(5 * Math.sin((i + 0.5) / n * Math.PI * 2));
      h += '<g class="tet-dl" style="animation-delay:-' + ((i % 4) * 0.6).toFixed(1) + 's;transform-origin:' + x + 'px ' + y + 'px">' +
        '<path d="M' + x + ' ' + y + 'V' + (y + 6) + '" stroke="#2b1d3a" stroke-width="1.8"/>' +
        '<rect x="' + (x - 6) + '" y="' + (y + 5) + '" width="12" height="4" rx="1.5" fill="#ffc93c" stroke="#2b1d3a" stroke-width="1.6"/>' +
        '<ellipse cx="' + x + '" cy="' + (y + 17) + '" rx="11" ry="10" fill="#e53935" stroke="#2b1d3a" stroke-width="2.2"/>' +
        '<path d="M' + x + ' ' + (y + 8) + 'V' + (y + 26) + 'M' + (x - 5) + ' ' + (y + 9) + 'Q' + (x - 10) + ' ' + (y + 17) + ' ' + (x - 5) + ' ' + (y + 25) + 'M' + (x + 5) + ' ' + (y + 9) + 'Q' + (x + 10) + ' ' + (y + 17) + ' ' + (x + 5) + ' ' + (y + 25) + '" fill="none" stroke="#b71c1c" stroke-width="1.3"/>' +
        '<rect x="' + (x - 6) + '" y="' + (y + 25) + '" width="12" height="4" rx="1.5" fill="#ffc93c" stroke="#2b1d3a" stroke-width="1.6"/>' +
        '<path d="M' + x + ' ' + (y + 29) + 'V' + (y + 37) + '" stroke="#e53935" stroke-width="2.4" stroke-linecap="round"/>' +
        (i % 2 ? '' : '<text x="' + x + '" y="' + (y + 21) + '" font-size="9" font-weight="900" text-anchor="middle" fill="#ffd54f" font-family="Noto Serif SC, serif">福</text>') +
        '</g>';
    }
    el.innerHTML = '<svg width="' + W + '" height="56" viewBox="0 0 ' + W + ' 56" aria-hidden="true" focusable="false">' + h + '</svg>';
  }
  function canhHoa() {
    var h = '', mau = ['#f8a5c2', '#ffc1d6', '#ffd600', '#ffe57f'];
    for (var i = 0; i < 18; i++) {
      var m = mau[i % 4], to = 10 + (i * 5) % 8;
      h += '<i class="tet-canh" style="left:' + ((i * 41) % 100) + '%;width:' + to + 'px;height:' + to + 'px;--lac:' + (14 + (i * 7) % 24) + 'px;animation-duration:' + (11 + (i * 3) % 9) + 's,' + (3 + (i % 4) * 0.7) + 's;animation-delay:-' + ((i * 1.9) % 17).toFixed(1) + 's,-' + (i % 3) + 's">' +
        '<svg viewBox="0 0 20 20"><path d="M10 2Q17 8 11.5 17.5Q10 18.6 8.5 17.5Q3 8 10 2Z" fill="' + m + '" stroke="#2b1d3a" stroke-width="1.3" stroke-linejoin="round"/></svg></i>';
    }
    return h;
  }
  function dung() {
    if (T.daDung) return;
    T.daDung = true;
    var d = document.createElement('div');
    d.id = 'ntTetDay'; d.className = 'tet-day'; d.setAttribute('aria-hidden', 'true');
    document.body.appendChild(d);
    var c = document.createElement('div');
    c.id = 'ntTetHoa'; c.className = 'tet-hoa'; c.setAttribute('aria-hidden', 'true');
    c.innerHTML = canhHoa();
    document.body.appendChild(c);
    dayDen();
    var hen = null;
    window.addEventListener('resize', function () { clearTimeout(hen); hen = setTimeout(dayDen, 200); });
  }
  function bangChao(x) {
    if (ls('hyv_tet_an') === String(x.nam) || $('#ntTetBan')) return;
    var b = document.createElement('div');
    b.id = 'ntTetBan';
    b.className = 'tet-ban';
    b.setAttribute('role', 'status');
    b.innerHTML = '<span class="tet-ban-hinh" aria-hidden="true">' + img('tet-fu') + '</span>' +
      '<div class="tet-ban-chu"><b>Lễ hội Tết đến rồi!</b> ' + nutZh('春节快乐！', 'Chūnjié kuàilè!', '', 'nho') +
      '<small>Năm <b lang="zh">' + esc(x.gc) + '</b> — năm con ' + esc(x.con.vn) + '. Trang trí câu đối, đèn lồng, nấu bánh Tết, lì xì bạn cùng lớp. Giao thừa đêm ' + ngayVn(x.tru) + '!</small>' +
      '<span class="tet-ban-nut"><button type="button" class="nt-nut nt-nut-nho" data-tet-ban="mua">🏮 Trang trí Tết</button><button type="button" class="nt-nut nt-nut-nho" data-tet-ban="lixi">🧧 Lì xì bạn</button></span></div>' +
      '<button type="button" class="tet-ban-dong" data-tet-ban="dong" aria-label="Đóng lời chào Tết">✕</button>';
    document.body.appendChild(b);
    ganDoc(b);
    b.addEventListener('click', function (e) {
      var k = e.target.closest('[data-tet-ban]');
      if (!k) return;
      ls('hyv_tet_an', String(x.nam));
      b.remove();
      var v = k.getAttribute('data-tet-ban');
      if (v !== 'dong') moBang(v);
    });
  }
  function nutThem() {
    var luoi = $('#ntThemLuoi'), x = tt();
    if (!luoi) return;
    var b = $('#ntThemTet');
    if (!b) {
      b = document.createElement('button');
      b.type = 'button'; b.className = 'nt-them-o'; b.id = 'ntThemTet'; b.setAttribute('data-mo', 'tet');
      b.innerHTML = '<span class="nt-them-emo" aria-hidden="true">🧧</span><span class="nt-muc-chu"><b>Lễ hội Tết</b><small>春节 · trang trí, bếp Tết, lì xì, đố đèn</small></span>';
      var sau = luoi.querySelector('[data-mo="bonmua"]');
      luoi.insertBefore(b, sau ? sau.nextSibling : null);
      b.addEventListener('click', function (e) { e.stopPropagation(); moBang('le'); });
    }
    b.hidden = !x;
  }
  function nhac() {
    if (T.nhac || !window.NhacNen) return;
    T.nhac = true;
    // sau ganNhac() cua nong-trai.js (no bat nhac 'em' ngay sau lan nhan trang thai dau tien)
    setTimeout(function () { if (tt() && window.NhacNen) NhacNen.bat({ kieu: 'tet', nut: false }); }, 0);
  }
  function apDung() {
    var x = tt();
    document.body.classList.toggle('nt-tet', !!x);
    nutThem();
    if (!x) {
      var bn = $('#ntTetBan'); if (bn) bn.remove();
      if (T.chip) { T.chip.remove(); T.chip = null; }
      boDem();
      return;
    }
    T.lech = x.gio - Date.now();
    dung();
    nhac();
    veChip();
    if (!S.tham) bangChao(x);
    if (!S.tham && x.lxMoi > T.baoLx && !document.body.classList.contains('co-bang') && !T.dangPhao) baoLixi(x.lxMoi);
  }
  N.sau.push(apDung);
  N.nhip.push(nhip);

  /* ---------------- ban nhan li xi: bao li xi moi ---------------- */
  function baoLixi(n) {
    T.baoLx = n;
    N.goi('/api/farm/tet').then(function (r) {
      var moi = ((r.lx && r.lx.hop) || []).filter(function (e) { return !e.xem; });
      if (!moi.length || document.body.classList.contains('co-bang')) return;
      var C = cat().CHUC;
      var h = '<div class="tet-nhanlx"><span class="tet-nhanlx-hinh" aria-hidden="true">' + img('tet-hongbao') + '</span><h2>🧧 Em nhận được ' + moi.length + ' bao lì xì!</h2><ul>' +
        moi.map(function (e) {
          var c = C[e.c] || C.xinnian;
          return '<li><p><b>' + esc(e.ten) + '</b> lì xì em ' + xuHtml(e.xu) + ' kèm lời chúc:</p>' + nutZh(c.zh, c.py, c.vn, 'to') + '</li>';
        }).join('') + '</ul><p class="tet-meo">Bấm vào lời chúc để nghe đọc. Tiền lì xì đã vào túi xu của em.</p>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tet-cam>' + '<span lang="zh">谢谢！</span> Cảm ơn</button></div></div>';
      N.moBangNho(h);
      var than = $('#ntBangThan');
      ganDoc(than);
      var c0 = C[moi[0].c] || C.xinnian;
      setTimeout(function () { N.doc(c0.zh); }, 400);
      var b = $('[data-tet-cam]', than);
      if (b) b.addEventListener('click', function () {
        N.doc('谢谢！');
        N.goi('/api/farm/tet/lx/xem', {}).then(function (rr) { T.baoLx = 0; if (rr.st) N.nhanTrangThai(rr.st); }, function () {});
        N.dongBang();
      });
    }, function () { /* lan sau */ });
  }
  N.htmlNk.tetlx = function (e, ai) {
    var c = (cat() && cat().CHUC[e.c]) || { zh: '新年快乐！', py: 'Xīnnián kuàilè!' };
    return { hinh: 'tet-hongbao', chu: ai + ' lì xì em <b>' + e.xu + ' xu</b> 🧧 kèm lời chúc <b lang="zh">' + esc(c.zh) + '</b> ' + esc(c.py) };
  };
  N.htmlNk.tetlxdi = function (e, ai) {
    var c = (cat() && cat().CHUC[e.c]) || { zh: '新年快乐！', py: 'Xīnnián kuàilè!' };
    return { hinh: 'tet-hongbao', chu: 'Em lì xì ' + ai + ' <b>' + e.xu + ' xu</b> và chúc <b lang="zh">' + esc(c.zh) + '</b> ' + esc(c.py) };
  };

  /* ---------------- bang Tet ---------------- */
  function tabs(d) {
    var ds = [['le', '🧧 Tết'], ['mua', '🏮 Trang trí'], ['bep', '🥟 Bếp Tết'], ['lixi', '🧧 Lì xì'], ['tu', '📖 Từ vựng']];
    if (d && d.me && d.me.mo) ds.push(['me', '🏮 Đố đèn']);
    return ds;
  }
  N.dangKy('tet', function (than, bang) {
    $('#ntBangTit').textContent = 'Lễ hội Tết 春节';
    var tab = bang.tab || 'le';
    if (!T.d || !S.st) { N.datTab(tabs(null), tab); than.innerHTML = '<p class="nt-trong">Đang mở lễ hội Tết…</p>'; tai(); return; }
    if (!T.d.tet || !T.d.tet.mua) { N.datTab([], ''); than.innerHTML = '<p class="nt-trong">🧧 Lễ hội Tết chưa đến (hoặc đã qua) — hẹn em Tết năm sau nhé!</p>'; return; }
    N.datTab(tabs(T.d), tab);
    if (tab === 'mua') veMua(than);
    else if (tab === 'bep') veBep(than);
    else if (tab === 'lixi') veLixi(than);
    else if (tab === 'tu') veTu(than);
    else if (tab === 'me') veMe(than);
    else veLe(than);
    ganDoc(than);
  });

  /* ---- tab Tết: dem nguoc, on bai nhan qua, tien mung tuoi, do den ---- */
  function veLe(than) {
    if (T.on) return veCauOn(than);
    var d = T.d, x = d.tet, c = cat(), h = '<div class="tet">';
    var t = bay(), dem;
    if (t < x.moc) {
      var con = x.moc - t;
      dem = con <= 86400000 ? '<b>Đêm nay giao thừa!</b> 0 giờ có pháo hoa trên nông trại 🎆' : 'Còn <b>' + Math.ceil((con - 86400000) / 86400000) + ' ngày</b> đến đêm giao thừa <span lang="zh">除夕</span> (' + ngayVn(x.tru) + ')';
    } else if (x.gd === 'yx') dem = 'Rằm tháng Giêng <span lang="zh">元宵节</span> ' + ngayVn(x.yx) + ' — đố đèn mở rồi!';
    else dem = 'Năm mới đến rồi! Lễ hội kéo dài đến rằm tháng Giêng <span lang="zh">元宵节</span> (' + ngayVn(x.yx) + ').';
    h += '<div class="tet-dau"><span class="tet-dau-hinh" aria-hidden="true">' + img('tet-denlong') + '</span><div>' +
      '<p class="tet-nam"><b lang="zh">' + esc(x.gc) + '年</b> · năm con ' + esc(x.con.vn) + ' ' + nutZh(x.con.zh, x.con.py, '', 'nho') + '</p>' +
      '<p class="tet-demp">' + dem + '</p>' +
      '<p class="tet-meo">Mùa lễ hội: ' + ngayVn(x.bd) + ' → ' + ngayVn(x.yx) + ' · Tết (mùng 1): ' + ngayVn(x.tet) + (x.thu ? ' · <i>chế độ thử</i>' : '') + '</p></div></div>';
    // on bai don Tet
    h += '<div class="tet-the"><span class="tet-the-hinh" aria-hidden="true">' + img('tet-hongbao') + '</span><div class="tet-the-chu"><b>📚 Ôn bài đón Tết</b>' +
      '<p>' + c.ON.so + ' câu từ bài em đã học · đúng ' + c.ON.can + ' câu nhận ' + xuHtml(c.ON.xu) + ' + ' + c.ON.xp + ' KN (mỗi ngày 1 lần)</p>';
    if (d.on.xong) h += '<p class="tet-xong">✔ Hôm nay em đã nhận quà ôn bài — mai ôn tiếp nhé!</p>';
    else if (d.on.lan >= c.ON.lan) h += '<p class="tet-xong">Hôm nay em đã thử ' + c.ON.lan + ' lần — mai thử lại nhé!</p>';
    else h += '<button type="button" class="nt-nut nt-nut-xanh" data-tet-on>✏️ Ôn ' + c.ON.so + ' câu</button>';
    h += '</div></div>';
    // tien mung tuoi
    h += '<div class="tet-the"><span class="tet-the-hinh" aria-hidden="true">' + img('tet-jinju') + '</span><div class="tet-the-chu"><b>🧧 Tiền mừng tuổi <span lang="zh">压岁钱</span> yāsuìqián</b>';
    if (x.ly.da) h += '<p class="tet-xong">✔ Em đã nhận tiền mừng tuổi năm nay.</p>';
    else if (x.ly.mo) h += '<p>Trưởng làng lì xì em ' + xuHtml(c.LY.xu) + ' + ' + c.LY.xp + ' KN — 1 lần mỗi Tết.</p><div class="tet-ly-o"><button type="button" class="nt-nut nt-nut-xanh" data-tet-ly>🧧 Nhận lì xì</button></div>';
    else h += '<p>Từ mùng 1 Tết (' + ngayVn(x.tet) + ') trưởng làng lì xì mỗi bạn ' + xuHtml(c.LY.xu) + '.</p>';
    h += '</div></div>';
    // do den
    h += '<div class="tet-the"><span class="tet-the-hinh" aria-hidden="true">' + img('tet-dengmi') + '</span><div class="tet-the-chu"><b>🏮 Đố đèn <span lang="zh">猜灯谜</span> cāi dēngmí</b>';
    if (d.me.mo) h += '<p>' + c.DO_SO + ' câu đố chữ Hán · mỗi câu đúng ' + xuHtml(c.DO_XU) + (d.me.dm ? '' : ' · đúng ' + c.DO_CAN + ' câu nhận <b>Đèn Nguyên tiêu</b> 元宵灯') + '</p>' +
      (d.me.xong ? '<p class="tet-xong">✔ Hôm nay em đoán đúng ' + d.me.dung + '/' + c.DO_SO + ' — mai lại có đèn mới!</p>' : '<button type="button" class="nt-nut nt-nut-xanh" data-tet-tab="me">🏮 Đoán đèn</button>');
    else h += '<p>Mở từ ' + ngayVn(x.me0) + ' đến rằm tháng Giêng (' + ngayVn(x.yx) + '): đoán chữ Hán trên đèn lồng, nhận đèn Nguyên tiêu!</p>';
    h += '</div></div>';
    // lien ket nhanh
    h += '<div class="tet-nhanh"><button type="button" class="tet-nhanh-o" data-tet-tab="mua">' + img('tet-chunlian') + '<b>Trang trí Tết</b><small>câu đối, chữ Phúc, đào, mai…</small></button>' +
      '<button type="button" class="tet-nhanh-o" data-tet-tab="bep">' + img('tet-zongzi') + '<b>Bếp Tết</b><small>bánh chưng, sủi cảo, nem</small></button>' +
      '<button type="button" class="tet-nhanh-o" data-tet-tab="lixi">' + img('tet-hongbao') + '<b>Lì xì bạn</b><small>chọn đúng lời chúc 新年祝福</small></button>' +
      '<button type="button" class="tet-nhanh-o" data-tet-tab="tu">' + img('tet-fu') + '<b>Từ vựng Tết</b><small>' + c.TU.length + ' từ + lời chúc</small></button></div>';
    if (t >= x.moc && t - x.moc < 86400000) h += '<div class="nt-hang-nut"><button type="button" class="nt-nut" data-tet-phao>🎆 Xem lại pháo hoa giao thừa</button></div>';
    than.innerHTML = h + '</div>';
    ganTab(than);
    var on = $('[data-tet-on]', than);
    if (on) on.addEventListener('click', function () {
      on.disabled = true;
      N.goi('/api/farm/tet/on/bat', {}).then(function (r) { T.on = { ds: r.ds, i: 0, can: r.can }; N.tieng('mua'); N.veBang(); },
        function (e) { on.disabled = false; N.bao(e.message, 'loi'); });
    });
    var ly = $('.tet-ly-o', than);
    if (ly) ganLy(ly);
    var ph = $('[data-tet-phao]', than);
    if (ph) ph.addEventListener('click', function () { N.dongBang(); moPhao(false); });
  }
  function ganTab(than) {
    $all('[data-tet-tab]', than).forEach(function (b) {
      b.addEventListener('click', function () { var bd = N.bangDang(); if (bd) { bd.tab = b.getAttribute('data-tet-tab'); N.veBang(); } });
    });
  }
  // 3 cau on bai (giong luot cau o cac phan khac cua nong trai)
  function veCauOn(than) {
    var c = T.on, q = c.ds[c.i], khoa = false;
    if (!q) { T.on = null; return veLe(than); }
    var hh = q.hoi || {};
    var html = '<p class="tet-cau-dau">📚 Ôn bài đón Tết · cần đúng ' + c.can + '/' + c.ds.length + '</p>' +
      '<div class="kt-cau"><p class="kt-cau-so">Câu ' + (c.i + 1) + '/' + c.ds.length + ' · <b>' + esc(hh.lenh || '') + '</b></p>';
    if (hh.nghe) html += '<button type="button" class="nt-nghe" data-tet-nghe>🔊 Nghe</button><p class="nt-nghe-tb" data-tet-nghe-tb aria-live="polite"></p>';
    html += N.htmlKt(q, 'tk') + '<div class="kt-cau-kq" aria-live="polite"></div></div>';
    than.innerHTML = html;
    if (hh.nghe) {
      var zh = N.giaiNghe(hh.nghe), tb = $('[data-tet-nghe-tb]', than);
      var hien = function () { tb.innerHTML = 'Máy chưa phát được tiếng — chữ Hán: <b lang="zh">' + esc(zh) + '</b>'; };
      if (N.mayKhongNghe()) hien();
      N.docKiem(zh, function () {});
      $('[data-tet-nghe]', than).addEventListener('click', function () { N.docKiem(zh, function (ok) { if (!ok) hien(); }); });
    }
    N.ganKt(than, q, 'tk', function (body, chon) {
      if (khoa) return;
      khoa = true;
      N.goi('/api/farm/tet/on/tl', body).then(function (r) {
        N.danhDauKt(than, q, r, chon, 'tk');
        N.tieng(r.dung ? 'dung' : 'sai');
        N.docKt(r);
        var kq = $('.kt-cau-kq', than);
        c.i++;
        kq.innerHTML = '<p class="kt-cau-dg ' + (r.dung ? 'dung' : 'sai') + '">' + (r.dung ? '✔ Đúng rồi!' : '✘ Chưa đúng') + '</p>' + N.giaiKt(r, q) +
          '<button type="button" class="nt-nut nt-nut-xanh" data-tet-tiep>' + (r.ket ? 'Xem kết quả →' : 'Câu tiếp →') + '</button>';
        $('[data-tet-tiep]', kq).addEventListener('click', function () {
          if (r.ket) { T.on = null; T.d = null; ketOn(r.ket); return; }
          N.veBang();
        });
        if (r.st) N.nhanTrangThai(r.st);
      }, function (e) { khoa = false; N.moLaiKt(than, q); N.bao(e.message, 'loi'); if (e.status === 400) { T.on = null; T.d = null; tai(); } });
    });
  }
  function ketOn(k) {
    var h = '<div class="nt-chuc tet-ket"><span class="tet-ket-hinh" aria-hidden="true">' + img(k.qua ? 'tet-hongbao' : 'tet-fu') + '</span>';
    if (k.qua) {
      h += '<h2>🧧 Giỏi quá!</h2><p>Đúng ' + k.dung + '/' + k.so + ' — em nhận ' + xuHtml(k.qua.xu) + ' + ' + k.qua.xp + ' KN quà Tết.</p>';
      N.tieng('len'); N.doc('学习进步！');
      if (N.fx && N.fx.mung) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, false);
    } else if (k.dat) h += '<h2>Đúng ' + k.dung + '/' + k.so + '</h2><p>Hôm nay em đã nhận quà rồi — ôn thêm vẫn rất tốt!</p>';
    else h += '<h2>Đúng ' + k.dung + '/' + k.so + '</h2><p>Cần đúng ' + cat().ON.can + ' câu — xem lại bài rồi thử lại nhé (tối đa ' + cat().ON.lan + ' lần / ngày).</p>';
    h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tet-ve>← Lễ hội Tết</button></div></div>';
    N.moBangNho(h);
    var b = $('#ntBangThan [data-tet-ve]');
    if (b) b.addEventListener('click', function () { moBang('le'); });
  }

  /* ---- tab Trang trí ---- */
  function veMua(than) {
    var d = T.d, c = cat(), TT = S.cat.TT, xu = S.st.xu;
    var h = '<div class="tet"><p class="tet-gt">🏮 Đồ trang trí Tết chỉ bán trong mùa lễ hội (đến ' + ngayVn(d.tet.yx) + '). Mua xong chạm ô cỏ trống để đặt; hết Tết đồ vẫn giữ trên nông trại. Mỗi món tối đa ' + c.TT_MAX + ' cái.</p><div class="tet-luoi">';
    d.mua.forEach(function (x) {
      var m = TT[x.k] || {}, du = x.co >= c.TT_MAX, thieu = xu < m.xu;
      h += '<div class="tet-mon' + (du ? ' du' : '') + '">' + img(x.k, 'tet-mon-hinh') + nutZh(m.zh, m.py, m.vn) +
        '<p class="tet-mon-mo">' + esc(m.mo || '') + '</p>' +
        '<p class="tet-mon-phu">Điểm đẹp +' + m.dep + ' · có ' + x.co + '/' + c.TT_MAX + '</p>' +
        '<button type="button" class="nt-nut nt-nut-xanh" data-tet-mua="' + x.k + '"' + (du || thieu ? ' disabled' : '') + '>' + (du ? 'Đủ rồi' : xuHtml(m.xu)) + '</button></div>';
    });
    h += '</div><h3 class="tet-h">🎁 Quà đặc biệt (không bán)</h3><div class="tet-luoi nho">';
    d.quaTt.forEach(function (x) {
      var m = TT[x.k] || {};
      h += '<div class="tet-mon qua">' + img(x.k, 'tet-mon-hinh') + nutZh(m.zh, m.py, m.vn) + '<p class="tet-mon-mo">' + esc(m.mo || '') + '</p>' +
        '<p class="tet-mon-phu">' + (x.co ? '✔ Em đã có ' + x.co : 'Chưa có') + '</p></div>';
    });
    than.innerHTML = h + '</div></div>';
    $all('[data-tet-mua]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-tet-mua');
        b.disabled = true;
        N.goi('/api/farm/tet/mua', { k: k }).then(function (r) {
          if (r.st) N.nhanTrangThai(r.st);
          N.tieng('mua');
          var m = S.cat.TT[k] || {};
          N.doc(m.zh || '');
          N.bao('🏮 Đã mua ' + (m.vn || '') + ' — chạm ô cỏ trống để đặt nhé!');
          T.d = null;
          if (N.batDauDat) N.batDauDat(k, 'dat'); else N.dongBang();
        }, function (e) { b.disabled = false; N.bao(e.message, 'loi'); });
      });
    });
  }

  /* ---- tab Bếp Tết ---- */
  function canHtml(can) {
    var kho = S.st.kho || {};
    return Object.keys(can).map(function (y) {
      var sp = S.cat.SP[y] || {}, co = kho[y] || 0, du = co >= can[y];
      return '<span class="tet-nl' + (du ? '' : ' thieu') + '" title="' + esc(sp.vn || y) + '">' + img('sp-' + y) + '<b>' + co + '/' + can[y] + '</b><small>' + esc(sp.vn || y) + '</small></span>';
    }).join('');
  }
  function duNl(can) { var kho = S.st.kho || {}; return Object.keys(can).every(function (y) { return (kho[y] || 0) >= can[y]; }); }
  function veBep(than) {
    if (T.nau) return veNau(than);
    var d = T.d, c = cat(), b = d.bep, MON = c.MON;
    var h = '<div class="tet"><p class="tet-gt">🥟 Nấu món Tết từ nông sản trong kho (đường mua ở Chợ nông sản). Muốn nấu phải chọn đúng <b>tên tiếng Trung</b> của món. Đủ 4 món thì bày <b lang="zh">年夜饭</b> mâm cơm tất niên!</p>' +
      '<p class="tet-meo">Hôm nay đã nấu ' + b.nau + '/' + c.NAU_NGAY + ' món</p><div class="tet-luoi">';
    Object.keys(MON).forEach(function (k) {
      var m = MON[k], co = b.mon[k] || 0, du = duNl(m.can);
      h += '<div class="tet-mon bep">' + img(k, 'tet-mon-hinh') + '<p class="tet-mon-vn"><b>' + esc(m.vn) + '</b></p>' +
        '<div class="tet-nls">' + canHtml(m.can) + '</div>' +
        '<p class="tet-mon-phu">Đã nấu: <b>' + co + '</b></p>' +
        '<button type="button" class="nt-nut nt-nut-xanh" data-tet-nau="' + k + '"' + (du && b.nau < c.NAU_NGAY ? '' : ' disabled') + '>🍳 Nấu</button></div>';
    });
    h += '</div>';
    var du4 = Object.keys(MON).every(function (k) { return (b.mon[k] || 0) > 0; });
    h += '<div class="tet-the yen"><span class="tet-the-hinh" aria-hidden="true">' + img('tet-mam') + '</span><div class="tet-the-chu"><b>Bày mâm <span lang="zh">年夜饭</span> niányèfàn</b>' +
      '<p>' + (b.yen.da ? 'Mỗi ngày bày 1 lần: +' + xuHtml(c.YEN.xuSau) + ' + ' + c.YEN.xpSau + ' KN.' : 'Lần đầu: nhận <b>Mâm cơm tất niên</b> (đồ trang trí độc quyền) + ' + xuHtml(c.YEN.xu) + ' + ' + c.YEN.xp + ' KN.') + '</p>' +
      (b.yen.homNay ? '<p class="tet-xong">✔ Hôm nay em đã bày mâm cơm Tết.</p>' : '<button type="button" class="nt-nut nt-nut-xanh" data-tet-yen' + (du4 ? '' : ' disabled') + '>🍽 Bày mâm (dùng 1 mỗi món)</button>') +
      '</div></div></div>';
    than.innerHTML = h;
    $all('[data-tet-nau]', than).forEach(function (bt) {
      bt.addEventListener('click', function () { T.nau = { k: bt.getAttribute('data-tet-nau'), lua: tronMon(bt.getAttribute('data-tet-nau')) }; N.veBang(); });
    });
    var y = $('[data-tet-yen]', than);
    if (y) y.addEventListener('click', function () {
      y.disabled = true;
      N.goi('/api/farm/tet/yen', {}).then(function (r) {
        if (r.st) N.nhanTrangThai(r.st);
        N.tieng('len');
        N.doc('年年有余！');
        T.d = null;
        var q = r.qua, hh = '<div class="nt-chuc tet-ket"><span class="tet-ket-hinh" aria-hidden="true">' + img('tet-mam') + '</span><h2>🍽 Mâm cơm tất niên đã bày!</h2>' +
          nutZh('年年有余！', 'Niánnián yǒu yú!', 'Năm nào cũng dư dả!', 'to') + '<p>+' + xuHtml(q.xu) + ' + ' + q.xp + ' KN' + (q.tt ? ' + <b>Mâm cơm tất niên</b> 年夜饭 vào túi đồ — đặt lên nông trại nhé!' : '') + '</p>' +
          '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tet-ve>← Bếp Tết</button></div></div>';
        N.moBangNho(hh);
        ganDoc($('#ntBangThan'));
        if (N.fx && N.fx.mung) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, !!q.tt);
        var bv = $('#ntBangThan [data-tet-ve]');
        if (bv) bv.addEventListener('click', function () { moBang('bep'); });
      }, function (e) { y.disabled = false; N.bao(e.message, 'loi'); });
    });
  }
  function tronMon(k) {
    var a = Object.keys(cat().MON).map(function (x) { return cat().MON[x].zh; });
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function veNau(than) {
    var k = T.nau.k, m = cat().MON[k], khoa = false;
    var h = '<div class="tet tet-nau"><span class="tet-nau-hinh">' + img(k) + '</span><p class="tet-nau-hoi">Món <b>' + esc(m.vn) + '</b> tiếng Trung gọi là gì?</p>' +
      '<div class="tet-lua">' + T.nau.lua.map(function (z) { return '<button type="button" class="tet-lua-o" data-tet-goi="' + esc(z) + '" lang="zh">' + esc(z) + '</button>'; }).join('') + '</div>' +
      '<div class="tet-nau-kq" aria-live="polite"></div><div class="nt-hang-nut"><button type="button" class="nt-nut" data-tet-huy>← Quay lại bếp</button></div></div>';
    than.innerHTML = h;
    $('[data-tet-huy]', than).addEventListener('click', function () { T.nau = null; N.veBang(); });
    $all('[data-tet-goi]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (khoa) return;
        var goi = b.getAttribute('data-tet-goi'), kq = $('.tet-nau-kq', than);
        if (goi !== m.zh) {
          b.classList.add('sai'); b.disabled = true; N.tieng('sai');
          kq.innerHTML = '<p class="tet-sai">Chưa đúng — <span lang="zh">' + esc(goi) + '</span> là món khác. Thử lại nhé!</p>';
          return;
        }
        khoa = true;
        N.goi('/api/farm/tet/nau', { k: k, goi: goi }).then(function (r) {
          if (r.st) N.nhanTrangThai(r.st);
          b.classList.add('dung');
          N.tieng('dung');
          N.doc(m.zh);
          kq.innerHTML = '<p class="tet-dung">✔ ' + nutZh(m.zh, m.py, m.vn, 'nho') + ' nấu xong! +' + r.xp + ' KN' + (r.moi ? ' (món mới!)' : '') + '</p><p class="tet-y">💡 ' + esc(m.y) + '</p>' +
            '<button type="button" class="nt-nut nt-nut-xanh" data-tet-xong>Xong →</button>';
          ganDoc(kq);
          $('[data-tet-xong]', kq).addEventListener('click', function () { T.nau = null; T.d = null; N.veBang(); });
        }, function (e) { khoa = false; N.bao(e.message, 'loi'); });
      });
    });
  }

  /* ---- tab Lì xì ---- */
  function veLixi(than) {
    if (T.lxKq) return veLxKq(than);
    if (T.lx && T.lx.tinh) return veLxHoi(than);
    var d = T.d, c = cat(), L = d.lx, chon = T.lx || {};
    var h = '<div class="tet"><p class="tet-gt">🧧 Mỗi ngày em gửi được <b>' + c.LX_NGAY + ' bao lì xì</b> cho bạn cùng lớp (mỗi bạn 1 bao). Muốn gửi phải chọn đúng <b>lời chúc Tết</b> <span lang="zh">新年祝福</span> hợp với hoàn cảnh của bạn. Xu trong bao là xu của em.</p>';
    if (!L.lop) h += '<p class="nt-trong">Em chưa ở lớp nào — vào lớp của thầy cô để lì xì bạn cùng lớp nhé.</p>';
    else {
      h += '<p class="tet-meo">Lớp <b>' + esc(L.lop) + '</b> · hôm nay đã gửi ' + L.gui + '/' + c.LX_NGAY + ' bao · em có ' + xuHtml(S.st.xu) + '</p>';
      h += '<h3 class="tet-h">1. Số xu trong bao</h3><div class="tet-xu-chon">' + c.LX_XU.map(function (n) {
        return '<button type="button" class="tet-bao' + (chon.xu === n ? ' chon' : '') + '" data-tet-xu="' + n + '"' + (S.st.xu < n ? ' disabled' : '') + '>' + img('tet-hongbao') + '<b>' + n + ' xu</b><small>' + (n === 6 ? '六六大顺' : n === 8 ? '八 = 发' : '要发') + '</small></button>';
      }).join('') + '</div>';
      h += '<h3 class="tet-h">2. Chọn bạn</h3>' + (L.ban.length ? '<div class="tet-ban-ds">' + L.ban.map(function (b) {
        return '<button type="button" class="tet-ban-o' + (chon.den === b.id ? ' chon' : '') + '" data-tet-den="' + esc(b.id) + '"' + (b.da ? ' disabled' : '') + '>' + esc(b.ten) + (b.da ? ' <small>✔ đã lì xì</small>' : '') + '</button>';
      }).join('') + '</div>' : '<p class="nt-trong">Lớp em chưa có bạn nào mở nông trại.</p>');
      var duoc = chon.xu && chon.den && L.gui < c.LX_NGAY;
      h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tet-lx' + (duoc ? '' : ' disabled') + '>🧧 Gói bao lì xì</button></div>';
    }
    // hop li xi da nhan
    h += '<h3 class="tet-h">📬 Lì xì em đã nhận</h3>' + (L.hop.length ? '<ul class="tet-hop">' + L.hop.map(function (e) {
      var cc = c.CHUC[e.c] || c.CHUC.xinnian;
      return '<li class="' + (e.xem ? '' : 'moi') + '">' + img('tet-hongbao') + '<div><p><b>' + esc(e.ten) + '</b> · ' + xuHtml(e.xu) + '</p>' + nutZh(cc.zh, cc.py, cc.vn, 'nho') + '</div></li>';
    }).join('') + '</ul>' : '<p class="tet-meo">Chưa có bao lì xì nào — lì xì bạn trước, biết đâu bạn lì xì lại!</p>');
    than.innerHTML = h + '</div>';
    $all('[data-tet-xu]', than).forEach(function (b) { b.addEventListener('click', function () { T.lx = Object.assign(T.lx || {}, { xu: +b.getAttribute('data-tet-xu') }); N.veBang(); }); });
    $all('[data-tet-den]', than).forEach(function (b) { b.addEventListener('click', function () { T.lx = Object.assign(T.lx || {}, { den: b.getAttribute('data-tet-den') }); N.veBang(); }); });
    var g = $('[data-tet-lx]', than);
    if (g) g.addEventListener('click', function () {
      g.disabled = true;
      N.goi('/api/farm/tet/lx/bat', { den: T.lx.den, xu: T.lx.xu }).then(function (r) {
        T.lx = { den: r.den, ten: r.ten, xu: r.xu, tinh: r.tinh, lua: r.lua };
        N.tieng('mua');
        N.veBang();
      }, function (e) { g.disabled = false; N.bao(e.message, 'loi'); });
    });
    if (L.hop.some(function (e) { return !e.xem; })) N.goi('/api/farm/tet/lx/xem', {}).then(function (r) { T.baoLx = 0; if (r.st) N.nhanTrangThai(r.st); }, function () {});
  }
  function veLxHoi(than) {
    var x = T.lx, C = cat().CHUC, khoa = false;
    var h = '<div class="tet tet-lxh"><div class="tet-lxh-dau">' + img('tet-hongbao') + '<p>Bao lì xì <b>' + x.xu + ' xu</b> cho <b>' + esc(x.ten) + '</b></p></div>' +
      '<p class="tet-tinh">💬 ' + esc(x.tinh) + '</p><p class="tet-nau-hoi">Em chúc bạn câu nào cho hợp?</p><div class="tet-lua doc">' +
      x.lua.map(function (k) { var c = C[k]; return '<button type="button" class="tet-lua-o" data-tet-chuc="' + k + '"><b lang="zh">' + esc(c.zh) + '</b><span>' + esc(c.py) + '</span></button>'; }).join('') +
      '</div><p class="tet-meo">Chưa chắc? Xem tab 📖 Từ vựng — có nghĩa của từng lời chúc.</p><div class="nt-hang-nut"><button type="button" class="nt-nut" data-tet-huy>Huỷ</button></div></div>';
    than.innerHTML = h;
    $('[data-tet-huy]', than).addEventListener('click', function () { T.lx = { xu: x.xu }; N.veBang(); });
    $all('[data-tet-chuc]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (khoa) return;
        khoa = true;
        var k = b.getAttribute('data-tet-chuc');
        N.doc(C[k].zh);
        N.goi('/api/farm/tet/lx/gui', { c: k }).then(function (r) {
          if (r.st) N.nhanTrangThai(r.st);
          T.lxKq = Object.assign({ ten: x.ten, chonK: k }, r);
          T.lx = { xu: x.xu };
          T.d = null;
          N.tieng(r.dung && !r.day ? 'xu' : r.dung ? 'mua' : 'sai');
          N.veBang();
        }, function (e) { khoa = false; N.bao(e.message, 'loi'); T.lx = { xu: x.xu }; T.d = null; N.veBang(); });
      });
    });
  }
  function veLxKq(than) {
    var r = T.lxKq, C = cat().CHUC, c = r.chuc || C[r.dap], h = '<div class="nt-chuc tet-ket">';
    if (r.dung && !r.day) {
      h += '<span class="tet-ket-hinh bay" aria-hidden="true">' + img('tet-hongbao') + '</span><h2>🧧 Đã gửi lì xì cho ' + esc(r.ten) + '!</h2>' + nutZh(c.zh, c.py, c.vn, 'to') +
        '<p>' + xuHtml(r.xu) + ' đã vào bao · +' + r.xp + ' KN · hôm nay còn ' + r.con + ' bao.</p>';
      setTimeout(function () { N.doc(c.zh); }, 300);
      if (N.fx && N.fx.mung) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, false);
    } else if (r.dung) {
      h += '<h2>Lời chúc đúng rồi!</h2>' + nutZh(c.zh, c.py, c.vn, 'to') + '<p>' + esc(r.loi || '') + '</p>';
    } else {
      var sai = C[r.chon];
      h += '<h2>Chưa hợp lắm 🙂</h2>' + (sai ? '<p>Em chọn ' + nutZh(sai.zh, sai.py, sai.vn, 'nho') + '</p>' : '') +
        '<p>Hoàn cảnh này nên chúc:</p>' + nutZh(c.zh, c.py, c.vn, 'to') + '<p class="tet-meo">Bao lì xì chưa gửi, em chưa mất xu — gói lại và thử tình huống khác nhé!</p>';
    }
    h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tet-ve>← Lì xì</button></div></div>';
    than.innerHTML = h;
    ganDoc(than);
    $('[data-tet-ve]', than).addEventListener('click', function () { T.lxKq = null; N.veBang(); });
  }

  /* ---- tab Từ vựng ---- */
  function veTu(than) {
    var c = cat();
    var h = '<div class="tet"><p class="tet-gt">📖 ' + c.TU.length + ' từ Tết — bấm vào thẻ để nghe đọc, bấm câu ví dụ để nghe cả câu.</p><div class="tet-tu-luoi">' + c.TU.map(function (t) {
      return '<div class="tet-tu">' + img(t.h, 'tet-tu-hinh') + nutZh(t.zh, t.py, t.vn, 'to') +
        '<button type="button" class="tet-vd" data-tet-doc="' + esc(t.vd.zh) + '"><b lang="zh">' + esc(t.vd.zh) + '</b><span>' + esc(t.vd.py) + '</span><small>' + esc(t.vd.vn) + '</small></button></div>';
    }).join('') + '</div><h3 class="tet-h">🧧 Lời chúc Tết <span lang="zh">新年祝福</span></h3><div class="tet-chuc-luoi">' +
      Object.keys(c.CHUC).map(function (k) { var x = c.CHUC[k]; return nutZh(x.zh, x.py, x.vn); }).join('') + '</div></div>';
    than.innerHTML = h;
  }

  /* ---- tab Đố đèn 猜灯谜 ---- */
  function veMe(than) {
    var d = T.d, c = cat();
    if (T.meKet) return veMeKet(than);
    if (T.me) return veMeCau(than);
    var h = '<div class="tet tet-me"><span class="tet-me-hinh">' + img('tet-dengmi') + '</span><p class="tet-gt">🏮 Rằm tháng Giêng <span lang="zh">元宵节</span> người ta treo đèn lồng có viết câu đố — <b lang="zh">猜灯谜</b> cāi dēngmí (đoán câu đố đèn). Mỗi ngày ' + c.DO_SO + ' câu, mỗi câu đúng ' + xuHtml(c.DO_XU) + '.</p>';
    if (!d.me.mo) h += '<p class="nt-trong">Đố đèn mở từ ' + ngayVn(d.tet.me0) + ' đến ' + ngayVn(d.tet.yx) + '.</p>';
    else if (d.me.xong) h += '<p class="tet-xong">✔ Hôm nay em đoán đúng ' + d.me.dung + '/' + c.DO_SO + '. Mai lại có đèn mới!</p>';
    else h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tet-me>🏮 ' + (d.me.dang ? 'Đoán tiếp' : 'Đoán đèn') + '</button></div>';
    than.innerHTML = h + '</div>';
    var b = $('[data-tet-me]', than);
    if (b) b.addEventListener('click', function () {
      b.disabled = true;
      N.goi('/api/farm/tet/me/bat', {}).then(function (r) { T.me = { ds: r.ds, i: r.da }; N.tieng('mua'); N.veBang(); },
        function (e) { b.disabled = false; N.bao(e.message, 'loi'); });
    });
  }
  function veMeCau(than) {
    var m = T.me, q = m.ds[m.i], khoa = false;
    if (!q) { T.me = null; return veMe(than); }
    var h = '<div class="tet tet-me"><p class="tet-cau-dau">🏮 Đèn ' + (m.i + 1) + '/' + m.ds.length + (q.hoc ? ' · <span class="tet-hoc">từ trong bài em đã học</span>' : '') + '</p>' +
      '<div class="tet-den"><span class="tet-den-moc" aria-hidden="true"></span><button type="button" class="tet-den-giay" data-tet-doc="' + esc(q.cau) + '"><b lang="zh">' + esc(q.cau) + '</b><span>' + esc(q.py) + '</span><em aria-hidden="true">🔊</em></button>' +
      '<p class="tet-den-loai">' + esc(q.loai) + '</p></div><div class="tet-lua">' +
      q.lua.map(function (l, j) { return '<button type="button" class="tet-lua-o" data-tet-dap="' + j + '" lang="zh">' + esc(l) + '</button>'; }).join('') +
      '</div><div class="tet-nau-kq" aria-live="polite"></div></div>';
    than.innerHTML = h;
    ganDoc(than);
    $all('[data-tet-dap]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (khoa) return;
        khoa = true;
        var i = +b.getAttribute('data-tet-dap');
        N.goi('/api/farm/tet/me/tl', { i: i }).then(function (r) {
          $all('[data-tet-dap]', than).forEach(function (x, j) { x.disabled = true; x.classList.add(j === r.dap ? 'dung' : j === i ? 'sai' : 'mo'); });
          N.tieng(r.dung ? 'dung' : 'sai');
          N.doc(r.chu);
          m.i++;
          var kq = $('.tet-nau-kq', than);
          kq.innerHTML = '<p class="' + (r.dung ? 'tet-dung' : 'tet-sai') + '">' + (r.dung ? '✔ Đúng rồi!' : '✘ Đáp án là <b lang="zh">' + esc(r.chu) + '</b>') + '</p><p class="tet-y">💡 ' + esc(r.giai) + '</p>' +
            '<button type="button" class="nt-nut nt-nut-xanh" data-tet-tiep>' + (r.ket ? 'Xem kết quả →' : 'Đèn tiếp →') + '</button>';
          if (r.st) N.nhanTrangThai(r.st);
          $('[data-tet-tiep]', kq).addEventListener('click', function () {
            if (r.ket) { T.me = null; T.meKet = r.ket; T.d = null; }
            N.veBang();
          });
        }, function (e) { khoa = false; N.bao(e.message, 'loi'); if (e.status === 400) { T.me = null; T.d = null; tai(); } });
      });
    });
  }
  function veMeKet(than) {
    var k = T.meKet, h = '<div class="nt-chuc tet-ket"><span class="tet-ket-hinh" aria-hidden="true">' + img(k.qua.tt || 'tet-dengmi') + '</span>' +
      '<h2>🏮 Đoán đúng ' + k.dung + '/' + k.so + ' đèn!</h2><p>+' + xuHtml(k.qua.xu) + (k.qua.tt ? ' + <b>Đèn Nguyên tiêu</b> <span lang="zh">元宵灯</span> vào túi đồ — đặt lên nông trại nhé!' : '') + '</p>' +
      nutZh('元宵节快乐！', 'Yuánxiāo jié kuàilè!', 'Rằm tháng Giêng vui vẻ!', 'to') +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tet-ve>← Lễ hội Tết</button></div></div>';
    than.innerHTML = h;
    if (k.dung >= 3) { N.tieng('len'); if (N.fx && N.fx.mung) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, !!k.qua.tt); }
    $('[data-tet-ve]', than).addEventListener('click', function () { T.meKet = null; var bd = N.bangDang(); if (bd) bd.tab = 'le'; N.veBang(); });
  }

  // bong noi khi cham vao do trang tri Tet: giai thich (vd. chu Phuc dan nguoc)
  N.sauNoi.push(function (o) {
    if (!o || !/^tet-/.test(o.k || '')) return;
    var m = S.cat && S.cat.TT[o.k];
    if (!m || !m.mo) return;
    var noi = $('#ntNoi');
    noi.insertAdjacentHTML('beforeend', '<p class="nt-noi-phu tet-noi">🧧 ' + esc(m.mo) + '</p>');
    N.datViTriNoi();
  });

  if (S.st) apDung();
})();
