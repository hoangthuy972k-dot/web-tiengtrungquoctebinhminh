/* Cau em tung sai — kho nho cac cau hoc sinh lam sai gan day (dung cho "📅 Hom nay em on gi").
   Ghi tu: Luyen tap trong bai (trac nghiem, dien tu, xep cau — app.js), Kiem tra cuoi bai (app.js)
   va On bai cu o San choi (on-bai-cu.js). Doc boi on-hom-nay.js (khoi "Cau em tung sai").
   localStorage hyv_cau_sai = { ds: [{ id, t, n, lv, url, src, c }], xoa: { id: t } }
     c = cau dang dien thoai (giong cau-dt.js): trac nghiem { lenh, zh, ctx, opts, dung, why } (co the kem
         html/oh = de va dap an la HTML cua chinh trang), xep cau { k:'xep', tu, dap }, go chu { k:'go', pre, post, dap }.
     xoa = cau da sua dung (giu 30 ngay de may khac dong bo len khong lam song lai cau cu).
   Trang chu dong bo kho nay len tai khoan qua "bai dang lam do" (/api/resume/sync) — xem on-hom-nay.js. */
(function () {
  'use strict';
  var KHOA = 'hyv_cau_sai';
  var TOI_DA = 40;
  var GIU_XOA = 30 * 864e5;

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

  // Ghi 1 cau sai. meta = { url (bai), lv (cap), src: 'luyen' | 'kt' | 'obc' }
  function ghi(c, meta) {
    meta = meta || {};
    var s = sach(c);
    if (!s) return;
    var id = maCua(s, meta), now = Date.now();
    var v = doc();
    var cu = null;
    v.ds = v.ds.filter(function (x) { if (x.id === id) { cu = x; return false; } return true; });
    delete v.xoa[id];
    v.ds.unshift({ id: id, t: now, n: (cu ? cu.n || 1 : 0) + 1, lv: String(meta.lv || (cu && cu.lv) || ''), url: String(meta.url || (cu && cu.url) || ''),
      src: String(meta.src || ''), c: s });
    v.ds = v.ds.slice(0, TOI_DA);
    luu(v);
  }
  // Em vua lam dung lai cau nay -> bo khoi kho (ghi dau da xoa de dong bo)
  function xoa(id) {
    var v = doc();
    v.ds = v.ds.filter(function (x) { return x.id !== id; });
    v.xoa[id] = Date.now();
    luu(don(v));
  }
  function don(v) {
    var now = Date.now();
    Object.keys(v.xoa).forEach(function (k) { if (!(now - v.xoa[k] < GIU_XOA)) delete v.xoa[k]; });
    return v;
  }
  // Gop 2 ban (may nay + tai khoan): moi cau lay ban moi hon; da xoa sau lan sai cuoi thi bo
  function gop(a, b) {
    a = a && Array.isArray(a.ds) ? a : { ds: [], xoa: {} };
    b = b && Array.isArray(b.ds) ? b : { ds: [], xoa: {} };
    var xoa = {}, theo = {};
    [a.xoa || {}, b.xoa || {}].forEach(function (m) { Object.keys(m).forEach(function (k) { if (!xoa[k] || m[k] > xoa[k]) xoa[k] = m[k]; }); });
    a.ds.concat(b.ds).forEach(function (x) {
      if (!x || !x.id || !x.c) return;
      if (!theo[x.id] || (x.t || 0) > (theo[x.id].t || 0)) theo[x.id] = x;
    });
    var ds = Object.keys(theo).map(function (k) { return theo[k]; })
      .filter(function (x) { return !(xoa[x.id] >= (x.t || 0)); })
      .sort(function (x, y) { return (y.t || 0) - (x.t || 0); })
      .slice(0, TOI_DA);
    ds.forEach(function (x) { delete xoa[x.id]; });
    return don({ ds: ds, xoa: xoa });
  }

  window.CauSai = {
    KHOA: KHOA,
    doc: doc,
    ghiTat: function (v) { luu(don(v)); },
    ghi: ghi,
    xoa: xoa,
    gop: gop,
    ds: function () { return doc().ds.slice(); }
  };
})();
