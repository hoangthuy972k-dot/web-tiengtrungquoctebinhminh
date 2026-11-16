/* Doc theo nhip — man chieu "san khau toi" cho Che do lop hoc (/lop).
   Chu Han that to giua san khau, nghia tieng Viet ben duoi, 4 vong dem nhip 01–04 sang lan luot theo nhip,
   o "Tu tiep theo". Ca lop doc to tu theo nhip; het 4 nhip (hoac 8) tu dong sang tu ke.
   · Am thanh tong hop bang Web Audio, hen gio truoc tren dong ho cua AudioContext (lookahead) nen nhip deu
     ca khi trang ban; hinh (vong nhip, nhun, den) ap theo dung thoi diem am thanh phat.
   · Tieng nhip (click, nhip 1 cao hon) va nhac nen (trong + bass + hop am C–Am–F–G, chay theo BPM) bat/tat rieng.
   · Doc mau: may doc tu o nhip 1 (DocZh — giong may chu neu co giao bat, khong thi giong trinh duyet),
     nua sau cua o nhip la luot ca lop doc.
   · Hai linh vat hai ben co nut "Chon hoc sinh": boc ngau nhien mot ban co mat (diem danh hom nay) tu danh
     sach lop dung chung (lop tren he thong / danh sach nhanh hyv_ufo_lists — qua window.DiemDanh._).
   · Khong hien pinyin (quy uoc tro choi cua site); co nut Pinyin de bat khi can.
   Mo bang window.LopDocNhip.mo({ nhan, cap, bai: [{ ten, url }], tai: function (urls) -> Promise<[{ zh, py, vn }]> }).
   Tien to CSS: dn-                                                                                            */
