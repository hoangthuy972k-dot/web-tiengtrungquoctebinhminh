/* Diem danh hom nay — dung chung cho cac man goi ten o Che do lop hoc (/lop) va /van-dong.
   Nguon danh sach (srcKey) giong cac man khac:
     'sv:<classId>' lop tren he thong -> GET/POST /api/admin/attendance (mat khau quan tri trong sessionStorage hyv_admin_pw)
     'ls:<listId>'  danh sach nhanh tren may (hyv_ufo_lists) -> localStorage hyv_diemdanh
   Trang thai: 'co' co mat (mac dinh) · 'vcp' vang co phep · 'vkp' vang khong phep · 'muon' di muon (van duoc goi).
   API (window.DiemDanh):
     nap(src[, ep]) -> Promise   tai diem danh hom nay vao bo nho (goi khi vua nap danh sach lop)
     coMat(src, id) -> bool      false = vang hom nay -> man goi ten / chia doi bo qua
     trangThai(src, id), dat(src, id, st) -> Promise, tong(src) -> { id: {vcp, vkp, muon} } | null
     on(fn)                      fn(src) moi khi diem danh doi (man dang mo tu cap nhat)
     mo({ src, onDong })         mo bang diem danh
   _ (dung chung voi lop-diemthuong.js): api, pw, nguon(), dsHs(src), homNay(), esc                         */
