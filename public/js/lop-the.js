/* The tra loi (kieu Plickers) — man chieu o Che do lop hoc.
   Moi hoc sinh mot the giay in ma rieng (public/js/the-ma.js), xoay the cho chu
   cai minh chon len tren roi gio cao. Giao vien mo /quet tren dien thoai (quet ma
   QR o sanh), quet ca lop; man chieu nhan dap an qua phong live.js kieu 'the'.
   Hoc sinh khong can thiet bi gi. Mo bang window.LopThe.mo({ cau, nhan }).
   So the = thu tu trong danh sach lop (danh sach nhanh cua man UFO hoac lop tren
   he thong); khong dung danh sach thi chi danh so 1..N.                        */
(function () {
  'use strict';

  var CHU = ['A', 'B', 'C', 'D'];
  var PW_KEY = 'hyv_admin_pw';
  var LIST_KEY = 'hyv_ufo_lists';
  var PREF_KEY = 'hyv_the_pref';

  var S = {
    built: false, room: null, poll: null, lenhSeq: 0, info: null,
    goc: [], nhan: '', nguon: 'so', soThe: 30, soCau: 10, classes: [], hs: [],
    cau: [], i: -1, pha: 'sanh', kq: [], tuDo: false, cho: false, dangLat: false
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
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function tenGoi(ten) { var w = String(ten).trim().split(/\s+/); return w[w.length - 1]; }

  /* ---------------- phong tren may chu ---------------- */
  function api(method, path, body) {
    var r = S.room;
    var url = '/api/live/' + (path === 'tao' ? 'tao' : r.ma + '/' + path) + (method === 'GET' ? '?khoa=' + encodeURIComponent(r.khoa) : '');
    return fetch(url, {
      method: method,
      headers: method === 'GET' ? {} : { 'Content-Type': 'application/json' },
      body: method === 'GET' ? undefined : JSON.stringify(Object.assign({ khoa: r ? r.khoa : '' }, body || {})),
      cache: 'no-store'
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (d) {
        if (!res.ok) throw new Error(d.error || 'Lỗi kết nối');
        return d;
      });
    });
  }
  function moPhong() {
    if (S.room) return Promise.resolve();
    return fetch('/api/live/tao', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kieu: 'the' }) })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; }); })
      .then(function (d) {
        S.room = { ma: d.ma, khoa: d.khoa, quet: d.quet };
        S.lenhSeq = 0;
        S.poll = setInterval(tai, 1000);
      });
  }
  function dongPhong() {
    if (!S.room) return;
    clearInterval(S.poll);
    api('POST', 'xong').catch(function () { /* bo qua */ });
    S.room = null;
    S.info = null;
  }
  function linkQuet() {
    return location.origin + '/quet#ma=' + S.room.ma + '&k=' + encodeURIComponent(S.room.quet);
  }

  function tai() {
    if (!S.room) return;
    api('GET', 'gv').then(function (d) {
      var cu = S.info;
      S.info = d;
      if (S.pha === 'sanh' && (!cu || cu.may !== d.may)) veMay();
      if (S.pha === 'hoi' && d.qid === S.qid) veThe();
      // lenh tu dien thoai: lat dap an / cau tiep / ket thuc
      if (d.lenh && d.lenh.seq > S.lenhSeq) {
        S.lenhSeq = d.lenh.seq;
        if (d.lenh.loai === 'lat' && S.pha === 'hoi') lat();
        else if (d.lenh.loai === 'tiep' && (S.pha === 'hoi' || S.pha === 'lat')) tiep();
        else if (d.lenh.loai === 'tiep' && S.pha === 'sanh') batDau();
        else if (d.lenh.loai === 'xong') ketThuc();
      }
    }).catch(function () { /* mang chap chon: lan sau thu lai */ });
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
    ghiLS(PREF_KEY, { nguon: v, soThe: S.soThe, soCau: S.soCau });
    if (v.indexOf('ls:') === 0) {
      var l = docDs().filter(function (x) { return 'ls:' + x.id === v; })[0];
      S.hs = l ? l.kids.slice(0, 100).map(function (k, i) { return { the: i + 1, ten: k.name }; }) : [];
      return Promise.resolve();
    }
    if (v.indexOf('sv:') === 0) {
      return fetch('/api/admin/oral?classId=' + encodeURIComponent(v.slice(3)), { headers: { 'X-Admin-Password': pw() } })
        .then(function (r) { return r.json(); })
        .then(function (d) { S.hs = (d.roster || []).slice(0, 100).map(function (r, i) { return { the: i + 1, ten: r.name }; }); })
        .catch(function () { S.hs = []; });
    }
    S.hs = [];
    for (var i = 1; i <= S.soThe; i++) S.hs.push({ the: i, ten: '' });
    return Promise.resolve();
  }
  function tenThe(id) {
    for (var i = 0; i < S.hs.length; i++) if (S.hs[i].the === id) return S.hs[i].ten;
    return '';
  }

  /* ---------------- dung khung ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopThe';
    root.className = 'lt';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Thẻ trả lời');
    root.innerHTML =
      '<header class="lt-bar">' +
        '<b class="lt-title">📇 Thẻ trả lời</b>' +
        '<span class="lt-bar-sub" id="ltSub"></span>' +
        '<span class="lt-bar-gap"></span>' +
        '<span class="lt-may-dot" id="ltMayDot" title="Điện thoại quét"></span>' +
        '<button type="button" class="lt-btn" id="ltKetThuc" hidden>🏁 Kết thúc</button>' +
        '<button type="button" class="lt-btn" id="ltDong">✕ Đóng</button>' +
      '</header>' +
      '<main class="lt-man" id="ltMan"></main>';
    document.body.appendChild(root);
    $('#ltDong').addEventListener('click', dong);
    $('#ltKetThuc').addEventListener('click', ketThuc);
    window.addEventListener('keydown', phim, true);
    S.built = true;
  }

  /* ---------------- sanh: chon lop, in the, ma QR cho dien thoai ---------------- */
  function veSanh() {
    S.pha = 'sanh';
    $('#ltKetThuc').hidden = true;
    $('#ltSub').textContent = S.tuDo ? 'Câu hỏi tự do' : (S.nhan + ' · ' + S.goc.length + ' câu');
    var o = ['<option value="so">Không dùng danh sách — chỉ đánh số thẻ</option>'];
    S.classes.forEach(function (c) { o.push('<option value="sv:' + esc(c.id) + '">🏫 ' + esc(c.name) + ' (' + c.size + ')</option>'); });
    docDs().forEach(function (l) { o.push('<option value="ls:' + esc(l.id) + '">📋 ' + esc(l.name) + ' (' + l.kids.length + ')</option>'); });
    var soCau = [5, 10, 15, 20].filter(function (n) { return n < S.goc.length; });
    $('#ltMan').innerHTML =
      '<div class="lt-sanh">' +
        '<section class="lt-sanh-trai">' +
          '<h2>Cả lớp giơ thẻ — cô quét một lần là xong</h2>' +
          '<ol class="lt-buoc">' +
            '<li>In thẻ, phát cho mỗi bạn <b>đúng số của mình</b> (dùng cả năm).</li>' +
            '<li>Hỏi câu nào, bạn <b>xoay thẻ cho chữ cái mình chọn lên trên</b> rồi giơ cao.</li>' +
            '<li>Cô mở điện thoại quét mã QR bên phải, đi quanh lớp quét — kết quả hiện ngay trên màn chiếu.</li>' +
          '</ol>' +
          '<div class="lt-truong"><label for="ltNguon">Danh sách lớp</label><select id="ltNguon">' + o.join('') + '</select>' +
            (!S.classes.length ? '<button type="button" class="lt-link" id="ltKhoa">🔑 Lấy lớp trên hệ thống</button>' : '') +
          '</div>' +
          '<div class="lt-truong" id="ltSoTheBox"' + (S.nguon === 'so' ? '' : ' hidden') + '><label for="ltSoThe">Số thẻ</label>' +
            '<input type="number" id="ltSoThe" min="1" max="100" value="' + S.soThe + '"></div>' +
          (S.tuDo ? '' : '<div class="lt-truong"><label for="ltSoCau">Số câu</label><select id="ltSoCau">' +
            soCau.map(function (n) { return '<option value="' + n + '"' + (n === S.soCau ? ' selected' : '') + '>' + n + ' câu</option>'; }).join('') +
            '<option value="0"' + (!soCau.length || S.soCau === 0 || S.soCau >= S.goc.length ? ' selected' : '') + '>Tất cả ' + S.goc.length + ' câu</option></select></div>') +
          '<div class="lt-hs" id="ltHs"></div>' +
          '<div class="lt-sanh-nut">' +
            '<button type="button" class="lt-btn lt-btn-sang" id="ltIn">🖨️ In thẻ</button>' +
            '<button type="button" class="lt-go" id="ltBatDau">Bắt đầu ▶</button>' +
          '</div>' +
          '<p class="lt-loi" id="ltLoi" role="alert"></p>' +
        '</section>' +
        '<section class="lt-sanh-phai" id="ltMay"></section>' +
      '</div>';
    $('#ltNguon').value = S.nguon;
    $('#ltNguon').addEventListener('change', function () {
      var v = this.value;
      $('#ltSoTheBox').hidden = v !== 'so';
      chonNguon(v).then(veHs);
    });
    $('#ltSoThe').addEventListener('change', function () {
      S.soThe = Math.max(1, Math.min(100, parseInt(this.value, 10) || 30));
      this.value = S.soThe;
      chonNguon('so').then(veHs);
    });
    if ($('#ltSoCau')) $('#ltSoCau').addEventListener('change', function () { S.soCau = +this.value; ghiLS(PREF_KEY, { nguon: S.nguon, soThe: S.soThe, soCau: S.soCau }); });
    if ($('#ltKhoa')) $('#ltKhoa').addEventListener('click', moKhoa);
    $('#ltIn').addEventListener('click', moIn);
    $('#ltBatDau').addEventListener('click', batDau);
    veHs();
    veMay();
  }
  function veHs() {
    var box = $('#ltHs');
    if (!box) return;
    box.innerHTML = S.hs.length
      ? '<p>' + S.hs.length + ' thẻ: ' + (S.nguon === 'so' ? 'số 1 – ' + S.hs.length : 'số thẻ theo thứ tự trong danh sách (thêm bạn mới thì thêm vào cuối danh sách)') + '</p>' +
        (S.nguon === 'so' ? '' : '<div class="lt-hs-ds">' + S.hs.map(function (h) {
          return '<span><b>' + h.the + '</b> ' + esc(h.ten) + '</span>';
        }).join('') + '</div>')
      : '<p>Danh sách này chưa có tên nào.</p>';
  }
  function moKhoa() {
    var box = $('#ltKhoa').parentNode;
    var f = document.createElement('form');
    f.className = 'lt-khoa';
    f.innerHTML = '<input type="password" id="ltPw" placeholder="Mật khẩu quản trị" autocomplete="current-password" required>' +
      '<button type="submit" class="lt-btn lt-btn-sang">Mở</button>';
    box.appendChild(f);
    $('#ltKhoa').remove();
    $('#ltPw').focus();
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem(PW_KEY, $('#ltPw').value); } catch (x) { /* bo qua */ }
      napLop().then(function () {
        if (!S.classes.length) { $('#ltLoi').textContent = 'Mật khẩu không đúng hoặc chưa có lớp nào trên hệ thống.'; return; }
        S.nguon = 'sv:' + S.classes[0].id;
        chonNguon(S.nguon).then(veSanh);
      });
    });
  }
  function veMay() {
    var box = $('#ltMay');
    var dot = $('#ltMayDot');
    var co = !!(S.info && S.info.may);
    dot.classList.toggle('is-on', co);
    dot.title = co ? 'Điện thoại quét đã kết nối' : 'Chưa có điện thoại quét';
    if (!box) return;
    if (!S.room) { box.innerHTML = '<p class="lt-may-cho">Đang mở phòng…</p>'; return; }
    if (co) {
      box.innerHTML = '<div class="lt-may-ok">📱</div><p class="lt-may-t">Điện thoại của cô đã kết nối</p>' +
        '<p class="lt-may-mo">Mã QR đã ẩn để học sinh không quét được.</p>' +
        '<button type="button" class="lt-btn lt-btn-sang" id="ltDoiMay">Đổi điện thoại khác</button>';
    } else {
      var qr = '';
      try { var g = window.qrcode(0, 'M'); g.addData(linkQuet()); g.make(); qr = g.createSvgTag({ cellSize: 6, margin: 2, scalable: true }); } catch (e) { /* bo qua */ }
      box.innerHTML = '<div class="lt-qr">' + qr + '</div>' +
        '<p class="lt-may-t">Dùng camera điện thoại <b>của cô</b> quét mã này</p>' +
        '<p class="lt-may-mo">Mở ra trang quét thẻ. Phòng chỉ nhận một điện thoại — máy đầu tiên mở trang là máy quét.</p>';
    }
    var d = $('#ltDoiMay');
    if (d) d.addEventListener('click', function () {
      api('POST', 'doimay').then(function (x) { S.room.quet = x.quet; S.info.may = false; veMay(); })
        .catch(function (e) { alert(e.message); });
    });
  }

  /* ---------------- trang in the ---------------- */
  var inMoi = 2;
  function moIn() {
    var box = document.getElementById('ltInTrang');
    if (!box) {
      box = document.createElement('div');
      box.id = 'ltInTrang';
      box.className = 'lt-in';
      document.body.appendChild(box);
    }
    var the = S.hs.length ? S.hs : [];
    box.innerHTML =
      '<div class="lt-in-bar">' +
        '<button type="button" class="lt-btn lt-btn-sang" id="ltInDong">← Quay lại</button>' +
        '<span class="lt-in-chon">Mỗi trang A4:' +
          [1, 2, 4].map(function (n) { return '<button type="button" data-n="' + n + '"' + (n === inMoi ? ' class="is-on"' : '') + '>' + n + ' thẻ</button>'; }).join('') +
        '</span>' +
        '<span class="lt-in-goi">Lớp rộng, quét từ xa: 1 thẻ/trang · lớp nhỏ: 4 thẻ/trang. In giấy trắng, mực đen, không phóng to/thu nhỏ.</span>' +
        '<button type="button" class="lt-go lt-go-sm" id="ltInIn">🖨️ In ' + the.length + ' thẻ</button>' +
      '</div>' +
      '<div class="lt-in-giay">' + trangIn(the) + '</div>';
    box.hidden = false;
    document.documentElement.classList.add('lt-dang-in');
    box.querySelector('#ltInDong').addEventListener('click', dongIn);
    box.querySelector('#ltInIn').addEventListener('click', function () { window.print(); });
    Array.prototype.forEach.call(box.querySelectorAll('.lt-in-chon button'), function (b) {
      b.addEventListener('click', function () { inMoi = +b.getAttribute('data-n'); moIn(); });
    });
  }
  function dongIn() {
    var box = document.getElementById('ltInTrang');
    if (box) { box.hidden = true; box.innerHTML = ''; }
    document.documentElement.classList.remove('lt-dang-in');
  }
  function trangIn(ds) {
    var trang = [];
    for (var i = 0; i < ds.length; i += inMoi) {
      trang.push('<div class="lt-to lt-to-' + inMoi + '">' + ds.slice(i, i + inMoi).map(theIn).join('') + '</div>');
    }
    return trang.join('');
  }
  function theIn(h) {
    return '<div class="lt-the">' +
      '<span class="lt-the-chu c0">A</span><span class="lt-the-chu c1">B</span>' +
      '<span class="lt-the-chu c2">C</span><span class="lt-the-chu c3">D</span>' +
      '<div class="lt-the-ma">' + window.TheMa.svg(h.the) + '</div>' +
      '<div class="lt-the-so">' + h.the + '</div>' +
      (h.ten ? '<div class="lt-the-ten">' + esc(h.ten) + '</div>' : '') +
      '<div class="lt-the-web">hihanchinese.online</div>' +
    '</div>';
  }

  /* ---------------- cau hoi ---------------- */
  function chuanCau(q) {
    // dap an dung trong du lieu luon o vi tri dau — tron, toi da 4 phuong an
    var idx = q.options.map(function (_, i) { return i; }).filter(function (i) { return i !== q.answer; });
    idx = tron(idx).slice(0, 3).concat([q.answer]);
    idx = tron(idx);
    return {
      zh: (q.pre || '') + (q.noBlank ? '' : '＿＿') + (q.post || ''),
      ctx: q.context || '', point: q.point || '', why: q.why || '',
      opts: idx.map(function (i) { return q.options[i]; }),
      dung: idx.indexOf(q.answer)
    };
  }

  function batDau() {
    if (!S.room) return;
    if (!S.hs.length) { var l = $('#ltLoi'); if (l) l.textContent = 'Chưa có thẻ nào — chọn danh sách lớp hoặc nhập số thẻ.'; return; }
    S.cau = S.tuDo ? [] : tron(S.goc).slice(0, S.soCau > 0 ? S.soCau : S.goc.length).map(chuanCau);
    S.kq = [];
    S.i = -1;
    tiep();
  }

  function tiep() {
    if (S.cho) return;
    if (!S.tuDo && S.i + 1 >= S.cau.length) { ketThuc(); return; }
    S.i++;
    var c = S.tuDo ? { zh: '', opts: ['', '', '', ''], dung: -1, tuDo: true } : S.cau[S.i];
    if (S.tuDo) S.cau[S.i] = c;
    S.pha = 'hoi';
    S.dangLat = false;
    S.cho = true;
    $('#ltKetThuc').hidden = false;
    veCau();
    api('POST', 'cau', {
      zh: c.zh || ('Câu ' + (S.i + 1) + ' — cô đọc câu hỏi'),
      opts: c.opts.map(function (o, i) { return o || CHU[i]; }),
      dung: c.dung, secs: 300, so: S.i + 1, tong: S.tuDo ? 0 : S.cau.length,
      theDs: S.hs.map(function (h) { return h.the; })
    }).then(function (d) {
      S.qid = d.qid;
      S.info = Object.assign({}, S.info || {}, { qid: d.qid, tl: {} });
      veThe();
    }).catch(function (e) { alert('Chưa gửi được câu hỏi: ' + e.message); })
      .then(function () { S.cho = false; });
  }

  function veCau() {
    var c = S.cau[S.i];
    $('#ltSub').textContent = 'Câu ' + (S.i + 1) + (S.tuDo ? '' : '/' + S.cau.length);
    $('#ltMan').innerHTML =
      '<div class="lt-cau">' +
        (c.point ? '<div class="lt-cau-pt">📐 ' + esc(c.point) + '</div>' : '') +
        (c.ctx ? '<div class="lt-cau-ctx">🗣️ ' + esc(c.ctx) + '</div>' : '') +
        (c.tuDo
          ? '<div class="lt-cau-zh lt-cau-tudo">Câu ' + (S.i + 1) + ' · cô đọc câu hỏi, cả lớp giơ thẻ</div>'
          : '<div class="lt-cau-zh">' + esc(c.zh).replace('＿＿', '<span class="lt-trong">＿＿</span>') + '</div>') +
        '<div class="lt-opts' + (c.tuDo ? ' is-tudo' : '') + '">' + c.opts.map(function (o, i) {
          return '<button type="button" class="lt-opt" data-i="' + i + '">' +
            '<span class="lt-opt-k">' + CHU[i] + '</span>' +
            (o ? '<span class="lt-opt-t">' + esc(o) + '</span>' : '') +
            '<span class="lt-opt-bar"><i></i></span><span class="lt-opt-n"></span>' +
          '</button>';
        }).join('') + '</div>' +
        '<div class="lt-why" id="ltWhy" hidden></div>' +
      '</div>' +
      '<div class="lt-day">' +
        '<div class="lt-dem" id="ltDem"></div>' +
        '<div class="lt-luoi" id="ltLuoi"></div>' +
        '<div class="lt-nut">' +
          '<button type="button" class="lt-go" id="ltLat">👁 Lật đáp án <kbd>Space</kbd></button>' +
          '<button type="button" class="lt-btn lt-btn-sang" id="ltTiep">' + (!S.tuDo && S.i + 1 >= S.cau.length ? 'Xem tổng kết →' : 'Câu tiếp →') + '</button>' +
        '</div>' +
      '</div>';
    $('#ltLat').addEventListener('click', lat);
    $('#ltTiep').addEventListener('click', tiep);
    $all('.lt-opt').forEach(function (b) {
      b.addEventListener('click', function () {
        // cau tu do: sau khi lat, cô bam vao dap an dung de cham
        var c2 = S.cau[S.i];
        if (S.pha === 'lat' && c2.tuDo) { c2.dung = +b.getAttribute('data-i'); S.kq[S.i].dung = c2.dung; veLat(); }
        else if (S.pha === 'hoi') lat();
      });
    });
    veThe();
  }

  function tlHienTai() { return (S.info && S.info.qid === S.qid && S.info.tl) || {}; }

  function veThe() {
    var luoi = $('#ltLuoi');
    if (!luoi) return;
    var tl = S.pha === 'lat' ? S.kq[S.i].tl : tlHienTai();
    var c = S.cau[S.i];
    var co = 0;
    luoi.className = 'lt-luoi' + (S.hs.length > 40 ? ' is-nho' : '');
    luoi.innerHTML = S.hs.map(function (h) {
      var a = tl[h.the];
      var cls = 'lt-chip';
      if (a != null) { co++; cls += ' is-co'; }
      if (S.pha === 'lat' && a != null && c.dung >= 0) cls += a === c.dung ? ' is-dung' : ' is-sai';
      return '<span class="' + cls + '"><b>' + h.the + '</b>' + (h.ten ? '<i>' + esc(tenGoi(h.ten)) + '</i>' : '') +
        (S.pha === 'lat' && a != null ? '<u>' + CHU[a] + '</u>' : '') + '</span>';
    }).join('');
    $('#ltDem').innerHTML = S.pha === 'lat'
      ? demLat(tl, c)
      : 'Đã nhận <b>' + co + '</b> / ' + S.hs.length + ' thẻ' + (co >= S.hs.length ? ' · <span class="lt-du">đủ cả lớp ✓</span>' : '');
  }
  function demLat(tl, c) {
    var ids = Object.keys(tl), dung = 0;
    ids.forEach(function (k) { if (tl[k] === c.dung) dung++; });
    if (c.dung < 0) return ids.length + ' bạn trả lời · <b>bấm vào đáp án đúng</b> để chấm';
    return '<b>' + dung + '</b> / ' + ids.length + ' bạn đúng' + (ids.length ? ' (' + Math.round(dung * 100 / ids.length) + '%)' : '');
  }

  function lat() {
    if (S.pha !== 'hoi' || S.dangLat) return;
    S.dangLat = true;
    // lay lan cuoi nhung the vua quet roi moi lat
    api('GET', 'gv').then(function (d) { S.info = d; }).catch(function () { /* dung ban dang co */ }).then(function () {
      var c = S.cau[S.i];
      var tl = {};
      var nguon = tlHienTai();
      Object.keys(nguon).forEach(function (k) { tl[k] = nguon[k]; });
      S.kq[S.i] = { tl: tl, dung: c.dung };
      S.pha = 'lat';
      S.dangLat = false;
      api('POST', 'lat').catch(function () { /* bo qua */ });
      veLat();
    });
  }
  function veLat() {
    var c = S.cau[S.i], r = S.kq[S.i];
    var dem = [0, 0, 0, 0], tong = 0;
    Object.keys(r.tl).forEach(function (k) { dem[r.tl[k]]++; tong++; });
    $all('.lt-opt').forEach(function (b, i) {
      b.classList.toggle('is-dung', i === c.dung);
      b.classList.toggle('is-mo', c.dung >= 0 && i !== c.dung);
      b.classList.add('is-lat');
      b.querySelector('.lt-opt-bar i').style.width = (tong ? dem[i] * 100 / tong : 0) + '%';
      b.querySelector('.lt-opt-n').textContent = dem[i];
    });
    if (c.why && c.dung >= 0) { var w = $('#ltWhy'); w.hidden = false; w.textContent = '💡 ' + c.why; }
    var lb = $('#ltLat');
    if (lb) lb.hidden = true;
    veThe();
  }

  /* ---------------- tong ket ---------------- */
  function ketThuc() {
    if (S.pha === 'hoi' && S.kq[S.i] == null && Object.keys(tlHienTai()).length) {
      // dang hoi do thi chot cau nay luon
      var tl = {}, n = tlHienTai();
      Object.keys(n).forEach(function (k) { tl[k] = n[k]; });
      S.kq[S.i] = { tl: tl, dung: S.cau[S.i].dung };
    }
    S.pha = 'het';
    $('#ltKetThuc').hidden = true;
    $('#ltSub').textContent = 'Tổng kết';
    var cauCham = [];
    S.kq.forEach(function (r, i) { if (r && r.dung >= 0) cauCham.push(i); });
    var bang = S.hs.map(function (h) {
      var dung = 0, tl = 0;
      cauCham.forEach(function (i) { var a = S.kq[i].tl[h.the]; if (a != null) { tl++; if (a === S.kq[i].dung) dung++; } });
      return { h: h, dung: dung, tl: tl };
    });
    bang.sort(function (a, b) { return b.dung - a.dung || b.tl - a.tl || a.h.the - b.h.the; });
    var tongDung = 0, tongTl = 0;
    bang.forEach(function (x) { tongDung += x.dung; tongTl += x.tl; });
    var n = cauCham.length;
    var canOn = bang.filter(function (x) { return n && x.tl && x.dung / n < 0.5; });
    var vang = bang.filter(function (x) { return n && !x.tl; });
    $('#ltMan').innerHTML =
      '<div class="lt-tk">' +
        '<div class="lt-tk-dau">' +
          '<div class="lt-tk-so"><b>' + (tongTl ? Math.round(tongDung * 100 / tongTl) : 0) + '%</b><span>câu trả lời đúng</span></div>' +
          '<div class="lt-tk-so"><b>' + n + '</b><span>câu đã chấm</span></div>' +
          '<div class="lt-tk-so"><b>' + bang.filter(function (x) { return x.tl; }).length + '</b><span>bạn có trả lời</span></div>' +
        '</div>' +
        (n ? '<div class="lt-tk-cau">' + cauCham.map(function (i) {
          var r = S.kq[i], ids = Object.keys(r.tl), d = 0;
          ids.forEach(function (k) { if (r.tl[k] === r.dung) d++; });
          var pt = ids.length ? Math.round(d * 100 / ids.length) : 0;
          return '<div class="lt-tk-c" title="' + esc(S.cau[i].zh || ('Câu ' + (i + 1))) + '"><span>Câu ' + (i + 1) + '</span>' +
            '<span class="lt-tk-bar"><i style="width:' + pt + '%" class="' + (pt < 50 ? 'is-thap' : '') + '"></i></span><b>' + pt + '%</b></div>';
        }).join('') + '</div>' : '<p class="lt-tk-trong">Chưa có câu nào được chấm.</p>') +
        (n ? '<div class="lt-tk-hs">' + bang.map(function (x, i) {
          return '<div class="lt-tk-r' + (n && x.tl && x.dung / n < 0.5 ? ' is-thap' : '') + (!x.tl ? ' is-vang' : '') + '">' +
            '<span class="lt-tk-hang">' + (i + 1) + '</span>' +
            '<span class="lt-tk-ten"><b>' + x.h.the + '</b> ' + esc(x.h.ten || ('Thẻ ' + x.h.the)) + '</span>' +
            '<span class="lt-tk-d">' + (x.tl ? x.dung + '/' + n : 'không quét được') + '</span></div>';
        }).join('') + '</div>' : '') +
        (canOn.length ? '<p class="lt-tk-note">Cần ôn thêm (đúng dưới một nửa): ' + canOn.map(function (x) { return esc(x.h.ten || ('thẻ ' + x.h.the)); }).join(', ') + '</p>' : '') +
        (vang.length ? '<p class="lt-tk-note is-mo">Không quét được thẻ nào của: ' + vang.map(function (x) { return esc(x.h.ten || ('thẻ ' + x.h.the)); }).join(', ') + '</p>' : '') +
        '<div class="lt-nut"><button type="button" class="lt-btn lt-btn-sang" id="ltLai">↺ Chơi lại</button><button type="button" class="lt-go" id="ltXong">Xong</button></div>' +
      '</div>';
    $('#ltLai').addEventListener('click', veSanh);
    $('#ltXong').addEventListener('click', dong);
  }

  /* ---------------- phim tat / mo / dong ---------------- */
  function phim(e) {
    if (!root || root.hidden) return;
    var inMo = document.getElementById('ltInTrang');
    if (inMo && !inMo.hidden) { if (e.key === 'Escape') { e.stopImmediatePropagation(); dongIn(); } return; }
    if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
    e.stopImmediatePropagation();
    if (e.key === 'Escape') { dong(); return; }
    if (e.code === 'Space' || e.key === 'ArrowRight') {
      e.preventDefault();
      if (S.pha === 'hoi' && e.code === 'Space') lat();
      else if (S.pha === 'hoi' || S.pha === 'lat') tiep();
    }
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    var p = docLS(PREF_KEY, {});
    S.goc = (opt.cau || []).filter(function (q) { return q && q.options && q.options.length >= 2; });
    S.tuDo = !S.goc.length;
    S.nhan = opt.nhan || '';
    S.nguon = p.nguon || 'so';
    S.soThe = p.soThe >= 1 && p.soThe <= 100 ? p.soThe : 30;
    S.soCau = p.soCau != null ? p.soCau : 10;
    root.hidden = false;
    document.documentElement.classList.add('lt-open');
    $('#ltMan').innerHTML = '<p class="lt-may-cho">Đang mở…</p>';
    napLop().then(function () {
      var hop = S.nguon === 'so' || docDs().some(function (l) { return 'ls:' + l.id === S.nguon; }) ||
        S.classes.some(function (c) { return 'sv:' + c.id === S.nguon; });
      if (!hop) S.nguon = 'so';
      return chonNguon(S.nguon);
    }).then(function () {
      veSanh();
      return moPhong();
    }).then(veMay).catch(function (e) {
      var l = $('#ltLoi');
      if (l) l.textContent = 'Chưa mở được phòng: ' + e.message;
    });
  }
  function dong() {
    dongIn();
    dongPhong();
    root.hidden = true;
    S.pha = 'sanh';
    document.documentElement.classList.remove('lt-open');
  }

  window.LopThe = { mo: mo, dong: dong };
})();
