/* Cau em tung sai — kho nho cac cau hoc sinh lam sai gan day (dung cho "📅 Hom nay em on gi").
   Ghi tu: Luyen tap trong bai (trac nghiem, dien tu, xep cau — app.js), Kiem tra cuoi bai (app.js)
   va On bai cu o San choi (on-bai-cu.js). Doc boi on-hom-nay.js (khoi "Cau em tung sai").
   localStorage hyv_cau_sai = { ds: [{ id, t, n, lv, url, src, c }], xoa: { id: t } }
     c = cau dang dien thoai (giong cau-dt.js): trac nghiem { lenh, zh, ctx, opts, dung, why } (co the kem
         html/oh = de va dap an la HTML cua chinh trang), xep cau { k:'xep', tu, dap }, go chu { k:'go', pre, post, dap }.
     xoa = cau da sua dung (giu 30 ngay de may khac dong bo len khong lam song lai cau cu).
   Them (2026-11, cho tab giao vien "📊 Câu lớp hay sai" — /api/admin/cau-sai; ban cu khong co van doc duoc):
     moi cau: ts = [ms cac lan sai] (cu chi co t = lan sai cuoi), tl = [[dap an em chon sai, ms], ...] (toi da 5);
     da = [cau da sua dung, kem sua: ms] — chuyen tu ds sang khi em lam dung lai, giu 35 ngay / 20 cau
          (ke hoach on khong doc phan nay, chi de giao vien biet tuan nay lop sai cau nao);
     tu = { "<chu Han>": [ms cac lan quen tu] } — tu sai trong lich on / bai tap (app.js srsAnswer / srsSignal).
   Trang chu dong bo kho nay len tai khoan qua "bai dang lam do" (/api/resume/sync) — xem on-hom-nay.js. */
