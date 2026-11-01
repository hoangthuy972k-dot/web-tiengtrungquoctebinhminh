/* Quet 'The tra loi' (kieu Plickers) tu khung hinh camera — thuan JS (ES5), khong thu vien.
   Can nap the-ma.js truoc (dung TheMa.giai / TheMa.dapAn).

   TheQuet.tim(gray, w, h, opts) -> [{ id, ans, loi, cx, cy, q: [[x,y] x4], canh }]
     gray: Uint8Array / Uint8ClampedArray do sang (w*h). Toa do tra ve: pixel (i,j)
     phu o [i,i+1]x[j,j+1] (tam pixel = i+0.5). q theo thu tu doc luoi (chieu kim
     dong ho trong anh), canh = do dai canh trung binh (px). Moi id toi da 1 ket qua.
     opts (tuy chon): cuaSo (cua so nguong, mac dinh max(15, w/60)), lech (do lech
     nguong, mac dinh 7), toiDa (so bit sai cho phep, mac dinh 2, toi da 2),
     tuongPhan (chenh lech den/trang toi thieu, mac dinh 20), giam (thu nho anh 2,3..
     truoc khi quet — nhanh hon nhung mat the nho).
   TheQuet.xam(imageData) -> Uint8Array do sang (luma so nguyen nhanh). Mang tra ve
     duoc dung lai o lan goi sau (khong giu lai neu can ban sao).
   Gioi han: canh ma >= 14 px (o >= 2 px) sau khi giam; the cham bien anh (< 2 px) bi bo.

   Quy trinh: nguong thich nghi (trung binh cua so truot) -> gom doan chay pixel den
   thanh thanh phan lien thong (union-find, 8 lan can) -> loc kich thuoc -> bao loi ->
   4 goc (cap diem xa nhat + 2 diem xa nhat 2 ben) -> tinh chinh 4 canh theo bien
   sang/toi (duoi pixel) -> lay mau luoi 7x7 qua phep chieu -> kiem vien den + le
   trang -> giai ma bang TheMa.giai. */
