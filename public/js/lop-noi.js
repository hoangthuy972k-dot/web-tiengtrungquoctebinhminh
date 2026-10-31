/* Kiem tra noi — nghe & phan xa (Che do lop hoc).
   May DOC cau hoi (giong Google /api/tts, loi thi giong trinh duyet), chu an di; doc xong dong ho
   phan xa chay, hoc sinh tra loi bang loi; het gio (hoac co bam) thi hien cau hoi + cau tra loi mau,
   may doc cau mau, co cham dung / sai.
   Dang cau: hd hoi – dap (cau hoi trong bai khoa) · bk hoi ve bai khoa · nn nghe roi noi nghia ·
   nl nghe roi nhac lai · vt nhin cau Viet noi tieng Trung.
   On xoan oc: kiem tra bai N thi uu tien cau cua bai N CO dung lai tu bai 1..N-1, roi cau khac cua
   bai N, roi cau cua cac bai truoc (on lai).
   Mo: window.LopNoi.mo({ nhan, bai: [{ n, chon, noi: [...], dich: [...] }] }) */
(function () {
  'use strict';

  var PREF_KEY = 'hyv_kn_pref';
  var LOAI = {
    hd: { ic: '💬', ten: 'Hỏi – đáp', lenh: 'Nghe câu hỏi rồi trả lời bằng tiếng Trung' },
    bk: { ic: '📖', ten: 'Hỏi về bài khoá', lenh: 'Nghe câu hỏi về bài khoá rồi trả lời' },
    nn: { ic: '🎧', ten: 'Nghe – nói nghĩa', lenh: 'Nghe rồi nói nghĩa tiếng Việt' },
    nl: { ic: '🔁', ten: 'Nghe – nhắc lại', lenh: 'Nghe rồi nhắc lại thật chuẩn' },
    vt: { ic: '🗣️', ten: 'Nói câu tiếng Trung', lenh: 'Nói câu này bằng tiếng Trung' }
  };
  var LOAI_DS = ['hd', 'bk', 'nn', 'nl', 'vt'];
  var VONG = 2 * Math.PI * 54;

  var S = {
    built: false, nhan: '', bai: [], sound: true,
    loai: ['hd', 'bk', 'nn', 'nl'], so: 10, giay: 8, lan: 1, cham: 0,
    pha: 'sanh', ds: [], i: 0, kq: [], hien: false, hen: [], tg: null, audio: null, maxN: 0
  };
  var root;

  function $(s) { return root.querySelector(s); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function tron(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function han(s) { return (String(s || '').match(/[㐀-鿿]/g) || []).length; }
  function sau(ms, fn) { var t = setTimeout(fn, ms); S.hen.push(t); return t; }
  function huyHen() { S.hen.forEach(clearTimeout); S.hen = []; if (S.tg) { clearInterval(S.tg); S.tg = null; } }

  /* ---------------- am thanh ---------------- */
  var ac = null;
  function tone(f, dai, kieu, to, tre) {
    if (!S.sound) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ac = ac || new AC();
      if (ac.state === 'suspended') ac.resume();
      var t0 = ac.currentTime + (tre || 0), o = ac.createOscillator(), g = ac.createGain();
      o.type = kieu || 'sine'; o.frequency.setValueAtTime(f, t0);
      g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(to || 0.15, t0 + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dai);
      o.connect(g); g.connect(ac.destination); o.start(t0); o.stop(t0 + dai + 0.03);
    } catch (e) { /* bo qua */ }
  }
  function sndTick(gap) { tone(gap ? 1320 : 880, 0.07, 'square', gap ? 0.07 : 0.04); }
  function sndHet() { tone(440, 0.25, 'square', 0.08); tone(330, 0.4, 'square', 0.08, 0.25); }
  function sndDung() { [523, 659, 784].forEach(function (f, i) { tone(f, 0.2, 'triangle', 0.18, i * 0.09); }); }
  function sndSai() { tone(240, 0.3, 'sawtooth', 0.08, 0, 180); }
  function sndBat() { tone(660, 0.1, 'triangle', 0.15); tone(990, 0.16, 'triangle', 0.15, 0.1); }

  // Doc tieng Trung: giong Google qua /api/tts (co bo nho dem), loi thi giong trinh duyet.
  // Goi xong(cb) khi doc het de bat dau tinh gio.
  var dem = {}, ttsHong = false; // may chu chua co giong Google (503) thi dung giong trinh duyet ca buoi
  function imLang() {
    if (S.audio) { try { S.audio.pause(); } catch (e) { /* */ } S.audio = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }
  function docMay(text, cb) {
    var xong = false;
    function het() { if (!xong) { xong = true; if (cb) cb(); } }
    if (!S.sound) { sau(400, het); return; }
    sau(Math.max(4000, han(text) * 650 + 2500), het); // phong khi am thanh khong bao ket thuc
    function trinhDuyet() {
      if (!window.speechSynthesis) { het(); return; }
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN'; u.rate = 0.85;
      u.onend = het; u.onerror = het;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
    function phat(b64) {
      var a = new Audio('data:audio/mp3;base64,' + b64);
      S.audio = a;
      a.onended = het; a.onerror = trinhDuyet;
      var p = a.play();
      if (p && p.catch) p.catch(trinhDuyet);
    }
    if (dem[text]) { phat(dem[text]); return; }
    if (ttsHong) { trinhDuyet(); return; }
    fetch('/api/tts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: text.slice(0, 200) }) })
      .then(function (r) { if (r.status === 503) ttsHong = true; return r.ok ? r.json() : Promise.reject(); })
      .then(function (d) { if (!d.audioContent) throw new Error(); dem[text] = d.audioContent; phat(d.audioContent); })
      .catch(trinhDuyet);
  }
  // Doc 1 hoac 2 lan (nghi 0,8 giay giua hai lan)
  function docCau(text, cb) {
    var lan = S.lan;
    (function mot() {
      docMay(text, function () {
        lan--;
        if (lan > 0) sau(800, mot); else if (cb) cb();
      });
    })();
  }

  /* ---------------- chon cau ---------------- */
  // Moi cau: { k, nghe (doc to), de (chu tren man khi hien), dap, dapVn, phu, cu, n, chon }
  function taoDs() {
    var nhom = [[], [], []], thay = {};
    function them(x, b, d) {
      var key = x.k + '|' + x.nghe + '|' + x.de;
      if (thay[key]) return;
      thay[key] = 1;
      x.n = b.n; x.chon = b.chon; x.cu = d.cu || [];
      nhom[!b.chon ? 2 : x.cu.length ? 0 : 1].push(x);
    }
    S.bai.forEach(function (b) {
      (b.noi || []).forEach(function (d) {
        if (S.loai.indexOf(d.k) < 0) return;
        them({ k: d.k, nghe: d.q, de: d.q, deVn: d.qvn || '', dap: d.a, dapVn: d.avn || '' }, b, d);
      });
      (b.dich || []).forEach(function (d) {
        var dai = han(d.zh);
        if (S.loai.indexOf('nn') >= 0 && dai <= 14) them({ k: 'nn', nghe: d.zh, de: d.zh, dap: d.vn, dapVn: '' }, b, d);
        if (S.loai.indexOf('nl') >= 0 && dai <= 12) them({ k: 'nl', nghe: d.zh, de: d.zh, dap: d.zh, dapVn: d.vn }, b, d);
        if (S.loai.indexOf('vt') >= 0 && dai <= 16) them({ k: 'vt', nghe: '', de: d.vn, dap: d.zh, dapVn: d.vn }, b, d);
      });
    });
    // Lay dan tu nhom uu tien, xen ke cac dang cho deu tay
    // Mot cau chi xuat hien mot lan moi luot (khong hoi ca "noi nghia" lan "nhac lai" cung cau)
    var out = [], can = S.so, daDung = {};
    function lay(ds) {
      while (ds.length) {
        var x = ds.shift(), k = (x.k === 'vt' ? x.dap : x.nghe) || x.de;
        if (!daDung[k]) { daDung[k] = 1; return x; }
      }
      return null;
    }
    var theo = nhom.map(function (g) {
      var t = {};
      tron(g).forEach(function (x) { (t[x.k] = t[x.k] || []).push(x); });
      return t;
    });
    function rut(ti, toiDa) {
      var t = theo[ti], ks = tron(Object.keys(t)), con = true;
      while (out.length < toiDa && con) {
        con = false;
        ks.forEach(function (k) {
          if (out.length >= toiDa) return;
          var x = lay(t[k]);
          if (x) { out.push(x); con = true; }
        });
      }
    }
    // Danh khoang 30% so cau de on bai truoc (neu co); con lai uu tien cau bai nay dung tu bai truoc
    var on = nhom[2].length ? Math.min(nhom[2].length, Math.round(can * 0.3)) : 0;
    rut(0, can - on);
    rut(1, can - on);
    rut(2, can);
    rut(0, can); rut(1, can);
    // xao thu tu de cau on xen giua, khong don het xuong cuoi
    out = tron(out);
    return out;
  }
  function soCo() {
    var n = 0;
    S.bai.forEach(function (b) {
      (b.noi || []).forEach(function (d) { if (S.loai.indexOf(d.k) >= 0) n++; });
      if (S.loai.indexOf('nn') >= 0 || S.loai.indexOf('nl') >= 0 || S.loai.indexOf('vt') >= 0) n += (b.dich || []).length;
    });
    return n;
  }
  function phuCau(x) {
    if (!x.chon) return '🔁 Ôn lại bài ' + x.n;
    var bai = [];
    (x.cu || []).forEach(function (c) { if (bai.indexOf(c[1]) < 0) bai.push(c[1]); });
    return bai.length ? '🔁 Có từ của bài ' + bai.sort(function (a, b) { return a - b; }).join(', ') : 'Bài ' + x.n;
  }

  /* ---------------- giao dien ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopNoi';
    root.className = 'kn';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Kiểm tra nói');
    root.innerHTML =
      '<header class="kn-bar"><b class="kn-title">🎤 Kiểm tra nói — nghe &amp; phản xạ</b><span class="kn-sub" id="knSub"></span>' +
        '<span class="kn-gap"></span>' +
        '<button type="button" class="kn-btn kn-ic" data-k="am" id="knAm" title="Bật/tắt tiếng (M)"></button>' +
        '<button type="button" class="kn-btn kn-ic" data-k="full" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="kn-btn" data-k="dong">✕ Đóng</button></header>' +
      '<main class="kn-man" id="knMan"></main>' +
      '<p class="kn-phim" id="knPhim" aria-hidden="true"></p>';
    document.body.appendChild(root);
    root.addEventListener('click', bam);
    window.addEventListener('keydown', phim, true);
    S.built = true;
  }
  function veAm() { var b = $('#knAm'); b.textContent = S.sound ? '🔊' : '🔇'; b.classList.toggle('is-tat', !S.sound); }
  function chip(k, v, nhan, on) {
    return '<button type="button" class="kn-chip' + (on ? ' is-on' : '') + '" data-k="' + k + '" data-v="' + v + '" aria-pressed="' + !!on + '">' + nhan + '</button>';
  }
  function veSanh() {
    huyHen(); imLang();
    S.pha = 'sanh';
    var co = soCo();
    var n = S.bai.filter(function (b) { return b.chon; }).map(function (b) { return b.n; });
    $('#knMan').innerHTML =
      '<div class="kn-sanh">' +
        '<div class="kn-sanh-the">' +
          '<h1>🎤 Kiểm tra nói</h1>' +
          '<p class="kn-sanh-mo">Máy đọc câu hỏi trong bài — học sinh nghe và trả lời ngay trong thời gian quy định. ' +
            'Câu của ' + (n.length ? 'bài ' + n.join(', ') : 'bài đã chọn') + ' được ưu tiên khi có dùng lại từ của các bài trước' +
            (S.maxN > 1 ? ' (bài 1–' + (S.maxN - 1) + ')' : '') + ', kèm vài câu ôn của bài trước.</p>' +
          '<div class="kn-hang"><span>Dạng câu</span><div class="kn-chips">' + LOAI_DS.map(function (k) {
            return chip('loai', k, LOAI[k].ic + ' ' + LOAI[k].ten, S.loai.indexOf(k) >= 0);
          }).join('') + '</div></div>' +
          '<div class="kn-hang"><span>Số câu</span><div class="kn-chips">' + [5, 10, 15, 20].map(function (x) { return chip('so', x, x + ' câu', S.so === x); }).join('') + '</div></div>' +
          '<div class="kn-hang"><span>Thời gian trả lời</span><div class="kn-chips">' + [5, 8, 12, 20].map(function (x) { return chip('giay', x, x + ' giây', S.giay === x); }).join('') + '</div></div>' +
          '<div class="kn-hang"><span>Máy đọc</span><div class="kn-chips">' + chip('lan', 1, '1 lần', S.lan === 1) + chip('lan', 2, '2 lần', S.lan === 2) + '</div></div>' +
          '<p class="kn-co">' + (co ? 'Có khoảng <b>' + co + '</b> câu phù hợp.' : '⚠️ Bài đã chọn chưa có câu cho các dạng này — chọn thêm dạng hoặc thêm bài.') + '</p>' +
          '<button type="button" class="kn-go" data-k="batDau"' + (co ? '' : ' disabled') + '>▶ Bắt đầu <kbd>Space</kbd></button>' +
        '</div>' +
      '</div>';
    phimTat();
  }

  function batDau() {
    S.ds = taoDs();
    if (!S.ds.length) return;
    if (window.NhacNen) window.NhacNen.tat();
    S.i = 0; S.kq = [];
    sndBat();
    moCau();
  }
  function moCau() {
    huyHen(); imLang();
    var x = S.ds[S.i];
    if (!x) { veKetQua(); return; }
    S.hien = x.k === 'vt'; // cau Viet -> Trung: chu hien san, khong doc
    S.pha = 'nghe';
    S.con = S.giay;
    veCau();
    if (x.k === 'vt') sau(900, demNguoc);
    else sau(500, function () { docCau(x.nghe, function () { if (S.pha === 'nghe') demNguoc(); }); });
  }
  function demNguoc() {
    S.pha = 'tra';
    S.con = S.giay;
    S.batDauMs = Date.now();
    veCau();
    S.tg = setInterval(function () {
      var con = Math.max(0, S.giay - (Date.now() - S.batDauMs) / 1000);
      var giay = Math.ceil(con);
      if (giay !== S.con) { S.con = giay; if (giay <= 3 && giay > 0) sndTick(giay === 1); }
      veDongHo(con);
      if (con <= 0) { clearInterval(S.tg); S.tg = null; sndHet(); loDap(); }
    }, 100);
  }
  function loDap() {
    if (S.pha === 'lo' || S.pha === 'xong') return;
    huyHen(); imLang();
    S.pha = 'lo';
    S.hien = true;
    veCau();
    var x = S.ds[S.i];
    // doc cau tra loi mau (tru dang noi nghia: dap an la tieng Viet)
    if (x.k !== 'nn') sau(400, function () { docMay(x.dap); });
  }
  function cham(v) {
    if (S.pha !== 'lo' && S.pha !== 'tra') return;
    if (S.pha === 'tra') loDap();
    S.kq[S.i] = v;
    if (v) sndDung(); else sndSai();
    veCau();
  }
  function tiep() {
    if (S.pha === 'nghe' || S.pha === 'tra') { loDap(); return; }
    if (S.pha !== 'lo') return;
    S.i++;
    moCau();
  }

  function veCau() {
    var x = S.ds[S.i], L = LOAI[x.k];
    var tren = '<div class="kn-dau"><span class="kn-so">Câu ' + (S.i + 1) + '/' + S.ds.length + '</span>' +
      '<span class="kn-loai">' + L.ic + ' ' + esc(L.ten) + '</span><span class="kn-nguon">' + esc(phuCau(x)) + '</span>' +
      '<span class="kn-diem">✓ ' + S.kq.filter(Boolean).length + '</span></div>';
    var giua;
    if (S.pha === 'nghe' && !S.hien) {
      giua = '<div class="kn-nghe"><span class="kn-loa" aria-hidden="true">🎧</span><p>Nghe nè…</p></div>';
    } else if (S.pha === 'tra') {
      giua = '<div class="kn-tra">' +
        '<div class="kn-vong"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="kn-vong-nen" cx="60" cy="60" r="54"/>' +
        '<circle class="kn-vong-chay" id="knVong" cx="60" cy="60" r="54" stroke-dasharray="' + VONG.toFixed(1) + '" transform="rotate(-90 60 60)"/></svg>' +
        '<b id="knGiay">' + S.con + '</b></div>' +
        (S.hien ? '<p class="kn-de' + (x.k === 'vt' ? ' is-vn' : ' zh') + '">' + esc(x.de) + '</p>' : '<p class="kn-moi">Trả lời đi! 🗣️</p>') + '</div>';
    } else {
      giua = '';
    }
    var lo = S.pha === 'lo';
    var deHien = (S.hien || lo) && S.pha !== 'tra';
    var noiDung = (deHien ? '<p class="kn-de' + (x.k === 'vt' ? ' is-vn' : ' zh') + '">' + esc(x.de) + '</p>' +
        (lo && x.deVn ? '<p class="kn-de-vn">' + esc(x.deVn) + '</p>' : '') : '') +
      (lo ? '<div class="kn-dap"><p class="kn-dap-nhan">' + (x.k === 'nn' ? 'Nghĩa' : x.k === 'nl' ? 'Câu nhắc lại' : 'Trả lời mẫu') + '</p>' +
        '<p class="kn-dap-chu' + (x.k === 'nn' ? ' is-vn' : ' zh') + '">' + esc(x.dap) + '</p>' +
        (x.dapVn ? '<p class="kn-dap-vn">' + esc(x.dapVn) + '</p>' : '') +
        (x.cu && x.cu.length ? '<p class="kn-dap-cu">Từ đã học: ' + x.cu.map(function (c) { return esc(c[0]) + ' (bài ' + c[1] + ')'; }).join(' · ') + '</p>' : '') +
        (x.k === 'hd' || x.k === 'bk' ? '<p class="kn-dap-ghi">Câu trả lời khác đúng ý, đúng ngữ pháp vẫn tính đúng.</p>' : '') + '</div>' : '');
    var kq = S.kq[S.i];
    var nut = '<div class="kn-nut">' +
      (S.pha === 'nghe' || S.pha === 'tra'
        ? '<button type="button" class="kn-btn2" data-k="nghe">🔁 Nghe lại <kbd>R</kbd></button>' +
          (x.k !== 'vt' && !S.hien ? '<button type="button" class="kn-btn2" data-k="hien">👁 Hiện chữ <kbd>H</kbd></button>' : '') +
          '<button type="button" class="kn-btn2" data-k="lo">⏭ Xem đáp án <kbd>Enter</kbd></button>'
        : '<button type="button" class="kn-cham is-sai' + (kq === false ? ' is-on' : '') + '" data-k="cham" data-v="0">✗ Chưa được <kbd>←</kbd></button>' +
          '<button type="button" class="kn-cham is-dung' + (kq === true ? ' is-on' : '') + '" data-k="cham" data-v="1">✓ Đúng <kbd>→</kbd></button>' +
          '<button type="button" class="kn-go kn-go-sm" data-k="tiep">' + (S.i + 1 < S.ds.length ? 'Câu tiếp ▶' : 'Xem kết quả ▶') + ' <kbd>Space</kbd></button>') +
      '</div>';
    $('#knMan').innerHTML = '<div class="kn-choi">' + tren +
      '<div class="kn-the kn-pha-' + S.pha + '"><p class="kn-lenh">' + esc(L.lenh) + '</p>' + giua + noiDung + '</div>' + nut + '</div>';
    if (S.pha === 'tra') veDongHo(Math.max(0, S.giay - (Date.now() - S.batDauMs) / 1000));
    phimTat();
  }
  function veDongHo(con) {
    var v = $('#knVong'), b = $('#knGiay');
    if (!v || !b) return;
    v.setAttribute('stroke-dashoffset', (VONG * (1 - con / S.giay)).toFixed(1));
    v.classList.toggle('is-gap', con <= 3);
    b.textContent = Math.ceil(con);
  }

  function veKetQua() {
    huyHen(); imLang();
    S.pha = 'xong';
    var dung = S.kq.filter(Boolean).length, tong = S.ds.length;
    $('#knMan').innerHTML =
      '<div class="kn-kq"><div class="kn-kq-the">' +
        '<h2>🎤 Kết quả: <b>' + dung + '</b> / ' + tong + ' câu</h2>' +
        '<ol class="kn-kq-ds">' + S.ds.map(function (x, i) {
          var v = S.kq[i];
          return '<li class="' + (v === true ? 'is-dung' : v === false ? 'is-sai' : '') + '"><span>' + LOAI[x.k].ic + '</span>' +
            '<b class="' + (x.k === 'vt' ? '' : 'zh') + '">' + esc(x.de) + '</b><i>' + (v === true ? '✓' : v === false ? '✗' : '—') + '</i></li>';
        }).join('') + '</ol>' +
        '<div class="kn-nut"><button type="button" class="kn-btn2" data-k="sanh">⚙️ Đổi cài đặt</button>' +
          '<button type="button" class="kn-go" data-k="batDau">↺ Lượt mới <kbd>Space</kbd></button></div>' +
      '</div></div>';
    tone(784, 0.2, 'triangle', 0.15); tone(1047, 0.35, 'triangle', 0.15, 0.15);
    phimTat();
  }

  /* ---------------- bam / phim ---------------- */
  function luu() { ghiLS(PREF_KEY, { loai: S.loai, so: S.so, giay: S.giay, lan: S.lan, sound: S.sound }); }
  var HANH = {
    am: function () { S.sound = !S.sound; luu(); veAm(); if (!S.sound) imLang(); },
    full: function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* */ });
    },
    dong: function () { dong(); },
    loai: function (v) {
      var i = S.loai.indexOf(v);
      if (i >= 0) { if (S.loai.length > 1) S.loai.splice(i, 1); } else S.loai.push(v);
      luu(); veSanh();
    },
    so: function (v) { S.so = +v; luu(); veSanh(); },
    giay: function (v) { S.giay = +v; luu(); veSanh(); },
    lan: function (v) { S.lan = +v; luu(); veSanh(); },
    batDau: batDau,
    sanh: veSanh,
    nghe: function () {
      var x = S.ds[S.i];
      if (!x || x.k === 'vt') return;
      // nghe lai: dung dong ho, doc xong dem lai tu dau
      huyHen(); imLang();
      S.pha = 'nghe'; veCau();
      docMay(x.nghe, function () { if (S.pha === 'nghe') demNguoc(); });
    },
    hien: function () { S.hien = true; veCau(); },
    lo: loDap,
    cham: function (v) { cham(v === '1'); },
    tiep: tiep
  };
  function bam(e) {
    var b = e.target.closest('[data-k]');
    if (!b || b.disabled || !root.contains(b)) return;
    var f = HANH[b.getAttribute('data-k')];
    if (f) { e.preventDefault(); f(b.getAttribute('data-v'), b); }
  }
  function phimTat() {
    var t = S.pha === 'sanh' ? 'Space bắt đầu · F toàn màn hình · M tắt/bật tiếng · Esc đóng'
      : S.pha === 'xong' ? 'Space lượt mới · Esc đóng'
      : S.pha === 'lo' ? '→ đúng · ← chưa được · Space câu tiếp · R nghe lại · Esc về cài đặt'
      : 'R nghe lại · H hiện chữ · Enter xem đáp án · Esc về cài đặt';
    $('#knPhim').textContent = t;
  }
  function phim(e) {
    if (!root || root.hidden) return;
    if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
    e.stopImmediatePropagation();
    var k = (e.key || '').toLowerCase(), space = e.code === 'Space' || e.key === ' ';
    if (e.key === 'Escape') { if (S.pha === 'sanh' || S.pha === 'xong') dong(); else veSanh(); return; }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (space || e.key === 'Enter' || /^Arrow/.test(e.key)) e.preventDefault();
    if (k === 'f') { HANH.full(); return; }
    if (k === 'm') { HANH.am(); return; }
    if (S.pha === 'sanh' || S.pha === 'xong') { if (space || e.key === 'Enter') batDau(); return; }
    if (k === 'r') { HANH.nghe(); return; }
    if (k === 'h') { HANH.hien(); return; }
    if (e.key === 'Enter') { if (S.pha === 'lo') tiep(); else loDap(); return; }
    if (e.key === 'ArrowRight') { cham(true); return; }
    if (e.key === 'ArrowLeft') { cham(false); return; }
    if (space) tiep();
  }

  /* ---------------- mo / dong ---------------- */
  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    var p = docLS(PREF_KEY, {}) || {};
    if (Array.isArray(p.loai)) { var l = p.loai.filter(function (k) { return LOAI[k]; }); if (l.length) S.loai = l; }
    if ([5, 10, 15, 20].indexOf(p.so) >= 0) S.so = p.so;
    if ([5, 8, 12, 20].indexOf(p.giay) >= 0) S.giay = p.giay;
    if (p.lan === 1 || p.lan === 2) S.lan = p.lan;
    S.sound = p.sound !== false;
    S.nhan = opt.nhan || '';
    S.bai = opt.bai || [];
    S.maxN = S.bai.filter(function (b) { return b.chon; }).reduce(function (m, b) { return Math.max(m, b.n); }, 0);
    $('#knSub').textContent = S.nhan;
    veAm();
    root.hidden = false;
    document.documentElement.classList.add('kn-open');
    veSanh();
  }
  function dong() {
    huyHen(); imLang();
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    if (root) root.hidden = true;
    document.documentElement.classList.remove('kn-open');
    S.pha = 'sanh';
  }

  window.LopNoi = { mo: mo, dong: dong };
})();
