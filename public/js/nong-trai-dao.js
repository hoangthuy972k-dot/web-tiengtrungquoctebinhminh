/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — DAO CUA EM (2026-11, "muc 1": dao 2D phong cach rieng, khong 3D)
   · Luoi o ruong giu nguyen; phia sau la 1 hon dao hinh dang tu nhien: co (khop mau ruong),
     vien cat bo bien khuc khuyu, vach dat / da o mep duoi, quanh la bien.
   · Hinh dao sinh tat dinh tu kich thuoc dat + ma hoc sinh (moi dao hoi khac nhau),
     mua them dat -> dao to ra (co hieu ung "dao no rong" lan dau).
   · Bien song dong: song, bot song quanh bo (chi transform/opacity), thuyen buom, hai au, ca nhay,
     chai troi (bam nhat 1 lan / ngay, may chu kiem tra: a='chai').
   · Buoi trong ngay theo gio Viet Nam: sang / chieu am / toi (hoang hon nhe, KHONG toi).
     Thu tren may local: ?gio=19 (chi localhost).
   · Thi tran = quan dao: NTDao.daoNho(b) ve dao nho cho moi ban (dung trong loDat cua nong-trai.js).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$;

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

  /* ---------------- hinh dao ----------------
     Don vi: 1 = 1 o ruong; luoi nam o (0,0)-(W,H).
     Duong vien co = hinh chu nhat bo goc (luoi no ra G o, goc R) + nhieu (tong vai song sin tuan hoan + 1-3 "mui dat").
     Moi diem lay theo phap tuyen cua hinh chu nhat bo goc -> cac lop (co, cat, nuoc nong) khong bao gio cat nhau. */
  var G = 1.25, VACH = 0.55; // co no ra ngoai luoi; do cao vach dat (mep duoi)
  var KHO = {};
  function hinhDao(W, H, seedStr, chiTiet) {
    var key = W + 'x' + H + '|' + seedStr + '|' + chiTiet;
    if (KHO[key]) return KHO[key];
    if (Object.keys(KHO).length > 160) KHO = {};
    var r = rng(bam(seedStr + '|dao'));
    // dao lon: le co, do khuc khuyu, mui dat to theo (giu dang dao, khong thanh hinh chu nhat)
    var tl = Math.min(2.4, Math.max(1, (W + H) / 18)), Gk = G * tl;
    var R = Math.min(1.8 * tl, Math.min(W, H) / 2 + Gk - 0.2);
    var hw = W / 2 + Gk, hh = H / 2 + Gk, cx = W / 2, cy = H / 2, a = hw - R, b = hh - R, cung = Math.PI * R / 2;
    // cac doan: [do dai, ham(t 0..1) -> {x,y,nx,ny}]
    function thang(x0, y0, x1, y1, nx, ny) { return [Math.hypot(x1 - x0, y1 - y0), function (t) { return { x: x0 + (x1 - x0) * t, y: y0 + (y1 - y0) * t, nx: nx, ny: ny }; }]; }
    function vong(ox, oy, g0) { return [cung, function (t) { var g = g0 + t * Math.PI / 2; return { x: ox + R * Math.cos(g), y: oy + R * Math.sin(g), nx: Math.cos(g), ny: Math.sin(g) }; }]; }
    var doan = [
      thang(cx, cy - hh, cx + a, cy - hh, 0, -1), vong(cx + a, cy - b, -Math.PI / 2),
      thang(cx + hw, cy - b, cx + hw, cy + b, 1, 0), vong(cx + a, cy + b, 0),
      thang(cx + a, cy + hh, cx - a, cy + hh, 0, 1), vong(cx - a, cy + b, Math.PI / 2),
      thang(cx - hw, cy + b, cx - hw, cy - b, -1, 0), vong(cx - a, cy - b, Math.PI),
      thang(cx - a, cy - hh, cx, cy - hh, 0, -1),
    ];
    var L = doan.reduce(function (s, d) { return s + d[0]; }, 0);
    var n = Math.max(chiTiet < 1 ? 20 : 36, Math.min(chiTiet < 1 ? 36 : 84, Math.round(L * chiTiet)));
    function song(ds, h) { return ds.map(function (x) { return { f: x[0], a: x[1] * h * (0.7 + 0.6 * r()), p: r() * Math.PI * 2 }; }); }
    var sCo = song([[2, 0.2], [3, 0.16], [5, 0.09], [7, 0.05], [11, 0.03]], tl), sCat = song([[3, 0.14], [4, 0.1], [7, 0.06]], 0.8 + 0.2 * tl);
    var mui = [], soMui = 1 + Math.floor(r() * 3) + (tl > 1.4 ? 1 : 0);
    for (var m = 0; m < soMui; m++) mui.push({ s: r(), a: (0.45 + r() * 0.45) * tl, w: 0.022 + r() * 0.03 });
    function tong(ss, s) { return ss.reduce(function (v, x) { return v + x.a * Math.sin(2 * Math.PI * x.f * s + x.p); }, 0); }
    function nhoMui(s) {
      return mui.reduce(function (v, x) { var d = Math.abs(s - x.s); d = Math.min(d, 1 - d); return v + x.a * Math.exp(-(d * d) / (2 * x.w * x.w)); }, 0);
    }
    var goc = [], co = [], cat = [];
    for (var k = 0; k < n; k++) {
      var s = k / n, u = s * L, i = 0;
      while (i < doan.length - 1 && u > doan[i][0]) { u -= doan[i][0]; i++; }
      var p = doan[i][1](Math.min(1, u / doan[i][0]));
      goc.push(p);
      co.push(Math.max(-0.4 * tl, tong(sCo, s)) + nhoMui(s));
      cat.push(Math.max(0.45, Math.min(1.05 + 0.3 * (tl - 1), 0.72 + 0.15 * (tl - 1) + tong(sCat, s))) + VACH * Math.max(0, p.ny));
    }
    function lop(them) {
      return goc.map(function (p, j) { var d = them(j); return { x: p.x + p.nx * d, y: p.y + p.ny * d, nx: p.nx, ny: p.ny }; });
    }
    var d = {
      W: W, H: H, n: n, G: Gk, tl: tl, goc: goc, co: co, cat: cat,
      lCo: lop(function (j) { return co[j]; }),
      lBo: lop(function (j) { return co[j] + cat[j]; }),
      lBot: lop(function (j) { return co[j] + cat[j] + 0.16; }),
      lNong: lop(function (j) { return co[j] + cat[j] + 0.6; }),
    };
    // khung bao (ca vung bien nong + cho chai troi) -> le cua khung dao
    var bien = lop(function (j) { return co[j] + cat[j] + 1.05; });
    var x0 = 0, y0 = 0, x1 = W, y1 = H;
    bien.forEach(function (q) { x0 = Math.min(x0, q.x); y0 = Math.min(y0, q.y); x1 = Math.max(x1, q.x); y1 = Math.max(y1, q.y); });
    d.le = { t: Math.ceil(-y0 * 4) / 4, l: Math.ceil(-x0 * 4) / 4, r: Math.ceil((x1 - W) * 4) / 4, b: Math.ceil((y1 - H) * 4) / 4 };
    d.vw = W + d.le.l + d.le.r;
    d.vh = H + d.le.t + d.le.b;
    d.seed = seedStr;
    KHO[key] = d;
    return d;
  }
  // Duong cong kin muot (Catmull-Rom -> Bezier bac 3)
  function duong(ps) {
    var n = ps.length, h = 'M' + f2(ps[0].x) + ' ' + f2(ps[0].y);
    for (var i = 0; i < n; i++) {
      var p0 = ps[(i - 1 + n) % n], p1 = ps[i], p2 = ps[(i + 1) % n], p3 = ps[(i + 2) % n];
      h += 'C' + f2(p1.x + (p2.x - p0.x) / 6) + ' ' + f2(p1.y + (p2.y - p0.y) / 6) + ' ' + f2(p2.x - (p3.x - p1.x) / 6) + ' ' + f2(p2.y - (p3.y - p1.y) / 6) + ' ' + f2(p2.x) + ' ' + f2(p2.y);
    }
    return h + 'Z';
  }
  // khoang cach tu 1 diem toi luoi (0 neu nam trong)
  function xaLuoi(d, x, y) {
    var dx = Math.max(0 - x, 0, x - d.W), dy = Math.max(0 - y, 0, y - d.H);
    return Math.hypot(dx, dy);
  }

  /* ---------------- do trang tri tren dao (ve 1 lan, nam trong SVG) ---------------- */
  var V = '#2b1d3a';
  function cayDua(x, y, s, lat) {
    return '<g transform="translate(' + f2(x) + ' ' + f2(y) + ') scale(' + f2(s * (lat ? -1 : 1)) + ' ' + f2(s) + ')">' +
      '<path d="M0 0Q.16-.62-.04-1.3" fill="none" stroke="' + V + '" stroke-width=".25" stroke-linecap="round"/>' +
      '<path d="M0 0Q.16-.62-.04-1.3" fill="none" stroke="#b07a42" stroke-width=".13" stroke-linecap="round"/>' +
      '<g transform="translate(-.04 -1.3)" fill="#5cbf4f" stroke="' + V + '" stroke-width=".05" stroke-linejoin="round">' +
      '<path d="M0 0Q-.5-.42-.98.1Q-.45-.16 0 0Z"/><path d="M0 0Q.5-.42.98.1Q.45-.16 0 0Z"/>' +
      '<path d="M0 0Q-.32-.62-.74-.62Q-.3-.4 0 0Z"/><path d="M0 0Q.32-.62.74-.62Q.3-.4 0 0Z"/>' +
      '<circle cx="-.07" cy=".07" r=".09" fill="#8a5a2b"/><circle cx=".09" cy=".05" r=".09" fill="#8a5a2b"/></g></g>';
  }
  function bui(x, y, s) {
    return '<g transform="translate(' + f2(x) + ' ' + f2(y) + ') scale(' + f2(s) + ')" fill="#63b84a" stroke="' + V + '" stroke-width=".05">' +
      '<circle cx="-.22" cy="0" r=".25"/><circle cx=".21" cy="-.01" r=".24"/><circle cx="0" cy="-.17" r=".3"/>' +
      '<circle cx="-.08" cy="-.27" r=".05" fill="#ff8fb1" stroke="none"/><circle cx=".14" cy="-.12" r=".05" fill="#fff" stroke="none"/></g>';
  }
  function da(x, y, s, bot) {
    return '<g transform="translate(' + f2(x) + ' ' + f2(y) + ') scale(' + f2(s) + ')">' +
      (bot ? '<ellipse cx="0" cy=".12" rx=".52" ry=".13" fill="#fff" opacity=".85"/>' : '') +
      '<path d="M-.35.1Q-.38-.2-.1-.26Q.25-.32.36-.05Q.42.14.2.16Z" fill="#cfc6dc" stroke="' + V + '" stroke-width=".05"/>' +
      '<path d="M-.15-.16Q.05-.22.18-.12" fill="none" stroke="#fff" stroke-width=".05" stroke-linecap="round"/></g>';
  }
  function hoa(x, y) {
    return '<g transform="translate(' + f2(x) + ' ' + f2(y) + ')"><circle r=".08" fill="#ff8fb1"/><circle cx=".2" cy=".08" r=".07" fill="#ffd54f"/><circle cx="-.16" cy=".12" r=".07" fill="#fff"/></g>';
  }
  function saoBien(x, y, g) {
    return '<path transform="translate(' + f2(x) + ' ' + f2(y) + ') rotate(' + Math.round(g) + ') scale(.15)" d="M0-1L.3-.3 1-.3.45.15.65.9 0 .45-.65.9-.45.15-1-.3-.3-.3Z" fill="#ff9f6b" stroke="' + V + '" stroke-width=".3" stroke-linejoin="round"/>';
  }
  function doTrangTri(d) {
    var r = rng(bam(d.seed + '|trang|' + d.W + 'x' + d.H)), h = '', n = d.n, dem = 0;
    var buoc = Math.max(3, Math.floor(n / (8 * d.tl)));
    for (var k = Math.floor(r() * buoc); k < n && dem < Math.round(8 * d.tl); k += buoc + Math.floor(r() * 2)) {
      var g = d.goc[k], c = d.lCo[k];
      // giua mep luoi va mep co
      var lui = (d.G + d.co[k]) * 0.5, x = c.x - g.nx * lui, y = c.y - g.ny * lui;
      if (xaLuoi(d, x, y) < 0.42) continue;
      if (g.ny < -0.35 && r() < 0.75) h += cayDua(x, y, 0.75 + r() * 0.25, r() < 0.5);
      else if (g.ny > 0.35) h += r() < 0.6 ? hoa(x, y) : bui(x, y - 0.05, 0.75);
      else h += r() < 0.55 ? bui(x, y, 0.7 + r() * 0.25) : r() < 0.5 ? da(x, y, 0.8, false) : hoa(x, y);
      dem++;
    }
    // bo bien: sao bien / vo so; ngoai bien: 1-2 hon da co bot song
    for (var j = 0; j < 3; j++) {
      var kk = Math.floor(r() * n), gg = d.goc[kk], cc = d.lCo[kk], vach = VACH * Math.max(0, gg.ny);
      var dd = vach + (d.cat[kk] - vach) * 0.5;
      h += saoBien(cc.x + gg.nx * dd, cc.y + gg.ny * dd, r() * 70);
    }
    for (var q = 0; q < 2; q++) {
      var k2 = Math.floor(r() * n), g2 = d.goc[k2], b2 = d.lBo[k2];
      if (g2.ny > 0.5) continue; // phia duoi da co vach dat
      h += da(b2.x + g2.nx * 0.85, b2.y + g2.ny * 0.85, 0.7 + r() * 0.4, true);
    }
    return h;
  }

  /* ---------------- SVG dao ---------------- */
  var dem = 0;
  function svgDao(d, nho) {
    var id = 'ntdz' + (++dem);
    var co = duong(d.lCo);
    var h = '<svg class="nt-dao-svg" viewBox="0 0 ' + f2(d.vw) + ' ' + f2(d.vh) + '" preserveAspectRatio="none" aria-hidden="true" focusable="false">' +
      '<defs><path id="' + id + '" d="' + co + '"/></defs>' +
      '<g transform="translate(' + f2(d.le.l) + ' ' + f2(d.le.t) + ')" stroke-linejoin="round">' +
      '<path class="dz-nong" d="' + duong(d.lNong) + '"/>' +
      (nho ? '' : '<path class="dz-bot" d="' + duong(d.lBot) + '"/>') +
      '<path class="dz-cat dz-vien" d="' + duong(d.lBo) + '"/>' +
      '<use class="dz-vach2 dz-vien" href="#' + id + '" transform="translate(0 ' + VACH + ')"/>' +
      (nho ? '' : '<use class="dz-vach" href="#' + id + '" transform="translate(0 ' + f2(VACH * 0.5) + ')"/>') +
      '<use class="dz-co dz-vien" href="#' + id + '"/>' +
      (nho ? '' : doTrangTri(d)) +
      '</g></svg>';
    return h;
  }

  /* ---------------- dao tren nong trai (cua em / nha ban) ---------------- */
  var DAO = { key: '', d: null, boi: '', chuNha: '' };
  function idEm() { try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return (a && a.user && a.user.id) || ''; } catch (e) { return ''; } }
  function veDao() {
    var dl = N.duLieuBanDo(), dao = $('#ntDao'), nen = $('#ntDaoNen'), khung = $('#ntKhung');
    if (!dl || !dl.kich || !dao || !nen) return;
    var chu = S.tham ? S.tham.id : idEm();
    var W = dl.kich.w, H = dl.kich.h, key = W + 'x' + H + '|' + chu;
    var T = S.o;
    dao.style.setProperty('--o', T + 'px');
    if (key !== DAO.key) {
      var cu = DAO;
      var d = hinhDao(W, H, chu, 1.1);
      var bot = '', soBot = Math.max(6, Math.min(12, Math.round(d.n / 7)));
      for (var i = 0; i < soBot; i++) {
        var k = Math.floor((i + 0.5) * d.n / soBot), p = d.lBo[k];
        var g = Math.round(Math.atan2(p.nx, -p.ny) * 180 / Math.PI);
        bot += '<i class="nt-dao-bot" style="left:calc(var(--o) * ' + f2(p.x + d.le.l) + ');top:calc(var(--o) * ' + f2(p.y + d.le.t) + ');--g:' + g + 'deg;animation-delay:-' + f2((i * 1.37) % 4.2) + 's"></i>';
      }
      nen.innerHTML = svgDao(d, false) + bot;
      DAO = { key: key, d: d, boi: chu, chuNha: chu };
      ['t', 'r', 'b', 'l'].forEach(function (c) { dao.style.setProperty('--le-' + c, d.le[c]); });
      // dao vua no rong (cung chu nha, dat to hon): hieu ung + loi chuc (1 lan moi muc dat)
      if (cu.d && cu.boi === chu && W > cu.d.W && !S.tham) noRong(dl.dat);
      else if (!S.tham) kiemNoRong(dl.dat);
      datChai();
    }
    // le khung de luoi van o cho cu khi cuon (padding khung tru di phan dao)
    khung.style.setProperty('--dao-pt', (DAO.d.le.t * T) + 'px');
    khung.style.setProperty('--dao-pb', (DAO.d.le.b * T) + 'px');
    khung.style.setProperty('--dao-px', (Math.min(DAO.d.le.l, DAO.d.le.r) * T) + 'px');
    hienChai();
  }
  function khoaDat() { return 'hyv_nt_dao_dat_' + idEm(); }
  function kiemNoRong(dat) {
    if (dat == null) return;
    var cu = null;
    try { cu = localStorage.getItem(khoaDat()); } catch (e) { return; }
    if (cu === null) { try { localStorage.setItem(khoaDat(), dat); } catch (e) { /* bo qua */ } return; }
    if (+cu < dat) noRong(dat);
  }
  function noRong(dat) {
    try { localStorage.setItem(khoaDat(), dat); } catch (e) { /* bo qua */ }
    var dao = $('#ntDao');
    if (!dao) return;
    dao.classList.remove('no');
    void dao.offsetWidth;
    dao.classList.add('no');
    setTimeout(function () { dao.classList.remove('no'); }, 1400);
    setTimeout(function () { N.bao('🏝️ Đảo nở rộng! 岛变大了 dǎo biàn dà le — đảo của em to hơn rồi.'); N.doc('岛变大了'); }, 500);
    if (N.fx && N.fx.mung) { var r = $('#ntDat').getBoundingClientRect(); setTimeout(function () { N.fx.mung({ x: r.left + r.width / 2, y: Math.max(120, r.top + 40) }); }, 300); }
  }
  // Mo nong trai / sang nha ban: cuon de luoi o ruong o giua theo chieu ngang va mep tren luoi
  // nam ngay duoi thanh tren (nhu truoc khi co dao) — phan bien / bai cat phia tren cuon len la thay
  function canh() {
    var k = $('#ntKhung'), dat = $('#ntDat');
    if (!k || !dat) return;
    var kr = k.getBoundingClientRect(), dr = dat.getBoundingClientRect();
    var tren = dr.top - kr.top + k.scrollTop, trai = dr.left - kr.left + k.scrollLeft;
    var muc = innerWidth <= 640 ? 80 : 90;
    if (S.tham) muc = parseFloat(getComputedStyle(document.body).getPropertyValue('--tham-duoi')) || (innerWidth <= 640 ? 150 : 140);
    k.scrollTop = Math.max(0, tren - muc);
    // ruong rong hon man hinh (dien thoai, dat lon): lay ngoi nha lam tam de thay nha + nhan vat ngay
    var nha = dr.width > k.clientWidth ? dat.querySelector('.nt-vat.nt-k-nha') : null, tam = dr.width / 2;
    if (nha) { var nr = nha.getBoundingClientRect(); tam = nr.left - dr.left + nr.width / 2; }
    k.scrollLeft = Math.max(0, trai + tam - k.clientWidth / 2);
  }

  /* ---------------- chai troi: 1 lan / ngay, may chu cong xu ---------------- */
  var THU = [
    ['你好，朋友！', 'Nǐ hǎo, péngyou!', 'Chào bạn!'],
    ['大海很美。', 'Dàhǎi hěn měi.', 'Biển đẹp quá.'],
    ['今天也加油！', 'Jīntiān yě jiāyóu!', 'Hôm nay cũng cố lên nhé!'],
    ['我喜欢你的岛。', 'Wǒ xǐhuan nǐ de dǎo.', 'Mình thích hòn đảo của bạn.'],
    ['多喝水！', 'Duō hē shuǐ!', 'Uống nhiều nước nhé!'],
    ['学习快乐！', 'Xuéxí kuàilè!', 'Học vui nhé!'],
    ['明天见！', 'Míngtiān jiàn!', 'Mai gặp nhé!'],
    ['天天向上！', 'Tiāntiān xiàngshàng!', 'Mỗi ngày tiến bộ một chút!'],
  ];
  var CHAI = { luc: 0, dang: false };
  function datChai() {
    var b = $('#ntChai'), d = DAO.d;
    if (!b || !d) return;
    // phia ben phai dao (lech theo ma hoc sinh), noi trong vung nuoc nong ngoai bo
    var n = d.n, k = Math.floor(n * (0.2 + (bam(DAO.boi + 'chai') % 100) / 100 * 0.15)) % n;
    var g = d.goc[k], p = d.lBo[k], x = p.x + g.nx * 0.72 + d.le.l, y = p.y + g.ny * 0.72 + d.le.t;
    b.style.left = 'calc(var(--o) * ' + f2(x) + ')';
    b.style.top = 'calc(var(--o) * ' + f2(y) + ')';
  }
  function hienChai() {
    var b = $('#ntChai');
    if (!b) return;
    var duoc = !S.tham && S.st && S.st.chai === false && CHAI.luc && Date.now() >= CHAI.luc && !CHAI.dang;
    b.hidden = !duoc;
  }
  function nhatChai(e) {
    e.stopPropagation();
    var b = $('#ntChai');
    if (CHAI.dang || !N.lam) return;
    CHAI.dang = true;
    var thu = THU[Math.floor(Math.random() * THU.length)];
    N.lam({ a: 'chai' }, b).then(function (r) {
      b.hidden = true;
      N.tieng('xu');
      N.doc(thu[0]);
      N.moBangNho('<div class="nt-chuc nt-chai-thu"><span class="nt-chai-to" aria-hidden="true">🍾</span>' +
        '<h2>Thư trong chai <span lang="zh">瓶中信</span></h2><p class="nt-cn-nho">píngzhōng xìn · biển dạt vào đảo của em</p>' +
        '<button type="button" class="nt-chai-cau" data-doc="' + N.esc(thu[0]) + '"><b lang="zh">' + N.esc(thu[0]) + '</b><i>' + N.esc(thu[1]) + '</i><span>' + N.esc(thu[2]) + ' 🔊</span></button>' +
        '<p>Em nhặt được <b>+' + ((r.them && r.them.xu) || 3) + ' xu</b>. Mai biển lại dạt chai mới nhé!</p>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-dong>Cảm ơn biển! 谢谢</button></div></div>');
    }, function () { b.hidden = true; }).then(function () { CHAI.dang = false; });
  }

  /* ---------------- bien song dong ---------------- */
  var SVG_THUYEN = '<svg viewBox="0 0 80 70" aria-hidden="true"><g stroke="#2b1d3a" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round">' +
    '<path d="M40 6V50" fill="none"/><path d="M42 9L66 46H42Z" fill="#fff8ec"/><path d="M38 14L18 46H38Z" fill="#ff8a65"/>' +
    '<path d="M8 50H72L62 64H18Z" fill="#c98a4b"/><path d="M40 6L52 10L40 14" fill="#e5533d"/></g>' +
    '<path d="M14 58H66" stroke="#fff8ec" stroke-width="2" opacity=".7"/></svg>';
  var SVG_AU = '<svg viewBox="0 0 60 30" aria-hidden="true"><g stroke="#2b1d3a" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round">' +
    '<path class="au-canh" d="M30 16Q20 4 4 10Q18 12 30 18Q42 12 56 10Q40 4 30 16Z" fill="#fff"/>' +
    '<ellipse cx="30" cy="18" rx="7" ry="4" fill="#fff"/><path d="M36 17L41 18L36 19.5" fill="#ffc83d"/></g><circle cx="33" cy="16.8" r="1" fill="#2b1d3a"/></svg>';
  var SVG_CA = '<svg viewBox="0 0 40 24" aria-hidden="true"><path d="M6 12C12 3 26 3 31 10L38 5V19L31 14C26 21 12 21 6 12Z" fill="#ff9f43" stroke="#2b1d3a" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="11" r="1.6" fill="#2b1d3a"/></svg>';
  var BIEN = { ok: false, hen: {}, buoi: '' };
  function taoBien() {
    if (BIEN.ok) return;
    BIEN.ok = true;
    var b = document.createElement('div');
    b.id = 'ntBien'; b.className = 'nt-bien'; b.setAttribute('aria-hidden', 'true');
    var h = '';
    for (var i = 0; i < 9; i++) h += '<i class="nt-song" style="left:' + ((i * 37 + 6) % 92) + '%;top:' + (8 + (i * 29) % 84) + '%;animation-delay:-' + f2(i * 1.9) + 's;animation-duration:' + (7 + (i % 3) * 1.6) + 's"></i>';
    h += '<div class="nt-thuyen"><div class="nt-thuyen-than">' + SVG_THUYEN + '</div></div>';
    h += '<div class="nt-ca">' + SVG_CA + '</div><i class="nt-ca-bot"></i>';
    b.innerHTML = h;
    document.body.insertBefore(b, document.body.firstChild);
    var tren = document.createElement('div');
    tren.id = 'ntBienTren'; tren.className = 'nt-bien-tren'; tren.setAttribute('aria-hidden', 'true');
    tren.innerHTML = '<div class="nt-au a1">' + SVG_AU + '</div><div class="nt-au a2">' + SVG_AU + '</div>';
    document.body.appendChild(tren);
    var lop = document.createElement('div');
    lop.id = 'ntBuoiLop'; lop.className = 'nt-buoi-lop'; lop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(lop);
    // xong 1 luot thi go lop 'di' (khong tao them phan tu nao)
    [b.querySelector('.nt-thuyen'), b.querySelector('.nt-ca'), b.querySelector('.nt-ca-bot')].forEach(function (el) {
      el.addEventListener('animationend', function (e) { if (e.target === el) el.classList.remove('di'); });
    });
    // hai au: con thu 2 bay xong thi ca dan nghi (tat luon vo canh)
    tren.addEventListener('animationend', function (e) { if (e.target.classList && e.target.classList.contains('a2')) tren.classList.remove('di'); });
    var now = Date.now();
    BIEN.hen = { thuyen: now + 6000 + Math.random() * 14000, ca: now + 5000 + Math.random() * 8000, au: now + 9000 + Math.random() * 12000 };
    document.addEventListener('visibilitychange', function () { document.body.classList.toggle('nt-an-tab', document.hidden); });
  }
  function nenBan() { return !$('#ntThiTran').hidden || !$('#ntHoCau').hidden; }
  function chay(el) { el.classList.remove('di'); void el.offsetWidth; el.classList.add('di'); }
  // o bien con trong (khong nam tren dao) trong man hinh
  function choBien() {
    var dao = $('#ntDao');
    var r = dao ? dao.getBoundingClientRect() : null, m = S.o * 0.7;
    for (var t = 0; t < 6; t++) {
      var x = 30 + Math.random() * (innerWidth - 60), y = 110 + Math.random() * Math.max(40, innerHeight - 260);
      // khung dao da gom bai cat + vung nuoc nong; chi bo phan rìa bien ngoai cung (0,7 o)
      if (!r || x < r.left + m || x > r.right - m || y < r.top + m || y > r.bottom - m) return [x, y];
    }
    return null;
  }
  function nhipBien() {
    if (document.hidden || !BIEN.ok) return;
    var now = Date.now();
    apBuoi();
    hienChai();
    if (nenBan()) return;
    var b = $('#ntBien');
    if (now >= BIEN.hen.thuyen) {
      var th = b.querySelector('.nt-thuyen');
      th.style.top = (18 + Math.random() * 58) + '%';
      th.classList.toggle('nguoc', Math.random() < 0.5);
      chay(th);
      BIEN.hen.thuyen = now + 48000 + 50000 + Math.random() * 60000;
    }
    if (now >= BIEN.hen.ca) {
      var cho = choBien();
      if (cho) {
        var ca = b.querySelector('.nt-ca'), bt = b.querySelector('.nt-ca-bot');
        ca.style.left = bt.style.left = cho[0] + 'px';
        ca.style.top = bt.style.top = cho[1] + 'px';
        ca.classList.toggle('nguoc', Math.random() < 0.5);
        chay(ca); chay(bt);
      }
      BIEN.hen.ca = now + 12000 + Math.random() * 16000;
    }
    if (now >= BIEN.hen.au) {
      var tren = $('#ntBienTren');
      tren.style.setProperty('--au-y', (90 + Math.random() * Math.max(60, innerHeight * 0.4)) + 'px');
      tren.classList.toggle('nguoc', Math.random() < 0.5);
      chay(tren);
      BIEN.hen.au = now + 18000 + 30000 + Math.random() * 40000;
    }
  }

  /* ---------------- buoi trong ngay (gio Viet Nam) ---------------- */
  function gioVn() {
    var q = /[?&]gio=(\d{1,2})(?:[.:](\d{1,2}))?/.exec(location.search);
    if (q && /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) return (+q[1] % 24) + (+(q[2] || 0)) / 60;
    var d = new Date((N.bayGio ? N.bayGio() : Date.now()) + 7 * 3600000);
    return d.getUTCHours() + d.getUTCMinutes() / 60;
  }
  function buoiCua(h) { return h >= 5 && h < 12 ? 'sang' : h >= 12 && h < 18 ? 'chieu' : 'toi'; }
  function apBuoi() {
    var b = buoiCua(gioVn());
    if (b === BIEN.buoi) return;
    BIEN.buoi = b;
    ['sang', 'chieu', 'toi'].forEach(function (x) { document.body.classList.toggle('nt-b-' + x, x === b); });
  }

  /* ---------------- dao nho cho thi tran (quan dao) ---------------- */
  // Tra ve HTML: khung co ti le dung theo dao, SVG dao don gian + vai bieu tuong do vat cua ban
  function daoNho(b, opt) {
    opt = opt || {};
    // dao nho: 1 o cua dao nho = 3 o ruong that (bai cat, vach dat van ro khi ve nho), to nho van theo dat
    var K = 3, W = Math.max(3, b.kich.w / K), H = Math.max(2.5, b.kich.h / K), d = hinhDao(W, H, b.id, 0.5);
    var bieu = '';
    if (opt.mon && opt.mon.length) {
      bieu = opt.mon.map(function (m) {
        var x = (d.le.l + m.x / K) / d.vw * 100, y = (d.le.t + m.y / K) / d.vh * 100;
        return '<img class="nt-dn-mon' + (m.to ? ' to' : '') + '" src="' + m.src + '" alt="" loading="lazy" draggable="false" style="left:' + f2(x) + '%;top:' + f2(y) + '%">';
      }).join('');
    }
    // --gx/--gy/--gw/--gh: vi tri luoi (%) de dat nhan vat, co vo dich...
    var vt = '--gx:' + f2(d.le.l / d.vw * 100) + '%;--gy:' + f2(d.le.t / d.vh * 100) + '%;--gw:' + f2(W / d.vw * 100) + '%;--gh:' + f2(H / d.vh * 100) + '%';
    return '<span class="nt-dn" style="--vw:' + f2(d.vw) + ';aspect-ratio:' + f2(d.vw) + '/' + f2(d.vh) + ';' + vt + '">' + svgDao(d, true) + bieu +
      (opt.them || '') + '</span>';
  }
  // Lech nho tat dinh cho moi dao tren ban do (rai rac tu nhien)
  function lech(id) { var h = bam(id + 'lech'); return { x: (h % 21) - 10, y: ((h >> 8) % 17) - 8 }; }

  /* ---------------- khoi dong ---------------- */
  N.sauVe.push(veDao);
  taoBien();
  apBuoi();
  setInterval(nhipBien, 2000);
  var chai = $('#ntChai');
  if (chai) chai.addEventListener('click', nhatChai);
  // chai xuat hien sau 8-25 giay (moi lan vao nong trai)
  CHAI.luc = Date.now() + 8000 + Math.random() * 17000;
  if (S.st) veDao();

  window.NTDao = { daoNho: daoNho, lech: lech, canh: canh, hinhDao: hinhDao, buoi: function () { return BIEN.buoi; } };
})();
