/* Thi tro choi tren dien thoai — man chieu (Che do lop hoc). May chu: live.js phong kieu 'tro'.
   Dung cho hai tro "Tu ngu biet bay" (tro 'bay', cau sap xep) va "Doan tau tri thuc" (tro 'doantau',
   cau trac nghiem). Giao vien chon cai dat o man cai dat cu cua tro (so doi, ten doi, so cau / do dai,
   toc do / muc do) roi bam Bat dau -> mo phong nay, chieu ma QR; hoc sinh vao /choi, nhap ten, chon to.
   Bam "Bat dau": may chu giu bo cau giao vien chon, moi dien thoai mo dung tro do o che do mot nguoi
   (lop-bay.js / lop-doantau.js — cung duong choi voi /game) va bao tien do / diem len.
   Chia to: moi to mot lan mau, diem to = trung binh diem thanh vien + thuong "ca to cung xong" (+20);
   tung ban la mot the nho (cau x/N, xanh khi xong), to con cho ban thi hien "Con 2 ban".
   Ca lop (khong chia to): bang xep hang ca nhan co thanh tien do. Ai cung xong (hoac co bam Ket thuc):
   buc trao giai; "Choi lai" giu nguyen cai dat va phong.
   Mo bang window.LopTro.mo({ tro: 'bay' | 'doantau', cau, nhan, cfg, caiDat }) —
   cfg: { soTo, ten[], so, toc, nhieu } (bay) | { soTo, ten[], soToa, muc } (doan tau); caiDat(): mo lai man cai dat. */
