/* Che do phong cho cac tro camera (/van-dong: chem, theduc, dam — /nghieng) khi choi qua ma QR tren lop.
   May chu: live.js phong kieu 'tro' voi tro thuoc TRO_CAM; man chieu: public/js/lop-cam.js.
   Hoc sinh vao /choi (nhap ten, chon to), co bam Bat dau thi choi.js chuyen dien thoai sang
   /van-dong?phong=<ma> hoac /nghieng?phong=<ma>; ma + pid + tok nam trong sessionStorage 'hyv_choi'.
   File nay nap TRUOC van-dong.js / nghieng.js (trong <head>) va lo phan "phong":
     - lay bo cau cua phong (/du), xao thu tu rieng cho tung em (co dinh theo pid + van — tai lai trang thi lam tiep);
     - sanh: giai thich xin quyen camera + hai nut "Choi bang camera" / "Choi bang cham";
     - camera bi tu choi, khong co camera, mo hinh tai khong duoc / qua cham -> tu chuyen sang choi bang cham;
     - bao tung cau len may chu (/tien { i, d, diem }), gui lan luot, mat mang thi thu lai;
     - het bo cau: man ket qua + thu hang (ca nhan, to); co ket thuc / choi lai / dong phong -> quay ve /choi.
   Trang tro choi goi qua window.CamPhong (bat = dang o che do phong):
     san(cb, dsTro)  cb({ tro, cau[{..., _k}] }) khi co bo cau          sanh({ ten, nhan, meo, onChon(kieu) })
     thu(kieu, moMay) -> Promise<coCamera>                              vaoChoi(coCamera)
     bao(k, dung, diem)   do(ms)   xong({ diem, dung, sao, saoHtml })   tb(msg)   trangThai(msg)
   Trang tro choi gan CamPhong.tatCam = function () {...} de file nay tat camera khi chuyen sang cham.   */
