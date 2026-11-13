/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — huong dan co ban cho tung phan (co giao, 2026-11):
   · nut ❓ tren dau moi bang -> the huong dan cua phan do (noi dung: public/js/nong-trai-huongdan.js)
   · lan dau em mo 1 phan: tu hien the huong dan 1 lan ("Đã hiểu" / "Xem lại sau"), luu theo tai khoan (localStorage)
   · "📒 Sổ tay nông trại" trong bang Thêm: moi phan theo nhom, cap mo khoa, bam de xem huong dan / mo phan do
   · nong trai moi tinh: 5 buoc chi vao nut that (bo qua duoc, chi hien 1 lan)
   Khong bao gio hien 2 the cung luc; khong tu hien khi dang co bang qua / cau hoi.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX, HD = window.NT_HUONGDAN;
  if (!N || !HD) return;
  var $ = N.$, $all = N.$all, esc = N.esc, S = N.S;

  /* ---------- da xem (theo tai khoan) ---------- */
  function uid() { try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return (a && a.user && a.user.id) || 'khach'; } catch (e) { return 'khach'; } }
  function docXem() { try { return JSON.parse(localStorage.getItem('hyv_nt_hdx_' + uid()) || '{}') || {}; } catch (e) { return {}; } }
  function ghiXem(k, v) { var d = docXem(); d[k] = v; try { localStorage.setItem('hyv_nt_hdx_' + uid(), JSON.stringify(d)); } catch (e) { /* bo qua */ } }
  var hoanPhien = {}; // "Xem lại sau" trong phien nay
  function canTuHien(k) { var v = docXem()[k]; return v !== 1 && !(v <= -2) && !hoanPhien[k]; }

  function capMo(m) { var tn = m.tn && (S.cat.MO_TN || {})[m.tn]; return tn ? tn.lv : (m.lv || 1); }
  function daMo(m) { return N.capEm() >= capMo(m); }
  function bieuTuong(ic) { return '<span class="hd-ic' + (/^[㐀-鿿]$/.test(ic) ? ' zh' : '') + '" aria-hidden="true">' + esc(ic) + '</span>'; }

  /* ---------- the huong dan ---------- */
  var lop = null, dangMo = '';
  function taoLop() {
    if (lop) return lop;
    lop = document.createElement('div');
    lop.className = 'hd-lop';
    lop.hidden = true;
    lop.innerHTML = '<section class="hd-the" role="dialog" aria-modal="true" aria-labelledby="hdTit"></section>';
    document.body.appendChild(lop);
    lop.addEventListener('click', function (e) {
      if (e.target === lop) return dongHd();
      var b = e.target.closest('[data-hd]');
      if (!b) return;
      var a = b.getAttribute('data-hd');
      if (a === 'hieu') { ghiXem(dangMo, 1); dongHd(); }
      else if (a === 'sau') { var v = docXem()[dangMo]; ghiXem(dangMo, (v < 0 ? v : 0) - 1); hoanPhien[dangMo] = 1; dongHd(); }
      else if (a === 'mo') { var k = dangMo; ghiXem(k, 1); dongHd(); moPhan(k); }
    });
    return lop;
  }
  function dongHd() { if (lop) lop.hidden = true; dangMo = ''; document.body.classList.remove('co-hd'); }
  // opt.tuDong: lan dau tu hien (co nut "Xem lại sau"); opt.moNut: them nut "Mở phần này" (tu So tay)
  function moHd(k, opt) {
    var m = HD.muc[k];
    if (!m || !S.cat) return false;
    opt = opt || {};
    taoLop();
    dangMo = k;
    var mo = daMo(m);
    $('.hd-the', lop).innerHTML = '<header class="hd-dau">' + bieuTuong(m.ic) + '<h2 id="hdTit">' + esc(m.ten) + '</h2>' +
      '<button type="button" class="nt-dong" data-hd="' + (opt.tuDong ? 'sau' : 'hieu') + '" aria-label="Đóng">✕</button></header>' +
      '<div class="hd-than"><p class="hd-de"><b>Phần này để làm gì?</b> ' + esc(m.de) + '</p>' +
      (mo ? '' : '<p class="hd-khoa">🔒 Mở ở cấp ' + capMo(m) + ' — em đang cấp ' + N.capEm() + '.</p>') +
      '<ol class="hd-buoc">' + m.buoc.map(function (b, i) { return '<li><span class="hd-so">' + (i + 1) + '</span>' + bieuTuong(b[0]) + '<span>' + esc(b[1]) + '</span></li>'; }).join('') + '</ol>' +
      '<p class="hd-meo"><b>💡 Mẹo:</b> ' + esc(m.meo) + '</p></div>' +
      '<footer class="hd-chan">' + (opt.tuDong ? '<button type="button" class="nt-nut" data-hd="sau">Xem lại sau</button>' : '') +
      (opt.moNut && mo && m.mo !== undefined ? '<button type="button" class="nt-nut nt-nut-vang" data-hd="mo">' + (m.mo ? 'Mở phần này →' : 'Về nông trại →') + '</button>' : '') +
      '<button type="button" class="nt-nut nt-nut-xanh" data-hd="hieu">Đã hiểu</button></footer>';
    lop.hidden = false;
    document.body.classList.add('co-hd');
    var nut = $('[data-hd="hieu"]', lop);
    try { nut.focus({ preventScroll: true }); } catch (e) { /* bo qua */ }
    return true;
  }
  function moPhan(k) {
    var m = HD.muc[k];
    if (!m) return;
    if (!m.mo) { N.dongBang(); return; }
    if (m.mo.bang) { N.dongThiTran(); if (S.tham) N.veNha(); N.moBang(m.mo.bang, m.mo.tab); return; }
    N.dongBang();
    var nut = m.mo.nut && document.querySelector(m.mo.nut);
    if (nut) nut.click();
  }
  // co the tu hien luc nay khong: khong co the khac, khong co cau hoi, khong co bang qua / the gioi thieu
  function ranh() {
    if (dangMo || $('#ntHoi') && !$('#ntHoi').hidden || document.body.classList.contains('kt-cd')) return false;
    var l = $('#ntLop');
    if (l && !l.hidden && (l.classList.contains('nho') || $('.nt-gt, .nt-chuc, .kt-cau, .nt-ch-lua', l))) return false;
    return true;
  }
  function tuHien(k, tre) {
    if (!k || !HD.muc[k] || !canTuHien(k)) return;
    setTimeout(function () { if (ranh() && canTuHien(k)) moHd(k, { tuDong: true }); }, tre || 350);
  }

  /* ---------- nut ❓ tren dau cac bang ---------- */
  function nutHd(id, nhan) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-dong hd-nut'; b.id = id; b.textContent = '❓';
    b.setAttribute('aria-label', nhan || 'Hướng dẫn phần này'); b.title = nhan || 'Hướng dẫn phần này';
    return b;
  }
  var nutBang = nutHd('ntBangHd');
  $('#ntBangDong').parentNode.insertBefore(nutBang, $('#ntBangDong'));
  nutBang.hidden = true;
  function khoaBang() { var b = N.bangDang(); return b && b.loai !== 'nho' ? HD.theoBang(b.loai, b.tab) : ''; }
  nutBang.addEventListener('click', function () { var k = khoaBang(); if (k) moHd(k); });
  N.sauBang.push(function (b) {
    var k = b && b.loai !== 'nho' ? HD.theoBang(b.loai, b.tab) : '';
    nutBang.hidden = !k;
    if (k && b.loai !== 'kt-sotay') tuHien(k);
  });
  // bang Thêm -> So tay; thi tran; ho cau; thanh tham ban
  var nutThem = nutHd('ntThemHd', 'Sổ tay nông trại');
  $('#ntThemDong').parentNode.insertBefore(nutThem, $('#ntThemDong'));
  nutThem.addEventListener('click', function (e) { e.stopPropagation(); N.moBang('kt-sotay'); });
  var ttNut = $('#ntThiTran .nt-tt-nut');
  if (ttNut) { var nutTt = nutHd('ntTtHd'); nutTt.classList.add('nt-nut'); ttNut.appendChild(nutTt); nutTt.addEventListener('click', function (e) { e.stopPropagation(); moHd('thitran'); }); }
  var hcDau = $('#ntHoCau .nt-hc-dau');
  if (hcDau) { var nutHc = nutHd('ntHcHd'); hcDau.appendChild(nutHc); nutHc.addEventListener('click', function (e) { e.stopPropagation(); moHd('hocau'); }); }
  var thamNut = $('#ntTham .nt-tham-nut');
  if (thamNut) { var nutTham = nutHd('ntThamHd'); nutTham.classList.add('nt-nut'); thamNut.appendChild(nutTham); nutTham.addEventListener('click', function (e) { e.stopPropagation(); moHd('thamban'); }); }
  // lan dau mo thi tran / ho cau / sang tham ban
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t.closest) return;
    if (t.closest('#ntDuoi [data-mo="thitran"]')) tuHien('thitran', 1200);
    else if (t.closest('#ntHoCauNut')) tuHien('hocau', 900);
    else if (t.closest('#ntThiTran [data-lo]')) setTimeout(function () { if (S.tham) tuHien('thamban', 200); }, 1500);
    // the gioi thieu tinh nang moi: "Xem cách chơi" -> the huong dan; "Đã hiểu" -> coi nhu da xem
    var gt = t.closest('[data-gt-xong]');
    if (gt) {
      var k = HD.theoTn[gt.getAttribute('data-gt-xong')];
      if (!k) return;
      if (gt.hasAttribute('data-gt-hd')) setTimeout(function () { moHd(k); }, 60); else ghiXem(k, 1);
    }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && dangMo) { e.stopPropagation(); dongHd(); } }, true);

  /* ---------- So tay nong trai ---------- */
  N.dangKy('kt-sotay', function (than) {
    $('#ntBangTit').textContent = '📒 Sổ tay nông trại';
    N.datTab([], '');
    var html = '<section class="hd-batdau"><h3>🌟 Bắt đầu từ đâu?</h3><ol class="hd-buoc">' + HD.batDau.map(function (b, i) {
      return '<li><span class="hd-so">' + (i + 1) + '</span>' + bieuTuong(b[0]) + '<span>' + esc(b[1]) + '</span></li>';
    }).join('') + '</ol></section>';
    HD.nhom.forEach(function (g) {
      var ds = Object.keys(HD.muc).filter(function (k) { return HD.muc[k].nhom === g[0]; });
      html += '<h3 class="kt-h3">' + esc(g[1]) + '</h3><div class="hd-ds">' + ds.map(function (k) {
        var m = HD.muc[k], mo = daMo(m);
        return '<button type="button" class="hd-dong' + (mo ? '' : ' khoa') + '" data-hd-muc="' + k + '">' + bieuTuong(m.ic) + '<span><b>' + esc(m.ten.replace(/ \(.*\)$/, '')) + '</b><small>' + esc(m.tom) + '</small></span>' +
          '<em>' + (mo ? (capMo(m) > 1 ? 'cấp ' + capMo(m) + ' ✓' : '✓') : '🔒 cấp ' + capMo(m)) + '</em></button>';
      }).join('') + '</div>';
    });
    html += '<p class="nt-meo">Ở bảng nào cũng có nút ❓ ở góc trên — bấm để xem lại hướng dẫn của phần đó.</p>';
    than.innerHTML = html;
    $all('[data-hd-muc]', than).forEach(function (b) { b.addEventListener('click', function () { moHd(b.getAttribute('data-hd-muc'), { moNut: true }); }); });
  });

  /* ---------- chi dan lan dau cho nong trai moi tinh ---------- */
  var cd = null;
  function ketCd() { if (cd && cd.el) cd.el.remove(); cd = null; document.body.classList.remove('kt-cd'); }
  function buocCd() {
    var ds = HD.chiDan, b = ds[cd.i], muc = b && document.querySelector(b.chon);
    if (!b) return ketCd();
    if (!muc) { cd.i++; return buocCd(); }
    var r = muc.getBoundingClientRect(), dem = 6;
    var x = Math.max(4, r.left - dem), y = Math.max(4, r.top - dem), w = Math.min(innerWidth - 8, r.width + dem * 2), h = r.height + dem * 2;
    cd.el.innerHTML = '<div class="cd-vong" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px"></div>' +
      '<div class="cd-the"><p>' + b.chu + '</p><div class="cd-nut"><button type="button" class="nt-nut nt-nut-nho" data-cd="bo">Bỏ qua</button>' +
      '<span>' + (cd.i + 1) + '/' + ds.length + '</span><button type="button" class="nt-nut nt-nut-xanh nt-nut-nho" data-cd="tiep">' + (cd.i >= ds.length - 1 ? 'Bắt đầu chơi!' : 'Tiếp →') + '</button></div></div>';
    var the = $('.cd-the', cd.el), th = the.offsetHeight, tw = the.offsetWidth;
    // the nam phia tren muc tieu neu muc tieu o nua duoi man hinh, nguoc lai nam duoi
    var ty = r.top + r.height / 2 > innerHeight / 2 ? Math.max(8, y - th - 12) : Math.min(innerHeight - th - 8, y + h + 12);
    the.style.top = ty + 'px';
    the.style.left = Math.max(8, Math.min(innerWidth - tw - 8, r.left + r.width / 2 - tw / 2)) + 'px';
  }
  function batDauCd() {
    cd = { i: 0, el: document.createElement('div') };
    cd.el.className = 'cd-lop';
    document.body.appendChild(cd.el);
    document.body.classList.add('kt-cd');
    cd.el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cd]');
      if (!b) return;
      if (b.getAttribute('data-cd') === 'bo') return ketCd();
      cd.i++; buocCd();
    });
    buocCd();
  }
  // chi khi nong trai con o cap 1 (moi choi), khong co bang nao dang mo; chi 1 lan moi tai khoan
  function xetCd(lan) {
    var s = S.st;
    if (!s || s.lv !== 1 || docXem()._cd || lan > 90) return;
    var ban = $all('.nt-lop').some(function (x) { return !x.hidden; }) || dangMo || S.tham || S.che !== 'xem' || !$('#ntThiTran').hidden;
    if (ban) { setTimeout(function () { xetCd(lan + 1); }, 1000); return; }
    ghiXem('_cd', 1);
    batDauCd();
  }
  var daXet = false;
  N.sau.push(function () { if (!daXet) { daXet = true; setTimeout(function () { xetCd(0); }, 1500); } });
  if (S.st) { daXet = true; setTimeout(function () { xetCd(0); }, 1500); }
  window.addEventListener('resize', function () { if (cd) buocCd(); });

  N.hd = { mo: moHd, dong: dongHd, tuHien: tuHien };
})();
