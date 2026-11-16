/* DocZh — giong doc tieng Trung dung chung cho moi trang co doc.
   ------------------------------------------------------------------
   Khi co giao bat giong Azure (/admin -> tab 🔊 Giong doc), tieng Trung duoc doc bang am thanh
   cua may chu (GET /api/tts, co cache) thay cho giong cua trinh duyet — ca dien thoai khong co
   giong Trung cung nghe duoc. Khi cai dat la Google (mac dinh) moi thu chay Y HET truoc day.

   1) window.DocZh.doc(text, { m: 'tu'|'cau'|'doan', cap: 'hsk1'…, onstart, onend, onerror })
   2) "Mieng va" speechSynthesis (lap som tren moi trang co doc):
      - speechSynthesis.speak(u): u la tieng Trung (lang zh… hoac phan lon la chu Han) va dang bat
        Azure -> phat am thanh may chu, ban lai su kien start / end / error cho u nhu giong that.
        Cau khong phai tieng Trung (tieng Viet…) -> di thang giong trinh duyet, khong dung gi toi.
      - speechSynthesis.cancel() -> dung ca am thanh may chu.
      - speechSynthesis.speaking -> true ca khi dang phat am thanh may chu (nhac nen tu nho tieng,
        kiem tra "may co phat tieng khong" cua nong trai / on bai van dung).
      May chu loi / mat mang / tra khac 200 -> doc lai bang giong trinh duyet.
   Trang tu tat tieng thi khong goi speak -> khong co gi phat. Luon goi play() qua
   HTMLMediaElement.prototype luc phat (khong giu ban cu) de cac bai test tat tieng van tat duoc. */
