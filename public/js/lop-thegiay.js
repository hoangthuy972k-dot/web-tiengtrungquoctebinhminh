/* The giay A/B/C/D — Che do lop hoc, khong can dien thoai hoc sinh.
   Moi em mot the giay in ma rieng (public/js/thegiay-ma.js), xoay the cho chu cai
   minh chon len tren roi gio cao. Co quet ca lop bang camera NGAY TREN MAY NAY
   (laptop / dien thoai mo /lop) — khong can phong tren may chu.
   Mo bang window.LopTheGiay.mo({ vocab, mcs, nhan }).
   - Man chieu: cau hoi to + luoi so the sang dan khi quet (chi dem, khong lo dap an).
   - "Lat dap an": dap an dung, bieu do A/B/C/D, ai dung (so + ten).
   - Tong ket: bang xep hang, dung/tong tung em, xuat CSV. KHONG tu ghi diem.
   So the = thu tu trong danh sach lop (danh sach nhanh hyv_ufo_lists hoac lop tren
   he thong qua /api/admin/oral); ten chi nam tren may co, khong in len the.      */
(function () {
  'use strict';

  var MA = window.TheGiayMa;
  var CHU = ['A', 'B', 'C', 'D'];
  var PW_KEY = 'hyv_admin_pw';
  var LIST_KEY = 'hyv_ufo_lists';
  var PREF_KEY = 'hyv_tg_pref';
  var XAC_NHAN = 2;      // so khung lien tiep cung dap an moi ghi nhan
  var CHU_KY = 150;      // ms giua hai lan quet

  var S = {
    built: false, nhan: '', nguon: 'so', soThe: 30, soCau: 10, classes: [], hs: [],
    kho: [], tuDo: false, cau: [], i: -1, pha: 'sanh', tl: {}, cho: {}, kq: [],
    daLat: false, hienTen: true, am: true, inKieu: 1, inBang: true, inTu: 1, inDen: 30
  };
  var Q = { chay: false, stream: null, worker: null, ban: false, so: 0, hen: 0, rong: 1280, kq: [], pw: 0, ph: 0, ms: 0, msTb: 0, khung: 0, cam: '', loi: '' };
  var root, camBox, video, lop, cv, ctxCv;

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
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function luuPref() { ghiLS(PREF_KEY, { nguon: S.nguon, soThe: S.soThe, soCau: S.soCau, inKieu: S.inKieu, inBang: S.inBang, hienTen: S.hienTen, am: S.am, rong: Q.rong }); }
  function N() { return S.hs.length; }
  function tenThe(id) { var h = S.hs[id - 1]; return h ? h.ten : ''; }
  function coTen() { return S.hs.some(function (h) { return h.ten; }); }

  /* ---------------- am thanh nho (tat duoc) ---------------- */
  var ac = null;
  function tieng(f, dai, kieu) {
    if (!S.am) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      var o = ac.createOscillator(), gn = ac.createGain(), t = ac.currentTime;
      o.type = kieu || 'sine'; o.frequency.setValueAtTime(f, t);
      gn.gain.setValueAtTime(0.0001, t); gn.gain.exponentialRampToValueAtTime(0.12, t + 0.01); gn.gain.exponentialRampToValueAtTime(0.0001, t + dai);
      o.connect(gn); gn.connect(ac.destination); o.start(t); o.stop(t + dai + 0.02);
    } catch (e) { /* bo qua */ }
  }
  function tiengQuet() { tieng(880, 0.09); }
  function tiengLat() { tieng(523, 0.12, 'triangle'); setTimeout(function () { tieng(784, 0.2, 'triangle'); }, 110); }

  /* ---------------- cau hoi ---------------- */
  function chuanCauCu(q) { // cau trac nghiem cua bai (pickedMcs)
    if (!q || !q.options || q.options.length < 2 || q.answer == null) return null;
    var ds = q.options.map(function (o, i) { return i; }), dung = q.answer;
    if (ds.length > 4) ds = [dung].concat(tron(ds.filter(function (i) { return i !== dung; })).slice(0, 3)).sort(function (a, b) { return a - b; });
    return { lenh: q.hint ? 'Chọn đáp án đúng' : 'Chọn đáp án đúng', zh: (q.pre || '') + (q.noBlank ? '' : '＿＿') + (q.post || ''),
      ctx: q.context || '', why: q.why || '', opts: ds.map(function (i) { return q.options[i]; }), dung: ds.indexOf(dung) };
  }
  function chuanCauDt(c) { // ngan hang Kiem tra bai cu (_boCauDt)
    if (!c || c.k || !c.opts || c.opts.length < 2 || c.dung == null || c.dung < 0) return null;
    var opts = c.opts.slice(), dung = c.dung;
    if (opts.length > 4) {
      var giu = [dung].concat(tron(opts.map(function (o, i) { return i; }).filter(function (i) { return i !== dung; })).slice(0, 3)).sort(function (a, b) { return a - b; });
      opts = giu.map(function (i) { return c.opts[i]; }); dung = giu.indexOf(c.dung);
    }
    return { lenh: c.lenh || 'Chọn đáp án đúng', zh: c.zh || '', ctx: c.ctx || '', why: c.why || '', opts: opts, dung: dung };
  }
  function lapKho(opt) {
    var out = [], thay = {};
    function them(c) {
      if (!c) return;
      var k = c.zh + '|' + c.opts.join('|');
      if (thay[k]) return;
      thay[k] = 1; out.push(c);
    }
    var vocab = opt.vocab || [], mcs = opt.mcs || [];
    if (window.LopKiemTra && window.LopKiemTra._boCauDt && (vocab.length || mcs.length)) {
      try {
        window.LopKiemTra._boCauDt({ vocab: vocab, mcs: mcs, sorts: [] }, 80, ['nghia', 'viet', 'nguphap', 'dien']).forEach(function (c) { them(chuanCauDt(c)); });
      } catch (e) { /* bo qua */ }
    }
    mcs.forEach(function (q) { them(chuanCauCu(q)); });
    return out;
  }
  function chiaCau() {
    var n = S.soCau === 0 ? S.kho.length : Math.min(S.soCau, S.kho.length);
    if (S.tuDo) {
      S.cau = [];
      for (var i = 0; i < (S.soCau || 10); i++) S.cau.push({ tuDo: true, lenh: 'Cô đọc câu hỏi — cả lớp giơ thẻ', zh: '', ctx: '', why: '', opts: ['', '', '', ''], dung: -1 });
    } else S.cau = tron(S.kho).slice(0, n);
  }

  /* ---------------- danh sach lop ---------------- */
  function docDs() { var l = docLS(LIST_KEY, []); return Array.isArray(l) ? l : []; }
  function napLop() {
    if (!pw()) { S.classes = []; return Promise.resolve(); }
    return fetch('/api/admin/oral', { headers: { 'X-Admin-Password': pw() } })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || ''); return d; }); })
      .then(function (d) { S.classes = d.classes || []; })
      .catch(function () { S.classes = []; });
  }
  function chonNguon(v) {
    S.nguon = v;
    luuPref();
    if (v.indexOf('ls:') === 0) {
      var l = docDs().filter(function (x) { return 'ls:' + x.id === v; })[0];
      S.hs = l ? (l.kids || []).slice(0, MA.SO_TOI_DA).map(function (k) { return { ten: k.name || '' }; }) : [];
      return Promise.resolve();
    }
    if (v.indexOf('sv:') === 0) {
      return fetch('/api/admin/oral?classId=' + encodeURIComponent(v.slice(3)), { headers: { 'X-Admin-Password': pw() } })
        .then(function (r) { return r.json(); })
        .then(function (d) { S.hs = (d.roster || []).slice(0, MA.SO_TOI_DA).map(function (r) { return { ten: r.name || '' }; }); })
        .catch(function () { S.hs = []; });
    }
    S.hs = [];
    for (var i = 1; i <= S.soThe; i++) S.hs.push({ ten: '' });
    return Promise.resolve();
  }

  /* ---------------- khung ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopTheGiay';
    root.className = 'tg';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Thẻ giấy A/B/C/D');
    root.innerHTML = '<div class="tg-nen" aria-hidden="true"></div>' +
      '<header class="tg-bar"><b class="tg-title">📇 Thẻ giấy A/B/C/D</b><span class="tg-sub" id="tgSub"></span><span class="tg-gap"></span>' +
      '<button type="button" class="tg-btn" id="tgTen" title="Hiện / ẩn tên học sinh">👁 Tên</button>' +
      '<button type="button" class="tg-btn" id="tgAm" title="Âm thanh">🔊</button>' +
      '<button type="button" class="tg-btn tg-btn-dong" id="tgDong">✕ Đóng</button></header>' +
      '<main class="tg-man" id="tgMan"></main>';
    document.body.appendChild(root);
    // khung camera dung lai giua cac cau (khong tao lai video)
    camBox = document.createElement('div');
    camBox.className = 'tg-cam';
    camBox.innerHTML = '<video playsinline muted autoplay></video><canvas class="tg-cam-lop"></canvas>' +
      '<div class="tg-cam-dem"><b id="tgCamDem">0/0</b><span>đã quét</span></div>' +
      '<div class="tg-cam-tt" id="tgCamTt">Đang mở camera…</div>' +
      '<div class="tg-cam-cd"><select id="tgCamChon" title="Chọn camera"></select>' +
      '<select id="tgCamRong" title="Độ phân giải xử lý"><option value="960">Nhanh · 960</option><option value="1280">Chuẩn · 1280</option><option value="1920">Xa · 1920</option></select></div>';
    video = camBox.querySelector('video');
    lop = camBox.querySelector('canvas');
    cv = document.createElement('canvas');
    ctxCv = cv.getContext('2d', { willReadFrequently: true });
    camBox.querySelector('#tgCamRong').addEventListener('change', function () { Q.rong = +this.value; luuPref(); });
    camBox.querySelector('#tgCamChon').addEventListener('change', function () { Q.cam = this.value; batCam(); });

    $('#tgDong').addEventListener('click', dong);
    $('#tgTen').addEventListener('click', function () { S.hienTen = !S.hienTen; luuPref(); veNut(); veLai(); });
    $('#tgAm').addEventListener('click', function () { S.am = !S.am; luuPref(); veNut(); });
    document.addEventListener('keydown', phim);
    window.addEventListener('resize', function () { if (Q.chay) veLop(); });
    S.built = true;
  }
  function veNut() {
    $('#tgTen').classList.toggle('is-off', !S.hienTen);
    $('#tgAm').textContent = S.am ? '🔊' : '🔇';
  }
  function veLai() {
    if (S.pha === 'sanh') veSanh();
    else if (S.pha === 'in') veIn();
    else if (S.pha === 'cau') { veKetQua(); veLuoi(); }
    else if (S.pha === 'tong') veTong();
  }
  function phim(e) {
    if (!root || root.hidden) return;
    if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
    if (e.key === 'Escape') { if (Q.chay) tatQuet(); else dong(); e.preventDefault(); return; }
    if (S.pha !== 'cau') return;
    if (e.key === 's' || e.key === 'S') { e.preventDefault(); batTatQuet(); }
    else if (e.key === 'Enter') { e.preventDefault(); if (!S.daLat) latDapAn(); else cauSau(); }
  }

  /* ---------------- man 1: chuan bi ---------------- */
  function veSanh() {
    S.pha = 'sanh';
    $('#tgSub').textContent = S.nhan || 'Câu hỏi tự do';
    var o = ['<option value="so">🔢 Chỉ đánh số thẻ 1 – N</option>'];
    docDs().forEach(function (l) { o.push('<option value="ls:' + esc(l.id) + '">📋 ' + esc(l.name) + ' (' + (l.kids || []).length + ')</option>'); });
    S.classes.forEach(function (c) { o.push('<option value="sv:' + esc(c.id) + '">🏫 ' + esc(c.name) + ' (' + c.size + ')</option>'); });
    var soKho = S.kho.length, chips = [5, 10, 15, 20, 0].map(function (n) {
      var tat = !S.tuDo && n && n > soKho;
      return '<button type="button" class="tg-chip' + (S.soCau === n ? ' is-on' : '') + '" data-so="' + n + '"' + (tat ? ' disabled' : '') + '>' +
        (n ? n + ' câu' : (S.tuDo ? '—' : 'Tất cả ' + soKho)) + '</button>';
    }).join('');
    $('#tgMan').innerHTML =
      '<div class="tg-sanh">' +
        '<section class="tg-the tg-sanh-chinh">' +
          '<h2 class="tg-h">Chuẩn bị</h2>' +
          '<label class="tg-nhan" for="tgNguon">Danh sách lớp — số thẻ theo thứ tự danh sách</label>' +
          '<div class="tg-hang"><select id="tgNguon" class="tg-chon">' + o.join('') + '</select>' +
          (!S.classes.length ? '<button type="button" class="tg-link" id="tgKhoa">🔑 Lấy lớp trên hệ thống</button>' : '') + '</div>' +
          '<div class="tg-hang" id="tgSoTheBox"' + (S.nguon === 'so' ? '' : ' hidden') + '><label class="tg-nhan" for="tgSoThe">Số thẻ</label>' +
            '<input id="tgSoThe" class="tg-o" type="number" min="1" max="60" value="' + S.soThe + '"></div>' +
          '<p class="tg-ghi" id="tgHsGhi">' + ghiHs() + '</p>' +
          '<label class="tg-nhan">Số câu</label><div class="tg-chips" id="tgSoCau">' + (S.tuDo ? [5, 10, 15, 20].map(function (n) {
            return '<button type="button" class="tg-chip' + (S.soCau === n ? ' is-on' : '') + '" data-so="' + n + '">' + n + ' câu</button>';
          }).join('') : chips) + '</div>' +
          (S.tuDo ? '<p class="tg-ghi tg-ghi-vang">Chưa chọn bài nào → <b>câu hỏi tự do</b>: cô đọc câu hỏi, cả lớp giơ thẻ, khi lật đáp án cô bấm chữ cái đúng.</p>'
            : '<p class="tg-ghi">' + soKho + ' câu trắc nghiệm từ ' + esc(S.nhan) + ' (từ vựng, ngữ pháp, điền từ — tối đa 4 lựa chọn).</p>') +
          '<p class="tg-loi" id="tgLoi" role="alert"></p>' +
          '<div class="tg-nut-hang"><button type="button" class="tg-go" id="tgBatDau">▶ Bắt đầu</button>' +
          '<button type="button" class="tg-phu" id="tgMoIn">🖨️ In thẻ</button></div>' +
        '</section>' +
        '<section class="tg-the tg-sanh-huongdan">' +
          '<h2 class="tg-h">Cách chơi</h2>' +
          '<div class="tg-mau">' + MA.svgThe(7, { cls: 'tg-mau-svg' }) + '</div>' +
          '<ol class="tg-buoc">' +
            '<li><b>In thẻ</b> — mỗi em một thẻ, số thẻ = số thứ tự trong danh sách. Trên thẻ không có tên.</li>' +
            '<li><b>Giơ thẻ</b> — xoay thẻ cho chữ cái mình chọn nằm ở <b>cạnh trên</b>. Cầm ở mép, không che viền đen.</li>' +
            '<li><b>Quét</b> — bấm 📷 Quét, đưa camera lia chậm khắp lớp. Thẻ nào đọc được hiện khung xanh và số.</li>' +
            '<li><b>Lật đáp án</b> — xem biểu đồ A/B/C/D và ai đúng. Cuối giờ có bảng tổng kết, xuất CSV.</li>' +
          '</ol>' +
          '<p class="tg-ghi">Thẻ in 1 tờ/A4 (mã 15 cm) đọc được tới khoảng 6 m; 2 tờ/A4 tới ~4 m; 4 tờ/A4 tới ~2,5 m. Máy chỉ xử lý hình trên máy này, không gửi đi đâu.</p>' +
        '</section>' +
      '</div>';
    $('#tgNguon').value = S.nguon;
    $('#tgNguon').addEventListener('change', function () {
      chonNguon(this.value).then(function () { veSanh(); });
    });
    var st = $('#tgSoThe');
    if (st) st.addEventListener('change', function () {
      S.soThe = Math.max(1, Math.min(MA.SO_TOI_DA, parseInt(this.value, 10) || 30));
      this.value = S.soThe;
      chonNguon('so').then(function () { $('#tgHsGhi').innerHTML = ghiHs(); });
    });
    $all('#tgSoCau [data-so]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.soCau = +b.getAttribute('data-so'); luuPref();
        $all('#tgSoCau [data-so]').forEach(function (x) { x.classList.toggle('is-on', x === b); });
      });
    });
    var k = $('#tgKhoa');
    if (k) k.addEventListener('click', moKhoa);
    $('#tgBatDau').addEventListener('click', batDau);
    $('#tgMoIn').addEventListener('click', function () { S.inTu = 1; S.inDen = Math.max(1, N()); veIn(); });
  }
  function ghiHs() {
    if (!N()) return 'Danh sách trống.';
    if (!coTen()) return N() + ' thẻ: số 1 – ' + N() + '.';
    return N() + ' em · thẻ số 1 – ' + N() + ' theo thứ tự danh sách (bạn mới thêm vào cuối danh sách).' +
      (S.hs.length >= MA.SO_TOI_DA ? ' Tối đa 60 thẻ.' : '');
  }
  function moKhoa() {
    var k = $('#tgKhoa');
    var f = document.createElement('form');
    f.className = 'tg-khoa';
    f.innerHTML = '<input type="password" id="tgPw" class="tg-o" placeholder="Mật khẩu quản trị" autocomplete="current-password" required>' +
      '<button type="submit" class="tg-phu">Mở</button>';
    k.parentNode.appendChild(f);
    k.remove();
    $('#tgPw').focus();
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem(PW_KEY, $('#tgPw').value); } catch (x) { /* bo qua */ }
      napLop().then(function () {
        if (!S.classes.length) { $('#tgLoi').textContent = 'Mật khẩu không đúng hoặc chưa có lớp nào trên hệ thống.'; return; }
        chonNguon('sv:' + S.classes[0].id).then(veSanh);
      });
    });
  }

  /* ---------------- man in the ---------------- */
  var KIEU_IN = {
    1: { ten: '1 thẻ / trang', ghi: 'mã 15 cm · xa tới ~6 m', the: 196, vt: [[7, 10]] },
    2: { ten: '2 thẻ / trang', ghi: 'mã 10 cm · xa tới ~4 m', the: 136, vt: [[37, 8], [37, 153]] },
    4: { ten: '4 thẻ / trang', ghi: 'mã 7,5 cm · xa tới ~2,5 m', the: 98, vt: [[5, 25], [107, 25], [5, 173.5], [107, 173.5]] }
  };
  function trangIn() {
    var k = KIEU_IN[S.inKieu], ds = [], tu = Math.max(1, S.inTu), den = Math.min(MA.SO_TOI_DA, Math.max(tu, S.inDen));
    for (var id = tu; id <= den; id++) ds.push(id);
    var trang = [], per = k.vt.length;
    for (var i = 0; i < ds.length; i += per) {
      var o = '<div class="tg-trang">';
      ds.slice(i, i + per).forEach(function (id, j) {
        var p = k.vt[j];
        o += '<div class="tg-in-the" style="left:' + (p[0] / 210 * 100) + '%;top:' + (p[1] / 297 * 100) + '%;width:' + (k.the / 210 * 100) + '%">' + MA.svgThe(id) + '</div>';
        if (S.inKieu === 1) {
          o += '<div class="tg-in-chu" style="top:' + ((p[1] + k.the + 8) / 297 * 100) + '%">' +
            '<b>Thẻ số ' + id + '</b> · Giơ thẻ sao cho chữ cái em chọn nằm ở <b>cạnh trên</b>. Cầm ở mép thẻ, không che viền đen. Cắt theo đường nét đứt.</div>';
        }
      });
      trang.push(o + '</div>');
    }
    if (S.inBang && coTen()) {
      var hang = S.hs.slice(tu - 1, den).map(function (h, j) { return '<tr><td>' + (tu + j) + '</td><td>' + esc(h.ten) + '</td></tr>'; });
      var nua = Math.ceil(hang.length / 2);
      trang.push('<div class="tg-trang tg-trang-bang"><h3>Bảng số thẻ — dành cho giáo viên</h3><p>' + esc(tenNguon()) + ' · không phát cho học sinh</p>' +
        '<div class="tg-bang-2"><table><thead><tr><th>Số</th><th>Họ tên</th></tr></thead><tbody>' + hang.slice(0, nua).join('') + '</tbody></table>' +
        '<table><thead><tr><th>Số</th><th>Họ tên</th></tr></thead><tbody>' + hang.slice(nua).join('') + '</tbody></table></div></div>');
    }
    return trang;
  }
  function tenNguon() {
    var v = S.nguon;
    if (v.indexOf('ls:') === 0) { var l = docDs().filter(function (x) { return 'ls:' + x.id === v; })[0]; return l ? l.name : ''; }
    if (v.indexOf('sv:') === 0) { var c = S.classes.filter(function (x) { return 'sv:' + x.id === v; })[0]; return c ? c.name : ''; }
    return 'Thẻ số 1 – ' + N();
  }
  function veIn() {
    S.pha = 'in';
    var tr = trangIn();
    $('#tgMan').innerHTML =
      '<div class="tg-in">' +
        '<section class="tg-the tg-in-cd">' +
          '<h2 class="tg-h">🖨️ In thẻ</h2>' +
          '<label class="tg-nhan">Khổ A4 — số thẻ mỗi trang</label>' +
          '<div class="tg-chips tg-chips-doc" id="tgInKieu">' + [1, 2, 4].map(function (n) {
            return '<button type="button" class="tg-chip' + (S.inKieu === n ? ' is-on' : '') + '" data-k="' + n + '"><b>' + KIEU_IN[n].ten + '</b><small>' + KIEU_IN[n].ghi + '</small></button>';
          }).join('') + '</div>' +
          '<label class="tg-nhan">Thẻ số</label><div class="tg-hang"><input id="tgInTu" class="tg-o" type="number" min="1" max="60" value="' + S.inTu + '"> – ' +
          '<input id="tgInDen" class="tg-o" type="number" min="1" max="60" value="' + S.inDen + '"></div>' +
          (coTen() ? '<label class="tg-hop"><input type="checkbox" id="tgInBang"' + (S.inBang ? ' checked' : '') + '> In kèm bảng số – tên cho cô (1 trang riêng)</label>' : '') +
          '<p class="tg-ghi">' + tr.length + ' trang A4. Khi in chọn <b>Khổ A4, Tỉ lệ 100% (không “vừa trang”)</b>, giấy trắng, mực đen. Giấy dày hoặc ép plastic mờ dùng được lâu.</p>' +
          '<div class="tg-nut-hang"><button type="button" class="tg-go" id="tgInNgay">🖨️ In ngay</button>' +
          '<button type="button" class="tg-phu" id="tgInVe">← Quay lại</button></div>' +
        '</section>' +
        '<section class="tg-in-xem" aria-label="Xem trước bản in">' + tr.slice(0, 6).join('') +
          (tr.length > 6 ? '<p class="tg-ghi">… và ' + (tr.length - 6) + ' trang nữa</p>' : '') + '</section>' +
      '</div>';
    $all('#tgInKieu [data-k]').forEach(function (b) {
      b.addEventListener('click', function () { S.inKieu = +b.getAttribute('data-k'); luuPref(); veIn(); });
    });
    $('#tgInTu').addEventListener('change', function () { S.inTu = Math.max(1, Math.min(60, parseInt(this.value, 10) || 1)); veIn(); });
    $('#tgInDen').addEventListener('change', function () { S.inDen = Math.max(1, Math.min(60, parseInt(this.value, 10) || 1)); veIn(); });
    var bg = $('#tgInBang');
    if (bg) bg.addEventListener('change', function () { S.inBang = this.checked; luuPref(); veIn(); });
    $('#tgInNgay').addEventListener('click', inNgay);
    $('#tgInVe').addEventListener('click', veSanh);
  }
  function inNgay() {
    var box = document.getElementById('tgIn');
    if (!box) { box = document.createElement('div'); box.id = 'tgIn'; document.body.appendChild(box); }
    box.innerHTML = trangIn().join('');
    document.documentElement.classList.add('tg-in');
    var xong = function () { document.documentElement.classList.remove('tg-in'); window.removeEventListener('afterprint', xong); };
    window.addEventListener('afterprint', xong);
    setTimeout(function () { window.print(); }, 60);
  }

  /* ---------------- man cau hoi ---------------- */
  function batDau() {
    if (!N()) { $('#tgLoi').textContent = 'Danh sách lớp đang trống.'; return; }
    chiaCau();
    if (!S.cau.length) { $('#tgLoi').textContent = 'Chưa có câu hỏi.'; return; }
    S.kq = []; S.i = -1;
    cauSau();
  }
  function cauSau() {
    if (S.pha === 'cau' && S.i >= 0 && S.daLat && !S.kq[S.i]) return; // cau tu do: chua chon dap an dung
    if (S.i >= S.cau.length - 1) { tatQuet(); veTong(); return; }
    S.i++;
    S.tl = {}; S.cho = {}; S.daLat = false;
    veCau();
  }
  function veCau() {
    S.pha = 'cau';
    var c = S.cau[S.i], soOpt = c.tuDo ? 4 : c.opts.length;
    $('#tgSub').textContent = (S.nhan ? S.nhan + ' · ' : '') + 'Câu ' + (S.i + 1) + '/' + S.cau.length;
    $('#tgMan').innerHTML =
      '<div class="tg-choi">' +
        '<section class="tg-chinh">' +
          '<div class="tg-the tg-cau' + (c.tuDo ? ' is-tudo' : '') + '">' +
            '<div class="tg-cau-dau"><span class="tg-cau-so">Câu ' + (S.i + 1) + '</span><span class="tg-cau-lenh">' + esc(c.lenh) + '</span></div>' +
            (c.zh ? '<div class="tg-cau-zh zh">' + esc(c.zh) + '</div>' : '') +
            (c.ctx ? '<div class="tg-cau-ctx">' + esc(c.ctx) + '</div>' : '') +
          '</div>' +
          '<div class="tg-vung" id="tgVung">' +
            '<div class="tg-opts tg-opts-' + soOpt + '" id="tgOpts">' + c.opts.slice(0, soOpt).map(function (o, i) {
              return '<div class="tg-opt" data-i="' + i + '"><span class="tg-opt-chu">' + CHU[i] + '</span><span class="tg-opt-nd zh">' + esc(o) + '</span>' +
                '<span class="tg-opt-thanh"><i></i></span><span class="tg-opt-dem"></span></div>';
            }).join('') + '</div>' +
          '</div>' +
          '<div class="tg-ketqua" id="tgKetQua" hidden></div>' +
        '</section>' +
        '<aside class="tg-ben">' +
          '<div class="tg-the tg-dem"><b id="tgDem">0/' + N() + '</b><span>đã trả lời</span></div>' +
          '<div class="tg-luoi" id="tgLuoi"></div>' +
          '<div class="tg-dk">' +
            '<button type="button" class="tg-phu tg-nut-quet" id="tgQuet">📷 Quét <kbd>S</kbd></button>' +
            '<button type="button" class="tg-go" id="tgLat">Lật đáp án <kbd>↵</kbd></button>' +
            '<button type="button" class="tg-go" id="tgSau" hidden>' + (S.i >= S.cau.length - 1 ? '🏁 Tổng kết' : 'Câu tiếp ▶') + ' <kbd>↵</kbd></button>' +
            '<button type="button" class="tg-link" id="tgKetThuc">Kết thúc sớm</button>' +
          '</div>' +
        '</aside>' +
      '</div>';
    veLuoi();
    $('#tgQuet').addEventListener('click', batTatQuet);
    $('#tgLat').addEventListener('click', latDapAn);
    $('#tgSau').addEventListener('click', cauSau);
    $('#tgKetThuc').addEventListener('click', function () {
      if (!confirm('Kết thúc và xem tổng kết các câu đã lật?')) return;
      tatQuet(); veTong();
    });
    if (Q.chay) ganCam();
    veQuetNut();
  }
  function veLuoi() {
    var box = $('#tgLuoi');
    if (!box) return;
    var c = S.cau[S.i], h = '';
    for (var id = 1; id <= N(); id++) {
      var cls = 'tg-so', a = S.tl[id];
      if (a != null) cls += ' is-co';
      if (S.daLat && c.dung >= 0) cls += a == null ? ' is-trong' : (a === c.dung ? ' is-dung' : ' is-sai');
      var ten = S.hienTen && tenThe(id) ? ' title="' + esc(tenThe(id)) + '"' : '';
      h += '<span class="' + cls + '" data-id="' + id + '"' + ten + '>' + id + (S.daLat && a != null ? '<small>' + CHU[a] + '</small>' : '') + '</span>';
    }
    box.innerHTML = h;
    box.style.setProperty('--cot', String(N() > 48 ? 8 : N() > 30 ? 7 : N() > 20 ? 6 : 5));
    var dem = Object.keys(S.tl).length;
    $('#tgDem').textContent = dem + '/' + N();
    var cd = camBox.querySelector('#tgCamDem');
    if (cd) cd.textContent = dem + '/' + N();
  }
  function ghiNhan(id, dap) {
    if (S.pha !== 'cau' || S.daLat || id < 1 || id > N()) return;
    var c = S.cho[id];
    if (c && c.dap === dap) c.n++; else c = S.cho[id] = { dap: dap, n: 1 };
    if (c.n >= XAC_NHAN && S.tl[id] !== dap) {
      var moi = S.tl[id] == null;
      S.tl[id] = dap;
      if (moi) tiengQuet();
      veLuoi();
      var o = $('#tgLuoi [data-id="' + id + '"]');
      if (o) { o.classList.add('is-nay'); }
    }
  }

  /* ---------------- lat dap an ---------------- */
  function latDapAn() {
    if (S.daLat) return;
    var c = S.cau[S.i];
    tatQuet();
    S.daLat = true;
    $('#tgLat').hidden = true;
    $('#tgQuet').disabled = true;
    if (c.tuDo && c.dung < 0) { veChonDung(); return; }
    ketThucCau();
  }
  function veChonDung() {
    var kq = $('#tgKetQua');
    kq.hidden = false;
    kq.innerHTML = '<div class="tg-the tg-chondung"><b>Đáp án đúng là?</b><div class="tg-chips">' + CHU.map(function (ch, i) {
      return '<button type="button" class="tg-chip tg-chip-to" data-d="' + i + '">' + ch + '</button>';
    }).join('') + '<button type="button" class="tg-chip" data-d="-2">Không chấm (khảo sát)</button></div></div>';
    $all('#tgKetQua [data-d]').forEach(function (b) {
      b.addEventListener('click', function () { S.cau[S.i].dung = +b.getAttribute('data-d'); ketThucCau(); });
    });
  }
  function ketThucCau() {
    var c = S.cau[S.i];
    S.kq[S.i] = { cau: c, tl: JSON.parse(JSON.stringify(S.tl)), dung: c.dung };
    $('#tgSau').hidden = false;
    tiengLat();
    veKetQua();
    veLuoi();
  }
  function veKetQua() {
    if (S.pha !== 'cau' || !S.daLat || !S.kq[S.i]) return;
    var c = S.cau[S.i], dem = [0, 0, 0, 0], tong = 0;
    Object.keys(S.tl).forEach(function (id) { dem[S.tl[id]]++; tong++; });
    var mx = Math.max(1, Math.max.apply(null, dem));
    var vung = $('#tgVung');
    // cau 2–3 lua chon ma co em gio chu khong co (vd. D): them o "khong co" de bieu do khop tong
    var ds = (c.tuDo ? CHU : c.opts).slice();
    for (var x = ds.length; x < 4; x++) if (dem.slice(x).some(function (v) { return v > 0; })) ds.push(null);
    vung.innerHTML = '<div class="tg-opts tg-opts-' + ds.length + ' is-lat" id="tgOpts">' + ds.map(function (o, i) {
      var la = i === c.dung;
      return '<div class="tg-opt' + (la ? ' is-dung' : (c.dung >= 0 ? ' is-mo' : '')) + (o === null ? ' is-khong' : '') + '" data-i="' + i + '" style="--p:' + (dem[i] / mx) + '">' +
        '<span class="tg-opt-chu">' + CHU[i] + '</span><span class="tg-opt-nd zh">' + (o === null ? '<small>không có lựa chọn ' + CHU[i] + '</small>' : esc(c.tuDo ? '' : o)) + '</span>' +
        '<span class="tg-opt-thanh"><i></i></span><span class="tg-opt-dem">' + dem[i] + (tong ? ' · ' + Math.round(dem[i] * 100 / tong) + '%' : '') + '</span>' +
        (la ? '<span class="tg-opt-tick" aria-label="đáp án đúng">✓</span>' : '') + '</div>';
    }).join('') + '</div>';
    var kq = $('#tgKetQua');
    kq.hidden = false;
    if (c.dung < 0) {
      kq.innerHTML = '<div class="tg-the tg-ai"><p>Câu khảo sát — không chấm đúng / sai. ' + tong + ' em đã trả lời.</p></div>';
      return;
    }
    var dung = [], sai = [];
    for (var id = 1; id <= N(); id++) {
      if (S.tl[id] == null) continue;
      (S.tl[id] === c.dung ? dung : sai).push(id);
    }
    var chip = function (id, sv) {
      return '<span class="tg-ai-chip' + (sv ? ' is-sai' : '') + '"><b>' + id + '</b>' + (S.hienTen && tenThe(id) ? esc(tenThe(id)) : '') +
        (sv ? '<i>' + CHU[S.tl[id]] + '</i>' : '') + '</span>';
    };
    var chua = N() - tong;
    kq.innerHTML = '<div class="tg-the tg-ai">' +
      '<div class="tg-ai-dau"><b class="tg-ai-dung">✓ Đúng ' + dung.length + '</b><b class="tg-ai-sai">Chưa đúng ' + sai.length + '</b>' +
      (chua ? '<b class="tg-ai-trong">Chưa quét ' + chua + '</b>' : '') + '</div>' +
      (c.why ? '<p class="tg-ai-why">💡 ' + esc(c.why) + '</p>' : '') +
      '<div class="tg-ai-ds">' + (dung.map(function (id) { return chip(id, false); }).join('') || '<span class="tg-ghi">Chưa bạn nào đúng.</span>') + '</div>' +
      (sai.length ? '<details class="tg-ai-xem"><summary>Xem các bạn chưa đúng</summary><div class="tg-ai-ds">' + sai.map(function (id) { return chip(id, true); }).join('') + '</div></details>' : '') +
      '</div>';
  }

  /* ---------------- tong ket ---------------- */
  function bangDiem() {
    var lat = S.kq.filter(function (k) { return k && k.dung >= 0; });
    var ds = [];
    for (var id = 1; id <= N(); id++) {
      var d = 0, tl = 0;
      lat.forEach(function (k) { if (k.tl[id] != null) { tl++; if (k.tl[id] === k.dung) d++; } });
      ds.push({ id: id, ten: tenThe(id), dung: d, tl: tl, tong: lat.length });
    }
    return { lat: lat, ds: ds };
  }
  function veTong() {
    S.pha = 'tong';
    $('#tgSub').textContent = (S.nhan ? S.nhan + ' · ' : '') + 'Tổng kết';
    var b = bangDiem(), xh = b.ds.slice().sort(function (p, q) { return q.dung - p.dung || q.tl - p.tl || p.id - q.id; });
    var ten = function (r) { return S.hienTen && r.ten ? esc(r.ten) : 'Thẻ ' + r.id; };
    var bv = xh.filter(function (r) { return r.dung > 0; }).slice(0, 3);
    var bucThu = [1, 0, 2].filter(function (i) { return bv[i]; }).map(function (i) {
      var r = bv[i];
      return '<div class="tg-buc tg-buc-' + (i + 1) + '"><span class="tg-buc-ten">' + ten(r) + '</span><span class="tg-buc-diem">' + r.dung + '/' + r.tong + '</span>' +
        '<span class="tg-buc-coc">' + (i + 1) + '</span></div>';
    }).join('');
    var hang = xh.map(function (r, j) {
      var o = b.lat.map(function (k) {
        var a = k.tl[r.id];
        return '<td class="' + (a == null ? 'is-trong' : a === k.dung ? 'is-dung' : 'is-sai') + '">' + (a == null ? '·' : CHU[a]) + '</td>';
      }).join('');
      return '<tr><td>' + (j + 1) + '</td><td><b>' + r.id + '</b></td><td class="tg-bd-ten">' + (S.hienTen ? esc(r.ten) : '') + '</td><td><b>' + r.dung + '</b>/' + r.tong + '</td>' + o + '</tr>';
    }).join('');
    var tbLop = b.lat.length ? Math.round(b.ds.reduce(function (s, r) { return s + r.dung; }, 0) * 100 / (b.lat.length * Math.max(1, N()))) : 0;
    $('#tgMan').innerHTML =
      '<div class="tg-tong">' +
        '<section class="tg-the tg-tong-dau"><h2 class="tg-h">🏁 Tổng kết</h2>' +
          '<p class="tg-ghi">' + b.lat.length + ' câu đã chấm · ' + N() + ' thẻ · lớp đúng trung bình ' + tbLop + '%. Điểm không tự ghi vào sổ — xuất CSV nếu cần.</p>' +
          (bucThu ? '<div class="tg-bucs">' + bucThu + '</div>' : '') +
          '<div class="tg-nut-hang"><button type="button" class="tg-go" id="tgCsv">⬇ Xuất CSV</button>' +
          '<button type="button" class="tg-phu" id="tgLai">↺ Chơi lại</button><button type="button" class="tg-phu" id="tgVeSanh">⚙ Chuẩn bị</button></div>' +
        '</section>' +
        '<section class="tg-the tg-bd-khung"><table class="tg-bd"><thead><tr><th>#</th><th>Thẻ</th><th>Họ tên</th><th>Đúng</th>' +
          b.lat.map(function (k, i) { return '<th>C' + (S.kq.indexOf(k) + 1) + '</th>'; }).join('') + '</tr></thead><tbody>' + hang + '</tbody></table></section>' +
      '</div>';
    $('#tgCsv').addEventListener('click', xuatCsv);
    $('#tgLai').addEventListener('click', batDau);
    $('#tgVeSanh').addEventListener('click', veSanh);
  }
  function xuatCsv() {
    var b = bangDiem(), q = function (s) { s = String(s == null ? '' : s); return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
    var dong1 = ['Số thẻ', 'Họ tên', 'Đúng', 'Số câu'].concat(b.lat.map(function (k) { return 'Câu ' + (S.kq.indexOf(k) + 1) + ' (đáp án ' + CHU[k.dung] + ')'; }));
    var dongs = [dong1.map(q).join(',')];
    b.ds.forEach(function (r) {
      dongs.push([r.id, r.ten, r.dung, r.tong].concat(b.lat.map(function (k) { var a = k.tl[r.id]; return a == null ? '' : CHU[a]; })).map(q).join(','));
    });
    var blob = new Blob(['﻿' + dongs.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a'), d = new Date();
    a.href = URL.createObjectURL(blob);
    a.download = 'the-giay-' + d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2) + '.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }

  /* ---------------- camera + nhan dien ---------------- */
  function veQuetNut() {
    var b = $('#tgQuet');
    if (b) { b.classList.toggle('is-on', Q.chay); b.innerHTML = (Q.chay ? '⏹ Dừng quét' : '📷 Quét') + ' <kbd>S</kbd>'; }
  }
  function batTatQuet() { if (Q.chay) tatQuet(); else batQuet(); }
  function ganCam() {
    var vung = $('#tgVung');
    if (!vung) return;
    root.classList.add('is-quet');
    vung.innerHTML = '';
    vung.appendChild(camBox);
    veLuoi();
    setTimeout(veLop, 30);
  }
  function batQuet() {
    if (S.pha !== 'cau' || S.daLat) return;
    Q.chay = true;
    Q.kq = []; Q.vw = 0; Q.ban = false; Q.moc = Q.so + 1; // bo ket qua cu con dang xu ly
    ganCam();
    veQuetNut();
    batCam();
  }
  function tatQuet() {
    var dangChay = Q.chay;
    Q.chay = false;
    clearTimeout(Q.hen);
    Q.ban = false;
    if (Q.stream) { Q.stream.getTracks().forEach(function (t) { t.stop(); }); Q.stream = null; }
    try { video.srcObject = null; } catch (e) { /* bo qua */ }
    root.classList.remove('is-quet');
    // dung quet giua chung: tra lai bang lua chon (cau tra loi da quet van giu)
    if (dangChay && S.pha === 'cau' && camBox.parentNode && !S.daLat) { veCau(); return; }
    veQuetNut();
  }
  function ttCam(t) { var e = camBox.querySelector('#tgCamTt'); if (e) { e.textContent = t; e.hidden = !t; } }
  function batCam() {
    if (Q.stream) { Q.stream.getTracks().forEach(function (t) { t.stop(); }); Q.stream = null; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { ttCam('Trình duyệt không mở được camera (cần https hoặc localhost).'); return; }
    ttCam('Đang mở camera…');
    var v = { width: { ideal: 1920 }, height: { ideal: 1080 } };
    if (Q.cam) v.deviceId = { exact: Q.cam }; else v.facingMode = { ideal: 'environment' };
    navigator.mediaDevices.getUserMedia({ video: v, audio: false }).then(function (st) {
      if (!Q.chay) { st.getTracks().forEach(function (t) { t.stop(); }); return; }
      Q.stream = st;
      video.srcObject = st;
      var p = video.play(); if (p && p.catch) p.catch(function () { /* bo qua */ });
      ttCam('');
      dsCam();
      clearTimeout(Q.hen);
      Q.hen = setTimeout(vong, CHU_KY);
    }).catch(function (e) {
      ttCam('Không mở được camera: ' + (e && e.name === 'NotAllowedError' ? 'chưa cho phép dùng camera.' : (e && e.message) || 'lỗi'));
    });
  }
  function dsCam() {
    if (!navigator.mediaDevices.enumerateDevices) return;
    navigator.mediaDevices.enumerateDevices().then(function (ds) {
      var cams = ds.filter(function (d) { return d.kind === 'videoinput'; });
      var sel = camBox.querySelector('#tgCamChon');
      var dang = Q.stream && Q.stream.getVideoTracks()[0] && Q.stream.getVideoTracks()[0].getSettings ? Q.stream.getVideoTracks()[0].getSettings().deviceId : '';
      sel.innerHTML = cams.map(function (c, i) { return '<option value="' + esc(c.deviceId) + '">' + esc(c.label || ('Camera ' + (i + 1))) + '</option>'; }).join('');
      sel.hidden = cams.length < 2;
      if (dang) sel.value = dang;
    }).catch(function () { /* bo qua */ });
  }
  function moWorker() {
    if (Q.worker !== null || typeof Worker === 'undefined') return;
    try {
      Q.worker = new Worker('/js/thegiay-worker.js');
      Q.worker.onmessage = function (e) {
        Q.ban = false;
        if (e.data.so < (Q.moc || 0)) return;
        nhanKq(e.data.kq, e.data.ms);
      };
      Q.worker.onerror = function () { Q.worker = false; Q.ban = false; };
    } catch (e) { Q.worker = false; }
  }
  function vong() {
    if (!Q.chay) return;
    Q.hen = setTimeout(vong, CHU_KY);
    if (Q.ban) { if (Date.now() - Q.guiLuc > 2500) Q.ban = false; return; }
    var vw = video.videoWidth, vh = video.videoHeight;
    if (!vw || !vh) return;
    var pw = Math.min(vw, Q.rong), ph = Math.round(vh * pw / vw);
    if (cv.width !== pw || cv.height !== ph) { cv.width = pw; cv.height = ph; }
    ctxCv.drawImage(video, 0, 0, pw, ph);
    var im = ctxCv.getImageData(0, 0, pw, ph);
    Q.pw = pw; Q.ph = ph; Q.vw = vw; Q.vh = vh;
    if (Q.worker === null) moWorker();
    if (Q.worker) {
      Q.ban = true; Q.guiLuc = Date.now(); Q.so++;
      Q.worker.postMessage({ so: Q.so, w: pw, h: ph, buf: im.data.buffer, opt: {} }, [im.data.buffer]);
    } else {
      var t0 = Date.now();
      var kq = MA.phatHien(MA.xam(im.data, pw, ph), pw, ph, {});
      nhanKq(kq, Date.now() - t0);
    }
  }
  function nhanKq(kq, ms) {
    if (!Q.chay) return;
    Q.kq = kq || [];
    Q.ms = ms; Q.khung++;
    Q.msTb = Q.msTb ? Q.msTb * 0.85 + ms * 0.15 : ms;
    Q.kq.forEach(function (r) { ghiNhan(r.id, r.dap); });
    veLop();
  }
  function veLop() {
    if (!lop || !camBox.parentNode) return;
    var bw = camBox.clientWidth, bh = camBox.clientHeight, dpr = window.devicePixelRatio || 1;
    if (lop.width !== Math.round(bw * dpr) || lop.height !== Math.round(bh * dpr)) { lop.width = Math.round(bw * dpr); lop.height = Math.round(bh * dpr); }
    var g = lop.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, bw, bh);
    if (!Q.chay || !Q.vw) return;
    var s = Math.min(bw / Q.vw, bh / Q.vh), ox = (bw - Q.vw * s) / 2, oy = (bh - Q.vh * s) / 2, k = Q.vw / Q.pw * s;
    Q.kq.forEach(function (r) {
      var trong = r.id >= 1 && r.id <= N(), daCo = S.tl[r.id] != null;
      var mau = !trong ? '#9a8f88' : daCo ? '#2fbf5f' : '#e9a23b';
      g.beginPath();
      r.goc.forEach(function (p, i) { var x = ox + p[0] * k, y = oy + p[1] * k; if (i) g.lineTo(x, y); else g.moveTo(x, y); });
      g.closePath();
      g.lineWidth = 4; g.strokeStyle = mau; g.lineJoin = 'round'; g.stroke();
      g.fillStyle = mau === '#2fbf5f' ? 'rgba(47,191,95,.18)' : 'rgba(233,162,59,.15)'; g.fill();
      var cx = ox + r.tam[0] * k, cy = oy + r.tam[1] * k, t = trong ? String(r.id) : '?', fs = Math.max(13, Math.min(30, r.co * k * 0.32));
      g.font = '800 ' + fs + 'px "Be Vietnam Pro", sans-serif';
      var tw = g.measureText(t).width + fs * 0.7;
      g.fillStyle = mau;
      g.beginPath();
      if (g.roundRect) g.roundRect(cx - tw / 2, cy - fs * 0.72, tw, fs * 1.44, fs * 0.4); else g.rect(cx - tw / 2, cy - fs * 0.72, tw, fs * 1.44);
      g.fill();
      g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(t, cx, cy + 1);
    });
    var tt = camBox.querySelector('#tgCamTt');
    if (tt && tt.hidden) camBox.setAttribute('data-ms', Math.round(Q.msTb) + ' ms · ' + Q.pw + 'px');
  }

  /* ---------------- mo / dong ---------------- */
  function mo(opt) {
    opt = opt || {};
    if (!MA) { alert('Thiếu thegiay-ma.js'); return; }
    if (!S.built) dung();
    var p = docLS(PREF_KEY, {});
    S.nhan = opt.nhan || '';
    S.kho = lapKho(opt);
    S.tuDo = !S.kho.length;
    S.nguon = p.nguon || 'so';
    S.soThe = p.soThe >= 1 && p.soThe <= 60 ? p.soThe : 30;
    S.soCau = p.soCau != null ? p.soCau : 10;
    if (S.tuDo && !S.soCau) S.soCau = 10;
    S.inKieu = KIEU_IN[p.inKieu] ? p.inKieu : 1;
    S.inBang = p.inBang !== false;
    S.hienTen = p.hienTen !== false;
    S.am = p.am !== false;
    Q.rong = [960, 1280, 1920].indexOf(p.rong) >= 0 ? p.rong : 1280;
    camBox.querySelector('#tgCamRong').value = String(Q.rong);
    root.hidden = false;
    document.documentElement.classList.add('tg-open');
    veNut();
    $('#tgMan').innerHTML = '<p class="tg-ghi tg-cho">Đang mở…</p>';
    napLop().then(function () {
      var hop = S.nguon === 'so' || docDs().some(function (l) { return 'ls:' + l.id === S.nguon; }) ||
        S.classes.some(function (c) { return 'sv:' + c.id === S.nguon; });
      if (!hop) S.nguon = 'so';
      return chonNguon(S.nguon);
    }).then(veSanh);
  }
  function dong() {
    tatQuet();
    if (window.NhacNen) try { window.NhacNen.tat(); } catch (e) { /* bo qua */ }
    root.hidden = true;
    root.classList.remove('is-quet');
    S.pha = 'sanh';
    document.documentElement.classList.remove('tg-open');
  }

  window.LopTheGiay = {
    mo: mo, dong: dong,
    // cho kiem thu: trang thai + so lieu quet
    _trangThai: function () { return { pha: S.pha, i: S.i, n: N(), tl: S.tl, kq: S.kq, cau: S.cau, quet: { chay: Q.chay, khung: Q.khung, ms: Q.ms, msTb: Q.msTb, pw: Q.pw, ph: Q.ph, soThe: Q.kq.length, worker: !!Q.worker } }; }
  };
})();
