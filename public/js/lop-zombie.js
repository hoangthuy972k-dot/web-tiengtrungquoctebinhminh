/* Chan Zombie — tro choi man chieu o Che do lop hoc.
   Moi cau hoi: 2-4 zombie (moi con mot dap an A-D) lu du tu ben phai di sang
   hang rao ben trai. Ca lop hô dap an, co bam (hoac go A/B/C/D) de ban con dung.
   Ban dung = thang vong (+diem cho to dang toi luot); ban sai = zombie "phui bui"
   roi di nhanh hon; con dung cham hang rao thi rao mat 1 tim (co 3 tim).
   Mo bang window.LopZombie.mo({ cau, nhan, to }).
   Hoat hinh vui, khong ghe ron: zombie xanh la ngo ngo, trung dan thi nga ra va
   bien thanh sao.                                                             */
(function () {
  'use strict';

  var PREF_KEY = 'hyv_zombie_pref';
  var CHU = ['A', 'B', 'C', 'D'];
  var MAU_TO = ['#e0573f', '#3f88c5', '#4f9d69', '#e8a33d'];
  var MAU_AO = ['#e0574f', '#3a7bd5', '#e0a526', '#9b5bd0'];
  var TOC = { cham: 26, vua: 17, nhanh: 11 };   // so giay de di het san
  var TOC_TEN = { cham: '🐢 Chậm', vua: '🚶 Vừa', nhanh: '🏃 Nhanh' };
  var HP = 3;
  var NHANH_HON = 1.4;                            // ban sai: zombie di nhanh hon

  var S = {
    built: false, goc: [], nhan: '', soTo: 2, ten: [], toc: 'vua', soCau: 10, sound: true,
    cau: [], i: 0, diem: [], luot: 0, hp: HP, chan: 0, daChoi: 0, saiLan: 0,
    pha: 'sanh', zb: [], raf: 0, tLast: 0, dung: false, khoa: false, van: 0, lanSung: -1
  };
  var K = null;   // kich thuoc san dang dung
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
    // Hen gio gan voi van choi hien tai: dong / choi lai thi bo qua
    var ve = S.van;
    return setTimeout(function () { if (ve === S.van && root && !root.hidden) fn(); }, ms);
  }
  function tenTo(i) { return S.ten[i] || ('Tổ ' + (i + 1)); }

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
  // Tieng xi (nhieu trang) qua bo loc — dung cho tieng sung, tieng rao nut
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
  function sndBan() { noise(0.12, 0.35, 0, 1800, 0.6); tone(900, 0.1, 'square', 0.06, 0, 140); }
  function sndTrung() { noise(0.25, 0.25, 0, 500, 0.7); tone(523, 0.12, 'triangle', 0.18, 0.08); tone(784, 0.14, 'triangle', 0.18, 0.18); tone(1047, 0.28, 'triangle', 0.18, 0.28); }
  function sndBoing() { tone(180, 0.18, 'sine', 0.22, 0, 520); tone(520, 0.3, 'sine', 0.18, 0.16, 160); }
  function sndGru() { tone(120, 0.9, 'sawtooth', 0.035, 0, 82); tone(126, 0.9, 'sawtooth', 0.03, 0.05, 88); }
  function sndNut() { noise(0.4, 0.4, 0, 260, 0.6); tone(140, 0.35, 'square', 0.08, 0, 55); noise(0.18, 0.2, 0.12, 900, 1.5); }
  function sndDap() { noise(0.08, 0.15, 0, 300, 1); }
  function sndSai() { tone(220, 0.25, 'square', 0.07, 0, 150); }
  function sndKen() { [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.16, i * 0.11); }); tone(1047, 0.6, 'triangle', 0.14, 0.6); tone(1319, 0.6, 'triangle', 0.12, 0.6); tone(1568, 0.7, 'triangle', 0.12, 0.6); }
  function sndBuon() { tone(392, 0.3, 'triangle', 0.14); tone(330, 0.3, 'triangle', 0.14, 0.3); tone(262, 0.6, 'triangle', 0.14, 0.6); }

  /* ---------------- hinh ve ---------------- */
  function sao() {
    var s = [];
    for (var i = 0; i < 80; i++) {
      var x = Math.round(Math.random() * 2400), y = Math.round(Math.random() * 520);
      var a = (0.3 + Math.random() * 0.6).toFixed(2);
      s.push(x + 'px ' + y + 'px 0 ' + (Math.random() < 0.15 ? '1px' : '0') + ' rgba(230,255,220,' + a + ')');
    }
    return s.join(',');
  }

  // Bong nghia trang phia xa: doi, cay kho, bia mo tron, ngoi nha co cua so sang
  var XA_SVG =
    '<svg viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
      '<path fill="#1b2a2c" d="M0 220V120Q150 70 320 112T640 100T960 92T1200 110V220z"/>' +
      '<path fill="#16211f" d="M820 112V64l46-34 46 34v48z"/>' +
      '<path fill="#16211f" d="M806 68l60-48 60 48z"/>' +
      '<rect x="852" y="72" width="16" height="16" fill="#f5d76e" opacity=".85"/>' +
      '<rect x="880" y="78" width="12" height="12" fill="#f5d76e" opacity=".6"/>' +
      '<path fill="none" stroke="#16211f" stroke-width="7" stroke-linecap="round" d="M190 120V52M190 80l-26-22M190 66l24-24M214 42l12 4M164 58l-10-12"/>' +
      '<path fill="none" stroke="#16211f" stroke-width="6" stroke-linecap="round" d="M1060 112V60M1060 84l22-18M1060 72l-20-20M1082 66l10-10"/>' +
      '<g fill="#22302f">' +
        '<path d="M300 130v-30a14 14 0 0 1 28 0v30z"/><path d="M350 128v-22a11 11 0 0 1 22 0v22z"/>' +
        '<path d="M470 126v-28a14 14 0 0 1 28 0v28z"/><path d="M560 124v-20a10 10 0 0 1 20 0v20z"/>' +
        '<path d="M660 122v-26a13 13 0 0 1 26 0v26z"/><path d="M990 120v-22a11 11 0 0 1 22 0v22z"/>' +
        '<path d="M60 136v-24a12 12 0 0 1 24 0v24z"/><path d="M1120 126v-28a14 14 0 0 1 28 0v28z"/>' +
      '</g>' +
    '</svg>';

  // Zombie xanh ngo ngo, quay mat sang trai (huong di)
  var ZOMBIE_SVG =
    '<svg viewBox="0 0 100 130" aria-hidden="true">' +
      '<ellipse cx="50" cy="125" rx="30" ry="4.5" fill="#000" opacity=".28"/>' +
      '<g class="zb-chan zb-c1"><rect x="38" y="88" width="11" height="31" rx="5" fill="#4a5a7a"/><ellipse cx="40" cy="121" rx="10" ry="5" fill="#3a2f2a"/></g>' +
      '<g class="zb-chan zb-c2"><rect x="53" y="88" width="11" height="31" rx="5" fill="#3f4e6c"/><ellipse cx="55" cy="121" rx="10" ry="5" fill="#3a2f2a"/></g>' +
      '<path class="zb-ao" d="M30 62Q50 54 72 62L76 96L68 92L62 98L55 92L48 98L40 92L31 97z"/>' +
      '<path d="M44 70l4 6M58 74l-3 6" stroke="#000" stroke-opacity=".25" stroke-width="2"/>' +
      '<g class="zb-tay"><path d="M40 66L10 62" stroke="#7cc35a" stroke-width="9" stroke-linecap="round"/><circle cx="9" cy="62" r="6" fill="#8fd16a"/>' +
        '<path d="M48 74L16 74" stroke="#6fb44f" stroke-width="9" stroke-linecap="round"/><circle cx="15" cy="74" r="6" fill="#7cc35a"/></g>' +
      '<path d="M70 70L84 78" stroke="#6fb44f" stroke-width="8" stroke-linecap="round"/>' +
      '<circle cx="50" cy="35" r="27" fill="#8fd16a" stroke="#4f8a3a" stroke-width="2.5"/>' +
      '<path d="M48 9q4-10 12-6q-6 2-6 8M56 10q8-6 12 0" fill="none" stroke="#3e5a2e" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M60 18l12 8M63 16l-2 5M67 19l-2 5M71 22l-2 5" stroke="#4f8a3a" stroke-width="2" stroke-linecap="round"/>' +
      '<circle cx="37" cy="31" r="9" fill="#fff" stroke="#4f8a3a" stroke-width="1.5"/><circle cx="34" cy="32" r="3.6" fill="#222"/>' +
      '<circle cx="56" cy="29" r="5.5" fill="#fff" stroke="#4f8a3a" stroke-width="1.5"/><circle cx="54" cy="30" r="2.3" fill="#222"/>' +
      '<circle cx="62" cy="44" r="5" fill="#ff9aa2" opacity=".55"/>' +
      '<path d="M28 47Q40 55 53 46" fill="none" stroke="#2f4a22" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="39" y="49" width="6" height="6" rx="1.5" fill="#fff" stroke="#2f4a22" stroke-width="1"/>' +
    '</svg>';

  // Sung bong nuoc hoat hinh (ben trai, sau hang rao)
  var SUNG_SVG =
    '<svg viewBox="0 0 90 60" aria-hidden="true">' +
      '<rect x="40" y="18" width="42" height="16" rx="7" fill="#3f88c5" stroke="#1f4f7a" stroke-width="3"/>' +
      '<rect x="76" y="15" width="10" height="22" rx="4" fill="#ffcf6b" stroke="#a8742a" stroke-width="2.5"/>' +
      '<circle cx="34" cy="28" r="22" fill="#5aa8e0" stroke="#1f4f7a" stroke-width="3"/>' +
      '<circle cx="28" cy="22" r="6" fill="#fff" opacity=".55"/>' +
      '<circle cx="22" cy="50" r="9" fill="#ffcf6b" stroke="#a8742a" stroke-width="2.5"/>' +
      '<circle cx="46" cy="50" r="9" fill="#ffcf6b" stroke="#a8742a" stroke-width="2.5"/>' +
    '</svg>';

  // Mot doan hang rao go cho moi lan; vet nut hien dan theo so tim mat
  var RAO_SVG =
    '<svg viewBox="0 0 40 70" preserveAspectRatio="none" aria-hidden="true">' +
      '<g fill="#b98a55" stroke="#6b4a2a" stroke-width="2">' +
        '<path d="M3 70V14l5-8 5 8v56z"/><path d="M16 70V10l5-8 5 8v60z"/><path d="M29 70V14l5-8 5 8v56z"/>' +
      '</g>' +
      '<rect x="0" y="24" width="40" height="7" fill="#a47645" stroke="#6b4a2a" stroke-width="2"/>' +
      '<rect x="0" y="50" width="40" height="7" fill="#a47645" stroke="#6b4a2a" stroke-width="2"/>' +
      '<path class="zb-vet zb-vet1" d="M21 12l-3 10 4 6-3 9" fill="none" stroke="#3a2412" stroke-width="2"/>' +
      '<path class="zb-vet zb-vet2" d="M8 40l-4 8 4 6-3 8M33 30l3 9-4 7 3 10" fill="none" stroke="#3a2412" stroke-width="2"/>' +
    '</svg>';

  /* ---------------- dung khung ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopZombie';
    root.className = 'zb';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Chặn Zombie');
    root.innerHTML =
      '<div class="zb-troi" aria-hidden="true"><span class="zb-sao"></span><span class="zb-trang"></span></div>' +
      '<header class="zb-bar">' +
        '<b class="zb-title">🧟 Chặn Zombie</b>' +
        '<span class="zb-sub" id="zbSub"></span>' +
        '<span class="zb-diem" id="zbDiem"></span>' +
        '<span class="zb-bar-gap"></span>' +
        '<span class="zb-tim" id="zbTim" aria-label="Hàng rào"></span>' +
        '<button type="button" class="zb-btn zb-ic" id="zbDung" title="Tạm dừng (P)" hidden>⏸</button>' +
        '<button type="button" class="zb-btn zb-ic" id="zbSound"></button>' +
        '<button type="button" class="zb-btn zb-ic" id="zbFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="zb-btn" id="zbClose">✕ Đóng</button>' +
      '</header>' +
      '<main class="zb-man" id="zbMan"></main>';
    document.body.appendChild(root);
    $('.zb-sao').style.boxShadow = sao();

    $('#zbSound').addEventListener('click', function () { S.sound = !S.sound; luuPref(); veNut(); if (S.sound) tone(880, 0.12, 'triangle', 0.15); });
    $('#zbFull').addEventListener('click', toanManHinh);
    $('#zbClose').addEventListener('click', dong);
    $('#zbDung').addEventListener('click', function () { tamDung(); });
    window.addEventListener('keydown', phim, true);
    window.addEventListener('keyup', phimNha, true);
    window.addEventListener('resize', function () { if (root && !root.hidden && (S.pha === 'choi' || S.pha === 'kq')) doKich(); });
    S.built = true;
  }

  function veNut() {
    var s = $('#zbSound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng — bấm để tắt (M)' : 'Đang tắt tiếng — bấm để bật (M)';
    s.classList.toggle('is-off', !S.sound);
    var d = $('#zbDung');
    d.hidden = S.pha !== 'choi';
    d.textContent = S.dung ? '▶' : '⏸';
    d.title = S.dung ? 'Chơi tiếp (P / Space)' : 'Tạm dừng (P / Space)';
  }

  function luuPref() { ghiLS(PREF_KEY, { soTo: S.soTo, ten: S.ten, toc: S.toc, soCau: S.soCau, sound: S.sound }); }

  function veDiem() {
    var tim = '';
    for (var i = 0; i < HP; i++) tim += '<span class="' + (i < S.hp ? '' : 'is-mat') + '">' + (i < S.hp ? '❤️' : '🖤') + '</span>';
    $('#zbTim').innerHTML = S.pha === 'sanh' || S.pha === 'trong' ? '' : tim;
    $('#zbTim').title = 'Hàng rào còn ' + S.hp + ' / ' + HP + ' tim';
    var box = $('#zbDiem');
    if (S.pha === 'sanh' || S.pha === 'trong') { box.innerHTML = ''; return; }
    if (!S.soTo) {
      box.innerHTML = '<span class="zb-chip"><b>⭐ ' + S.diem[0] + '</b> điểm</span>';
      return;
    }
    var html = '';
    for (var t = 0; t < S.soTo; t++) {
      html += '<span class="zb-chip' + (t === S.luot && S.pha !== 'het' ? ' is-luot' : '') + '" style="--c:' + MAU_TO[t] + '">' +
        '<i></i>' + esc(tenTo(t)) + ' <b>' + S.diem[t] + '</b></span>';
    }
    box.innerHTML = html;
  }

  /* ---------------- sanh ---------------- */
  function chipNut(k, v, nhan, on) {
    return '<button type="button" class="zb-opt' + (on ? ' is-on' : '') + '" data-k="' + k + '" data-v="' + v + '">' + nhan + '</button>';
  }
  function veSanh() {
    if (window.NhacNen) window.NhacNen.tat();
    S.pha = 'sanh';
    S.van++;
    dungVong();
    veNut();
    veDiem();
    $('#zbSub').textContent = S.nhan ? S.nhan + ' · ' + S.goc.length + ' câu' : S.goc.length + ' câu';
    if (!S.goc.length) {
      S.pha = 'trong';
      $('#zbSub').textContent = '';
      $('#zbMan').innerHTML =
        '<div class="zb-the zb-trong">' +
          '<div class="zb-trong-hinh" aria-hidden="true">' + ZOMBIE_SVG + '</div>' +
          '<h2>Chưa có câu hỏi nào để chặn zombie!</h2>' +
          '<p>Hãy chọn bài muốn ôn ở màn chuẩn bị (tích vào các bài), rồi mở lại trò chơi nhé.</p>' +
          '<div class="zb-nut"><button type="button" class="zb-go" id="zbVe">← Về chọn bài</button></div>' +
        '</div>';
      $('#zbVe').addEventListener('click', dong);
      return;
    }
    var soCau = [5, 10, 15, 20].filter(function (n) { return n < S.goc.length; });
    var tatCa = !soCau.length || !S.soCau || S.soCau >= S.goc.length || soCau.indexOf(S.soCau) < 0;
    var ten = '';
    for (var i = 0; i < 4; i++) {
      ten += '<label class="zb-ten-to" style="--c:' + MAU_TO[i] + '"' + (i < S.soTo ? '' : ' hidden') + '><i></i>' +
        '<input type="text" maxlength="24" data-i="' + i + '" value="' + esc(tenTo(i)) + '" aria-label="Tên đội ' + (i + 1) + '"></label>';
    }
    $('#zbMan').innerHTML =
      '<div class="zb-the zb-sanh">' +
        '<div class="zb-sanh-dau">' +
          '<div class="zb-sanh-hinh" aria-hidden="true">' + ZOMBIE_SVG + '</div>' +
          '<div><h2>Chặn Zombie</h2>' +
          '<p class="zb-luat">Mỗi zombie cầm một đáp án. Cả lớp hô đáp án đúng — cô bấm vào zombie đó (hoặc gõ <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd>) để bắn. ' +
          'Bắn nhầm, zombie càng đi nhanh! Để zombie đúng chạm hàng rào thì mất 1 ❤️ — hết 3 ❤️ là thua.</p></div>' +
        '</div>' +
        '<div class="zb-hang"><span class="zb-nhan">Chia đội</span><div class="zb-chon">' +
          chipNut('to', 0, '👥 Cả lớp', S.soTo === 0) + chipNut('to', 2, '2 đội', S.soTo === 2) +
          chipNut('to', 3, '3 đội', S.soTo === 3) + chipNut('to', 4, '4 đội', S.soTo === 4) +
        '</div></div>' +
        '<div class="zb-hang zb-hang-ten" id="zbTenTo"' + (S.soTo ? '' : ' hidden') + '><span class="zb-nhan">Tên đội</span><div class="zb-chon">' + ten + '</div></div>' +
        '<div class="zb-hang"><span class="zb-nhan">Tốc độ</span><div class="zb-chon">' +
          chipNut('toc', 'cham', TOC_TEN.cham, S.toc === 'cham') + chipNut('toc', 'vua', TOC_TEN.vua, S.toc === 'vua') + chipNut('toc', 'nhanh', TOC_TEN.nhanh, S.toc === 'nhanh') +
        '</div></div>' +
        '<div class="zb-hang"><span class="zb-nhan">Số câu</span><div class="zb-chon">' +
          soCau.map(function (n) { return chipNut('cau', n, n + ' câu', !tatCa && S.soCau === n); }).join('') +
          chipNut('cau', 0, 'Tất cả ' + S.goc.length, tatCa) +
        '</div></div>' +
        '<div class="zb-nut"><button type="button" class="zb-go" id="zbBatDau">▶ Bắt đầu <kbd>Enter</kbd></button></div>' +
      '</div>';
    $all('.zb-opt').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-k'), v = b.getAttribute('data-v');
        if (k === 'to') {
          S.soTo = +v;
          $('#zbTenTo').hidden = !S.soTo;
          $all('.zb-ten-to').forEach(function (l, i) { l.hidden = i >= S.soTo; });
        } else if (k === 'toc') S.toc = v;
        else if (k === 'cau') S.soCau = +v;
        $all('.zb-opt[data-k="' + k + '"]').forEach(function (x) { x.classList.toggle('is-on', x === b); });
        luuPref();
      });
    });
    $all('.zb-ten-to input').forEach(function (inp) {
      inp.addEventListener('input', function () {
        S.ten[+inp.getAttribute('data-i')] = inp.value.trim();
        luuPref();
      });
    });
    $('#zbBatDau').addEventListener('click', batDau);
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

  function batDau() {
    var n = S.soCau && S.soCau < S.goc.length ? S.soCau : S.goc.length;
    S.cau = tron(S.goc).slice(0, n).map(chuanBi);
    S.i = 0;
    S.hp = HP;
    S.chan = 0;
    S.daChoi = 0;
    S.luot = 0;
    S.diem = [0, 0, 0, 0];
    S.dung = false;
    root.classList.remove('is-dung');
    $('#zbMan').innerHTML =
      '<div class="zb-choi">' +
        '<div class="zb-hoi" id="zbHoi"></div>' +
        '<div class="zb-san" id="zbSan">' +
          '<div class="zb-xa" aria-hidden="true">' + XA_SVG + '</div>' +
          '<div class="zb-suong" aria-hidden="true"></div>' +
          '<div class="zb-lan" id="zbLan"></div>' +
          '<button type="button" class="zb-dung-man" id="zbDungMan" hidden>⏸ Tạm dừng<small>Bấm hoặc nhấn Space để chơi tiếp</small></button>' +
          '<div class="zb-kq" id="zbKq" hidden></div>' +
        '</div>' +
      '</div>';
    $('#zbDungMan').addEventListener('click', function () { tamDung(false); });
    $('#zbLan').addEventListener('click', function (e) {
      var b = e.target.closest('.zb-z');
      if (b) ban(+b.getAttribute('data-i'));
    });
    batDauCau();
    if (window.NhacNen) window.NhacNen.bat({ kieu: 'gap' });
  }

  function cauHtml(c, hien) {
    var dap = '<span class="zb-o' + (hien ? ' is-hien' : '') + '">' + (hien ? esc(c.opts[c.dung]) : '＿＿') + '</span>';
    if (c.noBlank) return esc(c.pre) + esc(c.post) + (hien ? ' <span class="zb-mui">→</span> ' + dap : '');
    return esc(c.pre) + dap + esc(c.post);
  }

  function veHoi(hien) {
    var c = S.cau[S.i];
    $('#zbHoi').innerHTML =
      '<div class="zb-hoi-dau">' +
        '<span class="zb-hoi-so">Câu ' + (S.i + 1) + ' / ' + S.cau.length + '</span>' +
        (S.soTo ? '<span class="zb-hoi-luot" style="--c:' + MAU_TO[S.luot] + '">🔫 Lượt: <b>' + esc(tenTo(S.luot)) + '</b></span>' : '') +
      '</div>' +
      (c.ctx ? '<div class="zb-hoi-ctx">🗣️ ' + esc(c.ctx) + '</div>' : '') +
      '<div class="zb-hoi-cau" lang="zh">' + cauHtml(c, hien) + '</div>';
  }

  function batDauCau() {
    S.van++;
    S.pha = 'choi';
    S.saiLan = 0;
    S.khoa = false;
    S.dung = false;
    S.lanSung = -1;
    root.classList.remove('is-dung');
    $('#zbDungMan').hidden = true;
    $('#zbKq').hidden = true;
    var c = S.cau[S.i];
    veHoi(false);
    veDiem();
    veNut();
    var lan = $('#zbLan');
    var n = c.opts.length;
    var html = '';
    for (var l = 0; l < n; l++) {
      html += '<div class="zb-lane" style="top:' + (l * 100 / n) + '%;height:' + (100 / n) + '%"><span class="zb-rao" data-hp="' + S.hp + '">' + RAO_SVG + '</span></div>';
    }
    html += '<div class="zb-sung" id="zbSung"><span class="zb-lua"></span>' + SUNG_SVG + '</div><span class="zb-dan" id="zbDan"></span>';
    var nhanh = 1 / TOC[S.toc];
    // Xuat phat le nhau (ngay tu dau da thay du bien) de thu tu toi rao khong lo dap an
    var xp = tron([0, -0.07, -0.14, -0.21]).slice(0, n);
    c.opts.forEach(function (o, i) {
      html += '<button type="button" class="zb-z" data-i="' + i + '" style="--ao:' + MAU_AO[i] + ';--tre:-' + (Math.random() * 0.9).toFixed(2) + 's" aria-label="' + CHU[i] + ': ' + esc(o) + '">' +
        '<span class="zb-than">' + ZOMBIE_SVG + '</span>' +
        '<span class="zb-bien"><b>' + CHU[i] + '</b><span class="zb-bien-chu" lang="zh">' + esc(o) + '</span></span>' +
        '<span class="zb-noi" aria-hidden="true"></span>' +
      '</button>';
    });
    lan.innerHTML = html;
    S.zb = c.opts.map(function (o, i) {
      return {
        i: i, dung: i === c.dung, el: lan.querySelector('.zb-z[data-i="' + i + '"]'),
        d: 1 + xp[i], v: nhanh * (0.94 + Math.random() * 0.12), w: 0,
        chet: false, toi: false, sai: false, chay: false
      };
    });
    doKich();
    sndGru();
    S.tLast = 0;
    if (!S.raf) S.raf = requestAnimationFrame(vong);
  }

  // Do kich thuoc san, dat lai co zombie / rao / sung
  function doKich() {
    var lan = $('#zbLan');
    if (!lan || !S.zb.length) return;
    var W = lan.clientWidth, H = lan.clientHeight, n = S.zb.length;
    var lh = H / n;
    var tw = Math.max(46, Math.min(lh * 0.62, 96, W * 0.09));
    var fx = tw + 6, fw = Math.max(20, Math.min(tw * 0.5, 44));
    var zh = Math.max(60, Math.min(lh * 1.12, 320));
    var fs = Math.max(20, Math.min(lh * 0.36, 72));
    K = { W: W, H: H, n: n, lh: lh, tw: tw, ray: fx + fw, zh: zh };
    lan.style.setProperty('--tw', tw + 'px');
    lan.style.setProperty('--fx', fx + 'px');
    lan.style.setProperty('--fw', fw + 'px');
    lan.style.setProperty('--zh', zh + 'px');
    lan.style.setProperty('--fs', fs + 'px');
    S.zb.forEach(function (z) { z.w = z.el.offsetWidth; datViTri(z); });
    if (S.lanSung >= 0) datSung(S.lanSung, true);
    else datSung(Math.floor((n - 1) / 2), true);
  }
  function viTriX(z) { return K.ray + z.d * Math.max(60, K.W - K.ray - z.w - 8); }
  function datViTri(z) {
    if (!K) return;
    var y = (z.i + 1) * K.lh - K.zh;
    z.el.style.transform = 'translate(' + Math.round(viTriX(z)) + 'px,' + Math.round(y) + 'px)';
  }
  function datSung(lane, ngay) {
    var s = $('#zbSung');
    if (!s || !K) return;
    S.lanSung = lane;
    var y = (lane + 0.62) * K.lh - K.tw * 0.36;
    s.style.transition = ngay || giamChuyenDong() ? 'none' : '';
    s.style.transform = 'translateY(' + Math.round(y) + 'px)';
  }

  function vong(t) {
    S.raf = 0;
    if (!root || root.hidden || (S.pha !== 'choi' && S.pha !== 'kq')) return;
    var dt = S.tLast ? Math.min(0.1, (t - S.tLast) / 1000) : 0;
    S.tLast = t;
    if (!S.dung && K) {
      S.zb.forEach(function (z) {
        if (z.chet) return;
        if (z.chay) {
          z.d += dt * 0.55;
          datViTri(z);
          return;
        }
        if (z.toi || S.pha !== 'choi') return;
        z.d -= dt * z.v;
        if (z.d <= 0) { z.d = 0; toiRao(z); }
        datViTri(z);
      });
    }
    S.raf = requestAnimationFrame(vong);
  }
  function dungVong() { if (S.raf) cancelAnimationFrame(S.raf); S.raf = 0; }

  function tamDung(muon) {
    if (S.pha !== 'choi') return;
    S.dung = muon == null ? !S.dung : !!muon;
    root.classList.toggle('is-dung', S.dung);
    $('#zbDungMan').hidden = !S.dung;
    S.tLast = 0;
    veNut();
  }

  function toiRao(z) {
    z.toi = true;
    z.el.classList.add('is-dap');
    if (z.dung) thua(z);
    else sndDap();
  }

  /* ---------------- ban ---------------- */
  function ban(i) {
    if (S.pha !== 'choi' || S.dung || S.khoa) return;
    var z = S.zb[i];
    if (!z || z.chet) return;
    S.khoa = true;
    var giam = giamChuyenDong();
    datSung(i);
    sau(giam ? 0 : 150, function () {
      var sung = $('#zbSung');
      sndBan();
      sung.classList.remove('is-ban');
      void sung.offsetWidth;
      sung.classList.add('is-ban');
      bayDan(z, giam, function () {
        S.khoa = false;
        if (S.pha !== 'choi') return;
        if (z.dung) trung(z); else hut(z);
      });
    });
  }

  function bayDan(z, giam, xong) {
    var dan = $('#zbDan');
    var x0 = K.tw * 0.95, y0 = (z.i + 0.62) * K.lh - K.tw * 0.36 + K.tw * 0.3;
    var x1 = viTriX(z) + K.zh * 0.3, y1 = (z.i + 1) * K.lh - K.zh * 0.52;
    if (giam) { xong(); return; }
    dan.style.transition = 'none';
    dan.style.opacity = '1';
    dan.style.transform = 'translate(' + Math.round(x0) + 'px,' + Math.round(y0) + 'px)';
    void dan.offsetWidth;
    var ms = Math.max(120, Math.min(260, (x1 - x0) / 5));
    dan.style.transition = 'transform ' + ms + 'ms linear';
    dan.style.transform = 'translate(' + Math.round(x1) + 'px,' + Math.round(y1) + 'px)';
    sau(ms, function () {
      dan.style.transition = 'none';
      dan.style.opacity = '0';
      no(x1, y1, z.dung);
      xong();
    });
  }

  // Tia no hoat hinh "BỐP!" tai cho trung dan
  function no(x, y, dung) {
    var lan = $('#zbLan');
    if (!lan) return;
    var b = document.createElement('span');
    b.className = 'zb-bop' + (dung ? ' is-dung' : '');
    b.textContent = dung ? 'BỐP!' : 'bụp';
    b.style.left = Math.round(x) + 'px';
    b.style.top = Math.round(y) + 'px';
    lan.appendChild(b);
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 900);
  }

  function noi(z, chu) {
    var n = z.el.querySelector('.zb-noi');
    n.textContent = chu;
    z.el.classList.remove('is-noi');
    void z.el.offsetWidth;
    z.el.classList.add('is-noi');
  }

  function hut(z) {
    S.saiLan++;
    z.sai = true;
    z.v *= NHANH_HON;
    z.el.classList.add('is-sai');
    z.el.classList.remove('is-lac');
    void z.el.offsetWidth;
    z.el.classList.add('is-lac');
    noi(z, ['Hông đau! 😜', 'Nhột quá! 🤪', 'Sai rồi nha! 😝', 'Hihi, trượt! 🙃'][Math.floor(Math.random() * 4)]);
    sndBoing();
    sau(300, sndSai);
  }

  function trung(z) {
    S.pha = 'kq';
    z.chet = true;
    z.el.classList.add('is-trung');
    sndTrung();
    var cong = S.saiLan ? 5 : 10;
    S.diem[S.soTo ? S.luot : 0] += cong;
    S.chan++;
    S.daChoi++;
    // Cac zombie con lai so qua chay mat
    S.zb.forEach(function (o) {
      if (o === z) return;
      o.chay = true; o.toi = false;
      o.el.classList.remove('is-dap');
      o.el.classList.add('is-chay');
    });
    veHoi(true);
    veNut();
    veDiem();
    sau(giamChuyenDong() ? 200 : 1000, function () { veKq(true, cong); });
  }

  function thua(z) {
    S.pha = 'kq';
    S.hp = Math.max(0, S.hp - 1);
    S.daChoi++;
    sndNut();
    $all('.zb-rao').forEach(function (r) { r.setAttribute('data-hp', S.hp); });
    var lan = $('#zbLan');
    lan.classList.remove('is-rung');
    void lan.offsetWidth;
    lan.classList.add('is-rung');
    z.el.classList.add('is-lo');
    noi(z, 'Hé hé! 😈');
    S.zb.forEach(function (o) {
      if (o === z) return;
      o.chay = true; o.toi = false;
      o.el.classList.remove('is-dap');
      o.el.classList.add('is-chay');
    });
    veHoi(true);
    veNut();
    veDiem();
    sau(giamChuyenDong() ? 200 : 1200, function () { veKq(false, 0); });
  }

  function veKq(thang, cong) {
    var c = S.cau[S.i];
    var het = S.hp <= 0 || S.i + 1 >= S.cau.length;
    var dau;
    if (thang) {
      dau = '🎯 Chính xác!' + (S.soTo ? ' <span class="zb-kq-to" style="--c:' + MAU_TO[S.luot] + '">' + esc(tenTo(S.luot)) + ' +' + cong + '</span>' : ' <span class="zb-kq-to">+' + cong + '</span>') +
        (S.saiLan ? '<small>Bắn nhầm ' + S.saiLan + ' lần nên chỉ được nửa điểm</small>' : '');
    } else {
      dau = '💥 Zombie đã chạm hàng rào! <span class="zb-kq-to is-tim">−1 ❤️</span>' +
        (S.hp <= 0 ? '<small>Hàng rào thủng rồi…</small>' : '<small>Hàng rào còn ' + S.hp + ' ❤️</small>');
    }
    var kq = $('#zbKq');
    kq.className = 'zb-kq ' + (thang ? 'is-thang' : 'is-thua');
    kq.innerHTML =
      '<div class="zb-kq-the">' +
        '<p class="zb-kq-dau">' + dau + '</p>' +
        '<div class="zb-kq-cau" lang="zh">' + cauHtml(c, true) + '</div>' +
        '<p class="zb-kq-da">Đáp án <b>' + CHU[c.dung] + '</b> · <span lang="zh">' + esc(c.opts[c.dung]) + '</span></p>' +
        (c.why ? '<p class="zb-kq-why">💡 ' + esc(c.why) + '</p>' : '') +
        '<div class="zb-nut"><button type="button" class="zb-go" id="zbTiep">' + (het ? 'Xem kết quả 🏁' : 'Câu tiếp →') + ' <kbd>Space</kbd></button></div>' +
      '</div>';
    kq.hidden = false;
    $('#zbTiep').addEventListener('click', tiep);
    if (!thang) sndBuon();
  }

  function tiep() {
    if (S.pha !== 'kq' || $('#zbKq').hidden) return;
    if (S.soTo) S.luot = (S.luot + 1) % S.soTo;
    if (S.hp <= 0 || S.i + 1 >= S.cau.length) { ketThuc(); return; }
    S.i++;
    batDauCau();
  }

  /* ---------------- tong ket ---------------- */
  function ketThuc() {
    if (window.NhacNen) window.NhacNen.tat();
    S.van++;
    S.pha = 'het';
    dungVong();
    veNut();
    veDiem();
    var thua = S.hp <= 0;
    var bang = '';
    if (S.soTo) {
      var ds = [];
      for (var t = 0; t < S.soTo; t++) ds.push({ t: t, d: S.diem[t] });
      ds.sort(function (a, b) { return b.d - a.d || a.t - b.t; });
      var huy = ['🥇', '🥈', '🥉', '4'];
      var hang = 0;
      bang = '<div class="zb-bxh">' + ds.map(function (x, i) {
        if (i > 0 && x.d < ds[i - 1].d) hang = i;
        return '<div class="zb-bxh-r' + (hang === 0 ? ' is-nhat' : '') + '" style="--c:' + MAU_TO[x.t] + '">' +
          '<span class="zb-bxh-h">' + huy[hang] + '</span><span class="zb-bxh-ten"><i></i>' + esc(tenTo(x.t)) + '</span><b>' + x.d + '</b></div>';
      }).join('') + '</div>';
    }
    $('#zbMan').innerHTML =
      '<div class="zb-the zb-het' + (thua ? ' is-thua' : '') + '">' +
        '<h2>' + (thua ? '💔 Hàng rào thủng rồi!' : '🏆 Cả lớp đã giữ vững hàng rào!') + '</h2>' +
        '<div class="zb-het-so">' +
          '<div><b>' + S.chan + '<small>/' + S.daChoi + '</small></b><span>zombie bị chặn</span></div>' +
          '<div><b>' + S.hp + '<small>/' + HP + '</small></b><span>❤️ còn lại</span></div>' +
          (S.soTo ? '' : '<div><b>' + S.diem[0] + '</b><span>⭐ điểm</span></div>') +
        '</div>' +
        (thua && S.daChoi < S.cau.length ? '<p class="zb-het-note">Còn ' + (S.cau.length - S.daChoi) + ' câu chưa chơi — thử lại nhé!</p>' : '') +
        bang +
        '<div class="zb-nut">' +
          '<button type="button" class="zb-btn zb-btn-sang" id="zbCaiDat">⚙ Đổi cài đặt</button>' +
          '<button type="button" class="zb-btn zb-btn-sang" id="zbXong">Đóng</button>' +
          '<button type="button" class="zb-go" id="zbLai">↺ Chơi lại <kbd>Enter</kbd></button>' +
        '</div>' +
      '</div>';
    $('#zbCaiDat').addEventListener('click', veSanh);
    $('#zbXong').addEventListener('click', dong);
    $('#zbLai').addEventListener('click', batDau);
    if (thua) sndBuon(); else sndKen();
  }

  /* ---------------- phim tat / mo / dong ---------------- */
  function toanManHinh() {
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* bo qua */ });
  }

  function phimNha(e) {
    // Chan Space "bam" nut dang focus (vd zombie vua click) khi tha phim
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
    // Man zombie dang mo thi phim tat cua tro choi phia sau khong duoc chay
    e.stopImmediatePropagation();
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = (e.key || '').toLowerCase();
    var space = e.code === 'Space', enter = e.key === 'Enter';
    var nut = e.target && e.target.tagName === 'BUTTON' && !e.target.classList.contains('zb-z') ? e.target : null;
    if (space || enter) e.preventDefault();
    if (k === 'f') { toanManHinh(); return; }
    if (k === 'm') { $('#zbSound').click(); return; }
    if (S.pha === 'sanh' || S.pha === 'trong' || S.pha === 'het') {
      // Enter luon la "Bat dau" / "Choi lai"; Space bam nut dang chon
      if (enter && (S.pha === 'sanh' || S.pha === 'het')) batDau();
      else if (nut && (space || enter)) nut.click();
      return;
    }
    if (S.pha === 'choi') {
      var i = 'abcd'.indexOf(k);
      if (i < 0 && e.key >= '1' && e.key <= '4') i = +e.key - 1;
      if (i >= 0 && k.length === 1) { if (S.dung) tamDung(false); ban(i); return; }
      if (space || k === 'p') tamDung();
      return;
    }
    if (S.pha === 'kq' && (space || enter || e.key === 'ArrowRight')) tiep();
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
    S.toc = TOC[p.toc] ? p.toc : 'vua';
    S.soCau = p.soCau != null ? +p.soCau : 10;
    var to = Array.isArray(opt.to) ? opt.to.filter(function (x) { return x && String(x).trim(); }).slice(0, 4) : [];
    if (to.length >= 2) {
      S.soTo = to.length;
      S.ten = to.map(function (x) { return String(x).trim(); });
    } else {
      S.soTo = p.soTo === 0 || (p.soTo >= 2 && p.soTo <= 4) ? p.soTo : 2;
      S.ten = Array.isArray(p.ten) ? p.ten.slice(0, 4) : [];
    }
    root.hidden = false;
    document.documentElement.classList.add('zb-open');
    veSanh();
    var b = $('#zbBatDau');
    if (b) b.focus();
  }
  function dong() {
    if (window.NhacNen) window.NhacNen.tat();
    if (!root) return;
    S.van++;
    dungVong();
    S.pha = 'sanh';
    S.zb = [];
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    root.hidden = true;
    root.classList.remove('is-dung');
    $('#zbMan').innerHTML = '';
    document.documentElement.classList.remove('zb-open');
  }

  window.LopZombie = { mo: mo, dong: dong };
})();
