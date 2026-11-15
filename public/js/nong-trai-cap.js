/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — cap do 1–100 (2026-11-15, co giao: "them level, level cao kho hon va nhieu dieu thu vi hon"):
   · bang "🏅 Cấp độ & phần thưởng" (cap-capdo): danh hieu hien tai, 10 cap toi (mo khoa + thuong), cac bac, moc cap cao
   · the chuc mung len cap / len bac (thuong may chu da tra 1 lan — S.st.capMoi), gui 'capxem' khi em xem xong
   · bang "🌟 Hoạt động cấp cao" (cap-hd): nha kinh, nhiem vu chuyen gia, le hoi nong trai, kem hoc tro
   · khach sang du le hoi (nut tren thanh tham), co le hoi tren nong trai, nhat ky (htmlNk)
   May chu tinh moi thu (nong-trai.js + nong-trai-capcao.js); o day chi ve bang va gui hanh dong.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, img = N.img, goi = N.goi, bao = N.bao, S = N.S;
  function loiGoi(err) { bao(err.message, 'loi'); N.tieng('sai'); }
  function laBang(l) { var b = N.bangDang(); return b && b.loai === l; }
  function veLai(l) { if (laBang(l)) N.veBang(); }
  function bacM(i) { return (S.cat.BAC || [])[i] || { ic: '', zh: '', py: '', vn: '' }; }
  function soGon(n) { return N.soGon ? N.soGon(n) : String(n); }
  function tenHat(k) { var c = (S.cat.CAY || {})[k] || {}; return 'hạt ' + (c.vn || k).toLowerCase(); }
  function tenTt(k) { var m = (S.cat.TT || {})[k] || {}; return m.vn || k; }

  /* ================= cau hoi chung (may chu cham) — giong nong-trai-kt.js =================
     o.ds: cau { k, hoi, lua }; o.url; o.them(i): truong gui kem (id, i); o.sau(r, i) -> true = ket thuc; o.xong(r) */
  function chayCau(than, o) {
    var i = o.i || 0, khoa = false;
    function ve() {
      var q = o.ds[i];
      if (!q) return;
      var h = q.hoi || {};
      than.innerHTML = (o.tren || '') + '<div class="kt-cau"><p class="kt-cau-so">Câu ' + (i + 1) + '/' + o.ds.length + ' · <b>' + esc(h.lenh || '') + '</b></p>' +
        N.htmlKt(q, 'cc') + '<div class="kt-cau-kq" aria-live="polite"></div></div>';
      N.ganKt(than, q, 'cc', gui);
    }
    function gui(b, chon) {
      if (khoa) return;
      khoa = true;
      var q = o.ds[i];
      goi(o.url, Object.assign({}, o.them ? o.them(i) : {}, b)).then(function (r) {
        N.danhDauKt(than, q, r, chon, 'cc');
        N.tieng(r.dung ? 'dung' : 'sai');
        N.docKt(r);
        var kq = $('.kt-cau-kq', than);
        var het = o.sau(r, i) || i + 1 >= o.ds.length;
        kq.innerHTML = '<p class="kt-cau-dg ' + (r.dung ? 'dung' : 'sai') + '">' + (r.dung ? '✔ Đúng rồi!' : '✘ Chưa đúng') + '</p>' + N.giaiKt(r, q) +
          (het ? '' : '<button type="button" class="nt-nut nt-nut-xanh" data-cc-tiep>Câu tiếp →</button>');
        var t = $('[data-cc-tiep]', kq);
        if (t) t.addEventListener('click', function () { i++; khoa = false; ve(); });
        else if (o.xong) setTimeout(function () { o.xong(r); }, r.dung ? 1000 : 2400);
      }, function (err) { khoa = false; N.moLaiKt(than, q); loiGoi(err); });
    }
    ve();
  }

  /* ================= the danh hieu (khung theo bac) ================= */
  function theBac(lv, xp, xpLv, xpSau, lvMax) {
    var b = N.bacCua(lv), m = bacM(b), sau = bacM(b + 1), max = lv >= (lvMax || 100);
    var tile = xpSau > xpLv ? Math.max(0, Math.min(1, (xp - xpLv) / (xpSau - xpLv))) : 1;
    return '<div class="cap-the b' + b + '"><span class="cap-the-ic" aria-hidden="true">' + m.ic + '</span>' +
      '<div class="cap-the-chu"><button type="button" class="cap-the-ten" data-doc="' + esc(m.zh) + '"><b lang="zh">' + esc(m.zh) + '</b> <small>' + esc(m.py) + '</small></button>' +
      '<span class="cap-the-vn">' + esc(m.vn) + ' · <b>Cấp ' + lv + '</b>' + (max ? ' · cấp cao nhất!' : '') + '</span>' +
      '<span class="cap-thanh"><i style="width:' + Math.round(tile * 100) + '%"></i></span>' +
      '<small class="cap-the-con">' + (max ? 'Em đã là Huyền thoại 传奇 — cấp 100!' : 'Còn thiếu <b>' + soGon(Math.max(0, xpSau - xp)) + '</b> kinh nghiệm lên cấp ' + (lv + 1) +
        (sau.tu && b + 1 < (S.cat.BAC || []).length ? ' · danh hiệu kế tiếp <b>' + esc(sau.vn) + '</b> ở cấp ' + sau.tu : '')) + '</small></div></div>';
  }

  /* ================= bang Cap do & phan thuong ================= */
  var CD = { d: null, tai: false };
  function taiCd(ep) {
    if (CD.tai || (CD.d && !ep && CD.d.lv === S.st.lv)) return;
    CD.tai = true;
    goi('/api/farm/capdo').then(function (r) { CD.tai = false; CD.d = r; veLai('cap-capdo'); }, function (e) { CD.tai = false; loiGoi(e); });
  }
  var LOAI_MO = { cay: '🌱 Cây', con: '🐾 Vật nuôi', tt: '🎀 Trang trí', moc: '🏛 Công trình mốc', xuong: '🏭 Nhà máy', ct: '🍳 Công thức', mon: '🍜 Món ăn', tn: '✨ Tính năng', dat: '🗺️ Đất', nha: '🏠 Nhà', bac: '🏅 Danh hiệu', kho: '🧠 Câu hỏi' };
  function htmlMo(x) {
    if (x.loai === 'tn') return '<li class="cap-mo tn"><span class="cap-mo-ic" aria-hidden="true">✨</span><span><b>' + esc(x.vn) + '</b> <span lang="zh">' + esc(x.zh) + '</span><small>Tính năng mới</small></span></li>';
    if (x.loai === 'kho') return '<li class="cap-mo kho"><span class="cap-mo-ic" aria-hidden="true">🧠</span><span>' + esc(x.vn) + '</span></li>';
    if (x.loai === 'bac') return '<li class="cap-mo bac"><span class="cap-mo-ic" aria-hidden="true">' + esc(x.ic) + '</span><span><b>Danh hiệu ' + esc(x.vn) + '</b> <span lang="zh">' + esc(x.zh) + '</span><small>' + esc(x.py) + '</small></span></li>';
    var gia = x.sao ? ' · ⭐ ' + x.sao : x.xu ? ' · 🪙 ' + soGon(x.xu) : '';
    return '<li class="cap-mo"><span class="cap-mo-hinh">' + (x.hinh ? img(x.hinh) : '<span aria-hidden="true">🗺️</span>') + '</span><span><b lang="zh">' + esc(x.zh || '') + '</b> ' + esc(x.vn) +
      '<small>' + (LOAI_MO[x.loai] || '') + gia + (x.dep ? ' · đẹp +' + x.dep : '') + '</small></span></li>';
  }
  function htmlThuong(t) {
    if (!t) return '';
    return '<p class="cap-thuong">🎁 <b>' + t.xu + ' xu</b> · 2 ' + esc(tenHat(t.hat.k)) + (t.quy ? ' · <b>1 hạt quý</b> 🎟' : '') + (t.bac ? ' · <b>biển danh hiệu</b> ' + esc(bacM(t.bac).ic) : '') + '</p>';
  }
  function veCapDo(than) {
    $('#ntBangTit').textContent = '🏅 Cấp độ & phần thưởng';
    var b = N.bangDang(), tab = b.tab || 'sap';
    N.datTab([['sap', '10 cấp tới'], ['bac', 'Danh hiệu'], ['moc', 'Mốc cấp cao'], ['cach', 'Lên cấp thế nào?']], tab);
    var s = S.st, html = theBac(s.lv, s.xp, s.xpLv, s.xpSau, s.lvMax);
    taiCd();
    var d = CD.d;
    if (!d) { than.innerHTML = html + '<p class="nt-trong">Đang tải…</p>'; return; }
    if (tab === 'sap') {
      var ds = d.ds.filter(function (x) { return x.lv > s.lv && x.lv <= s.lv + 10; });
      html += ds.length ? '<ol class="cap-ds">' + ds.map(function (x) {
        var mo = x.mo || [];
        return '<li class="cap-cap' + (x.thuong && x.thuong.bac ? ' doi-bac' : '') + (d.moc.indexOf(x.lv) >= 0 ? ' moc' : '') + '"><div class="cap-cap-dau"><span class="cap-so">' + x.lv + '</span>' +
          '<span><b>Cấp ' + x.lv + '</b><small>cần tổng ' + soGon(x.xp) + ' kinh nghiệm (+' + soGon(x.buoc) + ') · còn ' + soGon(Math.max(0, x.xp - s.xp)) + '</small></span></div>' +
          htmlThuong(x.thuong) + (mo.length ? '<ul class="cap-mo-ds">' + mo.map(htmlMo).join('') + '</ul>' : '<p class="cap-trong">Không có món mới — nhận thưởng lên cấp.</p>') + '</li>';
      }).join('') + '</ol>' : '<p class="nt-trong">Em đã đạt cấp cao nhất 100 — Huyền thoại nông trại! 🐉</p>';
    } else if (tab === 'bac') {
      var B = S.cat.BAC || [], bEm = N.bacCua(s.lv);
      html += '<ul class="cap-bac-ds">' + B.map(function (m, i) {
        var tt = i ? 'bac-' + i : '', trang = i < bEm ? 'da' : i === bEm ? 'dang' : 'chua', dk = (S.cat.DO_KHO || [])[i] || {};
        return '<li class="cap-bac b' + i + ' ' + trang + '"><span class="cap-bac-ic" aria-hidden="true">' + m.ic + '</span><div><b lang="zh">' + esc(m.zh) + '</b> <small>' + esc(m.py) + '</small>' +
          '<span>' + esc(m.vn) + ' · cấp ' + m.tu + '–' + m.den + (trang === 'dang' ? ' · <em>em đang ở đây</em>' : trang === 'da' ? ' · ✓' : '') + '</span>' +
          '<small class="cap-bac-kho">' + (i ? 'Lên bậc: +' + ((S.cat.XU_BAC || 10) * m.tu) + ' xu + biển danh hiệu. ' : '') + 'Câu hỏi: ' + (dk.lua || 4) + ' lựa chọn' + (dk.py ? '' : ', không pinyin') + (dk.np ? ', +' + dk.np + ' câu ngữ pháp/xếp câu' : '') + ', hộp quà ' + (dk.chDat || 8) + '/10.</small></div>' +
          (tt ? img(tt, 'cap-bac-bien') : '') + '</li>';
      }).join('') + '</ul>';
    } else if (tab === 'moc') {
      var cao = d.ds.filter(function (x) { return x.lv > 30 && (x.mo || []).some(function (m) { return m.loai !== 'kho'; }); });
      html += '<p class="kt-mk-dau">Từ cấp 31 mỗi cấp cần nhiều kinh nghiệm hơn hẳn — nhưng mở ra cây, vật nuôi, nhà máy, công trình mốc và tính năng mới.</p><div class="cap-luoi">' +
        cao.map(function (x) {
          return '<div class="cap-o' + (x.lv <= s.lv ? ' da' : '') + (d.moc.indexOf(x.lv) >= 0 ? ' moc' : '') + '"><b class="cap-so">' + x.lv + '</b>' +
            x.mo.filter(function (m) { return m.loai !== 'kho'; }).map(function (m) { return m.hinh ? img(m.hinh) : '<span class="cap-o-tn">' + (m.loai === 'bac' ? m.ic : '✨') + '</span>'; }).join('') +
            '<small>' + esc(x.mo.filter(function (m) { return m.loai !== 'kho'; }).map(function (m) { return m.vn; }).join(' · ')) + '</small></div>';
        }).join('') + '</div>';
    } else {
      html += '<div class="cap-cach"><h3 class="kt-h3">Kinh nghiệm đến từ đâu?</h3><ul>' +
        '<li>🌾 Thu hoạch, nhặt sản phẩm vật nuôi, giao đơn, nấu món, chạy nhà máy.</li>' +
        '<li>💧 Tưới nước, cho vật nuôi ăn bằng câu hỏi — học càng nhiều, chăm càng nhanh.</li>' +
        '<li>📚 Mở rương học tập, thử thách chữ Hán, câu cá, bản đồ phiêu lưu, nhiệm vụ chuyên gia.</li></ul>' +
        '<h3 class="kt-h3">Cấp cao khó hơn thế nào?</h3><ul>' +
        '<li>📈 Cấp 1–30 giữ như cũ. Từ cấp 31, mỗi cấp cần nhiều kinh nghiệm hơn hẳn (cấp 45 cần +' + soGon(d.ds[44].buoc) + ', cấp 60 +' + soGon(d.ds[59].buoc) + ', cấp 100 +' + soGon(d.ds[99].buoc) + ').</li>' +
        '<li>🧠 Câu hỏi vẫn chỉ từ bài em đã học, nhưng nhiều lựa chọn hơn, ít pinyin hơn, nhiều câu ngữ pháp / xếp câu hơn, đồng hồ câu cá ngắn hơn.</li>' +
        '<li>📋 Nhiệm vụ hằng ngày có mục tiêu lớn hơn và thưởng lớn hơn.</li>' +
        '<li>🌪️ Thiên tai ở cấp cao mạnh hơn một chút — nhưng học đủ 30 sao là khiên 🛡 chặn hết, chống xong được nhiều xu hơn.</li>' +
        '<li>💰 Hạn mức bán mỗi ngày vẫn tính theo sao học, cấp trên 30 được thêm 1% mỗi cấp (tối đa ×1,7).</li></ul>' +
        '<h3 class="kt-h3">Thưởng lên cấp</h3><p>Mỗi cấp: xu + 2 hạt giống cây tốt nhất em trồng được. Cấp 35, 40, 50, 60, 70, 80, 90, 100: thêm 1 hạt quý. Lên danh hiệu mới: thêm xu và một biển danh hiệu độc quyền.</p></div>';
    }
    than.innerHTML = html;
    $all('[data-doc]', than).forEach(function (x) { x.addEventListener('click', function () { N.doc(x.getAttribute('data-doc')); }); });
  }
  N.dangKy('cap-capdo', veCapDo);

  /* ================= the chuc mung len cap / len bac ================= */
  var daHien = 0, dangHien = false;
  // em da xem the (bam nut hoac dong bang bang ✕): bao may chu xoa danh sach thuong chua xem
  function xemXong() {
    if (!dangHien) return;
    dangHien = false;
    goi('/api/farm/act', { a: 'capxem' }).then(function (r) { if (r.st) N.nhanTrangThai(r.st); }, function () {});
  }
  function moKhoaCap(n) {
    var moi = [];
    ['CAY', 'CON', 'TT'].forEach(function (nh) {
      Object.keys(S.cat[nh]).forEach(function (k) { var m = S.cat[nh][k]; if (m.lv === n && !m.hiem && (!m.doc || m.moc)) moi.push({ k: nh === 'CAY' ? 'sp-' + k : k, vn: m.vn }); });
    });
    var XG = S.cat.XG || {};
    Object.keys(XG.XUONG || {}).forEach(function (k) { if (XG.XUONG[k].lv === n) moi.push({ k: 'xg-' + k, vn: XG.XUONG[k].vn }); });
    Object.keys(XG.HANG_GC || {}).forEach(function (k) { if (XG.HANG_GC[k].lv === n) moi.push({ k: 'sp-' + k, vn: XG.HANG_GC[k].vn }); });
    return moi;
  }
  function hienChucMung(ep) {
    var ds = (S.st && S.st.capMoi) || [];
    if (!ds.length || dangHien) return false;
    var cuoi = ds[ds.length - 1].lv;
    if (!ep && cuoi <= daHien) return false;
    dangHien = true; daHien = Math.max(daHien, cuoi);
    var lvMoi = ds.filter(function (e) { return !e.cu; }), xu = 0, hat = {}, quy = 0, bacMoi = null, bien = [], mo = [];
    ds.forEach(function (e) {
      if (e.xu) xu += e.xu;
      if (e.hat) hat[e.hat.k] = (hat[e.hat.k] || 0) + e.hat.n;
      if (e.quy) quy++;
      if (e.bac) { bien.push(e.tt); if (!e.cu) bacMoi = e.bac; }
      if (!e.cu) mo = mo.concat(moKhoaCap(e.lv));
    });
    var nMax = lvMoi.length ? lvMoi[lvMoi.length - 1].lv : S.st.lv, m = bacMoi != null ? bacM(bacMoi) : null;
    var tn = Object.keys(S.cat.MO_TN || {}).filter(function (k) { var t = S.cat.MO_TN[k]; return lvMoi.some(function (e) { return e.lv === t.lv; }); }).map(function (k) {
      var t = S.cat.MO_TN[k];
      return '<div class="nt-gt"><b>✨ Tính năng mới: ' + esc(t.vn) + ' <span lang="zh">' + esc(t.zh) + '</span></b><p>' + esc(t.gt) + '</p></div>';
    }).join('');
    var html = '<div class="nt-chuc cap-chuc' + (m ? ' cap-chuc-bac b' + bacMoi : '') + '">' +
      (m ? '<span class="cap-chuc-ic" aria-hidden="true">' + m.ic + '</span><p class="cap-chuc-nho">Danh hiệu mới!</p><h2 lang="zh">' + esc(m.zh) + '</h2><p class="cap-chuc-py">' + esc(m.py) + ' · <b>' + esc(m.vn) + '</b></p>'
        : lvMoi.length ? img('ic-xp') + '<h2>Lên cấp ' + nMax + '!</h2>' : '<span class="cap-chuc-ic" aria-hidden="true">🏅</span><h2>Biển danh hiệu của em</h2>') +
      (lvMoi.length > 1 ? '<p>Em vừa lên ' + lvMoi.length + ' cấp (' + lvMoi[0].lv + ' → ' + nMax + ')!</p>' : '') +
      '<ul class="cap-chuc-qua">' + (xu ? '<li>' + img('ic-xu') + '<b>+' + xu + ' xu</b></li>' : '') +
      Object.keys(hat).map(function (k) { return '<li>' + img('sp-' + k) + '<b>+' + hat[k] + '</b> ' + esc(tenHat(k)) + '</li>'; }).join('') +
      (quy ? '<li>' + img('sp-nhansam') + '<b>+' + quy + ' hạt quý</b></li>' : '') +
      bien.map(function (k) { return '<li>' + img(k) + '<span>' + esc(tenTt(k)) + ' <small>(vào túi đồ)</small></span></li>'; }).join('') + '</ul>' +
      (mo.length ? '<p class="cap-chuc-mo">Mở khoá: <b>' + esc(mo.slice(0, 8).map(function (x) { return x.vn; }).join(', ')) + '</b>' + (mo.length > 8 ? '…' : '') + '</p>' : '') + tn +
      '<span class="nt-hang-nut"><button type="button" class="nt-nut" data-cap-xem>Xem cấp độ</button><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-cap-ok>Tuyệt vời!</button></span></div>';
    N.tieng('len');
    if (N.fx) {
      N.fx.bangRon(m ? '🏅 ' + m.vn + '!' : '🎉 Lên cấp ' + nMax + '!');
      N.fx.phao({ x: innerWidth / 2, y: innerHeight * 0.3 }, m ? 30 : 18);
      if (m) setTimeout(function () { N.fx.phao({ x: innerWidth * 0.25, y: innerHeight * 0.4 }, 14); N.fx.phao({ x: innerWidth * 0.75, y: innerHeight * 0.4 }, 14); }, 260);
    }
    if (m) N.doc('恭喜！' + m.zh);
    N.moBangNho(html);
    var xong = xemXong;
    var ok = $('#ntBangThan [data-cap-ok]'), xem = $('#ntBangThan [data-cap-xem]');
    if (ok) ok.addEventListener('click', function () { N.dongBang(); xong(); });
    if (xem) xem.addEventListener('click', function () { xong(); N.moBang('cap-capdo'); });
    return true;
  }
  // lam() goi lenCap(n) sau khi len cap -> dung the moi (tra true = da xu ly)
  N.veLenCap = function () { if (dangHien || (S.st.capMoi || []).length === 0) return dangHien || daHien >= S.st.lv; return hienChucMung(false); };
  function ranh() {
    var l = $('#ntLop');
    return (!l || l.hidden) && (!$('#ntHoi') || $('#ntHoi').hidden) && !document.body.classList.contains('co-hd') && !document.body.classList.contains('kt-cd') && !S.tham && S.che === 'xem';
  }
  N.sau.push(function () { if ((S.st.capMoi || []).length && ranh()) setTimeout(function () { if (ranh()) hienChucMung(false); }, 600); capNhatPhu(); });
  // dong bang ✕ -> coi nhu da xem; bi bang khac de len (qua diem danh, nhan vat...) -> hien lai sau
  N.nhip.push(function () {
    if (!dangHien) return;
    if (!N.bangDang()) xemXong();
    else if (!$('#ntBangThan .cap-chuc')) { dangHien = false; daHien = 0; }
  });
  N.nhip.push(function () { if ((S.st && S.st.capMoi || []).length && !dangHien && ranh() && Date.now() % 5000 < 1000) hienChucMung(false); });

  /* ================= Hoat dong cap cao ================= */
  var HD = { cg: null, cgChay: null, cgKet: null, le: null, ht: null, tai: {} };
  function tai(k, url) {
    if (HD.tai[k]) return;
    HD.tai[k] = true;
    goi(url).then(function (r) { HD.tai[k] = false; HD[k] = r; veLai('cap-hd'); }, function (e) { HD.tai[k] = false; loiGoi(e); });
  }
  function khoa(than, k, tren) {
    if (N.moTn(k)) return false;
    than.innerHTML = (tren || '') + N.htmlKhoaTn(k);
    return true;
  }
  function veHd(than) {
    $('#ntBangTit').textContent = '🌟 Hoạt động cấp cao';
    var b = N.bangDang(), tab = b.tab || 'nk', M = S.cat.MO_TN;
    var nhan = function (k, ten) { return (N.moTn(k) ? '' : '🔒 ') + ten; };
    N.datTab([['nk', nhan('nhk', '温室 Nhà kính')], ['cg', nhan('cg', '专家 Chuyên gia')], ['le', nhan('le', '农场节 Lễ hội')], ['ht', '师徒 Học trò']], tab);
    if (tab === 'nk') return veNk(than);
    if (tab === 'cg') return veCg(than);
    if (tab === 'le') return veLe(than);
    return veHt(than);
    void M;
  }
  N.dangKy('cap-hd', veHd);

  // ---- nha kinh ----
  function veNk(than) {
    if (khoa(than, 'nhk')) return;
    var s = S.st, kt = s.kt && s.kt.cap || {}, co = kt.nk, dat = s.o.some(function (o) { return o.k === 'nha-kinh'; }), trongTui = (s.tui['nha-kinh'] || 0) > 0;
    var hn = s.hoc.homNay, du = hn >= 10, tai = s.tai;
    var html = N.htmlGt('nhk') + '<div class="cap-nk">' + img('nha-kinh', 'cap-nk-hinh') + '<div><b lang="zh">温室</b> wēnshì · <b>Nhà kính</b>' +
      '<p>Ngày nào em học từ <b>10 sao</b>, cây trong ruộng không bị thiên tai thời tiết: không chậm lớn, thu đủ nông sản, vẫn gieo và tưới được. Vật nuôi và giá bán vẫn cần khiên 🛡 30 sao.</p></div></div>';
    if (!co) html += '<button type="button" class="nt-nut nt-nut-vang nt-nut-to" data-nk-xay>' + img('ic-xu') + ' Xây nhà kính · ' + soGon((S.cat.CAPCAO || {}).NK_XU || 2500) + ' xu</button>';
    else if (!dat) html += '<p class="cap-tb">Nhà kính đã xây' + (trongTui ? ' và đang nằm trong túi đồ' : '') + ' — đặt lên nông trại mới có tác dụng.</p>' +
      (trongTui ? '<button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-nk-dat>Đặt lên nông trại (2×2 ô)</button>' : '');
    else html += '<ul class="cap-nk-tt"><li class="' + (du ? 'ok' : '') + '">' + (du ? '✔' : '⏳') + ' Hôm nay em học <b>' + hn + '/10</b> sao' + (du ? '' : ' — học thêm để bật nhà kính') + '</li>' +
      '<li class="' + (tai && tai.nk ? 'ok' : '') + '">' + (tai ? (tai.nk ? '🛡 Nhà kính đang che ruộng khỏi ' + esc(tai.vn.toLowerCase()) : '🌪️ Đang có ' + esc(tai.vn.toLowerCase()) + (du ? ' — mở lại nông trại để nhà kính che ruộng' : '')) : '☀️ Hôm nay chưa có thiên tai') + '</li></ul>';
    than.innerHTML = html;
    var x = $('[data-nk-xay]', than);
    if (x) x.addEventListener('click', function () {
      x.disabled = true;
      goi('/api/farm/nhakinh/xay', {}).then(function (r) { N.nhanTrangThai(r.st); N.tieng('mua'); bao('Đã xây nhà kính! Chọn chỗ trống 2×2 để đặt.'); N.batDauDat('nha-kinh', 'dat'); }, function (e) { x.disabled = false; loiGoi(e); });
    });
    var d = $('[data-nk-dat]', than);
    if (d) d.addEventListener('click', function () { N.batDauDat('nha-kinh', 'dat'); });
  }

  // ---- nhiem vu chuyen gia ----
  function veCg(than) {
    if (khoa(than, 'cg')) return;
    var d = HD.cg;
    if (!d) { tai('cg', '/api/farm/chuyengia'); than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; return; }
    if (HD.cgChay) {
      var c = HD.cgChay;
      return chayCau(than, {
        ds: c.ds, i: c.da, url: '/api/farm/chuyengia/tl', them: function (i) { return { id: c.id, i: i }; },
        tren: '<p class="kt-tram-dau">🎓 Nhiệm vụ chuyên gia · cần đúng ' + d.dat + '/' + c.so + ' · câu khó, không pinyin</p>',
        sau: function (r) { if (r.cg) HD.cg = r.cg; if (r.ketThuc) { HD.cgKet = r.ketThuc; if (r.st) N.nhanTrangThai(r.st); return true; } return false; },
        xong: function () { HD.cgChay = null; N.veBang(); },
      });
    }
    var k = HD.cgKet, html = N.htmlGt('cg');
    if (k) {
      html += '<div class="cap-ket ' + (k.dat ? 'dat' : '') + '"><b>' + k.soDung + '/' + k.so + ' câu đúng</b>' +
        (k.qua ? '<p>🎉 Xuất sắc! +' + k.qua.xu + ' xu · ' + Object.keys(k.qua.hat).map(function (h) { return k.qua.hat[h] + ' ' + tenHat(h) + ' quý'; }).join(', ') + (k.qua.tt ? ' · <b>' + esc(tenTt(k.qua.tt)) + '</b> (túi đồ)' : '') + '</p>'
          : k.daNhan ? '<p>Đạt rồi! Phần thưởng tuần này em đã nhận.</p>' : '<p>Chưa đạt ' + d.dat + ' câu — ôn lại bài rồi thử lần nữa nhé.</p>') + '</div>';
      HD.cgKet = null;
    }
    html += '<div class="cap-cg"><span class="cap-cg-ic" aria-hidden="true">🎓</span><div><b lang="zh">专家任务</b> zhuānjiā rènwu · <b>Nhiệm vụ chuyên gia</b>' +
      '<p>10 câu khó nhất từ bài em đã học. Đúng từ <b>' + d.dat + '</b> câu: +' + d.xu + ' xu, ' + d.quy + ' hạt giống quý' + (d.ding ? '' : ' và <b>Đỉnh đồng chuyên gia</b> (lần đầu)') + '. Mỗi tuần thử tối đa ' + d.luot + ' lần.</p>' +
      '<small>Tuần này: đã thử ' + d.lan + '/' + d.luot + (d.xong ? ' · ✔ đã nhận thưởng' : '') + ' · tổng số tuần đạt: ' + d.tong + '</small></div></div>';
    var con = d.luot - d.lan;
    html += d.dang ? '<button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-cg-tiep>Làm tiếp (' + d.dang.da + '/' + d.dang.so + ')</button>'
      : con > 0 ? '<button type="button" class="nt-nut nt-nut-vang nt-nut-to" data-cg-moi>Bắt đầu thử thách</button>' : '<p class="cap-tb">Tuần sau có thử thách mới nhé!</p>';
    than.innerHTML = html;
    var bat = function (r) { HD.cg = r; if (r.dang) { HD.cgChay = r.dang; N.veBang(); } };
    var m = $('[data-cg-moi]', than);
    if (m) m.addEventListener('click', function () { m.disabled = true; goi('/api/farm/chuyengia/moi', {}).then(bat, function (e) { m.disabled = false; loiGoi(e); }); });
    var t = $('[data-cg-tiep]', than);
    if (t) t.addEventListener('click', function () { HD.cgChay = d.dang; N.veBang(); });
  }

  // ---- le hoi nong trai (chu nha) ----
  function veLe(than) {
    if (khoa(than, 'le')) return;
    var d = HD.le;
    if (!d) { tai('le', '/api/farm/lehoi'); than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; return; }
    var html = N.htmlGt('le') + '<div class="cap-le-the"><span class="cap-cg-ic" aria-hidden="true">🎪</span><div><b lang="zh">农场节</b> nóngchǎng jié · <b>Lễ hội nông trại</b>' +
      '<p>Mỗi tháng mở 1 lễ hội ' + d.gio + ' giờ. Bạn sang dự, trả lời đúng 1 câu từ bài của bạn ấy: bạn +' + d.xuKhach + ' xu, em +' + d.xuChu + ' xu (tối đa ' + d.toiDa + ' khách). Đủ ' + d.canQuy + ' khách: em được 1 hạt giống quý.</p></div></div>';
    if (d.dang) {
      html += '<p class="cap-tb ok">🎉 Lễ hội đang diễn ra — còn <b data-het="' + d.kt + '">' + N.conLai(d.kt - Date.now()) + '</b>. Rủ bạn cùng lớp sang nông trại em nhé!</p>' +
        '<p><b>' + d.khach.length + '</b> khách' + (d.quy ? ' · 🎟 đã nhận hạt quý' : d.khach.length < d.canQuy ? ' · còn ' + (d.canQuy - d.khach.length) + ' khách nữa để có hạt quý' : '') + '</p>' +
        (d.khach.length ? '<ul class="cap-khach">' + d.khach.map(function (t) { return '<li>🎈 ' + esc(t) + '</li>'; }).join('') + '</ul>' : '');
    } else if (d.daMoThang) html += '<p class="cap-tb">Tháng này em đã mở lễ hội (' + d.khach.length + ' khách). Tháng sau mở tiếp nhé!</p>';
    else html += '<button type="button" class="nt-nut nt-nut-vang nt-nut-to" data-le-mo>🎪 Mở lễ hội ' + d.gio + ' giờ</button>';
    than.innerHTML = html;
    var m = $('[data-le-mo]', than);
    if (m) m.addEventListener('click', function () {
      m.disabled = true;
      goi('/api/farm/lehoi/mo', {}).then(function (r) { HD.le = r.le; N.nhanTrangThai(r.st); N.tieng('mung'); bao('🎪 Lễ hội đã mở! Bạn bè sang dự sẽ có xu cho cả hai.'); N.veBang(); N.veBanDo(); }, function (e) { m.disabled = false; loiGoi(e); });
    });
  }

  // ---- kem hoc tro ----
  function veHt(than) {
    var d = HD.ht;
    if (!d) { tai('ht', '/api/farm/hoctro'); than.innerHTML = '<p class="nt-trong">Đang tải…</p>'; return; }
    var html = N.moTn('ht') ? N.htmlGt('ht') : '';
    if (d.moi.length) html += '<h3 class="kt-h3">📨 Lời mời kèm học</h3><ul class="cap-ht-ds">' + d.moi.map(function (m) {
      return '<li><span><b>' + esc(m.ten) + '</b> muốn kèm em học (mỗi ngày gửi lời khuyên; ngày em học đủ ' + d.sao + ' sao em được +' + d.xuTro + ' xu).</span>' +
        '<span class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-ht-dongy="' + esc(m.id) + '">Đồng ý</button><button type="button" class="nt-nut" data-ht-tuchoi="' + esc(m.id) + '">Không</button></span></li>';
    }).join('') + '</ul>';
    if (d.thay) html += '<p class="cap-tb ok">👩‍🏫 <b>' + esc(d.thay.ten) + '</b> đang kèm em học. Học đủ ' + d.sao + ' sao mỗi ngày để cả hai cùng có thưởng! <button type="button" class="nt-link" data-ht-thoi="' + esc(d.thay.id) + '">Thôi kèm</button></p>';
    if (!d.mo) {
      html += d.moi.length || d.thay ? '' : '';
      html += N.htmlKhoaTn('ht');
      than.innerHTML = html; ganHt(than); return;
    }
    html += '<h3 class="kt-h3">师徒 Học trò của em (' + d.tro.length + '/' + d.toiDa + ')</h3>';
    html += d.tro.length ? '<ul class="cap-ht-ds">' + d.tro.map(function (t) {
      var du = t.homNay >= d.sao;
      return '<li class="cap-tro"><div class="cap-tro-dau">' + (N.huyBac ? N.huyBac(t.lv, true) : '') + '<b>' + esc(t.ten) + '</b> <small>cấp ' + t.lv + '</small>' +
        '<span class="cap-tro-sao ' + (du ? 'ok' : '') + '">⭐ ' + t.homNay + '/' + d.sao + ' hôm nay</span><button type="button" class="nt-link" data-ht-thoi="' + esc(t.id) + '">Thôi kèm</button></div>' +
        (t.meo < 0 ? '<p class="cap-tro-hd">Gửi một lời khuyên hôm nay:</p><div class="cap-meo">' + d.meo.map(function (m, i) {
          return '<button type="button" data-ht-meo="' + esc(t.id) + '" data-i="' + i + '" title="' + esc(m.py + ' — ' + m.vn) + '"><b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.vn) + '</small></button>';
        }).join('') + '</div>' : '<p class="cap-tro-hd">✔ Đã gửi: <b lang="zh">' + esc(d.meo[t.meo].zh) + '</b> ' + esc(d.meo[t.meo].vn) + '</p>' +
          (t.nhan ? '<p class="cap-tb ok">🎁 Hôm nay đã nhận thưởng kèm bạn này.</p>' : '<button type="button" class="nt-nut ' + (du ? 'nt-nut-vang' : '') + '" data-ht-thuong="' + esc(t.id) + '"' + (du ? '' : ' disabled') + '>' +
            (du ? '🎁 Nhận thưởng (+' + d.xuThay + ' xu, bạn +' + d.xuTro + ' xu)' : 'Chờ bạn học đủ ' + d.sao + ' sao') + '</button>')) + '</li>';
    }).join('') + '</ul>' : '<p class="nt-trong">Em chưa kèm bạn nào.</p>';
    if (d.tro.length < d.toiDa) {
      html += '<h3 class="kt-h3">Mời bạn cùng lớp (cấp ≤ ' + d.lvTro + ')</h3>' + (!d.coLop ? '<p class="nt-trong">Em cần vào lớp để kèm bạn cùng lớp.</p>' : d.ungVien.length ? '<ul class="cap-ht-ds">' + d.ungVien.map(function (u) {
        return '<li class="cap-uv">' + (N.huyBac ? N.huyBac(u.lv, true) : '') + '<b>' + esc(u.ten) + '</b> <small>cấp ' + u.lv + '</small>' +
          (u.daMoi ? '<em>đã mời</em>' : '<button type="button" class="nt-nut nt-nut-xanh" data-ht-moi="' + esc(u.id) + '">Mời kèm học</button>') + '</li>';
      }).join('') + '</ul>' : '<p class="nt-trong">Chưa có bạn nào phù hợp (cấp ≤ ' + d.lvTro + ', chưa có người kèm).</p>');
    }
    html += '<p class="nt-meo">Thưởng chỉ có khi học trò thật sự học đủ ' + d.sao + ' sao trong ngày — kèm bạn là giúp bạn học đều.</p>';
    than.innerHTML = html;
    ganHt(than);
  }
  function ganHt(than) {
    var lamHt = function (url, body, tb) {
      return goi(url, body || {}).then(function (r) { if (r.st) N.nhanTrangThai(r.st); if (tb) bao(tb); HD.ht = null; N.veBang(); }, loiGoi);
    };
    $all('[data-ht-dongy]', than).forEach(function (b) { b.addEventListener('click', function () { lamHt('/api/farm/hoctro/dongy/' + b.getAttribute('data-ht-dongy'), {}, 'Đã nhận lời kèm học. Cùng học chăm nhé! 加油！'); }); });
    $all('[data-ht-tuchoi]', than).forEach(function (b) { b.addEventListener('click', function () { lamHt('/api/farm/hoctro/tuchoi/' + b.getAttribute('data-ht-tuchoi')); }); });
    $all('[data-ht-thoi]', than).forEach(function (b) { b.addEventListener('click', function () { if (confirm('Thôi kèm học với bạn này?')) lamHt('/api/farm/hoctro/thoi/' + b.getAttribute('data-ht-thoi')); }); });
    $all('[data-ht-moi]', than).forEach(function (b) { b.addEventListener('click', function () { b.disabled = true; lamHt('/api/farm/hoctro/moi/' + b.getAttribute('data-ht-moi'), {}, 'Đã gửi lời mời — bạn đồng ý là bắt đầu kèm.'); }); });
    $all('[data-ht-meo]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var i = +b.getAttribute('data-i'), m = HD.ht.meo[i];
        N.doc(m.zh);
        lamHt('/api/farm/hoctro/meo/' + b.getAttribute('data-ht-meo'), { i: i }, 'Đã gửi lời khuyên: ' + m.zh);
      });
    });
    $all('[data-ht-thuong]', than).forEach(function (b) { b.addEventListener('click', function () { b.disabled = true; lamHt('/api/farm/hoctro/thuong/' + b.getAttribute('data-ht-thuong'), {}, '🎁 Học trò học đủ sao — cả hai cùng nhận thưởng!'); N.tieng('xu'); }); });
  }

  /* ================= khach du le hoi (thanh tham ban) ================= */
  var LE = { cau: null, ban: null };
  var nutLe = document.createElement('button');
  nutLe.type = 'button'; nutLe.className = 'nt-cu nt-tc'; nutLe.id = 'ntThamLe'; nutLe.hidden = true;
  nutLe.innerHTML = '<span class="nt-tc-ic" aria-hidden="true">🎪</span><span class="nt-tc-chu">Dự lễ hội</span>';
  var dock = $('#ntTham .nt-tham-nut');
  if (dock) dock.insertBefore(nutLe, dock.firstChild);
  nutLe.addEventListener('click', function () {
    var t = S.tham;
    if (!t) return;
    nutLe.disabled = true;
    goi('/api/farm/lehoi/cau/' + t.id, {}).then(function (r) { nutLe.disabled = false; LE.cau = r.cau; LE.ban = { id: t.id, ten: t.ten }; N.moBang('cap-dule'); }, function (e) { nutLe.disabled = false; loiGoi(e); });
  });
  N.dangKy('cap-dule', function (than) {
    $('#ntBangTit').textContent = '🎪 Lễ hội nông trại';
    N.datTab([], '');
    if (!LE.cau) { than.innerHTML = '<p class="nt-trong">Lễ hội đã xong câu hỏi.</p>'; return; }
    chayCau(than, {
      ds: [LE.cau], url: '/api/farm/lehoi/tl/' + LE.ban.id,
      tren: '<p class="kt-tram-dau">🎪 Lễ hội ở nông trại <b>' + esc(N.htmlTen ? LE.ban.ten : LE.ban.ten) + '</b> — trả lời đúng 1 câu từ bài em đã học để vào hội!</p>',
      sau: function (r) {
        if (S.tham && r.le) S.tham.le = r.le;
        if (r.st) N.nhanTrangThai(r.st);
        if (r.vao) { bao('🎉 Em đã vào lễ hội! +' + r.vao.xu + ' xu — bạn cũng được xu nhờ em.'); N.tieng('mung'); }
        LE.cau = null;
        capNhatNutLe();
        return true;
      },
      xong: function () { N.dongBang(); },
    });
  });
  function capNhatNutLe() {
    var t = S.tham, an = !(t && t.le && t.le.kt > Date.now() && !t.le.da), moi = nutLe.hidden && !an;
    nutLe.hidden = an;
    // thanh nut tham ban cuon ngang: dua nut le hoi vao tam nhin khi vua hien
    if (moi && nutLe.parentNode) setTimeout(function () { nutLe.parentNode.scrollLeft = 0; }, 300);
  }

  // co le hoi tren nong trai (em hoac ban dang mo le hoi)
  function veCoLe() {
    var dat = $('#ntDat');
    if (!dat) return;
    var cu = $('.cap-le-co', dat), le = S.tham ? S.tham.le : (S.st && S.st.kt && S.st.kt.cap && S.st.kt.cap.le);
    var co = le && le.kt > Date.now();
    capNhatNutLe();
    if (!co) { if (cu) cu.remove(); return; }
    if (cu) return;
    var el = document.createElement('div');
    el.className = 'cap-le-co';
    el.setAttribute('aria-hidden', 'true');
    var mau = ['#e53935', '#ffd54f', '#43a047', '#1e88e5', '#ab47bc', '#ff7043'], c = '';
    for (var i = 0; i < 22; i++) c += '<i style="background:' + mau[i % mau.length] + ';left:' + (i * 4.6 + 1) + '%;animation-delay:' + (i % 5) * 0.2 + 's"></i>';
    el.innerHTML = '<span class="cap-le-day"></span>' + c + '<b class="cap-le-bien">🎪 <span lang="zh">农场节</span> Lễ hội · ' + (le.khach || 0) + ' khách</b>';
    dat.appendChild(el);
  }
  N.sauVe.push(veCoLe);

  /* ================= nhat ky ================= */
  N.htmlNk.lehoi = function (e, ai) {
    return { hinh: 'ic-tim', chu: ai + ' đến dự <b>lễ hội nông trại</b> của em 🎪 (khách thứ ' + e.n + ')' + (e.xu ? ' · <b>+' + e.xu + ' xu</b>' : '') + (e.quy ? ' · 🎟 em nhận <b>1 hạt quý</b>!' : '') };
  };
  N.htmlNk.htmoi = function (e, ai) { return { hinh: 'ic-chao', chu: ai + ' muốn <b>kèm em học</b> <span lang="zh">师徒</span>. <button type="button" class="nt-link" data-cap-ht>Xem lời mời</button>' }; };
  N.htmlNk.htok = function (e, ai) { return { hinh: 'ic-chao', chu: ai + ' đã đồng ý làm <b>học trò</b> của em! Mỗi ngày gửi một lời khuyên nhé.' }; };
  N.htmlNk.htmeo = function (e, ai) {
    var m = ((S.cat.HT_MEO || [])[e.c]) || { zh: '', py: '', vn: '' };
    return { hinh: 'ic-chao', chu: ai + ' khuyên em:<br><button type="button" class="nt-nk-chao" data-doc="' + esc(m.zh) + '"><b lang="zh">' + esc(m.zh) + '</b> ' + esc(m.py) + ' — ' + esc(m.vn) + ' 🔊</button>' };
  };
  N.htmlNk.htthuong = function (e, ai) { return { hinh: 'ic-xu', chu: 'Em học đủ sao hôm nay — ' + ai + ' (người kèm) nhận thưởng, em <b>+' + e.xu + ' xu</b>! 🎉' }; };
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-cap-ht]');
    if (b) { HD.ht = null; N.moBang('cap-hd', 'ht'); }
  });

  /* ================= dong phu trong bang Them + cham do ================= */
  function capNhatPhu() {
    var s = S.st;
    if (!s) return;
    var m = bacM(N.bacCua(s.lv)), p = $('#ntCapPhu');
    if (p) p.textContent = m.ic + ' ' + m.vn + ' · cấp ' + s.lv + (s.lv < (s.lvMax || 100) ? ' · còn ' + soGon(Math.max(0, s.xpSau - s.xp)) + ' KN' : '');
    var cap = s.kt && s.kt.cap || {}, ch = $('#ntCaoCham');
    if (ch) ch.hidden = !(cap.htMoi > 0 || (N.moTn('cg') && !(cap.cg && (cap.cg.xong || cap.cg.lan >= 3))) || (N.moTn('nhk') && !cap.nk));
    var cc = $('#ntCapCham');
    if (cc) cc.hidden = !(s.capMoi && s.capMoi.length);
    var cp = $('#ntCaoPhu');
    if (cp) cp.textContent = cap.le ? '🎪 lễ hội đang mở · ' + cap.le.khach + ' khách' : cap.htMoi ? '📨 có lời mời kèm học' : 'nhà kính · chuyên gia · lễ hội · kèm học trò';
  }
  if (S.st) capNhatPhu();
})();
