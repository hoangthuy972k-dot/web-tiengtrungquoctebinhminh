/* Trang Bao cao — tab "🎯 Học vs Chơi": moi tuan (gio VN, tuan bat dau thu Hai) hoc sinh HOC BAI nhieu hay
   CHOI NONG TRAI nhieu — de co giao quyet dinh nen dau tu tinh nang hoc hay tinh nang game.
   Du lieu: GET /api/admin/hoc-choi (xem hoc-choi.js) — 8 tuan, tong ca lop + tung lop + tung em (tuan nay / tuan truoc).
   Ten hoc sinh chi hien o trang quan tri. */
(function () {
  'use strict';
  var PW_KEY = 'hyv_admin_pw';
  var LOP_KEY = 'hyv_hvc_lop';
  var S = { d: null, dang: false, loi: '', lop: '', tuan: 'nay', canChuY: false, sx: { k: 'co', dir: -1 } };
  try { S.lop = localStorage.getItem(LOP_KEY) || ''; } catch (e) { /* bo qua */ }

  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function hop() { return $('#trHocChoi'); }
  function dangMo() { var h = hop(); return h && !h.hidden; }
  function so(n) { return n == null ? '—' : Number(n).toLocaleString('vi-VN'); }

  function tai(moi) {
    if (!pw()) return Promise.resolve();
    S.dang = true; S.loi = '';
    if (dangMo()) ve();
    return fetch('/api/admin/hoc-choi' + (moi ? '?moi=1' : ''), { headers: { 'X-Admin-Password': pw() } })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (r.status === 401) throw new Error('Sai mật khẩu quản trị — đăng nhập lại nhé.');
          if (!r.ok) throw new Error(j.error || 'Lỗi máy chủ.');
          return j;
        });
      })
      .then(function (d) { S.d = d; if (S.lop && !nhom()) S.lop = ''; })
      .catch(function (e) { S.loi = e.message || 'Không kết nối được máy chủ.'; })
      .then(function () { S.dang = false; ve(); });
  }

  /* ---------------- so lieu ---------------- */
  // Nhom dang xem: tat ca hoac 1 lop ('' = tat ca, '-' = chua vao lop)
  function nhom() {
    var d = S.d;
    if (!d) return null;
    if (!S.lop) return { ten: 'Tất cả học sinh', tuan: d.tatCa };
    var id = S.lop === '-' ? '' : S.lop;
    var l = d.lops.filter(function (x) { return x.id === id; })[0];
    return l ? { ten: l.ten, tuan: l.tuan } : null;
  }
  // Tuan nay co so lieu nong trai chua (bo dem bat dau tu ngay demTu)
  function coNT(t) {
    var dt = S.d && S.d.demTu;
    if (!dt) return 'khong';
    var het = ngayCong(t, 6);
    if (het < dt) return 'khong';
    return t < dt ? 'mot-phan' : 'du';
  }
  function ngayCong(k, n) { var d = new Date(k + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
  function dmy(k) { return k ? k.slice(8, 10) + '/' + k.slice(5, 7) : ''; }
  function tiLe(hoc, choi) {
    if (!choi) return hoc ? 'chỉ học' : '—';
    var r = hoc / choi;
    return (r >= 10 ? Math.round(r) : r.toFixed(1).replace('.', ',')) + ' : 1';
  }
  // Em choi nong trai nhung gan nhu khong hoc (tuan dang xem)
  function canChuY(x) {
    return x.ngayChoi >= 1 && (x.thaoTac + x.cauNT) >= 10 && x.ngayHoc <= 1 && x.phan <= 1 && x.cauDung < 10;
  }
  function danhGia(x) {
    if (canChuY(x)) return { k: 3, html: '<span class="tr-chip is-stale">⚠ Chơi nhiều, học ít</span>' };
    if (x.ngayChoi > x.ngayHoc) return { k: 2, html: '<span class="tr-chip hc-chip-choi">🌾 Chơi &gt; học</span>' };
    if (x.ngayHoc && !x.ngayChoi) return { k: 0, html: '<span class="tr-chip hc-chip-hoc">📚 Chỉ học</span>' };
    if (x.ngayHoc) return { k: 1, html: '<span class="tr-chip is-fresh">📚 Học ≥ chơi</span>' };
    return { k: -1, html: '<span class="tr-muted">—</span>' };
  }

  /* ---------------- ve ---------------- */
  function theTom(g, truoc, ntCo) {
    var chu = function (a, b) {
      if (b == null) return '';
      var dd = a - b;
      return dd ? (dd > 0 ? '▲ ' : '▼ ') + Math.abs(dd) + ' so với tuần trước' : '= tuần trước';
    };
    var cards = [
      { label: '📚 Em có học', value: so(g.nguoiHoc), sub: chu(g.nguoiHoc, truoc && truoc.nguoiHoc) },
      { label: '🌾 Em chơi nông trại', value: ntCo === 'khong' ? '—' : so(g.nguoiChoi), sub: ntCo === 'khong' ? 'chưa có số liệu' : chu(g.nguoiChoi, truoc && coNT(truoc.tuan) !== 'khong' ? truoc.nguoiChoi : null) },
      { label: '⚠ Chỉ chơi, không học', value: ntCo === 'khong' ? '—' : so(g.chiChoi), sub: 'có vào nông trại nhưng 0 ngày học', warn: g.chiChoi > 0 },
      { label: '⚖️ Ngày học : ngày chơi', value: ntCo === 'khong' ? '—' : tiLe(g.ngayHoc, g.ngayChoi), sub: so(g.ngayHoc) + ' ngày học · ' + (ntCo === 'khong' ? '?' : so(g.ngayChoi)) + ' ngày chơi' },
      { label: '✅ Câu đúng khi học', value: so(g.cauDung + g.cauThi), sub: 'nông trại: ' + (ntCo === 'khong' ? '—' : so(g.cauNT) + ' câu hỏi') }
    ];
    return '<section class="admin-cards hc-cards">' + cards.map(function (c) {
      return '<div class="admin-card' + (c.warn ? ' is-warn' : '') + '"><div class="admin-card-label">' + c.label + '</div>' +
        '<div class="admin-card-value is-sm">' + c.value + '</div>' + (c.sub ? '<div class="admin-card-sub">' + esc(c.sub) + '</div>' : '') + '</div>';
    }).join('') + '</section>';
  }

  function nhanXet(g, ntCo) {
    if (ntCo === 'khong') return 'Tuần này chưa có số liệu nông trại (bộ đếm mới bắt đầu ghi từ khi cập nhật web).';
    if (!g.nguoiHoc && !g.nguoiChoi) return 'Tuần này chưa có em nào học hay chơi.';
    var s = 'Tuần này <b>' + g.nguoiHoc + '</b> em có học, <b>' + g.nguoiChoi + '</b> em chơi nông trại';
    s += g.chiChoi ? ', trong đó <b>' + g.chiChoi + '</b> em chỉ chơi mà không học ngày nào.' : '; không em nào chỉ chơi mà bỏ học. 👍';
    if (g.ngayChoi) {
      var r = g.ngayHoc / g.ngayChoi;
      s += ' Cứ 1 ngày chơi thì có ' + tiLe(g.ngayHoc, g.ngayChoi).replace(' : 1', '') + ' ngày học — ' +
        (r >= 1.2 ? 'học sinh <b>học nhiều hơn chơi</b>.' : r >= 0.8 ? 'học và chơi <b>gần ngang nhau</b>.' : 'học sinh <b>chơi nhiều hơn học</b>.');
    }
    return s;
  }

  function bieuDo(tuans) {
    var max = 1;
    tuans.forEach(function (g) { max = Math.max(max, g.ngayHoc, coNT(g.tuan) === 'khong' ? 0 : g.ngayChoi); });
    return '<div class="hc-chart" role="img" aria-label="Số ngày học và số ngày chơi nông trại của 8 tuần gần nhất">' +
      '<div class="hc-legend"><span><i class="hc-dot is-hoc"></i>Ngày học</span><span><i class="hc-dot is-choi"></i>Ngày chơi nông trại</span>' +
      '<span class="tr-muted">(cộng của mọi em: 1 em học 3 ngày = 3)</span></div>' +
      tuans.slice().reverse().map(function (g) {
        var nt = coNT(g.tuan);
        var wH = Math.round(100 * g.ngayHoc / max), wC = nt === 'khong' ? 0 : Math.round(100 * g.ngayChoi / max);
        return '<div class="hc-row' + (g.tuan === S.d.tuanNay ? ' is-now' : '') + '">' +
          '<div class="hc-wk">' + (g.tuan === S.d.tuanNay ? '<b>Tuần này</b>' : g.tuan === S.d.tuanTruoc ? 'Tuần trước' : '') + '<span>' + esc(g.nhan) + '</span></div>' +
          '<div class="hc-bars">' +
            '<div class="hc-bar"><span class="is-hoc' + (g.ngayHoc ? '' : ' is-0') + '" style="width:' + wH + '%"></span><em>' + so(g.ngayHoc) + '</em></div>' +
            '<div class="hc-bar">' + (nt === 'khong' ? '<em class="tr-muted">chưa đo</em>' : '<span class="is-choi' + (g.ngayChoi ? '' : ' is-0') + '" style="width:' + wC + '%"></span><em>' + so(g.ngayChoi) + (nt === 'mot-phan' ? '*' : '') + '</em>') + '</div>' +
          '</div>' +
          '<div class="hc-ratio">' + (nt === 'khong' ? '' : tiLe(g.ngayHoc, g.ngayChoi)) + '</div>' +
        '</div>';
      }).join('') + '</div>';
  }

  function bangTuan(tuans) {
    var o = function (g, v) { return coNT(g.tuan) === 'khong' ? '<td class="tr-muted">—</td>' : '<td>' + so(v) + (coNT(g.tuan) === 'mot-phan' ? '*' : '') + '</td>'; };
    return '<div class="admin-table-wrap"><table class="admin-table hc-table"><thead><tr>' +
      '<th>Tuần</th><th class="hc-h-hoc">Em học</th><th class="hc-h-hoc">Ngày học</th><th class="hc-h-hoc">Phần bài</th><th class="hc-h-hoc">Câu đúng</th><th class="hc-h-hoc">Sao</th>' +
      '<th class="hc-h-choi">Em chơi</th><th class="hc-h-choi">Ngày chơi</th><th class="hc-h-choi">Câu hỏi NT</th><th class="hc-h-choi">Thao tác NT</th>' +
      '<th>Chỉ chơi</th><th>Học : Chơi</th></tr></thead><tbody>' +
      tuans.slice().reverse().map(function (g) {
        var nt = coNT(g.tuan) !== 'khong';
        return '<tr' + (g.tuan === S.d.tuanNay ? ' class="hc-now"' : '') + '><td class="admin-name">' + esc(g.nhan) + '</td>' +
          '<td>' + so(g.nguoiHoc) + '</td><td>' + so(g.ngayHoc) + '</td>' +
          '<td title="' + esc(so(g.phanMoi) + ' phần làm lần đầu') + '">' + so(g.phan) + '</td>' +
          '<td title="' + esc('bài học ' + so(g.cauDung) + ' · thi thử ' + so(g.cauThi)) + '">' + so(g.cauDung + g.cauThi) + '</td>' +
          '<td>' + (g.sao == null ? '<span class="tr-muted">—</span>' : '⭐ ' + so(g.sao)) + '</td>' +
          o(g, g.nguoiChoi) + o(g, g.ngayChoi) + o(g, g.cauNT) + o(g, g.thaoTac) + o(g, g.chiChoi) +
          '<td><b>' + (nt ? tiLe(g.ngayHoc, g.ngayChoi) : '—') + '</b></td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  function bangLop() {
    var d = S.d;
    if (S.lop || !d.lops.length) return '';
    var i = d.tuans.length - 1;
    var nt = coNT(d.tuanNay) !== 'khong';
    return '<section class="admin-section"><div class="admin-section-title">🏫 So sánh các lớp — tuần này</div>' +
      '<div class="admin-table-wrap"><table class="admin-table hc-table"><thead><tr><th>Lớp</th>' +
      '<th class="hc-h-hoc">Em học</th><th class="hc-h-hoc">Ngày học</th><th class="hc-h-hoc">Câu đúng</th>' +
      '<th class="hc-h-choi">Em chơi</th><th class="hc-h-choi">Ngày chơi</th><th class="hc-h-choi">Câu hỏi NT</th><th>Chỉ chơi</th><th>Học : Chơi</th></tr></thead><tbody>' +
      d.lops.map(function (l) {
        var g = l.tuan[i];
        return '<tr class="tr-row" tabindex="0" data-hc-lop="' + esc(l.id === '' ? '-' : l.id) + '"><td class="admin-name">' + esc(l.ten) + '</td>' +
          '<td>' + so(g.nguoiHoc) + '</td><td>' + so(g.ngayHoc) + '</td><td>' + so(g.cauDung + g.cauThi) + '</td>' +
          '<td>' + (nt ? so(g.nguoiChoi) : '—') + '</td><td>' + (nt ? so(g.ngayChoi) : '—') + '</td><td>' + (nt ? so(g.cauNT) : '—') + '</td>' +
          '<td>' + (nt ? (g.chiChoi ? '<span class="tr-chip is-stale">' + g.chiChoi + '</span>' : '0') : '—') + '</td>' +
          '<td><b>' + (nt ? tiLe(g.ngayHoc, g.ngayChoi) : '—') + '</b></td></tr>';
      }).join('') + '</tbody></table></div><p class="tr-hint">Bấm vào một lớp để xem riêng lớp đó.</p></section>';
  }

  var COT = [
    { k: 'ten', t: 'Học sinh' },
    { k: 'ngayHoc', t: 'Ngày học', c: 'hc-h-hoc' },
    { k: 'phan', t: 'Phần bài', c: 'hc-h-hoc' },
    { k: 'cauDung', t: 'Câu đúng', c: 'hc-h-hoc' },
    { k: 'sao', t: 'Sao', c: 'hc-h-hoc' },
    { k: 'ngayChoi', t: 'Ngày chơi', c: 'hc-h-choi' },
    { k: 'cauNT', t: 'Câu hỏi NT', c: 'hc-h-choi' },
    { k: 'thaoTac', t: 'Thao tác NT', c: 'hc-h-choi' },
    { k: 'ntLuc', t: 'Vào NT gần nhất', c: 'hc-h-choi' },
    { k: 'co', t: 'Nhận xét' }
  ];
  function dsHocSinh() {
    var d = S.d;
    var id = S.lop === '-' ? '' : S.lop;
    var list = d.hocSinh.filter(function (h) { return !S.lop || h.lop === id; }).map(function (h) {
      var x = h[S.tuan];
      return { h: h, x: x, dg: danhGia(x) };
    }).filter(function (r) {
      var x = r.x;
      if (!(x.ngayHoc || x.phan || x.cauDung || x.sao || x.ngayChoi || x.cauNT || x.thaoTac)) return false;
      return !S.canChuY || r.dg.k === 3;
    });
    var k = S.sx.k, dir = S.sx.dir;
    list.sort(function (a, b) {
      var va, vb;
      if (k === 'ten') return dir * a.h.ten.localeCompare(b.h.ten, 'vi');
      if (k === 'co') { va = a.dg.k; vb = b.dg.k; }
      else if (k === 'ntLuc') { va = ntMs(a.h); vb = ntMs(b.h); }
      else { va = a.x[k] || 0; vb = b.x[k] || 0; }
      return dir * (va - vb) || (b.x.ngayChoi - a.x.ngayChoi) || a.h.ten.localeCompare(b.h.ten, 'vi');
    });
    return list;
  }
  function ntMs(h) { return h.ntLuc || (h.ntNgay ? Date.parse(h.ntNgay + 'T12:00:00+07:00') : 0); }
  function luc(ms) {
    if (!ms) return '<span class="tr-muted">—</span>';
    var p = Math.floor((Date.now() - ms) / 60000);
    if (p < 60) return p <= 1 ? 'vừa xong' : p + ' phút trước';
    if (p < 1440) return Math.floor(p / 60) + ' giờ trước';
    return Math.floor(p / 1440) + ' ngày trước';
  }
  function bangHocSinh() {
    var d = S.d;
    var list = dsHocSinh();
    var nt = coNT(S.tuan === 'nay' ? d.tuanNay : d.tuanTruoc) !== 'khong';
    var soCanChuY = d.hocSinh.filter(function (h) { return (!S.lop || h.lop === (S.lop === '-' ? '' : S.lop)) && canChuY(h[S.tuan]); }).length;
    var dau = '<div class="hc-tools">' +
      '<div class="cs-tuan" role="group" aria-label="Tuần">' + [['nay', 'Tuần này'], ['truoc', 'Tuần trước']].map(function (t) {
        return '<button type="button" class="gy-loc-nut' + (S.tuan === t[0] ? ' is-on' : '') + '" data-hc-tuan="' + t[0] + '" aria-pressed="' + (S.tuan === t[0]) + '">' + t[1] + '</button>';
      }).join('') + '</div>' +
      '<label class="nh-check"><input type="checkbox" data-hc-cy' + (S.canChuY ? ' checked' : '') + '> Chỉ em chơi nhiều, học ít (' + soCanChuY + ')</label>' +
      '</div>';
    var bang = list.length ? '<div class="admin-table-wrap"><table class="admin-table hc-table hc-hs"><thead><tr>' + COT.map(function (c) {
      var on = S.sx.k === c.k;
      return '<th class="' + (c.c || '') + '" aria-sort="' + (on ? (S.sx.dir > 0 ? 'ascending' : 'descending') : 'none') + '">' +
        '<button type="button" class="hc-sort" data-hc-sx="' + c.k + '">' + c.t + (on ? (S.sx.dir > 0 ? ' ▲' : ' ▼') : '') + '</button></th>';
    }).join('') + '</tr></thead><tbody>' + list.map(function (r) {
      var h = r.h, x = r.x;
      var dash = '<span class="tr-muted">—</span>';
      return '<tr' + (r.dg.k === 3 ? ' class="hc-warn"' : '') + '>' +
        '<td><button type="button" class="hc-ten" data-hc-mo="' + esc(h.id) + '">' + esc(h.ten) + '</button>' +
          (h.lopTen ? '<div class="tr-class-tag">🏫 ' + esc(h.lopTen) + '</div>' : '') + '</td>' +
        '<td>' + so(x.ngayHoc) + '</td><td>' + so(x.phan) + '</td><td>' + so(x.cauDung) + '</td><td>⭐ ' + so(x.sao) + '</td>' +
        '<td>' + (nt ? so(x.ngayChoi) : dash) + '</td><td>' + (nt ? so(x.cauNT) : dash) + '</td><td>' + (nt ? so(x.thaoTac) : dash) + '</td>' +
        '<td>' + (h.ntLuc ? luc(h.ntLuc) : h.ntNgay ? 'ngày ' + dmy(h.ntNgay) : h.coNT ? '<span class="tr-muted">—</span>' : '<span class="tr-muted">chưa mở</span>') + '</td>' +
        '<td>' + r.dg.html + '</td></tr>';
    }).join('') + '</tbody></table></div>'
      : '<p class="admin-empty">' + (S.canChuY ? '🎉 Không có em nào chơi nhiều mà học ít trong ' + (S.tuan === 'nay' ? 'tuần này' : 'tuần trước') + '.' : 'Chưa có em nào hoạt động trong ' + (S.tuan === 'nay' ? 'tuần này' : 'tuần trước') + '.') + '</p>';
    return '<section class="admin-section"><div class="admin-section-title">👩‍🎓 Từng học sinh</div>' + dau + bang +
      '<p class="tr-hint">“Chơi nhiều, học ít” = tuần đó em có vào nông trại, làm từ 10 thao tác / câu hỏi nông trại trở lên, nhưng học không quá 1 ngày, không quá 1 phần bài và dưới 10 câu đúng. Bấm tiêu đề cột để sắp xếp, bấm tên em để xem chi tiết.</p></section>';
  }

  function ve() {
    var h = hop();
    if (!h) return;
    var d = S.d;
    var dau = '<section class="admin-section"><div class="admin-section-title">🎯 Học vs Chơi</div>' +
      '<p class="tr-hint">Mỗi tuần (tính từ thứ Hai, giờ Việt Nam) học sinh <b>học bài</b> nhiều hơn hay <b>chơi nông trại</b> nhiều hơn — để thầy/cô cân nhắc nên đầu tư thêm cho phần học hay phần trò chơi. Chỉ tính học sinh có tài khoản và đã đăng nhập.</p>';
    if (!d) {
      h.innerHTML = dau + '<p class="admin-empty">' + (S.loi ? '⚠️ ' + esc(S.loi) : S.dang ? 'Đang tải…' : 'Đăng nhập trang quản trị để xem.') + '</p></section>';
      return;
    }
    var g = nhom();
    if (!g) { S.lop = ''; g = nhom(); }
    var tuans = g.tuan, n = tuans.length;
    var cur = tuans[n - 1], prev = tuans[n - 2];
    var ntCo = coNT(cur.tuan);
    var lopOpts = '<option value="">Tất cả học sinh</option>' + d.lops.map(function (l) {
      var v = l.id === '' ? '-' : l.id;
      return '<option value="' + esc(v) + '"' + (S.lop === v ? ' selected' : '') + '>' + esc(l.ten) + '</option>';
    }).join('');
    var cong = '<div class="hc-tools">' +
      '<label class="tr-field"><span class="sr-only">Chọn lớp</span><select data-hc-lopchon>' + lopOpts + '</select></label>' +
      '<button type="button" class="btn btn-outline" data-hc-moi>🔄 Làm mới</button>' +
      (S.dang ? '<span class="tr-muted">Đang tải…</span>' : '') + (S.loi ? '<span class="tr-chip is-stale">⚠ ' + esc(S.loi) + '</span>' : '') +
      '</div>';
    var chuThich = '<details class="hc-help"><summary>ⓘ Các con số lấy từ đâu?</summary><ul>' +
      '<li><b>Em học / Ngày học</b>: ngày em có học = ngày có trong lịch học của tài khoản, hoặc ngày em làm một phần bài, hoặc ngày em có câu đúng mới (bài học, thi thử). “Ngày học” cộng của mọi em.</li>' +
      '<li><b>Phần bài</b>: số phần bài (Từ vựng, Ngữ pháp, Kiểm tra cuối…) em làm lần đầu hoặc làm lại để đổi điểm trong tuần. Web chỉ giữ lần đầu và lần gần nhất nên làm lại nhiều lần chỉ tính 1.</li>' +
      '<li><b>Câu đúng</b>: câu trả lời đúng mới trong bài học + câu đúng ở lượt thi thử HSK đầu tiên (giống Bảng vàng).' + (d.diemNgayDu ? '' : ' <i>Máy thử (file JSON) chỉ giữ 14 ngày gần nhất.</i>') + '</li>' +
      '<li><b>Sao</b>: sao chỉ kiếm được khi học (nông trại không cho sao). Web chỉ lưu sao của tuần này và tuần trước.</li>' +
      '<li><b>Em chơi / Ngày chơi</b>: ngày em mở nông trại hoặc làm bất kỳ việc gì ở đó.</li>' +
      '<li><b>Câu hỏi NT</b>: câu hỏi tiếng Trung trả lời trong nông trại (cho vật nuôi ăn = 3 câu, tưới cây = 1 câu, thử thách chữ Hán, câu cá, phiêu lưu…). Đây cũng là một kiểu ôn tập nhẹ.</li>' +
      '<li><b>Thao tác NT</b>: gieo hạt, thu hoạch, bán hàng, trang trí, thăm bạn, nhắn tin… (mỗi lần bấm thành công = 1).</li>' +
      '<li><b>Học : Chơi</b>: tổng ngày học chia tổng ngày chơi. “2 : 1” = cứ 1 ngày chơi có 2 ngày học.</li>' +
      '<li>Số liệu nông trại do bộ đếm mới ghi, bắt đầu từ <b>' + (d.demTu ? dmy(d.demTu) + '/' + d.demTu.slice(0, 4) : 'khi web được cập nhật') + '</b> — các tuần trước đó hiện “chưa đo”; dấu * = tuần chỉ đo được một phần.</li>' +
      '<li>Web <b>không đo thời gian</b> em ở từng trang, nên không so sánh được số phút học với số phút chơi.</li>' +
      '</ul></details>';
    h.innerHTML = dau + cong +
      '<p class="hc-nhanxet">' + (S.lop ? '<b>' + esc(g.ten) + '</b> · ' : '') + nhanXet(cur, ntCo) + '</p>' +
      theTom(cur, prev, ntCo) + chuThich + '</section>' +
      '<section class="admin-section"><div class="admin-section-title">📈 8 tuần gần nhất' + (S.lop ? ' — ' + esc(g.ten) : '') + '</div>' + bieuDo(tuans) + bangTuan(tuans) + '</section>' +
      bangLop() + bangHocSinh() +
      '<p class="cs-chu-thich">Kết quả được giữ 5 phút — bấm Làm mới để đọc lại ngay. Chỉ trang quản trị xem được; học sinh không thấy tên hay số liệu của bạn khác.</p>';
  }

  /* ---------------- su kien ---------------- */
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t.closest || !t.closest('#trHocChoi')) return;
    if (t.hasAttribute('data-hc-lopchon')) {
      S.lop = t.value;
      try { localStorage.setItem(LOP_KEY, S.lop); } catch (er) { /* bo qua */ }
      ve();
    } else if (t.hasAttribute('data-hc-cy')) { S.canChuY = t.checked; ve(); }
  });
  function chonLop(v) {
    S.lop = v;
    try { localStorage.setItem(LOP_KEY, S.lop); } catch (er) { /* bo qua */ }
    ve();
    var h = hop();
    if (h) h.scrollIntoView({ block: 'start' });
  }
  document.addEventListener('click', function (e) {
    if (!e.target.closest || !e.target.closest('#trHocChoi')) return;
    var t = e.target.closest('button, tr[data-hc-lop]');
    if (!t) return;
    if (t.hasAttribute('data-hc-moi')) tai(true);
    else if (t.hasAttribute('data-hc-tuan')) { S.tuan = t.getAttribute('data-hc-tuan'); ve(); }
    else if (t.hasAttribute('data-hc-sx')) {
      var k = t.getAttribute('data-hc-sx');
      S.sx = S.sx.k === k ? { k: k, dir: -S.sx.dir } : { k: k, dir: k === 'ten' ? 1 : -1 };
      ve();
    } else if (t.hasAttribute('data-hc-mo')) { if (window.__tr) window.__tr.openStudent(t.getAttribute('data-hc-mo')); }
    else if (t.hasAttribute('data-hc-lop')) chonLop(t.getAttribute('data-hc-lop'));
  });
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (e.key === 'Enter' && t && t.closest && t.closest('#trHocChoi') && t.hasAttribute('data-hc-lop')) chonLop(t.getAttribute('data-hc-lop'));
  });
  // vua dang nhap xong ma tab nay dang mo -> tai
  var dash = $('#adminDash');
  if (dash && window.MutationObserver) {
    new MutationObserver(function () { if (!dash.hidden && dangMo() && !S.d && !S.dang) tai(); }).observe(dash, { attributes: true, attributeFilter: ['hidden'] });
  }

  window.__trHocChoi = { render: function () { ve(); if (!S.d || Date.now() - (S.d.taoLuc || 0) > 5 * 60 * 1000) tai(); } };
})();
