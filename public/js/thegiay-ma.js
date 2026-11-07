/* The giay A/B/C/D — ma the va bo nhan dien (Che do lop hoc, lop-thegiay.js).
   Ma rieng cua trang, KHONG dung chung voi the-ma.js (The tra loi qua phong live).

   ---- Ma the ----
   Luoi 7x7 o vuong: vien ngoai 1 o mau den (24 o), ben trong 5x5 o du lieu.
   O du lieu (r, c), r = hang, c = cot (0..4), bit thu i = r*5 + c, gia tri
   (ma >>> (24 - i)) & 1, 1 = o den.
   - 4 goc cua luoi 5x5 la mau dinh huong (khong doi xung): tren-trai = den,
     tren-phai = den, duoi-phai = trang, duoi-trai = trang -> canh co hai goc
     den la canh A.
   - 21 o con lai (theo thu tu doc) = 6 bit so the (1..60, bit cao truoc) +
     15 bit chan le: bit chan le j = XOR cac bit so the chon boi mat na KT[j]
     (bit k cua mat na <-> bit so the thu k tinh tu bit cao).
   Bo ma nay (60 so x 4 huong xoay) cach nhau toi thieu 6 bit (kiem tra trong
   tools/test-thegiay.js): doc sai toi 2 o van nhan dung so the va dung huong,
   sai 3 o thi bi loai chu khong doc nham.
   Huong chuan: canh tren = A, phai = B, duoi = C, trai = D. Hoc sinh xoay the
   cho chu cai minh chon len tren; canh nao huong len tren trong anh la dap an.

   ---- Nhan dien (khong dung thu vien ngoai) ----
   anh xam -> nguong thich nghi 2 tang (anh tich phan) -> danh nhan thanh phan
   lien thong (4 lan can, union-find) -> loc theo kich thuoc / do dac ->
   bao loi bien ngoai -> tu giac dien tich lon nhat -> tinh chinh 4 canh theo
   do sang (cat muc 50%, khop duong thang) -> phep chieu phoi canh -> lay mau
   7x7 o + vanh trang ben ngoai -> nguong Otsu -> thu 4 huong, doi chieu bang
   ma -> loc trung.
   Chay duoc trong trang, Web Worker (thegiay-worker.js) va Node (kiem thu). */
