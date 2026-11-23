/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — BON MUA 春夏秋冬 (2026-11-23)
   · Moi tuan that (thu Hai) nong trai doi mua: 春 xuân → 夏 hạ → 秋 thu → 冬 đông (ca truong cung mua; mua Noel = 冬).
   · Chip mua tren thanh tren (chu Han to + pinyin + tieng Viet) → bang Bon mua: cay dung mua 当季 (lon nhanh,
     ban gia cao), cay trai mua 反季 (lon cham), tu vung thoi tiet 天气 (bam de nghe), Thu thach mua (5 cau tu bai
     em da hoc → do trang tri mua doc quyen).
   · Lop canh mua nhe tren nong trai: canh hoa roi (xuan), nang + dom sang (ha), la roi (thu), tuyet nhe (dong).
     Chi transform / opacity; TAT khi body.nt-nhe, prefers-reduced-motion, dang mo bang, o thi tran, co thien tai,
     va mua dong trong mua Noel (da co tuyet Noel).
   · Nhan 当季 / 反季 trong bang gieo hat (NTX.nhanHat) va trong Kho (the nong san).
   May chu: nong-trai-bonmua.js (st.kt.bonmua, cat.BONMUA, /api/farm/bonmua, /bonmua/bat, /bonmua/tl).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$, $all = N.$all, esc = N.esc, img = N.img;
  var B = { d: null, chay: null, ket: null, tai: false };

  function C() { return S.cat && S.cat.BONMUA; }
  function st() { return S.st && S.st.kt && S.st.kt.bonmua; }
  function muaK(k) { var c = C(); if (!c) return null; for (var i = 0; i < c.MUA.length; i++) if (c.MUA[i].k === k) return c.MUA[i]; return null; }
  function muaNay() { var b = st(); return b ? muaK(b.k) : null; }
  function ttMua(k) { return (S.cat.TT && S.cat.TT[k]) || { zh: '', py: '', vn: '' }; }
  function phanTram(x) { return Math.round(Math.abs(1 - x) * 100); }
  function conLai(het) {
    var ms = Math.max(0, het - Date.now()), ngay = Math.floor(ms / 86400000), gio = Math.floor(ms % 86400000 / 3600000);
    return ngay > 0 ? ngay + ' ngày ' + gio + ' giờ' : gio > 0 ? gio + ' giờ' : Math.max(1, Math.ceil(ms / 60000)) + ' phút';
  }
  function nutTu(t, cls) {
    return '<button type="button" class="bm-tu' + (cls ? ' ' + cls : '') + '" data-bm-doc="' + esc(t.zh) + '"><b lang="zh">' + esc(t.zh) + '</b>' +
      '<span lang="zh-Latn">' + esc(t.py) + '</span><small>' + esc(t.vn) + '</small><em aria-hidden="true">🔊</em></button>';
  }

  /* ---------------- chip mua tren thanh tren ---------------- */
  function veChip() {
    var m = muaNay(), hud = $('.nt-hud'), chip = $('#ntBmChip');
    if (!m || !hud) { if (chip) chip.remove(); return; }
    if (!chip) {
      chip = document.createElement('button');
      chip.type = 'button';
      chip.id = 'ntBmChip';
      chip.className = 'nt-chip nt-bm-chip';
      chip.addEventListener('click', function () { if (S.tham && N.veNha) N.veNha(); B.d = null; N.moBang('bonmua', 'mua'); });
      hud.insertBefore(chip, hud.firstChild);
    }
    var b = st();
    var h = '<span class="bm-chip-chu" lang="zh" aria-hidden="true">' + esc(m.zh) + '</span><span class="bm-chip-ten"><b lang="zh-Latn">' + esc(m.py) + '</b><small>' + esc(m.vn) + '</small></span>' +
      (b && !b.xong && b.con > 0 ? '<i class="bm-chip-cham" aria-hidden="true"></i>' : '');
    if (chip.getAttribute('data-h') !== h) { chip.innerHTML = h; chip.setAttribute('data-h', h); }
    chip.setAttribute('data-mua', m.k);
    chip.setAttribute('aria-label', 'Mùa ' + m.vn + ' ' + m.zh + ' ' + m.py + ' — xem cây đúng mùa, từ vựng thời tiết, Thử thách mùa');
  }

  /* ---------------- lop canh mua (hinh ve tay nho, it phan tu) ---------------- */
  var HINH = {
    xuan: function (i) {
      var mau = ['#ffc1d6', '#ffb0cb', '#ffd9e5'][i % 3];
      return '<svg viewBox="0 0 20 20"><path d="M10 2Q17 8 11.5 17.5Q10 18.6 8.5 17.5Q3 8 10 2Z" fill="' + mau + '" stroke="#2b1d3a" stroke-width="1.3" stroke-linejoin="round"/><path d="M10 6Q11 11 10 15" fill="none" stroke="#f48fb1" stroke-width="1.2" stroke-linecap="round"/></svg>';
    },
    thu: function (i) {
      var mau = ['#ef6c00', '#d84315', '#ffb300', '#c62828'][i % 4];
      return i % 2
        ? '<svg viewBox="0 0 24 24"><path d="M12 2l2.4 5 3-2-.6 4.6 4.6.4-3.6 3 2.2 3.6-4.6-1L14.6 21 12 17.6 9.4 21l-.8-4.4-4.6 1 2.2-3.6-3.6-3 4.6-.4L6.6 5l3 2z" fill="' + mau + '" stroke="#2b1d3a" stroke-width="1.3" stroke-linejoin="round"/><path d="M12 8V22" stroke="#2b1d3a" stroke-width="1.2" stroke-linecap="round"/></svg>'
        : '<svg viewBox="0 0 20 24"><path d="M10 2Q19 9 11 20Q10 21 9 20Q1 9 10 2Z" fill="' + mau + '" stroke="#2b1d3a" stroke-width="1.3" stroke-linejoin="round"/><path d="M10 6V23" stroke="#2b1d3a" stroke-width="1.2" stroke-linecap="round"/></svg>';
    },
    dong: function () { return '<svg viewBox="0 0 12 12"><circle cx="6" cy="6" r="4.4" fill="#fff" stroke="#7aa6d6" stroke-width="1.2"/></svg>'; },
  };
  function htmlLop(k) {
    var h = '', i;
    if (k === 'ha') {
      h += '<span class="bm-nang"><svg viewBox="0 0 200 200"><defs><radialGradient id="bmNangG"><stop offset="0" stop-color="#fff8c4" stop-opacity=".95"/><stop offset=".35" stop-color="#ffe082" stop-opacity=".55"/><stop offset="1" stop-color="#ffe082" stop-opacity="0"/></radialGradient></defs>' +
        '<circle cx="100" cy="100" r="98" fill="url(#bmNangG)"/></svg></span>' +
        '<span class="bm-tia"><svg viewBox="0 0 200 200"><g fill="#fff3b0" opacity=".55"><path d="M100 100L92 0H108Z"/><path d="M100 100L200 92V108Z"/><path d="M100 100L108 200H92Z"/><path d="M100 100L0 108V92Z"/><path d="M100 100L165 26L174 35Z"/><path d="M100 100L174 165L165 174Z"/><path d="M100 100L35 174L26 165Z"/><path d="M100 100L26 35L35 26Z"/></g></svg></span>';
      for (i = 0; i < 7; i++) {
        h += '<i class="bm-dom" style="left:' + (8 + (i * 29) % 84) + '%;top:' + (34 + (i * 41) % 52) + '%;animation-duration:' + (6 + (i % 3) * 1.6).toFixed(1) + 's;animation-delay:-' + (i * 1.3).toFixed(1) + 's"></i>';
      }
      return h;
    }
    var so = k === 'dong' ? 16 : k === 'thu' ? 9 : 10;
    for (i = 0; i < so; i++) {
      var to = k === 'dong' ? 6 + (i * 5) % 6 : k === 'thu' ? 16 + (i * 7) % 8 : 12 + (i * 5) % 6;
      h += '<i class="bm-hat" style="left:' + ((i * 37 + 5) % 96) + '%;width:' + to + 'px;height:' + to + 'px;--lac:' + (12 + (i * 7) % 26) + 'px;' +
        'animation-duration:' + (k === 'dong' ? 11 + (i * 3) % 8 : 13 + (i * 5) % 9) + 's;animation-delay:-' + ((i * 2.3) % 18).toFixed(1) + 's">' +
        '<b style="animation-duration:' + (2.8 + (i % 4) * 0.7).toFixed(1) + 's;animation-delay:-' + (i % 3) + 's">' + HINH[k](i) + '</b></i>';
    }
    return h;
  }
  function veLop() {
    var m = muaNay(), lop = $('#ntBmLop');
    if (!m) { if (lop) lop.remove(); return; }
    document.body.setAttribute('data-mua', m.k);
    if (!lop) {
      lop = document.createElement('div');
      lop.id = 'ntBmLop';
      lop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(lop);
    }
    if (lop.getAttribute('data-k') === m.k) return;
    lop.setAttribute('data-k', m.k);
    lop.className = 'nt-bm-lop bm-' + m.k;
    lop.innerHTML = htmlLop(m.k);
  }

  /* ---------------- nhan 当季 / 反季 ---------------- */
  function kieuCay(k) {
    var m = muaNay();
    if (!m) return '';
    return m.dang.indexOf(k) >= 0 ? 'dang' : m.trai.indexOf(k) >= 0 ? 'trai' : '';
  }
  N.nhanHat = N.nhanHat || [];
  N.nhanHat.push(function (k) {
    var kieu = kieuCay(k), c = C();
    if (!kieu) return '';
    return kieu === 'dang'
      ? '<span class="bm-nhan dang" title="Cây đúng mùa: lớn nhanh hơn ' + phanTram(c.HS.nhanh) + '%, bán cho cửa hàng giá cao hơn ' + phanTram(c.HS.ban) + '%">' + muaNay().ic + ' <span lang="zh">当季</span> ⚡</span>'
      : '<span class="bm-nhan trai" title="Cây trái mùa: lớn chậm hơn ' + phanTram(c.HS.cham) + '%">🥀 <span lang="zh">反季</span> 🐢</span>';
  });
  // Kho: the nong san dung mua -> nhan "当季 +15%"
  N.sauBang.push(function (bd) {
    if (!bd || bd.loai !== 'kho' || !C()) return;
    var than = $('#ntBangThan'), xong = {};
    $all('[data-ban]', than).forEach(function (b) {
      var k = b.getAttribute('data-ban');
      if (xong[k] || kieuCay(k) !== 'dang') return;
      xong[k] = 1;
      var the = b.closest('.nt-the'), phu = the && the.querySelector('.nt-the-phu');
      if (phu) phu.insertAdjacentHTML('beforeend', '<span class="bm-nhan dang">' + muaNay().ic + ' <span lang="zh">当季</span> bán +' + phanTram(C().HS.ban) + '%</span>');
    });
  });

  /* ---------------- bang Bon mua ---------------- */
  function tai() {
    if (B.tai) return;
    B.tai = true;
    N.goi('/api/farm/bonmua').then(function (r) { B.tai = false; B.d = r; var bd = N.bangDang(); if (bd && bd.loai === 'bonmua') N.veBang(); },
      function (e) { B.tai = false; N.bao(e.message, 'loi'); });
  }
  function htmlCay(k, kieu) {
    var c = S.cat.CAY[k], hs = C().HS;
    if (!c) return '';
    var khoa = c.lv > S.st.lv;
    return '<button type="button" class="bm-cay ' + kieu + (khoa ? ' khoa' : '') + '" data-bm-doc="' + esc(c.zh) + '">' + img('sp-' + k) +
      '<b lang="zh">' + esc(c.zh) + '</b><span lang="zh-Latn">' + esc(c.py) + '</span><small>' + esc(c.vn) + '</small>' +
      '<em>' + (kieu === 'dang' ? '⏱ −' + phanTram(hs.nhanh) + '% · ' + img('ic-xu') + ' +' + phanTram(hs.ban) + '%' : '⏱ +' + phanTram(hs.cham) + '%') + '</em>' +
      (khoa ? '<i class="bm-cay-khoa">Cấp ' + c.lv + '</i>' : '') + '</button>';
  }
  function veMua(than) {
    var c = C(), b = B.d || st(), m = muaK(b.k), sau = muaK(b.sau);
    var h = '<div class="bm bm-' + m.k + '">';
    h += '<div class="bm-dau"><button type="button" class="bm-dau-chu" data-bm-doc="' + esc(m.ten.zh) + '" aria-label="Nghe ' + esc(m.ten.zh) + '"><span lang="zh">' + esc(m.zh) + '</span></button>' +
      '<div class="bm-dau-ten"><b><span lang="zh">' + esc(m.ten.zh) + '</span> <span lang="zh-Latn">' + esc(m.ten.py) + '</span></b><span>' + esc(m.ten.vn) + '</span>' +
      '<small>Còn ' + conLai(b.het) + ' · tuần sau: <span lang="zh">' + esc(sau.zh) + '</span> ' + esc(sau.py) + ' ' + esc(sau.vn) + '</small></div></div>';
    if (b.noel) h += '<p class="bm-noel">🎄 Đang mùa Noel nên nông trại ở mùa đông <span lang="zh">冬天</span>. Hết mùa Noel, bốn mùa lại xoay vòng mỗi tuần.</p>';
    h += '<p class="bm-gt">Mỗi tuần (thứ Hai) nông trại đổi mùa: <span lang="zh">春 → 夏 → 秋 → 冬</span>. Cả trường cùng một mùa.</p>';
    h += '<h3 class="bm-h">' + m.ic + ' Cây đúng mùa <span lang="zh">当季</span> <small>dāngjì · lớn nhanh hơn, bán cửa hàng giá cao hơn</small></h3>' +
      '<div class="bm-luoi">' + m.dang.map(function (k) { return htmlCay(k, 'dang'); }).join('') + '</div>';
    if (m.trai.length) h += '<h3 class="bm-h">🥀 Cây trái mùa <span lang="zh">反季</span> <small>fǎnjì · lớn chậm hơn</small></h3>' +
      '<div class="bm-luoi">' + m.trai.map(function (k) { return htmlCay(k, 'trai'); }).join('') + '</div>';
    h += '<p class="bm-meo">💡 Thời gian lớn tính lúc gieo hạt; giá bán tính lúc bán. Cây quý và cây lai không theo mùa.</p>';
    h += '<h3 class="bm-h">🌤 Từ vựng thời tiết <span lang="zh">天气</span> <small>chạm để nghe</small></h3>' +
      '<button type="button" class="bm-cau" data-bm-doc="' + esc(m.cau.zh) + '"><b lang="zh">' + esc(m.cau.zh) + '</b><span lang="zh-Latn">' + esc(m.cau.py) + '</span><small>' + esc(m.cau.vn) + '</small><em aria-hidden="true">🔊</em></button>' +
      '<div class="bm-tu-luoi">' + m.tu.map(function (t) { return nutTu(t); }).join('') + c.TU_CHUNG.map(function (t) { return nutTu(t, 'chung'); }).join('') + '</div>';
    h += '<h3 class="bm-h">🗓 Bốn mùa <span lang="zh">' + esc(c.TEN.zh) + '</span></h3><div class="bm-bon">' + c.MUA.map(function (x) {
      return '<button type="button" class="bm-bon-o bm-' + x.k + (x.k === m.k ? ' nay' : '') + '" data-bm-doc="' + esc(x.ten.zh) + '"><b lang="zh">' + esc(x.zh) + '</b><span lang="zh-Latn">' + esc(x.py) + '</span><small>' + esc(x.vn) + '</small></button>';
    }).join('') + '</div>';
    h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-bm-thach>🏆 Thử thách mùa →</button></div></div>';
    than.innerHTML = h;
    var nut = $('[data-bm-thach]', than);
    if (nut) nut.addEventListener('click', function () { var bd = N.bangDang(); if (bd) bd.tab = 'thach'; N.datTab(TAB, 'thach'); N.veBang(); });
  }
  function veThach(than) {
    var c = C(), b = B.d, m = muaK(b.k), t = ttMua(m.tt);
    var h = '<div class="bm bm-' + m.k + '">';
    h += '<div class="bm-thach"><span class="bm-thach-hinh">' + img(m.tt) + '</span><div>' +
      '<b><span lang="zh">' + esc(c.THACH.zh) + '</span> ' + esc(c.THACH.py) + ' — ' + esc(c.THACH.vn) + ' ' + esc(m.vn) + '</b>' +
      '<p>' + c.SO_CAU + ' câu hỏi từ bài em đã học · đúng ' + c.CAN_DUNG + ' câu nhận <b>' + esc(t.vn) + '</b> <span lang="zh">' + esc(t.zh) + '</span> ' + esc(t.py) + ' — đồ trang trí độc quyền mùa ' + esc(m.vn) + '.</p>' +
      '<small>' + (b.qua.du ? 'Em đã có ' + b.qua.co + ' ' + esc(t.vn.toLowerCase()) + ' — lần này nhận ' + c.XU_THAY + ' xu thay quà. ' : '') +
      'Mỗi mùa nhận quà 1 lần · ' + c.LUOT_TUAN + ' lượt thử / tuần (còn ' + b.con + ')</small></div></div>';
    if (b.xong) h += '<p class="bm-xong">✔ Tuần này em đã vượt Thử thách mùa. Mùa sau (còn ' + conLai(b.het) + ') có thử thách mới!</p>';
    else if (b.con <= 0) h += '<p class="bm-xong het">Tuần này em đã hết lượt thử — ôn bài rồi chờ mùa sau nhé!</p>';
    else h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-bm-bat>' + m.ic + ' Bắt đầu (' + c.SO_CAU + ' câu)</button></div>';
    h += '<h3 class="bm-h">🎁 Bộ sưu tập bốn mùa</h3><div class="bm-bo">' + b.bo.map(function (x) {
      var mm = muaK(x.k), tt = ttMua(x.tt), co = x.n > 0 || x.co > 0;
      return '<div class="bm-bo-o bm-' + x.k + (co ? ' co' : '') + '">' + img(x.tt) + '<b lang="zh">' + esc(tt.zh) + '</b><small>' + esc(tt.vn) + '</small>' +
        '<em>' + (co ? '✔ ' + (x.n > 1 ? x.n + ' mùa' : 'đã có') : '<span lang="zh">' + esc(mm.zh) + '</span> mùa ' + esc(mm.vn)) + '</em></div>';
    }).join('') + '</div>' +
      '<p class="bm-meo">Quà nằm trong <b>Túi đồ</b> (Kho → Túi đồ) — bấm “Đặt ra” để trang trí nông trại.</p></div>';
    than.innerHTML = h;
    var nut = $('[data-bm-bat]', than);
    if (nut) nut.addEventListener('click', function () {
      nut.disabled = true;
      N.goi('/api/farm/bonmua/bat', {}).then(function (r) {
        B.chay = { ds: r.ds, i: 0, can: r.can };
        if (r.bm) B.d = r.bm;
        N.tieng('mua');
        N.veBang();
      }, function (e) { nut.disabled = false; N.bao(e.message, 'loi'); N.tieng('sai'); });
    });
  }
  function veCau(than) {
    var c = B.chay, q = c.ds[c.i], khoa = false, m = muaK(B.d.k);
    if (!q) return;
    var hh = q.hoi || {};
    var html = '<p class="bm-cau-dau">' + m.ic + ' Thử thách mùa ' + esc(m.vn) + ' <span lang="zh">' + esc(m.zh) + '</span> · cần đúng ' + c.can + '/' + c.ds.length + '</p>' +
      '<div class="kt-cau"><p class="kt-cau-so">Câu ' + (c.i + 1) + '/' + c.ds.length + ' · <b>' + esc(hh.lenh || '') + '</b></p>';
    if (hh.nghe) html += '<button type="button" class="nt-nghe" data-bm-nghe>🔊 Nghe</button><p class="nt-nghe-tb" data-bm-nghe-tb aria-live="polite"></p>';
    html += N.htmlKt(q, 'bmc') + '<div class="kt-cau-kq" aria-live="polite"></div></div>';
    than.innerHTML = html;
    if (hh.nghe) {
      var zh = N.giaiNghe(hh.nghe), tb = $('[data-bm-nghe-tb]', than);
      var hien = function () { tb.innerHTML = 'Máy chưa phát được tiếng — chữ Hán: <b lang="zh">' + esc(zh) + '</b>'; };
      if (N.mayKhongNghe()) hien();
      N.docKiem(zh, function () {});
      $('[data-bm-nghe]', than).addEventListener('click', function () { N.docKiem(zh, function (ok) { if (!ok) hien(); }); });
    }
    N.ganKt(than, q, 'bmc', function (body, chon) {
      if (khoa) return;
      khoa = true;
      N.goi('/api/farm/bonmua/tl', body).then(function (r) {
        N.danhDauKt(than, q, r, chon, 'bmc');
        N.tieng(r.dung ? 'dung' : 'sai');
        N.docKt(r);
        var kq = $('.kt-cau-kq', than);
        c.i++;
        kq.innerHTML = '<p class="kt-cau-dg ' + (r.dung ? 'dung' : 'sai') + '">' + (r.dung ? '✔ Đúng rồi!' : '✘ Chưa đúng') + '</p>' + N.giaiKt(r, q) +
          (r.ket ? '<button type="button" class="nt-nut nt-nut-xanh" data-bm-xem>Xem kết quả →</button>' : '<button type="button" class="nt-nut nt-nut-xanh" data-bm-tiep>Câu tiếp →</button>');
        if (r.ket) {
          if (r.st) N.nhanTrangThai(r.st);
          if (r.bm) B.d = r.bm;
          $('[data-bm-xem]', kq).addEventListener('click', function () { B.chay = null; B.ket = r.ket; N.veBang(); });
        } else $('[data-bm-tiep]', kq).addEventListener('click', function () { N.veBang(); });
      }, function (e) { khoa = false; N.moLaiKt(than, q); N.bao(e.message, 'loi'); if (e.status === 400) { B.chay = null; B.d = null; tai(); } });
    });
  }
  function veKet(than) {
    var k = B.ket, m = muaK(B.d.k), h = '<div class="nt-chuc bm-ket bm-' + m.k + '">';
    if (!k.dat) {
      h += '<h2>Chưa vượt thử thách</h2><p>Đúng ' + k.dung + '/' + k.so + ' — cần ' + k.can + '. Ôn lại bài rồi thử lượt khác nhé! ' +
        (B.d.con > 0 ? '(còn ' + B.d.con + ' lượt tuần này)' : '') + '</p>';
      N.tieng('sai');
    } else {
      if (k.tt) {
        h += '<span class="bm-ket-hinh">' + img(k.tt.k) + '</span><h2>🎉 Quà mùa ' + esc(m.vn) + '!</h2>' +
          '<p class="bm-ket-ten"><b lang="zh">' + esc(k.tt.zh) + '</b> ' + esc(k.tt.py) + ' · ' + esc(k.tt.vn) + '</p>' +
          '<p>Đúng ' + k.dung + '/' + k.so + ' · +' + k.xp + ' XP. Quà đã vào <b>Túi đồ</b> — đặt ra nông trại cho đẹp nhé!</p>';
        N.doc(k.tt.zh);
      } else {
        h += '<span class="bm-ket-hinh">' + img('ic-xu') + '</span><h2>🎉 Vượt thử thách mùa ' + esc(m.vn) + '!</h2>' +
          '<p>Đúng ' + k.dung + '/' + k.so + ' · +' + k.xu + ' xu · +' + k.xp + ' XP (em đã đủ đồ trang trí mùa này).</p>';
      }
      N.tieng('len');
      if (N.fx && N.fx.mung) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, !!k.tt);
    }
    h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-bm-ve>← Bốn mùa</button></div></div>';
    than.innerHTML = h;
    $('[data-bm-ve]', than).addEventListener('click', function () { B.ket = null; N.veBang(); });
  }

  var TAB = [['mua', '🌸 Mùa này'], ['thach', '🏆 Thử thách mùa']];
  N.dangKy('bonmua', function (than, bd) {
    $('#ntBangTit').textContent = 'Bốn mùa 春夏秋冬';
    var tab = (bd && bd.tab) || 'mua';
    if (B.chay || B.ket) N.datTab([], ''); else N.datTab(TAB, tab);
    if (!C() || !S.st) { than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; return; }
    if (B.chay) return veCau(than);
    if (B.ket) return veKet(than);
    if (!B.d) { than.innerHTML = '<p class="nt-trong">Đang xem trời đất…</p>'; tai(); return; }
    if (tab === 'thach') veThach(than); else veMua(than);
  });
  // doc to: moi nut co data-bm-doc trong bang
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-bm-doc]');
    if (b) N.doc(b.getAttribute('data-bm-doc'));
  });

  // nut trong "⋯ Thêm"
  function taoNut() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || $('#ntThemBm')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-them-o'; b.id = 'ntThemBm'; b.setAttribute('data-mo', 'bonmua'); b.setAttribute('data-mo-tab', 'mua');
    b.innerHTML = '<span class="nt-them-emo" aria-hidden="true">🌸</span><span class="nt-muc-chu"><b>Bốn mùa <span lang="zh">春夏秋冬</span></b><small>cây đúng mùa · từ thời tiết · Thử thách mùa</small></span>';
    var sau = luoi.querySelector('[data-mo="cay7"]');
    luoi.insertBefore(b, sau ? sau.nextSibling : null);
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      if (S.tham && N.veNha) N.veNha();
      B.d = null; N.moBang('bonmua', 'mua');
    });
  }
  taoNut();

  function apDung() { veChip(); veLop(); }
  N.sau.push(apDung);
  if (S.st && S.cat) apDung();
})();
