/* 📚 Truyện song ngữ (/truyen) — danh sách theo cấp, trang đọc (bấm từ xem nghĩa, nghe câu), 3 câu hỏi.
   Nội dung: window.TRUYEN_DATA (truyen-data.js). Mở khoá / đã đọc / chấm bài: /api/truyen (truyen-doc.js).
   Sao: máy chủ trả về số sao em vừa đạt -> gửi POST /api/stars/game { n } (nguồn sao trò chơi có sẵn). */
(function () {
  'use strict';

  var DATA = (window.TRUYEN_DATA && window.TRUYEN_DATA.truyen) || [];
  var HINH = window.TRUYEN_HINH || {};
  var CAP = [
    { id: 'hsk1v3', ten: 'HSK 1', phu: '3.0', tts: 'hsk1' },
    { id: 'hsk2v3', ten: 'HSK 2', phu: '3.0', tts: 'hsk2' },
    { id: 'hsk3v3', ten: 'HSK 3', phu: '3.0', tts: 'hsk3' },
    { id: 'hsk4v3', ten: 'HSK 4', phu: '3.0', tts: 'hsk4' },
  ];
  var TEN_CAP = { hsk1v3: 'HSK 1 (3.0)', hsk2v3: 'HSK 2 (3.0)', hsk3v3: 'HSK 3 (3.0)', hsk4v3: 'HSK 4 (3.0)' };
  var K_PY = 'hyv_truyen_py', K_VN = 'hyv_truyen_vn', K_CAP = 'hyv_truyen_cap';

  var theoId = {};
  DATA.forEach(function (t) { theoId[t.id] = t; });
  var trangThai = {};   // id -> { khoa, lyDo, daDoc, dung }
  var dangNhap = false;
  var capChon = '';
  var dangDoc = null;   // truyen dang mo
  var thuTuChon = [];   // [[chi so goc theo thu tu hien], ...] cho tung cau hoi
  var daChon = [];      // chi so GOC em chon
  var daNop = false;

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function lsGet(k, d) { try { var v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* che do rieng tu */ } }
  function auth() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a : null; } catch (e) { return null; }
  }
  function goi(url, o) {
    o = o || {};
    var h = { 'Content-Type': 'application/json' };
    var a = o.khach ? null : auth();
    if (a) h.Authorization = 'Bearer ' + a.token;
    return fetch(url, { method: o.method || 'GET', headers: h, body: o.body ? JSON.stringify(o.body) : undefined })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (d) {
          if (!r.ok) { var e = new Error(d.error || 'Lỗi máy chủ'); e.status = r.status; throw e; }
          return d;
        });
      });
  }

  /* ---------------- giọng đọc (DocZh dùng chung cả web) ---------------- */
  function capTts(t) { for (var i = 0; i < CAP.length; i++) if (CAP[i].id === t.cap) return CAP[i].tts; return ''; }
  function doc(text, m, xong) {
    text = String(text || '').trim();
    if (!text) return;
    if (window.DocZh) {
      window.DocZh.doc(text, { m: m, cap: dangDoc ? capTts(dangDoc) : '', onend: xong, onerror: function (e) { if (xong && !(e && (e.error === 'interrupted' || e.error === 'canceled'))) xong(); } });
      return;
    }
    if (!window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'zh-CN'; u.rate = 0.85;
      if (xong) u.onend = xong;
      window.speechSynthesis.speak(u);
    } catch (e) { /* khong co giong */ }
  }
  function dungDoc() {
    dangNgheCa = false;
    luotNghe++;
    capNhatNutNgheCa();
    try { if (window.DocZh) window.DocZh.dung(); else if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) { /* bo qua */ }
    danhDauCau(-1);
  }
  function chuCau(c) { return c.w.map(function (t) { return t[0]; }).join(''); }

  /* ---------------- danh sách ---------------- */
  function dem(cap) {
    var ds = DATA.filter(function (t) { return t.cap === cap; });
    return { tong: ds.length, doc: ds.filter(function (t) { return trangThai[t.id] && trangThai[t.id].daDoc; }).length };
  }
  function veCap() {
    var hop = $('trCap');
    hop.innerHTML = CAP.map(function (c) {
      var d = dem(c.id), chon = c.id === capChon;
      return '<button type="button" role="tab" class="tr-cap-nut' + (chon ? ' is-chon' : '') + '" id="tab-' + c.id + '" data-cap="' + c.id + '"' +
        ' aria-selected="' + chon + '" aria-controls="trLuoi" tabindex="' + (chon ? 0 : -1) + '">' +
        '<b>' + c.ten + '</b><span class="tr-cap-phu">' + c.phu + '</span>' +
        '<span class="tr-cap-dem" aria-label="đã đọc ' + d.doc + ' trên ' + d.tong + ' truyện">' + d.doc + '/' + d.tong + '</span></button>';
    }).join('');
    $('trLuoi').setAttribute('aria-labelledby', 'tab-' + capChon);
  }
  function veLuoi() {
    var ds = DATA.filter(function (t) { return t.cap === capChon; }).sort(function (a, b) { return a.bai - b.bai; });
    if (!ds.length) { $('trLuoi').innerHTML = '<p class="tr-cho">Cấp này chưa có truyện.</p>'; return; }
    $('trLuoi').innerHTML = ds.map(function (t) {
      var tt = trangThai[t.id] || { khoa: t.cap !== 'hsk1v3' };
      var meta = '<span class="tr-nhan">Sau Bài ' + t.bai + '</span><span>' + t.cau.length + ' câu</span><span>' + esc(t.chuDe) + '</span>';
      var trai = tt.khoa
        ? '<span class="tr-tt is-khoa"><span aria-hidden="true">🔒</span> ' + esc(tt.lyDo || 'Chưa mở') + '</span>'
        : tt.daDoc
          ? '<span class="tr-tt is-xong"><span aria-hidden="true">✓</span> Đã đọc · đúng ' + tt.dung + '/3</span>'
          : '<span class="tr-tt is-moi">Đọc ngay <span aria-hidden="true">→</span></span>';
      var ruot = '<span class="tr-the-hinh">' + (HINH[t.hinh] || '') + '</span>' +
        '<span class="tr-the-chu">' +
          '<span class="tr-the-zh" lang="zh">' + esc(t.tieuDe.zh) + '</span>' +
          '<span class="tr-the-py">' + esc(t.tieuDe.py) + '</span>' +
          '<span class="tr-the-vn">' + esc(t.tieuDe.vn) + '</span>' +
          '<span class="tr-the-meta">' + meta + '</span>' + trai +
        '</span>';
      if (tt.khoa) return '<div class="tr-the is-khoa" aria-label="' + esc(t.tieuDe.vn + ' — đang khoá. ' + (tt.lyDo || '')) + '">' + ruot + '</div>';
      return '<a class="tr-the' + (tt.daDoc ? ' is-xong' : '') + '" href="#doc/' + encodeURIComponent(t.id) + '">' + ruot + '</a>';
    }).join('');
  }
  function veTienDo(d) {
    var el = $('trTienDo');
    if (!d || !d.dangNhap) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = '<span aria-hidden="true">📚</span> Đã đọc <b>' + d.daDocSo + '/' + d.tong + '</b> truyện';
  }
  function capMacDinh() {
    var luu = lsGet(K_CAP, '');
    if (luu && CAP.some(function (c) { return c.id === luu; })) return luu;
    // cap cao nhat con truyen da mo ma chua doc
    var chon = 'hsk1v3';
    CAP.forEach(function (c) {
      if (DATA.some(function (t) { return t.cap === c.id && trangThai[t.id] && !trangThai[t.id].khoa && !trangThai[t.id].daDoc; })) chon = c.id;
    });
    return chon;
  }
  function taiTrangThai() {
    function nhan(d) {
      dangNhap = !!d.dangNhap;
      trangThai = {};
      (d.ds || []).forEach(function (x) { trangThai[x.id] = x; });
      $('trKhach').hidden = dangNhap;
      veTienDo(d);
      if (!capChon) capChon = capMacDinh();
      veCap(); veLuoi();
      return d;
    }
    return goi('/api/truyen').then(nhan).catch(function (e) {
      // phien dang nhap het han -> doc nhu khach
      if (e.status === 401) return goi('/api/truyen', { khach: true }).then(nhan);
      throw e;
    }).catch(function () {
      // mat mang: van cho doc HSK1
      DATA.forEach(function (t) { trangThai[t.id] = trangThai[t.id] || { khoa: t.cap !== 'hsk1v3', lyDo: 'Không tải được trạng thái — thử tải lại trang' }; });
      $('trKhach').hidden = !!auth();
      if (!capChon) capChon = 'hsk1v3';
      veCap(); veLuoi();
    });
  }

  $('trCap').addEventListener('click', function (e) {
    var b = e.target.closest('[data-cap]');
    if (!b) return;
    capChon = b.getAttribute('data-cap');
    lsSet(K_CAP, capChon);
    veCap(); veLuoi();
    var moi = $('tab-' + capChon); if (moi) moi.focus();
  });
  $('trCap').addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var i = CAP.map(function (c) { return c.id; }).indexOf(capChon);
    i = (i + (e.key === 'ArrowRight' ? 1 : CAP.length - 1)) % CAP.length;
    capChon = CAP[i].id; lsSet(K_CAP, capChon);
    veCap(); veLuoi();
    $('tab-' + capChon).focus();
    e.preventDefault();
  });

  /* ---------------- đọc truyện ---------------- */
  function veTu(t, ci, wi) {
    if (t.length < 2) return '<span class="tr-dau-cau">' + esc(t[0]) + '</span>';
    return '<button type="button" class="tr-tu" data-c="' + ci + '" data-w="' + wi + '" aria-label="' + esc(t[0] + ' — ' + t[1]) + '">' +
      '<ruby>' + esc(t[0]) + '<rt>' + esc(t[1]) + '</rt></ruby></button>';
  }
  function moTruyen(id) {
    var t = theoId[id];
    if (!t) { veDanhSach(); return; }
    var tt = trangThai[id];
    if (tt && tt.khoa) { veDanhSach(); return; }
    if (dangDoc === t && !$('trDoc').hidden) return; // da mo san (vd. mo truoc khi tai xong trang thai)
    dungDoc();
    dongOTu();
    dangDoc = t;
    capChon = t.cap;
    $('trDs').hidden = true;
    $('trDoc').hidden = false;
    $('trDocHinh').innerHTML = HINH[t.hinh] || '';
    $('trDocCap').textContent = TEN_CAP[t.cap] + ' · đọc được sau Bài ' + t.bai + ' · ' + t.chuDe;
    $('trDocTen').innerHTML = t.tieuDe.w.map(function (w, wi) { return veTu(w, -1, wi); }).join('');
    $('trDocPy').textContent = t.tieuDe.py;
    $('trDocVn').textContent = t.tieuDe.vn;
    $('trCau').innerHTML = t.cau.map(function (c, ci) {
      return '<li class="tr-cau-dong" id="cau-' + ci + '">' +
        '<span class="tr-cau-so" aria-hidden="true">' + (ci + 1) + '</span>' +
        '<div class="tr-cau-ruot">' +
          '<p class="tr-cau-zh" lang="zh">' + c.w.map(function (w, wi) { return veTu(w, ci, wi); }).join('') + '</p>' +
          '<p class="tr-vn">' + esc(c.vn) + '</p>' +
        '</div>' +
        '<button type="button" class="tr-nghe-cau" data-nghe="' + ci + '" aria-label="Nghe cả câu ' + (ci + 1) + '" title="Nghe cả câu">' +
          '<span aria-hidden="true">🔊</span><span class="tr-nghe-chu">Nghe</span></button>' +
      '</li>';
    }).join('');
    veCauHoi();
    document.title = t.tieuDe.zh + ' · Truyện song ngữ · Hi Hán 喜汉';
    window.scrollTo(0, 0);
    try { $('trVeDs').focus({ preventScroll: true }); } catch (e) { $('trVeDs').focus(); }
    if (window.DocZh && window.DocZh.taiTruoc) window.DocZh.taiTruoc(t.cau.slice(0, 3).map(chuCau), { m: 'cau', cap: capTts(t) });
  }
  function veDanhSach() {
    dungDoc();
    dongOTu();
    dangDoc = null;
    $('trDoc').hidden = true;
    $('trDs').hidden = false;
    document.title = 'Truyện song ngữ · Hi Hán 喜汉';
    veCap(); veLuoi();
  }
  var vaoTuDs = false;   // mo truyen tu danh sach trong trang nay -> nut "Danh sach" = quay lai (khong them lich su)
  var canTaiLai = false; // vua doc xong 1 truyen -> ve danh sach thi tai lai tien do
  function dinhTuyen() {
    var m = /^#doc\/(.+)$/.exec(location.hash || '');
    if (m) moTruyen(decodeURIComponent(m[1]));
    else {
      vaoTuDs = false;
      veDanhSach();
      if (canTaiLai) { canTaiLai = false; taiTrangThai(); }
    }
  }
  window.addEventListener('hashchange', function (e) {
    if (/^#doc\//.test(location.hash) && !/#doc\//.test(e.oldURL || '')) vaoTuDs = true;
    dinhTuyen();
  });
  $('trVeDs').addEventListener('click', function () {
    if (vaoTuDs) history.back(); else location.hash = '';
  });

  // bat / tat pinyin, ban dich
  function apBatTat() {
    var py = lsGet(K_PY, '1') === '1', vn = lsGet(K_VN, '0') === '1';
    document.body.classList.toggle('tr-an-py', !py);
    document.body.classList.toggle('tr-an-vn', !vn);
    $('trBatPy').setAttribute('aria-pressed', String(py));
    $('trBatVn').setAttribute('aria-pressed', String(vn));
    $('trBatPy').title = py ? 'Đang hiện pinyin — bấm để ẩn' : 'Đang ẩn pinyin — bấm để hiện';
    $('trBatVn').title = vn ? 'Đang hiện bản dịch tiếng Việt — bấm để ẩn' : 'Đang ẩn bản dịch tiếng Việt — bấm để hiện';
  }
  $('trBatPy').addEventListener('click', function () { lsSet(K_PY, lsGet(K_PY, '1') === '1' ? '0' : '1'); apBatTat(); });
  $('trBatVn').addEventListener('click', function () { lsSet(K_VN, lsGet(K_VN, '0') === '1' ? '0' : '1'); apBatTat(); });
  apBatTat();

  // nghe tung cau / ca truyen
  var dangNgheCa = false, luotNghe = 0;
  function danhDauCau(i) {
    Array.prototype.forEach.call(document.querySelectorAll('.tr-cau-dong.is-doc'), function (el) { el.classList.remove('is-doc'); });
    if (i < 0) return;
    var el = $('cau-' + i);
    if (el) {
      el.classList.add('is-doc');
      var r = el.getBoundingClientRect();
      if (r.top < 70 || r.bottom > window.innerHeight - 20) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  function capNhatNutNgheCa() {
    var b = $('trNgheCa');
    b.querySelector('.tr-nghe-ca-chu').textContent = dangNgheCa ? 'Dừng đọc' : 'Nghe cả truyện';
    b.setAttribute('aria-pressed', String(dangNgheCa));
  }
  function ngheTu(i) {
    if (!dangNgheCa || !dangDoc || i >= dangDoc.cau.length) { dangNgheCa = false; capNhatNutNgheCa(); danhDauCau(-1); return; }
    danhDauCau(i);
    var luot = ++luotNghe; // moi cau chi di tiep 1 lan (onend / onerror co the bao 2 lan)
    doc(chuCau(dangDoc.cau[i]), 'cau', function () {
      if (luot !== luotNghe || !dangNgheCa) return;
      luotNghe++;
      var sau = luotNghe;
      setTimeout(function () { if (sau === luotNghe && dangNgheCa) ngheTu(i + 1); }, 350);
    });
  }
  $('trNgheCa').addEventListener('click', function () {
    if (dangNgheCa) { dungDoc(); return; }
    dongOTu();
    dangNgheCa = true; capNhatNutNgheCa();
    ngheTu(0);
  });
  $('trCau').addEventListener('click', function (e) {
    var n = e.target.closest('[data-nghe]');
    if (n) {
      var i = Number(n.getAttribute('data-nghe'));
      dangNgheCa = false; capNhatNutNgheCa();
      danhDauCau(i);
      doc(chuCau(dangDoc.cau[i]), 'cau', function () { danhDauCau(-1); });
    }
  });

  /* ---------------- ô nghĩa của từ ---------------- */
  var tuDangMo = null, nutDangMo = null;
  function moOTu(nut) {
    var ci = Number(nut.getAttribute('data-c')), wi = Number(nut.getAttribute('data-w'));
    var t = ci < 0 ? dangDoc.tieuDe.w[wi] : dangDoc.cau[ci].w[wi];
    if (!t) return;
    if (nutDangMo) nutDangMo.classList.remove('is-mo');
    tuDangMo = t; nutDangMo = nut;
    nut.classList.add('is-mo');
    $('trOTuZh').textContent = t[0];
    $('trOTuPy').textContent = t[1];
    $('trOTuVn').textContent = t[2];
    var o = $('trOTu');
    o.hidden = false;
    // may tinh: dat canh tu; dien thoai: tam o duoi man hinh (CSS)
    if (window.innerWidth >= 720) {
      var r = nut.getBoundingClientRect();
      var w = o.offsetWidth, h = o.offsetHeight;
      var x = Math.max(12, Math.min(window.innerWidth - w - 12, r.left + r.width / 2 - w / 2));
      var y = r.bottom + 10;
      if (y + h > window.innerHeight - 12) y = Math.max(12, r.top - h - 10);
      o.style.left = x + 'px'; o.style.top = y + 'px';
    } else { o.style.left = ''; o.style.top = ''; }
    $('trOTuNghe').focus({ preventScroll: true });
  }
  function dongOTu(traFocus) {
    var o = $('trOTu');
    if (o.hidden) return;
    o.hidden = true;
    if (nutDangMo) {
      nutDangMo.classList.remove('is-mo');
      if (traFocus) try { nutDangMo.focus({ preventScroll: true }); } catch (e) { /* bo qua */ }
    }
    tuDangMo = null; nutDangMo = null;
  }
  document.addEventListener('click', function (e) {
    var nut = e.target.closest('.tr-tu');
    if (nut && dangDoc) { e.preventDefault(); if (nut === nutDangMo) dongOTu(true); else moOTu(nut); return; }
    if (!e.target.closest('#trOTu')) dongOTu(false);
  });
  $('trOTuNghe').addEventListener('click', function () { if (tuDangMo) doc(tuDangMo[0], 'tu'); });
  $('trOTuDong').addEventListener('click', function () { dongOTu(true); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') dongOTu(true); });
  // Dien thoai doi chieu cao khi thanh dia chi an / hien -> chi dong khi doi CHIEU RONG (xoay may)
  var rongCu = window.innerWidth;
  window.addEventListener('resize', function () { if (window.innerWidth !== rongCu) { rongCu = window.innerWidth; dongOTu(false); } });
  // May tinh: o nghia nam canh tu -> cuon trang thi dong (khong de lech khoi tu)
  window.addEventListener('scroll', function () { if (window.innerWidth >= 720) dongOTu(false); }, { passive: true });

  /* ---------------- câu hỏi ---------------- */
  function tron(n) {
    var a = []; for (var i = 0; i < n; i++) a.push(i);
    for (var j = a.length - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var x = a[j]; a[j] = a[k]; a[k] = x; }
    return a;
  }
  function veCauHoi() {
    var t = dangDoc;
    daNop = false;
    daChon = t.hoi.map(function () { return -1; });
    thuTuChon = t.hoi.map(function (h) { return tron(h.chon.length); });
    $('trHoiDs').innerHTML = t.hoi.map(function (h, hi) {
      return '<fieldset class="tr-the-hoi" id="hoi-' + hi + '">' +
        '<legend><span class="tr-hoi-so">Câu ' + (hi + 1) + '/' + t.hoi.length + '</span> <span class="tr-hoi-q">' + esc(h.q) + '</span></legend>' +
        '<div class="tr-chon-ds">' + thuTuChon[hi].map(function (goc) {
          return '<button type="button" class="tr-chon" data-hoi="' + hi + '" data-goc="' + goc + '" aria-pressed="false">' + esc(h.chon[goc]) + '</button>';
        }).join('') + '</div>' +
        '<p class="tr-giai" hidden></p>' +
      '</fieldset>';
    }).join('');
    $('trNop').disabled = true;
    $('trNop').hidden = false;
    $('trKq').hidden = true;
    $('trKq').innerHTML = '';
    var tt = trangThai[t.id];
    $('trHoiMeo').textContent = tt && tt.daDoc
      ? 'Em đã đọc truyện này (đúng ' + tt.dung + '/3). Làm lại để ôn nhé' + (tt.dung < 3 ? ' — đúng cả 3 câu được thêm ⭐.' : '.')
      : 'Trả lời đúng ít nhất 2/3 câu để đánh dấu đã đọc' + (dangNhap ? ' và nhận ⭐.' : '.');
  }
  $('trHoiDs').addEventListener('click', function (e) {
    var b = e.target.closest('.tr-chon');
    if (!b || daNop) return;
    var hi = Number(b.getAttribute('data-hoi'));
    daChon[hi] = Number(b.getAttribute('data-goc'));
    Array.prototype.forEach.call(document.querySelectorAll('#hoi-' + hi + ' .tr-chon'), function (x) {
      x.setAttribute('aria-pressed', String(x === b));
      x.classList.toggle('is-chon', x === b);
    });
    $('trNop').disabled = daChon.some(function (x) { return x < 0; });
  });
  $('trNop').addEventListener('click', function () {
    if (!dangDoc || daNop || daChon.some(function (x) { return x < 0; })) return;
    var t = dangDoc, nut = $('trNop');
    nut.disabled = true;
    nut.textContent = 'Đang chấm…';
    goi('/api/truyen/' + encodeURIComponent(t.id) + '/nop', { method: 'POST', body: { tl: daChon } })
      .catch(function (e) { if (e.status === 401) return goi('/api/truyen/' + encodeURIComponent(t.id) + '/nop', { method: 'POST', body: { tl: daChon }, khach: true }); throw e; })
      .then(function (d) { daNop = true; hienKetQua(t, d); })
      .catch(function (e) {
        nut.disabled = false;
        $('trKq').hidden = false;
        $('trKq').innerHTML = '<p class="tr-loi">' + esc(e.message || 'Không nộp được bài, em thử lại nhé.') + '</p>';
      })
      .then(function () { nut.textContent = 'Nộp bài'; });
  });

  function hienKetQua(t, d) {
    (d.ket || []).forEach(function (k, hi) {
      var hop = $('hoi-' + hi);
      hop.classList.add(k.dung ? 'is-dung' : 'is-sai');
      Array.prototype.forEach.call(hop.querySelectorAll('.tr-chon'), function (b) {
        var goc = Number(b.getAttribute('data-goc'));
        b.disabled = true;
        if (goc === k.dapAn) { b.classList.add('is-dung'); b.insertAdjacentHTML('beforeend', '<span class="visually-hidden"> (đáp án đúng)</span>'); }
        else if (goc === daChon[hi]) { b.classList.add('is-sai'); b.insertAdjacentHTML('beforeend', '<span class="visually-hidden"> (em chọn — sai)</span>'); }
      });
      var g = hop.querySelector('.tr-giai');
      g.innerHTML = '<b>' + (k.dung ? '✓ Đúng rồi!' : '✗ Chưa đúng.') + '</b> ' + esc(k.giai);
      g.hidden = false;
    });
    $('trNop').hidden = true;
    var dat = d.dat, kq = $('trKq');
    var dong = '<div class="tr-kq-diem ' + (dat ? 'is-dat' : 'is-chua') + '"><b>' + d.soDung + '/' + d.tong + '</b><span>câu đúng</span></div>';
    var loi;
    if (dat && d.dangNhap) loi = d.soDung === d.tong ? 'Tuyệt vời! Em hiểu hết truyện rồi. 太棒了！' : 'Giỏi lắm! Truyện đã được đánh dấu là đã đọc.';
    else if (dat) loi = 'Giỏi lắm! <a href="/">Đăng nhập</a> để lưu truyện đã đọc và nhận ⭐ nhé.';
    else loi = 'Chưa đạt 2/3 — em đọc lại truyện (bật “Dịch” nếu cần) rồi làm lại nhé. 加油！';
    var sao = d.sao > 0 && d.dangNhap ? '<p class="tr-kq-sao" id="trKqSao"><span aria-hidden="true">⭐</span> Đang nhận +' + d.sao + ' sao…</p>' : '';
    var tiep = truyenTiep(t);
    kq.innerHTML = dong + '<div class="tr-kq-chu"><p>' + loi + '</p>' + sao +
      '<div class="tr-kq-nut">' +
        '<button type="button" class="tr-nut" id="trLamLai">Làm lại</button>' +
        (tiep ? '<a class="tr-nut tr-nut-chinh" href="#doc/' + encodeURIComponent(tiep.id) + '">Truyện tiếp: <span lang="zh">' + esc(tiep.tieuDe.zh) + '</span> <span aria-hidden="true">→</span></a>' : '') +
        '<a class="tr-nut" href="#">Về danh sách</a>' +
      '</div></div>';
    kq.hidden = false;
    $('trLamLai').addEventListener('click', function () { veCauHoi(); $('trHoi').scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    if (dat && d.dangNhap) {
      canTaiLai = true;
      var cu = trangThai[t.id] || {};
      trangThai[t.id] = { id: t.id, khoa: false, daDoc: true, dung: Math.max(cu.dung || 0, d.soDung), lan: d.lan };
    }
    if (d.sao > 0 && d.dangNhap) nhanSao(d.sao);
    kq.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function truyenTiep(t) {
    var ds = DATA.slice().sort(function (a, b) { return CAP.map(function (c) { return c.id; }).indexOf(a.cap) - CAP.map(function (c) { return c.id; }).indexOf(b.cap) || a.bai - b.bai; });
    var i = ds.indexOf(t);
    // truyen sau trong danh sach truoc, het thi quay lai tu dau (truyen da mo ma chua doc)
    for (var j = 1; j < ds.length; j++) {
      var x = ds[(i + j) % ds.length], tt = trangThai[x.id];
      if (tt && !tt.khoa && !tt.daDoc) return x;
    }
    return null;
  }

  // Nhan sao qua nguon sao tro choi co san: may chu gioi han 0,7 giay / sao tu lan cong truoc + tran 80 / ngay
  function nhanSao(n) {
    var conLai = n, nhan = 0, lan = 0;
    function ve(xong, tran, tong) {
      var el = $('trKqSao');
      if (!el) return;
      if (xong) {
        el.innerHTML = nhan
          ? '<span aria-hidden="true">⭐</span> +' + nhan + ' sao' + (tong != null ? ' · tổng ' + Number(tong).toLocaleString('vi-VN') : '') + (tran ? ' <small>(đã đủ sao trò chơi hôm nay)</small>' : '')
          : (tran ? 'Hôm nay em đã nhận đủ sao từ trò chơi và truyện — học bài mới để nhận thêm sao nhé.' : 'Chưa nhận được sao (mất mạng?) — lần sau đọc truyện khác nhé.');
        el.classList.add('is-xong');
      }
    }
    function gui() {
      var a = auth();
      if (!a) return ve(true);
      lan++;
      goi('/api/stars/game', { method: 'POST', body: { n: Math.min(10, conLai) } }).then(function (d) {
        var duoc = d.gameAwarded || 0;
        nhan += duoc; conLai -= duoc;
        var tran = d.gameCap && d.gameToday >= d.gameCap;
        if (conLai > 0 && !tran && lan < 5) setTimeout(gui, 1500);
        else ve(true, tran, d.total);
      }).catch(function () { if (lan < 3) setTimeout(gui, 2000); else ve(true); });
    }
    gui();
  }

  /* ---------------- khởi động ---------------- */
  taiTrangThai().then(function () { dinhTuyen(); });
  if (/^#doc\//.test(location.hash)) {
    // hien truyen HSK1 ngay ca khi chua tai xong trang thai
    var m = /^#doc\/(.+)$/.exec(location.hash);
    var t = m && theoId[decodeURIComponent(m[1])];
    if (t && t.cap === 'hsk1v3') { trangThai[t.id] = { khoa: false }; moTruyen(t.id); }
  }
})();
