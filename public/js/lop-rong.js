/* Rong ngu — giu lop yen lang bang micro cua may chieu.
   Do do on (RMS cua AnalyserNode -> thang 0-100 da lam muot). KHONG ghi am, khong
   gui gi len mang: chi doc bien do song am tung khung hinh roi bo di.
   Quy tac thoi gian (xem ham buoc):
     · do on duoi nguong: rong ngu, dem "yen lang lien tuc", tong thoi gian, sao
       (1 sao / SAO_GIAY giay ngu ngon lien mach);
     · tieng on vuot nguong duoc cong don kieu "xo ro ri": tren nguong +dt, duoi nguong -dt.
       Tieng dong ngan (< ~1 giay) tu tan, khong lam rong thuc;
     · cong don >= CUA_GIAY (1 giay): rong cua minh, he mot mat, cau nhau (tam dung dem);
     · cong don >= THUC_GIAY (3 giay): rong thuc day phun khoi (vui, khong so),
       chuoi yen lang ve 0, phat tieng "Suyt!" (toi da 1 lan / SUYT_CACH giay);
     · rong da thuc: lop yen NGU_LAI_GIAY giay lien tuc thi rong ngu lai.
   Muc tieu buoi (tuy chon): tong thoi gian ngu ngon dat X phut thi bao thuong.
   Mo bang window.LopRong.mo() (toan man hinh) hoac mo({ nho: true }) (o nho o goc,
   noi tren tro choi khac va KHONG bat phim).                                   */