(function () {
  'use strict';
  if (window.DocZh) return;
  var SS = window.speechSynthesis || null;
  var CFG_KEY = 'hyv_tts_cfg', TTL = 10 * 60 * 1000;
  var CHU_HOP_LE = /^[㐀-鿿豈-﫿A-Za-z0-9À-ɏ̀-ͯ\s　-〿＀-￯.,!?;:'"()\-…·•—~/|]+$/;
  var HAN = /[㐀-鿿豈-﫿]/g;
  var cfg = null, hongDen = 0;

  try {
    var luu = JSON.parse(localStorage.getItem(CFG_KEY) || 'null');
    if (luu && luu.c && Date.now() - luu.t < TTL) cfg = luu.c;
  } catch (e) { /* bo qua */ }
  function taiCfg() {
    if (!window.fetch) return;
    fetch('/api/tts/cauhinh').then(function (r) { return r.ok ? r.json() : null; }).then(function (c) {
      if (!c) return;
      cfg = { p: c.p, on: !!c.on, v: String(c.v || '') };
      try { localStorage.setItem(CFG_KEY, JSON.stringify({ t: Date.now(), c: cfg })); } catch (e) { /* bo qua */ }
    }).catch(function () { /* giu cau hinh cu / giong trinh duyet */ });
  }
  taiCfg();

  function bat() { return !!(cfg && cfg.p === 'azure' && cfg.on && Date.now() > hongDen); }

  /* ---------- toc do giong doc tieng Trung (2026-11-16, co giao: "giong doc mau nhanh qua, hoi kho nghe") ----------
     3 muc, luu localStorage hyv_toc_doc (dung chung moi trang): cham / vua (mac dinh) / nhanh (= toc do cu).
     Cac trang dat rate ~0.85–0.9 nhu cu; o day nhan theo ty le (giu nguyen cho nao co y doc cham hon). */
  var TOC_KEY = 'hyv_toc_doc';
  var TOC = { cham: { r: 0.6, ten: 'Chậm', ic: '🐢' }, vua: { r: 0.75, ten: 'Vừa', ic: '🐢' }, nhanh: { r: 0.9, ten: 'Nhanh', ic: '🐇' } };
  var TOC_THU_TU = ['cham', 'vua', 'nhanh'];
  function tocDo() { try { var v = localStorage.getItem(TOC_KEY); return TOC[v] ? v : 'vua'; } catch (e) { return 'vua'; } }
  function heSo() { return TOC[tocDo()].r / 0.9; }
  function chinhToc(u) {
    if (!u || u._hyvToc) return;
    u._hyvToc = 1;
    var r = typeof u.rate === 'number' && u.rate > 0 ? u.rate : 1;
    u.rate = Math.max(0.4, Math.min(1.2, Math.round(r * heSo() * 100) / 100));
  }
  function hopLe(t) { return !!t && t.length <= 200 && CHU_HOP_LE.test(t); }
  // Cap HSK cua trang bai hoc (doan theo duong dan) — de may chu chinh nhip doc
  var CAP = (function () {
    var m = /\/lessons\/(hsk(\d)|yct)/.exec(location.pathname || '');
    return m ? (m[2] ? 'hsk' + m[2] : 'yct') : '';
  })();
  function laTiengTrung(u) {
    var l = String(u.lang || (u.voice && u.voice.lang) || '').toLowerCase().replace('_', '-');
    if (/^(yue|zh-hk)/.test(l)) return false;
    if (/^(zh|cmn)/.test(l)) return true;
    if (l) return false;
    var t = String(u.text || '').replace(/\s/g, ''), n = (t.match(HAN) || []).length;
    return n > 0 && n * 2 >= t.length;
  }
  function url(it) {
    return '/api/tts?t=' + encodeURIComponent(it.text) + (it.m ? '&m=' + it.m : '') + (it.cap ? '&cap=' + it.cap : '') +
      '&v=' + encodeURIComponent((cfg && cfg.v) || '');
  }

  /* ---------- bo nho nho trong trang (tai truoc) ---------- */
  var blobs = [];
  function blobCua(u) { for (var i = 0; i < blobs.length; i++) if (blobs[i].u === u) return blobs[i].b; return null; }
  function taiTruoc(ds, o) {
    if (!bat() || !window.fetch || !window.URL || !URL.createObjectURL) return;
    o = o || {};
    (ds || []).slice(0, 20).forEach(function (t) {
      t = String(t || '').trim();
      if (!hopLe(t)) return;
      var u = url({ text: t, m: o.m || '', cap: o.cap || CAP });
      if (blobCua(u)) return;
      fetch(u).then(function (r) { return r.ok ? r.blob() : null; }).then(function (b) {
        if (!b || blobCua(u)) return;
        blobs.push({ u: u, b: URL.createObjectURL(b) });
        while (blobs.length > 40) { try { URL.revokeObjectURL(blobs.shift().b); } catch (e) { /* bo qua */ } }
      }).catch(function () { /* bo qua */ });
    });
  }

  /* ---------- su kien gia cho SpeechSynthesisUtterance ---------- */
  function phatSuKien(u, type, loi) {
    if (!u) return;
    var ev = null;
    try {
      ev = loi ? new SpeechSynthesisErrorEvent('error', { utterance: u, error: loi, charIndex: 0, elapsedTime: 0 })
        : new SpeechSynthesisEvent(type, { utterance: u, charIndex: 0, elapsedTime: 0 });
    } catch (e) {
      try { ev = new Event(type); } catch (e2) { ev = document.createEvent('Event'); ev.initEvent(type, false, false); }
      if (loi) try { Object.defineProperty(ev, 'error', { value: loi }); } catch (e3) { /* bo qua */ }
    }
    try { u.dispatchEvent(ev); } catch (e) {
      var h = u['on' + type];
      if (typeof h === 'function') try { h.call(u, ev); } catch (e4) { /* bo qua */ }
    }
  }

  /* ---------- phat am thanh may chu, theo hang doi nhu speechSynthesis ---------- */
  // Ham goc cua trinh duyet: tra cuu LUC GOI tren prototype (khong giu ban cu), de ai va SpeechSynthesis.prototype sau nay cung co tac dung
  var PROTO = SS && Object.getPrototypeOf(SS);
  var speak0 = PROTO && PROTO.speak && function () { return PROTO.speak.apply(SS, arguments); };
  var cancel0 = PROTO && PROTO.cancel && function () { return PROTO.cancel.apply(SS, arguments); };
  var am = null, hang = [], dang = null, luot = 0, henCho = 0;
  function loa() { if (!am) { am = new Audio(); am.preload = 'auto'; } return am; }
  function sau() { dang = null; if (hang.length) phat(hang.shift()); }
  function batDau(it) { if (it.daBd) return; it.daBd = true; phatSuKien(it.u, 'start'); if (it.cb.onstart) try { it.cb.onstart(); } catch (e) { /* bo qua */ } }
  function ketThuc(it) { phatSuKien(it.u, 'end'); if (it.cb.onend) try { it.cb.onend(); } catch (e) { /* bo qua */ } }
  function biNgat(it, loi) { phatSuKien(it.u, 'error', loi); if (it.cb.onerror) try { it.cb.onerror({ error: loi }); } catch (e) { /* bo qua */ } }
  // Doc bang giong trinh duyet (du phong): utterance cua trang thi dua lai nguyen ven, khong thi tao moi
  function trinhDuyet(it) {
    if (!SS || !speak0) { biNgat(it, 'synthesis-unavailable'); return; }
    var u = it.u;
    if (!u) {
      u = new SpeechSynthesisUtterance(it.text);
      u.lang = 'zh-CN'; u.rate = 0.85;
      var g = giongZh(); if (g) u.voice = g;
      u.onstart = function () { if (it.cb.onstart) it.cb.onstart(); };
      u.onend = function () { if (it.cb.onend) it.cb.onend(); };
      u.onerror = function (e) { if (it.cb.onerror) it.cb.onerror(e); };
    }
    chinhToc(u);
    try { speak0.call(SS, u); } catch (e) { biNgat(it, 'synthesis-failed'); }
  }
  function thatBai(it) {
    luot++; clearTimeout(henCho);
    try { loa().pause(); } catch (e) { /* bo qua */ }
    hongDen = Date.now() + 60000; // 1 phut toi doc bang giong trinh duyet, khoi cho may chu
    var con = [it].concat(hang); hang = []; dang = null;
    con.forEach(trinhDuyet);
  }
  function phat(it) {
    var a = loa(), so = ++luot;
    dang = it;
    function cu() { return so !== luot; }
    a.onplaying = function () { if (cu()) return; clearTimeout(henCho); batDau(it); };
    a.onended = function () { if (cu()) return; clearTimeout(henCho); if (!it.daBd) batDau(it); ketThuc(it); sau(); };
    a.onerror = function () { if (cu()) return; thatBai(it); };
    clearTimeout(henCho);
    henCho = setTimeout(function () { if (!cu() && !it.daBd) thatBai(it); }, 8000);
    try {
      a.src = blobCua(url(it)) || url(it);
      try { a.playbackRate = Math.max(0.6, Math.min(1, heSo())); } catch (e) { /* bo qua */ }
      var p = HTMLMediaElement.prototype.play.call(a); // luc goi, khong giu ban cu
      if (p && p.catch) p.catch(function (err) { if (cu() || (err && err.name === 'AbortError')) return; thatBai(it); });
    } catch (e) { thatBai(it); }
  }
  function xepHang(it) { if (dang) hang.push(it); else phat(it); }
  // Dung am thanh may chu (cau dang doc bao 'interrupted', cau dang cho bao 'canceled')
  function dungMayChu() {
    if (!dang && !hang.length) return;
    var cu = dang, cho = hang;
    luot++; clearTimeout(henCho); dang = null; hang = [];
    try { if (am) am.pause(); } catch (e) { /* bo qua */ }
    if (cu) biNgat(cu, 'interrupted');
    cho.forEach(function (it) { biNgat(it, 'canceled'); });
  }
  function giongZh() {
    try {
      return (SS.getVoices() || []).filter(function (v) { var l = (v.lang || '').toLowerCase().replace('_', '-'); return /^zh/.test(l) && !/^(yue|zh-hk)/.test(l); })[0] || null;
    } catch (e) { return null; }
  }

  /* ---------- mieng va speechSynthesis ---------- */
  if (SS && speak0 && cancel0) {
    SS.speak = function (u) {
      var t = u && typeof u.text === 'string' ? u.text.trim() : '';
      if (u && t && laTiengTrung(u)) chinhToc(u);
      if (!u || !bat() || !t || u.volume === 0 || !hopLe(t) || !laTiengTrung(u)) return speak0.apply(SS, arguments);
      xepHang({ text: t, m: '', cap: CAP, u: u, cb: {} });
    };
    SS.cancel = function () { dungMayChu(); return cancel0.apply(SS, arguments); };
    try {
      var moTa = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(SS), 'speaking');
      if (moTa && moTa.get) {
        Object.defineProperty(SS, 'speaking', { configurable: true, get: function () { return !!dang || moTa.get.call(SS); } });
      }
    } catch (e) { /* bo qua */ }
  }
  // iPhone chi cho the <audio> tu phat sau khi da phat 1 lan trong luot cham: "mo khoa" o lan cham dau
  var daMo = false;
  function moKhoa() {
    if (daMo || !bat()) return;
    daMo = true;
    try {
      var a = loa();
      if (dang) return;
      luot++;
      a.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
      var p = HTMLMediaElement.prototype.play.call(a);
      if (p && p.catch) p.catch(function () { /* bo qua */ });
    } catch (e) { /* bo qua */ }
  }
  document.addEventListener('touchend', moKhoa, true);
  document.addEventListener('pointerdown', moKhoa, true);

  window.DocZh = {
    // Doc 1 doan tieng Trung (ngat cau dang doc). Khong bat Azure -> giong trinh duyet nhu cu.
    doc: function (text, o) {
      o = o || {};
      var it = { text: String(text || '').trim(), m: /^(tu|cau|doan)$/.test(o.m || '') ? o.m : '', cap: o.cap || CAP, u: null,
        cb: { onstart: o.onstart, onend: o.onend, onerror: o.onerror } };
      if (!it.text) return;
      if (SS) { try { SS.cancel(); } catch (e) { /* bo qua */ } } else dungMayChu();
      if (bat() && hopLe(it.text)) xepHang(it); else trinhDuyet(it);
    },
    dung: function () { if (SS) SS.cancel(); else dungMayChu(); },
    bat: bat,                                              // true = dang doc bang giong may chu
    khoa: function (k) { return bat() ? k + '_mc' : k; },   // khoa localStorage rieng cho "may khong nghe duoc" khi dung giong may chu
    taiTruoc: taiTruoc,
    cauHinh: function () { return cfg; },
    lamMoi: taiCfg,
    tocDo: tocDo,
    datTocDo: function (v) { if (TOC[v]) { try { localStorage.setItem(TOC_KEY, v); } catch (e) { /* bo qua */ } veNutToc(); } }
  };

  // Nut "🐢 Vừa" canh nut Am thanh / Pinyin: bam de doi Cham -> Vua -> Nhanh, doc thu 1 cau
  function veNutToc() {
    var b = document.getElementById('tocDocToggle');
    if (!b) return;
    var v = tocDo(), m = TOC[v];
    b.innerHTML = '<span aria-hidden="true">' + m.ic + '</span><span class="tt-label">Đọc:</span><span class="toc-ten">' + m.ten + '</span>';
    b.setAttribute('aria-label', 'Tốc độ giọng đọc tiếng Trung: ' + m.ten + '. Bấm để đổi');
    b.title = 'Tốc độ giọng đọc tiếng Trung: ' + m.ten + ' (bấm để đổi Chậm / Vừa / Nhanh)';
  }
  function ganNutToc() {
    var hop = document.querySelector('.top-toggles');
    if (!hop || document.getElementById('tocDocToggle')) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.id = 'tocDocToggle';
    b.className = 'pinyin-toggle toc-doc-toggle';
    var truoc = document.getElementById('pinyinToggle');
    if (truoc && truoc.parentNode === hop) hop.insertBefore(b, truoc); else hop.appendChild(b);
    veNutToc();
    b.addEventListener('click', function () {
      var v = TOC_THU_TU[(TOC_THU_TU.indexOf(tocDo()) + 1) % TOC_THU_TU.length];
      window.DocZh.datTocDo(v);
      window.DocZh.doc('你好，我们一起学习中文吧。', { m: 'cau' });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ganNutToc);
  else ganNutToc();
})();
