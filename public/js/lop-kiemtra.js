/* Kiem tra bai cu — man chieu goi tung hoc sinh len bang on lai cac bai truoc.
   Thay/co chon lop (lop tren he thong hoac danh sach nhanh dung chung voi
   "UFO goi tra bai"), may goi uu tien em lau chua duoc goi, em len bang choi
   mot trong bon tro: Hop qua bi mat · Leo thang trieu phu · Ghe nong ·
   Boc tham nhiem vu. Xong luot may goi y diem 0-10, thay/co chinh lai roi luu
   (lop he thong -> cot "Mieng"; danh sach nhanh -> chi luu tren may nay).
   Mo bang window.LopKiemTra.mo({ nhan, vocab, mcs, sorts, trans, dialogs }).
   Phan sinh cau hoi (LopKiemTra._taoCau) khong dung DOM, chay duoc trong Node. */
(function () {
  'use strict';

  /* =====================================================================
     PHAN 1 — SINH CAU HOI (ham thuan, khong dung DOM)
     ===================================================================== */
  var KHO = { doc: 1, nghia: 1, viet: 2, nguphap: 2, xepcau: 2, dichtv: 2, dich: 3, datcau: 3, hoidap: 3,
    noi: 1, nghe: 2, dien: 2, sualoi: 3 };
  var LOAI = ['doc', 'nghia', 'viet', 'noi', 'nghe', 'nguphap', 'dien', 'xepcau', 'sualoi', 'dichtv', 'dich', 'datcau', 'hoidap'];
  var TEN_LOAI = {
    doc: '📖 Đọc từ', nghia: '💡 Nghĩa của từ', viet: '✍️ Nói chữ Hán', nguphap: '🧩 Ngữ pháp',
    xepcau: '🔀 Xếp câu', dichtv: '🔁 Dịch sang tiếng Việt', dich: '🔁 Dịch sang tiếng Trung',
    datcau: '✍️ Đặt câu', hoidap: '💬 Hỏi – đáp',
    noi: '🔗 Nối từ – nghĩa', nghe: '🎧 Nghe – hiểu', dien: '🕳️ Điền từ vào câu', sualoi: '🔍 Sửa câu sai'
  };
  var CHU = ['A', 'B', 'C', 'D', 'E', 'F'];

  function str(s) { return s == null ? '' : String(s).replace(/\s+/g, ' ').trim(); }
  function mang(a) { return Array.isArray(a) ? a : []; }
  function coHan(s) { return /[㐀-鿿]/.test(str(s)); }
  // Bo dau cau, khoang trang -> khoa so khop cau Trung
  function khoaZh(s) { return str(s).replace(/[\s，。？！、；：,.?!;:"'“”‘’「」『』《》（）()…—\-·~～]/g, ''); }
  function tron(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function dauCau(s, n) {
    var w = str(s).split(' ');
    return w.slice(0, n).join(' ') + (w.length > n ? '…' : '');
  }
  function laCauHoi(zh) { return /[？?]\s*$/.test(zh) || /(吗|呢|什么|谁|哪|几|多少|怎么|为什么|是不是|好不好|对不对)/.test(zh); }

  // Gom du lieu tho thanh cac "kho" cau hoi da loc sach
  function chuanHoa(opt) {
    opt = opt || {};
    var P = { vocab: [], mcs: [], sorts: [], dtv: [[], []], dich: [[], []], dat: [[], []], hd: [[], []], nghia: {}, soTrans: 0, soHt: 0,
      dien: [], sl: [], nghe: [[], []] };
    var map = P.nghia;
    function ghiMap(zh, py, vn) {
      var k = khoaZh(zh);
      if (!k || !str(vn)) return;
      if (!map[k]) map[k] = { zh: str(zh), py: str(py), vn: str(vn) };
      else if (!map[k].py && str(py)) map[k].py = str(py);
    }
    var thayV = {};
    mang(opt.vocab).forEach(function (v) {
      if (!v || !str(v.zh) || !str(v.vn) || thayV[str(v.zh)]) return;
      thayV[str(v.zh)] = 1;
      var x = { id: 'v' + str(v.zh), zh: str(v.zh), py: str(v.py), vn: str(v.vn), hv: str(v.hv),
        ex_zh: str(v.ex_zh), ex_py: str(v.ex_py), ex_vn: str(v.ex_vn) };
      P.vocab.push(x);
      if (x.ex_zh && x.ex_vn) ghiMap(x.ex_zh, x.ex_py, x.ex_vn);
    });
    var trans = [];
    mang(opt.trans).concat(mang(opt.transRev)).forEach(function (t) {
      if (!t || !str(t.vi) || !coHan(t.zh)) return;
      trans.push({ id: 'c' + khoaZh(t.zh), zh: str(t.zh), py: str(t.py), vn: str(t.vi) });
      ghiMap(t.zh, t.py, t.vi);
    });
    P.soTrans = trans.length;
    var cap = [];
    mang(opt.dialogs).forEach(function (d) {
      var ls = mang(d && d.lines).filter(function (l) { return l && coHan(l.zh); });
      if (ls.length < 2) return;
      P.soHt++;
      ls.forEach(function (l) { ghiMap(l.zh, l.py, l.vn); });
      for (var i = 0; i + 1 < ls.length; i++) {
        var a = ls[i], b = ls[i + 1];
        if ((a.sp || 0) === (b.sp || 0)) continue;
        cap.push({ id: 'h' + khoaZh(a.zh) + '|' + khoaZh(b.zh), canh: str(d.scene),
          a: { zh: str(a.zh), py: str(a.py), vn: str(a.vn) }, b: { zh: str(b.zh), py: str(b.py), vn: str(b.vn) } });
      }
    });
    cap.forEach(function (c) { P.hd[laCauHoi(c.a.zh) ? 0 : 1].push(c); });

    mang(opt.mcs).forEach(function (m, i) {
      if (!m || mang(m.options).length < 2 || typeof m.answer !== 'number' || m.answer < 0 || m.answer >= m.options.length) return;
      var opts = m.options.map(str);
      if (opts.some(function (o) { return !o; })) return;
      var x = { id: 'm' + i + khoaZh(str(m.pre) + opts[m.answer] + str(m.post)), pre: str(m.pre), post: str(m.post), noBlank: !!m.noBlank,
        options: opts, answer: m.answer, context: str(m.context), why: str(m.why), hint: str(m.hint), point: str(m.point) };
      if (!x.pre && !x.post) return;
      x.full = x.noBlank ? '' : x.pre + opts[m.answer] + x.post;
      if (x.full && !coHan(x.full)) x.full = '';
      P.mcs.push(x);
    });
    var thayS = {};
    mang(opt.sorts).forEach(function (s) {
      if (!s || !str(s.answer)) return;
      var tu = mang(s.words).map(str).filter(function (w) { return khoaZh(w); });
      var k = khoaZh(s.answer);
      if (tu.length < 2 || thayS[k]) return;
      thayS[k] = 1;
      P.sorts.push({ id: 'c' + k, tu: tu, answer: str(s.answer), context: str(s.context), why: str(s.why), point: str(s.point) });
    });

    // Dich Trung -> Viet: cau dich co san, cau xep tu biet nghia, roi cau vi du cua tu vung
    var thayD = {};
    function themDtv(x, tier) { var k = khoaZh(x.zh); if (!k || thayD[k]) return; thayD[k] = 1; P.dtv[tier].push(x); }
    trans.forEach(function (t) { themDtv(t, 0); });
    P.sorts.forEach(function (s) {
      var m = map[khoaZh(s.answer)];
      if (m) themDtv({ id: s.id, zh: s.answer, py: m.py, vn: m.vn }, 0);
    });
    P.vocab.forEach(function (v) { if (v.ex_zh && v.ex_vn) themDtv({ id: 'c' + khoaZh(v.ex_zh), zh: v.ex_zh, py: v.ex_py, vn: v.ex_vn }, 1); });
    // Dich Viet -> Trung
    var thayN = {};
    trans.forEach(function (t) { var k = khoaZh(t.zh); if (thayN[k]) return; thayN[k] = 1; P.dich[0].push(t); });
    P.vocab.forEach(function (v) {
      var k = khoaZh(v.ex_zh);
      if (!v.ex_zh || !v.ex_vn || thayN[k]) return;
      thayN[k] = 1;
      P.dich[1].push({ id: 'c' + k, zh: v.ex_zh, py: v.ex_py, vn: v.ex_vn });
    });
    // Dat cau: tu co cau mau + diem ngu phap; tu chua co cau mau de sau
    // Ten rieng (ten nguoi, dia danh) kho dat cau -> de nhom sau
    P.vocab.forEach(function (v) {
      var rieng = /tên (người|riêng|địa danh|nước|thành phố)|họ của/i.test(v.vn);
      P.dat[v.ex_zh && !rieng ? 0 : 1].push({ id: v.id, kieu: 'tu', v: v });
    });
    var diem = {}, dsDiem = [];
    P.mcs.concat(P.sorts).forEach(function (m) {
      if (!m.point) return;
      var d = diem[m.point];
      if (!d) { d = diem[m.point] = { id: 'p' + m.point, kieu: 'nguphap', point: m.point, vd: '', why: '' }; dsDiem.push(d); }
      if (!d.vd) d.vd = m.answer && typeof m.answer === 'string' ? m.answer : (m.full || '');
      if (!d.why && m.why) d.why = m.why;
    });
    dsDiem.forEach(function (d) { P.dat[0].push(d); });

    // Dien tu vao cau: cau vi du co chua dung tu do -> khoet tu ra
    P.vocab.forEach(function (v) {
      var i = v.ex_zh ? v.ex_zh.indexOf(v.zh) : -1;
      if (i < 0 || khoaZh(v.ex_zh) === khoaZh(v.zh)) return;
      P.dien.push({ id: 'e' + khoaZh(v.ex_zh), v: v, pre: v.ex_zh.slice(0, i), post: v.ex_zh.slice(i + v.zh.length) });
    });
    // Sua cau sai: cau xep tu dao hai cum lien nhau
    P.sorts.forEach(function (x) {
      var tt = thuTuTu(x.answer, x.tu);
      if (tt && tt.length >= 3) P.sl.push({ id: x.id, tu: tt, answer: x.answer, why: x.why });
    });
    // Nghe – hieu: tu vung truoc, cau vi du / cau dich sau
    P.vocab.forEach(function (v) { P.nghe[0].push({ id: 'n' + v.id, zh: v.zh, py: v.py, vn: v.vn }); });
    P.dtv[0].concat(P.dtv[1]).forEach(function (x) { if (khoaZh(x.zh).length <= 14) P.nghe[1].push({ id: 'n' + x.id, zh: x.zh, py: x.py, vn: x.vn }); });
    return P;
  }

  // Sap cac cum tu theo thu tu xuat hien trong cau dung; khong khop het thi bo
  function thuTuTu(answer, tu) {
    var goc = khoaZh(answer), dung = [], ds = [];
    for (var i = 0; i < tu.length; i++) {
      var k = khoaZh(tu[i]), tu0 = 0, p = -1;
      while ((p = goc.indexOf(k, tu0)) >= 0) {
        var trung = dung.some(function (d) { return p < d[1] && p + k.length > d[0]; });
        if (!trung) break;
        tu0 = p + 1;
      }
      if (p < 0) return null;
      dung.push([p, p + k.length]);
      ds.push({ p: p, w: tu[i] });
    }
    ds.sort(function (a, b) { return a.p - b.p; });
    var ra = ds.map(function (x) { return x.w; });
    return khoaZh(ra.join('')) === goc ? ra : null;
  }
  // Dau cau cuoi (。？！) cua cau goc de gan vao cau da dao
  function dauCuoi(s) { var m = /[。？！?!.]\s*$/.exec(str(s)); return m ? m[0].trim() : ''; }

  function coLoai(P, l) {
    switch (l) {
      case 'doc': case 'nghia': case 'viet': return P.vocab.length > 0;
      case 'nguphap': return P.mcs.length > 0;
      case 'xepcau': return P.sorts.length > 0;
      case 'dichtv': return P.dtv[0].length + P.dtv[1].length > 0;
      case 'dich': return P.dich[0].length + P.dich[1].length > 0;
      case 'datcau': return P.dat[0].length + P.dat[1].length > 0;
      case 'hoidap': return P.hd[0].length + P.hd[1].length > 0;
      case 'noi': return P.vocab.length >= 4;
      case 'nghe': return P.nghe[0].length + P.nghe[1].length > 0;
      case 'dien': return P.dien.length > 0 && P.vocab.length >= 3;
      case 'sualoi': return P.sl.length > 0;
    }
    return false;
  }
  function loaiCo(P) { return LOAI.filter(function (l) { return coLoai(P, l); }); }

  function nhoSach(nho) {
    nho = nho || {};
    nho.da = nho.da || {};      // da hoi trong buoi:  loai|id
    nho.luot = nho.luot || {};  // da hoi trong luot cua em nay: id
    nho.loai = nho.loai || {};  // so lan moi dang cau trong luot nay
    return nho;
  }

  // Uu tien: chua hoi em nay > chua hoi trong buoi > nhom uu tien dau, them chut ngau nhien
  function chonMuc(tiers, loai, nho) {
    var best = null, bw = -1;
    tiers.forEach(function (list, ti) {
      list.forEach(function (x) {
        var w = (nho.luot[x.id] ? 0 : 4) + (nho.da[loai + '|' + x.id] ? 0 : 2) + (ti === 0 ? 1 : 0) + Math.random() * 0.9;
        if (w > bw) { bw = w; best = x; }
      });
    });
    if (best) { nho.da[loai + '|' + best.id] = 1; nho.luot[best.id] = 1; }
    return best;
  }

  function taoCauP(P, loai, nho) {
    nho = nhoSach(nho);
    var x, q = null, m;
    switch (loai) {
      case 'doc':
        x = chonMuc([P.vocab], loai, nho);
        if (x) q = { lenh: 'Đọc to từ này', de: { lon: x.zh, zh: true },
          dap: { py: x.py, vn: x.vn, them: x.hv ? 'Hán Việt: ' + x.hv : '' },
          doc: x.zh, tuDoc: 'dap', goiY: 'Nghĩa của từ: ' + x.vn, tu: x };
        break;
      case 'nghia':
        x = chonMuc([P.vocab], loai, nho);
        if (x) q = { lenh: 'Từ này nghĩa là gì?', de: { lon: x.zh, zh: true, phu: x.py },
          dap: { vn: x.vn, them: x.hv ? 'Hán Việt: ' + x.hv : '' },
          doc: x.zh, tuDoc: '', goiY: x.hv ? 'Âm Hán Việt: ' + x.hv : (x.ex_vn ? 'Câu ví dụ: ' + x.ex_vn : 'Từ có ' + x.zh.length + ' chữ'), tu: x };
        break;
      case 'viet':
        x = chonMuc([P.vocab], loai, nho);
        if (x) q = { lenh: 'Nói (hoặc viết lên bảng) chữ Hán của từ', de: { lon: x.vn },
          dap: { zh: x.zh, py: x.py, them: x.hv ? 'Hán Việt: ' + x.hv : '' },
          doc: x.zh, tuDoc: 'dap', goiY: x.py ? 'Pinyin: ' + x.py : 'Âm Hán Việt: ' + x.hv, tu: x };
        break;
      case 'nguphap':
        x = chonMuc([P.mcs], loai, nho);
        if (x) {
          var idx = tron(x.options.map(function (o, i) { return i; }));
          var dung = idx.indexOf(x.answer);
          m = P.nghia[khoaZh(x.full)] || {};
          q = { lenh: x.noBlank ? 'Chọn đáp án đúng' : 'Chọn từ điền vào chỗ trống',
            de: { mc: { pre: x.pre, post: x.post, noBlank: x.noBlank }, phu: x.context },
            luaChon: { opts: idx.map(function (i) { return x.options[i]; }), dung: dung },
            dap: x.noBlank
              ? { them: 'Đáp án ' + CHU[dung] + ': ' + x.options[x.answer], giai: x.why }
              : { zh: x.full, py: m.py || '', vn: m.vn || '', them: 'Đáp án ' + CHU[dung] + ': ' + x.options[x.answer], giai: x.why },
            doc: x.full, tuDoc: 'dap', goiY: x.hint ? 'Gợi ý: ' + x.hint : '' };
        }
        break;
      case 'xepcau':
        x = chonMuc([P.sorts], loai, nho);
        if (x) {
          var tu = x.tu, lan = 0;
          do { tu = tron(x.tu); lan++; } while (lan < 8 && tu.join('|') === x.tu.join('|'));
          m = P.nghia[khoaZh(x.answer)] || {};
          q = { lenh: 'Xếp các từ thành câu đúng', de: { tu: tu, phu: x.context },
            dap: { zh: x.answer, py: m.py || '', vn: m.vn || '', giai: x.why },
            doc: x.answer, tuDoc: 'dap', goiY: 'Câu bắt đầu bằng «' + x.tu[0] + '»' };
        }
        break;
      case 'dichtv':
        x = chonMuc(P.dtv, loai, nho);
        if (x) q = { lenh: 'Dịch câu này sang tiếng Việt', de: { lon: x.zh, zh: true, phu: x.py },
          dap: { vn: x.vn }, doc: x.zh, tuDoc: '', goiY: 'Câu dịch bắt đầu: «' + dauCau(x.vn, 3) + '»' };
        break;
      case 'dich':
        x = chonMuc(P.dich, loai, nho);
        if (x) q = { lenh: 'Dịch câu này sang tiếng Trung', de: { lon: x.vn },
          dap: { zh: x.zh, py: x.py }, doc: x.zh, tuDoc: 'dap',
          goiY: 'Câu bắt đầu: ' + x.zh.slice(0, 2) + '…' + (x.py ? ' (' + dauCau(x.py, 2) + ')' : '') };
        break;
      case 'datcau':
        x = chonMuc(P.dat, loai, nho);
        if (x && x.kieu === 'tu') {
          var v = x.v;
          q = { lenh: 'Đặt một câu có dùng từ này', de: { lon: v.zh, zh: true, phu: (v.py ? v.py + ' · ' : '') + v.vn },
            dap: v.ex_zh
              ? { zh: v.ex_zh, py: v.ex_py, vn: v.ex_vn, them: 'Câu mẫu — câu của em đúng ngữ pháp, đúng nghĩa là đạt.' }
              : { them: 'Không có câu mẫu — thầy/cô chấm theo câu của em.' },
            doc: v.ex_zh, tuDoc: 'dap',
            goiY: v.ex_vn ? 'Thử nói ý này: «' + v.ex_vn + '»' : 'Thử mẫu: 我 / 他 … ' + v.zh + ' …', tu: v };
        } else if (x) {
          m = P.nghia[khoaZh(x.vd)] || {};
          q = { lenh: 'Đặt một câu dùng điểm ngữ pháp này', de: { lon: x.point },
            dap: x.vd
              ? { zh: x.vd, py: m.py || '', vn: m.vn || '', them: 'Câu mẫu — thầy/cô chấm theo câu của em.', giai: x.why }
              : { them: 'Thầy/cô chấm theo câu của em.', giai: x.why },
            doc: x.vd, tuDoc: 'dap', goiY: x.why ? 'Nhắc lại: ' + x.why : (x.vd ? 'Câu mẫu bắt đầu: ' + x.vd.slice(0, 2) + '…' : '') };
        }
        break;
      case 'hoidap':
        x = chonMuc(P.hd, loai, nho);
        if (x) q = { lenh: 'Nghe câu này rồi đáp lại bằng tiếng Trung', de: { lon: x.a.zh, zh: true, phu: x.a.py, canh: x.canh },
          dap: { zh: x.b.zh, py: x.b.py, vn: x.b.vn, them: x.a.vn ? 'Câu hỏi: ' + x.a.vn : '' },
          doc: x.a.zh, tuDoc: 'de', goiY: x.a.vn ? 'Câu này nghĩa là: «' + x.a.vn + '»' : 'Câu đáp bắt đầu: ' + x.b.zh.slice(0, 2) + '…' };
        break;
      case 'noi': {
        // 4 tu ben trai (1–4), 4 nghia xao ben phai (A–D); em noi cap "1 – C"
        var bon = [], thayZh = {}, thayVn = {};
        while (bon.length < 4) {
          var con = P.vocab.filter(function (v) { return !thayZh[v.zh] && !thayVn[v.vn]; });
          var y = con.length ? chonMuc([con], loai, nho) : null;
          if (!y) break;
          thayZh[y.zh] = 1; thayVn[y.vn] = 1; bon.push(y);
        }
        if (bon.length < 3) break;
        x = bon[0];
        var phai = tron(bon.map(function (v, i) { return i; }));
        q = { lenh: 'Nối mỗi từ với nghĩa đúng (nói: 1 – C…)',
          de: { noi: { trai: bon.map(function (v) { return v.zh; }), phai: phai.map(function (i) { return bon[i].vn; }), dap: bon.map(function (v, i) { return phai.indexOf(i); }) } },
          dap: { them: bon.map(function (v, i) { return (i + 1) + ' – ' + CHU[phai.indexOf(i)]; }).join('   ·   ') },
          doc: '', tuDoc: '', goiY: 'Từ số 1 «' + bon[0].zh + '» nghĩa là «' + bon[0].vn + '»' };
        break;
      }
      case 'nghe':
        x = chonMuc(P.nghe, loai, nho);
        if (x) q = { lenh: 'Nghe rồi nói nghĩa tiếng Việt', de: { nghe: khoaZh(x.zh).length > 4 ? 'câu' : 'từ' },
          dap: { zh: x.zh, py: x.py, vn: x.vn }, doc: x.zh, tuDoc: 'de',
          goiY: 'Có ' + khoaZh(x.zh).length + ' chữ, bắt đầu bằng «' + x.zh.charAt(0) + '»' };
        break;
      case 'dien':
        x = chonMuc([P.dien], loai, nho);
        if (x) {
          var v2 = x.v, khac = tron(P.vocab.filter(function (w) { return w.zh !== v2.zh && x.pre.indexOf(w.zh) < 0 && x.post.indexOf(w.zh) < 0; }));
          // uu tien tu cung so chu de kho doan theo do dai
          khac.sort(function (a, b) { return Math.abs(a.zh.length - v2.zh.length) - Math.abs(b.zh.length - v2.zh.length); });
          var opts2 = tron([v2.zh].concat(khac.slice(0, 3).map(function (w) { return w.zh; })));
          q = { lenh: 'Chọn từ điền vào chỗ trống', de: { mc: { pre: x.pre, post: x.post }, phu: v2.ex_vn },
            luaChon: { opts: opts2, dung: opts2.indexOf(v2.zh) },
            dap: { zh: v2.ex_zh, py: v2.ex_py, vn: v2.ex_vn, them: 'Từ cần điền: ' + v2.zh + ' — ' + v2.vn },
            doc: v2.ex_zh, tuDoc: 'dap', goiY: 'Từ cần điền nghĩa là «' + v2.vn + '»' };
        }
        break;
      case 'sualoi':
        x = chonMuc([P.sl], loai, nho);
        if (x) {
          // dao hai cum lien nhau khac nhau; doi khi dao cum dau voi cum cuoi
          var t2 = x.tu.slice(), lan2 = 0, viTri = 0;
          do {
            t2 = x.tu.slice();
            viTri = Math.floor(Math.random() * (t2.length - 1));
            var tam = t2[viTri]; t2[viTri] = t2[viTri + 1]; t2[viTri + 1] = tam;
            lan2++;
          } while (lan2 < 10 && khoaZh(t2.join('')) === khoaZh(x.answer));
          if (khoaZh(t2.join('')) === khoaZh(x.answer)) { q = null; break; }
          var sai = t2.map(function (w) { return w.replace(/[。？！?!.]+$/, ''); }).join('') + dauCuoi(x.answer);
          m = P.nghia[khoaZh(x.answer)] || {};
          q = { lenh: 'Câu này sai trật tự từ — em đọc lại câu đúng', de: { lon: sai, zh: true, sai: true, phu: m.vn ? 'Nghĩa: ' + m.vn : '' },
            dap: { zh: x.answer, py: m.py || '', vn: m.vn || '', giai: x.why },
            doc: x.answer, tuDoc: 'dap', goiY: 'Chỗ sai ở quanh «' + t2[viTri] + t2[viTri + 1] + '»' };
        }
        break;
    }
    if (!q) return null;
    q.loai = loai;
    q.kho = KHO[loai];
    q.tieuDe = TEN_LOAI[loai];
    q.key = loai + '|' + x.id;
    nho.loai[loai] = (nho.loai[loai] || 0) + 1;
    return q;
  }

  // Chon dang cau trong danh sach uu tien; it dung nhat trong luot truoc
  function chonLoai(P, ds, nho) {
    var co = mang(ds).filter(function (l) { return coLoai(P, l); });
    if (!co.length) return '';
    nho = nhoSach(nho);
    var min = Infinity;
    co.forEach(function (l) { min = Math.min(min, nho.loai[l] || 0); });
    co = co.filter(function (l) { return (nho.loai[l] || 0) === min; });
    return co[Math.floor(Math.random() * co.length)];
  }
  // Khong co dang nao trong ds thi lay dang co do kho gan nhat
  function loaiTheoKho(P, kho, ds, nho) {
    var l = ds ? chonLoai(P, ds, nho) : '';
    if (l) return l;
    var all = loaiCo(P);
    if (!all.length) return '';
    var min = 9;
    all.forEach(function (x) { min = Math.min(min, Math.abs(KHO[x] - kho)); });
    return chonLoai(P, all.filter(function (x) { return Math.abs(KHO[x] - kho) === min; }), nho);
  }

  var LOI = {
    _taoCau: function (opt, loai, nho) { return taoCauP(chuanHoa(opt), loai, nho); },
    _loaiCo: function (opt) { return loaiCo(chuanHoa(opt)); },
    _taoTheoKho: function (opt, kho, ds, nho) {
      var P = chuanHoa(opt), l = loaiTheoKho(P, kho, ds, nho);
      return l ? taoCauP(P, l, nho) : null;
    },
    _chuanHoa: chuanHoa,
    _KHO: KHO
  };

  if (typeof document === 'undefined') {
    var g0 = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : {});
    g0.LopKiemTra = LOI;
    if (typeof module !== 'undefined' && module.exports) module.exports = LOI;
    return;
  }

  /* =====================================================================
     PHAN 2 — MAN CHIEU
     ===================================================================== */
  var PW_KEY = 'hyv_admin_pw';
  var LIST_KEY = 'hyv_ufo_lists';
  var PREF_KEY = 'hyv_kt_pref';
  var MAU = ['#e0644f', '#e8a33d', '#4f9d69', '#3f88c5', '#9b6bc7', '#d4588f', '#2fa3a0', '#c77d3a', '#6c7fd8', '#b8574a'];
  var MAU_HOP = ['#b8432f', '#e9a23b', '#2f8a57', '#c75b3a', '#d4882a', '#3d7f68', '#9e3a2a', '#e0a040', '#4a8c5c'];

  var MODE = {
    hop: { ic: '🎁', ten: 'Hộp quà bí mật', mo: '9 hộp quà đánh số — mỗi hộp một câu, có hộp ⭐ nhân đôi điểm.' },
    thang: { ic: '🏆', ten: 'Leo thang triệu phú', mo: '5 bậc khó dần, 2 quyền trợ giúp; sai thì rơi về bậc an toàn.' },
    ghe: { ic: '🔥', ten: 'Ghế nóng', mo: 'Thẻ từ vựng dồn dập — trả lời được bao nhiêu từ trước khi hết giờ?' },
    boc: { ic: '🎴', ten: 'Bốc thăm nhiệm vụ', mo: 'Bốc lá thăm từ 4 chồng nhiệm vụ, mỗi lá chấm 0–3 điểm.' },
    dang: { ic: '📋', ten: 'Kiểm tra theo dạng', mo: 'Cô chọn dạng bài (xếp câu, dịch câu, điền từ…) và số câu — hỏi lần lượt.' },
    quay: { ic: '🎡', ten: 'Vòng quay dạng câu', mo: 'Quay bánh xe: dừng ở dạng nào làm dạng đó, có ô ⭐ nhân đôi.' }
  };
  var MODE_DS = ['hop', 'thang', 'ghe', 'boc', 'dang', 'quay'];
  // Mau tung dang tren vong quay
  var MAU_LOAI = { doc: '#3f7fb5', nghia: '#2fa3a0', viet: '#6c7fd8', noi: '#4f9d69', nghe: '#9b6bc7', nguphap: '#d48a1f',
    dien: '#e0644f', xepcau: '#c77d3a', sualoi: '#b8432f', dichtv: '#2f8a57', dich: '#3d7f68', datcau: '#d4588f', hoidap: '#8e5a3c' };
  var HOP_TIER = {
    de: { kho: 1, diem: 1, ten: 'Dễ', ic: '🍬' },
    vua: { kho: 2, diem: 2, ten: 'Vừa', ic: '🍀' },
    kho: { kho: 3, diem: 3, ten: 'Khó', ic: '🌶️' },
    sao: { kho: 0, diem: 0, ten: 'Ngôi sao may mắn', ic: '⭐' }
  };
  var BAC = [
    { diem: 2, kho: 1, loai: ['doc', 'nghe'], ten: 'Đọc / nghe từ' },
    { diem: 4, kho: 1, loai: ['nghia', 'viet', 'noi'], ten: 'Nghĩa / chữ Hán', an: true },
    { diem: 6, kho: 2, loai: ['nguphap', 'dien'], ten: 'Ngữ pháp / điền từ' },
    { diem: 8, kho: 3, loai: ['dich', 'xepcau', 'sualoi'], ten: 'Dịch / xếp / sửa câu' },
    { diem: 10, kho: 3, loai: ['datcau', 'hoidap'], ten: 'Đặt câu / hỏi – đáp' }
  ];
  var CHONG = [
    { ic: '📖', ten: 'Từ vựng', loai: ['doc', 'nghia', 'nghe', 'noi'], mau: '#3f7fb5' },
    { ic: '🔁', ten: 'Dịch câu', loai: ['dich', 'dichtv'], mau: '#2f8a57' },
    { ic: '✍️', ten: 'Câu', loai: ['datcau', 'xepcau', 'sualoi', 'dien'], mau: '#d48a1f' },
    { ic: '💬', ten: 'Hỏi – đáp', loai: ['hoidap'], du: ['nguphap'], mau: '#b8432f' }
  ];
  var VONG = 2 * Math.PI * 52;

  var S = {
    built: false, sound: true,
    goc: null, P: null, loai: [], nhan: '', ky: '',
    src: '', roundSrc: '', classes: [], kids: [], round: {}, absent: {}, dangTai: false, loiDs: '',
    mode: 'hop', hopSo: 3, gheGiay: 60, gheMuc: 8, bocSo: 3, dangSo: 5, dangLoai: ['xepcau', 'dich'], quaySo: 4,
    nho: { da: {}, luot: {}, loai: {} }, log: [], luotSo: 0,
    pha: 'sanh', cur: null, van: 0, dk: [], busy: false, soCu: '', soMs: 0
  };
  var root, man, lop;

  function $(sel) { return root.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function giamChuyenDong() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function moc(n, a, b) { return Math.max(a, Math.min(b, n)); }
  function soDiem(x) { return Math.round(x * 10) / 10; }

  // Hen gio gan voi "phien" hien tai: doi man la cac hen cu tu huy
  var hen = [];
  function sau(ms, fn) {
    var ve = S.van;
    var id = setTimeout(function () { if (ve === S.van && root && !root.hidden) fn(); }, ms);
    hen.push(id);
    return id;
  }
  function huyHen() {
    S.van++;
    hen.forEach(clearTimeout);
    hen = [];
    S.dk.forEach(clearInterval);
    S.dk = [];
  }

  function api(path, opts) {
    opts = opts || {};
    opts.headers = { 'X-Admin-Password': pw() };
    if (opts.body) opts.headers['Content-Type'] = 'application/json';
    return fetch(path, opts).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d && d.error ? d.error : 'Lỗi máy chủ.'); e.status = r.status; throw e; }
        return d;
      });
    });
  }

  /* ---------------- am thanh & giong doc ---------------- */
  var ac = null, onBuf = null;
  function ctx() {
    if (!S.sound) return null;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ac) ac = new AC();
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }
  function tone(freq, dur, type, vol, delay, endFreq) {
    var a = ctx();
    if (!a) return;
    var t0 = a.currentTime + (delay || 0);
    var o = a.createOscillator(), g = a.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(a.destination);
    o.start(t0); o.stop(t0 + dur + 0.03);
  }
  function noise(dur, vol, delay, freq) {
    var a = ctx();
    if (!a) return;
    if (!onBuf) {
      onBuf = a.createBuffer(1, a.sampleRate, a.sampleRate);
      var d = onBuf.getChannelData(0);
      for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    var t0 = a.currentTime + (delay || 0);
    var s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    s.buffer = onBuf;
    f.type = 'bandpass'; f.frequency.setValueAtTime(freq || 800, t0); f.frequency.exponentialRampToValueAtTime((freq || 800) * 3, t0 + dur); f.Q.value = 1.2;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + dur * 0.3);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(f); f.connect(g); g.connect(a.destination);
    s.start(t0); s.stop(t0 + dur + 0.02);
  }
  function sndChon() { tone(660, 0.08, 'square', 0.05); tone(990, 0.1, 'square', 0.04, 0.07); }
  function sndTick(i) { tone(520 + (i % 6) * 70, 0.06, 'square', 0.04); }
  function sndMo() { noise(0.4, 0.2, 0, 600); tone(392, 0.12, 'triangle', 0.12, 0.25); tone(523, 0.12, 'triangle', 0.12, 0.35); tone(784, 0.25, 'triangle', 0.14, 0.45); }
  function sndLat() { noise(0.25, 0.18, 0, 900); tone(600, 0.18, 'sine', 0.08, 0, 1200); }
  function sndXao() { for (var i = 0; i < 8; i++) noise(0.09, 0.12, i * 0.12, 1200 + i * 80); }
  function sndDung() { tone(784, 0.14, 'triangle', 0.2); tone(1175, 0.3, 'triangle', 0.18, 0.12); }
  function sndNua() { tone(660, 0.14, 'triangle', 0.16); tone(784, 0.22, 'triangle', 0.14, 0.12); }
  function sndSai() { tone(240, 0.2, 'square', 0.07, 0, 180); tone(180, 0.35, 'square', 0.07, 0.18, 120); }
  function sndBo() { tone(440, 0.1, 'sine', 0.08, 0, 330); }
  function sndXong() { tone(988, 0.14, 'triangle', 0.2); tone(1319, 0.3, 'triangle', 0.18, 0.12); }
  function sndHet() { tone(880, 0.25, 'square', 0.08); tone(660, 0.25, 'square', 0.08, 0.28); tone(440, 0.5, 'square', 0.08, 0.56); }
  function sndKen() {
    [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.16, i * 0.11); });
    tone(1047, 0.6, 'triangle', 0.14, 0.6); tone(1319, 0.6, 'triangle', 0.12, 0.6); tone(1568, 0.7, 'triangle', 0.12, 0.6);
  }

  function giong(re1, re2) {
    if (!window.speechSynthesis) return null;
    var v = window.speechSynthesis.getVoices() || [], i;
    for (i = 0; i < v.length; i++) if (re1.test(v[i].lang)) return v[i];
    if (re2) for (i = 0; i < v.length; i++) if (re2.test(v[i].lang)) return v[i];
    return null;
  }
  function docTrung(t) {
    if (!t || !S.sound || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(t);
    var g = giong(/^zh[-_]CN/i, /^(zh|cmn)/i);
    if (g) u.voice = g;
    u.lang = 'zh-CN';
    u.rate = 0.8;
    window.speechSynthesis.speak(u);
  }
  function docTen(t) {
    if (!S.sound || !window.speechSynthesis) return;
    var g = giong(/^vi/i);
    if (!g) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(t);
    u.voice = g; u.lang = g.lang; u.rate = 0.95;
    window.speechSynthesis.speak(u);
  }
  function imLang() { if (window.speechSynthesis) window.speechSynthesis.cancel(); }

  /* ---------------- luu lua chon ---------------- */
  function luuPref() {
    ghiLS(PREF_KEY, { src: S.src, mode: S.mode, hopSo: S.hopSo, gheGiay: S.gheGiay, gheMuc: S.gheMuc, bocSo: S.bocSo,
      dangSo: S.dangSo, dangLoai: S.dangLoai, quaySo: S.quaySo, sound: S.sound });
  }
  function napPref() {
    var p = docLS(PREF_KEY, {});
    S.src = typeof p.src === 'string' ? p.src : '';
    S.mode = MODE[p.mode] ? p.mode : 'hop';
    S.hopSo = p.hopSo >= 2 && p.hopSo <= 4 ? p.hopSo : 3;
    S.gheGiay = [30, 60, 90].indexOf(p.gheGiay) >= 0 ? p.gheGiay : 60;
    S.gheMuc = [5, 8, 10, 12].indexOf(p.gheMuc) >= 0 ? p.gheMuc : 8;
    S.bocSo = p.bocSo >= 2 && p.bocSo <= 4 ? p.bocSo : 3;
    S.dangSo = [3, 5, 7, 10].indexOf(p.dangSo) >= 0 ? p.dangSo : 5;
    S.dangLoai = Array.isArray(p.dangLoai) && p.dangLoai.length ? p.dangLoai.filter(function (l) { return TEN_LOAI[l]; }) : ['xepcau', 'dich'];
    if (!S.dangLoai.length) S.dangLoai = ['xepcau', 'dich'];
    S.quaySo = p.quaySo >= 3 && p.quaySo <= 5 ? p.quaySo : 4;
    S.sound = p.sound !== false;
  }

  /* ---------------- danh sach nhanh (chung voi UFO goi tra bai) ---------------- */
  function docDs() { var l = docLS(LIST_KEY, []); return Array.isArray(l) ? l : []; }
  function ghiDs(l) { ghiLS(LIST_KEY, l); }
  function timDs(id) { var l = docDs(); for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }

  /* ---------------- dung khung ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopKiemTra';
    root.className = 'kt';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Kiểm tra bài cũ');
    root.innerHTML =
      '<div class="kt-nen" aria-hidden="true"></div>' +
      '<header class="kt-bar">' +
        '<b class="kt-title">📝 Kiểm tra bài cũ</b>' +
        '<span class="kt-sub" id="ktSub"></span>' +
        '<select class="kt-src" id="ktSrc" aria-label="Chọn lớp"></select>' +
        '<button type="button" class="kt-btn" id="ktEdit" data-k="suaDs" hidden>✏️ Sửa danh sách</button>' +
        '<span class="kt-bar-gap"></span>' +
        '<button type="button" class="kt-btn kt-ic" id="ktSound" data-k="am"></button>' +
        '<button type="button" class="kt-btn kt-ic" data-k="full" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="kt-btn" data-k="dong">✕ Đóng</button>' +
      '</header>' +
      '<main class="kt-man" id="ktMan"></main>' +
      '<p class="kt-phim" id="ktPhim" aria-hidden="true"></p>' +
      '<div class="kt-toast" id="ktToast" role="status" aria-live="polite"></div>' +
      '<div class="kt-lop" id="ktLop" hidden><div class="kt-lop-the" id="ktLopThe"></div></div>' +
      '<div class="kt-panel" id="ktPanel" hidden><div class="kt-panel-card" id="ktPanelCard" role="dialog" aria-modal="true"></div></div>';
    document.body.appendChild(root);
    man = $('#ktMan');
    lop = $('#ktLop');
    $('#ktSrc').addEventListener('change', doiNguon);
    root.addEventListener('click', bam);
    $('#ktPanel').addEventListener('click', function (e) { if (e.target.id === 'ktPanel') dongPanel(); });
    window.addEventListener('keydown', phim, true);
    S.built = true;
  }

  function veNut() {
    var s = $('#ktSound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng & giọng đọc — bấm để tắt (M)' : 'Đang tắt tiếng — bấm để bật (M)';
    s.classList.toggle('is-off', !S.sound);
    $('#ktEdit').hidden = S.src.indexOf('ls:') !== 0;
    $('#ktSub').textContent = S.nhan ? '· ' + S.nhan : '';
  }

  var toastT = 0;
  function bao(t) {
    var el = $('#ktToast');
    el.textContent = t;
    el.classList.add('is-on');
    clearTimeout(toastT);
    toastT = setTimeout(function () { el.classList.remove('is-on'); }, 2600);
  }

  /* ---------------- nguon danh sach ---------------- */
  function napNguon() {
    var o = [];
    S.classes.forEach(function (c) {
      o.push('<option value="sv:' + esc(c.id) + '">🏫 ' + esc(c.name) + ' (' + c.size + ')</option>');
    });
    if (!S.classes.length) o.push('<option value="key">🔑 Lớp trên hệ thống (cần mật khẩu)…</option>');
    docDs().forEach(function (l) {
      o.push('<option value="ls:' + esc(l.id) + '">📋 ' + esc(l.name) + ' (' + l.kids.length + ')</option>');
    });
    o.push('<option value="new">＋ Tạo danh sách nhanh…</option>');
    o.push('<option value="none">🙈 Không dùng danh sách</option>');
    if (!S.src) o.unshift('<option value="">— Chọn lớp —</option>');
    var sel = $('#ktSrc');
    sel.innerHTML = o.join('');
    sel.value = S.src;
  }
  function coNguon(v) {
    if (v === 'none') return true;
    if (v.indexOf('sv:') === 0) return S.classes.some(function (c) { return 'sv:' + c.id === v; });
    if (v.indexOf('ls:') === 0) return !!timDs(v.slice(3));
    return false;
  }
  function doiNguon() {
    var v = this.value;
    this.value = S.src;
    if (v === 'key') return moKhoa();
    if (v === 'new') return moSua(null);
    if (v) chonNguon(v);
  }

  function chonNguon(v) {
    if (v !== S.roundSrc) { S.round = {}; S.absent = {}; S.roundSrc = v; }
    S.src = v;
    S.kids = [];
    S.loiDs = '';
    S.dangTai = false;
    luuPref();
    napNguon();
    veNut();
    if (v === 'none') { veLai(); return Promise.resolve(); }
    if (v.indexOf('ls:') === 0) {
      var l = timDs(v.slice(3));
      S.kids = l ? l.kids.map(function (k) {
        var sc = k.scores || [];
        return { id: k.id, name: k.name, times: k.times || 0, lastMs: k.lastMs || 0,
          avg: sc.length ? Math.round(sc.reduce(function (a, b) { return a + b; }, 0) / sc.length * 10) / 10 : null };
      }) : [];
      veLai();
      return Promise.resolve();
    }
    S.dangTai = true;
    veLai();
    return api('/api/admin/oral?classId=' + encodeURIComponent(v.slice(3)))
      .then(function (d) {
        S.dangTai = false;
        S.kids = (d.roster || []).map(function (r) {
          return { id: r.id, name: r.name, no: r.no, times: r.times || 0, lastMs: r.lastMs || 0, avg: r.avg };
        });
        if (!S.kids.length) S.loiDs = 'Lớp này chưa có danh sách. Vào Báo cáo → Lớp & bài giao để dán danh sách, hoặc tạo danh sách nhanh.';
        veLai();
      })
      .catch(function (e) { S.dangTai = false; loiMay(e); });
  }
  function loiMay(e) {
    if (e && (e.status === 401 || e.status === 403)) {
      try { sessionStorage.removeItem(PW_KEY); } catch (x) { /* bo qua */ }
      S.classes = [];
      S.src = '';
      napNguon();
      veLai();
      moKhoa('Mật khẩu không đúng hoặc đã hết phiên. Nhập lại nhé.');
    } else {
      S.loiDs = e && e.message ? e.message : 'Không tải được danh sách.';
      veLai();
    }
  }
  function napLop() {
    if (!pw()) return Promise.resolve();
    return api('/api/admin/oral').then(function (d) { S.classes = d.classes || []; })
      .catch(function (e) {
        if (e && (e.status === 401 || e.status === 403)) { try { sessionStorage.removeItem(PW_KEY); } catch (x) { /* bo qua */ } }
        S.classes = [];
      });
  }
  function chonDau() {
    napNguon();
    veNut();
    if (S.src && coNguon(S.src)) return chonNguon(S.src);
    if (S.classes.length) return chonNguon('sv:' + S.classes[0].id);
    var l = docDs();
    if (l.length) return chonNguon('ls:' + l[0].id);
    S.src = '';
    S.kids = [];
    S.dangTai = false;
    napNguon();
    veLai();
  }
  function veLai() { if (S.pha === 'sanh') veSanh(); }

  /* ---------------- hoc sinh ---------------- */
  function tenNgan(k, dem) {
    var w = String(k.name).trim().split(/\s+/);
    var n1 = w[w.length - 1], n2 = w.slice(-2).join(' ');
    if (dem[n1] === 1) return n1;
    if (dem[n2] === 1) return n2;
    return k.name;
  }
  function demTen() {
    var dem = {};
    S.kids.forEach(function (k) {
      var w = String(k.name).trim().split(/\s+/);
      var n1 = w[w.length - 1], n2 = w.slice(-2).join(' ');
      dem[n1] = (dem[n1] || 0) + 1;
      if (n2 !== n1) dem[n2] = (dem[n2] || 0) + 1;
    });
    return dem;
  }
  function mau(name) {
    var h = 0;
    name = String(name || '');
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return MAU[h % MAU.length];
  }
  function meta(k) {
    var m = [];
    if (k.no) m.push('Số ' + k.no);
    if (k.lastMs) {
      var d = Math.floor((Date.now() - k.lastMs) / 86400000);
      m.push('gọi gần nhất ' + (d <= 0 ? 'hôm nay' : d + ' ngày trước'));
    } else m.push('chưa được gọi lần nào');
    if (k.times) m.push('đã gọi ' + k.times + ' lần');
    if (k.avg !== null && k.avg !== undefined) m.push('điểm TB ' + k.avg);
    return m.join(' · ');
  }
  function timHs(id) { return S.kids.filter(function (x) { return x.id === id; })[0] || null; }
  function demLop() {
    var vang = 0, xong = 0;
    S.kids.forEach(function (k) { if (S.absent[k.id]) vang++; else if (S.round[k.id]) xong++; });
    return { tong: S.kids.length, vang: vang, xong: xong, con: S.kids.length - vang - xong };
  }

  // Uu tien: chua goi lan nao > lau chua goi > it lan bi goi, them chut ngau nhien
  function chonEm(tranh) {
    var now = Date.now();
    var pool = S.kids.filter(function (k) { return !S.round[k.id] && !S.absent[k.id] && tranh.indexOf(k) < 0; });
    if (!pool.length) return null;
    var best = null, bw = -Infinity;
    pool.forEach(function (k) {
      var days = k.lastMs ? (now - k.lastMs) / 86400000 : 999;
      var w = Math.min(days, 60) * 10 - k.times * 3 + Math.random() * 25;
      if (w > bw) { bw = w; best = k; }
    });
    return best;
  }

  function luuDiem(k, diem) {
    var luu;
    if (S.src.indexOf('sv:') === 0) {
      luu = api('/api/admin/oral', { method: 'POST', body: JSON.stringify({ classId: S.src.slice(3), rosterId: k.id, score: diem }) });
    } else {
      var lists = docDs();
      lists.forEach(function (l) {
        if ('ls:' + l.id !== S.src) return;
        l.kids.forEach(function (x) {
          if (x.id !== k.id) return;
          x.times = (x.times || 0) + 1;
          x.lastMs = Date.now();
          x.scores = (x.scores || []).concat(diem).slice(-30);
        });
      });
      ghiDs(lists);
      luu = Promise.resolve();
    }
    return luu.then(function () {
      k.times = (k.times || 0) + 1;
      k.lastMs = Date.now();
    });
  }

  /* ---------------- cau hoi dung chung ---------------- */
  function cauTheo(kho, ds) {
    var l = loaiTheoKho(S.P, kho, ds, S.nho);
    return l ? taoCauP(S.P, l, S.nho) : null;
  }
  function saoKho(n) { var s = ''; for (var i = 1; i <= 3; i++) s += i <= n ? '★' : '☆'; return s; }
  function coDai(t, zh) {
    var n = String(t || '').length;
    if (zh) return n > 16 ? ' is-rat-dai' : n > 5 ? ' is-dai' : '';
    return n > 70 ? ' is-rat-dai' : n > 26 ? ' is-dai' : '';
  }

  function htmlCau(q, o) {
    o = o || {};
    var d = q.de || {}, h = '';
    h += '<div class="kt-cau kt-kho' + q.kho + (o.moi ? ' is-moi' : '') + '" data-loai="' + q.loai + '">';
    h += '<div class="kt-cau-hd"><span class="kt-cau-loai">' + esc(q.tieuDe) + '</span>' +
      '<span class="kt-cau-kho" title="Độ khó">' + saoKho(q.kho) + '</span>' +
      (o.nhan ? '<span class="kt-cau-nhan">' + o.nhan + '</span>' : '') +
      (q.doc ? '<button type="button" class="kt-nghe" data-k="nghe" title="Đọc to (S)">🔊</button>' : '') + '</div>';
    if (d.canh) h += '<p class="kt-cau-canh">🎬 ' + esc(d.canh) + '</p>';
    h += '<p class="kt-cau-lenh">' + esc(q.lenh) + '</p>';
    if (d.tu) {
      h += '<div class="kt-tu">' + d.tu.map(function (w) { return '<span class="kt-tu-o zh">' + esc(w) + '</span>'; }).join('') + '</div>';
    } else if (d.mc) {
      var dien = o.lo && q.luaChon ? q.luaChon.opts[q.luaChon.dung] : '';
      h += d.mc.noBlank
        ? '<p class="kt-cau-mc' + coDai(d.mc.pre, false) + '">' + esc(d.mc.pre) + '</p>'
        : '<p class="kt-cau-mc zh">' + esc(d.mc.pre) + '<span class="kt-trong' + (dien ? ' is-dien' : '') + '">' + (dien ? esc(dien) : '＿＿') + '</span>' + esc(d.mc.post) + '</p>';
    } else if (d.noi) {
      // Hai cot; lat dap an thi moi tu hien chu cai nghia dung ben canh
      h += '<div class="kt-noi"><ol class="kt-noi-trai">' + d.noi.trai.map(function (t, i) {
        return '<li><b>' + (i + 1) + '</b><span class="zh">' + esc(t) + '</span>' +
          (o.lo ? '<em class="kt-noi-dap">' + CHU[d.noi.dap[i]] + '</em>' : '') + '</li>';
      }).join('') + '</ol><ol class="kt-noi-phai">' + d.noi.phai.map(function (t, i) {
        return '<li><b>' + CHU[i] + '</b><span>' + esc(t) + '</span></li>';
      }).join('') + '</ol></div>';
    } else if (d.nghe) {
      h += '<button type="button" class="kt-nghe-to" data-k="nghe" title="Nghe lại (S)"><span aria-hidden="true">🎧</span>' +
        'Nghe ' + esc(d.nghe) + ' — bấm để nghe lại</button>';
    } else if (d.lon) {
      h += '<p class="kt-cau-lon' + (d.zh ? ' zh' : '') + (d.sai ? ' is-sai-cau' : '') + coDai(d.lon, d.zh) + '">' + esc(d.lon) + '</p>';
    }
    if (d.phu) h += '<p class="kt-cau-phu">' + esc(d.phu) + '</p>';
    if (q.luaChon) {
      h += '<div class="kt-opts">' + q.luaChon.opts.map(function (t, i) {
        var an = o.an50 && o.an50.indexOf(i) >= 0;
        var cls = 'kt-opt' + (an ? ' is-an' : '') + (o.lo && i === q.luaChon.dung ? ' is-dung' : '') +
          (o.lo && o.chon === i && i !== q.luaChon.dung ? ' is-sai' : '') + (o.chon === i ? ' is-chon' : '');
        return '<button type="button" data-k="opt" data-v="' + i + '" class="' + cls + '"' + (an || o.khoa ? ' disabled' : '') + '>' +
          '<b>' + CHU[i] + '</b><span' + (coHan(t) ? ' class="zh"' : '') + '>' + esc(t) + '</span></button>';
      }).join('') + '</div>';
    }
    if (o.goiY && q.goiY) h += '<p class="kt-goiy">💡 ' + esc(q.goiY) + '</p>';
    if (o.lo) {
      var a = q.dap || {};
      h += '<div class="kt-dap"><p class="kt-dap-nhan">Đáp án</p>' +
        (a.zh ? '<p class="kt-dap-zh zh">' + esc(a.zh) + '</p>' : '') +
        (a.py ? '<p class="kt-dap-py">' + esc(a.py) + '</p>' : '') +
        (a.vn ? '<p class="kt-dap-vn">' + esc(a.vn) + '</p>' : '') +
        (a.them ? '<p class="kt-dap-them">' + esc(a.them) + '</p>' : '') +
        (a.giai ? '<p class="kt-dap-giai">📌 ' + esc(a.giai) + '</p>' : '') + '</div>';
    }
    return h + '</div>';
  }

  // Thanh cham: kieu 'hop' (dung / gan dung / sai), 'thang' (dung / sai), 'boc' (0-3)
  function thanhCham(g, kieu) {
    var h = '<div class="kt-cham">';
    if (g.cho) return h + '<button type="button" class="kt-go kt-go-sm" data-k="tiep">' + esc(g.choNhan || 'Tiếp tục') + ' ▶ <kbd>Space</kbd></button></div>';
    if (!g.lo) h += '<button type="button" class="kt-btn2 kt-lo" data-k="lo">👁 Xem đáp án <kbd>Enter</kbd></button>';
    var goi = g.q && g.q.luaChon && g.chon >= 0 ? (g.chon === g.q.luaChon.dung ? 'dung' : 'sai') : '';
    if (kieu === 'boc') {
      h += '<span class="kt-cham-nhan">Chấm lá này:</span>';
      for (var n = 0; n <= 3; n++) {
        var gy = goi === 'dung' && n === 3 || goi === 'sai' && n === 0;
        h += '<button type="button" class="kt-cham-so' + (gy ? ' is-goiy' : '') + '" data-k="cham" data-v="' + n + '">' + n + '<small>điểm</small></button>';
      }
    } else {
      h += '<button type="button" class="kt-cham-nut is-sai' + (goi === 'sai' ? ' is-goiy' : '') + '" data-k="cham" data-v="0">✗ Sai <kbd>←</kbd></button>';
      if (kieu === 'hop') h += '<button type="button" class="kt-cham-nut is-nua" data-k="cham" data-v="0.5">½ Gần đúng <kbd>↓</kbd></button>';
      h += '<button type="button" class="kt-cham-nut is-dung' + (goi === 'dung' ? ' is-goiy' : '') + '" data-k="cham" data-v="1">✓ Đúng <kbd>→</kbd></button>';
    }
    return h + '</div>';
  }

  function khung(cls, noiDung, tt) {
    var c = S.cur;
    return '<div class="kt-choi kt-choi-' + cls + '">' +
      '<div class="kt-strip">' +
        '<span class="kt-strip-ten" style="--c:' + mau(c.ten) + '">' + esc(c.ten) + '</span>' +
        '<span class="kt-strip-mode">' + MODE[c.mode].ic + ' ' + esc(MODE[c.mode].ten) + '</span>' +
        '<span class="kt-strip-tt" id="ktTt">' + (tt || '') + '</span>' +
        '<span class="kt-bar-gap"></span>' +
        '<button type="button" class="kt-btn3" data-k="huyLuot" title="Esc">✕ Dừng lượt</button>' +
      '</div>' + noiDung + '</div>';
  }

  // Sau khi cham: neu da xem dap an thi qua nhanh, chua xem thi lat dap an va cho bam Tiep
  function sauCham(g, daLo, tiep, nhan) {
    g.tiep = tiep;
    if (daLo) { g.khoa = true; GAME[S.cur.mode].ve(); sau(800, function () { g.khoa = false; g.tiep = null; tiep(); }); }
    else { g.cho = true; g.choNhan = nhan || 'Tiếp tục'; GAME[S.cur.mode].ve(); }
  }
  // Da hien dap an thi cuon lop phu xuong cho thay thanh cham / nut Tiep (man chieu thap)
  function cuonCham(sel, g) {
    var el = man.querySelector(sel);
    if (el && g.lo) el.scrollTop = el.scrollHeight;
  }
  function boCho(g) { g.cho = false; g.choNhan = ''; g.khoa = false; var t = g.tiep; g.tiep = null; if (t) t(); }

  function loCau(g) {
    if (!g.q || g.lo) return;
    g.lo = true;
    if (g.q.tuDoc === 'dap') docTrung(g.q.doc);
    GAME[S.cur.mode].ve();
  }
  function chonDa(g, i) {
    if (!g.q || !g.q.luaChon || g.khoa || g.cho) return;
    if (g.an50 && g.an50.indexOf(i) >= 0) return;
    g.chon = i;
    var dungRoi = i === g.q.luaChon.dung;
    if (dungRoi) sndDung(); else sndSai();
    g.lo = true;
    if (g.q.tuDoc === 'dap') docTrung(g.q.doc);
    GAME[S.cur.mode].ve();
  }

  /* =================== TRO 1: HOP QUA BI MAT =================== */
  var HOP = {
    bat: function () {
      var t = tron(['de', 'de', 'de', 'vua', 'vua', 'vua', 'kho', 'kho', 'sao']);
      S.cur.g = { hop: t.map(function (x) { return { tier: x, q: null, kq: null, mo: false, diem: 0, saoKho: 0 }; }),
        can: S.hopSo, dang: -1, q: null, lo: false, chon: -1, doi: 1, khoa: false, cho: false };
      HOP.ve();
    },
    soMo: function (g) { return g.hop.filter(function (h) { return h.mo; }).length; },
    tinh: function (g) {
      var duoc = 0, max = 0, cham = 0;
      g.hop.forEach(function (h) {
        if (!h.mo) return;
        max += h.diem;
        if (h.kq !== null) { duoc += h.kq * h.diem; cham++; }
      });
      return { duoc: duoc, max: max, cham: cham };
    },
    ve: function (moi) {
      var g = S.cur.g, so = HOP.soMo(g), t = HOP.tinh(g);
      var het = so >= g.can;
      var luoi = '<div class="kt-hop-luoi">' + g.hop.map(function (h, i) {
        var tr = HOP_TIER[h.tier];
        if (!h.mo) {
          return '<button type="button" class="kt-hop" data-k="hop" data-v="' + i + '" style="--h:' + MAU_HOP[i] + '"' +
            (het || g.dang >= 0 ? ' disabled' : '') + ' aria-label="Hộp số ' + (i + 1) + '">' +
            '<span class="kt-hop-nap"></span><span class="kt-hop-than"></span><span class="kt-hop-so">' + (i + 1) + '</span></button>';
        }
        var kq = h.kq === null ? '' : h.kq === 1 ? ' kq-dung' : h.kq > 0 ? ' kq-nua' : ' kq-sai';
        return '<div class="kt-hop is-da t-' + h.tier + kq + '">' +
          '<span class="kt-hop-ic">' + (h.tier === 'sao' ? '⭐' : tr.ic) + '</span>' +
          '<span class="kt-hop-tier">' + (h.tier === 'sao' ? 'Ngôi sao ×2' : tr.ten) + '</span>' +
          '<span class="kt-hop-diem">' + (h.kq === null ? h.diem + ' điểm' : (h.kq === 1 ? '✓ ' : h.kq > 0 ? '½ ' : '✗ ') + soDiem(h.kq * h.diem) + '/' + h.diem) + '</span></div>';
      }).join('') + '</div>';
      var ben = '<div class="kt-hop-ben"><p class="kt-hop-dem"><b>' + so + '</b>/' + g.can + ' hộp đã mở</p>' +
        '<p class="kt-hop-luat">🍬 Dễ 1 điểm · 🍀 Vừa 2 điểm<br>🌶️ Khó 3 điểm · ⭐ May mắn ×2</p>' +
        (g.dang < 0 && !het ? '<p class="kt-hop-moi">Chọn một hộp quà!<br><small>Bấm vào hộp hoặc gõ số 1–9</small></p>' : '') + '</div>';
      var cau = '';
      if (g.dang >= 0) {
        var h = g.hop[g.dang], tr = HOP_TIER[h.tier];
        cau = '<div class="kt-hop-cau"><div class="kt-hop-cau-the">' +
          '<p class="kt-hop-nhan t-' + h.tier + '">Hộp ' + (g.dang + 1) + ' · ' +
            (h.tier === 'sao' ? '⭐ Ngôi sao may mắn — điểm nhân đôi: ' + h.diem + ' điểm!' : tr.ic + ' ' + tr.ten + ' — ' + h.diem + ' điểm') + '</p>' +
          htmlCau(g.q, { lo: g.lo, chon: g.chon, moi: moi, khoa: g.khoa }) +
          thanhCham(g, 'hop') +
          (g.doi > 0 && !g.lo && !g.cho ? '<button type="button" class="kt-doi" data-k="doiCau">🔄 Đổi câu khác (còn 1 lần) <kbd>X</kbd></button>' : '') +
        '</div></div>';
      }
      man.innerHTML = khung('hop', '<div class="kt-hop-wrap">' + luoi + ben + '</div>' + cau,
        'Điểm: <b>' + soDiem(t.duoc) + '</b>/' + t.max);
      cuonCham('.kt-hop-cau', g);
      phimTat();
    },
    mo: function (i) {
      var g = S.cur.g, h = g.hop[i];
      if (!h || h.mo || g.khoa || g.dang >= 0 || HOP.soMo(g) >= g.can) return;
      g.khoa = true;
      var el = man.querySelector('.kt-hop[data-v="' + i + '"]');
      if (el) el.classList.add('is-dang-mo');
      sndMo();
      sau(giamChuyenDong() ? 150 : 900, function () {
        var tr = HOP_TIER[h.tier];
        var kho = h.tier === 'sao' ? 1 + Math.floor(Math.random() * 3) : tr.kho;
        h.q = cauTheo(kho, null);
        h.mo = true;
        h.diem = h.tier === 'sao' ? 2 * (h.q ? h.q.kho : kho) : tr.diem;
        g.dang = i; g.q = h.q; g.lo = false; g.chon = -1; g.khoa = false;
        if (h.tier === 'sao') sndKen();
        HOP.ve(true);
        if (g.q && g.q.tuDoc === 'de') docTrung(g.q.doc);
      });
    },
    doiCau: function () {
      var g = S.cur.g;
      if (g.dang < 0 || g.doi < 1 || g.lo || g.cho) return;
      var h = g.hop[g.dang];
      var q = cauTheo(h.q.kho, null);
      if (!q) return;
      g.doi--;
      h.q = g.q = q;
      g.chon = -1;
      sndLat();
      HOP.ve(true);
      if (q.tuDoc === 'de') docTrung(q.doc);
    },
    cham: function (v) {
      var g = S.cur.g;
      if (g.dang < 0 || g.khoa || g.cho) return;
      var h = g.hop[g.dang], daLo = g.lo;
      h.kq = v;
      if (v === 1) sndDung(); else if (v > 0) sndNua(); else sndSai();
      if (!g.lo) { g.lo = true; if (g.q.tuDoc === 'dap') docTrung(g.q.doc); }
      sauCham(g, daLo, function () {
        g.dang = -1; g.q = null; g.lo = false; g.chon = -1;
        var t = HOP.tinh(g);
        if (t.cham >= g.can) { HOP.ve(); sau(500, ketThuc); } else HOP.ve();
      }, HOP.tinh(g).cham >= g.can ? 'Xem kết quả' : 'Chọn hộp tiếp');
    },
    ket: function () {
      var g = S.cur.g, t = HOP.tinh(g);
      var d = t.max ? Math.round(10 * t.duoc / t.max) : 0;
      if (t.cham >= g.can && d < 2) d = 2;
      var ct = '<ul class="kt-kq-ds">' + g.hop.map(function (h, i) {
        if (!h.mo) return '';
        var tr = HOP_TIER[h.tier];
        return '<li><span>Hộp ' + (i + 1) + ' · ' + (h.tier === 'sao' ? '⭐ ×2' : tr.ic + ' ' + tr.ten) + (h.q ? ' · ' + esc(h.q.tieuDe) : '') + '</span>' +
          '<b>' + (h.kq === null ? 'chưa chấm' : soDiem(h.kq * h.diem) + '/' + h.diem) + '</b></li>';
      }).join('') + '</ul><p class="kt-kq-cong">Được <b>' + soDiem(t.duoc) + '</b> / ' + t.max + ' điểm hộp quà</p>';
      return { diem: d, ct: ct };
    },
    phim: function (e, k, g) {
      if (g.dang < 0) {
        if (e.key >= '1' && e.key <= '9' && e.key.length === 1) { HOP.mo(+e.key - 1); return true; }
        return false;
      }
      return phimCau(e, k, g, function (v) { HOP.cham(v); }, true) || (k === 'x' && (HOP.doiCau(), true));
    }
  };

  // Phim chung khi dang hien mot cau: Enter xem dap an, mui ten cham, A-D chon dap an
  function phimCau(e, k, g, cham, coNua) {
    if (g.cho) return false;
    if (e.key === 'Enter') { loCau(g); return true; }
    if (e.key === 'ArrowRight') { cham(1); return true; }
    if (e.key === 'ArrowLeft') { cham(0); return true; }
    if (e.key === 'ArrowDown' && coNua) { cham(0.5); return true; }
    if (g.q && g.q.luaChon && k.length === 1) {
      var i = 'abcd'.indexOf(k);
      if (i >= 0 && i < g.q.luaChon.opts.length) { chonDa(g, i); return true; }
    }
    return false;
  }

  /* =================== TRO 2: LEO THANG TRIEU PHU =================== */
  var THANG = {
    bat: function () {
      S.cur.g = { bac: 0, giu: 0, q: null, lo: false, chon: -1, an50: null, goiY: false, da50: false, daBan: false,
        banHet: 0, khoa: false, cho: false, tb: '', roi: false, dungO: -1 };
      THANG.cau();
    },
    cau: function () {
      var g = S.cur.g, b = BAC[g.bac];
      g.q = cauTheo(b.kho, b.loai);
      g.lo = false; g.chon = -1; g.an50 = null; g.goiY = false; g.tb = '';
      THANG.ve(true);
      if (g.q && g.q.tuDoc === 'de') docTrung(g.q.doc);
    },
    ve: function (moi) {
      var g = S.cur.g, b = BAC[g.bac];
      var thang = '<ol class="kt-bacs">' + BAC.map(function (x, i) { return i; }).reverse().map(function (i) {
        var x = BAC[i];
        var cls = i < g.bac || (i === g.bac && g.giu >= x.diem && !g.roi) ? ' is-qua' : i === g.bac ? ' is-dang' : '';
        return '<li class="kt-bac' + cls + (x.an ? ' is-an' : '') + '"><span class="kt-bac-so">' + (i + 1) + '</span>' +
          '<span class="kt-bac-ten">' + esc(x.ten) + (x.an ? ' <em title="Bậc an toàn">🛡️</em>' : '') + '</span>' +
          '<b class="kt-bac-diem">' + x.diem + '</b></li>';
      }).join('') + '</ol>';
      var tg = '<div class="kt-tg">' +
        '<button type="button" class="kt-tg-nut" data-k="tg50"' + (g.da50 || g.cho || g.khoa ? ' disabled' : '') + ' title="' +
          (g.q && g.q.luaChon ? 'Bỏ bớt 2 đáp án sai' : 'Hiện một gợi ý') + '">50:50 <kbd>5</kbd></button>' +
        '<button type="button" class="kt-tg-nut" data-k="tgBan"' + (g.daBan || g.cho || g.khoa ? ' disabled' : '') + '>👥 Hỏi bạn cùng bàn <kbd>H</kbd></button>' +
        '<span class="kt-tg-dem" id="ktBan"' + (g.banHet ? '' : ' hidden') + '></span>' +
        '<span class="kt-bar-gap"></span>' +
        '<button type="button" class="kt-tg-dung" data-k="dungLai"' + (g.cho || g.khoa ? ' disabled' : '') + '>✋ Dừng lại, giữ ' + g.giu + ' điểm <kbd>G</kbd></button>' +
      '</div>';
      var cau = g.q ? htmlCau(g.q, { lo: g.lo, chon: g.chon, moi: moi, an50: g.an50, goiY: g.goiY, khoa: g.khoa || g.cho,
        nhan: 'Bậc ' + (g.bac + 1) + ' · ' + b.diem + ' điểm' }) : '<p class="kt-trong-cau">Không có câu cho bậc này.</p>';
      var tb = g.tb ? '<p class="kt-thang-tb' + (g.roi ? ' is-roi' : '') + '">' + esc(g.tb) + '</p>' : '';
      man.innerHTML = khung('thang', '<div class="kt-thang"><div class="kt-thang-giua">' + tg + cau + tb + thanhCham(g, 'thang') + '</div>' +
        '<aside class="kt-thang-ben">' + thang + '<p class="kt-thang-giu">Đang giữ <b>' + g.giu + '</b> điểm</p>' +
        '<p class="kt-thang-meo">🛡️ Qua bậc 2 thì có trả lời sai vẫn giữ 4 điểm.</p></aside></div>',
        'Bậc <b>' + (g.bac + 1) + '</b>/5 · đang giữ <b>' + g.giu + '</b> điểm');
      THANG.demBan();
      if (g.lo) man.scrollTop = man.scrollHeight;
      phimTat();
    },
    tg50: function () {
      var g = S.cur.g;
      if (g.da50 || g.cho || g.khoa || !g.q) return;
      g.da50 = true;
      if (g.q.luaChon) {
        var sai = [];
        g.q.luaChon.opts.forEach(function (o, i) { if (i !== g.q.luaChon.dung) sai.push(i); });
        g.an50 = tron(sai).slice(0, Math.min(2, sai.length - 1));
        if (!g.an50.length) g.goiY = true;
      } else g.goiY = true;
      if (g.q.luaChon && g.q.goiY && g.an50.length < 2) g.goiY = true;
      sndLat();
      THANG.ve();
    },
    tgBan: function () {
      var g = S.cur.g;
      if (g.daBan || g.cho || g.khoa) return;
      g.daBan = true;
      g.banHet = Date.now() + 15000;
      sndChon();
      THANG.ve();
      var giayCu = 16;
      S.dk.push(setInterval(function () {
        if (g.banHet <= 0) return; // da cham cau / da het gio
        var con = Math.ceil((g.banHet - Date.now()) / 1000);
        if (con !== giayCu) { giayCu = con; if (con <= 5 && con > 0) sndTick(con); }
        THANG.demBan();
        if (con <= 0) { g.banHet = -1; sndHet(); THANG.demBan(); }
      }, 200));
    },
    demBan: function () {
      var g = S.cur && S.cur.g, el = $('#ktBan');
      if (!el || !g || !g.banHet) return;
      el.hidden = false;
      if (g.banHet < 0) { el.textContent = '⏰ Hết 15 giây hỏi bạn!'; el.classList.add('is-het'); return; }
      var con = Math.max(0, Math.ceil((g.banHet - Date.now()) / 1000));
      el.textContent = '👥 ' + con + ' giây';
      el.classList.toggle('is-gap', con <= 5);
    },
    cham: function (v) {
      var g = S.cur.g;
      if (!g.q || g.khoa || g.cho) return;
      var daLo = g.lo;
      g.lo = true;
      if (!daLo && g.q.tuDoc === 'dap') docTrung(g.q.doc);
      g.banHet = 0;
      if (v === 1) {
        g.giu = BAC[g.bac].diem;
        if (g.bac === BAC.length - 1) {
          g.tb = '🏆 Chinh phục đỉnh thang — 10 điểm!';
          sndKen();
          g.cho = true; g.choNhan = 'Xem kết quả'; g.tiep = ketThuc;
        } else {
          g.tb = '✓ Chính xác! Giữ ' + g.giu + ' điểm — lên bậc ' + (g.bac + 2);
          sndDung();
          g.cho = true; g.choNhan = 'Lên bậc ' + (g.bac + 2); g.tiep = function () { g.bac++; THANG.cau(); };
        }
      } else {
        g.roi = true;
        g.dungO = g.bac;
        g.giu = g.giu >= 4 ? 4 : 0;
        g.tb = g.giu ? '🛡️ Chưa đúng — rơi về bậc an toàn, giữ 4 điểm' : '✗ Chưa đúng — chưa qua bậc an toàn nên chưa có điểm';
        sndSai();
        g.cho = true; g.choNhan = 'Xem kết quả'; g.tiep = ketThuc;
      }
      THANG.ve();
    },
    dungLai: function () {
      var g = S.cur.g;
      if (g.cho || g.khoa) return;
      g.dungO = g.bac;
      g.dungTay = true;
      ketThuc();
    },
    ket: function () {
      var g = S.cur.g, qua = 0;
      BAC.forEach(function (x) { if (g.giu >= x.diem && !g.roi) qua++; });
      if (g.roi) qua = g.dungO;
      var ly = g.roi ? 'Trả lời chưa đúng ở bậc ' + (g.dungO + 1) + (g.giu ? ' → rơi về bậc an toàn 🛡️' : '')
        : g.dungTay ? '✋ Dừng lại ở bậc ' + (g.bac + 1) + ', giữ điểm'
        : g.giu === 10 ? '🏆 Leo hết 5 bậc!' : 'Dừng lượt ở bậc ' + (g.bac + 1);
      var ct = '<p class="kt-kq-cong">' + ly + '</p><p class="kt-kq-cong">Qua <b>' + qua + '</b>/5 bậc · giữ <b>' + g.giu + '</b> điểm' +
        (g.da50 || g.daBan ? ' · đã dùng trợ giúp: ' + [g.da50 ? '50:50' : '', g.daBan ? 'hỏi bạn' : ''].filter(Boolean).join(', ') : '') + '</p>';
      return { diem: g.giu, ct: ct };
    },
    phim: function (e, k, g) {
      if (k === '5') { THANG.tg50(); return true; }
      if (k === 'h') { THANG.tgBan(); return true; }
      if (k === 'g') { THANG.dungLai(); return true; }
      return phimCau(e, k, g, function (v) { THANG.cham(v); }, false);
    }
  };

  /* =================== TRO 3: GHE NONG =================== */
  var GHE_LOAI = ['doc', 'nghia', 'viet'];
  var GHE_LENH = { doc: 'Đọc to', nghia: 'Nghĩa là gì?', viet: 'Nói chữ Hán' };
  var GHE = {
    bat: function () {
      S.cur.g = { giay: S.gheGiay, muc: S.gheMuc, chay: false, xong: false, conMs: S.gheGiay * 1000, tLast: 0,
        dung: 0, sai: 0, bo: 0, sot: [], the: null, i: 0, xem: false, truoc: null, nhay: '' };
      GHE.moi();
      GHE.ve();
    },
    moi: function () {
      var g = S.cur.g;
      g.the = taoCauP(S.P, GHE_LOAI[g.i % 3], S.nho);
      g.i++;
      g.xem = false;
    },
    ve: function () {
      var g = S.cur.g;
      var vong = '<div class="kt-ghe-dh"><svg viewBox="0 0 120 120" aria-hidden="true">' +
        '<circle cx="60" cy="60" r="52" class="kt-dh-nen"/>' +
        '<circle cx="60" cy="60" r="52" class="kt-dh-vong" id="ktVong" stroke-dasharray="' + VONG.toFixed(1) + '"/></svg>' +
        '<b class="kt-dh-so" id="ktGiay"></b><span class="kt-dh-nhan">giây</span></div>';
      var nut = '<div class="kt-ghe-nut">' +
        '<button type="button" class="kt-cham-nut is-sai" data-k="ghe" data-v="sai">✗ Sai <kbd>←</kbd></button>' +
        '<button type="button" class="kt-cham-nut is-bo" data-k="ghe" data-v="bo">⤼ Bỏ qua <kbd>↓</kbd></button>' +
        '<button type="button" class="kt-cham-nut is-dung" data-k="ghe" data-v="dung">✓ Đúng <kbd>→</kbd></button></div>';
      man.innerHTML = khung('ghe', '<div class="kt-ghe">' + vong +
        '<div class="kt-ghe-giua"><div class="kt-ghe-the" id="ktThe"></div>' + nut +
        '<p class="kt-ghe-truoc" id="ktTruoc"></p></div>' +
        '<div class="kt-ghe-dem" id="ktGheDem"></div></div>', '');
      GHE.veThe();
      GHE.veGio();
      phimTat();
    },
    veThe: function () {
      var g = S.cur.g, el = $('#ktThe');
      if (!el) return;
      var q = g.the, h;
      if (!q) h = '<p class="kt-ghe-lenh">Không có từ vựng.</p>';
      else if (g.xong) h = '<p class="kt-ghe-het">⏰ Hết giờ!</p>';
      else if (!g.chay && g.conMs === g.giay * 1000) {
        h = '<p class="kt-ghe-lenh">' + g.giay + ' giây · mục tiêu ' + g.muc + ' từ</p>' +
          '<button type="button" class="kt-go" data-k="gheBat">🔥 Bắt đầu <kbd>Space</kbd></button>' +
          '<p class="kt-ghe-meo">Thầy/cô bấm → đúng · ← sai · ↓ bỏ qua — thẻ qua ngay lập tức.</p>';
      } else {
        var d = q.de, a = q.dap;
        h = '<p class="kt-ghe-lenh">' + GHE_LENH[q.loai] + '</p>' +
          '<p class="kt-ghe-lon' + (d.zh ? ' zh' : '') + coDai(d.lon, d.zh) + '">' + esc(d.lon) + '</p>' +
          (d.phu ? '<p class="kt-ghe-phu">' + esc(d.phu) + '</p>' : '') +
          (g.xem ? '<p class="kt-ghe-dap">' + esc([a.zh, a.py, a.vn].filter(Boolean).join(' · ')) + '</p>'
            : '<p class="kt-ghe-xem">Enter: xem đáp án</p>') +
          (!g.chay ? '<div class="kt-ghe-dung"><p>⏸ Tạm dừng</p><button type="button" class="kt-go kt-go-sm" data-k="gheBat">▶ Chơi tiếp <kbd>Space</kbd></button></div>' : '');
      }
      el.innerHTML = h;
      // Go class roi gan lai de hieu ung nhay chay lai ca khi hai the lien tiep cung ket qua
      el.className = 'kt-ghe-the';
      if (g.nhay) { void el.offsetWidth; el.className = 'kt-ghe-the is-' + g.nhay; g.nhay = ''; }
      var t = g.truoc;
      $('#ktTruoc').innerHTML = t ? 'Vừa rồi: <b class="zh">' + esc(t.tu.zh) + '</b> ' + esc(t.tu.py) + ' · ' + esc(t.tu.vn) : '&nbsp;';
      $('#ktGheDem').innerHTML =
        '<span class="is-dung">✓ <b>' + g.dung + '</b></span><span class="is-sai">✗ <b>' + g.sai + '</b></span><span class="is-bo">⤼ <b>' + g.bo + '</b></span>' +
        '<span class="kt-ghe-muc">Mục tiêu ' + g.muc + ' từ = 10 điểm<br>Hiện tại: <b>' + Math.min(10, Math.round(10 * g.dung / g.muc)) + '</b> điểm</span>';
    },
    veGio: function () {
      var g = S.cur.g, v = $('#ktVong'), s = $('#ktGiay');
      if (!v) return;
      var tong = g.giay * 1000, con = Math.max(0, g.conMs);
      v.setAttribute('stroke-dashoffset', (VONG * (1 - con / tong)).toFixed(1));
      v.classList.toggle('is-gap', con <= 10000);
      s.textContent = Math.ceil(con / 1000);
    },
    batDung: function () {
      var g = S.cur.g;
      if (g.xong || !g.the) return;
      if (g.chay) { g.chay = false; GHE.veThe(); phimTat(); return; }
      g.chay = true;
      g.tLast = Date.now();
      sndChon();
      GHE.veThe();
      phimTat();
      if (S.dk.length) return;
      var giayCu = Math.ceil(g.conMs / 1000);
      S.dk.push(setInterval(function () {
        var now = Date.now();
        if (g.chay) g.conMs -= now - g.tLast;
        g.tLast = now;
        var giay = Math.ceil(g.conMs / 1000);
        if (giay !== giayCu) { giayCu = giay; if (giay <= 5 && giay > 0) sndTick(giay); }
        GHE.veGio();
        if (g.conMs <= 0 && !g.xong) GHE.het();
      }, 100));
    },
    het: function () {
      var g = S.cur.g;
      g.chay = false; g.xong = true; g.conMs = 0;
      S.dk.forEach(clearInterval); S.dk = [];
      sndHet();
      GHE.veThe();
      GHE.veGio();
      sau(1400, ketThuc);
    },
    cham: function (kieu) {
      var g = S.cur.g;
      if (!g.chay || g.xong || !g.the) return;
      g[kieu]++;
      if (kieu !== 'dung') g.sot.push({ zh: g.the.tu.zh, py: g.the.tu.py, vn: g.the.tu.vn, kieu: kieu });
      if (kieu === 'dung') sndDung(); else if (kieu === 'sai') sndSai(); else sndBo();
      g.truoc = g.the;
      g.nhay = kieu;
      GHE.moi();
      GHE.veThe();
    },
    ket: function () {
      var g = S.cur.g;
      var d = Math.min(10, Math.round(10 * g.dung / g.muc));
      var sot = {}, ds = [];
      g.sot.forEach(function (x) { if (!sot[x.zh]) { sot[x.zh] = 1; ds.push(x); } });
      var ct = '<p class="kt-kq-cong">✓ Đúng <b>' + g.dung + '</b> · ✗ Sai <b>' + g.sai + '</b> · ⤼ Bỏ qua <b>' + g.bo + '</b> · mục tiêu ' + g.muc + ' từ</p>' +
        (ds.length ? '<p class="kt-kq-sot-nhan">Từ cần ôn lại:</p><div class="kt-kq-sot">' + ds.map(function (x) {
          return '<span class="kt-sot is-' + x.kieu + '"><b class="zh">' + esc(x.zh) + '</b> ' + esc(x.py) + ' · ' + esc(x.vn) + '</span>';
        }).join('') + '</div>' : '<p class="kt-kq-cong">Không sót từ nào! 🎉</p>');
      return { diem: d, ct: ct };
    },
    phim: function (e, k, g) {
      if (e.key === 'ArrowRight') { GHE.cham('dung'); return true; }
      if (e.key === 'ArrowLeft') { GHE.cham('sai'); return true; }
      if (e.key === 'ArrowDown') { GHE.cham('bo'); return true; }
      if (e.key === 'Enter') { if (g.chay) { g.xem = !g.xem; g.nhay = ''; GHE.veThe(); } return true; }
      return false;
    }
  };

  /* =================== TRO 4: BOC THAM NHIEM VU =================== */
  function chongCo(c) { return CHONG_LOAI(c) !== ''; }
  function CHONG_LOAI(c) { return chonLoai(S.P, c.loai, S.nho) || chonLoai(S.P, c.du || [], S.nho); }
  var BOC = {
    bat: function () {
      S.cur.g = { chong: CHONG.filter(chongCo), can: S.bocSo, la: [], dang: -1, q: null, lo: false, chon: -1, xao: true, khoa: false, cho: false };
      BOC.ve();
      sndXao();
      sau(giamChuyenDong() ? 100 : 1500, function () { S.cur.g.xao = false; BOC.ve(); });
    },
    tong: function (g) { var t = 0; g.la.forEach(function (l) { if (l.diem !== null) t += l.diem; }); return t; },
    ve: function (moi) {
      var g = S.cur.g, het = g.la.length >= g.can;
      var chong = '<div class="kt-chongs' + (g.xao ? ' is-xao' : '') + '">' + g.chong.map(function (c, i) {
        var lung = '';
        for (var n = 0; n < 4; n++) lung += '<span class="kt-la-lung" style="--n:' + n + '"></span>';
        return '<button type="button" class="kt-chong" data-k="boc" data-v="' + i + '" style="--m:' + c.mau + '"' +
          (g.xao || het || g.dang >= 0 ? ' disabled' : '') + '>' +
          '<span class="kt-chong-lung">' + lung + '<span class="kt-chong-ic">' + c.ic + '</span></span>' +
          '<span class="kt-chong-ten">' + esc(c.ten) + ' <kbd>' + (i + 1) + '</kbd></span></button>';
      }).join('') + '</div>';
      var hang = '<div class="kt-la-hang">';
      for (var i = 0; i < g.can; i++) {
        var l = g.la[i];
        if (!l) { hang += '<div class="kt-la-o is-trong">?</div>'; continue; }
        var c = g.chong[l.chong];
        hang += '<div class="kt-la-o" style="--m:' + c.mau + '"><span>' + c.ic + ' ' + esc(c.ten) + '</span>' +
          '<b>' + (l.diem === null ? '…' : l.diem + '/3') + '</b></div>';
      }
      hang += '</div>';
      var moiBoc = g.xao ? '<p class="kt-boc-moi">🔀 Đang xáo thăm…</p>'
        : !het && g.dang < 0 ? '<p class="kt-boc-moi">Mời bạn bốc lá thăm thứ <b>' + (g.la.length + 1) + '</b>/' + g.can + '</p>' : '';
      var cau = '';
      if (g.dang >= 0) {
        var la = g.la[g.dang], cc = g.chong[la.chong];
        cau = '<div class="kt-boc-cau"><div class="kt-boc-the' + (moi ? ' is-lat' : '') + '" style="--m:' + cc.mau + '">' +
          '<p class="kt-boc-nhan">' + cc.ic + ' Lá ' + (g.dang + 1) + '/' + g.can + ' · ' + esc(cc.ten) + '</p>' +
          (g.q ? htmlCau(g.q, { lo: g.lo, chon: g.chon, khoa: g.khoa }) : '<p>Không có câu.</p>') +
          thanhCham(g, 'boc') + '</div></div>';
      }
      man.innerHTML = khung('boc', '<div class="kt-boc">' + moiBoc + chong + hang + '</div>' + cau,
        'Điểm: <b>' + BOC.tong(g) + '</b>/' + 3 * g.can);
      cuonCham('.kt-boc-cau', g);
      phimTat();
    },
    boc: function (i) {
      var g = S.cur.g, c = g.chong[i];
      if (!c || g.xao || g.khoa || g.dang >= 0 || g.la.length >= g.can) return;
      var l = CHONG_LOAI(c);
      var q = l ? taoCauP(S.P, l, S.nho) : null;
      g.la.push({ chong: i, q: q, diem: null });
      g.dang = g.la.length - 1;
      g.q = q; g.lo = false; g.chon = -1;
      sndLat();
      BOC.ve(true);
      if (q && q.tuDoc === 'de') sau(500, function () { docTrung(q.doc); });
    },
    cham: function (n) {
      var g = S.cur.g;
      if (g.dang < 0 || g.khoa || g.cho) return;
      var daLo = g.lo;
      g.la[g.dang].diem = n;
      if (n === 3) sndDung(); else if (n > 0) sndNua(); else sndSai();
      if (!g.lo) { g.lo = true; if (g.q && g.q.tuDoc === 'dap') docTrung(g.q.doc); }
      var xong = g.la.length >= g.can;
      sauCham(g, daLo, function () {
        g.dang = -1; g.q = null; g.lo = false; g.chon = -1;
        BOC.ve();
        if (xong) sau(500, ketThuc);
      }, xong ? 'Xem kết quả' : 'Bốc lá tiếp');
    },
    ket: function () {
      var g = S.cur.g, t = BOC.tong(g);
      var ct = '<ul class="kt-kq-ds">' + g.la.map(function (l, i) {
        var c = g.chong[l.chong];
        return '<li><span>Lá ' + (i + 1) + ' · ' + (l.q ? esc(l.q.tieuDe) : c.ic + ' ' + esc(c.ten)) + '</span><b>' +
          (l.diem === null ? 'chưa chấm' : l.diem + '/3') + '</b></li>';
      }).join('') + '</ul><p class="kt-kq-cong">Tổng <b>' + t + '</b> / ' + 3 * g.can + ' điểm thăm</p>';
      return { diem: Math.round(10 * t / (3 * g.can)), ct: ct };
    },
    phim: function (e, k, g) {
      if (g.dang < 0) {
        if (e.key >= '1' && e.key <= '4' && e.key.length === 1) { BOC.boc(+e.key - 1); return true; }
        return false;
      }
      if (!g.cho && e.key >= '0' && e.key <= '3' && e.key.length === 1) { BOC.cham(+e.key); return true; }
      return phimCau(e, k, g, function (v) { BOC.cham(v ? 3 : 0); }, false);
    }
  };

  /* =================== TRO 5: KIEM TRA THEO DANG =================== */
  // Thay/co tu chon dang (xep cau, dich cau, dien tu...) — moi cau xoay vong cac dang da chon
  function dangCo() { return S.dangLoai.filter(function (l) { return coLoai(S.P, l); }); }
  function cauDang() {
    var ds = dangCo();
    var l = chonLoai(S.P, ds.length ? ds : loaiCo(S.P), S.nho);
    return l ? taoCauP(S.P, l, S.nho) : null;
  }
  var DANG = {
    bat: function () {
      S.cur.g = { n: S.dangSo, i: 0, kq: [], ds: [], q: null, lo: false, chon: -1, doi: 1, khoa: false, cho: false };
      DANG.cau();
    },
    cau: function () {
      var g = S.cur.g;
      g.q = cauDang();
      g.lo = false; g.chon = -1;
      if (!g.q) { ketThuc(); return; }
      DANG.ve(true);
      if (g.q.tuDoc === 'de') docTrung(g.q.doc);
    },
    tong: function (g) { var t = 0; g.kq.forEach(function (x) { t += x || 0; }); return t; },
    ve: function (moi) {
      var g = S.cur.g, o = '';
      for (var i = 0; i < g.n; i++) {
        var k = g.kq[i];
        o += '<span class="kt-dang-o' + (k == null ? (i === g.i ? ' is-dang' : '') : k === 1 ? ' is-dung' : k > 0 ? ' is-nua' : ' is-sai') + '">' +
          (k == null ? i + 1 : k === 1 ? '✓' : k > 0 ? '½' : '✗') + '</span>';
      }
      var cau = htmlCau(g.q, { lo: g.lo, chon: g.chon, moi: moi, khoa: g.khoa, nhan: 'Câu ' + (g.i + 1) + '/' + g.n }) +
        thanhCham(g, 'hop') +
        (g.doi > 0 && !g.lo && !g.cho ? '<button type="button" class="kt-doi kt-doi-toi" data-k="doiCau">🔄 Đổi câu khác (còn 1 lần) <kbd>X</kbd></button>' : '');
      man.innerHTML = khung('dang', '<div class="kt-dang"><div class="kt-dang-dong" aria-label="Tiến độ">' + o + '</div>' +
        '<div class="kt-dang-the">' + cau + '</div></div>', 'Đúng: <b>' + soDiem(DANG.tong(g)) + '</b>/' + g.n);
      phimTat();
    },
    doiCau: function () {
      var g = S.cur.g;
      if (!g.q || g.doi < 1 || g.lo || g.cho) return;
      var q = cauDang();
      if (!q) return;
      g.doi--; g.q = q; g.chon = -1;
      sndLat();
      DANG.ve(true);
      if (q.tuDoc === 'de') docTrung(q.doc);
    },
    cham: function (v) {
      var g = S.cur.g;
      if (!g.q || g.khoa || g.cho) return;
      var daLo = g.lo;
      g.kq[g.i] = v; g.ds[g.i] = g.q;
      if (v === 1) sndDung(); else if (v > 0) sndNua(); else sndSai();
      if (!g.lo) { g.lo = true; if (g.q.tuDoc === 'dap') docTrung(g.q.doc); }
      var xong = g.i + 1 >= g.n;
      sauCham(g, daLo, function () {
        if (xong) { sau(300, ketThuc); return; }
        g.i++;
        DANG.cau();
      }, xong ? 'Xem kết quả' : 'Câu tiếp');
    },
    ket: function () {
      var g = S.cur.g, t = DANG.tong(g);
      var ct = '<ul class="kt-kq-ds">' + g.ds.map(function (q, i) {
        var k = g.kq[i];
        return '<li><span>Câu ' + (i + 1) + ' · ' + esc(q.tieuDe) + '</span><b>' + (k === 1 ? '✓ Đúng' : k > 0 ? '½ Gần đúng' : '✗ Sai') + '</b></li>';
      }).join('') + '</ul><p class="kt-kq-cong">Đúng <b>' + soDiem(t) + '</b> / ' + g.n + ' câu</p>';
      return { diem: Math.round(10 * t / g.n), ct: ct };
    },
    phim: function (e, k, g) {
      return phimCau(e, k, g, function (v) { DANG.cham(v); }, true) || (k === 'x' && (DANG.doiCau(), true));
    }
  };

  /* =================== TRO 6: VONG QUAY DANG CAU =================== */
  var TEN_NGAN = { doc: 'Đọc từ', nghia: 'Nghĩa', viet: 'Chữ Hán', noi: 'Nối từ', nghe: 'Nghe', nguphap: 'Ngữ pháp',
    dien: 'Điền từ', xepcau: 'Xếp câu', sualoi: 'Sửa câu', dichtv: 'Dịch → Việt', dich: 'Dịch → Trung', datcau: 'Đặt câu', hoidap: 'Hỏi đáp' };
  function icLoai(l) { return TEN_LOAI[l].split(' ')[0]; }
  function quaySeg() {
    var co = loaiCo(S.P);
    // Toi da 9 dang de chu tren banh xe con doc duoc, giu thu tu tu de den kho
    if (co.length > 9) co = tron(co).slice(0, 9).sort(function (a, b) { return LOAI.indexOf(a) - LOAI.indexOf(b); });
    var seg = co.map(function (l) { return { loai: l }; });
    while (seg.length && seg.length < 6) seg = seg.concat(co.map(function (l) { return { loai: l }; }));
    seg.splice(Math.floor(seg.length / 2), 0, { sao: true });
    return seg;
  }
  var QUAY = {
    bat: function () {
      S.cur.g = { seg: quaySeg(), can: S.quaySo, luot: [], goc: 0, dangQuay: false, dang: -1, q: null, lo: false, chon: -1, khoa: false, cho: false };
      QUAY.ve();
    },
    tinh: function (g) {
      var duoc = 0, max = 0, cham = 0;
      g.luot.forEach(function (l) { max += l.diem; if (l.kq !== null) { duoc += l.kq * l.diem; cham++; } });
      return { duoc: duoc, max: max, cham: cham };
    },
    banh: function (g) {
      var n = g.seg.length, b = 360 / n;
      var grad = g.seg.map(function (s, i) {
        return (s.sao ? '#f2c94c' : MAU_LOAI[s.loai]) + ' ' + (i * b).toFixed(2) + 'deg ' + ((i + 1) * b).toFixed(2) + 'deg';
      }).join(', ');
      var nhan = g.seg.map(function (s, i) {
        // Nua trai banh xe: lat chu 180 do cho khoi doc nguoc
        var goc = i * b + b / 2;
        return '<span class="kt-quay-nhan' + (s.sao ? ' is-sao' : '') + (goc > 180 ? ' is-lat' : '') + '" style="--a:' + goc.toFixed(2) + 'deg"><i>' +
          (s.sao ? '⭐ ×2' : icLoai(s.loai) + ' ' + esc(TEN_NGAN[s.loai])) + '</i></span>';
      }).join('');
      return '<div class="kt-quay-khung"><div class="kt-quay-kim" aria-hidden="true"></div>' +
        '<div class="kt-quay-banh" id="ktBanh" style="background: conic-gradient(' + grad + '); transform: rotate(' + g.goc.toFixed(2) + 'deg)">' +
        nhan + '</div><span class="kt-quay-tam" aria-hidden="true">🎡</span></div>';
    },
    ve: function (moi) {
      var g = S.cur.g, t = QUAY.tinh(g), het = g.luot.length >= g.can;
      var hang = '<div class="kt-quay-hang">';
      for (var i = 0; i < g.can; i++) {
        var l = g.luot[i];
        if (!l) { hang += '<div class="kt-quay-o is-trong">' + (i + 1) + '</div>'; continue; }
        var kq = l.kq === null ? '' : l.kq === 1 ? ' kq-dung' : l.kq > 0 ? ' kq-nua' : ' kq-sai';
        hang += '<div class="kt-quay-o' + kq + '" style="--m:' + (l.sao ? '#d9a521' : MAU_LOAI[l.q.loai]) + '">' +
          '<span>' + (l.sao ? '⭐ ' : '') + icLoai(l.q.loai) + ' ' + esc(TEN_NGAN[l.q.loai]) + '</span>' +
          '<b>' + (l.kq === null ? l.diem + ' điểm' : soDiem(l.kq * l.diem) + '/' + l.diem) + '</b></div>';
      }
      hang += '</div>';
      var ben = '<div class="kt-quay-ben">' +
        (!het && g.dang < 0 ? '<p class="kt-quay-moi">Lượt quay <b>' + (g.luot.length + 1) + '</b>/' + g.can + '</p>' +
          '<button type="button" class="kt-go" data-k="quay"' + (g.dangQuay ? ' disabled' : '') + '>🎡 Quay <kbd>Space</kbd></button>' : '') +
        '<p class="kt-quay-luat">Mỗi dạng 1–3 điểm theo độ khó (★). Ô ⭐ ×2: câu bất kỳ, điểm nhân đôi.</p>' + hang + '</div>';
      var cau = '';
      if (g.dang >= 0) {
        var la = g.luot[g.dang];
        cau = '<div class="kt-boc-cau"><div class="kt-boc-the">' +
          '<p class="kt-boc-nhan' + (la.sao ? ' t-sao' : '') + '">' + (la.sao ? '⭐ May mắn ×2 · ' : '') + 'Lượt ' + (g.dang + 1) + '/' + g.can + ' · ' + la.diem + ' điểm</p>' +
          htmlCau(g.q, { lo: g.lo, chon: g.chon, moi: moi, khoa: g.khoa }) + thanhCham(g, 'hop') + '</div></div>';
      }
      man.innerHTML = khung('quay', '<div class="kt-quay">' + QUAY.banh(g) + ben + '</div>' + cau,
        'Điểm: <b>' + soDiem(t.duoc) + '</b>/' + t.max);
      cuonCham('.kt-boc-cau', g);
      phimTat();
    },
    quay: function () {
      var g = S.cur.g;
      if (g.dangQuay || g.dang >= 0 || g.luot.length >= g.can || !g.seg.length) return;
      var n = g.seg.length, b = 360 / n, k = Math.floor(Math.random() * n);
      var giua = k * b + b / 2 + (Math.random() - 0.5) * b * 0.6;
      // Kim o dinh (0 do): quay them sao cho (giua + goc) chia het cho 360
      var dich = (((-giua - g.goc) % 360) + 720) % 360;
      g.goc += 360 * 5 + dich;
      g.dangQuay = true;
      var ms = giamChuyenDong() ? 300 : 4200;
      var el = $('#ktBanh'), nut = man.querySelector('[data-k="quay"]');
      if (nut) nut.disabled = true;
      if (el) {
        el.style.transition = 'transform ' + ms + 'ms cubic-bezier(.12, .75, .12, 1)';
        void el.offsetWidth;
        el.style.transform = 'rotate(' + g.goc.toFixed(2) + 'deg)';
      }
      for (var t = 0, d = 60, i = 0; t < ms - 400; t += d, d = Math.round(d * 1.13), i++) sau(t, sndTick.bind(null, i));
      sau(ms + 150, function () { g.dangQuay = false; QUAY.mo(k); });
    },
    mo: function (k) {
      var g = S.cur.g, s = g.seg[k];
      var l = s.sao ? loaiTheoKho(S.P, 1 + Math.floor(Math.random() * 3), null, S.nho) : s.loai;
      var q = l ? taoCauP(S.P, l, S.nho) : null;
      if (!q) { bao('Dạng này đã hết câu — quay lại nhé!'); QUAY.ve(); return; }
      g.luot.push({ q: q, sao: !!s.sao, diem: s.sao ? 2 * q.kho : q.kho, kq: null });
      g.dang = g.luot.length - 1; g.q = q; g.lo = false; g.chon = -1;
      if (s.sao) sndKen(); else sndMo();
      QUAY.ve(true);
      if (q.tuDoc === 'de') sau(500, function () { docTrung(q.doc); });
    },
    cham: function (v) {
      var g = S.cur.g;
      if (g.dang < 0 || g.khoa || g.cho) return;
      var daLo = g.lo;
      g.luot[g.dang].kq = v;
      if (v === 1) sndDung(); else if (v > 0) sndNua(); else sndSai();
      if (!g.lo) { g.lo = true; if (g.q.tuDoc === 'dap') docTrung(g.q.doc); }
      var xong = g.luot.length >= g.can;
      sauCham(g, daLo, function () {
        g.dang = -1; g.q = null; g.lo = false; g.chon = -1;
        QUAY.ve();
        if (xong) sau(500, ketThuc);
      }, xong ? 'Xem kết quả' : 'Quay tiếp');
    },
    ket: function () {
      var g = S.cur.g, t = QUAY.tinh(g);
      var ct = '<ul class="kt-kq-ds">' + g.luot.map(function (l, i) {
        return '<li><span>Lượt ' + (i + 1) + ' · ' + (l.sao ? '⭐ ×2 · ' : '') + esc(l.q.tieuDe) + '</span><b>' +
          (l.kq === null ? 'chưa chấm' : soDiem(l.kq * l.diem) + '/' + l.diem) + '</b></li>';
      }).join('') + '</ul><p class="kt-kq-cong">Được <b>' + soDiem(t.duoc) + '</b> / ' + t.max + ' điểm vòng quay</p>';
      return { diem: t.max ? Math.round(10 * t.duoc / t.max) : 0, ct: ct };
    },
    phim: function (e, k, g) {
      if (g.dang < 0) {
        if (e.code === 'Space' || e.key === ' ' || e.key === 'Enter') { QUAY.quay(); return true; }
        return false;
      }
      return phimCau(e, k, g, function (v) { QUAY.cham(v); }, true);
    }
  };

  var GAME = { hop: HOP, thang: THANG, ghe: GHE, boc: BOC, dang: DANG, quay: QUAY };

  function coMode(m) {
    if (!S.P || !S.loai.length) return false;
    if (m === 'ghe') return S.P.vocab.length >= 3;
    if (m === 'boc') return CHONG.some(chongCo);
    if (m === 'quay') return loaiCo(S.P).length > 0;
    return true;
  }
  function modeDau() { for (var i = 0; i < MODE_DS.length; i++) if (coMode(MODE_DS[i])) return MODE_DS[i]; return 'hop'; }

  /* ---------------- lop phu (banner / ket qua / tong ket) ---------------- */
  function moLop(html, cls) {
    // Man goi ten che mat thanh tren: them nut X de ve sanh
    var x = cls === 'is-banner' ? '<button type="button" class="kt-x" data-k="veSanh" title="Đóng (Esc)" aria-label="Đóng, về sảnh">✕</button>' : '';
    $('#ktLopThe').innerHTML = x + html;
    $('#ktLopThe').className = 'kt-lop-the' + (cls ? ' ' + cls : '');
    lop.hidden = false;
  }
  function dongLop() { lop.hidden = true; $('#ktLopThe').innerHTML = ''; }

  /* ---------------- sanh ---------------- */
  function rong() {
    return '<div class="kt-rong"><div class="kt-rong-ic">📚</div>' +
      '<h2>Cô chọn bài ở bước 2 trước nhé</h2>' +
      '<p>Chọn một hoặc vài bài đã học ở màn chuẩn bị, rồi mở lại “Kiểm tra bài cũ”. Câu hỏi được lấy từ từ vựng, ngữ pháp, câu dịch và hội thoại của các bài đã chọn.</p>' +
      '<button type="button" class="kt-go kt-go-sm" data-k="dong">← Quay lại chọn bài</button></div>';
  }
  function nhomNut(nhan, key, ds, cur, dv) {
    return '<div class="kt-cai-hang"><span class="kt-cai-nhan">' + nhan + '</span><span class="kt-seg">' + ds.map(function (n) {
      return '<button type="button" data-k="cai" data-v="' + key + ':' + n + '" class="' + (n === cur ? 'is-on' : '') + '">' + n + dv + '</button>';
    }).join('') + '</span></div>';
  }
  function htmlCai() {
    var m = S.mode;
    if (m === 'hop') return nhomNut('Số hộp được mở', 'hopSo', [2, 3, 4], S.hopSo, ' hộp') +
      '<p class="kt-cai-mo">9 hộp: 3 🍬 dễ (1 điểm) · 3 🍀 vừa (2 điểm) · 2 🌶️ khó (3 điểm) · 1 ⭐ ngôi sao may mắn (câu bất kỳ, điểm ×2). Mỗi bạn được đổi câu 1 lần.</p>';
    if (m === 'thang') return '<p class="kt-cai-mo">5 bậc: 2 → 4 → 6 → 8 → 10 điểm (đọc/nghe từ → nghĩa, chữ Hán, nối từ → ngữ pháp, điền từ → dịch, xếp câu, sửa câu sai → đặt câu/hỏi–đáp). 🛡️ Bậc an toàn: 4 điểm. Trợ giúp 50:50 và Hỏi bạn cùng bàn (15 giây), mỗi loại 1 lần. Có thể dừng lại để giữ điểm.</p>';
    if (m === 'ghe') return nhomNut('Thời gian', 'gheGiay', [30, 60, 90], S.gheGiay, ' giây') +
      nhomNut('Đúng bao nhiêu từ thì 10 điểm', 'gheMuc', [5, 8, 10, 12], S.gheMuc, ' từ') +
      '<p class="kt-cai-mo">Thẻ xen kẽ: đọc to chữ Hán → nói nghĩa → nói chữ Hán từ nghĩa tiếng Việt.</p>';
    if (m === 'dang') {
      var co = loaiCo(S.P);
      return '<div class="kt-cai-hang"><span class="kt-cai-nhan">Dạng bài</span><span class="kt-dang-chon">' + co.map(function (l) {
          var on = S.dangLoai.indexOf(l) >= 0;
          return '<button type="button" class="kt-chip' + (on ? ' is-on' : '') + '" data-k="dangLoai" data-v="' + l + '" aria-pressed="' + on + '">' + esc(TEN_LOAI[l]) + '</button>';
        }).join('') + '</span></div>' +
        nhomNut('Số câu mỗi bạn', 'dangSo', [3, 5, 7, 10], S.dangSo, ' câu') +
        '<p class="kt-cai-mo">Chọn một hay nhiều dạng — máy hỏi xoay vòng các dạng đã chọn. Chấm ✓ đúng · ½ gần đúng · ✗ sai; điểm = số câu đúng quy ra thang 10. Mỗi bạn được đổi câu 1 lần.</p>';
    }
    if (m === 'quay') return nhomNut('Số lượt quay', 'quaySo', [3, 4, 5], S.quaySo, ' lượt') +
      '<p class="kt-cai-mo">Bánh xe chia theo các dạng câu của bài (đọc, nghe, nối từ, điền từ, xếp câu, sửa câu sai, dịch, đặt câu…). Dạng dễ 1 điểm, vừa 2, khó 3; ô ⭐ nhân đôi.</p>';
    return nhomNut('Số lá được bốc', 'bocSo', [2, 3, 4], S.bocSo, ' lá') +
      '<p class="kt-cai-mo">3–4 chồng thăm: 📖 Từ vựng (đọc, nghe, nối từ) · 🔁 Dịch câu · ✍️ Câu (đặt câu, xếp câu, sửa câu sai, điền từ) · 💬 Hỏi – đáp. Mỗi lá chấm 0–3 điểm.</p>';
  }
  function htmlDs() {
    if (S.src === 'none') return '<p class="kt-meo">🙈 Đang chơi không dùng danh sách: mỗi lượt chỉ hiện điểm trên màn hình, không lưu vào đâu cả.</p>' +
      '<p class="kt-meo">Muốn lưu điểm “Miệng”? Chọn lớp ở ô phía trên.</p>';
    if (S.dangTai) return '<p class="kt-meo">Đang tải danh sách lớp…</p>';
    if (S.loiDs) return '<p class="kt-meo kt-loi">' + esc(S.loiDs) + '</p>';
    if (!S.kids.length) {
      return '<p class="kt-meo">Chọn lớp ở ô phía trên — hoặc:</p><div class="kt-ds-act">' +
        (S.classes.length ? '' : '<button type="button" class="kt-btn2" data-k="khoa">🔑 Lớp trên hệ thống</button>') +
        '<button type="button" class="kt-btn2" data-k="taoDs">＋ Tạo danh sách nhanh</button>' +
        '<button type="button" class="kt-btn2" data-k="khongDs">🙈 Không dùng danh sách</button></div>';
    }
    var dem = demTen();
    return '<div class="kt-ds">' + S.kids.map(function (k) {
      var r = S.round[k.id], vang = S.absent[k.id];
      var tag = vang ? 'vắng' : r && typeof r.diem === 'number' ? String(r.diem) : r ? '✓' : '';
      return '<button type="button" class="kt-hs' + (vang ? ' is-vang' : r ? ' is-xong' : '') + '" data-k="hs" data-v="' + esc(k.id) + '"' +
        ' title="' + esc(k.name) + ' — bấm để ' + (vang ? 'đánh dấu có mặt' : 'đánh dấu vắng') + '" style="--c:' + mau(k.name) + '">' +
        '<span class="kt-hs-ten">' + esc(tenNgan(k, dem)) + '</span>' + (tag ? '<span class="kt-hs-tag">' + esc(tag) + '</span>' : '') + '</button>';
    }).join('') + '</div>';
  }
  function htmlLog() {
    if (!S.log.length) return '<p class="kt-meo">Chưa có ai — bấm “Gọi học sinh” để bắt đầu.</p>';
    return '<ul class="kt-log">' + S.log.map(function (x) {
      return '<li><span class="kt-log-ic">' + MODE[x.mode].ic + '</span><span class="kt-log-ten">' + esc(x.ten) + '</span>' +
        '<b class="kt-log-d' + (x.diem === null ? ' is-trong' : '') + '" title="' + (x.diem === null ? 'Bỏ qua, không lưu' : x.luu ? 'Đã lưu' : 'Chỉ hiện trên màn hình') + '">' +
        (x.diem === null ? '—' : x.diem) + '</b></li>';
    }).join('') + '</ul>';
  }
  function veSanh() {
    if (window.NhacNen) window.NhacNen.tat();
    huyHen();
    S.pha = 'sanh';
    S.cur = null;
    dongLop();
    root.setAttribute('data-pha', 'sanh');
    if (!S.loai.length) { man.innerHTML = rong(); phimTat(); return; }
    if (!coMode(S.mode)) S.mode = modeDau();
    var P = S.P;
    var kho = [];
    if (P.vocab.length) kho.push(P.vocab.length + ' từ vựng');
    if (P.mcs.length) kho.push(P.mcs.length + ' câu ngữ pháp');
    if (P.sorts.length) kho.push(P.sorts.length + ' câu xếp từ');
    if (P.soTrans) kho.push(P.soTrans + ' câu dịch');
    if (P.soHt) kho.push(P.soHt + ' đoạn hội thoại');
    var modes = '<div class="kt-modes">' + MODE_DS.map(function (m, i) {
      var co = coMode(m);
      return '<button type="button" class="kt-mode m-' + m + (S.mode === m ? ' is-on' : '') + '" data-k="mode" data-v="' + m + '"' + (co ? '' : ' disabled') + '>' +
        '<span class="kt-mode-ic">' + MODE[m].ic + '</span><b>' + esc(MODE[m].ten) + '</b>' +
        '<small>' + (co ? esc(MODE[m].mo) : 'Cần ít nhất 3 từ vựng trong các bài đã chọn.') + '</small><kbd>' + (i + 1) + '</kbd></button>';
    }).join('') + '</div>';
    var dl = demLop(), coDs = S.src !== 'none' && S.kids.length > 0;
    var goiNhan = S.src === 'none' || !S.kids.length ? '▶ Bắt đầu lượt mới' : '🎯 Gọi học sinh';
    var tt = coDs ? dl.tong + ' học sinh · đã kiểm tra ' + dl.xong + ' · còn ' + dl.con + (dl.vang ? ' · vắng ' + dl.vang : '') : '';
    man.innerHTML =
      '<div class="kt-sanh">' +
        '<section class="kt-sanh-trai">' +
          '<h1 class="kt-h1">Ôn bài cũ — gọi lên bảng<small>' + esc(S.nhan || '') + '</small></h1>' +
          '<p class="kt-kho">Ngân hàng câu hỏi: ' + esc(kho.join(' · ')) + '</p>' +
          '<h2 class="kt-h2">1. Chọn trò</h2>' + modes +
          '<div class="kt-cai">' + htmlCai() + '</div>' +
          '<h2 class="kt-h2">2. Gọi học sinh</h2>' +
          '<div class="kt-goi-hang">' +
            '<button type="button" class="kt-go" data-k="goi">' + goiNhan + ' <kbd>Space</kbd></button>' +
            (coDs ? '<button type="button" class="kt-btn2" data-k="chonTen">👆 Chọn tên</button>' : '') +
          '</div>' +
          (coDs ? '<p class="kt-meo">Máy ưu tiên bạn chưa được gọi lần nào, rồi bạn lâu chưa được gọi, có thêm chút ngẫu nhiên. Mỗi bạn chỉ được gọi một lần trong một vòng.</p>' : '') +
        '</section>' +
        '<aside class="kt-sanh-phai">' +
          '<div class="kt-ben-hd"><b>Cả lớp</b><span class="kt-ben-tt">' + esc(tt) + '</span>' +
            (coDs ? '<button type="button" class="kt-btn3" data-k="vongMoi" title="Cho cả lớp vào lại vòng gọi">↺ Vòng mới</button>' : '') + '</div>' +
          (coDs ? '<p class="kt-meo kt-meo-nho">Bấm vào tên để đánh dấu vắng / có mặt.</p>' : '') +
          htmlDs() +
          '<div class="kt-ben-hd kt-ben-hd2"><b>Hôm nay đã kiểm tra</b>' +
            (S.log.length ? '<button type="button" class="kt-btn3" data-k="tongKet">📊 Tổng kết</button>' : '') + '</div>' +
          htmlLog() +
        '</aside>' +
      '</div>';
    phimTat();
  }

  /* ---------------- goi hoc sinh ---------------- */
  function goiHs(chiDinh, tranh) {
    if (!S.loai.length || S.pha === 'goi') return;
    if (!coMode(S.mode)) S.mode = modeDau();
    // Goi tu man ket qua: ve lai sanh phia sau de khong con bang cua ban truoc
    if (S.pha === 'kq' || S.pha === 'choi' || S.pha === 'tong') veSanh();
    if (S.src === 'none' || (!S.kids.length && !chiDinh)) {
      if (S.dangTai) return;
      // Khong co danh sach: choi an danh, chi hien diem
      S.luotSo++;
      S.cur = { kid: null, ten: 'Lượt ' + S.luotSo, mode: S.mode };
      veBanner(true);
      return;
    }
    var k = chiDinh || chonEm(tranh || []);
    if (!k) {
      if (S.pha !== 'sanh') veSanh();
      moPanel('<h2>Cả lớp đã được kiểm tra 🎉</h2><p>Tất cả các bạn có mặt đều đã lên bảng trong vòng này. Bấm “Vòng mới” để gọi lại từ đầu.</p>' +
        '<div class="kt-form-act"><button type="button" class="kt-btn2" data-k="dongPanel">Đóng</button>' +
        '<button type="button" class="kt-btn2" data-k="tongKet">📊 Tổng kết</button>' +
        '<button type="button" class="kt-go kt-go-sm" data-k="vongMoi">↺ Vòng mới</button></div>');
      return;
    }
    S.cur = { kid: k, ten: k.name, mode: S.mode };
    xaoTen(k);
  }
  function xaoTen(k) {
    huyHen();
    S.pha = 'goi';
    root.setAttribute('data-pha', 'goi');
    var pool = S.kids.filter(function (x) { return !S.absent[x.id]; });
    moLop('<div class="kt-banner is-xao"><p class="kt-banner-moi">Ai sẽ lên bảng nhỉ…</p><div class="kt-banner-ten" id="ktXao">🎲</div></div>', 'is-banner');
    phimTat();
    if (giamChuyenDong() || pool.length < 2) { veBanner(); return; }
    var buoc = [], t = 0, d = 50;
    while (t < 1500) { buoc.push(d); t += d; d = Math.round(d * 1.13); }
    var i = 0, cu = null, el = $('#ktXao');
    (function chay() {
      if (i >= buoc.length) { veBanner(); return; }
      var x;
      do { x = pool[Math.floor(Math.random() * pool.length)]; } while (x === cu);
      cu = x;
      el.textContent = x.name;
      el.style.setProperty('--c', mau(x.name));
      sndTick(i);
      sau(buoc[i++], chay);
    })();
  }
  function veBanner(docLai) {
    huyHen();
    S.pha = 'banner';
    root.setAttribute('data-pha', 'banner');
    var c = S.cur;
    var chips = MODE_DS.map(function (m, i) {
      var co = coMode(m);
      return '<button type="button" class="kt-chip' + (c.mode === m ? ' is-on' : '') + '" data-k="mode" data-v="' + m + '"' + (co ? '' : ' disabled') + '>' +
        MODE[m].ic + ' ' + esc(MODE[m].ten) + ' <kbd>' + (i + 1) + '</kbd></button>';
    }).join('');
    moLop('<div class="kt-banner">' +
      '<p class="kt-banner-moi">' + (c.kid ? 'Mời lên bảng!' : 'Mời một bạn lên bảng!') + '</p>' +
      '<div class="kt-banner-ten" style="--c:' + mau(c.ten) + '">' + esc(c.ten) + '</div>' +
      '<p class="kt-banner-meta">' + esc(c.kid ? meta(c.kid) : 'Không dùng danh sách — điểm chỉ hiện trên màn hình') + '</p>' +
      '<div class="kt-banner-modes">' + chips + '</div>' +
      '<div class="kt-act">' +
        (c.kid ? '<button type="button" class="kt-btn2" data-k="vang">🚫 Vắng</button><button type="button" class="kt-btn2" data-k="banKhac">🔄 Gọi bạn khác</button>'
          : '<button type="button" class="kt-btn2" data-k="veSanh">← Về sảnh</button>') +
        '<button type="button" class="kt-go" data-k="batDau">▶ Bắt đầu <kbd>Space</kbd></button>' +
      '</div></div>', 'is-banner');
    if (docLai !== false) {
      sndXong();
      if (c.kid) docTen('Mời ' + c.kid.name + ' lên bảng');
    }
    phimTat();
  }
  function batDau() {
    if (!S.cur) return;
    if (!coMode(S.cur.mode)) S.cur.mode = modeDau();
    huyHen();
    dongLop();
    imLang();
    S.nho.luot = {};
    S.nho.loai = {};
    S.pha = 'choi';
    root.setAttribute('data-pha', 'choi');
    root.setAttribute('data-mode', S.cur.mode);
    GAME[S.cur.mode].bat();
    if (window.NhacNen) window.NhacNen.bat({ kieu: 'vui' });
  }

  /* ---------------- ket qua ---------------- */
  function ketThuc() {
    if (!S.cur || !S.cur.g) return;
    var r = GAME[S.cur.mode].ket();
    huyHen();
    imLang();
    S.pha = 'kq';
    root.setAttribute('data-pha', 'kq');
    S.cur.goiY = moc(r.diem, 0, 10);
    S.cur.chon = S.cur.goiY;
    S.cur.ct = r.ct;
    S.cur.tt = '';
    veKq();
    if (S.cur.goiY >= 8) sndKen(); else sndXong();
  }
  function veKq() {
    if (window.NhacNen) window.NhacNen.tat();
    var c = S.cur, so = '';
    for (var n = 0; n <= 10; n++) {
      so += '<button type="button" class="kt-num' + (n === c.chon ? ' is-chon' : '') + (n === c.goiY ? ' is-goiy' : '') + '" data-k="diem" data-v="' + n + '"' +
        (S.busy ? ' disabled' : '') + '>' + n + '</button>';
    }
    var luuDuoc = !!c.kid;
    var act = luuDuoc
      ? '<button type="button" class="kt-btn2" data-k="vangKq">🚫 Vắng</button>' +
        '<button type="button" class="kt-btn2" data-k="boQua">Bỏ qua (không lưu)</button>' +
        '<button type="button" class="kt-btn2" data-k="luu">💾 Lưu <kbd>Enter</kbd></button>' +
        '<button type="button" class="kt-go kt-go-sm" data-k="luuTiep">💾 Lưu điểm & gọi bạn tiếp <kbd>Space</kbd></button>'
      : '<button type="button" class="kt-btn2" data-k="luu">← Về sảnh <kbd>Enter</kbd></button>' +
        '<button type="button" class="kt-go kt-go-sm" data-k="luuTiep">▶ Lượt tiếp theo <kbd>Space</kbd></button>';
    moLop('<div class="kt-kq">' +
      '<p class="kt-kq-mode">' + MODE[c.mode].ic + ' ' + esc(MODE[c.mode].ten) + ' · kết quả</p>' +
      '<div class="kt-kq-ten" style="--c:' + mau(c.ten) + '">' + esc(c.ten) + '</div>' +
      '<div class="kt-kq-dau"><div class="kt-kq-so' + (c.chon >= 8 ? ' is-cao' : c.chon < 5 ? ' is-thap' : '') + '"><b>' + c.chon + '</b><small>/10</small></div>' +
        '<div class="kt-kq-ct">' + c.ct + '<p class="kt-kq-goiy">Máy gợi ý <b>' + c.goiY + '</b> điểm — thầy/cô có thể chọn lại:</p></div></div>' +
      '<div class="kt-kq-diem" role="group" aria-label="Điểm miệng">' + so + '</div>' +
      '<div class="kt-act">' + act + '</div>' +
      '<p class="kt-kq-tt" id="ktKqTt">' + esc(c.tt || (luuDuoc ? (S.src.indexOf('sv:') === 0 ? 'Điểm sẽ lên cột “Miệng” của bảng lớp.' : 'Điểm lưu trong danh sách nhanh trên máy này.') : 'Không dùng danh sách — điểm không được lưu.')) + '</p>' +
    '</div>', 'is-kq');
    phimTat();
  }
  function luuKq(tiep) {
    var c = S.cur;
    if (!c || S.busy || S.pha !== 'kq') return;
    var d = c.chon;
    if (!c.kid) {
      S.log.unshift({ ten: c.ten, diem: d, mode: c.mode, luu: false });
      if (tiep) goiHs(); else veSanh();
      return;
    }
    S.busy = true;
    c.tt = 'Đang lưu…';
    veKq();
    luuDiem(c.kid, d).then(function () {
      S.busy = false;
      S.round[c.kid.id] = { diem: d };
      S.log.unshift({ ten: c.kid.name, diem: d, mode: c.mode, luu: true, id: c.kid.id });
      bao('✓ Đã lưu ' + d + ' điểm cho ' + c.kid.name + (S.src.indexOf('sv:') === 0 ? ' (cột Miệng)' : ''));
      if (tiep) goiHs(); else veSanh();
    }).catch(function (e) {
      S.busy = false;
      c.tt = (e && e.message ? e.message : 'Không lưu được') + ' — thử lại nhé.';
      if (S.pha === 'kq') veKq();
    });
  }

  /* ---------------- tong ket ---------------- */
  function tongKet() {
    dongPanel();
    huyHen();
    S.pha = 'tong';
    root.setAttribute('data-pha', 'tong');
    var co = S.log.filter(function (x) { return x.diem !== null; });
    var tb = co.length ? Math.round(co.reduce(function (a, x) { return a + x.diem; }, 0) / co.length * 10) / 10 : null;
    var ds = S.log.slice().reverse();
    moLop('<div class="kt-tong"><h2>📊 Hôm nay đã kiểm tra</h2>' +
      '<p class="kt-tong-tt">' + ds.length + ' lượt' + (tb !== null ? ' · điểm trung bình <b>' + tb + '</b>' : '') + '</p>' +
      (ds.length ? '<ol class="kt-tong-ds">' + ds.map(function (x) {
        return '<li><span class="kt-log-ic">' + MODE[x.mode].ic + '</span><span class="kt-log-ten">' + esc(x.ten) + '</span>' +
          '<span class="kt-tong-luu">' + (x.diem === null ? 'bỏ qua' : x.luu ? 'đã lưu' : 'không lưu') + '</span>' +
          '<b class="kt-log-d' + (x.diem === null ? ' is-trong' : '') + '">' + (x.diem === null ? '—' : x.diem) + '</b></li>';
      }).join('') + '</ol>' : '<p class="kt-meo">Chưa có lượt nào.</p>') +
      '<div class="kt-act"><button type="button" class="kt-btn2" data-k="dong">✕ Đóng</button>' +
      '<button type="button" class="kt-go kt-go-sm" data-k="veSanh">← Về sảnh <kbd>Space</kbd></button></div></div>', 'is-tong');
    phimTat();
  }

  /* ---------------- bang phu ---------------- */
  function moPanel(html) {
    $('#ktPanelCard').innerHTML = html;
    $('#ktPanel').hidden = false;
    var f = $('#ktPanelCard').querySelector('input, textarea, .kt-go, button');
    if (f) f.focus();
  }
  function dongPanel() { $('#ktPanel').hidden = true; $('#ktPanelCard').innerHTML = ''; }

  function moKhoa(loi) {
    moPanel(
      '<h2>Lớp trên hệ thống</h2>' +
      '<p>Nhập mật khẩu quản trị để lấy danh sách lớp. Điểm chấm sẽ lên cột “Miệng” ở bảng lớp.</p>' +
      '<form class="kt-form" id="ktKhoa">' +
        '<input type="password" id="ktPw" placeholder="Mật khẩu quản trị" autocomplete="current-password" required>' +
        '<div class="kt-form-act"><button type="button" class="kt-btn2" data-k="dongPanel">Huỷ</button><button type="submit" class="kt-go kt-go-sm">Mở danh sách</button></div>' +
      '</form>' +
      '<p class="kt-loi" id="ktLoi"' + (loi ? '' : ' hidden') + '>' + esc(loi || '') + '</p>'
    );
    $('#ktKhoa').addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem(PW_KEY, $('#ktPw').value); } catch (x) { /* bo qua */ }
      napLop().then(function () {
        if (!S.classes.length) {
          var l = $('#ktLoi');
          if (!l) return;
          l.hidden = false;
          l.textContent = pw() ? 'Chưa có lớp nào trên hệ thống.' : 'Mật khẩu không đúng.';
          return;
        }
        dongPanel();
        chonNguon('sv:' + S.classes[0].id);
      });
    });
  }

  function moSua(l) {
    moPanel(
      '<h2>' + (l ? 'Sửa danh sách' : 'Tạo danh sách nhanh') + '</h2>' +
      '<p>Mỗi dòng một tên. Danh sách chỉ lưu trên trình duyệt của máy này (dùng chung với “UFO gọi trả bài”), không gửi lên mạng.</p>' +
      '<form class="kt-form" id="ktSua">' +
        '<input type="text" id="ktTenDs" placeholder="Tên lớp, ví dụ: HSK2 tối thứ 3" maxlength="60" required value="' + esc(l ? l.name : '') + '">' +
        '<textarea id="ktDsTen" rows="10" placeholder="Nguyễn Văn An&#10;Trần Thị Bình&#10;…" required>' + esc(l ? l.kids.map(function (k) { return k.name; }).join('\n') : '') + '</textarea>' +
        '<div class="kt-form-act">' +
          (l ? '<button type="button" class="kt-btn2 kt-btn-xoa" id="ktXoaDs">Xoá danh sách</button>' : '') +
          '<button type="button" class="kt-btn2" data-k="dongPanel">Huỷ</button>' +
          '<button type="submit" class="kt-go kt-go-sm">Lưu</button>' +
        '</div>' +
      '</form>'
    );
    var xoa = $('#ktXoaDs');
    if (xoa) xoa.addEventListener('click', function () {
      if (!window.confirm('Xoá danh sách “' + l.name + '” khỏi máy này?')) return;
      ghiDs(docDs().filter(function (x) { return x.id !== l.id; }));
      S.src = '';
      dongPanel();
      chonDau();
    });
    $('#ktSua').addEventListener('submit', function (e) {
      e.preventDefault();
      var ten = $('#ktTenDs').value.trim();
      var cu = {};
      if (l) l.kids.forEach(function (k) { cu[k.name.toLowerCase()] = k; });
      var thay = {};
      var kids = $('#ktDsTen').value.split(/\r?\n/).map(function (s) {
        return s.replace(/^\s*\d+[.)\-\s]+/, '').replace(/\s+/g, ' ').trim();
      }).filter(function (s) {
        var key = s.toLowerCase();
        if (!s || thay[key]) return false;
        thay[key] = 1;
        return true;
      }).map(function (s, i) {
        // Giu lai lich su goi cua em co ten trung voi danh sach cu
        return cu[s.toLowerCase()] || { id: 'k' + Date.now().toString(36) + i, name: s, times: 0, lastMs: 0, scores: [] };
      });
      if (!ten || !kids.length) return;
      var lists = docDs();
      if (l) lists = lists.map(function (x) { return x.id === l.id ? { id: l.id, name: ten, kids: kids } : x; });
      else { l = { id: 'l' + Date.now().toString(36), name: ten, kids: kids }; lists.push(l); }
      ghiDs(lists);
      dongPanel();
      chonNguon('ls:' + l.id);
    });
  }

  function moChonTen() {
    var dem = demTen();
    var ds = S.kids.filter(function (k) { return !S.absent[k.id]; });
    moPanel('<h2>Chọn bạn lên bảng</h2><p>Bạn đã kiểm tra trong vòng này có dấu ✓ — vẫn gọi lại được.</p>' +
      '<div class="kt-chon-ds">' + ds.map(function (k) {
        var r = S.round[k.id];
        return '<button type="button" class="kt-chon-hs' + (r ? ' is-xong' : '') + '" data-k="goiNay" data-v="' + esc(k.id) + '" style="--c:' + mau(k.name) + '" title="' + esc(k.name) + '">' +
          esc(tenNgan(k, dem)) + (r ? ' <small>' + (typeof r.diem === 'number' ? r.diem : '✓') + '</small>' : '') + '</button>';
      }).join('') + '</div>' +
      '<div class="kt-form-act"><button type="button" class="kt-btn2" data-k="dongPanel">Đóng</button></div>');
  }

  function moHuyLuot() {
    moPanel('<h2>Dừng lượt của ' + esc(S.cur.ten) + '?</h2><p>Có thể chấm điểm luôn với phần đã làm, hoặc bỏ lượt này (không lưu gì).</p>' +
      '<div class="kt-form-act"><button type="button" class="kt-btn2" data-k="boLuot">Bỏ lượt, về sảnh</button>' +
      '<button type="button" class="kt-btn2" data-k="chamLuon">Chấm điểm luôn</button>' +
      '<button type="button" class="kt-go kt-go-sm" data-k="dongPanel">Chơi tiếp</button></div>');
  }

  /* ---------------- hanh dong (bam chuot) ---------------- */
  function gHien() { return S.cur && S.cur.g; }
  var HANH = {
    am: function () { S.sound = !S.sound; luuPref(); veNut(); if (S.sound) sndChon(); else imLang(); },
    full: toanManHinh,
    dong: function () { dong(); },
    suaDs: function () { var l = timDs(S.src.slice(3)); if (l) moSua(l); },
    khoa: function () { moKhoa(); },
    taoDs: function () { moSua(null); },
    khongDs: function () { chonNguon('none'); },
    dongPanel: dongPanel,
    mode: function (v) {
      if (!MODE[v] || !coMode(v)) return;
      S.mode = v;
      luuPref();
      sndChon();
      if (S.pha === 'banner' && S.cur) { S.cur.mode = v; veBanner(false); } else if (S.pha === 'sanh') veSanh();
    },
    cai: function (v) {
      var p = String(v).split(':'), n = +p[1];
      if (['hopSo', 'gheGiay', 'gheMuc', 'bocSo', 'dangSo', 'quaySo'].indexOf(p[0]) < 0 || !n) return;
      S[p[0]] = n;
      luuPref();
      veSanh();
    },
    dangLoai: function (v) {
      if (!TEN_LOAI[v]) return;
      var i = S.dangLoai.indexOf(v);
      if (i >= 0) { if (dangCo().length <= 1 && coLoai(S.P, v)) { bao('Cần chọn ít nhất một dạng.'); return; } S.dangLoai.splice(i, 1); }
      else S.dangLoai.push(v);
      luuPref();
      sndChon();
      veSanh();
    },
    hs: function (v) {
      var k = timHs(v);
      if (!k) return;
      if (S.absent[v]) delete S.absent[v]; else { S.absent[v] = 1; delete S.round[v]; }
      veSanh();
    },
    vongMoi: function () { dongPanel(); S.round = {}; if (S.pha !== 'sanh') veSanh(); else veSanh(); bao('↺ Vòng mới — cả lớp lại có thể được gọi.'); },
    goi: function () { goiHs(); },
    chonTen: moChonTen,
    goiNay: function (v) { var k = timHs(v); dongPanel(); if (k) goiHs(k); },
    tongKet: tongKet,
    veSanh: function () { veSanh(); },
    batDau: batDau,
    banKhac: function () { if (S.cur && S.cur.kid) goiHs(null, [S.cur.kid]); },
    vang: function () {
      if (!S.cur || !S.cur.kid) return;
      S.absent[S.cur.kid.id] = 1;
      delete S.round[S.cur.kid.id];
      bao('🚫 ' + S.cur.kid.name + ' vắng hôm nay');
      goiHs(null, [S.cur.kid]);
    },
    huyLuot: moHuyLuot,
    boLuot: function () { dongPanel(); if (S.cur && !S.cur.kid) S.luotSo = Math.max(0, S.luotSo - 1); veSanh(); },
    chamLuon: function () { dongPanel(); ketThuc(); },
    // trong tro choi
    nghe: function () { var g = gHien(); var q = g && (g.q || g.the); if (q && q.doc) { var s = S.sound; S.sound = true; docTrung(q.doc); S.sound = s; } },
    lo: function () { var g = gHien(); if (g) loCau(g); },
    opt: function (v) { var g = gHien(); if (g) chonDa(g, +v); },
    tiep: function () { var g = gHien(); if (g && g.cho) boCho(g); },
    cham: function (v) {
      var m = S.cur && S.cur.mode;
      if (m === 'hop') HOP.cham(+v); else if (m === 'thang') THANG.cham(+v); else if (m === 'boc') BOC.cham(+v);
      else if (m === 'dang') DANG.cham(+v); else if (m === 'quay') QUAY.cham(+v);
    },
    hop: function (v) { HOP.mo(+v); },
    doiCau: function () { if (S.cur && S.cur.mode === 'dang') DANG.doiCau(); else HOP.doiCau(); },
    quay: function () { QUAY.quay(); },
    tg50: function () { THANG.tg50(); },
    tgBan: function () { THANG.tgBan(); },
    dungLai: function () { THANG.dungLai(); },
    gheBat: function () { GHE.batDung(); },
    ghe: function (v) { GHE.cham(v); },
    boc: function (v) { BOC.boc(+v); },
    // ket qua
    diem: function (v) { if (S.cur && !S.busy) { S.cur.chon = +v; sndChon(); veKq(); } },
    luu: function () { luuKq(false); },
    luuTiep: function () { luuKq(true); },
    boQua: function () {
      var c = S.cur;
      if (!c || S.busy) return;
      if (c.kid) { S.round[c.kid.id] = { diem: null }; S.log.unshift({ ten: c.kid.name, diem: null, mode: c.mode, luu: false }); }
      veSanh();
    },
    vangKq: function () {
      var c = S.cur;
      if (!c || !c.kid || S.busy) return;
      S.absent[c.kid.id] = 1;
      delete S.round[c.kid.id];
      veSanh();
    }
  };
  function bam(e) {
    var b = e.target.closest('[data-k]');
    if (!b || b.disabled || !root.contains(b)) return;
    var f = HANH[b.getAttribute('data-k')];
    if (f) { e.preventDefault(); f(b.getAttribute('data-v'), b); }
  }

  /* ---------------- phim tat ---------------- */
  function phimTat() {
    var t = '', g = gHien();
    if (S.pha === 'sanh') t = S.loai.length ? 'Space gọi học sinh · 1–6 chọn trò · F toàn màn hình · M tắt/bật tiếng · Esc đóng' : 'Esc đóng';
    else if (S.pha === 'banner') t = 'Space bắt đầu · 1–6 đổi trò · Esc về sảnh';
    else if (S.pha === 'kq') t = 'Space ' + (S.cur && S.cur.kid ? 'lưu & gọi bạn tiếp' : 'lượt tiếp') + ' · Enter ' + (S.cur && S.cur.kid ? 'lưu' : 'về sảnh') + ' · gõ 0–9 (1 rồi 0 = 10) để đổi điểm · Esc về sảnh';
    else if (S.pha === 'tong') t = 'Space về sảnh · Esc về sảnh';
    else if (S.pha === 'choi' && g) {
      var m = S.cur.mode;
      if (g.cho) t = 'Space tiếp tục';
      else if (m === 'hop') t = g.dang < 0 ? '1–9 mở hộp' : 'Enter xem đáp án · → đúng · ↓ gần đúng · ← sai · A–D chọn đáp án · X đổi câu · S đọc to';
      else if (m === 'thang') t = 'Enter xem đáp án · → đúng · ← sai · A–D chọn đáp án · 5 = 50:50 · H hỏi bạn · G dừng giữ điểm · S đọc to';
      else if (m === 'ghe') t = 'Space ' + (g.chay ? 'tạm dừng' : 'bắt đầu') + ' · → đúng · ← sai · ↓ bỏ qua · Enter xem đáp án';
      else if (m === 'boc') t = g.dang < 0 ? '1–4 bốc lá ở chồng tương ứng' : 'Enter xem đáp án · 0–3 chấm điểm · A–D chọn đáp án · S đọc to';
      else if (m === 'dang') t = 'Enter xem đáp án · → đúng · ↓ gần đúng · ← sai · A–D chọn đáp án · X đổi câu · S đọc to';
      else if (m === 'quay') t = g.dang < 0 ? 'Space quay bánh xe' : 'Enter xem đáp án · → đúng · ↓ gần đúng · ← sai · A–D chọn đáp án · S đọc to';
      t += ' · Esc dừng lượt';
    }
    $('#ktPhim').textContent = t;
    // Dang choi / cham diem thi khong cho doi lop (tranh luu nham sang lop khac)
    $('#ktSrc').disabled = S.pha !== 'sanh';
    $('#ktEdit').disabled = S.pha !== 'sanh';
  }

  function toanManHinh() {
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* bo qua */ });
  }
  function nhapDiem(d) {
    var now = Date.now();
    if (d === '0' && S.soCu === '1' && now - S.soMs < 900) { S.cur.chon = 10; S.soCu = ''; }
    else { S.cur.chon = +d; S.soCu = d; S.soMs = now; }
    sndChon();
    veKq();
  }
  function banPhimDung(nut) {
    try { return nut && nut.matches(':focus-visible'); } catch (e) { return false; }
  }

  function phim(e) {
    if (!root || root.hidden) return;
    var trongO = e.target && /input|select|textarea/i.test(e.target.tagName);
    if (e.key === 'Escape') {
      e.stopImmediatePropagation();
      if (!$('#ktPanel').hidden) dongPanel();
      else if (S.pha === 'choi') moHuyLuot();
      else if (S.pha === 'goi' || S.pha === 'banner' || S.pha === 'kq' || S.pha === 'tong') { if (!S.busy) veSanh(); }
      else if (!document.fullscreenElement) dong();
      return;
    }
    if (trongO) return;
    // Man kiem tra dang mo thi phim tat cua tro choi phia sau khong duoc chay
    e.stopImmediatePropagation();
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var nut = e.target && e.target.tagName === 'BUTTON' && root.contains(e.target) ? e.target : null;
    var space = e.code === 'Space' || e.key === ' ', enter = e.key === 'Enter';
    if (!$('#ktPanel').hidden) {
      if (nut && (space || enter)) { e.preventDefault(); nut.click(); }
      return;
    }
    // Nguoi dung tab den nut bang ban phim: Enter bam dung nut do
    if (enter && banPhimDung(nut)) { e.preventDefault(); nut.click(); return; }
    var k = (e.key || '').toLowerCase();
    if (space || enter || /^Arrow/.test(e.key)) e.preventDefault();
    if (k === 'f') { toanManHinh(); return; }
    if (k === 'm') { HANH.am(); return; }
    var so = e.key.length === 1 && e.key >= '0' && e.key <= '9';
    switch (S.pha) {
      case 'sanh':
        if (space) goiHs();
        else if (so && +e.key >= 1 && +e.key <= MODE_DS.length) HANH.mode(MODE_DS[+e.key - 1]);
        break;
      case 'banner':
        if (space || enter) batDau();
        else if (so && +e.key >= 1 && +e.key <= MODE_DS.length) HANH.mode(MODE_DS[+e.key - 1]);
        break;
      case 'kq':
        if (space) luuKq(true);
        else if (enter) luuKq(false);
        else if (so && !S.busy) nhapDiem(e.key);
        break;
      case 'tong':
        if (space || enter) veSanh();
        break;
      case 'choi':
        var g = gHien();
        if (!g) break;
        if (k === 's' && !(S.cur.mode === 'ghe')) { HANH.nghe(); break; }
        if (g.cho) { if (space || enter || e.key === 'ArrowRight') boCho(g); break; }
        if (S.cur.mode === 'ghe') {
          if (space) GHE.batDung(); else GHE.phim(e, k, g);
          break;
        }
        if (GAME[S.cur.mode].phim(e, k, g)) break;
        if (space && g.q && !g.lo) loCau(g);
        break;
    }
  }

  /* ---------------- mo / dong ---------------- */
  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    napPref();
    S.goc = opt;
    S.P = chuanHoa(opt);
    S.loai = loaiCo(S.P);
    S.nhan = str(opt.nhan);
    var ky = S.nhan + '|' + S.P.vocab.length + '|' + S.P.mcs.length + '|' + S.P.sorts.length + '|' + S.P.soTrans + '|' + S.P.soHt;
    if (ky !== S.ky) { S.ky = ky; S.nho = { da: {}, luot: {}, loai: {} }; }
    root.hidden = false;
    document.documentElement.classList.add('kt-open');
    S.pha = 'sanh';
    // Dang nap danh sach: chua cho goi (tranh choi an danh vi danh sach chua ve)
    S.dangTai = true;
    S.kids = [];
    veNut();
    napNguon();
    veSanh();
    napLop().then(chonDau);
  }
  function dong() {
    if (window.NhacNen) window.NhacNen.tat();
    if (!root) return;
    huyHen();
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    imLang();
    dongPanel();
    dongLop();
    S.pha = 'sanh';
    S.cur = null;
    S.busy = false;
    root.hidden = true;
    man.innerHTML = '';
    document.documentElement.classList.remove('kt-open');
  }

  LOI.mo = mo;
  LOI.dong = dong;
  window.LopKiemTra = LOI;
})();
