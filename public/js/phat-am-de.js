/* ══════════════════════════════════════════════════════════════════
   RA ĐỀ PHÁT ÂM
   ------------------------------------------------------------------
   Tu MOT am tiet, tu sinh cac dap an nhieu (distractor) bang cach:
     · doi thanh dieu    — bā / bá / bǎ / bà
     · doi thanh mau     — bā / pā   (bat hoi hay khong)
     · doi van mau       — bān / bāng (duoi -n hay -ng)
   Ba huong nay dung dung ba loi hoc sinh Viet hay mac, nen de ra bao
   gio cung "co ly" chu khong phai bon lua chon ngau nhien vo thuong.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var DAU = {
    a: 'āáǎà', o: 'ōóǒò', e: 'ēéěè',
    i: 'īíǐì', u: 'ūúǔù', 'ü': 'ǖǘǚǜ'
  };
  // Bang tra nguoc: ký tu co dau -> { goc, thanh }
  var NGUOC = {};
  Object.keys(DAU).forEach(function (g) {
    DAU[g].split('').forEach(function (c, i) { NGUOC[c] = { goc: g, thanh: i + 1 }; });
  });

  function boThanh(py) {
    return String(py || '').split('').map(function (c) {
      return NGUOC[c] ? NGUOC[c].goc : c;
    }).join('');
  }
  function layThanh(py) {
    var t = 0;
    String(py || '').split('').forEach(function (c) { if (NGUOC[c]) t = NGUOC[c].thanh; });
    return t;                                   // 0 = thanh nhe / khong dau
  }
  /* Quy tac dat dau: co a thi dat tren a; khong co a ma co o hoac e thi
     dat tren chu do; con lai dat tren nguyen am CUOI (nen iu -> u, ui -> i). */
  function datThanh(goc, thanh) {
    goc = boThanh(goc);
    if (!thanh) return goc;
    var ng = 'aoeiuü';
    var at = goc.indexOf('a');
    if (at < 0) {
      at = goc.indexOf('o');
      if (at < 0) at = goc.indexOf('e');
    }
    if (at < 0) {
      for (var i = goc.length - 1; i >= 0; i--) {
        if (ng.indexOf(goc[i]) >= 0) { at = i; break; }
      }
    }
    if (at < 0) return goc;
    var c = goc[at];
    if (!DAU[c]) return goc;
    return goc.slice(0, at) + DAU[c][thanh - 1] + goc.slice(at + 1);
  }

  var THANH_MAU = ['zh', 'ch', 'sh', 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l',
                   'g', 'k', 'h', 'j', 'q', 'x', 'r', 'z', 'c', 's', 'y', 'w'];
  function tach(py) {
    var g = boThanh(py);
    for (var i = 0; i < THANH_MAU.length; i++) {
      var t = THANH_MAU[i];
      if (g.indexOf(t) === 0) return { dau: t, cuoi: g.slice(t.length) };
    }
    return { dau: '', cuoi: g };
  }

  // Cac cap thanh mau hoc sinh Viet hay lan
  var CAP_DAU = [['b', 'p'], ['d', 't'], ['g', 'k'], ['j', 'q'], ['z', 'c'],
                 ['zh', 'ch'], ['z', 'zh'], ['c', 'ch'], ['s', 'sh'],
                 ['n', 'l'], ['f', 'h'], ['x', 'sh'], ['j', 'zh'], ['q', 'ch']];
  // Cac cap van mau hay lan — nang nhat la duoi -n / -ng
  var CAP_CUOI = [['an', 'ang'], ['en', 'eng'], ['in', 'ing'], ['ian', 'iang'],
                  ['uan', 'uang'], ['uen', 'ueng'], ['un', 'ong'], ['ai', 'ei'],
                  ['ao', 'ou'], ['ie', 'üe'], ['u', 'ü'], ['iu', 'ui'], ['e', 'o']];

  function doiTheoCap(x, cap) {
    for (var i = 0; i < cap.length; i++) {
      if (cap[i][0] === x) return cap[i][1];
      if (cap[i][1] === x) return cap[i][0];
    }
    return null;
  }

  /* Bang am tiet chuan cua tieng Pho thong (khong ke thanh dieu).
     Doi thanh mau / van mau co the de ra chuoi KHONG PHAI am tiet that
     (vd "shiu", "zhü") — loc qua bang nay de dap an nhieu luon la am
     tiet co that, khong thi thay co nhin phat biet ngay la de sai. */
  var BANG = (
    'a ai an ang ao e ei en eng er o ou ' +
    'ba bo bai bei bao ban ben bang beng bi bie biao bian bin bing bu ' +
    'pa po pai pei pao pou pan pen pang peng pi pie piao pian pin ping pu ' +
    'ma mo me mai mei mao mou man men mang meng mi mie miao miu mian min ming mu ' +
    'fa fo fei fou fan fen fang feng fu ' +
    'da de dai dei dao dou dan den dang deng dong di die diao diu dian ding du duo dui duan dun ' +
    'ta te tai tao tou tan tang teng tong ti tie tiao tian ting tu tuo tui tuan tun ' +
    'na ne nai nei nao nou nan nen nang neng nong ni nie niao niu nian nin niang ning nu nuo nuan nun nü nüe ' +
    'la le lai lei lao lou lan lang leng long li lia lie liao liu lian lin liang ling lu luo luan lun lü lüe ' +
    'ga ge gai gei gao gou gan gen gang geng gong gu gua guo guai gui guan gun guang ' +
    'ka ke kai kei kao kou kan ken kang keng kong ku kua kuo kuai kui kuan kun kuang ' +
    'ha he hai hei hao hou han hen hang heng hong hu hua huo huai hui huan hun huang ' +
    'ji jia jie jiao jiu jian jin jiang jing jiong ju jue juan jun ' +
    'qi qia qie qiao qiu qian qin qiang qing qiong qu que quan qun ' +
    'xi xia xie xiao xiu xian xin xiang xing xiong xu xue xuan xun ' +
    'zha zhe zhi zhai zhei zhao zhou zhan zhen zhang zheng zhong zhu zhua zhuo zhuai zhui zhuan zhun zhuang ' +
    'cha che chi chai chao chou chan chen chang cheng chong chu chuo chuai chui chuan chun chuang ' +
    'sha she shi shai shei shao shou shan shen shang sheng shu shua shuo shuai shui shuan shun shuang ' +
    're ri rao rou ran ren rang reng rong ru rua ruo rui ruan run ' +
    'za ze zi zai zei zao zou zan zen zang zeng zong zu zuo zui zuan zun ' +
    'ca ce ci cai cao cou can cen cang ceng cong cu cuo cui cuan cun ' +
    'sa se si sai sao sou san sen sang seng song su suo sui suan sun ' +
    'ya yao you yan yang ye yi yin ying yo yong yu yuan yue yun ' +
    'wa wo wai wei wan wen wang weng wu'
  ).split(' ');
  var COTHAT = {};
  BANG.forEach(function (x) { if (x) COTHAT[x] = 1; });
  function laAmTiet(x) { return !!COTHAT[boThanh(x)]; }

  function tron(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = b[i]; b[i] = b[j]; b[j] = t;
    }
    return b;
  }

  /* Tra ve { luaChon: [...], dung: index } — n lua chon, luon co dap an. */
  function raDe(py, n) {
    n = n || 4;
    var goc = boThanh(py), thanh = layThanh(py);
    var p = tach(py);
    var ds = [py], co = {};
    co[py] = 1;

    function them(x) {
      if (!x || co[x] || !laAmTiet(x)) return;
      co[x] = 1;
      ds.push(x);
    }

    // 1) doi thanh mau
    var dauMoi = doiTheoCap(p.dau, CAP_DAU);
    if (dauMoi) them(datThanh(dauMoi + p.cuoi, thanh));
    // 2) doi van mau
    var cuoiMoi = doiTheoCap(p.cuoi, CAP_CUOI);
    if (cuoiMoi) them(datThanh(p.dau + cuoiMoi, thanh));
    // 3) doi thanh dieu — lay cac thanh khac, uu tien 2 va 3 vi de nham nhat
    tron([2, 3, 4, 1]).forEach(function (t) {
      if (t !== thanh) them(datThanh(goc, t));
    });

    var ra = tron(ds.slice(0, n));
    return { luaChon: ra, dung: ra.indexOf(py) };
  }

  window.PhatAmDe = {
    boThanh: boThanh,
    layThanh: layThanh,
    datThanh: datThanh,
    tach: tach,
    raDe: raDe
  };
})();
