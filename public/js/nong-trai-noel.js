/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Mua Noel 圣诞节 (2026-11-17, co giao: "them phan trang tri cay thong noel cho thi tran,
   cay thong vat pham cho tung trang trai, hieu ung no, ngoi sao thi hoc sinh mua them, giao dien mua le hoi").
   May chu (nong-trai-noel.js) quyet dinh mua le (st.kt.noel.mua), gia va so mon; o day chi ve:
   - body.nt-noel: tuyet roi, day den tren dau, mu ong gia Noel tren chip cap, mau le hoi, bang chao (dong duoc)
   - do trang tri tren cay thong Noel 'noel-thong' cua tung nong trai (SVG phu len hinh cay, % theo o -> phong to van khop)
   - bang 'noel-cay': mua ngoi sao, no, qua chau, day den, chuong, keo gay, hop qua cho cay cua em
   - cay thong lon cua thi tran: ca lop treo do chung, cang nhieu mon cang sang, ai treo mon nao
   Tat mua (bo class body.nt-noel) thi moi thu bien mat; cay va do da treo van giu nhu do trang tri.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, S = N.S;
  var K = 'noel-thong';
  var seq = 0;
  function cat() { return (S.cat && S.cat.NOEL) || null; }
  function mua() { var n = S.st && S.st.kt && S.st.kt.noel; return !!(n && n.mua && cat()); }
  function namMua() { var n = S.st && S.st.kt && S.st.kt.noel; return n ? n.nam : 0; }
  function tenNgan(t) { return window.NhanVat && NhanVat.tenNgan ? NhanVat.tenNgan(t || '') : (t || ''); }
  function soTr(tr) { var c = cat(), n = 0; if (!tr || !c) return 0; Object.keys(c.TR).forEach(function (k) { n += tr[k] || 0; }); return n; }
  function depTr(tr) { return Math.floor(soTr(tr) / 2) + (tr && tr.sao ? 3 : 0); }
  function giam() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  // Tuyet roi: mac dinh BAT ca khi may dat "giam chuyen dong" (nhieu may Windows tat hieu ung san — co giao khong thay
  // tuyet); may giam chuyen dong thi tuyet roi cham, thua hon. Nut ❄ tren thanh tren cung de em tu tat / bat (hyv_noel_tuyet).
  function tuyetBat() { try { return localStorage.getItem('hyv_noel_tuyet') !== '0'; } catch (e) { return true; } }
  function xuHtml(n) { return '<span class="nt-gia xu">' + N.img('ic-xu') + Number(n).toLocaleString('vi-VN') + '</span>'; }

  /* ---------------- do trang tri tren cay thong cua nong trai (viewBox 100x100 = hinh noel-thong.svg) ---------------- */
  var CHO = {
    // thu tu: mon dau tien rai deu ca cay (khong don len ngon)
    chau: [[63, 45], [36, 66], [45, 29], [71, 56], [29, 56], [64, 66]],
    no: [[50, 56], [50, 41], [22, 73]],
    chuong: [[37, 46], [60, 77], [50, 68]],
    keo: [[42, 76], [56, 28], [78, 72]],
  };
  var CO = { chau: 9, no: 11, chuong: 9, keo: 11 };
  var MAU_CHAU = ['noel-chau', 'noel-chau-2', 'noel-chau-3', 'noel-chau-4', 'noel-chau-2', 'noel-chau'];
  var QUA = [[25, 88, 15, 'noel-qua'], [76, 88, 15, 'noel-qua-2'], [12, 92, 11, 'noel-qua-3'], [89, 92, 11, 'noel-qua']];
  var DAY = [[[35, 42], [50, 53], [65, 41], 6], [[25, 59], [50, 72], [76, 58], 8]];
  var LAP = [[30, 34], [72, 31], [17, 63], [85, 50], [60, 18], [42, 58]];
  var MAU_DEN = ['#ff5252', '#ffd740', '#40c4ff', '#69f0ae', '#ff80ab'];
  function bac2(a, c, b, t) { var u = 1 - t; return [u * u * a[0] + 2 * u * t * c[0] + t * t * b[0], u * u * a[1] + 2 * u * t * c[1] + t * t * b[1]]; }
  function r1(n) { return Math.round(n * 10) / 10; }
  function anh(k, x, y, w, cls, tre) {
    return '<image href="' + N.anh(k) + '" x="' + r1(x - w / 2) + '" y="' + r1(y - w / 2) + '" width="' + w + '" height="' + w + '" class="' + cls + '"' +
      (tre != null ? ' style="animation-delay:-' + tre + 's"' : '') + '/>';
  }
  function day(d, sang, cls) {
    var h = '<path d="M' + d[0][0] + ' ' + d[0][1] + 'Q' + d[1][0] + ' ' + d[1][1] + ' ' + d[2][0] + ' ' + d[2][1] + '" class="nt-ntr-day"/>';
    for (var i = 0; i < d[3]; i++) {
      var p = bac2(d[0], d[1], d[2], (i + 0.5) / d[3]);
      h += '<circle cx="' + r1(p[0]) + '" cy="' + r1(p[1] + 1.4) + '" r="' + (cls === 'lon' ? 2.6 : 1.9) + '" fill="' + (sang ? MAU_DEN[i % MAU_DEN.length] : '#9aa3ad') + '" class="nt-ntr-bong' + (sang ? ' sang' : '') +
        '" style="animation-delay:-' + r1((i % 4) * 0.45) + 's"/>';
    }
    return h;
  }
  function lapLanh(ds, so, to) {
    var h = '';
    for (var i = 0; i < so && i < ds.length; i++) {
      var x = ds[i][0], y = ds[i][1], r = to || 2.6;
      h += '<path d="M' + x + ' ' + r1(y - r) + 'Q' + x + ' ' + y + ' ' + r1(x + r) + ' ' + y + 'Q' + x + ' ' + y + ' ' + x + ' ' + r1(y + r) + 'Q' + x + ' ' + y + ' ' + r1(x - r) + ' ' + y + 'Q' + x + ' ' + y + ' ' + x + ' ' + r1(y - r) + 'Z" class="nt-ntr-lap" style="animation-delay:-' + r1(i * 0.37) + 's"/>';
    }
    return h;
  }
  function saoHtml(x, y, w, sang) {
    var id = 'ntrg' + (++seq);
    return '<g class="nt-ntr-sao' + (sang ? ' sang' : '') + '">' +
      (sang ? '<radialGradient id="' + id + '"><stop offset="0" stop-color="#fff6b0" stop-opacity=".95"/><stop offset=".45" stop-color="#ffd54f" stop-opacity=".45"/><stop offset="1" stop-color="#ffd54f" stop-opacity="0"/></radialGradient>' +
        '<circle cx="' + x + '" cy="' + y + '" r="' + r1(w * 0.95) + '" fill="url(#' + id + ')" class="nt-ntr-hao"/>' : '') +
      anh('noel-sao', x, y, w, 'nt-ntr-sao-h') + '</g>';
  }
  // SVG phu len cay thong 1 nong trai: tr = { sao, den, no, chau, chuong, keo, qua }
  function svgTr(tr) {
    tr = tr || {};
    var n = soTr(tr), c = cat(), du = c && n >= c.TR_DU;
    var h = '<svg class="nt-noel-tr' + (du ? ' du' : '') + '" viewBox="0 0 100 100" aria-hidden="true" focusable="false">';
    for (var d = 0; d < Math.min(2, tr.den || 0); d++) h += day(DAY[d], true);
    ['chau', 'keo', 'chuong', 'no'].forEach(function (k) {
      for (var i = 0; i < Math.min(CHO[k].length, tr[k] || 0); i++) {
        var p = CHO[k][i];
        h += anh(k === 'chau' ? MAU_CHAU[i] : 'noel-' + k, p[0], p[1], CO[k], 'nt-ntr-o nt-ntr-' + k, r1((i * 0.83 + p[0] * 0.03) % 3));
      }
    });
    for (var q = 0; q < Math.min(QUA.length, tr.qua || 0); q++) h += anh(QUA[q][3], QUA[q][0], QUA[q][1], QUA[q][2], 'nt-ntr-qua');
    if (tr.sao) h += saoHtml(50, 11, 17, true);
    h += lapLanh(LAP, du ? 6 : Math.min(6, Math.floor(n / 3)));
    return h + '</svg>';
  }
  function veCay() {
    var dat = $('#ntDat');
    if (!dat) return;
    var els = dat.querySelectorAll('.nt-vat.nt-k-' + K);
    if (!els.length) return;
    var ds = (N.duLieuBanDo() || {}).o || [];
    Array.prototype.forEach.call(els, function (el) {
      var id = +el.getAttribute('data-id');
      var o = ds.filter(function (x) { return x.id === id; })[0];
      var cu = el.querySelector('.nt-noel-tr');
      if (cu) cu.remove();
      el.classList.toggle('co-tr', !!(o && soTr(o.tr)));
      if (!o || !soTr(o.tr)) return;
      (el.querySelector('.nt-dung') || el).insertAdjacentHTML('beforeend', svgTr(o.tr));
    });
  }
  N.sauVe.push(veCay);
  // Thu nho tren thi tran: cung lop phu, dat dung vi tri cay
  N.noelNho = function (o, r, w, h, z) {
    if (o.k !== K || !soTr(o.tr)) return '';
    return '<span class="nt-noel-nho" style="left:' + (o.x * 100 / w) + '%;top:' + (o.y * 100 / h) + '%;width:' + (r * 100 / w) + '%;height:' + (r * 100 / h) + '%;z-index:' + z + '">' + svgTr(o.tr) + '</span>';
  };

  /* ---------------- bong noi khi cham vao cay ---------------- */
  N.sauNoi.push(function (o) {
    if (!o || o.k !== K || !cat()) return;
    var noi = $('#ntNoi'), c = cat(), tr = o.tr || {}, n = soTr(tr), h = '';
    if (N.S.tham) {
      var co = Object.keys(c.TR).filter(function (k) { return tr[k]; });
      h = '<div class="nt-noel-noi">' + (co.length ? '<p>🎄 Cây thông của bạn có:</p><p class="nt-noel-noi-ds">' + co.map(function (k) {
        return '<span title="' + esc(c.TR[k].vn) + '">' + N.img(k === 'chau' ? 'noel-chau' : 'noel-' + k) + '<b lang="zh">' + esc(c.TR[k].zh) + '</b><small>' + esc(c.TR[k].py) + '</small> ×' + tr[k] + '</span>';
      }).join('') + '</p>' : '<p>🎄 Cây thông chưa treo đồ trang trí.</p>') + '</div>';
    } else {
      h = '<div class="nt-noel-noi"><p>' + (n ? '✨ Đã treo <b>' + n + '/' + c.TR_DU + '</b> món · điểm đẹp +' + depTr(tr) : 'Cây còn trơn — treo ngôi sao, nơ, quả châu cho thật lộng lẫy!') + '</p>' +
        '<button type="button" class="nt-nut nt-noel-nut" data-noel-mo>🎄 Trang trí cây thông</button>' +
        (mua() ? '' : '<p class="nt-noel-noi-phu">Mùa Noel đã qua — đồ đã treo vẫn còn trên cây.</p>') + '</div>';
    }
    // cay da treo do: khong cho "Cat vao tui" (may chu cung chan) — chi con keo de doi cho
    var cat1 = noi.querySelector('[data-cat-tui]');
    if (cat1 && n) cat1.parentNode.innerHTML = 'Nhấn giữ rồi kéo để dời chỗ';
    noi.insertAdjacentHTML('beforeend', h);
    $all('img', noi).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    var b = noi.querySelector('[data-noel-mo]');
    if (b) b.addEventListener('click', function () { N.moBang('noel-cay', o.id); });
    N.datViTriNoi();
  });

  /* ---------------- bang trang tri cay thong cua em ---------------- */
  var THU_TU = ['sao', 'den', 'no', 'chau', 'chuong', 'keo', 'qua'];
  N.dangKy('noel-cay', function (than, bang) {
    $('#ntBangTit').textContent = '🎄 Trang trí cây thông';
    N.datTab([], '');
    var c = cat(), o = (S.st.o || []).filter(function (x) { return x.id === +bang.tab; })[0];
    if (!c || !o || o.k !== K) { than.innerHTML = '<p class="nt-trong">Không tìm thấy cây thông này.</p>'; return; }
    var tr = o.tr || {}, n = soTr(tr), xu = S.st.xu, coMua = mua();
    var h = '<div class="nt-noel-bang"><div class="nt-noel-xem" id="ntNoelXem"><div class="nt-noel-xem-cay">' + N.img(K, 'nt-noel-xem-hinh') + svgTr(tr) + '</div>' +
      '<button type="button" class="nt-noel-xem-ten" data-doc="圣诞树"><b lang="zh">圣诞树</b> Shèngdànshù · Cây thông Noel 🔊</button></div>' +
      '<div class="nt-noel-ben"><div class="nt-noel-tien"><b>✨ ' + n + '/' + c.TR_DU + ' món</b><span>Điểm đẹp +' + depTr(tr) + '</span>' +
      '<i><u style="width:' + Math.round(n * 100 / c.TR_DU) + '%"></u></i></div>' +
      (coMua ? '' : '<p class="nt-noel-het">Mùa Noel đã qua — đồ đã treo vẫn giữ trên cây. Hẹn em mùa sau (17/11) để mua thêm!</p>') +
      '<div class="nt-noel-ds">';
    THU_TU.forEach(function (k) {
      var m = c.TR[k], co = tr[k] || 0, du = co >= m.max, thieu = Math.max(0, m.xu - xu);
      var lyDo = du ? 'Đã đủ' : !coMua ? 'Hết mùa' : thieu ? 'Thiếu ' + thieu + ' xu' : '';
      h += '<div class="nt-noel-mon' + (du ? ' du' : '') + '">' + N.img(k === 'chau' ? 'noel-chau' : 'noel-' + k, 'nt-noel-mon-h') +
        '<button type="button" class="nt-noel-mon-ten" data-doc="' + esc(m.zh) + '"><b lang="zh">' + esc(m.zh) + '</b><span>' + esc(m.py) + '</span><i>' + esc(m.vn) + '</i></button>' +
        '<span class="nt-noel-mon-co">' + co + '/' + m.max + '</span>' +
        '<button type="button" class="nt-mua" data-noel-tr="' + k + '"' + (lyDo ? ' disabled' : '') + '>' + (du ? '✓ Đủ' : xuHtml(m.xu)) + '</button>' +
        (lyDo && !du ? '<small>' + lyDo + '</small>' : '') + '</div>';
    });
    h += '</div><p class="nt-meo">' + N.img('ic-xu') + ' Em có <b>' + xu.toLocaleString('vi-VN') + '</b> xu. Mỗi 2 món +1 điểm đẹp, ngôi sao +3. Đồ đã treo giữ mãi, cả sau mùa Noel.</p></div></div>';
    than.innerHTML = h;
    $all('[data-noel-tr]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-noel-tr'), m = c.TR[k];
        b.disabled = true;
        N.lam({ a: 'trangtri', id: o.id, t: k }, b).then(function (r) {
          N.tieng(r.them && r.them.noel && r.them.noel.du ? 'len' : 'mua');
          N.doc(m.zh);
          N.bao(r.them && r.them.noel && r.them.noel.du ? '🌟 Cây thông lộng lẫy đủ ' + c.TR_DU + ' món rồi! 圣诞快乐！' : '🎄 Đã treo ' + m.vn.toLowerCase() + ' ' + m.zh + ' ' + m.py + '!');
          if (N.bangDang() && N.bangDang().loai === 'noel-cay') N.veBang();
          var xem = $('#ntNoelXem .nt-noel-xem-cay');
          if (xem && N.fx && !giam()) N.fx.mung(xem, r.them && r.them.noel && r.them.noel.du);
        }, function () { b.disabled = false; });
      });
    });
  });

  /* ---------------- cay thong lon cua thi tran (viewBox 200x240 = noel-cay-lon.svg) ---------------- */
  var TANG = [[86, 196, 88], [68, 168, 74], [52, 140, 60], [38, 112, 47], [26, 86, 34], [16, 58, 22]];
  var CO_TT = { chau: 12, no: 14, chuong: 12, keo: 13, tuyet: 12 };
  var DAY_TT = [[[86, 44], [100, 56], [114, 42], 5], [[72, 74], [100, 92], [130, 72], 7], [[60, 108], [100, 128], [142, 106], 9], [[44, 144], [100, 168], [158, 142], 11], [[30, 176], [100, 200], [172, 174], 13]];
  var LAP_TT = [[62, 60], [140, 70], [44, 120], [160, 112], [26, 170], [176, 168], [100, 34], [80, 150], [124, 186], [58, 196]];
  var QUA_TT = [];
  [[50, 213, 20], [31, 217, 17], [15, 223, 13], [42, 228, 15], [24, 231, 13], [60, 229, 14]].forEach(function (p, i) {
    QUA_TT.push([p[0], p[1], p[2], ['noel-qua', 'noel-qua-2', 'noel-qua-3'][i % 3]]);
    QUA_TT.push([200 - p[0], p[1] + (i % 2), p[2], ['noel-qua-3', 'noel-qua', 'noel-qua-2'][i % 3]]);
  });
  var CHO_TT = (function () {
    // cac o treo do trong long cay: xep theo hang, cach deu, roi tron co dinh (cay nao cung giong nhau)
    var ds = [];
    for (var y = 32, hang = 0; y <= 188; y += 11, hang++) {
      var W = 0;
      TANG.forEach(function (t) { if (y >= t[0] && y <= t[1]) W = Math.max(W, t[2] * Math.pow((y - t[0]) / (t[1] - t[0]), 0.9)); });
      W -= 9;
      if (W < 2) continue;
      for (var x = 100 - Math.floor(W / 14) * 14 + (hang % 2 ? 7 : 0); x <= 100 + W; x += 14) if (Math.abs(x - 100) <= W) ds.push([x, y + ((x * 7) % 5) - 2]);
    }
    var hat = 7;
    function rnd() { hat = (hat * 9301 + 49297) % 233280; return hat / 233280; }
    for (var i = ds.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var tm = ds[i]; ds[i] = ds[j]; ds[j] = tm; }
    return ds;
  })();
  var TT = { d: null, lop: '', luc: 0, dang: false };
  function svgTt(cay) {
    var c = cat(), cap = cay.cap, h = '<svg class="nt-ntt-tr cap-' + cap + '" viewBox="0 0 200 240" role="img" aria-label="Cây thông thị trấn có ' + cay.n + ' món trang trí">';
    if (cap >= 5) h += '<circle cx="100" cy="120" r="104" class="nt-ntt-hao"/>';
    DAY_TT.forEach(function (d, i) { h += day(d, cap >= 3 || (cap >= 2 && i < 4) || (cap >= 1 && i < 2), 'lon'); });
    var vat = [], qua = [];
    cay.ds.forEach(function (x, i) { (x.k === 'qua' ? qua : vat).push({ x: x, i: i }); });
    vat.forEach(function (v, j) {
      var p = CHO_TT[j % CHO_TT.length], k = v.x.k;
      var hinh = k === 'chau' ? MAU_CHAU[j % 4] : 'noel-' + k;
      h += '<g class="nt-ntt-mon' + (v.x.em ? ' em' : '') + '" data-ntt="' + v.i + '" tabindex="-1">' + anh(hinh, p[0], p[1], CO_TT[k] || 12, 'nt-ntr-o nt-ntr-' + k, r1((j * 0.61) % 3)) + '</g>';
    });
    qua.slice(0, QUA_TT.length).forEach(function (v, j) {
      var p = QUA_TT[j];
      h += '<g class="nt-ntt-mon' + (v.x.em ? ' em' : '') + '" data-ntt="' + v.i + '">' + anh(p[3], p[0], p[1], p[2], 'nt-ntr-qua') + '</g>';
    });
    h += saoHtml(100, 15, 28, cap >= 3);
    if (cap >= 4) h += lapLanh(LAP_TT, cap >= 5 ? LAP_TT.length : 6, 4);
    return h + '</svg>';
  }
  function htmlTt(r) {
    var c = cat(), cay = r.cay, ms = c.MOC_SANG, cap = cay.cap, sau = ms[cap + 1];
    var h = '<div class="nt-ntt-cay"><img class="nt-ntt-nen" src="' + N.anh('noel-cay-lon') + '" alt="" draggable="false">' + svgTt(cay) + '</div>' +
      '<div class="nt-ntt-ben">' +
      '<button type="button" class="nt-ntt-chuc" data-doc="' + esc(c.CHUC.zh) + '"><b lang="zh">' + esc(c.CHUC.zh) + '</b><span>' + esc(c.CHUC.py) + '</span><i>' + esc(c.CHUC.vn) + ' 🔊</i></button>' +
      '<h3>🎄 Cây thông của thị trấn <small lang="zh">圣诞树</small></h3>' +
      '<p class="nt-ntt-tien"><b>' + cay.n + ' món</b> · ' + esc(ms[cap].vn) + (sau ? ' · còn <b>' + (sau.n - cay.n) + '</b> món nữa: ' + esc(sau.vn) : ' · sáng nhất rồi!') + '</p>' +
      '<i class="nt-ntt-thanh"><u style="width:' + (sau ? Math.round((cay.n - ms[cap].n) * 100 / (sau.n - ms[cap].n)) : 100) + '%"></u></i>';
    if (!r.mua) h += '<p class="nt-ntt-phu">Mùa Noel đã qua — hẹn cả lớp mùa sau!</p>';
    else if (!r.cuaEm) h += '<p class="nt-ntt-phu">Đây là cây thông của thị trấn khác — em chỉ xem thôi. Về thị trấn lớp em để treo đồ nhé!</p>';
    else {
      var em = cay.em || { mien: true, con: c.TREO_NGAY };
      h += '<p class="nt-ntt-phu">Cả lớp cùng treo — càng nhiều món, cây càng sáng! ' + (em.con ? (em.mien ? '<b class="nt-ntt-mien">🎁 Hôm nay em treo 1 món miễn phí</b>' : 'Treo thêm: <b>' + xuHtml(c.TREO_GIA) + '</b>/món · còn ' + em.con + ' lượt hôm nay') : '<b>Hôm nay em treo đủ ' + c.TREO_NGAY + ' món rồi — mai treo tiếp nhé!</b>') + '</p>' +
        '<div class="nt-ntt-treo">' + Object.keys(c.TT_TR).map(function (k) {
          var m = c.TT_TR[k];
          return '<button type="button" data-noel-treo="' + k + '"' + (em.con ? '' : ' disabled') + '>' + N.img(k === 'chau' ? 'noel-chau' : 'noel-' + k) +
            '<b lang="zh">' + esc(m.zh) + '</b><span>' + esc(m.py) + '</span><i>' + esc(m.vn) + '</i></button>';
        }).join('') + '</div>';
    }
    if (cay.ai.length) h += '<p class="nt-ntt-ai-t">Các bạn đã treo:</p><p class="nt-ntt-ai">' + cay.ai.map(function (a) {
      return '<span class="' + (a.em ? 'em' : '') + '">' + esc(tenNgan(a.ten)) + (a.em ? ' (em)' : '') + ' <b>×' + a.n + '</b></span>';
    }).join('') + '</p>';
    else h += '<p class="nt-ntt-ai-t">Chưa ai treo — em hãy là người đầu tiên!</p>';
    return h + '</div>';
  }
  /* ---------- tuyet roi + sao lap lanh + kim tuyen vang (canvas, 2026-11-18 co giao: "cham cay thong ra giao dien
     dep hon, tuyet bay, lung linh hon") ----------
     o: { mat: so px2 / 1 bong (cang nho cang day), to: co bong, toc: toc do, sao: so sao troi / 10000 px2,
          lapTu: ham tra { x, y } (toa do canvas) cho kim tuyen vang lap lanh tren cay, lapSo: so hat / giay }
     Tu dung khi canvas roi khoi trang; tab an thi nghi; giam chuyen dong -> ve 1 khung tinh. */
  function canhTuyet(cv, o) {
    o = o || {};
    var ctx = cv && cv.getContext && cv.getContext('2d');
    if (!ctx) return;
    // dien thoai: ve o do phan giai 1x, it bong hon (giam lag)
    var dt_ = (window.matchMedia && matchMedia('(max-width: 760px), (pointer: coarse)').matches);
    var dpr = dt_ ? 1 : Math.min(2, window.devicePixelRatio || 1), W = 1, H = 1, hat = [], sao = [], lap = [], dem = 0;
    function co() {
      var r = cv.getBoundingClientRect();
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    var cham = giam() ? 0.55 : 1;
    function moi(dau) {
      var to = o.to || 1;
      return { x: Math.random() * W, y: dau ? -6 - Math.random() * 20 : Math.random() * H, r: (0.7 + Math.random() * 2.3) * to,
        v: (16 + Math.random() * 36) * (o.toc || 1) * cham, l: Math.random() * 6.28, lv: 0.5 + Math.random() * 1.3,
        a: 0.5 + Math.random() * 0.5, bong: Math.random() < 0.14, q: Math.random() * 6.28 };
    }
    co();
    var n = Math.min(dt_ ? 90 : 260, Math.round(W * H / (o.mat || 4200) * (giam() ? 0.6 : 1) * (dt_ ? 0.55 : 1)));
    for (var i = 0; i < n; i++) hat.push(moi());
    var ns = Math.round(W * H / 10000 * (o.sao || 0));
    for (var j = 0; j < ns; j++) sao.push({ x: Math.random() * W, y: Math.random() * H * 0.62, r: 0.5 + Math.random() * 1.3, p: Math.random() * 6.28, t: 0.6 + Math.random() * 1.8 });
    function bongTuyet(x, y, r, q) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(q);
      ctx.beginPath();
      for (var k = 0; k < 6; k++) {
        ctx.moveTo(0, 0); ctx.lineTo(0, -r * 2.4);
        ctx.moveTo(0, -r * 1.4); ctx.lineTo(r * 0.7, -r * 2); ctx.moveTo(0, -r * 1.4); ctx.lineTo(-r * 0.7, -r * 2);
        ctx.rotate(Math.PI / 3);
      }
      ctx.stroke(); ctx.restore();
    }
    function kimTuyen(x, y, r, a, mau) {
      ctx.globalAlpha = a;
      ctx.fillStyle = mau;
      ctx.beginPath();
      ctx.moveTo(x, y - r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.quadraticCurveTo(x, y, x, y + r);
      ctx.quadraticCurveTo(x, y, x - r, y); ctx.quadraticCurveTo(x, y, x, y - r); ctx.fill();
      ctx.globalAlpha = a * 0.35;
      ctx.beginPath(); ctx.arc(x, y, r * 0.9, 0, 6.29); ctx.fill();
    }
    var last = 0;
    function khung(now) {
      var t = now / 1000, dt = last ? Math.min(0.05, t - last) : 0;
      last = t;
      ctx.clearRect(0, 0, W, H);
      if (!tuyetBat()) return;
      sao.forEach(function (x) {
        var a = 0.35 + 0.65 * Math.abs(Math.sin(t * x.t + x.p));
        ctx.globalAlpha = a; ctx.fillStyle = '#fffbe6';
        ctx.beginPath(); ctx.arc(x.x, x.y, x.r, 0, 6.29); ctx.fill();
        if (x.r > 1.3) { ctx.globalAlpha = a * 0.5; ctx.fillRect(x.x - x.r * 2.6, x.y - 0.35, x.r * 5.2, 0.7); ctx.fillRect(x.x - 0.35, x.y - x.r * 2.6, 0.7, x.r * 5.2); }
      });
      ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = 0.9; ctx.lineCap = 'round';
      hat.forEach(function (x, k) {
        x.y += x.v * dt;
        x.x += (Math.sin(t * x.lv + x.l) * 14 + (o.gio || 6)) * dt;
        x.q += dt * 0.6;
        if (x.y > H + 8) hat[k] = x = moi(true);
        if (x.x > W + 6) x.x = -6; else if (x.x < -6) x.x = W + 6;
        ctx.globalAlpha = x.a;
        if (x.bong && x.r > 1.4) bongTuyet(x.x, x.y, x.r, x.q);
        else {
          ctx.fillStyle = '#fff';
          ctx.beginPath(); ctx.arc(x.x, x.y, x.r, 0, 6.29); ctx.fill();
          ctx.globalAlpha = x.a * 0.25; ctx.beginPath(); ctx.arc(x.x, x.y, x.r * 2.2, 0, 6.29); ctx.fill();
        }
      });
      if (o.lapTu) {
        dem += dt * (o.lapSo || 8);
        while (dem >= 1 && lap.length < (dt_ ? 24 : 60)) { dem -= 1; var p = o.lapTu(); if (p) lap.push({ x: p.x, y: p.y, s: 0, d: 0.7 + Math.random() * 0.8, r: 2.5 + Math.random() * 4.5, m: Math.random() < 0.7 ? '#ffe680' : (Math.random() < 0.5 ? '#ffffff' : '#ffb3c7') }); }
        lap = lap.filter(function (x) {
          x.s += dt;
          var k = x.s / x.d;
          if (k >= 1) return false;
          kimTuyen(x.x, x.y, x.r * Math.sin(k * Math.PI), Math.sin(k * Math.PI), x.m);
          return true;
        });
      }
      ctx.globalAlpha = 1;
    }
    var hen = 0;
    window.addEventListener('resize', function lai() { if (!cv.isConnected) return window.removeEventListener('resize', lai); clearTimeout(hen); hen = setTimeout(co, 150); });
    (function vong(now) {
      if (!cv.isConnected) return;
      requestAnimationFrame(vong);
      // tab an / khung dang an (vd thi tran da dong — canvas van con trong trang): khong ve, do ton pin + lag
      if (document.hidden || !cv.offsetWidth) { last = 0; return; }
      khung(now);
    })(performance.now());
  }
  // diem ngau nhien trong long cay (viewBox 200 x 240 cua cay thi tran) -> toa do trong canvas
  function lapTrenCay(cayEl, cv) {
    return function () {
      if (!cayEl.isConnected) return null;
      var r = cayEl.getBoundingClientRect(), c = cv.getBoundingClientRect(), p = CHO_TT[Math.floor(Math.random() * CHO_TT.length)];
      if (Math.random() < 0.12) p = [100, 15]; // ngoi sao tren ngon
      return { x: r.left - c.left + (p[0] + (Math.random() * 12 - 6)) / 200 * r.width, y: r.top - c.top + (p[1] + (Math.random() * 10 - 5)) / 240 * r.height };
    };
  }

  /* ---------- Ong gia Noel cuoi xe tuan loc bay ngang troi (2026-11-18, co giao: "hinh dong ong gia noel cuoi tuan loc
     bay di bay lai") — SVG ve tay cung phong cach (vien dam #2b1d3a), chan tuan loc phi, mui do sang, vet sao lap lanh ---------- */
  function tuanLoc(x, y, dau, tre) {
    var V = '#2b1d3a';
    return '<g transform="translate(' + x + ' ' + y + ')">' +
      // chan sau (phai) + chan truoc (trai): moi cap 2 chan lech pha
      '<g class="nt-sa-chan" style="animation-delay:-' + tre + 's"><path d="M12 5 L17 19" stroke="' + V + '" stroke-width="5" stroke-linecap="round"/><path d="M12 5 L17 19" stroke="#8a5530" stroke-width="2.6" stroke-linecap="round"/></g>' +
      '<g class="nt-sa-chan b" style="animation-delay:-' + (tre + 0.18) + 's"><path d="M-12 5 L-17 19" stroke="' + V + '" stroke-width="5" stroke-linecap="round"/><path d="M-12 5 L-17 19" stroke="#8a5530" stroke-width="2.6" stroke-linecap="round"/></g>' +
      '<path d="M21 -3 q7 -3 6 -9" fill="none" stroke="' + V + '" stroke-width="3" stroke-linecap="round"/>' +
      '<ellipse cx="0" cy="0" rx="22" ry="9.5" fill="#a86b3c" stroke="' + V + '" stroke-width="2.2"/>' +
      '<ellipse cx="-2" cy="4" rx="14" ry="4" fill="#e8c9a0"/>' +
      '<path d="M-14 -4 C-18 -10 -22 -15 -24 -19 L-17 -23 C-14 -17 -10 -11 -6 -7 Z" fill="#a86b3c" stroke="' + V + '" stroke-width="2" stroke-linejoin="round"/>' +
      // gac
      '<g fill="none" stroke="#6b4423" stroke-width="2.4" stroke-linecap="round"><path d="M-22 -26 l-3 -11 m1.5 4 l-6 -3 m7.5 -1 l-1 -7"/><path d="M-17 -26 l2 -10 m-1 4 l5 -4 m-4 0 l1 -6"/></g>' +
      '<ellipse cx="-27" cy="-23" rx="9" ry="6.2" transform="rotate(-14 -27 -23)" fill="#a86b3c" stroke="' + V + '" stroke-width="2"/>' +
      '<path d="M-19 -27 l6 -4 l-1 6 z" fill="#e8c9a0" stroke="' + V + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<circle cx="-27" cy="-25" r="1.6" fill="' + V + '"/>' +
      (dau ? '<circle cx="-36.5" cy="-21" r="6.5" class="nt-sa-mui-hao" fill="#ff5252" opacity=".35"/>' : '') +
      '<circle cx="-36" cy="-21.5" r="' + (dau ? 3.4 : 2.6) + '" fill="' + (dau ? '#ff3b3b' : '#4a2c1a') + '" stroke="' + V + '" stroke-width="1.4"' + (dau ? ' class="nt-sa-mui"' : '') + '/>' +
      // yen cuong do co chuong vang
      '<path d="M-8 -9 C-6 -2 6 -2 8 -9" fill="none" stroke="#c62828" stroke-width="3.2"/><circle cx="0" cy="-3" r="2.4" fill="#ffd54f" stroke="' + V + '" stroke-width="1.2"/>' +
      '</g>';
  }
  function svgOngGia() {
    var V = '#2b1d3a';
    return '<svg class="nt-sa-hinh" viewBox="-14 -26 256 112" aria-hidden="true">' +
      // day cuong: tay ong -> 2 tuan loc
      '<path d="M162 30 C130 30 100 22 64 24" fill="none" stroke="#7a4a1e" stroke-width="1.6"/><path d="M162 31 C120 34 60 26 12 22" fill="none" stroke="#7a4a1e" stroke-width="1.6"/>' +
      '<path d="M126 52 L102 48 M126 56 L52 46" stroke="#5d3a1a" stroke-width="2" stroke-linecap="round"/>' +
      tuanLoc(92, 48, false, 0.3) + tuanLoc(40, 42, true, 0) +
      // bao qua sau xe
      '<g><ellipse cx="208" cy="24" rx="14" ry="15" fill="#8d5a2b" stroke="' + V + '" stroke-width="2.2"/>' +
      '<rect x="199" y="2" width="9" height="9" rx="1.5" fill="#43a047" stroke="' + V + '" stroke-width="1.6"/><rect x="208" y="5" width="8" height="8" rx="1.5" fill="#1e88e5" stroke="' + V + '" stroke-width="1.6"/>' +
      '<path d="M200 12 q8 4 16 0" fill="none" stroke="#5d3a1a" stroke-width="2.4"/></g>' +
      // ong gia
      '<g><ellipse cx="179" cy="31" rx="15" ry="14" fill="#d32f2f" stroke="' + V + '" stroke-width="2.2"/>' +
      '<rect x="164" y="34" width="30" height="5" fill="#fff" stroke="' + V + '" stroke-width="1.6"/>' +
      '<path d="M168 27 C160 28 156 30 154 32" stroke="' + V + '" stroke-width="7" stroke-linecap="round"/><path d="M168 27 C160 28 156 30 154 32" stroke="#d32f2f" stroke-width="4.2" stroke-linecap="round"/>' +
      '<circle cx="153" cy="32" r="3.4" fill="#fff" stroke="' + V + '" stroke-width="1.5"/>' +
      '<circle cx="175" cy="12" r="8.5" fill="#ffd7b5" stroke="' + V + '" stroke-width="2"/>' +
      '<path d="M166 13 C164 24 172 30 178 26 C183 23 184 17 183 13 C179 17 171 17 166 13 Z" fill="#fff" stroke="' + V + '" stroke-width="1.8" stroke-linejoin="round"/>' +
      '<circle cx="170.5" cy="10.5" r="1.3" fill="' + V + '"/><circle cx="168" cy="14" r="2" fill="#ff8a80"/>' +
      '<path d="M166 7 C168 -1 182 -4 188 0 C194 2 196 8 199 9" fill="#d32f2f" stroke="' + V + '" stroke-width="2" stroke-linejoin="round"/>' +
      '<rect x="165" y="4" width="20" height="5" rx="2.5" fill="#fff" stroke="' + V + '" stroke-width="1.6"/>' +
      '<circle cx="200" cy="9" r="3.4" fill="#fff" stroke="' + V + '" stroke-width="1.5"/></g>' +
      // xe truot
      '<path d="M128 52 C128 40 140 36 150 38 L198 38 C208 38 216 32 220 22 C230 28 230 44 220 54 C212 62 196 66 176 66 L146 66 C136 66 128 60 128 52 Z" fill="#d32f2f" stroke="' + V + '" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<path d="M134 52 C136 44 144 42 152 43 L196 43" fill="none" stroke="#ffca28" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path d="M146 66 L146 75 M200 64 L200 75" stroke="' + V + '" stroke-width="2.6"/>' +
      '<path d="M120 76 L214 76 C224 76 230 70 228 62" fill="none" stroke="' + V + '" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M120 76 L214 76 C224 76 230 70 228 62" fill="none" stroke="#ffca28" stroke-width="2.6" stroke-linecap="round"/>' +
      '<path d="M120 76 C112 76 112 66 120 67" fill="none" stroke="#ffca28" stroke-width="2.6" stroke-linecap="round"/>' +
      '</svg>' +
      '<span class="nt-sa-vet" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>';
  }
  // Bay 1 luot: tu canh nay sang canh kia o 1 do cao ngau nhien phia tren
  var oG = { el: null, hen: 0, luot: 0 };
  function oGiaEl() {
    if (oG.el && oG.el.isConnected) return oG.el;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'nt-santa';
    b.setAttribute('aria-label', 'Ông già Noel 圣诞老人 Shèngdàn lǎorén');
    b.innerHTML = '<span class="nt-sa-nhun">' + svgOngGia() + '</span>';
    b.addEventListener('click', function () {
      N.doc('圣诞老人');
      N.bao('🎅 Ông già Noel 圣诞老人 Shèngdàn lǎorén — Hô hô hô! 圣诞快乐！');
      if (N.fx && N.fx.mung) N.fx.mung(b);
    });
    document.body.appendChild(b);
    oG.el = b;
    return b;
  }
  function bayOngGia() {
    clearTimeout(oG.hen);
    var dtB = window.matchMedia && matchMedia('(max-width: 760px), (pointer: coarse)').matches;
    oG.hen = setTimeout(bayOngGia, (dtB ? 45000 : 26000) + Math.random() * 16000);
    if (!document.body.classList.contains('nt-noel') || document.hidden || document.body.classList.contains('co-bang')) return;
    var b = oGiaEl(), W = innerWidth, rong = Math.min(260, Math.max(170, W * 0.22));
    var sangPhai = (oG.luot++ % 2) === 1, y = Math.round(innerHeight * (0.1 + Math.random() * 0.22));
    b.style.width = rong + 'px';
    b.style.top = y + 'px';
    b.classList.toggle('phai', sangPhai);
    b.hidden = false;
    var tu = sangPhai ? -rong - 40 : W + 40, den = sangPhai ? W + 40 : -rong - 40;
    var ms = (giam() ? 22000 : 13000) * Math.max(0.8, Math.min(1.4, W / 1200));
    if (!b.animate) { b.hidden = true; return; }
    var a = b.animate([
      { transform: 'translate(' + tu + 'px, 0)' },
      { transform: 'translate(' + ((tu + den) / 2) + 'px, ' + (-innerHeight * 0.05) + 'px)' },
      { transform: 'translate(' + den + 'px, ' + (innerHeight * 0.02) + 'px)' }
    ], { duration: ms, easing: 'linear' });
    a.onfinish = function () { b.hidden = true; };
    // giua duong: ong gia Noel co the tha hop qua (public/js/nong-trai-noel-qua.js)
    setTimeout(function () { try { if (N.noelSantaGiua) N.noelSantaGiua(b); } catch (e) { /* bo qua */ } }, ms * 0.45);
  }
  // Trong khung cay thong thi tran: ong gia bay vao, luon 1 vong quanh cay (vong sau thi khuat sau cay), roi bay ra
  // (2026-11-18 co giao: "ong gia noel cuoi di quanh thi tran va ca qua cho cay thong noel")
  function bayQuanhCay(noi) {
    if (!noi || noi._santaHen) return;
    function luot() {
      if (!noi.isConnected) { noi._santaHen = 0; return; }
      noi._santaHen = setTimeout(luot, 17000 + Math.random() * 9000);
      if (document.hidden || !document.body.classList.contains('nt-noel')) return;
      var cayEl = noi.querySelector('.nt-ntt-cay');
      if (!cayEl || !Element.prototype.animate) return;
      var pr = noi.getBoundingClientRect(), cr = cayEl.getBoundingClientRect();
      if (pr.width < 50 || cr.width < 50) return;
      var sa = noi.querySelector('.nt-ntt-santa');
      if (!sa) {
        sa = document.createElement('div');
        sa.className = 'nt-ntt-santa';
        sa.setAttribute('aria-hidden', 'true');
        sa.innerHTML = '<span class="nt-sa-nhun">' + svgOngGia() + '</span>';
        noi.appendChild(sa);
      }
      var rong = Math.max(110, Math.min(190, cr.width * 0.55)), cao = rong * 112 / 256;
      sa.style.width = rong + 'px';
      // tam cay trong khung + quy dao elip quanh cay
      var cx = cr.left - pr.left + cr.width / 2, cy = cr.top - pr.top + cr.height * 0.48;
      var rx = cr.width * 0.62, ry = cr.height * 0.42;
      var vaoPhai = Math.random() < 0.5, diem = [];
      diem.push([vaoPhai ? pr.width + 20 : -rong - 20, cy - ry - cao * 0.6, 1]);
      // 1 vong: bat dau phia truoc-tren, vong qua phia sau (y nho = phia sau cay), quay lai phia truoc
      var n = 14, goc0 = vaoPhai ? -0.15 : Math.PI + 0.15, chieu = vaoPhai ? 1 : -1;
      for (var i = 0; i <= n; i++) {
        var g = goc0 + chieu * (i / n) * Math.PI * 2;
        diem.push([cx + Math.cos(g) * rx - rong / 2, cy + Math.sin(g) * ry - cao / 2, Math.sin(g) < -0.15 ? 0 : 3]);
      }
      diem.push([vaoPhai ? -rong - 30 : pr.width + 30, cy - ry - cao, 3]);
      var khung = diem.map(function (p, k) {
        var sau = diem[Math.min(k + 1, diem.length - 1)], truoc = diem[Math.max(k - 1, 0)];
        var dx = (sau[0] - truoc[0]) || (vaoPhai ? -1 : 1);
        return { transform: 'translate(' + Math.round(p[0]) + 'px,' + Math.round(p[1]) + 'px) scaleX(' + (dx > 0 ? -1 : 1) + ') scale(' + (p[2] ? 1 : 0.82) + ')', zIndex: p[2], offset: k / (diem.length - 1) };
      });
      sa.hidden = false;
      var a = sa.animate(khung, { duration: giam() ? 20000 : 13000, easing: 'linear' });
      a.onfinish = function () { sa.hidden = true; };
    }
    noi._santaHen = setTimeout(luot, 2500);
  }

  function batOngGia() {
    if (oG.batDau) return;
    oG.batDau = true;
    setTimeout(bayOngGia, 4000);
  }

  /* ---------- man "Dem Giang sinh": cham cay thong thi tran ---------- */
  function moDem() {
    if (!TT.d || !TT.d.cay || $('#ntNoelDem')) return;
    var c = cat(), cay = TT.d.cay, truoc = document.activeElement;
    var d = document.createElement('div');
    d.id = 'ntNoelDem';
    d.className = 'nt-noel-dem';
    d.setAttribute('role', 'dialog');
    d.setAttribute('aria-modal', 'true');
    d.setAttribute('aria-label', 'Cây thông Noel của thị trấn — đêm Giáng sinh');
    d.innerHTML = '<div class="nt-nd-troi" aria-hidden="true"><i class="nt-nd-cuc a"></i><i class="nt-nd-cuc b"></i><i class="nt-nd-cuc c"></i></div>' +
      '<canvas class="nt-nd-sau" aria-hidden="true"></canvas>' +
      '<div class="nt-nd-trang" aria-hidden="true"></div>' +
      '<div class="nt-nd-santa" aria-hidden="true"><span class="nt-sa-nhun">' + svgOngGia() + '</span></div>' +
      '<div class="nt-nd-doi" aria-hidden="true"><i class="xa"></i><i class="gan"></i></div>' +
      '<div class="nt-nd-cay"><i class="nt-nd-tia" aria-hidden="true"></i><i class="nt-nd-hao" aria-hidden="true"></i>' +
        '<img class="nt-ntt-nen" src="' + N.anh('noel-cay-lon') + '" alt="" draggable="false">' + svgTt(cay) + '</div>' +
      '<canvas class="nt-nd-truoc" aria-hidden="true"></canvas>' +
      '<button type="button" class="nt-nd-chu" data-doc="' + esc(c.CHUC.zh) + '"><b lang="zh">' + esc(c.CHUC.zh) + '</b><span>' + esc(c.CHUC.py) + '</span><i>' + esc(c.CHUC.vn) + ' 🔊</i></button>' +
      '<p class="nt-nd-tien">🎄 Cây thông của thị trấn · <b>' + cay.n + ' món</b> · ' + esc(c.MOC_SANG[cay.cap].vn) + '</p>' +
      '<button type="button" class="nt-nd-dong" aria-label="Đóng">✕</button>';
    document.body.appendChild(d);
    document.body.classList.add('nt-nd-mo');
    $all('img', d).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    var cayEl = d.querySelector('.nt-nd-cay'), sau = d.querySelector('.nt-nd-sau'), tr = d.querySelector('.nt-nd-truoc');
    canhTuyet(sau, { mat: 2600, to: 0.75, toc: 0.7, sao: 4, gio: 4 });
    canhTuyet(tr, { mat: 9000, to: 1.6, toc: 1.25, gio: 10, lapTu: lapTrenCay(cayEl, tr), lapSo: 14 });
    function dong() {
      document.removeEventListener('keydown', phim, true);
      d.classList.add('dang-dong');
      setTimeout(function () { d.remove(); document.body.classList.remove('nt-nd-mo'); }, giam() ? 0 : 260);
      if (truoc && truoc.focus) try { truoc.focus(); } catch (e) { /* bo qua */ }
    }
    function phim(e) { if (e.key === 'Escape') { e.preventDefault(); dong(); } }
    document.addEventListener('keydown', phim, true);
    d.addEventListener('click', function (e) {
      if (e.target.closest('.nt-nd-dong')) return dong();
      var chu = e.target.closest('.nt-nd-chu');
      if (chu) { N.doc(chu.getAttribute('data-doc')); return; }
      var g = e.target.closest('[data-ntt]');
      if (g) { var x = cay.ds[+g.getAttribute('data-ntt')], m = x && c.TT_TR[x.k]; if (m) N.bao('🎄 ' + (x.em ? 'Em' : tenNgan(x.ten)) + ' đã treo ' + m.vn.toLowerCase() + ' ' + m.zh + ' ' + m.py); return; }
      if (e.target === d || e.target.closest('.nt-nd-doi')) dong();
    });
    d.querySelector('.nt-nd-dong').focus();
    N.doc(c.CHUC.zh);
  }

  function veTt(r) {
    var tt = $('#ntThiTran'), noi = $('#ntNoelTt');
    if (!tt) return;
    if (!r || !r.cay || !cat()) { if (noi) noi.remove(); return; }
    if (!noi) {
      noi = document.createElement('section');
      noi.id = 'ntNoelTt';
      noi.className = 'nt-noel-tt';
      noi.setAttribute('aria-label', 'Cây thông Noel của thị trấn');
      var q = $('#ntTtQuang');
      tt.insertBefore(noi, q);
      noi.addEventListener('click', bamTt);
    }
    noi.innerHTML = '<canvas class="nt-ntt-tuyet" aria-hidden="true"></canvas>' + htmlTt(r);
    $all('img', noi).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    var cayEl = noi.querySelector('.nt-ntt-cay'), cv = noi.querySelector('.nt-ntt-tuyet');
    if (cayEl) {
      cayEl.setAttribute('role', 'button');
      cayEl.setAttribute('tabindex', '0');
      cayEl.setAttribute('aria-label', 'Xem cây thông lung linh');
      cayEl.insertAdjacentHTML('beforeend', '<span class="nt-ntt-xem" aria-hidden="true">✨ Chạm để xem lung linh</span>');
      cayEl.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); moDem(); } });
    }
    canhTuyet(cv, { mat: 3800, to: 0.9, toc: 0.8, sao: 2, gio: 5, lapTu: cayEl ? lapTrenCay(cayEl, cv) : null, lapSo: 6 });
    bayQuanhCay(noi);
  }
  function bamTt(e) {
    var b = e.target.closest('[data-noel-treo]');
    if (b) return treoTt(b);
    var g = e.target.closest('[data-ntt]');
    if (g && TT.d) {
      var x = TT.d.cay.ds[+g.getAttribute('data-ntt')], m = x && cat().TT_TR[x.k];
      if (m) N.bao('🎄 ' + (x.em ? 'Em' : tenNgan(x.ten)) + ' đã treo ' + m.vn.toLowerCase() + ' ' + m.zh + ' ' + m.py);
      return;
    }
    if (e.target.closest('.nt-ntt-cay')) moDem();
  }
  function treoTt(b) {
    if (TT.dang) return;
    var k = b.getAttribute('data-noel-treo'), m = cat().TT_TR[k];
    TT.dang = true;
    b.disabled = true;
    N.goi('/api/farm/noel/treo', { k: k }).then(function (r) {
      TT.dang = false;
      if (r.st) N.nhanTrangThai(r.st);
      TT.d = Object.assign({}, TT.d, { cay: r.cay });
      TT.luc = Date.now();
      veTt(TT.d);
      N.tieng('mua');
      N.doc(m.zh);
      N.bao('🎄 Em đã treo ' + m.vn.toLowerCase() + ' ' + m.zh + ' lên cây thông thị trấn!' + (r.gia ? ' (−' + r.gia + ' xu)' : ' (miễn phí hôm nay)') + ' +' + r.xp + ' kinh nghiệm');
      var moi = $('#ntNoelTt [data-ntt="' + (r.cay.n - 1) + '"]');
      if (moi && N.fx && !giam()) N.fx.mung(moi);
    }, function (err) { TT.dang = false; b.disabled = false; N.bao(err.message, 'loi'); });
  }
  N.veNoelTt = function (r) {
    if (!mua() || !r || !r.lop) { var cu = $('#ntNoelTt'); if (cu) cu.remove(); return; }
    var lop = r.lopId || '';
    if (TT.d && TT.lop === lop && Date.now() - TT.luc < 20000) return veTt(TT.d);
    N.goi('/api/farm/noel/cay' + (r.cuaEm || !lop ? '' : '?lop=' + encodeURIComponent(lop))).then(function (kq) {
      TT.d = kq; TT.lop = lop; TT.luc = Date.now();
      if (!$('#ntThiTran').hidden) veTt(kq);
    }, function () { /* bo qua: thi tran van hien binh thuong */ });
  };

  /* ---------------- giao dien mua le: tuyet, day den, mu, bang chao ---------------- */
  var daDung = false;
  function dayDen() {
    var el = $('#ntNoelDay');
    if (!el) return;
    var W = Math.max(320, innerWidth), buoc = innerWidth < 640 ? 54 : 72, n = Math.ceil(W / buoc), h = '';
    var d = 'M0 4';
    for (var i = 0; i < n; i++) d += 'Q' + (i * buoc + buoc / 2) + ' 20 ' + ((i + 1) * buoc) + ' 4';
    h += '<path d="' + d + '" class="nt-noel-day-day"/>';
    for (var j = 0; j < n; j++) {
      [0.3, 0.7].forEach(function (t, s) {
        var x = j * buoc + t * buoc, y = 4 + 32 * t * (1 - t) * 1;
        h += '<g class="nt-noel-day-b m' + ((j * 2 + s) % 5) + '" style="animation-delay:-' + r1(((j * 2 + s) % 4) * 0.4) + 's"><rect x="' + r1(x - 2.2) + '" y="' + r1(y - 1) + '" width="4.4" height="3.6" rx="1" fill="#55606b"/>' +
          '<ellipse cx="' + r1(x) + '" cy="' + r1(y + 6) + '" rx="3.6" ry="5" fill="' + MAU_DEN[(j * 2 + s) % MAU_DEN.length] + '"/></g>';
      });
    }
    el.innerHTML = '<svg width="' + W + '" height="30" viewBox="0 0 ' + W + ' 30" aria-hidden="true">' + h + '</svg>';
  }
  function dung() {
    if (daDung) return;
    daDung = true;
    var tuyet = document.createElement('div');
    tuyet.id = 'ntNoelTuyet';
    tuyet.className = 'nt-noel-tuyet';
    tuyet.setAttribute('aria-hidden', 'true');
    var h = '';
    for (var s = 0; s < 48; s++) { // 2026-11-18: day hon, to hon cho de thay (co giao: "sao may toi khong co tuyet")
      var to = 4 + (s * 7) % 8;
      h += '<i class="nt-tuyet-hat' + (s % 5 === 0 ? ' bong-tuyet' : '') + '" style="left:' + ((s * 37) % 100) + '%;width:' + to + 'px;height:' + to + 'px;--lac:' + (10 + (s * 5) % 22) + 'px;animation-duration:' + (10 + (s * 3) % 9) + 's,' + (2.6 + (s % 4) * 0.6) + 's;animation-delay:-' + ((s * 1.7) % 16).toFixed(1) + 's,-' + (s % 3) + 's">' + (s % 5 === 0 ? '❄' : '') + '</i>';
    }
    tuyet.innerHTML = h;
    document.body.appendChild(tuyet);
    var dd = document.createElement('div');
    dd.id = 'ntNoelDay';
    dd.className = 'nt-noel-day';
    dd.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dd);
    dayDen();
    var hen = null;
    window.addEventListener('resize', function () { clearTimeout(hen); hen = setTimeout(dayDen, 200); });
  }
  function mu() {
    var lv = $('#ntLv');
    if (lv && !lv.querySelector('.nt-noel-mu')) lv.insertAdjacentHTML('beforeend', '<img class="nt-noel-mu" src="' + N.anh('noel-mu') + '" alt="" draggable="false" aria-hidden="true">');
  }
  function bangChao() {
    var an = '';
    try { an = localStorage.getItem('hyv_noel_an') || ''; } catch (e) { an = ''; }
    if (an === String(namMua()) || $('#ntNoelBan')) return;
    var b = document.createElement('div');
    b.id = 'ntNoelBan';
    b.className = 'nt-noel-ban';
    b.setAttribute('role', 'status');
    b.innerHTML = '<span class="nt-noel-ban-cay" aria-hidden="true">' + N.img(K) + '</span>' +
      '<div class="nt-noel-ban-chu"><b>Mùa Noel đến rồi!</b> <button type="button" class="nt-noel-ban-zh" data-doc="圣诞快乐！"><span lang="zh">圣诞快乐！</span> Shèngdàn kuàilè!</button>' +
      '<small>Mua cây thông, treo ngôi sao, nơ, quả châu — và cùng lớp trang trí cây thông của thị trấn.</small>' +
      '<span class="nt-noel-ban-nut"><button type="button" class="nt-nut nt-nut-nho" data-noel-ban="mua">🎄 Mua cây thông</button><button type="button" class="nt-nut nt-nut-nho" data-noel-ban="tt">🏘 Cây thông thị trấn</button></span></div>' +
      '<button type="button" class="nt-noel-ban-dong" data-noel-ban="dong" aria-label="Đóng lời chào mùa Noel">✕</button>';
    document.body.appendChild(b);
    b.addEventListener('click', function (e) {
      var x = e.target.closest('[data-noel-ban]');
      if (!x) return;
      var k = x.getAttribute('data-noel-ban');
      try { localStorage.setItem('hyv_noel_an', String(namMua())); } catch (er) { /* bo qua */ }
      b.remove();
      if (k === 'mua') { N.dongThiTran(); if (S.tham) N.veNha(); N.moBang('cuahang', 'tt'); }
      if (k === 'tt') { var t = document.querySelector('[data-mo="thitran"]'); if (t) t.click(); }
    });
  }
  function nutTuyet() {
    var hud = $('.nt-hud');
    document.body.classList.toggle('tuyet-tat', !tuyetBat());
    if (!hud || $('#ntNoelNutTuyet')) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.id = 'ntNoelNutTuyet';
    b.className = 'nt-chip nt-chip-nhac nt-noel-nut-tuyet';
    function ve() {
      var bat = tuyetBat();
      b.textContent = '❄';
      b.classList.toggle('tat', !bat);
      b.setAttribute('aria-pressed', bat ? 'true' : 'false');
      b.setAttribute('aria-label', bat ? 'Tắt tuyết rơi' : 'Bật tuyết rơi');
      b.title = b.getAttribute('aria-label');
    }
    b.addEventListener('click', function () {
      try { localStorage.setItem('hyv_noel_tuyet', tuyetBat() ? '0' : '1'); } catch (e) { /* bo qua */ }
      document.body.classList.toggle('tuyet-tat', !tuyetBat());
      ve();
      N.bao(tuyetBat() ? '❄ Đã bật tuyết rơi' : 'Đã tắt tuyết rơi');
    });
    var nhac = hud.querySelector('.nt-chip-nhac');
    if (nhac && nhac.parentNode === hud) hud.insertBefore(b, nhac); else hud.appendChild(b);
    ve();
  }
  function apDung() {
    var on = mua();
    document.body.classList.toggle('nt-noel', on);
    if (on) nutTuyet(); else { var nt = $('#ntNoelNutTuyet'); if (nt) nt.remove(); }
    if (!on) { var bn = $('#ntNoelBan'); if (bn) bn.remove(); return; }
    dung();
    mu();
    bangChao();
    batOngGia();
  }
  N.sau.push(apDung);
  if (S.st) apDung();
})();
