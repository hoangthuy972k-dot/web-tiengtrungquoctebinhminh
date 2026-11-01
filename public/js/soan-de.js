/* ============================================================
   Máy soạn phần Đọc / Viết theo khuôn đề HSK từ các bài đã học
   (dùng ở /thi-lop — thầy cô chọn giáo trình + bài, phần Nghe giữ đề gốc)
   Nguồn: dữ liệu Chế độ lớp học window.LOP_DATA[<giáo trình>] (câu điền từ mcs,
   cặp hỏi–đáp dich/noi, câu xếp từ sorts, câu đúng/sai judges) + từ vựng có hình
   trong <bài>-data.js (vocabData[].em). Kết quả cùng dạng EXAM_DATA.sections[i].
   ============================================================ */
(function () {
  'use strict';

  var KHUON = {
    // Đề HSK 1: 20 câu đọc
    hsk1: { read: [['judge-pic', 5], ['pic-match', 5], ['sent-match', 5], ['word-fill', 5]] },
    hsk2: { read: [['pic-match', 5], ['word-fill', 5], ['judge-text', 5], ['sent-match', 10]] },
    hsk3: { read: [['sent-match', 10], ['word-fill', 10], ['mc', 10]], write: [['arrange', 5], ['write', 5]] },
    hsk4: { read: [['word-fill', 10], ['mc', 30]], write: [['arrange', 10]] },
    hsk5: { read: [['word-fill', 15], ['mc', 30]], write: [['arrange', 8]] },
    hsk6: { read: [['word-fill', 10], ['mc', 40]] }
  };
  // Dạng thay thế khi bài chưa đủ tư liệu (ví dụ ít từ có hình)
  var THAY = { 'judge-pic': ['judge-text', 'mc'], 'pic-match': ['sent-match', 'mc'], 'sent-match': ['mc'], 'judge-text': ['mc'], 'word-fill': ['mc'], write: ['arrange'] };
  var GIOI_THIEU = {
    'judge-pic': 'Nhìn tranh, phán đoán từ dưới tranh đúng (✓) hay sai (✗).',
    'pic-match': 'Đọc câu, chọn tranh phù hợp.',
    'sent-match': 'Chọn câu trả lời tương ứng.',
    'word-fill': 'Chọn từ thích hợp điền vào chỗ trống.',
    'judge-text': 'Đọc câu ★, phán đoán câu viết đúng (✓) hay sai (✗).',
    mc: 'Chọn đáp án đúng điền vào chỗ trống.',
    arrange: 'Sắp xếp các từ thành câu hoàn chỉnh.',
    write: 'Nhìn pinyin, viết chữ Hán thích hợp.'
  };
  var TEN_DANG = { 'judge-pic': 'Nhìn tranh đúng/sai', 'pic-match': 'Chọn tranh', 'sent-match': 'Ghép câu hỏi – trả lời', 'word-fill': 'Chọn từ điền',
    'judge-text': 'Câu đúng/sai', mc: 'Trắc nghiệm điền chỗ trống', arrange: 'Sắp xếp câu', write: 'Viết chữ Hán' };
  var CHU = 'ABCDEF';

  function tron(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function coHan(t) { return /[㐀-鿿]/.test(t || ''); }
  function chiHan(t) { return /^[㐀-鿿]{1,4}$/.test(t || ''); }
  function sach(t) { return String(t || '').replace(/\s+/g, ' ').trim(); }
  // Cau thi chi gom chu Han + dau cau + so (khong lan chu Viet, khong co san cho trong cua dang bai khac)
  function cauSach(t) { return coHan(t) && !/[A-Za-zÀ-ỹ«»（）()＿_]/.test(t); }
  function laHoi(t) { return /[？?]$/.test(t) || /吗$/.test(t.replace(/[。！!]$/, '')); }

  /* ---------------- nạp dữ liệu ---------------- */
  var daNap = {};
  function napScript(src) {
    if (daNap[src]) return daNap[src];
    daNap[src] = new Promise(function (ok, loi) {
      var s = document.createElement('script');
      s.src = src; s.onload = ok; s.onerror = function () { delete daNap[src]; loi(new Error('Không tải được ' + src)); };
      document.head.appendChild(s);
    });
    return daNap[src];
  }
  function napLop(khoa) {
    return napScript('/js/lop-' + khoa + '.js').then(function () {
      var d = window.LOP_DATA && window.LOP_DATA[khoa];
      if (!d) throw new Error('Không có dữ liệu giáo trình ' + khoa);
      return d;
    });
  }
  // Từ vựng của 1 bài (vocabData nằm trong file -data.js của bài) — nạp trong iframe ẩn
  var tuBai = {};
  function napTu(url) {
    if (tuBai[url]) return tuBai[url];
    tuBai[url] = new Promise(function (ok) {
      var ifr = document.createElement('iframe');
      ifr.style.display = 'none';
      document.body.appendChild(ifr);
      var xong = false;
      var tra = function (ds) { if (xong) return; xong = true; try { document.body.removeChild(ifr); } catch (e) { /* bo qua */ } ok(ds); };
      var sc = ifr.contentDocument.createElement('script');
      sc.src = url.replace('/lessons/', '/js/').replace('.html', '-data.js');
      sc.onload = function () {
        var raw = (ifr.contentWindow && ifr.contentWindow.vocabData) || [];
        tra(raw.filter(function (v) { return v && v.zh && v.vn; }).map(function (v) { return { zh: v.zh, py: v.py || '', vn: v.vn, em: v.em || '', pos: v.pos || '' }; }));
      };
      sc.onerror = function () { tra([]); };
      ifr.contentDocument.body.appendChild(sc);
      setTimeout(function () { tra([]); }, 8000);
    });
    return tuBai[url];
  }

  /* ---------------- hình cho từ vựng ---------------- */
  function maEmoji(e) {
    return Array.from(e).map(function (c) { return c.codePointAt(0).toString(16); }).filter(function (h) { return h !== 'fe0f'; }).join('-');
  }
  // Chỉ lấy emoji là đồ vật / người / con vật / cảnh — bỏ ký hiệu (🔗 ❓ ⬆️ 🔹 ✅ 👆…)
  var VAT_KY_HIEU = [0x1F511, 0x1F525, 0x1F528, 0x1F52A, 0x1F52C, 0x1F52D, 0x1F4A7, 0x1F4AA, 0x1F4A1];
  function laHinh(e) {
    if (!e) return false;
    var cp = e.codePointAt(0);
    if (cp < 0x1F300 || cp > 0x1FAFF) return false;
    if (cp >= 0x1F500 && cp <= 0x1F53F && VAT_KY_HIEU.indexOf(cp) < 0) return false;
    if (cp >= 0x1F4A0 && cp <= 0x1F4AF && VAT_KY_HIEU.indexOf(cp) < 0) return false;
    if (cp >= 0x1F446 && cp <= 0x1F44F) return false;            // tay chỉ / vỗ tay
    if ([0x1F6AB, 0x1F6AE, 0x1F4F6, 0x1F3B5, 0x1F3B6, 0x1F300, 0x1F503, 0x1F504].indexOf(cp) >= 0) return false;
    return true;
  }
  function svgEmoji(e) {
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='14' fill='#fff8ec'/>" +
      "<text x='50' y='69' font-size='60' text-anchor='middle'>" + e + '</text></svg>';
    return 'data:image/svg+xml,' + encodeURIComponent(svg).replace(/'/g, '%27');
  }
  var coAnh = {};
  function anhCua(e) {
    var url = '/images/wu/' + maEmoji(e) + '.png';
    if (!coAnh[url]) coAnh[url] = fetch(url, { method: 'HEAD' }).then(function (r) { return r.ok && /image/.test(r.headers.get('content-type') || ''); }, function () { return false; });
    return coAnh[url].then(function (co) { return co ? url : svgEmoji(e); });
  }

  /* ---------------- gom tư liệu từ các bài ---------------- */
  function gom(bai, tu) {
    var tl = { hoiDap: [], dien: [], dungSai: [], xep: [], cau: [], hinh: [], py: {} };
    var thayCau = {};
    var themCau = function (zh) { zh = sach(zh); if (cauSach(zh) && zh.length >= 4 && zh.length <= 40 && !thayCau[zh]) { thayCau[zh] = 1; tl.cau.push(zh); } };
    tu.forEach(function (v) { if (v.py && !tl.py[v.zh]) tl.py[v.zh] = v.py; });
    bai.forEach(function (b) {
      (b.dich || []).forEach(function (d) {
        var p = String(d.zh || '').split(/\s*——\s*/), vn = String(d.vn || '').split(/\s+—\s+/);
        if (p.length === 2 && laHoi(sach(p[0])) && cauSach(p[0]) && cauSach(p[1])) tl.hoiDap.push({ q: sach(p[0]), a: sach(p[1]), vn: sach(d.vn) });
        p.forEach(themCau);
        void vn;
      });
      (b.noi || []).forEach(function (x) {
        if (x.q && x.a && cauSach(x.q) && cauSach(x.a) && sach(x.a).length <= 40) tl.hoiDap.push({ q: sach(x.q), a: sach(x.a), vn: sach((x.qvn || '') + ' — ' + (x.avn || '')) });
        themCau(x.q); themCau(x.a);
      });
      (b.mcs || []).forEach(function (m) {
        var o = (m.options || []).map(sach), dung = o[m.answer], pre = sach(m.pre), post = sach(m.post);
        if (!dung || !cauSach(pre + post) || (pre + post).replace(/[，。！？、,.!?]/g, '').length < 2) return;
        if (o.some(function (x) { return /[A-Za-zÀ-ỹ«»]/.test(x); })) return;
        if (/[？?]$/.test(pre) && !post.replace(/[，。！？、,.!?]/g, '')) return;
        if (o.some(function (x) { return !x || x.length > 24; }) || o.length < 3) return;
        tl.dien.push({ pre: pre, post: post, o: o, dung: m.answer, why: sach(m.why) });
        themCau(pre + dung + post);
      });
      (b.judges || []).forEach(function (j) {
        if (j.sentence && cauSach(j.sentence) && j.sentence.length <= 40) tl.dungSai.push({ cau: sach(j.sentence), dung: !!j.isCorrect, sua: sach(j.fix), why: sach(j.why) });
      });
      (b.sorts || []).forEach(function (s) {
        var w = (s.words || []).map(sach).filter(function (x) { return x && !/^[，。！？、,.!?：:；;“”"]+$/.test(x); });
        if (w.length >= 3 && w.length <= 9 && s.answer && cauSach(s.answer)) tl.xep.push({ w: w, dap: sach(s.answer) });
      });
    });
    var thayEm = {};
    tu.forEach(function (v) {
      if (!laHinh(v.em) || thayEm[v.em] || v.zh.length > 4) return;
      // chi danh tu / dong tu / tinh tu (bo luong tu, pho tu, tro tu, ten rieng… kho ve thanh tranh)
      if ((v.pos && !/Danh từ|Động từ|Tính từ/.test(v.pos)) || /riêng|năng nguyện|Lượng|Phó|Trợ|Giới|Đại/.test(v.pos || '')) return;
      thayEm[v.em] = 1;
      tl.hinh.push(v);
    });
    // danh tu de ve thanh tranh nhat -> xep truoc
    tl.hinh.sort(function (a, b) { return (/^Danh từ/.test(b.pos) ? 1 : 0) - (/^Danh từ/.test(a.pos) ? 1 : 0); });
    return tl;
  }

  /* ---------------- từng dạng câu ---------------- */
  // Mỗi hàm lấy tư liệu chưa dùng (dung), trả về {part} hoặc null khi không đủ
  function dangWordFill(tl, so, dung) {
    var ds = tron(tl.dien.filter(function (x) { return chiHan(x.o[x.dung]) && !dung['d' + x.pre + x.post]; }));
    var nhom = [], daTu = {};
    while (nhom.length * 5 < so) {
      var ch = [];
      for (var i = 0; i < ds.length && ch.length < 5; i++) {
        var w = ds[i].o[ds[i].dung];
        if (daTu[w] || dung['d' + ds[i].pre + ds[i].post]) continue;
        daTu[w] = 1; ch.push(ds[i]); dung['d' + ds[i].pre + ds[i].post] = 1;
      }
      if (ch.length < 3) break;
      // thêm 1 từ nhiễu lấy trong các lựa chọn sai
      var nhieu = [];
      ch.forEach(function (x) { x.o.forEach(function (o, k) { if (k !== x.dung && chiHan(o) && !daTu[o]) nhieu.push(o); }); });
      var bank = ch.map(function (x) { return x.o[x.dung]; }).concat(tron(nhieu).slice(0, 1));
      bank = tron(bank).map(function (zh, k) { return { k: CHU[k], zh: zh, py: tl.py[zh] || '' }; });
      var kcua = {}; bank.forEach(function (b) { kcua[b.zh] = b.k; });
      nhom.push({ words: bank, questions: ch.map(function (x) {
        return { zh: x.pre + '（　）' + x.post, answer: kcua[x.o[x.dung]], vn: x.why };
      }) });
    }
    return nhom.length ? { groups: nhom } : null;
  }
  function dangSentMatch(tl, so, dung) {
    var ds = tron(tl.hoiDap.filter(function (x) { return !dung['h' + x.q]; }));
    var nhom = [], daA = {};
    while (nhom.length * 5 < so) {
      var ch = [];
      for (var i = 0; i < ds.length && ch.length < 6; i++) {
        if (dung['h' + ds[i].q] || daA[ds[i].a]) continue;
        daA[ds[i].a] = 1; dung['h' + ds[i].q] = 1; ch.push(ds[i]);
      }
      if (ch.length < 4) break;
      var hoi = ch.slice(0, Math.min(5, ch.length - 1)), du = ch.slice(hoi.length);
      var opts = tron(hoi.concat(du.slice(0, 1))).map(function (x, k) { return { k: CHU[k], zh: x.a, py: '', vn: '', _x: x }; });
      nhom.push({ options: opts.map(function (o) { return { k: o.k, zh: o.zh, py: '', vn: '' }; }), questions: hoi.map(function (x) {
        var k = opts.filter(function (o) { return o._x === x; })[0].k;
        return { zh: x.q, answer: k, vn: x.vn };
      }) });
    }
    return nhom.length ? { groups: nhom } : null;
  }
  function dangMc(tl, so, dung) {
    var ds = tron(tl.dien.filter(function (x) { return !dung['d' + x.pre + x.post]; })).slice(0, so);
    if (ds.length < 3) return null;
    return { questions: ds.map(function (x) {
      dung['d' + x.pre + x.post] = 1;
      var thu = tron(x.o.map(function (o, k) { return { o: o, k: k }; })).slice(0, 4);
      if (!thu.some(function (t) { return t.k === x.dung; })) thu[0] = { o: x.o[x.dung], k: x.dung };
      thu = tron(thu);
      var dap = 0; thu.forEach(function (t, i) { if (t.k === x.dung) dap = i; });
      return { zh: x.pre + '（　）' + x.post, options: thu.map(function (t) { return { zh: t.o }; }), answer: CHU[dap], vn: x.why };
    }) };
  }
  function dangJudgeText(tl, so, dung) {
    var dungDs = tron(tl.dungSai.filter(function (x) { return x.dung && !dung['j' + x.cau]; }));
    var saiDs = tron(tl.dungSai.filter(function (x) { return !x.dung && !dung['j' + x.cau]; }));
    var ch = [];
    for (var i = 0; ch.length < so && (i < dungDs.length || i < saiDs.length); i++) {
      if (saiDs[i] && ch.length < so) ch.push(saiDs[i]);
      if (dungDs[i] && ch.length < so) ch.push(dungDs[i]);
    }
    if (ch.length < 3) return null;
    return { questions: tron(ch).map(function (x) {
      dung['j' + x.cau] = 1;
      return { zh: '', star: x.cau, answer: x.dung, vn: x.dung ? '' : 'Câu đúng: ' + x.sua + (x.why ? ' — ' + x.why : '') };
    }) };
  }
  function dangArrange(tl, so, dung) {
    var ds = tron(tl.xep.filter(function (x) { return !dung['x' + x.dap]; })).slice(0, so);
    if (ds.length < 3) return null;
    return { questions: ds.map(function (x) {
      dung['x' + x.dap] = 1;
      var w = tron(x.w);
      if (w.join('') === x.w.join('')) w.push(w.shift());
      return { words: w, answer: x.dap };
    }) };
  }
  function dangWrite(tl, so, dung) {
    var ds = tron(tl.dien.filter(function (x) {
      var w = x.o[x.dung];
      return /^[㐀-鿿]{1,2}$/.test(w) && tl.py[w] && !dung['d' + x.pre + x.post];
    })).slice(0, so);
    if (ds.length < 3) return null;
    return { questions: ds.map(function (x) {
      dung['d' + x.pre + x.post] = 1;
      var w = x.o[x.dung];
      return { pre: x.pre, py: tl.py[w], post: x.post, answer: w, zh: x.pre + w + x.post };
    }) };
  }
  // Ảnh cho dạng có tranh: trả về Promise
  function dangJudgePic(tl, so, dung) {
    var con = tl.hinh.filter(function (v) { return !dung['p' + v.zh]; });
    var ds = tron(con.slice(0, Math.max(so * 2, 12)));
    if (ds.length < Math.max(4, so)) return null;
    var ch = ds.slice(0, so);
    return Promise.all(ch.map(function (v, i) {
      dung['p' + v.zh] = 1;
      var dungAnh = i % 2 === 0 ? Math.random() < 0.7 : Math.random() < 0.3;
      var khac = ds.filter(function (x) { return x !== v; })[Math.floor(Math.random() * (ds.length - 1))];
      var hien = dungAnh ? v : khac;
      return anhCua(hien.em).then(function (url) { return { img: url, zh: v.zh, py: v.py, answer: dungAnh, vn: v.zh + ' = ' + v.vn + (dungAnh ? '' : ' · tranh là ' + khac.zh + ' (' + khac.vn + ')') }; });
    })).then(function (qs) { return { questions: qs }; });
  }
  function dangPicMatch(tl, so, dung) {
    // từ có hình + có câu trong bài chứa từ đó
    var ds = tron(tl.hinh.filter(function (v) { return !dung['p' + v.zh] && v.zh.length >= 1; }).slice(0, 24)).map(function (v) {
      var cau = tron(tl.cau.filter(function (c) { return c.indexOf(v.zh) >= 0 && c.length > v.zh.length + 2; }))[0];
      return cau ? { v: v, cau: cau } : null;
    }).filter(Boolean);
    if (ds.length < 6) return null;
    var nhom = [];
    var lam = function () {
      var ch = ds.splice(0, 6);
      if (ch.length < 6) return null;
      ch.forEach(function (x) { dung['p' + x.v.zh] = 1; });
      return Promise.all(ch.map(function (x) { return anhCua(x.v.em); })).then(function (urls) {
        var pics = {};
        ch.forEach(function (x, k) { pics[CHU[k]] = urls[k]; });
        var hoi = tron(ch.map(function (x, k) { return { x: x, k: CHU[k] }; })).slice(0, 5);
        nhom.push({ pics: pics, questions: hoi.map(function (h) { return { zh: h.x.cau, answer: h.k, vn: 'Tranh ' + h.k + ': ' + h.x.v.zh + ' (' + h.x.v.vn + ')' }; }) });
      });
    };
    var chuoi = Promise.resolve();
    for (var g = 0; g * 5 < so; g++) chuoi = chuoi.then(lam);
    return chuoi.then(function () { return nhom.length ? { groups: nhom } : null; });
  }
  var LAM = { 'word-fill': dangWordFill, 'sent-match': dangSentMatch, mc: dangMc, 'judge-text': dangJudgeText, arrange: dangArrange, write: dangWrite,
    'judge-pic': dangJudgePic, 'pic-match': dangPicMatch };

  /* ---------------- soạn cả phần ---------------- */
  // Đánh số câu liên tiếp từ batDau, ghi range cho phần / nhóm
  function danhSo(part, n) {
    var qs = part.groups ? [].concat.apply([], part.groups.map(function (g) { return g.questions; })) : part.questions;
    if (part.groups) part.groups.forEach(function (g) { g.questions.forEach(function (q) { q.n = n++; }); g.range = [g.questions[0].n, g.questions[g.questions.length - 1].n]; });
    else qs.forEach(function (q) { q.n = n++; });
    part.range = [qs[0].n, qs[qs.length - 1].n];
    return n;
  }
  function soanPhan(id, khuon, tl, batDau, dung, bao) {
    var parts = [], n = batDau, stt = 0;
    var chuoi = Promise.resolve();
    khuon.forEach(function (k) {
      chuoi = chuoi.then(function () {
        var thu = [k[0]].concat(THAY[k[0]] || []);
        var lan = function (i) {
          if (i >= thu.length) { bao.push('Thiếu tư liệu cho dạng “' + TEN_DANG[k[0]] + '” — đã bỏ phần này.'); return null; }
          return Promise.resolve(LAM[thu[i]](tl, k[1], dung)).then(function (p) {
            if (!p) return lan(i + 1);
            if (i > 0) bao.push('Bài đã chọn chưa đủ tư liệu cho “' + TEN_DANG[k[0]] + '”, đã thay bằng “' + TEN_DANG[thu[i]] + '”.');
            p.type = thu[i];
            return p;
          });
        };
        return lan(0).then(function (p) {
          if (!p) return;
          stt++;
          p.name = 'Phần ' + stt;
          p.intro = GIOI_THIEU[p.type];
          n = danhSo(p, n);
          parts.push(p);
        });
      });
    });
    return chuoi.then(function () {
      return parts.length ? { id: id, name: id === 'read' ? 'Đọc' : 'Viết', icon: id === 'read' ? 'book' : 'pencil', soan: true, parts: parts } : null;
    });
  }

  /* opt: { cap: 'hsk1', khoa: 'hsk1v3', bai: [1,2,…], phan: ['read','write'], batDau: { read: 21, write: 71 } }
     → Promise { read, write, nguon, bao: [ghi chú], dem: { read: 20, … } }              */
  function soan(opt) {
    var khuon = KHUON[opt.cap] || KHUON.hsk3;
    return napLop(opt.khoa).then(function (ds) {
      var bai = ds.filter(function (b) { return opt.bai.indexOf(b.n) >= 0; });
      if (!bai.length) throw new Error('Chọn ít nhất một bài.');
      return Promise.all(bai.map(function (b) { return napTu(b.url); })).then(function (tus) {
        var tu = [].concat.apply([], tus);
        var tl = gom(bai, tu), dung = {}, bao = [], kq = { bao: bao, dem: {} };
        var so = bai.map(function (b) { return b.n; }).sort(function (a, b) { return a - b; });
        kq.nguon = (so.length === 1 ? 'Bài ' + so[0] : 'Bài ' + so[0] + '–' + so[so.length - 1]) + (so.length > 1 && so[so.length - 1] - so[0] + 1 !== so.length ? ' (' + so.length + ' bài)' : '');
        var chuoi = Promise.resolve();
        ['read', 'write'].forEach(function (id) {
          if (opt.phan.indexOf(id) < 0 || !khuon[id]) return;
          chuoi = chuoi.then(function () {
            return soanPhan(id, khuon[id], tl, opt.batDau[id] || 1, dung, bao).then(function (sec) {
              if (!sec) { bao.push('Không soạn được phần ' + (id === 'read' ? 'Đọc' : 'Viết') + ' từ các bài đã chọn.'); return; }
              sec.nguon = kq.nguon;
              kq[id] = sec;
              kq.dem[id] = sec.parts.reduce(function (a, p) { return a + (p.range[1] - p.range[0] + 1); }, 0);
            });
          });
        });
        return chuoi.then(function () { return kq; });
      });
    });
  }
  // Danh sách bài của một giáo trình (cho ô chọn bài)
  function dsBai(khoa) {
    return napLop(khoa).then(function (ds) { return ds.map(function (b) { return { n: b.n, ten: b.title || '' }; }); });
  }
  window.SoanDe = { soan: soan, dsBai: dsBai, coViet: function (cap) { return !!(KHUON[cap] && KHUON[cap].write); }, tenDang: TEN_DANG };
})();
