/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Dap nguoi tuyet 堆雪人 duī xuěrén + bong tuyet lap lanh 雪花 xuěhuā (2026-11-18).
   May chu (nong-trai-noel-tuyet.js) gioi han so bong nhat moi ngay va gia bo phan; o day chi ve:
   - bong tuyet lap lanh thinh thoang hien tren nong trai cua em (toi da 1 bong 1 luc), cham de nhat
   - nguoi tuyet 'noel-tuyetnhan' tren nong trai: hinh than (anh) + SVG bo phan phu len (o.sn), du 7 bo phan thi lap lanh
   - bang 'noel-tuyet': dap nguoi tuyet moi, gan tung bo phan (chu Han + pinyin + nghia, doc to)
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, S = N.S;
  var V = '#2b1d3a';
  function cat() { return (S.cat && S.cat.NTUYET) || null; }
  function mua() { var n = S.st && S.st.kt && S.st.kt.noel; return !!(n && n.mua && cat()); }
  function tt() { return (S.st && S.st.kt && S.st.kt.noelTuyet) || { n: 0, con: 0, sau: 0, nguoi: 0, tui: 0 }; }
  function giam() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function K() { var c = cat(); return c ? c.K : 'noel-tuyetnhan'; }
  function soSn(sn) { var c = cat(); return !sn || !c ? 0 : c.SN_THU_TU.filter(function (k) { return sn[k]; }).length; }
  function bongIc() { return '<img class="nsn-ic" src="' + N.anh('noel-tuyet') + '" alt="" draggable="false">'; }

  /* ---------------- SVG bo phan nguoi tuyet (viewBox 100x100 = noel-tuyetnhan.svg) ---------------- */
  var PHAN = {
    tay: '<g stroke-linecap="round" fill="none"><path d="M37 46L19 34M23.5 37L21 30M23.5 37L16 38M63 46L81 34M76.5 37L79 30M76.5 37L84 38" stroke="' + V + '" stroke-width="4.6"/>' +
      '<path d="M37 46L19 34M23.5 37L21 30M23.5 37L16 38M63 46L81 34M76.5 37L79 30M76.5 37L84 38" stroke="#8a5530" stroke-width="2.2"/></g>',
    dau: '<circle cx="50" cy="23" r="10.5" fill="#fbfdff" stroke="' + V + '" stroke-width="3"/><path d="M43 18.5Q45 15 49 14.5" fill="none" stroke="#cfe3f5" stroke-width="2.2" stroke-linecap="round"/>',
    khan: '<path d="M38.5 31Q50 37.5 61.5 31L62 36Q50 42.5 38 36Z" fill="#e53935" stroke="' + V + '" stroke-width="2.2" stroke-linejoin="round"/>' +
      '<path d="M44 34.2L45 39M50 35.5V40.5M56 34.2L55 39" stroke="#fff" stroke-width="1.6" opacity=".85"/>' +
      '<path d="M54.5 36.5L57.5 51L63 49.5L59.5 35.5Z" fill="#e53935" stroke="' + V + '" stroke-width="2.2" stroke-linejoin="round"/><path d="M56 41.5L60.5 40.2M57 46L61.6 44.8" stroke="#fff" stroke-width="1.6" opacity=".85"/>',
    mat: '<circle cx="45.6" cy="20.6" r="1.8" fill="' + V + '"/><circle cx="54.4" cy="20.6" r="1.8" fill="' + V + '"/><circle cx="45" cy="19.9" r=".55" fill="#fff"/><circle cx="53.8" cy="19.9" r=".55" fill="#fff"/>' +
      '<g fill="' + V + '"><circle cx="45.4" cy="28.2" r=".95"/><circle cx="47.7" cy="29.6" r=".95"/><circle cx="50.3" cy="30" r=".95"/><circle cx="52.8" cy="29.3" r=".95"/></g>' +
      '<circle cx="42.6" cy="25.4" r="1.7" fill="#ff8a80" opacity=".7"/><circle cx="57.4" cy="25.4" r="1.7" fill="#ff8a80" opacity=".7"/>',
    mui: '<path d="M50.5 23.6L63 26.4L50.5 27.8Z" fill="#ff8a3d" stroke="' + V + '" stroke-width="1.5" stroke-linejoin="round"/><path d="M54 24.8L54.6 26.9M57.6 25.6L58 26.8" stroke="#c45a14" stroke-width="1"/>',
    mu: '<g stroke="' + V + '" stroke-width="2.4" stroke-linejoin="round"><rect x="41" y="-1.5" width="18" height="14" rx="1.6" fill="#3a2f4a"/><rect x="41" y="7.6" width="18" height="3.6" fill="#e53935"/>' +
      '<rect x="36.5" y="11" width="27" height="4.2" rx="2.1" fill="#3a2f4a"/></g><path d="M56.5 7Q60 4 62 7Q59 9 56.5 7Z" fill="#2f9e5c" stroke="' + V + '" stroke-width="1.1"/><circle cx="56.3" cy="9" r="1.5" fill="#ff3b3b" stroke="' + V + '" stroke-width=".9"/>' +
      '<path d="M43.5 1.5V7" stroke="#6d5f80" stroke-width="1.6" stroke-linecap="round"/>',
    cuc: '<g fill="' + V + '"><circle cx="50" cy="43.5" r="1.9"/><circle cx="50" cy="51" r="1.9"/><circle cx="50" cy="64" r="2.2"/><circle cx="50" cy="73" r="2.2"/></g>',
  };
  var THU_TU_VE = ['tay', 'dau', 'khan', 'mat', 'mui', 'mu', 'cuc'];
  var LAP = [[18, 18], [84, 22], [12, 62], [88, 60], [30, 6], [72, 4]];
  function svgSn(sn) {
    sn = sn || {};
    var c = cat(), du = c && soSn(sn) >= c.SN_THU_TU.length;
    var h = '<svg class="nsn-phan' + (du ? ' du' : '') + '" viewBox="0 0 100 100" aria-hidden="true" focusable="false">';
    THU_TU_VE.forEach(function (k) { if (sn[k]) h += '<g class="nsn-p nsn-p-' + k + '">' + PHAN[k] + '</g>'; });
    if (du) LAP.forEach(function (p, i) {
      var x = p[0], y = p[1], r = 3.4;
      h += '<path class="nsn-lap" style="animation-delay:-' + (i * 0.41).toFixed(2) + 's" d="M' + x + ' ' + (y - r) + 'Q' + x + ' ' + y + ' ' + (x + r) + ' ' + y + 'Q' + x + ' ' + y + ' ' + x + ' ' + (y + r) + 'Q' + x + ' ' + y + ' ' + (x - r) + ' ' + y + 'Q' + x + ' ' + y + ' ' + x + ' ' + (y - r) + 'Z"/>';
    });
    return h + '</svg>';
  }
  N.noelSvgSn = svgSn;
  function veNguoi() {
    var dat = $('#ntDat');
    if (!dat || !cat()) return;
    var els = dat.querySelectorAll('.nt-vat.nt-k-' + K());
    if (!els.length) return;
    var ds = (N.duLieuBanDo() || {}).o || [];
    Array.prototype.forEach.call(els, function (el) {
      var id = +el.getAttribute('data-id');
      var o = ds.filter(function (x) { return x.id === id; })[0];
      var cu = el.querySelector('.nsn-phan');
      if (cu) cu.remove();
      if (!o || !soSn(o.sn)) return;
      (el.querySelector('.nt-dung') || el).insertAdjacentHTML('beforeend', svgSn(o.sn));
    });
  }
  N.sauVe.push(veNguoi);

  /* ---------------- bong noi khi cham nguoi tuyet ---------------- */
  N.sauNoi.push(function (o) {
    if (!o || o.k !== K() || !cat()) return;
    var noi = $('#ntNoi'), c = cat(), sn = o.sn || {}, n = soSn(sn), h;
    if (S.tham) {
      h = '<div class="nsn-noi"><p>⛄ ' + (n ? 'Người tuyết của bạn có ' + n + '/' + c.SN_THU_TU.length + ' bộ phận' : 'Người tuyết chưa có đầu') + '</p></div>';
    } else {
      h = '<div class="nsn-noi"><p>' + (n >= c.SN_THU_TU.length ? '✨ Người tuyết hoàn chỉnh! Điểm đẹp +' + (n + 5) : '⛄ Đã gắn <b>' + n + '/' + c.SN_THU_TU.length + '</b> bộ phận — gắn đầu, mắt, mũi, mũ… bằng bông tuyết ❄') + '</p>' +
        '<button type="button" class="nt-nut nsn-nut" data-nsn-mo>⛄ Đắp người tuyết</button></div>';
    }
    var cat1 = noi.querySelector('[data-cat-tui]');
    if (cat1 && n) cat1.parentNode.innerHTML = 'Nhấn giữ rồi kéo để dời chỗ';
    noi.insertAdjacentHTML('beforeend', h);
    var b = noi.querySelector('[data-nsn-mo]');
    if (b) b.addEventListener('click', function () { N.moBang('noel-tuyet', String(o.id)); });
    N.datViTriNoi();
  });

  /* ---------------- bang dap nguoi tuyet ---------------- */
  function nguoiDat() { return ((S.st && S.st.o) || []).filter(function (x) { return x.k === K(); }); }
  N.dangKy('noel-tuyet', function (than, bang) {
    var c = cat();
    $('#ntBangTit').textContent = '⛄ Đắp người tuyết';
    if (!c) { N.datTab([], ''); than.innerHTML = '<p class="nt-trong">Chưa sẵn sàng.</p>'; return; }
    var ds = nguoiDat(), tab = bang.tab;
    if (!tab || (tab !== 'dap' && !ds.some(function (o) { return String(o.id) === tab; }))) tab = ds.length ? String(ds[0].id) : 'dap';
    bang.tab = tab;
    var tabs = ds.map(function (o, i) { return [String(o.id), '⛄ Người tuyết' + (ds.length > 1 ? ' ' + (i + 1) : '')]; });
    tabs.push(['dap', '❄ Đắp mới']);
    N.datTab(tabs, tab);
    var t = tt(), dau = '<div class="nsn-bong-dem">' + bongIc() + '<span>Em có <b>' + t.n + '</b> bông tuyết <span lang="zh">' + esc(c.BONG.zh) + '</span> <small>' + esc(c.BONG.py) + '</small></span>' +
      '<small class="nsn-con">' + (mua() ? (t.con ? 'Hôm nay còn ' + t.con + ' bông lấp lánh để nhặt trên nông trại' : 'Hôm nay đã nhặt đủ — mai tuyết lại rơi!') : 'Mùa Noel đã qua') + '</small></div>';
    if (tab === 'dap') return veDap(than, c, t, dau, ds);
    var o = ds.filter(function (x) { return String(x.id) === tab; })[0];
    veNguoiBang(than, c, t, dau, o);
  });
  function htmlXem(sn, c) {
    return '<div class="nsn-xem"><div class="nsn-xem-hinh">' + N.img(K(), 'nsn-xem-than') + svgSn(sn) + '</div>' +
      '<button type="button" class="nsn-ten" data-doc="' + esc(c.TEN.zh) + '"><b lang="zh">' + esc(c.TEN.zh) + '</b> ' + esc(c.TEN.py) + ' · ' + esc(c.TEN.vn) + ' 🔊</button></div>';
  }
  function veDap(than, c, t, dau, ds) {
    var du = t.nguoi >= c.TOI_DA, thieu = Math.max(0, c.GIA_DAP - t.n);
    var h = '<div class="nsn-bang">' + htmlXem({}, c) + '<div class="nsn-ben">' + dau +
      '<p class="nsn-gt">Nhặt <b>bông tuyết lấp lánh</b> ❄ thỉnh thoảng hiện trên nông trại (mỗi ngày tối đa ' + c.NHAT_NGAY + ' bông), mở <b>Lịch Noel</b> 📅 và <b>hộp quà ông già Noel</b> 🎁 để có thêm bông tuyết.</p>' +
      (t.tui ? '<div class="nsn-tui">⛄ Em có <b>' + t.tui + '</b> người tuyết trong Túi đồ. <button type="button" class="nt-nut nt-nut-xanh nt-nut-nho" data-nsn-tui>Đặt lên nông trại</button></div>' : '') +
      '<div class="nsn-dap"><span>' + N.img(K(), 'nsn-dap-h') + '<b>Đắp 1 người tuyết</b><small>' + c.GIA_DAP + ' bông tuyết · tối đa ' + c.TOI_DA + ' người tuyết</small></span>' +
      '<button type="button" class="nt-nut nt-nut-vang" data-nsn-dap' + (du || thieu || !mua() ? ' disabled' : '') + '>' + bongIc() + ' ' + c.GIA_DAP + '</button>' +
      (du ? '<small class="nsn-ly">Đã đủ ' + c.TOI_DA + ' người tuyết</small>' : thieu ? '<small class="nsn-ly">Thiếu ' + thieu + ' bông</small>' : '') + '</div>' +
      (ds.length ? '' : '<p class="nt-meo">Đắp xong, người tuyết vào Túi đồ — đặt lên nông trại rồi gắn đầu 头, mắt 眼睛, mũi 鼻子, mũ 帽子, khăn 围巾, tay 手, cúc áo 扣子.</p>') +
      '</div></div>';
    than.innerHTML = h;
    ganChung(than);
    var b = $('[data-nsn-dap]', than);
    if (b) b.addEventListener('click', function () {
      b.disabled = true;
      N.goi('/api/farm/noel/tuyet/dap', {}).then(function (r) {
        if (r.st) N.nhanTrangThai(r.st);
        N.tieng('len');
        N.doc('雪人');
        N.bao('⛄ Đã đắp người tuyết 雪人 xuěrén! Người tuyết đang ở Túi đồ — đặt lên nông trại nhé.');
        if (N.bangDang() && N.bangDang().loai === 'noel-tuyet') N.veBang();
      }, function (e) { b.disabled = false; N.bao(e.message, 'loi'); });
    });
    var tui = $('[data-nsn-tui]', than);
    if (tui) tui.addEventListener('click', function () { N.moBang('kho', 'tui'); });
  }
  function veNguoiBang(than, c, t, dau, o) {
    var sn = o.sn || {}, n = soSn(sn), du = n >= c.SN_THU_TU.length;
    var h = '<div class="nsn-bang">' + htmlXem(sn, c) + '<div class="nsn-ben">' + dau +
      '<div class="nsn-tien"><b>' + (du ? '✨ Hoàn chỉnh!' : '⛄ ' + n + '/' + c.SN_THU_TU.length + ' bộ phận') + '</b><span>Điểm đẹp +' + (n + (du ? 5 : 0)) + '</span><i><u style="width:' + Math.round(n * 100 / c.SN_THU_TU.length) + '%"></u></i></div>' +
      '<div class="nsn-ds">';
    c.SN_THU_TU.forEach(function (k) {
      var m = c.SN[k], co = !!sn[k], khoa = m.can && !sn[m.can], thieu = Math.max(0, m.gia - t.n);
      var ly = co ? '' : !mua() ? 'Hết mùa' : khoa ? 'Gắn ' + c.SN[m.can].vn.toLowerCase() + ' trước' : thieu ? 'Thiếu ' + thieu + ' bông' : '';
      h += '<div class="nsn-mon' + (co ? ' co' : '') + (khoa && !co ? ' khoa' : '') + '"><span class="nsn-mon-ic" aria-hidden="true">' + m.ic + '</span>' +
        '<button type="button" class="nsn-mon-ten" data-doc="' + esc(m.zh) + '"><b lang="zh">' + esc(m.zh) + '</b><span>' + esc(m.py) + '</span><i>' + esc(m.vn) + '</i></button>' +
        '<button type="button" class="nt-mua" data-nsn-p="' + k + '"' + (co || ly ? ' disabled' : '') + '>' + (co ? '✓ Đã gắn' : bongIc() + ' ' + m.gia) + '</button>' +
        (ly ? '<small>' + esc(ly) + '</small>' : '') + '</div>';
    });
    h += '</div><p class="nt-meo">Mỗi bộ phận +1 điểm đẹp, đủ 7 bộ phận +5 nữa và người tuyết lấp lánh ✨. Chạm chữ Hán để nghe đọc.</p></div></div>';
    than.innerHTML = h;
    ganChung(than);
    $all('[data-nsn-p]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-nsn-p'), m = c.SN[k];
        b.disabled = true;
        N.goi('/api/farm/noel/tuyet/phan', { id: o.id, p: k }).then(function (r) {
          if (r.st) N.nhanTrangThai(r.st);
          N.tieng(r.xong ? 'len' : 'mua');
          N.doc(m.zh);
          N.bao(r.xong ? '✨ Người tuyết hoàn chỉnh rồi! 雪人 xuěrén — điểm đẹp +5' : '⛄ Đã gắn ' + m.vn.toLowerCase() + ' ' + m.zh + ' ' + m.py + '!');
          if (N.bangDang() && N.bangDang().loai === 'noel-tuyet') N.veBang();
          var xem = $('.nsn-xem-hinh');
          if (xem) { xem.classList.add('moi'); if (N.fx && N.fx.mung && !giam()) N.fx.mung(xem, r.xong); }
        }, function (e) { b.disabled = false; N.bao(e.message, 'loi'); });
      });
    });
  }
  function ganChung(than) {
    $all('img', than).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    $all('[data-doc]', than).forEach(function (b) { b.addEventListener('click', function () { N.doc(b.getAttribute('data-doc')); }); });
  }

  /* ---------------- bong tuyet lap lanh tren nong trai ---------------- */
  var B = { el: null, x: 0, y: 0, het: 0, cho: 0, dang: false };
  function boBong() { if (B.el) B.el.remove(); B.el = null; }
  function datBong() {
    var dat = $('#ntDat'), d = S.st;
    if (!dat || !d || !d.kich) return false;
    var T = S.o || 48, k = $('#ntKhung');
    // chon o trong phan dat dang thay tren man hinh (khong de len vat)
    var r = dat.getBoundingClientRect(), vx0 = 0, vy0 = 0, vx1 = d.kich.w, vy1 = d.kich.h;
    if (k) {
      var kr = k.getBoundingClientRect(), sx = r.width / (d.kich.w * T) || 1, sy = r.height / (d.kich.h * T) || 1;
      vx0 = Math.max(0, Math.floor((kr.left - r.left) / (T * sx))); vx1 = Math.min(d.kich.w, Math.ceil((kr.right - r.left) / (T * sx)));
      vy0 = Math.max(0, Math.floor((kr.top - r.top) / (T * sy))); vy1 = Math.min(d.kich.h, Math.ceil((Math.min(kr.bottom, innerHeight - 90) - r.top) / (T * sy)));
    }
    if (vx1 - vx0 < 1 || vy1 - vy0 < 1) { vx0 = 0; vy0 = 0; vx1 = d.kich.w; vy1 = d.kich.h; }
    var ung = [];
    for (var y = vy0; y < vy1; y++) for (var x = vx0; x < vx1; x++) if (N.datDuoc(x, y, 1)) ung.push([x, y]);
    if (!ung.length) for (var y2 = vy0; y2 < vy1; y2++) for (var x2 = vx0; x2 < vx1; x2++) ung.push([x2, y2]);
    var p = ung[Math.floor(Math.random() * ung.length)];
    if (!p) return false;
    B.x = p[0]; B.y = p[1];
    return true;
  }
  function veBong() {
    var dat = $('#ntDat');
    if (!dat || !B.el) return;
    var T = S.o || 48;
    B.el.style.left = (B.x * T) + 'px';
    B.el.style.top = (B.y * T) + 'px';
    B.el.style.width = T + 'px';
    B.el.style.height = T + 'px';
    if (B.el.parentNode !== dat) dat.appendChild(B.el);
  }
  function taoBong() {
    if (!datBong()) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'nsn-bong';
    b.setAttribute('aria-label', 'Bông tuyết lấp lánh 雪花 xuěhuā — chạm để nhặt');
    b.innerHTML = '<span class="nsn-bong-dung"><span class="nsn-bong-hao" aria-hidden="true"></span><img src="' + N.anh('noel-tuyet') + '" alt="" draggable="false"><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i></span>';
    ['pointerdown', 'mousedown', 'touchstart'].forEach(function (ev) { b.addEventListener(ev, function (e) { e.stopPropagation(); }, { passive: true }); });
    b.addEventListener('click', function (e) { e.stopPropagation(); nhat(b); });
    B.el = b;
    B.het = Date.now() + 32000;
    veBong();
  }
  function nhat(b) {
    if (B.dang) return;
    B.dang = true;
    b.classList.add('nhat');
    N.goi('/api/farm/noel/tuyet/nhat', {}).then(function (r) {
      B.dang = false;
      if (S.st && S.st.kt) S.st.kt.noelTuyet = r.noelTuyet;
      N.tieng('mua');
      N.doc('雪花');
      if (N.fx && N.fx.chuBay) N.fx.chuBay(b, '+1 ❄');
      N.bao('❄ Nhặt được bông tuyết 雪花 xuěhuā! Em có ' + r.noelTuyet.n + ' bông' + (r.noelTuyet.n >= cat().GIA_DAP && !r.noelTuyet.nguoi ? ' — đủ để đắp người tuyết rồi! ⛄' : '') + '.');
      setTimeout(boBong, giam() ? 0 : 450);
      B.cho = Date.now() + 20000;
      var bang = N.bangDang();
      if (bang && bang.loai === 'noel-tuyet') N.veBang();
      nutThem();
    }, function (e) {
      B.dang = false;
      boBong();
      B.cho = Date.now() + 30000;
      N.bao(e.message, 'loi');
    });
  }
  function nhip() {
    if (!mua() || S.tham || !S.st || document.hidden) { if (B.el && (S.tham || !mua())) boBong(); return; }
    var t = tt(), now = Date.now();
    if (B.el) {
      if (!B.dang && now > B.het) { B.el.classList.add('tan'); var el = B.el; B.el = null; setTimeout(function () { el.remove(); }, 900); B.cho = now + 25000; }
      return;
    }
    if (!t.con || now < B.cho || N.bayGio() < (t.sau || 0)) return;
    taoBong();
  }
  N.nhip.push(nhip);
  N.sauVe.push(function () { if (B.el && !S.tham) veBong(); else if (B.el && S.tham) B.el.remove(); });

  /* ---------------- nut trong bang ⋯ Thêm ---------------- */
  function nutThem() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || !S.st || !S.st.kt) return;
    var b = $('#ntThemNoelTuyet');
    if (!b) {
      b = document.createElement('button');
      b.type = 'button';
      b.className = 'nt-them-o nsn-them';
      b.id = 'ntThemNoelTuyet';
      b.setAttribute('data-mo', 'noel-tuyet');
      b.innerHTML = '<span class="nt-them-emo" aria-hidden="true">⛄</span><span class="nt-muc-chu"><b>Đắp người tuyết <span lang="zh">堆雪人</span></b><small id="ntNsnPhu"></small></span>';
      var sau = $('#ntThemNoelLich');
      luoi.insertBefore(b, sau ? sau.nextSibling : luoi.querySelector('.nt-them-o'));
    }
    var t = tt(), on = mua() || t.nguoi > 0;
    b.hidden = !on;
    var phu = $('#ntNsnPhu');
    if (phu) phu.textContent = '❄ ' + t.n + ' bông tuyết · nhặt trên nông trại';
  }
  N.sau.push(nutThem);
  if (S.st) nutThem();
})();
