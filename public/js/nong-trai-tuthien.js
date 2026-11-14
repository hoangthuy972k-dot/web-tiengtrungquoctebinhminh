/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Tu thien / Tang qua cho ban (2026-11-14, hoc sinh xin co mo).
   May chu kiem moi luat (nong-trai-tuthien.js); o day chi ve bang + gui yeu cau.
   - Bang 'tuthien': the 'ban' (ban cung lop, tim theo ten), 'ls' (qua da nhan / da tang), 'tang' (bang tang qua cho 1 ban)
   - Nut "🎁 Tặng quà" tren thanh tham ban (#ntThamQua)
   - The qua moi: lan sau mo nong trai, tung the mot, nut "Cảm ơn 谢谢！"
   - Nhat ky: qtdi (em tang), qtden (ban tang em), qtcam (ban cam on em)
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, img = N.img, goi = N.goi, bao = N.bao, S = N.S;
  var Q = { d: null, den: null, tuDs: false, loai: 'xu', k: '', n: 1, c: 0, rid: '', gui: false, tim: '', moiDang: false };
  var LOAI = [['xu', '💰', 'Xu'], ['sp', '🧺', 'Hàng trong kho'], ['hat', '🌱', 'Hạt giống']];

  function maMoi() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 10); }
  function qt() { return (S.cat && S.cat.QT) || { chuc: [], camOn: { zh: '谢谢你的礼物！', py: 'Xièxie nǐ de lǐwù!', vn: 'Cảm ơn món quà của bạn!' }, giaQuy: 95, camNgay: 5 }; }
  function chuc(i) { return qt().chuc[i] || qt().chuc[0] || { zh: '', py: '', vn: '' }; }
  // ten + hinh mon qua
  function mon(loai, k, n) {
    if (loai === 'xu') return { zh: '金币', py: 'jīnbì', vn: n + ' xu', ten: 'xu', hinh: 'ic-xu' };
    if (loai === 'hat') { var c = S.cat.CAY[k] || {}; return { zh: (c.zh || '') + '种子', py: (c.py || '') + ' zhǒngzi', vn: n + ' hạt ' + String(c.vn || k).toLowerCase(), ten: 'Hạt ' + String(c.vn || k).toLowerCase(), hinh: 'sp-' + k }; }
    var s = S.cat.SP[k] || {};
    return { zh: s.zh || '', py: s.py || '', vn: n + ' ' + String(s.vn || k).toLowerCase(), ten: s.vn || k, hinh: 'sp-' + k };
  }
  function tenNgan(t) { return window.NhanVat && NhanVat.tenNgan ? NhanVat.tenNgan(t || '') : (t || ''); }
  function chucHtml(c, cls) {
    return '<span class="qt-chuc ' + (cls || '') + '"><b lang="zh">' + esc(c.zh) + '</b><small>' + esc(c.py) + '</small><span>' + esc(c.vn) + '</span></span>';
  }
  function luc(t) {
    var p = Math.max(0, Math.floor((Date.now() + (S.lech || 0) - t) / 60000));
    return p < 1 ? 'vừa xong' : p < 60 ? p + ' phút trước' : p < 1440 ? Math.floor(p / 60) + ' giờ trước' : Math.floor(p / 1440) + ' ngày trước';
  }
  function tai() { return goi('/api/farm/tuthien').then(function (r) { Q.d = r; Q.dLuc = Date.now(); chamThem(); return r; }); }
  function laBang() { var b = N.bangDang(); return b && b.loai === 'tuthien'; }
  function veLai() { if (laBang()) N.veBang(); }
  function chamThem() {
    var c = $('#ntQtCham'), p = $('#ntQtPhu'), st = S.st;
    var moi = st && st.kt ? st.kt.qtMoi || 0 : 0;
    if (c) c.hidden = !moi;
    if (p) p.textContent = moi ? moi + ' món quà mới — mở xem nhé!' : 'tặng quà cho bạn cùng lớp';
  }

  /* ---------------- bang tu thien ---------------- */
  N.dangKy('tuthien', function (than, b) {
    $('#ntBangTit').textContent = '🎁 Từ thiện · Tặng quà';
    if (!N.moTn('qt')) { N.datTab([], ''); than.innerHTML = N.htmlKhoaTn('qt'); return; }
    var tab = b.tab || 'ban';
    b.tab = tab;
    if (tab === 'tang') { N.datTab([], ''); return veTang(than); }
    N.datTab([['ban', '🎁 Tặng bạn'], ['ls', '📜 Quà đã nhận / đã tặng']], tab);
    if (!Q.d) { than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; tai().then(veLai, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; }); return; }
    // du lieu cu hon 8 giay (vua tang / cam on / ban khac vua tang em): ve ngay ban cu roi tai lai
    if (Date.now() - (Q.dLuc || 0) > 8000) tai().then(function () { var b2 = N.bangDang(); if (b2 && b2.loai === 'tuthien' && b2.tab !== 'tang') N.veBang(); }, function () {});
    if (tab === 'ls') return veLs(than);
    veBan(than);
  });

  function htmlTb(r) {
    if (!r.tb) return '';
    var dau = r.tb.ds.length ? r.tb.ds.map(function (x) { return '<b>' + esc(x.la ? 'Em' : tenNgan(x.ten)) + '</b>'; }).join(', ') + ' (tặng quà ' + r.tb.n + ' bạn)' : 'chưa có ai — tặng quà cho ít nhất 2 bạn khác nhau để giành danh hiệu!';
    var truoc = r.tbTruoc ? '<small>Tuần trước: ' + r.tbTruoc.ds.map(function (x) { return esc(x.la ? 'em 🎉' : tenNgan(x.ten)); }).join(', ') + ' — giúp ' + r.tbTruoc.n + ' bạn</small>' : '';
    return '<div class="qt-tb"><span class="qt-tb-ic" aria-hidden="true">💛</span><div><b class="qt-tb-tit">Bạn tốt bụng nhất tuần <span lang="zh">最有爱心</span> <small class="qt-py">zuì yǒu àixīn</small></b>' +
      '<p>Đang dẫn đầu: ' + dau + '</p><small>Tuần này em đã tặng quà cho <b>' + r.tb.em + '</b> bạn khác nhau. Tính số bạn được giúp, không tính số xu.</small>' + truoc + '</div></div>';
  }
  function veBan(than) {
    var r = Q.d;
    if (!r.lop) { than.innerHTML = N.htmlGt('qt') + '<p class="nt-trong">Em chưa vào lớp nào. Vào lớp (mã lớp cô giáo cho) để tặng quà cho các bạn cùng lớp nhé.</p>'; return; }
    var html = N.htmlGt('qt') + '<p class="nt-meo">Tặng <b>xu</b>, <b>nông sản trong kho</b> hoặc <b>hạt giống</b> cho bạn cùng lớp <b>' + esc(r.lop) + '</b>, kèm một lời chúc tiếng Trung. Bạn bấm “Cảm ơn 谢谢！” thì em được <b>+1 ❤</b>.</p>' +
      htmlTb(r) +
      '<label class="qt-tim"><span aria-hidden="true">🔎</span><input type="search" id="qtTim" placeholder="Tìm bạn theo tên…" value="' + esc(Q.tim) + '" autocomplete="off"></label>' +
      '<ul class="qt-ds" id="qtDs"></ul>';
    than.innerHTML = html;
    veDs();
    var o = $('#qtTim');
    o.addEventListener('input', function () { Q.tim = o.value; veDs(); });
  }
  function boDau(t) { return String(t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); }
  function veDs() {
    var ul = $('#qtDs'), q = boDau(Q.tim).trim();
    if (!ul) return;
    var ds = Q.d.ban.filter(function (x) { return !q || boDau(x.ten).indexOf(q) >= 0; });
    ul.innerHTML = ds.length ? ds.map(function (x) {
      var av = window.NhanVat ? NhanVat.svg(x.av || NhanVat.macDinh(x.id), 'qt-av') : '';
      return '<li><span class="qt-av-khung">' + av + '</span><span class="qt-ten"><b>' + esc(x.ten) + '</b><small>Cấp ' + x.lv + (x.chan ? ' · bạn này chưa nhận quà từ em' : '') + '</small></span>' +
        '<button type="button" class="nt-nut nt-nut-hong" data-qt-tang="' + esc(x.id) + '"' + (x.chan ? ' disabled' : '') + '>🎁 Tặng</button></li>';
    }).join('') : '<li class="qt-trong">' + (Q.d.ban.length ? 'Không thấy bạn nào tên như vậy.' : 'Lớp em chưa có bạn nào mở nông trại.') + '</li>';
    $all('[data-qt-tang]', ul).forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-qt-tang'), x = Q.d.ban.filter(function (y) { return y.id === id; })[0];
        moTang(id, x ? x.ten : '', true);
      });
    });
  }
  function veLs(than) {
    var ds = Q.d.ls || [];
    if (!ds.length) { than.innerHTML = '<p class="nt-trong">Chưa có món quà nào. Tặng bạn một món quà nhỏ đi — bạn sẽ vui lắm!</p>'; return; }
    than.innerHTML = '<ul class="qt-ls">' + ds.map(function (x) {
      var m = mon(x.loai, x.k, x.n), c = chuc(x.c), nhan = x.ve === 'nhan';
      return '<li class="' + (nhan ? 'nhan' : 'tang') + '">' + img(m.hinh) + '<p>' +
        (nhan ? '<b>' + esc(x.ten) + '</b> tặng em <b>' + esc(m.vn) + '</b>' : 'Em tặng <b>' + esc(x.ten) + '</b> <b>' + esc(m.vn) + '</b>') +
        ' <span lang="zh">' + esc(m.zh) + '</span> 🎁<br><span class="qt-ls-chuc"><b lang="zh">' + esc(c.zh) + '</b> ' + esc(c.py) + '</span>' +
        '<small>' + luc(x.t) + (x.cam ? (nhan ? ' · ✓ em đã cảm ơn' : ' · 💛 bạn đã cảm ơn') : nhan ? '' : ' · chưa cảm ơn') + '</small></p>' +
        (nhan && !x.cam ? '<button type="button" class="nt-nut nt-nut-xanh nt-nut-nho" data-qt-cam="' + esc(x.id) + '">Cảm ơn 谢谢！</button>' : '') + '</li>';
    }).join('') + '</ul><p class="nt-meo">Hiện 20 món quà gần nhất.</p>';
    $all('[data-qt-cam]', than).forEach(function (b) {
      b.addEventListener('click', function () { b.disabled = true; camOn(b.getAttribute('data-qt-cam'), b).then(function () { tai().then(veLai); }); });
    });
  }

  /* ---------------- bang tang qua cho 1 ban ---------------- */
  function moTang(id, ten, tuDs) {
    Q.den = { id: id, ten: ten }; Q.tuDs = !!tuDs; Q.loai = 'xu'; Q.k = ''; Q.n = 1; Q.c = 0; Q.rid = maMoi();
    var mo = function () { N.moBang('tuthien', 'tang'); };
    if (Q.d) { mo(); tai().then(veLai, function () {}); } else tai().then(mo, function (e) { bao(e.message, 'loi'); });
  }
  function coCua(loai, k) {
    if (loai === 'xu') return Q.d ? Q.d.xu : (S.st ? S.st.xu : 0);
    var x = (Q.d ? Q.d.hang : []).filter(function (h) { return h.loai === loai && h.k === k; })[0];
    return x ? x.n : 0;
  }
  function veTang(than) {
    var r = Q.d, den = Q.den;
    if (!r || !den) { than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; return; }
    var ban = r.ban.filter(function (x) { return x.id === den.id; })[0];
    var hang = r.hang.filter(function (h) { return h.loai === Q.loai; });
    if (Q.loai !== 'xu' && !hang.some(function (h) { return h.k === Q.k; })) Q.k = hang.length ? hang[0].k : '';
    var max = Q.loai === 'xu' || Q.k ? coCua(Q.loai, Q.k) : 0;
    Q.n = Math.max(1, Math.min(Q.n, max || 1));
    var ly = !ban ? 'Em chỉ tặng quà được cho bạn cùng lớp (bạn đã mở nông trại).' : ban.chan ? 'Bạn này hiện chưa nhận quà từ em.' :
      max < 1 ? (Q.loai === 'xu' ? 'Em chưa có xu để tặng.' : Q.loai === 'sp' ? 'Kho chưa có món nào tặng được.' : 'Túi hạt chưa có hạt nào tặng được.') : '';
    var html = '<div class="qt-tang">' +
      '<div class="qt-dau">' + (Q.tuDs ? '<button type="button" class="nt-nut nt-nut-nho" data-qt-lui>← Danh sách</button>' : '') +
      '<p>Tặng quà cho <b>' + esc(den.ten || (ban && ban.ten) || 'bạn') + '</b> 🎁</p></div>' +
      '<h3 class="kt-h3">1. Chọn loại quà</h3><div class="qt-loai" role="tablist">' + LOAI.map(function (l) {
        return '<button type="button" role="tab" aria-selected="' + (Q.loai === l[0]) + '" class="' + (Q.loai === l[0] ? 'bat' : '') + '" data-qt-loai="' + l[0] + '"><span aria-hidden="true">' + l[1] + '</span>' + l[2] + '</button>';
      }).join('') + '</div>';
    if (Q.loai === 'xu') {
      html += '<h3 class="kt-h3">2. Số xu</h3><p class="qt-co">' + img('ic-xu') + 'Em đang có <b>' + r.xu + '</b> xu</p>';
    } else {
      html += '<h3 class="kt-h3">2. Chọn món <small>(em đang có)</small></h3>' + (hang.length ? '<div class="qt-mon">' + hang.map(function (h) {
        var m = mon(h.loai, h.k, h.n);
        return '<button type="button" class="' + (h.k === Q.k ? 'bat' : '') + '" data-qt-k="' + esc(h.k) + '" aria-pressed="' + (h.k === Q.k) + '">' + img(m.hinh) +
          '<b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.py) + '</small><span>' + esc(m.ten) + '</span><em>có ' + h.n + '</em></button>';
      }).join('') + '</div>' : '<p class="nt-trong">' + (Q.loai === 'sp' ? 'Kho chưa có nông sản thường nào để tặng — thu hoạch thêm nhé!' : 'Túi hạt đang trống — mua hạt ở Chợ nông sản hoặc quay vòng quay nhé!') + '</p>') +
        '<p class="kt-nho">Hàng quý (giá từ ' + qt().giaQuy + ' xu, hạt quý) và hàng mua ở chợ (đường, muối, thức ăn chăn nuôi) không tặng được.</p>';
    }
    if (max >= 1) {
      html += '<h3 class="kt-h3">3. Số lượng</h3><div class="kt-sl qt-sl"><button type="button" data-qt-sl="-1" aria-label="Bớt">−</button><output id="qtSl">' + Q.n + '</output>' +
        '<button type="button" data-qt-sl="1" aria-label="Thêm">+</button><button type="button" data-qt-sl="het" class="kt-sl-het">Tất cả</button><small>/ ' + max + '</small></div>';
    }
    html += '<h3 class="kt-h3">' + (max >= 1 ? '4' : '3') + '. Lời chúc</h3><div class="qt-chuc-ds">' + qt().chuc.map(function (c, i) {
      return '<button type="button" class="' + (i === Q.c ? 'bat' : '') + '" data-qt-c="' + i + '" aria-pressed="' + (i === Q.c) + '">' + chucHtml(c) + '</button>';
    }).join('') + '</div>';
    var m2 = mon(Q.loai, Q.k, Q.n);
    html += (ly ? '<p class="qt-ly">' + esc(ly) + '</p>' : '<p class="qt-xem">Em sẽ tặng <b>' + esc(tenNgan(den.ten)) + '</b> <b id="qtXemMon">' + esc(m2.vn) + '</b> kèm lời chúc <b lang="zh">' + esc(chuc(Q.c).zh) + '</b></p>') +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-hong nt-nut-to" id="qtGui"' + (ly || Q.gui ? ' disabled' : '') + '>🎁 Tặng</button></div></div>';
    than.innerHTML = html;
    var lui = $('[data-qt-lui]', than);
    if (lui) lui.addEventListener('click', function () { N.bangDang().tab = 'ban'; N.veBang(); });
    $all('[data-qt-loai]', than).forEach(function (b) { b.addEventListener('click', function () { Q.loai = b.getAttribute('data-qt-loai'); Q.k = ''; Q.n = Q.loai === 'xu' ? Math.min(10, Math.max(1, r.xu)) : 1; N.veBang(); }); });
    $all('[data-qt-k]', than).forEach(function (b) { b.addEventListener('click', function () { Q.k = b.getAttribute('data-qt-k'); Q.n = 1; N.veBang(); }); });
    $all('[data-qt-c]', than).forEach(function (b) { b.addEventListener('click', function () { Q.c = +b.getAttribute('data-qt-c'); N.veBang(); N.doc(chuc(Q.c).zh); }); });
    $all('[data-qt-sl]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var v = b.getAttribute('data-qt-sl');
        Q.n = v === 'het' ? max : Math.max(1, Math.min(max, Q.n + (+v)));
        $('#qtSl').textContent = Q.n;
        var x = $('#qtXemMon');
        if (x) x.textContent = mon(Q.loai, Q.k, Q.n).vn;
      });
    });
    var g = $('#qtGui');
    if (g) g.addEventListener('click', guiQua);
  }
  function guiQua() {
    if (Q.gui || !Q.den) return;
    var g = $('#qtGui');
    Q.gui = true;
    if (g) g.disabled = true;
    var den = Q.den, loai = Q.loai, k = Q.k, n = Q.n;
    goi('/api/farm/tuthien/tang/' + encodeURIComponent(den.id), { loai: loai, k: k, n: n, c: Q.c, rid: Q.rid }).then(function (r) {
      Q.gui = false;
      Q.rid = maMoi();
      if (r.st) N.nhanTrangThai(r.st);
      var m = mon(loai, k, n);
      N.tieng('xu');
      if (N.fx) N.fx.mung(g || { x: innerWidth / 2, y: innerHeight * 0.5 });
      bao('🎁 Em đã tặng ' + tenNgan(den.ten) + ' ' + m.vn + ' — 送给你！');
      return tai().then(function () {
        if (!laBang()) return;
        if (Q.tuDs) { N.bangDang().tab = 'ban'; N.veBang(); } else N.dongBang();
      });
    }, function (e) {
      Q.gui = false;
      bao(e.message, 'loi');
      N.tieng('sai');
      if (g) g.disabled = false;
      tai().then(veLai, function () {});
    });
  }
  // nut tren thanh tham ban
  var nutTham = $('#ntThamQua');
  if (nutTham) nutTham.addEventListener('click', function () { if (S.tham) moTang(S.tham.id, S.tham.ten, false); });

  /* ---------------- cam on + the qua moi ---------------- */
  function camOn(id, nut) {
    return goi('/api/farm/tuthien/camon', { id: id }).then(function (r) {
      if (r.st) N.nhanTrangThai(r.st);
      N.doc('谢谢你的礼物');
      N.tieng('dung');
      Q.dLuc = 0;
      bao(r.da ? 'Em đã cảm ơn món quà này rồi.' : '💛 Đã gửi lời cảm ơn 谢谢！' + (r.tim ? ' — bạn được +1 ❤' : ''));
      return r;
    }, function (e) { if (nut) nut.disabled = false; bao(e.message, 'loi'); throw e; });
  }
  // ranh = khong bang / cau hoi / bang Them / chi dan / huong dan nao dang mo, dang o nha minh
  function banRanh() {
    return $('#ntLop').hidden && $('#ntHoi').hidden && $('#ntThem').hidden && !S.tham && !document.querySelector('.cd-lop') &&
      !document.body.classList.contains('co-bang') && $('#ntThiTran').hidden && $('#ntHoCau').hidden;
  }
  function hienQuaMoi() {
    Q.moiDang = true;
    tai().then(function (r) {
      var hang = (r.moi || []).slice(), ranh = 0;
      var tiep = function () {
        // doi ranh 2 lan lien tiep (qua moi ngay -> nhan vat -> huong dan co the mo noi tiep nhau)
        ranh = banRanh() ? ranh + 1 : 0;
        if (ranh < 2) { setTimeout(tiep, 1200); return; }
        ranh = 0;
        var q = hang.shift();
        if (!q) { Q.moiDang = false; chamThem(); return; }
        var m = mon(q.loai, q.k, q.n), c = chuc(q.c);
        N.tieng('len');
        N.moBangNho('<div class="nt-chuc qt-the"><span class="qt-the-nhan">🎁 Quà của bạn · 礼物</span><h2><b>' + esc(q.ten) + '</b> tặng em</h2>' +
          '<div class="qt-the-qua">' + img(m.hinh) + '<b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.py) + ' · ' + esc(m.vn) + '</small></div>' +
          chucHtml(c, 'to') +
          '<p>' + (q.loai === 'xu' ? 'Đã cộng vào xu của em.' : q.loai === 'hat' ? 'Đã cất vào <b>túi hạt</b> — chạm ô ruộng trống để gieo.' : 'Đã cất vào <b>Kho</b> của em.') + '</p>' +
          '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-qt-the="cam">Cảm ơn 谢谢！</button>' +
          '<button type="button" class="nt-nut nt-nut-nho" data-qt-the="sau">Để sau</button></div></div>');
        N.doc(c.zh);
        var b1 = $('#ntBangThan [data-qt-the="cam"]'), b2 = $('#ntBangThan [data-qt-the="sau"]'), the = $('#ntBangThan .qt-the'), daBam = false;
        var xong = function () { daBam = true; clearInterval(canh); N.dongBang(); setTimeout(tiep, 300); };
        // bang khac de len / dong the ma chua bam: dung hang, lan lam moi sau hien lai (qua chua danh dau da xem)
        var canh = setInterval(function () {
          if (daBam) return;
          if (!document.body.contains(the) || $('#ntLop').hidden) { clearInterval(canh); Q.moiDang = false; }
        }, 800);
        if (b1) b1.addEventListener('click', function () {
          daBam = true; b1.disabled = true; b2.disabled = true;
          if (N.fx) N.fx.mung(b1);
          camOn(q.id, b1).then(xong, function () { daBam = false; b2.disabled = false; });
        });
        if (b2) b2.addEventListener('click', function () {
          daBam = true; b1.disabled = true; b2.disabled = true;
          goi('/api/farm/tuthien/xem', { id: q.id }).then(function (r2) { if (r2.st) N.nhanTrangThai(r2.st); xong(); }, function () { xong(); });
        });
      };
      tiep();
    }, function () { Q.moiDang = false; });
  }
  N.sau.push(function (st) {
    chamThem();
    if (st && st.kt && st.kt.qtMoi > 0 && !Q.moiDang) setTimeout(function () { if (!Q.moiDang) hienQuaMoi(); }, 1800);
  });

  /* ---------------- nhat ky ---------------- */
  function dongMon(e) { var m = mon(e.loai, e.k, e.n); return '<b>' + esc(m.vn) + '</b> <span lang="zh">' + esc(m.zh) + '</span>'; }
  N.htmlNk.qtdi = function (e, ai) {
    var c = chuc(e.c);
    return { hinh: mon(e.loai, e.k, e.n).hinh, chu: 'Em đã tặng ' + ai + ' ' + dongMon(e) + ' 🎁 · <b lang="zh">' + esc(c.zh) + '</b> ' + esc(c.py) };
  };
  N.htmlNk.qtden = function (e, ai) {
    var c = chuc(e.c);
    return { hinh: mon(e.loai, e.k, e.n).hinh, chu: ai + ' tặng em ' + dongMon(e) + ' 🎁<br><button type="button" class="nt-nk-chao" data-doc="' + esc(c.zh) + '"><b lang="zh">' + esc(c.zh) + '</b> ' + esc(c.py) + ' — ' + esc(c.vn) + ' 🔊</button>' };
  };
  N.htmlNk.qtcam = function (e, ai) {
    var c = qt().camOn;
    return { hinh: 'ic-tim', chu: ai + ' cảm ơn em: <b lang="zh">' + esc(c.zh) + '</b> ' + esc(c.py) + ' — ' + esc(c.vn) + (e.tim ? ' · <b>+1 ❤</b>' : '') };
  };
  chamThem();
})();
