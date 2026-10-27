/* Van dong tra loi (/van-dong) — 3 tro choi dieu khien bang camera:
   - chem: chem hoa qua / bat bong bong bang dau ngon tro (MediaPipe Hand Landmarker)
   - theduc: the duc ABC, tao dang de chon dap an (MediaPipe Pose Landmarker lite)
   - ngoisao: cuoc dua ngoi sao, hai ban gio 1-4 ngon tay (Hand Landmarker, 2 tay)
   Mo hinh chay ngay tren trinh duyet (van-dong-mp.js nap tu CDN), hinh anh khong gui di dau.
   Cau hoi nhan qua localStorage 'hyv_vandong' do trang goi ghi truoc khi mo:
     { nguon: 'lop' | 'nha', nhan, tro: 'chem' | 'theduc' | 'ngoisao' (chon san, tuy chon),
       cau: [{ hoi, ctx, opts: [2..4 chuoi], dung, why, docTruoc, docSau, zhOpt, hoiZh, py }] }
   ?tro=... tren dia chi cung chon san tro choi. File nay nap duoc trong Node de test
   cac ham thuan (dem ngon tay, nhan dang dang nguoi).                                  */
(function (goc) {
  'use strict';

  /* ================= ham thuan (khong dung DOM) ================= */
  // khoang cach 2 diem; ty = rong/cao cua khung hinh (toa do MediaPipe chuan hoa 0..1)
  function kc(a, b, ty) {
    var dx = (a.x - b.x) * (ty || 1), dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  // khoang cach tu diem (px,py) toi doan thang AB
  function kcDoan(px, py, ax, ay, bx, by) {
    var dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy;
    var t = l2 ? ((px - ax) * dx + (py - ay) * dy) / l2 : 0;
    t = Math.max(0, Math.min(1, t));
    var x = ax + t * dx - px, y = ay + t * dy - py;
    return Math.sqrt(x * x + y * y);
  }
  // [dau ngon, khop giua (PIP), goc ngon (MCP)] cua ngon tro, giua, nhan, ut
  var NGON_DAI = [[8, 6, 5], [12, 10, 9], [16, 14, 13], [20, 18, 17]];
  // Dem so ngon tay dang duoi thang (0..5) tu 21 diem ban tay MediaPipe. -1 = du lieu hong.
  // Chi dung khoang cach nen khong phu thuoc tay trai/phai, lat guong hay xoay co tay.
  function demNgon(lm, ty) {
    if (!lm || lm.length < 21) return -1;
    var co = kc(lm[0], lm[9], ty); // co ban tay: co tay -> goc ngon giua
    if (co < 1e-3) return -1;
    var n = 0, i, f;
    for (i = 0; i < 4; i++) {
      f = NGON_DAI[i];
      // duoi thang: dau ngon xa co tay hon khop giua ro ret, va xa goc ngon
      if (kc(lm[f[0]], lm[0], ty) > kc(lm[f[1]], lm[0], ty) * 1.12 && kc(lm[f[0]], lm[f[2]], ty) > co * 0.5) n++;
    }
    // ngon cai: dau ngon xa goc ngon giua (khong gap vao long), xa goc ngon ut,
    // va dau ngon xa co tay hon khop IP (dang duoi ra)
    if (kc(lm[4], lm[9], ty) > co * 0.6 && kc(lm[4], lm[17], ty) > co * 0.95 &&
        kc(lm[4], lm[0], ty) > kc(lm[3], lm[0], ty)) n++;
    return n;
  }
  function hien(p) { return !!p && (p.visibility == null || p.visibility > 0.5); }
  // Nhan dang dang nguoi tu 33 diem Pose Landmarker (anh camera CHUA lat guong).
  // Tra ve 0 = A hai tay chum tren dau, 1 = B gio tay ben phai man hinh,
  // 2 = C gio tay ben trai man hinh, 3 = D dang hai tay ngang vai, -1 = khong ro.
  // "Ben phai man hinh" tinh theo anh da lat guong (x man = 1 - x) = tay phai cua be.
  function phanLoaiTuThe(lm, soDap, ty) {
    if (!lm || lm.length < 17) return -1;
    ty = ty || 1;
    var vt = lm[11], vp = lm[12];
    if (!hien(vt) || !hien(vp)) return -1;
    var sw = kc(vt, vp, ty); // be ngang vai lam thuoc do
    if (sw < 0.02) return -1;
    var tay = [{ s: lm[11], e: lm[13], w: lm[15] }, { s: lm[12], e: lm[14], w: lm[16] }];
    // xep theo vai tren man hinh da lat: tay[0] = ben trai man hinh, tay[1] = ben phai
    if (1 - lm[11].x > 1 - lm[12].x) tay.reverse();
    var mui = hien(lm[0]) ? lm[0].y : Math.min(vt.y, vp.y) - 0.6 * sw;
    function len(t) {
      return (hien(t.w) && t.w.y < mui - 0.1 * sw) || (hien(t.e) && t.e.y < mui);
    }
    function ngang(t, huong) { // huong -1: vuon sang trai man hinh, +1: sang phai
      if (!hien(t.w)) return false;
      var dx = (t.s.x - t.w.x) * ty * huong; // = (xMan co tay - xMan vai) * huong
      return dx > 0.8 * sw && Math.abs(t.w.y - t.s.y) < 0.6 * sw;
    }
    var lenT = len(tay[0]), lenP = len(tay[1]), kq = -1;
    if (lenT && lenP) {
      if (!hien(tay[0].w) || !hien(tay[1].w) || kc(tay[0].w, tay[1].w, ty) < 1.8 * sw) kq = 0;
    } else if (lenP) kq = 1;
    else if (lenT) kq = 2;
    else if (ngang(tay[0], -1) && ngang(tay[1], 1) && kc(tay[0].w, tay[1].w, ty) > 2.4 * sw) kq = 3;
    return kq < (soDap || 4) ? kq : -1;
  }
  var THU = { demNgon: demNgon, phanLoaiTuThe: phanLoaiTuThe, kcDoan: kcDoan };
  if (typeof document === 'undefined') {
    if (typeof module !== 'undefined' && module.exports) module.exports = THU;
    return;
  }
  goc.VanDong = { _test: THU };

  /* ================= cau hinh ================= */
  var WASM = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm';
  var MH_TAY = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
  var MH_NGUOI = 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task';
  var GIU_TD = 800;   // the duc: giu dang bao lau thi chot
  var GIU_NS = 600;   // ngoi sao: giu so ngon bao lau thi khoa
  var CHU = ['A', 'B', 'C', 'D'];
  var MAU = ['#ef6a4f', '#1fa89a', '#e9a21f', '#8a5cd6'];
  var MAU_NG = ['#ef6a4f', '#1fa89a']; // ban trai / ban phai
  var QUA = [{ em: '🍉', nuoc: '#e8394d' }, { em: '🍊', nuoc: '#ff9a1f' }, { em: '🍎', nuoc: '#d62f2f' }, { em: '🍇', nuoc: '#8a3fc4' }];
  var EMOJI = '"Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif';
  var TU_THE = ['Hai tay chụm trên đầu', 'Giơ tay phải', 'Giơ tay trái', 'Dang hai tay ngang vai'];
  var TEN_TRO = { chem: '🍉 Chém hoa quả', theduc: '🤸 Thể dục ABC', ngoisao: '⭐ Cuộc đua ngôi sao' };
  var XUONG = [[11, 12], [11, 13], [13, 15], [12, 14], [14, 16], [11, 23], [12, 24], [23, 24]];
  var NOI_TAY = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12],
    [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [17, 18], [18, 19], [19, 20], [0, 17]];

  // hinh nguoi que (nhin nhu trong guong) cho 4 dang the duc
  function hinhNguoi(tay) {
    return '<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="50" cy="22" r="10"/><path d="M50 33 V64 M50 64 L38 92 M50 64 L62 92 M38 40 H62"/><path d="' + tay + '"/></g></svg>';
  }
  var HINH_TT = [
    hinhNguoi('M38 40 L30 20 L46 4 M62 40 L70 20 L54 4'),
    hinhNguoi('M38 40 L32 56 L30 72 M62 40 L72 24 L76 6'),
    hinhNguoi('M62 40 L68 56 L70 72 M38 40 L28 24 L24 6'),
    hinhNguoi('M38 40 L22 40 L6 40 M62 40 L78 40 L94 40')
  ];

  function $(id) { return document.getElementById(id); }
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
  function ngau(a, b) { return a + Math.random() * (b - a); }
  function lap(s, n) { return n > 0 ? new Array(n + 1).join(s) : ''; }
  function cho(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  // chi giu cau hop le, toi da 4 dap an
  function chuanHoa(ds) {
    var kq = [];
    (ds || []).forEach(function (c) {
      if (!c || !c.opts || c.opts.length < 2) return;
      var opts = c.opts.slice(0, 4).map(function (o) { return String(o == null ? '' : o); });
      var d = +c.dung;
      if (!(d >= 0 && d < opts.length)) return;
      var o = {};
      for (var k in c) if (Object.prototype.hasOwnProperty.call(c, k)) o[k] = c[k];
      o.opts = opts; o.dung = d;
      kq.push(o);
    });
    return kq;
  }

  var cfg = docLS('hyv_vandong', null);
  var lop = !!(cfg && cfg.nguon === 'lop');
  var dsCau = chuanHoa(cfg && cfg.cau);
  var hoiTro = /[?&]tro=(chem|theduc|ngoisao)\b/.exec(location.search);
  var itDong = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var tenLuu = docLS('hyv_vandong_ten', null) || [];

  function nguoiMoi(ten) {
    return { ten: ten, sao: 0, ben: -1, giuTu: 0, tick: -1, khoa: -1, canThang: true, thangTu: 0, n: -1, p: 0, khoaHien: '' };
  }
  var S = {
    tro: hoiTro ? hoiTro[1] : (cfg && /^(chem|theduc|ngoisao)$/.test(cfg.tro) ? cfg.tro : 'chem'),
    da: 'qua', moiBan: false, muc: 5,
    cau: [], i: 0, diem: 0, dung: 0, chuoi: 0, chuoiMax: 0,
    pha: 'sanh', video: null, chay: false, tsCuoi: -1, lanDo: 0, tCu: 0,
    lmTay: null, lmNguoi: null, fs: null,
    conMs: 0, hetLuc: 0, giayCu: -1, goiY: null, tbCu: null,
    ben: -1, benHien: -1, giuTu: 0, canThang: true, thangTu: 0, tick: -1, nguoi: null,
    vat: [], hat: [], vet: [{ d: [] }, { d: [] }, { d: [] }], saiCau: 0, lo: false, khongTay: 0, troDang: false,
    tay: [null, null], tayLuc: 0,
    p: [nguoiMoi('Bạn trái'), nguoiMoi('Bạn phải')],
    tieng: docLS('hyv_vandong_tieng', true) !== false
  };

  /* ================= am thanh + doc ================= */
  var ac = null;
  function tone(f, dai, kieu, to, tre, f2) {
    if (!S.tieng) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ac = ac || new AC();
      if (ac.state === 'suspended') ac.resume();
      var t0 = ac.currentTime + (tre || 0);
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = kieu || 'sine';
      o.frequency.setValueAtTime(f, t0);
      if (f2) o.frequency.exponentialRampToValueAtTime(f2, t0 + dai);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(to || 0.15, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dai);
      o.connect(g); g.connect(ac.destination);
      o.start(t0); o.stop(t0 + dai + 0.03);
    } catch (e) { /* bo qua */ }
  }
  function sDem(cuoi) { tone(cuoi ? 1320 : 880, cuoi ? 0.3 : 0.12, 'triangle', 0.2); }
  function sTick(gap) { tone(gap ? 1500 : 1000, 0.05, 'square', gap ? 0.09 : 0.04); }
  function sGiu(p) { tone(400 + p * 700, 0.06, 'sine', 0.06); }
  function sDung() { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.18, i * 0.08); }); }
  function sSai() { tone(220, 0.35, 'sawtooth', 0.09, 0, 140); tone(180, 0.4, 'square', 0.05, 0.05, 110); }
  function sChem() { tone(1500, 0.13, 'sawtooth', 0.05, 0, 260); tone(170, 0.2, 'sine', 0.25, 0.04, 70); }
  function sNo() { tone(700, 0.08, 'sine', 0.25, 0, 1900); tone(260, 0.07, 'triangle', 0.1, 0.02, 120); }
  function sSao() {
    [784, 988, 1175, 1568].forEach(function (f, i) { tone(f, 0.18, 'triangle', 0.16, i * 0.07); });
    tone(2093, 0.5, 'sine', 0.08, 0.3);
  }
  function sHet() {
    [523, 659, 784].forEach(function (f, i) { tone(f, 0.18, 'triangle', 0.2, i * 0.13); });
    tone(1047, 0.8, 'triangle', 0.2, 0.42);
    tone(784, 0.8, 'sine', 0.1, 0.42);
  }
  function docZh(t) {
    if (!S.tieng || !t || !window.speechSynthesis) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(t);
      u.lang = 'zh-CN'; u.rate = 0.85;
      speechSynthesis.speak(u);
    } catch (e) { /* bo qua */ }
  }
  function veTieng() {
    $('vdTieng').textContent = S.tieng ? '🔊' : '🔇';
    $('vdTieng').classList.toggle('is-off', !S.tieng);
  }

  /* ================= sanh ================= */
  function buoc(ic, b, s) {
    return '<div class="vd-buoc"><span>' + ic + '</span><div><b>' + b + '</b>' + (s ? '<small>' + s + '</small>' : '') + '</div></div>';
  }
  function veCach() {
    var n = dsCau.length;
    var ds = [buoc('📷', 'Cho phép dùng camera', 'Trình duyệt hỏi thì bấm “Cho phép”. Hình ảnh chỉ xử lý ngay trên máy, không gửi đi đâu.')];
    if (S.tro === 'chem') {
      ds.push(S.da === 'qua'
        ? buoc('☝️', 'Ngón trỏ là lưỡi dao', 'Giơ tay trước camera, vung nhanh đầu ngón trỏ qua quả mang đáp án đúng.')
        : buoc('☝️', 'Chạm ngón trỏ vào bong bóng', 'Đưa đầu ngón trỏ chạm vào bong bóng mang đáp án đúng để làm nó nổ.'));
      ds.push(buoc('❤️', 'Nhầm thì được thử lại', 'Câu có từ 3 đáp án: chọn nhầm một lần vẫn được thử tiếp (ít điểm hơn). Dùng chuột kéo qua cũng chơi được.'));
    } else if (S.tro === 'theduc') {
      ds.push(buoc('🧍', 'Đứng lùi lại cho camera thấy nửa người', 'Cả đầu, vai và hai tay đều phải nằm trong khung hình.'));
      ds.push(buoc('🙆', 'Tạo dáng để chọn đáp án', 'A: hai tay chụm trên đầu · B: giơ tay phải · C: giơ tay trái · D: dang hai tay ngang vai. Giữ dáng đến khi ô đầy màu, rồi hạ tay xuống.'));
    } else {
      ds.push(buoc('👫', 'Hai bạn đứng cạnh nhau', 'Một bạn ở nửa trái màn hình, một bạn ở nửa phải. Mỗi bạn giơ một bàn tay.'));
      ds.push(buoc('✌️', 'Giơ ngón tay để trả lời', '1 ngón = A · 2 ngón = B · 3 ngón = C · 4 ngón = D. Giữ yên đến khi khoá. Nắm tay lại trước mỗi câu.'));
      ds.push(buoc('⭐', 'Ai đúng trước được sao', 'Trả lời sai thì bị khoá ở câu đó. Ai đủ sao trước (hoặc nhiều sao hơn) là thắng!'));
    }
    ds.push(buoc('📋', n ? 'Gồm ' + Math.min(n, lop ? n : 12) + ' câu hỏi' : 'Chưa có câu hỏi'));
    $('vdCachDs').innerHTML = ds.join('');
    $('vdSanhIc').textContent = S.tro === 'chem' ? (S.da === 'qua' ? '🍉' : '🎈') : S.tro === 'theduc' ? '🤸' : '⭐';
    $('vdDa').hidden = S.tro !== 'chem';
    $('vdTenO').hidden = S.tro !== 'ngoisao';
    $('vdMoiBanO').hidden = !lop || S.tro === 'ngoisao';
    Array.prototype.forEach.call(document.querySelectorAll('.vd-tro button'), function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-tro') === S.tro);
      b.setAttribute('aria-pressed', b.getAttribute('data-tro') === S.tro ? 'true' : 'false');
    });
    Array.prototype.forEach.call(document.querySelectorAll('#vdDa button'), function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-da') === S.da);
    });
  }
  function veSanh() {
    $('vdThoat').href = lop ? '/lop' : '/game';
    $('vdNhan').textContent = cfg && cfg.nhan ? ' · ' + cfg.nhan : '';
    $('vdTen0').value = tenLuu[0] || 'Bạn trái';
    $('vdTen1').value = tenLuu[1] || 'Bạn phải';
    if (!dsCau.length) {
      $('vdBatDau').disabled = true;
      $('vdLoi').innerHTML = lop
        ? 'Chưa có câu hỏi. Quay lại <a href="/lop">Chế độ lớp học</a>, chọn bài rồi bấm “Vận động trả lời”.'
        : 'Chưa có câu hỏi. Vào <a href="/game">trang Trò chơi</a>, chọn bài rồi chọn “Vận động trả lời”.';
    }
    veCach();
    Array.prototype.forEach.call(document.querySelectorAll('.vd-tro button'), function (b) {
      b.addEventListener('click', function () { S.tro = b.getAttribute('data-tro'); veCach(); });
    });
    Array.prototype.forEach.call(document.querySelectorAll('#vdDa button'), function (b) {
      b.addEventListener('click', function () { S.da = b.getAttribute('data-da'); veCach(); });
    });
  }

  /* ================= camera + mo hinh ================= */
  function choMP() {
    if (window.VanDongMP) return Promise.resolve(window.VanDongMP);
    return new Promise(function (ok, loi) {
      window.addEventListener('vandong-mp', function () { ok(window.VanDongMP); });
      window.addEventListener('vandong-mp-loi', function () { loi(new Error(window.VanDongMPLoi || 'không tải được')); });
      if (window.VanDongMPLoi) loi(new Error(window.VanDongMPLoi));
      setTimeout(function () { loi(new Error('mạng chậm, quá thời gian chờ')); }, 45000);
    });
  }
  // chi nap mo hinh tro choi can: 'tay' (chem, ngoisao) hoac 'nguoi' (theduc)
  function taiMoHinh(loai) {
    if (loai === 'tay' && S.lmTay) return Promise.resolve(S.lmTay);
    if (loai === 'nguoi' && S.lmNguoi) return Promise.resolve(S.lmNguoi);
    return choMP().then(function (MP) {
      if (!S.fs) S.fs = MP.FilesetResolver.forVisionTasks(WASM);
      return S.fs.then(function (fs) {
        function tao(dv) {
          var co = { baseOptions: { modelAssetPath: loai === 'tay' ? MH_TAY : MH_NGUOI, delegate: dv }, runningMode: 'VIDEO' };
          if (loai === 'tay') {
            co.numHands = 2; co.minHandDetectionConfidence = 0.5; co.minHandPresenceConfidence = 0.5; co.minTrackingConfidence = 0.5;
            return MP.HandLandmarker.createFromOptions(fs, co);
          }
          co.numPoses = 1;
          return MP.PoseLandmarker.createFromOptions(fs, co);
        }
        return tao('GPU').catch(function () { return tao('CPU'); });
      });
    }).then(function (lm) {
      if (loai === 'tay') S.lmTay = lm; else S.lmNguoi = lm;
      return lm;
    }, function (e) { S.fs = null; throw e; });
  }
  function moCamera() {
    var v = $('vdVideo');
    if (v.srcObject && v.srcObject.active) { S.video = v; return Promise.resolve(); }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return Promise.reject(new Error('Trình duyệt này không mở được camera.'));
    return navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } } })
      .then(function (st) {
        v.srcObject = st;
        S.video = v;
        return v.play().catch(function () { /* da muted */ });
      });
  }

  function batDau() {
    var b = $('vdBatDau');
    if (!dsCau.length) return;
    b.disabled = true;
    $('vdLoi').textContent = '';
    tone(1, 0.01); // mo khoa am thanh trong cu bam
    b.textContent = 'Đang mở camera…';
    var ten = [$('vdTen0').value.trim() || 'Bạn trái', $('vdTen1').value.trim() || 'Bạn phải'];
    if (S.tro === 'ngoisao') ghiLS('hyv_vandong_ten', ten);
    moCamera().then(function () {
      b.textContent = S.tro === 'theduc' ? 'Đang tải bộ nhận diện dáng người…' : 'Đang tải bộ nhận diện bàn tay…';
      return taiMoHinh(S.tro === 'theduc' ? 'nguoi' : 'tay');
    }).then(function () {
      var ds = dsCau.slice();
      S.cau = lop ? ds : tron(ds).slice(0, 12);
      S.moiBan = lop && S.tro !== 'ngoisao' && $('vdMoiBan').checked;
      S.muc = S.tro === 'ngoisao' ? (+$('vdMuc').value || 0) : 0;
      S.i = 0; S.diem = 0; S.dung = 0; S.chuoi = 0; S.chuoiMax = 0;
      if (window.SaoGame) window.SaoGame.batDauVan();
      S.p = [nguoiMoi(ten[0]), nguoiMoi(ten[1])];
      S.vat = []; S.hat = []; S.nguoi = null; S.tay = [null, null];
      var g = $('vd');
      g.setAttribute('data-tro', S.tro);
      g.classList.add('is-choi');
      $('vdTieuDe').textContent = TEN_TRO[S.tro];
      $('vdSanh').hidden = true;
      $('vdKq').hidden = true;
      $('vdChoi').hidden = false;
      $('vdDiem').hidden = S.tro === 'ngoisao';
      $('vdDiem').textContent = '0';
      $('vdP0').hidden = $('vdP1').hidden = S.tro !== 'ngoisao';
      $('vdDau').hidden = S.tro !== 'theduc';
      $('vdDap').innerHTML = '';
      $('vdTim').textContent = '';
      $('vdChuoi').textContent = '';
      if (S.tro === 'ngoisao') { veNguoi(0); veNguoi(1); }
      S.tbCu = null; tb('');
      if (!S.chay) { S.chay = true; requestAnimationFrame(vong); }
      return demNguoc();
    }).then(function () { moCau(); }).catch(function (e) {
      b.disabled = false;
      b.textContent = '▶ Bắt đầu';
      var m = e && e.name === 'NotAllowedError'
        ? 'Cần cho phép dùng camera: bấm biểu tượng camera/ổ khoá trên thanh địa chỉ rồi bấm Bắt đầu lại.'
        : e && e.name === 'NotFoundError' ? 'Không tìm thấy camera trên máy này.'
        : e && e.name === 'NotReadableError' ? 'Camera đang được ứng dụng khác dùng. Tắt ứng dụng đó rồi thử lại.'
        : 'Chưa mở được trò chơi: ' + (e && e.message ? e.message : 'lỗi không rõ') + '. Kiểm tra mạng rồi thử lại.';
      $('vdLoi').textContent = m;
    });
  }

  function demNguoc() {
    S.pha = 'dem';
    $('vdHoi').innerHTML = '<span class="vd-dem" id="vdDemSo">3</span>';
    $('vdDuoi').textContent = S.tro === 'theduc' ? 'Lùi lại cho camera thấy từ đầu đến bụng nhé!'
      : S.tro === 'ngoisao' ? 'Hai bạn đứng hai bên, giơ tay lên nào!' : 'Giơ bàn tay lên trước camera nhé!';
    return cho(100).then(function () { sDem(); return cho(900); })
      .then(function () { $('vdDemSo').textContent = '2'; sDem(); return cho(900); })
      .then(function () { $('vdDemSo').textContent = '1'; sDem(); return cho(900); })
      .then(function () { sDem(true); });
  }

  /* ================= khung ve + vong lap ================= */
  var cv = $('vdCv'), cx = cv.getContext('2d'), san = $('vdSan');
  var KH = { w: 0, h: 0, dpr: 1, vw: 640, vh: 480, sc: 1, ox: 0, oy: 0 };
  function doKhung() {
    var w = san.clientWidth, h = san.clientHeight, dpr = Math.min(2, window.devicePixelRatio || 1);
    if (!w || !h) return false;
    if (w !== KH.w || h !== KH.h || dpr !== KH.dpr) {
      KH.w = w; KH.h = h; KH.dpr = dpr;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    }
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var v = S.video;
    KH.vw = (v && v.videoWidth) || 640; KH.vh = (v && v.videoHeight) || 480;
    // chem: video object-fit cover (bi cat bot); theduc / ngoisao: contain (thay ca khung hinh)
    KH.sc = S.tro === 'chem' ? Math.max(w / KH.vw, h / KH.vh) : Math.min(w / KH.vw, h / KH.vh);
    KH.ox = (w - KH.vw * KH.sc) / 2; KH.oy = (h - KH.vh * KH.sc) / 2;
    return true;
  }
  // diem MediaPipe (0..1, anh chua lat) -> toa do tren man (da lat guong)
  function raMan(p) { return { x: KH.ox + (1 - p.x) * KH.vw * KH.sc, y: KH.oy + p.y * KH.vh * KH.sc }; }
  function tyLe() { return KH.vw / KH.vh; }

  function vong(t) {
    if (!S.chay) return;
    requestAnimationFrame(vong);
    var dt = S.tCu ? Math.min(0.05, Math.max(0, (t - S.tCu) / 1000)) : 0.016;
    S.tCu = t;
    if (S.pha === 'sanh' || S.pha === 'het' || !doKhung()) return;
    nhanDien();
    cx.clearRect(0, 0, KH.w, KH.h);
    if (S.tro === 'chem') veChem(dt);
    else if (S.tro === 'theduc') veTheDuc();
    else veNgoiSao();
  }
  // nhan dien toi da ~30 hinh/giay, bo qua neu khung video chua doi
  function nhanDien() {
    var v = S.video, lm = S.tro === 'theduc' ? S.lmNguoi : S.lmTay, now = performance.now();
    if (!v || !lm || v.readyState < 2) return;
    if (now - S.lanDo < 30 || v.currentTime === S.tsCuoi) return;
    S.lanDo = now; S.tsCuoi = v.currentTime;
    var kq;
    try { kq = lm.detectForVideo(v, now); } catch (e) { return; }
    if (S.tro === 'chem') tayChem(kq, now);
    else if (S.tro === 'theduc') nguoiTheDuc(kq, now);
    else tayNgoiSao(kq, now);
  }
  function tb(m) {
    if (m === S.tbCu) return;
    S.tbCu = m;
    $('vdTb').hidden = !m;
    if (m) $('vdTb').textContent = m;
  }
  function goiY(m) { // dong goi y duoi san, chi doi khi khac
    if (m === S.goiY) return;
    S.goiY = m;
    $('vdDuoi').innerHTML = m;
  }

  /* ================= tro 1: chem hoa qua / bat bong bong ================= */
  function kichVat() { return Math.max(32, Math.min(110, Math.min(KH.w, KH.h) * (S.da === 'qua' ? 0.1 : 0.115), KH.w / (S.cau[S.i].opts.length * 2.5))); }
  function phong(zh, co) { return zh ? '700 ' + co + 'px "Noto Sans SC","Be Vietnam Pro",sans-serif' : '800 ' + co + 'px "Be Vietnam Pro",system-ui,sans-serif'; }
  // chon co chu vua khung (toi da 2 dong)
  function doChu(chu, zh, maxW, co0, coMin) {
    var co, f, i, tu, a, b, tot, rong;
    for (co = co0; co >= coMin; co -= 2) {
      cx.font = f = phong(zh, co);
      if (cx.measureText(chu).width <= maxW) return { d: [chu], f: f, co: co };
    }
    tu = zh ? chu.split('') : chu.split(' ');
    if (tu.length < 2) return { d: [chu], f: phong(zh, coMin), co: coMin };
    var noi = zh ? '' : ' ';
    for (co = Math.round(co0 * 0.85); co >= Math.min(coMin, 11); co -= 2) {
      cx.font = f = phong(zh, co); tot = null;
      for (i = 1; i < tu.length; i++) {
        a = tu.slice(0, i).join(noi); b = tu.slice(i).join(noi);
        rong = Math.max(cx.measureText(a).width, cx.measureText(b).width);
        if (!tot || rong < tot.r) tot = { r: rong, d: [a, b] };
      }
      if (tot.r <= maxW || co <= Math.min(coMin, 11) + 1) return { d: tot.d, f: f, co: co };
    }
    return { d: [chu], f: phong(zh, coMin), co: coMin };
  }
  function chemBatDau(now) {
    var c = S.cau[S.i];
    S.vat = []; S.hat = []; S.saiCau = 0; S.lo = false; S.khongTay = now;
    var thu = tron(c.opts.map(function (o, k) { return k; }));
    for (var k = 0; k < c.opts.length; k++) {
      S.vat.push({ i: k, tt: 'cho', luc: now + 400 + thu.indexOf(k) * 650 + Math.random() * 200, em: QUA[k].em, mo: 1, r: 40, x: 0, y: 0 });
    }
  }
  // dua mot vat vao san tu canh duoi, chon cot trong nhat
  function tha(v) {
    var c = S.cau[S.i], n = c.opts.length, w = KH.w, h = KH.h, r = kichVat();
    var cot = [], k, tot = w / 2, xa = -1;
    for (k = 0; k < n; k++) cot.push((k + 0.5) / n * w);
    tron(cot).forEach(function (x) {
      var d = 1e9;
      S.vat.forEach(function (o) { if (o !== v && o.tt === 'bay') d = Math.min(d, Math.abs(o.x - x)); });
      if (d > xa) { xa = d; tot = x; }
    });
    v.r = r; v.tt = 'bay'; v.mo = 1; v.sang = false; v.rot = 0;
    v.x = Math.max(r + 6, Math.min(w - r - 6, tot + ngau(-0.12, 0.12) * w / n));
    if (S.da === 'qua') {
      v.y = h + r * 1.4;
      v.g = h * 0.45;
      v.vy = -Math.sqrt(2 * v.g * (v.y - h * ngau(0.18, 0.36)));
      v.vx = (w / 2 - v.x) * ngau(0.03, 0.1) + ngau(-0.02, 0.02) * w;
      v.vr = ngau(-1.2, 1.2);
      v.nhan = doChu(c.opts[v.i], !!c.zhOpt, Math.max(w / n * 1.3, r * 2.4) - r * 0.65 - 24, Math.round(r * 0.5), 12);
    } else {
      v.y = h + r * 1.3; v.x0 = v.x;
      v.vy = -h * ngau(0.085, 0.12) * (itDong ? 0.8 : 1); v.vx = 0; v.vr = 0;
      v.pha = Math.random() * 6.28;
      v.nhan = doChu(c.opts[v.i], !!c.zhOpt, r * 1.55, Math.round(r * 0.48), 11);
    }
  }
  function capNhatVat(v, dt, now) {
    if (v.tt === 'cho') { if (!S.lo && S.pha === 'hoi' && now >= v.luc) tha(v); return; }
    if (v.tt !== 'bay') return;
    if (v.sang) { // lo dap an: truot ve giua san
      var k = Math.min(1, dt * 4);
      v.x += (KH.w / 2 - v.x) * k; v.y += (KH.h * 0.45 - v.y) * k; v.rot *= 0.9;
      return;
    }
    if (S.lo) { v.mo -= dt * 2.5; if (v.mo <= 0) { v.tt = 'het'; return; } }
    if (S.da === 'qua') {
      v.vy += v.g * dt; v.x += v.vx * dt; v.y += v.vy * dt; v.rot += v.vr * dt;
      if (v.vy > 0 && v.y > KH.h + v.r * 1.5) { v.tt = 'cho'; v.luc = now + ngau(200, 800); }
    } else {
      v.y += v.vy * dt;
      v.x = v.x0 + Math.sin(now / 1000 * 1.3 + v.pha) * KH.w * 0.025;
      if (v.y < -v.r * 1.6) { v.tt = 'cho'; v.luc = now + ngau(200, 800); }
    }
  }
  function duongBo(x, y, w, h, r) {
    cx.beginPath();
    cx.moveTo(x + r, y); cx.lineTo(x + w - r, y); cx.arcTo(x + w, y, x + w, y + r, r);
    cx.lineTo(x + w, y + h - r); cx.arcTo(x + w, y + h, x + w - r, y + h, r);
    cx.lineTo(x + r, y + h); cx.arcTo(x, y + h, x, y + h - r, r);
    cx.lineTo(x, y + r); cx.arcTo(x, y, x + r, y, r);
    cx.closePath();
  }
  function veHuy(x, y, r, mau, chu) { // huy hieu chu cai A/B/C/D
    cx.beginPath(); cx.arc(x, y, r, 0, Math.PI * 2);
    cx.fillStyle = mau; cx.fill();
    cx.lineWidth = 2; cx.strokeStyle = '#fff'; cx.stroke();
    cx.fillStyle = '#fff'; cx.font = '800 ' + Math.round(r * 1.2) + 'px "Be Vietnam Pro",sans-serif';
    cx.textAlign = 'center'; cx.textBaseline = 'middle';
    cx.fillText(chu, x, y + r * 0.06);
  }
  function veQua(v, now) {
    cx.save();
    cx.globalAlpha = Math.max(0, Math.min(1, v.mo));
    if (v.sang) {
      cx.beginPath(); cx.arc(v.x, v.y, v.r * 1.3 + (itDong ? 0 : Math.sin(now / 150) * 4), 0, Math.PI * 2);
      cx.fillStyle = 'rgba(47,163,95,.35)'; cx.fill();
      cx.lineWidth = 5; cx.strokeStyle = '#7ee2a2'; cx.stroke();
    }
    cx.translate(v.x, v.y); cx.rotate(v.rot);
    cx.font = Math.round(v.r * 1.9) + 'px ' + EMOJI;
    cx.textAlign = 'center'; cx.textBaseline = 'middle';
    cx.fillText(v.em, 0, v.r * 0.1);
    cx.restore();
    // nhan dap an duoi qua, luon nam ngang
    var nh = v.nhan, lh = nh.co * 1.2, hh = lh * nh.d.length + 12, br = Math.max(10, nh.co * 0.62), ww = 0, i;
    cx.font = nh.f;
    for (i = 0; i < nh.d.length; i++) ww = Math.max(ww, cx.measureText(nh.d[i]).width);
    ww += br * 2 + 24;
    var x = Math.max(4, Math.min(KH.w - ww - 4, v.x - ww / 2)), y = v.y + v.r * 0.95;
    cx.save();
    cx.globalAlpha = Math.max(0, Math.min(1, v.mo));
    duongBo(x, y, ww, hh, Math.min(16, hh / 2));
    cx.fillStyle = v.sang ? '#dff5e6' : 'rgba(255,250,242,.94)'; cx.fill();
    cx.lineWidth = 3; cx.strokeStyle = v.sang ? '#2fa35f' : MAU[v.i]; cx.stroke();
    veHuy(x + 8 + br, y + hh / 2, br, MAU[v.i], CHU[v.i]);
    cx.fillStyle = '#3a2a24'; cx.font = nh.f; cx.textAlign = 'left'; cx.textBaseline = 'middle';
    for (i = 0; i < nh.d.length; i++) cx.fillText(nh.d[i], x + br * 2 + 16, y + 6 + lh * (i + 0.5));
    cx.restore();
  }
  function veBong(v, now) {
    var r = v.r, m = MAU[v.i], i;
    cx.save();
    cx.globalAlpha = Math.max(0, Math.min(1, v.mo));
    var g = cx.createRadialGradient(v.x - r * 0.35, v.y - r * 0.4, r * 0.1, v.x, v.y, r);
    g.addColorStop(0, 'rgba(255,255,255,.75)');
    g.addColorStop(0.55, v.sang ? 'rgba(47,163,95,.45)' : m + '66');
    g.addColorStop(1, v.sang ? 'rgba(47,163,95,.85)' : m + 'cc');
    cx.beginPath(); cx.arc(v.x, v.y, r * (v.sang && !itDong ? 1 + Math.sin(now / 150) * 0.04 : 1), 0, Math.PI * 2);
    cx.fillStyle = g; cx.fill();
    cx.lineWidth = v.sang ? 5 : 3; cx.strokeStyle = v.sang ? '#7ee2a2' : 'rgba(255,255,255,.85)'; cx.stroke();
    cx.beginPath(); cx.arc(v.x - r * 0.38, v.y - r * 0.38, r * 0.16, 0, Math.PI * 2);
    cx.fillStyle = 'rgba(255,255,255,.8)'; cx.fill();
    veHuy(v.x, v.y - r * 0.62, Math.max(9, r * 0.2), m, CHU[v.i]);
    var nh = v.nhan, lh = nh.co * 1.15, y0 = v.y + r * 0.08 - lh * (nh.d.length - 1) / 2;
    cx.font = nh.f; cx.textAlign = 'center'; cx.textBaseline = 'middle';
    cx.lineJoin = 'round'; cx.lineWidth = Math.max(3, nh.co * 0.22); cx.strokeStyle = 'rgba(40,24,50,.85)';
    cx.fillStyle = '#fff';
    for (i = 0; i < nh.d.length; i++) { cx.strokeText(nh.d[i], v.x, y0 + i * lh); cx.fillText(nh.d[i], v.x, y0 + i * lh); }
    cx.restore();
  }
  // hat: g = giot nuoc, n = nua qua, v = vong no, c = chu bay len
  function noVat(v, goc, dung, diem) {
    var so = itDong ? 6 : 18, k, a, sp, mau = S.da === 'qua' ? (dung ? QUA[v.i].nuoc : '#9b8a7a') : (dung ? MAU[v.i] : '#b9aec4');
    if (S.da === 'qua') {
      var nx = Math.sin(goc), ny = -Math.cos(goc), tach = v.r * 2.2;
      [-1, 1].forEach(function (b) {
        S.hat.push({ l: 'n', em: v.em, x: v.x, y: v.y, r: v.r, c: goc - Math.PI / 2, rot: v.rot - (goc - Math.PI / 2), ben: b,
          vx: (v.vx || 0) * 0.4 + b * nx * tach, vy: Math.min(0, v.vy || 0) * 0.3 + b * ny * tach - v.r, vr: b * ngau(2, 4), t: 0, het: 1.3 });
      });
    } else {
      S.hat.push({ l: 'v', x: v.x, y: v.y, r: v.r, mau: dung ? '#ffffff' : '#b9aec4', t: 0, het: 0.4 });
    }
    for (k = 0; k < so; k++) {
      a = Math.random() * Math.PI * 2; sp = ngau(0.6, 1.6) * v.r * 3;
      S.hat.push({ l: 'g', x: v.x, y: v.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - v.r * 2, r: ngau(3, 7) * Math.max(1, v.r / 60), mau: mau, t: 0, het: ngau(0.5, 0.9) });
    }
    S.hat.push({ l: 'c', x: v.x, y: v.y - v.r * 0.4, chu: dung ? (diem ? '+' + diem : '✔') : '✖', mau: dung ? '#7ee2a2' : '#ff8a75', co: Math.max(26, v.r * 0.7), t: 0, het: 1.1 });
  }
  function veHat(dt) {
    var g = KH.h * 1.4, con = [];
    S.hat.forEach(function (p) {
      p.t += dt;
      if (p.t >= p.het) return;
      con.push(p);
      var a = 1 - p.t / p.het;
      cx.save();
      cx.globalAlpha = Math.max(0, Math.min(1, a * 1.4));
      if (p.l === 'g') {
        p.vy += g * dt; p.x += p.vx * dt; p.y += p.vy * dt;
        cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, Math.PI * 2); cx.fillStyle = p.mau; cx.fill();
      } else if (p.l === 'n') {
        p.vy += g * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.c += p.vr * dt;
        cx.translate(p.x, p.y); cx.rotate(p.c);
        cx.beginPath(); cx.rect(p.ben < 0 ? -p.r * 1.3 : 0, -p.r * 1.3, p.r * 1.3, p.r * 2.6); cx.clip();
        cx.rotate(p.rot);
        cx.font = Math.round(p.r * 1.9) + 'px ' + EMOJI; cx.textAlign = 'center'; cx.textBaseline = 'middle';
        cx.fillText(p.em, 0, p.r * 0.1);
      } else if (p.l === 'v') {
        cx.beginPath(); cx.arc(p.x, p.y, p.r * (1 + (1 - a) * 0.7), 0, Math.PI * 2);
        cx.lineWidth = 6 * a + 1; cx.strokeStyle = p.mau; cx.stroke();
      } else if (p.l === 'c') {
        p.y -= KH.h * 0.12 * dt;
        cx.font = '800 ' + Math.round(p.co) + 'px "Be Vietnam Pro",sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle';
        cx.lineWidth = 5; cx.strokeStyle = 'rgba(40,24,50,.8)'; cx.strokeText(p.chu, p.x, p.y);
        cx.fillStyle = p.mau; cx.fillText(p.chu, p.x, p.y);
      }
      cx.restore();
    });
    S.hat = con;
  }
  // vet dao: 0, 1 = hai ban tay, 2 = chuot / cham man hinh
  function themDiem(k, x, y, now) {
    var d = S.vet[k].d, cu = d.length ? d[d.length - 1] : null;
    if (cu && now - cu.t > 250) { d.length = 0; cu = null; }
    if (cu && k < 2) { x = cu.x * 0.3 + x * 0.7; y = cu.y * 0.3 + y * 0.7; } // lam muot nhe
    var p = { x: x, y: y, t: now };
    if (cu) {
      var nh = Math.sqrt((x - cu.x) * (x - cu.x) + (y - cu.y) * (y - cu.y));
      if (nh > Math.max(KH.w, KH.h) * 0.5) d.length = 0; // nhay tay (doi tay) -> khong tinh la chem
      else chemDoan(cu, p, now - cu.t);
    } else if (S.da === 'bong') chemDoan(p, p, 16);
    d.push(p);
    if (d.length > 24) d.shift();
  }
  function cuoiVet(k, now) {
    var d = S.vet[k].d;
    return d.length && now - d[d.length - 1].t < 300 ? d[d.length - 1] : null;
  }
  function tayChem(kq, now) {
    var ds = (kq && kq.landmarks) || [];
    var diem = ds.slice(0, 2).map(function (lm) { return raMan(lm[8]); }); // 8 = dau ngon tro
    function phi(k, p) { var c = cuoiVet(k, now); return c ? Math.sqrt((c.x - p.x) * (c.x - p.x) + (c.y - p.y) * (c.y - p.y)) : KH.w * 0.3; }
    if (diem.length === 1) {
      themDiem(phi(0, diem[0]) <= phi(1, diem[0]) ? 0 : 1, diem[0].x, diem[0].y, now);
    } else if (diem.length === 2) {
      var doi = phi(0, diem[1]) + phi(1, diem[0]) < phi(0, diem[0]) + phi(1, diem[1]);
      themDiem(0, diem[doi ? 1 : 0].x, diem[doi ? 1 : 0].y, now);
      themDiem(1, diem[doi ? 0 : 1].x, diem[doi ? 0 : 1].y, now);
    }
    if (diem.length) { S.khongTay = now; tb(''); }
    else if (S.pha !== 'hoi') tb('');
    else if (now - S.khongTay > 1500) tb('Giơ bàn tay lên trước camera, dùng ngón trỏ nhé ☝️');
  }
  // kiem tra doan di chuyen cua dau ngon co cat qua vat nao khong
  function chemDoan(a, b, ms) {
    if (S.pha !== 'hoi') return;
    var dx = b.x - a.x, dy = b.y - a.y;
    var toc = Math.sqrt(dx * dx + dy * dy) / Math.max(ms, 8) * 1000; // px/giay
    if (S.da === 'qua' && toc < Math.max(260, Math.min(KH.w, KH.h) * 0.75)) return;
    for (var k = 0; k < S.vat.length; k++) {
      var v = S.vat[k];
      if (v.tt !== 'bay' || v.sang || v.mo < 1) continue;
      if (kcDoan(v.x, v.y, a.x, a.y, b.x, b.y) < v.r * 0.95) { trung(v, dx, dy); return; }
    }
  }
  function trung(v, dx, dy) {
    if (S.pha !== 'hoi') return;
    var c = S.cau[S.i], dung = v.i === c.dung, goc = Math.atan2(dy || 0.001, dx || 0.001);
    v.tt = 'het';
    if (S.da === 'qua') sChem(); else sNo();
    if (dung) { noVat(v, goc, true, chot(v.i)); return; }
    noVat(v, goc, false);
    S.saiCau++; S.chuoi = 0;
    $('vdChuoi').textContent = '';
    danhDau(v.i, 'is-sai');
    veTim();
    sSai();
    if (S.saiCau >= 2 || c.opts.length - S.saiCau <= 1) { chot(v.i, true); return; }
    goiY('<b class="is-sai">😅 Chưa đúng — còn một lượt, thử lại nào!</b>');
  }
  function veTim() {
    var c = S.cau[S.i], co = c.opts.length > 2 ? 2 : 1;
    $('vdTim').textContent = lap('❤️', Math.max(0, co - S.saiCau)) + lap('🤍', Math.min(co, S.saiCau));
  }
  function loChem() {
    S.lo = true;
    var v = S.vat[S.cau[S.i].dung];
    if (!v || v.tt === 'het') return;
    if (v.tt === 'cho') { tha(v); v.x = KH.w / 2; v.y = KH.h * 0.45; }
    v.sang = true; v.mo = 1;
  }
  function veVet(now) {
    for (var k = 0; k < 3; k++) {
      var d = S.vet[k].d.filter(function (p) { return now - p.t < 220; });
      if (d.length > 1) {
        cx.save(); cx.lineCap = 'round'; cx.lineJoin = 'round';
        for (var lop2 = 0; lop2 < 2; lop2++) {
          for (var j = 1; j < d.length; j++) {
            var a = j / d.length;
            cx.beginPath(); cx.moveTo(d[j - 1].x, d[j - 1].y); cx.lineTo(d[j].x, d[j].y);
            cx.lineWidth = lop2 ? 2 + 6 * a : 6 + 20 * a;
            cx.strokeStyle = lop2 ? 'rgba(255,255,255,' + (0.4 + 0.6 * a) + ')' : 'rgba(255,201,77,' + (0.15 + 0.35 * a) + ')';
            cx.stroke();
          }
        }
        cx.restore();
      }
      var c = k < 2 ? cuoiVet(k, now) : null;
      if (c && now - c.t < 200) {
        cx.beginPath(); cx.arc(c.x, c.y, 16, 0, Math.PI * 2); cx.fillStyle = 'rgba(255,201,77,.35)'; cx.fill();
        cx.beginPath(); cx.arc(c.x, c.y, 8, 0, Math.PI * 2); cx.fillStyle = '#fff'; cx.fill();
      }
    }
  }
  function veChem(dt) {
    var now = performance.now();
    S.vat.forEach(function (v) { capNhatVat(v, dt, now); });
    S.vat.forEach(function (v) { if (v.tt === 'bay') (S.da === 'qua' ? veQua : veBong)(v, now); });
    veHat(dt);
    veVet(now);
  }
  function diemTro(e) { var r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
  cv.addEventListener('pointerdown', function (e) {
    if (S.tro !== 'chem' || S.pha !== 'hoi') return;
    e.preventDefault();
    S.troDang = true;
    try { cv.setPointerCapture(e.pointerId); } catch (x) { /* bo qua */ }
    var p = diemTro(e), now = performance.now();
    S.vet[2].d = [{ x: p.x, y: p.y, t: now }];
    // cham thang vao vat cung tinh (du phong de thu tren may / man hinh cam ung)
    for (var k = 0; k < S.vat.length; k++) {
      var v = S.vat[k];
      if (v.tt === 'bay' && !v.sang && v.mo >= 1 && Math.sqrt((v.x - p.x) * (v.x - p.x) + (v.y - p.y) * (v.y - p.y)) < v.r) { trung(v, 1, -0.4); return; }
    }
  });
  cv.addEventListener('pointermove', function (e) {
    if (!S.troDang || S.tro !== 'chem') return;
    var p = diemTro(e);
    themDiem(2, p.x, p.y, performance.now());
  });
  ['pointerup', 'pointercancel'].forEach(function (n) { cv.addEventListener(n, function () { S.troDang = false; }); });

  /* ================= tro 2: the duc ABC ================= */
  function nguoiTheDuc(kq, now) {
    var lm = kq && kq.landmarks && kq.landmarks[0], c = S.cau[S.i], ben = -1;
    S.nguoi = lm || null;
    if (lm) ben = phanLoaiTuThe(lm, c ? c.opts.length : 4, tyLe());
    if (!lm && (S.pha === 'hoi' || S.pha === 'dem')) tb('Không thấy bạn — lùi lại cho camera thấy từ đầu đến bụng nhé');
    else tb('');
    if (ben !== S.benHien) {
      S.benHien = ben;
      $('vdDau').textContent = ben >= 0 ? CHU[ben] : '🧍';
      $('vdDau').style.background = ben >= 0 ? MAU[ben] : '';
    }
    giuChon(ben, now);
  }
  function giuChon(ben, now) {
    if (S.pha !== 'hoi') return;
    // dau cau phai ha tay ve tu the nghi, tranh chot theo dang cua cau truoc
    if (S.canThang) {
      if (ben === -1) { if (!S.thangTu) S.thangTu = now; if (now - S.thangTu > 250) S.canThang = false; }
      else S.thangTu = 0;
      goiY(S.canThang ? 'Hạ hai tay xuống một chút…' : 'Tạo dáng để chọn đáp án!');
      if (S.canThang) return;
    }
    if (ben !== S.ben) { S.ben = ben; S.giuTu = now; S.tick = -1; }
    var p = ben === -1 ? 0 : Math.min(1, (now - S.giuTu) / GIU_TD);
    Array.prototype.forEach.call($('vdDap').children, function (el, i) {
      el.style.setProperty('--p', i === ben ? p : 0);
      el.classList.toggle('is-chon', i === ben);
    });
    var b = Math.floor(p * 5);
    if (ben !== -1 && b !== S.tick && b < 5) { S.tick = b; sGiu(p); }
    if (ben !== -1 && p >= 1) chot(ben);
  }
  function veTheDuc() {
    var lm = S.nguoi;
    if (!lm) return;
    var mau = S.benHien >= 0 ? MAU[S.benHien] : '#fff6ea', d = lm.map(raMan), lw = Math.max(5, KH.w * 0.009);
    cx.save();
    cx.lineCap = 'round'; cx.lineJoin = 'round';
    XUONG.forEach(function (n) {
      if (!hien(lm[n[0]]) || !hien(lm[n[1]])) return;
      cx.beginPath(); cx.moveTo(d[n[0]].x, d[n[0]].y); cx.lineTo(d[n[1]].x, d[n[1]].y);
      cx.lineWidth = lw + 6; cx.strokeStyle = 'rgba(20,13,29,.45)'; cx.stroke();
      cx.lineWidth = lw; cx.strokeStyle = mau; cx.stroke();
    });
    [11, 12, 13, 14, 15, 16].forEach(function (i) {
      if (!hien(lm[i])) return;
      cx.beginPath(); cx.arc(d[i].x, d[i].y, i > 14 ? lw * 1.8 : lw, 0, Math.PI * 2);
      cx.fillStyle = i > 14 ? '#ffc94d' : mau; cx.fill();
    });
    if (hien(lm[0]) && hien(lm[11]) && hien(lm[12])) {
      var rv = Math.abs(d[11].x - d[12].x) * 0.42;
      cx.beginPath(); cx.arc(d[0].x, d[0].y, Math.max(14, rv), 0, Math.PI * 2);
      cx.lineWidth = lw; cx.strokeStyle = mau; cx.stroke();
    }
    cx.restore();
  }

  /* ================= tro 3: cuoc dua ngoi sao ================= */
  function tayNgoiSao(kq, now) {
    var ds = (kq && kq.landmarks) || [], ty = tyLe(), theo = [null, null];
    ds.forEach(function (lm) {
      var k = raMan(lm[0]).x < KH.w / 2 ? 0 : 1, n = demNgon(lm, ty); // chia ben theo co tay
      var tot = n >= 1 && n <= 4;
      if (!theo[k] || (tot && !(theo[k].n >= 1 && theo[k].n <= 4))) theo[k] = { lm: lm, n: n };
    });
    S.tay = theo; S.tayLuc = now;
    if (ds.length) { S.khongTay = now; tb(''); }
    else if (S.pha !== 'hoi') tb('');
    else if (now - S.khongTay > 2500) tb('Hai bạn giơ bàn tay lên trước camera nhé ✋');
    giuNS(0, theo[0] ? theo[0].n : -1, now);
    giuNS(1, theo[1] ? theo[1].n : -1, now);
  }
  function giuNS(k, n, now) {
    var P = S.p[k], c = S.cau[S.i];
    P.n = n;
    if (S.pha !== 'hoi' || P.khoa !== -1) { veNguoi(k); return; }
    var chon = n >= 1 && n <= c.opts.length ? n - 1 : -1;
    if (P.canThang) { // nam tay / bo tay xuong truoc da
      if (chon === -1) { if (!P.thangTu) P.thangTu = now; if (now - P.thangTu > 250) P.canThang = false; }
      else P.thangTu = 0;
      P.p = 0; veNguoi(k);
      return;
    }
    if (chon !== P.ben) { P.ben = chon; P.giuTu = now; P.tick = -1; }
    P.p = chon === -1 ? 0 : Math.min(1, (now - P.giuTu) / GIU_NS);
    var b = Math.floor(P.p * 4);
    if (chon !== -1 && b !== P.tick && b < 4) { P.tick = b; sGiu(P.p); }
    veNguoi(k);
    if (chon !== -1 && P.p >= 1) khoaNS(k, chon);
  }
  function khoaNS(k, chon) {
    var P = S.p[k], c = S.cau[S.i];
    if (S.pha !== 'hoi' || P.khoa !== -1) return;
    P.khoa = chon; P.p = 0;
    if (chon === c.dung) { P.sao++; loNS(k); return; }
    sSai();
    gan(chon, '✖ ' + P.ten, k);
    danhDau(chon, 'is-sai');
    veNguoi(k);
    if (S.p[1 - k].khoa !== -1) loNS(-1);
    else goiY('<b class="is-sai">😅 ' + esc(P.ten) + ' chưa đúng — ' + esc(S.p[1 - k].ten) + ' còn cơ hội!</b>');
  }
  function loNS(k, hetGio) {
    if (S.pha !== 'hoi') return;
    S.pha = 'xong';
    var c = S.cau[S.i];
    Array.prototype.forEach.call($('vdDap').children, function (el, i) {
      if (i === c.dung) el.classList.add('is-dung'); else if (!el.classList.contains('is-sai')) el.classList.add('is-mo');
    });
    var tb2;
    if (k >= 0) {
      if (window.SaoGame) window.SaoGame.dung();
      sSao();
      gan(c.dung, '⭐ ' + S.p[k].ten, k);
      $('vdP' + k).classList.add('is-sao');
      tb2 = '⭐ ' + esc(S.p[k].ten) + ' giành được ngôi sao!';
    } else {
      if (hetGio) sSai();
      tb2 = (hetGio ? '⏰ Hết giờ!' : '😅 Cả hai bạn chưa đúng') + ' Đáp án: ' + CHU[c.dung];
    }
    S.goiY = null;
    $('vdDuoi').innerHTML = '<b class="' + (k >= 0 ? 'is-dung' : 'is-sai') + '">' + tb2 + '</b>' + (c.why ? '<span>' + esc(c.why) + '</span>' : '');
    veNguoi(0); veNguoi(1);
    setTimeout(function () { docZh(c.docSau); }, 700);
    var xong = S.i + 1 >= S.cau.length || (S.muc && Math.max(S.p[0].sao, S.p[1].sao) >= S.muc);
    setTimeout(xong ? ketThucNS : tiep, xong ? 2400 : 2800);
  }
  function veNguoi(k) {
    var P = S.p[k], el = $('vdP' + k), c = S.cau[S.i], n = P.n, trang = '', so, nhan;
    if (c && P.khoa !== -1) { trang = P.khoa === c.dung ? 'dung' : 'sai'; so = CHU[P.khoa]; nhan = trang === 'dung' ? 'Chính xác!' : 'Sai — chờ câu sau'; }
    else if (!c || S.pha !== 'hoi') { so = '✋'; nhan = 'Chuẩn bị…'; }
    else if (P.canThang && n >= 1) { so = n; nhan = 'Nắm tay lại trước đã ✊'; }
    else if (n < 0) { so = '✋'; nhan = 'Giơ tay lên'; }
    else if (n === 0) { so = '✊'; nhan = 'Sẵn sàng!'; }
    else if (n > c.opts.length) { so = n; nhan = n === 5 ? 'Gập ngón cái lại' : 'Chỉ có ' + c.opts.length + ' đáp án'; }
    else { so = n; nhan = '→ ' + CHU[n - 1]; trang = 'giu'; }
    el.style.setProperty('--p', P.p.toFixed(3));
    var khoa = [P.ten, P.sao, trang, so, nhan, S.muc].join('|');
    if (khoa === P.khoaHien) return;
    P.khoaHien = khoa;
    el.classList.remove('is-dung', 'is-sai', 'is-giu');
    if (trang) el.classList.add('is-' + trang);
    el.innerHTML = '<div class="vd-nguoi-ten">' + esc(P.ten) + '</div>' +
      '<div class="vd-nguoi-sao">⭐ <b>' + P.sao + '</b>' + (S.muc ? '<small>/' + S.muc + '</small>' : '') + '</div>' +
      '<div class="vd-nguoi-ngon"><b>' + so + '</b></div><div class="vd-nguoi-nhan">' + nhan + '</div>';
  }
  function veNgoiSao() {
    var now = performance.now();
    if (now - S.tayLuc > 300) return;
    cx.save(); cx.lineCap = 'round';
    S.tay.forEach(function (t, k) {
      if (!t) return;
      var d = t.lm.map(raMan), lw = Math.max(3, KH.w * 0.005);
      cx.strokeStyle = MAU_NG[k]; cx.lineWidth = lw;
      NOI_TAY.forEach(function (n) { cx.beginPath(); cx.moveTo(d[n[0]].x, d[n[0]].y); cx.lineTo(d[n[1]].x, d[n[1]].y); cx.stroke(); });
      cx.fillStyle = '#fff';
      [4, 8, 12, 16, 20].forEach(function (i) { cx.beginPath(); cx.arc(d[i].x, d[i].y, lw * 1.6, 0, Math.PI * 2); cx.fill(); });
      var r = Math.max(18, KH.w * 0.025);
      cx.beginPath(); cx.arc(d[0].x, d[0].y + r * 1.2, r, 0, Math.PI * 2);
      cx.fillStyle = MAU_NG[k]; cx.fill();
      cx.fillStyle = '#fff'; cx.font = '800 ' + Math.round(r * 1.2) + 'px "Be Vietnam Pro",sans-serif';
      cx.textAlign = 'center'; cx.textBaseline = 'middle';
      cx.fillText(t.n < 0 ? '?' : String(t.n), d[0].x, d[0].y + r * 1.25);
    });
    cx.restore();
  }

  /* ================= cau hoi chung ================= */
  function veThe() {
    var c = S.cau[S.i], h = '';
    c.opts.forEach(function (o, i) {
      var tag = S.tro === 'chem' ? 'div' : 'button';
      h += '<' + tag + (tag === 'button' ? ' type="button"' : '') + ' class="vd-the" data-i="' + i + '" style="--m:' + MAU[i] + '">' +
        (S.tro === 'theduc' ? '<span class="vd-the-hinh">' + HINH_TT[i] + '</span><span class="vd-the-tl">' + TU_THE[i] + '</span>' : '') +
        (S.tro === 'ngoisao' ? '<span class="vd-the-ngon"><b>' + (i + 1) + '</b> ngón</span>' : '') +
        '<span class="vd-the-chu"><i>' + CHU[i] + '</i><span' + (c.zhOpt ? ' class="is-zh"' : '') + '>' + esc(o) + '</span></span>' +
        '<span class="vd-the-day" aria-hidden="true"></span><span class="vd-the-tag"></span></' + tag + '>';
    });
    var d = $('vdDap');
    d.innerHTML = h;
    d.setAttribute('data-n', c.opts.length);
  }
  function danhDau(i, lop2) { var el = $('vdDap').children[i]; if (el) el.classList.add(lop2); }
  function gan(i, chu, k) { // nhan nho ten nguoi choi tren the
    var el = $('vdDap').children[i];
    if (el) el.querySelector('.vd-the-tag').insertAdjacentHTML('beforeend', '<em class="k' + k + '">' + esc(chu) + '</em>');
  }

  function moCau() {
    var c = S.cau[S.i], now = performance.now();
    S.pha = 'hoi';
    S.ben = -1; S.canThang = true; S.thangTu = 0; S.goiY = null; S.saiCau = 0;
    $('vdSo').textContent = 'Câu ' + (S.i + 1) + '/' + S.cau.length;
    $('vdChuoi').textContent = S.tro !== 'ngoisao' && S.chuoi >= 2 ? '🔥 ' + S.chuoi + ' câu đúng liên tiếp' : '';
    $('vdHoi').innerHTML = (c.ctx ? '<div class="vd-ctx">' + esc(c.ctx) + '</div>' : '') +
      '<div class="vd-hoi-chu' + (c.hoiZh ? ' is-zh' : '') + '">' + esc(c.hoi).replace('＿＿', '<span class="vd-trong">＿＿</span>') + '</div>' +
      '';
    veThe();
    S.conMs = (S.tro === 'chem' ? (lop ? 25 : 20) : (lop ? 20 : 15)) * 1000;
    S.hetLuc = now + S.conMs;
    S.giayCu = -1;
    S.khongTay = now;
    if (S.tro === 'chem') {
      chemBatDau(now); veTim();
      goiY(S.da === 'qua' ? 'Chém quả mang đáp án đúng! 🔪' : 'Chạm vào bong bóng mang đáp án đúng! ☝️');
    } else if (S.tro === 'ngoisao') {
      $('vdP0').classList.remove('is-sao'); $('vdP1').classList.remove('is-sao');
      S.p.forEach(function (P) { P.ben = -1; P.khoa = -1; P.canThang = true; P.thangTu = 0; P.p = 0; P.khoaHien = ''; });
      veNguoi(0); veNguoi(1);
      goiY('Giơ 1–' + c.opts.length + ' ngón tay rồi giữ yên để khoá đáp án');
    } else {
      $('vdTim').textContent = '';
      goiY('Hạ hai tay xuống một chút…');
    }
    docZh(c.docTruoc);
    demGio();
  }
  function demGio() {
    if (S.pha !== 'hoi') return;
    var con = S.hetLuc - performance.now();
    $('vdGio').style.width = Math.max(0, con / S.conMs * 100) + '%';
    $('vdGio').classList.toggle('is-gap', con < 5000);
    var giay = Math.ceil(con / 1000);
    if (giay !== S.giayCu && giay <= 5 && giay > 0) sTick(true);
    S.giayCu = giay;
    if (con <= 0) {
      if (S.tro === 'ngoisao') loNS(-1, true); else chot(-1);
      return;
    }
    setTimeout(demGio, 100);
  }
  // chot dap an cho tro chem / theduc (mot nguoi choi); tra ve so diem cong
  function chot(chon, daKeu) {
    if (S.pha !== 'hoi') return 0;
    S.pha = 'xong';
    var c = S.cau[S.i], dung = chon === c.dung, lan2 = S.saiCau > 0, cong = 0;
    var conLai = Math.max(0, S.hetLuc - performance.now());
    if (window.SaoGame) { if (dung) window.SaoGame.dung(); else window.SaoGame.sai(); }
    if (dung && !lan2) {
      S.dung++; S.chuoi++; S.chuoiMax = Math.max(S.chuoiMax, S.chuoi);
      cong = 100 + Math.round(50 * conLai / S.conMs) + Math.min(5, S.chuoi - 1) * 10;
      sDung();
    } else if (dung) {
      cong = 50;
      sDung();
    } else {
      S.chuoi = 0;
      if (!daKeu) sSai();
    }
    S.diem += cong;
    $('vdDiem').textContent = S.diem;
    var the = $('vdDap').children;
    Array.prototype.forEach.call(the, function (el, i) {
      el.style.setProperty('--p', 0);
      el.classList.remove('is-chon');
      if (i === c.dung) el.classList.add('is-dung');
      else if (i === chon) el.classList.add('is-sai');
      else if (!el.classList.contains('is-sai')) el.classList.add('is-mo');
    });
    if (S.tro === 'chem') loChem();
    var tb2 = chon === -1 ? '⏰ Hết giờ!' : dung ? (lan2 ? '👍 Đúng rồi (lần hai)!' : '🎉 Chính xác!') : '😅 Chưa đúng rồi';
    S.goiY = null;
    $('vdDuoi').innerHTML = '<b class="' + (dung ? 'is-dung' : 'is-sai') + '">' + tb2 + (dung ? '' : ' Đáp án: ' + CHU[c.dung]) + '</b>' +
      (c.why ? '<span>' + esc(c.why) + '</span>' : '');
    setTimeout(function () { docZh(c.docSau); }, 700);
    var cuoi = S.i + 1 >= S.cau.length;
    if (S.moiBan && !cuoi) {
      $('vdDuoi').insertAdjacentHTML('beforeend', '<div class="vd-moi">👉 Mời bạn tiếp theo lên! <button type="button" class="vd-go vd-go-sm" id="vdTiep">Câu tiếp ▶</button></div>');
      $('vdTiep').addEventListener('click', tiep);
      S.pha = 'cho';
    } else {
      setTimeout(tiep, cuoi ? 2200 : 2800);
    }
    return cong;
  }
  function tiep() {
    if (S.pha === 'hoi' || S.pha === 'het') return;
    S.i++;
    if (S.i >= S.cau.length) { ketThuc(); return; }
    moCau();
  }

  /* ================= ket qua ================= */
  function veKq(html) {
    S.pha = 'het';
    S.vat = []; S.hat = [];
    cx.clearRect(0, 0, KH.w, KH.h);
    $('vdChoi').hidden = true;
    $('vd').classList.remove('is-choi');
    var k = $('vdKq');
    k.hidden = false;
    k.innerHTML = '<div class="vd-kq-the">' + html + (window.SaoGame ? window.SaoGame.tongKetHtml() : '') +
      '<div class="vd-kq-nut"><button type="button" class="vd-go" id="vdLai">↺ Chơi lại</button>' +
      '<a class="vd-btn" href="' + (lop ? '/lop' : '/game') + '">Thoát</a></div></div>';
    $('vdLai').addEventListener('click', function () {
      k.hidden = true;
      $('vdHoa').innerHTML = '';
      $('vdSanh').hidden = false;
      $('vdDiem').hidden = true;
      $('vdTieuDe').textContent = '🤸 Vận động trả lời';
      $('vdBatDau').disabled = false;
      $('vdBatDau').textContent = '▶ Bắt đầu';
      S.pha = 'sanh';
      veCach();
    });
  }
  function kyLuc(diem) { // tra ve true neu pha ky luc cu (choi o nha)
    if (lop) return false;
    var key = 'hyv_tn_kl_vd_' + S.tro, kl = parseInt(localStorage.getItem(key) || '0', 10) || 0;
    if (diem <= kl) return false;
    try { localStorage.setItem(key, String(diem)); } catch (e) { /* bo qua */ }
    return kl > 0;
  }
  function ketThuc() {
    sHet();
    var n = S.cau.length, pt = n ? S.dung / n : 0;
    var sao = pt >= 0.9 ? 3 : pt >= 0.7 ? 2 : pt >= 0.4 ? 1 : 0, moi = kyLuc(S.diem);
    veKq('<div class="vd-kq-sao">' + [0, 1, 2].map(function (i) { return '<span class="' + (i < sao ? 'on' : '') + '" style="animation-delay:' + (i * 0.2) + 's">★</span>'; }).join('') + '</div>' +
      '<h2>' + (sao >= 3 ? 'Xuất sắc!' : sao >= 2 ? 'Giỏi lắm!' : sao >= 1 ? 'Khá lắm!' : 'Cố lên nhé!') + '</h2>' +
      '<div class="vd-kq-diem">' + S.diem + ' <small>điểm</small></div>' +
      '<p>' + (S.tro === 'chem' ? 'Đúng ngay lần đầu ' : 'Đúng ') + S.dung + '/' + n +
      (S.chuoiMax > 1 ? ' · chuỗi dài nhất ' + S.chuoiMax : '') + (moi ? ' · 🏆 Kỷ lục mới!' : '') + '</p>');
    if (sao >= 2) phaoGiay();
  }
  function ketThucNS() {
    sHet();
    var a = S.p[0], b = S.p[1], hoa = a.sao === b.sao, thang = a.sao > b.sao ? 0 : 1, moi = kyLuc(Math.max(a.sao, b.sao));
    veKq('<div class="vd-kq-cup" aria-hidden="true">' + (hoa ? '🤝' : '🏆') + '</div>' +
      '<h2>' + (hoa ? 'Hoà nhau rồi!' : esc(S.p[thang].ten) + ' thắng!') + '</h2>' +
      '<div class="vd-kq-ty">' +
      '<div class="k0' + (!hoa && thang === 0 ? ' is-thang' : '') + '"><span>' + esc(a.ten) + '</span><b>⭐ ' + a.sao + '</b></div>' +
      '<i>–</i>' +
      '<div class="k1' + (!hoa && thang === 1 ? ' is-thang' : '') + '"><span>' + esc(b.ten) + '</span><b>⭐ ' + b.sao + '</b></div></div>' +
      '<p>' + (hoa ? 'Hai bạn ngang tài ngang sức!' : 'Chúc mừng nhà vô địch!') + (moi ? ' · 🏆 Kỷ lục mới!' : '') + '</p>');
    phaoGiay();
  }
  function phaoGiay() {
    var o = $('vdHoa');
    o.innerHTML = '';
    if (itDong) return;
    var mau = ['#ef6a4f', '#1fa89a', '#ffc94d', '#8a5cd6', '#7ee2a2', '#ff8fb1'], h = '';
    for (var i = 0; i < 80; i++) {
      h += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;background:' + mau[i % mau.length] +
        ';animation-delay:' + (Math.random() * 1.2).toFixed(2) + 's;animation-duration:' + ngau(2.4, 4).toFixed(2) + 's;--x:' + Math.round(ngau(-80, 80)) + 'px"></i>';
    }
    o.innerHTML = h;
    setTimeout(function () { o.innerHTML = ''; }, 6000);
  }

  /* ================= khoi dong ================= */
  veTieng();
  veSanh();
  $('vdBatDau').addEventListener('click', batDau);
  $('vdTieng').addEventListener('click', function () {
    S.tieng = !S.tieng;
    ghiLS('hyv_vandong_tieng', S.tieng);
    veTieng();
    if (S.tieng) sDung();
  });
  $('vdFull').addEventListener('click', function () {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(function () { /* bo qua */ });
  });
  // bam vao the: the duc chon luon; ngoi sao: nua trai the = ban trai, nua phai = ban phai
  $('vdDap').addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('.vd-the') : null;
    if (!el || S.pha !== 'hoi') return;
    var i = +el.getAttribute('data-i');
    if (S.tro === 'theduc') chot(i);
    else if (S.tro === 'ngoisao') {
      var r = el.getBoundingClientRect();
      khoaNS(e.clientX - r.left < r.width / 2 ? 0 : 1, i);
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.target && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    if ((e.code === 'Space' || e.key === 'Enter') && S.pha === 'cho') { e.preventDefault(); tiep(); return; }
    if (S.pha !== 'hoi' || !e.key) return;
    var n = S.cau[S.i].opts.length, k = '1234'.indexOf(e.key), k2 = '7890'.indexOf(e.key), kc2 = 'abcd'.indexOf(e.key.toLowerCase());
    if (S.tro === 'theduc') { var i = k >= 0 ? k : kc2; if (i >= 0 && i < n) chot(i); }
    else if (S.tro === 'chem') { if (k >= 0 && S.vat[k] && S.vat[k].tt === 'bay' && !S.vat[k].sang) trung(S.vat[k], 1, -0.4); }
    else {
      if (k >= 0 && k < n) khoaNS(0, k);
      if (k2 >= 0 && k2 < n) khoaNS(1, k2);
    }
  });
})(typeof window !== 'undefined' ? window : this);