(function () {
  'use strict';
  var PW_KEY = 'hyv_admin_pw', LIST_KEY = 'hyv_ufo_lists', LS_KEY = 'hyv_diemdanh', PREF_KEY = 'hyv_dd_nguon';
  var ST = [['co', 'Có mặt'], ['vcp', 'Vắng có phép'], ['vkp', 'Vắng không phép'], ['muon', 'Đi muộn']];
  var NGAN = { co: 'Có mặt', vcp: 'Vắng P', vkp: 'Vắng KP', muon: 'Muộn' };
  var C = {};          // src -> { day, marks, tong, at }
  var dangNap = {};    // src -> Promise
  var nghe = [];

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function boPw() { try { sessionStorage.removeItem(PW_KEY); } catch (e) { /* bo qua */ } }
  function api(path, opts) {
    opts = opts || {};
    opts.headers = { 'X-Admin-Password': pw() };
    if (opts.body) opts.headers['Content-Type'] = 'application/json';
    return fetch(path, opts).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) {
          if (r.status === 401 || r.status === 403) boPw();
          var e = new Error(d && d.error ? d.error : 'Lỗi máy chủ.'); e.status = r.status; throw e;
        }
        return d;
      });
    });
  }
  // ngay theo gio Viet Nam (khop vnDayKey tren may chu)
  function homNay() { return new Date(Date.now() + 7 * 3600000).toISOString().slice(0, 10); }
  function docDs() { var l = docLS(LIST_KEY, []); return Array.isArray(l) ? l : []; }
  function bao(src) { nghe.forEach(function (f) { try { f(src); } catch (e) { /* bo qua */ } }); }

  /* ---------------- du lieu ---------------- */
  function napLs(src) {
    var all = docLS(LS_KEY, {}) || {}, theo = all[src] || {}, day = homNay(), tong = {};
    Object.keys(theo).forEach(function (d) {
      var m = theo[d] || {};
      Object.keys(m).forEach(function (id) {
        var t = tong[id] || (tong[id] = { vcp: 0, vkp: 0, muon: 0 });
        if (t[m[id]] != null) t[m[id]]++;
      });
    });
    C[src] = { day: day, marks: Object.assign({}, theo[day] || {}), tong: tong, at: Date.now() };
  }
  var ganDay = '';     // nguon vua nap gan nhat (man goi ten dang mo) — tam Diem thuong mo san lop nay
  function nap(src, ep) {
    if (!src) return Promise.resolve();
    ganDay = src;
    var c = C[src];
    if (!ep && c && c.day === homNay() && Date.now() - c.at < 120000) return Promise.resolve();
    if (src.indexOf('ls:') === 0) { napLs(src); return Promise.resolve(); }
    if (src.indexOf('sv:') !== 0 || !pw()) { C[src] = { day: homNay(), marks: {}, tong: {}, at: Date.now() }; return Promise.resolve(); }
    if (dangNap[src]) return dangNap[src];
    dangNap[src] = api('/api/admin/attendance?classId=' + encodeURIComponent(src.slice(3)) + '&date=' + homNay()).then(function (d) {
      C[src] = { day: d.date || homNay(), marks: d.marks || {}, tong: d.tong || {}, at: Date.now() };
    }).catch(function () {
      // loi mang / chua co quyen: coi nhu ca lop co mat (khong chan viec goi ten)
      C[src] = { day: homNay(), marks: {}, tong: {}, at: Date.now() - 100000 };
    }).then(function () { delete dangNap[src]; });
    return dangNap[src];
  }
  function trangThai(src, id) {
    if (src) ganDay = src;
    var c = C[src];
    if (!c || c.day !== homNay()) { if (src && src.indexOf('ls:') === 0) { napLs(src); c = C[src]; } else return 'co'; }
    return c.marks[String(id)] || 'co';
  }
  function coMat(src, id) { var s = trangThai(src, id); return s !== 'vcp' && s !== 'vkp'; }
  function tong(src) { var c = C[src]; return c ? c.tong : null; }
  function dat(src, id, st) {
    id = String(id);
    if (!src || !NGAN[st]) return Promise.reject(new Error('Trạng thái không hợp lệ.'));
    var c = C[src] || (C[src] = { day: homNay(), marks: {}, tong: {}, at: Date.now() });
    var cu = c.marks[id] || 'co';
    if (cu === st) return Promise.resolve();
    // cap nhat thong ke tu truoc den nay ngay tren may
    var t = c.tong[id] || (c.tong[id] = { vcp: 0, vkp: 0, muon: 0 });
    if (t[cu] != null) t[cu] = Math.max(0, t[cu] - 1);
    if (t[st] != null) t[st]++;
    if (st === 'co') delete c.marks[id]; else c.marks[id] = st;
    bao(src);
    if (src.indexOf('ls:') === 0) {
      var all = docLS(LS_KEY, {}) || {}, theo = all[src] || (all[src] = {}), day = homNay();
      var m = theo[day] || (theo[day] = {});
      if (st === 'co') delete m[id]; else m[id] = st;
      if (!Object.keys(m).length) delete theo[day];
      // giu 180 ngay gan nhat
      Object.keys(theo).sort().slice(0, -180).forEach(function (d) { delete theo[d]; });
      ghiLS(LS_KEY, all);
      return Promise.resolve();
    }
    var marks = {}; marks[id] = st;
    return api('/api/admin/attendance', { method: 'POST', body: JSON.stringify({ classId: src.slice(3), date: c.day, marks: marks }) });
  }

  /* ---------------- nguon + danh sach (dung chung) ---------------- */
  function nguon() {
    var ls = docDs().filter(function (l) { return l && l.kids && l.kids.length; }).map(function (l) {
      return { v: 'ls:' + l.id, ten: l.name, size: l.kids.length };
    });
    if (!pw()) return Promise.resolve(ls);
    return api('/api/admin/oral').then(function (d) {
      return (d.classes || []).map(function (c) { return { v: 'sv:' + c.id, ten: c.name, size: c.size }; }).concat(ls);
    }).catch(function () { return ls; });
  }
  var dsCache = {};
  function dsHs(src) {
    if (!src) return Promise.resolve([]);
    if (src.indexOf('ls:') === 0) {
      var l = docDs().filter(function (x) { return 'ls:' + x.id === src; })[0];
      return Promise.resolve(l ? l.kids.map(function (k) { return { id: String(k.id), name: String(k.name) }; }) : []);
    }
    var c = dsCache[src];
    if (c && Date.now() - c.at < 60000) return Promise.resolve(c.ds);
    return api('/api/admin/oral?classId=' + encodeURIComponent(src.slice(3))).then(function (d) {
      var ds = (d.roster || []).map(function (r) { return { id: String(r.id), name: String(r.name), no: r.no }; });
      dsCache[src] = { ds: ds, at: Date.now() };
      return ds;
    });
  }
  function optHtml(ds, chon) {
    return '<option value="">— Chọn lớp —</option>' + ds.map(function (n) {
      return '<option value="' + esc(n.v) + '"' + (n.v === chon ? ' selected' : '') + '>' + (n.v.indexOf('sv:') === 0 ? '🏫 ' : '📋 ') + esc(n.ten) + ' (' + n.size + ')' + (n.v.indexOf('ls:') === 0 ? ' · trên máy' : '') + '</option>';
    }).join('');
  }
  function thu(d) {
    var t = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    var x = new Date(d + 'T00:00:00Z');
    return t[x.getUTCDay()] + ', ' + d.slice(8, 10) + '/' + d.slice(5, 7) + '/' + d.slice(0, 4);
  }

  /* ---------------- bang diem danh ---------------- */
  var P = { root: null, src: '', kids: [], onDong: null, loi: '' };
  function $(s) { return P.root.querySelector(s); }
  function dung() {
    var r = document.createElement('div');
    r.className = 'ddn';
    r.hidden = true;
    r.setAttribute('role', 'dialog');
    r.setAttribute('aria-modal', 'true');
    r.setAttribute('aria-label', 'Điểm danh hôm nay');
    r.innerHTML = '<div class="ddn-the">' +
      '<header class="ddn-dau"><span class="ddn-tit"><span class="ddn-ic" aria-hidden="true">📋</span>Điểm danh hôm nay</span>' +
        '<span class="ddn-ngay" id="ddnNgay"></span><span class="ddn-gian"></span>' +
        '<button type="button" class="ddn-nut-nho" data-dd="dong">✕ Đóng</button></header>' +
      '<div class="ddn-cong"><label class="ddn-nguon"><span>Danh sách lớp</span><select id="ddnNguon"></select></label>' +
        '<div class="ddn-dem" id="ddnDem"></div>' +
        '<button type="button" class="ddn-nut" data-dd="tatca">✓ Tất cả có mặt</button></div>' +
      '<form class="ddn-khoa" id="ddnKhoa" hidden><span>Nhập mật khẩu quản trị để lấy lớp trên hệ thống:</span>' +
        '<input type="password" id="ddnPw" placeholder="Mật khẩu quản trị" autocomplete="current-password"><button type="submit" class="ddn-nut">Mở</button></form>' +
      '<div class="ddn-ds" id="ddnDs"></div>' +
      '<p class="ddn-meo">Bạn <b>vắng</b> (có phép / không phép) sẽ không bị gọi trong UFO, Gọi tên vui, Chấm điểm miệng, Cuộc đua ngôi sao và không vào đội. <b>Đi muộn</b> vẫn được gọi. Lớp trên hệ thống lưu trên máy chủ; danh sách nhanh lưu trên máy này.</p>' +
      '</div>';
    document.body.appendChild(r);
    P.root = r;
    r.addEventListener('click', function (e) {
      if (e.target === r) { dong(); return; }
      var b = e.target.closest('[data-dd], [data-st]');
      if (!b) return;
      if (b.hasAttribute('data-st')) { chonSt(b.getAttribute('data-id'), b.getAttribute('data-st')); return; }
      var a = b.getAttribute('data-dd');
      if (a === 'dong') dong();
      else if (a === 'tatca') tatCa();
    });
    $('#ddnNguon').addEventListener('change', function () { chonNguon(this.value); });
    $('#ddnKhoa').addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem(PW_KEY, $('#ddnPw').value); } catch (er) { /* bo qua */ }
      $('#ddnPw').value = '';
      napNguon(P.src);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && P.root && !P.root.hidden) { e.stopImmediatePropagation(); dong(); }
    }, true);
  }
  function napNguon(chon) {
    return nguon().then(function (ds) {
      $('#ddnNguon').innerHTML = optHtml(ds, '');
      $('#ddnKhoa').hidden = !!pw() && ds.some(function (n) { return n.v.indexOf('sv:') === 0; });
      var co = function (v) { return v && ds.some(function (n) { return n.v === v; }); };
      var v = co(chon) ? chon : co(docLS(PREF_KEY, '')) ? docLS(PREF_KEY, '') : (ds[0] ? ds[0].v : '');
      $('#ddnNguon').value = v;
      return chonNguon(v);
    });
  }
  function chonNguon(v) {
    P.src = v; P.kids = []; P.loi = '';
    if (v) ghiLS(PREF_KEY, v);
    if (!v) { ve(); return Promise.resolve(); }
    $('#ddnDs').innerHTML = '<p class="ddn-trong">Đang tải danh sách…</p>';
    return Promise.all([dsHs(v), nap(v, true)]).then(function (r) {
      if (P.src !== v) return;
      P.kids = r[0];
      if (!P.kids.length) P.loi = 'Danh sách này chưa có học sinh.';
      ve();
    }).catch(function (e) {
      P.loi = e && e.status === 401 ? 'Cần nhập lại mật khẩu quản trị.' : (e && e.message) || 'Không tải được danh sách.';
      if (e && e.status === 401) $('#ddnKhoa').hidden = false;
      ve();
    });
  }
  function ve() {
    $('#ddnNgay').textContent = thu(homNay());
    var el = $('#ddnDs');
    if (!P.src) { el.innerHTML = '<p class="ddn-trong">Chọn lớp ở ô phía trên' + (pw() ? '' : ' — hoặc nhập mật khẩu quản trị để lấy lớp trên hệ thống') + '.</p>'; veDem(); return; }
    if (P.loi) { el.innerHTML = '<p class="ddn-trong">' + esc(P.loi) + '</p>'; veDem(); return; }
    el.innerHTML = P.kids.map(function (k, i) {
      var s = trangThai(P.src, k.id);
      return '<div class="ddn-hs is-' + s + '" data-hs="' + esc(k.id) + '"><span class="ddn-so">' + (k.no || i + 1) + '</span><b class="ddn-ten">' + esc(k.name) + '</b>' +
        '<span class="ddn-chon" role="radiogroup" aria-label="' + esc(k.name) + '">' + ST.map(function (x) {
          return '<button type="button" role="radio" aria-checked="' + (s === x[0]) + '" class="ddn-st ddn-st-' + x[0] + (s === x[0] ? ' on' : '') + '" data-st="' + x[0] + '" data-id="' + esc(k.id) + '" title="' + x[1] + '">' + NGAN[x[0]] + '</button>';
        }).join('') + '</span></div>';
    }).join('');
    veDem();
  }
  function veDem() {
    var d = { co: 0, vcp: 0, vkp: 0, muon: 0 };
    P.kids.forEach(function (k) { d[trangThai(P.src, k.id)]++; });
    $('#ddnDem').innerHTML = P.kids.length ? ST.map(function (x) { return '<span class="ddn-dem-' + x[0] + '">' + x[1] + ' <b>' + d[x[0]] + '</b></span>'; }).join('') : '';
  }
  function chonSt(id, st) {
    var src = P.src;
    dat(src, id, st).catch(function (e) { alert('Chưa lưu được điểm danh: ' + e.message); nap(src, true).then(ve); });
    var row = P.root.querySelector('.ddn-hs[data-hs="' + (window.CSS && CSS.escape ? CSS.escape(id) : id) + '"]');
    if (row) {
      row.className = 'ddn-hs is-' + st;
      Array.prototype.forEach.call(row.querySelectorAll('.ddn-st'), function (b) {
        var on = b.getAttribute('data-st') === st;
        b.classList.toggle('on', on); b.setAttribute('aria-checked', on);
      });
    }
    veDem();
  }
  function tatCa() {
    var src = P.src, doi = P.kids.filter(function (k) { return trangThai(src, k.id) !== 'co'; });
    if (!doi.length) return;
    if (src.indexOf('sv:') === 0) {
      var marks = {};
      doi.forEach(function (k) { marks[k.id] = 'co'; });
      var c = C[src];
      doi.forEach(function (k) { var t = c.tong[k.id], cu = c.marks[k.id]; if (t && t[cu] != null) t[cu] = Math.max(0, t[cu] - 1); delete c.marks[k.id]; });
      bao(src); ve();
      api('/api/admin/attendance', { method: 'POST', body: JSON.stringify({ classId: src.slice(3), date: c.day, marks: marks }) })
        .catch(function (e) { alert('Chưa lưu được: ' + e.message); nap(src, true).then(ve); });
    } else {
      doi.forEach(function (k) { dat(src, k.id, 'co'); });
      ve();
    }
  }
  function mo(o) {
    o = o || {};
    if (!P.root) dung();
    P.onDong = o.onDong || null;
    P.root.hidden = false;
    document.documentElement.classList.add('ddn-mo');
    napNguon(o.src || P.src);
  }
  function dong() {
    if (!P.root || P.root.hidden) return;
    P.root.hidden = true;
    document.documentElement.classList.remove('ddn-mo');
    var f = P.onDong; P.onDong = null;
    if (f) try { f(P.src); } catch (e) { /* bo qua */ }
  }

  window.DiemDanh = {
    nap: nap, coMat: coMat, trangThai: trangThai, dat: dat, tong: tong, mo: mo, dong: dong,
    on: function (f) { if (typeof f === 'function') nghe.push(f); },
    ganDay: function () { return ganDay; },
    TEN: { co: 'Có mặt', vcp: 'Vắng có phép', vkp: 'Vắng không phép', muon: 'Đi muộn' },
    _: { api: api, pw: pw, esc: esc, nguon: nguon, dsHs: dsHs, homNay: homNay, optHtml: optHtml, docLS: docLS, ghiLS: ghiLS }
  };
  // Nut tren man chuan bi /lop
  var nut = document.getElementById('lopDiemDanhMo');
  if (nut) nut.addEventListener('click', function () { mo({}); });
})();
