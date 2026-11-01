/* Trang quet the tra loi tren dien thoai giao vien (/quet#ma=...&k=...).
   Camera sau doc ma tren the giay cua ca lop (the-quet-cv.js), gui dap an len
   phong (live.js kieu 'the'); man chieu o lop tu cap nhat. Ma phong va khoa quet
   nam sau dau # trong ma QR nen khong lot vao nhat ky may chu.               */
(function () {
  'use strict';

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var CHU = ['A', 'B', 'C', 'D'];

  var thamSo = {};
  location.hash.replace(/^#/, '').split('&').forEach(function (p) {
    var i = p.indexOf('=');
    if (i > 0) thamSo[p.slice(0, i)] = decodeURIComponent(p.slice(i + 1));
  });
  var MA = /^\d{6}$/.test(thamSo.ma || '') ? thamSo.ma : '';
  var KHOA = thamSo.k || '';
  // Ma rieng cua dien thoai nay — phong chi nhan mot may quet
  var MAY = '';
  try { MAY = localStorage.getItem('hyv_quet_may') || ''; } catch (e) { /* bo qua */ }
  if (!MAY) {
    MAY = Math.random().toString(36).slice(2) + Date.now().toString(36);
    try { localStorage.setItem('hyv_quet_may', MAY); } catch (e) { /* bo qua */ }
  }

  var st = { pha: '', qid: 0, cau: null, theDs: [], tl: {}, dung: -1 };
  var cho = {};          // the doc duoc chua gui: id -> dap an
  var thay = {};         // id -> lan doc gan nhat (xac nhan qua 2 khung hinh)
  var dangGui = false;
  var cam = { on: false, video: null, c: null, ctx: null };

  /* ---------------- may chu ---------------- */
  function api(method, path, body) {
    var url = '/api/live/' + MA + '/' + path + (method === 'GET' ? '?quet=' + encodeURIComponent(KHOA) + '&may=' + encodeURIComponent(MAY) : '');
    return fetch(url, {
      method: method,
      headers: method === 'GET' ? {} : { 'Content-Type': 'application/json' },
      body: method === 'GET' ? undefined : JSON.stringify(Object.assign({ quet: KHOA, may: MAY }, body || {})),
      cache: 'no-store'
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d.error || 'Lỗi kết nối'); e.status = r.status; e.d = d; throw e; }
        return d;
      });
    });
  }

  function tai() {
    api('GET', 'quet').then(function (d) {
      var doiCau = d.qid !== st.qid;
      st = { pha: d.pha, qid: d.qid, cau: d.cau || null, theDs: d.theDs || [], tl: d.tl || {}, dung: d.dung == null ? -1 : d.dung };
      if (doiCau) { cho = {}; thay = {}; }
      ve();
    }).catch(function (e) {
      if (e.status === 403 || e.status === 404) {
        $('qtCau').textContent = e.message;
        $('qtLoi').textContent = e.message;
        clearInterval(hen);
      }
    });
  }

  function gui() {
    if (dangGui || st.pha !== 'hoi') return;
    var ids = Object.keys(cho);
    if (!ids.length) return;
    var goi = cho;
    cho = {};
    dangGui = true;
    api('POST', 'quet', { qid: st.qid, the: goi }).then(function () {
      Object.keys(goi).forEach(function (id) { st.tl[id] = goi[id]; });
      ve();
    }).catch(function (e) {
      // cau da doi thi bo; loi mang thi gui lai lan sau
      if (!(e.status === 409)) Object.keys(goi).forEach(function (id) { if (cho[id] == null) cho[id] = goi[id]; });
      if (e.status === 409) tai();
    }).then(function () { dangGui = false; });
  }

  function dieu(lenh) {
    var b = lenh === 'lat' ? $('qtLat') : $('qtTiep');
    b.disabled = true;
    gui();
    api('POST', 'dieu', { lenh: lenh }).catch(function (e) { alert(e.message); })
      .then(function () { setTimeout(function () { b.disabled = false; tai(); }, 700); });
  }

  /* ---------------- giao dien ---------------- */
  function ve() {
    var c = st.cau;
    if (!c || st.pha === 'cho') $('qtCau').textContent = 'Chờ cô bắt đầu câu hỏi trên màn chiếu…';
    else if (st.pha === 'het') $('qtCau').textContent = 'Đã kết thúc.';
    else {
      $('qtCau').innerHTML = '<b>Câu ' + c.so + (c.tong ? '/' + c.tong : '') + '</b> ' + esc(c.zh) +
        (st.pha === 'lat' && st.dung >= 0 ? ' <span class="qt-dung">Đáp án ' + CHU[st.dung] + '</span>' : '');
    }
    var tong = st.theDs.length;
    var co = Object.keys(st.tl).length;
    $('qtDem').innerHTML = '<b>' + co + '</b><span>/' + (tong || '?') + ' thẻ</span>';
    $('qtDem').classList.toggle('is-du', tong > 0 && co >= tong);
    var thieu = st.theDs.filter(function (id) { return st.tl[id] == null; });
    $('qtThieuSo').textContent = tong ? (thieu.length ? thieu.length + ' thẻ' : 'đủ cả lớp ✓') : '—';
    $('qtThieuDs').innerHTML = thieu.map(function (id) { return '<span>' + id + '</span>'; }).join('');
    $('qtLat').hidden = st.pha !== 'hoi';
  }

  /* ---------------- camera + doc the ---------------- */
  function batCamera() {
    $('qtLoi').textContent = '';
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      $('qtLoi').textContent = 'Trình duyệt này không mở được camera. Thử mở bằng Chrome hoặc Safari.';
      return;
    }
    $('qtBat').disabled = true;
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { facingMode: { ideal: 'environment' }, width: { ideal: 1920 }, height: { ideal: 1080 } }
    }).then(function (stream) {
      var v = $('qtVideo');
      v.srcObject = stream;
      cam.video = v;
      cam.c = document.createElement('canvas');
      cam.ctx = cam.c.getContext('2d', { willReadFrequently: true });
      cam.on = true;
      document.body.classList.add('qt-dang-quet');
      giuManHinh();
      v.play().catch(function () { /* autoplay da muted */ });
      setTimeout(vongDoc, 300);
    }).catch(function (e) {
      $('qtBat').disabled = false;
      $('qtLoi').textContent = e && e.name === 'NotAllowedError'
        ? 'Cô cần cho phép dùng camera (bấm biểu tượng ổ khoá/camera trên thanh địa chỉ) rồi bấm lại.'
        : 'Không mở được camera: ' + (e && e.message ? e.message : 'lỗi không rõ');
    });
  }

  function giuManHinh() {
    if (navigator.wakeLock && navigator.wakeLock.request) {
      navigator.wakeLock.request('screen').catch(function () { /* bo qua */ });
    }
  }

  function vongDoc() {
    if (!cam.on) return;
    var v = cam.video;
    var w = v.videoWidth, h = v.videoHeight;
    if (!w || !h) { setTimeout(vongDoc, 200); return; }
    // anh qua lon thi thu nho ve canh dai 1920 cho nhanh
    var tl = Math.min(1, 1920 / Math.max(w, h));
    var cw = Math.round(w * tl), ch = Math.round(h * tl);
    if (cam.c.width !== cw) { cam.c.width = cw; cam.c.height = ch; }
    cam.ctx.drawImage(v, 0, 0, cw, ch);
    var anh = cam.ctx.getImageData(0, 0, cw, ch);
    var kq = [];
    try { kq = window.TheQuet.tim(window.TheQuet.xam(anh), cw, ch); } catch (e) { kq = []; }
    var hopLe = st.theDs.length ? st.theDs : null;
    var luc = Date.now();
    kq.forEach(function (r) {
      if (hopLe && hopLe.indexOf(r.id) < 0) { r.la = true; return; }
      // Chi nhan khi 2 khung hinh lien nhau doc cung the, cung dap an, gan cung cho
      // — tranh doc nham mot hoa van ngau nhien trong mot khung
      var t = thay[r.id];
      var on = t && t.ans === r.ans && luc - t.luc < 1200 && Math.abs(t.cx - r.cx) + Math.abs(t.cy - r.cy) < r.canh * 1.5;
      thay[r.id] = { ans: r.ans, luc: luc, cx: r.cx, cy: r.cy, n: on ? t.n + 1 : 1 };
      if (thay[r.id].n < 2) { r.chuaChac = true; return; }
      if (st.pha === 'hoi' && st.tl[r.id] !== r.ans && cho[r.id] !== r.ans) {
        cho[r.id] = r.ans;
        if (navigator.vibrate) navigator.vibrate(12);
      }
    });
    veKhung(kq, cw, ch);
    if (Object.keys(cho).length) gui();
    setTimeout(vongDoc, 30);
  }

  // Ve khung tren tung the: xanh = da ghi nhan, vang = vua doc chua kip gui
  function veKhung(kq, cw, ch) {
    var ve = $('qtVe'), v = cam.video;
    var dw = ve.clientWidth, dh = ve.clientHeight;
    var dpr = window.devicePixelRatio || 1;
    if (ve.width !== Math.round(dw * dpr)) { ve.width = Math.round(dw * dpr); ve.height = Math.round(dh * dpr); }
    var g = ve.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, dw, dh);
    // video object-fit: cover
    var tl = Math.max(dw / cw, dh / ch);
    var ox = (dw - cw * tl) / 2, oy = (dh - ch * tl) / 2;
    kq.forEach(function (r) {
      var daCo = st.tl[r.id] === r.ans;
      var mau = r.la || r.chuaChac ? 'rgba(255,255,255,.35)' : daCo ? '#3ddc84' : '#ffd23f';
      g.lineWidth = 3;
      g.strokeStyle = mau;
      g.beginPath();
      r.q.forEach(function (p, i) {
        var x = ox + p[0] * tl, y = oy + p[1] * tl;
        if (i) g.lineTo(x, y); else g.moveTo(x, y);
      });
      g.closePath();
      g.stroke();
      if (r.la) return;
      var cx = ox + r.cx * tl, cy = oy + r.cy * tl;
      var nhan = r.id + (st.pha === 'hoi' || st.pha === 'lat' ? ' · ' + CHU[r.ans] : '');
      g.font = '700 15px "Be Vietnam Pro", system-ui, sans-serif';
      var tw = g.measureText(nhan).width + 12;
      g.fillStyle = mau;
      g.fillRect(cx - tw / 2, cy - 11, tw, 22);
      g.fillStyle = '#111';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(nhan, cx, cy + 1);
    });
  }

  /* ---------------- khoi dong ---------------- */
  $('qtBat').addEventListener('click', batCamera);
  $('qtLat').addEventListener('click', function () { dieu('lat'); });
  $('qtTiep').addEventListener('click', function () { dieu('tiep'); });
  $('qtThieu').addEventListener('click', function () {
    var ds = $('qtThieuDs');
    ds.hidden = !ds.hidden;
    this.setAttribute('aria-expanded', ds.hidden ? 'false' : 'true');
  });
  document.addEventListener('visibilitychange', function () { if (!document.hidden && cam.on) giuManHinh(); });

  var hen = null;
  if (!MA || !KHOA) {
    $('qtCau').textContent = 'Chưa có mã phòng';
    $('qtMoTxt').textContent = 'Mở Chế độ lớp học → Thẻ trả lời trên máy chiếu, rồi dùng camera điện thoại quét mã QR hiện trên màn hình.';
    $('qtBat').hidden = true;
    document.querySelector('.qt-duoi').hidden = true;
  } else {
    tai();
    hen = setInterval(tai, 1500);
  }
})();