(function () {
  'use strict';

  var PREF_KEY = 'hyv_rong_pref';
  var MUC = { yen: 40, vua: 55, on: 70 };
  var MUC_TEN = { yen: '🤫 Yên lặng', vua: '🙂 Vừa', on: '🗣️ Ồn' };
  var MUC_TIEU = [0, 2, 5, 10];         // phut
  var GOC = ['br', 'bl', 'tl', 'tr'];
  var CUA_GIAY = 1.0, THUC_GIAY = 3.0, NGU_LAI_GIAY = 2.0, SAO_GIAY = 30;
  var SUYT_CACH = 10, GRU_CACH = 5;      // giay
  var NHIP_MS = 100;

  var S = {
    built: false, nho: false, goc: 'br', nguong: MUC.vua, sound: true, muc: 0,
    nghe: false, dangXin: false, loi: '', van: 0, level: 0, st: null,
    hen: 0, tLast: 0, boQuaDen: 0, suytT: -1e9, gruT: -1e9, noiHen: 0, hienTrang: '', vuaDat: false
  };
  var root, ac = null, stream = null, nguon = null, an = null, chim = null, buf = null, bufB = null, onBuf = null;

  function $(sel) { return root.querySelector(sel); }
  function $all(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function giamChuyenDong() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  function bayGio() { return window.performance && performance.now ? performance.now() : Date.now(); }
  function dongHo(giay) {
    giay = Math.floor(giay);
    var m = Math.floor(giay / 60), s = giay % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  /* ---------------- logic thuan (khong dung DOM, de kiem thu) ---------------- */
  /* @logic-start */
  // RMS (0..1) -> dBFS -> thang 0..100: -65 dBFS ~ 0 (phong rat yen), -15 dBFS ~ 100 (hét to)
  function mucTuRms(rms) {
    var db = 20 * Math.log(Math.max(rms, 1e-7)) / Math.LN10;
    var m = (db + 65) / 50 * 100;
    return m < 0 ? 0 : m > 100 ? 100 : m;
  }
  // Lam muot: len nhanh (0.08 s), xuong cham (0.45 s) — giong kim dong ho VU
  function lamMuot(cu, moi, dt) {
    var tau = moi > cu ? 0.08 : 0.45;
    return cu + (moi - cu) * (1 - Math.exp(-dt / tau));
  }
  function moiTrangThai() {
    return { trang: 'ngu', tren: 0, duoi: 0, chuoi: 0, kyLuc: 0, tong: 0, sao: 0, saoT: 0, dat: false };
  }
  // Mot nhip: tra ve danh sach su kien 'cua' | 'yen' | 'thuc' | 'ngu' | 'sao' | 'dat'
  function buoc(st, muc, nguong, dt, mucTieuGiay) {
    var ev = [];
    if (muc >= nguong) { st.tren = Math.min(THUC_GIAY + 1, st.tren + dt); st.duoi = 0; }
    else { st.tren = Math.max(0, st.tren - dt); st.duoi += dt; }
    if (st.trang === 'ngu') {
      if (st.tren >= CUA_GIAY) { st.trang = 'cua'; ev.push('cua'); }
    } else if (st.trang === 'cua') {
      if (st.tren >= THUC_GIAY) { st.trang = 'thuc'; st.chuoi = 0; st.saoT = 0; ev.push('thuc'); }
      else if (st.tren <= 0) { st.trang = 'ngu'; ev.push('yen'); }
    } else if (st.trang === 'thuc') {
      if (st.duoi >= NGU_LAI_GIAY) { st.trang = 'ngu'; st.tren = 0; ev.push('ngu'); }
    }
    if (st.trang === 'ngu') {
      st.chuoi += dt;
      st.tong += dt;
      st.saoT += dt;
      if (st.chuoi > st.kyLuc) st.kyLuc = st.chuoi;
      if (st.saoT >= SAO_GIAY) { st.saoT -= SAO_GIAY; st.sao++; ev.push('sao'); }
      if (mucTieuGiay > 0 && !st.dat && st.tong >= mucTieuGiay) { st.dat = true; ev.push('dat'); }
    }
    return ev;
  }
  /* @logic-end */

  /* ---------------- am thanh (khong phat khi tat tieng) ---------------- */
  function layAc() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ac) ac = new AC();
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }
  // Moi lan phat tieng thi bo qua micro mot luc, de rong khong tu nghe tieng cua chinh no
  function camTai(giay) { S.boQuaDen = Math.max(S.boQuaDen, bayGio() + giay * 1000); }
  function tone(freq, dur, type, vol, delay, endFreq) {
    if (!S.sound) return;
    var a = layAc();
    if (!a) return;
    var t0 = a.currentTime + (delay || 0);
    var o = a.createOscillator(), g = a.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(a.destination);
    o.start(t0); o.stop(t0 + dur + 0.03);
    camTai((delay || 0) + dur + 0.3);
  }
  function suyt() {
    // "Suyt" = tieng xi (nhieu trang qua bo loc thong cao), len xuong em diu
    if (!S.sound) return;
    var a = layAc();
    if (!a) return;
    if (!onBuf) {
      onBuf = a.createBuffer(1, a.sampleRate * 2, a.sampleRate);
      var d = onBuf.getChannelData(0);
      for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    var t0 = a.currentTime;
    var s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    s.buffer = onBuf;
    f.type = 'bandpass'; f.frequency.value = 3200; f.Q.value = 0.9;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.22, t0 + 0.18);
    g.gain.setValueAtTime(0.22, t0 + 0.9);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.4);
    s.connect(f); f.connect(g); g.connect(a.destination);
    s.start(t0); s.stop(t0 + 1.45);
    camTai(1.8);
  }
  function sndGru() { tone(150, 0.45, 'triangle', 0.12, 0, 110); tone(120, 0.5, 'triangle', 0.1, 0.35, 160); }
  function sndThuc() { tone(180, 0.35, 'sawtooth', 0.05, 0, 320); tone(320, 0.3, 'triangle', 0.1, 0.25, 140); }
  function sndNgap() { tone(520, 0.9, 'sine', 0.08, 0, 260); }
  function sndSao() { [1319, 1760, 2093].forEach(function (f, i) { tone(f, 0.2, 'sine', 0.06, i * 0.08); }); }
  function sndDat() { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, 0.25, 'triangle', 0.1, i * 0.12); }); tone(1319, 0.5, 'triangle', 0.09, 0.5); }

  /* ---------------- hinh rong ---------------- */
  function gai() {
    // Bom long vang doc theo lung (mep tren than hinh elip)
    var h = '';
    for (var a = -168; a <= -20; a += 16) {
      var r = a * Math.PI / 180;
      var x = 185 + 104 * Math.cos(r), y = 200 + 57 * Math.sin(r);
      h += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="11" fill="#ffc23d" stroke="#d98a1a" stroke-width="2.5"/>';
    }
    return h;
  }
  function rongSvg() {
    return '<svg class="rg-svg" viewBox="0 0 420 300" aria-hidden="true">' +
      // may
      '<g class="rg-may">' +
        '<ellipse cx="205" cy="268" rx="178" ry="26" fill="#d9e4fb"/>' +
        '<circle cx="78" cy="248" r="36" fill="#eef4ff"/><circle cx="140" cy="236" r="46" fill="#f6f9ff"/>' +
        '<circle cx="222" cy="240" r="44" fill="#f2f7ff"/><circle cx="300" cy="244" r="42" fill="#f6f9ff"/>' +
        '<circle cx="358" cy="254" r="30" fill="#eef4ff"/>' +
        '<ellipse cx="205" cy="276" rx="160" ry="16" fill="#cbd8f4"/>' +
      '</g>' +
      '<g class="rg-rong">' +
        '<g class="rg-tho">' +
          gai() +
          // chan sau
          '<ellipse cx="112" cy="238" rx="26" ry="16" fill="#e2553f" stroke="#a8321f" stroke-width="3"/>' +
          // than
          '<ellipse cx="185" cy="200" rx="105" ry="58" fill="#ef6a4c" stroke="#a8321f" stroke-width="4"/>' +
          '<ellipse cx="200" cy="228" rx="78" ry="24" fill="#ffd98a"/>' +
          '<path d="M140 214q6-7 12 0M165 218q6-7 12 0M190 220q6-7 12 0M215 219q6-7 12 0" fill="none" stroke="#f0b65a" stroke-width="3" stroke-linecap="round"/>' +
          '<path d="M120 172q10-8 20 0M150 160q10-8 20 0M182 156q10-8 20 0M214 160q10-8 20 0M140 190q10-8 20 0M174 184q10-8 20 0" fill="none" stroke="#f99a7c" stroke-width="4" stroke-linecap="round"/>' +
          // duoi quan ra truoc, chop long vang
          '<path d="M96 210C60 250 150 268 222 256C252 251 264 242 258 232" fill="none" stroke="#a8321f" stroke-width="30" stroke-linecap="round"/>' +
          '<path d="M96 210C60 250 150 268 222 256C252 251 264 242 258 232" fill="none" stroke="#ef6a4c" stroke-width="23" stroke-linecap="round"/>' +
          '<path class="rg-duoi" d="M256 234c4-14 14-22 26-22c-6 6-6 12-2 16c6-8 16-10 24-6c-8 4-10 10-8 16c6-2 12 0 16 4c-14 6-36 8-56-8z" fill="#ffc23d" stroke="#d98a1a" stroke-width="2.5" stroke-linejoin="round"/>' +
          // chan truoc (dau ke len)
          '<ellipse cx="290" cy="246" rx="26" ry="14" fill="#e2553f" stroke="#a8321f" stroke-width="3"/>' +
          '<ellipse cx="332" cy="244" rx="24" ry="13" fill="#e2553f" stroke="#a8321f" stroke-width="3"/>' +
          '<path d="M280 252v5M290 253v5M300 252v5M324 250v5M334 251v5M343 249v5" stroke="#fff3d6" stroke-width="3" stroke-linecap="round"/>' +
        '</g>' +
        '<g class="rg-dau">' +
          // bom long sau dau
          '<circle cx="262" cy="160" r="22" fill="#ffc23d" stroke="#d98a1a" stroke-width="2.5"/>' +
          '<circle cx="278" cy="134" r="20" fill="#ffc23d" stroke="#d98a1a" stroke-width="2.5"/>' +
          '<circle cx="262" cy="190" r="18" fill="#ffc23d" stroke="#d98a1a" stroke-width="2.5"/>' +
          // sung
          '<path d="M292 140C286 122 276 112 264 106" fill="none" stroke="#d98a1a" stroke-width="10" stroke-linecap="round"/>' +
          '<path d="M292 140C286 122 276 112 264 106" fill="none" stroke="#ffd56b" stroke-width="6" stroke-linecap="round"/>' +
          '<path d="M334 138C340 120 350 110 362 104" fill="none" stroke="#d98a1a" stroke-width="10" stroke-linecap="round"/>' +
          '<path d="M334 138C340 120 350 110 362 104" fill="none" stroke="#ffd56b" stroke-width="6" stroke-linecap="round"/>' +
          // dau
          '<ellipse cx="312" cy="178" rx="54" ry="45" fill="#ef6a4c" stroke="#a8321f" stroke-width="4"/>' +
          '<path d="M290 140q6-6 12 0M318 136q6-6 12 0" fill="none" stroke="#f99a7c" stroke-width="4" stroke-linecap="round"/>' +
          // mom
          '<ellipse cx="324" cy="204" rx="40" ry="25" fill="#ff8a68" stroke="#a8321f" stroke-width="3"/>' +
          '<ellipse cx="310" cy="198" rx="4.5" ry="3" fill="#a8321f"/><ellipse cx="338" cy="198" rx="4.5" ry="3" fill="#a8321f"/>' +
          '<path class="rg-cuoi" d="M312 214q12 8 24 0" fill="none" stroke="#a8321f" stroke-width="3" stroke-linecap="round"/>' +
          '<ellipse class="rg-mieng" cx="324" cy="216" rx="10" ry="6" fill="#8a2416"/>' +
          // ma hong
          '<circle cx="272" cy="192" r="9" fill="#ff9aa2" opacity=".7"/><circle cx="364" cy="188" r="8" fill="#ff9aa2" opacity=".7"/>' +
          // mat nham
          '<path class="rg-mat-nham rg-mt" d="M280 172q11 9 22 0" fill="none" stroke="#3a1a10" stroke-width="4" stroke-linecap="round"/>' +
          '<path class="rg-mat-nham rg-mp" d="M324 170q11 9 22 0" fill="none" stroke="#3a1a10" stroke-width="4" stroke-linecap="round"/>' +
          // mat mo
          '<g class="rg-mat-mo rg-mt"><circle cx="291" cy="168" r="11" fill="#fff" stroke="#3a1a10" stroke-width="2.5"/><circle cx="293" cy="169" r="5.5" fill="#2a1408"/><circle cx="295" cy="166" r="2" fill="#fff"/></g>' +
          '<g class="rg-mat-mo rg-mp"><circle cx="335" cy="166" r="11" fill="#fff" stroke="#3a1a10" stroke-width="2.5"/><circle cx="333" cy="167" r="5.5" fill="#2a1408"/><circle cx="335" cy="164" r="2" fill="#fff"/></g>' +
          // long may cau co
          '<path class="rg-may-mat" d="M278 152l24 7M348 150l-24 7" fill="none" stroke="#3a1a10" stroke-width="4.5" stroke-linecap="round"/>' +
          // rau
          '<path class="rg-rau" d="M296 210C270 214 252 226 246 246" fill="none" stroke="#ffc23d" stroke-width="3.5" stroke-linecap="round"/>' +
          '<path class="rg-rau" d="M352 206C380 206 396 196 404 176" fill="none" stroke="#ffc23d" stroke-width="3.5" stroke-linecap="round"/>' +
        '</g>' +
        // khoi phun ra tu mui
        '<g class="rg-khoi">' +
          '<circle class="k1" cx="352" cy="190" r="10" fill="#e9e6f2"/>' +
          '<circle class="k2" cx="358" cy="184" r="13" fill="#f2f0f8"/>' +
          '<circle class="k3" cx="300" cy="192" r="9" fill="#e9e6f2"/>' +
        '</g>' +
        '<g class="rg-z" font-family="Be Vietnam Pro, sans-serif" font-weight="800" fill="#ffffff">' +
          '<text class="z1" x="366" y="128" font-size="22">Z</text>' +
          '<text class="z2" x="384" y="100" font-size="28">z</text>' +
          '<text class="z3" x="400" y="70" font-size="34">z</text>' +
        '</g>' +
      '</g>' +
    '</svg>';
  }

  /* ---------------- dung khung ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopRong';
    root.className = 'rg rg--ngu';
    root.hidden = true;
    var muc = '';
    Object.keys(MUC).forEach(function (k) {
      muc += '<button type="button" class="rg-opt" data-muc="' + k + '">' + MUC_TEN[k] + '</button>';
    });
    var tieu = MUC_TIEU.map(function (p) {
      return '<button type="button" class="rg-opt" data-tieu="' + p + '">' + (p ? p + ' phút' : 'Không') + '</button>';
    }).join('');
    root.innerHTML =
      '<div class="rg-nen" aria-hidden="true"><span class="rg-sao-troi"></span><span class="rg-trang"></span></div>' +
      '<header class="rg-bar">' +
        '<b class="rg-title">🐉 Rồng ngủ</b>' +
        '<span class="rg-rieng">🔒 Chỉ đo độ ồn ngay trên máy này — không ghi âm, không gửi đi đâu.</span>' +
        '<span class="rg-bar-gap"></span>' +
        '<button type="button" class="rg-btn rg-ic" id="rgSound"></button>' +
        '<button type="button" class="rg-btn" id="rgNho" title="Thu nhỏ vào góc màn hình (N)">🗗 Thu nhỏ</button>' +
        '<button type="button" class="rg-btn rg-ic" id="rgFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="rg-btn" id="rgClose">✕ Đóng</button>' +
      '</header>' +
      '<main class="rg-man">' +
        '<section class="rg-canh">' +
          '<div class="rg-hinh">' + rongSvg() + '<p class="rg-noi" id="rgNoi" aria-live="polite"></p></div>' +
          '<div class="rg-sao" id="rgSao" aria-label="Sao"></div>' +
        '</section>' +
        '<section class="rg-bang">' +
          '<div class="rg-dem">' +
            '<span class="rg-dem-nhan">Yên lặng liên tục</span>' +
            '<b class="rg-dem-so" id="rgChuoi">0:00</b>' +
            '<span class="rg-dem-phu">Tổng <b id="rgTong">0:00</b> · Kỷ lục <b id="rgKyLuc">0:00</b> · ⭐ <b id="rgSoSao">0</b></span>' +
            '<span class="rg-thanh rg-thanh-sao" title="Đến ngôi sao tiếp theo"><i id="rgSaoTiep"></i></span>' +
          '</div>' +
          '<div class="rg-do">' +
            '<div class="rg-do-dau"><span>Độ ồn</span><b id="rgMucSo">–</b></div>' +
            '<div class="rg-do-ray"><i class="rg-do-muc" id="rgMuc"></i><span class="rg-do-nguong" id="rgNguongVach"><em>ngưỡng</em></span></div>' +
            '<div class="rg-chon" role="group" aria-label="Mức ồn cho phép">' + muc + '</div>' +
            '<label class="rg-truot"><span>Ngưỡng</span><input type="range" min="15" max="90" step="1" id="rgNguong" aria-label="Ngưỡng ồn"><b id="rgNguongSo"></b></label>' +
          '</div>' +
          '<div class="rg-tieu">' +
            '<div class="rg-do-dau"><span>Mục tiêu: tổng thời gian ngủ ngon</span><b id="rgTieuChu"></b></div>' +
            '<div class="rg-chon" role="group" aria-label="Mục tiêu">' + tieu + '</div>' +
            '<span class="rg-thanh" id="rgTieuThanh"><i id="rgTieuMuc"></i></span>' +
          '</div>' +
          '<div class="rg-mic" id="rgMic"></div>' +
          '<div class="rg-dk">' +
            '<button type="button" class="rg-go" id="rgNghe"></button>' +
            '<button type="button" class="rg-btn rg-btn-sang" id="rgLai" title="Đặt lại đồng hồ và sao">↺ Đặt lại</button>' +
          '</div>' +
        '</section>' +
      '</main>' +
      // o nho o goc
      '<div class="rg-mini">' +
        '<div class="rg-mini-hinh">' + rongSvg() + '</div>' +
        '<div class="rg-mini-tt">' +
          '<b class="rg-mini-so" id="rgMiniChuoi">0:00</b>' +
          '<span class="rg-mini-sao">⭐ <b id="rgMiniSao">0</b></span>' +
          '<span class="rg-do-ray rg-mini-ray"><i class="rg-do-muc" id="rgMiniMuc"></i><span class="rg-do-nguong" id="rgMiniVach"></span></span>' +
          '<span class="rg-mini-loi" id="rgMiniLoi"></span>' +
        '</div>' +
        '<div class="rg-mini-nut">' +
          '<button type="button" class="rg-mn" id="rgMiniTo" title="Phóng to">⤢</button>' +
          '<button type="button" class="rg-mn" id="rgMiniNghe" title="Tạm dừng / nghe tiếp"></button>' +
          '<button type="button" class="rg-mn" id="rgMiniGoc" title="Chuyển sang góc khác">⇱</button>' +
          '<button type="button" class="rg-mn" id="rgMiniDong" title="Tắt Rồng ngủ">✕</button>' +
        '</div>' +
      '</div>' +
      '<div class="rg-thuong" id="rgThuong" hidden></div>';
    document.body.appendChild(root);

    $('#rgSound').addEventListener('click', function () { S.sound = !S.sound; luuPref(); veNut(); if (S.sound) tone(880, 0.12, 'triangle', 0.1); });
    $('#rgNho').addEventListener('click', function () { doiCheDo(true); });
    $('#rgFull').addEventListener('click', toanManHinh);
    $('#rgClose').addEventListener('click', dong);
    $('#rgNghe').addEventListener('click', batTat);
    $('#rgLai').addEventListener('click', datLai);
    $all('[data-muc]').forEach(function (b) {
      b.addEventListener('click', function () { datNguong(MUC[b.getAttribute('data-muc')]); });
    });
    $all('[data-tieu]').forEach(function (b) {
      b.addEventListener('click', function () {
        S.muc = +b.getAttribute('data-tieu');
        S.st.dat = S.muc > 0 && S.st.tong >= S.muc * 60;
        luuPref(); veNut(); veSo(true);
      });
    });
    $('#rgNguong').addEventListener('input', function () { datNguong(+this.value); });
    $('#rgMic').addEventListener('click', function (e) { if (e.target.closest('[data-act="thu"]')) batNghe(); });
    $('#rgThuong').addEventListener('click', function (e) { if (e.target.closest('[data-act="dongthuong"]')) dongThuong(); });
    // O nho: bam xong thi tra focus ve trang, de phim Space cua tro choi phia sau khong bam nham nut
    function nutNho(id, fn) {
      $(id).addEventListener('click', function (e) { fn(); if (e.detail) this.blur(); });
    }
    nutNho('#rgMiniTo', function () { doiCheDo(false); });
    nutNho('#rgMiniNghe', batTat);
    nutNho('#rgMiniGoc', function () {
      S.goc = GOC[(GOC.indexOf(S.goc) + 1) % GOC.length];
      luuPref(); veGoc();
    });
    nutNho('#rgMiniDong', dong);
    window.addEventListener('keydown', phim, true);
    window.addEventListener('keyup', phimNha, true);
    document.addEventListener('fullscreenchange', ganVaoFull);
    S.built = true;
  }

  function luuPref() { ghiLS(PREF_KEY, { nguong: S.nguong, sound: S.sound, muc: S.muc, goc: S.goc }); }

  function datNguong(v) {
    S.nguong = Math.max(15, Math.min(90, Math.round(v)));
    luuPref();
    veNut();
  }

  function veNut() {
    var s = $('#rgSound');
    s.textContent = S.sound ? '🔊' : '🔇';
    s.title = S.sound ? 'Đang bật tiếng “Suỵt!” — bấm để tắt (M)' : 'Đang tắt tiếng — bấm để bật (M)';
    s.classList.toggle('is-off', !S.sound);
    $all('[data-muc]').forEach(function (b) { b.classList.toggle('is-on', MUC[b.getAttribute('data-muc')] === S.nguong); });
    $all('[data-tieu]').forEach(function (b) { b.classList.toggle('is-on', +b.getAttribute('data-tieu') === S.muc); });
    $('#rgNguong').value = S.nguong;
    $('#rgNguongSo').textContent = S.nguong;
    $('#rgNguongVach').style.left = S.nguong + '%';
    $('#rgMiniVach').style.left = S.nguong + '%';
    $('#rgTieuThanh').hidden = !S.muc;
    var nghe = S.nghe || S.dangXin;
    $('#rgNghe').innerHTML = nghe ? '⏸ Tạm dừng <kbd>Space</kbd>' : '▶ Bắt đầu nghe <kbd>Space</kbd>';
    $('#rgMiniNghe').textContent = nghe ? '⏸' : '▶';
    $('#rgMiniNghe').title = nghe ? 'Tạm dừng (tắt micro)' : 'Nghe tiếp';
    root.classList.toggle('is-tat', !S.nghe);
  }
  function veGoc() {
    GOC.forEach(function (g) { root.classList.toggle('is-goc-' + g, S.goc === g); });
  }

  /* ---------------- micro ---------------- */
  var LOI = {
    chan: '🔒 Micro đang bị chặn. Bấm biểu tượng ổ khoá (hoặc 🎤) cạnh thanh địa chỉ → chọn “Cho phép” micro, rồi bấm “Thử lại”.',
    khong: '🎤 Không tìm thấy micro trên máy này. Hãy cắm tai nghe có micro hoặc micro rời, rồi bấm “Thử lại”.',
    ban: '🎤 Micro đang được ứng dụng khác dùng (Zoom, Meet…). Tắt ứng dụng đó rồi bấm “Thử lại”.',
    hotro: 'Trình duyệt này không cho dùng micro. Hãy mở trang bằng Chrome hoặc Edge bản mới (địa chỉ https).',
    mat: '🎤 Micro vừa bị ngắt. Kiểm tra dây cắm rồi bấm “Thử lại”.',
    khac: 'Chưa bật được micro. Bấm “Thử lại” nhé.'
  };
  function loaiLoi(ten) {
    if (ten === 'NotAllowedError' || ten === 'PermissionDeniedError' || ten === 'SecurityError') return 'chan';
    if (ten === 'NotFoundError' || ten === 'DevicesNotFoundError' || ten === 'OverconstrainedError') return 'khong';
    if (ten === 'NotReadableError' || ten === 'TrackStartError' || ten === 'AbortError') return 'ban';
    return 'khac';
  }
  function veMic() {
    var box = $('#rgMic');
    if (S.loi) {
      box.className = 'rg-mic is-loi';
      box.innerHTML = '<p>' + LOI[S.loi] + '</p>' + (S.loi === 'hotro' ? '' : '<button type="button" class="rg-btn rg-btn-sang" data-act="thu">↻ Thử lại</button>');
    } else if (S.dangXin) {
      box.className = 'rg-mic';
      box.innerHTML = '<p>🎤 Đang xin quyền dùng micro… Nếu trình duyệt hỏi, hãy bấm <b>Cho phép</b>.</p>';
    } else if (S.nghe) {
      box.className = 'rg-mic is-on';
      box.innerHTML = '<p><span class="rg-cham"></span> Đang nghe độ ồn của lớp. Tạm dừng là micro tắt hẳn.</p>';
    } else {
      box.className = 'rg-mic';
      box.innerHTML = '<p>⏸ Đang tạm dừng — micro đã tắt.</p>';
    }
    $('#rgMiniLoi').textContent = S.loi ? '⚠ Micro chưa bật' : S.dangXin ? 'Đang xin quyền micro…' : !S.nghe ? '⏸ Tạm dừng' : '';
    veNut();
  }

  function batNghe() {
    if (S.nghe || S.dangXin) return;
    var md = navigator.mediaDevices;
    if (!md || !md.getUserMedia) { S.loi = 'hotro'; veMic(); return; }
    S.loi = '';
    S.dangXin = true;
    veMic();
    var ve = S.van;
    md.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }, video: false })
      .then(function (st) {
        S.dangXin = false;
        if (ve !== S.van || !root || root.hidden) {
          // Da dong / tam dung trong luc cho quyen: tat ngay
          st.getTracks().forEach(function (t) { t.stop(); });
          veMic();
          return;
        }
        var a = layAc();
        if (!a) { st.getTracks().forEach(function (t) { t.stop(); }); S.loi = 'hotro'; veMic(); return; }
        stream = st;
        nguon = a.createMediaStreamSource(st);
        an = a.createAnalyser();
        an.fftSize = 1024;
        an.smoothingTimeConstant = 0;
        // Noi qua mot nut cam (gain 0) de trinh duyet chiu xu ly do thi, khong phat tieng ra loa
        chim = a.createGain();
        chim.gain.value = 0;
        nguon.connect(an); an.connect(chim); chim.connect(a.destination);
        buf = an.getFloatTimeDomainData ? new Float32Array(an.fftSize) : null;
        bufB = buf ? null : new Uint8Array(an.fftSize);
        st.getAudioTracks().forEach(function (t) {
          t.onended = function () { if (stream === st) { tatNghe(); S.loi = 'mat'; veMic(); } };
        });
        S.nghe = true;
        S.tLast = 0;
        S.hen = setInterval(nhip, NHIP_MS);
        veMic();
      })
      .catch(function (e) {
        S.dangXin = false;
        if (ve !== S.van) { veMic(); return; }
        S.loi = loaiLoi(e && e.name);
        veMic();
      });
  }

  function tatNghe() {
    S.van++;
    S.dangXin = false;
    if (S.hen) clearInterval(S.hen);
    S.hen = 0;
    try { if (nguon) nguon.disconnect(); if (an) an.disconnect(); if (chim) chim.disconnect(); } catch (e) { /* bo qua */ }
    if (stream) stream.getTracks().forEach(function (t) { t.onended = null; t.stop(); });
    stream = null; nguon = null; an = null; chim = null;
    S.nghe = false;
    S.level = 0;
  }

  function batTat() {
    if (S.nghe || S.dangXin) { tatNghe(); veMic(); veMuc(); }
    else batNghe();
  }

  function rms() {
    var s = 0, i;
    if (buf) {
      an.getFloatTimeDomainData(buf);
      for (i = 0; i < buf.length; i++) s += buf[i] * buf[i];
      return Math.sqrt(s / buf.length);
    }
    an.getByteTimeDomainData(bufB);
    for (i = 0; i < bufB.length; i++) { var v = (bufB[i] - 128) / 128; s += v * v; }
    return Math.sqrt(s / bufB.length);
  }

  // Nhip 100 ms: dung setInterval (khong dung rAF) de van chay khi cua so bi che mot phan
  function nhip() {
    if (!S.nghe || !an) return;
    var now = bayGio();
    var dt = S.tLast ? Math.min(1.5, (now - S.tLast) / 1000) : NHIP_MS / 1000;
    S.tLast = now;
    S.level = lamMuot(S.level, mucTuRms(rms()), dt);
    // Trong luc chinh rong dang phat tieng (micro nghe lai tieng loa):
    //  · dang ngu  -> coi nhu lop yen (tieng sao / nhac thuong khong danh thuc rong);
    //  · dang cua  -> van tinh binh thuong (tieng "hum" ngan, khong du 3 giay);
    //  · dang thuc -> dung dong ho, de tieng "Suyt" khong bi tinh la lop da yen.
    var ev;
    if (now >= S.boQuaDen || S.st.trang === 'cua') ev = buoc(S.st, S.level, S.nguong, dt, S.muc * 60);
    else if (S.st.trang === 'ngu') ev = buoc(S.st, Math.min(S.level, S.nguong - 1), S.nguong, dt, S.muc * 60);
    else ev = [];
    ev.forEach(suKien);
    if (S.st.trang === 'thuc' && S.level >= S.nguong && now - S.suytT > SUYT_CACH * 1000) {
      S.suytT = now;
      suyt();
      noi('Suỵt! 🤫');
    }
    veMuc();
    veSo(false);
  }

  function suKien(e) {
    var now = bayGio();
    if (e === 'cua') {
      noi(['Hừm…? 🤨', 'Ai ồn thế nhỉ…', 'Ư… ừm… 😪'][Math.floor(Math.random() * 3)], 1800);
      if (now - S.gruT > GRU_CACH * 1000) { S.gruT = now; sndGru(); }
    } else if (e === 'thuc') {
      noi(['Ồn quá đi! Grừ… 😤', 'Ai đánh thức ta đấy! 💨', 'Ồn quá, không ngủ được! 😤'][Math.floor(Math.random() * 3)], 2600);
      sndThuc();
      if (now - S.suytT > SUYT_CACH * 1000) {
        S.suytT = now;
        setTimeout(function () { if (S.nghe) suyt(); }, 450);
      }
    } else if (e === 'yen') {
      noi('Zzz… 😌', 1200);
    } else if (e === 'ngu') {
      noi('Oáp… ngủ tiếp thôi 😴', 2200);
      sndNgap();
    } else if (e === 'sao') {
      sndSao();
      var ds = $('#rgSao');
      ds.classList.remove('is-moi');
      void ds.offsetWidth;
      ds.classList.add('is-moi');
    } else if (e === 'dat') {
      sndDat();
      moThuong();
    }
  }

  function noi(chu, ms) {
    var n = $('#rgNoi');
    n.textContent = chu;
    n.classList.remove('is-hien');
    void n.offsetWidth;
    n.classList.add('is-hien');
    clearTimeout(S.noiHen);
    S.noiHen = setTimeout(function () { n.classList.remove('is-hien'); }, ms || 2000);
  }

  /* ---------------- ve ---------------- */
  function veMuc() {
    var lv = S.nghe ? S.level : 0;
    var p = Math.round(lv);
    var cls = !S.nghe ? '' : lv >= S.nguong ? 'is-on' : lv >= S.nguong - 8 ? 'is-gan' : 'is-yen';
    ['#rgMuc', '#rgMiniMuc'].forEach(function (id) {
      var el = $(id);
      el.style.width = p + '%';
      el.className = 'rg-do-muc ' + cls;
    });
    $('#rgMucSo').textContent = S.nghe ? p : '–';
    var tr = S.nghe ? S.st.trang : 'ngu';
    if (tr !== S.hienTrang) {
      root.classList.remove('rg--ngu', 'rg--cua', 'rg--thuc');
      root.classList.add('rg--' + tr);
      S.hienTrang = tr;
    }
  }
  function veSo(tatCa) {
    var st = S.st;
    var chuoi = dongHo(st.chuoi);
    if (tatCa || $('#rgChuoi').textContent !== chuoi) {
      $('#rgChuoi').textContent = chuoi;
      $('#rgMiniChuoi').textContent = chuoi;
      $('#rgTong').textContent = dongHo(st.tong);
      $('#rgKyLuc').textContent = dongHo(st.kyLuc);
    }
    if (tatCa || $('#rgSoSao').textContent !== String(st.sao)) {
      $('#rgSoSao').textContent = st.sao;
      $('#rgMiniSao').textContent = st.sao;
      var h = '';
      for (var i = 0; i < Math.min(st.sao, 20); i++) h += '<span>⭐</span>';
      if (st.sao > 20) h += '<b>+' + (st.sao - 20) + '</b>';
      $('#rgSao').innerHTML = h || '<small>Mỗi ' + SAO_GIAY + ' giây rồng ngủ ngon = 1 ⭐</small>';
    }
    $('#rgSaoTiep').style.width = Math.min(100, st.saoT / SAO_GIAY * 100).toFixed(1) + '%';
    if (S.muc) {
      var muc = S.muc * 60;
      $('#rgTieuMuc').style.width = Math.min(100, st.tong / muc * 100).toFixed(1) + '%';
      $('#rgTieuChu').textContent = st.dat ? '🎉 Đã đạt!' : dongHo(Math.min(st.tong, muc)) + ' / ' + S.muc + ':00';
    } else {
      $('#rgTieuChu').textContent = 'Không đặt';
    }
  }

  function moThuong() {
    var box = $('#rgThuong');
    var sao = '';
    if (!giamChuyenDong()) {
      for (var i = 0; i < 26; i++) {
        sao += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;animation-delay:' + (Math.random() * 1.2).toFixed(2) + 's">' + (i % 3 ? '⭐' : '✨') + '</i>';
      }
    }
    box.innerHTML =
      '<div class="rg-thuong-sao" aria-hidden="true">' + sao + '</div>' +
      '<div class="rg-thuong-the" role="status">' +
        '<div class="rg-thuong-ic" aria-hidden="true">🐉🎉</div>' +
        '<p class="rg-thuong-tieu">Rồng đã ngủ ngon đủ ' + S.muc + ' phút!</p>' +
        '<p class="rg-thuong-mo">Cả lớp giỏi quá — nhận thưởng thôi! 🎁</p>' +
        '<button type="button" class="rg-go" data-act="dongthuong">Tuyệt vời!</button>' +
      '</div>';
    box.hidden = false;
    clearTimeout(S.thuongHen);
    S.thuongHen = setTimeout(dongThuong, S.nho ? 6000 : 15000);
  }
  function dongThuong() {
    var box = $('#rgThuong');
    if (!box) return;
    box.hidden = true;
    box.innerHTML = '';
  }

  function datLai() {
    S.st = moiTrangThai();
    S.hienTrang = '';
    dongThuong();
    veMuc();
    veSo(true);
  }

  /* ---------------- che do, phim tat, mo / dong ---------------- */
  function toanManHinh() {
    if (S.nho) return;
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* bo qua */ });
  }
  // O nho phai nam trong phan tu dang toan man hinh (vd tro choi khac) thi moi nhin thay duoc
  function ganVaoFull() {
    if (!root || root.hidden) return;
    var fe = document.fullscreenElement;
    var cha = S.nho && fe && fe !== root && !root.contains(fe) ? fe : document.body;
    if (root.parentNode !== cha) cha.appendChild(root);
  }

  function doiCheDo(nho) {
    S.nho = !!nho;
    var fe = document.fullscreenElement;
    // Thu nho khi rong dang toan man hinh, hoac phong to khi tro choi khac dang toan man hinh: thoat toan man hinh truoc
    if (fe && document.exitFullscreen && (S.nho ? fe === root : fe !== root)) document.exitFullscreen();
    root.classList.toggle('is-nho', S.nho);
    root.setAttribute('role', S.nho ? 'complementary' : 'dialog');
    root.setAttribute('aria-label', 'Rồng ngủ — đo độ ồn của lớp');
    document.documentElement.classList.toggle('rg-open', !S.nho);
    veGoc();
    ganVaoFull();
    if (!S.nho) {
      var b = $('#rgNghe');
      if (b) b.focus();
    }
  }

  function phim(e) {
    // O nho khong bat phim nao — tro choi phia sau van dung ban phim binh thuong
    if (!root || root.hidden || S.nho) return;
    var trongO = e.target && /input|select|textarea/i.test(e.target.tagName);
    if (e.key === 'Escape') {
      e.stopImmediatePropagation();
      if (!$('#rgThuong').hidden) dongThuong();
      else if (!document.fullscreenElement) dong();
      return;
    }
    if (trongO) return;
    e.stopImmediatePropagation();
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = (e.key || '').toLowerCase();
    if (e.code === 'Space' || e.key === 'Enter') {
      e.preventDefault();
      if (!$('#rgThuong').hidden) dongThuong();
      else if (e.code === 'Space') batTat();
      else if (e.target && e.target.tagName === 'BUTTON') e.target.click();
      return;
    }
    if (k === 'f') toanManHinh();
    else if (k === 'm') $('#rgSound').click();
    else if (k === 'n') doiCheDo(true);
    else if (k === '1') datNguong(MUC.yen);
    else if (k === '2') datNguong(MUC.vua);
    else if (k === '3') datNguong(MUC.on);
  }
  function phimNha(e) {
    if (!root || root.hidden || S.nho) return;
    if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
    if (e.code === 'Space') { e.preventDefault(); e.stopImmediatePropagation(); }
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    var dangMo = !root.hidden;
    if (!dangMo) {
      var p = docLS(PREF_KEY, {});
      S.nguong = p.nguong >= 15 && p.nguong <= 90 ? +p.nguong : MUC.vua;
      S.sound = p.sound !== false;
      S.muc = MUC_TIEU.indexOf(+p.muc) >= 0 ? +p.muc : 0;
      S.goc = GOC.indexOf(p.goc) >= 0 ? p.goc : 'br';
      S.st = moiTrangThai();
      S.hienTrang = '';
      S.loi = '';
      S.suytT = -1e9;
      S.gruT = -1e9;
      root.hidden = false;
    }
    doiCheDo(!!opt.nho);
    veNut();
    veMuc();
    veSo(true);
    veMic();
    // Chi tu bat micro khi vua mo; dang mo ma chi doi che do thi giu nguyen (dang tam dung thi van tam dung)
    if (!dangMo) batNghe();
  }
  function dong() {
    if (!root) return;
    tatNghe();
    clearTimeout(S.noiHen);
    clearTimeout(S.thuongHen);
    if (document.fullscreenElement === root && document.exitFullscreen) document.exitFullscreen();
    dongThuong();
    root.hidden = true;
    if (root.parentNode !== document.body) document.body.appendChild(root);
    document.documentElement.classList.remove('rg-open');
  }

  window.LopRong = {
    mo: mo,
    dong: dong,
    // Chuyen qua lai giua toan man hinh va o nho (neu dang mo)
    doiCheDo: function (nho) { if (root && !root.hidden) doiCheDo(nho == null ? !S.nho : nho); },
    dangMo: function () { return !!(root && !root.hidden); }
  };
})();
