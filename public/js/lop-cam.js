/* Tro camera tren lop (Chem hoa qua, The duc ABC, Vo si chu Han, Quiz nghieng dau) — the chon cach choi va phong QR
   tren man chieu (Che do lop hoc). May chu: live.js phong kieu 'tro' voi tro thuoc TRO_CAM.
   Giao vien bam the tro o /lop -> the chon:
     🖥️ Choi tren bang (webcam lop): mo /van-dong hoac /nghieng o tab moi nhu truoc gio, chi them o chon so cau;
     📱 Moi em choi tren dien thoai (ma QR): mo phong ngay tren /lop, chieu ma QR; hoc sinh vao /choi, nhap ten,
        chon to (neu chia to). Bam "Bat dau": dien thoai chuyen sang trang tro choi o che do phong (cam-phong.js),
        moi em choi bang camera truoc (hoac bang cham) va bao TUNG CAU len may chu.
   Man chieu: sanh ma QR -> bang truc tiep (chia to: moi to mot lan, diem to = trung binh diem thanh vien + thuong
   "ca to cung xong 5 cau"; ca lop: bang xep hang ca nhan) — moi ban: ten, cau x/N, vet ✓/✗ cac cau gan nhat, diem.
   Ai cung xong thi may chu tu ket thuc (hoac co bam Ket thuc): buc trao giai; "Choi lai" giu phong, boc bo cau moi.
   Khung va kieu dang dung lai cua lop-tro.css (.ltr-*), phan rieng o lop-cam.css (.lcm-*).
   Mo bang window.LopCam.mo({ game, nhan, max, to: [{ ten, mau }], soTo, layCau(n) -> [cau], moBang(n) }):
     max = so cau trac nghiem cac bai dang chon co; layCau(n) = n cau dang { hoi, ctx, why, opts, dung, zhOpt };
     moBang(n) = mo tro tren bang voi n cau (lop.js: moVanDong / moNghieng). */
