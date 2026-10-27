/* Nhac nen vui cho tro choi — tong hop bang Web Audio, khong can file mp3.
   Vong 8 o nhip (C – Am – F – G), giai dieu ngu cung + bass + trong nhe.
   Tu nho nho khi may dang doc tieng Trung (speechSynthesis) de khong lan giong.
   Dung: NhacNen.bat(audioCtx?) / NhacNen.tat() / NhacNen.dangChay(). */
(function (root) {
  'use strict';

  var BPM = 124, NUA = 60 / BPM / 2; // do dai mot not moc (1/8)
  var TO = 0.07, NHO = 0.022;         // am luong chinh / khi dang doc
  var GOC = [48, 45, 41, 43];         // goc hop am C Am F G
  // Hai cau giai dieu, moi o nhip 8 not moc (0 = nghi); xen ke A B A B'
  var A = [
    [72, 0, 76, 79, 76, 0, 72, 74], [76, 0, 72, 69, 72, 0, 76, 0],
    [77, 0, 76, 72, 74, 0, 72, 0], [74, 0, 79, 0, 76, 74, 71, 74]
  ];
  var B = [
    [79, 0, 79, 76, 79, 0, 81, 0], [76, 0, 72, 0, 69, 72, 76, 0],
    [72, 0, 77, 0, 76, 0, 72, 74], [79, 0, 74, 0, 71, 0, 74, 0]
  ];
  var B2 = [
    [79, 0, 79, 76, 79, 0, 81, 0], [84, 0, 81, 0, 79, 76, 72, 0],
    [77, 76, 74, 72, 74, 0, 77, 0], [79, 0, 0, 74, 72, 0, 0, 0]
  ];
  var CAU = [A, B, A, B2];
  var BASS = [0, 0, 12, 0, 0, 7, 12, 7]; // cong them vao goc; o 1 va 4 la nghi
  var BASS_NGHI = { 1: 1, 3: 1 };

  var ac = null, chu = null, loc = null, on = null, hen = null, buoc = 0, tiep = 0, chay = false;

  function hz(m) { return 440 * Math.pow(2, (m - 69) / 12); }
  function dung() {
    if (chu) return true;
    try {
      if (!ac) { var AC = root.AudioContext || root.webkitAudioContext; if (!AC) return false; ac = new AC(); }
      chu = ac.createGain(); chu.gain.value = 0.0001;
      loc = ac.createBiquadFilter(); loc.type = 'lowpass'; loc.frequency.value = 3200;
      chu.connect(loc); loc.connect(ac.destination);
      // bo dem tieng on cho trong
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
  function trongCai(t) { // kick
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
  function datBuoc(i, t) {
    var o = Math.floor(i / 8) % 16, k = i % 8; // 16 o nhip = 4 cau x 4 o
    var cau = CAU[Math.floor(o / 4)], dong = o % 4, goc = GOC[dong];
    var m = cau[dong][k];
    if (m) not(hz(m), t, NUA * 1.6, 'square', 0.16);
    if (!BASS_NGHI[k]) not(hz(goc + BASS[k]), t, NUA * 0.9, 'triangle', 0.5);
    if (k === 0 || k === 4) trongCai(t);
    if (k === 2 || k === 6) xoe(t, 0.12, 1800, 0.25);
    if (k % 2 === 1) xoe(t, 0.04, 7000, 0.12);
    if (k === 0) { // hop am dem mo o dau moi o nhip
      [0, 4, 7].forEach(function (x) { not(hz(goc + 24 + (dong === 1 && x === 4 ? -1 : x)), t, NUA * 7, 'sine', 0.05); });
    }
  }
  function lich() {
    if (!chay) return;
    var docTo = root.speechSynthesis && root.speechSynthesis.speaking;
    var muc = docTo ? NHO : TO;
    if (Math.abs(chu.gain.value - muc) > 0.004) chu.gain.setTargetAtTime(muc, ac.currentTime, 0.15);
    while (tiep < ac.currentTime + 0.15) { datBuoc(buoc++, tiep); tiep += NUA; }
  }

  function bat(ctx) {
    if (chay) return;
    if (ctx && !ac) ac = ctx;
    if (!dung()) return;
    if (ac.state === 'suspended') ac.resume();
    chay = true;
    buoc = 0; tiep = ac.currentTime + 0.08;
    chu.gain.cancelScheduledValues(ac.currentTime);
    chu.gain.setValueAtTime(0.0001, ac.currentTime);
    chu.gain.exponentialRampToValueAtTime(TO, ac.currentTime + 1.2);
    hen = setInterval(lich, 40);
    lich();
  }
  function tat() {
    if (!chay) return;
    chay = false;
    clearInterval(hen); hen = null;
    try {
      chu.gain.cancelScheduledValues(ac.currentTime);
      chu.gain.setTargetAtTime(0.0001, ac.currentTime, 0.12);
    } catch (e) { /* bo qua */ }
  }
  // Tab bi an thi tam dung, quay lai thi choi tiep
  document.addEventListener('visibilitychange', function () {
    if (!ac) return;
    if (document.hidden) ac.suspend(); else ac.resume();
  });

  root.NhacNen = { bat: bat, tat: tat, dangChay: function () { return chay; } };
})(typeof window !== 'undefined' ? window : this);
