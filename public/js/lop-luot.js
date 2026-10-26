/* Dua ve 终点 — tro choi ban co theo luot cho 2-4 doi tren man chieu (Che do lop hoc).
   Ban co la con duong uon luon ~20/30 o tu 起点 den 终点. Moi luot: doi bam
   "Tung xuc xac" (Space) -> xuc xac quay -> quan nhay tung o. O dung chan:
     · o thuong  : tra loi cau hoi A-D (co bam / go phim thay doi). Dung = dung yen, sai = lui 2 o
     · ⭐ sao     : tien them 2 o
     · 🌀 gio loc : lui 3 o
     · 🌉 qua cau : tra loi dung thi qua cau (+3 o); sai thi ket lai, luot sau phai
                    tra loi dung moi duoc tung xuc xac tiep
     · 🔄 doi cho : doi cho voi doi dung ngay phia truoc (dang dan dau thi thoi)
     · 🎁 the thu thach: nhiem vu vui (doc to, hat...), co danh dau Lam duoc (+1 o) / Chua
   Hieu ung day quan (tien/lui do o dac biet, sai lui 2...) KHONG kich hoat tiep o moi den.
   Ve dich: tung du hay du thua deu tinh (quan dung lai o 终点). Doi ve dau tien thang,
   cac doi con lai xep theo o dang dung.
   Mo bang window.LopLuot.mo({ cau, nhan }).                                       */
