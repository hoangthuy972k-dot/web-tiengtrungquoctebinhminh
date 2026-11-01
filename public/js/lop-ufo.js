/* UFO goi tra bai — man chieu dau gio: dia bay luot qua ca lop roi "hut" mot
   (hoac vai) em len bang. Hai nguon danh sach:
   · lop tren he thong (can mat khau quan tri) — uu tien em lau chua duoc goi,
     diem cham xong len thang cot "Miệng" o bang lop;
   · danh sach nhanh dan tay — chi luu trong trinh duyet cua may nay, khong
     gui len may chu.
   Mo bang window.LopUfo.mo() (nut tren man chuan bi va thanh tren khi choi). */
(function () {
  'use strict';

  var PW_KEY = 'hyv_admin_pw';
  var LIST_KEY = 'hyv_ufo_lists';
  var PREF_KEY = 'hyv_ufo_pref';
  var MAU = ['#e0644f', '#e8a33d', '#4f9d69', '#3f88c5', '#9b6bc7', '#d4588f', '#2fa3a0', '#c77d3a', '#6c7fd8', '#b8574a'];

  var S = {
    src: '', classes: [], kids: [], round: {}, absent: {}, per: 1,
    sound: true, voice: true, busy: false, built: false, the: [], xem: null
  };
  var root, ship, crowd;

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
  function giamChuyenDong() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  function api(path, opts) {
    opts = opts || {};
    opts.headers = { 'X-Admin-Password': pw() };
    if (opts.body) opts.headers['Content-Type'] = 'application/json';
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
    if (!ac) ac = new AC();
    if (ac.state === 'suspended') ac.resume();
    var t0 = ac.currentTime + (delay || 0);
    var o = ac.createOscillator(), g = ac.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(ac.destination);
    o.start(t0); o.stop(t0 + dur + 0.03);
  }
  function sndQuet(i) { tone(520 + i * 90, 0.09, 'square', 0.05); }
  function sndHut() { tone(170, 1.1, 'sawtooth', 0.06, 0, 640); tone(340, 1.1, 'sine', 0.08, 0, 1280); }
  function sndXong() { tone(988, 0.14, 'triangle', 0.2); tone(1319, 0.3, 'triangle', 0.18, 0.12); }

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

  /* ---------------- luu lua chon cua giao vien ---------------- */
  function luuPref() { ghiLS(PREF_KEY, { src: S.src, per: S.per, sound: S.sound, voice: S.voice }); }
  function napPref() {
    var p = docLS(PREF_KEY, {});
    S.src = p.src || '';
    S.per = p.per >= 1 && p.per <= 3 ? p.per : 1;
    S.sound = p.sound !== false;
    S.voice = p.voice !== false;
  }

  /* ---------------- danh sach nhanh tren may ---------------- */
  function docDs() { var l = docLS(LIST_KEY, []); return Array.isArray(l) ? l : []; }
  function ghiDs(l) { ghiLS(LIST_KEY, l); }
  function timDs(id) { var l = docDs(); for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }

  /* ---------------- dung khung ---------------- */
  function sao() {
    // Mot cham sang nho + nhieu box-shadow = ca bau troi sao, khong can anh
    var s = [];
    for (var i = 0; i < 90; i++) {
      var x = Math.round(Math.random() * 2400), y = Math.round(Math.random() * 640);
      var a = (0.35 + Math.random() * 0.6).toFixed(2);
      s.push(x + 'px ' + y + 'px 0 ' + (Math.random() < 0.15 ? '1px' : '0') + ' rgba(255,244,214,' + a + ')');
    }
    return s.join(',');
  }

  var SHIP_SVG =
    '<svg viewBox="0 0 160 80" aria-hidden="true">' +
      '<ellipse cx="80" cy="34" rx="30" ry="24" fill="#bfe8f2" fill-opacity="0.85" stroke="#e9fbff" stroke-width="2"/>' +
      '<ellipse cx="72" cy="26" rx="9" ry="6" fill="#fff" fill-opacity="0.7"/>' +
      '<ellipse cx="80" cy="50" rx="76" ry="18" fill="#9aa3b5"/>' +
      '<ellipse cx="80" cy="46" rx="76" ry="14" fill="#d9dee8"/>' +
      '<ellipse cx="80" cy="60" rx="34" ry="7" fill="#6d7486"/>' +
      '<circle class="ufo-den" cx="30" cy="50" r="4.5" fill="#ffd36e"/>' +
      '<circle class="ufo-den" cx="55" cy="54" r="4.5" fill="#ff8f6b"/>' +
      '<circle class="ufo-den" cx="80" cy="55" r="4.5" fill="#ffd36e"/>' +
      '<circle class="ufo-den" cx="105" cy="54" r="4.5" fill="#ff8f6b"/>' +
      '<circle class="ufo-den" cx="130" cy="50" r="4.5" fill="#ffd36e"/>' +
    '</svg>';

  // Day mai dinh chua / nha co phia xa
  var ROOF_SVG =
    '<svg viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">' +
      '<path fill="#241b33" d="M0 160V98h40l18-16h70l18 16h30V70l-14-4 30-22h8l10-14 10 14h8l30 22-14 4v28h46l22-20h96l22 20h20V58l-18-6 40-26h10l12-18 12 18h10l40 26-18 6v40h40l16-14h80l16 14h30V80l-12-4 26-18h8l9-12 9 12h8l26 18-12 4v18h52l20-18h110l20 18h44V66l-16-5 34-24h9l11-15 11 15h9l34 24-16 5v32h40V160z"/>' +
      '<path fill="#2e2240" d="M0 160v-30h90l14-10h60l14 10h120l16-12h80l16 12h200l14-10h70l14 10h180l16-12h90l16 12h196v30z"/>' +
    '</svg>';

  function dung() {
    root = document.createElement('div');
    root.id = 'lopUfo';
    root.className = 'ufo';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'UFO gọi trả bài');
    root.innerHTML =
      '<div class="ufo-sky" aria-hidden="true"><span class="ufo-stars"></span><span class="ufo-moon"></span>' +
        '<span class="ufo-den-long l1"></span><span class="ufo-den-long l2"></span><span class="ufo-den-long l3"></span><span class="ufo-den-long l4"></span>' +
      '</div>' +
      '<div class="ufo-roofs" aria-hidden="true">' + ROOF_SVG + '</div>' +
      '<div class="ufo-ground" aria-hidden="true"></div>' +

      '<header class="ufo-bar">' +
        '<b class="ufo-title">🛸 Gọi trả bài</b>' +
        '<select class="ufo-src" id="ufoSrc" aria-label="Chọn lớp"></select>' +
        '<button type="button" class="ufo-btn" id="ufoEdit" hidden>✏️ Sửa danh sách</button>' +
        '<span class="ufo-per" role="group" aria-label="Số học sinh mỗi lượt">Mỗi lượt' +
          '<button type="button" data-n="1">1</button><button type="button" data-n="2">2</button><button type="button" data-n="3">3</button>' +
        '</span>' +
        '<button type="button" class="ufo-btn" id="ufoRound" title="Cho cả lớp vào lại vòng gọi">↺ Vòng mới</button>' +
        '<span class="ufo-bar-gap"></span>' +
        '<button type="button" class="ufo-btn ufo-ic" id="ufoVoice"></button>' +
        '<button type="button" class="ufo-btn ufo-ic" id="ufoSound"></button>' +
        '<button type="button" class="ufo-btn ufo-ic" id="ufoFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="ufo-btn" id="ufoClose">✕ Đóng</button>' +
      '</header>' +

      '<div class="ufo-ship" id="ufoShip" aria-hidden="true"><span class="ufo-beam"></span><span class="ufo-ship-body">' + SHIP_SVG + '</span></div>' +

      '<p class="ufo-status" id="ufoStatus" aria-live="polite"></p>' +
      '<div class="ufo-crowd" id="ufoCrowd"></div>' +
      '<button type="button" class="ufo-go" id="ufoGo">🛸 Gọi lên bảng <kbd>Space</kbd></button>' +

      '<div class="ufo-the" id="ufoThe" hidden><div class="ufo-the-card" role="dialog" aria-labelledby="ufoTheTitle">' +
        '<p class="ufo-the-title" id="ufoTheTitle">Mời lên bảng!</p>' +
        '<div class="ufo-the-list" id="ufoTheList"></div>' +
        '<div class="ufo-the-foot">' +
          '<button type="button" class="ufo-btn" id="ufoTheDong">Xong</button>' +
          '<button type="button" class="ufo-go ufo-go-sm" id="ufoTheTiep">🛸 Gọi tiếp <kbd>Space</kbd></button>' +
        '</div>' +
      '</div></div>' +

      '<div class="ufo-panel" id="ufoPanel" hidden><div class="ufo-panel-card" id="ufoPanelCard"></div></div>';
    document.body.appendChild(root);

    ship = $('#ufoShip');
    crowd = $('#ufoCrowd');
    $('.ufo-stars').style.boxShadow = sao();

    $('#ufoSrc').addEventListener('change', doiNguon);
    $('#ufoEdit').addEventListener('click', function () {
      var l = timDs(S.src.slice(3));
      if (l) moSua(l);
    });
    $all('.ufo-per button').forEach(function (b) {
      b.addEventListener('click', function () { S.per = +b.getAttribute('data-n'); luuPref(); veNut(); });
    });
    $('#ufoRound').addEventListener('click', function () {
      S.round = {};
      veDam();
      trangThai('Vòng mới — cả lớp lại có thể được gọi.');
    });
    $('#ufoVoice').addEventListener('click', function () { S.voice = !S.voice; luuPref(); veNut(); if (S.voice) docTen('Đã bật đọc tên'); });
    $('#ufoSound').addEventListener('click', function () { S.sound = !S.sound; luuPref(); veNut(); if (S.sound) sndXong(); });
    $('#ufoFull').addEventListener('click', toanManHinh);
    $('#ufoClose').addEventListener('click', dong);
    $('#ufoGo').addEventListener('click', function () { goi(); });
    $('#ufoTheTiep').addEventListener('click', function () { dongThe(); goi(); });
    $('#ufoTheDong').addEventListener('click', dongThe);
    $('#ufoTheList').addEventListener('click', bamThe);
    crowd.addEventListener('click', function (e) {
      var b = e.target.closest('.ufo-kid');
      if (b && !S.busy) xemEm(b.getAttribute('data-id'));
    });
    $('#ufoPanel').addEventListener('click', function (e) { if (e.target.id === 'ufoPanel') dongPanel(); });
    window.addEventListener('keydown', phim, true);
    window.addEventListener('resize', function () { if (!root.hidden && !S.busy) veNghi(); });
    if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = veNut;
    S.built = true;
  }

  function veNut() {
    $all('.ufo-per button').forEach(function (b) { b.classList.toggle('is-on', +b.getAttribute('data-n') === S.per); });
    var v = $('#ufoVoice'), coGiong = !!giongViet();
    v.textContent = S.voice && coGiong ? '🗣️' : '🤐';
    v.title = !coGiong ? 'Máy này chưa có giọng đọc tiếng Việt' : (S.voice ? 'Đang đọc tên — bấm để tắt' : 'Đang tắt đọc tên — bấm để bật');
    v.classList.toggle('is-off', !S.voice || !coGiong);
    var s = $('#ufoSound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng — bấm để tắt' : 'Đang tắt tiếng — bấm để bật';
    s.classList.toggle('is-off', !S.sound);
    $('#ufoEdit').hidden = S.src.indexOf('ls:') !== 0;
  }

  function trangThai(extra) {
    var tong = S.kids.length, vang = 0, xong = 0;
    S.kids.forEach(function (k) { if (S.absent[k.id]) vang++; else if (S.round[k.id]) xong++; });
    var con = tong - vang - xong;
    var t = tong ? (tong + ' học sinh · đã gọi ' + xong + ' · còn ' + con + (vang ? ' · vắng ' + vang : '')) : '';
    $('#ufoStatus').innerHTML = esc(t) + (extra ? '<span class="ufo-status-x">' + esc(extra) + '</span>' : '');
    $('#ufoGo').disabled = S.busy || con < 1;
  }

  /* ---------------- nguon danh sach ---------------- */
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
    var sel = $('#ufoSrc');
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
    chonNguon(v);
  }

  function chonNguon(v) {
    S.src = v;
    S.round = {};
    S.absent = {};
    S.kids = [];
    luuPref();
    napNguon();
    veNut();
    if (v.indexOf('ls:') === 0) {
      var l = timDs(v.slice(3));
      S.kids = l ? l.kids.map(function (k) {
        var sc = k.scores || [];
        return { id: k.id, name: k.name, times: k.times || 0, lastMs: k.lastMs || 0,
          avg: sc.length ? Math.round(sc.reduce(function (a, b) { return a + b; }, 0) / sc.length * 10) / 10 : null };
      }) : [];
      veDam();
      return Promise.resolve();
    }
    crowd.innerHTML = '<p class="ufo-wait">Đang tải danh sách lớp…</p>';
    return api('/api/admin/oral?classId=' + encodeURIComponent(v.slice(3)))
      .then(function (d) {
        S.kids = (d.roster || []).map(function (r) {
          return { id: r.id, name: r.name, no: r.no, times: r.times || 0, lastMs: r.lastMs || 0, avg: r.avg };
        });
        veDam();
        if (!S.kids.length) trangThai('Lớp này chưa có danh sách. Vào Báo cáo → Lớp & bài giao để dán danh sách, hoặc tạo danh sách nhanh.');
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
      crowd.innerHTML = '<p class="ufo-wait">' + esc(e && e.message ? e.message : 'Không tải được danh sách.') + '</p>';
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

  /* ---------------- ve ca lop dung duoi dat ---------------- */
  // Ten goi (chu cuoi); trung thi them chu dem, van trung thi ca ho ten
  function tenNgan(k, dem) {
    var w = String(k.name).trim().split(/\s+/);
    var n1 = w[w.length - 1], n2 = w.slice(-2).join(' ');
    if (dem[n1] === 1) return n1;
    if (dem[n2] === 1) return n2;
    return k.name;
  }
  function mau(name) {
    var h = 0;
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return MAU[h % MAU.length];
  }
  function veDam() {
    if (!S.kids.length) {
      crowd.innerHTML = '';
      trangThai(S.src ? '' : 'Chọn lớp ở ô phía trên, hoặc tạo một danh sách nhanh.');
      veNghi();
      return;
    }
    var dem = {};
    S.kids.forEach(function (k) {
      var w = String(k.name).trim().split(/\s+/);
      var n1 = w[w.length - 1], n2 = w.slice(-2).join(' ');
      dem[n1] = (dem[n1] || 0) + 1;
      if (n2 !== n1) dem[n2] = (dem[n2] || 0) + 1;
    });
    var n = S.kids.length;
    crowd.className = 'ufo-crowd' + (n > 40 ? ' is-nho' : n > 24 ? ' is-vua' : '');
    crowd.innerHTML = S.kids.map(function (k, i) {
      var r = S.round[k.id];
      var cls = S.absent[k.id] ? ' is-vang' : r ? ' is-xong' : '';
      var nhan = S.absent[k.id] ? '<span class="ufo-kid-tag">vắng</span>'
        : r && typeof r.diem === 'number' ? '<span class="ufo-kid-tag">' + r.diem + '</span>'
        : r ? '<span class="ufo-kid-tag">✓</span>' : '';
      return '<button type="button" class="ufo-kid' + cls + '" data-id="' + esc(k.id) + '" title="' + esc(k.name) + '"' +
        ' style="--c:' + mau(k.name) + ';--d:' + ((i * 0.37) % 2.4).toFixed(2) + 's">' +
        '<span class="ufo-kid-fig" aria-hidden="true"></span>' +
        '<span class="ufo-kid-ten">' + esc(tenNgan(k, dem)) + '</span>' + nhan +
      '</button>';
    }).join('');
    trangThai();
    if (!S.busy) veNghi();
  }

  /* ---------------- dia bay ---------------- */
  var tau = { x: -300, y: 60 };
  function datTau(x, y, ms) {
    tau.x = x; tau.y = y;
    ship.style.transition = ms ? 'transform ' + ms + 'ms cubic-bezier(.45,.05,.3,1)' : 'none';
    ship.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px)';
    return wait(ms || 0);
  }
  function veNghi() {
    // Luc cho: lo lung o giua troi, phia tren dam dong
    var w = root.clientWidth, sw = ship.offsetWidth;
    return datTau(w / 2 - sw / 2, Math.max(70, root.clientHeight * 0.16), giamChuyenDong() ? 0 : 900);
  }
  function viTriTren(el) {
    var rr = root.getBoundingClientRect(), r = el.getBoundingClientRect();
    var sw = ship.offsetWidth, sh = ship.offsetHeight;
    var cx = r.left - rr.left + r.width / 2;
    var top = r.top - rr.top;
    var y = Math.max(64, Math.min(top - sh - 120, root.clientHeight * 0.3));
    return { x: cx - sw / 2, y: y, beam: Math.max(40, top + r.height * 0.55 - (y + sh * 0.72)) };
  }
  function bayToi(el, ms) {
    var p = viTriTren(el);
    ship.style.setProperty('--beam', p.beam + 'px');
    return datTau(p.x, p.y, ms);
  }

  function kidEl(id) {
    var all = crowd.querySelectorAll('.ufo-kid');
    for (var i = 0; i < all.length; i++) if (all[i].getAttribute('data-id') === id) return all[i];
    return null;
  }

  // Uu tien: chua goi lan nao > lau chua goi > it lan bi goi, them chut ngau nhien
  function chonEm(tranh) {
    var now = Date.now();
    var pool = S.kids.filter(function (k) { return !S.round[k.id] && !S.absent[k.id] && tranh.indexOf(k) < 0; });
    if (!pool.length) return null;
    var best = null, bw = -Infinity;
    pool.forEach(function (k) {
      var days = k.lastMs ? (now - k.lastMs) / 86400000 : 999;
      var w = Math.min(days, 60) * 10 - k.times * 3 + Math.random() * 25;
      if (w > bw) { bw = w; best = k; }
    });
    return best;
  }

  function hutEm(k, luotDau) {
    var el = kidEl(k.id);
    if (!el) return Promise.resolve();
    var giam = giamChuyenDong();
    var khac = Array.prototype.slice.call(crowd.querySelectorAll('.ufo-kid:not(.is-vang):not(.is-bay)'))
      .filter(function (x) { return x !== el; });
    for (var i = khac.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = khac[i]; khac[i] = khac[j]; khac[j] = t; }
    khac = giam ? [] : khac.slice(0, luotDau ? 5 : 2);

    var p = Promise.resolve();
    khac.forEach(function (o, i) {
      p = p.then(function () { return bayToi(o, 300 + i * 70); }).then(function () {
        ship.classList.add('is-quet');
        o.classList.add('is-soi');
        sndQuet(i);
        return wait(170).then(function () { ship.classList.remove('is-quet'); o.classList.remove('is-soi'); });
      });
    });
    return p.then(function () { return bayToi(el, giam ? 0 : 650); }).then(function () {
      ship.classList.add('is-hut');
      el.classList.add('is-soi');
      sndHut();
      return wait(giam ? 200 : 450);
    }).then(function () {
      var rr = el.getBoundingClientRect(), sr = ship.getBoundingClientRect();
      var dx = sr.left + sr.width / 2 - (rr.left + rr.width / 2);
      var dy = sr.top + sr.height * 0.6 - (rr.top + rr.height / 2);
      el.classList.add('is-bay');
      el.style.transform = 'translate(' + Math.round(dx) + 'px,' + Math.round(dy) + 'px) scale(.25)';
      return wait(giam ? 150 : 900);
    }).then(function () {
      ship.classList.remove('is-hut');
      sndXong();
    });
  }

  function goi(chiDinh) {
    if (S.busy || !S.kids.length) return;
    if (!$('#ufoThe').hidden) dongThe();
    var chon = [];
    if (chiDinh) chon.push(chiDinh);
    else {
      for (var i = 0; i < S.per; i++) { var k = chonEm(chon); if (!k) break; chon.push(k); }
    }
    if (!chon.length) {
      trangThai('Cả lớp đã được gọi trong vòng này — bấm “↺ Vòng mới” để gọi lại từ đầu.');
      return;
    }
    S.busy = true;
    root.classList.add('is-busy');
    trangThai();
    var p = Promise.resolve();
    chon.forEach(function (k, i) { p = p.then(function () { return hutEm(k, i === 0); }); });
    p.then(function () {
      S.busy = false;
      root.classList.remove('is-busy');
      chon.forEach(function (k) { S.round[k.id] = { diem: null }; });
      moThe(chon);
    });
  }

  /* ---------------- the "Moi len bang" + cham diem ---------------- */
  function meta(k) {
    var m = [];
    if (k.no) m.push('Số ' + k.no);
    if (k.lastMs) {
      var d = Math.floor((Date.now() - k.lastMs) / 86400000);
      m.push('gọi gần nhất ' + (d <= 0 ? 'hôm nay' : d + ' ngày trước'));
    } else m.push('chưa được gọi lần nào');
    if (k.times) m.push('đã gọi ' + k.times + ' lần');
    if (k.avg !== null && k.avg !== undefined) m.push('điểm TB ' + k.avg);
    return m.join(' · ');
  }
  function moThe(list) {
    S.the = list.slice();
    var box = $('#ufoTheList');
    box.className = 'ufo-the-list' + (list.length > 1 ? ' is-nhieu' : '');
    $('#ufoTheTitle').textContent = list.length > 1 ? 'Mời ' + list.length + ' bạn lên bảng!' : 'Mời lên bảng!';
    box.innerHTML = list.map(function (k) {
      var nums = '';
      for (var n = 0; n <= 10; n++) nums += '<button type="button" class="ufo-num" data-act="diem" data-n="' + n + '">' + n + '</button>';
      return '<div class="ufo-the-hs" data-id="' + esc(k.id) + '">' +
        '<div class="ufo-the-ten" style="--c:' + mau(k.name) + '">' + esc(k.name) + '</div>' +
        '<div class="ufo-the-meta">' + esc(meta(k)) + '</div>' +
        '<div class="ufo-the-diem" aria-label="Chấm điểm">' + nums + '</div>' +
        '<div class="ufo-the-phu">' +
          '<button type="button" class="ufo-btn" data-act="sau">Để sau</button>' +
          '<button type="button" class="ufo-btn" data-act="vang">Vắng</button>' +
          '<span class="ufo-the-kq"></span>' +
        '</div>' +
      '</div>';
    }).join('');
    $('#ufoThe').hidden = false;
    var src = S.src.indexOf('sv:') === 0;
    $('#ufoThe').setAttribute('data-nguon', src ? 'sv' : 'ls');
    docTen('Mời ' + list.map(function (k) { return k.name; }).join(', ') + ' lên bảng');
    trangThai();
  }

  function bamThe(e) {
    var b = e.target.closest('button[data-act]');
    if (!b || b.disabled) return;
    var row = b.closest('.ufo-the-hs');
    var id = row.getAttribute('data-id');
    var k = S.kids.filter(function (x) { return x.id === id; })[0];
    if (!k) return;
    var act = b.getAttribute('data-act');
    if (act === 'diem') return chamDiem(k, +b.getAttribute('data-n'), row);
    // De sau: tra ve dam dong, van co the bi goi trong vong nay. Vang: bo qua ca buoi.
    delete S.round[k.id];
    if (act === 'vang') S.absent[k.id] = 1;
    row.classList.add('is-bo');
    row.querySelector('.ufo-the-kq').textContent = act === 'vang' ? 'Vắng hôm nay' : 'Để lượt sau';
    $all('.ufo-the-hs[data-id="' + cssId(id) + '"] button').forEach(function (x) { x.disabled = true; });
    xongHet();
  }
  function cssId(id) { return String(id).replace(/["\\]/g, '\\$&'); }

  function chamDiem(k, diem, row) {
    var nut = Array.prototype.slice.call(row.querySelectorAll('button'));
    nut.forEach(function (x) { x.disabled = true; });
    var kq = row.querySelector('.ufo-the-kq');
    kq.textContent = 'Đang lưu…';
    var luu;
    if (S.src.indexOf('sv:') === 0) {
      luu = api('/api/admin/oral', { method: 'POST', body: JSON.stringify({ classId: S.src.slice(3), rosterId: k.id, score: diem }) });
    } else {
      var lists = docDs();
      lists.forEach(function (l) {
        if ('ls:' + l.id !== S.src) return;
        l.kids.forEach(function (x) {
          if (x.id !== k.id) return;
          x.times = (x.times || 0) + 1;
          x.lastMs = Date.now();
          x.scores = (x.scores || []).concat(diem).slice(-30);
        });
      });
      ghiDs(lists);
      luu = Promise.resolve();
    }
    luu.then(function () {
      k.times++;
      k.lastMs = Date.now();
      S.round[k.id] = { diem: diem };
      row.classList.add('is-xong');
      kq.textContent = '✓ ' + diem + ' điểm' + (S.src.indexOf('sv:') === 0 ? ' · đã lên cột Miệng' : '');
      row.querySelector('.ufo-num[data-n="' + diem + '"]').classList.add('is-chon');
      xongHet();
    }).catch(function (e) {
      nut.forEach(function (x) { x.disabled = false; });
      kq.textContent = e.message || 'Không lưu được, thử lại.';
    });
  }

  function xongHet() {
    var con = $all('.ufo-the-hs:not(.is-xong):not(.is-bo)').length;
    if (!con) setTimeout(function () { if (!$('#ufoThe').hidden) dongThe(); }, 900);
  }
  function dongThe() {
    $('#ufoThe').hidden = true;
    S.the = [];
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    veDam();
  }

  /* ---------------- bang phu: mat khau / danh sach nhanh / tung em ---------------- */
  function moPanel(html) {
    $('#ufoPanelCard').innerHTML = html;
    $('#ufoPanel').hidden = false;
    var f = $('#ufoPanelCard').querySelector('input, textarea, button');
    if (f) f.focus();
  }
  function dongPanel() { $('#ufoPanel').hidden = true; $('#ufoPanelCard').innerHTML = ''; }

  function moKhoa(loi) {
    moPanel(
      '<h2>Lớp trên hệ thống</h2>' +
      '<p>Nhập mật khẩu quản trị để lấy danh sách lớp. Điểm chấm sẽ lên cột “Miệng” ở bảng lớp.</p>' +
      '<form class="ufo-form" id="ufoKhoa">' +
        '<input type="password" id="ufoPw" placeholder="Mật khẩu quản trị" autocomplete="current-password" required>' +
        '<div class="ufo-form-act"><button type="button" class="ufo-btn" data-dong>Huỷ</button><button type="submit" class="ufo-go ufo-go-sm">Mở danh sách</button></div>' +
      '</form>' +
      '<p class="ufo-loi" id="ufoLoi"' + (loi ? '' : ' hidden') + '>' + esc(loi || '') + '</p>'
    );
    $('#ufoPanelCard [data-dong]').addEventListener('click', dongPanel);
    $('#ufoKhoa').addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem(PW_KEY, $('#ufoPw').value); } catch (x) { /* bo qua */ }
      napLop().then(function () {
        if (!S.classes.length) {
          var l = $('#ufoLoi');
          l.hidden = false;
          l.textContent = pw() ? 'Chưa có lớp nào trên hệ thống.' : 'Mật khẩu không đúng.';
          return;
        }
        dongPanel();
        chonNguon('sv:' + S.classes[0].id);
      });
    });
  }

  function moSua(l) {
    moPanel(
      '<h2>' + (l ? 'Sửa danh sách' : 'Tạo danh sách nhanh') + '</h2>' +
      '<p>Mỗi dòng một tên. Danh sách chỉ lưu trên trình duyệt của máy này, không gửi lên mạng.</p>' +
      '<form class="ufo-form" id="ufoSua">' +
        '<input type="text" id="ufoTenDs" placeholder="Tên lớp, ví dụ: HSK2 tối thứ 3" maxlength="60" required value="' + esc(l ? l.name : '') + '">' +
        '<textarea id="ufoDsTen" rows="10" placeholder="Nguyễn Văn An&#10;Trần Thị Bình&#10;…" required>' + esc(l ? l.kids.map(function (k) { return k.name; }).join('\n') : '') + '</textarea>' +
        '<div class="ufo-form-act">' +
          (l ? '<button type="button" class="ufo-btn ufo-btn-xoa" id="ufoXoaDs">Xoá danh sách</button>' : '') +
          '<button type="button" class="ufo-btn" data-dong>Huỷ</button>' +
          '<button type="submit" class="ufo-go ufo-go-sm">Lưu</button>' +
        '</div>' +
      '</form>'
    );
    $('#ufoPanelCard [data-dong]').addEventListener('click', dongPanel);
    var xoa = $('#ufoXoaDs');
    if (xoa) xoa.addEventListener('click', function () {
      if (!window.confirm('Xoá danh sách “' + l.name + '” khỏi máy này?')) return;
      ghiDs(docDs().filter(function (x) { return x.id !== l.id; }));
      S.src = '';
      dongPanel();
      chonDau();
    });
    $('#ufoSua').addEventListener('submit', function (e) {
      e.preventDefault();
      var ten = $('#ufoTenDs').value.trim();
      var cu = {};
      if (l) l.kids.forEach(function (k) { cu[k.name.toLowerCase()] = k; });
      var thay = {};
      var kids = $('#ufoDsTen').value.split(/\r?\n/).map(function (s) {
        return s.replace(/^\s*\d+[.)\-\s]+/, '').replace(/\s+/g, ' ').trim();
      }).filter(function (s) {
        var key = s.toLowerCase();
        if (!s || thay[key]) return false;
        thay[key] = 1;
        return true;
      }).map(function (s, i) {
        // Giu lai lich su goi cua em co ten trung voi danh sach cu
        return cu[s.toLowerCase()] || { id: 'k' + Date.now().toString(36) + i, name: s, times: 0, lastMs: 0, scores: [] };
      });
      if (!ten || !kids.length) return;
      var lists = docDs();
      if (l) lists = lists.map(function (x) { return x.id === l.id ? { id: l.id, name: ten, kids: kids } : x; });
      else { l = { id: 'l' + Date.now().toString(36), name: ten, kids: kids }; lists.push(l); }
      ghiDs(lists);
      dongPanel();
      chonNguon('ls:' + l.id);
    });
  }

  function xemEm(id) {
    var k = S.kids.filter(function (x) { return x.id === id; })[0];
    if (!k) return;
    var vang = !!S.absent[id], daGoi = !!S.round[id];
    moPanel(
      '<h2 class="ufo-xem-ten" style="--c:' + mau(k.name) + '">' + esc(k.name) + '</h2>' +
      '<p>' + esc(meta(k)) + (daGoi ? ' · đã gọi trong vòng này' : '') + '</p>' +
      '<div class="ufo-form-act">' +
        '<button type="button" class="ufo-btn" data-x="vang">' + (vang ? 'Có mặt' : 'Vắng hôm nay') + '</button>' +
        (daGoi ? '<button type="button" class="ufo-btn" data-x="lai">Cho vào lại vòng này</button>' : '') +
        '<button type="button" class="ufo-btn" data-dong>Đóng</button>' +
        (vang ? '' : '<button type="button" class="ufo-go ufo-go-sm" data-x="goi">🛸 Gọi bạn này</button>') +
      '</div>'
    );
    $('#ufoPanelCard [data-dong]').addEventListener('click', dongPanel);
    $all('#ufoPanelCard [data-x]').forEach(function (b) {
      b.addEventListener('click', function () {
        var x = b.getAttribute('data-x');
        dongPanel();
        if (x === 'vang') { if (vang) delete S.absent[id]; else { S.absent[id] = 1; delete S.round[id]; } veDam(); }
        else if (x === 'lai') { delete S.round[id]; veDam(); }
        else if (x === 'goi') { delete S.round[id]; goi(k); }
      });
    });
  }

  /* ---------------- mo / dong / phim tat ---------------- */
  function toanManHinh() {
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* bo qua */ });
  }

  function phim(e) {
    if (!root || root.hidden) return;
    var trongO = e.target && /input|select|textarea/i.test(e.target.tagName);
    if (e.key === 'Escape') {
      e.stopImmediatePropagation();
      if (!$('#ufoPanel').hidden) dongPanel();
      else if (!$('#ufoThe').hidden) dongThe();
      else if (!document.fullscreenElement) dong();
      return;
    }
    if (trongO) return;
    // Man UFO dang mo thi phim tat cua tro choi phia sau khong duoc chay
    e.stopImmediatePropagation();
    if (!$('#ufoPanel').hidden) return;
    if (e.code === 'Space' || e.key === 'Enter' && e.target === document.body) {
      e.preventDefault();
      if (!$('#ufoThe').hidden) dongThe();
      goi();
    } else if (e.key === 'f' || e.key === 'F') {
      toanManHinh();
    } else if (e.key >= '1' && e.key <= '3' && $('#ufoThe').hidden) {
      S.per = +e.key; luuPref(); veNut();
    }
  }

  function chonDau() {
    napNguon();
    veNut();
    if (S.src && coNguon(S.src)) return chonNguon(S.src);
    if (S.classes.length) return chonNguon('sv:' + S.classes[0].id);
    var l = docDs();
    if (l.length) return chonNguon('ls:' + l[0].id);
    S.src = '';
    S.kids = [];
    veDam();
    moSua(null);
  }

  function mo() {
    if (!S.built) dung();
    napPref();
    root.hidden = false;
    document.documentElement.classList.add('ufo-open');
    datTau(-ship.offsetWidth - 40, 40, 0);
    napLop().then(chonDau).then(function () { veNghi(); });
  }
  function dong() {
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    dongPanel();
    $('#ufoThe').hidden = true;
    root.hidden = true;
    document.documentElement.classList.remove('ufo-open');
  }

  window.LopUfo = { mo: mo, dong: dong };
})();
