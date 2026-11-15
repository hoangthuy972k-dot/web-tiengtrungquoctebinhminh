/* ══════════════════════════════════════════════════════════════════
   📅 HOM NAY EM ON GI — mot cho on duy nhat moi ngay (trang chu hoc sinh).
   ------------------------------------------------------------------
   Moi ngay (gio VN) may tu soan 1 ke hoach ~12 phut (toi da 25 cau) tu du lieu CUA CHINH EM, chi lay bai em
   da hoc hoac duoc giao (cung bo bai voi baiOnCua tren may chu — /api/farm/on; khach: tien do tren may):
     1. Tu den han on   — toi da 10 tu SRS den han (cu nhat truoc); cham va doi hop nho bang CHINH ham srsAnswer
                          cua app.js (giong het "On tap ngat quang"), +1 sao/tu dung (khoa '/srs|tu|ngay' nhu cu).
     2. Cau em tung sai — toi da 5 cau trong kho cau-sai.js (Luyen tap, Kiem tra cuoi bai, On bai cu) + tu sai o
                          cac bai on (reviewWrongWords); dung lai thi bo khoi kho.
     3. 1 diem ngu phap — the ngu phap SRS den han (hyv_srs_gram, srgAnswer) hoac diem ngu phap cua bai gan nhat;
                          3–4 cau ngu phap / dien tu / xep cau tu ngan hang chung (lop-kiemtra.js Phan 1), khong co cau dich.
     4. 1 bai nghe      — 2–3 cau nghe – hieu (giong doc cua may; may khong doc duoc thi hien pinyin).
     5. Neu con thoi gian — 1 cau "xoan oc" cua bai hoc truoc do.
   Chua co gi de on (em moi) -> "Hoc bai moi: <bai tiep theo>".
   Man lam bai: toan man hinh, tung cau mot, cau sai quay lai 1 lan o cuoi, tam dung / lam tiep trong ngay
   (luu theo tai khoan + ngay VN — localStorage hyv_ohn). Xong: tinh ngay hoc, nhiem vu "on tu", +5 sao 1 lan/ngay
   (/api/stars/on-hom-nay) roi moi em sang San choi / Nong trai.
   Pinyin: cau HSK 1 (hsk1, hsk1v3, yct) hien pinyin; HSK 2 tro len an sau nut "👁 Pinyin" (tru cau nghe khi may khong doc).
   Dung cac ham cua app.js qua window.HyvHomNay — khong chep lai logic SRS.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var KHOA = 'hyv_ohn';
  var GIA = { fullPageUrl: '/lessons/on-hom-nay.html' }; // muc "bai dang lam do" gia: dong bo kho cau sai len tai khoan
  var HSK1 = { hsk1: 1, hsk1v3: 1, yct: 1 };
  var TOI_DA = { srs: 10, sai: 5, gram: 4, nghe: 3, xoay: 1 };
  var TONG_TOI_DA = 25;
  var GIAY = { srs: 15, sai: 30, gram: 35, nghe: 25, xoay: 30, lai: 25 };
  var KHOI = {
    srs: { ic: '🔁', ten: 'Từ đến hạn ôn', don: 'từ' },
    sai: { ic: '🩹', ten: 'Câu em từng sai', don: 'câu' },
    gram: { ic: '🧩', ten: '1 điểm ngữ pháp', don: 'câu' },
    nghe: { ic: '🎧', ten: '1 bài nghe', don: 'câu' },
    xoay: { ic: '🌀', ten: 'Nếu còn thời gian', don: 'câu' },
    lai: { ic: '↺', ten: 'Làm lại câu sai', don: 'câu' }
  };
  var THU_TU = ['srs', 'sai', 'gram', 'nghe', 'xoay'];
  var CHU = 'ABCDEF';

  function A() { return window.HyvHomNay; }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function auth() { var a = docLS('hyv_auth', null); return a && a.token ? a : null; }
  function uid() { var a = auth(); return a && a.user ? String(a.user.id || '') : ''; }
  function ngayVN() { return new Date(Date.now() + 7 * 3600000).toISOString().slice(0, 10); }
  function homNay() { return A().dateKey(new Date()); } // ngay den han SRS tinh theo may (giong app.js)
  function tron(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function coHan(s) { return /[㐀-鿿]/.test(String(s || '')); }
  function khoaZh(s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim().replace(/[\s，。？！、；：,.?!;:"'“”‘’「」『』《》（）()…—\-·~～]/g, ''); }
  function bam(s) {
    var h = 2166136261;
    s = String(s);
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(36);
  }
  function giamChuyenDong() { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }

  /* ---------------- nap file ---------------- */
  var daNap = {};
  function nap(src) {
    if (!daNap[src]) {
      daNap[src] = new Promise(function (ok, loi) {
        var sc = document.createElement('script');
        sc.src = src + (window.__assetVersion ? (src.indexOf('?') < 0 ? '?' : '&') + 'v=' + window.__assetVersion : '');
        sc.onload = function () { ok(); };
        sc.onerror = function () { delete daNap[src]; loi(new Error('Không tải được ' + src)); };
        document.head.appendChild(sc);
      });
    }
    return daNap[src];
  }
  function napK() {
    if (window.LopKiemTra && window.LopKiemTra._taoCauP) return Promise.resolve(window.LopKiemTra);
    return nap('/js/lop-kiemtra.js').then(function () { return window.LopKiemTra; });
  }
  // Cau trac nghiem / xep cau cua tung bai: /js/lop-<cap>.js (window.LOP_DATA[cap]) — chi doc
  function napLop(lv) {
    if (window.LOP_DATA && window.LOP_DATA[lv]) return Promise.resolve(window.LOP_DATA[lv]);
    return nap('/js/lop-' + lv + '.js').then(function () { return (window.LOP_DATA && window.LOP_DATA[lv]) || []; }, function () { return []; });
  }
  var cacheBai = {};
  function napBai(url) {
    if (cacheBai[url]) return cacheBai[url];
    var info = A().lessonByUrl(url);
    if (!info) return Promise.resolve(null);
    cacheBai[url] = Promise.all([
      A().loadLessonRawData(info.lesson).then(function (d) { return (d && d.vocabData) || []; }, function () { return []; }),
      napLop(info.levelId)
    ]).then(function (r) {
      var ds = r[1] || [], b = null;
      ds.forEach(function (x) { if (!b && x.url === url) b = x; });
      if (!b) ds.forEach(function (x) { if (!b && String(x.n) === String(info.lesson.number)) b = x; });
      return { url: url, lv: info.levelId, lesson: info.lesson, vocab: r[0].filter(function (v) { return v && v.zh && v.vn; }),
        mcs: (b && b.mcs) || [], sorts: (b && b.sorts) || [] };
    });
    return cacheBai[url];
  }
  function lvCua(url) { var i = url && A().lessonByUrl(url); return i ? i.levelId : ''; }

  /* ---------------- bo bai em da hoc / duoc giao ---------------- */
  var tapMay = null, dangHoiMay = null;
  function hoiMay() {
    var a = auth();
    if (!a || tapMay || dangHoiMay) return dangHoiMay || Promise.resolve(tapMay);
    dangHoiMay = fetch('/api/farm/on', { headers: { Authorization: 'Bearer ' + a.token }, cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { tapMay = d && Array.isArray(d.urls) ? d : { urls: [], loi: 1 }; dangHoiMay = null; veThe(); return tapMay; })
      .catch(function () { tapMay = { urls: [], loi: 1 }; dangHoiMay = null; return tapMay; });
    return dangHoiMay;
  }
  // Bai co tien do tren may nay (da lam / da mo)
  function baiTrenMay() {
    var visited = A().readJSON(A().visitedKey, {}) || {}, out = [];
    var all = (window.APP_DATA && APP_DATA.lessons) || (typeof APP_DATA !== 'undefined' ? APP_DATA.lessons : {}) || {};
    Object.keys(A().readyLevels).forEach(function (lv) {
      (all[lv] || []).forEach(function (l) {
        if (A().lessonHasAnyProgress(l) || visited[l.fullPageUrl]) out.push({ url: l.fullPageUrl, lv: lv, n: l.number });
      });
    });
    return out;
  }
  // { urls: bo bai on (theo thu tu gan day nhat truoc), all: { url: 1 } (moi bai da hoc + duoc giao), gan }
  function tapBai() {
    var may = baiTrenMay(), last = A().getLastLesson();
    // bai gan nhat: bai mo sau cung tren may nay (theo tai khoan) — may chu chi biet khi co "bai dang lam do"
    var ganUrl = (last && last.lesson.fullPageUrl) || (tapMay && tapMay.gan) || '';
    var urls = [];
    if (tapMay && tapMay.urls && tapMay.urls.length) urls = tapMay.urls.slice();
    else if (may.length) {
      // giong baiOnCua: cap cua bai hoc gan nhat, toi da 6 bai
      var lv = last ? last.levelId : '';
      if (!lv) {
        var dem = {};
        may.forEach(function (x) { dem[x.lv] = (dem[x.lv] || 0) + 1; });
        lv = Object.keys(dem).sort(function (a, b) { return dem[b] - dem[a]; })[0];
      }
      urls = may.filter(function (x) { return x.lv === lv; }).sort(function (a, b) { return b.n - a.n; }).slice(0, 6).map(function (x) { return x.url; });
    }
    if (ganUrl && urls.indexOf(ganUrl) < 0 && may.some(function (x) { return x.url === ganUrl; })) urls.unshift(ganUrl);
    if (!ganUrl) ganUrl = urls[0] || '';
    // thu tu "gan day": bai gan nhat, roi cung cap so bai lon truoc
    var lvGan = lvCua(ganUrl);
    var so = function (u) { var i = A().lessonByUrl(u); return i ? i.lesson.number : 0; };
    urls.sort(function (a, b) {
      if (a === ganUrl) return -1;
      if (b === ganUrl) return 1;
      var la = lvCua(a) === lvGan ? 0 : 1, lb = lvCua(b) === lvGan ? 0 : 1;
      return la - lb || so(b) - so(a);
    });
    var all = {};
    urls.forEach(function (u) { all[u] = 1; });
    may.forEach(function (x) { all[x.url] = 1; });
    var lvs = {};
    Object.keys(all).forEach(function (u) { var l = lvCua(u); if (l) lvs[l] = 1; });
    return { urls: urls, all: all, lvs: lvs, gan: ganUrl };
  }

  /* ---------------- nguon tung khoi ---------------- */
  function tuDenHan(tap) {
    var all = A().srsAll(), today = homNay();
    return Object.keys(all).filter(function (k) {
      var e = all[k];
      return e && e.due <= today && e.up !== today && (!e.url || tap.all[e.url]);
    }).sort(function (a, b) {
      var x = all[a], y = all[b];
      return x.due < y.due ? -1 : x.due > y.due ? 1 : (x.box || 0) - (y.box || 0);
    });
  }
  function cauSaiCua(tap) {
    if (!window.CauSai) return [];
    return window.CauSai.ds().filter(function (x) {
      if (x.url) return !!tap.all[x.url];
      return !x.lv || !!tap.lvs[x.lv];
    });
  }
  function tuSaiOn() {
    var m = A().readJSON(A().wrongWordsKey, {}) || {}, out = [];
    Object.keys(m).forEach(function (g) {
      (Array.isArray(m[g]) ? m[g] : []).forEach(function (z) { if (typeof z === 'string' && z && out.indexOf(z) < 0) out.push(z); });
    });
    return out;
  }
  function boTuSaiOn(zh) {
    var key = A().wrongWordsKey, m = A().readJSON(key, {}) || {}, doi = false;
    Object.keys(m).forEach(function (g) {
      if (!Array.isArray(m[g])) return;
      var n = m[g].filter(function (z) { return z !== zh; });
      if (n.length !== m[g].length) { m[g] = n; doi = true; }
    });
    if (doi) { A().writeJSON(key, m); A().syncProgressToServer(); }
  }

  // Uoc luong (chua soan cau) — de the tren trang chu ve ngay, khong phai tai du lieu bai
  function uocLuong(tap) {
    var co = tap.urls.length > 0;
    var n = {
      srs: Math.min(TOI_DA.srs, tuDenHan(tap).length),
      sai: Math.min(TOI_DA.sai, cauSaiCua(tap).length + (co ? tuSaiOn().length : 0)),
      gram: co ? 4 : 0,
      nghe: co ? 3 : 0,
      xoay: tap.urls.length >= 2 ? 1 : 0
    };
    return THU_TU.filter(function (k) { return n[k] > 0; }).map(function (k) { return { key: k, n: n[k] }; });
  }
  function phutCua(key, n) { return Math.max(1, Math.round((GIAY[key] || 25) * n / 60)); }

  /* ---------------- trang thai ke hoach trong ngay ---------------- */
  // hyv_ohn = { "<userId | '_khach'>": ke hoach cua ngay } — may dung chung: moi tai khoan mot ke hoach rieng
  function docKeHoach() {
    var m = docLS(KHOA, null) || {};
    var p = m[uid() || '_khach'];
    if (!p || p.v !== 1 || p.d !== ngayVN() || (p.uid || '') !== uid() || !Array.isArray(p.items)) return null;
    return p;
  }
  function luuKeHoach(p) {
    var m = docLS(KHOA, null);
    if (!m || typeof m !== 'object' || Array.isArray(m) || m.v) m = {};
    Object.keys(m).forEach(function (k) { if (!m[k] || m[k].d !== ngayVN()) delete m[k]; }); // bo ke hoach ngay cu
    m[(p.uid || '') || '_khach'] = p;
    ghiLS(KHOA, m);
  }

  /* ---------------- sinh cau tu ngan hang chung ---------------- */
  var PY_RIENG = /[āǎēěīǐōǒūǔǖǘǚǜĀǍĒĚĪǏŌǑŪǓ]/;
  function optCua(b, mcs, sorts) {
    return {
      vocab: b.vocab,
      mcs: (mcs || b.mcs).filter(function (q) { return q && Array.isArray(q.options) && !PY_RIENG.test(q.options.join(' ')); }),
      sorts: (sorts || b.sorts).filter(function (q) { return q && Array.isArray(q.words) && !PY_RIENG.test(q.words.join('')); })
    };
  }
  // Nghe – hieu: nghe tu / cau roi chon nghia (giong on-bai-cu.js)
  function ngheDt(P, q) {
    var a = q.dap || {}, laCau = q.de && q.de.nghe === 'câu';
    var thay = {}; thay[a.vn] = 1;
    function loc(ds) { return tron(ds.filter(function (x) { if (!x.vn || thay[x.vn] || x.zh === a.zh) return false; thay[x.vn] = 1; return true; })); }
    var khac = laCau ? loc(P.nghe[1]) : [];
    if (khac.length < 3) khac = khac.concat(loc(P.nghe[0]));
    khac = khac.slice(0, 3);
    if (khac.length < 2) return null;
    var opts = tron([a.vn].concat(khac.map(function (x) { return x.vn; })));
    return { lenh: 'Nghe rồi chọn nghĩa đúng', nghe: a.zh, py: a.py || '', zh: '', ctx: '', why: '', opts: opts, dung: opts.indexOf(a.vn) };
  }
  function sinhCau(K, P, loaiDs, n, nho, daCo) {
    var out = [];
    daCo = daCo || {};
    for (var lan = 0; out.length < n && lan < n * 6; lan++) {
      var l = K._chonLoai(P, loaiDs, nho);
      if (!l) break;
      var q = K._taoCauP(P, l, nho);
      if (!q || daCo[q.key]) continue;
      var c = l === 'nghe' ? ngheDt(P, q) : K._sangDt(P, q);
      if (!c || (c.opts && (c.dung < 0 || c.opts.length < 2))) continue;
      daCo[q.key] = 1;
      var dap = q.dap || {};
      if (l === 'nghia') { c.py = c.ctx; c.ctx = ''; } // pinyin cua tu: theo quy tac hien / an
      if ((l === 'nguphap' || l === 'dien') && dap.zh) { c.day = dap.zh; c.dayPy = dap.py || ''; }
      if (l === 'xepcau' && dap.py) c.dayPy = dap.py;
      if (l === 'viet') c.why = '';
      c.loai = l;
      out.push(c);
    }
    return out;
  }
  function chuanDiem(s) { return String(s || '').replace(/[“”"「」]/g, '"').replace(/\s+/g, ' ').trim().toLowerCase(); }

  /* ---------------- soan ke hoach ---------------- */
  function themMuc(items, khoi, it, lv) {
    it.b = khoi;
    it.lv = it.lv || lv || '';
    it.id = bam(khoi + '|' + JSON.stringify(it.c || it.g || it.zh || ''));
    items.push(it);
  }
  function taoKeHoach() {
    var tap = tapBai();
    var p = { v: 1, d: ngayVN(), uid: uid(), tao: Date.now(), items: [], kq: [], pos: 0, base: 0, ms: 0, xong: false,
      tk: { srsOk: 0, srsSai: 0, sua: 0, dung: 0, sai: 0, laiDung: 0 }, sao: 0, moi: false };
    if (!tap.urls.length && !Object.keys(tap.all).length) { p.moi = true; return Promise.resolve(p); }
    var dueKeys = tuDenHan(tap).slice(0, TOI_DA.srs);
    var K = null, today = homNay();
    return napK().then(function (k) {
      K = k;
      return A().srsFillDetails(dueKeys).catch(function () { /* bo qua */ });
    }).then(function () {
      var items = [];
      var all = A().srsAll();
      var pool = Object.keys(all).filter(function (k) { return all[k] && all[k].vn; });
      // 1) Tu den han: hop 0-2 nhan dien (xen ke Trung→Viet / Viet→Trung), hop 3+ nho lai (go chu / nghe → chu Han)
      var nNho = 0, nNhan = 0;
      dueKeys.filter(function (k) { return all[k] && all[k].vn; }).forEach(function (zh) {
        var e = all[zh], kind;
        if ((e.box || 0) >= 3) kind = nNho++ % 2 === 0 ? 'go' : 'nghe';
        else kind = nNhan++ % 2 === 0 ? 'zv' : 'vz';
        if (kind !== 'go' && pool.length < 4) kind = 'go';
        themMuc(items, 'srs', { t: 'tu', zh: zh, kind: kind }, lvCua(e.url));
      });
      var trongSrs = {};
      items.forEach(function (it) { trongSrs[it.zh] = 1; });

      // 2) Cau em tung sai (moi nhat truoc)
      cauSaiCua(tap).slice(0, TOI_DA.sai).forEach(function (x) {
        themMuc(items, 'sai', { t: 'cau', c: x.c, sai: x.id, url: x.url }, x.lv || lvCua(x.url));
      });

      // Bai can tai: gan nhat (ngu phap / nghe), bai thu 2 (nghe), bai cu hon (xoan oc)
      var urls = tap.urls.length ? tap.urls : Object.keys(tap.all);
      var ganUrl = urls[0];
      var cu = urls.slice(1);
      var xoayUrl = cu.length ? cu[Math.floor(Math.random() * cu.length)] : '';
      return A().srgPickCards().catch(function () { return []; }).then(function (cards) {
        var store = A().readJSON(A().SRG_KEY, {}) || {};
        var theDen = cards.filter(function (c) { return store[c.id] && store[c.id].due <= today && tap.all[c.url]; })[0] || null;
        var gramUrl = theDen ? theDen.url : ganUrl;
        var can = [gramUrl, ganUrl, urls[1], xoayUrl].filter(function (u, i, a) { return u && a.indexOf(u) === i; });
        return Promise.all(can.map(function (u) { return napBai(u).catch(function () { return null; }); })).then(function (ds) {
          var bai = {};
          ds.forEach(function (b) { if (b) bai[b.url] = b; });
          var daCo = {};

          // 2b) Tu sai o cac bai on (reviewWrongWords) — bu cho du 5 cau
          var conSai = TOI_DA.sai - items.filter(function (it) { return it.b === 'sai'; }).length;
          if (conSai > 0) {
            var vocabMap = {};
            Object.keys(bai).forEach(function (u) { bai[u].vocab.forEach(function (v) { if (!vocabMap[v.zh]) vocabMap[v.zh] = { zh: v.zh, py: v.py, vn: v.vn, lv: bai[u].lv }; }); });
            var nguon = Object.keys(vocabMap).map(function (k) { return vocabMap[k]; }).concat(pool.map(function (k) { return { zh: k, py: all[k].py, vn: all[k].vn, lv: lvCua(all[k].url) }; }));
            tuSaiOn().forEach(function (zh) {
              if (conSai <= 0 || trongSrs[zh]) return;
              var w = vocabMap[zh] || (all[zh] && all[zh].vn ? { zh: zh, py: all[zh].py, vn: all[zh].vn, lv: lvCua(all[zh].url) } : null);
              if (!w) return;
              var thay = {}; thay[w.vn] = 1;
              var khac = tron(nguon.filter(function (x) { if (!x.vn || thay[x.vn] || x.zh === zh) return false; thay[x.vn] = 1; return true; })).slice(0, 3);
              if (khac.length < 2) return;
              var opts = tron([w.vn].concat(khac.map(function (x) { return x.vn; })));
              themMuc(items, 'sai', { t: 'cau', ww: zh, c: { lenh: 'Từ này nghĩa là gì? (em từng làm sai)', zh: zh, py: w.py || '', opts: opts, dung: opts.indexOf(w.vn), why: '' } }, w.lv);
              conSai--;
            });
          }

          // 3) 1 diem ngu phap
          var bg = bai[gramUrl];
          var nGram = 0;
          if (theDen) { themMuc(items, 'gram', { t: 'gram', g: theDen }, lvCua(theDen.url)); nGram++; }
          if (bg) {
            var diem = theDen ? chuanDiem(theDen.point) : '';
            var khop = function (pt) { var x = chuanDiem(pt); return !!x && !!diem && (x === diem || x.indexOf(diem) >= 0 || diem.indexOf(x) >= 0); };
            var mcs = diem ? bg.mcs.filter(function (m) { return khop(m.point); }) : [];
            var sorts = diem ? bg.sorts.filter(function (m) { return khop(m.point); }) : [];
            if (!mcs.length && !sorts.length) {
              // diem ngu phap co nhieu cau nhat cua bai
              var dem = {}, ten = {};
              bg.mcs.concat(bg.sorts).forEach(function (m) { var x = chuanDiem(m.point); if (x) { dem[x] = (dem[x] || 0) + 1; ten[x] = m.point; } });
              var top = Object.keys(dem).sort(function (a, b) { return dem[b] - dem[a]; })[0];
              if (top) {
                diem = top;
                mcs = bg.mcs.filter(function (m) { return chuanDiem(m.point) === top; });
                sorts = bg.sorts.filter(function (m) { return chuanDiem(m.point) === top; });
                p.diem = ten[top];
              }
            } else p.diem = theDen.point;
            if (!p.diem && theDen) p.diem = theDen.point;
            var nhoG = { da: {}, luot: {}, loai: {} };
            var Pg = K._chuanHoa(optCua(bg, mcs, sorts));
            var cauG = sinhCau(K, Pg, ['nguphap', 'xepcau'], TOI_DA.gram - nGram, nhoG, daCo);
            if (cauG.length + nGram < 3) {
              // diem ngu phap it cau: bu bang cau dien tu / ngu phap chung cua bai
              var Pb = K._chuanHoa(optCua(bg));
              cauG = cauG.concat(sinhCau(K, Pb, ['dien', 'nguphap', 'xepcau'], 3 - nGram - cauG.length, nhoG, daCo));
            }
            cauG.forEach(function (c) { themMuc(items, 'gram', { t: 'cau', c: c, url: bg.url }, bg.lv); });
          }

          // 4) 1 bai nghe: bai gan nhat (+ bai thu 2)
          var ngheBai = [bai[ganUrl], bai[urls[1]]].filter(Boolean);
          if (ngheBai.length) {
            var opN = { vocab: [], mcs: [], sorts: [] };
            ngheBai.forEach(function (b) { opN.vocab = opN.vocab.concat(b.vocab); opN.sorts = opN.sorts.concat(optCua(b).sorts); });
            var Pn = K._chuanHoa(opN);
            sinhCau(K, Pn, ['nghe'], TOI_DA.nghe, { da: {}, luot: {}, loai: {} }, daCo).forEach(function (c) {
              themMuc(items, 'nghe', { t: 'cau', c: c, url: ngheBai[0].url }, ngheBai[0].lv);
            });
          }

          // 5) Xoan oc: 1 cau cua bai hoc truoc do
          var bx = bai[xoayUrl];
          if (bx) {
            var Px = K._chuanHoa(optCua(bx));
            sinhCau(K, Px, ['nghia', 'viet', 'dien', 'nguphap', 'xepcau'], TOI_DA.xoay, { da: {}, luot: {}, loai: {} }, daCo).forEach(function (c) {
              c.bai = bx.lesson.number;
              themMuc(items, 'xoay', { t: 'cau', c: c, url: bx.url }, bx.lv);
            });
          }

          // Gioi han 25 cau: cat bot tu cuoi (xoan oc, nghe, ngu phap...) — giu thu tu khoi
          items.sort(function (a, b) { return THU_TU.indexOf(a.b) - THU_TU.indexOf(b.b); });
          while (items.length > TONG_TOI_DA) {
            var bo = -1;
            for (var i = THU_TU.length - 1; i >= 0 && bo < 0; i--) {
              var dem2 = items.filter(function (it) { return it.b === THU_TU[i]; }).length;
              if (dem2 > 1 || (dem2 === 1 && i === THU_TU.length - 1)) {
                for (var j = items.length - 1; j >= 0; j--) if (items[j].b === THU_TU[i]) { bo = j; break; }
              }
            }
            if (bo < 0) bo = items.length - 1;
            items.splice(bo, 1);
          }
          p.items = items;
          p.base = items.length;
          p.kq = items.map(function () { return null; });
          if (!items.length) p.moi = true;
          return p;
        });
      });
    });
  }

  /* ---------------- dong bo kho cau sai len tai khoan ---------------- */
  var dangDongBo = false;
  function dongBoSai() {
    if (dangDongBo || !window.CauSai || !auth() || !A()) return;
    dangDongBo = true;
    try {
      var may = A().rsGet('sai', GIA);
      var tren = window.CauSai.doc();
      var g = window.CauSai.gop(tren, may);
      while (g.ds.length > 5 && JSON.stringify(g).length > 20000) g.ds.pop();
      if (JSON.stringify(g) !== JSON.stringify(tren)) window.CauSai.ghiTat(g);
      if (JSON.stringify(g) !== JSON.stringify(may)) A().rsSet('sai', g, GIA);
    } catch (e) { /* bo qua */ }
    dangDongBo = false;
  }
  window.addEventListener('cau-sai:doi', function () { setTimeout(dongBoSai, 50); });

  /* ---------------- giong doc ---------------- */
  var giongZh = null;
  function chonGiong() {
    try { return (speechSynthesis.getVoices() || []).filter(function (v) { return /^zh|cmn/i.test(v.lang || ''); })[0] || null; } catch (e) { return null; }
  }
  if (window.speechSynthesis) {
    try { speechSynthesis.addEventListener('voiceschanged', function () { giongZh = chonGiong(); }); } catch (e) { /* bo qua */ }
  }
  function mayKhongNghe() { try { return localStorage.getItem('hyv_obc_khong_nghe') === '1'; } catch (e) { return false; } }
  // Doc 1 lan; xong(true) neu may that su phat tieng (co su kien start), xong(false) neu khong
  function doc(zh, xong) {
    var da = false;
    function ket(v) { if (da) return; da = true; if (xong) xong(v); }
    if (!window.speechSynthesis || !zh) { ket(false); return; }
    try {
      if (!giongZh) giongZh = chonGiong();
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
  function im() { try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { /* bo qua */ } }

  /* ---------------- pinyin theo cap ---------------- */
  function laHsk1(lv) { return !!HSK1[lv]; }
  function pyHtml(py, lv, luonHien) {
    if (!py) return '';
    if (luonHien || laHsk1(lv)) return '<p class="ohn-py" lang="zh-Latn">' + esc(py) + '</p>';
    return '<button type="button" class="ohn-py-nut" data-py aria-expanded="false">👁 Pinyin</button><p class="ohn-py" lang="zh-Latn" hidden>' + esc(py) + '</p>';
  }

  /* ══════════════════ THE TREN TRANG CHU ══════════════════ */
  var saoHomNay = null;
  window.addEventListener('hw:stars', function (e) {
    var d = e.detail || {};
    var moi = d.loggedIn && d.ready ? Number(d.today) || 0 : null;
    if (R && R.p && !R.p.xong && moi != null && saoHomNay != null && moi > saoHomNay) { R.p.sao = (R.p.sao || 0) + (moi - saoHomNay); luuKeHoach(R.p); }
    saoHomNay = moi;
  });

  function trangThai() {
    if (!A()) return null;
    var p = docKeHoach();
    if (p) {
      if (p.moi) return { xong: false, moi: true, phut: 0 };
      var con = 0;
      p.items.forEach(function (it, i) { if (p.kq[i] == null) con += GIAY[it.r ? 'lai' : it.b] || 25; });
      return { xong: !!p.xong, phut: Math.max(1, Math.round(con / 60)), bat: p.kq.some(function (x) { return x != null; }) };
    }
    var u = uocLuong(tapBai());
    if (!u.length) return { xong: false, moi: true, phut: 0 };
    return { xong: false, phut: Math.max(1, u.reduce(function (s, b) { return s + (GIAY[b.key] * b.n); }, 0) / 60 | 0) };
  }

  function khoiCua(p) {
    // [{ key, n, xong }] theo ke hoach da soan (kem khoi "Lam lai" neu co cau sai)
    var map = {}, ds = [];
    p.items.forEach(function (it, i) {
      var k = it.r ? 'lai' : it.b;
      if (!map[k]) { map[k] = { key: k, n: 0, xong: 0 }; ds.push(map[k]); }
      map[k].n++;
      if (p.kq[i] != null) map[k].xong++;
    });
    return ds;
  }

  function vong(pct) {
    var C = 2 * Math.PI * 26;
    return '<span class="ohn-ring" role="img" aria-label="Đã xong ' + pct + '%">' +
      '<svg viewBox="0 0 64 64" aria-hidden="true"><circle class="ohn-ring-nen" cx="32" cy="32" r="26"/>' +
      '<circle class="ohn-ring-chay" cx="32" cy="32" r="26" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + (C * (1 - pct / 100)).toFixed(1) + '"/></svg>' +
      '<b>' + pct + '<small>%</small></b></span>';
  }

  function tenBaiMoi() {
    var t = A().nextLearnTarget();
    if (t && t.lesson) {
      return { ten: (t.finished ? 'Ôn lại bài ' : 'Bài ') + t.lesson.number + (t.lesson.title ? ': ' + t.lesson.title : ''), cap: A().levelLabel(t.levelId),
        buoc: t.step && !t.isNext && !t.finished ? 'Bước ' + t.stepNo + ' · ' + t.step.title : '' };
    }
    var pick = A().readJSON('hyv_level_pick', null);
    var lv = pick && A().readyLevels[pick.id] ? pick.id : 'hsk1v3';
    return { ten: 'Bài 1', cap: A().levelLabel(lv), buoc: '' };
  }

  function veThe() {
    var box = document.getElementById('ohnCard');
    if (!box || !A()) return;
    var head = box.parentNode && box.parentNode.querySelector('.home-head');
    if (head && head.nextElementSibling !== box) head.insertAdjacentElement('afterend', box);
    if (auth() && !tapMay) hoiMay();
    var p = docKeHoach();
    var ngay = 'Kế hoạch hôm nay'; // ngay thang da co o dau trang chu
    var html;
    box.hidden = false;
    box.classList.remove('is-xong', 'is-moi');
    if (p && p.xong) {
      box.classList.add('is-xong');
      var tk = p.tk || {};
      html = '<div class="ohn-hoa" aria-hidden="true">' + hoaGiay(14) + '</div>' +
        '<div class="ohn-card-hd">' + vong(100) +
          '<div class="ohn-card-t"><p class="ohn-eyebrow">' + ngay + ' · đã xong</p>' +
          '<h2 id="ohnCardTitle">Xong rồi! Giờ chơi Sân chơi / Nông trại nhé 🎉</h2>' +
          '<p class="ohn-sub">' + [tk.srsOk ? tk.srsOk + ' từ nhớ được' : '', tk.sua ? tk.sua + ' câu đã sửa' : '', tk.dung + '/' + p.base + ' câu đúng ngay',
            Math.max(1, Math.round((p.ms || 0) / 60000)) + ' phút', p.sao ? '+' + p.sao + ' ⭐' : ''].filter(Boolean).join(' · ') + '</p></div></div>' +
        '<div class="ohn-card-act">' +
          '<a class="ohn-go" href="/game">🎮 Sân chơi</a>' +
          '<a class="ohn-go is-phu" href="/nong-trai">🌾 Nông trại</a>' +
          '<button type="button" class="ohn-link" data-ohn="kq">Xem kết quả</button>' +
        '</div>';
    } else if ((p && p.moi) || (!p && !uocLuong(tapBai()).length)) {
      box.classList.add('is-moi');
      var bm = tenBaiMoi();
      html = '<div class="ohn-card-hd"><span class="ohn-ring is-moi" aria-hidden="true">✨</span>' +
          '<div class="ohn-card-t"><p class="ohn-eyebrow">' + ngay + '</p>' +
          '<h2 id="ohnCardTitle">📅 Hôm nay em ôn gì</h2>' +
          '<p class="ohn-sub">Chưa có từ hay câu nào cần ôn. Hôm nay mình <b>học bài mới</b> nhé — học xong, ngày mai sẽ có kế hoạch ôn cho em.</p></div></div>' +
        '<ol class="ohn-blocks"><li class="ohn-block is-now"><span class="ohn-b-ic" aria-hidden="true">✨</span><span class="ohn-b-t"><b>Học bài mới: ' + esc(bm.ten) + '</b><small>' + esc(bm.cap) + (bm.buoc ? ' · ' + esc(bm.buoc) : '') + '</small></span></li></ol>' +
        '<div class="ohn-card-act"><button type="button" class="ohn-go" data-ohn="moi">Học bài mới →</button></div>';
    } else {
      var ds, xongN = 0, tongN = 0, dangLam = false, phut = 0;
      if (p) {
        ds = khoiCua(p);
        ds.forEach(function (b) { tongN += b.n; xongN += b.xong; phut += b.n === b.xong ? 0 : phutCua(b.key, b.n - b.xong); });
        dangLam = xongN > 0;
      } else {
        ds = uocLuong(tapBai()).map(function (b) { return { key: b.key, n: b.n, xong: 0, uoc: true }; });
        ds.forEach(function (b) { tongN += b.n; phut += phutCua(b.key, b.n); });
      }
      var pct = tongN ? Math.round(xongN / tongN * 100) : 0;
      var dauTien = true;
      html = '<div class="ohn-card-hd">' + vong(pct) +
          '<div class="ohn-card-t"><p class="ohn-eyebrow">' + ngay + ' · ' + (dangLam ? 'còn khoảng ' : 'khoảng ') + Math.max(1, phut) + ' phút</p>' +
          '<h2 id="ohnCardTitle">📅 Hôm nay em ôn gì</h2>' +
          '<p class="ohn-sub">' + (dangLam ? 'Em đang làm dở — làm tiếp cho xong nhé!' : 'Một kế hoạch ngắn soạn riêng cho em từ những bài em đã học. Xong thì đi chơi!') + '</p></div></div>' +
        '<ol class="ohn-blocks">' + ds.map(function (b) {
          var k = KHOI[b.key], xong = b.n > 0 && b.xong >= b.n;
          var now = !xong && dauTien;
          if (now) dauTien = false;
          return '<li class="ohn-block' + (xong ? ' is-done' : '') + (now ? ' is-now' : '') + '">' +
            '<span class="ohn-b-ic" aria-hidden="true">' + (xong ? '✓' : k.ic) + '</span>' +
            '<span class="ohn-b-t"><b>' + k.ten + (b.key === 'gram' && p && p.diem ? ': <span class="ohn-diem">' + esc(p.diem) + '</span>' : '') + '</b>' +
              '<small>' + (b.uoc && b.key !== 'srs' && b.key !== 'sai' ? 'khoảng ' : '') + b.n + ' ' + k.don + ' · ' + phutCua(b.key, b.n) + ' phút</small></span>' +
            '<span class="ohn-b-st">' + (xong ? 'Xong' : b.xong ? b.xong + '/' + b.n : '') + '</span></li>';
        }).join('') + '</ol>' +
        '<div class="ohn-card-act"><button type="button" class="ohn-go" data-ohn="go">' + (dangLam ? 'Làm tiếp' : 'Bắt đầu') + ' →</button>' +
          '<span class="ohn-hint">Xong cả kế hoạch: ' + (auth() ? '<b>+5 ⭐</b>' : 'đăng nhập để nhận <b>+5 ⭐</b>') + ' rồi chơi Sân chơi / Nông trại</span></div>';
    }
    box.innerHTML = '<div class="ohn-card-in">' + html + '</div>';
  }

  function hoaGiay(n) {
    var mau = ['#c8372d', '#e9a23b', '#2f8a57', '#3f7fb5', '#d4588f', '#f2bf6b'], s = '';
    for (var i = 0; i < n; i++) {
      s += '<i style="left:' + Math.round(4 + Math.random() * 92) + '%;background:' + mau[i % mau.length] + ';animation-delay:' + (Math.random() * 0.9).toFixed(2) + 's;--xoay:' + Math.round(Math.random() * 720 - 360) + 'deg"></i>';
    }
    return s;
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-ohn]');
    if (t && t.closest('#ohnCard')) {
      var hd = t.getAttribute('data-ohn');
      if (hd === 'go') batDau();
      else if (hd === 'moi') A().runTask('learn');
      else if (hd === 'kq') { var p = docKeHoach(); if (p) { moSheet(); veKetQua(p); } }
      return;
    }
    var nav = e.target.closest && e.target.closest('#navHomNay, a[href="#hom-nay"]');
    if (nav) { e.preventDefault(); moThe(false); }
  });

  // Dua hoc sinh toi the (sidebar, nhac 18h); batDauLuon = mo luon man lam bai neu ke hoach chua xong
  function moThe(batDauLuon) {
    if (!A()) return;
    var home = document.getElementById('home');
    if (home && home.hidden) A().showDashboard();
    veThe();
    var box = document.getElementById('ohnCard');
    if (box) {
      try { box.scrollIntoView({ behavior: giamChuyenDong() ? 'auto' : 'smooth', block: 'start' }); } catch (e) { box.scrollIntoView(); }
      box.classList.remove('is-goi');
      void box.offsetWidth;
      box.classList.add('is-goi');
    }
    var tt = trangThai();
    if (batDauLuon && tt && !tt.xong && !tt.moi) batDau();
  }

  /* ══════════════════ MAN LAM BAI ══════════════════ */
  var R = null; // { p, el, moLuc, hen }

  function moSheet() {
    var el = document.getElementById('ohnSheet');
    if (!el) {
      el = document.createElement('div');
      el.id = 'ohnSheet';
      el.className = 'ohn-sheet';
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-modal', 'true');
      el.setAttribute('aria-labelledby', 'ohnSheetTitle');
      el.innerHTML = '<div class="ohn-sheet-in">' +
        '<header class="ohn-top">' +
          '<button type="button" class="ohn-dong" data-ohn-dong aria-label="Tạm dừng, làm tiếp sau">✕</button>' +
          '<div class="ohn-top-t"><b id="ohnSheetTitle">📅 Hôm nay em ôn gì</b><small id="ohnTopSub"></small></div>' +
          '<span class="ohn-dem" id="ohnDem"></span>' +
        '</header>' +
        '<div class="ohn-seg" id="ohnSeg" aria-hidden="true"></div>' +
        '<div class="ohn-man" id="ohnMan"></div>' +
      '</div>';
      document.body.appendChild(el);
      el.addEventListener('click', function (e) {
        if (e.target.closest('[data-ohn-dong]')) { dongSheet(); return; }
        var py = e.target.closest('[data-py]');
        if (py) {
          var n = py.nextElementSibling;
          if (n) { n.hidden = !n.hidden; py.setAttribute('aria-expanded', n.hidden ? 'false' : 'true'); py.classList.toggle('is-mo', !n.hidden); }
        }
      });
    }
    el.hidden = false;
    document.documentElement.classList.add('ohn-mo');
    R = R || {};
    R.el = el;
    R.moLuc = Date.now();
    document.addEventListener('keydown', phim);
    return el;
  }
  function dongSheet() {
    if (R && R.p && !R.p.xong) { demGio(); luuKeHoach(R.p); }
    if (R && R.hen) clearTimeout(R.hen);
    im();
    var el = document.getElementById('ohnSheet');
    if (el) el.hidden = true;
    document.documentElement.classList.remove('ohn-mo');
    document.removeEventListener('keydown', phim);
    R = null;
    veThe();
    try { A().renderStreak(); } catch (e) { /* bo qua */ }
  }
  function demGio() {
    if (!R || !R.p) return;
    var now = Date.now();
    if (R.moLuc && !document.hidden) R.p.ms = (R.p.ms || 0) + Math.min(now - R.moLuc, 180000);
    R.moLuc = now;
  }
  document.addEventListener('visibilitychange', function () {
    if (!R || !R.p) return;
    if (document.hidden) { demGio(); luuKeHoach(R.p); } else R.moLuc = Date.now();
  });
  function phim(e) {
    if (!R || !R.el || R.el.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); dongSheet(); return; }
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.key === 'Enter') {
      var nut = R.el.querySelector('[data-ohn-tiep]');
      if (nut) { e.preventDefault(); nut.click(); }
      return;
    }
    var k = String(e.key || '').toLowerCase(), i = '1234'.indexOf(k);
    if (i < 0 && k.length === 1) i = 'abcd'.indexOf(k);
    if (i >= 0) {
      var o = R.el.querySelectorAll('.ohn-opt:not(:disabled)')[i];
      if (o) { e.preventDefault(); o.click(); }
    }
  }

  function batDau() {
    if (!A()) return;
    var p = docKeHoach();
    var el = moSheet();
    if (p) { R.p = p; tiep(); return; }
    $('#ohnTopSub').textContent = '';
    $('#ohnDem').textContent = '';
    $('#ohnSeg').innerHTML = '';
    $('#ohnMan').innerHTML = '<div class="ohn-cho"><span class="ohn-quay" aria-hidden="true"></span><p>Đang soạn kế hoạch hôm nay cho em…</p></div>';
    dongBoSai();
    (auth() && !tapMay ? hoiMay() : Promise.resolve()).then(taoKeHoach).then(function (kh) {
      if (!R || R.el !== el) return;
      if (kh.moi) {
        luuKeHoach(kh);
        $('#ohnMan').innerHTML = '<div class="ohn-cho"><p>Chưa có gì cần ôn hôm nay — mình học bài mới nhé!</p>' +
          '<button type="button" class="ohn-go" id="ohnMoi">Học bài mới →</button></div>';
        $('#ohnMoi').addEventListener('click', function () { dongSheet(); A().runTask('learn'); });
        return;
      }
      luuKeHoach(kh);
      R.p = kh;
      tiep();
    }).catch(function () {
      if (!R || R.el !== el) return;
      $('#ohnMan').innerHTML = '<div class="ohn-cho"><p>Chưa soạn được kế hoạch — em kiểm tra mạng rồi thử lại nhé.</p>' +
        '<button type="button" class="ohn-go" id="ohnLai">Thử lại</button></div>';
      $('#ohnLai').addEventListener('click', function () { dongSheet(); batDau(); });
    });
  }
  function $(sel) { return document.querySelector(sel); }

  // Sang cau chua lam tiep theo; het thi tong ket
  function tiep() {
    var p = R && R.p;
    if (!p) return;
    if (R.hen) { clearTimeout(R.hen); R.hen = null; }
    var i = p.kq.indexOf(null);
    while (i >= 0 && boQua(p, i)) i = p.kq.indexOf(null);
    if (i < 0) { xongKeHoach(); return; }
    p.pos = i;
    luuKeHoach(p);
    veCau(p, i);
  }
  // Tu SRS da on o cho khac trong hom nay (vd "On tap ngat quang") -> khong doi hop lan nua
  function boQua(p, i) {
    var it = p.items[i];
    if (it.t !== 'tu' || it.r) return false;
    var w = A().srsAll()[it.zh];
    if (w && w.vn && w.up !== homNay()) return false;
    p.kq[i] = 's';
    luuKeHoach(p);
    return true;
  }

  function veThanh(p, i) {
    var ds = khoiCua(p), it = p.items[i], cur = it.r ? 'lai' : it.b;
    $('#ohnSeg').innerHTML = ds.map(function (b) {
      return '<span class="ohn-seg-o' + (b.key === cur ? ' is-now' : '') + (b.xong >= b.n ? ' is-done' : '') + '" style="flex:' + Math.max(1, b.n) + '">' +
        '<i style="width:' + Math.round(b.xong / b.n * 100) + '%"></i></span>';
    }).join('');
    var b = ds.filter(function (x) { return x.key === cur; })[0];
    var k = KHOI[cur];
    $('#ohnTopSub').textContent = k.ic + ' ' + k.ten + (b ? ' · ' + Math.min(b.n, b.xong + 1) + '/' + b.n : '');
    var xong = p.kq.filter(function (x) { return x != null; }).length;
    $('#ohnDem').textContent = Math.min(p.items.length, xong + 1) + '/' + p.items.length;
  }

  function theHtml(it, noiDung) {
    var k = KHOI[it.r ? 'lai' : it.b];
    return '<div class="ohn-the" data-b="' + (it.r ? 'lai' : it.b) + '">' +
      '<div class="ohn-the-hd"><span class="ohn-tag">' + k.ic + ' ' + k.ten + '</span>' +
        (it.c && it.c.bai ? '<span class="ohn-tag is-nhat">Bài ' + it.c.bai + '</span>' : '') +
        (it.r ? '<span class="ohn-tag is-nhat">làm lại</span>' : '') + '</div>' +
      noiDung +
      '<div class="ohn-fb" id="ohnFb" aria-live="polite" hidden></div>' +
    '</div>';
  }

  function veCau(p, i) {
    var it = p.items[i];
    veThanh(p, i);
    var man = $('#ohnMan');
    im();
    if (it.t === 'tu') veTu(p, i, man);
    else if (it.t === 'gram') veGram(p, i, man);
    else veCauHoi(p, i, man);
    try { man.scrollTop = 0; } catch (e) { /* bo qua */ }
    var f = man.querySelector('.ohn-opt, .ohn-input, .cdt-the, .cdt-o');
    if (f && f.className.indexOf('ohn-input') >= 0) { try { f.focus({ preventScroll: true }); } catch (e) { f.focus(); } }
  }

  function nutOpts(opts, zh) {
    return '<div class="ohn-opts n' + opts.length + '">' + opts.map(function (o, j) {
      var han = zh != null ? zh : coHan(o);
      return '<button type="button" class="ohn-opt' + (han ? ' zh' : '') + '" data-i="' + j + '"' + (han ? ' lang="zh"' : '') + '>' +
        '<span class="ohn-opt-chu" aria-hidden="true">' + CHU.charAt(j) + '</span><span class="ohn-opt-t">' + esc(o) + '</span></button>';
    }).join('') + '</div>';
  }
  function ganOpts(man, opts, dung, xong) {
    var da = false;
    Array.prototype.forEach.call(man.querySelectorAll('.ohn-opt'), function (b) {
      b.addEventListener('click', function () {
        if (da) return;
        da = true;
        var j = +b.getAttribute('data-i');
        Array.prototype.forEach.call(man.querySelectorAll('.ohn-opt'), function (x, k) {
          x.disabled = true;
          x.classList.add(k === dung ? 'is-dung' : k === j ? 'is-sai' : 'is-mo');
        });
        xong(j === dung);
      });
    });
  }

  /* ---- 1) the tu SRS ---- */
  function nhieuTu(a, zh, khongDongAm) {
    var w = a[zh], me = A().srsPyParse(w.py).l;
    return tron(Object.keys(a).filter(function (k) {
      if (k === zh || !a[k] || !a[k].vn || a[k].vn === w.vn) return false;
      return !(khongDongAm && me && A().srsPyParse(a[k].py).l === me);
    })).slice(0, 3);
  }
  function infoTu(zh, w, lv) {
    return '<p class="ohn-fb-dap"><b class="zh" lang="zh">' + esc(zh) + '</b> ' + pyHtml(w.py, lv) +
      '<span class="ohn-fb-vn">' + (w.hv ? 'Hán Việt: ' + esc(w.hv) + ' — ' : '') + esc(w.vn) + '</span></p>';
  }
  function veTu(p, i, man) {
    var it = p.items[i], a = A().srsAll(), zh = it.zh, w = a[zh];
    if (!w || !w.vn) { p.kq[i] = 's'; luuKeHoach(p); tiep(); return; }
    var lv = it.lv, kind = it.kind;
    if (kind === 'go') {
      man.innerHTML = theHtml(it,
        '<p class="ohn-lenh">Nhớ lại — gõ chữ Hán hoặc pinyin của từ:</p>' +
        '<div class="ohn-de is-vn">' + esc(w.vn) + '</div>' +
        '<p class="ohn-goi">Pinyin gõ không dấu, có dấu hay số thanh (vd: ma1) đều được</p>' +
        '<form class="ohn-go-form" autocomplete="off"><input type="text" class="ohn-input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Chữ Hán hoặc pinyin" aria-label="Chữ Hán hoặc pinyin">' +
        '<div class="ohn-go-nut"><button type="submit" class="ohn-go">Kiểm tra</button><button type="button" class="ohn-phu" data-khong>Không nhớ</button></div></form>');
      var form = man.querySelector('form'), inp = man.querySelector('.ohn-input'), da = false;
      var ket = function (val) {
        if (da) return;
        da = true;
        var ok = val !== null && A().srsRecallMatch(val, zh);
        inp.disabled = true;
        Array.prototype.forEach.call(form.querySelectorAll('button'), function (b) { b.disabled = true; });
        inp.classList.add(ok ? 'is-dung' : 'is-sai');
        doc(zh);
        traLoi(p, i, ok, (ok ? '' : (val ? '<p>Em gõ: <span class="zh" lang="zh">' + esc(val) + '</span></p>' : '')) + infoTu(zh, w, lv), '');
      };
      form.addEventListener('submit', function (e) { e.preventDefault(); var v = inp.value.trim(); if (!v) { inp.focus(); return; } ket(v); });
      form.querySelector('[data-khong]').addEventListener('click', function () { ket(null); });
      return;
    }
    var nghe = kind === 'nghe';
    var opts, dung, de;
    if (kind === 'zv') {
      opts = tron([zh].concat(nhieuTu(a, zh, false)));
      de = '<p class="ohn-lenh">Từ này nghĩa là gì?</p>' +
        '<div class="ohn-de zh" lang="zh">' + esc(zh) + '</div>' + pyHtml(w.py, lv) +
        '<button type="button" class="ohn-loa is-nho" data-doc="' + esc(zh) + '" aria-label="Nghe đọc">🔊</button>';
      man.innerHTML = theHtml(it, de + nutOpts(opts.map(function (k) { return a[k].vn; }), false));
    } else {
      opts = tron([zh].concat(nhieuTu(a, zh, nghe)));
      de = nghe
        ? '<p class="ohn-lenh">Nghe rồi chọn chữ Hán đúng</p><div class="ohn-nghe"><button type="button" class="ohn-loa" data-doc="' + esc(zh) + '">🔊 Nghe lại</button>' +
          '<div class="ohn-nghe-py" hidden></div></div>'
        : '<p class="ohn-lenh">Chữ Hán nào nghĩa là:</p><div class="ohn-de is-vn">' + esc(w.vn) + '</div>';
      man.innerHTML = theHtml(it, de + nutOpts(opts, true));
    }
    dung = opts.indexOf(zh);
    ganLoa(man);
    if (nghe) phatNghe(man, zh, w.py);
    ganOpts(man, opts, dung, function (ok) {
      if (kind !== 'zv' || !ok) doc(zh);
      traLoi(p, i, ok, infoTu(zh, w, lv), '');
    });
  }
  function ganLoa(man) {
    Array.prototype.forEach.call(man.querySelectorAll('[data-doc]'), function (b) {
      b.addEventListener('click', function () { doc(b.getAttribute('data-doc')); });
    });
  }
  // Cau nghe: doc ngay; may khong phat duoc tieng thi hien pinyin (ngoai le cua quy tac pinyin)
  function phatNghe(man, zh, py) {
    var o = man.querySelector('.ohn-nghe-py');
    function hienPy() {
      if (!o || !o.hidden) return;
      o.hidden = false;
      o.innerHTML = '<span class="ohn-nghe-tb">Máy em chưa đọc được tiếng Trung — đọc pinyin rồi chọn nhé:</span><b lang="zh-Latn">' + esc(py || zh) + '</b>';
    }
    if (mayKhongNghe()) { hienPy(); return; }
    doc(zh, function (ok) { if (!ok) hienPy(); });
  }

  /* ---- 3a) the ngu phap SRS "Cau nao dung?" ---- */
  function veGram(p, i, man) {
    var it = p.items[i], g = it.g;
    var opts = tron([true, false]);
    man.innerHTML = theHtml(it,
      '<p class="ohn-lenh">Câu nào đúng?</p>' + (g.point ? '<p class="ohn-diem-the">' + esc(g.point) + '</p>' : '') +
      '<div class="ohn-opts n2">' + opts.map(function (r, j) {
        return '<button type="button" class="ohn-opt zh" lang="zh" data-i="' + j + '"><span class="ohn-opt-chu" aria-hidden="true">' + CHU.charAt(j) + '</span><span class="ohn-opt-t">' + esc(r ? g.right : g.wrong) + '</span></button>';
      }).join('') + '</div>');
    ganOpts(man, opts, opts.indexOf(true), function (ok) {
      if (!it.r) A().srgAnswer(g, ok); // doi hop the ngu phap y nhu phien on SRS
      traLoi(p, i, ok, ok ? '' : '<p class="ohn-fb-dap">Câu đúng: <b class="zh" lang="zh">' + esc(g.right) + '</b></p>', g.why || '');
    });
  }

  /* ---- 2–5) cau hoi chung: trac nghiem / xep cau / noi / go chu ---- */
  function veCauHoi(p, i, man) {
    var it = p.items[i], c = it.c || {}, lv = it.lv;
    if (c.k === 'xep' || c.k === 'noi') {
      var c2 = JSON.parse(JSON.stringify(c));
      if (c2.k === 'xep') { var lan = 0; do { c2.tu = tron(c.tu); lan++; } while (lan < 6 && c2.tu.join('|') === c.tu.join('|')); }
      else {
        var thu = tron(c.phai.map(function (_, j) { return j; }));
        c2.phai = thu.map(function (j) { return c.phai[j]; });
        c2.dap = c.dap.map(function (j) { return thu.indexOf(j); });
      }
      man.innerHTML = theHtml(it,
        '<p class="ohn-lenh">' + esc(c.lenh || (c.k === 'xep' ? 'Xếp các từ thành câu đúng' : 'Nối từ với nghĩa đúng')) + '</p>' +
        (c.speak ? '<button type="button" class="ohn-loa" data-doc="' + esc(c.speak) + '">🔊 Nghe câu</button>' : '') +
        (c.ctx ? '<p class="ohn-ctx">«' + esc(c.ctx) + '»</p>' : '') +
        '<div class="ohn-dt"></div>');
      ganLoa(man);
      window.CauDT.ve(man.querySelector('.ohn-dt'), c2, function (x) {
        var ok = c2.k === 'xep'
          ? khoaZh((x.xep || []).map(function (j) { return c2.tu[j]; }).join('')) === khoaZh(c2.dap)
          : (x.noi || []).length === c2.dap.length && x.noi.every(function (v, j) { return v === c2.dap[j]; });
        if (c2.k === 'xep') doc(c2.dap);
        traLoi(p, i, ok, ok && !c.dayPy ? '' : '<p class="ohn-fb-dap">' + (ok ? '' : 'Đáp án: ') + window.CauDT.dapHtml(c2, c2.dap) + '</p>' + (c2.k === 'xep' ? pyHtml(c.dayPy, lv) : ''), c.why || '');
      });
      return;
    }
    if (c.k === 'go') {
      man.innerHTML = theHtml(it,
        '<p class="ohn-lenh">' + esc(c.lenh || 'Điền từ còn thiếu vào chỗ trống') + '</p>' +
        (c.html ? '<div class="ohn-html">' + c.html + '</div>' : '<div class="ohn-de zh is-cau" lang="zh">' + esc(c.pre) + '<span class="ohn-trong">＿＿</span>' + esc(c.post) + '</div>') +
        (c.hint ? '<p class="ohn-goi">💡 ' + esc(c.hint) + '</p>' : '') +
        '<form class="ohn-go-form" autocomplete="off"><input type="text" class="ohn-input zh" lang="zh" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ chữ Hán…" aria-label="Từ cần điền">' +
        '<div class="ohn-go-nut"><button type="submit" class="ohn-go">Kiểm tra</button><button type="button" class="ohn-phu" data-khong>Không biết</button></div></form>');
      var form = man.querySelector('form'), inp = man.querySelector('.ohn-input'), da = false;
      var ket = function (val) {
        if (da) return;
        da = true;
        var ok = val !== null && khoaZh(val) === khoaZh(c.dap);
        inp.disabled = true;
        Array.prototype.forEach.call(form.querySelectorAll('button'), function (b) { b.disabled = true; });
        inp.classList.add(ok ? 'is-dung' : 'is-sai');
        Array.prototype.forEach.call(man.querySelectorAll('.fq-py-an'), function (x) { x.hidden = false; });
        traLoi(p, i, ok, ok ? '' : '<p class="ohn-fb-dap">Từ cần điền: <b class="zh" lang="zh">' + esc(c.dap) + '</b></p>', c.why || '');
      };
      form.addEventListener('submit', function (e) { e.preventDefault(); var v = inp.value.trim(); if (!v) { inp.focus(); return; } ket(v); });
      form.querySelector('[data-khong]').addEventListener('click', function () { ket(null); });
      return;
    }
    // trac nghiem: xao lai thu tu dap an
    var thuTu = tron(c.opts.map(function (_, j) { return j; }));
    var opts = thuTu.map(function (j) { return c.opts[j]; });
    var dung = thuTu.indexOf(c.dung);
    var de;
    if (c.html) de = '<p class="ohn-lenh">' + esc(c.lenh || 'Chọn đáp án đúng') + '</p><div class="ohn-html">' + c.html + '</div>' +
      (c.speak ? '<button type="button" class="ohn-loa is-nho" data-doc="' + esc(c.speak) + '" aria-label="Nghe đọc">🔊</button>' : '');
    else if (c.nghe) de = '<p class="ohn-lenh">' + esc(c.lenh || 'Nghe rồi chọn nghĩa đúng') + '</p>' +
      '<div class="ohn-nghe"><button type="button" class="ohn-loa" data-doc="' + esc(c.nghe) + '">🔊 Nghe lại</button><div class="ohn-nghe-py" hidden></div></div>';
    else {
      var laZh = coHan(c.zh);
      de = '<p class="ohn-lenh">' + esc(c.lenh || 'Chọn đáp án đúng') + '</p>' +
        (c.zh ? '<div class="ohn-de' + (laZh ? ' zh' : ' is-vn') + (String(c.zh).length > (laZh ? 6 : 26) ? ' is-cau' : '') + '"' + (laZh ? ' lang="zh"' : '') + '>' + esc(c.zh) + '</div>' : '') +
        (c.py ? pyHtml(c.py, lv) : '') +
        (c.ctx ? '<p class="ohn-ctx">' + esc(c.ctx) + '</p>' : '');
    }
    if (c.oh) {
      // dap an la HTML cua trang (Kiem tra cuoi bai) — da thoat san khi luu
      man.innerHTML = theHtml(it, de + '<div class="ohn-opts n' + opts.length + '">' + opts.map(function (o, j) {
        return '<button type="button" class="ohn-opt' + (c.oz ? ' zh' : '') + '" data-i="' + j + '"><span class="ohn-opt-chu" aria-hidden="true">' + CHU.charAt(j) + '</span><span class="ohn-opt-t">' + o + '</span></button>';
      }).join('') + '</div>');
    } else man.innerHTML = theHtml(it, de + nutOpts(opts));
    ganLoa(man);
    if (c.nghe) phatNghe(man, c.nghe, c.py);
    ganOpts(man, opts, dung, function (ok) {
      Array.prototype.forEach.call(man.querySelectorAll('.fq-py-an'), function (x) { x.hidden = false; });
      var dap = '';
      var dTxt = c.oh ? String(opts[dung]).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : opts[dung];
      if (c.nghe) { dap = '<p class="ohn-fb-dap">Em vừa nghe: <b class="zh" lang="zh">' + esc(c.nghe) + '</b> ' + pyHtml(c.py, lv) + '<span class="ohn-fb-vn">' + esc(opts[dung]) + '</span></p>'; doc(c.nghe); }
      else if (!ok) dap = '<p class="ohn-fb-dap">Đáp án đúng: <b' + (coHan(dTxt) ? ' class="zh" lang="zh"' : '') + '>' + CHU.charAt(dung) + '. ' + esc(dTxt) + '</b></p>';
      if (c.day) dap += '<p class="ohn-fb-dap">Câu đầy đủ: <b class="zh" lang="zh">' + esc(c.day) + '</b></p>' + pyHtml(c.dayPy, lv);
      if (c.day && !c.nghe) doc(c.day);
      traLoi(p, i, ok, dap, c.why || '');
    });
  }

  /* ---- cham + phan hoi + xep lai cau sai ---- */
  function traLoi(p, i, ok, dapHtml, why) {
    var it = p.items[i];
    demGio();
    p.kq[i] = ok ? 1 : 0;
    A().sfx(ok ? 'correct' : 'wrong');
    var tk = p.tk;
    if (!it.r) {
      if (ok) tk.dung++; else tk.sai++;
      A().demCau(); // du 5 cau trong ngay = 1 ngay hoc (QUY_TAC_NGAY_HOC)
      if (it.t === 'tu') {
        // Y nhu "On tap ngat quang": doi hop bang srsAnswer, dung +1 sao (khoa theo tu + ngay)
        A().srsAnswer(it.zh, ok);
        if (ok) { tk.srsOk++; if (window.hwStarAnswer) window.hwStarAnswer('/srs|' + it.zh + '|' + homNay()); }
        else tk.srsSai++;
      } else if (ok && window.hwStarAnswer) window.hwStarAnswer('/onhn|' + p.d + '|' + it.id);
      if (ok && it.sai && window.CauSai) { window.CauSai.xoa(it.sai); tk.sua++; }
      if (ok && it.ww) { boTuSaiOn(it.ww); tk.sua++; }
      if (!ok && it.t === 'cau' && window.CauSai) {
        // sai lai / sai cau moi -> vao kho "Cau em tung sai" cho nhung ngay sau
        try { window.CauSai.ghi(it.c, { url: it.url || '', lv: it.lv, src: 'ohn' }); } catch (e) { /* bo qua */ }
      }
      if (!ok) {
        // cau sai quay lai 1 lan o cuoi buoi (luot lam lai khong doi hop nho, khong tinh sao)
        var lai = JSON.parse(JSON.stringify(it));
        lai.r = 1;
        lai.o = i;
        p.items.push(lai);
        p.kq.push(null);
      }
    } else if (ok) tk.laiDung++;
    luuKeHoach(p);
    var fb = $('#ohnFb'), the = R && R.el.querySelector('.ohn-the');
    if (the) the.classList.add(ok ? 'is-dung' : 'is-sai');
    if (!fb) return;
    var whyHtml = why ? '<p class="ohn-fb-why">💡 ' + esc(why) + '</p>' : '';
    fb.hidden = false;
    fb.className = 'ohn-fb ' + (ok ? 'is-dung' : 'is-sai');
    fb.innerHTML = '<p class="ohn-fb-tit">' + (ok ? '✓ Đúng rồi!' : '✗ Chưa đúng' + (it.r ? '' : ' — câu này sẽ quay lại cuối buổi')) + '</p>' + (dapHtml || '') + whyHtml +
      '<button type="button" class="ohn-go ohn-tiep" data-ohn-tiep>' + (p.kq.indexOf(null) < 0 ? 'Xem kết quả →' : 'Tiếp tục →') + '</button>';
    var nut = fb.querySelector('[data-ohn-tiep]');
    nut.addEventListener('click', function () { nut.disabled = true; tiep(); });
    // dung va khong co giai thich dai: tu sang cau sau
    if (ok && !why) R.hen = setTimeout(function () { if (R && R.p === p && p.pos === i) tiep(); }, 1300);
    setTimeout(function () { try { fb.scrollIntoView({ block: 'nearest', behavior: giamChuyenDong() ? 'auto' : 'smooth' }); } catch (e) { /* bo qua */ } }, 60);
    if (!ok) { try { nut.focus({ preventScroll: true }); } catch (e) { /* bo qua */ } }
  }

  /* ---- xong ke hoach ---- */
  function xongKeHoach() {
    var p = R.p;
    demGio();
    if (!p.xong) {
      p.xong = true;
      p.xongLuc = Date.now();
      luuKeHoach(p);
      try { A().markStudyDay(); } catch (e) { /* bo qua */ }   // xong 1 luot on = 1 ngay hoc (chuoi + nong trai)
      try { A().taskMark('review'); } catch (e) { /* bo qua */ } // viec "on tu cu" cua Nhiem vu hom nay
      var a = auth();
      if (a) {
        fetch('/api/stars/on-hom-nay', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + a.token }, body: '{}' })
          .then(function (r) { return r.ok ? r.json() : null; })
          .then(function (d) {
            if (!d) return;
            if (d.ohnAwarded > 0) {
              var q = docKeHoach();
              if (q) { q.sao = (q.sao || 0) + d.ohnAwarded; luuKeHoach(q); if (R && R.p) R.p.sao = q.sao; }
              A().showToast('+' + d.ohnAwarded + ' ⭐ Xong kế hoạch ôn hôm nay!');
              var s = document.getElementById('ohnSao');
              if (s && q) s.textContent = '+' + q.sao;
            }
          }).catch(function () { /* bo qua */ });
      }
    }
    veKetQua(p);
  }

  function veKetQua(p) {
    var tk = p.tk || {};
    $('#ohnSeg').innerHTML = '<span class="ohn-seg-o is-done" style="flex:1"><i style="width:100%"></i></span>';
    $('#ohnTopSub').textContent = '🎉 Đã xong kế hoạch hôm nay';
    $('#ohnDem').textContent = '';
    var phut = Math.max(1, Math.round((p.ms || 0) / 60000));
    var dn = !!auth();
    $('#ohnMan').innerHTML =
      '<div class="ohn-kq">' +
        '<div class="ohn-hoa" aria-hidden="true">' + hoaGiay(22) + '</div>' +
        '<p class="ohn-kq-ic" aria-hidden="true">🎉</p>' +
        '<h2 class="ohn-kq-tit">Xong rồi! Giờ chơi Sân chơi / Nông trại nhé</h2>' +
        '<p class="ohn-kq-sub">Em đúng ngay ' + (tk.dung || 0) + '/' + p.base + ' câu' + (tk.laiDung ? ', làm lại đúng thêm ' + tk.laiDung + ' câu' : '') + '.</p>' +
        '<div class="ohn-kq-o">' +
          '<div><b>' + (tk.srsOk || 0) + '</b><span>từ nhớ được</span></div>' +
          '<div><b>' + (tk.srsSai || 0) + '</b><span>từ cần ôn lại (mai gặp lại)</span></div>' +
          '<div><b>' + (tk.sua || 0) + '</b><span>câu cũ đã sửa</span></div>' +
          '<div><b>' + phut + '</b><span>phút ôn</span></div>' +
          '<div class="is-sao"><b id="ohnSao">' + (dn ? '+' + (p.sao || 0) : '—') + '</b><span>' + (dn ? 'sao kiếm được ⭐' : 'đăng nhập để nhận sao') + '</span></div>' +
        '</div>' +
        '<div class="ohn-kq-nut">' +
          '<a class="ohn-go" href="/game">🎮 Chơi Sân chơi</a>' +
          '<a class="ohn-go is-phu" href="/nong-trai">🌾 Ra Nông trại</a>' +
          '<button type="button" class="ohn-phu" data-ohn-dong>Về trang chủ</button>' +
        '</div>' +
      '</div>';
  }

  /* ---------------- khoi dong ---------------- */
  function khoiDong() {
    if (!A()) return;
    veThe();
    setTimeout(dongBoSai, 4000);
    if (location.hash === '#hom-nay') setTimeout(function () { moThe(false); }, 300);
    // sang ngay moi khi dang mo trang: ve lai the
    setInterval(function () {
      var home = document.getElementById('home');
      if (!document.hidden && home && !home.hidden && !R) veThe();
    }, 300000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', khoiDong);
  else khoiDong();

  window.OnHomNay = { veThe: veThe, moThe: moThe, batDau: batDau, trangThai: trangThai };
})();