(function () {
  'use strict';
  var KHOA = 'hyv_cau_sai';
  var TOI_DA = 40;
  var GIU_XOA = 30 * 864e5;
  var GIU_LS = 35 * 864e5;   // lich su cho giao vien: 4 tuan + du
  var TOI_DA_DA = 20;
  var TOI_DA_TU = 80;
  var TOI_DA_BYTE = 20000;   // may chu nhan toi da 24 KB / phan

  function doc() {
    try {
      var v = JSON.parse(localStorage.getItem(KHOA) || 'null');
      if (v && Array.isArray(v.ds)) { v.xoa = v.xoa && typeof v.xoa === 'object' ? v.xoa : {}; return v; }
    } catch (e) { /* bo qua */ }
    return { ds: [], xoa: {} };
  }
  function luu(v) {
    try { localStorage.setItem(KHOA, JSON.stringify(v)); } catch (e) { /* bo qua */ }
    try { window.dispatchEvent(new CustomEvent('cau-sai:doi')); } catch (e) { /* bo qua */ }
  }
  function bam(s) {
    var h = 2166136261;
    s = String(s);
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(36);
  }
  function chu(s, n) {
    s = String(s == null ? '' : s).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    return s.length > n ? s.slice(0, n) : s;
  }
  function tho(s, n) { s = String(s == null ? '' : s); return s.length > n ? s.slice(0, n) : s; }

  // Chi giu cac truong can thiet, cat bot do dai (kho dong bo toi da 24 KB)
  function sach(c) {
    if (!c || typeof c !== 'object') return null;
    var o = {};
    if (c.k === 'xep') {
      if (!Array.isArray(c.tu) || c.tu.length < 2 || !c.dap) return null;
      o = { k: 'xep', lenh: chu(c.lenh || 'Xếp các từ thành câu đúng', 80), ctx: chu(c.ctx, 160), why: chu(c.why, 300),
        tu: c.tu.slice(0, 14).map(function (w) { return chu(w, 20); }), dap: chu(c.dap, 120) };
      if (c.speak) o.speak = chu(c.speak, 120);
      return o;
    }
    if (c.k === 'go') {
      if (!c.dap) return null;
      o = { k: 'go', lenh: chu(c.lenh || 'Điền từ còn thiếu vào chỗ trống', 80), pre: chu(c.pre, 120), post: chu(c.post, 120),
        dap: chu(c.dap, 40), why: chu(c.why, 300), hint: chu(c.hint, 80) };
      if (c.html) o.html = tho(c.html, 1500);
      return o;
    }
    if (c.k) return null; // noi tu: khong luu (cau ghep ngau nhien)
    if (!Array.isArray(c.opts) || c.opts.length < 2 || typeof c.dung !== 'number' || c.dung < 0 || c.dung >= c.opts.length) return null;
    o = { lenh: chu(c.lenh, 100), why: chu(c.why, 400), dung: c.dung };
    if (c.html) {
      // de cua chinh trang (Kiem tra cuoi bai): giu HTML, dap an la HTML da thoat san
      o.html = tho(c.html, 1500);
      o.opts = c.opts.slice(0, 6).map(function (x) { return tho(x, 200); });
      o.oh = 1;
      if (c.oz) o.oz = 1;
    } else {
      o.zh = chu(c.zh, 300);
      o.ctx = chu(c.ctx, 200);
      o.opts = c.opts.slice(0, 6).map(function (x) { return chu(x, 120); });
    }
    if (c.nghe) { o.nghe = chu(c.nghe, 120); if (c.py) o.py = chu(c.py, 160); }
    if (c.day) o.day = chu(c.day, 200);
    if (c.speak) o.speak = chu(c.speak, 120);
    return o;
  }
  function maCua(c, meta) {
    var goc = c.k === 'xep' ? c.dap : c.k === 'go' ? (c.pre || '') + '_' + (c.post || '') + c.dap + (c.html || '')
      : (c.html || c.zh || '') + '|' + (c.nghe || '') + '|' + c.opts[c.dung];
    return bam((meta.url || meta.lv || '') + '|' + (c.k || 'mc') + '|' + chu(goc, 400));
  }

  /* ---- lich su sai (cho giao vien): moc thoi gian + dap an em chon ---- */
  function moc(x) { return x && Array.isArray(x.ts) && x.ts.length ? x.ts : (x && x.t ? [x.t] : []); }
  // Hop 2 day moc (khong trung, tang dan); bo moc qua 35 ngay nhung luon giu lan cuoi; toi da 12
  function gopMoc(a, b) {
    var m = {}, now = Date.now();
    (a || []).concat(b || []).forEach(function (t) { t = Math.round(Number(t)); if (t > 0) m[t] = 1; });
    var ds = Object.keys(m).map(Number).sort(function (x, y) { return x - y; });
    var giu = ds.filter(function (t) { return now - t < GIU_LS; });
    if (!giu.length && ds.length) giu = [ds[ds.length - 1]];
    return giu.slice(-12);
  }
  function gopTl(a, b) {
    var m = {};
    (a || []).concat(b || []).forEach(function (p) {
      if (Array.isArray(p) && p[0] && Number(p[1]) > 0) m[p[1] + '|' + p[0]] = [String(p[0]), Number(p[1])];
    });
    return Object.keys(m).map(function (k) { return m[k]; }).sort(function (x, y) { return x[1] - y[1]; }).slice(-5);
  }
  // Dap an em vua chon / go (chu, mang tu da xep, hay chi so — chi so thi bo)
  function traLoiChu(tl) {
    if (Array.isArray(tl)) tl = tl.map(function (w) { return w && typeof w === 'object' ? w.word || w.w || '' : w; }).join('');
    if (typeof tl !== 'string') return '';
    return chu(tl, 60);
  }
  // 2 ban cua cung 1 cau (2 may / ds + da): lay ban sai sau cung, cong don moc va dap an sai
  function hop(p, q) {
    var moi = (q.t || 0) > (p.t || 0) ? q : p, o = {};
    Object.keys(moi).forEach(function (k) { o[k] = moi[k]; });
    var ts = gopMoc(moc(p), moc(q));
    if (ts.length > 1 || p.ts || q.ts) o.ts = ts;
    var tl = gopTl(p.tl, q.tl);
    if (tl.length) o.tl = tl; else delete o.tl;
    var sua = Math.max(Number(p.sua) || 0, Number(q.sua) || 0);
    if (sua) o.sua = sua;
    return o;
  }

  // Ghi 1 cau sai. meta = { url (bai), lv (cap), src: 'luyen' | 'kt' | 'obc' | 'ohn', tl: dap an em chon (khong bat buoc) }
  // (c.tl cung duoc: dap an em chon sai — chi luu vao lich su, khong nam trong cau)
  function ghi(c, meta) {
    meta = meta || {};
    var tl = traLoiChu(meta.tl != null ? meta.tl : c && c.tl);
    var s = sach(c);
    if (!s) return;
    var id = maCua(s, meta), now = Date.now();
    var v = doc();
    var cu = null;
    v.ds = v.ds.filter(function (x) { if (x.id === id) { cu = x; return false; } return true; });
    // cau da sua dung roi lai sai -> lay lai lich su cu
    if (!cu && Array.isArray(v.da)) {
      v.da = v.da.filter(function (x) { if (x && x.id === id) { cu = x; return false; } return true; });
      if (!v.da.length) delete v.da;
    }
    delete v.xoa[id];
    var moi = { id: id, t: now, n: (cu ? cu.n || 1 : 0) + 1, lv: String(meta.lv || (cu && cu.lv) || ''), url: String(meta.url || (cu && cu.url) || ''),
      // sai lai o "Hom nay em on gi" van giu nguon goc (luyen tap / kiem tra) de giao vien biet cau tu dau
      src: String((meta.src === 'ohn' && cu && cu.src) || meta.src || ''), c: s, ts: gopMoc(moc(cu), [now]) };
    var tls = gopTl(cu && cu.tl, tl ? [[tl, now]] : []);
    if (tls.length) moi.tl = tls;
    v.ds.unshift(moi);
    v.ds = v.ds.slice(0, TOI_DA);
    luu(v);
  }
  // Em vua lam dung lai cau nay -> bo khoi kho (ghi dau da xoa de dong bo); giu ban sao trong da cho giao vien
  function xoa(id) {
    var v = doc(), bo = null, now = Date.now();
    v.ds = v.ds.filter(function (x) { if (x.id === id) { bo = x; return false; } return true; });
    v.xoa[id] = now;
    if (bo) {
      var b = {};
      Object.keys(bo).forEach(function (k) { b[k] = bo[k]; });
      b.sua = now;
      v.da = [b].concat((Array.isArray(v.da) ? v.da : []).filter(function (x) { return x && x.id !== id; }));
    }
    luu(don(v));
  }
  // Ghi 1 lan quen tu (lich on / bai tap) — chi cho bao cao giao vien. 2 tin hieu trong 1 phut = 1 lan.
  function tuSai(zh) {
    zh = chu(zh, 12);
    if (!zh) return;
    var v = doc(), now = Date.now();
    v.tu = v.tu && typeof v.tu === 'object' && !Array.isArray(v.tu) ? v.tu : {};
    var m = Array.isArray(v.tu[zh]) ? v.tu[zh] : [];
    if (m.length && now - m[m.length - 1] < 60000) return;
    v.tu[zh] = gopMoc(m, [now]).slice(-6);
    luu(don(v));
  }
  function don(v) {
    var now = Date.now();
    Object.keys(v.xoa).forEach(function (k) { if (!(now - v.xoa[k] < GIU_XOA)) delete v.xoa[k]; });
    if (Array.isArray(v.da)) {
      v.da = v.da.filter(function (x) { return x && x.id && x.c && now - (x.t || 0) < GIU_LS; })
        .sort(function (x, y) { return (y.t || 0) - (x.t || 0); }).slice(0, TOI_DA_DA);
      if (!v.da.length) delete v.da;
    }
    if (v.tu && typeof v.tu === 'object') {
      var tu = {};
      Object.keys(v.tu).forEach(function (k) {
        var m = (Array.isArray(v.tu[k]) ? v.tu[k] : []).filter(function (t) { return now - t < GIU_LS; });
        if (m.length) tu[k] = m.slice(-6);
      });
      var ks = Object.keys(tu).sort(function (x, y) { return tu[y][tu[y].length - 1] - tu[x][tu[x].length - 1]; });
      ks.slice(TOI_DA_TU).forEach(function (k) { delete tu[k]; });
      if (ks.length) v.tu = tu; else delete v.tu;
    }
    return v;
  }
  function soByte(v) {
    var s = JSON.stringify(v);
    try { return new TextEncoder().encode(s).length; } catch (e) { return s.length * 3; }
  }
  // Gop 2 ban (may nay + tai khoan): moi cau lay ban moi hon; da xoa sau lan sai cuoi thi bo
  function gop(a, b) {
    a = a && Array.isArray(a.ds) ? a : { ds: [], xoa: {} };
    b = b && Array.isArray(b.ds) ? b : { ds: [], xoa: {} };
    var xoa = {}, theo = {}, da = {};
    [a.xoa || {}, b.xoa || {}].forEach(function (m) { Object.keys(m).forEach(function (k) { if (!xoa[k] || m[k] > xoa[k]) xoa[k] = m[k]; }); });
    a.ds.concat(b.ds).forEach(function (x) {
      if (!x || !x.id || !x.c) return;
      theo[x.id] = theo[x.id] ? hop(theo[x.id], x) : x;
    });
    (Array.isArray(a.da) ? a.da : []).concat(Array.isArray(b.da) ? b.da : []).forEach(function (x) {
      if (!x || !x.id || !x.c) return;
      da[x.id] = da[x.id] ? hop(da[x.id], x) : x;
    });
    var ds = [];
    Object.keys(theo).forEach(function (k) {
      var x = theo[k];
      if (xoa[x.id] >= (x.t || 0)) {
        // may kia da sua dung cau nay -> sang lich su (giu cac lan sai cua may nay)
        var y = {};
        Object.keys(x).forEach(function (f) { y[f] = x[f]; });
        y.sua = Math.max(Number(y.sua) || 0, xoa[x.id]);
        da[x.id] = da[x.id] ? hop(da[x.id], y) : y;
      } else {
        // sai lai sau khi da sua -> 1 muc duy nhat trong ds, mang theo lich su
        if (da[x.id]) { x = hop(da[x.id], x); delete x.sua; delete da[x.id]; }
        ds.push(x);
      }
    });
    ds = ds.sort(function (x, y) { return (y.t || 0) - (x.t || 0); }).slice(0, TOI_DA);
    ds.forEach(function (x) { delete xoa[x.id]; });
    var kq = { ds: ds, xoa: xoa };
    var daDs = Object.keys(da).map(function (k) { return da[k]; });
    if (daDs.length) kq.da = daDs;
    var tu = {};
    [a.tu, b.tu].forEach(function (m) {
      if (!m || typeof m !== 'object' || Array.isArray(m)) return;
      Object.keys(m).forEach(function (k) { if (Array.isArray(m[k])) tu[k] = gopMoc(tu[k], m[k]); });
    });
    if (Object.keys(tu).length) kq.tu = tu;
    kq = don(kq);
    // Gioi han dung luong: bot lich su da sua -> tu cu -> cau cu (giu toi thieu 5 cau)
    while (kq.da && kq.da.length && soByte(kq) > TOI_DA_BYTE) { kq.da.pop(); if (!kq.da.length) delete kq.da; }
    while (kq.tu && Object.keys(kq.tu).length > 10 && soByte(kq) > TOI_DA_BYTE) {
      var ks = Object.keys(kq.tu).sort(function (x, y) { return kq.tu[x][kq.tu[x].length - 1] - kq.tu[y][kq.tu[y].length - 1]; });
      ks.slice(0, 5).forEach(function (k) { delete kq.tu[k]; });
    }
    while (kq.ds.length > 5 && soByte(kq) > TOI_DA_BYTE) kq.ds.pop();
    return kq;
  }

  window.CauSai = {
    KHOA: KHOA,
    doc: doc,
    ghiTat: function (v) { luu(don(v)); },
    ghi: ghi,
    xoa: xoa,
    tuSai: tuSai,
    gop: gop,
    ds: function () { return doc().ds.slice(); }
  };
})();