(function (g) {
  'use strict';

  var SO_TOI_DA = 60;
  var KT = [23, 24, 55, 50, 41, 63, 10, 13, 47, 36, 52, 33, 12, 52, 54];
  var GOC = { 0: 1, 4: 1, 20: 0, 24: 0 };
  var VT = [];
  for (var i0 = 0; i0 < 25; i0++) if (!(i0 in GOC)) VT.push(i0);

  function demBit(x) {
    x = x - ((x >>> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >>> 2) & 0x33333333);
    return (((x + (x >>> 4)) & 0x0F0F0F0F) * 0x01010101) >>> 24;
  }
  // So the 1..60 -> 25 bit
  function maHoa(id) {
    var bit = [], k, j;
    for (k = 0; k < 6; k++) bit.push((id >> (5 - k)) & 1);
    for (j = 0; j < 15; j++) {
      var x = 0;
      for (k = 0; k < 6; k++) if ((KT[j] >> k) & 1) x ^= bit[k];
      bit.push(x);
    }
    var m = 0;
    for (var p in GOC) if (GOC[p]) m |= 1 << (24 - p);
    VT.forEach(function (pos, t) { if (bit[t]) m |= 1 << (24 - pos); });
    return m >>> 0;
  }
  // Xoay luoi 5x5 90 do theo chieu kim dong ho: moi[r][c] = cu[4-c][r]
  function xoay(m) {
    var out = 0;
    for (var r = 0; r < 5; r++) for (var c = 0; c < 5; c++) {
      if ((m >>> (24 - ((4 - c) * 5 + r))) & 1) out |= 1 << (24 - (r * 5 + c));
    }
    return out >>> 0;
  }
  var BANG_M = [], BANG_ID = [], BANG_K = [];
  for (var id0 = 1; id0 <= SO_TOI_DA; id0++) {
    var x0 = maHoa(id0);
    for (var k0 = 0; k0 < 4; k0++) { BANG_M.push(x0); BANG_ID.push(id0); BANG_K.push(k0); x0 = xoay(x0); }
  }
  // bits: 25 bit doc tu anh (hang 0 / cot 0 o goc q0). Tra { id, k, loi, loi2 } hoac null.
  // Luoi doc duoc = ma chuan xoay k lan (chieu kim dong ho).
  function giai(bits, toiDa) {
    if (toiDa == null) toiDa = 2;
    var b1 = -1, l1 = 99, l2 = 99;
    for (var i = 0; i < BANG_M.length; i++) {
      var l = demBit((bits ^ BANG_M[i]) >>> 0);
      if (l < l1) { l2 = l1; l1 = l; b1 = i; } else if (l < l2) l2 = l;
    }
    if (b1 < 0 || l1 > toiDa || l2 - l1 < 2) return null;
    return { id: BANG_ID[b1], k: BANG_K[b1], loi: l1, loi2: l2 };
  }
  // Luoi 7x7 (49 so, hang truoc), 1 = o den — dung de in va ve the thu
  function luoi(id) {
    var m = maHoa(id), out = [];
    for (var r = 0; r < 7; r++) for (var c = 0; c < 7; c++) {
      if (r === 0 || c === 0 || r === 6 || c === 6) out.push(1);
      else out.push((m >>> (24 - ((r - 1) * 5 + (c - 1)))) & 1);
    }
    return out;
  }

  /* ---------------- Ve the (in) ----------------
     The vuong canh 7 + 2*LE o: ma 7x7 o giua, chu A/B/C/D nho o 4 canh (moi chu
     doc xuoi khi canh do o tren), so the nho o goc tren-trai. Khong in ten. */
  var LE = 1.1;
  function svgThe(id, opt) {
    opt = opt || {};
    var S = 7 + 2 * LE, o = LE, l = luoi(id), d = '';
    for (var r = 0; r < 7; r++) for (var c = 0; c < 7; c++) {
      if (l[r * 7 + c]) d += 'M' + (o + c) + ' ' + (o + r) + 'h1.02v1.02h-1.02z';
    }
    var cx = S / 2, kc = LE - 0.8, fs = 0.36;
    var chu = [['A', cx, kc, 0], ['B', S - kc, cx, 90], ['C', cx, S - kc, 180], ['D', kc, cx, 270]].map(function (a) {
      return '<text x="0" y="0" transform="translate(' + a[1] + ' ' + a[2] + ') rotate(' + a[3] + ')" text-anchor="middle" dominant-baseline="central" ' +
        'font-size="' + fs + '" font-weight="800" fill="#111">' + a[0] + '</text>';
    }).join('');
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + S + ' ' + S + '" class="' + (opt.cls || '') + '" role="img" aria-label="Thẻ số ' + id + '">' +
      '<rect width="' + S + '" height="' + S + '" fill="#fff"/>' +
      '<path d="' + d + '" fill="#000" shape-rendering="crispEdges"/>' +
      '<g font-family="Be Vietnam Pro, Arial, sans-serif">' + chu +
      '<text x="0.28" y="0.42" font-size="0.3" font-weight="700" fill="#444">' + id + '</text></g></svg>';
  }

  /* ---------------- Anh xam ---------------- */
  function xam(rgba, w, h, out) {
    var n = w * h, g2 = out || new Uint8Array(n);
    for (var i = 0, j = 0; i < n; i++, j += 4) g2[i] = (rgba[j] * 77 + rgba[j + 1] * 150 + rgba[j + 2] * 29) >> 8;
    return g2;
  }

  /* ---------------- Nhan dien ---------------- */
  // Bo nho tam dung lai giua cac khung hinh cung kich thuoc
  var buf = { n: 0 };
  function datBuf(w, h) {
    var n = w * h;
    if (buf.n === n && buf.w === w) return;
    buf = { n: n, w: w, tp: new Uint32Array((w + 1) * (h + 1)), toi: new Uint8Array(n), nhan: new Int32Array(n), cha: new Int32Array((n >> 1) + 4) };
  }

  function phatHien(gr, w, h, opt) {
    opt = opt || {};
    var t0 = Date.now();
    var minPx = opt.minPx || 12, toiDa = opt.toiDa == null ? 2 : opt.toiDa, lyDo = opt.lyDo || null;
    function bo(k) { if (lyDo) lyDo[k] = (lyDo[k] || 0) + 1; return null; }
    datBuf(w, h);
    var W1 = w + 1, tp = buf.tp, toi = buf.toi, nhan = buf.nhan, cha = buf.cha;
    var x, y, i;
    // anh tich phan
    for (y = 0; y < h; y++) {
      var hs = 0, o1 = (y + 1) * W1, o0 = y * W1, gy = y * w;
      for (x = 0; x < w; x++) { hs += gr[gy + x]; tp[o1 + x + 1] = tp[o0 + x + 1] + hs; }
    }
    // nguong 3 tang: cua so nho (net manh) + lon + rat lon (vung den day khi the o rat gan)
    var r1 = Math.max(4, Math.round(Math.min(w, h) / 45)), r2 = r1 * 4, r3 = Math.max(r2 * 2, Math.round(Math.min(w, h) / 3.5));
    for (y = 0; y < h; y++) {
      var ya = Math.max(0, y - r1), yb = Math.min(h, y + r1 + 1), Ya = Math.max(0, y - r2), Yb = Math.min(h, y + r2 + 1);
      var ra = ya * W1, rb = yb * W1, Ra = Ya * W1, Rb = Yb * W1, hy = yb - ya, Hy = Yb - Ya;
      for (x = 0; x < w; x++) {
        var xa = Math.max(0, x - r1), xb = Math.min(w, x + r1 + 1);
        var v = gr[y * w + x];
        var m1 = (tp[rb + xb] - tp[rb + xa] - tp[ra + xb] + tp[ra + xa]) / ((xb - xa) * hy);
        var la = 0;
        if (m1 - v > 9 + m1 * 0.1) la = 1;
        else {
          var Xa = Math.max(0, x - r2), Xb = Math.min(w, x + r2 + 1);
          var m2 = (tp[Rb + Xb] - tp[Rb + Xa] - tp[Ra + Xb] + tp[Ra + Xa]) / ((Xb - Xa) * Hy);
          if (m2 - v > 14 + m2 * 0.16) la = 1;
          else if (v < 150) {
            var Ya3 = Math.max(0, y - r3), Yb3 = Math.min(h, y + r3 + 1), Xa3 = Math.max(0, x - r3), Xb3 = Math.min(w, x + r3 + 1);
            var m3 = (tp[Yb3 * W1 + Xb3] - tp[Yb3 * W1 + Xa3] - tp[Ya3 * W1 + Xb3] + tp[Ya3 * W1 + Xa3]) / ((Xb3 - Xa3) * (Yb3 - Ya3));
            if (m3 - v > 18 + m3 * 0.2) la = 1;
          }
        }
        toi[y * w + x] = la;
      }
    }
    // danh nhan thanh phan lien thong (4 lan can)
    var soNhan = 0;
    function goc(a) { while (cha[a] !== a) { cha[a] = cha[cha[a]]; a = cha[a]; } return a; }
    for (y = 0; y < h; y++) {
      for (x = 0; x < w; x++) {
        i = y * w + x;
        if (!toi[i]) { nhan[i] = 0; continue; }
        var tr = y ? nhan[i - w] : 0, ta = x ? nhan[i - 1] : 0;
        if (!tr && !ta) { soNhan++; cha[soNhan] = soNhan; nhan[i] = soNhan; }
        else if (tr && ta && tr !== ta) {
          var a = goc(tr), b = goc(ta);
          if (a !== b) { if (a < b) cha[b] = a; else cha[a] = b; }
          nhan[i] = a < b ? a : b;
        } else nhan[i] = tr || ta;
      }
    }
    var gon = new Int32Array(soNhan + 1), soTp = 0;
    for (i = 1; i <= soNhan; i++) { var rt = goc(i); if (rt === i) gon[i] = ++soTp; }
    for (i = 1; i <= soNhan; i++) gon[i] = gon[goc(i)];
    var dt = new Int32Array(soTp + 1), x1 = new Int32Array(soTp + 1).fill(w), x2 = new Int32Array(soTp + 1).fill(-1),
      y1 = new Int32Array(soTp + 1).fill(h), y2 = new Int32Array(soTp + 1).fill(-1);
    for (y = 0; y < h; y++) {
      for (x = 0; x < w; x++) {
        i = y * w + x;
        var L = nhan[i];
        if (!L) continue;
        L = gon[L]; nhan[i] = L;
        dt[L]++;
        if (x < x1[L]) x1[L] = x; if (x > x2[L]) x2[L] = x;
        if (y < y1[L]) y1[L] = y; if (y > y2[L]) y2[L] = y;
      }
    }
    // loc ung vien
    var maxPx = Math.min(w, h) * 0.95, kq = [], soUv = 0;
    for (L = 1; L <= soTp; L++) {
      var bw = x2[L] - x1[L] + 1, bh = y2[L] - y1[L] + 1, lon = Math.max(bw, bh), nho = Math.min(bw, bh);
      if (lon < minPx || lon > maxPx || nho * 3 < lon) continue;
      var dac = dt[L] / (bw * bh);
      if (dac < 0.14 || dac > 0.92) continue;
      soUv++;
      var r = docThe(gr, w, h, L, x1[L], y1[L], x2[L], y2[L], toiDa);
      if (r) kq.push(r);
    }
    // loc trung: cung so the giu ban it loi nhat; hai khung chong nhau giu ban it loi
    kq.sort(function (p, q) { return p.loi - q.loi || q.co - p.co; });
    var giu = [], thay = {};
    kq.forEach(function (r) {
      if (thay[r.id]) return;
      for (var j = 0; j < giu.length; j++) {
        var dx = giu[j].tam[0] - r.tam[0], dy = giu[j].tam[1] - r.tam[1];
        if (dx * dx + dy * dy < Math.pow(Math.max(giu[j].co, r.co) * 0.5, 2)) return;
      }
      thay[r.id] = 1;
      giu.push(r);
    });
    if (opt.thongKe) opt.thongKe.ms = Date.now() - t0, opt.thongKe.tp = soTp, opt.thongKe.uv = soUv;
    return giu;

    function docThe(gr, w, h, L, X1, Y1, X2, Y2, toiDa) {
      // diem bien ngoai: dau / cuoi moi hang va moi cot
      var px = [], py = [], xx, yy;
      for (yy = Y1; yy <= Y2; yy++) {
        var o = yy * w, a = -1, b = -1;
        for (xx = X1; xx <= X2; xx++) if (nhan[o + xx] === L) { a = xx; break; }
        if (a < 0) continue;
        for (xx = X2; xx >= a; xx--) if (nhan[o + xx] === L) { b = xx; break; }
        px.push(a, b + 1); py.push(yy + 0.5, yy + 0.5);
      }
      for (xx = X1; xx <= X2; xx++) {
        var c = -1, d = -1;
        for (yy = Y1; yy <= Y2; yy++) if (nhan[yy * w + xx] === L) { c = yy; break; }
        if (c < 0) continue;
        for (yy = Y2; yy >= c; yy--) if (nhan[yy * w + xx] === L) { d = yy; break; }
        px.push(xx + 0.5, xx + 0.5); py.push(c, d + 1);
      }
      var hull = baoLoi(px, py);
      if (hull.length < 4) return bo('bao');
      var q = tuGiacLonNhat(hull);
      if (!q) return bo('bao');
      var dtq = dienTich(q), dth = dienTich(hull);
      if (dtq < dth * (dth < 900 ? 0.72 : 0.86)) return bo('khongVuong');
      if (!hinhOn(q, minPx)) return bo('hinh');
      // tinh chinh 2 lan theo do sang
      var q2 = tinhChinh(gr, w, h, q);
      if (q2) { q = q2; q2 = tinhChinh(gr, w, h, q); if (q2) q = q2; }
      if (!hinhOn(q, minPx * 0.8)) return bo('hinh2');
      return docLuoi(gr, w, h, q, toiDa, bo);
    }
  }

  function dienTich(p) {
    var s = 0, n = p.length;
    for (var i = 0; i < n; i++) { var a = p[i], b = p[(i + 1) % n]; s += a[0] * b[1] - b[0] * a[1]; }
    return s / 2;
  }
  // bao loi (monotone chain), tra cac dinh theo chieu kim dong ho trong anh (y huong xuong)
  function baoLoi(px, py) {
    var n = px.length, idx = [];
    for (var i = 0; i < n; i++) idx.push(i);
    idx.sort(function (a, b) { return px[a] - px[b] || py[a] - py[b]; });
    function cr(o, a, b) { return (px[a] - px[o]) * (py[b] - py[o]) - (py[a] - py[o]) * (px[b] - px[o]); }
    var lo = [], up = [], k;
    for (k = 0; k < n; k++) { var p = idx[k]; while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
    for (k = n - 1; k >= 0; k--) { var q = idx[k]; while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
    lo.pop(); up.pop();
    var h = lo.concat(up).map(function (j) { return [px[j], py[j]]; });
    // monotone chain cho thu tu nguoc chieu trong toa do y-len; dao lai cho dien tich duong (y-xuong)
    if (dienTich(h) < 0) h.reverse();
    return h;
  }
  function tamGiac(a, b, c) { return Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])) / 2; }
  // 4 dinh cua bao loi tao tu giac dien tich lon nhat (O(n^2), con tro xoay)
  function tuGiacLonNhat(H) {
    var n = H.length;
    if (n === 4) return H.slice();
    if (n < 4) return null;
    var best = -1, kq = null;
    function P(i, o) { return H[(i + o) % n]; }
    for (var i = 0; i < n; i++) {
      // vi tri tuong doi so voi i: 0 < k < j < l < n
      var k = 1, l = 3;
      for (var j = 2; j <= n - 2; j++) {
        if (k >= j) k = j - 1;
        while (k + 1 < j && tamGiac(H[i], P(i, k + 1), P(i, j)) >= tamGiac(H[i], P(i, k), P(i, j))) k++;
        if (l <= j) l = j + 1;
        while (l + 1 < n && tamGiac(P(i, j), P(i, l + 1), H[i]) >= tamGiac(P(i, j), P(i, l), H[i])) l++;
        var s = tamGiac(H[i], P(i, k), P(i, j)) + tamGiac(P(i, j), P(i, l), H[i]);
        if (s > best) { best = s; kq = [H[i], P(i, k), P(i, j), P(i, l)]; }
      }
    }
    return kq;
  }
  // tu giac "on": canh khong qua ngan / chenh lech, goc 35..145 do, loi, dien tich duong
  function hinhOn(q, minPx) {
    if (dienTich(q) <= 0) return false;
    var c = [], mn = 1e9, mx = 0;
    for (var i = 0; i < 4; i++) {
      var a = q[i], b = q[(i + 1) % 4], d = Math.hypot(b[0] - a[0], b[1] - a[1]);
      c.push(d); if (d < mn) mn = d; if (d > mx) mx = d;
    }
    if (mx < minPx || mn * 2.6 < mx) return false;
    for (i = 0; i < 4; i++) {
      var p = q[(i + 3) % 4], o = q[i], n = q[(i + 1) % 4];
      var ux = p[0] - o[0], uy = p[1] - o[1], vx = n[0] - o[0], vy = n[1] - o[1];
      var cos = (ux * vx + uy * vy) / (Math.hypot(ux, uy) * Math.hypot(vx, vy));
      if (cos > 0.82 || cos < -0.82) return false;
      if (ux * vy - uy * vx > 0) return false; // phai loi, cung chieu kim dong ho
    }
    return true;
  }
  function mau(gr, w, h, x, y) {
    x -= 0.5; y -= 0.5;
    if (x < 0) x = 0; if (y < 0) y = 0; if (x > w - 1.001) x = w - 1.001; if (y > h - 1.001) y = h - 1.001;
    var xi = x | 0, yi = y | 0, fx = x - xi, fy = y - yi, o = yi * w + xi;
    return (gr[o] * (1 - fx) + gr[o + 1] * fx) * (1 - fy) + (gr[o + w] * (1 - fx) + gr[o + w + 1] * fx) * fy;
  }
  // Tinh chinh 4 canh: doc theo phap tuyen tim cho do sang cat muc giua den/trang,
  // khop duong thang (binh phuong toi thieu toan phan), giao 4 duong.
  function tinhChinh(gr, w, h, q) {
    var o = Math.hypot(q[1][0] - q[0][0], q[1][1] - q[0][1]) + Math.hypot(q[2][0] - q[1][0], q[2][1] - q[1][1]) +
      Math.hypot(q[3][0] - q[2][0], q[3][1] - q[2][1]) + Math.hypot(q[0][0] - q[3][0], q[0][1] - q[3][1]);
    o /= 28; // co 1 o (px)
    var smax = Math.max(1.6, o * 0.45), buoc = Math.min(0.25, smax / 8), duong = [];
    for (var e = 0; e < 4; e++) {
      var A = q[e], B = q[(e + 1) % 4], dx = B[0] - A[0], dy = B[1] - A[1], len = Math.hypot(dx, dy);
      var nx = dy / len, ny = -dx / len, pts = [];
      for (var t = 0.14; t <= 0.861; t += 0.06) {
        var bx = A[0] + dx * t, by = A[1] + dy * t, prof = [], mn = 999, mx = -1;
        for (var s = -smax; s <= smax + 1e-6; s += buoc) {
          var v = mau(gr, w, h, bx + nx * s, by + ny * s);
          prof.push(v); if (v < mn) mn = v; if (v > mx) mx = v;
        }
        if (mx - mn < 18) continue;
        var muc = (mn + mx) / 2, tot = null;
        for (var k = 0; k < prof.length - 1; k++) {
          if (prof[k] < muc && prof[k + 1] >= muc) {
            var ss = -smax + buoc * (k + (muc - prof[k]) / (prof[k + 1] - prof[k]));
            if (tot === null || Math.abs(ss) < Math.abs(tot)) tot = ss;
          }
        }
        if (tot !== null) pts.push([bx + nx * tot, by + ny * tot]);
      }
      if (pts.length < 5) return null;
      var ln = khopDuong(pts);
      // bo diem lech > 0.8 px roi khop lai
      var tot2 = pts.filter(function (p) { return Math.abs(ln[0] * p[0] + ln[1] * p[1] - ln[2]) < Math.max(0.8, o * 0.2); });
      if (tot2.length >= 4 && tot2.length < pts.length) ln = khopDuong(tot2);
      duong.push(ln);
    }
    var out = [];
    for (e = 0; e < 4; e++) {
      var l1 = duong[(e + 3) % 4], l2 = duong[e];
      var det = l1[0] * l2[1] - l1[1] * l2[0];
      if (Math.abs(det) < 1e-6) return null;
      var X = (l1[2] * l2[1] - l1[1] * l2[2]) / det, Y = (l1[0] * l2[2] - l1[2] * l2[0]) / det;
      if (Math.hypot(X - q[e][0], Y - q[e][1]) > o * 0.9 + 1.5) return null;
      out.push([X, Y]);
    }
    return out;
  }
  // duong a*x + b*y = c (a^2 + b^2 = 1) khop toan phan
  function khopDuong(p) {
    var n = p.length, mx = 0, my = 0, i;
    for (i = 0; i < n; i++) { mx += p[i][0]; my += p[i][1]; }
    mx /= n; my /= n;
    var sxx = 0, syy = 0, sxy = 0;
    for (i = 0; i < n; i++) { var dx = p[i][0] - mx, dy = p[i][1] - my; sxx += dx * dx; syy += dy * dy; sxy += dx * dy; }
    var th = 0.5 * Math.atan2(2 * sxy, sxx - syy); // huong duong
    var a = -Math.sin(th), b = Math.cos(th);
    return [a, b, a * mx + b * my];
  }
  // Phep chieu hinh vuong don vi -> tu giac q (Heckbert)
  function chieu(q) {
    var x0 = q[0][0], y0 = q[0][1], x1 = q[1][0], y1 = q[1][1], x2 = q[2][0], y2 = q[2][1], x3 = q[3][0], y3 = q[3][1];
    var sx = x0 - x1 + x2 - x3, sy = y0 - y1 + y2 - y3, a, b, c, d, e, f, G = 0, H = 0;
    if (Math.abs(sx) < 1e-9 && Math.abs(sy) < 1e-9) {
      a = x1 - x0; b = x3 - x0; c = x0; d = y1 - y0; e = y3 - y0; f = y0;
    } else {
      var dx1 = x1 - x2, dx2 = x3 - x2, dy1 = y1 - y2, dy2 = y3 - y2, den = dx1 * dy2 - dx2 * dy1;
      G = (sx * dy2 - dx2 * sy) / den; H = (dx1 * sy - sx * dy1) / den;
      a = x1 - x0 + G * x1; b = x3 - x0 + H * x3; c = x0; d = y1 - y0 + G * y1; e = y3 - y0 + H * y3; f = y0;
    }
    return function (u, v) { var z = G * u + H * v + 1; return [(a * u + b * v + c) / z, (d * u + e * v + f) / z]; };
  }
  function trungVi(a) { var b = a.slice().sort(function (p, q) { return p - q; }); return b[b.length >> 1]; }
  function docLuoi(gr, w, h, q, toiDa, bo) {
    var P = chieu(q);
    function o(U, V) {
      var s = 0, dd = 0.17;
      var pts = [[U, V], [U - dd, V], [U + dd, V], [U, V - dd], [U, V + dd]];
      for (var i = 0; i < 5; i++) { var p = P(pts[i][0] / 7, pts[i][1] / 7); s += mau(gr, w, h, p[0], p[1]); }
      return s / 5;
    }
    var vien = [], le = [], dl = [], r, c;
    for (r = 0; r < 7; r++) for (c = 0; c < 7; c++) {
      var v = o(c + 0.5, r + 0.5);
      if (r === 0 || c === 0 || r === 6 || c === 6) vien.push(v); else dl.push(v);
    }
    for (var t = 0; t < 7; t++) {
      le.push(o(t + 0.5, -0.45), o(t + 0.5, 7.45), o(-0.45, t + 0.5), o(7.45, t + 0.5));
    }
    var B = trungVi(vien), Wt = trungVi(le), D = Wt - B;
    if (D < 22) return bo('tuongPhan');
    // Otsu tren 25 o du lieu, gioi han trong khoang [B + 25%, B + 75%]
    var s = dl.slice().sort(function (p, q) { return p - q; }), tong = 0, i;
    for (i = 0; i < 25; i++) tong += s[i];
    var tot = -1, nguong = B + D / 2, cong = 0;
    for (i = 0; i < 24; i++) {
      cong += s[i];
      var n0 = i + 1, n1 = 24 - i, m0 = cong / n0, m1 = (tong - cong) / n1, bv = n0 * n1 * (m0 - m1) * (m0 - m1);
      if (bv > tot) { tot = bv; nguong = (s[i] + s[i + 1]) / 2; }
    }
    nguong = Math.max(B + D * 0.25, Math.min(B + D * 0.75, nguong));
    var vd = 0, lt = 0;
    vien.forEach(function (x) { if (x < nguong) vd++; });
    le.forEach(function (x) { if (x > nguong) lt++; });
    if (vd < 21) return bo('vien');
    if (lt < 22) return bo('le');
    var bits = 0;
    for (i = 0; i < 25; i++) if (dl[i] < nguong) bits |= 1 << (24 - i);
    var g2 = giai(bits >>> 0, toiDa);
    if (!g2) return bo('ma');
    // canh chuan e (0 A tren, 1 B phai, 2 C duoi, 3 D trai) nam o canh luoi (e + k) % 4 trong anh
    var dap = 0, ymin = 1e9;
    for (var e = 0; e < 4; e++) {
      var gi = (e + g2.k) % 4, a = q[gi], b = q[(gi + 1) % 4], my = (a[1] + b[1]) / 2;
      if (my < ymin) { ymin = my; dap = e; }
    }
    var tx = (q[0][0] + q[1][0] + q[2][0] + q[3][0]) / 4, ty = (q[0][1] + q[1][1] + q[2][1] + q[3][1]) / 4;
    var co = Math.sqrt(Math.abs(dienTich(q)));
    return { id: g2.id, dap: dap, loi: g2.loi, goc: q.map(function (p) { return [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10]; }),
      tam: [tx, ty], co: co, tuongPhan: Math.round(D) };
  }

  var API = {
    SO_TOI_DA: SO_TOI_DA, LE: LE, CHU: ['A', 'B', 'C', 'D'],
    maHoa: maHoa, xoay: xoay, demBit: demBit, giai: giai, luoi: luoi, svgThe: svgThe,
    xam: xam, phatHien: phatHien, _chieu: chieu, _buf: function () { return buf; }
  };
  g.TheGiayMa = API;
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : globalThis);
