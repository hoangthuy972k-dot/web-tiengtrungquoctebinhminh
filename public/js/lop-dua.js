/* Cuoc dua ki thu — man chieu (Che do lop hoc). May chu: live.js phong kieu 'dua'.
   Giao vien mo phong, chieu ma QR; hoc sinh vao /dua, nhap ten, chon linh vat. Bam "Xuat phat": moi em tu lam
   bo cau (ngan hang Kiem tra bai cu — trac nghiem, xep cau keo tha, noi tu; khong co cau dich) theo nhip rieng,
   dung 1 cau = linh vat chay 1 buoc. Man chieu ve duong dua trong rung (public/js/dua-canh.js) cap nhat truc tiep;
   dien thoai hien toan canh sau moi 3 hoac 5 cau. Ket thuc: buc trao giai.
   Mo bang window.LopDua.mo({ layCau: function (n) -> Promise<[cau]>, nhan }). */
(function () {
  'use strict';
  var PREF = 'hyv_dua_pref';
  var S = { root: null, room: null, poll: 0, info: null, pha: 'sanh', so: 15, moc: 3, layCau: null, nhan: '', sound: true, dsKy: '', su: 0 };
  var root;
  function $(sel) { return root.querySelector(sel); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function maDep(ma) { return String(ma).replace(/(\d{3})(\d{3})/, '$1 $2'); }
  function qrSvg(link) {
    try { var g = window.qrcode(0, 'M'); g.addData(link); g.make(); return g.createSvgTag({ cellSize: 8, margin: 2, scalable: true }); }
    catch (e) { return ''; }
  }
  /* am thanh nho */
  var ac = null;
  function tone(f, dur, type, vol, delay) {
    if (!S.sound) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      var t0 = ac.currentTime + (delay || 0), o = ac.createOscillator(), g = ac.createGain();
      o.type = type || 'triangle'; o.frequency.setValueAtTime(f, t0);
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(vol || 0.12, t0 + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g); g.connect(ac.destination); o.start(t0); o.stop(t0 + dur + 0.03);
    } catch (e) { /* bo qua */ }
  }
  function sndVao() { tone(660, 0.08); tone(990, 0.12, 'triangle', 0.1, 0.06); }
  function sndSung() { tone(180, 0.25, 'square', 0.15); tone(523, 0.2, 'square', 0.1, 0.3); tone(784, 0.35, 'square', 0.12, 0.5); }
  function sndDich() { [0, 0.15, 0.3].forEach(function (d, i) { tone([784, 988, 1319][i], 0.25, 'triangle', 0.16, d); }); }

  function api(method, path, body) {
    var r = S.room;
    var url = '/api/live/' + (path === 'tao' ? 'tao' : r.ma + '/' + path) + (method === 'GET' ? '?khoa=' + encodeURIComponent(r.khoa) : '');
    return fetch(url, {
      method: method, headers: method === 'GET' ? {} : { 'Content-Type': 'application/json' },
      body: method === 'GET' ? undefined : JSON.stringify(Object.assign({ khoa: r ? r.khoa : '' }, body || {})), cache: 'no-store'
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (d) { if (!res.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; });
    });
  }

  function dung() {
    root = document.createElement('section');
    root.className = 'ldu';
    root.hidden = true;
    root.innerHTML = '<header class="ldu-bar"><span class="ldu-tit">🏁 Cuộc đua kì thú <span lang="zh">奇妙赛跑</span></span><span class="ldu-nhan" id="lduNhan"></span>' +
      '<span class="ldu-gian"></span><button type="button" class="ldu-nut-nho" data-act="tieng" id="lduTieng">🔊</button>' +
      '<button type="button" class="ldu-nut-nho" data-act="full">⛶ Toàn màn hình</button><button type="button" class="ldu-nut-nho" data-act="dong">✕ Đóng</button></header>' +
      '<div class="ldu-man" id="lduMan"></div>';
    document.body.appendChild(root);
    root.addEventListener('click', bam);
    S.built = true;
  }
  function bam(e) {
    var b = e.target.closest('[data-act], [data-so], [data-moc]');
    if (!b) return;
    if (b.hasAttribute('data-so')) { S.so = +b.getAttribute('data-so'); luu(); veSanh(); return; }
    if (b.hasAttribute('data-moc')) { S.moc = +b.getAttribute('data-moc'); luu(); veSanh(); return; }
    var a = b.getAttribute('data-act');
    if (a === 'dong') dong();
    else if (a === 'full') { try { if (document.fullscreenElement) document.exitFullscreen(); else root.requestFullscreen(); } catch (er) { /* bo qua */ } }
    else if (a === 'tieng') { S.sound = !S.sound; luu(); $('#lduTieng').textContent = S.sound ? '🔊' : '🔇'; }
    else if (a === 'batdau') batDau(b);
    else if (a === 'ketthuc') ketThuc();
    else if (a === 'moi') { dongPhong(); moPhong(); }
  }
  function luu() { ghiLS(PREF, { so: S.so, moc: S.moc, sound: S.sound }); }

  function moPhong() {
    S.pha = 'sanh'; S.info = null; S.dsKy = '';
    $('#lduMan').innerHTML = '<p class="ldu-cho">Đang mở phòng…</p>';
    S.room = { ma: '', khoa: '' };
    return fetch('/api/live/tao', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kieu: 'dua' }) })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; }); })
      .then(function (d) {
        S.room = { ma: d.ma, khoa: d.khoa };
        veSanh();
        S.poll = setInterval(tai, 1500);
        tai();
      })
      .catch(function (e) { $('#lduMan').innerHTML = '<p class="ldu-cho">Chưa mở được phòng: ' + esc(e.message) + '</p>'; S.room = null; });
  }
  function dongPhong() {
    clearInterval(S.poll);
    if (S.room && S.room.ma && S.pha !== 'het') api('POST', 'xong').catch(function () { /* bo qua */ });
    S.room = null;
  }
  function tai() {
    if (!S.room || !S.room.ma) return;
    api('GET', 'gv').then(function (d) {
      var cu = S.info;
      S.info = d;
      if (S.pha === 'sanh') {
        var ky = d.ds.map(function (x) { return x.pid; }).join(',');
        if (ky !== S.dsKy) { if (cu && d.ds.length > cu.ds.length) sndVao(); S.dsKy = ky; veDsSanh(); }
      } else if (S.pha === 'chay') veDuong();
    }).catch(function () { /* mang chap chon: lan sau thu lai */ });
  }

  /* ---------------- sanh cho ---------------- */
  function veSanh() {
    var link = location.origin + '/dua?ma=' + S.room.ma;
    $('#lduMan').innerHTML = '<div class="ldu-sanh">' +
      '<div class="ldu-qr-the"><div class="ldu-qr">' + qrSvg(link) + '</div>' +
        '<p>Quét mã hoặc vào <b>' + esc(location.host) + '/dua</b></p><p class="ldu-lb">Mã phòng</p><p class="ldu-ma">' + maDep(S.room.ma) + '</p></div>' +
      '<div class="ldu-sanh-phai">' +
        '<h2>Chọn linh vật — vào vạch xuất phát! <span lang="zh">各就各位</span></h2>' +
        '<div class="ldu-ds" id="lduDs"></div>' +
        // So cau: 10 / 20 / 30 / 40 / 50, "Tat ca (n cau)" hoac so khac 5..n (lop-socau.js); n = so cau cac bai dang chon lam duoc
        '<div class="ldu-chon" id="lduSo"><span>Số câu</span>' + window.LopSoCau.html(S.so, S.max || 30) + '</div>' +
        '<div class="ldu-chon"><span>Toàn cảnh đường đua trên điện thoại sau mỗi</span>' + [3, 5].map(function (n) {
          return '<button type="button" data-moc="' + n + '" class="' + (S.moc === n ? 'on' : '') + '">' + n + ' câu</button>';
        }).join('') + '</div>' +
        '<p class="ldu-luat">✅ Đúng = linh vật chạy 1 bước · ❌ Sai = vấp ngã, đứng yên · Câu hỏi: từ vựng, ngữ pháp, xếp câu kéo thả, nối từ (ngân hàng Kiểm tra bài cũ).</p>' +
        '<button type="button" class="ldu-go" data-act="batdau" id="lduGo">🔫 Xuất phát!</button>' +
      '</div></div>';
    window.LopSoCau.gan($('#lduSo'), S.max || 30, function (n) { S.so = n; luu(); });
    veDsSanh();
  }
  function veDsSanh() {
    var el = $('#lduDs');
    if (!el) return;
    var ds = S.info ? S.info.ds : [];
    el.innerHTML = ds.length ? ds.map(function (x) {
      return '<span class="ldu-hs"><img src="' + window.DuaCanh.anh(x.lv) + '" alt=""><b>' + esc(x.ten) + '</b></span>';
    }).join('') : '<p class="ldu-cho">Chưa có bạn nào vào… Mở điện thoại quét mã QR nhé!</p>';
    var go = $('#lduGo');
    if (go) { go.disabled = !ds.length; go.textContent = ds.length ? '🔫 Xuất phát! (' + ds.length + ' bạn)' : '🔫 Xuất phát!'; }
  }
  function batDau(b) {
    b.disabled = true;
    b.textContent = 'Đang chuẩn bị câu hỏi…';
    S.layCau(S.so).then(function (cau) {
      if (!cau || !cau.length) throw new Error('Bài đang chọn chưa có câu hỏi phù hợp.');
      // bai khong du cau nhu da chon: dua voi so cau co, bao cho co biet (khong lap lai cau)
      S.thieu = cau.length < S.so ? cau.length : 0;
      return api('POST', 'batdau', { cau: cau, moc: S.moc });
    }).then(function () {
      S.pha = 'chay'; S.su = 0;
      sndSung();
      veKhungChay();
      tai();
    }).catch(function (e) { b.disabled = false; b.textContent = '🔫 Xuất phát!'; alert(e.message); });
  }

  /* ---------------- dang dua ---------------- */
  function veKhungChay() {
    $('#lduMan').innerHTML = '<div class="ldu-chay">' +
      '<div class="ldu-duong" id="lduDuong"></div>' +
      '<aside class="ldu-ben">' +
        '<div class="ldu-ben-qr">' + qrSvg(location.origin + '/dua?ma=' + S.room.ma) + '<span>Vào muộn? Mã <b>' + maDep(S.room.ma) + '</b></span></div>' +
        '<div class="ldu-ben-h">🏆 Dẫn đầu</div><ol class="ldu-top" id="lduTop"></ol>' +
        '<div class="ldu-ben-h">📣 Diễn biến</div><div class="ldu-tin" id="lduTin"></div>' +
        '<p class="ldu-xong" id="lduXong"></p>' +
        (S.thieu ? '<p class="ldu-thieu">ℹ️ Bài này chỉ có ' + S.thieu + ' câu (cô chọn ' + S.so + ')</p>' : '') +
        '<button type="button" class="ldu-go" data-act="ketthuc">🏁 Kết thúc &amp; trao giải</button>' +
      '</aside></div>';
  }
  function veDuong() {
    var d = S.info, el = $('#lduDuong');
    if (!d || !el) return;
    var ds = d.bxh.map(function (r) { return { ten: r.ten, lv: r.lv, buoc: r.dungSo, xong: r.xong, hang: r.hang, la: false }; });
    window.DuaCanh.ve(el, { tong: d.tong, ds: ds });
    $('#lduTop').innerHTML = d.bxh.slice(0, 5).map(function (r, i) {
      return '<li><span>' + (['🥇', '🥈', '🥉'][i] || (i + 1) + '.') + '</span><img src="' + window.DuaCanh.anh(r.lv) + '" alt=""><b>' + esc(r.ten) + '</b><small>' + r.dungSo + '/' + d.tong + '</small></li>';
    }).join('');
    var su = d.su || [];
    if (su.length && su[0].id !== S.su) { if (/về đích/.test(su[0].txt)) sndDich(); S.su = su[0].id; }
    $('#lduTin').innerHTML = su.slice(0, 6).map(function (x) { return '<p>' + esc(x.txt) + '</p>'; }).join('') || '<p>Các bạn đang chạy…</p>';
    $('#lduXong').textContent = d.soXong + '/' + d.soHs + ' bạn đã về đích';
  }
  function ketThuc() {
    if (!S.room) return;
    api('POST', 'xong').then(function (r) {
      S.pha = 'het';
      clearInterval(S.poll);
      sndDich();
      var bxh = (S.info && S.info.bxh) || r.bxh || [];
      var top = bxh.slice(0, 3), thu = [1, 0, 2].filter(function (i) { return top[i]; });
      $('#lduMan').innerHTML = '<div class="ldu-het"><h2>🏆 Bục trao giải <span lang="zh">颁奖台</span></h2><div class="ldu-buc">' + thu.map(function (i) {
        var x = top[i];
        return '<div class="ldu-buc-o b' + (i + 1) + '"><span class="ldu-buc-ten">' + esc(x.ten) + '</span><img src="' + window.DuaCanh.anh(x.lv) + '" alt="">' +
          '<div class="ldu-buc-khoi"><b>' + ['🥇', '🥈', '🥉'][i] + '</b><small>' + x.dungSo + ' bước</small></div></div>';
      }).join('') + '</div>' +
        '<ol class="ldu-bxh">' + bxh.slice(3, 30).map(function (x) { return '<li><span>' + x.hang + '.</span><img src="' + window.DuaCanh.anh(x.lv) + '" alt=""><b>' + esc(x.ten) + '</b><small>' + x.dungSo + ' bước</small></li>'; }).join('') + '</ol>' +
        '<button type="button" class="ldu-go" data-act="moi">🔁 Mở cuộc đua mới</button></div>';
    }).catch(function (e) { alert(e.message); });
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    if (S.room) dongPhong();
    var p = docLS(PREF, {});
    S.so = p.so >= 5 && p.so <= 100 ? p.so : 20;
    S.moc = p.moc === 5 ? 5 : 3;
    S.sound = p.sound !== false;
    S.layCau = opt.layCau;
    // so cau toi da cac bai dang chon lam duoc (lop.js soCauDtToiDa, can nap tu vung): co roi thi ve lai o chon so cau
    S.max = 0; S.thieu = 0;
    if (opt.toiDa) opt.toiDa().then(function (n) {
      S.max = n;
      S.so = window.LopSoCau.kep(S.so, n);
      if (!root.hidden && S.pha === 'sanh' && S.room && S.room.ma) veSanh();
    }).catch(function () { /* giu uoc luong */ });
    S.nhan = opt.nhan || '';
    $('#lduNhan').textContent = S.nhan;
    $('#lduTieng').textContent = S.sound ? '🔊' : '🔇';
    root.hidden = false;
    document.documentElement.classList.add('ldu-open');
    if (window.NhacNen) window.NhacNen.bat({ kieu: 'vui' });
    moPhong();
  }
  function dong() {
    if (window.NhacNen) window.NhacNen.tat();
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    dongPhong();
    root.hidden = true;
    document.documentElement.classList.remove('ldu-open');
  }
  window.LopDua = { mo: mo, dong: dong };
})();
