/* Keo co tri thuc qua ma QR — man chieu (Che do lop hoc). May chu: live.js phong kieu 'keo'.
   Mo tu tro Keo co (lop.js renderTug, nut "📱 Thi đấu qua mã QR"). Giao vien chieu ma QR; hoc sinh vao /choi,
   nhap ten, chon to. Giao vien chon hai to dau nhau (nhu hai o chon trai / phai cua keo co tren bang).
   Moi cau: man chieu hien cau hoi + 4 lua chon, hoc sinh hai to tra loi tren dien thoai (to khac co vu);
   het gio hoac ca hai to tra loi xong thi lat dap an: to co ti le ban dung cao hon (dung / so thanh vien
   — to dong nguoi khong loi the) keo day 1 nac, bang nhau thi to dung nhanh hon keo. Keo du so nac la thang.
   Hinh: ban nho keo co tug-kid-*.svg, day tug-rope.svg, co tug-flag.svg (nhu keo co tren bang).
   Mo bang window.LopKeoQr.mo({ to: [{ ten, mau, kid }], L, R, cau, nhan }). */
(function () {
  'use strict';
  var PREF = 'hyv_keoqr_pref';
  var ABC = ['A', 'B', 'C', 'D'];
  var S = { built: false, to: [], L: 0, R: 1, max: 5, secs: 20, goc: [], deck: [], so: 0, nhan: '', room: null, poll: 0,
    info: null, pha: 'sanh', dsKy: '', q: null, het: 0, dem: 0, lat: false, sound: true, su: 0 };
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
  function mau(i) { return (S.to[i] && S.to[i].mau) || '#e0573f'; }
  function ten(i) { return (S.to[i] && S.to[i].ten) || 'Tổ ' + (i + 1); }
  function luu() { ghiLS(PREF, { max: S.max, secs: S.secs, sound: S.sound }); }

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
  function sndCau() { tone(523, 0.1); tone(784, 0.14, 'triangle', 0.12, 0.08); }
  function sndKeo() { tone(180, 0.18, 'sawtooth', 0.1); tone(240, 0.22, 'sawtooth', 0.09, 0.12); tone(784, 0.2, 'triangle', 0.12, 0.25); }
  function sndHoa() { tone(330, 0.2, 'triangle', 0.09); tone(330, 0.2, 'triangle', 0.09, 0.22); }
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

  /* ---------------- khung (dung chung kieu dang lop-tro.css: .ltr) ---------------- */
  function dung() {
    root = document.createElement('section');
    root.className = 'ltr is-keo';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Kéo co tri thức — thi qua mã QR');
    root.innerHTML = '<div class="ltr-nen" aria-hidden="true"><span class="ltr-may m1"></span><span class="ltr-may m2"></span><span class="ltr-doi"></span></div>' +
      '<header class="ltr-bar"><span class="ltr-tit">🪢 Kéo co tri thức <small>· thi qua mã QR</small></span><span class="ltr-nhan" id="lkqNhan"></span>' +
      '<span class="ltr-gian"></span><button type="button" class="ltr-nut-nho" data-act="tieng" id="lkqTieng">🔊</button>' +
      '<button type="button" class="ltr-nut-nho" data-act="full">⛶ Toàn màn hình</button><button type="button" class="ltr-nut-nho" data-act="dong">✕ Đóng</button></header>' +
      '<div class="ltr-man" id="lkqMan"></div><div class="ltr-toast" id="lkqToast" aria-live="polite" hidden></div>';
    document.body.appendChild(root);
    root.addEventListener('click', bam);
    root.addEventListener('change', doiChon);
    S.built = true;
  }
  function bam(e) {
    var b = e.target.closest('[data-act], [data-max], [data-secs]');
    if (!b || b.disabled) return;
    if (b.hasAttribute('data-max')) { S.max = +b.getAttribute('data-max'); luu(); veChon(); return; }
    if (b.hasAttribute('data-secs')) { S.secs = +b.getAttribute('data-secs'); luu(); veChon(); return; }
    var a = b.getAttribute('data-act');
    if (a === 'dong') dong();
    else if (a === 'full') { try { if (document.fullscreenElement) document.exitFullscreen(); else root.requestFullscreen(); } catch (er) { /* bo qua */ } }
    else if (a === 'tieng') { S.sound = !S.sound; luu(); $('#lkqTieng').textContent = S.sound ? '🔊' : '🔇'; }
    else if (a === 'batdau' || a === 'vanmoi') vanMoi();
    else if (a === 'lat') latDapAn();
    else if (a === 'tiep') cauTiep();
    else if (a === 'doicap') {
      // ve sanh chon cap moi; dien thoai ve man cho
      S.pha = 'sanh'; clearInterval(S.dem); S.dsKy = '';
      if (S.room) api('POST', 'keo', { moi: true }).catch(function () { /* bo qua */ });
      veSanh();
    }
    else if (a === 'duoi') duoi(b);
  }
  // O chon to trai / phai: chon trung thi doi cho hai ben (nhu keo co tren bang)
  function doiChon(e) {
    var s = e.target.closest('select[data-ben]');
    if (!s) return;
    var ben = s.getAttribute('data-ben'), v = +s.value, khac = ben === 'L' ? 'R' : 'L';
    if (S[khac] === v) S[khac] = S[ben];
    S[ben] = v;
    veSanh();
  }

  /* ---------------- phong ---------------- */
  function moPhong() {
    S.pha = 'sanh'; S.info = null; S.dsKy = '';
    $('#lkqMan').innerHTML = '<p class="ltr-cho">Đang mở phòng…</p>';
    S.room = { ma: '', khoa: '' };
    return fetch('/api/live/tao', { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kieu: 'keo', to: S.to.map(function (t) { return t.ten; }) }) })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; }); })
      .then(function (d) {
        S.room = { ma: d.ma, khoa: d.khoa };
        veSanh();
        clearInterval(S.poll);
        S.poll = setInterval(tai, 1000);
        tai();
      })
      .catch(function (e) { $('#lkqMan').innerHTML = '<p class="ltr-cho">Chưa mở được phòng: ' + esc(e.message) + '</p>'; S.room = null; });
  }
  function dongPhong() {
    clearInterval(S.poll);
    clearInterval(S.dem);
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
      } else if (S.pha === 'hoi') {
        veBen(d.ben);
        // ca hai to da tra loi het: lat luon
        var b = d.ben;
        if (b && b.L.soTv && b.R.soTv && b.L.daTL >= b.L.soTv && b.R.daTL >= b.R.soTv) latDapAn();
      }
    }).catch(function () { /* mang chap chon: lan sau thu lai */ });
  }
  function duoi(b) {
    if (!confirm('Mời "' + b.getAttribute('data-ten') + '" ra khỏi phòng?')) return;
    api('POST', 'duoi', { pid: b.getAttribute('data-pid') }).then(tai).catch(function (e) { alert(e.message); });
  }

  /* ---------------- sanh: QR, cac to, chon cap dau ---------------- */
  function oChon(ben) {
    return '<select class="lkq-sel" data-ben="' + ben + '" style="--c:' + mau(S[ben]) + '" aria-label="Tổ bên ' + (ben === 'L' ? 'trái' : 'phải') + '">' +
      S.to.map(function (t, i) { return '<option value="' + i + '"' + (i === S[ben] ? ' selected' : '') + '>' + esc(t.ten) + '</option>'; }).join('') + '</select>';
  }
  function veSanh() {
    var link = location.origin + '/choi?ma=' + S.room.ma;
    $('#lkqMan').innerHTML = '<div class="ltr-sanh">' +
      '<div class="ltr-qr-the"><div class="ltr-qr">' + qrSvg(link) + '</div>' +
        '<p>Quét mã hoặc vào <b>' + esc(location.host) + '/choi</b></p><p class="ltr-lb">Mã phòng</p><p class="ltr-ma">' + maDep(S.room.ma) + '</p></div>' +
      '<div class="ltr-sanh-phai">' +
        '<h2>🪢 Kéo co tri thức <span lang="zh">拔河</span></h2>' +
        '<p class="ltr-luat">📱 Các em quét mã, nhập tên và <b>chọn tổ</b>. Mỗi câu hỏi hiện trên màn chiếu và trên điện thoại của hai tổ đang đấu. ' +
          'Tổ có <b>tỉ lệ bạn trả lời đúng cao hơn</b> kéo dây về phía mình 1 nấc (tổ đông người không lợi thế); bằng nhau thì tổ đúng nhanh hơn kéo. Các tổ khác cổ vũ, chờ lượt.</p>' +
        '<div class="lkq-cap">' + oChon('L') + '<b>⚔</b>' + oChon('R') + '</div>' +
        '<div id="lkqChon"></div>' +
        '<div class="ltr-dem" id="lkqDem"></div>' +
        '<div id="lkqDs"></div>' +
        '<button type="button" class="ltr-go" data-act="batdau" id="lkqGo">🪢 Bắt đầu trận</button>' +
      '</div></div>';
    veChon();
    veDsSanh();
  }
  function veChon() {
    var el = $('#lkqChon');
    if (!el) return;
    el.innerHTML = '<div class="ltr-chon"><span>Kéo đủ</span>' + [3, 5, 7].map(function (n) {
      return '<button type="button" data-max="' + n + '" class="' + (S.max === n ? 'on' : '') + '">' + n + ' nấc</button>';
    }).join('') + '</div>' +
      '<div class="ltr-chon"><span>Mỗi câu</span>' + [15, 20, 30].map(function (n) {
        return '<button type="button" data-secs="' + n + '" class="' + (S.secs === n ? 'on' : '') + '">' + n + ' giây</button>';
      }).join('') + '</div>';
  }
  function veDsSanh() {
    var el = $('#lkqDs');
    if (!el) return;
    var ds = S.info ? S.info.ds : [];
    $('#lkqDem').innerHTML = ds.length ? '<b>' + ds.length + '</b> bạn đã vào phòng' : 'Chưa có bạn nào vào — mở điện thoại quét mã QR nhé!';
    var chua = ds.filter(function (x) { return x.to < 0; });
    el.innerHTML = '<div class="ltr-sanh-to" style="--n:' + Math.min(S.to.length, 3) + '">' + S.to.map(function (t, i) {
      var tv = ds.filter(function (x) { return x.to === i; });
      var dau = i === S.L || i === S.R;
      return '<div class="ltr-sanh-lan' + (dau ? ' lkq-dau' : '') + '" style="--c:' + t.mau + '"><div class="ltr-lan-ten">' + (dau ? '⚔ ' : '') + esc(t.ten) + ' <small>' + tv.length + ' bạn</small></div>' +
        '<div class="ltr-lan-tv">' + (tv.map(function (x, k) {
          return '<button type="button" class="ltr-hs" data-act="duoi" data-pid="' + esc(x.pid) + '" data-ten="' + esc(x.ten) + '" style="--i:' + (k % 8) + '">' + esc(x.ten) + '</button>';
        }).join('') || '<em>Chưa có ai</em>') + '</div></div>';
    }).join('') + '</div>' +
      (chua.length ? '<p class="ltr-chua">Đang chọn tổ: ' + chua.map(function (x) { return esc(x.ten); }).join(', ') + '</p>' : '');
    var nL = ds.filter(function (x) { return x.to === S.L; }).length, nR = ds.filter(function (x) { return x.to === S.R; }).length;
    var go = $('#lkqGo');
    if (go) {
      go.disabled = !nL || !nR;
      go.textContent = !nL || !nR ? '🪢 Chờ cả hai tổ có bạn vào…' : '🪢 Bắt đầu trận: ' + ten(S.L) + ' ⚔ ' + ten(S.R);
    }
  }

  /* ---------------- tran dau ---------------- */
  function vanMoi() {
    if (!S.room) return;
    api('POST', 'keo', { L: S.L, R: S.R, max: S.max, moi: true }).then(function () {
      S.nac = 0; S.thang = -1;
      veSan();
      cauTiep();
    }).catch(function (e) { alert(e.message); });
  }
  function rutCau() {
    if (!S.deck.length) S.deck = tron(S.goc);
    var q = S.deck.pop();
    // toi da 4 lua chon: dap an dung + 3 lua chon khac, tron thu tu
    var khac = tron(q.options.map(function (o, i) { return i; }).filter(function (i) { return i !== q.answer; })).slice(0, 3);
    var thu = tron(khac.concat([q.answer]));
    return {
      q: q, opts: thu.map(function (i) { return String(q.options[i]); }), dung: thu.indexOf(q.answer),
      zh: (q.context ? '🗣️ ' + q.context + '\n' : '') + (q.pre || '') + (q.noBlank ? '' : '＿＿') + (q.post || '')
    };
  }
  function cauTiep() {
    if (!S.room || S.thang >= 0) return;
    var c = rutCau();
    S.so++;
    api('POST', 'cau', { zh: c.zh, opts: c.opts, dung: c.dung, secs: S.secs, so: S.so }).then(function () {
      S.q = c; S.lat = false; S.pha = 'hoi';
      veCau();
      sndCau();
      S.het = Date.now() + S.secs * 1000;
      clearInterval(S.dem);
      S.dem = setInterval(demGio, 250);
      demGio();
    }).catch(function (e) { alert(e.message); });
  }
  function demGio() {
    var con = Math.max(0, Math.ceil((S.het - Date.now()) / 1000));
    var g = $('#lkqGio');
    if (g) { g.textContent = con; g.classList.toggle('thap', con <= 5); }
    if (con <= 0) { clearInterval(S.dem); latDapAn(); }
  }
  function nacPct(n) { return 50 + n * (42 / S.max); }
  // Canh san keo co: hai ban nho, day, co, cac nac
  function veSan() {
    var KID = function (i) { return (S.to[i] && S.to[i].kid) || 'rong'; };
    var nac = '';
    for (var k = -S.max; k <= S.max; k++) nac += '<i' + (k === 0 ? ' class="giua"' : Math.abs(k) === S.max ? ' class="dich"' : '') + ' style="left:' + nacPct(k) + '%"></i>';
    $('#lkqMan').innerHTML = '<div class="lkq-tran">' +
      '<div class="lkq-dau">' +
        '<div class="lkq-to L" style="--c:' + mau(S.L) + '"><b>' + esc(ten(S.L)) + '</b><span id="lkqBenL"></span></div>' +
        '<div class="lkq-gio-o">⏱ <b id="lkqGio">–</b></div>' +
        '<div class="lkq-to R" style="--c:' + mau(S.R) + '"><b>' + esc(ten(S.R)) + '</b><span id="lkqBenR"></span></div>' +
      '</div>' +
      '<div class="lkq-san" style="--tl:' + mau(S.L) + ';--tr:' + mau(S.R) + '" role="img" aria-label="Sân kéo co">' +
        '<div class="lkq-day"></div>' +
        '<div class="lkq-ben L" id="lkqKidL"><img src="/images/game/tug-kid-' + KID(S.L) + '.svg" alt="" draggable="false"><img class="lkq-bui" src="/images/game/tug-dust.svg" alt="" draggable="false"></div>' +
        '<div class="lkq-ben R" id="lkqKidR"><img src="/images/game/tug-kid-' + KID(S.R) + '.svg" alt="" draggable="false"><img class="lkq-bui" src="/images/game/tug-dust.svg" alt="" draggable="false"></div>' +
        '<div class="lkq-ray"><div class="lkq-nac">' + nac + '</div>' +
          '<img class="lkq-co" id="lkqCo" src="/images/game/tug-flag.svg" alt="" draggable="false" style="left:' + nacPct(S.nac || 0) + '%"></div>' +
      '</div>' +
      '<div class="lkq-duoi" id="lkqDuoi"></div>' +
    '</div>';
  }
  function veCau() {
    var c = S.q;
    var dong = c.zh.split('\n');
    $('#lkqDuoi').innerHTML = '<div class="lkq-cau">' +
      '<div class="lkq-cau-so">Câu ' + S.so + '</div>' +
      (dong.length > 1 ? '<div class="lkq-ctx">' + esc(dong[0]) + '</div>' : '') +
      '<div class="lkq-de" lang="zh">' + esc(dong[dong.length - 1]) + '</div>' +
      '<div class="lkq-opts">' + c.opts.map(function (o, i) {
        return '<div class="lkq-opt o' + i + '"><span>' + ABC[i] + '</span><b lang="zh">' + esc(o) + '</b></div>';
      }).join('') + '</div>' +
      '<p class="lkq-why" id="lkqWhy" hidden></p>' +
    '</div>' +
    '<div class="lkq-nut">' +
      '<button type="button" class="ltr-nut-nho" data-act="doicap">⚙ Đổi cặp đấu</button>' +
      '<button type="button" class="ltr-go" data-act="lat" id="lkqLat">👀 Lật đáp án</button>' +
      '<button type="button" class="ltr-go" data-act="tiep" id="lkqTiep" hidden>Câu tiếp →</button>' +
    '</div>';
    veBen(null);
  }
  function veBen(b) {
    var f = function (x, id) {
      var el = $(id);
      if (!el) return;
      if (!x) { el.textContent = 'đang trả lời…'; return; }
      el.textContent = S.lat ? 'đúng ' + x.dung + '/' + x.soTv + ' bạn' : 'đã trả lời ' + x.daTL + '/' + x.soTv;
    };
    f(b && b.L, '#lkqBenL');
    f(b && b.R, '#lkqBenR');
  }
  function latDapAn() {
    if (S.pha !== 'hoi' || S.lat) return;
    S.lat = true;
    clearInterval(S.dem);
    api('POST', 'lat').then(function (r) {
      var kq = r.kq || {};
      S.pha = 'lat';
      S.nac = kq.nac || 0;
      S.thang = kq.thang;
      Array.prototype.forEach.call(root.querySelectorAll('.lkq-opt'), function (el, i) { el.classList.add(i === S.q.dung ? 'is-dung' : 'is-mo'); });
      if (S.q.q.why) { $('#lkqWhy').hidden = false; $('#lkqWhy').textContent = '💡 ' + S.q.q.why; }
      veBen({ L: kq.L, R: kq.R });
      var co = $('#lkqCo');
      if (co) co.style.left = nacPct(S.nac) + '%';
      if (kq.keo >= 0) {
        var ben = kq.keo === S.L ? 'L' : 'R', kid = $('#lkqKid' + ben);
        if (kid) { kid.classList.remove('keo'); void kid.offsetWidth; kid.classList.add('keo'); }
        var x = ben === 'L' ? kq.L : kq.R;
        baoToast('💪 ' + ten(kq.keo) + ' kéo 1 nấc! (' + Math.round(x.tiLe * 100) + '% đúng)', mau(kq.keo));
        sndKeo();
      } else {
        baoToast(kq.L && (kq.L.dung || kq.R.dung) ? 'Hòa — dây đứng yên' : 'Chưa tổ nào đúng — dây đứng yên', '#9a8468');
        sndHoa();
      }
      $('#lkqLat').hidden = true;
      if (S.thang >= 0) setTimeout(veThang, 1400);
      else $('#lkqTiep').hidden = false;
    }).catch(function (e) { S.lat = false; alert(e.message); });
  }
  var henToast = 0;
  function baoToast(txt, c) {
    var t = $('#lkqToast');
    t.textContent = txt;
    t.style.setProperty('--c', c);
    t.hidden = false;
    t.classList.remove('is-hien'); void t.offsetWidth; t.classList.add('is-hien');
    clearTimeout(henToast);
    henToast = setTimeout(function () { t.hidden = true; }, 2800);
  }
  function veThang() {
    var i = S.thang;
    S.pha = 'thang';
    sndKen();
    var kid = $('#lkqKid' + (i === S.L ? 'L' : 'R'));
    if (kid) kid.classList.add('thang');
    var thua = $('#lkqKid' + (i === S.L ? 'R' : 'L'));
    if (thua) thua.classList.add('thua');
    var bxh = (S.info && S.info.bxh) || [];
    $('#lkqDuoi').innerHTML = '<div class="lkq-thang" style="--c:' + mau(i) + '">🏆 <b>' + esc(ten(i)) + '</b> thắng kéo co!' +
      (bxh.length && bxh[0].diem > 0 ? '<small>Trả lời đúng nhiều nhất: ' + bxh.slice(0, 3).filter(function (r) { return r.diem > 0; }).map(function (r) { return esc(r.ten) + ' (' + r.diem + ')'; }).join(' · ') + '</small>' : '') + '</div>' +
      '<div class="lkq-nut">' +
        '<button type="button" class="ltr-nut-nho" data-act="doicap">⚙ Đổi cặp đấu</button>' +
        '<button type="button" class="ltr-go" data-act="vanmoi">🔁 Ván mới (cùng cặp)</button>' +
      '</div>';
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    if (S.room) dongPhong();
    var p = docLS(PREF, {});
    S.to = (opt.to || []).slice(0, 6);
    S.L = opt.L >= 0 && opt.L < S.to.length ? opt.L : 0;
    S.R = opt.R >= 0 && opt.R < S.to.length && opt.R !== S.L ? opt.R : (S.L === 0 ? 1 : 0);
    S.goc = (opt.cau || []).filter(function (q) {
      return q && Array.isArray(q.options) && q.options.length >= 2 && typeof q.answer === 'number' && q.options[q.answer] != null;
    });
    S.deck = []; S.so = 0; S.nac = 0; S.thang = -1;
    S.max = [3, 5, 7].indexOf(p.max) >= 0 ? p.max : 5;
    S.secs = [15, 20, 30].indexOf(p.secs) >= 0 ? p.secs : 20;
    S.sound = p.sound !== false;
    S.nhan = opt.nhan || '';
    $('#lkqNhan').textContent = S.nhan;
    $('#lkqNhan').hidden = !S.nhan;
    $('#lkqTieng').textContent = S.sound ? '🔊' : '🔇';
    root.hidden = false;
    document.documentElement.classList.add('ltr-open');
    if (S.to.length < 2 || !S.goc.length) {
      $('#lkqMan').innerHTML = '<div class="ltr-het"><h2>🪢 Chưa chơi được</h2><p class="ltr-luat">' +
        (S.to.length < 2 ? 'Kéo co cần ít nhất 2 tổ — chọn số tổ ở màn chuẩn bị.' : 'Các bài đang chọn chưa có câu trắc nghiệm.') + '</p>' +
        '<button type="button" class="ltr-go" data-act="dong">← Quay lại</button></div>';
      return;
    }
    if (window.NhacNen) window.NhacNen.tat();
    moPhong();
  }
  function dong() {
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    dongPhong();
    root.hidden = true;
    document.documentElement.classList.remove('ltr-open');
  }
  window.LopKeoQr = { mo: mo, dong: dong };
})();
