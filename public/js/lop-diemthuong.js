/* Diem thuong lop — +1 / +2 / +3 ⭐ cho 1 em hoac ca lop, kem ly do (Phat bieu, Lam bai tot, Giup ban, Tien bo).
   Mo tu man Cham diem mieng (LopMieng) va tu nut noi 🏅 hien khi bat ky tro choi / man goi ten nao cua /lop dang mo.
   Lop tren he thong: POST /api/admin/bonus (moi dong 1 em, server bao nong trai: 1 diem = 20 xu, chi em da chon ten
   trong lop — roster.userId); hoan tac: DELETE /api/admin/bonus/:lan. Danh sach nhanh: chi luu tren may (hyv_diemthuong).
   Thu tu bam: chon em (hoac Ca lop) -> so diem -> bam ly do la gui.
   API (window.DiemThuong): mo({ src, rosterId, onXong }), nap(src[, ep]) -> Promise, thang(src) -> { id: tong thang nay } | null */
(function () {
  'use strict';
  if (!window.DiemDanh) return;
  var U = window.DiemDanh._, esc = U.esc;
  var LS_KEY = 'hyv_diemthuong', PREF_KEY = 'hyv_dt_nguon';
  var LY = [['Phát biểu', '🙋'], ['Làm bài tốt', '📝'], ['Giúp bạn', '🤝'], ['Tiến bộ', '📈']];
  var XU_MOI_DIEM = 20; // khop DT_XU trong nong-trai-thidua.js
  var C = {};   // src -> { thang: {}, at }
  var S = { root: null, fab: null, src: '', kids: [], chon: '', diem: 1, loc: '', gan: [], onXong: null, dangGui: false, loi: '' };

  function thangNay() { return U.homNay().slice(0, 7); }
  function vnThang(ms) { return new Date(ms + 7 * 3600000).toISOString().slice(0, 7); }
  /* ---------------- du lieu ---------------- */
  function napLs(src) {
    var all = U.docLS(LS_KEY, {}) || {}, ds = all[src] || [], t = {}, th = thangNay();
    ds.forEach(function (x) { if (vnThang(x.ms) === th) x.ds.forEach(function (id) { t[id] = (t[id] || 0) + x.diem; }); });
    C[src] = { thang: t, at: Date.now() };
  }
  function nap(src, ep) {
    if (!src) return Promise.resolve();
    var c = C[src];
    if (!ep && c && Date.now() - c.at < 120000) return Promise.resolve();
    if (src.indexOf('ls:') === 0) { napLs(src); return Promise.resolve(); }
    if (src.indexOf('sv:') !== 0 || !U.pw()) { C[src] = { thang: {}, at: Date.now() }; return Promise.resolve(); }
    return U.api('/api/admin/bonus?classId=' + encodeURIComponent(src.slice(3))).then(function (d) {
      C[src] = { thang: d.thang || {}, at: Date.now() };
    }).catch(function () { C[src] = { thang: {}, at: Date.now() - 100000 }; });
  }
  function thang(src) { var c = C[src]; return c ? c.thang : null; }
  function cong(src, ids, n) {
    var c = C[src] || (C[src] = { thang: {}, at: Date.now() });
    ids.forEach(function (id) { c.thang[id] = Math.max(0, (c.thang[id] || 0) + n); });
  }

  /* ---------------- tam thuong (sheet) ---------------- */
  function $(s) { return S.root.querySelector(s); }
  function dung() {
    var r = document.createElement('div');
    r.className = 'lth';
    r.hidden = true;
    r.setAttribute('role', 'dialog');
    r.setAttribute('aria-label', 'Điểm thưởng lớp');
    r.innerHTML = '<header class="lth-dau"><span class="lth-tit">🏅 Điểm thưởng lớp</span>' +
        '<button type="button" class="lth-x" data-t="dong" aria-label="Đóng">✕</button></header>' +
      '<select id="lthNguon" class="lth-nguon" aria-label="Danh sách lớp"></select>' +
      '<form class="lth-khoa" id="lthKhoa" hidden><input type="password" id="lthPw" placeholder="Mật khẩu quản trị" autocomplete="current-password"><button type="submit" class="lth-nut">Mở</button></form>' +
      '<p class="lth-buoc"><b>1</b> Chọn bạn</p>' +
      '<input type="search" id="lthTim" class="lth-tim" placeholder="Tìm tên…" autocomplete="off">' +
      '<div class="lth-ds" id="lthDs"></div>' +
      '<p class="lth-buoc"><b>2</b> Số điểm</p>' +
      '<div class="lth-diem" role="radiogroup" aria-label="Số điểm">' + [1, 2, 3].map(function (n) {
        return '<button type="button" role="radio" data-diem="' + n + '">+' + n + ' ⭐</button>';
      }).join('') + '</div>' +
      '<p class="lth-buoc"><b>3</b> Bấm lý do để gửi</p>' +
      '<div class="lth-ly">' + LY.map(function (l) { return '<button type="button" data-ly="' + esc(l[0]) + '">' + l[1] + ' ' + esc(l[0]) + '</button>'; }).join('') + '</div>' +
      '<div class="lth-bao" id="lthBao" aria-live="polite"></div>' +
      '<div class="lth-gan" id="lthGan"></div>' +
      '<p class="lth-meo" id="lthMeo"></p>';
    document.body.appendChild(r);
    S.root = r;
    r.addEventListener('click', bam);
    $('#lthNguon').addEventListener('change', function () { chonNguon(this.value); });
    $('#lthTim').addEventListener('input', function () { S.loc = this.value; veDs(); });
    $('#lthKhoa').addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem('hyv_admin_pw', $('#lthPw').value); } catch (er) { /* bo qua */ }
      $('#lthPw').value = '';
      napNguon(S.src);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && S.root && !S.root.hidden) { e.stopImmediatePropagation(); dong(); }
    }, true);
    if (window.DiemDanh.on) window.DiemDanh.on(function (src) { if (S.root && !S.root.hidden && src === S.src) veDs(); });
  }
  function napNguon(chon) {
    return U.nguon().then(function (ds) {
      $('#lthNguon').innerHTML = U.optHtml(ds, '');
      $('#lthKhoa').hidden = !!U.pw() && ds.some(function (n) { return n.v.indexOf('sv:') === 0; });
      var co = function (v) { return v && ds.some(function (n) { return n.v === v; }); };
      var luu = U.docLS(PREF_KEY, '');
      var v = co(chon) ? chon : co(luu) ? luu : (ds[0] ? ds[0].v : '');
      $('#lthNguon').value = v;
      return chonNguon(v, true);
    });
  }
  function chonNguon(v, giuChon) {
    if (!giuChon) S.chon = '';
    S.src = v; S.kids = []; S.loi = '';
    if (v) U.ghiLS(PREF_KEY, v);
    veMeo();
    if (!v) { veDs(); return Promise.resolve(); }
    $('#lthDs').innerHTML = '<p class="lth-trong">Đang tải…</p>';
    return Promise.all([U.dsHs(v), window.DiemDanh.nap(v), nap(v)]).then(function (r) {
      if (S.src !== v) return;
      S.kids = r[0];
      if (S.chon && S.chon !== '*' && !S.kids.some(function (k) { return k.id === S.chon; })) S.chon = '';
      veDs();
    }).catch(function (e) { S.loi = (e && e.message) || 'Không tải được danh sách.'; veDs(); });
  }
  function veMeo() {
    $('#lthMeo').textContent = S.src.indexOf('sv:') === 0
      ? 'Mỗi điểm = ' + XU_MOI_DIEM + ' xu nông trại cho bạn đã chọn tên mình trong lớp. Cả lớp = các bạn có mặt hôm nay.'
      : S.src ? 'Danh sách nhanh: điểm thưởng chỉ lưu trên máy này (không gửi xu nông trại).' : '';
  }
  function khongDau(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); }
  function veDs() {
    var el = $('#lthDs');
    if (S.loi) { el.innerHTML = '<p class="lth-trong">' + esc(S.loi) + '</p>'; veNut(); return; }
    if (!S.src) { el.innerHTML = '<p class="lth-trong">Chọn lớp ở ô phía trên.</p>'; veNut(); return; }
    var th = thang(S.src) || {}, q = khongDau(S.loc.trim());
    var coMat = S.kids.filter(function (k) { return window.DiemDanh.coMat(S.src, k.id); }).length;
    var h = q ? '' : '<button type="button" class="lth-hs lth-ca' + (S.chon === '*' ? ' on' : '') + '" data-hs="*"><b>👥 Cả lớp</b><small>' + coMat + ' bạn có mặt</small></button>';
    h += S.kids.filter(function (k) { return !q || khongDau(k.name).indexOf(q) >= 0; }).map(function (k) {
      var vang = !window.DiemDanh.coMat(S.src, k.id);
      return '<button type="button" class="lth-hs' + (S.chon === k.id ? ' on' : '') + (vang ? ' vang' : '') + '" data-hs="' + esc(k.id) + '"' + (vang ? ' disabled title="Vắng hôm nay"' : '') + '>' +
        '<b>' + esc(k.name) + '</b>' + (vang ? '<small>vắng</small>' : th[k.id] ? '<small>⭐ ' + th[k.id] + ' tháng này</small>' : '') + '</button>';
    }).join('');
    el.innerHTML = h || '<p class="lth-trong">Không thấy tên nào khớp.</p>';
    veNut();
  }
  function veNut() {
    Array.prototype.forEach.call(S.root.querySelectorAll('[data-diem]'), function (b) {
      var on = +b.getAttribute('data-diem') === S.diem;
      b.classList.toggle('on', on); b.setAttribute('aria-checked', on);
    });
    Array.prototype.forEach.call(S.root.querySelectorAll('[data-ly]'), function (b) { b.disabled = !S.chon || S.dangGui; });
    veGan();
  }
  function veGan() {
    var ds = S.gan.filter(function (x) { return x.src === S.src; }).slice(0, 4);
    $('#lthGan').innerHTML = ds.length ? '<h4>Vừa thưởng</h4>' + ds.map(function (x) {
      return '<div class="lth-gan-d"><span>+' + x.diem + ' ⭐ <b>' + esc(x.ten) + '</b> · ' + esc(x.ly) + '</span>' +
        '<button type="button" class="lth-nut-nho" data-huy="' + esc(x.lan) + '">↶ Hoàn tác</button></div>';
    }).join('') : '';
  }
  function bao(html) {
    var el = $('#lthBao');
    el.innerHTML = html;
    el.classList.add('hien');
    clearTimeout(bao.t);
    bao.t = setTimeout(function () { el.classList.remove('hien'); }, 5000);
  }
  function bam(e) {
    var b = e.target.closest('[data-t], [data-hs], [data-diem], [data-ly], [data-huy]');
    if (!b || b.disabled) return;
    if (b.hasAttribute('data-t')) { dong(); return; }
    if (b.hasAttribute('data-hs')) { S.chon = b.getAttribute('data-hs'); veDs(); return; }
    if (b.hasAttribute('data-diem')) { S.diem = +b.getAttribute('data-diem'); veNut(); return; }
    if (b.hasAttribute('data-ly')) { gui(b.getAttribute('data-ly')); return; }
    if (b.hasAttribute('data-huy')) { hoanTac(b.getAttribute('data-huy'), b); }
  }
  function tenCua(id) {
    if (id === '*') return 'cả lớp';
    return (S.kids.filter(function (k) { return k.id === id; })[0] || {}).name || '';
  }
  function gui(ly) {
    var src = S.src, rid = S.chon, diem = S.diem, ten = tenCua(rid);
    if (!src || !rid || S.dangGui) return;
    S.dangGui = true; veNut();
    var p;
    if (src.indexOf('sv:') === 0) {
      p = U.api('/api/admin/bonus', { method: 'POST', body: JSON.stringify({ classId: src.slice(3), rosterId: rid, diem: diem, ly: ly }) });
    } else {
      var ids = rid === '*' ? S.kids.filter(function (k) { return window.DiemDanh.coMat(src, k.id); }).map(function (k) { return k.id; }) : [rid];
      var lan = 'l' + Date.now().toString(36);
      var all = U.docLS(LS_KEY, {}) || {};
      all[src] = (all[src] || []).concat({ lan: lan, ds: ids, diem: diem, ly: ly, ms: Date.now() }).slice(-400);
      U.ghiLS(LS_KEY, all);
      p = Promise.resolve({ lan: lan, ds: ids, coTk: 0 });
    }
    p.then(function (d) {
      S.dangGui = false;
      cong(src, d.ds || [], diem);
      S.gan.unshift({ src: src, lan: d.lan, ds: d.ds || [], diem: diem, ly: ly, ten: ten });
      S.gan = S.gan.slice(0, 20);
      bao('✓ +' + diem + ' ⭐ cho <b>' + esc(ten) + '</b> vì ' + esc(ly) +
        (src.indexOf('sv:') === 0 ? (d.coTk ? ' · 🌾 ' + (d.coTk > 1 ? d.coTk + ' bạn nhận ' : '') + diem * XU_MOI_DIEM + ' xu nông trại' : ' · chưa có tài khoản liên kết nên không gửi xu') : ''));
      if (rid !== '*') S.chon = '';
      veDs();
      if (S.onXong) try { S.onXong(src); } catch (er) { /* bo qua */ }
    }).catch(function (er) { S.dangGui = false; veNut(); bao('⚠️ ' + esc(er.message)); });
  }
  function hoanTac(lan, nut) {
    var x = S.gan.filter(function (y) { return y.lan === lan; })[0];
    if (!x) return;
    nut.disabled = true;
    var p;
    if (x.src.indexOf('sv:') === 0) p = U.api('/api/admin/bonus/' + encodeURIComponent(lan), { method: 'DELETE' });
    else {
      var all = U.docLS(LS_KEY, {}) || {};
      all[x.src] = (all[x.src] || []).filter(function (y) { return y.lan !== lan; });
      U.ghiLS(LS_KEY, all);
      p = Promise.resolve();
    }
    p.then(function () {
      cong(x.src, x.ds, -x.diem);
      S.gan = S.gan.filter(function (y) { return y.lan !== lan; });
      bao('↶ Đã rút ' + x.diem + ' ⭐ của ' + esc(x.ten) + (x.src.indexOf('sv:') === 0 ? ' (xu nông trại chưa nhận cũng được rút lại)' : ''));
      veDs();
      if (S.onXong) try { S.onXong(x.src); } catch (er) { /* bo qua */ }
    }).catch(function (er) { nut.disabled = false; bao('⚠️ ' + esc(er.message)); });
  }
  function mo(o) {
    o = o || {};
    if (!S.root) dung();
    S.onXong = o.onXong || null;
    if (o.rosterId) S.chon = String(o.rosterId);
    S.root.hidden = false;
    document.documentElement.classList.add('lth-mo');
    S.loc = ''; $('#lthTim').value = '';
    // mac dinh: lop cua man goi ten / tro choi vua mo (DiemDanh.nap gan nhat), roi lop chon lan truoc
    napNguon(o.src || (window.DiemDanh.ganDay && window.DiemDanh.ganDay()) || S.src);
  }
  function dong() {
    if (!S.root) return;
    S.root.hidden = true;
    document.documentElement.classList.remove('lth-mo');
    S.onXong = null;
  }

  /* ---------------- nut noi 🏅 ---------------- */
  // Hien khi co tro choi / man goi ten dang mo: html.<x>-open (ufo-open, gt-open, zb-open...) hoac body.lop-playing
  function capNhatFab() {
    if (!S.fab) return;
    var html = document.documentElement.className || '', body = document.body.className || '';
    var co = /(^|\s)[a-z]+-open(\s|$)/.test(html) || /(^|\s)lop-playing(\s|$)/.test(body);
    S.fab.hidden = !co;
    if (!co && S.root && !S.root.hidden) dong();
  }
  function ganFab() {
    if (!document.getElementById('lopSetup')) return; // chi tren trang /lop
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'lth-fab';
    b.hidden = true;
    b.title = 'Điểm thưởng lớp (+1/+2/+3 ⭐)';
    b.setAttribute('aria-label', 'Điểm thưởng lớp');
    b.innerHTML = '<span aria-hidden="true">🏅</span>';
    b.addEventListener('click', function () { if (S.root && !S.root.hidden) dong(); else mo({}); });
    document.body.appendChild(b);
    S.fab = b;
    var ob = new MutationObserver(capNhatFab);
    ob.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    ob.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    capNhatFab();
  }
  if (document.body) ganFab(); else document.addEventListener('DOMContentLoaded', ganFab);

  window.DiemThuong = { mo: mo, dong: dong, nap: nap, thang: thang, XU: XU_MOI_DIEM };
})();
