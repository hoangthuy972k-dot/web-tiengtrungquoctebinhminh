/* Ma cua 'The tra loi' (kieu Plickers) — dung chung cho trang in the, man chieu
   va trang quet tren dien thoai.
   Moi the: luoi 7x7 o, vien ngoai den, 5x5 o du lieu ben trong (bit 1 = o den).
   Bit thu i = hang r, cot c (i = r*5 + c), doc tu bit cao: (ma >> (24 - i)) & 1.
   Huong chuan: canh tren = A, phai = B, duoi = C, trai = D. Hoc sinh xoay the cho
   chu cai minh chon len tren — canh nao huong len tren trong anh la dap an.
   Bo ma sinh bang tools/tao-ma-the.js: moi ma va 4 huong xoay cach nhau >= 7 bit. */
(function (g) {
  'use strict';
  var MA = [
    463637, 16965627, 2609344, 11054904, 6616888, 27284280, 10435384, 12700472, 29267768, 10942992,
    14278128, 18600112, 22298016, 3993568, 4961110, 18538824, 12966920, 24715208, 15825032, 33138952,
    31830856, 18695688, 16597448, 6272072, 4435080, 9561672, 24422024, 17472392, 5918464, 2171342,
    23127187, 23586296, 5588728, 16299256, 24922160, 11115152, 26334950, 26459984, 7575272, 19620520,
    27735144, 21526504, 13791632, 15426768, 18305856, 2620558, 24154804, 28433684, 28598456, 32671632,
    14600776, 8246432, 33426936, 8626927, 30854516, 12305316, 6066522, 6472432, 20416452, 16254944,
    11343292, 28486644, 8304724, 30485104, 26699740, 27052790, 31285024, 5860376, 29047960, 19786520,
    5725263, 24450974, 30628494, 29557592, 17610840, 23058696, 7074048, 4637846, 19583051, 20266876,
    25661368, 19108724, 31892024, 30101144, 13930000, 29396671, 14363140, 26745304, 30145652, 33514548,
    15583056, 7213112, 11780152, 6662872, 20121764, 30191344, 27989328, 8355368, 22479792, 12088880
  ];

  // Xoay luoi 5x5 90 do theo chieu kim dong ho: moi[r][c] = cu[4-c][r]
  function xoay(m) {
    var out = 0;
    for (var r = 0; r < 5; r++) for (var c = 0; c < 5; c++) {
      var bit = (m >>> (24 - ((4 - c) * 5 + r))) & 1;
      if (bit) out |= 1 << (24 - (r * 5 + c));
    }
    return out >>> 0;
  }
  function demBit(x) { var n = 0; x >>>= 0; while (x) { n += x & 1; x >>>= 1; } return n; }

  // Bang tra: XOAY[k][id] = ma cua the id da xoay k lan (theo chieu kim dong ho)
  var XOAY = [MA.slice()];
  for (var k = 1; k < 4; k++) XOAY.push(XOAY[k - 1].map(xoay));

  // bits: 25 bit doc tu anh, hang 0 / cot 0 o goc q0 cua anh, q0->q1->q2->q3 theo
  // chieu kim dong ho. Tra { id (1..100), k, loi } — luoi doc duoc = ma chuan xoay
  // k lan; goc tren-trai chuan cua the nam o q[k]. Sai qua toiDa bit thi null.
  function giai(bits, toiDa) {
    if (toiDa == null) toiDa = 2;
    var best = null;
    for (var k = 0; k < 4; k++) {
      var hang = XOAY[k];
      for (var i = 0; i < hang.length; i++) {
        var loi = demBit(bits ^ hang[i]);
        if (loi <= toiDa && (!best || loi < best.loi)) best = { id: i + 1, k: k, loi: loi };
      }
    }
    return best;
  }

  // q: 4 goc trong anh [[x,y]...] theo thu tu doc luoi; k tu giai(). Tra 0..3 = A..D:
  // canh chuan nao dang huong len tren nhat (y nho nhat so voi tam the).
  function dapAn(q, k) {
    var c = [q[k % 4], q[(k + 1) % 4], q[(k + 2) % 4], q[(k + 3) % 4]]; // TL, TR, BR, BL chuan
    var giua = [(c[0][1] + c[1][1]) / 2, (c[1][1] + c[2][1]) / 2, (c[2][1] + c[3][1]) / 2, (c[3][1] + c[0][1]) / 2];
    var tot = 0;
    for (var i = 1; i < 4; i++) if (giua[i] < giua[tot]) tot = i;
    return tot;
  }

  // Luoi 7x7 (1 = den) cua the id o huong chuan
  function luoi(id) {
    var m = MA[id - 1], out = [];
    for (var r = 0; r < 7; r++) {
      var hang = [];
      for (var c = 0; c < 7; c++) {
        if (r === 0 || r === 6 || c === 0 || c === 6) hang.push(1);
        else hang.push((m >>> (24 - ((r - 1) * 5 + (c - 1)))) & 1);
      }
      out.push(hang);
    }
    return out;
  }

  // SVG cua ma (khong gom le trang) — viewBox 7x7, moi o la 1 don vi
  function svg(id) {
    var l = luoi(id), d = '';
    for (var r = 0; r < 7; r++) {
      var c = 0;
      while (c < 7) {
        if (!l[r][c]) { c++; continue; }
        var c0 = c;
        while (c < 7 && l[r][c]) c++;
        d += 'M' + c0 + ' ' + r + 'h' + (c - c0) + 'v1h' + (c0 - c) + 'z';
      }
    }
    return '<svg class="the-ma-svg" viewBox="0 0 7 7" shape-rendering="crispEdges" aria-hidden="true"><path d="' + d + '" fill="#000"/></svg>';
  }

  g.TheMa = { SO: MA.length, MA: MA, xoay: xoay, giai: giai, dapAn: dapAn, luoi: luoi, svg: svg, CHU: ['A', 'B', 'C', 'D'] };
})(typeof window !== 'undefined' ? window : globalThis);
