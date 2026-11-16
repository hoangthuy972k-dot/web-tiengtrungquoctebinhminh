/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Thue 税 shuì (2026-11-16, co giao: thue cho ho nhieu tai san / thu hoach nhieu).
   May chu tinh moi thu (nong-trai-thue.js); o day chi ve:
   - bang 'kt-thue' (⋯ Thêm → Thuế): uoc tinh tuan nay, bac thue, cach giam thue, lich su 4 tuan, Quy thi tran
   - the "🧾 Thuế tuần này" (1 lan sau khi chot thue), the gioi thieu lan dau (cap 10), the tro cap 补助
   - dong "🏛️ Quỹ thị trấn · Nhà hảo tâm" tren thi tran (NTX.veQuyTt, goi tu veCapThiTran)
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, goi = N.goi, bao = N.bao, S = N.S;
  var X = { d: null, luc: 0, hang: [], dang: false, daBao: {} };
  var so = function (n) { return Math.round(n || 0).toLocaleString('vi-VN'); };
  var tp = function (x) { return Number(x).toLocaleString('vi-VN'); };
  var pt = function (x) { return (Math.round(x * 1000) / 10).toLocaleString('vi-VN') + '%'; };
  function T() { return (S.cat && S.cat.THUE) || {}; }
  function tenNgan(t) { return window.NhanVat && NhanVat.tenNgan ? NhanVat.tenNgan(t || '') : (t || ''); }
  function laBang() { var b = N.bangDang(); return b && b.loai === 'kt-thue'; }
  function tai() { return goi('/api/farm/thue').then(function (r) { X.d = r; X.luc = Date.now(); chamThem(); return r; }); }
  var ZH = {
    shui: '<b lang="zh">税</b> shuì', ts: '<b lang="zh">财产税</b> cáichǎn shuì', tn: '<b lang="zh">所得税</b> suǒdé shuì', nop: '<b lang="zh">纳税</b> nàshuì',
    quy: '<b lang="zh">小镇基金</b> xiǎozhèn jījīn', tc: '<b lang="zh">补助</b> bǔzhù',
  };
  function conNgay(giay) { var g = Math.floor(giay / 3600); return g >= 24 ? Math.floor(g / 24) + ' ngày ' + (g % 24) + ' giờ' : N.conLai(giay * 1000); }
  function tuanVn(w) { if (!w) return ''; var p = w.split('-'); return p[2] + '/' + p[1]; }

  /* ---------------- hoa don ---------------- */
  function dongBac(ds) {
    return ds.map(function (b) {
      return '<tr><td>' + so(b.tu) + ' – ' + so(b.den) + '</td><td>× ' + pt(b.tl) + '</td><td>' + so(b.thue) + '</td></tr>';
    }).join('');
  }
  function htmlHoaDon(b, uoc) {
    var c = b.chiTiet || {}, h = '<div class="tx-hd">';
    h += '<section><h4>' + ZH.ts + ' · Thuế tài sản</h4>' +
      '<p class="tx-dong"><span>Xu' + (c.xu > (b.xu || 0) ? ' (cả xu treo ở bảng Cần mua)' : '') + '</span><b>' + so(c.xu) + '</b></p>' +
      '<p class="tx-dong"><span>Hàng trong kho, sạp, tiệm (×' + tp(T().HE_HANG || 0.8) + ' giá bán)</span><b>' + so(c.hang) + '</b></p>' +
      '<p class="tx-dong"><span>Vật nuôi, nhà, đồ trang trí, nhà máy, ruộng, đất (×' + tp(T().HE_TAI_SAN || 0.4) + ' giá mua)</span><b>' + so(c.co) + '</b></p>' +
      '<p class="tx-dong tx-tong"><span>Tài sản ước tính</span><b>' + so(b.ts) + '</b></p>' +
      '<p class="tx-dong tx-mien"><span>Mức miễn thuế (' + so(T().MIEN_CO_BAN) + ' + ' + so(T().MIEN_MOI_CAP) + ' × cấp ' + b.lv + ')</span><b>− ' + so(b.mien) + '</b></p>' +
      (b.bacTs.length ? '<p class="tx-dong"><span>Phần vượt mức miễn (chịu thuế)</span><b>' + so(b.ts - b.mien) + '</b></p><table class="tx-bang"><tbody>' + dongBac(b.bacTs) + '</tbody></table>' : '<p class="tx-ok">✓ Dưới mức miễn thuế — không có thuế tài sản.</p>') +
      '<p class="tx-dong tx-tong"><span>Thuế tài sản</span><b>' + so(b.tTs) + ' xu</b></p></section>';
    h += '<section><h4>' + ZH.tn + ' · Thuế thu nhập</h4>' +
      '<p class="tx-dong"><span>Xu bán hàng ' + (uoc ? 'tuần này (đến giờ)' : 'tuần ' + tuanVn(b.w)) + '</span><b>' + so(b.tn) + '</b></p>' +
      '<p class="tx-dong tx-mien"><span>Miễn thuế mỗi tuần</span><b>− ' + so(b.mienTn) + '</b></p>' +
      (b.bacTn.length ? '<p class="tx-dong"><span>Phần vượt mức miễn (chịu thuế)</span><b>' + so(b.tn - b.mienTn) + '</b></p><table class="tx-bang"><tbody>' + dongBac(b.bacTn) + '</tbody></table>' : '<p class="tx-ok">✓ Không có thuế thu nhập.</p>') +
      '<p class="tx-dong tx-tong"><span>Thuế thu nhập</span><b>' + so(b.tTn) + ' xu</b></p></section>';
    h += '<section class="tx-giam"><h4>📚 Giảm thuế vì học</h4>' +
      '<p class="tx-dong"><span>Tổng trước khi giảm</span><b>' + so(b.gop) + ' xu</b></p>' +
      '<p class="tx-dong"><span>' + b.ngay20 + ' ngày học từ ' + (T().SAO_NGAY || 20) + ' sao (−10%/ngày, tối đa −50%)</span><b>−' + pt(b.giamNgay) + '</b></p>' +
      '<p class="tx-dong"><span>Ôn “Hôm nay em ôn gì” ' + b.ngayOn + ' ngày (từ ' + (T().ON_NGAY || 4) + ' ngày: −20%)</span><b>−' + pt(b.giamOn) + '</b></p>' +
      '<p class="tx-dong tx-tong"><span>Sau khi giảm</span><b>' + so(b.sauGiam) + ' xu</b></p>' +
      (b.catTran ? '<p class="tx-nho">Trần: không quá 10% số xu em có (' + so(b.xu) + ' xu → tối đa ' + so(b.tran) + ' xu). Phần vượt được xoá, không ghi nợ.</p>' : '') +
      (b.sauGiam > 0 && b.thue === 0 ? '<p class="tx-nho">Dưới ' + (T().TOI_THIEU || 5) + ' xu thì được miễn.</p>' : '') + '</section>';
    h += '<p class="tx-cuoi"><span>' + ZH.nop + ' · ' + (uoc ? 'Ước tính phải đóng' : 'Đã đóng') + '</span><b>' + so(b.thue) + ' xu</b></p>';
    if (!uoc && b.thue > 0) h += '<p class="tx-di">🏛️ Góp vào Quỹ thị trấn' + (b.pham ? ' ' + esc(b.pham) : '') + ' → ' +
      (b.gach ? 'thuê thợ xây được <b>' + b.gach + ' viên gạch</b> cho công trình chung <span lang="zh">学堂</span> và trợ cấp bạn khó khăn.' : 'xây công trình chung <span lang="zh">学堂</span> và trợ cấp bạn khó khăn.') + '</p>';
    return h + '</div>';
  }

  /* ---------------- bang Thue ---------------- */
  N.dangKy('kt-thue', function (than, b) {
    $('#ntBangTit').textContent = '🧾 Thuế 税 shuì';
    if (!N.moTn('thue')) {
      N.datTab([], '');
      var tc0 = S.st && S.st.kt && S.st.kt.thue && S.st.kt.thue.tc;
      than.innerHTML = (tc0 ? '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tx-tc>🎁 Nhận trợ cấp 补助 +' + tc0.xu + ' xu</button></div>' : '') +
        N.htmlKhoaTn('thue') + '<p class="tx-nho tx-giua">Nông trại dưới cấp ' + (T().LV || 10) + ' không bao giờ phải đóng thuế.</p>';
      ganNut(than);
      return;
    }
    var tab = b.tab || 'uoc';
    b.tab = tab;
    N.datTab([['uoc', '🧾 Tuần này'], ['luat', '📐 Bậc thuế'], ['ls', '📜 Lịch sử'], ['quy', '🏛️ Quỹ thị trấn']], tab);
    if (!X.d) { than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; tai().then(function () { if (laBang()) N.veBang(); }, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; }); return; }
    if (Date.now() - X.luc > 10000) tai().then(function () { if (laBang()) N.veBang(); }, function () {});
    var r = X.d, html = N.htmlGt('thue');
    if (tab === 'uoc') {
      var u = r.uoc;
      html += '<div class="tx-dau"><span class="tx-chu" lang="zh" aria-hidden="true">税</span><div><b>Ước tính thuế tuần này</b>' +
        '<small>Nếu tuần kết thúc bây giờ · thuế thật chốt sau Chủ nhật (còn ' + conNgay(r.giayHetTuan || 0) + '), lúc em mở nông trại.</small></div></div>';
      html += u ? htmlHoaDon(u, true) : '<p class="tx-ok">✓ Nông trại em chưa phải đóng thuế.</p>';
      html += htmlCachGiam(u);
    } else if (tab === 'luat') html += htmlLuat();
    else if (tab === 'ls') html += htmlLs(r.ls);
    else html += htmlQuy(r);
    than.innerHTML = html;
    ganNut(than);
  });
  function htmlCachGiam(u) {
    var n = u ? u.ngay20 : 0, on = u ? u.ngayOn : 0;
    return '<div class="tx-meo"><h4>💡 Muốn đóng ít thuế hơn?</h4><ul>' +
      '<li>📚 Mỗi ngày học từ <b>' + (T().SAO_NGAY || 20) + ' sao</b>: −10% (tối đa −50%). Tuần này em đã có <b>' + n + '/5</b> ngày.</li>' +
      '<li>📅 Làm “Hôm nay em ôn gì” từ <b>' + (T().ON_NGAY || 4) + ' ngày</b>: −20% nữa. Tuần này: <b>' + on + '</b> ngày.</li>' +
      '<li>🧮 Thuế không bao giờ quá <b>10% số xu</b>, không lấy đồ, không ghi nợ.</li>' +
      '<li>🤝 Thuế không mất đi: vào Quỹ thị trấn để xây công trình chung và trợ cấp bạn khó khăn. Người đóng nhiều được vinh danh “Nhà hảo tâm của tuần”.</li></ul>' +
      '<div class="nt-hang-nut"><a class="nt-nut nt-nut-xanh" href="' + esc(N.moiBaiHoc()) + '">📚 Học kiếm sao</a></div></div>';
  }
  function htmlLuat() {
    var t = T(), lv = N.capEm();
    // bang bac thue theo so tuyet doi (tu 0): phan duoi muc mien = 0%, roi tung bac
    var bac = function (ds, mien, dv) {
      var tu = mien;
      return '<table class="tx-bang tx-luat"><thead><tr><th>' + dv + '</th><th>Thuế suất</th></tr></thead><tbody>' +
        '<tr><td>0 – ' + so(mien) + '</td><td>0% (miễn)</td></tr>' +
        ds.map(function (b) { var den = b[0] ? tu + b[0] : 0, s = '<tr><td>' + (b[0] ? so(tu) + ' – ' + so(den) : 'trên ' + so(tu)) + '</td><td>' + pt(b[1]) + ' phần này</td></tr>'; tu = den; return s; }).join('') + '</tbody></table>';
    };
    return '<div class="tx-luat-hop"><h4>' + ZH.ts + ' · Thuế tài sản (mỗi tuần)</h4>' +
      '<p class="tx-nho">Mức miễn = ' + so(t.MIEN_CO_BAN) + ' + ' + so(t.MIEN_MOI_CAP) + ' × cấp. Cấp ' + lv + ' của em: miễn <b>' + so(t.MIEN_CO_BAN + t.MIEN_MOI_CAP * lv) + ' xu</b> tài sản.</p>' +
      bac(t.BAC_TS || [], t.MIEN_CO_BAN + t.MIEN_MOI_CAP * lv, 'Tài sản (cấp ' + lv + ')') +
      '<p class="tx-nho">Tài sản = xu + hàng trong kho/sạp/tiệm × ' + tp(t.HE_HANG) + ' giá bán + vật nuôi, nhà, trang trí, nhà máy, ruộng, đất × ' + tp(t.HE_TAI_SAN) + ' giá mua (đồ mua bằng sao: 1 sao = ' + t.XU_SAO + ' xu). Cúp, quà độc quyền không tính.</p>' +
      '<h4>' + ZH.tn + ' · Thuế thu nhập (mỗi tuần)</h4>' + bac(t.BAC_TN || [], t.MIEN_TN, 'Xu bán hàng / tuần') +
      '<p class="tx-nho">Chỉ tính xu <b>bán hàng</b>: cửa hàng, chợ, thương lái, tiệm, sạp, đơn hàng, nhà hàng, xuất khẩu, đấu giá. Rương sao, đổi sao, quà, thưởng học tập <b>không</b> tính.</p>' +
      '<h4>Luật bảo vệ</h4><ul class="tx-ul"><li>Cấp dưới ' + t.LV + ': không bao giờ đóng thuế.</li><li>Tối đa ' + pt(t.TRAN) + ' số xu đang có, không bao giờ âm xu, không lấy đồ.</li>' +
      '<li>Thiếu xu thì phần còn lại được xoá — không ghi nợ.</li><li>Dưới ' + t.TOI_THIEU + ' xu: miễn.</li><li>Chỉ tính 1 tuần gần nhất; tuần em không mở nông trại không truy thu.</li></ul></div>';
  }
  function htmlLs(ls) {
    if (!ls || !ls.length) return '<p class="nt-trong">Chưa có hoá đơn thuế nào. Hoá đơn đầu tiên đến sau khi hết một tuần trọn vẹn.</p>';
    return ls.map(function (b, i) {
      return '<details class="tx-ls"' + (i === 0 ? ' open' : '') + '><summary><span>Tuần ' + tuanVn(b.w) + '</span><b>' + (b.thue ? so(b.thue) + ' xu' : 'miễn thuế') + '</b>' +
        (b.giam ? '<small>giảm ' + pt(b.giam) + ' nhờ học</small>' : '') + '</summary>' + htmlHoaDon(b, false) + '</details>';
    }).join('');
  }
  function htmlQuy(r) {
    var q = r.quy || {}, h = '<div class="tx-quy"><div class="tx-quy-so"><span aria-hidden="true">🏛️</span><div><small>' + ZH.quy + ' · Quỹ thị trấn ' + esc((r.pham && r.pham.ten) || '') + '</small><b>' + so(q.du) + ' xu</b></div></div>' +
      '<p class="tx-nho">Đã thu tổng cộng <b>' + so(q.tong) + ' xu</b> · thuê thợ xây <b>' + so(q.gachTong) + ' viên gạch</b> cho công trình chung · trợ cấp <b>' + so(q.tcTong) + ' xu</b>.</p>';
    if (q.tuan) h += '<p class="tx-nho">Tuần này: ' + q.tuan.so + ' bạn nộp thuế, ' + so(q.tuan.thu) + ' xu' + (q.tuan.gach ? ', xây ' + q.tuan.gach + ' viên gạch' : '') + '.</p>';
    h += '<h4>🏛️ Nhà hảo tâm của ' + (q.haoTuan === 'truoc' ? 'tuần trước' : 'tuần') + '</h4>' + htmlHao(q.hao, true);
    h += '<h4>' + ZH.tc + ' · Trợ cấp tuần này</h4>' + (q.tc && q.tc.length ? '<ul class="tx-tc">' + q.tc.map(function (x) {
      return '<li class="' + (x.la ? 'la' : '') + '"><span>' + esc(tenNgan(x.ten)) + (x.la ? ' (em)' : '') + '</span><b>+' + x.xu + ' xu</b>' + (x.nhan ? '<small>đã nhận</small>' : '') + '</li>';
    }).join('') + '</ul>' : '<p class="tx-nho">Chưa có trợ cấp tuần này (quỹ cần đủ ' + (T().TC_MIN || 20) + ' xu).</p>');
    var em = (q.tc || []).filter(function (x) { return x.la && !x.nhan; })[0];
    if (em) h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tx-tc>🎁 Nhận trợ cấp +' + em.xu + ' xu</button></div>';
    h += '<p class="tx-nho">Mỗi tuần quỹ trợ cấp ' + (T().TC_MIN || 20) + '–' + (T().TC_MAX || 50) + ' xu cho ' + (T().TC_SO || 5) + ' bạn có tài sản thấp nhất mà tuần trước học từ ' + (T().TC_NGAY_HOC || 3) + ' ngày. ' +
      pt(T().CT_PHAN || 0.6) + ' tiền thuế thuê thợ xây công trình chung (' + (T().XU_GACH || 10) + ' xu = 1 viên gạch, tối đa một nửa số gạch — phần còn lại cả lớp góp bằng câu hỏi).</p></div>';
    return h;
  }
  function htmlHao(hao, to) {
    if (!hao || !hao.length) return '<p class="tx-nho">Chưa có ai nộp thuế.</p>';
    var huy = ['🥇', '🥈', '🥉'];
    return '<ol class="tx-hao' + (to ? ' to' : '') + '">' + hao.map(function (x, i) {
      return '<li class="' + (x.la ? 'la' : '') + '">' + huy[i] + ' <b>' + esc(tenNgan(x.ten)) + '</b>' + (to ? ' <small>' + so(x.n) + ' xu</small>' : '') + '</li>';
    }).join('') + '</ol>';
  }
  function ganNut(than) {
    var b = $('[data-tx-tc]', than);
    if (b) b.addEventListener('click', function () { nhanTc(b); });
  }
  function nhanTc(nut) {
    if (nut) nut.disabled = true;
    return goi('/api/farm/thuongtt/nhan', { loai: 'trocap' }).then(function (r) {
      if (r.st) N.nhanTrangThai(r.st);
      N.tieng('len');
      bao('🎁 Trợ cấp 补助 +' + r.xu + ' xu từ Quỹ thị trấn!');
      tai().then(function () { if (laBang()) N.veBang(); }, function () {});
      return r;
    }, function (e) { if (nut) nut.disabled = false; bao(e.message, 'loi'); throw e; });
  }

  /* ---------------- the hien 1 lan (xep hang, cho man hinh ranh) ---------------- */
  function banRanh() {
    return $('#ntLop').hidden && $('#ntHoi').hidden && $('#ntThem').hidden && !S.tham && !document.querySelector('.cd-lop') &&
      !document.body.classList.contains('co-bang') && $('#ntThiTran').hidden && $('#ntHoCau').hidden;
  }
  function xep(loai, fn) {
    if (X.daBao[loai]) return;
    X.daBao[loai] = 1;
    X.hang.push(fn);
    if (!X.dang) chay();
  }
  function chay() {
    X.dang = true;
    var ranh = 0;
    var tiep = function () {
      ranh = banRanh() ? ranh + 1 : 0;
      if (ranh < 2) { setTimeout(tiep, 1200); return; }
      var fn = X.hang.shift();
      if (!fn) { X.dang = false; return; }
      fn(function () { N.dongBang(); ranh = 0; setTimeout(tiep, 400); });
    };
    setTimeout(tiep, 1500);
  }
  function daXemGt() { try { return localStorage.getItem('hyv_nt_gt_thue') === '1'; } catch (e) { return true; } }
  function ghiGt() { try { localStorage.setItem('hyv_nt_gt_thue', '1'); } catch (e) { /* bo qua */ } }
  function theGioiThieu(xong) {
    var t = T();
    N.moBangNho('<div class="nt-chuc tx-the"><span class="tx-the-nhan">🧾 Tính năng mới · cấp ' + (t.LV || 10) + '</span><h2>' + ZH.shui + ' · Thuế nông trại</h2>' +
      '<p>Nông trại lớn đóng một khoản thuế nhỏ mỗi tuần để cùng xây thị trấn:</p><ul class="tx-ul">' +
      '<li>' + ZH.ts + ': khi tài sản vượt <b>' + so(t.MIEN_CO_BAN) + ' + ' + so(t.MIEN_MOI_CAP) + ' × cấp</b>.</li>' +
      '<li>' + ZH.tn + ': khi bán hàng hơn <b>' + so(t.MIEN_TN) + ' xu/tuần</b>.</li>' +
      '<li>📚 Mỗi ngày học từ ' + t.SAO_NGAY + ' sao: <b>−10%</b> (tối đa −50%); ôn “Hôm nay em ôn gì” từ ' + t.ON_NGAY + ' ngày: <b>−20%</b> nữa.</li>' +
      '<li>🛡 Không quá 10% số xu, không lấy đồ, không ghi nợ.</li>' +
      '<li>🏛️ Tiền thuế vào <b>Quỹ thị trấn</b>: xây công trình chung và trợ cấp bạn khó khăn.</li></ul>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-tx="xem">Xem bảng thuế</button><button type="button" class="nt-nut" data-tx="ok">Đã hiểu</button></div></div>');
    ghiGt();
    $('#ntBangThan [data-tx="ok"]').addEventListener('click', xong);
    $('#ntBangThan [data-tx="xem"]').addEventListener('click', function () { X.hang = []; X.dang = false; N.moBang('kt-thue', 'luat'); });
  }
  function theHoaDon(b) {
    return function (xong) {
      var mien = b.thue === 0;
      N.tieng(mien ? 'len' : 'mua');
      N.moBangNho('<div class="nt-chuc tx-the"><span class="tx-the-nhan">🧾 Thuế tuần này · ' + ZH.nop + '</span>' +
        '<h2>' + (mien ? '🎉 Em được miễn thuế tuần ' + tuanVn(b.w) + '!' : 'Hoá đơn thuế tuần ' + tuanVn(b.w)) + '</h2>' +
        '<div class="tx-the-tom"><p><span>Tài sản ước tính</span><b>' + so(b.ts) + '</b></p><p><span>Mức miễn thuế</span><b>' + so(b.mien) + '</b></p>' +
        '<p><span>' + ZH.ts + '</span><b>' + so(b.tTs) + '</b></p><p><span>' + ZH.tn + ' (bán ' + so(b.tn) + ' xu)</span><b>' + so(b.tTn) + '</b></p>' +
        '<p><span>📚 Giảm vì học (' + b.ngay20 + ' ngày ≥' + (T().SAO_NGAY || 20) + ' sao' + (b.giamOn ? ', ôn ' + b.ngayOn + ' ngày' : '') + ')</span><b>−' + pt(b.giam) + '</b></p>' +
        (b.catTran ? '<p><span>Trần 10% xu</span><b>≤ ' + so(b.tran) + '</b></p>' : '') +
        '<p class="tx-cuoi"><span>Thuế đã đóng</span><b>' + so(b.thue) + ' xu</b></p></div>' +
        (mien ? '<p>Học chăm nên được giảm hết — giỏi lắm! 加油！</p>' : '<p class="tx-di">🏛️ Đã góp vào Quỹ thị trấn' + (b.gach ? ' → thuê thợ xây <b>' + b.gach + ' viên gạch</b> cho <span lang="zh">学堂</span>' : ' → xây <span lang="zh">学堂</span>') + ' và trợ cấp bạn khó khăn. Cảm ơn em! 谢谢！</p>' +
          (b.giam < 0.7 ? '<p class="tx-nho">Tuần sau học mỗi ngày ' + (T().SAO_NGAY || 20) + ' sao để được giảm đến 70% nhé.</p>' : '')) +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-tx="ok">Đã hiểu 明白了</button><button type="button" class="nt-nut" data-tx="ct">Xem chi tiết</button></div></div>');
      N.doc(mien ? '加油' : '纳税');
      var ghiXem = function () { return goi('/api/farm/thue/xem', {}).catch(function () {}); };
      $('#ntBangThan [data-tx="ok"]').addEventListener('click', function () { ghiXem(); xong(); });
      $('#ntBangThan [data-tx="ct"]').addEventListener('click', function () { ghiXem(); X.hang = []; X.dang = false; X.d = null; N.moBang('kt-thue', 'ls'); });
    };
  }
  function theTroCap(tc) {
    return function (xong) {
      var con = S.st && S.st.kt && S.st.kt.thue && S.st.kt.thue.tc;
      if (!con) { xong(); return; } // da nhan o Phan thuong thi tran
      N.tieng('len');
      N.moBangNho('<div class="nt-chuc tx-the"><span class="tx-the-nhan">🎁 ' + ZH.tc + ' · Quỹ thị trấn</span><h2>Em được trợ cấp tuần này!</h2>' +
        '<div class="tx-the-qua"><b>+' + tc.xu + ' xu</b><small>từ tiền thuế các bạn nông trại lớn đóng góp</small></div>' +
        '<p>Trợ cấp dành cho bạn đang ít tài sản mà vẫn học đều. Cố lên nhé! 加油！</p>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-tx="nhan">Nhận +' + tc.xu + ' xu</button><button type="button" class="nt-nut" data-tx="sau">Để sau</button></div></div>');
      var b1 = $('#ntBangThan [data-tx="nhan"]');
      b1.addEventListener('click', function () { nhanTc(b1).then(xong, function () { xong(); }); });
      $('#ntBangThan [data-tx="sau"]').addEventListener('click', function () { bao('Trợ cấp vẫn chờ em ở Thị trấn → 🎁 Phần thưởng thị trấn.'); xong(); });
    };
  }
  N.sau.push(function (st) {
    var t = st && st.kt && st.kt.thue;
    chamThem();
    if (!t) return;
    if (t.mo && !daXemGt()) xep('gt', theGioiThieu);
    if (t.moi) xep('hd' + t.moi.w, theHoaDon(t.moi));
    if (t.tc) xep('tc' + t.tc.w, theTroCap(t.tc));
  });
  function chamThem() {
    var st = S.st, t = st && st.kt && st.kt.thue, c = $('#ntThueCham'), p = $('#ntThuePhu');
    if (c) c.hidden = !(t && (t.moi || t.tc));
    if (p) p.textContent = t && t.tc ? 'em có trợ cấp ' + t.tc.xu + ' xu — nhận nhé!'
      : !t || !t.mo ? 'mở ở cấp ' + (T().LV || 10) + ' · cấp thấp không đóng thuế'
      : X.d && X.d.uoc ? 'ước tính tuần này: ' + so(X.d.uoc.thue) + ' xu' : 'tài sản · thu nhập · Quỹ thị trấn';
  }

  /* ---------------- thi tran: Quy thi tran + Nha hao tam ---------------- */
  N.veQuyTt = function (r) {
    var dh = $('#ntTtDh');
    if (!dh) return;
    var el = $('#ntTtQuy');
    if (!el) { el = document.createElement('p'); el.id = 'ntTtQuy'; el.className = 'tx-tt'; dh.insertAdjacentElement('afterend', el); }
    var q = r && r.quy;
    if (!q || (!q.tong && !(q.hao || []).length)) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = '<' + (r.cuaEm ? 'button type="button" data-tx-quy' : 'span') + ' class="tx-tt-quy">🏛️ Quỹ thị trấn <b>' + so(q.du) + ' xu</b>' +
      (q.gachTong ? ' · ' + so(q.gachTong) + ' gạch' : '') + '</' + (r.cuaEm ? 'button' : 'span') + '>' +
      ((q.hao || []).length ? '<span class="tx-tt-hao" title="Nhà hảo tâm của tuần — nộp thuế nhiều nhất">Nhà hảo tâm: ' + q.hao.map(function (x, i) { return ['🥇', '🥈', '🥉'][i] + ' ' + esc(tenNgan(x.ten)); }).join(' ') + '</span>' : '');
    var b = $('[data-tx-quy]', el);
    if (b) b.addEventListener('click', function () { N.dongThiTran(); X.d = null; N.moBang('kt-thue', 'quy'); });
  };

  /* ---------------- nhat ky ---------------- */
  N.htmlNk.thue = function (e) { return { hinh: 'ic-xu', chu: '🧾 Em đã nộp thuế tuần ' + tuanVn(e.w) + ': <b>' + so(e.xu) + ' xu</b> vào Quỹ thị trấn · <b lang="zh">纳税</b> nàshuì' }; };
  N.htmlNk.trocap = function () { return { hinh: 'ic-xu', chu: '🎁 Em nhận trợ cấp <b lang="zh">补助</b> bǔzhù từ Quỹ thị trấn.' }; };
  chamThem();
})();
