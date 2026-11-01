/* Goi ten vui — man chieu chon ngau nhien hoc sinh theo 5 kieu:
   vong quay, dua vit, dua bi, ong kinh may man, chia cap / nhom.
   Dung chung hai nguon danh sach voi UFO goi tra bai:
   · lop tren he thong (GET /api/admin/oral, can mat khau quan tri);
   · danh sach nhanh luu tren may (localStorage hyv_ufo_lists).
   Mo bang window.LopGoiTen.mo({ kieu: 'quay'|'vit'|'bi'|'kinh'|'nhom' }). */
(function () {
  'use strict';

  var PW_KEY = 'hyv_admin_pw';
  var LIST_KEY = 'hyv_ufo_lists';
  var PREF_KEY = 'hyv_goiten_pref';
  var MAU = ['#e63946', '#f3722c', '#e9a400', '#43aa8b', '#1f9e9a', '#277da1', '#4361ee', '#7b2cbf', '#c9184a', '#e85d9e', '#3a86ff', '#6a994e'];
  var MAU_NHOM = ['#e63946', '#277da1', '#43aa8b', '#f3722c', '#7b2cbf', '#e85d9e', '#1f9e9a', '#e9a400', '#4361ee', '#6a994e', '#c9184a', '#3a86ff'];
  var KIEU = [
    { id: 'quay', ic: '🎡', ten: 'Vòng quay', mota: 'Quay bánh xe may mắn có tên cả lớp.', nut: 'Quay', phim: 'Q' },
    { id: 'vit', ic: '🦆', ten: 'Đua vịt', mota: 'Vịt cao su bơi thi trên sông — về nhất được gọi.', nut: 'Xuất phát', phim: 'V' },
    { id: 'bi', ic: '🔮', ten: 'Đua bi', mota: 'Bi lăn qua dốc và cọc — viên nào xuống đáy trước thắng.', nut: 'Thả bi', phim: 'B' },
    { id: 'kinh', ic: '🔍', ten: 'Ống kính may mắn', mota: 'Kính lúp lượn trên thẻ tên rồi dừng ở một bạn.', nut: 'Soi', phim: 'K' },
    { id: 'nhom', ic: '👥', ten: 'Chia cặp / nhóm', mota: 'Xáo cả lớp rồi chia bài vào từng nhóm.', nut: 'Chia nhóm', phim: 'N' }
  ];
  var FONT = "'Be Vietnam Pro', system-ui, sans-serif";
  var TAU = Math.PI * 2;

  var S = {
    src: '', classes: [], kids: [], ngan: {}, absent: {}, round: {},
    per: 1, bo: true, kieu: 'quay', sound: true, voice: true,
    nhomKieu: 'cap', nhomN: 4, nhomK: 4, nhomKq: null,
    busy: false, built: false, lan: 0, srcDaNap: ''
  };
  var root;

  function $(sel) { return root.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function giam() { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }
  function kep(v, a, b) { return v < a ? a : v > b ? b : v; }
  function now() { return window.performance && performance.now ? performance.now() : Date.now(); }
  function raf(f) { return window.requestAnimationFrame(f); }
  function tron(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; }
    return b;
  }
  function timKieu(id) { for (var i = 0; i < KIEU.length; i++) if (KIEU[i].id === id) return KIEU[i]; return null; }
  function mau(name) {
    var h = 0;
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return MAU[h % MAU.length];
  }
  function ngan(k) { return S.ngan[k.id] || k.name; }

  function api(path, opts) {
    opts = opts || {};
    opts.headers = { 'X-Admin-Password': pw() };
    return fetch(path, opts).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d && d.error ? d.error : 'Lỗi máy chủ.'); e.status = r.status; throw e; }
        return d;
      });
    });
  }

  /* ---------------- am thanh & giong doc ---------------- */
  var ac = null;
  function tone(freq, dur, type, vol, delay, endFreq) {
    if (!S.sound) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      if (!ac) ac = new AC();
      if (ac.state === 'suspended') ac.resume();
      var t0 = ac.currentTime + (delay || 0);
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = type || 'sine';
      o.frequency.setValueAtTime(freq, t0);
      if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t0 + dur);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(vol, t0 + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g); g.connect(ac.destination);
      o.start(t0); o.stop(t0 + dur + 0.03);
    } catch (e) { /* bo qua */ }
  }
  var lanTick = 0;
  function sndTick() { var t = now(); if (t - lanTick < 28) return; lanTick = t; tone(1750, 0.025, 'square', 0.035); }
  function sndBeep(cao) { tone(cao ? 1046 : 587, cao ? 0.35 : 0.16, 'square', 0.06); }
  function sndQuack() { tone(640, 0.09, 'sawtooth', 0.045, 0, 430); tone(600, 0.11, 'sawtooth', 0.04, 0.11, 400); }
  var lanCach = 0;
  function sndCach(manh) { var t = now(); if (t - lanCach < 45) return; lanCach = t; tone(2200 + Math.random() * 900, 0.03, 'triangle', Math.min(0.05, 0.012 + manh / 12000)); }
  function sndSoi(i) { tone(660 + (i % 6) * 70, 0.06, 'triangle', 0.06); }
  function sndChon() { tone(880, 0.12, 'triangle', 0.14); tone(1320, 0.25, 'triangle', 0.12, 0.1); }
  function sndChia() { tone(1500, 0.05, 'triangle', 0.04, 0, 800); }
  function sndKenGiay() {
    var n = [523, 659, 784, 1047];
    for (var i = 0; i < n.length; i++) tone(n[i], 0.16, 'triangle', 0.16, i * 0.11);
    tone(1047, 0.8, 'triangle', 0.12, 0.48); tone(1319, 0.8, 'triangle', 0.1, 0.48); tone(1568, 0.8, 'triangle', 0.08, 0.48);
  }

  function giongViet() {
    if (!window.speechSynthesis) return null;
    var v = window.speechSynthesis.getVoices() || [];
    for (var i = 0; i < v.length; i++) if (/^vi/i.test(v[i].lang)) return v[i];
    return null;
  }
  function docTen(text) {
    if (!S.voice) return;
    var g = giongViet();
    if (!g) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.voice = g; u.lang = g.lang; u.rate = 0.95;
    window.speechSynthesis.speak(u);
  }

  /* ---------------- luu lua chon ---------------- */
  function luuPref() {
    ghiLS(PREF_KEY, { src: S.src, kieu: S.kieu, per: S.per, bo: S.bo, sound: S.sound, voice: S.voice,
      nhomKieu: S.nhomKieu, nhomN: S.nhomN, nhomK: S.nhomK });
  }
  function napPref() {
    var p = docLS(PREF_KEY, {}) || {};
    S.src = typeof p.src === 'string' ? p.src : '';
    S.kieu = timKieu(p.kieu) ? p.kieu : 'quay';
    S.per = p.per >= 1 && p.per <= 3 ? p.per : 1;
    S.bo = p.bo !== false;
    S.sound = p.sound !== false;
    S.voice = p.voice !== false;
    S.nhomKieu = p.nhomKieu === 'n' || p.nhomKieu === 'k' ? p.nhomKieu : 'cap';
    S.nhomN = p.nhomN >= 2 && p.nhomN <= 6 ? p.nhomN : 4;
    S.nhomK = p.nhomK >= 2 && p.nhomK <= 12 ? p.nhomK : 4;
  }

  /* ---------------- danh sach nhanh (chung voi UFO) ---------------- */
  function docDs() { var l = docLS(LIST_KEY, []); return Array.isArray(l) ? l : []; }
  function ghiDs(l) { ghiLS(LIST_KEY, l); }
  function timDs(id) { var l = docDs(); for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }

  /* ---------------- dung khung ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopGoiTen';
    root.className = 'gt';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Gọi tên vui');
    var tabs = KIEU.map(function (k) {
      return '<button type="button" data-k="' + k.id + '" title="' + esc(k.ten) + ' (' + k.phim + ')"><span aria-hidden="true">' + k.ic + '</span><span class="gt-tab-ten">' + esc(k.ten) + '</span></button>';
    }).join('');
    root.innerHTML =
      '<header class="gt-bar">' +
        '<b class="gt-title">🎲 Gọi tên vui</b>' +
        '<select class="gt-src" id="gtSrc" aria-label="Chọn lớp"></select>' +
        '<button type="button" class="gt-btn" id="gtEdit" hidden title="Sửa danh sách nhanh">✏️</button>' +
        '<button type="button" class="gt-btn" id="gtDiem" title="Điểm danh & chọn trò (D)">👥 <span id="gtSiSo">0</span></button>' +
        '<nav class="gt-tabs" id="gtTabs" aria-label="Kiểu gọi">' + tabs + '</nav>' +
        '<span class="gt-bar-gap"></span>' +
        '<button type="button" class="gt-btn gt-ic" id="gtVoice"></button>' +
        '<button type="button" class="gt-btn gt-ic" id="gtSound"></button>' +
        '<button type="button" class="gt-btn gt-ic" id="gtFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="gt-btn" id="gtClose" title="Đóng (Esc)">✕</button>' +
      '</header>' +

      '<main class="gt-stage" id="gtStage">' +
        '<div class="gt-view gt-v-quay" data-v="quay" hidden><canvas id="gtWheel" aria-label="Vòng quay tên"></canvas></div>' +
        '<div class="gt-view gt-v-vit" data-v="vit" hidden><canvas id="gtVit" aria-label="Đua vịt"></canvas></div>' +
        '<div class="gt-view gt-v-bi" data-v="bi" hidden><canvas id="gtBi" aria-label="Đua bi"></canvas></div>' +
        '<div class="gt-view gt-v-kinh" data-v="kinh" hidden>' +
          '<div class="gt-grid" id="gtGrid"></div>' +
          '<div class="gt-toi" id="gtToi" aria-hidden="true"></div>' +
          '<div class="gt-lens" id="gtLens" aria-hidden="true"><span class="gt-lens-can"></span><span class="gt-lens-kinh"></span></div>' +
        '</div>' +
        '<div class="gt-view gt-v-nhom" data-v="nhom" hidden>' +
          '<div class="gt-groups" id="gtGroups"></div>' +
          '<div class="gt-deck" id="gtDeck" hidden aria-hidden="true"><span></span><span></span><span></span></div>' +
        '</div>' +
        '<div class="gt-dachon" id="gtDaChon" aria-live="polite"></div>' +
        '<div class="gt-empty" id="gtEmpty" hidden></div>' +
      '</main>' +

      '<footer class="gt-foot">' +
        '<span class="gt-per" id="gtPer" role="group" aria-label="Số bạn mỗi lượt">Mỗi lượt' +
          '<button type="button" data-n="1">1</button><button type="button" data-n="2">2</button><button type="button" data-n="3">3</button>' +
        '</span>' +
        '<label class="gt-bo" id="gtBoWrap"><input type="checkbox" id="gtBo"> <span>Bỏ bạn đã được gọi khỏi lượt sau</span></label>' +
        '<button type="button" class="gt-btn" id="gtRound" title="Cho cả lớp vào lại vòng gọi">↺ Vòng mới</button>' +
        '<span class="gt-nhom-opt" id="gtNhomOpt">' +
          '<select id="gtNhomKieu" aria-label="Cách chia">' +
            '<option value="cap">Chia cặp đôi</option>' +
            '<option value="n">Nhóm N người</option>' +
            '<option value="k">Chia thành K nhóm</option>' +
          '</select>' +
          '<span class="gt-step" id="gtStep"><button type="button" data-d="-1" aria-label="Bớt">−</button><b id="gtSo">4</b><button type="button" data-d="1" aria-label="Thêm">＋</button></span>' +
        '</span>' +
        '<span class="gt-status" id="gtStatus" aria-live="polite"></span>' +
        '<button type="button" class="gt-go" id="gtGo"><span id="gtGoTen">Quay</span> <kbd>Space</kbd></button>' +
      '</footer>' +

      '<div class="gt-kq" id="gtKq" hidden><div class="gt-kq-card" role="dialog" aria-labelledby="gtKqTitle">' +
        '<p class="gt-kq-title" id="gtKqTitle"></p>' +
        '<div class="gt-kq-list" id="gtKqList"></div>' +
        '<p class="gt-kq-phu" id="gtKqPhu" hidden></p>' +
        '<div class="gt-kq-foot">' +
          '<button type="button" class="gt-btn gt-btn-sang" id="gtKqDong">Xong</button>' +
          '<button type="button" class="gt-go gt-go-sm" id="gtKqTiep">🎲 Gọi tiếp <kbd>Space</kbd></button>' +
        '</div>' +
      '</div></div>' +
      '<canvas class="gt-confetti" id="gtConfetti" aria-hidden="true"></canvas>' +
      '<div class="gt-panel" id="gtPanel" hidden><div class="gt-panel-card" id="gtPanelCard"></div></div>';
    document.body.appendChild(root);

    $('#gtSrc').addEventListener('change', doiNguon);
    $('#gtEdit').addEventListener('click', function () { var l = timDs(S.src.slice(3)); if (l) moSua(l); });
    $('#gtDiem').addEventListener('click', moDiemDanh);
    $all('#gtTabs button').forEach(function (b) {
      b.addEventListener('click', function () { chonKieu(b.getAttribute('data-k')); });
    });
    $all('#gtPer button').forEach(function (b) {
      b.addEventListener('click', function () { S.per = +b.getAttribute('data-n'); luuPref(); veNut(); });
    });
    $('#gtBo').addEventListener('change', function () { S.bo = this.checked; luuPref(); if (!S.busy) veView(); });
    $('#gtRound').addEventListener('click', vongMoi);
    $('#gtNhomKieu').addEventListener('change', function () { S.nhomKieu = this.value; S.nhomKq = null; luuPref(); veNut(); if (!S.busy) veView(); });
    $all('#gtStep button').forEach(function (b) {
      b.addEventListener('click', function () { doiSo(+b.getAttribute('data-d')); });
    });
    $('#gtVoice').addEventListener('click', function () { S.voice = !S.voice; luuPref(); veNut(); if (S.voice) docTen('Đã bật đọc tên'); });
    $('#gtSound').addEventListener('click', function () { S.sound = !S.sound; luuPref(); veNut(); if (S.sound) sndChon(); });
    $('#gtFull').addEventListener('click', toanManHinh);
    $('#gtClose').addEventListener('click', dong);
    $('#gtGo').addEventListener('click', function () { chay(); });
    $('#gtKqDong').addEventListener('click', dongKq);
    $('#gtKqTiep').addEventListener('click', function () { dongKq(); chay(); });
    $('#gtKq').addEventListener('click', function (e) { if (e.target.id === 'gtKq') dongKq(); });
    $('#gtPanel').addEventListener('click', function (e) { if (e.target.id === 'gtPanel') dongPanel(); });
    $('#gtWheel').addEventListener('click', function () { if (!S.busy) chay(); });
    window.addEventListener('keydown', phim, true);
    var hen = 0;
    window.addEventListener('resize', function () {
      if (!root || root.hidden) return;
      clearTimeout(hen);
      hen = setTimeout(doiCo, 120);
    });
    if (window.speechSynthesis && window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener('voiceschanged', veNut);
    S.built = true;
  }

  function veNut() {
    var nhom = S.kieu === 'nhom';
    $all('#gtTabs button').forEach(function (b) {
      var on = b.getAttribute('data-k') === S.kieu;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    $all('#gtPer button').forEach(function (b) { b.classList.toggle('is-on', +b.getAttribute('data-n') === S.per); });
    $('#gtBo').checked = S.bo;
    $('#gtPer').hidden = nhom;
    $('#gtBoWrap').hidden = nhom;
    $('#gtRound').hidden = nhom || !S.bo;
    $('#gtNhomOpt').hidden = !nhom;
    $('#gtNhomKieu').value = S.nhomKieu;
    $('#gtStep').hidden = S.nhomKieu === 'cap';
    $('#gtSo').textContent = S.nhomKieu === 'k' ? S.nhomK : S.nhomN;
    var k = timKieu(S.kieu);
    $('#gtGoTen').textContent = k.ic + ' ' + (nhom && S.nhomKq ? 'Chia lại' : k.nut);
    var v = $('#gtVoice'), coGiong = !!giongViet();
    v.textContent = S.voice && coGiong ? '🗣️' : '🤐';
    v.title = !coGiong ? 'Máy này chưa có giọng đọc tiếng Việt' : (S.voice ? 'Đang đọc tên — bấm để tắt' : 'Đang tắt đọc tên — bấm để bật');
    v.classList.toggle('is-off', !S.voice || !coGiong);
    var s = $('#gtSound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng — bấm để tắt' : 'Đang tắt tiếng — bấm để bật';
    s.classList.toggle('is-off', !S.sound);
    $('#gtEdit').hidden = S.src.indexOf('ls:') !== 0;
    var cm = coMat().length;
    $('#gtSiSo').textContent = S.kids.length ? (cm + '/' + S.kids.length) : '0';
  }

  function doiSo(d) {
    if (S.nhomKieu === 'k') S.nhomK = kep(S.nhomK + d, 2, 12);
    else S.nhomN = kep(S.nhomN + d, 2, 6);
    S.nhomKq = null;
    luuPref(); veNut();
    if (!S.busy) veView();
  }

  /* ---------------- danh sach & trang thai ---------------- */
  function coMat() { return S.kids.filter(function (k) { return !S.absent[k.id]; }); }
  function ungVien() {
    var c = coMat();
    return S.bo ? c.filter(function (k) { return !S.round[k.id]; }) : c;
  }
  function trangThai(extra) {
    var tong = S.kids.length, vang = 0, xong = 0;
    S.kids.forEach(function (k) { if (S.absent[k.id]) vang++; else if (S.round[k.id]) xong++; });
    var t = '';
    if (tong) {
      t = 'Có mặt ' + (tong - vang) + '/' + tong;
      if (S.kieu !== 'nhom' && S.bo) t += ' · đã gọi ' + xong + ' · còn ' + (tong - vang - xong);
    }
    $('#gtStatus').innerHTML = (extra ? '<b>' + esc(extra) + '</b>' : esc(t));
    $('#gtGo').disabled = S.busy || !(S.kieu === 'nhom' ? coMat().length >= 2 : ungVien().length >= 1);
  }
  function vongMoi() {
    if (S.busy) return;
    S.round = {};
    veView();
    trangThai('Vòng mới — cả lớp lại có thể được gọi.');
  }

  function napNguon() {
    var o = [];
    S.classes.forEach(function (c) {
      o.push('<option value="sv:' + esc(c.id) + '">🏫 ' + esc(c.name) + ' (' + c.size + ')</option>');
    });
    if (!S.classes.length) o.push('<option value="key">🔑 Lớp trên hệ thống (cần mật khẩu)…</option>');
    docDs().forEach(function (l) {
      o.push('<option value="ls:' + esc(l.id) + '">📋 ' + esc(l.name) + ' (' + l.kids.length + ')</option>');
    });
    o.push('<option value="new">＋ Tạo danh sách nhanh…</option>');
    var sel = $('#gtSrc');
    sel.innerHTML = o.join('');
    if (S.src) sel.value = S.src;
  }
  function coNguon(v) {
    if (v.indexOf('sv:') === 0) return S.classes.some(function (c) { return 'sv:' + c.id === v; });
    if (v.indexOf('ls:') === 0) return !!timDs(v.slice(3));
    return false;
  }
  function doiNguon() {
    var v = this.value;
    this.value = S.src;
    if (v === 'key') return moKhoa();
    if (v === 'new') return moSua(null);
    if (S.busy) huy();
    chonNguon(v, true);
  }

  // Ten goi ngan (chu cuoi); trung thi them chu dem, van trung thi ca ho ten
  function tinhNgan() {
    var dem = {};
    S.ngan = {};
    S.kids.forEach(function (k) {
      var w = String(k.name).trim().split(/\s+/);
      var n1 = w[w.length - 1], n2 = w.slice(-2).join(' ');
      dem[n1] = (dem[n1] || 0) + 1;
      if (n2 !== n1) dem[n2] = (dem[n2] || 0) + 1;
    });
    S.kids.forEach(function (k) {
      var w = String(k.name).trim().split(/\s+/);
      var n1 = w[w.length - 1], n2 = w.slice(-2).join(' ');
      S.ngan[k.id] = dem[n1] === 1 ? n1 : dem[n2] === 1 ? n2 : k.name;
    });
  }

  function chonNguon(v, moLobby) {
    var cung = v === S.srcDaNap;
    S.src = v;
    if (!cung) { S.round = {}; S.absent = {}; S.nhomKq = null; }
    luuPref();
    napNguon();
    var xong = function (kids) {
      S.kids = kids;
      S.srcDaNap = v;
      tinhNgan();
      // Bo nhung id khong con trong danh sach
      var co = {};
      kids.forEach(function (k) { co[k.id] = 1; });
      Object.keys(S.absent).forEach(function (id) { if (!co[id]) delete S.absent[id]; });
      Object.keys(S.round).forEach(function (id) { if (!co[id]) delete S.round[id]; });
      veNut();
      veView();
      if (moLobby && kids.length) moDiemDanh();
    };
    if (v.indexOf('ls:') === 0) {
      var l = timDs(v.slice(3));
      xong(l ? l.kids.map(function (k) { return { id: String(k.id), name: String(k.name) }; }) : []);
      return Promise.resolve();
    }
    S.kids = [];
    veNut();
    hienRong('Đang tải danh sách lớp…');
    return api('/api/admin/oral?classId=' + encodeURIComponent(v.slice(3)))
      .then(function (d) {
        xong((d.roster || []).map(function (r) { return { id: String(r.id), name: String(r.name), no: r.no }; }));
        if (!S.kids.length) hienRong('Lớp này chưa có danh sách. Vào Báo cáo → Lớp & bài giao để dán danh sách, hoặc tạo danh sách nhanh.');
      })
      .catch(loiMay);
  }
  function loiMay(e) {
    if (e && (e.status === 401 || e.status === 403)) {
      try { sessionStorage.removeItem(PW_KEY); } catch (x) { /* bo qua */ }
      S.classes = [];
      S.src = '';
      napNguon();
      moKhoa('Mật khẩu không đúng hoặc đã hết phiên. Nhập lại nhé.');
    } else {
      hienRong(e && e.message ? e.message : 'Không tải được danh sách.');
    }
  }
  function napLop() {
    if (!pw()) return Promise.resolve();
    return api('/api/admin/oral').then(function (d) { S.classes = d.classes || []; })
      .catch(function (e) {
        if (e && (e.status === 401 || e.status === 403)) { try { sessionStorage.removeItem(PW_KEY); } catch (x) { /* bo qua */ } }
        S.classes = [];
      });
  }

  /* ---------------- chuyen kieu & ve san khau ---------------- */
  function chonKieu(id) {
    if (!timKieu(id)) return;
    if (S.busy) huy();
    if (!$('#gtKq').hidden) dongKq(true);
    S.kieu = id;
    luuPref();
    veNut();
    veView();
  }

  function hienRong(html, nut) {
    var e = $('#gtEmpty');
    e.innerHTML = '<p>' + esc(html) + '</p>' + (nut ? nut : '');
    e.hidden = false;
    var b = e.querySelector('[data-x]');
    if (b) b.addEventListener('click', function () {
      var x = b.getAttribute('data-x');
      if (x === 'vong') vongMoi();
      else if (x === 'tao') moSua(null);
      else if (x === 'diem') moDiemDanh();
    });
  }

  function veView() {
    if (!root) return;
    $all('.gt-view').forEach(function (v) { v.hidden = v.getAttribute('data-v') !== S.kieu; });
    $('#gtEmpty').hidden = true;
    veDaChon([]);
    trangThai();
    veNut();
    if (!S.kids.length) {
      if (S.src) hienRong('Danh sách trống.', '<button type="button" class="gt-btn gt-btn-sang" data-x="tao">＋ Tạo danh sách nhanh</button>');
      else hienRong('Chọn lớp ở ô phía trên, hoặc tạo một danh sách nhanh.', '<button type="button" class="gt-btn gt-btn-sang" data-x="tao">＋ Tạo danh sách nhanh</button>');
      xoaCanvas();
      return;
    }
    if (S.kieu === 'nhom') {
      if (coMat().length < 2) { hienRong('Cần ít nhất 2 bạn có mặt để chia nhóm.', '<button type="button" class="gt-btn gt-btn-sang" data-x="diem">👥 Điểm danh</button>'); return; }
      return nhomVe();
    }
    var c = ungVien();
    if (!c.length) {
      if (coMat().length) hienRong('Cả lớp đã được gọi trong vòng này 🎉', '<button type="button" class="gt-btn gt-btn-sang" data-x="vong">↺ Vòng mới</button>');
      else hienRong('Không còn bạn nào có mặt.', '<button type="button" class="gt-btn gt-btn-sang" data-x="diem">👥 Điểm danh</button>');
      xoaCanvas();
      return;
    }
    if (S.kieu === 'quay') quayChuanBi(c);
    else if (S.kieu === 'vit') vitTao(c);
    else if (S.kieu === 'bi') biTao(c);
    else if (S.kieu === 'kinh') kinhVe();
  }
  function xoaCanvas() {
    ['#gtWheel', '#gtVit', '#gtBi'].forEach(function (id) {
      var cv = $(id); var c = cv.getContext('2d'); c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, cv.width, cv.height);
    });
    $('#gtGrid').innerHTML = '';
    $('#gtGroups').innerHTML = '';
  }

  function doiCo() {
    if (S.busy) {
      if (S.kieu === 'quay') { quayDung(); quayVe(); }
      else if (S.kieu === 'vit') vuaCanvas($('#gtVit'));
      else if (S.kieu === 'bi') vuaCanvas($('#gtBi'));
      return;
    }
    if (S.kieu === 'nhom' && S.nhomKq) { nhomBoTri(); return; }
    if (S.kieu === 'quay') { quayDung(); quayVe(); return; }
    if (S.kieu === 'vit' && V) { vuaCanvas($('#gtVit')); vitVe(); return; }
    if (S.kieu === 'bi' && B) { vuaCanvas($('#gtBi')); biVe(); return; }
    if (S.kieu === 'kinh') { kinhBoTri(); return; }
    veView();
  }

  function vuaCanvas(cv) {
    var r = cv.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
    if (cv._w !== w || cv._h !== h || cv._dpr !== dpr) {
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      cv._w = w; cv._h = h; cv._dpr = dpr;
    }
    var c = cv.getContext('2d');
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    return c;
  }

  function veDaChon(list) {
    var e = $('#gtDaChon');
    e.innerHTML = list.map(function (k) {
      return '<span style="--c:' + mau(k.name) + '">⭐ ' + esc(k.name) + '</span>';
    }).join('');
  }

  // Duong vien bo tron cho canvas (khong dung roundRect de chay ca trinh duyet cu)
  function hopTron(c, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }
  function chuSang(hex) {
    var n = parseInt(hex.slice(1), 16);
    var r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62;
  }

  // Dem nguoc 3-2-1 ve tren canvas; tra ve true khi da xong
  function demNguoc(c, w, h, t, chu) {
    if (t >= 3.0) return true;
    var so = t < 2.4 ? 3 - Math.floor(t / 0.8) : 0;
    var p = t < 2.4 ? (t % 0.8) / 0.8 : (t - 2.4) / 0.6;
    var txt = so ? String(so) : chu;
    var size = Math.min(w, h) * (so ? 0.32 : 0.16) * (1.25 - 0.25 * p);
    c.save();
    c.globalAlpha = 1 - p * 0.75;
    c.font = '800 ' + Math.round(size) + 'px ' + FONT;
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.lineWidth = Math.max(4, size * 0.06);
    c.strokeStyle = 'rgba(20,16,40,.75)';
    c.strokeText(txt, w / 2, h / 2);
    c.fillStyle = so ? '#fff' : '#ffd43b';
    c.fillText(txt, w / 2, h / 2);
    c.restore();
    return false;
  }

  /* ================= 1. VONG QUAY ================= */
  var Q = { items: [], key: '', rot: 0, off: null, D: 0, hl: [], flick: 0 };

  function quayChuanBi(c) {
    var key = c.map(function (k) { return k.id; }).sort().join('|');
    if (key !== Q.key) { Q.key = key; Q.items = tron(c); }
    Q.hl = [];
    quayDung();
    quayVe();
  }
  function mauLat(i, n) {
    var m = MAU.length, idx = i % m;
    if (i === n - 1 && n > 1 && idx === 0) idx = ((n - 2) % m + 2) % m || 3;
    return MAU[idx];
  }
  function quayDung() {
    var cv = $('#gtWheel');
    vuaCanvas(cv);
    var w = cv._w, h = cv._h, dpr = cv._dpr;
    var D = Math.max(160, Math.min(w - 24, h - 34));
    Q.D = D;
    var n = Q.items.length;
    var off = document.createElement('canvas');
    off.width = off.height = Math.round(D * dpr);
    var c = off.getContext('2d');
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    c.translate(D / 2, D / 2);
    var rw = Math.max(10, D * 0.035), Rs = D / 2 - rw;
    Q.Rs = Rs; Q.rw = rw;
    if (!n) { Q.off = off; return; }
    var seg = TAU / n;
    var f0 = Math.max(10, Math.min(Rs * (n <= 6 ? 0.12 : 0.095), Rs * seg * 0.55));
    var maxW = Rs * 0.7;
    for (var i = 0; i < n; i++) {
      var col = mauLat(i, n);
      c.beginPath();
      c.moveTo(0, 0);
      c.arc(0, 0, Rs, i * seg, (i + 1) * seg);
      c.closePath();
      c.fillStyle = col;
      c.fill();
      // vet sang nhe tao chieu sau
      var gr = c.createRadialGradient(0, 0, Rs * 0.2, 0, 0, Rs);
      gr.addColorStop(0, 'rgba(255,255,255,.18)');
      gr.addColorStop(0.7, 'rgba(255,255,255,0)');
      gr.addColorStop(1, 'rgba(0,0,0,.18)');
      c.fillStyle = gr;
      c.fill();
      if (n > 1) { c.strokeStyle = 'rgba(255,255,255,.85)'; c.lineWidth = Math.max(1, D * 0.003); c.stroke(); }
      // chu
      var txt = ngan(Q.items[i]), f = f0;
      c.save();
      c.rotate((i + 0.5) * seg);
      c.font = '700 ' + Math.round(f) + 'px ' + FONT;
      var tw = c.measureText(txt).width;
      if (tw > maxW) { f = Math.max(f0 * 0.72, f * maxW / tw); c.font = '700 ' + Math.round(f) + 'px ' + FONT; tw = c.measureText(txt).width; }
      if (tw > maxW) {
        while (txt.length > 2 && c.measureText(txt + '…').width > maxW) txt = txt.slice(0, -1);
        txt += '…';
      }
      c.textAlign = 'right'; c.textBaseline = 'middle';
      var sang = chuSang(col);
      if (!sang) { c.lineWidth = Math.max(2, f * 0.16); c.strokeStyle = 'rgba(0,0,0,.28)'; c.strokeText(txt, Rs * 0.92, 0); }
      c.fillStyle = sang ? '#2b1d10' : '#fff';
      c.fillText(txt, Rs * 0.92, 0);
      c.restore();
    }
    Q.off = off;
  }
  function quayVe(t) {
    var cv = $('#gtWheel');
    var c = cv.getContext('2d');
    var w = cv._w, h = cv._h, D = Q.D;
    if (!w || !Q.off) return;
    c.setTransform(cv._dpr, 0, 0, cv._dpr, 0, 0);
    c.clearRect(0, 0, w, h);
    var cx = w / 2, cy = h / 2 + 12, Rs = Q.Rs, rw = Q.rw, n = Q.items.length;
    // bong do
    c.save();
    c.beginPath(); c.arc(cx, cy + D * 0.02, D / 2, 0, TAU);
    c.fillStyle = 'rgba(0,0,0,.35)'; c.shadowColor = 'rgba(0,0,0,.45)'; c.shadowBlur = D * 0.06;
    c.fill();
    c.restore();
    // banh xe quay
    c.save();
    c.translate(cx, cy);
    c.rotate(Q.rot - Math.PI / 2);
    c.drawImage(Q.off, -D / 2, -D / 2, D, D);
    if (n && Q.hl.length) {
      var seg = TAU / n;
      Q.hl.forEach(function (i) {
        c.beginPath(); c.moveTo(0, 0); c.arc(0, 0, Rs, i * seg, (i + 1) * seg); c.closePath();
        c.fillStyle = 'rgba(255,255,255,.3)'; c.fill();
        c.lineWidth = Math.max(4, D * 0.012); c.strokeStyle = '#ffe066'; c.stroke();
      });
    }
    c.restore();
    // vanh
    c.beginPath(); c.arc(cx, cy, Rs + rw / 2, 0, TAU);
    c.lineWidth = rw; c.strokeStyle = '#2b2350'; c.stroke();
    c.beginPath(); c.arc(cx, cy, Rs + rw, 0, TAU);
    c.lineWidth = 3; c.strokeStyle = '#ffd166'; c.stroke();
    c.beginPath(); c.arc(cx, cy, Rs, 0, TAU);
    c.lineWidth = 2; c.strokeStyle = '#ffd166'; c.stroke();
    // bong den tren vanh
    var nb = 24, tt = (t || 0) / 1000, buoc = Math.floor(tt * (S.busy ? 8 : 1.5));
    for (var i = 0; i < nb; i++) {
      var a = i / nb * TAU;
      var on = (i + buoc) % 2 === 0;
      c.beginPath();
      c.arc(cx + Math.cos(a) * (Rs + rw / 2), cy + Math.sin(a) * (Rs + rw / 2), Math.max(2.5, rw * 0.24), 0, TAU);
      c.fillStyle = on ? '#fff3b0' : '#b88a2a';
      c.fill();
    }
    // nut giua
    var hr = Math.max(18, Rs * 0.15);
    var g = c.createRadialGradient(cx - hr * 0.3, cy - hr * 0.3, hr * 0.1, cx, cy, hr);
    g.addColorStop(0, '#fff6c8'); g.addColorStop(0.6, '#ffc94a'); g.addColorStop(1, '#d48a12');
    c.beginPath(); c.arc(cx, cy, hr, 0, TAU);
    c.fillStyle = g; c.fill();
    c.lineWidth = 3; c.strokeStyle = '#fff'; c.stroke();
    c.font = '800 ' + Math.round(hr * 0.62) + 'px ' + FONT;
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillStyle = '#6b3d00';
    c.fillText(S.busy ? '★' : 'QUAY', cx, cy + 1);
    // kim chi (tren dinh), lech theo tung tieng tach
    var py = cy - Rs - rw, ph = Math.max(26, D * 0.085), pw2 = ph * 0.42;
    c.save();
    c.translate(cx, py - ph * 0.25);
    c.rotate(-Q.flick * 0.38);
    c.beginPath();
    c.moveTo(-pw2, -ph * 0.15);
    c.lineTo(pw2, -ph * 0.15);
    c.lineTo(0, ph);
    c.closePath();
    c.shadowColor = 'rgba(0,0,0,.4)'; c.shadowBlur = 8; c.shadowOffsetY = 3;
    c.fillStyle = '#e63946'; c.fill();
    c.shadowColor = 'transparent';
    c.lineWidth = 3; c.strokeStyle = '#fff'; c.stroke();
    c.beginPath(); c.arc(0, 0, pw2 * 0.38, 0, TAU); c.fillStyle = '#fff'; c.fill();
    c.restore();
  }
  function quayChiSo(rot, n) {
    var a = ((-rot) % TAU + TAU) % TAU;
    return Math.floor(a / (TAU / n)) % n;
  }
  function quayMot(token, k, dau) {
    return new Promise(function (res) {
      var n = Q.items.length, seg = TAU / n, wi = Q.items.indexOf(k);
      var f = 0.18 + Math.random() * 0.64;
      var r0 = Q.rot;
      var delta = (((-(wi + f) * seg) - r0) % TAU + TAU) % TAU;
      var vong = dau ? 5 + Math.floor(Math.random() * 3) : 3 + Math.floor(Math.random() * 2);
      var tong = delta + vong * TAU;
      var dur = dau ? 6200 + Math.random() * 1200 : 4200 + Math.random() * 600;
      if (giam()) { Q.rot = r0 + tong; Q.hl.push(wi); quayVe(); res(wi); return; }
      var t0 = now(), cu = quayChiSo(r0, n);
      function buoc(ts) {
        if (token !== S.lan) return;
        var p = Math.min(1, (ts - t0) / dur);
        var e = 1 - Math.pow(1 - p, 3.4);
        Q.rot = r0 + tong * e;
        var idx = quayChiSo(Q.rot, n);
        if (idx !== cu) { cu = idx; Q.flick = 1; sndTick(); }
        Q.flick *= 0.82;
        quayVe(ts);
        if (p < 1) raf(buoc);
        else { Q.flick = 0; Q.hl.push(wi); quayVe(ts); res(wi); }
      }
      raf(buoc);
    });
  }
  function quayChay(token, cands, need) {
    var chon = tron(cands).slice(0, need);
    var p = Promise.resolve(), xong = [];
    chon.forEach(function (k, i) {
      p = p.then(function () {
        if (token !== S.lan) return null;
        if (i > 0) {
          // bo ban vua trung khoi banh xe roi quay luot tiep
          var cu = xong[xong.length - 1];
          Q.items = Q.items.filter(function (x) { return x !== cu; });
          Q.key = '';
          Q.hl = [];
          quayDung(); quayVe();
        }
        return quayMot(token, k, i === 0).then(function () {
          if (token !== S.lan) return null;
          xong.push(k);
          sndChon();
          veDaChon(xong);
          return wait(i < chon.length - 1 ? 1100 : 500);
        });
      });
    });
    return p.then(function () { return xong; });
  }

  /* ================= 2. DUA VIT ================= */
  var V = null;
  function vitTao(c) {
    V = {
      ducks: tron(c).map(function (k, i) {
        return { k: k, ten: ngan(k), mau: mau(k.name), x: 0, v: 0, tg: 0, next: 0, ph: Math.random() * TAU, lane: i, xong: 0, bur: 0, tw: 0 };
      }),
      L: 1000, cam: 0, t: 0, tp: 0, td: 99, thu: [], phase: 'cho', font: 0, lead: null, quack: 0, demSo: -1
    };
    vuaCanvas($('#gtVit'));
    vitVe();
  }
  function vitBo(w, h) {
    var n = V.ducks.length;
    var top = kep(h * 0.12, 46, 124), bot = kep(h * 0.06, 18, 46);
    var rh = h - top - bot, laneH = rh / n;
    var s = kep(laneH * 1.7, 24, Math.min(124, rh * 0.24));
    var font = Math.round(kep(laneH * 0.5, 11, Math.max(22, h / 34)));
    return { top: top, bot: bot, rh: rh, laneH: laneH, s: s, font: font };
  }
  function hinhVit(c, x, y, s, mu, vay) {
    c.save();
    c.translate(x, y);
    c.fillStyle = 'rgba(0,40,70,.22)';
    c.beginPath(); c.ellipse(0, s * 0.27, s * 0.6, s * 0.1, 0, 0, TAU); c.fill();
    c.fillStyle = '#ffd43b'; c.strokeStyle = '#d99a00'; c.lineWidth = Math.max(1, s * 0.04);
    c.beginPath();
    c.moveTo(-s * 0.55, -s * 0.04);
    c.quadraticCurveTo(-s * 0.64, -s * 0.34, -s * 0.42, -s * 0.27);
    c.quadraticCurveTo(-s * 0.2, -s * 0.14, s * 0.04, -s * 0.13);
    c.quadraticCurveTo(s * 0.5, -s * 0.16, s * 0.52, s * 0.06);
    c.quadraticCurveTo(s * 0.45, s * 0.28, 0, s * 0.27);
    c.quadraticCurveTo(-s * 0.5, s * 0.27, -s * 0.55, -s * 0.04);
    c.fill(); c.stroke();
    c.beginPath(); c.arc(s * 0.22, -s * 0.36, s * 0.22, 0, TAU); c.fill(); c.stroke();
    c.fillStyle = '#ff8c1a';
    c.beginPath();
    c.moveTo(s * 0.38, -s * 0.39);
    c.quadraticCurveTo(s * 0.64, -s * 0.37, s * 0.61, -s * 0.29);
    c.quadraticCurveTo(s * 0.5, -s * 0.24, s * 0.37, -s * 0.29);
    c.closePath(); c.fill();
    c.fillStyle = '#1b1b1b';
    c.beginPath(); c.arc(s * 0.28, -s * 0.42, Math.max(1.2, s * 0.04), 0, TAU); c.fill();
    c.strokeStyle = '#d99a00'; c.lineWidth = Math.max(1, s * 0.05);
    c.beginPath(); c.moveTo(-s * 0.28, -s * 0.03); c.quadraticCurveTo(-s * 0.06, s * (0.12 + vay), s * 0.16, -s * 0.03); c.stroke();
    // mu mau rieng moi ban de de nhan ra
    c.fillStyle = mu;
    c.beginPath(); c.arc(s * 0.2, -s * 0.44, s * 0.2, Math.PI * 1.02, Math.PI * 1.98); c.closePath(); c.fill();
    c.fillRect(s * 0.02, -s * 0.47, s * 0.42, s * 0.05);
    c.restore();
  }
  function vitVe() {
    var cv = $('#gtVit'), c = cv.getContext('2d');
    var w = cv._w, h = cv._h;
    if (!w || !V) return;
    c.setTransform(cv._dpr, 0, 0, cv._dpr, 0, 0);
    var bo = vitBo(w, h), t = V.tp;
    if (V.font !== bo.font) {
      V.font = bo.font;
      c.font = '700 ' + bo.font + 'px ' + FONT;
      V.ducks.forEach(function (d) { d.tw = c.measureText(d.ten).width; });
    }
    var maxTw = 0;
    V.ducks.forEach(function (d) { if (d.tw > maxTw) maxTw = d.tw; });
    var sx = Math.min(w * 0.32, maxTw + bo.font + bo.s * 0.7 + 22);
    var P = Math.max(w * 2.2, 1500);
    var fin = sx + P;
    V.sx = sx; V.P = P;
    var cam = V.cam;
    // troi + bo song tren
    var g = c.createLinearGradient(0, 0, 0, bo.top);
    g.addColorStop(0, '#8fd3ff'); g.addColorStop(1, '#c9f0ff');
    c.fillStyle = g; c.fillRect(0, 0, w, bo.top);
    c.fillStyle = '#5cb85c'; c.fillRect(0, bo.top - 14, w, 14);
    c.fillStyle = '#4a9e4a';
    var i, x;
    for (x = -((cam * 0.5) % 46) - 46; x < w + 46; x += 46) {
      c.beginPath(); c.moveTo(x, bo.top - 14); c.lineTo(x + 8, bo.top - 26); c.lineTo(x + 16, bo.top - 14); c.fill();
    }
    // song
    g = c.createLinearGradient(0, bo.top, 0, bo.top + bo.rh);
    g.addColorStop(0, '#2b8fd6'); g.addColorStop(1, '#1667a8');
    c.fillStyle = g; c.fillRect(0, bo.top, w, bo.rh);
    // gon song di theo camera
    c.strokeStyle = 'rgba(255,255,255,.22)'; c.lineWidth = 2;
    var hang = Math.max(3, Math.floor(bo.rh / 34));
    for (i = 0; i < hang; i++) {
      var yy = bo.top + (i + 0.5) * bo.rh / hang;
      var lech = (i * 53) % 140;
      for (x = -((cam - lech) % 140 + 140) % 140; x < w + 20; x += 140) {
        var xx = x + Math.sin(t * 1.6 + i) * 6;
        c.beginPath(); c.arc(xx, yy, 9, Math.PI * 1.15, Math.PI * 1.85); c.stroke();
      }
    }
    // day phao chia lan
    if (bo.laneH >= 24) {
      for (i = 1; i < V.ducks.length; i++) {
        var ly = bo.top + i * bo.laneH;
        for (x = -((cam % 28) + 28) % 28; x < w; x += 28) {
          c.fillStyle = Math.round((x + cam) / 28) % 2 ? '#ffffff' : '#ef476f';
          c.globalAlpha = 0.55;
          c.beginPath(); c.arc(x, ly, 3, 0, TAU); c.fill();
        }
      }
      c.globalAlpha = 1;
    }
    // bo song duoi
    c.fillStyle = '#6cc46c'; c.fillRect(0, h - bo.bot, w, bo.bot);
    c.fillStyle = '#b08a5a'; c.fillRect(0, h - bo.bot, w, 4);
    // vach xuat phat
    var xs = sx - cam;
    if (xs > -10 && xs < w + 10) {
      c.fillStyle = 'rgba(255,255,255,.9)'; c.fillRect(xs - 2, bo.top, 4, bo.rh);
    }
    // cot moc quang duong
    c.font = '700 ' + Math.round(kep(bo.top * 0.24, 11, 16)) + 'px ' + FONT;
    c.textAlign = 'center'; c.textBaseline = 'middle';
    for (i = 1; i < 4; i++) {
      var mx = sx + P * i / 4 - cam;
      if (mx < -40 || mx > w + 40) continue;
      c.fillStyle = 'rgba(255,255,255,.18)'; c.fillRect(mx - 1, bo.top, 2, bo.rh);
      c.fillStyle = '#fff'; hopTron(c, mx - 22, bo.top + 4, 44, 20, 6); c.fill();
      c.fillStyle = '#1667a8'; c.fillText((i * 25) + 'm', mx, bo.top + 14);
    }
    // vach dich o ca ro
    var xf = fin - cam;
    if (xf > -30 && xf < w + 30) {
      var o = 12;
      for (var yq = 0; yq * o < bo.rh; yq++) {
        for (var xq = 0; xq < 2; xq++) {
          c.fillStyle = (xq + yq) % 2 ? '#111' : '#fff';
          c.fillRect(xf + xq * o, bo.top + yq * o, o, Math.min(o, bo.rh - yq * o));
        }
      }
      c.fillStyle = '#e63946'; hopTron(c, xf - 34, 6, 92, Math.max(26, bo.top - 30), 8); c.fill();
      c.fillStyle = '#fff'; c.font = '800 ' + Math.round(kep(bo.top * 0.3, 12, 20)) + 'px ' + FONT;
      c.fillText('ĐÍCH', xf + 12, 6 + Math.max(26, bo.top - 30) / 2);
    }
    // vit (lan tren ve truoc de lan duoi de len)
    c.font = '700 ' + bo.font + 'px ' + FONT;
    c.textBaseline = 'middle';
    var ph = bo.font * 1.45;
    V.ducks.forEach(function (d) {
      var y = bo.top + (d.lane + 0.5) * bo.laneH + Math.sin(t * 5 + d.ph) * bo.s * 0.04;
      var x = sx + (d.x / V.L) * P - cam;
      if (x < -bo.s * 2 - d.tw - 40 || x > w + bo.s) return;
      var tx = x - bo.s * 0.66 - 6;
      c.fillStyle = d.mau;
      hopTron(c, tx - d.tw - 14, y - ph / 2, d.tw + 14, ph, ph / 2); c.fill();
      if (d.xong) { c.lineWidth = 3; c.strokeStyle = '#ffd43b'; c.stroke(); }
      c.fillStyle = '#fff'; c.textAlign = 'right';
      c.fillText(d.ten, tx - 7, y + 1);
      if (d.bur > 0 && V.phase === 'dua') {
        c.strokeStyle = 'rgba(255,255,255,.85)'; c.lineWidth = 2;
        c.beginPath(); c.arc(x - bo.s * 0.62, y + bo.s * 0.12, bo.s * 0.18, Math.PI * 0.6, Math.PI * 1.3); c.stroke();
        c.beginPath(); c.arc(x - bo.s * 0.78, y + bo.s * 0.1, bo.s * 0.12, Math.PI * 0.6, Math.PI * 1.3); c.stroke();
      }
      hinhVit(c, x, y, bo.s, d.mau, Math.sin(t * 9 + d.ph) * 0.06);
      if (d.xong && d.xong <= 3) {
        c.font = Math.round(bo.s * 0.5) + 'px ' + FONT; c.textAlign = 'center';
        c.fillText(['🥇', '🥈', '🥉'][d.xong - 1], x + bo.s * 0.2, y - bo.s * 0.85);
        c.font = '700 ' + bo.font + 'px ' + FONT;
      }
    });
    // ban do nho + top 3 tren bo song
    var xep = V.ducks.slice().sort(function (a, b) { return (a.xong || 1e9) - (b.xong || 1e9) || b.x - a.x; });
    var mmW = Math.max(120, w * 0.5), mmX = 16, mmY = bo.top * 0.36;
    c.fillStyle = 'rgba(255,255,255,.75)'; hopTron(c, mmX - 6, mmY - 9, mmW + 12, 18, 9); c.fill();
    c.fillStyle = '#1667a8'; c.fillRect(mmX, mmY - 1.5, mmW, 3);
    c.fillStyle = '#e63946'; c.fillRect(mmX + mmW - 2, mmY - 8, 4, 16);
    V.ducks.forEach(function (d) {
      c.beginPath(); c.arc(mmX + Math.min(1, d.x / V.L) * mmW, mmY, Math.max(4.5, bo.top * 0.06), 0, TAU);
      c.fillStyle = d.mau; c.fill(); c.lineWidth = 1; c.strokeStyle = '#fff'; c.stroke();
    });
    var lbF = Math.round(kep(bo.top * 0.24, 11, 28));
    c.font = '700 ' + lbF + 'px ' + FONT; c.textAlign = 'left';
    var lx = mmX + mmW + 22, med = ['🥇', '🥈', '🥉'];
    for (i = 0; i < Math.min(3, xep.length); i++) {
      if (lx > w - 30) break;
      var s1 = med[i] + ' ' + xep[i].ten;
      var sw = c.measureText(s1).width;
      c.fillStyle = 'rgba(255,255,255,.8)'; hopTron(c, lx - 6, mmY - lbF * 0.8, sw + 12, lbF * 1.6, 8); c.fill();
      c.fillStyle = '#123'; c.fillText(s1, lx, mmY + 1);
      lx += sw + 22;
    }
    if (V.td < 3) demNguoc(c, w, h, V.td, 'Bơi!');
  }
  function vitChay(token, cands, need) {
    var can = Math.min(cands.length, Math.max(need, 3));
    if (giam()) {
      var thu = tron(V.ducks);
      thu.forEach(function (d, i) { d.xong = i + 1; d.x = V.L * (1 - i * 0.04 - Math.random() * 0.02); });
      var cv = $('#gtVit');
      vuaCanvas(cv);
      V.cam = Math.max(0, V.sx + V.P + cv._w * 0.22 - cv._w);
      vitVe();
      return Promise.resolve(thu.map(function (d) { return d.k; }));
    }
    return new Promise(function (res) {
      var base = V.L / 8.6, t0 = now(), truoc = t0, ketThuc = 0;
      V.phase = 'dem'; V.t = 0; V.td = 0; V.demSo = 4;
      function buoc(ts) {
        if (token !== S.lan) return;
        var dt = Math.min(0.05, (ts - truoc) / 1000); truoc = ts;
        V.tp += dt;
        var cv = $('#gtVit');
        vuaCanvas(cv);
        if (V.td < 3) V.td += dt;
        if (V.phase === 'dem') {
          var so = V.td < 2.4 ? 3 - Math.floor(V.td / 0.8) : 0;
          if (so !== V.demSo) { V.demSo = so; sndBeep(!so); }
          if (V.td >= 2.4) { V.phase = 'dua'; V.t = 0; }
        } else {
          V.t += dt;
          var dau = 0, ld = null;
          V.ducks.forEach(function (d) { if (d.x > dau) { dau = d.x; ld = d; } });
          V.ducks.forEach(function (d) {
            if (V.t >= d.next) {
              var r = Math.random();
              if (r < 0.14) { d.tg = base * (1.45 + Math.random() * 0.35); d.next = V.t + 0.5 + Math.random() * 0.5; d.bur = 1; }
              else if (r < 0.23) { d.tg = base * (0.42 + Math.random() * 0.2); d.next = V.t + 0.35 + Math.random() * 0.4; d.bur = 0; }
              else { d.tg = base * (0.75 + Math.random() * 0.5); d.next = V.t + 0.4 + Math.random() * 0.9; d.bur = 0; }
            }
            var tg = d.tg;
            if (d.xong) tg = base * 0.25;
            else tg *= 1 + Math.min(0.35, Math.max(0, (dau - d.x) / V.L)) * 1.1;
            d.v += (tg - d.v) * Math.min(1, dt * 2.6);
            d.x = Math.min(V.L * 1.08, d.x + d.v * dt);
            if (!d.xong && d.x >= V.L) {
              V.thu.push(d); d.xong = V.thu.length;
              if (d.xong === 1) { sndChon(); } else sndCach(400);
              if (d.xong <= need) veDaChon(V.thu.slice(0, need).map(function (z) { return z.k; }));
            }
          });
          if (ld && ld !== V.lead && V.t - V.quack > 0.7) { V.quack = V.t; if (V.lead) sndQuack(); }
          V.lead = ld;
          // camera bam theo con dan dau
          var w = cv._w;
          var lx = V.sx + (Math.min(dau, V.L) / V.L) * V.P;
          var camMax = V.sx + V.P + w * 0.22 - w;
          var tgc = kep(lx - w * 0.62, 0, Math.max(0, camMax));
          V.cam += (tgc - V.cam) * Math.min(1, dt * 4);
          if (!ketThuc && V.thu.length >= can) ketThuc = V.t;
        }
        vitVe();
        if (ketThuc && V.t - ketThuc > 1.3) {
          V.phase = 'xong';
          var con = V.ducks.filter(function (d) { return !d.xong; }).sort(function (a, b) { return b.x - a.x; });
          res(V.thu.concat(con).map(function (d) { return d.k; }));
          return;
        }
        if (V.t > 40 && V.phase === 'dua') { ketThuc = V.t - 2; }
        raf(buoc);
      }
      raf(buoc);
    });
  }

  /* ================= 3. DUA BI ================= */
  var B = null;
  function biTao(c) {
    var WW = 600, n = c.length;
    var r = n <= 10 ? 15 : n <= 20 ? 12.5 : n <= 32 ? 10.5 : 9;
    var kc = 2 * r + 5, cot = Math.max(1, Math.floor((WW - 20) / kc)), hang = Math.ceil(n / cot);
    var gateY = 26 + hang * kc + 6;
    var balls = tron(c).map(function (k, i) {
      var row = Math.floor(i / cot), col = i % cot;
      var inRow = Math.min(cot, n - row * cot);
      var x0 = (WW - inRow * kc) / 2 + kc / 2;
      return { k: k, ten: ngan(k), mau: mau(k.name), x: x0 + col * kc + (Math.random() - 0.5) * 3, y: gateY - r - 1 - row * kc, vx: 0, vy: 0, xong: 0, nghi: 0 };
    });
    var segs = [], pegs = [], y = gateY + 60;
    var pr = 6, le = 2 * r + 14;
    function bai(rows) {
      var gx = 58 + Math.random() * 10, gy = 44 + Math.random() * 6;
      for (var i = 0; i < rows; i++) {
        var lech = i % 2 ? gx / 2 : 0;
        for (var x = le + lech + Math.random() * 8; x <= WW - le; x += gx) {
          if (Math.random() < 0.12) continue;
          pegs.push({ x: x + (Math.random() - 0.5) * 12, y: y + i * gy + (Math.random() - 0.5) * 8 });
        }
      }
      // tam chan nghieng o hai vach day bi vao giua
      if (Math.random() < 0.8) segs.push({ x1: 0, y1: y + gy * 0.5, x2: 46, y2: y + gy * 0.5 + 34, th: 4 });
      if (Math.random() < 0.8) segs.push({ x1: WW, y1: y + gy * 1.5, x2: WW - 46, y2: y + gy * 1.5 + 34, th: 4 });
      y += rows * gy + 30;
    }
    function zigzag(so) {
      var trai = Math.random() < 0.5;
      for (var i = 0; i < so; i++) {
        var goc = (9 + Math.random() * 6) * Math.PI / 180;
        var dai = WW * (0.72 + Math.random() * 0.08);
        var x1 = trai ? 0 : WW, x2 = trai ? dai : WW - dai, y2 = y + dai * Math.tan(goc);
        segs.push({ x1: x1, y1: y, x2: x2, y2: y2, th: 5, doc: 1 });
        y = y2 + 52 + 2 * r;
        trai = !trai;
      }
      y += 10;
    }
    bai(4 + Math.floor(Math.random() * 3));
    zigzag(2 + Math.floor(Math.random() * 2));
    bai(3 + Math.floor(Math.random() * 3));
    zigzag(2 + Math.floor(Math.random() * 2));
    bai(3 + Math.floor(Math.random() * 2));
    var finishY = y + 30, Ht = finishY + 4 * r + 80;
    segs.push({ x1: 0, y1: Ht - 8, x2: WW, y2: Ht - 8, th: 6 });
    var bins = {};
    pegs.forEach(function (p) { var b = Math.floor(p.y / 40); (bins[b] = bins[b] || []).push(p); });
    B = { WW: WW, r: r, pr: pr, balls: balls, segs: segs, pegs: pegs, bins: bins, gateY: gateY, gate: true,
      finishY: finishY, Ht: Ht, cam: 0, t: 0, td: 99, thu: [], phase: 'cho', demSo: -1 };
    vuaCanvas($('#gtBi'));
    biVe();
  }
  function biBo(w, h) {
    var rong = w >= 1000;
    var pw2 = Math.min(w - 16 - (rong ? 280 : 0), h * 1.2);
    pw2 = Math.max(200, pw2);
    var sc = pw2 / B.WW;
    var side = rong ? Math.min(340, w - pw2 - 40) : 0;
    var x0 = rong ? (w - pw2 - side - 20) / 2 : (w - pw2) / 2;
    return { pw: pw2, sc: sc, x0: x0, side: side, sideX: x0 + pw2 + 20, viewU: h / sc };
  }
  function dayRa(b, px, py, rr, e, ma) {
    var dx = b.x - px, dy = b.y - py, m = B.r + rr, d2 = dx * dx + dy * dy;
    if (d2 >= m * m) return 0;
    var d = Math.sqrt(d2) || 0.0001, nx = dx / d, ny = dy / d;
    b.x = px + nx * m; b.y = py + ny * m;
    var vn = b.vx * nx + b.vy * ny;
    if (vn < 0) {
      b.vx -= (1 + e) * vn * nx; b.vy -= (1 + e) * vn * ny;
      var tx = -ny, ty = nx, vt = b.vx * tx + b.vy * ty;
      b.vx -= vt * ma * tx; b.vy -= vt * ma * ty;
      return -vn;
    }
    return 0.0001;
  }
  function biBuoc(h) {
    var g = 980, r = B.r, WW = B.WW, balls = B.balls, i, j, b;
    for (i = 0; i < balls.length; i++) {
      b = balls[i];
      b.vy += g * h;
      b.vx *= 0.9994; b.vy *= 0.9994;
      var sp = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
      if (sp > 950) { b.vx *= 950 / sp; b.vy *= 950 / sp; }
      b.x += b.vx * h; b.y += b.vy * h;
      if (b.x < r) { b.x = r; if (b.vx < 0) b.vx = -b.vx * 0.5; }
      if (b.x > WW - r) { b.x = WW - r; if (b.vx > 0) b.vx = -b.vx * 0.5; }
      if (B.gate && b.y + r > B.gateY && b.y < B.gateY + 12) { b.y = B.gateY - r; if (b.vy > 0) b.vy = -b.vy * 0.15; b.vx *= 0.97; }
      for (j = 0; j < B.segs.length; j++) {
        var s = B.segs[j];
        var ymin = Math.min(s.y1, s.y2) - r - s.th, ymax = Math.max(s.y1, s.y2) + r + s.th;
        if (b.y < ymin || b.y > ymax) continue;
        var sx = s.x2 - s.x1, sy = s.y2 - s.y1;
        var tt = kep(((b.x - s.x1) * sx + (b.y - s.y1) * sy) / (sx * sx + sy * sy), 0, 1);
        dayRa(b, s.x1 + sx * tt, s.y1 + sy * tt, s.th, 0.22, 0.002);
      }
      var b0 = Math.floor((b.y - r - B.pr) / 40), b1 = Math.floor((b.y + r + B.pr) / 40);
      for (var bb = b0; bb <= b1; bb++) {
        var ds = B.bins[bb];
        if (!ds) continue;
        for (j = 0; j < ds.length; j++) {
          var va = dayRa(b, ds[j].x, ds[j].y, B.pr, 0.5, 0.01);
          if (va) {
            b.vx += (Math.random() - 0.5) * 18;
            if (va > 140 && B.phase === 'dua') sndCach(va);
          }
        }
      }
    }
    // va cham giua cac vien bi
    var m = 2 * r, m2 = m * m;
    for (i = 0; i < balls.length; i++) {
      var a = balls[i];
      for (j = i + 1; j < balls.length; j++) {
        b = balls[j];
        var dx = b.x - a.x, dy = b.y - a.y;
        if (dx > m || dx < -m || dy > m || dy < -m) continue;
        var d2 = dx * dx + dy * dy;
        if (d2 >= m2 || d2 === 0) continue;
        var d = Math.sqrt(d2), nx = dx / d, ny = dy / d, ov = (m - d) / 2;
        a.x -= nx * ov; a.y -= ny * ov; b.x += nx * ov; b.y += ny * ov;
        var vr = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
        if (vr < 0) {
          var im = -(1 + 0.55) * vr / 2;
          a.vx -= im * nx; a.vy -= im * ny; b.vx += im * nx; b.vy += im * ny;
        }
      }
    }
  }
  function biVe() {
    var cv = $('#gtBi'), c = cv.getContext('2d');
    var w = cv._w, h = cv._h;
    if (!w || !B) return;
    c.setTransform(cv._dpr, 0, 0, cv._dpr, 0, 0);
    var L = biBo(w, h), sc = L.sc, cam = B.cam, i;
    c.clearRect(0, 0, w, h);
    // nen duong dua
    c.save();
    c.beginPath(); c.rect(L.x0, 0, L.pw, h); c.clip();
    var g = c.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#1d2b55'); g.addColorStop(1, '#141d3d');
    c.fillStyle = g; c.fillRect(L.x0, 0, L.pw, h);
    c.translate(L.x0, -cam * sc);
    c.scale(sc, sc);
    // cham luoi nen
    c.fillStyle = 'rgba(255,255,255,.05)';
    var yA = Math.floor(cam / 40) * 40, yB = cam + L.viewU + 40;
    for (var yy = yA; yy < yB; yy += 40) for (var xx = 20; xx < B.WW; xx += 40) c.fillRect(xx - 1, yy - 1, 2, 2);
    // cong xuat phat
    if (B.gate) {
      c.fillStyle = '#ffd166'; c.fillRect(0, B.gateY, B.WW, 8);
      c.fillStyle = '#e63946';
      for (var gx = 0; gx < B.WW; gx += 40) c.fillRect(gx, B.gateY, 20, 8);
    }
    // vach dich
    var o = 15;
    for (var q = 0; q * o < B.WW; q++) for (var q2 = 0; q2 < 2; q2++) {
      c.fillStyle = (q + q2) % 2 ? '#111' : '#fff';
      c.fillRect(q * o, B.finishY + q2 * o, o, o);
    }
    c.fillStyle = 'rgba(255,209,102,.12)'; c.fillRect(0, B.finishY + 2 * o, B.WW, B.Ht - B.finishY);
    // doc
    c.lineCap = 'round';
    B.segs.forEach(function (s) {
      if (Math.max(s.y1, s.y2) < cam - 20 || Math.min(s.y1, s.y2) > cam + L.viewU + 20) return;
      c.strokeStyle = s.doc ? '#b5703a' : '#8d99c7';
      c.lineWidth = s.th * 2;
      c.beginPath(); c.moveTo(s.x1, s.y1); c.lineTo(s.x2, s.y2); c.stroke();
      c.strokeStyle = s.doc ? '#e2a66b' : '#c6cff0';
      c.lineWidth = 2;
      c.beginPath(); c.moveTo(s.x1, s.y1 - s.th + 1.5); c.lineTo(s.x2, s.y2 - s.th + 1.5); c.stroke();
    });
    // coc
    var b0 = Math.floor((cam - 20) / 40), b1 = Math.floor((cam + L.viewU + 20) / 40);
    for (var bb = b0; bb <= b1; bb++) {
      var ds = B.bins[bb];
      if (!ds) continue;
      for (i = 0; i < ds.length; i++) {
        var p = ds[i];
        var pg = c.createRadialGradient(p.x - 2, p.y - 2, 1, p.x, p.y, B.pr);
        pg.addColorStop(0, '#ffffff'); pg.addColorStop(1, '#8aa0d6');
        c.fillStyle = pg;
        c.beginPath(); c.arc(p.x, p.y, B.pr, 0, TAU); c.fill();
      }
    }
    // bi
    var r = B.r;
    B.balls.forEach(function (b) {
      if (b.y < cam - r * 3 || b.y > cam + L.viewU + r * 3) return;
      var bg = c.createRadialGradient(b.x - r * 0.35, b.y - r * 0.4, r * 0.1, b.x, b.y, r);
      bg.addColorStop(0, '#ffffff'); bg.addColorStop(0.3, b.mau); bg.addColorStop(1, 'rgba(0,0,0,.55)');
      c.fillStyle = b.mau;
      c.beginPath(); c.arc(b.x, b.y, r, 0, TAU); c.fill();
      c.fillStyle = bg; c.fill();
      if (b.xong && b.xong <= 3) { c.lineWidth = 3; c.strokeStyle = '#ffd43b'; c.stroke(); }
    });
    c.restore();
    // vien duong dua
    c.strokeStyle = '#ffd166'; c.lineWidth = 3;
    c.strokeRect(L.x0 - 1.5, -2, L.pw + 3, h + 4);
    // nhan ten (ve theo toa do man hinh cho chu khong bi phong to)
    var fs = Math.round(kep(r * sc * 0.95, 11, Math.max(18, h / 44)));
    c.font = '700 ' + fs + 'px ' + FONT;
    c.textBaseline = 'middle';
    c.lineJoin = 'round';
    B.balls.forEach(function (b) {
      var sx = L.x0 + b.x * sc, sy = (b.y - cam) * sc;
      if (sy < -20 || sy > h + 20) return;
      var tw = c.measureText(b.ten).width;
      var phai = sx + r * sc + 4 + tw < L.x0 + L.pw - 2;
      c.textAlign = phai ? 'left' : 'right';
      var tx = phai ? sx + r * sc + 4 : sx - r * sc - 4;
      c.lineWidth = 3.5; c.strokeStyle = 'rgba(10,12,30,.85)'; c.strokeText(b.ten, tx, sy);
      c.fillStyle = '#fff'; c.fillText(b.ten, tx, sy);
    });
    // bang xep hang
    var xep = B.balls.slice().sort(function (a, b) { return (a.xong || 1e9) - (b.xong || 1e9) || b.y - a.y; });
    var med = ['🥇', '🥈', '🥉', '4', '5'];
    if (L.side >= 180) {
      var sx0 = L.sideX, top = 20, lf = Math.round(kep(L.side / 14, 14, 22));
      c.fillStyle = 'rgba(255,255,255,.08)'; hopTron(c, sx0, top, L.side, lf * 2.2 * 5 + lf * 3, 16); c.fill();
      c.fillStyle = '#ffd166'; c.font = '800 ' + lf + 'px ' + FONT; c.textAlign = 'left';
      c.fillText('Bảng xếp hạng', sx0 + 14, top + lf * 1.2);
      for (i = 0; i < Math.min(5, xep.length); i++) {
        var b = xep[i], ly = top + lf * 3 + i * lf * 2.2;
        c.font = '700 ' + lf + 'px ' + FONT; c.fillStyle = '#fff';
        c.fillText(med[i], sx0 + 12, ly);
        c.beginPath(); c.arc(sx0 + 12 + lf * 1.9, ly, lf * 0.45, 0, TAU); c.fillStyle = b.mau; c.fill();
        c.fillStyle = '#fff';
        var tn = b.ten;
        while (tn.length > 2 && c.measureText(tn).width > L.side - lf * 3.5 - 20) tn = tn.slice(0, -1);
        c.fillText(tn, sx0 + 12 + lf * 2.8, ly);
        var pct = b.xong ? 1 : kep((b.y - B.gateY) / (B.finishY - B.gateY), 0, 1);
        c.fillStyle = 'rgba(255,255,255,.15)'; c.fillRect(sx0 + 12, ly + lf * 0.75, L.side - 24, 4);
        c.fillStyle = b.mau; c.fillRect(sx0 + 12, ly + lf * 0.75, (L.side - 24) * pct, 4);
      }
    } else if (B.phase !== 'cho') {
      var lf2 = 13, bx = L.x0 + L.pw - 150, by = 8;
      c.fillStyle = 'rgba(10,12,30,.7)'; hopTron(c, bx, by, 142, lf2 * 1.7 * 3 + 10, 10); c.fill();
      c.font = '700 ' + lf2 + 'px ' + FONT; c.textAlign = 'left';
      for (i = 0; i < Math.min(3, xep.length); i++) {
        c.fillStyle = '#fff';
        c.fillText(med[i] + ' ' + xep[i].ten, bx + 8, by + 5 + lf2 * 0.85 + i * lf2 * 1.7);
      }
    }
    if (B.td < 3) demNguoc(c, w, h, B.td, 'Lăn!');
  }
  function biChay(token, cands, need) {
    var can = Math.min(cands.length, Math.max(need, 3));
    if (giam()) {
      var thu = tron(B.balls);
      thu.forEach(function (b, i) { b.xong = i + 1; });
      biVe();
      return Promise.resolve(thu.map(function (b) { return b.k; }));
    }
    return new Promise(function (res) {
      var truoc = now(), ketThuc = 0, tg = 0;
      B.phase = 'dem'; B.t = 0; B.td = 0; B.demSo = 4;
      function buoc(ts) {
        if (token !== S.lan) return;
        var dt = Math.min(1 / 30, (ts - truoc) / 1000); truoc = ts;
        var cv = $('#gtBi');
        vuaCanvas(cv);
        var steps = Math.max(1, Math.ceil(dt / (1 / 240))), hh = dt / steps;
        for (var k = 0; k < steps; k++) biBuoc(hh);
        B.t += dt;
        if (B.td < 3) B.td += dt;
        if (B.phase === 'dem') {
          var so = B.td < 2.4 ? 3 - Math.floor(B.td / 0.8) : 0;
          if (so !== B.demSo) { B.demSo = so; sndBeep(!so); }
          if (B.td >= 2.4) { B.phase = 'dua'; B.gate = false; tg = 0; }
        } else {
          tg += dt;
          B.balls.forEach(function (b) {
            if (!b.xong && b.y > B.finishY) {
              B.thu.push(b); b.xong = B.thu.length;
              if (b.xong === 1) sndChon(); else sndCach(500);
              if (b.xong <= need) veDaChon(B.thu.slice(0, need).map(function (z) { return z.k; }));
            }
            // bi ket thi hich nhe
            var sp = Math.abs(b.vx) + Math.abs(b.vy);
            if (!b.xong && sp < 25) { b.nghi += dt; if (b.nghi > 1) { b.nghi = 0; b.vy = -220; b.vx = (Math.random() < 0.5 ? -1 : 1) * (90 + Math.random() * 90); } }
            else b.nghi = 0;
          });
          if (!ketThuc && B.thu.length >= can) ketThuc = tg;
          if (!ketThuc && tg > 45) ketThuc = tg - 1.3;
        }
        // camera theo vien dan dau
        var L = biBo(cv._w, cv._h), lead = 0;
        B.balls.forEach(function (b) { if (b.y > lead) lead = b.y; });
        var tgc = kep(lead - L.viewU * 0.45, 0, Math.max(0, B.Ht - L.viewU));
        B.cam += (tgc - B.cam) * Math.min(1, dt * 3.2);
        biVe();
        if (ketThuc && tg - ketThuc > 1.3) {
          B.phase = 'xong';
          var con = B.balls.filter(function (b) { return !b.xong; }).sort(function (a, b) { return b.y - a.y; });
          res(B.thu.concat(con).map(function (b) { return b.k; }));
          return;
        }
        raf(buoc);
      }
      raf(buoc);
    });
  }

  /* ================= 4. ONG KINH MAY MAN ================= */
  var K = { x: 0, y: 0, r: 80 };
  function kinhVe() {
    var ds = coMat();
    $('#gtGrid').innerHTML = ds.map(function (k) {
      var xong = S.bo && S.round[k.id];
      return '<div class="gt-card' + (xong ? ' is-xong' : '') + '" data-id="' + esc(k.id) + '" title="' + esc(k.name) + '" style="--c:' + mau(k.name) + '">' +
        '<span>' + esc(ngan(k)) + '</span></div>';
    }).join('');
    $('.gt-v-kinh').classList.remove('is-soi');
    kinhBoTri();
  }
  function kinhBoTri() {
    var g = $('#gtGrid'), v = $('.gt-v-kinh');
    var n = g.children.length;
    if (!n) return;
    var W = v.clientWidth - 32, H = v.clientHeight - 32, gap = n > 30 ? 8 : 12;
    var best = { h: 0, cols: 1 };
    for (var cols = 1; cols <= n; cols++) {
      var rows = Math.ceil(n / cols);
      var cw = (W - gap * (cols - 1)) / cols, ch = (H - gap * (rows - 1)) / rows;
      var hh = Math.min(ch, cw / 2.1);
      if (hh > best.h) best = { h: hh, cols: cols, cw: cw };
    }
    var ch2 = Math.min(best.h, 150);
    g.style.gridTemplateColumns = 'repeat(' + best.cols + ', minmax(0, 1fr))';
    g.style.gap = gap + 'px';
    g.style.setProperty('--ch', Math.floor(ch2) + 'px');
    g.style.setProperty('--cf', Math.round(kep(Math.min(ch2 * 0.36, best.cw / 6), 12, 54)) + 'px');
    K.r = kep(Math.max(ch2 * 0.85, best.cw * 0.42), 46, 170);
    var l = $('#gtLens');
    l.style.setProperty('--ls', Math.round(K.r * 2) + 'px');
    if (!S.busy) { K.x = v.clientWidth / 2; K.y = v.clientHeight / 2; datLens(); }
  }
  function datLens() {
    var l = $('#gtLens'), t = $('#gtToi');
    l.style.transform = 'translate(' + Math.round(K.x - K.r) + 'px,' + Math.round(K.y - K.r) + 'px)';
    t.style.setProperty('--x', Math.round(K.x) + 'px');
    t.style.setProperty('--y', Math.round(K.y) + 'px');
    t.style.setProperty('--r', Math.round(K.r) + 'px');
  }
  function tamThe(el) {
    var v = $('.gt-v-kinh').getBoundingClientRect(), r = el.getBoundingClientRect();
    return { x: r.left - v.left + r.width / 2, y: r.top - v.top + r.height / 2 };
  }
  function lensToi(token, x, y, ms) {
    return new Promise(function (res) {
      var x0 = K.x, y0 = K.y, dx = x - x0, dy = y - y0, len = Math.sqrt(dx * dx + dy * dy) || 1;
      var cong = (Math.random() - 0.5) * Math.min(140, len * 0.4), t0 = now();
      function f(ts) {
        if (token !== S.lan) return;
        var p = Math.min(1, (ts - t0) / ms);
        var e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        var off = Math.sin(p * Math.PI) * cong;
        K.x = x0 + dx * e - dy / len * off;
        K.y = y0 + dy * e + dx / len * off;
        datLens();
        if (p < 1) raf(f); else res();
      }
      raf(f);
    });
  }
  function kinhLuot(token, k, soBuoc, daChon) {
    var the = $all('#gtGrid .gt-card:not(.is-xong):not(.is-chon)');
    var dich = null;
    the.forEach(function (el) { if (el.getAttribute('data-id') === k.id) dich = el; });
    if (!dich) return Promise.resolve();
    var g = giam();
    var p = Promise.resolve(), truoc = null;
    var khac = the.filter(function (el) { return el !== dich; });
    if (!g && khac.length) {
      for (var i = 0; i < soBuoc; i++) {
        (function (i) {
          p = p.then(function () {
            if (token !== S.lan) return null;
            var ung = khac.filter(function (el) { return el !== truoc; });
            var el = ung[Math.floor(Math.random() * ung.length)] || khac[0];
            truoc = el;
            var pos = tamThe(el);
            var ms = 120 + 520 * Math.pow(i / soBuoc, 2.3);
            return lensToi(token, pos.x, pos.y, ms).then(function () {
              if (token !== S.lan) return null;
              el.classList.add('is-soi');
              sndSoi(i);
              return wait(Math.min(260, 40 + ms * 0.35)).then(function () { el.classList.remove('is-soi'); });
            });
          });
        })(i);
      }
    }
    return p.then(function () {
      if (token !== S.lan) return null;
      var pos = tamThe(dich);
      var den;
      if (g) { K.x = pos.x; K.y = pos.y; datLens(); den = Promise.resolve(); }
      else den = lensToi(token, pos.x, pos.y, 900);
      return den.then(function () {
        if (token !== S.lan) return null;
        dich.classList.add('is-chon');
        sndChon();
        daChon.push(k);
        veDaChon(daChon);
        return wait(g ? 150 : 900);
      });
    });
  }
  function kinhChay(token, cands, need) {
    var chon = tron(cands).slice(0, need), da = [];
    $('.gt-v-kinh').classList.add('is-soi');
    var p = Promise.resolve();
    chon.forEach(function (k, i) {
      p = p.then(function () { return token === S.lan ? kinhLuot(token, k, i === 0 ? 16 + Math.floor(Math.random() * 5) : 8, da) : null; });
    });
    return p.then(function () { return chon; });
  }

  /* ================= 5. CHIA CAP / NHOM ================= */
  function nhomSoNhom(m) {
    if (S.nhomKieu === 'cap') return Math.max(1, Math.floor(m / 2));
    if (S.nhomKieu === 'n') return Math.max(1, Math.ceil(m / S.nhomN));
    return Math.max(1, Math.min(S.nhomK, m));
  }
  function nhomKeHoach(m) {
    var G = nhomSoNhom(m), base = Math.floor(m / G), du = m % G;
    var ten = S.nhomKieu === 'cap' ? 'cặp' : 'nhóm';
    var t = m + ' bạn có mặt → ';
    if (!du) t += G + ' ' + ten + ' × ' + base + ' bạn';
    else t += G + ' ' + ten + ' (' + du + ' ' + ten + ' ' + (base + 1) + ' bạn, ' + (G - du) + ' ' + ten + ' ' + base + ' bạn)';
    return t;
  }
  function nhomVe() {
    var box = $('#gtGroups');
    var cm = coMat();
    if (S.nhomKq) {
      // Ket qua cu chi hien neu dung danh sach co mat hien tai
      var dem = 0, hop = true;
      S.nhomKq.forEach(function (gr) { gr.forEach(function (k) { dem++; if (S.absent[k.id]) hop = false; }); });
      if (!hop || dem !== cm.length) S.nhomKq = null;
    }
    if (!S.nhomKq) {
      box.className = 'gt-groups';
      box.innerHTML = '<div class="gt-nhom-plan"><b>👥 ' + esc(nhomKeHoach(cm.length)) + '</b>' +
        '<span>Bấm “Chia nhóm” hoặc phím <kbd>Space</kbd> để xáo và chia.</span></div>';
      box.style.gridTemplateColumns = '';
      veNut();
      return;
    }
    nhomDung(S.nhomKq, false);
  }
  function nhomDung(groups, an) {
    var box = $('#gtGroups');
    var G = groups.length;
    var html = groups.map(function (gr, gi) {
      return '<div class="gt-box" style="--c:' + MAU_NHOM[gi % MAU_NHOM.length] + '">' +
        '<div class="gt-box-h">' + (S.nhomKieu === 'cap' ? 'Cặp ' : 'Nhóm ') + (gi + 1) + '<small>' + gr.length + ' bạn</small></div>' +
        '<div class="gt-box-ds">' + gr.map(function (k, si) {
          return '<span class="gt-ten' + (an ? ' is-an' : '') + '" data-j="' + (si * G + gi) + '" title="' + esc(k.name) + '">' + esc(ngan(k)) + '</span>';
        }).join('') + '</div></div>';
    }).join('');
    box.className = 'gt-groups is-co';
    box.innerHTML = html;
    nhomBoTri();
  }
  function nhomBoTri() {
    var box = $('#gtGroups'), v = $('.gt-v-nhom');
    var G = box.querySelectorAll('.gt-box').length;
    if (!G) return;
    var smax = 1, lmax = 3;
    (S.nhomKq || []).forEach(function (gr) {
      if (gr.length > smax) smax = gr.length;
      gr.forEach(function (k) { lmax = Math.max(lmax, ngan(k).length); });
    });
    var W = v.clientWidth - 32, H = v.clientHeight - 32, gap = 12, best = { f: 0, cols: 1 };
    for (var cols = 1; cols <= Math.min(G, 10); cols++) {
      var rows = Math.ceil(G / cols);
      var bw = (W - gap * (cols - 1)) / cols, bh = (H - gap * (rows - 1)) / rows;
      var head = Math.min(bh * 0.24, 44);
      var area = Math.max(1, (bw - 20) * (bh - head - 16));
      var f = Math.sqrt(area / (smax * 9.5));
      f = Math.min(f, (bw - 30) / (Math.min(lmax, 14) * 0.62 + 1.6), (bh - head - 16) / 1.9);
      if (f > best.f) best = { f: f, cols: cols };
    }
    box.style.gridTemplateColumns = 'repeat(' + best.cols + ', minmax(0, 1fr))';
    box.style.gridTemplateRows = 'repeat(' + Math.ceil(G / best.cols) + ', minmax(0, 1fr))';
    // Uoc luong xong thi do thuc te: con tran khung thi giam co chu dan
    var f2 = Math.round(kep(best.f, 11, 40)), ds = $all('#gtGroups .gt-box-ds');
    var tran = function () {
      for (var i = 0; i < ds.length; i++) if (ds[i].scrollHeight > ds[i].clientHeight + 1 || ds[i].scrollWidth > ds[i].clientWidth + 1) return true;
      return false;
    };
    box.style.setProperty('--gf', f2 + 'px');
    while (f2 > 11 && tran()) { f2--; box.style.setProperty('--gf', f2 + 'px'); }
  }
  function chiaNhom() {
    if (S.busy) return;
    var cm = coMat();
    if (cm.length < 2) { trangThai('Cần ít nhất 2 bạn có mặt để chia nhóm.'); return; }
    if (!$('#gtKq').hidden) dongKq(true);
    var token = ++S.lan;
    S.busy = true; root.classList.add('is-busy');
    $('#gtEmpty').hidden = true;
    trangThai();
    var xs = tron(cm), G = nhomSoNhom(xs.length), groups = [], i;
    for (i = 0; i < G; i++) groups.push([]);
    xs.forEach(function (k, j) { groups[j % G].push(k); });
    S.nhomKq = groups;
    var g = giam();
    nhomDung(groups, !g);
    var xong = function () {
      if (token !== S.lan) return;
      $('#gtDeck').hidden = true;
      S.busy = false; root.classList.remove('is-busy');
      veNut(); trangThai();
      sndKenGiay();
      phaoGiay(70);
    };
    if (g) { xong(); return; }
    var v = $('.gt-v-nhom'), deck = $('#gtDeck');
    deck.hidden = false;
    var cach = kep(3600 / xs.length, 70, 220);
    var p = wait(250);
    xs.forEach(function (k, j) {
      p = p.then(function () {
        if (token !== S.lan) return null;
        var slot = v.querySelector('.gt-ten[data-j="' + j + '"]');
        if (!slot) return null;
        var vr = v.getBoundingClientRect(), dr = deck.getBoundingClientRect(), sr = slot.getBoundingClientRect();
        var bay = document.createElement('span');
        bay.className = 'gt-bay';
        bay.textContent = slot.textContent;
        bay.style.fontSize = getComputedStyle(slot).fontSize;
        var x0 = dr.left - vr.left + dr.width / 2, y0 = dr.top - vr.top + dr.height / 2;
        bay.style.left = x0 + 'px'; bay.style.top = y0 + 'px';
        bay.style.transform = 'translate(-50%,-50%) rotate(' + Math.round((Math.random() - 0.5) * 40) + 'deg) scale(.6)';
        v.appendChild(bay);
        var dx = sr.left - vr.left + sr.width / 2 - x0, dy = sr.top - vr.top + sr.height / 2 - y0;
        bay.getBoundingClientRect();
        bay.style.transform = 'translate(calc(-50% + ' + Math.round(dx) + 'px), calc(-50% + ' + Math.round(dy) + 'px)) rotate(0deg) scale(1)';
        sndChia();
        setTimeout(function () {
          if (bay.parentNode) bay.parentNode.removeChild(bay);
          slot.classList.remove('is-an');
        }, 430);
        return wait(cach);
      });
    });
    p.then(function () { return wait(450); }).then(xong);
  }

  /* ---------------- chay mot luot & the ket qua ---------------- */
  function chay() {
    if (S.busy || !S.kids.length) return;
    if (!$('#gtPanel').hidden) return;
    if (!$('#gtKq').hidden) dongKq(true);
    if (S.kieu === 'nhom') return chiaNhom();
    var c = ungVien();
    if (!c.length) { veView(); return; }
    var need = Math.min(S.per, c.length);
    var token = ++S.lan;
    S.busy = true; root.classList.add('is-busy');
    // ve lai trang thai xuat phat moi cho moi luot
    if (S.kieu === 'quay') quayChuanBi(c);
    else if (S.kieu === 'vit') vitTao(c);
    else if (S.kieu === 'bi') biTao(c);
    else if (S.kieu === 'kinh') kinhVe();
    veDaChon([]);
    trangThai();
    var p;
    if (c.length === 1) p = Promise.resolve(c.slice());
    else if (S.kieu === 'quay') p = quayChay(token, c, need);
    else if (S.kieu === 'vit') p = vitChay(token, c, need);
    else if (S.kieu === 'bi') p = biChay(token, c, need);
    else p = kinhChay(token, c, need);
    p.then(function (thu) {
      if (token !== S.lan || !thu) return;
      S.busy = false; root.classList.remove('is-busy');
      var win = thu.slice(0, need);
      var dua = S.kieu === 'vit' || S.kieu === 'bi';
      var phu = dua && c.length >= 6 && need < 3 ? thu.slice(need, 3) : [];
      if (S.bo) win.forEach(function (k) { S.round[k.id] = 1; });
      moKq(win, phu, dua);
    });
  }

  function moKq(win, phu, dua) {
    var med = ['🥇', '🥈', '🥉'];
    $('#gtKqTitle').textContent = win.length > 1 ? '🎉 ' + win.length + ' bạn may mắn!' : '🎉 Bạn may mắn là…';
    var list = $('#gtKqList');
    list.className = 'gt-kq-list' + (win.length > 1 ? ' is-nhieu' : '');
    list.innerHTML = win.map(function (k, i) {
      var dau = dua ? med[i] : (win.length > 1 ? String(i + 1) : '');
      return '<div class="gt-kq-hs" style="--c:' + mau(k.name) + '">' +
        (dau ? '<span class="gt-kq-so">' + dau + '</span>' : '') +
        '<span class="gt-kq-ten">' + esc(k.name) + '</span></div>';
    }).join('');
    var ph = $('#gtKqPhu');
    ph.hidden = !phu.length;
    ph.innerHTML = phu.map(function (k, i) {
      return '<span>' + med[win.length + i] + ' ' + esc(k.name) + '</span>';
    }).join('');
    $('#gtKq').hidden = false;
    trangThai();
    sndKenGiay();
    phaoGiay(180);
    docTen('Mời ' + win.map(function (k) { return k.name; }).join(', '));
    setTimeout(function () { var b = $('#gtKqTiep'); if (b && !$('#gtKq').hidden) b.focus(); }, 60);
  }
  function dongKq(giuNguyen) {
    $('#gtKq').hidden = true;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (giuNguyen !== true) veView();
  }

  /* ---------------- phao giay ---------------- */
  var CF = { parts: [], chay: false };
  function phaoGiay(so) {
    if (giam()) return;
    var cv = $('#gtConfetti'), c = vuaCanvas(cv);
    var w = cv._w, h = cv._h;
    var mauCf = ['#ffd43b', '#e63946', '#43aa8b', '#4361ee', '#f15bb5', '#f3722c', '#ffffff', '#3a86ff'];
    for (var i = 0; i < so; i++) {
      var trai = i % 2 === 0, tren = i % 5 === 0;
      CF.parts.push({
        x: tren ? Math.random() * w : (trai ? -10 : w + 10),
        y: tren ? -20 : h * (0.75 + Math.random() * 0.2),
        vx: tren ? (Math.random() - 0.5) * 120 : (trai ? 1 : -1) * (250 + Math.random() * 520),
        vy: tren ? 60 + Math.random() * 120 : -(520 + Math.random() * 520),
        a: Math.random() * TAU, va: (Math.random() - 0.5) * 14,
        w: 7 + Math.random() * 8, h: 4 + Math.random() * 6,
        mau: mauCf[i % mauCf.length], song: 0
      });
    }
    if (CF.chay) return;
    CF.chay = true;
    var truoc = now();
    function f(ts) {
      var dt = Math.min(0.05, (ts - truoc) / 1000); truoc = ts;
      c = vuaCanvas(cv);
      c.clearRect(0, 0, cv._w, cv._h);
      CF.parts = CF.parts.filter(function (p) {
        p.song += dt;
        p.vy += 700 * dt; p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx * dt; p.y += p.vy * dt; p.a += p.va * dt;
        if (p.y > cv._h + 30 || p.song > 6) return false;
        c.save(); c.translate(p.x, p.y); c.rotate(p.a);
        c.scale(1, Math.abs(Math.cos(p.a * 1.7)) * 0.8 + 0.2);
        c.fillStyle = p.mau; c.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        c.restore();
        return true;
      });
      if (CF.parts.length && !root.hidden) raf(f);
      else { CF.chay = false; CF.parts = []; c.clearRect(0, 0, cv._w, cv._h); }
    }
    raf(f);
  }

  /* ---------------- bang phu: diem danh / mat khau / danh sach ---------------- */
  function moPanel(html, rong) {
    var card = $('#gtPanelCard');
    card.className = 'gt-panel-card' + (rong ? ' is-rong' : '');
    card.innerHTML = html;
    $('#gtPanel').hidden = false;
    var f = card.querySelector('input, textarea, [data-dau], button');
    if (f) f.focus();
  }
  function dongPanel() {
    var laDiem = !!$('#gtPanelCard .gt-chips');
    $('#gtPanel').hidden = true;
    $('#gtPanelCard').innerHTML = '';
    if (laDiem && !S.busy) veView();
  }

  function moDiemDanh() {
    if (S.busy) return;
    if (!S.kids.length) { moSua(null); return; }
    var chips = S.kids.map(function (k) {
      var vang = !!S.absent[k.id], da = !!S.round[k.id];
      return '<button type="button" class="gt-chip' + (vang ? ' is-vang' : '') + (da ? ' is-da' : '') + '" data-id="' + esc(k.id) + '" style="--c:' + mau(k.name) + '" aria-pressed="' + (vang ? 'true' : 'false') + '">' +
        '<span class="gt-chip-ten">' + esc(k.name) + '</span><span class="gt-chip-tag">' + (vang ? 'vắng' : da ? '✓ đã gọi' : '') + '</span></button>';
    }).join('');
    var the = KIEU.map(function (k) {
      return '<button type="button" class="gt-mode' + (k.id === S.kieu ? ' is-on' : '') + '" data-k="' + k.id + '"' + (k.id === S.kieu ? ' data-dau' : '') + '>' +
        '<span class="gt-mode-ic" aria-hidden="true">' + k.ic + '</span><b>' + esc(k.ten) + '</b><small>' + esc(k.mota) + '</small></button>';
    }).join('');
    moPanel(
      '<h2>👥 Điểm danh & chọn trò</h2>' +
      '<p>Bấm vào tên để đánh dấu <b>vắng</b> — bạn vắng sẽ không có trong vòng quay, cuộc đua hay nhóm.</p>' +
      '<div class="gt-lobby-tools"><b id="gtDemCoMat"></b>' +
        '<button type="button" class="gt-btn gt-btn-sang" data-x="comat">Có mặt tất cả</button>' +
        (Object.keys(S.round).length ? '<button type="button" class="gt-btn gt-btn-sang" data-x="vong">↺ Xoá lượt đã gọi</button>' : '') +
      '</div>' +
      '<div class="gt-chips">' + chips + '</div>' +
      '<h3>Chọn trò</h3>' +
      '<div class="gt-modes">' + the + '</div>' +
      '<div class="gt-form-act"><button type="button" class="gt-go gt-go-sm" data-dong>Bắt đầu ▶</button></div>',
      true
    );
    var card = $('#gtPanelCard');
    var dem = function () {
      var cm = coMat().length;
      $('#gtDemCoMat').textContent = 'Có mặt ' + cm + '/' + S.kids.length;
      veNut();
    };
    dem();
    card.querySelector('.gt-chips').addEventListener('click', function (e) {
      var b = e.target.closest('.gt-chip');
      if (!b) return;
      var id = b.getAttribute('data-id');
      if (S.absent[id]) delete S.absent[id]; else S.absent[id] = 1;
      var vang = !!S.absent[id];
      b.classList.toggle('is-vang', vang);
      b.setAttribute('aria-pressed', vang ? 'true' : 'false');
      b.querySelector('.gt-chip-tag').textContent = vang ? 'vắng' : S.round[id] ? '✓ đã gọi' : '';
      S.nhomKq = null;
      dem();
    });
    card.querySelector('[data-x="comat"]').addEventListener('click', function () {
      S.absent = {}; S.nhomKq = null;
      $all('.gt-chip').forEach(function (b) {
        b.classList.remove('is-vang'); b.setAttribute('aria-pressed', 'false');
        b.querySelector('.gt-chip-tag').textContent = S.round[b.getAttribute('data-id')] ? '✓ đã gọi' : '';
      });
      dem();
    });
    var vb = card.querySelector('[data-x="vong"]');
    if (vb) vb.addEventListener('click', function () {
      S.round = {};
      $all('.gt-chip').forEach(function (b) { b.classList.remove('is-da'); if (!b.classList.contains('is-vang')) b.querySelector('.gt-chip-tag').textContent = ''; });
      vb.parentNode.removeChild(vb);
    });
    $all('#gtPanelCard .gt-mode').forEach(function (b) {
      b.addEventListener('click', function () {
        S.kieu = b.getAttribute('data-k');
        luuPref();
        dongPanel();
      });
    });
    card.querySelector('[data-dong]').addEventListener('click', dongPanel);
  }

  function moKhoa(loi) {
    moPanel(
      '<h2>Lớp trên hệ thống</h2>' +
      '<p>Nhập mật khẩu quản trị để lấy danh sách lớp.</p>' +
      '<form class="gt-form" id="gtKhoa">' +
        '<input type="password" id="gtPw" placeholder="Mật khẩu quản trị" autocomplete="current-password" required>' +
        '<div class="gt-form-act"><button type="button" class="gt-btn gt-btn-sang" data-dong>Huỷ</button><button type="submit" class="gt-go gt-go-sm">Mở danh sách</button></div>' +
      '</form>' +
      '<p class="gt-loi" id="gtLoi"' + (loi ? '' : ' hidden') + '>' + esc(loi || '') + '</p>'
    );
    $('#gtPanelCard [data-dong]').addEventListener('click', dongPanel);
    $('#gtKhoa').addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem(PW_KEY, $('#gtPw').value); } catch (x) { /* bo qua */ }
      napLop().then(function () {
        if (!S.classes.length) {
          var l = $('#gtLoi');
          l.hidden = false;
          l.textContent = pw() ? 'Chưa có lớp nào trên hệ thống.' : 'Mật khẩu không đúng.';
          return;
        }
        dongPanel();
        chonNguon('sv:' + S.classes[0].id, true);
      });
    });
  }

  // Trinh sua danh sach nhanh — cung dinh dang luu voi UFO (giu lich su goi)
  function moSua(l) {
    moPanel(
      '<h2>' + (l ? 'Sửa danh sách' : 'Tạo danh sách nhanh') + '</h2>' +
      '<p>Mỗi dòng một tên. Danh sách chỉ lưu trên trình duyệt của máy này (dùng chung với UFO gọi trả bài), không gửi lên mạng.</p>' +
      '<form class="gt-form" id="gtSua">' +
        '<input type="text" id="gtTenDs" placeholder="Tên lớp, ví dụ: HSK2 tối thứ 3" maxlength="60" required value="' + esc(l ? l.name : '') + '">' +
        '<textarea id="gtDsTen" rows="10" placeholder="Nguyễn Văn An&#10;Trần Thị Bình&#10;…" required>' + esc(l ? l.kids.map(function (k) { return k.name; }).join('\n') : '') + '</textarea>' +
        '<div class="gt-form-act">' +
          (l ? '<button type="button" class="gt-btn gt-btn-sang gt-btn-xoa" id="gtXoaDs">Xoá danh sách</button>' : '') +
          '<button type="button" class="gt-btn gt-btn-sang" data-dong>Huỷ</button>' +
          '<button type="submit" class="gt-go gt-go-sm">Lưu</button>' +
        '</div>' +
      '</form>'
    );
    $('#gtPanelCard [data-dong]').addEventListener('click', dongPanel);
    var xoa = $('#gtXoaDs');
    if (xoa) xoa.addEventListener('click', function () {
      if (!window.confirm('Xoá danh sách “' + l.name + '” khỏi máy này?')) return;
      ghiDs(docDs().filter(function (x) { return x.id !== l.id; }));
      S.src = ''; S.srcDaNap = '';
      dongPanel();
      chonDau(false);
    });
    $('#gtSua').addEventListener('submit', function (e) {
      e.preventDefault();
      var ten = $('#gtTenDs').value.trim();
      var cu = {};
      if (l) l.kids.forEach(function (k) { cu[k.name.toLowerCase()] = k; });
      var thay = {};
      var kids = $('#gtDsTen').value.split(/\r?\n/).map(function (s) {
        return s.replace(/^\s*\d+[.)\-\s]+/, '').replace(/\s+/g, ' ').trim();
      }).filter(function (s) {
        var key = s.toLowerCase();
        if (!s || thay[key]) return false;
        thay[key] = 1;
        return true;
      }).map(function (s, i) {
        return cu[s.toLowerCase()] || { id: 'k' + Date.now().toString(36) + i, name: s, times: 0, lastMs: 0, scores: [] };
      });
      if (!ten || !kids.length) return;
      var lists = docDs();
      if (l) lists = lists.map(function (x) { return x.id === l.id ? { id: l.id, name: ten, kids: kids } : x; });
      else { l = { id: 'l' + Date.now().toString(36), name: ten, kids: kids }; lists.push(l); }
      ghiDs(lists);
      dongPanel();
      S.srcDaNap = S.src === 'ls:' + l.id ? S.srcDaNap : '';
      chonNguon('ls:' + l.id, true);
    });
  }

  /* ---------------- mo / dong / phim tat ---------------- */
  function toanManHinh() {
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* bo qua */ });
  }

  function phim(e) {
    if (!root || root.hidden) return;
    var trongO = e.target && /input|select|textarea/i.test(e.target.tagName) && e.target.type !== 'checkbox';
    if (e.key === 'Escape') {
      e.stopImmediatePropagation();
      if (!$('#gtPanel').hidden) dongPanel();
      else if (!$('#gtKq').hidden) dongKq();
      else if (!document.fullscreenElement) dong();
      return;
    }
    if (trongO) return;
    // Man goi ten dang mo thi phim tat cua tro choi phia sau khong duoc chay
    e.stopImmediatePropagation();
    if (!$('#gtPanel').hidden) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var key = e.key;
    if (e.code === 'Space' || key === 'Enter' && (e.target === document.body || e.target === root)) {
      e.preventDefault();
      if (!$('#gtKq').hidden) dongKq(true);
      chay();
    } else if (key === 'f' || key === 'F') {
      toanManHinh();
    } else if (key === 'd' || key === 'D') {
      moDiemDanh();
    } else if (key >= '1' && key <= '3' && S.kieu !== 'nhom') {
      S.per = +key; luuPref(); veNut();
    } else if (!S.busy) {
      var up = String(key).toUpperCase();
      for (var i = 0; i < KIEU.length; i++) if (KIEU[i].phim === up) { chonKieu(KIEU[i].id); break; }
    }
  }

  function chonDau(moLobby) {
    napNguon();
    veNut();
    if (S.src && coNguon(S.src)) return chonNguon(S.src, moLobby);
    if (S.classes.length) return chonNguon('sv:' + S.classes[0].id, moLobby);
    var l = docDs();
    if (l.length) return chonNguon('ls:' + l[0].id, moLobby);
    S.src = '';
    S.kids = [];
    veView();
    moSua(null);
  }

  function huy() {
    S.lan++;
    S.busy = false;
    if (root) root.classList.remove('is-busy');
    if (root) { var d = $('#gtDeck'); if (d) d.hidden = true; $all('.gt-bay').forEach(function (x) { x.parentNode.removeChild(x); }); }
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    napPref();
    var coKieu = !!timKieu(opt.kieu);
    if (coKieu) S.kieu = opt.kieu;
    root.hidden = false;
    document.documentElement.classList.add('gt-open');
    veNut();
    $all('.gt-view').forEach(function (v) { v.hidden = v.getAttribute('data-v') !== S.kieu; });
    napLop().then(function () { return chonDau(!coKieu); });
  }
  function dong() {
    if (!root) return;
    huy();
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    $('#gtPanel').hidden = true;
    $('#gtPanelCard').innerHTML = '';
    $('#gtKq').hidden = true;
    root.hidden = true;
    document.documentElement.classList.remove('gt-open');
  }

  window.LopGoiTen = { mo: mo, dong: dong };
})();
