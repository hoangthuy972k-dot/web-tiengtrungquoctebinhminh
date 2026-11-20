/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Lich dem nguoc Noel 圣诞倒计时 Shèngdàn dàojìshí (2026-11-18).
   May chu (nong-trai-noel-lich.js) quyet dinh moi thu: ngay, dieu kien hoc, qua. O day chi ve:
   - bang 'noel-lich': 24 o cua (1 -> 24/12), cua mo ra (lat ban le) de lo tu tieng Trung cua ngay + qua
   - nut "📅 Lịch Noel" trong bang ⋯ Thêm (cham do khi o hom nay chua mo) + nut tren bang chao mua Noel
   - N.noelQuaHtml(ds): ve danh sach qua (dung chung voi hop qua ong gia Noel)
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, S = N.S;
  var L = { d: null, luc: 0, dang: false, vua: 0, qua: null };
  function cat() { return (S.cat && S.cat.NLICH) || null; }
  function mua() { var n = S.st && S.st.kt && S.st.kt.noel; return !!(n && n.mua && cat()); }
  function giam() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  var TEN_TR = { sao: 'Ngôi sao', den: 'Dây đèn', no: 'Nơ đỏ', chau: 'Quả châu', chuong: 'Chuông vàng', keo: 'Kẹo gậy', qua: 'Hộp quà' };

  /* ---------- danh sach qua (dung chung) ---------- */
  function quaHtml(ds) {
    var c = S.cat || {};
    return '<ul class="nl-qua-ds">' + (ds || []).map(function (q) {
      var hinh = 'ic-xu', chu = '';
      if (q.loai === 'xu') chu = '<b>+' + q.n + '</b> xu';
      else if (q.loai === 'hat') { var cy = (c.CAY || {})[q.k] || {}; hinh = 'ic-hat'; chu = '<b>+' + q.n + '</b> hạt ' + esc(String(cy.vn || q.k).toLowerCase()) + (cy.zh ? ' <span lang="zh">' + esc(cy.zh) + '</span>' : '') + (q.quy ? ' <em>quý</em>' : ''); }
      else if (q.loai === 'tr') {
        var m = (c.NOEL && c.NOEL.TR && c.NOEL.TR[q.t]) || {};
        hinh = q.t === 'chau' ? 'noel-chau' : 'noel-' + q.t;
        chu = esc(m.vn || TEN_TR[q.t] || q.t) + (m.zh ? ' <span lang="zh">' + esc(m.zh) + '</span> <small>' + esc(m.py || '') + '</small>' : '') +
          (q.treo ? ' — <i>đã treo lên cây thông của em</i> 🎄' : ' — <i>chưa có chỗ trên cây thông, đổi thành +' + q.xu + ' xu</i>');
      } else if (q.loai === 'tuyet') { hinh = 'noel-tuyet'; chu = '<b>+' + q.n + '</b> bông tuyết <span lang="zh">雪花</span> <small>xuěhuā</small>'; }
      else if (q.loai === 'tt') { var t = (c.TT || {})[q.k] || {}; hinh = q.k; chu = esc(t.vn || q.k) + (t.zh ? ' <span lang="zh">' + esc(t.zh) + '</span> <small>' + esc(t.py || '') + '</small>' : '') + ' — <i>trong Túi đồ</i>'; }
      return '<li>' + N.img(hinh, 'nl-qua-h') + '<span>' + chu + '</span></li>';
    }).join('') + '</ul>';
  }
  N.noelQuaHtml = quaHtml;
  function quaIc(ds) {
    var q = (ds || [])[0];
    if (!q) return '🎁';
    return q.loai === 'xu' ? N.img('ic-xu') : q.loai === 'hat' ? N.img('ic-hat') : q.loai === 'tuyet' ? N.img('noel-tuyet') : q.loai === 'tr' ? N.img(q.t === 'chau' ? 'noel-chau' : 'noel-' + q.t) : N.img(q.k);
  }

  /* ---------- tai trang thai ---------- */
  function tai() {
    return N.goi('/api/farm/noel/lich').then(function (r) { L.d = r; L.luc = Date.now(); return r; });
  }
  function laBang() { var b = N.bangDang(); return b && b.loai === 'noel-lich'; }

  /* ---------- bang lich ---------- */
  function htmlDau(r, c) {
    var h = '<div class="nl-dau"><button type="button" class="nl-ten" data-doc="' + esc(c.TEN.zh) + '"><b lang="zh">' + esc(c.TEN.zh) + '</b><span>' + esc(c.TEN.py) + '</span><i>' + esc(c.TEN.vn) + ' 🔊</i></button>';
    if (!r.mua) h += '<p class="nl-tb">Mùa Noel đã qua — hẹn em mùa sau nhé!</p>';
    else if (r.truoc) h += '<p class="nl-dem"><b>' + r.truoc + '</b><span>ngày nữa mở ô số 1</span><small>Lịch mở từ ngày 1/12 đến 24/12 — mỗi ngày học xong mở 1 ô quà!</small></p>';
    else if (r.het) h += '<p class="nl-tb">🎄 Lịch Noel năm nay đã khép lại. Em đã mở <b>' + r.soMo + '/24</b> ô' + (r.hh ? ' và nhận <b>Huy hiệu Chăm chỉ mùa Noel</b> 🏅' : '') + '.</p>';
    else {
      var hoc = r.hoc || { sao: 0, can: c.SAO_CAN }, pt = Math.min(100, Math.round(hoc.sao * 100 / (hoc.can || 20)));
      var daNay = r.o[r.homNay - 1] && r.o[r.homNay - 1].tt === 'mo';
      h += '<p class="nl-nay">Hôm nay <b>' + r.homNay + '/12</b> — ' + (daNay ? 'em đã mở ô số ' + r.homNay + ' ✓' : 'mở <b>ô số ' + r.homNay + '</b> nhé!') + '</p>' +
        '<div class="nl-hoc' + (hoc.du ? ' du' : '') + '"><span>' + (hoc.du ? '✅ Hôm nay em đã học đủ — mở ô được rồi!' : '📚 Học hôm nay để mở ô: <b>' + hoc.sao + '/' + hoc.can + '</b> sao học, hoặc xong <b>“Hôm nay em ôn gì”</b>') + '</span>' +
        '<i><u style="width:' + (hoc.du ? 100 : pt) + '%"></u></i>' + (hoc.du ? '' : '<a class="nt-nut nt-nut-xanh nt-nut-nho" href="' + esc(N.moiBaiHoc()) + '">📚 Học kiếm sao</a>') + '</div>';
    }
    if (r.mua && !r.truoc) {
      h += '<p class="nl-chuoi">' + (r.deu ? '🌟 Mở đúng ngày: <b>' + r.dung + '</b> ô — chưa lỡ ngày nào! Mở đủ 24 ô đúng ngày nhận <b>Huy hiệu Chăm chỉ mùa Noel</b> 🏅'
        : '⭐ Mở đúng ngày: <b>' + r.dung + '</b> ô. Em đã lỡ ngày — ô lỡ vẫn mở bù được (tối đa ' + c.BU_NGAY + ' ô/ngày, còn ' + r.buCon + ' hôm nay) nhưng không còn huy hiệu năm nay.') + '</p>';
    }
    return h + '</div>';
  }
  function htmlO(r, i) {
    var o = r.o[i], n = i + 1, tu = cat().TU[i], tre = ((n * 37) % 11) * 0.13;
    var cls = 'nl-o m' + (n % 5) + ' tt-' + o.tt + (o.dn ? ' dn' : '') + (n === 24 ? ' o24' : '') + (L.vua === n ? ' vua' : '');
    var nhan = o.tt === 'mo' ? 'Ô ' + n + ': ' + tu.zh + ' ' + tu.py + ' — ' + tu.vn : o.tt === 'nay' ? 'Mở ô số ' + n + ' hôm nay' : o.tt === 'bu' ? 'Mở bù ô số ' + n : 'Ô số ' + n + ' — mở ngày ' + n + '/12';
    return '<button type="button" class="' + cls + '" data-nl="' + n + '" aria-label="' + esc(nhan) + '" style="--tre:-' + tre.toFixed(2) + 's">' +
      '<span class="nl-trong">' + (o.tt === 'mo' ? '<span class="nl-trong-ic">' + quaIc(o.qua) + '</span><b lang="zh">' + esc(tu.zh) + '</b><small>' + esc(tu.py) + '</small>' : '') + '</span>' +
      '<span class="nl-cua"><span class="nl-so">' + n + '</span>' + (n === 24 ? '<span class="nl-no" aria-hidden="true">🎁</span>' : '') +
        (o.tt === 'khoa' ? '<span class="nl-khoa" aria-hidden="true">🔒</span>' : o.tt === 'bu' ? '<span class="nl-nhan">mở bù</span>' : o.tt === 'nay' ? '<span class="nl-nhan nay">hôm nay!</span>' : '') +
        '<i class="nl-num" aria-hidden="true"></i></span>' +
      (o.dn ? '<span class="nl-sao" aria-hidden="true">★</span>' : '') + '</button>';
  }
  N.dangKy('noel-lich', function (than) {
    $('#ntBangTit').textContent = '📅 Lịch đếm ngược Noel';
    N.datTab([], '');
    var c = cat();
    if (!c) { than.innerHTML = '<p class="nt-trong">Lịch Noel chưa sẵn sàng.</p>'; return; }
    if (!L.d) {
      than.innerHTML = '<p class="nt-trong">Đang mở lịch…</p>';
      tai().then(function () { if (laBang()) N.veBang(); }, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
      return;
    }
    if (Date.now() - L.luc > 15000) tai().then(function () { if (laBang() && !L.dang) N.veBang(); }, function () {});
    var r = L.d, h = '<div class="nl-bang">' + htmlDau(r, c) + '<div class="nl-khung"><div class="nl-day" aria-hidden="true">' + new Array(13).join('<i></i>') + '</div><div class="nl-luoi">';
    for (var i = 0; i < 24; i++) h += htmlO(r, i);
    h += '</div></div><p class="nt-meo">Mỗi ô có một <b>từ tiếng Trung mùa Noel</b> và một món quà: xu, hạt giống, bông tuyết ❄ (để đắp người tuyết), đồ trang trí treo thẳng lên cây thông của em. Ô số 24: quà lớn — <b>Tượng tuần lộc</b> 🦌!</p>' +
      '<div class="nl-mo" id="nlMo" hidden></div></div>';
    than.innerHTML = h;
    L.vua = 0;
    $all('img', than).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    var ten = $('.nl-ten', than);
    if (ten) ten.addEventListener('click', function () { N.doc(ten.getAttribute('data-doc')); });
    $('.nl-luoi', than).addEventListener('click', function (e) {
      var b = e.target.closest('[data-nl]');
      if (b) bamO(b, +b.getAttribute('data-nl'));
    });
    if (L.qua) hienQua(L.qua);
  });
  function bamO(b, n) {
    var r = L.d, o = r && r.o[n - 1], tu = cat().TU[n - 1];
    if (!o) return;
    if (o.tt === 'mo') { N.doc(tu.zh); hienQua({ n: n, tu: tu, qua: o.qua, xem: true, dn: o.dn }); return; }
    if (o.tt === 'khoa') {
      N.tieng('sai');
      if (N.fx && N.fx.rung) N.fx.rung(b);
      N.bao(r.truoc ? '🔒 Lịch mở từ 1/12 — còn ' + r.truoc + ' ngày nữa!' : r.het ? 'Lịch Noel năm nay đã khép lại.' : '🔒 Ô số ' + n + ' mở vào ngày ' + n + '/12 — đợi nhé!');
      return;
    }
    if (!r.hoc || !r.hoc.du) { N.tieng('sai'); N.bao('📚 Học thêm đã nhé: cần ' + cat().SAO_CAN + ' sao học hôm nay (em có ' + ((r.hoc && r.hoc.sao) || 0) + ') hoặc xong “Hôm nay em ôn gì”.', 'loi'); return; }
    if (L.dang) return;
    L.dang = true;
    b.classList.add('dang');
    N.goi('/api/farm/noel/lich/mo', { n: n }).then(function (kq) {
      L.dang = false;
      // lat cua truoc, ve lai sau khi cua mo xong
      b.classList.remove('dang');
      b.classList.add('lat');
      N.tieng(n === 24 || kq.hh ? 'len' : 'mua');
      setTimeout(function () {
        L.d = kq.lich; L.luc = Date.now(); L.vua = n;
        L.qua = { n: n, tu: kq.tu, qua: kq.qua, hh: kq.hh, dn: true };
        if (kq.st) N.nhanTrangThai(kq.st);
        if (laBang()) N.veBang();
        N.doc(kq.tu.zh);
        var moi = $('[data-nl="' + n + '"]');
        if (moi && N.fx && N.fx.mung && !giam()) N.fx.mung(moi, n === 24 || kq.hh);
      }, giam() ? 250 : 900);
    }, function (e) { L.dang = false; b.classList.remove('dang'); N.tieng('sai'); N.bao(e.message, 'loi'); tai().then(function () { if (laBang()) N.veBang(); }, function () {}); });
  }
  // the qua vua mo / xem lai o da mo
  function hienQua(x) {
    var el = $('#nlMo');
    if (!el) return;
    L.qua = null;
    el.innerHTML = '<div class="nl-mo-the' + (x.n === 24 ? ' lon' : '') + '" role="dialog" aria-label="Quà ô số ' + x.n + '">' +
      '<p class="nl-mo-so">Ô số ' + x.n + (x.xem ? (x.dn ? ' · mở đúng ngày ★' : ' · mở bù') : '') + '</p>' +
      '<button type="button" class="nl-mo-tu" data-doc="' + esc(x.tu.zh) + '"><b lang="zh">' + esc(x.tu.zh) + '</b><span>' + esc(x.tu.py) + '</span><i>' + esc(x.tu.vn) + ' 🔊</i></button>' +
      (x.qua && x.qua.length ? '<p class="nl-mo-t">' + (x.xem ? 'Quà em đã nhận:' : '🎁 Em nhận được:') + '</p>' + quaHtml(x.qua) : '') +
      (x.hh ? '<p class="nl-mo-hh">🏅 Tuyệt vời! Em mở đủ 24 ô đúng ngày — nhận <b>Huy hiệu Chăm chỉ mùa Noel</b> <span lang="zh">圣诞勤学章</span> (trong Túi đồ) và +100 xu!</p>' : '') +
      '<button type="button" class="nt-nut nt-nut-xanh" data-nl-dong>Tuyệt quá!</button></div>';
    el.hidden = false;
    $all('img', el).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    var tu = $('.nl-mo-tu', el);
    tu.addEventListener('click', function () { N.doc(tu.getAttribute('data-doc')); });
    el.onclick = function (e) { if (e.target === el || e.target.closest('[data-nl-dong]')) { el.hidden = true; el.innerHTML = ''; } };
    var nut = $('[data-nl-dong]', el);
    if (nut) nut.focus();
  }

  /* ---------- nut trong bang ⋯ Thêm + nut tren bang chao ---------- */
  function nutThem() {
    var luoi = $('#ntThemLuoi');
    if (!luoi) return;
    var b = $('#ntThemNoelLich');
    if (!b) {
      b = document.createElement('button');
      b.type = 'button';
      b.className = 'nt-them-o nl-them';
      b.id = 'ntThemNoelLich';
      b.setAttribute('data-mo', 'noel-lich');
      b.innerHTML = '<span class="nt-them-emo" aria-hidden="true">📅</span><span class="nt-muc-chu"><b>Lịch Noel <span lang="zh">圣诞倒计时</span></b><small id="ntNlPhu">mỗi ngày học xong mở 1 ô quà</small></span><i class="nt-cham" id="ntNlCham" hidden></i>';
      var dau = luoi.querySelector('.nt-them-o');
      luoi.insertBefore(b, dau || null);
    }
    var on = mua(), ln = S.st.kt.noelLich || {};
    b.hidden = !on;
    var cham = $('#ntNlCham'), phu = $('#ntNlPhu');
    var can = on && ln.n && !ln.da;
    if (cham && cham.hidden === !!can) cham.hidden = !can;
    if (phu) phu.textContent = can ? 'ô số ' + ln.n + ' hôm nay chưa mở — mở ngay!' : ln.n ? 'đã mở ô hôm nay ✓' : 'mỗi ngày học xong mở 1 ô quà';
  }
  function nutBan() {
    var ban = $('#ntNoelBan .nt-noel-ban-nut');
    if (!ban || ban.querySelector('[data-nl-ban]')) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'nt-nut nt-nut-nho';
    b.setAttribute('data-nl-ban', '1');
    b.textContent = '📅 Lịch Noel';
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var bn = $('#ntNoelBan');
      if (bn) bn.remove();
      try { localStorage.setItem('hyv_noel_an', String((S.st.kt.noel || {}).nam || '')); } catch (er) { /* bo qua */ }
      N.dongThiTran(); if (S.tham) N.veNha();
      N.moBang('noel-lich');
    });
    ban.appendChild(b);
  }
  N.sau.push(function () {
    if (!S.st || !S.st.kt) return;
    nutThem();
    if (mua()) setTimeout(nutBan, 0);
    // trang thai lich cu (ngay da sang) -> tai lai lan sau
    if (L.d && S.st.kt.noelLich && L.d.homNay !== S.st.kt.noelLich.n) L.d = null;
  });
  if (S.st) { nutThem(); setTimeout(nutBan, 0); }
})();