(function () {
  'use strict';
  var KEY = 'hyv_choi';
  var TRANG = { chem: '/van-dong', theduc: '/van-dong', dam: '/van-dong', nghieng: '/nghieng' };
  var m = /[?&]phong=(\d{6})(?:&|$)/.exec(location.search);
  if (!m) { window.CamPhong = { bat: false }; return; }
  var ma = m[1], cu = null;
  try { cu = JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { /* bo qua */ }
  document.documentElement.classList.add('cp-bat');

  var P = { bat: true, ma: ma, van: -1, tong: 0, secs: 20, da: 'qua', daLam: 0, diem0: 0, dung0: 0, nhip: 45, cham: false, tatCam: null };
  window.CamPhong = P;
  var T = { pid: cu && cu.ma === ma ? cu.pid : '', tok: cu && cu.ma === ma ? cu.tok : '', ten: '', toTen: '', hang: 0, soHs: 0,
    cho: [], dangGui: false, het: false, kq: null, poll: 0, roi: false, doN: 0, doTb: 0, dungSo: 0, onChon: null };

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function maDep() { return ma.replace(/(\d{3})(\d{3})/, '$1 $2'); }
  // Ve trang /choi: man cho, ket qua, bang vang va "Choi lai" deu o do
  function veChoi() {
    if (T.roi) return;
    T.roi = true;
    clearTimeout(T.poll);
    if (P.tatCam) { try { P.tatCam(); } catch (e) { /* bo qua */ } }
    location.replace('/choi?ma=' + ma);
  }
  function api(method, path, body) {
    var url = '/api/live/' + ma + '/' + path + (method === 'GET' ? '?pid=' + encodeURIComponent(T.pid) + '&tok=' + encodeURIComponent(T.tok) : '');
    return fetch(url, {
      method: method, headers: body ? { 'Content-Type': 'application/json' } : {},
      body: body ? JSON.stringify(Object.assign({ pid: T.pid, tok: T.tok }, body)) : undefined, cache: 'no-store'
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d.error || 'Lỗi kết nối'); e.status = r.status; e.d = d; throw e; }
        return d;
      });
    });
  }
  function khiSan(f) { if (document.body) f(); else document.addEventListener('DOMContentLoaded', f); }

  /* ---- thu tu cau rieng cua tung em: co dinh theo pid + van ---- */
  function hat(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function ngauHat(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function thuTu(n, hatGiong) {
    var a = [], r = ngauHat(hatGiong), i, j, t;
    for (i = 0; i < n; i++) a.push(i);
    for (i = n - 1; i > 0; i--) { j = Math.floor(r() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* ---- khung phu: thong bao, sanh, dai duoi, man ket qua ---- */
  var henTb = 0;
  P.tb = function (msg, ms) {
    khiSan(function () {
      var t = $('cpTb');
      if (!t) { t = document.createElement('div'); t.id = 'cpTb'; t.className = 'cp-tb'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
      t.textContent = msg;
      t.hidden = !msg;
      clearTimeout(henTb);
      if (msg) henTb = setTimeout(function () { t.hidden = true; }, ms || 3600);
    });
  };
  P.trangThai = function (msg) { var el = $('cpTt'); if (el) el.textContent = msg || ''; };

  function manLoi(msg, nut) {
    khiSan(function () {
      var el = $('cpSanh') || document.createElement('div');
      el.id = 'cpSanh'; el.className = 'cp-lop';
      el.innerHTML = '<div class="cp-the"><div class="cp-phong">📱 Phòng ' + maDep() + '</div><h1>Chưa vào được trò chơi</h1>' +
        '<p class="cp-mo">' + esc(msg) + '</p><button type="button" class="cp-nut" id="cpThuLai">' + esc(nut || '↻ Thử lại') + '</button>' +
        '<button type="button" class="cp-nut cp-nut-phu" id="cpVe">← Về phòng chờ</button></div>';
      if (!el.parentNode) document.body.appendChild(el);
      $('cpThuLai').addEventListener('click', function () { location.reload(); });
      $('cpVe').addEventListener('click', veChoi);
    });
  }

  // Lay bo cau cua phong. dsTro = cac tro trang nay choi duoc (tro khac -> sang dung trang).
  P.san = function (cb, dsTro) {
    if (!T.pid || !T.tok) { veChoi(); return; }
    api('GET', 'du').then(function (du) {
      if (!TRANG[du.tro]) { veChoi(); return; }
      if (dsTro.indexOf(du.tro) < 0) { T.roi = true; location.replace(TRANG[du.tro] + '?phong=' + ma); return; }
      var kq = String(du.kq || ''), cau = [];
      thuTu(du.cau.length, hat(T.pid + ':' + du.van)).forEach(function (goc, k) {
        if (kq.charAt(k) === '1' || kq.charAt(k) === '0') return; // cau nay em da bao roi
        var c = {}, g = du.cau[goc], x;
        for (x in g) if (Object.prototype.hasOwnProperty.call(g, x)) c[x] = g[x];
        c._k = k;
        cau.push(c);
      });
      if (du.xong || !cau.length) { veChoi(); return; }
      P.van = du.van; P.tong = du.tong; P.tro = du.tro;
      P.secs = (du.opt && du.opt.secs) || 20;
      P.da = du.opt && du.opt.da === 'bong' ? 'bong' : 'qua';
      P.daLam = du.tong - cau.length; P.diem0 = du.diem || 0; P.dung0 = du.dungSo || 0;
      T.ten = du.ten || ''; T.toTen = du.toTen || '';
      khiSan(function () { cb({ tro: du.tro, cau: cau }); batPoll(4000); });
    }).catch(function (e) {
      // co chua bat dau / da ket thuc / chua chon to / bi moi ra: trang /choi lo het
      if (e.status) { veChoi(); return; }
      manLoi('Mạng đang chập chờn nên chưa tải được câu hỏi. Em kiểm tra Wi-Fi / 4G rồi thử lại nhé.');
    });
  };

  // Sanh: giai thich camera + chon cach choi. o = { ten, nhan (nhan ra gi), meo, onChon(kieu) }
  P.sanh = function (o) {
    T.onChon = o.onChon;
    var el = $('cpSanh') || document.createElement('div');
    el.id = 'cpSanh'; el.className = 'cp-lop';
    el.innerHTML = '<div class="cp-the">' +
      '<div class="cp-phong">📱 Phòng ' + maDep() + (T.ten ? ' · <b>' + esc(T.ten) + '</b>' : '') + (T.toTen ? ' · ' + esc(T.toTen) : '') + '</div>' +
      '<h1>' + esc(o.ten) + '</h1>' +
      '<p class="cp-tk">' + (P.daLam ? 'Em làm tiếp từ câu ' + (P.daLam + 1) + '/' + P.tong : P.tong + ' câu') + ' · mỗi câu ' + P.secs + ' giây</p>' +
      '<div class="cp-cam"><span aria-hidden="true">📷</span><div><b>Trò này dùng camera trước của điện thoại</b>' +
        '<small>để nhận ra ' + esc(o.nhan) + ' của em. Khi điện thoại hỏi, em bấm <b>“Cho phép”</b>. Hình ảnh chỉ xử lý ngay trên máy em, không gửi đi đâu.</small></div></div>' +
      (o.meo ? '<p class="cp-meo">' + o.meo + '</p>' : '') +
      '<button type="button" class="cp-nut" data-k="cam">📷 Chơi bằng camera</button>' +
      '<button type="button" class="cp-nut cp-nut-phu" data-k="cham">👆 Chơi bằng chạm <small>không cần camera — chạm vào đáp án</small></button>' +
      '<p class="cp-tt" id="cpTt" role="status" aria-live="polite"></p></div>';
    if (!el.parentNode) document.body.appendChild(el);
    el.hidden = false;
    Array.prototype.forEach.call(el.querySelectorAll('[data-k]'), function (b) {
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(el.querySelectorAll('[data-k]'), function (x) { x.disabled = true; });
        o.onChon(b.getAttribute('data-k'));
      });
    });
  };

  // Mo camera + bo nhan dien (moMay tra ve Promise). Tra ve true neu choi duoc bang camera;
  // loi / qua 25 giay -> bao nhe nhang va tra ve false (choi bang cham).
  P.thu = function (kieu, moMay) {
    if (kieu !== 'cam') { P.trangThai(''); return Promise.resolve(false); }
    return new Promise(function (ok) {
      var xong = false;
      function ket(co, msg) { if (xong) return; xong = true; clearTimeout(het); P.trangThai(''); if (msg) P.tb(msg, 5200); ok(co); }
      var het = setTimeout(function () { ket(false, 'Mạng chậm nên chưa tải được bộ nhận diện — em chơi bằng chạm nhé! 👆'); }, 25000);
      var p;
      try { p = moMay(); } catch (e) { p = Promise.reject(e); }
      p.then(function () {
        if (xong) { if (P.tatCam) P.tatCam(); return; } // tai xong muon: da choi bang cham roi
        ket(true);
      }, function (e) {
        var n = e && e.name;
        ket(false, n === 'NotAllowedError' || n === 'SecurityError' ? 'Em chưa cho phép dùng camera — không sao, mình chơi bằng chạm nhé! 👆'
          : n === 'NotFoundError' || n === 'OverconstrainedError' ? 'Máy này không có camera trước — em chơi bằng chạm nhé! 👆'
          : n === 'NotReadableError' || n === 'AbortError' ? 'Camera đang bận ở ứng dụng khác — em chơi bằng chạm nhé! 👆'
          : 'Chưa tải được bộ nhận diện (mạng chậm) — em chơi bằng chạm nhé! 👆');
      });
    });
  };

  // Vao van choi: an sanh, hien dai duoi (nut "Choi bang cham" + thu hang)
  P.vaoChoi = function (coCam) {
    var s = $('cpSanh');
    if (s) s.hidden = true;
    P.cham = !coCam;
    T.doN = 0; T.doTb = 0;
    veDai();
  };
  function veDai() {
    var d = $('cpDai');
    if (!d) {
      d = document.createElement('div');
      d.id = 'cpDai'; d.className = 'cp-dai';
      d.innerHTML = '<button type="button" class="cp-dai-nut" id="cpCham">👆 Chơi bằng chạm</button><span class="cp-dai-cham" id="cpDangCham">👆 Đang chơi bằng chạm</span>' +
        '<span class="cp-dai-hang" id="cpHang"></span>';
      document.body.appendChild(d);
      $('cpCham').addEventListener('click', function () { sangCham('Đã tắt camera — em chạm vào đáp án đúng nhé! 👆'); });
    }
    d.hidden = false;
    document.documentElement.classList.toggle('cp-cham', P.cham);
    $('cpCham').hidden = P.cham;
    $('cpDangCham').hidden = !P.cham;
    veHang();
  }
  function veHang() {
    var el = $('cpHang');
    if (el) el.textContent = T.hang ? '🏅 Hạng ' + T.hang + '/' + T.soHs : '';
  }
  function sangCham(msg) {
    if (P.cham) return;
    P.cham = true;
    if (P.tatCam) { try { P.tatCam(); } catch (e) { /* bo qua */ } }
    if ($('cpDai')) veDai(); else document.documentElement.classList.add('cp-cham');
    if (msg) P.tb(msg, 4200);
  }
  // Thoi gian mot lan nhan dien (ms): may cham thi gian thua ra; qua cham (trung binh > 280 ms) thi chuyen sang cham
  P.do = function (ms) {
    if (P.cham) return;
    T.doN++;
    if (T.doN <= 2) return; // hai lan dau con "khoi dong" mo hinh, thuong cham bat thuong
    T.doTb = T.doN === 3 ? ms : T.doTb * 0.85 + ms * 0.15;
    P.nhip = Math.max(45, Math.min(220, T.doTb * 1.7));
    if (T.doN >= 12 && T.doTb > 280) sangCham('Máy hơi chậm khi dùng camera — mình chuyển sang chơi bằng chạm nhé! 👆');
  };

  /* ---- bao tung cau: gui lan luot, loi mang thi thu lai ---- */
  P.bao = function (k, dung, diem) {
    if (dung) T.dungSo++;
    T.cho.push({ i: k, d: dung ? 1 : 0, diem: Math.max(0, Math.round(diem || 0)), lan: 0 });
    gui();
  };
  function gui() {
    if (T.dangGui || !T.cho.length || T.roi) return;
    T.dangGui = true;
    var x = T.cho[0];
    api('POST', 'tien', { van: P.van, i: x.i, d: x.d, diem: x.diem }).then(function (r) {
      T.cho.shift();
      T.dangGui = false;
      T.hang = r.hang || 0; T.soHs = r.soHs || 0;
      veHang();
      if (T.cho.length) gui(); else if (T.het) veHetHang();
    }).catch(function (e) {
      T.dangGui = false;
      // van da ket thuc / co bam Choi lai / bi moi ra khoi phong
      if (e.status === 409 || e.status === 403 || e.status === 404) { veChoi(); return; }
      if (e.status === 400) { T.cho.shift(); gui(); return; }
      x.lan++;
      setTimeout(gui, e.status === 429 ? 1200 : Math.min(6000, 1200 * x.lan));
      if (T.het && x.lan === 3) { var el = $('cpHetHang'); if (el) el.textContent = 'Mạng chập chờn — đang gửi lại kết quả…'; }
    });
  }

  /* ---- theo doi phong: co ket thuc som / bam Choi lai / dong phong -> ve /choi ---- */
  function batPoll(ms) {
    clearTimeout(T.poll);
    T.poll = setTimeout(function vong() {
      if (T.roi) return;
      if (document.hidden) { T.poll = setTimeout(vong, ms); return; }
      api('GET', 'hs').then(function (d) {
        if (d.kieu !== 'tro' || d.dong || d.pha !== 'choi' || d.van !== P.van) { veChoi(); return; }
        if (T.het) { T.hs = d; veHetHang(); }
      }).catch(function (e) {
        if (e.status === 403 || e.status === 404) veChoi();
      }).then(function () { if (!T.roi) T.poll = setTimeout(vong, T.het ? 2000 : ms); });
    }, ms);
  }

  /* ---- het bo cau ---- */
  // kq = { diem, dung, sao (0..3), saoHtml }
  P.xong = function (kq) {
    T.het = true; T.kq = kq;
    if (P.tatCam) { try { P.tatCam(); } catch (e) { /* bo qua */ } }
    var d = $('cpDai');
    if (d) d.hidden = true;
    var el = $('cpHet') || document.createElement('div');
    el.id = 'cpHet'; el.className = 'cp-lop cp-het';
    var sao = '';
    for (var i = 0; i < 3; i++) sao += '<img src="/images/game/cam-star' + (i < kq.sao ? '' : '-empty') + '.svg" alt="" draggable="false" style="animation-delay:' + (i * 0.2) + 's">';
    el.innerHTML = '<div class="cp-the">' +
      '<div class="cp-sao" aria-hidden="true">' + sao + '</div>' +
      '<h1>' + (kq.sao >= 3 ? 'Xuất sắc!' : kq.sao >= 2 ? 'Giỏi lắm!' : kq.sao >= 1 ? 'Khá lắm!' : 'Em chơi xong rồi!') + '</h1>' +
      '<div class="cp-diem">' + (kq.diem | 0) + ' <small>điểm</small></div>' +
      // so cau dung dem theo cac cau da bao len may chu (khop voi man chieu; Chem hoa qua: dung o lan thu hai cung tinh)
      '<p class="cp-tk">Đúng ' + (P.dung0 + T.dungSo) + '/' + P.tong + ' câu</p>' +
      '<div class="cp-hang" id="cpHetHang" role="status" aria-live="polite">Đang gửi kết quả…</div>' +
      (kq.saoHtml || '') +
      '<p class="cp-nhe">Chờ cô kết thúc để xem bảng vàng nhé!</p></div>';
    if (!el.parentNode) document.body.appendChild(el);
    try { if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) navigator.vibrate([30, 40, 30]); } catch (e) { /* bo qua */ }
    if (T.cho.length) gui(); else veHetHang();
    batPoll(1200);
  };
  function veHetHang() {
    var el = $('cpHetHang');
    if (!el || T.cho.length) return;
    var d = T.hs || {}, hang = d.hang || T.hang, soHs = d.soHs || T.soHs;
    var to = d.dsTo && d.to >= 0 ? d.dsTo[d.to] : null;
    var con = to ? to.soTv - to.soXong : 0;
    el.innerHTML = (hang ? '<div>🏅 Em đang xếp hạng <b>' + hang + '</b> / ' + soHs + '</div>' : '<div>✓ Đã gửi kết quả</div>') +
      (to ? '<div class="cp-hang-to">👥 <b>' + esc(to.ten) + '</b> đang hạng ' + to.hang + ' · ' + to.diem + ' điểm' +
        (con > 0 ? '<br>Còn <b>' + con + ' bạn</b> trong tổ chưa xong — cổ vũ các bạn nhé! 加油！' : '<br>✓ Cả tổ đã xong!') + '</div>' : '');
  }
})();