(function () {
  'use strict';

  var PREF_KEY = 'hyv_luot_pref';
  var CHU = ['A', 'B', 'C', 'D'];
  var MAU_TO = ['#e0453a', '#2f7fd0', '#3d9a52', '#e39a1f'];
  var CON = ['🐼', '🐯', '🐰', '🐵'];
  var DAI = { ngan: 20, vua: 30 };
  var DAI_TEN = { ngan: '🏃 Ngắn · 20 ô', vua: '🛤️ Vừa · 30 ô' };
  var LOAI = {
    sao: { ic: '⭐', ten: 'Ô may mắn', mo: 'Tiến thêm 2 ô' },
    lui: { ic: '🌀', ten: 'Gió lốc', mo: 'Lùi 3 ô' },
    cau: { ic: '🌉', ten: 'Qua cầu', mo: 'Trả lời đúng mới được qua cầu (+3 ô)' },
    doi: { ic: '🔄', ten: 'Đổi chỗ', mo: 'Đổi chỗ với đội ngay phía trước' },
    qua: { ic: '🎁', ten: 'Thẻ thử thách', mo: 'Làm thử thách vui — làm được thì +1 ô' }
  };
  var SO_DAC_BIET = {
    20: { sao: 2, qua: 2, lui: 1, cau: 1, doi: 1 },
    30: { sao: 3, qua: 3, lui: 2, cau: 2, doi: 1 }
  };
  // Nhiem vu cho the thu thach; "cau: true" = kem mot cau tieng Trung lay tu bo cau hoi
  var THU_THACH = [
    { ic: '📢', t: 'Cả đội đọc to câu sau 3 lần', cau: true },
    { ic: '🇻🇳', t: 'Dịch câu sau sang tiếng Việt', cau: true },
    { ic: '🎤', t: 'Hát một câu tiếng Trung bất kỳ' },
    { ic: '🔢', t: 'Đếm từ 1 đến 10 bằng tiếng Trung thật nhanh' },
    { ic: '💪', t: 'Cả đội đứng lên hô thật to: 加油！加油！' },
    { ic: '👋', t: 'Chào cô và cả lớp bằng tiếng Trung' },
    { ic: '🏫', t: 'Nói tên 3 đồ vật trong lớp bằng tiếng Trung' },
    { ic: '🙋', t: 'Giới thiệu đội mình bằng tiếng Trung: 我们是……' },
    { ic: '✍️', t: 'Cử một bạn lên bảng viết một chữ Hán đã học' },
    { ic: '🤝', t: 'Nói “cảm ơn” và “xin lỗi” bằng tiếng Trung với đội bên cạnh' },
    { ic: '🗣️', t: 'Đặt một câu tiếng Trung có chữ 我' },
    { ic: '🤸', t: 'Cả đội vừa vỗ tay vừa đếm 一、二、三、四、五' }
  ];
  // Vi tri cham tren mat xuc xac (luoi 3x3) va goc quay de mat do huong ra truoc
  var CHAM = { 1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };
  var XOAY = { 1: [0, 0], 2: [0, -90], 3: [-90, 0], 4: [90, 0], 5: [0, 90], 6: [0, 180] };
  var LECH = [[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]];

  var S = {
    built: false, goc: [], nhan: '', soTo: 2, ten: [], dai: 'vua', sound: true,
    pha: 'sanh', van: 0, o: [], doi: [], luot: 0, buoc: 'cho', hang: [], cauCuoi: -1,
    hoi: null, qua: null, xuc: { x: 0, y: 0 }, hinh: null
  };
  var root;

  function $(sel) { return root.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function tron(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function giamChuyenDong() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function tenTo(i) { return S.ten[i] || ('Đội ' + (i + 1)); }
  function dich() { return S.o.length - 1; }
  // Hen gio gan voi van choi hien tai: dong / choi lai thi chuoi hanh dong cu dung luon
  function cho(ms) {
    var ve = S.van;
    return new Promise(function (r) {
      setTimeout(function () { if (ve === S.van && root && !root.hidden) r(); }, ms);
    });
  }

  /* ---------------- am thanh ---------------- */
  var ac = null, onBuf = null;
  function ctx() {
    if (!S.sound) return null;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ac) ac = new AC();
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }
  function tone(freq, dur, type, vol, delay, endFreq) {
    var a = ctx();
    if (!a) return;
    var t0 = a.currentTime + (delay || 0);
    var o = a.createOscillator(), g = a.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(a.destination);
    o.start(t0); o.stop(t0 + dur + 0.03);
  }
  function noise(dur, vol, delay, freq, q) {
    var a = ctx();
    if (!a) return;
    if (!onBuf) {
      onBuf = a.createBuffer(1, a.sampleRate, a.sampleRate);
      var d = onBuf.getChannelData(0);
      for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    var t0 = a.currentTime + (delay || 0);
    var s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    s.buffer = onBuf;
    f.type = 'bandpass'; f.frequency.value = freq || 1200; f.Q.value = q || 0.8;
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(f); f.connect(g); g.connect(a.destination);
    s.start(t0); s.stop(t0 + dur + 0.02);
  }
  // Xuc xac lac lach cach: nhieu tieng go ngan, thua dan
  function sndXuc() {
    var t = 0;
    for (var i = 0; i < 9; i++) { noise(0.05, 0.22, t, 2200 + Math.random() * 1400, 3); t += 0.06 + i * 0.012; }
    noise(0.09, 0.3, t + 0.05, 1500, 2);
  }
  function sndBuoc(i, lui) { tone(lui ? 520 - (i % 6) * 30 : 440 + (i % 8) * 45, 0.11, 'triangle', 0.16); }
  function sndDung() { tone(659, 0.12, 'triangle', 0.18); tone(880, 0.12, 'triangle', 0.18, 0.1); tone(1175, 0.26, 'triangle', 0.16, 0.2); }
  function sndSai() { tone(330, 0.22, 'square', 0.06, 0, 220); tone(247, 0.32, 'square', 0.06, 0.2, 165); }
  function sndSao() { [1047, 1319, 1568, 2093].forEach(function (f, i) { tone(f, 0.18, 'sine', 0.12, i * 0.07); }); }
  function sndGio() { noise(0.9, 0.18, 0, 600, 0.5); tone(600, 0.8, 'sine', 0.05, 0, 200); }
  function sndCau() { tone(392, 0.16, 'triangle', 0.15); tone(523, 0.16, 'triangle', 0.15, 0.14); }
  function sndDoi() { tone(300, 0.5, 'sine', 0.12, 0, 900); tone(900, 0.5, 'sine', 0.1, 0.05, 300); }
  function sndQua() { [784, 988, 1175, 1568].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.12, i * 0.09); }); }
  function sndLuot() { tone(698, 0.1, 'sine', 0.1); }
  function sndKen() {
    [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.16, i * 0.11); });
    tone(1047, 0.6, 'triangle', 0.14, 0.6); tone(1319, 0.6, 'triangle', 0.12, 0.6); tone(1568, 0.7, 'triangle', 0.12, 0.6);
  }

  /* ---------------- hinh ve ---------------- */
  function matXuc(n) {
    var h = '<span class="lu-mat lu-mat' + n + '">';
    for (var i = 0; i < 9; i++) h += '<i' + (CHAM[n].indexOf(i) >= 0 ? ' class="on"' : '') + '></i>';
    return h + '</span>';
  }
  var XUC_HTML =
    '<div class="lu-xuc" id="luXuc" aria-hidden="true"><div class="lu-xuc-nghieng"><div class="lu-xuc-khoi" id="luXucKhoi">' +
      matXuc(1) + matXuc(2) + matXuc(3) + matXuc(4) + matXuc(5) + matXuc(6) +
    '</div></div><span class="lu-xuc-bong"></span></div>';

  // Hoa van may 祥云 (mot cuon may) dung lam trang tri
  var MAY_SVG =
    '<svg viewBox="0 0 120 50" aria-hidden="true"><path fill="currentColor" d="M14 40c-9 0-12-11-4-15 0-9 11-13 17-7 3-9 17-11 22-2 5-7 18-5 19 5 8-2 15 6 10 13 6 1 6 6 0 6zM40 30a7 7 0 1 0-7-7 4 4 0 1 1 4 4" opacity=".95"/></svg>';

  /* ---------------- dung khung ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopLuot';
    root.className = 'lu';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Đua về đích theo lượt');
    root.innerHTML =
      '<div class="lu-nen" aria-hidden="true">' +
        '<span class="lu-long l1"></span><span class="lu-long l2"></span><span class="lu-long l3"></span><span class="lu-long l4"></span>' +
        '<span class="lu-may m1">' + MAY_SVG + '</span><span class="lu-may m2">' + MAY_SVG + '</span><span class="lu-may m3">' + MAY_SVG + '</span>' +
      '</div>' +
      '<header class="lu-bar">' +
        '<b class="lu-title">🎲 Đua về <span lang="zh">终点</span></b>' +
        '<span class="lu-sub" id="luSub"></span>' +
        '<span class="lu-bar-gap"></span>' +
        '<button type="button" class="lu-btn lu-ic" id="luSound"></button>' +
        '<button type="button" class="lu-btn lu-ic" id="luFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="lu-btn" id="luClose">✕ Đóng</button>' +
      '</header>' +
      '<main class="lu-man" id="luMan"></main>';
    document.body.appendChild(root);

    $('#luSound').addEventListener('click', function () { S.sound = !S.sound; luuPref(); veNut(); if (S.sound) tone(880, 0.12, 'triangle', 0.15); });
    $('#luFull').addEventListener('click', toanManHinh);
    $('#luClose').addEventListener('click', thoat);
    window.addEventListener('keydown', phim, true);
    window.addEventListener('keyup', phimNha, true);
    window.addEventListener('resize', function () { if (root && !root.hidden && S.o.length && (S.pha === 'choi' || S.pha === 'het')) datBan(); });
    S.built = true;
  }

  function veNut() {
    var s = $('#luSound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng — bấm để tắt (M)' : 'Đang tắt tiếng — bấm để bật (M)';
    s.classList.toggle('is-off', !S.sound);
  }
  function luuPref() { ghiLS(PREF_KEY, { soTo: S.soTo, ten: S.ten, dai: S.dai, sound: S.sound }); }

  /* ---------------- sanh ---------------- */
  function chipNut(k, v, nhan, on) {
    return '<button type="button" class="lu-opt' + (on ? ' is-on' : '') + '" data-k="' + k + '" data-v="' + v + '">' + nhan + '</button>';
  }
  function veSanh() {
    S.pha = 'sanh';
    S.van++;
    S.o = [];
    $('#luSub').textContent = S.nhan ? S.nhan + ' · ' + S.goc.length + ' câu' : S.goc.length + ' câu';
    if (!S.goc.length) {
      S.pha = 'trong';
      $('#luSub').textContent = '';
      $('#luMan').innerHTML =
        '<div class="lu-the lu-trong">' +
          '<div class="lu-trong-hinh" aria-hidden="true">🐼🎲</div>' +
          '<h2>Chưa có câu hỏi nào cho bàn cờ!</h2>' +
          '<p>Hãy chọn bài muốn ôn ở màn chuẩn bị (tích vào các bài), rồi mở lại trò chơi nhé.</p>' +
          '<div class="lu-nut"><button type="button" class="lu-go" id="luVe">← Về chọn bài</button></div>' +
        '</div>';
      $('#luVe').addEventListener('click', dong);
      return;
    }
    var ten = '';
    for (var i = 0; i < 4; i++) {
      ten += '<label class="lu-ten-to" style="--c:' + MAU_TO[i] + '"' + (i < S.soTo ? '' : ' hidden') + '><span aria-hidden="true">' + CON[i] + '</span>' +
        '<input type="text" maxlength="20" data-i="' + i + '" value="' + esc(tenTo(i)) + '" aria-label="Tên đội ' + (i + 1) + '"></label>';
    }
    var chu = '';
    Object.keys(LOAI).forEach(function (k) {
      chu += '<li><span class="lu-chu-ic lu-o--' + k + '">' + LOAI[k].ic + '</span><b>' + LOAI[k].ten + '</b> ' + LOAI[k].mo + '</li>';
    });
    $('#luMan').innerHTML =
      '<div class="lu-the lu-sanh">' +
        '<div class="lu-sanh-dau">' +
          '<div class="lu-sanh-hinh" aria-hidden="true"><span>🏮</span>' + XUC_HTML.replace('id="luXuc"', '').replace('id="luXucKhoi"', '') + '</div>' +
          '<div><h2>Đua về <span lang="zh">终点</span></h2>' +
          '<p class="lu-luat">Các đội lần lượt tung xúc xắc, đi từ <b lang="zh">起点</b> đến <b lang="zh">终点</b>. ' +
          'Dừng ở ô thường thì trả lời câu hỏi: đúng đứng vững, sai lùi 2 ô. Đội về đích đầu tiên thắng — tung dư cũng tính về đích.</p></div>' +
        '</div>' +
        '<ul class="lu-chu">' + '<li><span class="lu-chu-ic lu-o--thuong">？</span><b>Ô câu hỏi</b> Đúng: đứng yên · Sai: lùi 2 ô</li>' + chu + '</ul>' +
        '<div class="lu-hang"><span class="lu-nhan">Số đội</span><div class="lu-chon">' +
          chipNut('to', 2, '2 đội', S.soTo === 2) + chipNut('to', 3, '3 đội', S.soTo === 3) + chipNut('to', 4, '4 đội', S.soTo === 4) +
        '</div></div>' +
        '<div class="lu-hang"><span class="lu-nhan">Tên đội</span><div class="lu-chon">' + ten + '</div></div>' +
        '<div class="lu-hang"><span class="lu-nhan">Bàn cờ</span><div class="lu-chon">' +
          chipNut('dai', 'ngan', DAI_TEN.ngan, S.dai === 'ngan') + chipNut('dai', 'vua', DAI_TEN.vua, S.dai === 'vua') +
        '</div></div>' +
        '<div class="lu-nut"><button type="button" class="lu-go" id="luBatDau">▶ Bắt đầu <kbd>Enter</kbd></button></div>' +
      '</div>';
    $all('.lu-opt').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-k'), v = b.getAttribute('data-v');
        if (k === 'to') {
          S.soTo = +v;
          $all('.lu-ten-to').forEach(function (l, i) { l.hidden = i >= S.soTo; });
        } else if (k === 'dai') S.dai = v;
        $all('.lu-opt[data-k="' + k + '"]').forEach(function (x) { x.classList.toggle('is-on', x === b); });
        luuPref();
      });
    });
    $all('.lu-ten-to input').forEach(function (inp) {
      inp.addEventListener('input', function () {
        S.ten[+inp.getAttribute('data-i')] = inp.value.trim();
        luuPref();
      });
    });
    $('#luBatDau').addEventListener('click', batDau);
  }

  /* ---------------- ban co ---------------- */
  // Rai o dac biet: tranh 2 o dau va 2 o cuoi, co gang khong cho 2 o dac biet dung sat nhau
  function taoBan(N) {
    var o = [];
    for (var i = 0; i < N; i++) o.push('thuong');
    o[0] = 'dau';
    o[N - 1] = 'dich';
    var dem = SO_DAC_BIET[N] || SO_DAC_BIET[30];
    var ds = [];
    Object.keys(dem).forEach(function (k) { for (var j = 0; j < dem[k]; j++) ds.push(k); });
    var ung = [];
    for (i = 2; i <= N - 3; i++) ung.push(i);
    var chon = null;
    for (var thu = 0; thu < 300 && !chon; thu++) {
      var lay = [];
      tron(ung).forEach(function (p) {
        if (lay.length >= ds.length) return;
        for (var k = 0; k < lay.length; k++) if (Math.abs(lay[k] - p) < 2) return;
        lay.push(p);
      });
      if (lay.length === ds.length) chon = lay;
    }
    if (!chon) chon = tron(ung).slice(0, ds.length);
    ds = tron(ds);
    chon.forEach(function (p, k) { o[p] = ds[k]; });
    return o;
  }

  function veBanHtml() {
    var h = '<svg class="lu-duong" id="luDuong" aria-hidden="true"><path class="lu-duong-vien"/><path class="lu-duong-mat"/><path class="lu-duong-giua"/></svg>';
    S.o.forEach(function (loai, i) {
      var noi;
      if (loai === 'dau') noi = '<span class="lu-o-chu" lang="zh">起点</span>';
      else if (loai === 'dich') noi = '<span class="lu-o-ic">🏮</span><span class="lu-o-chu" lang="zh">终点</span>';
      else if (loai === 'thuong') noi = '<span class="lu-o-so">' + i + '</span>';
      else noi = '<span class="lu-o-ic">' + LOAI[loai].ic + '</span><span class="lu-o-nho">' + i + '</span>';
      var tieuDe = LOAI[loai] ? LOAI[loai].ten + ': ' + LOAI[loai].mo : loai === 'thuong' ? 'Ô ' + i + ': câu hỏi' : '';
      h += '<div class="lu-o lu-o--' + loai + '" data-i="' + i + '"' + (tieuDe ? ' title="' + esc(tieuDe) + '"' : '') + '>' + noi + '</div>';
    });
    S.doi.forEach(function (d, t) {
      h += '<div class="lu-quan" data-t="' + t + '" style="--c:' + MAU_TO[t] + '"><span class="lu-quan-in">' + CON[t] + '<i class="lu-quan-cau" aria-hidden="true">🌉</i></span></div>';
    });
    return h;
  }

  // Chon so cot de o vuong to nhat; duong ran tu duoi len (hang chan trai->phai, hang le phai->trai)
  function datBan() {
    var ban = $('#luBan');
    if (!ban || !S.o.length) return;
    var W = ban.clientWidth, H = ban.clientHeight, N = S.o.length;
    if (!W || !H) return;
    var best = null;
    for (var c = 3; c <= 12; c++) {
      var r = Math.ceil(N / c);
      if (r < 2) continue;
      var s = Math.min(W / c, H / r, 170);
      if (!best || s > best.s + 0.5) best = { c: c, r: r, s: s };
    }
    var g = best;
    g.ox = (W - g.c * g.s) / 2;
    g.oy = (H - g.r * g.s) / 2;
    g.q = g.s * 0.78;
    g.tq = Math.max(26, g.q * 0.5);
    S.hinh = g;
    ban.style.setProperty('--q', g.q + 'px');
    ban.style.setProperty('--tq', g.tq + 'px');
    var diem = [];
    $all('.lu-o').forEach(function (el) {
      var p = viTri(+el.getAttribute('data-i'));
      diem.push(p);
      el.style.transform = 'translate(' + Math.round(p.x - g.q / 2) + 'px,' + Math.round(p.y - g.q / 2) + 'px)';
    });
    var svg = $('#luDuong');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('width', W);
    svg.setAttribute('height', H);
    var d = diem.map(function (p, i) { return (i ? 'L' : 'M') + Math.round(p.x) + ' ' + Math.round(p.y); }).join('');
    $all('#luDuong path').forEach(function (p) { p.setAttribute('d', d); });
    svg.style.setProperty('--dw', Math.round(g.s * 0.42) + 'px');
    datQuan(true);
  }
  function viTri(i) {
    var g = S.hinh;
    var row = Math.floor(i / g.c), k = i % g.c;
    var col = row % 2 === 0 ? k : g.c - 1 - k;
    return { x: g.ox + (col + 0.5) * g.s, y: g.oy + (g.r - 1 - row + 0.5) * g.s };
  }
  // Dat cac quan; nhieu doi chung mot o thi xep 4 goc
  function datQuan(ngay) {
    var g = S.hinh;
    if (!g) return;
    var nhom = {};
    S.doi.forEach(function (d, t) { (nhom[d.vi] = nhom[d.vi] || []).push(t); });
    S.doi.forEach(function (d, t) {
      var el = root.querySelector('.lu-quan[data-t="' + t + '"]');
      if (!el) return;
      var p = viTri(d.vi), cung = nhom[d.vi], k = cung.indexOf(t);
      var l = cung.length > 1 ? LECH[k] : [0, 0];
      var x = p.x + l[0] * g.q - g.tq / 2, y = p.y + l[1] * g.q - g.tq / 2 - (cung.length > 1 ? 0 : g.q * 0.08);
      if (ngay) el.style.transition = 'none';
      el.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px)';
      el.classList.toggle('is-luot', t === S.luot && S.pha === 'choi');
      el.classList.toggle('is-ket', !!d.ket);
      if (ngay) { void el.offsetWidth; el.style.transition = ''; }
    });
    $all('.lu-o').forEach(function (o) { o.classList.remove('is-dung'); });
    var cur = S.doi[S.luot];
    if (cur && S.pha === 'choi') {
      var oc = root.querySelector('.lu-o[data-i="' + cur.vi + '"]');
      if (oc) oc.classList.add('is-dung');
    }
  }
  function nhay(t) {
    var el = root.querySelector('.lu-quan[data-t="' + t + '"]');
    if (!el) return;
    el.classList.remove('is-nhay');
    void el.offsetWidth;
    el.classList.add('is-nhay');
  }

  /* ---------------- van choi ---------------- */
  function chuanBi(q) {
    var idx = [];
    for (var i = 0; i < q.options.length; i++) if (i !== q.answer) idx.push(i);
    var thu = tron(tron(idx).slice(0, 3).concat([q.answer]));
    return {
      pre: q.pre || '', post: q.post || '', noBlank: !!q.noBlank, ctx: q.context || '', why: q.why || '', hint: q.hint || '',
      opts: thu.map(function (k) { return String(q.options[k]); }),
      dung: thu.indexOf(q.answer)
    };
  }
  // Lay cau tiep theo; het hang thi tron lai (tranh lap lai ngay cau vua hoi)
  function layCau() {
    if (!S.hang.length) {
      var all = [];
      for (var i = 0; i < S.goc.length; i++) all.push(i);
      S.hang = tron(all);
      if (S.hang.length > 1 && S.hang[S.hang.length - 1] === S.cauCuoi) {
        var x = S.hang.pop(); S.hang.unshift(x);
      }
    }
    S.cauCuoi = S.hang.pop();
    return chuanBi(S.goc[S.cauCuoi]);
  }
  function cauDay(q) {
    // Cau hoan chinh (dien dap an vao cho trong) cho the thu thach
    return q.noBlank ? '' : String(q.pre || '') + String(q.options[q.answer]) + String(q.post || '');
  }

  function batDau() {
    S.van++;
    S.pha = 'choi';
    S.o = taoBan(DAI[S.dai] || 30);
    S.doi = [];
    for (var t = 0; t < S.soTo; t++) S.doi.push({ vi: 0, ket: false, dung: 0, sai: 0 });
    S.luot = 0;
    S.hang = [];
    S.buoc = 'cho';
    S.hoi = null;
    S.qua = null;
    S.xuc = { x: 0, y: 0 };
    $('#luMan').innerHTML =
      '<div class="lu-choi">' +
        '<div class="lu-ban-khung"><div class="lu-ban" id="luBan">' + veBanHtml() + '</div></div>' +
        '<aside class="lu-ben">' +
          '<div class="lu-luot" id="luLuot"></div>' +
          XUC_HTML +
          '<button type="button" class="lu-go lu-tung" id="luTung"></button>' +
          '<p class="lu-tin" id="luTin" aria-live="polite"></p>' +
          '<ol class="lu-dsdoi" id="luDsDoi"></ol>' +
        '</aside>' +
        '<div class="lu-phu" id="luPhu" hidden></div>' +
      '</div>';
    $('#luTung').addEventListener('click', tung);
    $('#luPhu').addEventListener('click', bamPhu);
    datBan();
    batDauLuot(true);
  }

  function veDoi() {
    var N = dich();
    $('#luDsDoi').innerHTML = S.doi.map(function (d, t) {
      var pt = Math.round(d.vi / N * 100);
      return '<li class="' + (t === S.luot && S.pha === 'choi' ? 'is-luot' : '') + '" style="--c:' + MAU_TO[t] + '">' +
        '<span class="lu-ds-con" aria-hidden="true">' + CON[t] + '</span>' +
        '<span class="lu-ds-ten">' + esc(tenTo(t)) + (d.ket ? ' <small>🌉 kẹt cầu</small>' : '') + '</span>' +
        '<span class="lu-ds-o">' + (d.vi >= N ? '🏁' : 'Ô ' + d.vi) + '</span>' +
        '<span class="lu-ds-thanh"><i style="width:' + pt + '%"></i></span>' +
      '</li>';
    }).join('');
  }
  function veLuot() {
    var t = S.luot, d = S.doi[t];
    $('#luLuot').style.setProperty('--c', MAU_TO[t]);
    $('#luLuot').innerHTML =
      '<span class="lu-luot-con" aria-hidden="true">' + CON[t] + '</span>' +
      '<span class="lu-luot-chu"><small>Lượt của</small><b>' + esc(tenTo(t)) + '</b></span>';
    var nut = $('#luTung');
    nut.innerHTML = d.ket ? '🌉 Trả lời để qua cầu <kbd>Space</kbd>' : '🎲 Tung xúc xắc <kbd>Space</kbd>';
    nut.disabled = S.buoc !== 'cho';
    veDoi();
    datQuan();
  }
  function tin(html) { $('#luTin').innerHTML = html; }

  function batDauLuot(dau) {
    S.buoc = 'cho';
    veLuot();
    var d = S.doi[S.luot];
    tin(d.ket ? '🌉 ' + esc(tenTo(S.luot)) + ' đang kẹt trên cầu — trả lời đúng mới được đi tiếp.' : (dau ? 'Bấm “Tung xúc xắc” hoặc nhấn <kbd>Space</kbd> để bắt đầu!' : ''));
    if (!dau) sndLuot();
  }

  function xoayXuc(v) {
    var khoi = $('#luXucKhoi'), khung = $('#luXuc');
    var dich = XOAY[v];
    var giam = giamChuyenDong();
    if (giam) {
      S.xuc.x = dich[0]; S.xuc.y = dich[1];
      khoi.style.transition = 'none';
    } else {
      S.xuc.x = (Math.floor(S.xuc.x / 360) + 2 + (Math.random() < 0.5 ? 1 : 0)) * 360 + dich[0];
      S.xuc.y = (Math.floor(S.xuc.y / 360) + 2) * 360 + dich[1];
      khoi.style.transition = '';
      khung.classList.remove('is-lac');
      void khung.offsetWidth;
      khung.classList.add('is-lac');
    }
    khoi.style.transform = 'rotateX(' + S.xuc.x + 'deg) rotateY(' + S.xuc.y + 'deg)';
    sndXuc();
    return cho(giam ? 250 : 1250);
  }

  function tung() {
    if (S.pha !== 'choi' || S.buoc !== 'cho') return;
    var t = S.luot, d = S.doi[t];
    if (d.ket) { S.buoc = 'ban'; veLuot(); moHoi(t, 'ket'); return; }
    S.buoc = 'ban';
    veLuot();
    var v = 1 + Math.floor(Math.random() * 6);
    tin('🎲 Đang tung…');
    xoayXuc(v).then(function () {
      tin('🎲 ' + esc(tenTo(t)) + ' tung được <b class="lu-tin-so">' + v + '</b>');
      return cho(350);
    }).then(function () { return di(t, v); }).then(function () { den(t); });
  }

  // Di chuyen tung o mot (so am = lui); dung lai o 起点 / 终点
  function di(t, so) {
    var d = S.doi[t], huong = so > 0 ? 1 : -1, n = Math.abs(so);
    var nhip = giamChuyenDong() ? 120 : 300;
    var p = Promise.resolve();
    for (var i = 0; i < n; i++) {
      p = p.then(function () {
        if ((huong > 0 && d.vi >= dich()) || (huong < 0 && d.vi <= 0)) return null;
        d.vi += huong;
        datQuan();
        nhay(t);
        sndBuoc(d.vi, huong < 0);
        return cho(nhip);
      });
    }
    return p.then(function () { veDoi(); });
  }

  function den(t) {
    var d = S.doi[t];
    if (d.vi >= dich()) { veDich(t); return; }
    var loai = S.o[d.vi];
    if (loai === 'thuong') { moHoi(t, 'thuong'); return; }
    if (loai === 'cau') { sndCau(); moHoi(t, 'cau'); return; }
    if (loai === 'qua') { moQua(t); return; }
    if (loai === 'sao') {
      sndSao();
      bao('sao', '⭐ Ô may mắn!', esc(tenTo(t)) + ' được tiến thêm 2 ô').then(function () { return di(t, 2); }).then(function () { sauHieuUng(t); });
      return;
    }
    if (loai === 'lui') {
      sndGio();
      bao('lui', '🌀 Gió lốc!', esc(tenTo(t)) + ' bị thổi lùi 3 ô').then(function () { return di(t, -3); }).then(function () { sauHieuUng(t); });
      return;
    }
    if (loai === 'doi') { doiCho(t); return; }
    xongLuot();
  }
  function sauHieuUng(t) {
    if (S.doi[t].vi >= dich()) veDich(t);
    else xongLuot();
  }
  function xongLuot() {
    S.buoc = 'ban';
    cho(350).then(function () {
      S.luot = (S.luot + 1) % S.soTo;
      batDauLuot(false);
    });
  }

  function doiCho(t) {
    var d = S.doi[t], truoc = -1, gan = Infinity;
    S.doi.forEach(function (o, k) { if (k !== t && o.vi > d.vi && o.vi < gan) { gan = o.vi; truoc = k; } });
    sndDoi();
    if (truoc < 0) {
      bao('doi', '🔄 Đổi chỗ', esc(tenTo(t)) + ' đang dẫn đầu rồi — không cần đổi!').then(xongLuot);
      return;
    }
    bao('doi', '🔄 Đổi chỗ!', esc(tenTo(t)) + ' đổi chỗ với ' + esc(tenTo(truoc))).then(function () {
      var o = S.doi[truoc], vi = d.vi;
      d.vi = o.vi; o.vi = vi;
      d.ket = false; o.ket = false;
      root.classList.add('is-doi-cho');
      datQuan();
      sndDoi();
      return cho(giamChuyenDong() ? 200 : 900);
    }).then(function () {
      root.classList.remove('is-doi-cho');
      veDoi();
      xongLuot();
    });
  }

  /* ---------------- bang phu: cau hoi / thong bao / the thu thach / ve dich ---------------- */
  function moPhu(html, kieu) {
    var p = $('#luPhu');
    p.className = 'lu-phu lu-phu--' + kieu;
    p.innerHTML = html;
    p.hidden = false;
  }
  function dongPhu() {
    var p = $('#luPhu');
    if (!p) return;
    p.hidden = true;
    p.innerHTML = '';
  }

  // Thong bao ngan cho o dac biet, tu tat sau ~1.5 giay
  function bao(loai, tieuDe, moTa) {
    moPhu(
      '<div class="lu-bao lu-o--' + loai + '">' +
        '<div class="lu-bao-ic" aria-hidden="true">' + LOAI[loai].ic + '</div>' +
        '<p class="lu-bao-tieu">' + tieuDe + '</p>' +
        '<p class="lu-bao-mo">' + moTa + '</p>' +
      '</div>', 'bao');
    tin(tieuDe + ' ' + moTa);
    return cho(giamChuyenDong() ? 1100 : 1600).then(function () { dongPhu(); });
  }

  function cauHtml(c, hien) {
    var dap = '<span class="lu-trong-o' + (hien ? ' is-hien' : '') + '">' + (hien ? esc(c.opts[c.dung]) : '＿＿') + '</span>';
    if (c.noBlank) return esc(c.pre) + esc(c.post) + (hien ? ' <span class="lu-mui">→</span> ' + dap : '');
    return esc(c.pre) + dap + esc(c.post);
  }

  function moHoi(t, kieu) {
    var c = layCau();
    S.hoi = { c: c, t: t, kieu: kieu, chon: -1 };
    S.buoc = 'hoi';
    var nhan = kieu === 'thuong' ? '❓ Ô câu hỏi · Ô ' + S.doi[t].vi
      : kieu === 'cau' ? '🌉 Qua cầu — trả lời đúng được tiến 3 ô'
      : '🌉 Đang kẹt trên cầu — trả lời đúng để qua cầu';
    moPhu(
      '<div class="lu-hoi">' +
        '<div class="lu-hoi-dau">' +
          '<span class="lu-hoi-to" style="--c:' + MAU_TO[t] + '">' + CON[t] + ' ' + esc(tenTo(t)) + '</span>' +
          '<span class="lu-hoi-nhan">' + nhan + '</span>' +
        '</div>' +
        (c.ctx ? '<div class="lu-hoi-ctx">🗣️ ' + esc(c.ctx) + '</div>' : '') +
        '<div class="lu-hoi-cau" lang="zh" id="luHoiCau">' + cauHtml(c, false) + '</div>' +
        '<div class="lu-dap' + (c.opts.length > 2 ? '' : ' is-hai') + '">' +
          c.opts.map(function (o, i) {
            return '<button type="button" class="lu-dap-nut" data-act="tra" data-i="' + i + '"><b>' + CHU[i] + '</b><span lang="zh">' + esc(o) + '</span></button>';
          }).join('') +
        '</div>' +
        '<div class="lu-hoi-chan" id="luHoiChan">' +
          (c.hint ? '<button type="button" class="lu-btn lu-btn-sang" data-act="goiy">💡 Gợi ý <kbd>H</kbd></button><span class="lu-goiy" id="luGoiY" hidden>' + esc(c.hint) + '</span>' : '') +
          '<span class="lu-hoi-meo">Cô bấm đáp án của đội, hoặc gõ <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd></span>' +
        '</div>' +
      '</div>', 'hoi');
    tin(CON[t] + ' ' + esc(tenTo(t)) + ' trả lời câu hỏi…');
  }

  function goiY() {
    var g = $('#luGoiY');
    if (g) g.hidden = false;
  }

  function tra(i) {
    var h = S.hoi;
    if (S.buoc !== 'hoi' || !h || i < 0 || i >= h.c.opts.length) return;
    S.buoc = 'kq';
    h.chon = i;
    var dung = i === h.c.dung, d = S.doi[h.t];
    if (dung) d.dung++; else d.sai++;
    $all('.lu-dap-nut').forEach(function (b) {
      var k = +b.getAttribute('data-i');
      b.disabled = true;
      if (k === h.c.dung) b.classList.add('is-dung');
      else if (k === i) b.classList.add('is-sai');
      else b.classList.add('is-mo');
    });
    $('#luHoiCau').innerHTML = cauHtml(h.c, true);
    var kq;
    if (h.kieu === 'thuong') kq = dung ? '✅ Chính xác! ' + esc(tenTo(h.t)) + ' đứng vững ở ô ' + d.vi + '.' : '❌ Chưa đúng — ' + esc(tenTo(h.t)) + ' lùi 2 ô.';
    else kq = dung ? '✅ Chính xác! Qua cầu thành công — tiến 3 ô!' : '❌ Chưa đúng — kẹt trên cầu! Lượt sau trả lời đúng mới được đi tiếp.';
    $('#luHoiChan').innerHTML =
      '<div class="lu-kq ' + (dung ? 'is-dung' : 'is-sai') + '">' +
        '<p class="lu-kq-dau">' + kq + '</p>' +
        (!dung ? '<p class="lu-kq-da">Đáp án đúng: <b>' + CHU[h.c.dung] + '</b> · <span lang="zh">' + esc(h.c.opts[h.c.dung]) + '</span></p>' : '') +
        (h.c.why ? '<p class="lu-kq-why">💡 ' + esc(h.c.why) + '</p>' : '') +
        '<div class="lu-nut"><button type="button" class="lu-go" data-act="tiep">Tiếp tục → <kbd>Space</kbd></button></div>' +
      '</div>';
    if (dung) sndDung(); else sndSai();
    tin(dung ? '✅ ' + esc(tenTo(h.t)) + ' trả lời đúng!' : '❌ ' + esc(tenTo(h.t)) + ' trả lời chưa đúng.');
    var nut = root.querySelector('[data-act="tiep"]');
    if (nut) nut.focus();
  }

  function tiepHoi() {
    var h = S.hoi;
    if (S.buoc !== 'kq' || !h) return;
    S.buoc = 'ban';
    S.hoi = null;
    dongPhu();
    var dung = h.chon === h.c.dung, d = S.doi[h.t];
    if (h.kieu === 'thuong') {
      if (dung) { xongLuot(); return; }
      di(h.t, -2).then(xongLuot);
      return;
    }
    if (dung) {
      d.ket = false;
      veDoi();
      datQuan();
      di(h.t, 3).then(function () { sauHieuUng(h.t); });
    } else {
      d.ket = true;
      veDoi();
      datQuan();
      xongLuot();
    }
  }

  function moQua(t) {
    var cot = THU_THACH.filter(function (x) { return !x.cau; });
    var coCau = S.goc.filter(function (q) { return !q.noBlank; });
    var nv = (coCau.length ? THU_THACH : cot)[Math.floor(Math.random() * (coCau.length ? THU_THACH.length : cot.length))];
    var cau = nv.cau ? cauDay(coCau[Math.floor(Math.random() * coCau.length)]) : '';
    S.qua = { t: t };
    S.buoc = 'qua';
    sndQua();
    moPhu(
      '<div class="lu-qua">' +
        '<div class="lu-qua-the">' +
          '<div class="lu-qua-dau"><span class="lu-hoi-to" style="--c:' + MAU_TO[t] + '">' + CON[t] + ' ' + esc(tenTo(t)) + '</span><span>🎁 Thẻ thử thách</span></div>' +
          '<div class="lu-qua-ic" aria-hidden="true">' + nv.ic + '</div>' +
          '<p class="lu-qua-nv">' + esc(nv.t) + '</p>' +
          (cau ? '<p class="lu-qua-cau" lang="zh">' + esc(cau) + '</p>' : '') +
          '<div class="lu-nut">' +
            '<button type="button" class="lu-btn lu-btn-sang lu-qua-khong" data-act="qua0">❌ Chưa được <kbd>2</kbd></button>' +
            '<button type="button" class="lu-go" data-act="qua1">✅ Làm được (+1 ô) <kbd>1</kbd></button>' +
          '</div>' +
        '</div>' +
      '</div>', 'qua');
    tin('🎁 ' + esc(tenTo(t)) + ' nhận thẻ thử thách!');
  }
  function quaXong(dat) {
    if (S.buoc !== 'qua' || !S.qua) return;
    var t = S.qua.t;
    S.qua = null;
    S.buoc = 'ban';
    dongPhu();
    if (dat) {
      sndDung();
      tin('🎉 ' + esc(tenTo(t)) + ' hoàn thành thử thách, tiến 1 ô!');
      di(t, 1).then(function () { sauHieuUng(t); });
    } else {
      tin('Không sao — ' + esc(tenTo(t)) + ' đứng yên lượt này.');
      xongLuot();
    }
  }

  function bamPhu(e) {
    var b = e.target.closest('[data-act]');
    if (!b || b.disabled) return;
    var act = b.getAttribute('data-act');
    if (act === 'tra') tra(+b.getAttribute('data-i'));
    else if (act === 'goiy') goiY();
    else if (act === 'tiep') tiepHoi();
    else if (act === 'qua1') quaXong(true);
    else if (act === 'qua0') quaXong(false);
  }

  /* ---------------- ve dich ---------------- */
  function phaoGiay() {
    if (giamChuyenDong()) return '';
    var mau = ['#ffcf5a', '#e0453a', '#2f7fd0', '#3d9a52', '#ff8fb1', '#ffffff'];
    var h = '<div class="lu-phao" aria-hidden="true">';
    for (var i = 0; i < 90; i++) {
      h += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;background:' + mau[i % mau.length] +
        ';animation-delay:' + (Math.random() * 1.6).toFixed(2) + 's;animation-duration:' + (2.4 + Math.random() * 2).toFixed(2) + 's;--r:' + Math.round(Math.random() * 720 - 360) + 'deg;--x:' + Math.round(Math.random() * 160 - 80) + 'px"></i>';
    }
    return h + '</div>';
  }

  function veDich(t) {
    S.van++;
    S.pha = 'het';
    S.buoc = 'het';
    dongPhu();
    datQuan();
    veDoi();
    var N = dich();
    var ds = S.doi.map(function (d, k) { return { t: k, vi: k === t ? N + 1 : d.vi, d: d }; });
    ds.sort(function (a, b) { return b.vi - a.vi || a.t - b.t; });
    var huy = ['🥇', '🥈', '🥉', '4'];
    var hang = 0;
    var bang = ds.map(function (x, i) {
      if (i > 0 && x.vi < ds[i - 1].vi) hang = i;
      return '<div class="lu-bxh-r' + (i === 0 ? ' is-nhat' : '') + '" style="--c:' + MAU_TO[x.t] + '">' +
        '<span class="lu-bxh-h">' + huy[hang] + '</span>' +
        '<span class="lu-bxh-con" aria-hidden="true">' + CON[x.t] + '</span>' +
        '<span class="lu-bxh-ten">' + esc(tenTo(x.t)) + '<small>✅ ' + x.d.dung + ' câu đúng · ❌ ' + x.d.sai + ' câu sai</small></span>' +
        '<b>' + (x.t === t ? '🏁 <span lang="zh">终点</span>' : 'Ô ' + x.d.vi) + '</b>' +
      '</div>';
    }).join('');
    moPhu(
      phaoGiay() +
      '<div class="lu-het">' +
        '<div class="lu-het-con" aria-hidden="true">' + CON[t] + '</div>' +
        '<h2>🏆 ' + esc(tenTo(t)) + ' về <span lang="zh">终点</span> đầu tiên!</h2>' +
        '<div class="lu-bxh">' + bang + '</div>' +
        '<div class="lu-nut">' +
          '<button type="button" class="lu-btn lu-btn-sang" id="luCaiDat">⚙ Đổi cài đặt</button>' +
          '<button type="button" class="lu-btn lu-btn-sang" id="luXong">Đóng</button>' +
          '<button type="button" class="lu-go" id="luLai">↺ Chơi lại <kbd>Enter</kbd></button>' +
        '</div>' +
      '</div>', 'het');
    $('#luCaiDat').addEventListener('click', veSanh);
    $('#luXong').addEventListener('click', dong);
    $('#luLai').addEventListener('click', batDau);
    tin('🏆 ' + esc(tenTo(t)) + ' thắng!');
    sndKen();
  }

  /* ---------------- phim tat / mo / dong ---------------- */
  function toanManHinh() {
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* bo qua */ });
  }

  function thoat() {
    if (S.pha === 'choi' && !window.confirm('Thoát trò chơi? Ván đang chơi sẽ không được lưu.')) return;
    dong();
  }

  function phimNha(e) {
    // Chan Space "bam" nut dang focus khi tha phim
    if (!root || root.hidden) return;
    if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
    if (e.code === 'Space') { e.preventDefault(); e.stopImmediatePropagation(); }
  }

  function phim(e) {
    if (!root || root.hidden) return;
    var trongO = e.target && /input|select|textarea/i.test(e.target.tagName);
    if (e.key === 'Escape') {
      e.stopImmediatePropagation();
      if (!document.fullscreenElement) thoat();
      return;
    }
    if (trongO) {
      if (e.key === 'Enter' && S.pha === 'sanh') { e.preventDefault(); e.stopImmediatePropagation(); batDau(); }
      return;
    }
    // Ban co dang mo thi phim tat cua man phia sau khong duoc chay
    e.stopImmediatePropagation();
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = (e.key || '').toLowerCase();
    var space = e.code === 'Space', enter = e.key === 'Enter';
    var nut = e.target && e.target.tagName === 'BUTTON' ? e.target : null;
    if (space || enter) e.preventDefault();
    if (k === 'f') { toanManHinh(); return; }
    if (k === 'm') { $('#luSound').click(); return; }
    if (S.pha !== 'choi') {
      if (enter && (S.pha === 'sanh' || S.pha === 'het')) batDau();
      else if (nut && (space || enter)) nut.click();
      return;
    }
    if (S.buoc === 'cho') {
      if (space || enter) tung();
      return;
    }
    if (S.buoc === 'hoi') {
      var i = 'abcd'.indexOf(k);
      if (i < 0 && e.key >= '1' && e.key <= '4') i = +e.key - 1;
      if (i >= 0 && k.length === 1) tra(i);
      else if (k === 'h') goiY();
      return;
    }
    if (S.buoc === 'kq') {
      if (space || enter || e.key === 'ArrowRight') tiepHoi();
      return;
    }
    if (S.buoc === 'qua') {
      if (k === '1' || k === 'y') quaXong(true);
      else if (k === '2' || k === 'n') quaXong(false);
    }
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    var p = docLS(PREF_KEY, {});
    S.goc = (opt.cau || []).filter(function (q) {
      return q && Array.isArray(q.options) && q.options.length >= 2 && typeof q.answer === 'number' && q.answer >= 0 && q.answer < q.options.length;
    });
    S.nhan = opt.nhan || '';
    S.sound = p.sound !== false;
    S.soTo = p.soTo >= 2 && p.soTo <= 4 ? p.soTo : 2;
    S.ten = Array.isArray(p.ten) ? p.ten.slice(0, 4) : [];
    S.dai = DAI[p.dai] ? p.dai : 'vua';
    S.hang = [];
    S.cauCuoi = -1;
    root.hidden = false;
    document.documentElement.classList.add('lu-open');
    veNut();
    veSanh();
    var b = $('#luBatDau');
    if (b) b.focus();
  }
  function dong() {
    if (!root) return;
    S.van++;
    S.pha = 'sanh';
    S.o = [];
    S.hoi = null;
    S.qua = null;
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    root.hidden = true;
    root.classList.remove('is-doi-cho');
    $('#luMan').innerHTML = '';
    document.documentElement.classList.remove('lu-open');
  }

  window.LopLuot = { mo: mo, dong: dong };
})();
