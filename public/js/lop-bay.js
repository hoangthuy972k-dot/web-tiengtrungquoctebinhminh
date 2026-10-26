/* Tu ngu biet bay — tro choi man chieu o Che do lop hoc.
   Cac tu cua mot cau bay luon khap man chieu nhu nhung chu buom (duong luon
   hinh sin, nay lai o mep, khong bao gio bay xuong khay). Hoc sinh bam (chuot
   hoac bang cam ung) lan luot tung tu theo dung thu tu de xep cau vao khay o
   duoi: dung thi tu bay vao khay, sai thi tu rung, keu "e" va bay tiep (tinh
   1 loi). Dau cau (。？，…) TU DONG vao dung cho khi den luot — khong phai bat.
   Thu tu dung = cach ghep cac tu thanh dung chuoi `answer` (khong gia su mang
   words da xep dung; mot tu co the lap lai). Neu du lieu lech nhau thi lay
   thu tu cua mang words lam chuan.
   Mo bang window.LopBay.mo({ cau, nhan, to }).                                 */
(function () {
  'use strict';

  var PREF_KEY = 'hyv_bay_pref';
  var MAU_TO = ['#e0573f', '#3f88c5', '#4f9d69', '#e8a33d'];
  var MAU_TU = ['#ffb38a', '#ffe08a', '#a8e6b8', '#9fd4f5', '#d6b8f7', '#ffb3d1', '#ffc98a', '#8fe3d8'];
  var TOC = { cham: 30, vua: 56, nhanh: 96 }; // px/giay tren man rong ~1100px
  var RE_DAU = /^[\s，。？！、；：,.?!;:“”"'‘’《》〈〉「」『』（）()\[\]…—\-·~～]+$/;
  var TOI_DA_TU = 30; // gioi han cho mat na bit khi kiem tra cach ghep

  var S = {
    built: false, goc: [], nhan: '', soTo: 1, ten: [], soCau: '8', toc: 'vua', nhieu: 0, sound: true,
    pha: 'sanh', van: 0, ds: [], ci: 0, diem: [0, 0, 0, 0], kq: [], c: null, bay: [], cho: {},
    raf: 0, tLast: 0, dongHo: 0, W: 0, H: 0, dem: 0
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
  function day(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }
  function norm(s) { return String(s == null ? '' : s).replace(/\s+/g, ''); }
  function laDau(t) { return RE_DAU.test(t); }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function giamChuyenDong() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function sau(ms, fn) {
    var ve = S.van;
    return setTimeout(function () { if (ve === S.van && root && !root.hidden) fn(); }, ms);
  }
  function tenTo(i) { return S.soTo < 2 ? 'Cả lớp' : (S.ten[i] || ('Tổ ' + (i + 1))); }
  function toCua(ci) { return S.soTo < 2 ? 0 : ci % S.soTo; }

  /* ---------------- am thanh & giong doc ---------------- */
  var ac = null;
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
  var NOT = [523, 587, 659, 784, 880, 1047, 1175, 1319, 1568];
  function sndBay(k) { var f = NOT[k % NOT.length]; tone(f, 0.16, 'triangle', 0.18); tone(f * 1.5, 0.24, 'sine', 0.07, 0.06); tone(380, 0.3, 'sine', 0.04, 0, 1100); }
  function sndSai() { tone(220, 0.16, 'square', 0.07, 0, 170); tone(165, 0.26, 'square', 0.07, 0.14, 120); }
  function sndVo() { for (var i = 0; i < 6; i++) tone(880 + i * 130, 0.06, 'sine', 0.05, i * 0.045); }
  function sndHoan() { tone(700, 0.12, 'sine', 0.08, 0, 420); }
  function sndGoiY() { tone(1320, 0.12, 'sine', 0.08); tone(1760, 0.18, 'sine', 0.06, 0.1); }
  function sndKen() { [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.16, i * 0.1); }); tone(1047, 0.6, 'triangle', 0.13, 0.55); tone(1319, 0.6, 'triangle', 0.11, 0.55); tone(1568, 0.7, 'triangle', 0.11, 0.55); }

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
    root.id = 'lopBay';
    root.className = 'by';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Từ ngữ biết bay');
    root.innerHTML =
      '<div class="by-nen" aria-hidden="true"><span class="by-trang"></span>' +
        '<span class="by-may m1"></span><span class="by-may m2"></span><span class="by-may m3"></span>' +
        '<span class="by-doi"></span></div>' +
      '<header class="by-bar">' +
        '<b class="by-title">🦋 Từ ngữ biết bay</b>' +
        '<span class="by-sub" id="bySub"></span>' +
        '<span class="by-bar-gap"></span>' +
        '<button type="button" class="by-btn by-ic" id="bySound"></button>' +
        '<button type="button" class="by-btn by-ic" id="byFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="by-btn" id="byClose">✕ Đóng</button>' +
      '</header>' +
      '<main class="by-man" id="byMan"></main>';
    document.body.appendChild(root);

    $('#bySound').addEventListener('click', function () { S.sound = !S.sound; luuPref(); veNut(); if (S.sound) sndGoiY(); });
    $('#byFull').addEventListener('click', toanManHinh);
    $('#byClose').addEventListener('click', dong);
    window.addEventListener('keydown', phim, true);
    window.addEventListener('keyup', phimNha, true);
    window.addEventListener('resize', doiCo);
    S.built = true;
  }

  function veNut() {
    var s = $('#bySound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng — bấm để tắt (M)' : 'Đang tắt tiếng — bấm để bật (M)';
    s.classList.toggle('is-off', !S.sound);
  }
  function luuPref() {
    ghiLS(PREF_KEY, { soTo: S.soTo, ten: S.ten, soCau: S.soCau, toc: S.toc, nhieu: S.nhieu, sound: S.sound });
  }

  /* ---------------- sanh ---------------- */
  function chipNut(k, v, nhan, on) {
    return '<button type="button" class="by-opt' + (on ? ' is-on' : '') + '" data-k="' + k + '" data-v="' + v + '">' + nhan + '</button>';
  }
  function soCauChon() {
    var n = S.goc.length;
    return S.soCau === 'het' ? n : Math.min(+S.soCau || 8, n);
  }
  function veSanh() {
    S.pha = 'sanh';
    S.van++;
    dungLap();
    $('#bySub').textContent = S.nhan ? S.nhan + ' · ' + S.goc.length + ' câu' : S.goc.length + ' câu';
    if (!S.goc.length) {
      S.pha = 'trong';
      $('#bySub').textContent = '';
      $('#byMan').innerHTML =
        '<div class="by-the by-trong">' +
          '<div class="by-logo" aria-hidden="true">🦋</div>' +
          '<h2>Chưa có câu nào để thả bay!</h2>' +
          '<p>Trò chơi cần các câu <b>sắp xếp từ thành câu</b>. Hãy tích chọn bài có phần sắp xếp câu ở màn chuẩn bị, rồi mở lại nhé.</p>' +
          '<div class="by-nut"><button type="button" class="by-go" id="byVe">← Về chọn bài</button></div>' +
        '</div>';
      $('#byVe').addEventListener('click', dong);
      return;
    }
    var ten = '';
    for (var i = 0; i < 4; i++) {
      ten += '<label class="by-ten-to" style="--c:' + MAU_TO[i] + '"' + (i < S.soTo ? '' : ' hidden') + '><i></i>' +
        '<input type="text" maxlength="24" data-i="' + i + '" value="' + esc(S.ten[i] || ('Tổ ' + (i + 1))) + '" aria-label="Tên đội ' + (i + 1) + '"></label>';
    }
    var n = S.goc.length, cau = '';
    ['5', '8', '10'].forEach(function (v) { if (+v < n) cau += chipNut('cau', v, v + ' câu', S.soCau === v); });
    cau += chipNut('cau', 'het', 'Tất cả <small>' + n + ' câu</small>', S.soCau === 'het' || +S.soCau >= n);
    $('#byMan').innerHTML =
      '<div class="by-the by-sanh">' +
        '<div class="by-sanh-dau">' +
          '<div class="by-logo" aria-hidden="true">🦋</div>' +
          '<div><h2>Từ ngữ biết bay</h2>' +
          '<p class="by-luat">Các từ của câu bay lượn khắp màn hình như những chú bướm. Bấm vào từng từ <b>theo đúng thứ tự</b> để xếp thành câu ở khay bên dưới. ' +
          'Bấm sai: từ rung lên và bay tiếp (tính 1 lỗi). Dấu câu tự vào chỗ. ' +
          'Mỗi câu tối đa <b>100 điểm</b>: −15 mỗi lỗi, −2 mỗi giây quá thời gian chuẩn, ít nhất 10.</p></div>' +
        '</div>' +
        '<div class="by-hang"><span class="by-nhan">Số đội</span><div class="by-chon">' +
          chipNut('to', 1, 'Cả lớp', S.soTo === 1) + chipNut('to', 2, '2 đội', S.soTo === 2) +
          chipNut('to', 3, '3 đội', S.soTo === 3) + chipNut('to', 4, '4 đội', S.soTo === 4) +
        '</div></div>' +
        '<div class="by-hang" id="byHangTen"' + (S.soTo > 1 ? '' : ' hidden') + '><span class="by-nhan">Tên đội</span><div class="by-chon">' + ten +
          '<span class="by-ghi">Các đội lần lượt xếp mỗi đội một câu.</span></div></div>' +
        '<div class="by-hang"><span class="by-nhan">Số câu</span><div class="by-chon">' + cau + '</div></div>' +
        '<div class="by-hang"><span class="by-nhan">Tốc độ bay</span><div class="by-chon">' +
          chipNut('toc', 'cham', '🐢 Chậm', S.toc === 'cham') + chipNut('toc', 'vua', '🦋 Vừa', S.toc === 'vua') + chipNut('toc', 'nhanh', '🐝 Nhanh', S.toc === 'nhanh') +
        '</div></div>' +
        '<div class="by-hang"><span class="by-nhan">Từ gây nhiễu</span><div class="by-chon">' +
          chipNut('nhieu', 0, 'Không', S.nhieu === 0) + chipNut('nhieu', 1, '+1 từ <small>mượn câu khác</small>', S.nhieu === 1) +
          chipNut('nhieu', 2, '+2 từ <small>mượn câu khác</small>', S.nhieu === 2) +
        '</div></div>' +
        '<div class="by-nut"><button type="button" class="by-go" id="byBatDau">▶ Bắt đầu <kbd>Enter</kbd></button></div>' +
      '</div>';

    $all('.by-opt').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-k'), v = b.getAttribute('data-v');
        if (k === 'to') {
          S.soTo = +v;
          $all('.by-ten-to').forEach(function (l, i) { l.hidden = i >= S.soTo; });
          $('#byHangTen').hidden = S.soTo < 2;
        } else if (k === 'cau') S.soCau = v;
        else if (k === 'toc') S.toc = v;
        else if (k === 'nhieu') S.nhieu = +v;
        $all('.by-opt[data-k="' + k + '"]').forEach(function (x) { x.classList.toggle('is-on', x === b); });
        luuPref();
      });
    });
    $all('.by-ten-to input').forEach(function (inp) {
      inp.addEventListener('input', function () { S.ten[+inp.getAttribute('data-i')] = inp.value.trim(); luuPref(); });
    });
    $('#byBatDau').addEventListener('click', batDau);
  }

  /* ---------------- chuan bi cau ---------------- */
  // Kiem tra: tu vi tri cua mat na `mask`, cac tu con lai co ghep tiep thanh dung phan con lai cua dap an khong
  function conXep(c, mask) {
    if (c.memo[mask] !== undefined) return c.memo[mask];
    var pos = 0, i, kq = false;
    for (i = 0; i < c.tok.length; i++) if (mask & (1 << i)) pos += c.tok[i].t.length;
    if (pos >= c.a.length) kq = mask === c.full;
    else {
      var thu = {};
      for (i = 0; i < c.tok.length && !kq; i++) {
        var t = c.tok[i].t;
        if ((mask & (1 << i)) || thu[t]) continue;
        thu[t] = 1;
        if (c.a.substr(pos, t.length) === t && conXep(c, mask | (1 << i))) kq = true;
      }
    }
    c.memo[mask] = kq;
    return kq;
  }
  function chuanBi(q) {
    var tok = [];
    q.words.forEach(function (w) {
      var t = norm(w);
      if (t) tok.push({ t: t, dau: laDau(t) });
    });
    var c = { q: q, tok: tok, a: norm(q.answer), memo: {}, mask: 0, pos: 0, dat: [], loi: 0, goiY: 0, nhieu: [], bo: false };
    c.full = tok.length >= 31 ? -1 : (1 << tok.length) - 1;
    if (!c.a || !conXep(c, 0)) {
      // du lieu lech: lay thu tu cua words lam chuan
      c.a = tok.map(function (x) { return x.t; }).join('');
      c.memo = {};
    }
    c.hien = String(q.answer || '').trim() || c.a;
    c.soTu = tok.filter(function (x) { return !x.dau; }).length;
    return c;
  }
  function hopLe(c, i) {
    var b = 1 << i, t = c.tok[i].t;
    return !(c.mask & b) && c.a.substr(c.pos, t.length) === t && conXep(c, c.mask | b);
  }
  function datTok(c, i) { c.mask |= 1 << i; c.dat.push(i); c.pos += c.tok[i].t.length; }
  function xongCau(c) { return c.dat.length === c.tok.length; }
  function tuDongDau(c) {
    var them = [], co = true;
    while (co) {
      co = false;
      for (var i = 0; i < c.tok.length; i++) {
        if (c.tok[i].dau && hopLe(c, i)) { datTok(c, i); them.push(i); co = true; break; }
      }
    }
    return them;
  }
  // Tu gay nhieu: muon tu cua cau khac, khong trung voi bat ky phan nao cua cau nay
  function chonNhieu(c) {
    if (!S.nhieu) return [];
    var thay = {}, kho = [];
    S.goc.forEach(function (q) {
      if (q === c.q) return;
      q.words.forEach(function (w) {
        var t = norm(w);
        if (!t || laDau(t) || t.length > 6 || thay[t] || c.a.indexOf(t) >= 0) return;
        thay[t] = 1;
        kho.push(t);
      });
    });
    return tron(kho).slice(0, S.nhieu);
  }

  /* ---------------- van choi ---------------- */
  function batDau() {
    if (!S.goc.length) return;
    luuPref();
    S.ds = tron(S.goc).slice(0, soCauChon());
    S.ci = 0;
    S.diem = [0, 0, 0, 0];
    S.kq = [];
    veChoi();
    batDauCau();
  }

  function veChoi() {
    $('#byMan').innerHTML =
      '<div class="by-choi">' +
        '<div class="by-hud">' +
          '<span class="by-luot" id="byLuot"></span>' +
          '<span class="by-hud-o">Câu <b id="bySo">1</b>/' + S.ds.length + '</span>' +
          '<span class="by-hud-o">⏱ <b id="byGio">0</b> giây</span>' +
          '<span class="by-hud-o is-loi">✗ <b id="byLoi">0</b> lỗi</span>' +
          '<span class="by-hud-gap"></span>' +
          '<span class="by-bang" id="byBang"></span>' +
        '</div>' +
        '<p class="by-ctx" id="byCtx" hidden></p>' +
        '<div class="by-vung">' +
          '<div class="by-troi" id="byTroi" aria-label="Các từ đang bay — bấm theo đúng thứ tự"></div>' +
          '<div class="by-banner" id="byBanner" aria-hidden="true"></div>' +
          '<div class="by-kq" id="byKq" hidden></div>' +
        '</div>' +
        '<div class="by-khay" id="byKhay">' +
          '<div class="by-khay-tu" id="byKhayTu" lang="zh" aria-live="polite"></div>' +
          '<div class="by-khay-nut">' +
            '<span class="by-con" id="byCon"></span>' +
            '<button type="button" class="by-btn by-btn-sang" id="byUndo">↶ Hoàn tác <kbd>⌫</kbd></button>' +
            '<button type="button" class="by-btn by-btn-sang" id="byGoiY" title="Từ tiếp theo sẽ sáng lên — tính 1 lỗi">💡 Gợi ý <kbd>H</kbd></button>' +
            '<button type="button" class="by-btn by-btn-sang" id="byBo" title="Hiện cả câu, câu này 0 điểm">🏳 Xem đáp án</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    var troi = $('#byTroi');
    troi.addEventListener('pointerdown', function (e) {
      var b = e.target.closest('.by-tu');
      if (!b || e.button > 0) return;
      e.preventDefault();
      bamTu(b.getAttribute('data-id'));
    });
    troi.addEventListener('click', function (e) {
      // chi nhan "click" tu ban phim (Enter/Space); chuot & cham da xu ly o pointerdown
      if (e.detail !== 0) return;
      var b = e.target.closest('.by-tu');
      if (b) bamTu(b.getAttribute('data-id'));
    });
    $('#byUndo').addEventListener('click', hoanTac);
    $('#byGoiY').addEventListener('click', goiY);
    $('#byBo').addEventListener('click', xemDapAn);
    $('#byKq').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-act]');
      if (!b) return;
      var a = b.getAttribute('data-act');
      if (a === 'doc') docTrung(S.c && S.c.a);
      else if (a === 'tiep') tiepCau();
    });
  }

  function batDauCau() {
    S.van++;
    dungLap();
    clearInterval(S.dongHo);
    var c = chuanBi(S.ds[S.ci]);
    c.nhieu = chonNhieu(c);
    S.c = c;
    S.cho = {};
    tuDongDau(c);
    var kq = $('#byKq');
    kq.hidden = true;
    kq.innerHTML = '';
    $('#byKhay').classList.remove('is-sang');
    var cx = $('#byCtx');
    cx.textContent = c.q.context ? '🗣️ ' + c.q.context : '';
    cx.hidden = !c.q.context;
    S.pha = 'choi';
    veHud();
    veKhay();
    thaTu(c);
    c.t0 = Date.now();
    S.dongHo = setInterval(function () {
      if (S.pha === 'choi' && root && !root.hidden) { var g = $('#byGio'); if (g) g.textContent = soGiay(); }
    }, 250);
    batLap();
    if (S.soTo > 1) {
      var bn = $('#byBanner');
      bn.style.setProperty('--c', MAU_TO[toCua(S.ci)]);
      bn.textContent = 'Lượt của ' + tenTo(toCua(S.ci));
      bn.classList.remove('is-hien');
      void bn.offsetWidth;
      bn.classList.add('is-hien');
    }
    sndVo();
  }
  function soGiay() { return S.c ? Math.floor((Date.now() - S.c.t0) / 1000) : 0; }

  function veHud() {
    var c = S.c, t = toCua(S.ci);
    var l = $('#byLuot');
    l.style.setProperty('--c', S.soTo > 1 ? MAU_TO[t] : '#8a5cc7');
    l.innerHTML = S.soTo > 1 ? '<small>Lượt của</small> <b>' + esc(tenTo(t)) + '</b>' : '<b>Cả lớp</b>';
    $('#bySo').textContent = S.ci + 1;
    $('#byLoi').textContent = c ? c.loi : 0;
    $('#byGio').textContent = S.pha === 'choi' ? soGiay() : (c && c.giay != null ? c.giay : 0);
    var b = '';
    if (S.soTo > 1) {
      for (var i = 0; i < S.soTo; i++) {
        b += '<span class="by-bang-o' + (i === t ? ' is-luot' : '') + '" style="--c:' + MAU_TO[i] + '"><i></i>' + esc(tenTo(i)) + ' <b>' + S.diem[i] + '</b></span>';
      }
    } else {
      b = '<span class="by-bang-o is-luot" style="--c:#8a5cc7"><i></i>Tổng điểm <b>' + S.diem[0] + '</b></span>';
    }
    $('#byBang').innerHTML = b;
  }

  function veKhay() {
    var c = S.c;
    var o = c.dat.map(function (i) {
      var t = c.tok[i];
      return '<span class="by-k' + (t.dau ? ' is-dau' : '') + (S.cho[i] ? ' is-an' : '') + '" data-i="' + i + '">' + esc(t.t) + '</span>';
    }).join('');
    var con = 0;
    c.tok.forEach(function (t, i) { if (!t.dau && !(c.mask & (1 << i))) con++; });
    $('#byKhayTu').innerHTML = o + (con ? '<span class="by-k-tro" aria-hidden="true"></span>' : '');
    $('#byCon').textContent = con ? 'Còn ' + con + ' từ' : '';
    var coTu = c.dat.some(function (i) { return !c.tok[i].dau; });
    $('#byUndo').disabled = S.pha !== 'choi' || !coTu;
    $('#byGoiY').disabled = S.pha !== 'choi';
    $('#byBo').disabled = S.pha !== 'choi';
  }
  function chipCua(i) { return $('#byKhayTu .by-k[data-i="' + i + '"]'); }
  function hienChip(ds) {
    ds.forEach(function (i) {
      if (!S.cho[i]) return;
      delete S.cho[i];
      var k = chipCua(i);
      if (k) { k.classList.remove('is-an'); k.classList.add('is-moi'); }
    });
  }

  /* ---------------- nhung chu buom ---------------- */
  function doKichThuoc() {
    var t = $('#byTroi');
    if (!t) return;
    S.W = t.clientWidth;
    S.H = t.clientHeight;
  }
  function heSo() { return Math.max(0.7, Math.min(1.6, S.W / 1100)); }

  function taoBay(d, k) {
    var el = document.createElement('button');
    el.type = 'button';
    el.className = 'by-tu';
    el.setAttribute('data-id', d.id);
    el.setAttribute('lang', 'zh');
    el.style.setProperty('--c', MAU_TU[k % MAU_TU.length]);
    el.style.setProperty('--d', (-((k * 0.29) % 0.6)).toFixed(2) + 's');
    el.innerHTML = '<span class="by-tu-in"><i class="by-canh is-trai"></i><i class="by-canh is-phai"></i><span class="by-tu-chu">' + esc(d.t) + '</span></span>';
    $('#byTroi').appendChild(el);
    d.el = el;
    d.w = el.offsetWidth;
    d.h = el.offsetHeight;
    var sp = TOC[S.toc] * heSo() * (0.8 + Math.random() * 0.4);
    var g = Math.random() * Math.PI * 2;
    d.sp = sp;
    d.vx = Math.cos(g) * sp;
    d.vy = Math.sin(g) * sp * 0.7;
    if (Math.abs(d.vx) < sp * 0.35) d.vx = (d.vx < 0 ? -1 : 1) * sp * 0.35;
    // Giam chuyen dong: tu van troi (do la luat choi) nhung bo nhap nho hinh sin & nghieng
    d.A = giamChuyenDong() ? 0 : (8 + Math.random() * 12) * heSo();
    d.f = 0.9 + Math.random() * 0.8;
    d.ph = Math.random() * Math.PI * 2;
    d.boost = 1;
    d.x = 0; d.y = 0;
    S.bay.push(d);
    return d;
  }
  function kep(d) {
    d.x = Math.max(0, Math.min(d.x, S.W - d.w));
    d.y = Math.max(0, Math.min(d.y, S.H - d.h));
  }
  function ve(d) {
    var rot = d.A ? Math.max(-7, Math.min(7, d.vx / Math.max(1, d.sp) * 5)) : 0;
    d.el.style.transform = 'translate3d(' + d.x.toFixed(1) + 'px,' + d.y.toFixed(1) + 'px,0) rotate(' + rot.toFixed(1) + 'deg)';
  }
  // Rai deu cac tu vao luoi o (co lech nhe) de luc dau khong chong len nhau
  function xepLuoi(ds) {
    var n = ds.length;
    if (!n) return;
    var cot = Math.max(1, Math.min(n, Math.round(Math.sqrt(n * S.W / Math.max(1, S.H)))));
    var hang = Math.ceil(n / cot);
    var cw = S.W / cot, ch = S.H / hang;
    var o = tron(day(cot * hang));
    var lech = 0.6;
    ds.forEach(function (d, k) {
      var cell = o[k], cx = cell % cot, cy = Math.floor(cell / cot);
      var jx = Math.max(0, cw - d.w) / 2, jy = Math.max(0, ch - d.h) / 2;
      d.x = cx * cw + (cw - d.w) / 2 + (Math.random() * 2 - 1) * jx * lech;
      d.y = cy * ch + (ch - d.h) / 2 + (Math.random() * 2 - 1) * jy * lech;
      kep(d);
      ve(d);
    });
  }
  function thaTu(c) {
    var troi = $('#byTroi');
    troi.innerHTML = '';
    S.bay = [];
    doKichThuoc();
    var ds = [];
    c.tok.forEach(function (t, i) { if (!t.dau && !(c.mask & (1 << i))) ds.push({ id: 'r' + i, i: i, t: t.t, nhieu: false }); });
    c.nhieu.forEach(function (t, k) { ds.push({ id: 'n' + k, i: -1, t: t, nhieu: true }); });
    tron(ds).forEach(function (d, k) { taoBay(d, k); });
    xepLuoi(S.bay);
  }
  function timBay(id) {
    for (var i = 0; i < S.bay.length; i++) if (S.bay[i].id === id) return S.bay[i];
    return null;
  }
  function boBay(d) {
    var k = S.bay.indexOf(d);
    if (k >= 0) S.bay.splice(k, 1);
  }

  function tach(a, b) {
    var G = 12;
    var ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x) + G;
    var oy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y) + G;
    if (ox <= 0 || oy <= 0) return;
    var s, m, t;
    if (ox < oy) {
      s = (a.x + a.w / 2) < (b.x + b.w / 2) ? 1 : -1;
      m = Math.min(ox, 8) / 2;
      a.x -= s * m; b.x += s * m;
      if ((b.vx - a.vx) * s < 0) { t = a.vx; a.vx = b.vx; b.vx = t; }
    } else {
      s = (a.y + a.h / 2) < (b.y + b.h / 2) ? 1 : -1;
      m = Math.min(oy, 8) / 2;
      a.y -= s * m; b.y += s * m;
      if ((b.vy - a.vy) * s < 0) { t = a.vy; a.vy = b.vy; b.vy = t; }
    }
  }
  function buoc(dt, t) {
    var ds = S.bay, i, j, d;
    for (i = 0; i < ds.length; i++) {
      d = ds[i];
      d.boost = 1 + (d.boost - 1) * Math.exp(-dt * 1.8);
      d.x += d.vx * d.boost * dt;
      d.y += (d.vy * d.boost + Math.cos(t * d.f + d.ph) * d.A * d.f) * dt;
      if (d.x < 0) { d.x = 0; d.vx = Math.abs(d.vx); }
      else if (d.x > S.W - d.w) { d.x = Math.max(0, S.W - d.w); d.vx = -Math.abs(d.vx); }
      if (d.y < 0) { d.y = 0; d.vy = Math.abs(d.vy); }
      else if (d.y > S.H - d.h) { d.y = Math.max(0, S.H - d.h); d.vy = -Math.abs(d.vy); }
    }
    for (i = 0; i < ds.length; i++) for (j = i + 1; j < ds.length; j++) tach(ds[i], ds[j]);
    for (i = 0; i < ds.length; i++) { kep(ds[i]); ve(ds[i]); }
  }
  function vongLap(ts) {
    S.raf = 0;
    if (!root || root.hidden || S.pha !== 'choi') return;
    var dt = S.tLast ? Math.min(0.05, (ts - S.tLast) / 1000) : 0;
    S.tLast = ts;
    buoc(dt, ts / 1000);
    S.raf = requestAnimationFrame(vongLap);
  }
  function batLap() {
    if (S.raf) return;
    S.tLast = 0;
    S.raf = requestAnimationFrame(vongLap);
  }
  function dungLap() {
    if (S.raf) cancelAnimationFrame(S.raf);
    S.raf = 0;
  }
  function doiCo() {
    if (!root || root.hidden || S.pha !== 'choi') return;
    doKichThuoc();
    S.bay.forEach(function (d) { d.w = d.el.offsetWidth; d.h = d.el.offsetHeight; kep(d); ve(d); });
  }

  /* ---------------- bam tu ---------------- */
  function bamTu(id) {
    if (S.pha !== 'choi') return;
    var c = S.c, d = timBay(id);
    if (!d) return;
    if (!d.nhieu && hopLe(c, d.i)) {
      datTok(c, d.i);
      c.tXong = Date.now();
      var ds = [d.i].concat(tuDongDau(c));
      ds.forEach(function (i) { S.cho[i] = 1; });
      sndBay(c.dat.length);
      boBay(d);
      veKhay();
      bayVaoKhay(d, ds);
      veHud();
      if (xongCau(c)) {
        S.pha = 'cho-xong';
        sau(620, hoanThanh);
      }
    } else {
      c.loi++;
      sndSai();
      rung(d);
      veHud();
    }
  }
  function rung(d) {
    var el = d.el;
    el.classList.remove('is-sai');
    void el.offsetWidth;
    el.classList.add('is-sai');
    setTimeout(function () { el.classList.remove('is-sai'); }, 650);
    // bi "xua" bay di nhanh hon mot chut
    d.vx = (Math.random() < 0.5 ? -1 : 1) * Math.abs(d.vx);
    d.vy = -Math.abs(d.vy) - d.sp * 0.3;
    d.boost = 2.4;
  }
  function bayVaoKhay(d, ds) {
    var el = d.el, chip = chipCua(d.i), c = S.c;
    if (!chip) { el.parentNode && el.parentNode.removeChild(el); hienChip(ds); return; }
    var tr = $('#byTroi').getBoundingClientRect(), b = chip.getBoundingClientRect();
    var cx = b.left - tr.left + b.width / 2, cy = b.top - tr.top + b.height / 2;
    var sc = Math.max(0.5, Math.min(1.2, b.height / Math.max(1, d.h) * 1.15));
    el.classList.add('is-vao');
    el.style.transition = 'transform .55s cubic-bezier(.45,-0.25,.35,1), opacity .2s ease .45s';
    el.style.transform = 'translate3d(' + (cx - d.w / 2).toFixed(1) + 'px,' + (cy - d.h / 2).toFixed(1) + 'px,0) scale(' + sc.toFixed(2) + ')';
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
      if (root && !root.hidden && S.c === c) hienChip(ds);
    }, 560);
  }

  function hoanTac() {
    if (S.pha !== 'choi') return;
    var c = S.c, j = -1, k;
    for (k = c.dat.length - 1; k >= 0; k--) if (!c.tok[c.dat[k]].dau) { j = k; break; }
    if (j < 0) return;
    var i = c.dat[j];
    var chip = chipCua(i);
    var r0 = chip && !chip.classList.contains('is-an') ? chip.getBoundingClientRect() : null;
    var bo = c.dat.splice(j);
    bo.forEach(function (x) { c.mask &= ~(1 << x); delete S.cho[x]; });
    c.pos = 0;
    c.dat.forEach(function (x) { c.pos += c.tok[x].t.length; });
    veKhay();
    var d = taoBay({ id: 'r' + i + '-' + (++S.dem), i: i, t: c.tok[i].t, nhieu: false }, i + S.dem);
    if (r0) {
      var tr = $('#byTroi').getBoundingClientRect();
      d.x = r0.left - tr.left + r0.width / 2 - d.w / 2;
      d.y = S.H - d.h;
    } else {
      d.x = Math.random() * Math.max(0, S.W - d.w);
      d.y = Math.random() * Math.max(0, S.H - d.h);
    }
    d.vy = -Math.abs(d.vy) - d.sp * 0.4;
    d.boost = 2;
    kep(d);
    ve(d);
    sndHoan();
    veHud();
  }

  function goiY() {
    if (S.pha !== 'choi') return;
    var c = S.c, d = null;
    for (var k = 0; k < S.bay.length; k++) {
      if (!S.bay[k].nhieu && hopLe(c, S.bay[k].i)) { d = S.bay[k]; break; }
    }
    if (!d) return;
    c.loi++;
    c.goiY++;
    var el = d.el;
    el.classList.remove('is-goiy');
    void el.offsetWidth;
    el.classList.add('is-goiy');
    setTimeout(function () { el.classList.remove('is-goiy'); }, 1800);
    sndGoiY();
    veHud();
  }

  function xemDapAn() {
    if (S.pha !== 'choi') return;
    var c = S.c, co = true;
    while (co && !xongCau(c)) {
      co = false;
      for (var i = 0; i < c.tok.length; i++) if (hopLe(c, i)) { datTok(c, i); co = true; break; }
    }
    c.bo = true;
    S.cho = {};
    S.bay.slice().forEach(function (d) { if (!d.nhieu) { boBay(d); d.el.classList.add('is-tan'); } });
    veKhay();
    hoanThanh();
  }

  /* ---------------- xong mot cau ---------------- */
  function tinhDiem(c) {
    var han = 4 + 3 * c.soTu;
    return Math.max(10, Math.round(100 - 15 * c.loi - 2 * Math.max(0, c.giay - han)));
  }
  function hoanThanh() {
    if (S.pha !== 'choi' && S.pha !== 'cho-xong') return;
    S.pha = 'xong';
    dungLap();
    clearInterval(S.dongHo);
    var c = S.c, to = toCua(S.ci);
    c.giay = Math.max(0, Math.round(((c.bo ? Date.now() : c.tXong || Date.now()) - c.t0) / 1000));
    c.diem = c.bo ? 0 : tinhDiem(c);
    S.diem[to] += c.diem;
    S.kq.push({ to: to, hien: c.hien, a: c.a, diem: c.diem, loi: c.loi, giay: c.giay, bo: c.bo });
    S.bay.forEach(function (d) { d.el.classList.add('is-tan'); });
    S.cho = {};
    veKhay();
    $all('#byKhayTu .by-k').forEach(function (k, n) { k.style.setProperty('--n', n); });
    $('#byKhay').classList.add('is-sang');
    veHud();
    if (!c.bo) sndKen();
    sau(c.bo ? 150 : 650, function () { docTrung(c.a); });

    var cuoi = S.ci >= S.ds.length - 1;
    var keTiep = cuoi ? '' : (S.soTo > 1 ? ' — lượt ' + esc(tenTo(toCua(S.ci + 1))) : '');
    var khen = c.bo ? 'Đáp án đây!' : c.loi === 0 ? '🎉 Hoàn hảo!' : c.diem >= 70 ? '👏 Tuyệt vời!' : '👍 Hoàn thành!';
    var kq = $('#byKq');
    kq.innerHTML =
      '<div class="by-kq-the">' +
        '<p class="by-kq-dau">' + khen + (S.soTo > 1 ? ' <span class="by-kq-to" style="--c:' + MAU_TO[to] + '">' + esc(tenTo(to)) + '</span>' : '') + '</p>' +
        '<div class="by-kq-diem' + (c.bo ? ' is-0' : '') + '">+' + c.diem + '<small> điểm</small></div>' +
        '<p class="by-kq-ct">⏱ ' + c.giay + ' giây · ✗ ' + c.loi + ' lỗi' + (c.goiY ? ' (có ' + c.goiY + ' gợi ý)' : '') + (c.bo ? ' · đã xem đáp án' : '') + '</p>' +
        (c.q.why ? '<p class="by-kq-why">💡 ' + esc(c.q.why) + '</p>' : '') +
        '<div class="by-nut">' +
          '<button type="button" class="by-btn by-btn-sang" data-act="doc">🔊 Đọc lại <kbd>S</kbd></button>' +
          '<button type="button" class="by-go" data-act="tiep" id="byTiep">' + (cuoi ? '🏁 Xem kết quả' : 'Câu tiếp' + keTiep + ' →') + ' <kbd>Space</kbd></button>' +
        '</div>' +
      '</div>';
    kq.hidden = false;
  }

  function tiepCau() {
    if (S.pha !== 'xong') return;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    S.ci++;
    if (S.ci >= S.ds.length) veCuoi();
    else batDauCau();
  }

  /* ---------------- ket thuc ---------------- */
  function veCuoi() {
    S.pha = 'cuoi';
    S.van++;
    dungLap();
    clearInterval(S.dongHo);
    var bang = '';
    if (S.soTo > 1) {
      var dsx = [];
      for (var k = 0; k < S.soTo; k++) dsx.push({ t: k, d: S.diem[k] });
      dsx.sort(function (a, b) { return b.d - a.d || a.t - b.t; });
      var huy = ['🥇', '🥈', '🥉', '4'], hang = 0;
      bang = '<div class="by-bxh">' + dsx.map(function (x, i) {
        if (i > 0 && x.d < dsx[i - 1].d) hang = i;
        return '<div class="by-bxh-r' + (hang === 0 ? ' is-nhat' : '') + '" style="--c:' + MAU_TO[x.t] + '">' +
          '<span class="by-bxh-h">' + huy[hang] + '</span><span class="by-bxh-ten"><i></i>' + esc(tenTo(x.t)) + '</span><b>' + x.d + '</b></div>';
      }).join('') + '</div>';
    } else {
      var toiDa = S.kq.length * 100;
      bang = '<div class="by-tong"><b>' + S.diem[0] + '</b><span>/ ' + toiDa + ' điểm</span></div>';
    }
    var ds = S.kq.map(function (r, i) {
      return '<li' + (r.bo ? ' class="is-bo"' : '') + '>' +
        '<span class="by-ds-so">' + (i + 1) + '</span>' +
        '<span class="by-ds-cau" lang="zh">' + esc(r.hien) + '</span>' +
        (S.soTo > 1 ? '<span class="by-ds-to" style="--c:' + MAU_TO[r.to] + '">' + esc(tenTo(r.to)) + '</span>' : '') +
        '<span class="by-ds-ct">' + r.giay + 's · ' + r.loi + ' lỗi</span>' +
        '<b class="by-ds-d">+' + r.diem + '</b>' +
        '<button type="button" class="by-btn by-btn-sang by-ds-doc" data-i="' + i + '" aria-label="Đọc câu ' + (i + 1) + '">🔊</button>' +
      '</li>';
    }).join('');
    $('#byMan').innerHTML =
      '<div class="by-the by-cuoi">' +
        '<h2>🏁 Đã xếp xong ' + S.kq.length + ' câu!</h2>' +
        bang +
        '<ol class="by-ds">' + ds + '</ol>' +
        '<div class="by-nut">' +
          '<button type="button" class="by-btn by-btn-sang" id="byVeSanh">⚙ Về sảnh</button>' +
          '<button type="button" class="by-btn by-btn-sang" id="byXong">Đóng</button>' +
          '<button type="button" class="by-go" id="byLai">🦋 Chơi lại <kbd>Enter</kbd></button>' +
        '</div>' +
      '</div>';
    $all('.by-ds-doc').forEach(function (b) {
      b.addEventListener('click', function () { var r = S.kq[+b.getAttribute('data-i')]; if (r) docTrung(r.a); });
    });
    $('#byVeSanh').addEventListener('click', veSanh);
    $('#byXong').addEventListener('click', dong);
    $('#byLai').addEventListener('click', batDau);
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
      if (!document.fullscreenElement) dong();
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
    var nut = e.target && e.target.tagName === 'BUTTON' && !e.target.disabled && root.contains(e.target) ? e.target : null;
    if (space || enter) e.preventDefault();
    if (k === 'f') { toanManHinh(); return; }
    if (k === 'm') { $('#bySound').click(); return; }
    switch (S.pha) {
      case 'sanh':
      case 'trong':
        if (enter && S.pha === 'sanh') batDau();
        else if (nut && (space || enter)) nut.click();
        break;
      case 'choi':
        if (e.key === 'Backspace' || k === 'z') { e.preventDefault(); hoanTac(); }
        else if (k === 'h') goiY();
        else if (nut && (space || enter)) nut.click();
        break;
      case 'xong':
        if (k === 's') docTrung(S.c && S.c.a);
        else if (nut && (space || enter) && !nut.classList.contains('by-tu')) nut.click();
        else if (space || enter || phai) tiepCau();
        break;
      case 'cuoi':
        if (enter && !nut) batDau();
        else if (nut && (space || enter)) nut.click();
        break;
    }
  }

  function hopLeCau(q) {
    if (!q || !Array.isArray(q.words)) return false;
    var tu = 0, n = 0;
    q.words.forEach(function (w) { var t = norm(w); if (!t) return; n++; if (!laDau(t)) tu++; });
    return tu >= 2 && n <= TOI_DA_TU;
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    var p = docLS(PREF_KEY, {});
    S.goc = (opt.cau || []).filter(hopLeCau);
    S.nhan = opt.nhan || '';
    S.sound = p.sound !== false;
    S.soCau = soCauHop(p.soCau) ? p.soCau : '8';
    S.toc = TOC[p.toc] ? p.toc : 'vua';
    S.nhieu = p.nhieu === 1 || p.nhieu === 2 ? p.nhieu : 0;
    var to = Array.isArray(opt.to) ? opt.to.filter(function (x) { return x && String(x).trim(); }).slice(0, 4) : [];
    if (to.length >= 2) {
      S.soTo = to.length;
      S.ten = to.map(function (x) { return String(x).trim(); });
    } else {
      S.soTo = p.soTo >= 1 && p.soTo <= 4 ? p.soTo : 1;
      S.ten = Array.isArray(p.ten) ? p.ten.slice(0, 4) : [];
    }
    root.hidden = false;
    document.documentElement.classList.add('by-open');
    veNut();
    veSanh();
    var b = $('#byBatDau');
    if (b) b.focus();
  }
  function soCauHop(v) { return v === '5' || v === '8' || v === '10' || v === 'het'; }

  function dong() {
    if (!root) return;
    S.van++;
    dungLap();
    clearInterval(S.dongHo);
    S.pha = 'sanh';
    S.bay = [];
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    root.hidden = true;
    $('#byMan').innerHTML = '';
    document.documentElement.classList.remove('by-open');
  }

  window.LopBay = { mo: mo, dong: dong };
})();
