/* Cham diem mieng nhanh — Che do lop hoc (/lop).
   Em len bang viet chu Han / tra bai dau gio: thay/co mo bang nay, chon danh sach lop, bam ten em,
   bam diem 0–10 la luu ngay. Lop tren he thong -> cot "Mieng" (POST /api/admin/oral, mat khau quan tri
   trong sessionStorage giong Kiem tra bai cu); danh sach nhanh tren may (hyv_ufo_lists) -> chi luu tren may.
   Bam nham thi "Hoan tac" (DELETE /api/admin/oral/:id) vi cot Mieng la diem trung binh cac lan cham.
   Nut mo: #lopMiengMo trong lop.html.                                                                    */
(function () {
  'use strict';
  var PW_KEY = 'hyv_admin_pw', LIST_KEY = 'hyv_ufo_lists', PREF_KEY = 'hyv_mieng_nguon';
  var NOI_DUNG = ['Viết chữ Hán', 'Đọc bài', 'Từ vựng', 'Ngữ pháp', 'Hội thoại'];
  var S = { built: false, src: '', classes: [], kids: [], chon: null, loc: '', homNay: [], noiDung: '', dangTai: false, loi: '' };
  var root;
  function $(sel) { return root.querySelector(sel); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function api(path, opts) {
    opts = opts || {};
    opts.headers = { 'X-Admin-Password': pw() };
    if (opts.body) opts.headers['Content-Type'] = 'application/json';
    return fetch(path, opts).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d && d.error ? d.error : 'Lỗi máy chủ.'); e.status = r.status; throw e; }
        return d;
      });
    });
  }
  function docDs() { var l = docLS(LIST_KEY, []); return Array.isArray(l) ? l : []; }
  // tim kiem khong dau: "gia my" khop "Gia My"
  function khongDau(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd'); }
  function laHomNay(ms) { return ms && new Date(ms).toDateString() === new Date().toDateString(); }

  function dung() {
    root = document.createElement('section');
    root.className = 'lmi';
    root.hidden = true;
    root.innerHTML = '<header class="lmi-bar"><span class="lmi-tit"><span class="lmi-ic" aria-hidden="true">写</span>Chấm điểm miệng</span>' +
      '<span class="lmi-phu">Bấm tên bạn lên bảng → bấm điểm là lưu ngay vào cột <b>Miệng</b></span><span class="lmi-gian"></span>' +
      '<button type="button" class="lmi-nut-nho" data-act="dong">✕ Đóng</button></header>' +
      '<div class="lmi-than"><aside class="lmi-trai">' +
        '<label class="lmi-nguon"><span>📋 Danh sách lớp</span><select id="lmiNguon"></select></label>' +
        '<div class="lmi-khoa" id="lmiKhoa" hidden><p>Nhập mật khẩu quản trị để lấy lớp trên hệ thống (điểm lên cột “Miệng”).</p>' +
          '<form id="lmiKhoaForm"><input type="password" id="lmiPw" placeholder="Mật khẩu quản trị" autocomplete="current-password"><button type="submit" class="lmi-nut">Mở</button></form><p class="lmi-loi" id="lmiPwLoi"></p></div>' +
        '<div class="lmi-tim"><input type="search" id="lmiTim" placeholder="Tìm tên…" autocomplete="off"><button type="button" class="lmi-nut lmi-nut-vang" data-act="ngaunhien">🎲 Gọi ngẫu nhiên</button></div>' +
        '<div class="lmi-ds" id="lmiDs"></div>' +
      '</aside><main class="lmi-phai" id="lmiPhai"></main></div>' +
      '<div class="lmi-bao" id="lmiBao" hidden></div>';
    document.body.appendChild(root);
    root.addEventListener('click', bam);
    $('#lmiNguon').addEventListener('change', function () { chonNguon(this.value); });
    $('#lmiTim').addEventListener('input', function () { S.loc = this.value; veDs(); });
    $('#lmiKhoaForm').addEventListener('submit', function (e) {
      e.preventDefault();
      try { sessionStorage.setItem(PW_KEY, $('#lmiPw').value); } catch (er) { /* bo qua */ }
      $('#lmiPwLoi').textContent = '';
      napLop().then(function () { if (!S.classes.length) $('#lmiPwLoi').textContent = 'Mật khẩu chưa đúng hoặc chưa có lớp nào.'; napNguon(); chonDau(); });
    });
    S.built = true;
  }

  /* ---------------- nguon danh sach ---------------- */
  function napLop() {
    if (!pw()) { S.classes = []; return Promise.resolve(); }
    return api('/api/admin/oral').then(function (d) { S.classes = d.classes || []; }).catch(function (e) {
      if (e && (e.status === 401 || e.status === 403)) { try { sessionStorage.removeItem(PW_KEY); } catch (x) { /* bo qua */ } }
      S.classes = [];
    });
  }
  function napNguon() {
    var o = ['<option value="">— Chọn lớp —</option>'];
    S.classes.forEach(function (c) { o.push('<option value="sv:' + esc(c.id) + '">🏫 ' + esc(c.name) + ' (' + c.size + ')</option>'); });
    docDs().forEach(function (l) { if (l && l.kids && l.kids.length) o.push('<option value="ls:' + esc(l.id) + '">📋 ' + esc(l.name) + ' (' + l.kids.length + ') · trên máy</option>'); });
    $('#lmiNguon').innerHTML = o.join('');
    $('#lmiNguon').value = S.src;
    $('#lmiKhoa').hidden = !!S.classes.length;
  }
  function coNguon(v) { return !!$('#lmiNguon').querySelector('option[value="' + v + '"]'); }
  function chonDau() {
    var luu = docLS(PREF_KEY, '');
    if (luu && coNguon(luu)) return chonNguon(luu);
    if (S.classes.length) return chonNguon('sv:' + S.classes[0].id);
    var l = docDs().filter(function (x) { return x.kids && x.kids.length; })[0];
    if (l) return chonNguon('ls:' + l.id);
    S.src = ''; S.kids = []; veDs(); vePhai();
  }
  function chonNguon(v) {
    S.src = v; S.chon = null; S.loi = '';
    ghiLS(PREF_KEY, v);
    $('#lmiNguon').value = v;
    if (!v) { S.kids = []; veDs(); vePhai(); return Promise.resolve(); }
    if (v.indexOf('ls:') === 0) {
      var l = docDs().filter(function (x) { return 'ls:' + x.id === v; })[0];
      S.kids = l ? l.kids.map(function (k) {
        var sc = k.scores || [];
        return { id: k.id, name: k.name, times: k.times || 0, lastMs: k.lastMs || 0, lastScore: sc.length ? sc[sc.length - 1] : null };
      }) : [];
      veDs(); vePhai();
      return Promise.resolve();
    }
    S.dangTai = true; veDs();
    return api('/api/admin/oral?classId=' + encodeURIComponent(v.slice(3))).then(function (d) {
      S.dangTai = false;
      S.kids = (d.roster || []).map(function (r) { return { id: r.id, name: r.name, no: r.no, times: r.times || 0, lastMs: r.lastMs || 0, lastScore: r.lastScore, avg: r.avg }; });
      if (!S.kids.length) S.loi = 'Lớp này chưa có danh sách học sinh. Vào Báo cáo → Lớp & bài giao để dán danh sách.';
      veDs(); vePhai();
    }).catch(function (e) {
      S.dangTai = false;
      S.loi = e.status === 401 || e.status === 403 ? 'Cần nhập lại mật khẩu quản trị.' : e.message;
      if (e.status === 401 || e.status === 403) { try { sessionStorage.removeItem(PW_KEY); } catch (x) { /* bo qua */ } S.classes = []; napNguon(); }
      veDs(); vePhai();
    });
  }

  /* ---------------- danh sach hoc sinh ---------------- */
  function veDs() {
    var el = $('#lmiDs');
    if (S.dangTai) { el.innerHTML = '<p class="lmi-trong">Đang tải danh sách…</p>'; return; }
    if (S.loi) { el.innerHTML = '<p class="lmi-trong">' + esc(S.loi) + '</p>'; return; }
    if (!S.src) { el.innerHTML = '<p class="lmi-trong">Chọn lớp ở ô phía trên.</p>'; return; }
    var q = khongDau(S.loc.trim());
    var ds = S.kids.filter(function (k) { return !q || khongDau(k.name).indexOf(q) >= 0; });
    el.innerHTML = ds.length ? ds.map(function (k) {
      var hn = S.homNay.filter(function (x) { return x.kid === k.id && x.src === S.src; });
      var diemHn = hn.length ? hn[hn.length - 1].diem : null;
      return '<button type="button" class="lmi-hs' + (S.chon && S.chon.id === k.id ? ' chon' : '') + (diemHn != null ? ' da' : '') + '" data-hs="' + esc(k.id) + '">' +
        (k.no ? '<span class="lmi-so">' + k.no + '</span>' : '') + '<b>' + esc(k.name) + '</b>' +
        (diemHn != null ? '<span class="lmi-diem-nho">✓ ' + diemHn + '</span>' : k.lastScore != null ? '<small>lần trước ' + k.lastScore + '</small>' : '') + '</button>';
    }).join('') : '<p class="lmi-trong">Không thấy tên nào khớp.</p>';
  }

  /* ---------------- cham diem ---------------- */
  function vePhai() {
    var el = $('#lmiPhai'), k = S.chon;
    var hn = S.homNay.filter(function (x) { return x.src === S.src; });
    var nk = '<div class="lmi-nk"><h3>Hôm nay đã chấm · ' + hn.length + ' lượt</h3>' + (hn.length ? '<ol>' + hn.slice().reverse().map(function (x) {
      return '<li><b>' + esc(x.ten) + '</b><span class="lmi-nk-diem">' + x.diem + '</span><small>' + esc(x.nd || '') + ' · ' + x.gio + '</small>' +
        '<button type="button" class="lmi-nut-nho" data-huy="' + x.key + '">↶ Hoàn tác</button></li>';
    }).join('') + '</ol>' : '<p class="lmi-trong">Chưa chấm bạn nào.</p>') + '</div>';
    if (!k) {
      el.innerHTML = '<div class="lmi-cho"><span class="lmi-cho-ic" aria-hidden="true">✍️</span><h2>Bấm tên bạn vừa lên bảng</h2>' +
        '<p>Hoặc bấm <b>🎲 Gọi ngẫu nhiên</b> — máy ưu tiên bạn lâu chưa được gọi.</p></div>' + nk;
      return;
    }
    var diem = '';
    for (var d = 0; d <= 10; d++) diem += '<button type="button" class="lmi-d d' + d + '" data-diem="' + d + '">' + d + '</button>';
    el.innerHTML = '<div class="lmi-cham">' +
      '<p class="lmi-cham-lb">Đang chấm</p><h2 class="lmi-ten">' + esc(k.name) + '</h2>' +
      '<p class="lmi-cham-phu">' + (k.times ? 'Đã kiểm tra ' + k.times + ' lần' + (k.lastScore != null ? ' · lần gần nhất ' + k.lastScore + ' điểm' : '') + (k.avg != null ? ' · TB ' + k.avg : '') : 'Lần đầu được kiểm tra') + '</p>' +
      '<div class="lmi-nd" role="group" aria-label="Nội dung kiểm tra">' + NOI_DUNG.map(function (n) {
        return '<button type="button" data-nd="' + esc(n) + '" class="' + (S.noiDung === n ? 'on' : '') + '">' + esc(n) + '</button>';
      }).join('') + '</div>' +
      '<div class="lmi-diem">' + diem + '</div>' +
      '<p class="lmi-meo">' + (S.src.indexOf('sv:') === 0 ? 'Điểm lên cột “Miệng” của bảng lớp (điểm Miệng = trung bình các lần).' : 'Danh sách nhanh: điểm chỉ lưu trên máy này.') + '</p>' +
      '</div>' + nk;
  }
  function bam(e) {
    var b = e.target.closest('[data-act], [data-hs], [data-diem], [data-nd], [data-huy]');
    if (!b) return;
    if (b.hasAttribute('data-hs')) { var id = b.getAttribute('data-hs'); S.chon = S.kids.filter(function (k) { return k.id === id; })[0] || null; veDs(); vePhai(); return; }
    if (b.hasAttribute('data-nd')) { var n = b.getAttribute('data-nd'); S.noiDung = S.noiDung === n ? '' : n; vePhai(); return; }
    if (b.hasAttribute('data-diem')) { cham(+b.getAttribute('data-diem'), b); return; }
    if (b.hasAttribute('data-huy')) { hoanTac(b.getAttribute('data-huy'), b); return; }
    var a = b.getAttribute('data-act');
    if (a === 'dong') dong();
    else if (a === 'ngaunhien') goiNgauNhien();
  }
  // uu tien: chua cham hom nay > lau chua goi > it lan, them chut ngau nhien
  function goiNgauNhien() {
    if (!S.kids.length) return;
    var now = Date.now(), best = null, bw = -Infinity;
    S.kids.forEach(function (k) {
      var daHn = S.homNay.some(function (x) { return x.kid === k.id && x.src === S.src; }) || laHomNay(k.lastMs);
      var ngay = k.lastMs ? (now - k.lastMs) / 86400000 : 999;
      var w = (daHn ? -1000 : 0) + Math.min(ngay, 60) * 10 - k.times * 3 + Math.random() * 25;
      if (w > bw) { bw = w; best = k; }
    });
    S.chon = best;
    S.loc = ''; $('#lmiTim').value = '';
    veDs(); vePhai();
    var el = $('#lmiDs .lmi-hs.chon');
    if (el) el.scrollIntoView({ block: 'nearest' });
  }
  function cham(diem, nut) {
    var k = S.chon;
    if (!k || nut.disabled) return;
    Array.prototype.forEach.call(root.querySelectorAll('[data-diem]'), function (x) { x.disabled = true; });
    var luu;
    if (S.src.indexOf('sv:') === 0) {
      luu = api('/api/admin/oral', { method: 'POST', body: JSON.stringify({ classId: S.src.slice(3), rosterId: k.id, score: diem }) }).then(function (d) { return d.id; });
    } else {
      var lists = docDs();
      lists.forEach(function (l) {
        if ('ls:' + l.id !== S.src) return;
        l.kids.forEach(function (x) { if (x.id === k.id) { x.times = (x.times || 0) + 1; x.lastMs = Date.now(); x.scores = (x.scores || []).concat(diem).slice(-30); } });
      });
      ghiLS(LIST_KEY, lists);
      luu = Promise.resolve('');
    }
    luu.then(function (sid) {
      k.times = (k.times || 0) + 1; k.lastMs = Date.now(); k.lastScore = diem;
      var gio = new Date(), key = 'm' + gio.getTime();
      S.homNay.push({ key: key, sid: sid, src: S.src, kid: k.id, ten: k.name, diem: diem, nd: S.noiDung, gio: ('0' + gio.getHours()).slice(-2) + ':' + ('0' + gio.getMinutes()).slice(-2) });
      bao('✓ Đã lưu <b>' + diem + ' điểm</b> cho <b>' + esc(k.name) + '</b>' + (S.src.indexOf('sv:') === 0 ? ' — cột Miệng' : ''), key);
      S.chon = null;
      veDs(); vePhai();
    }).catch(function (e) {
      bao('⚠️ Chưa lưu được: ' + esc(e.message));
      Array.prototype.forEach.call(root.querySelectorAll('[data-diem]'), function (x) { x.disabled = false; });
    });
  }
  function hoanTac(key, nut) {
    var x = S.homNay.filter(function (y) { return y.key === key; })[0];
    if (!x) return;
    nut.disabled = true;
    var p;
    if (x.src.indexOf('sv:') === 0) p = x.sid ? api('/api/admin/oral/' + encodeURIComponent(x.sid), { method: 'DELETE' }) : Promise.reject(new Error('Không tìm thấy lần chấm.'));
    else {
      var lists = docDs();
      lists.forEach(function (l) {
        if ('ls:' + l.id !== x.src) return;
        l.kids.forEach(function (c) { if (c.id === x.kid && c.scores && c.scores.length) { c.scores.pop(); c.times = Math.max(0, (c.times || 1) - 1); } });
      });
      ghiLS(LIST_KEY, lists);
      p = Promise.resolve();
    }
    p.then(function () {
      S.homNay = S.homNay.filter(function (y) { return y.key !== key; });
      var k = S.kids.filter(function (c) { return c.id === x.kid; })[0];
      if (k) { k.times = Math.max(0, k.times - 1); var con = S.homNay.filter(function (y) { return y.kid === k.id; }); k.lastScore = con.length ? con[con.length - 1].diem : k.lastScore; }
      bao('↶ Đã xoá ' + x.diem + ' điểm của ' + esc(x.ten));
      veDs(); vePhai();
    }).catch(function (e) { nut.disabled = false; bao('⚠️ ' + esc(e.message)); });
  }
  var henBao = 0;
  function bao(html, key) {
    var el = $('#lmiBao');
    el.innerHTML = html + (key ? ' <button type="button" class="lmi-nut-nho" data-huy="' + key + '">↶ Hoàn tác</button>' : '');
    el.hidden = false;
    clearTimeout(henBao);
    henBao = setTimeout(function () { el.hidden = true; }, 6000);
  }

  function mo() {
    if (!S.built) dung();
    root.hidden = false;
    document.documentElement.classList.add('lmi-open');
    $('#lmiTim').value = S.loc;
    napLop().then(function () { napNguon(); if (!S.src || !coNguon(S.src)) chonDau(); else { veDs(); vePhai(); } });
  }
  function dong() {
    root.hidden = true;
    document.documentElement.classList.remove('lmi-open');
  }
  window.LopMieng = { mo: mo, dong: dong };
  var nut = document.getElementById('lopMiengMo');
  if (nut) nut.addEventListener('click', mo);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && root && !root.hidden) dong(); });
})();
