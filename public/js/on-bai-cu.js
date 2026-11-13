/* ══════════════════════════════════════════════════════════════════
   ON BAI CU (/game) — "Kiem tra bai cu" cua Che do lop hoc dua sang trang tu hoc cua hoc sinh.
   ------------------------------------------------------------------
   Hoc sinh chon bai o san choi nhu moi tro khac roi:
     · Tu on mot minh — may tu cham (khong can co giao): Leo thang trieu phu · Do min · San kho bau ·
       Ghe nong · Kiem tra theo dang. Cau hoi lay tu CUNG ngan hang voi man chieu cua co
       (public/js/lop-kiemtra.js, Phan 1) nhung chi cac dang may cham duoc: nghia cua tu, chon chu Han,
       noi tu – nghia, nghe – hieu, ngu phap, dien tu, xep cau (keo tha — public/js/cau-dt.js).
     · On voi ban bang ma QR — em mo phong (phai dang nhap), ban be quet ma vao /choi hoac /dua (khong can
       tai khoan). Dung lai phong co san cua live.js: 'nhip' (Thi nhanh, Ghe nong co dong ho chung) va
       'dua' (Cuoc dua ki thu). Chu phong cung choi: vao phong nhu mot nguoi choi roi mo /choi | /dua
       trong khung ngay tren trang nay, phia tren la thanh chu phong (ma phong, bang xep hang, ket thuc, choi lai).
   Khong hien pinyin (giong moi tro o san choi) — tru cau nghe khi may khong phat duoc tieng.
   game-hub.js goi mo(hop, { vocab, mcs, sorts, nhan, thoat }) vi tro nay khai tuLay: true.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var T = window.TroNha;
  if (!T) return;

  var KEY = 'onbaicu';
  var PREF = 'hyv_obc_pref';
  var esc = T.esc, tron = T.tron;
  var K = null; // window.LopKiemTra (nap khi mo tro)
  var CHU = 'ABCD';
  var LOAI_ON = ['nghia', 'viet', 'noi', 'nghe', 'nguphap', 'dien', 'xepcau'];
  var TEN = {
    nghia: ['💡', 'Nghĩa của từ'], viet: ['✍️', 'Chọn chữ Hán'], noi: ['🔗', 'Nối từ – nghĩa'], nghe: ['🎧', 'Nghe – hiểu'],
    nguphap: ['🧩', 'Ngữ pháp'], dien: ['🕳️', 'Điền từ vào câu'], xepcau: ['🔀', 'Xếp câu']
  };
  // Dang cau theo do kho (thu tu giong cac bac cua "Leo thang trieu phu" tren man chieu)
  var TANG = { 1: ['nghia', 'nghe', 'noi'], 2: ['viet', 'dien', 'nguphap'], 3: ['xepcau', 'nguphap', 'dien'] };
  var MODE = {
    thang: { sp: 'm-thang', ten: 'Leo thang triệu phú', mo: 'Câu khó dần theo từng bậc, 2 quyền trợ giúp; sai thì rơi về mốc an toàn.' },
    min: { sp: 'm-min', ten: 'Dò mìn', mo: 'Vượt bãi mìn từng hàng: đúng cắm cờ tiến lên, sai thì mìn nổ, mất 1 trong 3 mạng.' },
    kb: { sp: 'm-kb', ten: 'Săn kho báu', mo: 'Mỗi câu đúng lật 1 chữ Hán của từ khoá bí mật — ghép được từ khoá là mở rương.' },
    ghe: { sp: 'm-ghe', ten: 'Ghế nóng', mo: 'Thẻ từ vựng dồn dập — trả lời được bao nhiêu từ trước khi hết giờ?' },
    dang: { sp: 'm-dang', ten: 'Kiểm tra theo dạng', mo: 'Em chọn dạng bài và số câu, làm lần lượt rồi xem lại câu sai.' }
  };
  var MODE_DS = ['thang', 'min', 'kb', 'ghe', 'dang'];
  var QR = {
    nhip: { ic: '⚡', ten: 'Thi nhanh', mo: 'Cả nhóm làm cùng một bộ câu, mỗi bạn theo nhịp của mình — bảng xếp hạng nhảy liên tục.' },
    dua: { ic: '🏁', ten: 'Cuộc đua kì thú', mo: 'Mỗi bạn chọn một linh vật; đúng 1 câu là chạy 1 bước trên đường đua trong rừng.' },
    ghe: { ic: '🔥', ten: 'Ghế nóng', mo: 'Cả nhóm cùng một đồng hồ: ai trả lời đúng nhiều từ nhất trước khi hết giờ?' }
  };
  var AN_TOAN = { 5: [1, 3], 8: [2, 5], 10: [2, 5, 8] }; // moc an toan (chi so bac, tinh tu 0)
  var VONG = 2 * Math.PI * 52;

  var S = { hop: null, goc: null, man: null, o: null, opt: null, P: null, nho: null, pyGoc: {}, loai: [], daHoi: {},
    pref: {}, g: null, hen: [], dk: [], phim: null, phong: null, song: false, lop: null };

  /* ---------------- tien ich ---------------- */
  function $(sel) { return S.goc ? S.goc.querySelector(sel) : null; }
  function hinh(ten, cls) { return '<img class="obc-sp' + (cls ? ' ' + cls : '') + '" src="/images/game/kt-' + ten + '.svg" alt="" draggable="false">'; }
  function coHan(s) { return /[㐀-鿿]/.test(String(s || '')); }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function auth() { var a = docLS('hyv_auth', null); return a && a.token ? a : null; }
  function sau(ms, fn) {
    var id = setTimeout(function () { var i = S.hen.indexOf(id); if (i >= 0) S.hen.splice(i, 1); if (S.song) fn(); }, ms);
    S.hen.push(id);
    return id;
  }
  function huyHen() { S.hen.forEach(clearTimeout); S.hen = []; S.dk.forEach(clearInterval); S.dk = []; }
  function luuPref() { ghiLS(PREF, S.pref); }
  function napPref() {
    var p = docLS(PREF, {}) || {};
    S.pref = {
      thangBac: [5, 8, 10].indexOf(p.thangBac) >= 0 ? p.thangBac : 8,
      minHang: [5, 6, 8].indexOf(p.minHang) >= 0 ? p.minHang : 6,
      gheGiay: [60, 90].indexOf(p.gheGiay) >= 0 ? p.gheGiay : 60,
      dangSo: [5, 10, 15, 20].indexOf(p.dangSo) >= 0 ? p.dangSo : 10,
      dangLoai: Array.isArray(p.dangLoai) ? p.dangLoai : null,
      qrSo: [10, 15, 20, 30].indexOf(p.qrSo) >= 0 ? p.qrSo : 15,
      qrGiay: [60, 90, 120].indexOf(p.qrGiay) >= 0 ? p.qrGiay : 90,
      lv: typeof p.lv === 'string' ? p.lv : ''
    };
  }
  var daNap = {};
  function nap(src) {
    if (!daNap[src]) {
      daNap[src] = new Promise(function (ok, loi) {
        var sc = document.createElement('script');
        sc.src = src;
        sc.onload = function () { ok(); };
        sc.onerror = function () { delete daNap[src]; loi(new Error('Chưa tải được trò chơi — em kiểm tra mạng rồi thử lại nhé.')); };
        document.head.appendChild(sc);
      });
    }
    return daNap[src];
  }
  function api(method, url, body, token) {
    var h = {};
    if (body) h['Content-Type'] = 'application/json';
    if (token) h.Authorization = 'Bearer ' + token;
    return fetch(url, { method: method, headers: h, body: body ? JSON.stringify(body) : undefined, cache: 'no-store' }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d.error || 'Lỗi kết nối'); e.d = d; e.status = r.status; throw e; }
        return d;
      });
    });
  }
  function cuon(el) { try { el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) { /* bo qua */ } }
  function maDep(ma) { return String(ma).replace(/(\d{3})(\d{3})/, '$1 $2'); }

  /* ---------------- giong doc ---------------- */
  // Cau nghe: may co giong Trung thi doc; khong phat duoc (khong co giong / dien thoai chan) thi hien pinyin de van lam duoc
  // (cung cach voi nong trai: nhin su kien start / end cua SpeechSynthesis de biet may co that su phat tieng khong).
  var giongZh = null;
  function chonGiong() {
    try { return (speechSynthesis.getVoices() || []).filter(function (v) { return /^zh|cmn/i.test(v.lang || ''); })[0] || null; } catch (e) { return null; }
  }
  function coGiong() {
    if (!window.speechSynthesis) return false;
    if (!giongZh) giongZh = chonGiong();
    if (giongZh) return true;
    try { return (speechSynthesis.getVoices() || []).length ? false : null; } catch (e) { return false; }
  }
  if (window.speechSynthesis) {
    try { speechSynthesis.addEventListener('voiceschanged', function () { giongZh = chonGiong(); }); } catch (e) { /* bo qua */ }
  }
  function im() { try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { /* bo qua */ } }
  function docKiem(zh, ok) {
    var xong = false;
    function ket(v) { if (xong) return; xong = true; ok(v); }
    if (!window.speechSynthesis || coGiong() === false) { ket(false); return; }
    try {
      speechSynthesis.cancel();
      if (speechSynthesis.resume) speechSynthesis.resume();
      var u = new SpeechSynthesisUtterance(zh), bd = 0;
      u.lang = 'zh-CN'; u.rate = 0.85;
      if (giongZh) u.voice = giongZh;
      u.onstart = function () { bd = Date.now(); };
      u.onend = function () { ket(bd > 0 && Date.now() - bd > 150); };
      u.onerror = function (e) { if (e && (e.error === 'interrupted' || e.error === 'canceled')) return; ket(false); };
      speechSynthesis.speak(u);
      setTimeout(function () { var dang = false; try { dang = speechSynthesis.speaking; } catch (e) { /* bo qua */ } ket(bd > 0 || dang); }, 2500);
    } catch (e) { ket(false); }
  }
  function mayKhongNghe() { try { return localStorage.getItem('hyv_obc_khong_nghe') === '1'; } catch (e) { return false; } }
  function ghiKhongNghe(v) { try { if (v) localStorage.setItem('hyv_obc_khong_nghe', '1'); else localStorage.removeItem('hyv_obc_khong_nghe'); } catch (e) { /* bo qua */ } }

  /* ---------------- du lieu: bo pinyin, gom kho cau ---------------- */
  var PY_RIENG = /[āǎēěīǐōǒūǔǖǘǚǜĀǍĒĚĪǏŌǑŪǓ]/;
  var TU_PY = /[A-Za-zÀ-ỹāǎēěīǐōǒūǔǖǘǚǜü']*[āǎēěīǐōǒūǔǖǘǚǜĀǍĒĚĪǏŌǑŪǓ][A-Za-zÀ-ỹāǎēěīǐōǒūǔǖǘǚǜü']*/g;
  function boPy(s) {
    if (!s || !PY_RIENG.test(s)) return s || '';
    return String(s).replace(TU_PY, '').replace(/[（(]\s*[,·\-–—\s]*[)）]/g, '').replace(/\s{2,}/g, ' ').trim();
  }
  function saoChep(q) { var c = {}; for (var k in q) c[k] = q[k]; return c; }
  function sachGhiChu(q) {
    var c = saoChep(q);
    ['why', 'context', 'hint'].forEach(function (k) { if (c[k]) c[k] = boPy(c[k]); });
    return c;
  }
  function chuanBi(o) {
    var vocab = (o.vocab || []).filter(function (v) { return v && v.zh && v.vn; });
    S.pyGoc = {};
    vocab.forEach(function (v) {
      if (v.py) S.pyGoc[K._khoaZh(v.zh)] = v.py;
      if (v.ex_zh && v.ex_py) S.pyGoc[K._khoaZh(v.ex_zh)] = v.ex_py;
    });
    S.opt = {
      vocab: vocab.map(function (v) { var c = saoChep(v); c.py = ''; c.ex_py = ''; return c; }),
      mcs: (o.mcs || []).filter(function (q) {
        return q && Array.isArray(q.options) && !PY_RIENG.test(q.options.join(' ') + ' ' + (q.pre || '') + ' ' + (q.post || ''));
      }).map(sachGhiChu),
      sorts: (o.sorts || []).filter(function (q) {
        return q && Array.isArray(q.words) && !PY_RIENG.test(q.answer || '') && !PY_RIENG.test(q.words.join(''));
      }).map(sachGhiChu)
    };
    S.P = K._chuanHoa(S.opt);
    S.nho = { da: {}, luot: {}, loai: {} };
    S.daHoi = {};
    S.loai = LOAI_ON.filter(function (l) {
      if (!K._coLoai(S.P, l)) return false;
      // trac nghiem tu vung can it nhat 3 tu khac nhau de co dap an nhieu
      if ((l === 'nghia' || l === 'viet' || l === 'nghe') && S.P.vocab.length < 3) return false;
      return true;
    });
  }

  /* ---------------- sinh cau hoi (dinh dang dien thoai cua lop-kiemtra.js: mc / xep / noi) ---------------- */
  // Nghe – hieu: nghe tu / cau roi chon nghia (may tu cham). py chi dung khi may khong phat duoc tieng.
  function ngheDt(q) {
    var a = q.dap || {}, P = S.P, laCau = q.de && q.de.nghe === 'câu';
    var thay = {}; thay[a.vn] = 1;
    function loc(ds) {
      return tron(ds.filter(function (x) { if (!x.vn || thay[x.vn] || x.zh === a.zh) return false; thay[x.vn] = 1; return true; }));
    }
    var khac = laCau ? loc(P.nghe[1]) : [];
    if (khac.length < 3) khac = khac.concat(loc(P.nghe[0]));
    khac = khac.slice(0, 3);
    if (khac.length < 2) return null;
    var opts = tron([a.vn].concat(khac.map(function (x) { return x.vn; })));
    return { lenh: 'Nghe rồi chọn nghĩa đúng', nghe: a.zh, py: S.pyGoc[K._khoaZh(a.zh)] || '', zh: '', ctx: '', why: '', opts: opts, dung: opts.indexOf(a.vn) };
  }
  // kho: 1–3 (0 = khong theo do kho); ds: cac dang duoc phep (mac dinh theo do kho)
  function taoCau(kho, ds) {
    var co = (ds || TANG[kho] || []).filter(function (l) { return S.loai.indexOf(l) >= 0; });
    if (!co.length) co = S.loai;
    if (!co.length) return null;
    for (var lan = 0; lan < 14; lan++) {
      var l = K._loaiTheoKho(S.P, kho || 2, co, S.nho);
      if (!l) return null;
      var q = K._taoCauP(S.P, l, S.nho);
      if (!q) continue;
      var c = l === 'nghe' ? ngheDt(q) : K._sangDt(S.P, q);
      if (!c || (c.opts && (c.dung < 0 || c.opts.length < 2))) continue;
      if (S.daHoi[q.key] && lan < 9) continue; // da hoi roi: thu cau khac truoc khi chiu lap
      S.daHoi[q.key] = 1;
      c.loai = l;
      c.key = q.key;
      // doc lai chu Han sau khi tra loi; cau ngu phap / dien tu: hien ca cau day du
      var dap = q.dap || {};
      c.doc = l === 'nghia' || l === 'viet' ? (q.tu ? q.tu.zh : '') : l === 'nghe' ? c.nghe : l === 'noi' ? '' : (q.doc || '');
      if ((l === 'nguphap' || l === 'dien') && dap.zh) c.day = dap.zh;
      if (l === 'viet') c.why = '';
      if (l === 'nghia' || l === 'viet') c.tu = { zh: q.tu.zh, vn: q.tu.vn };
      return c;
    }
    return null;
  }
  // Xao lai mot cau cu (de "On lai cau sai" khong nho vi tri dap an)
  function xaoLai(c) {
    var n = saoChep(c);
    if (c.k === 'xep') { n.tu = tron(c.tu); return n; }
    if (c.k === 'noi') {
      var thu = tron(c.phai.map(function (_, i) { return i; }));
      n.phai = thu.map(function (i) { return c.phai[i]; });
      n.dap = c.dap.map(function (j) { return thu.indexOf(j); });
      return n;
    }
    var dung = c.opts[c.dung];
    n.opts = tron(c.opts);
    n.dung = n.opts.indexOf(dung);
    return n;
  }
  function chamCau(c, tl) {
    if (c.k === 'xep') return K._khoaZh((tl.xep || []).map(function (i) { return c.tu[i]; }).join('')) === K._khoaZh(c.dap);
    if (c.k === 'noi') return (tl.noi || []).length === c.dap.length && tl.noi.every(function (v, i) { return v === c.dap[i]; });
    return tl.chon === c.dung;
  }
  // Tom tat de + dap an (bang ket qua, danh sach cau sai)
  function tomTat(c) {
    if (c.k === 'xep') return { hoi: c.ctx ? '«' + c.ctx + '»' : 'Xếp câu', dap: c.dap, zh: true };
    if (c.k === 'noi') return { hoi: 'Nối từ – nghĩa', dap: c.trai.map(function (t, i) { return t + ' → ' + c.phai[c.dap[i]]; }).join(' · '), zh: false };
    if (c.nghe) return { hoi: '🎧 ' + c.nghe, dap: c.opts[c.dung], zh: false, hoiZh: true };
    return { hoi: c.zh, dap: c.day || c.opts[c.dung], zh: coHan(c.day || c.opts[c.dung]), hoiZh: coHan(c.zh) };
  }

  /* ---------------- ve mot cau hoi + cham ----------------
     veHoi(el, c, tuy, xong): xong(dung, them) goi MOT lan sau khi em tra loi (them = cho de tro gan thong bao / nut tiep).
     Tra ve { an50(), khoa() }.                                                                      */
  function veHoi(el, c, tuy, xong) {
    tuy = tuy || {};
    var t = TEN[c.loai] || ['❓', ''];
    var da = false, an = [];
    var h = '<div class="obc-cau is-moi" data-loai="' + esc(c.loai || '') + '">' +
      '<div class="obc-cau-hd"><span class="obc-loai"><i aria-hidden="true">' + t[0] + '</i>' + esc(t[1]) + '</span>' +
        (tuy.nhan ? '<span class="obc-nhan">' + tuy.nhan + '</span>' : '') + '</div>' +
      '<p class="obc-lenh">' + esc(c.lenh || '') + '</p>';
    if (c.nghe) {
      h += '<div class="obc-nghe"><button type="button" class="obc-loa" data-loa>' + hinh('headphones') + '<span data-loa-chu>Nghe lại</span></button>' +
        '<p class="obc-nghe-tb" data-nghe-tb></p></div>';
    } else if (c.k === 'xep') {
      h += c.ctx ? '<p class="obc-de-nghia">«' + esc(c.ctx) + '»</p>' : '';
    } else if (!c.k) {
      var laZh = coHan(c.zh);
      h += '<div class="obc-de' + (laZh ? ' zh' : '') + (String(c.zh || '').length > (laZh ? 6 : 22) ? ' is-dai' : '') + '"' + (laZh ? ' lang="zh"' : '') + '>' + esc(c.zh) + '</div>' +
        (c.ctx ? '<p class="obc-ctx">' + (c.loai === 'nguphap' ? '🗣️ ' : '') + esc(c.ctx) + '</p>' : '');
    }
    h += '<p class="obc-goi" data-goi hidden></p><div class="obc-tl" data-tl></div><div class="obc-kq" data-kq hidden></div></div>';
    el.innerHTML = h;
    var tl = el.querySelector('[data-tl]'), kq = el.querySelector('[data-kq]');

    function tra(dung, chon) {
      if (da) return;
      da = true;
      S.phim = null;
      if (dung) T.keuDung(); else { T.keuSai(); T.rung(120); }
      if (c.doc) sau(dung ? 280 : 450, function () { T.doc(c.doc); });
      var dap = '';
      if (c.k && window.CauDT) dap = dung ? '' : '<p class="obc-kq-dap">Đáp án: ' + window.CauDT.dapHtml(c, c.dap) + '</p>';
      else if (c.nghe) dap = '<p class="obc-kq-dap">Em vừa nghe: <b lang="zh" class="zh">' + esc(c.nghe) + '</b> — ' + esc(c.opts[c.dung]) + '</p>';
      else {
        if (!dung) dap = '<p class="obc-kq-dap">Đáp án đúng: <b' + (coHan(c.opts[c.dung]) ? ' lang="zh" class="zh"' : '') + '>' + CHU.charAt(c.dung) + '. ' + esc(c.opts[c.dung]) + '</b></p>';
        if (c.day) dap += '<p class="obc-kq-dap">Câu đầy đủ: <b lang="zh" class="zh">' + esc(c.day) + '</b></p>';
      }
      kq.hidden = false;
      kq.className = 'obc-kq ' + (dung ? 'is-dung' : 'is-sai');
      kq.innerHTML = '<p class="obc-kq-tit">' + (dung ? '✓ Chính xác!' : '✗ Chưa đúng rồi') + '</p>' + dap +
        (c.why ? '<p class="obc-kq-why">💡 ' + esc(c.why) + '</p>' : '') + '<div class="obc-kq-them" data-them></div>';
      el.querySelector('.obc-cau').classList.add(dung ? 'da-dung' : 'da-sai');
      xong(dung, kq.querySelector('[data-them]'), chon);
      sau(80, function () { cuon(kq); });
    }

    if (c.k && window.CauDT) {
      window.CauDT.ve(tl, c, function (x) { tra(chamCau(c, x)); });
    } else {
      tl.className = 'obc-tl obc-opts n' + c.opts.length;
      tl.innerHTML = c.opts.map(function (o, i) {
        return '<button type="button" class="obc-opt' + (coHan(o) ? ' zh' : '') + '" data-i="' + i + '"' + (coHan(o) ? ' lang="zh"' : '') + '>' +
          '<span class="obc-opt-chu" aria-hidden="true">' + CHU.charAt(i) + '</span><span class="obc-opt-t">' + esc(o) + '</span></button>';
      }).join('');
      var bamO = function (i) {
        if (da || i < 0 || i >= c.opts.length || an.indexOf(i) >= 0) return;
        Array.prototype.forEach.call(tl.children, function (b, k) {
          b.disabled = true;
          b.classList.add(k === c.dung ? 'is-dung' : k === i ? 'is-sai' : 'is-mo');
        });
        tra(i === c.dung, i);
      };
      tl.addEventListener('click', function (e) {
        var b = e.target.closest('.obc-opt');
        if (b && !b.disabled) bamO(+b.getAttribute('data-i'));
      });
      S.phim = function (e) {
        var k = String(e.key || '').toLowerCase(), i = 'abcd'.indexOf(k);
        if (k.length === 1 && i < 0) i = '1234'.indexOf(k);
        if (k.length === 1 && i >= 0) { bamO(i); return true; }
        return false;
      };
    }

    if (c.nghe) {
      var loa = el.querySelector('[data-loa]'), loaChu = el.querySelector('[data-loa-chu]'), tb = el.querySelector('[data-nghe-tb]');
      var hienPy = function () {
        // may khong phat duoc tieng: hien pinyin (khong co pinyin thi hien chu Han) de van lam duoc
        tb.innerHTML = 'Máy của em chưa phát được tiếng Trung — đọc ' + (c.py ? 'pinyin' : 'chữ') + ' rồi chọn nghĩa: <b' + (c.py ? '' : ' lang="zh" class="zh"') + '>' + esc(c.py || c.nghe) + '</b>';
        tb.classList.add('is-py');
        loaChu.textContent = 'Thử nghe lại';
      };
      if (mayKhongNghe()) hienPy();
      docKiem(c.nghe, function (ok) {
        if (ok) { ghiKhongNghe(false); return; }
        if (!tb.classList.contains('is-py')) { loaChu.textContent = 'Bấm để nghe'; tb.textContent = 'Bấm nút tai nghe để nghe.'; }
      });
      loa.addEventListener('click', function () {
        loa.classList.remove('is-nay'); void loa.offsetWidth; loa.classList.add('is-nay');
        docKiem(c.nghe, function (ok) {
          if (ok) { ghiKhongNghe(false); if (!tb.classList.contains('is-py')) tb.textContent = ''; return; }
          ghiKhongNghe(true);
          hienPy();
        });
      });
    }

    return {
      // 50:50 — trac nghiem: bo bot dap an sai; xep cau / noi tu: hien mot goi y
      an50: function () {
        if (da) return;
        var goi = el.querySelector('[data-goi]');
        if (c.k === 'xep') {
          var goc = K._khoaZh(c.dap), dau = '';
          c.tu.forEach(function (w) { var k = K._khoaZh(w); if (k && goc.indexOf(k) === 0 && k.length > dau.length) dau = k; });
          goi.innerHTML = '💡 Câu bắt đầu bằng «<b lang="zh" class="zh">' + esc(dau || goc.charAt(0)) + '</b>»';
          goi.hidden = false;
          return;
        }
        if (c.k === 'noi') {
          goi.innerHTML = '💡 «<b lang="zh" class="zh">' + esc(c.trai[0]) + '</b>» nghĩa là «' + esc(c.phai[c.dap[0]]) + '»';
          goi.hidden = false;
          return;
        }
        var saiDs = [];
        c.opts.forEach(function (_, i) { if (i !== c.dung) saiDs.push(i); });
        an = tron(saiDs).slice(0, Math.max(1, Math.min(2, saiDs.length - 1)));
        an.forEach(function (i) { var b = tl.children[i]; if (b) { b.disabled = true; b.classList.add('is-an'); } });
      },
      khoa: function () { da = true; S.phim = null; }
    };
  }
  // Nut "tiep" trong o ket qua cua cau
  function nutTiep(them, nhan, fn, loiNhan) {
    if (loiNhan) them.insertAdjacentHTML('beforeend', '<p class="obc-tb">' + loiNhan + '</p>');
    var b = T.tao('button', 'obc-go obc-tiep', esc(nhan));
    b.type = 'button';
    b.setAttribute('data-tiep', '');
    b.addEventListener('click', function () { if (b.disabled) return; b.disabled = true; im(); fn(); });
    them.appendChild(b);
    sau(120, function () { try { b.focus({ preventScroll: true }); } catch (e) { /* bo qua */ } cuon(b); });
  }

  /* ---------------- khung mot tro + thanh tren ---------------- */
  function khung(mode, tt, than) {
    var m = MODE[mode] || { sp: 'books', ten: 'Ôn lại câu sai' };
    S.man.innerHTML = '<div class="obc-tro obc-tro-' + mode + '">' +
      '<div class="obc-top"><button type="button" class="obc-lui" data-act="menu" aria-label="Về danh sách kiểu ôn">←</button>' +
        '<span class="obc-top-ten">' + hinh(m.sp) + '<b>' + esc(m.ten) + '</b></span>' +
        '<span class="obc-top-tt" id="obcTt">' + (tt || '') + '</span></div>' +
      '<div class="obc-than" id="obcThan">' + than + '</div></div>';
    S.man.scrollTop = 0;
    try { S.goc.scrollIntoView({ block: 'start' }); } catch (e) { /* bo qua */ }
  }
  function datTt(html) { var e = $('#obcTt'); if (e) e.innerHTML = html; }
  function batVan(mode) {
    huyHen(); im();
    S.phim = null;
    S.nho.luot = {}; S.nho.loai = {};
    S.daHoi = {};
    if (window.SaoGame) window.SaoGame.batDauVan();
    S.g = { mode: mode, ds: [], dung: 0, chuoi: 0, chuoiMax: 0 };
    return S.g;
  }
  function ghi(g, c, dung) {
    g.ds.push({ c: c, dung: dung });
    if (dung) { g.dung++; g.chuoi++; g.chuoiMax = Math.max(g.chuoiMax, g.chuoi); } else g.chuoi = 0;
  }

  /* =================== LEO THANG TRIEU PHU =================== */
  function diemBac(i) { return (i + 1) * 100; }
  function khoBac(i, n) { return Math.min(3, 1 + Math.floor(i * 3 / n)); }
  var THANG = {
    bat: function () {
      var g = batVan('thang');
      g.n = S.pref.thangBac; g.bac = 0; g.giu = 0; g.da50 = false; g.daDoi = false; g.roi = false; g.dungTay = false; g.len = false;
      g.an = AN_TOAN[g.n] || [];
      khung('thang', '', '<div class="obc-thang"><div class="obc-thang-giua"><div class="obc-tg" id="obcTg"></div><div id="obcCau"></div></div>' +
        '<aside class="obc-thang-ben">' + hinh('trophy', 'obc-cup') + '<ol class="obc-bacs" id="obcBacs" aria-label="Các bậc thang"></ol><p class="obc-thang-giu" id="obcGiu"></p></aside></div>');
      THANG.cau();
    },
    anDuoi: function (g) { var d = 0; g.an.forEach(function (i) { if (i < g.bac) d = diemBac(i); }); return d; },
    veBen: function (khoa) {
      var g = S.g, h = '';
      for (var i = g.n - 1; i >= 0; i--) {
        var qua = i < g.bac || (i === g.bac && g.len);
        h += '<li class="obc-bac' + (qua ? ' is-qua' : i === g.bac && !g.roi ? ' is-dang' : '') + (g.an.indexOf(i) >= 0 ? ' is-an' : '') + '">' +
          '<span class="obc-bac-so">' + (i + 1) + '</span><b>' + diemBac(i) + '</b>' + (g.an.indexOf(i) >= 0 ? hinh('shield') : '') + '</li>';
      }
      $('#obcBacs').innerHTML = h;
      $('#obcGiu').innerHTML = 'Đang giữ <b>' + g.giu + '</b> điểm · mốc an toàn ' + hinh('shield');
      $('#obcTg').innerHTML =
        '<button type="button" class="obc-tg-nut" data-act="tg50"' + (g.da50 || khoa ? ' disabled' : '') + '>50:50</button>' +
        '<button type="button" class="obc-tg-nut" data-act="tgDoi"' + (g.daDoi || khoa ? ' disabled' : '') + '>🔄 Đổi câu</button>' +
        '<button type="button" class="obc-tg-nut is-dung" data-act="tgDung"' + (khoa || !g.giu ? ' disabled' : '') + ' title="Dừng lại và giữ ' + g.giu + ' điểm">✋ Dừng · ' + g.giu + '</button>';
      datTt('Bậc <b>' + Math.min(g.n, g.bac + 1) + '</b>/' + g.n);
    },
    cau: function () {
      var g = S.g;
      g.c = taoCau(khoBac(g.bac, g.n));
      g.len = false;
      if (!g.c) { THANG.ket(); return; }
      THANG.veCau();
    },
    veCau: function () {
      var g = S.g;
      THANG.veBen(false);
      g.ctl = veHoi($('#obcCau'), g.c, { nhan: 'Bậc ' + (g.bac + 1) + ' · ' + diemBac(g.bac) + ' điểm' }, function (dung, them) {
        ghi(g, g.c, dung);
        if (dung) {
          g.giu = diemBac(g.bac);
          g.len = true;
          THANG.veBen(true);
          if (g.bac >= g.n - 1) { T.keuThang(); nutTiep(them, 'Xem kết quả ▶', THANG.ket, '🏆 Em đã chinh phục đỉnh thang — ' + g.giu + ' điểm!'); }
          else {
            nutTiep(them, 'Lên bậc ' + (g.bac + 2) + ' ▶', function () { g.bac++; THANG.cau(); },
              'Giữ <b>' + g.giu + '</b> điểm' + (g.an.indexOf(g.bac) >= 0 ? ' — 🛡️ đây là mốc an toàn!' : ''));
          }
        } else {
          g.roi = true;
          g.giu = THANG.anDuoi(g);
          THANG.veBen(true);
          nutTiep(them, 'Xem kết quả ▶', THANG.ket, g.giu ? '🛡️ Rơi về mốc an toàn — em giữ <b>' + g.giu + '</b> điểm.' : 'Chưa qua mốc an toàn nào nên chưa có điểm.');
        }
      });
    },
    tg50: function () { var g = S.g; if (g.da50 || !g.ctl) return; g.da50 = true; g.ctl.an50(); THANG.veBen(false); },
    tgDoi: function () {
      var g = S.g;
      if (g.daDoi) return;
      var c = taoCau(khoBac(g.bac, g.n));
      if (!c) return;
      g.daDoi = true; g.c = c; im();
      THANG.veCau();
    },
    tgDung: function (b) {
      var g = S.g;
      if (!b.hasAttribute('data-chac')) { b.setAttribute('data-chac', '1'); b.textContent = 'Bấm lần nữa để dừng'; sau(2500, function () { if (S.g === g && !g.len && !g.roi) THANG.veBen(false); }); return; }
      g.dungTay = true;
      THANG.ket();
    },
    ket: function () {
      var g = S.g, dinh = g.len && g.bac >= g.n - 1;
      ketQua({
        mode: 'thang', diem: g.giu, thang: dinh ? true : g.roi ? false : undefined,
        loi: dinh ? 'Chinh phục đỉnh thang!' : g.roi ? (g.giu ? 'Rơi về mốc an toàn' : 'Tiếc quá!') : g.dungTay ? 'Dừng đúng lúc!' : '',
        ct: 'Qua <b>' + (g.len ? g.bac + 1 : g.bac) + '</b>/' + g.n + ' bậc' + (g.da50 || g.daDoi ? ' · đã dùng: ' + [g.da50 ? '50:50' : '', g.daDoi ? 'đổi câu' : ''].filter(Boolean).join(', ') : ''),
        choiLai: THANG.bat
      });
    }
  };

  /* =================== DO MIN =================== */
  var MANG = 3;
  var MIN = {
    bat: function () {
      var g = batVan('min');
      g.n = S.pref.minHang; g.tren = 0; g.mang = MANG; g.dang = -1; g.het = false; g.hang = [];
      for (var i = 0; i < g.n; i++) g.hang.push([0, 0, 0]); // 0 chua mo, 1 co (dung), 2 min no
      khung('min', '', '<div class="obc-min"><div class="obc-min-tren"><p class="obc-min-tim" id="obcTim"></p><p class="obc-min-moi" id="obcMinMoi"></p></div>' +
        '<div class="obc-min-bai" id="obcBai"></div><p class="obc-luat">Đúng: cắm cờ ' + hinh('flag') + ' và lên hàng trên. Sai: ' + hinh('boom') + ' mìn nổ, mất 1 mạng, chọn ô khác cùng hàng. Câu khó dần theo hàng.</p></div>' +
        '<div class="obc-to" id="obcTo" hidden><div class="obc-to-the" id="obcToThe"></div></div>');
      MIN.ve();
    },
    ve: function (vua) {
      var g = S.g, tim = '', bai = '<div class="obc-min-moc">' + hinh('goal') + ' Đích</div>';
      for (var t = 0; t < MANG; t++) tim += hinh(t < g.mang ? 'heart' : 'heart-empty');
      for (var r = g.n - 1; r >= 0; r--) {
        var dangO = r === g.tren && !g.het;
        bai += '<div class="obc-min-hang' + (dangO ? ' is-dang' : r < g.tren ? ' is-qua' : '') + '"><span class="obc-min-so">' + (r + 1) + '</span>';
        for (var c = 0; c < 3; c++) {
          var v = g.hang[r][c], moi = vua && vua[0] === r && vua[1] === c ? ' is-vua' : '';
          if (v === 1) bai += '<div class="obc-min-o is-co' + moi + '">' + hinh('flag') + '</div>';
          else if (v === 2) bai += '<div class="obc-min-o is-no' + moi + '">' + hinh('boom') + '</div>';
          else if (dangO) bai += '<button type="button" class="obc-min-o is-mo" data-act="oMin" data-v="' + c + '">' + 'ABC'.charAt(c) + '</button>';
          else bai += '<div class="obc-min-o is-kin">' + (r < g.tren ? '·' : '?') + '</div>';
        }
        bai += '</div>';
      }
      bai += '<div class="obc-min-moc">' + hinh('kid') + ' Xuất phát</div>';
      $('#obcBai').innerHTML = bai;
      $('#obcTim').innerHTML = tim;
      $('#obcTim').setAttribute('aria-label', 'Còn ' + g.mang + ' mạng');
      $('#obcMinMoi').innerHTML = g.het ? (g.tren >= g.n ? '🏁 Về đích!' : '💥 Hết mạng rồi!') : 'Chọn một ô ở <b>hàng ' + (g.tren + 1) + '</b>';
      datTt('Hàng <b>' + Math.min(g.n, g.tren + 1) + '</b>/' + g.n);
      var dang = $('.obc-min-hang.is-dang');
      if (dang) cuon(dang);
    },
    mo: function (b) {
      var g = S.g, c = +b.getAttribute('data-v');
      if (g.het || g.dang >= 0 || g.hang[g.tren][c] !== 0) return;
      var q = taoCau(khoBac(g.tren, g.n));
      if (!q) return;
      g.dang = c;
      $('#obcTo').hidden = false;
      veHoi($('#obcToThe'), q, { nhan: 'Hàng ' + (g.tren + 1) + ' · ô ' + 'ABC'.charAt(c) }, function (dung, them) {
        ghi(g, q, dung);
        var r = g.tren, xong;
        if (dung) { g.hang[r][c] = 1; g.tren++; xong = g.tren >= g.n; }
        else { g.hang[r][c] = 2; g.mang--; xong = g.mang <= 0 || g.hang[r].every(function (x) { return x === 2; }); }
        nutTiep(them, xong ? 'Xem kết quả ▶' : dung ? 'Lên hàng ' + (g.tren + 1) + ' ▶' : 'Chọn ô khác ▶', function () {
          g.dang = -1;
          $('#obcTo').hidden = true;
          $('#obcToThe').innerHTML = '';
          if (xong) { g.het = true; MIN.ve([r, c]); if (g.tren >= g.n) T.keuThang(); sau(900, MIN.ket); } else MIN.ve([r, c]);
        }, dung ? '🚩 Cắm cờ — tiến lên!' : '💥 Mìn nổ — còn <b>' + g.mang + '</b> mạng.');
      });
      $('#obcTo').scrollTop = 0;
    },
    ket: function () {
      var g = S.g, ve = g.tren >= g.n;
      ketQua({
        mode: 'min', diem: g.tren * 100 + (ve ? g.mang * 50 : 0), thang: ve,
        loi: ve ? (g.mang === MANG ? 'Về đích không mất mạng nào!' : 'Về đích!') : 'Dừng ở hàng ' + (g.tren + 1),
        ct: 'Vượt <b>' + g.tren + '</b>/' + g.n + ' hàng · còn ' + g.mang + ' mạng' + (ve && g.mang ? ' (+' + g.mang * 50 + ' điểm thưởng)' : ''),
        choiLai: MIN.bat
      });
    }
  };

  /* =================== SAN KHO BAU =================== */
  function chonKhoa() {
    var P = S.P, ung = [], thay = {};
    function them(zh, vn) { if (!thay[zh] && coHan(zh)) { thay[zh] = 1; ung.push({ zh: zh, vn: vn || '' }); } }
    P.sorts.forEach(function (s) { var k = K._khoaZh(s.answer); if (k.length >= 3 && k.length <= 6) them(k, (P.nghia[k] || {}).vn || s.context); });
    P.vocab.forEach(function (v) {
      var k = K._khoaZh(v.ex_zh);
      if (k.length >= 3 && k.length <= 6) them(k, v.ex_vn);
      if (K._khoaZh(v.zh).length >= 2) them(K._khoaZh(v.zh), v.vn);
    });
    var dai = ung.filter(function (x) { return x.zh.length >= 3; });
    var ds = dai.length >= 3 ? dai : ung;
    return ds.length ? ds[Math.floor(Math.random() * ds.length)] : null;
  }
  var KB = {
    bat: function () {
      var g = batVan('kb');
      g.bi = chonKhoa();
      if (!g.bi) { khung('kb', '', '<p class="obc-thieu">Các bài em chọn chưa có từ / câu đủ dài để làm từ khoá. Chọn thêm bài rồi thử lại nhé.</p>'); return; }
      g.chu = g.bi.zh.split('');
      g.n = Math.max(2, Math.min(g.chu.length, 6));
      g.i = 0; g.mo = {}; g.moi = -1; g.mo1 = null; g.thuong = 0;
      g.conAn = tron(g.chu.map(function (_, i) { return i; }));
      khung('kb', '', '<div class="obc-kb"><div class="obc-kb-dau" id="obcKbDau"></div><div id="obcCau"></div><div class="obc-kb-duoi" id="obcKbDuoi"></div></div>');
      KB.cau();
    },
    veDau: function () {
      var g = S.g, soMo = Object.keys(g.mo).length, mo = g.mo1 === true;
      $('#obcKbDau').innerHTML = '<span class="obc-kb-ruong' + (mo ? ' is-mo' : '') + '">' + hinh(mo ? 'chest-open' : 'chest-closed') + '</span><div class="obc-kb-phai">' +
        '<p class="obc-kb-tit">Từ khoá bí mật — ' + g.chu.length + ' chữ</p>' +
        '<div class="obc-kb-khoa">' + g.chu.map(function (ch, i) {
          var hien = g.mo[i] || g.mo1 !== null;
          return '<span class="obc-kb-o' + (hien ? ' is-mo' : '') + (i === g.moi ? ' is-vua' : '') + '"><b lang="zh" class="zh">' + (hien ? esc(ch) : '?') + '</b></span>';
        }).join('') + '</div></div>';
      datTt('Lật <b>' + soMo + '</b>/' + g.chu.length);
    },
    cau: function () {
      var g = S.g;
      var c = taoCau(1 + (g.i % 3));
      if (!c) { KB.doan(); return; }
      g.moi = -1;
      KB.veDau();
      $('#obcKbDuoi').innerHTML = g.i ? '<button type="button" class="obc-btn2 obc-kb-doan" data-act="kbDoan">🗝️ Em đoán được rồi — mở rương ngay</button>' : '';
      veHoi($('#obcCau'), c, { nhan: 'Câu ' + (g.i + 1) + '/' + g.n }, function (dung, them) {
        ghi(g, c, dung);
        $('#obcKbDuoi').innerHTML = '';
        if (dung) { var i = g.conAn.shift(); if (i != null) { g.mo[i] = 1; g.moi = i; } }
        g.i++;
        KB.veDau();
        var het = g.i >= g.n || !g.conAn.length;
        nutTiep(them, het ? (g.conAn.length ? '🗝️ Ghép từ khoá ▶' : '🗝️ Mở rương ▶') : 'Câu tiếp ▶', function () { if (het) KB.doan(); else KB.cau(); },
          dung ? '✨ Lật được 1 chữ của từ khoá!' : 'Chưa lật được chữ nào ở câu này.');
      });
    },
    // Ghep tu khoa: cac o da lat giu nguyen, o con thieu em chon chu trong kho (co chu gay nhieu). 2 lan thu.
    doan: function () {
      var g = S.g;
      if (g.dn) return;
      im();
      $('#obcKbDuoi').innerHTML = '';
      g.moi = -1;
      if (!g.conAn.length) { g.mo1 = true; KB.xongDoan(true, true); return; }
      var thieu = g.conAn.map(function (i) { return g.chu[i]; });
      var nhieu = [], thay = {};
      g.chu.forEach(function (ch) { thay[ch] = 1; });
      tron(S.P.vocab).forEach(function (v) { v.zh.split('').forEach(function (ch) { if (coHan(ch) && !thay[ch] && nhieu.length < Math.max(3, 7 - thieu.length)) { thay[ch] = 1; nhieu.push(ch); } }); });
      g.dn = { o: g.chu.map(function (ch, i) { return g.mo[i] ? { ch: ch, khoa: true } : null; }), kho: tron(thieu.concat(nhieu)).map(function (ch) { return { ch: ch, da: false }; }), lan: 2, an: g.conAn.length };
      KB.veDau();
      KB.veDoan();
    },
    veDoan: function (rung) {
      var g = S.g, d = g.dn, du = d.o.every(function (x) { return x; });
      $('#obcCau').innerHTML = '<div class="obc-cau is-moi obc-kb-ghep' + (rung ? ' is-rung' : '') + '"><div class="obc-cau-hd"><span class="obc-loai"><i aria-hidden="true">🗝️</i>Giải từ khoá</span><span class="obc-nhan">Còn ' + d.lan + ' lần thử</span></div>' +
        '<p class="obc-lenh">Chạm các chữ bên dưới để điền vào ô còn thiếu</p>' +
        '<div class="obc-kb-ghep-o">' + d.o.map(function (x, i) {
          return x ? (x.khoa ? '<span class="obc-kb-o is-mo"><b lang="zh" class="zh">' + esc(x.ch) + '</b></span>'
            : '<button type="button" class="obc-kb-o is-dien" data-act="kbBo" data-v="' + i + '"><b lang="zh" class="zh">' + esc(x.ch) + '</b></button>')
            : '<span class="obc-kb-o is-trong"><b>?</b></span>';
        }).join('') + '</div>' +
        '<div class="obc-kb-kho">' + d.kho.map(function (x, i) {
          return '<button type="button" class="obc-kb-chu zh" lang="zh" data-act="kbChu" data-v="' + i + '"' + (x.da ? ' disabled' : '') + '>' + esc(x.ch) + '</button>';
        }).join('') + '</div>' +
        '<div class="obc-kq-them"><button type="button" class="obc-go" data-act="kbMo"' + (du ? '' : ' disabled') + '>🗝️ Mở rương</button></div></div>';
    },
    chu: function (b) {
      var d = S.g.dn, i = +b.getAttribute('data-v'), x = d.kho[i];
      if (!x || x.da) return;
      var o = d.o.indexOf(null);
      if (o < 0) return;
      x.da = true; d.o[o] = { ch: x.ch, kho: i };
      T.rung(15);
      KB.veDoan();
    },
    bo: function (b) {
      var d = S.g.dn, i = +b.getAttribute('data-v'), x = d.o[i];
      if (!x || x.khoa) return;
      d.kho[x.kho].da = false; d.o[i] = null;
      KB.veDoan();
    },
    mo: function () {
      var g = S.g, d = g.dn;
      if (!d.o.every(function (x) { return x; })) return;
      var dung = d.o.map(function (x) { return x.ch; }).join('') === g.bi.zh;
      if (dung) { g.thuong = d.an * 50; g.mo1 = true; KB.xongDoan(true, false); return; }
      d.lan--;
      T.keuSai(); T.rung(120);
      if (d.lan <= 0) { g.mo1 = false; KB.xongDoan(false, false); return; }
      // giu lai chu dat dung cho, tra chu sai ve kho
      d.o = d.o.map(function (x, i) {
        if (x.khoa) return x;
        if (x.ch === g.chu[i]) return { ch: x.ch, khoa: true };
        d.kho[x.kho].da = false;
        return null;
      });
      KB.veDoan(true);
    },
    xongDoan: function (mo, tuMo) {
      var g = S.g;
      if (mo) { T.keuThang(); if (window.SaoGame && !tuMo) window.SaoGame.dung(); }
      KB.veDau();
      sau(300, function () { T.doc(g.bi.zh); });
      $('#obcCau').innerHTML = '<div class="obc-cau is-moi obc-kb-xong ' + (mo ? 'da-dung' : 'da-sai') + '"><p class="obc-kb-loi">' +
        (mo ? (tuMo ? '💎 Em lật hết cả từ khoá — rương tự mở!' : '💎 Chính xác — rương đã mở!') : '🔒 Chưa mở được rương lần này') + '</p>' +
        '<p class="obc-kb-dap"><b lang="zh" class="zh">' + esc(g.bi.zh) + '</b>' + (g.bi.vn ? '<span>' + esc(g.bi.vn) + '</span>' : '') + '</p>' +
        '<div class="obc-kq-them"><button type="button" class="obc-go" data-act="kbKet" data-tiep>Xem kết quả ▶</button></div></div>';
    },
    ket: function () {
      var g = S.g, mo = g.mo1 === true;
      ketQua({
        mode: 'kb', diem: g.dung * 100 + (mo ? 300 + g.thuong : 0), thang: mo,
        loi: mo ? 'Mở được rương kho báu!' : 'Chưa mở được rương',
        ct: 'Từ khoá: <b lang="zh" class="zh">' + esc(g.bi.zh) + '</b>' + (g.bi.vn ? ' — ' + esc(g.bi.vn) : '') +
          (mo ? ' · 💎 mở rương +300' + (g.thuong ? ' · đoán sớm +' + g.thuong : '') : ''),
        choiLai: KB.bat
      });
    }
  };

  /* =================== GHE NONG =================== */
  // The tu vung don dap trong 60 / 90 giay: nghia <-> chu Han, so dap an tang dan (2 -> 3 -> 4).
  // Dung lien 5 the: +2 giay (dong ho khong vuot qua muc ban dau). Sai: hien dap an, khoa 1,2 giay (mat thoi gian). May tu cham.
  var GHE = {
    the: function (g) {
      for (var lan = 0; lan < 6; lan++) {
        var c = taoCau(0, [g.i % 2 ? 'viet' : 'nghia']);
        if (!c || c.k || !c.opts) continue;
        var so = g.i < 5 ? 2 : g.i < 12 ? 3 : 4;
        if (c.opts.length > so) {
          var dung = c.opts[c.dung];
          var saiDs = tron(c.opts.filter(function (_, i) { return i !== c.dung; })).slice(0, so - 1);
          c.opts = tron([dung].concat(saiDs));
          c.dung = c.opts.indexOf(dung);
        }
        return c;
      }
      return null;
    },
    bat: function () {
      var g = batVan('ghe');
      g.giay = S.pref.gheGiay; g.conMs = g.giay * 1000; g.chay = false; g.xong = false; g.i = 0; g.sai = 0; g.bo = 0; g.khoa = false; g.the = null; g.sot = [];
      khung('ghe', '', '<div class="obc-ghe"><div class="obc-ghe-tren">' +
        '<div class="obc-dh">' + hinh('flame', 'obc-dh-lua') + '<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" class="obc-dh-vien"/><circle cx="60" cy="60" r="52" class="obc-dh-nen"/>' +
          '<circle cx="60" cy="60" r="52" class="obc-dh-vong" id="obcVong" stroke-dasharray="' + VONG.toFixed(1) + '"/></svg><b class="obc-dh-so" id="obcGiay"></b></div>' +
        '<div class="obc-ghe-dem" id="obcGheDem"></div></div>' +
        '<div class="obc-ghe-the" id="obcThe"></div><div class="obc-ghe-opts" id="obcGheOpts"></div>' +
        '<div class="obc-ghe-duoi"><button type="button" class="obc-btn2" data-act="gheBo" id="obcGheBo" hidden>⤼ Bỏ qua</button><p class="obc-ghe-truoc" id="obcTruoc">&nbsp;</p></div></div>');
      $('#obcThe').innerHTML = '<p class="obc-ghe-lenh">' + g.giay + ' giây</p><p class="obc-ghe-meo">Chạm đáp án thật nhanh. Đúng liền 5 thẻ được <b>+2 giây</b>; sai thì thẻ bị khoá một nhịp.</p>' +
        '<button type="button" class="obc-go" data-act="gheBat" data-tiep>🔥 Bắt đầu</button>';
      GHE.veDem(); GHE.veGio();
    },
    veDem: function () {
      var g = S.g;
      $('#obcGheDem').innerHTML = '<span class="is-dung">✓ <b>' + g.dung + '</b></span><span class="is-sai">✗ <b>' + (g.sai + g.bo) + '</b></span><span class="is-chuoi">🔥 <b>' + g.chuoi + '</b></span>';
      datTt('<b>' + g.dung + '</b> từ');
    },
    veGio: function () {
      var g = S.g, v = $('#obcVong'), so = $('#obcGiay');
      if (!v) return;
      var con = Math.max(0, g.conMs);
      v.setAttribute('stroke-dashoffset', (VONG * (1 - Math.min(1, con / (g.giay * 1000)))).toFixed(1));
      v.classList.toggle('is-gap', con <= 10000);
      so.textContent = Math.ceil(con / 1000);
    },
    chay: function () {
      var g = S.g;
      if (g.chay || g.xong) return;
      g.chay = true;
      g.tLast = Date.now();
      $('#obcGheBo').hidden = false;
      var giayCu = Math.ceil(g.conMs / 1000);
      S.dk.push(setInterval(function () {
        if (S.g !== g || g.xong) return;
        var now = Date.now();
        g.conMs -= now - g.tLast;
        g.tLast = now;
        var giay = Math.ceil(g.conMs / 1000);
        if (giay !== giayCu) { giayCu = giay; if (giay <= 5 && giay > 0) T.keu(520 + giay * 40, 0.06, 'square'); }
        GHE.veGio();
        if (g.conMs <= 0) GHE.het();
      }, 100));
      GHE.moi();
    },
    moi: function (nhay) {
      var g = S.g;
      if (g.xong) return;
      g.the = GHE.the(g);
      g.i++;
      g.khoa = false;
      var el = $('#obcThe'), c = g.the;
      if (!c) { GHE.het(); return; }
      var laZh = coHan(c.zh);
      el.innerHTML = '<p class="obc-ghe-lenh">' + (c.loai === 'viet' ? 'Chữ Hán nào?' : 'Nghĩa là gì?') + '</p>' +
        '<p class="obc-ghe-lon' + (laZh ? ' zh' : '') + (String(c.zh).length > (laZh ? 4 : 18) ? ' is-dai' : '') + '"' + (laZh ? ' lang="zh"' : '') + '>' + esc(c.zh) + '</p>';
      el.className = 'obc-ghe-the';
      if (nhay) { void el.offsetWidth; el.className = 'obc-ghe-the is-' + nhay; }
      $('#obcGheOpts').className = 'obc-ghe-opts n' + c.opts.length;
      $('#obcGheOpts').innerHTML = c.opts.map(function (o, i) {
        return '<button type="button" class="obc-ghe-o' + (coHan(o) ? ' zh' : '') + '" data-act="gheChon" data-v="' + i + '"' + (coHan(o) ? ' lang="zh"' : '') + '>' + esc(o) + '</button>';
      }).join('');
      S.phim = function (e) {
        var k = String(e.key || '').toLowerCase(), i = 'abcd'.indexOf(k);
        if (k.length === 1 && i < 0) i = '1234'.indexOf(k);
        if (k.length === 1 && i >= 0 && i < c.opts.length) { GHE.chon(i); return true; }
        return false;
      };
    },
    truoc: function (c, kieu) {
      $('#obcTruoc').innerHTML = (kieu === 'dung' ? '✓ ' : kieu === 'sai' ? '✗ ' : '⤼ ') + '<b lang="zh" class="zh">' + esc(c.tu.zh) + '</b> · ' + esc(c.tu.vn);
      $('#obcTruoc').className = 'obc-ghe-truoc is-' + kieu;
    },
    chon: function (i) {
      var g = S.g, c = g.the;
      if (!g.chay || g.xong || g.khoa || !c) return;
      g.khoa = true;
      var dung = i === c.dung;
      Array.prototype.forEach.call($('#obcGheOpts').children, function (b, k) { b.disabled = true; b.classList.add(k === c.dung ? 'is-dung' : k === i ? 'is-sai' : 'is-mo'); });
      ghi(g, c, dung);
      GHE.truoc(c, dung ? 'dung' : 'sai');
      if (dung) {
        T.keuDung();
        if (g.chuoi % 5 === 0) { g.conMs = Math.min(g.giay * 1000, g.conMs + 2000); GHE.bay('🔥 ' + g.chuoi + ' thẻ liền · +2 giây'); }
        GHE.veDem();
        sau(220, function () { if (S.g === g) GHE.moi('dung'); });
      } else {
        g.sai++; g.sot.push(c);
        T.keuSai(); T.rung(120);
        $('#obcThe').className = 'obc-ghe-the is-sai';
        GHE.veDem();
        sau(1200, function () { if (S.g === g) GHE.moi('bo'); });
      }
    },
    boQua: function () {
      var g = S.g, c = g.the;
      if (!g.chay || g.xong || g.khoa || !c) return;
      g.bo++; g.chuoi = 0; g.sot.push(c);
      g.ds.push({ c: c, dung: false });
      if (window.SaoGame) window.SaoGame.sai();
      T.keu(440, 0.1, 'sine');
      GHE.truoc(c, 'bo');
      GHE.veDem();
      GHE.moi('bo');
    },
    bay: function (chu) {
      var b = T.tao('span', 'obc-ghe-bay', esc(chu));
      var dh = $('.obc-dh');
      if (!dh) return;
      dh.appendChild(b);
      setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 1100);
    },
    het: function () {
      var g = S.g;
      if (g.xong) return;
      g.xong = true; g.chay = false; g.conMs = 0;
      S.dk.forEach(clearInterval); S.dk = [];
      S.phim = null;
      GHE.veGio();
      T.keu(880, 0.25, 'square'); T.keu(660, 0.25, 'square', 0.28); T.keu(440, 0.5, 'square', 0.56);
      $('#obcThe').className = 'obc-ghe-the';
      $('#obcThe').innerHTML = '<p class="obc-ghe-het">⏰ Hết giờ!</p>';
      $('#obcGheOpts').innerHTML = '';
      $('#obcGheBo').hidden = true;
      sau(1300, GHE.ket);
    },
    ket: function () {
      var g = S.g, tong = g.ds.length;
      ketQua({
        mode: 'ghe', diem: g.dung * 10 + g.chuoiMax * 5,
        loi: g.dung >= 20 ? 'Ghế nóng rực lửa!' : '',
        ct: 'Trả lời <b>' + tong + '</b> từ trong ' + g.giay + ' giây · đúng <b>' + g.dung + '</b> · sai ' + g.sai + ' · bỏ qua ' + g.bo +
          ' · chính xác <b>' + (tong ? Math.round(100 * g.dung / tong) : 0) + '%</b>',
        choiLai: GHE.bat
      });
    }
  };

  /* =================== KIEM TRA THEO DANG / ON LAI CAU SAI (chay lan luot) =================== */
  // tuy: { mode, tong, lay(i) -> cau | null, choiLai }
  function chayDs(tuy) {
    var g = batVan(tuy.mode);
    g.tong = tuy.tong; g.i = 0;
    khung(tuy.mode, '', '<div class="obc-dang"><div class="obc-tien"><i id="obcTien"></i></div><div id="obcCau"></div></div>');
    function ket() {
      ketQua({ mode: tuy.mode, diem: g.dung * 100, ct: tuy.ct || '', choiLai: tuy.choiLai, khongKl: tuy.mode === 'sai' });
    }
    function cau() {
      var c = g.i < g.tong ? tuy.lay(g.i) : null;
      if (!c) { ket(); return; }
      $('#obcTien').style.width = (100 * g.i / g.tong) + '%';
      datTt('Câu <b>' + (g.i + 1) + '</b>/' + g.tong);
      veHoi($('#obcCau'), c, { nhan: 'Câu ' + (g.i + 1) + '/' + g.tong }, function (dung, them) {
        ghi(g, c, dung);
        g.i++;
        $('#obcTien').style.width = (100 * g.i / g.tong) + '%';
        datTt('Đúng <b>' + g.dung + '</b>/' + g.i);
        nutTiep(them, g.i >= g.tong ? 'Xem kết quả ▶' : 'Câu tiếp ▶', cau);
      });
    }
    cau();
  }
  function dangLoai() {
    var ds = (S.pref.dangLoai || S.loai).filter(function (l) { return S.loai.indexOf(l) >= 0; });
    return ds.length ? ds : S.loai.slice();
  }
  var DANG = {
    bat: function () {
      var ds = dangLoai();
      chayDs({ mode: 'dang', tong: S.pref.dangSo, lay: function () { return taoCau(0, ds); }, choiLai: DANG.bat,
        ct: 'Dạng: ' + ds.map(function (l) { return TEN[l][1]; }).join(', ') });
    }
  };
  function onLaiSai(ds) {
    var bo = tron(ds).map(xaoLai);
    chayDs({ mode: 'sai', tong: bo.length, lay: function (i) { return bo[i]; }, choiLai: function () { onLaiSai(ds); } });
  }

  var TRO = { thang: THANG, min: MIN, kb: KB, ghe: GHE, dang: DANG };

  /* ---------------- man ket qua: sao, diem, ky luc, cau sai ---------------- */
  // kq: { mode, diem, thang, loi, ct, choiLai, khongKl }
  function ketQua(kq) {
    var g = S.g;
    huyHen(); im();
    S.phim = null;
    var tong = g.ds.length, dung = g.dung;
    var pt = tong ? dung / tong : 0;
    var sao = kq.thang === false ? (pt >= 0.6 ? 1 : 0) : pt >= 0.9 ? 3 : pt >= 0.7 ? 2 : pt >= 0.4 ? 1 : 0;
    if (kq.thang === true && sao < 2) sao = 2;
    var kl = kq.khongKl ? null : T.kyLuc(KEY + '_' + kq.mode, kq.diem);
    if (!kq.khongKl) T.kyLuc(KEY, kq.diem);
    var ngay = T.ghiNgayHoc({ tong: tong });
    // cau sai (moi cau mot lan)
    var sai = [], thay = {};
    g.ds.forEach(function (x) { if (!x.dung && !thay[x.c.key || x.c.zh]) { thay[x.c.key || x.c.zh] = 1; sai.push(x.c); } });
    var m = MODE[kq.mode] || { sp: 'books', ten: 'Ôn lại câu sai' };
    var bang = g.ds.length && kq.mode !== 'ghe' ? '<details class="obc-kq-bang"' + (kq.mode === 'dang' ? ' open' : '') + '><summary>Bảng kết quả ' + tong + ' câu</summary><ol>' + g.ds.map(function (x) {
      var t = tomTat(x.c);
      return '<li class="' + (x.dung ? 'is-dung' : 'is-sai') + '"><span class="obc-kq-dau">' + (x.dung ? '✓' : '✗') + '</span><span class="obc-kq-hoi' + (t.hoiZh ? ' zh' : '') + '">' + esc(t.hoi) + '</span>' +
        '<small>' + esc((TEN[x.c.loai] || ['', ''])[1]) + '</small></li>';
    }).join('') + '</ol></details>' : '';
    var dsSai = sai.length ? '<div class="obc-kq-sai"><p class="obc-kq-sai-tit">' + (kq.mode === 'ghe' ? 'Từ cần ôn lại' : 'Câu sai cần xem lại') + ' (' + sai.length + ')</p><ul>' + sai.slice(0, 30).map(function (c) {
      var t = tomTat(c);
      return '<li><span class="obc-kq-hoi' + (t.hoiZh ? ' zh' : '') + '">' + esc(t.hoi) + '</span><b' + (t.zh ? ' lang="zh" class="zh"' : '') + '>' + esc(t.dap) + '</b>' +
        (c.why ? '<small>💡 ' + esc(c.why) + '</small>' : '') + '</li>';
    }).join('') + '</ul></div>' : (tong ? '<p class="obc-kq-het-sai">🎉 Không sai câu nào!</p>' : '');
    var saoHtml = window.SaoGame ? window.SaoGame.tongKetHtml() : '';
    S.man.innerHTML = '<div class="obc-ket">' +
      '<div class="obc-ket-the">' +
        '<p class="obc-ket-mode">' + hinh(m.sp) + esc(m.ten) + '</p>' +
        '<div class="obc-ket-sao" aria-label="' + sao + ' sao">' + [0, 1, 2].map(function (i) {
          return '<span class="' + (i < sao ? 'on' : '') + '" style="animation-delay:' + (i * 0.18) + 's">' + T.anh(i < sao ? 'ui-star' : 'ui-star-empty', 'obc-ket-saoh') + '</span>';
        }).join('') + '</div>' +
        '<h2 class="obc-ket-tit">' + esc(kq.loi || (sao >= 3 ? 'Xuất sắc!' : sao >= 2 ? 'Giỏi lắm!' : sao >= 1 ? 'Khá lắm, cố thêm chút nữa!' : 'Cố lên nhé!')) + '</h2>' +
        '<p class="obc-ket-diem">' + kq.diem + ' <small>điểm</small></p>' +
        '<p class="obc-ket-chi">Đúng <b>' + dung + '</b>/' + tong + ' câu' + (g.chuoiMax > 1 ? ' · chuỗi dài nhất <b>' + g.chuoiMax + '</b>' : '') + '</p>' +
        (kq.ct ? '<p class="obc-ket-ct">' + kq.ct + '</p>' : '') +
        (kl ? '<p class="obc-ket-kl' + (kl.moi ? ' is-moi' : '') + '">' + (kl.moi ? T.anh('ui-trophy') + ' Kỷ lục mới của em!' : '🏆 Kỷ lục của em: <b>' + Math.max(kl.cu, kq.diem) + '</b>') + '</p>' : '') +
        saoHtml +
        '<p class="obc-ket-ngay' + (ngay ? '' : ' is-chua') + '">' + (ngay ? '🔥 Đã tính 1 ngày học — giữ chuỗi ngày học của em' : 'Làm từ ' + T.SO_CAU_NGAY_HOC + ' câu trở lên để tính 1 ngày học') + '</p>' +
        '<div class="obc-ket-nut">' +
          (sai.length ? '<button type="button" class="obc-go" data-act="onSai">🔁 Ôn lại câu sai (' + sai.length + ')</button>' : '') +
          '<button type="button" class="obc-go' + (sai.length ? ' is-phu' : '') + '" data-act="choiLai">↻ Chơi lại</button>' +
          '<button type="button" class="obc-btn2" data-act="menu">← Chọn kiểu ôn khác</button>' +
        '</div>' +
      '</div>' + dsSai + bang + '</div>';
    S.man.scrollTop = 0;
    try { S.goc.scrollIntoView({ block: 'start' }); } catch (e) { /* bo qua */ }
    S.ket = { sai: sai, choiLai: kq.choiLai };
    if (window.SaoGame) window.SaoGame.batDauVan();
    if (sao >= 2) T.keuThang();
  }

  /* ---------------- danh sach kieu on + man chuan bi ---------------- */
  function seg(key, ds, cur, dv) {
    return '<span class="obc-seg" role="group">' + ds.map(function (v) {
      return '<button type="button" data-act="pref" data-key="' + key + '" data-v="' + v + '" class="' + (v === cur ? 'is-on' : '') + '" aria-pressed="' + (v === cur) + '">' + v + (dv || '') + '</button>';
    }).join('') + '</span>';
  }
  function coMode(m) {
    if (!S.loai.length) return false;
    if (m === 'ghe') return S.P.vocab.length >= 4;
    return true;
  }
  function veMenu() {
    huyHen(); im();
    S.g = null; S.phim = null;
    var P = S.P;
    if (!S.loai.length) {
      S.man.innerHTML = '<div class="obc-rong">' + hinh('books', 'obc-rong-ic') + '<h2>Chưa đủ dữ liệu để ôn</h2><p>Những bài em chọn chưa có từ vựng hay câu luyện tập. Bấm “← Đổi bài · đổi trò” để chọn bài khác nhé.</p></div>';
      return;
    }
    var kho = [P.vocab.length + ' từ', P.mcs.length ? P.mcs.length + ' câu ngữ pháp' : '', P.sorts.length ? P.sorts.length + ' câu xếp' : ''].filter(Boolean).join(' · ');
    S.man.innerHTML = '<div class="obc-menu">' +
      '<header class="obc-dau"><span class="obc-huy" lang="zh" aria-hidden="true">温</span><div><h2>Ôn bài cũ</h2>' +
        '<p>' + esc(S.o.nhan || '') + ' <span>· ' + kho + '</span></p></div></header>' +
      '<h3 class="obc-h"><i aria-hidden="true">🧍</i>Tự ôn một mình <small>máy tự chấm, có đáp án và giải thích sau mỗi câu</small></h3>' +
      '<div class="obc-modes">' + MODE_DS.map(function (k) {
        var m = MODE[k], kl = T.docKyLuc(KEY + '_' + k), co = coMode(k);
        return '<button type="button" class="obc-mode" data-act="chuanBi" data-v="' + k + '"' + (co ? '' : ' disabled') + '>' +
          '<span class="obc-mode-ic">' + hinh(m.sp) + '</span><span class="obc-mode-chu"><b>' + esc(m.ten) + '</b><small>' + esc(co ? m.mo : 'Cần ít nhất 4 từ vựng — chọn thêm bài nhé.') + '</small>' +
          (kl > 0 ? '<em>🏆 Kỷ lục ' + kl + '</em>' : '') + '</span></button>';
      }).join('') + '</div>' +
      '<h3 class="obc-h"><i aria-hidden="true">👫</i>Ôn với bạn bằng mã QR <small>em mở phòng, bạn quét mã bằng điện thoại là vào chơi — bạn không cần tài khoản</small></h3>' +
      '<div class="obc-modes obc-modes-qr">' + ['nhip', 'dua', 'ghe'].map(function (k) {
        var m = QR[k], co = k === 'ghe' ? S.P.vocab.length >= 4 : true;
        return '<button type="button" class="obc-mode is-qr" data-act="chuanBiQr" data-v="' + k + '"' + (co ? '' : ' disabled') + '>' +
          '<span class="obc-mode-ic is-emoji" aria-hidden="true">' + m.ic + '</span><span class="obc-mode-chu"><b>' + esc(m.ten) + '</b><small>' + esc(m.mo) + '</small></span></button>';
      }).join('') + '</div></div>';
    S.man.scrollTop = 0;
  }
  function veChuanBi(k) {
    var m = MODE[k], p = S.pref, cai = '';
    if (k === 'thang') cai = '<div class="obc-cai-hang"><span>Số bậc</span>' + seg('thangBac', [5, 8, 10], p.thangBac) + '</div>' +
      '<p class="obc-cai-mo">Mỗi bậc một câu, càng lên cao càng khó (từ vựng → ngữ pháp → xếp câu). Hai quyền trợ giúp: <b>50:50</b> và <b>đổi câu</b>. Trả lời sai thì rơi về mốc an toàn ' + hinh('shield') + ' gần nhất; em có thể dừng lại để giữ điểm.</p>';
    else if (k === 'min') cai = '<div class="obc-cai-hang"><span>Số hàng</span>' + seg('minHang', [5, 6, 8], p.minHang) + '</div>' +
      '<p class="obc-cai-mo">Mỗi hàng chọn 1 trong 3 ô rồi trả lời. Đúng: cắm cờ, lên hàng trên. Sai: mìn nổ, mất 1 trong 3 mạng và chọn ô khác. Về đích còn mạng nào được thưởng mạng đó.</p>';
    else if (k === 'kb') cai = '<p class="obc-cai-mo">Một từ / câu ngắn trong bài được giấu đi. Mỗi câu trả lời đúng lật 1 chữ Hán. Cuối cùng (hoặc bất cứ lúc nào em đoán ra) ghép các chữ còn thiếu để mở rương — đoán càng sớm thưởng càng nhiều.</p>';
    else if (k === 'ghe') cai = '<div class="obc-cai-hang"><span>Thời gian</span>' + seg('gheGiay', [60, 90], p.gheGiay, ' giây') + '</div>' +
      '<p class="obc-cai-mo">Thẻ từ vựng hiện liên tục: chữ Hán → chọn nghĩa, nghĩa → chọn chữ Hán. Càng về sau càng nhiều đáp án. Đúng liền 5 thẻ được +2 giây; sai thì thẻ bị khoá một nhịp và hiện đáp án.</p>';
    else if (k === 'dang') {
      var bat = dangLoai();
      cai = '<div class="obc-cai-hang is-cot"><span>Dạng câu</span><div class="obc-chip-ds">' + S.loai.map(function (l) {
        var on = bat.indexOf(l) >= 0;
        return '<button type="button" class="obc-chip' + (on ? ' is-on' : '') + '" data-act="dangLoai" data-v="' + l + '" aria-pressed="' + on + '"><i aria-hidden="true">' + TEN[l][0] + '</i>' + esc(TEN[l][1]) + '</button>';
      }).join('') + '</div></div>' +
        '<div class="obc-cai-hang"><span>Số câu</span>' + seg('dangSo', [5, 10, 15, 20], p.dangSo) + '</div>' +
        '<p class="obc-cai-mo">Làm lần lượt từng câu, xem đáp án và giải thích ngay. Cuối bài có bảng kết quả và danh sách câu sai để ôn lại.</p>';
    }
    S.man.innerHTML = '<div class="obc-cb"><button type="button" class="obc-lui" data-act="menu" aria-label="Về danh sách kiểu ôn">←</button>' +
      '<div class="obc-cb-the"><span class="obc-cb-ic">' + hinh(m.sp) + '</span><h2>' + esc(m.ten) + '</h2><div class="obc-cai">' + cai + '</div>' +
      '<button type="button" class="obc-go" data-act="batTro" data-v="' + k + '" data-tiep>▶ Bắt đầu</button></div></div>';
    S.cb = k;
    S.man.scrollTop = 0;
  }

  /* =================== ON VOI BAN BANG MA QR =================== */
  // S.phong = { ma, khoa, game: 'nhip' | 'dua' | 'ghe', kieu: 'nhip' | 'dua', pid, tok, ten, lv, info, pha, poll }
  function tenMacDinh() {
    var t = '';
    try { t = localStorage.getItem('hyv_choi_ten') || ''; } catch (e) { /* bo qua */ }
    var a = auth();
    if (!t && a && a.user && a.user.name) t = String(a.user.name);
    return t.replace(/[<>]/g, '').trim().slice(0, 16);
  }
  function qrSvg(link) {
    try { var q = window.qrcode(0, 'M'); q.addData(link); q.make(); return q.createSvgTag({ cellSize: 8, margin: 2, scalable: true }); }
    catch (e) { return ''; }
  }
  function linkPhong(R) { return location.origin + (R.kieu === 'dua' ? '/dua' : '/choi') + '?ma=' + R.ma; }
  function veChuanBiQr(k, loi) {
    var m = QR[k], a = auth(), p = S.pref;
    S.cbQr = k;
    var than;
    if (!a) {
      than = '<p class="obc-cai-mo">Để <b>mở phòng</b> em cần đăng nhập tài khoản học của mình. Bạn bè vào phòng thì <b>không cần tài khoản</b> — chỉ cần quét mã QR.</p>' +
        '<a class="obc-go" href="/">Về trang chủ để đăng nhập</a>';
    } else {
      var lv = '';
      if (k === 'dua' && window.DuaCanh) {
        if (!p.lv || !window.DuaCanh.LV[p.lv]) p.lv = window.DuaCanh.THU_TU[Math.floor(Math.random() * window.DuaCanh.THU_TU.length)];
        lv = '<div class="obc-cai-hang is-cot"><span>Linh vật của em</span><div class="obc-lv" role="listbox" aria-label="Linh vật">' + window.DuaCanh.THU_TU.map(function (x) {
          return '<button type="button" class="obc-lv-o' + (p.lv === x ? ' is-on' : '') + '" data-act="chonLv" data-v="' + x + '" role="option" aria-selected="' + (p.lv === x) + '" title="' + esc(window.DuaCanh.LV[x].vn) + '">' +
            '<img src="' + window.DuaCanh.anh(x) + '" alt="' + esc(window.DuaCanh.LV[x].vn) + '" draggable="false"></button>';
        }).join('') + '</div></div>';
      }
      than = '<div class="obc-cai">' +
        '<label class="obc-cai-hang is-cot" for="obcTen"><span>Tên của em trong phòng</span><input id="obcTen" class="obc-o" maxlength="16" autocomplete="off" value="' + esc(tenMacDinh()) + '" placeholder="Ví dụ: Minh Anh"></label>' +
        lv +
        (k === 'ghe' ? '<div class="obc-cai-hang"><span>Thời gian</span>' + seg('qrGiay', [60, 90, 120], p.qrGiay, ' giây') + '</div>'
          : '<div class="obc-cai-hang"><span>Số câu</span>' + seg('qrSo', [10, 15, 20, 30], p.qrSo) + '</div>') +
        '<p class="obc-cai-mo">' + esc(m.mo) + ' ' + (k === 'ghe' ? 'Câu hỏi là từ vựng của bài (nghĩa ↔ chữ Hán).' : 'Câu hỏi: từ vựng, ngữ pháp, điền từ, xếp câu kéo thả, nối từ.') +
          ' Phòng tối đa 12 bạn, em cũng chơi cùng trên máy này.</p></div>' +
        '<p class="obc-loi" id="obcLoi" role="alert">' + (loi || '') + '</p>' +
        '<button type="button" class="obc-go" data-act="moPhong" data-v="' + k + '" data-tiep>📱 Mở phòng — hiện mã QR</button>';
    }
    S.man.innerHTML = '<div class="obc-cb"><button type="button" class="obc-lui" data-act="menu" aria-label="Về danh sách kiểu ôn">←</button>' +
      '<div class="obc-cb-the"><span class="obc-cb-ic is-emoji" aria-hidden="true">' + m.ic + '</span><h2>' + esc(m.ten) + ' <small>với bạn</small></h2>' + than + '</div></div>';
    S.man.scrollTop = 0;
  }
  function moChuanBiQr(k) {
    S.man.innerHTML = '<p class="obc-dangtai">Đang chuẩn bị…</p>';
    var can = [nap('/js/vendor/qrcode.js')];
    if (k === 'dua') can.push(nap('/js/dua-canh.js'));
    Promise.all(can).then(function () { if (S.song) veChuanBiQr(k); })
      .catch(function (e) { if (S.song) S.man.innerHTML = '<p class="obc-thieu">' + esc(e.message) + '</p>'; });
  }
  function moPhong(k, b) {
    var a = auth();
    if (!a) { veChuanBiQr(k); return; }
    var o = $('#obcTen'), ten = o ? o.value.replace(/[<>]/g, '').trim() : '';
    var loi = $('#obcLoi');
    if (!ten) { loi.textContent = 'Em nhập tên trước nhé.'; if (o) o.focus(); return; }
    b.disabled = true;
    loi.textContent = '';
    var kieu = k === 'dua' ? 'dua' : 'nhip';
    var R = { ma: '', khoa: '', game: k, kieu: kieu, pid: '', tok: '', ten: ten, lv: kieu === 'dua' ? S.pref.lv : '', info: null, pha: 'cho', poll: 0, token: a.token };
    api('POST', '/api/live/tao-hs', { kieu: kieu }, a.token).then(function (d) {
      R.ma = d.ma; R.khoa = d.khoa; R.toiDa = d.toiDa || 12;
      S.phong = R;
      return api('POST', '/api/live/' + R.ma + '/vao', { ten: ten, lv: R.lv });
    }).then(function (d) {
      R.pid = d.pid; R.tok = d.tok; R.ten = d.ten;
      try { localStorage.setItem('hyv_choi_ten', ten); } catch (e) { /* bo qua */ }
      if (!S.song || S.phong !== R) { if (S.phong === R) S.phong = null; dongPhong(R); return; }
      veSanh();
      R.poll = setInterval(taiPhong, 1500);
      taiPhong();
    }).catch(function (e) {
      if (R.ma) dongPhong(R);
      if (S.phong === R) S.phong = null;
      if (!S.song) return;
      b.disabled = false;
      if (e.d && e.d.daCo) {
        loi.innerHTML = 'Em đang có một phòng mở (mã <b>' + esc(maDep(e.d.ma)) + '</b>) — có thể ở thẻ khác hoặc máy khác. ' +
          '<button type="button" class="obc-btn3" data-act="dongCu" data-v="' + k + '">Đóng phòng đó và mở phòng mới</button>';
      } else if (e.status === 401) loi.innerHTML = 'Phiên đăng nhập đã hết hạn — <a href="/">về trang chủ đăng nhập lại</a> nhé.';
      else loi.textContent = e.message;
    });
  }
  function dongCu(k, b) {
    var a = auth();
    if (!a) return;
    b.disabled = true;
    api('POST', '/api/live/dong-hs', {}, a.token).then(function () {
      var nut = $('[data-act="moPhong"]');
      if (nut) moPhong(k, nut);
    }).catch(function (e) { b.disabled = false; var loi = $('#obcLoi'); if (loi) loi.textContent = e.message; });
  }
  // Dong phong tren may chu (khong cho tra loi) — dung ca khi roi trang
  function dongPhong(R, bao) {
    if (!R || !R.ma) return;
    clearInterval(R.poll); clearInterval(R.dem);
    var url = '/api/live/' + R.ma + '/dong?khoa=' + encodeURIComponent(R.khoa);
    var ok = false;
    if (bao && navigator.sendBeacon) { try { ok = navigator.sendBeacon(url); } catch (e) { ok = false; } }
    if (!ok) { try { fetch(url, { method: 'POST', keepalive: true }).catch(function () { /* bo qua */ }); } catch (e) { /* bo qua */ } }
    try { sessionStorage.removeItem(R.kieu === 'dua' ? 'hyv_dua' : 'hyv_choi'); } catch (e) { /* bo qua */ }
    R.ma = '';
  }
  function roiPhong(tb) {
    var R = S.phong;
    S.phong = null;
    if (R) dongPhong(R);
    if (S.lop) { if (S.lop.parentNode) S.lop.parentNode.removeChild(S.lop); S.lop = null; document.documentElement.classList.remove('obc-chu-mo'); }
    if (!S.song) return;
    veMenu();
    if (tb) S.man.insertAdjacentHTML('afterbegin', '<p class="obc-bao" role="status">' + esc(tb) + '</p>');
  }
  function gv(path, body) { var R = S.phong; return api('POST', '/api/live/' + R.ma + '/' + path, Object.assign({ khoa: R.khoa }, body || {})); }
  function taiPhong() {
    var R = S.phong;
    if (!R || !R.ma) return;
    api('GET', '/api/live/' + R.ma + '/gv?khoa=' + encodeURIComponent(R.khoa)).then(function (d) {
      if (S.phong !== R) return;
      R.info = d;
      if (d.dong) { roiPhong(d.dongLy === 'nghi' ? 'Phòng đã tự đóng vì 30 phút không ai chơi.' : 'Phòng đã đóng.'); return; }
      // chu phong bi moi ra khoi danh sach (khong the xay ra binh thuong) -> coi nhu phong hong
      if (R.pha === 'cho') veDsSanh(); else veThanhChu();
    }).catch(function (e) {
      if (S.phong !== R) return;
      if (e.status === 404 || e.status === 403) roiPhong('Phòng đã đóng.');
    });
  }
  function veSanh() {
    var R = S.phong, m = QR[R.game], link = linkPhong(R);
    R.pha = 'cho';
    S.man.innerHTML = '<div class="obc-sanh">' +
      '<div class="obc-qr-the"><p class="obc-qr-tit"><i aria-hidden="true">' + m.ic + '</i>' + esc(m.ten) + '</p><div class="obc-qr">' + qrSvg(link) + '</div>' +
        '<p class="obc-qr-mo">Bạn mở camera điện thoại quét mã, hoặc vào <b>' + esc(location.host) + (R.kieu === 'dua' ? '/dua' : '/choi') + '</b> rồi nhập</p>' +
        '<p class="obc-ma" aria-label="Mã phòng">' + maDep(R.ma) + '</p>' +
        '<button type="button" class="obc-btn3" data-act="chepLink">📋 Sao chép đường dẫn gửi bạn</button></div>' +
      '<div class="obc-sanh-phai"><h3 id="obcDsTit">Trong phòng</h3><div class="obc-ds" id="obcDs"></div>' +
        '<button type="button" class="obc-go" data-act="phongBatDau" id="obcGo">▶ Bắt đầu</button>' +
        '<p class="obc-loi" id="obcLoi" role="alert"></p>' +
        '<p class="obc-cai-mo">' + (R.game === 'ghe' ? 'Ghế nóng ' + S.pref.qrGiay + ' giây — cả phòng chung một đồng hồ.' : S.pref.qrSo + ' câu của ' + esc(S.o.nhan || 'bài đã chọn') + '.') + ' Bạn vào muộn vẫn chơi được.</p>' +
        '<button type="button" class="obc-btn2" data-act="phongDong">✕ Đóng phòng</button></div></div>';
    S.man.scrollTop = 0;
    veDsSanh();
  }
  function veDsSanh() {
    var R = S.phong, el = $('#obcDs');
    if (!el || !R) return;
    var ds = (R.info && R.info.ds) || [{ pid: R.pid, ten: R.ten, lv: R.lv }];
    el.innerHTML = ds.map(function (x) {
      var la = x.pid === R.pid;
      return '<span class="obc-ban' + (la ? ' la' : '') + '">' + (x.lv && window.DuaCanh ? '<img src="' + window.DuaCanh.anh(x.lv) + '" alt="">' : '') + '<b>' + esc(x.ten) + '</b>' + (la ? '<i>em · chủ phòng</i>'
        : '<button type="button" class="obc-ban-x" data-act="moiRa" data-v="' + esc(x.pid) + '" aria-label="Mời ' + esc(x.ten) + ' ra khỏi phòng">✕</button>') + '</span>';
    }).join('');
    $('#obcDsTit').textContent = 'Trong phòng (' + ds.length + '/' + (R.toiDa || 12) + ')';
    var go = $('#obcGo');
    if (go && !go.disabled) go.textContent = ds.length > 1 ? '▶ Bắt đầu (' + ds.length + ' bạn)' : '▶ Bắt đầu — hoặc chờ bạn vào';
  }
  function boCauPhong(R) {
    if (R.game === 'ghe') return K._boCauDt(S.opt, 30, ['nghia', 'viet']);
    return K._boCauDt(S.opt, Math.min(30, S.pref.qrSo));
  }
  function phongBatDau(b) {
    var R = S.phong;
    if (!R) return;
    var cau = boCauPhong(R);
    var loi = $('#obcLoi') || (S.lop && S.lop.querySelector('#obcChuLoi'));
    if (!cau.length) { if (loi) loi.textContent = 'Bài đang chọn chưa có câu hỏi phù hợp.'; return; }
    if (b) b.disabled = true;
    gv('batdau', { cau: cau, moc: 3, han: R.game === 'ghe' ? S.pref.qrGiay : 0 }).then(function () {
      if (S.phong !== R) return;
      R.pha = 'choi'; R.dangKet = false; R.tuKet = 0;
      R.info = null; // so lieu van truoc (da 'het') khong con dung
      if (!S.lop) moKhungChoi();
      else veThanhChu();
      taiPhong();
    }).catch(function (e) { if (b) b.disabled = false; if (loi) loi.textContent = e.message; });
  }
  // Man choi cua chu phong: thanh chu phong + trang /choi | /dua (da vao phong san) trong khung
  function moKhungChoi() {
    var R = S.phong;
    try {
      if (R.kieu === 'dua') sessionStorage.setItem('hyv_dua', JSON.stringify({ ma: R.ma, pid: R.pid, tok: R.tok, lv: R.lv, ten: R.ten }));
      else sessionStorage.setItem('hyv_choi', JSON.stringify({ ma: R.ma, pid: R.pid, tok: R.tok }));
    } catch (e) { /* bo qua */ }
    if (window.NhacNen) window.NhacNen.tat();
    var lop = document.createElement('div');
    lop.className = 'obc obc-chu';
    lop.innerHTML = '<div class="obc-chu-bar">' +
        '<button type="button" class="obc-chu-ma" data-act="phongQr" aria-label="Hiện mã QR cho bạn vào muộn">📱 <b>' + maDep(R.ma) + '</b></button>' +
        '<span class="obc-chu-so" id="obcChuSo"></span><span class="obc-chu-gio" id="obcChuGio" hidden></span><span class="obc-gap"></span>' +
        '<button type="button" class="obc-chu-nut" data-act="phongBxh" aria-expanded="false">🏆 <span>Xếp hạng</span></button>' +
        '<button type="button" class="obc-chu-nut is-do" data-act="phongKet" id="obcChuKet">Kết thúc</button>' +
        '<button type="button" class="obc-chu-nut is-xanh" data-act="phongLai" id="obcChuLai" hidden>🔁 Chơi lại</button>' +
        '<button type="button" class="obc-chu-nut" data-act="phongDong" id="obcChuDong" hidden>✕ Đóng<span> phòng</span></button>' +
      '</div><p class="obc-chu-loi" id="obcChuLoi" role="alert"></p>' +
      '<iframe class="obc-chu-khung" title="Màn chơi của em" src="' + (R.kieu === 'dua' ? '/dua' : '/choi') + '?ma=' + R.ma + '&chu=1"></iframe>' +
      '<aside class="obc-chu-bxh" id="obcChuBxh" hidden><div class="obc-chu-bxh-hd"><b>🏆 Bảng xếp hạng</b><button type="button" class="obc-ban-x" data-act="phongBxh" aria-label="Đóng bảng xếp hạng">✕</button></div><ol id="obcChuBxhDs"></ol><p class="obc-chu-tin" id="obcChuTin"></p></aside>' +
      '<div class="obc-chu-qr" id="obcChuQr" hidden><div class="obc-qr-the"><div class="obc-qr">' + qrSvg(linkPhong(R)) + '</div><p class="obc-ma">' + maDep(R.ma) + '</p>' +
        '<p class="obc-qr-mo">Bạn vào muộn quét mã này, hoặc vào <b>' + esc(location.host) + (R.kieu === 'dua' ? '/dua' : '/choi') + '</b></p><button type="button" class="obc-btn2" data-act="phongQr">Đóng</button></div></div>';
    lop.addEventListener('click', bam);
    document.body.appendChild(lop);
    document.documentElement.classList.add('obc-chu-mo');
    S.lop = lop;
    S.man.innerHTML = '<p class="obc-dangtai">Phòng ' + maDep(R.ma) + ' đang chơi…</p>';
    veThanhChu();
  }
  function veThanhChu() {
    var R = S.phong, lop = S.lop;
    if (!R || !lop) return;
    var d = R.info || { bxh: [], soHs: 1, soXong: 0, pha: R.pha, tong: 0, su: [] };
    var q = function (id) { return lop.querySelector('#' + id); };
    var het = d.pha === 'het';
    if (d.pha === 'choi' || het) R.pha = d.pha;
    q('obcChuSo').textContent = '👥 ' + d.soHs + (d.pha === 'choi' && !d.han ? ' · ✓ ' + d.soXong : '');
    q('obcChuKet').hidden = het;
    q('obcChuLai').hidden = !het;
    q('obcChuDong').hidden = !het;
    if (het) { q('obcChuLai').disabled = false; var k = q('obcChuKet'); k.removeAttribute('data-chac'); k.textContent = 'Kết thúc'; k.disabled = false; }
    // dong ho Ghe nong
    var gio = q('obcChuGio');
    clearInterval(R.dem);
    if (d.han && d.pha === 'choi') {
      var hetLuc = Date.now() + (d.conLai || 0);
      var ve = function () { var con = Math.max(0, Math.ceil((hetLuc - Date.now()) / 1000)); gio.textContent = '⏱ ' + con + 's'; gio.classList.toggle('is-gap', con <= 10); };
      gio.hidden = false; ve();
      R.dem = setInterval(ve, 250);
    } else gio.hidden = true;
    q('obcChuBxhDs').innerHTML = (d.bxh || []).map(function (r, i) {
      return '<li class="' + (r.pid === R.pid ? 'la' : '') + '"><span class="obc-hang">' + (['🥇', '🥈', '🥉'][i] || (i + 1)) + '</span>' +
        (r.lv && window.DuaCanh ? '<img src="' + window.DuaCanh.anh(r.lv) + '" alt="">' : '') + '<b>' + esc(r.ten) + (r.pid === R.pid ? ' (em)' : '') + '</b>' +
        '<i>' + (d.han ? r.dungSo + ' từ' : r.dungSo + '/' + (d.tong || 0)) + (r.xong ? ' ✓' : '') + '</i></li>';
    }).join('');
    q('obcChuTin').textContent = d.su && d.su.length ? d.su[0].txt : '';
    // ca phong da lam xong -> tu ket thuc de moi may hien bang vang
    if (d.pha === 'choi' && d.soHs > 0 && d.soXong === d.soHs && !R.dangKet) {
      R.tuKet = (R.tuKet || 0) + 1;
      if (R.tuKet >= 2) phongKet();
    } else R.tuKet = 0;
    if (het && !R.daMoBxh) { R.daMoBxh = true; }
  }
  function phongKet() {
    var R = S.phong;
    if (!R || R.dangKet) return;
    R.dangKet = true;
    gv('xong').then(function () { if (S.phong === R) { R.pha = 'het'; taiPhong(); } }).catch(function () { R.dangKet = false; });
  }

  /* ---------------- bam nut ---------------- */
  var HANH = {
    menu: function () { veMenu(); },
    chuanBi: function (b) { veChuanBi(b.getAttribute('data-v')); },
    pref: function (b) {
      var key = b.getAttribute('data-key');
      S.pref[key] = +b.getAttribute('data-v');
      luuPref();
      Array.prototype.forEach.call(b.parentNode.children, function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', x === b); });
    },
    dangLoai: function (b) {
      var l = b.getAttribute('data-v'), ds = dangLoai(), i = ds.indexOf(l);
      if (i >= 0) { if (ds.length <= 1) return; ds.splice(i, 1); } else ds.push(l);
      S.pref.dangLoai = S.loai.filter(function (x) { return ds.indexOf(x) >= 0; });
      luuPref();
      b.classList.toggle('is-on', i < 0);
      b.setAttribute('aria-pressed', i < 0);
    },
    batTro: function (b) { var t = TRO[b.getAttribute('data-v')]; if (t) t.bat(); },
    choiLai: function () { if (S.ket && S.ket.choiLai) S.ket.choiLai(); },
    onSai: function () { if (S.ket && S.ket.sai.length) onLaiSai(S.ket.sai); },
    tg50: function () { THANG.tg50(); },
    tgDoi: function () { THANG.tgDoi(); },
    tgDung: function (b) { THANG.tgDung(b); },
    oMin: function (b) { MIN.mo(b); },
    kbDoan: function () { KB.doan(); },
    kbChu: function (b) { KB.chu(b); },
    kbBo: function (b) { KB.bo(b); },
    kbMo: function () { KB.mo(); },
    kbKet: function () { KB.ket(); },
    gheBat: function () { GHE.chay(); },
    gheChon: function (b) { GHE.chon(+b.getAttribute('data-v')); },
    gheBo: function () { GHE.boQua(); },
    chuanBiQr: function (b) { moChuanBiQr(b.getAttribute('data-v')); },
    chonLv: function (b) {
      S.pref.lv = b.getAttribute('data-v'); luuPref();
      Array.prototype.forEach.call(b.parentNode.children, function (x) { x.classList.toggle('is-on', x === b); x.setAttribute('aria-selected', x === b); });
    },
    moPhong: function (b) { moPhong(b.getAttribute('data-v'), b); },
    dongCu: function (b) { dongCu(b.getAttribute('data-v'), b); },
    chepLink: function (b) {
      var R = S.phong;
      if (!R) return;
      var xong = function () { b.textContent = '✓ Đã sao chép'; setTimeout(function () { b.textContent = '📋 Sao chép đường dẫn gửi bạn'; }, 1800); };
      try { navigator.clipboard.writeText(linkPhong(R)).then(xong, function () { b.textContent = linkPhong(R); }); } catch (e) { b.textContent = linkPhong(R); }
    },
    moiRa: function (b) { gv('duoi', { pid: b.getAttribute('data-v') }).then(taiPhong).catch(function () { /* bo qua */ }); },
    phongBatDau: function (b) { phongBatDau(b); },
    phongLai: function (b) { phongBatDau(b); },
    phongKet: function (b) {
      var R = S.phong;
      if (!R) return;
      var d = R.info || {};
      // con ban chua lam xong: bam hai lan cho chac
      if (!b.hasAttribute('data-chac') && d.soXong < d.soHs) {
        b.setAttribute('data-chac', '1'); b.textContent = 'Bấm lần nữa để kết thúc';
        setTimeout(function () { if (b.hasAttribute('data-chac')) { b.removeAttribute('data-chac'); b.textContent = 'Kết thúc'; } }, 2600);
        return;
      }
      b.disabled = true;
      phongKet();
    },
    phongDong: function () { roiPhong(''); },
    phongBxh: function () {
      var el = S.lop && S.lop.querySelector('#obcChuBxh');
      if (!el) return;
      el.hidden = !el.hidden;
      var n = S.lop.querySelector('.obc-chu-nut[data-act="phongBxh"]');
      if (n) n.setAttribute('aria-expanded', String(!el.hidden));
    },
    phongQr: function () { var el = S.lop && S.lop.querySelector('#obcChuQr'); if (el) el.hidden = !el.hidden; }
  };
  function bam(e) {
    var b = e.target.closest('[data-act]');
    if (!b || b.disabled) return;
    var f = HANH[b.getAttribute('data-act')];
    if (f) f(b);
  }
  function phim(e) {
    if (!S.song || e.ctrlKey || e.metaKey || e.altKey || S.lop) return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT')) return;
    if (S.phim && S.phim(e)) { e.preventDefault(); return; }
    if (e.key === 'Enter' && !(t && t.tagName === 'BUTTON')) {
      var n = S.goc.querySelector('[data-tiep]:not([disabled])');
      if (n) { e.preventDefault(); n.click(); }
    }
  }
  // Dong trang khi dang mo phong: bao may chu dong phong de ban be khong phai cho
  window.addEventListener('pagehide', function () { if (S.phong) dongPhong(S.phong, true); });

  /* ---------------- mo / dong ---------------- */
  function mo(hop, o) {
    S.hop = hop; S.o = o || {};
    S.song = true;
    napPref();
    hop.innerHTML = '';
    var goc = T.tao('div', 'obc', '<div class="obc-nen" aria-hidden="true"></div><div class="obc-man" id="obcMan"><p class="obc-dangtai">Đang chuẩn bị câu hỏi…</p></div>');
    hop.appendChild(goc);
    S.goc = goc;
    S.man = goc.querySelector('#obcMan');
    goc.addEventListener('click', bam);
    document.addEventListener('keydown', phim);
    if (window.NhacNen) window.NhacNen.tat();
    (window.LopKiemTra && window.LopKiemTra._taoCauP ? Promise.resolve() : nap('/js/lop-kiemtra.js')).then(function () {
      if (!S.song || S.goc !== goc) return;
      K = window.LopKiemTra;
      if (!K || !K._taoCauP || !window.CauDT) throw new Error('Chưa tải được trò chơi — em tải lại trang nhé.');
      chuanBi(S.o);
      veMenu();
    }).catch(function (e) { if (S.song && S.goc === goc) S.man.innerHTML = '<p class="obc-thieu">' + esc(e.message) + '</p>'; });
    return { dung: dung };
  }
  function dung() {
    huyHen(); im();
    S.song = false;
    S.phim = null; S.g = null;
    document.removeEventListener('keydown', phim);
    if (S.phong) { var R = S.phong; S.phong = null; dongPhong(R); }
    if (S.lop) { if (S.lop.parentNode) S.lop.parentNode.removeChild(S.lop); S.lop = null; document.documentElement.classList.remove('obc-chu-mo'); }
    S.goc = null; S.man = null;
  }

  T.dangKy({
    key: KEY,
    ten: 'Ôn bài cũ',
    emoji: '📝',
    chu: '温',
    nen: 'linear-gradient(160deg,#fbf5ea 0%,#f6d9a4 55%,#e9a23b 100%)',
    moTa: 'Kiểm tra bài cũ như ở lớp: Leo thang triệu phú, Dò mìn, Săn kho báu, Ghế nóng… tự ôn một mình hoặc rủ bạn quét mã QR vào ôn cùng.',
    moTaLop: 'Kiểm tra bài cũ: tự ôn một mình hoặc ôn với bạn bằng mã QR.',
    tuLay: true,
    mo: mo
  });
})();
