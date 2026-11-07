/* On bai theo to qua ma QR — man chieu (Che do lop hoc). May chu: live.js phong kieu 'onto'.
   Dung cho ba tro cua lop-onto.js: Gap thu bong, Xay lau dai, Duong bang bi mat (the cai dat co hang "Cach choi":
   🖥️ choi tren bang / 📱 thi dau qua ma QR). Che do QR: sanh cho (ma QR, cac lan to, bam ten de moi ra), roi moi vong:
   ca lop tra loi cung mot cau tren dien thoai (trac nghiem / xep cau / noi tu, may chu cham), man chieu hien "da tra loi x/n"
   tung to; het gio / ai cung tra loi xong / co bam "Lat dap an" thi lat: dap an + giai thich, moi to "dung x/n ban".
   To co ti le dung >= nguong (50% / 70%) duoc hanh dong theo thu tu ti le roi toc do (khong to nao dat: to tot nhat co ban dung).
   Moi to: ban dung nhanh nhat la doi truong luot nay, chon tren dien thoai trong 10 giay (het gio may tu chon):
   Gap thu — bam THA (may chu gui thoi diem bam, man chieu tinh vi tri can theo dong ho nhu tren bang), cuop thu — chon to;
   Xay lau dai — chon manh; Duong bang — chon o bang. Canh tro choi van do lop-gapthu / lop-laudai / lop-duongbang ve
   (moi tro co def.qr: batDau, hanh, ketVong, xong, ketThuc; tro goi G.qr.chon(...) khi can doi truong chon, G.qr.het(dong ket qua)
   khi xong luot cua to). Het so cau: buc trao giai cua lop-onto.js, dien thoai thay hang to; "Choi lai" giu phong.
   lop-onto.js goi: LopOnToQr.mo(G) (sau khi nap cau), .nghi() (ve the cai dat, giu phong), .dong() (dong han phong). */
