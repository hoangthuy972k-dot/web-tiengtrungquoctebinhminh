/* Doi khang keo co 1-1 — man chieu o Che do lop hoc.
   Giao vien mo phong (may chu: doikhang.js), hoc sinh quet QR vao /dk tren dien
   thoai. Bam "Bat dau": may ghep cap ngau nhien (le mot ban thi dau voi Ro-bot),
   moi cap cung bo cau, ai dung thi keo day ve phia minh; toi vach (+-5) la thang.
   Man chieu hien tat ca cac cap dang keo co, "Vong moi" ghep lai (tuy chon thang
   gap thang), "Ket thuc" hien bang vang. Mo bang window.LopDoiKhang.mo({ cau, nhan }). */
(function () {
  'use strict';

  var PREF_KEY = 'hyv_dk_pref';
  var MAX_CAU = 200;
  var NAC = 5;
  var GIAY = [60, 90, 120, 180, 300];

  var S = {
    built: false, room: null, poll: null, dem: null, info: null, pha: 'sanh',
    goc: [], cau: [], nhan: '', giay: 120, thang: false, sound: true,
    dsKy: '', capKy: '', capCu: {}, hetLuc: 0, dangGui: false, vongBao: 0
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
  function luuPref() { ghiLS(PREF_KEY, { giay: S.giay, thang: S.thang, sound: S.sound }); }
  function maDep(ma) { return String(ma).replace(/(\d{3})(\d{3})/, '$1 $2'); }
  function mmss(ms) { var s = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2); }

  /* ---------------- am thanh ---------------- */
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
  function sndVao() { tone(660, 0.08, 'triangle', 0.12); tone(990, 0.12, 'triangle', 0.1, 0.06); }
  function sndBatDau() { tone(392, 0.18, 'square', 0.08); tone(523, 0.18, 'square', 0.08, 0.18); tone(784, 0.4, 'square', 0.1, 0.36); }
  function sndKeo() { tone(300, 0.07, 'triangle', 0.05, 0, 220); }
  function sndThang() { tone(784, 0.12, 'triangle', 0.18); tone(988, 0.12, 'triangle', 0.18, 0.1); tone(1319, 0.3, 'triangle', 0.18, 0.2); }
  function sndHetVong() { [0, 0.22, 0.44].forEach(function (d) { tone(1175, 0.2, 'sine', 0.22, d); }); }

  /* ---------------- may chu ---------------- */
  function api(method, path, body) {
    var r = S.room;
    var url = '/api/dk/' + (path === 'tao' ? 'tao' : r.ma + '/' + path) + (method === 'GET' ? '?khoa=' + encodeURIComponent(r.khoa) : '');
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

  // Dap an dung trong du lieu (q.answer, thuong la 0) — tron, giu toi da 4 phuong an co dap an dung
  function chuanCau(q) {
    var dung = typeof q.answer === 'number' && q.answer >= 0 && q.answer < q.options.length ? q.answer : 0;
    var idx = q.options.map(function (_, i) { return i; }).filter(function (i) { return i !== dung; });
    idx = tron(tron(idx).slice(0, 3).concat([dung]));
    return {
      zh: (q.pre || '') + (q.noBlank ? '' : '＿＿') + (q.post || ''),
      ctx: q.context || '', why: q.why || '',
      opts: idx.map(function (i) { return String(q.options[i]); }),
      dung: idx.indexOf(dung)
    };
  }

  function moPhong() {
    S.cau = tron(S.goc).slice(0, MAX_CAU).map(chuanCau);
    return fetch('/api/dk/tao', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cau: S.cau, nhan: S.nhan, giay: S.giay })
    }).then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; }); })
      .then(function (d) {
        S.room = { ma: d.ma, khoa: d.khoa, tong: d.tong };
        S.poll = setInterval(tai, 900);
      });
  }
  function dongPhong() {
    clearInterval(S.poll);
    clearInterval(S.dem);
    if (S.room && S.pha !== 'het') api('POST', 'xong').catch(function () { /* bo qua */ });
    S.room = null;
    S.info = null;
  }

  function tai() {
    if (!S.room) return;
    var r = S.room;
    api('GET', 'gv').then(function (d) {
      if (S.room !== r) return;
      var cu = S.info;
      S.info = d;
      if (S.pha === 'sanh') veDsSanh(d);
      else if (S.pha === 'dau') capNhatDau(d, cu);
    }).catch(function () { /* mang chap chon: lan sau thu lai */ });
  }

  /* ---------------- dung khung ---------------- */
  function dung() {
    root = document.createElement('div');
    root.id = 'lopDoiKhang';
    root.className = 'ldk';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Đối kháng kéo co');
    root.innerHTML =
      '<header class="ldk-bar">' +
        '<b class="ldk-title">⚔️ Đối kháng kéo co</b>' +
        '<span class="ldk-sub" id="ldkSub"></span>' +
        '<span class="ldk-gap"></span>' +
        '<span class="ldk-phong" id="ldkPhong"></span>' +
        '<button type="button" class="ldk-btn ldk-ic" id="ldkSound"></button>' +
        '<button type="button" class="ldk-btn ldk-ic" id="ldkFull" title="Toàn màn hình (F)">⛶</button>' +
        '<button type="button" class="ldk-btn" id="ldkClose">✕ Đóng</button>' +
      '</header>' +
      '<div class="ldk-man" id="ldkMan"></div>';
    document.body.appendChild(root);
    $('#ldkSound').addEventListener('click', function () { S.sound = !S.sound; luuPref(); veNutTieng(); if (S.sound) sndVao(); });
    $('#ldkFull').addEventListener('click', toanManHinh);
    $('#ldkClose').addEventListener('click', hoiDong);
    // Uy quyen su kien cho moi nut trong vung chinh
    $('#ldkMan').addEventListener('click', bam);
    window.addEventListener('keydown', phim, true);
    S.built = true;
  }
  function veNutTieng() {
    var b = $('#ldkSound');
    b.textContent = S.sound ? '🔊' : '🔇';
    b.title = S.sound ? 'Đang bật tiếng — bấm để tắt' : 'Đang tắt tiếng — bấm để bật';
  }
  function veThanh() {
    $('#ldkSub').textContent = S.nhan || '';
    $('#ldkPhong').innerHTML = S.room && S.pha === 'dau' ? 'Phòng <b>' + maDep(S.room.ma) + '</b>' : '';
  }

  function bam(e) {
    var t = e.target.closest ? e.target.closest('[data-act],[data-pid],[data-giay]') : null;
    if (!t || t.disabled) return;
    if (t.hasAttribute('data-giay')) { S.giay = +t.getAttribute('data-giay'); luuPref(); veGiay(); return; }
    if (t.hasAttribute('data-pid')) { duoi(t.getAttribute('data-pid'), t.getAttribute('data-ten')); return; }
    var act = t.getAttribute('data-act');
    if (act === 'batdau') batDau();
    else if (act === 'vongmoi') { if (!(S.info && S.info.pha === 'choi') || confirm('Vòng này chưa xong — dừng lại và ghép cặp mới?')) batDau(); }
    else if (act === 'dungvong') dungVong();
    else if (act === 'ketthuc') ketThuc();
    else if (act === 'thang') { S.thang = !S.thang; luuPref(); t.classList.toggle('is-on', S.thang); t.setAttribute('aria-pressed', S.thang ? 'true' : 'false'); }
    else if (act === 'dong') dong();
    else if (act === 'thulai') batDauMo();
  }

  function duoi(pid, ten) {
    if (!S.room || !confirm('Mời "' + (ten || '') + '" ra khỏi phòng?')) return;
    api('POST', 'duoi', { pid: pid }).then(tai).catch(function (e) { alert(e.message); });
  }

  /* ---------------- sanh cho ---------------- */
  function linkVao() { return location.origin + '/dk?ma=' + S.room.ma; }
  function qrSvg(link) {
    try {
      if (typeof qrcode !== 'function') return '';
      var g = qrcode(0, 'M'); g.addData(link); g.make();
      return g.createSvgTag({ cellSize: 8, margin: 2, scalable: true });
    } catch (e) { return ''; }
  }
  function veSanh() {
    if (window.NhacNen) window.NhacNen.tat();
    S.pha = 'sanh';
    S.dsKy = '';
    veThanh();
    $('#ldkMan').innerHTML =
      '<div class="ldk-sanh">' +
        '<div class="ldk-qr-the">' +
          '<div class="ldk-qr">' + qrSvg(linkVao()) + '</div>' +
          '<div class="ldk-qr-lb">Quét mã hoặc vào <b>' + esc(location.host) + '/dk</b></div>' +
          '<div class="ldk-qr-lb">Mã phòng</div>' +
          '<div class="ldk-ma">' + maDep(S.room.ma) + '</div>' +
        '</div>' +
        '<div class="ldk-sanh-phai">' +
          '<div class="ldk-dem" id="ldkDem">Chưa có bạn nào vào</div>' +
          '<div class="ldk-ds" id="ldkDs"></div>' +
          '<div class="ldk-chinh">' +
            '<div class="ldk-chinh-dong"><span>Mỗi vòng</span><span class="ldk-giay" id="ldkGiay" role="group" aria-label="Thời gian mỗi vòng">' +
              GIAY.map(function (g) { return '<button type="button" data-giay="' + g + '">' + (g % 60 ? g + ' giây' : (g / 60) + ' phút') + '</button>'; }).join('') +
            '</span></div>' +
            '<p class="ldk-luat">💪 Đúng = kéo dây 1 nấc về phía mình · Sai = chờ 1,5 giây · Kéo tới vạch (5 nấc) là thắng, hết giờ thì ai kéo được nhiều hơn thắng. ' +
              'Lẻ một bạn sẽ đấu với Rô-bốt 🤖. ' + S.room.tong + ' câu hỏi.</p>' +
          '</div>' +
          '<p class="ldk-loi" id="ldkLoi" role="alert"></p>' +
          '<button type="button" class="ldk-go" data-act="batdau" id="ldkGo" disabled>Bắt đầu ▶ <kbd>Space</kbd></button>' +
        '</div>' +
      '</div>';
    veGiay();
    if (S.info) veDsSanh(S.info);
  }
  function veGiay() {
    $all('[data-giay]').forEach(function (b) {
      var on = +b.getAttribute('data-giay') === S.giay;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }
  function chipHtml(h) {
    return '<button type="button" class="ldk-hs" data-pid="' + esc(h.pid) + '" data-ten="' + esc(h.ten) + '" title="Bấm để mời bạn này ra">' + esc(h.ten) + '</button>';
  }
  function veDsSanh(d) {
    var ky = d.ds.map(function (h) { return h.pid; }).join(',');
    if (ky === S.dsKy || !$('#ldkDs')) return;
    if (S.dsKy && d.ds.length > S.dsKy.split(',').length) sndVao();
    S.dsKy = ky;
    $('#ldkDem').innerHTML = d.ds.length ? '<b>' + d.ds.length + '</b> bạn đã vào' + (d.ds.length % 2 ? ' <small>(lẻ — 1 bạn đấu Rô-bốt 🤖)</small>' : '') : 'Chưa có bạn nào vào';
    $('#ldkDs').innerHTML = d.ds.map(chipHtml).join('');
    $('#ldkGo').disabled = !d.ds.length;
  }

  /* ---------------- vong dau ---------------- */
  function batDau() {
    if (!S.room || S.dangGui) return;
    if (S.info && !S.info.soHs) { var l = $('#ldkLoi'); if (l) l.textContent = 'Chưa có bạn nào vào phòng.'; return; }
    S.dangGui = true;
    api('POST', 'batdau', { xep: S.thang && S.info && S.info.vong ? 'thang' : 'ngaunhien', giay: S.giay }).then(function () {
      S.dangGui = false;
      sndBatDau();
      veKhungDau();
      tai();
    }).catch(function (e) {
      S.dangGui = false;
      var l = $('#ldkLoi');
      if (l) l.textContent = e.message; else alert(e.message);
    });
    if (window.NhacNen) window.NhacNen.bat({ kieu: 'gap' });
  }
  function dungVong() {
    if (!S.room) return;
    api('POST', 'dungvong').then(tai).catch(function () { /* bo qua */ });
  }

  function veKhungDau() {
    S.pha = 'dau';
    S.capKy = '';
    S.capCu = {};
    veThanh();
    $('#ldkMan').innerHTML =
      '<div class="ldk-dau">' +
        '<div class="ldk-dau-tren">' +
          '<div class="ldk-vong" id="ldkVong"></div>' +
          '<div class="ldk-gio" id="ldkGio"></div>' +
          '<div class="ldk-tien" id="ldkTien"></div>' +
          '<span class="ldk-gap"></span>' +
          '<div class="ldk-vao-nho"><span class="ldk-vao-qr">' + qrSvg(linkVao()) + '</span><span>Vào muộn?<br><b>' + esc(location.host) + '/dk</b><br>Mã <b>' + maDep(S.room.ma) + '</b></span></div>' +
        '</div>' +
        '<div class="ldk-bao" id="ldkBao" hidden></div>' +
        '<div class="ldk-luoi" id="ldkLuoi"></div>' +
        '<div class="ldk-cho" id="ldkCho" hidden></div>' +
        '<div class="ldk-dau-duoi">' +
          '<button type="button" class="ldk-btn" data-act="dungvong" id="ldkDung">⏹ Dừng vòng</button>' +
          '<span class="ldk-gap"></span>' +
          '<button type="button" class="ldk-btn ldk-bat' + (S.thang ? ' is-on' : '') + '" data-act="thang" aria-pressed="' + (S.thang ? 'true' : 'false') + '" title="Vòng sau: người thắng gặp người thắng">🏆 Thắng gặp thắng</button>' +
          '<span class="ldk-giay ldk-giay-nho" role="group" aria-label="Thời gian mỗi vòng">' +
            GIAY.map(function (g) { return '<button type="button" data-giay="' + g + '">' + (g % 60 ? g + 's' : (g / 60) + "'") + '</button>'; }).join('') +
          '</span>' +
          '<button type="button" class="ldk-go ldk-go-sm" data-act="vongmoi" id="ldkVongMoi">↻ Vòng mới</button>' +
          '<button type="button" class="ldk-btn ldk-btn-dam" data-act="ketthuc">🏁 Kết thúc</button>' +
        '</div>' +
      '</div>';
    veGiay();
    if (S.info) capNhatDau(S.info, null);
  }

  function capHtml(c) {
    return '<div class="ldk-cap" data-cap="' + c.id + '">' +
      '<div class="ldk-cap-ten">' +
        '<span class="ldk-cap-a"><b>' + esc(c.a.ten) + '</b></span>' +
        '<span class="ldk-cap-vs">VS</span>' +
        '<span class="ldk-cap-b"><b>' + esc(c.b.ten) + '</b></span>' +
      '</div>' +
      '<div class="ldk-cap-day"><span class="ldk-cap-vach"></span><span class="ldk-cap-thung"></span><span class="ldk-cap-co">🎀</span></div>' +
      '<div class="ldk-cap-so"><i class="ldk-so-a">0</i><span class="ldk-cap-kq"></span><i class="ldk-so-b">0</i></div>' +
    '</div>';
  }
  var LY = { keo: 'kéo tới vạch', gio: 'hết giờ', hetcau: 'hết câu', dung: 'dừng vòng', bocuoc: 'đối thủ rời trận' };

  function capNhatDau(d, cu) {
    if (!$('#ldkLuoi')) return;
    if (d.pha === 'het') { veHet(d.bxh || []); return; }
    $('#ldkVong').textContent = 'Vòng ' + d.vong;
    var ky = d.cap.map(function (c) { return c.id; }).join(',');
    var luoi = $('#ldkLuoi');
    if (ky !== S.capKy) {
      S.capKy = ky;
      S.capCu = {};
      luoi.innerHTML = d.cap.map(capHtml).join('');
      luoi.className = 'ldk-luoi n' + Math.min(d.cap.length, 40);
    }
    var xong = 0, coKeo = false, coThang = false;
    d.cap.forEach(function (c) {
      var el = luoi.querySelector('[data-cap="' + c.id + '"]');
      if (!el) return;
      var x = 50 - Math.max(-NAC, Math.min(NAC, c.day)) * (40 / NAC);
      el.querySelector('.ldk-cap-co').style.left = x + '%';
      el.querySelector('.ldk-so-a').textContent = c.a.keo;
      el.querySelector('.ldk-so-b').textContent = c.b.keo;
      var truoc = S.capCu[c.id];
      if (truoc && truoc.day !== c.day) {
        el.classList.remove('keo-a', 'keo-b');
        void el.offsetWidth;
        el.classList.add(c.day > truoc.day ? 'keo-a' : 'keo-b');
        coKeo = true;
      }
      if (c.thang) {
        xong++;
        if (truoc && !truoc.thang) coThang = true;
        el.classList.add('xong');
        el.classList.toggle('thang-a', c.thang === 'a');
        el.classList.toggle('thang-b', c.thang === 'b');
        el.classList.toggle('hoa', c.thang === 'hoa');
        var ten = c.thang === 'a' ? c.a.ten : c.thang === 'b' ? c.b.ten : '';
        el.querySelector('.ldk-cap-kq').innerHTML = c.thang === 'hoa' ? '🤝 Hòa' : '🏆 ' + esc(ten) + ' thắng' + (LY[c.lyDo] ? ' <small>· ' + LY[c.lyDo] + '</small>' : '');
      } else {
        el.querySelector('.ldk-cap-kq').innerHTML = Math.abs(c.day) >= 3 ? '🔥 ' + esc(c.day > 0 ? c.a.ten : c.b.ten) + ' sắp thắng!' : '';
      }
      el.classList.toggle('roi-a', !!c.a.roi);
      el.classList.toggle('roi-b', !!c.b.roi);
      S.capCu[c.id] = { day: c.day, thang: c.thang };
    });
    if (coThang) sndThang(); else if (coKeo) sndKeo();
    $('#ldkTien').innerHTML = '<b>' + xong + '</b>/' + d.cap.length + ' cặp xong';
    // dong ho vong
    var dangDau = d.pha === 'choi';
    clearInterval(S.dem);
    if (dangDau) {
      S.hetLuc = Date.now() + d.conLai;
      var paint = function () {
        var con = S.hetLuc - Date.now();
        var g = $('#ldkGio');
        if (!g) return;
        g.textContent = '⏱ ' + mmss(con);
        g.classList.toggle('thap', con <= 10000);
      };
      paint();
      S.dem = setInterval(paint, 250);
    } else {
      $('#ldkGio').textContent = '⏱ 0:00';
      $('#ldkGio').classList.remove('thap');
    }
    $('#ldkDung').hidden = !dangDau;
    var bao = $('#ldkBao');
    if (d.pha === 'nghi') {
      if (S.vongBao !== d.vong) { S.vongBao = d.vong; if (cu) sndHetVong(); }
      var top = (d.bxh || []).slice(0, 5);
      bao.hidden = false;
      bao.innerHTML = '<span><b>Hết vòng ' + d.vong + '!</b> Bấm <b>↻ Vòng mới</b> (Space) để ghép cặp lại hoặc <b>🏁 Kết thúc</b>.</span>' +
        (top.length ? '<span class="ldk-bao-top">' + top.map(function (r, i) {
          return '<span>' + (['🥇', '🥈', '🥉'][i] || (i + 1) + '.') + ' ' + esc(r.ten) + ' <small>' + r.thang + '🏆 · ' + r.keo + ' kéo</small></span>';
        }).join('') + '</span>' : '');
    } else bao.hidden = true;
    // ban vao muon / dang cho vong sau
    var cho = d.ds.filter(function (h) { return h.cho; });
    var hc = $('#ldkCho');
    hc.hidden = !cho.length;
    hc.innerHTML = cho.length ? '<span>⏳ Chờ vòng sau:</span>' + cho.map(chipHtml).join('') : '';
  }

  /* ---------------- ket thuc ---------------- */
  function ketThuc() {
    if (!S.room) return;
    if (S.info && S.info.pha === 'choi' && !confirm('Vòng đang đấu — kết thúc luôn và xem bảng vàng?')) return;
    api('POST', 'xong').then(function (d) {
      S.pha = 'het';
      clearInterval(S.poll);
      clearInterval(S.dem);
      veHet(d.bxh || []);
      sndThang();
    }).catch(function (e) { alert(e.message); });
  }
  function veHet(bxh) {
    if (window.NhacNen) window.NhacNen.tat();
    S.pha = 'het';
    clearInterval(S.poll);
    clearInterval(S.dem);
    veThanh();
    var bucMau = ['vang', 'bac', 'dong'];
    var thuTu = [1, 0, 2]; // bac - vang - dong tren buc
    var top = bxh.slice(0, 3);
    $('#ldkMan').innerHTML =
      '<div class="ldk-het">' +
        '<h2 class="ldk-het-tit">🏆 Bảng vàng đối kháng</h2>' +
        (top.length ? '<div class="ldk-buc">' + thuTu.filter(function (i) { return top[i]; }).map(function (i) {
          var r = top[i];
          return '<div class="ldk-buc-o ' + bucMau[i] + '"><div class="ldk-buc-ten">' + esc(r.ten) + '</div>' +
            '<div class="ldk-buc-so">' + r.thang + ' trận thắng · ' + r.keo + ' lần kéo</div>' +
            '<div class="ldk-buc-cot">' + (i + 1) + '</div></div>';
        }).join('') + '</div>' : '<p class="ldk-luat">Chưa có ai thi đấu.</p>') +
        (bxh.length ? '<div class="ldk-bang"><div class="ldk-bang-r ldk-bang-dau"><span>#</span><span>Tên</span><span>Thắng</span><span>Hòa</span><span>Trận</span><span>Kéo</span><span>Đúng</span></div>' +
          bxh.map(function (r) {
            var tl = r.dung + r.sai;
            return '<div class="ldk-bang-r"><span>' + r.hang + '</span><span class="ldk-bang-ten">' + esc(r.ten) + '</span><span><b>' + r.thang + '</b></span><span>' + r.hoa + '</span><span>' + r.tran + '</span><span>' + r.keo + '</span><span>' + (tl ? Math.round(r.dung * 100 / tl) + '%' : '–') + '</span></div>';
          }).join('') + '</div>' : '') +
        '<div class="ldk-het-nut"><button type="button" class="ldk-go" data-act="dong">Xong</button></div>' +
      '</div>';
  }

  /* ---------------- mo / dong / phim tat ---------------- */
  function toanManHinh() {
    if (document.fullscreenElement) { if (document.exitFullscreen) document.exitFullscreen(); }
    else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* bo qua */ });
  }
  function phim(e) {
    if (!root || root.hidden) return;
    if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
    e.stopImmediatePropagation();
    if (e.key === 'Escape') {
      if (!document.fullscreenElement) hoiDong();
      return;
    }
    if (e.code === 'Space') {
      e.preventDefault();
      if (S.pha === 'sanh' && S.info && S.info.soHs) batDau();
      else if (S.pha === 'dau' && S.info && S.info.pha === 'nghi') batDau();
    } else if (e.key === 'f' || e.key === 'F') {
      toanManHinh();
    }
  }
  function hoiDong() {
    if (S.room && S.pha === 'dau' && S.info && S.info.soHs && !confirm('Đóng màn đối kháng? Phòng sẽ kết thúc.')) return;
    dong();
  }

  function batDauMo() {
    $('#ldkMan').innerHTML = '<p class="ldk-cho-mo">Đang mở phòng…</p>';
    moPhong().then(veSanh).catch(function (e) {
      $('#ldkMan').innerHTML = '<div class="ldk-trong"><p>Chưa mở được phòng: ' + esc(e.message) + '</p>' +
        '<button type="button" class="ldk-go" data-act="thulai">Thử lại</button></div>';
    });
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    if (S.room) dongPhong();
    var p = docLS(PREF_KEY, {});
    S.giay = GIAY.indexOf(p.giay) >= 0 ? p.giay : 120;
    S.thang = !!p.thang;
    S.sound = p.sound !== false;
    S.goc = (opt.cau || []).filter(function (q) {
      return q && Array.isArray(q.options) && q.options.length >= 2;
    });
    S.nhan = opt.nhan || '';
    S.pha = 'sanh';
    S.info = null;
    S.vongBao = 0;
    root.hidden = false;
    document.documentElement.classList.add('ldk-open');
    veNutTieng();
    veThanh();
    if (!S.goc.length) {
      $('#ldkMan').innerHTML = '<div class="ldk-trong"><p>Bài này chưa có câu trắc nghiệm nào để đấu.</p>' +
        '<button type="button" class="ldk-go" data-act="dong">Đóng</button></div>';
      return;
    }
    batDauMo();
  }
  function dong() {
    if (window.NhacNen) window.NhacNen.tat();
    if (!root) return;
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    dongPhong();
    root.hidden = true;
    S.pha = 'sanh';
    document.documentElement.classList.remove('ldk-open');
  }

  window.LopDoiKhang = { mo: mo, dong: dong };
})();
