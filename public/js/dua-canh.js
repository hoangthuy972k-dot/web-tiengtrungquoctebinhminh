// Cuoc dua ki thu — ve duong dua trong rung (dung chung man chieu public/js/lop-dua.js va dien thoai public/js/dua.js).
// DuaCanh.LV: danh sach linh vat (khoa khop LINH_VAT trong live.js).
// DuaCanh.ve(el, d, opt): d = { tong, ds: [{ ten, lv, buoc, xong, hang, la }] }; opt.gon = ban thu nho cho dien thoai.
(function () {
  'use strict';
  var V = '/images/dua/', F = '/images/farm/';
  var LV = {
    tho: { zh: '兔子', py: 'tùzi', vn: 'Thỏ', a: V }, rua: { zh: '乌龟', py: 'wūguī', vn: 'Rùa', a: V },
    khi: { zh: '猴子', py: 'hóuzi', vn: 'Khỉ', a: V }, cao: { zh: '狐狸', py: 'húli', vn: 'Cáo', a: V },
    voi: { zh: '大象', py: 'dàxiàng', vn: 'Voi', a: V }, ngua: { zh: '马', py: 'mǎ', vn: 'Ngựa', a: V },
    meo: { zh: '猫', py: 'māo', vn: 'Mèo', a: V }, cho: { zh: '狗', py: 'gǒu', vn: 'Chó', a: V },
    huou: { zh: '长颈鹿', py: 'chángjǐnglù', vn: 'Hươu cao cổ', a: V },
    ga: { zh: '鸡', py: 'jī', vn: 'Gà', a: F }, vit: { zh: '鸭', py: 'yā', vn: 'Vịt', a: F }, bo: { zh: '牛', py: 'niú', vn: 'Bò', a: F },
    cuu: { zh: '羊', py: 'yáng', vn: 'Cừu', a: F }, heo: { zh: '猪', py: 'zhū', vn: 'Heo', a: F },
    sutu: { zh: '狮子', py: 'shīzi', vn: 'Sư tử', a: F }, ho: { zh: '老虎', py: 'lǎohǔ', vn: 'Hổ', a: F },
    gautruc: { zh: '熊猫', py: 'xióngmāo', vn: 'Gấu trúc', a: F }, khunglong: { zh: '恐龙', py: 'kǒnglóng', vn: 'Khủng long', a: F },
  };
  var THU_TU = ['tho', 'rua', 'khi', 'cao', 'voi', 'ngua', 'meo', 'cho', 'huou', 'ga', 'vit', 'bo', 'cuu', 'heo', 'sutu', 'ho', 'gautruc', 'khunglong'];
  function anh(k) { var x = LV[k] || LV.tho; return x.a + (LV[k] ? k : 'tho') + '.svg'; }
  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // canh vat hai ben duong (vi tri co dinh de khong nhay moi lan ve)
  var XA = ['cay-thong', 'cay-tron', 'tre', 'cay-thong', 'cay-tron', 'cay-thong', 'tre', 'cay-tron', 'cay-thong', 'cay-tron', 'tre', 'cay-thong'];
  var GAN = ['bui', 'hoa', 'nam', 'da', 'hoa', 'bui', 'nam', 'hoa', 'bui', 'da', 'hoa', 'bui'];
  // cao moi cay / bui khac nhau mot chut (tinh san, CSS khong co phep chia lay du)
  function hangCanh(ds, cls, goc, buoc, du) {
    return '<div class="' + cls + '" aria-hidden="true">' + ds.map(function (k, i) {
      return '<img src="' + V + k + '.svg" alt="" draggable="false" style="--i:' + i + ';height:' + (goc + (i * buoc) % du) + '%">';
    }).join('') + '</div>';
  }
  var cu = new WeakMap(); // el -> { ten: buoc } de biet ai vua chay len (them hieu ung chay)

  function ve(el, d, opt) {
    opt = opt || {};
    var tong = Math.max(1, d.tong || 1);
    var ds = (d.ds || []).slice();
    var truoc = cu.get(el) || {};
    var sau = {};
    var gon = !!opt.gon;
    // dien thoai: dong nguoi qua dong thi giu top 5 + 2 ban quanh em + em
    var an = 0;
    if (gon && ds.length > 12) {
      var k = ds.findIndex(function (r) { return r.la; });
      var giu = {};
      ds.forEach(function (r, j) { if (j < 5 || Math.abs(j - k) <= 2) giu[j] = 1; });
      an = ds.length - Object.keys(giu).length;
      ds = ds.filter(function (r, j) { return giu[j]; });
    }
    var lan = ds.map(function (r, j) {
      var key = r.ten + '|' + r.lv;
      sau[key] = r.buoc;
      var chay = truoc[key] != null && r.buoc > truoc[key];
      var x = 7 + Math.min(1, r.buoc / tong) * 79; // ngay sau vach xuat phat -> vach dich 86%
      var lv = LV[r.lv] || LV.tho;
      return '<div class="dc-lan' + (r.la ? ' la' : '') + (j % 2 ? ' le' : '') + '">' +
        '<div class="dc-vat' + (chay ? ' chay' : '') + (r.xong ? ' ve' : '') + (r.hang === 1 && r.buoc > 0 ? ' dau' : '') + (x < 16 ? ' sat-trai' : x > 78 ? ' sat-phai' : '') + '" style="left:' + x.toFixed(2) + '%">' +
          '<span class="dc-ten">' + (r.hang <= 3 && r.buoc > 0 ? ['🥇', '🥈', '🥉'][r.hang - 1] + ' ' : '') + esc(r.ten) + (r.la ? ' (em)' : '') + '</span>' +
          '<img class="dc-hinh" src="' + anh(r.lv) + '" alt="' + esc(lv.vn) + '" draggable="false">' +
          '<span class="dc-bui" aria-hidden="true"></span>' +
        '</div></div>';
    }).join('');
    cu.set(el, sau);
    el.innerHTML = '<div class="dc-canh' + (gon ? ' gon' : '') + '" style="--so:' + Math.max(1, ds.length) + '">' +
      '<div class="dc-troi" aria-hidden="true"><i class="dc-mat-troi"></i><i class="dc-may m1"></i><i class="dc-may m2"></i><i class="dc-may m3"></i>' +
        '<i class="dc-chim c1"></i><i class="dc-chim c2"></i></div>' +
      '<svg class="dc-doi" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">' +
        '<path d="M0 20V11Q8 4 17 9T34 7T52 10T70 5T86 9T100 7V20Z" fill="#a9d88a"/>' +
        '<path d="M0 20V15Q10 9 22 13T45 12T66 14T84 11T100 13V20Z" fill="#7fc25e"/></svg>' +
      hangCanh(XA, 'dc-rung-xa', 72, 7, 28) +
      '<div class="dc-duong">' +
        '<div class="dc-vach dc-xp" aria-hidden="true"><img src="' + V + 'xuat-phat.svg" alt="" draggable="false"><b lang="zh">起点</b></div>' +
        '<div class="dc-vach dc-dich" aria-hidden="true"><img src="' + V + 'dich.svg" alt="" draggable="false"><b lang="zh">终点</b></div>' +
        '<div class="dc-lans">' + (lan || '<p class="dc-trong">Chưa có bạn nào trên đường đua</p>') + '</div>' +
      '</div>' +
      hangCanh(GAN, 'dc-rung-gan', 60, 13, 40) +
      (an ? '<p class="dc-an">… và ' + an + ' bạn khác</p>' : '') +
    '</div>';
  }

  window.DuaCanh = { LV: LV, THU_TU: THU_TU, anh: anh, ve: ve };
})();
