/* ============================================================
   Phong thi thu HSK 3.0 (trang /hsk30)
   - Noi dung de nam o may chu (protected/hsk30), chi tai duoc khi da dang nhap:
     de.json + anh + am thanh lay qua /api/hsk30/... kem Bearer token, doi sang blob.
   - Hai che do:
       Thi that  — mo phong thi tren may: phan Nghe phat lien mot luot, cau tu chuyen
                   theo am thanh, chi tra loi duoc cau dang phat; phan Doc co dong ho,
                   het gio tu nop.
       Luyen tap — di lai tu do, nghe rieng tung cau, chon xong thay ngay dap an,
                   loi thoai va giai thich.
   - Cham: moi phan thi 100 diem theo ti le cau dung.
   ============================================================ */
(function () {
  'use strict';

  var app = document.getElementById('app');
  var PARAMS = new URLSearchParams(location.search);
  var ID = PARAMS.get('id') || '';
  var KQ_KEY = 'hyv_hsk30_ketqua';        // ket qua gan nhat moi de (tren may)
  var LAM_KEY = 'hyv_hsk30_lam_' + ID;    // bai dang lam do (tai lai trang khong mat)

  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function doc(key, macDinh) { try { var v = JSON.parse(localStorage.getItem(key) || 'null'); return v == null ? macDinh : v; } catch (e) { return macDinh; } }
  function ghi(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function xoa(key) { try { localStorage.removeItem(key); } catch (e) { /* bo qua */ } }
  function auth() { var a = doc('hyv_auth', null); return a && a.token ? a : null; }
  function dongHo(giay) {
    giay = Math.max(0, Math.round(giay));
    var m = Math.floor(giay / 60), s = giay % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  var CAP_ZH = ['', '一', '二', '三', '四', '五', '六'];

  var ICON = {
    loa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>',
    trai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
    phai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    dong: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6"/></svg>',
    nghe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 18v-5a9 9 0 0 1 18 0v5M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 5h6a4 4 0 0 1 4 4v11a3 3 0 0 0-3-3H2zM22 5h-6a4 4 0 0 0-4 4v11a3 3 0 0 1 3-3h7z"/></svg>',
    khoa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'
  };

  /* ================= Trang chon de (khong co ?id=) ================= */
  function veChonDe() {
    app.innerHTML =
      '<header class="t3-top t3-top-nhe"><a class="t3-back" href="/exam/">' + ICON.trai + 'Thi thử HSK</a><b>HSK 3.0 · 模拟考试</b><span></span></header>' +
      '<main class="t3-wrap"><h1 class="t3-h1">Đề thi thử HSK 3.0</h1><p class="t3-sub">Cấu trúc đề mới áp dụng từ 2026. Chọn đề để vào phòng thi.</p><div id="dsDe" class="t3-dsde">Đang tải danh sách đề…</div></main>';
    fetch('/api/hsk30/list').then(function (r) { return r.json(); }).then(function (d) {
      var items = d.items || [];
      var box = $('#dsDe');
      if (!items.length) { box.textContent = 'Chưa có đề nào.'; return; }
      box.innerHTML = items.map(function (it) {
        return '<a class="t3-de-the" href="/hsk30?id=' + encodeURIComponent(it.id) + '"><b>' + esc(it.ten) + '</b><small>' +
          it.phan.map(function (p) { return p.ten + ' ' + p.soCau + ' câu'; }).join(' · ') + '</small></a>';
      }).join('');
    }).catch(function () { $('#dsDe').textContent = 'Không tải được danh sách đề.'; });
  }

  /* ================= Chua dang nhap ================= */
  function veCanDangNhap(loi) {
    app.innerHTML =
      '<header class="t3-top t3-top-nhe"><a class="t3-back" href="/exam/">' + ICON.trai + 'Thi thử HSK</a><b>HSK 3.0 · 模拟考试</b><span></span></header>' +
      '<main class="t3-wrap"><section class="t3-hop t3-khoa">' + ICON.khoa +
      '<h1>Đề HSK 3.0 dành cho học sinh có tài khoản</h1>' +
      '<p>' + esc(loi || 'Bạn cần đăng nhập tài khoản học trên Hi Hán để vào phòng thi.') + '</p>' +
      '<a class="t3-nut t3-nut-chinh" href="/#dang-nhap">Đăng nhập ở trang chủ</a>' +
      '<p class="t3-ghi">Đăng nhập xong, quay lại trang này là vào thi được.</p></section></main>';
  }

  /* ================= Tai de + tep ================= */
  var S = {
    de: null, tep: {}, audio: null, mode: '', phase: 'batdau',
    ds: [],            // danh sach phang cac cau: {q, part, sec, si, pi}
    answers: {}, cur: 0, xem: null,
    docHet: 0, timer: null, pinyin: true, luyenDaXem: {}
  };

  function goiApi(url) {
    var a = auth();
    return fetch(url, { headers: { Authorization: 'Bearer ' + a.token } }).then(function (r) {
      if (r.status === 401) throw { dangNhap: true };
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r;
    });
  }

  function taiDe() {
    app.innerHTML = '<main class="t3-wrap"><section class="t3-hop t3-tai"><h1>Đang tải đề thi…</h1>' +
      '<div class="t3-tai-bar"><i id="taiBar" style="width:4%"></i></div><p id="taiChu">Đang tải câu hỏi</p></section></main>';
    goiApi('/api/hsk30/de/' + encodeURIComponent(ID)).then(function (r) { return r.json(); }).then(function (de) {
      S.de = de;
      S.pinyin = doc('hyv_hsk30_pinyin', de.pinyin !== false) !== false;
      var tep = [];
      de.sections.forEach(function (sec, si) {
        if (sec.audio) tep.push(sec.audio);
        sec.parts.forEach(function (p, pi) {
          [p.chung].concat(p.cau.map(function (q) { return q.chon; })).forEach(function (o) {
            if (!o) return;
            Object.keys(o).forEach(function (k) { if (o[k].anh && tep.indexOf(o[k].anh) < 0) tep.push(o[k].anh); });
          });
          p.cau.forEach(function (q) { S.ds.push({ q: q, part: p, sec: sec, si: si, pi: pi }); });
        });
      });
      var xong = 0;
      return Promise.all(tep.map(function (f) {
        return goiApi('/api/hsk30/tep/' + encodeURIComponent(ID) + '/' + encodeURIComponent(f))
          .then(function (r) { return r.blob(); })
          .then(function (b) {
            S.tep[f] = URL.createObjectURL(b);
            xong++;
            var bar = $('#taiBar'); if (bar) bar.style.width = Math.round(4 + xong / tep.length * 96) + '%';
            var chu = $('#taiChu'); if (chu) chu.textContent = 'Đã tải ' + xong + '/' + tep.length + ' tệp (ảnh, âm thanh)';
          });
      }));
    }).then(function () {
      veBatDau();
    }).catch(function (e) {
      if (e && e.dangNhap) veCanDangNhap('Phiên đăng nhập đã hết hạn. Hãy đăng nhập lại ở trang chủ.');
      else app.innerHTML = '<main class="t3-wrap"><section class="t3-hop"><h1>Không tải được đề thi</h1><p>Kiểm tra mạng rồi tải lại trang.</p><button type="button" class="t3-nut t3-nut-chinh" id="taiLai">Tải lại</button></section></main>';
      var tl = $('#taiLai'); if (tl) tl.addEventListener('click', function () { location.reload(); });
    });
  }

  /* ================= Man bat dau: chon che do ================= */
  function soCau(sec) { return sec.parts.reduce(function (a, p) { return a + p.cau.length; }, 0); }

  function veBatDau() {
    var de = S.de;
    var dangDo = doc(LAM_KEY, null);
    var kq = doc(KQ_KEY, {})[ID];
    app.innerHTML =
      '<header class="t3-top t3-top-nhe"><a class="t3-back" href="/exam/">' + ICON.trai + 'Thi thử HSK</a><b>HSK 3.0 · ' + CAP_ZH[de.capDo] + '级</b><span></span></header>' +
      '<main class="t3-wrap">' +
        '<section class="t3-bia">' +
          '<p class="t3-eyebrow">中文水平考试 HSK 3.0（' + CAP_ZH[de.capDo] + '级）</p>' +
          '<h1 class="t3-h1">' + esc(de.ten) + '</h1>' +
          '<p class="t3-sub">' + esc(de.nguon) + '</p>' +
          '<table class="t3-cautruc"><thead><tr><th>Phần thi</th><th>Số câu</th><th>Thời gian</th></tr></thead><tbody>' +
            de.sections.map(function (s) {
              return '<tr><td>' + (s.id === 'nghe' ? ICON.nghe : ICON.doc) + esc(s.ten) + ' <span class="t3-zh">' + esc(s.tenZh) + '</span></td><td>' + soCau(s) + '</td><td>khoảng ' + s.phut + ' phút</td></tr>';
            }).join('') +
          '</tbody></table>' +
          (kq ? '<p class="t3-kq-cu">Lần gần nhất (' + (kq.mode === 'that' ? 'Thi thật' : 'Luyện tập') + '): <b>' + kq.tong + '/' + kq.toiDa + '</b> · Nghe ' + kq.nghe + ' · Đọc ' + kq.doc + '</p>' : '') +
        '</section>' +
        (dangDo && dangDo.phase !== 'xong'
          ? '<section class="t3-hop t3-dangdo"><p><b>Bạn đang làm dở bài ' + (dangDo.mode === 'that' ? 'Thi thật' : 'Luyện tập') + '</b> (' + Object.keys(dangDo.answers || {}).length + ' câu đã chọn).</p>' +
            '<div class="t3-hang"><button type="button" class="t3-nut t3-nut-chinh" data-tiep>Làm tiếp</button><button type="button" class="t3-nut" data-bo>Bỏ, làm từ đầu</button></div></section>'
          : '') +
        '<section class="t3-chedo">' +
          '<button type="button" class="t3-che" data-mode="that">' +
            '<span class="t3-che-ico">' + ICON.dong + '</span><b>Thi thật</b>' +
            '<span>Mô phỏng thi trên máy: phần Nghe phát liền một lượt, câu tự chuyển theo băng, không tua lại. Phần Đọc có đồng hồ, hết giờ tự nộp.</span></button>' +
          '<button type="button" class="t3-che" data-mode="luyen">' +
            '<span class="t3-che-ico">' + ICON.doc + '</span><b>Luyện tập</b>' +
            '<span>Làm tự do từng câu, nghe lại bao nhiêu lần cũng được. Chọn xong thấy ngay đáp án, lời thoại và giải thích tiếng Việt.</span></button>' +
        '</section>' +
        '<p class="t3-ghi">Nên đeo tai nghe. Âm thanh phần Nghe đã tải xong, không cần mạng khi đang thi.</p>' +
      '</main>';
    $all('[data-mode]').forEach(function (b) { b.addEventListener('click', function () { xoa(LAM_KEY); batDau(b.getAttribute('data-mode'), null); }); });
    var tiep = $('[data-tiep]');
    if (tiep) tiep.addEventListener('click', function () { batDau(dangDo.mode, dangDo); });
    var bo = $('[data-bo]');
    if (bo) bo.addEventListener('click', function () { xoa(LAM_KEY); veBatDau(); });
  }

  /* ================= Phong thi ================= */
  var NGHE_SI = 0; // chi so phan Nghe trong sections

  function batDau(mode, luu) {
    S.mode = mode;
    S.answers = (luu && luu.answers) || {};
    S.cur = (luu && luu.cur) || 0;
    S.luyenDaXem = (luu && luu.daXem) || {};
    var nghe = S.de.sections[NGHE_SI];
    S.audio = new Audio(S.tep[nghe.audio]);
    S.audio.preload = 'auto';
    if (mode === 'that') {
      if (luu && luu.phase === 'doc') { S.phase = 'doc'; S.docHet = luu.docHet; }
      else if (luu && luu.phase === 'nghe-xong') { S.phase = 'nghe-het'; }
      else { S.phase = 'nghe-cho'; S.audioT = (luu && luu.audioT) || 0; }
    } else {
      S.phase = 'luyen';
      S.batDauLuc = Date.now() - ((luu && luu.daLam) || 0) * 1000;
    }
    veKhung();
    if (S.phase === 'doc') vaoDoc(true);
    else if (S.phase === 'nghe-het') { S.phase = 'nghe'; hetNghe(); }
    else if (S.phase === 'nghe-cho') veChoNghe();
    else veCau();
    if (S.mode === 'luyen') {
      // Luyen tap: dong ho dem thoi gian da lam (khong gioi han)
      $('#dongHo').classList.add('is-dem');
      clearInterval(S.timer);
      var demGio = function () { $('#dongHoSo').textContent = dongHo((Date.now() - S.batDauLuc) / 1000); };
      demGio();
      S.timer = setInterval(demGio, 1000);
    }
    luuTam();
  }

  function luuTam() {
    ghi(LAM_KEY, {
      mode: S.mode, phase: S.phase, answers: S.answers, cur: S.cur, daXem: S.luyenDaXem,
      docHet: S.docHet, audioT: S.audio ? S.audio.currentTime : 0, luu: Date.now(),
      daLam: S.batDauLuc ? Math.round((Date.now() - S.batDauLuc) / 1000) : 0
    });
  }

  function veKhung() {
    var de = S.de;
    document.body.classList.toggle('an-py', !S.pinyin);
    app.innerHTML =
      '<header class="t3-top">' +
        '<div class="t3-top-trai"><span class="t3-logo">HSK</span><span class="t3-top-ten"><b>' + CAP_ZH[de.capDo] + '级 · ' + (S.mode === 'that' ? 'Thi thật' : 'Luyện tập') + '</b><small id="phanTen"></small></span></div>' +
        '<div class="t3-dongho" id="dongHo" aria-live="off">' + ICON.dong + '<span id="dongHoSo">--:--</span></div>' +
        '<div class="t3-top-phai">' +
          '<button type="button" class="t3-py-nut" id="pyNut" aria-pressed="' + S.pinyin + '">Pinyin</button>' +
          '<button type="button" class="t3-nop" id="nopNut">' + (S.mode === 'that' ? 'Nộp bài' : 'Xem kết quả') + '</button>' +
        '</div>' +
      '</header>' +
      '<div class="t3-than">' +
        '<aside class="t3-ben" aria-label="Danh sách câu">' + veLuoiCau() + '</aside>' +
        '<main class="t3-chinh"><div id="manCau" class="t3-man"></div></main>' +
      '</div>' +
      '<footer class="t3-chan" id="chan"></footer>';
    $('#pyNut').addEventListener('click', function () {
      S.pinyin = !S.pinyin; ghi('hyv_hsk30_pinyin', S.pinyin);
      document.body.classList.toggle('an-py', !S.pinyin);
      this.setAttribute('aria-pressed', String(S.pinyin));
    });
    $('#nopNut').addEventListener('click', hoiNop);
    $all('[data-di]').forEach(function (b) { b.addEventListener('click', function () { diToi(+b.getAttribute('data-di')); }); });
    document.onkeydown = phimTat;
  }

  function veLuoiCau() {
    return S.de.sections.map(function (sec, si) {
      return '<div class="t3-nhom"><p class="t3-nhom-ten">' + (sec.id === 'nghe' ? ICON.nghe : ICON.doc) + esc(sec.ten) + ' <span class="t3-zh">' + esc(sec.tenZh) + '</span></p><div class="t3-luoi">' +
        S.ds.map(function (it, i) {
          if (it.si !== si) return '';
          return '<button type="button" class="t3-so" data-di="' + i + '" data-so="' + i + '">' + it.q.n + '</button>';
        }).join('') + '</div></div>';
    }).join('') +
    '<p class="t3-chu-thich"><i class="t3-o t3-o-da"></i>Đã chọn <i class="t3-o"></i>Chưa chọn</p>';
  }

  function capNhatLuoi() {
    $all('[data-so]').forEach(function (b) {
      var i = +b.getAttribute('data-so'), it = S.ds[i];
      var da = S.answers[it.q.n] != null;
      b.classList.toggle('is-da', da);
      b.classList.toggle('is-cur', i === S.cur && S.xem === 'cau');
      var khoa = S.mode === 'that' && (S.phase.indexOf('nghe') === 0 ? true : it.si === NGHE_SI);
      b.disabled = khoa;
      if (S.mode === 'luyen' && da) {
        b.classList.toggle('is-dung', S.answers[it.q.n] === it.q.dap);
        b.classList.toggle('is-sai', S.answers[it.q.n] !== it.q.dap);
      }
    });
    // Dien thoai: dai so cau cuon ngang — dua cau dang lam vao tam nhin
    var oCur = $('.t3-so.is-cur');
    var ben = $('.t3-ben');
    if (oCur && ben && ben.scrollWidth > ben.clientWidth) {
      var r = oCur.getBoundingClientRect(), rb = ben.getBoundingClientRect();
      if (r.left < rb.left || r.right > rb.right) ben.scrollLeft += r.left - rb.left - rb.width / 2 + r.width / 2;
    }
    var cur = S.ds[S.cur];
    var ten = $('#phanTen');
    if (ten && cur) ten.textContent = cur.sec.tenZh + ' · ' + cur.part.tenZh;
  }

  /* ---------- ve mot cau ---------- */
  function chuPy(o, lop) {
    return '<span class="t3-zp ' + (lop || '') + '">' + (o.py ? '<span class="t3-py">' + esc(o.py) + '</span>' : '') + '<span class="t3-zh">' + esc(o.zh) + '</span></span>';
  }

  function veLuaChon(it, khoa) {
    var q = it.q, p = it.part;
    var chon = q.chon || p.chung;
    var keys = Object.keys(chon);
    var laAnh = !!chon[keys[0]].anh;
    var daChon = S.answers[q.n];
    var hienDap = S.mode === 'luyen' && daChon != null;
    var lop = 't3-chon ' + (laAnh ? 't3-chon-anh t3-chon-' + keys.length : 't3-chon-chu' + (keys.length > 3 ? ' t3-chon-6' : ''));
    return '<div class="' + lop + '" role="radiogroup" aria-label="Chọn đáp án câu ' + q.n + '">' +
      keys.map(function (k) {
        var o = chon[k];
        var laViDu = p.viDuDung === k;
        var cls = 't3-op' + (daChon === k ? ' is-chon' : '') +
          (hienDap && k === q.dap ? ' is-dung' : '') + (hienDap && daChon === k && k !== q.dap ? ' is-sai' : '') + (laViDu ? ' is-vidu' : '');
        return '<button type="button" class="' + cls + '" role="radio" aria-checked="' + (daChon === k) + '" data-chon="' + k + '"' + (khoa || laViDu || hienDap ? ' disabled' : '') + '>' +
          '<span class="t3-op-chu">' + k + '</span>' +
          (o.anh ? '<img src="' + S.tep[o.anh] + '" alt="Hình ' + k + '" loading="lazy" />' : chuPy(o, 't3-op-noi')) +
          (laViDu ? '<span class="t3-op-vidu">Ví dụ</span>' : '') +
        '</button>';
      }).join('') + '</div>';
  }

  function veDe(q) {
    var h = '';
    if (q.de && q.de.dong) {
      h += '<div class="t3-de t3-de-dong">' + q.de.dong.map(function (d) { return '<p><b class="t3-ai">' + esc(d.ai) + '：</b>' + chuPy(d) + '</p>'; }).join('') + '</div>';
    } else if (q.de) {
      h += '<div class="t3-de">' + chuPy(q.de) + '</div>';
    }
    if (q.hoi) h += '<div class="t3-hoi"><span class="t3-sao">★</span>' + chuPy(q.hoi) + '</div>';
    return h;
  }

  function veCau() {
    S.xem = 'cau';
    var it = S.ds[S.cur];
    var q = it.q, p = it.part;
    var laNghe = it.si === NGHE_SI;
    var khoa = S.mode === 'that' && S.phase.indexOf('nghe') === 0 && S.cur !== S.nghePhat;
    var daChon = S.answers[q.n];
    var man = $('#manCau');
    man.innerHTML =
      '<div class="t3-phan"><span class="t3-phan-ten">' + esc(p.tenZh) + ' · ' + esc(p.ten) + '</span><span class="t3-phan-hd">' + esc(p.huongDan) + '</span></div>' +
      '<div class="t3-cau">' +
        '<div class="t3-cau-dau"><span class="t3-cau-so">' + q.n + '</span>' +
          (laNghe && S.mode === 'that' ? '<span class="t3-dangphat" id="dangPhat">' + ICON.nghe + 'Đang phát</span>' : '') +
          (laNghe && S.mode === 'luyen' ? '<button type="button" class="t3-nut t3-nut-nghe" id="ngheCau">' + ICON.loa + 'Nghe câu này</button>' : '') +
        '</div>' +
        veDe(q) +
        veLuaChon(it, khoa) +
        (S.mode === 'luyen' && daChon != null ? veGiai(it) : '') +
      '</div>';
    $all('[data-chon]', man).forEach(function (b) { b.addEventListener('click', function () { chonDap(b.getAttribute('data-chon')); }); });
    var ng = $('#ngheCau');
    if (ng) ng.addEventListener('click', function () { phatDoan(q.am); });
    var lai = $('#chonLai');
    if (lai) lai.addEventListener('click', function () { delete S.answers[q.n]; luuTam(); veCau(); });
    veChan();
    capNhatLuoi();
    man.scrollTop = 0;
  }

  function veGiai(it) {
    var q = it.q;
    var dung = S.answers[q.n] === q.dap;
    return '<section class="t3-giai ' + (dung ? 'is-dung' : 'is-sai') + '" aria-live="polite">' +
      '<p class="t3-giai-kq">' + (dung ? 'Đúng rồi!' : 'Chưa đúng — đáp án là <b>' + q.dap + '</b>') + '</p>' +
      (q.loiThoai ? '<p class="t3-giai-lt"><span>Lời thoại</span>' + esc(q.loiThoai).replace(/\n/g, '<br>') + '</p>' : '') +
      '<p class="t3-giai-nd">' + esc(q.giai) + '</p>' +
      (S.mode === 'luyen' ? '<button type="button" class="t3-nut t3-nut-nho" id="chonLai">Chọn lại</button>' : '') +
    '</section>';
  }

  function veChan() {
    var chan = $('#chan');
    if (S.mode === 'that' && S.phase.indexOf('nghe') === 0) {
      chan.innerHTML = '<div class="t3-tien"><span>Phần Nghe đang phát — câu tự chuyển theo băng</span><div class="t3-tien-bar"><i id="tienNghe"></i></div></div>';
      return;
    }
    var dsHien = S.ds.map(function (it, i) { return i; }).filter(function (i) { return S.mode === 'luyen' || S.ds[i].si !== NGHE_SI; });
    var vt = dsHien.indexOf(S.cur);
    chan.innerHTML =
      '<button type="button" class="t3-nut" id="truoc"' + (vt <= 0 ? ' disabled' : '') + '>' + ICON.trai + 'Câu trước</button>' +
      '<span class="t3-chan-giua">Câu ' + S.ds[S.cur].q.n + ' · đã chọn ' + Object.keys(S.answers).length + '/' + S.ds.length + '</span>' +
      '<button type="button" class="t3-nut t3-nut-chinh" id="sau"' + (vt >= dsHien.length - 1 ? ' disabled' : '') + '>Câu sau' + ICON.phai + '</button>';
    $('#truoc').addEventListener('click', function () { diToi(dsHien[vt - 1]); });
    $('#sau').addEventListener('click', function () { diToi(dsHien[vt + 1]); });
  }

  function diToi(i) {
    if (i == null || i < 0 || i >= S.ds.length) return;
    if (S.mode === 'that' && (S.phase.indexOf('nghe') === 0 || S.ds[i].si === NGHE_SI)) return;
    dungDoan();
    S.cur = i;
    luuTam();
    veCau();
  }

  function chonDap(k) {
    var it = S.ds[S.cur];
    if (S.mode === 'that' && S.phase.indexOf('nghe') === 0 && S.cur !== S.nghePhat) return;
    S.answers[it.q.n] = k;
    luuTam();
    veCau();
  }

  function phimTat(e) {
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (!S.ds.length || S.xem !== 'cau') return;
    var k = e.key.toUpperCase();
    if (/^[A-F]$/.test(k)) { var b = $('[data-chon="' + k + '"]'); if (b && !b.disabled) { b.click(); e.preventDefault(); } }
    else if (e.key === 'ArrowRight') { var s = $('#sau'); if (s && !s.disabled) s.click(); }
    else if (e.key === 'ArrowLeft') { var t = $('#truoc'); if (t && !t.disabled) t.click(); }
  }

  /* ---------- am thanh: nghe rieng mot doan (luyen tap) ---------- */
  var doanHet = null;
  function phatDoan(am) {
    var a = S.audio;
    dungDoan();
    a.currentTime = am[0];
    doanHet = am[1];
    a.play().catch(function () { /* trinh duyet chan tu phat */ });
    a.ontimeupdate = function () { if (doanHet != null && a.currentTime >= doanHet) dungDoan(); };
  }
  function dungDoan() {
    if (S.audio && S.mode === 'luyen') { S.audio.pause(); S.audio.ontimeupdate = null; }
    doanHet = null;
  }

  /* ---------- Thi that: phan Nghe ---------- */
  var cauNghe = [];
  function veChoNghe() {
    S.xem = 'cho';
    cauNghe = S.ds.map(function (it, i) { return { i: i, it: it }; }).filter(function (x) { return x.it.si === NGHE_SI; });
    var tiep = S.audioT > 1;
    $('#manCau').innerHTML =
      '<section class="t3-gioithieu">' + ICON.nghe +
      '<h2>Phần Nghe <span class="t3-zh">听力</span></h2>' +
      '<p>' + soCau(S.de.sections[NGHE_SI]) + ' câu · khoảng ' + S.de.sections[NGHE_SI].phut + ' phút. Băng phát liền một lượt, mỗi câu nghe hai lần, câu hỏi tự chuyển theo băng. Chỉ chọn được đáp án cho câu đang phát — hãy chọn trước khi sang câu sau.</p>' +
      '<button type="button" class="t3-nut t3-nut-chinh t3-nut-lon" id="batNghe">' + (tiep ? 'Nghe tiếp từ ' + dongHo(S.audioT) : 'Bắt đầu phần Nghe') + '</button>' +
      '</section>';
    $('#chan').innerHTML = '';
    $('#dongHoSo').textContent = dongHo(S.de.sections[NGHE_SI].audioHet - (S.audioT || 0));
    $('#batNghe').addEventListener('click', function () {
      var a = S.audio;
      if (S.audioT) a.currentTime = S.audioT;
      S.phase = 'nghe';
      S.nghePhat = -1;
      a.ontimeupdate = theoBang;
      a.onended = hetNghe;
      a.play().then(function () { theoBang(); }).catch(function () { alert('Trình duyệt chặn phát âm thanh. Bấm lại nút để bắt đầu.'); S.phase = 'nghe-cho'; });
      capNhatLuoi();
    });
    capNhatLuoi();
  }

  var luuLanCuoi = 0;
  function theoBang() {
    var a = S.audio, t = a.currentTime;
    var sec = S.de.sections[NGHE_SI];
    // cau dang phat = cau cuoi cung da bat dau (giu tren man den khi cau sau bat dau)
    var dang = -1;
    cauNghe.forEach(function (x) { if (t >= x.it.q.am[0] - 0.3) dang = x.i; });
    // truoc cau dau cua mot phan: hien gioi thieu phan do
    var phanDang = null;
    sec.parts.forEach(function (p) { if (p.batDau != null && t >= p.batDau) phanDang = p; });
    var gioiThieu = phanDang && (dang < 0 || S.ds[dang].part !== phanDang);
    if (gioiThieu) {
      if (S.xem !== 'gt-' + phanDang.tenZh) {
        S.xem = 'gt-' + phanDang.tenZh;
        S.nghePhat = -1;
        $('#manCau').innerHTML = '<section class="t3-gioithieu">' + ICON.nghe + '<h2>' + esc(phanDang.tenZh) + ' · ' + esc(phanDang.ten) + '</h2>' +
          '<p>' + esc(phanDang.huongDan) + '</p><p class="t3-vidu">' + esc(phanDang.viDu) + '</p></section>';
        veChan();
        capNhatLuoi();
      }
    } else if (dang >= 0 && dang !== S.nghePhat) {
      S.nghePhat = dang;
      S.cur = dang;
      veCau();
    } else if (dang < 0 && S.xem !== 'mo') {
      S.xem = 'mo';
      $('#manCau').innerHTML = '<section class="t3-gioithieu">' + ICON.nghe + '<h2>' + esc(sec.tenZh) + '</h2><p>' + esc(sec.gioiThieu || '') + '</p><p class="t3-ghi">Băng đang phát phần giới thiệu…</p></section>';
      veChan();
    }
    $('#dongHoSo').textContent = dongHo(sec.audioHet - t);
    var bar = $('#tienNghe'); if (bar) bar.style.width = Math.min(100, t / sec.audioHet * 100) + '%';
    if (Date.now() - luuLanCuoi > 3000) { luuLanCuoi = Date.now(); luuTam(); }
    if (t >= sec.audioHet) hetNghe();
  }

  function hetNghe() {
    if (S.phase !== 'nghe') return;
    S.audio.pause();
    S.audio.ontimeupdate = null;
    S.phase = 'nghe-xong';
    S.nghePhat = -1;
    S.xem = 'chuyen';
    luuTam();
    var sec = S.de.sections[1];
    $('#manCau').innerHTML = '<section class="t3-gioithieu">' + ICON.doc + '<h2>Hết phần Nghe</h2>' +
      '<p>Tiếp theo là phần Đọc <span class="t3-zh">' + esc(sec.tenZh) + '</span>: ' + soCau(sec) + ' câu trong ' + sec.phut + ' phút. Đồng hồ chạy khi bạn bấm bắt đầu.</p>' +
      '<button type="button" class="t3-nut t3-nut-chinh t3-nut-lon" id="batDoc">Bắt đầu phần Đọc</button></section>';
    $('#chan').innerHTML = '';
    $('#batDoc').addEventListener('click', function () { vaoDoc(false); });
    capNhatLuoi();
  }

  function vaoDoc(tiep) {
    var sec = S.de.sections[1];
    S.phase = 'doc';
    if (!tiep || !S.docHet) S.docHet = Date.now() + sec.phut * 60000;
    var dau = S.ds.findIndex(function (it) { return it.si !== NGHE_SI; });
    if (!tiep || S.ds[S.cur].si === NGHE_SI) S.cur = dau;
    luuTam();
    veCau();
    clearInterval(S.timer);
    S.timer = setInterval(function () {
      var con = (S.docHet - Date.now()) / 1000;
      $('#dongHoSo').textContent = dongHo(con);
      $('#dongHo').classList.toggle('is-gap', con < 300);
      if (con <= 0) { clearInterval(S.timer); nopBai(true); }
    }, 500);
  }

  /* ---------- Nop bai ---------- */
  function hoiNop() {
    var conTrong = S.ds.filter(function (it) { return S.answers[it.q.n] == null; }).length;
    if (S.mode === 'that' && S.phase.indexOf('nghe') === 0) {
      if (!confirm('Phần Nghe chưa xong. Nộp bài bây giờ thì các câu chưa làm tính là sai. Vẫn nộp?')) return;
    } else if (conTrong && !confirm('Còn ' + conTrong + ' câu chưa chọn đáp án. Vẫn ' + (S.mode === 'that' ? 'nộp bài' : 'xem kết quả') + '?')) return;
    nopBai(false);
  }

  function nopBai(hetGio) {
    clearInterval(S.timer);
    if (S.audio) { S.audio.pause(); S.audio.ontimeupdate = null; S.audio.onended = null; }
    var diem = S.de.sections.map(function (sec, si) {
      var ds = S.ds.filter(function (it) { return it.si === si; });
      var dung = ds.filter(function (it) { return S.answers[it.q.n] === it.q.dap; }).length;
      return { ten: sec.ten, tenZh: sec.tenZh, dung: dung, tong: ds.length, diem: Math.round(dung / ds.length * 100) };
    });
    var tong = diem.reduce(function (a, d) { return a + d.diem; }, 0);
    var kq = { mode: S.mode, nghe: diem[0].diem, doc: diem[1] ? diem[1].diem : 0, tong: tong, toiDa: diem.length * 100, at: Date.now() };
    var all = doc(KQ_KEY, {}); all[ID] = kq; ghi(KQ_KEY, all);
    xoa(LAM_KEY);
    S.phase = 'xong';
    veKetQua(diem, tong, hetGio);
  }

  function veKetQua(diem, tong, hetGio) {
    var de = S.de;
    var toiDa = diem.length * 100;
    var dat = tong >= de.diemDat;
    document.onkeydown = null;
    app.innerHTML =
      '<header class="t3-top t3-top-nhe"><a class="t3-back" href="/exam/">' + ICON.trai + 'Thi thử HSK</a><b>' + esc(de.ten) + '</b><span></span></header>' +
      '<main class="t3-wrap">' +
        '<section class="t3-kq">' +
          (hetGio ? '<p class="t3-het-gio">Hết giờ — bài đã được nộp tự động.</p>' : '') +
          '<p class="t3-eyebrow">' + (S.mode === 'that' ? 'Kết quả thi thật' : 'Kết quả luyện tập') + '</p>' +
          '<div class="t3-kq-tong"><b>' + tong + '</b><span>/ ' + toiDa + ' điểm</span></div>' +
          '<p class="t3-kq-dat ' + (dat ? 'is-dat' : '') + '">' + (dat ? 'Đạt' : 'Chưa đạt') + ' <small>(mốc tham khảo ' + de.diemDat + '/' + toiDa + ')</small></p>' +
          '<div class="t3-kq-phan">' + diem.map(function (d) {
            return '<div class="t3-kq-o"><span>' + esc(d.ten) + ' <span class="t3-zh">' + esc(d.tenZh) + '</span></span><b>' + d.diem + '<small>/100</small></b><em>' + d.dung + '/' + d.tong + ' câu đúng</em>' +
              '<div class="t3-kq-bar"><i style="width:' + d.diem + '%"></i></div></div>';
          }).join('') + '</div>' +
          '<div class="t3-hang">' +
            '<a class="t3-nut t3-nut-chinh" href="/hsk30?id=' + encodeURIComponent(ID) + '">Làm lại</a>' +
            '<a class="t3-nut" href="/exam/">Về danh sách đề</a>' +
          '</div>' +
        '</section>' +
        '<section class="t3-xemlai"><div class="t3-xemlai-dau"><h2>Xem lại bài</h2>' +
          '<div class="t3-loc" role="tablist"><button type="button" class="is-on" data-loc="tat">Tất cả</button><button type="button" data-loc="sai">Câu sai (' + S.ds.filter(function (it) { return S.answers[it.q.n] !== it.q.dap; }).length + ')</button></div></div>' +
          '<div id="dsXem"></div></section>' +
      '</main>';
    function veXem(loc) {
      $('#dsXem').innerHTML = S.ds.map(function (it, i) {
        var q = it.q, chon = S.answers[q.n], dung = chon === q.dap;
        if (loc === 'sai' && dung) return '';
        return '<article class="t3-xem ' + (dung ? 'is-dung' : 'is-sai') + '">' +
          '<header><span class="t3-cau-so">' + q.n + '</span><span class="t3-xem-phan">' + esc(it.sec.ten) + ' · ' + esc(it.part.ten) + '</span>' +
          '<span class="t3-xem-kq">' + (chon == null ? 'Bỏ trống' : 'Bạn chọn ' + chon) + ' · Đáp án <b>' + q.dap + '</b></span>' +
          (it.si === NGHE_SI ? '<button type="button" class="t3-nut t3-nut-nho" data-phat="' + i + '">' + ICON.loa + 'Nghe</button>' : '') + '</header>' +
          veDe(q) + xemLuaChon(it) +
          (q.loiThoai ? '<p class="t3-giai-lt"><span>Lời thoại</span>' + esc(q.loiThoai).replace(/\n/g, '<br>') + '</p>' : '') +
          '<p class="t3-giai-nd">' + esc(q.giai) + '</p></article>';
      }).join('') || '<p class="t3-ghi">Không có câu sai nào. Xuất sắc!</p>';
      $all('[data-phat]').forEach(function (b) {
        b.addEventListener('click', function () { S.mode = 'luyen'; phatDoan(S.ds[+b.getAttribute('data-phat')].q.am); });
      });
    }
    function xemLuaChon(it) {
      var q = it.q, chon = q.chon || it.part.chung, k = Object.keys(chon);
      var laAnh = !!chon[k[0]].anh;
      return '<div class="t3-xem-chon ' + (laAnh ? 'is-anh' : '') + '">' + k.map(function (x) {
        var o = chon[x];
        var cls = (x === q.dap ? ' is-dung' : '') + (S.answers[q.n] === x && x !== q.dap ? ' is-sai' : '');
        return '<span class="t3-xem-op' + cls + '"><b>' + x + '</b>' + (o.anh ? '<img src="' + S.tep[o.anh] + '" alt="Hình ' + x + '" />' : chuPy(o)) + '</span>';
      }).join('') + '</div>';
    }
    veXem('tat');
    $all('[data-loc]').forEach(function (b) {
      b.addEventListener('click', function () {
        $all('[data-loc]').forEach(function (x) { x.classList.toggle('is-on', x === b); });
        veXem(b.getAttribute('data-loc'));
      });
    });
    window.scrollTo(0, 0);
  }

  // Roi trang giua chung phan Nghe (thi that): luu vi tri bang
  window.addEventListener('beforeunload', function () { if (S.de && S.phase !== 'xong' && S.phase !== 'batdau') luuTam(); });

  /* ================= Khoi dong ================= */
  if (!ID) veChonDe();
  else if (!/^hsk30-[1-9]-\d{1,2}$/.test(ID)) veChonDe();
  else if (!auth()) veCanDangNhap();
  else taiDe();
})();
