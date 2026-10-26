/* Quiz nghieng dau (/nghieng) — hoc sinh tra loi bang cach nghieng dau sang trai /
   phai (hoac cuoi / ha mieng) truoc camera. Nhan dien khuon mat bang MediaPipe Face
   Landmarker chay ngay tren trinh duyet (nghieng-mp.js nap tu CDN), hinh anh khong
   gui di dau.
   Cau hoi nhan qua localStorage 'hyv_nghieng' do trang goi ghi truoc khi mo:
     { nguon: 'lop' | 'nha', nhan, cau: [{ hoi, ctx, trai, phai, dung (0 trai / 1 phai),
       why, docTruoc, docSau, zhOpt }] }
   'lop' = Che do lop hoc (may chieu + webcam), 'nha' = trang /game.            */
(function () {
  'use strict';

  var WASM = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm';
  var MO_HINH = 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';
  var GOC = 15;          // nghieng qua 15 do moi tinh
  var GIU_MS = 700;      // giu bao lau thi chot dap an
  var GIAY = 15;         // thoi gian moi cau (tren lop 20)
  var KL_KEY = 'hyv_tn_kl_nghieng';

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

  var cfg = docLS('hyv_nghieng', null);
  var lop = !!(cfg && cfg.nguon === 'lop');
  var S = {
    cheDo: 'nghieng', moiBan: false, cau: [], i: 0, diem: 0, dung: 0, chuoi: 0, chuoiMax: 0,
    pha: 'sanh', lm: null, video: null, chay: false, tsCuoi: -1,
    goc: 0, nen: 0, ben: -1, giuTu: 0, canThang: true, thangTu: 0, conMs: 0, hetLuc: 0, tienDo: 0, tick: -1,
    tieng: docLS('hyv_nghieng_tieng', true) !== false
  };

  /* ---------------- am thanh ---------------- */
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
    $('nhTieng').textContent = S.tieng ? '🔊' : '🔇';
    $('nhTieng').classList.toggle('is-off', !S.tieng);
  }

  /* ---------------- sanh ---------------- */
  function veSanh() {
    $('nhThoat').href = lop ? '/lop' : '/game';
    $('nhNhan').textContent = cfg && cfg.nhan ? ' · ' + cfg.nhan : '';
    var n = cfg && cfg.cau ? cfg.cau.length : 0;
    $('nhSoCauTxt').textContent = n ? 'Gồm ' + Math.min(n, lop ? n : 12) + ' câu hỏi' : 'Chưa có câu hỏi';
    $('nhBuocLop').hidden = !lop;
    $('nhMoiBanO').hidden = !lop;
    if (!n) {
      $('nhBatDau').disabled = true;
      $('nhLoi').innerHTML = lop
        ? 'Chưa có câu hỏi. Quay lại <a href="/lop">Chế độ lớp học</a>, chọn bài rồi bấm “Quiz nghiêng đầu”.'
        : 'Chưa có câu hỏi. Vào <a href="/game">trang Trò chơi</a>, chọn bài rồi chọn “Quiz nghiêng đầu”.';
    }
    var nut = document.querySelectorAll('.nh-chedo button');
    Array.prototype.forEach.call(nut, function (b) {
      b.addEventListener('click', function () {
        S.cheDo = b.getAttribute('data-k');
        Array.prototype.forEach.call(nut, function (x) { x.classList.toggle('is-on', x === b); });
        $('nhBuoc2').innerHTML = S.cheDo === 'nghieng'
          ? '<span>↔️</span><div><b>Nghiêng đầu để chọn đáp án</b><small>Nghiêng sang trái hoặc phải và giữ một chút cho đến khi ô đáp án đầy màu.</small></div>'
          : '<span>😄</span><div><b>Cười để chọn bên trái, há miệng để chọn bên phải</b><small>Giữ nét mặt một chút cho đến khi ô đáp án đầy màu.</small></div>';
      });
    });
  }

  /* ---------------- camera + nhan dien ---------------- */
  function cho(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function choMP() {
    if (window.NghiengMP) return Promise.resolve(window.NghiengMP);
    return new Promise(function (ok, loi) {
      window.addEventListener('nghieng-mp', function () { ok(window.NghiengMP); });
      window.addEventListener('nghieng-mp-loi', function () { loi(new Error(window.NghiengMPLoi || 'không tải được')); });
      if (window.NghiengMPLoi) loi(new Error(window.NghiengMPLoi));
      setTimeout(function () { loi(new Error('mạng chậm, quá thời gian chờ')); }, 45000);
    });
  }
  function taoLm(MP) {
    return MP.FilesetResolver.forVisionTasks(WASM).then(function (fs) {
      function tao(dv) {
        return MP.FaceLandmarker.createFromOptions(fs, {
          baseOptions: { modelAssetPath: MO_HINH, delegate: dv },
          runningMode: 'VIDEO', numFaces: 1, outputFaceBlendshapes: true
        });
      }
      return tao('GPU').catch(function () { return tao('CPU'); });
    });
  }
  function moCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return Promise.reject(new Error('Trình duyệt này không mở được camera.'));
    return navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } } })
      .then(function (st) {
        var v = $('nhVideo');
        v.srcObject = st;
        S.video = v;
        return v.play().catch(function () { /* da muted */ });
      });
  }

  function batDau() {
    var b = $('nhBatDau');
    b.disabled = true;
    $('nhLoi').textContent = '';
    tone(1, 0.01); // mo khoa am thanh trong cu bam
    b.textContent = 'Đang mở camera…';
    var camP = moCamera();
    camP.then(function () {
      if (S.lm) return S.lm;
      b.textContent = S.lm ? '' : 'Đang tải bộ nhận diện khuôn mặt…';
      return choMP().then(taoLm).then(function (lm) { S.lm = lm; return lm; });
    }).then(function () {
      var ds = cfg.cau.slice();
      S.cau = lop ? ds : tron(ds).slice(0, 12);
      S.moiBan = lop && $('nhMoiBan').checked;
      S.i = 0; S.diem = 0; S.dung = 0; S.chuoi = 0; S.chuoiMax = 0;
      $('nhSanh').hidden = true;
      $('nhKq').hidden = true;
      $('nhChoi').hidden = false;
      $('nhDiem').hidden = false;
      $('nhDiem').textContent = '0';
      if (!S.chay) { S.chay = true; requestAnimationFrame(vong); }
      return demNguoc();
    }).then(function () { moCau(); }).catch(function (e) {
      b.disabled = false;
      b.textContent = '▶ Bắt đầu';
      var m = e && e.name === 'NotAllowedError'
        ? 'Cần cho phép dùng camera: bấm biểu tượng camera/ổ khoá trên thanh địa chỉ rồi bấm Bắt đầu lại.'
        : e && e.name === 'NotFoundError' ? 'Không tìm thấy camera trên máy này.'
        : 'Chưa mở được trò chơi: ' + (e && e.message ? e.message : 'lỗi không rõ') + '. Kiểm tra mạng rồi thử lại.';
      $('nhLoi').textContent = m;
    });
  }

  function demNguoc() {
    S.pha = 'dem';
    $('nhHoi').innerHTML = '<span class="nh-dem" id="nhDemSo">3</span>';
    $('nhDuoi').textContent = 'Ngồi thẳng, nhìn vào camera nhé!';
    return cho(100).then(function () { sDem(); return cho(900); })
      .then(function () { $('nhDemSo').textContent = '2'; sDem(); return cho(900); })
      .then(function () { $('nhDemSo').textContent = '1'; sDem(); return cho(900); })
      .then(function () { sDem(true); });
  }

  // Mot vong khung hinh: doc goc nghieng / net mat, cap nhat thanh giu
  function vong() {
    if (!S.chay) return;
    requestAnimationFrame(vong);
    var v = S.video;
    if (!v || !S.lm || v.readyState < 2 || v.currentTime === S.tsCuoi) return;
    S.tsCuoi = v.currentTime;
    var kq;
    try { kq = S.lm.detectForVideo(v, performance.now()); } catch (e) { return; }
    var mat = kq && kq.faceLandmarks && kq.faceLandmarks[0];
    var ben = -1;
    if (!mat) {
      $('nhTb').textContent = 'Không thấy khuôn mặt — lại gần camera hơn nhé';
      $('nhTb').hidden = false;
      $('nhDau').classList.add('is-mat');
    } else {
      $('nhTb').hidden = true;
      $('nhDau').classList.remove('is-mat');
      // diem 33 = duoi mat phai, 263 = duoi mat trai cua nguoi trong anh (anh chua lat)
      var w = v.videoWidth, h = v.videoHeight, a = mat[33], b = mat[263];
      var goc = Math.atan2((b.y - a.y) * h, (b.x - a.x) * w) * 180 / Math.PI;
      S.goc = S.goc * 0.6 + goc * 0.4;
      // tu chinh "thang dau" cho tung ban (camera dat hoi lech)
      if (Math.abs(S.goc - S.nen) < 8) S.nen = S.nen * 0.97 + S.goc * 0.03;
      var g = S.goc - S.nen;
      $('nhDau').style.transform = 'rotate(' + (-g).toFixed(1) + 'deg)';
      if (S.cheDo === 'nghieng') {
        // nghieng ve vai trai cua minh -> goc duong -> tren man hinh (da lat guong) nghieng sang trai
        if (g > GOC) ben = 0; else if (g < -GOC) ben = 1;
        $('nhDau').textContent = ben === 0 ? '😜' : ben === 1 ? '😝' : '🙂';
      } else {
        var bs = kq.faceBlendshapes && kq.faceBlendshapes[0] ? kq.faceBlendshapes[0].categories : [];
        var cuoi = 0, ha = 0;
        bs.forEach(function (c) {
          if (c.categoryName === 'mouthSmileLeft' || c.categoryName === 'mouthSmileRight') cuoi += c.score / 2;
          if (c.categoryName === 'jawOpen') ha = c.score;
        });
        if (ha > 0.45) ben = 1; else if (cuoi > 0.55) ben = 0;
        $('nhDau').textContent = ben === 0 ? '😄' : ben === 1 ? '😮' : '😐';
        $('nhDau').style.transform = 'none';
      }
    }
    xuLyBen(ben);
  }

  function xuLyBen(ben) {
    if (S.pha !== 'hoi') return;
    var now = performance.now();
    // dau cau phai ve tu the thang mot chut, tranh chot ngay theo tu the cau truoc
    if (S.canThang) {
      if (ben === -1) { if (!S.thangTu) S.thangTu = now; if (now - S.thangTu > 250) S.canThang = false; }
      else S.thangTu = 0;
      $('nhDuoi').textContent = S.canThang ? (S.cheDo === 'nghieng' ? 'Giữ đầu thẳng một chút…' : 'Giữ mặt bình thường một chút…') : '';
      if (S.canThang) return;
    }
    if (ben !== S.ben) { S.ben = ben; S.giuTu = now; S.tick = -1; }
    var p = ben === -1 ? 0 : Math.min(1, (now - S.giuTu) / GIU_MS);
    ['nhTrai', 'nhPhai'].forEach(function (id, i) {
      $(id).style.setProperty('--p', i === ben ? p : 0);
      $(id).classList.toggle('is-nghieng', i === ben);
    });
    var buoc = Math.floor(p * 5);
    if (ben !== -1 && buoc !== S.tick && buoc < 5) { S.tick = buoc; sGiu(p); }
    if (ben !== -1 && p >= 1) chot(ben);
  }

  /* ---------------- cau hoi ---------------- */
  function moCau() {
    var c = S.cau[S.i];
    S.pha = 'hoi';
    S.ben = -1; S.canThang = true; S.thangTu = 0;
    $('nhSo').textContent = 'Câu ' + (S.i + 1) + '/' + S.cau.length;
    $('nhChuoi').textContent = S.chuoi >= 2 ? '🔥 ' + S.chuoi + ' câu đúng liên tiếp' : '';
    $('nhHoi').innerHTML = (c.ctx ? '<div class="nh-ctx">' + esc(c.ctx) + '</div>' : '') +
      '<div class="nh-hoi-chu' + (c.hoiZh ? ' is-zh' : '') + '">' + esc(c.hoi).replace('＿＿', '<span class="nh-trong">＿＿</span>') + '</div>' +
      (c.py ? '<div class="nh-py">' + esc(c.py) + '</div>' : '');
    [['nhTrai', c.trai], ['nhPhai', c.phai]].forEach(function (x) {
      var el = $(x[0]);
      el.className = 'nh-opt ' + (x[0] === 'nhTrai' ? 'trai' : 'phai') + (c.zhOpt ? ' is-zh' : '');
      el.style.setProperty('--p', 0);
      el.querySelector('.nh-opt-t').textContent = x[1];
    });
    $('nhHuongTrai').textContent = S.cheDo === 'nghieng' ? '⬅ Nghiêng trái' : '😄 Cười';
    $('nhHuongPhai').textContent = S.cheDo === 'nghieng' ? 'Nghiêng phải ➡' : 'Há miệng 😮';
    S.conMs = (lop ? 20 : GIAY) * 1000;
    S.hetLuc = performance.now() + S.conMs;
    S.giayCu = -1;
    docZh(c.docTruoc);
    demGio();
  }

  function demGio() {
    if (S.pha !== 'hoi') return;
    var con = S.hetLuc - performance.now();
    $('nhGio').style.width = Math.max(0, con / S.conMs * 100) + '%';
    $('nhGio').classList.toggle('is-gap', con < 5000);
    var giay = Math.ceil(con / 1000);
    if (giay !== S.giayCu && giay <= 5 && giay > 0) sTick(true);
    S.giayCu = giay;
    if (con <= 0) { chot(-1); return; }
    setTimeout(demGio, 100);
  }

  function chot(ben) {
    if (S.pha !== 'hoi') return;
    S.pha = 'xong';
    var c = S.cau[S.i];
    var dung = ben === c.dung;
    var conLai = Math.max(0, S.hetLuc - performance.now());
    if (dung) {
      S.dung++; S.chuoi++; S.chuoiMax = Math.max(S.chuoiMax, S.chuoi);
      S.diem += 100 + Math.round(50 * conLai / S.conMs) + Math.min(5, S.chuoi - 1) * 10;
      sDung();
    } else {
      S.chuoi = 0;
      sSai();
    }
    $('nhDiem').textContent = S.diem;
    var dEl = c.dung === 0 ? $('nhTrai') : $('nhPhai');
    dEl.classList.add('is-dung');
    if (ben !== -1 && !dung) (ben === 0 ? $('nhTrai') : $('nhPhai')).classList.add('is-sai');
    if (ben === -1) (c.dung === 0 ? $('nhPhai') : $('nhTrai')).classList.add('is-mo');
    var tb = ben === -1 ? '⏰ Hết giờ!' : dung ? '🎉 Chính xác!' : '😅 Chưa đúng rồi';
    $('nhDuoi').innerHTML = '<b class="' + (dung ? 'is-dung' : 'is-sai') + '">' + tb + '</b>' + (c.why ? '<span>' + esc(c.why) + '</span>' : '');
    setTimeout(function () { docZh(c.docSau); }, 700);
    var cuoi = S.i + 1 >= S.cau.length;
    if (S.moiBan && !cuoi) {
      $('nhDuoi').insertAdjacentHTML('beforeend', '<div class="nh-moi">👉 Mời bạn tiếp theo lên! <button type="button" class="nh-go nh-go-sm" id="nhTiep">Câu tiếp ▶</button></div>');
      $('nhTiep').addEventListener('click', tiep);
      S.pha = 'cho';
    } else {
      setTimeout(tiep, cuoi ? 2200 : 2600);
    }
  }
  function tiep() {
    if (S.pha === 'hoi') return;
    S.i++;
    if (S.i >= S.cau.length) { ketThuc(); return; }
    moCau();
  }

  function ketThuc() {
    S.pha = 'het';
    sHet();
    var pt = S.cau.length ? S.dung / S.cau.length : 0;
    var sao = pt >= 0.9 ? 3 : pt >= 0.7 ? 2 : pt >= 0.4 ? 1 : 0;
    var moi = false;
    if (!lop) {
      var kl = parseInt(localStorage.getItem(KL_KEY) || '0', 10) || 0;
      if (S.diem > kl) { moi = kl > 0; try { localStorage.setItem(KL_KEY, String(S.diem)); } catch (e) { /* bo qua */ } }
    }
    $('nhChoi').hidden = true;
    var k = $('nhKq');
    k.hidden = false;
    k.innerHTML = '<div class="nh-kq-the">' +
      '<div class="nh-kq-sao">' + [0, 1, 2].map(function (i) { return '<span class="' + (i < sao ? 'on' : '') + '" style="animation-delay:' + (i * 0.2) + 's">★</span>'; }).join('') + '</div>' +
      '<h2>' + (sao >= 3 ? 'Xuất sắc!' : sao >= 2 ? 'Giỏi lắm!' : sao >= 1 ? 'Khá lắm!' : 'Cố lên nhé!') + '</h2>' +
      '<div class="nh-kq-diem">' + S.diem + ' <small>điểm</small></div>' +
      '<p>Đúng ' + S.dung + '/' + S.cau.length + (S.chuoiMax > 1 ? ' · chuỗi dài nhất ' + S.chuoiMax : '') + (moi ? ' · 🏆 Kỷ lục mới!' : '') + '</p>' +
      '<div class="nh-kq-nut"><button type="button" class="nh-go" id="nhLai">↺ Chơi lại</button>' +
      '<a class="nh-btn" href="' + (lop ? '/lop' : '/game') + '">Thoát</a></div></div>';
    $('nhLai').addEventListener('click', function () {
      k.hidden = true;
      $('nhSanh').hidden = false;
      $('nhBatDau').disabled = false;
      $('nhBatDau').textContent = '▶ Bắt đầu';
    });
  }

  /* ---------------- khoi dong ---------------- */
  veTieng();
  veSanh();
  $('nhBatDau').addEventListener('click', batDau);
  $('nhTieng').addEventListener('click', function () {
    S.tieng = !S.tieng;
    try { localStorage.setItem('hyv_nghieng_tieng', JSON.stringify(S.tieng)); } catch (e) { /* bo qua */ }
    veTieng();
    if (S.tieng) sDung();
  });
  $('nhFull').addEventListener('click', function () {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(function () { /* bo qua */ });
  });
  // Bam chuot vao o dap an cung chon duoc (du phong khi camera kem / thu tren may)
  ['nhTrai', 'nhPhai'].forEach(function (id, i) {
    $(id).addEventListener('click', function () { if (S.pha === 'hoi') chot(i); });
  });
  document.addEventListener('keydown', function (e) {
    if ((e.code === 'Space' || e.key === 'Enter') && S.pha === 'cho') { e.preventDefault(); tiep(); }
    else if (e.key === 'ArrowLeft' && S.pha === 'hoi') chot(0);
    else if (e.key === 'ArrowRight' && S.pha === 'hoi') chot(1);
  });
})();
