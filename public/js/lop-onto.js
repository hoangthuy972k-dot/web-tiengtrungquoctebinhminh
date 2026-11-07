/* On bai theo to — khung chung cho 3 tro choi man chieu o Che do lop hoc:
   Gap thu bong (lop-gapthu.js), Xay lau dai (lop-laudai.js), Duong bang bi mat (lop-duongbang.js).
   Khung lo: thanh tren (ten tro, bai dang chon, vong, loa, toan man hinh, Thoat), the cai dat
   (so to + ten to lay theo to cua lop, so vong, dang cau hoi), nap bo cau tu ngan hang Kiem tra
   bai cu (khong co cau dich), the cau hoi to chu (trac nghiem / xep cau / noi tu, giao vien bam
   dap an hoac Dung / Sai, sau do hien dap an + giai thich), hop thoai, am thanh, buc trao giai.
   Moi tro dang ky bang LopOnTo.dangKy({ id, ten, logo, luat, vong, them, batDau(G), phim(e, G) }).
   Trang giao vien mo bang LopOnTo.mo(id, { nhan, to: [{ ten, mau, hinh }], soTo, layCau(n, ds) }). */
(function () {
  'use strict';

  var VIEN = '#2b1d3a';
  var CHU = ['A', 'B', 'C', 'D'];
  // Dang cau hoi -> danh sach dang cua ngan hang Kiem tra bai cu (lop-kiemtra.js boCauDt); null = hon hop
  var LOAI = {
    tuvung: { ten: '📖 Từ vựng', ds: ['nghia', 'viet', 'noi'] },
    nguphap: { ten: '🧩 Ngữ pháp', ds: ['nguphap', 'dien'] },
    xepcau: { ten: '🔀 Xếp câu', ds: ['xepcau'] },
    honhop: { ten: '🎲 Hỗn hợp', ds: null }
  };
  var TO_MD = [
    { ten: 'Rồng Vàng', mau: '#c9971c', hinh: '/images/game/lop-team-rong.svg' },
    { ten: 'Hổ Lửa', mau: '#d2452f', hinh: '/images/game/lop-team-ho.svg' },
    { ten: 'Gấu Trúc', mau: '#2f3b45', hinh: '/images/game/lop-team-gau-truc.svg' },
    { ten: 'Cáo Cam', mau: '#e07a1f', hinh: '/images/game/lop-team-cao.svg' },
    { ten: 'Cá Heo', mau: '#2479b5', hinh: '/images/game/lop-team-ca-heo.svg' },
    { ten: 'Khổng Tước', mau: '#23906a', hinh: '/images/game/lop-team-khong-tuoc.svg' }
  ];
  var VN_TU = { 'Từ này nghĩa là gì?': 1, 'Chọn chữ Hán đúng nghĩa': 1 };

  var DEF = {};
  var S = { def: null, opt: null, van: 0, pha: 'sanh', sound: true, cfg: null, pool: [], daDung: [], hoi: null, hop: null, ghiChu: '' };
  var root, G;

  /* ---------------- tien ich ---------------- */
  function $(sel) { return root.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // Boc cac doan chu Han (va dau cau Trung) bang the font Noto Serif SC; phan tieng Viet giu Be Vietnam Pro
  function zh(s) {
    return esc(s).replace(/[⺀-鿿豈-﫿　-〿！-～]+/g, function (m) { return '<span class="ot-zh" lang="zh">' + m + '</span>'; });
  }
  function tron(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  // Hen gio gan voi van choi: dong / choi lai thi bo qua
  function sau(ms, fn) {
    var ve = S.van;
    return setTimeout(function () { if (ve === S.van && root && !root.hidden) fn(); }, ms);
  }

  /* ---------------- am thanh (Web Audio, khong can file) ---------------- */
  var ac = null;
  function ctx() {
    if (!S.sound) return null;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ac) { try { ac = new AC(); } catch (e) { return null; } }
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
  function noise(dur, vol, delay, freq, q) {
    var a = ctx();
    if (!a) return;
    var t0 = a.currentTime + (delay || 0), n = Math.floor(a.sampleRate * dur);
    var buf = a.createBuffer(1, n, a.sampleRate), d = buf.getChannelData(0);
    for (var i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    var src = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    src.buffer = buf;
    f.type = 'bandpass'; f.frequency.value = freq || 800; f.Q.value = q || 0.8;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + Math.min(0.08, dur / 3));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(a.destination);
    src.start(t0); src.stop(t0 + dur + 0.02);
  }
  var snd = {
    cau: function () { tone(660, 0.12, 'triangle', 0.14); tone(880, 0.2, 'triangle', 0.12, 0.1); },
    dung: function () { tone(659, 0.12, 'triangle', 0.18); tone(880, 0.12, 'triangle', 0.18, 0.1); tone(1175, 0.26, 'triangle', 0.16, 0.2); },
    sai: function () { tone(330, 0.22, 'square', 0.06, 0, 220); tone(247, 0.32, 'square', 0.06, 0.2, 165); },
    bam: function () { tone(740, 0.06, 'square', 0.05); },
    pop: function () { tone(500, 0.12, 'sine', 0.16, 0, 1100); },
    roi: function () { tone(900, 0.5, 'sine', 0.08, 0, 260); },
    len: function () { tone(260, 0.5, 'sine', 0.08, 0, 820); },
    cach: function () { noise(0.12, 0.25, 0, 1800, 1.2); tone(1200, 0.06, 'square', 0.05); },
    thang: function () { [784, 988, 1175, 1568].forEach(function (f, i) { tone(f, 0.2, 'triangle', 0.13, i * 0.08); }); },
    sao: function () { [1047, 1319, 1568, 2093].forEach(function (f, i) { tone(f, 0.18, 'sine', 0.12, i * 0.07); }); },
    gio: function () { noise(1.6, 0.22, 0, 500, 0.5); noise(1.2, 0.12, 0.3, 1100, 0.6); tone(500, 1.4, 'sine', 0.04, 0, 180); },
    nut: function () { noise(0.3, 0.3, 0, 2400, 2); tone(1500, 0.08, 'square', 0.05, 0.05, 700); },
    bom: function () { noise(0.5, 0.35, 0, 400, 0.7); tone(300, 0.4, 'sine', 0.12, 0, 90); },
    truot: function () { tone(500, 0.5, 'triangle', 0.08, 0, 1300); noise(0.4, 0.06, 0, 3000, 1); },
    rung: function () { noise(0.35, 0.3, 0, 180, 0.8); tone(110, 0.3, 'square', 0.07, 0, 60); },
    ken: function () {
      [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.16, i * 0.11); });
      tone(1047, 0.6, 'triangle', 0.14, 0.6); tone(1319, 0.6, 'triangle', 0.12, 0.6); tone(1568, 0.7, 'triangle', 0.12, 0.6);
    }
  };
  function nhacNen(kieu) { if (window.NhacNen) window.NhacNen.bat({ kieu: kieu || 'vui' }); }
  function tatNhac() { if (window.NhacNen) window.NhacNen.tat(); }

  /* ---------------- khung ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopOnTo';
    root.className = 'ot';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.innerHTML =
      '<header class="ot-bar">' +
        '<b class="ot-title" id="otTitle"></b>' +
        '<span class="ot-sub" id="otSub"></span>' +
        '<span class="ot-gap"></span>' +
        '<span class="ot-vong" id="otVong" hidden></span>' +
        '<button type="button" class="ot-btn ot-ic" id="otSound"></button>' +
        '<button type="button" class="ot-btn ot-ic" id="otFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="ot-btn ot-thoat" id="otThoat">✕ Thoát</button>' +
      '</header>' +
      '<div class="ot-than"><main class="ot-man" id="otMan"></main>' +
      '<div class="ot-lop" id="otLop"></div></div>';
    document.body.appendChild(root);
    $('#otSound').addEventListener('click', function () {
      S.sound = !S.sound; luuPref(); veNutLoa();
      if (S.sound) snd.bam();
      if (!S.sound) tatNhac(); else if (S.pha === 'choi') nhacNen(S.def.nhac);
    });
    $('#otFull').addEventListener('click', toanManHinh);
    $('#otThoat').addEventListener('click', dong);
    window.addEventListener('keydown', phim, true);
    window.addEventListener('resize', function () { if (root && !root.hidden && S.def && S.def.doiCo && S.pha === 'choi') S.def.doiCo(G); });
  }
  function veNutLoa() {
    var s = $('#otSound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng — bấm để tắt (M)' : 'Đang tắt tiếng — bấm để bật (M)';
    s.classList.toggle('is-off', !S.sound);
  }
  function toanManHinh() {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (root.requestFullscreen) root.requestFullscreen();
    } catch (e) { /* bo qua */ }
  }
  function veVong(t) {
    var v = $('#otVong');
    v.hidden = !t;
    v.innerHTML = t || '';
  }

  /* ---------------- cai dat ---------------- */
  function prefKey() { return 'hyv_onto_' + S.def.id; }
  function luuPref() {
    if (!S.def || !S.cfg) return;
    var c = S.cfg;
    ghiLS(prefKey(), { soTo: c.soTo, ten: c.ten, tenGoc: c.tenGoc, vong: c.vong, loai: c.loai, x: c.x, sound: S.sound, cach: c.cach, secs: c.secs, nguong: c.nguong });
  }
  // Cach choi qua ma QR (lop-onto-qr.js): chi hien khi co module
  function laQr() { return !!(window.LopOnToQr && S.cfg && S.cfg.cach === 'qr'); }
  function nhanBatDau() { return laQr() ? '📱 Mở phòng QR <kbd>Enter</kbd>' : '▶ Bắt đầu <kbd>Enter</kbd>'; }
  function chip(k, v, nhan, on) {
    return '<button type="button" class="ot-opt' + (on ? ' is-on' : '') + '" data-k="' + k + '" data-v="' + esc(v) + '">' + nhan + '</button>';
  }
  function veSanh() {
    if (window.LopOnToQr) window.LopOnToQr.nghi();
    tatNhac();
    S.van++;
    S.pha = 'sanh';
    dongHop(); dongHoi();
    veVong('');
    var d = S.def, c = S.cfg;
    $('#otSub').textContent = S.opt.nhan || '';
    var ten = '';
    for (var i = 0; i < 6; i++) {
      var t = G.to(i);
      ten += '<label class="ot-ten-to" style="--tc:' + t.mau + '"' + (i < c.soTo ? '' : ' hidden') + '>' +
        '<img src="' + esc(t.hinh) + '" alt="" draggable="false"><input type="text" maxlength="18" data-i="' + i + '" value="' + esc(t.ten) + '" aria-label="Tên tổ ' + (i + 1) + '"></label>';
    }
    var to = '';
    for (var n = 2; n <= 6; n++) to += chip('to', n, n + ' tổ', c.soTo === n);
    var vong = d.vong.ds.map(function (v) { return chip('vong', v, v + ' ' + (d.vong.don || 'vòng'), c.vong === v); }).join('');
    var loai = Object.keys(LOAI).map(function (k) { return chip('loai', k, LOAI[k].ten, c.loai === k); }).join('');
    var them = (d.them || []).map(function (h) {
      return '<div class="ot-hang"><span class="ot-nhan">' + esc(h.ten) + '</span><div class="ot-chon">' +
        h.ds.map(function (o) { return chip('x-' + h.k, o[0], o[1], String(c.x[h.k]) === String(o[0])); }).join('') + '</div></div>';
    }).join('');
    var anQr = c.cach === 'qr' ? '' : ' hidden';
    var cach = window.LopOnToQr ? '<div class="ot-hang"><span class="ot-nhan">Cách chơi</span><div class="ot-chon">' +
      chip('cach', 'bang', '🖥️ Chơi trên bảng', c.cach !== 'qr') + chip('cach', 'qr', '📱 Thi đấu qua mã QR', c.cach === 'qr') + '</div></div>' : '';
    var qr = window.LopOnToQr ? '<div class="ot-hang ot-hang--qr"' + anQr + '><span class="ot-nhan">Mỗi câu</span><div class="ot-chon">' +
        [15, 20, 30].map(function (n) { return chip('secs', n, n + ' giây', c.secs === n); }).join('') + '</div></div>' +
      '<div class="ot-hang ot-hang--qr"' + anQr + '><span class="ot-nhan">Tổ được hành động</span><div class="ot-chon">' +
        chip('nguong', 50, '≥ 50% bạn đúng', c.nguong !== 70) + chip('nguong', 70, '≥ 70% bạn đúng', c.nguong === 70) +
        '<span class="ot-ghi">Không tổ nào đạt thì tổ tốt nhất có bạn đúng được đi.</span></div></div>' : '';
    $('#otMan').innerHTML =
      '<div class="ot-the ot-sanh">' +
        '<div class="ot-sanh-dau">' +
          '<div class="ot-logo" aria-hidden="true">' + d.logo + '</div>' +
          '<div><h2>' + esc(d.ten) + '</h2><p class="ot-luat">' + d.luat + '</p></div>' +
        '</div>' + cach +
        '<div class="ot-hang"><span class="ot-nhan">Số tổ</span><div class="ot-chon">' + to + '</div></div>' +
        '<div class="ot-hang"><span class="ot-nhan">Tên tổ</span><div class="ot-chon ot-chon-ten">' + ten + '</div></div>' +
        '<div class="ot-hang"><span class="ot-nhan">' + esc(d.vong.ten || 'Số vòng') + '</span><div class="ot-chon">' + vong +
          '<span class="ot-ghi" id="otSoCau"></span></div></div>' +
        '<div class="ot-hang"><span class="ot-nhan">Dạng câu hỏi</span><div class="ot-chon">' + loai + '</div></div>' +
        them + qr +
        '<div class="ot-nut-hang"><button type="button" class="ot-nut" id="otVe">← Về danh sách trò chơi</button>' +
          '<button type="button" class="ot-nut ot-nut--do ot-nut--to" id="otBatDau">' + nhanBatDau() + '</button></div>' +
      '</div>';
    veSoCau();
    $all('.ot-opt').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-k'), v = b.getAttribute('data-v');
        if (k === 'to') {
          c.soTo = +v;
          $all('.ot-ten-to').forEach(function (l, j) { l.hidden = j >= c.soTo; });
        } else if (k === 'vong') c.vong = +v;
        else if (k === 'loai') c.loai = v;
        else if (k === 'cach') {
          c.cach = v === 'qr' ? 'qr' : 'bang';
          $all('.ot-hang--qr').forEach(function (r) { r.hidden = c.cach !== 'qr'; });
          $('#otBatDau').innerHTML = nhanBatDau();
        } else if (k === 'secs' || k === 'nguong') c[k] = +v;
        else if (k.indexOf('x-') === 0) {
          var hk = k.slice(2), h = (d.them || []).filter(function (x) { return x.k === hk; })[0];
          c.x[hk] = h && typeof h.ds[0][0] === 'number' ? +v : v;
        }
        $all('.ot-opt[data-k="' + k + '"]').forEach(function (x) { x.classList.toggle('is-on', x === b); });
        veSoCau();
        snd.bam();
        luuPref();
      });
    });
    $all('.ot-ten-to input').forEach(function (inp) {
      inp.addEventListener('input', function () { c.ten[+inp.getAttribute('data-i')] = inp.value.trim(); luuPref(); });
    });
    $('#otVe').addEventListener('click', dong);
    $('#otBatDau').addEventListener('click', batDau);
    $('#otBatDau').focus();
  }
  function veSoCau() {
    var el = $('#otSoCau');
    if (el) el.textContent = laQr() ? '≈ ' + S.cfg.vong + ' câu, cả lớp cùng trả lời mỗi câu' : '≈ ' + (S.cfg.vong * S.cfg.soTo) + ' câu cho ' + S.cfg.soTo + ' tổ';
  }

  /* ---------------- bo cau ---------------- */
  function hopLe(c) {
    if (!c) return false;
    // bo cau dich (giao vien khong dung cau dich cho tro on bai theo to)
    if (/dịch|dịch sang/i.test((c.lenh || '') + ' ' + (c.zh || '') + ' ' + (c.ctx || ''))) return false;
    if (c.k === 'xep') return Array.isArray(c.tu) && c.tu.length > 1 && !!c.dap;
    if (c.k === 'noi') return Array.isArray(c.trai) && Array.isArray(c.phai) && Array.isArray(c.dap) && c.trai.length > 1;
    return Array.isArray(c.opts) && c.opts.length >= 2 && c.dung >= 0 && c.dung < c.opts.length;
  }
  function napCau(n) {
    var lay = S.opt.layCau, ds = LOAI[S.cfg.loai] ? LOAI[S.cfg.loai].ds : null;
    if (typeof lay !== 'function') return Promise.resolve([]);
    S.ghiChu = '';
    return Promise.resolve(lay(n, ds)).then(function (r) {
      r = (r || []).filter(hopLe);
      if (r.length >= Math.min(4, n) || !ds) return r;
      // bai dang chon chua co dang nay (vd. chua co cau xep) -> them cau hon hop
      return Promise.resolve(lay(n, null)).then(function (r2) {
        S.ghiChu = 'Các bài đang chọn có ít câu dạng «' + LOAI[S.cfg.loai].ten.replace(/^\S+\s/, '') + '» — thêm câu hỗn hợp.';
        return r.concat((r2 || []).filter(hopLe));
      });
    }).catch(function () { return []; });
  }
  function cauTiep() {
    if (!S.pool.length) {
      S.pool = tron(S.daDung);
      S.daDung = [];
    }
    var c = S.pool.shift();
    if (c) S.daDung.push(c);
    return c || null;
  }
  // Do kho cua cau: 1 = tu vung, 2 = ngu phap / noi tu, 3 = xep cau
  function kho(c) {
    if (!c) return 1;
    if (c.k === 'xep') return 3;
    if (c.k === 'noi') return 2;
    return VN_TU[c.lenh] ? 1 : 2;
  }
  function tenDang(c) {
    if (c.k === 'xep') return '🔀 Xếp câu';
    if (c.k === 'noi') return '🔗 Nối từ';
    return VN_TU[c.lenh] ? '📖 Từ vựng' : '🧩 Ngữ pháp';
  }

  function batDau() {
    var c = S.cfg;
    for (var i = 0; i < 6; i++) if (!c.ten[i]) c.ten[i] = '';
    luuPref();
    S.van++;
    S.pha = 'tai';
    $('#otMan').innerHTML = '<div class="ot-the ot-tai"><div class="ot-logo ot-logo-quay" aria-hidden="true">' + S.def.logo + '</div><p>Đang chuẩn bị câu hỏi của các bài đã chọn…</p></div>';
    var ve = S.van;
    napCau(Math.max(24, c.vong * c.soTo * 2 + 8)).then(function (ds) {
      if (ve !== S.van) return;
      if (!ds.length) {
        S.pha = 'trong';
        $('#otMan').innerHTML = '<div class="ot-the ot-tai"><div class="ot-logo" aria-hidden="true">' + S.def.logo + '</div>' +
          '<h2>Chưa có câu hỏi nào!</h2><p>Các bài đang chọn chưa có câu trong ngân hàng ôn bài. Hãy chọn bài khác ở màn chuẩn bị rồi mở lại nhé.</p>' +
          '<div class="ot-nut-hang"><button type="button" class="ot-nut" id="otVe2">← Về danh sách trò chơi</button></div></div>';
        $('#otVe2').addEventListener('click', dong);
        return;
      }
      S.pool = tron(ds);
      S.daDung = [];
      // Thi dau qua ma QR: sanh cho (ma QR, cac to) — lop-onto-qr.js dieu khien tu day
      if (laQr()) {
        S.pha = 'qr';
        window.LopOnToQr.mo(G);
        if (S.ghiChu) toast(S.ghiChu);
        return;
      }
      if (window.LopOnToQr) window.LopOnToQr.dong();
      S.pha = 'choi';
      nhacNen(S.def.nhac);
      S.def.batDau(G);
      if (S.ghiChu) toast(S.ghiChu);
    });
  }

  /* ---------------- the cau hoi ----------------
     G.hoi({ to, phu, nutDung, nutSai, xong(dung, c) }): hien cau to cho to `to`; giao vien bam dap an
     (trac nghiem) hoac Dung / Sai (xep cau, noi tu). Sau khi cham hien dap an + giai thich va nut tiep tuc. */
  function hoi(o) {
    dongHoi();
    var c = cauTiep();
    if (!c) { o.xong(false, null); return; }
    var t = G.to(o.to);
    S.hoi = { o: o, c: c, da: false, dung: false };
    var el = document.createElement('div');
    el.className = 'ot-hoi';
    el.innerHTML = '<div class="ot-hoi-the" style="--tc:' + t.mau + '" role="dialog" aria-label="Câu hỏi"></div>';
    $('#otLop').appendChild(el);
    veHoi();
    snd.cau();
  }
  function veHoi() {
    var h = S.hoi, c = h.c, o = h.o, t = G.to(o.to);
    var box = $('#otLop .ot-hoi-the');
    if (!box) return;
    var than = '';
    if (c.k === 'xep') {
      than = (c.ctx ? '<p class="ot-ctx">' + zh(c.ctx) + '</p>' : '') +
        '<div class="ot-xep">' + c.tu.map(function (w, i) { return '<span class="ot-xep-tu" style="--i:' + i + '">' + zh(w) + '</span>'; }).join('') + '</div>';
    } else if (c.k === 'noi') {
      than = '<div class="ot-noi"><ol class="ot-noi-trai">' + c.trai.map(function (w, i) { return '<li><b>' + (i + 1) + '</b>' + zh(w) + '</li>'; }).join('') + '</ol>' +
        '<ol class="ot-noi-phai">' + c.phai.map(function (w, j) { return '<li><b>' + CHU[j] + '</b>' + zh(w) + '</li>'; }).join('') + '</ol></div>';
    } else {
      var dai = String(c.zh || '').length > 14;
      than = (c.zh ? '<div class="ot-de' + (dai ? ' ot-de--dai' : '') + '">' + zh(c.zh) + '</div>' : '') +
        (c.ctx ? '<p class="ot-ctx">' + zh(c.ctx) + '</p>' : '') +
        '<div class="ot-opts">' + c.opts.map(function (x, i) {
          var cls = '';
          if (h.da) cls = i === c.dung ? ' is-dung' : i === h.chon ? ' is-sai' : ' is-mo';
          return '<button type="button" class="ot-op' + cls + '" data-i="' + i + '"' + (h.da ? ' disabled' : '') + '><b>' + CHU[i] + '</b><span>' + zh(x) + '</span></button>';
        }).join('') + '</div>';
    }
    var cham = '';
    if (!h.da) {
      cham = c.opts
        ? '<div class="ot-cham"><span class="ot-cham-goi">Bấm đáp án tổ chọn <kbd>A</kbd>–<kbd>D</kbd></span>' +
          '<button type="button" class="ot-nut ot-nut--nho" data-cham="sai">✗ Không trả lời được</button></div>'
        : '<div class="ot-cham"><button type="button" class="ot-nut ot-nut--xanh ot-nut--to" data-cham="dung">✓ Đúng <kbd>Đ</kbd></button>' +
          '<button type="button" class="ot-nut ot-nut--do ot-nut--to" data-cham="sai">✗ Sai <kbd>S</kbd></button>' +
          '<button type="button" class="ot-nut ot-nut--nho" data-cham="xem">👁 Xem đáp án</button></div>';
    } else {
      var dap = c.k === 'xep' ? zh(c.dap)
        : c.k === 'noi' ? c.dap.map(function (j, i) { return zh(c.trai[i]) + ' → ' + zh(c.phai[j]); }).join('<i>·</i>')
        : CHU[c.dung] + '. ' + zh(c.opts[c.dung]);
      var why = c.why ? '<p class="ot-why">💡 ' + zh(c.why) + '</p>' : (c.k === 'xep' && c.ctx ? '<p class="ot-why">💡 Nghĩa: ' + zh(c.ctx) + '</p>' : '');
      cham = '<div class="ot-giai ' + (h.xem ? 'is-xem' : h.dung ? 'is-dung' : 'is-sai') + '">' +
        '<div class="ot-giai-kq">' + (h.xem ? '👁 Đáp án' : h.dung ? '✓ Chính xác!' : '✗ Chưa đúng') + '</div>' +
        '<div class="ot-giai-noi"><p class="ot-dap"><span>Đáp án:</span> ' + dap + '</p>' + why + '</div>' +
        '<div class="ot-giai-nut">' + (h.xem
          ? '<button type="button" class="ot-nut ot-nut--xanh" data-cham="dung">✓ Tổ trả lời đúng</button><button type="button" class="ot-nut ot-nut--do" data-cham="sai">✗ Sai</button>'
          : '<button type="button" class="ot-nut ot-nut--vang ot-nut--to" id="otTiep">' + esc(h.dung ? (o.nutDung || 'Tiếp tục ▶') : (o.nutSai || 'Lượt tiếp ▶')) + ' <kbd>Enter</kbd></button>') +
        '</div></div>';
    }
    box.innerHTML =
      '<div class="ot-hoi-dau">' +
        '<span class="ot-hoi-to"><img src="' + esc(t.hinh) + '" alt="" draggable="false"><b>' + esc(t.ten) + '</b></span>' +
        '<span class="ot-tag">' + tenDang(c) + '</span>' +
        (o.phu ? '<span class="ot-hoi-phu">' + (typeof o.phu === 'function' ? o.phu(c) : o.phu) + '</span>' : '') +
        '<span class="ot-gap"></span>' +
        (h.da ? '' : '<button type="button" class="ot-btn-nho" id="otDoiCau" title="Đổi câu khác (không tính lượt)">↻ Đổi câu</button>') +
      '</div>' +
      '<p class="ot-lenh">' + esc(c.lenh || '') + '</p>' + than + cham;
    $all('#otLop .ot-op').forEach(function (b) { b.addEventListener('click', function () { chamMc(+b.getAttribute('data-i')); }); });
    $all('#otLop [data-cham]').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-cham');
        if (k === 'xem') { h.da = true; h.xem = true; snd.bam(); veHoi(); return; }
        chamXN(k === 'dung');
      });
    });
    var doi = $('#otDoiCau');
    if (doi) doi.addEventListener('click', function () { h.c = cauTiep() || h.c; snd.bam(); veHoi(); });
    var tiep = $('#otTiep');
    if (tiep) { tiep.addEventListener('click', tiepHoi); tiep.focus(); }
  }
  function chamMc(i) {
    var h = S.hoi;
    if (!h || h.da || !h.c.opts) return;
    h.da = true; h.chon = i; h.dung = i === h.c.dung;
    ketQua();
  }
  function chamXN(dung) {
    var h = S.hoi;
    if (!h || (h.da && !h.xem)) return;
    h.da = true; h.xem = false; h.dung = dung;
    ketQua();
  }
  function ketQua() {
    var h = S.hoi;
    if (h.dung) snd.dung(); else snd.sai();
    veHoi();
    var box = $('#otLop .ot-hoi-the');
    if (box) { box.classList.remove('is-rung', 'is-vui'); void box.offsetWidth; box.classList.add(h.dung ? 'is-vui' : 'is-rung'); }
  }
  function tiepHoi() {
    var h = S.hoi;
    if (!h || !h.da || h.xem) return;
    dongHoi();
    h.o.xong(h.dung, h.c);
  }
  function dongHoi() {
    S.hoi = null;
    var el = root && $('#otLop .ot-hoi');
    if (el) el.remove();
  }

  /* ---------------- hop thoai chung ----------------
     G.hop({ html, nut: [{ t, cls, fn, phim }], cls }) — the giua man hinh; G.dongHop() */
  function hop(o) {
    dongHop();
    var el = document.createElement('div');
    el.className = 'ot-hop' + (o.cls ? ' ' + o.cls : '');
    el.innerHTML = '<div class="ot-hop-the"' + (o.mau ? ' style="--tc:' + o.mau + '"' : '') + '>' + o.html +
      ((o.nut || []).length ? '<div class="ot-nut-hang">' + o.nut.map(function (n, i) {
        return '<button type="button" class="ot-nut ' + (n.cls || '') + '" data-n="' + i + '"' + (n.tat ? ' disabled' : '') + '>' + n.t + '</button>';
      }).join('') + '</div>' : '') + '</div>';
    $('#otLop').appendChild(el);
    S.hop = o;
    Array.prototype.forEach.call(el.querySelectorAll('[data-n]'), function (b) {
      b.addEventListener('click', function () { var n = o.nut[+b.getAttribute('data-n')]; if (n && n.fn) n.fn(); });
    });
    var f = el.querySelector('[data-n]:not([disabled])');
    if (f) f.focus();
    return el;
  }
  function dongHop() {
    S.hop = null;
    var el = root && $('#otLop .ot-hop');
    if (el) el.remove();
  }
  function toast(t, ms) {
    var el = document.createElement('div');
    el.className = 'ot-toast';
    el.innerHTML = t;
    root.appendChild(el);
    setTimeout(function () { el.classList.add('is-ra'); }, ms || 2600);
    setTimeout(function () { el.remove(); }, (ms || 2600) + 500);
  }
  // Chu lon bay ngang man hinh (vd. "⭐ x2!", "Gió lớn!")
  function bao(t, cls) {
    var el = document.createElement('div');
    el.className = 'ot-bao ' + (cls || '');
    el.innerHTML = '<span>' + t + '</span>';
    root.appendChild(el);
    setTimeout(function () { el.remove(); }, 1900);
  }

  /* ---------------- buc trao giai ----------------
     G.ketThuc({ hang: [{ i, diem, phu, nho }], don, tieuDe }) — xep theo diem (roi theo nho). */
  function ketThuc(o) {
    S.van++;
    S.pha = 'het';
    dongHoi(); dongHop();
    veVong('');
    tatNhac();
    var ds = o.hang.slice().sort(function (a, b) { return b.diem - a.diem || (b.nho || 0) - (a.nho || 0) || a.i - b.i; });
    var hang = [], r = 0;
    ds.forEach(function (x, k) {
      if (k === 0 || x.diem !== ds[k - 1].diem || (x.nho || 0) !== (ds[k - 1].nho || 0)) r = k + 1;
      hang.push(r);
    });
    function cot(k) {
      var x = ds[k];
      if (!x) return '';
      var t = G.to(x.i), h = hang[k];
      return '<div class="ot-buc-cot p' + Math.min(h, 3) + '" style="--tc:' + t.mau + ';--k:' + k + '">' +
        '<div class="ot-buc-phu">' + (x.phu || '') + '</div>' +
        '<div class="ot-buc-ten"><img src="' + esc(t.hinh) + '" alt="" draggable="false"><b>' + esc(t.ten) + '</b></div>' +
        '<div class="ot-buc-diem">' + x.diem + ' <small>' + esc(o.don || 'điểm') + '</small></div>' +
        '<div class="ot-buc-be">' + (h <= 3 ? '<img src="/images/game/lop-huy-' + h + '.svg" alt="Hạng ' + h + '" draggable="false">' : '<span>' + h + '</span>') + '</div>' +
      '</div>';
    }
    var thuTu = ds.length >= 3 ? [1, 0, 2] : ds.length === 2 ? [1, 0] : [0];
    var con = ds.slice(3).map(function (x, k) {
      var t = G.to(x.i);
      return '<li style="--tc:' + t.mau + '"><span class="ot-con-h">' + hang[k + 3] + '</span><img src="' + esc(t.hinh) + '" alt="" draggable="false"><b>' + esc(t.ten) + '</b>' +
        '<span class="ot-con-phu">' + (x.ghi || '') + '</span><em>' + x.diem + ' ' + esc(o.don || 'điểm') + '</em></li>';
    }).join('');
    var hoaGiay = '';
    var MAU = ['#e9a23b', '#b8432f', '#2f8a57', '#2479b5', '#c9971c', '#d4588f'];
    for (var i = 0; i < 44; i++) {
      hoaGiay += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;background:' + MAU[i % MAU.length] + ';animation-delay:' + (Math.random() * 2.4).toFixed(2) + 's;animation-duration:' + (2.6 + Math.random() * 2).toFixed(2) + 's"></i>';
    }
    $('#otMan').innerHTML =
      '<div class="ot-ket">' +
        '<div class="ot-hoagiay" aria-hidden="true">' + hoaGiay + '</div>' +
        '<h2 class="ot-ket-tit"><img src="/images/game/kt-trophy.svg" alt="" draggable="false">' + esc(o.tieuDe || 'Bảng vàng') + '</h2>' +
        (o.loi ? '<p class="ot-ket-loi">' + o.loi + '</p>' : '') +
        '<div class="ot-buc">' + thuTu.map(cot).join('') + '</div>' +
        (con ? '<ol class="ot-con">' + con + '</ol>' : '') +
        '<div class="ot-nut-hang">' + (G.qr
          ? '<button type="button" class="ot-nut" id="otCaiDat">⚙ Về cài đặt</button>' +
            '<button type="button" class="ot-nut ot-nut--vang" id="otLai">🔁 Chơi lại (giữ phòng)</button>'
          : '<button type="button" class="ot-nut" id="otLai">↺ Chơi lại</button>') +
          '<button type="button" class="ot-nut ot-nut--do" id="otRa">✕ Thoát về danh sách</button></div>' +
      '</div>';
    $('#otLai').addEventListener('click', G.qr ? batDau : veSanh);
    if (G.qr) {
      $('#otCaiDat').addEventListener('click', veSanh);
      // bao ket qua cuoi cho dien thoai: hang cua tung to
      G.qr.ketThuc(ds.map(function (x, k) { return { to: x.i, hang: hang[k], diem: x.diem }; }), o.don || 'điểm');
    }
    $('#otRa').addEventListener('click', dong);
    snd.ken();
  }

  /* ---------------- phim tat ---------------- */
  function phim(e) {
    if (!root || root.hidden) return;
    var tg = e.target;
    if (tg && (tg.tagName === 'INPUT' || tg.tagName === 'TEXTAREA' || tg.isContentEditable)) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = (e.key || '').toLowerCase();
    var xong = function () { e.preventDefault(); e.stopPropagation(); };
    if (k === 'f') { xong(); toanManHinh(); return; }
    if (k === 'm') { xong(); $('#otSound').click(); return; }
    if (S.pha === 'sanh' && k === 'enter') { xong(); batDau(); return; }
    var h = S.hoi;
    if (h) {
      if (!h.da && h.c.opts) {
        var i = 'abcd'.indexOf(k);
        if (i < 0 && e.key >= '1' && e.key <= '4') i = +e.key - 1;
        if (i >= 0 && i < h.c.opts.length && k.length === 1) { xong(); chamMc(i); }
        return;
      }
      if (!h.da || h.xem) {
        if (k === 'đ' || k === 'd') { xong(); chamXN(true); }
        else if (k === 's') { xong(); chamXN(false); }
        return;
      }
      if (k === 'enter' || k === ' ' || e.key === 'ArrowRight') { xong(); tiepHoi(); }
      return;
    }
    if (S.hop) {
      // hop thoai: phim so chon nut, Enter nut dau
      var nut = S.hop.nut || [];
      for (var j = 0; j < nut.length; j++) {
        if (nut[j].phim && nut[j].phim === k && !nut[j].tat) { xong(); nut[j].fn(); return; }
      }
      return;
    }
    // Thi qua ma QR: phim Enter / Space do lop-onto-qr.js xu ly (khong dung phim cua tro tren bang)
    if (G.qr) { if (G.qr.phim(k)) xong(); return; }
    if (S.pha === 'choi' && S.def.phim && S.def.phim(e, G, k)) xong();
  }

  /* ---------------- mo / dong ---------------- */
  function mo(id, opt) {
    var d = DEF[id];
    if (!d) return false;
    if (!root) dung();
    if (S.def && S.def !== d && S.def.dong) S.def.dong(G);
    S.def = d;
    S.opt = opt || {};
    var lop = Array.isArray(S.opt.to) ? S.opt.to : [];
    var tenLop = [];
    for (var i = 0; i < 6; i++) tenLop.push((lop[i] && lop[i].ten) || TO_MD[i].ten);
    var p = docLS(prefKey(), {});
    S.sound = p.sound !== false;
    var x = {};
    (d.them || []).forEach(function (h) {
      var co = p.x && h.ds.some(function (o) { return String(o[0]) === String(p.x[h.k]); });
      x[h.k] = co ? p.x[h.k] : h.md;
    });
    var soLop = +S.opt.soTo;
    S.cfg = {
      soTo: p.soTo >= 2 && p.soTo <= 6 ? p.soTo : (soLop >= 2 && soLop <= 6 ? soLop : 3),
      // ten to: lay ten to cua lop; neu giao vien da sua trong tro (va ten lop chua doi) thi giu ban da sua
      ten: Array.isArray(p.ten) && JSON.stringify(p.tenGoc) === JSON.stringify(tenLop) ? p.ten.slice(0, 6) : tenLop.slice(),
      tenGoc: tenLop,
      vong: d.vong.ds.indexOf(+p.vong) >= 0 ? +p.vong : d.vong.md,
      loai: LOAI[p.loai] ? p.loai : 'honhop',
      x: x,
      cach: p.cach === 'qr' ? 'qr' : 'bang',
      secs: [15, 20, 30].indexOf(p.secs) >= 0 ? p.secs : 20,
      nguong: p.nguong === 70 ? 70 : 50
    };
    root.className = 'ot ot--' + d.id;
    root.setAttribute('aria-label', d.ten);
    $('#otTitle').innerHTML = '<span class="ot-title-ic" aria-hidden="true">' + d.logo + '</span>' + esc(d.ten);
    veNutLoa();
    root.hidden = false;
    document.documentElement.classList.add('ot-open');
    veSanh();
    return true;
  }
  function dong() {
    tatNhac();
    if (window.LopOnToQr) window.LopOnToQr.dong();
    if (!root) return;
    S.van++;
    S.pha = 'sanh';
    dongHoi(); dongHop();
    if (S.def && S.def.dong) S.def.dong(G);
    try { if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen(); } catch (e) { /* bo qua */ }
    root.hidden = true;
    $('#otMan').innerHTML = '';
    $('#otLop').innerHTML = '';
    document.documentElement.classList.remove('ot-open');
  }

  /* ---------------- API cho tung tro ---------------- */
  G = {
    VIEN: VIEN,
    esc: esc, zh: zh, tron: tron, sau: sau, snd: snd, tone: tone, noise: noise,
    $: function (s) { return $(s); }, $all: function (s) { return $all(s); },
    get cfg() { return S.cfg; },
    get man() { return $('#otMan'); },
    get van() { return S.van; },
    get pha() { return S.pha; },
    to: function (i) {
      var lop = (S.opt && Array.isArray(S.opt.to) ? S.opt.to[i] : null) || {}, md = TO_MD[i] || TO_MD[0];
      var ten = S.cfg && S.cfg.ten[i] ? S.cfg.ten[i] : (lop.ten || md.ten);
      return { ten: ten, mau: lop.mau || md.mau, hinh: lop.hinh || md.hinh };
    },
    kho: kho, tenDang: tenDang,
    hoi: hoi, hop: hop, dongHop: dongHop, toast: toast, bao: bao, veVong: veVong, ketThuc: ketThuc,
    dangHoi: function () { return !!S.hoi; },
    // ---- cho lop-onto-qr.js (thi qua ma QR) ----
    qr: null,                                   // dieu khien QR khi dang thi qua ma QR (null = choi tren bang)
    get def() { return S.def; },
    get nhan() { return (S.opt && S.opt.nhan) || ''; },
    cauTiep: cauTiep,
    vaoChoi: function () { S.van++; S.pha = 'choi'; nhacNen(S.def.nhac); },
    veSanh: function () { veSanh(); },
    dong: function () { dong(); }
  };

  window.LopOnTo = {
    dangKy: function (d) { DEF[d.id] = d; },
    co: function (id) { return !!DEF[id]; },
    mo: mo,
    dong: dong,
    _cauDangHoi: function () { return S.hoi ? S.hoi.c : null; } // cho kiem thu tu dong
  };
})();