(function () {
  'use strict';
  var HAN = 10; // giay doi truong duoc chon
  var LUAT = {
    gapthu: 'được <b>gắp thú</b> — đội trưởng bấm <b>THẢ</b> trên điện thoại khi cần gắp ở ngay trên thú bông muốn lấy. Bóng ⭐ x2 và 🎁 bất ngờ vẫn có như trên bảng (cướp thú thì đội trưởng chọn tổ).',
    laudai: 'được <b>xây thêm một mảnh</b> — đội trưởng chọn mảnh trên điện thoại (câu càng khó mảnh càng lớn). Tổ không đạt có thể bị <b>gió lớn</b> thổi bay mảnh mới nhất!',
    duongbang: 'được <b>bước lên một ô băng</b> — đội trưởng chọn 1 trong 3 ô phía trước trên điện thoại. Ô đã lật giữ nguyên cho cả lớp cùng nhớ!'
  };
  var DONG = { gapthu: 'gắp thú', laudai: 'xây mảnh', duongbang: 'bước ô băng' };
  var S = { room: null, poll: 0, info: null, pha: '', dsKy: '', so: 0, c: null, het: 0, dem: 0, lat: false, kq: null,
    hang: [], hangI: 0, toHt: -1, cho: null, daiDem: 0, bar: null, xongVan: false, ganMan: false };
  var G = null;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function maDep(ma) { return String(ma).replace(/(\d{3})(\d{3})/, '$1 $2'); }
  function qrSvg(link) {
    try { var g = window.qrcode(0, 'M'); g.addData(link); g.make(); return g.createSvgTag({ cellSize: 8, margin: 2, scalable: true }); }
    catch (e) { return ''; }
  }
  function linkPhong() { return location.origin + '/choi?ma=' + S.room.ma; }
  function soTo() { return G.cfg.soTo; }
  function tenTo(i) { return G.to(i).ten || 'Tổ ' + (i + 1); }
  function noop() { /* bo qua */ }

  function api(method, path, body) {
    var r = S.room;
    if (!r) return Promise.reject(new Error('Phòng đã đóng.'));
    var url = '/api/live/' + r.ma + '/' + path + (method === 'GET' ? '?khoa=' + encodeURIComponent(r.khoa) : '');
    return fetch(url, {
      method: method, headers: method === 'GET' ? {} : { 'Content-Type': 'application/json' },
      body: method === 'GET' ? undefined : JSON.stringify(Object.assign({ khoa: r.khoa }, body || {})), cache: 'no-store'
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (d) {
        if (!res.ok) { var e = new Error(d.error || 'Lỗi kết nối'); e.status = res.status; throw e; }
        return d;
      });
    });
  }
  function caiDat() {
    var to = [], mau = [];
    for (var i = 0; i < soTo(); i++) { to.push(tenTo(i)); mau.push(G.to(i).mau); }
    return { game: G.def.id, to: to, mau: mau, secs: G.cfg.secs, nguong: G.cfg.nguong === 70 ? 0.7 : 0.5 };
  }
  function taoPhong() {
    return fetch('/api/live/tao', { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign({ kieu: 'onto' }, caiDat())) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { if (!r.ok) throw new Error(d.error || 'Lỗi kết nối'); return d; }); })
      .then(function (d) { S.room = { ma: d.ma, khoa: d.khoa }; });
  }

  /* ---------------- mo / nghi / dong ---------------- */
  function mo(g) {
    G = g;
    G.qr = API;
    S.pha = 'mo'; S.so = 0; S.dsKy = ''; S.info = null; S.cho = null; S.kq = null; S.lat = false; S.xongVan = false;
    ganSuKien();
    dungBar();
    G.veVong('');
    G.man.innerHTML = '<div class="ot-the ot-tai"><div class="ot-logo ot-logo-quay" aria-hidden="true">' + G.def.logo + '</div><p>Đang mở phòng thi qua mã QR…</p></div>';
    // da co phong (choi lai / doi tro): giu phong, cap nhat to + cai dat, van moi
    var buoc = S.room
      ? api('POST', 'onto', Object.assign(caiDat(), { moi: true })).catch(function () { S.room = null; return taoPhong(); })
      : taoPhong();
    buoc.then(function () {
      if (G.qr !== API) return;
      veSanh();
      batPoll();
    }).catch(function (e) {
      if (G.qr !== API) return;
      S.room = null;
      G.man.innerHTML = '<div class="ot-the ot-tai"><div class="ot-logo" aria-hidden="true">' + G.def.logo + '</div><h2>Chưa mở được phòng</h2><p>' + esc(e.message) + '</p>' +
        '<div class="ot-nut-hang"><button type="button" class="ot-nut" data-oq="caidat">← Về cài đặt</button></div></div>';
    });
  }
  function nghi() {
    if (!G) return;
    clearTimeout(S.poll); clearInterval(S.dem); clearInterval(S.daiDem);
    S.cho = null; S.pha = '';
    dongCau(); anDai(); anPop();
    if (S.bar) { S.bar.remove(); S.bar = null; }
    if (G.qr === API) G.qr = null;
  }
  function dong() {
    nghi();
    if (S.room) { api('POST', 'xong', { dong: true }).catch(noop); S.room = null; }
  }
  // Su kien bam (uy quyen) tren man chinh va lop phu cua lop-onto.js — gan mot lan
  function ganSuKien() {
    if (S.ganMan) return;
    S.ganMan = true;
    var bam = function (e) {
      if (!G || G.qr !== API) return;
      var b = e.target.closest('[data-oq]');
      if (!b || b.disabled) return;
      var a = b.getAttribute('data-oq');
      if (a === 'caidat') G.veSanh();
      else if (a === 'batdau') batDau();
      else if (a === 'duoi') duoi(b);
      else if (a === 'lat') latDapAn();
      else if (a === 'tiep') tiepTuc();
      else if (a === 'cau') cauTiep();
      else if (a === 'ma') hienPop();
      else if (a === 'pop') anPop();
    };
    G.man.addEventListener('click', bam);
    G.$('#otLop').addEventListener('click', bam);
    G.$('.ot-bar').addEventListener('click', bam);
  }

  /* ---------------- thanh tren: ma phong, so ban, nut cau tiep ---------------- */
  function dungBar() {
    if (S.bar && S.bar.isConnected) return;
    S.bar = document.createElement('span');
    S.bar.className = 'oq-bar';
    S.bar.innerHTML = '<button type="button" class="oq-ma" data-oq="ma" title="Hiện mã QR cho bạn vào muộn">📱 <b id="oqMaSo">…</b><span id="oqSoHs"></span></button>' +
      '<button type="button" class="ot-nut ot-nut--vang ot-nut--nho oq-tiep" data-oq="cau" id="oqTiep" hidden></button>';
    G.$('.ot-bar').insertBefore(S.bar, G.$('#otVong'));
  }
  function veBar() {
    var m = G.$('#oqMaSo'), n = G.$('#oqSoHs');
    if (m && S.room) m.textContent = maDep(S.room.ma);
    if (n && S.info) n.textContent = ' · ' + S.info.soHs + ' bạn';
  }
  function nutTiep(html) {
    var b = G.$('#oqTiep');
    if (!b) return;
    b.hidden = !html;
    if (html) { b.innerHTML = html; b.focus(); }
  }
  function hienPop() {
    if (!S.room || G.$('.oq-pop')) { anPop(); return; }
    var el = document.createElement('div');
    el.className = 'oq-pop';
    el.setAttribute('data-oq', 'pop');
    el.innerHTML = '<div class="oq-pop-the ot-the"><div class="oq-pop-qr">' + qrSvg(linkPhong()) + '</div>' +
      '<p>Vào muộn? Quét mã hoặc vào <b>' + esc(location.host) + '/choi</b></p><p class="oq-pop-ma">' + maDep(S.room.ma) + '</p>' +
      '<button type="button" class="ot-nut ot-nut--nho" data-oq="pop">✕ Đóng</button></div>';
    G.$('#otLop').appendChild(el);
  }
  function anPop() { var el = G && G.$('.oq-pop'); if (el) el.remove(); }

  /* ---------------- hoi may chu ---------------- */
  function batPoll() { clearTimeout(S.poll); vongPoll(); }
  function vongPoll() {
    clearTimeout(S.poll);
    if (!S.room || !G || G.qr !== API) return;
    var room = S.room;
    api('GET', 'gv').then(function (d) { if (S.room === room && G.qr === API) nhan(d); }).catch(noop).then(function () {
      if (S.room === room && G && G.qr === API) S.poll = setTimeout(vongPoll, S.cho && S.cho.id && !S.cho.xong ? 300 : S.pha === 'hoi' ? 700 : 1200);
    });
  }
  function nhan(d) {
    var cu = S.info;
    S.info = d;
    veBar();
    if (S.pha === 'sanh') {
      var ky = d.ds.map(function (x) { return x.pid + ':' + x.to; }).join(',');
      if (ky !== S.dsKy) { if (cu && d.ds.length > cu.ds.length) G.snd.pop(); S.dsKy = ky; veDsSanh(); }
    } else if (S.pha === 'hoi') {
      veTienDo();
      var tong = 0, da = 0;
      (d.to || []).slice(0, soTo()).forEach(function (x) { tong += x.soTv; da += x.daTL; });
      if (tong > 0 && da >= tong) latDapAn();
    }
    var l = d.luot, cur = S.cho;
    if (cur && cur.id && !cur.xong && l && l.id === cur.id && l.xong && !l.tuDong && l.v != null) apDung(cur, l.v, false);
  }

  /* ---------------- sanh cho ---------------- */
  function veSanh() {
    S.pha = 'sanh';
    S.dsKy = '';
    var d = G.def, c = G.cfg;
    G.man.innerHTML = '<div class="oq oq-sanh"><div class="ltr-sanh">' +
      '<div class="ltr-qr-the"><div class="ltr-qr">' + qrSvg(linkPhong()) + '</div>' +
        '<p>Quét mã hoặc vào <b>' + esc(location.host) + '/choi</b></p><p class="ltr-lb">Mã phòng</p><p class="ltr-ma">' + maDep(S.room.ma) + '</p></div>' +
      '<div class="ltr-sanh-phai">' +
        '<h2><span class="oq-logo" aria-hidden="true">' + d.logo + '</span>' + esc(d.ten) + ' <small>· thi qua mã QR</small></h2>' +
        '<p class="ltr-luat">📱 Các em quét mã, nhập tên và <b>chọn tổ</b>. Mỗi vòng cả lớp cùng trả lời một câu trên điện thoại. Tổ có từ <b>' + c.nguong + '% bạn đúng</b> trở lên ' +
          LUAT[d.id] + ' Bạn đúng nhanh nhất là <b>đội trưởng lượt này</b>, có ' + HAN + ' giây để chọn — hết giờ máy tự chọn.</p>' +
        '<div class="ltr-tomtat"><span>' + c.vong + ' câu</span><span>⏱ ' + c.secs + ' giây / câu</span><span>✓ Tổ ≥ ' + c.nguong + '% bạn đúng được ' + DONG[d.id] + '</span>' +
          '<span>' + soTo() + ' tổ</span><button type="button" class="ltr-nut-nho" data-oq="caidat">⚙ Đổi cài đặt</button></div>' +
        '<div class="ltr-dem" id="oqDem"></div>' +
        '<div id="oqDs"></div>' +
        '<button type="button" class="ltr-go" data-oq="batdau" id="oqGo">▶ Bắt đầu</button>' +
      '</div></div></div>';
    veDsSanh();
  }
  function soSan() {
    var ds = S.info ? S.info.ds : [];
    return ds.filter(function (x) { return x.to >= 0 && x.to < soTo(); }).length;
  }
  function veDsSanh() {
    var el = G.$('#oqDs');
    if (!el) return;
    var ds = S.info ? S.info.ds : [];
    G.$('#oqDem').innerHTML = ds.length ? '<b>' + ds.length + '</b> bạn đã vào phòng · bấm tên để mời bạn ra' : 'Chưa có bạn nào vào — mở điện thoại quét mã QR nhé!';
    var lan = '';
    for (var i = 0; i < soTo(); i++) {
      var t = G.to(i), tv = ds.filter(function (x) { return x.to === i; });
      lan += '<div class="ltr-sanh-lan" style="--c:' + t.mau + '"><div class="ltr-lan-ten"><img class="oq-lan-hinh" src="' + esc(t.hinh) + '" alt="" draggable="false">' + esc(t.ten) + ' <small>' + tv.length + ' bạn</small></div>' +
        '<div class="ltr-lan-tv">' + (tv.map(function (x, k) {
          return '<button type="button" class="ltr-hs" data-oq="duoi" data-pid="' + esc(x.pid) + '" data-ten="' + esc(x.ten) + '" title="Bấm để mời bạn này ra" style="--i:' + (k % 8) + '">' + esc(x.ten) + '</button>';
        }).join('') || '<em>Chưa có ai</em>') + '</div></div>';
    }
    var chua = ds.filter(function (x) { return x.to < 0 || x.to >= soTo(); });
    el.innerHTML = '<div class="ltr-sanh-to" style="--n:' + Math.min(soTo(), 3) + '">' + lan + '</div>' +
      (chua.length ? '<p class="ltr-chua">Đang chọn tổ: ' + chua.map(function (x) {
        return '<button type="button" class="ltr-hs" data-oq="duoi" data-pid="' + esc(x.pid) + '" data-ten="' + esc(x.ten) + '">' + esc(x.ten) + '</button>';
      }).join(' ') + '</p>' : '');
    var go = G.$('#oqGo'), n = soSan();
    if (go) { go.disabled = !n; go.innerHTML = n ? '▶ Bắt đầu (' + n + ' bạn) <kbd>Enter</kbd>' : '▶ Chờ các bạn vào phòng…'; }
  }
  function duoi(b) {
    if (!confirm('Mời "' + b.getAttribute('data-ten') + '" ra khỏi phòng?')) return;
    api('POST', 'duoi', { pid: b.getAttribute('data-pid') }).then(batPoll).catch(function (e) { alert(e.message); });
  }

  /* ---------------- van choi ---------------- */
  function batDau() {
    if (S.pha !== 'sanh' || !soSan()) return;
    S.so = 0; S.xongVan = false; S.pha = 'cho';
    G.vaoChoi();
    G.def.qr.batDau(G);
    G.veVong('Câu 1/' + G.cfg.vong);
    G.sau(900, cauTiep);
  }
  function cauTiep() {
    if (S.pha !== 'cho' || S.xongVan || G.pha !== 'choi') return;
    if (S.so >= G.cfg.vong || G.def.qr.xong()) { ketThucQr(); return; }
    S.pha = 'gui';
    nutTiep(null);
    var lan = 0;
    var gui = function () {
      var c = G.cauTiep();
      if (!c) { S.pha = 'cho'; ketThucQr(); return; }
      api('POST', 'cau', { cau: c, so: S.so + 1, tong: G.cfg.vong }).then(function () {
        if (G.qr !== API || G.pha !== 'choi') return;
        S.so++; S.c = c; S.lat = false; S.kq = null; S.pha = 'hoi';
        G.veVong('Câu ' + S.so + '/' + G.cfg.vong);
        S.het = Date.now() + G.cfg.secs * 1000;
        veCau();
        G.snd.cau();
        clearInterval(S.dem);
        S.dem = setInterval(demGio, 250);
        demGio();
        batPoll();
      }).catch(function (e) {
        // cau khong hop le voi may chu (vd. noi tu chi 2 cap): lay cau khac
        if (e.status === 400 && ++lan < 6) { gui(); return; }
        S.pha = 'cho';
        G.toast('⚠️ ' + esc(e.message));
        nutTiep('↻ Thử lại câu ' + (S.so + 1));
      });
    };
    gui();
  }
  function demGio() {
    var con = Math.max(0, Math.ceil((S.het - Date.now()) / 1000));
    var g = G.$('#oqGio');
    if (g) { g.textContent = con; g.classList.toggle('thap', con <= 5); }
    if (con <= 0) { clearInterval(S.dem); latDapAn(); }
  }

  /* ---------------- the cau hoi (man chieu) ---------------- */
  var CHU = ['A', 'B', 'C', 'D'];
  function veCau() {
    dongCau();
    var el = document.createElement('div');
    el.className = 'ot-hoi oq-hoi';
    el.innerHTML = '<div class="ot-hoi-the oq-the" role="dialog" aria-label="Câu hỏi"></div>';
    G.$('#otLop').appendChild(el);
    veNoiCau();
  }
  function dongCau() { var el = G && G.$('.oq-hoi'); if (el) el.remove(); }
  function veNoiCau() {
    var box = G.$('.oq-the');
    if (!box) return;
    var c = S.c, k = S.kq, lat = !!k, zh = G.zh, than;
    if (c.k === 'xep') {
      than = (c.ctx ? '<p class="ot-ctx">' + zh(c.ctx) + '</p>' : '') +
        '<div class="ot-xep">' + c.tu.map(function (w, i) { return '<span class="ot-xep-tu" style="--i:' + i + '">' + zh(w) + '</span>'; }).join('') + '</div>';
    } else if (c.k === 'noi') {
      than = '<div class="ot-noi"><ol class="ot-noi-trai">' + c.trai.map(function (w, i) { return '<li><b>' + (i + 1) + '</b>' + zh(w) + '</li>'; }).join('') + '</ol>' +
        '<ol class="ot-noi-phai">' + c.phai.map(function (w, j) { return '<li><b>' + CHU[j] + '</b>' + zh(w) + '</li>'; }).join('') + '</ol></div>';
    } else {
      than = (c.zh ? '<div class="ot-de' + (String(c.zh).length > 14 ? ' ot-de--dai' : '') + '">' + zh(c.zh) + '</div>' : '') +
        (c.ctx ? '<p class="ot-ctx">' + zh(c.ctx) + '</p>' : '') +
        '<div class="ot-opts">' + c.opts.map(function (x, i) {
          return '<div class="ot-op' + (lat ? (i === c.dung ? ' is-dung' : ' is-mo') : '') + '"><b>' + CHU[i] + '</b><span>' + zh(x) + '</span></div>';
        }).join('') + '</div>';
    }
    var cuoi = '';
    if (lat) {
      var dap = c.k === 'xep' ? zh(c.dap)
        : c.k === 'noi' ? c.dap.map(function (j, i) { return zh(c.trai[i]) + ' → ' + zh(c.phai[j]); }).join('<i>·</i>')
        : CHU[c.dung] + '. ' + zh(c.opts[c.dung]);
      var why = c.why ? '<p class="ot-why">💡 ' + zh(c.why) + '</p>' : (c.k === 'xep' && c.ctx ? '<p class="ot-why">💡 Nghĩa: ' + zh(c.ctx) + '</p>' : '');
      var co = k.duoc.length;
      cuoi = '<div class="ot-giai ' + (co ? 'is-dung' : 'is-sai') + '"><div class="ot-giai-kq">' + (co ? '✓ ' + co + ' tổ được ' + DONG[G.def.id] : '✗ Chưa tổ nào có bạn đúng') + '</div>' +
        '<div class="ot-giai-noi"><p class="ot-dap"><span>Đáp án:</span> ' + dap + '</p>' + why + '</div>' +
        '<div class="ot-giai-nut"><button type="button" class="ot-nut ot-nut--vang ot-nut--to" data-oq="tiep">' + (co ? '🎯 Các tổ ' + DONG[G.def.id] : 'Tiếp tục') + ' ▶ <kbd>Enter</kbd></button></div></div>';
    } else {
      cuoi = '<div class="ot-cham"><span class="ot-cham-goi">📱 Cả lớp trả lời trên điện thoại — tổ có từ ' + G.cfg.nguong + '% bạn đúng được ' + DONG[G.def.id] + '</span>' +
        '<button type="button" class="ot-nut ot-nut--vang ot-nut--to" data-oq="lat">👀 Lật đáp án <kbd>Enter</kbd></button></div>';
    }
    box.innerHTML = '<div class="ot-hoi-dau"><span class="oq-so">Câu ' + S.so + '/' + G.cfg.vong + '</span><span class="ot-tag">' + G.tenDang(c) + '</span>' +
        '<span class="ot-gap"></span>' + (lat ? '' : '<span class="oq-gio" id="oqGio">' + Math.max(0, Math.ceil((S.het - Date.now()) / 1000)) + '</span>') + '</div>' +
      '<p class="ot-lenh">' + esc(c.lenh || '') + '</p>' + than +
      '<div class="oq-tien" id="oqTien"></div>' + cuoi;
    veTienDo();
    var nut = box.querySelector('[data-oq="lat"], [data-oq="tiep"]');
    if (nut) nut.focus();
  }
  // Tung to: da tra loi x/n (dang hoi) hoac dung x/n ban + duoc hanh dong / doi truong (da lat)
  function veTienDo() {
    var el = G.$('#oqTien');
    if (!el) return;
    var k = S.kq, ds = k ? k.to : (S.info && S.info.to) || [], html = '';
    for (var i = 0; i < soTo(); i++) {
      var t = G.to(i), x = ds[i] || { soTv: 0, daTL: 0, dung: 0 }, n = x.soTv || 0;
      var thu = k ? k.duoc.indexOf(i) : -1, dt = k && k.doiTruong ? k.doiTruong[i] : null;
      var so = k ? x.dung : x.daTL, pt = n ? Math.round(so / n * 100) : 0;
      html += '<div class="oq-to' + (k ? (thu >= 0 ? ' is-duoc' : ' is-truot') : '') + (k || !n || x.daTL < n ? '' : ' is-du') + '" style="--tc:' + t.mau + ';--p:' + pt + '%">' +
        '<img src="' + esc(t.hinh) + '" alt="" draggable="false"><b>' + esc(t.ten) + '</b>' +
        '<span class="oq-to-so">' + (k ? 'đúng <em>' + x.dung + '/' + n + '</em> bạn' : 'đã trả lời <em>' + x.daTL + '/' + n + '</em>') + '</span>' +
        (k ? '<span class="oq-to-kq">' + (thu >= 0 ? '✓ #' + (thu + 1) + (dt ? ' · 👑 ' + esc(dt.ten) : '') : '✗') + '</span>' : '') +
        '<i class="oq-to-thanh"></i></div>';
    }
    el.innerHTML = html;
  }
  function latDapAn() {
    if (S.pha !== 'hoi' || S.lat) return;
    S.lat = true;
    clearInterval(S.dem);
    api('POST', 'lat').then(function (r) {
      if (G.qr !== API || S.pha !== 'hoi') return;
      S.kq = r.kq || { duoc: [], to: [], doiTruong: {} };
      S.pha = 'lat';
      veNoiCau();
      var box = G.$('.oq-the');
      if (S.kq.duoc.length) G.snd.dung(); else G.snd.sai();
      if (box) { box.classList.remove('is-rung', 'is-vui'); void box.offsetWidth; box.classList.add(S.kq.duoc.length ? 'is-vui' : 'is-rung'); }
    }).catch(function (e) { S.lat = false; G.toast('⚠️ ' + esc(e.message)); });
  }

  /* ---------------- cac to hanh dong ---------------- */
  function tiepTuc() {
    if (S.pha !== 'lat') return;
    dongCau();
    S.pha = 'hanh';
    S.hang = (S.kq.duoc || []).filter(function (i) { return i < soTo(); });
    S.hangI = 0;
    tiepHanh();
  }
  function tiepHanh() {
    if (S.pha !== 'hanh' || G.pha !== 'choi') return;
    if (G.def.qr.xong()) { ketThucQr(); return; }
    if (S.hangI >= S.hang.length) { hetVong(); return; }
    var i = S.hang[S.hangI++];
    S.toHt = i;
    G.def.qr.hanh(i, S.c);
  }
  // Tro goi khi xong luot cua mot to: gui dong ket qua cho dien thoai roi sang to tiep
  function het(txt) {
    if (S.pha !== 'hanh') return;
    S.cho = null;
    clearInterval(S.daiDem);
    anDai();
    if (S.room) api('POST', 'tin', { to: S.toHt, txt: String(txt || '').trim() }).catch(noop);
    G.sau(300, tiepHanh);
  }
  function hetVong() {
    S.pha = 'vong';
    var sai = [];
    for (var i = 0; i < soTo(); i++) if (S.hang.indexOf(i) < 0) sai.push(i);
    var cuoi = S.so >= G.cfg.vong;
    var xong = function () {
      if (G.qr !== API || G.pha !== 'choi') return;
      if (cuoi || G.def.qr.xong()) { ketThucQr(); return; }
      S.pha = 'cho';
      nutTiep('❓ Câu ' + (S.so + 1) + '/' + G.cfg.vong + ' ▶ <kbd>Enter</kbd>');
    };
    if (G.def.qr.ketVong) G.def.qr.ketVong(sai, S.so, cuoi, xong); else xong();
  }
  function ketThucQr() {
    if (S.xongVan) return;
    S.pha = 'het';
    nutTiep(null);
    anDai(); dongCau();
    clearInterval(S.dem);
    G.def.qr.ketThuc();
  }

  /* ---------------- doi truong chon tren dien thoai ---------------- */
  // o = { loai: tha|manh|o|cuop, ds: [{ v, nhan, phu, loai, tat }], tuDong(): v, dongHo(t0) }; cb(v) khi co lua chon
  function chon(o, cb) {
    var cur = { o: o, cb: cb, id: 0, xong: false, het: 0, ten: '' };
    S.cho = cur;
    clearInterval(S.daiDem);
    veDai(cur);
    var tGui = performance.now();
    api('POST', 'luot', { to: S.toHt, loai: o.loai, ds: o.ds || [], han: HAN }).then(function (r) {
      if (S.cho !== cur || cur.xong) return;
      // dong ho man chieu khop luc may chu mo luot: luc gui + nua thoi gian khu hoi (toi da 60 ms — trinh duyet ban
      // xu ly phan hoi tre thi khong lam lech vi tri can)
      if (o.dongHo) o.dongHo(tGui + Math.min((performance.now() - tGui) / 2, 60));
      cur.id = r.id;
      cur.ten = r.ten || '';
      if (r.khongCo) { tuDong(cur, 'Tổ không còn bạn nào trong phòng'); return; }
      cur.het = Date.now() + (r.han || HAN * 1000);
      veDai(cur);
      S.daiDem = setInterval(function () { demDai(cur); }, 250);
      batPoll();
    }).catch(function () { if (S.cho === cur) tuDong(cur, 'Mất kết nối'); });
  }
  function demDai(cur) {
    if (S.cho !== cur || cur.xong) { clearInterval(S.daiDem); return; }
    var con = Math.max(0, Math.ceil((cur.het - Date.now()) / 1000));
    var g = G.$('#oqDaiGio');
    if (g) { g.textContent = con; g.classList.toggle('thap', con <= 3); }
    if (Date.now() > cur.het + 700 && !cur.chot) {
      cur.chot = true;
      api('POST', 'chot', { id: cur.id }).then(function (r) {
        if (r.v != null && !r.tuDong) apDung(cur, r.v, false); else tuDong(cur, 'Hết giờ');
      }).catch(function () { tuDong(cur, 'Hết giờ'); });
    }
  }
  function tuDong(cur, ly) {
    if (cur.xong || S.cho !== cur) return;
    G.toast('⏱ ' + esc(ly) + ' — máy tự chọn cho ' + esc(tenTo(S.toHt)));
    apDung(cur, cur.o.tuDong ? cur.o.tuDong() : null, true);
  }
  function apDung(cur, v, tu) {
    if (cur.xong || S.cho !== cur) return;
    cur.xong = true;
    clearInterval(S.daiDem);
    anDai();
    if (!tu) G.snd.bam();
    cur.cb(v);
  }
  var LOI_DAI = { tha: 'bấm <b>THẢ</b> trên điện thoại', manh: 'chọn mảnh ghép trên điện thoại', o: 'chọn ô băng trên điện thoại', cuop: 'chọn tổ bị “mượn” thú' };
  function veDai(cur) {
    anDai();
    var t = G.to(S.toHt), el = document.createElement('div');
    el.className = 'oq-dai';
    el.style.setProperty('--tc', t.mau);
    el.innerHTML = '<img src="' + esc(t.hinh) + '" alt="" draggable="false"><span>👑 ' +
      (cur.ten ? 'Đội trưởng <b>' + esc(cur.ten) + '</b> · ' + esc(t.ten) : esc(t.ten) + ' — đang gọi đội trưởng…') +
      (cur.ten ? ' — ' + (LOI_DAI[cur.o.loai] || 'đang chọn') : '') + '</span>' +
      (cur.ten ? '<b class="oq-dai-gio" id="oqDaiGio">' + HAN + '</b>' : '');
    G.$('#otLop').appendChild(el);
  }
  function anDai() { var el = G && G.$('.oq-dai'); if (el) el.remove(); }

  /* ---------------- ket thuc ---------------- */
  // lop-onto.js goi sau khi ve buc trao giai: gui hang cac to cho dien thoai
  function ketThuc(hang, don) {
    S.pha = 'het';
    S.xongVan = true;
    clearInterval(S.dem); clearInterval(S.daiDem);
    S.cho = null;
    anDai(); dongCau(); nutTiep(null);
    if (S.room) api('POST', 'xong', { hang: hang, don: don }).catch(noop);
  }
  function phim(k) {
    if (k !== 'enter' && k !== ' ') return false;
    if (S.pha === 'sanh') { batDau(); return true; }
    if (S.pha === 'hoi') { latDapAn(); return true; }
    if (S.pha === 'lat') { tiepTuc(); return true; }
    if (S.pha === 'cho') { cauTiep(); return true; }
    return false;
  }

  // Dong tin rieng cho dien thoai (vd. gio lon thoi bay manh)
  function tin(to, txt) { if (S.room && txt) api('POST', 'tin', { to: to, txt: String(txt) }).catch(noop); }

  var API = { chon: chon, het: het, ketThuc: ketThuc, phim: phim, tin: tin };
  window.LopOnToQr = { mo: mo, nghi: nghi, dong: dong };
})();
