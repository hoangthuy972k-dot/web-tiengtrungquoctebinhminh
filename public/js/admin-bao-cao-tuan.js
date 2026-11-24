/* Trang Bao cao — tab "📋 Báo cáo tuần": bao cao tung hoc sinh cua 1 lop trong 1 tuan (gio VN, tu thu Hai),
   chu yeu de co giao gui phu huynh qua Zalo (nut "Sao chép tin nhắn gửi phụ huynh" — tin nhan chu tron, co emoji).
   Du lieu: GET /api/admin/bao-cao-tuan?lop=&tuan= (xem bao-cao-tuan.js). Ten hoc sinh chi den tu may chu luc chay.
   admin.js khong biet tab nay: theo doi class "active" cua nut tab data-tab="bct" de hien / an khung. */
(function () {
  'use strict';
  var PW_KEY = 'hyv_admin_pw';
  var LOP_KEY = 'hyv_bct_lop';
  var S = { d: null, dang: false, loi: '', lop: '', tuan: '', sx: { k: 'muc', dir: 1 }, mo: {}, moRa: {} };
  try { S.lop = localStorage.getItem(LOP_KEY) || ''; } catch (e) { /* bo qua */ }

  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pw() { try { return sessionStorage.getItem(PW_KEY) || ''; } catch (e) { return ''; } }
  function hop() { return $('#trBaoCaoTuan'); }
  function nutTab() { return $('.tr-tab[data-tab="bct"]'); }
  function dangMo() { var b = nutTab(); return !!(b && b.classList.contains('active')); }
  function so(n) { return n == null ? '—' : Number(n).toLocaleString('vi-VN'); }
  function dm(k) { return k ? Number(k.slice(8, 10)) + '/' + Number(k.slice(5, 7)) : ''; }
  var THU = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  function thu(k) { return THU[new Date(k + 'T00:00:00Z').getUTCDay()]; }
  function tenGoi(full) {
    var w = String(full || '').trim().split(/\s+/);
    var t = w[w.length - 1] || '';
    return t ? t.charAt(0).toLocaleUpperCase('vi') + t.slice(1) : 'em';
  }

  function tai(moi) {
    if (!pw()) return Promise.resolve();
    S.dang = true; S.loi = '';
    if (dangMo()) ve();
    var q = [];
    if (S.lop) q.push('lop=' + encodeURIComponent(S.lop));
    if (S.tuan) q.push('tuan=' + encodeURIComponent(S.tuan));
    if (moi) q.push('moi=1');
    return fetch('/api/admin/bao-cao-tuan' + (q.length ? '?' + q.join('&') : ''), { headers: { 'X-Admin-Password': pw() } })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (r.status === 401) throw new Error('Sai mật khẩu quản trị — đăng nhập lại nhé.');
          if (!r.ok) throw new Error(j.error || 'Lỗi máy chủ.');
          return j;
        });
      })
      .then(function (d) {
        S.d = d; S.mo = {}; S.moRa = {};
        S.lop = d.lop ? d.lop.id : '';
        S.tuan = d.tuan || '';
      })
      .catch(function (e) { S.loi = e.message || 'Không kết nối được máy chủ.'; })
      .then(function () { S.dang = false; ve(); });
  }

  /* ---------------- nhan xet tu dong ---------------- */
  function phanTram(k) {
    if (k.diem != null && k.max) return Math.round(100 * k.diem / k.max);
    if (k.t) return Math.round(100 * k.c / k.t);
    return null;
  }
  function diemKt(k) {
    var p = phanTram(k);
    if (k.diem != null && k.max) return k.diem + '/' + k.max + ' điểm' + (p != null ? ' (' + p + '%)' : '');
    return k.c + '/' + k.t + ' câu đúng' + (p != null ? ' (' + p + '%)' : '');
  }
  // muc: 0 can nhac (chua hoc / hoc it) … 4 tien bo — dung de sap xep va chon mau
  var MUC = {
    tk: { r: -1, chip: 'Chưa có tài khoản', cls: 'is-muted' },
    khong: { r: 0, chip: '⛔ Chưa học', cls: 'is-stale' },
    it: { r: 1, chip: '⚠ Học ít', cls: 'is-warn' },
    kha: { r: 2, chip: '🙂 Có học', cls: 'is-mid' },
    deu: { r: 3, chip: '✅ Học đều', cls: 'is-fresh' },
    tienbo: { r: 4, chip: '📈 Tiến bộ', cls: 'is-up' }
  };
  function danhGia(h) {
    if (!h.coTk) return { muc: 'tk', nhac: false, cau: ['Em chưa vào lớp bằng tài khoản trên web nên chưa có số liệu.'] };
    var a = h.nay, b = h.truoc, cau = [], muc, tienBo = false;
    var coCau = a.cauDung != null && b.cauDung != null;
    var dA = a.soNgay * 3 + a.phan + (coCau ? (a.cauDung + a.cauThi) / 10 : 0);
    var dB = b.soNgay * 3 + b.phan + (coCau ? (b.cauDung + b.cauThi) / 10 : 0);
    if (!a.soNgay) {
      muc = 'khong';
      cau.push(b.soNgay ? 'Tuần này em chưa vào học (tuần trước em học ' + b.soNgay + ' ngày), cần nhắc em quay lại học.'
        : 'Hai tuần gần đây em chưa vào học, cần nhắc em bắt đầu lại, mỗi ngày 10–15 phút.');
    } else {
      if (a.soNgay >= 4) { muc = 'deu'; cau.push('Em học đều, ' + a.soNgay + '/7 ngày trong tuần. Rất đáng khen! 👏'); }
      else if (a.soNgay >= 2) { muc = 'kha'; cau.push('Em có học ' + a.soNgay + ' ngày trong tuần, nên cố gắng học đều hơn (ít nhất 4 ngày một tuần).'); }
      else { muc = 'it'; cau.push('Em mới học 1 ngày trong tuần, cần nhắc em học đều hơn.'); }
      if (!b.soNgay && !b.phan) { tienBo = true; cau.push('Tuần trước em chưa học, tuần này em đã bắt đầu lại — rất tốt!'); }
      else if (dA >= dB * 1.25 && a.soNgay >= b.soNgay) {
        tienBo = true;
        var ct = [];
        if (a.soNgay > b.soNgay) ct.push('học ' + a.soNgay + ' ngày, tuần trước ' + b.soNgay + ' ngày');
        if (coCau && a.cauDung + a.cauThi > b.cauDung + b.cauThi) ct.push('nhiều câu đúng hơn');
        if (a.phan > b.phan) ct.push('làm nhiều phần bài hơn');
        cau.push('Em tiến bộ so với tuần trước' + (ct.length ? ' (' + ct.join(', ') + ')' : '') + '.');
      } else if (dA <= dB * 0.6) cau.push('Em học ít hơn tuần trước (tuần trước em học ' + b.soNgay + ' ngày).');
      else cau.push('Em giữ được nhịp học như tuần trước.');
    }
    var pts = (a.ktra || []).map(phanTram).filter(function (p) { return p != null; });
    if (pts.length) {
      var tb = Math.round(pts.reduce(function (s, p) { return s + p; }, 0) / pts.length);
      if (tb >= 80) cau.push('Bài kiểm tra em làm tốt (trung bình ' + tb + '%).');
      else if (tb < 50) cau.push('Điểm kiểm tra còn thấp (trung bình ' + tb + '%), em nên ôn lại bài rồi làm lại.');
      else cau.push('Bài kiểm tra đạt trung bình ' + tb + '%, em ôn thêm sẽ cao hơn.');
    }
    if (a.tuSai && a.tuSai.length) cau.push('Em nên ôn lại ' + a.tuSai.length + ' từ hay nhầm trong tuần.');
    if (a.nt && a.nt.ngay >= 2 && a.nt.ngay > a.soNgay) cau.push('Em vào trò chơi nông trại nhiều ngày hơn học bài — nên học bài trước rồi mới chơi.');
    if (tienBo && muc !== 'it') muc = 'tienbo';
    return { muc: muc, nhac: muc === 'khong' || muc === 'it', cau: cau };
  }

  /* ---------------- tin nhan gui phu huynh (chu tron, hop Zalo) ---------------- */
  function dongBai(b) {
    var dau = (b.cap ? b.cap + ' · ' : '') + (b.so != null ? 'Bài ' + b.so + ': ' : '') + b.ten;
    return dau + ' — ' + b.phan.map(function (p) { return p.ten; }).join(', ');
  }
  function tinNhan(h) {
    var d = S.d, dg = danhGia(h), ten = tenGoi(h.ten);
    var L = [];
    L.push('📋 BÁO CÁO HỌC TẬP TUẦN ' + d.nhan);
    L.push('👤 Học sinh: ' + h.ten + (d.lop ? ' · Lớp: ' + d.lop.ten : ''));
    L.push('');
    L.push('Kính gửi phụ huynh của em ' + ten + ',');
    if (!h.coTk) {
      L.push('Em chưa vào lớp bằng tài khoản trên web Hi Hán nên cô chưa có số liệu học ở nhà của em. Anh/chị nhắc em đăng nhập và vào lớp giúp cô nhé. Cô cảm ơn anh/chị! 🌸');
      return L.join('\n');
    }
    var a = h.nay, b = h.truoc;
    L.push('Cô gửi anh/chị tình hình học tiếng Trung trên web Hi Hán của em trong tuần qua:');
    L.push('');
    L.push('📅 Số ngày học: ' + a.soNgay + '/7 ngày' + ' (tuần trước: ' + b.soNgay + ' ngày)');
    if (a.bai && a.bai.length) {
      L.push('📚 Bài đã học (' + a.phan + ' phần):');
      a.bai.slice(0, 6).forEach(function (x) { L.push('• ' + dongBai(x)); });
      if (a.bai.length > 6) L.push('• … và ' + (a.bai.length - 6) + ' bài khác');
    } else L.push('📚 Bài đã học: chưa làm phần bài nào');
    if (a.cauDung != null) L.push('✅ Câu trả lời đúng mới: ' + so(a.cauDung + a.cauThi) + ' câu' + (b.cauDung != null ? ' (tuần trước: ' + so(b.cauDung + b.cauThi) + ')' : ''));
    if (a.sao != null) L.push('⭐ Sao chăm chỉ: ' + so(a.sao) + ' sao');
    if (a.ktra && a.ktra.length) {
      L.push('📝 Bài kiểm tra:');
      a.ktra.slice(0, 5).forEach(function (k) { L.push('• ' + k.ten + ': ' + diemKt(k)); });
    }
    if (a.tuSai && a.tuSai.length) {
      L.push('🔁 Từ em hay nhầm, cần ôn thêm:');
      a.tuSai.slice(0, 5).forEach(function (w) { L.push('• ' + w.zh + (w.py ? ' (' + w.py + ')' : '') + (w.vn ? ': ' + w.vn : '')); });
    }
    if (a.nt && a.nt.ngay) L.push('🌾 Trò chơi nông trại (ôn tập nhẹ): ' + a.nt.ngay + ' ngày');
    L.push('');
    L.push('💬 Nhận xét của cô: ' + dg.cau.join(' '));
    L.push(dg.nhac ? 'Anh/chị nhắc em dành 10–15 phút mỗi ngày học bài trên web giúp cô nhé. Cô cảm ơn anh/chị! 🌸'
      : 'Anh/chị động viên em giữ vững tinh thần học nhé. Cô cảm ơn anh/chị! 🌸');
    return L.join('\n');
  }

  // Sao chep: navigator.clipboard, khong duoc thi boi den chu + execCommand (giong admin-nhac-hoc.js)
  function chep(text, ta) {
    function duPhong() {
      var el = ta, tam = null;
      if (!el) {
        tam = el = document.createElement('textarea');
        el.value = text; el.setAttribute('readonly', '');
        el.style.position = 'fixed'; el.style.top = '-1000px';
        document.body.appendChild(el);
      }
      el.focus(); el.select();
      try { el.setSelectionRange(0, el.value.length); } catch (e) { /* bo qua */ }
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      if (tam) tam.parentNode.removeChild(tam);
      return Promise.resolve(ok);
    }
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, duPhong);
    }
    return duPhong();
  }

  /* ---------------- ve ---------------- */
  function soSanh(a, b, donVi) {
    if (a == null || b == null) return '';
    var d = a - b;
    if (!d) return '<span class="bct-ss">= tuần trước</span>';
    return '<span class="bct-ss ' + (d > 0 ? 'is-up' : 'is-down') + '">' + (d > 0 ? '▲ ' : '▼ ') + so(Math.abs(d)) + (donVi || '') + '</span>';
  }
  function chipMuc(dg) { var m = MUC[dg.muc]; return '<span class="tr-chip bct-chip ' + m.cls + '">' + m.chip + '</span>'; }

  function tongQuan(list) {
    var coTk = list.filter(function (r) { return r.h.coTk; });
    var hoc = coTk.filter(function (r) { return r.h.nay.soNgay > 0; });
    var khong = coTk.filter(function (r) { return !r.h.nay.soNgay; });
    var tienBo = coTk.filter(function (r) { return r.dg.muc === 'tienbo'; });
    var nhac = coTk.filter(function (r) { return r.dg.nhac; });
    var chuaTk = list.filter(function (r) { return !r.h.coTk; });
    var tenNut = function (r, phu) {
      return '<button type="button" class="bct-ten-chip" data-bct-toi="' + esc(r.h.id) + '">' + esc(r.h.ten) + (phu ? ' <span class="tr-muted">' + phu + '</span>' : '') + '</button>';
    };
    var cards = [
      { label: '👩‍🎓 Học sinh có tài khoản', value: so(coTk.length), sub: chuaTk.length ? chuaTk.length + ' em chưa nối tài khoản' : 'cả lớp đã có tài khoản' },
      { label: '📚 Có học tuần này', value: so(hoc.length), sub: coTk.length ? Math.round(100 * hoc.length / coTk.length) + '% lớp' : '' },
      { label: '⛔ Chưa học', value: so(khong.length), sub: 'không có ngày học nào', warn: khong.length > 0 },
      { label: '📈 Tiến bộ', value: so(tienBo.length), sub: 'so với tuần trước' },
      { label: '⚠ Cần nhắc', value: so(nhac.length), sub: 'chưa học hoặc chỉ học 1 ngày', warn: nhac.length > 0 }
    ];
    return '<section class="admin-cards bct-cards">' + cards.map(function (c) {
      return '<div class="admin-card' + (c.warn ? ' is-warn' : '') + '"><div class="admin-card-label">' + c.label + '</div>' +
        '<div class="admin-card-value is-sm">' + c.value + '</div>' + (c.sub ? '<div class="admin-card-sub">' + esc(c.sub) + '</div>' : '') + '</div>';
    }).join('') + '</section>' +
      '<div class="bct-ai">' +
        '<div class="bct-ai-nhom is-hoc"><div class="bct-ai-tieu">✅ Đã học (' + hoc.length + ')</div><div class="bct-ai-ds">' +
          (hoc.length ? hoc.slice().sort(function (x, y) { return y.h.nay.soNgay - x.h.nay.soNgay; }).map(function (r) { return tenNut(r, r.h.nay.soNgay + ' ngày'); }).join('') : '<span class="tr-muted">Chưa có em nào.</span>') + '</div></div>' +
        '<div class="bct-ai-nhom is-khong"><div class="bct-ai-tieu">⛔ Chưa học (' + khong.length + ')</div><div class="bct-ai-ds">' +
          (khong.length ? khong.map(function (r) { return tenNut(r, r.h.truoc.soNgay ? 'tuần trước ' + r.h.truoc.soNgay + ' ngày' : ''); }).join('') : '<span class="tr-muted">🎉 Em nào cũng có học.</span>') + '</div></div>' +
        (chuaTk.length ? '<div class="bct-ai-nhom"><div class="bct-ai-tieu">👤 Chưa nối tài khoản (' + chuaTk.length + ')</div><div class="bct-ai-ds">' + chuaTk.map(function (r) { return tenNut(r, ''); }).join('') + '</div></div>' : '') +
      '</div>';
  }

  var COT = [
    { k: 'ten', t: 'Học sinh' },
    { k: 'ngay', t: 'Ngày học' },
    { k: 'phan', t: 'Phần bài' },
    { k: 'cau', t: 'Câu đúng' },
    { k: 'sao', t: 'Sao' },
    { k: 'kt', t: 'Kiểm tra' },
    { k: 'nt', t: 'Nông trại' },
    { k: 'muc', t: 'Nhận xét' }
  ];
  function giaTri(r, k) {
    var a = r.h.nay;
    if (!a) return -1;
    if (k === 'ngay') return a.soNgay;
    if (k === 'phan') return a.phan;
    if (k === 'cau') return a.cauDung == null ? -1 : a.cauDung + a.cauThi;
    if (k === 'sao') return a.sao == null ? -1 : a.sao;
    if (k === 'kt') { var p = (a.ktra || []).map(phanTram).filter(function (x) { return x != null; }); return p.length ? p.reduce(function (s, x) { return s + x; }, 0) / p.length : -1; }
    if (k === 'nt') return a.nt ? a.nt.ngay : -1;
    return MUC[r.dg.muc].r;
  }
  function sapXep(list) {
    var k = S.sx.k, dir = S.sx.dir;
    return list.slice().sort(function (x, y) {
      if (x.h.coTk !== y.h.coTk) return x.h.coTk ? -1 : 1; // em chua noi tai khoan luon o cuoi
      if (k === 'ten') return dir * x.h.ten.localeCompare(y.h.ten, 'vi');
      return dir * (giaTri(x, k) - giaTri(y, k)) || x.h.ten.localeCompare(y.h.ten, 'vi');
    });
  }
  function bangLop(list) {
    var dash = '<span class="tr-muted">—</span>';
    return '<div class="admin-table-wrap"><table class="admin-table bct-table"><thead><tr>' + COT.map(function (c) {
      var on = S.sx.k === c.k;
      return '<th aria-sort="' + (on ? (S.sx.dir > 0 ? 'ascending' : 'descending') : 'none') + '"><button type="button" class="bct-sort" data-bct-sx="' + c.k + '">' +
        c.t + (on ? (S.sx.dir > 0 ? ' ▲' : ' ▼') : '') + '</button></th>';
    }).join('') + '</tr></thead><tbody>' + list.map(function (r) {
      var h = r.h, a = h.nay, b = h.truoc;
      var ten = '<td><button type="button" class="bct-ten" data-bct-toi="' + esc(h.id) + '">' + esc(h.ten) + '</button></td>';
      if (!a) return '<tr class="bct-tr-tk">' + ten + '<td colspan="6" class="tr-muted">Chưa nối tài khoản</td><td>' + chipMuc(r.dg) + '</td></tr>';
      var kt = (a.ktra || []).map(phanTram).filter(function (x) { return x != null; });
      return '<tr' + (r.dg.nhac ? ' class="bct-tr-nhac"' : '') + '>' + ten +
        '<td><b>' + a.soNgay + '</b>/7 ' + soSanh(a.soNgay, b.soNgay) + '</td>' +
        '<td>' + so(a.phan) + ' ' + soSanh(a.phan, b.phan) + '</td>' +
        '<td>' + (a.cauDung == null ? dash : so(a.cauDung + a.cauThi) + ' ' + soSanh(a.cauDung + a.cauThi, b.cauDung == null ? null : b.cauDung + b.cauThi)) + '</td>' +
        '<td>' + (a.sao == null ? dash : '⭐ ' + so(a.sao)) + '</td>' +
        '<td>' + (kt.length ? Math.round(kt.reduce(function (s, x) { return s + x; }, 0) / kt.length) + '%' + (kt.length > 1 ? ' <span class="tr-muted">(' + kt.length + ' bài)</span>' : '') : dash) + '</td>' +
        '<td>' + (a.nt ? (a.nt.ngay ? '🌾 ' + a.nt.ngay + ' ngày' : '0') : dash) + '</td>' +
        '<td>' + chipMuc(r.dg) + '</td></tr>';
    }).join('') + '</tbody></table></div>';
  }

  function theHs(r) {
    var h = r.h, a = h.nay, b = h.truoc, dg = r.dg, id = esc(h.id);
    var dau = '<div class="bct-the-dau"><div class="bct-the-ten">' + esc(h.ten) + '</div>' + chipMuc(dg) + '</div>';
    var nut = '<div class="bct-nut">' +
      '<button type="button" class="btn btn-primary" data-bct-chep="' + id + '">📋 Sao chép tin nhắn gửi phụ huynh</button>' +
      '<button type="button" class="btn btn-outline" data-bct-sua="' + id + '" aria-expanded="' + (S.moRa[h.id] ? 'true' : 'false') + '">✏️ Xem / sửa tin nhắn</button>' +
      '<button type="button" class="btn btn-outline" data-bct-in="' + id + '">🖨 In</button>' +
      '<span class="bct-tt" aria-live="polite"></span></div>' +
      '<textarea class="bct-msg" rows="14" aria-label="Tin nhắn gửi phụ huynh của ' + esc(h.ten) + '"' + (S.moRa[h.id] ? '' : ' hidden') + '>' + esc(S.mo[h.id] || '') + '</textarea>';
    if (!a) {
      return '<article class="bct-the is-tk" id="bct-hs-' + id + '" data-bct-id="' + id + '">' + dau +
        '<p class="bct-nx">' + esc(dg.cau.join(' ')) + '</p>' + nut + '</article>';
    }
    var o = function (nhan, giaTri, phu) { return '<div class="bct-so"><div class="bct-so-nhan">' + nhan + '</div><div class="bct-so-gt">' + giaTri + '</div>' + (phu ? '<div class="bct-so-phu">' + phu + '</div>' : '') + '</div>'; };
    var cauA = a.cauDung == null ? null : a.cauDung + a.cauThi, cauB = b.cauDung == null ? null : b.cauDung + b.cauThi;
    var lich = '<div class="bct-lich" aria-label="Các ngày học trong tuần">' + [0, 1, 2, 3, 4, 5, 6].map(function (i) {
      var k = new Date(Date.parse(S.d.tuan + 'T00:00:00Z') + i * 864e5).toISOString().slice(0, 10);
      var on = a.ngay.indexOf(k) >= 0;
      return '<span class="bct-ngay' + (on ? ' is-on' : '') + '" title="' + thu(k) + ' ' + dm(k) + (on ? ': có học' : ': không học') + '">' + thu(k) + '</span>';
    }).join('') + '</div>';
    var soLieu = '<div class="bct-so-ds">' +
      o('📅 Ngày học', a.soNgay + '/7', soSanh(a.soNgay, b.soNgay, ' ngày')) +
      o('📚 Phần bài', so(a.phan), a.phanMoi && a.phanMoi < a.phan ? a.phanMoi + ' phần mới' : soSanh(a.phan, b.phan)) +
      o('✅ Câu đúng mới', cauA == null ? '—' : so(cauA), cauA == null ? 'không còn số liệu' : soSanh(cauA, cauB)) +
      o('⭐ Sao', a.sao == null ? '—' : so(a.sao), a.sao == null ? 'web không lưu tuần này' : soSanh(a.sao, b.sao)) +
      '</div>';
    var bai = a.bai.length ? '<div class="bct-muc"><div class="bct-muc-tieu">📚 Bài đã học</div><ul class="bct-bai">' + a.bai.map(function (x) {
      return '<li><div class="bct-bai-ten">' + (x.so != null ? '<b>Bài ' + x.so + '</b> · ' : '') + esc(x.ten) +
        (x.zh ? ' <span class="bct-zh">' + esc(x.zh) + '</span>' : '') + (x.cap ? ' <span class="tr-muted">· ' + esc(x.cap) + '</span>' : '') + '</div>' +
        '<div class="bct-phan">' + x.phan.map(function (p) {
          var pt = p.t ? Math.round(100 * p.c / p.t) : null;
          return '<span class="bct-phan-chip' + (p.moi ? '' : ' is-lai') + '" title="' + (p.moi ? 'làm lần đầu' : 'làm lại') + (p.t ? ' · ' + p.c + '/' + p.t + ' câu đúng' : '') + '">' +
            esc(p.ten) + (pt != null ? ' <i>' + pt + '%</i>' : '') + (p.moi ? '' : ' ↻') + '</span>';
        }).join('') + '</div></li>';
    }).join('') + '</ul></div>' : '';
    var kt = a.ktra.length ? '<div class="bct-muc"><div class="bct-muc-tieu">📝 Bài kiểm tra</div><ul class="bct-kt">' + a.ktra.map(function (k) {
      var p = phanTram(k);
      return '<li><span>' + esc(k.ten) + (k.ngay ? ' <span class="tr-muted">· ' + thu(k.ngay) + ' ' + dm(k.ngay) + '</span>' : '') + '</span>' +
        '<b class="bct-diem ' + (p == null ? '' : p >= 80 ? 'is-tot' : p < 50 ? 'is-thap' : 'is-tb') + '">' + esc(diemKt(k)) + '</b></li>';
    }).join('') + '</ul></div>' : '';
    var tu = a.tuSai.length ? '<div class="bct-muc"><div class="bct-muc-tieu">🔁 Từ em hay nhầm</div><ul class="bct-tu">' + a.tuSai.map(function (w) {
      return '<li><span class="bct-tu-zh">' + esc(w.zh) + '</span><span class="bct-tu-py">' + esc(w.py || '') + '</span><span class="bct-tu-vn">' + esc(w.vn || '') + '</span>' +
        '<span class="bct-lan" title="số lần sai trong tuần">×' + w.lan + '</span></li>';
    }).join('') + '</ul></div>' : '';
    var cau = a.cauSai.length ? '<div class="bct-muc"><div class="bct-muc-tieu">❌ Câu em hay sai</div><ul class="bct-cau">' + a.cauSai.map(function (c) {
      return '<li><div class="bct-cau-nhan"><span class="cs-loai">' + esc(c.loai) + '</span>' + (c.bai ? ' <span class="tr-muted">' + esc(c.bai) + '</span>' : '') +
        ' <span class="bct-lan">sai ' + c.lan + ' lần</span>' + (c.daSua ? ' <span class="tr-chip is-fresh">đã sửa đúng</span>' : '') + '</div>' +
        (c.lenh ? '<div class="bct-cau-lenh">' + esc(c.lenh) + '</div>' : '') +
        (c.de ? '<div class="bct-cau-de bct-zh">' + esc(c.de) + '</div>' : '') + (c.py ? '<div class="bct-tu-py">' + esc(c.py) + '</div>' : '') +
        '<div class="bct-cau-dap">Đáp án đúng: <b class="bct-zh">' + esc(c.dap) + '</b></div></li>';
    }).join('') + '</ul></div>' : '';
    var nt = a.nt ? '<p class="bct-nt">🌾 Nông trại (chỉ để tham khảo): ' + (a.nt.ngay ? 'vào <b>' + a.nt.ngay + '</b> ngày, trả lời ' + so(a.nt.cau) + ' câu hỏi tiếng Trung' : 'không vào tuần này') +
      (b.nt ? ' <span class="tr-muted">· tuần trước ' + b.nt.ngay + ' ngày</span>' : '') + '</p>' : '';
    return '<article class="bct-the' + (dg.nhac ? ' is-nhac' : '') + '" id="bct-hs-' + id + '" data-bct-id="' + id + '">' + dau + lich + soLieu +
      '<p class="bct-nx">💬 ' + esc(dg.cau.join(' ')) + '</p>' +
      '<div class="bct-chi-tiet">' + bai + kt + tu + cau + '</div>' + nt + nut + '</article>';
  }

  function ve() {
    var h = hop();
    if (!h) return;
    var d = S.d;
    var dau = '<section class="admin-section bct-wrap"><div class="admin-section-title">📋 Báo cáo tuần</div>' +
      '<p class="tr-hint">Kết quả học trên web của từng em trong tuần (tính từ thứ Hai, giờ Việt Nam), so với tuần trước. Mỗi em có sẵn một tin nhắn gửi phụ huynh — bấm <b>Sao chép</b> rồi dán vào Zalo. Trang web không tự gửi tin nhắn nào.</p>';
    if (!d) {
      h.innerHTML = dau + '<p class="admin-empty">' + (S.loi ? '⚠️ ' + esc(S.loi) : S.dang ? 'Đang tải…' : 'Đăng nhập trang quản trị để xem.') + '</p></section>';
      return;
    }
    var cong = '<div class="bct-cong-cu">' +
      '<label class="tr-field"><span class="sr-only">Chọn lớp</span><select data-bct-lop>' + (d.lops.length ? d.lops.map(function (l) {
        return '<option value="' + esc(l.id) + '"' + (S.lop === l.id ? ' selected' : '') + '>🏫 ' + esc(l.ten) + ' (' + l.si + ' em)</option>';
      }).join('') : '<option value="">Chưa có lớp</option>') + '</select></label>' +
      '<label class="tr-field"><span class="sr-only">Chọn tuần</span><select data-bct-tuan>' + d.tuans.map(function (t, i) {
        return '<option value="' + esc(t.k) + '"' + (S.tuan === t.k ? ' selected' : '') + '>' + (i === 0 ? 'Tuần này' : i === 1 ? 'Tuần trước' : i + ' tuần trước') + ' (' + esc(t.nhan) + ')</option>';
      }).join('') + '</select></label>' +
      '<button type="button" class="btn btn-outline" data-bct-moi>🔄 Làm mới</button>' +
      '<button type="button" class="btn btn-outline" data-bct-in-lop' + (d.hs.length ? '' : ' disabled') + '>🖨 In cả lớp</button>' +
      (S.dang ? '<span class="tr-muted">Đang tải…</span>' : '') + (S.loi ? '<span class="tr-chip is-stale">⚠ ' + esc(S.loi) + '</span>' : '') +
      '</div>';
    if (!d.lop) {
      h.innerHTML = dau + cong + '<p class="admin-empty">Chưa có lớp nào. Tạo lớp ở tab “🏫 Lớp &amp; bài giao” trước nhé.</p></section>';
      return;
    }
    var list = d.hs.map(function (x) { return { h: x, dg: danhGia(x) }; });
    var tieuDeIn = '<div class="bct-in-dau">Báo cáo tuần ' + esc(d.nhan) + ' — ' + esc(d.lop.ten) + '</div>';
    var ghiChu = [];
    if (d.cauDungDu && d.cauDungDu.nay === 'khong') ghiChu.push('Số câu đúng của tuần này không còn trên máy (bản chạy thử chỉ giữ 14 ngày).');
    else if (d.cauDungDu && (d.cauDungDu.nay === 'mot-phan' || d.cauDungDu.truoc === 'mot-phan')) ghiChu.push('Số câu đúng chỉ còn một phần của ' + (d.cauDungDu.nay === 'mot-phan' ? 'tuần này' : 'tuần trước') + ' (bản chạy thử chỉ giữ 14 ngày).');
    if (list.some(function (r) { return r.h.nay && r.h.nay.sao == null; })) ghiChu.push('Web chỉ lưu sao của 2 tuần gần nhất em có học, nên tuần cũ có thể hiện “—”.');
    if (!d.ntTu) ghiChu.push('Chưa có số liệu nông trại.');
    var chuThich = '<details class="hc-help bct-help"><summary>ⓘ Các con số lấy từ đâu?</summary><ul>' +
      '<li><b>Ngày học</b>: ngày em có trong lịch học của tài khoản, hoặc ngày em làm một phần bài, có câu đúng mới hay nộp bài thi.</li>' +
      '<li><b>Phần bài</b>: phần (Từ vựng, Ngữ pháp, Kiểm tra cuối…) em làm lần đầu hoặc làm lại trong tuần; ↻ = làm lại. % là điểm lần gần nhất.</li>' +
      '<li><b>Câu đúng mới</b>: câu trả lời đúng mới trong bài học + câu đúng ở lượt thi thử HSK đầu tiên (giống Bảng vàng).</li>' +
      '<li><b>Kiểm tra</b>: Kiểm tra cuối bài, đề thi thử HSK và bài thi trên lớp em nộp trong tuần.</li>' +
      '<li><b>Từ / câu hay nhầm</b>: lấy từ kho “Câu em từng sai” của em (chỉ có khi em đăng nhập lúc luyện tập).</li>' +
      '<li><b>Nông trại</b>: chỉ để tham khảo — số ngày em vào trò chơi nông trại.' + (d.ntTu ? ' Có số liệu từ ' + dm(d.ntTu) + '/' + d.ntTu.slice(0, 4) + '.' : '') + '</li>' +
      '<li><b>Nhận xét</b> do web tự viết từ các con số trên, so với tuần trước (' + esc(d.nhanTruoc || '') + '). Thầy/cô sửa được trong ô tin nhắn trước khi chép.</li>' +
      '</ul></details>';
    var than = list.length ? tongQuan(list) +
      '<div class="bct-h3">📊 Cả lớp — bấm tiêu đề cột để sắp xếp</div>' + bangLop(sapXep(list)) +
      '<div class="bct-h3">👩‍🎓 Từng em</div><div class="bct-ds">' + sapXep(list).map(theHs).join('') + '</div>'
      : '<p class="admin-empty">Lớp này chưa có học sinh nào.</p>';
    h.innerHTML = dau + cong + tieuDeIn + (ghiChu.length ? '<p class="tr-hint">ⓘ ' + esc(ghiChu.join(' ')) + '</p>' : '') + chuThich + than +
      '<p class="cs-chu-thich">Kết quả được giữ 5 phút — bấm Làm mới để đọc lại ngay. Chỉ trang quản trị xem được.</p></section>';
  }

  /* ---------------- su kien ---------------- */
  function hsTheoId(id) { return S.d ? S.d.hs.filter(function (x) { return x.id === id; })[0] : null; }
  function inRa(id) {
    var root = document.documentElement;
    root.classList.add('bct-dang-in');
    if (id) {
      root.classList.add('bct-in-1');
      var el = document.getElementById('bct-hs-' + id);
      if (el) el.classList.add('is-in');
    }
    var bo = function () {
      root.classList.remove('bct-dang-in', 'bct-in-1');
      $all('.bct-the.is-in').forEach(function (x) { x.classList.remove('is-in'); });
      window.removeEventListener('afterprint', bo);
    };
    window.addEventListener('afterprint', bo);
    window.print();
  }
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t.closest || !t.closest('#trBaoCaoTuan')) return;
    if (t.hasAttribute('data-bct-lop')) {
      S.lop = t.value;
      try { localStorage.setItem(LOP_KEY, S.lop); } catch (er) { /* bo qua */ }
      tai();
    } else if (t.hasAttribute('data-bct-tuan')) { S.tuan = t.value; tai(); }
  });
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.classList && t.classList.contains('bct-msg')) {
      var the = t.closest('[data-bct-id]');
      if (the) S.mo[the.getAttribute('data-bct-id')] = t.value;
    }
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest || !e.target.closest('#trBaoCaoTuan')) return;
    var t = e.target.closest('button');
    if (!t) return;
    var the = t.closest('[data-bct-id]');
    if (t.hasAttribute('data-bct-moi')) tai(true);
    else if (t.hasAttribute('data-bct-in-lop')) inRa('');
    else if (t.hasAttribute('data-bct-sx')) {
      var k = t.getAttribute('data-bct-sx');
      S.sx = S.sx.k === k ? { k: k, dir: -S.sx.dir } : { k: k, dir: k === 'ten' || k === 'muc' ? 1 : -1 };
      ve();
    } else if (t.hasAttribute('data-bct-toi')) {
      var el = document.getElementById('bct-hs-' + t.getAttribute('data-bct-toi'));
      if (el) { el.scrollIntoView({ block: 'start', behavior: 'smooth' }); el.classList.add('is-sang'); setTimeout(function () { el.classList.remove('is-sang'); }, 1600); }
    } else if (the && t.hasAttribute('data-bct-in')) inRa(the.getAttribute('data-bct-id'));
    else if (the && (t.hasAttribute('data-bct-chep') || t.hasAttribute('data-bct-sua'))) {
      var id = the.getAttribute('data-bct-id'), h = hsTheoId(id);
      if (!h) return;
      var ta = $('.bct-msg', the), tt = $('.bct-tt', the);
      if (!ta.value) ta.value = tinNhan(h);
      if (t.hasAttribute('data-bct-sua')) {
        ta.hidden = !ta.hidden;
        t.setAttribute('aria-expanded', ta.hidden ? 'false' : 'true');
        S.moRa[id] = !ta.hidden;
        S.mo[id] = ta.value;
        if (!ta.hidden) ta.focus();
        return;
      }
      chep(ta.value, ta.hidden ? null : ta).then(function (ok) {
        if (ok) tt.textContent = '✓ Đã chép — dán vào Zalo của phụ huynh';
        else { ta.hidden = false; ta.focus(); ta.select(); tt.textContent = 'Chữ đã được bôi đen — bấm Ctrl+C (hoặc giữ để sao chép) nhé.'; }
      });
    }
  });

  // admin.js khong biet tab "bct": khi nut tab bct dang "active" thi hien khung nay, an danh sach / chi tiet hoc sinh
  function dongBo() {
    var h = hop();
    if (!h) return;
    var on = dangMo();
    h.hidden = !on;
    if (!on) return;
    var c = $('#trClass'), dt = $('#trDetail');
    if (c) c.hidden = true;
    if (dt) dt.hidden = true;
    ve();
    if (!S.d || Date.now() - (S.d.taoLuc || 0) > 5 * 60 * 1000) { if (!S.dang) tai(); }
  }
  var b = nutTab();
  if (b && window.MutationObserver) {
    new MutationObserver(dongBo).observe(b, { attributes: true, attributeFilter: ['class'] });
  }
  var dash = $('#adminDash');
  if (dash && window.MutationObserver) {
    new MutationObserver(function () { if (!dash.hidden && dangMo() && !S.d && !S.dang) tai(); }).observe(dash, { attributes: true, attributeFilter: ['hidden'] });
  }

  window.__trBaoCaoTuan = { render: dongBo };
})();
