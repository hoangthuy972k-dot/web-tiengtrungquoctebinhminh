/* Doan tau tri thuc — tro choi man chieu o Che do lop hoc (kieu domino).
   Tu cac cau trac nghiem, dung mot doan tau 5–8 toa:
   · dau tau chi mang cau hoi 1;
   · toa thu k: nua TRAI la dap an cua cau k−1, nua PHAI la cau hoi k;
   · toa cuoi 🚩 chi mang dap an cua cau cuoi.
   Cac toa bi xao tron o bai toa; hoc sinh keo (chuot / cham — pointer events)
   len duong ray sau dau tau sao cho nua trai cua moi toa khop voi cau hoi cua
   toa dung truoc. Cham nhanh mot toa = gan vao cho trong dau tien (hoac tra ve
   bai neu dang o tren ray). "Kiem tra" to do cac cho noi sai + goi y; dung het
   thi tau keo coi, nha khoi va chay khoi man hinh, roi hien loi giai.
   Nhieu doi: moi doi mot doan tau rieng, dua thoi gian (+10 giay moi lan kiem
   tra sai). Muc Kho them 1 toa "moi" thua (dap an nhieu, khong thuoc doan tau).
   Mo bang window.LopDoanTau.mo({ cau, nhan, to }).                            */
(function () {
  'use strict';

  var PREF_KEY = 'hyv_doantau_pref';
  var MAU_TO = ['#e0573f', '#3f88c5', '#4f9d69', '#e8a33d'];
  var MAU_TOA = ['#3f88c5', '#4f9d69', '#e8a33d', '#9b6bc7', '#2fa3a0', '#d4588f', '#c77d3a', '#6c7fd8', '#5b9e3a'];
  var PHAT = 10; // giay phat moi lan kiem tra con sai

  var S = {
    built: false, goc: [], nhan: '', soTo: 1, ten: [], soToa: 6, muc: 'vua', sound: true,
    pha: 'sanh', van: 0, luot: 0, kqTo: [], daDung: {}, Q: [], toa: {}, dau: null, slot: [], bai: [],
    kiem: 0, sai: 0, t0: 0, giay: 0, dongHo: 0, keo: null, danhDau: null, tin: ''
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
  function sau(ms, fn) {
    var ve = S.van;
    return setTimeout(function () { if (ve === S.van && root && !root.hidden) fn(); }, ms);
  }
  function tenTo(i) { return S.soTo < 2 ? 'Cả lớp' : (S.ten[i] || ('Tổ ' + (i + 1))); }
  function soToaToiDa() { return Math.min(8, S.goc.length + 1); }
  function soCauTau() { return Math.max(2, Math.min(S.soToa, soToaToiDa()) - 1); }

  /* ---------------- am thanh & giong doc ---------------- */
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
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(a.destination);
    o.start(t0); o.stop(t0 + dur + 0.03);
  }
  function noise(dur, vol, delay, freq) {
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
    f.type = 'bandpass'; f.frequency.setValueAtTime(freq || 800, t0); f.Q.value = 0.9;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + dur * 0.25);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(f); f.connect(g); g.connect(a.destination);
    s.start(t0); s.stop(t0 + dur + 0.02);
  }
  function sndNhac() { tone(520, 0.06, 'square', 0.05); }
  function sndDat() { noise(0.09, 0.3, 0, 2200); tone(190, 0.12, 'square', 0.07); tone(140, 0.1, 'square', 0.05, 0.05); }
  function sndSai() { tone(240, 0.2, 'square', 0.08, 0, 180); tone(180, 0.35, 'square', 0.08, 0.18, 120); }
  function sndCoi() {
    // coi hoi nuoc: hop am 3 not, keo hai hoi
    [0, 0.85].forEach(function (d, k) {
      var dur = k ? 1.1 : 0.6;
      [554, 659, 831].forEach(function (f) { tone(f, dur, 'triangle', 0.09, d, f * 0.97); tone(f * 2, dur, 'sine', 0.025, d); });
      noise(dur, 0.06, d, 3200);
    });
  }
  function sndCoiNgan() { [554, 659, 831].forEach(function (f) { tone(f, 0.35, 'triangle', 0.06); }); }
  function sndXinhXich() {
    var t = 0;
    for (var i = 0; i < 16; i++) {
      noise(0.14, 0.22, t, 420);
      t += Math.max(0.11, 0.42 - i * 0.03);
    }
  }
  function sndKen() { [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.16, i * 0.11); }); tone(1047, 0.6, 'triangle', 0.13, 0.6); tone(1319, 0.6, 'triangle', 0.11, 0.6); tone(1568, 0.7, 'triangle', 0.11, 0.6); }

  function giongTrung() {
    if (!window.speechSynthesis) return null;
    var v = window.speechSynthesis.getVoices() || [], i;
    for (i = 0; i < v.length; i++) if (/^zh[-_]CN/i.test(v[i].lang)) return v[i];
    for (i = 0; i < v.length; i++) if (/^(zh|cmn)/i.test(v[i].lang)) return v[i];
    return null;
  }
  function docTrung(t) {
    if (!t || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(t);
    var g = giongTrung();
    if (g) u.voice = g;
    u.lang = 'zh-CN';
    u.rate = 0.8;
    window.speechSynthesis.speak(u);
  }

  /* ---------------- dung khung ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopDoanTau';
    root.className = 'dt';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Đoàn tàu tri thức');
    root.innerHTML =
      '<div class="dt-nen" aria-hidden="true"><span class="dt-mat-troi"></span>' +
        '<span class="dt-may m1"></span><span class="dt-may m2"></span><span class="dt-doi"></span></div>' +
      '<header class="dt-bar">' +
        '<b class="dt-title">🚂 Đoàn tàu tri thức</b>' +
        '<span class="dt-sub" id="dtSub"></span>' +
        '<span class="dt-bar-gap"></span>' +
        '<button type="button" class="dt-btn dt-ic" id="dtSound"></button>' +
        '<button type="button" class="dt-btn dt-ic" id="dtFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="dt-btn" id="dtClose">✕ Đóng</button>' +
      '</header>' +
      '<main class="dt-man" id="dtMan"></main>';
    document.body.appendChild(root);

    $('#dtSound').addEventListener('click', function () { S.sound = !S.sound; luuPref(); veNut(); if (S.sound) sndDat(); });
    $('#dtFull').addEventListener('click', toanManHinh);
    $('#dtClose').addEventListener('click', dong);
    window.addEventListener('keydown', phim, true);
    window.addEventListener('keyup', phimNha, true);
    window.addEventListener('resize', function () { if (root && !root.hidden && S.pha === 'choi') doRong(); });
    S.built = true;
  }

  function veNut() {
    var s = $('#dtSound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng — bấm để tắt (M)' : 'Đang tắt tiếng — bấm để bật (M)';
    s.classList.toggle('is-off', !S.sound);
  }
  function luuPref() {
    ghiLS(PREF_KEY, { soTo: S.soTo, ten: S.ten, soToa: S.soToa, muc: S.muc, sound: S.sound });
  }

  /* ---------------- sanh ---------------- */
  function chipNut(k, v, nhan, on, tat) {
    return '<button type="button" class="dt-opt' + (on ? ' is-on' : '') + '" data-k="' + k + '" data-v="' + v + '"' + (tat ? ' disabled' : '') + '>' + nhan + '</button>';
  }
  function logo() {
    return '<span class="dt-logo-tau"><i class="is-dau"></i><i></i><i></i></span>';
  }
  function veSanh() {
    if (window.NhacNen) window.NhacNen.tat();
    S.pha = 'sanh';
    S.van++;
    clearInterval(S.dongHo);
    huyKeo();
    $('#dtSub').textContent = S.nhan ? S.nhan + ' · ' + S.goc.length + ' câu' : S.goc.length + ' câu';
    if (S.goc.length < 2) {
      S.pha = 'trong';
      $('#dtSub').textContent = '';
      $('#dtMan').innerHTML =
        '<div class="dt-the dt-trong">' +
          '<div class="dt-logo" aria-hidden="true">' + logo() + '</div>' +
          '<h2>Chưa đủ câu hỏi để nối toa!</h2>' +
          '<p>Đoàn tàu cần ít nhất <b>2 câu trắc nghiệm</b>. Hãy tích chọn thêm bài ở màn chuẩn bị, rồi mở lại trò chơi nhé.</p>' +
          '<div class="dt-nut"><button type="button" class="dt-go" id="dtVe">← Về chọn bài</button></div>' +
        '</div>';
      $('#dtVe').addEventListener('click', dong);
      return;
    }
    var ten = '';
    for (var i = 0; i < 4; i++) {
      ten += '<label class="dt-ten-to" style="--c:' + MAU_TO[i] + '"' + (i < S.soTo ? '' : ' hidden') + '><i></i>' +
        '<input type="text" maxlength="24" data-i="' + i + '" value="' + esc(S.ten[i] || ('Tổ ' + (i + 1))) + '" aria-label="Tên đội ' + (i + 1) + '"></label>';
    }
    var max = soToaToiDa(), dai = '';
    if (S.soToa > max) S.soToa = Math.max(3, max);
    for (var n = 5; n <= 8; n++) dai += chipNut('toa', n, n + ' toa', S.soToa === n, n > max);
    if (max < 5) dai += chipNut('toa', max, max + ' toa', S.soToa === max, false);
    $('#dtMan').innerHTML =
      '<div class="dt-the dt-sanh">' +
        '<div class="dt-sanh-dau">' +
          '<div class="dt-logo" aria-hidden="true">' + logo() + '</div>' +
          '<div><h2>Đoàn tàu tri thức</h2>' +
          '<p class="dt-luat">Nối các toa thành đoàn tàu: <b>nửa trái</b> mỗi toa là <b>đáp án</b> của câu hỏi trên toa đứng ngay trước nó. ' +
          'Đầu tàu mang câu hỏi số 1, toa cuối 🚩 chỉ mang đáp án của câu cuối. Kéo toa từ bãi lên đường ray (hoặc chạm để gắn vào chỗ trống), ' +
          'rồi bấm <b>✔ Kiểm tra</b>. Nối đúng hết — tàu kéo còi chạy về ga!</p></div>' +
        '</div>' +
        '<div class="dt-hang"><span class="dt-nhan">Số đội</span><div class="dt-chon">' +
          chipNut('to', 1, 'Cả lớp', S.soTo === 1) + chipNut('to', 2, '2 đội', S.soTo === 2) +
          chipNut('to', 3, '3 đội', S.soTo === 3) + chipNut('to', 4, '4 đội', S.soTo === 4) +
        '</div></div>' +
        '<div class="dt-hang" id="dtHangTen"' + (S.soTo > 1 ? '' : ' hidden') + '><span class="dt-nhan">Tên đội</span><div class="dt-chon">' + ten +
          '<span class="dt-ghi">Mỗi đội một đoàn tàu riêng, đua thời gian — mỗi lần kiểm tra còn sai +' + PHAT + ' giây.</span></div></div>' +
        '<div class="dt-hang"><span class="dt-nhan">Độ dài</span><div class="dt-chon">' + dai +
          '<span class="dt-ghi">gồm cả đầu tàu và toa cuối</span></div></div>' +
        '<div class="dt-hang"><span class="dt-nhan">Mức độ</span><div class="dt-chon">' +
          chipNut('muc', 'de', '🌱 Dễ <small>hiện các lựa chọn trên toa</small>', S.muc === 'de') +
          chipNut('muc', 'vua', '⭐ Vừa <small>chỉ câu hỏi</small>', S.muc === 'vua') +
          chipNut('muc', 'kho', '🔥 Khó <small>thêm 1 toa mồi thừa</small>', S.muc === 'kho') +
        '</div></div>' +
        '<div class="dt-nut"><button type="button" class="dt-go" id="dtBatDau">▶ Bắt đầu <kbd>Enter</kbd></button></div>' +
      '</div>';

    $all('.dt-opt').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-k'), v = b.getAttribute('data-v');
        if (k === 'to') {
          S.soTo = +v;
          $all('.dt-ten-to').forEach(function (l, i) { l.hidden = i >= S.soTo; });
          $('#dtHangTen').hidden = S.soTo < 2;
        } else if (k === 'toa') S.soToa = +v;
        else if (k === 'muc') S.muc = v;
        $all('.dt-opt[data-k="' + k + '"]').forEach(function (x) { x.classList.toggle('is-on', x === b); });
        luuPref();
      });
    });
    $all('.dt-ten-to input').forEach(function (inp) {
      inp.addEventListener('input', function () { S.ten[+inp.getAttribute('data-i')] = inp.value.trim(); luuPref(); });
    });
    $('#dtBatDau').addEventListener('click', batDau);
  }

  /* ---------------- chuan bi doan tau ---------------- */
  function dapCua(q) { return String(q.options[q.answer]).trim(); }
  function doDai(q) { return String(q.pre || '').length + String(q.post || '').length; }
  function chuanBi(q, gi) {
    var idx = [];
    for (var i = 0; i < q.options.length; i++) if (i !== q.answer) idx.push(i);
    var thu = tron(tron(idx).slice(0, 3).concat([q.answer]));
    return {
      gi: gi, pre: String(q.pre || ''), post: String(q.post || ''), noBlank: !!q.noBlank,
      ctx: q.context || '', why: q.why || '', dap: dapCua(q),
      opts: thu.map(function (k) { return String(q.options[k]).trim(); }),
      tatCa: q.options.map(function (o) { return String(o).trim(); })
    };
  }
  // Uu tien cau ngan, dap an khac nhau, chua dung o doan tau truoc
  function chonCau(K) {
    var tatCa = S.goc.map(function (q, i) { return i; });
    var chua = tatCa.filter(function (i) { return !S.daDung[i]; });
    if (chua.length < K) { S.daDung = {}; chua = tatCa; }
    var ngan = [], dai = [];
    tron(chua).forEach(function (i) {
      var q = S.goc[i];
      (doDai(q) <= 24 && dapCua(q).length <= 8 ? ngan : dai).push(i);
    });
    var thu = ngan.concat(dai), chon = [], daCo = {};
    thu.forEach(function (i) {
      var d = dapCua(S.goc[i]);
      if (chon.length < K && !daCo[d]) { chon.push(i); daCo[d] = 1; }
    });
    // thieu dap an khac nhau thi van lay them (kiem tra theo chu nen van dung)
    thu.concat(tron(tatCa)).forEach(function (i) { if (chon.length < K && chon.indexOf(i) < 0) chon.push(i); });
    chon.forEach(function (i) { S.daDung[i] = 1; });
    return chon.map(function (i) { return chuanBi(S.goc[i], i); });
  }
  function toaMoi(Q) {
    var dap = {}, co = {}, lua = [];
    Q.forEach(function (q) { dap[q.dap] = 1; co[q.gi] = 1; });
    Q.forEach(function (q) { q.tatCa.forEach(function (o) { if (o && !dap[o] && lua.indexOf(o) < 0) lua.push(o); }); });
    if (!lua.length) return null;
    var them = tron(S.goc.map(function (q, i) { return i; }).filter(function (i) { return !co[i] && !dap[dapCua(S.goc[i])]; }));
    return { id: 'moi', loai: them.length ? 'giua' : 'duoi', trai: lua[Math.floor(Math.random() * lua.length)], cau: them.length ? chuanBi(S.goc[them[0]], them[0]) : null, moi: true };
  }
  function dungTau() {
    var K = Math.min(soCauTau(), S.goc.length);
    var Q = chonCau(K);
    S.Q = Q;
    S.toa = {};
    S.dau = { id: 'L', loai: 'dau', trai: null, cau: Q[0], mau: '#c8372d' };
    var ds = [];
    for (var k = 1; k < K; k++) ds.push({ id: 't' + k, loai: 'giua', trai: Q[k - 1].dap, cau: Q[k] });
    ds.push({ id: 'cuoi', loai: 'duoi', trai: Q[K - 1].dap, cau: null });
    if (S.muc === 'kho') { var m = toaMoi(Q); if (m) ds.push(m); }
    var mau = tron(MAU_TOA);
    ds.forEach(function (t, i) { t.mau = t.loai === 'duoi' && !t.cau ? '#a8432f' : mau[i % mau.length]; S.toa[t.id] = t; });
    S.slot = [];
    for (k = 0; k < K; k++) S.slot.push(null);
    S.bai = tron(ds.map(function (t) { return t.id; }));
    S.kiem = 0;
    S.sai = 0;
    S.danhDau = null;
    S.tin = '';
  }

  /* ---------------- ve doan tau ---------------- */
  function cauHtml(q, dien, kieu) {
    var o = dien == null ? '<span class="dt-o">＿＿</span>' : '<span class="dt-o is-' + kieu + '">' + esc(dien) + '</span>';
    if (q.noBlank) return esc(q.pre) + esc(q.post) + (dien == null ? '' : ' <span class="dt-mui">→</span> ' + o);
    return esc(q.pre) + o + esc(q.post);
  }
  function htmlToa(t) {
    var trai = t.loai === 'dau'
      ? '<div class="dt-may" aria-hidden="true"><span class="dt-ong"><i></i><i></i><i></i><i></i></span><span class="dt-den"></span><span class="dt-ca-bin"></span></div>'
      : '<div class="dt-toa-trai" lang="zh">' + esc(t.trai) + '</div>';
    var phai = t.cau
      ? '<div class="dt-toa-phai" lang="zh"><span class="dt-cau">' + cauHtml(t.cau) + '</span>' +
          (S.muc === 'de' ? '<span class="dt-lua">' + t.cau.opts.map(esc).join(' · ') + '</span>' : '') + '</div>'
      : '<div class="dt-toa-phai is-co"><span class="dt-co" aria-hidden="true">🚩</span><small>Toa cuối</small></div>';
    var nhan = t.loai === 'dau' ? 'Đầu tàu' : (t.cau ? 'Toa ' : 'Toa cuối ') + t.trai;
    return '<div class="dt-toa is-' + t.loai + '" data-id="' + t.id + '"' +
      (t.loai !== 'dau' ? ' tabindex="0" role="button" aria-label="' + esc(nhan) + '"' : '') + ' style="--m:' + t.mau + '">' +
      '<div class="dt-toa-than">' + trai + phai + '</div>' +
      '<span class="dt-banh" aria-hidden="true"><i></i><i></i></span>' +
    '</div>';
  }
  function htmlCho(j, dauHang) {
    var id = S.slot[j], dd = S.danhDau;
    var noi = dd ? (dd[j] ? ' is-dung' : ' is-sai') : '';
    return '<div class="dt-cho' + (id ? ' is-co' : '') + (dauHang ? ' is-dau-hang' : '') + noi + '" data-j="' + j + '">' +
      '<span class="dt-noi" aria-hidden="true"><b>' + (dd ? (dd[j] ? '✓' : '✗') : '') + '</b></span>' +
      (id ? htmlToa(S.toa[id]) : '<span class="dt-cho-trong">' + (j + 2) + '</span>') +
    '</div>';
  }
  function veTau() {
    var K = S.slot.length, tong = K + 1;
    var moiHang = tong > 5 ? Math.ceil(tong / 2) : tong;
    var o = '', k = 0;
    for (var h = 0; k < tong; h++) {
      var cells = '';
      for (var c = 0; c < moiHang && k < tong; c++, k++) {
        cells += k === 0 ? '<div class="dt-cho is-dau-tau">' + htmlToa(S.dau) + '</div>' : htmlCho(k - 1, c === 0);
      }
      o += '<div class="dt-ray" style="--n:' + moiHang + '">' + cells + '</div>';
    }
    $('#dtTau').innerHTML = o;
    $('#dtBai').innerHTML = S.bai.length
      ? S.bai.map(function (id) { return htmlToa(S.toa[id]); }).join('')
      : '<p class="dt-bai-rong">Bãi đã trống — bấm <b>✔ Kiểm tra</b>!</p>';
    doRong();
    veHud();
  }
  function doRong() {
    var c = $('.dt-cho');
    if (c) root.style.setProperty('--toa-w', c.offsetWidth + 'px');
  }
  function veHud() {
    var l = $('#dtLuot');
    if (!l) return;
    l.style.setProperty('--c', S.soTo > 1 ? MAU_TO[S.luot] : '#c8372d');
    l.innerHTML = S.soTo > 1 ? '<small>Lượt của</small> <b>' + esc(tenTo(S.luot)) + '</b>' : '<b>🚂 ' + (S.slot.length + 1) + ' toa</b>';
    $('#dtKiem').textContent = S.kiem;
    var p = $('#dtPhat');
    p.hidden = !(S.soTo > 1 && S.sai);
    p.innerHTML = '+' + (S.sai * PHAT) + ' giây phạt';
    var trong = S.slot.filter(function (x) { return !x; }).length;
    $('#dtTin').textContent = S.tin || (S.pha === 'choi' ? (trong ? 'Còn ' + trong + ' chỗ trống trên đường ray' : 'Đủ toa rồi — bấm ✔ Kiểm tra!') : '');
    $('#dtTin').classList.toggle('is-du', !S.tin && !trong && S.pha === 'choi');
  }
  function soGiay() { return Math.floor((Date.now() - S.t0) / 1000); }

  /* ---------------- van choi ---------------- */
  function batDau() {
    if (S.goc.length < 2) return;
    luuPref();
    S.luot = 0;
    S.kqTo = [];
    S.daDung = {};
    if (S.soTo > 1) veCho();
    else batDauTau();
    if (window.NhacNen) window.NhacNen.bat({ kieu: 'gap' });
  }

  function veCho() {
    S.pha = 'cho';
    S.van++;
    clearInterval(S.dongHo);
    var bang = S.kqTo.length ? '<div class="dt-cho-kq">' + S.kqTo.map(function (r, i) {
      return '<span style="--c:' + MAU_TO[i] + '"><i></i>' + esc(tenTo(i)) + ': <b>' + r.tong + ' giây</b></span>';
    }).join('') + '</div>' : '';
    $('#dtMan').innerHTML =
      '<div class="dt-the dt-san-sang" style="--c:' + MAU_TO[S.luot] + '">' +
        '<p class="dt-san-dau">Lượt của</p>' +
        '<h2 class="dt-san-ten">' + esc(tenTo(S.luot)) + '</h2>' +
        '<p class="dt-luat">Đoàn tàu ' + (soCauTau() + 1) + ' toa · càng nhanh càng tốt · mỗi lần kiểm tra còn sai <b>+' + PHAT + ' giây</b>.</p>' +
        bang +
        '<div class="dt-nut"><button type="button" class="dt-go" id="dtXuatPhat">▶ Xuất phát <kbd>Enter</kbd></button></div>' +
      '</div>';
    $('#dtXuatPhat').addEventListener('click', batDauTau);
    $('#dtXuatPhat').focus();
  }

  function batDauTau() {
    S.van++;
    dungTau();
    $('#dtMan').innerHTML =
      '<div class="dt-choi">' +
        '<div class="dt-hud">' +
          '<span class="dt-luot" id="dtLuot"></span>' +
          '<span class="dt-hud-o">⏱ <b id="dtGio">0</b> giây</span>' +
          '<span class="dt-hud-o">🔎 Kiểm tra <b id="dtKiem">0</b></span>' +
          '<span class="dt-hud-o is-phat" id="dtPhat" hidden></span>' +
          '<span class="dt-tin" id="dtTin" role="status"></span>' +
        '</div>' +
        '<div class="dt-ga" id="dtGa"><div class="dt-tau" id="dtTau"></div></div>' +
        '<div class="dt-bai">' +
          '<div class="dt-bai-dau">' +
            '<b>🛤️ Bãi toa</b><span class="dt-bai-hd">Kéo toa lên đường ray · chạm một toa để gắn vào chỗ trống / trả về bãi</span>' +
            '<span class="dt-gap"></span>' +
            '<button type="button" class="dt-btn dt-btn-sang" id="dtDo">↺ Dỡ hết toa</button>' +
            '<button type="button" class="dt-go dt-go-sm" id="dtKiemTra">✔ Kiểm tra <kbd>Enter</kbd></button>' +
          '</div>' +
          '<div class="dt-bai-toa" id="dtBai"></div>' +
        '</div>' +
        '<div class="dt-sai" id="dtSai" hidden></div>' +
      '</div>';
    $('#dtGa').addEventListener('pointerdown', batDauKeo);
    $('#dtBai').addEventListener('pointerdown', batDauKeo);
    $('#dtDo').addEventListener('click', doHet);
    $('#dtKiemTra').addEventListener('click', kiemTra);
    $('#dtSai').addEventListener('click', function (e) { if (e.target.closest('[data-act="dong"]')) anSai(); });
    S.pha = 'choi';
    veTau();
    S.t0 = Date.now();
    clearInterval(S.dongHo);
    S.dongHo = setInterval(function () {
      if (S.pha === 'choi' && root && !root.hidden) { var g = $('#dtGio'); if (g) g.textContent = soGiay(); }
    }, 250);
    sndCoiNgan();
  }

  /* ---------------- keo tha toa ---------------- */
  function batDauKeo(e) {
    if (S.pha !== 'choi' || e.button > 0 || S.keo) return;
    var el = e.target.closest('.dt-toa[data-id]');
    if (!el || el.classList.contains('is-dau')) return;
    e.preventDefault();
    var r = el.getBoundingClientRect();
    S.keo = {
      id: el.getAttribute('data-id'), el: el, pid: e.pointerId, x0: e.clientX, y0: e.clientY,
      dx: e.clientX - r.left, dy: e.clientY - r.top, w: r.width, h: r.height, bong: null
    };
    window.addEventListener('pointermove', keoDi, true);
    window.addEventListener('pointerup', keoTha, true);
    window.addEventListener('pointercancel', huyKeo, true);
  }
  function choDuoi(x, y) {
    var ds = $all('.dt-cho[data-j]');
    for (var i = 0; i < ds.length; i++) {
      var r = ds[i].getBoundingClientRect();
      if (x >= r.left - 10 && x <= r.right + 10 && y >= r.top - 14 && y <= r.bottom + 14) return +ds[i].getAttribute('data-j');
    }
    return null;
  }
  function keoDi(e) {
    var k = S.keo;
    if (!k || e.pointerId !== k.pid) return;
    e.preventDefault();
    if (!k.bong) {
      if (Math.abs(e.clientX - k.x0) + Math.abs(e.clientY - k.y0) < 8) return;
      k.bong = k.el.cloneNode(true);
      k.bong.classList.add('dt-bong');
      k.bong.removeAttribute('tabindex');
      k.bong.style.width = k.w + 'px';
      root.appendChild(k.bong);
      k.el.classList.add('is-keo');
      sndNhac();
    }
    k.bong.style.transform = 'translate(' + Math.round(e.clientX - k.dx) + 'px,' + Math.round(e.clientY - k.dy) + 'px) rotate(-2deg)';
    var j = choDuoi(e.clientX, e.clientY);
    $all('.dt-cho.is-ngam').forEach(function (c) { if (+c.getAttribute('data-j') !== j) c.classList.remove('is-ngam'); });
    if (j !== null) { var c = $('.dt-cho[data-j="' + j + '"]'); if (c) c.classList.add('is-ngam'); }
  }
  function boNghe() {
    window.removeEventListener('pointermove', keoDi, true);
    window.removeEventListener('pointerup', keoTha, true);
    window.removeEventListener('pointercancel', huyKeo, true);
  }
  function keoTha(e) {
    var k = S.keo;
    if (!k || e.pointerId !== k.pid) return;
    boNghe();
    S.keo = null;
    if (!k.bong) { nhanToa(k.id); return; }
    if (k.bong.parentNode) k.bong.parentNode.removeChild(k.bong);
    k.el.classList.remove('is-keo');
    if (S.pha !== 'choi') return;
    var j = choDuoi(e.clientX, e.clientY);
    if (j !== null) datVao(k.id, j);
    else if (S.slot.indexOf(k.id) >= 0) veBai(k.id);
    else veTau();
  }
  function huyKeo() {
    var k = S.keo;
    boNghe();
    S.keo = null;
    if (!k) return;
    if (k.bong && k.bong.parentNode) k.bong.parentNode.removeChild(k.bong);
    if (k.el) k.el.classList.remove('is-keo');
    $all('.dt-cho.is-ngam').forEach(function (c) { c.classList.remove('is-ngam'); });
  }

  function nhanToa(id) {
    if (S.pha !== 'choi' || !S.toa[id]) return;
    if (S.slot.indexOf(id) >= 0) { veBai(id); return; }
    var j = S.slot.indexOf(null);
    if (j < 0) {
      S.tin = 'Đường ray đã đủ toa — kéo thả để đổi chỗ, hoặc chạm một toa trên ray để trả về bãi.';
      veHud();
      return;
    }
    datVao(id, j);
  }
  function datVao(id, j) {
    var tu = S.slot.indexOf(id), cu = S.slot[j];
    if (tu === j) { veTau(); return; }
    S.slot[j] = id;
    if (tu >= 0) S.slot[tu] = cu || null;
    else {
      var bi = S.bai.indexOf(id);
      if (cu) S.bai.splice(bi, 1, cu); else S.bai.splice(bi, 1);
    }
    daDoi();
  }
  function veBai(id) {
    var tu = S.slot.indexOf(id);
    if (tu < 0) return;
    S.slot[tu] = null;
    S.bai.push(id);
    daDoi();
  }
  function doHet() {
    if (S.pha !== 'choi') return;
    var co = false;
    S.slot.forEach(function (id, j) { if (id) { S.bai.push(id); S.slot[j] = null; co = true; } });
    if (co) daDoi();
  }
  function daDoi() {
    S.danhDau = null;
    S.tin = '';
    anSai();
    veTau();
    sndDat();
  }

  /* ---------------- kiem tra ---------------- */
  function kiemTra() {
    if (S.pha !== 'choi') return;
    var trong = S.slot.filter(function (x) { return !x; }).length;
    if (trong) {
      S.tin = 'Còn ' + trong + ' chỗ trống — gắn đủ toa rồi hãy kiểm tra.';
      veHud();
      $all('.dt-cho:not(.is-co):not(.is-dau-tau)').forEach(function (c) {
        c.classList.remove('is-nhac');
        void c.offsetWidth;
        c.classList.add('is-nhac');
      });
      tone(300, 0.15, 'square', 0.05);
      return;
    }
    S.kiem++;
    var dd = [], sai = [];
    for (var j = 0; j < S.slot.length; j++) {
      var truoc = j === 0 ? S.dau : S.toa[S.slot[j - 1]];
      var t = S.toa[S.slot[j]];
      var ok = !!truoc.cau && t.trai === truoc.cau.dap;
      dd.push(ok);
      if (!ok) sai.push(j);
    }
    S.danhDau = dd;
    if (!sai.length) { thang(); return; }
    S.sai++;
    S.tin = '';
    veTau();
    veSai(sai);
    sndSai();
  }
  function veSai(sai) {
    var li = sai.map(function (j) {
      var truoc = j === 0 ? S.dau : S.toa[S.slot[j - 1]], t = S.toa[S.slot[j]];
      var dau = '<b class="dt-sai-so">Toa ' + (j + 1) + ' → ' + (j + 2) + '</b> ';
      if (!truoc.cau) return '<li>' + dau + '🚩 Toa cuối không mang câu hỏi nào — nó phải đứng cuối đoàn tàu.</li>';
      return '<li>' + dau + '<span class="dt-sai-cau" lang="zh">' + cauHtml(truoc.cau, t.trai, 'sai') + '</span>' +
        '<span class="dt-sai-vi">“' + esc(t.trai) + '” chưa hợp với chỗ trống này.</span>' +
        (truoc.cau.why ? '<details class="dt-sai-why"><summary>💡 Gợi ý</summary><p>' + esc(truoc.cau.why) + '</p></details>' : '') +
      '</li>';
    }).join('');
    var p = $('#dtSai');
    p.innerHTML =
      '<div class="dt-sai-dau"><b>✗ Có ' + sai.length + ' chỗ nối chưa đúng</b>' +
        (S.soTo > 1 ? '<span class="dt-sai-phat">+' + PHAT + ' giây phạt</span>' : '') +
        '<span class="dt-gap"></span><button type="button" class="dt-btn dt-btn-sang" data-act="dong">Sửa lại <kbd>Esc</kbd></button></div>' +
      '<ul>' + li + '</ul>';
    p.hidden = false;
  }
  function anSai() {
    var p = root && $('#dtSai');
    if (p) { p.hidden = true; p.innerHTML = ''; }
  }

  /* ---------------- tau chay ---------------- */
  function thang() {
    if (window.NhacNen) window.NhacNen.tat();
    S.pha = 'chay';
    clearInterval(S.dongHo);
    S.giay = Math.max(0, Math.round((Date.now() - S.t0) / 1000));
    if (S.soTo > 1) S.kqTo[S.luot] = { giay: S.giay, sai: S.sai, kiem: S.kiem, tong: S.giay + PHAT * S.sai };
    anSai();
    veTau();
    $('#dtGio').textContent = S.giay;
    $('#dtTin').textContent = '🎉 Nối đúng hết! Tàu chuẩn bị chạy…';
    $('#dtTin').classList.add('is-du');
    $('#dtKiemTra').disabled = true;
    $('#dtDo').disabled = true;
    var tau = $('#dtTau');
    tau.classList.add('is-chay');
    sndCoi();
    sau(1300, function () { tau.classList.add('is-di'); sndXinhXich(); });
    sau(4700, veGiai);
  }

  function docCau(q) {
    return q.noBlank ? q.pre + q.post + ' ' + q.dap : q.pre + q.dap + q.post;
  }
  function veGiai() {
    S.pha = 'giai';
    var li = S.Q.map(function (q, i) {
      return '<li>' +
        '<span class="dt-giai-so">' + (i + 1) + '</span>' +
        '<div class="dt-giai-nd">' +
          (q.ctx ? '<div class="dt-giai-ctx" lang="zh">🗣️ ' + esc(q.ctx) + '</div>' : '') +
          '<div class="dt-giai-cau" lang="zh">' + cauHtml(q, q.dap, 'dung') + '</div>' +
          (q.why ? '<div class="dt-giai-why">💡 ' + esc(q.why) + '</div>' : '') +
        '</div>' +
        '<button type="button" class="dt-btn dt-btn-sang dt-giai-doc" data-i="' + i + '" aria-label="Đọc câu ' + (i + 1) + '">🔊</button>' +
      '</li>';
    }).join('');
    var nhieu = S.soTo > 1, conLuot = nhieu && S.luot < S.soTo - 1;
    var tiep = conLuot ? '🚂 Lượt ' + esc(tenTo(S.luot + 1)) + ' →' : nhieu ? '🏆 Bảng xếp hạng' : '🚂 Đoàn tàu mới';
    $('#dtMan').innerHTML =
      '<div class="dt-the dt-giai">' +
        '<h2>🎉 Đoàn tàu đã về ga!</h2>' +
        '<p class="dt-giai-ct">' + (nhieu ? '<span class="dt-giai-to" style="--c:' + MAU_TO[S.luot] + '">' + esc(tenTo(S.luot)) + '</span> ' : '') +
          '⏱ ' + S.giay + ' giây · 🔎 ' + S.kiem + ' lần kiểm tra' + (S.sai ? ' (' + S.sai + ' lần còn sai' + (nhieu ? ', +' + (S.sai * PHAT) + ' giây phạt' : '') + ')' : ' — đúng ngay lần đầu!') +
          (nhieu ? ' · <b>Tổng ' + (S.giay + PHAT * S.sai) + ' giây</b>' : '') + '</p>' +
        '<ol class="dt-giai-ds">' + li + '</ol>' +
        '<div class="dt-nut">' +
          '<button type="button" class="dt-btn dt-btn-sang" id="dtVeSanh">⚙ Về sảnh</button>' +
          '<button type="button" class="dt-btn dt-btn-sang" id="dtXong">Đóng</button>' +
          '<button type="button" class="dt-go" id="dtTiep">' + tiep + ' <kbd>Enter</kbd></button>' +
        '</div>' +
      '</div>';
    $all('.dt-giai-doc').forEach(function (b) {
      b.addEventListener('click', function () { var q = S.Q[+b.getAttribute('data-i')]; if (q) docTrung(docCau(q)); });
    });
    $('#dtVeSanh').addEventListener('click', veSanh);
    $('#dtXong').addEventListener('click', dong);
    $('#dtTiep').addEventListener('click', tiep2);
    sndKen();
  }
  function tiep2() {
    if (S.pha !== 'giai') return;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (S.soTo > 1) {
      if (S.luot < S.soTo - 1) { S.luot++; veCho(); }
      else veXepHang();
    } else batDauTau();
  }

  function veXepHang() {
    S.pha = 'cuoi';
    S.van++;
    var ds = S.kqTo.map(function (r, t) { return { t: t, r: r }; });
    ds.sort(function (a, b) { return a.r.tong - b.r.tong || a.t - b.t; });
    var huy = ['🥇', '🥈', '🥉', '4'], hang = 0;
    var bang = ds.map(function (x, i) {
      if (i > 0 && x.r.tong > ds[i - 1].r.tong) hang = i;
      return '<div class="dt-bxh-r' + (hang === 0 ? ' is-nhat' : '') + '" style="--c:' + MAU_TO[x.t] + '">' +
        '<span class="dt-bxh-h">' + huy[hang] + '</span>' +
        '<span class="dt-bxh-ten"><i></i>' + esc(tenTo(x.t)) + '</span>' +
        '<span class="dt-bxh-ct">' + x.r.giay + ' giây' + (x.r.sai ? ' + ' + (x.r.sai * PHAT) + ' phạt' : '') + '</span>' +
        '<b>' + x.r.tong + ' giây</b></div>';
    }).join('');
    $('#dtMan').innerHTML =
      '<div class="dt-the dt-cuoi">' +
        '<h2>🏆 Bảng xếp hạng đoàn tàu</h2>' +
        '<p class="dt-luat">Ít giây nhất là nhất (mỗi lần kiểm tra còn sai +' + PHAT + ' giây).</p>' +
        '<div class="dt-bxh">' + bang + '</div>' +
        '<div class="dt-nut">' +
          '<button type="button" class="dt-btn dt-btn-sang" id="dtVeSanh">⚙ Về sảnh</button>' +
          '<button type="button" class="dt-btn dt-btn-sang" id="dtXong">Đóng</button>' +
          '<button type="button" class="dt-go" id="dtLai">🚂 Chơi lại <kbd>Enter</kbd></button>' +
        '</div>' +
      '</div>';
    $('#dtVeSanh').addEventListener('click', veSanh);
    $('#dtXong').addEventListener('click', dong);
    $('#dtLai').addEventListener('click', batDau);
    sndKen();
  }

  /* ---------------- phim tat / mo / dong ---------------- */
  function toanManHinh() {
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* bo qua */ });
  }

  function phimNha(e) {
    if (!root || root.hidden) return;
    if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
    if (e.code === 'Space') { e.preventDefault(); e.stopImmediatePropagation(); }
  }

  function phim(e) {
    if (!root || root.hidden) return;
    var trongO = e.target && /input|select|textarea/i.test(e.target.tagName);
    if (e.key === 'Escape') {
      e.stopImmediatePropagation();
      if (S.keo) huyKeo();
      else if ($('#dtSai') && !$('#dtSai').hidden) anSai();
      else if (!document.fullscreenElement) dong();
      return;
    }
    if (trongO) {
      if (e.key === 'Enter' && S.pha === 'sanh') { e.preventDefault(); e.stopImmediatePropagation(); batDau(); }
      return;
    }
    // Man nay dang mo thi phim tat cua tro choi phia sau khong duoc chay
    e.stopImmediatePropagation();
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = (e.key || '').toLowerCase();
    var space = e.code === 'Space', enter = e.key === 'Enter', phai = e.key === 'ArrowRight';
    var tg = e.target && e.target.nodeType === 1 && root.contains(e.target) ? e.target : null;
    var nut = tg && tg.tagName === 'BUTTON' && !tg.disabled ? tg : null;
    var toa = tg && tg.classList && tg.classList.contains('dt-toa') ? tg : null;
    if (space || enter) e.preventDefault();
    if (k === 'f') { toanManHinh(); return; }
    if (k === 'm') { $('#dtSound').click(); return; }
    switch (S.pha) {
      case 'sanh':
      case 'trong':
        if (enter && S.pha === 'sanh') batDau();
        else if (nut && (space || enter)) nut.click();
        break;
      case 'cho':
        if (space || enter) batDauTau();
        break;
      case 'choi':
        if (toa && (space || enter)) nhanToa(toa.getAttribute('data-id'));
        else if (nut && (space || enter)) nut.click();
        else if (enter) kiemTra();
        break;
      case 'giai':
        if (nut && space) nut.click();
        else if (enter || space || phai) tiep2();
        break;
      case 'cuoi':
        if (enter) batDau();
        else if (nut && space) nut.click();
        break;
    }
  }

  function hopLe(q) {
    return q && Array.isArray(q.options) && q.options.length >= 2 && typeof q.answer === 'number' &&
      q.answer >= 0 && q.answer < q.options.length && String(q.options[q.answer]).trim() !== '';
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    var p = docLS(PREF_KEY, {});
    S.goc = (opt.cau || []).filter(hopLe);
    S.nhan = opt.nhan || '';
    S.sound = p.sound !== false;
    S.soToa = p.soToa >= 5 && p.soToa <= 8 ? p.soToa : 6;
    S.muc = p.muc === 'de' || p.muc === 'kho' ? p.muc : 'vua';
    var to = Array.isArray(opt.to) ? opt.to.filter(function (x) { return x && String(x).trim(); }).slice(0, 4) : [];
    if (to.length >= 2) {
      S.soTo = to.length;
      S.ten = to.map(function (x) { return String(x).trim(); });
    } else {
      S.soTo = p.soTo >= 1 && p.soTo <= 4 ? p.soTo : 1;
      S.ten = Array.isArray(p.ten) ? p.ten.slice(0, 4) : [];
    }
    root.hidden = false;
    document.documentElement.classList.add('dt-open');
    veNut();
    veSanh();
    var b = $('#dtBatDau');
    if (b) b.focus();
  }
  function dong() {
    if (window.NhacNen) window.NhacNen.tat();
    if (!root) return;
    S.van++;
    clearInterval(S.dongHo);
    huyKeo();
    S.pha = 'sanh';
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    root.hidden = true;
    $('#dtMan').innerHTML = '';
    document.documentElement.classList.remove('dt-open');
  }

  window.LopDoanTau = { mo: mo, dong: dong };
})();
