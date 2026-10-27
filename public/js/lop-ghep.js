/* Lat manh ghep — tro choi man chieu o Che do lop hoc.
   Mot buc tranh an duoi luoi manh danh so (3x3, 4x3, 4x4). Cac doi lan luot chon
   so manh -> hien cau hoi trac nghiem -> tra loi dung thi manh lat ra (+10),
   sai thi manh giu nguyen. Doi luot sau moi cau. Luc nao cung co the "Doan anh":
   dung +50 tru 5 diem moi manh da lat (it nhat 10), sai thi mat luot ke tiep.
   Tranh co san o window.LopGhepTranh (lop-ghep-tranh.js); co cung co the chon
   anh trong may (chi doc tai cho bang URL.createObjectURL, khong tai len dau).
   Mo bang window.LopGhep.mo({ cau, nhan, to }).                               */
(function () {
  'use strict';

  var PREF_KEY = 'hyv_ghep_pref';
  var CHU = ['A', 'B', 'C', 'D'];
  var MAU_TO = ['#e0573f', '#3f88c5', '#4f9d69', '#e8a33d'];
  var LUOI = { '3x3': [3, 3], '4x3': [4, 3], '4x4': [4, 4] };
  var DIEM_MANH = 10;

  var S = {
    built: false, goc: [], nhan: '', soTo: 2, ten: [], luoi: '4x3', tranhChon: 'ngau', anh: null, sound: true,
    pha: 'sanh', tranh: null, cot: 4, hang: 3, mo: [], diem: [], luot: 0, mat: [], pool: [], pi: 0,
    q: null, qManh: 0, qDa: false, qDung: false, doanTo: 0, doanDung: -1, tin: '', so: '', soT: 0, van: 0, daXem: []
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
  function sau(ms, fn) {
    var ve = S.van;
    return setTimeout(function () { if (ve === S.van && root && !root.hidden) fn(); }, ms);
  }
  function tenTo(i) { return S.ten[i] || ('Tổ ' + (i + 1)); }
  function tranhCo() { return window.LopGhepTranh || []; }
  function soManh() { return S.cot * S.hang; }
  function soDaLat() { var n = 0; S.mo.forEach(function (x) { if (x) n++; }); return n; }
  function diemDoan() { return Math.max(10, 50 - 5 * soDaLat()); }

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
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
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
    f.type = 'bandpass'; f.frequency.setValueAtTime(freq || 800, t0); f.frequency.exponentialRampToValueAtTime((freq || 800) * 3, t0 + dur); f.Q.value = 1.2;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + dur * 0.3);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    s.connect(f); f.connect(g); g.connect(a.destination);
    s.start(t0); s.stop(t0 + dur + 0.02);
  }
  function sndChon() { tone(660, 0.08, 'square', 0.06); tone(990, 0.1, 'square', 0.05, 0.07); }
  function sndLat(delay) { noise(0.32, 0.22, delay || 0, 700); tone(500, 0.22, 'sine', 0.08, delay || 0, 1100); }
  function sndDung() { tone(784, 0.14, 'triangle', 0.2); tone(1175, 0.3, 'triangle', 0.18, 0.12); }
  function sndSai() { tone(240, 0.2, 'square', 0.08, 0, 180); tone(180, 0.35, 'square', 0.08, 0.18, 120); }
  function sndKen() { [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.16, i * 0.11); }); tone(1047, 0.6, 'triangle', 0.14, 0.6); tone(1319, 0.6, 'triangle', 0.12, 0.6); tone(1568, 0.7, 'triangle', 0.12, 0.6); }

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
    root.id = 'lopGhep';
    root.className = 'gp';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Lật mảnh ghép');
    root.innerHTML =
      '<div class="gp-nen" aria-hidden="true"></div>' +
      '<header class="gp-bar">' +
        '<b class="gp-title">🧩 Lật mảnh ghép</b>' +
        '<span class="gp-sub" id="gpSub"></span>' +
        '<span class="gp-bar-gap"></span>' +
        '<button type="button" class="gp-btn gp-ic" id="gpSound"></button>' +
        '<button type="button" class="gp-btn gp-ic" id="gpFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="gp-btn" id="gpClose">✕ Đóng</button>' +
      '</header>' +
      '<main class="gp-man" id="gpMan"></main>' +
      '<div class="gp-modal" id="gpModal" hidden><div class="gp-modal-the" id="gpModalThe" role="dialog" aria-modal="true"></div></div>' +
      '<input type="file" accept="image/*" id="gpFile" hidden>';
    document.body.appendChild(root);

    $('#gpSound').addEventListener('click', function () { S.sound = !S.sound; luuPref(); veNut(); if (S.sound) sndChon(); });
    $('#gpFull').addEventListener('click', toanManHinh);
    $('#gpClose').addEventListener('click', dong);
    $('#gpFile').addEventListener('change', chonFile);
    window.addEventListener('keydown', phim, true);
    window.addEventListener('keyup', phimNha, true);
    S.built = true;
  }

  function veNut() {
    var s = $('#gpSound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng — bấm để tắt (M)' : 'Đang tắt tiếng — bấm để bật (M)';
    s.classList.toggle('is-off', !S.sound);
  }
  function luuPref() {
    ghiLS(PREF_KEY, { soTo: S.soTo, ten: S.ten, luoi: S.luoi, sound: S.sound, daXem: S.daXem.slice(-20) });
  }

  /* ---------------- sanh ---------------- */
  function chipNut(k, v, nhan, on) {
    return '<button type="button" class="gp-opt' + (on ? ' is-on' : '') + '" data-k="' + k + '" data-v="' + v + '">' + nhan + '</button>';
  }
  function veSanh() {
    S.pha = 'sanh';
    S.van++;
    dongModal();
    $('#gpSub').textContent = S.nhan ? S.nhan + ' · ' + S.goc.length + ' câu' : S.goc.length + ' câu';
    if (!S.goc.length) {
      S.pha = 'trong';
      $('#gpSub').textContent = '';
      $('#gpMan').innerHTML =
        '<div class="gp-the gp-trong">' +
          '<div class="gp-logo" aria-hidden="true">' + logo() + '</div>' +
          '<h2>Chưa có câu hỏi nào để lật mảnh!</h2>' +
          '<p>Hãy chọn bài muốn ôn ở màn chuẩn bị (tích vào các bài), rồi mở lại trò chơi nhé.</p>' +
          '<div class="gp-nut"><button type="button" class="gp-go" id="gpVe">← Về chọn bài</button></div>' +
        '</div>';
      $('#gpVe').addEventListener('click', dong);
      return;
    }
    var ten = '';
    for (var i = 0; i < 4; i++) {
      ten += '<label class="gp-ten-to" style="--c:' + MAU_TO[i] + '"' + (i < S.soTo ? '' : ' hidden') + '><i></i>' +
        '<input type="text" maxlength="24" data-i="' + i + '" value="' + esc(tenTo(i)) + '" aria-label="Tên đội ' + (i + 1) + '"></label>';
    }
    var ds = tranhCo();
    var cuThe = typeof S.tranhChon === 'number';
    var a = S.anh;
    $('#gpMan').innerHTML =
      '<div class="gp-the gp-sanh">' +
        '<div class="gp-sanh-dau">' +
          '<div class="gp-logo" aria-hidden="true">' + logo() + '</div>' +
          '<div><h2>Lật mảnh ghép</h2>' +
          '<p class="gp-luat">Các đội lần lượt <b>chọn số mảnh</b> → trả lời câu hỏi → đúng thì mảnh lật ra (+' + DIEM_MANH + '). ' +
          'Lúc nào cũng có thể <b>🔍 Đoán ảnh</b>: đúng được +50 (trừ 5 điểm cho mỗi mảnh đã lật, ít nhất +10), sai thì mất lượt kế tiếp.</p></div>' +
        '</div>' +
        '<div class="gp-hang"><span class="gp-nhan">Số đội</span><div class="gp-chon">' +
          chipNut('to', 2, '2 đội', S.soTo === 2) + chipNut('to', 3, '3 đội', S.soTo === 3) + chipNut('to', 4, '4 đội', S.soTo === 4) +
        '</div></div>' +
        '<div class="gp-hang"><span class="gp-nhan">Tên đội</span><div class="gp-chon">' + ten + '</div></div>' +
        '<div class="gp-hang"><span class="gp-nhan">Lưới mảnh</span><div class="gp-chon">' +
          chipNut('luoi', '3x3', '3 × 3 <small>9 mảnh</small>', S.luoi === '3x3') +
          chipNut('luoi', '4x3', '4 × 3 <small>12 mảnh</small>', S.luoi === '4x3') +
          chipNut('luoi', '4x4', '4 × 4 <small>16 mảnh</small>', S.luoi === '4x4') +
        '</div></div>' +
        '<div class="gp-hang gp-hang-tranh"><span class="gp-nhan">Bức tranh</span><div>' +
          '<div class="gp-chon">' +
            chipNut('tranh', 'ngau', '🎲 Ngẫu nhiên (' + ds.length + ' tranh)', S.tranhChon === 'ngau') +
            chipNut('tranh', 'rieng', '📁 Ảnh trong máy…', S.tranhChon === 'rieng') +
            (cuThe ? '<span class="gp-tranh-cu">✓ ' + esc(ds[S.tranhChon].vn) + '</span>' : '') +
          '</div>' +
          (S.tranhChon === 'rieng' ? (a
            ? '<div class="gp-rieng">' +
                '<p class="gp-rieng-file">✓ Đã chọn <b>' + esc(a.ten) + '</b> <span>(không hiện trước để lớp không thấy)</span> <button type="button" class="gp-link" id="gpDoiAnh">Đổi ảnh</button></p>' +
                '<div class="gp-rieng-o">' +
                  '<input type="text" id="gpAnhZh" lang="zh" placeholder="Tên tiếng Trung, vd 长城" value="' + esc(a.zh) + '" maxlength="40">' +
                  '<input type="text" id="gpAnhPy" placeholder="Pinyin, vd Chángchéng" value="' + esc(a.py) + '" maxlength="60">' +
                  '<input type="text" id="gpAnhVn" placeholder="Nghĩa tiếng Việt" value="' + esc(a.vn) + '" maxlength="60">' +
                '</div>' +
              '</div>'
            : '<p class="gp-rieng-file">Bấm “📁 Ảnh trong máy…” để chọn ảnh. Ảnh chỉ mở trên máy này, không tải lên mạng.</p>') : '') +
          '<details class="gp-cu-the"' + (cuThe ? ' open' : '') + '><summary>Chọn một tranh cụ thể <span>(cẩn thận: lớp sẽ thấy tên nếu đang chiếu)</span></summary><div class="gp-chon">' +
            ds.map(function (t, i) { return chipNut('tranh', i, esc(t.vn) + ' <small lang="zh">' + esc(t.zh) + '</small>', S.tranhChon === i); }).join('') +
          '</div></details>' +
        '</div></div>' +
        '<p class="gp-sanh-info">' + S.goc.length + ' câu hỏi · mỗi lần chọn mảnh là một câu' +
          (S.goc.length < soManhCua(S.luoi) ? ' (ít câu hơn số mảnh nên sẽ có câu lặp lại)' : '') + '</p>' +
        '<p class="gp-loi" id="gpLoi" role="alert"></p>' +
        '<div class="gp-nut"><button type="button" class="gp-go" id="gpBatDau">▶ Bắt đầu <kbd>Enter</kbd></button></div>' +
      '</div>';

    $all('.gp-opt').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-k'), v = b.getAttribute('data-v');
        if (k === 'to') {
          S.soTo = +v;
          $all('.gp-ten-to').forEach(function (l, i) { l.hidden = i >= S.soTo; });
        } else if (k === 'luoi') {
          S.luoi = v;
          luuPref();
          veSanh();
          return;
        } else if (k === 'tranh') {
          if (v === 'rieng') {
            S.tranhChon = 'rieng';
            if (!S.anh) { $('#gpFile').value = ''; $('#gpFile').click(); }
          } else S.tranhChon = v === 'ngau' ? 'ngau' : +v;
          veSanh();
          return;
        }
        $all('.gp-opt[data-k="' + k + '"]').forEach(function (x) { x.classList.toggle('is-on', x === b); });
        luuPref();
      });
    });
    $all('.gp-ten-to input').forEach(function (inp) {
      inp.addEventListener('input', function () { S.ten[+inp.getAttribute('data-i')] = inp.value.trim(); luuPref(); });
    });
    if ($('#gpDoiAnh')) $('#gpDoiAnh').addEventListener('click', function () { $('#gpFile').value = ''; $('#gpFile').click(); });
    ['Zh', 'Py', 'Vn'].forEach(function (k) {
      var inp = $('#gpAnh' + k);
      if (inp) inp.addEventListener('input', function () { S.anh[k.toLowerCase()] = inp.value.trim(); });
    });
    $('#gpBatDau').addEventListener('click', batDau);
  }
  function soManhCua(l) { var g = LUOI[l] || LUOI['4x3']; return g[0] * g[1]; }

  // Bieu tuong nho: luoi 3x3 co vai manh da lat
  function logo() {
    var o = '';
    for (var i = 0; i < 9; i++) o += '<span class="' + ([1, 3, 5, 6].indexOf(i) >= 0 ? 'is-lat' : '') + '"></span>';
    return '<span class="gp-logo-luoi">' + o + '</span>';
  }

  function chonFile() {
    var f = this.files && this.files[0];
    if (!f) { if (!S.anh) { S.tranhChon = 'ngau'; if (S.pha === 'sanh') veSanh(); } return; }
    if (!/^image\//.test(f.type)) { var l = $('#gpLoi'); if (l) l.textContent = 'Tệp này không phải ảnh.'; return; }
    var cu = S.anh;
    if (cu && cu.url) { try { URL.revokeObjectURL(cu.url); } catch (e) { /* bo qua */ } }
    S.anh = { url: URL.createObjectURL(f), ten: f.name, zh: '', py: '', vn: '' };
    S.tranhChon = 'rieng';
    if (S.pha === 'sanh') veSanh();
    var z = $('#gpAnhZh');
    if (z) z.focus();
  }

  /* ---------------- van choi ---------------- */
  function chuanBi(q) {
    var idx = [];
    for (var i = 0; i < q.options.length; i++) if (i !== q.answer) idx.push(i);
    var thu = tron(tron(idx).slice(0, 3).concat([q.answer]));
    return {
      pre: q.pre || '', post: q.post || '', noBlank: !!q.noBlank, ctx: q.context || '', why: q.why || '',
      opts: thu.map(function (k) { return String(q.options[k]); }),
      dung: thu.indexOf(q.answer)
    };
  }

  function chonTranh() {
    if (S.tranhChon === 'rieng' && S.anh) return { zh: S.anh.zh, py: S.anh.py, vn: S.anh.vn, url: S.anh.url };
    var ds = tranhCo();
    if (!ds.length) return null;
    var i;
    if (typeof S.tranhChon === 'number' && ds[S.tranhChon]) i = S.tranhChon;
    else {
      var con = [];
      for (var k = 0; k < ds.length; k++) if (S.daXem.indexOf(k) < 0) con.push(k);
      if (!con.length) { S.daXem = []; for (k = 0; k < ds.length; k++) con.push(k); }
      i = con[Math.floor(Math.random() * con.length)];
    }
    S.daXem = S.daXem.filter(function (x) { return x !== i; }).concat([i]);
    luuPref();
    return ds[i];
  }

  function batDau() {
    var loi = $('#gpLoi');
    if (S.pha === 'sanh' && S.tranhChon === 'rieng') {
      if (!S.anh) { if (loi) loi.textContent = 'Chưa chọn ảnh — bấm “📁 Ảnh trong máy…”.'; return; }
      if (!S.anh.zh && !S.anh.py && !S.anh.vn) { if (loi) loi.textContent = 'Nhập tên đáp án của ảnh (tiếng Trung, pinyin hoặc tiếng Việt).'; var z = $('#gpAnhZh'); if (z) z.focus(); return; }
    }
    var t = chonTranh();
    if (!t) { if (loi) loi.textContent = 'Chưa có tranh nào (thiếu tệp lop-ghep-tranh.js).'; return; }
    luuPref();
    var g = LUOI[S.luoi] || LUOI['4x3'];
    S.van++;
    S.tranh = t;
    S.cot = g[0]; S.hang = g[1];
    S.mo = [];
    for (var i = 0; i < soManh(); i++) S.mo.push(false);
    S.diem = [0, 0, 0, 0];
    S.mat = [false, false, false, false];
    S.luot = 0;
    S.pool = tron(S.goc);
    S.pi = 0;
    S.doanDung = -1;
    S.tin = '';
    S.so = '';
    S.pha = 'chon';
    veChoi();
  }

  function hinhTranh(t) {
    return t.url ? '<img src="' + esc(t.url) + '" alt="">' : (t.svg || '');
  }

  function veChoi() {
    var o = '';
    for (var n = 1; n <= soManh(); n++) {
      var r = Math.floor((n - 1) / S.cot), c = (n - 1) % S.cot;
      o += '<button type="button" class="gp-o' + ((r + c) % 2 ? ' is-le' : '') + (S.mo[n - 1] ? ' is-lat' : '') + '" data-n="' + n + '" aria-label="Mảnh ' + n + '"><span>' + n + '</span></button>';
    }
    $('#gpMan').innerHTML =
      '<div class="gp-choi">' +
        '<div class="gp-bang-wrap"><div class="gp-bang" id="gpBang" style="--c:' + S.cot + ';--r:' + S.hang + '">' +
          '<div class="gp-tranh">' + hinhTranh(S.tranh) + '</div>' +
          '<div class="gp-luoi" id="gpLuoi">' + o + '</div>' +
        '</div></div>' +
        '<aside class="gp-ben" id="gpBen"></aside>' +
      '</div>';
    $('#gpLuoi').addEventListener('click', function (e) {
      var b = e.target.closest('.gp-o');
      if (b) chonManh(+b.getAttribute('data-n'));
    });
    veBen();
  }

  function veBen() {
    var ben = $('#gpBen');
    if (!ben) return;
    var N = soManh(), lat = soDaLat();
    var dau;
    if (S.pha === 'lo' || S.pha === 'lo-cho') {
      dau = '<div class="gp-luot is-cuoi">🤔 Cả lớp đoán xem<br>đây là gì?</div>';
    } else {
      dau = '<div class="gp-luot" style="--c:' + MAU_TO[S.luot] + '"><small>Lượt của</small><b>' + esc(tenTo(S.luot)) + '</b>' +
        '<small>' + (S.so ? 'Mảnh số <b class="gp-so-go">' + esc(S.so) + '_</b>' : 'Chọn một mảnh số!') + '</small></div>';
    }
    var ds = '';
    for (var t = 0; t < S.soTo; t++) {
      ds += '<div class="gp-to-r' + (t === S.luot && S.pha !== 'lo' && S.pha !== 'lo-cho' ? ' is-luot' : '') + '" style="--c:' + MAU_TO[t] + '">' +
        '<i></i><span class="gp-to-ten">' + esc(tenTo(t)) + (S.mat[t] ? ' <em>mất lượt</em>' : '') + '</span><b>' + S.diem[t] + '</b></div>';
    }
    ben.innerHTML = dau +
      '<div class="gp-to">' + ds + '</div>' +
      '<div class="gp-info"><span>Đã lật <b>' + lat + '</b> / ' + N + ' mảnh</span>' +
        (S.pha === 'chon' ? '<span>Đoán đúng lúc này: <b>+' + diemDoan() + '</b></span>' : '') + '</div>' +
      (S.pha === 'lo-cho'
        ? '<button type="button" class="gp-go" id="gpXemDa">Xem đáp án → <kbd>Space</kbd></button>'
        : '<button type="button" class="gp-go" id="gpDoan"' + (S.pha === 'chon' ? '' : ' disabled') + '>🔍 Đoán ảnh <kbd>G</kbd></button>' +
          '<button type="button" class="gp-btn gp-btn-mo" id="gpLatHet"' + (S.pha === 'chon' ? '' : ' disabled') + '>🏳 Lật hết, xem đáp án</button>') +
      (S.tin ? '<p class="gp-tin" role="status">' + esc(S.tin) + '</p>' : '');
    if ($('#gpDoan')) $('#gpDoan').addEventListener('click', moDoan);
    if ($('#gpLatHet')) $('#gpLatHet').addEventListener('click', function () {
      if (S.pha !== 'chon') return;
      if (!window.confirm('Lật hết các mảnh và xem đáp án? Ván này sẽ kết thúc.')) return;
      ketThucLat();
    });
    if ($('#gpXemDa')) $('#gpXemDa').addEventListener('click', veCuoi);
  }

  function tile(n) { return $('.gp-o[data-n="' + n + '"]'); }

  /* ---------------- chon manh -> cau hoi ---------------- */
  function chonManh(n) {
    if (S.pha !== 'chon') return;
    if (!n || n > soManh()) return;
    var el = tile(n);
    if (S.mo[n - 1]) {
      S.tin = 'Mảnh ' + n + ' đã lật rồi — chọn mảnh khác nhé.';
      veBen();
      return;
    }
    S.so = '';
    clearTimeout(S.soT);
    if (S.pi >= S.pool.length) { S.pool = tron(S.goc); S.pi = 0; }
    S.q = chuanBi(S.pool[S.pi++]);
    S.qManh = n;
    S.qDa = false;
    S.tin = '';
    S.pha = 'hoi';
    $all('.gp-o.is-chon').forEach(function (x) { x.classList.remove('is-chon'); });
    if (el) el.classList.add('is-chon');
    sndChon();
    veBen();
    veHoi();
  }

  function cauHtml(q, hien) {
    var dap = '<span class="gp-o-trong' + (hien ? ' is-hien' : '') + '">' + (hien ? esc(q.opts[q.dung]) : '＿＿') + '</span>';
    if (q.noBlank) return esc(q.pre) + esc(q.post) + (hien ? ' <span class="gp-mui">→</span> ' + dap : '');
    return esc(q.pre) + dap + esc(q.post);
  }

  function veHoi() {
    var q = S.q;
    moModal(
      '<div class="gp-q">' +
        '<p class="gp-q-dau"><span class="gp-q-to" style="--c:' + MAU_TO[S.luot] + '">' + esc(tenTo(S.luot)) + '</span> · Mảnh số <b>' + S.qManh + '</b></p>' +
        (q.ctx ? '<div class="gp-q-ctx">🗣️ ' + esc(q.ctx) + '</div>' : '') +
        '<div class="gp-q-cau" id="gpQCau" lang="zh">' + cauHtml(q, false) + '</div>' +
        '<div class="gp-q-opts' + (q.opts.length > 2 ? '' : ' is-hai') + '">' + q.opts.map(function (o, i) {
          return '<button type="button" class="gp-opt-q" data-i="' + i + '"><b>' + CHU[i] + '</b><span lang="zh">' + esc(o) + '</span></button>';
        }).join('') + '</div>' +
        '<p class="gp-q-kq" id="gpQKq" hidden></p>' +
        '<p class="gp-q-why" id="gpQWhy" hidden></p>' +
        '<div class="gp-nut">' +
          '<button type="button" class="gp-btn gp-btn-sang" id="gpQHuy">← Chọn mảnh khác <kbd>Esc</kbd></button>' +
          '<button type="button" class="gp-go" id="gpQTiep" hidden>Tiếp tục → <kbd>Space</kbd></button>' +
        '</div>' +
      '</div>', 'is-hoi'
    );
    $all('.gp-opt-q').forEach(function (b) {
      b.addEventListener('click', function () { traLoi(+b.getAttribute('data-i')); });
    });
    $('#gpQHuy').addEventListener('click', huyHoi);
    $('#gpQTiep').addEventListener('click', tiepHoi);
  }

  function huyHoi() {
    if (S.pha !== 'hoi' || S.qDa) return;
    // tra cau hoi ve cuoi kho de khong mat cau
    S.pi--;
    var lay = S.pool.splice(S.pi, 1)[0];
    S.pool.push(lay);
    var el = tile(S.qManh);
    if (el) el.classList.remove('is-chon');
    dongModal();
    S.pha = 'chon';
    veBen();
  }

  function traLoi(i) {
    if (S.pha !== 'hoi' || S.qDa) return;
    var q = S.q;
    if (i < 0 || i >= q.opts.length) return;
    S.qDa = true;
    S.qDung = i === q.dung;
    $all('.gp-opt-q').forEach(function (b, k) {
      b.disabled = true;
      if (k === q.dung) b.classList.add('is-dung');
      else if (k === i) b.classList.add('is-sai');
      else b.classList.add('is-mo');
    });
    $('#gpQCau').innerHTML = cauHtml(q, true);
    var kq = $('#gpQKq');
    kq.hidden = false;
    if (S.qDung) {
      S.diem[S.luot] += DIEM_MANH;
      kq.className = 'gp-q-kq is-dung';
      kq.innerHTML = '✓ Chính xác! ' + esc(tenTo(S.luot)) + ' +' + DIEM_MANH + ' — lật mảnh số ' + S.qManh;
      sndDung();
    } else {
      kq.className = 'gp-q-kq is-sai';
      kq.innerHTML = '✗ Chưa đúng — đáp án là <b>' + CHU[q.dung] + '</b>. Mảnh số ' + S.qManh + ' vẫn đóng, chuyển lượt.';
      sndSai();
    }
    if (q.why) { var w = $('#gpQWhy'); w.hidden = false; w.textContent = '💡 ' + q.why; }
    $('#gpQHuy').hidden = true;
    $('#gpQTiep').hidden = false;
  }

  function tiepHoi() {
    if (S.pha !== 'hoi' || !S.qDa) return;
    dongModal();
    var n = S.qManh, el = tile(n);
    if (el) el.classList.remove('is-chon');
    if (S.qDung) latManh(n, 0);
    quaLuot();
    S.pha = 'chon';
    veBen();
    if (soDaLat() >= soManh()) {
      S.pha = 'lo';
      veBen();
      sau(giamChuyenDong() ? 100 : 800, function () { S.pha = 'lo-cho'; veBen(); });
    }
  }

  function latManh(n, delay) {
    S.mo[n - 1] = true;
    var el = tile(n);
    if (!el) return;
    el.disabled = true;
    el.style.animationDelay = (delay || 0) + 'ms';
    el.classList.add('is-lat');
  }

  // Chuyen luot; doi bi phat "mat luot" thi bo qua mot lan
  function quaLuot() {
    var bo = [];
    for (var k = 1; k <= S.soTo; k++) {
      var c = (S.luot + k) % S.soTo;
      if (S.mat[c]) { S.mat[c] = false; bo.push(tenTo(c)); continue; }
      S.luot = c;
      if (bo.length) S.tin = bo.join(', ') + ' mất lượt này.';
      return;
    }
    // ca lop deu bi phat: bo qua het, chuyen sang doi ke
    S.luot = (S.luot + 1) % S.soTo;
  }

  /* ---------------- doan anh ---------------- */
  function moDoan() {
    if (S.pha !== 'chon') return;
    S.so = '';
    clearTimeout(S.soT);
    S.pha = 'doan';
    S.doanTo = S.luot;
    var ds = '';
    for (var t = 0; t < S.soTo; t++) {
      ds += '<button type="button" class="gp-doan-to-b' + (t === S.doanTo ? ' is-on' : '') + '" data-t="' + t + '" style="--c:' + MAU_TO[t] + '"><kbd>' + (t + 1) + '</kbd>' + esc(tenTo(t)) + '</button>';
    }
    moModal(
      '<div class="gp-doan">' +
        '<h3>🔍 Đoán bức tranh</h3>' +
        '<p class="gp-doan-hd">Đội nào đoán?</p>' +
        '<div class="gp-doan-to">' + ds + '</div>' +
        '<p class="gp-doan-diem">Đoán đúng: <b>+' + diemDoan() + '</b> điểm <span>(đã lật ' + soDaLat() + ' mảnh)</span><br>Đoán sai: mất lượt kế tiếp</p>' +
        '<div class="gp-nut">' +
          '<button type="button" class="gp-btn gp-btn-sang" id="gpDHuy">Huỷ</button>' +
          '<button type="button" class="gp-btn gp-btn-sai" id="gpDSai">✗ Sai rồi</button>' +
          '<button type="button" class="gp-go" id="gpDDung">✓ Đúng rồi!</button>' +
        '</div>' +
      '</div>', 'is-doan'
    );
    $all('.gp-doan-to-b').forEach(function (b) {
      b.addEventListener('click', function () { chonDoanTo(+b.getAttribute('data-t')); });
    });
    $('#gpDHuy').addEventListener('click', huyDoan);
    $('#gpDSai').addEventListener('click', doanSai);
    $('#gpDDung').addEventListener('click', doanDung);
  }
  function chonDoanTo(t) {
    if (S.pha !== 'doan' || t < 0 || t >= S.soTo) return;
    S.doanTo = t;
    $all('.gp-doan-to-b').forEach(function (b) { b.classList.toggle('is-on', +b.getAttribute('data-t') === t); });
  }
  function huyDoan() {
    if (S.pha !== 'doan') return;
    dongModal();
    S.pha = 'chon';
    veBen();
  }
  function doanSai() {
    if (S.pha !== 'doan') return;
    var t = S.doanTo;
    dongModal();
    sndSai();
    S.pha = 'chon';
    if (t === S.luot) {
      // dang toi luot doi nay: mat luot ngay bay gio
      S.tin = tenTo(t) + ' đoán chưa đúng — mất lượt.';
      var tin = S.tin;
      quaLuot();
      if (S.tin !== tin) S.tin = tin + ' ' + S.tin;
    } else {
      S.mat[t] = true;
      S.tin = tenTo(t) + ' đoán chưa đúng — mất lượt kế tiếp.';
    }
    veBen();
  }
  function doanDung() {
    if (S.pha !== 'doan') return;
    var t = S.doanTo, cong = diemDoan();
    S.diem[t] += cong;
    S.doanDung = t;
    S.tin = '';
    dongModal();
    sndDung();
    S.pha = 'lo';
    veBen();
    var ms = latHet();
    sau(ms + 500, veCuoi);
  }

  // Lat not cac manh con lai (lan luot), tra ve thoi gian can cho
  function latHet() {
    var con = [];
    S.mo.forEach(function (x, i) { if (!x) con.push(i + 1); });
    var giam = giamChuyenDong();
    var buoc = giam ? 0 : Math.max(40, Math.min(110, 1400 / Math.max(1, con.length)));
    con.forEach(function (n, k) {
      latManh(n, k * buoc);
      if (k % 3 === 0) sndLat(k * buoc / 1000);
    });
    return giam ? 100 : con.length * buoc + 650;
  }

  function ketThucLat() {
    S.pha = 'lo';
    S.tin = '';
    veBen();
    var ms = latHet();
    sau(ms, function () { S.pha = 'lo-cho'; veBen(); });
  }

  /* ---------------- ket thuc: tranh lon + ten ---------------- */
  function veCuoi() {
    if (S.pha !== 'lo' && S.pha !== 'lo-cho') return;
    S.pha = 'cuoi';
    dongModal();
    var t = S.tranh;
    var dsx = [];
    for (var k = 0; k < S.soTo; k++) dsx.push({ t: k, d: S.diem[k] });
    dsx.sort(function (a, b) { return b.d - a.d || a.t - b.t; });
    var huy = ['🥇', '🥈', '🥉', '4'], hang = 0;
    var bang = dsx.map(function (x, i) {
      if (i > 0 && x.d < dsx[i - 1].d) hang = i;
      return '<div class="gp-bxh-r' + (hang === 0 ? ' is-nhat' : '') + '" style="--c:' + MAU_TO[x.t] + '">' +
        '<span class="gp-bxh-h">' + huy[hang] + '</span><span class="gp-bxh-ten"><i></i>' + esc(tenTo(x.t)) + '</span><b>' + x.d + '</b></div>';
    }).join('');
    $('#gpMan').innerHTML =
      '<div class="gp-cuoi">' +
        '<div class="gp-cuoi-tranh"><div class="gp-cuoi-khung">' + hinhTranh(t) + '</div></div>' +
        '<div class="gp-cuoi-ben">' +
          '<div class="gp-ten">' +
            (t.zh ? '<div class="gp-ten-zh" lang="zh">' + esc(t.zh) + '</div>' : '') +

            (t.vn ? '<div class="gp-ten-vn">' + esc(t.vn) + '</div>' : '') +
            (t.zh ? '<button type="button" class="gp-btn gp-btn-sang gp-doc" id="gpDoc">🔊 Đọc lại <kbd>S</kbd></button>' : '') +
          '</div>' +
          '<p class="gp-cuoi-ai">' + (S.doanDung >= 0 ? '🎉 <b style="color:' + MAU_TO[S.doanDung] + '">' + esc(tenTo(S.doanDung)) + '</b> đoán đúng!' : 'Chưa đội nào đoán ra — lần sau nhé!') + '</p>' +
          '<div class="gp-bxh">' + bang + '</div>' +
          '<div class="gp-nut">' +
            '<button type="button" class="gp-btn gp-btn-sang" id="gpVeSanh">⚙ Về sảnh</button>' +
            '<button type="button" class="gp-btn gp-btn-sang" id="gpXong">Đóng</button>' +
            '<button type="button" class="gp-go" id="gpVanMoi">🖼 Ván mới <kbd>Enter</kbd></button>' +
          '</div>' +
        '</div>' +
      '</div>';
    if ($('#gpDoc')) $('#gpDoc').addEventListener('click', function () { docTrung(t.zh); });
    $('#gpVeSanh').addEventListener('click', veSanh);
    $('#gpXong').addEventListener('click', dong);
    $('#gpVanMoi').addEventListener('click', vanMoi);
    sndKen();
    if (t.zh) sau(700, function () { docTrung(t.zh); });
  }

  function vanMoi() {
    // Van moi: tranh ngau nhien khac (anh rieng thi quay ve sanh de chon anh moi)
    if (S.tranhChon === 'rieng') { S.tranhChon = 'ngau'; veSanh(); return; }
    S.tranhChon = 'ngau';
    batDau();
  }

  /* ---------------- hop thoai ---------------- */
  function moModal(html, cls) {
    $('#gpModalThe').innerHTML = html;
    $('#gpModalThe').className = 'gp-modal-the ' + (cls || '');
    $('#gpModal').hidden = false;
  }
  function dongModal() {
    if (!root) return;
    $('#gpModal').hidden = true;
    $('#gpModalThe').innerHTML = '';
  }

  /* ---------------- phim tat / mo / dong ---------------- */
  function toanManHinh() {
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* bo qua */ });
  }

  function nhapSo(d) {
    var N = soManh();
    clearTimeout(S.soT);
    S.so = (S.so || '') + d;
    var v = +S.so;
    if (!v || v > N) { S.so = d === '0' ? '' : d; v = +S.so; }
    if (!v || v > N) { S.so = ''; veBen(); return; }
    if (v * 10 > N) { S.so = ''; chonManh(v); return; }
    // co the con so thu hai (vd 1 -> 12): doi them mot chut
    veBen();
    var ve = S.van;
    S.soT = setTimeout(function () {
      if (ve !== S.van || S.pha !== 'chon') return;
      var x = +S.so;
      S.so = '';
      if (x) chonManh(x); else veBen();
    }, 800);
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
      if (!$('#gpModal').hidden) {
        if (S.pha === 'hoi' && !S.qDa) huyHoi();
        else if (S.pha === 'hoi') tiepHoi();
        else if (S.pha === 'doan') huyDoan();
        else dongModal();
      } else if (!document.fullscreenElement) dong();
      return;
    }
    if (trongO) {
      if (e.key === 'Enter' && S.pha === 'sanh') { e.preventDefault(); e.stopImmediatePropagation(); batDau(); }
      return;
    }
    // Man ghep dang mo thi phim tat cua tro choi phia sau khong duoc chay
    e.stopImmediatePropagation();
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = (e.key || '').toLowerCase();
    var space = e.code === 'Space', enter = e.key === 'Enter', phai = e.key === 'ArrowRight';
    var nut = e.target && e.target.tagName === 'BUTTON' ? e.target : null;
    if (space || enter) e.preventDefault();
    if (k === 'f') { toanManHinh(); return; }
    if (k === 'm') { $('#gpSound').click(); return; }
    var so = e.key >= '0' && e.key <= '9' && e.key.length === 1;
    switch (S.pha) {
      case 'sanh':
      case 'trong':
        if (enter && S.pha === 'sanh') batDau();
        else if (nut && (space || enter)) nut.click();
        break;
      case 'chon':
        if (so) nhapSo(e.key);
        else if (k === 'g') moDoan();
        else if (nut && (space || enter) && !nut.classList.contains('gp-o')) nut.click();
        break;
      case 'hoi':
        if (!S.qDa) {
          var i = 'abcd'.indexOf(k);
          if (k.length !== 1) i = -1;
          if (i < 0 && e.key >= '1' && e.key <= '4') i = +e.key - 1;
          if (i >= 0) traLoi(i);
        } else if (space || enter || phai) tiepHoi();
        break;
      case 'doan':
        if (e.key >= '1' && e.key <= '4') chonDoanTo(+e.key - 1);
        else if (nut && (space || enter)) nut.click();
        break;
      case 'lo-cho':
        if (space || enter || phai) veCuoi();
        break;
      case 'cuoi':
        if (enter) vanMoi();
        else if (k === 's' || (space && !nut)) docTrung(S.tranh && S.tranh.zh);
        else if (nut && space) nut.click();
        break;
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
    S.luoi = LUOI[p.luoi] ? p.luoi : '4x3';
    S.daXem = Array.isArray(p.daXem) ? p.daXem.filter(function (x) { return typeof x === 'number'; }) : [];
    if (typeof S.tranhChon === 'number' && !tranhCo()[S.tranhChon]) S.tranhChon = 'ngau';
    var to = Array.isArray(opt.to) ? opt.to.filter(function (x) { return x && String(x).trim(); }).slice(0, 4) : [];
    if (to.length >= 2) {
      S.soTo = to.length;
      S.ten = to.map(function (x) { return String(x).trim(); });
    } else {
      S.soTo = p.soTo >= 2 && p.soTo <= 4 ? p.soTo : 2;
      S.ten = Array.isArray(p.ten) ? p.ten.slice(0, 4) : [];
    }
    root.hidden = false;
    document.documentElement.classList.add('gp-open');
    veNut();
    veSanh();
    var b = $('#gpBatDau');
    if (b) b.focus();
  }
  function dong() {
    if (!root) return;
    S.van++;
    clearTimeout(S.soT);
    S.pha = 'sanh';
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    dongModal();
    root.hidden = true;
    $('#gpMan').innerHTML = '';
    document.documentElement.classList.remove('gp-open');
  }

  window.LopGhep = { mo: mo, dong: dong };
})();