(function () {
  'use strict';
  var PREF = 'hyv_tro_pref';
  var MAU_TO = ['#e0573f', '#3f88c5', '#4f9d69', '#e8a33d'];
  var TRO = {
    bay: { ten: 'Từ ngữ biết bay', emoji: '🦋', zh: '会飞的词语', loai: 'câu sắp xếp' },
    doantau: { ten: 'Đoàn tàu tri thức', emoji: '🚂', zh: '知识火车', loai: 'câu trắc nghiệm' }
  };
  var TOC = { cham: '🐢 Chậm', vua: '🦋 Vừa', nhanh: '🐝 Nhanh' };
  var MUC = { de: '🌱 Dễ', vua: '⭐ Vừa', kho: '🔥 Khó' };
  var S = { built: false, tro: 'bay', goc: [], nhan: '', cfg: null, caiDat: null, room: null, poll: 0, info: null, pha: 'sanh',
    dsKy: '', su: 0, sound: true, bd: 0, gio: 0, soXong: 0, tong: 0 };
  var root;
  function $(sel) { return root.querySelector(sel); }
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
  function maDep(ma) { return String(ma).replace(/(\d{3})(\d{3})/, '$1 $2'); }
  function qrSvg(link) {
    try { var g = window.qrcode(0, 'M'); g.addData(link); g.make(); return g.createSvgTag({ cellSize: 8, margin: 2, scalable: true }); }
    catch (e) { return ''; }
  }
  function gioDep(giay) { giay = Math.max(0, giay | 0); return (giay < 600 ? '0' : '') + Math.floor(giay / 60) + ':' + (giay % 60 < 10 ? '0' : '') + giay % 60; }
  function huy(hang) { return ['🥇', '🥈', '🥉'][hang - 1] || hang; }
  function coTo() { return !!(S.cfg && S.cfg.soTo > 1 && S.cfg.ten.length > 1); }

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
  function sndBatDau() { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, 0.18, 'triangle', 0.14, i * 0.1); }); }
  function sndXong() { tone(880, 0.1, 'triangle', 0.1); tone(1320, 0.18, 'triangle', 0.1, 0.08); }
  function sndThuong() { [784, 988, 1175, 1568].forEach(function (f, i) { tone(f, 0.16, 'triangle', 0.13, i * 0.08); }); }
  function sndKen() { [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.15, i * 0.11); }); tone(1568, 0.7, 'triangle', 0.12, 0.6); }

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

  /* ---------------- khung ---------------- */
  function dung() {
    root = document.createElement('section');
    root.className = 'ltr';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.innerHTML = '<div class="ltr-nen" aria-hidden="true"><span class="ltr-may m1"></span><span class="ltr-may m2"></span><span class="ltr-doi"></span></div>' +
      '<header class="ltr-bar"><span class="ltr-tit" id="ltrTit"></span><span class="ltr-nhan" id="ltrNhan"></span>' +
      '<span class="ltr-gian"></span><button type="button" class="ltr-nut-nho" data-act="tieng" id="ltrTieng">🔊</button>' +
      '<button type="button" class="ltr-nut-nho" data-act="full">⛶ Toàn màn hình</button><button type="button" class="ltr-nut-nho" data-act="dong">✕ Đóng</button></header>' +
      '<div class="ltr-man" id="ltrMan"></div><div class="ltr-toast" id="ltrToast" aria-live="polite" hidden></div>';
    document.body.appendChild(root);
    root.addEventListener('click', bam);
    S.built = true;
  }
  function bam(e) {
    var b = e.target.closest('[data-act]');
    if (!b || b.disabled) return;
    var a = b.getAttribute('data-act');
    if (a === 'dong') dong();
    else if (a === 'full') { try { if (document.fullscreenElement) document.exitFullscreen(); else root.requestFullscreen(); } catch (er) { /* bo qua */ } }
    else if (a === 'tieng') { S.sound = !S.sound; ghiLS(PREF, { sound: S.sound }); $('#ltrTieng').textContent = S.sound ? '🔊' : '🔇'; }
    else if (a === 'batdau') batDau(b);
    else if (a === 'ketthuc') ketThuc();
    else if (a === 'lai') batDau(b);
    else if (a === 'caidat') { var f = S.caiDat; dong(); if (f) f(); }
    else if (a === 'duoi') duoi(b);
  }

  /* ---------------- phong ---------------- */
  function moPhong() {
    S.pha = 'sanh'; S.info = null; S.dsKy = ''; S.su = 0; S.soXong = 0;
    $('#ltrMan').innerHTML = '<p class="ltr-cho">Đang mở phòng…</p>';
    S.room = { ma: '', khoa: '' };
    return fetch('/api/live/tao', { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kieu: 'tro', tro: S.tro, to: coTo() ? S.cfg.ten : [] }) })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; }); })
      .then(function (d) {
        S.room = { ma: d.ma, khoa: d.khoa };
        veSanh();
        batPoll();
      })
      .catch(function (e) { $('#ltrMan').innerHTML = '<p class="ltr-cho">Chưa mở được phòng: ' + esc(e.message) + '</p>'; S.room = null; });
  }
  function batPoll() { clearInterval(S.poll); S.poll = setInterval(tai, 1500); tai(); }
  function dongPhong() {
    clearInterval(S.poll);
    clearInterval(S.gio);
    // dong han phong: dien thoai thoi cho "Choi lai"
    if (S.room && S.room.ma) api('POST', 'xong', { dong: true }).catch(function () { /* bo qua */ });
    S.room = null;
  }
  function tai() {
    if (!S.room || !S.room.ma) return;
    var room = S.room;
    api('GET', 'gv').then(function (d) {
      if (S.room !== room) return;
      var cu = S.info;
      S.info = d;
      if (S.pha === 'sanh') {
        var ky = d.ds.map(function (x) { return x.pid + ':' + x.to; }).join(',');
        if (ky !== S.dsKy) { if (cu && d.ds.length > cu.ds.length) sndVao(); S.dsKy = ky; veDsSanh(); }
      } else if (S.pha === 'choi') {
        veBang();
        // ai cung choi xong: may chu tu ket thuc van
        if (d.pha === 'het') veHet(d.bxh, d.to || []);
      }
    }).catch(function () { /* mang chap chon: lan sau thu lai */ });
  }
  function duoi(b) {
    if (!confirm('Mời "' + b.getAttribute('data-ten') + '" ra khỏi phòng?')) return;
    api('POST', 'duoi', { pid: b.getAttribute('data-pid') }).then(tai).catch(function (e) { alert(e.message); });
  }

  /* ---------------- sanh cho ---------------- */
  function tomTat() {
    var c = S.cfg, o = [];
    if (S.tro === 'bay') { o.push('Mỗi em ' + c.so + ' câu'); o.push('Tốc độ ' + (TOC[c.toc] || TOC.vua)); if (c.nhieu) o.push('+' + c.nhieu + ' từ gây nhiễu'); }
    else { o.push('Đoàn tàu ' + c.soToa + ' toa'); o.push('Mức ' + (MUC[c.muc] || MUC.vua)); }
    o.push(coTo() ? c.ten.length + ' tổ thi đua' : 'Cả lớp — xếp hạng từng bạn');
    return o.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('');
  }
  function veSanh() {
    var t = TRO[S.tro];
    var link = location.origin + '/choi?ma=' + S.room.ma;
    var luat = (S.tro === 'bay'
      ? 'Trên điện thoại của mỗi em, các từ của câu bay lượn như bướm — chạm từng từ <b>theo đúng thứ tự</b> để xếp thành câu. Mỗi câu tối đa 100 điểm (−15 mỗi lần chạm sai, −2 mỗi giây quá chậm, ít nhất 10).'
      : 'Mỗi em nối một đoàn tàu trên điện thoại: đáp án ở đầu toa phải khớp câu hỏi trên toa đứng trước. Nối đúng nhanh, ít lần kiểm tra sai thì nhiều điểm.') +
      (coTo() ? ' <b>Điểm tổ = trung bình điểm các bạn</b> + ' + (S.tro === 'bay' ? '20 mỗi khi cả tổ cùng xong một câu' : '20 khi cả tổ cùng về ga') + ' — không bỏ bạn nào lại phía sau!' : '');
    $('#ltrMan').innerHTML = '<div class="ltr-sanh">' +
      '<div class="ltr-qr-the"><div class="ltr-qr">' + qrSvg(link) + '</div>' +
        '<p>Quét mã hoặc vào <b>' + esc(location.host) + '/choi</b></p><p class="ltr-lb">Mã phòng</p><p class="ltr-ma">' + maDep(S.room.ma) + '</p></div>' +
      '<div class="ltr-sanh-phai">' +
        '<h2>' + t.emoji + ' ' + t.ten + ' <span lang="zh">' + t.zh + '</span></h2>' +
        '<p class="ltr-luat">📱 ' + luat + '</p>' +
        '<div class="ltr-tomtat">' + tomTat() + (S.caiDat ? '<button type="button" class="ltr-nut-nho" data-act="caidat">⚙ Đổi cài đặt</button>' : '') + '</div>' +
        '<div class="ltr-dem" id="ltrDem"></div>' +
        '<div id="ltrDs"></div>' +
        '<button type="button" class="ltr-go" data-act="batdau" id="ltrGo">▶ Bắt đầu</button>' +
      '</div></div>';
    veDsSanh();
  }
  function chipHs(x, i) {
    return '<button type="button" class="ltr-hs" data-act="duoi" data-pid="' + esc(x.pid) + '" data-ten="' + esc(x.ten) + '" title="Bấm để mời bạn này ra" style="--i:' + (i % 8) + '">' + esc(x.ten) + '</button>';
  }
  function veDsSanh() {
    var el = $('#ltrDs');
    if (!el) return;
    var ds = S.info ? S.info.ds : [];
    $('#ltrDem').innerHTML = ds.length ? '<b>' + ds.length + '</b> bạn đã vào phòng' : 'Chưa có bạn nào vào — mở điện thoại quét mã QR nhé!';
    if (coTo()) {
      var chua = ds.filter(function (x) { return x.to < 0; });
      el.innerHTML = '<div class="ltr-sanh-to" style="--n:' + S.cfg.ten.length + '">' + S.cfg.ten.map(function (ten, i) {
        var tv = ds.filter(function (x) { return x.to === i; });
        return '<div class="ltr-sanh-lan" style="--c:' + MAU_TO[i] + '"><div class="ltr-lan-ten">' + esc(ten) + ' <small>' + tv.length + ' bạn</small></div>' +
          '<div class="ltr-lan-tv">' + (tv.map(chipHs).join('') || '<em>Chưa có ai</em>') + '</div></div>';
      }).join('') + '</div>' +
        (chua.length ? '<p class="ltr-chua">Đang chọn tổ: ' + chua.map(function (x) { return esc(x.ten); }).join(', ') + '</p>' : '');
    } else {
      el.innerHTML = '<div class="ltr-ds">' + ds.map(chipHs).join('') + '</div>';
    }
    var go = $('#ltrGo');
    var san = ds.filter(function (x) { return !coTo() || x.to >= 0; }).length;
    if (go) { go.disabled = !san; go.textContent = san ? '▶ Bắt đầu (' + san + ' bạn)' : '▶ Bắt đầu'; }
  }

  /* ---------------- chon bo cau gui cho dien thoai ---------------- */
  function dapCua(q) { return String(q.options[q.answer]).trim(); }
  // Doan tau: uu tien cau ngan, dap an khac nhau (giong lop-doantau.js chonCau)
  function chonTau(ds, K) {
    var ngan = [], dai = [];
    tron(ds).forEach(function (q) {
      (String(q.pre || '').length + String(q.post || '').length <= 24 && dapCua(q).length <= 8 ? ngan : dai).push(q);
    });
    var thu = ngan.concat(dai), chon = [], daCo = {};
    thu.forEach(function (q) { var d = dapCua(q); if (chon.length < K && !daCo[d]) { chon.push(q); daCo[d] = 1; } });
    thu.forEach(function (q) { if (chon.length < K && chon.indexOf(q) < 0) chon.push(q); });
    return chon;
  }
  function boCau() {
    if (S.tro === 'bay') {
      return tron(S.goc).slice(0, Math.max(2, Math.min(S.cfg.so || 8, 100))).map(function (q) {
        return { words: q.words, answer: q.answer, context: q.context || '', why: q.why || '' };
      });
    }
    return chonTau(S.goc, Math.max(2, Math.min(7, (S.cfg.soToa || 6) - 1))).map(function (q) {
      return { pre: q.pre || '', post: q.post || '', options: q.options, answer: q.answer, noBlank: !!q.noBlank, context: q.context || '', why: q.why || '' };
    });
  }
  // Bat dau (hoac Choi lai: van moi cung phong, cung cai dat, bo cau boc lai)
  function batDau(b) {
    var nhan = b.textContent;
    b.disabled = true;
    b.textContent = 'Đang gửi câu hỏi…';
    api('POST', 'batdau', { cau: boCau(), toc: S.cfg.toc, nhieu: S.cfg.nhieu || 0, muc: S.cfg.muc }).then(function (r) {
      S.pha = 'choi'; S.su = -1; S.soXong = 0;
      S.bd = Date.now();
      S.tong = r.tong;
      sndBatDau();
      veKhungChoi();
      batPoll();
    }).catch(function (e) { b.disabled = false; b.textContent = nhan; alert(e.message); });
  }

  /* ---------------- dang choi ---------------- */
  function veKhungChoi() {
    var t = TRO[S.tro];
    var link = location.origin + '/choi?ma=' + S.room.ma;
    var moiEm = S.tro === 'bay' ? 'Mỗi em ' + S.tong + ' câu' : 'Mỗi em một đoàn tàu ' + (S.tong + 1) + ' toa';
    $('#ltrMan').innerHTML = '<div class="ltr-choi">' +
      '<div class="ltr-chinh">' +
        '<div class="ltr-tk"><span class="ltr-tk-o">' + t.emoji + ' ' + moiEm + '</span>' +
          '<span class="ltr-tk-o">🏁 <b id="ltrXong">0</b> / <span id="ltrSoHs">0</span> bạn xong</span>' +
          '<span class="ltr-tk-o">⏱ <b id="ltrGio">00:00</b></span></div>' +
        (coTo() ? '<div class="ltr-lan" id="ltrLan" style="--n:' + S.cfg.ten.length + '"></div>' : '<div class="ltr-bang" id="ltrBang"></div>') +
      '</div>' +
      '<aside class="ltr-ben">' +
        '<div class="ltr-ben-qr">' + qrSvg(link) + '<span>Vào muộn? Quét mã hoặc vào ' + esc(location.host) + '/choi — mã <b>' + maDep(S.room.ma) + '</b></span></div>' +
        '<div class="ltr-ben-h">📣 Diễn biến</div><div class="ltr-tin" id="ltrTin"></div>' +
        '<button type="button" class="ltr-go" data-act="ketthuc">🏁 Kết thúc &amp; trao giải</button>' +
      '</aside></div>';
    clearInterval(S.gio);
    S.gio = setInterval(function () { var g = root && $('#ltrGio'); if (g && S.pha === 'choi') g.textContent = gioDep((Date.now() - S.bd) / 1000); }, 500);
  }
  function veBang() {
    var d = S.info;
    if (!d || !$('#ltrXong')) return;
    $('#ltrXong').textContent = d.soXong;
    $('#ltrSoHs').textContent = d.soHs;
    if (d.soXong > S.soXong) sndXong();
    S.soXong = d.soXong;
    if (coTo()) veLan(d); else veCaNhan(d);
    var su = d.su || [];
    // tin moi "ca to cung xong" -> hien noi bat giua man chieu
    if (S.su === -1) S.su = 0;
    su.slice().reverse().forEach(function (x) { if (x.id > S.su && x.to != null) baoToast(x.txt, x.to); });
    if (su.length) S.su = Math.max(S.su, su[0].id);
    $('#ltrTin').innerHTML = su.slice(0, 7).map(function (x) { return '<p' + (x.to != null ? ' style="--c:' + MAU_TO[x.to] + '" class="is-to"' : '') + '>' + esc(x.txt) + '</p>'; }).join('') || '<p>Các bạn đang chơi…</p>';
  }
  var henToast = 0;
  function baoToast(txt, to) {
    var t = $('#ltrToast');
    t.textContent = txt;
    t.style.setProperty('--c', MAU_TO[to] || '#e8a33d');
    t.hidden = false;
    t.classList.remove('is-hien'); void t.offsetWidth; t.classList.add('is-hien');
    sndThuong();
    clearTimeout(henToast);
    henToast = setTimeout(function () { t.hidden = true; }, 2800);
  }
  // Moi to mot lan: diem to (trung binh + thuong), con cho bao nhieu ban, the tung thanh vien
  function veLan(d) {
    var el = $('#ltrLan');
    if (!el) return;
    el.innerHTML = (d.to || []).map(function (x) {
      var con = x.soTv - x.soXong;
      var trang = !x.soTv ? '<span class="ltr-lan-tt">Chưa có bạn</span>'
        : con ? '<span class="ltr-lan-tt is-cho">⏳ Còn ' + con + ' bạn — cố lên!</span>'
        : '<span class="ltr-lan-tt is-xong">✓ Cả tổ đã xong</span>';
      return '<div class="ltr-lan-o' + (x.hang === 1 && x.diem > 0 ? ' is-nhat' : '') + '" style="--c:' + MAU_TO[x.i] + ';order:' + x.hang + '">' +
        '<div class="ltr-lan-dau"><span class="ltr-lan-hang">' + (x.diem > 0 ? huy(x.hang) : '🚩') + '</span><b class="ltr-lan-ten">' + esc(x.ten) + '</b>' +
          '<span class="ltr-lan-diem"><b>' + x.diem + '</b><small>TB ' + x.tb + (x.thuong ? ' + 🎉' + x.thuong : '') + '</small></span></div>' +
        trang +
        '<div class="ltr-lan-tv">' + x.tv.map(function (m) {
          var pt = m.xong ? 100 : S.tong ? Math.round(m.lam / S.tong * 100) : 0;
          return '<span class="ltr-the' + (m.xong ? ' is-xong' : '') + '" style="--p:' + pt + '%"><b>' + esc(m.ten) + '</b><i>' +
            (m.xong ? '✓ ' + m.diem : (S.tro === 'bay' ? 'câu ' + Math.min(m.lam + 1, S.tong) + '/' + S.tong : m.lam + '/' + S.tong + ' nối')) + '</i></span>';
        }).join('') + '</div>' +
      '</div>';
    }).join('');
  }
  // Ca lop: cap nhat tung dong theo pid (giu phan tu de thanh tien do chay muot), xep bang 'order'
  function veCaNhan(d) {
    var el = $('#ltrBang');
    if (!el) return;
    el.classList.toggle('is-hai', d.bxh.length > 10);
    var co = {};
    if (!d.bxh.length) { el.innerHTML = '<p class="ltr-cho">Chưa có bạn nào vào phòng.</p>'; }
    else { var p0 = el.querySelector('.ltr-cho'); if (p0) p0.remove(); }
    d.bxh.forEach(function (r, i) {
      co[r.pid] = 1;
      var row = el.querySelector('[data-pid="' + r.pid + '"]');
      if (!row) {
        row = document.createElement('div');
        row.className = 'ltr-hang is-moi';
        row.setAttribute('data-pid', r.pid);
        row.innerHTML = '<span class="ltr-hang-so"></span><span class="ltr-hang-ten"></span>' +
          '<span class="ltr-tien"><i></i><em></em></span><span class="ltr-hang-ct"></span><b class="ltr-hang-d"></b>';
        el.appendChild(row);
      }
      var cuHang = +row.getAttribute('data-hang') || 0;
      if (cuHang && r.hang < cuHang) { row.classList.remove('is-len'); void row.offsetWidth; row.classList.add('is-len'); }
      row.setAttribute('data-hang', r.hang);
      row.style.order = i;
      row.classList.toggle('xong', r.xong);
      row.classList.toggle('top', r.hang <= 3 && r.diem > 0);
      var pt = r.xong ? 100 : r.tong ? Math.round(r.lam / r.tong * 100) : 0;
      row.querySelector('.ltr-hang-so').textContent = huy(r.hang);
      row.querySelector('.ltr-hang-ten').textContent = r.ten;
      row.querySelector('.ltr-tien i').style.width = pt + '%';
      row.querySelector('.ltr-tien em').textContent = r.xong ? '🏁 xong' : r.lam + '/' + r.tong;
      row.querySelector('.ltr-hang-ct').textContent = (S.tro === 'bay' ? '✗ ' + r.loi : '🔎 sai ' + r.loi) + (r.giay ? ' · ' + r.giay + 's' : '');
      row.querySelector('.ltr-hang-d').textContent = r.diem;
    });
    Array.prototype.slice.call(el.querySelectorAll('[data-pid]')).forEach(function (x) { if (!co[x.getAttribute('data-pid')]) x.remove(); });
  }

  /* ---------------- ket thuc: buc trao giai ---------------- */
  function ketThuc() {
    if (!S.room) return;
    var d = S.info || { soXong: 0, soHs: 0 };
    if (d.soXong < d.soHs && !confirm('Còn ' + (d.soHs - d.soXong) + ' bạn chưa chơi xong. Kết thúc luôn?')) return;
    api('POST', 'xong').then(function (r) { veHet(r.bxh || [], r.to || []); }).catch(function (e) { alert(e.message); });
  }
  function veHet(bxh, dsTo) {
    if (S.pha === 'het') return;
    S.pha = 'het';
    clearInterval(S.poll);
    clearInterval(S.gio);
    sndKen();
    var t = TRO[S.tro], buc, duoi = '';
    if (coTo()) {
      // Xep hang to: diem trung binh + thuong; moi to kem ban gioi nhat
      var xep = dsTo.slice().sort(function (a, b) { return a.hang - b.hang; });
      var top = xep.slice(0, 3), thu = [1, 0, 2].filter(function (i) { return top[i]; });
      buc = thu.map(function (i) {
        var x = top[i];
        return '<div class="ltr-buc-o b' + (i + 1) + '" style="--c:' + MAU_TO[x.i] + '"><span class="ltr-buc-ten is-to">' + esc(x.ten) + '</span>' +
          '<span class="ltr-buc-gioi">' + (x.gioi ? '⭐ ' + esc(x.gioi.ten) + ' · ' + x.gioi.diem : '&nbsp;') + '</span>' +
          '<div class="ltr-buc-khoi"><b>' + huy(i + 1) + '</b><small>' + x.diem + ' điểm</small><em>TB ' + x.tb + (x.thuong ? ' + 🎉' + x.thuong : '') + ' · ' + x.soTv + ' bạn</em></div></div>';
      }).join('');
      if (xep.length > 3) duoi += '<ol class="ltr-bxh">' + xep.slice(3).map(function (x) {
        return '<li style="--c:' + MAU_TO[x.i] + '"><span>' + x.hang + '.</span><b>' + esc(x.ten) + '</b><small>' + x.diem + ' điểm' + (x.gioi ? ' · ⭐ ' + esc(x.gioi.ten) : '') + '</small></li>';
      }).join('') + '</ol>';
      if (bxh.length) duoi += '<p class="ltr-ben-h">Các bạn giỏi nhất</p><ol class="ltr-bxh">' + bxh.slice(0, 8).map(function (x) {
        return '<li><span>' + x.hang + '.</span><b>' + esc(x.ten) + '</b><small>' + x.diem + ' điểm</small></li>';
      }).join('') + '</ol>';
    } else {
      var top1 = bxh.slice(0, 3), thu1 = [1, 0, 2].filter(function (i) { return top1[i]; });
      buc = thu1.map(function (i) {
        var x = top1[i];
        return '<div class="ltr-buc-o b' + (i + 1) + '"><span class="ltr-buc-ten">' + esc(x.ten) + '</span><span class="ltr-buc-ic" aria-hidden="true">' + t.emoji + '</span>' +
          '<div class="ltr-buc-khoi"><b>' + huy(i + 1) + '</b><small>' + x.diem + ' điểm</small></div></div>';
      }).join('');
      if (bxh.length > 3) duoi = '<ol class="ltr-bxh">' + bxh.slice(3, 40).map(function (x) {
        return '<li><span>' + x.hang + '.</span><b>' + esc(x.ten) + '</b><small>' + x.diem + ' điểm' + (x.xong ? '' : ' · chưa xong') + '</small></li>';
      }).join('') + '</ol>';
    }
    $('#ltrMan').innerHTML = '<div class="ltr-het"><h2>🏆 ' + (coTo() ? 'Tổ vô địch' : 'Bục trao giải') + ' <span lang="zh">颁奖台</span></h2>' +
      '<div class="ltr-buc">' + buc + '</div>' + duoi +
      (bxh.length ? '' : '<p class="ltr-cho">Chưa có bạn nào tham gia.</p>') +
      '<div class="ltr-het-nut">' +
        (S.caiDat ? '<button type="button" class="ltr-nut-nho" data-act="caidat">⚙ Đổi cài đặt</button>' : '') +
        '<button type="button" class="ltr-go" data-act="lai">🔁 Chơi lại (giữ phòng ' + maDep(S.room.ma) + ')</button>' +
      '</div></div>';
  }

  function veTrong() {
    var t = TRO[S.tro];
    $('#ltrMan').innerHTML = '<div class="ltr-het"><h2>' + t.emoji + ' Chưa đủ câu để chơi</h2>' +
      '<p class="ltr-luat">Trò “' + t.ten + '” cần ít nhất 2 ' + t.loai + ' trong các bài đang chọn. Hãy tích chọn thêm bài ở màn chuẩn bị rồi mở lại nhé.</p>' +
      '<button type="button" class="ltr-go" data-act="dong">← Về chọn bài</button></div>';
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    if (S.room) dongPhong();
    var p = docLS(PREF, {});
    S.tro = opt.tro === 'doantau' ? 'doantau' : 'bay';
    var may = S.tro === 'bay' ? window.LopBay : window.LopDoanTau;
    S.goc = may && may.loc ? may.loc(opt.cau) : (opt.cau || []);
    var c = opt.cfg || {};
    S.cfg = {
      soTo: c.soTo >= 2 && c.soTo <= 4 ? c.soTo : 1,
      ten: Array.isArray(c.ten) ? c.ten.slice(0, 4).map(function (x, i) { return String(x || '').trim() || 'Tổ ' + (i + 1); }) : [],
      so: c.so > 0 ? c.so : 8, toc: TOC[c.toc] ? c.toc : 'vua', nhieu: c.nhieu === 1 || c.nhieu === 2 ? c.nhieu : 0,
      soToa: c.soToa >= 3 && c.soToa <= 8 ? c.soToa : 6, muc: MUC[c.muc] ? c.muc : 'vua'
    };
    if (S.cfg.soTo < 2) S.cfg.ten = [];
    S.caiDat = typeof opt.caiDat === 'function' ? opt.caiDat : null;
    S.sound = p.sound !== false;
    S.nhan = opt.nhan || '';
    var t = TRO[S.tro];
    root.className = 'ltr is-' + S.tro;
    root.setAttribute('aria-label', t.ten + ' — thi trên điện thoại');
    $('#ltrTit').innerHTML = t.emoji + ' ' + t.ten + ' <small>· thi trên điện thoại</small>';
    $('#ltrNhan').textContent = S.nhan;
    $('#ltrNhan').hidden = !S.nhan;
    $('#ltrTieng').textContent = S.sound ? '🔊' : '🔇';
    root.hidden = false;
    document.documentElement.classList.add('ltr-open');
    if (S.goc.length < 2) { veTrong(); return; }
    if (window.NhacNen) window.NhacNen.bat({ kieu: 'vui' });
    moPhong();
  }
  function dong() {
    if (window.NhacNen) window.NhacNen.tat();
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    dongPhong();
    root.hidden = true;
    document.documentElement.classList.remove('ltr-open');
  }
  window.LopTro = { mo: mo, dong: dong };
})();
