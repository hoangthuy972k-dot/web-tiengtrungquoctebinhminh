/* Rung Chuong Vang — tro choi kieu truyen hinh cho Che do lop hoc.
   Ca lop "ngoi tren san thi dau"; moi cau ai sai (hoac khong tra loi) thi roi san.
   Hai che do:
   · Offline: hoc sinh viet dap an len bang con, giao vien bam vao o cua ban sai.
   · Online: moi em tra loi tren dien thoai (/choi), may chu (live.js kieu 'chuong')
     tu loai ban sai khi lat dap an.
   Co cau cuu tro (chi ban da roi san tra loi), phao may bay giay (1 lan, khi san
   con 1 ban) va cau cuoi la Cau Chuong Vang.
   Mo bang window.LopChuong.mo({ cau: [cau trac nghiem], nhan: 'ten bai' }). */
(function () {
  'use strict';

  var PW_KEY = 'hyv_admin_pw';
  var LIST_KEY = 'hyv_ufo_lists';
  var PREF_KEY = 'hyv_rc_pref';
  var CHU = ['A', 'B', 'C', 'D'];
  var VONG = 2 * Math.PI * 54; // chu vi vong dong ho (r = 54)
  var TIEU_DE = 'Nhà Hán ngữ tài ba';

  var S = {
    built: false, goc: [], nhan: '', tuDo: false,
    // cai dat (luu tren may)
    cheDo: 'off', src: 'so', soNum: 30, soCau: 10, giay: 20, nguong: 0, toiDa: 10, luotCuu: 2,
    tieuDe: TIEU_DE, sound: true,
    // danh sach lop
    classes: [], kids: [], vang: {}, dangTaiDs: false,
    // tran dau
    pha: 'sanh', ds: [], cau: [], du: [], i: -1, q: null, cuu: false, danh: {},
    cuuCon: 2, phaoCon: 1, tin: '', roiVua: 0, gio: null, ban: false, hieuUng: {}, choDapAn: false, le: false,
    panelKhoa: false,
    // phong online
    room: null, poll: 0, info: null, dangTai: false
  };
  var root;

  /* ---------------- tien ich ---------------- */
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
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function giam() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function online() { return S.cheDo === 'on'; }
  function boQua() { /* bo qua */ }

  /* ---------------- am thanh (WebAudio, khong can file) ---------------- */
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
      g.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g); g.connect(ac.destination);
      o.start(t0); o.stop(t0 + dur + 0.03);
    } catch (e) { /* bo qua */ }
  }
  function sndKenLenh() { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.16, i * 0.11); }); tone(1319, 0.5, 'triangle', 0.14, 0.46); }
  function sndCau() { tone(660, 0.12, 'triangle', 0.14); tone(880, 0.22, 'triangle', 0.12, 0.1); }
  function sndBatDau() { tone(988, 0.08, 'square', 0.06); tone(1319, 0.16, 'square', 0.05, 0.08); }
  function sndTick(con) { tone(con <= 3 ? 1400 : 1100, 0.05, 'square', 0.05); }
  function sndHet() { tone(220, 0.55, 'sawtooth', 0.12); tone(165, 0.65, 'sawtooth', 0.1, 0.05); }
  function sndLat() { tone(880, 0.12, 'triangle', 0.18); tone(1175, 0.3, 'triangle', 0.16, 0.1); }
  function sndRoi() { tone(420, 0.7, 'sine', 0.12, 0, 110); tone(300, 0.6, 'triangle', 0.06, 0.08, 90); }
  function sndCuu() { [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, 0.18, 'sine', 0.13, i * 0.08); }); }
  function sndMayBay() { tone(260, 1.9, 'sine', 0.06, 0, 900); tone(520, 1.9, 'triangle', 0.03, 0.1, 1500); }
  function sndChuong() {
    // tieng chuong: vai hoa am khong dieu hoa, tat dan
    [0, 0.7, 1.4].forEach(function (t) {
      var f = 784;
      tone(f, 2.4, 'sine', 0.22, t); tone(f * 2, 1.7, 'sine', 0.1, t);
      tone(f * 2.76, 1.2, 'sine', 0.07, t); tone(f * 5.4, 0.6, 'sine', 0.03, t);
    });
  }

  /* ---------------- tuy chon giao vien ---------------- */
  function luuPref() {
    ghiLS(PREF_KEY, { cheDo: S.cheDo, src: S.src, soNum: S.soNum, soCau: S.soCau, giay: S.giay, nguong: S.nguong,
      toiDa: S.toiDa, luotCuu: S.luotCuu, tieuDe: S.tieuDe, sound: S.sound });
  }
  function napPref() {
    var p = docLS(PREF_KEY, {}) || {};
    S.cheDo = p.cheDo === 'on' ? 'on' : 'off';
    S.src = typeof p.src === 'string' && p.src ? p.src : 'so';
    S.soNum = p.soNum >= 1 && p.soNum <= 100 ? p.soNum : 30;
    S.soCau = [10, 12, 15, 20, 0].indexOf(p.soCau) >= 0 ? p.soCau : 10;
    S.giay = [10, 15, 20, 30].indexOf(p.giay) >= 0 ? p.giay : 20;
    S.nguong = [0, 3, 5, 10, 16, 20].indexOf(p.nguong) >= 0 ? p.nguong : 0;
    S.toiDa = [5, 10, 20, 0].indexOf(p.toiDa) >= 0 ? p.toiDa : 10;
    S.luotCuu = [1, 2, 3].indexOf(p.luotCuu) >= 0 ? p.luotCuu : 2;
    S.tieuDe = typeof p.tieuDe === 'string' && p.tieuDe.trim() ? p.tieuDe.slice(0, 60) : TIEU_DE;
    S.sound = p.sound !== false;
  }

  /* ---------------- danh sach lop ---------------- */
  function docDs() { var l = docLS(LIST_KEY, []); return Array.isArray(l) ? l : []; }
  function timDs(id) { var l = docDs(); for (var i = 0; i < l.length; i++) if (l[i].id === id) return l[i]; return null; }
  function apiAdmin(path) {
    return fetch(path, { headers: { 'X-Admin-Password': pw() } }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d && d.error ? d.error : 'Lỗi máy chủ.'); e.status = r.status; throw e; }
        return d;
      });
    });
  }
  function napLop() {
    if (!pw()) { S.classes = []; return Promise.resolve(); }
    return apiAdmin('/api/admin/oral').then(function (d) { S.classes = d.classes || []; })
      .catch(function (e) {
        if (e && (e.status === 401 || e.status === 403)) { try { sessionStorage.removeItem(PW_KEY); } catch (x) { /* bo qua */ } }
        S.classes = [];
      });
  }
  function coNguon(v) {
    if (v === 'so') return true;
    if (v.indexOf('sv:') === 0) return S.classes.some(function (c) { return 'sv:' + c.id === v; });
    if (v.indexOf('ls:') === 0) return !!timDs(v.slice(3));
    return false;
  }
  function chonNguon(v) {
    if (!coNguon(v)) v = 'so';
    S.src = v;
    S.vang = {};
    S.kids = [];
    luuPref();
    if (v.indexOf('ls:') === 0) {
      var l = timDs(v.slice(3));
      S.kids = l ? l.kids.slice(0, 100).map(function (k) { return { id: String(k.id), name: k.name }; }) : [];
      return Promise.resolve().then(sauNguon);
    }
    if (v.indexOf('sv:') === 0) {
      S.dangTaiDs = true;
      veChinh();
      return apiAdmin('/api/admin/oral?classId=' + encodeURIComponent(v.slice(3))).then(function (d) {
        S.kids = (d.roster || []).slice(0, 100).map(function (r) { return { id: String(r.id), name: r.name }; });
      }).catch(function (e) {
        if (e && (e.status === 401 || e.status === 403)) {
          try { sessionStorage.removeItem(PW_KEY); } catch (x) { /* bo qua */ }
          S.classes = [];
          S.src = 'so';
          moKhoa('Mật khẩu không đúng hoặc đã hết phiên. Nhập lại nhé.');
        } else baoNhanh(e && e.message ? e.message : 'Không tải được danh sách lớp.');
      }).then(function () { S.dangTaiDs = false; sauNguon(); });
    }
    return Promise.resolve().then(sauNguon);
  }
  function sauNguon() {
    napNguon();
    if (S.pha === 'sanh' && !online()) S.ds = dsOffline();
    veChinh();
  }
  function napNguon() {
    var o = ['<option value="so">🔢 Chỉ đánh số (1…' + S.soNum + ')</option>'];
    S.classes.forEach(function (c) {
      o.push('<option value="sv:' + esc(c.id) + '">🏫 ' + esc(c.name) + ' (' + c.size + ')</option>');
    });
    if (!S.classes.length) o.push('<option value="key">🔑 Lớp trên hệ thống (cần mật khẩu)…</option>');
    docDs().forEach(function (l) {
      o.push('<option value="ls:' + esc(l.id) + '">📋 ' + esc(l.name) + ' (' + l.kids.length + ')</option>');
    });
    o.push('<option value="new">＋ Tạo danh sách nhanh…</option>');
    var sel = $('#rcSrc');
    sel.innerHTML = o.join('');
    sel.value = S.src;
  }
  function tenNguon() {
    if (S.src === 'so') return 'Chỉ đánh số 1…' + S.soNum;
    var t = $('#rcSrc').options[$('#rcSrc').selectedIndex];
    return t ? t.textContent : '';
  }
  // Nguoi choi offline lay tu danh sach (bo ban vang) hoac danh so 1..N
  function dsOffline() {
    var out = [];
    if (S.src === 'so') {
      for (var n = 1; n <= S.soNum; n++) if (!S.vang['n' + n]) out.push(nguoiMoi('n' + n, n, ''));
    } else {
      S.kids.forEach(function (k, i) { if (!S.vang[k.id]) out.push(nguoiMoi(k.id, i + 1, k.name)); });
    }
    return out;
  }
  function nguoiMoi(id, so, ten) {
    return { id: id, so: so, ten: ten, con: true, diem: 0, roiCau: 0, roiLuc: 0, vang: false, daTL: false, chon: -1, muon: false, cuuSo: 0 };
  }

  /* ---------------- phong online (live.js kieu 'chuong') ---------------- */
  function live(method, path, body) {
    var r = S.room;
    if (!r) return Promise.reject(new Error('Chưa mở phòng online.'));
    var url = '/api/live/' + r.ma + '/' + path + (method === 'GET' ? '?khoa=' + encodeURIComponent(r.khoa) : '');
    return fetch(url, {
      method: method,
      headers: method === 'GET' ? {} : { 'Content-Type': 'application/json' },
      body: method === 'GET' ? undefined : JSON.stringify(Object.assign({ khoa: r.khoa }, body || {})),
      cache: 'no-store'
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (d) {
        if (!res.ok) { var e = new Error(d.error || 'Lỗi kết nối'); e.status = res.status; throw e; }
        return d;
      });
    });
  }
  function moPhong() {
    if (S.room) return Promise.resolve();
    return fetch('/api/live/tao', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kieu: 'chuong' }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { if (!r.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; }); })
      .then(function (d) {
        S.room = { ma: d.ma, khoa: d.khoa };
        S.ds = [];
        clearInterval(S.poll);
        S.poll = setInterval(tai, 1000);
        return tai();
      });
  }
  function dongPhong() {
    clearInterval(S.poll);
    if (!S.room) return;
    live('POST', 'xong', { dong: true }).catch(boQua);
    S.room = null;
    S.info = null;
  }
  function linkChoi() { return location.origin + '/choi?ma=' + S.room.ma; }
  function tai(veLaiCau) {
    if (!S.room || S.dangTai) return Promise.resolve();
    var r = S.room;
    S.dangTai = true;
    return live('GET', 'gv').then(function (d) {
      S.dangTai = false;
      if (S.room !== r || root.hidden) return;
      S.info = d;
      napDsSv(d.ds);
      if (S.pha === 'sanh') veNguoiVao();
      else if (S.pha !== 'het') { veLuoi(); veBen(); veGioDem(); if (veLaiCau || S.pha === 'moi') veCau(); }
    }).catch(function () { S.dangTai = false; /* mang chap chon: lan sau thu lai */ });
  }
  // Chep danh sach tu may chu, danh dau o vua roi san / vua tro lai de chay hieu ung
  function napDsSv(ds) {
    var cu = {}, k = 0;
    S.ds.forEach(function (x) { cu[x.id] = x; });
    S.ds = (ds || []).map(function (x) {
      var c = cu[x.pid];
      if (c && c.con && !x.con) hieuUng(x.pid, 'is-roi-moi', Math.min(1500, (k++) * 45));
      else if (c && !c.con && x.con) hieuUng(x.pid, 'is-ve-moi', 0);
      return { id: x.pid, so: x.so, ten: x.ten, con: x.con, diem: x.diem, roiCau: x.roiCau, roiLuc: x.roiLuc, vang: x.vang,
        daTL: x.daTL, chon: x.chon, muon: x.muon, cuuSo: x.cuuSo };
    });
  }
  function hieuUng(id, cls, tre) { S.hieuUng[id] = { cls: cls, den: Date.now() + 1600 + (tre || 0), tre: tre || 0 }; }

  /* ---------------- cau hoi ---------------- */
  function chuanCau(q) {
    // dap an dung trong du lieu thuong o vi tri dau — tron, toi da 4 phuong an
    var idx = q.options.map(function (_, i) { return i; }).filter(function (i) { return i !== q.answer; });
    idx = tron(tron(idx).slice(0, 3).concat([q.answer]));
    return {
      pre: q.pre || '', post: q.post || '', noBlank: !!q.noBlank, ctx: q.context || '', why: q.why || '',
      opts: idx.map(function (i) { return String(q.options[i]); }), dung: idx.indexOf(q.answer), cuoi: false, tuDo: false
    };
  }
  function cauTuDo() { return { pre: '', post: '', noBlank: true, ctx: '', why: '', opts: ['', '', '', ''], dung: -1, cuoi: false, tuDo: true }; }
  function zhCau(q) {
    if (q.tuDo) return '';
    return (q.ctx ? '🗣️ ' + q.ctx + '\n' : '') + q.pre + (q.noBlank ? '' : '＿＿') + q.post;
  }
  function cacSoCau() {
    if (S.tuDo) return [10, 12, 15, 20];
    var n = S.goc.length;
    var l = [10, 12, 15, 20].filter(function (x) { return x <= n; });
    return l.length ? l : [n];
  }
  function soCauChon() {
    var l = cacSoCau();
    return l.indexOf(S.soCau) >= 0 ? S.soCau : l[l.length - 1] >= 10 && l.indexOf(10) >= 0 ? 10 : l[0];
  }
  function giayCau() {
    if (S.q && S.q.cuoi) return Math.ceil(S.giay * 1.5 / 5) * 5; // Cau Chuong Vang duoc lau hon
    return S.giay;
  }
  function nguong() { return S.nguong > 0 ? S.nguong : Math.max(2, Math.min(16, Math.ceil(S.ds.length * 0.1))); }
  function soCon() { var n = 0; S.ds.forEach(function (x) { if (x.con) n++; }); return n; }
  function soRoi() { return S.ds.length - soCon(); }
  function timNg(id) { for (var i = 0; i < S.ds.length; i++) if (S.ds[i].id === id) return S.ds[i]; return null; }
  function tenNg(x) { return x ? (x.ten ? x.ten : 'Số ' + x.so) : ''; }
  function cauCuoiXong() { return S.pha === 'xong' && !S.cuu && S.i === S.cau.length - 1; }

  /* ---------------- dung khung ---------------- */
  var CHUONG_SVG =
    '<svg viewBox="0 0 100 110" aria-hidden="true"><defs><linearGradient id="rcVangG" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#fff6b8"/><stop offset=".45" stop-color="#f5c518"/><stop offset="1" stop-color="#a87a06"/></linearGradient></defs>' +
      '<circle cx="50" cy="10" r="7" fill="url(#rcVangG)" stroke="#7a5804" stroke-width="2"/>' +
      '<path d="M50 15c-19 0-29 15-29 33v20L11 82h78L79 68V48c0-18-10-33-29-33z" fill="url(#rcVangG)" stroke="#7a5804" stroke-width="2.5"/>' +
      '<path d="M33 40c2-9 8-14 15-15" fill="none" stroke="#fffbe0" stroke-width="5" stroke-linecap="round" opacity=".75"/>' +
      '<rect x="7" y="80" width="86" height="9" rx="4.5" fill="#d9a514" stroke="#7a5804" stroke-width="2"/>' +
      '<circle cx="50" cy="98" r="9" fill="url(#rcVangG)" stroke="#7a5804" stroke-width="2"/>' +
    '</svg>';
  var MAYBAY_SVG =
    '<svg viewBox="0 0 80 60" aria-hidden="true"><path d="M2 30 78 2 52 58 38 36z" fill="#fff" stroke="#9fb3ff" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M38 36 78 2 30 32z" fill="#dfe6ff"/><path d="M38 36l-3 17 11-11z" fill="#c4d0ff"/></svg>';

  function dung() {
    root = document.createElement('div');
    root.id = 'lopChuong';
    root.className = 'rc';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Rung Chuông Vàng');
    root.innerHTML =
      '<div class="rc-tia" aria-hidden="true"></div>' +
      '<header class="rc-bar">' +
        '<b class="rc-logo"><span class="rc-logo-chuong">' + CHUONG_SVG + '</span>RUNG CHUÔNG VÀNG</b>' +
        '<input type="text" class="rc-tieude" id="rcTieuDe" maxlength="60" aria-label="Tên chương trình" title="Bấm để đổi tên chương trình">' +
        '<span class="rc-nhan" id="rcNhan"></span>' +
        '<span class="rc-gap"></span>' +
        '<select class="rc-src" id="rcSrc" aria-label="Chọn lớp"></select>' +
        '<button type="button" class="rc-btn" id="rcLop">👥 Quản lý lớp</button>' +
        '<button type="button" class="rc-btn" id="rcQr" hidden>📱 Thẻ QR</button>' +
        '<span class="rc-socau" id="rcSoCau"></span>' +
        '<button type="button" class="rc-btn rc-ic" id="rcSound"></button>' +
        '<button type="button" class="rc-btn rc-ic" id="rcFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="rc-btn" id="rcDong">✕ Đóng</button>' +
      '</header>' +
      '<div class="rc-than">' +
        '<main class="rc-chinh" id="rcChinh"></main>' +
        '<aside class="rc-ben" id="rcBen" hidden></aside>' +
      '</div>' +
      '<div class="rc-le" id="rcLe" hidden></div>' +
      '<div class="rc-fx" id="rcFx" aria-hidden="true"></div>' +
      '<div class="rc-panel" id="rcPanel" hidden><div class="rc-panel-card" id="rcPanelCard" role="dialog" aria-modal="true"></div></div>' +
      '<div class="rc-toast" id="rcToast" role="status" aria-live="polite" hidden></div>';
    document.body.appendChild(root);

    $('#rcSrc').addEventListener('change', doiNguon);
    $('#rcTieuDe').addEventListener('input', function () { S.tieuDe = this.value.slice(0, 60); luuPref(); });
    $('#rcTieuDe').addEventListener('blur', function () { if (!this.value.trim()) { this.value = TIEU_DE; S.tieuDe = TIEU_DE; luuPref(); } });
    $('#rcTieuDe').addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); this.blur(); } });
    $('#rcLop').addEventListener('click', moQuanLy);
    $('#rcQr').addEventListener('click', moQr);
    $('#rcSound').addEventListener('click', doiTieng);
    $('#rcFull').addEventListener('click', toanManHinh);
    $('#rcDong').addEventListener('click', dongHoi);
    $('#rcChinh').addEventListener('click', bamChinh);
    $('#rcBen').addEventListener('click', bamChinh);
    $('#rcLe').addEventListener('click', bamChinh);
    $('#rcPanel').addEventListener('click', function (e) { if (e.target.id === 'rcPanel' && !S.panelKhoa) dongPanel(); });
    // bam nut xong thi bo focus de Space/Enter khong "bam lai" nut do
    root.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('button');
      if (b) setTimeout(function () { if (document.activeElement === b) b.blur(); }, 0);
    });
    window.addEventListener('keydown', phim, true);
    S.built = true;
  }

  /* ---------------- ve: dieu phoi ---------------- */
  function veChinh() {
    if (!root || root.hidden) return;
    var c = $('#rcChinh');
    var loai = S.pha === 'sanh' ? 'sanh' : S.pha === 'het' ? 'het' : 'tran';
    root.setAttribute('data-pha', S.pha);
    root.classList.toggle('is-online', online());
    $('#rcBen').hidden = loai !== 'tran';
    if (loai === 'sanh') veSanh();
    else if (loai === 'het') veHet();
    else {
      if (c.getAttribute('data-man') !== 'tran') dungTran();
      veTran();
    }
    veBar();
  }
  function veBar() {
    var sc = $('#rcSoCau');
    if (S.pha === 'sanh' || !S.cau.length) sc.textContent = 'Câu 0 / ' + (S.cau.length || soCauChon());
    else if (S.cuu) sc.textContent = '🛟 Cứu trợ · sau câu ' + (S.i + 1);
    else sc.textContent = 'Câu ' + Math.max(0, S.i + 1) + ' / ' + S.cau.length;
    var sel = $('#rcSrc');
    sel.hidden = online();
    sel.disabled = S.pha !== 'sanh';
    $('#rcQr').hidden = !online() || !S.room;
    var s = $('#rcSound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng — bấm để tắt (M)' : 'Đang tắt tiếng — bấm để bật (M)';
    s.classList.toggle('is-off', !S.sound);
    $('#rcNhan').textContent = S.nhan;
    $('#rcNhan').hidden = !S.nhan;
  }

  /* ---------------- sanh cho: cai dat + ma QR ---------------- */
  function nutChon(k, ds, cur) {
    return '<div class="rc-chon" role="group" data-k="' + k + '">' + ds.map(function (o) {
      return '<button type="button" data-v="' + o[0] + '"' + (o[0] === cur ? ' class="is-on" aria-pressed="true"' : ' aria-pressed="false"') + '>' + o[1] + '</button>';
    }).join('') + '</div>';
  }
  function luatHtml() {
    var td = S.toiDa > 0 ? 'tối đa ' + S.toiDa + ' bạn mỗi lượt' : 'không giới hạn số bạn';
    return '<ul class="rc-luat-ds">' +
      '<li>Mỗi câu cả lớp cùng trả lời ' + (online() ? '<b>trên điện thoại</b> (bấm A–D)' : '<b>trên bảng con</b>, giơ lên khi hết giờ') +
        '. Đúng <b>+10 điểm</b> và ở lại sàn; sai hoặc không trả lời thì <b>rời sàn</b>.</li>' +
      '<li>Bạn đã rời sàn vẫn được làm tiếp để luyện tập, nhưng <b>không tính điểm</b>.</li>' +
      '<li><b>Cả sàn cùng sai</b> một câu: tất cả các bạn vừa rời sàn ở câu đó được quay lại (không cộng điểm câu đó). Không áp dụng cho Câu Chuông Vàng.</li>' +
      '<li>🛟 <b>Cứu trợ</b> (' + S.luotCuu + ' lượt): khi trên sàn còn ≤ ' + nguong() + ' bạn, cô mở một câu cứu trợ <b>chỉ dành cho các bạn đã rời sàn</b>; ai đúng thì trở lại sàn — ' + td +
        (online() ? ' (ai đúng nhanh hơn được ưu tiên)' : ' (cô chọn trong số các bạn viết đúng)') + '. Câu cứu trợ không tính điểm.</li>' +
      '<li>✈️ <b>Phao máy bay giấy</b> (1 lần): khi trên sàn chỉ còn 1 bạn (hoặc không còn ai), cô phóng máy bay giấy đưa 1 bạn đã rời sàn trở lại.</li>' +
      '<li>🔔 Câu cuối là <b>Câu Chuông Vàng</b> (' + Math.ceil(S.giay * 1.5 / 5) * 5 + ' giây). Ai còn trên sàn và trả lời đúng là đã <b>rung chuông vàng</b>!</li>' +
      '<li>Xếp hạng: còn trên sàn trước, rồi theo điểm, rồi ai rời sàn muộn hơn xếp trên.</li>' +
    '</ul>';
  }
  function veSanh() {
    if (window.NhacNen) window.NhacNen.tat();
    var c = $('#rcChinh');
    c.setAttribute('data-man', 'sanh');
    if (!online()) S.ds = dsOffline();
    var soCau = cacSoCau();
    var cur = soCauChon();
    var nTuDong = Math.max(2, Math.min(16, Math.ceil(S.ds.length * 0.1)));
    c.innerHTML =
      '<div class="rc-sanh">' +
        '<section class="rc-sanh-trai">' +
          '<div class="rc-sanh-dau"><span class="rc-sanh-chuong">' + CHUONG_SVG + '</span><div>' +
            '<h2 class="rc-sanh-tit">' + esc(S.tieuDe) + '</h2>' +
            '<p class="rc-sanh-mo">' + (S.tuDo ? 'Câu hỏi tự do — cô đọc câu hỏi, cả lớp trả lời A/B/C/D' : esc(S.nhan ? S.nhan + ' · ' : '') + S.goc.length + ' câu trắc nghiệm') + '</p>' +
          '</div></div>' +
          '<div class="rc-truong"><span>Chế độ</span>' + nutChon('cheDo', [['off', '📝 Offline — bảng con'], ['on', '📱 Online — điện thoại']], S.cheDo) + '</div>' +
          '<div class="rc-truong"><span>Số câu</span>' + nutChon('soCau', soCau.map(function (n) { return [n, n + ' câu']; }), cur) + '</div>' +
          '<div class="rc-truong"><span>Thời gian mỗi câu</span>' + nutChon('giay', [[10, '10 giây'], [15, '15 giây'], [20, '20 giây'], [30, '30 giây']], S.giay) + '</div>' +
          '<div class="rc-truong"><span>Cứu trợ khi trên sàn ≤</span>' + nutChon('nguong', [[0, 'Tự động (' + nTuDong + ')'], [3, '3'], [5, '5'], [10, '10'], [16, '16'], [20, '20']], S.nguong) + '</div>' +
          '<div class="rc-truong"><span>Số lượt cứu trợ</span>' + nutChon('luotCuu', [[1, '1 lượt'], [2, '2 lượt'], [3, '3 lượt']], S.luotCuu) + '</div>' +
          '<div class="rc-truong"><span>Mỗi lượt cứu</span>' + nutChon('toiDa', [[5, 'tối đa 5'], [10, 'tối đa 10'], [20, 'tối đa 20'], [0, 'không giới hạn']], S.toiDa) + '</div>' +
          (!online() && S.src === 'so' ? '<div class="rc-truong"><label for="rcSoNum">Số học sinh</label><input type="number" id="rcSoNum" min="1" max="100" value="' + S.soNum + '"></div>' : '') +
          '<details class="rc-luat"><summary>📜 Luật chơi</summary>' + luatHtml() + '</details>' +
        '</section>' +
        '<section class="rc-sanh-phai" id="rcSanhPhai">' + (online() ? sanhOnline() : sanhOffline()) + '</section>' +
      '</div>';
    var so = $('#rcSoNum');
    if (so) so.addEventListener('change', function () {
      S.soNum = Math.max(1, Math.min(100, parseInt(this.value, 10) || 30));
      this.value = S.soNum;
      luuPref();
      napNguon();
      veChinh();
    });
  }
  function sanhOffline() {
    var dem = demTen(S.ds);
    var nVang = Object.keys(S.vang).length;
    return '<h3 class="rc-sanh-h">Sàn thi đấu · <b>' + S.ds.length + '</b> bạn' + (nVang ? ' <small>(vắng ' + nVang + ')</small>' : '') + '</h3>' +
      '<p class="rc-sanh-goi">' + esc(tenNguon()) + ' · bấm tên để đánh dấu vắng, hoặc mở <b>👥 Quản lý lớp</b>.</p>' +
      '<div class="rc-vao-ds" id="rcVaoDs">' +
        (S.dangTaiDs ? '<p class="rc-trong">Đang tải danh sách lớp…</p>' : S.ds.length ? S.ds.map(function (x) {
          return '<button type="button" class="rc-chip" data-vang="' + esc(x.id) + '"><b>' + x.so + '</b>' + esc(tenNgan(x.ten, dem)) + '</button>';
        }).join('') : '<p class="rc-trong">Chưa có học sinh — chọn lớp ở ô phía trên hoặc nhập số học sinh.</p>') +
      '</div>' +
      '<button type="button" class="rc-go" data-act="vao">🔔 Mời cả lớp lên sàn <kbd>Enter</kbd></button>' +
      '<p class="rc-loi" id="rcLoi" role="alert"></p>';
  }
  function qrSvg() {
    try { var g = window.qrcode(0, 'M'); g.addData(linkChoi()); g.make(); return g.createSvgTag({ cellSize: 6, margin: 2, scalable: true }); } catch (e) { return ''; }
  }
  function maDep(ma) { return String(ma).slice(0, 3) + ' ' + String(ma).slice(3); }
  function sanhOnline() {
    if (!S.room) return '<p class="rc-trong">Đang mở phòng online…</p><p class="rc-loi" id="rcLoi" role="alert"></p>';
    return '<div class="rc-qr-khoi">' +
        '<div class="rc-qr">' + qrSvg() + '</div>' +
        '<div class="rc-qr-chu"><p>Quét mã QR hoặc vào</p><b class="rc-link">' + esc(location.host) + '/choi</b>' +
          '<p>Mã phòng</p><b class="rc-ma">' + maDep(S.room.ma) + '</b></div>' +
      '</div>' +
      '<h3 class="rc-sanh-h">Đã lên sàn: <b id="rcSoVao">' + S.ds.length + '</b> bạn</h3>' +
      '<div class="rc-vao-ds" id="rcVaoDs">' + chipVao() + '</div>' +
      '<button type="button" class="rc-go" data-act="vao">🔔 Mời cả lớp lên sàn <kbd>Enter</kbd></button>' +
      '<p class="rc-loi" id="rcLoi" role="alert"></p>';
  }
  function chipVao() {
    if (!S.ds.length) return '<p class="rc-trong">Chờ học sinh quét mã và nhập tên…</p>';
    return S.ds.map(function (x) { return '<span class="rc-chip"><b>' + x.so + '</b>' + esc(x.ten) + '</span>'; }).join('');
  }
  function veNguoiVao() {
    var b = $('#rcSoVao');
    if (!b) return;
    b.textContent = S.ds.length;
    $('#rcVaoDs').innerHTML = chipVao();
  }

  /* ---------------- man tran dau ---------------- */
  function dungTran() {
    var c = $('#rcChinh');
    c.setAttribute('data-man', 'tran');
    c.innerHTML =
      '<section class="rc-hoi">' +
        '<div class="rc-cau" id="rcCau"></div>' +
        '<div class="rc-gio" id="rcGio">' +
          '<div class="rc-vong"><svg viewBox="0 0 120 120" aria-hidden="true">' +
            '<circle class="rc-vong-nen" cx="60" cy="60" r="54"/>' +
            '<circle class="rc-vong-chay" id="rcVongChay" cx="60" cy="60" r="54" stroke-dasharray="' + VONG.toFixed(1) + '" transform="rotate(-90 60 60)"/>' +
          '</svg><div class="rc-vong-so"><b id="rcGiay">0</b><small>giây</small></div></div>' +
          '<p class="rc-gio-tt" id="rcGioTt"></p>' +
          '<p class="rc-gio-dem" id="rcGioDem"></p>' +
          '<div class="rc-gio-nut" id="rcGioNut"></div>' +
        '</div>' +
      '</section>' +
      '<p class="rc-tin" id="rcTin" aria-live="polite"></p>' +
      '<section class="rc-san">' +
        '<div class="rc-san-dau"><b>SÀN THI ĐẤU</b><span class="rc-chu-giai" id="rcChuGiai"></span></div>' +
        '<div class="rc-luoi" id="rcLuoi"></div>' +
      '</section>';
  }
  function veTran() {
    veCau();
    veGio();
    veGioDem();
    veLuoi();
    veBen();
    $('#rcTin').textContent = S.tin;
    $('#rcTin').hidden = !S.tin;
    var cg = $('#rcChuGiai');
    if (S.pha === 'lat' && !online()) {
      cg.innerHTML = S.cuu
        ? '<b>Bấm vào ô của các bạn viết ĐÚNG</b> để cứu (tối đa ' + (S.toiDa || 'không giới hạn') + ' bạn), rồi bấm <b>Chốt cứu trợ</b> (Enter)'
        : '<b>Bấm vào ô của các bạn viết SAI</b> (ô hiện ✗), rồi bấm <b>Chốt câu</b> (Enter)';
    } else {
      cg.textContent = 'Ô vàng: đang trên sàn – Ô mờ: đã rời sàn – Huy hiệu là điểm hiện tại (bấm vào ô để loại / khôi phục)';
    }
  }

  function veCau() {
    var el = $('#rcCau');
    if (!el) return;
    if (S.pha === 'moi') {
      el.className = 'rc-cau is-moi';
      el.innerHTML =
        '<div class="rc-moi">' +
          '<div class="rc-moi-chuong">' + CHUONG_SVG + '</div>' +
          '<div class="rc-moi-chu"><h2>Mời cả lớp lên sàn thi đấu!</h2>' +
          '<p><b>' + S.ds.length + '</b> bạn · <b>' + S.cau.length + '</b> câu · câu cuối là <b>Câu Chuông Vàng 🔔</b></p>' +
          (online() && S.room ? '<p class="rc-moi-ma">Vào muộn? Quét QR (📱 Thẻ QR) · mã <b>' + maDep(S.room.ma) + '</b> — vào trước khi bắt đầu câu 1 vẫn được lên sàn.</p>' : '') +
          '</div>' +
        '</div>';
      return;
    }
    var q = S.q;
    if (!q) { el.innerHTML = ''; return; }
    var lat = S.pha === 'lat' || S.pha === 'xong';
    var info = S.info && S.info.pha === 'lat' && online() ? S.info : null;
    var tag, phu;
    if (S.cuu) { tag = '🛟 CÂU CỨU TRỢ'; phu = 'Dành cho các bạn đã rời sàn — đúng thì trở lại sàn' + (S.toiDa ? ' (tối đa ' + S.toiDa + ' bạn)' : ''); }
    else if (q.cuoi) { tag = 'CÂU CHUÔNG VÀNG'; phu = 'Câu ' + (S.i + 1) + ' / ' + S.cau.length + ' · ' + giayCau() + ' giây'; }
    else { tag = 'CÂU ' + (S.i + 1); phu = 'Câu ' + (S.i + 1) + ' / ' + S.cau.length + ' · ' + giayCau() + ' giây'; }
    var zh;
    if (q.tuDo) zh = '<div class="rc-cau-zh rc-cau-tudo">Cô đọc câu hỏi — ' + (online() ? 'cả lớp chọn A/B/C/D trên điện thoại' : 'cả lớp viết đáp án lên bảng con') + '</div>';
    else zh = '<div class="rc-cau-zh">' + esc(q.pre) + (q.noBlank ? '' : '<span class="rc-trong-o">＿＿</span>') + esc(q.post) + '</div>';
    var hienOpt = !q.tuDo || online();
    var opts = hienOpt ? '<div class="rc-opts n' + q.opts.length + '">' + q.opts.map(function (t, i) {
      var cls = 'rc-opt';
      if (lat && q.dung >= 0) cls += i === q.dung ? ' is-dung' : ' is-mo';
      var n = info && info.phanBo && info.phanBo[i] != null ? '<span class="rc-opt-n" title="Số bạn chọn">' + info.phanBo[i] + '</span>' : '';
      var the = S.choDapAn ? 'button type="button" data-dap="' + i + '"' : 'div';
      return '<' + the + ' class="' + cls + (S.choDapAn ? ' is-bam' : '') + '"><span class="rc-opt-chu">' + CHU[i] + '</span>' +
        '<span class="rc-opt-t">' + esc(t) + '</span>' + n + '</' + (S.choDapAn ? 'button' : 'div') + '>';
    }).join('') + '</div>' : '';
    var dap = '';
    if (S.choDapAn) dap = '<div class="rc-dapan is-hoi">👉 Bấm vào đáp án đúng (hoặc phím 1–4) để lật</div>';
    else if (lat && q.dung >= 0) {
      dap = '<div class="rc-dapan">✓ Đáp án đúng: <b>' + CHU[q.dung] + (q.opts[q.dung] ? '. ' + esc(q.opts[q.dung]) : '') + '</b>' +
        (q.why ? '<span class="rc-why">💡 ' + esc(q.why) + '</span>' : '') + '</div>';
    } else if (lat && q.tuDo) dap = '<div class="rc-dapan">Cô công bố đáp án — ' + (S.pha === 'lat' ? 'bấm vào ô của các bạn sai.' : 'đã chốt.') + '</div>';
    el.className = 'rc-cau' + (q.cuoi && !S.cuu ? ' is-vang' : '') + (S.cuu ? ' is-cuu' : '');
    el.innerHTML =
      '<div class="rc-cau-dau">' +
        (q.cuoi && !S.cuu ? '<span class="rc-cau-chuong">' + CHUONG_SVG + '</span>' : '') +
        '<span class="rc-cau-so">' + tag + '</span><span class="rc-cau-phu">' + phu + '</span>' +
      '</div>' +
      (q.ctx ? '<div class="rc-cau-ctx">🗣️ ' + esc(q.ctx) + '</div>' : '') +
      zh + opts + dap;
  }

  /* ---------------- dong ho ---------------- */
  function datGio(giay) {
    dungDem();
    S.gio = { tong: giay * 1000, con: giay * 1000, chay: false, moc: 0, id: 0, giayCu: giay };
  }
  function conGio() {
    var g = S.gio;
    if (!g) return 0;
    return Math.max(0, g.chay ? g.con - (Date.now() - g.moc) : g.con);
  }
  function chayDem() {
    var g = S.gio;
    if (!g || g.chay) return;
    g.chay = true;
    g.moc = Date.now();
    clearInterval(g.id);
    g.id = setInterval(nhipGio, 100);
  }
  function dungDem() {
    var g = S.gio;
    if (!g) return;
    if (g.chay) { g.con = conGio(); g.chay = false; }
    clearInterval(g.id);
  }
  function nhipGio() {
    var con = conGio();
    var giay = Math.ceil(con / 1000);
    if (giay !== S.gio.giayCu) {
      S.gio.giayCu = giay;
      if (giay > 0 && giay <= 5) sndTick(giay);
    }
    veVong();
    if (con <= 0) hetGio();
  }
  function veVong() {
    var v = $('#rcVongChay');
    if (!v || !S.gio) return;
    var con = conGio(), tl = S.gio.tong ? con / S.gio.tong : 0;
    v.style.strokeDashoffset = (VONG * (1 - tl)).toFixed(1);
    var giay = Math.ceil(con / 1000);
    $('#rcGiay').textContent = giay;
    var g = $('#rcGio');
    g.classList.toggle('is-gap', S.pha === 'chay' && giay <= 5);
    g.classList.toggle('is-tam', S.pha === 'chay' && !S.gio.chay);
  }
  function nut(act, html, chinh) {
    return '<button type="button" class="' + (chinh ? 'rc-go' : 'rc-btn rc-btn-sang') + '" data-act="' + act + '">' + html + '</button>';
  }
  function veGio() {
    var g = $('#rcGio');
    if (!g) return;
    g.className = 'rc-gio' + (S.q && S.q.cuoi && !S.cuu ? ' is-vang' : '') + (S.pha === 'moi' ? ' is-an' : '');
    veVong();
    var tt = '', b = '';
    if (S.pha === 'moi') {
      b = nut('space', 'Bắt đầu Câu 1 ▶ <kbd>Space</kbd>', true);
    } else if (S.pha === 'doc') {
      tt = S.cuu ? 'Các bạn đã rời sàn chuẩn bị!' : S.q.cuoi ? 'Câu Chuông Vàng — sẵn sàng?' : 'Sẵn sàng?';
      b = nut('space', '▶ Bắt đầu tính giờ <kbd>Space</kbd>', true);
    } else if (S.pha === 'chay') {
      tt = S.gio.chay ? 'Đang tính giờ…' : '⏸ Tạm dừng';
      b = nut('space', S.gio.chay ? '⏸ Tạm dừng <kbd>Space</kbd>' : '▶ Chạy tiếp <kbd>Space</kbd>') + nut('enter', '👁 Lật đáp án <kbd>Enter</kbd>', true);
    } else if (S.pha === 'khoa') {
      tt = S.choDapAn ? 'Chọn đáp án đúng' : '⏰ Hết giờ!' + (online() ? '' : ' Cả lớp giơ bảng!');
      b = S.choDapAn ? '' : nut('enter', '👁 Lật đáp án <kbd>Enter</kbd>', true);
    } else if (S.pha === 'lat') {
      var n = Object.keys(S.danh).length;
      tt = S.cuu ? 'Đã chọn ' + n + ' bạn được cứu' : 'Đã đánh dấu ' + n + ' bạn sai';
      b = nut('enter', (S.cuu ? '✔ Chốt cứu trợ' : '✔ Chốt câu') + ' <kbd>Enter</kbd>', true);
    } else if (S.pha === 'xong') {
      var cuoi = cauCuoiXong();
      var vang = S.ds.some(function (x) { return x.vang; });
      tt = cuoi ? (vang ? '🔔 Có bạn rung chuông vàng!' : 'Chưa ai rung được chuông vàng') : S.cuu ? 'Đã xong câu cứu trợ' : 'Đã chốt câu ' + (S.i + 1);
      if (cuoi) b = vang ? nut('space', '🔔 Rung chuông! <kbd>Space</kbd>', true) : nut('space', '🏁 Kết thúc <kbd>Space</kbd>', true);
      else if (soCon() === 0) b = nut('ket', '🏁 Kết thúc') + (coTheCuu() && coThePhao() ? '' : '<small class="rc-gio-goi">Sàn trống — dùng phao cứu trợ bên phải?</small>');
      else b = nut('space', (S.i + 2 === S.cau.length ? '🔔 Câu Chuông Vàng ▶' : 'Câu tiếp ▶') + ' <kbd>Space</kbd>', true);
    }
    $('#rcGioTt').textContent = tt;
    $('#rcGioNut').innerHTML = b;
  }
  function veGioDem() {
    var d = $('#rcGioDem');
    if (!d) return;
    var i = S.info;
    if (online() && i && (S.pha === 'chay' || S.pha === 'khoa') && i.pha === 'hoi') {
      d.innerHTML = 'Đã trả lời <b>' + i.daTL + '</b> / ' + i.canTL;
    } else d.textContent = '';
  }

  /* ---------------- san thi dau (luoi o) ---------------- */
  function demTen(ds) {
    var dem = {};
    ds.forEach(function (x) {
      if (!x.ten) return;
      var w = String(x.ten).trim().split(/\s+/);
      var n1 = w[w.length - 1], n2 = w.slice(-2).join(' ');
      dem[n1] = (dem[n1] || 0) + 1;
      if (n2 !== n1) dem[n2] = (dem[n2] || 0) + 1;
    });
    return dem;
  }
  // Ten goi (chu cuoi); trung thi them chu dem, van trung thi ca ho ten
  function tenNgan(ten, dem) {
    if (!ten) return '';
    var w = String(ten).trim().split(/\s+/);
    var n1 = w[w.length - 1], n2 = w.slice(-2).join(' ');
    if (dem[n1] === 1) return n1;
    if (dem[n2] === 1) return n2;
    return ten;
  }
  function trangThai(x) {
    if (x.vang) return '🔔 Rung chuông vàng';
    if (x.con) return 'Đang trên sàn';
    if (x.roiCau) return 'Rời sàn ở câu ' + x.roiCau;
    if (x.muon) return 'Vào muộn — bấm để cho lên sàn';
    return 'Đã rời sàn';
  }
  function veLuoi() {
    var luoi = $('#rcLuoi');
    if (!luoi) return;
    var ds = S.ds, n = ds.length;
    if (!n) {
      luoi.removeAttribute('data-ids');
      luoi.style.gridTemplateColumns = '';
      luoi.style.gridTemplateRows = '';
      luoi.innerHTML = '<p class="rc-trong">' + (online() ? 'Chưa có bạn nào vào phòng — quét mã QR để vào.' : 'Chưa có học sinh — mở 👥 Quản lý lớp.') + '</p>';
      return;
    }
    var cot = Math.min(10, Math.max(3, Math.ceil(Math.sqrt(n * 2.4))));
    if (n < cot) cot = n;
    var hang = Math.ceil(n / cot);
    var ids = ds.map(function (x) { return x.id; }).join('|');
    if (luoi.getAttribute('data-ids') !== ids) {
      luoi.setAttribute('data-ids', ids);
      luoi.style.gridTemplateColumns = 'repeat(' + cot + ', minmax(0, 1fr))';
      luoi.style.gridTemplateRows = 'repeat(' + hang + ', minmax(0, ' + (hang <= 2 ? 120 : 96) + 'px))';
      luoi.className = 'rc-luoi' + (hang >= 8 ? ' is-day' : hang >= 5 ? ' is-vua' : '');
      var dem = demTen(ds);
      luoi.innerHTML = ds.map(function (x) {
        return '<button type="button" class="rc-o" data-id="' + esc(x.id) + '">' +
          '<span class="rc-o-so">' + x.so + '</span>' +
          '<span class="rc-o-ten">' + esc(tenNgan(x.ten, dem)) + '</span>' +
          '<span class="rc-o-diem"></span><span class="rc-o-dau" aria-hidden="true"></span>' +
        '</button>';
      }).join('');
    }
    var now = Date.now(), nut = luoi.children;
    for (var k = 0; k < ds.length && k < nut.length; k++) capNhatO(nut[k], ds[k], now);
  }
  function capNhatO(el, x, now) {
    var cls = 'rc-o' + (x.con ? ' is-con' : ' is-roi') + (x.vang ? ' is-vang' : '');
    if (online() && x.daTL && (S.pha === 'chay' || S.pha === 'khoa')) cls += ' is-tl';
    if (S.pha === 'lat' && S.danh[x.id]) cls += S.cuu ? ' is-cuu' : ' is-danh';
    if (S.pha === 'lat' && !online() && (S.cuu ? !x.con : x.con)) cls += ' is-cho';
    var hu = S.hieuUng[x.id];
    if (hu && hu.den > now) {
      cls += ' ' + hu.cls;
      el.style.animationDelay = hu.tre ? hu.tre + 'ms' : '';
    } else if (hu) { delete S.hieuUng[x.id]; el.style.animationDelay = ''; }
    if (el.className !== cls) el.className = cls;
    var d = el.querySelector('.rc-o-diem');
    var txt = x.diem + 'đ';
    if (d.textContent !== txt) d.textContent = txt;
    var t = (x.ten ? x.so + '. ' + x.ten : 'Số ' + x.so) + ' — ' + trangThai(x) + ' · ' + x.diem + ' điểm';
    if (el.title !== t) { el.title = t; el.setAttribute('aria-label', t); }
  }
  // Moi lan ve lai trong luc hieu ung con chay
  function veLaiSau(ms) { setTimeout(function () { if (!root.hidden && S.pha !== 'sanh' && S.pha !== 'het') veLuoi(); }, ms); }

  /* ---------------- thanh ben: tren san, bac thang, quyen tro giup ---------------- */
  function veBen() {
    var b = $('#rcBen');
    if (!b || b.hidden) return;
    var con = soCon(), tong = S.ds.length;
    var tin = tong && con === tong ? 'Chưa ai rời sàn' : S.pha === 'xong' && S.roiVua ? S.roiVua + ' em vừa rời sàn' : tong ? 'Đã rời sàn: ' + (tong - con) + ' bạn' : '';
    var N = S.cau.length, thang = '';
    for (var i = N - 1; i >= 0; i--) {
      var qua = i < S.i || (i === S.i && (S.pha === 'xong' || S.cuu));
      var nay = i === S.i && !qua && S.pha !== 'moi';
      thang += '<li class="' + (i === N - 1 ? 'is-dinh' : '') + (qua ? ' is-qua' : '') + (nay ? ' is-nay' : '') + '">' +
        (i === N - 1 ? 'Câu Chuông Vàng 🔔' : 'Câu ' + (i + 1)) + (qua ? '<i>✓</i>' : '') + '</li>';
    }
    var lyCuu = coTheCuu(), lyPhao = coThePhao();
    b.innerHTML =
      '<div class="rc-tren"><small>TRÊN SÀN</small><b><span>' + con + '</span>/' + tong + '</b><em>' + esc(tin) + '</em></div>' +
      '<div class="rc-thang"><h3>' + CHUONG_SVG + 'CHUÔNG VÀNG</h3><ol>' + thang + '</ol></div>' +
      '<div class="rc-phao">' +
        '<button type="button" class="rc-tg' + (lyCuu ? ' is-khoa' : ' is-san') + (S.cuuCon <= 0 ? ' is-het' : '') + '" data-act="cuu" title="' + esc(lyCuu || 'Bấm để mở câu cứu trợ') + '">' +
          '<span class="rc-tg-ic">🛟</span><span><b>Cứu trợ: ' + (S.cuuCon > 0 ? 'còn ' + S.cuuCon + ' lượt' : 'hết lượt') + '</b>' +
          '<small>Khi trên sàn ≤ ' + nguong() + ' bạn · phím C</small></span></button>' +
        '<button type="button" class="rc-tg' + (lyPhao ? ' is-khoa' : ' is-san') + (S.phaoCon <= 0 ? ' is-het' : '') + '" data-act="phao" title="' + esc(lyPhao || 'Bấm để phóng máy bay giấy') + '">' +
          '<span class="rc-tg-ic">✈️</span><span><b>Phao máy bay giấy: ' + (S.phaoCon > 0 ? 'còn 1 lần' : 'đã dùng') + '</b>' +
          '<small>Khi trên sàn còn 1 bạn · phím P</small></span></button>' +
      '</div>' +
      '<p class="rc-phim"><kbd>Space</kbd> giờ / tiếp · <kbd>Enter</kbd> lật / chốt · <kbd>C</kbd> <kbd>P</kbd> <kbd>F</kbd> <kbd>M</kbd> · <kbd>Esc</kbd></p>';
  }
  function coTheCuu() {
    if (S.cuuCon <= 0) return 'Đã dùng hết lượt cứu trợ.';
    if (S.pha !== 'xong') return 'Chỉ dùng được giữa hai câu (sau khi chốt câu).';
    if (cauCuoiXong()) return 'Đã xong Câu Chuông Vàng.';
    if (!soRoi()) return 'Chưa có bạn nào rời sàn.';
    if (soCon() > nguong()) return 'Chỉ dùng khi trên sàn còn ≤ ' + nguong() + ' bạn (đang có ' + soCon() + ').';
    return '';
  }
  function coThePhao() {
    if (S.phaoCon <= 0) return 'Đã dùng phao máy bay giấy.';
    if (!(S.pha === 'xong' || (S.pha === 'doc' && !S.cuu))) return 'Chỉ dùng được giữa hai câu.';
    if (cauCuoiXong()) return 'Đã xong Câu Chuông Vàng.';
    if (soCon() > 1) return 'Chỉ dùng khi trên sàn còn 1 bạn (hoặc không còn ai) — đang có ' + soCon() + '.';
    if (!soRoi()) return 'Chưa có bạn nào rời sàn.';
    return '';
  }

  /* ---------------- dien bien tran dau ---------------- */
  function batDauTran() {
    if (S.ban) return;
    var loi = $('#rcLoi');
    if (online() && !S.room) { if (loi) loi.textContent = 'Chưa mở được phòng online.'; return; }
    if (!online()) S.ds = dsOffline();
    if (!S.ds.length) { if (loi) loi.textContent = online() ? 'Chưa có bạn nào vào phòng — chờ cả lớp quét mã QR nhé.' : 'Chưa có học sinh nào trên sàn.'; return; }
    var n = soCauChon();
    if (S.tuDo) { S.cau = []; for (var k = 0; k < n; k++) S.cau.push(cauTuDo()); S.du = []; }
    else {
      var xao = tron(S.goc);
      S.cau = xao.slice(0, n).map(chuanCau);
      S.du = xao.slice(n); // cau con lai de lam cau cuu tro
    }
    S.cau[S.cau.length - 1].cuoi = true;
    S.i = -1; S.q = null; S.cuu = false; S.danh = {}; S.tin = ''; S.roiVua = 0; S.choDapAn = false; S.le = false;
    S.cuuCon = S.luotCuu; S.phaoCon = 1; S.hieuUng = {};
    var mo = function () {
      S.pha = 'moi';
      S.ds.forEach(function (x, i) { hieuUng(x.id, 'is-len', Math.min(1800, i * 25)); });
      veChinh();
      veLaiSau(3600);
      sndKenLenh();
    };
    if (online()) {
      S.ban = true;
      live('POST', 'batdau', { sanh: true }).then(function (d) {
        S.ban = false;
        S.ds = []; napDsSv(d.ds);
        mo();
      }).catch(function (e) { S.ban = false; if (loi) loi.textContent = e.message; });
    } else mo();
    if (window.NhacNen) window.NhacNen.bat({ kieu: 'gap' });
  }

  function cauTiep() {
    if (S.ban) return;
    if (S.i + 1 >= S.cau.length) { ketThuc(); return; }
    if (S.i >= 0 && soCon() === 0) { baoNhanh('Không còn ai trên sàn — dùng Cứu trợ (C), Phao máy bay giấy (P) hoặc bấm Kết thúc.'); return; }
    S.i++;
    S.cuu = false; S.q = S.cau[S.i]; S.danh = {}; S.choDapAn = false; S.roiVua = 0; S.tin = '';
    S.pha = 'doc';
    datGio(giayCau());
    veChinh();
    if (S.q.cuoi) sndChuong(); else sndCau();
  }

  function batDauGio() {
    if (S.ban) return;
    var chay = function () { S.pha = 'chay'; chayDem(); veChinh(); sndBatDau(); };
    if (!online()) { chay(); return; }
    S.ban = true;
    var q = S.q;
    live('POST', 'cau', {
      zh: q.tuDo ? 'Câu ' + (S.i + 1) + ': nghe cô đọc câu hỏi' : zhCau(q), opts: q.opts, dung: q.dung,
      secs: giayCau(), so: S.i + 1, tong: S.cau.length, cuoi: !!q.cuoi && !S.cuu, cuu: S.cuu, toiDa: S.toiDa
    }).then(function () { S.ban = false; chay(); tai(); })
      .catch(function (e) { S.ban = false; baoNhanh('Chưa gửi được câu hỏi: ' + e.message); });
  }
  function tamDung() {
    if (S.pha !== 'chay' || S.ban) return;
    if (S.gio.chay) dungDem(); else chayDem();
    if (online()) live('POST', 'gio', { chay: S.gio.chay }).catch(boQua);
    veGio();
  }
  function hetGio() {
    dungDem();
    if (S.gio) S.gio.con = 0;
    if (S.pha !== 'chay') return;
    S.pha = 'khoa';
    sndHet();
    if (online()) live('POST', 'gio', { het: true }).catch(boQua);
    veChinh();
  }

  function latCau() {
    if (S.ban || (S.pha !== 'chay' && S.pha !== 'khoa')) return;
    dungDem();
    if (!online()) {
      S.pha = 'lat';
      S.danh = {};
      sndLat();
      veChinh();
      return;
    }
    if (S.q.dung < 0) {
      // cau tu do online: co bam dap an dung truoc khi lat
      if (S.pha === 'chay') { S.pha = 'khoa'; live('POST', 'gio', { het: true }).catch(boQua); }
      S.choDapAn = true;
      veChinh();
      return;
    }
    S.ban = true;
    live('POST', 'lat', { dung: S.q.dung }).then(function (d) {
      S.ban = false;
      S.choDapAn = false;
      napDsSv(d.ds);
      var kq = d.ketQua || { roi: [], ve: [], vang: [] };
      sndLat();
      xongCau(kq.roi, kq.ve, kq.vang, d.tatCaSai ? { pids: d.tatCaSai.pids } : null);
      tai(true);
    }).catch(function (e) { S.ban = false; baoNhanh('Chưa lật được: ' + e.message); });
  }
  function chonDapAn(i) {
    if (!S.choDapAn || !S.q || i < 0 || i >= S.q.opts.length) return;
    S.q.dung = i;
    S.choDapAn = false;
    S.pha = 'khoa';
    latCau();
  }

  // Offline: chot theo cac o co da danh dau
  function chotCau() {
    if (S.pha !== 'lat' || online()) return;
    var roi = [], ve = [], vang = [], truoc = 0, now = Date.now(), k = 0;
    S.ds.forEach(function (x) {
      if (S.cuu) {
        if (!x.con && S.danh[x.id]) {
          x.con = true; x.roiCau = 0; x.roiLuc = 0; x.muon = false; x.cuuSo++;
          ve.push(x.id); hieuUng(x.id, 'is-ve-moi', 0);
        }
        return;
      }
      if (!x.con) return;
      truoc++;
      if (S.danh[x.id]) {
        x.con = false; x.roiCau = S.i + 1; x.roiLuc = now;
        roi.push(x.id); hieuUng(x.id, 'is-roi-moi', Math.min(1500, (k++) * 45));
      } else {
        x.diem += 10;
        if (S.q.cuoi) { x.vang = true; vang.push(x.id); }
      }
    });
    S.danh = {};
    var tcs = !S.cuu && !S.q.cuoi && truoc && roi.length === truoc ? { pids: roi } : null;
    xongCau(roi, ve, vang, tcs);
  }

  function tenDs(ids, toiDa) {
    var t = ids.slice(0, toiDa).map(function (id) { return tenNg(timNg(id)); });
    return t.join(', ') + (ids.length > toiDa ? ' và ' + (ids.length - toiDa) + ' bạn' : '');
  }
  function xongCau(roi, ve, vang, tcs) {
    S.pha = 'xong';
    S.roiVua = roi.length;
    if (S.cuu) {
      S.tin = ve.length ? '🛟 ' + ve.length + ' bạn được cứu trợ, trở lại sàn: ' + tenDs(ve, 8) : 'Câu cứu trợ: chưa bạn nào trở lại sàn lần này.';
      if (ve.length) sndCuu();
    } else if (S.q.cuoi) {
      S.tin = vang.length ? '🔔 ' + vang.length + ' bạn rung chuông vàng: ' + tenDs(vang, 8) : 'Câu Chuông Vàng: chưa bạn nào trả lời đúng.';
      if (roi.length) setTimeout(sndRoi, 300);
    } else {
      S.tin = roi.length ? roi.length + ' bạn vừa rời sàn: ' + tenDs(roi, 8) : '🎉 Cả sàn đều đúng — không ai rời sàn!';
      if (roi.length) setTimeout(sndRoi, 300);
    }
    veChinh();
    veLaiSau(3400);
    if (tcs && tcs.pids.length) setTimeout(function () { moTatCaSai(tcs.pids); }, 1300);
    else if (S.q.cuoi && !S.cuu && vang.length) setTimeout(function () { if (S.pha === 'xong') moVang(); }, 1800);
  }

  /* ---------------- ca san cung sai ---------------- */
  function moTatCaSai(pids) {
    if (S.pha !== 'xong') return;
    S.panelKhoa = true;
    moPanel(
      '<h2>😱 Cả sàn cùng sai!</h2>' +
      '<p>Không bạn nào trên sàn trả lời đúng câu ' + (S.i + 1) + '.</p>' +
      '<p class="rc-luat-p"><b>Luật:</b> khi cả sàn cùng sai một câu, tất cả <b>' + pids.length + ' bạn vừa rời sàn</b> ở câu này được quay lại sàn để thi tiếp (không cộng điểm câu này).</p>' +
      '<div class="rc-form-act">' +
        '<button type="button" class="rc-btn" data-x="giu">Giữ kết quả (sàn trống)</button>' +
        '<button type="button" class="rc-go" data-x="ve" data-mac="1">↩ Cho cả nhóm quay lại <kbd>Enter</kbd></button>' +
      '</div>'
    );
    $all('#rcPanelCard [data-x]').forEach(function (b) {
      b.addEventListener('click', function () {
        var ve = b.getAttribute('data-x') === 've';
        S.panelKhoa = false;
        dongPanel();
        var xong = function () {
          if (ve) { S.tin = '↩ Cả sàn cùng sai — ' + pids.length + ' bạn quay lại sàn thi tiếp.'; S.roiVua = 0; sndCuu(); }
          else S.tin = 'Giữ kết quả — sàn đang trống.';
          veChinh();
          veLaiSau(1800);
        };
        if (online()) {
          live('POST', 'cuu', { pids: ve ? pids : [], ly: 'tatcasai' }).then(function (d) { napDsSv(d.ds); xong(); })
            .catch(function (e) { baoNhanh(e.message); });
        } else {
          if (ve) pids.forEach(function (id) {
            var x = timNg(id);
            if (x && !x.con) { x.con = true; x.roiCau = 0; x.roiLuc = 0; hieuUng(id, 'is-ve-moi', 0); }
          });
          xong();
        }
      });
    });
  }

  /* ---------------- cuu tro ---------------- */
  function moCuu() {
    if (S.pha === 'sanh' || S.pha === 'het' || S.le || S.ban) return;
    var ly = coTheCuu();
    var td = S.toiDa > 0 ? 'tối đa <b>' + S.toiDa + ' bạn</b>' : '<b>không giới hạn</b> số bạn';
    moPanel(
      '<h2>🛟 Cứu trợ — ' + (S.cuuCon > 0 ? 'còn ' + S.cuuCon + ' lượt' : 'đã hết lượt') + '</h2>' +
      '<p class="rc-luat-p"><b>Luật:</b> dùng khi trên sàn còn ≤ ' + nguong() + ' bạn. Tất cả <b>' + soRoi() + ' bạn đã rời sàn</b> cùng trả lời một câu cứu trợ; ' +
        'trả lời đúng thì trở lại sàn — ' + td + (online() ? ' (ai đúng <b>nhanh hơn</b> được ưu tiên).' : ' (cô bấm chọn trong số các bạn viết đúng).') +
        ' Các bạn đang trên sàn nghỉ câu này; câu cứu trợ không tính điểm.</p>' +
      (ly ? '<p class="rc-loi">⚠ ' + esc(ly) + '</p>' : '') +
      '<div class="rc-form-act"><button type="button" class="rc-btn" data-x="dong">Đóng</button>' +
        (ly ? '' : '<button type="button" class="rc-go" data-x="cuu" data-mac="1">▶ Mở câu cứu trợ <kbd>Enter</kbd></button>') + '</div>'
    );
    $('#rcPanelCard [data-x="dong"]').addEventListener('click', dongPanel);
    var b = $('#rcPanelCard [data-x="cuu"]');
    if (b) b.addEventListener('click', function () { dongPanel(); batDauCuu(); });
  }
  function cauCuu() {
    if (S.tuDo) return cauTuDo();
    if (S.du.length) return S.du.shift();
    return chuanCau(S.goc[Math.floor(Math.random() * S.goc.length)]); // het cau du phong: lay lai mot cau (tron lai dap an)
  }
  function batDauCuu() {
    if (coTheCuu()) return;
    S.cuuCon--;
    S.cuu = true;
    var q = cauCuu();
    if (typeof q.answer === 'number') q = chuanCau(q); // cau goc trong S.du chua chuan hoa
    q.cuoi = false;
    S.q = q;
    S.danh = {}; S.choDapAn = false; S.roiVua = 0;
    S.tin = '🛟 Câu cứu trợ cho ' + soRoi() + ' bạn đã rời sàn';
    S.pha = 'doc';
    datGio(S.giay);
    veChinh();
    sndCuu();
  }

  /* ---------------- phao may bay giay ---------------- */
  function moPhao() {
    if (S.pha === 'sanh' || S.pha === 'het' || S.le || S.ban) return;
    var ly = coThePhao();
    var roi = S.ds.filter(function (x) { return !x.con; });
    moPanel(
      '<h2>✈️ Phao máy bay giấy</h2>' +
      '<p class="rc-luat-p"><b>Luật:</b> chỉ dùng 1 lần, khi trên sàn còn 1 bạn (hoặc không còn ai). Cô chọn <b>1 bạn đã rời sàn</b> — máy bay giấy sẽ đưa bạn ấy trở lại sàn thi đấu.</p>' +
      (ly ? '<p class="rc-loi">⚠ ' + esc(ly) + '</p>' :
        '<div class="rc-phao-ds">' + roi.map(function (x) {
          return '<button type="button" class="rc-chip" data-pid="' + esc(x.id) + '"><b>' + x.so + '</b>' + esc(x.ten || 'Số ' + x.so) +
            (x.roiCau ? '<i>câu ' + x.roiCau + '</i>' : '') + '</button>';
        }).join('') + '</div>') +
      '<div class="rc-form-act"><button type="button" class="rc-btn" data-x="dong">' + (ly ? 'Đóng' : 'Huỷ') + '</button>' +
        (ly ? '' : '<button type="button" class="rc-go" data-x="boc" data-mac="1">🎲 Bốc thăm ngẫu nhiên <kbd>Enter</kbd></button>') + '</div>'
    );
    $('#rcPanelCard [data-x="dong"]').addEventListener('click', dongPanel);
    if (ly) return;
    $('#rcPanelCard [data-x="boc"]').addEventListener('click', function () {
      phong(roi[Math.floor(Math.random() * roi.length)].id);
    });
    $all('#rcPanelCard [data-pid]').forEach(function (b) {
      b.addEventListener('click', function () { phong(b.getAttribute('data-pid')); });
    });
  }
  function phong(id) {
    var x = timNg(id);
    if (!x || x.con || coThePhao()) return;
    dongPanel();
    S.phaoCon = 0;
    S.ban = true;
    veBen();
    sndMayBay();
    var luu = online() ? live('POST', 'cuu', { pids: [id], ly: 'phao' }) : Promise.resolve(null);
    Promise.all([luu, bayMayBay(id)]).then(function (r) {
      S.ban = false;
      if (r[0]) napDsSv(r[0].ds);
      else { x.con = true; x.roiCau = 0; x.roiLuc = 0; x.muon = false; x.cuuSo++; }
      hieuUng(id, 'is-ve-moi', 0);
      S.tin = '✈️ Máy bay giấy đưa ' + tenNg(x) + ' trở lại sàn!';
      S.roiVua = 0;
      sndCuu();
      veChinh();
      veLaiSau(1800);
    }).catch(function (e) {
      S.ban = false;
      S.phaoCon = 1;
      baoNhanh('Chưa phóng được: ' + e.message);
      veChinh();
    });
  }
  function oCua(id) {
    var all = $all('#rcLuoi .rc-o');
    for (var i = 0; i < all.length; i++) if (all[i].getAttribute('data-id') === id) return all[i];
    return null;
  }
  function bayMayBay(id) {
    var el = oCua(id);
    if (!el || giam()) return wait(300);
    var fx = $('#rcFx');
    var mb = document.createElement('div');
    mb.className = 'rc-maybay';
    mb.innerHTML = MAYBAY_SVG;
    fx.appendChild(mb);
    if (!mb.animate) { fx.removeChild(mb); return wait(300); }
    var rr = root.getBoundingClientRect(), r = el.getBoundingClientRect();
    var W = rr.width, H = rr.height;
    var x1 = r.left - rr.left + r.width / 2 - 40, y1 = r.top - rr.top + r.height / 2 - 30;
    var tf = function (x, y, rot, sc) { return 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px) rotate(' + rot + 'deg) scale(' + sc + ')'; };
    var a = mb.animate([
      { transform: tf(-140, H * 0.2, 12, 1.5), opacity: 1 },
      { transform: tf(W * 0.3, H * 0.04, -10, 1.8), offset: 0.3 },
      { transform: tf(W * 0.62, H * 0.32, 28, 1.5), offset: 0.55 },
      { transform: tf(W * 0.4, H * 0.5, 160, 1.2), offset: 0.75 },
      { transform: tf(x1, y1, 20, 0.7), opacity: 1 }
    ], { duration: 2600, easing: 'ease-in-out', fill: 'forwards' });
    return new Promise(function (ok) {
      var xong = false;
      var het = function () { if (xong) return; xong = true; if (mb.parentNode) mb.parentNode.removeChild(mb); ok(); };
      a.onfinish = het;
      setTimeout(het, 3000);
    });
  }

  /* ---------------- chuong vang & ket thuc ---------------- */
  function phaoGiay(n) {
    if (giam()) return;
    var fx = $('#rcFx');
    var mau = ['#f5c518', '#fff1a6', '#ff6b6b', '#4dabf7', '#69db7c', '#ffffff', '#ffa94d', '#da77f2'];
    var h = '';
    for (var i = 0; i < n; i++) {
      h += '<i class="rc-giay" style="left:' + (Math.random() * 100).toFixed(1) + '%;background:' + mau[i % mau.length] +
        ';width:' + (6 + Math.random() * 8).toFixed(0) + 'px;height:' + (10 + Math.random() * 10).toFixed(0) + 'px' +
        ';animation-duration:' + (2.6 + Math.random() * 2.6).toFixed(2) + 's;animation-delay:' + (Math.random() * 1.6).toFixed(2) + 's"></i>';
    }
    var box = document.createElement('div');
    box.className = 'rc-giay-khoi';
    box.innerHTML = h;
    fx.appendChild(box);
    setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 7000);
  }
  function moVang() {
    var vang = S.ds.filter(function (x) { return x.vang; });
    if (!vang.length) { ketThuc(); return; }
    S.le = true;
    var le = $('#rcLe');
    le.innerHTML =
      '<div class="rc-le-the">' +
        '<div class="rc-le-chuong">' + CHUONG_SVG + '</div>' +
        '<h2>RUNG CHUÔNG VÀNG!</h2>' +
        '<p class="rc-le-tieude">' + esc(S.tieuDe) + (S.nhan ? ' · ' + esc(S.nhan) : '') + '</p>' +
        '<div class="rc-le-ten">' + vang.map(function (x) { return '<span><b>' + x.so + '</b>' + esc(tenNg(x)) + '</span>'; }).join('') + '</div>' +
        '<p class="rc-le-mo">' + (vang.length === 1 ? 'Xin chúc mừng nhà vô địch!' : 'Xin chúc mừng ' + vang.length + ' bạn đã vượt qua Câu Chuông Vàng!') + '</p>' +
        '<button type="button" class="rc-go" data-act="ket">🏆 Xem bảng xếp hạng <kbd>Space</kbd></button>' +
      '</div>';
    le.hidden = false;
    phaoGiay(150);
    setTimeout(function () { if (S.le) phaoGiay(90); }, 2600);
    sndChuong();
  }
  function ketThuc() {
    if (S.ban) return;
    dungDem();
    S.le = false;
    $('#rcLe').hidden = true;
    S.pha = 'het';
    if (online()) live('POST', 'xong', {}).catch(boQua);
    veChinh();
    tone(784, 0.2, 'triangle', 0.14); tone(988, 0.2, 'triangle', 0.14, 0.15); tone(1175, 0.45, 'triangle', 0.14, 0.3);
  }
  function xepHang() {
    return S.ds.slice().sort(function (a, b) {
      return (b.con ? 1 : 0) - (a.con ? 1 : 0) || (b.vang ? 1 : 0) - (a.vang ? 1 : 0) || b.diem - a.diem ||
        (b.roiLuc || 0) - (a.roiLuc || 0) || a.so - b.so;
    });
  }
  function thanhTich(x) {
    if (x.vang) return '🔔 Rung chuông vàng';
    if (x.con) return '🟡 Trụ đến cuối';
    if (x.roiCau) return 'Rời sàn ở câu ' + x.roiCau;
    if (x.muon) return 'Vào muộn';
    return 'Rời sàn';
  }
  function vinhDanh(xh) {
    var vang = xh.filter(function (x) { return x.vang; });
    if (vang.length) return { tit: '🔔 Rung chuông vàng', ds: vang };
    var con = xh.filter(function (x) { return x.con; });
    if (con.length) return { tit: 'Trụ vững trên sàn đến cuối', ds: con };
    var max = 0;
    xh.forEach(function (x) { if (x.roiLuc > max) max = x.roiLuc; });
    return { tit: 'Chưa ai rung chuông — trụ lâu nhất', ds: max ? xh.filter(function (x) { return x.roiLuc === max; }) : [] };
  }
  function veHet() {
    if (window.NhacNen) window.NhacNen.tat();
    var c = $('#rcChinh');
    c.setAttribute('data-man', 'het');
    var xh = xepHang(), vd = vinhDanh(xh);
    c.innerHTML =
      '<div class="rc-het">' +
        '<h2 class="rc-het-tit">🏆 Kết quả · ' + esc(S.tieuDe) + '</h2>' +
        '<div class="rc-het-vinh"><h3>' + vd.tit + '</h3><div class="rc-le-ten">' +
          (vd.ds.length ? vd.ds.map(function (x) { return '<span><b>' + x.so + '</b>' + esc(tenNg(x)) + '</span>'; }).join('') : '<em>—</em>') +
        '</div></div>' +
        '<div class="rc-bxh-khung"><table class="rc-bxh"><thead><tr><th>Hạng</th><th>Học sinh</th><th>Thành tích</th><th>Điểm</th></tr></thead><tbody>' +
          xh.map(function (x, i) {
            return '<tr class="' + (x.vang ? 'is-vang' : x.con ? 'is-con' : '') + '"><td>' + (['🥇', '🥈', '🥉'][i] || i + 1) + '</td>' +
              '<td><b>' + x.so + '</b> ' + esc(x.ten || 'Số ' + x.so) + '</td><td>' + thanhTich(x) + '</td><td>' + x.diem + 'đ</td></tr>';
          }).join('') +
        '</tbody></table></div>' +
        '<div class="rc-het-nut">' +
          '<button type="button" class="rc-btn rc-btn-sang" data-act="chep">📋 Sao chép kết quả</button>' +
          '<button type="button" class="rc-btn rc-btn-sang" data-act="lai">↺ Chơi lại</button>' +
          '<button type="button" class="rc-go" data-act="dong">Xong</button>' +
        '</div>' +
      '</div>';
  }
  function chepKetQua() {
    var xh = xepHang();
    var txt = 'RUNG CHUÔNG VÀNG — ' + S.tieuDe + (S.nhan ? ' (' + S.nhan + ')' : '') + ' — ' + new Date().toLocaleDateString('vi-VN') + '\n' +
      xh.map(function (x, i) { return (i + 1) + '. ' + (x.ten || 'Số ' + x.so) + ' — ' + x.diem + 'đ — ' + thanhTich(x).replace(/^[^\wÀ-ỹ]+\s*/, ''); }).join('\n');
    var ok = function () { baoNhanh('Đã sao chép kết quả — dán vào Zalo / Excel tuỳ ý.'); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, function () { chepCu(txt); ok(); });
    else { chepCu(txt); ok(); }
  }
  function chepCu(txt) {
    var t = document.createElement('textarea');
    t.value = txt;
    t.style.position = 'fixed'; t.style.opacity = '0';
    root.appendChild(t);
    t.select();
    try { document.execCommand('copy'); } catch (e) { /* bo qua */ }
    root.removeChild(t);
  }
  function choiLai() {
    dungDem();
    S.pha = 'sanh'; S.cau = []; S.i = -1; S.q = null; S.cuu = false; S.tin = ''; S.le = false;
    if (online() && S.room) {
      live('POST', 'batdau', { sanh: true }).then(function (d) { S.ds = []; napDsSv(d.ds); veChinh(); }).catch(function (e) { baoNhanh(e.message); });
    }
    veChinh();
  }

  /* ---------------- bam chuot ---------------- */
  function bamChinh(e) {
    var t = e.target;
    var chon = t.closest('.rc-chon button');
    if (chon) { doiCaiDat(chon.parentNode.getAttribute('data-k'), chon.getAttribute('data-v')); return; }
    var dap = t.closest('[data-dap]');
    if (dap) { chonDapAn(+dap.getAttribute('data-dap')); return; }
    var o = t.closest('.rc-o');
    if (o) { bamO(o.getAttribute('data-id')); return; }
    var vg = t.closest('[data-vang]');
    if (vg) { doiVang(vg.getAttribute('data-vang')); return; }
    var b = t.closest('[data-act]');
    if (!b) return;
    var act = b.getAttribute('data-act');
    if (act === 'vao') batDauTran();
    else if (act === 'space') phimSpace();
    else if (act === 'enter') phimEnter();
    else if (act === 'ket') ketThuc();
    else if (act === 'cuu') moCuu();
    else if (act === 'phao') moPhao();
    else if (act === 'chep') chepKetQua();
    else if (act === 'lai') choiLai();
    else if (act === 'dong') dong();
  }
  function doiCaiDat(k, v) {
    if (S.pha !== 'sanh') return;
    if (k === 'cheDo') {
      if (v === S.cheDo) return;
      S.cheDo = v;
      luuPref();
      S.ds = [];
      if (v === 'on') {
        veChinh();
        moPhong().then(veChinh).catch(function (e) { var l = $('#rcLoi'); if (l) l.textContent = 'Chưa mở được phòng: ' + e.message; });
      } else { dongPhong(); veChinh(); }
      return;
    }
    S[k] = +v;
    luuPref();
    veChinh();
  }
  function doiVang(id) {
    if (S.vang[id]) delete S.vang[id]; else S.vang[id] = 1;
    if (S.pha === 'sanh') { veChinh(); return; }
    // dang choi: vang thi rut khoi san; co mat lai thi dung ngoai san (co bam o de cho len)
    if (S.vang[id]) S.ds = S.ds.filter(function (x) { return x.id !== id; });
    else if (!timNg(id)) {
      var all = dsOffline();
      var moi = all.filter(function (x) { return x.id === id; })[0];
      if (moi) {
        if (S.pha !== 'moi') { moi.con = false; moi.muon = true; }
        S.ds.push(moi);
        S.ds.sort(function (a, b) { return a.so - b.so; });
      }
    }
    veChinh();
  }
  function bamO(id) {
    var x = timNg(id);
    if (!x || S.ban || S.le) return;
    if (S.pha === 'lat' && !online()) {
      // offline: danh dau ban sai (cau thuong) / ban viet dung (cau cuu tro)
      if (S.cuu ? x.con : !x.con) { baoNhanh(S.cuu ? 'Câu cứu trợ chỉ dành cho các bạn đã rời sàn.' : 'Bạn này đã rời sàn từ trước.'); return; }
      if (S.danh[id]) delete S.danh[id];
      else {
        if (S.cuu && S.toiDa && Object.keys(S.danh).length >= S.toiDa) { baoNhanh('Mỗi lượt cứu tối đa ' + S.toiDa + ' bạn.'); return; }
        S.danh[id] = 1;
      }
      veLuoi();
      veGio();
      return;
    }
    var con = !x.con;
    if (online()) {
      live('POST', 'dat', { pid: id, con: con }).then(function (d) {
        napDsSv(d.ds);
        baoNhanh((con ? '↩ ' : '⬇ ') + tenNg(x) + (con ? ' trở lại sàn' : ' rời sàn') + ' — bấm lại để đổi');
        veLuoi(); veBen(); veGio();
      }).catch(function (e) { baoNhanh(e.message); });
      return;
    }
    x.con = con;
    if (con) { x.roiCau = 0; x.roiLuc = 0; x.muon = false; hieuUng(id, 'is-ve-moi', 0); }
    else { x.vang = false; x.roiCau = Math.max(0, S.i + 1); x.roiLuc = Date.now(); hieuUng(id, 'is-roi-moi', 0); }
    baoNhanh((con ? '↩ ' : '⬇ ') + tenNg(x) + (con ? ' trở lại sàn' : ' rời sàn') + ' — bấm lại để đổi');
    veLuoi(); veBen(); veGio();
    veLaiSau(1800);
  }

  /* ---------------- bang phu: lop, QR, mat khau, danh sach ---------------- */
  function moPanel(html) {
    $('#rcPanelCard').innerHTML = html;
    $('#rcPanel').hidden = false;
    var f = $('#rcPanelCard').querySelector('input, textarea, [data-mac]');
    if (f) f.focus();
  }
  function dongPanel() {
    if (S.panelKhoa) return;
    $('#rcPanel').hidden = true;
    $('#rcPanelCard').innerHTML = '';
  }
  function moQr() {
    if (!S.room) return;
    moPanel(
      '<h2>📱 Vào phòng Rung Chuông Vàng</h2>' +
      '<div class="rc-qr-khoi is-to"><div class="rc-qr">' + qrSvg() + '</div>' +
        '<div class="rc-qr-chu"><p>Vào</p><b class="rc-link">' + esc(location.host) + '/choi</b><p>Mã phòng</p><b class="rc-ma">' + maDep(S.room.ma) + '</b>' +
        '<p>Bạn vào sau khi đã bắt đầu câu 1 sẽ đứng ngoài sàn (vẫn luyện tập được) — cô bấm vào ô để cho lên sàn.</p></div></div>' +
      '<div class="rc-form-act"><button type="button" class="rc-go" data-x="dong" data-mac="1">Xong</button></div>'
    );
    $('#rcPanelCard [data-x="dong"]').addEventListener('click', dongPanel);
  }
  function moQuanLy() {
    if (online()) return moQuanLyOnline();
    var trongTran = S.pha !== 'sanh';
    var ds = S.src === 'so' ? (function () { var a = []; for (var n = 1; n <= S.soNum; n++) a.push({ id: 'n' + n, name: 'Số ' + n }); return a; })() : S.kids;
    var nVang = Object.keys(S.vang).length;
    moPanel(
      '<h2>👥 Quản lý lớp</h2>' +
      '<p>' + esc(tenNguon()) + ' · ' + (ds.length - nVang) + ' có mặt' + (nVang ? ', ' + nVang + ' vắng' : '') + '. Bấm tên để đánh dấu <b>vắng</b> (không lên sàn).' +
        (trongTran ? ' Bạn có mặt trở lại giữa chừng sẽ đứng ngoài sàn — bấm ô của bạn ấy để cho lên sàn.' : '') + '</p>' +
      (S.src === 'so' && !trongTran ? '<label class="rc-ql-so">Số học sinh <input type="number" id="rcQlSo" min="1" max="100" value="' + S.soNum + '"></label>' : '') +
      '<div class="rc-ql-ds">' + (ds.length ? ds.map(function (k, i) {
        var v = !!S.vang[k.id];
        return '<button type="button" class="rc-ql-hs' + (v ? ' is-vang' : '') + '" data-ql="' + esc(k.id) + '" aria-pressed="' + v + '">' +
          '<b>' + (i + 1) + '</b>' + esc(k.name) + '<i>' + (v ? 'Vắng' : 'Có mặt') + '</i></button>';
      }).join('') : '<p class="rc-trong">Chưa có danh sách.</p>') + '</div>' +
      '<div class="rc-form-act">' +
        (!trongTran && S.src.indexOf('ls:') === 0 ? '<button type="button" class="rc-btn" data-x="sua">✏️ Sửa danh sách</button>' : '') +
        (!trongTran ? '<button type="button" class="rc-btn" data-x="moi">＋ Tạo danh sách nhanh</button>' : '') +
        (!trongTran && !S.classes.length ? '<button type="button" class="rc-btn" data-x="khoa">🔑 Lớp trên hệ thống</button>' : '') +
        '<button type="button" class="rc-go" data-x="dong" data-mac="1">Xong</button>' +
      '</div>'
    );
    $all('#rcPanelCard [data-ql]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-ql');
        doiVang(id);
        var v = !!S.vang[id];
        b.classList.toggle('is-vang', v);
        b.setAttribute('aria-pressed', String(v));
        b.querySelector('i').textContent = v ? 'Vắng' : 'Có mặt';
      });
    });
    var so = $('#rcQlSo');
    if (so) so.addEventListener('change', function () {
      S.soNum = Math.max(1, Math.min(100, parseInt(this.value, 10) || 30));
      luuPref(); napNguon(); dongPanel(); moQuanLy(); veChinh();
    });
    var sua = $('#rcPanelCard [data-x="sua"]');
    if (sua) sua.addEventListener('click', function () { moSua(timDs(S.src.slice(3))); });
    var moi = $('#rcPanelCard [data-x="moi"]');
    if (moi) moi.addEventListener('click', function () { moSua(null); });
    var kh = $('#rcPanelCard [data-x="khoa"]');
    if (kh) kh.addEventListener('click', function () { moKhoa(); });
    $('#rcPanelCard [data-x="dong"]').addEventListener('click', dongPanel);
  }
  function moQuanLyOnline() {
    var ve = function () {
      $('#rcPanelCard .rc-ql-ds').innerHTML = S.ds.length ? S.ds.map(function (x) {
        return '<div class="rc-ql-dong' + (x.con ? '' : ' is-vang') + '"><span><b>' + x.so + '</b>' + esc(x.ten) + '</span>' +
          '<i>' + trangThai(x) + ' · ' + x.diem + 'đ</i>' +
          '<button type="button" class="rc-btn" data-dat="' + esc(x.id) + '">' + (x.con ? 'Cho rời sàn' : 'Cho lên sàn') + '</button>' +
          '<button type="button" class="rc-btn rc-btn-xoa" data-duoi="' + esc(x.id) + '">Mời ra</button></div>';
      }).join('') : '<p class="rc-trong">Chưa có bạn nào trong phòng.</p>';
    };
    moPanel(
      '<h2>👥 Học sinh trong phòng (' + S.ds.length + ')</h2>' +
      '<p>“Cho lên / rời sàn” để chỉnh tay; “Mời ra” để xoá tên trùng hoặc vào nhầm (em đó phải vào lại).</p>' +
      '<div class="rc-ql-ds is-dong"></div>' +
      '<div class="rc-form-act"><button type="button" class="rc-go" data-x="dong" data-mac="1">Xong</button></div>'
    );
    ve();
    $('#rcPanelCard [data-x="dong"]').addEventListener('click', dongPanel);
    $('#rcPanelCard .rc-ql-ds').addEventListener('click', function (e) {
      var d = e.target.closest('[data-dat]'), r = e.target.closest('[data-duoi]');
      if (d) {
        var x = timNg(d.getAttribute('data-dat'));
        if (!x) return;
        live('POST', 'dat', { pid: x.id, con: !x.con }).then(function (res) { napDsSv(res.ds); ve(); veChinh(); }).catch(function (er) { baoNhanh(er.message); });
      } else if (r) {
        var y = timNg(r.getAttribute('data-duoi'));
        if (!y || !window.confirm('Mời ' + y.ten + ' ra khỏi phòng?')) return;
        live('POST', 'duoi', { pid: y.id }).then(function () { S.ds = S.ds.filter(function (z) { return z.id !== y.id; }); ve(); veChinh(); }).catch(function (er) { baoNhanh(er.message); });
      }
    });
  }
  function doiNguon() {
    var v = this.value;
    this.value = S.src;
    if (S.pha !== 'sanh') return;
    if (v === 'key') return moKhoa();
    if (v === 'new') return moSua(null);
    chonNguon(v);
  }
  function moKhoa(loi) {
    moPanel(
      '<h2>Lớp trên hệ thống</h2>' +
      '<p>Nhập mật khẩu quản trị để lấy danh sách lớp.</p>' +
      '<form class="rc-form" id="rcKhoaF">' +
        '<input type="password" id="rcPw" placeholder="Mật khẩu quản trị" autocomplete="current-password" required>' +
        '<div class="rc-form-act"><button type="button" class="rc-btn" data-x="dong">Huỷ</button><button type="submit" class="rc-go">Mở danh sách</button></div>' +
      '</form>' +
      '<p class="rc-loi" id="rcPwLoi"' + (loi ? '' : ' hidden') + '>' + esc(loi || '') + '</p>'
    );
    $('#rcPanelCard [data-x="dong"]').addEventListener('click', dongPanel);
    $('#rcKhoaF').addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem(PW_KEY, $('#rcPw').value); } catch (x) { /* bo qua */ }
      napLop().then(function () {
        if (!S.classes.length) {
          var l = $('#rcPwLoi');
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
      '<p>Mỗi dòng một tên. Danh sách chỉ lưu trên trình duyệt của máy này (dùng chung với “Gọi trả bài”), không gửi lên mạng.</p>' +
      '<form class="rc-form" id="rcSuaF">' +
        '<input type="text" id="rcTenDs" placeholder="Tên lớp, ví dụ: HSK2 tối thứ 3" maxlength="60" required value="' + esc(l ? l.name : '') + '">' +
        '<textarea id="rcDsTen" rows="10" placeholder="Nguyễn Văn An&#10;Trần Thị Bình&#10;…" required>' + esc(l ? l.kids.map(function (k) { return k.name; }).join('\n') : '') + '</textarea>' +
        '<div class="rc-form-act"><button type="button" class="rc-btn" data-x="dong">Huỷ</button><button type="submit" class="rc-go">Lưu</button></div>' +
      '</form>'
    );
    $('#rcPanelCard [data-x="dong"]').addEventListener('click', dongPanel);
    $('#rcSuaF').addEventListener('submit', function (e) {
      e.preventDefault();
      var ten = $('#rcTenDs').value.trim();
      var cu = {};
      if (l) l.kids.forEach(function (k) { cu[String(k.name).toLowerCase()] = k; });
      var thay = {};
      var kids = $('#rcDsTen').value.split(/\r?\n/).map(function (s) {
        return s.replace(/^\s*\d+[.)\-\s]+/, '').replace(/\s+/g, ' ').trim();
      }).filter(function (s) {
        var key = s.toLowerCase();
        if (!s || thay[key]) return false;
        thay[key] = 1;
        return true;
      }).slice(0, 100).map(function (s, i) {
        // giu lai du lieu cu (lich su goi tra bai) cua ban co ten trung
        return cu[s.toLowerCase()] || { id: 'k' + Date.now().toString(36) + i, name: s, times: 0, lastMs: 0, scores: [] };
      });
      if (!ten || !kids.length) return;
      var lists = docDs();
      if (l) lists = lists.map(function (x) { return x.id === l.id ? Object.assign({}, x, { name: ten, kids: kids }) : x; });
      else { l = { id: 'l' + Date.now().toString(36), name: ten, kids: kids }; lists.push(l); }
      ghiLS(LIST_KEY, lists);
      dongPanel();
      chonNguon('ls:' + l.id);
    });
  }

  var henToast = 0;
  function baoNhanh(txt) {
    var t = $('#rcToast');
    t.textContent = txt;
    t.hidden = false;
    clearTimeout(henToast);
    henToast = setTimeout(function () { t.hidden = true; }, 3200);
  }

  /* ---------------- phim tat ---------------- */
  function phimSpace() {
    if (S.le) { ketThuc(); return; }
    if (S.pha === 'sanh') batDauTran();
    else if (S.pha === 'moi') cauTiep();
    else if (S.pha === 'doc') batDauGio();
    else if (S.pha === 'chay') tamDung();
    else if (S.pha === 'xong') {
      if (cauCuoiXong()) { if (S.ds.some(function (x) { return x.vang; })) moVang(); else ketThuc(); }
      else if (soCon() === 0) baoNhanh('Không còn ai trên sàn — dùng Cứu trợ (C), Phao máy bay giấy (P) hoặc bấm Kết thúc.');
      else cauTiep();
    }
  }
  function phimEnter() {
    if (S.le) { ketThuc(); return; }
    if (S.pha === 'sanh') batDauTran();
    else if (S.pha === 'moi') cauTiep();
    else if (S.pha === 'chay' || S.pha === 'khoa') { if (!S.choDapAn) latCau(); }
    else if (S.pha === 'lat') chotCau();
  }
  function doiTieng() { S.sound = !S.sound; luuPref(); veBar(); if (S.sound) sndCau(); }
  function toanManHinh() {
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (root.requestFullscreen) root.requestFullscreen().catch(boQua);
  }
  function phim(e) {
    if (!root || root.hidden) return;
    var trongO = e.target && /input|select|textarea/i.test(e.target.tagName);
    var panel = !$('#rcPanel').hidden;
    if (e.key === 'Escape') {
      e.stopImmediatePropagation();
      if (panel) dongPanel();
      else if (S.le) ketThuc();
      else if (!document.fullscreenElement) dongHoi();
      return;
    }
    if (trongO) return;
    // man Rung Chuong Vang dang mo: phim tat cua tro choi phia sau khong duoc chay
    e.stopImmediatePropagation();
    if (panel) {
      if (e.key === 'Enter') {
        var m = $('#rcPanelCard [data-mac]');
        if (m && e.target.tagName !== 'BUTTON') { e.preventDefault(); m.click(); }
      }
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = e.key;
    if (e.code === 'Space') { e.preventDefault(); if (!e.repeat) phimSpace(); }
    else if (k === 'Enter') { e.preventDefault(); if (!e.repeat) phimEnter(); }
    else if (k === 'c' || k === 'C') moCuu();
    else if (k === 'p' || k === 'P') moPhao();
    else if (k === 'f' || k === 'F') toanManHinh();
    else if (k === 'm' || k === 'M') doiTieng();
    else if (k >= '1' && k <= '4' && S.choDapAn) chonDapAn(+k - 1);
  }

  /* ---------------- mo / dong ---------------- */
  function dongHoi() {
    var dangChoi = S.pha !== 'sanh' && S.pha !== 'het';
    if (dangChoi && !window.confirm('Thoát Rung Chuông Vàng? Ván đang chơi sẽ kết thúc.')) return;
    dong();
  }
  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    napPref();
    S.goc = (opt.cau || []).filter(function (q) {
      return q && Array.isArray(q.options) && q.options.length >= 2 && typeof q.answer === 'number' && q.answer >= 0 && q.answer < q.options.length;
    });
    S.tuDo = !S.goc.length;
    S.nhan = opt.nhan || '';
    S.pha = 'sanh'; S.cau = []; S.du = []; S.i = -1; S.q = null; S.cuu = false; S.tin = ''; S.le = false; S.ban = false;
    S.danh = {}; S.hieuUng = {}; S.ds = []; S.panelKhoa = false; S.choDapAn = false;
    root.hidden = false;
    document.documentElement.classList.add('rc-open');
    $('#rcTieuDe').value = S.tieuDe;
    $('#rcLe').hidden = true;
    $('#rcPanel').hidden = true;
    $('#rcChinh').removeAttribute('data-man');
    $('#rcChinh').innerHTML = '<p class="rc-trong">Đang mở…</p>';
    napLop().then(function () {
      napNguon();
      return chonNguon(S.src);
    }).then(function () {
      if (online()) return moPhong().then(veChinh);
    }).catch(function (e) {
      veChinh();
      var l = $('#rcLoi');
      if (l) l.textContent = 'Chưa mở được phòng online: ' + e.message;
    });
  }
  function dong() {
    if (window.NhacNen) window.NhacNen.tat();
    if (!root) return;
    dungDem();
    dongPhong();
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(boQua);
    S.panelKhoa = false;
    dongPanel();
    S.le = false;
    $('#rcLe').hidden = true;
    $('#rcFx').innerHTML = '';
    root.hidden = true;
    S.pha = 'sanh';
    document.documentElement.classList.remove('rc-open');
  }

  window.LopChuong = { mo: mo, dong: dong };
})();
