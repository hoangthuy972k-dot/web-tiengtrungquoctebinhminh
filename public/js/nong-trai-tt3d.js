/* ══════════════════════════════════════════════════════════════════
   BAN DO THI TRAN 3D XOAY (2026-11, co giao: "cho xoay duoc ca tren thi tran ... sao cho chan that nhat")
   · Khi nong trai dang o che do 3D (S.ng), thi tran hien thanh 1 "dao dat noi" nhu ruong: cac lo dat (nong trai that
     cua tung ban, do vat dung thang) xep o ban co, giua la quang truong (cay thong Noel trong mua le / dinh, gieng),
     duong da giua cac lo, den long o nga tu, cay ven duong, cu dan di lai tren pho.
   · Cung phep chieu voi ruong (nong-trai-que.js): mat dat = scaleY(c) rotate(θ); do dung thang = rotate(-θ) scaleY(1/c)
     -> luon quay mat ve phia em. Goc xoay dung chung voi ruong (nut xoay canh nut 3D, giu de xoay, 2 ngon tay).
   · Thu tu truoc / sau: z-index theo do sau tren man hinh, tinh lai moi khi xoay.
   · Cham lo dat -> sang tham (data-lo, xu ly san trong nong-trai.js); cham cu dan -> nghe noi (data-dan);
     cham cay thong -> man "Dem Giang sinh" voi cay thong 3D.
   · Che do 2D: thi tran giu kieu danh sach cu.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N || !N.sauTt) return;
  var S = N.S, $ = N.$, esc = N.esc;
  var NV = window.NhanVat;
  var T3 = { r: null, dung: [], dan: [], W: 0, H: 0, hen: 0 };
  var VEN = ['tung', 'cay-dao', 'truc', 'chau-hoa', 'hoa-do', 'cay-cam', 'hoa-vang'];

  function c() { return (window.NTQue && NTQue.ngC) || 0.62; }
  function f1(n) { return Math.round(n * 10) / 10; }
  function laPhang(k) { return k === 'o' || k === 'duong' || (S.cat.TT[k] && S.cat.TT[k].phang); }
  function coThiTran() { return !$('#ntThiTran').hidden; }

  // do sau (px) cua diem chan (x, y) tren mat thi tran, nua be rong r: giong zSau cua ruong
  function sau(x, y, r) {
    var a = (S.ng && S.xoay ? S.xoay : 0) * Math.PI / 180, s = Math.sin(a), co = Math.cos(a);
    return x * s + y * co + r * (Math.abs(s) + Math.abs(co)) - (T3.W * Math.min(s, 0) + T3.H * Math.min(co, 0)) + 10;
  }
  function capNhatZ() {
    for (var i = 0; i < T3.dung.length; i++) { var d = T3.dung[i]; d.el.style.zIndex = Math.round(sau(d.x, d.y, d.r)) + (d.th || 0); }
    zDan();
  }
  // cu dan dang di: doc vi tri hien tai tu animation -> z theo cho dung that
  function zDan() {
    T3.dan.forEach(function (d) {
      var m = new DOMMatrix(getComputedStyle(d.el).transform);
      var x = d.x0 + (d.doc ? 0 : m.m41), y = d.y0 + (d.doc ? m.m42 : 0);
      d.el.style.zIndex = Math.round(sau(x, y, 0)) + 2;
    });
  }
  function datBien() {
    var g = S.ng ? S.xoay || 0 : 0;
    ['.tt3-mat', '.tt3-de'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      el.style.setProperty('--xoay', f1(g) + 'deg');
      el.style.setProperty('--xn', f1(-g) + 'deg');
    });
  }

  function ve(r) {
    var tt = $('#ntThiTran'), cu = $('#ntTt3');
    var bat = !!(S.ng && r && r.lop && r.ds && r.ds.length);
    document.body.classList.toggle('tt-3d', bat);
    if (!bat) { if (cu) cu.remove(); T3.dung = []; T3.dan = []; return; }
    T3.r = r;
    var ds = r.ds, n = ds.length + 1, cot = Math.max(2, Math.ceil(Math.sqrt(n))), hang = Math.ceil(n / cot);
    var LO = Math.round(Math.max(120, Math.min(230, S.o * 2.6))), DG = Math.round(LO * 0.34);
    var W = cot * LO + (cot + 1) * DG, H = hang * LO + (hang + 1) * DG, D = Math.sqrt(W * W + H * H), cc = c();
    T3.lo = S.o;
    T3.W = W; T3.H = H; T3.dung = []; T3.dan = [];
    var giua = Math.floor(hang / 2) * cot + Math.floor(cot / 2); // o quang truong
    var h = '', lo = 0, o3 = [];
    for (var i = 0; i < hang * cot; i++) {
      var cx = (i % cot), cy = Math.floor(i / cot), x = DG + cx * (LO + DG), y = DG + cy * (LO + DG);
      if (i === giua) { h += quang(x, y, LO); continue; }
      if (lo >= ds.length) { h += '<span class="tt3-trong" style="left:' + x + 'px;top:' + y + 'px;width:' + LO + 'px;height:' + LO + 'px"></span>'; continue; }
      h += loDat(ds[lo], lo, x, y, LO);
      lo++;
    }
    // den long o nga tu, cay ven duong
    for (var gy = 0; gy <= hang; gy++) for (var gx = 0; gx <= cot; gx++) {
      var nx = gx * (LO + DG) + DG / 2, ny = gy * (LO + DG) + DG / 2;
      if ((gx + gy) % 2 === 0) h += dung('<img src="' + N.anh('den-long') + '" alt="" draggable="false">', nx, ny, DG * 0.55, DG * 0.9, 'tt3-den');
      else h += dung('<img src="' + N.anh(VEN[(gx * 3 + gy) % VEN.length]) + '" alt="" draggable="false">', nx, ny, DG * 0.8, DG * 0.8, 'tt3-ven');
    }
    // cu dan di tren pho (ngang + doc)
    var dan = N.danTt ? N.danTt() : [];
    var soDan = Math.min(dan.length, 6);
    for (var k = 0; k < soDan; k++) {
      var doc = k % 2 === 1, duong = (k >> 1) % ((doc ? cot : hang) + 1);
      var x0 = doc ? duong * (LO + DG) + DG / 2 : -20, y0 = doc ? -20 : duong * (LO + DG) + DG / 2;
      var dai = (doc ? H : W) + 40, toc = 26 + (k * 7) % 14;
      h += '<button type="button" class="tt3-dan' + (doc ? ' doc' : '') + (k % 3 === 2 ? ' nguoc' : '') + '" data-dan="' + k + '" style="left:' + f1(x0) + 'px;top:' + f1(y0) + 'px;--dai:' + f1(dai) + 'px;animation-duration:' + toc + 's;animation-delay:-' + ((k * 11) % toc) + 's" aria-label="' + esc(dan[k].ban ? dan[k].ten : dan[k].vn || dan[k].ten) + ' — bấm để nghe nói">' +
        '<span class="tt3-dung tt3-dan-nv" style="--w:' + f1(DG * 0.62) + 'px">' + N.svgDan(dan[k].av, dan[k].id) + '<i>' + esc(dan[k].ten) + '</i></span></button>';
      T3.dan.push({ k: k, x0: x0, y0: y0, doc: doc });
    }
    var mt = D * cc / 2 - H / 2 + LO * 0.9, mb = D * cc / 2 - H / 2 + LO * 0.5, mx = (D - W) / 2 + DG;
    var html = '<div class="tt3-goi"><b>🧊 Thị trấn 3D</b> · kéo để xem quanh, giữ nút ⟲ ⟳ hoặc xoay 2 ngón tay để xoay · chạm lô đất để sang thăm</div>' +
      '<div class="tt3-que" style="--dg:' + DG + 'px;--xw:' + W + 'px;--xh:' + H + 'px;--xm-x:' + f1(mx) + 'px;--xm-t:' + f1(mt) + 'px;--xm-b:' + f1(mb) + 'px">' +
      '<div class="tt3-de-boc" aria-hidden="true"><div class="tt3-de"></div></div>' +
      '<div class="tt3-mat" style="width:' + W + 'px;height:' + H + 'px;--lo:' + LO + 'px;--dg:' + DG + 'px">' + h + '</div></div>';
    if (!cu) {
      cu = document.createElement('div');
      cu.id = 'ntTt3'; cu.className = 'tt3';
      var q = $('#ntTtQuang');
      tt.insertBefore(cu, q);
      if (window.NTQue && NTQue.ganVan) NTQue.ganVan(cu);
      ganKeo(cu);
      cu.addEventListener('click', function (e) {
        var cay = e.target.closest('[data-tt3-cay]');
        if (cay) { var b = document.querySelector('#ntNoelTt .nt-ntt-cay'); if (b) b.click(); }
      });
    }
    var cuon = cu.firstChild ? { l: cu.scrollLeft, t: cu.scrollTop, w: cu.scrollWidth, h: cu.scrollHeight } : null;
    cu.innerHTML = html;
    // gan lai phan tu cho danh sach z
    var els = cu.querySelectorAll('[data-z]');
    for (var j = 0; j < els.length; j++) {
      var p = els[j].getAttribute('data-z').split(',');
      T3.dung.push({ el: els[j], x: +p[0], y: +p[1], r: +p[2], th: +(p[3] || 0) });
    }
    T3.dan.forEach(function (d) { d.el = cu.querySelector('.tt3-dan[data-dan="' + d.k + '"]'); });
    T3.dan = T3.dan.filter(function (d) { return d.el; });
    cu.querySelectorAll('img').forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    datBien();
    capNhatZ();
    // giua ban do (lan dau) / giu cho cu
    requestAnimationFrame(function () {
      if (cuon && cuon.w) { cu.scrollLeft = cuon.l * cu.scrollWidth / cuon.w; cu.scrollTop = cuon.t * cu.scrollHeight / cuon.h; }
      else { cu.scrollLeft = (cu.scrollWidth - cu.clientWidth) / 2; cu.scrollTop = (cu.scrollHeight - cu.clientHeight) / 2; }
    });
    clearInterval(T3.hen);
    T3.hen = setInterval(function () { if (!document.hidden && coThiTran() && T3.dan.length) zDan(); }, 400);
  }
  // 1 vat dung thang: chan o (x, y) tren mat, rong w, cao h (px); th = cong them vao z (bien ten luon tren)
  // zc = [x, y, r]: diem tinh do sau rieng (tam + nua canh cua o vat) neu khac chan hinh
  function dung(noi, x, y, w, hh, cls, th, them, zc) {
    zc = zc || [x, y, w / 2];
    return '<span class="tt3-dung ' + (cls || '') + '" data-z="' + f1(zc[0]) + ',' + f1(zc[1]) + ',' + f1(zc[2]) + ',' + (th || 0) + '" style="left:' + f1(x - w / 2) + 'px;top:' + f1(y - hh) + 'px;width:' + f1(w) + 'px;height:' + f1(hh) + 'px"' + (them || '') + '>' + noi + '</span>';
  }
  function loDat(b, i, x, y, LO) {
    var h = '<button type="button" class="tt3-lo' + (b.la ? ' la' : '') + (b.co ? '' : ' trong') + '" data-lo="' + esc(b.id) + '" style="left:' + x + 'px;top:' + y + 'px;width:' + LO + 'px;height:' + LO + 'px" aria-label="Nông trại của ' + esc(b.ten) + '"></button>';
    var dd = '';
    if (b.co && b.kich && b.o) {
      // nong trai thu nho dat vua lo (giu ti le), do phang nam tren mat co, do khac dung thang
      var w = b.kich.w, hh = b.kich.h, o = (LO - 10) / Math.max(w, hh), ox = x + (LO - w * o) / 2, oy = y + (LO - hh * o) / 2;
      b.o.forEach(function (v) {
        var r = N.rong(v), t = N.trangThai(v), src = N.anh(t.hinh);
        if (laPhang(v.k)) {
          h += '<img class="tt3-phang" src="' + src + '" alt="" draggable="false" style="left:' + f1(ox + v.x * o) + 'px;top:' + f1(oy + v.y * o) + 'px;width:' + f1(r * o) + 'px;height:' + f1(r * o) + 'px">';
        } else {
          var fx = ox + (v.x + r / 2) * o, fy = oy + (v.y + r / 2) * o;
          dd += dung('<img src="' + src + '" alt="" draggable="false">', fx, fy + r * o * 0.31, r * o, r * o, 'tt3-vat', 0, '', [fx, fy, r * o / 2]);
        }
      });
    } else {
      h += '<span class="tt3-chu" style="left:' + x + 'px;top:' + (y + LO / 2 - 12) + 'px;width:' + LO + 'px">Đất trống</span>';
    }
    var av = NV ? NV.svg(b.av || NV.macDinh(b.id)) : '';
    dd += dung(av, x + LO * 0.16, y + LO * 0.94, LO * 0.2, LO * 0.32, 'tt3-nv');
    var huy = i < 3 && b.dep > 0 ? ['🥇', '🥈', '🥉'][i] + ' ' : '';
    dd += dung('<span class="tt3-bien-b"><b>' + huy + esc(window.NhanVat && NhanVat.tenNgan ? NhanVat.tenNgan(b.ten) : b.ten) + (b.la ? ' (em)' : '') + '</b><small>' + (b.co ? 'Cấp ' + b.lv + ' · đẹp ' + b.dep : 'Chưa mở') + '</small></span><i class="tt3-cot"></i>',
      x + LO * 0.5, y + LO * 0.02, LO * 0.9, LO * 0.34, 'tt3-bien', 6);
    return h + dd;
  }
  function quang(x, y, LO) {
    var h = '<span class="tt3-quang" style="left:' + x + 'px;top:' + y + 'px;width:' + LO + 'px;height:' + LO + 'px"></span>';
    var noel = document.body.classList.contains('nt-noel');
    if (noel) h += dung('<img src="' + N.anh('noel-cay-lon') + '" alt="" draggable="false"><span class="tt3-cay-xem">✨ Chạm để xem cây 3D</span>', x + LO / 2, y + LO * 0.62, LO * 0.8, LO * 0.96, 'tt3-cay', 0, ' data-tt3-cay role="button" tabindex="0" aria-label="Cây thông Noel của thị trấn — chạm để xem 3D"');
    else h += dung('<img src="' + N.anh('dinh') + '" alt="" draggable="false">', x + LO / 2, y + LO * 0.6, LO * 0.6, LO * 0.6, 'tt3-vat');
    h += dung('<img src="' + N.anh('gieng') + '" alt="" draggable="false">', x + LO * 0.18, y + LO * 0.85, LO * 0.22, LO * 0.22, 'tt3-vat');
    h += dung('<img src="' + N.anh('chau-hoa') + '" alt="" draggable="false">', x + LO * 0.85, y + LO * 0.86, LO * 0.18, LO * 0.18, 'tt3-vat');
    h += dung('<img src="' + N.anh('den-long') + '" alt="" draggable="false">', x + LO * 0.12, y + LO * 0.25, LO * 0.14, LO * 0.22, 'tt3-vat');
    h += dung('<img src="' + N.anh('den-long') + '" alt="" draggable="false">', x + LO * 0.88, y + LO * 0.25, LO * 0.14, LO * 0.22, 'tt3-vat');
    return h;
  }
  // chuot: keo de cuon ban do (dien thoai cuon tu nhien)
  function ganKeo(el) {
    var k = null;
    el.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      k = { x: e.clientX, y: e.clientY, l: el.scrollLeft, t: el.scrollTop, di: false };
    });
    window.addEventListener('pointermove', function (e) {
      if (!k) return;
      var dx = e.clientX - k.x, dy = e.clientY - k.y;
      if (!k.di && Math.abs(dx) + Math.abs(dy) > 8) { k.di = true; el.classList.add('dang-keo'); }
      if (k.di) { el.scrollLeft = k.l - dx; el.scrollTop = k.t - dy; }
    });
    window.addEventListener('pointerup', function () {
      if (!k) return;
      var da = k.di;
      k = null;
      el.classList.remove('dang-keo');
      if (da) { el._vuaKeo = true; setTimeout(function () { el._vuaKeo = false; }, 0); }
    });
    // vua keo cuon: chan cu cham (khong mo nong trai ban)
    el.addEventListener('click', function (e) { if (el._vuaKeo) { e.stopPropagation(); e.preventDefault(); } }, true);
  }

  N.sauTt.push(ve);
  N.sauXoay.push(function () { if (!$('#ntTt3')) return; datBien(); capNhatZ(); });
  // bat / tat 3D, phong to / thu nho khi dang o thi tran -> ve lai
  N.sauVe.push(function () {
    var r = N.thiTran();
    if (!coThiTran() || !r) return;
    var co = !!$('#ntTt3');
    if (co !== !!S.ng || (co && T3.lo !== S.o)) { T3.lo = S.o; ve(r); }
  });
})();
