/* Nhan vat ao cua hoc sinh trong Nong trai: ve SVG theo lua chon (toc, ao, quan/vay, mu, kinh, mau da).
   Cung phong cach hinh nong trai: net vien #2b1d3a, mau phang, de thuong.
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
    ],
    kinh: [
      { k: '', vn: 'Không đeo', zh: '', py: '' },
      { k: 'den', vn: 'Kính đen', zh: '墨镜', py: 'mòjìng' },
      { k: 'tron', vn: 'Kính cận', zh: '眼镜', py: 'yǎnjìng' },
      { k: 'tim', vn: 'Kính trái tim', zh: '爱心眼镜', py: 'àixīn yǎnjìng' },
    ],
  };

  function net(w) { return ' stroke="' + V + '" stroke-width="' + (w || 3) + '" stroke-linejoin="round" stroke-linecap="round"'; }
  function p(d, fill, w) { return '<path d="' + d + '" fill="' + fill + '"' + net(w) + '/>'; }

  function svg(av, cls) {
    av = av || macDinh('');
    var da = DA[av.da] || DA[0], toc = MAU_TOC[av.mt] || MAU_TOC[0];
    var ao = MAU[av.ma] || MAU[0], duoi = MAU[av.md] || MAU[4], mu = MAU[av.mm] || MAU[0];
    var laAoDai = av.ao === 'aodai';
    var s = '<svg class="' + (cls || 'nv-svg') + '" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">';
    s += '<ellipse cx="50" cy="131" rx="22" ry="4.5" fill="#000" opacity=".18"/>';
    // toc phia sau
    if (av.toc === 'dai') s += p('M23 44Q21 18 50 17Q79 18 77 44L80 98Q65 103 50 101Q35 103 20 98Z', toc);
    if (av.toc === 'bob') s += p('M22 46Q20 17 50 16Q80 17 78 46L79 72Q64 76 50 74Q36 76 21 72Z', toc);
    if (av.toc === 'duoi') s += p('M70 30Q94 34 88 62Q86 76 76 84Q80 64 68 48Z', toc);
    if (av.toc === 'bui') s += '<circle cx="27" cy="24" r="10" fill="' + toc + '"' + net() + '/><circle cx="73" cy="24" r="10" fill="' + toc + '"' + net() + '/>';
    // chan + quan / vay
    var chan = '<rect x="38" y="104" width="9" height="21" rx="3" fill="' + da + '"' + net() + '/><rect x="53" y="104" width="9" height="21" rx="3" fill="' + da + '"' + net() + '/>';
    if (laAoDai) s += p('M37 100H63V125H52.5L50 110L47.5 125H37Z', '#fff8ec');
    else if (av.duoi === 'dai') s += p('M36 100H64V125H52.5L50 108L47.5 125H36Z', duoi);
    else if (av.duoi === 'short') s += chan + p('M35 100H65V114H51.5L50 109L48.5 114H35Z', duoi);
    else s += chan + p('M35 98H65L73 118Q50 123 27 118Z', duoi);
    // giay
    s += p('M36 124H48Q49 131 42 131H36Q32 131 36 124Z', '#6d4c41') + p('M52 124H64Q68 131 64 131H58Q51 131 52 124Z', '#6d4c41');
    // tay (tay ao dai voi ao khoac / so mi / ao dai, tay ngan voi ao phong)
    var tayDai = av.ao !== 'thun';
    s += '<rect x="22" y="75" width="11" height="25" rx="5" fill="' + (tayDai ? ao : da) + '"' + net() + '/>';
    s += '<rect x="67" y="75" width="11" height="25" rx="5" fill="' + (tayDai ? ao : da) + '"' + net() + '/>';
    if (!tayDai) s += '<rect x="21" y="73" width="13" height="11" rx="4" fill="' + ao + '"' + net() + '/><rect x="66" y="73" width="13" height="11" rx="4" fill="' + ao + '"' + net() + '/>';
    s += '<circle cx="27.5" cy="101" r="5" fill="' + da + '"' + net() + '/><circle cx="72.5" cy="101" r="5" fill="' + da + '"' + net() + '/>';
    // co
    s += '<rect x="44" y="64" width="12" height="10" fill="' + da + '"/>';
    // than ao
    if (laAoDai) {
      s += p('M32 77Q32 70 40 70H60Q68 70 68 77V119Q50 122 32 119Z', ao);
      s += p('M44 70H56V75H44Z', ao, 2.5) + '<path d="M50 82V116" stroke="' + V + '" stroke-width="1.5" opacity=".35"/>';
    } else {
      s += p('M32 77Q32 70 40 70H60Q68 70 68 77V104H32Z', ao);
      if (av.ao === 'khoac') {
        s += '<path d="M50 74V104" stroke="' + V + '" stroke-width="2.5"/>' + p('M37 70Q50 82 63 70', 'none', 2.5);
        s += p('M37 92H45V99H37Z', 'none', 2) + p('M55 92H63V99H55Z', 'none', 2);
      } else if (av.ao === 'somi') {
        s += p('M42 70L50 79L58 70Z', '#fff8ec', 2.5);
        s += '<circle cx="50" cy="86" r="1.6" fill="' + V + '"/><circle cx="50" cy="95" r="1.6" fill="' + V + '"/>';
      } else {
        s += p('M43 70Q50 76 57 70', 'none', 2.5);
      }
    }
    // dau + mat
    s += '<circle cx="50" cy="46" r="25" fill="' + da + '"' + net() + '/>';
    s += '<ellipse cx="41" cy="50" rx="3.2" ry="4" fill="' + V + '"/><ellipse cx="59" cy="50" rx="3.2" ry="4" fill="' + V + '"/>';
    s += '<circle cx="42.2" cy="48.5" r="1.2" fill="#fff"/><circle cx="60.2" cy="48.5" r="1.2" fill="#fff"/>';
    s += '<ellipse cx="34" cy="57" rx="4" ry="2.4" fill="#ff8fa3" opacity=".65"/><ellipse cx="66" cy="57" rx="4" ry="2.4" fill="#ff8fa3" opacity=".65"/>';
    s += '<path d="M45.5 58Q50 62.5 54.5 58" fill="none" stroke="' + V + '" stroke-width="2.5" stroke-linecap="round"/>';
    // toc phia truoc (mai)
    if (av.toc === 'xu') s += p('M25 46Q22 26 32 22L34 13L42 20L50 10L57 20L66 13L68 23Q78 28 75 46Q66 33 50 34Q34 33 25 46Z', toc);
    else if (av.toc === 'ngan') s += p('M25 45Q24 19 50 19Q76 19 75 45Q68 32 58 34Q52 28 44 33Q32 31 25 45Z', toc);
    else s += p('M25 46Q23 19 50 19Q77 19 75 46Q70 36 62 35L56 29L50 35L40 31Q30 35 25 46Z', toc);
    // mu
    if (av.mu === 'luoi') s += p('M25 36Q26 15 50 15Q74 15 75 36Z', mu) + p('M50 33H84Q90 40 80 40H50Z', mu);
    else if (av.mu === 'nonla') s += p('M10 37L50 5L90 37Q50 45 10 37Z', '#f3d27a') + '<path d="M30 21L50 37M70 21L50 37M50 5V37" stroke="' + V + '" stroke-width="1.5" opacity=".35"/>';
    else if (av.mu === 'len') s += p('M24 38Q24 13 50 13Q76 13 76 38Z', mu) + '<rect x="21" y="32" width="58" height="9" rx="4" fill="' + mu + '"' + net() + '/><circle cx="50" cy="11" r="6" fill="#fff8ec"' + net() + '/>';
    else if (av.mu === 'no') s += p('M64 20L76 12L78 30Z', mu) + p('M64 20L52 12L54 30Z', mu) + '<circle cx="64" cy="21" r="4.5" fill="' + mu + '"' + net() + '/>';
    else if (av.mu === 'vuong') s += p('M31 26L35 8L43 18L50 5L57 18L65 8L69 26Z', '#ffc83d') + '<circle cx="50" cy="20" r="2.6" fill="#e5533d"/><circle cx="39" cy="22" r="2" fill="#4fc3f7"/><circle cx="61" cy="22" r="2" fill="#4fc3f7"/>';
    // kinh
    if (av.kinh === 'den') s += '<rect x="32" y="44" width="16" height="11" rx="4" fill="' + V + '"/><rect x="52" y="44" width="16" height="11" rx="4" fill="' + V + '"/><path d="M48 48H52" stroke="' + V + '" stroke-width="3"/><path d="M35 47L40 47" stroke="#fff" stroke-width="2" opacity=".6"/>';
    else if (av.kinh === 'tron') s += '<circle cx="41" cy="50" r="7" fill="#fff" fill-opacity=".25"' + net(2.5) + '/><circle cx="59" cy="50" r="7" fill="#fff" fill-opacity=".25"' + net(2.5) + '/><path d="M48 50H52" stroke="' + V + '" stroke-width="2.5"/>';
    else if (av.kinh === 'tim') s += p('M41 57Q31 50 33 45Q35 41 41 45Q47 41 49 45Q51 50 41 57Z', '#ff4f7b', 2.5) + p('M59 57Q49 50 51 45Q53 41 59 45Q65 41 67 45Q69 50 59 57Z', '#ff4f7b', 2.5);
    return s + '</svg>';
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