(function (g) {
  'use strict';

  // ---- bo dem dung lai giua cac lan goi (tranh GC) ----
  var CAP = 0;
  var rY, rX0, rX1, rPar, rNext, sArea, sX0, sX1, sY0, sY1, sHead;
  var colSum = new Int32Array(0), colCnt = new Int32Array(0);
  var rowL = new Int32Array(0), rowR = new Int32Array(0);
  var hx = new Float64Array(0), hy = new Float64Array(0);
  var nho = new Uint8Array(0);
  var anhXam = new Uint8Array(0);
  var oV = new Float64Array(49), vienV = new Float64Array(24), leV = new Float64Array(28);
  var tam = new Float64Array(64);
  var px = new Float64Array(64), py = new Float64Array(64);
  var prof = new Float64Array(32);
  var Hm = new Float64Array(8);
  var G9 = new Float64Array(81);
  // Hang so lay mau / lam net (da chinh tren anh tong hop, xem bao cao)
  var LECH_MAU = 0.15;   // 3x3 diem mau moi o, cach tam +-0.15 o
  var NET = 1.5;         // he so lam net: v += NET * (v - trung binh o ke)
  var NET_CHEO = 0.5;    // trong so cua 4 o ke cheo khi tinh trung binh o ke
  var pB = new Float64Array(3), pW = new Float64Array(3);
  // chi so trong luoi 9x9: vien den (24 o) va le trang (28 mau)
  var IDX_VIEN = [], IDX_LE = [];
  (function () {
    for (var r = 0; r < 9; r++) for (var c = 0; c < 9; c++) {
      var bien = r === 0 || r === 8 || c === 0 || c === 8;
      if (bien && !((r === 0 || r === 8) && (c === 0 || c === 8))) IDX_LE.push(r * 9 + c);
      else if (!bien && (r === 1 || r === 7 || c === 1 || c === 7)) IDX_VIEN.push(r * 9 + c);
    }
  })();
  var qTho = new Float64Array(8), qMoi = new Float64Array(8), qTmp = new Float64Array(8);
  var lnX = new Float64Array(4), lnY = new Float64Array(4), lnDX = new Float64Array(4), lnDY = new Float64Array(4);

  // Noi rong cac mang doan chay (giu du lieu cu)
  function moRong(n) {
    if (n <= CAP) return;
    var cap = CAP || 65536;
    while (cap < n) cap *= 2;
    function mo(a) {
      var b = new Int32Array(cap);
      if (a) b.set(a);
      return b;
    }
    rY = mo(rY); rX0 = mo(rX0); rX1 = mo(rX1); rPar = mo(rPar); rNext = mo(rNext);
    sArea = mo(sArea); sX0 = mo(sX0); sX1 = mo(sX1); sY0 = mo(sY0); sY1 = mo(sY1); sHead = mo(sHead);
    CAP = cap;
  }

  function goc(i) {
    while (rPar[i] !== i) { rPar[i] = rPar[rPar[i]]; i = rPar[i]; }
    return i;
  }
  function hop(a, b) {
    a = goc(a); b = goc(b);
    if (a < b) rPar[b] = a; else if (b < a) rPar[a] = b;
  }

  // Nguong thich nghi + tach doan chay pixel den theo tung hang + noi voi hang tren.
  // Pixel den khi gray < trung binh cua so (2r+1)^2 - C. Tra so doan chay.
  function taoDoan(gray, w, h, r, C) {
    var x, y, i, j, k, off, ofa, ofb;
    if (colSum.length < w) { colSum = new Int32Array(w); colCnt = new Int32Array(w); }
    for (x = 0; x < w; x++) { colSum[x] = 0; colCnt[x] = Math.min(w - 1, x + r) - Math.max(0, x - r) + 1; }
    for (y = 0; y < r && y < h; y++) { off = y * w; for (x = 0; x < w; x++) colSum[x] += gray[off + x]; }
    moRong(65536);
    var n = 0, prevS = 0, prevE = 0;
    for (y = 0; y < h; y++) {
      var ya = y + r, yb = y - r - 1;
      if (ya < h && yb >= 0) {
        ofa = ya * w; ofb = yb * w;
        for (x = 0; x < w; x++) colSum[x] += gray[ofa + x] - gray[ofb + x];
      } else if (ya < h) {
        ofa = ya * w; for (x = 0; x < w; x++) colSum[x] += gray[ofa + x];
      } else if (yb >= 0) {
        ofb = yb * w; for (x = 0; x < w; x++) colSum[x] -= gray[ofb + x];
      }
      var rc = Math.min(h - 1, ya) - Math.max(0, y - r) + 1;
      var s = 0;
      for (x = 0; x < r && x < w; x++) s += colSum[x];
      off = y * w;
      var bat = -1, curS = n;
      for (x = 0; x < w; x++) {
        if (x + r < w) s += colSum[x + r];
        if (x > r) s -= colSum[x - r - 1];
        if ((gray[off + x] + C) * rc * colCnt[x] < s) {
          if (bat < 0) bat = x;
        } else if (bat >= 0) {
          if (n >= CAP) moRong(n + 1);
          rY[n] = y; rX0[n] = bat; rX1[n] = x; rPar[n] = n; n++;
          bat = -1;
        }
      }
      if (bat >= 0) {
        if (n >= CAP) moRong(n + 1);
        rY[n] = y; rX0[n] = bat; rX1[n] = w; rPar[n] = n; n++;
      }
      // noi voi cac doan cua hang tren (8 lan can)
      j = prevS;
      for (i = curS; i < n; i++) {
        var a = rX0[i], b = rX1[i];
        while (j < prevE && rX1[j] < a) j++;
        k = j;
        while (k < prevE && rX0[k] <= b) { hop(i, k); k++; }
      }
      prevS = curS; prevE = n;
    }
    return n;
  }

  // Thu nho anh k lan (trung binh khoi k x k)
  function thuNho(gray, w, h, k) {
    var W = (w / k) | 0, H = (h / k) | 0, kk = k * k, x, y, a, b, s, o;
    if (nho.length < W * H) nho = new Uint8Array(W * H);
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) {
      s = 0;
      for (a = 0; a < k; a++) { o = (y * k + a) * w + x * k; for (b = 0; b < k; b++) s += gray[o + b]; }
      nho[y * W + x] = (s / kk + 0.5) | 0;
    }
    return { a: nho, w: W, h: H };
  }

  // Lay mau song tuyen tinh tai (x,y) (toa do lien tuc, tam pixel = i+0.5)
  function mau(img, w, h, x, y) {
    x -= 0.5; y -= 0.5;
    if (x < 0) x = 0; else if (x > w - 1.001) x = w - 1.001;
    if (y < 0) y = 0; else if (y > h - 1.001) y = h - 1.001;
    var xi = x | 0, yi = y | 0, fx = x - xi, fy = y - yi, o = yi * w + xi;
    var a = img[o], b = img[o + 1], c = img[o + w], d = img[o + w + 1];
    var t = a + (b - a) * fx;
    return t + (c + (d - c) * fx - t) * fy;
  }

  // Phep chieu tu hinh vuong don vi (u: q0->q1, v: q0->q3) sang tu giac q
  function homo(q) {
    var x0 = q[0], y0 = q[1], x1 = q[2], y1 = q[3], x2 = q[4], y2 = q[5], x3 = q[6], y3 = q[7];
    var dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3;
    var dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
    var det = dx1 * dy2 - dx2 * dy1;
    if (Math.abs(det) < 1e-9) return false;
    var gg = (dx3 * dy2 - dx2 * dy3) / det, hh = (dx1 * dy3 - dx3 * dy1) / det;
    Hm[0] = x1 - x0 + gg * x1; Hm[1] = x3 - x0 + hh * x3; Hm[2] = x0;
    Hm[3] = y1 - y0 + gg * y1; Hm[4] = y3 - y0 + hh * y3; Hm[5] = y0;
    Hm[6] = gg; Hm[7] = hh;
    return true;
  }
  // Lay mau tai toa do luoi (gx: cot, gy: hang, don vi = 1 o, 0..7)
  function mauLuoi(img, w, h, gx, gy) {
    var u = gx / 7, v = gy / 7;
    var z = Hm[6] * u + Hm[7] * v + 1;
    return mau(img, w, h, (Hm[0] * u + Hm[1] * v + Hm[2]) / z, (Hm[3] * u + Hm[4] * v + Hm[5]) / z);
  }

  // Khop mat phang z = a + b*X + c*Y (X,Y = toa do luoi 9x9 tinh tu tam) cho cac o idx
  // cua G9; lan 2 bo cac diem lech ve phia sai (dau * phan du > tol). Ket qua -> out.
  function matPhang(idx, n, dau, tol, out) {
    var lan, i, k, X, Y, z, sw, sx, sy, sxx, sxy, syy, sz, sxz, syz, dung = n;
    for (lan = 0; lan < 2; lan++) {
      sw = sx = sy = sxx = sxy = syy = sz = sxz = syz = 0;
      for (i = 0; i < n; i++) {
        k = idx[i]; X = (k % 9) - 4; Y = ((k / 9) | 0) - 4; z = G9[k];
        if (lan === 1 && dau * (z - (out[0] + out[1] * X + out[2] * Y)) > tol) continue;
        sw++; sx += X; sy += Y; sxx += X * X; sxy += X * Y; syy += Y * Y; sz += z; sxz += X * z; syz += Y * z;
      }
      if (lan === 1 && (sw === dung || sw < 8)) return;
      dung = sw;
      var d = sw * (sxx * syy - sxy * sxy) - sx * (sx * syy - sxy * sy) + sy * (sx * sxy - sxx * sy);
      if (Math.abs(d) < 1e-9) { out[0] = sz / sw; out[1] = out[2] = 0; return; }
      out[0] = (sz * (sxx * syy - sxy * sxy) - sx * (sxz * syy - sxy * syz) + sy * (sxz * sxy - sxx * syz)) / d;
      out[1] = (sw * (sxz * syy - syz * sxy) - sz * (sx * syy - sxy * sy) + sy * (sx * syz - sxz * sy)) / d;
      out[2] = (sw * (sxx * syz - sxy * sxz) - sx * (sx * syz - sxz * sy) + sz * (sx * sxy - sxx * sy)) / d;
    }
  }

  function trungVi(a, n) {
    var i, j, t;
    for (i = 1; i < n; i++) { t = a[i]; j = i - 1; while (j >= 0 && a[j] > t) { a[j + 1] = a[j]; j--; } a[j + 1] = t; }
    return n & 1 ? a[n >> 1] : (a[(n >> 1) - 1] + a[n >> 1]) / 2;
  }

  // Bao loi cua thanh phan p (tu bien trai/phai tung hang), chieu kim dong ho trong anh.
  // Tra so dinh (luu trong hx, hy).
  function baoLoi(p) {
    var y0 = sY0[p], nh = sY1[p] - y0, k, i, m = 0, x, y;
    if (rowL.length < nh) { rowL = new Int32Array(nh * 2); rowR = new Int32Array(nh * 2); }
    if (hx.length < nh * 4 + 8) { hx = new Float64Array(nh * 8 + 8); hy = new Float64Array(nh * 8 + 8); }
    for (k = 0; k < nh; k++) { rowL[k] = 1e9; rowR[k] = -1; }
    for (i = sHead[p]; i >= 0; i = rNext[i]) {
      k = rY[i] - y0;
      if (rX0[i] < rowL[k]) rowL[k] = rX0[i];
      if (rX1[i] > rowR[k]) rowR[k] = rX1[i];
    }
    // chuoi phai: tren -> duoi
    for (k = 0; k < nh * 2; k++) {
      x = rowR[k >> 1]; y = y0 + (k >> 1) + (k & 1);
      while (m >= 2 && (hx[m - 1] - hx[m - 2]) * (y - hy[m - 1]) - (hy[m - 1] - hy[m - 2]) * (x - hx[m - 1]) <= 0) m--;
      hx[m] = x; hy[m] = y; m++;
    }
    var mR = m;
    // chuoi trai: duoi -> tren
    for (k = nh * 2 - 1; k >= 0; k--) {
      x = rowL[k >> 1]; y = y0 + (k >> 1) + (k & 1);
      while (m >= mR + 2 && (hx[m - 1] - hx[m - 2]) * (y - hy[m - 1]) - (hy[m - 1] - hy[m - 2]) * (x - hx[m - 1]) <= 0) m--;
      hx[m] = x; hy[m] = y; m++;
    }
    return m;
  }

  // Tu bao loi -> 4 goc tho (qTho). Tra false neu khong giong tu giac.
  function bonGoc(m) {
    var i, j, bi = 0, bj = 0, best = -1, d, dx, dy;
    if (m < 4 || m > 600) return false;
    for (i = 0; i < m; i++) for (j = i + 1; j < m; j++) {
      dx = hx[i] - hx[j]; dy = hy[i] - hy[j]; d = dx * dx + dy * dy;
      if (d > best) { best = d; bi = i; bj = j; }
    }
    // diem xa duong cheo nhat moi ben
    var ax = hx[bi], ay = hy[bi], ux = hx[bj] - ax, uy = hy[bj] - ay;
    var k1 = -1, k2 = -1, m1 = 0, m2 = 0, c;
    for (i = (bi + 1) % m; i !== bj; i = (i + 1) % m) {
      c = ux * (hy[i] - ay) - uy * (hx[i] - ax);
      if (-c > m1) { m1 = -c; k1 = i; }
    }
    for (i = (bj + 1) % m; i !== bi; i = (i + 1) % m) {
      c = ux * (hy[i] - ay) - uy * (hx[i] - ax);
      if (c > m2) { m2 = c; k2 = i; }
    }
    if (k1 < 0 || k2 < 0) return false;
    // dien tich tu giac so voi bao loi (hinh tron, la... bi loai)
    var aBao = 0;
    for (i = 0; i < m; i++) { j = (i + 1) % m; aBao += hx[i] * hy[j] - hx[j] * hy[i]; }
    aBao /= 2;
    var aQ = (m1 + m2) / 2;
    if (aBao <= 0 || aQ < 0.8 * aBao) return false;
    qTho[0] = hx[bi]; qTho[1] = hy[bi]; qTho[2] = hx[k1]; qTho[3] = hy[k1];
    qTho[4] = hx[bj]; qTho[5] = hy[bj]; qTho[6] = hx[k2]; qTho[7] = hy[k2];
    return true;
  }

  // Kiem tu giac: loi, canh khong qua lech. Tra canh trung binh hoac 0.
  function kiemTuGiac(q) {
    var i, mn = 1e9, mx = 0, tong = 0, L;
    for (i = 0; i < 4; i++) {
      var ax = q[2 * i], ay = q[2 * i + 1], bx = q[(2 * i + 2) & 7], by = q[(2 * i + 3) & 7], cx = q[(2 * i + 4) & 7], cy = q[(2 * i + 5) & 7];
      if ((bx - ax) * (cy - by) - (by - ay) * (cx - bx) <= 0) return 0;
      L = Math.sqrt((bx - ax) * (bx - ax) + (by - ay) * (by - ay));
      if (L < mn) mn = L;
      if (L > mx) mx = L;
      tong += L;
    }
    if (mn < 14 || mn < 0.6 * mx) return 0;
    return tong / 4;
  }

  // Tinh chinh 4 canh: tren moi canh lay nhieu diem, do theo phap tuyen tim bien
  // den (vien) -> trang (le), khop duong thang, giao 4 duong -> 4 goc moi (qMoi).
  function tinhChinh(img, w, h, q, s, R) {
    var i, j, k, cnt;
    var nb = Math.max(3, Math.min(12, Math.ceil(R / 0.4))), st = R / nb, np = 2 * nb + 1;
    for (i = 0; i < 4; i++) {
      var ax = q[2 * i], ay = q[2 * i + 1], bx = q[(2 * i + 2) & 7], by = q[(2 * i + 3) & 7];
      var dx = bx - ax, dy = by - ay, L = Math.sqrt(dx * dx + dy * dy);
      dx /= L; dy /= L;
      var nx = dy, ny = -dx; // phap tuyen huong ra ngoai
      var m = Math.max(5, Math.min(24, Math.round(L / 2.5)));
      cnt = 0;
      for (j = 0; j < m; j++) {
        var t = (0.12 + 0.76 * j / (m - 1)) * L;
        var cx = ax + dx * t, cy = ay + dy * t;
        var vmin = 1e9, vmax = -1, v;
        for (k = 0; k < np; k++) {
          var sk = -R + k * st;
          v = mau(img, w, h, cx + nx * sk, cy + ny * sk);
          prof[k] = v;
          if (v < vmin) vmin = v;
          if (v > vmax) vmax = v;
        }
        if (vmax - vmin < 12) continue;
        var mid = (vmin + vmax) / 2;
        if (prof[np - 1] < mid) continue;
        for (k = np - 2; k >= 0; k--) if (prof[k] < mid) break;
        if (k < 0) continue;
        var f = (mid - prof[k]) / (prof[k + 1] - prof[k]);
        var pos = -R + (k + f) * st;
        px[cnt] = cx + nx * pos; py[cnt] = cy + ny * pos; cnt++;
      }
      if (cnt < 3) { lnX[i] = ax; lnY[i] = ay; lnDX[i] = dx; lnDY[i] = dy; continue; }
      // khop duong thang (PCA), loai diem lech 1 lan
      var lan, tol = Math.max(0.75, 0.1 * s);
      for (lan = 0; lan < 2; lan++) {
        var mx = 0, my = 0, sxx = 0, sxy = 0, syy = 0;
        for (j = 0; j < cnt; j++) { mx += px[j]; my += py[j]; }
        mx /= cnt; my /= cnt;
        for (j = 0; j < cnt; j++) { var ex = px[j] - mx, ey = py[j] - my; sxx += ex * ex; sxy += ex * ey; syy += ey * ey; }
        var ang = 0.5 * Math.atan2(2 * sxy, sxx - syy);
        var ldx = Math.cos(ang), ldy = Math.sin(ang);
        lnX[i] = mx; lnY[i] = my; lnDX[i] = ldx; lnDY[i] = ldy;
        if (lan === 1) break;
        var c2 = 0;
        for (j = 0; j < cnt; j++) {
          var res = (px[j] - mx) * -ldy + (py[j] - my) * ldx;
          if (res < tol && res > -tol) { px[c2] = px[j]; py[c2] = py[j]; c2++; }
        }
        if (c2 === cnt || c2 < 3) break;
        cnt = c2;
      }
    }
    // giao cac duong ke nhau: goc i = canh (i-1) x canh i
    var lim = Math.max(2, 0.8 * s);
    for (i = 0; i < 4; i++) {
      var a = (i + 3) & 3;
      var den = lnDX[a] * lnDY[i] - lnDY[a] * lnDX[i];
      var ox = q[2 * i], oy = q[2 * i + 1];
      if (Math.abs(den) < 1e-6) { qMoi[2 * i] = ox; qMoi[2 * i + 1] = oy; continue; }
      var tt = ((lnX[i] - lnX[a]) * lnDY[i] - (lnY[i] - lnY[a]) * lnDX[i]) / den;
      var gx = lnX[a] + lnDX[a] * tt, gy = lnY[a] + lnDY[a] * tt;
      if ((gx - ox) * (gx - ox) + (gy - oy) * (gy - oy) > lim * lim) { gx = ox; gy = oy; }
      qMoi[2 * i] = gx; qMoi[2 * i + 1] = gy;
    }
  }

  // Lay mau luoi 7x7 + le trang, giai ma. Tra ket qua hoac null.
  function docMa(img, w, h, q, TM, toiDa, tp) {
    if (!homo(q)) return null;
    var r, c, a, b, v, nv = 0, i;
    for (r = 0; r < 7; r++) for (c = 0; c < 7; c++) {
      v = 0;
      for (a = -1; a <= 1; a++) for (b = -1; b <= 1; b++) v += mauLuoi(img, w, h, c + 0.5 + LECH_MAU * b, r + 0.5 + LECH_MAU * a);
      v /= 9;
      oV[r * 7 + c] = v;
      if (r === 0 || r === 6 || c === 0 || c === 6) vienV[nv++] = v;
    }
    for (i = 0; i < 7; i++) {
      leV[i] = mauLuoi(img, w, h, i + 0.5, -0.45);
      leV[7 + i] = mauLuoi(img, w, h, 7.45, i + 0.5);
      leV[14 + i] = mauLuoi(img, w, h, i + 0.5, 7.45);
      leV[21 + i] = mauLuoi(img, w, h, -0.45, i + 0.5);
    }
    // luoi 9x9: 7x7 o + vong le trang ben ngoai (4 goc khong dung)
    for (r = 0; r < 7; r++) for (c = 0; c < 7; c++) G9[(r + 1) * 9 + c + 1] = oV[r * 7 + c];
    for (i = 0; i < 7; i++) { G9[i + 1] = leV[i]; G9[(i + 1) * 9 + 8] = leV[7 + i]; G9[72 + i + 1] = leV[14 + i]; G9[(i + 1) * 9] = leV[21 + i]; }
    for (i = 0; i < 24; i++) tam[i] = vienV[i];
    var den = trungVi(tam, 24);
    for (i = 0; i < 28; i++) tam[i] = leV[i];
    var trang = trungVi(tam, 28);
    if (trang - den < tp) return null;
    G9[0] = G9[8] = G9[72] = G9[80] = trang;
    // mat phang do sang cua den (vien) va trang (le) — chiu duoc anh sang khong deu
    var tol = 0.3 * (trang - den);
    matPhang(IDX_VIEN, 24, 1, tol, pB);
    matPhang(IDX_LE, 28, -1, tol, pW);
    var t0 = (pB[0] + pW[0]) / 2, tx = (pB[1] + pW[1]) / 2, ty = (pB[2] + pW[2]) / 2;
    if (pW[0] - pB[0] < tp) return null;
    var sai = 0, k;
    for (i = 0; i < 24; i++) { k = IDX_VIEN[i]; if (G9[k] >= t0 + tx * ((k % 9) - 4) + ty * (((k / 9) | 0) - 4)) sai++; }
    if (sai > 2) return null;
    var saiVien = sai;
    sai = 0;
    for (i = 0; i < 28; i++) { k = IDX_LE[i]; if (G9[k] < t0 + tx * ((k % 9) - 4) + ty * (((k / 9) | 0) - 4)) sai++; }
    if (sai > 5) return null;
    var saiLe = sai;
    // o du lieu: lam net (bu tru nhoe tu cac o ke) roi so voi nguong tai cho
    var bits = 0, moHo = 0;
    for (r = 0; r < 5; r++) for (c = 0; c < 5; c++) {
      var o9 = (r + 2) * 9 + c + 2;
      v = G9[o9];
      v += NET * (v - (G9[o9 - 1] + G9[o9 + 1] + G9[o9 - 9] + G9[o9 + 9] + NET_CHEO * (G9[o9 - 10] + G9[o9 - 8] + G9[o9 + 8] + G9[o9 + 10])) / (4 + 4 * NET_CHEO));
      var tc = t0 + tx * (c - 2) + ty * (r - 2);
      if (v < tc) bits |= 1 << (24 - (r * 5 + c));
      if (Math.abs(v - tc) < 0.25 * (pW[0] - pB[0])) moHo++;
    }
    var kq = TM.giai(bits, toiDa);
    if (!kq) return null;
    // giai co sua bit thi doi hoi vien/le sach hon (giam nhan nham tu hoa van)
    if (kq.loi === 0 ? moHo > 8 : kq.loi === 1 ? (saiVien > 1 || saiLe > 3 || moHo > 3) : (saiVien > 0 || saiLe > 1 || moHo > 2)) return null;
    var qq = [[q[0], q[1]], [q[2], q[3]], [q[4], q[5]], [q[6], q[7]]];
    var z = Hm[6] * 0.5 + Hm[7] * 0.5 + 1;
    var canh = 0;
    for (i = 0; i < 4; i++) {
      var ex = q[(2 * i + 2) & 7] - q[2 * i], ey = q[(2 * i + 3) & 7] - q[2 * i + 1];
      canh += Math.sqrt(ex * ex + ey * ey) / 4;
    }
    return {
      id: kq.id, ans: TM.dapAn(qq, kq.k), loi: kq.loi,
      cx: (Hm[0] * 0.5 + Hm[1] * 0.5 + Hm[2]) / z, cy: (Hm[3] * 0.5 + Hm[4] * 0.5 + Hm[5]) / z,
      q: qq, canh: canh
    };
  }

  function tim(gray, w, h, opts) {
    opts = opts || {};
    var TM = g.TheMa;
    if (!TM) throw new Error('TheQuet: can nap the-ma.js truoc');
    var giam = opts.giam > 1 ? Math.floor(opts.giam) : 1;
    var img = gray, W = w, H = h, i, p;
    if (giam > 1) { var t = thuNho(gray, w, h, giam); img = t.a; W = t.w; H = t.h; }
    var win = opts.cuaSo || Math.max(15, Math.round(W / 60));
    var R = win >> 1;
    var C = opts.lech != null ? opts.lech : 7;
    var toiDa = Math.min(2, opts.toiDa != null ? opts.toiDa : 2);
    var tp = opts.tuongPhan != null ? opts.tuongPhan : 20;

    var n = taoDoan(img, W, H, R, C);

    // nen duong dan + thong ke tung thanh phan (goc = doan co chi so nho nhat)
    for (i = 0; i < n; i++) {
      p = rPar[i];
      if (p === i) {
        sArea[i] = rX1[i] - rX0[i]; sX0[i] = rX0[i]; sX1[i] = rX1[i]; sY0[i] = rY[i]; sY1[i] = rY[i] + 1;
      } else {
        p = rPar[p]; rPar[i] = p;
        sArea[p] += rX1[i] - rX0[i];
        if (rX0[i] < sX0[p]) sX0[p] = rX0[i];
        if (rX1[i] > sX1[p]) sX1[p] = rX1[i];
        sY1[p] = rY[i] + 1;
      }
    }
    // loc ung vien theo kich thuoc
    var maxD = Math.min(W, H) * 0.95, ds = [];
    for (i = 0; i < n; i++) {
      if (rPar[i] !== i) continue;
      sHead[i] = -2;
      var bw = sX1[i] - sX0[i], bh = sY1[i] - sY0[i];
      var mn = bw < bh ? bw : bh, mx = bw < bh ? bh : bw;
      if (mn < 10 || mx < 14 || mx > maxD || mx > 3 * mn) continue;
      if (sArea[i] < 0.08 * bw * bh) continue;
      if (sX0[i] < 2 || sY0[i] < 2 || sX1[i] > W - 2 || sY1[i] > H - 2) continue;
      sHead[i] = -1;
      ds.push(i);
    }
    for (i = 0; i < n; i++) {
      p = rPar[i];
      if (sHead[p] !== -2) { rNext[i] = sHead[p]; sHead[p] = i; }
    }

    var theoId = {}, out = [];
    for (var di = 0; di < ds.length; di++) {
      p = ds[di];
      var m = baoLoi(p);
      if (!bonGoc(m)) continue;
      var canh = kiemTuGiac(qTho);
      if (!canh) continue;
      var s = canh / 7;
      tinhChinh(img, W, H, qTho, s, Math.max(1.5, 0.55 * s));
      for (i = 0; i < 8; i++) qTmp[i] = qMoi[i];
      tinhChinh(img, W, H, qTmp, s, Math.max(1.2, 0.3 * s));
      if (!kiemTuGiac(qMoi)) continue;
      var kq = docMa(img, W, H, qMoi, TM, toiDa, tp);
      if (!kq) continue;
      if (giam > 1) {
        kq.cx *= giam; kq.cy *= giam; kq.canh *= giam;
        for (i = 0; i < 4; i++) { kq.q[i][0] *= giam; kq.q[i][1] *= giam; }
      }
      var cu = theoId[kq.id];
      if (cu && (cu.loi < kq.loi || (cu.loi === kq.loi && cu.canh >= kq.canh))) continue;
      theoId[kq.id] = kq;
    }
    for (var key in theoId) if (Object.prototype.hasOwnProperty.call(theoId, key)) out.push(theoId[key]);
    return out;
  }

  // RGBA ImageData -> do sang (Y ~ 0.299R + 0.587G + 0.114B, so nguyen)
  function xam(imageData) {
    var d = imageData.data, n = imageData.width * imageData.height, i, j;
    if (anhXam.length !== n) anhXam = new Uint8Array(n);
    for (i = 0, j = 0; i < n; i++, j += 4) anhXam[i] = (d[j] * 77 + d[j + 1] * 150 + d[j + 2] * 29) >> 8;
    return anhXam;
  }

  g.TheQuet = { tim: tim, xam: xam };
})(typeof window !== 'undefined' ? window : globalThis);
