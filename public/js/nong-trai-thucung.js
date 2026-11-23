/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — THU CUNG HOC LENH 宠物 (2026-11-23)
   · Nhan nuoi 1 thu cung (小狗 / 小猫 / 小兔子 / 熊猫宝宝) bang xu, dat ten. Thu cung di theo nhan vat cua em tren ban do
     (phan tu .tcg trong #ntDat, dung thang trong goc nhin 3D nhu .nt-nv, z theo NTX.zSau). Bam vao -> bong noi + lenh da thuoc.
   · Day lenh = cau lenh tieng Trung co dinh: noi vao micro (Web Speech zh-CN, khop >= 70% chu) hoac chon dap an;
     3 buoi o 3 ngay khac nhau thi thuoc. Lenh da thuoc: bam -> thu cung lam xiec + doc to cau lenh.
   · Cho an (thuc an / nong san), choi (3 cau hoi tu bai em hoc) -> vui. Vui + thuoc 去拿 / 别动 -> ich loi nho moi ngay.
   · Sang nong trai ban: thay thu cung cua ban (chi xem).
   May chu: nong-trai-thucung.js (/api/farm/thucung…).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$, $all = N.$all, esc = N.esc, img = N.img;
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var B = { d: null, tai: false, day: null, choi: null, ketChoi: null, chon: '', ten: '', rec: null };
  var P = { el: null, diDen: 0, x: -1, y: -1, boi: '', sau: 0, trai: false, tu: 'dung', dien: '', het: 0, ban: null, banId: '', hen: 0 };
  var TU = ['dung', 'ngoi', 'nhay', 'ngu'];
  var TEN_GOI_Y = ['豆豆', '球球', '花花', '毛毛', '乐乐', 'Bông', 'Mực', 'Mochi'];

  function cat() { return (S.cat && S.cat.PET) || null; }
  function loaiCua(k) { var c = cat(); return c && c.LOAI[k]; }
  function lenhCua(k) { var c = cat(); return c ? c.LENH.filter(function (l) { return l.k === k; })[0] : null; }
  function anhPet(loai, tu) { return 'pet-' + loai + '-' + (tu || 'dung'); }
  function mat(vui) { return vui >= 80 ? '😄' : vui >= 60 ? '😊' : vui >= 30 ? '😐' : '😟'; }
  function dem() { var h = new Date(Date.now() + 7 * 3600000).getUTCHours(); return h >= 22 || h < 6; }
  // thu cung tren ban do dang ve: cua em, hoac cua ban khi sang tham
  function petDang() { return S.tham ? P.ban : (S.st && S.st.kt && S.st.kt.pet) || null; }

  /* ================= 1) THU CUNG TREN BAN DO ================= */
  function oBan(d) {
    var ban = {};
    d.o.forEach(function (o) {
      var r = N.rong(o);
      for (var i = 0; i < r; i++) for (var j = 0; j < r; j++) ban[(o.x + i) + ',' + (o.y + j)] = 1;
    });
    return ban;
  }
  // o cua nhan vat chu nong trai (em o nha, chu nha khi sang tham)
  function oNv() {
    var nv = document.querySelector('#ntDat > .nt-nv:not(.khach)'), T = S.o;
    if (!nv) return null;
    return [parseFloat(nv.style.left) / T - 0.5, parseFloat(nv.style.top) / T - 1];
  }
  // 1 o trong gan (cx, cy), cach tu tu..xa o
  function oGan(d, cx, cy, tu, xa) {
    var ban = oBan(d), ds = [], ci = Math.round(cx), cj = Math.round(cy);
    for (var i = 0; i < d.kich.w; i++) for (var j = 0; j < d.kich.h; j++) {
      if (ban[i + ',' + j]) continue;
      var kc = Math.abs(i - ci) + Math.abs(j - cj);
      if (kc >= tu && kc <= xa) ds.push([i, j]);
    }
    var o = ds.length ? ds[Math.floor(Math.random() * ds.length)] : [Math.min(d.kich.w - 1, ci + 1), cj];
    return [o[0] + 0.5, o[1] + 0.9];
  }
  function datPet(ms) {
    var el = P.el;
    if (!el || !el.isConnected) return;
    var T = S.o, w = Math.round(T * 0.82);
    el.style.width = w + 'px';
    el.style.height = w + 'px';
    el.style.transitionDuration = (ms || 0) + 'ms';
    el.style.transform = 'translate(' + (P.x * T - w / 2).toFixed(1) + 'px,' + (P.y * T - w).toFixed(1) + 'px)' +
      (S.ng ? ' rotate(var(--xn, 0deg)) scaleY(' + (1 / S.ng).toFixed(4) + ')' : '');
    el.style.zIndex = Math.round(N.zSau(P.x, P.y, 0) * 10) + 5;
  }
  function tuHienTai(p) {
    if (P.dien && Date.now() < P.het) return P.tuDien || 'dung';
    if (Date.now() < P.diDen) return 'dung'; // dang di (ca khi buon ngu) thi dung bang 4 chan
    if (p && (dem() || p.vui < 15)) return 'ngu';
    return P.tu;
  }
  function capNhatTu() {
    var el = P.el, p = petDang();
    if (!el) return;
    var tu = tuHienTai(p), dien = P.dien && Date.now() < P.het ? P.dien : '';
    TU.forEach(function (t) { el.classList.toggle('tu-' + t, t === tu); });
    el.className = el.className.replace(/\bdien-\S+/g, '').trim() + (dien ? ' dien-' + dien : '');
    el.classList.toggle('zz', tu === 'ngu' && (!dien || dien === 'ngu'));
    el.classList.toggle('trai', P.trai);
  }
  function vePet() {
    var dat = $('#ntDat'), d = N.duLieuBanDo();
    if (P.el && P.el.isConnected) P.el.remove();
    P.el = null;
    if (!dat || !d || !S.cat) return;
    if (S.tham && P.banId !== S.tham.id) { taiPetBan(S.tham.id); return; }
    if (!S.tham) P.banId = '';
    var p = petDang();
    if (!p || !loaiCua(p.loai)) return;
    var boi = (S.tham ? 'tham:' + S.tham.id : 'nha') + ':' + p.loai;
    if (boi !== P.boi || P.x < 0) {
      P.boi = boi;
      var nv = oNv() || [1, 1], o = oGan(d, nv[0], nv[1], 1, 2);
      P.x = o[0]; P.y = o[1]; P.sau = Date.now() + 1800; P.tu = 'ngoi';
    }
    var el = document.createElement('div');
    el.className = 'tcg';
    el.setAttribute('data-loai', p.loai);
    el.innerHTML = '<span class="tcg-bong" hidden></span><span class="tcg-zz" aria-hidden="true"><i>z</i><i>z</i><i>Z</i></span>' +
      '<button type="button" class="tcg-nut" aria-label="' + esc('Thú cưng ' + p.ten) + '"><span class="tcg-hinh">' +
      TU.map(function (t) { return '<img class="p-' + t + '" src="' + N.anh(anhPet(p.loai, t)) + '" alt="" draggable="false">'; }).join('') +
      '</span></button>';
    P.el = el;
    dat.appendChild(el);
    datPet(0);
    capNhatTu();
    el.querySelector('.tcg-nut').addEventListener('click', function (e) { e.stopPropagation(); moNoiPet(); });
  }
  function taiPetBan(id) {
    P.banId = id; P.ban = null;
    N.goi('/api/farm/thucung/xem/' + encodeURIComponent(id)).then(function (r) {
      if (!S.tham || S.tham.id !== id) return;
      P.ban = r.pet || null;
      vePet();
    }, function () { /* khong xem duoc thi thoi */ });
  }
  function diToi(x, y) {
    var kc = Math.abs(x - P.x) + Math.abs(y - P.y), ms = Math.max(450, Math.round(kc * 430));
    if (Math.abs(x - P.x) > 0.05) P.trai = x < P.x;
    P.x = x; P.y = y;
    if (!P.el) return ms;
    P.diDen = Date.now() + ms;
    P.el.classList.add('di');
    capNhatTu();
    datPet(ms);
    var el = P.el;
    setTimeout(function () { if (P.el === el) { el.classList.remove('di'); capNhatTu(); } }, ms);
    return ms;
  }
  // moi giay: di theo nhan vat, nghi thi ngoi / dung / nhay
  function nhipPet() {
    var d = N.duLieuBanDo(), p = petDang();
    if (!d || !p || !P.el || !P.el.isConnected || document.hidden) return;
    var now = Date.now();
    if (P.dien && now >= P.het) { P.dien = ''; capNhatTu(); }
    if (P.dien || now < P.diDen) return;
    var nv = oNv();
    var xa = nv ? Math.abs(nv[0] + 0.5 - P.x) + Math.abs(nv[1] + 0.9 - P.y) : 0;
    // buon ngu (dem / het vui): chi lai gan nhan vat khi o xa roi nam ngu
    if (tuHienTai(p) === 'ngu' && xa < 3.5) { capNhatTu(); return; }
    if (now < P.sau && xa < 3.5) return;
    var o = nv ? oGan(d, nv[0], nv[1], 1, 2) : [P.x, P.y], ms = diToi(o[0], o[1]);
    var r = Math.random();
    P.tu = p.vui >= 80 && r < 0.18 ? 'nhay' : r < 0.55 ? 'ngoi' : 'dung';
    clearTimeout(P.hen);
    P.hen = setTimeout(capNhatTu, ms + 100);
    P.sau = now + ms + 3200 + Math.random() * 4200;
  }
  function bong(html, ms) {
    var b = P.el && P.el.querySelector('.tcg-bong');
    if (!b) return;
    clearTimeout(b._hen);
    b.innerHTML = html;
    b.hidden = !html;
    if (html && ms) b._hen = setTimeout(function () { b.hidden = true; }, ms);
  }
  // Lam xiec theo lenh (dien = kieu hoat anh); opt.qua = nong san 去拿 tha ve
  var DIEN = {
    ngoi: { tu: 'ngoi', ms: 2600 }, lai: { tu: 'nhay', ms: 2400 }, bat: { tu: 'ngoi', ms: 2600, bong: '🤝' },
    xoay: { tu: 'dung', ms: 2200 }, nhay: { tu: 'nhay', ms: 2400 }, dung: { tu: 'dung', ms: 3000, bong: '❗' },
    nam: { tu: 'ngu', ms: 3200 }, lay: { tu: 'dung', ms: 4200 }, keu: { tu: 'dung', ms: 2400 }, ngu: { tu: 'ngu', ms: 4200 },
  };
  function lamXiec(dien, p, opt) {
    opt = opt || {};
    var cf = DIEN[dien] || DIEN.ngoi, d = N.duLieuBanDo();
    if (!P.el || !d) return;
    var now = Date.now();
    P.dien = dien; P.tuDien = cf.tu; P.het = now + cf.ms; P.sau = P.het + 2500;
    if (dien === 'lai') {
      var nv = oNv();
      if (nv) {
        var o = oGan(d, nv[0], nv[1], 1, 1), ms = diToi(o[0], o[1]);
        P.tuDien = 'dung'; P.het = Date.now() + ms + 1600;
        setTimeout(function () { P.tuDien = 'nhay'; capNhatTu(); }, ms);
      }
    } else if (dien === 'lay') {
      var di = oGan(d, P.x, P.y, 3, 5), ve0 = [P.x, P.y];
      var ms1 = diToi(di[0], di[1]);
      P.het = Date.now() + ms1 * 2 + 1400;
      setTimeout(function () {
        if (!P.el) return;
        var ms2 = diToi(ve0[0], ve0[1]);
        bong(opt.qua ? img('sp-' + opt.qua.k) + '<b>×' + opt.qua.n + '</b>' : '🦴', ms2 + 2600);
      }, ms1 + 500);
    } else if (dien === 'keu') {
      var l = loaiCua(p.loai);
      setTimeout(function () { bong('<b lang="zh">' + esc(l.keu) + '</b><small>' + esc(l.keuPy) + '</small>', 1800); }, 500);
    }
    if (cf.bong) bong(cf.bong, cf.ms);
    capNhatTu();
  }
  N.sauVe.push(vePet);
  N.nhip.push(nhipPet);
  N.sauXoay.push(function () { datPet(0); });

  // Bong noi khi bam thu cung
  function chipLenh(k, nho) {
    var l = lenhCua(k);
    return '<button type="button" class="tcg-chip' + (nho ? ' nho' : '') + '" data-tcg-lenh="' + k + '"><b lang="zh">' + esc(l.zh) + '</b><small>' + esc(l.py) + '</small><i>' + esc(l.vn) + '</i></button>';
  }
  function moNoiPet() {
    var p = petDang(), l = p && loaiCua(p.loai);
    if (!l) return;
    var ban = !!S.tham;
    var html = '<div class="nt-noi-dau tcg-dau"><span class="tcg-anh">' + img(anhPet(p.loai, p.vui >= 80 ? 'nhay' : 'ngoi')) + '</span>' +
      '<span class="kt-ten"><b>' + esc(p.ten) + '</b><small><span lang="zh" data-doc="' + esc(l.zh) + '">' + esc(l.zh) + '</span> ' + esc(l.py) + ' · ' + esc(l.vn) + '</small></span></div>' +
      '<p class="nt-noi-phu">' + (ban ? 'Thú cưng của ' + esc(S.tham.ten) + ' · ' : '') + 'Vui ' + mat(p.vui) + ' ' + p.vui + '/100 · thuộc ' + p.thuoc.length + '/' + cat().LENH.length + ' lệnh</p>';
    html += p.thuoc.length ? '<p class="nt-noi-phu tcg-goi">Ra lệnh bằng tiếng Trung:</p><div class="tcg-chips">' + p.thuoc.map(function (k) { return chipLenh(k, true); }).join('') + '</div>'
      : '<p class="nt-noi-phu">' + esc(p.ten) + ' chưa thuộc lệnh nào' + (ban ? '.' : ' — dạy lệnh tiếng Trung để ' + esc(p.ten) + ' làm xiếc nhé!') + '</p>';
    if (!ban) html += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-nho nt-nut-xanh" data-tcg-mo>🐾 Chăm sóc &amp; dạy lệnh</button></div>';
    N.moNoi(P.el, html, 'tcg');
    var noi = $('#ntNoi');
    $all('[data-tcg-lenh]', noi).forEach(function (b) { b.addEventListener('click', function () { raLenh(b.getAttribute('data-tcg-lenh'), b); }); });
    var mo = $('[data-tcg-mo]', noi);
    if (mo) mo.addEventListener('click', function () { N.dongNoi(); B.d = null; N.moBang('thucung'); });
  }
  // Ra lenh da thuoc: o nha thi hoi may chu (vui + 去拿), sang nha ban thi chi xem xiec
  function raLenh(k, nut) {
    var p = petDang(), l = lenhCua(k);
    if (!p || !l) return;
    N.doc(l.zh);
    if (S.tham) { lamXiec(l.dien, p); return; }
    if (nut) nut.disabled = true;
    N.goi('/api/farm/thucung/lenh', { k: k }).then(function (r) {
      if (nut) nut.disabled = false;
      if (S.st && S.st.kt && S.st.kt.pet) S.st.kt.pet.vui = r.vui;
      lamXiec(r.dien, p, { qua: r.qua });
      if (r.qua) {
        var sp = S.cat.SP[r.qua.k] || {};
        setTimeout(function () { N.bao('🐾 ' + p.ten + ' tha về ' + r.qua.n + ' ' + (sp.vn || '').toLowerCase() + ' ' + (sp.zh || '') + ' — đã vào kho!'); N.tieng('mua'); }, 2400);
        if (r.st) setTimeout(function () { N.nhanTrangThai(r.st); }, 4300);
      } else if (r.ly) N.bao(r.ly);
    }, function (e) { if (nut) nut.disabled = false; N.bao(e.message, 'loi'); });
  }

  /* ================= 2) BANG THU CUNG ================= */
  function tai() {
    if (B.tai) return;
    B.tai = true;
    N.goi('/api/farm/thucung').then(function (r) { B.tai = false; B.d = r; veLai(); }, function (e) { B.tai = false; N.bao(e.message, 'loi'); });
  }
  function veLai() { var bd = N.bangDang(); if (bd && bd.loai === 'thucung') N.veBang(); }
  function nhanPet(r) {
    if (r.pet) B.d = r.pet;
    if (r.st) N.nhanTrangThai(r.st);
  }

  function veNhanNuoi(than) {
    var d = B.d, h = '<div class="tcg-b"><p class="tcg-gt">🐾 Nuôi một thú cưng <span lang="zh">宠物</span> chǒngwù và <b>dạy nó lệnh bằng tiếng Trung</b>: ' +
      '<span lang="zh">坐下</span>, <span lang="zh">握手</span>, <span lang="zh">转圈</span>… Thú cưng vui sẽ giúp em canh kho và tha nông sản về!</p>';
    if (!d.mo) { than.innerHTML = h + '<p class="nt-trong">🔒 Thú cưng mở ở nông trại cấp ' + d.lvMo + '.</p></div>'; return; }
    if (!B.chon) B.chon = (d.loai.filter(function (x) { return x.mo; })[0] || {}).k || '';
    if (!B.ten) B.ten = TEN_GOI_Y[Math.floor(Math.random() * TEN_GOI_Y.length)];
    h += '<div class="tcg-loai">' + d.loai.map(function (x) {
      return '<button type="button" class="tcg-loai-o' + (x.k === B.chon ? ' chon' : '') + (x.mo ? '' : ' khoa') + '" data-tcg-loai="' + x.k + '"' + (x.mo ? '' : ' aria-disabled="true"') + '>' +
        img(anhPet(x.k, 'ngoi')) + '<b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + '</small><span>' + esc(x.vn) + '</span>' +
        '<em>' + (x.mo ? img('ic-xu') + ' ' + x.xu + ' xu' : '🔒 cấp ' + x.lv) + '</em></button>';
    }).join('') + '</div>';
    h += '<label class="tcg-nhan" for="tcgTen">Tên thú cưng <small>(tối đa 12 chữ)</small></label>' +
      '<div class="tcg-ten-hang"><input id="tcgTen" class="tcg-input" maxlength="12" autocomplete="off" value="' + esc(B.ten) + '"></div>' +
      '<div class="tcg-goiy">' + TEN_GOI_Y.map(function (t) { return '<button type="button" data-tcg-goiy="' + esc(t) + '">' + esc(t) + '</button>'; }).join('') + '</div>';
    var x = d.loai.filter(function (y) { return y.k === B.chon; })[0];
    h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tcg-nuoi' + (x && x.mo && d.xu >= x.xu ? '' : ' disabled') + '>🐾 Nhận nuôi' +
      (x ? ' ' + esc(x.vn.toLowerCase()) + ' · ' + x.xu + ' xu' : '') + '</button></div>' +
      (x && d.xu < x.xu ? '<p class="tcg-phu">Em có ' + d.xu + ' xu — cần ' + x.xu + ' xu.</p>' : '') + '</div>';
    than.innerHTML = h;
    var inp = $('#tcgTen', than);
    inp.addEventListener('input', function () { B.ten = inp.value; });
    $all('[data-tcg-loai]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-tcg-loai'), l = loaiCua(k);
        N.doc(l.zh);
        if (b.classList.contains('khoa')) { N.bao(l.vn + ' mở ở nông trại cấp ' + l.lv + '.'); return; }
        B.chon = k; N.veBang();
      });
    });
    $all('[data-tcg-goiy]', than).forEach(function (b) { b.addEventListener('click', function () { B.ten = b.getAttribute('data-tcg-goiy'); inp.value = B.ten; if (/[㐀-鿿]/.test(B.ten)) N.doc(B.ten); }); });
    var nut = $('[data-tcg-nuoi]', than);
    nut.addEventListener('click', function () {
      nut.disabled = true;
      N.goi('/api/farm/thucung/nuoi', { loai: B.chon, ten: inp.value }).then(function (r) {
        nhanPet(r);
        N.tieng('len');
        if (N.fx) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, true);
        N.bao('🎉 Chào mừng ' + r.pet.pet.ten + ' về nông trại! Dạy lệnh đầu tiên 坐下 nhé.');
        N.veBang();
      }, function (e) { nut.disabled = false; N.bao(e.message, 'loi'); });
    });
  }

  function dauPet(p, l) {
    var tu = dem() ? 'ngu' : p.vui >= 80 ? 'nhay' : p.vui >= 30 ? 'ngoi' : 'ngu';
    return '<div class="tcg-dauto"><span class="tcg-to' + (tu === 'ngu' ? ' ngu' : '') + '">' + img(anhPet(p.loai, tu)) + '</span><div class="tcg-dauchu">' +
      '<b class="tcg-ten">' + esc(p.ten) + '</b><span><span lang="zh" data-doc="' + esc(l.zh) + '">' + esc(l.zh) + '</span> ' + esc(l.py) + ' · ' + esc(l.vn) + '</span>' +
      '<span class="tcg-vui" title="Độ vui"><i style="width:' + p.vui + '%" class="' + (p.vui >= B.d.vuiCan ? 'du' : '') + '"></i></span>' +
      '<small>' + mat(p.vui) + ' Vui ' + p.vui + '/100' + (p.vui < B.d.vuiCan ? ' · cần ' + B.d.vuiCan + ' để giúp việc' : ' · đủ vui để giúp việc') + '</small></div></div>';
  }

  function veLenhTab(than, p) {
    var d = B.d, C = cat(), soThuoc = p.lenh.filter(function (x) { return x.thuoc; }).length;
    var h = '<p class="tcg-phu">Mỗi lệnh dạy <b>' + d.canThuoc + ' buổi ở ' + d.canThuoc + ' ngày khác nhau</b> là thuộc · hôm nay đã dạy <b>' + p.day + '/' + d.dayNgay + '</b> buổi · thuộc ' + soThuoc + '/' + C.LENH.length + ' lệnh</p>' +
      (SR ? '' : '<p class="tcg-phu">🎙️ Trình duyệt này chưa nghe được giọng nói — em dạy bằng cách chọn câu lệnh đúng nhé.</p>');
    h += '<div class="tcg-ds">' + C.LENH.map(function (l, i) {
      var x = p.lenh[i] || {}, cham = '';
      for (var j = 0; j < d.canThuoc; j++) cham += '<i class="' + (j < x.n ? 'co' : '') + '"></i>';
      var nut;
      if (x.thuoc) nut = '<button type="button" class="nt-nut nt-nut-nho nt-nut-vang" data-tcg-ra="' + l.k + '">▶ Ra lệnh</button>';
      else if (!x.mo) nut = '<span class="tcg-khoa">🔒 dạy lệnh trước</span>';
      else if (x.hom) nut = '<span class="tcg-xong">✓ hôm nay xong</span>';
      else if (p.day >= d.dayNgay) nut = '<span class="tcg-xong">mai dạy tiếp</span>';
      else nut = (SR ? '<button type="button" class="nt-nut nt-nut-nho nt-nut-xanh" data-tcg-day="' + l.k + '" data-cach="noi">🎙️ Nói</button>' : '') +
        '<button type="button" class="nt-nut nt-nut-nho" data-tcg-day="' + l.k + '" data-cach="chon">👆 Chọn</button>';
      return '<div class="tcg-lenh' + (x.thuoc ? ' thuoc' : '') + (x.mo ? '' : ' khoa') + '">' +
        '<button type="button" class="tcg-lenh-chu" data-doc="' + esc(l.zh) + '"><b lang="zh">' + esc(l.zh) + '</b><small>' + esc(l.py) + '</small><span>' + esc(l.vn) + '</span></button>' +
        '<div class="tcg-lenh-phai"><span class="tcg-cham" title="' + x.n + '/' + d.canThuoc + ' buổi">' + cham + (x.thuoc ? ' ⭐' : '') + '</span><span class="tcg-lenh-nut">' + nut + '</span></div>' +
        (l.ich ? '<p class="tcg-ich">' + (x.thuoc ? '✅ ' : '🎁 ') + esc(l.ich) + '</p>' : '') + '</div>';
    }).join('') + '</div>';
    than.insertAdjacentHTML('beforeend', h);
    $all('[data-tcg-day]', than).forEach(function (b) { b.addEventListener('click', function () { batDay(b.getAttribute('data-tcg-day'), b.getAttribute('data-cach'), b); }); });
    $all('[data-tcg-ra]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-tcg-ra');
        N.dongBang();
        setTimeout(function () { raLenh(k); }, 250);
      });
    });
  }

  function veAnTab(than, p, l) {
    var d = B.d, het = p.an >= d.buaNgay, h = '<p class="tcg-phu">Hôm nay đã ăn <b>' + p.an + '/' + d.buaNgay + '</b> bữa · mỗi bữa +30 vui (món khoái khẩu +35)</p><div class="tcg-an">';
    h += '<div class="tcg-mon">' + img('pet-thucan') + '<b lang="zh" data-doc="' + esc(d.thucAn.zh) + '">' + esc(d.thucAn.zh) + '</b><small>' + esc(d.thucAn.py) + ' · ' + esc(d.thucAn.vn) + '</small>' +
      '<button type="button" class="nt-nut nt-nut-nho nt-nut-xanh" data-tcg-an="thucan"' + (het || S.st.xu < d.thucAn.xu ? ' disabled' : '') + '>' + img('ic-xu') + ' ' + d.thucAn.xu + ' · Cho ăn</button></div>';
    h += p.khoAn.map(function (m) {
      return '<div class="tcg-mon' + (m.co < m.can ? ' thieu' : '') + '">' + img('sp-' + m.k) + '<b lang="zh" data-doc="' + esc(m.zh) + '">' + esc(m.zh) + '</b><small>' + esc(m.vn) + ' · kho ' + m.co + '</small>' +
        '<button type="button" class="nt-nut nt-nut-nho" data-tcg-an="' + m.k + '"' + (het || m.co < m.can ? ' disabled' : '') + '>' + m.can + ' quả · Cho ăn</button></div>';
    }).join('') + '</div>';
    h += '<h3 class="tcg-h">✏️ Đổi tên</h3><div class="tcg-ten-hang"><input id="tcgTenMoi" class="tcg-input" maxlength="12" autocomplete="off" value="' + esc(p.ten) + '">' +
      '<button type="button" class="nt-nut nt-nut-nho" data-tcg-doiten>Lưu</button></div>';
    h += '<h3 class="tcg-h">🎁 ' + esc(p.ten) + ' giúp việc (khi vui ≥ ' + d.vuiCan + ')</h3><ul class="tcg-giup">' +
      '<li><b lang="zh">去拿</b> qù ná — mỗi ngày tha về 1 phần nông sản · ' + (p.lenh[7] && p.lenh[7].thuoc ? (p.lay ? 'hôm nay đã tha ✓' : 'bấm lệnh 去拿 để nhận') : 'chưa thuộc lệnh') + '</li>' +
      '<li><b lang="zh">别动</b> bié dòng — canh kho, đuổi chuột ở vòng quay (1 lần / ngày) · ' + (p.lenh[5] && p.lenh[5].thuoc ? (p.gac ? 'hôm nay đã đuổi chuột ✓' : 'đang canh kho') : 'chưa thuộc lệnh') + '</li></ul>';
    than.insertAdjacentHTML('beforeend', h);
    $all('[data-tcg-an]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        N.goi('/api/farm/thucung/an', { mon: b.getAttribute('data-tcg-an') }).then(function (r) {
          nhanPet(r); N.tieng('mua');
          N.bao('😋 ' + p.ten + ' ăn ngon lành! +' + r.them + ' vui');
          N.veBang();
        }, function (e) { b.disabled = false; N.bao(e.message, 'loi'); });
      });
    });
    var luu = $('[data-tcg-doiten]', than);
    luu.addEventListener('click', function () {
      luu.disabled = true;
      N.goi('/api/farm/thucung/ten', { ten: $('#tcgTenMoi', than).value }).then(function (r) { nhanPet(r); N.bao('Đã đổi tên!'); N.veBang(); }, function (e) { luu.disabled = false; N.bao(e.message, 'loi'); });
    });
  }

  function veChoiTab(than, p) {
    var d = B.d;
    var h = '<div class="tcg-choi"><p>🎾 Chơi ném bóng với <b>' + esc(p.ten) + '</b>: trả lời <b>' + d.choiCau + ' câu hỏi</b> từ bài em đã học — mỗi câu đúng ném được một quả bóng: <b>+10 vui</b>.</p>' +
      (p.choi ? '<p class="tcg-xong">✓ Hôm nay đã chơi rồi — mai chơi tiếp nhé!</p>'
        : '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tcg-choi>🎾 Chơi với ' + esc(p.ten) + '</button></div>') + '</div>';
    than.insertAdjacentHTML('beforeend', h);
    var nut = $('[data-tcg-choi]', than);
    if (nut) nut.addEventListener('click', function () {
      nut.disabled = true;
      N.goi('/api/farm/thucung/choi/bat', {}).then(function (r) { B.choi = { ds: r.ds, i: 0, dung: 0 }; N.tieng('mua'); N.veBang(); },
        function (e) { nut.disabled = false; N.bao(e.message, 'loi'); });
    });
  }

  // 3 cau hoi choi voi thu cung
  function veChoiCau(than) {
    var c = B.choi, q = c.ds[c.i], khoa = false, p = B.d.pet;
    if (!q) return;
    var hh = q.hoi || {};
    than.innerHTML = '<div class="tcg-choi-dau">' + img(anhPet(p.loai, 'ngoi')) + '<span>🎾 Ném bóng cho <b>' + esc(p.ten) + '</b> · bóng ' + (c.i + 1) + '/' + c.ds.length + '</span></div>' +
      '<div class="kt-cau"><p class="kt-cau-so">Câu ' + (c.i + 1) + '/' + c.ds.length + ' · <b>' + esc(hh.lenh || '') + '</b></p>' + N.htmlKt(q, 'kc') + '<div class="kt-cau-kq" aria-live="polite"></div></div>';
    N.ganKt(than, q, 'kc', function (body, chon) {
      if (khoa) return;
      khoa = true;
      N.goi('/api/farm/thucung/choi/tl', body).then(function (r) {
        N.danhDauKt(than, q, r, chon, 'kc');
        N.tieng(r.dung ? 'dung' : 'sai');
        N.docKt(r);
        c.i++;
        var kq = $('.kt-cau-kq', than);
        kq.innerHTML = '<p class="kt-cau-dg ' + (r.dung ? 'dung' : 'sai') + '">' + (r.dung ? '✔ Đúng rồi! ' + esc(p.ten) + ' bắt được bóng 🎾' : '✘ Chưa đúng — bóng rơi mất rồi') + '</p>' + N.giaiKt(r, q) +
          '<button type="button" class="nt-nut nt-nut-xanh" data-tcg-tiep>' + (r.ket ? 'Xem kết quả →' : 'Câu tiếp →') + '</button>';
        if (r.ket) { if (r.st) N.nhanTrangThai(r.st); if (r.pet) B.d = r.pet; }
        $('[data-tcg-tiep]', kq).addEventListener('click', function () {
          if (r.ket) { B.choi = null; B.ketChoi = r.ket; }
          N.veBang();
        });
      }, function (e) { khoa = false; N.moLaiKt(than, q); N.bao(e.message, 'loi'); if (e.status === 400) { B.choi = null; tai(); } });
    });
  }
  function veKetChoi(than) {
    var k = B.ketChoi, p = B.d.pet;
    than.innerHTML = '<div class="nt-chuc tcg-ket">' + img(anhPet(p.loai, k.dung ? 'nhay' : 'ngoi'), 'tcg-ket-hinh') +
      '<h2>' + (k.dung === k.so ? '🎉 Tuyệt vời!' : k.dung ? 'Vui quá!' : 'Mai chơi tiếp nhé!') + '</h2>' +
      '<p>Đúng ' + k.dung + '/' + k.so + ' câu · ' + esc(p.ten) + ' +' + (k.dung * 10) + ' vui → ' + mat(k.vui) + ' ' + k.vui + '/100</p>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tcg-ve>← Thú cưng</button></div></div>';
    if (k.dung) N.tieng('len');
    $('[data-tcg-ve]', than).addEventListener('click', function () { B.ketChoi = null; N.veBang(); });
  }

  /* ---- day lenh ---- */
  function batDay(k, cach, nut) {
    if (nut) nut.disabled = true;
    N.goi('/api/farm/thucung/day/bat', { k: k, cach: cach }).then(function (r) {
      B.day = r; N.veBang();
      if (r.cach === 'noi') setTimeout(function () { N.doc(r.zh); }, 300);
    }, function (e) { if (nut) nut.disabled = false; N.bao(e.message, 'loi'); });
  }
  function dungNghe() { if (B.rec) { try { B.rec.abort(); } catch (e) { /* bo qua */ } B.rec = null; } }
  function veDay(than) {
    var r = B.day, p = B.d.pet, l = lenhCua(r.k);
    var h = '<div class="tcg-day">';
    if (r.ket) {
      var k = r.ket;
      h += '<span class="tcg-day-hinh">' + img(anhPet(p.loai, k.dung ? 'nhay' : 'ngoi')) + '</span>';
      if (k.dung && k.thuoc) h += '<h2>⭐ ' + esc(p.ten) + ' đã thuộc lệnh!</h2>';
      else if (k.dung) h += '<h2>🎉 ' + esc(p.ten) + ' hiểu rồi!</h2>';
      else h += '<h2>Chưa đúng rồi</h2>';
      h += '<p class="tcg-day-cau"><b lang="zh" data-doc="' + esc(k.zh) + '">' + esc(k.zh) + '</b> ' + esc(k.py) + ' — ' + esc(k.vn) + '</p>';
      if (k.diem != null) h += '<p>Máy nghe được: ' + chuMau(k) + ' · khớp <b>' + k.diem + '%</b></p>';
      if (k.dung && k.buoi) h += '<p>Buổi <b>' + k.buoi + '/' + B.d.canThuoc + '</b>' + (k.thuoc ? ' — giờ em ra lệnh <b lang="zh">' + esc(k.zh) + '</b> bất cứ lúc nào!' : ' — ngày mai dạy lại để ' + esc(p.ten) + ' nhớ lâu nhé.') + '</p>';
      else if (!k.dung) h += '<p>' + (k.cach === 'noi' ? 'Nghe mẫu rồi thử lại nhé (bấm Dạy lại).' : 'Câu đúng là <b lang="zh">' + esc(k.zh) + '</b>. Bấm Dạy lại để thử lần nữa.') + '</p>';
      h += '<div class="nt-hang-nut">' + (!k.dung ? '<button type="button" class="nt-nut nt-nut-xanh" data-tcg-lai="' + r.k + '" data-cach="' + k.cach + '">↻ Dạy lại</button>' : '') +
        '<button type="button" class="nt-nut" data-tcg-ve>← Danh sách lệnh</button></div></div>';
      than.innerHTML = h;
      var lai = $('[data-tcg-lai]', than);
      if (lai) lai.addEventListener('click', function () { B.day = null; batDay(lai.getAttribute('data-tcg-lai'), lai.getAttribute('data-cach'), lai); });
      $('[data-tcg-ve]', than).addEventListener('click', function () { B.day = null; N.veBang(); });
      return;
    }
    if (r.cach === 'noi') {
      h += '<span class="tcg-day-hinh">' + img(anhPet(p.loai, 'dung')) + '</span>' +
        '<p>Nói to, rõ câu lệnh để dạy <b>' + esc(p.ten) + '</b>:</p>' +
        '<button type="button" class="tcg-day-the" data-doc="' + esc(r.zh) + '"><b lang="zh">' + esc(r.zh) + '</b><small>' + esc(r.py) + '</small><span>' + esc(r.vn) + ' 🔊</span></button>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh tcg-mic" data-tcg-mic>🎙️ Bấm rồi nói</button></div>' +
        '<p class="tcg-tb" data-tcg-tb aria-live="polite">' + (r.thu ? r.thu : 'Cần khớp từ ' + r.diem + '% chữ trở lên.') + '</p>' +
        '<p class="tcg-phu"><button type="button" class="tcg-link" data-tcg-chon>Không dùng micro được? Chọn đáp án thay thế →</button></p></div>';
      than.innerHTML = h;
      var mic = $('[data-tcg-mic]', than), tb = $('[data-tcg-tb]', than);
      mic.addEventListener('click', function () {
        if (B.rec) { try { B.rec.stop(); } catch (e) { /* bo qua */ } return; }
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        var rec;
        try { rec = new SR(); } catch (e) { tb.textContent = 'Máy chưa mở được micro — chọn đáp án thay thế nhé.'; return; }
        rec.lang = 'zh-CN'; rec.continuous = false; rec.interimResults = true; rec.maxAlternatives = 1;
        var xong = '', tam = '', loiMic = '';
        rec.onresult = function (e) {
          tam = '';
          for (var i = e.resultIndex; i < e.results.length; i++) { if (e.results[i].isFinal) xong += e.results[i][0].transcript; else tam += e.results[i][0].transcript; }
          tb.innerHTML = '👂 <span lang="zh">' + esc(xong + tam) + '</span>';
        };
        rec.onerror = function (e) { loiMic = e && e.error; };
        rec.onend = function () {
          B.rec = null;
          mic.textContent = '🎙️ Bấm rồi nói'; mic.classList.remove('dang');
          var noi = (xong || tam).trim();
          if (!noi) {
            tb.textContent = loiMic === 'not-allowed' || loiMic === 'service-not-allowed' ? 'Chưa có quyền dùng micro — cho phép micro cho trang này, hoặc chọn đáp án thay thế.' : 'Máy chưa nghe thấy gì — bấm micro rồi nói to, rõ hơn nhé.';
            return;
          }
          mic.disabled = true;
          N.goi('/api/farm/thucung/day/tl', { noi: noi }).then(function (kq) {
            mic.disabled = false;
            if (kq.tiep) {
              N.tieng('sai');
              tb.innerHTML = 'Máy nghe được: ' + chuMau(kq) + ' · khớp ' + kq.diem + '% — chưa đủ, nghe mẫu rồi nói lại nhé (còn ' + kq.conLan + ' lần).';
              r.thu = tb.innerHTML;
              return;
            }
            ketDay(kq, 'noi');
          }, function (e) { mic.disabled = false; N.bao(e.message, 'loi'); if (e.status === 400) { B.day = null; tai(); } });
        };
        try { rec.start(); } catch (e) { tb.textContent = 'Máy chưa mở được micro — chọn đáp án thay thế nhé.'; return; }
        B.rec = rec;
        mic.textContent = '⏹ Nói xong'; mic.classList.add('dang');
        tb.textContent = '🔴 Đang nghe… em nói câu lệnh nhé';
      });
      $('[data-tcg-chon]', than).addEventListener('click', function () { dungNghe(); batDay(r.k, 'chon'); });
      return;
    }
    // chon dap an
    h += '<span class="tcg-day-hinh">' + img(anhPet(p.loai, 'ngoi')) + '</span>' +
      '<p>Em muốn bảo <b>' + esc(p.ten) + '</b>: «<b>' + esc(r.vn) + '</b>». Chọn câu lệnh tiếng Trung đúng:</p><div class="tcg-lua">' +
      r.lua.map(function (o, i) { return '<button type="button" data-tcg-lua="' + i + '"><b lang="zh">' + esc(o.zh) + '</b><small>' + esc(o.py) + '</small></button>'; }).join('') + '</div></div>';
    than.innerHTML = h;
    var khoa = false;
    $all('[data-tcg-lua]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (khoa) return;
        khoa = true;
        var i = +b.getAttribute('data-tcg-lua');
        N.goi('/api/farm/thucung/day/tl', { chon: i }).then(function (kq) {
          $all('[data-tcg-lua]', than).forEach(function (x, j) { x.classList.toggle('dung', j === kq.dungLa); x.classList.toggle('sai', j === i && !kq.dung); x.disabled = true; });
          setTimeout(function () { ketDay(kq, 'chon'); }, 900);
        }, function (e) { khoa = false; N.bao(e.message, 'loi'); if (e.status === 400) { B.day = null; tai(); } });
      });
    });
  }
  function chuMau(k) {
    var a = String(k.chu || k.zh || '').replace(/[^㐀-鿿A-Za-z0-9]/g, '').split('');
    return '<span class="tcg-mau" lang="zh">' + a.map(function (c, i) { return '<i class="' + (k.hit && k.hit[i] ? 'co' : 'thieu') + '">' + esc(c) + '</i>'; }).join('') + '</span>';
  }
  function ketDay(kq, cach) {
    kq.cach = cach;
    N.tieng(kq.dung ? 'dung' : 'sai');
    N.doc(kq.zh);
    if (kq.pet) B.d = kq.pet;
    if (kq.st) N.nhanTrangThai(kq.st);
    B.day = { k: B.day.k, ket: kq };
    if (kq.thuoc) { N.tieng('len'); if (N.fx) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, true); }
    N.veBang();
  }

  N.dangKy('thucung', function (than, bd) {
    $('#ntBangTit').textContent = 'Thú cưng 宠物';
    if (!B.d || !S.st) { N.datTab([], ''); than.innerHTML = '<p class="nt-trong">Đang gọi thú cưng…</p>'; tai(); return; }
    var p = B.d.pet;
    if (!p) { N.datTab([], ''); veNhanNuoi(than); return; }
    if (B.day) { N.datTab([], ''); veDay(than); return; }
    if (B.choi) { N.datTab([], ''); veChoiCau(than); return; }
    if (B.ketChoi) { N.datTab([], ''); veKetChoi(than); return; }
    var tab = bd.tab && /^(lenh|an|choi)$/.test(bd.tab) ? bd.tab : 'lenh';
    bd.tab = tab;
    N.datTab([['lenh', '🎓 Dạy lệnh'], ['an', '🍖 Cho ăn'], ['choi', '🎾 Chơi' + (p.choi ? '' : ' •')]], tab);
    var l = loaiCua(p.loai);
    than.innerHTML = '<div class="tcg-b">' + dauPet(p, l) + '</div>';
    var khung = $('.tcg-b', than);
    if (tab === 'an') veAnTab(khung, p, l); else if (tab === 'choi') veChoiTab(khung, p); else veLenhTab(khung, p);
  });
  // dong bang giua chung: tat micro
  N.sauBang.push(function (bd) { if (!bd || bd.loai !== 'thucung' || !B.day || B.day.ket || B.day.cach !== 'noi') dungNghe(); });

  /* ================= 3) NUT TRONG "⋯ Thêm" ================= */
  function taoNut() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || $('#ntThemPet')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-them-o'; b.id = 'ntThemPet'; b.setAttribute('data-mo', 'thucung');
    b.innerHTML = '<span class="nt-them-emo" aria-hidden="true">🐶</span><span class="nt-muc-chu"><b>Thú cưng <span lang="zh">宠物</span></b><small id="ntPetPhu">nuôi & dạy lệnh tiếng Trung</small></span>';
    var sau = luoi.querySelector('[data-mo="cay7"]') || luoi.querySelector('#ntThemLai');
    luoi.insertBefore(b, sau ? sau.nextSibling : null);
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      if (S.tham && N.veNha) N.veNha();
      B.d = null; B.day = null; B.choi = null; B.ketChoi = null;
      N.moBang('thucung');
    });
  }
  taoNut();
  N.sau.push(function (st) {
    var phu = $('#ntPetPhu'), kt = st && st.kt;
    if (!phu || !kt) return;
    var p = kt.pet;
    phu.textContent = p ? p.ten + ' · ' + mat(p.vui) + ' vui ' + p.vui + ' · thuộc ' + p.thuoc.length + ' lệnh' : kt.petMo ? 'nuôi chó, mèo, thỏ · dạy lệnh 坐下 握手…' : '🔒 mở ở cấp 5 · dạy lệnh tiếng Trung';
  });
})();
