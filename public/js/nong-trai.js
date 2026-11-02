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
        if (!r.ok) { var e = new Error(j.error || 'Lỗi mạng, thử lại nhé.'); e.status = r.status; throw e; }
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
  // May chac chan khong doc duoc (khong co giong Trung, may chu cung khong co giong) -> bo kieu cau nghe
  function nghiDuoc() { return coGiongZh() !== false || !ttsHong; }

  /* ---------------- thong bao ---------------- */
  var baoHen = 0;
  function bao(chu, loai) {
    var b = $('#ntBao');
    b.textContent = chu;
    b.className = 'nt-bao hien' + (loai ? ' ' + loai : '');
    clearTimeout(baoHen);
    baoHen = setTimeout(function () { b.className = 'nt-bao'; }, 2600);
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
    if (S.che === 'dat' || S.che === 'sx') html += '<div class="nt-luoi"></div>';
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
      'px;width:' + w * T + 'px;height:' + w * T + 'px;z-index:' + (phang ? 1 : (o.y + w) * 10) + '" aria-label="' + esc(tenMon(o.k, o.n).vn) + '">';
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
    $('#ntMucPhu').textContent = m.mo ? m.mo + ' rương đang chờ' : m.tiep ? 'sao hôm nay' : 'đủ 3 rương';
    $('#ntMucVong').setAttribute('stroke-dasharray', Math.round(Math.min(1, m.h.homNay / dich) * 100) + ' 100');
    nut.classList.toggle('co-qua', m.mo > 0);
    nut.classList.toggle('xong', !m.tiep && !m.mo);
    $('#ntHocCham').hidden = !m.mo;
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
      setTimeout(function () { bayLen(el, '+' + them.sp[k], spAnh(k)); }, tre); tre += 220;
    });
    if (them.xu) setTimeout(function () { bayLen(el, '+' + them.xu, 'ic-xu'); }, tre), tre += 220;
    if (them.xp) setTimeout(function () { bayLen(el, '+' + them.xp, 'ic-xp'); }, tre);
  }
  function spAnh(k) { return 'sp-' + k; }

  /* ---------------- gui hanh dong ---------------- */
  function lam(body, el) {
    if (S.ban) return Promise.reject(new Error('ban'));
    S.ban = true;
    // lay vi tri truoc khi ve lai (phan tu cu se bi thay)
    var vt = el && el.getBoundingClientRect ? el.getBoundingClientRect() : null;
    return goi('/api/farm/act', body).then(function (r) {
      S.ban = false;
      nhanTrangThai(r.st);
      hienThem(r.them, vt);
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
    if (keo.daKeo) return;
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
    if (S.che === 'sx') {
      if (vatEl) {
        var id = +vatEl.getAttribute('data-id');
        S.chon = S.chon === id ? null : id;
        veBanDo();
        veThanhSx();
        return;
      }
      if (S.chon != null) {
        var vat = S.st.o.filter(function (o) { return o.id === S.chon; })[0];
        var q = oTuSuKien(e), rw = rong(vat);
        var nx = Math.min(q.x, S.st.kich.w - rw), ny = Math.min(q.y, S.st.kich.h - rw);
        if (!datDuoc(nx, ny, rw, vat.id)) { bao('Chỗ này đã có đồ rồi.', 'loi'); tieng('sai'); return; }
        lam({ a: 'doi', id: vat.id, x: nx, y: ny }).then(function () { tieng('mua'); veThanhSx(); }, function () {});
      }
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
        lam({ a: 'choan', id: o.id }, el).then(function () {
          tieng('dung');
          bao(con.vn + ' đã no! Sau ' + thoiLuong(con.phut) + ' sẽ có ' + c.SP[con.sp].vn.toLowerCase() + '.');
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
      '<p class="nt-noi-gio">' + img('sp-' + con.sp) + ' ' + esc(sp.vn) + ' <span lang="zh">' + esc(sp.zh) + '</span> sau <b data-con></b></p>';
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
    moNoi(el, '<div class="nt-noi-dau">' + img(t.hinh) + htmlTen(m) + '</div>' +
      (S.cat.TT[o.k] ? '<p class="nt-noi-phu">Điểm đẹp +' + S.cat.TT[o.k].dep + '</p>' : ''), o.id);
    doc(m.zh);
  }
  function timTheoId(id) { return S.st.o.filter(function (o) { return o.id === id; })[0]; }

  function moGieoHat(o, el) {
    var c = S.cat, lv = S.st.lv;
    var soTrong = S.st.o.filter(function (x) { return x.k === 'o' && !x.c; }).length;
    var html = '<p class="nt-noi-tit">Gieo hạt gì? <small>Có ' + S.st.xu + ' xu</small></p><div class="nt-hat">';
    Object.keys(c.CAY).forEach(function (k) {
      var cay = c.CAY[k], khoa = cay.lv > lv;
      html += '<div class="nt-hat-o' + (khoa ? ' khoa' : '') + '">' +
        '<button type="button" class="nt-hat-chon" data-hat="' + k + '"' + (khoa ? ' disabled' : '') + '>' + img('sp-' + k) +
        '<b lang="zh">' + esc(cay.zh) + '</b><span>' + esc(cay.vn) + '</span>' +
        (khoa ? '<em>Cấp ' + cay.lv + '</em>' : '<em>' + img('ic-xu') + cay.gia + ' · ' + thoiLuong(cay.phut) + '</em>') + '</button>' +
        (!khoa && soTrong > 1 ? '<button type="button" class="nt-hat-het" data-het="' + k + '" title="Gieo vào mọi ô trống">Gieo hết</button>' : '') +
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
    document.body.classList.remove('dang-dat', 'dang-sx');
    $('#ntSapXep').classList.remove('bat');
    veBanDo();
  }
  function batSapXep() {
    if (S.che === 'sx') return thoatDat();
    dongNoi();
    S.che = 'sx'; S.chon = null;
    document.body.classList.add('dang-sx');
    $('#ntSapXep').classList.add('bat');
    $('#ntThanhDat').hidden = false;
    veThanhSx();
    veBanDo();
  }
  function veThanhSx() {
    var chu = $('#ntThanhDatChu');
    var o = S.chon != null ? timTheoId(S.chon) : null;
    if (!o) { chu.innerHTML = 'Chạm vào một món để chọn, rồi chạm chỗ mới để dời đến.'; return; }
    var m = tenMon(o.k, o.n);
    chu.innerHTML = 'Đã chọn <b>' + esc(m.vn) + '</b> — chạm chỗ mới để dời' +
      (o.k !== 'nha' && o.k !== 'kho' ? ' <button type="button" class="nt-nut nt-nut-nho" id="ntCat">Cất vào túi</button>' : '');
    var b = $('#ntCat');
    if (b) b.addEventListener('click', function () {
      lam({ a: 'cat', id: o.id }).then(function () { S.chon = null; veThanhSx(); veBanDo(); bao('Đã cất ' + m.vn + ' vào túi đồ (trong Kho).'); }, function () {});
    });
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
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      keo = { dang: true, daKeo: false, x: e.clientX, y: e.clientY, sl: k.scrollLeft, st: k.scrollTop };
    });
    window.addEventListener('pointermove', function (e) {
      if (!keo.dang) return;
      var dx = e.clientX - keo.x, dy = e.clientY - keo.y;
      if (!keo.daKeo && Math.abs(dx) + Math.abs(dy) > 8) { keo.daKeo = true; k.classList.add('dang-keo'); }
      if (keo.daKeo) { k.scrollLeft = keo.sl - dx; k.scrollTop = keo.st - dy; datViTriNoi(); }
    });
    window.addEventListener('pointerup', function () {
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
    $all('img', than).forEach(ganLoiAnh);
  }

  function giaHtml(m) {
    return m.sao ? '<span class="nt-gia sao">' + img('ic-sao') + m.sao + '</span>' : '<span class="nt-gia xu">' + img('ic-xu') + m.xu + '</span>';
  }
  function theMon(k, m, hinh, them, khoa, nut) {
    return '<div class="nt-the' + (khoa ? ' khoa' : '') + '">' +
      '<div class="nt-the-anh">' + img(hinh) + (khoa ? '<span class="nt-khoa">Cấp ' + khoa + '</span>' : '') + '</div>' +
      htmlTen(m) + (them || '') + nut + '</div>';
  }
  function veCuaHang(than) {
    var tab = bangDang.tab || 'con';
    $('#ntBangTit').textContent = 'Cửa hàng';
    datTab([['con', 'Vật nuôi'], ['tt', 'Trang trí'], ['dat', 'Đất & nhà']], tab);
    var c = S.cat, s = S.st, lv = s.lv, html = '<div class="nt-luoi-the">';
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
        '<p class="nt-the-phu">' + (sau ? s.kich.w + '×' + s.kich.h + ' → ' + sau.w + '×' + sau.h + ' ô' : 'Đất đã rộng nhất') + '</p>',
        sau && sau.lv > lv ? sau.lv : 0,
        '<button type="button" class="nt-mua" data-lam="morong"' + (!sau || sau.lv > lv ? ' disabled' : '') + '>' + (sau ? giaHtml(sau) : 'Tối đa') + '</button>');
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

  function veKho(than) {
    var tab = bangDang.tab || 'sp';
    $('#ntBangTit').textContent = 'Kho của em';
    datTab([['sp', 'Nông sản'], ['bep', 'Bếp'], ['sap', 'Sạp (' + S.st.sap.length + ')'], ['tui', 'Túi đồ']], tab);
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
          var m = c.SP[k];
          html += theMon(k, m, 'sp-' + k, '<p class="nt-the-phu">Có <b>' + s.kho[k] + '</b> · ' + img('ic-xu') + m.ban + ' / cái</p>', 0,
            '<div class="nt-ban-nut"><button type="button" class="nt-mua" data-ban="' + k + '" data-n="1"' + (Math.round(m.ban * 0.7) > hm.con ? ' disabled title="Hết hạn mức bán hôm nay"' : '') + '>Bán 1</button>' +
            (s.kho[k] > 1 ? '<button type="button" class="nt-mua" data-ban="' + k + '" data-n="' + s.kho[k] + '"' + (Math.round(m.ban * s.kho[k] * 0.7) > hm.con ? ' disabled title="Vượt hạn mức bán hôm nay"' : '') + '>Bán hết</button>' : '') +
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
    var html = htmlDonDb() + '<p class="nt-meo">Mỗi ngày có 3 đơn mới. Giao đủ hàng để nhận nhiều xu và kinh nghiệm.</p><div class="nt-don-ds">';
    s.don.forEach(function (dn, i) {
      var du = duHang(dn.can);
      html += '<div class="nt-don' + (dn.xong ? ' xong' : '') + '"><div class="nt-don-hang">';
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
  function veMucTieu(than) {
    var m = tinhMuc(), h = m.h, max = m.R.length ? m.R[m.R.length - 1].sao : 100;
    var pt = function (n) { return Math.min(100, Math.round(n / max * 100)); };
    var html = '<div class="nt-hn">' +
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
    else goi('/api/farm/on').then(function (d) { hocTiep = { url: (d.urls || [])[0] || '', nguon: (d.nguon || '').replace(/^Ôn từ /, '') }; hienHocTiep(); }, function () {});
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

  /* ---------------- Ban hang: goi ten bang tieng Trung ---------------- */
  function hanMucBan() { var b = S.st.ban || { da: 0, toiDa: 0 }; return { da: b.da, toiDa: b.toiDa, con: Math.max(0, b.toiDa - b.da) }; }
  function moGoiTen(k, n) {
    var c = S.cat, m = c.SP[k], goc = m.ban * n;
    var dung = Math.round(goc * 1.1), sai = Math.max(1, Math.round(goc * 0.7));
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
    [['m1', ''], ['m2', ' nguoc'], ['m3', ''], ['m4', ' nguoc']].forEach(function (x) {
      h += '<div class="nt-canh-may ' + x[0] + x[1] + '"><i class="may"></i><i class="bong"></i></div>';
    });
    for (var i = 0; i < 3; i++) h += '<div class="nt-canh-chim c' + (i + 1) + '">' + svgChim() + '</div>';
    for (var j = 0; j < 5; j++) h += '<div class="nt-canh-buom b' + (j + 1) + '">' + svgBuom(MAU_BUOM[j]) + '</div>';
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

  // Ngay / chieu / dem theo gio Viet Nam (?dem=1 hoac ?dem=0 de xem thu)
  var demDaBao = false;
  function capNhatDem() {
    var gio = new Date(Date.now() + 7 * 3600000).getUTCHours();
    var ep = (location.search.match(/[?&]dem=([01])/) || [])[1];
    var dem = ep ? ep === '1' : (gio >= 18 || gio < 5);
    var chieu = !ep && gio >= 16 && gio < 18;
    document.body.classList.toggle('nt-dem', dem);
    document.body.classList.toggle('nt-chieu', chieu);
    if (dem && !demDaBao) {
      demDaBao = true;
      setTimeout(function () { bao('🌙 晚上好！Wǎnshang hǎo — Chào buổi tối! Đom đóm 萤火虫 yínghuǒchóng bay khắp nông trại.'); doc('晚上好'); }, 1800);
    }
  }

  /* ---------------- Thien tai 天灾 ---------------- */
  var TAI_IC = { gh: '☀️', sau: '🐛', mua: '🌧️', ret: '❄️' };
  var TAI_VIEC_IC = { gh: '🪣', sau: '🐛', mua: '⛏️', ret: '🪵' };
  var TAI = { cau: null, xong: null };
  // Thanh canh bao tren nong trai cua em + hieu ung tren ruong (ca khi sang nha ban)
  function veTai() {
    var t = S.tham ? S.tham.tai : (S.st && S.st.tai);
    var khung = $('#ntKhung'), lop = $('#ntTaiLop');
    ['gh', 'sau', 'mua', 'ret'].forEach(function (k) { khung.classList.toggle('tai-' + k, !!(t && t.k === k)); });
    if (!lop) { lop = document.createElement('div'); lop.id = 'ntTaiLop'; lop.className = 'nt-tai-lop'; lop.setAttribute('aria-hidden', 'true'); document.body.appendChild(lop); }
    lop.className = 'nt-tai-lop' + (t ? ' tai-' + t.k : '');
    var kieu = t ? t.k : '';
    document.body.setAttribute('data-tai', kieu);
    if (lop.getAttribute('data-k') !== kieu) {
      lop.setAttribute('data-k', kieu);
      var h = '';
      if (kieu === 'sau') for (var i = 0; i < 9; i++) h += '<i class="nt-sau" style="left:' + (6 + (i * 37) % 86) + '%;top:' + (12 + (i * 53) % 74) + '%;animation-delay:-' + (i * 0.7) + 's"></i>';
      if (kieu === 'gh') h = '<i class="nt-mat-troi"></i>';
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
      nut.innerHTML = '<span class="nt-tai-ic" aria-hidden="true">' + TAI_IC[em.k] + '</span><span class="nt-muc-chu"><b><span lang="zh">' + esc(em.zh) + '</span> ' + esc(em.vn) + '!</b>' +
        '<small>' + esc(em.viec) + ' ' + em.co + '/' + em.can + ' · bấm để chống thiên tai</small></span>';
    }
  }
  function htmlTaiDau(t, cuaBan) {
    var viec = '';
    for (var i = 0; i < t.can; i++) viec += '<span class="' + (i < t.co ? 'xong' : '') + '">' + TAI_VIEC_IC[t.k] + '</span>';
    return '<div class="nt-tai-dau tai-' + t.k + '"><span class="nt-tai-to" aria-hidden="true">' + TAI_IC[t.k] + '</span><div>' +
      '<p class="nt-cn-nho">' + (cuaBan ? 'Nông trại của ' + esc(cuaBan) + ' đang gặp' : 'Nông trại của em đang gặp') + ' thiên tai <span lang="zh">天灾</span></p>' +
      '<h3><span lang="zh">' + esc(t.zh) + '</span> ' + esc(t.py) + ' · ' + esc(t.vn) + '</h3>' +
      '<p class="nt-tai-hieu">' + esc(t.hieu) + '</p></div></div>' +
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
  var CH = { de: null, i: 0, khoa: false, conQua: 3, quaNgay: 3, dat: 8, so: 10, ketThuc: null };
  var TEN_KIEU_CH = { nghia: 'Chọn chữ Hán đúng nghĩa', py: 'Chữ này đọc là gì?', chu: 'Chữ này nghĩa là gì?', thieu: 'Điền chữ còn thiếu' };
  function veNutChuHan() {
    var p = $('#ntChuHanPhu');
    if (!p) return;
    p.textContent = CH.conQua > 0 ? 'còn ' + CH.conQua + ' hộp quà hôm nay 🎁' : 'luyện thêm · mai có quà mới';
    $('#ntChuHan').classList.toggle('het', CH.conQua <= 0);
  }
  function taiChuHan() {
    return goi('/api/farm/chuhan').then(function (r) {
      CH.conQua = r.conQua; CH.quaNgay = r.quaNgay; CH.dat = r.dat; CH.so = r.so;
      if (r.dang && !CH.ketThuc) { CH.de = r.dang; CH.i = r.dang.da; }
      veNutChuHan();
      return r;
    });
  }
  function veChuHan(than) {
    if (CH.xemBst) { veBoSuuTap(than); return; }
    if (CH.ketThuc) { veKetQuaCh(than); return; }
    if (CH.de && CH.i < CH.de.ds.length) { veCauCh(than); return; }
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
      goi('/api/farm/chuhan/moi', {}).then(function (r) {
        CH.de = r.dang; CH.i = 0; CH.conQua = r.conQua; CH.ketThuc = null;
        veBang();
      }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
    });
  }
  function veCauCh(than) {
    var de = CH.de, q = de.ds[CH.i], h = q.hoi;
    var deBai = q.k === 'nghia' ? '<div class="nt-ch-vn">' + esc(h.vn) + '</div>'
      : q.k === 'thieu' ? '<div class="nt-ch-zh" lang="zh">' + esc(h.thieu).replace('＿', '<span class="nt-ch-o">？</span>') + '</div><div class="nt-ch-goi">' + esc(h.vn) + '</div>'
      : '<div class="nt-ch-zh" lang="zh">' + esc(h.zh) + '</div>';
    var laZh = q.k === 'nghia' || q.k === 'thieu';
    than.innerHTML = '<div class="nt-ch">' +
      '<div class="nt-ch-dau"><span>Câu ' + (CH.i + 1) + '/' + de.ds.length + '</span><span class="nt-ch-cham">' + de.ds.map(function (x, j) { return '<i class="' + (j < CH.i ? 'qua' : j === CH.i ? 'dang' : '') + '"></i>'; }).join('') + '</span><span>✔ ' + de.dung + '</span></div>' +
      '<p class="nt-ch-kieu">' + TEN_KIEU_CH[q.k] + '</p>' + deBai +
      '<div class="nt-ch-lua' + (laZh ? ' zh' : '') + '">' + q.lua.map(function (l, j) {
        return '<button type="button" data-ch="' + j + '"' + (laZh ? ' lang="zh"' : '') + '>' + esc(l) + '</button>';
      }).join('') + '</div><p class="nt-ch-giai" id="ntChGiai" aria-live="polite"></p>' +
      (de.nguon ? '<p class="nt-ch-nguon">Từ: ' + esc(de.nguon) + '</p>' : '') + '</div>';
    CH.khoa = false;
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
  var tdPham = 'lop';
  function conLai(giay) {
    var ngay = Math.floor(giay / 86400), gio = Math.floor((giay % 86400) / 3600);
    return ngay ? ngay + ' ngày ' + gio + ' giờ' : gio ? gio + ' giờ' : Math.max(1, Math.floor(giay / 60)) + ' phút';
  }
  function veThiDua(than) {
    than.innerHTML = '<div class="nt-td-pham" role="group" aria-label="Phạm vi"><button type="button" data-td="lop"' + (tdPham === 'lop' ? ' class="bat"' : '') + '>Lớp em</button>' +
      '<button type="button" data-td="cd"' + (tdPham === 'cd' ? ' class="bat"' : '') + '>Cộng đồng</button></div><div id="ntTdThan"><p class="nt-trong">Đang tải…</p></div>';
    $all('[data-td]', than).forEach(function (b) { b.addEventListener('click', function () { tdPham = b.getAttribute('data-td'); veBang(); }); });
    goi('/api/farm/thidua?pham=' + tdPham).then(function (d) {
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
        ' · xếp theo <b>sao học tập</b> kiếm được tuần này. Tuần mới bắt đầu sau <b>' + conLai(d.conGiay) + '</b>.</p>';
      if (bac) html += '<div class="nt-bucvinh">' + bac + '</div>';
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
  function thamBan(id) {
    goi('/api/farm/xem/' + encodeURIComponent(id)).then(function (r) {
      dongBang();
      dongThiTran();
      thoatDat();
      S.tham = { id: id, ten: r.ten, kich: r.kich, o: r.o, lv: r.lv, dep: r.dep, tim: r.tim, sap: r.sap || [], av: r.av, daTim: r.daTim, daChao: r.daChao, conGiup: r.conGiup, conTin: r.conTin, daTang: r.daTang, hv: r.hv, tai: r.tai, daGiupTai: r.daGiupTai };
      S.lechTham = r.now - Date.now();
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
  function veNha() {
    S.tham = null;
    $('#ntTham').hidden = true;
    document.body.classList.remove('dang-tham');
    dongNoi();
    veBanDo();
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
  function khoangGia(k, n) {
    var goc = S.cat.SP[k].ban * n;
    return { min: Math.max(1, Math.ceil(goc * 0.5)), max: Math.max(1, Math.round(goc * 1.3)), goc: goc, buoc: Math.max(1, Math.round(goc * 0.1)) };
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
    var html = '<p class="nt-meo">👩‍🍳 Nấu món Trung Hoa từ nông sản — món ăn bán được nhiều xu hơn. Thiếu nguyên liệu? Mua ở <button type="button" class="nt-link" data-mo-cho>Chợ cộng đồng</button>. Mỗi nguyên liệu có tranh, chữ Hán, pinyin và nghĩa — đọc to chữ Hán để nhớ nhé!</p><div class="nt-luoi-the">';
    Object.keys(M).forEach(function (k) {
      var m = M[k], du = true;
      var ct = Object.keys(m.can).map(function (x) {
        var co = s.kho[x] || 0, ok = co >= m.can[x];
        if (!ok) du = false;
        return dongNl(x, m.can[x], co, m.can[x]);
      }).join('');
      var lan = (s.daNau || {})[k] || 0;
      html += '<div class="nt-the nt-mon"><div class="nt-the-anh">' + img('sp-' + k) + (lan ? '' : '<span class="nt-khoa nt-mon-moi">Món mới</span>') + '</div>' +
        '<b class="nt-mon-vn">' + esc(m.vn) + '</b><ul class="nt-ct">' + ct + '</ul>' +
        '<p class="nt-the-phu">' + img('ic-xu') + c.SP[k].ban + ' / phần' + (lan ? ' · đã nấu ' + lan : '') + '</p>' +
        '<button type="button" class="nt-mua" data-nau="' + k + '"' + (du ? '' : ' disabled') + '>' + (du ? 'Nấu' : 'Thiếu nguyên liệu') + '</button></div>';
    });
    than.innerHTML = html + '</div>';
    $all('[data-mo-cho]', than).forEach(function (b) { b.addEventListener('click', function () { moBang('congdong', 'cho'); }); });
    $all('[data-nau]', than).forEach(function (b) {
      b.addEventListener('click', function () { moNau(b.getAttribute('data-nau')); });
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
    baySap.gia = khoangGia(k, baySap.n).goc;
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
      var kg = khoangGia(baySap.k, baySap.n);
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
        var kg2 = khoangGia(baySap.k, baySap.n);
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
    datTab([['nt', 'Nông trại mọi người'], ['cho', 'Chợ cộng đồng'], ['can', 'Cần mua']], tab);
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
      var html = '<p class="nt-meo">Hàng các bạn khắp Hi Hán đang bày bán, rẻ nhất xếp trước. Em đang có ' + img('ic-xu') + '<b>' + S.st.xu + '</b> xu. Muốn bán? Vào <b>Kho → Sạp của em</b>. Không thấy món em cần? Đăng ở thẻ <button type="button" class="nt-link" data-tab="can">Cần mua</button>.</p>';
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
      var html = '<p class="nt-meo">Chợ lớp <b>' + esc(r.lop) + '</b>: nông sản các bạn bày bán. Mua về để giao <b>Đơn hàng</b> nhanh hơn. Em đang có ' + img('ic-xu') + '<b>' + S.st.xu + '</b> xu.</p>';
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
      var cu = S.st.nkMoi || 0;
      goi('/api/farm').then(function (st) {
        if (S.ban || S.tham || S.che !== 'xem' || hoi || bangDang || noiCua) return;
        nhanTrangThai(st);
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
    datTab([['ct', 'Công trình'], ['td', 'Thách đấu'], ['hb', 'Bạn học'], ['lh', 'Lễ hội']], tab);
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
      '<div><p class="nt-cn-nho">' + (l.mo ? 'Đang diễn ra · kết thúc sau ' + conLai(l.conGiay) : 'Lễ hội cuối tuần · mở sau ' + conLai(l.conGiay)) + '</p>' +
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
    lopId = typeof lopId === 'string' ? lopId : '';
    dongNoi();
    dongBang();
    if (S.che !== 'xem') thoatDat();
    if (S.tham) veNha();
    $('#ntThiTran').hidden = false;
    document.body.classList.add('o-thi-tran');
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
      '<small>Mỗi câu chữ Hán đúng ở nông trại (lôi đài, thử thách chữ Hán, góp gạch, thách đấu, du khách) = <b>+1 điểm</b> cho lớp em, tối đa ' + r.ldNgay + ' điểm/bạn/ngày. Xếp theo <b>điểm trung bình mỗi bạn</b> nên lớp ít người vẫn thắng được. Còn ' + conLai(r.giayHetTuan) + '.</small>' +
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
    anNoiDan();
    $('#ntThiTran').hidden = true;
    document.body.classList.remove('o-thi-tran');
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
    var cot = soCotTt = soCot(luoi), html = '';
    r.ds.forEach(function (b, i) {
      if (i % cot === 0) html += hangPho(i / cot);
      html += oPho(b, i);
    });
    luoi.innerHTML = html + hangPho(Math.ceil(r.ds.length / cot));
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
  function oPho(b, i) {
    // ven duong: den long goc tren, cay / chau hoa goc duoi (moi lo mot kieu)
    return '<div class="nt-o-pho">' + loDat(b, i) +
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
    var gio = new Date(Date.now() + 7 * 3600000).getUTCHours();
    tt.classList.toggle('chieu', gio >= 16 && gio < 18);
    tt.classList.toggle('dem', gio >= 18 || gio < 5);
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
      (b.tuan ? ' · ⭐ ' + b.tuan + ' tuần' : '') + '</small>' + (b.vuaHoc ? '<span class="nt-lo-vua">👑 Chăm học nhất tuần</span>' : '') + '</div></button>';
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
      // du phong: ten cac mon trong nong trai
      if (ra.length < 4) {
        nguonTu = 'Ôn tên các món trong nông trại';
        ['CAY', 'CON', 'TT'].forEach(function (n) {
          Object.keys(S.cat[n]).forEach(function (k) { var m = S.cat[n][k]; if (!thay[m.zh]) { thay[m.zh] = 1; ra.push({ zh: m.zh, py: m.py, vn: m.vn, pos: '' }); } });
        });
      }
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
    moBangNho('<div class="nt-chuc">' + img('ic-xp') + '<h2>Lên cấp ' + n + '!</h2>' +
      (moi.length ? '<p>Mở khoá: <b>' + esc(moi.join(', ')) + '</b></p>' : '<p>Nông trại của em ngày càng lớn!</p>') +
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

  /* ---------------- khoi dong ---------------- */
  function ganSuKien() {
    $('#ntDat').addEventListener('click', bamBanDo);
    $('#ntDat').addEventListener('pointermove', diChuot);
    ganKeo();
    $('#ntZoomCong').addEventListener('click', function () { zoom(8); });
    $('#ntZoomTru').addEventListener('click', function () { zoom(-8); });
    $('#ntDatXong').addEventListener('click', thoatDat);
    $('#ntDuoi').addEventListener('click', function (e) {
      var b = e.target.closest('[data-mo]');
      if (!b) return;
      if (S.tham) veNha();
      var m = b.getAttribute('data-mo');
      if (m === 'thitran') return moThiTran();
      dongThiTran();
      if (m === 'sapxep') return batSapXep();
      if (S.che !== 'xem') thoatDat();
      if (m === 'chung') { CN.chon = null; if (!CN.tran || CN.tran.ket) CN.tran = null; taiCN(); }
      moBang(m);
    });
    $('#ntSao').addEventListener('click', function () { moBang('hoc'); });
    $('#ntXu').addEventListener('click', function () { moBang('hoc', 'doi'); });
    $('#ntMuc').addEventListener('click', function () { dongThiTran(); if (S.tham) veNha(); moBang('hoc', 'muc'); });
    $('#ntChuHan').addEventListener('click', function () { dongThiTran(); if (S.tham) veNha(); moBang('hoc', 'chuhan'); });
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
    $('#ntThamTt').addEventListener('click', moThiTran);
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
        thamBan(id);
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
      else moBang('ban', k);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!$('#ntHoi').hidden) dongHoi();
      else if (bangDang) dongBang();
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

  function batDau() {
    if (!auth()) { $('#ntCong').hidden = false; return; }
    ganSuKien();
    goi('/api/farm?cat=1').then(function (r) {
      S.cat = r.cat;
      delete r.cat;
      nhanTrangThai(r);
      // dien thoai: cuon ban do vao giua
      var k = $('#ntKhung');
      k.scrollLeft = (k.scrollWidth - k.clientWidth) / 2;
      ganNhac();
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