(function () {
  'use strict';

  var PREF_KEY = 'hyv_docnhip', PW_KEY = 'hyv_admin_pw';
  var BPM_MIN = 60, BPM_MAX = 150, BPM_BUOC = 4;
  var LV = [
    { anh: '/images/farm/gautruc.svg', ten: 'Gấu trúc' },
    { anh: '/images/dua/tho.svg', ten: 'Thỏ' }
  ];
  // hop am moi tu (C – Am – F – G), nut goc MIDI + quang
  var HOP = [[48, [0, 4, 7]], [45, [0, 3, 7]], [41, [0, 4, 7]], [43, [0, 4, 7]]];

  var P = { bpm: 100, nhip: true, nhac: true, mau: false, py: false, nghia: true, tiep: true, lv: true, tron: false, lap: false, beats: 4, so: 0, src: '' };
  var S = {
    opt: null, goc: [], tu: [], i: 0, chay: false, xong: false, daChay: false, bo: 'all',
    ds: [], dsSrc: '', daGoi: {}, chon: [null, null], quay: [false, false]
  };
  var root = null, built = false;

  function $(s) { return root.querySelector(s); }
  function $all(s) { return Array.prototype.slice.call(root.querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function kep(v, a, b) { return v < a ? a : v > b ? b : v; }
  function tron(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function napPref() {
    var p = docLS(PREF_KEY, {}) || {};
    Object.keys(P).forEach(function (k) { if (p[k] != null && typeof p[k] === typeof P[k]) P[k] = p[k]; });
    P.bpm = kep(Math.round(P.bpm), BPM_MIN, BPM_MAX);
    if (P.beats !== 8) P.beats = 4;
    if ([0, 10, 15, 20].indexOf(P.so) < 0) P.so = 0;
  }
  function luuPref() { ghiLS(PREF_KEY, P); }
  function spb() { return 60 / P.bpm; }

  /* ================= am thanh ================= */
  var ac = null, master = null, busNhac = null, busNhip = null, nhieu = null;
  var hen = [];          // cac nut am thanh da hen (de dung khi tam dung / chuyen tu)
  function amThanh() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ac) {
      try {
        ac = new AC();
        master = ac.createGain(); master.gain.value = 0.9; master.connect(ac.destination);
        busNhac = ac.createGain(); busNhac.gain.value = P.nhac ? 0.55 : 0; busNhac.connect(master);
        busNhip = ac.createGain(); busNhip.gain.value = P.nhip ? 1 : 0; busNhip.connect(master);
        nhieu = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
        var d = nhieu.getChannelData(0);
        for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      } catch (e) { ac = null; return null; }
    }
    if (ac.state === 'suspended' && ac.resume) ac.resume();
    return ac;
  }
  function giuNut(n, t) {
    hen.push({ n: n, t: t });
    if (hen.length > 300) { var now = ac.currentTime; hen = hen.filter(function (x) { return x.t > now - 2; }); }
  }
  function dungHen() {
    if (!ac) return;
    var now = ac.currentTime;
    hen.forEach(function (x) { if (x.t > now) { try { x.n.stop(0); } catch (e) { /* bo qua */ } } });
    hen = [];
  }
  function hz(m) { return 440 * Math.pow(2, (m - 69) / 12); }
  function not(bus, kieu, f, t, dai, to, f2) {
    var o = ac.createOscillator(), g = ac.createGain();
    o.type = kieu;
    o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dai);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(to, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dai);
    o.connect(g); g.connect(bus);
    o.start(t); o.stop(t + dai + 0.03);
    giuNut(o, t);
  }
  function ti(bus, t, dai, to, loai, tan) {
    var s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = nhieu;
    f.type = loai; f.frequency.value = tan;
    g.gain.setValueAtTime(to, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dai);
    s.connect(f); f.connect(g); g.connect(bus);
    s.start(t, Math.random() * 0.5); s.stop(t + dai + 0.02);
    giuNut(s, t);
  }
  function dem(bus, f, t, dai, to) {   // hop am nen, len xuong em
    var o = ac.createOscillator(), g = ac.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(f, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(to, t + Math.min(0.25, dai / 3));
    g.gain.linearRampToValueAtTime(to * 0.6, t + dai * 0.7);
    g.gain.linearRampToValueAtTime(0.0001, t + dai);
    o.connect(g); g.connect(bus);
    o.start(t); o.stop(t + dai + 0.05);
    giuNut(o, t);
  }
  // tieng nhip: go mo (nhip 1 cao, to hon)
  function tiengNhip(t, dau) {
    not(busNhip, 'sine', dau ? 1568 : 1046, t, 0.06, dau ? 0.32 : 0.2);
    not(busNhip, 'square', dau ? 3136 : 2093, t, 0.015, dau ? 0.05 : 0.03);
  }
  // nhac nen mot nhip: trong + hi-hat + bass + hop am (o dau tu) + arp nhe
  function nhacNhip(t, b, w) {
    var d = spb(), hop = HOP[w % HOP.length], goc = hop[0], q = hop[1], nb = b % 4;
    if (nb === 0 || nb === 2) not(busNhac, 'sine', 140, t, 0.32, 0.55, 45);            // trong cai
    if (nb === 1 || nb === 3) { ti(busNhac, t, 0.16, 0.22, 'bandpass', 1800); not(busNhac, 'triangle', 220, t, 0.08, 0.08, 120); } // vo tay
    ti(busNhac, t, 0.04, 0.07, 'highpass', 7000);                                            // hi-hat
    ti(busNhac, t + d / 2, 0.035, 0.05, 'highpass', 8000);
    not(busNhac, 'triangle', hz(goc - 12 + (nb === 3 ? 7 : 0)), t, d * 0.5, 0.3);           // bass
    not(busNhac, 'triangle', hz(goc), t + d / 2, d * 0.3, 0.16);
    if (b === 0) q.forEach(function (x) { dem(busNhac, hz(goc + 12 + x), t, d * P.beats * 0.98, 0.035); });
    not(busNhac, 'square', hz(goc + 24 + q[(b * 2 + 1) % 3]), t + d / 2, 0.09, 0.025);     // arp sau phach
  }
  function datTieng() {
    if (!ac) return;
    var now = ac.currentTime;
    busNhac.gain.setTargetAtTime(P.nhac ? (dangDoc ? 0.16 : 0.55) : 0, now, 0.05);
    busNhip.gain.setTargetAtTime(P.nhip ? (dangDoc ? 0.5 : 1) : 0, now, 0.05);
  }

  /* ================= doc mau ================= */
  var dangDoc = false, henDoc = 0;
  function docMau(zh) {
    if (!zh) return;
    var xong = function () { dangDoc = false; clearTimeout(henDoc); datTieng(); };
    dangDoc = true; datTieng();
    clearTimeout(henDoc);
    henDoc = setTimeout(xong, Math.max(1500, spb() * 2000));
    try {
      if (window.DocZh) window.DocZh.doc(zh, { m: 'tu', cap: S.opt && S.opt.cap, onend: xong, onerror: xong });
      else if (window.speechSynthesis) {
        var u = new SpeechSynthesisUtterance(zh);
        u.lang = 'zh-CN'; u.rate = 0.8; u.onend = xong; u.onerror = xong;
        speechSynthesis.cancel(); speechSynthesis.speak(u);
      } else xong();
    } catch (e) { xong(); }
  }
  function imDoc() {
    try { if (window.DocZh) window.DocZh.dung(); else if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { /* bo qua */ }
    dangDoc = false; datTieng();
  }

  /* ================= bo hen gio nhip ================= */
  // Dong ho: AudioContext khi dang phat duoc (nhip va am thanh khop nhau); trinh duyet chua cho phat
  // am thanh (AudioContext 'suspended') thi chay theo performance.now() — nhip van chay, chi khong co tieng.
  var LOOK = 0.12, sch = null, hangDoi = [], tick = 0, khung = 0, coTieng = false;
  function gio() { return coTieng ? ac.currentTime : performance.now() / 1000; }
  function henLich() {
    if (!sch) return;
    while (sch && sch.t < gio() + LOOK) {
      if (sch.pha === 'het') { hangDoi.push({ t: sch.t, pha: 'het' }); sch = null; break; }
      var t = sch.t;
      if (coTieng) {
        tiengNhip(t, sch.b % 4 === 0);
        if (sch.pha === 'doc') nhacNhip(t, sch.b, sch.w);
        else ti(busNhac, t, 0.04, 0.07, 'highpass', 7000);
      }
      hangDoi.push({ t: t, pha: sch.pha, b: sch.b, w: sch.w });
      sch.t += spb();
      sch.b++;
      if (sch.pha === 'dem') { if (sch.b >= 4) { sch.pha = 'doc'; sch.b = 0; } }
      else if (sch.b >= P.beats) {
        sch.b = 0; sch.w++;
        if (sch.w >= S.tu.length) { if (P.lap) sch.w = 0; else sch.pha = 'het'; }
      }
    }
  }
  function xaHang() {
    var now = gio() + 0.012;
    while (S.chay && hangDoi.length && hangDoi[0].t <= now) apDung(hangDoi.shift());
  }
  // rAF cho hinh muot; nhip 25 ms cung xa hang doi (rAF co the bi chan khi cua so bi che)
  function vongHinh() {
    khung = 0;
    if (!S.chay) return;
    xaHang();
    if (S.chay) khung = requestAnimationFrame(vongHinh);
  }
  function nhipMay() { henLich(); xaHang(); }
  function chayLich(coDem) {
    amThanh();
    coTieng = !!(ac && ac.state === 'running');
    if (ac && !coTieng && ac.resume) {
      // vua duoc phep phat (lan bam dau) -> chuyen sang dong ho am thanh, giu nguyen tu dang doc
      Promise.resolve(ac.resume()).then(function () {
        if (S.chay && !coTieng && ac.state === 'running') chayLich(!!(sch && sch.pha === 'dem'));
      }).catch(function () { /* bo qua */ });
    }
    dungHen(); hangDoi = [];
    sch = { t: gio() + 0.08, pha: coDem ? 'dem' : 'doc', b: 0, w: S.i };
    if (!tick) tick = setInterval(nhipMay, 25);
    henLich();
    if (!khung) khung = requestAnimationFrame(vongHinh);
  }
  function dungLich() {
    sch = null; hangDoi = [];
    clearInterval(tick); tick = 0;
    if (khung) cancelAnimationFrame(khung); khung = 0;
    dungHen();
  }

  /* ================= ap hinh theo nhip ================= */
  function nhun(el) { if (!el) return; el.classList.remove('nhun'); void el.offsetWidth; el.classList.add('nhun'); }
  function apDung(ev) {
    if (ev.pha === 'het') { ketThuc(); return; }
    var nb = ev.b % 4;
    $all('.dn-nhip').forEach(function (c, k) {
      c.classList.toggle('on', k === nb);
      c.classList.toggle('qua', k < nb);
    });
    nhun($('.dn-nhips'));
    $all('.dn-lv-anh').forEach(nhun);
    var san = $('.dn-san');
    san.classList.toggle('dau', nb === 0);
    nhun(san);
    if (ev.pha === 'dem') {
      dauHieu('Chuẩn bị… ' + (4 - ev.b), 'dem');
      return;
    }
    if (ev.w !== S.i || ev.b === 0) { S.i = ev.w; veTu(); }
    nhun($('.dn-zh'));
    var luot = P.beats === 8 ? (ev.b < 4 ? ' · lượt 1' : ' · lượt 2') : '';
    if (P.mau) {
      var nghe = ev.b < P.beats / 2;
      if (ev.b === 0) docMau(S.tu[S.i] && S.tu[S.i].zh);
      dauHieu(nghe ? '🔊 Nghe mẫu' : '📣 Cả lớp đọc!', nghe ? 'nghe' : 'doc');
    } else dauHieu('📣 Cả lớp đọc to!' + luot, 'doc');
  }
  function dauHieu(txt, kieu) {
    var e = $('.dn-cue');
    e.textContent = txt;
    e.setAttribute('data-k', kieu || '');
  }
  function xoaNhip() {
    $all('.dn-nhip').forEach(function (c) { c.classList.remove('on', 'qua'); });
    $('.dn-san').classList.remove('dau');
  }

  /* ================= ve ================= */
  function coChu(zh) {
    var n = Array.from(String(zh || '')).length;
    return n <= 2 ? 'c1' : n <= 4 ? 'c2' : n <= 7 ? 'c3' : 'c4';
  }
  function veTu() {
    var v = S.tu[S.i], n = S.tu.length;
    var zh = $('.dn-zh');
    if (!v) {
      zh.textContent = '—'; zh.className = 'dn-zh c1';
      $('.dn-py').textContent = ''; $('.dn-vn').textContent = '';
      $('#dnDem').innerHTML = '<b>0</b>/0';
      $('.dn-tiep').hidden = true;
      return;
    }
    zh.textContent = v.zh;
    zh.className = 'dn-zh ' + coChu(v.zh);
    zh.setAttribute('lang', 'zh');
    $('.dn-py').textContent = v.py || '';
    $('.dn-py').hidden = !P.py || !v.py;
    $('.dn-vn').textContent = v.vn || '';
    $('.dn-vn').hidden = !P.nghia;
    $('#dnDem').innerHTML = '<b>' + (S.i + 1) + '</b>/' + n;
    var k = S.tu[S.i + 1] || (P.lap && n > 1 ? S.tu[0] : null);
    var t = $('.dn-tiep');
    t.hidden = !P.tiep;
    t.querySelector('.dn-tiep-zh').textContent = k ? k.zh : 'Hết bộ từ 🎉';
    t.querySelector('.dn-tiep-py').textContent = k && P.py ? (k.py || '') : '';
    t.querySelector('.dn-tiep-vn').textContent = k && P.nghia ? (k.vn || '') : '';
    $('#dnTruoc').disabled = S.i <= 0 && !P.lap;
    $('#dnSau').disabled = S.i >= n - 1 && !P.lap;
    var tl = $('.dn-tien-do i');
    if (tl) tl.style.width = (n ? ((S.i + 1) / n) * 100 : 0) + '%';
  }
  function veNut() {
    $('#dnBpm').textContent = P.bpm;
    $('#dnBpmTru').disabled = P.bpm <= BPM_MIN;
    $('#dnBpmCong').disabled = P.bpm >= BPM_MAX;
    root.style.setProperty('--dn-spb', spb() + 's');
    $('#dnNhipSw').setAttribute('aria-checked', P.nhip ? 'true' : 'false');
    $('#dnNhacSw').setAttribute('aria-checked', P.nhac ? 'true' : 'false');
    var m = $('#dnMau');
    m.classList.toggle('on', P.mau);
    m.querySelector('b').textContent = P.mau ? 'Bật' : 'Tắt';
    $('#dnPy').classList.toggle('on', P.py);
    $('#dnPy').setAttribute('aria-pressed', P.py ? 'true' : 'false');
    root.classList.toggle('dn-khong-lv', !P.lv);
    var go = $('#dnGo');
    go.innerHTML = S.chay ? '<span aria-hidden="true">❚❚</span> Tạm dừng' : '<span aria-hidden="true">▶</span> ' + (S.i > 0 && !S.xong ? 'Tiếp tục' : 'Bắt đầu');
    go.classList.toggle('dang', S.chay);
    $('.dn-dung').hidden = S.chay || !S.daChay || S.xong || !S.tu.length;
    $all('[data-st]').forEach(function (b) {
      var k = b.getAttribute('data-st'), v = b.getAttribute('data-v');
      var cur = String(P[k]);
      b.classList.toggle('on', v != null ? v === cur : !!P[k]);
      if (v == null) b.setAttribute('aria-pressed', P[k] ? 'true' : 'false');
    });
  }
  function baoLoi(t) {
    var e = $('.dn-bao');
    e.textContent = t;
    e.hidden = false;
    clearTimeout(baoLoi.h);
    baoLoi.h = setTimeout(function () { e.hidden = true; }, 3500);
  }

  /* ================= dieu khien ================= */
  function batDau() {
    if (!S.tu.length) return;
    if (S.xong) { S.i = 0; S.xong = false; $('.dn-het').hidden = true; veTu(); }
    S.chay = true; S.daChay = true;
    veNut();
    chayLich(true);
  }
  function tamDung() {
    S.chay = false;
    dungLich();
    imDoc();
    xoaNhip();
    dauHieu(S.tu.length ? 'Bấm Bắt đầu — cả lớp đọc to theo nhịp' : '', '');
    veNut();
  }
  function batTat() { if (S.chay) tamDung(); else batDau(); }
  function denTu(i) {
    var n = S.tu.length;
    if (!n) return;
    if (P.lap) i = (i + n) % n;
    i = kep(i, 0, n - 1);
    S.i = i; S.xong = false;
    $('.dn-het').hidden = true;
    veTu();
    if (S.chay) { imDoc(); chayLich(false); }
    else veNut();
  }
  function lamLai() {
    S.i = 0; S.xong = false;
    $('.dn-het').hidden = true;
    veTu();
    if (S.chay) { imDoc(); chayLich(true); } else veNut();
  }
  function ketThuc() {
    S.chay = false; S.xong = true;
    dungLich();
    xoaNhip();
    dauHieu('', '');
    var h = $('.dn-het');
    h.querySelector('.dn-het-so').textContent = S.tu.length;
    h.hidden = false;
    veNut();
    $('.dn-dung').hidden = true;
  }
  function doiBpm(d) {
    P.bpm = kep(P.bpm + d, BPM_MIN, BPM_MAX);
    luuPref(); veNut();
  }

  /* ================= bo tu ================= */
  function apBoTu() {
    var ds = S.goc.slice();
    if (P.tron) ds = tron(ds);
    if (P.so) ds = ds.slice(0, P.so);
    S.tu = ds;
    S.i = 0; S.xong = false;
    if (root) { $('.dn-het').hidden = true; veTu(); veNut(); }
  }
  function napBoTu(v) {
    var o = S.opt || {}, bai = o.bai || [];
    S.bo = v;
    var urls = v === 'all' ? bai.map(function (b) { return b.url; }) : [v];
    if (S.chay) tamDung();
    $('.dn-zh').textContent = '…';
    $('.dn-vn').textContent = 'Đang tải từ vựng…';
    var p = typeof o.tai === 'function' ? o.tai(urls) : Promise.resolve(o.vocab || []);
    return Promise.resolve(p).then(function (vocab) {
      if (S.bo !== v) return;
      var thay = {};
      S.goc = (vocab || []).filter(function (x) {
        if (!x || !x.zh || thay[x.zh]) return false;
        thay[x.zh] = 1; return true;
      }).map(function (x) { return { zh: String(x.zh).trim(), py: x.py || '', vn: x.vn || '' }; });
      apBoTu();
      if (!S.goc.length) { $('.dn-vn').textContent = 'Bài này chưa có dữ liệu từ vựng.'; $('.dn-vn').hidden = false; }
      dauHieu(S.goc.length ? 'Bấm Bắt đầu — cả lớp đọc to theo nhịp' : '', '');
    }).catch(function () { $('.dn-vn').textContent = 'Không tải được từ vựng.'; });
  }
  function veBoTu() {
    var o = S.opt || {}, bai = o.bai || [];
    var h = '<option value="all">' + esc(bai.length > 1 ? 'Cả ' + bai.length + ' bài đã chọn' : (bai[0] ? bai[0].ten : 'Bộ từ')) + '</option>';
    if (bai.length > 1) h += bai.map(function (b) { return '<option value="' + esc(b.url) + '">' + esc(b.ten) + '</option>'; }).join('');
    var sel = $('#dnBo');
    sel.innerHTML = h;
    sel.value = 'all';
    sel.disabled = bai.length < 2;
  }

  /* ================= chon hoc sinh ================= */
  function dd() { return window.DiemDanh && window.DiemDanh._ ? window.DiemDanh._ : null; }
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function nguonDs() {
    var d = dd();
    if (d) return d.nguon();
    var l = docLS('hyv_ufo_lists', []);
    return Promise.resolve((Array.isArray(l) ? l : []).filter(function (x) { return x && x.kids && x.kids.length; })
      .map(function (x) { return { v: 'ls:' + x.id, ten: x.name, size: x.kids.length }; }));
  }
  function dsHs(src) {
    var d = dd();
    if (d) return d.dsHs(src);
    var l = (docLS('hyv_ufo_lists', []) || []).filter(function (x) { return 'ls:' + x.id === src; })[0];
    return Promise.resolve(l ? l.kids.map(function (k) { return { id: String(k.id), name: String(k.name) }; }) : []);
  }
  function napDs(src) {
    if (!src) { S.ds = []; S.dsSrc = ''; return Promise.resolve([]); }
    var nap = window.DiemDanh && window.DiemDanh.nap ? window.DiemDanh.nap(src) : Promise.resolve();
    return Promise.resolve(nap).catch(function () {}).then(function () { return dsHs(src); }).then(function (ds) {
      if (S.dsSrc !== src) S.daGoi = {};
      S.ds = ds || []; S.dsSrc = src;
      return S.ds;
    });
  }
  function coMat(k) { return !window.DiemDanh || !window.DiemDanh.coMat || window.DiemDanh.coMat(S.dsSrc, k.id); }
  function tenGon(name) {
    var w = String(name).trim().split(/\s+/);
    return w.length > 2 ? w.slice(-2).join(' ') : String(name).trim();
  }
  function moLop(cho) {
    var p = $('.dn-lop');
    p.hidden = false;
    p.setAttribute('data-cho', cho == null ? '' : String(cho));
    $('#dnLopPwHop').hidden = !!pw();
    $('#dnLopErr').hidden = true;
    var sel = $('#dnLopSel');
    sel.innerHTML = '<option value="">Đang tải…</option>';
    nguonDs().then(function (ds) {
      var d = dd();
      sel.innerHTML = d ? d.optHtml(ds, P.src) : '<option value="">— Chọn lớp —</option>' + ds.map(function (n) {
        return '<option value="' + esc(n.v) + '"' + (n.v === P.src ? ' selected' : '') + '>📋 ' + esc(n.ten) + ' (' + n.size + ')</option>';
      }).join('');
      $('#dnLopRong').hidden = ds.length > 0;
    });
  }
  function dongLop() { $('.dn-lop').hidden = true; }
  function chonLop() {
    var v = $('#dnLopSel').value;
    if (!v) { $('#dnLopErr').textContent = 'Chọn một lớp trong danh sách.'; $('#dnLopErr').hidden = false; return; }
    P.src = v; luuPref();
    var cho = $('.dn-lop').getAttribute('data-cho');
    napDs(v).then(function (ds) {
      if (!ds.length) { $('#dnLopErr').textContent = 'Lớp này chưa có danh sách học sinh.'; $('#dnLopErr').hidden = false; return; }
      dongLop();
      veLopTen();
      if (cho !== '') boc(+cho);
    }).catch(function (e) {
      $('#dnLopErr').textContent = e && e.message ? e.message : 'Không tải được danh sách.';
      $('#dnLopErr').hidden = false;
    });
  }
  function guiMk(e) {
    e.preventDefault();
    var v = $('#dnLopPw').value.trim();
    if (!v) return;
    try { sessionStorage.setItem(PW_KEY, v); } catch (x) { /* bo qua */ }
    $('#dnLopPw').value = '';
    var cho = $('.dn-lop').getAttribute('data-cho');
    nguonDs().then(function (ds) {
      if (!ds.some(function (n) { return n.v.indexOf('sv:') === 0; })) {
        try { sessionStorage.removeItem(PW_KEY); } catch (x) { /* bo qua */ }
        $('#dnLopErr').textContent = 'Mật khẩu không đúng (hoặc chưa có lớp trên hệ thống).';
        $('#dnLopErr').hidden = false;
        return;
      }
      moLop(cho === '' ? null : +cho);
    });
  }
  function veLopTen() {
    var e = $('#dnLopTen');
    if (!e) return;
    var opt = $('#dnLopSel') && $('#dnLopSel').selectedOptions[0];
    e.textContent = S.dsSrc ? (opt && opt.value === S.dsSrc ? opt.textContent.replace(/^[🏫📋]\s*/u, '') : 'đã chọn') : 'chưa chọn';
  }
  function boc(k) {
    if (S.quay[k]) return;
    if (!P.src) { moLop(k); return; }
    var p = S.dsSrc === P.src && S.ds.length ? Promise.resolve(S.ds) : napDs(P.src);
    p.then(function (ds) {
      if (!ds.length) { moLop(k); return; }
      var khac = S.chon[1 - k];
      var mat = ds.filter(coMat);
      if (!mat.length) { baoLoi('Cả lớp đang được đánh dấu vắng.'); return; }
      var ung = mat.filter(function (x) { return !S.daGoi[x.id] && (!khac || x.id !== khac.id); });
      if (!ung.length) { S.daGoi = {}; ung = mat.filter(function (x) { return !khac || x.id !== khac.id; }); if (!ung.length) ung = mat; }
      var kq = ung[Math.floor(Math.random() * ung.length)];
      S.daGoi[kq.id] = 1;
      quayTen(k, mat, kq);
    }).catch(function (e) {
      if (e && (e.status === 401 || e.status === 403)) { try { sessionStorage.removeItem(PW_KEY); } catch (x) { /* bo qua */ } moLop(k); }
      else baoLoi(e && e.message ? e.message : 'Không tải được danh sách lớp.');
    });
  }
  function quayTen(k, mat, kq) {
    var o = $all('.dn-lv')[k], bong = o.querySelector('.dn-ten');
    S.quay[k] = true;
    bong.hidden = false;
    bong.classList.add('quay');
    bong.classList.remove('chot');
    var n = 0, tong = 14;
    (function buoc() {
      if (!root || root.hidden) { S.quay[k] = false; return; }
      if (n < tong) {
        bong.querySelector('b').textContent = tenGon(mat[Math.floor(Math.random() * mat.length)].name);
        if (ac && P.nhip) not(busNhip, 'triangle', 900 + (n % 4) * 120, ac.currentTime, 0.04, 0.05);
        n++;
        setTimeout(buoc, 50 + n * 9);
        return;
      }
      S.quay[k] = false;
      S.chon[k] = kq;
      bong.classList.remove('quay');
      bong.classList.add('chot');
      bong.querySelector('b').textContent = tenGon(kq.name);
      bong.title = kq.name;
      if (ac && P.nhip) { not(busNhip, 'triangle', 880, ac.currentTime, 0.12, 0.12); not(busNhip, 'triangle', 1320, ac.currentTime + 0.1, 0.25, 0.1); }
    })();
    amThanh();
  }
  function xoaTen(k) {
    S.chon[k] = null;
    var b = $all('.dn-lv')[k].querySelector('.dn-ten');
    b.hidden = true; b.classList.remove('chot', 'quay');
  }

  /* ================= toan man hinh / dong ================= */
  function toanManHinh() {
    try {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (root.requestFullscreen) root.requestFullscreen();
    } catch (e) { /* bo qua */ }
  }
  function phim(e) {
    if (!root || root.hidden) return;
    var tg = e.target && e.target.tagName;
    if (tg === 'INPUT' || tg === 'SELECT' || tg === 'TEXTAREA') return;
    if (!$('.dn-lop').hidden) { if (e.key === 'Escape') dongLop(); return; }
    if (e.key === ' ' || (e.key === 'Enter' && tg !== 'BUTTON')) { e.preventDefault(); batTat(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); denTu(S.i + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); denTu(S.i - 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); doiBpm(BPM_BUOC); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); doiBpm(-BPM_BUOC); }
    else if (e.key === 'f' || e.key === 'F') toanManHinh();
    else if (e.key === 'p' || e.key === 'P') { P.py = !P.py; luuPref(); veTu(); veNut(); }
    else if (e.key === 'Escape') {
      if (!$('.dn-cai').hidden) $('.dn-cai').hidden = true;
      else if (!$('.dn-lop').hidden) dongLop();
      else if (!document.fullscreenElement) dong();
    }
  }

  /* ================= dung khung ================= */
  var SW = function (id, nhan) {
    return '<button type="button" class="dn-sw" id="' + id + '" role="switch" aria-checked="true"><span class="dn-sw-t">' + nhan + '</span><i aria-hidden="true"></i></button>';
  };
  function dung() {
    root = document.createElement('div');
    root.className = 'dn';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Đọc theo nhịp');
    var den = '';
    for (var i = 0; i < 6; i++) den += '<span class="dn-den" style="--i:' + i + '"></span>';
    var lv = LV.map(function (x, k) {
      return '<div class="dn-lv dn-lv-' + k + '">' +
        '<div class="dn-ten" hidden><span>🎤</span><b></b><button type="button" class="dn-ten-x" data-x="' + k + '" aria-label="Bỏ chọn">×</button></div>' +
        '<img class="dn-lv-anh" src="' + x.anh + '" alt="' + esc(x.ten) + '" draggable="false">' +
        '<button type="button" class="dn-lv-nut" data-boc="' + k + '">Chọn học sinh <span aria-hidden="true">⇄</span></button>' +
      '</div>';
    }).join('');
    root.innerHTML =
      '<header class="dn-bar">' +
        '<div class="dn-logo"><span class="dn-logo-ic" aria-hidden="true">读</span><b>Đọc theo nhịp</b></div>' +
        '<div class="dn-nhom dn-bpm" title="Tốc độ nhịp (phím ↑ ↓)"><span class="dn-nhan">Nhịp</span>' +
          '<button type="button" class="dn-tron" id="dnBpmTru" aria-label="Chậm hơn">−</button><b id="dnBpm">100</b>' +
          '<button type="button" class="dn-tron" id="dnBpmCong" aria-label="Nhanh hơn">+</button></div>' +
        '<div class="dn-nhom">' + SW('dnNhipSw', 'Tiếng nhịp') + SW('dnNhacSw', 'Nhạc nền') + '</div>' +
        '<label class="dn-btn dn-bo vang"><span aria-hidden="true">📚</span><select id="dnBo" aria-label="Bộ từ"></select></label>' +
        '<button type="button" class="dn-btn" id="dnMau" title="Máy đọc mẫu từ ở nhịp đầu, cả lớp đọc theo"><span aria-hidden="true">🔊</span> Đọc mẫu: <b>Tắt</b></button>' +
        '<button type="button" class="dn-btn" id="dnPy" aria-pressed="false" title="Hiện / ẩn pinyin (phím P)">拼 Pinyin</button>' +
        '<button type="button" class="dn-btn" id="dnCaiNut" aria-expanded="false"><span aria-hidden="true">⚙</span> Sân khấu</button>' +
        '<span class="dn-gian"></span>' +
        '<button type="button" class="dn-btn dn-ic" id="dnFull" title="Toàn màn hình (F)" aria-label="Toàn màn hình">⛶</button>' +
        '<button type="button" class="dn-btn dn-ic" id="dnDong" title="Đóng" aria-label="Đóng">✕</button>' +
      '</header>' +
      '<main class="dn-san">' +
        '<div class="dn-dens" aria-hidden="true">' + den + '</div>' +
        '<div class="dn-bui" aria-hidden="true"></div>' +
        '<div class="dn-dung" hidden>Đã tạm dừng</div>' +
        '<div class="dn-nhan-bai"></div>' +
        '<div class="dn-giua">' +
          '<div class="dn-py" hidden></div>' +
          '<div class="dn-zh c1" lang="zh">—</div>' +
          '<div class="dn-vn"></div>' +
          '<div class="dn-nhips" aria-hidden="true">' +
            '<span class="dn-nhip">01</span><span class="dn-nhip">02</span><span class="dn-nhip">03</span><span class="dn-nhip">04</span>' +
          '</div>' +
          '<div class="dn-cue" aria-live="polite"></div>' +
          '<div class="dn-tiep"><span class="dn-tiep-nhan">Từ tiếp theo</span><b class="dn-tiep-zh" lang="zh"></b><span class="dn-tiep-py"></span><span class="dn-tiep-vn"></span></div>' +
        '</div>' +
        lv +
        '<div class="dn-het" hidden><div class="dn-het-the">' +
          '<div class="dn-het-ic" aria-hidden="true">🎉</div><b>Cả lớp đọc xong <span class="dn-het-so">0</span> từ!</b>' +
          '<div class="dn-het-nut"><button type="button" class="dn-go nho" id="dnLai">↺ Đọc lại</button>' +
          '<button type="button" class="dn-btn" id="dnLaiTron">🔀 Xáo trộn rồi đọc lại</button></div>' +
        '</div></div>' +
        '<div class="dn-bao" hidden></div>' +
        // bang cai dat san khau
        '<div class="dn-cai" hidden role="dialog" aria-label="Cài đặt sân khấu">' +
          '<div class="dn-cai-dau"><b>⚙ Sân khấu</b><button type="button" class="dn-btn dn-ic" id="dnCaiDong" aria-label="Đóng">✕</button></div>' +
          '<div class="dn-cai-hang"><span>Mỗi từ đọc</span><div class="dn-chon"><button type="button" data-st="beats" data-v="4">4 nhịp</button><button type="button" data-st="beats" data-v="8">8 nhịp (2 lượt)</button></div></div>' +
          '<div class="dn-cai-hang"><span>Số từ</span><div class="dn-chon"><button type="button" data-st="so" data-v="0">Tất cả</button><button type="button" data-st="so" data-v="10">10</button><button type="button" data-st="so" data-v="15">15</button><button type="button" data-st="so" data-v="20">20</button></div></div>' +
          '<div class="dn-cai-hang"><span>Hiển thị</span><div class="dn-chon">' +
            '<button type="button" data-st="nghia">Nghĩa tiếng Việt</button><button type="button" data-st="tiep">Từ tiếp theo</button>' +
            '<button type="button" data-st="lv">Linh vật</button></div></div>' +
          '<div class="dn-cai-hang"><span>Thứ tự</span><div class="dn-chon"><button type="button" data-st="tron">🔀 Xáo trộn</button><button type="button" data-st="lap">🔁 Lặp lại khi hết</button></div></div>' +
          '<div class="dn-cai-hang"><span>Lớp (chọn học sinh)</span><div class="dn-chon"><span class="dn-lop-ten" id="dnLopTen">chưa chọn</span><button type="button" id="dnDoiLop">Đổi lớp…</button></div></div>' +
          '<p class="dn-cai-meo">Phím tắt: <kbd>Space</kbd> bắt đầu / tạm dừng · <kbd>←</kbd> <kbd>→</kbd> từ trước / sau · <kbd>↑</kbd> <kbd>↓</kbd> tốc độ · <kbd>P</kbd> pinyin · <kbd>F</kbd> toàn màn hình</p>' +
        '</div>' +
        // bang chon lop
        '<div class="dn-lop" hidden role="dialog" aria-label="Chọn lớp">' +
          '<div class="dn-cai-dau"><b>👥 Chọn lớp để gọi học sinh</b><button type="button" class="dn-btn dn-ic" id="dnLopDong" aria-label="Đóng">✕</button></div>' +
          '<select id="dnLopSel" class="dn-lop-sel"></select>' +
          '<p class="dn-lop-rong" id="dnLopRong" hidden>Chưa có danh sách nào. Tạo danh sách nhanh trong <b>Gọi tên vui</b> / <b>UFO gọi trả bài</b>, hoặc nhập mật khẩu quản trị để lấy lớp trên hệ thống.</p>' +
          '<form id="dnLopPwHop" class="dn-lop-pw"><input type="password" id="dnLopPw" placeholder="Mật khẩu quản trị (lớp trên hệ thống)" autocomplete="current-password"><button type="submit" class="dn-btn">Mở</button></form>' +
          '<p class="dn-lop-err" id="dnLopErr" hidden></p>' +
          '<p class="dn-lop-meo">Bạn được đánh dấu vắng trong Điểm danh hôm nay sẽ không bị gọi. Gọi hết lượt cả lớp mới gọi lại.</p>' +
          '<button type="button" class="dn-go nho" id="dnLopOk">Dùng lớp này</button>' +
        '</div>' +
      '</main>' +
      '<footer class="dn-chan">' +
        '<div class="dn-chan-trai">' +
          '<button type="button" class="dn-btn dn-vuong" id="dnLamLai" title="Đọc lại từ đầu" aria-label="Đọc lại từ đầu">↺</button>' +
          '<button type="button" class="dn-btn dn-vuong" id="dnTruoc" title="Từ trước (←)" aria-label="Từ trước">⏮</button>' +
          '<span class="dn-dem" id="dnDem"><b>0</b>/0</span>' +
          '<button type="button" class="dn-btn dn-vuong" id="dnSau" title="Từ sau (→)" aria-label="Từ sau">⏭</button>' +
        '</div>' +
        '<button type="button" class="dn-go" id="dnGo"><span aria-hidden="true">▶</span> Bắt đầu</button>' +
        '<div class="dn-chan-phai"><div class="dn-tien-do" aria-hidden="true"><i></i></div></div>' +
      '</footer>';
    document.body.appendChild(root);

    $('#dnBpmTru').addEventListener('click', function () { doiBpm(-BPM_BUOC); });
    $('#dnBpmCong').addEventListener('click', function () { doiBpm(BPM_BUOC); });
    $('#dnNhipSw').addEventListener('click', function () { P.nhip = !P.nhip; luuPref(); veNut(); datTieng(); });
    $('#dnNhacSw').addEventListener('click', function () { P.nhac = !P.nhac; luuPref(); veNut(); datTieng(); });
    $('#dnMau').addEventListener('click', function () { P.mau = !P.mau; luuPref(); veNut(); if (!P.mau) imDoc(); });
    $('#dnPy').addEventListener('click', function () { P.py = !P.py; luuPref(); veTu(); veNut(); });
    $('#dnBo').addEventListener('change', function () { napBoTu(this.value); });
    $('#dnCaiNut').addEventListener('click', function () {
      var c = $('.dn-cai'); c.hidden = !c.hidden;
      this.setAttribute('aria-expanded', c.hidden ? 'false' : 'true');
      if (!c.hidden) veLopTen();
    });
    $('#dnCaiDong').addEventListener('click', function () { $('.dn-cai').hidden = true; $('#dnCaiNut').setAttribute('aria-expanded', 'false'); });
    $all('[data-st]').forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-st'), v = b.getAttribute('data-v');
        if (v != null) P[k] = typeof P[k] === 'number' ? +v : v; else P[k] = !P[k];
        luuPref();
        if (k === 'tron' || k === 'so') { if (S.chay) tamDung(); apBoTu(); }
        else { veTu(); veNut(); }
      });
    });
    $('#dnDoiLop').addEventListener('click', function () { $('.dn-cai').hidden = true; moLop(null); });
    $('#dnFull').addEventListener('click', toanManHinh);
    $('#dnDong').addEventListener('click', dong);
    $('#dnLamLai').addEventListener('click', lamLai);
    $('#dnTruoc').addEventListener('click', function () { denTu(S.i - 1); });
    $('#dnSau').addEventListener('click', function () { denTu(S.i + 1); });
    $('#dnGo').addEventListener('click', batTat);
    $('#dnLai').addEventListener('click', function () { $('.dn-het').hidden = true; S.xong = false; S.i = 0; veTu(); batDau(); });
    $('#dnLaiTron').addEventListener('click', function () { P.tron = true; luuPref(); apBoTu(); batDau(); });
    $all('[data-boc]').forEach(function (b) { b.addEventListener('click', function () { boc(+b.getAttribute('data-boc')); }); });
    $all('.dn-ten-x').forEach(function (b) { b.addEventListener('click', function () { xoaTen(+b.getAttribute('data-x')); }); });
    $('#dnLopDong').addEventListener('click', dongLop);
    $('#dnLopOk').addEventListener('click', chonLop);
    $('#dnLopPwHop').addEventListener('submit', guiMk);
    document.addEventListener('keydown', phim);
    // Space tren nut dang focus: trinh duyet "bam" nut luc nha phim -> chan de khong bat/tat hai lan
    document.addEventListener('keyup', function (e) {
      if (root && !root.hidden && e.key === ' ' && e.target && e.target.tagName === 'BUTTON' && root.contains(e.target)) e.preventDefault();
    });
    document.addEventListener('visibilitychange', function () { if (document.hidden && S.chay) tamDung(); });
    built = true;
  }

  function mo(opt) {
    opt = opt || {};
    napPref();
    if (!built) dung();
    if (window.NhacNen) window.NhacNen.tat();
    S.opt = opt;
    S.goc = []; S.tu = []; S.i = 0; S.xong = false; S.chay = false; S.daChay = false;
    $('.dn-het').hidden = true;
    $('.dn-cai').hidden = true;
    $('.dn-lop').hidden = true;
    $('.dn-nhan-bai').textContent = opt.nhan || '';
    [0, 1].forEach(xoaTen);
    if (!P.src && window.DiemDanh && window.DiemDanh.ganDay) P.src = window.DiemDanh.ganDay() || '';
    if (P.src && P.src !== S.dsSrc) napDs(P.src).catch(function () { /* chon lop khi bam */ });
    root.hidden = false;
    document.documentElement.classList.add('dn-open');
    veBoTu();
    veTu(); veNut(); xoaNhip();
    napBoTu('all');
  }
  function dong() {
    if (S.chay) tamDung();
    dungLich();
    imDoc();
    if (document.fullscreenElement && document.exitFullscreen) { try { document.exitFullscreen(); } catch (e) { /* bo qua */ } }
    if (ac && ac.suspend) { try { ac.suspend(); } catch (e) { /* bo qua */ } }
    if (root) root.hidden = true;
    document.documentElement.classList.remove('dn-open');
  }

  window.LopDocNhip = { mo: mo, dong: dong, _S: S, _P: P, _am: function () { return [ac && ac.state, coTieng]; } };
})();
