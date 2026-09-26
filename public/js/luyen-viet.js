/* ══════════════════════════════════════════════════════════
   LUYỆN VIẾT HSK 5 — 书写
   Dùng chung cho bước 6 của lộ trình (app.js) và thẻ "Viết đoạn"
   trên trang bài đầy đủ (hsk5-extra.js):
     LuyenViet.mount(hop, writingData, { key, onDone })

   · Hoàn thành câu (书写 第一部分): xếp mảnh thành câu, chấm ngay.
   · Viết đoạn 80 chữ (câu 99): nộp bài → máy soát lỗi hình thức
     NGAY (không cần mạng) → AI chấm chi tiết theo 4 tiêu chí, liệt kê
     từng lỗi sai → sửa → vì sao, gợi ý cấu trúc, trả bài đã sửa.
     AI hỏng/hết lượt thì học sinh vẫn có kết quả sơ bộ của máy.
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var HAN = /[㐀-鿿]/g;
  var LS_PREFIX = 'hyv_luyenviet:';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function demHan(t) { return (String(t || '').match(HAN) || []).length; }
  function boDau(t) { return String(t || '').replace(/[\s，。！？、,.!?；;：:“”"'‘’（）()]/g, ''); }
  function doc(key) { try { return JSON.parse(localStorage.getItem(LS_PREFIX + key)) || {}; } catch (e) { return {}; } }
  function ghi(key, v) { try { localStorage.setItem(LS_PREFIX + key, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function token() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth')); return a && a.token ? a.token : null; } catch (e) { return null; }
  }
  // Tron co dinh theo hat giong — moi lan mo thay cung mot thu tu, khong trung dap an
  function tron(arr, hat) {
    var a = arr.map(function (x, i) { return { x: x, i: i }; });
    var s = hat || 7;
    for (var i = a.length - 1; i > 0; i--) {
      s = (s * 9301 + 49297) % 233280;
      var j = Math.floor(s / 233280 * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    var dungThuTu = a.every(function (o, k) { return o.i === k; });
    if (dungThuTu && a.length > 1) a.push(a.shift());
    return a;
  }

  /* ---------- Máy soát lỗi: những lỗi hay gặp của học sinh Việt ----------
     Chỉ bắt những mẫu chắc chắn sai; mẫu có thể đúng tùy ngữ cảnh thì
     đánh dấu "nhe" (nên xem lại) chứ không trừ nặng. */
  var LUAT = [
    { re: /(^|[^但可还就总于要倒只真凡若或老])是(很|非常|十分|特别|挺)((?:(?!的)[一-鿿]){1,3})(?=[，。！？；,.!?]|$)/g, loai: 'ngữ pháp',
      sai: function (m) { return '是' + m[2] + m[3]; }, sua: function (m) { return m[2] + m[3]; },
      giai: 'Tính từ làm vị ngữ trực tiếp, KHÔNG cần 是 (khác tiếng Việt "là"): 他很高兴, không nói 他是很高兴.' },
    { re: /(很|非常|十分|特别|挺)(很|非常|十分|挺|太)|太(很|非常|十分|特别|挺)/g, loai: 'ngữ pháp', bo: function (m) { return m[1] && m[1] === m[2]; },
      sua: function (m) { return m[1] || '太'; },
      giai: 'Hai phó từ chỉ mức độ đứng liền nhau — chỉ giữ MỘT (很 / 非常 / 十分 / 太).' },
    { re: /越来越(很|非常|十分|特别|太|更|挺)/g, loai: 'ngữ pháp', sua: function () { return '越来越'; },
      giai: '越来越 đã mang nghĩa "càng ngày càng", không thêm 很/非常/更 phía sau: 越来越好.' },
    { re: /(^|[^有])(一点儿?)(贵|累|难|冷|热|忙|远|紧张|难过|不舒服|脏|乱|麻烦|晚|慢|咸|辣|吵|害怕|着急)(?=[，。！？了啊吗,.!?]|$)/g, loai: 'từ vựng',
      sai: function (m) { return m[2] + m[3]; }, sua: function (m) { return '有点儿' + m[3]; },
      giai: 'Muốn nói "hơi… (không vừa ý)" dùng 有点儿 + tính từ: 有点儿累. 一点儿 đứng SAU tính từ khi so sánh/đề nghị: 便宜一点儿.' },
    { re: /(说|写|做|跑|唱|跳|学|讲|睡|吃|长|玩|打|走|过|考|干)地(很|非常|特别|十分|不|太|真|挺|越来越)/g, loai: 'chữ viết',
      sua: function (m) { return m[1] + '得' + m[2]; },
      giai: 'Sau ĐỘNG TỪ, trước lời đánh giá mức độ dùng 得 (bổ ngữ trạng thái): 说得很好. 地 đứng TRƯỚC động từ.' },
    { re: /(认真|努力|慢慢|仔细|大声|小心|耐心|热情|用心|静静|轻轻|悄悄)得(?!很|非常|不|多|太|特别|要命|了|厉害)(?=[一-鿿])/g, loai: 'chữ viết',
      sua: function (m) { return m[1] + '地'; },
      giai: 'Tính từ đứng TRƯỚC động từ để tả cách làm thì dùng 地: 认真地学习. 得 dùng SAU động từ: 学得很认真.' },
    { re: /没(有)?(去|来|看|吃|做|写|买|说|听|见|回|学|找|用|打)(过)?了/g, loai: 'ngữ pháp',
      sua: function (m) { return '没' + (m[1] || '') + m[2] + (m[3] || ''); },
      giai: 'Câu phủ định bằng 没(有) KHÔNG dùng 了 phía sau động từ: 我没去, không nói 我没去了.' },
    { re: /(去|到|来|回|见|看|买|做|学|吃|玩)([一-鿿]{0,5}?)(昨天|今天|明天|去年|明年|今年|上个月|下个月|上个星期|下个星期|上周|下周|周末|晚上|早上)(?=[。！？，,.!?]|$)/g, loai: 'trật tự từ',
      sua: function (m) { return m[3] + '……' + m[1] + m[2]; },
      giai: 'Trạng ngữ THỜI GIAN đứng trước động từ (sau hoặc trước chủ ngữ), không đặt cuối câu như tiếng Việt: 我昨天去了北京.' },
    { re: /(学习|工作|吃饭|看书|上课|见面|休息|聊天|跑步|唱歌|等)在([一-鿿]{1,6}?)(?=[。！？，,.!?]|$)/g, loai: 'trật tự từ',
      sua: function (m) { return '在' + m[2] + m[1]; },
      giai: 'Trạng ngữ NƠI CHỐN 在 + nơi chốn đứng TRƯỚC động từ: 在图书馆学习, không nói 学习在图书馆.' },
    { re: /[，,]\s*和(?=[一-鿿])/g, loai: 'liên kết', nhe: true,
      sua: function () { return '，而且 / 并且 / 还'; },
      giai: 'Nếu 和 đang nối HAI VẾ CÂU (như chữ "và" tiếng Việt) thì sai — 和 chỉ nối danh từ; nối vế câu dùng 而且 / 并且 / 还. Nếu 和 nghĩa "cùng với ai" thì đúng.' },
    { re: /(经常|常常|每天|总是|天天|往往)([^，。！？,.!?]{0,8}?)了(?!解)/g, loai: 'ngữ pháp', nhe: true,
      sua: function (m) { return m[1] + m[2]; },
      giai: 'Việc lặp đi lặp lại theo thói quen (每天, 经常…) thường KHÔNG dùng 了. Chỉ giữ 了 nếu muốn nói "đã thay đổi" hoặc cảm thán.' },
    { re: /从来没有?(?:(?!过)[^，。！？,.!?]){1,3}(?=[，。！？,.!?]|$)/g, loai: 'ngữ pháp', nhe: true,
      sua: function (m) { return m[0].replace(/(没有?)(.)(.*)/, '$1$2过$3'); },
      giai: '从来没(有) + động từ thường đi với 过 để nói "chưa từng bao giờ": 从来没吵过架. (Phủ định thói quen thì dùng 从来不: 从来不抱怨.)' },
    { re: /的[一-鿿]{0,3}的[一-鿿]{0,3}的/g, loai: 'từ vựng', nhe: true,
      sua: function () { return 'bớt một chữ 的'; },
      giai: 'Ba chữ 的 gần nhau làm câu nặng nề — bỏ bớt 的 giữa các định ngữ quen thuộc (我妈妈, 中国朋友).' }
  ];

  // Nhung loi can nhin ca cau (cap tu ho ung, 比 + 很, dau cau, chu Latin)
  function soatCau(t, ds) {
    var cau = t.split(/[。！？!?]/);
    cau.forEach(function (c) {
      if (/虽然|虽说|尽管/.test(c) && !/但|可是|却|不过|还是|也/.test(c)) {
        ds.push({ sai: c.trim().slice(0, 30), sua: '虽然……，但是/可是……', loai: 'liên kết',
          giai: '虽然 phải có vế sau hô ứng 但是 / 可是 / 却 — tiếng Việt bỏ được "nhưng", tiếng Trung thì không.' });
      }
      if (/不但|不仅/.test(c) && !/而且|也|还|更|并且/.test(c)) {
        ds.push({ sai: c.trim().slice(0, 30), sua: '不但……，而且/也……', loai: 'liên kết',
          giai: '不但 / 不仅 phải có vế sau 而且 / 也 / 还 đi kèm.' });
      }
      c.split(/[，；,;]/).forEach(function (ve) {
        var i = ve.indexOf('比');
        while (i >= 0) {
          var truoc = ve.charAt(i - 1), sau = ve.charAt(i + 1);
          if ('较如赛例分'.indexOf(sau) < 0 && '对相无好'.indexOf(truoc) < 0) {
            var m = ve.slice(i).match(/(很|非常|十分|特别|太)(?!了)/);
            if (m) {
              ds.push({ sai: ve.trim(), sua: '比……更 / 还 + tính từ', loai: 'ngữ pháp',
                giai: 'Câu so sánh 比 KHÔNG dùng 很 / 非常 / 太; muốn nhấn mạnh dùng 更 / 还, hoặc thêm mức độ ở sau: 比他高一点儿 / 高得多.' });
            }
            break;
          }
          i = ve.indexOf('比', i + 1);
        }
      });
      // 一 + luong tu + 很/非常 + tinh tu + danh tu ma thieu 的: 一对很恩爱夫妻
      c.replace(/一(对|个|位|件|只|本|家|种|次|座|条|张)(很|非常|十分|特别)([^，。！？,.!?；;]{2,6})/g, function (m0, lt, pt, sau) {
        if (sau.indexOf('的') < 0) {
          ds.push({ sai: m0, sua: '一' + lt + pt + '……的……', loai: 'ngữ pháp',
            giai: 'Tính từ có 很 / 非常 đứng trước danh từ thì PHẢI có 的: 一对很恩爱的夫妻, 一个非常好的朋友.' });
        }
        return m0;
      });
      if (demHan(c) > 45 && !/[，,；;]/.test(c)) {
        ds.push({ sai: c.trim().slice(0, 20) + '…', sua: 'tách thành 2 câu', loai: 'liên kết', nhe: true,
          giai: 'Câu quá dài mà không ngắt — nên tách thành hai câu hoặc thêm dấu phẩy, người chấm dễ đọc hơn.' });
      }
    });
    var soDauTay = 0;
    t.replace(/[,.!?;:]/g, function (d, i) {
      var truoc = t.charAt(i - 1), sau = t.charAt(i + 1);
      if (/[一-鿿]/.test(truoc) || /[一-鿿]/.test(sau)) soDauTay++;
      return d;
    });
    if (soDauTay) {
      ds.push({ sai: soDauTay + ' dấu câu kiểu tiếng Việt/Anh (, . ! ?)', sua: '， 。 ！ ？', loai: 'dấu câu',
        giai: 'Bài viết tiếng Trung dùng dấu câu toàn khổ: dấu phẩy ，, dấu chấm 。 (hình tròn nhỏ), ！ ？. Dấu liệt kê giữa các từ là 、.' });
    }
    if (/[a-zA-Z]{2,}/.test(t)) {
      ds.push({ sai: (t.match(/[a-zA-Z]+/) || [''])[0], sua: 'viết bằng chữ Hán', loai: 'chữ viết',
        giai: 'Bài thi phải viết hoàn toàn bằng chữ Hán — chữ nào không nhớ thì đổi sang từ khác mình viết được, không viết pinyin.' });
    }
    if (/[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i.test(t)) {
      ds.push({ sai: 'chữ tiếng Việt trong bài', sua: 'viết bằng chữ Hán', loai: 'chữ viết', giai: 'Bài làm có chữ tiếng Việt — thay bằng chữ Hán.' });
    }
  }

  var NOI = ['有一次', '那天', '当时', '这时', '从那以后', '之后', '后来', '于是', '没想到', '结果', '因为', '所以', '虽然', '但是', '可是', '不过', '而且', '不但', '就在这时', '然后', '首先', '其次', '最后', '另外', '同时', '因此', '由于', '即使', '如果', '只要', '为了', '终于', '从此', '甚至', '却'];
  var MO = ['邻居', '朋友', '同学', '同事', '记得', '上个', '前几天', '有一次', '去年', '小时候', '从前', '我的'];
  var KET = ['明白', '觉得', '认为', '希望', '总之', '总的来说', '道理', '告诉我们', '从此', '感动', '应该', '相信', '让我', '羡慕'];

  function soatBai(t, d) {
    var ds = [];
    LUAT.forEach(function (l) {
      l.re.lastIndex = 0;
      var m;
      while ((m = l.re.exec(t))) {
        if (l.bo && l.bo(m)) continue;
        ds.push({ sai: l.sai ? l.sai(m) : m[0], sua: l.sua(m), loai: l.loai, giai: l.giai, nhe: !!l.nhe });
      }
    });
    (d.tuDung || []).forEach(function (w) {
      (w.sai || []).forEach(function (s) {
        var re; try { re = new RegExp(s.re, 'g'); } catch (e) { return; }
        var m;
        while ((m = re.exec(t))) {
          var them = s.re.indexOf('(?=') >= 0 ? 2 : 0;
          var lay = t.slice(m.index, m.index + m[0].length + them).split(/[，。！？,.!?；;]/)[0];
          ds.push({ sai: lay, sua: s.sua || '', loai: 'từ vựng', giai: s.giai, nhe: !!s.nhe, tu: w.tu });
          if (!m[0].length) re.lastIndex++;
        }
      });
    });
    soatCau(t, ds);

    var n = demHan(t);
    var tu = d.words || [];
    var thieu = tu.filter(function (w) { return t.indexOf(w) < 0; });
    var tuSai = {};
    ds.forEach(function (l) { if (l.tu && !l.nhe) tuSai[l.tu] = 1; });

    var noiDung = NOI.filter(function (w) { return t.indexOf(w) >= 0; });
    var cauCuoi = t.replace(/[。！？!?\s]+$/, '').split(/[。！？!?]/).pop() || '';
    var coKet = KET.some(function (w) { return cauCuoi.indexOf(w) >= 0; });
    var cauDau = t.split(/[。！？!?]/)[0] || '';
    var coMo = MO.some(function (w) { return cauDau.indexOf(w) >= 0; });

    var diemTu = tu.length ? Math.round(25 * (tu.length - thieu.length) / tu.length) - 2 * Object.keys(tuSai).length : 25;
    var diemDai = n < 40 ? 3 : n < 60 ? 8 : n < 70 ? 12 : n <= 120 ? 15 : 12;
    var diemNoi = [4, 9, 13, 16][Math.min(3, noiDung.length)] + (coMo ? 2 : 0) + (coKet ? 2 : 0);
    var loiNang = ds.filter(function (l) { return !l.nhe; }).length;
    var loiNhe = ds.length - loiNang;
    var diemNP = Math.max(0, 20 - 5 * loiNang - 2 * loiNhe);

    return {
      n: n, thieu: thieu, loi: ds, noi: noiDung, coKet: coKet,
      tieuChi: { tu: Math.max(0, diemTu), dai: diemDai, noi: diemNoi, np: diemNP },
      diem: Math.max(0, diemTu) + diemDai + diemNoi + diemNP // toi da 80
    };
  }

  // Goi y cau truc may tu dua ra: cau truc cua bai chua dung + tu noi/cau ket
  function goiYMay(t, d, kq) {
    var g = [];
    (d.cauTruc || []).forEach(function (c) {
      if (c.nhan && t.indexOf(c.nhan) < 0 && g.length < 3) g.push({ cauTruc: c.ten, viDu: c.vd, giai: c.khi });
    });
    if (kq.noi.length < 2) g.push({ cauTruc: '后来 / 于是 / 没想到 / 结果', viDu: '后来，……。没想到，……。', giai: 'Bài còn ít từ nối — thêm từ nối giữa các câu để câu chuyện liền mạch (tiêu chí bố cục).' });
    if (!kq.coKet) g.push({ cauTruc: '这件事让我明白了…… / 我觉得……', viDu: '这件事让我明白，……。', giai: 'Câu cuối chưa có cảm nghĩ/bài học — thêm một câu kết để bài trọn vẹn.' });
    return g;
  }

  // So sanh tung chu giua bai cua em va bai da sua (LCS) -> to mau cho them/bo
  function soSanh(a, b) {
    a = Array.from(a); b = Array.from(b);
    var n = a.length, m = b.length;
    if (n * m > 250000) return '<ins>' + esc(b.join('')) + '</ins>';
    var L = [];
    for (var i = 0; i <= n; i++) { L.push(new Array(m + 1).fill(0)); }
    for (i = n - 1; i >= 0; i--) for (var j = m - 1; j >= 0; j--) {
      L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    }
    var out = '', kieu = '', buf = '';
    function day(k, c) {
      if (k !== kieu) { if (buf) out += kieu ? '<' + kieu + '>' + esc(buf) + '</' + kieu + '>' : esc(buf); buf = ''; kieu = k; }
      buf += c;
    }
    i = 0; j = 0;
    while (i < n && j < m) {
      if (a[i] === b[j]) { day('', a[i]); i++; j++; }
      else if (L[i + 1][j] >= L[i][j + 1]) { day('del', a[i]); i++; }
      else { day('ins', b[j]); j++; }
    }
    while (i < n) day('del', a[i++]);
    while (j < m) day('ins', b[j++]);
    day('#', '');
    return out;
  }

  // To dam cac doan sai ngay trong bai cua em
  function danhDau(t, loi) {
    var vung = [];
    loi.forEach(function (l, k) {
      var s = String(l.sai || '').replace(/…$/, '');
      if (!s || /dấu câu|chữ/.test(s)) return;
      var i = t.indexOf(s);
      if (i < 0) return;
      if (vung.some(function (v) { return i < v[1] && i + s.length > v[0]; })) return;
      vung.push([i, i + s.length, k, l.nhe]);
    });
    vung.sort(function (x, y) { return x[0] - y[0]; });
    var out = '', p = 0;
    vung.forEach(function (v) {
      out += esc(t.slice(p, v[0])) + '<mark class="lv-mk' + (v[3] ? ' is-nhe' : '') + '">' + esc(t.slice(v[0], v[1])) + '<sup>' + (v[2] + 1) + '</sup></mark>';
      p = v[1];
    });
    return out + esc(t.slice(p));
  }

  /* ---------- Hướng dẫn cách làm bài (theo tài liệu tiết viết HSK 5) ---------- */
  var HUONG_DAN =
    '<div class="lv-card"><h3>Phần 书写 HSK 5 gồm những gì</h3>' +
      '<table class="lv-tbl"><tr><th>Câu</th><th>Dạng bài</th><th>Yêu cầu</th></tr>' +
      '<tr><td>91–98</td><td>完成句子 — xếp từ thành câu</td><td>Đúng ngữ pháp, đúng trật tự</td></tr>' +
      '<tr><td>99</td><td>看词写作 — viết đoạn dùng 5 từ</td><td>~80 chữ, dùng đủ 5 từ</td></tr>' +
      '<tr><td>100</td><td>看图写作 — viết theo tranh</td><td>~80 chữ, khớp nội dung tranh</td></tr></table>' +
      '<p class="lv-note">40 phút cho cả phần: 91–98 khoảng 12–15 phút, câu 99 và 100 mỗi câu 10–12 phút, 3–5 phút cuối soát bài.</p></div>' +
    '<div class="lv-card"><h3>4 bước làm câu 99</h3><ol class="lv-steps">' +
      '<li><b>审题</b> — Gạch chân 5 từ, xác định từ loại (danh / động / tính từ). Từ chưa chắc thì đặt vào câu ngắn, an toàn.</li>' +
      '<li><b>构思</b> — Hỏi: 5 từ này hay xuất hiện cùng nhau trong tình huống nào? Chọn MỘT chủ đề.</li>' +
      '<li><b>编故事</b> — Chọn nhân vật (我的朋友, 我的邻居…) — kể ngôi thứ ba dễ đủ ý, dễ đủ 80 chữ.</li>' +
      '<li><b>整理</b> — Viết theo khung 3 đoạn, rồi khoanh lại 5 từ để chắc đã dùng đủ.</li></ol></div>' +
    '<div class="lv-card"><h3>Khung 3 đoạn · khoảng 80 chữ</h3><div class="lv-khung">' +
      '<div><b>Mở · 15–20 chữ</b><span>Ai, khi nào, ở đâu</span><span class="lv-zh">上个月，我的邻居…… / 记得……的时候</span></div>' +
      '<div><b>Thân · 40–50 chữ</b><span>Diễn biến, lồng 5 từ, có từ nối</span><span class="lv-zh">后来 · 于是 · 没想到 · 结果 · 虽然……但是……</span></div>' +
      '<div><b>Kết · 10–15 chữ</b><span>Cảm nghĩ / bài học</span><span class="lv-zh">这件事让我明白了…… / 我觉得……</span></div>' +
    '</div></div>' +
    '<div class="lv-card"><h3>Lỗi học sinh Việt hay mắc</h3><ul class="lv-list">' +
      '<li>Trạng ngữ thời gian, nơi chốn đặt cuối câu như tiếng Việt → phải đặt TRƯỚC động từ.</li>' +
      '<li>是 + tính từ (他是很高兴) → bỏ 是.</li>' +
      '<li>和 dùng để nối hai vế câu → dùng 而且 / 并且 / 还.</li>' +
      '<li>Thiếu vế hô ứng: 虽然 phải có 但是, 不但 phải có 而且.</li>' +
      '<li>Thêm 很 trước thành ngữ, cho thành ngữ mang tân ngữ.</li>' +
      '<li>Dấu câu tiếng Việt (, .) thay vì ，。</li></ul></div>';

  /* ══════════════════ MOUNT ══════════════════ */
  function mount(hop, d, opts) {
    opts = opts || {};
    if (!hop || !d) return;
    var key = opts.key || 'mac-dinh';
    var st = doc(key);
    st.sx = st.sx || {};
    var coSX = !!(d.sapXep && d.sapXep.length);
    var tab = st.tab || (coSX && !allSxDone() ? 'sx' : 'doan');

    function allSxDone() { return coSX && d.sapXep.every(function (_, i) { return st.sx[i] && st.sx[i].kq; }); }
    function luu() { ghi(key, st); }

    hop.classList.add('lv');
    hop.innerHTML =
      '<div class="lv-tabs" role="tablist">' +
        (coSX ? '<button type="button" class="lv-tab" data-lv-tab="sx" role="tab">Hoàn thành câu <small>91–98</small></button>' : '') +
        '<button type="button" class="lv-tab" data-lv-tab="doan" role="tab">Viết đoạn 80 chữ <small>99</small></button>' +
        '<button type="button" class="lv-tab" data-lv-tab="hd" role="tab">Cách làm bài</button>' +
      '</div>' +
      '<div class="lv-pane" data-lv-pane="sx"></div>' +
      '<div class="lv-pane" data-lv-pane="doan"></div>' +
      '<div class="lv-pane" data-lv-pane="hd">' + HUONG_DAN + '</div>';

    function chonTab(t) {
      tab = t; st.tab = t; luu();
      hop.querySelectorAll('[data-lv-tab]').forEach(function (b) {
        var on = b.getAttribute('data-lv-tab') === t;
        b.classList.toggle('active', on); b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      hop.querySelectorAll('[data-lv-pane]').forEach(function (p) { p.hidden = p.getAttribute('data-lv-pane') !== t; });
    }
    hop.querySelectorAll('[data-lv-tab]').forEach(function (b) {
      b.addEventListener('click', function () { chonTab(b.getAttribute('data-lv-tab')); });
    });

    /* ----- Hoàn thành câu ----- */
    function veSX() {
      var p = hop.querySelector('[data-lv-pane="sx"]');
      if (!coSX) return;
      var dung = d.sapXep.filter(function (_, i) { return st.sx[i] && st.sx[i].kq === 'dung'; }).length;
      var xong = d.sapXep.filter(function (_, i) { return st.sx[i] && st.sx[i].kq; }).length;
      p.innerHTML =
        '<p class="lv-intro">Bấm các mảnh theo đúng thứ tự để thành một câu hoàn chỉnh (đúng dạng câu 91–98 của đề thi). Bấm mảnh đã chọn để bỏ ra.</p>' +
        '<div class="lv-sx-sum">Đã làm <b>' + xong + '/' + d.sapXep.length + '</b> câu · đúng <b>' + dung + '</b></div>' +
        d.sapXep.map(function (it, i) {
          var s = st.sx[i] || { chon: [] };
          var manh = tron(it.manh, 11 + i * 17);
          var daChon = s.chon || [];
          var ketQua = s.kq;
          return '<div class="lv-card lv-sx' + (ketQua ? ' is-' + ketQua : '') + '" data-sx="' + i + '">' +
            '<div class="lv-sx-head"><span class="lv-num">' + (i + 1) + '</span>' +
              '<div class="lv-sx-line" aria-label="Câu em xếp">' + (daChon.length ? daChon.map(function (k) {
                return '<button type="button" class="lv-chip is-on" data-sx-bo="' + k + '"' + (ketQua ? ' disabled' : '') + '>' + esc(it.manh[k]) + '</button>';
              }).join('') : '<span class="lv-sx-ph">Chạm vào các mảnh bên dưới…</span>') + '<span class="lv-sx-dot">。</span></div></div>' +
            '<div class="lv-sx-bank">' + manh.map(function (o) {
              var dung = daChon.indexOf(o.i) >= 0;
              return '<button type="button" class="lv-chip" data-sx-chon="' + o.i + '"' + (dung || ketQua ? ' disabled' : '') + '>' + esc(o.x) + '</button>';
            }).join('') + '</div>' +
            (ketQua
              ? '<div class="lv-sx-kq">' + (ketQua === 'dung' ? '<b class="ok">✓ Đúng</b>' : '<b class="bad">✗ Chưa đúng</b> · Đáp án: <span class="lv-zh">' + esc(it.dap) + '</span>') +
                '<div class="lv-sx-vn">' + esc(it.vn || '') + '</div><div class="lv-sx-giai">' + esc(it.giai || '') + '</div>' +
                '<button type="button" class="lv-btn ghost sm" data-sx-lai="' + i + '">Làm lại câu này</button></div>'
              : '<div class="lv-sx-act"><button type="button" class="lv-btn sm" data-sx-kt="' + i + '"' + (daChon.length === it.manh.length ? '' : ' disabled') + '>Kiểm tra</button></div>') +
          '</div>';
        }).join('') +
        (xong === d.sapXep.length ? '<div class="lv-next"><button type="button" class="lv-btn" data-lv-go="doan">Sang phần viết đoạn →</button></div>' : '');
    }
    hop.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b || !hop.contains(b)) return;
      var card = b.closest('[data-sx]');
      var i = card ? +card.getAttribute('data-sx') : -1;
      if (b.hasAttribute('data-sx-chon')) {
        st.sx[i] = st.sx[i] || { chon: [] };
        st.sx[i].chon.push(+b.getAttribute('data-sx-chon'));
        luu(); veSX();
      } else if (b.hasAttribute('data-sx-bo')) {
        var k = +b.getAttribute('data-sx-bo');
        st.sx[i].chon = st.sx[i].chon.filter(function (x) { return x !== k; });
        luu(); veSX();
      } else if (b.hasAttribute('data-sx-kt')) {
        var it = d.sapXep[i];
        var cau = st.sx[i].chon.map(function (k2) { return it.manh[k2]; }).join('');
        var dap = [it.dap].concat(it.chap || []).map(boDau);
        st.sx[i].kq = dap.indexOf(boDau(cau)) >= 0 ? 'dung' : 'sai';
        luu(); veSX();
        baoXong();
      } else if (b.hasAttribute('data-sx-lai')) {
        st.sx[i] = { chon: [] }; luu(); veSX();
      } else if (b.hasAttribute('data-lv-go')) {
        chonTab(b.getAttribute('data-lv-go'));
        hop.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    /* ----- Viết đoạn ----- */
    function veDoan() {
      var p = hop.querySelector('[data-lv-pane="doan"]');
      p.innerHTML =
        '<div class="lv-card lv-de">' +
          '<div class="lv-label">Đề bài · câu 99</div>' +
          (d.de ? '<div class="lv-de-zh lv-zh">' + esc(d.de) + '</div>' : '') +
          '<div class="lv-de-vn">' + esc(d.prompt || '') + '</div>' +
          '<div class="lv-words" id="lvWords">' + (d.words || []).map(function (w) {
            return '<span class="lv-word" data-w="' + esc(w) + '">' + esc(w) + '</span>';
          }).join('') + '</div>' +
        '</div>' +
        '<details class="lv-card lv-fold"' + (st.kq ? '' : ' open') + '><summary>Dàn ý gợi ý & cách dùng 5 từ</summary>' +
          (d.outline ? '<ol class="lv-list">' + d.outline.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ol>' : '') +
          (d.tuDung ? '<div class="lv-tudung">' + d.tuDung.map(function (w) {
            return '<div><b class="lv-zh">' + esc(w.tu) + '</b> <i>' + esc(w.loai) + '</i><span class="lv-zh">' + esc(w.cach) + '</span></div>';
          }).join('') + '</div>' : '') +
        '</details>' +
        (d.cauTruc ? '<details class="lv-card lv-fold"><summary>Cấu trúc nên dùng để bài hay hơn</summary><div class="lv-ct">' + d.cauTruc.map(function (c) {
          return '<div class="lv-ct-i"><b class="lv-zh">' + esc(c.ten) + '</b><span class="lv-zh">' + esc(c.vd) + '</span><small>' + esc(c.khi) + '</small></div>';
        }).join('') + '</div></details>' : '') +
        '<div class="lv-card lv-editor">' +
          '<label class="lv-label" for="lvText">Bài làm của em</label>' +
          '<textarea id="lvText" rows="7" placeholder="Viết bằng chữ Hán vào đây…" spellcheck="false"></textarea>' +
          '<div class="lv-meter"><div class="lv-bar"><i id="lvBar"></i></div><span id="lvCount">0 / 80 chữ</span></div>' +
          '<div class="lv-actions"><button type="button" class="lv-btn" id="lvNop">Nộp bài để chấm</button>' +
            '<span class="lv-hint" id="lvHint"></span></div>' +
        '</div>' +
        '<div id="lvKq"></div>';

      var ta = p.querySelector('#lvText');
      ta.value = st.bai || '';
      function capNhat() {
        var t = ta.value, n = demHan(t);
        p.querySelector('#lvCount').textContent = n + ' / 80 chữ';
        var bar = p.querySelector('#lvBar');
        bar.style.width = Math.min(100, n / 80 * 100) + '%';
        bar.className = n >= 70 && n <= 120 ? 'ok' : n > 120 ? 'warn' : '';
        p.querySelectorAll('.lv-word').forEach(function (el) { el.classList.toggle('is-used', t.indexOf(el.getAttribute('data-w')) >= 0); });
        var thieu = (d.words || []).filter(function (w) { return t.indexOf(w) < 0; });
        p.querySelector('#lvHint').textContent = !t.trim() ? '' : thieu.length ? 'Còn thiếu: ' + thieu.join('、') : 'Đã dùng đủ ' + d.words.length + ' từ ✓';
        st.bai = t; luu();
      }
      ta.addEventListener('input', capNhat);
      capNhat();
      p.querySelector('#lvNop').addEventListener('click', function () { nop(ta.value); });
      if (st.kq) veKetQua(st.kq);
    }

    function nop(t) {
      t = String(t || '').trim();
      var kqHop = hop.querySelector('#lvKq');
      if (demHan(t) < 20) {
        kqHop.innerHTML = '<div class="lv-card lv-warn">Bài mới có ' + demHan(t) + ' chữ Hán — viết ít nhất khoảng 60 chữ rồi hãy nộp nhé.</div>';
        return;
      }
      var may = soatBai(t, d);
      var kq = { bai: t, may: may, ai: null, aiLoi: null, dangCho: true, luc: Date.now() };
      st.kq = kq; luu();
      veKetQua(kq);
      baoXong();
      kqHop.scrollIntoView({ behavior: 'smooth', block: 'start' });

      var h = { 'Content-Type': 'application/json' };
      var tk = token(); if (tk) h.Authorization = 'Bearer ' + tk;
      fetch('/api/ai/cham-doan', {
        method: 'POST', headers: h,
        body: JSON.stringify({
          capDo: d.capDo || 'HSK 5', de: (d.de || '') + ' ' + (d.prompt || ''), tu: d.words || [], bai: t,
          cauTruc: (d.cauTruc || []).map(function (c) { return c.ten; })
        })
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; });
      }).then(function (x) {
        if (st.kq !== kq) return; // em da nop bai khac
        kq.dangCho = false;
        if (x.ok && x.j && typeof x.j.diem === 'number') kq.ai = x.j;
        else kq.aiLoi = (x.j && x.j.error) || 'AI chấm bài chưa trả lời được.';
        luu(); veKetQua(kq); baoXong();
      }).catch(function () {
        if (st.kq !== kq) return;
        kq.dangCho = false; kq.aiLoi = 'Không kết nối được máy chủ — kết quả dưới đây là của máy soát lỗi.';
        luu(); veKetQua(kq);
      });
    }

    function thanh(ten, diem, max) {
      return '<div class="lv-tc"><span>' + ten + '</span><div class="lv-bar"><i style="width:' + Math.round(diem / max * 100) + '%"></i></div><b>' + diem + '<small>/' + max + '</small></b></div>';
    }

    function veKetQua(kq) {
      var el = hop.querySelector('#lvKq');
      if (!el) return;
      var may = kq.may, ai = kq.ai;
      // Gop loi: loi cua AI truoc, loi may bat duoc ma AI chua neu thi them vao
      var loi = (ai && ai.loi ? ai.loi.map(function (l) { return { sai: l.sai, sua: l.sua, loai: l.loai || 'ngữ pháp', giai: l.giai, nguon: 'ai' }; }) : []);
      may.loi.forEach(function (l) {
        var trung = loi.some(function (a) { return a.sai && l.sai && (a.sai.indexOf(l.sai) >= 0 || l.sai.indexOf(a.sai) >= 0); });
        if (!trung) loi.push(Object.assign({ nguon: 'may' }, l));
      });
      var goiY = (ai && ai.goiY && ai.goiY.length ? ai.goiY : []).concat(goiYMay(kq.bai, d, may).filter(function (g) {
        return !(ai && ai.goiY || []).some(function (a) { return a.cauTruc.indexOf(g.cauTruc.slice(0, 4)) >= 0; });
      })).slice(0, 5);

      var diem = ai ? ai.diem : may.diem;
      var nguon = ai ? 'AI chấm chi tiết' : 'Máy chấm sơ bộ';
      var h = '<div class="lv-card lv-score">' +
        '<div class="lv-score-top"><div class="lv-ring' + (diem >= 60 ? ' pass' : '') + '"><b>' + diem + '</b><small>/100</small></div>' +
          '<div><div class="lv-src">' + nguon + (ai && ai.nguon ? '' : '') + '</div>' +
          '<div class="lv-meta">' + may.n + ' chữ Hán · ' + ((d.words || []).length - may.thieu.length) + '/' + (d.words || []).length + ' từ cho sẵn · ' +
            loi.length + ' chỗ cần sửa</div>' +
          (ai ? '' : '<div class="lv-note">Máy chỉ soát được hình thức (đủ từ, độ dài, từ nối, lỗi hay gặp) nên điểm sơ bộ tối đa 80; nội dung và cách diễn đạt cần AI hoặc thầy/cô chấm.</div>') +
          '</div></div>' +
        (ai && ai.tieuChi
          ? thanh('Nội dung', ai.tieuChi.noiDung, 25) + thanh('Từ vựng', ai.tieuChi.tuVung, 25) + thanh('Ngữ pháp', ai.tieuChi.nguPhap, 30) + thanh('Bố cục', ai.tieuChi.boCuc, 20)
          : thanh('Từ cho sẵn', may.tieuChi.tu, 25) + thanh('Độ dài', may.tieuChi.dai, 15) + thanh('Liên kết', may.tieuChi.noi, 20) + thanh('Lỗi hay gặp', may.tieuChi.np, 20)) +
        '</div>';

      if (kq.dangCho) h += '<div class="lv-card lv-wait"><span class="lv-spin" aria-hidden="true"></span>AI đang đọc bài và chấm chi tiết (khoảng 10–30 giây)… Kết quả của máy soát lỗi đã có ngay bên dưới.</div>';
      else if (kq.aiLoi) h += '<div class="lv-card lv-warn">' + esc(kq.aiLoi) + ' <button type="button" class="lv-btn ghost sm" id="lvThuLai">Nhờ AI chấm lại</button></div>';
      if (ai && ai.nhanXet) h += '<div class="lv-card lv-nx"><div class="lv-label">Nhận xét</div><p>' + esc(ai.nhanXet) + '</p></div>';

      if (may.thieu.length) {
        h += '<div class="lv-card lv-warn"><b>Còn thiếu từ cho sẵn:</b> <span class="lv-zh">' + esc(may.thieu.join('、')) + '</span> — đề bắt buộc dùng đủ, thiếu mỗi từ bị trừ điểm nặng.</div>';
      }

      h += '<div class="lv-card"><div class="lv-label">Bài của em' + (loi.length ? ' — chỗ tô vàng là chỗ cần sửa' : '') + '</div>' +
        '<div class="lv-bai lv-zh">' + danhDau(kq.bai, loi) + '</div></div>';

      if (loi.length) {
        h += '<div class="lv-card"><div class="lv-label">Lỗi cần sửa (' + loi.length + ')</div><ol class="lv-loi">' + loi.map(function (l) {
          return '<li class="' + (l.nhe ? 'is-nhe' : '') + '">' +
            '<div class="lv-loi-top"><span class="lv-tag">' + esc(l.loai) + '</span>' + (l.nhe ? '<span class="lv-tag nhe">nên xem lại</span>' : '') +
              (l.nguon === 'may' ? '<span class="lv-by">máy soát</span>' : '') + '</div>' +
            '<div class="lv-loi-fix"><s class="lv-zh">' + esc(l.sai) + '</s><span aria-hidden="true">→</span><b class="lv-zh">' + esc(l.sua) + '</b></div>' +
            '<div class="lv-loi-why">' + esc(l.giai) + '</div></li>';
        }).join('') + '</ol></div>';
      } else if (!kq.dangCho) {
        h += '<div class="lv-card lv-ok">Không thấy lỗi nào' + (ai ? '' : ' trong các lỗi máy soát được') + ' — tốt lắm! Xem gợi ý cấu trúc bên dưới để bài hay hơn nữa.</div>';
      }

      if (goiY.length) {
        h += '<div class="lv-card"><div class="lv-label">Cấu trúc nên dùng để nâng điểm</div><div class="lv-ct">' + goiY.map(function (g) {
          return '<div class="lv-ct-i"><b class="lv-zh">' + esc(g.cauTruc) + '</b>' + (g.viDu ? '<span class="lv-zh">' + esc(g.viDu) + '</span>' : '') + '<small>' + esc(g.giai) + '</small></div>';
        }).join('') + '</div></div>';
      }

      if (ai && ai.baiSua) {
        h += '<div class="lv-card"><div class="lv-label">Bài của em sau khi sửa <span class="lv-legend"><del>bỏ</del> <ins>thêm</ins></span></div>' +
          '<div class="lv-bai lv-zh lv-diff">' + soSanh(kq.bai, ai.baiSua) + '</div>' +
          '<details class="lv-sub"><summary>Xem bản sạch</summary><div class="lv-bai lv-zh">' + esc(ai.baiSua) + '</div></details></div>';
      }
      if (d.model) {
        h += '<details class="lv-card lv-fold"><summary>Bài mẫu tham khảo</summary>' +
          '<div class="lv-bai lv-zh">' + esc(d.model.zh) + '</div>' +
          (d.model.py ? '<div class="lv-py">' + esc(d.model.py) + '</div>' : '') +
          (d.model.vn ? '<div class="lv-vn">' + esc(d.model.vn) + '</div>' : '') + '</details>';
      }
      h += '<div class="lv-next"><button type="button" class="lv-btn ghost" id="lvSua">Sửa bài rồi nộp lại</button></div>';
      el.innerHTML = h;

      var sua = el.querySelector('#lvSua');
      if (sua) sua.addEventListener('click', function () {
        var ta = hop.querySelector('#lvText');
        ta.focus(); ta.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      var lai = el.querySelector('#lvThuLai');
      if (lai) lai.addEventListener('click', function () { nop(kq.bai); });
    }

    function baoXong() {
      if (typeof opts.onDone !== 'function') return;
      var sxDung = coSX ? d.sapXep.filter(function (_, i) { return st.sx[i] && st.sx[i].kq === 'dung'; }).length : 0;
      var kq = st.kq;
      opts.onDone({
        coBai: !!kq,
        diem: kq ? (kq.ai ? kq.ai.diem : kq.may.diem) : null,
        sxDung: sxDung, sxTong: coSX ? d.sapXep.length : 0
      });
    }

    veSX();
    veDoan();
    chonTab(tab);
  }

  window.LuyenViet = { mount: mount, _soatBai: soatBai };
})();
