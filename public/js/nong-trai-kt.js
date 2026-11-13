/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — kinh te (2026-11-13): Ban do phieu luu · Cho nong san · Cua hang rieng
   · Nha may che bien · Nhan cong · Xuat khau · Dau gia.
   May chu tinh moi thu (nong-trai-phieuluu.js, nong-trai-kt.js, nong-trai-xuong.js);
   o day chi ve bang va gui hanh dong. Dung API window.NTX cua public/js/nong-trai.js.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, img = N.img, goi = N.goi, bao = N.bao, S = N.S;
  var bayGio = function () { return Date.now() + (S.lech || 0); };
  var CO_HAN = /[㐀-鿿]/;

  function sp(k) { return (S.cat.SP || {})[k] || { zh: k, py: '', vn: k }; }
  function hinhSp(k) {
    if (k.indexOf('hat:') === 0) return img('sp-' + k.slice(4), 'kt-hat-anh');
    return img('sp-' + k);
  }
  function tenSp(k) {
    if (k.indexOf('hat:') === 0) { var c = S.cat.CAY[k.slice(4)] || {}; return { zh: (c.zh || '') + '种子', py: (c.py || '') + ' zhǒngzi', vn: 'Hạt ' + (c.vn || '').toLowerCase() }; }
    return sp(k);
  }
  function tenHtml(m) { return '<span class="kt-ten"><b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.py || '') + '</small><span>' + esc(m.vn) + '</span></span>'; }
  function conMs(het) { return Math.max(0, het - bayGio()); }
  function dongHo(het) { return '<span class="kt-dh" data-het="' + het + '">' + N.conLai(conMs(het)) + '</span>'; }
  // cap nhat moi giay cac dong ho dem nguoc + thanh tien do
  setInterval(function () {
    $all('[data-het]').forEach(function (e) {
      var c = conMs(+e.getAttribute('data-het'));
      e.textContent = c > 0 ? N.conLai(c) : (e.getAttribute('data-xong') || 'xong!');
    });
    $all('[data-tien]').forEach(function (e) {
      var a = +e.getAttribute('data-bd'), b = +e.getAttribute('data-kt');
      e.style.width = Math.round(Math.max(0, Math.min(1, (bayGio() - a) / Math.max(1, b - a))) * 100) + '%';
    });
  }, 1000);
  function laBang(l) { var b = N.bangDang(); return b && b.loai === l; }
  function veLai(l) { if (laBang(l)) N.veBang(); }
  function loiGoi(err) { bao(err.message, 'loi'); N.tieng('sai'); }
  function khoaTn(than, k) {
    if (N.moTn(k)) return false;
    than.innerHTML = N.htmlKhoaTn(k);
    return true;
  }
  function soLuong(id, n, max) {
    return '<div class="kt-sl" data-sl-id="' + id + '"><button type="button" data-sl="-1" aria-label="Bớt">−</button><output>' + n + '</output>' +
      '<button type="button" data-sl="1" aria-label="Thêm">+</button><button type="button" data-sl="max" class="kt-sl-het">Tất cả</button></div>';
  }
  function ganSoLuong(than, max, doi) {
    $all('[data-sl]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var o = $('output', b.parentNode), n = +o.textContent, v = b.getAttribute('data-sl');
        n = v === 'max' ? max : Math.max(1, Math.min(max, n + (+v)));
        o.textContent = n;
        if (doi) doi(n);
      });
    });
  }

  /* ================= cau hoi chung (may chu cham) =================
     ds: cau { k, hoi, lua } (khong co dap an); url: noi gui tra loi; sau(r): xu ly ket qua (tra ve true = ket thuc) */
  function chayCau(than, o) {
    var st = o.st || {}, i = st.i || 0, khoa = false;
    function ve() {
      var q = o.ds[i];
      if (!q) return;
      var h = q.hoi || {}, html = (o.tren || '') + '<div class="kt-cau">' +
        '<p class="kt-cau-so">Câu ' + (i + 1) + '/' + o.ds.length + ' · <b>' + esc(h.lenh || '') + '</b></p>';
      if (h.nghe) html += '<button type="button" class="nt-nghe" data-kt-nghe>🔊 Nghe</button><p class="nt-nghe-tb" data-kt-nghe-tb aria-live="polite"></p>';
      html += N.htmlKt(q, 'kc') + '<div class="kt-cau-kq" aria-live="polite"></div></div>';
      than.innerHTML = html;
      $all('img', than).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
      if (h.nghe) {
        var zh = N.giaiNghe(h.nghe), nut = $('[data-kt-nghe]', than), tb = $('[data-kt-nghe-tb]', than);
        var hienChu = function () { tb.innerHTML = 'Máy chưa phát được tiếng — đọc chữ Hán rồi chọn pinyin: <b lang="zh" class="kt-nghe-zh">' + esc(zh) + '</b>'; };
        if (N.mayKhongNghe()) hienChu();
        N.docKiem(zh, function (ok) { if (!ok && tb && !tb.innerHTML) tb.textContent = 'Bấm nút loa để nghe.'; });
        nut.addEventListener('click', function () {
          N.docKiem(zh, function (ok) {
            if (ok) return;
            try { localStorage.setItem('hyv_nt_khong_nghe', '1'); } catch (e) { /* bo qua */ }
            hienChu();
          });
        });
      }
      N.ganKt(than, q, 'kc', gui);
    }
    function gui(b, chon) {
      if (khoa) return;
      khoa = true;
      var q = o.ds[i];
      goi(o.url, b).then(function (r) {
        N.danhDauKt(than, q, r, chon, 'kc');
        N.tieng(r.dung ? 'dung' : 'sai');
        N.docKt(r);
        var kq = $('.kt-cau-kq', than);
        st.i = i + 1;
        var het = o.sau(r, i) || i + 1 >= o.ds.length;
        kq.innerHTML = '<p class="kt-cau-dg ' + (r.dung ? 'dung' : 'sai') + '">' + (r.dung ? '✔ Đúng rồi!' : '✘ Chưa đúng') + '</p>' + N.giaiKt(r, q) +
          (het ? '' : '<button type="button" class="nt-nut nt-nut-xanh" data-kt-tiep>Câu tiếp →</button>');
        var t = $('[data-kt-tiep]', kq);
        if (t) t.addEventListener('click', function () { i = st.i; khoa = false; ve(); });
        else if (o.xong) setTimeout(function () { o.xong(r); }, r.dung ? 900 : 2200);
      }, function (err) { khoa = false; N.moLaiKt(than, q); loiGoi(err); if (err.status === 400 && o.loi) o.loi(err); });
    }
    ve();
  }

  /* ================= 1) BAN DO PHIEU LUU ================= */
  var PL = { d: null, v: null, chay: null, ket: null, tai: false };
  function taiPl() {
    if (PL.tai) return;
    PL.tai = true;
    goi('/api/farm/pl').then(function (r) { PL.tai = false; PL.d = r; veLai('kt-pl'); capNhatPhu(); }, function (e) { PL.tai = false; loiGoi(e); });
  }
  // Ban do tong: 5 vung dat noi nhau bang con duong (SVG ve tay, phong cach vien dam cua nong trai)
  var VT = { lang: [84, 430], thung: [270, 360], pho: [94, 250], dao: [272, 150], de: [170, 56] };
  function veVung(k) {
    var V = '#2b1d3a';
    if (k === 'lang') return '<ellipse cx="0" cy="18" rx="62" ry="20" fill="#9ad66f" stroke="' + V + '" stroke-width="3"/>' +
      '<path d="M-38 10V-6L-26-18L-14-6V10Z" fill="#fff3d6" stroke="' + V + '" stroke-width="2.5"/><path d="M-42-4L-26-22L-10-4Z" fill="#e5533d" stroke="' + V + '" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M2 12V-2L14-12L26-2V12Z" fill="#fff3d6" stroke="' + V + '" stroke-width="2.5"/><path d="M-2 0L14-16L30 0Z" fill="#ffb74d" stroke="' + V + '" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<circle cx="40" cy="2" r="9" fill="#5aa845" stroke="' + V + '" stroke-width="2.5"/><path d="M40 11V16" stroke="' + V + '" stroke-width="3"/>' +
      '<text x="-30" y="-24" font-size="12" font-weight="900" fill="#7a2e1f">ā á</text>';
    if (k === 'thung') return '<path d="M-64 22Q-46-30-20 4Q0-40 22 2Q44-34 64 22Z" fill="#ffcc80" stroke="' + V + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M-30 22Q0 6 30 22" fill="#7cc456" stroke="' + V + '" stroke-width="2.5"/>' +
      '<path d="M0 14V-12" stroke="' + V + '" stroke-width="4"/><circle cx="0" cy="-20" r="14" fill="#5aa845" stroke="' + V + '" stroke-width="2.5"/>' +
      '<text x="-7" y="-15" font-size="13" font-weight="900" fill="#fff" font-family="Noto Serif SC, serif">字</text>';
    if (k === 'pho') return '<rect x="-56" y="-14" width="26" height="34" rx="3" fill="#90caf9" stroke="' + V + '" stroke-width="2.5"/>' +
      '<rect x="-26" y="-34" width="30" height="54" rx="3" fill="#64b5f6" stroke="' + V + '" stroke-width="2.5"/>' +
      '<rect x="8" y="-20" width="28" height="40" rx="3" fill="#bbdefb" stroke="' + V + '" stroke-width="2.5"/>' +
      '<path d="M-20-24h6M-8-24h6M-20-12h6M-8-12h6M-20 0h6M-8 0h6M14-10h6M24-10h6M14 2h6M24 2h6" stroke="' + V + '" stroke-width="2.5"/>' +
      '<path d="M38-26Q54-30 56-18Q56-8 44-8L40-2L40-9Q34-12 36-20Z" fill="#fff" stroke="' + V + '" stroke-width="2.2"/><text x="40" y="-14" font-size="9" font-weight="900" fill="#2b1d3a">你好</text>';
    if (k === 'dao') return '<ellipse cx="0" cy="16" rx="66" ry="18" fill="#81d4fa" stroke="' + V + '" stroke-width="3"/>' +
      '<path d="M-38 16Q-20-6 0-4Q22-6 38 16Z" fill="#ffe082" stroke="' + V + '" stroke-width="2.5"/>' +
      '<path d="M8 6V-30" stroke="' + V + '" stroke-width="3.5"/><path d="M4-30L8-40L12-30Z" fill="#e5533d" stroke="' + V + '" stroke-width="2"/>' +
      '<rect x="3" y="-28" width="10" height="34" fill="#fff" stroke="' + V + '" stroke-width="2.5"/><path d="M3-16h10M3-4h10" stroke="#e5533d" stroke-width="3"/>' +
      '<path d="M-20 4Q-24-14-12-20M-20 4Q-30-8-34-4" fill="none" stroke="#2e7d32" stroke-width="3" stroke-linecap="round"/>';
    return '<path d="M-58 22V-2H58V22Z" fill="#ffcdd2" stroke="' + V + '" stroke-width="3"/>' +
      '<path d="M-66 0L0-26L66 0Z" fill="#e53935" stroke="' + V + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M-36-12L0-42L36-12Z" fill="#c62828" stroke="' + V + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<rect x="-10" y="6" width="20" height="16" rx="8" fill="#7a2e1f" stroke="' + V + '" stroke-width="2.5"/>' +
      '<circle cx="0" cy="-26" r="6" fill="#ffd54f" stroke="' + V + '" stroke-width="2"/>';
  }
  function khoaSvg(x, y) {
    return '<g transform="translate(' + x + ' ' + y + ')"><rect x="-11" y="-4" width="22" height="18" rx="4" fill="#ffd54f" stroke="#2b1d3a" stroke-width="2.5"/>' +
      '<path d="M-6-4V-9A6 6 0 0 1 6-9V-4" fill="none" stroke="#2b1d3a" stroke-width="2.5"/><circle cx="0" cy="5" r="2.5" fill="#2b1d3a"/></g>';
  }
  function xeSvg() {
    return '<g class="kt-xe"><rect x="-14" y="-12" width="28" height="14" rx="4" fill="#ffb74d" stroke="#2b1d3a" stroke-width="2.5"/>' +
      '<path d="M-10-12V-18H8V-12" fill="#fff3d6" stroke="#2b1d3a" stroke-width="2.2"/><circle cx="-8" cy="4" r="5" fill="#6d4c41" stroke="#2b1d3a" stroke-width="2.2"/>' +
      '<circle cx="8" cy="4" r="5" fill="#6d4c41" stroke="#2b1d3a" stroke-width="2.2"/></g>';
  }
  function veBanDoTong(than) {
    var d = PL.d, ds = d.vung;
    var duong = 'M70 470 C 40 430, 150 420, 200 400 S 300 370, 250 330 S 70 300, 90 260 S 180 200, 250 180 S 300 110, 210 90 S 150 70, 150 60';
    var cuoi = null;
    ds.forEach(function (v) { if (v.mo) cuoi = v.k; });
    var h = '<svg class="kt-bd" viewBox="0 0 360 500" role="img" aria-label="Bản đồ phiêu lưu">' +
      '<rect width="360" height="500" rx="18" fill="#cdeefd"/>' +
      '<path d="M0 120Q60 100 120 130T260 120T360 130V0H0Z" fill="#b3e5fc"/>' +
      '<path d="M0 500V300Q80 280 160 320T360 300V500Z" fill="#c5e8a4"/>' +
      '<path d="M0 240Q90 200 180 230T360 220V320Q260 300 180 330T0 320Z" fill="#d7f0b8"/>' +
      '<g fill="#fff" opacity=".85"><ellipse cx="60" cy="40" rx="26" ry="9"/><ellipse cx="300" cy="60" rx="30" ry="10"/><ellipse cx="320" cy="250" rx="22" ry="8"/></g>' +
      '<path d="' + duong + '" fill="none" stroke="#fff8ec" stroke-width="14" stroke-linecap="round"/>' +
      '<path d="' + duong + '" fill="none" stroke="#c98a5a" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round"/>';
    ds.forEach(function (v) {
      var p = VT[v.k], xong = v.sao.length, tong = v.tram;
      h += '<g class="kt-bd-vung' + (v.mo ? '' : ' khoa') + '" data-pl-v="' + v.k + '" tabindex="0" role="button" aria-label="' + esc(v.vn) + '" transform="translate(' + p[0] + ' ' + p[1] + ')">' +
        '<g class="kt-bd-hinh">' + veVung(v.k) + '</g>' +
        '<rect x="-72" y="28" width="144" height="34" rx="10" fill="#fff8ec" stroke="#2b1d3a" stroke-width="2.5"/>' +
        '<text x="0" y="42" text-anchor="middle" font-size="12" font-weight="900" fill="#2b1d3a" font-family="Noto Serif SC, serif">' + esc(v.zh) + '</text>' +
        '<text x="0" y="56" text-anchor="middle" font-size="10" font-weight="700" fill="#6b5a77">' + esc(v.vn) + ' · ' + xong + '/' + tong + '</text>' +
        (v.mo ? '' : khoaSvg(48, -20)) + '</g>';
    });
    if (cuoi) h += '<g transform="translate(' + (VT[cuoi][0] + (VT[cuoi][0] < 180 ? 92 : -92)) + ' ' + (VT[cuoi][1] + 46) + ')">' + xeSvg() + '</g>';
    h += '</svg>';
    than.innerHTML = N.htmlGt('pl') + '<div class="kt-pl">' + h +
      '<p class="nt-meo">Chạm một vùng đất để vào. Mỗi trạm 5 câu từ <b>bài em đã học</b>' + (d.nguon ? ' (' + esc(d.nguon) + ')' : '') + ' — đúng 4/5 là qua. ' +
      'Chơi lại trạm đã qua: +' + d.lai.moi + ' xu (hôm nay ' + d.lai.xu + '/' + d.lai.toiDa + ').</p>' +
      (d.coBai ? '' : '<p class="nt-trong">Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi nhé!</p>') + '</div>';
    $all('[data-pl-v]', than).forEach(function (g) {
      var mo = function () {
        var v = ds.filter(function (x) { return x.k === g.getAttribute('data-pl-v'); })[0];
        if (!v.mo) { bao('🔒 ' + v.vn + ': ' + v.ly); N.tieng('sai'); return; }
        PL.v = v.k; N.doc(v.zh); N.veBang();
      };
      g.addEventListener('click', mo);
      g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); mo(); } });
    });
  }
  // Vung dat: con duong uon luon, moi tram 1 cot moc; xe dung o tram ke tiep
  function veVungDat(than) {
    var v = PL.d.vung.filter(function (x) { return x.k === PL.v; })[0];
    var n = v.tram, w = 340, ht = 120 + n * 58, pts = [];
    for (var i = 0; i < n; i++) pts.push([i % 2 ? 250 : 90, ht - 50 - i * 58]);
    var p = 'M' + pts[0][0] + ' ' + (pts[0][1] + 40);
    pts.forEach(function (q, i) { var tr = i ? pts[i - 1] : [q[0], q[1] + 40]; p += ' C ' + tr[0] + ' ' + (tr[1] - 30) + ', ' + q[0] + ' ' + (q[1] + 30) + ', ' + q[0] + ' ' + q[1]; });
    var s = '<svg class="kt-vd" viewBox="0 0 ' + w + ' ' + ht + '" role="img" aria-label="' + esc(v.vn) + '">' +
      '<rect width="' + w + '" height="' + ht + '" rx="18" fill="' + v.mau + '" opacity=".28"/>' +
      '<g transform="translate(' + (w - 70) + ' 56) scale(.8)">' + veVung(v.k) + '</g>' +
      '<path d="' + p + '" fill="none" stroke="#fff8ec" stroke-width="16" stroke-linecap="round"/>' +
      '<path d="' + p + '" fill="none" stroke="#c98a5a" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round"/>';
    var tiep = v.sao.length;
    pts.forEach(function (q, i) {
      var xong = i < tiep, laTiep = i === tiep, sao = v.sao[i] || 0;
      s += '<g class="kt-tram' + (xong ? ' xong' : laTiep ? ' tiep' : ' khoa') + '" data-pl-t="' + i + '" transform="translate(' + q[0] + ' ' + q[1] + ')" tabindex="0" role="button" aria-label="Trạm ' + (i + 1) + '">' +
        '<circle r="22" fill="' + (xong ? '#ffd54f' : laTiep ? '#fff' : '#d7d0de') + '" stroke="#2b1d3a" stroke-width="3"/>' +
        '<text y="7" text-anchor="middle" font-size="19" font-weight="900" fill="#2b1d3a">' + (i === n - 1 ? '🏁' : i + 1) + '</text>' +
        (xong ? '<text y="40" text-anchor="middle" font-size="13">' + '⭐'.repeat(sao) + '</text>' : '') + '</g>';
    });
    var dung = pts[Math.min(tiep, n - 1)];
    s += '<g transform="translate(' + (dung[0] + (dung[0] < 170 ? 44 : -44)) + ' ' + (dung[1] + 4) + ')">' + xeSvg() + '</g></svg>';
    var list = '<ol class="kt-tram-ds">' + v.quaTram.map(function (q, i) {
      var xong = i < tiep, mo = i <= tiep;
      return '<li class="' + (xong ? 'xong' : mo ? 'tiep' : 'khoa') + '"><span class="kt-tram-so">' + (i + 1) + '</span><span><b>Trạm ' + (i + 1) + (i === n - 1 ? ' · đích' : '') + '</b>' +
        '<small>' + (xong ? '⭐'.repeat(v.sao[i]) + ' · chơi lại +' + PL.d.lai.moi + ' xu' : '🎁 Lần đầu: ' + esc(q)) + '</small></span>' +
        '<button type="button" class="nt-nut nt-nut-nho' + (mo ? ' nt-nut-xanh' : '') + '" data-pl-choi="' + i + '"' + (mo ? '' : ' disabled') + '>' + (xong ? 'Chơi lại' : mo ? 'Vào trạm' : '🔒') + '</button></li>';
    }).join('') + '</ol>';
    than.innerHTML = '<div class="kt-pl">' +
      '<div class="kt-pl-dau"><button type="button" class="nt-nut nt-nut-nho" data-pl-ve>← Bản đồ</button><div><b lang="zh">' + esc(v.zh) + '</b> <small>' + esc(v.py) + '</small><br><span>' + esc(v.vn) + ' — ' + esc(v.chu) + '</span></div></div>' +
      s + list + '<p class="nt-meo">' + (v.k === 'de' ? '10 câu tổng hợp mọi dạng — đúng 8/10 là qua (10 = 3 sao).' : '5 câu — đúng 4/5 là qua trạm (5/5 = 3 sao, 4/5 = 2 sao).') +
      (v.xk ? ' 🚚 Đã mở xuất khẩu tới vùng này.' : ' Tới trạm 2 để mở xuất khẩu sang vùng này.') + '</p></div>';
    $('[data-pl-ve]', than).addEventListener('click', function () { PL.v = null; N.veBang(); });
    var choi = function (t) { if (t > tiep) return; batDauTram(v, t); };
    $all('[data-pl-choi]', than).forEach(function (b) { b.addEventListener('click', function () { choi(+b.getAttribute('data-pl-choi')); }); });
    $all('[data-pl-t]', than).forEach(function (g) { g.addEventListener('click', function () { choi(+g.getAttribute('data-pl-t')); }); });
  }
  function batDauTram(v, t) {
    goi('/api/farm/pl/bat', { v: v.k, t: t, nghe: N.xinCauNghe() }).then(function (r) {
      PL.chay = { v: v, t: t, ds: r.ds, can: r.can };
      PL.ket = null;
      N.tieng('mua');
      N.veBang();
    }, loiGoi);
  }
  function veTram(than) {
    var c = PL.chay;
    chayCau(than, {
      st: c, ds: c.ds, url: '/api/farm/pl/tl',
      tren: '<p class="kt-tram-dau"><b lang="zh">' + esc(c.v.zh) + '</b> · Trạm ' + (c.t + 1) + ' · cần đúng ' + c.can + '/' + c.ds.length + '</p>',
      sau: function (r) { if (r.ket) { PL.ket = r.ket; PL.d = r.pl || PL.d; if (r.st) N.nhanTrangThai(r.st); return true; } return false; },
      xong: function () { PL.chay = null; N.veBang(); },
    });
  }
  function tenQuaPl(q) {
    var c = S.cat;
    if (q.loai === 'xu') return { hinh: 'ic-xu', t: q.n + ' xu' };
    if (q.loai === 'hat' || q.loai === 'hatquy') return { hinh: 'sp-' + q.k, t: q.n + ' hạt ' + ((c.CAY[q.k] || {}).vn || '').toLowerCase() + (q.loai === 'hatquy' ? ' quý' : '') };
    var m = c.TT[q.k] || c.CON[q.k] || {};
    return { hinh: q.k, t: (m.vn || '') + ' ' + (m.zh || '') + (q.doc ? ' (độc quyền)' : '') };
  }
  function veKetTram(than) {
    var k = PL.ket, v = PL.d.vung.filter(function (x) { return x.k === k.v; })[0];
    var h = '<div class="nt-chuc kt-ket">';
    if (k.dat) {
      h += '<span class="kt-sao-to">' + '⭐'.repeat(k.sao) + '</span><h2 lang="zh">太棒了！</h2><p>Qua trạm ' + (k.t + 1) + ' · đúng ' + k.dung + '/' + k.so + '</p>';
      if (k.lanDau && k.qua.length) h += '<div class="kt-qua-ds">' + k.qua.map(function (q) { var t = tenQuaPl(q); return '<span>' + img(t.hinh) + esc(t.t) + '</span>'; }).join('') + '</div>';
      else h += '<p>' + (k.xuLai ? 'Chơi lại: +' + k.xuLai + ' xu' : 'Chơi lại: hôm nay đã đủ xu thưởng chơi lại') + '</p>';
      if (k.moiMo === 'het') h += '<p class="kt-ket-to">🏁 Em đã đi hết ' + esc(v.vn) + '!</p>';
      N.tieng('len'); N.doc('太棒了');
    } else {
      h += '<h2>Chưa qua trạm</h2><p>Đúng ' + k.dung + '/' + k.so + ' — cần ' + (v.k === 'de' ? 8 : 4) + '. Ôn lại bài rồi thử lại nhé!</p>';
    }
    h += '<div class="nt-hang-nut"><button type="button" class="nt-nut" data-pl-lai>Chơi lại trạm</button><button type="button" class="nt-nut nt-nut-xanh" data-pl-tiep>Về ' + esc(v.vn) + '</button></div></div>';
    than.innerHTML = h;
    $('[data-pl-lai]', than).addEventListener('click', function () { PL.ket = null; batDauTram(v, k.t); });
    $('[data-pl-tiep]', than).addEventListener('click', function () { PL.ket = null; PL.v = k.v; N.veBang(); });
  }
  N.dangKy('kt-pl', function (than) {
    $('#ntBangTit').textContent = 'Bản đồ phiêu lưu 冒险地图';
    N.datTab([], '');
    if (PL.chay) return veTram(than);
    if (PL.ket) return veKetTram(than);
    if (!PL.d) { than.innerHTML = '<p class="nt-trong">Đang mở bản đồ…</p>'; PL.t = Date.now(); taiPl(); return; }
    if (PL.v) veVungDat(than); else veBanDoTong(than);
    if (Date.now() - (PL.t || 0) > 15000) { PL.t = Date.now(); taiPl(); }
  });

  /* ================= 2) CHO NONG SAN ================= */
  var MK = { d: null, chon: null, n: 1 };
  function taiMk() { return goi('/api/farm/mk').then(function (r) { MK.d = r; veLai('kt-mk'); }, loiGoi); }
  function duongGia(ls) {
    var v = ls.filter(function (x) { return x != null; });
    if (v.length < 2) return '<svg class="kt-spark" viewBox="0 0 70 24"><path d="M2 12H68" stroke="#c9b8d6" stroke-width="2" stroke-dasharray="3 3"/></svg>';
    var mn = Math.min.apply(null, v), mx = Math.max.apply(null, v), r = Math.max(1, mx - mn), d = '', j = 0;
    ls.forEach(function (x, i) { if (x == null) return; d += (j++ ? 'L' : 'M') + (2 + i * 11).toFixed(1) + ' ' + (21 - (x - mn) / r * 18).toFixed(1); });
    var len = v[v.length - 1] >= v[0];
    return '<svg class="kt-spark" viewBox="0 0 70 24" aria-hidden="true"><path d="' + d + '" fill="none" stroke="' + (len ? '#2e7d32' : '#c62828') + '" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/></svg>';
  }
  function muiTen(p) { return p > 0 ? '<em class="kt-len">▲ ' + p + '%</em>' : p < 0 ? '<em class="kt-xuong">▼ ' + (-p) + '%</em>' : '<em class="kt-ngang">— 0%</em>'; }
  function veMk(than) {
    var tab = N.bangDang().tab || 'bang', d = MK.d;
    N.datTab([['bang', '📈 Bảng giá'], ['ban', '💰 Bán'], ['mua', '🛒 Mua']], tab);
    if (!d) { than.innerHTML = '<p class="nt-trong">Đang xem giá…</p>'; return; }
    var dau = N.htmlGt('cho') + '<p class="kt-mk-dau">Chợ ' + esc(d.pham) + ' · giá cập nhật sau ' + dongHo(bayGio() + d.sau) + ' · hạn mức bán hôm nay còn <b>' + d.hm.con + '</b>/' + d.hm.toiDa + ' xu</p>';
    if (tab === 'bang') {
      var dong = function (x) {
        var m = tenSp(x.k);
        return '<li>' + hinhSp(x.k) + '<span class="kt-mk-ten"><b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.vn) + '</small></span>' + duongGia(x.ls) +
          '<span class="kt-mk-gia"><b>' + x.gia + '</b>' + img('ic-xu') + muiTen(x.xu) + '</span></li>';
      };
      var ban = d.ban.slice().sort(function (a, b) { return b.xu - a.xu; });
      than.innerHTML = dau + '<h3 class="kt-h3">Chợ thu mua <small>(giá em bán được / 1 món)</small></h3><ul class="kt-mk-ds">' + ban.map(dong).join('') + '</ul>' +
        '<h3 class="kt-h3">Chợ bán ra</h3><ul class="kt-mk-ds">' + d.mua.map(dong).join('') + '</ul>' +
        '<p class="nt-meo">Giá = giá gốc × hệ số cung cầu (0,5–2 lần). Cả lớp bán nhiều thì giá giảm, mua nhiều thì giá tăng; mỗi giờ cập nhật, mỗi ngày dao động nhẹ, lâu không ai mua bán thì giá dần về giá gốc.</p>';
      return;
    }
    if (tab === 'ban') {
      var co = d.ban.filter(function (x) { return (d.kho[x.k] || 0) > 0; }).sort(function (a, b) { return b.xu - a.xu; });
      than.innerHTML = dau + (co.length ? '<div class="kt-luoi">' + co.map(function (x) {
        var m = tenSp(x.k);
        return '<button type="button" class="kt-o" data-mk-ban="' + x.k + '">' + hinhSp(x.k) + '<b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.vn) + ' · có ' + d.kho[x.k] + '</small>' +
          '<span class="kt-mk-gia"><b>' + x.gia + '</b>' + img('ic-xu') + muiTen(x.xu) + '</span></button>';
      }).join('') + '</div>' : '<p class="nt-trong">Kho chưa có hàng chợ thu mua. Thu hoạch, chăn nuôi, chế biến rồi quay lại nhé!</p>') +
        '<p class="nt-meo">Khi bán phải chọn đúng tên chữ Hán của món hàng — chọn sai chỉ được 70% giá.</p>';
      $all('[data-mk-ban]', than).forEach(function (b) { b.addEventListener('click', function () { moBanMk(b.getAttribute('data-mk-ban')); }); });
      return;
    }
    than.innerHTML = dau + '<p class="kt-mk-dau">Em có <b>' + d.xu + '</b> xu</p><div class="kt-luoi">' + d.mua.map(function (x) {
      var m = tenSp(x.k), hat = x.k.indexOf('hat:') === 0, cay = hat ? S.cat.CAY[x.k.slice(4)] : null, khoa = cay && cay.lv > N.capEm();
      var co = hat ? (d.hat[x.k.slice(4)] || 0) : (d.kho[x.k] || 0);
      return '<div class="kt-o' + (khoa ? ' khoa' : '') + '">' + hinhSp(x.k) + '<b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.vn) + ' · có ' + co + '</small>' +
        '<span class="kt-mk-gia"><b>' + x.gia + '</b>' + img('ic-xu') + muiTen(x.xu) + '</span>' +
        (khoa ? '<span class="kt-khoa">Cấp ' + cay.lv + '</span>' : '<div class="kt-mua-hang"><button type="button" class="nt-nut nt-nut-nho" data-mk-mua="' + x.k + '" data-n="1">Mua 1</button><button type="button" class="nt-nut nt-nut-nho nt-nut-vang" data-mk-mua="' + x.k + '" data-n="5">Mua 5</button></div>') + '</div>';
    }).join('') + '</div><p class="nt-meo">Hạt giống mua ở chợ vào túi hạt — gieo không tốn xu. Đường, muối dùng trong nhà máy; thức ăn chăn nuôi 饲料: khi cho vật nuôi ăn (trả lời câu hỏi) thì dùng kèm 1 bao để được thêm 1 sản phẩm. Hàng mua ở chợ không bán lại được.</p>';
    $all('[data-mk-mua]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-mk-mua'), n = +b.getAttribute('data-n');
        b.disabled = true;
        goi('/api/farm/mk/mua', { k: k, n: n }).then(function (r) {
          N.nhanTrangThai(r.st); N.tieng('mua'); bao('Đã mua ' + n + ' ' + tenSp(k).vn.toLowerCase() + ' · −' + r.xu + ' xu'); taiMk();
        }, function (e) { b.disabled = false; loiGoi(e); });
      });
    });
  }
  function moBanMk(k) {
    var d = MK.d, x = d.ban.filter(function (y) { return y.k === k; })[0], m = tenSp(k), co = d.kho[k] || 0;
    var maxHm = Math.max(1, Math.floor(d.hm.con / x.gia)), max = Math.max(1, Math.min(co, maxHm));
    // 4 lua chon ten chu Han (1 dung)
    var khac = d.ban.map(function (y) { return tenSp(y.k).zh; }).filter(function (z, i, a) { return z !== m.zh && a.indexOf(z) === i; });
    for (var i = khac.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = khac[i]; khac[i] = khac[j]; khac[j] = t; }
    var lua = khac.slice(0, 3).concat(m.zh).sort(function () { return Math.random() - 0.5; });
    var n = Math.min(max, co);
    var than = $('#ntBangThan');
    than.innerHTML = '<div class="kt-ban">' + hinhSp(k) + '<p>Bán <b>' + esc(m.vn) + '</b> cho chợ · ' + x.gia + ' xu / món ' + muiTen(x.xu) + '</p>' +
      soLuong('mk', n, max) + '<p class="kt-ban-tong">Thành tiền: <b data-tong>' + n * x.gia + '</b> xu' + (maxHm < co ? ' <small>(hạn mức còn ' + d.hm.con + ' xu)</small>' : '') + '</p>' +
      '<p><b>Món này tên chữ Hán là gì?</b></p><div class="nt-ch-lua zh">' + lua.map(function (z) { return '<button type="button" lang="zh" data-goi="' + esc(z) + '">' + esc(z) + '</button>'; }).join('') + '</div>' +
      '<button type="button" class="nt-nut nt-nut-nho" data-mk-thoi>← Quay lại</button></div>';
    $all('img', than).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    ganSoLuong(than, max, function (v) { n = v; $('[data-tong]', than).textContent = v * x.gia; });
    $('[data-mk-thoi]', than).addEventListener('click', function () { N.veBang(); });
    $all('[data-goi]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        $all('[data-goi]', than).forEach(function (y) { y.disabled = true; });
        var g = b.getAttribute('data-goi');
        b.classList.add(g === m.zh ? 'dung' : 'sai');
        goi('/api/farm/mk/ban', { k: k, n: n, goi: g }).then(function (r) {
          N.nhanTrangThai(r.st); N.tieng(r.goiDung ? 'xu' : 'sai'); N.doc(m.zh);
          bao((r.goiDung ? '✔ ' : '✘ Sai tên — chỉ được 70% giá. ') + 'Đã bán ' + r.n + ' ' + m.vn.toLowerCase() + ' · +' + r.xu + ' xu' + (r.catBot ? ' (hạn mức chỉ đủ ' + r.n + ' món)' : ''));
          taiMk();
        }, function (e) { loiGoi(e); N.veBang(); });
      });
    });
  }
  N.dangKy('kt-mk', function (than) {
    $('#ntBangTit').textContent = 'Chợ nông sản 农贸市场';
    if (khoaTn(than, 'cho')) { N.datTab([], ''); return; }
    veMk(than);
    if (!MK.d || !MK.t || Date.now() - MK.t > 4000) { MK.t = Date.now(); taiMk(); }
  });

  /* ================= 3) CUA HANG RIENG ================= */
  var TM = { d: null, them: null };
  function taiTiem(id) {
    MK.idTiem = id || '';
    return goi('/api/farm/tiem' + (id ? '?id=' + encodeURIComponent(id) : '')).then(function (r) { TM.d = r; TM.t = Date.now(); veLai('kt-tiem'); }, loiGoi);
  }
  function veTiem(than) {
    var tab = N.bangDang().tab || 'cac', d = TM.d, motBan = tab.indexOf('ban:') === 0;
    N.datTab(motBan ? [] : [['cac', '🏘 Tiệm các bạn'], ['em', '🏪 Tiệm của em']], tab);
    if (!d || (motBan && MK.idTiem !== tab.slice(4)) || (!motBan && MK.idTiem)) { than.innerHTML = '<p class="nt-trong">Đang mở tiệm…</p>'; return; }
    if (tab === 'em') return veTiemEm(than);
    var html = (motBan ? '' : '<p class="kt-mk-dau">Thị trấn ' + esc(d.pham) + ' · hôm nay em còn mua được <b>' + d.muaCon + '</b>/' + d.muaToiDa + ' lần</p>');
    html += d.ds.length ? d.ds.map(function (b) {
      return '<section class="kt-tiem"><header>' + (window.NhanVat && b.av ? '<span class="kt-av">' + NhanVat.svg(b.av) + '</span>' : '🏪') +
        '<b>Tiệm của ' + esc(b.ten) + '</b><small>cấp ' + b.lv + '</small></header><div class="kt-luoi">' + b.ds.map(function (o) {
          var m = tenSp(o.k), g = d.gia[o.k] || 0, ss = g ? Math.round((o.gia / o.n / g - 1) * 100) : 0;
          return '<div class="kt-o">' + hinhSp(o.k) + '<b lang="zh">' + esc(m.zh) + ' ×' + o.n + '</b><small>' + esc(m.vn) + '</small>' +
            '<span class="kt-mk-gia"><b>' + o.gia + '</b>' + img('ic-xu') + '<em class="' + (ss > 0 ? 'kt-len' : ss < 0 ? 'kt-xuong' : 'kt-ngang') + '">' + (ss > 0 ? '+' : '') + ss + '% chợ</em></span>' +
            '<small>còn ' + dongHo(o.het) + '</small><button type="button" class="nt-nut nt-nut-nho nt-nut-vang" data-tiem-mua="' + b.id + '" data-lid="' + o.lid + '"' + (d.muaCon < 1 ? ' disabled' : '') + '>Mua</button></div>';
        }).join('') + '</div></section>';
    }).join('') : '<p class="nt-trong">' + (motBan ? 'Bạn này chưa bày hàng ở tiệm.' : 'Chưa bạn nào bày hàng. ' + (N.moTn('tiem') ? 'Mở tiệm của em ở tab “Tiệm của em” nhé!' : 'Lên cấp ' + S.cat.MO_TN.tiem.lv + ' để tự mở tiệm của em!')) + '</p>';
    html += '<p class="nt-meo">Giá ở tiệm chỉ được lệch tối đa ±30% giá chợ. Chợ thu phí 5% của người bán. Mỗi ngày mỗi em mua ở tiệm tối đa ' + d.muaToiDa + ' lần.</p>';
    than.innerHTML = html;
    $all('[data-tiem-mua]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        goi('/api/farm/tiem/mua', { id: b.getAttribute('data-tiem-mua'), lid: +b.getAttribute('data-lid') }).then(function (r) {
          N.nhanTrangThai(r.st); N.tieng('mua'); var m = tenSp(r.k); N.doc(m.zh);
          bao('Đã mua ' + r.n + ' ' + m.vn.toLowerCase() + ' · −' + r.tra + ' xu'); taiTiem(motBan ? tab.slice(4) : '');
        }, function (e) { b.disabled = false; loiGoi(e); taiTiem(motBan ? tab.slice(4) : ''); });
      });
    });
  }
  function veTiemEm(than) {
    var d = TM.d, em = d.em;
    if (!em.mo) { than.innerHTML = N.htmlKhoaTn('tiem'); return; }
    var dang = em.ds.filter(function (o) { return o.conHan; });
    var html = N.htmlGt('tiem') + '<p class="kt-mk-dau">Tiệm của em: <b>' + dang.length + '/' + em.so + '</b> ô · hàng bày 48 giờ, chưa ai mua thì tự về kho</p><div class="kt-luoi">' +
      dang.map(function (o) {
        var m = tenSp(o.k);
        return '<div class="kt-o">' + hinhSp(o.k) + '<b lang="zh">' + esc(m.zh) + ' ×' + o.n + '</b><span class="kt-mk-gia"><b>' + o.gia + '</b>' + img('ic-xu') + '</span>' +
          '<small>còn ' + dongHo(o.het) + '</small><button type="button" class="nt-nut nt-nut-nho" data-tiem-go="' + o.lid + '">Cất về kho</button></div>';
      }).join('') + '</div>';
    var hang = Object.keys(d.gia).filter(function (k) { return (d.kho[k] || 0) > 0; });
    if (dang.length < em.so && hang.length) {
      var k0 = TM.them && hang.indexOf(TM.them.k) >= 0 ? TM.them.k : hang[0];
      TM.them = TM.them && TM.them.k === k0 ? TM.them : { k: k0, n: 1, gia: d.gia[k0] };
      var t = TM.them, max = Math.min(20, d.kho[t.k] || 1);
      var mn = Math.max(1, Math.round(d.gia[t.k] * t.n * (1 - d.bien))), mx = Math.max(1, Math.round(d.gia[t.k] * t.n * (1 + d.bien)));
      t.gia = Math.max(mn, Math.min(mx, t.gia || d.gia[t.k] * t.n));
      html += '<section class="kt-bay"><h3 class="kt-h3">Bày hàng mới</h3><div class="kt-bay-chon">' + hang.map(function (k) {
        return '<button type="button" class="' + (k === t.k ? 'bat' : '') + '" data-bay-k="' + k + '" title="' + esc(tenSp(k).vn) + '">' + hinhSp(k) + '<small>' + d.kho[k] + '</small></button>';
      }).join('') + '</div>' +
        '<p>' + tenHtml(tenSp(t.k)) + ' · giá chợ <b>' + d.gia[t.k] + '</b> xu/món</p>' + soLuong('tiem', t.n, max) +
        '<label class="kt-gia-keo"><span>Giá cả ô: <output data-gia>' + t.gia + '</output> xu</span><input type="range" min="' + mn + '" max="' + mx + '" value="' + t.gia + '" data-gia-keo></label>' +
        '<p class="kt-nho">Khoảng cho phép: ' + mn + '–' + mx + ' xu (±30% giá chợ). Bán được em nhận ' + '<b data-nhan>' + (t.gia - Math.max(1, Math.ceil(t.gia * d.phi))) + '</b> xu (trừ phí 5%).</p>' +
        '<button type="button" class="nt-nut nt-nut-xanh" data-bay-gui>🏪 Bày lên tiệm</button></section>';
    } else if (!hang.length) html += '<p class="nt-trong">Kho chưa có hàng để bày.</p>';
    than.innerHTML = html;
    $all('img', than).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    $all('[data-tiem-go]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        goi('/api/farm/tiem/go', { lid: +b.getAttribute('data-tiem-go') }).then(function (r) { N.nhanTrangThai(r.st); bao('Đã cất hàng về kho.'); taiTiem(); }, loiGoi);
      });
    });
    $all('[data-bay-k]', than).forEach(function (b) { b.addEventListener('click', function () { var k = b.getAttribute('data-bay-k'); TM.them = { k: k, n: 1, gia: d.gia[k] }; veTiemEm(than); }); });
    var t2 = TM.them;
    if (!t2 || !$('[data-bay-gui]', than)) return;
    ganSoLuong(than, Math.min(20, d.kho[t2.k] || 1), function (n) { t2.n = n; t2.gia = d.gia[t2.k] * n; veTiemEm(than); });
    var keo = $('[data-gia-keo]', than);
    keo.addEventListener('input', function () {
      t2.gia = +keo.value; $('[data-gia]', than).textContent = t2.gia;
      $('[data-nhan]', than).textContent = t2.gia - Math.max(1, Math.ceil(t2.gia * d.phi));
    });
    $('[data-bay-gui]', than).addEventListener('click', function () {
      goi('/api/farm/tiem/bay', { k: t2.k, n: t2.n, gia: t2.gia }).then(function (r) {
        N.nhanTrangThai(r.st); N.tieng('mua'); bao('Đã bày ' + t2.n + ' ' + tenSp(t2.k).vn.toLowerCase() + ' lên tiệm!'); TM.them = null; taiTiem();
      }, loiGoi);
    });
  }
  N.dangKy('kt-tiem', function (than) {
    $('#ntBangTit').textContent = 'Cửa hàng riêng 小店';
    var tab = N.bangDang().tab || 'cac', id = tab.indexOf('ban:') === 0 ? tab.slice(4) : '';
    veTiem(than);
    if (!TM.d || MK.idTiem !== id || Date.now() - (TM.t || 0) > 4000) taiTiem(id);
  });

  /* ================= 4) NHA MAY CHE BIEN ================= */
  var XG = { d: null, cau: null };
  function taiXg() { return goi('/api/farm/xuong').then(function (r) { XG.d = r; veLai('kt-xuong'); capNhatPhu(); }, loiGoi); }
  function dongCan(can) {
    return Object.keys(can).map(function (k) {
      var co = (S.st.kho || {})[k] || 0, du = co >= can[k];
      return '<span class="kt-can' + (du ? '' : ' thieu') + '" title="' + esc(sp(k).vn) + ' — cần ' + can[k] + ', có ' + co + '">' + img('sp-' + k) + '×' + can[k] + '<small>(có ' + co + ')</small></span>';
    }).join('');
  }
  function veXg(than) {
    var d = XG.d;
    if (XG.cau) {
      var c = XG.cau;
      chayCau(than, {
        st: c, ds: c.ds, url: '/api/farm/xuong/nhanhtl',
        tren: '<p class="kt-tram-dau">⚡ Làm nhanh: trả lời đúng ' + c.ds.length + ' câu, mẻ hàng xong ngay!</p>',
        sau: function (r) {
          if (!r.xong) return false;
          if (r.xuong) XG.d = r.xuong;
          if (r.st) N.nhanTrangThai(r.st);
          bao(r.thanh ? '⚡ Mẻ hàng đã xong!' : 'Chưa đúng — đợi 3 phút rồi thử làm nhanh lại nhé.');
          return true;
        },
        xong: function () { XG.cau = null; N.veBang(); },
      });
      return;
    }
    if (!d) { than.innerHTML = '<p class="nt-trong">Đang mở nhà máy…</p>'; return; }
    var html = N.htmlGt('xuong') + '<p class="kt-mk-dau">Mỗi nhà máy xếp được ' + d.hang + ' mẻ · làm nhanh còn ' + d.nhanh.con + '/' + d.nhanh.toiDa + ' lần hôm nay</p>';
    d.ds.forEach(function (x) {
      html += '<section class="kt-xg' + (x.co ? '' : ' chua') + '"><header>' + img('xg-' + x.b) + '<span>' + tenHtml(x) + '</span>' +
        (x.co ? (x.q.some(function (j) { return j.xong; }) ? '<button type="button" class="nt-nut nt-nut-xanh nt-nut-nho" data-xg-thu="' + x.b + '">📦 Thu hàng</button>' : '')
          : x.khoa ? '<span class="kt-khoa">Cấp ' + x.lv + '</span>' : '<button type="button" class="nt-nut nt-nut-vang nt-nut-nho" data-xg-xay="' + x.b + '">' + img('ic-xu') + x.xu + ' · Xây</button>') + '</header>';
      if (x.co) {
        html += '<ul class="kt-q">' + (x.q.length ? x.q.map(function (j) {
          var m = sp(j.r);
          return '<li>' + img('sp-' + j.r) + '<span><b><span lang="zh">' + esc(m.zh) + '</span> ' + esc(m.vn) + '</b>' +
            '<span class="kt-thanh"><i data-tien data-bd="' + j.bd + '" data-kt="' + j.kt + '"></i></span>' +
            (j.xong ? '<small class="kt-xong">✔ Xong — bấm Thu hàng</small>' : j.chay ? '<small>còn ' + dongHo(j.kt) + '</small>' : '<small>đang chờ · bắt đầu sau ' + dongHo(j.bd) + '</small>') + '</span>' +
            (j.chay ? '<button type="button" class="nt-nut nt-nut-nho" data-xg-nhanh="' + x.b + '" data-j="' + j.id + '"' + (j.cho || d.nhanh.con < 1 ? ' disabled' : '') + '>⚡ Làm nhanh</button>' : '') +
            (!j.xong && !j.chay ? '<button type="button" class="nt-nut nt-nut-nho" data-xg-huy="' + x.b + '" data-j="' + j.id + '">Huỷ</button>' : '') + '</li>';
        }).join('') : '<li class="kt-q-trong">Nhà máy đang rảnh — chọn món để làm.</li>') + '</ul>';
        html += '<div class="kt-ct">' + x.r.map(function (r) {
          var m = sp(r.k);
          return '<div class="kt-ct-o">' + img('sp-' + r.k) + '<b lang="zh">' + esc(m.zh) + '</b><small>' + esc(m.vn) + ' · ' + N.thoiLuong(r.phut) + ' · bán ~' + r.ban + ' xu</small>' +
            '<div class="kt-can-ds">' + dongCan(r.can) + '</div><button type="button" class="nt-nut nt-nut-nho nt-nut-xanh" data-xg-lam="' + x.b + '" data-r="' + r.k + '"' + (x.q.length >= d.hang ? ' disabled' : '') + '>Làm</button></div>';
        }).join('') + '</div>';
      } else html += '<p class="kt-nho">Làm: ' + x.r.map(function (r) { return esc(sp(r.k).vn); }).join(', ') + '</p>';
      html += '</section>';
    });
    html += '<p class="nt-meo">Hàng chế biến bán đắt hơn, cần cho nhà hàng (bánh mì phô mai, sữa chua trái cây), đơn hàng và xuất khẩu. Làm nhanh không tốn xu — chỉ cần trả lời đúng câu hỏi từ bài em đã học.</p>';
    than.innerHTML = html;
    var gui = function (body, ok) { return goi('/api/farm/xuong', body).then(function (r) { XG.d = r.xuong; N.nhanTrangThai(r.st); if (ok) ok(r); N.veBang(); capNhatPhu(); }, loiGoi); };
    $all('[data-xg-xay]', than).forEach(function (b) { b.addEventListener('click', function () { gui({ a: 'xay', b: b.getAttribute('data-xg-xay') }, function () { N.tieng('len'); bao('🏭 Đã xây xong nhà máy!'); }); }); });
    $all('[data-xg-lam]', than).forEach(function (b) { b.addEventListener('click', function () { var r = b.getAttribute('data-r'); gui({ a: 'lam', b: b.getAttribute('data-xg-lam'), r: r }, function () { N.tieng('mua'); N.doc(sp(r).zh); bao('Đã cho vào máy: ' + sp(r).vn); }); }); });
    $all('[data-xg-thu]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        gui({ a: 'thu', b: b.getAttribute('data-xg-thu') }, function (r) {
          N.tieng('thu');
          bao('📦 Thu ' + Object.keys(r.ra).map(function (k) { return r.ra[k] + ' ' + sp(k).vn.toLowerCase(); }).join(', ') + ' vào kho');
        });
      });
    });
    $all('[data-xg-huy]', than).forEach(function (b) { b.addEventListener('click', function () { gui({ a: 'huy', b: b.getAttribute('data-xg-huy'), j: +b.getAttribute('data-j') }, function () { bao('Đã huỷ mẻ, nguyên liệu về kho.'); }); }); });
    $all('[data-xg-nhanh]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        goi('/api/farm/xuong/nhanh', { b: b.getAttribute('data-xg-nhanh'), j: +b.getAttribute('data-j') }).then(function (r) { XG.cau = { ds: r.ds }; N.veBang(); }, function (e) { b.disabled = false; loiGoi(e); });
      });
    });
  }
  N.dangKy('kt-xuong', function (than) {
    $('#ntBangTit').textContent = 'Nhà máy chế biến 加工厂';
    N.datTab([], '');
    if (khoaTn(than, 'xuong')) return;
    veXg(than);
    if (!XG.cau && (!XG.d || Date.now() - (XG.t || 0) > 4000)) { XG.t = Date.now(); taiXg(); }
  });

  /* ================= 5) NHAN CONG ================= */
  var NC = { d: null };
  function taiNc() { return goi('/api/farm/nc').then(function (r) { NC.d = r; NC.t = Date.now(); veLai('kt-nc'); }, loiGoi); }
  var TT_NC = { lam: ['đang làm', 'lam'], nghi: ['nghỉ phép', 'nghi'], no: ['không có lương', 'no'], '': ['chờ em học đủ sao', 'nghi'] };
  function veNc(than) {
    var d = NC.d;
    if (!d) { than.innerHTML = '<p class="nt-trong">Đang gọi nhân công…</p>'; return; }
    var hocDu = d.homNay >= d.sao;
    var html = N.htmlGt('nc') + '<div class="kt-nc-hoc ' + (hocDu ? 'du' : '') + '">' + (hocDu ? '✔ Hôm nay em đã học ' + d.homNay + ' sao — nhân công đi làm.' :
      '📚 Hôm nay em mới học ' + d.homNay + '/' + d.sao + ' sao — nhân công đang nghỉ phép (không lấy lương). Học đủ ' + d.sao + ' sao để họ đi làm!') + '</div>';
    html += '<div class="kt-nc-ds">' + d.ds.map(function (w) {
      var vt = d.vt[w.vt], st = TT_NC[w.hom.tt] || TT_NC[''], vui = Math.max(0, Math.min(100, w.vui || 0));
      var av = '';
      if (window.NhanVat) { var cf = NhanVat.macDinh(w.av); cf = NhanVat.doiGioiTinh(cf, /^(大壮|小虎|老陈|阿福)$/.test(w.ten.zh) ? 'nam' : ''); cf.mu = w.vt === 'thu' ? 'nonla' : w.vt === 'van' ? 'luoi' : cf.mu; av = NhanVat.svg(cf); }
      return '<section class="kt-nc"><span class="kt-av to">' + av + '</span><div><b lang="zh">' + esc(w.ten.zh) + '</b> <small>' + esc(w.ten.py) + '</small>' +
        '<p>' + esc(vt.vn) + ' <span lang="zh">' + esc(vt.zh) + '</span> · ' + vt.luong + ' xu/ngày học</p>' +
        '<p class="kt-nc-tt ' + st[1] + '">' + st[0] + '</p>' +
        '<div class="kt-vui" title="Tâm trạng ' + vui + '/100"><span>' + (vui >= 60 ? '😊' : vui >= 30 ? '😐' : '😟') + '</span><i style="width:' + vui + '%"></i></div>' +
        '<p class="kt-nho">Hôm nay: ' + (w.vt === 'thu' ? w.hom.thu + ' ô thu hoạch' : w.vt === 'chan' ? w.hom.nhat + ' sản phẩm' : w.hom.xg + ' mẻ hàng · ' + w.hom.giao + ' đơn') + '</p></div>' +
        '<button type="button" class="nt-nut nt-nut-nho" data-nc-cho="' + w.id + '">Cho nghỉ</button></section>';
    }).join('') + '</div>';
    if (d.ds.length < d.toiDa) {
      html += '<h3 class="kt-h3">Thuê thêm (' + d.ds.length + '/' + d.toiDa + ' người · tiền thuê ' + d.thue + ' xu)</h3><div class="kt-luoi">' + Object.keys(d.vt).map(function (k) {
        var v = d.vt[k];
        return '<div class="kt-o kt-thue"><span class="kt-nc-ic">' + (k === 'thu' ? '🌾' : k === 'chan' ? '🐄' : '🚚') + '</span><b>' + esc(v.vn) + '</b><small lang="zh">' + esc(v.zh) + ' ' + esc(v.py) + '</small>' +
          '<small>' + esc(v.viec) + '</small><small>Lương ' + v.luong + ' xu / ngày em học</small><button type="button" class="nt-nut nt-nut-nho nt-nut-xanh" data-nc-thue="' + k + '">Thuê</button></div>';
      }).join('') + '</div>';
    } else html += '<p class="kt-nho">Cấp ' + N.capEm() + ' thuê tối đa ' + d.toiDa + ' người (cấp 7: 1 · cấp 9: 2 · cấp 11: 3).</p>';
    html += '<h3 class="kt-h3">Sổ công việc</h3><ul class="kt-log">' + (d.log.length ? d.log.map(function (e) {
      var t = new Date(e.t + 7 * 3600000);
      return '<li><time>' + ('0' + t.getUTCHours()).slice(-2) + ':' + ('0' + t.getUTCMinutes()).slice(-2) + ' ' + t.getUTCDate() + '/' + (t.getUTCMonth() + 1) + '</time> <b lang="zh">' + esc(e.ai) + '</b> ' + esc(e.s) + '</li>';
    }).join('') : '<li>Chưa có việc gì.</li>') + '</ul>' +
      '<p class="nt-meo">Nhân công không tưới nước, không cho vật nuôi ăn — đó là việc của em (trả lời câu hỏi). Không trả được lương thì họ buồn; buồn quá sẽ xin nghỉ.</p>';
    than.innerHTML = html;
    $all('[data-nc-thue]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        goi('/api/farm/nc', { a: 'thue', vt: b.getAttribute('data-nc-thue') }).then(function (r) { NC.d = r.nc; N.nhanTrangThai(r.st); N.tieng('len'); bao('Đã thuê nhân công mới!'); N.veBang(); }, function (e) { b.disabled = false; loiGoi(e); });
      });
    });
    $all('[data-nc-cho]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (!confirm('Cho người này nghỉ việc? (tiền thuê không hoàn lại)')) return;
        goi('/api/farm/nc', { a: 'cho', id: +b.getAttribute('data-nc-cho') }).then(function (r) { NC.d = r.nc; N.nhanTrangThai(r.st); N.veBang(); }, loiGoi);
      });
    });
  }
  N.dangKy('kt-nc', function (than) {
    $('#ntBangTit').textContent = 'Nhân công 雇工';
    N.datTab([], '');
    if (khoaTn(than, 'nc')) return;
    veNc(than);
    if (!NC.d || Date.now() - (NC.t || 0) > 4000) taiNc();
  });

  /* ================= 6) XUAT KHAU ================= */
  var XK = { d: null, cau: null };
  function taiXk() { return goi('/api/farm/xk').then(function (r) { XK.d = r; XK.t = Date.now(); veLai('kt-xk'); capNhatPhu(); }, loiGoi); }
  function veXk(than) {
    var d = XK.d;
    if (XK.cau) {
      var c = XK.cau, dn = c.don;
      chayCau(than, {
        st: c, ds: c.ds, url: '/api/farm/xk/tl',
        tren: '<div class="kt-don">' + hinhSp(dn.k) + '<div><b lang="zh">' + esc(dn.zh) + '</b><small>' + esc(dn.py) + '</small><span>' + esc(dn.vn) + '</span></div></div>' +
          '<p class="kt-tram-dau">📋 Giấy tờ xuất khẩu: trả lời đúng cả ' + c.ds.length + ' câu để thông quan</p>',
        sau: function (r) {
          if (!r.xong) return false;
          if (r.xk) XK.d = r.xk;
          if (r.st) N.nhanTrangThai(r.st);
          if (r.gui) { N.tieng('len'); bao('🚚 Hàng đã lên đường!'); } else bao('Giấy tờ chưa đúng — đợi 1 phút rồi làm lại nhé.');
          return true;
        },
        xong: function () { XK.cau = null; N.veBang(); },
      });
      return;
    }
    if (!d) { than.innerHTML = '<p class="nt-trong">Đang mở bến xuất hàng…</p>'; return; }
    var now = bayGio();
    var html = N.htmlGt('xk') + '<p class="kt-mk-dau">Tuần này còn <b>' + d.conTuan + '</b>/' + d.toiDaTuan + ' chuyến · tối đa ' + d.dangToiDa + ' chuyến trên đường · tiền hàng tính vào hạn mức bán ngày</p>';
    if (d.gui.length) {
      html += '<h3 class="kt-h3">Hàng đang đi</h3><ul class="kt-q">' + d.gui.map(function (g) {
        var m = sp(g.k), v = (S.cat.PL_VUNG || []).filter(function (x) { return x.k === g.v; })[0] || {};
        return '<li>' + hinhSp(g.k) + '<span><b>' + g.n + ' ' + esc(m.vn.toLowerCase()) + ' → <span lang="zh">' + esc(v.zh || '') + '</span> ' + esc(v.vn || '') + ' ' + (g.xe === 'thuyen' ? '⛵' : '🚚') + '</b>' +
          '<span class="kt-thanh"><i data-tien data-bd="' + g.bd + '" data-kt="' + g.den + '"></i></span>' +
          (g.toi ? '<small class="kt-xong">✔ Đã tới · ' + (g.xu - g.nhan) + ' xu chờ nhận' + (g.nhan ? ' (đã nhận ' + g.nhan + ')' : '') + '</small>' : '<small>còn ' + dongHo(g.den) + ' · ' + g.xu + ' xu</small>') + '</span>' +
          (g.toi ? '<button type="button" class="nt-nut nt-nut-nho nt-nut-xanh" data-xk-nhan="' + esc(g.id) + '">Nhận tiền</button>' : '') + '</li>';
      }).join('') + '</ul>';
    }
    d.vung.forEach(function (v) {
      html += '<section class="kt-xk' + (v.toi ? '' : ' khoa') + '" style="--mau:' + v.mau + '"><header><b lang="zh">' + esc(v.zh) + '</b><span>' + esc(v.vn) + '</span>' +
        (v.toi ? '' : '<small>🔒 Tới trạm 2 của vùng này trên Bản đồ phiêu lưu</small>') + '</header>';
      if (v.toi) html += '<div class="kt-luoi">' + v.hd.map(function (hd) {
        var m = sp(hd.k), du = hd.co >= hd.n;
        return '<div class="kt-o' + (hd.da ? ' da' : '') + '">' + hinhSp(hd.k) + '<b lang="zh">' + esc(m.zh) + ' ×' + hd.n + '</b><small>' + esc(m.vn) + ' · có ' + hd.co + '</small>' +
          '<span class="kt-mk-gia"><b>' + hd.xu + '</b>' + img('ic-xu') + '<em class="kt-len">+' + Math.round((hd.tl - 1) * 100) + '%</em></span>' +
          '<small>' + (hd.xe === 'thuyen' ? '⛵ thuyền' : '🚚 xe tải') + ' · ' + hd.gio + ' giờ' + (hd.gc ? ' · ⭐ hàng chế biến' : '') + '</small>' +
          (hd.da ? '<span class="kt-xong">✔ Đã giao tuần này</span>' : '<button type="button" class="nt-nut nt-nut-nho' + (du ? ' nt-nut-vang' : '') + '" data-xk-gui="' + v.k + '" data-i="' + hd.i + '"' + (du && d.conTuan > 0 ? '' : ' disabled') + '>' + (du ? 'Xuất hàng' : 'Thiếu hàng') + '</button>') + '</div>';
      }).join('') + '</div>';
      html += '</section>';
    });
    html += '<p class="nt-meo">Giấy tờ là 2 câu tiếng Trung đúng kiểu của vùng đất (pinyin, từ vựng, hội thoại, ngữ pháp…) lấy từ bài em đã học. Hạn mức bán hết thì phần tiền còn lại nhận tiếp hôm sau.</p>';
    than.innerHTML = html;
    $all('[data-xk-gui]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        goi('/api/farm/xk/cau', { v: b.getAttribute('data-xk-gui'), i: +b.getAttribute('data-i'), nghe: N.xinCauNghe() }).then(function (r) {
          XK.cau = { don: r.don, ds: r.ds }; N.doc(r.don.zh); N.veBang();
        }, function (e) { b.disabled = false; loiGoi(e); });
      });
    });
    $all('[data-xk-nhan]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        goi('/api/farm/xk/nhan', { id: b.getAttribute('data-xk-nhan') }).then(function (r) {
          XK.d = r.xk; N.nhanTrangThai(r.st); N.tieng('xu'); bao('+' + r.xu + ' xu tiền hàng' + (r.con > 0 ? ' · còn ' + r.con + ' xu nhận tiếp khi có hạn mức' : '')); N.veBang(); capNhatPhu();
        }, loiGoi);
      });
    });
  }
  N.dangKy('kt-xk', function (than) {
    $('#ntBangTit').textContent = 'Xuất khẩu 出口';
    N.datTab([], '');
    if (khoaTn(than, 'xk')) return;
    veXk(than);
    if (!XK.cau && (!XK.d || Date.now() - (XK.t || 0) > 4000)) taiXk();
  });

  /* ================= 7) DAU GIA ================= */
  var DG = { d: null, hen: 0, dang: {} };
  function taiDg() {
    return goi('/api/farm/dg').then(function (r) {
      DG.d = r; DG.t = Date.now();
      (r.tb || []).forEach(baoDg);
      veLai('kt-dg');
    }, loiGoi);
  }
  function tenVat(v) {
    var c = S.cat;
    if (v.loai === 'hat') { var x = c.CAY[v.k] || {}; return { hinh: 'sp-' + v.k, zh: (x.zh || '') + '种子', vn: v.n + ' hạt ' + (x.vn || '').toLowerCase() + ' quý' }; }
    var m = c.CON[v.k] || c.TT[v.k] || {};
    return { hinh: v.k, zh: m.zh || '', vn: (m.vn || '') + (v.loai === 'con' ? ' (vật nuôi)' : ' (trang trí)') };
  }
  function baoDg(e) {
    if (e.loai === 'xu') bao('🔨 ' + (e.ly || 'Đấu giá') + ': +' + e.xu + ' xu');
    else bao('🔨 ' + (e.ly || 'Đấu giá') + ': ' + tenVat(e.vat).vn);
  }
  function veDg(than) {
    var d = DG.d;
    if (!d) { than.innerHTML = '<p class="nt-trong">Đang vào hội trường đấu giá…</p>'; return; }
    var t = bayGio();
    var html = N.htmlGt('dg') + '<p class="kt-mk-dau">Đấu giá ' + esc(d.pham) + ' · em có <b>' + d.xu + '</b> xu · đang giữ giá cao nhất ' + d.giu + '/' + d.giuToiDa + ' lô</p>';
    if (!d.mo) html += N.htmlKhoaTn('dg');
    html += '<div class="kt-dg-ds">' + d.ds.map(function (x) {
      var v = tenVat(x.vat), dong = x.xong || x.het <= t;
      return '<section class="kt-dg' + (dong ? ' dong' : '') + (x.cao && x.cao.la ? ' em' : '') + '">' + img(v.hinh) +
        '<div class="kt-dg-chu"><b lang="zh">' + esc(v.zh) + '</b><span>' + esc(v.vn) + '</span><small>Người bán: ' + esc(x.nguoiBan) + (x.he ? '' : ' · phí 5%') + '</small>' +
        '<p class="kt-dg-gia">' + (x.cao ? 'Giá cao nhất <b>' + x.cao.xu + '</b> xu · ' + esc(x.cao.ten) : 'Giá khởi điểm <b>' + x.gia + '</b> xu') + '</p>' +
        '<p class="kt-dg-gio">' + (dong ? (x.cao ? '🔨 Đã chốt — ' + esc(x.cao.ten) + ' thắng' : '🔨 Đã đóng — không ai trả giá') : '⏳ Còn ' + '<span data-het="' + x.het + '" data-xong="đang chốt…">' + N.conLai(x.het - t) + '</span>') + '</p></div>' +
        (dong || !d.mo || x.cuaEm ? (x.cuaEm && !dong ? '<span class="kt-nho">Món của em</span>' : '') : '<div class="kt-dg-dat"><input type="number" inputmode="numeric" min="' + x.toiThieu + '" step="' + x.buoc + '" value="' + (DG.dang[x.id] || x.toiThieu) + '" data-dg-xu="' + x.id + '" aria-label="Số xu trả giá">' +
          '<button type="button" class="nt-nut nt-nut-nho nt-nut-vang" data-dg-dat="' + x.id + '"' + (x.cao && x.cao.la ? ' disabled' : '') + '>' + (x.cao && x.cao.la ? 'Em đang dẫn đầu' : 'Trả giá') + '</button><small>tối thiểu ' + x.toiThieu + ' · bước ' + x.buoc + '</small></div>') + '</section>';
    }).join('') + '</div>';
    if (d.mo && d.coThe.length) {
      html += '<h3 class="kt-h3">Đưa món quý của em lên đấu giá</h3><div class="kt-luoi">' + d.coThe.map(function (o, i) {
        var v = tenVat({ loai: o.loai, k: o.k, n: 1 });
        return '<div class="kt-o">' + img(v.hinh) + '<b lang="zh">' + esc(v.zh) + '</b><small>' + esc(v.vn.replace(/^1 /, '')) + ' · có ' + o.co + '</small>' +
          '<label class="kt-nho">Giá khởi điểm <input type="number" min="' + (o.loai === 'hat' ? 30 : o.loai === 'con' ? 60 : 40) + '" value="' + (o.loai === 'hat' ? 60 : o.loai === 'con' ? 150 : 80) + '" data-dang-gia="' + i + '"></label>' +
          '<label class="kt-nho"><select data-dang-gio="' + i + '"><option value="24">24 giờ</option><option value="48">48 giờ</option></select></label>' +
          '<button type="button" class="nt-nut nt-nut-nho" data-dang="' + i + '">🔨 Đưa lên</button></div>';
      }).join('') + '</div>';
    }
    html += '<p class="nt-meo">Xu trả giá được giữ lại; có bạn trả cao hơn thì em được hoàn xu ngay (vào lần mở nông trại / bảng đấu giá kế tiếp). Trả giá trong 2 phút cuối thì phiên được cộng thêm 2 phút. Mỗi em giữ giá cao nhất tối đa ' + d.giuToiDa + ' lô cùng lúc.</p>';
    than.innerHTML = html;
    $all('[data-dg-xu]', than).forEach(function (inp) { inp.addEventListener('input', function () { DG.dang[inp.getAttribute('data-dg-xu')] = +inp.value; }); });
    $all('[data-dg-dat]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-dg-dat'), xu = +$('[data-dg-xu="' + id + '"]', than).value;
        b.disabled = true;
        goi('/api/farm/dg/dat', { id: id, xu: xu }).then(function (r) {
          N.nhanTrangThai(r.st); N.tieng('xu'); delete DG.dang[id];
          bao('🔨 Em đang trả cao nhất: ' + r.xu + ' xu' + (r.them ? ' · phiên được cộng thêm 2 phút' : ''));
          taiDg();
        }, function (e) { b.disabled = false; loiGoi(e); taiDg(); });
      });
    });
    $all('[data-dang]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var i = +b.getAttribute('data-dang'), o = d.coThe[i];
        goi('/api/farm/dg/dang', { loai: o.loai, k: o.k, n: 1, gia: +$('[data-dang-gia="' + i + '"]', than).value, gio: +$('[data-dang-gio="' + i + '"]', than).value }).then(function (r) {
          N.nhanTrangThai(r.st); N.tieng('mua'); bao('Đã đưa món lên đấu giá!'); taiDg();
        }, loiGoi);
      });
    });
  }
  N.dangKy('kt-dg', function (than) {
    $('#ntBangTit').textContent = 'Đấu giá 拍卖会';
    N.datTab([], '');
    var dangGo = document.activeElement && document.activeElement.hasAttribute && document.activeElement.hasAttribute('data-dg-xu');
    if (!dangGo) veDg(than);
    if (!DG.d || Date.now() - (DG.t || 0) > 4000) taiDg();
    // dang mo bang: 5 giay cap nhat gia cao nhat 1 lan
    clearInterval(DG.hen);
    DG.hen = setInterval(function () {
      if (!laBang('kt-dg')) { clearInterval(DG.hen); return; }
      if (!document.hidden) taiDg();
    }, 5000);
  });

  /* ================= cham do, dong chu phu tren o "Thêm", thong bao khi mo nong trai ================= */
  var daBao = false;
  function capNhatPhu() {
    if (!S.st || !S.cat) return;
    var kt = S.st.kt || {}, lv = N.capEm(), mo = S.cat.MO_TN || {};
    var dat = function (id, txt) { var e = $('#' + id); if (e && txt) e.textContent = txt; };
    var cham = function (id, co) { var e = $('#' + id); if (e) e.hidden = !co; };
    var khoa = function (k) { return mo[k] && lv < mo[k].lv ? '🔒 mở ở cấp ' + mo[k].lv : ''; };
    dat('ntMkPhu', khoa('cho') || 'giá lên xuống theo cung cầu');
    dat('ntXgPhu', khoa('xuong') || (kt.soXg ? kt.soXg + ' nhà máy' + (kt.xongXg ? ' · ' + kt.xongXg + ' mẻ xong!' : '') : 'xây nhà máy đầu tiên'));
    dat('ntTiemPhu', khoa('tiem') || (kt.tiemDang ? kt.tiemDang + ' món đang bày' : 'mở tiệm bán cho bạn cùng lớp'));
    dat('ntNcPhu', khoa('nc') || (kt.soNc ? kt.soNc + ' người đang làm cho em' : 'thuê người giúp việc nông trại'));
    dat('ntXkPhu', khoa('xk') || (kt.xkToi ? kt.xkToi + ' chuyến đã tới — nhận tiền!' : 'chở hàng tới các vùng đất'));
    dat('ntDgPhu', khoa('dg') || 'hạt quý · thú hiếm · đồ đẹp mỗi tuần');
    if (PL.d) { var xong = PL.d.vung.reduce(function (a, v) { return a + v.sao.length; }, 0); dat('ntPlPhu', xong + ' trạm đã qua · câu từ bài em học'); }
    cham('ntXgCham', kt.xongXg > 0);
    cham('ntXkCham', kt.xkToi > 0);
    cham('ntTiemCham', kt.tiemTb > 0);
    cham('ntDgCham', kt.dgTb > 0);
    if (daBao) return;
    daBao = true;
    // thong bao cho em (1 lan khi mo nong trai): tiem ban duoc hang, nhan cong da lam, ket qua dau gia
    if (kt.tiemTb) goi('/api/farm/tiem/xem', {}).then(function (r) {
      (r.tb || []).forEach(function (x) {
        var m = sp(x.k);
        bao(x.ve ? '🏪 ' + x.n + ' ' + m.vn.toLowerCase() + ' bày quá 48 giờ — đã về kho.' : '🏪 ' + (x.ten || 'Một bạn') + ' mua ' + x.n + ' ' + m.vn.toLowerCase() + ' ở tiệm em · +' + x.xu + ' xu');
      });
    }, function () {});
    if (kt.ncTb) goi('/api/farm/nc', { a: 'xem' }).then(function (r) { (r.tb || []).forEach(function (x) { bao('👷 ' + x.s); }); }, function () {});
    if (kt.dgTb) taiDg();
  }
  N.sau.push(capNhatPhu);
  if (S.st) capNhatPhu();
})();
