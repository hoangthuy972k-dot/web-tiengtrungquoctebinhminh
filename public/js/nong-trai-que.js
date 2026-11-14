/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — VUNG QUE & GOC NHIN NGHIENG (2026-11, "muc 2", 2.5D, khong WebGL)
   · Goc nhin 🏝 Nghieng: mat dat (#ntDat: co, o ruong, duong) nam tren mat phang nghieng = phep chieu truc giao
     (x giu nguyen, y * c, c = cos ~52°) bang 1 transform 2D scaleY -> cham / keo tha tinh nguoc rat de, may yeu van muot.
     Do vat dung thang (.nt-dung keo dan nguoc chieu doc), xep sau theo hang, co bong elip mem duoi chan.
   · Ruong nam giua 1 vung que: doi co nhap nho, rung thong + nui xa + troi o phia tren, bui hoa trang, da, cay nho,
     loi da cuoi mau kem, ao sen nho. Ve 1 lan bang SVG (tinh), chi vai phan tu nho chuyen dong (transform/opacity).
   · Mo rong dat -> khoang ruong da khai hoang to ra giua vung que (hieu ung "dat no rong" lan dau).
   · Nang theo gio Viet Nam: bong ngan buoi trua, dai buoi sang / chieu, chieu muon vang ruc, toi = hoang hon nhe (KHONG toi).
     Thu tren may local: ?gio=17 ; may yeu: ?mayyeu=1.
   · Goc nhin ▦ Phang = nong trai kieu cu (khong ve vung que). Doi trong "⋯ Thêm" → Góc nhìn, luu theo may.
   · Gio qua trong bui cay canh ruong: nhat 1 lan / ngay (may chu: a='chai', +3 xu).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$;
  var V = '#2b1d3a';
  var NG_C = 0.62; // he so nen hang (cos goc nghieng ~52°)

  /* ---------------- so ngau nhien tat dinh ---------------- */
  function bam(s) {
    var h = 2166136261;
    s = String(s || '');
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function f2(n) { return (Math.round(n * 100) / 100).toString(); }
  function idEm() { try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return (a && a.user && a.user.id) || ''; } catch (e) { return ''; } }

  /* ---------------- hinh mau (symbol) cho vung que: ve 1 lan, dung lai bang <use> ----------------
     Anh sang tu goc tren trai: mat trai sang, mat phai toi; vien dam #2b1d3a. Goc (0,0) = chan do vat. */
  function kyHieu(id) {
    return '<defs>' +
      '<radialGradient id="' + id + 'gt" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#9be36a"/><stop offset=".6" stop-color="#5fb846"/><stop offset="1" stop-color="#3f9440"/></radialGradient>' +
      '<radialGradient id="' + id + 'gb" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#8fdc66"/><stop offset="1" stop-color="#4c9f3e"/></radialGradient>' +
      '<linearGradient id="' + id + 'gd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#eeeaf4"/><stop offset="1" stop-color="#a99fb8"/></linearGradient>' +
      '<linearGradient id="' + id + 'gp" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5cb56a"/><stop offset=".5" stop-color="#3f9a55"/><stop offset="1" stop-color="#2f7d48"/></linearGradient>' +
      '<linearGradient id="' + id + 'gx" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7fb99a"/><stop offset="1" stop-color="#5c9c80"/></linearGradient>' +
      '<radialGradient id="' + id + 'gn" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="#9fe4f5"/><stop offset=".7" stop-color="#58bde3"/><stop offset="1" stop-color="#3d9fcf"/></radialGradient>' +
      // cay thong (gan)
      '<g id="' + id + 'thong" stroke="' + V + '" stroke-width=".05" stroke-linejoin="round">' +
      '<path d="M-.07 0V-.28H.07V0Z" fill="#8a5a2b"/>' +
      '<path d="M0-1.62L.36-1.02H.22L.5-.56H.3L.58-.22H-.58L-.3-.56H-.5L-.22-1.02H-.36Z" fill="url(#' + id + 'gp)"/>' +
      '<path d="M0-1.5L-.12-1.08M-.1-.9L-.3-.62M-.1-.48L-.36-.28" fill="none" stroke="#8fd68c" stroke-width=".05" stroke-linecap="round"/></g>' +
      // cay thong xa (hang rung o chan troi: nhat, xanh lam nhe — phoi canh khi quyen)
      '<path id="' + id + 'thongxa" d="M0-1.5L.34-.95H.2L.48-.5H.28L.54-.18H-.54L-.28-.5H-.48L-.2-.95H-.34Z" fill="url(#' + id + 'gx)" stroke="#3d6b5c" stroke-width=".04" stroke-linejoin="round"/>' +
      // cay tan tron
      '<g id="' + id + 'cay" stroke="' + V + '" stroke-width=".05" stroke-linejoin="round">' +
      '<path d="M-.08 0Q-.06-.3-.1-.55H.1Q.06-.3.08 0Z" fill="#9a6a3a"/>' +
      '<circle cx="-.26" cy="-.72" r=".3" fill="url(#' + id + 'gt)"/><circle cx=".27" cy="-.7" r=".29" fill="url(#' + id + 'gt)"/>' +
      '<circle cx="0" cy="-.98" r=".36" fill="url(#' + id + 'gt)"/>' +
      '<path d="M-.2-1.12Q-.1-1.22.04-1.2" fill="none" stroke="#c9f59a" stroke-width=".06" stroke-linecap="round"/></g>' +
      // bui hoa trang
      '<g id="' + id + 'bui" stroke="' + V + '" stroke-width=".045">' +
      '<circle cx="-.2" cy="-.14" r=".2" fill="url(#' + id + 'gb)"/><circle cx=".2" cy="-.14" r=".19" fill="url(#' + id + 'gb)"/><circle cx="0" cy="-.28" r=".24" fill="url(#' + id + 'gb)"/>' +
      '<g fill="#fff" stroke="none"><circle cx="-.12" cy="-.36" r=".045"/><circle cx=".08" cy="-.42" r=".04"/><circle cx=".2" cy="-.22" r=".045"/><circle cx="-.26" cy="-.16" r=".04"/><circle cx=".02" cy="-.2" r=".035"/></g>' +
      '<g fill="#ffe27a" stroke="none"><circle cx="-.12" cy="-.36" r=".015"/><circle cx=".2" cy="-.22" r=".015"/></g></g>' +
      // hon da
      '<g id="' + id + 'da"><path d="M-.32 0Q-.36-.2-.14-.28Q.12-.36.3-.16Q.38-.02.28 0Z" fill="url(#' + id + 'gd)" stroke="' + V + '" stroke-width=".045" stroke-linejoin="round"/>' +
      '<path d="M-.16-.2Q0-.26.12-.2" fill="none" stroke="#fff" stroke-width=".04" stroke-linecap="round"/></g>' +
      // khom hoa
      '<g id="' + id + 'hoa"><path d="M-.12 0L-.14-.12M0 0V-.16M.12 0L.15-.11" stroke="#4f9a3a" stroke-width=".035" fill="none"/>' +
      '<circle cx="-.14" cy="-.14" r=".06" fill="#ff8fb1" stroke="' + V + '" stroke-width=".02"/><circle cx="0" cy="-.19" r=".06" fill="#ffd54f" stroke="' + V + '" stroke-width=".02"/>' +
      '<circle cx=".15" cy="-.13" r=".055" fill="#fff" stroke="' + V + '" stroke-width=".02"/></g>' +
      // co lun
      '<path id="' + id + 'co" d="M-.14 0Q-.16-.12-.24-.2M-.04 0Q-.04-.16-.08-.28M.05 0Q.08-.15.16-.24M.13 0Q.18-.08.26-.12" fill="none" stroke="#4f9e37" stroke-width=".045" stroke-linecap="round"/>' +
      // la sen
      '<path id="' + id + 'sen" d="M0 0L.2-.05A.22 .12 0 1 1 .2 .05Z" fill="#6cc04a" stroke="' + V + '" stroke-width=".03"/>' +
      '</defs>';
  }
  function dung(id, ten, x, y, s, lat) {
    return '<use href="#' + id + ten + '" transform="translate(' + f2(x) + ' ' + f2(y) + ') scale(' + f2(s * (lat ? -1 : 1)) + ' ' + f2(s) + ')"/>';
  }
  function bong(x, y, rx, ry) { return '<ellipse class="q-bong" cx="' + f2(x) + '" cy="' + f2(y) + '" rx="' + f2(rx) + '" ry="' + f2(ry) + '"/>'; }
  // duong gap khuc muot (Catmull-Rom -> Bezier), mo
  function duongMo(ps) {
    var h = 'M' + f2(ps[0][0]) + ' ' + f2(ps[0][1]);
    for (var i = 0; i < ps.length - 1; i++) {
      var p0 = ps[Math.max(0, i - 1)], p1 = ps[i], p2 = ps[i + 1], p3 = ps[Math.min(ps.length - 1, i + 2)];
      h += 'C' + f2(p1[0] + (p2[0] - p0[0]) / 6) + ' ' + f2(p1[1] + (p2[1] - p0[1]) / 6) + ' ' + f2(p2[0] - (p3[0] - p1[0]) / 6) + ' ' + f2(p2[1] - (p3[1] - p1[1]) / 6) + ' ' + f2(p2[0]) + ' ' + f2(p2[1]);
    }
    return h;
  }

  /* ---------------- vung que quanh ruong (chi goc nghieng) ----------------
     Don vi: 1 = 1 o; toa do man hinh da chieu (X = x + ml, Y = y * c + mt). Ruong (W x H) nam o (ml, mt). */
  var dem = 0;
  function veQueSvg(W, H, seed, T) {
    var c = NG_C, r = rng(bam(seed + '|que'));
    var vpW = Math.max(320, innerWidth) / T, vpH = Math.max(480, innerHeight) / T;
    var ml = Math.max(3.5, Math.ceil((vpW - W) / 2) + 1.5), mt = 6.2;
    var mb = Math.max(3.6, Math.ceil(vpH - (mt + H * c)) + 1.5);
    var vw = W + ml * 2, vh = mt + H * c + mb;
    var id = 'ntq' + (++dem), h = kyHieu(id);
    var yTroi = 2.4, yRung = 3.35; // chan troi xa / chan hang thong
    // troi + nui xa + doi xa
    h += '<linearGradient id="' + id + 'tr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="q-troi1"/><stop offset="1" class="q-troi2"/></linearGradient>';
    h += '<linearGradient id="' + id + 'co" x1="0" y1="0" x2="0" y2="1"><stop offset="0" class="q-co1"/><stop offset=".35" class="q-co2"/><stop offset="1" class="q-co3"/></linearGradient>';
    h += '<linearGradient id="' + id + 'mu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef8ff" stop-opacity=".55"/><stop offset="1" stop-color="#eef8ff" stop-opacity="0"/></linearGradient>';
    h += '<rect class="q-troi" x="0" y="0" width="' + f2(vw) + '" height="' + f2(yRung + 0.4) + '" fill="url(#' + id + 'tr)"/>';
    function day(y0, bien, tan, pha) {
      var ps = [];
      for (var x = 0; x <= vw + 0.5; x += 0.5) ps.push(f2(x) + ' ' + f2(y0 - bien * (0.55 + 0.45 * Math.sin(x / tan + pha)) - bien * 0.3 * Math.sin(x / (tan * 0.37) + pha * 2)));
      return 'M0 ' + f2(vh) + 'L' + ps.join('L') + 'L' + f2(vw) + ' ' + f2(vh) + 'Z';
    }
    h += '<path class="q-nui1" d="' + day(yTroi, 1.3, 3.1, r() * 6) + '"/>';
    h += '<path class="q-nui2" d="' + day(yTroi + 0.55, 0.8, 2.2, r() * 6) + '"/>';
    // hang thong xa
    for (var x = -0.3; x < vw + 0.4; x += 0.42 + r() * 0.3) h += dung(id, 'thongxa', x, yRung - 0.05 + r() * 0.18, 0.75 + r() * 0.45, false);
    // dong co (tu chan rung xuong het) + doi nhap nho + suong mo khi quyen sat rung
    h += '<path class="q-dong" fill="url(#' + id + 'co)" d="' + day(yRung + 0.25, 0.22, 1.6, r() * 6) + '"/>';
    for (var d = 0; d < Math.round(vw / 3); d++) {
      var dx = r() * vw, dy = yRung + 0.8 + r() * (vh - yRung - 1), rx = 1.6 + r() * 2.4;
      h += '<ellipse class="' + (d % 3 ? 'q-doi1' : 'q-doi2') + '" cx="' + f2(dx) + '" cy="' + f2(dy) + '" rx="' + f2(rx) + '" ry="' + f2(rx * 0.32) + '"/>';
    }
    h += '<rect x="0" y="' + f2(yRung) + '" width="' + f2(vw) + '" height="1.8" fill="url(#' + id + 'mu)"/>';
    // vien loi da cuoi quanh khu ruong da khai hoang
    var m = 0.34, rx0 = ml - m, ry0 = mt - m * c, rw = W + 2 * m, rh = (H + 2 * m) * c;
    h += '<pattern id="' + id + 'soi" width=".36" height=".26" patternUnits="userSpaceOnUse"><rect width=".36" height=".26" class="q-soi-nen"/>' +
      '<ellipse cx=".09" cy=".07" rx=".08" ry=".055" class="q-soi"/><ellipse cx=".27" cy=".07" rx=".07" ry=".05" class="q-soi"/>' +
      '<ellipse cx=".0" cy=".2" rx=".07" ry=".05" class="q-soi"/><ellipse cx=".18" cy=".2" rx=".08" ry=".055" class="q-soi"/><ellipse cx=".36" cy=".2" rx=".07" ry=".05" class="q-soi"/></pattern>';
    h += '<rect class="q-vien-bong" x="' + f2(rx0 + 0.05) + '" y="' + f2(ry0 + 0.1) + '" width="' + f2(rw) + '" height="' + f2(rh) + '" rx=".35" ry=".25"/>';
    h += '<rect class="q-vien" fill="url(#' + id + 'soi)" x="' + f2(rx0) + '" y="' + f2(ry0) + '" width="' + f2(rw) + '" height="' + f2(rh) + '" rx=".35" ry=".25"/>';
    // loi di da cuoi uon luon: tu canh duoi ruong xuong cuoi vung que, 1 nhanh sang ben ao
    var bx = ml + W * (0.35 + r() * 0.3), by = mt + (H + m) * c;
    var loi = [[bx, by - 0.05]], yy = by;
    while (yy < vh + 0.5) { yy += 1.1; loi.push([bx + Math.sin(yy * 0.9 + r()) * 0.9, yy]); }
    var benTrai = r() < 0.5, aoX = benTrai ? Math.max(1.6, ml * 0.5) : vw - Math.max(1.6, ml * 0.5), aoY = mt + H * c * 0.55 + 0.6;
    if (ml < 3) aoY = mt + H * c + Math.min(mb * 0.55, 2.4);
    var nhanh = [[benTrai ? ml - m : ml + W + m, mt + H * c * 0.5], [(benTrai ? ml - m : ml + W + m) + (aoX - (benTrai ? ml - m : ml + W + m)) * 0.5, mt + H * c * 0.5 + 0.35], [aoX + (benTrai ? 0.9 : -0.9), aoY]];
    [loi, nhanh].forEach(function (ps) {
      var dd = duongMo(ps);
      h += '<path class="q-loi-vien" d="' + dd + '"/><path class="q-loi" d="' + dd + '"/><path class="q-loi-da" d="' + dd + '"/>';
    });
    // ao sen nho trong dong co (lun xuong: bo dat toi o mep tren, nuoc sang dan vao giua)
    var ar = 0.85 + r() * 0.35;
    h += '<ellipse class="q-ao-bo" cx="' + f2(aoX) + '" cy="' + f2(aoY + 0.05) + '" rx="' + f2(ar + 0.16) + '" ry="' + f2((ar + 0.16) * c) + '"/>';
    h += '<ellipse class="q-ao-lun" cx="' + f2(aoX) + '" cy="' + f2(aoY) + '" rx="' + f2(ar) + '" ry="' + f2(ar * c) + '"/>';
    h += '<ellipse fill="url(#' + id + 'gn)" stroke="' + V + '" stroke-width=".04" cx="' + f2(aoX) + '" cy="' + f2(aoY + 0.07) + '" rx="' + f2(ar - 0.06) + '" ry="' + f2((ar - 0.06) * c - 0.05) + '"/>';
    h += '<path class="q-ao-sang" d="M' + f2(aoX - ar * 0.5) + ' ' + f2(aoY) + 'q' + f2(ar * 0.25) + ' -.08 ' + f2(ar * 0.5) + ' 0"/>';
    for (var s = 0; s < 4; s++) {
      var g = r() * Math.PI * 2, kc = r() * ar * 0.6;
      h += '<use href="#' + id + 'sen" transform="translate(' + f2(aoX + Math.cos(g) * kc) + ' ' + f2(aoY + 0.07 + Math.sin(g) * kc * c) + ') rotate(' + Math.round(r() * 360) + ') scale(.8 .55)"/>';
    }
    h += '<circle cx="' + f2(aoX + ar * 0.2) + '" cy="' + f2(aoY + 0.05) + '" r=".05" fill="#ff8fb1" stroke="' + V + '" stroke-width=".02"/>';
    var aoDa = [[-0.95, 0.1], [0.9, -0.05], [0.55, 0.6]];
    aoDa.forEach(function (q) { h += dung(id, 'da', aoX + q[0] * ar, aoY + q[1] * ar * c + 0.12, 0.55, q[0] > 0); });
    // rai bui hoa, cay, da, hoa, co quanh ruong (sap theo Y de cai gan de len cai xa)
    var ds = [], buoc = 0.95;
    function xaRuong(X, Y) {
      var dx2 = Math.max(rx0 - X, 0, X - (rx0 + rw)), dy2 = Math.max(ry0 - Y, 0, Y - (ry0 + rh)) / c;
      return Math.hypot(dx2, dy2);
    }
    function xaLoi(X, Y, ps) { return ps.reduce(function (mn, p) { return Math.min(mn, Math.hypot(p[0] - X, (p[1] - Y) / c)); }, 99); }
    for (var gy = yRung + 0.6; gy < vh - 0.2; gy += buoc * c) {
      for (var gx = 0.3; gx < vw - 0.2; gx += buoc) {
        var X = gx + (r() - 0.5) * 0.8, Y = gy + (r() - 0.5) * 0.5, kc2 = xaRuong(X, Y), u = r();
        if (kc2 < 0.55 || xaLoi(X, Y, loi) < 0.75 || xaLoi(X, Y, nhanh) < 0.7 || Math.hypot(X - aoX, (Y - aoY) / c) < ar + 0.6) continue;
        // gan ruong day hon, xa thua dan; gan chan rung nhieu thong
        var mat = Y < yRung + 1.5 ? 0.55 : kc2 < 2.2 ? 0.42 : 0.2;
        if (u > mat) continue;
        var v = r(), ten;
        if (Y < yRung + 1.5) ten = v < 0.6 ? 'thong' : v < 0.85 ? 'cay' : 'bui';
        else ten = v < 0.34 ? 'bui' : v < 0.5 ? 'cay' : v < 0.58 ? 'thong' : v < 0.72 ? 'da' : v < 0.86 ? 'hoa' : 'co';
        ds.push({ x: X, y: Y, t: ten, s: ten === 'cay' ? 0.85 + r() * 0.5 : ten === 'thong' ? 0.8 + r() * 0.55 : 0.8 + r() * 0.5, l: r() < 0.5 });
        if (ds.length > 90) break;
      }
      if (ds.length > 90) break;
    }
    ds.sort(function (a, b) { return a.y - b.y; });
    ds.forEach(function (o) {
      var bs = o.t === 'cay' ? 0.42 : o.t === 'thong' ? 0.4 : o.t === 'bui' ? 0.34 : o.t === 'da' ? 0.3 : 0;
      if (bs) h += bong(o.x + 0.12 * o.s, o.y + 0.02, bs * o.s, bs * o.s * 0.35);
      h += dung(id, o.t, o.x, o.y, o.s, o.l);
    });
    // co lun / hoa nho rai sat vien ruong
    for (var k = 0; k < Math.round((W + H) * 0.9); k++) {
      var canh = r(), tX, tY;
      if (canh < 0.5) { tX = rx0 + r() * rw; tY = canh < 0.25 ? ry0 - 0.05 - r() * 0.12 : ry0 + rh + 0.06 + r() * 0.2; }
      else { tY = ry0 + r() * rh; tX = canh < 0.75 ? rx0 - 0.12 - r() * 0.3 : rx0 + rw + 0.12 + r() * 0.3; }
      if (xaLoi(tX, tY, loi) < 0.5 || xaLoi(tX, tY, nhanh) < 0.5) continue;
      h += dung(id, r() < 0.75 ? 'co' : 'hoa', tX, tY, 0.8 + r() * 0.4, r() < 0.5);
    }
    return {
      ml: ml, mt: mt, mb: mb, vw: vw, vh: vh, c: c,
      svg: '<svg class="nt-que-svg" viewBox="0 0 ' + f2(vw) + ' ' + f2(vh) + '" preserveAspectRatio="none" aria-hidden="true" focusable="false">' + h + '</svg>',
    };
  }

  /* ---------------- ve vung que (sau moi lan ve ban do) ---------------- */
  var QUE = { key: '', g: null, chu: '' };
  function veQue() {
    var dl = N.duLieuBanDo(), que = $('#ntQue'), nen = $('#ntQueNen');
    if (!dl || !dl.kich || !que || !nen) return;
    var chu = S.tham ? S.tham.id : idEm();
    if (!S.ng) {
      // goc phang = kieu cu: go het vung que (lop tren dao nam trong .nt-que display:contents se phu ca man hinh)
      var tr = $('#ntQueTren');
      if (tr) tr.remove();
      if (nen.firstChild) nen.innerHTML = '';
      QUE.key = '';
      if (!S.tham) kiemNoRong(dl.dat, false);
      QUE.chu = chu;
      datGio();
      return;
    }
    var W = dl.kich.w, H = dl.kich.h, T = S.o;
    var key = W + 'x' + H + '|' + chu + '|' + T + '|' + Math.round(innerWidth / 40) + 'x' + Math.round(innerHeight / 40);
    que.style.setProperty('--o', T + 'px');
    if (key !== QUE.key) {
      var cu = QUE;
      var g = veQueSvg(W, H, chu, T);
      nen.innerHTML = g.svg;
      QUE = { key: key, g: g, chu: chu, w: W };
      que.style.setProperty('--q-l', g.ml);
      que.style.setProperty('--q-t', g.mt);
      que.style.setProperty('--q-b', g.mb);
      que.style.setProperty('--dat-h', H);
      veTrenQue();
      if (cu.g && cu.chu === chu && W > (cu.w || W) && !S.tham) noRong(dl.dat);
      else if (!S.tham) kiemNoRong(dl.dat, true);
    }
    datGio();
  }
  function khoaDat() { return 'hyv_nt_dao_dat_' + idEm(); }
  function kiemNoRong(dat, hieuUng) {
    if (dat == null) return;
    var cu = null;
    try { cu = localStorage.getItem(khoaDat()); } catch (e) { return; }
    if (cu === null || !hieuUng) { try { if (cu === null || +cu < dat) localStorage.setItem(khoaDat(), dat); } catch (e) { /* bo qua */ } return; }
    if (+cu < dat) noRong(dat);
  }
  function noRong(dat) {
    try { localStorage.setItem(khoaDat(), dat); } catch (e) { /* bo qua */ }
    var dt = $('#ntDat');
    dt.classList.remove('no'); void dt.offsetWidth; dt.classList.add('no');
    setTimeout(function () { dt.classList.remove('no'); }, 1400);
    setTimeout(function () { N.bao('🌾 Nông trại rộng hơn! 农场变大了 nóngchǎng biàn dà le — khu ruộng của em to ra rồi.'); N.doc('农场变大了'); }, 500);
    if (N.fx && N.fx.mung) { var r = dt.getBoundingClientRect(); setTimeout(function () { N.fx.mung({ x: r.left + r.width / 2, y: Math.max(120, r.top + 40) }); }, 300); }
  }
  // cuon de mep tren ruong nam ngay duoi thanh tren, nha / giua ruong o giua man hinh
  function canh() {
    var k = $('#ntKhung'), dat = $('#ntDat');
    if (!k || !dat) return;
    var kr = k.getBoundingClientRect(), dr = dat.getBoundingClientRect();
    var tren = dr.top - kr.top + k.scrollTop, trai = dr.left - kr.left + k.scrollLeft;
    var muc = innerWidth <= 640 ? 80 : 90;
    if (S.tham) muc = parseFloat(getComputedStyle(document.body).getPropertyValue('--tham-duoi')) || (innerWidth <= 640 ? 150 : 140);
    k.scrollTop = Math.max(0, tren - muc);
    var nha = dr.width > k.clientWidth ? dat.querySelector('.nt-vat.nt-k-nha') : null, tam = dr.width / 2;
    if (nha) { var nr = nha.getBoundingClientRect(); tam = nr.left - dr.left + nr.width / 2; }
    k.scrollLeft = Math.max(0, trai + tam - k.clientWidth / 2);
  }

  /* ---------------- lop tren vung que: bong may troi qua, may tren troi, dom dom chieu toi ---------------- */
  function veTrenQue() {
    if ($('#ntQueTren')) return;
    var el = document.createElement('div');
    el.id = 'ntQueTren'; el.className = 'nt-que-tren'; el.setAttribute('aria-hidden', 'true');
    var h = '<i class="q-may m1"></i><i class="q-may m2"></i><i class="q-may-bong b1"></i><i class="q-may-bong b2"></i>';
    for (var i = 0; i < 5; i++) h += '<i class="q-dom" style="left:' + (14 + i * 17) + '%;top:' + (34 + (i * 23) % 46) + '%;animation-delay:-' + f2(i * 1.3) + 's"></i>';
    el.innerHTML = h;
    $('#ntQue').appendChild(el);
  }

  /* ---------------- gio qua trong bui cay: 1 lan / ngay, may chu cong xu ---------------- */
  var THU = [
    ['你好，朋友！', 'Nǐ hǎo, péngyou!', 'Chào bạn!'],
    ['今天天气很好。', 'Jīntiān tiānqì hěn hǎo.', 'Hôm nay trời đẹp quá.'],
    ['今天也加油！', 'Jīntiān yě jiāyóu!', 'Hôm nay cũng cố lên nhé!'],
    ['我喜欢你的农场。', 'Wǒ xǐhuan nǐ de nóngchǎng.', 'Mình thích nông trại của bạn.'],
    ['多喝水！', 'Duō hē shuǐ!', 'Uống nhiều nước nhé!'],
    ['学习快乐！', 'Xuéxí kuàilè!', 'Học vui nhé!'],
    ['明天见！', 'Míngtiān jiàn!', 'Mai gặp nhé!'],
    ['天天向上！', 'Tiāntiān xiàngshàng!', 'Mỗi ngày tiến bộ một chút!'],
  ];
  var GIO_SVG = '<svg viewBox="0 0 40 40" aria-hidden="true" focusable="false"><g stroke="#2b1d3a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">' +
    '<path d="M9 18Q20 4 31 18" fill="none" stroke-width="3"/><path d="M9 18Q20 4 31 18" fill="none" stroke="#c98a4b" stroke-width="1.4"/>' +
    '<path d="M6 18H34L31 34Q20 37 9 34Z" fill="#d9a05b"/><path d="M8 24H32M9 29H31" fill="none" stroke="#a8692f"/>' +
    '<circle cx="15" cy="16" r="4" fill="#ff8fb1"/><circle cx="24" cy="15" r="4.5" fill="#ffd54f"/><circle cx="20" cy="18" r="3" fill="#fff"/></g></svg>';
  var GIO = { luc: Date.now() + 8000 + Math.random() * 17000, dang: false };
  function datGio() {
    var dat = $('#ntDat');
    if (!dat) return;
    var b = $('#ntGioQua');
    var duoc = !S.tham && S.st && S.st.chai === false && Date.now() >= GIO.luc && !GIO.dang;
    if (!duoc) { if (b) b.remove(); return; }
    if (!b) {
      b = document.createElement('button');
      b.type = 'button'; b.id = 'ntGioQua'; b.className = 'nt-gio-qua';
      b.setAttribute('aria-label', 'Giỏ quà giấu trong bụi cây — bấm để nhặt');
      b.title = 'Giỏ quà trong bụi cây — bấm để nhặt';
      b.innerHTML = '<span class="nt-gio-bui" aria-hidden="true"></span>' + GIO_SVG;
      b.addEventListener('click', nhatGio);
      b.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
      dat.appendChild(b);
    }
  }
  function nhatGio(e) {
    e.stopPropagation();
    var b = $('#ntGioQua');
    if (GIO.dang || !N.lam) return;
    GIO.dang = true;
    var thu = THU[Math.floor(Math.random() * THU.length)];
    N.lam({ a: 'chai' }, b).then(function (r) {
      N.tieng('xu');
      N.doc(thu[0]);
      N.moBangNho('<div class="nt-chuc nt-gio-thu"><span class="nt-gio-to" aria-hidden="true">🧺</span>' +
        '<h2>Giỏ quà trong bụi cây <span lang="zh">礼物篮</span></h2><p class="nt-cn-nho">lǐwù lán · có tấm thiệp nhỏ bên trong</p>' +
        '<button type="button" class="nt-gio-cau" data-doc="' + N.esc(thu[0]) + '"><b lang="zh">' + N.esc(thu[0]) + '</b><i>' + N.esc(thu[1]) + '</i><span>' + N.esc(thu[2]) + ' 🔊</span></button>' +
        '<p>Em nhặt được <b>+' + ((r.them && r.them.xu) || 3) + ' xu</b>. Mai quay lại ruộng tìm giỏ mới nhé!</p>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-dong>Cảm ơn! 谢谢</button></div></div>');
    }, function () { /* loi da bao */ }).then(function () { GIO.dang = false; datGio(); });
  }

  /* ---------------- buoi + nang theo gio Viet Nam (chi goc nghieng dung toi) ---------------- */
  function gioVn() {
    var q = /[?&]gio=(\d{1,2})(?:[.:](\d{1,2}))?/.exec(location.search);
    if (q && laLocal) return (+q[1] % 24) + (+(q[2] || 0)) / 60;
    var d = new Date((N.bayGio ? N.bayGio() : Date.now()) + 7 * 3600000);
    return d.getUTCHours() + d.getUTCMinutes() / 60;
  }
  var NANG = { k: '' };
  function apNang() {
    var h = gioVn(), k = String(Math.round(h * 4) / 4);
    if (k === NANG.k) return;
    NANG.k = k;
    var buoi = h >= 5 && h < 12 ? 'sang' : h >= 12 && h < 18 ? 'chieu' : 'toi';
    ['sang', 'chieu', 'toi'].forEach(function (x) { document.body.classList.toggle('nt-b-' + x, x === buoi); });
    document.body.classList.toggle('nt-b-vang', h >= 15.5 && h < 18.5);
    // bong: ngan buoi trua, dai buoi sang / chieu; huong luon tu tren trai -> xuong phai
    var x = h >= 5 && h < 19 ? Math.min(1, Math.abs(h - 12) / 6) : 0.8, L = 0.1 + 0.32 * x;
    var b = document.body.style;
    b.setProperty('--ng-bx', f2(L * 0.9));
    b.setProperty('--ng-by', f2(L * 0.32));
    b.setProperty('--ng-bl', f2(1 + x * 0.75));
  }

  /* ---------------- GOC NHIN: 🏝 Nghieng (2.5D) / ▦ Phang (kieu cu) ----------------
     localStorage hyv_nt_goc: 'nghieng' | 'phang' (em tu chon) | 'phang-tu' (may yeu, tu chuyen).
     Mac dinh Nghieng; may yeu (<= 2 nhan CPU, hoac khung hinh > 40 ms khi keo ban do) tu ve Phang + bao nho. */
  var GOC = { nut: null, cham: 0, ds: [], chay: false, t: 0, cuoi: 0 };
  var laLocal = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  function docGoc() { try { return localStorage.getItem('hyv_nt_goc') || ''; } catch (e) { return ''; } }
  function ghiGoc(v) { try { localStorage.setItem('hyv_nt_goc', v); } catch (e) { /* bo qua */ } }
  function mayYeu() {
    if (laLocal && /[?&]mayyeu=1/.test(location.search)) return true;
    return !!(navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
  }
  function datGoc(nghieng, giuCho) {
    var cu = !!S.ng;
    var giu = giuCho && cu && S.st ? giuTam() : null;
    S.ng = nghieng ? NG_C : 0;
    document.body.classList.toggle('nt-ng', !!nghieng);
    capNhatNutGoc();
    if (cu === !!nghieng || !S.st) return;
    QUE.key = '';
    N.dongNoi();
    N.veBanDo();
    if (giu) giu(); else if (nghieng) canh(); else { var k = $('#ntKhung'); k.scrollTop = 0; k.scrollLeft = (k.scrollWidth - k.clientWidth) / 2; }
  }
  function capNhatNutGoc() {
    var b = GOC.nut;
    if (!b) return;
    var ng = !!S.ng;
    b.querySelector('b').textContent = 'Góc nhìn: ' + (ng ? 'Nghiêng' : 'Phẳng');
    b.querySelector('small').textContent = ng ? 'nông trại nổi khối, có chiều sâu · chạm để đổi sang ▦ Phẳng' : 'nhìn thẳng từ trên xuống · chạm để đổi sang 🏡 Nghiêng';
    b.querySelector('.nt-them-emo').textContent = ng ? '🏡' : '▦';
    b.setAttribute('aria-pressed', ng ? 'true' : 'false');
  }
  function taoNutGoc() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || GOC.nut) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-them-o nt-them-goc'; b.id = 'ntGocNhin';
    b.innerHTML = '<span class="nt-them-emo" aria-hidden="true"></span><span class="nt-muc-chu"><b></b><small></small></span>';
    var sau = luoi.querySelector('[data-mo="kt-sotay"]');
    luoi.insertBefore(b, sau ? sau.nextSibling : null);
    GOC.nut = b;
    b.addEventListener('click', function () {
      var ng = !S.ng;
      ghiGoc(ng ? 'nghieng' : 'phang');
      datGoc(ng, true);
      N.bao(ng ? '🏡 Góc nhìn Nghiêng — nông trại nổi khối như thật!' : '▦ Góc nhìn Phẳng — nhìn thẳng từ trên xuống.');
    });
    capNhatNutGoc();
  }
  // giu diem dat dang o giua man hinh (phong to / thu nho / doi goc nhin)
  function giuTam() {
    var k = $('#ntKhung'), dat = $('#ntDat');
    if (!S.ng || !k || !dat) return null;
    var r = dat.getBoundingClientRect(), cx = innerWidth / 2, cy = innerHeight / 2;
    var tx = (cx - r.left) / S.o, ty = (cy - r.top) / N.hangPx();
    return function () {
      if (!S.ng) return;
      var r2 = $('#ntDat').getBoundingClientRect();
      k.scrollLeft += r2.left + tx * S.o - cx;
      k.scrollTop += r2.top + ty * N.hangPx() - cy;
    };
  }
  // do khung hinh khi keo / cuon ban do o goc nghieng: trung vi > 40 ms hai lan -> ve Phang
  function doKhung(t) {
    if (GOC.t) GOC.ds.push(t - GOC.t);
    GOC.t = t;
    if (!document.hidden && performance.now() - GOC.cuoi < 250) { requestAnimationFrame(doKhung); return; }
    GOC.chay = false; GOC.t = 0;
    xetKhung();
  }
  function xetKhung() {
    if (GOC.ds.length < 20) return;
    var ds = GOC.ds.slice().sort(function (a, b) { return a - b; }), giua = ds[Math.floor(ds.length / 2)];
    GOC.ds = [];
    if (giua > 40) GOC.cham++;
    else GOC.cham = Math.max(0, GOC.cham - 1);
    if (GOC.cham >= 2 && S.ng) tuVePhang();
  }
  function khiCuon() {
    if (!S.ng || docGoc() === 'nghieng' || document.hidden || !window.requestAnimationFrame) return;
    GOC.cuoi = performance.now();
    if (!GOC.chay) { GOC.chay = true; GOC.t = 0; requestAnimationFrame(doKhung); }
  }
  var BAO_YEU = 'nên nông trại dùng góc nhìn Phẳng cho mượt. Muốn xem góc Nghiêng: ⋯ Thêm → Góc nhìn.';
  function tuVePhang() {
    ghiGoc('phang-tu');
    datGoc(false, true);
    setTimeout(function () { N.bao('🐢 Máy hơi chậm ' + BAO_YEU); }, 600);
  }

  /* ---------------- khoi dong ---------------- */
  // Co giao (2026-11-14): mac dinh quay ve giao dien cu (Phang). Chi bat Nghieng khi em tu chon trong ⋯ Thêm → Góc nhìn.
  var chon = docGoc(), ngDau = chon === 'nghieng' && !mayYeu();
  S.ng = ngDau ? NG_C : 0;
  document.body.classList.toggle('nt-ng', ngDau);
  taoNutGoc();
  apNang();
  N.sauVe.push(veQue);
  var khung = $('#ntKhung');
  if (khung) khung.addEventListener('scroll', khiCuon, { passive: true });
  // nang doi theo gio; gio qua hien sau 8-25 giay
  setInterval(function () { if (!document.hidden) { apNang(); datGio(); } }, 5000);
  document.addEventListener('visibilitychange', function () { document.body.classList.toggle('nt-an-tab', document.hidden); });
  var henCo = 0;
  window.addEventListener('resize', function () {
    clearTimeout(henCo);
    henCo = setTimeout(function () { if (S.ng && S.st) { var giu = giuTam(); veQue(); if (giu) giu(); } }, 250);
  });
  // nong trai da ve truoc khi file nay chay: ve lai (goc nghieng can lop .nt-dung trong moi do vat)
  if (S.st) { if (S.ng) N.veBanDo(); else veQue(); }

  window.NTQue = {
    canh: canh, giuTam: giuTam, nghieng: function () { return !!S.ng; },
    // chi de thu: dua vao 30 khung hinh gia (ms) nhu khi keo ban do tren may cham
    _thuKhung: function (ms) { for (var i = 0; i < 30; i++) GOC.ds.push(ms); xetKhung(); return GOC.cham; },
  };
})();
