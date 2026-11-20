/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Mua Noel: Thiep Giang sinh 圣诞贺卡 + Tat Noel 圣诞袜 (2026-11-18).
   May chu (nong-trai-noel-thiep.js) kiem moi luat; o day chi ve:
   - bang 'noel-thiep': the 'viet' (chon mau thiep -> chon 1..3 cau chuc mau -> chon ban / "Gửi cô"), 'hop' (Hop thiep, mo
     thiep co hieu ung phong bi), 'gui' (thiep da gui). Cau chuc co chu em da hoc xep len truoc, gan "✓ Em đã học".
   - chiec tat treo canh nha tren nong trai (trong mua) + nut tren thanh tham ban; bang 'noel-tat':
     tat cua em (dem qua, tu 25/12 mo tat -> qua bay ra tung mon kem ten ban + loi chuc) / tat cua ban (bo qua nho + loi chuc).
   - vien "💌 n thiệp mới" o goc duoi khi co thiep chua mo; nhat ky: thiep, tatdi, tatden, tatmo.
   Khong co o go chu tu do (chi cau mau) -> khong can bo loc.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, img = N.img, goi = N.goi, bao = N.bao, S = N.S;
  var seq = 0;
  var T = { d: null, luc: 0, m: 'thong', c: [], den: '', denTen: '', tim: '', gui: false, rid: '' };
  var TAT = { id: '', d: null, luc: 0, loai: 'xu', k: '', n: 5, c: [], gui: false, rid: '' };
  var THU_TU_MAU = ['thong', 'tuyet', 'onggia', 'chuong', 'dem'];

  function cat() { return (S.cat && S.cat.NOEL_TH) || null; }
  function mua() { var n = S.st && S.st.kt && S.st.kt.noel; return !!(n && n.mua && cat()); }
  function kt() { return (S.st && S.st.kt && S.st.kt.noelTh) || { thMoi: 0, tat: 0 }; }
  function giam() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function tenNgan(t) { return window.NhanVat && NhanVat.tenNgan ? NhanVat.tenNgan(t || '') : (t || ''); }
  function maMoi() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 10); }
  function boDau(t) { return String(t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); }
  function cau(i) { var c = cat(); return (c && c.cau[i]) || { zh: '', py: '', vn: '' }; }
  function ngayVn(s) { var p = String(s || '').split('-'); return p.length === 3 ? +p[2] + '/' + +p[1] : s; }
  function conNgay(tu, den) { return Math.max(0, Math.round((Date.parse(den + 'T00:00:00Z') - Date.parse(tu + 'T00:00:00Z')) / 86400000)); }
  function luc(t) {
    var p = Math.max(0, Math.floor((Date.now() - t) / 60000));
    return p < 1 ? 'vừa xong' : p < 60 ? p + ' phút trước' : p < 1440 ? Math.floor(p / 60) + ' giờ trước' : Math.floor(p / 1440) + ' ngày trước';
  }
  function cauHtml(i, cls) {
    var x = cau(i);
    return '<button type="button" class="th-cau ' + (cls || '') + '" data-doc="' + esc(x.zh) + '"><b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + '</small><span>' + esc(x.vn) + '</span></button>';
  }
  function ganDoc(goc) {
    $all('[data-doc]', goc).forEach(function (b) {
      if (b._thDoc) return;
      b._thDoc = 1;
      b.addEventListener('click', function (e) { e.stopPropagation(); N.doc(b.getAttribute('data-doc')); });
    });
  }

  /* ---------------- 5 mau thiep (SVG phang, vien #2b1d3a) ---------------- */
  var VIEN = 'stroke="#2b1d3a" stroke-width="2.4" stroke-linejoin="round"';
  function tuyetRoi(n, w, h, mau) {
    var s = '';
    for (var i = 0; i < n; i++) {
      var x = (i * 73 + 17) % w, y = (i * 41 + 9) % (h - 20), r = 1.4 + (i % 3) * 0.8;
      s += '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (mau || '#fff') + '" opacity="' + (0.55 + (i % 4) * 0.12) + '" class="th-bong" style="animation-delay:-' + (i % 7) * 0.6 + 's"/>';
    }
    return s;
  }
  function svgThiep(m) {
    var id = 'th' + (++seq), h = '<svg class="th-svg" viewBox="0 0 320 190" aria-hidden="true" focusable="false"><defs>';
    if (m === 'tuyet') {
      h += '<linearGradient id="' + id + 'g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd0ff"/><stop offset="1" stop-color="#e3f4ff"/></linearGradient></defs>' +
        '<rect width="320" height="190" fill="url(#' + id + 'g)"/>' + tuyetRoi(26, 320, 190) +
        '<path d="M0 150Q80 128 160 146T320 140V190H0Z" fill="#fff" ' + VIEN + '/>' +
        '<g class="th-lac"><circle cx="160" cy="132" r="34" fill="#fff" ' + VIEN + '/><circle cx="160" cy="80" r="24" fill="#fff" ' + VIEN + '/>' +
        '<path d="M138 60h44l-4-6h-36z" fill="#2b1d3a"/><rect x="146" y="30" width="28" height="26" rx="3" fill="#2b1d3a"/><rect x="146" y="48" width="28" height="6" fill="#e53935"/>' +
        '<circle cx="152" cy="76" r="3" fill="#2b1d3a"/><circle cx="168" cy="76" r="3" fill="#2b1d3a"/><path d="M160 83l16 4-16 3z" fill="#ff9800" stroke="#2b1d3a" stroke-width="1.5"/>' +
        '<path d="M152 92q8 5 16 0" fill="none" stroke="#2b1d3a" stroke-width="2" stroke-linecap="round"/>' +
        '<path d="M138 102q22 10 44 0l2 9q-24 10-48 0z" fill="#e53935" ' + VIEN + '/><path d="M172 108l6 22-9 2-4-21z" fill="#e53935" ' + VIEN + '/>' +
        '<circle cx="160" cy="122" r="3.4" fill="#2b1d3a"/><circle cx="160" cy="138" r="3.4" fill="#2b1d3a"/>' +
        '<path d="M127 124l-28-18M193 124l28-20" stroke="#6d4c41" stroke-width="4" stroke-linecap="round"/></g>' +
        '<g fill="#2e7d32" ' + VIEN + '><path d="M40 150l18-44 18 44z"/><path d="M262 148l16-38 16 38z"/></g>';
    } else if (m === 'onggia') {
      h += '<radialGradient id="' + id + 'g" cx="0.5" cy="0.45" r="0.7"><stop offset="0" stop-color="#43a047"/><stop offset="1" stop-color="#1b5e20"/></radialGradient></defs>' +
        '<rect width="320" height="190" fill="url(#' + id + 'g)"/>' + tuyetRoi(22, 320, 190) +
        '<g class="th-lac"><path d="M112 82Q120 22 196 34q24 6 40 36l-20 6q-14-22-34-24-46-4-50 34z" fill="#e53935" ' + VIEN + '/>' +
        '<circle cx="232" cy="80" r="11" fill="#fff" ' + VIEN + '/>' +
        '<path d="M110 96q50 92 100 0" fill="#fff" ' + VIEN + '/>' +
        '<ellipse cx="160" cy="98" rx="40" ry="30" fill="#ffd3b0" ' + VIEN + '/>' +
        '<rect x="104" y="76" width="112" height="18" rx="9" fill="#fff" ' + VIEN + '/>' +
        '<circle cx="146" cy="100" r="3.6" fill="#2b1d3a"/><circle cx="174" cy="100" r="3.6" fill="#2b1d3a"/>' +
        '<circle cx="136" cy="110" r="6" fill="#ff8a80" opacity=".7"/><circle cx="184" cy="110" r="6" fill="#ff8a80" opacity=".7"/>' +
        '<path d="M126 122q14-10 34 2 20-12 34-2-12 16-34 10-22 6-34-10z" fill="#fff" ' + VIEN + '/><circle cx="160" cy="112" r="6" fill="#ff8a65" ' + VIEN + '/></g>' +
        '<g fill="#ffd54f" stroke="#2b1d3a" stroke-width="1.6"><path class="th-sao" d="M48 40l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z"/><path class="th-sao" style="animation-delay:-1s" d="M276 132l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z"/></g>';
    } else if (m === 'chuong') {
      h += '<linearGradient id="' + id + 'g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff4d6"/><stop offset="1" stop-color="#ffd98a"/></linearGradient>' +
        '<linearGradient id="' + id + 'v" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffca28"/><stop offset=".5" stop-color="#fff59d"/><stop offset="1" stop-color="#f9a825"/></linearGradient></defs>' +
        '<rect width="320" height="190" fill="url(#' + id + 'g)"/>' + tuyetRoi(18, 320, 190, '#ffffff') +
        '<g fill="#2e7d32" ' + VIEN + '><path d="M118 40q-30-14-46 6 20 2 22 16 10-12 24-22z"/><path d="M202 40q30-14 46 6-20 2-22 16-10-12-24-22z"/></g>' +
        '<g class="th-chuong-trai"><path d="M146 52q-40 4-44 60l-8 16h64l-2-16q2-56-10-60z" fill="url(#' + id + 'v)" ' + VIEN + '/><circle cx="126" cy="134" r="8" fill="#f9a825" ' + VIEN + '/></g>' +
        '<g class="th-chuong-phai"><path d="M174 52q40 4 44 60l8 16h-64l2-16q-2-56 10-60z" fill="url(#' + id + 'v)" ' + VIEN + '/><circle cx="194" cy="134" r="8" fill="#f9a825" ' + VIEN + '/></g>' +
        '<path d="M160 50q-30-26-36-4 6 14 36 4 30 10 36-4-6-22-36 4z" fill="#e53935" ' + VIEN + '/><circle cx="160" cy="50" r="8" fill="#c62828" ' + VIEN + '/>' +
        '<g fill="#e53935" stroke="#2b1d3a" stroke-width="1.6"><circle cx="96" cy="56" r="5"/><circle cx="104" cy="50" r="5"/><circle cx="224" cy="56" r="5"/><circle cx="216" cy="50" r="5"/></g>';
    } else if (m === 'dem') {
      h += '<linearGradient id="' + id + 'g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1b4a"/><stop offset="1" stop-color="#3949ab"/></linearGradient></defs>' +
        '<rect width="320" height="190" fill="url(#' + id + 'g)"/>';
      for (var i = 0; i < 18; i++) h += '<circle class="th-sao" cx="' + ((i * 97 + 11) % 320) + '" cy="' + ((i * 37 + 7) % 100) + '" r="' + (1 + (i % 3) * 0.7) + '" fill="#fff8d0" style="animation-delay:-' + (i % 5) * 0.5 + 's"/>';
      h += '<circle cx="258" cy="42" r="20" fill="#fff6c8" stroke="#2b1d3a" stroke-width="2"/><circle cx="266" cy="36" r="17" fill="#22327a"/>' +
        '<path d="M0 140Q70 112 150 136T320 126V190H0Z" fill="#e8f1ff" ' + VIEN + '/><path d="M0 162Q90 146 190 160T320 154V190H0Z" fill="#fff" ' + VIEN + '/>' +
        '<g ' + VIEN + '><rect x="60" y="118" width="34" height="26" fill="#8d6e63"/><path d="M54 120l23-18 23 18z" fill="#fff"/><rect x="72" y="126" width="10" height="9" fill="#ffd54f" class="th-den"/>' +
        '<rect x="214" y="110" width="40" height="30" fill="#a1887f"/><path d="M208 112l26-20 26 20z" fill="#fff"/><rect x="226" y="120" width="12" height="10" fill="#ffd54f" class="th-den" style="animation-delay:-.8s"/></g>' +
        '<g fill="#2e7d32" ' + VIEN + '><path d="M140 150l14-36 14 36z"/><path d="M168 152l10-26 10 26z"/></g>' + tuyetRoi(16, 320, 190);
    } else { // thong
      h += '<radialGradient id="' + id + 'g" cx="0.5" cy="0.4" r="0.75"><stop offset="0" stop-color="#e53935"/><stop offset="1" stop-color="#8e1b1b"/></radialGradient></defs>' +
        '<rect width="320" height="190" fill="url(#' + id + 'g)"/>' + tuyetRoi(26, 320, 190) +
        '<rect x="150" y="150" width="20" height="20" fill="#795548" ' + VIEN + '/>' +
        '<g fill="#2e7d32" ' + VIEN + '><path d="M160 34l-34 44h16l-30 36h18l-32 38h124l-32-38h18l-30-36h16z"/></g>' +
        '<path d="M130 92q30 12 60 -2M118 126q42 16 84 -2" fill="none" stroke="#ffd54f" stroke-width="2.4" stroke-dasharray="2 5" stroke-linecap="round"/>' +
        '<g stroke="#2b1d3a" stroke-width="1.6"><circle cx="146" cy="74" r="5" fill="#ffd54f" class="th-den"/><circle cx="176" cy="96" r="5" fill="#40c4ff" class="th-den" style="animation-delay:-.5s"/>' +
        '<circle cx="138" cy="112" r="5" fill="#ff80ab" class="th-den" style="animation-delay:-1s"/><circle cx="184" cy="128" r="5" fill="#ffd54f" class="th-den" style="animation-delay:-1.4s"/>' +
        '<circle cx="124" cy="142" r="5" fill="#69f0ae" class="th-den" style="animation-delay:-.7s"/><circle cx="200" cy="146" r="5" fill="#ff5252" class="th-den" style="animation-delay:-.2s"/></g>' +
        '<path class="th-sao" d="M160 18l5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1z" fill="#ffd54f" stroke="#2b1d3a" stroke-width="2"/>' +
        '<g ' + VIEN + '><rect x="96" y="150" width="26" height="22" fill="#42a5f5"/><path d="M109 150v22M96 160h26" stroke="#ffd54f" stroke-width="3"/>' +
        '<rect x="200" y="152" width="24" height="20" fill="#ffd54f"/><path d="M212 152v20" stroke="#e53935" stroke-width="3"/></g>';
    }
    return h + '<rect x="5" y="5" width="310" height="180" rx="12" fill="none" stroke="#ffe082" stroke-width="3" stroke-dasharray="7 5" opacity=".9"/></svg>';
  }
  // 1 tam thiep: hinh + loi chuc; o = { tu, den, nho }
  function htmlThe(m, cs, o) {
    o = o || {};
    var M = (cat() && cat().mau[m]) || { zh: '', py: '', vn: '' };
    return '<div class="th-the th-m-' + esc(m) + (o.nho ? ' nho' : '') + '"><div class="th-the-anh">' + svgThiep(m) +
      '<span class="th-the-tit" lang="zh">圣诞贺卡</span></div>' +
      '<div class="th-the-chu">' + (o.den ? '<p class="th-the-gui">Gửi <b>' + esc(o.den) + '</b>,</p>' : '') +
      (cs && cs.length ? cs.map(function (i) { return cauHtml(i, 'to'); }).join('') : '<p class="th-the-trong">Chọn câu chúc ở dưới nhé ✍️</p>') +
      (o.tu ? '<p class="th-the-ky">— <b>' + esc(o.tu) + '</b> 🎄</p>' : '') +
      '<p class="th-the-mau"><span lang="zh">' + esc(M.zh) + '</span> ' + esc(M.py) + ' · ' + esc(M.vn) + '</p></div></div>';
  }

  /* ---------------- tai du lieu ---------------- */
  function taiThiep() { return goi('/api/farm/noel/thiep').then(function (r) { T.d = r; T.luc = Date.now(); return r; }); }
  function laBang(l) { var b = N.bangDang(); return b && b.loai === l; }

  /* ---------------- bang Thiep Giang sinh ---------------- */
  N.dangKy('noel-thiep', function (than, b) {
    $('#ntBangTit').textContent = '💌 Thiệp Giáng sinh 圣诞贺卡';
    var tab = b.tab || (kt().thMoi ? 'hop' : 'viet');
    if (tab.indexOf('den:') === 0) { T.den = tab.slice(4); T.denTen = ''; tab = 'viet'; }
    b.tab = tab;
    var moi = kt().thMoi;
    N.datTab([['viet', '✍️ Viết thiệp'], ['hop', '📬 Hộp thiệp' + (moi ? ' (' + moi + ')' : '')], ['gui', '📤 Đã gửi']], tab);
    if (!T.d || Date.now() - T.luc > 15000) {
      if (!T.d) than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
      taiThiep().then(function () { if (laBang('noel-thiep')) N.veBang(); }, function (e) { if (!T.d) than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
      if (!T.d) return;
    }
    if (tab === 'hop') return veHop(than);
    if (tab === 'gui') return veGui(than);
    veViet(than);
  });

  function cauHop(i, choCo) { var x = cau(i); return !(x.co && !choCo) && !(x.ban && choCo); }
  function veViet(than) {
    var r = T.d, c = cat();
    if (!r.mua) { than.innerHTML = '<p class="nt-trong">Mùa Noel đã qua — hẹn em mùa sau (17/11) để gửi thiệp nhé! Em vẫn mở được Hộp thiệp.</p>'; return; }
    if (!r.lop) { than.innerHTML = '<p class="nt-trong">Em chưa có thị trấn. Mở nông trại để vào thị trấn rồi gửi thiệp cho các bạn nhé.</p>'; return; }
    var choCo = T.den === 'co';
    T.c = T.c.filter(function (i) { return cauHop(i, choCo); });
    var ban = r.ban.filter(function (x) { return x.id === T.den; })[0];
    if (ban) T.denTen = ban.ten;
    // nguoi nhan chon tu luc sang tham (ban khac thi tran) khong co trong danh sach cung thi tran -> van giu
    if (T.den && !choCo && !ban && !T.denTen) { T.den = ''; T.denTen = ''; }
    var tenDen = choCo ? 'cô giáo' : T.denTen ? tenNgan(T.denTen) : '';
    // cau chuc: cau co chu em da hoc len truoc
    var ds = c.cau.map(function (x, i) { return i; }).filter(function (i) { return cauHop(i, choCo); });
    ds.sort(function (a, b2) { return (r.hoc[b2] || 0) - (r.hoc[a] || 0) || a - b2; });
    var h = '<div class="th-viet">' +
      '<p class="nt-meo">Gửi thiệp tiếng Trung cho bạn cùng thị trấn <b>' + esc(r.lop) + '</b>, cho cô — hoặc sang thăm nông trại bạn lớp khác rồi bấm <b>💌 Gửi thiệp</b>. Hôm nay còn <b>' + r.con + '/' + c.thNgay + '</b> thiệp · mỗi thiệp +3 kinh nghiệm.</p>' +
      '<div class="th-xem">' + htmlThe(T.m, T.c, { den: tenDen, tu: 'Em' }) + '</div>' +
      '<h3 class="th-h">1 · Chọn mẫu thiệp</h3><div class="th-mau">' + THU_TU_MAU.map(function (k) {
        var M = c.mau[k];
        return '<button type="button" class="th-mau-o' + (k === T.m ? ' bat' : '') + '" data-th-mau="' + k + '" aria-pressed="' + (k === T.m) + '">' + svgThiep(k) + '<span>' + esc(M.vn) + '</span></button>';
      }).join('') + '</div>' +
      '<h3 class="th-h">2 · Chọn câu chúc <small>(1–' + c.thCau + ' câu, chạm theo thứ tự)</small></h3><div class="th-ds-cau">' + ds.map(function (i) {
        var x = cau(i), vt = T.c.indexOf(i), hoc = (r.hoc[i] || 0) >= 80;
        return '<button type="button" class="th-chon' + (vt >= 0 ? ' bat' : '') + '" data-th-cau="' + i + '">' + (vt >= 0 ? '<i class="th-so">' + (vt + 1) + '</i>' : '') +
          '<b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + '</small><span>' + esc(x.vn) + '</span>' + (hoc ? '<em class="th-hoc">✓ Em đã học</em>' : '') + '</button>';
      }).join('') + '</div>' +
      '<h3 class="th-h">3 · Gửi cho</h3>' +
      '<button type="button" class="th-co' + (choCo ? ' bat' : '') + '" data-th-den="co"' + (r.daCo ? ' disabled' : '') + '>👩‍🏫 <b>Gửi cô</b> <span lang="zh">老师</span> lǎoshī' + (r.daCo ? ' · <small>hôm nay đã gửi</small>' : '') + '</button>' +
      (r.ban.length > 6 ? '<label class="th-tim"><span aria-hidden="true">🔎</span><input type="search" id="thTim" placeholder="Tìm bạn theo tên…" value="' + esc(T.tim) + '" autocomplete="off"></label>' : '') +
      '<ul class="th-ban" id="thBan"></ul>' +
      '<div class="th-gui-hang"><button type="button" class="nt-nut nt-nut-vang nt-nut-to" id="thGui"' + (!T.c.length || !T.den || !r.con ? ' disabled' : '') + '>💌 Gửi thiệp' + (tenDen ? ' cho ' + esc(tenDen) : '') + '</button>' +
      (!r.con ? '<small>Hôm nay em gửi đủ ' + c.thNgay + ' thiệp rồi — mai gửi tiếp nhé!</small>' : !T.den ? '<small>Chọn người nhận ở trên nhé.</small>' : !T.c.length ? '<small>Chọn ít nhất 1 câu chúc.</small>' : '') + '</div></div>';
    than.innerHTML = h;
    veBan();
    ganDoc(than);
    $all('[data-th-mau]', than).forEach(function (bt) { bt.addEventListener('click', function () { T.m = bt.getAttribute('data-th-mau'); N.veBang(); }); });
    $all('[data-th-cau]', than).forEach(function (bt) {
      bt.addEventListener('click', function () {
        var i = +bt.getAttribute('data-th-cau'), vt = T.c.indexOf(i);
        if (vt >= 0) T.c.splice(vt, 1);
        else if (T.c.length >= c.thCau) { bao('Mỗi thiệp tối đa ' + c.thCau + ' câu — chạm câu đã chọn để bỏ.'); return; }
        else { T.c.push(i); N.doc(cau(i).zh); }
        var y = than.scrollTop;
        N.veBang();
        than.scrollTop = y;
      });
    });
    var co = $('[data-th-den="co"]', than);
    if (co) co.addEventListener('click', function () { T.den = T.den === 'co' ? '' : 'co'; var y = than.scrollTop; N.veBang(); than.scrollTop = y; });
    var tim = $('#thTim', than);
    if (tim) tim.addEventListener('input', function () { T.tim = tim.value; veBan(); });
    $('#thGui', than).addEventListener('click', guiThiep);
  }
  function veBan() {
    var ul = $('#thBan'), r = T.d;
    if (!ul || !r) return;
    var q = boDau(T.tim);
    var ds = r.ban.filter(function (x) { return !q || boDau(x.ten).indexOf(q) >= 0; });
    ul.innerHTML = ds.length ? ds.map(function (x) {
      var kho = x.da || x.chan;
      return '<li><button type="button" class="th-ban-o' + (x.id === T.den ? ' bat' : '') + '" data-th-ban="' + esc(x.id) + '"' + (kho ? ' disabled' : '') + '>' +
        '<span class="th-ban-av" aria-hidden="true">' + esc(tenNgan(x.ten).charAt(0) || '?') + '</span><b>' + esc(tenNgan(x.ten)) + '</b>' +
        (x.da ? '<small>✓ đã gửi hôm nay</small>' : x.chan ? '<small>chưa nhận thiệp</small>' : '') + '</button></li>';
    }).join('') : '<li class="nt-trong">' + (r.ban.length ? 'Không tìm thấy bạn nào.' : 'Thị trấn chưa có bạn nào khác — em vẫn gửi thiệp cho cô được nhé!') + '</li>';
    $all('[data-th-ban]', ul).forEach(function (bt) {
      bt.addEventListener('click', function () {
        var id = bt.getAttribute('data-th-ban');
        T.den = T.den === id ? '' : id;
        var than = $('#ntBangThan'), y = than.scrollTop;
        N.veBang();
        than.scrollTop = y;
      });
    });
  }
  function guiThiep() {
    var nut = $('#thGui');
    if (T.gui || !T.den || !T.c.length) return;
    T.gui = true;
    if (nut) nut.disabled = true;
    if (!T.rid) T.rid = maMoi();
    var tenDen = T.den === 'co' ? 'cô' : tenNgan(T.denTen);
    goi('/api/farm/noel/thiep/gui', { den: T.den, m: T.m, c: T.c, rid: T.rid }).then(function (r) {
      T.gui = false; T.rid = '';
      if (r.st) N.nhanTrangThai(r.st);
      N.tieng('len');
      N.doc(cau(T.c[0]).zh);
      var xem = $('#ntBangThan .th-xem .th-the');
      if (xem && !giam()) xem.classList.add('bay');
      bao('💌 Đã gửi thiệp cho ' + tenDen + '! +' + (r.xp || 3) + ' kinh nghiệm · 圣诞快乐！');
      T.c = []; T.den = ''; T.denTen = '';
      setTimeout(function () { taiThiep().then(function () { if (laBang('noel-thiep')) N.veBang(); }, function () {}); }, giam() ? 0 : 700);
    }, function (e) {
      T.gui = false;
      if (nut) nut.disabled = false;
      N.tieng('sai');
      bao(e.message, 'loi');
    });
  }
  function veHop(than) {
    var r = T.d;
    if (!r.nhan.length) { than.innerHTML = '<p class="nt-trong">📬 Hộp thiệp còn trống. Gửi thiệp cho các bạn trước — bạn sẽ gửi lại cho em!</p>'; return; }
    than.innerHTML = '<p class="nt-meo">Chạm vào phong bì để mở thiệp. Chạm vào câu chữ Hán để nghe đọc.</p><div class="th-hop">' + r.nhan.map(function (x) {
      return '<button type="button" class="th-bi' + (x.mo ? '' : ' moi') + '" data-th-mo="' + esc(x.id) + '">' + phongBi(x.m) +
        '<b>' + esc(tenNgan(x.ten)) + '</b><small>' + (x.mo ? luc(x.t) : '✨ Thiệp mới!') + '</small></button>';
    }).join('') + '</div>';
    $all('[data-th-mo]', than).forEach(function (bt) {
      bt.addEventListener('click', function () {
        var x = r.nhan.filter(function (y) { return y.id === bt.getAttribute('data-th-mo'); })[0];
        if (x) moThiep(x);
      });
    });
  }
  var MAU_BI = { thong: '#e53935', tuyet: '#64b5f6', onggia: '#43a047', chuong: '#ffb300', dem: '#3949ab' };
  function phongBi(m) {
    var mau = MAU_BI[m] || '#e53935';
    return '<svg class="th-bi-h" viewBox="0 0 80 56" aria-hidden="true"><rect x="3" y="6" width="74" height="46" rx="5" fill="#fffaf0" stroke="#2b1d3a" stroke-width="2.4"/>' +
      '<path d="M3 10l37 24 37-24" fill="none" stroke="#2b1d3a" stroke-width="2.4" stroke-linejoin="round"/><path d="M5 50l26-20M75 50l-26-20" stroke="#d7c4a6" stroke-width="2"/>' +
      '<circle cx="40" cy="33" r="8" fill="' + mau + '" stroke="#2b1d3a" stroke-width="2"/><path d="M40 28l1.6 3.4 3.6.4-2.7 2.4.8 3.6-3.3-1.9-3.3 1.9.8-3.6-2.7-2.4 3.6-.4z" fill="#ffe082"/></svg>';
  }
  function veGui(than) {
    var r = T.d;
    than.innerHTML = r.gui.length ? '<p class="nt-meo">Hôm nay em đã gửi ' + r.homNay + ' thiệp.</p><ul class="th-ls">' + r.gui.map(function (x) {
      return '<li>' + phongBi(x.m) + '<p>Gửi <b>' + esc(x.co ? 'cô giáo 👩‍🏫' : tenNgan(x.ten)) + '</b> · <small>' + luc(x.t) + '</small><br>' +
        x.c.map(function (i) { return '<span lang="zh">' + esc(cau(i).zh) + '</span>'; }).join(' ') + '</p></li>';
    }).join('') + '</ul>' : '<p class="nt-trong">Em chưa gửi thiệp nào. Viết thiệp đầu tiên nhé! ✍️</p>';
  }

  /* ---------------- mo thiep: phong bi mo nap, thiep truot ra ---------------- */
  function moThiep(x) {
    var cu = $('.th-mo-lop');
    if (cu) cu.remove();
    var lop = document.createElement('div');
    lop.className = 'th-mo-lop' + (giam() ? ' cham' : '');
    lop.setAttribute('role', 'dialog');
    lop.setAttribute('aria-modal', 'true');
    lop.setAttribute('aria-label', 'Thiệp của ' + x.ten);
    lop.innerHTML = '<div class="th-mo-khung"><div class="th-mo-bi" aria-hidden="true"><i class="th-mo-sau"></i><i class="th-mo-nap"></i><i class="th-mo-truoc"></i></div>' +
      '<div class="th-mo-the">' + htmlThe(x.m, x.c, { den: 'em', tu: tenNgan(x.ten) }) + '</div>' +
      '<div class="th-mo-nut"><button type="button" class="nt-nut nt-nut-xanh" data-th-doc>🔊 Đọc thiệp</button>' +
      '<button type="button" class="nt-nut nt-nut-vang" data-th-dap>💌 Gửi lại</button><button type="button" class="nt-nut nt-nut-nho" data-th-dong>Đóng</button></div></div>' +
      '<button type="button" class="th-mo-x" data-th-dong aria-label="Đóng">✕</button>';
    document.body.appendChild(lop);
    ganDoc(lop);
    N.tieng('len');
    requestAnimationFrame(function () { lop.classList.add('mo'); });
    var docHet = function () { N.doc(x.c.map(function (i) { return cau(i).zh; }).join('')); };
    setTimeout(docHet, giam() ? 300 : 1500);
    function dong() { document.removeEventListener('keydown', phim); lop.classList.remove('mo'); setTimeout(function () { lop.remove(); }, giam() ? 0 : 220); }
    function phim(e) { if (e.key === 'Escape') { e.preventDefault(); dong(); } }
    document.addEventListener('keydown', phim);
    $all('[data-th-dong]', lop).forEach(function (b) { b.addEventListener('click', dong); });
    $('[data-th-doc]', lop).addEventListener('click', docHet);
    var dap = $('[data-th-dap]', lop);
    var ban = T.d && T.d.ban.filter(function (b) { return b.ten === x.ten; })[0];
    if (!ban || !T.d.mua || ban.da) dap.hidden = true;
    dap.addEventListener('click', function () { dong(); T.den = ban.id; T.denTen = ban.ten; N.moBang('noel-thiep', 'viet'); });
    lop.addEventListener('click', function (e) { if (e.target === lop) dong(); });
    if (!x.mo) {
      x.mo = true;
      goi('/api/farm/noel/thiep/mo', { id: x.id }).then(function (r) { if (r.st) N.nhanTrangThai(r.st); if (laBang('noel-thiep')) N.veBang(); }, function () {});
      if (N.fx && !giam()) setTimeout(function () { var t = $('.th-mo-the', lop); if (t) N.fx.mung(t); }, 1100);
    }
  }

  /* ---------------- vien "💌 thiep moi" ---------------- */
  function veVien() {
    var n = kt().thMoi || 0, v = $('#thVien');
    if (!n || S.tham) { if (v) v.hidden = true; return; }
    if (!v) {
      v = document.createElement('button');
      v.type = 'button'; v.id = 'thVien'; v.className = 'th-vien';
      v.addEventListener('click', function () { N.moBang('noel-thiep', 'hop'); });
      document.body.appendChild(v);
    }
    v.hidden = false;
    v.innerHTML = '<span aria-hidden="true">💌</span> ' + n + ' thiệp mới';
  }

  /* ---------------- nut trong bang "Thêm" ---------------- */
  function veNutThem() {
    var luoi = $('#ntThemLuoi');
    if (!luoi) return;
    var b = $('#thThemNut'), on = mua() || kt().thMoi > 0 || kt().tat > 0;
    if (!on) { if (b) b.hidden = true; return; }
    if (!b) {
      b = document.createElement('button');
      b.type = 'button'; b.id = 'thThemNut'; b.className = 'nt-them-o th-them'; b.setAttribute('data-mo', 'noel-thiep');
      b.innerHTML = '<span class="nt-them-emo" aria-hidden="true">💌</span><span class="nt-muc-chu"><b>Thiệp Giáng sinh <span lang="zh">贺卡</span></b><small id="thThemPhu"></small></span><i class="nt-cham" id="thThemCham" hidden></i>';
      luoi.insertBefore(b, luoi.firstChild);
    }
    b.hidden = false;
    var n = kt().thMoi;
    $('#thThemPhu').textContent = n ? n + ' thiệp mới — mở xem nhé!' : 'gửi lời chúc tiếng Trung cho bạn & cô';
    $('#thThemCham').hidden = !n;
  }

  /* ================= TAT NOEL ================= */
  function svgTat(n, to) {
    var qua = '';
    if (n > 0) qua += '<rect x="20" y="0" width="14" height="13" rx="2" fill="#42a5f5" stroke="#2b1d3a" stroke-width="2" transform="rotate(-12 27 7)"/><path d="M27 0v13" stroke="#ffd54f" stroke-width="2.4" transform="rotate(-12 27 7)"/>';
    if (n > 1) qua += '<rect x="34" y="-2" width="12" height="14" rx="2" fill="#ffd54f" stroke="#2b1d3a" stroke-width="2" transform="rotate(10 40 5)"/><path d="M34 5h12" stroke="#e53935" stroke-width="2.4" transform="rotate(10 40 5)"/>';
    if (n > 2) qua += '<path d="M14 6l3-9 3 9" fill="#fff" stroke="#e53935" stroke-width="3" stroke-linecap="round"/>';
    return '<svg class="th-tat-h' + (to ? ' to' : '') + '" viewBox="0 -8 60 84" aria-hidden="true" focusable="false">' + qua +
      '<path d="M16 16h28v26q0 6 6 10l6 4q6 6 0 14-6 6-14 2l-16-10q-10-6-10-18z" fill="#e53935" stroke="#2b1d3a" stroke-width="2.6" stroke-linejoin="round"/>' +
      '<path d="M36 64q6-2 10 4" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".85"/>' +
      '<path d="M22 30l4 4M30 26l4 4M24 42l4 4" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".8"/>' +
      '<rect x="12" y="8" width="36" height="13" rx="6" fill="#fff" stroke="#2b1d3a" stroke-width="2.6"/>' +
      '<path d="M30 8V0" stroke="#2b1d3a" stroke-width="2"/><circle cx="30" cy="-1" r="3" fill="#ffd54f" stroke="#2b1d3a" stroke-width="1.6"/></svg>';
  }
  // so qua dang cho trong tat cua nong trai dang ve (cua em / cua ban dang tham)
  function soQua() {
    if (S.tham) return TAT.d && TAT.id === S.tham.id ? TAT.d.n : 0;
    return kt().tat || 0;
  }
  function veTatTrenNha() {
    var dat = $('#ntDat');
    if (!dat) return;
    var cu = dat.querySelectorAll('.th-tat');
    Array.prototype.forEach.call(cu, function (x) { x.remove(); });
    if (!mua()) return;
    var nha = dat.querySelector('.nt-vat.nt-k-nha');
    if (!nha) return;
    var n = soQua(), mo = !S.tham && kt().tatMo;
    var el = document.createElement('span');
    el.className = 'th-tat' + (n ? ' co' : '') + (mo ? ' mo-duoc' : '');
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', S.tham ? 'Tất Noel của bạn — bỏ quà vào tất' : 'Tất Noel của em' + (n ? ', ' + n + ' quà đang chờ' : ''));
    el.innerHTML = svgTat(n) + (n ? '<b class="th-tat-so">' + n + '</b>' : '');
    var mo1 = function (e) { e.preventDefault(); e.stopPropagation(); N.moBang('noel-tat', S.tham ? S.tham.id : ''); };
    el.addEventListener('click', mo1);
    el.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
    el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') mo1(e); });
    (nha.querySelector('.nt-dung') || nha).appendChild(el);
  }
  function taiTat(id) {
    return goi('/api/farm/noel/tat' + (id ? '?id=' + encodeURIComponent(id) : '')).then(function (r) { TAT.id = id || ''; TAT.d = r; TAT.luc = Date.now(); return r; });
  }
  // dang tham ban: tai so qua trong tat cua ban 1 lan
  var thamDa = '';
  function kiemTham() {
    if (!mua() || !S.tham) { thamDa = ''; veNutTham(); return; }
    veNutTham();
    if (thamDa === S.tham.id) return;
    thamDa = S.tham.id;
    var id = S.tham.id;
    taiTat(id).then(function () { if (S.tham && S.tham.id === id) veTatTrenNha(); }, function () {});
  }
  function veNutTham() {
    var hang = $('#ntTham .nt-tham-trai');
    if (!hang) return;
    var on = mua() && !!S.tham;
    [['thThamTat', '🧦', 'Tất Noel', function () { if (S.tham) N.moBang('noel-tat', S.tham.id); }],
      ['thThamThiep', '💌', 'Gửi thiệp', function () { if (S.tham) { T.den = S.tham.id; T.denTen = S.tham.ten; N.moBang('noel-thiep', 'viet'); } }]].forEach(function (x) {
      var b = $('#' + x[0]);
      if (!b && on) {
        b = document.createElement('button');
        b.type = 'button'; b.id = x[0]; b.className = 'nt-cu nt-tc th-tham-nut';
        b.innerHTML = '<span class="nt-tc-ic" aria-hidden="true">' + x[1] + '</span><span class="nt-tc-chu">' + x[2] + '</span>';
        b.addEventListener('click', x[3]);
        hang.insertBefore(b, hang.firstChild);
      }
      if (b) b.hidden = !on;
    });
  }

  N.dangKy('noel-tat', function (than, b) {
    var id = b.tab || '';
    $('#ntBangTit').textContent = '🧦 Tất Noel 圣诞袜';
    N.datTab([], '');
    if (!TAT.d || TAT.id !== id || Date.now() - TAT.luc > 8000) {
      if (!TAT.d || TAT.id !== id) than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
      var cu = TAT.d && TAT.id === id;
      taiTat(id).then(function () { if (laBang('noel-tat')) N.veBang(); }, function (e) { if (!cu) than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
      if (!cu) return;
    }
    if (TAT.d.cuaEm) veTatEm(than); else veTatBan(than);
  });
  function tenQua(loai, k, n) {
    if (loai === 'xu') return { zh: '金币', py: 'jīnbì', vn: n + ' xu', hinh: 'ic-xu' };
    if (loai === 'hat') { var c = S.cat.CAY[k] || {}; return { zh: (c.zh || '') + '种子', py: (c.py || '') + ' zhǒngzi', vn: n + ' hạt ' + String(c.vn || k).toLowerCase(), hinh: 'sp-' + k }; }
    var s = S.cat.SP[k] || {};
    return { zh: s.zh || '', py: s.py || '', vn: n + ' ' + String(s.vn || k).toLowerCase(), hinh: 'sp-' + k };
  }
  function theQua(x, cls) {
    var m = tenQua(x.loai, x.k, x.n);
    return '<div class="th-qua ' + (cls || '') + '">' + img(m.hinh, 'th-qua-h') + '<div><p><b>' + esc(tenNgan(x.ten)) + '</b> tặng <b>' + esc(m.vn) + '</b> <span lang="zh">' + esc(m.zh) + '</span></p>' +
      (x.c || []).map(function (i) { return cauHtml(i); }).join('') + '</div></div>';
  }
  function veTatEm(than) {
    var r = TAT.d, con = conNgay(r.ngay, r.ngayMo);
    var h = '<div class="th-tat-bang"><div class="th-tat-to' + (r.n ? ' co' : '') + (r.moDuoc ? ' mo-duoc' : '') + '">' + svgTat(r.n, true) + '</div>' +
      '<div class="th-tat-ben"><h3><span lang="zh">圣诞袜</span> Shèngdàn wà · Tất Noel của em</h3>' +
      '<p class="th-tat-dem">🧦 <b>' + r.n + '</b> quà đang chờ</p>';
    if (!r.n) h += '<p>Tất còn trống. Các bạn sang thăm nông trại em (cùng lớp hay khác lớp đều được) sẽ bỏ quà nhỏ vào đây. Em cũng sang thăm và bỏ quà cho các bạn nhé!</p>';
    else if (r.moDuoc) h += '<p>🎄 Đêm Giáng sinh tới rồi! Mở tất xem các bạn tặng gì nào!</p><button type="button" class="nt-nut nt-nut-vang nt-nut-to" id="thTatMo">🎁 Mở tất <span lang="zh">打开</span></button>';
    else h += '<p>Bí mật nhé! 🤫 Tất mở được từ đêm Giáng sinh <b>' + ngayVn(r.ngayMo) + '</b>' + (con ? ' — còn <b>' + con + '</b> ngày.' : '.') + '</p>';
    h += '</div></div>';
    if (r.daMo.length) h += '<h3 class="th-h">🎁 Quà đã mở</h3><div class="th-qua-ds">' + r.daMo.map(function (x) { return theQua(x); }).join('') + '</div>';
    than.innerHTML = h;
    ganDoc(than);
    var nut = $('#thTatMo', than);
    if (nut) nut.addEventListener('click', function () {
      nut.disabled = true;
      goi('/api/farm/noel/tat/mo', {}).then(function (kq) {
        if (kq.st) N.nhanTrangThai(kq.st);
        moTatHieuUng(kq.ds);
        TAT.luc = 0;
        if (laBang('noel-tat')) N.veBang();
      }, function (e) { nut.disabled = false; bao(e.message, 'loi'); });
    });
  }
  // qua bay ra khoi tat tung mon
  function moTatHieuUng(ds) {
    var lop = document.createElement('div');
    lop.className = 'th-mo-lop th-tat-lop' + (giam() ? ' cham' : '');
    lop.setAttribute('role', 'dialog');
    lop.setAttribute('aria-modal', 'true');
    lop.setAttribute('aria-label', 'Quà trong tất Noel');
    lop.innerHTML = '<div class="th-mo-khung"><div class="th-tat-rung">' + svgTat(3, true) + '</div><h2 class="th-tat-chuc" lang="zh">圣诞快乐！</h2>' +
      '<div class="th-tat-ra">' + ds.map(function (x, i) { return theQua(x, 'ra" style="animation-delay:' + (giam() ? 0 : 0.9 + i * 0.35) + 's'); }).join('') + '</div>' +
      '<div class="th-mo-nut"><button type="button" class="nt-nut nt-nut-xanh" data-th-dong>Cảm ơn các bạn! 谢谢！</button></div></div>';
    document.body.appendChild(lop);
    ganDoc(lop);
    N.tieng('mung');
    requestAnimationFrame(function () { lop.classList.add('mo'); });
    if (N.fx && !giam()) setTimeout(function () { N.fx.mung($('.th-tat-rung', lop), true); }, 700);
    setTimeout(function () { N.doc('圣诞快乐'); }, 500);
    function dong() { document.removeEventListener('keydown', phim); lop.remove(); N.doc('谢谢'); }
    function phim(e) { if (e.key === 'Escape') { e.preventDefault(); dong(); } }
    document.addEventListener('keydown', phim);
    $('[data-th-dong]', lop).addEventListener('click', dong);
    bao('🧦 Đã mở tất: ' + ds.length + ' món quà đã cất vào kho / túi hạt / xu của em!');
  }
  function veTatBan(than) {
    var r = TAT.d, c = cat(), ten = S.tham && S.tham.id === TAT.id ? tenNgan(S.tham.ten) : 'bạn';
    var h = '<div class="th-tat-bang"><div class="th-tat-to' + (r.n ? ' co' : '') + '">' + svgTat(r.n, true) + '</div><div class="th-tat-ben">' +
      '<h3>Tất Noel của ' + esc(ten) + ' <small lang="zh">圣诞袜</small></h3><p class="th-tat-dem">🧦 <b>' + r.n + '</b> món quà đang chờ</p>' +
      '<p>Bỏ một món quà nhỏ kèm lời chúc — ' + esc(ten) + ' mở tất vào đêm Giáng sinh <b>' + ngayVn(r.ngayMo) + '</b> sẽ thấy tên em!</p></div></div>';
    var ly = !r.mua ? 'Mùa Noel đã qua — hẹn em mùa sau nhé!' : !r.cung ? 'Bạn này chưa mở nông trại.' : r.da ? '✓ Hôm nay em đã bỏ quà vào tất của bạn này rồi — mai nhé!'
      : !r.con ? 'Hôm nay em đã tặng đủ ' + c.tatNgay + ' món quà rồi — mai tặng tiếp nhé!' : r.day ? 'Tất của bạn đầy quà rồi!' : '';
    if (ly) { than.innerHTML = h + '<p class="nt-trong">' + ly + '</p>'; return; }
    if (TAT.loai !== 'xu' && !r.hang.some(function (x) { return x.loai === TAT.loai; })) TAT.loai = 'xu';
    var dsLoai = r.hang.filter(function (x) { return x.loai === TAT.loai; });
    if (TAT.loai !== 'xu' && !dsLoai.some(function (x) { return x.k === TAT.k; })) TAT.k = dsLoai[0] ? dsLoai[0].k : '';
    var co = TAT.loai === 'xu' ? r.xu : ((dsLoai.filter(function (x) { return x.k === TAT.k; })[0] || {}).n || 0);
    var max = Math.min(co, TAT.loai === 'xu' ? c.tatXu : c.tatSl);
    TAT.n = Math.max(1, Math.min(max || 1, TAT.n));
    h += '<h3 class="th-h">1 · Chọn quà' + (c.tatNgay ? ' <small>(hôm nay còn ' + r.con + '/' + c.tatNgay + ' lần tặng)</small>' : '') + '</h3><div class="th-loai">' +
      [['xu', '💰 Xu'], ['sp', '🧺 Kho'], ['hat', '🌱 Hạt giống']].map(function (l) {
        var co2 = l[0] === 'xu' ? r.xu > 0 : r.hang.some(function (x) { return x.loai === l[0]; });
        return '<button type="button" class="' + (TAT.loai === l[0] ? 'bat' : '') + '" data-tat-loai="' + l[0] + '"' + (co2 ? '' : ' disabled') + '>' + l[1] + '</button>';
      }).join('') + '</div>';
    if (TAT.loai !== 'xu') h += '<div class="th-mon">' + dsLoai.map(function (x) {
      var m = tenQua(x.loai, x.k, x.n);
      return '<button type="button" class="' + (x.k === TAT.k ? 'bat' : '') + '" data-tat-k="' + esc(x.k) + '">' + img(m.hinh) + '<b lang="zh">' + esc(m.zh) + '</b><small>×' + x.n + '</small></button>';
    }).join('') + '</div>';
    if (TAT.loai === 'xu') {
      if ([5, 10, 20, 50].indexOf(TAT.n) < 0 || TAT.n > r.xu) TAT.n = r.xu >= 5 ? 5 : Math.max(1, r.xu);
      h += '<div class="th-sl">' + [5, 10, 20, 50].filter(function (v) { return v <= c.tatXu; }).map(function (v) {
        return '<button type="button" class="th-xu' + (TAT.n === v ? ' bat' : '') + '" data-tat-xu="' + v + '"' + (v > r.xu ? ' disabled' : '') + '>' + img('ic-xu') + v + '</button>';
      }).join('') + '<span>Em có ' + Number(r.xu).toLocaleString('vi-VN') + ' xu</span></div>';
    } else h += '<div class="th-sl"><button type="button" data-tat-sl="-1" aria-label="Bớt">−</button><b>' + (max ? TAT.n : 0) + '</b><button type="button" data-tat-sl="1" aria-label="Thêm">+</button>' +
      '<span>món (tối đa ' + Math.min(c.tatSl, co) + ')</span></div>';
    TAT.c = TAT.c.filter(function (i) { return cauHop(i, false); });
    h += '<h3 class="th-h">2 · Lời chúc <small>(1–' + c.tatCau + ' câu)</small></h3><div class="th-ds-cau nho">' + c.cau.map(function (x, i) { return i; }).filter(function (i) { return cauHop(i, false); }).map(function (i) {
      var x = cau(i), vt = TAT.c.indexOf(i);
      return '<button type="button" class="th-chon' + (vt >= 0 ? ' bat' : '') + '" data-tat-cau="' + i + '">' + (vt >= 0 ? '<i class="th-so">' + (vt + 1) + '</i>' : '') + '<b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + '</small><span>' + esc(x.vn) + '</span></button>';
    }).join('') + '</div>';
    h += '<div class="th-gui-hang"><button type="button" class="nt-nut nt-nut-vang nt-nut-to" id="thTatBo"' + (!max || !TAT.c.length || (TAT.loai !== 'xu' && !TAT.k) ? ' disabled' : '') + '>🧦 Bỏ quà vào tất</button>' +
      (!TAT.c.length ? '<small>Chọn ít nhất 1 lời chúc nhé.</small>' : '') + '</div>';
    than.innerHTML = h;
    var y0 = 0;
    var lai = function () { var tb = $('#ntBangThan'); y0 = tb.scrollTop; N.veBang(); tb.scrollTop = y0; };
    $all('[data-tat-loai]', than).forEach(function (bt) { bt.addEventListener('click', function () { TAT.loai = bt.getAttribute('data-tat-loai'); TAT.k = ''; TAT.n = TAT.loai === 'xu' ? 5 : 1; lai(); }); });
    $all('[data-tat-k]', than).forEach(function (bt) { bt.addEventListener('click', function () { TAT.k = bt.getAttribute('data-tat-k'); TAT.n = 1; lai(); }); });
    $all('[data-tat-sl]', than).forEach(function (bt) { bt.addEventListener('click', function () { TAT.n = Math.max(1, Math.min(max, TAT.n + (+bt.getAttribute('data-tat-sl')))); lai(); }); });
    $all('[data-tat-xu]', than).forEach(function (bt) { bt.addEventListener('click', function () { TAT.n = +bt.getAttribute('data-tat-xu'); lai(); }); });
    $all('[data-tat-cau]', than).forEach(function (bt) {
      bt.addEventListener('click', function () {
        var i = +bt.getAttribute('data-tat-cau'), vt = TAT.c.indexOf(i);
        if (vt >= 0) TAT.c.splice(vt, 1);
        else if (TAT.c.length >= c.tatCau) { bao('Tối đa ' + c.tatCau + ' câu chúc.'); return; }
        else { TAT.c.push(i); N.doc(cau(i).zh); }
        lai();
      });
    });
    $('#thTatBo', than).addEventListener('click', function () {
      var nut = this;
      if (TAT.gui) return;
      TAT.gui = true; nut.disabled = true;
      if (!TAT.rid) TAT.rid = maMoi();
      var m = tenQua(TAT.loai, TAT.k, TAT.n);
      goi('/api/farm/noel/tat/bo', { id: TAT.id, loai: TAT.loai, k: TAT.k, n: TAT.n, c: TAT.c, rid: TAT.rid }).then(function (kq) {
        TAT.gui = false; TAT.rid = ''; TAT.c = [];
        if (kq.st) N.nhanTrangThai(kq.st);
        N.tieng('mua');
        N.doc('送给你');
        var to = $('#ntBangThan .th-tat-to');
        if (to && N.fx && !giam()) N.fx.mung(to);
        bao('🧦 Đã bỏ ' + m.vn + ' vào tất của ' + ten + '! +' + (kq.xp || 2) + ' kinh nghiệm');
        TAT.d.n = kq.n; TAT.d.da = true; TAT.d.con = Math.max(0, TAT.d.con - 1);
        veTatTrenNha();
        setTimeout(function () { taiTat(TAT.id).then(function () { if (laBang('noel-tat')) N.veBang(); }, function () {}); }, 400);
      }, function (e) { TAT.gui = false; nut.disabled = false; N.tieng('sai'); bao(e.message, 'loi'); });
    });
    ganDoc(than);
  }

  /* ---------------- nhat ky ---------------- */
  N.htmlNk.thiep = function (e, ai) {
    return { hinh: 'noel-qua-2', chu: ai + ' gửi em một tấm <b>thiệp Giáng sinh</b> <span lang="zh">圣诞贺卡</span> 💌 <button type="button" class="nt-link" data-th-nk="hop">Mở hộp thiệp</button>' };
  };
  N.htmlNk.tatden = function (e, ai) {
    return { hinh: 'noel-qua', chu: ai + ' đã bỏ một món quà bí mật vào <b>tất Noel</b> của em 🧦 — mở từ đêm Giáng sinh 25/12!' };
  };
  N.htmlNk.tatdi = function (e, ai) {
    var m = tenQua(e.loai, e.k, e.n);
    return { hinh: m.hinh, chu: 'Em bỏ <b>' + esc(m.vn) + '</b> <span lang="zh">' + esc(m.zh) + '</span> vào tất Noel của ' + ai + ' 🧦' };
  };
  N.htmlNk.tatmo = function (e) {
    return { hinh: 'noel-qua-3', chu: 'Em đã mở tất Noel: <b>' + e.n + '</b> món quà của các bạn 🎁 <b lang="zh">圣诞快乐！</b>' };
  };
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-th-nk]');
    if (b) N.moBang('noel-thiep', 'hop');
  });

  /* ---------------- moc vao vong doi nong trai ---------------- */
  N.sauVe.push(function () { kiemTham(); veTatTrenNha(); });
  N.sau.push(function () { veNutThem(); veVien(); });
  // thiep moi den luc dang choi: tai lai hop thiep khi so thiep moi tang
  var thMoiCu = -1;
  N.sau.push(function () {
    var n = kt().thMoi || 0;
    if (thMoiCu >= 0 && n > thMoiCu) { T.luc = 0; N.tieng('len'); bao('💌 Em có thiệp Giáng sinh mới!'); }
    thMoiCu = n;
  });
  if (S.st) { veNutThem(); veVien(); }
})();
