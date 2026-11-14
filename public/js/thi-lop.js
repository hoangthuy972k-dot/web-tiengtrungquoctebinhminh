/* ============================================================
   Thi trên lớp — màn hình thầy cô (/thi-lop)
   Tạo phòng từ kho thi thử HSK → chiếu mã QR → bấm Bắt đầu → phát bài nghe qua loa,
   theo dõi tiến độ từng em, cộng giờ → thu bài → bảng điểm, thống kê từng câu, Excel.
   Học sinh làm bài ở /thi?ma=... (exam.js chế độ "lớp"). Máy chủ: thi-lop.js
   ============================================================ */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $all = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var PW = 'hyv_admin_pw', PHONG_GV = 'hyv_thilop_gv';
  var TEN_CAP = { hsk1: 'HSK 1', hsk2: 'HSK 2', hsk3: 'HSK 3', hsk4: 'HSK 4', hsk5: 'HSK 5', hsk6: 'HSK 6' };
  var TEN_PHAN = { listen: 'Nghe', read: 'Đọc', write: 'Viết' };

  var T = {
    de: [], cap: '', chon: null, lop: [],
    ma: '', ph: null, lech: 0, tab: 'theo', poll: null, dh: null,
    exam: null, cau: [], examId: '',
    nghe: { cau: -1, phat: false, gui: 0 }, cauXem: 0
  };

  function matKhau() { try { return sessionStorage.getItem(PW) || ''; } catch (e) { return ''; } }
  function api(method, path, body) {
    var h = { 'X-Admin-Password': matKhau() };
    if (body) h['Content-Type'] = 'application/json';
    return fetch(path, { method: method, headers: h, body: body ? JSON.stringify(body) : undefined }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (r.status === 401 || r.status === 503 && /ADMIN_PASSWORD/.test(j.error || '')) {
          try { sessionStorage.removeItem(PW); } catch (e) { /* bo qua */ }
          dungPoll();
          hien('dn');
          var l = $('#tlDnLoi'); l.textContent = j.error || 'Sai mật khẩu.'; l.hidden = false;
          throw new Error(j.error || 'Sai mật khẩu.');
        }
        if (!r.ok) throw new Error(j.error || 'Lỗi máy chủ (' + r.status + ').');
        return j;
      });
    });
  }
  function hien(man) {
    $('#tlDangNhap').hidden = man !== 'dn';
    $('#tlTao').hidden = man !== 'tao';
    $('#tlPhong').hidden = man !== 'phong';
    $('#tlManHinh').hidden = man !== 'phong';
    if (man !== 'phong') $('#tlTieuDe').textContent = 'Thi trên lớp';
  }
  function hop(tieuDe, chu, nutOk, onOk) {
    var root = $('#tlHop');
    root.innerHTML = '<div class="tl-hop-nen"><div class="tl-hop" role="dialog" aria-modal="true"><h3>' + esc(tieuDe) + '</h3><p>' + esc(chu) + '</p>' +
      '<div class="tl-hop-nut"><button type="button" class="tl-nut" id="tlHopHuy">Huỷ</button><button type="button" class="tl-nut tl-nut-chinh" id="tlHopOk">' + esc(nutOk) + '</button></div></div></div>';
    var dong = function () { root.innerHTML = ''; };
    $('#tlHopHuy').addEventListener('click', dong);
    $('.tl-hop-nen').addEventListener('click', function (e) { if (e.target === this) dong(); });
    $('#tlHopOk').addEventListener('click', function () { dong(); onOk(); });
    $('#tlHopOk').focus();
  }
  function baoLoi(sel, msg) { var el = $(sel); if (!el) return; el.textContent = msg; el.hidden = !msg; }
  function mmss(giay) {
    giay = Math.max(0, Math.round(giay || 0));
    var h = Math.floor(giay / 3600), m = Math.floor((giay % 3600) / 60), s = giay % 60;
    return (h ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  function ngay(ms) {
    var d = new Date(ms), p = function (x) { return (x < 10 ? '0' : '') + x; };
    return p(d.getDate()) + '/' + p(d.getMonth() + 1) + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
  }

  /* ---------------- Dang nhap + tao phong ---------------- */
  function khoiDong() {
    $('#tlDnForm').addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem(PW, $('#tlMk').value); } catch (err) { /* bo qua */ }
      baoLoi('#tlDnLoi', '');
      taiDau();
    });
    if (!matKhau()) { hien('dn'); $('#tlMk').focus(); return; }
    taiDau();
  }
  function taiDau() {
    api('GET', '/api/thi-lop/de').then(function (d) {
      T.de = d.items || [];
      var caps = [];
      T.de.forEach(function (x) { if (caps.indexOf(x.level) === -1) caps.push(x.level); });
      caps.sort();
      if (!T.cap || caps.indexOf(T.cap) === -1) T.cap = caps[0] || '';
      $('#tlCap').innerHTML = caps.map(function (c) { return '<button type="button" role="tab" data-cap="' + c + '">' + esc(TEN_CAP[c] || c) + '</button>'; }).join('');
      veCap();
      hien('tao');
      if (new URLSearchParams(location.search).get('nguon') === 'sbt' || T.nguon === 'sbt') doiNguon('sbt');
      api('GET', '/api/admin/oral').then(function (o) {
        T.lop = o.classes || [];
        $('#tlLop').innerHTML = '<option value="">Không chọn — học sinh tự gõ họ tên</option>' +
          T.lop.map(function (c) { return '<option value="' + esc(c.id) + '">' + esc(c.name) + ' (' + c.size + ' em)</option>'; }).join('');
      }).catch(function () { /* khong co lop van thi duoc */ });
      taiLichSu();
      var dang = '';
      try { dang = localStorage.getItem(PHONG_GV) || ''; } catch (e) { /* bo qua */ }
      if (/^\d{6}$/.test(dang)) moPhong(dang);
    }).catch(function () { /* da hien dang nhap */ });
  }
  function veCap() {
    $all('#tlCap [data-cap]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-cap') === T.cap); b.setAttribute('aria-selected', String(b.getAttribute('data-cap') === T.cap)); });
    $('#tlDeDs').innerHTML = T.de.filter(function (x) { return x.level === T.cap; }).map(function (x) {
      return '<button type="button" class="tl-de' + (T.chon && T.chon.id === x.id ? ' on' : '') + '" data-de="' + esc(x.id) + '"><b>' + esc(x.title) + '</b>' +
        '<span>' + x.sections.map(function (s) { return esc(s.name) + ' ' + s.so; }).join(' · ') + ' câu · ' + Math.round(x.durationSec / 60) + ' phút</span></button>';
    }).join('') || '<p class="tl-mo">Chưa có đề nào.</p>';
  }
  function chonDe(idDe) {
    T.chon = T.de.filter(function (x) { return x.id === idDe; })[0] || null;
    veCap();
    if (!T.chon) return;
    $('#tlPhan').innerHTML = T.chon.sections.map(function (s) {
      return '<label class="tl-phan-o"><input type="checkbox" value="' + s.id + '" checked /><span><b>' + esc(s.name) + '</b>' + s.so + ' câu' + (s.phut ? ' · ' + s.phut + ' phút' : '') + '</span></label>';
    }).join('');
    $('#tlBuocPhan').hidden = $('#tlBuocLop').hidden = $('#tlHanhDong').hidden = false;
    tinhPhut();
    // giao trinh mac dinh theo cap de (HSK 1–3: giao trinh 3.0)
    var mac = { hsk1: 'hsk1v3', hsk2: 'hsk2v3', hsk3: 'hsk3v3' }[T.chon.level] || T.chon.level;
    if ($('#tlKhoa').value !== mac && $('#tlKhoa').querySelector('option[value="' + mac + '"]')) { $('#tlKhoa').value = mac; T.bai = []; }
    boSoan();
    veSoanKhung();
  }

  /* ---------------- may soan phan Doc / Viet tu bai da hoc (public/js/soan-de.js) ---------------- */
  T.bai = []; T.soan = null; T.dsBaiKhoa = '';
  function nguonSoan() { return ($('input[name="tlNguon"]:checked') || {}).value === 'soan'; }
  function boSoan() {
    T.soan = null;
    $('#tlSoanKq').hidden = true;
    $('#tlSoanTt').textContent = 'Chưa soạn.';
    $('#tlSoanBtn').textContent = 'Soạn đề';
  }
  function veSoanKhung() {
    if (!T.chon) return;
    var coViet = window.SoanDe && SoanDe.coViet(T.chon.level) && T.chon.sections.some(function (s) { return s.id === 'write'; });
    $('#tlSoanViet').hidden = !coViet;
    $all('.tl-soan-v').forEach(function (e) { e.hidden = !coViet; });
    $('#tlSoanCt').hidden = !nguonSoan();
    if (nguonSoan()) taiDsBai();
  }
  function taiDsBai() {
    var khoa = $('#tlKhoa').value;
    if (T.dsBaiKhoa === khoa && $('#tlBai .tl-bai-o')) { veBai(); return; }
    $('#tlBai').innerHTML = '<p class="tl-mo">Đang tải danh sách bài…</p>';
    SoanDe.dsBai(khoa).then(function (ds) {
      T.dsBaiKhoa = khoa;
      T.dsBai = ds;
      T.bai = T.bai.filter(function (n) { return ds.some(function (b) { return b.n === n; }); });
      veBai();
    }, function (e) { $('#tlBai').innerHTML = '<p class="tl-loi">' + esc(e.message) + '</p>'; });
  }
  function veBai() {
    var ds = T.dsBai || [];
    $('#tlBai').innerHTML = ds.map(function (b) {
      return '<button type="button" class="tl-bai-o' + (T.bai.indexOf(b.n) >= 0 ? ' on' : '') + '" data-bai="' + b.n + '" title="' + esc(b.ten) + '" aria-pressed="' + (T.bai.indexOf(b.n) >= 0) + '">Bài ' + b.n + '</button>';
    }).join('');
    var nhanh = [5, 10, 15, 20].filter(function (k) { return k < ds.length; });
    $('#tlBaiNhanh').innerHTML = nhanh.map(function (k) { return '<button type="button" data-den="' + k + '">Bài 1–' + k + '</button>'; }).join('') +
      '<button type="button" data-den="' + ds.length + '">Tất cả</button><button type="button" data-den="0">Bỏ chọn</button>';
  }
  function soanDe() {
    if (!T.chon) return Promise.reject(new Error('Chọn đề trước.'));
    if (!T.bai.length) return Promise.reject(new Error('Chọn ít nhất một bài đã học.'));
    var ph = phanChon();
    var phanSoan = ph.filter(function (p) { return p !== 'listen'; });
    if (!phanSoan.length) return Promise.reject(new Error('Đề chỉ có phần Nghe — không cần máy soạn.'));
    // giu cach danh so cua de goc: Doc tiep sau Nghe, Viet tiep sau Doc
    var so = {}; T.chon.sections.forEach(function (s) { so[s.id] = s.so; });
    var dauDoc = (ph.indexOf('listen') >= 0 ? so.listen || 0 : 0) + 1;
    var batDau = { read: dauDoc, write: dauDoc + (ph.indexOf('read') >= 0 ? so.read || 0 : 0) };
    $('#tlSoanBtn').disabled = true;
    $('#tlSoanTt').textContent = 'Máy đang soạn…';
    return SoanDe.soan({ cap: T.chon.level, khoa: $('#tlKhoa').value, bai: T.bai.slice().sort(function (a, b) { return a - b; }), phan: phanSoan, batDau: batDau })
      .then(function (kq) {
        if (!kq.read && !kq.write) throw new Error(kq.bao.join(' ') || 'Không soạn được đề từ các bài đã chọn.');
        T.soan = kq;
        veKetQuaSoan();
        return kq;
      }).then(function (kq) { $('#tlSoanBtn').disabled = false; return kq; }, function (e) { $('#tlSoanBtn').disabled = false; $('#tlSoanTt').textContent = e.message; throw e; });
  }
  function veKetQuaSoan() {
    var k = T.soan, h = '';
    ['read', 'write'].forEach(function (id) {
      var sec = k[id];
      if (!sec) return;
      h += '<div class="tl-soan-phan"><b>' + esc(sec.name) + ' · ' + k.dem[id] + ' câu</b><ul>' + sec.parts.map(function (p) {
        return '<li>' + esc(p.name) + ': ' + esc(SoanDe.tenDang[p.type] || p.type) + ' <small>(câu ' + p.range[0] + '–' + p.range[1] + ')</small></li>';
      }).join('') + '</ul></div>';
    });
    if (k.bao.length) h += '<ul class="tl-soan-bao">' + k.bao.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    h += '<button type="button" class="tl-nut" data-in="de">Xem trước đề</button>';
    $('#tlSoanKq').innerHTML = h;
    $('#tlSoanKq').hidden = false;
    $('#tlSoanTt').textContent = 'Đã soạn từ ' + k.nguon + '. Bấm “Soạn lại” để đổi câu khác.';
    $('#tlSoanBtn').textContent = 'Soạn lại';
  }
  function phanChon() { return $all('#tlPhan input:checked').map(function (i) { return i.value; }); }
  function tinhPhut() {
    if (!T.chon) return;
    var ph = phanChon(), tat = ph.length === T.chon.sections.length;
    var phut = tat ? Math.round(T.chon.durationSec / 60) : T.chon.sections.filter(function (s) { return ph.indexOf(s.id) !== -1; }).reduce(function (a, s) { return a + (s.phut || 0); }, 0);
    $('#tlPhut').value = phut || 30;
    $('#tlPhutGoiY').textContent = tat ? 'Bằng thời gian đề thi thật (đã gồm phần Nghe).' : ph.length ? 'Theo thời gian các phần trong đề thật — thầy cô sửa tuỳ ý.' : 'Chọn ít nhất một phần thi.';
  }
  function inGiay(kem) {
    if (!T.chon) return;
    var ph = phanChon();
    if (!ph.length) { baoLoi('#tlTaoLoi', 'Chọn ít nhất một phần thi.'); return; }
    var duongDan = function (soan) {
      // ban in doc phan may soan tu localStorage (khong dua dap an len duong dan)
      if (soan) { try { localStorage.setItem('hyv_thilop_in', JSON.stringify({ id: T.chon.id, soan: { read: soan.read || null, write: soan.write || null } })); } catch (e) { /* bo qua */ } }
      return '/thi?in=1&id=' + encodeURIComponent(T.chon.id) + '&phan=' + ph.join(',') + '&kem=' + kem + '&phut=' + (parseInt($('#tlPhut').value, 10) || '') + (soan ? '&soan=1' : '');
    };
    if (!nguonSoan()) { window.open(duongDan(null), '_blank'); return; }
    if (T.soan) { window.open(duongDan(T.soan), '_blank'); return; }
    var w = window.open('about:blank', '_blank'); // mo cua so truoc (dang trong luot bam) de khoi bi chan popup
    soanDe().then(function (k) {
      var url = duongDan(k);
      if (w) w.location.href = url; else window.open(url, '_blank');
    }, function (e) { if (w) w.close(); baoLoi('#tlTaoLoi', e.message); });
  }
  /* ---------------- Sach bai tap tren lop (de doi tu sach bai tap cua bai — sbt-de.js tren may chu) ---------------- */
  T.nguon = 'hsk';
  T.sbt = { ds: null, cap: '', bai: '', dangTai: false };
  function doiNguon(n) {
    T.nguon = n === 'sbt' ? 'sbt' : 'hsk';
    $all('.tl-nguon [data-nguon]').forEach(function (b) { var on = b.getAttribute('data-nguon') === T.nguon; b.classList.toggle('on', on); b.setAttribute('aria-selected', String(on)); });
    var sbt = T.nguon === 'sbt';
    $('#tlSbt').hidden = !sbt;
    $('#tlBuocDe').hidden = sbt;
    $('#tlBuocPhan').hidden = sbt || !T.chon;
    $('.tl-in').hidden = sbt; // ban in giay chi co cho de HSK
    var san = sbt ? !!baiSbt() : !!T.chon;
    $('#tlBuocLop').hidden = $('#tlHanhDong').hidden = !san;
    baoLoi('#tlTaoLoi', '');
    if (sbt) taiSbt();
  }
  function capSbt() { return (T.sbt.ds || []).filter(function (c) { return c.id === T.sbt.cap; })[0] || null; }
  function baiSbt() { var c = capSbt(); return c ? c.bai.filter(function (b) { return b.id === T.sbt.bai; })[0] || null : null; }
  function taiSbt() {
    if (T.sbt.ds) { veSbt(); return; }
    if (T.sbt.dangTai) return;
    T.sbt.dangTai = true;
    api('GET', '/api/thi-lop/sbt').then(function (d) {
      T.sbt.dangTai = false;
      T.sbt.ds = d.cap || [];
      // Mo tu /lop (?nguon=sbt&cap=&bai=) hoac lay cap + bai moi nhat dang chon o Che do lop hoc
      var qs = new URLSearchParams(location.search), lop = {};
      try { lop = JSON.parse(localStorage.getItem('hyv_lop') || '{}') || {}; } catch (e) { /* bo qua */ }
      var coCap = function (id) { return T.sbt.ds.some(function (c) { return c.id === id; }); };
      T.sbt.cap = coCap(qs.get('cap')) ? qs.get('cap') : coCap(lop.level) ? lop.level : (T.sbt.ds[0] || {}).id || '';
      var c = capSbt();
      if (c) {
        var bai = qs.get('bai');
        if (!c.bai.some(function (b) { return b.id === bai; })) {
          var daChon = (lop.level === c.id && Array.isArray(lop.picked) ? lop.picked : []).map(function (u) { var m = /\/lessons\/([a-z0-9-]+)\.html$/.exec(u); return m ? m[1] : ''; });
          var hop = c.bai.filter(function (b) { return daChon.indexOf(b.id) !== -1; });
          bai = hop.length ? hop[hop.length - 1].id : '';
        }
        if (bai) chonSbtBai(bai); else veSbt();
      } else veSbt();
    }).catch(function (e) { T.sbt.dangTai = false; $('#tlSbtBai').innerHTML = '<p class="tl-loi">' + esc(e.message) + '</p>'; });
  }
  var ICON_PHAN = { listen: '🎧', read: '📖', write: '✍️' };
  function veSbt() {
    var ds = T.sbt.ds || [];
    $('#tlSbtCap').innerHTML = ds.map(function (c) {
      var on = c.id === T.sbt.cap;
      return '<button type="button" role="tab" data-sbt-cap="' + esc(c.id) + '" class="' + (on ? 'on' : '') + '" aria-selected="' + on + '">' + esc(c.ten) + '</button>';
    }).join('');
    var c = capSbt();
    $('#tlSbtBai').innerHTML = c ? c.bai.map(function (b) {
      var so = b.bt.reduce(function (a, x) { return a + x.so; }, 0), nghe = b.bt.some(function (x) { return x.nghe; });
      return '<button type="button" class="tl-de' + (b.id === T.sbt.bai ? ' on' : '') + '" data-sbt-bai="' + esc(b.id) + '"><b>Bài ' + b.so + (b.zh ? ' · <span class="zh">' + esc(b.zh) + '</span>' : '') + '</b>' +
        '<span>' + (b.ten ? esc(b.ten) + ' · ' : '') + b.bt.length + ' bài tập · ' + so + ' câu' + (nghe ? ' · có nghe' : '') + '</span></button>';
    }).join('') : '<p class="tl-mo">Chưa có bài nào có sách bài tập.</p>';
    var b = baiSbt();
    $('#tlSbtBuoc2').hidden = !b;
    if (T.nguon === 'sbt') $('#tlBuocLop').hidden = $('#tlHanhDong').hidden = !b;
    if (!b) return;
    $('#tlSbtBt').innerHTML = b.bt.map(function (x) {
      return '<label class="tl-phan-o"><input type="checkbox" value="' + esc(x.id) + '" checked /><span><b>' + ICON_PHAN[x.phan] + ' ' + esc(x.ten) + '</b>' +
        esc(x.tieu) + ' · ' + x.so + ' câu</span></label>';
    }).join('');
    tinhPhutSbt();
  }
  function chonSbtBai(id) { T.sbt.bai = id; veSbt(); }
  function btChon() { return $all('#tlSbtBt input:checked').map(function (i) { return i.value; }); }
  function tinhPhutSbt() {
    var b = baiSbt(); if (!b) return;
    var ch = btChon(), xs = b.bt.filter(function (x) { return ch.indexOf(x.id) !== -1; });
    var so = xs.reduce(function (a, x) { return a + x.so; }, 0), nghe = xs.some(function (x) { return x.phan === 'listen'; });
    // giong goi y cua may chu: ~0,8 phut / cau, them 5 phut khi co phan nghe
    $('#tlSbtPhut').value = so ? Math.max(5, Math.round(so * 0.8) + (nghe ? 5 : 0)) : 20;
    $('#tlSbtGoiY').textContent = !so ? 'Chọn ít nhất một bài tập.'
      : so + ' câu' + (nghe ? ' · có phần nghe: thầy cô phát file nghe của sách bài tập qua loa lớp' : '') + ' · điểm 100 tính theo số câu đúng, đạt từ 60.';
  }

  function taoPhong() {
    if (T.nguon === 'sbt') { taoPhongSbt(); return; }
    if (!T.chon) return;
    var b = $('#tlTaoBtn');
    b.disabled = true;
    baoLoi('#tlTaoLoi', '');
    (nguonSoan() ? (T.soan ? Promise.resolve(T.soan) : soanDe()) : Promise.resolve(null)).then(function (k) {
      return api('POST', '/api/thi-lop/tao', {
        examId: T.chon.id, phan: phanChon(), phut: parseInt($('#tlPhut').value, 10) || 0,
        classId: $('#tlLop').value || '', hienKq: ($('input[name="tlKq"]:checked') || {}).value,
        soan: k ? { read: k.read || null, write: k.write || null } : null
      });
    }).then(function (r) { moPhong(r.ma); })
      .catch(function (e) { baoLoi('#tlTaoLoi', e.message); })
      .then(function () { b.disabled = false; });
  }
  function taoPhongSbt() {
    var b = baiSbt();
    if (!b) { baoLoi('#tlTaoLoi', 'Chọn một bài trước.'); return; }
    var bt = btChon();
    if (!bt.length) { baoLoi('#tlTaoLoi', 'Chọn ít nhất một bài tập.'); return; }
    var nut = $('#tlTaoBtn');
    nut.disabled = true;
    baoLoi('#tlTaoLoi', '');
    api('POST', '/api/thi-lop/tao', {
      nguon: 'sbt', bai: b.id, bt: bt, phut: parseInt($('#tlSbtPhut').value, 10) || 0,
      classId: $('#tlLop').value || '', hienKq: ($('input[name="tlKq"]:checked') || {}).value
    }).then(function (r) { moPhong(r.ma); })
      .catch(function (e) { baoLoi('#tlTaoLoi', e.message); })
      .then(function () { nut.disabled = false; });
  }
  function taiLichSu() {
    api('GET', '/api/thi-lop/ds').then(function (d) {
      var ds = d.items || [];
      $('#tlLichSu').innerHTML = ds.length ? '<ul class="tl-ls">' + ds.map(function (x) {
        var tt = x.pha === 'cho' ? '<i class="tl-tt cho">Chờ bắt đầu</i>' : x.pha === 'lam' ? '<i class="tl-tt lam">Đang thi</i>' : '<i class="tl-tt xong">Đã thu bài</i>';
        return '<li><button type="button" class="tl-ls-mo" data-mo="' + x.ma + '"><b>' + (x.sbt ? '📓 ' : '') + esc(x.tieuDe) + '</b>' +
          '<span>' + ngay(x.tao) + (x.tenLop ? ' · ' + esc(x.tenLop) : '') + ' · mã ' + x.ma + '</span>' +
          '<span>' + tt + ' ' + x.soNop + '/' + x.soHs + ' bài' + (x.tb != null ? ' · TB <b>' + x.tb + '</b>/' + x.max : '') + '</span></button>' +
          '<button type="button" class="tl-ls-xoa" data-xoa="' + x.ma + '" aria-label="Xoá bài thi ' + esc(x.tieuDe) + '">✕</button></li>';
      }).join('') + '</ul>' : '<p class="tl-mo">Chưa có bài thi nào. Bài thi tạo xong sẽ được lưu ở đây cùng bảng điểm.</p>';
    }).catch(function (e) { $('#tlLichSu').innerHTML = '<p class="tl-loi">' + esc(e.message) + '</p>'; });
  }

  /* ---------------- Phong thi ---------------- */
  function moPhong(ma) {
    dungPoll();
    dongXem();
    T.ma = ma;
    T.ph = null;
    try { localStorage.setItem(PHONG_GV, ma); } catch (e) { /* bo qua */ }
    T.cauXem = 0;
    $('#tlCauCt').hidden = true;
    $('#tlBang').innerHTML = $('#tlTong').innerHTML = $('#tlCauTk').innerHTML = '';
    api('GET', '/api/thi-lop/' + ma + '/gv?de=1').then(function (ph) {
      hien('phong');
      nhanPhong(ph);
      taiExam(ph.examId, function () { doiTab(ph.pha === 'xong' ? 'kq' : 'theo'); veTatCa(); });
    }).catch(function (e) {
      try { localStorage.removeItem(PHONG_GV); } catch (er) { /* bo qua */ }
      if (!/mật khẩu/i.test(e.message)) baoLoi('#tlTaoLoi', e.message);
    });
  }
  function raNgoai() {
    dungPoll();
    dongXem();
    var a = $('#tlAudio'); a.pause();
    T.ma = ''; T.ph = null;
    try { localStorage.removeItem(PHONG_GV); } catch (e) { /* bo qua */ }
    hien('tao');
    taiLichSu();
  }
  function dungPoll() { clearInterval(T.poll); clearInterval(T.dh); T.poll = T.dh = null; }
  function chayPoll() {
    dungPoll();
    T.poll = setInterval(function () {
      if (!T.ma) return;
      api('GET', '/api/thi-lop/' + T.ma + '/gv' + (T.tab === 'kq' ? '?chiTiet=1' : '')).then(function (ph) { nhanPhong(ph); veTatCa(); }).catch(function () { /* mang chap chon: lan sau */ });
    }, T.tab === 'kq' ? 4000 : 2500);
    T.dh = setInterval(veDongHo, 500);
  }
  function nhanPhong(ph) {
    var cu = T.ph;
    T.ph = ph;
    T.lech = ph.now - Date.now();
    if (cu && cu.pha === 'lam' && ph.pha === 'xong') { $('#tlAudio').pause(); doiTab('kq'); }
  }
  // Tai de (de lay file nghe, moc thoi gian tung cau, dap an de thong ke)
  function taiExam(examId, xong) {
    // Sach bai tap: de (kem dap an) do may chu gui cung trang thai phong (?de=1) — hai phong cung bai co the khac bai tap chon
    if (T.ph && T.ph.de) { T.examId = examId; T.exam = T.ph.de; lapCau(); xong(); return; }
    if (T.examId === examId && T.exam && !T.exam.sbt) { lapCau(); xong(); return; }
    var s = document.createElement('script');
    s.src = '/exam/tests/' + encodeURIComponent(examId) + '.js';
    s.onload = function () {
      T.examId = examId;
      T.exam = window.EXAM_DATA;
      lapCau();
      xong();
    };
    s.onerror = function () { T.exam = null; xong(); };
    document.head.appendChild(s);
  }
  function lapCau() {
    T.cau = [];
    T.exam.sections.map(function (sec) { return (T.ph.soan && T.ph.soan[sec.id]) || sec; }).forEach(function (sec) {
      if (T.ph.phan.indexOf(sec.id) === -1) return;
      sec.parts.forEach(function (part) {
        (part.groups || [{ questions: part.questions }]).forEach(function (g) {
          (g.questions || []).forEach(function (q, i) {
            T.cau.push({ n: q.n, q: q, part: part, sec: sec, group: part.groups ? g : null,
              audio: q.audio || (i === 0 && g.audio ? g.audio : null), khoa: khoaCau(part, g, q, !!part.groups) });
          });
        });
      });
    });
    var nghe = T.exam.sections.filter(function (s) { return s.id === 'listen'; })[0];
    var a = $('#tlAudio');
    // Sach bai tap: moi phan sach mot file nghe (khong co moc thoi gian tung cau) -> nut phat tung doan
    T.doan = nghe && nghe.tracks && nghe.tracks.length ? nghe.tracks : null;
    if (T.doan) {
      var dang = T.doan.map(function (x) { return x.src; }).indexOf(a.getAttribute('src'));
      if (dang < 0) { dang = 0; a.src = T.doan[0].src; }
      T.doanDang = dang;
      $('#tlNgheDs').innerHTML = T.doan.map(function (x, i) {
        return '<button type="button" data-doan="' + i + '"' + (i === dang ? ' class="on"' : '') + '>▶ ' + esc(x.ten) + '</button>';
      }).join('');
      $('#tlNgheCau').textContent = 'Bấm ▶ để phát ' + T.doan[dang].ten;
      return;
    }
    if (nghe && nghe.audio && a.getAttribute('src') !== nghe.audio) a.src = nghe.audio;
    $('#tlNgheDs').innerHTML = T.cau.filter(function (c) { return c.sec.id === 'listen' && c.audio; }).map(function (c) {
      return '<button type="button" data-tua="' + c.n + '">' + c.n + '</button>';
    }).join('');
  }
  function phatDoan(i, choi) {
    if (!T.doan || !T.doan[i]) return;
    var a = $('#tlAudio');
    T.doanDang = i;
    if (a.getAttribute('src') !== T.doan[i].src) a.src = T.doan[i].src;
    else if (choi) a.currentTime = 0;
    $all('#tlNgheDs [data-doan]').forEach(function (b) { b.classList.toggle('on', +b.getAttribute('data-doan') === i); });
    $('#tlNgheHet').classList.remove('noi');
    if (choi) a.play().catch(function () { /* bo qua */ });
    guiNghe(true);
  }
  function khoaCau(part, g, q, coNhom) {
    var t = part.type;
    if (t === 'judge-pic' || t === 'judge-text') return [true, false];
    if (t === 'pic-mc') return Object.keys(q.pics);
    if (t === 'pic-match') return Object.keys(g.pics);
    if (t === 'mc') return q.options.map(function (o, i) { return 'ABCDEF'[i]; });
    if (t === 'word-fill') return (coNhom ? g.words : part.words).map(function (w) { return w.k; });
    if (t === 'sent-match') return g.options.map(function (o) { return o.k; });
    return null; // cau tu viet
  }
  function doiTab(tab) {
    T.tab = tab;
    $all('.tl-tab [data-tab]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-tab') === tab); b.setAttribute('aria-selected', String(b.getAttribute('data-tab') === tab)); });
    $('#tlTheoDoi').hidden = tab !== 'theo';
    $('#tlKetQua').hidden = tab !== 'kq';
    if (T.ma) {
      chayPoll();
      if (tab === 'kq') api('GET', '/api/thi-lop/' + T.ma + '/gv?chiTiet=1').then(function (ph) { nhanPhong(ph); veTatCa(); }).catch(function () { /* lan sau */ });
    }
  }
  function linkHs() { return location.origin + '/thi?ma=' + T.ma; }
  function qrSvg(link, o) {
    try { var g = qrcode(0, 'M'); g.addData(link); g.make(); return g.createSvgTag({ cellSize: o || 8, margin: 2, scalable: true }); } catch (e) { return ''; }
  }

  function veTatCa() {
    var ph = T.ph;
    if (!ph) return;
    $('#tlTieuDe').textContent = ph.tieuDe;
    $('#tlMaNho').innerHTML = '<span>Mã phòng</span><b>' + ph.ma + '</b>' + (ph.tenLop ? '<em>' + esc(ph.tenLop) + '</em>' : '');
    var nop = ph.hs.filter(function (h) { return h.nop; }).length;
    $('#tlSoNop').textContent = nop ? '(' + nop + ')' : '';
    // sanh cho
    $('#tlSanh').hidden = ph.pha !== 'cho';
    if (ph.pha === 'cho') {
      if ($('#tlQr').getAttribute('data-ma') !== ph.ma) {
        $('#tlQr').innerHTML = qrSvg(linkHs());
        $('#tlQr').setAttribute('data-ma', ph.ma);
        $('#tlUrl').textContent = location.host + '/thi';
        $('#tlMaTo').textContent = ph.ma.slice(0, 3) + ' ' + ph.ma.slice(3);
      }
      $('#tlSanhDe').textContent = ph.tieuDe;
      $('#tlSanhTt').textContent = ph.phan.map(function (p) { return TEN_PHAN[p]; }).join(' + ') + ' · ' + ph.tong + ' câu · ' + ph.phut + ' phút · ' + (ph.hienKq === 'ngay' ? 'hiện điểm ngay khi nộp' : 'điểm hiện khi thầy cô công bố');
    }
    // dang thi
    $('#tlDang').hidden = ph.pha !== 'lam';
    if (ph.pha === 'lam') {
      if ($('#tlQrMini').getAttribute('data-ma') !== ph.ma) {
        $('#tlQrMini').innerHTML = qrSvg(linkHs(), 4) + '<span>' + ph.ma + '</span>';
        $('#tlQrMini').setAttribute('data-ma', ph.ma);
      }
      var coNghe = ph.phan.indexOf('listen') !== -1 && !ph.ngheXong && T.exam;
      $('#tlNghe').hidden = !coNghe;
      var tiep = T.exam && T.exam.sections.filter(function (s) { return ph.phan.indexOf(s.id) !== -1 && s.id !== 'listen'; })[0];
      $('#tlMoDoc').textContent = tiep ? 'Mở phần ' + tiep.name + ' cho cả lớp' : 'Kết thúc phần Nghe';
      if (!coNghe) $('#tlAudio').pause();
    }
    veDongHo();
    veHs();
    if (T.tab === 'kq') veKetQua();
  }
  function veDongHo() {
    var ph = T.ph;
    if (!ph || ph.pha !== 'lam') return;
    var con = Math.ceil((ph.hetLuc - (Date.now() + T.lech)) / 1000);
    var el = $('#tlDh');
    el.textContent = con > 0 ? mmss(con) : '00:00';
    el.classList.toggle('sap-het', con <= 300);
    el.classList.toggle('het', con <= 0);
  }
  function veHs() {
    var ph = T.ph;
    $('#tlSoHs').textContent = '(' + ph.hs.length + (ph.chuaVao.length ? ' / ' + (ph.hs.length + ph.chuaVao.length) : '') + ')';
    $('#tlHs').innerHTML = ph.hs.map(function (h) {
      var pt = ph.tong ? Math.round(h.lam / ph.tong * 100) : 0;
      var tt = h.nop ? 'nop' : h.mat ? 'mat' : ph.pha === 'lam' ? 'lam' : 'cho';
      var chu = h.nop ? (h.auto ? 'Máy tự nộp' : 'Đã nộp') + ' · ' + h.lam + '/' + ph.tong
        : ph.pha === 'cho' ? 'Đã vào' : h.mat ? 'Mất kết nối · ' + h.lam + '/' + ph.tong : TEN_PHAN[ph.phan[h.sec]] ? TEN_PHAN[ph.phan[h.sec]] + ' · ' + h.lam + '/' + ph.tong : h.lam + '/' + ph.tong;
      return '<div class="tl-hs-o ' + tt + '"><b>' + esc(h.ten) + '</b><span>' + esc(chu) + (h.moLai ? ' · chờ vào lại' : '') + '</span>' +
        '<i class="tl-thanh"><i style="width:' + (h.nop ? 100 : pt) + '%"></i></i>' +
        '<span class="tl-hs-nut">' + (h.nop ? '' : '<button type="button" data-molai="' + h.pid + '" title="Em đổi máy / mất mã: cho vào lại, giữ bài đang làm">Cho vào lại</button>') +
        '<button type="button" data-moira="' + h.pid + '" data-ten="' + esc(h.ten) + '" title="Xoá khỏi phòng (vào nhầm tên)">Mời ra</button></span></div>';
    }).join('') || '<p class="tl-mo">Chưa có bạn nào vào phòng.</p>';
    var cv = $('#tlChuaVao');
    cv.hidden = !ph.chuaVao.length;
    cv.innerHTML = ph.chuaVao.length ? '<b>Chưa vào (' + ph.chuaVao.length + '):</b> ' + ph.chuaVao.map(esc).join(', ') : '';
  }

  /* ---------------- Bai nghe ---------------- */
  function cauDangDoc(t) {
    var ds = T.cau.filter(function (c) { return c.sec.id === 'listen' && c.audio; });
    for (var i = 0; i < ds.length; i++) if (t >= ds[i].audio[0] - 0.3 && t <= ds[i].audio[1]) return ds[i].n;
    return 0;
  }
  function guiNghe(ep) {
    var a = $('#tlAudio');
    if (T.doan) {
      var d = T.doan[T.doanDang || 0], dp = !a.paused && !a.ended;
      $('#tlNgheCau').textContent = (dp ? 'Đang phát ' : a.ended ? 'Đã phát xong ' : 'Bấm ▶ để phát ') + d.ten;
      if (!ep && dp === T.nghe.phat && T.nghe.doan === T.doanDang && Date.now() - T.nghe.gui < 10000) return;
      T.nghe = { cau: 0, phat: dp, doan: T.doanDang, gui: Date.now() };
      api('POST', '/api/thi-lop/' + T.ma + '/nghe', { cau: 0, phat: dp, ten: d.ten }).catch(function () { /* lan sau */ });
      return;
    }
    var cau = cauDangDoc(a.currentTime), phat = !a.paused && !a.ended;
    $('#tlNgheCau').textContent = phat ? (cau ? 'Đang đọc câu ' + cau : 'Đang phát hướng dẫn / ví dụ') : (a.ended ? 'Đã phát hết bài nghe' : cau ? 'Tạm dừng ở câu ' + cau : 'Bấm ▶ để phát bài nghe');
    $all('#tlNgheDs [data-tua]').forEach(function (b) { b.classList.toggle('on', +b.getAttribute('data-tua') === cau); });
    if (!ep && cau === T.nghe.cau && phat === T.nghe.phat && Date.now() - T.nghe.gui < 10000) return;
    T.nghe = { cau: cau, phat: phat, gui: Date.now() };
    api('POST', '/api/thi-lop/' + T.ma + '/nghe', { cau: cau, phat: phat }).catch(function () { /* lan sau */ });
  }
  function moDoc() {
    var tiep = $('#tlMoDoc').textContent;
    hop(tiep, 'Máy học sinh sẽ tự chuyển sang phần tiếp theo và không quay lại phần Nghe được nữa.', 'Đồng ý', function () {
      $('#tlAudio').pause();
      api('POST', '/api/thi-lop/' + T.ma + '/nghe', { cau: 0, phat: false, xong: true }).then(function () {
        return api('GET', '/api/thi-lop/' + T.ma + '/gv');
      }).then(function (ph) { nhanPhong(ph); veTatCa(); }).catch(function (e) { alert(e.message); });
    });
  }

  /* ---------------- Ket qua ---------------- */
  function veKetQua() {
    var ph = T.ph;
    $('#tlCongBo').checked = !!ph.congBo;
    $('#tlCongBo').closest('label').hidden = ph.hienKq === 'ngay';
    var nop = ph.hs.filter(function (h) { return h.kq; });
    var diem = nop.map(function (h) { return h.kq.score; });
    var tb = diem.length ? Math.round(diem.reduce(function (a, b) { return a + b; }, 0) / diem.length) : 0;
    var dat = nop.filter(function (h) { return h.kq.pass; }).length;
    $('#tlTong').innerHTML = [
      ['Đã nộp', nop.length + '/' + ph.hs.length],
      ['Điểm trung bình', diem.length ? tb + '<small>/' + ph.max + '</small>' : '—'],
      ['Cao nhất', diem.length ? Math.max.apply(null, diem) : '—'],
      ['Thấp nhất', diem.length ? Math.min.apply(null, diem) : '—'],
      ['Đạt (≥ ' + ph.dat + ')', diem.length ? dat + ' em · ' + Math.round(dat / nop.length * 100) + '%' : '—']
    ].map(function (x) { return '<div><span>' + x[0] + '</span><b>' + x[1] + '</b></div>'; }).join('');
    var phan = ph.phan.filter(function (p) { return T.exam ? T.exam.sections.some(function (s) { return s.id === p; }) : true; });
    var ds = ph.hs.slice().sort(function (a, b) {
      return (b.kq ? 1 : 0) - (a.kq ? 1 : 0) || (b.kq && a.kq ? b.kq.score - a.kq.score || a.kq.giay - b.kq.giay : 0) || a.ten.localeCompare(b.ten, 'vi');
    });
    var hang = 0;
    // thu tu bang diem = thu tu "Ban truoc / Ban sau" va so "Hoc sinh #k" khi an ten (bai lam tung em)
    T.dsXem = []; T.hangXem = {};
    $('#tlBang').innerHTML = '<thead><tr><th>#</th><th>Họ tên</th><th>Điểm</th><th>Đúng</th>' +
      phan.map(function (p) { return '<th>' + TEN_PHAN[p] + '</th>'; }).join('') + '<th>Thời gian</th><th>Kết quả</th></tr></thead><tbody>' +
      ds.map(function (h) {
        if (!h.kq) return '<tr class="chua"><td></td><td>' + esc(h.ten) + '</td><td colspan="' + (4 + phan.length) + '">' + (ph.pha === 'xong' ? 'Không nộp bài' : 'Đang làm · ' + h.lam + '/' + ph.tong + ' câu') + '</td></tr>';
        hang++;
        T.dsXem.push(h.pid); T.hangXem[h.pid] = hang;
        var k = h.kq;
        return '<tr class="tl-co-bai" data-xem="' + esc(h.pid) + '"><td>' + hang + '</td><td><button type="button" class="tl-ten-nut" data-xem="' + esc(h.pid) + '" title="Xem bài làm của ' + esc(h.ten) + '">' + esc(h.ten) + '</button>' + (h.auto ? ' <small title="Hết giờ, máy tự nộp">⏰</small>' : '') + '</td>' +
          '<td class="so"><b>' + k.score + '</b><small>/' + k.max + '</small></td><td class="so">' + k.correct + '/' + k.total + '</td>' +
          phan.map(function (p) { var s = (k.sec || []).filter(function (x) { return x.id === p; })[0]; return '<td class="so">' + (s ? s.score + ' <small>(' + s.c + '/' + s.t + ')</small>' : '') + '</td>'; }).join('') +
          '<td class="so">' + mmss(k.giay) + '</td><td>' + (k.pass ? '<i class="tl-dat">Đạt</i>' : '<i class="tl-chua-dat">Chưa đạt</i>') + '</td></tr>';
      }).join('') +
      ph.chuaVao.map(function (ten) { return '<tr class="chua"><td></td><td>' + esc(ten) + '</td><td colspan="' + (4 + phan.length) + '">Vắng — chưa vào phòng thi</td></tr>'; }).join('') + '</tbody>';
    $('#tlBangGoiY').hidden = !hang;
    veThongKeCau(nop);
  }
  function veThongKeCau(nop) {
    var coCT = nop.filter(function (h) { return h.dung; });
    if (!T.cau.length || !coCT.length) { $('#tlCauTk').innerHTML = '<p class="tl-mo">Thống kê hiện khi có bài nộp.</p>'; $('#tlCauCt').hidden = true; return; }
    var nhom = '';
    $('#tlCauTk').innerHTML = T.cau.map(function (c) {
      var dung = coCT.filter(function (h) { return h.dung[c.n]; }).length;
      var pt = Math.round(dung / coCT.length * 100);
      var dau = c.sec.id !== nhom ? '<span class="tl-cau-phan">' + esc(c.sec.name) + '</span>' : '';
      nhom = c.sec.id;
      // xanh (de) -> do (nhieu ban sai)
      var mau = 'hsl(' + Math.round(pt * 1.2) + ' 62% ' + (88 - Math.round(pt / 100 * 6)) + '%)';
      return dau + '<button type="button" class="tl-cau' + (T.cauXem === c.n ? ' on' : '') + '" data-cau="' + c.n + '" style="background:' + mau + '" title="Câu ' + c.n + ': ' + dung + '/' + coCT.length + ' bạn đúng"><b>' + c.n + '</b><span>' + pt + '%</span></button>';
    }).join('');
    if (T.cauXem) veChiTietCau(T.cauXem, coCT);
  }
  function hienDapAn(v) { return v === true ? '✓ Đúng' : v === false ? '✗ Sai' : String(v); }
  function veChiTietCau(n, coCT) {
    var c = T.cau.filter(function (x) { return x.n === n; })[0];
    var box = $('#tlCauCt');
    if (!c) { box.hidden = true; return; }
    coCT = coCT || T.ph.hs.filter(function (h) { return h.kq && h.dung; });
    var dem = {}, bo = 0;
    coCT.forEach(function (h) {
      var v = h.tl ? h.tl[n] : undefined;
      if (v === undefined || v === '') { bo++; return; }
      var k = typeof v === 'boolean' ? String(v) : v;
      dem[k] = (dem[k] || 0) + 1;
    });
    var tong = coCT.length || 1;
    var dong = function (nhan, so, dung) {
      return '<div class="tl-pb' + (dung ? ' dung' : '') + '"><span class="tl-pb-n">' + nhan + '</span><i><i style="width:' + Math.round(so / tong * 100) + '%"></i></i><b>' + so + '</b></div>';
    };
    var h = '<h4>Câu ' + n + ' · ' + esc(c.sec.name) + ' · ' + esc(c.part.name) + '</h4>';
    if (c.khoa) {
      h += c.khoa.map(function (k) { return dong(esc(hienDapAn(k)), dem[String(k)] || 0, k === c.q.answer); }).join('') + dong('Bỏ trống', bo, false);
    } else {
      var cac = Object.keys(dem).sort(function (a, b) { return dem[b] - dem[a]; }).slice(0, 8);
      h += '<p>Đáp án: <b class="zh">' + esc(c.q.answer) + '</b></p>' + cac.map(function (k) { return dong('<span class="zh">' + esc(k) + '</span>', dem[k], false); }).join('') + dong('Bỏ trống', bo, false);
    }
    if (c.q.script) h += '<p class="tl-loi-nghe zh">' + esc(c.q.script).replace(/\n/g, '<br>') + '</p>';
    var sai = coCT.filter(function (x) { return !x.dung[n]; }).map(function (x) { return x.ten; });
    if (sai.length) h += '<p class="tl-ai-sai"><b>Chưa đúng (' + sai.length + '):</b> ' + sai.map(esc).join(', ') + '</p>';
    box.innerHTML = h;
    box.hidden = false;
  }
  function taiCsv() {
    var ph = T.ph;
    var phan = ph.phan;
    var cau = T.cau.map(function (c) { return c.n; });
    var dong = [['STT', 'Họ tên', 'Điểm', 'Tối đa', 'Số câu đúng', 'Tổng câu'].concat(phan.map(function (p) { return TEN_PHAN[p]; }), ['Thời gian làm (phút)', 'Kết quả', 'Máy tự nộp'], cau.map(function (n) { return 'Câu ' + n; }))];
    var ds = ph.hs.slice().sort(function (a, b) { return (b.kq ? b.kq.score : -1) - (a.kq ? a.kq.score : -1); });
    ds.forEach(function (h, i) {
      var k = h.kq;
      dong.push([i + 1, h.ten, k ? k.score : '', k ? k.max : ph.max, k ? k.correct : '', k ? k.total : ph.tong]
        .concat(phan.map(function (p) { var s = k && (k.sec || []).filter(function (x) { return x.id === p; })[0]; return s ? s.score : ''; }),
          [k ? Math.round(k.giay / 6) / 10 : '', k ? (k.pass ? 'Đạt' : 'Chưa đạt') : 'Chưa nộp', k && h.auto ? 'x' : ''],
          cau.map(function (n) { return h.dung ? (h.dung[n] ? 1 : 0) : ''; })));
    });
    ph.chuaVao.forEach(function (ten) { dong.push(['', ten, '', ph.max, '', ph.tong].concat(phan.map(function () { return ''; }), ['', 'Vắng', ''])); });
    var csv = '﻿' + dong.map(function (r) { return r.map(function (v) { v = String(v == null ? '' : v); return /[",;\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }).join(','); }).join('\r\n');
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    a.download = 'diem-' + (T.examId || 'thi').replace(/[^\w-]+/g, '-') + '-' + ph.ma + '.csv';
    document.body.appendChild(a); a.click(); a.remove();
  }

  /* ---------------- Bai lam tung em + de thi kem dap an ----------------
     Ve bang chinh phong thi cua hoc sinh: khung /thi?xem=1 (exam.js che do XEM), goi HYV_XEM.ve(...)
     voi de da loc phan thi / phan may soan, bai lam (tl) va dung/sai may chu da cham (dung). */
  var AN_TEN = 'hyv_thilop_an_ten';
  T.xem = { pid: '', de: false, chiSai: true, kq: null, tk: null, san: false, cho: null, daTai: '' };
  T.dsXem = []; T.hangXem = {};
  function anTen() { try { return localStorage.getItem(AN_TEN) === '1'; } catch (e) { return false; } }
  function tenXem(h) { return anTen() ? 'Học sinh #' + (T.hangXem[h.pid] || '?') : h.ten; }
  function hsXem() { return T.ph ? T.ph.hs.filter(function (h) { return h.pid === T.xem.pid; })[0] : null; }
  function baoXem(chu) {
    $('#tlXemBao').textContent = chu || '';
    $('#tlXemBao').hidden = !chu;
    $('#tlXemKhung').hidden = !!chu;
  }
  function moXem(pid) {
    if (!T.ph) return;
    T.xem.pid = pid || '';
    T.xem.de = !pid;
    T.xem.chiSai = true; // mo bai mot em: mac dinh chi hien cau sai
    $('#tlXem').hidden = false;
    document.body.classList.add('tl-xem-mo');
    $('#tlXemDong').focus();
    // bang diem tai khong kem bai lam tung cau (chiTiet) thi lay them mot lan
    var coCT = T.ph.hs.some(function (h) { return h.kq && h.tl !== undefined; });
    if (coCT || !T.ph.hs.some(function (h) { return h.kq; }) || T.xem.daTai === T.ma) { veXem(); return; }
    T.xem.daTai = T.ma;
    baoXem('Đang tải bài làm…');
    api('GET', '/api/thi-lop/' + T.ma + '/gv?chiTiet=1').then(function (p) { nhanPhong(p); veTatCa(); veXem(); })
      .catch(function (e) { baoXem(e.message); });
  }
  function dongXem() {
    if ($('#tlXem').hidden) return;
    $('#tlXem').hidden = true;
    document.body.classList.remove('tl-xem-mo');
    var w = $('#tlXemKhung').contentWindow;
    try { if (w && w.HYV_XEM) w.HYV_XEM.dungNghe(); } catch (e) { /* bo qua */ }
  }
  // Khung /thi?xem=1 tai mot lan, cac lan sau ve lai ngay
  function khungXem(xong) {
    var f = $('#tlXemKhung');
    if (T.xem.san && f.contentWindow && f.contentWindow.HYV_XEM) { xong(f.contentWindow.HYV_XEM); return; }
    T.xem.cho = xong;
    if (f.getAttribute('src')) return; // dang tai
    f.addEventListener('load', function () {
      var H = f.contentWindow && f.contentWindow.HYV_XEM;
      if (!H) { baoXem('Không mở được trang xem bài. Tải lại trang rồi thử lại.'); return; }
      T.xem.san = true;
      var c = T.xem.cho; T.xem.cho = null;
      if (c) c(H);
    }, { once: true });
    f.setAttribute('src', '/thi?xem=1');
  }
  // De dua vao khung: chi cac phan cua phong, phan Doc / Viet may soan thay cho de goc
  function deXem() {
    var ph = T.ph;
    var sections = T.exam.sections.filter(function (s) { return ph.phan.indexOf(s.id) !== -1; })
      .map(function (s) { return (ph.soan && ph.soan[s.id]) || s; });
    return JSON.stringify(Object.assign({}, T.exam, { title: ph.tieuDe, sections: sections, maxScore: ph.max, passScore: ph.dat }));
  }
  function chipXem(h) {
    var k = h.kq;
    return ['<b>' + k.score + '</b>/' + k.max + ' điểm', 'Đúng <b>' + k.correct + '/' + k.total + '</b> câu']
      .concat((k.sec || []).map(function (s) { return esc(TEN_PHAN[s.id] || s.id) + ' <b>' + s.score + '</b> (' + s.c + '/' + s.t + ')'; }))
      .concat(['Thời gian <b>' + mmss(k.giay) + '</b>' + (h.auto ? ' ⏰' : ''), k.pass ? '<i class="tl-dat">Đạt</i>' : '<i class="tl-chua-dat">Chưa đạt</i>']);
  }
  function veXem() {
    var ph = T.ph, de = T.xem.de, h = de ? null : hsXem();
    if (!ph) return;
    if (!de && (!h || !h.kq)) { dongXem(); return; }
    var i = de ? -1 : T.dsXem.indexOf(h.pid);
    $('#tlXemTruoc').hidden = $('#tlXemSau').hidden = de;
    $('#tlXemTruoc').disabled = i <= 0;
    $('#tlXemSau').disabled = i === -1 || i >= T.dsXem.length - 1;
    $('#tlXemLoc').hidden = $('#tlXemChuGiai').hidden = de;
    $('#tlXemIn').textContent = de ? '🖨️ In đề + đáp án' : '🖨️ In bài làm';
    $('#tlXemAn').checked = anTen();
    $('#tlXemKhung').title = de ? 'Đề thi kèm đáp án' : 'Bài làm';
    T.xem.kq = null; T.xem.tk = null;
    $('#tlXemNhay').innerHTML = '';
    var coCT = ph.hs.filter(function (x) { return x.kq && x.dung; });
    if (de) {
      $('#tlXemTen').textContent = '📄 Đề thi · ' + ph.tieuDe;
      $('#tlXemTt').innerHTML = coCT.length
        ? '<span><b>' + coCT.length + '</b> bài đã chấm</span><span>Mỗi câu ghi số bạn làm đúng' + (anTen() ? '' : ' · bấm “Ai sai?” để xem tên') + '</span><span class="tl-xem-mau">Ô số câu: <i style="background:hsl(120 62% 86%)"></i>dễ → <i style="background:hsl(0 62% 86%)"></i>nhiều bạn sai</span>'
        : '<span>' + (ph.hs.some(function (x) { return x.kq; }) ? 'Bài thi cũ chưa lưu đáp án từng câu' : 'Chưa có bài nộp') + ' — chỉ xem đề và đáp án.</span>';
      if (coCT.length) {
        T.xem.tk = {};
        T.cau.forEach(function (c) {
          var sai = coCT.filter(function (x) { return !x.dung[c.n]; });
          T.xem.tk[c.n] = { d: coCT.length - sai.length, t: coCT.length, sai: anTen() ? null : sai.map(function (x) { return x.ten; }) };
        });
      }
    } else {
      $('#tlXemTen').textContent = '📄 Bài làm của ' + tenXem(h);
      $('#tlXemTt').innerHTML = chipXem(h).map(function (x) { return '<span>' + x + '</span>'; }).join('');
    }
    if (!T.exam) { baoXem('Chưa tải được đề thi.'); return; }
    if (!de && h.tl === undefined) { $('#tlXemLoc').hidden = $('#tlXemChuGiai').hidden = true; baoXem('Bài thi cũ chưa lưu đáp án từng câu — chỉ xem được điểm ở bảng kết quả.'); return; }
    baoXem('');
    var pid = T.xem.pid;
    khungXem(function (H) {
      if ($('#tlXem').hidden || T.xem.pid !== pid || T.xem.de !== de) return; // da dong / da sang ban khac
      T.xem.kq = H.ve({ data: deXem(), tl: de ? {} : h.tl || {}, dung: de ? null : h.dung || null, deThi: de, tk: T.xem.tk, dau: dauInXem(h) });
      if (!de) H.loc(T.xem.chiSai);
      veNhayXem();
    });
  }
  // Dau trang khi in (nam trong khung, chi hien luc in)
  function dauInXem(h) {
    var ph = T.ph;
    var dong2 = esc(ph.tieuDe) + (ph.tenLop ? ' · ' + esc(ph.tenLop) : '') + ' · Mã phòng ' + ph.ma + (ph.batDau ? ' · ' + ngay(ph.batDau) : '');
    if (!h) return '<h1>Đề thi kèm đáp án</h1><p>' + dong2 + '</p>';
    return '<h1>Bài làm của ' + esc(tenXem(h)) + '</h1><p>' + dong2 + '</p><p>' + chipXem(h).join(' · ') + '</p>';
  }
  function veNhayXem() {
    var kq = T.xem.kq || {}, tk = T.xem.tk, de = T.xem.de, nhom = '';
    var TEN_TT = { dung: 'đúng', sai: 'sai', trong: 'bỏ trống' };
    var sai = 0;
    $('#tlXemNhay').innerHTML = T.cau.map(function (c) {
      var dau = c.sec.id !== nhom ? '<span class="tl-xem-nhom">' + esc(c.sec.name) + '</span>' : '';
      nhom = c.sec.id;
      if (de) {
        var t = tk && tk[c.n], pt = t && t.t ? Math.round(t.d / t.t * 100) : -1;
        return dau + '<button type="button" class="tl-xem-so" data-nhay="' + c.n + '"' + (pt >= 0 ? ' style="background:hsl(' + Math.round(pt * 1.2) + ' 62% 86%)" title="Câu ' + c.n + ': ' + t.d + '/' + t.t + ' bạn đúng"' : ' title="Câu ' + c.n + '"') + '>' + c.n + '</button>';
      }
      var tt = kq[c.n] || 'trong';
      if (tt !== 'dung') sai++;
      return dau + '<button type="button" class="tl-xem-so ' + tt + '" data-nhay="' + c.n + '" title="Câu ' + c.n + ': ' + TEN_TT[tt] + '">' + c.n + '</button>';
    }).join('');
    if (!de) {
      var b = $all('#tlXemLoc [data-loc]');
      b[0].innerHTML = 'Chỉ câu sai <b>' + sai + '</b>';
      b[1].innerHTML = 'Tất cả câu <b>' + T.cau.length + '</b>';
      veLocXem();
    }
  }
  function veLocXem() {
    $all('#tlXemLoc [data-loc]').forEach(function (b) {
      var on = (b.getAttribute('data-loc') === 'sai') === T.xem.chiSai;
      b.classList.toggle('on', on);
      b.setAttribute('aria-checked', String(on));
    });
  }
  function hXem() { var w = $('#tlXemKhung').contentWindow; return T.xem.san && w && w.HYV_XEM; }
  function locXem(chiSai) {
    T.xem.chiSai = chiSai;
    veLocXem();
    var H = hXem(); if (H) H.loc(chiSai);
  }
  function nhayXem(n) {
    var H = hXem(); if (!H) return;
    if (!T.xem.de && T.xem.chiSai && T.xem.kq && T.xem.kq[n] === 'dung') locXem(false); // cau dung dang bi an
    H.toi(n);
    $all('#tlXemNhay [data-nhay]').forEach(function (b) { b.classList.toggle('dang', +b.getAttribute('data-nhay') === n); });
  }
  function doiBanXem(buoc) {
    var i = T.dsXem.indexOf(T.xem.pid) + buoc;
    if (T.xem.de || i < 0 || i >= T.dsXem.length) return;
    T.xem.pid = T.dsXem[i];
    veXem();
  }
  $('#tlXemDe').addEventListener('click', function () { moXem(''); });
  $('#tlXemDong').addEventListener('click', dongXem);
  $('#tlXemTruoc').addEventListener('click', function () { doiBanXem(-1); });
  $('#tlXemSau').addEventListener('click', function () { doiBanXem(1); });
  $('#tlXemIn').addEventListener('click', function () { var w = $('#tlXemKhung').contentWindow; if (hXem()) w.print(); });
  $('#tlXemLoc').addEventListener('click', function (e) { var b = e.target.closest('[data-loc]'); if (b) locXem(b.getAttribute('data-loc') === 'sai'); });
  $('#tlXemNhay').addEventListener('click', function (e) { var b = e.target.closest('[data-nhay]'); if (b) nhayXem(+b.getAttribute('data-nhay')); });
  $('#tlXemAn').addEventListener('change', function () {
    try { localStorage.setItem(AN_TEN, this.checked ? '1' : '0'); } catch (e) { /* bo qua */ }
    if (T.xem.de) { veXem(); return; } // so ban dung / ten ban sai ve lai
    var h = hsXem(); if (!h) return;
    $('#tlXemTen').textContent = '📄 Bài làm của ' + tenXem(h);
    try { var d = $('#tlXemKhung').contentDocument.querySelector('.ex-xem-dau'); if (d) d.innerHTML = dauInXem(h); } catch (e) { /* bo qua */ }
  });
  document.addEventListener('keydown', function (e) {
    if ($('#tlXem').hidden || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key === 'Escape') { dongXem(); return; }
    if (/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowLeft') doiBanXem(-1);
    else if (e.key === 'ArrowRight') doiBanXem(1);
  });

  /* ---------------- Su kien ---------------- */
  document.addEventListener('click', function (e) {
    var t = e.target;
    var cap = t.closest('#tlCap [data-cap]');
    if (cap) { T.cap = cap.getAttribute('data-cap'); veCap(); return; }
    var de = t.closest('[data-de]');
    if (de) { chonDe(de.getAttribute('data-de')); return; }
    var inb = t.closest('[data-in]');
    if (inb) { inGiay(inb.getAttribute('data-in')); return; }
    var mo = t.closest('[data-mo]');
    if (mo) { moPhong(mo.getAttribute('data-mo')); return; }
    var xoa = t.closest('[data-xoa]');
    if (xoa) {
      var ma = xoa.getAttribute('data-xoa');
      hop('Xoá bài thi', 'Xoá bài thi mã ' + ma + ' cùng toàn bộ bảng điểm? Không khôi phục được.', 'Xoá', function () {
        api('POST', '/api/thi-lop/' + ma + '/xoa', {}).then(taiLichSu).catch(function (er) { alert(er.message); });
      });
      return;
    }
    var xemB = t.closest('#tlBang [data-xem]');
    if (xemB) { moXem(xemB.getAttribute('data-xem')); return; }
    var tab = t.closest('.tl-tab [data-tab]');
    if (tab) { doiTab(tab.getAttribute('data-tab')); return; }
    var gio = t.closest('[data-gio]');
    if (gio) {
      api('POST', '/api/thi-lop/' + T.ma + '/gio', { phut: +gio.getAttribute('data-gio') }).then(function (ph) { nhanPhong(ph); veTatCa(); }).catch(function (er) { alert(er.message); });
      return;
    }
    var ml = t.closest('[data-molai]');
    if (ml) {
      api('POST', '/api/thi-lop/' + T.ma + '/molai', { pid: ml.getAttribute('data-molai') }).then(function (ph) { nhanPhong(ph); veTatCa(); }).catch(function (er) { alert(er.message); });
      return;
    }
    var mr = t.closest('[data-moira]');
    if (mr) {
      hop('Mời ra khỏi phòng', 'Xoá ' + mr.getAttribute('data-ten') + ' khỏi phòng thi (kể cả bài đang làm)?', 'Mời ra', function () {
        api('POST', '/api/thi-lop/' + T.ma + '/moi-ra', { pid: mr.getAttribute('data-moira') }).then(function (ph) { nhanPhong(ph); veTatCa(); }).catch(function (er) { alert(er.message); });
      });
      return;
    }
    var ng = t.closest('.tl-nguon [data-nguon]');
    if (ng) { doiNguon(ng.getAttribute('data-nguon')); return; }
    var sc = t.closest('#tlSbtCap [data-sbt-cap]');
    if (sc) { T.sbt.cap = sc.getAttribute('data-sbt-cap'); T.sbt.bai = ''; veSbt(); return; }
    var sb = t.closest('[data-sbt-bai]');
    if (sb) { chonSbtBai(sb.getAttribute('data-sbt-bai')); return; }
    var doan = t.closest('[data-doan]');
    if (doan) { phatDoan(+doan.getAttribute('data-doan'), true); return; }
    var tua = t.closest('[data-tua]');
    if (tua) {
      var c = T.cau.filter(function (x) { return x.n === +tua.getAttribute('data-tua'); })[0];
      var a = $('#tlAudio');
      if (c && c.audio) { a.currentTime = Math.max(0, c.audio[0] - 0.5); a.play().catch(function () { /* bo qua */ }); }
      return;
    }
    var cauB = t.closest('[data-cau]');
    if (cauB) {
      T.cauXem = +cauB.getAttribute('data-cau');
      $all('.tl-cau').forEach(function (b) { b.classList.toggle('on', b === cauB); });
      veChiTietCau(T.cauXem);
      return;
    }
  });
  $('#tlPhan').addEventListener('change', function () { tinhPhut(); boSoan(); });
  $('#tlSbtBt').addEventListener('change', tinhPhutSbt);
  $all('input[name="tlNguon"]').forEach(function (r) { r.addEventListener('change', function () { boSoan(); veSoanKhung(); }); });
  $('#tlKhoa').addEventListener('change', function () { T.bai = []; boSoan(); taiDsBai(); });
  $('#tlSoanBtn').addEventListener('click', function () { soanDe().catch(function () { /* da bao */ }); });
  $('#tlBai').addEventListener('click', function (e) {
    var b = e.target.closest('[data-bai]');
    if (!b) return;
    var n = +b.getAttribute('data-bai'), i = T.bai.indexOf(n);
    if (i >= 0) T.bai.splice(i, 1); else T.bai.push(n);
    boSoan(); veBai();
  });
  $('#tlBaiNhanh').addEventListener('click', function (e) {
    var b = e.target.closest('[data-den]');
    if (!b) return;
    var k = +b.getAttribute('data-den');
    T.bai = (T.dsBai || []).filter(function (x, i) { return i < k; }).map(function (x) { return x.n; });
    boSoan(); veBai();
  });
  $('#tlTaoBtn').addEventListener('click', taoPhong);
  $('#tlRaNgoai').addEventListener('click', raNgoai);
  $('#tlBatDau').addEventListener('click', function () {
    var ph = T.ph;
    var chua = ph.chuaVao.length ? ' Còn ' + ph.chuaVao.length + ' bạn chưa vào (vẫn vào muộn được).' : '';
    hop('Bắt đầu làm bài', 'Đề hiện trên máy ' + ph.hs.length + ' bạn, đồng hồ ' + ph.phut + ' phút bắt đầu chạy.' + chua, 'Bắt đầu', function () {
      api('POST', '/api/thi-lop/' + T.ma + '/batdau', {}).then(function (p) { nhanPhong(p); veTatCa(); }).catch(function (er) { alert(er.message); });
    });
  });
  $('#tlThu').addEventListener('click', function () {
    var con = T.ph.hs.filter(function (h) { return !h.nop; }).length;
    hop('Thu bài ngay', (con ? 'Còn ' + con + ' bạn chưa nộp — máy sẽ chấm bài các em đã làm tới lúc này. ' : '') + 'Sau khi thu, học sinh không sửa bài được nữa, và máy các em sẽ hiện điểm, câu đúng / sai kèm đáp án và giải thích. (Muốn ẩn lại thì bỏ tích “Công bố điểm và đáp án”.)', 'Thu bài', function () {
      $('#tlAudio').pause();
      api('POST', '/api/thi-lop/' + T.ma + '/thu', {}).then(function (p) { nhanPhong(p); doiTab('kq'); veTatCa(); }).catch(function (er) { alert(er.message); });
    });
  });
  $('#tlMoDoc').addEventListener('click', moDoc);
  $('#tlCongBo').addEventListener('change', function () {
    api('POST', '/api/thi-lop/' + T.ma + '/congbo', { bat: this.checked }).then(function (p) { nhanPhong(p); veTatCa(); }).catch(function (er) { alert(er.message); });
  });
  $('#tlTaiCsv').addEventListener('click', taiCsv);
  $('#tlInKq').addEventListener('click', function () { window.print(); });
  $('#tlManHinh').addEventListener('click', function () {
    if (document.fullscreenElement) document.exitFullscreen(); else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
  });
  var a0 = $('#tlAudio');
  ['play', 'pause', 'seeked'].forEach(function (ev) { a0.addEventListener(ev, function () { guiNghe(true); }); });
  a0.addEventListener('timeupdate', function () { guiNghe(false); });
  a0.addEventListener('ended', function () {
    guiNghe(true);
    // Sach bai tap: con doan sau thi nap san, thay co bam ▶ la phat tiep
    if (T.doan && T.doanDang < T.doan.length - 1) {
      var tiep = T.doanDang + 1;
      phatDoan(tiep, false);
      $('#tlNgheCau').textContent = 'Xong đoạn ' + tiep + '. Bấm ▶ để phát ' + T.doan[tiep].ten;
      return;
    }
    $('#tlNgheHet').classList.add('noi');
    $('#tlNgheHetChu').textContent = 'Đã phát hết bài nghe. Bấm để cả lớp sang phần tiếp theo.';
  });

  khoiDong();
})();
