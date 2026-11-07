/* Xay lau dai — tro on bai theo to tren man chieu (khung chung: lop-onto.js).
   Moi to mot manh dat, cac lau dai moc len canh nhau. Luot cua to nao thi to do tra loi:
   dung duoc chon mot manh ghep — cau tu vung: manh nho (co, vuon hoa), ngu phap / noi tu: toi manh
   vua (tuong, cong), xep cau: ca manh lon (thap, thap chinh). Manh nao da du thi doi sang ⭐ diem.
   Het moi vong co the noi "gio lon": to nao tra loi sai trong vong do bi thoi bay manh moi nhat.
   Diem = diem cac manh + ⭐ + 5 diem neu lau dai hoan chinh (2 tuong, cong, 2 thap, thap chinh, co). */
(function () {
  'use strict';
  if (!window.LopOnTo) return;

  var V = '#2b1d3a';
  var MANH = {
    co: { ten: 'Lá cờ', ic: '🚩', co: 1, diem: 1, max: 3 },
    vuon: { ten: 'Vườn hoa', ic: '🌷', co: 1, diem: 1, max: 2 },
    tuong: { ten: 'Bức tường', ic: '🧱', co: 2, diem: 2, max: 2 },
    cong: { ten: 'Cổng thành', ic: '🚪', co: 2, diem: 2, max: 1 },
    thap: { ten: 'Tháp canh', ic: '🗼', co: 3, diem: 3, max: 2 },
    thapchinh: { ten: 'Tháp chính', ic: '🏯', co: 3, diem: 3, max: 1 }
  };
  var THU_TU = ['co', 'vuon', 'tuong', 'cong', 'thap', 'thapchinh'];
  var CO_TEN = { 1: 'NHỎ', 2: 'VỪA', 3: 'LỚN' };
  var THUONG_HOAN_THANH = 5;
  var GIO_LOI = {
    co: 'Lá cờ bay vèo lên trời 🚩💨',
    vuon: 'Hoa bị thổi bay tứ tung 🌷💨',
    tuong: 'Một bức tường đổ cái “rầm” 🧱',
    cong: 'Cổng kêu kẽo kẹt… rồi rơi mất 🚪',
    thap: 'Tháp nghiêng… nghiêng… đổ! 🗼',
    thapchinh: 'Mái tháp chính bay mất tiêu 🏯💨'
  };

  /* ---------------- ve lau dai (SVG 200 x 210, mat dat y = 168) ---------------- */
  var N = ' stroke="' + V + '" stroke-width="3" stroke-linejoin="round"';
  var DA = '#efe3cc', DA2 = '#dccaa8';
  function rang(x, y, w, n) { // rang cua mai thanh
    var s = '', b = w / (n * 2 - 1);
    for (var i = 0; i < n; i++) s += '<rect x="' + (x + i * b * 2) + '" y="' + (y - 9) + '" width="' + b + '" height="10" fill="' + DA + '"' + N + '/>';
    return s;
  }
  function gach(x, y, w, h) {
    var s = '';
    for (var yy = y + 12; yy < y + h - 4; yy += 12) s += '<path d="M' + (x + 3) + ' ' + yy + 'h' + (w - 6) + '" stroke="' + DA2 + '" stroke-width="2"/>';
    return s;
  }
  var VE = {
    thapchinh: function (mau) {
      return '<rect x="74" y="58" width="52" height="110" fill="' + DA + '"' + N + '/>' + gach(74, 58, 52, 60) +
        '<path d="M68 60L100 22L132 60Z" fill="' + mau + '"' + N + '/>' +
        '<rect x="92" y="70" width="16" height="22" rx="8" fill="#5a7fb8"' + N + '/>';
    },
    thap: function (mau, k) {
      var x = k ? 152 : 16, cx = x + 16;
      return '<rect x="' + x + '" y="84" width="32" height="84" fill="' + DA + '"' + N + '/>' + gach(x, 84, 32, 84) +
        '<path d="M' + (x - 5) + ' 86L' + cx + ' 50L' + (x + 37) + ' 86Z" fill="' + mau + '"' + N + '/>' +
        '<rect x="' + (cx - 5) + '" y="100" width="10" height="16" rx="5" fill="#5a7fb8"' + N + '/>';
    },
    tuong: function (mau, k) {
      var x = k ? 118 : 46;
      return '<rect x="' + x + '" y="118" width="36" height="50" fill="' + DA + '"' + N + '/>' + gach(x, 118, 36, 50) + rang(x, 118, 36, 3);
    },
    cong: function (mau) {
      return '<rect x="80" y="106" width="40" height="62" fill="' + DA2 + '"' + N + '/>' + rang(80, 106, 40, 3) +
        '<path d="M88 168V136a12 12 0 0 1 24 0V168Z" fill="#8a5a3a"' + N + '/>' +
        '<path d="M100 126V168M88 146h24" stroke="' + V + '" stroke-width="2"/>' +
        '<circle cx="106" cy="154" r="2" fill="' + V + '"/>';
    },
    vuon: function (mau, k) {
      var x = k ? 146 : 6;
      return '<ellipse cx="' + (x + 24) + '" cy="186" rx="26" ry="12" fill="#6cbf5a"' + N + '/>' +
        '<circle cx="' + (x + 10) + '" cy="180" r="5" fill="#ff7aa2"' + N.replace('3', '2') + '/>' +
        '<circle cx="' + (x + 24) + '" cy="176" r="5" fill="#ffd23f"' + N.replace('3', '2') + '/>' +
        '<circle cx="' + (x + 38) + '" cy="181" r="5" fill="#ff9f1c"' + N.replace('3', '2') + '/>' +
        '<circle cx="' + (x + 17) + '" cy="190" r="4" fill="#fff"' + N.replace('3', '2') + '/><circle cx="' + (x + 32) + '" cy="191" r="4" fill="#c58cff"' + N.replace('3', '2') + '/>';
    }
  };
  function veCo(mau, x, y) {
    return '<path d="M' + x + ' ' + y + 'V' + (y - 28) + '" stroke="' + V + '" stroke-width="3" stroke-linecap="round"/>' +
      '<path class="ld-vai" d="M' + x + ' ' + (y - 28) + 'l20 6-20 7z" fill="' + mau + '"' + N + '/>';
  }
  // cho cam co theo cac manh dang co
  function choCo(dem) {
    var ds = [];
    if (dem.thapchinh) ds.push([100, 22]);
    if (dem.thap > 0) ds.push([32, 50]);
    if (dem.thap > 1) ds.push([168, 50]);
    if (dem.cong) ds.push([100, 97]);
    if (dem.tuong > 0) ds.push([58, 109]);
    if (dem.tuong > 1) ds.push([142, 109]);
    ds.push([70, 168], [130, 168], [100, 168]);
    return ds;
  }
  function demManh(ds) {
    var d = { co: 0, vuon: 0, tuong: 0, cong: 0, thap: 0, thapchinh: 0 };
    ds.forEach(function (l) { d[l]++; });
    return d;
  }
  function hoanThanh(ds) {
    var d = demManh(ds);
    return d.tuong >= 2 && d.cong >= 1 && d.thap >= 2 && d.thapchinh >= 1 && d.co >= 1;
  }
  // moi: { loai, k } manh vua them (hieu ung roi xuong); bay: manh sap bi gio thoi
  function veLauDai(ds, mau, moi, bay, cls) {
    var d = demManh(ds), s = '';
    function nhom(loai, k, html) {
      var c = 'ld-p ld-p--' + loai + (moi && moi.loai === loai && moi.k === k ? ' is-moi' : '') + (bay && bay.loai === loai && bay.k === k ? ' is-bay' : '');
      return '<g class="' + c + '">' + html + '</g>';
    }
    var i;
    if (d.thapchinh) s += nhom('thapchinh', 0, VE.thapchinh(mau));
    for (i = 0; i < d.thap; i++) s += nhom('thap', i, VE.thap(mau, i));
    for (i = 0; i < d.tuong; i++) s += nhom('tuong', i, VE.tuong(mau, i));
    if (d.cong) s += nhom('cong', 0, VE.cong(mau));
    var cho = choCo(d);
    for (i = 0; i < d.co; i++) s += nhom('co', i, veCo(mau, cho[i][0], cho[i][1]));
    for (i = 0; i < d.vuon; i++) s += nhom('vuon', i, VE.vuon(mau, i));
    var trong = !ds.length ? '<g class="ld-coc"><path d="M100 168V140" stroke="' + V + '" stroke-width="3"/><rect x="82" y="124" width="36" height="18" rx="4" fill="#fff6dd"' + N + '/>' +
      '<text x="100" y="137" text-anchor="middle" font-size="10" font-weight="900" fill="' + V + '" font-family="Be Vietnam Pro, sans-serif">ĐẤT</text></g>' : '';
    return '<svg class="' + (cls || 'ld-svg') + '" viewBox="0 0 200 210" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' +
      '<rect x="-20" y="166" width="240" height="60" fill="#9bd27f"/><path d="M-20 167H220" stroke="' + V + '" stroke-width="3"/>' +
      '<path d="M10 200q20-6 40 0M120 204q20-6 40 0" stroke="#78b45e" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      trong + s + '</svg>';
  }
  function hinhManh(loai, mau) {
    var vb = { co: '50 60 100 120', vuon: '0 160 70 40', tuong: '36 96 66 80', cong: '72 90 56 84', thap: '6 44 52 130', thapchinh: '62 16 76 158' }[loai];
    var noi = loai === 'co' ? veCo(mau, 92, 160) : VE[loai](mau, 0);
    return '<svg class="ld-manh-svg" viewBox="' + vb + '" aria-hidden="true">' + noi + '</svg>';
  }
  var LOGO = '<svg viewBox="0 0 100 100"><rect x="0" y="78" width="100" height="22" fill="#9bd27f"/><path d="M0 79H100" stroke="' + V + '" stroke-width="3"/>' +
    '<rect x="14" y="40" width="18" height="40" fill="' + DA + '"' + N + '/><path d="M10 42L23 20L36 42Z" fill="#b8432f"' + N + '/>' +
    '<rect x="68" y="40" width="18" height="40" fill="' + DA + '"' + N + '/><path d="M64 42L77 20L90 42Z" fill="#b8432f"' + N + '/>' +
    '<rect x="32" y="52" width="36" height="28" fill="' + DA + '"' + N + '/><path d="M44 80V68a6 6 0 0 1 12 0V80Z" fill="#8a5a3a"' + N + '/>' +
    '<path d="M50 52V30" stroke="' + V + '" stroke-width="3"/><path d="M50 30l14 5-14 5z" fill="#e9a23b"' + N + '/></svg>';

  /* ---------------- trang thai ---------------- */
  var G = null, T = null;
  function diemTo(i) {
    var ds = T.ld[i], s = T.sao[i];
    ds.forEach(function (l) { s += MANH[l].diem; });
    return s + (hoanThanh(ds) ? THUONG_HOAN_THANH : 0);
  }
  // Hon hop: cau kho duoc manh lon hon; mot dang cau (cung do kho) thi duoc chon moi manh
  function capDo(c) { return G.cfg.loai === 'honhop' ? G.kho(c) : 3; }
  function conCho(i, loai) { return demManh(T.ld[i])[loai] < MANH[loai].max; }

  function veKhung() {
    G.man.innerHTML =
      '<div class="ld-choi" id="ldChoi">' +
        '<div class="ld-gio" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
        '<div class="ld-dat" id="ldDat" style="--n:' + G.cfg.soTo + '"></div>' +
        '<div class="ld-ban">' +
          '<div class="ld-chu">' + (G.cfg.loai === 'honhop' ? '<span><b>📖 Từ vựng</b> → mảnh nhỏ</span><span><b>🧩 Ngữ pháp · 🔗 Nối</b> → mảnh vừa</span><span><b>🔀 Xếp câu</b> → mảnh lớn</span>' : '<span><b>Đúng</b> → chọn mảnh bất kỳ</span>') +
            (G.cfg.x.gio === 'bat' ? '<span>🌬️ Có gió lớn!</span>' : '') + '</div>' +
          '<div class="ld-tin" id="ldTin" aria-live="polite"></div>' +
          '<button type="button" class="ot-nut ot-nut--vang ot-nut--to" id="ldHoi" hidden></button>' +
        '</div>' +
      '</div>';
    G.$('#ldHoi').addEventListener('click', moCau);
    veDat();
  }
  function veDat(moi, bay) {
    var box = G.$('#ldDat');
    if (!box) return;
    var html = '';
    for (var i = 0; i < G.cfg.soTo; i++) {
      var t = G.to(i), ds = T.ld[i], xong = hoanThanh(ds);
      html += '<div class="ld-o' + (i === T.luot && T.pha !== 'het' ? ' is-luot' : '') + (xong ? ' is-xong' : '') + (bay && bay.i === i ? ' is-rung' : '') + '" style="--tc:' + t.mau + '">' +
        '<div class="ld-o-dau"><img src="' + G.esc(t.hinh) + '" alt="" draggable="false"><b>' + G.esc(t.ten) + '</b><span class="ld-o-diem">' + diemTo(i) + '</span></div>' +
        '<div class="ld-canh">' + veLauDai(ds, t.mau, moi && moi.i === i ? moi : null, bay && bay.i === i ? bay : null) +
          (xong ? '<span class="ld-xong">🏰 Hoàn thành +' + THUONG_HOAN_THANH + '</span>' : '') + '</div>' +
        '<div class="ld-o-chan">' + ds.length + ' mảnh' + (T.sao[i] ? ' · ⭐ ' + T.sao[i] : '') + (T.saiVong[i] ? ' · <span class="ld-o-sai">sai vòng này</span>' : '') + '</div>' +
      '</div>';
    }
    box.innerHTML = html;
  }
  function tin(h) { var el = G.$('#ldTin'); if (el) el.innerHTML = h; }

  /* ---------------- luot ---------------- */
  function batLuot() {
    T.pha = 'cho';
    G.veVong('Vòng ' + T.vongHt + '/' + G.cfg.vong);
    veDat();
    var t = G.to(T.luot), b = G.$('#ldHoi');
    tin('Lượt của <b style="color:' + t.mau + '">' + G.esc(t.ten) + '</b>');
    b.hidden = false;
    b.innerHTML = '❓ Câu hỏi cho ' + G.esc(t.ten) + ' <kbd>Enter</kbd>';
    b.focus();
  }
  function moCau() {
    if (T.pha !== 'cho') return;
    T.pha = 'hoi';
    G.$('#ldHoi').hidden = true;
    G.hoi({
      to: T.luot,
      phu: function (c) { return capDo(c) === 3 ? '🏗️ Đúng → chọn mảnh bất kỳ' : '🏗️ Đúng → mảnh ' + CO_TEN[capDo(c)]; },
      nutDung: '🏗️ Chọn mảnh ghép ▶',
      nutSai: 'Chuyển lượt ▶',
      xong: function (dung, c) {
        if (dung) chonManh(capDo(c));
        else {
          T.saiVong[T.luot] = true;
          G.toast('😅 ' + G.esc(G.to(T.luot).ten) + ' chưa đúng — lâu đài chờ lượt sau');
          hetLuot();
        }
      }
    });
  }
  function chonManh(co) {
    T.pha = 'chon';
    var i = T.luot, t = G.to(i);
    var duoc = THU_TU.filter(function (l) { return MANH[l].co <= co && conCho(i, l); });
    if (!duoc.length) {
      T.sao[i] += co;
      veDat();
      G.bao('⭐ +' + co, '');
      G.snd.sao();
      tin(G.esc(t.ten) + ' đã xây đủ các mảnh loại này — đổi thành <b>⭐ ' + co + ' điểm</b>!');
      G.sau(1500, hetLuot);
      return;
    }
    var k = 0;
    G.hop({
      html: '<h3>🏗️ Chọn mảnh ghép</h3><p>' + (G.cfg.loai !== 'honhop' ? 'Được chọn <b>mảnh bất kỳ</b>.' : 'Câu ' + (co === 3 ? 'khó' : co === 2 ? 'vừa' : 'dễ') + ' → được chọn mảnh <b>' + CO_TEN[co] + '</b>' + (co > 1 ? ' trở xuống' : '') + '.') + '</p>',
      mau: t.mau,
      cls: 'ld-hop-chon',
      nut: THU_TU.map(function (l) {
        var m = MANH[l], d = demManh(T.ld[i])[l], ok = m.co <= co && d < m.max;
        if (ok) k++;
        return {
          t: '<span class="ld-chon-hinh">' + hinhManh(l, t.mau) + '</span><span class="ld-chon-chu"><b>' + m.ten + '</b><small>' +
            '★'.repeat(m.diem) + ' · ' + (d >= m.max ? 'đã đủ' : m.co > co ? 'cần câu khó hơn' : 'còn ' + (m.max - d)) + '</small></span>' + (ok ? '<kbd>' + k + '</kbd>' : ''),
          cls: 'ld-chon-nut co' + m.co, tat: !ok || !!G.qr, phim: ok ? String(k) : '',
          fn: function () { G.dongHop(); datManh(l); }
        };
      })
    });
    // thi qua ma QR: doi truong chon manh tren dien thoai; het gio thi may chon manh nhieu diem nhat
    if (G.qr) {
      var dsOk = duoc.slice().sort(function (a, b) { return MANH[b].diem - MANH[a].diem; });
      G.qr.chon({
        loai: 'manh',
        ds: THU_TU.map(function (l) {
          var m = MANH[l], d = demManh(T.ld[i])[l];
          return { v: l, nhan: m.ic + ' ' + m.ten, phu: '★'.repeat(m.diem) + ' · ' + (d >= m.max ? 'đã đủ' : m.co > co ? 'cần câu khó hơn' : 'còn ' + (m.max - d)), tat: duoc.indexOf(l) < 0 };
        }),
        tuDong: function () { return dsOk[0]; }
      }, function (l) {
        if (duoc.indexOf(l) < 0) l = dsOk[0];
        G.dongHop();
        datManh(l);
      });
    }
  }
  function datManh(loai) {
    var i = T.luot, t = G.to(i);
    var kTruoc = demManh(T.ld[i])[loai];
    var xongTruoc = hoanThanh(T.ld[i]);
    T.ld[i].push(loai);
    veDat({ i: i, loai: loai, k: kTruoc });
    G.snd.pop();
    G.sau(420, function () { G.snd.rung(); });
    tin(G.esc(t.ten) + ' xây thêm <b>' + MANH[loai].ic + ' ' + MANH[loai].ten + '</b> +' + MANH[loai].diem);
    if (!xongTruoc && hoanThanh(T.ld[i])) {
      G.sau(700, function () { G.bao('🏰 Hoàn thành! +' + THUONG_HOAN_THANH, 'xanh'); G.snd.ken(); });
      G.sau(2500, hetLuot);
    } else G.sau(1300, hetLuot);
  }
  function hetLuot() {
    if (G.pha !== 'choi') return;
    // thi qua ma QR: bao xong luot cua to nay — lop-onto-qr.js chuyen to / vong (gio lon xet o qr.ketVong)
    if (G.qr) { var el = G.$('#ldTin'); G.qr.het(el ? el.textContent : ''); return; }
    T.luot++;
    if (T.luot < G.cfg.soTo) { batLuot(); return; }
    // het vong: co the noi gio
    var sai = [];
    for (var i = 0; i < G.cfg.soTo; i++) if (T.saiVong[i]) sai.push(i);
    var cuoi = T.vongHt >= G.cfg.vong;
    var noiGio = G.cfg.x.gio === 'bat' && sai.length && T.gioVong !== T.vongHt - 1 &&
      (Math.random() < 0.4 || (!T.daGio && T.vongHt >= Math.ceil(G.cfg.vong / 2)));
    if (noiGio) { gioLon(sai, cuoi); return; }
    sangVong(cuoi);
  }
  function sangVong(cuoi) {
    if (cuoi) { ketThuc(); return; }
    T.vongHt++;
    T.luot = 0;
    T.saiVong = T.saiVong.map(function () { return false; });
    G.toast('🔔 Vòng ' + T.vongHt + ' bắt đầu!');
    batLuot();
  }

  /* ---------------- gio lon ---------------- */
  function gioLon(sai, cuoi) {
    T.pha = 'gio';
    T.daGio = true;
    T.gioVong = T.vongHt;
    G.$('#ldHoi').hidden = true;
    tin('🌬️ Ù ù… gió lớn đang tới!');
    var choi = G.$('#ldChoi');
    choi.classList.add('is-gio');
    G.bao('🌬️ Gió lớn!', 'lam');
    G.snd.gio();
    var loi = [];
    G.sau(1500, function () {
      // danh dau manh moi nhat cua cac to sai -> bay di
      var bay = [];
      sai.forEach(function (i) {
        var ds = T.ld[i];
        if (!ds.length) { loi.push([i, 'Chưa có gì để bay — thoát nạn 😅']); return; }
        var l = ds[ds.length - 1];
        bay.push({ i: i, loai: l, k: demManh(ds)[l] - 1 });
        loi.push([i, GIO_LOI[l]]);
      });
      // thi qua ma QR: bao gio lon cho dien thoai
      if (G.qr && G.qr.tin) loi.forEach(function (x) { G.qr.tin(x[0], '🌬️ Gió lớn — ' + G.to(x[0]).ten + ': ' + x[1]); });
      bay.forEach(function (b) {
        var o = G.$all('.ld-o')[b.i];
        if (!o) return;
        o.classList.add('is-rung');
        o.querySelector('.ld-canh').innerHTML = veLauDai(T.ld[b.i], G.to(b.i).mau, null, b) + (hoanThanh(T.ld[b.i]) ? '<span class="ld-xong">🏰 Hoàn thành</span>' : '');
      });
      G.sau(1100, function () {
        bay.forEach(function (b) { T.ld[b.i].pop(); });
        choi.classList.remove('is-gio');
        veDat();
        var an = [];
        for (var i = 0; i < G.cfg.soTo; i++) if (sai.indexOf(i) < 0) an.push(G.esc(G.to(i).ten));
        G.hop({
          html: '<h3>🌬️ Gió lớn thổi qua!</h3>' +
            '<ul class="ld-gio-ds">' + loi.map(function (x) {
              var t = G.to(x[0]);
              return '<li style="--tc:' + t.mau + '"><img src="' + G.esc(t.hinh) + '" alt=""><b>' + G.esc(t.ten) + '</b><span>' + x[1] + '</span></li>';
            }).join('') + '</ul>' +
            (an.length ? '<p>💪 ' + an.join(', ') + ' trả lời đúng nên lâu đài vững như bàn thạch!</p>' : ''),
          mau: '#5aa9e6',
          nut: [{ t: (cuoi ? '🏆 Xem kết quả' : 'Vòng tiếp ▶') + ' <kbd>Enter</kbd>', cls: 'ot-nut--vang ot-nut--to', phim: 'enter', fn: function () {
            G.dongHop();
            if (T.qrXong) { var f = T.qrXong; T.qrXong = null; f(); } else sangVong(cuoi);
          } }]
        });
      });
    });
  }

  function ketThuc() {
    T.pha = 'het';
    var hang = [];
    for (var i = 0; i < G.cfg.soTo; i++) {
      var t = G.to(i);
      hang.push({ i: i, diem: diemTo(i), nho: T.ld[i].length,
        phu: '<div class="ld-buc">' + veLauDai(T.ld[i], t.mau, null, null, 'ld-svg-buc') + (hoanThanh(T.ld[i]) ? '<span class="ld-xong">🏰 Hoàn thành</span>' : '') + '</div>',
        ghi: T.ld[i].length + ' mảnh' });
    }
    G.ketThuc({ hang: hang, don: 'điểm', tieuDe: 'Lâu đài đẹp nhất', loi: 'Điểm = điểm các mảnh + ⭐ + ' + THUONG_HOAN_THANH + ' điểm nếu lâu đài hoàn chỉnh' });
  }

  window.LopOnTo.dangKy({
    id: 'laudai',
    ten: 'Xây lâu đài',
    logo: LOGO,
    nhac: 'vui',
    luat: 'Mỗi tổ một mảnh đất. Trả lời <b>đúng</b> được chọn một mảnh ghép: câu từ vựng → mảnh nhỏ (🚩 cờ, 🌷 vườn hoa, 1 điểm), ngữ pháp / nối từ → tới mảnh vừa (🧱 tường, 🚪 cổng, 2 điểm), ' +
      'xếp câu → cả mảnh lớn (🗼 tháp, 🏯 tháp chính, 3 điểm) — chế độ Hỗn hợp; chọn một dạng câu thì đúng là được chọn mảnh bất kỳ. Lâu đài <b>hoàn chỉnh</b> (2 tường, cổng, 2 tháp, tháp chính, cờ) được thưởng +5. ' +
      'Cuối vòng có thể nổi <b>gió lớn</b>: tổ nào trả lời sai trong vòng sẽ bị thổi bay mảnh mới nhất!',
    vong: { ten: 'Số vòng', ds: [4, 5, 6, 8], md: 5 },
    them: [{ k: 'gio', ten: 'Gió lớn', md: 'bat', ds: [['bat', '🌬️ Có gió'], ['tat', '☀️ Trời lặng']] }],
    batDau: function (g) {
      G = g;
      T = { luot: 0, vongHt: 1, pha: 'cho', ld: [], sao: [], saiVong: [], daGio: false, gioVong: -9 };
      for (var i = 0; i < G.cfg.soTo; i++) { T.ld.push([]); T.sao.push(0); T.saiVong.push(false); }
      veKhung();
      batLuot();
    },
    phim: function (e, g, k) {
      if (!T) return false;
      if ((k === 'enter' || k === ' ') && T.pha === 'cho') { moCau(); return true; }
      return false;
    },
    // Thi qua ma QR (lop-onto-qr.js): moi to duoc thuong chon manh (doi truong chon tren dien thoai);
    // het moi cau (= mot vong) co the noi gio lon voi cac to khong duoc thuong
    qr: {
      batDau: function (g) {
        G = g;
        T = { luot: -1, vongHt: 1, pha: 'cho', ld: [], sao: [], saiVong: [], daGio: false, gioVong: -9, qrXong: null };
        for (var i = 0; i < G.cfg.soTo; i++) { T.ld.push([]); T.sao.push(0); T.saiVong.push(false); }
        veKhung();
        tin('📱 Cả lớp trả lời trên điện thoại — tổ đủ bạn đúng được xây thêm mảnh!');
      },
      hanh: function (i, c) { T.luot = i; T.pha = 'hoi'; veDat(); chonManh(capDo(c)); },
      // sai: cac to khong duoc hanh dong o cau nay; n: so cau (vong) hien tai; xong(): sang cau tiep / ket thuc
      ketVong: function (sai, n, cuoi, xong) {
        T.vongHt = n;
        T.luot = -1;
        T.saiVong = T.saiVong.map(function (x, i) { return sai.indexOf(i) >= 0; });
        var noiGio = G.cfg.x.gio === 'bat' && sai.length && T.gioVong !== T.vongHt - 1 &&
          (Math.random() < 0.4 || (!T.daGio && T.vongHt >= Math.ceil(G.cfg.vong / 2)));
        var het = function () { T.saiVong = T.saiVong.map(function () { return false; }); veDat(); xong(); };
        if (!noiGio) { het(); return; }
        T.qrXong = het;
        gioLon(sai, cuoi);
      },
      xong: function () { return !T; },
      ketThuc: function () { if (T) ketThuc(); }
    },
    dong: function () { T = null; }
  });
})();