(function () {
  'use strict';
  var PREF = 'hyv_cam_pref';
  var TRO = {
    chem: { ten: 'Chém hoa quả', emoji: '🍉', zh: '切水果',
      bang: 'Mời từng bạn lên trước webcam của lớp: vung ngón trỏ chém quả (hoặc chọc bóng) mang đáp án đúng.',
      dt: 'giơ tay trước camera, vung đầu ngón trỏ qua quả mang đáp án đúng' },
    theduc: { ten: 'Thể dục ABC', emoji: '🤸', zh: '动作选答案',
      bang: 'Mời từng bạn lên trước webcam của lớp: tạo dáng A · B · C · D để chọn đáp án.',
      dt: 'dựng điện thoại lên bàn, lùi lại rồi tạo dáng A · B · C · D để chọn đáp án' },
    dam: { ten: 'Võ sĩ chữ Hán', emoji: '🥊', zh: '汉字拳手',
      bang: 'Mời từng bạn lên trước webcam của lớp: hai nắm tay thành găng đỏ, đấm trúng thẻ mang đáp án đúng.',
      dt: 'nắm tay thành găng đỏ, đấm trúng thẻ mang đáp án đúng để hạ Bao Cát Ú' },
    nghieng: { ten: 'Quiz nghiêng đầu', emoji: '🙆', zh: '歪头答题',
      bang: 'Mời từng bạn lên trước webcam của lớp: nghiêng đầu trái / phải để chọn 1 trong 2 đáp án.',
      dt: 'cầm điện thoại trước mặt, nghiêng đầu sang trái hoặc phải để chọn 1 trong 2 đáp án' }
  };
  var MAU_MD = ['#c9971c', '#d2452f', '#2f3b45', '#e07a1f', '#2479b5', '#23906a'];
  var SECS = [10, 15, 20, 30];
  var S = { built: false, game: 'chem', opt: null, cfg: null, room: null, poll: 0, info: null, pha: 'chon', dsKy: '', su: 0, sound: true,
    bd: 0, gio: 0, soXong: 0, tong: 0, thieu: 0 };
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
  function gioDep(giay) { giay = Math.max(0, giay | 0); return (giay < 600 ? '0' : '') + Math.floor(giay / 60) + ':' + (giay % 60 < 10 ? '0' : '') + giay % 60; }
  function huy(hang) { return ['🥇', '🥈', '🥉'][hang - 1] || hang; }
  function coTo() { return S.cfg.soTo > 1; }
  function tenTo() { return S.opt.to.slice(0, S.cfg.soTo).map(function (t, i) { return String(t.ten || '').trim() || 'Tổ ' + (i + 1); }); }
  function mauTo(i) { return (S.opt.to[i] && S.opt.to[i].mau) || MAU_MD[i % MAU_MD.length]; }
  function luu() { ghiLS(PREF, { cach: S.cfg.cach, so: S.cfg.so, secs: S.cfg.secs, soTo: S.cfg.soTo, da: S.cfg.da, sound: S.sound }); }

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
    var url = '/api/live/' + r.ma + '/' + path + (method === 'GET' ? '?khoa=' + encodeURIComponent(r.khoa) : '');
    return fetch(url, {
      method: method, headers: method === 'GET' ? {} : { 'Content-Type': 'application/json' },
      body: method === 'GET' ? undefined : JSON.stringify(Object.assign({ khoa: r.khoa }, body || {})), cache: 'no-store'
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (d) { if (!res.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; });
    });
  }

  /* ---------------- khung ---------------- */
  function dung() {
    root = document.createElement('section');
    root.className = 'ltr is-cam';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.innerHTML = '<header class="ltr-bar"><span class="ltr-tit" id="lcmTit"></span><span class="ltr-nhan" id="lcmNhan"></span>' +
      '<span class="ltr-gian"></span><button type="button" class="ltr-nut-nho" data-act="tieng" id="lcmTieng">🔊</button>' +
      '<button type="button" class="ltr-nut-nho" data-act="full">⛶ Toàn màn hình</button><button type="button" class="ltr-nut-nho" data-act="dong">✕ Đóng</button></header>' +
      '<div class="ltr-man" id="lcmMan"></div><div class="ltr-toast" id="lcmToast" aria-live="polite" hidden></div>';
    document.body.appendChild(root);
    root.addEventListener('click', bam);
    document.addEventListener('keydown', function (e) {
      if (root.hidden) return;
      if (e.key === 'Escape' && S.pha === 'chon') { e.preventDefault(); dong(); } // dang co phong thi chi dong bang nut ✕
      else if (e.key === 'Enter' && S.pha === 'chon' && !/^(INPUT|BUTTON)$/.test(e.target.tagName)) { e.preventDefault(); moTro(); }
    });
    S.built = true;
  }
  function bam(e) {
    var b = e.target.closest('[data-act], [data-k]');
    if (!b || b.disabled) return;
    if (b.hasAttribute('data-k')) { chon(b.getAttribute('data-k'), b.getAttribute('data-v')); return; }
    var a = b.getAttribute('data-act');
    if (a === 'dong') dong();
    else if (a === 'full') { try { if (document.fullscreenElement) document.exitFullscreen(); else root.requestFullscreen(); } catch (er) { /* bo qua */ } }
    else if (a === 'tieng') { S.sound = !S.sound; luu(); $('#lcmTieng').textContent = S.sound ? '🔊' : '🔇'; }
    else if (a === 'mo') moTro();
    else if (a === 'batdau' || a === 'lai') batDau(b);
    else if (a === 'ketthuc') ketThuc();
    else if (a === 'caidat') { dongPhong(); veChon(); }
    else if (a === 'duoi') duoi(b);
  }
  function tieuDe(phu) {
    var t = TRO[S.game];
    $('#lcmTit').innerHTML = t.emoji + ' ' + t.ten + (phu ? ' <small>· ' + phu + '</small>' : '');
  }

  /* ---------------- the chon: tren bang hay ma QR, so cau, giay moi cau, chia to ---------------- */
  function nut(k, v, nhan, on, tat) {
    return '<button type="button" data-k="' + k + '" data-v="' + v + '" class="' + (on ? 'on' : '') + '"' + (tat ? ' disabled' : '') + '>' + nhan + '</button>';
  }
  function veChon() {
    S.pha = 'chon';
    clearInterval(S.gio);
    var t = TRO[S.game], c = S.cfg, qr = c.cach === 'qr', max = S.opt.max, toMax = Math.min(6, S.opt.to.length);
    tieuDe('');
    var to = nut('to', 1, 'Cả lớp <small>xếp hạng từng bạn</small>', c.soTo < 2);
    for (var n = 2; n <= toMax; n++) to += nut('to', n, n + ' tổ', c.soTo === n);
    $('#lcmMan').innerHTML = '<div class="lcm-chon">' +
      '<h2>' + t.emoji + ' ' + t.ten + ' <span lang="zh">' + t.zh + '</span></h2>' +
      '<div class="ltr-chon lcm-cach"><span>Cách chơi</span>' +
        nut('cach', 'bang', '🖥️ Chơi trên bảng <small>webcam lớp, từng bạn lên chơi</small>', !qr) +
        nut('cach', 'qr', '📱 Mỗi em chơi trên điện thoại <small>quét mã QR, thi đua cả lớp</small>', qr) + '</div>' +
      '<p class="ltr-luat lcm-mo">' + (qr
        ? '📱 Học sinh quét mã QR, nhập tên' + (c.soTo > 1 ? ', chọn tổ' : '') + ' rồi mỗi em chơi trên <b>điện thoại của mình</b> bằng camera trước: ' + t.dt +
          '. Em nào không dùng được camera thì <b>chơi bằng chạm</b>. Màn chiếu hiện tiến độ từng bạn và bục trao giải.'
        : '🖥️ ' + t.bang + ' Trò mở ở tab mới như trước giờ.') + '</p>' +
      '<div class="ltr-chon lcm-so" id="lcmSo"><span>Số câu</span>' + window.LopSoCau.html(c.so, max) + '</div>' +
      '<p class="lcm-ghi">Các bài đang chọn có <b>' + max + '</b> câu trắc nghiệm' + (max > window.LopSoCau.MAX ? ' (mỗi lần chơi tối đa ' + window.LopSoCau.MAX + ' câu)' : '') +
        (qr ? ' — mỗi em làm đủ số câu này.' : '.') + '</p>' +
      (qr ? '<div class="ltr-chon"><span>Mỗi câu</span>' + SECS.map(function (s) { return nut('secs', s, s + ' giây', c.secs === s); }).join('') + '</div>' +
        '<div class="ltr-chon"><span>Chia tổ</span>' + to + '</div>' +
        (c.soTo > 1 ? '<div class="lcm-to">' + tenTo().map(function (ten, i) { return '<span style="--c:' + mauTo(i) + '">' + esc(ten) + '</span>'; }).join('') +
          '<small>Học sinh tự chọn tổ trên điện thoại. Điểm tổ = trung bình điểm các bạn + thưởng cả tổ cùng xong.</small></div>' : '') +
        (S.game === 'chem' ? '<div class="ltr-chon"><span>Kiểu</span>' + nut('da', 'qua', '🍊 Hoa quả <small>vung tay chém</small>', c.da !== 'bong') + nut('da', 'bong', '🎈 Bong bóng <small>chạm để nổ</small>', c.da === 'bong') + '</div>' : '')
        : '') +
      '<div class="ltr-het-nut"><button type="button" class="ltr-go" data-act="mo" id="lcmMo">' + (qr ? '📱 Mở phòng QR' : '▶ Mở trò chơi trên bảng') + '</button></div>' +
    '</div>';
    window.LopSoCau.gan($('#lcmSo'), max, function (n) { c.so = n; luu(); });
  }
  function chon(k, v) {
    var c = S.cfg;
    if (k === 'cach') c.cach = v === 'qr' ? 'qr' : 'bang';
    else if (k === 'secs') c.secs = +v;
    else if (k === 'to') c.soTo = +v;
    else if (k === 'da') c.da = v === 'bong' ? 'bong' : 'qua';
    else return;
    luu();
    veChon();
  }
  function moTro() {
    if (S.pha !== 'chon') return;
    S.cfg.so = window.LopSoCau.kep(S.cfg.so, S.opt.max);
    luu();
    if (S.cfg.cach !== 'qr') { var f = S.opt.moBang, n = S.cfg.so; dong(); f(n); return; }
    moPhong();
  }

  /* ---------------- phong ---------------- */
  function moPhong() {
    S.pha = 'sanh'; S.info = null; S.dsKy = ''; S.su = 0; S.soXong = 0;
    tieuDe('thi trên điện thoại');
    $('#lcmMan').innerHTML = '<p class="ltr-cho">Đang mở phòng…</p>';
    var room = S.room = { ma: '', khoa: '' };
    var to = coTo() ? tenTo() : [];
    fetch('/api/live/tao', { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kieu: 'tro', tro: S.game, to: to, mau: to.map(function (x, i) { return mauTo(i); }) }) })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; }); })
      .then(function (d) {
        if (S.room !== room) return;
        room.ma = d.ma; room.khoa = d.khoa;
        if (window.NhacNen) window.NhacNen.bat({ kieu: 'vui' });
        veSanh();
        batPoll();
      })
      .catch(function (e) {
        if (S.room !== room) return;
        S.room = null;
        $('#lcmMan').innerHTML = '<div class="ltr-het"><p class="ltr-cho">Chưa mở được phòng: ' + esc(e.message) + '</p>' +
          '<button type="button" class="ltr-go" data-act="caidat">← Quay lại</button></div>';
      });
  }
  function batPoll() { clearInterval(S.poll); S.poll = setInterval(tai, 1500); tai(); }
  function dongPhong() {
    clearInterval(S.poll);
    clearInterval(S.gio);
    if (window.NhacNen) window.NhacNen.tat();
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
    var c = S.cfg, o = ['Mỗi em ' + c.so + ' câu', '⏱ ' + c.secs + ' giây / câu'];
    if (S.game === 'chem') o.push(c.da === 'bong' ? '🎈 Bong bóng' : '🍊 Hoa quả');
    o.push(coTo() ? c.soTo + ' tổ thi đua' : 'Cả lớp — xếp hạng từng bạn');
    return o.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('');
  }
  function veSanh() {
    var t = TRO[S.game];
    var link = location.origin + '/choi?ma=' + S.room.ma;
    var luat = 'Các em quét mã, nhập tên' + (coTo() ? ' và <b>chọn tổ</b>' : '') + '. Cô bấm Bắt đầu thì mỗi em chơi ngay trên điện thoại bằng <b>camera trước</b>: ' + t.dt +
      '. Điện thoại hỏi thì bấm “Cho phép”; không dùng được camera thì chọn <b>“Chơi bằng chạm”</b>. Mỗi câu đúng tối đa 200 điểm — đúng nhanh, đúng liên tiếp được nhiều điểm hơn.' +
      (coTo() ? ' <b>Điểm tổ = trung bình điểm các bạn</b> + 50 mỗi khi cả tổ cùng xong 5 câu — không bỏ bạn nào lại phía sau!' : '');
    $('#lcmMan').innerHTML = '<div class="ltr-sanh">' +
      '<div class="ltr-qr-the"><div class="ltr-qr">' + qrSvg(link) + '</div>' +
        '<p>Quét mã hoặc vào <b>' + esc(location.host) + '/choi</b></p><p class="ltr-lb">Mã phòng</p><p class="ltr-ma">' + maDep(S.room.ma) + '</p></div>' +
      '<div class="ltr-sanh-phai">' +
        '<h2>' + t.emoji + ' ' + t.ten + ' <span lang="zh">' + t.zh + '</span></h2>' +
        '<p class="ltr-luat">📱 ' + luat + '</p>' +
        '<div class="ltr-tomtat">' + tomTat() + '<button type="button" class="ltr-nut-nho" data-act="caidat">⚙ Đổi cài đặt</button></div>' +
        '<div class="ltr-dem" id="lcmDem"></div>' +
        '<div id="lcmDs"></div>' +
        '<button type="button" class="ltr-go" data-act="batdau" id="lcmGo">▶ Bắt đầu</button>' +
      '</div></div>';
    veDsSanh();
  }
  function chipHs(x, i) {
    return '<button type="button" class="ltr-hs" data-act="duoi" data-pid="' + esc(x.pid) + '" data-ten="' + esc(x.ten) + '" title="Bấm để mời bạn này ra" style="--i:' + (i % 8) + '">' + esc(x.ten) + '</button>';
  }
  function veDsSanh() {
    var el = $('#lcmDs');
    if (!el) return;
    var ds = S.info ? S.info.ds : [];
    $('#lcmDem').innerHTML = ds.length ? '<b>' + ds.length + '</b> bạn đã vào phòng' : 'Chưa có bạn nào vào — mở điện thoại quét mã QR nhé!';
    if (coTo()) {
      var ten = tenTo(), chua = ds.filter(function (x) { return x.to < 0; });
      el.innerHTML = '<div class="ltr-sanh-to" style="--n:' + Math.min(3, ten.length) + '">' + ten.map(function (t, i) {
        var tv = ds.filter(function (x) { return x.to === i; });
        return '<div class="ltr-sanh-lan" style="--c:' + mauTo(i) + '"><div class="ltr-lan-ten">' + esc(t) + ' <small>' + tv.length + ' bạn</small></div>' +
          '<div class="ltr-lan-tv">' + (tv.map(chipHs).join('') || '<em>Chưa có ai</em>') + '</div></div>';
      }).join('') + '</div>' +
        (chua.length ? '<p class="ltr-chua">Đang chọn tổ: ' + chua.map(function (x) { return esc(x.ten); }).join(', ') + '</p>' : '');
    } else {
      el.innerHTML = '<div class="ltr-ds">' + ds.map(chipHs).join('') + '</div>';
    }
    var go = $('#lcmGo');
    var san = ds.filter(function (x) { return !coTo() || x.to >= 0; }).length;
    if (go) { go.disabled = !san; go.textContent = san ? '▶ Bắt đầu (' + san + ' bạn)' : '▶ Bắt đầu'; }
  }

  // Bat dau (hoac Choi lai: van moi cung phong, cung cai dat, boc bo cau moi)
  function batDau(b) {
    var nhan = b.textContent;
    b.disabled = true;
    b.textContent = 'Đang gửi câu hỏi…';
    var cau = S.opt.layCau(S.cfg.so) || [];
    // bai khong du cau nhu da chon: choi voi so cau co, bao cho co biet (khong lap lai cau)
    S.thieu = cau.length < S.cfg.so ? cau.length : 0;
    api('POST', 'batdau', { cau: cau, secs: S.cfg.secs, da: S.cfg.da }).then(function (r) {
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
    var t = TRO[S.game];
    var link = location.origin + '/choi?ma=' + S.room.ma;
    $('#lcmMan').innerHTML = '<div class="ltr-choi">' +
      '<div class="ltr-chinh">' +
        '<div class="ltr-tk"><span class="ltr-tk-o">' + t.emoji + ' Mỗi em ' + S.tong + ' câu</span>' +
          '<span class="ltr-tk-o">🏁 <b id="lcmXong">0</b> / <span id="lcmSoHs">0</span> bạn xong</span>' +
          '<span class="ltr-tk-o">⏱ <b id="lcmGio">00:00</b></span>' +
          (S.thieu ? '<span class="ltr-tk-o lcm-thieu">ℹ️ Bài này chỉ có ' + S.thieu + ' câu</span>' : '') + '</div>' +
        (coTo() ? '<div class="ltr-lan" id="lcmLan" style="--n:' + Math.min(3, S.cfg.soTo) + '"></div>' : '<div class="ltr-bang" id="lcmBang"></div>') +
      '</div>' +
      '<aside class="ltr-ben">' +
        '<div class="ltr-ben-qr">' + qrSvg(link) + '<span>Vào muộn? Quét mã hoặc vào ' + esc(location.host) + '/choi — mã <b>' + maDep(S.room.ma) + '</b></span></div>' +
        '<div class="ltr-ben-h">📣 Diễn biến</div><div class="ltr-tin" id="lcmTin"></div>' +
        '<button type="button" class="ltr-go" data-act="ketthuc">🏁 Kết thúc &amp; trao giải</button>' +
      '</aside></div>';
    clearInterval(S.gio);
    S.gio = setInterval(function () { var g = root && $('#lcmGio'); if (g && S.pha === 'choi') g.textContent = gioDep((Date.now() - S.bd) / 1000); }, 500);
  }
  // Vet ✓/✗ cua 5 cau gan nhat (chuoi '1' / '0' tu may chu, cau moi nhat ben phai)
  function vetHtml(vet) {
    var s = String(vet || '').slice(-5), h = '';
    for (var i = 0; i < s.length; i++) h += '<u class="' + (s.charAt(i) === '1' ? 'd' : 's') + '">' + (s.charAt(i) === '1' ? '✓' : '✗') + '</u>';
    return h;
  }
  function veBang() {
    var d = S.info;
    if (!d || !$('#lcmXong')) return;
    $('#lcmXong').textContent = d.soXong;
    $('#lcmSoHs').textContent = d.soHs;
    if (d.soXong > S.soXong) sndXong();
    S.soXong = d.soXong;
    if (coTo()) veLan(d); else veCaNhan(d);
    var su = d.su || [];
    // tin moi "ca to cung xong" -> hien noi bat giua man chieu
    if (S.su === -1) S.su = 0;
    su.slice().reverse().forEach(function (x) { if (x.id > S.su && x.to != null) baoToast(x.txt, x.to); });
    if (su.length) S.su = Math.max(S.su, su[0].id);
    $('#lcmTin').innerHTML = su.slice(0, 7).map(function (x) { return '<p' + (x.to != null ? ' style="--c:' + mauTo(x.to) + '" class="is-to"' : '') + '>' + esc(x.txt) + '</p>'; }).join('') || '<p>Các bạn đang chơi…</p>';
  }
  var henToast = 0;
  function baoToast(txt, to) {
    var t = $('#lcmToast');
    t.textContent = txt;
    t.style.setProperty('--c', mauTo(to));
    t.hidden = false;
    t.classList.remove('is-hien'); void t.offsetWidth; t.classList.add('is-hien');
    sndThuong();
    clearTimeout(henToast);
    henToast = setTimeout(function () { t.hidden = true; }, 2800);
  }
  // Moi to mot lan: diem to (trung binh + thuong), con cho bao nhieu ban, the tung thanh vien (cau x/N, vet ✓/✗, diem)
  function veLan(d) {
    var el = $('#lcmLan');
    if (!el) return;
    el.innerHTML = (d.to || []).map(function (x) {
      var con = x.soTv - x.soXong;
      var trang = !x.soTv ? '<span class="ltr-lan-tt">Chưa có bạn</span>'
        : con ? '<span class="ltr-lan-tt is-cho">⏳ Còn ' + con + ' bạn — cố lên!</span>'
        : '<span class="ltr-lan-tt is-xong">✓ Cả tổ đã xong</span>';
      return '<div class="ltr-lan-o' + (x.hang === 1 && x.diem > 0 ? ' is-nhat' : '') + '" style="--c:' + mauTo(x.i) + ';order:' + x.hang + '">' +
        '<div class="ltr-lan-dau"><span class="ltr-lan-hang">' + (x.diem > 0 ? huy(x.hang) : '🚩') + '</span><b class="ltr-lan-ten">' + esc(x.ten) + '</b>' +
          '<span class="ltr-lan-diem"><b>' + x.diem + '</b><small>TB ' + x.tb + (x.thuong ? ' + 🎉' + x.thuong : '') + '</small></span></div>' +
        trang +
        '<div class="ltr-lan-tv">' + x.tv.map(function (m) {
          var pt = m.xong ? 100 : S.tong ? Math.round(m.lam / S.tong * 100) : 0;
          return '<span class="ltr-the lcm-the' + (m.xong ? ' is-xong' : '') + '" style="--p:' + pt + '%"><b>' + esc(m.ten) + '</b>' +
            '<i>' + (m.xong ? '✓ xong' : 'câu ' + Math.min(m.lam + 1, S.tong) + '/' + S.tong) + ' · <em>' + m.diem + '</em></i>' +
            '<span class="lcm-vet">' + vetHtml(m.vet) + '</span></span>';
        }).join('') + '</div>' +
      '</div>';
    }).join('');
  }
  // Ca lop: cap nhat tung dong theo pid (giu phan tu de thanh tien do chay muot), xep bang 'order'
  function veCaNhan(d) {
    var el = $('#lcmBang');
    if (!el) return;
    el.classList.toggle('is-hai', d.bxh.length > 10);
    el.classList.toggle('is-ba', d.bxh.length > 30);
    var co = {}, gon = d.bxh.length > 30;
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
          '<span class="ltr-tien"><i></i><em></em></span><span class="ltr-hang-ct lcm-vet"></span><b class="ltr-hang-d"></b>';
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
      row.querySelector('.ltr-tien em').textContent = r.xong ? (gon ? '🏁 ' : '🏁 xong · đúng ') + r.dung + '/' + r.tong
        : (gon ? '' : 'câu ') + Math.min(r.lam + 1, r.tong) + '/' + r.tong;
      var vet = row.querySelector('.lcm-vet'), ky = r.vet + ':' + r.lam;
      if (vet.getAttribute('data-ky') !== ky) { vet.setAttribute('data-ky', ky); vet.innerHTML = vetHtml(r.vet); }
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
    var t = TRO[S.game], buc, duoi2 = '';
    if (coTo()) {
      // Xep hang to: diem trung binh + thuong; moi to kem ban gioi nhat
      var xep = dsTo.slice().sort(function (a, b) { return a.hang - b.hang; });
      var top = xep.slice(0, 3), thu = [1, 0, 2].filter(function (i) { return top[i]; });
      buc = thu.map(function (i) {
        var x = top[i];
        return '<div class="ltr-buc-o b' + (i + 1) + '" style="--c:' + mauTo(x.i) + '"><span class="ltr-buc-ten is-to">' + esc(x.ten) + '</span>' +
          '<span class="ltr-buc-gioi">' + (x.gioi ? '⭐ ' + esc(x.gioi.ten) + ' · ' + x.gioi.diem : '&nbsp;') + '</span>' +
          '<div class="ltr-buc-khoi"><b>' + huy(i + 1) + '</b><small>' + x.diem + ' điểm</small><em>TB ' + x.tb + (x.thuong ? ' + 🎉' + x.thuong : '') + ' · ' + x.soTv + ' bạn</em></div></div>';
      }).join('');
      if (xep.length > 3) duoi2 += '<ol class="ltr-bxh">' + xep.slice(3).map(function (x) {
        return '<li style="--c:' + mauTo(x.i) + '"><span>' + x.hang + '.</span><b>' + esc(x.ten) + '</b><small>' + x.diem + ' điểm' + (x.gioi ? ' · ⭐ ' + esc(x.gioi.ten) : '') + '</small></li>';
      }).join('') + '</ol>';
      if (bxh.length) duoi2 += '<p class="ltr-ben-h">Các bạn giỏi nhất</p><ol class="ltr-bxh">' + bxh.slice(0, 9).map(function (x) {
        return '<li><span>' + x.hang + '.</span><b>' + esc(x.ten) + '</b><small>' + x.diem + ' điểm · đúng ' + x.dung + '/' + x.tong + '</small></li>';
      }).join('') + '</ol>';
    } else {
      var top1 = bxh.slice(0, 3), thu1 = [1, 0, 2].filter(function (i) { return top1[i]; });
      buc = thu1.map(function (i) {
        var x = top1[i];
        return '<div class="ltr-buc-o b' + (i + 1) + '"><span class="ltr-buc-ten">' + esc(x.ten) + '</span><span class="ltr-buc-ic" aria-hidden="true">' + t.emoji + '</span>' +
          '<div class="ltr-buc-khoi"><b>' + huy(i + 1) + '</b><small>' + x.diem + ' điểm</small><em>đúng ' + x.dung + '/' + x.tong + '</em></div></div>';
      }).join('');
      if (bxh.length > 3) duoi2 = '<ol class="ltr-bxh">' + bxh.slice(3, 60).map(function (x) {
        return '<li><span>' + x.hang + '.</span><b>' + esc(x.ten) + '</b><small>' + x.diem + ' điểm · đúng ' + x.dung + '/' + x.tong + (x.xong ? '' : ' · chưa xong') + '</small></li>';
      }).join('') + '</ol>';
    }
    $('#lcmMan').innerHTML = '<div class="ltr-het"><h2>🏆 ' + (coTo() ? 'Tổ vô địch' : 'Bục trao giải') + ' <span lang="zh">颁奖台</span></h2>' +
      '<div class="ltr-buc">' + buc + '</div>' + duoi2 +
      (bxh.length ? '' : '<p class="ltr-cho">Chưa có bạn nào tham gia.</p>') +
      '<div class="ltr-het-nut">' +
        '<button type="button" class="ltr-nut-nho" data-act="caidat">⚙ Đổi cài đặt</button>' +
        '<button type="button" class="ltr-go" data-act="lai">🔁 Chơi lại (giữ phòng ' + maDep(S.room.ma) + ')</button>' +
      '</div></div>';
  }

  function mo(opt) {
    opt = opt || {};
    if (!TRO[opt.game] || !window.LopSoCau) return;
    if (!S.built) dung();
    if (S.room) dongPhong();
    var p = docLS(PREF, {});
    S.game = opt.game;
    S.opt = { nhan: opt.nhan || '', max: Math.max(0, opt.max | 0), to: (opt.to || []).slice(0, 6),
      soTo: opt.soTo | 0, layCau: opt.layCau, moBang: opt.moBang };
    var toMax = Math.min(6, S.opt.to.length);
    var soTo = p.soTo >= 1 && p.soTo <= toMax ? p.soTo : (S.opt.soTo >= 2 && S.opt.soTo <= toMax ? S.opt.soTo : 1);
    S.cfg = {
      cach: p.cach === 'qr' ? 'qr' : 'bang', // mac dinh choi tren bang nhu truoc gio
      so: window.LopSoCau.kep(p.so || 10, S.opt.max), secs: SECS.indexOf(p.secs) >= 0 ? p.secs : 20,
      soTo: soTo, da: p.da === 'bong' ? 'bong' : 'qua'
    };
    S.sound = p.sound !== false;
    root.setAttribute('aria-label', TRO[S.game].ten);
    $('#lcmNhan').textContent = S.opt.nhan;
    $('#lcmNhan').hidden = !S.opt.nhan;
    $('#lcmTieng').textContent = S.sound ? '🔊' : '🔇';
    root.hidden = false;
    document.documentElement.classList.add('ltr-open');
    veChon();
  }
  function dong() {
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    dongPhong();
    S.pha = 'dong';
    root.hidden = true;
    document.documentElement.classList.remove('ltr-open');
  }
  window.LopCam = { mo: mo, dong: dong, co: function (g) { return !!TRO[g]; } };
})();
