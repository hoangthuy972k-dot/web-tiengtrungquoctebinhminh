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
  function doc(zh) {
    if (!window.speechSynthesis || !zh) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(zh);
      u.lang = 'zh-CN'; u.rate = 0.85;
      speechSynthesis.speak(u);
    } catch (e) { /* bo qua */ }
  }

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
    if (t.bong && !S.tham) h += '<span class="nt-bong">' + img(t.bong) + '</span>';
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
      if (vatEl) gioiThieu(timVat(vatEl), vatEl);
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
    datTab([['sp', 'Nông sản'], ['tui', 'Túi đồ']], tab);
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
            (s.kho[k] > 1 ? '<button type="button" class="nt-mua" data-ban="' + k + '" data-n="' + s.kho[k] + '">Bán hết</button>' : '') + '</div>');
        });
        html += '</div><p class="nt-meo">💡 Giữ lại nông sản để giao <b>Đơn hàng</b> — được nhiều xu hơn bán lẻ.</p>';
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
    $('#ntBangTit').textContent = 'Nông trại bạn cùng lớp';
    datTab([], '');
    than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
    goi('/api/farm/lop').then(function (r) {
      if (!bangDang || bangDang.loai !== 'ban') return;
      if (!r.lop) { than.innerHTML = '<p class="nt-trong">Em chưa vào lớp nào. Nhập mã lớp cô giáo cho ở trang học để thăm nông trại các bạn.</p>'; return; }
      var html = '<p class="nt-meo">Lớp <b>' + esc(r.lop) + '</b> · xếp theo điểm đẹp. Thả tim cho bạn được +3 xu (tối đa 10 bạn mỗi ngày).</p><ol class="nt-ban-ds">';
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
      thoatDat();
      S.tham = { id: id, ten: r.ten, kich: r.kich, o: r.o, lv: r.lv, dep: r.dep, tim: r.tim };
      S.lechTham = r.now - Date.now();
      $('#ntThamTen').textContent = 'Nông trại của ' + r.ten;
      $('#ntThamPhu').textContent = 'Cấp ' + r.lv + ' · điểm đẹp ' + r.dep + ' · ❤ ' + r.tim;
      $('#ntTham').hidden = false;
      $('#ntThamTim').disabled = false;
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
      $('#ntThamPhu').textContent = 'Cấp ' + S.tham.lv + ' · điểm đẹp ' + S.tham.dep + ' · ❤ ' + r.tim;
      veHud();
      tieng('xu');
      bayLen(b, '+3', 'ic-xu');
    }, function (err) { bao(err.message, 'loi'); });
  }

  /* ---------------- cau hoi on tu vung ---------------- */
  // Tu vung lay tu bai dang hoc + 3 bai truoc do cung cap (on xoan oc).
  var tuVung = null;
  var khoBai = {};
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
        tra(raw.filter(function (v) { return v && v.zh && v.vn; }).map(function (v) {
          return { zh: v.zh, py: v.py || '', vn: String(v.vn).split(/[;；]/)[0].trim() };
        }));
      };
      sc.onerror = function () { tra([]); };
      d.body.appendChild(sc);
      setTimeout(function () { tra([]); }, 8000);
    });
  }
  function baiOn() {
    var D = typeof APP_DATA !== 'undefined' ? APP_DATA : {};
    var bai = null;
    try { bai = JSON.parse(localStorage.getItem('hyv_last_lesson') || 'null'); } catch (e) { /* bo qua */ }
    var a = auth();
    var lv = (bai && bai.levelId) || (a && a.user && a.user.level) || 'hsk1';
    var ds = ((D.lessons && D.lessons[lv]) || []).filter(function (b) { return b && b.fullPageUrl; });
    if (!ds.length) ds = ((D.lessons && D.lessons.hsk1) || []).filter(function (b) { return b && b.fullPageUrl; });
    var i = bai ? ds.map(function (b) { return b.fullPageUrl; }).indexOf(bai.url) : -1;
    if (i < 0) i = Math.min(2, ds.length - 1);
    return ds.slice(Math.max(0, i - 3), i + 1).map(function (b) { return b.fullPageUrl; });
  }
  function layTuVung() {
    if (tuVung && tuVung.length >= 4) return Promise.resolve(tuVung);
    return Promise.all(baiOn().map(napBai)).then(function (phan) {
      var ra = [], thay = {};
      phan.forEach(function (ds) { ds.forEach(function (v) { if (!thay[v.zh]) { thay[v.zh] = 1; ra.push(v); } }); });
      // du phong: ten cac mon trong nong trai
      if (ra.length < 4) {
        ['CAY', 'CON', 'TT'].forEach(function (n) {
          Object.keys(S.cat[n]).forEach(function (k) { var m = S.cat[n][k]; if (!thay[m.zh]) { thay[m.zh] = 1; ra.push({ zh: m.zh, py: m.py, vn: m.vn }); } });
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
    layTuVung().then(function () { if (hoi) cauMoi(); });
  }
  function veTienHoi() {
    var h = '';
    for (var i = 0; i < hoi.can; i++) h += '<i class="' + (i < hoi.dung ? 'dung' : '') + '"></i>';
    $('#ntHoiTien').innerHTML = h;
  }
  function cauMoi() {
    var ds = tuVung.filter(function (v) { return !hoi.daHoi[v.zh]; });
    if (ds.length < 1) { hoi.daHoi = {}; ds = tuVung.slice(); }
    var dap = ds[Math.floor(Math.random() * ds.length)];
    hoi.daHoi[dap.zh] = 1;
    var sai = tron(tuVung.filter(function (v) { return v.zh !== dap.zh && v.vn !== dap.vn; })).slice(0, 3);
    var chon = tron([dap].concat(sai));
    var kieu = Math.floor(Math.random() * 3); // 0: Han -> Viet, 1: Viet -> Han, 2: nghe -> Han
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
    if (kieu === 2) setTimeout(function () { doc(dap.zh); }, 250);
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
          setTimeout(huongDan, 900);
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
      if (m === 'sapxep') return batSapXep();
      if (S.che !== 'xem') thoatDat();
      moBang(m);
    });
    $('#ntSao').addEventListener('click', function () { moBang('hoc'); });
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
      if (d) doc(d.getAttribute('data-doc'));
    });
    $('#ntThamVe').addEventListener('click', veNha);
    $('#ntThamTim').addEventListener('click', thaTim);
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!$('#ntHoi').hidden) dongHoi();
      else if (bangDang) dongBang();
      else if (noiCua) dongNoi();
      else if (S.che !== 'xem') thoatDat();
    });
    window.addEventListener('resize', datViTriNoi);
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
      nhip();
      if (r.quaHomNay) setTimeout(quaDiemDanh, 500);
      else setTimeout(huongDan, 500);
    }, function (err) {
      if (err.status === 401) { $('#ntCong').hidden = false; return; }
      bao(err.message, 'loi');
    });
  }
  batDau();
})();
