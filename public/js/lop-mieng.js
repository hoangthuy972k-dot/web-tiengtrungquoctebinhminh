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
  // Thuong nong trai (POST /api/admin/farm-thuong): qua cho san, em mo nong trai la nhan. Diem 9–10 tu gui qua.
  var QUA_NT = [['xu50', '🪙 50 xu'], ['xu100', '🪙 100 xu'], ['hat', '🌱 Hạt giống quý'], ['con', '🐄 Vật nuôi quý'], ['sp', '📦 Hoàn sản vật']];
  var quaChon = 'xu50';
  // "Hoàn sản vật": tra lai mon hang em bi mat (chi tung ban). Danh muc lay tu GET /api/admin/farm-sp
  var SP_DS = null, spK = '', spN = 1;
  var S = { built: false, src: '', classes: [], kids: [], chon: null, loc: '', homNay: [], noiDung: '', dangTai: false, loi: '',
    xem: 'cham', bLoc: 'tat', bSx: 'no', bKy: 'all' };
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
      '<button type="button" class="lmi-nut-nho" data-act="diemdanh" title="Vắng có phép / không phép / đi muộn — bạn vắng không bị gọi ngẫu nhiên">📋 Điểm danh</button>' +
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
    // nho mon / so luong "Hoàn sản vật" khi bang ve lai
    root.addEventListener('change', function (e) {
      if (e.target.id === 'lmiSpK') spK = e.target.value;
      if (e.target.id === 'lmiSpN') spN = Math.max(1, Math.min(20, Math.round(Number(e.target.value)) || 1));
    });
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
        var lan = sc.map(function (x, i) { return { score: x, ms: i === sc.length - 1 ? (k.lastMs || 0) : 0 }; });
        return { id: k.id, name: k.name, times: k.times || 0, lastMs: k.lastMs || 0, lastScore: sc.length ? sc[sc.length - 1] : null, lan: lan };
      }) : [];
      veDs(); vePhai();
      napPhu(v);
      return Promise.resolve();
    }
    S.dangTai = true; veDs();
    return api('/api/admin/oral?classId=' + encodeURIComponent(v.slice(3))).then(function (d) {
      S.dangTai = false;
      S.kids = (d.roster || []).map(function (r) { return { id: r.id, name: r.name, no: r.no, times: r.times || 0, lastMs: r.lastMs || 0, lastScore: r.lastScore, avg: r.avg, lan: r.lan || [] }; });
      if (!S.kids.length) S.loi = 'Lớp này chưa có danh sách học sinh. Vào Báo cáo → Lớp & bài giao để dán danh sách.';
      veDs(); vePhai();
      napPhu(v);
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
      var vang = !coMat(k.id);
      return '<button type="button" class="lmi-hs' + (S.chon && S.chon.id === k.id ? ' chon' : '') + (diemHn != null ? ' da' : '') + (vang ? ' vang' : '') + '" data-hs="' + esc(k.id) + '">' +
        (k.no ? '<span class="lmi-so">' + k.no + '</span>' : '') + tenHtml(k.name) + (vang ? '<span class="lmi-vang-tag">vắng</span>' : '') +
        (diemHn != null ? '<span class="lmi-diem-nho">✓ ' + diemHn + '</span>' : k.lastScore != null ? '<small>lần trước ' + k.lastScore + '</small>' : '') + '</button>';
    }).join('') : '<p class="lmi-trong">Không thấy tên nào khớp.</p>';
  }

  // Diem danh hom nay (lop-diemdanh.js) + diem thuong lop (lop-diemthuong.js)
  function coMat(id) { return !window.DiemDanh || window.DiemDanh.coMat(S.src, id); }
  function napPhu(src, ep) {
    return Promise.all([window.DiemDanh ? window.DiemDanh.nap(src, ep) : null, window.DiemThuong ? window.DiemThuong.nap(src, ep) : null])
      .then(function () { if (src === S.src && root && !root.hidden) { veDs(); vePhai(); } });
  }
  function htmlDiemThuong(k) {
    if (!window.DiemThuong || !S.src) return '';
    return '<div class="lmi-nt lmi-dt"><h3>🏅 Điểm thưởng lớp</h3>' +
      '<p class="lmi-nt-phu">+1 / +2 / +3 ⭐ vì Phát biểu, Làm bài tốt, Giúp bạn, Tiến bộ.' + (S.src.indexOf('sv:') === 0 ? ' Mỗi điểm = ' + window.DiemThuong.XU + ' xu nông trại (bạn đã chọn tên trong lớp).' : ' Danh sách nhanh: chỉ lưu trên máy này.') + '</p>' +
      '<div class="lmi-nt-nut">' + (k ? '<button type="button" class="lmi-nut lmi-nut-vang" data-dthuong="' + esc(k.id) + '">🏅 Thưởng ' + esc(k.name) + '</button>' : '') +
      '<button type="button" class="lmi-nut" data-dthuong="*">🏅 Thưởng cả lớp</button></div></div>';
  }
  // "Bao Han - 10C08" -> ten dam + ma lop nho (danh sach ghep nhieu lop)
  function tenHtml(t) {
    var m = String(t || '').match(/^(.*?)\s+[-–—]\s+(\S.*)$/);
    return m ? '<b>' + esc(m[1]) + '</b><em>' + esc(m[2]) + '</em>' : '<b>' + esc(t) + '</b>';
  }
  function tabs() {
    return '<div class="lmi-tabs" role="tablist"><button type="button" role="tab" data-xem="cham" class="' + (S.xem === 'cham' ? 'on' : '') + '">✍️ Chấm điểm</button>' +
      '<button type="button" role="tab" data-xem="bang" class="' + (S.xem === 'bang' ? 'on' : '') + '">📊 Bảng điểm lớp</button></div>';
  }

  /* ---------------- bang diem lop ---------------- */
  function lanCua(k) {
    var l = (k.lan || []).filter(function (x) { return typeof x.score === 'number'; });
    if (S.bKy === 'all') return l;
    var d = new Date(), tu = S.bKy === 'thang' ? new Date(d.getFullYear(), d.getMonth(), 1).getTime() : Date.now() - 7 * 86400000;
    return l.filter(function (x) { return x.ms >= tu; });
  }
  // ten lop sach (bo bieu tuong, si so, ghi chu "tren may") cho tieu de va ten file
  function tenLop() { return (($('#lmiNguon').selectedOptions[0] || {}).textContent || 'lop').replace(/^\S+\s/, '').replace(/\s*\(\d+\).*$/, '').trim(); }
  function tbCua(l) { return l.length ? Math.round(l.reduce(function (s, x) { return s + x.score; }, 0) / l.length * 10) / 10 : null; }
  function loai(tb) { return tb == null ? 'chua' : tb >= 8 ? 'gioi' : tb >= 6.5 ? 'kha' : tb >= 5 ? 'tb' : 'yeu'; }
  var TEN_LOAI = { gioi: 'Giỏi (≥ 8)', kha: 'Khá (6,5–7,9)', tb: 'Trung bình (5–6,4)', yeu: 'Yếu (< 5)', chua: 'Chưa kiểm tra' };
  function so(x) { return x == null ? '—' : String(x).replace('.', ','); }
  function ngay(ms) { if (!ms) return ''; var d = new Date(ms); return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2); }
  function hangBang() {
    var tv = (window.DiemDanh && window.DiemDanh.tong(S.src)) || {}, dt = (window.DiemThuong && window.DiemThuong.thang(S.src)) || {};
    return S.kids.map(function (k, i) {
      var l = lanCua(k), v = tv[k.id] || { vcp: 0, vkp: 0, muon: 0 };
      return { k: k, i: i, l: l, tb: tbCua(l), loai: loai(tbCua(l)), cuoi: l.length ? l[l.length - 1].ms : 0,
        vang: (v.vcp || 0) + (v.vkp || 0), vcp: v.vcp || 0, vkp: v.vkp || 0, muon: v.muon || 0, thuong: dt[k.id] || 0 };
    });
  }
  function veBang() {
    var el = $('#lmiPhai');
    if (!S.src || !S.kids.length) { el.innerHTML = tabs() + '<div class="lmi-cho"><span class="lmi-cho-ic" aria-hidden="true">📊</span><h2>Chọn lớp để xem bảng điểm</h2><p>' + esc(S.loi || 'Chọn danh sách lớp ở cột bên trái.') + '</p></div>'; return; }
    var rows = hangBang(), n = rows.length;
    var co = rows.filter(function (r) { return r.l.length; });
    var tbLop = co.length ? Math.round(co.reduce(function (s, r) { return s + r.tb; }, 0) / co.length * 10) / 10 : null;
    var dem = { gioi: 0, kha: 0, tb: 0, yeu: 0, chua: 0 };
    rows.forEach(function (r) { dem[r.loai]++; });
    var tongLan = rows.reduce(function (s, r) { return s + r.l.length; }, 0);
    var pt = n ? Math.round(co.length / n * 100) : 0;
    var vangHn = rows.filter(function (r) { return !coMat(r.k.id); }).length;
    var loc = rows.filter(function (r) {
      return S.bLoc === 'tat' || (S.bLoc === 'chua' ? !r.l.length : S.bLoc === r.loai);
    });
    var sx = {
      no: function (a, b) { return a.i - b.i; },
      ten: function (a, b) { return a.k.name.localeCompare(b.k.name, 'vi'); },
      cao: function (a, b) { return (b.tb == null ? -1 : b.tb) - (a.tb == null ? -1 : a.tb); },
      thap: function (a, b) { return (a.tb == null ? 99 : a.tb) - (b.tb == null ? 99 : b.tb); },
      it: function (a, b) { return a.l.length - b.l.length || a.cuoi - b.cuoi; }
    }[S.bSx];
    loc.sort(sx);
    var thanh = ['gioi', 'kha', 'tb', 'yeu', 'chua'].map(function (t) {
      return dem[t] ? '<span class="lmi-pb-' + t + '" style="flex:' + dem[t] + '" title="' + TEN_LOAI[t] + ': ' + dem[t] + '">' + dem[t] + '</span>' : '';
    }).join('');
    var chip = function (v, t, c) { return '<button type="button" data-bloc="' + v + '" class="lmi-bchip' + (S.bLoc === v ? ' on' : '') + '">' + t + (c != null ? ' <i>' + c + '</i>' : '') + '</button>'; };
    el.innerHTML = tabs() +
      '<div class="lmi-bang">' +
      '<div class="lmi-btop"><h2>Bảng điểm miệng · <span>' + esc(tenLop()) + '</span></h2>' +
        '<label class="lmi-bky">Thời gian <select id="lmiKy"><option value="all">Từ trước đến nay</option><option value="thang">Tháng này</option><option value="tuan">7 ngày qua</option></select></label>' +
        '<button type="button" class="lmi-nut-nho" data-act="csv">⬇ Tải file Excel</button></div>' +
      '<div class="lmi-tk">' +
        '<div class="lmi-o"><small>Sĩ số</small><b>' + n + '</b><span>bạn</span></div>' +
        '<div class="lmi-o lmi-o-vang" data-act="diemdanh" title="Vắng hôm nay: ' + vangHn + ' — bấm để mở điểm danh"><small>Vắng hôm nay</small><b>' + vangHn + '</b><span>📋 bấm để điểm danh</span></div>' +
        '<div class="lmi-o"><small>Đã kiểm tra</small><b>' + co.length + '<i>/' + n + '</i></b><span class="lmi-tien"><span style="width:' + pt + '%"></span></span></div>' +
        '<div class="lmi-o lmi-o-chua" data-bloc="chua"><small>Chưa kiểm tra</small><b>' + dem.chua + '</b><span>bấm để lọc</span></div>' +
        '<div class="lmi-o"><small>Điểm TB lớp</small><b class="lmi-tb-' + loai(tbLop) + '">' + so(tbLop) + '</b><span>' + tongLan + ' lượt chấm</span></div>' +
      '</div>' +
      '<div class="lmi-pb" aria-label="Phân bố xếp loại">' + (thanh || '<span class="lmi-pb-chua" style="flex:1">Chưa có điểm</span>') + '</div>' +
      '<div class="lmi-pb-chu">' + ['gioi', 'kha', 'tb', 'yeu'].map(function (t) { return '<span><i class="lmi-pb-' + t + '"></i>' + TEN_LOAI[t] + ': <b>' + dem[t] + '</b></span>'; }).join('') + '</div>' +
      '<div class="lmi-bloc">' + chip('tat', 'Tất cả', n) + chip('chua', 'Chưa kiểm tra', dem.chua) + chip('yeu', 'Dưới 5', dem.yeu) + chip('gioi', 'Từ 8 trở lên', dem.gioi) +
        '<span class="lmi-gian"></span><label class="lmi-bky">Sắp xếp <select id="lmiSx"><option value="no">Theo số thứ tự</option><option value="ten">Theo tên</option><option value="cao">Điểm TB cao → thấp</option><option value="thap">Điểm TB thấp → cao</option><option value="it">Ít được gọi nhất</option></select></label></div>' +
      '<div class="lmi-bwrap"><table class="lmi-bt"><thead><tr><th>#</th><th>Họ tên</th><th>Số lần</th><th>Các lần chấm</th><th>TB</th><th>Gần nhất</th><th title="Số buổi vắng (có phép + không phép), từ trước đến nay">Vắng</th><th title="Điểm thưởng lớp tháng này">Điểm thưởng</th><th></th></tr></thead><tbody>' +
      (loc.length ? loc.map(function (r) {
        return '<tr><td class="lmi-bt-so">' + (r.k.no || r.i + 1) + '</td><td class="lmi-bt-ten">' + tenHtml(r.k.name) + '</td><td>' + r.l.length + '</td>' +
          '<td><span class="lmi-lan">' + (r.l.length ? r.l.map(function (x) { return '<i class="lmi-tb-' + loai(x.score) + '" title="' + ngay(x.ms) + '">' + x.score + '</i>'; }).join('') : '<small>—</small>') + '</span></td>' +
          '<td><b class="lmi-tbo lmi-tb-' + r.loai + '">' + so(r.tb) + '</b></td><td><small>' + (ngay(r.cuoi) || '—') + '</small></td>' +
          '<td title="Có phép ' + r.vcp + ' · Không phép ' + r.vkp + ' · Đi muộn ' + r.muon + '">' + (r.vang ? '<b>' + r.vang + '</b>' : '<small>0</small>') + (coMat(r.k.id) ? '' : ' <small class="lmi-vang-tag">hôm nay</small>') + '</td>' +
          '<td>' + (r.thuong ? '⭐ <b>' + r.thuong + '</b>' : '<small>—</small>') + '</td>' +
          '<td><button type="button" class="lmi-nut-nho" data-chamhs="' + esc(r.k.id) + '">✍️ Chấm</button></td></tr>';
      }).join('') : '<tr><td colspan="9" class="lmi-trong">Không có bạn nào trong mục này.</td></tr>') +
      '</tbody></table></div>' +
      '<p class="lmi-meo">Xếp loại theo điểm trung bình các lần chấm: Giỏi ≥ 8 · Khá 6,5–7,9 · Trung bình 5–6,4 · Yếu &lt; 5.' + (S.src.indexOf('ls:') === 0 ? ' Danh sách nhanh trên máy không lưu ngày từng lần chấm, nên lọc theo thời gian chỉ tính lần gần nhất.' : '') + '</p>' +
      '</div>';
    $('#lmiKy').value = S.bKy;
    $('#lmiSx').value = S.bSx;
    $('#lmiKy').addEventListener('change', function () { S.bKy = this.value; veBang(); });
    $('#lmiSx').addEventListener('change', function () { S.bSx = this.value; veBang(); });
  }
  function taiCsv() {
    var rows = hangBang(), ten = tenLop();
    var q = function (s) { s = String(s == null ? '' : s); return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
    var max = rows.reduce(function (m, r) { return Math.max(m, r.l.length); }, 0);
    var dau = ['STT', 'Họ tên', 'Số lần'];
    for (var i = 1; i <= max; i++) dau.push('Lần ' + i);
    dau.push('Điểm TB', 'Xếp loại', 'Số buổi vắng', 'Điểm thưởng tháng này');
    var dong = [dau.map(q).join(',')].concat(rows.map(function (r) {
      var c = [r.k.no || r.i + 1, r.k.name, r.l.length];
      for (var j = 0; j < max; j++) c.push(r.l[j] ? r.l[j].score : '');
      c.push(r.tb == null ? '' : r.tb, r.tb == null ? 'Chưa kiểm tra' : TEN_LOAI[r.loai].replace(/\s*\(.*$/, ''), r.vang, r.thuong);
      return c.map(q).join(',');
    }));
    var blob = new Blob(['\ufeff' + dong.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    var a = document.createElement('a'), d = new Date();
    a.href = URL.createObjectURL(blob);
    a.download = 'diem-mieng-' + ten.trim().replace(/[\\/:*?"<>|]+/g, '').replace(/\s+/g, '-') + '-' + d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + '.csv';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  }

  /* ---------------- cham diem ---------------- */
  function vePhai() {
    if (S.xem === 'bang') { veBang(); return; }
    var el = $('#lmiPhai'), k = S.chon;
    var hn = S.homNay.filter(function (x) { return x.src === S.src; });
    var nk = '<div class="lmi-nk"><h3>Hôm nay đã chấm · ' + hn.length + ' lượt</h3>' + (hn.length ? '<ol>' + hn.slice().reverse().map(function (x) {
      return '<li><b>' + esc(x.ten) + '</b><span class="lmi-nk-diem">' + x.diem + '</span><small>' + esc(x.nd || '') + ' · ' + x.gio + '</small>' +
        '<button type="button" class="lmi-nut-nho" data-huy="' + x.key + '">↶ Hoàn tác</button></li>';
    }).join('') + '</ol>' : '<p class="lmi-trong">Chưa chấm bạn nào.</p>') + '</div>' + htmlDiemThuong(k) + htmlThuongNt(k);
    if (!k) {
      el.innerHTML = tabs() + '<div class="lmi-cho"><span class="lmi-cho-ic" aria-hidden="true">✍️</span><h2>Bấm tên bạn vừa lên bảng</h2>' +
        '<p>Hoặc bấm <b>🎲 Gọi ngẫu nhiên</b> — máy ưu tiên bạn lâu chưa được gọi.</p></div>' + nk;
      return;
    }
    var diem = '';
    for (var d = 0; d <= 10; d++) diem += '<button type="button" class="lmi-d d' + d + '" data-diem="' + d + '">' + d + '</button>';
    el.innerHTML = tabs() + '<div class="lmi-cham">' +
      '<p class="lmi-cham-lb">Đang chấm</p><h2 class="lmi-ten">' + esc(k.name) + '</h2>' +
      '<p class="lmi-cham-phu">' + (k.times ? 'Đã kiểm tra ' + k.times + ' lần' + (k.lastScore != null ? ' · lần gần nhất ' + k.lastScore + ' điểm' : '') + (k.avg != null ? ' · TB ' + k.avg : '') : 'Lần đầu được kiểm tra') + '</p>' +
      '<div class="lmi-nd" role="group" aria-label="Nội dung kiểm tra">' + NOI_DUNG.map(function (n) {
        return '<button type="button" data-nd="' + esc(n) + '" class="' + (S.noiDung === n ? 'on' : '') + '">' + esc(n) + '</button>';
      }).join('') + '</div>' +
      '<div class="lmi-diem">' + diem + '</div>' +
      '<p class="lmi-meo">' + (S.src.indexOf('sv:') === 0 ? 'Điểm lên cột “Miệng” của bảng lớp (điểm Miệng = trung bình các lần).' : 'Danh sách nhanh: điểm chỉ lưu trên máy này.') + '</p>' +
      '</div>' + nk;
  }
  // O "Thuong nong trai": chon qua -> thuong ban dang chon hoac ca lop (chi lop tren he thong)
  function htmlThuongNt(k) {
    if (S.src.indexOf('sv:') !== 0) return '';
    return '<div class="lmi-nt"><h3>🎁 Thưởng nông trại</h3>' +
      '<p class="lmi-nt-phu">Quà chờ sẵn — em mở Nông trại là nhận. Điểm 9–10 tự gửi quà (10: vật nuôi quý, 9: hạt giống quý) nếu bạn đã chọn tên trong lớp.</p>' +
      '<div class="lmi-nt-qua" role="group" aria-label="Loại quà">' + QUA_NT.map(function (q) {
        return '<button type="button" data-qua="' + q[0] + '" class="' + (quaChon === q[0] ? 'on' : '') + '">' + q[1] + '</button>';
      }).join('') + '</div>' +
      (quaChon === 'sp' ? htmlHoanSp(k) : '<div class="lmi-nt-nut">' +
      (k ? '<button type="button" class="lmi-nut lmi-nut-vang" data-thuong="' + esc(k.id) + '">🎁 Thưởng ' + esc(k.name) + '</button>' : '') +
      '<button type="button" class="lmi-nut" data-thuong="*">🎁 Thưởng cả lớp</button></div>') + '</div>';
  }
  function htmlHoanSp(k) {
    if (!SP_DS) {
      api('/api/admin/farm-sp').then(function (d) { SP_DS = d.ds || []; if (!spK && SP_DS.length) spK = SP_DS[0].k; vePhai(); }, function (e) { bao('⚠️ ' + esc(e.message)); });
      return '<p class="lmi-nt-phu">Đang tải danh sách sản vật…</p>';
    }
    if (!k) return '<p class="lmi-nt-phu">Bấm tên bạn bị mất hàng ở danh sách bên trái để hoàn lại (chỉ hoàn cho từng bạn).</p>';
    return '<div class="lmi-nt-sp"><label>Món <select id="lmiSpK">' + SP_DS.map(function (x) {
        return '<option value="' + esc(x.k) + '"' + (x.k === spK ? ' selected' : '') + '>' + esc(x.vn) + ' ' + esc(x.zh) + '</option>';
      }).join('') + '</select></label>' +
      '<label>Số lượng <input type="number" id="lmiSpN" min="1" max="20" value="' + spN + '"></label></div>' +
      '<div class="lmi-nt-nut"><button type="button" class="lmi-nut lmi-nut-vang" data-thuong="' + esc(k.id) + '">📦 Hoàn lại cho ' + esc(k.name) + '</button></div>';
  }
  function thuongNt(rid, nut) {
    var ten = rid === '*' ? 'cả lớp' : ((S.kids.filter(function (x) { return x.id === rid; })[0] || {}).name || '');
    var tenQua = (QUA_NT.filter(function (q) { return q[0] === quaChon; })[0] || ['', ''])[1];
    if (rid === '*' && !confirm('Thưởng ' + tenQua + ' cho cả lớp?')) return;
    var than = { classId: S.src.slice(3), rosterId: rid, loai: quaChon, ly: 'Cô thưởng cho em' + (S.noiDung ? ' (' + S.noiDung.toLowerCase() + ')' : '') };
    if (quaChon === 'sp') {
      var selK = $('#lmiSpK'), selN = $('#lmiSpN');
      spK = selK ? selK.value : spK; spN = Math.max(1, Math.min(20, Math.round(Number(selN ? selN.value : spN)) || 1));
      var mon = (SP_DS || []).filter(function (x) { return x.k === spK; })[0];
      if (!mon) { bao('⚠️ Chọn món cần hoàn lại.'); return; }
      than.k = spK; than.n = spN; than.ly = 'Cô hoàn lại ' + spN + ' ' + mon.vn.toLowerCase() + ' cho em';
      tenQua = spN + ' ' + mon.vn.toLowerCase();
    }
    nut.disabled = true;
    api('/api/admin/farm-thuong', { method: 'POST', body: JSON.stringify(than) }).then(function (d) {
      nut.disabled = false;
      var el = $('#lmiBao');
      el.innerHTML = '🎁 Đã gửi ' + esc(tenQua) + ' cho <b>' + esc(ten) + '</b> (' + d.so + ' bạn có tài khoản' + (d.khongTk ? ', ' + d.khongTk + ' bạn chưa chọn tên trong lớp' : '') + ') <button type="button" class="lmi-nut-nho" data-huynt="' + esc(d.lan) + '">↶ Hoàn tác</button>';
      el.hidden = false;
      clearTimeout(henBao);
      henBao = setTimeout(function () { el.hidden = true; }, 8000);
    }).catch(function (e) { nut.disabled = false; bao('⚠️ ' + esc(e.message)); });
  }
  function bam(e) {
    var dt = e.target.closest('[data-dthuong]');
    if (dt && window.DiemThuong) {
      window.DiemThuong.mo({ src: S.src, rosterId: dt.getAttribute('data-dthuong'), onXong: function () { if (S.xem === 'bang') veBang(); } });
      return;
    }
    var q = e.target.closest('[data-qua], [data-thuong], [data-huynt]');
    if (q && q.hasAttribute('data-qua')) { quaChon = q.getAttribute('data-qua'); vePhai(); return; }
    if (q && q.hasAttribute('data-thuong')) { thuongNt(q.getAttribute('data-thuong'), q); return; }
    if (q && q.hasAttribute('data-huynt')) {
      q.disabled = true;
      api('/api/admin/farm-thuong/' + encodeURIComponent(q.getAttribute('data-huynt')), { method: 'DELETE' })
        .then(function (d) { bao('↶ Đã rút lại quà nông trại (' + d.rut + ' quà chưa nhận).'); }, function (er) { q.disabled = false; bao('⚠️ ' + esc(er.message)); });
      return;
    }
    var b = e.target.closest('[data-act], [data-hs], [data-diem], [data-nd], [data-huy], [data-xem], [data-bloc], [data-chamhs]');
    if (!b) return;
    if (b.hasAttribute('data-xem')) { S.xem = b.getAttribute('data-xem'); vePhai(); return; }
    if (b.hasAttribute('data-bloc')) { S.bLoc = b.getAttribute('data-bloc'); veBang(); return; }
    if (b.hasAttribute('data-hs') || b.hasAttribute('data-chamhs')) { var id = b.getAttribute('data-hs') || b.getAttribute('data-chamhs'); S.chon = S.kids.filter(function (k) { return k.id === id; })[0] || null; S.xem = 'cham'; veDs(); vePhai(); return; }
    if (b.hasAttribute('data-nd')) { var n = b.getAttribute('data-nd'); S.noiDung = S.noiDung === n ? '' : n; vePhai(); return; }
    if (b.hasAttribute('data-diem')) { cham(+b.getAttribute('data-diem'), b); return; }
    if (b.hasAttribute('data-huy')) { hoanTac(b.getAttribute('data-huy'), b); return; }
    var a = b.getAttribute('data-act');
    if (a === 'dong') dong();
    else if (a === 'diemdanh' && window.DiemDanh) window.DiemDanh.mo({ src: S.src, onDong: function (src) { if (src && src !== S.src && coNguon(src)) chonNguon(src); else { veDs(); vePhai(); } } });
    else if (a === 'ngaunhien') { S.xem = 'cham'; goiNgauNhien(); }
    else if (a === 'csv') taiCsv();
  }
  // uu tien: chua cham hom nay > lau chua goi > it lan, them chut ngau nhien
  function goiNgauNhien() {
    if (!S.kids.length) return;
    var now = Date.now(), best = null, bw = -Infinity;
    // ban vang hom nay (diem danh) khong bi goi; di muon van goi
    var coMatDs = S.kids.filter(function (k) { return coMat(k.id); });
    if (!coMatDs.length) { bao('Hôm nay cả lớp đều vắng — mở 📋 Điểm danh để sửa.'); return; }
    coMatDs.forEach(function (k) {
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
      k.lan = (k.lan || []).concat({ id: sid || '', ms: Date.now(), score: diem });
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
      if (k && k.lan) { var vt = -1; k.lan.forEach(function (l, i) { if ((x.sid && l.id === x.sid) || (!x.sid && l.score === x.diem)) vt = i; }); if (vt >= 0) k.lan.splice(vt, 1); }
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
