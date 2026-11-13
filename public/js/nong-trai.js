/* ══════════════════════════════════════════════════════════════════
   NONG TRAI CUA EM  (/nong-trai)
   ------------------------------------------------------------------
   Moi hoc sinh co 1 nong trai luu tren may chu (nong-trai.js o goc).
   · Sao hoc tap -> mua vat nuoi, do trang tri, o ruong, mo rong dat
   · Xu (ban nong san, don hang, qua diem danh) -> mua hat giong
   · Cho vat nuoi an = tra loi dung 3 cau on tu vung (bai dang hoc +
     cac bai truoc); tuoi nuoc = 1 cau -> cay lon nhanh hon
   · Moi mon deu co ten chu Han + pinyin, bam vao la doc to
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var $ = function (s, g) { return (g || document).querySelector(s); };
  var $all = function (s, g) { return Array.prototype.slice.call((g || document).querySelectorAll(s)); };
  var ANH = '/images/farm/';
  var V = '?v=1';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function anh(ten) {
    var sp = /^sp-/.test(ten) && typeof S !== 'undefined' && S && S.cat && S.cat.SP[ten.slice(3)];
    if (sp && sp.hinh) return '/images/wu/' + sp.hinh + '.png';
    return ANH + ten + '.svg' + V;
  }
  function img(ten, cls) {
    return '<img class="' + (cls || '') + '" src="' + anh(ten) + '" alt="" draggable="false">';
  }

  /* ---------------- dang nhap & goi API ---------------- */
  function auth() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a : null; } catch (e) { return null; }
  }
  function goi(url, body) {
    var a = auth();
    var h = { 'Content-Type': 'application/json' };
    if (a) h.Authorization = 'Bearer ' + a.token;
    return fetch(url, body ? { method: 'POST', headers: h, body: JSON.stringify(body) } : { headers: h }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) { var e = new Error(j.error || 'Lỗi mạng, thử lại nhé.'); e.status = r.status; e.chuaHoc = !!j.chuaHoc; throw e; }
        return j;
      });
    });
  }

  /* ---------------- trang thai ---------------- */
  var S = {
    st: null,        // trang thai nong trai cua em (tu may chu)
    cat: null,       // danh muc: CAY, CON, SP, TT...
    lech: 0,         // gio may chu - gio may nay
    che: 'xem',      // xem | dat | sx
    dat: null,       // { k, nguon: 'mua'|'dat' } khi dang dat mon moi
    chon: null,      // id vat dang chon (che do sap xep)
    tham: null,      // nong trai ban dang tham { id, ten, ... }
    o: 64,           // kich thuoc 1 o (px)
    ban: false       // dang gui hanh dong
  };
  function bayGio() { return Date.now() + S.lech; }

  try { var z = +localStorage.getItem('hyv_nt_zoom'); if (z >= 40 && z <= 110) S.o = z; } catch (e) { /* bo qua */ }
  if (!localStorage.getItem('hyv_nt_zoom') && window.innerWidth < 640) S.o = 50;

  /* ---------------- am thanh nho ---------------- */
  var ac = null;
  function tieng(kieu) {
    try {
      if (!ac) ac = new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
      var t = ac.currentTime;
      var not = { thu: [660, 880], xu: [988, 1319], sai: [220, 180], dung: [784, 1047], mua: [523, 784], len: [523, 659, 784, 1047] }[kieu] || [660];
      not.forEach(function (f, i) {
        var o = ac.createOscillator(), g = ac.createGain();
        o.type = kieu === 'sai' ? 'square' : 'triangle';
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t + i * 0.09);
        g.gain.exponentialRampToValueAtTime(kieu === 'sai' ? 0.05 : 0.12, t + i * 0.09 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.09 + 0.22);
        o.connect(g); g.connect(ac.destination);
        o.start(t + i * 0.09); o.stop(t + i * 0.09 + 0.25);
      });
    } catch (e) { /* bo qua */ }
  }
  // Doc tieng Trung bang giong cua trinh duyet (giong cach trang bai hoc lam):
  //  - CHON HAN giong tieng Trung: nhieu dien thoai Android chi dat lang='zh-CN' thi im lang
  //  - "mo khoa" o lan cham dau tien: iPhone chan doc tu dong neu chua tung doc khi em cham
  //  - may khong co giong Trung: thu giong Google cua may chu (/api/tts, neu da cau hinh)
  var loa = typeof Audio !== 'undefined' ? new Audio() : null;
  var demTts = {}, ttsHong = false, daMoKhoa = false, giongZh = null;
  function chonGiongZh() {
    if (!window.speechSynthesis) return null;
    var ds = (speechSynthesis.getVoices() || []).filter(function (v) {
      var l = (v.lang || '').toLowerCase().replace('_', '-');
      return /^zh/.test(l) && !/^(yue|zh-hk)/.test(l);
    });
    function diem(v) {
      var l = (v.lang || '').toLowerCase().replace('_', '-'), t = (v.name || '').toLowerCase();
      return (/^zh-cn|^zh-hans/.test(l) ? 100 : 0) + (/google/.test(t) ? 40 : 0) + (/natural|online|neural/.test(t) ? 30 : 0);
    }
    return ds.sort(function (a, b) { return diem(b) - diem(a); })[0] || null;
  }
  // true / false / null (chua biet: danh sach giong chua nap xong)
  function coGiongZh() {
    if (!window.speechSynthesis) return false;
    if (!giongZh) giongZh = chonGiongZh();
    if (giongZh) return true;
    return (speechSynthesis.getVoices() || []).length ? false : null;
  }
  if (window.speechSynthesis) {
    try { speechSynthesis.addEventListener('voiceschanged', function () { giongZh = chonGiongZh(); }); } catch (e) { /* bo qua */ }
  }
  function moKhoa() {
    if (daMoKhoa) return;
    daMoKhoa = true;
    try { if (window.speechSynthesis) { var u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); } } catch (e) { /* bo qua */ }
    try { if (loa) { loa.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA='; var p = loa.play(); if (p && p.catch) p.catch(function () {}); } } catch (e) { /* bo qua */ }
  }
  document.addEventListener('pointerdown', moKhoa, true);
  document.addEventListener('touchstart', moKhoa, true);
  function layTts(zh) {
    if (demTts[zh]) return Promise.resolve(demTts[zh]);
    if (ttsHong) return Promise.reject();
    return fetch('/api/tts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: zh.slice(0, 200) }) })
      .then(function (r) { if (r.status === 503) ttsHong = true; return r.ok ? r.json() : Promise.reject(); })
      .then(function (d) { if (!d || !d.audioContent) throw new Error(); demTts[zh] = d.audioContent; return d.audioContent; });
  }
  function docTrinhDuyet(zh, loi) {
    if (!window.speechSynthesis) { if (loi) loi(); return; }
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(zh);
      u.lang = 'zh-CN'; u.rate = 0.85;
      if (giongZh) u.voice = giongZh;
      u.onerror = function (e) { if (loi && e && e.error !== 'interrupted' && e.error !== 'canceled') loi(); };
      speechSynthesis.speak(u);
    } catch (e) { if (loi) loi(); }
  }
  function docMayChu(zh, loi) {
    layTts(zh).then(function (b64) {
      if (!loa) throw new Error();
      loa.pause();
      loa.src = 'data:audio/mp3;base64,' + b64;
      var p = loa.play();
      if (p && p.catch) p.catch(function () { if (loi) loi(); });
    }).catch(function () { if (loi) loi(); });
  }
  // loi(): may nay khong phat duoc tieng (cau "nghe" se hien pinyin de van lam duoc)
  function doc(zh, loi) {
    if (!zh) return;
    var co = coGiongZh();
    if (co === false) { docMayChu(zh, loi); return; }
    // goi NGAY (dong bo) de giu "luot cham" cua em — iPhone moi cho doc
    docTrinhDuyet(zh, function () { docMayChu(zh, loi); });
  }
  // Doc co kiem tra (cho cau nghe): ok(true) neu may that su phat tieng. Nhieu dien thoai co giong Trung trong danh sach
  // nhung khong co du lieu am thanh / chan doc khi chua cham -> im lang ma khong bao loi; nhin su kien start/end de biet.
  function docKiem(zh, ok) {
    var xong = false;
    function ket(v) { if (xong) return; xong = true; ok(v); }
    if (!window.speechSynthesis || coGiongZh() === false) { ket(false); return; }
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
      setTimeout(function () { ket(bd > 0 || speechSynthesis.speaking); }, 2500);
    } catch (e) { ket(false); }
  }
  // may nay da thu ma khong phat duoc tieng -> khong xin cau nghe nua
  function mayKhongNghe() { try { return localStorage.getItem('hyv_nt_khong_nghe') === '1'; } catch (e) { return false; } }
  function xinCauNghe() { return coGiongZh() === true && !mayKhongNghe(); }
  // May chac chan khong doc duoc (khong co giong Trung, may chu cung khong co giong) -> bo kieu cau nghe
  function nghiDuoc() { return coGiongZh() !== false || !ttsHong; }

  /* ---------------- thong bao ---------------- */
  var baoHen = 0;
  // Thong bao: moi luc chi 1 cai (khong chong len nhau); cai sau xep hang doi, trung noi dung thi bo.
  // Bao loi chen len dau hang. Thoi gian hien theo do dai chu.
  var baoHang = [], baoDang = null;
  function bao(chu, loai) {
    chu = String(chu || '');
    if (!chu) return;
    if ((baoDang && baoDang.chu === chu) || baoHang.some(function (x) { return x.chu === chu; })) return;
    var x = { chu: chu, loai: loai || '' };
    if (x.loai === 'loi') baoHang.unshift(x); else baoHang.push(x);
    if (baoHang.length > 4) baoHang.splice(4);
    if (!baoDang) baoTiep();
  }
  function baoTiep() {
    var b = $('#ntBao');
    baoDang = baoHang.shift() || null;
    if (!baoDang) return;
    b.textContent = baoDang.chu;
    b.className = 'nt-bao hien' + (baoDang.loai ? ' ' + baoDang.loai : '');
    clearTimeout(baoHen);
    baoHen = setTimeout(function () {
      b.className = 'nt-bao' + (baoDang && baoDang.loai ? ' ' + baoDang.loai : '');
      baoHen = setTimeout(function () { baoDang = null; baoTiep(); }, 260);
    }, Math.min(5200, 2200 + baoDang.chu.length * 28));
  }

  /* ---------------- thoi gian ---------------- */
  function conLai(ms) {
    var s = Math.max(0, Math.ceil(ms / 1000));
    var g = Math.floor(s / 3600), p = Math.floor((s % 3600) / 60), gi = s % 60;
    if (g) return g + ' giờ ' + (p ? p + ' phút' : '');
    if (p) return p + ' phút ' + (gi < 10 ? '0' : '') + gi + ' giây';
    return gi + ' giây';
  }
  function thoiLuong(phut) {
    if (phut < 60) return phut + ' phút';
    return (phut / 60) + ' giờ';
  }

  /* ---------------- thong tin tung vat ---------------- */
  function rong(o) {
    if (o.k === 'nha' || o.k === 'kho') return 2;
    var t = S.cat.TT[o.k];
    return (t && t.w) || 1;
  }
  function tenMon(k, n) {
    var c = S.cat;
    if (k === 'nha') return c.NHA[n || 1];
    if (k === 'kho') return c.KHO;
    if (k === 'o') return c.O_DAT;
    return c.CON[k] || c.TT[k] || c.SP[k] || c.CAY[k] || { zh: '', py: '', vn: k };
  }
  // Trang thai hien tai cua 1 vat: dung de chon hinh, bong bong va thanh thoi gian
  function trangThai(o) {
    var now = bayGio(), c = S.cat;
    if (o.k === 'o') {
      if (!o.c) return { hinh: 'dat', loai: 'trong' };
      var cay = c.CAY[o.c];
      var tong = cay.phut * 60000;
      var con = o.h - now;
      if (con <= 0) return { hinh: o.c, loai: 'chin', bong: 'ic-thuhoach' };
      var da = 1 - con / tong;
      return { hinh: da < 0.2 ? 'gieo' : da < 0.6 ? 'mam' : 'lon', loai: 'lon', con: con, tile: Math.max(0, Math.min(1, da)), tuoi: o.t };
    }
    if (c.CON[o.k]) {
      if (!o.h) return { hinh: o.k + '-doi', loai: 'doi', bong: 'ic-doi' };
      var conc = o.h - now;
      if (conc <= 0) return { hinh: o.k + '-xong', loai: 'xong', bong: 'sp-' + c.CON[o.k].sp };
      return { hinh: o.k, loai: 'lam', con: conc, tile: 1 - conc / (c.CON[o.k].phut * 60000) };
    }
    if (o.k === 'nha') return { hinh: 'nha-' + (o.n || 1) };
    return { hinh: o.k };
  }

  /* ---------------- ve ban do ---------------- */
  function duLieuBanDo() { return S.tham || S.st; }

  function veBanDo() {
    var d = duLieuBanDo();
    if (!d) return;
    var dat = $('#ntDat');
    var T = S.o;
    dat.style.setProperty('--o', T + 'px');
    dat.style.width = d.kich.w * T + 'px';
    dat.style.height = d.kich.h * T + 'px';
    var html = '';
    // o dang dat do: o luoi + bong mo
    if (S.che === 'dat') html += '<div class="nt-luoi"></div>';
    d.o.slice().sort(function (a, b) { return (a.y + rong(a)) - (b.y + rong(b)) || a.x - b.x; }).forEach(function (o) {
      html += htmlVat(o);
    });
    if (S.che === 'dat') html += '<div class="nt-bong-dat" id="ntBongDat" hidden>' + img(hinhDat(S.dat.k)) + '</div>';
    dat.innerHTML = html;
    $all('img', dat).forEach(ganLoiAnh);
    veNhanVat();
    veTai();
    if (!S.tham) veHud();
  }
  function hinhDat(k) {
    if (k === 'o') return 'dat';
    if (S.cat.CON[k]) return k;
    return k;
  }
  function htmlVat(o) {
    var T = S.o, w = rong(o), t = trangThai(o);
    var phang = o.k === 'o' || (S.cat.TT[o.k] && S.cat.TT[o.k].phang);
    var cls = 'nt-vat nt-k-' + o.k + (phang ? ' phang' : '') + (t.loai ? ' tt-' + t.loai : '') + (S.chon === o.id ? ' chon' : '');
    var h = '<button type="button" class="' + cls + '" data-id="' + o.id + '" style="left:' + o.x * T + 'px;top:' + o.y * T +
      'px;width:' + w * T + 'px;height:' + w * T + 'px;z-index:' + (phang ? 1 : (o.y + w) * 10) + ';--lech:-' + ((o.id * 0.73) % 3).toFixed(2) + 's" aria-label="' + esc(tenMon(o.k, o.n).vn) + '">';
    h += '<img class="nt-hinh" src="' + anh(t.hinh) + '" alt="" draggable="false">';
    // dang tham ban: bong bong chi cho viec giup duoc (tuoi cay, cho an)
    var bong = S.tham ? (o.k === 'o' && t.loai === 'lon' && !o.t ? 'ic-tuoi' : t.loai === 'doi' ? 'ic-doi' : null) : t.bong;
    if (bong) h += '<span class="nt-bong">' + img(bong) + '</span>';
    if (t.con != null) h += '<span class="nt-thoi"><i style="width:' + Math.round(t.tile * 100) + '%"></i></span>';
    if (t.tuoi) h += '<span class="nt-giot" aria-hidden="true"></span>';
    h += '</button>';
    return h;
  }
  function ganLoiAnh(im) {
    im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true });
  }

  // Moi giay: cap nhat thanh thoi gian, doi hinh khi cay lon / chin
  var chuKy = {};
  function nhip() {
    var d = duLieuBanDo();
    if (!d || !S.cat) return;
    d.o.forEach(function (o) {
      if (o.k !== 'o' && !S.cat.CON[o.k]) return;
      var t = trangThai(o);
      var ky = t.hinh + '|' + t.loai;
      var el = document.querySelector('.nt-vat[data-id="' + o.id + '"]');
      if (!el) return;
      if (chuKy[o.id] && chuKy[o.id] !== ky) {
        el.outerHTML = htmlVat(o);
        el = document.querySelector('.nt-vat[data-id="' + o.id + '"]');
        $all('img', el).forEach(ganLoiAnh);
        if (t.loai === 'chin' || t.loai === 'xong') el.classList.add('vua-xong');
      } else if (t.con != null) {
        var i = el.querySelector('.nt-thoi i');
        if (i) i.style.width = Math.round(t.tile * 100) + '%';
      }
      chuKy[o.id] = ky;
    });
    capNhatNoi();
    nutThuHet();
    nvDiDao();
    nvNoiNhip();
  }

  /* ---------------- HUD ---------------- */
  function veHud() {
    var s = S.st;
    veNutVongQuay();
    veNutHoCau();
    // so lon rut gon (12345 -> 12,3k) de cum sao / xu khong tran man dien thoai
    $('#ntSaoSo').textContent = soGon(s.sao);
    $('#ntXuSo').textContent = soGon(s.xu);
    $('#ntSao').title = s.sao + ' sao';
    $('#ntXu').title = s.xu + ' xu — đổi sao lấy xu';
    $('#ntLvSo').textContent = s.lv;
    var tile = s.xpSau > s.xpLv ? (s.xp - s.xpLv) / (s.xpSau - s.xpLv) : 1;
    $('#ntXpThanh').style.width = Math.round(Math.max(0, Math.min(1, tile)) * 100) + '%';
    $('#ntLv').title = 'Cấp ' + s.lv + ' · ' + (s.xp - s.xpLv) + '/' + (s.xpSau - s.xpLv) + ' kinh nghiệm';
    var conDon = s.don.some(function (dn) { return !dn.xong && duHang(dn.can); });
    $('#ntDonCham').hidden = !conDon;
    $('#ntBanCham').hidden = !(s.nkMoi > 0);
    veMucHud();
    kiemLenHv();
    veNutNv();
    veNutThu();
    chamThem();
    veCotTrai();
  }
  // Muc tieu hoc hom nay: moc ruong ke tiep, so ruong dang cho mo
  function tinhMuc() {
    var h = S.st.hoc || { homNay: 0, tuan: 0, ruong: [] }, R = S.cat.RUONG || [];
    var mo = R.filter(function (r, i) { return h.homNay >= r.sao && h.ruong.indexOf(i) < 0; }).length;
    var tiep = R.filter(function (r) { return h.homNay < r.sao; })[0] || null;
    return { h: h, R: R, mo: mo, tiep: tiep };
  }
  function veMucHud() {
    var m = tinhMuc(), nut = $('#ntMuc');
    if (!nut || !m.R.length) return;
    var dich = m.tiep ? m.tiep.sao : m.R[m.R.length - 1].sao;
    $('#ntMucSo').textContent = m.mo ? 'Mở rương!' : m.h.homNay + '/' + dich;
    var nv = S.st.nv;
    $('#ntMucPhu').textContent = m.mo ? m.mo + ' rương đang chờ' : (m.tiep ? 'sao hôm nay' : 'đủ 3 rương') + (nv ? ' · nhiệm vụ ' + nv.xong + '/' + nv.ds.length : '');
    $('#ntMucVong').setAttribute('stroke-dasharray', Math.round(Math.min(1, m.h.homNay / dich) * 100) + ' 100');
    nut.classList.toggle('co-qua', m.mo > 0);
    nut.classList.toggle('xong', !m.tiep && !m.mo);
    $('#ntHocCham').hidden = !m.mo;
    veNvTiep();
  }
  // The nho duoi muc tieu: chi hien nhiem vu ke tiep (bam de di toi); thu gon duoc, danh sach day du o bang Nhiem vu
  function nvGon() { try { return localStorage.getItem('hyv_nt_nv_gon') === '1'; } catch (e) { return false; } }
  function veNvTiep() {
    var el = $('#ntNvTiep'), gon = $('#ntNvGon'), nv = S.st && S.st.nv;
    if (!el || !gon) return;
    var tiep = nv && nv.ds.filter(function (x) { return !x.xong; })[0];
    var quaCho = nv && nv.thuong.some(function (t, i) { return nv.xong >= t.can && nv.nhan.indexOf(i) < 0; });
    if (!nv || (!tiep && !quaCho)) { el.hidden = true; gon.hidden = true; return; }
    gon.hidden = false;
    var thu = nvGon();
    el.hidden = thu;
    gon.setAttribute('aria-expanded', thu ? 'false' : 'true');
    gon.setAttribute('aria-label', thu ? 'Mở nhiệm vụ kế tiếp' : 'Thu gọn nhiệm vụ');
    gon.classList.toggle('thu', thu);
    el.setAttribute('data-nv-k', quaCho ? 'qua' : tiep.k);
    el.innerHTML = quaCho ? '<span aria-hidden="true">🎁</span><b>Nhận quà nhiệm vụ</b><i aria-hidden="true">›</i>'
      : '<span aria-hidden="true">' + (NV_IC[tiep.k] || '🎯') + '</span><b>' + esc(tiep.ten) + '</b><small>' + nv.xong + '/' + nv.ds.length + '</small><i aria-hidden="true">›</i>';
  }
  function duHang(can) {
    return Object.keys(can).every(function (k) { return (S.st.kho[k] || 0) >= can[k]; });
  }
  function bayLen(el, chu, anhTen) {
    // so bay len tu vi tri 1 vat (+2 lua, +5 xu...)
    var r = el ? (el.getBoundingClientRect ? el.getBoundingClientRect() : el) : { left: innerWidth / 2, top: innerHeight / 2, width: 0 };
    var b = document.createElement('div');
    b.className = 'nt-bay';
    b.innerHTML = (anhTen ? img(anhTen) : '') + '<b>' + esc(chu) + '</b>';
    b.style.left = (r.left + r.width / 2) + 'px';
    b.style.top = r.top + 'px';
    document.body.appendChild(b);
    setTimeout(function () { b.remove(); }, 1300);
  }
  function hienThem(them, el) {
    if (!them) return;
    var tre = 0;
    Object.keys(them.sp || {}).forEach(function (k) {
      var zh = S.cat.SP[k] ? ' ' + S.cat.SP[k].zh : '';
      setTimeout(function () { bayLen(el, '+' + them.sp[k] + zh, spAnh(k)); }, tre); tre += 220;
    });
    if (them.xu) setTimeout(function () { bayLen(el, '+' + them.xu, 'ic-xu'); }, tre), tre += 220;
    if (them.xp) setTimeout(function () { bayLen(el, '+' + them.xp, 'ic-xp'); }, tre);
  }
  function spAnh(k) { return 'sp-' + k; }

  /* ---------------- hieu ung thu hoach: bung sang tai o ruong, nong san bay vao Kho ---------------- */
  // Cac o / vat nuoi se thu (vi tri + loai nong san), lay TRUOC khi ban do ve lai
  function oThuHoach(body, el) {
    if (body.a !== 'thu' && body.a !== 'nhat') return null;
    var els = body.id === 'het' ? $all('#ntDat .nt-vat.tt-chin, #ntDat .nt-vat.tt-xong') : (el && el.getBoundingClientRect ? [el] : []);
    var ds = [];
    els.forEach(function (x) {
      var o = timVat(x);
      if (!o) return;
      var k = o.k === 'o' ? (body.a === 'thu' ? o.c : null) : (body.a === 'nhat' && S.cat.CON[o.k] ? S.cat.CON[o.k].sp : null);
      if (k) ds.push({ k: k, r: x.getBoundingClientRect() });
    });
    return ds;
  }
  function hieuUngThu(ds, them) {
    var kho = $('#ntDuoi [data-mo="kho"]');
    var kr = kho ? kho.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight - 40, width: 0, height: 0 };
    var ex = kr.left + kr.width / 2, ey = kr.top + kr.height / 2;
    var dem = {};
    ds.forEach(function (x) { dem[x.k] = (dem[x.k] || 0) + 1; });
    var tong = 0, tre = 0;
    ds.slice(0, 12).forEach(function (x, i) {
      var n = Math.max(1, Math.min(3, Math.round(((them && them.sp && them.sp[x.k]) || dem[x.k]) / dem[x.k])));
      tong += n;
      setTimeout(function () {
        var cx = x.r.left + x.r.width / 2, cy = x.r.top + x.r.height / 2;
        bungSang(cx, cy);
        for (var j = 0; j < n; j++) bayVaoKho(x.k, cx, cy, ex, ey, j);
      }, i * 110);
      tre = i * 110;
    });
    // Kho nay len + "+N" khi nong san bay toi
    if (kho) setTimeout(function () {
      kho.classList.remove('nt-kho-nhan'); void kho.offsetWidth; kho.classList.add('nt-kho-nhan');
      var b = document.createElement('span');
      b.className = 'nt-kho-them'; b.textContent = '+' + tong;
      kho.appendChild(b);
      setTimeout(function () { b.remove(); kho.classList.remove('nt-kho-nhan'); }, 1200);
    }, tre + 950);
  }
  function bungSang(x, y) {
    var b = document.createElement('div');
    b.className = 'nt-no';
    b.style.left = x + 'px'; b.style.top = y + 'px';
    var h = '<i class="nt-no-vong"></i>';
    for (var i = 0; i < 9; i++) {
      var g = i * 40 + (i % 2) * 12, d = 34 + (i % 3) * 12;
      h += '<i class="nt-no-hat ' + (i % 3 === 0 ? 'sao' : i % 3 === 1 ? 'la' : 'cham') + '" style="--dx:' + Math.round(Math.cos(g * Math.PI / 180) * d) + 'px;--dy:' + Math.round(Math.sin(g * Math.PI / 180) * d - 10) + 'px;--g:' + g + 'deg"></i>';
    }
    b.innerHTML = h;
    document.body.appendChild(b);
    setTimeout(function () { b.remove(); }, 900);
  }
  function bayVaoKho(k, sx, sy, ex, ey, j) {
    var e = document.createElement('div');
    e.className = 'nt-bay-sp';
    e.innerHTML = img(spAnh(k));
    document.body.appendChild(e);
    var lech = (j - 1) * 22 + (Math.random() * 16 - 8);
    var px = sx + lech, py = sy - 70 - Math.random() * 30;
    if (!e.animate) { setTimeout(function () { e.remove(); }, 50); return; }
    var a = e.animate([
      { transform: 'translate(' + sx + 'px,' + sy + 'px) translate(-50%,-50%) scale(0.3)', opacity: 0 },
      { transform: 'translate(' + px + 'px,' + py + 'px) translate(-50%,-50%) scale(1.15)', opacity: 1, offset: 0.32 },
      { transform: 'translate(' + (px + (ex - px) * 0.45) + 'px,' + (py - 40) + 'px) translate(-50%,-50%) scale(0.95)', opacity: 1, offset: 0.6 },
      { transform: 'translate(' + ex + 'px,' + ey + 'px) translate(-50%,-50%) scale(0.45)', opacity: 0.85 },
    ], { duration: 950 + j * 90, delay: j * 110, easing: 'ease-in-out', fill: 'forwards' });
    a.onfinish = function () { e.remove(); };
  }

  /* ---------------- gui hanh dong ---------------- */
  function lam(body, el) {
    if (S.ban) return Promise.reject(new Error('ban'));
    S.ban = true;
    // lay vi tri truoc khi ve lai (phan tu cu se bi thay)
    var vt = el && el.getBoundingClientRect ? el.getBoundingClientRect() : null;
    var nguonThu = oThuHoach(body, el);
    return goi('/api/farm/act', body).then(function (r) {
      S.ban = false;
      nhanTrangThai(r.st);
      hienThem(r.them, vt);
      if (nguonThu && nguonThu.length) hieuUngThu(nguonThu, r.them);
      if (r.them && r.them.dacSan) setTimeout(function () { var m = S.cat.SP[r.them.dacSan]; bao('⭐ Đặc sản ' + (m ? m.zh + ' ' + m.vn.toLowerCase() : '') + ': thu thêm được 1! Bán cho các bạn đang cần nhé.'); }, 900);
      if (r.lenCap) setTimeout(function () { lenCap(r.lenCap); }, 700);
      return r;
    }, function (err) {
      S.ban = false;
      if (err.message !== 'ban') { bao(err.message, 'loi'); tieng('sai'); }
      throw err;
    });
  }
  function soGon(n) {
    if (n < 10000) return String(n);
    var k = n / 1000;
    return (k < 100 ? String(Math.floor(k * 10) / 10).replace('.', ',') : String(Math.floor(k))) + 'k';
  }
  function nhanTrangThai(st) {
    S.lech = st.now - Date.now();
    S.st = st;
    if (!S.tham) veBanDo();
    else veHud();
    if (window.NTX) NTX.sau.forEach(function (fn) { try { fn(st); } catch (e) { /* bo qua */ } });
  }

  /* ---------------- bam vao ban do ---------------- */
  function oTuSuKien(e) {
    var r = $('#ntDat').getBoundingClientRect();
    return { x: Math.floor((e.clientX - r.left) / S.o), y: Math.floor((e.clientY - r.top) / S.o) };
  }
  function datDuoc(x, y, w, boQua) {
    var d = S.st;
    if (x < 0 || y < 0 || x + w > d.kich.w || y + w > d.kich.h) return false;
    return !d.o.some(function (o) {
      if (o.id === boQua) return false;
      var r = rong(o);
      return x < o.x + r && o.x < x + w && y < o.y + r && o.y < y + w;
    });
  }
  function rongMon(k) { var t = S.cat.TT[k]; return (t && t.w) || 1; }

  function bamBanDo(e) {
    if (keo.daKeo || vuaThaVat) return;
    var vatEl = e.target.closest('.nt-vat');
    if (S.tham) {
      if (vatEl) { var ov = timVat(vatEl); if (ov && !giupBan(ov, vatEl)) gioiThieu(ov, vatEl); }
      return;
    }
    if (S.che === 'dat') {
      var p = oTuSuKien(e), w = rongMon(S.dat.k);
      var x = p.x - (w > 1 ? 1 : 0) + (w > 1 && p.x === 0 ? 1 : 0), y = p.y - (w > 1 ? 1 : 0) + (w > 1 && p.y === 0 ? 1 : 0);
      if (!datDuoc(x, y, w)) { bao('Chỗ này không đặt được — chọn ô cỏ trống.', 'loi'); tieng('sai'); return; }
      var k = S.dat.k, nguon = S.dat.nguon;
      lam({ a: nguon, k: k, x: x, y: y }).then(function () {
        tieng('mua');
        var mon = tenMon(k);
        bao('Đã đặt ' + mon.vn + ' · ' + mon.zh + ' ' + mon.py);
        doc(mon.zh);
        // hang rao, duong, o ruong: dat lien tiep; con lai xong la thoi
        var lienTiep = nguon === 'mua' && (k === 'rao' || k === 'rao-doc' || k === 'duong' || k === 'o');
        var conTui = nguon === 'dat' && (S.st.tui[k] || 0) > 0;
        if (!lienTiep && !conTui) thoatDat();
        else veBanDo();
      }, function () {});
      return;
    }
    if (!vatEl) { dongNoi(); return; }
    bamVat(timVat(vatEl), vatEl);
  }
  function timVat(el) {
    var id = +el.getAttribute('data-id');
    return duLieuBanDo().o.filter(function (o) { return o.id === id; })[0];
  }

  function bamVat(o, el) {
    if (!o) return;
    var t = trangThai(o), c = S.cat;
    if (o.k === 'o') {
      if (t.loai === 'trong') return moGieoHat(o, el);
      if (t.loai === 'chin') {
        return lam({ a: 'thu', id: o.id }, el).then(function () {
          tieng('thu'); doc(c.CAY[o.c] ? c.CAY[o.c].zh : '');
        }, function () {});
      }
      return moNoiCay(o, el);
    }
    if (c.CON[o.k]) {
      var con = c.CON[o.k];
      if (t.loai === 'doi') return moHoi({ so: 3, anh: o.k + '-doi', tit: 'Cho ' + con.vn.toLowerCase() + ' ăn', phu: con.zh + ' ' + con.py + ' đói rồi! Trả lời đúng 3 câu để cho ăn nhé.' }, function () {
        // co thuc an chan nuoi 饲料 (mua o Cho nong san) thi dung kem 1 bao -> them 1 san pham
        var sl = (S.st.kho.siliao || 0) > 0 ? 1 : 0;
        lam({ a: 'choan', id: o.id, sl: sl }, el).then(function () {
          tieng('dung');
          bao(con.vn + ' đã no! Sau ' + thoiLuong(con.phut) + ' sẽ có ' + c.SP[con.sp].vn.toLowerCase() + '.' + (sl ? ' Đã dùng 1 bao 饲料 → thêm 1 sản phẩm.' : ''));
        }, function () {});
      });
      if (t.loai === 'xong') {
        return lam({ a: 'nhat', id: o.id }, el).then(function () { tieng('thu'); doc(c.SP[con.sp].zh); }, function () {});
      }
      return moNoiCon(o, el);
    }
    if (o.k === 'kho') return moBang('kho');
    if (o.k === 'nha') return moNoiNha(o, el);
    gioiThieu(o, el);
  }

  /* ---------------- bong noi nho (popover) ---------------- */
  var noiCua = null;
  function moNoi(el, html, id) {
    var n = $('#ntNoi');
    n.innerHTML = html;
    n.hidden = false;
    noiCua = { el: el, id: id };
    $all('img', n).forEach(ganLoiAnh);
    datViTriNoi();
  }
  function datViTriNoi() {
    if (!noiCua) return;
    var n = $('#ntNoi');
    var el = document.querySelector('.nt-vat[data-id="' + noiCua.id + '"]') || noiCua.el;
    var r = el.getBoundingClientRect();
    var w = n.offsetWidth, h = n.offsetHeight;
    if (innerWidth <= 640) {
      var duoi = $('#ntDuoi').getBoundingClientRect().top;
      n.style.left = Math.max(8, (innerWidth - w) / 2) + 'px';
      n.style.top = Math.max(64, duoi - h - 10) + 'px';
      return;
    }
    var x = Math.max(8, Math.min(innerWidth - w - 8, r.left + r.width / 2 - w / 2));
    var y = r.top - h - 10;
    if (y < 70) y = r.bottom + 10;
    if (y + h > innerHeight - 8) y = Math.max(64, innerHeight - h - 8);
    n.style.left = x + 'px';
    n.style.top = y + 'px';
  }
  function dongNoi() { $('#ntNoi').hidden = true; noiCua = null; }
  function capNhatNoi() {
    if (!noiCua || !noiCua.capNhat) return;
    noiCua.capNhat();
  }
  function htmlTen(m) {
    return '<button type="button" class="nt-ten" data-doc="' + esc(m.zh) + '"><b lang="zh">' + esc(m.zh) + '</b><span>' + esc(m.py) + '</span><i>' + esc(m.vn) + '</i><em aria-hidden="true">🔊</em></button>';
  }

  function moNoiCay(o, el) {
    var cay = S.cat.CAY[o.c];
    var html = '<div class="nt-noi-dau">' + img(o.c) + htmlTen(cay) + '</div>' +
      '<p class="nt-noi-gio">' + img('ic-gio') + ' Chín sau <b data-con></b></p>' +
      (o.t ? '<p class="nt-noi-phu">💧 Đã tưới nước — cây lớn nhanh hơn.</p>' :
        '<button type="button" class="nt-nut nt-nut-xanh" data-tuoi>' + img('ic-tuoi') + ' Tưới nước <small>(trả lời 1 câu · nhanh hơn 40%)</small></button>');
    moNoi(el, html, o.id);
    doc(cay.zh);
    noiCua.capNhat = function () {
      var o2 = timTheoId(o.id);
      var b = $('#ntNoi [data-con]');
      if (!o2 || !o2.c || !b) return dongNoi();
      var con = o2.h - bayGio();
      if (con <= 0) return dongNoi();
      b.textContent = conLai(con);
    };
    noiCua.capNhat();
    var nt = $('#ntNoi [data-tuoi]');
    if (nt) nt.addEventListener('click', function () {
      dongNoi();
      moHoi({ so: 1, anh: 'ic-tuoi', tit: 'Tưới nước cho ' + cay.vn.toLowerCase(), phu: 'Trả lời đúng 1 câu, cây sẽ lớn nhanh hơn.' }, function () {
        lam({ a: 'tuoi', id: o.id }, el).then(function () { tieng('dung'); bao('Đã tưới! ' + cay.vn + ' lớn nhanh hơn rồi.'); }, function () {});
      });
    });
  }
  function moNoiCon(o, el) {
    var con = S.cat.CON[o.k], sp = S.cat.SP[con.sp];
    var html = '<div class="nt-noi-dau">' + img(o.k) + htmlTen(con) + '</div>' +
      '<p class="nt-noi-gio">' + img('sp-' + con.sp) + ' ' + esc(sp.vn) + ' <span lang="zh">' + esc(sp.zh) + '</span> sau <b data-con></b></p>' +
      '<p class="nt-noi-phu">Nhấn giữ rồi kéo để dời chỗ</p>';
    moNoi(el, html, o.id);
    doc(con.zh);
    noiCua.capNhat = function () {
      var o2 = timTheoId(o.id);
      var b = $('#ntNoi [data-con]');
      if (!o2 || !o2.h || !b) return dongNoi();
      var c = o2.h - bayGio();
      if (c <= 0) return dongNoi();
      b.textContent = conLai(c);
    };
    noiCua.capNhat();
  }
  function moNoiNha(o, el) {
    var n = o.n || 1, m = S.cat.NHA[n], sau = S.cat.NHA[n + 1];
    var html = '<div class="nt-noi-dau">' + img('nha-' + n) + htmlTen(m) + '</div>';
    if (!S.tham && sau) {
      html += '<p class="nt-noi-phu">Nâng cấp thành <b>' + esc(sau.vn) + '</b> (' + esc(sau.zh) + ') — cấp ' + sau.lv + '</p>' +
        '<button type="button" class="nt-nut nt-nut-vang" data-nang>' + img('ic-sao') + ' ' + sau.sao + ' sao · Nâng cấp</button>';
    } else if (!S.tham) html += '<p class="nt-noi-phu">Ngôi nhà đẹp nhất rồi!</p>';
    moNoi(el, html, o.id);
    doc(m.zh);
    var b = $('#ntNoi [data-nang]');
    if (b) b.addEventListener('click', function () {
      lam({ a: 'nangnha' }, el).then(function () { dongNoi(); tieng('len'); bao('Nhà mới đẹp quá! ' + sau.zh + ' ' + sau.py); doc(sau.zh); }, function () {});
    });
  }
  function gioiThieu(o, el) {
    if (!o) return;
    var t = trangThai(o);
    var m = o.k === 'o' && o.c ? S.cat.CAY[o.c] : tenMon(o.k, o.n);
    var catDuoc = !S.tham && S.cat.TT[o.k];
    moNoi(el, '<div class="nt-noi-dau">' + img(t.hinh) + htmlTen(m) + '</div>' +
      (S.cat.TT[o.k] ? '<p class="nt-noi-phu">Điểm đẹp +' + S.cat.TT[o.k].dep + '</p>' : '') +
      (catDuoc ? '<p class="nt-noi-phu">Nhấn giữ rồi kéo để dời chỗ · <button type="button" class="nt-link" data-cat-tui>Cất vào túi</button></p>' : ''), o.id);
    var nutCat = $('#ntNoi [data-cat-tui]');
    if (nutCat) nutCat.addEventListener('click', function () {
      lam({ a: 'cat', id: o.id }).then(function () { dongNoi(); bao('Đã cất ' + m.vn + ' vào túi đồ (trong Kho).'); }, function () {});
    });
    doc(m.zh);
  }
  function timTheoId(id) { return S.st.o.filter(function (o) { return o.id === id; })[0]; }

  function moGieoHat(o, el) {
    var c = S.cat, lv = S.st.lv;
    var soTrong = S.st.o.filter(function (x) { return x.k === 'o' && !x.c; }).length;
    var html = '<p class="nt-noi-tit">Gieo hạt gì? <small>Có ' + S.st.xu + ' xu</small></p><div class="nt-hat">';
    Object.keys(c.CAY).forEach(function (k) {
      var cay = c.CAY[k], khoa = cay.lv > lv && !cay.hiem;
      if (cay.hiem && !(S.st.hat && S.st.hat[k] > 0)) return;
      html += '<div class="nt-hat-o' + (khoa ? ' khoa' : '') + '">' +
        '<button type="button" class="nt-hat-chon" data-hat="' + k + '"' + (khoa ? ' disabled' : '') + '>' + img('sp-' + k) +
        '<b lang="zh">' + esc(cay.zh) + '</b><span>' + esc(cay.vn) + '</span>' +
        (khoa ? '<em>Cấp ' + cay.lv + '</em>' : (S.st.hat && S.st.hat[k] ? '<em class="nt-hat-quy">🎟 ' + S.st.hat[k] + ' hạt quý · miễn phí</em>' : '<em>' + img('ic-xu') + cay.gia + ' · ' + thoiLuong(cay.phut) + '</em>')) +
        (khoa ? '' : '<span class="nt-hat-nhan">' + nhanDacSan(k) + nhanCan(k) + '</span>') + '</button>' +
        (!khoa && !cay.hiem && soTrong > 1 ? '<button type="button" class="nt-hat-het" data-het="' + k + '" title="Gieo vào mọi ô trống">Gieo hết</button>' : '') +
        '</div>';
    });
    html += '</div>';
    moNoi(el, html, o.id);
    $all('[data-hat]', $('#ntNoi')).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-hat');
        lam({ a: 'trong', id: o.id, c: k }, el).then(function () { dongNoi(); tieng('mua'); doc(c.CAY[k].zh); bao('Đã gieo ' + c.CAY[k].vn + ' · ' + c.CAY[k].zh + ' ' + c.CAY[k].py); }, function () {});
      });
    });
    $all('[data-het]', $('#ntNoi')).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-het');
        lam({ a: 'trongHet', c: k }, el).then(function () { dongNoi(); tieng('mua'); doc(c.CAY[k].zh); bao('Đã gieo ' + c.CAY[k].vn + ' vào các ô trống.'); }, function () {});
      });
    });
  }

  /* ---------------- nut "thu hoach tat ca" ---------------- */
  function nutThuHet() {
    var nut = $('#ntThuHet');
    if (S.tham || S.che !== 'xem' || !S.st) { if (nut) nut.hidden = true; return; }
    var now = bayGio();
    var chin = S.st.o.filter(function (o) { return o.k === 'o' && o.c && o.h <= now; }).length;
    var xong = S.st.o.filter(function (o) { return S.cat.CON[o.k] && o.h && o.h <= now; }).length;
    if (!nut) {
      nut = document.createElement('div');
      nut.id = 'ntThuHet';
      nut.className = 'nt-thu-het';
      document.body.appendChild(nut);
      nut.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (!b) return;
        lam({ a: b.getAttribute('data-a'), id: 'het' }).then(function () { tieng('thu'); }, function () {});
      });
    }
    var html = '';
    if (chin > 1) html += '<button type="button" data-a="thu">' + img('ic-thuhoach') + ' Thu hoạch tất cả (' + chin + ')</button>';
    if (xong > 1) html += '<button type="button" data-a="nhat">' + img('sp-trung') + ' Nhặt sản phẩm (' + xong + ')</button>';
    if (nut.getAttribute('data-h') !== html) { nut.innerHTML = html; nut.setAttribute('data-h', html); }
    nut.hidden = !html;
  }

  /* ---------------- che do dat do / sap xep ---------------- */
  function batDauDat(k, nguon) {
    dongBang();
    dongNoi();
    S.che = 'dat';
    S.dat = { k: k, nguon: nguon };
    S.chon = null;
    var m = tenMon(k);
    $('#ntThanhDatChu').innerHTML = img(hinhDat(k)) + ' Chạm vào ô cỏ trống để đặt <b>' + esc(m.vn) + '</b> <span lang="zh">' + esc(m.zh) + '</span>';
    $('#ntThanhDat').hidden = false;
    document.body.classList.add('dang-dat');
    veBanDo();
  }
  function thoatDat() {
    S.che = 'xem'; S.dat = null; S.chon = null;
    $('#ntThanhDat').hidden = true;
    document.body.classList.remove('dang-dat');
    veBanDo();
  }
  /* ---------------- keo tha do vat ngay tren nong trai ----------------
     Chuot: nhan giu vao mon roi keo. Dien thoai: giu 0,35 giay (rung nhe) roi keo; vuot nhanh van la cuon ban do.
     Tha ra o trong thi doi cho (may chu kiem tra lai), cho da co do thi tra ve cho cu. */
  var kv = null, vuaThaVat = false;
  function batDauKeoVat(e) {
    if (S.tham || S.che !== 'xem' || !S.st) return false;
    var el = e.target.closest && e.target.closest('.nt-vat');
    if (!el || !$('#ntDat').contains(el)) return false;
    var o = timVat(el);
    if (!o) return false;
    kv = { o: o, el: el, x0: e.clientX, y0: e.clientY, dang: false, chuot: e.pointerType === 'mouse', nx: o.x, ny: o.y, ok: true };
    if (!kv.chuot) kv.hen = setTimeout(function () { if (kv && !kv.dang) moKeoVat(); }, 350);
    return true;
  }
  function moKeoVat() {
    kv.dang = true;
    dongNoi();
    kv.el.classList.add('dang-keo-vat');
    document.body.classList.add('keo-vat');
    var w = rong(kv.o);
    $('#ntDat').insertAdjacentHTML('beforeend', '<div class="nt-luoi" id="ntLuoiKeo"></div><div class="nt-dich" id="ntDich" style="left:' + kv.o.x * S.o + 'px;top:' + kv.o.y * S.o + 'px;width:' + w * S.o + 'px;height:' + w * S.o + 'px"></div>');
    if (navigator.vibrate) { try { navigator.vibrate(15); } catch (er) { /* bo qua */ } }
  }
  function keoVatDi(e) {
    if (!kv) return;
    var dx = e.clientX - kv.x0, dy = e.clientY - kv.y0;
    if (!kv.dang) {
      if (kv.chuot && Math.abs(dx) + Math.abs(dy) > 6) moKeoVat();
      else if (!kv.chuot && Math.abs(dx) + Math.abs(dy) > 10) { clearTimeout(kv.hen); kv = null; return; } // dang vuot de cuon
      if (!kv.dang) return;
    }
    kv.el.style.translate = dx + 'px ' + dy + 'px';
    var w = rong(kv.o), k = S.st.kich;
    var nx = Math.max(0, Math.min(k.w - w, Math.round((kv.o.x * S.o + dx) / S.o)));
    var ny = Math.max(0, Math.min(k.h - w, Math.round((kv.o.y * S.o + dy) / S.o)));
    kv.nx = nx; kv.ny = ny; kv.ok = datDuoc(nx, ny, w, kv.o.id);
    var d = $('#ntDich');
    if (d) { d.style.left = nx * S.o + 'px'; d.style.top = ny * S.o + 'px'; d.classList.toggle('sai', !kv.ok); }
  }
  function thaVat() {
    if (!kv) return;
    clearTimeout(kv.hen);
    var k = kv;
    kv = null;
    if (!k.dang) return; // chi la cham: de su kien bam xu ly nhu cu
    vuaThaVat = true;
    setTimeout(function () { vuaThaVat = false; }, 0);
    document.body.classList.remove('keo-vat');
    ['#ntLuoiKeo', '#ntDich'].forEach(function (s) { var x = $(s); if (x) x.remove(); });
    k.el.classList.remove('dang-keo-vat');
    if (k.nx === k.o.x && k.ny === k.o.y) { k.el.style.translate = ''; return; }
    if (!k.ok) { k.el.style.translate = ''; bao('Chỗ này đã có đồ rồi — thả vào ô cỏ trống nhé.', 'loi'); tieng('sai'); return; }
    var m = tenMon(k.o.k, k.o.n);
    lam({ a: 'doi', id: k.o.id, x: k.nx, y: k.ny }).then(function () { tieng('mua'); bao('Đã dời ' + m.vn + ' ' + m.zh); }, function () { veBanDo(); });
  }
  // meo mot lan cho hoc sinh biet cach sap xep moi
  function meoKeoTha() {
    try { if (localStorage.getItem('hyv_nt_meo_keo')) return; localStorage.setItem('hyv_nt_meo_keo', '1'); } catch (e) { return; }
    setTimeout(function () { bao('Mẹo: nhấn giữ một đồ vật rồi kéo để sắp xếp lại nông trại!'); }, 4000);
  }
  // bong mo di theo chuot khi dang dat do (may tinh)
  function diChuot(e) {
    if (S.che !== 'dat') return;
    var b = $('#ntBongDat');
    if (!b) return;
    var p = oTuSuKien(e), w = rongMon(S.dat.k);
    var x = Math.max(0, Math.min(S.st.kich.w - w, p.x - (w > 1 ? 1 : 0) + (w > 1 && p.x === 0 ? 1 : 0)));
    var y = Math.max(0, Math.min(S.st.kich.h - w, p.y - (w > 1 ? 1 : 0) + (w > 1 && p.y === 0 ? 1 : 0)));
    b.hidden = false;
    b.style.left = x * S.o + 'px';
    b.style.top = y * S.o + 'px';
    b.style.width = b.style.height = w * S.o + 'px';
    b.classList.toggle('sai', !datDuoc(x, y, w));
  }

  /* ---------------- keo de cuon ban do (chuot) ---------------- */
  var keo = { dang: false, daKeo: false };
  function ganKeo() {
    var k = $('#ntKhung');
    k.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (batDauKeoVat(e)) return;
      if (e.pointerType !== 'mouse') return;
      keo = { dang: true, daKeo: false, x: e.clientX, y: e.clientY, sl: k.scrollLeft, st: k.scrollTop };
    });
    window.addEventListener('pointermove', function (e) {
      if (kv) { keoVatDi(e); return; }
      if (!keo.dang) return;
      var dx = e.clientX - keo.x, dy = e.clientY - keo.y;
      if (!keo.daKeo && Math.abs(dx) + Math.abs(dy) > 8) { keo.daKeo = true; k.classList.add('dang-keo'); }
      if (keo.daKeo) { k.scrollLeft = keo.sl - dx; k.scrollTop = keo.st - dy; datViTriNoi(); }
    });
    window.addEventListener('pointercancel', function () { if (kv && !kv.dang) { clearTimeout(kv.hen); kv = null; } });
    // dang keo do vat bang ngon tay: chan cuon trang
    document.addEventListener('touchmove', function (e) { if (kv && kv.dang) e.preventDefault(); }, { passive: false });
    window.addEventListener('pointerup', function () {
      if (kv) { thaVat(); return; }
      if (!keo.dang) return;
      keo.dang = false;
      k.classList.remove('dang-keo');
      setTimeout(function () { keo.daKeo = false; }, 0);
    });
    k.addEventListener('scroll', datViTriNoi, { passive: true });
  }
  function zoom(d) {
    S.o = Math.max(40, Math.min(110, S.o + d));
    try { localStorage.setItem('hyv_nt_zoom', S.o); } catch (e) { /* bo qua */ }
    dongNoi();
    veBanDo();
  }

  /* ---------------- bang truot: cua hang / kho / don / ban / kiem sao ---------------- */
  var bangDang = null;
  function moBang(loai, tab) {
    if ($('#ntThem') && !$('#ntThem').hidden) dongThem();
    dongNoi();
    bangDang = { loai: loai, tab: tab };
    $('#ntLop').hidden = false;
    document.body.classList.add('co-bang');
    veBang();
  }
  function dongBang() {
    $('#ntLop').hidden = true;
    document.body.classList.remove('co-bang');
    bangDang = null;
  }
  function datTab(ds, dang) {
    $('#ntBangTab').innerHTML = ds.map(function (t) {
      return '<button type="button" class="' + (t[0] === dang ? 'bat' : '') + '" data-tab="' + t[0] + '">' + t[1] + '</button>';
    }).join('');
    $('#ntBangTab').hidden = !ds.length;
  }
  /* ---------------- vong quay may man 幸运大转盘 ----------------
     Luot quay moi ngay theo viec hoc (may chu tinh): dang nhap +1, hoc tu 30 sao +1, tu 80 sao +2.
     May chu chon o trung; o day chi quay banh xe den dung o do roi hien qua. */
  var VQ = { goc: 0, dangQuay: false, qua: null };
  var VQ_MAU = ['#ffd54f', '#81c784', '#ffab91', '#64b5f6', '#fff176', '#ce93d8', '#ff8a65', '#4db6ac', '#ffcc80', '#aed581', '#f48fb1', '#90caf9'];
  function vqHinh(o) {
    return o.loai === 'xu' ? 'ic-xu' : o.loai === 'sp' ? 'sp-trung' : o.loai === 'tt' ? 'hoa-do' : o.loai === 'con' ? 'gautruc' : o.loai === 'hat' ? 'ic-hat'
      : o.loai === 'hatquy' ? 'sp-nhansam' : o.loai === 'mat' ? 'ic-mat' : o.loai === 'chuot' ? 'ic-chuot' : o.loai === 'x2' ? 'ic-x2' : 'ic-xp';
  }
  // Bang ti le cac o (may chu gui trong so w; tong 100)
  function htmlTiLe() {
    var ds = S.cat.VQ_O || [], tong = ds.reduce(function (a, o) { return a + o.w; }, 0) || 1;
    return '<details class="nt-vq-tl"><summary>ℹ️ Tỉ lệ các ô</summary><ul>' + ds.map(function (o) {
      return '<li class="' + (o.xau ? 'xau' : o.hiem ? 'hiem' : '') + '">' + img(vqHinh(o)) + '<span><b>' + esc(o.ten) + '</b> <span lang="zh">' + esc(o.zh) + '</span><small>' + esc(o.mo || '') + '</small></span><em>' + (Math.round(o.w / tong * 1000) / 10) + '%</em></li>';
    }).join('') + '</ul><p class="nt-meo">Máy chủ quay — mỗi ô có tỉ lệ cố định như trên.</p></details>';
  }
  function veNutVongQuay() {
    var v = S.st && S.st.vq, nut = $('#ntVongQuay');
    if (!v || !nut) return;
    $('#ntVqPhu').textContent = v.con > 0 ? 'còn ' + v.con + ' lượt quay 🎁' : (v.co >= 5 ? 'hết lượt · mai quay tiếp' : 'học thêm để có lượt mới');
    nut.classList.toggle('co-luot', v.con > 0);
    nut.classList.toggle('het', v.con <= 0);
  }
  function banhXeSvg() {
    var ds = S.cat.VQ_O || [], n = ds.length, C = 150, R = 142, h = '';
    ds.forEach(function (o, i) {
      var a0 = (i * 360 / n - 90 - 180 / n) * Math.PI / 180, a1 = ((i + 1) * 360 / n - 90 - 180 / n) * Math.PI / 180;
      var x0 = C + R * Math.cos(a0), y0 = C + R * Math.sin(a0), x1 = C + R * Math.cos(a1), y1 = C + R * Math.sin(a1);
      h += '<path d="M' + C + ' ' + C + 'L' + x0.toFixed(1) + ' ' + y0.toFixed(1) + 'A' + R + ' ' + R + ' 0 0 1 ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + 'Z" fill="' + (o.xau ? '#cfc6d8' : VQ_MAU[i % VQ_MAU.length]) + '" stroke="#2b1d3a" stroke-width="3"/>' +
        '<g transform="rotate(' + (i * 360 / n) + ' ' + C + ' ' + C + ')">' +
        '<image href="' + anh(vqHinh(o)) + '" x="' + (C - 14) + '" y="' + (C - R + 10) + '" width="28" height="28"/>' +
        '<text x="' + C + '" y="' + (C - R + 52) + '" text-anchor="middle" font-size="' + (n > 8 ? 10.5 : 13) + '" font-weight="800" fill="#2b1d3a">' + esc(o.nhan || o.ten) + '</text>' +
        (n > 8 ? '' : '<text x="' + C + '" y="' + (C - R + 66) + '" text-anchor="middle" font-size="13" font-weight="700" fill="#7a2e1f" font-family="Noto Serif SC, serif">' + esc(o.zh) + '</text>') + '</g>';
    });
    return '<svg class="nt-vq-banh" id="ntVqBanh" viewBox="0 0 300 300" style="transform:rotate(' + VQ.goc + 'deg)">' +
      '<circle cx="150" cy="150" r="148" fill="#c62828" stroke="#2b1d3a" stroke-width="4"/>' + h + '</svg>';
  }
  function tenQua(q) {
    var c = S.cat;
    if (q.loai === 'xu') return { zh: q.n + '个金币', vn: q.n + ' xu', hinh: 'ic-xu' };
    if (q.loai === 'luot') return { zh: '再来一次！', vn: 'Thêm 1 lượt quay', hinh: 'ic-xp' };
    if (q.loai === 'mat') return { zh: '谢谢参与', vn: 'Mất lượt rồi — lượt sau may hơn nhé!', hinh: 'ic-mat', xau: 1 };
    if (q.loai === 'chuot') {
      if (!q.n) return { zh: '老鼠饿了', vn: 'Chuột vào kho… nhưng chẳng có gì ăn, đói bụng đi về! 😅', hinh: 'ic-chuot', xau: 1 };
      var mc = c.SP[q.k] || {};
      return { zh: '老鼠来了！', vn: 'Chuột gặm mất ' + q.n + ' ' + (mc.vn || '').toLowerCase() + ' ' + (mc.zh || ''), hinh: 'ic-chuot', xau: 1 };
    }
    if (q.loai === 'x2') return q.du ? { zh: '双倍收获', vn: 'Em đang có ×2 thu hoạch chưa dùng — đổi thành 10 xu', hinh: 'ic-x2' } : { zh: '双倍收获！', vn: 'Lần thu hoạch ruộng tới được gấp đôi (tối đa ' + (c.VQ_X2_O || 8) + ' ô)', hinh: 'ic-x2' };
    if (q.loai === 'hat' || q.loai === 'hatquy') { var hc = c.CAY[q.k] || {}; return { zh: hc.zh, vn: q.n + ' hạt ' + (hc.vn || '').toLowerCase() + (q.loai === 'hatquy' ? ' quý' : '') + ' (gieo miễn phí)', hinh: 'sp-' + q.k }; }
    if (q.loai === 'sp') { var m = c.SP[q.k] || {}; return { zh: m.zh, vn: q.n + ' ' + (m.vn || '').toLowerCase() + ' (vào kho)', hinh: 'sp-' + q.k }; }
    var t = (q.loai === 'con' ? c.CON : c.TT)[q.k] || {};
    return { zh: t.zh, vn: (t.vn || '') + ' (vào túi đồ)', hinh: q.k };
  }
  function veVongQuay(than) {
    $('#ntBangTit').textContent = 'Vòng quay may mắn 幸运大转盘';
    datTab([], '');
    var v = S.st.vq || { con: 0, moc: [] };
    var q = VQ.qua ? tenQua(VQ.qua) : null;
    than.innerHTML = '<div class="nt-vq">' +
      '<p class="nt-vq-tit"><span lang="zh">幸运大转盘</span>xìngyùn dà zhuànpán</p>' +
      '<div class="nt-vq-khung"><svg class="nt-vq-kim" viewBox="0 0 34 40"><path d="M17 38L4 8Q17 -2 30 8Z" fill="#ffd54f" stroke="#2b1d3a" stroke-width="3" stroke-linejoin="round"/></svg>' +
        banhXeSvg() +
        '<button type="button" class="nt-vq-quay" id="ntVqQuay"' + (v.con > 0 && !VQ.dangQuay ? '' : ' disabled') + '>Quay<small lang="zh">转</small></button></div>' +
      (q && q.xau ? '<div class="nt-vq-qua xau" aria-live="polite"><span class="zh" lang="zh">' + esc(q.zh) + '</span>' + img(q.hinh) + '<span>' + esc(q.vn) + '</span></div>' : '') +
      (q && !q.xau ? '<div class="nt-vq-qua" aria-live="polite"><span class="zh" lang="zh">恭喜你！</span><small>gōngxǐ nǐ — chúc mừng em!</small>' + img(q.hinh) +
        '<b lang="zh">' + esc(q.zh || '') + '</b><span>' + esc(q.vn) + '</span></div>' : '') +
      '<p class="nt-vq-con">Hôm nay còn <b>' + v.con + '</b> lượt quay' + (S.st.x2thu ? ' · <span class="nt-vq-x2">×2 thu hoạch đang chờ</span>' : '') + '</p>' + htmlTiLe() +
      '<ul class="nt-vq-moc">' + (v.moc || []).map(function (m) {
        return '<li class="' + (m.dat ? 'dat' : '') + '"><span class="nt-vq-dau">' + (m.dat ? '✓' : '') + '</span>' + esc(m.ten) + '<em>+' + m.luot + ' lượt</em></li>';
      }).join('') + '</ul>' +
      '<p class="nt-meo">Lượt quay tính theo sao học trong ngày (làm bài, học bài trên web) — hết ngày không cộng dồn. Ô "再来一次" cho thêm 1 lượt; ô xám là ô xấu (mất lượt, chuột).</p></div>';
    $all('image', than).forEach(function (im) { im.addEventListener('error', function () { im.remove(); }, { once: true }); });
    var nut = $('#ntVqQuay');
    if (nut) nut.addEventListener('click', quayVong);
  }
  function quayVong() {
    if (VQ.dangQuay || !S.st.vq || S.st.vq.con <= 0) return;
    VQ.dangQuay = true; VQ.qua = null;
    var nut = $('#ntVqQuay');
    if (nut) nut.disabled = true;
    goi('/api/farm/act', { a: 'quay' }).then(function (r) {
      var n = (S.cat.VQ_O || []).length || 12, o = r.them && r.them.quay ? r.them.quay.o : 0;
      // quay them 5 vong roi dung de o trung nam ngay duoi kim (dinh banh xe)
      var dich = 360 - o * 360 / n, hienTai = ((VQ.goc % 360) + 360) % 360;
      VQ.goc += 360 * 5 + ((dich - hienTai + 360) % 360) + (Math.random() * 16 - 8);
      var banh = $('#ntVqBanh');
      if (banh) banh.style.transform = 'rotate(' + VQ.goc + 'deg)';
      tieng('mua');
      setTimeout(function () {
        VQ.dangQuay = false;
        VQ.qua = r.them.quay.qua;
        nhanTrangThai(r.st);
        veNutVongQuay();
        tieng('len');
        var t = tenQua(VQ.qua);
        if (t.xau) { tieng('sai'); doc(t.zh); bao(t.vn); }
        else if (t.zh) doc(VQ.qua.loai === 'xu' ? '恭喜你！' : '恭喜你！' + t.zh);
        if (bangDang && bangDang.loai === 'vongquay') veBang();
      }, 4300);
    }, function (err) {
      VQ.dangQuay = false;
      bao(err.message, 'loi');
      if (bangDang && bangDang.loai === 'vongquay') veBang();
    });
  }

  function veBang() {
    if (!bangDang) return;
    var l = bangDang.loai, than = $('#ntBangThan');
    if (l === 'cuahang') veCuaHang(than);
    else if (l === 'kho') veKho(than);
    else if (l === 'don') veDon(than);
    else if (l === 'ban') veBan(than);
    else if (l === 'hoc') veKiemSao(than);
    else if (l === 'sapban') veSapBan(than);
    else if (l === 'chao') veChao(than);
    else if (l === 'nhanvat') veNhanVatBang(than);
    else if (l === 'tin') veTin(than);
    else if (l === 'congdong') veCongDong(than);
    else if (l === 'thientai') veThienTai(than);
    else if (l === 'chung') veChung(than);
    else if (l === 'cacthitran') veCacThiTran(than);
    else if (l === 'loidai') veLoiDai(than);
    else if (l === 'dukhach') veDuKhach(than);
    else if (l === 'bangtin') veBangTin(than);
    else if (l === 'vongquay') veVongQuay(than);
    else if (l === 'thidua') veThiDuaTrai(than);
    else if (l === 'vuon') veVuon(than);
    else if (l === 'cay7') veCay7(than);
    else if (NGOAI[l]) NGOAI[l](than, bangDang);
    $all('img', than).forEach(ganLoiAnh);
  }

  function giaHtml(m) {
    return m.sao ? '<span class="nt-gia sao">' + img('ic-sao') + m.sao + '</span>' : '<span class="nt-gia xu">' + img('ic-xu') + m.xu + '</span>';
  }
  function xpCap(n) { return 5 * n * (n - 1); } // giong xpCuaLv o may chu
  function theMon(k, m, hinh, them, khoa, nut) {
    return '<div class="nt-the' + (khoa ? ' khoa' : '') + '">' +
      '<div class="nt-the-anh">' + img(hinh) + (khoa ? '<span class="nt-khoa">Cấp ' + khoa + '</span>' : '') + '</div>' +
      htmlTen(m) + (them || '') + nut + '</div>';
  }
  function veCuaHang(than) {
    var tab = bangDang.tab || 'con';
    $('#ntBangTit').textContent = 'Cửa hàng';
    datTab([['con', 'Vật nuôi'], ['tt', 'Trang trí'], ['dat', 'Đất & nhà']], tab);
    var c = S.cat, s = S.st, lv = s.lv, html = '';
    // mon sap mo khoa o tab nay (cap gan nhat con khoa)
    var nhom = tab === 'con' ? c.CON : tab === 'tt' ? c.TT : null;
    if (nhom) {
      var khoa = Object.keys(nhom).filter(function (k) { return nhom[k].lv > lv && !nhom[k].doc; });
      if (khoa.length) {
        var capSau = Math.min.apply(null, khoa.map(function (k) { return nhom[k].lv; }));
        var ten = khoa.filter(function (k) { return nhom[k].lv === capSau; }).map(function (k) { return nhom[k].vn; });
        html += '<p class="nt-sap-mo">🔒 Cấp của em: <b>' + lv + '</b> · lên <b>cấp ' + capSau + '</b> (còn ' + Math.max(0, xpCap(capSau) - s.xp) + ' kinh nghiệm) để mở: <b>' + esc(ten.join(', ')) + '</b></p>';
      }
    }
    html += '<div class="nt-luoi-the">';
    if (tab === 'con') {
      Object.keys(c.CON).forEach(function (k) {
        var m = c.CON[k], sp = c.SP[m.sp];
        var co = s.o.filter(function (o) { return o.k === k; }).length + (s.tui[k] || 0);
        var het = co >= c.CON_TOI_DA;
        html += theMon(k, m, k, '<p class="nt-the-phu">' + img('sp-' + m.sp) + esc(sp.vn) + ' mỗi ' + thoiLuong(m.phut) + ' · có ' + co + '/' + c.CON_TOI_DA + '</p>',
          m.lv > lv ? m.lv : 0,
          '<button type="button" class="nt-mua" data-mua="' + k + '"' + (m.lv > lv || het ? ' disabled' : '') + '>' + (het ? 'Đã đủ' : giaHtml(m)) + '</button>');
      });
    } else if (tab === 'tt') {
      Object.keys(c.TT).filter(function (k) { return !c.TT[k].doc; }).sort(function (a, b) { return c.TT[a].lv - c.TT[b].lv; }).forEach(function (k) {
        var m = c.TT[k];
        html += theMon(k, m, k, '<p class="nt-the-phu">Điểm đẹp +' + m.dep + (m.w ? ' · ô 2×2' : '') + '</p>',
          m.lv > lv ? m.lv : 0,
          '<button type="button" class="nt-mua" data-mua="' + k + '"' + (m.lv > lv ? ' disabled' : '') + '>' + giaHtml(m) + '</button>');
      });
    } else {
      var soO = s.soO, giaO = 3 + Math.max(0, soO - c.O_MIEN_PHI), duO = soO < s.oToiDa;
      html += theMon('o', c.O_DAT, 'dat', '<p class="nt-the-phu">Ô ruộng ' + soO + '/' + s.oToiDa + ' (lên cấp mở thêm)</p>', 0,
        '<button type="button" class="nt-mua" data-mua="o"' + (duO ? '' : ' disabled') + '>' + (duO ? giaHtml({ sao: giaO }) : 'Đã tối đa') + '</button>');
      var sau = c.DAT[s.dat + 1];
      html += theMon('morong', { zh: '扩建', py: 'kuòjiàn', vn: 'Mở rộng đất' }, 'co',
        '<p class="nt-the-phu">' + (sau ? s.kich.w + '×' + s.kich.h + ' → ' + sau.w + '×' + sau.h + ' ô' + (sau.vn ? '<br><b>' + esc(sau.vn) + '</b> <span lang="zh">' + esc(sau.zh) + '</span> · lô đất to gấp đôi trong thị trấn' : '') : 'Đất đã rộng nhất') + '</p>',
        sau && sau.lv > lv ? sau.lv : 0,
        '<button type="button" class="nt-mua" data-lam="morong"' + (!sau || sau.lv > lv || (sau.xu && s.xu < sau.xu) ? ' disabled' : '') + '>' + (sau ? giaHtml(sau) : 'Tối đa') + '</button>');
      var nha = s.o.filter(function (o) { return o.k === 'nha'; })[0], n = (nha && nha.n) || 1, nm = c.NHA[n + 1];
      if (nm) html += theMon('nha', nm, 'nha-' + (n + 1), '<p class="nt-the-phu">Nâng cấp nhà · điểm đẹp ' + nm.dep + '</p>', nm.lv > lv ? nm.lv : 0,
        '<button type="button" class="nt-mua" data-lam="nangnha"' + (nm.lv > lv ? ' disabled' : '') + '>' + giaHtml(nm) + '</button>');
    }
    html += '</div><p class="nt-meo">' + img('ic-sao') + ' Em đang có <b>' + s.sao + ' sao</b> và <b>' + s.xu + ' xu</b>. Sao kiếm được khi học bài — tiêu sao ở đây <u>không</u> làm tụt hạng trên bảng xếp hạng.</p>';
    than.innerHTML = html;
    $all('[data-mua]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-mua');
        var m = k === 'o' ? { sao: 3 + Math.max(0, s.soO - c.O_MIEN_PHI) } : c.CON[k] || c.TT[k];
        if (m.sao && s.sao < m.sao) return thieuSao(m.sao);
        if (m.xu && s.xu < m.xu) { bao('Chưa đủ xu — bán nông sản trong Kho để có xu.', 'loi'); return; }
        doc(tenMon(k).zh);
        batDauDat(k, 'mua');
      });
    });
    $all('[data-lam]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var a = b.getAttribute('data-lam');
        lam({ a: a }).then(function () { tieng('len'); bao(a === 'morong' ? 'Đất đã rộng hơn rồi!' : 'Nhà mới đẹp quá!'); veBang(); }, function (err) {
          if (/sao/.test(err.message)) thieuSao();
        });
      });
    });
  }
  function thieuSao(can) {
    moBang('hoc', 'muc');
    if (can) bao('Cần ' + can + ' sao — em đang có ' + S.st.sao + '. Học thêm để kiếm sao nhé!', 'loi');
  }

  /* ---------------- Chuong 动物园: gom vat nuoi theo nhom, xem con nao doi / dang lam / co san pham ----------------
     (hoc sinh xin: "lam mot cai chuong de tich hop lai, phan loai dong vat cho de kiem soat") */
  var NHOM_CON = [
    { ten: 'Gia cầm', zh: '家禽', ds: ['ga', 'vit'] },
    { ten: 'Gia súc', zh: '家畜', ds: ['bo', 'cuu', 'heo'] },
    { ten: 'Côn trùng', zh: '昆虫', ds: ['ong'] },
    { ten: 'Thú hoang dã', zh: '野生动物', ds: ['sutu', 'ho', 'gautruc'] },
    { ten: 'Thời tiền sử', zh: '史前动物', ds: ['khunglong'] },
  ];
  function veChuong(than) {
    var c = S.cat, s = S.st, now = bayGio(), daXep = {};
    var tong = { con: 0, doi: 0, xong: 0 };
    var nhom = NHOM_CON.map(function (g) { return { ten: g.ten, zh: g.zh, ds: g.ds.filter(function (k) { daXep[k] = 1; return c.CON[k]; }) }; });
    var khac = Object.keys(c.CON).filter(function (k) { return !daXep[k]; });
    if (khac.length) nhom.push({ ten: 'Khác', zh: '其他', ds: khac });
    var html = '';
    nhom.forEach(function (g) {
      if (!g.ds.length) return;
      html += '<h4 class="nt-cn-h">' + esc(g.ten) + ' <span lang="zh">' + esc(g.zh) + '</span></h4><div class="nt-chuong-ds">';
      g.ds.forEach(function (k) {
        var m = c.CON[k], sp = c.SP[m.sp] || {};
        var ds = s.o.filter(function (o) { return o.k === k; });
        var doi = ds.filter(function (o) { return !o.h; }), xong = ds.filter(function (o) { return o.h && o.h <= now; });
        var lam1 = ds.filter(function (o) { return o.h && o.h > now; });
        var tui = s.tui[k] || 0, khoa = m.lv > s.lv;
        tong.con += ds.length; tong.doi += doi.length; tong.xong += xong.length;
        var gan = lam1.length ? Math.min.apply(null, lam1.map(function (o) { return o.h - now; })) : 0;
        html += '<div class="nt-chuong' + (khoa ? ' khoa' : '') + (doi.length ? ' co-doi' : '') + (xong.length ? ' co-xong' : '') + '">' +
          img(xong.length ? k + '-xong' : doi.length ? k + '-doi' : k, 'nt-chuong-hinh') +
          '<div class="nt-chuong-chu"><b><span lang="zh">' + esc(m.zh) + '</span> ' + esc(m.py) + '</b><small>' + esc(m.vn) + ' · ra ' + img('sp-' + m.sp) + esc(sp.vn || '') + ' <span lang="zh">' + esc(sp.zh || '') + '</span></small>' +
          (khoa
            ? '<small class="nt-chuong-khoa">🔒 Mở ở cấp ' + m.lv + ' · giá ' + m.sao + ' sao</small>'
            : '<span class="nt-chuong-so"><i>Trên trại <b>' + ds.length + '</b>/' + c.CON_TOI_DA + '</i>' + (tui ? '<i>Trong túi <b>' + tui + '</b></i>' : '') +
              (doi.length ? '<i class="doi">Đói <b>' + doi.length + '</b></i>' : '') + (lam1.length ? '<i>Đang làm <b>' + lam1.length + '</b> · xong sau ' + thoiLuong(Math.ceil(gan / 60000)) + '</i>' : '') +
              (xong.length ? '<i class="xong">Có sản phẩm <b>' + xong.length + '</b></i>' : '') + '</span>') +
          '</div><div class="nt-chuong-nut">' +
          (xong.length ? '<button type="button" class="nt-mua" data-chuong-thu="' + k + '">Thu ' + xong.length + '</button>' : '') +
          (doi.length ? '<button type="button" class="nt-mua" data-chuong-an="' + k + '">Cho ăn</button>' : '') +
          (!khoa && ds.length + tui < c.CON_TOI_DA ? '<button type="button" class="nt-mua phu" data-chuong-mua="1">Mua thêm</button>' : '') +
          '</div></div>';
      });
      html += '</div>';
    });
    than.innerHTML = '<div class="nt-chuong-tong"><span>🐾 <b>' + tong.con + '</b> con</span><span class="doi">Đói <b>' + tong.doi + '</b></span><span class="xong">Có sản phẩm <b>' + tong.xong + '</b></span>' +
      (tong.xong ? '<button type="button" class="nt-mua" data-chuong-thu="">Thu hết</button>' : '') + '</div>' + html +
      '<p class="nt-meo">Chuồng gom mọi con vật theo nhóm để em dễ quản lý. Con đói: trả lời đúng 3 câu từ vựng để cho ăn. Vật nuôi quý mở theo cấp: heo cấp 10, sư tử cấp 15, hổ cấp 20, khủng long cấp 25, gấu trúc cấp 30 — đắt hơn nhưng sản phẩm bán được nhiều xu.</p>';
    $all('[data-chuong-thu]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-chuong-thu');
        lam(k ? { a: 'nhat', id: 'het', k: k } : { a: 'nhat', id: 'het' }, b).then(function () { tieng('thu'); veBang(); }, function () {});
      });
    });
    $all('[data-chuong-an]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-chuong-an');
        var o = S.st.o.filter(function (x) { return x.k === k && !x.h; })[0];
        if (!o) return;
        dongBang();
        var el = document.querySelector('.nt-vat[data-id="' + o.id + '"]');
        if (el) el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
        bamVat(o, el);
      });
    });
    $all('[data-chuong-mua]', than).forEach(function (b) { b.addEventListener('click', function () { moBang('cuahang', 'con'); }); });
  }

  function veKho(than) {
    var tab = bangDang.tab || 'sp';
    $('#ntBangTit').textContent = 'Kho của em';
    datTab([['sp', 'Nông sản'], ['chuong', '🐾 Chuồng'], ['bep', 'Bếp'], ['sap', 'Sạp (' + S.st.sap.length + ')'], ['tui', 'Túi đồ']], tab);
    if (tab === 'chuong') { veChuong(than); return; }
    if (tab === 'sap') { veSapEm(than); return; }
    if (tab === 'bep') { veBep(than); return; }
    var c = S.cat, s = S.st, html = '';
    if (tab === 'sp') {
      var ks = Object.keys(s.kho).filter(function (k) { return s.kho[k] > 0; });
      if (!ks.length) html = '<p class="nt-trong">Kho trống. Thu hoạch cây trồng và nhặt trứng, sữa… sẽ cất ở đây.</p>';
      else {
        var hm = hanMucBan();
        html = '<div class="nt-han-muc"><div><b>Hạn mức bán cho cửa hàng hôm nay: ' + hm.da + '/' + hm.toiDa + ' xu</b>' +
          '<small>Mỗi sao học hôm nay = +' + (c.BAN_MOI_SAO || 10) + ' xu hạn mức · gọi đúng tên tiếng Trung được +10%</small>' +
          '<i class="nt-bst-thanh"><i style="width:' + (hm.toiDa ? Math.min(100, Math.round(hm.da / hm.toiDa * 100)) : 100) + '%"></i></i></div>' +
          '<button type="button" class="nt-nut" data-tab-hoc="muc">Học thêm</button></div>';
        html += '<div class="nt-luoi-the">';
        ks.forEach(function (k) {
          var m = c.SP[k], gia1 = Math.max(1, Math.round(m.ban * hsCua(k)));
          html += theMon(k, m, 'sp-' + k, '<p class="nt-the-phu">Có <b>' + s.kho[k] + '</b> · ' + img('ic-xu') + gia1 + ' / cái ' + nhanHs(k) + nhanDacSan(k) + nhanCan(k) + '</p>', 0,
            '<div class="nt-ban-nut"><button type="button" class="nt-mua" data-ban="' + k + '" data-n="1"' + (Math.round(gia1 * 0.7) > hm.con ? ' disabled title="Hết hạn mức bán hôm nay"' : '') + '>Bán 1</button>' +
            (s.kho[k] > 1 ? '<button type="button" class="nt-mua" data-ban="' + k + '" data-n="' + s.kho[k] + '"' + (Math.round(gia1 * s.kho[k] * 0.7) > hm.con ? ' disabled title="Vượt hạn mức bán hôm nay"' : '') + '>Bán hết</button>' : '') +
            '<button type="button" class="nt-mua" data-baysan="' + k + '">Bày sạp</button></div>');
        });
        html += '</div><p class="nt-meo">💡 Giữ lại nông sản để giao <b>Đơn hàng</b> — được nhiều xu hơn bán lẻ. Hoặc <b>bày sạp</b> bán cho các bạn trong lớp và cả <b>Cộng đồng</b>.</p>';
      }
    } else {
      var kt = Object.keys(s.tui).filter(function (k) { return s.tui[k] > 0; });
      if (!kt.length) html = '<p class="nt-trong">Túi đồ trống. Ở chế độ <b>Sắp xếp</b>, chọn một món rồi bấm “Cất vào túi”.</p>';
      else {
        html = '<div class="nt-luoi-the">';
        kt.forEach(function (k) {
          html += theMon(k, tenMon(k), hinhDat(k), '<p class="nt-the-phu">Có ' + s.tui[k] + '</p>', 0,
            '<button type="button" class="nt-mua" data-datra="' + k + '">Đặt ra</button>');
        });
        html += '</div>';
      }
    }
    than.innerHTML = html;
    $all('[data-ban]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        moGoiTen(b.getAttribute('data-ban'), +b.getAttribute('data-n'));
      });
    });
    $all('[data-tab-hoc]', than).forEach(function (b) { b.addEventListener('click', function () { moBang('hoc', b.getAttribute('data-tab-hoc')); }); });
    $all('[data-baysan]', than).forEach(function (b) {
      b.addEventListener('click', function () { chonBay(b.getAttribute('data-baysan')); bangDang.tab = 'sap'; veBang(); });
    });
    $all('[data-datra]', than).forEach(function (b) {
      b.addEventListener('click', function () { batDauDat(b.getAttribute('data-datra'), 'dat'); });
    });
  }

  function veDon(than) {
    $('#ntBangTit').textContent = 'Đơn hàng hôm nay';
    datTab([], '');
    var c = S.cat, s = S.st;
    var html = htmlDonDb() + '<p class="nt-meo">Mỗi ngày có 3 đơn mới — đơn có 🤝 cần <b>đặc sản của bạn khác</b>, phải mua của bạn mới giao được (thưởng gấp đôi). Giao đủ hàng để nhận nhiều xu và kinh nghiệm.</p><div class="nt-don-ds">';
    s.don.forEach(function (dn, i) {
      var du = duHang(dn.can);
      html += '<div class="nt-don' + (dn.xong ? ' xong' : '') + (dn.ban ? ' nt-don-ban' : '') + '">' +
        (dn.ban ? '<p class="nt-don-ban-chu">🤝 Cần <b>đặc sản của ' + esc(dn.ban.ten) + '</b> — mua của bạn ở Chợ hoặc đăng Cần mua' + (!dn.xong && !du ? ' <button type="button" class="nt-link" data-tim-mua="' + esc(Object.keys(dn.can)[0]) + '">Tìm mua</button>' : '') + '</p>' : '') +
        '<div class="nt-don-hang">';
      Object.keys(dn.can).forEach(function (k) {
        var co = s.kho[k] || 0;
        html += '<span class="nt-don-mon' + (co >= dn.can[k] ? ' du' : '') + '">' + img('sp-' + k) +
          '<b lang="zh">' + esc(c.SP[k].zh) + '</b><i>' + esc(c.SP[k].vn) + '</i><em>' + Math.min(co, dn.can[k]) + '/' + dn.can[k] + '</em></span>';
      });
      html += '</div><div class="nt-don-thuong"><span>' + img('ic-xu') + dn.xu + '</span><span>' + img('ic-xp') + dn.xp + '</span></div>' +
        (dn.xong ? '<p class="nt-don-xong">✓ Đã giao</p>' :
          '<button type="button" class="nt-mua" data-don="' + i + '"' + (du ? '' : ' disabled') + '>' + (du ? 'Giao hàng' : 'Chưa đủ hàng') + '</button>') +
        '</div>';
    });
    than.innerHTML = html + '</div>';
    $all('img', than).forEach(ganLoiAnh);
    ganDonDb(than);
    $all('[data-don]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        lam({ a: 'don', i: +b.getAttribute('data-don') }, b).then(function () { tieng('xu'); veBang(); }, function () {});
      });
    });
    $all('[data-tim-mua]', than).forEach(function (b) {
      b.addEventListener('click', function () { CD.k = b.getAttribute('data-tim-mua'); moBang('congdong', 'cho'); });
    });
  }

  function veBan(than) {
    var tab = bangDang.tab || (S.st.nkMoi ? 'thu' : 'ban');
    bangDang.tab = tab;
    $('#ntBangTit').textContent = 'Bạn cùng lớp';
    datTab([['ban', 'Nông trại các bạn'], ['cho', 'Chợ lớp'], ['thu', 'Nhật ký' + (S.st.nkMoi ? ' (' + S.st.nkMoi + ' mới)' : '')]], tab);
    if (tab === 'cho') { veCho(than); return; }
    if (tab === 'thu') { veThu(than); return; }
    than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
    goi('/api/farm/lop').then(function (r) {
      if (!bangDang || bangDang.loai !== 'ban' || bangDang.tab !== 'ban') return;
      if (!r.lop) { than.innerHTML = '<p class="nt-trong">Em chưa vào lớp nào. Nhập mã lớp cô giáo cho ở trang học để thăm nông trại các bạn.</p>'; return; }
      var html = '<p class="nt-meo">Lớp <b>' + esc(r.lop) + '</b> · xếp theo điểm đẹp. Sang chơi để thả tim, tưới cây giúp, cho vật nuôi ăn giúp, mua hàng ở sạp và gửi lời chào tiếng Trung!</p><ol class="nt-ban-ds">';
      r.ds.forEach(function (b, i) {
        html += '<li class="' + (b.la ? 'la' : '') + '"><span class="nt-ban-hang">' + (i + 1) + '</span>' +
          '<span class="nt-ban-ten"><b>' + esc(b.ten) + (b.la ? ' (em)' : '') + '</b><small>' + (b.co ? 'Cấp ' + b.lv + ' · đẹp ' + b.dep + ' · ❤ ' + b.tim : 'Chưa mở nông trại') + '</small></span>' +
          (b.la || !b.co ? '' : '<button type="button" class="nt-mua" data-tham="' + esc(b.id) + '">Thăm</button>') + '</li>';
      });
      than.innerHTML = html + '</ol>';
      $all('[data-tham]', than).forEach(function (bt) {
        bt.addEventListener('click', function () { thamBan(bt.getAttribute('data-tham')); });
      });
    }, function (err) { than.innerHTML = '<p class="nt-trong">' + esc(err.message) + '</p>'; });
  }

  function veKiemSao(than) {
    var tab = bangDang.tab || 'muc';
    bangDang.tab = tab;
    $('#ntBangTit').textContent = { muc: 'Học hôm nay', chuhan: 'Thử thách chữ Hán', thidua: 'Thi đua tuần', kiem: 'Kiếm thêm sao', doi: 'Đổi sao lấy xu' }[tab];
    datTab([['muc', 'Hôm nay'], ['chuhan', 'Chữ Hán'], ['thidua', 'Thi đua'], ['doi', 'Đổi xu']], tab);
    if (tab === 'muc') { veMucTieu(than); return; }
    if (tab === 'chuhan') { veChuHan(than); return; }
    if (tab === 'thidua') { veThiDua(than); return; }
    if (tab === 'doi') { veDoiSao(than); return; }
    than.innerHTML =
      '<div class="nt-sao-to">' + img('ic-sao') + '<b>' + S.st.sao + '</b><span>sao đang có</span></div>' +
      '<ul class="nt-cach">' +
      '<li>' + img('tb-hoc') + '<span><b>Làm bài tập trong bài học</b>Mỗi câu đúng lần đầu +1 sao</span></li>' +
      '<li>' + img('ic-gio') + '<span><b>Học đủ 5 phút</b>+5 sao (tối đa 120 sao mỗi ngày)</span></li>' +
      '<li>' + img('tb-don') + '<span><b>Xong 3 nhiệm vụ hôm nay</b>+10 sao</span></li>' +
      '<li>' + img('tb-cuahang') + '<span><b>Chơi trò chơi tự học</b>Mỗi câu đúng +1 sao</span></li>' +
      '<li>' + img('ic-xp') + '<span><b>Mở web mỗi ngày</b>+5 sao</span></li>' +
      '</ul>' +
      '<div class="nt-hang-nut"><a class="nt-nut nt-nut-xanh nt-nut-to" href="/">Ôn bài ngay</a><a class="nt-nut nt-nut-to" href="/game">Trò chơi tự học</a></div>';
  }

  // --- Hoc hom nay: 3 ruong theo sao hoc duoc trong ngay + loi moi hoc tiep ---
  var hocTiep = null; // { url, nguon } bai em dang hoc (tu /api/farm/on)
  // Nhiem vu hom nay: danh sach viec (cham de di toi), du 3 viec / du het -> nhan thuong
  var NV_IC = { hoc: '📚', ruong: '🧰', chuhan: '字', don: '📋', tai: '🛡️', cau: '🎣', nh: '🍽' };
  function htmlNhiemVu() {
    var nv = S.st.nv;
    if (!nv) return '';
    return '<div class="nt-nvu"><div class="nt-nvu-dau"><b>📋 Nhiệm vụ hôm nay <span lang="zh">今天的任务</span></b><span>' + nv.xong + '/' + nv.ds.length + '</span></div><ul>' +
      nv.ds.map(function (x) { return '<li class="' + (x.xong ? 'xong' : '') + '"><button type="button" data-nv-di="' + x.k + '"><span class="nt-nvu-ic" aria-hidden="true">' + (x.xong ? '✅' : NV_IC[x.k] || '•') + '</span>' + esc(x.ten) + (x.xong ? '' : ' <i>→</i>') + '</button></li>'; }).join('') +
      '</ul><div class="nt-nvu-qua">' + nv.thuong.map(function (t, i) {
        var da = nv.nhan.indexOf(i) >= 0, du = nv.xong >= t.can;
        return '<button type="button" class="nt-nut' + (du && !da ? ' nt-nut-vang' : '') + '" data-nv-qua="' + i + '"' + (da || !du ? ' disabled' : '') + '>' +
          (da ? '✅ Đã nhận' : '🎁 Xong ' + t.can + ' việc: +' + t.xu + ' xu' + (t.luot ? ' + 1 lượt quay' : '')) + '</button>';
      }).join('') + '</div></div>';
  }
  function diNhiemVu(k) {
    if (k === 'hoc') { location.href = (hocTiep && hocTiep.url) || '/'; return; }
    if (k === 'ruong') { moBang('hoc', 'muc'); return; }
    if (k === 'chuhan') { moBang('hoc', 'chuhan'); return; }
    if (k === 'don') { moBang('don'); return; }
    if (k === 'tai') { TAI.xong = null; TAI.cau = null; moBang('thientai'); return; }
    if (k === 'cau') { moHoCau(); return; }
    if (k === 'nh') moBang('kho', 'bep');
  }
  function veMucTieu(than) {
    var m = tinhMuc(), h = m.h, max = m.R.length ? m.R[m.R.length - 1].sao : 100;
    var pt = function (n) { return Math.min(100, Math.round(n / max * 100)); };
    var html = '<div class="nt-hn">' + htmlNhiemVu() +
      '<div class="nt-hn-dau">' + img('ic-sao') + '<div><b>' + h.homNay + ' sao</b><span>em học được hôm nay' + (h.tuan ? ' · ' + h.tuan + ' sao tuần này' : '') + '</span></div></div>' +
      '<div class="nt-hn-duong" role="img" aria-label="Tiến độ ' + h.homNay + ' trên ' + max + ' sao"><i style="width:' + pt(h.homNay) + '%"></i>' +
      m.R.map(function (r, i) {
        var da = h.ruong.indexOf(i) >= 0, duoc = h.homNay >= r.sao;
        return '<span class="nt-hn-moc' + (da ? ' da' : duoc ? ' duoc' : '') + '" style="left:' + pt(r.sao) + '%"><em>' + r.sao + '</em></span>';
      }).join('') + '</div>' +
      '<div class="nt-hn-ruong">' + m.R.map(function (r, i) {
        var da = h.ruong.indexOf(i) >= 0, duoc = h.homNay >= r.sao;
        return '<div class="nt-ruong r' + i + (da ? ' da' : duoc ? ' duoc' : '') + '">' +
          '<span class="nt-ruong-hinh" aria-hidden="true">' + (da ? '✅' : ['🧰', '🎁', '👑'][i]) + '</span>' +
          '<b>' + esc(r.ten) + '</b><small>' + r.sao + ' sao · +' + r.xu + ' xu' + (i === 0 ? ' + thưởng chuỗi' : '') + '</small>' +
          (da ? '<span class="nt-ruong-tt">Đã mở</span>'
            : duoc ? '<button type="button" class="nt-nut nt-nut-xanh" data-ruong="' + i + '">Mở rương</button>'
            : '<span class="nt-ruong-tt">Còn ' + (r.sao - h.homNay) + ' sao</span>') + '</div>';
      }).join('') + '</div>' +
      (function () {
        var hv = hocVi(h.tong);
        if (!hv) return '';
        return '<div class="nt-hv-the">' + huyHv(h.tong) + '<span><b>Học vị: ' + esc(hv.zh) + ' ' + esc(hv.vn) + '</b><small>' +
          (hv.tiep ? 'Còn <b>' + (hv.tiep.sao - (h.tong || 0)) + ' sao học</b> nữa để đỗ ' + esc(hv.tiep.zh) + ' ' + esc(hv.tiep.vn) : 'Em đã là Trạng nguyên! 状元！') +
          ' · hiện trên bảng tên của em, không mua được bằng xu</small></span></div>';
      })() +
      '<div id="ntHnChuoi" class="nt-hn-chuoi" hidden></div>' +
      '<h3 class="nt-hn-h">Kiếm sao ngay</h3><div class="nt-hn-viec">' +
        '<button type="button" class="nt-viec nt-viec-ch" data-tab="chuhan"><span class="nt-ch-ic" aria-hidden="true">字</span><span><b>Thử thách chữ Hán</b><small>10 câu · đúng từ 8 câu mở hộp quà bí ẩn 🎁</small></span></button>' +
        '<a class="nt-viec" id="ntHocTiep" href="/">' + img('tb-hoc') + '<span><b>Học tiếp bài đang học</b><small id="ntHocTiepPhu">Mỗi câu đúng lần đầu +1 sao</small></span></a>' +
        '<button type="button" class="nt-viec" id="ntOnNhanh">' + img('ga') + '<span><b>Ôn từ — cho vật nuôi ăn</b><small>Trả lời đúng để vật nuôi lớn nhanh</small></span></button>' +
        '<a class="nt-viec" href="/game">' + img('tb-cuahang') + '<span><b>Trò chơi tự học</b><small>Mỗi câu đúng +1 sao</small></span></a>' +
        '<a class="nt-viec" href="/exam/">' + img('tb-don') + '<span><b>Thi thử HSK</b><small>Lên bảng xếp hạng đề thi</small></span></a>' +
      '</div></div>';
    than.innerHTML = html;
    $all('img', than).forEach(ganLoiAnh);
    $all('[data-nv-di]', than).forEach(function (b) { b.addEventListener('click', function () { diNhiemVu(b.getAttribute('data-nv-di')); }); });
    $all('[data-nv-qua]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        lam({ a: 'nvqua', i: +b.getAttribute('data-nv-qua') }, b).then(function (kq) {
          tieng('len');
          bao('🎁 Thưởng nhiệm vụ: +' + kq.them.xu + ' xu' + (kq.them.luot ? ' + 1 lượt vòng quay!' : '!'));
          veBang();
        }, function () {});
      });
    });
    $all('[data-ruong]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var i = +b.getAttribute('data-ruong'), r = m.R[i];
        lam({ a: 'ruong', i: i }, b).then(function (kq) {
          tieng('len');
          bao('Mở ' + r.ten.toLowerCase() + ': +' + kq.them.xu + ' xu! 加油！Jiāyóu!');
          doc('加油');
          veBang();
        }, function () {});
      });
    });
    $('#ntOnNhanh', than).addEventListener('click', function () {
      var con = S.st.o.filter(function (o) { return S.cat.CON[o.k] && !o.h; })[0];
      dongBang();
      if (con) { bao('Chạm vào ' + tenMon(con.k).vn.toLowerCase() + ' đang đói để trả lời câu hỏi cho nó ăn!'); return; }
      bao('Chưa có vật nuôi nào đang đói — mua thêm vật nuôi ở Cửa hàng, hoặc bấm Học tiếp bài đang học nhé!');
    });
    // bai dang hoc + chuoi ngay hoc (tai sau, khong chan ve)
    var hienHocTiep = function () {
      var a = $('#ntHocTiep', than);
      if (!a || !hocTiep || !hocTiep.url) return;
      a.href = hocTiep.url;
      if (hocTiep.nguon) $('#ntHocTiepPhu', than).textContent = hocTiep.nguon;
    };
    if (hocTiep) hienHocTiep();
    else goi('/api/farm/on').then(function (d) { hocTiep = { url: d.gan || (d.urls || [])[0] || '', nguon: (d.nguon || '').replace(/^Ôn từ /, '') }; hienHocTiep(); }, function () {});
    goi('/api/farm/thidua?pham=lop').then(function (d) {
      var c = $('#ntHnChuoi', than);
      if (!c || !d.em) return;
      c.innerHTML = '<span class="nt-lua" aria-hidden="true">🔥</span><span><b>' + (d.em.chuoi || 0) + ' ngày</b> học liên tiếp' +
        (d.em.chuoi ? ' — rương gỗ thưởng thêm +' + Math.min(10, d.em.chuoi) + ' xu' : ' — học hôm nay để bắt đầu chuỗi!') + '</span>' +
        (d.lop ? '<button type="button" class="nt-nut" data-tab="thidua">Hạng ' + d.em.hang + '/' + d.tong + ' lớp</button>' : '');
      c.hidden = false;
    }, function () {});
  }

  /* ---------------- Hoc vi (danh hieu khoa cu theo tong sao hoc) ---------------- */
  function hocVi(tong) {
    var ds = (S.cat && S.cat.HOC_VI) || [], i = 0;
    ds.forEach(function (h, k) { if ((tong || 0) >= h.sao) i = k; });
    return ds.length ? { i: i, zh: ds[i].zh, vn: ds[i].vn, tiep: ds[i + 1] || null } : null;
  }
  function huyHv(tong, nho) {
    var h = hocVi(tong);
    return h ? '<i class="nt-hv hv' + h.i + (nho ? ' nho' : '') + '" title="' + esc(h.vn) + '" lang="zh">' + esc(h.zh) + '</i>' : '';
  }
  // Len hoc vi moi -> chuc mung (lan dau chi ghi nho)
  function kiemLenHv() {
    var h = S.st && S.st.hoc && hocVi(S.st.hoc.tong);
    if (!h) return;
    var cu = docJson('hyv_nt_hocvi', null);
    try { localStorage.setItem('hyv_nt_hocvi', JSON.stringify(h.i)); } catch (e) { /* bo qua */ }
    if (cu != null && h.i > cu) {
      tieng('len');
      bao('🎓 Chúc mừng! Em đã đỗ ' + h.zh + ' ' + h.vn + '! 恭喜！');
      doc(h.zh);
    }
  }

  /* ---------------- Cung - cau trong lop (dac san 特产, gia theo cung - cau) ---------------- */
  function thiTr() { return (S.st && S.st.thiTruong) || { heSo: {}, can: {}, soNguoi: {}, cung: {}, dacSan: null }; }
  function hsCua(k) { return thiTr().heSo[k] || 1; }
  // nhan gia: ↑ dang thieu (ban duoc gia cao), ↓ dang thua
  function nhanHs(k) {
    var h = hsCua(k);
    if (h >= 1.1) return '<span class="nt-hs len" title="Lớp đang thiếu — bán được giá cao">↑ ×' + h.toString().replace('.', ',') + '</span>';
    if (h <= 0.9) return '<span class="nt-hs xuong" title="Nhiều bạn đang có — giá thấp">↓ ×' + h.toString().replace('.', ',') + '</span>';
    return '';
  }
  function nhanDacSan(k) { return thiTr().dacSan === k ? '<span class="nt-ds-nhan">⭐ Đặc sản</span>' : ''; }
  function nhanCan(k) { var n = thiTr().can[k] || 0; return n ? '<span class="nt-can-nhan">🔥 Lớp cần ' + n + '</span>' : ''; }

  /* ---------------- Ban hang: goi ten bang tieng Trung ---------------- */
  function hanMucBan() { var b = S.st.ban || { da: 0, toiDa: 0 }; return { da: b.da, toiDa: b.toiDa, con: Math.max(0, b.toiDa - b.da) }; }
  function moGoiTen(k, n) {
    var c = S.cat, m = c.SP[k], goc = m.ban * n * hsCua(k);
    var dung = Math.max(1, Math.round(goc * 1.1)), sai = Math.max(1, Math.round(goc * 0.7));
    // dap an nhieu: ten nong san khac, uu tien cung so chu / chung chu
    var khac = Object.keys(c.SP).filter(function (x) { return x !== k && c.SP[x].zh !== m.zh; }).map(function (x) {
      var z = c.SP[x].zh, d = (z.length === m.zh.length ? 2 : 0) + (z.split('').some(function (ch) { return m.zh.indexOf(ch) >= 0; }) ? 3 : 0);
      return { zh: z, d: d + Math.random() * 2 };
    }).sort(function (a, b) { return b.d - a.d; }).slice(0, 3).map(function (x) { return x.zh; });
    var lua = tron([m.zh].concat(khac));
    moBangNho('<div class="nt-goi">' +
      '<h3>Gọi tên món hàng bằng tiếng Trung</h3>' +
      '<div class="nt-goi-mon">' + img('sp-' + k) + '<span><b>' + esc(m.vn) + '</b><small>Bán ' + n + ' cái</small></span></div>' +
      '<p class="nt-goi-luat">Chọn đúng chữ Hán: <b>' + dung + ' xu</b> (+10%) · Chọn sai: chỉ <b>' + sai + ' xu</b></p>' +
      '<div class="nt-ch-lua zh">' + lua.map(function (z) { return '<button type="button" data-goi="' + esc(z) + '" lang="zh">' + esc(z) + '</button>'; }).join('') + '</div>' +
      '<p class="nt-ch-giai" id="ntGoiGiai" aria-live="polite"></p>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut" id="ntGoiVe">Về kho</button></div></div>');
    var xong = false;
    $('#ntGoiVe').addEventListener('click', function () { moBang('kho', 'sp'); });
    $all('[data-goi]').forEach(function (b) {
      b.addEventListener('click', function () {
        if (xong) return;
        xong = true;
        var goi = b.getAttribute('data-goi');
        lam({ a: 'ban', k: k, n: n, goi: goi }, b).then(function (r) {
          var ok = r.them && r.them.goiDung;
          $all('[data-goi]').forEach(function (x) { x.disabled = true; x.classList.add(x.getAttribute('data-goi') === m.zh ? 'dung' : x === b ? 'sai' : 'mo'); });
          $('#ntGoiGiai').innerHTML = (ok ? '✔ Đúng rồi! ' : '✘ Chưa đúng — ') + '<b lang="zh">' + esc(m.zh) + '</b> ' + esc(m.py) + ' = ' + esc(m.vn) + ' · +' + r.them.xu + ' xu';
          tieng(ok ? 'xu' : 'sai');
          doc(m.zh);
        }, function () { moBang('kho', 'sp'); });
      });
    });
  }

  /* ---------------- Bo suu tap chu Han ---------------- */
  function mocTiep() { var M = S.cat.MOC_THE || []; return M[S.st.theMoc || 0] || null; }
  function htmlBoSuuTapNgan() {
    var so = S.st.the || 0, moc = mocTiep(), M = S.cat.MOC_THE || [];
    return '<div class="nt-bst">' +
      '<div class="nt-bst-dau"><b>🃏 Bộ sưu tập chữ Hán: ' + so + ' thẻ</b><small>Mỗi chữ trả lời đúng ' + (S.cat.THE_DUNG || 3) + ' lần = 1 thẻ</small></div>' +
      (moc ? '<div class="nt-bst-moc">' + img(moc.k) + '<span>Thẻ thứ <b>' + moc.n + '</b> mở khoá <b>' + esc(tenMon(moc.k).vn) + '</b> <span lang="zh">' + esc(tenMon(moc.k).zh) + '</span> — đồ độc quyền, không bán ở cửa hàng<i class="nt-bst-thanh"><i style="width:' + Math.min(100, Math.round(so / moc.n * 100)) + '%"></i></i></span></div>'
        : '<p class="nt-ch-con">Em đã mở khoá cả ' + M.length + ' món độc quyền! 了不起！</p>') +
      '<button type="button" class="nt-nut" id="ntBstXem">Xem bộ sưu tập</button></div>';
  }
  function veBoSuuTap(than) {
    than.innerHTML = '<p class="nt-trong">Đang mở bộ sưu tập…</p>';
    goi('/api/farm/bosuutap').then(function (r) {
      var can = S.cat.THE_DUNG || 3, M = S.cat.MOC_THE || [];
      var co = r.ds.filter(function (x) { return x.n >= can; }), dang = r.ds.filter(function (x) { return x.n < can; });
      var the = function (x) {
        return '<button type="button" class="nt-the-chu' + (x.n >= can ? '' : ' dang') + '" data-doc="' + esc(x.zh) + '" title="' + esc(x.py + ' — ' + x.vn) + '">' +
          '<b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + '</small>' + (x.n >= can ? '' : '<i>' + x.n + '/' + can + '</i>') + '</button>';
      };
      than.innerHTML = '<div class="nt-bst-ds">' +
        '<div class="nt-bst-mocs">' + M.map(function (m, i) {
          var mo = i < r.theMoc;
          return '<div class="nt-bst-mo' + (mo ? ' mo' : '') + '">' + img(m.k) + '<b>' + esc(tenMon(m.k).vn) + '</b><small>' + (mo ? 'Đã mở khoá' : m.n + ' thẻ') + '</small></div>';
        }).join('') + '</div>' +
        '<h3>' + co.length + ' thẻ chữ đã sưu tập</h3>' +
        (co.length ? '<div class="nt-the-luoi">' + co.map(the).join('') + '</div>' : '<p class="nt-trong">Chưa có thẻ nào — làm Thử thách chữ Hán để sưu tập nhé!</p>') +
        (dang.length ? '<h3>Đang luyện (' + dang.length + ')</h3><div class="nt-the-luoi">' + dang.map(the).join('') + '</div>' : '') +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntBstVe">← Thử thách chữ Hán</button></div></div>';
      $all('img', than).forEach(ganLoiAnh);
      $all('[data-doc]', than).forEach(function (b) { b.addEventListener('click', function () { doc(b.getAttribute('data-doc')); }); });
      $('#ntBstVe', than).addEventListener('click', function () { CH.xemBst = false; veBang(); });
    }, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
  }

  // --- Thu thach chu Han: 10 cau, dung tu 8 cau -> hop qua bi an (may chu cham + trao qua) ---

  /* ---------------- Canh vat bay luon: may, chim, buom (nong trai + thi tran) ---------------- */
  var MAU_BUOM = [['#ff8fb1', '#ffd1df'], ['#ffc83d', '#fff0b3'], ['#8fd3f7', '#dff4ff'], ['#b98cff', '#eadcff'], ['#ff9f43', '#ffe0bf']];
  function svgBuom(m) {
    return '<svg viewBox="0 0 40 32" aria-hidden="true"><g class="nt-buom-canh trai"><path d="M20 16C14 2 2 2 4 12c1 5 8 6 16 4z" fill="' + m[0] + '"/><path d="M20 17C13 18 6 24 10 29c4 3 9-4 10-12z" fill="' + m[1] + '"/></g>' +
      '<g class="nt-buom-canh phai"><path d="M20 16C26 2 38 2 36 12c-1 5-8 6-16 4z" fill="' + m[0] + '"/><path d="M20 17c7 1 14 7 10 12-4 3-9-4-10-12z" fill="' + m[1] + '"/></g>' +
      '<g stroke="#2b1d3a" stroke-width="1.6" stroke-linecap="round" fill="none"><path d="M20 9v17"/><path d="M20 9l-3-5M20 9l3-5"/></g></svg>';
  }
  function svgChim() {
    return '<svg viewBox="0 0 40 24" aria-hidden="true"><g fill="none" stroke="#2b1d3a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' +
      '<path class="nt-chim-canh" d="M3 9q8-8 17 3q9-11 17-3"/></g><circle cx="20" cy="13" r="2.6" fill="#2b1d3a"/></svg>';
  }
  function veCanh() {
    if ($('#ntCanh')) return;
    var c = document.createElement('div');
    c.id = 'ntCanh'; c.className = 'nt-canh'; c.setAttribute('aria-hidden', 'true');
    var h = '';
    // may bay qua lai: 2 chieu, kem bong may luot tren ruong
    // may o tren bau troi (lop rieng nam SAU trang trai) — khong bay de len ruong
    var troi = document.createElement('div');
    troi.id = 'ntTroiMay'; troi.className = 'nt-troi-may'; troi.setAttribute('aria-hidden', 'true');
    troi.innerHTML = [['m1', ''], ['m2', ' nguoc'], ['m3', ''], ['m4', ' nguoc']].map(function (x) {
      return '<div class="nt-canh-may ' + x[0] + x[1] + '"><i class="may"></i></div>';
    }).join('');
    document.body.appendChild(troi);
    for (var i = 0; i < 3; i++) h += '<div class="nt-canh-chim c' + (i + 1) + '">' + svgChim() + '</div>';
    for (var j = 0; j < 2; j++) h += '<div class="nt-canh-buom b' + (j + 1) + '">' + svgBuom(MAU_BUOM[j]) + '</div>';
    // ban dem: trang, sao va dom dom 萤火虫 (chi hien khi body co lop nt-dem)
    h += '<i class="nt-dem-trang"></i>';
    for (var s = 0; s < 7; s++) h += '<i class="nt-dem-sao" style="left:' + (6 + s * 13) % 94 + '%;top:' + (2 + (s * 7) % 12) + '%;animation-delay:-' + s * 0.6 + 's"></i>';
    for (var d = 0; d < 22; d++) {
      h += '<i class="nt-dom d' + (d % 3) + '" style="left:' + ((d * 29 + 7) % 92) + '%;top:' + (24 + (d * 41) % 66) + '%;animation-duration:' + (9 + (d * 5) % 9) + 's,' + (1.6 + (d % 5) * 0.5) + 's;animation-delay:-' + (d * 1.7 % 13).toFixed(1) + 's,-' + (d % 4) * 0.4 + 's"></i>';
    }
    c.innerHTML = h;
    capNhatDem();
    setInterval(capNhatDem, 60000);
    document.body.appendChild(c);
  }

  // Nong trai luon la ban ngay (co giao khong thich che do toi); ?dem=1 de trinh chieu canh dem co dom dom
  var demDaBao = false;
  function capNhatDem() {
    var dem = (location.search.match(/[?&]dem=([01])/) || [])[1] === '1';
    var chieu = false;
    document.body.classList.toggle('nt-dem', dem);
    document.body.classList.toggle('nt-chieu', chieu);
    if (dem && !demDaBao) {
      demDaBao = true;
      setTimeout(function () { bao('🌙 晚上好！Wǎnshang hǎo — Chào buổi tối! Đom đóm 萤火虫 yínghuǒchóng bay khắp nông trại.'); doc('晚上好'); }, 1800);
    }
  }

  /* ---------------- Thien tai 天灾 ---------------- */
  var TAI_IC = { gh: '☀️', sau: '🐛', mua: '🌧️', ret: '❄️', bao: '🌀', lu: '🌊', chuot: '🐭', muada: '🧊', nong: '🔥', suong: '🌫️', cat: '🏜️', chau: '🦗' };
  var TAI_VIEC_IC = { gh: '🪣', sau: '🐛', mua: '⛏️', ret: '🪵', bao: '🪢', lu: '🧱', chuot: '🪤', muada: '⛺', nong: '🪭', suong: '🏮', cat: '🧹', chau: '🥅' };
  var TAI = { cau: null, xong: null };
  // Thanh canh bao tren nong trai cua em + hieu ung tren ruong (ca khi sang nha ban)
  function veTai() {
    var t = S.tham ? S.tham.tai : (S.st && S.st.tai);
    var khung = $('#ntKhung'), lop = $('#ntTaiLop');
    Object.keys(TAI_IC).forEach(function (k) { khung.classList.toggle('tai-' + k, !!(t && t.k === k)); });
    if (!lop) { lop = document.createElement('div'); lop.id = 'ntTaiLop'; lop.className = 'nt-tai-lop'; lop.setAttribute('aria-hidden', 'true'); document.body.appendChild(lop); }
    lop.className = 'nt-tai-lop' + (t ? ' tai-' + t.k : '');
    var kieu = t ? t.k : '';
    document.body.setAttribute('data-tai', kieu);
    if (lop.getAttribute('data-k') !== kieu) {
      lop.setAttribute('data-k', kieu);
      var h = '';
      if (kieu === 'sau') for (var i = 0; i < 9; i++) h += '<i class="nt-sau" style="left:' + (6 + (i * 37) % 86) + '%;top:' + (12 + (i * 53) % 74) + '%;animation-delay:-' + (i * 0.7) + 's"></i>';
      if (kieu === 'gh') h = '<i class="nt-mat-troi"></i>';
      if (kieu === 'mua') {
        // mua that: tung hat roi xien, vong nuoc ban tren mat ruong, thinh thoang chop loe
        for (var m = 0; m < 80; m++) h += '<i class="nt-hat-mua" style="left:' + ((m * 13 + (m % 7) * 3) % 104 - 2) + '%;height:' + (16 + (m * 7) % 14) + 'px;animation-duration:' + (0.55 + (m % 5) * 0.09).toFixed(2) + 's;animation-delay:-' + ((m * 0.137) % 1.2).toFixed(2) + 's"></i>';
        for (var v = 0; v < 16; v++) h += '<i class="nt-vung" style="left:' + ((v * 31 + 5) % 92) + '%;top:' + (30 + (v * 43) % 62) + '%;animation-delay:-' + ((v * 0.29) % 1.4).toFixed(2) + 's"></i>';
        h += '<i class="nt-chop"></i>';
      }
      // cac kieu moi: bao (mua xien + la bay), lu (nuoc dang), chuot chay, mua da, nang nong, suong mu, bao cat, chau chau
      if (kieu === 'bao') {
        for (var b1 = 0; b1 < 60; b1++) h += '<i class="nt-hat-mua xien" style="left:' + ((b1 * 17) % 120 - 10) + '%;height:' + (18 + (b1 * 7) % 14) + 'px;animation-duration:' + (0.45 + (b1 % 4) * 0.08).toFixed(2) + 's;animation-delay:-' + ((b1 * 0.11) % 1).toFixed(2) + 's"></i>';
        for (var b2 = 0; b2 < 10; b2++) h += '<i class="nt-la-bay" style="top:' + (10 + (b2 * 37) % 80) + '%;animation-duration:' + (2.2 + (b2 % 4) * 0.5) + 's;animation-delay:-' + (b2 * 0.7).toFixed(1) + 's">🍃</i>';
      }
      if (kieu === 'lu') { h = '<i class="nt-lu-nuoc"></i>'; for (var l1 = 0; l1 < 30; l1++) h += '<i class="nt-hat-mua" style="left:' + ((l1 * 29) % 100) + '%;height:' + (14 + (l1 * 5) % 10) + 'px;animation-duration:' + (0.7 + (l1 % 5) * 0.1).toFixed(2) + 's;animation-delay:-' + ((l1 * 0.17) % 1.2).toFixed(2) + 's"></i>'; }
      if (kieu === 'chuot') for (var c1 = 0; c1 < 7; c1++) h += '<i class="nt-chuot' + (c1 % 2 ? ' nguoc' : '') + '" style="top:' + (22 + (c1 * 41) % 66) + '%;animation-duration:' + (5 + (c1 % 3) * 1.5) + 's;animation-delay:-' + (c1 * 1.3).toFixed(1) + 's">🐭</i>';
      if (kieu === 'muada') for (var d1 = 0; d1 < 60; d1++) {
        var dto = 5 + (d1 * 3) % 6;
        h += '<i class="nt-tuyet-hat nt-da-hat" style="left:' + ((d1 * 23) % 100) + '%;width:' + dto + 'px;height:' + dto + 'px;--lac:4px;animation-duration:' + (1.1 + (d1 % 5) * 0.2).toFixed(1) + 's,1s;animation-delay:-' + ((d1 * 0.21) % 2).toFixed(2) + 's,0s"></i>';
      }
      if (kieu === 'nong') h = '<i class="nt-mat-troi nong"></i><i class="nt-hoi-nong"></i>';
      if (kieu === 'suong') for (var s1 = 0; s1 < 5; s1++) h += '<i class="nt-suong" style="top:' + (s1 * 20 - 5) + '%;animation-duration:' + (26 + s1 * 6) + 's;animation-delay:-' + (s1 * 7) + 's"></i>';
      if (kieu === 'cat') for (var k1 = 0; k1 < 50; k1++) h += '<i class="nt-cat-hat" style="top:' + ((k1 * 37) % 100) + '%;animation-duration:' + (1.4 + (k1 % 5) * 0.35).toFixed(2) + 's;animation-delay:-' + ((k1 * 0.19) % 2).toFixed(2) + 's"></i>';
      if (kieu === 'chau') for (var u1 = 0; u1 < 12; u1++) h += '<i class="nt-chau-con" style="left:' + (5 + (u1 * 37) % 88) + '%;top:' + (14 + (u1 * 53) % 72) + '%;animation-delay:-' + (u1 * 0.4).toFixed(1) + 's">🦗</i>';
      if (kieu === 'ret') for (var s = 0; s < 46; s++) {
        var to = 4 + (s * 7) % 9;
        h += '<i class="nt-tuyet-hat' + (s % 6 === 0 ? ' bong-tuyet' : '') + '" style="left:' + ((s * 23) % 100) + '%;width:' + to + 'px;height:' + to + 'px;--lac:' + (12 + (s * 5) % 26) + 'px;animation-duration:' + (7 + (s * 3) % 8) + 's,' + (2.4 + (s % 4) * 0.6) + 's;animation-delay:-' + ((s * 1.3) % 12).toFixed(1) + 's,-' + (s % 3) + 's">' + (s % 6 === 0 ? '❄' : '') + '</i>';
      }
      lop.innerHTML = h;
    }
    var nut = $('#ntTai');
    if (!nut) return;
    var em = !S.tham && S.st && S.st.tai;
    nut.hidden = !em;
    if (em) {
      nut.innerHTML = '<span class="nt-tai-ic" aria-hidden="true">' + TAI_IC[em.k] + '</span><b><span lang="zh">' + esc(em.zh) + '</span> ' + esc(em.vn) + '</b>' +
        '<small>' + (em.khien ? '🛡️ ' : '') + em.co + '/' + em.can + '</small>';
      nut.setAttribute('aria-label', em.vn + ' — ' + em.viec + ' ' + em.co + '/' + em.can + (em.khien ? ' · khiên bảo vệ đang bật' : '') + ' · bấm để chống thiên tai');
      nut.title = em.viec + ' ' + em.co + '/' + em.can + (em.khien ? ' · 🛡️ khiên bảo vệ đang bật' : '') + ' — bấm để chống thiên tai';
    }
  }
  // Thien tai vua ap den: bang thong bao (chong ngay hoac de sau)
  function baoThienTai(t) {
    tieng('sai');
    moBangNho('<div class="nt-chuc nt-tai-den tai-' + t.k + '"><span class="nt-tai-qua" aria-hidden="true">' + TAI_IC[t.k] + '</span>' +
      '<h2><span lang="zh">' + esc(t.zh) + '</span> ' + esc(t.vn) + '!</h2><p class="nt-cn-nho">' + esc(t.py) + ' · thiên tai hôm nay <span lang="zh">今天的天灾</span></p>' +
      '<p><b>' + esc(t.hieu) + '</b></p>' + htmlCau(t.hoc) +
      '<p class="nt-khien' + (t.khien ? ' bat' : '') + '">' + (t.khien ? '🛡️ Khiên bảo vệ đang bật — thiên tai không ảnh hưởng nông trại của em!' : '🛡️ Học đủ ' + S.cat.KHIEN_SAO + ' sao hôm nay để bật <b>khiên bảo vệ</b>.') + '</p>' +
      '<p>Trả lời đúng ' + t.can + ' câu chữ Hán để <b>' + esc(t.viec.toLowerCase()) + '</b> · xong được +' + t.xu + ' xu. Bạn bè cũng sang giúp được!</p>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-tai-ngay>' + TAI_VIEC_IC[t.k] + ' Chống ngay</button><button type="button" class="nt-nut" data-dong>Để sau</button></div></div>');
    var b = $('#ntBangThan [data-tai-ngay]');
    if (b) b.addEventListener('click', function () { TAI.xong = null; TAI.cau = null; moBang('thientai'); });
    doc(t.hoc.zh);
  }
  function htmlTaiDau(t, cuaBan) {
    var viec = '';
    for (var i = 0; i < t.can; i++) viec += '<span class="' + (i < t.co ? 'xong' : '') + '">' + TAI_VIEC_IC[t.k] + '</span>';
    return '<div class="nt-tai-dau tai-' + t.k + '"><span class="nt-tai-to" aria-hidden="true">' + TAI_IC[t.k] + '</span><div>' +
      '<p class="nt-cn-nho">' + (cuaBan ? 'Nông trại của ' + esc(cuaBan) + ' đang gặp' : 'Nông trại của em đang gặp') + ' thiên tai <span lang="zh">天灾</span></p>' +
      '<h3><span lang="zh">' + esc(t.zh) + '</span> ' + esc(t.py) + ' · ' + esc(t.vn) + '</h3>' +
      '<p class="nt-tai-hieu">' + (t.khien ? '<s>' + esc(t.hieu) + '</s>' : esc(t.hieu)) + '</p>' +
      '<p class="nt-khien' + (t.khien ? ' bat' : '') + '">' + (t.khien ? '🛡️ <b>Khiên bảo vệ 护盾 đang bật</b> — học đủ ' + S.cat.KHIEN_SAO + ' sao hôm nay nên thiên tai không ảnh hưởng nông trại. Vẫn chống được để nhận thưởng!'
        : '🛡️ Học đủ <b>' + S.cat.KHIEN_SAO + ' sao</b> hôm nay để bật <b>khiên bảo vệ</b>: thiên tai hết tác dụng.') + '</p></div></div>' +
      htmlCau(t.hoc) +
      '<p class="nt-tai-viec"><b>' + esc(t.viec) + '</b> <span lang="zh">' + esc(t.dzh) + '</span> ' + esc(t.dpy) + ': ' + t.co + '/' + t.can + ' ' + esc(t.don) + '</p><div class="nt-tai-o">' + viec + '</div>';
  }
  function veThienTai(than) {
    $('#ntBangTit').textContent = 'Chống thiên tai 天灾';
    datTab([], '');
    if (TAI.xong) {
      var x = TAI.xong;
      than.innerHTML = '<div class="nt-ch-kq"><div class="nt-tai-qua" aria-hidden="true">🌈</div><div class="nt-ch-diem"><b lang="zh">雨过天晴！</b><span>Yǔ guò tiān qíng — Mưa tạnh trời quang!</span></div>' +
        '<p class="nt-ch-con">' + (x.ban ? 'Em đã giúp ' + esc(x.ban) + ' vượt qua <span lang="zh">' + esc(x.zh) + '</span> · +' + x.xu + ' xu' : 'Nông trại đã vượt qua <span lang="zh">' + esc(x.zh) + '</span> ' + esc(x.vn) + ' · <b>+' + x.xu + ' xu</b>, +5 kinh nghiệm') + '</p>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntTaiXong">Về nông trại</button></div></div>';
      $('#ntTaiXong', than).addEventListener('click', function () { TAI.xong = null; dongBang(); });
      return;
    }
    var ban = S.tham, t = ban ? ban.tai : S.st.tai;
    if (!t) { than.innerHTML = '<p class="nt-trong">Nông trại đang yên bình — không có thiên tai. 🌤</p>'; return; }
    var html = htmlTaiDau(t, ban && ban.ten);
    if (ban) {
      html += ban.daGiupTai ? '<p class="nt-ch-con">✓ Em đã giúp bạn rồi — rủ thêm bạn khác sang giúp nhé!</p>'
        : TAI.cau ? '<div class="nt-cn-hop" id="ntTaiHop">' + htmlCauChu(TAI.cau, '<div class="nt-ch-dau"><span>🆘 Giúp bạn</span><span>đúng 1 câu = 1 ' + esc(t.don) + '</span></div>') + '</div>'
        : '<p class="nt-meo">Trả lời đúng 1 câu chữ Hán để làm giúp bạn 1 ' + esc(t.don) + ' (em nhận +' + (S.cat.TAI_GIUP_XU || 2) + ' xu).</p><div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntTaiBd">🆘 Giúp bạn</button></div>';
    } else {
      var gio = Math.max(1, Math.round(t.conMs / 3600000));
      html += TAI.cau ? '<div class="nt-cn-hop" id="ntTaiHop">' + htmlCauChu(TAI.cau, '<div class="nt-ch-dau"><span>' + TAI_VIEC_IC[t.k] + ' ' + esc(t.viec) + '</span><span>' + t.co + '/' + t.can + '</span></div>') + '</div>'
        : '<p class="nt-meo">Mỗi câu chữ Hán đúng = 1 ' + esc(t.don) + '. Đủ ' + t.can + ' thì thiên tai qua đi và em nhận <b>+' + t.xu + ' xu</b>. Bạn bè sang nhà cũng giúp được! (Nếu không làm, khoảng ' + gio + ' giờ nữa thiên tai tự qua nhưng không có thưởng.)</p>' +
          '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" id="ntTaiBd">' + TAI_VIEC_IC[t.k] + ' ' + esc(t.viec) + '</button></div>';
    }
    than.innerHTML = html;
    var bd = $('#ntTaiBd', than);
    if (bd) bd.addEventListener('click', function () {
      bd.disabled = true;
      goi(ban ? '/api/farm/thientai/giupcau/' + encodeURIComponent(ban.id) : '/api/farm/thientai/cau', {}).then(function (r) { TAI.cau = r.cau; veBang(); }, function (e) { bd.disabled = false; bao(e.message, 'loi'); });
    });
    if (TAI.cau && $('#ntTaiHop', than)) ganCauChu(than, function (chon) {
      return goi(ban ? '/api/farm/thientai/giup/' + encodeURIComponent(ban.id) : '/api/farm/thientai/tl', { chon: chon });
    }, function (r) {
      if (r.st && !ban) nhanTrangThai(r.st); else if (r.st) { S.st = r.st; veHud(); }
      if (ban) {
        TAI.cau = null;
        if (r.dung) { ban.daGiupTai = true; ban.tai = r.tai; bao('🆘 Em đã giúp bạn 1 ' + t.don + ' · +' + (S.cat.TAI_GIUP_XU || 2) + ' xu'); }
        if (r.xong) { TAI.xong = { ban: ban.ten, zh: t.zh, vn: t.vn, xu: S.cat.TAI_GIUP_XU || 2 }; tieng('len'); doc('雨过天晴'); }
        veTai(); veThamGoi();
      } else {
        TAI.cau = r.cau;
        if (r.dung) bayLen($('#ntTaiHop'), '+1 ' + TAI_VIEC_IC[t.k]);
        if (r.xong) { TAI.xong = { zh: t.zh, vn: t.vn, xu: t.xu }; TAI.cau = null; tieng('len'); doc('雨过天晴'); }
      }
      if (bangDang && bangDang.loai === 'thientai') veBang();
    });
  }
  var CH = { de: null, i: 0, khoa: false, conQua: 3, quaNgay: 3, dat: 8, so: 10, ketThuc: null, coBai: true };
  // Cau hoi nong trai chi lay tu bai em da hoc / bai thay co giao -> chua co bai nao thi moi em di hoc truoc
  function htmlChuaHoc(them) {
    return '<div class="nt-chua-hoc"><span class="nt-chua-hoc-ic" aria-hidden="true">📚</span>' +
      '<b>Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi nhé!</b>' +
      '<p>Câu hỏi ở nông trại chỉ lấy từ những bài em đã học và bài được giao.' + (them ? ' ' + them : '') + '</p>' +
      '<a class="nt-nut nt-nut-xanh nt-nut-to" href="' + esc((hocTiep && hocTiep.url) || '/') + '">📖 Vào học bài</a></div>';
  }
  var TEN_KIEU_CH = { nghia: 'Chọn chữ Hán đúng nghĩa', py: 'Chữ này đọc là gì?', chu: 'Chữ này nghĩa là gì?', thieu: 'Điền chữ còn thiếu', nghe: 'Nghe và chọn chữ đúng', viet: 'Viết chữ còn thiếu' };
  function veNutChuHan() {
    var p = $('#ntChuHanPhu');
    if (!p) return;
    p.textContent = CH.conQua > 0 ? 'còn ' + CH.conQua + ' hộp quà hôm nay 🎁' : 'luyện thêm · mai có quà mới';
    $('#ntChuHan').classList.toggle('het', CH.conQua <= 0);
  }
  function taiChuHan() {
    return goi('/api/farm/chuhan').then(function (r) {
      CH.conQua = r.conQua; CH.quaNgay = r.quaNgay; CH.dat = r.dat; CH.so = r.so; CH.coBai = r.coBai !== false;
      if (r.dang && !CH.ketThuc) { CH.de = r.dang; CH.i = r.dang.da; }
      veNutChuHan();
      return r;
    });
  }
  function veChuHan(than) {
    if (CH.xemBst) { veBoSuuTap(than); return; }
    if (CH.ketThuc) { veKetQuaCh(than); return; }
    if (CH.de && CH.i < CH.de.ds.length) { veCauCh(than); return; }
    if (!CH.coBai) { than.innerHTML = htmlChuaHoc('Học xong quay lại làm thử thách để mở hộp quà 🎁'); return; }
    than.innerHTML = '<div class="nt-ch-moi">' +
      '<div class="nt-ch-logo" aria-hidden="true">字</div>' +
      '<h3>Thử thách chữ Hán</h3>' +
      '<p>' + CH.so + ' câu về chữ Hán trong các bài em đang học: chọn chữ đúng nghĩa, đọc pinyin, điền chữ còn thiếu…</p>' +
      '<div class="nt-ch-luat"><span>🎯 Đúng từ <b>' + CH.dat + '/' + CH.so + '</b> câu</span><span>🎁 Mở <b>hộp quà bí ẩn</b>: nông sản, đồ trang trí, xu — may mắn có cả vật nuôi!</span>' +
      '<span>🌟 Đúng cả ' + CH.so + ' câu: quà xịn hơn</span></div>' +
      '<p class="nt-ch-con">' + (CH.conQua > 0 ? 'Hôm nay còn <b>' + CH.conQua + '/' + CH.quaNgay + '</b> hộp quà' : 'Hôm nay em đã nhận đủ ' + CH.quaNgay + ' hộp quà — vẫn luyện tiếp được, mai có quà mới!') + '</p>' +
      '<button type="button" class="nt-nut nt-nut-xanh nt-nut-to" id="ntChBatDau">Bắt đầu ▶</button>' + htmlBoSuuTapNgan() + '</div>';
    $all('img', than).forEach(ganLoiAnh);
    $('#ntBstXem', than).addEventListener('click', function () { CH.xemBst = true; veBang(); });
    $('#ntChBatDau', than).addEventListener('click', function () {
      var b = this; b.disabled = true;
      goi('/api/farm/chuhan/moi', { nghe: xinCauNghe() }).then(function (r) {
        CH.de = r.dang; CH.i = 0; CH.conQua = r.conQua; CH.ketThuc = null;
        veBang();
      }, function (e) { b.disabled = false; if (e.chuaHoc) { CH.coBai = false; veBang(); } else bao(e.message, 'loi'); });
    });
  }
  function veCauCh(than) {
    var de = CH.de, q = de.ds[CH.i], h = q.hoi;
    if (laKt(q)) { veCauChKt(than, de, q); return; }
    var deBai = q.k === 'nghe' || q.k === 'viet' ? deBaiDacBiet(q)
      : q.k === 'nghia' ? '<div class="nt-ch-vn">' + esc(h.vn) + '</div>'
      : q.k === 'thieu' ? '<div class="nt-ch-zh" lang="zh">' + esc(h.thieu).replace('＿', '<span class="nt-ch-o">？</span>') + '</div><div class="nt-ch-goi">' + esc(h.vn) + '</div>'
      : '<div class="nt-ch-zh" lang="zh">' + esc(h.zh) + '</div>';
    var laZh = q.k === 'nghia' || q.k === 'thieu' || q.k === 'nghe';
    than.innerHTML = '<div class="nt-ch">' +
      '<div class="nt-ch-dau"><span>Câu ' + (CH.i + 1) + '/' + de.ds.length + '</span><span class="nt-ch-cham">' + de.ds.map(function (x, j) { return '<i class="' + (j < CH.i ? 'qua' : j === CH.i ? 'dang' : '') + '"></i>'; }).join('') + '</span><span>✔ ' + de.dung + '</span></div>' +
      '<p class="nt-ch-kieu">' + TEN_KIEU_CH[q.k] + '</p>' + deBai +
      (q.k === 'viet' ? '<div class="nt-hang-nut"><button type="button" class="nt-nut" data-viet-bo>Bỏ qua</button><button type="button" data-ch="0" hidden></button><button type="button" data-ch="-1" hidden></button></div>'
        : '<div class="nt-ch-lua' + (laZh ? ' zh' : '') + '">' + q.lua.map(function (l, j) {
          return '<button type="button" data-ch="' + j + '"' + (laZh ? ' lang="zh"' : '') + '>' + esc(l) + '</button>';
        }).join('') + '</div>') + '<p class="nt-ch-giai" id="ntChGiai" aria-live="polite"></p>' +
      (de.nguon ? '<p class="nt-ch-nguon">Từ: ' + esc(de.nguon) + '</p>' : '') + '</div>';
    CH.khoa = false;
    ganDacBiet(q, than, function (chon) { var b = $('[data-ch="' + chon + '"]', than); if (b) b.click(); });
    var boViet = $('[data-viet-bo]', than);
    if (boViet) boViet.addEventListener('click', function () { boViet.disabled = true; $('[data-ch="-1"]', than).click(); });
    $all('[data-ch]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (CH.khoa) return;
        CH.khoa = true;
        var chon = +b.getAttribute('data-ch');
        goi('/api/farm/chuhan/tl', { id: de.id, i: CH.i, chon: chon }).then(function (r) {
          $all('[data-ch]', than).forEach(function (x, j) { x.disabled = true; x.classList.add(j === r.dap ? 'dung' : j === chon ? 'sai' : 'mo'); });
          if (r.dung) { de.dung++; tieng('dung'); } else tieng('sai');
          if (r.mocMoi) {
            if (r.st) nhanTrangThai(r.st);
            setTimeout(function () { tieng('len'); bao('🏆 ' + r.mocMoi.n + ' thẻ chữ! Mở khoá ' + tenMon(r.mocMoi.k).vn + ' ' + tenMon(r.mocMoi.k).zh + ' — đã vào Túi đồ!'); }, 300);
          } else if (r.theMoi) bao('🃏 Thẻ chữ mới: ' + r.theMoi.zh + ' ' + r.theMoi.py + ' — ' + r.theMoi.vn);
          $('#ntChGiai', than).innerHTML = '<b lang="zh">' + esc(r.zh) + '</b> ' + esc(r.py) + ' — ' + esc(r.vn);
          doc(r.zh);
          CH.i++;
          if (r.ketThuc) {
            CH.ketThuc = r.ketThuc; CH.de = null;
            CH.conQua = r.ketThuc.conQua;
            if (r.st) nhanTrangThai(r.st);
            veNutChuHan();
          }
          setTimeout(function () { if (bangDang && bangDang.loai === 'hoc' && bangDang.tab === 'chuhan') veBang(); }, r.dung ? 1100 : 1900);
        }, function (e) {
          CH.khoa = false;
          bao(e.message, 'loi');
          if (/kết thúc/.test(e.message)) { CH.de = null; veBang(); }
        });
      });
    });
  }
  // Cau Kiem tra bai cu trong thu thach chu Han: trac nghiem / xep cau (keo tha) / noi tu
  function veCauChKt(than, de, q) {
    than.innerHTML = '<div class="nt-ch nt-kt">' +
      '<div class="nt-ch-dau"><span>Câu ' + (CH.i + 1) + '/' + de.ds.length + '</span><span class="nt-ch-cham">' + de.ds.map(function (x, j) { return '<i class="' + (j < CH.i ? 'qua' : j === CH.i ? 'dang' : '') + '"></i>'; }).join('') + '</span><span>✔ ' + de.dung + '</span></div>' +
      '<p class="nt-ch-kieu">' + esc(tenKt(q)) + '</p>' + htmlKt(q, 'ch') +
      '<div class="nt-ch-giai" id="ntChGiai" aria-live="polite"></div>' +
      (de.nguon ? '<p class="nt-ch-nguon">Bài: ' + esc(de.nguon) + '</p>' : '') + '</div>';
    CH.khoa = false;
    var gui = function (b, chon) {
      if (CH.khoa) return;
      CH.khoa = true;
      goi('/api/farm/chuhan/tl', Object.assign({ id: de.id, i: CH.i }, b)).then(function (r) {
        danhDauKt(than, q, r, chon, 'ch');
        if (r.dung) { de.dung++; tieng('dung'); } else tieng('sai');
        if (r.mocMoi) {
          if (r.st) nhanTrangThai(r.st);
          setTimeout(function () { tieng('len'); bao('🏆 ' + r.mocMoi.n + ' thẻ chữ! Mở khoá ' + tenMon(r.mocMoi.k).vn + ' ' + tenMon(r.mocMoi.k).zh + ' — đã vào Túi đồ!'); }, 300);
        } else if (r.theMoi) bao('🃏 Thẻ chữ mới: ' + r.theMoi.zh + ' ' + r.theMoi.py + ' — ' + r.theMoi.vn);
        var giai = $('#ntChGiai', than);
        giai.innerHTML = giaiKt(r, q);
        docKt(r);
        CH.i++;
        if (r.ketThuc) {
          CH.ketThuc = r.ketThuc; CH.de = null;
          CH.conQua = r.ketThuc.conQua;
          if (r.st) nhanTrangThai(r.st);
          veNutChuHan();
        }
        var tiep = function () { if (bangDang && bangDang.loai === 'hoc' && bangDang.tab === 'chuhan') veBang(); };
        // dung: tu sang cau sau; sai: de em doc dap an + giai thich roi bam Tiep
        if (r.dung) setTimeout(tiep, 1200);
        else {
          giai.insertAdjacentHTML('beforeend', '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-kt-tiep>' + (r.ketThuc ? 'Xem kết quả ▶' : 'Câu tiếp ▶') + '</button></div>');
          var bt = $('[data-kt-tiep]', giai);
          bt.addEventListener('click', function () { bt.disabled = true; tiep(); });
          try { bt.focus({ preventScroll: true }); } catch (e) { /* bo qua */ }
        }
      }, function (e) {
        CH.khoa = false;
        moLaiKt(than, q);
        bao(e.message, 'loi');
        if (/kết thúc/.test(e.message)) { CH.de = null; veBang(); }
      });
    };
    ganKt(than, q, 'ch', gui);
  }
  function tenQua(q) {
    if (q.loai === 'xu') return { zh: '铜钱', py: 'tóngqián', vn: q.n + ' xu', hinh: 'ic-xu' };
    var m = tenMon(q.k);
    return { zh: m.zh, py: m.py, vn: (q.n > 1 ? q.n + ' ' : '') + m.vn, hinh: q.loai === 'sp' ? 'sp-' + q.k : q.k };
  }
  function veKetQuaCh(than) {
    var k = CH.ketThuc, q = k.qua;
    var html = '<div class="nt-ch-kq">' +
      '<div class="nt-ch-diem"><b>' + k.soDung + '/' + k.so + '</b><span>' + (k.soDung === k.so ? 'Xuất sắc! 太棒了！' : k.dat ? 'Giỏi lắm! 很好！' : 'Cố lên! 加油！') + '</span></div>';
    if (q) {
      var m = tenQua(q);
      html += '<button type="button" class="nt-hop-qua" id="ntHopQua" aria-label="Mở hộp quà">' +
        '<span class="nt-hop-than" aria-hidden="true">🎁</span><span class="nt-hop-chu">Chạm để mở hộp quà!</span></button>' +
        '<div class="nt-qua-mo" id="ntQuaMo" hidden><span class="nt-qua-hiem h-' + esc(q.hiem) + '">' + esc(q.hiem) + '</span>' + img(m.hinh) +
        '<b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.py) + ' · ' + esc(m.vn) + '</small>' +
        '<p>' + (q.loai === 'tt' || q.loai === 'con' ? 'Đã cất vào <b>Kho → Túi đồ</b>, đặt lên nông trại khi nào em muốn.' : q.loai === 'sp' ? 'Đã cất vào <b>Kho</b> — giao đơn hàng hoặc bán lấy xu.' : 'Đã cộng vào xu của em.') + '</p></div>';
    } else if (k.dat) {
      html += '<p class="nt-ch-con">Hôm nay em đã nhận đủ hộp quà rồi — mai thử thách tiếp để mở quà nhé!</p>';
    } else {
      html += '<p class="nt-ch-con">Cần đúng từ <b>' + CH.dat + '</b> câu để mở hộp quà. Ôn lại chữ rồi thử lượt mới nhé!</p>';
    }
    html += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntChLai">Làm lượt mới</button>' +
      (q && (q.loai === 'tt' || q.loai === 'con') ? '<button type="button" class="nt-nut" id="ntChTui">Mở túi đồ</button>' : '') + '</div></div>';
    than.innerHTML = html;
    $all('img', than).forEach(ganLoiAnh);
    var hop = $('#ntHopQua', than);
    if (hop) hop.addEventListener('click', function () {
      hop.classList.add('lac');
      tieng('len');
      setTimeout(function () { hop.hidden = true; $('#ntQuaMo', than).hidden = false; var m = tenQua(q); doc(m.zh); }, T_CHO_HOP);
    });
    $('#ntChLai', than).addEventListener('click', function () { CH.ketThuc = null; CH.de = null; veBang(); });
    var tui = $('#ntChTui', than);
    if (tui) tui.addEventListener('click', function () { CH.ketThuc = null; moBang('kho', 'tui'); });
  }
  var T_CHO_HOP = (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) ? 0 : 900;

  // --- Thi dua tuan: xep hang sao hoc tap (lop / cong dong) ---
  var tdPham = 'lop', tdGiai = false;
  function conLaiGiay(giay) {
    var ngay = Math.floor(giay / 86400), gio = Math.floor((giay % 86400) / 3600);
    return ngay ? ngay + ' ngày ' + gio + ' giờ' : gio ? gio + ' giờ' : Math.max(1, Math.floor(giay / 60)) + ' phút';
  }
  function veThiDua(than) {
    than.innerHTML = '<div class="nt-td-pham" role="group" aria-label="Phạm vi"><button type="button" data-td="lop"' + (tdPham === 'lop' ? ' class="bat"' : '') + '>Lớp em</button>' +
      '<button type="button" data-td="cd"' + (tdPham === 'cd' ? ' class="bat"' : '') + '>Cộng đồng</button>' +
      '<button type="button" data-td-giai' + (tdGiai ? ' class="bat"' : '') + '>🏅 Giải cùng cấp</button></div><div id="ntTdThan"><p class="nt-trong">Đang tải…</p></div>';
    $all('[data-td]', than).forEach(function (b) { b.addEventListener('click', function () { tdPham = b.getAttribute('data-td'); veBang(); }); });
    $('[data-td-giai]', than).addEventListener('click', function () { tdGiai = !tdGiai; veBang(); });
    goi('/api/farm/thidua?pham=' + tdPham + (tdGiai ? '&giai=1' : '')).then(function (d) {
      var hop = $('#ntTdThan', than);
      if (!hop || !bangDang || bangDang.tab !== 'thidua') return;
      if (d.pham === 'lop' && !d.lop) { hop.innerHTML = '<p class="nt-trong">Em chưa vào lớp nào. Xem thi đua ở <b>Cộng đồng</b>, hoặc nhập mã lớp ở trang học.</p>'; return; }
      var em = d.em, top = d.ds.slice(0, 3);
      var bac = [1, 0, 2].filter(function (i) { return top[i] && top[i].tuan > 0; }).map(function (i) {
        var r = top[i];
        return '<div class="nt-bac b' + (i + 1) + (r.la ? ' la' : '') + '"><span class="nt-bac-nv">' + NV.svg(r.av || NV.macDinh(r.id)) + '</span>' +
          '<b>' + esc(r.ten) + '</b><small>⭐ ' + r.tuan + '</small><span class="nt-bac-khoi">' + ['🥇', '🥈', '🥉'][i] + '</span></div>';
      }).join('');
      var html = '<p class="nt-meo">' + (d.pham === 'lop' ? 'Lớp <b>' + esc(d.lop) + '</b>' : 'Mọi nông trại trên Hi Hán') +
        ' · xếp theo <b>sao học tập</b> kiếm được tuần này. Tuần mới bắt đầu sau <b>' + conLaiGiay(d.conGiay) + '</b>.</p>';
      if (d.giaiEm) html += '<p class="nt-giai g' + d.giaiEm.i + '">🏅 ' + (d.giai ? 'Đang xem ' : 'Em thuộc ') + '<b>Giải ' + esc(d.giaiEm.vn) + ' <span lang="zh">' + esc(d.giaiEm.zh) + '</span></b> (cấp ' + d.giaiEm.tu + (d.giaiEm.den < 99 ? '–' + d.giaiEm.den : '+') + ')' +
        (d.giai ? ' — chỉ so với các bạn cùng giải.' : ' — bấm "Giải cùng cấp" để so với các bạn cùng trình độ.') + '</p>';
      if (bac) html += '<div class="nt-bucvinh">' + bac + '</div>';
      if (d.tienBo && d.tienBo.length) html += '<div class="nt-tien-bo"><b>📈 Tiến bộ nhất tuần <span lang="zh">进步之星</span></b><small>Sao tuần này tăng nhiều nhất so với cả tuần trước</small><ol>' +
        d.tienBo.map(function (r) { return '<li' + (r.la ? ' class="la"' : '') + '><span class="nt-tb-nv">' + NV.svg(r.av || NV.macDinh(r.id)) + '</span><b>' + esc(r.ten) + (r.la ? ' (em)' : '') + '</b><span class="nt-tb-so">+' + r.tang + ' ⭐</span><small>' + r.truoc + ' → ' + r.tuan + '</small></li>'; }).join('') + '</ol></div>';
      if (em) {
        html += '<div class="nt-td-em"><span class="nt-td-hang">#' + em.hang + '</span><div><b>Em: ' + em.tuan + ' sao tuần này</b><small>' +
          (em.hang === 1 && em.tuan > 0 ? 'Em đang dẫn đầu! Giữ vững nhé 💪'
            : em.tren ? 'Còn <b>' + em.tren.can + ' sao</b> nữa để vượt ' + esc(em.tren.ten) + ' (hạng ' + (em.hang - 1) + ')'
            : 'Học để ghi những sao đầu tiên của tuần!') + '</small></div><a class="nt-nut nt-nut-xanh" href="' + esc((hocTiep && hocTiep.url) || '/') + '">Học ngay</a></div>';
      }
      html += '<ol class="nt-td-ds">' + d.ds.map(function (r) {
        return '<li class="' + (r.la ? 'la' : '') + '"><span class="nt-td-so">' + (r.hang <= 3 && r.tuan > 0 ? ['🥇', '🥈', '🥉'][r.hang - 1] : r.hang) + '</span>' +
          '<span class="nt-td-ten"><b>' + huyHv(r.hv, true) + esc(r.ten) + (r.la ? ' (em)' : '') + '</b><small>' + (d.pham === 'cd' && r.lop ? esc(r.lop) + ' · ' : '') + 'hôm nay +' + r.homNay + '</small></span>' +
          '<span class="nt-td-sao">⭐ ' + r.tuan + '</span></li>';
      }).join('') + '</ol>';
      if (d.tong > d.ds.length) html += '<p class="nt-meo">Hiện 30 bạn đứng đầu trong ' + d.tong + ' bạn.</p>';
      hop.innerHTML = html;
      luuHang(d);
    }, function (err) { var hop = $('#ntTdThan', than); if (hop) hop.innerHTML = '<p class="nt-trong">' + esc(err.message) + '</p>'; });
  }
  // Nho hang tuan cua em trong lop -> lan sau vao nong trai bao "len hang"
  function luuHang(d) {
    if (d.pham !== 'lop' || !d.em) return null;
    var k = 'hyv_nt_hang', cu = docJson(k, null), tuan = Math.floor((Date.now() + d.conGiay * 1000) / 864e5);
    try { localStorage.setItem(k, JSON.stringify({ t: tuan, h: d.em.hang })); } catch (e) { /* bo qua */ }
    return cu && cu.t === tuan ? cu.h : null;
  }
  function baoHang() {
    goi('/api/farm/thidua?pham=lop').then(function (d) {
      var cu = luuHang(d);
      if (!d.em || !d.em.tuan || cu == null) return;
      if (d.em.hang < cu) { tieng('len'); bao('🎉 Em vừa lên hạng ' + d.em.hang + ' lớp tuần này! 太棒了！Tài bàng le!'); }
      else if (d.em.hang > cu && d.em.tren) bao('Có bạn vừa vượt em — còn ' + d.em.tren.can + ' sao nữa để lấy lại hạng ' + (d.em.hang - 1) + '. 加油！', 'loi');
    }, function () {});
  }

  // Doi sao hoc tap lay xu nong trai (mot chieu). Ti gia lay tu may chu (XU_MOI_SAO).
  var doiSo = 10;
  function veDoiSao(than) {
    var ti = S.cat.XU_MOI_SAO || 1, co = S.st.sao;
    doiSo = Math.max(co ? 1 : 0, Math.min(doiSo, co));
    var nhanh = [10, 50, 100].filter(function (n) { return n < co; });
    than.innerHTML =
      '<div class="nt-doi">' +
        '<div class="nt-doi-ti">' + img('ic-sao') + '<b>1</b><span class="nt-doi-mui" aria-hidden="true">→</span>' + img('ic-xu') + '<b>' + ti + '</b></div>' +
        '<p class="nt-doi-co">Em đang có <b>' + co + ' sao</b> và <b>' + S.st.xu + ' xu</b>.</p>' +
        '<div class="nt-doi-chon">' +
          '<button type="button" class="nt-doi-bot" data-doi-them="-1" aria-label="Bớt 1 sao">−</button>' +
          '<input type="number" id="ntDoiSo" min="1" max="' + co + '" value="' + doiSo + '" inputmode="numeric" aria-label="Số sao muốn đổi">' +
          '<button type="button" class="nt-doi-bot" data-doi-them="1" aria-label="Thêm 1 sao">+</button>' +
        '</div>' +
        '<div class="nt-doi-nhanh">' + nhanh.map(function (n) { return '<button type="button" data-doi-dat="' + n + '">' + n + ' sao</button>'; }).join('') +
          (co ? '<button type="button" data-doi-dat="' + co + '">Tất cả</button>' : '') + '</div>' +
        '<button type="button" class="nt-nut nt-nut-xanh nt-nut-to nt-doi-nut" id="ntDoiNut"' + (co ? '' : ' disabled') + '></button>' +
        '<p class="nt-meo">' + img('ic-sao') + ' Sao chỉ kiếm được khi học bài, nên xu <u>không</u> đổi ngược lại thành sao. Đổi sao không làm tụt hạng trên bảng xếp hạng.</p>' +
      '</div>';
    var o = $('#ntDoiSo', than);
    var capNhat = function () {
      var n = Math.max(0, Math.min(co, Math.floor(+o.value || 0)));
      doiSo = n;
      $('#ntDoiNut', than).innerHTML = co ? 'Đổi ' + n + ' sao → nhận ' + (n * ti) + ' xu' : 'Chưa có sao để đổi';
      $('#ntDoiNut', than).disabled = !n;
    };
    o.addEventListener('input', capNhat);
    $all('[data-doi-them]', than).forEach(function (b) {
      b.addEventListener('click', function () { o.value = Math.max(1, Math.min(co, (+o.value || 0) + +b.getAttribute('data-doi-them'))); capNhat(); });
    });
    $all('[data-doi-dat]', than).forEach(function (b) {
      b.addEventListener('click', function () { o.value = b.getAttribute('data-doi-dat'); capNhat(); });
    });
    $('#ntDoiNut', than).addEventListener('click', function () {
      var n = doiSo;
      if (!n) return;
      lam({ a: 'doisao', n: n }, this).then(function () {
        tieng('xu');
        bao('Đã đổi ' + n + ' sao lấy ' + (n * ti) + ' xu!');
        veBang();
      }, function () { /* lam() da bao loi */ });
    });
    capNhat();
  }

  /* ---------------- tham nong trai ban ---------------- */
  // tuTt: { id, ten } thi tran vua xem khi bam vao lo dat cua ban (de co nut "← Về thị trấn")
  function thamBan(id, tuTt) {
    goi('/api/farm/xem/' + encodeURIComponent(id)).then(function (r) {
      dongBang();
      dongThiTran();
      thoatDat();
      S.tham = { id: id, ten: r.ten, kich: r.kich, o: r.o, lv: r.lv, dep: r.dep, tim: r.tim, sap: r.sap || [], av: r.av, daTim: r.daTim, daChao: r.daChao, conGiup: r.conGiup, conTin: r.conTin, daTang: r.daTang, hv: r.hv, tai: r.tai, daGiupTai: r.daGiupTai, lop: r.lop || null, tuTt: tuTt || null, tt: r.tt || null, cay7: r.cay7 || null, daThich: !!r.daThich };
      TD.banTdh = null;
      goi('/api/farm/tdh/xem/' + encodeURIComponent(id)).then(function (x) { if (S.tham && S.tham.id === id) { TD.banTdh = x.dang; veCotTrai(); } }, function () {});
      S.lechTham = r.now - Date.now();
      veNutLui();
      $('#ntThamTen').textContent = 'Nông trại của ' + r.ten;
      $('#ntThamPhu').textContent = 'Cấp ' + r.lv + ' · điểm đẹp ' + r.dep + ' · ❤ ' + r.tim;
      $('#ntTham').hidden = false;
      datChoTham();
      veThamGoi();
      document.body.classList.add('dang-tham');
      veBanDo();
      $('#ntKhung').scrollTo(0, 0);
      setTimeout(function () { if (S.tham && S.tham.id === id) noi('chu', '欢迎！', 'Huānyíng!', 4000); }, 700);
    }, function (err) { bao(err.message, 'loi'); });
  }
  function datChoTham() {
    var t = $('#ntTham');
    if (!t || t.hidden) return;
    document.body.style.setProperty('--tham-duoi', Math.round(t.getBoundingClientRect().bottom + 12) + 'px');
  }
  window.addEventListener('resize', datChoTham);
  // thanh tham doi chieu cao (them loi nhac, chu xuong dong) -> do lai
  if (window.ResizeObserver) new ResizeObserver(datChoTham).observe(document.getElementById('ntTham'));
  // Nut quay lai tren thanh tham: sang tu thi tran -> "← Về thị trấn <lop>"; nut 🏘 mo thi tran lop cua ban ay
  function veNutLui() {
    var t = S.tham, lui = $('#ntThamLui'), tt = $('#ntThamTt');
    if (!t || !lui) return;
    lui.hidden = !t.tuTt;
    if (t.tuTt) lui.textContent = '← Về thị trấn' + (t.tuTt.ten ? ' ' + t.tuTt.ten : '');
    // da co nut ve dung thi tran lop ban -> an nut 🏘 cho do trung
    tt.hidden = !!(t.tuTt && t.lop && t.tuTt.id === t.lop.id);
    tt.textContent = '🏘 ' + (t.lop && t.lop.ten ? 'Thị trấn ' + t.lop.ten : 'Thị trấn');
  }
  function veThiTranBan() {
    var t = S.tham;
    var id = t && t.lop ? t.lop.id : '';
    moThiTran(id);
  }
  function luiThiTran() {
    var t = S.tham;
    moThiTran(t && t.tuTt ? t.tuTt.id : '');
  }
  function veNha() {
    S.tham = null;
    TD.banTdh = null;
    $('#ntTham').hidden = true;
    document.body.classList.remove('dang-tham');
    dongNoi();
    veBanDo();
    veCotTrai();
  }
  function thaTim() {
    if (!S.tham) return;
    var b = $('#ntThamTim');
    b.disabled = true;
    goi('/api/farm/tim/' + encodeURIComponent(S.tham.id), {}).then(function (r) {
      S.st.xu = r.xu;
      S.tham.tim = r.tim;
      S.tham.daTim = true;
      veThamGoi();
      $('#ntThamPhu').textContent = 'Cấp ' + S.tham.lv + ' · điểm đẹp ' + S.tham.dep + ' · ❤ ' + r.tim;
      veHud();
      tieng('xu');
      bayLen(b, '+3', 'ic-xu');
    }, function (err) { bao(err.message, 'loi'); });
  }

  /* ---------------- nhan vat ao ---------------- */
  // Moi em 1 nhan vat (toc, ao, quan/vay, mu, kinh) co ten tren dau. Di dao tren nong trai cua em;
  // sang nha ban thi ca chu nha lan em cung di dao o do. Thiet ke trong bang "Nhân vật của em".
  var NV = window.NhanVat;
  var nvDs = [];        // nhan vat dang dung tren ban do: { key, el, x, y, sau, av, ten }
  var nvBoi = '';       // ban do nao (nha em / nha ban id) -> doi ban do thi dat lai vi tri
  function idEm() { var a = auth(); return a && a.user ? a.user.id : ''; }
  function avEm() { return Object.assign({ gt: '', pk: '', mat: '', mp: 0 }, (S.st && S.st.av) || NV.macDinh(idEm())); }
  function tenEm() { var a = auth(); return (S.st && S.st.ten) || (a && a.user && a.user.name) || ''; }
  function oTrong(d) {
    var ban = {};
    d.o.forEach(function (o) {
      var r = rong(o);
      for (var i = 0; i < r; i++) for (var j = 0; j < r; j++) ban[(o.x + i) + ',' + (o.y + j)] = 1;
    });
    return ban;
  }
  function choTrongGan(d, x, y, xa) {
    var ban = oTrong(d), ds = [];
    for (var i = 0; i < d.kich.w; i++) for (var j = 0; j < d.kich.h; j++) {
      if (ban[i + ',' + j]) continue;
      var kc = Math.abs(i - x) + Math.abs(j - y);
      if (kc <= xa) ds.push([i, j]);
    }
    return ds.length ? ds[Math.floor(Math.random() * ds.length)] : [x, y];
  }
  function htmlNv(av, ten, khach, hv) {
    return '<span class="nt-nv-ten' + (khach ? ' khach' : '') + '">' + (hv != null ? huyHv(hv, true) : '') + esc(NV.tenNgan(ten)) + '</span><div class="nt-nv-hinh">' + NV.svg(av) + '</div>';
  }
  function datViTriNv(n) {
    var T = S.o;
    n.el.style.left = (n.x + 0.5) * T + 'px';
    n.el.style.top = (n.y + 1) * T + 'px';
    n.el.style.zIndex = (n.y + 1) * 10 + 5;
  }
  // Goi sau moi lan ve ban do (innerHTML thay het) -> gan lai nhan vat
  function veNhanVat() {
    var d = duLieuBanDo();
    if (!d || !NV) return;
    var boi = S.tham ? 'tham:' + S.tham.id : 'nha';
    var can = S.tham
      ? [{ key: 'chu', av: S.tham.av || NV.macDinh(S.tham.id), ten: S.tham.ten, hv: S.tham.hv }, { key: 'em', av: avEm(), ten: tenEm(), khach: true, hv: S.st.hoc && S.st.hoc.tong }]
      : [{ key: 'em', av: avEm(), ten: tenEm(), hv: S.st.hoc && S.st.hoc.tong }];
    if (boi !== nvBoi) {
      // ban do moi: chu nha dung canh nha, khach vao tu cong (giua mep duoi)
      nvBoi = boi;
      var nha = d.o.filter(function (o) { return o.k === 'nha'; })[0] || { x: 1, y: 1 };
      nvDs = can.map(function (c, i) {
        var dau = c.khach ? choTrongGan(d, Math.floor(d.kich.w / 2), d.kich.h - 1, 3) : choTrongGan(d, nha.x + 1, nha.y + 3, 2);
        return { key: c.key, x: dau[0], y: dau[1], sau: Date.now() + 1500 + i * 1200 };
      });
    }
    var dat = $('#ntDat');
    nvDs.forEach(function (n, i) {
      var c = can[i];
      n.av = c.av;
      n.el = document.createElement('div');
      n.el.className = 'nt-nv' + (c.khach ? ' khach' : '');
      n.el.style.width = Math.round(S.o * 1.45) + 'px';
      n.el.innerHTML = htmlNv(c.av, c.ten, c.khach, c.hv);
      datViTriNv(n);
      dat.appendChild(n.el);
      veNoi(n);
    });
  }
  // Moi giay (tu nhip): den luot thi di toi 1 o co trong gan do
  function nvDiDao() {
    var d = duLieuBanDo();
    if (!d || !nvDs.length || document.hidden) return;
    var now = Date.now();
    nvDs.forEach(function (n) {
      if (!n.el || now < n.sau) return;
      var t = choTrongGan(d, n.x, n.y, 3);
      var kc = Math.abs(t[0] - n.x) + Math.abs(t[1] - n.y);
      var ms = Math.max(600, kc * 520);
      if (t[0] !== n.x) n.el.classList.toggle('trai', t[0] < n.x);
      n.el.style.transitionDuration = ms + 'ms';
      n.el.classList.add('di');
      n.x = t[0]; n.y = t[1];
      datViTriNv(n);
      setTimeout(function () { if (n.el) n.el.classList.remove('di'); }, ms);
      n.sau = now + ms + 2500 + Math.random() * 4000;
    });
  }

  // --- Bang thiet ke nhan vat ---
  var nvSua = null;
  var NV_TAB = [['gt', 'Bạn là'], ['toc', '头发 Tóc'], ['ao', '衣服 Áo'], ['duoi', '裤子 Quần váy'], ['mu', '帽子 Mũ'], ['kinh', '眼镜 Kính'], ['pk', '配饰 Phụ kiện'], ['mat', '表情 Biểu cảm'], ['da', 'Màu da']];
  var NV_MAU_CUA = { toc: 'mt', ao: 'ma', duoi: 'md', mu: 'mm', pk: 'mp' };
  // mu / phu kien co mau co dinh (khong hien bang mau)
  var NV_KHONG_MAU = { mu: ['', 'nonla', 'vuong', 'tho', 'hoa', 'bep'], pk: ['', 'denlong', 'gau', 'bongda'] };
  function giaNv(k, v) {
    var key = k + ':' + v, sao = (S.cat.NV_SAO || {})[key];
    return sao && (S.st.avMua || []).indexOf(key) < 0 ? sao : 0;
  }
  function canSaoNv(av) {
    return ['toc', 'ao', 'duoi', 'mu', 'kinh', 'pk', 'mat'].reduce(function (s, k) { return s + giaNv(k, av[k]); }, 0);
  }
  function moNhanVat(lanDau) {
    nvSua = Object.assign({}, avEm());
    moBang('nhanvat', lanDau ? 'gt' : 'toc');
    if (lanDau) bao('Chào em! Thiết kế nhân vật của em trước khi vào nông trại nhé.');
  }
  function veNhanVatBang(than) {
    var tab = bangDang.tab || 'toc', av = nvSua;
    $('#ntBangTit').textContent = 'Nhân vật của em';
    datTab(NV_TAB, tab);
    var html = '<div class="nt-nvs"><div class="nt-nvs-xem"><span class="nt-nv-ten">' + esc(NV.tenNgan(tenEm())) + '</span>' + NV.svg(av, 'nv-svg to') +
      '<button type="button" class="nt-nut" data-nvngau>🎲 Ngẫu nhiên</button></div><div class="nt-nvs-chon">';
    if (tab === 'gt') {
      // chon ban nam / ban nu: doi luon dang nguoi + vai mon cho hop (van doi tu do duoc)
      html += '<div class="nt-nvs-gt">' + NV.KIEU.gt.map(function (m) {
        return '<button type="button" class="nt-nvs-mon' + ((av.gt || '') === m.k ? ' bat' : '') + '" data-nvgt="' + m.k + '" data-doc="' + esc(m.zh) + '">' +
          NV.svg(NV.doiGioiTinh(av, m.k), 'nv-svg') + '<b>' + esc(m.vn) + '</b><small lang="zh">' + esc(m.zh) + ' <i>' + esc(m.py) + '</i></small></button>';
      }).join('') + '</div><p class="nt-meo">Chọn xong, sang các mục Tóc, Áo, Mũ… để thay đồ. Món nào bạn nam, bạn nữ cũng chọn được.</p>';
    } else if (tab !== 'da') {
      html += '<div class="nt-nvs-kieu">' + NV.KIEU[tab].map(function (m) {
        var thu = Object.assign({}, av); thu[tab] = m.k;
        if (tab === 'ao' && m.k === 'aodai') thu.duoi = 'dai';
        var gia = giaNv(tab, m.k);
        return '<button type="button" class="nt-nvs-mon' + (av[tab] === m.k ? ' bat' : '') + '" data-nvk="' + m.k + '"' + (m.zh ? ' data-doc="' + esc(m.zh) + '"' : '') + '>' +
          NV.svg(thu, 'nv-svg nho') + '<b>' + esc(m.vn) + '</b>' + (m.zh ? '<small lang="zh">' + esc(m.zh) + ' <i>' + esc(m.py) + '</i></small>' : '<small>&nbsp;</small>') +
          (gia ? '<span class="nt-nvs-gia">' + img('ic-sao') + gia + '</span>' : '') + '</button>';
      }).join('') + '</div>';
    }
    var mk = tab === 'da' ? 'da' : NV_MAU_CUA[tab];
    var coMau = mk && !(NV_KHONG_MAU[tab] && NV_KHONG_MAU[tab].indexOf(av[tab]) >= 0) && !(tab === 'duoi' && av.ao === 'aodai');
    if (coMau) {
      var bang = mk === 'da' ? NV.DA : mk === 'mt' ? NV.MAU_TOC : NV.MAU;
      var ten = mk === 'da' ? ['Sáng', 'Hơi sáng', 'Ngăm', 'Nâu'] : mk === 'mt' ? NV.TEN_MAU_TOC : NV.TEN_MAU;
      html += '<p class="nt-nvs-nhan">Màu</p><div class="nt-nvs-mau">' + bang.map(function (c, i) {
        return '<button type="button" data-nvm="' + i + '" class="' + (av[mk] === i ? 'bat' : '') + '" style="background:' + c + '" aria-label="' + esc(ten[i]) + '" title="' + esc(ten[i]) + '"></button>';
      }).join('') + '</div>';
    }
    if (tab === 'duoi' && av.ao === 'aodai') html += '<p class="nt-meo">Áo dài mặc cùng quần trắng — chọn áo khác để đổi quần, váy.</p>';
    html += '</div></div>';
    var can = canSaoNv(av);
    html += '<div class="nt-nvs-luu"><span>' + (can ? 'Món mới cần ' + img('ic-sao') + '<b>' + can + '</b> sao (em có ' + S.st.sao + ')' : 'Đổi đồ miễn phí — món đặc biệt mua 1 lần là dùng mãi.') + '</span>' +
      '<button type="button" class="nt-nut nt-nut-xanh" data-nvluu>Lưu nhân vật</button></div>';
    than.innerHTML = html;
    $all('[data-nvk]', than).forEach(function (b) {
      b.addEventListener('click', function () { nvSua[tab] = b.getAttribute('data-nvk'); veBang(); });
    });
    $all('[data-nvgt]', than).forEach(function (b) {
      b.addEventListener('click', function () { nvSua = NV.doiGioiTinh(nvSua, b.getAttribute('data-nvgt')); veBang(); });
    });
    $all('[data-nvm]', than).forEach(function (b) {
      b.addEventListener('click', function () { nvSua[mk] = +b.getAttribute('data-nvm'); veBang(); });
    });
    $('[data-nvngau]', than).addEventListener('click', function () {
      var r = function (n) { return Math.floor(Math.random() * n); };
      var chon = function (k) { var ds = NV.KIEU[k].filter(function (m) { return !giaNv(k, m.k); }); return ds[r(ds.length)].k; };
      nvSua = { gt: nvSua.gt || '', da: nvSua.da, toc: chon('toc'), mt: r(6), ao: chon('ao'), ma: r(8), duoi: chon('duoi'), md: r(8), mu: r(2) ? '' : chon('mu'), mm: r(8),
        kinh: r(3) ? '' : chon('kinh'), pk: r(2) ? '' : chon('pk'), mp: r(8), mat: r(2) ? '' : chon('mat') };
      nvSua = NV.doiGioiTinh(nvSua, nvSua.gt); // ngau nhien van giu dang ban nam / ban nu
      tieng('mua');
      veBang();
    });
    $('[data-nvluu]', than).addEventListener('click', function () {
      var c = canSaoNv(nvSua);
      if (c && S.st.sao < c) return thieuSao(c);
      lam({ a: 'nhanvat', av: nvSua }, $('[data-nvluu]', than)).then(function () {
        tieng('len');
        dongBang();
        bao('Đã lưu nhân vật! Các bạn sẽ thấy ' + NV.tenNgan(tenEm()) + ' khi em sang chơi.');
        veNutNv();
      }, function () {});
    });
  }
  function veNutNv() {
    var b = $('#ntNvNut');
    if (b) b.innerHTML = NV.svg(avEm(), 'nv-svg mat');
    if (b) b.classList.toggle('moi', !!(S.st && !S.st.av));
  }

  /* ---------------- noi chuyen bang tieng Trung ---------------- */
  // Chao hoi / ghep cau / hoi ban / tang qua. Moi cau deu co pinyin + nghia, bam la nghe doc.
  function tuO(o, x) {
    var c = S.cat;
    if (o === 'mon') return c.CON[x] || c.TT[x] || { zh: '', py: '', vn: x };
    if (o === 'sp') return c.SP[x] || { zh: '', py: '', vn: x };
    return (c.TIN_TU[o] || []).filter(function (w) { return w.k === x; })[0] || { zh: '', py: '', vn: x };
  }
  function cauGhep(m, x) {
    var mau = S.cat.TIN_MAU[m], w = tuO(mau.o, x);
    var vn = mau.vn.replace('{x}', String(w.vn).toLowerCase());
    return { zh: mau.zh.replace('{x}', w.zh), py: mau.py.replace('{x}', w.py), vn: vn.charAt(0).toUpperCase() + vn.slice(1) };
  }
  function chuTin(e) {
    var c = S.cat;
    if (e.kt === 'cau') return cauGhep(e.m, e.x);
    if (e.kt === 'hoi') return c.TIN_HOI[e.q] || { zh: '', py: '', vn: '' };
    return c.LOI_CHAO[e.c] || { zh: '', py: '', vn: '' };
  }
  function htmlCau(x, cls) {
    return '<button type="button" class="nt-cau' + (cls ? ' ' + cls : '') + '" data-doc="' + esc(x.zh) + '"><b lang="zh">' + esc(x.zh) + '</b><i>' + esc(x.py) + '</i><span>' + esc(x.vn) + '</span></button>';
  }

  var tinNhap = { m: -1, x: '' };
  function moNoiChuyen() {
    if (!S.tham) return;
    tinNhap = { m: -1, x: '' };
    moBang('tin', 'chao');
  }
  function guiTin(body, x) {
    var t = S.tham;
    if (!t || S.ban) return;
    S.ban = true;
    doc(x.zh);
    goi('/api/farm/tin/' + encodeURIComponent(t.id), body).then(function (r) {
      S.ban = false;
      t.conTin = r.conTin;
      nhanTrangThai(r.st);
      veThamGoi();
      dongBang();
      tieng('xu');
      if (r.them && r.them.xu) bayLen($('#ntThamChao'), '+' + r.them.xu, 'ic-xu');
      noi('em', x.zh, x.py);
      bao('Đã gửi cho ' + t.ten + ': ' + x.zh + ' — ' + x.vn);
    }, function (err) { S.ban = false; bao(err.message, 'loi'); tieng('sai'); });
  }
  function veTin(than) {
    var t = S.tham, c = S.cat;
    if (!t) { dongBang(); return; }
    var tab = bangDang.tab || 'chao';
    $('#ntBangTit').textContent = 'Nói chuyện với ' + t.ten;
    datTab([['chao', '你好 Chào hỏi'], ['cau', '造句 Ghép câu'], ['hoi', '问 Hỏi bạn'], ['qua', '礼物 Tặng quà']], tab);
    var het = t.conTin <= 0;
    var html = '<p class="nt-meo">' + (tab === 'qua'
      ? 'Tặng ' + esc(t.ten) + ' 1 món trong kho kèm thiệp <b lang="zh">送给你！</b> <i>Sòng gěi nǐ!</i> (mỗi bạn 1 món mỗi ngày).'
      : het ? 'Hôm nay em đã nhắn ' + esc(t.ten) + ' đủ ' + c.TIN_BAN_NGAY + ' tin — mai nói chuyện tiếp nhé!'
        : 'Bấm vào câu để nghe đọc, rồi bấm <b>Gửi</b>. Còn <b>' + t.conTin + '</b> tin cho ' + esc(t.ten) + ' hôm nay.') + '</p>';
    if (tab === 'chao') {
      html += '<ul class="nt-tin-ds">' + c.LOI_CHAO.map(function (lc, i) {
        return '<li>' + htmlCau(lc) + '<button type="button" class="nt-mua" data-gui-chao="' + i + '"' + (het ? ' disabled' : '') + '>Gửi</button></li>';
      }).join('') + '</ul>';
    } else if (tab === 'cau') {
      if (tinNhap.m < 0) {
        html += '<p class="nt-tin-buoc">Bước 1 · Chọn mẫu câu</p><ul class="nt-tin-ds">' + c.TIN_MAU.map(function (mau, i) {
          var x = { zh: mau.zh.replace('{x}', '＿＿'), py: mau.py.replace('{x}', '___'), vn: mau.vn.replace('{x}', '___') };
          return '<li>' + htmlCau(x) + '<button type="button" class="nt-mua" data-mau="' + i + '">Chọn</button></li>';
        }).join('') + '</ul>';
      } else {
        var mau = c.TIN_MAU[tinNhap.m], ds;
        if (mau.o === 'mon') {
          // uu tien vat nuoi / do trang tri dang co tren nong trai ban
          var co = {};
          t.o.forEach(function (o) { if (c.CON[o.k] || c.TT[o.k]) co[o.k] = 1; });
          ds = Object.keys(co);
          if (!ds.length) ds = Object.keys(c.CON);
        } else if (mau.o === 'sp') ds = Object.keys(c.SP);
        else ds = c.TIN_TU[mau.o].map(function (w) { return w.k; });
        if (!tinNhap.x || ds.indexOf(tinNhap.x) < 0) tinNhap.x = ds[0];
        var xem = cauGhep(tinNhap.m, tinNhap.x);
        html += '<p class="nt-tin-buoc">Bước 2 · Chọn từ điền vào chỗ trống <a href="#" data-mau-lai>← đổi mẫu câu</a></p>' +
          '<div class="nt-tin-tu">' + ds.map(function (k) {
            var w = tuO(mau.o, k);
            return '<button type="button" class="' + (k === tinNhap.x ? 'bat' : '') + '" data-tu="' + esc(k) + '" data-doc="' + esc(w.zh) + '"><b lang="zh">' + esc(w.zh) + '</b><small>' + esc(w.py) + ' · ' + esc(w.vn) + '</small></button>';
          }).join('') + '</div>' +
          '<p class="nt-tin-buoc">Bước 3 · Câu của em</p><div class="nt-tin-xem">' + htmlCau(xem, 'to') +
          '<button type="button" class="nt-nut nt-nut-xanh" data-gui-cau' + (het ? ' disabled' : '') + '>Gửi</button></div>';
      }
    } else if (tab === 'hoi') {
      html += '<p class="nt-tin-buoc">Bạn sẽ chọn câu trả lời trong Nhật ký — câu trả lời gửi về Nhật ký của em.</p><ul class="nt-tin-ds">' + c.TIN_HOI.map(function (h, i) {
        return '<li>' + htmlCau(h) + '<button type="button" class="nt-mua" data-gui-hoi="' + i + '"' + (het ? ' disabled' : '') + '>Hỏi</button></li>';
      }).join('') + '</ul>';
    } else {
      var ks = Object.keys(S.st.kho).filter(function (k) { return S.st.kho[k] > 0; });
      html += ks.length ? '<div class="nt-luoi-the">' + ks.map(function (k) {
        var m = c.SP[k];
        return theMon(k, m, 'sp-' + k, '<p class="nt-the-phu">Có ' + S.st.kho[k] + '</p>', 0,
          '<button type="button" class="nt-mua" data-tang="' + k + '"' + (t.daTang ? ' disabled' : '') + '>' + (t.daTang ? 'Đã tặng hôm nay' : 'Tặng 1') + '</button>');
      }).join('') + '</div>' : '<p class="nt-trong">Kho của em đang trống — thu hoạch rồi quay lại tặng bạn nhé.</p>';
    }
    than.innerHTML = html;
    $all('[data-gui-chao]', than).forEach(function (b) {
      b.addEventListener('click', function () { var i = +b.getAttribute('data-gui-chao'); guiTin({ t: 'chao', c: i }, c.LOI_CHAO[i]); });
    });
    $all('[data-mau]', than).forEach(function (b) {
      b.addEventListener('click', function () { tinNhap = { m: +b.getAttribute('data-mau'), x: '' }; veBang(); });
    });
    var lai = $('[data-mau-lai]', than);
    if (lai) lai.addEventListener('click', function (e) { e.preventDefault(); tinNhap = { m: -1, x: '' }; veBang(); });
    $all('[data-tu]', than).forEach(function (b) {
      b.addEventListener('click', function () { tinNhap.x = b.getAttribute('data-tu'); veBang(); });
    });
    var gc = $('[data-gui-cau]', than);
    if (gc) gc.addEventListener('click', function () { guiTin({ t: 'cau', m: tinNhap.m, x: tinNhap.x }, cauGhep(tinNhap.m, tinNhap.x)); });
    $all('[data-gui-hoi]', than).forEach(function (b) {
      b.addEventListener('click', function () { var i = +b.getAttribute('data-gui-hoi'); guiTin({ t: 'hoi', q: i }, c.TIN_HOI[i]); });
    });
    $all('[data-tang]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-tang'), m = c.SP[k];
        b.disabled = true;
        goi('/api/farm/tang/' + encodeURIComponent(t.id), { k: k }).then(function (r) {
          t.daTang = true;
          nhanTrangThai(r.st);
          dongBang();
          tieng('len');
          noi('em', '送给你！', 'Sòng gěi nǐ!');
          doc('送给你');
          bao('Đã tặng ' + t.ten + ' 1 ' + m.vn + ' · ' + m.zh + ' — 送给你！');
        }, function (err) { bao(err.message, 'loi'); veBang(); });
      });
    });
  }
  // Tra loi cau hoi ban gui (trong Nhat ky)
  function traLoiBan(ai, hid, a, el) {
    if (S.ban) return;
    S.ban = true;
    var vt = el && el.getBoundingClientRect ? el.getBoundingClientRect() : null;
    goi('/api/farm/traloi/' + encodeURIComponent(ai), { hid: hid, a: a }).then(function (r) {
      S.ban = false;
      var e = (S.st.nk || []).filter(function (x) { return x.hid === hid; })[0];
      var q = e && S.cat.TIN_HOI[e.q];
      nhanTrangThai(r.st);
      hienThem(r.them, vt);
      tieng('dung');
      if (q) doc(q.a[a].zh);
      veBang();
    }, function (err) { S.ban = false; bao(err.message, 'loi'); });
  }

  // --- bong bong loi noi tren dau nhan vat ---
  var NV_TU_NOI = [
    { zh: '今天天气真好！', py: 'Jīntiān tiānqì zhēn hǎo!' },
    { zh: '我爱我的农场！', py: 'Wǒ ài wǒ de nóngchǎng!' },
    { zh: '学习汉语很有意思！', py: 'Xuéxí Hànyǔ hěn yǒu yìsi!' },
    { zh: '鸡蛋真多！', py: 'Jīdàn zhēn duō!' },
    { zh: '加油！', py: 'Jiāyóu!' },
    { zh: '我饿了。', py: 'Wǒ è le.' },
    { zh: '好开心！', py: 'Hǎo kāixīn!' },
  ];
  function noi(key, zh, py, ms) {
    var n = nvDs.filter(function (x) { return x.key === key; })[0];
    if (!n) return;
    n.noi = { zh: zh, py: py || '', het: Date.now() + (ms || 6000) };
    veNoi(n);
  }
  function veNoi(n) {
    if (!n.el) return;
    var cu = n.el.querySelector('.nt-nv-noi');
    if (cu) cu.remove();
    if (!n.noi || Date.now() > n.noi.het) return;
    var b = document.createElement('span');
    b.className = 'nt-nv-noi';
    b.innerHTML = '<b lang="zh">' + esc(n.noi.zh) + '</b>' + (n.noi.py ? '<i>' + esc(n.noi.py) + '</i>' : '');
    n.el.insertBefore(b, n.el.firstChild);
  }
  // goi moi giay: het gio thi tat bong bong; thinh thoang nhan vat tu noi 1 cau
  var noiSau = Date.now() + 9000;
  function nvNoiNhip() {
    var now = Date.now();
    nvDs.forEach(function (n) { if (n.noi && now > n.noi.het) { n.noi = null; veNoi(n); } });
    if (now > noiSau && nvDs.length && !document.hidden) {
      noiSau = now + 22000 + Math.random() * 20000;
      var n = nvDs[Math.floor(Math.random() * nvDs.length)], c = NV_TU_NOI[Math.floor(Math.random() * NV_TU_NOI.length)];
      noi(n.key, c.zh, c.py, 5000);
    }
  }

  /* ---------------- choi cung ban ---------------- */
  // Sap hang cua em, cho lop, giup ban khi den choi, loi chao co san, nhat ky nong trai.
  function tenSp(k) { return S.cat.SP[k] || { zh: '', py: '', vn: k }; }
  function khoangGia(k, n, hs) {
    var goc = S.cat.SP[k].ban * n;
    return { min: Math.max(1, Math.ceil(goc * 0.5)), max: Math.max(1, Math.round(goc * 1.3 * (hs || 1))), goc: goc, buoc: Math.max(1, Math.round(goc * 0.1)) };
  }
  function theSap(o, nut, ai) {
    var m = tenSp(o.k);
    return '<div class="nt-sap-o"><span class="nt-sap-sl">×' + o.n + '</span>' + img('sp-' + o.k) +
      '<b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.py) + ' · ' + esc(m.vn) + '</small>' +
      (ai ? '<span class="nt-sap-ai">Sạp của ' + esc(ai) + '</span>' : '') + nut + '</div>';
  }
  function nutMua(o, id) {
    var du = S.st.xu >= Math.ceil(o.gia * 0.7); // mac ca gioi giam toi 30%
    return '<button type="button" class="nt-mua" data-muasap="' + o.id + '" data-ban-id="' + esc(id) + '"' + (du ? '' : ' disabled') + '>' +
      '<span class="nt-gia xu">' + img('ic-xu') + o.gia + '</span>' + (du ? ' Mua' : '') + '</button>';
  }
  // Mua 1 o sap cua ban; xong goi xong(r) de ve lai danh sach
  function muaThat(id, sid, el, xong, mc) {
    if (S.ban) return;
    S.ban = true;
    var vt = el && el.getBoundingClientRect ? el.getBoundingClientRect() : null;
    goi('/api/farm/muasap/' + encodeURIComponent(id), { sid: sid, mc: mc || '' }).then(function (r) {
      S.ban = false;
      nhanTrangThai(r.st);
      hienThem(r.them, vt);
      tieng('xu');
      var k = Object.keys(r.them.sp)[0];
      if (k) { var m = tenSp(k); bao('Đã mua ' + r.them.sp[k] + ' ' + m.vn + ' · ' + m.zh + ' ' + m.py + ' — ' + r.tra + ' xu' + (r.giam ? ' (giảm ' + r.giam + '%)' : '')); doc(m.zh); }
      if (r.thuong) setTimeout(function () { tieng('len'); bao('🎁 Thưởng mua hàng của bạn (' + r.thuong.n + '/' + r.thuong.so + '): hoàn ' + r.thuong.hoan + ' xu' + (r.thuong.luot ? ' + 1 lượt vòng quay!' : '!')); }, 1600);
      if (xong) xong(r);
    }, function (err) { S.ban = false; bao(err.message, 'loi'); tieng('sai'); if (xong) xong(null); });
  }

  /* ---------------- Mac ca bang tieng Trung khi mua o sap ---------------- */
  // Moi cau dung giam 10% (toi da 30%); nguoi ban van nhan du gia. May chu giu dap an.
  function muaSap(id, sid, el, xong) {
    var truoc = bangDang ? { loai: bangDang.loai, tab: bangDang.tab } : null;
    var veLai = function (r) { if (truoc && truoc.loai !== 'nho') moBang(truoc.loai, truoc.tab); if (xong) xong(r); };
    goi('/api/farm/macca', { ban: id, sid: sid }).then(function (mc) {
      var i = 0, giam = 0, khoa = false;
      var ve = function (ketQua) {
        var q = mc.cau[i];
        moBangNho('<div class="nt-mc">' +
          '<h3>🛒 Mặc cả bằng tiếng Trung</h3>' +
          '<p class="nt-mc-gia">Giá: <b>' + mc.gia + ' xu</b>' + (giam ? ' · đang được giảm <b>' + giam + '%</b>' : '') + ' · mỗi câu đúng giảm thêm 10%</p>' +
          '<div class="nt-mc-cham">' + mc.cau.map(function (x, j) { return '<i class="' + (j < i ? 'qua' : j === i ? 'dang' : '') + '"></i>'; }).join('') + '</div>' +
          (ketQua || '') +
          (q ? '<p class="nt-mc-hoi">' + esc(q.hoi) + ':</p><div class="nt-mc-lua">' + q.lua.map(function (l, j) {
            return '<button type="button" data-mc="' + j + '" lang="zh">' + esc(l) + '</button>';
          }).join('') + '</div><button type="button" class="nt-mc-bo" id="ntMcBo">Bỏ qua, mua giá gốc</button>'
            : '<div class="nt-mc-chot"><b>Giá cuối: ' + Math.max(1, Math.round(mc.gia * (1 - giam / 100))) + ' xu</b>' + (giam ? '<small>Em mặc cả giảm được ' + giam + '% — 你真棒！</small>' : '<small>Lần sau mặc cả giỏi hơn nhé!</small>') +
              '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntMcMua">Mua</button><button type="button" class="nt-nut" id="ntMcThoi">Thôi</button></div></div>') +
          '</div>');
        $all('[data-mc]').forEach(function (b) {
          b.addEventListener('click', function () {
            if (khoa) return;
            khoa = true;
            goi('/api/farm/macca/tl', { id: mc.id, i: i, chon: +b.getAttribute('data-mc') }).then(function (r) {
              khoa = false;
              giam = r.giam;
              tieng(r.dung ? 'dung' : 'sai');
              doc(r.zh);
              var kq = '<div class="nt-mc-kq ' + (r.dung ? 'dung' : 'sai') + '"><span>' + (r.dung ? '✔ Em nói:' : '✘ Nên nói:') + ' <b lang="zh">' + esc(r.zh) + '</b> <small>' + esc(r.py) + (r.vn ? ' — ' + esc(r.vn) : '') + '</small></span>' +
                '<span class="nt-mc-ban">🧑‍🌾 <b lang="zh">' + esc(r.tra) + '</b></span></div>';
              i++;
              ve(kq);
            }, function (e) { khoa = false; bao(e.message, 'loi'); veLai(null); });
          });
        });
        var bo = $('#ntMcBo');
        if (bo) bo.addEventListener('click', function () { muaThat(id, sid, el, veLai, ''); });
        var mua = $('#ntMcMua');
        if (mua) mua.addEventListener('click', function () { mua.disabled = true; muaThat(id, sid, el, veLai, mc.id); });
        var thoi = $('#ntMcThoi');
        if (thoi) thoi.addEventListener('click', function () { veLai(null); });
      };
      ve('');
    }, function (e) { bao(e.message, 'loi'); tieng('sai'); if (xong) xong(null); });
  }

  /* ---------------- Bep: nau mon Trung Hoa ---------------- */
  function chuSo(n, k) { var so = ['', '一', '两', '三', '四', '五'][n] || n; return so + ((S.cat.LUONG || {})[k] || '个'); }
  // pinyin ca cum "so + luong tu + ten": 两斤水稻 -> liǎng jīn shuǐdào (一 doc yí truoc 个/份)
  function pyCan(n, k) {
    var l = (S.cat.LUONG || {})[k] || '个', lp = (S.cat.LUONG_PY || {})[l] || '';
    var so = n === 1 ? (l === '个' || l === '份' ? 'yí' : 'yì') : ['', '', 'liǎng', 'sān', 'sì', 'wǔ'][n] || String(n);
    return so + ' ' + lp + ' ' + ((S.cat.SP[k] || {}).py || '');
  }
  // 1 dong nguyen lieu: tranh · chu Han · pinyin · "2 × Lua" · co bao nhieu
  function dongNl(x, can, co, conCan) {
    var sp = S.cat.SP[x], du = co >= conCan;
    return '<li class="nt-nl ' + (du ? 'co' : 'thieu') + '">' + img('sp-' + x) +
      '<span class="nt-nl-chu"><b lang="zh">' + esc(chuSo(can, x) + sp.zh) + '</b><small>' + esc(pyCan(can, x)) + '</small>' +
      '<small class="nt-nl-vn">' + can + ' × ' + esc(sp.vn) + '</small></span>' +
      '<em>' + (du ? '✓' : '✗') + ' có ' + co + '</em></li>';
  }
  function veBep(than) {
    var c = S.cat, s = S.st, M = c.MON || {};
    var html = htmlNhaHang() + '<p class="nt-meo">👩‍🍳 Nấu món Trung Hoa từ nông sản — món ăn bán được nhiều xu hơn. Thiếu nguyên liệu? Mua ở <button type="button" class="nt-link" data-mo-cho>Chợ cộng đồng</button>. Mỗi nguyên liệu có tranh, chữ Hán, pinyin và nghĩa — đọc to chữ Hán để nhớ nhé!</p><div class="nt-luoi-the">';
    Object.keys(M).forEach(function (k) {
      var m = M[k], du = true;
      var ct = Object.keys(m.can).map(function (x) {
        var co = s.kho[x] || 0, ok = co >= m.can[x];
        if (!ok) du = false;
        return dongNl(x, m.can[x], co, m.can[x]);
      }).join('');
      var lan = (s.daNau || {})[k] || 0, khoaMon = m.lv && m.lv > s.lv;
      if (khoaMon) du = false;
      html += '<div class="nt-the nt-mon' + (khoaMon ? ' khoa' : '') + (m.lv ? ' cao' : '') + '"><div class="nt-the-anh">' + img('sp-' + k) + (khoaMon ? '<span class="nt-khoa">Cấp ' + m.lv + '</span>' : lan ? '' : '<span class="nt-khoa nt-mon-moi">Món mới</span>') + '</div>' +
        '<b class="nt-mon-vn">' + esc(m.vn) + '</b><ul class="nt-ct">' + ct + '</ul>' +
        '<p class="nt-the-phu">' + img('ic-xu') + c.SP[k].ban + ' / phần' + (lan ? ' · đã nấu ' + lan : '') + '</p>' +
        '<button type="button" class="nt-mua" data-nau="' + k + '"' + (du ? '' : ' disabled') + '>' + (khoaMon ? 'Lên cấp ' + m.lv : du ? 'Nấu' : 'Thiếu nguyên liệu') + '</button></div>';
    });
    than.innerHTML = html + '</div>';
    $all('[data-mo-cho]', than).forEach(function (b) { b.addEventListener('click', function () { moBang('congdong', 'cho'); }); });
    $all('[data-nau]', than).forEach(function (b) {
      b.addEventListener('click', function () { moNau(b.getAttribute('data-nau')); });
    });
    var nhPy = $('#ntNhPy', than);
    if (nhPy) nhPy.addEventListener('click', function () { NH.py = !NH.py; veBang(); });
    $all('[data-phucvu]', than).forEach(function (b) {
      b.addEventListener('click', function () { moPhucVu(+b.getAttribute('data-phucvu')); });
    });
  }
  // Truoc khi nau: nhin tranh chon dung ten tieng Trung cua mon
  function moNau(k) {
    var M = S.cat.MON, m = M[k];
    var lua = tron([m.zh].concat(tron(Object.keys(M).filter(function (x) { return x !== k; })).slice(0, 2).map(function (x) { return M[x].zh; })));
    moBangNho('<div class="nt-goi"><h3>Món này tiếng Trung gọi là gì?</h3>' +
      '<div class="nt-goi-mon">' + img('sp-' + k, 'nt-mon-to') + '<span><b>' + esc(m.vn) + '</b><small>Chọn đúng tên thì mới nấu được</small></span></div>' +
      '<div class="nt-ch-lua zh">' + lua.map(function (z) { return '<button type="button" data-tenmon="' + esc(z) + '" lang="zh">' + esc(z) + '</button>'; }).join('') + '</div>' +
      '<p class="nt-ch-giai" id="ntNauGiai" aria-live="polite"></p>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut" id="ntNauVe">Về bếp</button></div></div>');
    $('#ntNauVe').addEventListener('click', function () { moBang('kho', 'bep'); });
    $all('[data-tenmon]').forEach(function (b) {
      b.addEventListener('click', function () {
        var z = b.getAttribute('data-tenmon');
        if (z !== m.zh) {
          b.disabled = true; b.classList.add('sai'); tieng('sai');
          $('#ntNauGiai').textContent = 'Chưa đúng — thử chữ khác nhé!';
          return;
        }
        lam({ a: 'nau', m: k, goi: z }, b).then(function (r) {
          b.classList.add('dung');
          $all('[data-tenmon]').forEach(function (x) { x.disabled = true; });
          tieng('len'); doc(m.zh);
          $('#ntNauGiai').innerHTML = '🍽 Nấu xong <b lang="zh">' + esc(m.zh) + '</b> ' + esc(m.py) + ' — ' + esc(m.vn) + (r.them.monMoi ? ' · Món mới +5 kinh nghiệm!' : '');
        }, function () { moBang('kho', 'bep'); });
      });
    });
  }

  /* ---------------- Don dac biet (chi co chu Han) ---------------- */
  function htmlDonDb() {
    var d = S.st.donDb;
    if (!d) return '';
    var du = Object.keys(d.can).every(function (k) { return (S.st.kho[k] || 0) >= d.can[k]; });
    var M = S.cat.MON || {};
    // Don co mon an: hien cong thuc (nguyen lieu x so phan) de em biet can mua / chuan bi gi
    var monDs = Object.keys(d.can).filter(function (k) { return M[k]; });
    var cachNau = monDs.map(function (k) {
      var m = M[k], so = d.can[k], coMon = S.st.kho[k] || 0;
      var nl = Object.keys(m.can).map(function (x) {
        var can = m.can[x] * Math.max(0, so - coMon), co = S.st.kho[x] || 0;
        return dongNl(x, m.can[x], co, can).replace('</em>', can ? ' / cần ' + can + '</em>' : '</em>');
      }).join('');
      return '<div class="nt-dondb-nau"><div class="nt-dondb-mon">' + img('sp-' + k) +
        '<span><b>Cách nấu <span lang="zh">' + esc(m.zh) + '</span></b><small>' + esc(m.py) + ' · ' + esc(m.vn) + ' — mỗi phần cần:</small></span></div>' +
        '<ul>' + nl + '</ul>' +
        (coMon ? '<p class="nt-dondb-co">Trong kho đã có ' + coMon + ' phần ' + esc(m.zh) + '.</p>' : '') + '</div>';
    }).join('');
    return '<div class="nt-dondb' + (d.xong ? ' xong' : '') + '"><div class="nt-dondb-dau"><b>📜 Đơn đặc biệt</b><span>' + img('ic-xu') + '+' + d.xu + ' xu</span></div>' +
      '<p class="nt-dondb-zh" lang="zh">' + esc(d.cau) + '</p>' +
      (d.xong ? '<p class="nt-dondb-vn">✔ Đã giao — ' + esc(d.vn) + '</p>'
        : '<p class="nt-dondb-py" id="ntDbPy" hidden>' + esc(d.py) + '</p>' +
          '<p class="nt-dondb-goi">' + (monDs.length
            ? 'Đơn này cần <b>món ăn</b> — mua nguyên liệu (của em hoặc ở chợ các bạn) rồi vào <b>Bếp</b> nấu, đủ phần thì giao.'
            : 'Đọc đơn bằng chữ Hán, tìm mua hàng ở chợ của các bạn rồi giao. Đơn này cần hàng em chưa tự làm ra được!') + '</p>' +
          cachNau +
          '<div class="nt-hang-nut">' + (monDs.length ? '<button type="button" class="nt-nut" data-vao-bep>👩‍🍳 Vào bếp nấu</button>' : '') +
          '<button type="button" class="nt-nut" data-dang-can>📣 Đăng cần mua</button></div>' +
          '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-dondb' + (du ? '' : ' disabled') + '>' + (du ? 'Giao hàng' : 'Chưa đủ hàng') + '</button>' +
          '<button type="button" class="nt-nut" data-mo-cho>Tìm ở chợ cộng đồng</button><button type="button" class="nt-nut" data-dbpy>Xem pinyin</button></div>') + '</div>';
  }
  function ganDonDb(than) {
    $all('[data-mo-cho]', than).forEach(function (b) { b.addEventListener('click', function () { moBang('congdong', 'cho'); }); });
    $all('[data-vao-bep]', than).forEach(function (b) { b.addEventListener('click', function () { moBang('kho', 'bep'); }); });
    $all('[data-dang-can]', than).forEach(function (b) { b.addEventListener('click', function () { moBang('congdong', 'can'); }); });
    $all('[data-dbpy]', than).forEach(function (b) { b.addEventListener('click', function () { var p = $('#ntDbPy', than); if (p) p.hidden = !p.hidden; doc(S.st.donDb.cau); }); });
    $all('[data-dondb]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        lam({ a: 'dondb' }, b).then(function (r) { tieng('xu'); bao('Giao đơn đặc biệt: +' + r.them.xu + ' xu! ' + S.st.donDb.vn); veBang(); }, function () {});
      });
    });
  }

  // --- Sap cua em (trong Kho) ---
  var baySap = { k: null, n: 1, gia: 0 };
  function chonBay(k) {
    baySap.k = k;
    baySap.n = Math.min(S.st.kho[k] || 1, k && S.cat.CAY[k] ? 4 : 2);
    baySap.gia = khoangGia(k, baySap.n, hsCua(k)).goc;
  }
  function veSapEm(than) {
    var s = S.st, c = S.cat;
    var html = '<p class="nt-meo">Bày nông sản lên sạp để <b>bạn cùng lớp</b> và mọi bạn trong <b>Cộng đồng</b> mua bằng xu (mục <b>Chợ lớp</b>, <b>Chợ cộng đồng</b> hoặc khi đến chơi). Mỗi lần bán được +2 kinh nghiệm.</p><div class="nt-sap-ds">';
    s.sap.forEach(function (o) {
      html += theSap(o, '<span class="nt-gia xu">' + img('ic-xu') + o.gia + '</span>' + (o.giaDat && o.giaDat > o.gia ? '<small class="nt-giam">tự giảm từ ' + o.giaDat + '</small>' : '') + '<button type="button" class="nt-mua" data-gosap="' + o.id + '">Lấy lại</button>');
    });
    for (var i = s.sap.length; i < s.soOSap; i++) html += '<div class="nt-sap-trong">Ô trống</div>';
    html += '</div>';
    var ks = Object.keys(s.kho).filter(function (k) { return s.kho[k] > 0; });
    if (s.sap.length >= s.soOSap) html += '<p class="nt-meo">Sạp đã đầy. Đợi bạn mua, hoặc “Lấy lại” một món để bày món khác.</p>';
    else if (!ks.length) html += '<p class="nt-trong">Kho trống — thu hoạch rồi bày lên sạp nhé.</p>';
    else {
      if (!baySap.k || !(s.kho[baySap.k] > 0)) chonBay(ks[0]);
      baySap.n = Math.max(1, Math.min(baySap.n, s.kho[baySap.k], c.SAP_SL_TOI_DA));
      var kg = khoangGia(baySap.k, baySap.n, hsCua(baySap.k));
      baySap.gia = Math.max(kg.min, Math.min(kg.max, baySap.gia || kg.goc));
      html += '<div class="nt-bay-sap"><h3>Bày thêm lên sạp</h3><div class="nt-bay-hang">' + ks.map(function (k) {
        return '<button type="button" data-bay="' + k + '"' + (k === baySap.k ? ' class="bat"' : '') + '>' + img('sp-' + k) + esc(tenSp(k).vn) + ' ×' + s.kho[k] + '</button>';
      }).join('') + '</div>' +
        '<div class="nt-buoc"><span>Số lượng</span><button type="button" data-sl="-1" aria-label="Bớt">−</button><output>' + baySap.n + '</output><button type="button" data-sl="1" aria-label="Thêm">+</button></div>' +
        '<div class="nt-buoc"><span>Giá (xu)</span><button type="button" data-gia="-1" aria-label="Giảm giá">−</button><output>' + baySap.gia + '</output><button type="button" data-gia="1" aria-label="Tăng giá">+</button>' +
        '<small>cửa hàng mua ' + kg.goc + ' xu · được đặt ' + kg.min + '–' + kg.max + '</small></div>' +
        '<button type="button" class="nt-nut nt-nut-xanh" data-baysap>Bày lên sạp</button></div>';
    }
    than.innerHTML = html;
    $all('[data-gosap]', than).forEach(function (b) {
      b.addEventListener('click', function () { lam({ a: 'gosap', id: +b.getAttribute('data-gosap') }, b).then(function () { veBang(); }, function () { veBang(); }); });
    });
    $all('[data-bay]', than).forEach(function (b) {
      b.addEventListener('click', function () { chonBay(b.getAttribute('data-bay')); doc(tenSp(baySap.k).zh); veBang(); });
    });
    $all('[data-sl]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        baySap.n += +b.getAttribute('data-sl');
        baySap.gia = 0; // doi so luong: ve lai gia goc
        veBang();
      });
    });
    $all('[data-gia]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var kg2 = khoangGia(baySap.k, baySap.n, hsCua(baySap.k));
        baySap.gia = Math.max(kg2.min, Math.min(kg2.max, baySap.gia + kg2.buoc * +b.getAttribute('data-gia')));
        veBang();
      });
    });
    var nb = $('[data-baysap]', than);
    if (nb) nb.addEventListener('click', function () {
      var m = tenSp(baySap.k), n = baySap.n;
      lam({ a: 'sap', k: baySap.k, n: n, gia: baySap.gia }, nb).then(function () {
        tieng('mua');
        bao('Đã bày ' + n + ' ' + m.vn + ' lên sạp · ' + m.zh + ' ' + m.py);
        baySap.k = null;
        veBang();
      }, function () {});
    });
  }

  // --- Bang "Can mua": em dang nhu cau (我想买…), cac ban co hang thi ban cho em ---
  var CM = { k: '', n: 1, gia: 0, dich: {} };
  function cauCm(k, n) {
    var l = (S.cat.LUONG || {})[k] || '个', sp = S.cat.SP[k];
    return { zh: '我想买' + ['', '一', '两', '三', '四', '五'][n] + l + sp.zh + '。', py: 'Wǒ xiǎng mǎi ' + pyCan(n, k) + '.' };
  }
  function veCanMua(than) {
    var c = S.cat, s = S.st;
    var hang = Object.keys(c.SP).filter(function (k) { return k !== 'len'; });
    if (!CM.k || !c.SP[CM.k]) CM.k = '';
    var cua = s.can || [];
    var html = '<div class="nt-cm-dang"><h3>📣 Em cần mua gì?</h3>' +
      '<p class="nt-meo">Chọn món, số lượng và giá — máy ghép thành câu tiếng Trung cho các bạn đọc. Xu được giữ lại khi đăng, có bạn bán thì chuyển cho bạn ấy; quá 2 ngày không ai bán thì trả lại em.</p>' +
      '<div class="nt-cm-hang">' + hang.map(function (k) {
        var m = c.SP[k];
        return '<button type="button" class="nt-cm-mon' + (CM.k === k ? ' bat' : '') + '" data-cmk="' + k + '" title="' + esc(m.vn) + '">' + img('sp-' + k) + '<b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.py) + '</small></button>';
      }).join('') + '</div>';
    if (CM.k) {
      var kg = khoangGia(CM.k, CM.n);
      if (!CM.gia || CM.gia < kg.min || CM.gia > kg.max) CM.gia = kg.goc;
      var cau = cauCm(CM.k, CM.n);
      html += '<div class="nt-buoc"><span>Số lượng</span>' + [1, 2, 3, 4, 5].map(function (n) {
        return '<button type="button" class="nt-cm-so' + (CM.n === n ? ' bat' : '') + '" data-cmn="' + n + '"><b lang="zh">' + ['', '一', '两', '三', '四', '五'][n] + '</b>' + n + '</button>';
      }).join('') + '</div>' +
        '<div class="nt-buoc"><span>Giá trả (xu)</span><button type="button" data-cmg="-1" aria-label="Giảm">−</button><output>' + CM.gia + '</output><button type="button" data-cmg="1" aria-label="Tăng">+</button>' +
        '<small>giá cửa hàng ' + kg.goc + ' · được trả ' + kg.min + '–' + kg.max + '</small></div>' +
        '<div class="nt-cm-cau"><b lang="zh">' + esc(cau.zh) + '</b><small>' + esc(cau.py) + '</small><button type="button" class="nt-nut" data-cmdoc>🔊</button></div>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-cmdang' + (s.xu < CM.gia || cua.length >= (c.CAN_TOI_DA || 2) ? ' disabled' : '') + '>Đăng tin (giữ ' + CM.gia + ' xu)</button></div>' +
        (cua.length >= (c.CAN_TOI_DA || 2) ? '<p class="nt-meo">Em đã có ' + cua.length + ' tin — huỷ bớt hoặc đợi bạn bán nhé.</p>' : s.xu < CM.gia ? '<p class="nt-meo">Chưa đủ xu — học để mở rương, làm Thử thách chữ Hán để có thêm xu.</p>' : '');
    }
    html += '</div>';
    if (cua.length) {
      html += '<h3 class="nt-cm-h">Tin của em</h3><div class="nt-cm-ds">' + cua.map(function (x) {
        return '<div class="nt-cm-tin la">' + img('sp-' + x.k) + '<span><b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + '</small></span>' +
          '<em>' + img('ic-xu') + x.gia + '</em><button type="button" class="nt-mua" data-cmhuy="' + x.id + '">Huỷ</button></div>';
      }).join('') + '</div>';
    }
    html += '<h3 class="nt-cm-h">Các bạn đang cần mua</h3><div class="nt-cm-ds" id="ntCmDs"><p class="nt-trong">Đang tải…</p></div>';
    than.innerHTML = html;
    $all('img', than).forEach(ganLoiAnh);
    $all('[data-cmk]', than).forEach(function (b) { b.addEventListener('click', function () { CM.k = b.getAttribute('data-cmk'); CM.gia = 0; doc(c.SP[CM.k].zh); veBang(); }); });
    $all('[data-cmn]', than).forEach(function (b) { b.addEventListener('click', function () { CM.n = +b.getAttribute('data-cmn'); CM.gia = 0; veBang(); }); });
    $all('[data-cmg]', than).forEach(function (b) {
      b.addEventListener('click', function () { var kg2 = khoangGia(CM.k, CM.n); CM.gia = Math.max(kg2.min, Math.min(kg2.max, CM.gia + kg2.buoc * +b.getAttribute('data-cmg'))); veBang(); });
    });
    var dd = $('[data-cmdoc]', than); if (dd) dd.addEventListener('click', function () { doc(cauCm(CM.k, CM.n).zh); });
    var dang = $('[data-cmdang]', than);
    if (dang) dang.addEventListener('click', function () {
      dang.disabled = true;
      goi('/api/farm/nhucau', { k: CM.k, n: CM.n, gia: CM.gia }).then(function (r) {
        nhanTrangThai(r.st); tieng('mua'); doc(cauCm(CM.k, CM.n).zh);
        bao('Đã đăng: ' + cauCm(CM.k, CM.n).zh);
        CM.k = ''; veBang();
      }, function (e) { dang.disabled = false; bao(e.message, 'loi'); });
    });
    $all('[data-cmhuy]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        goi('/api/farm/nhucau/huy', { nid: +b.getAttribute('data-cmhuy') }).then(function (r) { nhanTrangThai(r.st); bao('Đã huỷ tin, trả lại ' + r.them.xu + ' xu.'); veBang(); }, function (e) { bao(e.message, 'loi'); });
      });
    });
    goi('/api/farm/nhucau').then(function (r) {
      var hop = $('#ntCmDs', than);
      if (!hop || !bangDang || bangDang.tab !== 'can') return;
      hop.innerHTML = r.ds.length ? r.ds.map(function (x) {
        var co = s.kho[x.k] || 0, du = co >= x.n;
        return '<div class="nt-cm-tin">' + img('sp-' + x.k) +
          '<span><b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + '</small>' +
          '<small class="nt-cm-ai">' + esc(x.ten) + (x.lop ? ' · ' + esc(x.lop) : '') + ' · <button type="button" class="nt-link" data-cmdich="' + x.nid + '">Dịch</button>' +
          '<i class="nt-cm-vn" data-cmvn="' + x.nid + '" hidden> — ' + esc(x.vn) + '</i></small></span>' +
          '<em>' + img('ic-xu') + x.gia + '</em>' +
          '<button type="button" class="nt-mua" data-cmban="' + esc(x.id) + '" data-nid="' + x.nid + '"' + (du ? '' : ' disabled title="Em có ' + co + '"') + '>' + (du ? 'Bán cho bạn' : 'Có ' + co + '/' + x.n) + '</button></div>';
      }).join('') : '<p class="nt-trong">Chưa ai đăng cần mua. Em đăng tin đầu tiên đi!</p>';
      $all('img', hop).forEach(ganLoiAnh);
      $all('[data-cmdich]', hop).forEach(function (b) { b.addEventListener('click', function () { var v = $('[data-cmvn="' + b.getAttribute('data-cmdich') + '"]', hop); if (v) v.hidden = !v.hidden; }); });
      $all('[data-cmban]', hop).forEach(function (b) {
        b.addEventListener('click', function () {
          b.disabled = true;
          goi('/api/farm/nhucau/ban/' + encodeURIComponent(b.getAttribute('data-cmban')), { nid: +b.getAttribute('data-nid') }).then(function (r2) {
            nhanTrangThai(r2.st); tieng('xu'); bao('Đã bán cho bạn: +' + r2.them.xu + ' xu! 谢谢！'); veBang();
          }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
        });
      });
    }, function (e) { var hop = $('#ntCmDs', than); if (hop) hop.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
  }

  // --- Cong dong: moi nong trai tren web (khong chi ban cung lop) ---
  var CD = { q: '', tu: 0, ds: [], k: '' , hen: null };
  function veCongDong(than) {
    var tab = bangDang.tab || 'nt';
    bangDang.tab = tab;
    $('#ntBangTit').textContent = 'Cộng đồng nông trại';
    datTab([['nt', 'Nông trại mọi người'], ['tl', '🧑‍💼 Thương lái'], ['canlop', 'Lớp cần gì'], ['cho', 'Chợ cộng đồng'], ['can', 'Cần mua']], tab);
    if (tab === 'tl') { veThuongLai(than); return; }
    if (tab === 'canlop') { veCanLop(than); return; }
    if (tab === 'cho') { veChoCongDong(than); return; }
    if (tab === 'can') { veCanMua(than); return; }
    than.innerHTML = '<div class="nt-cd-tim"><input type="search" id="ntCdQ" placeholder="Tìm tên bạn hoặc tên lớp…" aria-label="Tìm nông trại" value="' + esc(CD.q) + '" autocomplete="off"></div>' +
      '<p class="nt-meo" id="ntCdMeo">Đang tải…</p><ol class="nt-ban-ds nt-cd-ds" id="ntCdDs"></ol>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut" id="ntCdThem" hidden>Xem thêm</button></div>';
    var o = $('#ntCdQ', than);
    o.addEventListener('input', function () {
      clearTimeout(CD.hen);
      CD.hen = setTimeout(function () { CD.q = o.value.trim(); taiCd(than, false); }, 350);
    });
    $('#ntCdThem', than).addEventListener('click', function () { taiCd(than, true); });
    taiCd(than, false);
  }
  // Bang "Lop can gi": tong hang ca lop dang can (don hang, don dac biet, tin Can mua) so voi hang dang co (kho + sap),
  // gia hom nay theo cung - cau, va dac san cua tung ban — biet nen trong / nuoi gi va mua cua ai
  function veCanLop(than) {
    than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
    goi('/api/farm/canlop').then(function (r) {
      if (!bangDang || bangDang.loai !== 'congdong' || bangDang.tab !== 'canlop') return;
      var c = S.cat, html = '';
      if (r.dacSanEm) {
        var m = c.SP[r.dacSanEm];
        html += '<div class="nt-ds-the">' + img('sp-' + r.dacSanEm) + '<div><p class="nt-cn-nho">Đặc sản tuần này của em <span lang="zh">特产</span> tèchǎn</p>' +
          '<h3><span lang="zh">' + esc(m.zh) + '</span> ' + esc(m.py) + ' · ' + esc(m.vn) + '</h3>' +
          '<p class="nt-cn-nho">Thu hoạch / nhặt được <b>thêm 1</b> mỗi lần. Các bạn khác sẽ có đơn hàng cần món này — bày sạp hoặc bán theo tin Cần mua để giúp bạn và kiếm xu!</p></div></div>';
      } else html += '<p class="nt-meo">Em chưa có đặc sản — lên cấp hoặc nuôi thêm vật nuôi để làm được nhiều loại hàng hơn.</p>';
      html += '<p class="nt-meo">' + (r.lop ? 'Cả lớp' : 'Cộng đồng') + ' đang cần những hàng dưới đây. <b>Giá hôm nay</b> theo cung – cầu: hàng nhiều bạn cần mà ít bạn có thì giá <b class="nt-hs-len-chu">↑ lên</b>, hàng ai cũng có thì giá <b class="nt-hs-xuong-chu">↓ xuống</b>. Đặc sản đổi mỗi thứ Hai.</p>';
      html += '<ol class="nt-canlop">' + r.ds.map(function (x) {
        var m = c.SP[x.k];
        return '<li class="' + (x.can ? 'co-can' : '') + '">' + img('sp-' + x.k) +
          '<div class="nt-canlop-t"><b><span lang="zh">' + esc(m.zh) + '</span> ' + esc(m.py) + ' · ' + esc(m.vn) + '</b>' +
          '<small>' + (x.can ? '🔥 Cần <b>' + x.can + '</b> (' + x.soNguoi + ' bạn)' : 'Chưa ai cần') + ' · đang có ' + x.co +
          (x.dacSan.length ? ' · ⭐ đặc sản của ' + x.dacSan.slice(0, 3).map(function (b) { return esc(b.la ? 'em' : b.ten); }).join(', ') + (x.dacSan.length > 3 ? '…' : '') : '') + '</small></div>' +
          '<span class="nt-canlop-gia">' + img('ic-xu') + Math.max(1, Math.round(m.ban * x.heSo)) + '<small>' + (x.heSo !== 1 ? '×' + String(x.heSo).replace('.', ',') : 'giá gốc') + '</small></span>' +
          (x.can && !x.emLam ? '<button type="button" class="nt-mua" data-canlop-mua="' + x.k + '">Mua</button>' : '') + '</li>';
      }).join('') + '</ol>';
      than.innerHTML = html;
      $all('img', than).forEach(ganLoiAnh);
      $all('[data-canlop-mua]', than).forEach(function (b) { b.addEventListener('click', function () { CD.k = b.getAttribute('data-canlop-mua'); bangDang.tab = 'cho'; veBang(); }); });
    }, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
  }
  function taiCd(than, them) {
    var tu = them ? CD.ds.length : 0;
    goi('/api/farm/congdong?q=' + encodeURIComponent(CD.q) + '&tu=' + tu).then(function (r) {
      if (!bangDang || bangDang.loai !== 'congdong' || bangDang.tab !== 'nt') return;
      CD.ds = them ? CD.ds.concat(r.ds) : r.ds;
      var meo = $('#ntCdMeo', than), ds = $('#ntCdDs', than), nut = $('#ntCdThem', than);
      if (!meo) return;
      meo.innerHTML = 'Có <b>' + r.tong + '</b> nông trại trên Hi Hán' + (CD.q ? ' · tìm thấy <b>' + r.soLoc + '</b>' : '') +
        '. Sang chơi để thả tim, giúp tưới cây, mua hàng ở sạp và chào nhau bằng tiếng Trung!';
      ds.innerHTML = CD.ds.length ? CD.ds.map(function (b) {
        return '<li class="' + (b.la ? 'la' : '') + '"><span class="nt-ban-hang">' + b.hang + '</span>' +
          '<span class="nt-cd-nv" aria-hidden="true">' + NV.svg(b.av || NV.macDinh(b.id)) + '</span>' +
          '<span class="nt-ban-ten"><b>' + huyHv(b.hv, true) + esc(b.ten) + (b.la ? ' (em)' : '') + '</b><small>' + (b.lop ? esc(b.lop) + ' · ' : '') +
          'Cấp ' + b.lv + ' · đẹp ' + b.dep + ' · ❤ ' + b.tim + (b.tuan ? ' · ⭐ ' + b.tuan + ' sao tuần' : '') + (b.sap ? ' · 🧺 ' + b.sap + ' món đang bán' : '') + '</small></span>' +
          (b.la ? '' : '<button type="button" class="nt-mua" data-tham="' + esc(b.id) + '">Thăm</button>') + '</li>';
      }).join('') : '<li class="nt-trong">Không tìm thấy nông trại nào.</li>';
      nut.hidden = CD.ds.length >= r.soLoc;
      $all('[data-tham]', ds).forEach(function (bt) {
        bt.addEventListener('click', function () { thamBan(bt.getAttribute('data-tham')); });
      });
    }, function (err) { var m = $('#ntCdMeo', than); if (m) m.textContent = err.message; });
  }
  function veChoCongDong(than) {
    than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
    goi('/api/farm/chocongdong?k=' + encodeURIComponent(CD.k)).then(function (r) {
      if (!bangDang || bangDang.loai !== 'congdong' || bangDang.tab !== 'cho') return;
      var loai = Object.keys(r.loai || {});
      if (CD.k && loai.indexOf(CD.k) < 0) CD.k = '';
      var html = htmlThuongMua() + '<p class="nt-meo">Hàng các bạn khắp Hi Hán đang bày bán, rẻ nhất xếp trước. Em đang có ' + img('ic-xu') + '<b>' + S.st.xu + '</b> xu. Muốn bán? Vào <b>Kho → Sạp của em</b>. Không thấy món em cần? Đăng ở thẻ <button type="button" class="nt-link" data-tab="can">Cần mua</button>.</p>';
      if (loai.length) {
        html += '<div class="nt-cd-loc"><button type="button" data-cdk=""' + (CD.k ? '' : ' class="bat"') + '>Tất cả</button>' + loai.map(function (k) {
          return '<button type="button" data-cdk="' + k + '"' + (CD.k === k ? ' class="bat"' : '') + '>' + img('sp-' + k) + esc(tenSp(k).vn) + ' <small>' + r.loai[k] + '</small></button>';
        }).join('') + '</div>';
      }
      if (!r.ds.length) html += '<p class="nt-trong">Chợ cộng đồng chưa có hàng. Em bày hàng đầu tiên đi!</p>';
      else html += '<div class="nt-sap-ds">' + r.ds.map(function (o) {
        return theSap({ id: o.sid, k: o.k, n: o.n, gia: o.gia }, nutMua({ id: o.sid, gia: o.gia }, o.id), o.ten + (o.lop ? ' · ' + o.lop : ''));
      }).join('') + '</div>';
      than.innerHTML = html;
      $all('img', than).forEach(ganLoiAnh);
      $all('[data-cdk]', than).forEach(function (b) {
        b.addEventListener('click', function () { CD.k = b.getAttribute('data-cdk'); veBang(); });
      });
      $all('[data-muasap]', than).forEach(function (b) {
        b.addEventListener('click', function () { b.disabled = true; muaSap(b.getAttribute('data-ban-id'), +b.getAttribute('data-muasap'), b, function () { veBang(); }); });
      });
    }, function (err) { than.innerHTML = '<p class="nt-trong">' + esc(err.message) + '</p>'; });
  }

  // --- Cho lop ---
  function veCho(than) {
    than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
    goi('/api/farm/cho').then(function (r) {
      if (!bangDang || bangDang.loai !== 'ban' || bangDang.tab !== 'cho') return;
      if (!r.lop) { than.innerHTML = '<p class="nt-trong">Em chưa vào lớp nào. Nhập mã lớp cô giáo cho ở trang học để mua bán với các bạn.</p>'; return; }
      var html = htmlThuongMua() + '<p class="nt-meo">Chợ lớp <b>' + esc(r.lop) + '</b>: nông sản các bạn bày bán. Mua về để giao <b>Đơn hàng</b> nhanh hơn. Em đang có ' + img('ic-xu') + '<b>' + S.st.xu + '</b> xu.</p>';
      if (!r.ds.length) html += '<p class="nt-trong">Chợ chưa có gì. Em bày hàng trước đi — vào <b>Kho → Sạp của em</b>!</p>';
      else html += '<div class="nt-sap-ds">' + r.ds.map(function (o) { return theSap({ id: o.sid, k: o.k, n: o.n, gia: o.gia }, nutMua({ id: o.sid, gia: o.gia }, o.id), o.ten); }).join('') + '</div>';
      than.innerHTML = html;
      $all('img', than).forEach(ganLoiAnh);
      $all('[data-muasap]', than).forEach(function (b) {
        b.addEventListener('click', function () { b.disabled = true; muaSap(b.getAttribute('data-ban-id'), +b.getAttribute('data-muasap'), b, function () { veBang(); }); });
      });
    }, function (err) { than.innerHTML = '<p class="nt-trong">' + esc(err.message) + '</p>'; });
  }

  // --- Nhat ky ---
  function luc(t) {
    var p = Math.max(0, Math.floor((bayGio() - t) / 60000));
    if (p < 1) return 'vừa xong';
    if (p < 60) return p + ' phút trước';
    if (p < 1440) return Math.floor(p / 60) + ' giờ trước';
    return Math.floor(p / 1440) + ' ngày trước';
  }
  function dongNk(e, moi) {
    var c = S.cat, ai = '<b>' + esc(e.ten) + '</b>', chu = '', hinh = 'ic-tim';
    if (e.l === 'tim') chu = ai + ' thả tim ❤ cho nông trại của em.';
    else if (e.l === 'tuoi') { hinh = 'ic-tuoi'; var cay = c.CAY[e.c] || {}; chu = ai + ' tưới giúp ô <b>' + esc(cay.vn || '') + '</b> <span lang="zh">' + esc(cay.zh || '') + '</span>.'; }
    else if (e.l === 'choan') { hinh = e.k; var con = c.CON[e.k] || {}; chu = ai + ' cho <b>' + esc((con.vn || '').toLowerCase()) + '</b> <span lang="zh">' + esc(con.zh || '') + '</span> của em ăn.'; }
    else if (e.l === 'canmua') { hinh = 'sp-' + e.k; chu = ai + ' đã bán cho em ' + e.n + ' <b>' + esc(tenSp(e.k).vn) + '</b> <span lang="zh">' + esc(tenSp(e.k).zh) + '</span> theo tin cần mua của em.'; }
    else if (e.l === 'thuonglai') { hinh = 'sp-' + e.k; chu = 'Thương lái <b lang="zh">' + esc(e.tl || '商人') + '</b> mua ' + e.n + ' <b>' + esc(tenSp(e.k).vn) + '</b> ở sạp của em · +' + e.xu + ' xu.'; }
    else if (e.l === 'mua') { hinh = 'sp-' + e.k; chu = ai + ' mua ' + e.n + ' <b>' + esc(tenSp(e.k).vn) + '</b> ở sạp của em · +' + e.xu + ' xu.'; }
    else if (e.l === 'chao') {
      hinh = 'ic-chao';
      var lc = c.LOI_CHAO[e.c] || { zh: '', py: '', vn: '' };
      chu = ai + ' gửi lời chào:<br><button type="button" class="nt-nk-chao" data-doc="' + esc(lc.zh) + '"><b lang="zh">' + esc(lc.zh) + '</b> ' + esc(lc.py) + ' — ' + esc(lc.vn) + ' 🔊</button>';
    }
    else if (e.l === 'tin') {
      hinh = 'ic-chao';
      chu = ai + (e.kt === 'hoi' ? ' hỏi em:' : ' nhắn cho em:') + '<br>' + htmlCau(chuTin(e), 'nho');
      if (e.kt === 'hoi' && c.TIN_HOI[e.q]) {
        var h = c.TIN_HOI[e.q];
        chu += e.ta != null && h.a[e.ta]
          ? '<span class="nt-nk-da">✓ Em đã trả lời: <b lang="zh">' + esc(h.a[e.ta].zh) + '</b> ' + esc(h.a[e.ta].vn) + '</span>'
          : '<span class="nt-nk-tl">Chọn câu trả lời (+1 xu): ' + h.a.map(function (a, i) {
            return '<button type="button" class="nt-nk-chon" data-traloi="' + i + '" data-hid="' + esc(e.hid) + '" data-ai="' + esc(e.ai) + '" title="' + esc(a.py + ' — ' + a.vn) + '"><b lang="zh">' + esc(a.zh) + '</b><small>' + esc(a.vn) + '</small></button>';
          }).join('') + '</span>';
      }
    } else if (e.l === 'dap') {
      hinh = 'ic-chao';
      var h2 = c.TIN_HOI[e.q] || { zh: '', py: '', vn: '', a: [] };
      chu = ai + ' trả lời câu hỏi của em:<br>' + htmlCau(h2, 'nho') + htmlCau(h2.a[e.a] || { zh: '', py: '', vn: '' }, 'nho dap');
    } else if (e.l === 'hbmoi' || e.l === 'hbok' || e.l === 'hbnhac') {
      hinh = 'ic-chao';
      chu = e.l === 'hbmoi' ? ai + ' mời em làm <b>bạn học cặp đôi</b> <span lang="zh">学伴</span>. <button type="button" class="nt-link" data-nk-chung="hb">Xem lời mời</button>'
        : e.l === 'hbok' ? ai + ' đã đồng ý làm bạn học của em! Cùng đạt ' + ((CN.d && CN.d.hb.muc) || 20) + ' sao mỗi ngày để mở rương đôi nhé.'
        : ai + ' nhắc em: <b lang="zh">加油！一起学习吧！</b> Jiāyóu! Yìqǐ xuéxí ba! — Cố lên, cùng học nào! <button type="button" class="nt-link" data-nk-hoc>Đi học</button>';
    } else if (e.l === 'taigiup') {
      hinh = 'ic-tuoi';
      var tg = (c.TAI || {})[e.k] || { zh: '', vn: '' };
      chu = ai + ' sang giúp em chống <b lang="zh">' + esc(tg.zh) + '</b> ' + esc(tg.vn.toLowerCase()) + (e.xong ? ' — thiên tai đã qua! 雨过天晴！' : '.');
    } else if (e.l === 'td') {
      hinh = 'ic-xp';
      chu = ai + ' thách đấu chữ Hán với em! ⚔ <button type="button" class="nt-link" data-nk-chung="td">Vào thách đấu</button>';
    } else if (e.l === 'tdkq') {
      hinh = 'ic-xp';
      chu = 'Thách đấu chữ Hán với ' + ai + ': ' + (e.kq === 'thang' ? '<b>em thắng</b> 🏆' : e.kq === 'thua' ? 'bạn thắng — lần sau cố lên!' : '<b>hoà</b>') + (e.xu ? ' · +' + e.xu + ' xu' : '') + '.';
    } else if (e.l === 'qua') {
      hinh = 'sp-' + e.k;
      var sp = tenSp(e.k);
      chu = ai + ' tặng em 1 <b>' + esc(sp.vn) + '</b> <span lang="zh">' + esc(sp.zh) + '</span> kèm thiệp <b lang="zh">送给你！</b> (đã cất vào kho).';
    }
    return '<li class="' + (moi ? 'moi' : '') + '">' + img(hinh) + '<p>' + chu + '<small>' + luc(e.t) + '</small></p></li>';
  }
  function veThu(than) {
    var s = S.st, ds = s.nk || [], soMoi = s.nkMoi || 0;
    than.innerHTML = ds.length
      ? '<p class="nt-meo">Các bạn đã ghé nông trại của em. Đến chơi lại, giúp bạn và gửi lời chào nhé!</p><ul class="nt-nk">' + ds.map(function (e, i) { return dongNk(e, i < soMoi); }).join('') + '</ul>'
      : '<p class="nt-trong">Chưa có bạn nào ghé chơi. Em hãy sang thăm, thả tim và gửi lời chào các bạn trước nhé!</p>';
    $all('[data-traloi]', than).forEach(function (b) {
      b.addEventListener('click', function () { traLoiBan(b.getAttribute('data-ai'), b.getAttribute('data-hid'), +b.getAttribute('data-traloi'), b); });
    });
    if (soMoi) goi('/api/farm/act', { a: 'xemnk' }).then(function () { S.st.nkMoi = 0; veHud(); }, function () {});
  }

  // --- Khi dang tham ban ---
  function veThamGoi() {
    var t = S.tham;
    if (!t) return;
    requestAnimationFrame(datChoTham);
    $('#ntThamTim').disabled = !!t.daTim;
    $('#ntThamTim').textContent = t.daTim ? '❤ Đã thả tim' : '❤ Thả tim';
    $('#ntThamChao').textContent = t.conTin > 0 ? '💬 Nói chuyện' : '💬 Nói chuyện ✓';
    $('#ntThamSap').textContent = '🛒 Sạp của bạn (' + t.sap.length + ')';
    var th = $('#ntThamThich'), tdb = $('#ntThamTdh');
    th.hidden = !moTn('bc');
    th.disabled = !!t.daThich;
    th.textContent = t.daThich ? '👍 Đã thích' : '👍 Thích nông trại';
    tdb.hidden = !moTn('tdh') || !t.lop || !S.lopEm || S.lopEm !== t.lop.id || !!(TD.tdh && TD.tdh.dang);
    veCotTrai();
    var tn = $('#ntThamTai');
    tn.hidden = !t.tai;
    if (t.tai) tn.textContent = t.daGiupTai ? '✓ Đã giúp chống ' + t.tai.zh : '🆘 Giúp chống ' + t.tai.zh + ' ' + t.tai.vn.toLowerCase();
    $('#ntThamGoi').textContent = t.conGiup > 0
      ? 'Chạm cây có giọt nước 💧 để tưới giúp, vật nuôi đói để cho ăn giúp · còn ' + t.conGiup + ' lượt giúp hôm nay'
      : 'Hôm nay em đã giúp đủ lượt rồi — mai giúp bạn tiếp nhé!';
    nutThuHet(); // an nut thu hoach cua em ngay khi sang nha ban
  }
  // true = da xu ly (cay / vat nuoi can giup)
  function giupBan(o, el) {
    var t = trangThai(o), c = S.cat, ten = S.tham.ten;
    var laCay = o.k === 'o' && t.loai === 'lon' && !o.t, laCon = !!c.CON[o.k] && t.loai === 'doi';
    if (!laCay && !laCon) return false;
    if (S.tham.conGiup <= 0) { bao('Hôm nay em đã giúp đủ lượt rồi — mai giúp tiếp nhé!', 'loi'); return true; }
    var m = laCay ? c.CAY[o.c] : c.CON[o.k];
    moHoi(laCay
      ? { so: 1, anh: 'ic-tuoi', tit: 'Tưới giúp ' + ten, phu: m.zh + ' ' + m.py + ' (' + m.vn.toLowerCase() + ') khát nước! Trả lời đúng 1 câu để tưới giúp bạn.' }
      : { so: 3, anh: o.k + '-doi', tit: 'Cho ăn giúp ' + ten, phu: m.zh + ' ' + m.py + ' của bạn đói rồi! Trả lời đúng 3 câu để cho ăn giúp.' },
    function () {
      var id = S.tham && S.tham.id;
      if (!id) return;
      goi('/api/farm/giup/' + encodeURIComponent(id), { oid: o.id }).then(function (r) {
        if (!S.tham || S.tham.id !== id) return;
        S.tham.o = S.tham.o.map(function (x) { return x.id === r.o.id ? Object.assign({}, x, r.o) : x; });
        S.tham.conGiup = r.conGiup;
        nhanTrangThai(r.st);
        veBanDo();
        veThamGoi();
        tieng('dung');
        hienThem(r.them, document.querySelector('.nt-vat[data-id="' + r.o.id + '"]'));
        bao(laCay ? 'Em đã tưới giúp ' + ten + '! Cây sẽ lớn nhanh hơn.' : 'Em đã cho ' + m.vn.toLowerCase() + ' của ' + ten + ' ăn!');
      }, function (err) { bao(err.message, 'loi'); tieng('sai'); });
    });
    return true;
  }
  function veSapBan(than) {
    var t = S.tham;
    if (!t) { dongBang(); return; }
    $('#ntBangTit').textContent = 'Sạp hàng của ' + t.ten;
    datTab([], '');
    than.innerHTML = t.sap.length
      ? '<p class="nt-meo">Em đang có ' + img('ic-xu') + '<b>' + S.st.xu + '</b> xu.</p><div class="nt-sap-ds">' + t.sap.map(function (o) { return theSap(o, nutMua(o, t.id)); }).join('') + '</div>'
      : '<p class="nt-trong">Sạp của ' + esc(t.ten) + ' đang trống. Gửi lời chào rủ bạn bày hàng nhé!</p>';
    $all('[data-muasap]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        muaSap(t.id, +b.getAttribute('data-muasap'), b, function (r) {
          if (r && S.tham && S.tham.id === t.id) { S.tham.sap = r.sap; veThamGoi(); }
          veBang();
        });
      });
    });
  }
  function veChao(than) {
    var t = S.tham, ds = S.cat.LOI_CHAO;
    if (!t) { dongBang(); return; }
    $('#ntBangTit').textContent = 'Gửi lời chào cho ' + t.ten;
    datTab([], '');
    than.innerHTML = '<p class="nt-meo">Chọn một câu tiếng Trung để gửi (mỗi bạn 1 lần mỗi ngày, +1 xu). Bạn sẽ đọc được trong <b>Nhật ký</b>.</p><ul class="nt-chao-ds">' +
      ds.map(function (lc, i) {
        return '<li><button type="button" data-chao="' + i + '"' + (t.daChao ? ' disabled' : '') + '><b lang="zh">' + esc(lc.zh) + '</b><i>' + esc(lc.py) + '</i><span>' + esc(lc.vn) + '</span></button></li>';
      }).join('') + '</ul>';
    $all('[data-chao]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var i = +b.getAttribute('data-chao'), lc = ds[i];
        doc(lc.zh);
        $all('[data-chao]', than).forEach(function (x) { x.disabled = true; });
        goi('/api/farm/chao/' + encodeURIComponent(t.id), { c: i }).then(function (r) {
          t.daChao = true;
          nhanTrangThai(r.st);
          veThamGoi();
          tieng('xu');
          dongBang();
          bao('Đã gửi “' + lc.zh + '” cho ' + t.ten + ' · +1 xu');
        }, function (err) { bao(err.message, 'loi'); veBang(); });
      });
    });
  }

  // Moi phut cap nhat nong trai cua em (ban vua mua hang, tuoi giup, gui loi chao...)
  function lamMoiDinhKy() {
    setInterval(function () {
      if (document.hidden || S.ban || S.tham || S.che !== 'xem' || hoi || bangDang || noiCua) return;
      var cu = S.st.nkMoi || 0, taiCu = S.st.tai ? S.st.tai.bd : 0;
      goi('/api/farm').then(function (st) {
        if (S.ban || S.tham || S.che !== 'xem' || hoi || bangDang || noiCua) return;
        nhanTrangThai(st);
        if (st.tai && st.tai.bd !== taiCu) baoThienTai(st.tai);
        if ((st.nkMoi || 0) > cu) { tieng('xu'); bao('Có tin mới từ các bạn — xem ở Thị trấn → Nhật ký!'); }
      }, function () {});
    }, 60000);
  }

  /* ---------------- thi tran cua lop ---------------- */
  // Moi ban trong lop la 1 lo dat doc theo duong pho; lo nao cung ve thu nho dung nong trai that.
  // Bam vao lo -> sang choi nha ban (giup, mua sap, gui loi chao).
  var thiTran = null;

  /* ---------------- Cung nhau: cong trinh lop, thach dau, ban hoc, le hoi ---------------- */
  var CN = { d: null, dangTai: false, tran: null, chon: null, khoa: false, q: '' };
  function hinhMon(h) { return /^wu:/.test(h) ? '/images/wu/' + h.slice(3) + '.png' : anh(h); }
  function taiCN() {
    if (CN.dangTai) return;
    CN.dangTai = true;
    goi('/api/farm/chung').then(function (d) {
      CN.dangTai = false; CN.d = d;
      veChamChung();
      if (bangDang && bangDang.loai === 'chung') veBang();
    }, function (e) {
      CN.dangTai = false;
      var t = $('#ntCnThan');
      if (t) t.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>';
    });
  }
  // cham do tren nut "Cung nhau": den luot thach dau, loi moi ban hoc, ruong doi, qua le hoi / cong trinh
  function veChamChung() {
    var d = CN.d, c = $('#ntChungCham');
    if (!c || !d) return;
    var co = d.td.some(function (t) { return !t.xong && !t.em.xong; }) || d.hb.moi.length > 0 || !!d.hb.coTheNhan ||
      !!d.lh.coTheNhan || d.xay.some(function (x) { return x.coTheNhan; });
    c.hidden = !co;
  }
  function anhNv(av, id) { return '<span class="nt-cn-nv" aria-hidden="true">' + NV.svg(av || NV.macDinh(id)) + '</span>'; }
  function thanhTien(co, can) {
    var p = can ? Math.min(100, Math.round(co / can * 100)) : 0;
    return '<span class="nt-cn-thanh"><span style="width:' + p + '%"></span></span>';
  }
  function bangTop(ds, donVi) {
    if (!ds.length) return '<p class="nt-meo">Chưa ai góp — em là người đầu tiên nhé!</p>';
    return '<ol class="nt-cn-top">' + ds.map(function (r, i) {
      return '<li class="' + (r.la ? 'la' : '') + '"><span class="nt-cn-hang">' + (i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1) + '</span>' + anhNv(r.av, r.id) +
        '<b>' + esc(r.ten) + (r.la ? ' (em)' : '') + '</b><span>' + r.n + ' ' + donVi + '</span></li>';
    }).join('') + '</ol>';
  }
  // 1 cau chu Han (dung chung cho gop gach va thach dau)
  function htmlCauChu(q, dau) {
    var h = q.hoi, laZh = q.k === 'nghia' || q.k === 'thieu';
    var deBai = q.k === 'nghia' ? '<div class="nt-ch-vn">' + esc(h.vn) + '</div>'
      : q.k === 'thieu' ? '<div class="nt-ch-zh" lang="zh">' + esc(h.thieu).replace('＿', '<span class="nt-ch-o">？</span>') + '</div><div class="nt-ch-goi">' + esc(h.vn) + '</div>'
      : '<div class="nt-ch-zh" lang="zh">' + esc(h.zh) + '</div>';
    return '<div class="nt-ch">' + (dau || '') + '<p class="nt-ch-kieu">' + TEN_KIEU_CH[q.k] + '</p>' + deBai +
      '<div class="nt-ch-lua' + (laZh ? ' zh' : '') + '">' + q.lua.map(function (l, j) {
        return '<button type="button" data-cn="' + j + '"' + (laZh ? ' lang="zh"' : '') + '>' + esc(l) + '</button>';
      }).join('') + '</div><p class="nt-ch-giai" id="ntCnGiai" aria-live="polite"></p></div>';
  }
  function ganCauChu(than, gui, sau) {
    CN.khoa = false;
    $all('[data-cn]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (CN.khoa) return;
        CN.khoa = true;
        var chon = +b.getAttribute('data-cn');
        gui(chon).then(function (r) {
          $all('[data-cn]', than).forEach(function (x, j) { x.disabled = true; x.classList.add(j === r.dap ? 'dung' : j === chon ? 'sai' : 'mo'); });
          tieng(r.dung ? 'dung' : 'sai');
          var g = $('#ntCnGiai', than);
          if (g) g.innerHTML = '<b lang="zh">' + esc(r.zh) + '</b> ' + esc(r.py) + ' — ' + esc(r.vn);
          doc(r.zh);
          setTimeout(function () { sau(r); }, r.dung ? 1000 : 1800);
        }, function (e) { CN.khoa = false; bao(e.message, 'loi'); taiCN(); });
      });
    });
  }

  function veChung(than) {
    var tab = bangDang.tab || 'ct';
    bangDang.tab = tab;
    $('#ntBangTit').textContent = 'Cùng nhau 一起';
    datTab([['ct', 'Công trình'], ['hd', '📦 Đơn lớn'], ['td', 'Thách đấu'], ['hb', 'Bạn học'], ['lh', 'Lễ hội']], tab);
    if (tab === 'hd') { veDonLon(than); return; }
    if (!CN.d) { than.innerHTML = '<div id="ntCnThan"><p class="nt-trong">Đang tải…</p></div>'; taiCN(); return; }
    if (CN.chon) { veChonBan(than); return; }
    if (tab === 'td') veThachDau(than);
    else if (tab === 'hb') veBanHoc(than);
    else if (tab === 'lh') veLeHoi(than);
    else veCongTrinh(than);
    $all('img', than).forEach(ganLoiAnh);
  }

  /* --- Cong trinh chung --- */
  function veCongTrinh(than) {
    var d = CN.d, ct = d.ct, s = S.st;
    var tong = 0, du = 0;
    Object.keys(ct.can).forEach(function (k) { tong += ct.can[k]; du += Math.min(ct.can[k], ct.co[k] || 0); });
    var html = '<div class="nt-cn-ct"><img class="nt-cn-ct-anh" src="' + anh(ct.k) + '" alt="" draggable="false">' +
      '<div><p class="nt-cn-nho">Công trình chung của <b>' + esc(d.pham.ten) + '</b></p>' +
      '<h3><span lang="zh">' + esc(ct.zh) + '</span> ' + esc(ct.py) + ' · ' + esc(ct.vn) + '</h3>' +
      thanhTien(du, tong) + '<p class="nt-cn-nho">' + (ct.xong ? '🎉 Đã xây xong! Tuần sau ' + (d.pham.loai === 'lop' ? 'cả lớp' : 'mọi người') + ' bắt đầu công trình mới.' : 'Đã có ' + Math.round(du / tong * 100) + '% vật liệu · em đã góp <b>' + ct.gopEm + '</b> điểm') + '</p></div></div>';
    if (!ct.xong) {
      html += '<ul class="nt-cn-vl">';
      Object.keys(ct.can).forEach(function (k) {
        var co = ct.co[k] || 0, can = ct.can[k], thieu = Math.max(0, can - co);
        if (k === 'gach') {
          html += '<li><span class="nt-cn-gach" aria-hidden="true">砖</span><span class="nt-cn-vl-t"><b><span lang="zh">砖</span> zhuān · Gạch</b><small>Trả lời đúng 1 câu chữ Hán = 1 viên gạch</small>' + thanhTien(co, can) + '</span><em>' + co + '/' + can + '</em></li>';
          return;
        }
        var sp = tenSp(k), coKho = s.kho[k] || 0, gop = Math.min(coKho, thieu);
        html += '<li>' + img('sp-' + k) + '<span class="nt-cn-vl-t"><b><span lang="zh">' + esc(sp.zh) + '</span> ' + esc(sp.py) + ' · ' + esc(sp.vn) + '</b><small>Kho em có ' + coKho + ' · mỗi món = ' + d.ct.diemSp + ' điểm</small>' + thanhTien(co, can) + '</span>' +
          '<em>' + co + '/' + can + '</em>' + (thieu ? '<button type="button" class="nt-mua" data-gop="' + k + '" data-n="' + gop + '"' + (gop ? '' : ' disabled') + '>' + (gop ? 'Góp ' + gop : 'Hết') + '</button>' : '<span class="nt-cn-du">✓</span>') + '</li>';
      });
      html += '</ul>';
      var conGach = (ct.can.gach || 0) - (ct.co.gach || 0);
      if (conGach > 0) {
        html += '<div class="nt-cn-hop" id="ntCnGachHop">' + (ct.cau && ct.conGach > 0
          ? htmlCauChu(ct.cau, '<div class="nt-ch-dau"><span>🧱 Góp gạch</span><span>còn ' + ct.conGach + ' viên hôm nay</span></div>')
          : '<p>' + (ct.conGach > 0 ? 'Mỗi câu chữ Hán đúng là 1 viên gạch cho công trình. Hôm nay em còn góp được <b>' + ct.conGach + '/' + ct.gachNgay + '</b> viên.' : 'Hôm nay em đã góp đủ ' + ct.gachNgay + ' viên gạch — mai góp tiếp nhé!') + '</p>' +
            (ct.conGach > 0 ? '<button type="button" class="nt-nut nt-nut-xanh" id="ntCnGach">🧱 Góp gạch</button>' : '')) + '</div>';
      }
    }
    html += '<h4 class="nt-cn-h">Bạn góp nhiều nhất</h4>' + bangTop(ct.top, 'điểm');
    if (d.xay.length) {
      html += '<h4 class="nt-cn-h">Đã xây trong thị trấn</h4><div class="nt-luoi-the">' + d.xay.map(function (x) {
        return '<div class="nt-the"><div class="nt-the-anh">' + img(x.k) + '</div><b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.vn) + ' · em góp ' + x.gopEm + '</small>' +
          (x.coTheNhan ? '<button type="button" class="nt-mua" data-ctnhan="' + esc(x.k) + '">🎁 Nhận quà</button>' : x.daNhan ? '<small>✓ Đã nhận quà</small>' : '<small>Góp từ ' + d.ct.diemNhan + ' điểm để nhận quà</small>') + '</div>';
      }).join('') + '</div>';
    }
    html += '<p class="nt-meo">Xây xong: ai góp từ <b>' + d.ct.diemNhan + ' điểm</b> nhận <b>bản sao nhỏ của công trình</b> để đặt ở nông trại mình + xu. Công trình hiện ở quảng trường <b>Thị trấn</b>.</p>';
    than.innerHTML = html;
    var nut = $('#ntCnGach', than);
    if (nut) nut.addEventListener('click', function () {
      nut.disabled = true;
      goi('/api/farm/ct/cau', {}).then(function (r) { CN.d.ct.cau = r.cau; veBang(); }, function (e) { nut.disabled = false; bao(e.message, 'loi'); });
    });
    if (ct.cau && $('#ntCnGachHop', than)) ganCauChu(than, function (chon) { return goi('/api/farm/ct/tl', { chon: chon }); }, function (r) {
      var c = CN.d.ct;
      if (r.dung) { c.co.gach = (c.co.gach || 0) + 1; c.gopEm++; bayLen($('#ntCnGachHop'), '+1 🧱'); }
      c.cau = r.cau; c.conGach = r.conGach;
      if (r.xong) { tieng('len'); bao('🎉 ' + (CN.d.pham.loai === 'lop' ? 'Cả lớp' : 'Mọi người') + ' đã xây xong ' + c.vn + ' ' + c.zh + '! Vào Thị trấn xem nhé!'); taiCN(); return; }
      if (bangDang && bangDang.loai === 'chung' && bangDang.tab === 'ct') veBang();
    });
    $all('[data-gop]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        goi('/api/farm/ct/gop', { k: b.getAttribute('data-gop'), n: +b.getAttribute('data-n') }).then(function (r) {
          nhanTrangThai(r.st); tieng('dung');
          bao('Đã góp ' + r.so + ' ' + tenSp(b.getAttribute('data-gop')).vn.toLowerCase() + ' cho công trình · +' + r.so * CN.d.ct.diemSp + ' điểm');
          if (r.xong) { tieng('len'); bao('🎉 Công trình chung đã xây xong!'); }
          taiCN();
        }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
      });
    });
    $all('[data-ctnhan]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        goi('/api/farm/ct/nhan', { k: b.getAttribute('data-ctnhan') }).then(function (r) {
          nhanTrangThai(r.st); tieng('len');
          bao('🎁 +' + r.xu + ' xu' + (r.mon ? ' · ' + tenMon(r.mon).vn + ' ' + tenMon(r.mon).zh + ' đã vào Túi đồ!' : ''));
          taiCN();
        }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
      });
    });
  }

  /* --- Chon ban (moi thach dau / moi lam ban hoc) --- */
  function moChonBan(loai) { CN.chon = loai; CN.q = ''; veBang(); }
  function veChonBan(than) {
    var la = CN.chon === 'td';
    than.innerHTML = '<div class="nt-cn-chon-dau"><button type="button" class="nt-link" id="ntCnVe">← Quay lại</button><b>' + (la ? 'Chọn bạn để thách đấu' : 'Chọn bạn học cặp đôi') + '</b></div>' +
      '<div class="nt-cd-tim"><input type="search" id="ntCnQ" placeholder="Tìm tên bạn…" aria-label="Tìm bạn" autocomplete="off" value="' + esc(CN.q) + '"></div>' +
      '<ol class="nt-ban-ds" id="ntCnDs"><li class="nt-trong">Đang tải…</li></ol>';
    $('#ntCnVe', than).addEventListener('click', function () { CN.chon = null; veBang(); });
    var hen = null, o = $('#ntCnQ', than);
    function tai() {
      goi('/api/farm/chung/ban?q=' + encodeURIComponent(CN.q)).then(function (r) {
        var ds = $('#ntCnDs', than);
        if (!ds || !CN.chon) return;
        ds.innerHTML = r.ds.length ? r.ds.map(function (b) {
          return '<li>' + anhNv(b.av, b.id) + '<span class="nt-ban-ten"><b>' + esc(b.ten) + '</b><small>Cấp ' + b.lv + '</small></span>' +
            '<button type="button" class="nt-mua" data-chonban="' + esc(b.id) + '">' + (la ? '⚔ Thách đấu' : '🤝 Mời') + '</button></li>';
        }).join('') : '<li class="nt-trong">Không tìm thấy bạn nào có nông trại.</li>';
        $all('[data-chonban]', ds).forEach(function (bt) {
          bt.addEventListener('click', function () {
            bt.disabled = true;
            var id = bt.getAttribute('data-chonban');
            goi(la ? '/api/farm/td/moi/' + encodeURIComponent(id) : '/api/farm/hb/moi/' + encodeURIComponent(id), {}).then(function (kq) {
              tieng('dung');
              bao(la ? '⚔ Đã gửi thách đấu! Em làm bài trước nhé.' : '🤝 Đã gửi lời mời — chờ bạn đồng ý nhé.');
              CN.chon = null;
              if (la && kq.id) { CN.d = null; taiCN(); batDauTd(kq.id); return; }
              CN.d = null; taiCN(); veBang();
            }, function (e) { bt.disabled = false; bao(e.message, 'loi'); });
          });
        });
      }, function (e) { var ds = $('#ntCnDs', than); if (ds) ds.innerHTML = '<li class="nt-trong">' + esc(e.message) + '</li>'; });
    }
    o.addEventListener('input', function () { clearTimeout(hen); hen = setTimeout(function () { CN.q = o.value.trim(); tai(); }, 350); });
    tai();
  }

  /* --- Thach dau chu Han --- */
  function giayTd(ms) { return ms ? (Math.round(ms / 100) / 10) + ' giây' : ''; }
  function batDauTd(id) {
    goi('/api/farm/td/' + encodeURIComponent(id) + '/bd', {}).then(function (r) {
      CN.tran = { id: id, ds: r.ds, i: r.i, dung: r.dung, bd: Date.now(), ket: null };
      if (!bangDang || bangDang.loai !== 'chung') moBang('chung', 'td'); else { bangDang.tab = 'td'; veBang(); }
    }, function (e) { bao(e.message, 'loi'); taiCN(); });
  }
  function veThachDau(than) {
    var d = CN.d, t = CN.tran;
    if (t && t.ket) {
      var k = t.ket, ten = esc(k.ban.ten);
      var cho = !k.xong;
      than.innerHTML = '<div class="nt-ch-kq"><div class="nt-ch-diem"><b>' + k.em.dung + '/' + k.so + '</b><span>' + giayTd(k.em.ms) + '</span></div>' +
        (cho ? '<p class="nt-ch-con">Em đã làm xong! Chờ <b>' + ten + '</b> làm bài — kết quả sẽ báo trong Nhật ký.</p>'
          : '<p class="nt-cn-kq kq-' + k.kq + '">' + (k.kq === 'thang' ? '🏆 Em thắng! 你赢了！' : k.kq === 'thua' ? 'Bạn thắng lần này — 加油！' : 'Hoà! 平局！') + '</p>' +
            '<p class="nt-ch-con">' + ten + ': ' + k.banKq.dung + '/' + k.so + (k.banKq.ms ? ' · ' + giayTd(k.banKq.ms) : '') + ' · em nhận <b>' + d.tdXu[k.kq] + ' xu</b></p>') +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntTdVe">Về danh sách</button></div></div>';
      $('#ntTdVe', than).addEventListener('click', function () { CN.tran = null; taiCN(); veBang(); });
      return;
    }
    if (t) {
      var q = t.ds[t.i];
      than.innerHTML = htmlCauChu(q, '<div class="nt-ch-dau"><span>⚔ Câu ' + (t.i + 1) + '/' + t.ds.length + '</span><span class="nt-ch-cham">' + t.ds.map(function (x, j) { return '<i class="' + (j < t.i ? 'qua' : j === t.i ? 'dang' : '') + '"></i>'; }).join('') + '</span><span>✔ ' + t.dung + '</span></div>');
      ganCauChu(than, function (chon) { return goi('/api/farm/td/' + encodeURIComponent(t.id) + '/tl', { i: t.i, chon: chon }); }, function (r) {
        if (r.dung) t.dung++;
        t.i++;
        if (r.tran) { t.ket = r.tran; if (r.tran.xong) tieng(r.tran.kq === 'thang' ? 'len' : 'dung'); taiCN(); }
        if (bangDang && bangDang.loai === 'chung') veBang();
      });
      return;
    }
    var tk = d.tdTk;
    var html = '<div class="nt-cn-td-dau"><div><b>⚔ Thách đấu chữ Hán</b><small>' + d.tdSo + ' câu: một nửa từ bài em học, một nửa từ bài bạn học. Đúng nhiều hơn thắng; bằng điểm thì ai nhanh hơn thắng. Thắng +' + d.tdXu.thang + ' xu, hoà +' + d.tdXu.hoa + ', thua vẫn +' + d.tdXu.thua + '.</small>' +
      '<small>Thành tích: <b>' + tk.thang + '</b> thắng · ' + tk.hoa + ' hoà · ' + tk.thua + ' thua</small></div>' +
      '<button type="button" class="nt-nut nt-nut-xanh" id="ntTdMoi"' + (d.tdCon > 0 ? '' : ' disabled') + '>' + (d.tdCon > 0 ? 'Thách đấu bạn (' + d.tdCon + ')' : 'Hết lượt mời hôm nay') + '</button></div>';
    html += d.td.length ? '<ol class="nt-ban-ds nt-cn-tds">' + d.td.map(function (x) {
      var tt = x.xong ? '<span class="nt-cn-kq kq-' + x.kq + '">' + { thang: 'Thắng', thua: 'Thua', hoa: 'Hoà', huy: 'Huỷ' }[x.kq] + '</span>'
        : x.em.xong ? '<span class="nt-cn-cho">Chờ bạn</span>'
        : '<button type="button" class="nt-mua" data-tdlam="' + esc(x.id) + '">' + (x.em.da ? 'Làm tiếp' : 'Làm bài') + '</button>';
      var diem = 'Em ' + (x.em.xong ? x.em.dung + '/' + x.so : x.em.da ? x.em.da + '/' + x.so + ' câu' : 'chưa làm') +
        ' · Bạn ' + (x.banKq.dung != null ? x.banKq.dung + '/' + x.so : x.banKq.xong ? 'đã xong' : x.banKq.da ? 'đang làm' : 'chưa làm');
      return '<li><span class="nt-ban-ten"><b>' + (x.laNguoiMoi ? 'Em ⚔ ' : '') + esc(x.ban.ten) + (x.laNguoiMoi ? '' : ' ⚔ em') + '</b><small>' + diem + '</small></span>' + tt + '</li>';
    }).join('') + '</ol>' : '<p class="nt-trong">Chưa có trận nào. Mời một bạn thách đấu chữ Hán nhé!</p>';
    than.innerHTML = html;
    $('#ntTdMoi', than).addEventListener('click', function () { moChonBan('td'); });
    $all('[data-tdlam]', than).forEach(function (b) { b.addEventListener('click', function () { b.disabled = true; batDauTd(b.getAttribute('data-tdlam')); }); });
  }

  /* --- Ban hoc cap doi 学伴 --- */
  function veBanHoc(than) {
    var hb = CN.d.hb, html = '';
    if (hb.ban) {
      var b = hb.ban;
      html = '<div class="nt-cn-hb"><div class="nt-cn-hb-doi">' +
        '<div>' + anhNv(avEm(), idEm()) + '<b>Em</b><small>⭐ ' + Math.min(hb.emHomNay, 999) + '/' + hb.muc + '</small>' + thanhTien(hb.emHomNay, hb.muc) + '</div>' +
        '<span class="nt-cn-tim" aria-hidden="true">学伴</span>' +
        '<div>' + anhNv(b.av, b.id) + '<b>' + esc(b.ten) + '</b><small>⭐ ' + b.homNay + '/' + hb.muc + '</small>' + thanhTien(b.homNay, hb.muc) + '</div></div>' +
        '<p class="nt-cn-chuoi">🔥 Chuỗi học cùng nhau: <b>' + (hb.chuoi || 0) + ' ngày</b></p>' +
        '<p class="nt-meo">Ngày nào <b>cả hai</b> cùng đạt ' + hb.muc + ' sao học, mỗi bạn mở được 1 <b>rương đôi</b> (xu tăng theo chuỗi ngày). Cứ 7 ngày liền có thêm hộp quà bí ẩn!</p>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntHbRuong"' + (hb.coTheNhan ? '' : ' disabled') + '>' +
        (hb.daNhan ? '✓ Đã mở rương hôm nay' : hb.coTheNhan ? '🎁 Mở rương đôi' : '🎁 Rương đôi (chưa đủ sao)') + '</button>' +
        '<button type="button" class="nt-nut" id="ntHbNhac"' + (hb.daNhac ? ' disabled' : '') + '>' + (hb.daNhac ? '✓ Đã nhắc bạn' : '📣 Nhắc bạn: 加油！') + '</button>' +
        '<a class="nt-nut" href="' + esc((hocTiep && hocTiep.url) || '/') + '">Đi học</a></div>' +
        '<p class="nt-cn-nho"><button type="button" class="nt-link" id="ntHbHuy">Thôi kết đôi</button></p></div>';
    } else {
      html = '<div class="nt-cn-hb"><p class="nt-cn-to"><span lang="zh">学伴</span> xuébàn · Bạn học cặp đôi</p>' +
        '<p class="nt-meo">Kết đôi với một bạn. Ngày nào cả hai cùng đạt <b>' + hb.muc + ' sao học</b>, cả hai mở rương đôi và giữ chuỗi ngày. Bạn quên học? Nhắc bạn bằng một câu <b lang="zh">加油！</b></p>';
      if (hb.moi.length) {
        html += '<h4 class="nt-cn-h">Lời mời học cùng</h4><ol class="nt-ban-ds">' + hb.moi.map(function (m) {
          return '<li>' + anhNv(m.av, m.id) + '<span class="nt-ban-ten"><b>' + esc(m.ten) + '</b><small>muốn làm bạn học của em</small></span>' +
            '<button type="button" class="nt-mua" data-hbok="' + esc(m.id) + '">Đồng ý</button><button type="button" class="nt-link" data-hbkhong="' + esc(m.id) + '">Từ chối</button></li>';
        }).join('') + '</ol>';
      }
      if (hb.daGui) html += '<p class="nt-ch-con">Đã mời <b>' + esc(hb.daGuiTen || 'một bạn') + '</b> — chờ bạn đồng ý. <button type="button" class="nt-link" id="ntHbHuy">Huỷ lời mời</button></p>';
      else html += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntHbChon">🤝 Chọn bạn học</button></div>';
      html += '</div>';
    }
    than.innerHTML = html;
    function nut(id, fn) { var b = $(id, than); if (b) b.addEventListener('click', function () { fn(b); }); }
    nut('#ntHbChon', function () { moChonBan('hb'); });
    nut('#ntHbRuong', function (b) {
      b.disabled = true;
      goi('/api/farm/hb/ruong', {}).then(function (r) {
        nhanTrangThai(r.st); tieng('len');
        bao('🎁 Rương đôi: +' + r.xu + ' xu · chuỗi ' + r.chuoi + ' ngày' + (r.qua ? ' · hộp quà: ' + tenQua(r.qua).vn + '!' : ''));
        taiCN();
      }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
    });
    nut('#ntHbNhac', function (b) {
      b.disabled = true;
      goi('/api/farm/hb/nhac', {}).then(function () { bao('📣 Đã gửi 加油！ tới bạn học.'); taiCN(); }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
    });
    nut('#ntHbHuy', function (b) {
      if (hb.ban && !confirm('Thôi kết đôi với ' + hb.ban.ten + '? Chuỗi ngày học cùng sẽ mất.')) return;
      b.disabled = true;
      goi('/api/farm/hb/huy', {}).then(function () { taiCN(); }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
    });
    $all('[data-hbok]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        goi('/api/farm/hb/dongy/' + encodeURIComponent(b.getAttribute('data-hbok')), {}).then(function () { tieng('len'); bao('🤝 Đã kết đôi bạn học! Cùng đạt ' + hb.muc + ' sao mỗi ngày nhé.'); taiCN(); },
          function (e) { b.disabled = false; bao(e.message, 'loi'); taiCN(); });
      });
    });
    $all('[data-hbkhong]', than).forEach(function (b) {
      b.addEventListener('click', function () { goi('/api/farm/hb/tuchoi/' + encodeURIComponent(b.getAttribute('data-hbkhong')), {}).then(function () { taiCN(); }); });
    });
  }

  /* --- Le hoi cuoi tuan --- */
  function veLeHoi(than) {
    var l = CN.d.lh, s = S.st, m = l.mon, du = true;
    var nl = Object.keys(m.can).map(function (x) {
      var co = s.kho[x] || 0;
      if (co < m.can[x]) du = false;
      return dongNl(x, m.can[x], co, m.can[x]);
    }).join('');
    var html = '<div class="nt-cn-lh"><div class="nt-cn-lh-dau"><img src="' + anh(l.qua) + '" alt="" draggable="false">' +
      '<div><p class="nt-cn-nho">' + (l.mo ? 'Đang diễn ra · kết thúc sau ' + conLaiGiay(l.conGiay) : 'Lễ hội cuối tuần · mở sau ' + conLaiGiay(l.conGiay)) + '</p>' +
      '<h3><span lang="zh">' + esc(l.zh) + '</span> ' + esc(l.py) + ' · ' + esc(l.vn) + '</h3>' +
      '<button type="button" class="nt-nk-chao" data-doc="' + esc(l.chuc) + '"><b lang="zh">' + esc(l.chuc) + '</b> ' + esc(l.chucPy) + ' 🔊</button></div></div>' +
      '<p class="nt-meo">' + esc(l.vh) + '</p>' +
      '<div class="nt-the nt-mon nt-cn-lh-mon"><div class="nt-the-anh"><img src="' + hinhMon(m.hinh) + '" alt="" draggable="false"></div>' +
      '<b class="nt-mon-vn">' + esc(m.vn) + '</b><ul class="nt-ct">' + nl + '</ul>' +
      (l.mo ? '<button type="button" class="nt-mua" id="ntLhNau"' + (du ? '' : ' disabled') + '>' + (du ? 'Nấu 1 phần (+' + l.xuMon + ' xu)' : 'Thiếu nguyên liệu') + '</button>'
        : '<p class="nt-the-phu">Chuẩn bị nguyên liệu từ bây giờ — Thứ Bảy cả lớp cùng nấu!</p>') + '</div>';
    if (l.mo || l.n) {
      html += '<h4 class="nt-cn-h">Mục tiêu chung: ' + l.n + '/' + l.muc + ' phần ' + esc(m.vn.toLowerCase()) + '</h4>' + thanhTien(l.n, l.muc) +
        '<p class="nt-cn-nho">Đủ ' + l.muc + ' phần: ai đã nấu ít nhất 1 phần nhận <b>' + esc(tenMon(l.qua).vn) + ' ' + esc(tenMon(l.qua).zh) + '</b> + ' + l.xuNhan + ' xu. Em đã nấu <b>' + l.em + '</b> phần.</p>';
      if (l.coTheNhan) html += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntLhNhan">🎁 Nhận quà lễ hội</button></div>';
      else if (l.daNhan) html += '<p class="nt-ch-con">✓ Em đã nhận quà lễ hội tuần này.</p>';
      html += bangTop(l.top, 'phần');
    }
    html += '</div>';
    than.innerHTML = html;
    var nau = $('#ntLhNau', than);
    if (nau) nau.addEventListener('click', function () { moNauLh(); });
    var nhan = $('#ntLhNhan', than);
    if (nhan) nhan.addEventListener('click', function () {
      nhan.disabled = true;
      goi('/api/farm/lh/nhan', {}).then(function (r) {
        nhanTrangThai(r.st); tieng('len'); doc(l.chuc);
        bao('🎁 ' + tenMon(r.mon).vn + ' ' + tenMon(r.mon).zh + ' đã vào Túi đồ · +' + r.xu + ' xu. ' + l.chuc);
        taiCN();
      }, function (e) { nhan.disabled = false; bao(e.message, 'loi'); });
    });
  }
  function moNauLh() {
    var l = CN.d.lh, m = l.mon, M = S.cat.MON;
    var lua = tron([m.zh].concat(tron(Object.keys(M).map(function (x) { return M[x].zh; }).concat(['月饼', '粽子', '汤圆', '饺子']).filter(function (z) { return z !== m.zh; }))
      .filter(function (z, i, a) { return a.indexOf(z) === i; }).slice(0, 3)));
    moBangNho('<div class="nt-goi"><h3>Món lễ hội này tiếng Trung gọi là gì?</h3>' +
      '<div class="nt-goi-mon"><img class="nt-mon-to" src="' + hinhMon(m.hinh) + '" alt="" draggable="false"><span><b>' + esc(m.vn) + '</b><small>' + esc(l.vn) + ' · chọn đúng tên mới nấu được</small></span></div>' +
      '<div class="nt-ch-lua zh">' + lua.map(function (z) { return '<button type="button" data-tenlh="' + esc(z) + '" lang="zh">' + esc(z) + '</button>'; }).join('') + '</div>' +
      '<p class="nt-ch-giai" id="ntLhGiai" aria-live="polite"></p>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut" id="ntLhVe">Về lễ hội</button></div></div>');
    $('#ntLhVe').addEventListener('click', function () { moBang('chung', 'lh'); });
    $all('[data-tenlh]').forEach(function (b) {
      b.addEventListener('click', function () {
        var z = b.getAttribute('data-tenlh');
        if (z !== m.zh) { b.disabled = true; b.classList.add('sai'); tieng('sai'); $('#ntLhGiai').textContent = 'Chưa đúng — thử chữ khác nhé!'; return; }
        $all('[data-tenlh]').forEach(function (x) { x.disabled = true; });
        goi('/api/farm/lh/nau', { goi: z }).then(function (r) {
          b.classList.add('dung'); nhanTrangThai(r.st); tieng('len'); doc(m.zh);
          $('#ntLhGiai').innerHTML = '🍽 Nấu xong <b lang="zh">' + esc(m.zh) + '</b> ' + esc(m.py) + ' · +' + r.xu + ' xu · lễ hội đã có ' + r.n + ' phần' + (r.du ? ' — ĐỦ MỤC TIÊU! 🎉' : '');
          taiCN();
        }, function (e) { bao(e.message, 'loi'); moBang('chung', 'lh'); });
      });
    });
  }

  // Cong trinh chung tren quang truong thi tran: cong trinh da xay + cong trinh dang xay (bam -> bang Cung nhau)
  function veCtThiTran() {
    var hop = $('#ntTtCt');
    if (!hop) {
      hop = document.createElement('div');
      hop.className = 'nt-tt-ct'; hop.id = 'ntTtCt';
      $('#ntTtQuang').insertAdjacentElement('afterend', hop);
    }
    var r = thiTran, ct = r && r.ct;
    if (!ct) { hop.innerHTML = ''; return; }
    var dang = ct.dang, cuaEm = r.cuaEm;
    hop.innerHTML = ct.xay.map(function (x) {
      return '<figure class="nt-tt-ct-xong"><img src="' + anh(x.k) + '" alt="" draggable="false"><figcaption><b lang="zh">' + esc(x.zh) + '</b>' + esc(x.vn) + '</figcaption></figure>';
    }).join('') + (!dang ? '' : '<' + (cuaEm ? 'button type="button" data-mo-ct' : 'div') + ' class="nt-tt-ct-dang"><img src="' + anh(dang.k) + '" alt="" draggable="false"><span><b>Đang xây <span lang="zh">' + esc(dang.zh) + '</span></b>' +
      thanhTien(dang.pct, 100) + '<small>' + dang.pct + '%' + (cuaEm ? ' · bấm để góp sức' : ' · ' + esc(dang.vn)) + '</small></span></' + (cuaEm ? 'button' : 'div') + '>');
    var b = $('[data-mo-ct]', hop);
    if (b) b.addEventListener('click', function () { dongThiTran(); moBang('chung', 'ct'); });
    $all('img', hop).forEach(ganLoiAnh);
  }
  function moThiTran(lopId) {
    dongHoCau();
    lopId = typeof lopId === 'string' ? lopId : '';
    dongNoi();
    dongBang();
    if (S.che !== 'xem') thoatDat();
    if (S.tham) veNha();
    $('#ntThiTran').hidden = false;
    document.body.classList.add('o-thi-tran');
    nutVeTrang();
    veNutThu();
    if (!thiTran) $('#ntTtLuoi').innerHTML = '<p class="nt-trong">Đang vẽ thị trấn…</p>';
    if (lopId && (!thiTran || thiTran.lopId !== lopId)) $('#ntTtLuoi').innerHTML = '<p class="nt-trong">Đang vẽ thị trấn…</p>';
    goi('/api/farm/thitran' + (lopId ? '?lop=' + encodeURIComponent(lopId) : '')).then(function (r) {
      thiTran = r;
      S.lech = r.now - Date.now();
      // vuong mien cho ban kiem nhieu sao hoc tap nhat tuan trong lop
      var dau = (r.ds || []).reduce(function (m, b) { return b.tuan > (m ? m.tuan : 0) ? b : m; }, null);
      if (dau) dau.vuaHoc = true;
      if (!$('#ntThiTran').hidden) veThiTran();
    }, function (err) { $('#ntTtLuoi').innerHTML = '<p class="nt-trong">' + esc(err.message) + '</p>'; });
  }
  // Cap thi tran (小村 -> 城市): ten tren bien, do trang tri hai ben cong, co vo dich / danh hieu tuan truoc
  var TRANG_CONG = ['den-long', 'tung', 'cay-dao', 'den-phuc'];
  function veCapThiTran(r) {
    var c = r && r.cap, capEl = $('#ntTtCap'), dh = $('#ntTtDh');
    capEl.innerHTML = c ? '<span lang="zh">' + esc(c.zh) + '</span> ' + esc(c.py) + ' · ' + esc(c.vn) : '<span lang="zh">小镇</span> xiǎozhèn';
    var cong = $('.nt-tt-cong'), hang = $('#ntTtCongHang');
    if (!hang) {
      hang = document.createElement('div');
      hang.className = 'nt-tt-cong-hang'; hang.id = 'ntTtCongHang';
      cong.parentNode.insertBefore(hang, cong);
      hang.appendChild(cong);
    }
    $all('.nt-tt-trang', hang).forEach(function (x) { x.remove(); });
    var so = c ? Math.min(c.cap, TRANG_CONG.length) : 0, trai = '', phai = '';
    for (var i = 0; i < so; i++) {
      trai = '<img class="nt-tt-trang" src="' + anh(TRANG_CONG[i]) + '" alt="" draggable="false">' + trai;
      phai += '<img class="nt-tt-trang" src="' + anh(TRANG_CONG[i]) + '" alt="" draggable="false">';
    }
    if (r && r.hangTuanTruoc === 1) phai = '<img class="nt-tt-trang nt-tt-co" src="' + anh('co-vodich') + '" alt="Cờ vô địch" draggable="false">' + phai;
    cong.insertAdjacentHTML('beforebegin', trai);
    cong.insertAdjacentHTML('afterend', phai);
    $all('img', hang).forEach(ganLoiAnh);
    var dhs = [];
    if (r && r.hangTuanTruoc) dhs.push(['🏆 Vô địch thị trấn tuần trước', '🥈 Hạng 2 thị trấn tuần trước', '🥉 Hạng 3 thị trấn tuần trước'][r.hangTuanTruoc - 1]);
    if (r && r.yeuMen) dhs.push('❤ Lớp được yêu mến nhất tuần trước');
    if (r && r.loiChu) dhs.push('⚔ 擂主 Lôi chủ tuần trước');
    dh.hidden = !dhs.length;
    dh.textContent = dhs.join(' · ');
  }
  // Phan thuong thi tran (top tuan, yeu men, moc cap, co vu 7 ngay) — cham do tren nut Thi tran
  var TG = null;
  function taiThuongTt() {
    return goi('/api/farm/thuongtt').then(function (r) { TG = r; var c = $('#ntTtCham'); if (c) c.hidden = !(r.conNhan > 0); return r; });
  }
  function htmlThuongTt(lopEm) {
    var r = TG;
    if (!r) return '';
    var kq = r.tuanTruoc, html = '<div class="nt-tg"><h4>🎁 Phần thưởng thị trấn</h4>';
    if (kq.top.length) html += '<p class="nt-cn-nho">Tuần trước: ' + kq.top.map(function (x) { return ['🥇', '🥈', '🥉'][x.hang - 1] + ' <b>' + esc(x.ten) + '</b>'; }).join(' · ') +
      (kq.yeuMen ? ' · ❤ Được yêu mến nhất: <b>' + esc(kq.yeuMen.ten) + '</b> (' + kq.yeuMen.n + ' cổ vũ)' : '') + '</p>';
    var chua = r.ds.filter(function (x) { return !x.daNhan; });
    if (chua.length) html += '<ul class="nt-tg-ds">' + chua.map(function (x) {
      var chu = x.loai === 'tuan' ? ['🥇', '🥈', '🥉'][x.hang - 1] + ' Lớp em hạng ' + x.hang + ' tuần trước: <b>+' + x.xu + ' xu</b> + ' + esc(tenMon(x.mon).vn) + ' <span lang="zh">' + esc(tenMon(x.mon).zh) + '</span>'
        : x.loai === 'yeumen' ? '❤ Lớp em được yêu mến nhất (' + x.n + ' lượt cổ vũ): <b>+' + x.xu + ' xu</b>'
        : x.loai === 'ld' ? '⚔ Lớp em thắng lôi đài chữ Hán <span lang="zh">擂主</span>: <b>+' + x.xu + ' xu</b>'
        : '🏯 Thị trấn lên <span lang="zh">' + esc(x.zh) + '</span> ' + esc(x.vn) + ' (' + x.d.toLocaleString('vi-VN') + ' điểm): <b>+' + x.xu + ' xu</b>' + (x.qua ? ' + hộp quà' : '');
      return '<li>' + (x.loai === 'tuan' ? img(x.mon) : '') + '<span>' + chu + '</span><button type="button" class="nt-mua" data-tgnhan="' + x.loai + '" data-cap="' + (x.cap || 0) + '">Nhận</button></li>';
    }).join('') + '</ul>';
    else html += '<p class="nt-cn-nho">' + (r.ds.length ? '✓ Em đã nhận hết phần thưởng hiện có.' : 'Chưa có phần thưởng — cùng lớp học và xây thị trấn để lọt top tuần nhé!') + '</p>';
    if (r.cap && lopEm) {
      var sau = r.cap.sau;
      html += '<p class="nt-cn-nho">Thị trấn lớp em: <b><span lang="zh">' + esc(r.cap.zh) + '</span> ' + esc(r.cap.vn) + '</b>' +
        (sau ? (lopEm.diem < sau.d ? ' · còn <b>' + (sau.d - lopEm.diem).toLocaleString('vi-VN') + ' điểm</b> nữa lên <span lang="zh">' + esc(sau.zh) + '</span> ' + esc(sau.vn) : '') : ' · cấp cao nhất!') + '</p>' +
        (sau ? thanhTien(lopEm.diem, sau.d) : '');
    }
    html += '<p class="nt-cn-nho">📣 Cổ vũ các lớp bạn: <b>' + r.coVu.ngay + '/' + r.coVu.can + ' ngày</b> tuần này — đủ ' + r.coVu.can + ' ngày nhận hộp quà bí ẩn.</p>' +
      '<details class="nt-tg-luat"><summary>Cách nhận thưởng</summary><ul>' +
      '<li>Hết Chủ nhật, 3 lớp điểm cao nhất: mỗi bạn <b>có học trong tuần</b> nhận 60 / 40 / 25 xu + cúp vàng / bạc / đồng đặt ở nông trại. Lớp hạng 1 được cắm cờ vô địch ở cổng thị trấn cả tuần sau.</li>' +
      '<li>Lớp được cổ vũ nhiều nhất tuần: mỗi bạn có học nhận 20 xu và danh hiệu "Lớp được yêu mến nhất".</li>' +
      '<li>Thị trấn đạt 500 / 1.000 / 2.000 / 5.000 điểm thì lên cấp 小镇 → 大镇 → 县城 → 城市, cả lớp nhận quà mỗi mốc, cổng thị trấn đẹp thêm.</li>' +
      '<li>Cổ vũ lớp khác đủ 7 ngày trong tuần: hộp quà bí ẩn.</li>' +
      '<li>Lớp thắng Lôi đài chữ Hán tuần: mỗi bạn góp điểm nhận 30 xu, danh hiệu 擂主 và thị trấn +100 điểm (cộng dồn mỗi lần thắng).</li></ul></details></div>';
    return html;
  }
  function ganThuongTt(than) {
    $all('[data-tgnhan]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        goi('/api/farm/thuongtt/nhan', { loai: b.getAttribute('data-tgnhan'), cap: +b.getAttribute('data-cap') }).then(function (r) {
          nhanTrangThai(r.st); tieng('len');
          bao('🎁 +' + r.xu + ' xu' + (r.mon ? ' · ' + tenMon(r.mon).vn + ' đã vào Túi đồ!' : '') + (r.qua ? ' · hộp quà: ' + tenQua(r.qua).vn + '!' : ''));
          taiThuongTt().then(function () { if (bangDang && bangDang.loai === 'cacthitran') veBang(); });
        }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
      });
    });
  }

  /* ---------------- Loi dai chu Han 擂台 ---------------- */
  var LD = { d: null };
  function veLoiDai(than) {
    $('#ntBangTit').textContent = 'Lôi đài chữ Hán 擂台';
    datTab([], '');
    if (!LD.d) {
      than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
      goi('/api/farm/loidai').then(function (r) { LD.d = r; if (bangDang && bangDang.loai === 'loidai') veBang(); }, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
      return;
    }
    var r = LD.d, html = '<div class="nt-ld-dau"><span class="nt-ld-chu" lang="zh" aria-hidden="true">擂</span><div><b><span lang="zh">擂台</span> lèitái · Lôi đài giữa các lớp</b>' +
      '<small>Mỗi câu chữ Hán đúng ở nông trại (lôi đài, thử thách chữ Hán, góp gạch, thách đấu, du khách) = <b>+1 điểm</b> cho lớp em, tối đa ' + r.ldNgay + ' điểm/bạn/ngày. Xếp theo <b>điểm trung bình mỗi bạn</b> nên lớp ít người vẫn thắng được. Còn ' + conLaiGiay(r.giayHetTuan) + '.</small>' +
      '<small>Lớp thắng tuần: mỗi bạn góp điểm nhận <b>' + r.xu + ' xu</b>, danh hiệu <b lang="zh">擂主</b> và <b>+' + r.diemTt + ' điểm thị trấn</b>.' + (r.tuanTruoc ? ' Tuần trước: <b>' + esc(r.tuanTruoc.ten) + '</b> thắng.' : '') + '</small></div></div>';
    if (!r.lopEm) html += '<p class="nt-ch-con">Em chưa vào lớp nào — nhập mã lớp ở trang học để lên lôi đài cùng lớp nhé.</p>';
    else if (r.cau) html += '<div class="nt-cn-hop" id="ntLdHop">' + htmlCauChu(r.cau, '<div class="nt-ch-dau"><span>⚔ Lên đài</span><span>còn ' + r.conNgay + ' điểm hôm nay</span></div>') + '</div>';
    else html += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" id="ntLdLen"' + (r.conNgay > 0 ? '' : ' disabled') + '>' + (r.conNgay > 0 ? '⚔ Lên đài · 10 câu' : 'Hôm nay em đã góp đủ ' + r.ldNgay + ' điểm') + '</button></div>';
    var dau = r.bang.length ? r.bang[0].tb : 0;
    html += '<h4 class="nt-cn-h">Bảng lôi đài tuần này</h4>' + (r.bang.length ? '<ol class="nt-ld-bang">' + r.bang.map(function (c) {
      return '<li class="' + (c.la ? 'la' : '') + '"><span class="nt-cn-hang">' + (c.hang <= 3 && c.tong ? ['🥇', '🥈', '🥉'][c.hang - 1] : c.hang) + '</span><span class="nt-ld-ten"><b>' + esc(c.ten) + (c.la ? ' (lớp em)' : '') + '</b>' +
        thanhTien(c.tb, dau || 1) + '<small>' + c.tong + ' điểm · ' + c.soNt + ' bạn</small></span><span class="nt-ld-tb"><b>' + c.tb + '</b><small>điểm/bạn</small></span></li>';
    }).join('') + '</ol>' : '<p class="nt-trong">Chưa lớp nào lên đài tuần này.</p>');
    if (r.lopEm) html += '<h4 class="nt-cn-h">Lớp em: ai góp nhiều nhất</h4>' + bangTop(r.top, 'điểm');
    than.innerHTML = html;
    var len = $('#ntLdLen', than);
    if (len) len.addEventListener('click', function () {
      len.disabled = true;
      goi('/api/farm/ld/cau', {}).then(function (x) { LD.d.cau = x.cau; veBang(); }, function (e) { len.disabled = false; bao(e.message, 'loi'); });
    });
    if (r.cau && $('#ntLdHop', than)) ganCauChu(than, function (chon) { return goi('/api/farm/ld/tl', { chon: chon }); }, function (x) {
      LD.d.cau = x.cau;
      if (x.diem) { LD.d.conNgay = Math.max(0, LD.d.conNgay - 1); bayLen($('#ntLdHop'), '+1 ⚔'); }
      if (!x.cau) { bao('⚔ Hết lượt 10 câu! Lên đài tiếp để góp thêm điểm cho lớp.'); LD.d = null; }
      if (bangDang && bangDang.loai === 'loidai') veBang();
    });
  }

  /* ---------------- Du khach hoi duong 游客 ---------------- */
  var DK = { d: null, ket: null, khoa: false };
  var DK_AV = { gt: 'nam', toc: 'ngan', mt: 1, ao: 'somi', ma: 3, duoi: 'short', md: 2, mu: 'luoi', mm: 4, kinh: 'den', da: 1, pk: 'balo', mat: '', mp: 2 };
  function svgDuKhach() { try { return NV.svg(DK_AV); } catch (e) { return NV.svg(NV.macDinh('du-khach')); } }
  function nutDuKhach() {
    var hop = $('#ntTtCt');
    if (!hop) return;
    var b = $('#ntDkNut');
    if (!b) {
      b = document.createElement('button');
      b.type = 'button'; b.id = 'ntDkNut'; b.className = 'nt-dk-nut'; b.setAttribute('data-tt', 'dk');
      hop.insertAdjacentElement('afterend', b);
    }
    var con = DK.d ? DK.d.toiDa - DK.d.luot + (DK.d.dang ? 1 : 0) : 3;
    b.hidden = con <= 0;
    b.innerHTML = '<span class="nt-dk-nv" aria-hidden="true">' + svgDuKhach() + '</span><span class="nt-dk-bong"><b lang="zh">请问…</b><small>Du khách hỏi đường · ' + con + ' lượt hôm nay</small></span>';
  }
  function taiDk() { return goi('/api/farm/dukhach').then(function (r) { DK.d = r; nutDuKhach(); return r; }); }
  function veDuKhach(than) {
    $('#ntBangTit').textContent = 'Du khách hỏi đường 游客';
    datTab([], '');
    var r = DK.d;
    if (!r) { than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; taiDk().then(function () { if (bangDang && bangDang.loai === 'dukhach') veBang(); }); return; }
    if (DK.ket) {
      var k = DK.ket;
      than.innerHTML = '<div class="nt-ch-kq"><div class="nt-ch-diem"><b>' + k.dung + '/' + k.so + '</b><span>' + (k.dung === k.so ? '谢谢你！Cảm ơn nhiều!' : 'Du khách đã tìm được đường!') + '</span></div>' +
        '<p class="nt-ch-con">+' + (k.dung * r.xu) + ' xu' + (k.thuong ? ' · trả lời đúng hết thưởng thêm <b>+' + k.thuong + ' xu</b>' : '') + '</p>' +
        '<div class="nt-hang-nut">' + (k.conLuot > 0 ? '<button type="button" class="nt-nut nt-nut-xanh" id="ntDkMoi">Đón đoàn khách tiếp (' + k.conLuot + ')</button>' : '<p class="nt-ch-con">Hết khách hôm nay — mai có đoàn mới!</p>') + '</div></div>';
      var m = $('#ntDkMoi', than);
      if (m) m.addEventListener('click', function () { DK.ket = null; donDk(m); });
      return;
    }
    if (!r.dang) {
      var con = r.toiDa - r.luot;
      than.innerHTML = '<div class="nt-dk-moi"><span class="nt-dk-nv to" aria-hidden="true">' + svgDuKhach() + '</span>' +
        '<p><b lang="zh">你好！我是游客。</b> Nǐ hǎo! Wǒ shì yóukè. — Chào bạn, mình là du khách.</p>' +
        '<p class="nt-meo">Du khách Trung Quốc ghé thị trấn và hỏi đường bằng tiếng Trung. Nhìn bản đồ, chọn câu trả lời đúng với <b lang="zh">左边 · 右边 · 前边 · 后边</b>. Mỗi câu đúng <b>+' + r.xu + ' xu</b>, đúng cả ' + r.so + ' câu thưởng thêm <b>+' + r.thuong + ' xu</b>.</p>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" id="ntDkMoi"' + (con > 0 ? '' : ' disabled') + '>' + (con > 0 ? 'Đón du khách (' + con + '/' + r.toiDa + ')' : 'Hết khách hôm nay') + '</button></div></div>';
      var b = $('#ntDkMoi', than);
      if (b) b.addEventListener('click', function () { donDk(b); });
      return;
    }
    var dg = r.dang, q = dg.cau;
    var oi = q.k === 'nao' ? q.o : -1;
    var banDo = '<div class="nt-dk-ban"><span class="nt-dk-huong tren" lang="zh">↑ 前边</span><div class="nt-dk-luoi">' + dg.bd.map(function (n, i) {
      var an = i === oi;
      return '<div class="nt-dk-o' + (an ? ' sang' : '') + '"><img src="/images/wu/' + n.hinh + '.png" alt="" draggable="false">' +
        (an ? '<b>？</b>' : '<b lang="zh">' + esc(n.zh) + '</b><small>' + esc(n.py) + '</small>') + '</div>';
    }).join('') + '</div><span class="nt-dk-huong duoi" lang="zh">后边 ↓</span><span class="nt-dk-huong trai" lang="zh">←<br>左边</span><span class="nt-dk-huong phai" lang="zh">→<br>右边</span></div>';
    var laTen = q.k !== 'o';
    than.innerHTML = '<div class="nt-ch-dau"><span>🧳 Câu ' + (dg.i + 1) + '/' + dg.so + '</span><span>✔ ' + dg.dung + '</span></div>' + banDo +
      '<div class="nt-dk-hoi"><span class="nt-dk-nv" aria-hidden="true">' + svgDuKhach() + '</span><button type="button" class="nt-dk-loi" data-doc="' + esc(q.hoi.zh) + '"><b lang="zh">' + esc(q.hoi.zh) + '</b><i>' + esc(q.hoi.py) + '</i><span>' + esc(q.hoi.vn) + ' 🔊</span></button></div>' +
      '<div class="nt-ch-lua' + (laTen ? ' zh' : ' nt-dk-cau') + '">' + q.lua.map(function (l, j) {
        return '<button type="button" data-dk="' + j + '"><b lang="zh">' + esc(l.zh) + '</b>' + (laTen ? '' : '<small>' + esc(l.py) + '</small>') + '</button>';
      }).join('') + '</div><p class="nt-ch-giai" id="ntDkGiai" aria-live="polite"></p>';
    $all('img', than).forEach(ganLoiAnh);
    doc(q.hoi.zh);
    DK.khoa = false;
    $all('[data-dk]', than).forEach(function (bt) {
      bt.addEventListener('click', function () {
        if (DK.khoa) return;
        DK.khoa = true;
        var chon = +bt.getAttribute('data-dk');
        goi('/api/farm/dukhach/tl', { chon: chon }).then(function (x) {
          $all('[data-dk]', than).forEach(function (y, j) { y.disabled = true; y.classList.add(j === x.dap ? 'dung' : j === chon ? 'sai' : 'mo'); });
          tieng(x.dung ? 'dung' : 'sai');
          $('#ntDkGiai', than).innerHTML = (x.dung ? '对！' : 'Đáp án: ') + '<b lang="zh">' + esc(x.zh) + '</b>' + (x.xu ? ' · +' + x.xu + ' xu' : '');
          doc(x.zh);
          nhanTrangThai(x.st);
          DK.d.dang = x.dang && x.dang.cau ? x.dang : null;
          if (x.ketThuc) { DK.ket = x.ketThuc; DK.d.luot = DK.d.toiDa - x.ketThuc.conLuot; if (x.ketThuc.thuong) tieng('len'); }
          setTimeout(function () { nutDuKhach(); if (bangDang && bangDang.loai === 'dukhach') veBang(); }, x.dung ? 1500 : 2400);
        }, function (e) { DK.khoa = false; bao(e.message, 'loi'); DK.d = null; });
      });
    });
  }
  function donDk(b) {
    b.disabled = true;
    goi('/api/farm/dukhach/moi', {}).then(function (x) { DK.d.dang = x.dang; DK.d.luot = x.luot; DK.ket = null; nutDuKhach(); veBang(); }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
  }

  /* ---------------- Bang tin 公告栏 + cay uoc nguyen 许愿树 ---------------- */
  var BT = { d: null, m: -1, x: '', w: -1 };
  function tuBt(o, x) {
    var c = S.cat;
    if (o === 'con') return c.CON[x] || { zh: '', py: '', vn: x };
    if (o === 'sp') return c.SP[x] || { zh: '', py: '', vn: x };
    return (c.TIN_TU[o] || []).filter(function (w) { return w.k === x; })[0] || { zh: '', py: '', vn: x };
  }
  function cauBt(m, x) {
    var mau = BT.d.mau[m];
    if (!mau.o) return mau;
    var w = tuBt(mau.o, x), vn = mau.vn.replace('{x}', String(w.vn).toLowerCase());
    return { zh: mau.zh.replace('{x}', w.zh), py: mau.py.replace('{x}', w.py), vn: vn.charAt(0).toUpperCase() + vn.slice(1) };
  }
  function taiBt() {
    return goi('/api/farm/bangtin').then(function (r) { BT.d = r; if (bangDang && bangDang.loai === 'bangtin') veBang(); }, function (e) { var t = $('#ntBangThan'); if (t) t.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
  }
  function veBangTin(than) {
    var tab = bangDang.tab || 'bt';
    bangDang.tab = tab;
    $('#ntBangTit').textContent = tab === 'uoc' ? 'Cây ước nguyện 许愿树' : 'Bảng tin thị trấn 公告栏';
    datTab([['bt', 'Bảng tin'], ['uoc', 'Cây ước nguyện']], tab);
    if (!BT.d) { than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; taiBt(); return; }
    var r = BT.d, html = '';
    if (tab === 'uoc') {
      var emUoc = r.uoc.filter(function (u) { return u.la; })[0];
      html = '<div class="nt-uoc-cay"><img src="' + anh('cay-lon') + '" alt="" draggable="false"><div class="nt-uoc-dai">' + r.uoc.slice(0, 18).map(function (u, i) {
        return '<span class="nt-uoc-bang b' + (i % 4) + (u.la ? ' la' : '') + '" title="' + esc(u.ten) + '">' + esc(NV.tenNgan ? NV.tenNgan(u.ten) : u.ten) + '</span>';
      }).join('') + '</div></div>' +
        '<p class="nt-meo">Treo một điều ước bằng tiếng Trung lên cây của ' + esc(r.pham) + ' (lần đầu +2 xu). Bấm ❤ để "cùng ước" với bạn. Mẫu câu: <b lang="zh">我希望…</b> wǒ xīwàng — mình mong…</p>';
      html += '<h4 class="nt-cn-h">' + (emUoc ? 'Đổi điều ước của em (mỗi ngày 1 lần)' : 'Chọn điều ước của em') + '</h4><ul class="nt-tin-ds">' + r.uocMau.map(function (m, i) {
        return '<li class="' + (BT.w === i ? 'bat' : '') + '">' + htmlCau(m) + '<button type="button" class="nt-mua" data-uoc="' + i + '">' + (emUoc && emUoc.w === i ? '✓ Đang treo' : 'Treo') + '</button></li>';
      }).join('') + '</ul>';
      html += '<h4 class="nt-cn-h">Điều ước trên cây (' + r.uoc.length + ')</h4>' + (r.uoc.length ? '<ul class="nt-bt-ds">' + r.uoc.map(function (u) {
        var m = r.uocMau[u.w] || { zh: '', py: '', vn: '' };
        return '<li class="' + (u.la ? 'la' : '') + '">' + anhNv(u.av, u.ai) + '<div><b>' + esc(u.ten) + (u.la ? ' (em)' : '') + '</b>' + htmlCau(m, 'nho') + '</div>' +
          (u.la ? '<span class="nt-bt-tim">❤ ' + u.cung + '</span>' : '<button type="button" class="nt-bt-tim' + (u.daCung ? ' bat' : '') + '" data-cung="' + esc(u.ai) + '">❤ ' + u.cung + '</button>') + '</li>';
      }).join('') + '</ul>' : '<p class="nt-trong">Cây còn trống — em treo điều ước đầu tiên nhé!</p>');
    } else {
      html = '<p class="nt-meo">Bảng tin của <b>' + esc(r.pham) + '</b>: ghép câu tiếng Trung để nhắn cả lớp. Hôm nay còn đăng được <b>' + r.conDang + '</b> tin (tin đầu ngày +1 xu).</p>';
      if (r.conDang > 0) {
        if (BT.m < 0) {
          html += '<p class="nt-tin-buoc">Bước 1 · Chọn mẫu câu</p><ul class="nt-tin-ds">' + r.mau.map(function (m, i) {
            return '<li>' + htmlCau(m.o ? { zh: m.zh.replace('{x}', '＿＿'), py: m.py.replace('{x}', '…'), vn: m.vn.replace('{x}', '…') } : m) + '<button type="button" class="nt-mua" data-btmau="' + i + '">Chọn</button></li>';
          }).join('') + '</ul>';
        } else {
          var mau = r.mau[BT.m], ds = mau.o ? r.tuMau[mau.o] : [];
          if (mau.o && ds.indexOf(BT.x) < 0) BT.x = ds[0];
          html += (mau.o ? '<p class="nt-tin-buoc">Bước 2 · Chọn từ điền vào chỗ trống <a href="#" data-btlai>← đổi mẫu câu</a></p><div class="nt-tin-tu">' + ds.map(function (k) {
            var w = tuBt(mau.o, k);
            return '<button type="button" class="' + (k === BT.x ? 'bat' : '') + '" data-btx="' + esc(k) + '" data-doc="' + esc(w.zh) + '"><b lang="zh">' + esc(w.zh) + '</b><small>' + esc(w.py) + ' · ' + esc(w.vn) + '</small></button>';
          }).join('') + '</div>' : '<p class="nt-tin-buoc"><a href="#" data-btlai>← đổi mẫu câu</a></p>') +
            '<p class="nt-tin-buoc">Xem trước</p>' + htmlCau(cauBt(BT.m, BT.x)) +
            '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntBtDang">📌 Đăng lên bảng tin</button></div>';
        }
      }
      html += '<h4 class="nt-cn-h">Tin mới</h4>' + (r.bt.length ? '<ul class="nt-bt-ds">' + r.bt.map(function (x) {
        return '<li class="' + (x.la ? 'la' : '') + '">' + anhNv(x.av, x.ai) + '<div><b>' + esc(x.ten) + (x.la ? ' (em)' : '') + ' <small>' + luc(x.t) + '</small></b>' + htmlCau(cauBt(x.m, x.x), 'nho') + '</div>' +
          '<span class="nt-bt-nut"><button type="button" class="nt-bt-tim' + (x.daTim ? ' bat' : '') + '" data-bttim="' + esc(x.id) + '">❤ ' + x.tim + '</button>' +
          (x.la ? '<button type="button" class="nt-link" data-btxoa="' + esc(x.id) + '">Xoá</button>' : '') + '</span></li>';
      }).join('') + '</ul>' : '<p class="nt-trong">Bảng tin còn trống — em đăng tin đầu tiên nhé!</p>');
    }
    than.innerHTML = html;
    $all('img', than).forEach(ganLoiAnh);
    $all('[data-btmau]', than).forEach(function (b) { b.addEventListener('click', function () { BT.m = +b.getAttribute('data-btmau'); BT.x = ''; veBang(); }); });
    $all('[data-btlai]', than).forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); BT.m = -1; veBang(); }); });
    $all('[data-btx]', than).forEach(function (b) { b.addEventListener('click', function () { BT.x = b.getAttribute('data-btx'); veBang(); }); });
    var dang = $('#ntBtDang', than);
    if (dang) dang.addEventListener('click', function () {
      dang.disabled = true;
      goi('/api/farm/bangtin/dang', { m: BT.m, x: BT.x }).then(function (x) {
        nhanTrangThai(x.st); tieng('dung'); doc(cauBt(BT.m, BT.x).zh);
        bao('📌 Đã đăng lên bảng tin' + (x.xu ? ' · +1 xu' : ''));
        BT.m = -1; taiBt();
      }, function (e) { dang.disabled = false; bao(e.message, 'loi'); });
    });
    $all('[data-bttim]', than).forEach(function (b) {
      b.addEventListener('click', function () { goi('/api/farm/bangtin/tim', { id: b.getAttribute('data-bttim') }).then(function () { taiBt(); }, function (e) { bao(e.message, 'loi'); }); });
    });
    $all('[data-btxoa]', than).forEach(function (b) {
      b.addEventListener('click', function () { goi('/api/farm/bangtin/xoa', { id: b.getAttribute('data-btxoa') }).then(function () { taiBt(); }, function (e) { bao(e.message, 'loi'); }); });
    });
    $all('[data-uoc]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        var w = +b.getAttribute('data-uoc');
        goi('/api/farm/uoc', { w: w }).then(function (x) {
          if (x.st) nhanTrangThai(x.st);
          tieng('len'); doc(r.uocMau[w].zh);
          bao('🎋 Đã treo điều ước lên cây' + (x.xu ? ' · +' + x.xu + ' xu' : ''));
          taiBt();
        }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
      });
    });
    $all('[data-cung]', than).forEach(function (b) {
      b.addEventListener('click', function () { goi('/api/farm/uoc/cung', { ai: b.getAttribute('data-cung') }).then(function () { taiBt(); }, function (e) { bao(e.message, 'loi'); }); });
    });
  }

  // Dang xem thi tran lop khac: dai ten + co vu + ve thi tran lop em; an Cho lop
  function veDaiKhach() {
    var r = thiTran, dai = $('#ntTtKhach');
    var khach = !!(r && r.lop && !r.cuaEm);
    $('[data-tt="cho"]', $('#ntThiTran')).hidden = khach || !(r && r.lop);
    if (!dai) {
      dai = document.createElement('div');
      dai.className = 'nt-tt-khach'; dai.id = 'ntTtKhach';
      $('#ntTtQuang').insertAdjacentElement('beforebegin', dai);
    }
    dai.hidden = !khach;
    if (!khach) return;
    var cv = r.covu || { n: 0, daCoVu: false, con: 0 };
    dai.innerHTML = '<p>Em đang tham quan thị trấn <b>' + esc(r.lop) + '</b> · 📣 <b>' + cv.n + '</b> lượt cổ vũ tuần này</p>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-vang" id="ntTtCoVu"' + (cv.daCoVu || cv.con <= 0 ? ' disabled' : '') + '>' +
      (cv.daCoVu ? '✓ Đã cổ vũ hôm nay' : cv.con <= 0 ? 'Hết lượt cổ vũ hôm nay' : '📣 Cổ vũ: 加油！(+1 xu)') + '</button>' +
      '<button type="button" class="nt-nut nt-nut-xanh" data-tt="nha">← Thị trấn lớp em</button></div>';
    var nut = $('#ntTtCoVu', dai);
    nut.addEventListener('click', function () {
      nut.disabled = true;
      goi('/api/farm/covu/' + encodeURIComponent(r.lopId), {}).then(function (kq) {
        nhanTrangThai(kq.st); tieng('len'); doc('加油！');
        r.covu = { n: kq.n, daCoVu: true, con: cv.con - 1 };
        bao('📣 加油！Em đã cổ vũ ' + r.lop + ' · +1 xu · ' + kq.ngay + '/' + kq.canNgay + ' ngày tuần này' + (kq.qua ? ' · 🎁 Đủ ' + kq.canNgay + ' ngày: ' + tenQua(kq.qua).vn + '!' : ''));
        veDaiKhach();
      }, function (e) { nut.disabled = false; bao(e.message, 'loi'); });
    });
  }
  function veCacThiTran(than) {
    $('#ntBangTit').textContent = 'Thị trấn các lớp';
    datTab([], '');
    than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
    Promise.all([goi('/api/farm/cacthitran'), taiThuongTt()]).then(function (kq) {
      var r = kq[0];
      if (!bangDang || bangDang.loai !== 'cacthitran') return;
      var lopEm = r.ds.filter(function (c) { return c.la; })[0];
      var html = htmlThuongTt(lopEm) + '<p class="nt-meo">Mỗi lớp cùng xây một thị trấn. <b>Điểm thị trấn</b> = tổng điểm đẹp các nông trại + <b>150</b> cho mỗi công trình chung đã xây + sao học của cả lớp tuần này. Sang tham quan và <b>cổ vũ 加油</b> các lớp bạn (còn ' + r.conCoVu + ' lượt hôm nay, mỗi lượt +1 xu)!</p>';
      if (!r.ds.length) html += '<p class="nt-trong">Chưa có lớp nào mở nông trại.</p>';
      html += '<ol class="nt-cac-tt">' + r.ds.map(function (c) {
        return '<li class="' + (c.la ? 'la' : '') + '"><div class="nt-cac-dau"><span class="nt-cac-hang">' + (c.hang <= 3 ? ['🥇', '🥈', '🥉'][c.hang - 1] : '#' + c.hang) + '</span>' +
          '<div class="nt-cac-ten"><b>' + esc(c.ten) + (c.la ? ' <em>lớp em</em>' : '') + '</b><small><span lang="zh">' + esc(c.cap.zh) + '</span> ' + esc(c.cap.vn) + ' · ' + c.soNt + '/' + c.so + ' bạn có nông trại · 📣 ' + c.covu + ' cổ vũ</small>' +
          (c.hangTuanTruoc || c.yeuMen || c.loiChu ? '<small class="nt-cac-dh">' + [c.hangTuanTruoc ? ['🏆 Vô địch', '🥈 Hạng 2', '🥉 Hạng 3'][c.hangTuanTruoc - 1] + ' tuần trước' : '', c.yeuMen ? '❤ Được yêu mến nhất' : '', c.loiChu ? '⚔ Lôi chủ' : ''].filter(Boolean).join(' · ') + '</small>' : '') + '</div>' +
          '<span class="nt-cac-diem"><b>' + c.diem.toLocaleString('vi-VN') + '</b><small>điểm</small></span></div>' +
          '<div class="nt-cac-nv">' + c.nv.map(function (n) { return anhNv(n.av, n.id); }).join('') + '</div>' +
          '<div class="nt-cac-so"><span>🌸 Đẹp <b>' + c.dep + '</b></span><span>⭐ Sao tuần <b>' + c.saoTuan + '</b></span><span>🏛 Công trình <b>' + c.xay.length + '</b></span></div>' +
          (c.xay.length ? '<div class="nt-cac-ct">' + c.xay.map(function (x) { return '<img src="' + anh(x.k) + '" alt="' + esc(x.vn) + '" title="' + esc(x.zh + ' · ' + x.vn) + '" draggable="false">'; }).join('') + '</div>' : '') +
          (c.dang ? '<p class="nt-cn-nho">Đang xây <span lang="zh">' + esc(c.dang.zh) + '</span> ' + esc(c.dang.vn) + ' · ' + c.dang.pct + '%</p>' + thanhTien(c.dang.pct, 100) : '') +
          '<div class="nt-hang-nut"><button type="button" class="nt-nut' + (c.la ? ' nt-nut-xanh' : ' nt-nut-vang') + '" data-xem-tt="' + esc(c.id) + '">' + (c.la ? 'Về thị trấn lớp em' : '🏙 Tham quan') + '</button></div></li>';
      }).join('') + '</ol>';
      than.innerHTML = html;
      $all('img', than).forEach(ganLoiAnh);
      ganThuongTt(than);
      $all('[data-xem-tt]', than).forEach(function (b) {
        b.addEventListener('click', function () { var id = b.getAttribute('data-xem-tt'); moThiTran(id === r.lopEm ? '' : id); });
      });
    }, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
  }
  function dongThiTran() {
    dongHoCau();
    anNoiDan();
    $('#ntThiTran').hidden = true;
    document.body.classList.remove('o-thi-tran');
    nutVeTrang();
  }
  function veNutThu() {
    var n = S.st ? S.st.nkMoi || 0 : 0;
    $('#ntTtThu').textContent = '📜 Nhật ký' + (n ? ' (' + n + ' mới)' : '');
  }
  function veThiTran() {
    var r = thiTran;
    veDaiKhach();
    veTroiTt();
    if (!r.lop) {
      $('#ntTtTen').textContent = 'Thị trấn của lớp em';
      $('#ntTtPhu').textContent = 'chưa có bạn nào';
      $('#ntTtLuoi').innerHTML = '<p class="nt-trong">Em chưa vào lớp nào. Nhập mã lớp cô giáo cho ở trang học — nông trại của em sẽ có một lô đất trong thị trấn của lớp.<br><br><button type="button" class="nt-nut nt-nut-vang" data-tt="cac">🏙 Xem thị trấn các lớp</button></p>';
      veCtThiTran();
      return;
    }
    var tong = r.ds.reduce(function (s, b) { return s + (b.dep || 0); }, 0);
    veCapThiTran(r);
    $('#ntTtTen').textContent = 'Thị trấn ' + r.lop;
    $('#ntTtPhu').textContent = r.ds.length + ' nông trại · tổng điểm đẹp ' + tong;
    var luoi = $('#ntTtLuoi');
    chuanBiDan(r);
    veTroiTt();
    veQuangTruong();
    veDanQuang();
    veCtThiTran();
    if (r.cuaEm) taiDk().catch(function () {}); else { var dkn = $('#ntDkNut'); if (dkn) dkn.hidden = true; }
    // so lo moi hang theo be rong man hinh -> chen 1 con pho truoc moi hang
    var cot = soCotTt = soCot(luoi), html = '', hang = 0, dung = 0;
    // trang trai lon chiem 2 o; xep lan luot, o lon khong vua cho trong thi lay lo nho ke tiep chen vao
    var cho = r.ds.map(function (b, i) { return { b: b, i: i, u: laDatLon(b) ? Math.min(2, cot) : 1 }; });
    while (cho.length) {
      if (dung === 0) html += hangPho(hang++);
      var j = -1;
      for (var k = 0; k < cho.length; k++) if (cho[k].u <= cot - dung) { j = k; break; }
      if (j < 0) { dung = 0; continue; }
      var x = cho.splice(j, 1)[0];
      html += oPho(x.b, x.i, x.u > 1);
      dung += x.u;
      if (dung >= cot) dung = 0;
    }
    luoi.innerHTML = html + hangPho(hang);
    $all('img', luoi).forEach(ganLoiAnh);
  }
  // Duong pho: moi hang lo dat la 1 con pho mang ten tieng Trung (bam vao bien de nghe doc)
  var PHO = [
    { zh: '学习路', py: 'Xuéxí Lù', vn: 'Đường Học Tập' },
    { zh: '友谊街', py: 'Yǒuyì Jiē', vn: 'Phố Hữu Nghị' },
    { zh: '幸福路', py: 'Xìngfú Lù', vn: 'Đường Hạnh Phúc' },
    { zh: '春天街', py: 'Chūntiān Jiē', vn: 'Phố Mùa Xuân' },
    { zh: '汉字路', py: 'Hànzì Lù', vn: 'Đường Chữ Hán' },
    { zh: '熊猫街', py: 'Xióngmāo Jiē', vn: 'Phố Gấu Trúc' },
    { zh: '花园路', py: 'Huāyuán Lù', vn: 'Đường Vườn Hoa' },
    { zh: '月亮街', py: 'Yuèliang Jiē', vn: 'Phố Mặt Trăng' },
  ];
  var VEN_DUONG = ['tung', 'chau-hoa', 'hoa-do', 'truc', 'cay-dao', 'ghe', 'hoa-vang', 'cay-cam', 'hoa-tim', 'bu-nhin'];
  var DI_DAO = ['ga', 'vit', 'cuu', 'bo'];
  var QUANG_TRUONG = ['tung', 'den-long', 'hoa-do', 'chau-hoa', 'gieng', 'dinh', 'xich-du', 'chau-hoa', 'hoa-vang', 'den-long', 'truc'];
  var soCotTt = 0;
  function hangPho(i) {
    var p = PHO[i % PHO.length];
    // vai con pho co con vat di dao qua (moi pho mot con, lech nhip cho tu nhien)
    var dao = i % 2 === 0 ? '<span class="nt-pho-dao' + (i % 4 === 2 ? ' nguoc' : '') + '" style="animation-delay:-' + (i * 7 % 23) + 's">' + img(DI_DAO[(i / 2) % DI_DAO.length]) + '</span>' : '';
    return '<div class="nt-pho"><i class="nt-pho-vach" aria-hidden="true"></i>' +
      '<button type="button" class="nt-pho-bien" data-doc="' + esc(p.zh) + '" aria-label="' + esc(p.vn) + ' — nghe đọc"><b lang="zh">' + esc(p.zh) + '</b><small>' + esc(p.py) + ' · ' + esc(p.vn) + '</small></button>' +
      dao + danPho(i) + '</div>';
  }
  function laDatLon(b) { return !!(b.co && b.kich && b.kich.w >= 20); }
  function oPho(b, i, to) {
    // ven duong: den long goc tren, cay / chau hoa goc duoi (moi lo mot kieu)
    return '<div class="nt-o-pho' + (to ? ' to' : '') + '">' + loDat(b, i) +
      '<img class="nt-vd nt-vd-den" src="' + anh('den-long') + '" alt="" draggable="false">' +
      '<img class="nt-vd nt-vd-cay" src="' + anh(VEN_DUONG[(i * 3 + 1) % VEN_DUONG.length]) + '" alt="" draggable="false"></div>';
  }
  function veQuangTruong() {
    var q = $('#ntTtQuang');
    if (q.childElementCount) return;
    q.innerHTML = QUANG_TRUONG.map(function (k) {
      return '<img class="' + (S.cat.TT[k] && S.cat.TT[k].w ? 'lon' : '') + '" src="' + anh(k) + '" alt="" draggable="false">';
    }).join('');
  }
  function soCot(luoi) {
    return (getComputedStyle(luoi).gridTemplateColumns || '').split(' ').filter(Boolean).length || 1;
  }


  /* ---------------- Cu dan di lai trong thi tran ---------------- */
  // Cu dan co san (khong phai hoc sinh) — moi nguoi mot vai va vai cau tieng Trung HSK1-2; ban cung lop cung di dao tren pho
  var DAN_NPC = [
    { ten: '王奶奶', py: 'Wáng nǎinai', vn: 'Bà Vương', av: { gt: '', toc: 'bui', mt: 5, ao: 'aodai', ma: 6, duoi: 'dai', md: 1, mu: '', mm: 0, kinh: 'tron', da: 0, pk: 'quat', mat: '', mp: 1 },
      noi: [['你好！吃饭了吗？', 'Nǐ hǎo! Chīfàn le ma?', 'Chào cháu! Cháu ăn cơm chưa?'], ['今天天气真好！', 'Jīntiān tiānqì zhēn hǎo!', 'Hôm nay trời đẹp quá!'], ['慢点儿走！', 'Màn diǎnr zǒu!', 'Đi chậm thôi cháu!']] },
    { ten: '邮递员', py: 'yóudìyuán', vn: 'Bác đưa thư', av: { gt: 'nam', toc: 'ngan', mt: 0, ao: 'somi', ma: 4, duoi: 'dai', md: 0, mu: 'luoi', mm: 3, kinh: '', da: 1, pk: 'tui', mat: '', mp: 4 },
      noi: [['这是你的信！', 'Zhè shì nǐ de xìn!', 'Thư của cháu đây!'], ['我今天很忙。', 'Wǒ jīntiān hěn máng.', 'Hôm nay bác bận lắm.'], ['再见！', 'Zàijiàn!', 'Tạm biệt!']] },
    { ten: '小明', py: 'Xiǎo Míng', vn: 'Bé Minh', av: { gt: 'nam', toc: 'dinh', mt: 0, ao: 'thun', ma: 1, duoi: 'short', md: 2, mu: 'nguoc', mm: 2, kinh: '', da: 1, pk: 'bongbay', mat: 'tit', mp: 3 },
      noi: [['我们一起玩吧！', 'Wǒmen yìqǐ wán ba!', 'Mình cùng chơi nhé!'], ['我今天学了十个汉字！', 'Wǒ jīntiān xué le shí ge Hànzì!', 'Hôm nay mình học được mười chữ Hán!'], ['你几岁？', 'Nǐ jǐ suì?', 'Bạn mấy tuổi?']] },
    { ten: '李老师', py: 'Lǐ lǎoshī', vn: 'Cô giáo Lý', av: { gt: '', toc: 'dai', mt: 0, ao: 'khoac', ma: 2, duoi: 'vay', md: 5, mu: '', mm: 0, kinh: 'vuong', da: 0, pk: 'sach', mat: '', mp: 0 },
      noi: [['同学们好！', 'Tóngxuémen hǎo!', 'Chào các em!'], ['你今天学习了吗？', 'Nǐ jīntiān xuéxí le ma?', 'Hôm nay em học bài chưa?'], ['加油！', 'Jiāyóu!', 'Cố lên!']] },
    { ten: '张爷爷', py: 'Zhāng yéye', vn: 'Ông Trương', av: { gt: 'nam', toc: 'ngan', mt: 5, ao: 'vest', ma: 7, duoi: 'dai', md: 7, mu: 'no', mm: 6, kinh: 'tron', da: 2, pk: '', mat: '', mp: 0 },
      noi: [['早上好！', 'Zǎoshang hǎo!', 'Chào buổi sáng!'], ['我去公园。', 'Wǒ qù gōngyuán.', 'Ông đi công viên.'], ['你们的小镇真漂亮！', 'Nǐmen de xiǎozhèn zhēn piàoliang!', 'Thị trấn của các cháu đẹp thật!']] },
    { ten: '小红', py: 'Xiǎo Hóng', vn: 'Bé Hồng', av: { gt: '', toc: 'duoi', mt: 2, ao: 'thun', ma: 0, duoi: 'vay', md: 0, mu: 'hoa', mm: 1, kinh: '', da: 0, pk: 'denlong', mat: 'nhay', mp: 0 },
      noi: [['你看，我的灯笼！', 'Nǐ kàn, wǒ de dēnglong!', 'Bạn xem, đèn lồng của mình này!'], ['我喜欢熊猫。', 'Wǒ xǐhuan xióngmāo.', 'Mình thích gấu trúc.'], ['明天见！', 'Míngtiān jiàn!', 'Mai gặp nhé!']] },
    { ten: '陈叔叔', py: 'Chén shūshu', vn: 'Chú Trần', av: { gt: 'nam', toc: 'xu', mt: 1, ao: 'thethao', ma: 5, duoi: 'dai', md: 3, mu: 'tainghe', mm: 2, kinh: '', da: 1, pk: 'balo', mat: '', mp: 5 },
      noi: [['我去火车站。', 'Wǒ qù huǒchēzhàn.', 'Chú ra ga tàu.'], ['你好！你是学生吗？', 'Nǐ hǎo! Nǐ shì xuésheng ma?', 'Chào cháu! Cháu là học sinh à?'], ['多喝水！', 'Duō hē shuǐ!', 'Uống nhiều nước nhé!']] },
  ];
  var DAN = [];
  function svgDan(av, id) { try { return NV.svg(Object.assign({}, NV.macDinh(id || 'dan'), av || {})); } catch (e) { return NV.svg(NV.macDinh(id || 'dan')); } }
  function chuanBiDan(r) {
    // tron cu dan co san + toi da 6 ban cung lop co nong trai
    var ban = tron((r.ds || []).filter(function (b) { return b.co; })).slice(0, 6).map(function (b) {
      return { ten: (NV.tenNgan ? NV.tenNgan(b.ten) : b.ten), av: b.av || NV.macDinh(b.id), id: b.id, ban: true };
    });
    DAN = tron(DAN_NPC.map(function (n, i) { return { ten: n.ten, py: n.py, vn: n.vn, av: n.av, noi: n.noi, id: 'npc' + i }; }).concat(ban));
  }
  function htmlDan(d, j, cls, toc, tre) {
    return '<button type="button" class="nt-dan ' + cls + '" data-dan="' + j + '" style="animation-duration:' + toc + 's;animation-delay:-' + tre + 's;--x:' + (8 + (j * 37) % 80) + '%" aria-label="' + esc(d.ban ? d.ten : d.vn) + ' — bấm để nghe nói">' +
      '<span class="nt-dan-nv">' + svgDan(d.av, d.id) + '</span><span class="nt-dan-ten' + (d.ban ? ' ban' : '') + '">' + esc(d.ban ? d.ten : d.ten) + '</span></button>';
  }
  // 1-2 nguoi di qua moi con pho, toc do va huong khac nhau
  function danPho(i) {
    if (!DAN.length) return '';
    var a = DAN[(i * 2) % DAN.length], b = DAN[(i * 2 + 1) % DAN.length];
    return htmlDan(a, (i * 2) % DAN.length, i % 2 ? 'nguoc' : '', 30 + (i * 7) % 14, (i * 11) % 29) +
      (i % 3 !== 2 && DAN.length > 1 ? htmlDan(b, (i * 2 + 1) % DAN.length, i % 2 ? '' : 'nguoc', 38 + (i * 5) % 12, (i * 13 + 9) % 37) : '');
  }
  function veDanQuang() {
    var q = $('#ntTtQuang');
    if (!q || !DAN.length) return;
    var cu = $('#ntTtQuangDan');
    if (cu) cu.remove();
    var h = '<span class="nt-quang-dan" id="ntTtQuangDan">';
    for (var k = 0; k < Math.min(3, DAN.length); k++) {
      var j = (k * 3 + 2) % DAN.length;
      h += htmlDan(DAN[j], j, 'dao' + (k % 2 ? ' nguoc' : ''), 16 + k * 5, k * 6);
    }
    q.insertAdjacentHTML('beforeend', h + '</span>');
  }
  // Bam vao cu dan: dung lai, noi 1 cau tieng Trung (co pinyin, nghia, doc to)
  var danHen = null;
  function noiDan(el) {
    var d = DAN[+el.getAttribute('data-dan')];
    if (!d) return;
    var cau;
    if (d.noi) { var n = d.noi[Math.floor(Math.random() * d.noi.length)]; cau = { zh: n[0], py: n[1], vn: n[2] }; }
    else { var lc = (S.cat.LOI_CHAO || [])[Math.floor(Math.random() * (S.cat.LOI_CHAO || []).length)] || { zh: '你好！', py: 'Nǐ hǎo!', vn: 'Xin chào!' }; cau = lc; }
    $all('.nt-dan.dung').forEach(function (x) { x.classList.remove('dung'); });
    el.classList.add('dung');
    var b = $('#ntDanNoi');
    if (!b) { b = document.createElement('div'); b.id = 'ntDanNoi'; b.className = 'nt-dan-noi'; b.setAttribute('role', 'status'); document.body.appendChild(b); }
    b.innerHTML = '<small>' + esc(d.ban ? d.ten + ' (bạn cùng lớp)' : d.ten + ' ' + d.py + ' · ' + d.vn) + '</small><b lang="zh">' + esc(cau.zh) + '</b><i>' + esc(cau.py) + '</i><span>' + esc(cau.vn) + '</span>';
    b.hidden = false;
    var r = el.getBoundingClientRect(), w = Math.min(260, window.innerWidth - 16);
    b.style.width = w + 'px';
    b.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, r.left + r.width / 2 - w / 2)) + 'px';
    b.style.top = Math.max(8, r.top - b.offsetHeight - 8) + 'px';
    doc(cau.zh);
    clearTimeout(danHen);
    danHen = setTimeout(anNoiDan, 4500);
  }
  function anNoiDan() {
    var b = $('#ntDanNoi');
    if (b) b.hidden = true;
    $all('.nt-dan.dung').forEach(function (x) { x.classList.remove('dung'); });
  }
  // Bau troi theo gio that (gio Viet Nam): sang / chieu / toi
  function veTroiTt() {
    var tt = $('#ntThiTran');
    // thi tran luon sang
    tt.classList.remove('chieu', 'dem');
    if ($('#ntTtTroi')) return;
    var troi = document.createElement('div');
    troi.className = 'nt-tt-troi'; troi.id = 'ntTtTroi'; troi.setAttribute('aria-hidden', 'true');
    troi.innerHTML = '<i class="may m1"></i><i class="may m2"></i><i class="may m3"></i>' +
      '<svg class="chim" viewBox="0 0 60 20"><path d="M2 10q6-7 12 0q6-7 12 0M34 6q5-5 10 0q5-5 10 0" fill="none" stroke="#2b1d3a" stroke-width="2.4" stroke-linecap="round"/></svg>' +
      '<i class="sao s1"></i><i class="sao s2"></i><i class="sao s3"></i><i class="sao s4"></i><i class="sao s5"></i><i class="trang"></i>' +
      '<svg class="nui" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0 120V70q80-50 170-20t160-30 190 40 180-50 200 40 160-20 140 30v60z" fill="#7cc4a3"/><path d="M0 120V92q120-30 240 0t220-16 260 18 230-20 250 22v24z" fill="#5fae7f"/>' +
      '<g fill="#c0392b" stroke="#2b1d3a" stroke-width="3"><path d="M520 62h70l-12-14h-46z"/><rect x="532" y="62" width="46" height="26" fill="#f6ead2"/><path d="M880 70h56l-10-12h-36z"/><rect x="890" y="70" width="36" height="20" fill="#f6ead2"/></g></svg>';
    tt.insertBefore(troi, tt.firstChild);
  }
  var HUY_TT = ['🥇', '🥈', '🥉'];
  function loDat(b, hang) {
    var huy = hang < 3 && b.dep > 0 ? HUY_TT[hang] + ' ' : '';
    return '<button type="button" class="nt-lo' + (b.la ? ' la' : '') + '" data-lo="' + esc(b.id) + '" aria-label="Nông trại của ' + esc(b.ten) + '">' +
      '<div class="nt-lo-dat">' + (b.co ? farmNho(b) : '<div class="nt-lo-trong">Đất trống — chờ ' + esc(b.ten) + ' mở nông trại</div>') +
      '<span class="nt-lo-nv">' + NV.svg(b.av || NV.macDinh(b.id)) + '</span></div>' +
      '<div class="nt-lo-bien"><b>' + huy + huyHv(b.hv, true) + esc(b.ten) + (b.la ? ' (em)' : '') + '</b><small>' +
      (b.co ? 'Cấp ' + b.lv + ' · đẹp ' + b.dep + ' · ❤ ' + b.tim + (b.sap ? ' · 🛒 ' + b.sap : '') : 'Chưa mở nông trại') +
      (b.tuan ? ' · ⭐ ' + b.tuan + ' tuần' : '') + '</small>' +
      (laDatLon(b) ? '<span class="nt-lo-to">🏰 ' + (b.kich.w >= 28 ? 'Điền trang hoàng gia <span lang="zh">皇家庄园</span>' : b.kich.w >= 24 ? 'Điền trang <span lang="zh">庄园</span>' : 'Trang trại lớn <span lang="zh">大农场</span>') + ' · ' + b.kich.w + '×' + b.kich.h + '</span>' : '') + (b.vuaHoc ? '<span class="nt-lo-vua">👑 Chăm học nhất tuần</span>' : '') + '</div></button>';
  }
  // Ve thu nho: vi tri tinh theo % kich thuoc dat nen lo nao cung vua khung
  function farmNho(b) {
    var w = b.kich.w, h = b.kich.h;
    var html = '<div class="nt-nho" style="aspect-ratio:' + w + '/' + h + ';background-size:' + (200 / w) + '% ' + (200 / h) + '%">';
    b.o.slice().sort(function (a, c) { return (a.y + rong(a)) - (c.y + rong(c)) || a.x - c.x; }).forEach(function (o) {
      var r = rong(o), t = trangThai(o);
      var phang = o.k === 'o' || (S.cat.TT[o.k] && S.cat.TT[o.k].phang);
      html += '<img src="' + anh(t.hinh) + '" alt="" loading="lazy" draggable="false" style="left:' + (o.x * 100 / w) + '%;top:' + (o.y * 100 / h) + '%;width:' + (r * 100 / w) +
        '%;height:' + (r * 100 / h) + '%;z-index:' + (phang ? 1 : o.y + r + 1) + '">';
    });
    return html + '</div>';
  }

  /* ---------------- cau hoi on tu vung ---------------- */
  // Tu vung hop voi DUNG cap em dang hoc: may chu chon bai tu so lieu lam bai that cua em
  // (cap cua bai lam gan nhat, 4 bai gan day nhat); chua lam bai nao thi bai thay co giao / dau cap.
  var tuVung = null;
  var nguonTu = '';
  var khoBai = {};
  var tuHaySai = null; // chu Han em hay lam sai o cac bai on -> hoi lai nhieu hon
  function napBai(url) {
    if (khoBai[url]) return Promise.resolve(khoBai[url]);
    var src = url.replace('/lessons/', '/js/').replace('.html', '-data.js');
    return new Promise(function (resolve) {
      var ifr = document.createElement('iframe');
      ifr.style.display = 'none';
      document.body.appendChild(ifr);
      var xong = false;
      function tra(ds) {
        if (xong) return;
        xong = true;
        khoBai[url] = ds;
        try { document.body.removeChild(ifr); } catch (e) { /* bo qua */ }
        resolve(ds);
      }
      var d = ifr.contentDocument;
      var sc = d.createElement('script');
      sc.src = src;
      sc.onload = function () {
        var raw = (ifr.contentWindow && ifr.contentWindow.vocabData) || [];
        tra(raw.filter(function (v) {
          // bo ten rieng (ten nhan vat trong bai): hoi "Ton Nguyet (ten nguoi)" khong giup on tu
          return v && v.zh && v.vn && !/riêng/i.test(v.pos || '') && !/\(tên|tên người|tên riêng/i.test(v.vn);
        }).map(function (v) {
          return { zh: v.zh, py: v.py || '', vn: String(v.vn).split(/[;；]/)[0].trim(), pos: v.pos || '' };
        }));
      };
      sc.onerror = function () { tra([]); };
      d.body.appendChild(sc);
      setTimeout(function () { tra([]); }, 8000);
    });
  }
  function docJson(k, md) {
    try { var v = JSON.parse(localStorage.getItem(k) || 'null'); return v == null ? md : v; } catch (e) { return md; }
  }
  // May chu chon bai on theo so lieu lam bai that cua em (moi may nhu nhau)
  function baiOn() {
    return goi('/api/farm/on').then(function (d) {
      nguonTu = d.nguon || '';
      (d.sai || []).forEach(function (z) { tuHaySai[z] = 1; });
      return d.urls || [];
    }, function () { return []; });
  }
  function layTuVung() {
    if (tuVung && tuVung.length >= 4) return Promise.resolve(tuVung);
    if (!tuHaySai) {
      tuHaySai = {};
      var sai = docJson('hyv_review_wrong_words', {});
      Object.keys(sai || {}).forEach(function (k) { (Array.isArray(sai[k]) ? sai[k] : []).forEach(function (z) { tuHaySai[z] = 1; }); });
    }
    return baiOn().then(function (urls) { return Promise.all(urls.map(napBai)); }).then(function (phan) {
      var ra = [], thay = {};
      phan.forEach(function (ds) { ds.forEach(function (v) { if (!thay[v.zh]) { thay[v.zh] = 1; ra.push(v); } }); });
      // KHONG bu ten cac mon trong nong trai: cau hoi chi lay tu bai em da hoc / duoc giao
      tuVung = ra;
      return ra;
    });
  }
  function tron(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  var hoi = null;
  function moHoi(opt, xong) {
    dongNoi();
    hoi = { can: opt.so, dung: 0, xong: xong, khoa: false, daHoi: {} };
    $('#ntHoiAnh').src = anh(opt.anh);
    $('#ntHoiTit').textContent = opt.tit;
    $('#ntHoiPhu').textContent = opt.phu;
    $('#ntHoi').hidden = false;
    document.body.classList.add('co-hoi');
    $('#ntHoiCau').innerHTML = '<p class="nt-trong">Đang lấy từ vựng…</p>';
    $('#ntHoiChon').innerHTML = '';
    $('#ntHoiBao').textContent = '';
    veTienHoi();
    layTuVung().then(function () {
      if (!hoi) return;
      if (!tuVung || tuVung.length < 4) {
        tuVung = null; // lan sau hoi lai may chu (co the em vua hoc xong 1 bai)
        $('#ntHoiCau').innerHTML = htmlChuaHoc();
        $('#ntHoiChon').innerHTML = '';
        $('#ntHoiNguon').textContent = '';
        return;
      }
      $('#ntHoiNguon').textContent = nguonTu;
      cauMoi();
    });
  }
  function veTienHoi() {
    var h = '';
    for (var i = 0; i < hoi.can; i++) h += '<i class="' + (i < hoi.dung ? 'dung' : '') + '"></i>';
    $('#ntHoiTien').innerHTML = h;
  }
  function cauMoi() {
    var ds = tuVung.filter(function (v) { return !hoi.daHoi[v.zh]; });
    if (ds.length < 1) { hoi.daHoi = {}; ds = tuVung.slice(); }
    // Mot nua so cau hoi lai tu em hay sai (neu trong bai on co)
    var haySai = ds.filter(function (v) { return tuHaySai && tuHaySai[v.zh]; });
    if (haySai.length && Math.random() < 0.5) ds = haySai;
    var dap = ds[Math.floor(Math.random() * ds.length)];
    hoi.daHoi[dap.zh] = 1;
    // Dap an nhieu uu tien cung tu loai (dong tu voi dong tu...) de em phai nho nghia that
    var khac = tuVung.filter(function (v) { return v.zh !== dap.zh && v.vn !== dap.vn; });
    var cungLoai = dap.pos ? tron(khac.filter(function (v) { return v.pos === dap.pos; })) : [];
    var sai = cungLoai.slice(0, 3);
    tron(khac).forEach(function (v) { if (sai.length < 3 && sai.indexOf(v) < 0) sai.push(v); });
    var chon = tron([dap].concat(sai));
    var kieu = Math.floor(Math.random() * (nghiDuoc() ? 3 : 2)); // 0: Han -> Viet, 1: Viet -> Han, 2: nghe -> Han
    var cau;
    if (kieu === 0) cau = '<p class="nt-hoi-hd">Nghĩa của từ này là gì?</p><button type="button" class="nt-hoi-zh" data-doc="' + esc(dap.zh) + '" lang="zh">' + esc(dap.zh) + '</button><p class="nt-hoi-py">' + esc(dap.py) + '</p>';
    else if (kieu === 1) cau = '<p class="nt-hoi-hd">Chọn chữ Hán đúng</p><p class="nt-hoi-vn">' + esc(dap.vn) + '</p>';
    else cau = '<p class="nt-hoi-hd">Nghe và chọn chữ Hán đúng</p><button type="button" class="nt-hoi-loa" data-doc="' + esc(dap.zh) + '">🔊 Nghe lại</button>';
    $('#ntHoiCau').innerHTML = cau;
    $('#ntHoiChon').innerHTML = chon.map(function (v, i) {
      return '<button type="button" data-i="' + i + '"' + (kieu === 0 ? '' : ' lang="zh" class="zh"') + '>' + esc(kieu === 0 ? v.vn : v.zh) + '</button>';
    }).join('');
    $('#ntHoiBao').textContent = '';
    hoi.khoa = false;
    hoi.dap = dap;
    hoi.chon = chon;
    if (kieu === 2) {
      // may khong phat duoc tieng: hien pinyin de cau van lam duoc
      var hienPy = function () {
        var c = $('#ntHoiCau');
        if (hoi && hoi.dap === dap && c && !c.querySelector('.nt-hoi-py')) c.insertAdjacentHTML('beforeend', '<p class="nt-hoi-py">' + esc(dap.py) + '</p>');
      };
      hoi.hienPy = hienPy;
      setTimeout(function () { doc(dap.zh, hienPy); }, 250);
    } else {
      hoi.hienPy = null;
    }
  }
  function traLoi(i, nut) {
    if (!hoi || hoi.khoa) return;
    hoi.khoa = true;
    var v = hoi.chon[i], dung = v.zh === hoi.dap.zh;
    $all('#ntHoiChon button').forEach(function (b, j) {
      if (hoi.chon[j].zh === hoi.dap.zh) b.classList.add('dung');
    });
    if (dung) {
      hoi.dung++;
      tieng('dung');
      $('#ntHoiBao').innerHTML = 'Đúng rồi! <b lang="zh">' + esc(hoi.dap.zh) + '</b> ' + esc(hoi.dap.py) + ' — ' + esc(hoi.dap.vn);
    } else {
      nut.classList.add('sai');
      tieng('sai');
      $('#ntHoiBao').innerHTML = 'Chưa đúng — <b lang="zh">' + esc(hoi.dap.zh) + '</b> ' + esc(hoi.dap.py) + ' nghĩa là “' + esc(hoi.dap.vn) + '”. Thử câu khác nhé!';
    }
    doc(hoi.dap.zh);
    veTienHoi();
    var h = hoi;
    setTimeout(function () {
      if (hoi !== h) return;
      if (h.dung >= h.can) { dongHoi(); h.xong(); } else cauMoi();
    }, dung ? 1100 : 2200);
  }
  function dongHoi() { $('#ntHoi').hidden = true; document.body.classList.remove('co-hoi'); hoi = null; }

  /* ---------------- len cap / qua diem danh ---------------- */
  function lenCap(n) {
    tieng('len');
    var moi = [];
    ['CAY', 'CON', 'TT'].forEach(function (nh) {
      Object.keys(S.cat[nh]).forEach(function (k) { if (S.cat[nh][k].lv === n) moi.push(S.cat[nh][k].vn); });
    });
    var tn = Object.keys(S.cat.MO_TN || {}).filter(function (k) { return S.cat.MO_TN[k].lv === n; }).map(function (k) {
      var m = S.cat.MO_TN[k];
      return '<div class="nt-gt"><b>✨ Tính năng mới: ' + esc(m.vn) + ' <span lang="zh">' + esc(m.zh) + '</span></b><p>' + esc(m.gt) + '</p></div>';
    }).join('');
    moBangNho('<div class="nt-chuc">' + img('ic-xp') + '<h2>Lên cấp ' + n + '!</h2>' + tn +
      (moi.length ? '<p>Mở khoá: <b>' + esc(moi.join(', ')) + '</b></p>' : tn ? '' : '<p>Nông trại của em ngày càng lớn!</p>') +
      '<button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-dong>Tuyệt vời!</button></div>');
  }
  function quaDiemDanh() {
    var chuoi = S.st.quaHomNay ? S.st.chuoi : 0;
    moBangNho('<div class="nt-chuc">' + img('ic-xu') + '<h2>Quà mỗi ngày</h2>' +
      '<p>Vào nông trại mỗi ngày liên tiếp, quà càng lớn (tối đa 7 ngày).</p>' +
      '<button type="button" class="nt-nut nt-nut-vang nt-nut-to" data-nhan>Nhận quà</button></div>');
    var b = $('#ntBangThan [data-nhan]');
    b.addEventListener('click', function () {
      lam({ a: 'qua' }, b).then(function (r) {
        tieng('xu');
        setTimeout(function () {
          dongBang();
          bao('Ngày thứ ' + r.st.chuoi + ' liên tiếp: +' + r.them.xu + ' xu!');
          setTimeout(function () { if (!huongDan() && !S.st.av) moNhanVat(true); }, 900);
        }, 700);
      }, function () { dongBang(); });
    });
    return chuoi;
  }
  // Lan dau vao: 4 buoc choi ngan gon
  function huongDan() {
    try { if (localStorage.getItem('hyv_nt_hd')) return false; localStorage.setItem('hyv_nt_hd', '1'); } catch (e) { return false; }
    moBangNho('<div class="nt-chuc"><h2>Chào mừng đến nông trại!</h2><ul class="nt-cach nt-hd">' +
      '<li>' + img('ic-thuhoach') + '<span><b>Thu hoạch</b>Chạm ô lúa đã chín. Bán nông sản trong Kho để có xu.</span></li>' +
      '<li>' + img('sp-lua') + '<span><b>Gieo hạt</b>Chạm ô ruộng trống, chọn hạt giống (trả bằng xu).</span></li>' +
      '<li>' + img('ic-doi') + '<span><b>Cho vật nuôi ăn</b>Trả lời đúng 3 câu ôn từ vựng — gà sẽ đẻ trứng.</span></li>' +
      '<li>' + img('ic-sao') + '<span><b>Trang trí bằng sao</b>Học bài kiếm sao, mua bò, hoa, đèn lồng… cho nông trại đẹp nhất lớp.</span></li>' +
      '</ul><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-dong>Bắt đầu chơi!</button></div>');
    return true;
  }
  function moBangNho(html) {
    bangDang = { loai: 'nho' };
    $('#ntBangTit').textContent = '';
    datTab([], '');
    $('#ntBangThan').innerHTML = html;
    $all('img', $('#ntBangThan')).forEach(ganLoiAnh);
    $('#ntLop').hidden = false;
    $('#ntLop').classList.add('nho');
    document.body.classList.add('co-bang');
    var d = $('#ntBangThan [data-dong]');
    if (d) d.addEventListener('click', dongBang);
  }

  /* ---------------- nhac nen ---------------- */
  function ganNhac() {
    if (!window.NhacNen) return;
    var nut = document.createElement('button');
    nut.type = 'button';
    nut.className = 'nt-chip nt-chip-nhac';
    function ve() {
      var bat = NhacNen.batDuoc ? NhacNen.batDuoc() : true;
      nut.textContent = bat ? '🎵' : '🔇';
      nut.setAttribute('aria-label', bat ? 'Tắt nhạc nền' : 'Bật nhạc nền');
      nut.title = nut.getAttribute('aria-label');
    }
    nut.addEventListener('click', function () { NhacNen.datBat(!(NhacNen.batDuoc ? NhacNen.batDuoc() : true)); ve(); });
    $('.nt-hud').appendChild(nut);
    NhacNen.bat({ kieu: 'em', nut: false });
    ve();
  }

  /* ---------------- Ho cau ca 钓鱼湖 (y tuong cua co giao) ----------------
     Ca cang to, dep -> gia cang cao, cau hoi cang kho; ca be xau -> cau hoi de.
     Cham bong ca -> tha cau (1 moi) -> phao chim -> tra loi -> keo ca len hoac ca song mat.
     May chu giu ho ca, dap an va dong ho; o day chi ve.                                     */
  var HC = { d: null, chon: null, dang: null, i: 0, kq: null, khoa: false, xemBst: false, cho: false, hen: null, lanCuoi: 0 };
  var CA_SAO = ['', '★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];
  function bacCa(t) { return (S.cat.CA_BAC || [])[t] || { ten: '', zh: '', so: 1, giay: 0, xp: 0, de: '' }; }
  function caCuaBac(t) { var C = S.cat.CA || {}; return Object.keys(C).filter(function (k) { return C[k].t === t; }); }
  function giaBac(t) {
    var g = caCuaBac(t).map(function (k) { return S.cat.CA[k].ban; });
    return g.length ? (Math.min.apply(null, g) === Math.max.apply(null, g) ? g[0] + '' : Math.min.apply(null, g) + '–' + Math.max.apply(null, g)) : '';
  }
  // bong ca nhin tu tren mat nuoc: ca cang to bong cang lon; ca dep / huyen thoai co anh vang
  function bongCa(t) {
    return '<svg viewBox="0 0 120 60" aria-hidden="true"><path class="nt-hc-bong-than" d="M8 30C22 8 70 6 92 26L114 12C110 24 110 36 114 48L92 34C70 54 22 52 8 30Z"/>' +
      (t >= 4 ? '<path class="nt-hc-bong-anh" d="M30 24C44 16 64 16 78 24"/>' : '') + '</svg>';
  }
  function veNutHoCau() {
    var m = S.st && S.st.cau, nut = $('#ntHoCauNut');
    if (!m || !nut) return;
    nut.hidden = !moTn('cau');
    $('#ntHcPhu').textContent = m.con > 0 ? 'còn ' + m.con + ' mồi câu 🎣' : (m.sau ? 'học thêm ' + m.sau + ' sao → +1 mồi' : 'hết mồi · mai câu tiếp');
    nut.classList.toggle('co-luot', m.con > 0);
    nut.classList.toggle('het', m.con <= 0);
  }
  function moHoCau() {
    if (!moTn('cau')) { moBangNho(htmlKhoaTn('cau') + '<div class="nt-hang-nut"><button type="button" class="nt-nut" data-dong>Đóng</button></div>'); return; }
    dongThiTran();
    if (S.tham) veNha();
    dongBang();
    if (S.che !== 'xem') thoatDat();
    $('#ntHoCau').hidden = false;
    document.body.classList.add('o-ho-cau');
    nutVeTrang();
    HC.chon = null; HC.kq = null; HC.xemBst = false;
    veHoCau();
    taiHoCau();
  }
  function dongHoCau() {
    var h = $('#ntHoCau');
    if (!h || h.hidden) return;
    h.hidden = true;
    document.body.classList.remove('o-ho-cau');
    dungDongHo();
    nutVeTrang();
  }
  function nhanHo(r) {
    HC.d = r;
    if (S.st) S.st.cau = r.moi;
    veNutHoCau();
  }
  function taiHoCau() {
    return goi('/api/farm/hocau').then(function (r) {
      nhanHo(r);
      // dang co ca can cau (em dong ho giua chung) -> hoi tiep
      if (r.dang && !HC.dang && !HC.kq) { HC.dang = r.dang; HC.i = r.dang.i; HC.chon = r.dang.ca; }
      veHoCau();
    }, function (e) { bao(e.message, 'loi'); });
  }
  function dungDongHo() { if (HC.hen) { clearInterval(HC.hen); HC.hen = null; } }
  function veHoCau() {
    var r = HC.d, m = r ? r.moi : (S.st && S.st.cau);
    $('#ntHcMoi').innerHTML = m ? 'mồi câu <b>' + m.con + '/' + m.co + '</b>' + (m.sau ? ' · học thêm <b>' + m.sau + ' sao</b> → +1 mồi' : '') : '';
    veMatHo();
    veTheCa();
    // dien thoai: the cau hoi / ket qua nam duoi ho -> cuon xuong cho em thay
    var the = $('#ntHcThe');
    if ((HC.dang || HC.kq || HC.chon || HC.xemBst) && the.getBoundingClientRect().bottom > window.innerHeight) the.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }
  // mat ho: bong ca + phao + day cau tu ben cau go
  function veMatHo() {
    var r = HC.d, ho = $('#ntHcHo');
    var trangTri = '<span class="nt-hc-sen s1"></span><span class="nt-hc-sen s2"></span><span class="nt-hc-sen s3"></span>' +
      '<span class="nt-hc-gon g1"></span><span class="nt-hc-gon g2"></span><span class="nt-hc-gon g3"></span><span class="nt-hc-gon g4"></span>' +
      '<span class="nt-hc-co c1"></span><span class="nt-hc-co c2"></span><span class="nt-hc-da d1"></span><span class="nt-hc-da d2"></span>';
    if (!r) { ho.innerHTML = trangTri + '<p class="nt-hc-tai">Đang tải hồ cá…</p>'; return; }
    var ca = r.ho.map(function (c, i) {
      var cls = 'nt-hc-ca b' + c.t + (HC.chon === c.id ? ' chon' : '') + (HC.dang && HC.dang.ca === c.id ? ' can' : '');
      return '<button type="button" class="' + cls + '" data-ca="' + esc(c.id) + '" style="left:' + c.x + '%;top:' + c.y + '%;--lech:-' + ((i * 1.7) % 6).toFixed(1) + 's;--boi:' + (7 + (i % 4) * 1.5) + 's"' +
        ' aria-label="' + esc(bacCa(c.t).ten) + ' — ' + CA_SAO[c.t] + '">' + bongCa(c.t) + (c.t >= 5 ? '<i class="nt-hc-lap" aria-hidden="true"></i>' : '') + '</button>';
    }).join('');
    var c = HC.chon && r.ho.filter(function (x) { return x.id === HC.chon; })[0];
    var day = '';
    if (c && (HC.cho || HC.dang)) {
      day = '<svg class="nt-hc-day" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M50 104Q' + ((50 + c.x) / 2) + ' ' + (c.y - 8) + ' ' + c.x + ' ' + c.y + '" vector-effect="non-scaling-stroke"/></svg>' +
        '<span class="nt-hc-phao' + (HC.dang ? ' can' : '') + '" style="left:' + c.x + '%;top:' + c.y + '%"></span>';
    }
    ho.innerHTML = trangTri + ca + day;
    $('#ntHcNv').innerHTML = NV.svg(avEm()) + '<span class="nt-hc-can" aria-hidden="true"></span>';
  }
  function veTheCa() {
    var the = $('#ntHcThe'), r = HC.d;
    if (HC.xemBst) return veBstCa(the);
    if (HC.kq) return veKqCa(the);
    if (HC.dang) return veCauCa(the);
    if (HC.cho) { the.innerHTML = '<div class="nt-hc-cho"><span class="nt-hc-cho-phao" aria-hidden="true"></span><b>Đang chờ cá cắn câu…</b><small lang="zh">等鱼上钩 děng yú shàng gōu</small></div>'; return; }
    var c = HC.chon && r && r.ho.filter(function (x) { return x.id === HC.chon; })[0];
    if (!c) {
      the.innerHTML = htmlGt('cau') + '<div class="nt-hc-goi"><p><b>Chạm vào một bóng cá để thả câu.</b> Cá càng to, càng đẹp → bán càng nhiều xu, nhưng câu hỏi càng khó!</p><div class="nt-hc-bac">' +
        [1, 2, 3, 4, 5].map(function (t) {
          var b = bacCa(t);
          return '<span class="b' + t + '"><i class="nt-hc-mau b' + t + '">' + bongCa(t) + '</i><b>' + esc(b.ten) + '</b><small>' + CA_SAO[t] + ' · ' + giaBac(t) + ' xu</small></span>';
        }).join('') + '</div></div>';
      return;
    }
    if (r.coBai === false) {
      the.innerHTML = htmlChuaHoc('Học xong quay lại câu cá nhé 🎣') + '<div class="nt-hang-nut"><button type="button" class="nt-nut" id="ntHcBo">Chọn con khác</button></div>';
      $('#ntHcBo', the).addEventListener('click', function () { HC.chon = null; veHoCau(); });
      return;
    }
    var b = bacCa(c.t), m = r.moi;
    var loai = caCuaBac(c.t).map(function (k) { var x = S.cat.CA[k]; return '<span><span lang="zh">' + esc(x.zh) + '</span> ' + esc(x.vn) + '</span>'; }).join(' · ');
    the.innerHTML = '<div class="nt-hc-chon b' + c.t + '"><i class="nt-hc-mau to b' + c.t + '">' + bongCa(c.t) + '</i><div class="nt-hc-chon-chu">' +
      '<b>' + esc(b.ten) + ' <span lang="zh">' + esc(b.zh) + '</span> <span class="nt-hc-sao" aria-label="độ khó ' + c.t + '/5">' + CA_SAO[c.t] + '</span></b>' +
      '<small>Có thể là: ' + loai + '</small>' +
      '<small>' + esc(b.de) + '</small>' +
      '<small>💰 Bán ' + giaBac(c.t) + ' xu · ✨ +' + b.xp + ' kinh nghiệm</small></div>' +
      '<div class="nt-hc-chon-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" id="ntHcTha"' + (m.con > 0 ? '' : ' disabled') + '>🎣 Thả câu</button>' +
      '<small>' + (m.con > 0 ? 'tốn 1 mồi · còn ' + m.con : (m.sau ? 'Hết mồi — học thêm ' + m.sau + ' sao' : 'Hết mồi hôm nay')) + '</small>' +
      '<button type="button" class="nt-nut" id="ntHcBo">Chọn con khác</button></div></div>';
    $('#ntHcBo', the).addEventListener('click', function () { HC.chon = null; veHoCau(); });
    $('#ntHcTha', the).addEventListener('click', function () { thaCau(c); });
  }
  function thaCau(c) {
    if (HC.cho) return;
    HC.cho = true;
    tieng('mua');
    veHoCau();
    var batDau = Date.now();
    goi('/api/farm/hocau/tha', { id: c.id, nghe: xinCauNghe() }).then(function (r) {
      nhanHo(r.ho);
      // cho phao chim mot chut roi moi hien cau hoi (may chu cung cho 1,5 giay)
      setTimeout(function () {
        HC.cho = false; HC.dang = r.dang; HC.i = r.dang.i;
        tieng('dung');
        if ($('#ntHoCau').hidden) return;
        veHoCau();
        bao('🐟 Cá cắn câu rồi! 鱼上钩了！');
      }, Math.max(0, 1500 - (Date.now() - batDau)));
    }, function (e) {
      HC.cho = false;
      bao(e.message, 'loi');
      if (/bơi đi/.test(e.message)) { HC.chon = null; taiHoCau(); } else veHoCau();
    });
  }
  function veCauCa(the) {
    var g = HC.dang, q = g.ds[HC.i], h = q.hoi, b = bacCa(g.t);
    var kt = laKt(q);
    var deBai = kt ? '' : q.k === 'nghe' ? deBaiDacBiet(q) : q.k === 'nghia' ? '<div class="nt-ch-vn">' + esc(h.vn) + '</div>'
      : q.k === 'thieu' ? '<div class="nt-ch-zh" lang="zh">' + esc(h.thieu).replace('＿', '<span class="nt-ch-o">？</span>') + '</div><div class="nt-ch-goi">' + esc(h.vn) + '</div>'
      : '<div class="nt-ch-zh" lang="zh">' + esc(h.zh) + '</div>' + (h.py ? '<div class="nt-ch-goi">' + esc(h.py) + '</div>' : '');
    var laZh = q.k === 'nghia' || q.k === 'thieu' || q.k === 'nghe';
    var giay = q.gy || g.giay;
    the.innerHTML = '<div class="nt-ch nt-hc-cau' + (kt ? ' nt-kt' : '') + '">' +
      '<div class="nt-ch-dau"><span>🎣 ' + esc(b.ten) + ' ' + CA_SAO[g.t] + '</span>' + (g.so > 1 ? '<span>Câu ' + (HC.i + 1) + '/' + g.so + '</span>' : '') + '</div>' +
      (giay ? '<div class="nt-hc-gio" aria-hidden="true"><i id="ntHcGio"></i></div>' : '') +
      '<p class="nt-ch-kieu">' + (kt ? esc(tenKt(q)) : TEN_KIEU_CH[q.k]) + (g.so > 1 ? ' — sai 1 câu là cá sổng!' : '') + '</p>' + deBai +
      (kt ? htmlKt(q, 'hc') : '<div class="nt-ch-lua' + (laZh ? ' zh' : '') + '">' + q.lua.map(function (l, j) {
        return '<button type="button" data-hc="' + j + '"' + (laZh ? ' lang="zh"' : '') + '>' + esc(l) + '</button>';
      }).join('') + '</div>') + '<div class="nt-ch-giai" id="ntHcGiai" aria-live="polite"></div>' +
      (g.nguon ? '<p class="nt-ch-nguon">Từ: ' + esc(g.nguon) + '</p>' : '') + '</div>';
    HC.khoa = false;
    dungDongHo();
    ganDacBiet(q, the, function () {});
    if (giay) {
      var het = Date.now() + (HC.i === g.i && g.conMs ? g.conMs : giay * 1000), tong = giay * 1000;
      g.conMs = 0;
      var chay = function () {
        var con = het - Date.now(), v = $('#ntHcGio');
        if (v) { v.style.width = Math.max(0, Math.min(100, con / tong * 100)) + '%'; v.classList.toggle('gap', con < 5000); }
        if (con <= 0) { dungDongHo(); if (!HC.khoa) traLoiCa(-1, the); }
      };
      chay();
      HC.hen = setInterval(chay, 200);
    }
    if (kt) ganKt(the, q, 'hc', function (b, chon) { traLoiCa(chon, the, b); });
    else $all('[data-hc]', the).forEach(function (bt) {
      bt.addEventListener('click', function () { traLoiCa(+bt.getAttribute('data-hc'), the); });
    });
  }
  // b: phan tra loi cua cau Kiem tra bai cu ({ chon } | { xep } | { noi }); het gio -> chon = -1
  function traLoiCa(chon, the, b) {
    if (HC.khoa) return;
    HC.khoa = true;
    dungDongHo();
    var g = HC.dang, q = g.ds[HC.i];
    goi('/api/farm/hocau/tl', Object.assign({ id: g.id, i: HC.i, chon: chon }, b || {})).then(function (r) {
      if (laKt(q)) {
        danhDauKt(the, q, r, chon, 'hc');
        $('#ntHcGiai', the).innerHTML = (r.cham ? '⏰ Hết giờ! ' : '') + giaiKt(r, q);
        docKt(r);
        r.q = q;
      } else {
        $all('[data-hc]', the).forEach(function (x, j) { x.disabled = true; x.classList.add(j === r.dap ? 'dung' : j === chon ? 'sai' : 'mo'); });
        $('#ntHcGiai', the).innerHTML = (r.cham ? '⏰ Hết giờ! ' : '') + '<b lang="zh">' + esc(r.zh) + '</b> ' + esc(r.py) + ' — ' + esc(r.vn);
        doc(r.zh);
      }
      if (r.dung) tieng('dung'); else tieng('sai');
      var tiep = function () {
        if (r.ho) nhanHo(r.ho);
        if (r.st) nhanTrangThai(r.st);
        if (r.bat || r.song) {
          HC.kq = r; HC.dang = null;
          if (r.bat) { tieng('len'); var x = S.cat.CA[r.bat.k]; setTimeout(function () { doc(x.zh); }, 400); }
        } else HC.i++;
        if (!$('#ntHoCau').hidden) veHoCau();
      };
      setTimeout(tiep, r.dung ? 1000 : r.kt ? 2600 : 2000);
    }, function (e) {
      HC.khoa = false;
      if (laKt(q)) moLaiKt(the, q);
      bao(e.message, 'loi');
      if (/kết thúc/.test(e.message)) { HC.dang = null; HC.chon = null; taiHoCau(); }
    });
  }
  function veKqCa(the) {
    var r = HC.kq, html;
    if (r.bat) {
      var x = S.cat.CA[r.bat.k];
      html = '<div class="nt-hc-kq bat b' + r.bat.t + '">' +
        '<div class="nt-hc-kq-hinh">' + img('sp-' + r.bat.k) + '</div>' +
        '<div class="nt-hc-kq-chu"><span class="nt-hc-tieu" lang="zh">钓到了！</span>' +
        '<b><span lang="zh">' + esc(x.zh) + '</span> ' + esc(x.py) + '</b><small>' + esc(x.vn) + ' · dài <b>' + r.bat.cm + ' cm</b></small>' +
        '<span class="nt-hc-huy">' + (r.bat.moi ? '<i class="moi">🆕 Loài mới trong bộ sưu tập!</i>' : '') + (r.bat.kyLuc ? '<i class="ky">🏆 Kỷ lục mới!</i>' : '') + '</span>' +
        '<small>Đã cất vào <b>Kho</b> · bán được ' + x.ban + ' xu</small></div></div>';
    } else {
      html = '<div class="nt-hc-kq song"><div class="nt-hc-kq-hinh nt-hc-bong-song">' + bongCa(HC.chonT || 2) + '</div>' +
        '<div class="nt-hc-kq-chu"><span class="nt-hc-tieu" lang="zh">鱼跑了！</span><b>Cá sổng mất rồi!</b>' +
        (r.kt && r.q ? '<small>' + (r.cham ? 'Hết giờ mất rồi. ' : '') + 'Đáp án đúng:</small><div class="nt-kt-kq">' + giaiKt(r, r.q) + '</div>'
          : '<small>' + (r.cham ? 'Hết giờ mất rồi.' : 'Đáp án đúng:') + ' <b lang="zh">' + esc(r.zh) + '</b> ' + esc(r.py) + ' — ' + esc(r.vn) + '</small>') +
        '<small>Ôn lại từ này rồi thử con khác nhé — cá bé dễ câu hơn!</small></div></div>';
    }
    the.innerHTML = html + '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" id="ntHcTiep">🎣 Câu tiếp</button>' +
      (r.bat ? '<button type="button" class="nt-nut" id="ntHcKho">Bán cá ở Kho</button>' : '') + '</div>';
    $all('img', the).forEach(ganLoiAnh);
    $('#ntHcTiep', the).addEventListener('click', function () { HC.kq = null; HC.chon = null; veHoCau(); });
    var k = $('#ntHcKho', the);
    if (k) k.addEventListener('click', function () { HC.kq = null; HC.chon = null; dongHoCau(); moBang('kho', 'sp'); });
  }
  function veBstCa(the) {
    var C = S.cat.CA || {}, bst = (HC.d && HC.d.bst) || {};
    var ds = Object.keys(C).sort(function (a, b) { return C[a].t - C[b].t || C[a].ban - C[b].ban; });
    var co = ds.filter(function (k) { return bst[k]; }).length;
    the.innerHTML = '<div class="nt-hc-bst"><div class="nt-hc-bst-dau"><b>📖 Bộ sưu tập cá <span lang="zh">鱼类图鉴</span></b><span>' + co + '/' + ds.length + ' loài</span>' +
      '<button type="button" class="nt-nut" id="ntHcBstDong">Đóng</button></div><div class="nt-hc-bst-ds">' +
      ds.map(function (k) {
        var x = C[k], b = bst[k];
        return '<div class="nt-hc-o' + (b ? '' : ' chua') + '">' + img('sp-' + k) + '<span class="nt-hc-sao">' + CA_SAO[x.t] + '</span>' +
          (b ? '<b><span lang="zh">' + esc(x.zh) + '</span> ' + esc(x.py) + '</b><small>' + esc(x.vn) + '</small><small>×' + b[0] + ' · lớn nhất ' + b[1] + ' cm</small>'
            : '<b>？？？</b><small>' + esc(bacCa(x.t).ten) + '</small><small>chưa câu được</small>') + '</div>';
      }).join('') + '</div></div>';
    $all('img', the).forEach(ganLoiAnh);
    $('#ntHcBstDong', the).addEventListener('click', function () { HC.xemBst = false; veHoCau(); });
  }
  // Nut ← goc trai: dang o ho cau / thi tran thi quay ve nong trai, con lai ve trang hoc
  function nutVeTrang() {
    var a = $('.nt-ve'), ngoai = !$('#ntHoCau').hidden || !$('#ntThiTran').hidden;
    if (!a) return;
    $('b', a).textContent = ngoai ? 'Nông trại' : 'Học bài';
    a.setAttribute('aria-label', ngoai ? 'Về nông trại của em' : 'Về trang học');
  }
  function ganHoCau() {
    $('.nt-ve').addEventListener('click', function (e) {
      if ($('#ntHoCau').hidden && $('#ntThiTran').hidden) return;
      e.preventDefault();
      dongHoCau();
      dongThiTran();
    });
    $('#ntHoCauNut').addEventListener('click', moHoCau);
    $('#ntHoCau').addEventListener('click', function (e) {
      var ca = e.target.closest('[data-ca]');
      if (ca) {
        if (HC.dang || HC.cho) { bao('Em đang kéo một con cá — trả lời xong đã nhé!'); return; }
        HC.chon = ca.getAttribute('data-ca'); HC.kq = null; HC.xemBst = false;
        var c = HC.d.ho.filter(function (x) { return x.id === HC.chon; })[0];
        HC.chonT = c ? c.t : 1;
        tieng('thu');
        veHoCau();
        return;
      }
      var t = e.target.closest('[data-hc-nut]');
      if (!t) return;
      var k = t.getAttribute('data-hc-nut');
      if (k === 've') dongHoCau();
      else if (k === 'bst') { HC.xemBst = true; veHoCau(); }
      else if (k === 'kho') { dongHoCau(); moBang('kho', 'sp'); }
    });
  }

  /* ---------------- Luu thong hang hoa: thuong lai 商人, don lon tuan, thuong mua cua ban ---------------- */
  // dong goi y thuong mua cua ban (dat dau cac cho)
  function htmlThuongMua() {
    var m = S.st && S.st.muaBan;
    if (!m) return '';
    var con = Math.max(0, m.so - m.n);
    return '<p class="nt-thuong-mua' + (con ? '' : ' xong') + '">🎁 ' + (con
      ? 'Mua hàng của bạn: <b>' + con + '</b> lần nữa hôm nay được <b>hoàn 20% xu</b>' + (m.n < m.so ? ' · lần thứ ' + m.so + ' tặng thêm <b>1 lượt vòng quay</b>' : '') + '!'
      : 'Hôm nay em đã nhận đủ thưởng mua hàng của bạn — mai mua tiếp nhé!') + '</p>';
  }
  var TL = { d: null, py: false, dang: null };
  function giayRaGio(g) { var h = Math.floor(g / 3600), p = Math.floor(g % 3600 / 60); return h ? h + ' giờ ' + p + ' phút' : Math.max(1, p) + ' phút'; }
  function veThuongLai(than) {
    if (!moTn('tl')) { than.innerHTML = htmlKhoaTn('tl'); return; }
    than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
    goi('/api/farm/thuonglai').then(function (r) { TL.d = r; veTlNoi(than); }, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
  }
  function veTlNoi(than) {
    if (!bangDang || bangDang.loai !== 'congdong' || bangDang.tab !== 'tl') return;
    var r = TL.d, t = r.tl;
    var gio = r.gio.map(function (g) { return g + ':00'; }).join(', ');
    if (!t) {
      than.innerHTML = '<div class="nt-tl-trong"><p>🌙 Thương lái <span lang="zh">商人</span> đang nghỉ. Mỗi ngày họ đến chợ lúc <b>' + gio + '</b>.</p><p>Thương lái sau đến sau <b>' + giayRaGio(r.sau) + '</b>.</p></div>';
      return;
    }
    var n = t.nguoi, av = NV.svg(NV.macDinh('tl-' + n.zh));
    var html = htmlGt('tl') + '<div class="nt-tl-dau"><span class="nt-tl-nv">' + av + '</span><div><b><span lang="zh">' + esc(n.zh) + '</span> ' + esc(n.py) + '</b><small>' + esc(n.vn) + ' · thương lái <span lang="zh">商人</span> đến chợ lớp em</small>' +
      '<small>Đi sau <b>' + giayRaGio(r.sau) + '</b>' + (t.quetN ? ' · đã mua <b>' + t.quetN + '</b> món ở sạp các bạn' : '') + '</small></div>' +
      '<button type="button" class="nt-nut" id="ntTlPy">' + (TL.py ? 'Ẩn pinyin' : 'Hiện pinyin') + '</button></div>' +
      '<p class="nt-meo">Đọc câu thương lái nói, <b>chạm đúng tranh món hàng</b> để bán ngay từ kho — giá cao hơn cửa hàng (tính vào <b>hạn mức bán</b> hằng ngày: mỗi sao học +10 xu). Chọn nhầm thì thương lái không mua món đó của em nữa! Thương lái cũng tự mua hàng ở sạp nào bán rẻ.</p>' +
      '<div class="nt-tl-ds">' + t.ds.map(function (o) {
        var het = o.con < 1, du = o.emBan >= o.gioiHan;
        return '<div class="nt-tl-dong' + (het || du ? ' xong' : '') + (o.sai ? ' sai' : '') + '">' +
          '<button type="button" class="nt-tl-cau" data-doc="' + esc(o.zh) + '"><b lang="zh">' + esc(o.zh) + '</b>' + (TL.py ? '<small>' + esc(o.py) + '</small>' : '') + ' 🔊</button>' +
          '<div class="nt-tl-so"><span>Còn mua <b>' + o.con + '/' + o.tong + '</b></span><span>' + img('ic-xu') + '<b>' + o.gia + '</b>/món</span>' +
          (o.emBan ? '<span>Em đã bán <b>' + o.emBan + '</b>/' + o.gioiHan + '</span>' : '<span>Mỗi bạn tối đa ' + o.gioiHan + '</span>') + '</div>' +
          (o.sai ? '<p class="nt-tl-sai">❌ Em chọn nhầm. Đây là <b>' + esc(tenSp(o.k).vn) + '</b> <span lang="zh">' + esc(tenSp(o.k).zh) + '</span> ' + esc(tenSp(o.k).py) + '.</p>'
            : het ? '<p class="nt-tl-xong">Thương lái đã mua đủ món này.</p>'
            : du ? '<p class="nt-tl-xong">Em đã bán đủ phần của em.</p>'
            : '<div class="nt-tl-lua">' + o.lua.map(function (k) {
              return '<button type="button" data-tl="' + o.i + '" data-tlk="' + esc(k) + '" aria-label="Chọn món này">' + img('sp-' + k) + '</button>';
            }).join('') + '</div>') + '</div>';
      }).join('') + '</div>';
    than.innerHTML = html;
    $all('img', than).forEach(ganLoiAnh);
    $('#ntTlPy', than).addEventListener('click', function () { TL.py = !TL.py; veTlNoi(than); });
    $all('[data-tl]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (TL.dang) return;
        TL.dang = true;
        $all('[data-tl]', than).forEach(function (x) { x.disabled = true; });
        goi('/api/farm/thuonglai/ban', { ma: t.ma, i: +b.getAttribute('data-tl'), chon: b.getAttribute('data-tlk') }).then(function (k) {
          TL.dang = false;
          var m = tenSp(k.k);
          if (k.sai) { tieng('sai'); bao('不对！Thương lái cần ' + m.vn + ' ' + m.zh + ' — em chọn nhầm rồi.', 'loi'); }
          else if (k.n > 0) { tieng('xu'); bao('Bán cho thương lái ' + k.n + ' ' + m.vn + ' ' + m.zh + ' · +' + k.xu + ' xu!'); doc(m.zh); }
          else { tieng('dung'); bao(k.ly === 'kho' ? 'Đúng rồi: ' + m.zh + ' ' + m.py + ' — ' + m.vn + '! Nhưng kho em chưa có món này.' : k.ly === 'hanmuc' ? 'Đúng rồi! Nhưng hạn mức bán hôm nay (' + k.toiDa + ' xu) đã hết — học thêm sao để bán tiếp: mỗi sao +10 xu hạn mức.' : 'Đúng rồi, nhưng thương lái đã mua đủ món này.'); }
          if (k.st) nhanTrangThai(k.st);
          TL.d.tl = k.tl;
          veTlNoi(than);
        }, function (e) { TL.dang = false; bao(e.message, 'loi'); veThuongLai(than); });
      });
    });
  }
  // --- Don lon cua thi tran tuan nay ---
  var HD = { d: null, dang: false };
  function veDonLon(than) {
    if (!moTn('hd')) { than.innerHTML = htmlKhoaTn('hd'); return; }
    than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
    goi('/api/farm/hd').then(function (r) { HD.d = r; veHdNoi(than); }, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
  }
  function htmlHd(x, cu) {
    var tong = 0, du = 0;
    x.ds.forEach(function (o) { tong += o.can; du += Math.min(o.can, o.co); });
    var pt = tong ? Math.round(du / tong * 100) : 0;
    return '<div class="nt-hd' + (x.xong ? ' xong' : '') + '">' +
      '<div class="nt-hd-dau"><b>' + (cu ? 'Đơn tuần trước' : 'Đơn lớn tuần này') + ' <span lang="zh">本周大订单</span></b><span class="nt-hd-pt">' + pt + '%</span></div>' +
      '<div class="nt-hd-thanh"><i style="width:' + pt + '%"></i></div>' +
      (cu ? '' : '<div class="nt-hd-ds">' + x.ds.map(function (o) {
        var m = tenSp(o.k), co = S.st.kho[o.k] || 0, thieu = o.can - o.co;
        return '<div class="nt-hd-dong' + (thieu <= 0 ? ' du' : '') + '">' + img('sp-' + o.k) +
          '<div class="nt-hd-chu"><button type="button" class="nt-link" data-doc="' + esc(o.zh) + '"><b lang="zh">' + esc(o.zh) + '</b> 🔊</button><small>' + esc(o.py) + ' · ' + esc(m.vn) + '</small>' +
          '<span class="nt-hd-mini"><i style="width:' + Math.min(100, Math.round(o.co / o.can * 100)) + '%"></i></span><small><b>' + o.co + '/' + o.can + '</b> · trả ' + o.xu + ' xu/món · kho em có ' + co + '</small></div>' +
          (thieu > 0 ? '<div class="nt-hd-nut"><button type="button" class="nt-mua" data-hd="' + o.k + '" data-hdn="1"' + (co ? '' : ' disabled') + '>Góp 1</button>' +
            '<button type="button" class="nt-mua" data-hd="' + o.k + '" data-hdn="' + Math.min(co, thieu) + '"' + (co > 1 ? '' : ' disabled') + '>Góp ' + Math.max(1, Math.min(co, thieu)) + '</button></div>' : '<span class="nt-hd-ok">✔ Đủ</span>') + '</div>';
      }).join('') + '</div>') +
      (x.xong ? '<p class="nt-hd-xong">🎉 Cả lớp đã hoàn thành đơn! ' + (x.coTheNhan ? '' : x.daNhan ? 'Em đã nhận thưởng.' : 'Góp hàng để được nhận thưởng lần sau nhé.') + '</p>' : '') +
      (x.coTheNhan ? '<button type="button" class="nt-nut nt-nut-vang nt-nut-to" data-hd-nhan="' + x.tuan + '">Nhận ' + x.thuong + ' xu' + (x.hang && x.hang <= 3 ? ' (top ' + x.hang + ')' : '') + '</button>' : '') +
      (x.top.length ? '<ol class="nt-hd-top">' + x.top.map(function (b, i) { return '<li' + (b.la ? ' class="la"' : '') + '>' + (['🥇', '🥈', '🥉'][i] || (i + 1) + '.') + ' ' + esc(b.ten) + ' <small>' + b.n + ' điểm</small></li>'; }).join('') + '</ol>' : '') + '</div>';
  }
  function veHdNoi(than) {
    if (!bangDang || bangDang.loai !== 'chung' || bangDang.tab !== 'hd') return;
    var r = HD.d;
    than.innerHTML = htmlGt('hd') + '<p class="nt-meo">Cả <b>' + esc(r.pham) + '</b> cùng gom hàng cho một đơn lớn mỗi tuần. Góp món nào được <b>trả xu ngay</b> (trong hạn mức bán hằng ngày — hết hạn mức vẫn góp được cho lớp). Đủ đơn thì ai góp cũng nhận <b>30 xu</b>, top 3 thêm 30/20/10 xu. Còn <b>' + conLaiGiay(r.conGiay) + '</b>.</p>' +
      (r.cu ? htmlHd(r.cu, true) : '') + htmlHd(r.hd, false);
    $all('img', than).forEach(ganLoiAnh);
    $all('[data-hd]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (HD.dang) return;
        HD.dang = true; b.disabled = true;
        goi('/api/farm/hd/gop', { k: b.getAttribute('data-hd'), n: +b.getAttribute('data-hdn') }).then(function (k) {
          HD.dang = false;
          tieng('xu');
          var m = tenSp(b.getAttribute('data-hd'));
          bao('Góp ' + k.so + ' ' + m.vn + ' ' + m.zh + ' · +' + k.xu + ' xu' + (k.catHanMuc ? ' (hết hạn mức bán hôm nay — học thêm sao để nhận đủ xu)' : '') + (k.xong ? ' — 🎉 cả lớp hoàn thành đơn tuần!' : ''));
          if (k.st) nhanTrangThai(k.st);
          HD.d.hd = k.hd;
          veHdNoi(than);
        }, function (e) { HD.dang = false; bao(e.message, 'loi'); veDonLon(than); });
      });
    });
    $all('[data-hd-nhan]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        goi('/api/farm/hd/nhan', { tuan: b.getAttribute('data-hd-nhan') }).then(function (k) {
          tieng('len'); bao('🎉 Nhận ' + k.xu + ' xu thưởng đơn lớn!');
          if (k.st) nhanTrangThai(k.st);
          veDonLon(than);
        }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
      });
    });
  }
  // --- Nha hang: khach goi mon bang tieng Trung ---
  var NH = { py: false };
  function htmlNhaHang() {
    var ds = (S.st && S.st.nh) || [];
    if (!ds.length) return moTn('nh') ? '' : htmlKhoaTn('nh');
    return htmlGt('nh') + '<div class="nt-nh"><div class="nt-nh-dau"><b>🍽 Nhà hàng <span lang="zh">餐厅</span> — khách gọi món hôm nay</b>' +
      '<button type="button" class="nt-nut" id="ntNhPy">' + (NH.py ? 'Ẩn pinyin' : 'Hiện pinyin') + '</button></div>' +
      '<p class="nt-meo">Đọc khách gọi món gì, nấu món đó rồi <b>Phục vụ</b>: khách trả <b>thêm 30%</b> giá món (tính vào hạn mức bán hằng ngày — học càng nhiều sao, bán được càng nhiều).</p>' +
      ds.map(function (o, i) {
        return '<div class="nt-nh-khach' + (o.xong ? ' xong' : '') + '"><span class="nt-tl-nv">' + NV.svg(NV.macDinh('kh-' + o.kh.zh)) + '</span>' +
          '<div class="nt-nh-chu"><small><span lang="zh">' + esc(o.kh.zh) + '</span> ' + esc(o.kh.py) + '</small>' +
          '<button type="button" class="nt-tl-cau" data-doc="' + esc(o.zh) + '"><b lang="zh">' + esc(o.zh) + '</b>' + (NH.py ? '<small>' + esc(o.py) + '</small>' : '') + ' 🔊</button></div>' +
          (o.xong ? '<span class="nt-hd-ok">✔ Đã phục vụ</span>' : '<button type="button" class="nt-mua" data-phucvu="' + i + '"><span class="nt-gia xu">' + img('ic-xu') + o.xu + '</span> Phục vụ</button>') + '</div>';
      }).join('') + '</div>';
  }
  function moPhucVu(i) {
    var o = S.st.nh[i], M = S.cat.MON;
    var co = Object.keys(M).filter(function (k) { return (S.st.kho[k] || 0) > 0; });
    moBangNho('<div class="nt-goi"><h3>Khách gọi món gì?</h3><p class="nt-nh-goi" lang="zh">' + esc(o.zh) + '</p>' +
      (co.length ? '<p>Chọn món trong kho để mang ra:</p><div class="nt-nh-chon">' + co.map(function (k) {
        return '<button type="button" data-nhm="' + k + '">' + img('sp-' + k) + '<small>' + esc(M[k].vn) + ' ×' + S.st.kho[k] + '</small></button>';
      }).join('') + '</div>' : '<p>Kho em chưa có món ăn nào — vào <b>Bếp</b> nấu món khách gọi trước nhé!</p>') +
      '<p class="nt-ch-giai" id="ntNhGiai" aria-live="polite"></p><div class="nt-hang-nut"><button type="button" class="nt-nut" id="ntNhVe">Về bếp</button></div></div>');
    $all('#ntBangThan img').forEach(ganLoiAnh);
    $('#ntNhVe').addEventListener('click', function () { moBang('kho', 'bep'); });
    $all('[data-nhm]').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-nhm');
        lam({ a: 'phucvu', i: i, m: k }, b).then(function () {
          tieng('xu'); doc(M[k].zh);
          bao('🍽 Phục vụ ' + M[k].vn + ' ' + M[k].zh + ' · khách trả ' + o.xu + ' xu. 谢谢！');
          moBang('kho', 'bep');
        }, function () { b.disabled = true; b.classList.add('sai'); tieng('sai'); });
      });
    });
  }

  /* ---------------- Mo tinh nang theo cap + loi gioi thieu ---------------- */
  function capEm() { return (S.st && S.st.lv) || 1; }
  function moTn(k) { var m = (S.cat.MO_TN || {})[k]; return !m || capEm() >= m.lv; }
  function daXemGt(k) { try { return localStorage.getItem('hyv_nt_gt_' + k) === '1'; } catch (e) { return true; } }
  function ghiGt(k) { try { localStorage.setItem('hyv_nt_gt_' + k, '1'); } catch (e) { /* bo qua */ } }
  // the gioi thieu ngan, hien lan dau em mo tinh nang (bam "Đã hiểu" thi an)
  function htmlGt(k) {
    var m = (S.cat.MO_TN || {})[k];
    if (!m || daXemGt(k)) return '';
    return '<div class="nt-gt"><b>✨ Tính năng mới: ' + esc(m.vn) + ' <span lang="zh">' + esc(m.zh) + '</span></b><p>' + esc(m.gt) + '</p>' +
      '<button type="button" class="nt-nut" data-gt-xong="' + k + '">Đã hiểu</button></div>';
  }
  function htmlKhoaTn(k) {
    var m = S.cat.MO_TN[k];
    return '<div class="nt-tn-khoa"><span aria-hidden="true">🔒</span><b>' + esc(m.vn) + ' <span lang="zh">' + esc(m.zh) + '</span> mở ở cấp ' + m.lv + '</b>' +
      '<p>' + esc(m.gt) + '</p><small>Em đang cấp ' + capEm() + ' — trồng trọt, chăm vật nuôi, giao đơn để lên cấp nhé!</small></div>';
  }
  // nap thu vien viet chu (dung chung voi trang bai hoc)
  var hwHua = null;
  function napHanziWriter() {
    if (typeof HanziWriter !== 'undefined') return Promise.resolve();
    if (hwHua) return hwHua;
    hwHua = new Promise(function (ok) {
      var s = document.createElement('script');
      s.src = '/js/vendor/hanzi-writer.min.js';
      s.onload = function () { ok(); };
      s.onerror = function () { ok(); };
      document.head.appendChild(s);
    });
    return hwHua;
  }
  function giaiNghe(s) { try { return decodeURIComponent(atob(s)); } catch (e) { return ''; } }
  /* ---- Cau tu ngan hang Kiem tra bai cu (may chu cham): trac nghiem 'kt', xep cau 'xep', noi tu 'noi' ----
     xep / noi ve bang widget dung chung /js/cau-dt.js (keo tha, cham de noi). */
  var CO_HAN = /[㐀-鿿]/;
  function laKt(q) { return !!q && (q.k === 'kt' || q.k === 'xep' || q.k === 'noi'); }
  function tenKt(q) { return (q.hoi && q.hoi.lenh) || (q.k === 'xep' ? 'Xếp các từ thành câu đúng' : q.k === 'noi' ? 'Nối từ với nghĩa đúng' : 'Chọn đáp án đúng'); }
  function htmlKt(q, attr) {
    var h = q.hoi || {}, html = '';
    if (q.k === 'kt') {
      if (h.zh) {
        var han = CO_HAN.test(h.zh);
        html += '<div class="' + (han ? 'nt-kt-zh' : 'nt-ch-vn') + '"' + (han ? ' lang="zh"' : '') + '>' +
          esc(h.zh).replace('＿＿', '<span class="nt-kt-o">＿＿</span>') + '</div>';
      }
      if (h.ctx) html += '<div class="nt-ch-goi">' + esc(h.ctx) + '</div>';
      var laZh = q.lua.every(function (l) { return CO_HAN.test(l) && l.length <= 8; });
      html += '<div class="nt-ch-lua' + (laZh ? ' zh' : '') + '">' + q.lua.map(function (l, j) {
        return '<button type="button" data-' + attr + '="' + j + '"' + (CO_HAN.test(l) ? ' lang="zh"' : '') + '>' + esc(l) + '</button>';
      }).join('') + '</div>';
    } else {
      if (q.k === 'xep' && h.ctx) html += '<div class="nt-ch-goi nt-kt-nghia">«' + esc(h.ctx) + '»</div>';
      html += '<div class="nt-kt-dt" data-kt-dt></div>';
    }
    return html;
  }
  // gui(b, chon): b = { chon } | { xep: [...] } | { noi: [...] }
  function ganKt(than, q, attr, gui) {
    if (q.k === 'kt') {
      $all('[data-' + attr + ']', than).forEach(function (b) {
        b.addEventListener('click', function () { var j = +b.getAttribute('data-' + attr); gui({ chon: j }, j); });
      });
      return;
    }
    var el = $('[data-kt-dt]', than);
    if (!el || !window.CauDT) { if (el) el.innerHTML = '<p class="nt-meo">Không tải được câu kéo thả — tải lại trang nhé.</p>'; return; }
    CauDT.ve(el, q.hoi, function (b) { gui(b, -1); });
  }
  function danhDauKt(than, q, r, chon, attr) {
    if (q.k === 'kt') {
      $all('[data-' + attr + ']', than).forEach(function (x, j) { x.disabled = true; x.classList.add(j === r.dap ? 'dung' : j === chon ? 'sai' : 'mo'); });
      return;
    }
    var el = $('[data-kt-dt]', than);
    if (el) { el.classList.add('cdt-khoa', r.dung ? 'nt-kt-dung' : 'nt-kt-sai'); }
  }
  function moLaiKt(than, q) { if (q.k !== 'kt' && window.CauDT) CauDT.moLai($('[data-kt-dt]', than)); }
  function giaiKt(r, q) {
    var s = '';
    if (r.kt === 'xep' || r.kt === 'noi') s = '<span class="nt-kt-dap">' + (r.dung ? '✔ ' : 'Đáp án: ') + (window.CauDT ? CauDT.dapHtml(q.hoi, r.dap) : '') + '</span>';
    else if (r.doc && r.doc !== r.zh) s = '<span class="nt-kt-dap"><b lang="zh">' + esc(r.doc) + '</b></span>';
    if (r.zh && r.kt !== 'noi') s += '<span class="nt-kt-tu"><b lang="zh">' + esc(r.zh) + '</b> ' + esc(r.py) + ' — ' + esc(r.vn) + '</span>';
    if (r.why) s += '<span class="nt-kt-why">💡 ' + esc(r.why) + '</span>';
    return s;
  }
  function docKt(r) { var t = r.doc || r.zh; if (t && CO_HAN.test(t)) doc(t); }
  // cau nghe / viet dung chung cho thu thach chu Han va ho cau: tra ve html de bai
  function deBaiDacBiet(q) {
    var h = q.hoi;
    if (q.k === 'nghe') return '<button type="button" class="nt-nghe" data-nghe-lai>🔊 Nghe lại</button><p class="nt-nghe-tb" data-nghe-tb aria-live="polite"></p>';
    if (q.k === 'viet') return '<div class="nt-ch-zh" lang="zh">' + esc(h.tu).replace('＿', '<span class="nt-ch-o">？</span>') + '</div><div class="nt-ch-goi">' + esc(h.py) + ' — ' + esc(h.vn) + '</div>' +
      '<div class="nt-viet-o" id="ntVietO"></div><p class="nt-viet-tb" id="ntVietTb">✏️ Viết chữ còn thiếu vào ô — sai 3 nét sẽ hiện gợi ý</p>';
    return '';
  }
  // sau khi ve cau: doc cau nghe, tao o viet chu; xong(chon) goi lai luong tra loi cu
  function ganDacBiet(q, than, xong) {
    if (q.k === 'nghe') {
      var zh = giaiNghe(q.hoi.nghe), py = q.hoi.p ? giaiNghe(q.hoi.p) : '';
      var lai = $('[data-nghe-lai]', than), tb = $('[data-nghe-tb]', than);
      var hienPy = function () {
        if (tb) tb.innerHTML = 'Máy của em chưa phát được tiếng Trung — đọc pinyin rồi chọn chữ: <b>' + esc(py) + '</b>';
        if (lai) lai.textContent = '🔊 Thử nghe lại';
      };
      if (mayKhongNghe()) hienPy();
      // tu doc khi hien cau; dien thoai chan doc tu dong thi moi em bam nut (bam = duoc phep phat tieng)
      docKiem(zh, function (ok) {
        if (ok || !tb) return;
        if (lai) lai.textContent = '🔊 Bấm để nghe';
        tb.textContent = 'Bấm nút loa để nghe từ cần chọn.';
      });
      if (lai) lai.addEventListener('click', function () {
        docKiem(zh, function (ok) {
          if (ok) { if (tb && !mayKhongNghe()) tb.textContent = ''; return; }
          try { localStorage.setItem('hyv_nt_khong_nghe', '1'); } catch (e) { /* bo qua */ }
          hienPy();
        });
      });
    }
    if (q.k === 'viet') {
      napHanziWriter().then(function () {
        var o = $('#ntVietO', than), tb = $('#ntVietTb', than);
        if (!o || typeof HanziWriter === 'undefined') { if (tb) tb.textContent = 'Không tải được ô viết chữ — bấm Bỏ qua.'; return; }
        var w = HanziWriter.create(o, 'X', {
          width: 180, height: 180, padding: 10, showOutline: false, showCharacter: false, showHintAfterMisses: 3,
          strokeColor: '#1f1a17', highlightColor: '#4caf50', drawingColor: '#2b1d3a', drawingWidth: 18,
          charDataLoader: function () { return q.hoi.net; }
        });
        w.quiz({
          onMistake: function () { if (tb) tb.textContent = '❌ Chưa đúng nét, thử lại nhé!'; },
          onCorrectStroke: function () { if (tb) tb.textContent = '✅ Đúng rồi! Viết tiếp nét sau…'; },
          onComplete: function () { if (tb) tb.textContent = '🎉 Viết đúng rồi!'; setTimeout(function () { xong(0); }, 500); }
        });
      });
    }
  }

  // Thong bao cua widgets.js (ngoi sao cham chi...) di chung hang doi voi thong bao nong trai -> moi luc 1 cai
  function gomToastWidget() {
    var gan = function (t) {
      new MutationObserver(function () { if (!t.hidden && t.textContent.trim()) bao(t.textContent.trim()); })
        .observe(t, { attributes: true, attributeFilter: ['hidden'] });
    };
    var t = document.getElementById('hwToast');
    if (t) { gan(t); return; }
    if (!window.MutationObserver) return;
    var mo = new MutationObserver(function () { var x = document.getElementById('hwToast'); if (x) { mo.disconnect(); gan(x); } });
    mo.observe(document.body, { childList: true, subtree: true });
  }
  /* ---------------- bang "Thêm": hoat dong it dung hon ---------------- */
  function moThem() {
    dongBang();
    dongNoi();
    if (S.che !== 'xem') thoatDat();
    $('#ntThem').hidden = false;
    document.body.classList.add('co-them');
    var dau = $('#ntThemLuoi button:not([hidden])');
    try { if (dau) dau.focus({ preventScroll: true }); } catch (e) { /* bo qua */ }
  }
  function dongThem() {
    if ($('#ntThem').hidden) return;
    $('#ntThem').hidden = true;
    document.body.classList.remove('co-them');
  }
  // Cham do tren nut Thêm khi trong bang co viec dang cho (don giao duoc, hop qua, luot quay, moi cau...)
  function chamThem() {
    var c = $('#ntThemCham');
    if (!c) return;
    var co = $all('#ntThemLuoi .nt-cham').some(function (x) { return !x.hidden; }) ||
      $all('#ntThemLuoi .co-luot').some(function (x) { return !x.hidden; }) ||
      (S.st && CH.conQua > 0 && !$('#ntChuHan').classList.contains('het'));
    c.hidden = !co;
  }
  // Link "Học kiếm sao" -> bai em dang hoc (lay tu /api/farm/on), khong co thi trang hoc
  function datLinkHoc() {
    var a = $('#ntHocCta');
    if (!a) return;
    if (hocTiep && hocTiep.url) { a.href = hocTiep.url; if (hocTiep.nguon) a.title = 'Học tiếp: ' + hocTiep.nguon; return; }
    goi('/api/farm/on').then(function (d) {
      hocTiep = hocTiep || { url: d.gan || (d.urls || [])[0] || '', nguon: (d.nguon || '').replace(/^Ôn từ /, '') };
      if (hocTiep.url) { a.href = hocTiep.url; if (hocTiep.nguon) a.title = 'Học tiếp: ' + hocTiep.nguon; }
    }, function () {});
  }


  /* ================= Thi dua cac trai · nong trai dep · thach dau 24h · ke cup · vuon tu kho · cay cham chi · co thuong =================
     May chu dem / tra thuong (nong-trai-thidua.js); o day chi ve va gui hanh dong. */
  var TD = { cup: null, dep: null, tdh: null, cay7: null, vuon: null, vuonQ: null, banTdh: null };
  var HUY = ['', '🥇', '🥈', '🥉'];
  function conGio(ms) {
    var p = Math.max(0, Math.round(ms / 60000)), g = Math.floor(p / 60);
    return g ? g + ' giờ' + (p % 60 ? ' ' + (p % 60) + ' phút' : '') : Math.max(1, p) + ' phút';
  }
  function taiThiDua(lanDau) {
    goi('/api/farm/cup').then(function (r) {
      TD.cup = r;
      S.lopEm = r.em && r.em.indexOf('lop:') === 0 ? r.em.slice(4) : '';
      if (r.traMoi) bao('🏆 Trại ' + r.traMoi.ten + ' hạng ' + r.traMoi.hang + ' tuần trước!' + (r.traMoi.xu ? ' Em nhận +' + r.traMoi.xu + ' xu' : ' (học trong tuần để có xu nhé)'));
      if (r.ruyMoi) bao('🎀 Nông trại em đẹp hạng ' + r.ruyMoi.hang + ' tuần trước — đã gắn ruy băng!');
      if ((r.traMoi && r.traMoi.xu) || r.ruyMoi) goi('/api/farm').then(nhanTrangThai, function () {});
      if (bangDang && bangDang.loai === 'thidua') veBang();
    }, function () {});
    goi('/api/farm/cay7').then(function (r) { TD.cay7 = r; veCotTrai(); chamThem2(); }, function () {});
    taiTdh();
    if (moTn('vuon')) goi('/api/farm/vuon').then(function (r) { TD.vuon = r; chamThem2(); }, function () {});
    if (lanDau) nhanCoThuong();
  }
  function taiTdh() {
    return goi('/api/farm/tdh').then(function (r) {
      TD.tdh = r;
      if (r.kq) {
        var k = r.kq;
        bao(k.thang ? '⚔ Em thắng thách đấu học với ' + k.ten + ' (' + k.em + ' – ' + k.ban + ' sao)! +' + k.xu + ' xu'
          : k.hoa ? '⚔ Hoà thách đấu với ' + k.ten + ' (' + k.em + ' – ' + k.ban + ' sao) · +' + k.xu + ' xu'
          : '⚔ ' + k.ten + ' thắng thách đấu (' + k.ban + ' – ' + k.em + ' sao).' + (k.xu ? ' Em được +' + k.xu + ' xu vì đã cùng học!' : ' Lần sau cố lên nhé!'));
        if (k.xu) goi('/api/farm').then(nhanTrangThai, function () {});
      }
      veCotTrai(); chamThem2();
      if (bangDang && bangDang.loai === 'thidua' && bangDang.tab === 'tdh') veBang();
      return r;
    }, function () {});
  }
  // cham do tren cac o moi trong bang Them
  function chamThem2() {
    var t = TD.tdh && TD.tdh.dang, c = $('#ntTdCham');
    if (c) c.hidden = !(t && t.tt === 'cho' && !t.laNguoiMoi);
    var cy = $('#ntCay7Cham'), cp = $('#ntCay7Phu');
    if (cy && TD.cay7) { cy.hidden = !TD.cay7.chin; cp.textContent = TD.cay7.chin ? 'quả vàng đã chín — thu hoạch!' : TD.cay7.n + '/7 bông · mỗi ngày học = 1 bông'; }
    var vb = $('#ntThemVuon');
    if (vb) vb.hidden = !moTn('vuon');
    if (TD.vuon && TD.vuon.ds) {
      var no = TD.vuon.ds.filter(function (p) { return p.gd >= 3; }).length, den = TD.vuon.ds.filter(function (p) { return p.gd < 3 && p.denHan; }).length;
      $('#ntVuonCham').hidden = !(no || den);
      $('#ntVuonPhu').textContent = no ? no + ' cây nở hoa — thu hoạch!' : den ? den + ' cây đến hạn ôn hôm nay' : TD.vuon.ds.length + ' cây đang lớn';
    }
    chamThem();
  }
  // Qua "Co thuong" dang cho: nhan khi mo nong trai, moi qua 1 the
  function nhanCoThuong() {
    goi('/api/farm/cothuong/nhan', {}).then(function (r) {
      if (!r.ds || !r.ds.length) return;
      if (r.st) nhanTrangThai(r.st);
      var hang = r.ds.slice();
      var hien = function () {
        // cho bang khac (qua moi ngay, gioi thieu...) dong lai roi moi hien the
        if (!$('#ntLop').hidden || !$('#ntHoi').hidden || !$('#ntThem').hidden) { setTimeout(hien, 1500); return; }
        var q = hang.shift();
        if (!q) return;
        var m = q.loai === 'xu' ? { zh: '铜钱', py: 'tóngqián', vn: q.n + ' xu', hinh: 'ic-xu' }
          : q.loai === 'con' ? (function () { var x = tenMon(q.k); return { zh: x.zh, py: x.py, vn: x.vn + ' (vật nuôi quý)', hinh: q.k }; })()
          : (function () { var x = S.cat.CAY[q.k] || {}; return { zh: x.zh || '', py: x.py || '', vn: q.n + ' hạt ' + (x.vn || '').toLowerCase() + ' quý (gieo miễn phí)', hinh: 'sp-' + q.k }; })();
        tieng('len');
        moBangNho('<div class="nt-chuc nt-co-thuong"><span class="nt-co-nhan">👩‍🏫 Cô thưởng</span><h2>' + (/^🏅/.test(q.ly || '') ? '' : '🎁 ') + esc(q.ly || 'Cô thưởng cho em') + '</h2>' +
          '<div class="nt-co-qua">' + img(m.hinh) + '<b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.py) + ' · ' + esc(m.vn) + '</small></div>' +
          '<p>' + (q.loai === 'con' ? 'Đã cất vào <b>Kho → Túi đồ</b> — đặt lên nông trại khi nào em muốn.' : q.loai === 'hat' ? 'Chạm ô đất trống để gieo — hạt quý không tốn xu.' : 'Đã cộng vào xu của em.') + '</p>' +
          '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-dong>Cảm ơn cô! 谢谢老师！</button></div></div>');
        doc('谢谢老师');
        var b = $('#ntBangThan [data-dong]');
        if (b) b.addEventListener('click', function () { setTimeout(hien, 250); });
      };
      hien();
    }, function () {});
  }

  /* ---- cot trai tren nong trai ---- */
  function veCotTrai() {
    var cot = $('#ntTraiCot');
    if (!cot || !S.st) return;
    var ban = S.tham, tt = ban ? ban.tt : S.st.tt, cy = ban ? ban.cay7 : (TD.cay7 || S.st.cay7);
    var tran = ban ? TD.banTdh : TD.tdh && TD.tdh.dang;
    var h = '';
    if (cy) {
      var cham = '';
      for (var i = 0; i < 7; i++) cham += '<i class="' + (i < cy.n ? 'co' : '') + '"></i>';
      h += '<button type="button" class="nt-cot-o nt-cot-cay' + (cy.chin ? ' chin' : '') + (cy.rung ? ' rung' : '') + '" data-cot="cay7" title="Cây chăm chỉ: mỗi ngày học = 1 bông, đủ 7 bông ra quả vàng">' +
        '<span class="nt-cot-ic" aria-hidden="true">' + (cy.chin ? '🍊' : '🌸') + '</span><span class="nt-cot-cham" aria-label="' + cy.n + '/7 bông">' + cham + '</span></button>';
    }
    if (tran && tran.tt === 'dang') {
      h += '<button type="button" class="nt-cot-o nt-cot-tdh" data-cot="tdh"><span class="nt-cot-ic" aria-hidden="true">⚔</span><span><b>' + (ban ? esc(ban.ten.split(' ').pop()) : 'Em') + ' ' + tran.em + '⭐ – ' +
        esc(tran.ban.ten.split(' ').pop()) + ' ' + tran.banSao + '⭐</b><small>còn ' + conGio(tran.conMs) + '</small></span></button>';
    } else if (!ban && tran && tran.tt === 'cho') {
      h += '<button type="button" class="nt-cot-o nt-cot-tdh' + (tran.laNguoiMoi ? '' : ' moi') + '" data-cot="tdh"><span class="nt-cot-ic" aria-hidden="true">⚔</span><span><b>' +
        (tran.laNguoiMoi ? 'Chờ ' + esc(tran.ban.ten.split(' ').pop()) + ' nhận lời' : esc(tran.ban.ten.split(' ').pop()) + ' mời em thách đấu!') + '</b><small>thách đấu học 24 giờ</small></span></button>';
    }
    if (tt && tt.coVang) h += '<button type="button" class="nt-cot-o nt-cot-co" data-cot="cup"><span class="nt-cot-ic" aria-hidden="true">🚩</span><span><b>Trại vô địch</b><small>cờ vàng tuần này</small></span></button>';
    if (tt && tt.ruy) h += '<button type="button" class="nt-cot-o nt-cot-ruy" data-cot="dep"><span class="nt-cot-ic" aria-hidden="true">🎀</span><span><b>Nông trại đẹp #' + tt.ruy + '</b><small>ruy băng tuần này</small></span></button>';
    var soCup = tt ? tt.cup.length : 0, soDep = tt ? tt.dep.length : 0, soTd = tt ? tt.td : 0;
    if (soCup || soDep || soTd) {
      h += '<button type="button" class="nt-cot-o nt-cot-ke" data-cot="ke" title="Kệ cúp"><span class="nt-cot-ic" aria-hidden="true">🏆</span><span class="nt-ke-nho">' +
        (soCup ? '<span>🥇×' + soCup + '</span>' : '') + (soDep ? '<span>🎀×' + soDep + '</span>' : '') + (soTd ? '<span>⚔×' + soTd + '</span>' : '') + '</span></button>';
    }
    cot.innerHTML = h;
    cot.hidden = !h;
  }
  function bamCotTrai(e) {
    var b = e.target.closest('[data-cot]');
    if (!b) return;
    var k = b.getAttribute('data-cot');
    if (S.tham) {
      if (k === 'ke') { moBangNho('<h2 class="nt-ke-tit">🏆 Kệ cúp của ' + esc(S.tham.ten) + '</h2>' + htmlKe(S.tham.tt) + '<div class="nt-hang-nut"><button type="button" class="nt-nut" data-dong>Đóng</button></div>'); return; }
      if (k === 'cay7') { var cy = S.tham.cay7; bao('🌸 Cây chăm chỉ của ' + S.tham.ten + ': ' + cy.n + '/7 bông' + (cy.chin ? ' — đã ra quả vàng!' : '')); return; }
      if (k === 'tdh') { bao('⚔ ' + S.tham.ten + ' đang thách đấu học 24 giờ!'); return; }
      bao(k === 'cup' ? '🚩 Trại của ' + S.tham.ten + ' vô địch tuần trước!' : '🎀 Nông trại đẹp hạng ' + S.tham.tt.ruy + ' tuần trước!');
      return;
    }
    if (k === 'cay7') moBang('cay7');
    else moBang('thidua', k === 'co' ? 'cup' : k);
  }
  function htmlKe(tt) {
    if (!tt || (!tt.cup.length && !tt.dep.length && !tt.td)) return '<p class="nt-trong">Kệ cúp còn trống — học chăm cùng trại, trang trí nông trại đẹp và thách đấu học để có cúp nhé!</p>';
    var o = function (ic, tit, phu, cls) { return '<div class="nt-ke-o ' + (cls || '') + '"><span aria-hidden="true">' + ic + '</span><b>' + tit + '</b><small>' + phu + '</small></div>'; };
    return '<div class="nt-ke">' +
      tt.cup.map(function (x) { return o(HUY[x.hang] || '🏆', 'Cúp trại hạng ' + x.hang, esc(x.ten) + ' · tuần ' + x.tuan.slice(5).split('-').reverse().join('/'), 'h' + x.hang); }).join('') +
      tt.dep.map(function (x) { return o('🎀', 'Nông trại đẹp #' + x.hang, x.n + ' lượt thích · tuần ' + x.tuan.slice(5).split('-').reverse().join('/'), 'ruy'); }).join('') +
      (tt.td ? o('⚔', 'Thắng thách đấu ×' + tt.td, 'thách đấu học 24 giờ', 'td') : '') + '</div>';
  }

  /* ---- bang Cup cac trai ---- */
  function veThiDuaTrai(than) {
    var tab = bangDang.tab || 'cup';
    bangDang.tab = tab;
    $('#ntBangTit').textContent = 'Cúp các trại 🏆';
    datTab([['cup', '🏆 Cúp các trại'], ['dep', '🌷 Nông trại đẹp'], ['tdh', '⚔ Thách đấu'], ['ke', '🏅 Kệ cúp']], tab);
    if (tab === 'ke') { than.innerHTML = htmlKe(S.st.tt); return; }
    if (tab === 'dep') return veDepBang(than);
    if (tab === 'tdh') return veTdhBang(than);
    var r = TD.cup;
    if (!r) { than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; goi('/api/farm/cup').then(function (x) { TD.cup = x; if (bangDang && bangDang.loai === 'thidua') veBang(); }, function (e) { bao(e.message, 'loi'); }); return; }
    var html = '<p class="nt-meo">Điểm trại = <b>sao học trung bình mỗi bạn</b> trong tuần' + ' (+' + r.thuongHd + ' điểm khi cả trại xong <b>Đơn lớn</b> của thị trấn). Hết tuần: trại 🥇 +' + r.xu[0] + ' xu, 🥈 +' + r.xu[1] + ', 🥉 +' + r.xu[2] + ' cho mỗi bạn có học, trại vô địch cắm <b>cờ vàng 🚩</b> trên nông trại cả tuần sau. Còn ' + conLaiGiay(r.conGiay) + '.</p>';
    if (r.emHang) html += '<div class="nt-td-em"><span class="nt-td-hang">#' + r.emHang.hang + '</span><div><b>Trại của em</b><small>' + r.emHang.tb + ' sao/bạn · ' + r.emHang.so + ' bạn' + (r.emHang.hd ? ' · ✅ xong Đơn lớn' : ' · chưa xong Đơn lớn') + '</small></div><b class="nt-td-sao">' + r.emHang.diem + ' điểm</b></div>';
    html += '<ol class="nt-td-ds nt-trai-ds">' + r.ds.map(function (t) {
      return '<li class="' + (t.la ? 'la' : '') + '"><span class="nt-td-so">' + (HUY[t.hang] || t.hang) + '</span><span class="nt-trai-co c' + Math.min(4, t.hang) + '" aria-hidden="true">' + (t.loai === 'lop' ? '🚩' : '🏳') + '</span>' +
        '<span class="nt-td-ten"><b>' + esc(t.ten) + (t.la ? ' (trại em)' : '') + '</b><small>' + t.so + ' bạn · ' + t.sao + ' sao · ' + t.tb + ' sao/bạn' + (t.hd ? ' · ✅ Đơn lớn' : '') + '</small></span><span class="nt-td-sao">' + t.diem + '</span></li>';
    }).join('') + '</ol>';
    if (r.truoc && r.truoc.top.length) html += '<h3 class="nt-hn-h">Tuần trước</h3><div class="nt-trai-truoc">' + r.truoc.top.map(function (t) { return '<span>' + HUY[t.hang] + ' ' + esc(t.ten) + ' · ' + t.diem + '</span>'; }).join('') + '</div>';
    than.innerHTML = html;
  }
  function veDepBang(than) {
    than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
    goi('/api/farm/dep').then(function (r) {
      if (!bangDang || bangDang.tab !== 'dep') return;
      var html = '<p class="nt-meo">Sang thăm nông trại bạn rồi bấm <b>👍 Thích</b> — mỗi ngày ' + r.toiDa + ' lượt, mỗi nông trại 1 lượt/ngày, không tự bình chọn. Top 3 tuần được gắn <b>ruy băng 🎀</b> trên nông trại.' +
        (r.mo ? ' Hôm nay em còn <b>' + r.con + '</b> lượt.' : ' (Mở ở cấp ' + S.cat.MO_TN.bc.lv + ')') + '</p>';
      html += '<div class="nt-td-em"><span class="nt-td-hang">' + (r.em.hang ? '#' + r.em.hang : '–') + '</span><div><b>Nông trại của em</b><small>' + r.em.n + ' lượt thích tuần này</small></div></div>';
      html += r.ds.length ? '<ol class="nt-td-ds">' + r.ds.map(function (x) {
        return '<li class="' + (x.la ? 'la' : '') + '"><span class="nt-td-so">' + (HUY[x.hang] || x.hang) + '</span>' + anhNv(x.av, x.id) + '<span class="nt-td-ten"><b>' + esc(x.ten) + '</b><small>' + esc(x.lop || 'Cộng đồng') + '</small></span>' +
          '<span class="nt-td-sao">👍 ' + x.n + '</span>' + (x.la ? '' : '<button type="button" class="nt-nut" data-xem-nt="' + esc(x.id) + '">Thăm</button>') + '</li>';
      }).join('') + '</ol>' : '<p class="nt-trong">Tuần này chưa có lượt thích nào — sang thăm nông trại bạn và bình chọn nhé!</p>';
      if (r.truoc.length) html += '<h3 class="nt-hn-h">Tuần trước</h3><div class="nt-trai-truoc">' + r.truoc.map(function (x) { return '<span>🎀' + x.hang + ' ' + esc(x.ten) + ' · 👍' + x.n + '</span>'; }).join('') + '</div>';
      than.innerHTML = html;
      $all('[data-xem-nt]', than).forEach(function (b) { b.addEventListener('click', function () { var id = b.getAttribute('data-xem-nt'); dongBang(); sangThamId(id); }); });
    }, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
  }
  function sangThamId(id) {
    if (typeof thamBan === 'function') { thamBan(id); return; }
    bao('Mở Cộng đồng để sang thăm nông trại bạn nhé.');
  }
  function thichNongTrai() {
    var t = S.tham, b = $('#ntThamThich');
    if (!t || t.daThich) return;
    b.disabled = true;
    goi('/api/farm/dep/thich/' + encodeURIComponent(t.id), {}).then(function (r) {
      t.daThich = true; tieng('dung');
      bao('👍 Em đã thích nông trại của ' + t.ten + ' · còn ' + r.con + ' lượt hôm nay');
      veThamGoi();
    }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
  }
  // Thach dau hoc 24 gio
  function veTdhBang(than) {
    var r = TD.tdh;
    if (!r) { than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; taiTdh(); return; }
    var t = r.dang, html = '<p class="nt-meo">Mời 1 bạn cùng lớp đua học trong ' + r.gio + ' giờ: ai kiếm được <b>nhiều sao học hơn</b> (làm bài, ôn từ, học đủ giờ…) thì thắng <b>+' + r.thuong.thang + ' xu</b>; ai có học cũng được +' + r.thuong.thamGia + ' xu. Phần thưởng do hệ thống trao — không cược xu của em. Mỗi bạn chỉ 1 trận một lúc.</p>';
    if (!r.mo) { than.innerHTML = html + '<p class="nt-trong">🔒 Thách đấu học mở ở cấp ' + S.cat.MO_TN.tdh.lv + '.</p>'; return; }
    if (t && t.tt === 'dang') {
      var tong = Math.max(1, t.em + t.banSao);
      html += '<div class="nt-tdh-the"><div class="nt-tdh-dau"><b>⚔ Em vs ' + esc(t.ban.ten) + '</b><span>còn ' + conGio(t.conMs) + '</span></div>' +
        '<div class="nt-tdh-thanh"><i style="width:' + Math.round(t.em / tong * 100) + '%"></i></div>' +
        '<div class="nt-tdh-so"><span><b>' + t.em + '</b> ⭐ em</span><span>' + esc(t.ban.ten) + ' <b>' + t.banSao + '</b> ⭐</span></div>' +
        '<p>' + (t.em > t.banSao ? 'Em đang dẫn trước — giữ vững nhé!' : t.em < t.banSao ? 'Bạn đang dẫn — học thêm vài bài để vượt lên!' : 'Đang hoà — ai học tiếp sẽ dẫn trước!') + '</p>' +
        '<a class="nt-nut nt-nut-xanh nt-nut-to" href="' + esc((hocTiep && hocTiep.url) || '/') + '">📚 Học kiếm sao</a></div>';
      than.innerHTML = html; return;
    }
    if (t && t.tt === 'cho') {
      html += t.laNguoiMoi
        ? '<div class="nt-tdh-the"><b>⏳ Đang chờ ' + esc(t.ban.ten) + ' nhận lời</b><p>Lời mời hết hạn sau ' + conGio(t.conMs) + '.</p><button type="button" class="nt-nut" data-tdh="huy">Rút lại lời mời</button></div>'
        : '<div class="nt-tdh-the moi"><b>⚔ ' + esc(t.ban.ten) + ' mời em thách đấu học 24 giờ!</b><p>Nhận lời trong ' + conGio(t.conMs) + '. Trận bắt đầu ngay khi em đồng ý.</p><div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tdh="dongy">Nhận lời ⚔</button><button type="button" class="nt-nut" data-tdh="tuchoi">Để lần khác</button></div></div>';
      than.innerHTML = html;
      $all('[data-tdh]', than).forEach(function (b) {
        b.addEventListener('click', function () {
          b.disabled = true;
          goi('/api/farm/tdh/' + b.getAttribute('data-tdh'), {}).then(function () { tieng('dung'); taiTdh(); }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
        });
      });
      return;
    }
    html += '<h3 class="nt-hn-h">Chọn bạn cùng lớp để thách đấu</h3><div id="ntTdhBan"><p class="nt-trong">Đang tải…</p></div>';
    than.innerHTML = html;
    goi('/api/farm/lop').then(function (d) {
      var hop = $('#ntTdhBan', than);
      if (!hop) return;
      if (!d.lop) { hop.innerHTML = '<p class="nt-trong">Em chưa vào lớp nào — thách đấu học chỉ dành cho bạn cùng lớp.</p>'; return; }
      var ds = d.ds.filter(function (x) { return !x.la && x.co; });
      hop.innerHTML = ds.length ? '<ul class="nt-td-ds">' + ds.map(function (x) {
        return '<li><span class="nt-td-ten"><b>' + esc(x.ten) + '</b><small>Cấp ' + x.lv + '</small></span><button type="button" class="nt-nut nt-nut-vang" data-moi="' + esc(x.id) + '" data-ten="' + esc(x.ten) + '"' + (x.lv < S.cat.MO_TN.tdh.lv ? ' disabled title="Bạn chưa đủ cấp"' : '') + '>⚔ Thách đấu</button></li>';
      }).join('') + '</ul>' : '<p class="nt-trong">Lớp em chưa có bạn nào mở nông trại.</p>';
      $all('[data-moi]', hop).forEach(function (b) { b.addEventListener('click', function () { moiThachDau(b.getAttribute('data-moi'), b.getAttribute('data-ten'), b); }); });
    }, function (e) { var hop = $('#ntTdhBan', than); if (hop) hop.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
  }
  function moiThachDau(id, ten, b) {
    if (b) b.disabled = true;
    goi('/api/farm/tdh/moi/' + encodeURIComponent(id), {}).then(function () {
      tieng('dung'); bao('⚔ Đã mời ' + ten + ' thách đấu học 24 giờ — chờ bạn nhận lời nhé!');
      taiTdh();
    }, function (e) { if (b) b.disabled = false; bao(e.message, 'loi'); });
  }

  /* ---- Vuon tu kho ---- */
  var VUON_HINH = ['🌱', '🌿', '🪴', '🌸'];
  var VUON_TEN = ['Hạt mới nảy mầm', 'Cây con', 'Sắp nở hoa', 'Nở hoa — thu hoạch!'];
  function veVuon(than) {
    $('#ntBangTit').textContent = 'Vườn từ khó 难词花园';
    datTab([], '');
    var r = TD.vuon;
    if (!r) { than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; goi('/api/farm/vuon').then(function (x) { TD.vuon = x; chamThem2(); if (bangDang && bangDang.loai === 'vuon') veBang(); }, function (e) { bao(e.message, 'loi'); }); return; }
    if (!r.mo) { than.innerHTML = htmlKhoaTn('vuon'); return; }
    var html = htmlGt('vuon') + '<p class="nt-meo">Từ em hay sai thành hạt giống 🌱. Ôn <b>đúng</b> từ đó vào <b>ngày đến hạn</b> thì cây lớn 1 bậc — 3 lần là nở hoa 🌸 và thu hoạch được quà hiếm. Ôn sai cây chỉ héo một chút, không bao giờ chết.</p>';
    if (!r.ds.length) {
      html += r.coBai === false ? htmlChuaHoc() : '<p class="nt-trong">Vườn đang trống — từ nào em trả lời sai (ở nông trại hoặc bài ôn) sẽ thành hạt giống ở đây. Giỏi quá! 👏</p>';
      than.innerHTML = html; return;
    }
    html += '<div class="nt-vuon">' + r.ds.map(function (p) {
      return '<button type="button" class="nt-vuon-o gd' + p.gd + (p.heo ? ' heo' : '') + (p.denHan && p.gd < 3 ? ' den' : '') + '" data-vuon="' + p.i + '">' +
        '<span class="nt-vuon-cay" aria-hidden="true">' + VUON_HINH[p.gd] + '</span><b lang="zh">' + esc(p.zh) + '</b>' +
        '<small>' + (p.gd >= 3 ? '🌸 thu hoạch' : p.denHan ? '⏰ đến hạn ôn' : 'ôn lại sau ' + conGio(p.hen - Date.now() + S.lech)) + '</small>' +
        '<span class="nt-vuon-bac" aria-label="bậc ' + p.gd + '/3"><i class="' + (p.gd > 0 ? 'co' : '') + '"></i><i class="' + (p.gd > 1 ? 'co' : '') + '"></i><i class="' + (p.gd > 2 ? 'co' : '') + '"></i></span></button>';
    }).join('') + '</div><div id="ntVuonChiTiet"></div>';
    than.innerHTML = html;
    $all('[data-vuon]', than).forEach(function (b) { b.addEventListener('click', function () { veCayVuon(+b.getAttribute('data-vuon')); }); });
    if (TD.vuonQ != null) veCayVuon(TD.vuonQ);
  }
  function veCayVuon(i) {
    var p = TD.vuon.ds.filter(function (x) { return x.i === i; })[0], hop = $('#ntVuonChiTiet');
    if (!p || !hop) return;
    TD.vuonQ = i;
    $all('[data-vuon]').forEach(function (b) { b.classList.toggle('chon', +b.getAttribute('data-vuon') === i); });
    hop.innerHTML = '<div class="nt-vuon-ct"><button type="button" class="nt-vuon-tu" data-doc="' + esc(p.zh) + '"><b lang="zh">' + esc(p.zh) + '</b><span>' + esc(p.py) + '</span></button><p>' + esc(p.vn) + '</p>' +
      '<p class="nt-cn-nho">' + VUON_HINH[p.gd] + ' ' + VUON_TEN[p.gd] + (p.heo ? ' · hơi héo vì lần ôn trước sai' : '') + (p.gd < 3 && !p.denHan ? ' · cây đang nghỉ, ôn đúng vào ngày đến hạn mới lớn (ôn trước vẫn được luyện)' : '') + '</p>' +
      '<div class="nt-hang-nut">' + (p.gd >= 3 ? '<button type="button" class="nt-nut nt-nut-vang nt-nut-to" data-vuon-thu>🌸 Thu hoạch</button>' : '<button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-vuon-on>📖 Ôn ngay</button>') + '</div><div id="ntVuonCau"></div></div>';
    doc(p.zh);
    try { hop.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (e) { /* bo qua */ }
    var on = $('[data-vuon-on]', hop), thu = $('[data-vuon-thu]', hop);
    if (on) on.addEventListener('click', function () {
      on.disabled = true;
      goi('/api/farm/vuon/cau', { i: i }).then(function (r) { veCauVuon(r.cau); try { $('#ntVuonCau').scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (e) { /* bo qua */ } }, function (e) { on.disabled = false; bao(e.message, 'loi'); });
    });
    if (thu) thu.addEventListener('click', function () {
      thu.disabled = true;
      goi('/api/farm/vuon/thu', { i: i }).then(function (r) {
        TD.vuonQ = null; tieng('len');
        if (r.st) nhanTrangThai(r.st);
        var m = tenQua(r.qua);
        bao('🌸 Thu hoạch «' + r.zh + '»: ' + m.vn + ' ' + m.zh + ' — đã cất vào Kho!');
        goi('/api/farm/vuon').then(function (x) { TD.vuon = x; chamThem2(); if (bangDang && bangDang.loai === 'vuon') veBang(); });
      }, function (e) { thu.disabled = false; bao(e.message, 'loi'); });
    });
  }
  function veCauVuon(q) {
    var hop = $('#ntVuonCau');
    if (!hop) return;
    hop.innerHTML = htmlCauChu(q, '');
    var khoa = false;
    $all('[data-cn]', hop).forEach(function (b) {
      b.addEventListener('click', function () {
        if (khoa) return;
        khoa = true;
        var chon = +b.getAttribute('data-cn');
        goi('/api/farm/vuon/tl', { chon: chon }).then(function (r) {
          $all('[data-cn]', hop).forEach(function (x, j) { x.disabled = true; x.classList.add(j === r.dap ? 'dung' : j === chon ? 'sai' : 'mo'); });
          tieng(r.dung ? 'dung' : 'sai');
          var g = $('#ntCnGiai', hop);
          if (g) g.innerHTML = '<b lang="zh">' + esc(r.zh) + '</b> ' + esc(r.py) + ' — ' + esc(r.vn) + '<br>' +
            (r.dung ? (r.lon > 0 ? (r.gd >= 3 ? '🌸 Cây nở hoa rồi — thu hoạch nhé!' : '🌿 Cây lớn thêm 1 bậc!') : '✔ Đúng rồi! Cây đang nghỉ — ôn lại vào ngày đến hạn để cây lớn.') : (r.lon < 0 ? '🥀 Cây hơi héo — ôn lại sau ít phút nhé, cây không chết đâu.' : '✗ Chưa đúng — ôn lại sau ít phút nhé.'));
          doc(r.zh);
          TD.vuon.ds = r.ds; chamThem2();
          setTimeout(function () { if (bangDang && bangDang.loai === 'vuon') veBang(); }, r.dung ? 1500 : 2600);
        }, function (e) { khoa = false; bao(e.message, 'loi'); });
      });
    });
  }

  /* ---- Cay cham chi ---- */
  function veCay7(than) {
    $('#ntBangTit').textContent = 'Cây chăm chỉ 勤奋树';
    datTab([], '');
    var cy = TD.cay7;
    if (!cy) { than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; goi('/api/farm/cay7').then(function (r) { TD.cay7 = r; veCotTrai(); if (bangDang && bangDang.loai === 'cay7') veBang(); }, function (e) { bao(e.message, 'loi'); }); return; }
    var o = '';
    for (var i = 0; i < 7; i++) o += '<span class="nt-c7-o' + (i < cy.n ? ' co' : '') + '"><i aria-hidden="true">' + (i < cy.n ? '🌸' : '') + '</i><small>' + (i + 1) + '</small></span>';
    than.innerHTML = '<div class="nt-c7' + (cy.chin ? ' chin' : '') + (cy.rung ? ' rung' : '') + '">' +
      '<div class="nt-c7-cay" aria-hidden="true">' + (cy.chin ? '🌳<b>🍊</b>' : '🌳') + '</div>' +
      '<div class="nt-c7-hang" aria-label="' + cy.n + ' trên 7 bông">' + o + '</div>' +
      '<p class="nt-meo">Mỗi ngày em <b>học có sao</b> (làm bài, ôn từ…) cây nở thêm <b>1 bông</b>. Đủ 7 bông → <b>quả vàng</b> 🍊 (+' + cy.xu + ' xu và 1 món quà). Lỡ một ngày cây chỉ rụng 1 bông — nếu hôm trước em bật <b>khiên bảo vệ</b> (' + S.cat.KHIEN_SAO + ' sao) thì không rụng.</p>' +
      (cy.rung ? '<p class="nt-c7-tb">🍂 Hôm qua em quên học nên cây rụng 1 bông — học hôm nay để cây nở lại nhé!</p>' : '') +
      (cy.chin ? '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-vang nt-nut-to" id="ntC7Thu">🍊 Thu hoạch quả vàng</button></div>'
        : cy.hocHom ? '<p class="nt-c7-tb">✅ Hôm nay em đã học — mai học tiếp để có bông thứ ' + Math.min(7, cy.n + 1) + '!</p>'
        : '<div class="nt-hang-nut"><a class="nt-nut nt-nut-xanh nt-nut-to" href="' + esc((hocTiep && hocTiep.url) || '/') + '">📚 Học hôm nay</a></div>') + '</div>';
    var b = $('#ntC7Thu', than);
    if (b) b.addEventListener('click', function () {
      b.disabled = true;
      goi('/api/farm/cay7/thu', {}).then(function (r) {
        tieng('len'); TD.cay7 = Object.assign({ xu: r.xu }, r.cay7);
        if (r.st) nhanTrangThai(r.st);
        var m = tenQua(r.qua);
        bao('🍊 Quả vàng! +' + r.xu + ' xu và ' + m.vn + ' ' + m.zh);
        veCotTrai(); chamThem2();
        if (bangDang && bangDang.loai === 'cay7') veBang();
      }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
    });
  }

  /* ---------------- khoi dong ---------------- */
  function ganSuKien() {
    $('#ntDat').addEventListener('click', bamBanDo);
    $('#ntDat').addEventListener('pointermove', diChuot);
    ganKeo();
    $('#ntZoomCong').addEventListener('click', function () { zoom(8); });
    $('#ntZoomTru').addEventListener('click', function () { zoom(-8); });
    $('#ntDatXong').addEventListener('click', thoatDat);
    var moTuNut = function (b) {
      if (S.tham) veNha();
      var m = b.getAttribute('data-mo');
      if (m === 'thitran') return moThiTran();
      dongThiTran();
      if (S.che !== 'xem') thoatDat();
      if (m === 'chung') { CN.chon = null; if (!CN.tran || CN.tran.ket) CN.tran = null; taiCN(); }
      moBang(m, b.getAttribute('data-mo-tab') || undefined);
    };
    $('#ntDuoi').addEventListener('click', function (e) {
      var b = e.target.closest('[data-mo]');
      if (b) moTuNut(b);
    });
    $('#ntThemNut').addEventListener('click', function () { if (S.tham) veNha(); dongThiTran(); moThem(); });
    $('#ntThemDong').addEventListener('click', dongThem);
    $('#ntThem').addEventListener('click', function (e) {
      if (e.target === $('#ntThem')) { dongThem(); return; }
      var b = e.target.closest('#ntThemLuoi button');
      if (!b) return;
      // nut co su kien rieng (thu thach chu Han, vong quay, ho cau) da chay truoc; o day chi dong bang Them
      dongThem();
      if (b.hasAttribute('data-mo')) moTuNut(b);
    });
    // Nut "Học kiếm sao": vao bai em dang hoc
    $('#ntHocCta').addEventListener('click', function () { tieng('mua'); });
    if (window.MutationObserver) new MutationObserver(chamThem).observe($('#ntThemLuoi'), { subtree: true, attributes: true, attributeFilter: ['hidden', 'class'] });
    chamThem();
    $('#ntNvGon').addEventListener('click', function () {
      try { localStorage.setItem('hyv_nt_nv_gon', nvGon() ? '0' : '1'); } catch (e) { /* bo qua */ }
      veNvTiep();
    });
    $('#ntNvTiep').addEventListener('click', function () {
      var k = this.getAttribute('data-nv-k');
      dongThiTran(); if (S.tham) veNha();
      if (k === 'qua') moBang('hoc', 'muc'); else diNhiemVu(k);
    });
    $('#ntSao').addEventListener('click', function () { moBang('hoc'); });
    $('#ntXu').addEventListener('click', function () { moBang('hoc', 'doi'); });
    $('#ntMuc').addEventListener('click', function () { dongThiTran(); if (S.tham) veNha(); moBang('hoc', 'muc'); });
    $('#ntChuHan').addEventListener('click', function () { dongThiTran(); if (S.tham) veNha(); moBang('hoc', 'chuhan'); });
    $('#ntVongQuay').addEventListener('click', function () { dongThiTran(); if (S.tham) veNha(); VQ.qua = null; moBang('vongquay'); });
    ganHoCau();
    $('#ntNvNut').addEventListener('click', function () { dongThiTran(); if (S.tham) veNha(); moNhanVat(); });
    $('#ntLv').addEventListener('click', function () {
      var s = S.st;
      bao('Cấp ' + s.lv + ' · còn ' + (s.xpSau - s.xp) + ' kinh nghiệm nữa lên cấp ' + (s.lv + 1));
    });
    $('#ntBangDong').addEventListener('click', dongBang);
    $('#ntLop').addEventListener('click', function (e) {
      if (e.target === $('#ntLop')) dongBang();
      var t = e.target.closest('[data-tab]');
      if (t && bangDang) { bangDang.tab = t.getAttribute('data-tab'); veBang(); }
    });
    $('#ntHoiDong').addEventListener('click', dongHoi);
    $('#ntHoiChon').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-i]');
      if (b) traLoi(+b.getAttribute('data-i'), b);
    });
    document.addEventListener('click', function (e) {
      var gt = e.target.closest('[data-gt-xong]');
      if (gt) { ghiGt(gt.getAttribute('data-gt-xong')); var the = gt.closest('.nt-gt'); if (the) the.remove(); return; }
      var d = e.target.closest('[data-doc]');
      if (d) doc(d.getAttribute('data-doc'), d.classList.contains('nt-hoi-loa') && hoi ? hoi.hienPy : null);
      var nk = e.target.closest('[data-nk-chung]');
      if (nk) { dongThiTran(); if (S.tham) veNha(); CN.chon = null; taiCN(); moBang('chung', nk.getAttribute('data-nk-chung')); }
      if (e.target.closest('[data-nk-hoc]')) location.href = (hocTiep && hocTiep.url) || '/';
    });
    $('#ntThamVe').addEventListener('click', veNha);
    $('#ntThamTim').addEventListener('click', thaTim);
    $('#ntThamChao').addEventListener('click', moNoiChuyen);
    $('#ntThamSap').addEventListener('click', function () { if (S.tham) moBang('sapban'); });
    $('#ntThamTiem').addEventListener('click', function () { if (S.tham) moBang('kt-tiem', 'ban:' + S.tham.id); });
    $('#ntThamThich').addEventListener('click', thichNongTrai);
    $('#ntThamTdh').addEventListener('click', function () { if (S.tham) moiThachDau(S.tham.id, S.tham.ten, this); });
    $('#ntTraiCot').addEventListener('click', bamCotTrai);
    $('#ntThamTt').addEventListener('click', veThiTranBan);
    $('#ntThamLui').addEventListener('click', luiThiTran);
    $('#ntThamTai').addEventListener('click', function () { TAI.cau = null; TAI.xong = null; moBang('thientai'); });
    $('#ntTai').addEventListener('click', function () { dongThiTran(); TAI.xong = null; moBang('thientai'); });
    $('#ntThiTran').addEventListener('scroll', anNoiDan, { passive: true });
    $('#ntThiTran').addEventListener('click', function (e) {
      var dn = e.target.closest('[data-dan]');
      if (dn) { noiDan(dn); return; }
      var lo = e.target.closest('[data-lo]');
      if (lo) {
        var id = lo.getAttribute('data-lo');
        dongThiTran();
        if (S.st && thiTran && thiTran.ds.some(function (b) { return b.id === id && b.la; })) return; // lo cua em: ve nong trai
        thamBan(id, thiTran ? { id: thiTran.lopId || '', ten: thiTran.lop || '' } : null);
        return;
      }
      var t = e.target.closest('[data-tt]');
      if (!t) return;
      var k = t.getAttribute('data-tt');
      if (k === 've') dongThiTran();
      else if (k === 'cac') { dongThiTran(); moBang('cacthitran'); }
      else if (k === 'ld') { dongThiTran(); LD.d = null; moBang('loidai'); }
      else if (k === 'bt') { dongThiTran(); BT.d = null; BT.m = -1; moBang('bangtin', 'bt'); }
      else if (k === 'dk') { dongThiTran(); DK.ket = null; moBang('dukhach'); }
      else if (k === 'nha') moThiTran();
      else if (k.indexOf('kt-') === 0) { dongThiTran(); moBang(k); }
      else moBang('ban', k);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!$('#ntHoi').hidden) dongHoi();
      else if (!$('#ntThem').hidden) dongThem();
      else if (bangDang) dongBang();
      else if (!$('#ntHoCau').hidden) { if (HC.xemBst) { HC.xemBst = false; veHoCau(); } else dongHoCau(); }
      else if (!$('#ntThiTran').hidden) dongThiTran();
      else if (noiCua) dongNoi();
      else if (S.che !== 'xem') thoatDat();
    });
    window.addEventListener('resize', datViTriNoi);
    window.addEventListener('resize', function () {
      if (thiTran && thiTran.lop && !$('#ntThiTran').hidden && soCot($('#ntTtLuoi')) !== soCotTt) veThiTran();
    });
    // dong bang nho thi bo kieu "nho"
    new MutationObserver(function () { if ($('#ntLop').hidden) $('#ntLop').classList.remove('nho'); })
      .observe($('#ntLop'), { attributes: true, attributeFilter: ['hidden'] });
  }

  /* ---------------- API cho cac bang kinh te (public/js/nong-trai-kt.js) ---------------- */
  var NGOAI = {};
  window.NTX = {
    S: S, $: $, $all: $all, esc: esc, img: img, anh: anh, goi: goi, bao: bao, tieng: tieng, doc: doc, docKiem: docKiem,
    mayKhongNghe: mayKhongNghe, giaiNghe: giaiNghe, xinCauNghe: xinCauNghe, moBang: moBang, veBang: veBang, dongBang: dongBang,
    datTab: datTab, bangDang: function () { return bangDang; }, conLai: conLai, nhanTrangThai: nhanTrangThai,
    htmlKt: htmlKt, ganKt: ganKt, danhDauKt: danhDauKt, giaiKt: giaiKt, docKt: docKt, moLaiKt: moLaiKt, moTn: moTn, htmlGt: htmlGt, htmlKhoaTn: htmlKhoaTn,
    capEm: capEm, dongThiTran: dongThiTran, veNha: veNha, htmlTen: htmlTen, soGon: soGon, tenMon: tenMon, moBangNho: moBangNho, thoiLuong: thoiLuong,
    dangKy: function (loai, fn) { NGOAI[loai] = fn; },
    sau: [] // ham goi sau moi lan nhan trang thai
  };
  function batDau() {
    if (!auth()) { $('#ntCong').hidden = false; return; }
    ganSuKien();
    gomToastWidget();
    goi('/api/farm?cat=1').then(function (r) {
      S.cat = r.cat;
      delete r.cat;
      nhanTrangThai(r);
      datLinkHoc();
      taiThiDua(true);
      setInterval(function () { if (!document.hidden) taiThiDua(false); }, 5 * 60000);
      // dien thoai: cuon ban do vao giua
      var k = $('#ntKhung');
      k.scrollLeft = (k.scrollWidth - k.clientWidth) / 2;
      ganNhac();
      meoKeoTha();
      setInterval(nhip, 1000);
      lamMoiDinhKy();
      nhip();
      setTimeout(baoHang, 2500);
      taiChuHan().catch(function () { /* lan sau */ });
      veCanh();
      taiCN();
      taiThuongTt().catch(function () { /* lan sau */ });
      if (r.quaHomNay) setTimeout(quaDiemDanh, 500);
      // lan dau: huong dan choi, roi den thiet ke nhan vat (nut nhan vat nhap nhay cho den khi luu)
      else setTimeout(function () { if (!huongDan() && !r.av) moNhanVat(true); }, 500);
    }, function (err) {
      if (err.status === 401) { $('#ntCong').hidden = false; return; }
      bao(err.message, 'loi');
    });
  }
  batDau();
})();
