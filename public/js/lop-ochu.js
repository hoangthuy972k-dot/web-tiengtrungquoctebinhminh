/* O chu (crossword) cho Che do lop hoc — tu sinh tu tu vung cac bai da chon.
   Hai kieu: moi o mot chu Han, hoac moi o mot am tiet pinyin (co thanh dieu).
   Goi y la nghia tieng Viet (tuy chon them Han Viet). Giao vien bam goi y, ca lop
   doan, bam "Hien tu" de lat. Co the chia to tinh diem, luot xoay vong.
   Mo bang window.LopOChu.mo({ vocab: [{ zh, py, vn, hv }], nhan }).           */
(function (g) {
  'use strict';

  var MAX_TU = 12, MAX_O = 13, SO_LAN = 160;

  /* ---------------- tach don vi cua tu ---------------- */
  function chuHan(zh) {
    var out = [];
    String(zh || '').replace(/[㐀-鿿]/g, function (c) { out.push(c); return c; });
    return out;
  }
  // Bo dau thanh de so khop am tiet (moi ky tu co dau van la 1 ky tu nen cat duoc tren chuoi goc)
  var KHONG_DAU = { 'ā': 'a', 'á': 'a', 'ǎ': 'a', 'à': 'a', 'ō': 'o', 'ó': 'o', 'ǒ': 'o', 'ò': 'o', 'ē': 'e', 'é': 'e', 'ě': 'e', 'è': 'e',
    'ī': 'i', 'í': 'i', 'ǐ': 'i', 'ì': 'i', 'ū': 'u', 'ú': 'u', 'ǔ': 'u', 'ù': 'u', 'ǖ': 'v', 'ǘ': 'v', 'ǚ': 'v', 'ǜ': 'v', 'ü': 'v' };
  function boDau(s) { return s.replace(/[āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜü]/g, function (c) { return KHONG_DAU[c]; }); }
  var AM = /^(zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])?(iang|iong|uang|ueng|ang|eng|ing|ong|ian|iao|uai|uan|van|ai|ei|ao|ou|an|en|er|ia|ie|in|iu|ua|uo|ui|un|vn|ue|ve|a|o|e|i|u|v)r?$/;
  // Cat chuoi pinyin viet lien (lǚyóu) thanh dung n am tiet; nhieu cach thi uu tien
  // cach ma moi am tiet sau deu bat dau bang phu am (quy tac viet pinyin)
  function catAm(goc, n) {
    var kd = boDau(goc), tot = null;
    function di(i, con, ds) {
      if (tot) return;
      if (con === 0) { if (i === kd.length) tot = ds.slice(); return; }
      for (var j = kd.length - (con - 1); j > i; j--) {
        var a = kd.slice(i, j);
        if (!AM.test(a)) continue;
        if (ds.length && /^[aoe]/.test(a)) continue;
        ds.push(goc.slice(i, j)); di(j, con - 1, ds); ds.pop();
      }
    }
    di(0, n, []);
    return tot;
  }
  function amTiet(v) {
    var han = chuHan(v.zh);
    var py = String(v.py || '').toLowerCase().replace(/[.,!?;:，。！？…]/g, ' ').trim();
    if (!py || han.length < 2) return null;
    var ds = py.split(/[\s'’\-]+/).filter(Boolean);
    if (ds.length === han.length) return ds;
    // viet lien hoac lien mot phan: cat tung khuc, tong so am tiet phai bang so chu Han
    if (ds.length === 1) return catAm(ds[0], han.length);
    var con = han.length, out = [];
    for (var i = 0; i < ds.length; i++) {
      var conKhuc = ds.length - i - 1;
      var tim = null;
      for (var n = con - conKhuc; n >= 1 && !tim; n--) tim = catAm(ds[i], n);
      if (!tim) return null;
      out = out.concat(tim);
      con -= tim.length;
    }
    return con === 0 ? out : null;
  }
  function chuanBi(vocab, kieu) {
    var thay = {}, out = [];
    (vocab || []).forEach(function (v) {
      if (!v || !v.zh) return;
      var u = kieu === 'py' ? amTiet(v) : chuHan(v.zh);
      if (!u || u.length < 2 || u.length > 6) return;
      var k = u.join('|');
      if (thay[k]) return;
      thay[k] = 1;
      out.push({ u: u, zh: v.zh, py: v.py || '', vn: v.vn || '', hv: v.hv || '' });
    });
    return out;
  }

  /* ---------------- sinh luoi ---------------- */
  function tron(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function taoMot(tu) {
    var o = {};          // "x,y" -> { u, ngang, doc }
    var dat = [];
    var bb = { x0: 0, y0: 0, x1: -1, y1: -1 };
    function lay(x, y) { return o[x + ',' + y]; }
    function thu(w, x, y, ngang) {
      var dx = ngang ? 1 : 0, dy = ngang ? 0 : 1, cat = 0;
      if (lay(x - dx, y - dy) || lay(x + dx * w.u.length, y + dy * w.u.length)) return -1;
      var nx0 = Math.min(bb.x0, x), ny0 = Math.min(bb.y0, y);
      var nx1 = Math.max(bb.x1, x + dx * (w.u.length - 1)), ny1 = Math.max(bb.y1, y + dy * (w.u.length - 1));
      if (dat.length && (nx1 - nx0 + 1 > MAX_O || ny1 - ny0 + 1 > MAX_O)) return -1;
      for (var k = 0; k < w.u.length; k++) {
        var cx = x + dx * k, cy = y + dy * k, c = lay(cx, cy);
        if (c) {
          if (c.u !== w.u[k] || (ngang ? c.ngang : c.doc)) return -1;
          cat++;
        } else if (lay(cx + dy, cy + dx) || lay(cx - dy, cy - dx)) {
          return -1;   // cham canh voi tu khac
        }
      }
      return cat;
    }
    function datTu(w, x, y, ngang) {
      var dx = ngang ? 1 : 0, dy = ngang ? 0 : 1;
      for (var k = 0; k < w.u.length; k++) {
        var key = (x + dx * k) + ',' + (y + dy * k);
        var c = o[key] || (o[key] = { u: w.u[k] });
        c[ngang ? 'ngang' : 'doc'] = 1;
      }
      bb.x0 = Math.min(bb.x0, x); bb.y0 = Math.min(bb.y0, y);
      bb.x1 = Math.max(bb.x1, x + dx * (w.u.length - 1)); bb.y1 = Math.max(bb.y1, y + dy * (w.u.length - 1));
      dat.push({ w: w, x: x, y: y, ngang: ngang });
    }
    var cat = 0;
    var ds = tron(tu).sort(function (a, b) { return b.u.length - a.u.length + (Math.random() - 0.5) * 2.5; });
    datTu(ds[0], 0, 0, true);
    for (var lap = 0; lap < 2; lap++) {
      ds.forEach(function (w) {
        if (dat.length >= MAX_TU || dat.some(function (d) { return d.w === w; })) return;
        var tot = null;
        dat.forEach(function (p) {
          var ngang = !p.ngang;
          for (var i = 0; i < w.u.length; i++) for (var j = 0; j < p.w.u.length; j++) {
            if (w.u[i] !== p.w.u[j]) continue;
            var px = p.x + (p.ngang ? j : 0), py = p.y + (p.ngang ? 0 : j);
            var x = ngang ? px - i : px, y = ngang ? py : py - i;
            var n = thu(w, x, y, ngang);
            if (n > 0 && (!tot || n + Math.random() * 0.5 > tot.n)) tot = { x: x, y: y, ngang: ngang, n: n };
          }
        });
        if (tot) { datTu(w, tot.x, tot.y, tot.ngang); cat += tot.n; }
      });
    }
    // Bai it chu chung thi khong du tu giao nhau: dat them tu dung rieng (cach o trong),
    // chon cho lam khung luoi to ra it nhat
    ds.forEach(function (w) {
      if (dat.length >= MAX_TU || dat.some(function (d) { return d.w === w; })) return;
      var tot = null;
      [true, false].forEach(function (ngang) {
        var dai = w.u.length;
        for (var y = bb.y0 - (ngang ? 1 : dai); y <= bb.y1 + 1; y++) for (var x = bb.x0 - (ngang ? dai : 1); x <= bb.x1 + 1; x++) {
          var n = thu(w, x, y, ngang);
          if (n < 0) continue;
          var x1 = Math.max(bb.x1, x + (ngang ? dai - 1 : 0)), y1 = Math.max(bb.y1, y + (ngang ? 0 : dai - 1));
          var dt = (x1 - Math.min(bb.x0, x) + 1) * (y1 - Math.min(bb.y0, y) + 1) - n * 40 + Math.random();
          if (!tot || dt < tot.dt) tot = { x: x, y: y, ngang: ngang, n: n, dt: dt };
        }
      });
      if (tot) { datTu(w, tot.x, tot.y, tot.ngang); cat += tot.n; }
    });
    var rong = bb.x1 - bb.x0 + 1, cao = bb.y1 - bb.y0 + 1;
    return { dat: dat, o: o, bb: bb, diem: dat.length * 10 + cat * 3 - Math.abs(rong - cao) * 0.6 - rong * cao * 0.04 };
  }

  // Tra { w, h, cells[y][x] = { u, so } | null, words: [...] } — luoi tot nhat sau nhieu lan thu
  function taoLuoi(vocab, kieu, soLan) {
    var tu = chuanBi(vocab, kieu);
    if (tu.length < 4) return null;
    var best = null;
    for (var i = 0; i < (soLan || SO_LAN); i++) {
      var r = taoMot(tu);
      if (!best || r.diem > best.diem) best = r;
    }
    if (best.dat.length < 4) return null;
    var w = best.bb.x1 - best.bb.x0 + 1, h = best.bb.y1 - best.bb.y0 + 1;
    var cells = [];
    for (var y = 0; y < h; y++) { cells.push([]); for (var x = 0; x < w; x++) cells[y].push(null); }
    Object.keys(best.o).forEach(function (k) {
      var p = k.split(','), x = +p[0] - best.bb.x0, y = +p[1] - best.bb.y0;
      cells[y][x] = { u: best.o[k].u };
    });
    // danh so theo thu tu doc: tren xuong, trai sang
    var words = best.dat.map(function (d) {
      return { x: d.x - best.bb.x0, y: d.y - best.bb.y0, huong: d.ngang ? 'ngang' : 'doc', tu: d.w.u, zh: d.w.zh, py: d.w.py, vn: d.w.vn, hv: d.w.hv };
    });
    words.sort(function (a, b) { return a.y - b.y || a.x - b.x || (a.huong === 'ngang' ? -1 : 1); });
    var so = 0, soO = {};
    words.forEach(function (wd) {
      var k = wd.x + ',' + wd.y;
      if (!soO[k]) { soO[k] = ++so; cells[wd.y][wd.x].so = so; }
      wd.so = soO[k];
    });
    return { w: w, h: h, cells: cells, words: words };
  }

  /* ---------------- giao dien ---------------- */
  if (typeof document === 'undefined') { g.LopOChu = { _taoLuoi: taoLuoi }; return; }

  var S = { vocab: [], nhan: '', kieu: 'han', hv: false, soTo: 0, to: [], luot: 0, luoi: null, chon: -1, giai: {}, tieng: true, built: false };
  var root;
  function $(s) { return root.querySelector(s); }
  function $all(s) { return Array.prototype.slice.call(root.querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var ac = null;
  function tone(f, dai, kieu, to, tre) {
    if (!S.tieng) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ac = ac || new AC();
      if (ac.state === 'suspended') ac.resume();
      var t0 = ac.currentTime + (tre || 0), o = ac.createOscillator(), gn = ac.createGain();
      o.type = kieu || 'sine'; o.frequency.setValueAtTime(f, t0);
      gn.gain.setValueAtTime(0.0001, t0);
      gn.gain.exponentialRampToValueAtTime(to || 0.15, t0 + 0.01);
      gn.gain.exponentialRampToValueAtTime(0.0001, t0 + dai);
      o.connect(gn); gn.connect(ac.destination); o.start(t0); o.stop(t0 + dai + 0.03);
    } catch (e) { /* bo qua */ }
  }
  function sDung() { [660, 880, 1175].forEach(function (f, i) { tone(f, 0.22, 'triangle', 0.18, i * 0.09); }); }
  function sSai() { tone(240, 0.3, 'sawtooth', 0.08); }
  function sChon() { tone(720, 0.06, 'sine', 0.08); }
  function docZh(t) {
    if (!S.tieng || !t || !window.speechSynthesis) return;
    try { speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(t); u.lang = 'zh-CN'; u.rate = 0.85; speechSynthesis.speak(u); } catch (e) { /* bo qua */ }
  }

  function dung() {
    root = document.createElement('div');
    root.id = 'lopOChu';
    root.className = 'oc';
    root.hidden = true;
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Ô chữ');
    root.innerHTML =
      '<header class="oc-bar">' +
        '<b class="oc-title">🔠 Ô chữ</b><span class="oc-sub" id="ocSub"></span><span class="oc-gap"></span>' +
        '<button type="button" class="oc-btn" id="ocMoi" hidden>🎲 Ô chữ mới</button>' +
        '<button type="button" class="oc-btn" id="ocTatCa" hidden>Hiện tất cả</button>' +
        '<button type="button" class="oc-btn oc-ic" id="ocTieng" title="Bật/tắt âm thanh">🔊</button>' +
        '<button type="button" class="oc-btn oc-ic" id="ocFull" title="Toàn màn hình">⛶</button>' +
        '<button type="button" class="oc-btn" id="ocDong">✕ Đóng</button>' +
      '</header>' +
      '<main class="oc-man" id="ocMan"></main>';
    document.body.appendChild(root);
    $('#ocDong').addEventListener('click', dong);
    $('#ocMoi').addEventListener('click', function () { taoMoi(); });
    $('#ocTatCa').addEventListener('click', hienTatCa);
    $('#ocTieng').addEventListener('click', function () { S.tieng = !S.tieng; this.textContent = S.tieng ? '🔊' : '🔇'; });
    $('#ocFull').addEventListener('click', function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (root.requestFullscreen) root.requestFullscreen().catch(function () { /* bo qua */ });
    });
    window.addEventListener('keydown', phim, true);
    window.addEventListener('resize', function () { if (!root.hidden && S.luoi) coO(); });
    S.built = true;
  }

  function veSanh() {
    if (window.NhacNen) window.NhacNen.tat();
    $('#ocMoi').hidden = true;
    $('#ocTatCa').hidden = true;
    $('#ocSub').textContent = S.nhan;
    S.kieu = 'han'; // tro choi khong dung pinyin
    var nHan = chuanBi(S.vocab, 'han').length;
    $('#ocMan').innerHTML =
      '<div class="oc-sanh">' +
        '<h2>Ô chữ từ vựng</h2>' +
        '<p>Web tự xếp các từ của bài đã chọn thành ô chữ. Cô chọn một gợi ý, cả lớp đoán, bấm <b>Hiện từ</b> để lật.</p>' +
        '<div class="oc-truong"><span>Mỗi ô là</span><div class="oc-chon" id="ocKieu">' +
          '<button type="button" data-k="han">一 Một chữ Hán <small>' + nHan + ' từ</small></button></div></div>' +
        '<div class="oc-truong"><span>Chia tổ</span><div class="oc-chon" id="ocTo">' +
          [0, 2, 3, 4].map(function (n) { return '<button type="button" data-n="' + n + '">' + (n ? n + ' tổ' : 'Không') + '</button>'; }).join('') + '</div></div>' +
        '<label class="oc-hv"><input type="checkbox" id="ocHv"' + (S.hv ? ' checked' : '') + '> Gợi ý thêm âm Hán Việt</label>' +
        '<button type="button" class="oc-go" id="ocTao">Tạo ô chữ ▶</button>' +
        '<p class="oc-loi" id="ocLoi" role="alert"></p>' +
      '</div>';
    function veChon() {
      $all('#ocKieu button').forEach(function (b) { b.classList.toggle('is-on', b.getAttribute('data-k') === S.kieu); });
      $all('#ocTo button').forEach(function (b) { b.classList.toggle('is-on', +b.getAttribute('data-n') === S.soTo); });
    }
    $all('#ocKieu button').forEach(function (b) { b.addEventListener('click', function () { S.kieu = b.getAttribute('data-k'); veChon(); }); });
    $all('#ocTo button').forEach(function (b) { b.addEventListener('click', function () { S.soTo = +b.getAttribute('data-n'); veChon(); }); });
    $('#ocHv').addEventListener('change', function () { S.hv = this.checked; });
    $('#ocTao').addEventListener('click', function () {
      S.to = [];
      for (var i = 0; i < S.soTo; i++) S.to.push({ ten: 'Tổ ' + (i + 1), diem: 0 });
      S.luot = 0;
      taoMoi();
    });
    veChon();
  }

  function taoMoi() {
    var l = taoLuoi(S.vocab, S.kieu);
    if (!l) {
      if ($('#ocLoi')) $('#ocLoi').textContent = 'Chưa đủ từ để xếp ô chữ (cần ít nhất 4 từ có từ 2 ' + (S.kieu === 'py' ? 'âm tiết' : 'chữ') + ' trở lên). Cô chọn thêm bài nhé.';
      return;
    }
    S.luoi = l; S.chon = -1; S.giai = {};
    veLuoi();
  }

  function veLuoi() {
    var l = S.luoi;
    $('#ocMoi').hidden = false;
    $('#ocTatCa').hidden = false;
    var htmlO = '';
    for (var y = 0; y < l.h; y++) for (var x = 0; x < l.w; x++) {
      var c = l.cells[y][x];
      htmlO += c
        ? '<div class="oc-o" data-x="' + x + '" data-y="' + y + '">' + (c.so ? '<i>' + c.so + '</i>' : '') + '<span></span></div>'
        : '<div class="oc-trong"></div>';
    }
    function dsGoiY(huong) {
      return l.words.map(function (wd, i) {
        if (wd.huong !== huong) return '';
        return '<button type="button" class="oc-gy" data-i="' + i + '"><b>' + wd.so + '</b><span>' + esc(wd.vn) +
          (S.hv && wd.hv ? ' <em>(' + esc(wd.hv) + ')</em>' : '') + ' <small>· ' + wd.tu.length + ' ô</small></span></button>';
      }).join('');
    }
    $('#ocMan').innerHTML =
      '<div class="oc-choi' + (S.kieu === 'py' ? ' is-py' : '') + '">' +
        '<div class="oc-trai"><div class="oc-luoi" id="ocLuoi" style="grid-template-columns:repeat(' + l.w + ',var(--o));grid-template-rows:repeat(' + l.h + ',var(--o))">' + htmlO + '</div></div>' +
        '<aside class="oc-phai">' +
          '<h3>→ Hàng ngang</h3><div class="oc-ds">' + dsGoiY('ngang') + '</div>' +
          '<h3>↓ Hàng dọc</h3><div class="oc-ds">' + dsGoiY('doc') + '</div>' +
          '<div class="oc-dk"><button type="button" class="oc-go oc-go-sm" id="ocHien" disabled>✓ Hiện từ <kbd>Enter</kbd></button>' +
          '<button type="button" class="oc-btn oc-btn-sang" id="ocSai" disabled>✗ Sai <kbd>⌫</kbd></button></div>' +
          '<div class="oc-to" id="ocToDs"></div>' +
        '</aside>' +
      '</div>';
    $all('.oc-gy').forEach(function (b) { b.addEventListener('click', function () { chonTu(+b.getAttribute('data-i')); }); });
    $all('.oc-o').forEach(function (o) {
      o.addEventListener('click', function () {
        var x = +o.getAttribute('data-x'), y = +o.getAttribute('data-y');
        var ds = [];
        l.words.forEach(function (wd, i) { if (oCua(wd).some(function (p) { return p[0] === x && p[1] === y; })) ds.push(i); });
        if (!ds.length) return;
        // bam lai vao o dang chon thi doi sang tu con lai cat qua o do
        var k = ds.indexOf(S.chon);
        chonTu(ds[k >= 0 ? (k + 1) % ds.length : 0]);
      });
    });
    $('#ocHien').addEventListener('click', hienTu);
    $('#ocSai').addEventListener('click', sai);
    veTo();
    coO();
    ve();
    if (window.NhacNen) window.NhacNen.bat({ kieu: 'em' });
  }
  function coO() {
    var l = S.luoi, t = $('.oc-trai');
    if (!l || !t) return;
    var o = Math.floor(Math.min((t.clientWidth - 8) / l.w, (t.clientHeight - 8) / l.h, 84));
    $('#ocLuoi').style.setProperty('--o', Math.max(28, o) + 'px');
  }
  function oCua(wd) {
    var out = [];
    for (var k = 0; k < wd.tu.length; k++) out.push(wd.huong === 'ngang' ? [wd.x + k, wd.y] : [wd.x, wd.y + k]);
    return out;
  }
  function ve() {
    var l = S.luoi, hien = {}, sang = {};
    l.words.forEach(function (wd, i) {
      oCua(wd).forEach(function (p) {
        if (S.giai[i]) hien[p[0] + ',' + p[1]] = 1;
        if (i === S.chon) sang[p[0] + ',' + p[1]] = 1;
      });
    });
    $all('.oc-o').forEach(function (o) {
      var k = o.getAttribute('data-x') + ',' + o.getAttribute('data-y');
      var c = l.cells[+o.getAttribute('data-y')][+o.getAttribute('data-x')];
      o.classList.toggle('is-sang', !!sang[k]);
      o.classList.toggle('is-hien', !!hien[k]);
      o.querySelector('span').textContent = hien[k] ? c.u : '';
    });
    $all('.oc-gy').forEach(function (b) {
      var i = +b.getAttribute('data-i');
      b.classList.toggle('is-chon', i === S.chon);
      b.classList.toggle('is-xong', !!S.giai[i]);
    });
    var co = S.chon >= 0 && !S.giai[S.chon];
    $('#ocHien').disabled = !co;
    $('#ocSai').disabled = !co;
    var xong = Object.keys(S.giai).length;
    $('#ocSub').textContent = S.nhan + (S.nhan ? ' · ' : '') + 'Đã giải ' + xong + '/' + l.words.length;
  }
  function veTo() {
    var box = $('#ocToDs');
    if (!box) return;
    box.innerHTML = S.to.map(function (t, i) {
      return '<div class="oc-to-o' + (i === S.luot ? ' is-luot' : '') + '"><span>' + esc(t.ten) + '</span><b>' + t.diem + '</b></div>';
    }).join('');
  }
  function chonTu(i) {
    S.chon = i;
    sChon();
    ve();
  }
  function hienTu() {
    var i = S.chon;
    if (i < 0 || S.giai[i]) return;
    S.giai[i] = 1;
    sDung();
    docZh(S.luoi.words[i].zh);
    if (S.to.length) { S.to[S.luot].diem += 10; S.luot = (S.luot + 1) % S.to.length; veTo(); }
    ve();
    $all('.oc-o.is-sang').forEach(function (o) { o.classList.remove('is-pop'); void o.offsetWidth; o.classList.add('is-pop'); });
    if (Object.keys(S.giai).length === S.luoi.words.length) setTimeout(xongHet, 900);
  }
  function sai() {
    var i = S.chon;
    if (i < 0 || S.giai[i]) return;
    sSai();
    $all('.oc-o.is-sang').forEach(function (o) { o.classList.remove('is-lac'); void o.offsetWidth; o.classList.add('is-lac'); });
    if (S.to.length) { S.luot = (S.luot + 1) % S.to.length; veTo(); }
  }
  function hienTatCa() {
    if (!S.luoi) return;
    S.luoi.words.forEach(function (_, i) { S.giai[i] = 1; });
    S.chon = -1;
    ve();
  }
  function xongHet() {
    if (window.NhacNen) window.NhacNen.tat();
    [523, 659, 784, 1047].forEach(function (f, i) { tone(f, 0.3, 'triangle', 0.2, i * 0.12); });
    var box = $('#ocToDs');
    if (box && S.to.length) {
      var max = Math.max.apply(null, S.to.map(function (t) { return t.diem; }));
      box.insertAdjacentHTML('afterbegin', '<p class="oc-thang">🏆 ' + S.to.filter(function (t) { return t.diem === max; }).map(function (t) { return esc(t.ten); }).join(', ') + ' thắng!</p>');
    }
  }

  function phim(e) {
    if (!root || root.hidden) return;
    if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
    e.stopImmediatePropagation();
    if (e.key === 'Escape') { if (!document.fullscreenElement) dong(); return; }
    if (!S.luoi || !$('#ocLuoi')) return;
    if (e.key === 'Enter') { e.preventDefault(); hienTu(); }
    else if (e.key === 'Backspace') { e.preventDefault(); sai(); }
    else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      var n = S.luoi.words.length, i = S.chon;
      for (var k = 0; k < n; k++) {
        i = (i + (e.key === 'ArrowDown' ? 1 : n - 1)) % n;
        if (i < 0) i = n - 1;
        if (!S.giai[i]) break;
      }
      chonTu(i);
    }
  }

  function mo(opt) {
    opt = opt || {};
    if (!S.built) dung();
    S.vocab = opt.vocab || [];
    S.nhan = opt.nhan || '';
    S.luoi = null;
    root.hidden = false;
    document.documentElement.classList.add('oc-open');
    veSanh();
  }
  function dong() {
    if (window.NhacNen) window.NhacNen.tat();
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    if (window.speechSynthesis) speechSynthesis.cancel();
    root.hidden = true;
    document.documentElement.classList.remove('oc-open');
  }

  g.LopOChu = { mo: mo, dong: dong, _taoLuoi: taoLuoi };
})(typeof window !== 'undefined' ? window : globalThis);
