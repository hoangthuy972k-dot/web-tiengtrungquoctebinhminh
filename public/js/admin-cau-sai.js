/* Trang Bao cao — tab "📊 Câu lớp hay sai": cau / tu ca lop lam sai nhieu nhat trong tuan (GET /api/admin/cau-sai,
   xem cau-lop-sai.js) de co giao giang lai tren lop. Chon lop + tuan, In, Chieu len lop (tung cau, an ten, bam moi hien
   dap an), Tao bai on (mo /lop voi "Thẻ trả lời" nap san cac cau trac nghiem / dien tu nay).
   Link thang: /bao-cao#cau-sai (hoac #cau-sai=<ma lop>) — nut "📊 Câu lớp hay sai tuần này" o /lop. */
(function () {
  'use strict';
  var PW_KEY = 'hyv_admin_pw';
  var LOP_KEY = 'hyv_csai_lop';
  var ON_KEY = 'hyv_csai_on';
  var LOAI = { 'trac-nghiem': 'Trắc nghiệm', 'dien-tu': 'Điền từ', 'sap-xep': 'Sắp xếp câu', nghe: 'Nghe', 'tu-vung': 'Từ vựng' };
  var NGUON = { luyen: 'Luyện tập trong bài', kt: 'Kiểm tra cuối bài', obc: 'Ôn bài cũ', ohn: 'Hôm nay em ôn gì' };
  var CHU = 'ABCDEF';
  var S = { d: null, lop: '', tuan: 0, dang: false, loi: '', chieu: null };

  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  // Chu Han (ke ca dau cau tieng Trung) trong Noto Serif SC, phan tieng Viet giu Be Vietnam Pro
  var HAN_RUN = /([㐀-鿿豈-﫿][　-〿㐀-鿿豈-﫿＀-￯\s]*)/g;
  function zh(s) {
    return String(s == null ? '' : s).split(HAN_RUN).map(function (p, i) {
      return i % 2 ? '<span class="cs-zh" lang="zh">' + esc(p) + '</span>' : esc(p);
    }).join('');
  }
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function docLS(k) { try { return localStorage.getItem(k) || ''; } catch (e) { return ''; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* bo qua */ } }
  function goi(url) {
    return fetch(url, { headers: { 'X-Admin-Password': pw() } }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw new Error(j.error || 'Lỗi máy chủ.'); return j; });
    });
  }
  function hop() { return $('#trCauSai'); }
  function dangMo() { var h = hop(); return h && !h.hidden; }

  function tai(moi) {
    if (!pw()) return Promise.resolve();
    S.dang = true; S.loi = '';
    if (dangMo()) ve();
    var q = '/api/admin/cau-sai?tuan=' + S.tuan + (S.lop ? '&classId=' + encodeURIComponent(S.lop) : '') + (moi ? '&moi=1' : '');
    return goi(q).then(function (d) {
      S.d = d; S.lop = d.lop ? d.lop.id : '';
      if (S.lop) ghiLS(LOP_KEY, S.lop);
    }).catch(function (e) { S.loi = e.message; }).then(function () { S.dang = false; ve(); });
  }

  /* ---------------- ve ---------------- */
  function nhanBai(c) {
    var b = c.bai || {};
    return [b.cap, b.so != null ? 'Bài ' + b.so : ''].filter(Boolean).join(' · ') || 'Ôn tập';
  }
  function thanhSo(c, si) {
    var mau = c.lam != null && c.lam >= c.hs ? c.lam : si;
    var pt = mau > 0 ? Math.min(100, Math.round(c.hs * 100 / mau)) : 100;
    return '<div class="cs-so" title="' + esc(c.lan + ' lượt sai') + '">' +
      '<div class="cs-bar" aria-hidden="true"><span style="width:' + pt + '%"></span></div>' +
      '<div class="cs-bar-chu"><b>' + c.hs + '</b>/' + (mau || '?') + ' bạn sai</div>' +
      '<div class="cs-phu">' + (c.lam != null && c.lam >= c.hs ? 'trong số bạn đã làm phần này' : 'so với cả lớp (có tài khoản)') + ' · ' + c.lan + ' lượt</div></div>';
  }
  function deHtml(c) {
    var h = '';
    if (c.lenh) h += '<p class="cs-lenh">' + esc(c.lenh) + '</p>';
    if (c.loai === 'nghe' && c.nghe) h += '<p class="cs-de">🎧 ' + zh(c.nghe) + (c.py ? ' <span class="cs-py">' + esc(c.py) + '</span>' : '') + '</p>';
    if (c.de) h += '<p class="cs-de">' + zh(c.de) + '</p>';
    if (c.ctx) h += '<p class="cs-ctx">' + zh(c.ctx) + '</p>';
    if (c.loai === 'sap-xep' && c.tu) h += '<p class="cs-tu">' + c.tu.map(function (w) { return '<span class="cs-o">' + zh(w) + '</span>'; }).join('') + '</p>';
    if (c.opts && c.opts.length) {
      h += '<ol class="cs-opts">' + c.opts.map(function (o, i) {
        var la = c.saiNhieu && o.replace(/\s+/g, '') === c.saiNhieu.a.replace(/\s+/g, '');
        return '<li class="' + (i === c.dung ? 'is-dung' : la ? 'is-sai' : '') + '"><b>' + CHU.charAt(i) + '.</b> ' + zh(o) + (i === c.dung ? ' ✓' : '') + '</li>';
      }).join('') + '</ol>';
    }
    return h;
  }
  function theCau(c, i, si) {
    return '<article class="cs-the">' +
      '<div class="cs-hang"><span class="cs-stt">' + (i + 1) + '</span><div class="cs-noi">' +
      '<div class="cs-nhan"><span class="cs-tag">' + esc(nhanBai(c)) + '</span><span class="cs-loai cs-loai-' + esc(c.loai) + '">' + esc(LOAI[c.loai] || c.loai) + '</span>' +
      (NGUON[c.nguon] ? '<span class="cs-nguon">' + esc(NGUON[c.nguon]) + '</span>' : '') + '</div>' +
      deHtml(c) +
      '<div class="cs-dap"><span class="cs-dap-dung">✓ Đáp án: <b>' + zh(c.dap) + '</b></span>' +
      (c.saiNhieu ? '<span class="cs-dap-sai">✗ Hay chọn sai: <b>' + zh(c.saiNhieu.a) + '</b>' + (c.saiNhieu.n > 1 ? ' (' + c.saiNhieu.n + ' lần)' : '') + '</span>' : '') + '</div>' +
      (c.why ? '<p class="cs-why">💡 ' + zh(c.why) + '</p>' : '') +
      '</div>' + thanhSo(c, si) + '</div>' +
      '<details class="cs-ai"><summary>Ai sai? (' + c.ten.length + ')</summary><p>' + c.ten.map(esc).join(', ') + '</p></details>' +
      '</article>';
  }
  function hangTu(w, i, si) {
    var pt = si > 0 ? Math.min(100, Math.round(w.hs * 100 / si)) : 100;
    var chu = [];
    if (w.quen) chu.push('<b>' + w.quen + '</b> bạn quên (' + w.lanQuen + ' lượt)');
    if (w.no) chu.push(w.no + ' bạn còn nợ từ này');
    return '<li class="cs-tu-hang">' +
      '<span class="cs-stt">' + (i + 1) + '</span>' +
      '<span class="cs-tu-zh" lang="zh">' + esc(w.zh) + '</span>' +
      '<span class="cs-tu-nghia">' + (w.py ? '<span class="cs-py">' + esc(w.py) + '</span>' : '') + (w.vn ? '<span>' + esc(w.vn) + '</span>' : '') + '</span>' +
      '<span class="cs-tu-so"><span class="cs-bar" aria-hidden="true"><span style="width:' + pt + '%"></span></span><span class="cs-phu">' + chu.join(' · ') + '</span></span>' +
      '<details class="cs-ai cs-ai-tu"><summary>Ai? (' + w.ten.length + ')</summary><p>' + w.ten.map(esc).join(', ') + '</p></details>' +
      '</li>';
  }
  function ve() {
    var h = hop();
    if (!h) return;
    var d = S.d;
    var lops = d && d.lops ? d.lops : [];
    var dau = '<div class="admin-section-title">📊 Câu lớp hay sai</div>' +
      '<p class="tr-hint">Những câu và từ cả lớp làm sai nhiều nhất khi tự luyện ở nhà (luyện tập trong bài, Kiểm tra cuối bài, Ôn bài cũ, “Hôm nay em ôn gì”) — để cô giảng lại trên lớp. Xếp theo số bạn sai.</p>';
    var cong = '<div class="cs-cong-cu">' +
      '<label class="cs-chon">Lớp <select data-cs-lop>' + (lops.length ? lops.map(function (l) {
        return '<option value="' + esc(l.id) + '"' + (l.id === S.lop ? ' selected' : '') + '>' + esc(l.ten) + ' (' + l.si + ' bạn)</option>';
      }).join('') : '<option value="">— chưa có lớp —</option>') + '</select></label>' +
      '<div class="cs-tuan" role="group" aria-label="Khoảng thời gian">' + [[0, 'Tuần này'], [1, 'Tuần trước'], [4, '4 tuần']].map(function (t) {
        return '<button type="button" class="gy-loc-nut' + (S.tuan === t[0] ? ' is-on' : '') + '" data-cs-tuan="' + t[0] + '" aria-pressed="' + (S.tuan === t[0]) + '">' + t[1] + '</button>';
      }).join('') + '</div>' +
      '<button type="button" class="btn btn-outline" data-cs-moi title="Đọc lại dữ liệu mới nhất">🔄 Làm mới</button>' +
      '<span class="cs-gian"></span>' +
      '<button type="button" class="btn btn-outline" data-cs-in' + (d && d.cau.length ? '' : ' disabled') + '>🖨️ In</button>' +
      '<button type="button" class="btn btn-outline" data-cs-chieu' + (d && d.cau.length ? '' : ' disabled') + '>📽️ Chiếu lên lớp</button>' +
      '<button type="button" class="btn btn-primary" data-cs-on' + (d && soCauOn() ? '' : ' disabled') + ' title="Mở Chế độ lớp học → Thẻ trả lời với các câu trắc nghiệm / điền từ này">▶ Tạo bài ôn</button>' +
      '</div>';
    var than;
    if (!d && S.dang) than = '<p class="admin-empty">Đang tải…</p>';
    else if (S.loi) than = '<p class="admin-empty">⚠️ ' + esc(S.loi) + '</p>';
    else if (!d) than = '<p class="admin-empty">Đăng nhập trang quản trị để xem.</p>';
    else if (!d.lop) than = '<p class="admin-empty">Chưa có lớp nào. Tạo lớp ở tab “🏫 Lớp &amp; bài giao” trước nhé.</p>';
    else {
      var tom = '<p class="cs-tom"><b>' + esc(d.lop.ten) + '</b> · ' + esc(d.nhan) + ' · ' + d.coKho + '/' + d.si + ' bạn có dữ liệu luyện tập · ' + d.coSai + ' bạn có câu sai trong khoảng này' +
        (S.dang ? ' · <i>đang tải…</i>' : '') + '</p>';
      var rong = '<div class="cs-rong"><p><b>Chưa có dữ liệu ' + (S.tuan === 1 ? 'tuần trước' : S.tuan === 4 ? '4 tuần gần đây' : 'tuần này') + '</b> — học sinh cần đăng nhập khi luyện tập.</p>' +
        '<p>Web chỉ ghi lại câu sai của bạn <b>đã đăng nhập tài khoản</b> (và đã vào lớp này) khi luyện tập trên trang chủ, làm Kiểm tra cuối bài hoặc Ôn bài cũ. Bạn học không đăng nhập thì câu sai chỉ nằm trên máy của bạn đó.</p></div>';
      than = tom +
        '<h3 class="cs-h3">❌ Câu sai nhiều nhất</h3>' +
        (d.cau.length ? '<div class="cs-ds">' + d.cau.map(function (c, i) { return theCau(c, i, d.si); }).join('') + '</div>' : rong) +
        '<h3 class="cs-h3">🧠 Từ hay quên nhất</h3>' +
        (d.tuVung.length ? '<ol class="cs-tu-ds">' + d.tuVung.map(function (w, i) { return hangTu(w, i, d.si); }).join('') + '</ol>' +
          '<p class="cs-chu-thich">“Quên” = trả lời sai từ này trong lịch ôn / bài tập trong khoảng đã chọn. “Còn nợ” = từ đang nằm trong danh sách từ sai ở bài Ôn tập của bạn đó (chưa ôn lại đúng — không theo tuần).</p>'
          : '<div class="cs-rong"><p>Chưa có từ nào bị quên trong khoảng này.</p></div>');
    }
    var chu = '<p class="cs-chu-thich">ⓘ Dữ liệu chỉ đến từ học sinh <b>đăng nhập</b> khi luyện tập (đồng bộ lên tài khoản). Câu làm ở trang bài học đầy đủ (lessons/…) và trong giờ chơi trên lớp không tính ở đây. ' +
      'Số “bạn đã làm” ước lượng từ phần bài các bạn nộp điểm trong khoảng này. Kết quả được giữ 5 phút — bấm Làm mới để đọc lại ngay. Chỉ trang quản trị xem được; học sinh không thấy dữ liệu của bạn khác.</p>';
    h.innerHTML = '<section class="admin-section cs-wrap">' + dau + cong + '<div class="cs-in-dau">Câu lớp hay sai' + (d && d.lop ? ' — ' + esc(d.lop.ten) + ' — ' + esc(d.nhan) : '') + '</div>' + than + chu + '</section>';
  }

  /* ---------------- In ---------------- */
  function inRa() {
    document.documentElement.classList.add('cs-dang-in');
    var bo = function () { document.documentElement.classList.remove('cs-dang-in'); window.removeEventListener('afterprint', bo); };
    window.addEventListener('afterprint', bo);
    window.print();
    setTimeout(bo, 1500);
  }

  /* ---------------- Chieu len lop: tung cau, an ten, bam moi hien dap an ---------------- */
  function moChieu() {
    if (!S.d || !S.d.cau.length) return;
    S.chieu = { i: 0, lo: false };
    var o = document.createElement('div');
    o.className = 'cs-chieu';
    o.id = 'csChieu';
    o.setAttribute('role', 'dialog');
    o.setAttribute('aria-modal', 'true');
    o.setAttribute('aria-label', 'Chiếu câu lớp hay sai');
    document.body.appendChild(o);
    document.documentElement.classList.add('cs-chieu-mo');
    try { if (o.requestFullscreen) o.requestFullscreen().catch(function () { /* bo qua */ }); } catch (e) { /* bo qua */ }
    veChieu();
  }
  function dongChieu() {
    var o = $('#csChieu');
    if (o) o.remove();
    S.chieu = null;
    document.documentElement.classList.remove('cs-chieu-mo');
    try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) { /* bo qua */ }
  }
  function veChieu() {
    var o = $('#csChieu'), ds = S.d.cau, k = S.chieu, c = ds[k.i];
    if (!o || !c) return;
    var de = '';
    if (c.loai === 'nghe' && c.nghe) de += '<div class="csc-de"><span class="csc-nghe">🎧</span> ' + (k.lo ? zh(c.nghe) : '<span class="csc-an">(cô đọc câu cho cả lớp nghe)</span>') + '</div>';
    if (c.de) de += '<div class="csc-de">' + zh(c.de) + '</div>';
    if (c.ctx) de += '<div class="csc-ctx">' + zh(c.ctx) + '</div>';
    if (c.loai === 'sap-xep' && c.tu) de += '<div class="csc-tu">' + tronTu(c).map(function (w) { return '<span class="csc-o">' + zh(w) + '</span>'; }).join('') + '</div>';
    var opts = c.opts && c.opts.length ? '<ol class="csc-opts">' + c.opts.map(function (x, i) {
      return '<li class="' + (k.lo && i === c.dung ? 'is-dung' : k.lo ? 'is-mo' : '') + '"><b>' + CHU.charAt(i) + '</b><span>' + zh(x) + '</span></li>';
    }).join('') + '</ol>' : '';
    var dap = k.lo
      ? '<div class="csc-dap"><div class="csc-dap-chu">✓ ' + zh(c.dap) + '</div>' +
        (c.saiNhieu ? '<div class="csc-sai">Nhiều bạn chọn nhầm: ' + zh(c.saiNhieu.a) + '</div>' : '') +
        (c.why ? '<div class="csc-why">💡 ' + zh(c.why) + '</div>' : '') + '</div>'
      : '<button type="button" class="csc-hien" data-csc-hien>👆 Bấm để hiện đáp án <small>(Space)</small></button>';
    o.innerHTML = '<div class="csc-dau"><span class="csc-so">Câu ' + (k.i + 1) + '/' + ds.length + '</span>' +
      '<span class="cs-tag">' + esc(nhanBai(c)) + '</span><span class="cs-loai cs-loai-' + esc(c.loai) + '">' + esc(LOAI[c.loai] || c.loai) + '</span>' +
      '<span class="csc-dem">' + c.hs + ' bạn từng sai câu này</span>' +
      '<button type="button" class="csc-x" data-csc-dong aria-label="Đóng (Esc)">✕</button></div>' +
      '<div class="csc-than" data-csc-than>' + (c.lenh ? '<div class="csc-lenh">' + esc(c.lenh) + '</div>' : '') + de + opts + dap + '</div>' +
      '<div class="csc-chan"><button type="button" class="csc-nut" data-csc-lui' + (k.i ? '' : ' disabled') + '>← Câu trước</button>' +
      '<span class="csc-goi">← → đổi câu · Space hiện đáp án · Esc thoát</span>' +
      '<button type="button" class="csc-nut" data-csc-toi' + (k.i + 1 < ds.length ? '' : ' disabled') + '>Câu sau →</button></div>';
  }
  // Cau sap xep: tu luu theo dung thu tu dap an -> tron 1 lan cho moi cau (khong lo dap an tren man chieu)
  function tronTu(c) {
    var k = S.chieu;
    k.tron = k.tron || {};
    if (!k.tron[c.id]) {
      var a = c.tu.slice(), dap = c.tu.join('');
      for (var lan = 0; lan < 6 && a.join('') === dap && a.length > 1; lan++) {
        for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      }
      k.tron[c.id] = a;
    }
    return k.tron[c.id];
  }
  function doiCau(n) {
    var k = S.chieu;
    if (!k) return;
    var i = k.i + n;
    if (i < 0 || i >= S.d.cau.length) return;
    k.i = i; k.lo = false;
    veChieu();
  }

  /* ---------------- Tao bai on: Thẻ trả lời (/lop) voi cac cau nay ---------------- */
  function cauOn() {
    if (!S.d) return [];
    var daps = S.d.cau.filter(function (c) { return c.loai === 'dien-tu'; }).map(function (c) { return c.dap; });
    var out = [];
    S.d.cau.forEach(function (c) {
      var ctx = [c.lenh, c.ctx].filter(Boolean).join(' — ');
      if ((c.loai === 'trac-nghiem' || c.loai === 'tu-vung') && c.de && c.opts && c.opts.length >= 2) {
        out.push({ options: c.opts.slice(0, 6), answer: c.dung, pre: c.de, noBlank: true, context: ctx, why: c.why || '' });
      } else if (c.loai === 'dien-tu' && c.de && c.dap) {
        var opts = [c.dap];
        var them = function (x) { if (x && opts.map(function (y) { return y.replace(/\s+/g, ''); }).indexOf(x.replace(/\s+/g, '')) < 0 && opts.length < 4) opts.push(x); };
        if (c.saiNhieu) them(c.saiNhieu.a);
        daps.forEach(them);
        if (opts.length >= 2) out.push({ options: opts, answer: 0, pre: c.de, noBlank: true, context: ctx, why: c.why || '' });
      }
    });
    return out;
  }
  function soCauOn() { return cauOn().length; }
  function taoBaiOn() {
    var cau = cauOn();
    if (!cau.length) { alert('Chưa có câu trắc nghiệm / điền từ nào để tạo bài ôn (câu nghe và sắp xếp câu chưa dùng được cho Thẻ trả lời).'); return; }
    ghiLS(ON_KEY, JSON.stringify({ t: Date.now(), nhan: 'Câu lớp hay sai · ' + (S.d.lop ? S.d.lop.ten : '') + ' · ' + S.d.nhan, cau: cau }));
    // mo cung phien (giu mat khau quan tri trong sessionStorage cho danh sach lop o Thẻ trả lời)
    var w = window.open('/lop?csai=1', '_blank');
    if (!w) location.href = '/lop?csai=1';
  }

  /* ---------------- su kien ---------------- */
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t.closest || !t.closest('#trCauSai')) return;
    if (t.hasAttribute('data-cs-lop')) { S.lop = t.value; tai(); }
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('button');
    var o = $('#csChieu');
    if (o && e.target.closest && e.target.closest('#csChieu')) {
      if (t && t.hasAttribute('data-csc-dong')) dongChieu();
      else if (t && t.hasAttribute('data-csc-lui')) doiCau(-1);
      else if (t && t.hasAttribute('data-csc-toi')) doiCau(1);
      else if ((t && t.hasAttribute('data-csc-hien')) || (!t && e.target.closest('[data-csc-than]') && S.chieu && !S.chieu.lo)) { S.chieu.lo = true; veChieu(); }
      return;
    }
    if (!t || !t.closest('#trCauSai')) return;
    if (t.hasAttribute('data-cs-tuan')) { S.tuan = +t.getAttribute('data-cs-tuan'); tai(); }
    else if (t.hasAttribute('data-cs-moi')) tai(true);
    else if (t.hasAttribute('data-cs-in')) inRa();
    else if (t.hasAttribute('data-cs-chieu')) moChieu();
    else if (t.hasAttribute('data-cs-on')) taoBaiOn();
  });
  document.addEventListener('keydown', function (e) {
    if (!S.chieu) return;
    if (e.key === 'Escape') { dongChieu(); return; }
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); doiCau(1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); doiCau(-1); }
    else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!S.chieu.lo) { S.chieu.lo = true; veChieu(); } else doiCau(1); }
  });
  // thoat toan man hinh bang phim cua trinh duyet -> van giu man chieu (dong bang ✕ / Esc)

  // Link thang /bao-cao#cau-sai[=<ma lop>]
  var m = /^#cau-sai(?:=([\w-]+))?$/.exec(location.hash);
  if (m) {
    if (m[1]) S.lop = m[1];
    if (window.__tr && window.__tr.showTab) window.__tr.showTab('csai');
  }
  if (!S.lop) S.lop = docLS(LOP_KEY);
  // bam sang tab khac thi bo #cau-sai (tai lai trang khong nhay ve tab nay)
  Array.prototype.forEach.call(document.querySelectorAll('.tr-tab'), function (b) {
    b.addEventListener('click', function () {
      if (b.getAttribute('data-tab') !== 'csai' && /^#cau-sai/.test(location.hash)) history.replaceState(null, '', location.pathname);
    });
  });
  // vua dang nhap xong (bang dieu khien hien ra) ma tab nay dang mo -> tai
  var dash = $('#adminDash');
  if (dash && window.MutationObserver) {
    new MutationObserver(function () { if (!dash.hidden && dangMo() && !S.d && !S.dang) tai(); }).observe(dash, { attributes: true, attributeFilter: ['hidden'] });
  }

  window.__trCauSai = { render: function () { ve(); if (!S.d || Date.now() - (S.d.taoLuc || 0) > 5 * 60 * 1000) tai(); } };
})();
