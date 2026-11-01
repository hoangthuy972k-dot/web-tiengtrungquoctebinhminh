/* Nhan vat ao cua hoc sinh trong Nong trai: ve SVG theo lua chon (toc, ao, quan/vay, mu, kinh, mau da).
   Kieu chibi cung phong cach hinh nong trai: net vien #2b1d3a, mau phang + vet bong nhe, tay chan cong tron.
   av = { da, toc, mt, ao, ma, duoi, md, mu, mm, kinh } — giong kiemNhanVat() o nong-trai.js (may chu). */
(function () {
  'use strict';
  var V = '#2b1d3a';
  var DA = ['#ffe0c7', '#f6c79c', '#d9a273', '#a8704a'];
  var MAU_TOC = ['#2b1d3a', '#6b3e26', '#a0522d', '#f2c94c', '#ff8fb1', '#5aa9e6'];
  var MAU = ['#e5533d', '#ff8fb1', '#ffc83d', '#7ed957', '#4fc3f7', '#7e57c2', '#fff8ec', '#3b3b4f'];
  var TEN_MAU = ['Đỏ', 'Hồng', 'Vàng', 'Xanh lá', 'Xanh dương', 'Tím', 'Trắng', 'Đen'];
  var TEN_MAU_TOC = ['Đen', 'Nâu', 'Nâu đỏ', 'Vàng', 'Hồng', 'Xanh'];

  // Lua chon + ten tieng Trung (bam vao la nghe doc: vua chon do vua hoc tu)
  var KIEU = {
    toc: [
      { k: 'ngan', vn: 'Tóc ngắn', zh: '短发', py: 'duǎnfà' },
      { k: 'xu', vn: 'Tóc húi cua', zh: '寸头', py: 'cùntóu' },
      { k: 'bob', vn: 'Tóc ngang vai', zh: '波波头', py: 'bōbōtóu' },
      { k: 'dai', vn: 'Tóc dài', zh: '长发', py: 'chángfà' },
      { k: 'duoi', vn: 'Buộc đuôi ngựa', zh: '马尾辫', py: 'mǎwěibiàn' },
      { k: 'bui', vn: 'Búi hai bên', zh: '丸子头', py: 'wánzitóu' },
    ],
    ao: [
      { k: 'thun', vn: 'Áo phông', zh: 'T恤', py: 'T xù' },
      { k: 'khoac', vn: 'Áo khoác', zh: '外套', py: 'wàitào' },
      { k: 'somi', vn: 'Áo sơ mi', zh: '衬衫', py: 'chènshān' },
      { k: 'aodai', vn: 'Áo dài', zh: '奥黛', py: 'àodài' },
    ],
    duoi: [
      { k: 'dai', vn: 'Quần dài', zh: '裤子', py: 'kùzi' },
      { k: 'short', vn: 'Quần đùi', zh: '短裤', py: 'duǎnkù' },
      { k: 'vay', vn: 'Váy', zh: '裙子', py: 'qúnzi' },
    ],
    mu: [
      { k: '', vn: 'Không đội', zh: '', py: '' },
      { k: 'luoi', vn: 'Mũ lưỡi trai', zh: '帽子', py: 'màozi' },
      { k: 'nonla', vn: 'Nón lá', zh: '斗笠', py: 'dǒulì' },
      { k: 'len', vn: 'Mũ len', zh: '毛线帽', py: 'máoxiànmào' },
      { k: 'no', vn: 'Nơ', zh: '蝴蝶结', py: 'húdiéjié' },
      { k: 'vuong', vn: 'Vương miện', zh: '王冠', py: 'wángguān' },
      { k: 'bao', vn: 'Mũ nồi', zh: '贝雷帽', py: 'bèiléimào' },
      { k: 'coi', vn: 'Mũ cói', zh: '草帽', py: 'cǎomào' },
      { k: 'tho', vn: 'Tai thỏ', zh: '兔耳朵', py: 'tù ěrduo' },
      { k: 'meo', vn: 'Tai mèo', zh: '猫耳朵', py: 'māo ěrduo' },
      { k: 'hoa', vn: 'Vòng hoa', zh: '花环', py: 'huāhuán' },
      { k: 'bep', vn: 'Mũ đầu bếp', zh: '厨师帽', py: 'chúshīmào' },
      { k: 'kep', vn: 'Kẹp tóc sao', zh: '发夹', py: 'fàjiā' },
    ],
    kinh: [
      { k: '', vn: 'Không đeo', zh: '', py: '' },
      { k: 'den', vn: 'Kính đen', zh: '墨镜', py: 'mòjìng' },
      { k: 'tron', vn: 'Kính cận', zh: '眼镜', py: 'yǎnjìng' },
      { k: 'tim', vn: 'Kính trái tim', zh: '爱心眼镜', py: 'àixīn yǎnjìng' },
      { k: 'sao', vn: 'Kính ngôi sao', zh: '星星眼镜', py: 'xīngxing yǎnjìng' },
      { k: 'boi', vn: 'Kính bơi', zh: '泳镜', py: 'yǒngjìng' },
      { k: 'vuong', vn: 'Kính gọng vuông', zh: '方框眼镜', py: 'fāngkuàng yǎnjìng' },
    ],
    pk: [
      { k: '', vn: 'Không có', zh: '', py: '' },
      { k: 'balo', vn: 'Cặp sách', zh: '书包', py: 'shūbāo' },
      { k: 'khan', vn: 'Khăn quàng', zh: '围巾', py: 'wéijīn' },
      { k: 'cavat', vn: 'Cà vạt', zh: '领带', py: 'lǐngdài' },
      { k: 'noco', vn: 'Nơ cổ', zh: '领结', py: 'lǐngjié' },
      { k: 'quat', vn: 'Quạt giấy', zh: '扇子', py: 'shànzi' },
      { k: 'bongbay', vn: 'Bóng bay', zh: '气球', py: 'qìqiú' },
      { k: 'sach', vn: 'Quyển sách', zh: '书', py: 'shū' },
      { k: 'denlong', vn: 'Đèn lồng', zh: '灯笼', py: 'dēnglong' },
      { k: 'tui', vn: 'Túi xách', zh: '包', py: 'bāo' },
      { k: 'gau', vn: 'Gấu bông', zh: '玩具熊', py: 'wánjùxióng' },
    ],
    mat: [
      { k: '', vn: 'Mỉm cười', zh: '微笑', py: 'wēixiào' },
      { k: 'tit', vn: 'Cười tít mắt', zh: '大笑', py: 'dàxiào' },
      { k: 'nhay', vn: 'Nháy mắt', zh: '眨眼', py: 'zhǎyǎn' },
      { k: 'sao', vn: 'Mắt lấp lánh', zh: '星星眼', py: 'xīngxingyǎn' },
      { k: 'le', vn: 'Lè lưỡi', zh: '吐舌头', py: 'tǔ shétou' },
    ],
  };

  function net(w) { return ' stroke="' + V + '" stroke-width="' + (w || 3) + '" stroke-linejoin="round" stroke-linecap="round"'; }
  function p(d, fill, w) { return '<path d="' + d + '" fill="' + fill + '"' + net(w) + '/>'; }
  // Tay chan kieu chibi: 2 net chong len nhau (vien dam + mau) -> canh tron, mem, khong cung nhu khoi hop
  function chi(d, mau, to) {
    to = to || 7;
    return '<path d="' + d + '" fill="none" stroke="' + V + '" stroke-width="' + (to + 4.5) + '" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="' + d + '" fill="none" stroke="' + mau + '" stroke-width="' + to + '" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  function tron(cx, cy, r, fill, w) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + fill + '"' + net(w) + '/>'; }
  var BONG = 'rgba(43,29,58,.10)';   // vet bong mot ben cho co khoi
  var SANG = 'rgba(255,255,255,.38)'; // anh bong toc, giay

  /* Ty le chibi (khung 100 x 140): dau tam (50, 48) ban kinh 28; than ao 74 -> 106; chan toi 124.
     Mat (40, 52) va (60, 52); tay cam do o (70.5, 100), tay trai (29.5, 100). */
  function svg(av, cls) {
    av = av || macDinh('');
    var da = DA[av.da] || DA[0], toc = MAU_TOC[av.mt] || MAU_TOC[0];
    var ao = MAU[av.ma] || MAU[0], duoi = MAU[av.md] || MAU[4], mu = MAU[av.mm] || MAU[0], pk = MAU[av.mp] || MAU[0];
    var laAoDai = av.ao === 'aodai';
    var s = '<svg class="' + (cls || 'nv-svg') + '" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
    s += '<ellipse cx="50" cy="131" rx="21" ry="4.2" fill="#000" opacity=".16"/>';
    // --- toc phia sau dau ---
    if (av.toc === 'dai') s += p('M21 50Q18 17 50 16Q82 17 79 50L83 99Q72 106 62 99L50 103L38 99Q28 106 17 99Z', toc);
    if (av.toc === 'bob') s += p('M20 52Q17 16 50 15Q83 16 80 52L81 73Q70 80 60 74L50 77L40 74Q30 80 19 73Z', toc);
    if (av.toc === 'duoi') s += p('M70 28Q97 28 93 58Q91 77 79 87Q84 66 72 51Z', toc) + tron(73.5, 30, 3.6, '#e5533d', 2.2);
    if (av.toc === 'bui') s += tron(25, 23, 11.5, toc) + tron(75, 23, 11.5, toc) + '<path d="M19 19Q23 14 28 15M69 16Q74 13 79 18" fill="none" stroke="' + SANG + '" stroke-width="2.5" stroke-linecap="round"/>';
    if (av.pk === 'balo') s += '<rect x="26" y="73" width="48" height="35" rx="11" fill="' + pk + '"' + net() + '/>';
    // --- chan: quan dai mau quan; quan dui / vay de lo chan ---
    var chanMau = laAoDai ? '#fff8ec' : av.duoi === 'dai' ? duoi : da;
    s += chi('M44.5 103V121', chanMau, 6.5) + chi('M55.5 103V121', chanMau, 6.5);
    if (!laAoDai && av.duoi === 'short') s += p('M33 101H67L66.5 113H52.5L50 108.5L47.5 113H33.5Z', duoi);
    if (!laAoDai && av.duoi === 'vay') s += p('M34 99H66Q71 108 75 118Q66 122 58 119.5Q50 123 42 119.5Q34 122 25 118Q29 108 34 99Z', duoi) +
      '<path d="M64 102Q68 110 70 118" fill="none" stroke="' + BONG + '" stroke-width="4" stroke-linecap="round"/>';
    if (!laAoDai && av.duoi === 'dai') s += '<path d="M50 104V110" stroke="' + V + '" stroke-width="1.6" opacity=".45"/>';
    // giay tron co diem sang
    s += '<ellipse cx="43" cy="125.5" rx="7" ry="4.6" fill="#6d4c41"' + net(2.6) + '/><ellipse cx="57" cy="125.5" rx="7" ry="4.6" fill="#6d4c41"' + net(2.6) + '/>';
    s += '<ellipse cx="41" cy="124" rx="2.4" ry="1.3" fill="' + SANG + '"/><ellipse cx="55" cy="124" rx="2.4" ry="1.3" fill="' + SANG + '"/>';
    // --- than ao (dang chu A mem) ---
    if (laAoDai) {
      s += p('M37 74Q50 70.5 63 74Q67 76 67 82L71 120Q50 124 29 120L33 82Q33 76 37 74Z', ao);
      s += '<path d="M62 78Q67 84 68 118" fill="none" stroke="' + BONG + '" stroke-width="5" stroke-linecap="round"/>';
      s += p('M44 72.5H56V77.5Q50 79 44 77.5Z', ao, 2.4) + '<path d="M33 106L36 120M67 106L64 120" stroke="' + V + '" stroke-width="1.6" opacity=".45"/>';
    } else {
      s += p('M37 74Q50 70.5 63 74Q67 76 67.5 82L69 104Q50 109 31 104L32.5 82Q33 76 37 74Z', ao);
      s += '<path d="M62 78Q67 86 67.5 103" fill="none" stroke="' + BONG + '" stroke-width="5" stroke-linecap="round"/>';
      if (av.ao === 'khoac') {
        s += '<path d="M50 77V106" stroke="' + V + '" stroke-width="2.2"/>' + p('M38 73Q50 84 62 73', 'none', 2.4);
        s += p('M37.5 93H45V99.5H37.5Z', 'none', 1.8) + p('M55 93H62.5V99.5H55Z', 'none', 1.8);
      } else if (av.ao === 'somi') {
        s += p('M43 72.5L50 80.5L45.5 83L40.5 76Z', '#fff8ec', 2.2) + p('M57 72.5L50 80.5L54.5 83L59.5 76Z', '#fff8ec', 2.2);
        s += '<circle cx="50" cy="88" r="1.5" fill="' + V + '"/><circle cx="50" cy="96" r="1.5" fill="' + V + '"/>';
      } else {
        s += p('M44 73.5Q50 79 56 73.5', 'none', 2.2);
      }
    }
    // --- tay: buong cong tu nhien, ao phong thi tay ao ngan ---
    var tayDai = av.ao !== 'thun';
    s += chi('M36.5 79Q30 88 29.5 99', tayDai ? ao : da) + chi('M63.5 79Q70 88 70.5 99', tayDai ? ao : da);
    if (!tayDai) s += chi('M36.5 79Q34 82 32.6 86', ao, 9) + chi('M63.5 79Q66 82 67.4 86', ao, 9);
    s += tron(29.5, 100.5, 4.6, da, 2.6) + tron(70.5, 100.5, 4.6, da, 2.6);
    if (av.pk !== 'bongbay') s += phuKien(av.pk, pk);
    // --- tai, dau, mat ---
    s += tron(22.5, 52, 5.5, da, 2.6) + tron(77.5, 52, 5.5, da, 2.6);
    s += '<path d="M21 51Q23 49 24.5 52M79 51Q77 49 75.5 52" fill="none" stroke="' + V + '" stroke-width="1.6" opacity=".45" stroke-linecap="round"/>';
    s += tron(50, 48, 28, da);
    s += '<path d="M28 60Q38 74 50 75Q62 74 72 60" fill="none" stroke="' + BONG + '" stroke-width="3"/>';
    s += matNv(av.mat);
    // --- toc phia truoc (mai) + anh bong ---
    if (av.toc === 'xu') s += p('M22 50Q19 26 30 20L31 10L40 17L46 6L54 15.5L62 8L65 18.5Q80 24 78 50Q74 37 64 34.5Q50 30.5 36 34.5Q26 37.5 22 50Z', toc);
    else if (av.toc === 'ngan') s += p('M22 50Q19 16 50 16Q81 16 78 50Q75 38 70 36Q64 30.5 56 33Q48 26.5 40 33Q30 33 26 40Q23 44 22 50Z', toc);
    else s += p('M22 52Q19 16 50 16Q81 16 78 52Q76 40 68 35Q62 44.5 47 42Q54 37 53 30.5Q42 41 30 41.5Q25 45 22 52Z', toc);
    s += '<path d="M33 25Q41 19 50 19.5" fill="none" stroke="' + SANG + '" stroke-width="3" stroke-linecap="round"/>';
    s += muNv(av.mu, mu) + kinhNv(av.kinh);
    if (av.pk === 'bongbay') s += phuKien('bongbay', pk); // bay tren cao: ve sau cung de khong bi toc / mu che
    return s + '</svg>';
  }
  // ngoi sao 5 canh tam (cx, cy), ban kinh ngoai R, trong r
  function sao5(cx, cy, R, r) {
    var d = '';
    for (var i = 0; i < 10; i++) {
      var g = Math.PI / 5 * i - Math.PI / 2, k = i % 2 ? r : R;
      d += (i ? 'L' : 'M') + (cx + k * Math.cos(g)).toFixed(1) + ' ' + (cy + k * Math.sin(g)).toFixed(1);
    }
    return d + 'Z';
  }
  // Mat + long may + mui + mieng theo bieu cam
  function matNv(m) {
    var MAT = '#3b2a40';
    var may = '<path d="M35.5 44.5Q40 42 44.5 44.5M55.5 44.5Q60 42 64.5 44.5" fill="none" stroke="' + V + '" stroke-width="1.8" stroke-linecap="round" opacity=".7"/>';
    var mo = '<ellipse cx="32.5" cy="59.5" rx="4.6" ry="2.7" fill="#ff8fa3" opacity=".55"/><ellipse cx="67.5" cy="59.5" rx="4.6" ry="2.7" fill="#ff8fa3" opacity=".55"/>';
    var mui = '<ellipse cx="50" cy="57" rx="1.3" ry=".9" fill="#c98463" opacity=".6"/>';
    var matMo = function (x, to) {
      return '<ellipse cx="' + x + '" cy="52" rx="' + (to ? 5 : 4.1) + '" ry="' + (to ? 6 : 5.2) + '" fill="' + MAT + '"/>' +
        '<circle cx="' + (x + 1.5) + '" cy="50" r="' + (to ? 2 : 1.7) + '" fill="#fff"/><circle cx="' + (x - 1.4) + '" cy="54.3" r="' + (to ? 1.1 : .8) + '" fill="#fff"/>' +
        (to ? '<path d="M' + (x - 1) + ' 46.5L' + (x - 0.4) + ' 45L' + (x + 0.2) + ' 46.5" fill="#fff"/>' : '');
    };
    var matNham = function (x) { return '<path d="M' + (x - 4.5) + ' 53Q' + x + ' 46.5 ' + (x + 4.5) + ' 53" fill="none" stroke="' + MAT + '" stroke-width="2.6" stroke-linecap="round"/>'; };
    var cuoi = '<path d="M46 60.5Q50 64 54 60.5" fill="none" stroke="' + V + '" stroke-width="2.3" stroke-linecap="round"/>';
    var s;
    if (m === 'tit') s = matNham(40) + matNham(60) + '<path d="M45 59.5Q50 67.5 55 59.5Z" fill="#c0392b" stroke="' + V + '" stroke-width="2" stroke-linejoin="round"/><path d="M47.5 63.6Q50 62 52.5 63.6" fill="none" stroke="#ff8fa3" stroke-width="1.6"/>';
    else if (m === 'nhay') s = matMo(40) + matNham(60) + '<path d="M46 60Q50.5 64.5 55 59.5" fill="none" stroke="' + V + '" stroke-width="2.3" stroke-linecap="round"/>';
    else if (m === 'sao') s = matMo(40, true) + matMo(60, true) + '<path d="M47 60.5Q50 63 53 60.5" fill="none" stroke="' + V + '" stroke-width="2.3" stroke-linecap="round"/>';
    else if (m === 'le') s = matMo(40) + matMo(60) + '<path d="M50 61.5Q53.5 61.5 53.5 64.5Q53.5 67 51 67Q48.5 67 48.5 64.5Z" fill="#ff6b81" stroke="' + V + '" stroke-width="1.8"/><path d="M45.5 60.5Q50 62.5 54.5 60.5" fill="none" stroke="' + V + '" stroke-width="2.3" stroke-linecap="round"/>';
    else s = matMo(40) + matMo(60) + cuoi;
    return may + s + mui + mo;
  }
  function muNv(k, mu) {
    if (k === 'luoi') return p('M22 40Q22 13 50 13Q78 13 78 40Z', mu) + p('M50 37H86Q93 44 83 44.5H50Z', mu) + tron(50, 13.5, 2.6, mu, 2.2) + '<path d="M30 24Q38 17 48 17" fill="none" stroke="' + SANG + '" stroke-width="2.6" stroke-linecap="round"/>';
    if (k === 'nonla') return p('M5 40L50 3L95 40Q50 50 5 40Z', '#f3d27a') + '<path d="M28 22L50 42M72 22L50 42M50 3V42" stroke="' + V + '" stroke-width="1.5" opacity=".3"/>';
    if (k === 'len') return p('M20 42Q20 11 50 11Q80 11 80 42Z', mu) + '<rect x="17" y="35" width="66" height="11" rx="5.5" fill="' + mu + '"' + net() + '/>' +
      '<path d="M26 40.5H74" stroke="' + V + '" stroke-width="1.4" stroke-dasharray="2 3" opacity=".35"/>' + tron(50, 9.5, 6.5, '#fff8ec');
    if (k === 'no') return p('M66 22L79 12L81 32Z', mu) + p('M66 22L53 12L55 32Z', mu) + tron(66, 22, 4.8, mu, 2.6);
    if (k === 'vuong') return p('M29 30L33 8L42 20L50 3L58 20L67 8L71 30Z', '#ffc83d') + '<circle cx="50" cy="22" r="2.8" fill="#e5533d"/><circle cx="38" cy="25" r="2.1" fill="#4fc3f7"/><circle cx="62" cy="25" r="2.1" fill="#4fc3f7"/>';
    if (k === 'bao') return p('M19 35Q25 11 57 11Q84 13 82 33Q50 43 19 35Z', mu) + tron(57, 10, 3.2, mu, 2.4) + '<path d="M28 25Q36 17 47 16" fill="none" stroke="' + SANG + '" stroke-width="2.6" stroke-linecap="round"/>';
    if (k === 'coi') return '<ellipse cx="50" cy="35" rx="41" ry="9.5" fill="#f3d27a"' + net() + '/>' + p('M29 35Q29 11 50 11Q71 11 71 35Z', '#f3d27a') +
      '<rect x="29" y="27" width="42" height="7" fill="' + mu + '"' + net(2.4) + '/>';
    if (k === 'tho') return '<ellipse cx="37" cy="7" rx="7" ry="18" transform="rotate(-12 37 7)" fill="#fff8ec"' + net() + '/><ellipse cx="63" cy="7" rx="7" ry="18" transform="rotate(12 63 7)" fill="#fff8ec"' + net() + '/>' +
      '<ellipse cx="37" cy="8" rx="3" ry="11.5" transform="rotate(-12 37 8)" fill="#ff8fb1"/><ellipse cx="63" cy="8" rx="3" ry="11.5" transform="rotate(12 63 8)" fill="#ff8fb1"/>' +
      '<path d="M24 33Q50 11 76 33" fill="none" stroke="' + V + '" stroke-width="4.5" stroke-linecap="round"/>';
    if (k === 'meo') return p('M23 36L25 6L45 22Z', mu) + p('M77 36L75 6L55 22Z', mu) + '<path d="M28 26L29 13L38 21Z M72 26L71 13L62 21Z" fill="#ff8fb1"/>';
    if (k === 'hoa') return '<path d="M23 35Q50 13 77 35" fill="none" stroke="#4caf50" stroke-width="4.5" stroke-linecap="round"/>' +
      [[27, 31, '#ff8fb1'], [38, 23, '#ffc83d'], [50, 20, '#e5533d'], [62, 23, '#fff8ec'], [73, 31, '#ff8fb1']].map(function (h) {
        return tron(h[0], h[1], 5.5, h[2], 2) + '<circle cx="' + h[0] + '" cy="' + h[1] + '" r="1.8" fill="#e09b12"/>';
      }).join('');
    if (k === 'bep') return p('M31 33V22Q16 20 22 8Q30 -2 40 4Q50 -5 60 4Q70 -2 78 8Q84 20 69 22V33Z', '#ffffff') + '<rect x="30" y="26" width="40" height="9" rx="2" fill="#ffffff"' + net(2.4) + '/>';
    if (k === 'kep') return p(sao5(69, 25, 7.5, 3.3), mu, 2.4);
    return '';
  }
  function kinhNv(k) {
    if (k === 'den') return '<rect x="30.5" y="46" width="18" height="12.5" rx="4.5" fill="' + V + '"/><rect x="51.5" y="46" width="18" height="12.5" rx="4.5" fill="' + V + '"/>' +
      '<path d="M48 50H52" stroke="' + V + '" stroke-width="3"/><path d="M34 49L39 49M55 49L60 49" stroke="#fff" stroke-width="2" opacity=".55" stroke-linecap="round"/>';
    if (k === 'tron') return '<circle cx="40" cy="52" r="7.8" fill="#fff" fill-opacity=".22"' + net(2.4) + '/><circle cx="60" cy="52" r="7.8" fill="#fff" fill-opacity=".22"' + net(2.4) + '/><path d="M47.8 51H52.2" stroke="' + V + '" stroke-width="2.4"/>';
    if (k === 'tim') return [40, 60].map(function (x) {
      return p('M' + x + ' 60Q' + (x - 10.5) + ' 53 ' + (x - 8.5) + ' 47.5Q' + (x - 6) + ' 43.5 ' + x + ' 47.5Q' + (x + 6) + ' 43.5 ' + (x + 8.5) + ' 47.5Q' + (x + 10.5) + ' 53 ' + x + ' 60Z', '#ff4f7b', 2.4);
    }).join('') + '<path d="M48 50H52" stroke="' + V + '" stroke-width="2.4"/>';
    if (k === 'sao') return p(sao5(40, 52, 10, 4.4), '#ffc83d', 2.4) + p(sao5(60, 52, 10, 4.4), '#ffc83d', 2.4) + '<path d="M48 51H52" stroke="' + V + '" stroke-width="2.4"/>';
    if (k === 'boi') return '<path d="M21 52H79" stroke="#4fc3f7" stroke-width="4.5"/><ellipse cx="40" cy="52" rx="8.5" ry="7" fill="#4fc3f7" fill-opacity=".45"' + net(2.4) + '/><ellipse cx="60" cy="52" rx="8.5" ry="7" fill="#4fc3f7" fill-opacity=".45"' + net(2.4) + '/>';
    if (k === 'vuong') return '<rect x="31" y="45.5" width="17.5" height="13" rx="2.5" fill="#fff" fill-opacity=".2"' + net(2.8) + '/><rect x="51.5" y="45.5" width="17.5" height="13" rx="2.5" fill="#fff" fill-opacity=".2"' + net(2.8) + '/><path d="M48.5 51H51.5" stroke="' + V + '" stroke-width="2.8"/>';
    return '';
  }
  // Phu kien deo tren nguoi / cam o tay phai (gau bong om o tay trai)
  function phuKien(k, c) {
    if (k === 'balo') return '<rect x="37" y="74" width="5.5" height="27" rx="2.5" fill="' + c + '"' + net(2.4) + '/><rect x="57.5" y="74" width="5.5" height="27" rx="2.5" fill="' + c + '"' + net(2.4) + '/>';
    if (k === 'khan') return p('M35 72Q50 83 65 72L67 79.5Q50 91 33 79.5Z', c) + p('M56 80H64.5L65.5 97Q61 99.5 57 97Z', c) + '<path d="M58 92H64.5" stroke="' + V + '" stroke-width="1.4" opacity=".4"/>';
    if (k === 'cavat') return p('M47.5 75H52.5L51.6 79L54.5 95L50 100L45.5 95L48.4 79Z', c, 2.4);
    if (k === 'noco') return p('M50 77L40 71V83Z', c, 2.4) + p('M50 77L60 71V83Z', c, 2.4) + tron(50, 77, 3.2, c, 2);
    if (k === 'quat') return p('M70.5 100L58 82Q75 69 92 81Z', c, 2.4) + '<path d="M70.5 100L64 79M70.5 100L75 74.5M70.5 100L85 77" stroke="' + V + '" stroke-width="1.5" opacity=".45"/>';
    if (k === 'bongbay') return '<path d="M70.5 99Q80 72 84 44" fill="none" stroke="' + V + '" stroke-width="1.5"/>' +
      '<ellipse cx="84" cy="30" rx="11.5" ry="13.5" fill="' + c + '"' + net() + '/>' + p('M82 43.3H86L84 46.5Z', c, 2) + '<ellipse cx="80" cy="25" rx="2.6" ry="4.2" fill="#fff" opacity=".55"/>';
    if (k === 'sach') return '<g transform="rotate(-8 72 98)"><rect x="63" y="87" width="18" height="22" rx="2.5" fill="' + c + '"' + net(2.4) + '/><path d="M66 91.5H78M66 96H75" stroke="#fff8ec" stroke-width="2" stroke-linecap="round"/></g>';
    if (k === 'denlong') return '<path d="M70.5 99L86 93V98" fill="none" stroke="' + V + '" stroke-width="2"/>' +
      '<rect x="80" y="97.5" width="12" height="4" rx="1.2" fill="#ffc83d"' + net(2) + '/><ellipse cx="86" cy="109" rx="10.5" ry="9.5" fill="#e5533d"' + net() + '/>' +
      '<path d="M86 100Q80 109 86 118M86 100Q92 109 86 118" fill="none" stroke="' + V + '" stroke-width="1.4" opacity=".35"/>' +
      '<rect x="80" y="116.5" width="12" height="4" rx="1.2" fill="#ffc83d"' + net(2) + '/><path d="M86 120.5V128" stroke="#ffc83d" stroke-width="2.6" stroke-linecap="round"/>';
    if (k === 'tui') return '<path d="M66 103Q71 92.5 76 103" fill="none" stroke="' + V + '" stroke-width="2.6"/>' + p('M63 103H79L81.5 119.5H60.5Z', c, 2.4) + '<circle cx="71" cy="109" r="1.9" fill="#ffc83d"/>';
    if (k === 'gau') return tron(18.5, 93.5, 3.8, '#c98a4b', 2) + tron(29.5, 93.5, 3.8, '#c98a4b', 2) +
      '<ellipse cx="24" cy="110.5" rx="9" ry="9.5" fill="#c98a4b"' + net(2.4) + '/>' + tron(24, 99.5, 7.5, '#c98a4b', 2.4) +
      '<circle cx="21.3" cy="98.6" r="1.25" fill="' + V + '"/><circle cx="26.7" cy="98.6" r="1.25" fill="' + V + '"/><ellipse cx="24" cy="102.3" rx="2.6" ry="1.9" fill="#f3d27a"/><ellipse cx="24" cy="111" rx="4.5" ry="5" fill="#f3d27a" opacity=".7"/>';
    return '';
  }

  // Nhan vat mac dinh (chua tu thiet ke): chon theo ma tai khoan nen luon giong nhau
  function bam(str) {
    var h = 7;
    for (var i = 0; i < String(str).length; i++) h = (h * 31 + String(str).charCodeAt(i)) >>> 0;
    return h;
  }
  function macDinh(id) {
    var h = bam(id || 'x');
    return {
      da: h % 2, toc: KIEU.toc[(h >>> 3) % 6].k, mt: (h >>> 6) % 3, ao: 'thun', ma: (h >>> 9) % 6,
      duoi: KIEU.duoi[(h >>> 12) % 3].k, md: [4, 7, 5, 0][(h >>> 14) % 4], mu: '', mm: 0, kinh: '',
    };
  }
  // "Nguyen Gia My" -> "Gia My": the ten tren dau nhan vat gon
  function tenNgan(t) {
    var ds = String(t || '').trim().split(/\s+/).filter(Boolean);
    return ds.length >= 3 ? ds.slice(-2).join(' ') : ds.join(' ');
  }

  window.NhanVat = {
    svg: svg, macDinh: macDinh, tenNgan: tenNgan, KIEU: KIEU,
    DA: DA, MAU_TOC: MAU_TOC, MAU: MAU, TEN_MAU: TEN_MAU, TEN_MAU_TOC: TEN_MAU_TOC,
  };
})();
