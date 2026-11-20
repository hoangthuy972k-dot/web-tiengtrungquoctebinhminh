/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Mua Noel: Thi dua "Thị trấn sáng nhất" 最亮的小镇 (2026-11-18).
   May chu (nong-trai-noel-sangnhat.js) xep hang cay thong cac thi tran theo so mon trang tri, chot ket qua ngay 24/12.
   O day: "🏆 Bảng xếp hạng cây thông" trong bang cay thong thi tran (#ntNoelTt), hang + so mon tren tung lop o "🏙 Các thị trấn",
   khung ten vang cho thi tran thang (ten thi tran, cac lo dat, ten nong trai khi sang tham, bien vang canh nha em),
   the nhan thuong 1 lan cho em da treo >= 1 mon.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, goi = N.goi, bao = N.bao, S = N.S;
  var SN = { d: null, luc: 0, dang: null, tt: null, daMoi: false };

  function mua() { var n = S.st && S.st.kt && S.st.kt.noel; return !!(n && n.mua); }
  function giam() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function tai(ep) {
    if (!ep && SN.d && Date.now() - SN.luc < 30000) return Promise.resolve(SN.d);
    if (SN.dang) return SN.dang;
    SN.dang = goi('/api/farm/noel/sangnhat').then(function (r) { SN.d = r; SN.luc = Date.now(); SN.dang = null; apDung(); return r; }, function (e) { SN.dang = null; throw e; });
    return SN.dang;
  }
  function thang(id) { return !!(SN.d && SN.d.mua && id && SN.d.thang.indexOf(id) >= 0); }
  function ngayVn(s) { var p = String(s || '').split('-'); return p.length === 3 ? +p[2] + '/' + +p[1] : s; }
  function huy(hang) { return hang <= 3 ? ['🥇', '🥈', '🥉'][hang - 1] : '#' + hang; }
  var DANH = function (nam) { return 'Thị trấn sáng nhất ' + nam; };

  /* ---------------- bang xep hang (trong bang cay thong thi tran) ---------------- */
  function htmlBang(r, lopXem) {
    if (!r || !r.ds) return '';
    var ds = r.ds.slice(0, 8), em = r.ds.filter(function (x) { return x.la; })[0];
    if (em && ds.indexOf(em) < 0) ds.push(em);
    var max = Math.max(1, r.ds[0] ? r.ds[0].n : 1);
    var h = '<div class="sn-bang"><h4>🏆 Bảng xếp hạng cây thông <small lang="zh">最亮的小镇</small></h4>' +
      '<p class="sn-phu">' + (r.daChot ? '🎉 Đã chốt ngày ' + ngayVn(r.chot) + ': ' + (r.thang.length ? 'vô địch là ' + r.ds.filter(function (x) { return x.thang; }).map(function (x) { return '<b>' + esc(x.ten) + '</b>'; }).join(', ') : 'chưa có thị trấn nào treo đồ') + '!'
        : 'Thị trấn nào treo nhiều đồ nhất đến hết ngày <b>' + ngayVn(dayTruoc(r.chot)) + '</b> sẽ thành <b>' + DANH(r.nam) + '</b> ✨') + '</p>' +
      (ds.length ? '<ol class="sn-ds">' + ds.map(function (x) {
        return '<li class="' + (x.la ? 'la ' : '') + (x.thang ? 'thang ' : '') + (x.id === lopXem ? 'xem' : '') + '"><span class="sn-hang">' + huy(x.hang) + '</span>' +
          '<span class="sn-ten">' + esc(x.ten) + (x.la ? ' <em>lớp em</em>' : '') + (x.thang ? ' 👑' : '') + '</span>' +
          '<span class="sn-thanh"><i style="width:' + Math.round(x.n * 100 / max) + '%"></i></span><b class="sn-n">' + x.n + '</b></li>';
      }).join('') + '</ol>' : '<p class="sn-phu">Chưa có thị trấn nào.</p>');
    var e = r.em;
    if (e && r.daChot && e.thang) h += e.duoc ? (e.da ? '<p class="sn-em">✓ Em đã nhận thưởng ' + e.xu + ' xu — cảm ơn em đã thắp sáng thị trấn!</p>'
      : '<button type="button" class="nt-nut nt-nut-vang sn-nhan" data-sn-nhan>🎁 Nhận thưởng: ' + e.xu + ' xu + ' + e.xp + ' kinh nghiệm</button>')
      : '<p class="sn-em">Thị trấn em thắng! Phần thưởng dành cho các bạn đã treo ít nhất 1 món — mùa sau em nhớ treo nhé!</p>';
    else if (e && !r.daChot && e.hang) h += '<p class="sn-em">Lớp em đang <b>hạng ' + e.hang + '</b> với ' + (e.n || 0) + ' món.' + (e.treo ? ' Em đã góp sức rồi — mỗi ngày treo 1 món miễn phí nhé!' : ' Treo ít nhất <b>1 món</b> để nhận thưởng nếu lớp em thắng!') + '</p>';
    return h + '</div>';
  }
  function dayTruoc(s) { var t = Date.parse(s + 'T00:00:00Z') - 86400000; return isNaN(t) ? s : new Date(t).toISOString().slice(0, 10); }
  function ganNhan(goc) {
    var b = goc && goc.querySelector('[data-sn-nhan]');
    if (!b) return;
    b.addEventListener('click', function () {
      b.disabled = true;
      goi('/api/farm/noel/sangnhat/nhan', {}).then(function (kq) {
        if (kq.st) N.nhanTrangThai(kq.st);
        N.tieng('mung');
        N.doc('恭喜你！');
        if (N.fx && !giam()) N.fx.mung(b, true);
        bao('🏆 ' + DANH(SN.d.nam) + '! +' + kq.xu + ' xu, +' + kq.xp + ' kinh nghiệm');
        if (SN.d && SN.d.em) SN.d.em.da = true;
        chenTt();
        if (N.bangDang() && N.bangDang().loai === 'nho') N.dongBang();
      }, function (e) { b.disabled = false; bao(e.message, 'loi'); });
    });
  }

  /* ---------------- chen vao bang cay thong thi tran #ntNoelTt (ve lai moi lan treo) ---------------- */
  function chenTt() {
    var noi = $('#ntNoelTt');
    if (!noi || !SN.d || !SN.d.mua) return;
    var ben = noi.querySelector('.nt-ntt-ben') || noi;
    var cu = ben.querySelector('.sn-bang');
    if (cu) cu.remove();
    ben.insertAdjacentHTML('beforeend', htmlBang(SN.d, SN.tt && SN.tt.lopId));
    ganNhan(ben);
  }
  var theoNoi = null;
  function theoDoiTt() {
    var tt = $('#ntThiTran');
    if (!tt || !window.MutationObserver) return;
    var gan1 = function () {
      var noi = $('#ntNoelTt');
      if (!noi || noi._sn) return;
      noi._sn = 1;
      if (theoNoi) theoNoi.disconnect();
      theoNoi = new MutationObserver(function () { if (!noi.querySelector('.sn-bang')) chenTt(); });
      theoNoi.observe(noi, { childList: true });
      chenTt();
    };
    new MutationObserver(gan1).observe(tt, { childList: true });
    gan1();
  }
  // gom thong tin thi tran dang xem (lopId) tu N.veNoelTt (nong-trai.js goi moi lan ve thi tran)
  function boc() {
    var goc = N.veNoelTt;
    if (!goc || goc._sn) return;
    var moi = function (r) {
      SN.tt = r || null;
      veKhungTt();
      if (mua()) tai().then(function () { veKhungTt(); chenTt(); }, function () {});
      return goc.apply(this, arguments);
    };
    moi._sn = 1;
    N.veNoelTt = moi;
  }
  /* ---------------- khung vang ---------------- */
  function veKhungTt() {
    var tt = $('#ntThiTran'), ten = $('#ntTtTen');
    if (!tt || !ten) return;
    var on = !!(SN.tt && thang(SN.tt.lopId));
    tt.classList.toggle('sn-vang', on);
    var b = $('#snTtHuy');
    if (on && !b) {
      b = document.createElement('span');
      b.id = 'snTtHuy'; b.className = 'sn-huy';
      ten.insertAdjacentElement('afterend', b);
    }
    if (b) { b.hidden = !on; if (on) b.innerHTML = '🏆 ' + DANH(SN.d.nam) + ' <span lang="zh">最亮的小镇</span>'; }
  }
  function veKhungTham() {
    var chu = $('#ntThamChu');
    if (!chu) return;
    var on = !!(S.tham && S.tham.lop && thang(S.tham.lop.id));
    chu.classList.toggle('sn-vang', on);
    chu.title = on ? '🏆 ' + DANH(SN.d.nam) : '';
  }
  // bien vang canh nha (nong trai cua em / cua ban thuoc thi tran thang)
  function veBienNha() {
    var dat = $('#ntDat');
    if (!dat) return;
    var cu = dat.querySelector('.sn-bien');
    if (cu) cu.remove();
    if (!SN.d || !SN.d.mua) return;
    var on = S.tham ? !!(S.tham.lop && thang(S.tham.lop.id)) : !!(SN.d.em && SN.d.em.thang);
    if (!on) return;
    var nha = dat.querySelector('.nt-vat.nt-k-nha');
    if (!nha) return;
    var el = document.createElement('span');
    el.className = 'sn-bien';
    el.setAttribute('aria-label', DANH(SN.d.nam));
    el.innerHTML = '<b lang="zh">最亮小镇</b><small>' + SN.d.nam + '</small>';
    (nha.querySelector('.nt-dung') || nha).appendChild(el);
  }
  function apDung() { veKhungTt(); veKhungTham(); veBienNha(); document.body.classList.toggle('sn-em-vang', !!(SN.d && SN.d.mua && SN.d.em && SN.d.em.thang)); }

  /* ---------------- "🏙 Các thị trấn": hang cay thong tren tung lop ---------------- */
  N.sauBang.push(function (b) {
    if (!b || b.loai !== 'cacthitran' || !mua()) return;
    var than = $('#ntBangThan');
    var chen = function () {
      if (!SN.d || !than.querySelector('.nt-cac-tt')) return false;
      if (than.querySelector('.sn-cac')) return true;
      var max = Math.max(1, SN.d.ds[0] ? SN.d.ds[0].n : 1);
      than.querySelector('.nt-cac-tt').insertAdjacentHTML('beforebegin', '<div class="sn-cac">' + htmlBang(SN.d, '') + '</div>');
      ganNhan(than.querySelector('.sn-cac'));
      $all('[data-xem-tt]', than).forEach(function (bt) {
        var x = SN.d.ds.filter(function (y) { return y.id === bt.getAttribute('data-xem-tt'); })[0], li = bt.closest('li');
        if (!x || !li) return;
        if (x.thang) li.classList.add('sn-vang');
        var dong = li.querySelector('.nt-cac-so');
        if (dong) dong.insertAdjacentHTML('beforeend', '<span class="sn-cac-n">🎄 Cây thông <b>' + x.n + '</b> món · ' + huy(x.hang) + (x.thang ? ' 👑' : '') + '</span>');
      });
      return true;
    };
    tai().then(function () {
      if (chen()) return;
      if (!window.MutationObserver) return;
      var ob = new MutationObserver(function () { if (!N.bangDang() || N.bangDang().loai !== 'cacthitran' || chen()) ob.disconnect(); });
      ob.observe(than, { childList: true });
      setTimeout(function () { ob.disconnect(); }, 15000);
    }, function () {});
  });

  /* ---------------- the nhan thuong (1 lan, khi lop em thang) ---------------- */
  function moiNhan() {
    var r = SN.d;
    if (SN.daMoi || !r || !r.mua || !r.daChot || !r.em || !r.em.duoc || r.em.da) return;
    var ranh = function () { return $('#ntLop').hidden && $('#ntHoi').hidden && !S.tham && $('#ntThiTran').hidden; };
    var lan = 0;
    var thu = function () {
      if (!ranh()) { if (++lan < 40) setTimeout(thu, 1500); return; }
      SN.daMoi = true;
      N.moBangNho('<div class="nt-chuc sn-the"><span class="sn-the-nhan">🏆 ' + DANH(r.nam) + '</span><h2 lang="zh">最亮的小镇</h2><p class="sn-py">zuì liàng de xiǎozhèn</p>' +
        '<p>Cây thông của thị trấn em sáng nhất mùa Noel năm nay! Cảm ơn em đã treo đồ trang trí cùng các bạn.</p>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-vang nt-nut-to" data-sn-nhan>🎁 Nhận ' + r.em.xu + ' xu + ' + r.em.xp + ' kinh nghiệm</button>' +
        '<button type="button" class="nt-nut nt-nut-nho" data-dong>Để sau</button></div></div>');
      ganNhan($('#ntBangThan'));
      N.tieng('len');
    };
    setTimeout(thu, 2500);
  }

  N.sauVe.push(function () { veBienNha(); veKhungTham(); });
  var batDau = false;
  N.sau.push(function () {
    boc();
    if (!mua()) { document.body.classList.remove('sn-em-vang'); return; }
    if (!batDau) { batDau = true; theoDoiTt(); tai(true).then(moiNhan, function () {}); }
  });
  if (S.st) N.sau[N.sau.length - 1]();
  boc();
})();
