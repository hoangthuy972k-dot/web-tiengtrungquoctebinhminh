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
  function anh(ten) { return ANH + ten + '.svg' + V; }
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
  }

  /* ---------------- HUD ---------------- */
  function veHud() {
    var s = S.st;
    $('#ntSaoSo').textContent = s.sao;
    $('#ntXuSo').textContent = s.xu;
    $('#ntLvSo').textContent = s.lv;
    var tile = s.xpSau > s.xpLv ? (s.xp - s.xpLv) / (s.xpSau - s.xpLv) : 1;
    $('#ntXpThanh').style.width = Math.round(Math.max(0, Math.min(1, tile)) * 100) + '%';
    $('#ntLv').title = 'Cấp ' + s.lv + ' · ' + (s.xp - s.xpLv) + '/' + (s.xpSau - s.xpLv) + ' kinh nghiệm';
    var conDon = s.don.some(function (dn) { return !dn.xong && duHang(dn.can); });
    $('#ntDonCham').hidden = !conDon;
    $('#ntBanCham').hidden = !(s.nkMoi > 0);
    veNutNv();
    veNutThu();
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
      Object.keys(c.TT).sort(function (a, b) { return c.TT[a].lv - c.TT[b].lv; }).forEach(function (k) {
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
    moBang('hoc');
    if (can) bao('Cần ' + can + ' sao — em đang có ' + S.st.sao + '. Học thêm để kiếm sao nhé!', 'loi');
  }

  function veKho(than) {
    var tab = bangDang.tab || 'sp';
    $('#ntBangTit').textContent = 'Kho của em';
    datTab([['sp', 'Nông sản'], ['sap', 'Sạp của em (' + S.st.sap.length + ')'], ['tui', 'Túi đồ']], tab);
    if (tab === 'sap') { veSapEm(than); return; }
    var c = S.cat, s = S.st, html = '';
    if (tab === 'sp') {
      var ks = Object.keys(s.kho).filter(function (k) { return s.kho[k] > 0; });
      if (!ks.length) html = '<p class="nt-trong">Kho trống. Thu hoạch cây trồng và nhặt trứng, sữa… sẽ cất ở đây.</p>';
      else {
        html = '<div class="nt-luoi-the">';
        ks.forEach(function (k) {
          var m = c.SP[k];
          html += theMon(k, m, 'sp-' + k, '<p class="nt-the-phu">Có <b>' + s.kho[k] + '</b> · ' + img('ic-xu') + m.ban + ' / cái</p>', 0,
            '<div class="nt-ban-nut"><button type="button" class="nt-mua" data-ban="' + k + '" data-n="1">Bán 1</button>' +
            (s.kho[k] > 1 ? '<button type="button" class="nt-mua" data-ban="' + k + '" data-n="' + s.kho[k] + '">Bán hết</button>' : '') +
            '<button type="button" class="nt-mua" data-baysan="' + k + '">Bày sạp</button></div>');
        });
        html += '</div><p class="nt-meo">💡 Giữ lại nông sản để giao <b>Đơn hàng</b> — được nhiều xu hơn bán lẻ. Hoặc <b>bày sạp</b> bán cho bạn cùng lớp.</p>';
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
        var k = b.getAttribute('data-ban');
        lam({ a: 'ban', k: k, n: +b.getAttribute('data-n') }, b).then(function () { tieng('xu'); veBang(); }, function () {});
      });
    });
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
    var html = '<p class="nt-meo">Mỗi ngày có 3 đơn mới. Giao đủ hàng để nhận nhiều xu và kinh nghiệm.</p><div class="nt-don-ds">';
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
    $('#ntBangTit').textContent = 'Kiếm thêm sao';
    datTab([], '');
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

  /* ---------------- tham nong trai ban ---------------- */
  function thamBan(id) {
    goi('/api/farm/xem/' + encodeURIComponent(id)).then(function (r) {
      dongBang();
      dongThiTran();
      thoatDat();
      S.tham = { id: id, ten: r.ten, kich: r.kich, o: r.o, lv: r.lv, dep: r.dep, tim: r.tim, sap: r.sap || [], av: r.av, daTim: r.daTim, daChao: r.daChao, conGiup: r.conGiup };
      S.lechTham = r.now - Date.now();
      $('#ntThamTen').textContent = 'Nông trại của ' + r.ten;
      $('#ntThamPhu').textContent = 'Cấp ' + r.lv + ' · điểm đẹp ' + r.dep + ' · ❤ ' + r.tim;
      $('#ntTham').hidden = false;
      veThamGoi();
      document.body.classList.add('dang-tham');
      veBanDo();
      $('#ntKhung').scrollTo(0, 0);
    }, function (err) { bao(err.message, 'loi'); });
  }
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
  function htmlNv(av, ten, khach) {
    return '<span class="nt-nv-ten' + (khach ? ' khach' : '') + '">' + esc(NV.tenNgan(ten)) + '</span><div class="nt-nv-hinh">' + NV.svg(av) + '</div>';
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
      ? [{ key: 'chu', av: S.tham.av || NV.macDinh(S.tham.id), ten: S.tham.ten }, { key: 'em', av: avEm(), ten: tenEm(), khach: true }]
      : [{ key: 'em', av: avEm(), ten: tenEm() }];
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
      n.el.innerHTML = htmlNv(c.av, c.ten, c.khach);
      datViTriNv(n);
      dat.appendChild(n.el);
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

  /* ---------------- choi cung ban ---------------- */
  // Sap hang cua em, cho lop, giup ban khi den choi, loi chao co san, nhat ky nong trai.
  function tenSp(k) { return S.cat.SP[k] || { zh: '', py: '', vn: k }; }
  function khoangGia(k, n) {
    var goc = S.cat.SP[k].ban * n;
    return { min: Math.max(1, Math.ceil(goc * 0.5)), max: goc * 2, goc: goc, buoc: Math.max(1, Math.round(goc * 0.1)) };
  }
  function theSap(o, nut, ai) {
    var m = tenSp(o.k);
    return '<div class="nt-sap-o"><span class="nt-sap-sl">×' + o.n + '</span>' + img('sp-' + o.k) +
      '<b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.py) + ' · ' + esc(m.vn) + '</small>' +
      (ai ? '<span class="nt-sap-ai">Sạp của ' + esc(ai) + '</span>' : '') + nut + '</div>';
  }
  function nutMua(o, id) {
    var du = S.st.xu >= o.gia;
    return '<button type="button" class="nt-mua" data-muasap="' + o.id + '" data-ban-id="' + esc(id) + '"' + (du ? '' : ' disabled') + '>' +
      '<span class="nt-gia xu">' + img('ic-xu') + o.gia + '</span>' + (du ? ' Mua' : '') + '</button>';
  }
  // Mua 1 o sap cua ban; xong goi xong(r) de ve lai danh sach
  function muaSap(id, sid, el, xong) {
    if (S.ban) return;
    S.ban = true;
    var vt = el && el.getBoundingClientRect ? el.getBoundingClientRect() : null;
    goi('/api/farm/muasap/' + encodeURIComponent(id), { sid: sid }).then(function (r) {
      S.ban = false;
      nhanTrangThai(r.st);
      hienThem(r.them, vt);
      tieng('xu');
      var k = Object.keys(r.them.sp)[0];
      if (k) { var m = tenSp(k); bao('Đã mua ' + r.them.sp[k] + ' ' + m.vn + ' · ' + m.zh + ' ' + m.py); doc(m.zh); }
      if (xong) xong(r);
    }, function (err) { S.ban = false; bao(err.message, 'loi'); tieng('sai'); if (xong) xong(null); });
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
    var html = '<p class="nt-meo">Bày nông sản lên sạp để <b>bạn cùng lớp</b> mua bằng xu (trong mục <b>Bạn lớp → Chợ lớp</b> hoặc khi đến chơi). Mỗi lần bán được +2 kinh nghiệm.</p><div class="nt-sap-ds">';
    s.sap.forEach(function (o) {
      html += theSap(o, '<span class="nt-gia xu">' + img('ic-xu') + o.gia + '</span><button type="button" class="nt-mua" data-gosap="' + o.id + '">Lấy lại</button>');
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
    else if (e.l === 'mua') { hinh = 'sp-' + e.k; chu = ai + ' mua ' + e.n + ' <b>' + esc(tenSp(e.k).vn) + '</b> ở sạp của em · +' + e.xu + ' xu.'; }
    else if (e.l === 'chao') {
      hinh = 'ic-chao';
      var lc = c.LOI_CHAO[e.c] || { zh: '', py: '', vn: '' };
      chu = ai + ' gửi lời chào:<br><button type="button" class="nt-nk-chao" data-doc="' + esc(lc.zh) + '"><b lang="zh">' + esc(lc.zh) + '</b> ' + esc(lc.py) + ' — ' + esc(lc.vn) + ' 🔊</button>';
    }
    return '<li class="' + (moi ? 'moi' : '') + '">' + img(hinh) + '<p>' + chu + '<small>' + luc(e.t) + '</small></p></li>';
  }
  function veThu(than) {
    var s = S.st, ds = s.nk || [], soMoi = s.nkMoi || 0;
    than.innerHTML = ds.length
      ? '<p class="nt-meo">Các bạn đã ghé nông trại của em. Đến chơi lại, giúp bạn và gửi lời chào nhé!</p><ul class="nt-nk">' + ds.map(function (e, i) { return dongNk(e, i < soMoi); }).join('') + '</ul>'
      : '<p class="nt-trong">Chưa có bạn nào ghé chơi. Em hãy sang thăm, thả tim và gửi lời chào các bạn trước nhé!</p>';
    if (soMoi) goi('/api/farm/act', { a: 'xemnk' }).then(function () { S.st.nkMoi = 0; veHud(); }, function () {});
  }

  // --- Khi dang tham ban ---
  function veThamGoi() {
    var t = S.tham;
    if (!t) return;
    $('#ntThamTim').disabled = !!t.daTim;
    $('#ntThamTim').textContent = t.daTim ? '❤ Đã thả tim' : '❤ Thả tim';
    $('#ntThamChao').disabled = !!t.daChao;
    $('#ntThamChao').textContent = t.daChao ? '💬 Đã chào' : '💬 Lời chào';
    $('#ntThamSap').textContent = '🛒 Sạp của bạn (' + t.sap.length + ')';
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
        if ((st.nkMoi || 0) > cu) { tieng('xu'); bao('Có tin mới từ bạn cùng lớp — xem ở Bạn lớp → Nhật ký!'); }
      }, function () {});
    }, 60000);
  }

  /* ---------------- thi tran cua lop ---------------- */
  // Moi ban trong lop la 1 lo dat doc theo duong pho; lo nao cung ve thu nho dung nong trai that.
  // Bam vao lo -> sang choi nha ban (giup, mua sap, gui loi chao).
  var thiTran = null;
  function moThiTran() {
    dongNoi();
    dongBang();
    if (S.che !== 'xem') thoatDat();
    if (S.tham) veNha();
    $('#ntThiTran').hidden = false;
    document.body.classList.add('o-thi-tran');
    veNutThu();
    if (!thiTran) $('#ntTtLuoi').innerHTML = '<p class="nt-trong">Đang vẽ thị trấn…</p>';
    goi('/api/farm/thitran').then(function (r) {
      thiTran = r;
      S.lech = r.now - Date.now();
      if (!$('#ntThiTran').hidden) veThiTran();
    }, function (err) { $('#ntTtLuoi').innerHTML = '<p class="nt-trong">' + esc(err.message) + '</p>'; });
  }
  function dongThiTran() {
    $('#ntThiTran').hidden = true;
    document.body.classList.remove('o-thi-tran');
  }
  function veNutThu() {
    var n = S.st ? S.st.nkMoi || 0 : 0;
    $('#ntTtThu').textContent = '📜 Nhật ký' + (n ? ' (' + n + ' mới)' : '');
  }
  function veThiTran() {
    var r = thiTran;
    if (!r.lop) {
      $('#ntTtTen').textContent = 'Thị trấn của lớp em';
      $('#ntTtPhu').textContent = 'chưa có bạn nào';
      $('#ntTtLuoi').innerHTML = '<p class="nt-trong">Em chưa vào lớp nào. Nhập mã lớp cô giáo cho ở trang học — nông trại của em sẽ có một lô đất trong thị trấn của lớp.</p>';
      return;
    }
    var tong = r.ds.reduce(function (s, b) { return s + (b.dep || 0); }, 0);
    $('#ntTtTen').textContent = 'Thị trấn ' + r.lop;
    $('#ntTtPhu').textContent = r.ds.length + ' nông trại · tổng điểm đẹp ' + tong;
    var luoi = $('#ntTtLuoi');
    veQuangTruong();
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
      dao + '</div>';
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

  var HUY_TT = ['🥇', '🥈', '🥉'];
  function loDat(b, hang) {
    var huy = hang < 3 && b.dep > 0 ? HUY_TT[hang] + ' ' : '';
    return '<button type="button" class="nt-lo' + (b.la ? ' la' : '') + '" data-lo="' + esc(b.id) + '" aria-label="Nông trại của ' + esc(b.ten) + '">' +
      '<div class="nt-lo-dat">' + (b.co ? farmNho(b) : '<div class="nt-lo-trong">Đất trống — chờ ' + esc(b.ten) + ' mở nông trại</div>') +
      '<span class="nt-lo-nv">' + NV.svg(b.av || NV.macDinh(b.id)) + '</span></div>' +
      '<div class="nt-lo-bien"><b>' + huy + esc(b.ten) + (b.la ? ' (em)' : '') + '</b><small>' +
      (b.co ? 'Cấp ' + b.lv + ' · đẹp ' + b.dep + ' · ❤ ' + b.tim + (b.sap ? ' · 🛒 ' + b.sap : '') : 'Chưa mở nông trại') + '</small></div></button>';
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
      moBang(m);
    });
    $('#ntSao').addEventListener('click', function () { moBang('hoc'); });
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
    });
    $('#ntThamVe').addEventListener('click', veNha);
    $('#ntThamTim').addEventListener('click', thaTim);
    $('#ntThamChao').addEventListener('click', function () { if (S.tham) moBang('chao'); });
    $('#ntThamSap').addEventListener('click', function () { if (S.tham) moBang('sapban'); });
    $('#ntThamTt').addEventListener('click', moThiTran);
    $('#ntThiTran').addEventListener('click', function (e) {
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
