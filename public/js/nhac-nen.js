/* Nhac nen cho tro choi — tong hop bang Web Audio, khong can file mp3.
   Ba kieu: 'vui' (C – Am – F – G, nhun nhay), 'gap' (Am – F – G – E, doi khang / gap gap),
   'em' (F – Dm – Bb – C, nhe nhang cho tro can suy nghi).
   Tu nho tieng khi tro choi dang doc (speechSynthesis hoac the <audio>/new Audio()).
   Mot lua chon bat/tat chung cho moi tro (localStorage hyv_nhac_nen); khi dang choi
   co nut 🎵 noi o goc duoi trai de giao vien tat nhanh.
   Dung: NhacNen.bat({ kieu, ctx, nut }) luc bat dau choi, NhacNen.tat() luc ket thuc / thoat. */
(function (root) {
  'use strict';

  var KEY = 'hyv_nhac_nen';
  var TO = 0.07, NHO = 0.02; // am luong chinh / khi dang doc

  // cau: 4 cau x 4 o nhip x 8 not moc (0 = nghi); hop: quang cua hop am dem moi o
  var KIEU = {
    vui: {
      bpm: 124, mel: 'square', melTo: 0.16, goc: [48, 45, 41, 43], hop: [[0, 4, 7], [0, 3, 7], [0, 4, 7], [0, 4, 7]],
      bass: [0, null, 12, null, 0, 7, 12, 7], kick: [0, 4], snare: [2, 6], hat: [1, 3, 5, 7],
      cau: [
        [[72, 0, 76, 79, 76, 0, 72, 74], [76, 0, 72, 69, 72, 0, 76, 0], [77, 0, 76, 72, 74, 0, 72, 0], [74, 0, 79, 0, 76, 74, 71, 74]],
        [[79, 0, 79, 76, 79, 0, 81, 0], [76, 0, 72, 0, 69, 72, 76, 0], [72, 0, 77, 0, 76, 0, 72, 74], [79, 0, 74, 0, 71, 0, 74, 0]],
        null,
        [[79, 0, 79, 76, 79, 0, 81, 0], [84, 0, 81, 0, 79, 76, 72, 0], [77, 76, 74, 72, 74, 0, 77, 0], [79, 0, 0, 74, 72, 0, 0, 0]]
      ]
    },
    gap: {
      bpm: 140, mel: 'square', melTo: 0.14, goc: [45, 41, 43, 40], hop: [[0, 3, 7], [0, 4, 7], [0, 4, 7], [0, 4, 7]],
      bass: [0, 0, 12, 0, 0, 0, 12, 0], kick: [0, 3, 4], snare: [2, 6], hat: [0, 1, 2, 3, 4, 5, 6, 7],
      cau: [
        [[76, 0, 72, 0, 69, 72, 76, 79], [77, 0, 76, 0, 72, 0, 69, 0], [74, 0, 71, 74, 79, 0, 74, 0], [76, 0, 71, 0, 68, 71, 76, 0]],
        [[81, 0, 79, 76, 0, 76, 79, 81], [77, 76, 72, 0, 77, 0, 81, 0], [79, 0, 74, 0, 71, 74, 79, 0], [80, 0, 76, 0, 71, 0, 68, 0]],
        null,
        [[81, 0, 84, 0, 81, 79, 76, 0], [77, 0, 81, 0, 84, 0, 81, 0], [79, 0, 83, 0, 79, 0, 74, 0], [76, 0, 80, 0, 83, 0, 0, 0]]
      ]
    },
    em: {
      bpm: 96, mel: 'triangle', melTo: 0.22, goc: [41, 38, 46, 48], hop: [[0, 4, 7], [0, 3, 7], [0, 4, 7], [0, 4, 7]],
      bass: [0, null, null, null, 7, null, null, null], kick: [0], snare: [], hat: [2, 6],
      cau: [
        [[72, 0, 77, 0, 76, 0, 72, 0], [74, 0, 0, 77, 74, 0, 69, 0], [70, 0, 74, 0, 77, 0, 74, 0], [72, 0, 76, 0, 79, 0, 0, 0]],
        [[81, 0, 79, 77, 0, 0, 72, 0], [77, 0, 74, 0, 72, 0, 69, 0], [74, 0, 77, 0, 82, 0, 81, 0], [79, 0, 76, 0, 72, 0, 0, 0]],
        null,
        [[77, 0, 81, 0, 84, 0, 81, 0], [77, 0, 74, 0, 77, 0, 81, 0], [82, 0, 81, 0, 77, 0, 74, 0], [72, 0, 0, 0, 77, 0, 0, 0]]
      ]
    }
  };
  Object.keys(KIEU).forEach(function (k) { KIEU[k].cau[2] = KIEU[k].cau[0]; });

  var ac = null, chu = null, on = null, hen = null, buoc = 0, tiep = 0;
  var chay = false, phien = false, K = KIEU.vui, NUA = 60 / K.bpm / 2, nut = null, coNut = true;

  function docPref() { try { return localStorage.getItem(KEY) !== '0'; } catch (e) { return true; } }
  function ghiPref(v) { try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) { /* bo qua */ } }
  function hz(m) { return 440 * Math.pow(2, (m - 69) / 12); }

  // Theo doi am thanh dang phat (doc tu, nghe) de nho nhac xuong
  var dangPhat = [];
  if (root.HTMLMediaElement) {
    var play0 = root.HTMLMediaElement.prototype.play;
    root.HTMLMediaElement.prototype.play = function () {
      var el = this;
      if (!el.__nn) {
        el.__nn = 1;
        var bo = function () { var i = dangPhat.indexOf(el); if (i >= 0) dangPhat.splice(i, 1); };
        el.addEventListener('playing', function () { if (dangPhat.indexOf(el) < 0) dangPhat.push(el); });
        el.addEventListener('pause', bo); el.addEventListener('ended', bo); el.addEventListener('error', bo);
      }
      return play0.apply(el, arguments);
    };
  }
  function dangDoc() {
    if (root.speechSynthesis && root.speechSynthesis.speaking) return true;
    for (var i = dangPhat.length - 1; i >= 0; i--) {
      if (dangPhat[i].paused || dangPhat[i].ended) dangPhat.splice(i, 1);
      else if (!dangPhat[i].muted && dangPhat[i].volume > 0) return true;
    }
    return false;
  }

  function dung() {
    if (chu) return true;
    try {
      if (!ac) { var AC = root.AudioContext || root.webkitAudioContext; if (!AC) return false; ac = new AC(); }
      chu = ac.createGain(); chu.gain.value = 0.0001;
      var loc = ac.createBiquadFilter(); loc.type = 'lowpass'; loc.frequency.value = 3200;
      chu.connect(loc); loc.connect(ac.destination);
      var n = Math.floor(ac.sampleRate * 0.3), buf = ac.createBuffer(1, n, ac.sampleRate), d = buf.getChannelData(0);
      for (var i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
      on = buf;
      return true;
    } catch (e) { return false; }
  }
  function not(f, t, dai, kieu, to) {
    var o = ac.createOscillator(), g = ac.createGain();
    o.type = kieu; o.frequency.setValueAtTime(f, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(to, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dai);
    o.connect(g); g.connect(chu);
    o.start(t); o.stop(t + dai + 0.02);
  }
  function kick(t) {
    var o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(48, t + 0.14);
    g.gain.setValueAtTime(0.9, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.connect(g); g.connect(chu); o.start(t); o.stop(t + 0.2);
  }
  function xoe(t, dai, tan, to) { // hi-hat / snare tu tieng on
    var s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = on; f.type = tan > 4000 ? 'highpass' : 'bandpass'; f.frequency.value = tan;
    g.gain.setValueAtTime(to, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dai);
    s.connect(f); f.connect(g); g.connect(chu); s.start(t); s.stop(t + dai + 0.02);
  }
  function co(ds, k) { return ds.indexOf(k) >= 0; }
  function datBuoc(i, t) {
    var o = Math.floor(i / 8) % 16, k = i % 8; // 16 o nhip = 4 cau x 4 o
    var dong = o % 4, goc = K.goc[dong], m = K.cau[Math.floor(o / 4)][dong][k];
    if (m) not(hz(m), t, NUA * 1.6, K.mel, K.melTo);
    if (K.bass[k] != null) not(hz(goc + K.bass[k]), t, NUA * 0.9, 'triangle', 0.5);
    if (co(K.kick, k)) kick(t);
    if (co(K.snare, k)) xoe(t, 0.12, 1800, 0.25);
    if (co(K.hat, k)) xoe(t, 0.04, 7000, 0.1);
    if (k === 0) K.hop[dong].forEach(function (x) { not(hz(goc + 24 + x), t, NUA * 7, 'sine', 0.05); });
  }
  function lich() {
    if (!chay) return;
    var muc = dangDoc() ? NHO : TO;
    if (Math.abs(chu.gain.value - muc) > 0.004) chu.gain.setTargetAtTime(muc, ac.currentTime, 0.12);
    if (tiep < ac.currentTime) tiep = ac.currentTime + 0.05; // tab bi treo lau: khong don not cu
    while (tiep < ac.currentTime + 0.15) { datBuoc(buoc++, tiep); tiep += NUA; }
  }

  function phat() {
    if (chay || !dung()) return;
    if (ac.state === 'suspended') ac.resume();
    chay = true;
    buoc = 0; tiep = ac.currentTime + 0.08;
    chu.gain.cancelScheduledValues(ac.currentTime);
    chu.gain.setValueAtTime(0.0001, ac.currentTime);
    chu.gain.exponentialRampToValueAtTime(TO, ac.currentTime + 1.2);
    hen = setInterval(lich, 40);
    lich();
  }
  function ngung() {
    if (!chay) return;
    chay = false;
    clearInterval(hen); hen = null;
    try {
      chu.gain.cancelScheduledValues(ac.currentTime);
      chu.gain.setTargetAtTime(0.0001, ac.currentTime, 0.12);
    } catch (e) { /* bo qua */ }
  }

  // Nut noi bat/tat (chi hien khi dang trong luot choi)
  function veNut() {
    if (!nut && document.body) {
      nut = document.createElement('button');
      nut.type = 'button';
      var s = nut.style;
      s.position = 'fixed'; s.left = '12px'; s.bottom = '12px'; s.zIndex = '2147483000';
      s.width = '44px'; s.height = '44px'; s.borderRadius = '50%'; s.border = '0';
      s.background = 'rgba(30, 22, 40, .72)'; s.color = '#fff'; s.fontSize = '20px'; s.lineHeight = '44px';
      s.padding = '0'; s.cursor = 'pointer'; s.boxShadow = '0 4px 14px rgba(0, 0, 0, .25)';
      nut.addEventListener('click', function (e) { e.stopPropagation(); datBat(!docPref()); });
      document.body.appendChild(nut);
    }
    if (!nut) return;
    var bat = docPref();
    nut.hidden = !(phien && coNut);
    nut.style.display = nut.hidden ? 'none' : '';
    nut.textContent = bat ? '🎵' : '🔇';
    nut.style.opacity = bat ? '1' : '.6';
    nut.title = bat ? 'Tắt nhạc nền' : 'Bật nhạc nền';
    nut.setAttribute('aria-label', nut.title);
  }

  function bat(opt) {
    opt = opt || {};
    if (opt.ctx && !ac) ac = opt.ctx;
    var moi = KIEU[opt.kieu] || KIEU.vui;
    if (chay && moi !== K) ngung();
    K = moi; NUA = 60 / K.bpm / 2;
    phien = true;
    coNut = opt.nut !== false;
    if (docPref()) phat();
    veNut();
  }
  function tat() {
    phien = false;
    ngung();
    veNut();
  }
  function datBat(v) {
    ghiPref(v);
    if (v && phien) phat(); else ngung();
    veNut();
  }

  // Trinh duyet chan am thanh truoc cu bam dau tien: lan bam ke tiep thi mo lai
  function moKhoa() { if (ac && ac.state === 'suspended' && !document.hidden) ac.resume(); }
  document.addEventListener('pointerdown', moKhoa, true);
  document.addEventListener('keydown', moKhoa, true);
  // Tab bi an thi tam dung, quay lai thi choi tiep
  document.addEventListener('visibilitychange', function () {
    if (!ac || !chay) return;
    if (document.hidden) ac.suspend(); else ac.resume();
  });

  root.NhacNen = {
    bat: bat, tat: tat, datBat: datBat, batDuoc: docPref,
    dangChay: function () { return chay; }
  };
})(typeof window !== 'undefined' ? window : this);
