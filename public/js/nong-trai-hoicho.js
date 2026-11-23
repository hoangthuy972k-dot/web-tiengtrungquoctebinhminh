/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — HOI CHO NONG SAN TUAN 农产品博览会 (2026-11-23)
   · T2–T7: moi em gui toi da 2 mon tu kho, kem loi gioi thieu tieng Trung tu xep bang the chu.
   · CN 0h–20h: ca thi tran binh chon (3 phieu / em, khong tu bau). CN 20h: cong bo 🥇🥈🥉.
   · Sau ket qua: bam "Nhận" -> do du thi ve kho + thuong (xu, hat quy, cup / huy chuong trang tri).
   Bang rieng 'hoicho' (tab gian / gui / kq) + nut trong "⋯ Thêm" + nut & bang tin tren thi tran.
   May chu: nong-trai-hoicho.js (/api/farm/hoicho, /ghep, /gui, /rut, /bau, /nhan).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$, $all = N.$all, esc = N.esc, img = N.img;
  var H = { d: null, lop: '', tai: false, chon: '', mau: '', tt: [], xep: null, ket: null, bang: null };
  var HUY = ['🥇', '🥈', '🥉'], TEN_GIAI = ['Giải Vàng', 'Giải Bạc', 'Giải Đồng'];
  var BUOC = [
    { k: 'gui', zh: '参展', py: 'cānzhǎn', vn: 'Gửi đồ dự thi', khi: 'Thứ 2 – Thứ 7' },
    { k: 'bau', zh: '投票', py: 'tóupiào', vn: 'Bình chọn', khi: 'Chủ nhật 0h – 20h' },
    { k: 'xong', zh: '颁奖', py: 'bānjiǎng', vn: 'Công bố & trao giải', khi: 'Chủ nhật 20h' },
  ];

  function tai() {
    if (H.tai) return;
    H.tai = true;
    N.goi('/api/farm/hoicho' + (H.lop ? '?lop=' + encodeURIComponent(H.lop) : '')).then(function (r) {
      H.tai = false; H.d = r; H.luc = Date.now(); ve();
    }, function (e) { H.tai = false; N.bao(e.message, 'loi'); var bd = N.bangDang(); if (bd && bd.loai === 'hoicho') $('#ntBangThan').innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
  }
  function ve() { var bd = N.bangDang(); if (bd && bd.loai === 'hoicho') N.veBang(); }
  function moHoiCho(lop, tab) {
    H.lop = lop || ''; H.d = null; H.ket = null; H.xep = null;
    N.moBang('hoicho', tab || 'gian');
  }
  function zh(s, py) { return '<span lang="zh" class="hcn-zh">' + esc(s) + '</span>' + (py ? ' <small class="hcn-py">' + esc(py) + '</small>' : ''); }
  function conLai(ms) {
    var p = Math.max(1, Math.round(ms / 60000)), ng = Math.floor(p / 1440), g = Math.floor((p % 1440) / 60), ph = p % 60;
    return ng ? ng + ' ngày ' + g + ' giờ' : g ? g + ' giờ ' + (ph ? ph + ' phút' : '') : ph + ' phút';
  }
  function ngay(w) { var p = String(w).split('-'); return p[2] + '/' + p[1]; }
  function anhNo(h) { return '<img class="hcn-no" src="/images/farm/hoicho-no-' + h + '.svg" alt="' + TEN_GIAI[h - 1] + '" draggable="false">'; }

  /* ---------- phan dau: thi tran + 3 buoc trong tuan + nhan thuong ---------- */
  function htmlDau(d) {
    var tg = d.pha === 'gui' ? d.moc.bau : d.pha === 'bau' ? d.moc.kq : d.moc.het, con = tg - d.now;
    var h = '<div class="hcn-dau">' + img('hoicho-gian', 'hcn-dau-hinh') + '<div><p class="hcn-dau-ten">Hội chợ thị trấn <b>' + esc(d.lop.ten) + '</b>' +
      (d.lop.cuaEm ? '' : ' <em>(tham quan)</em>') + '</p><p class="hcn-dau-phu">Tuần ' + ngay(d.tuan) + ' · ' + d.ds.length + ' gian hàng của ' + d.soNguoi + ' bạn · ' +
      (d.pha === 'gui' ? 'còn ' + conLai(con) + ' để gửi đồ' : d.pha === 'bau' ? 'còn ' + conLai(con) + ' để bình chọn' : 'tuần mới mở sau ' + conLai(con)) + '</p></div></div>';
    h += '<ol class="hcn-buoc">' + BUOC.map(function (b, i) {
      return '<li class="' + (b.k === d.pha ? 'dang' : BUOC.map(function (x) { return x.k; }).indexOf(d.pha) > i ? 'qua' : '') + '"><b>' + (i + 1) + '</b><span>' + zh(b.zh, b.py) + '<small>' + esc(b.vn) + '</small><em>' + esc(b.khi) + '</em></span></li>';
    }).join('') + '</ol>';
    if (d.chuaNhan && d.chuaNhan.length) {
      h += '<div class="hcn-nhan"><p>🎁 Hội chợ tuần ' + d.chuaNhan.map(ngay).join(', ') + ' đã có kết quả — nhận lại đồ dự thi' + ' và phần thưởng của em!</p>' +
        '<button type="button" class="nt-nut nt-nut-vang" data-hcn-nhan>🎁 Nhận ngay</button></div>';
    }
    return h;
  }

  /* ---------- tab Gian hang ---------- */
  function htmlGian(g, d) {
    var h = '<article class="hcn-gian' + (g.la ? ' la' : '') + (g.hang ? ' hang' + g.hang : '') + '">' +
      '<div class="hcn-mai" aria-hidden="true"></div>' + (g.hang ? anhNo(g.hang) : '') +
      '<button type="button" class="hcn-mon" data-hcn-doc="' + esc(g.zh) + '" aria-label="Đọc ' + esc(g.zh) + '">' + img('sp-' + g.k) +
      '<span><b lang="zh">' + esc(g.zh) + '</b><small>' + esc(g.py) + '</small><small>' + esc(g.vn) + (g.db ? ' 🧬' : '') + '</small></span></button>' +
      '<button type="button" class="hcn-cau" data-hcn-doc="' + esc(g.cau) + '"><span lang="zh">🔊 ' + esc(g.cau) + '</span><small>' + esc(g.cauPy) + '</small><em>' + esc(g.cauVn) + '</em></button>' +
      '<p class="hcn-chu">👤 <b>' + esc(g.ten) + '</b> · ' + esc(g.loai) + '</p>' +
      '<p class="hcn-diem"><span title="Điểm giám khảo">⚖ Giám khảo <b>' + g.gk + '</b></span>' +
      (g.tong != null ? '<span>👍 <b>' + g.ph + '</b> phiếu</span><span class="hcn-tong">= <b>' + g.tong + '</b> điểm</span>' : '') + '</p>';
    if (d.lop.cuaEm && d.pha === 'gui' && g.la) h += '<button type="button" class="nt-nut hcn-nut-nho" data-hcn-rut="' + g.id + '">↩ Rút về kho</button>';
    if (d.lop.cuaEm && d.pha === 'bau' && !g.la) {
      h += g.daBau ? '<button type="button" class="nt-nut hcn-nut-nho" disabled>✓ Em đã bình chọn</button>'
        : '<button type="button" class="nt-nut nt-nut-vang hcn-nut-nho" data-hcn-bau="' + g.id + '"' + (d.em && d.em.conPhieu > 0 ? '' : ' disabled') + '>👍 Bình chọn 投票</button>';
    }
    return h + '</article>';
  }
  function veGian(than, d) {
    var h = htmlDau(d);
    if (d.pha === 'bau' && d.lop.cuaEm) h += '<p class="hcn-meo">👍 Chủ nhật bình chọn! Em còn <b>' + (d.em ? d.em.conPhieu : 0) + '/' + d.luat.phieuTuan + '</b> phiếu — mỗi gian 1 phiếu, không bầu cho gian của mình. Số phiếu được giữ bí mật tới 20 giờ.</p>';
    else if (d.pha === 'gui') h += '<p class="hcn-meo">Các gian hàng đang bày. Chủ nhật cả thị trấn bình chọn — mỗi phiếu +' + d.luat.phieuDiem + ' điểm.' + (d.lop.cuaEm ? ' <button type="button" class="nt-link" data-tab="gui">Gửi đồ của em →</button>' : '') + '</p>';
    else if (d.kq) h += '<p class="hcn-meo">🏆 Đã công bố kết quả' + (d.kq.soGiai ? '' : ' — cần ít nhất 2 bạn tham gia mới có giải') + '. Xếp theo tổng điểm.</p>';
    if (!d.ds.length) h += '<p class="nt-trong">Chưa có gian hàng nào tuần này.' + (d.lop.cuaEm && d.pha === 'gui' ? ' Hãy là người đầu tiên! <br><br><button type="button" class="nt-nut nt-nut-xanh" data-tab="gui">📦 Gửi đồ dự thi</button>' : '') + '</p>';
    else h += '<div class="hcn-luoi">' + d.ds.map(function (g) { return htmlGian(g, d); }).join('') + '</div>';
    than.innerHTML = h;
    ganChung(than);
    $all('[data-hcn-bau]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        N.goi('/api/farm/hoicho/bau', { id: +b.getAttribute('data-hcn-bau') }).then(function (r) {
          N.tieng('dung'); N.doc('投票'); N.bao('👍 Đã bình chọn! Em còn ' + r.conPhieu + ' phiếu.'); tai();
        }, function (e) { b.disabled = false; N.bao(e.message, 'loi'); });
      });
    });
    $all('[data-hcn-rut]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        b.disabled = true;
        N.goi('/api/farm/hoicho/rut', { id: +b.getAttribute('data-hcn-rut') }).then(function (r) {
          if (r.st) N.nhanTrangThai(r.st);
          N.bao('↩ Đã đưa món về kho.'); tai();
        }, function (e) { b.disabled = false; N.bao(e.message, 'loi'); });
      });
    });
  }

  /* ---------- tab Gui do du thi: chon mon -> mau cau -> tinh tu -> xep the chu ---------- */
  function monChon(d) { return d.em ? d.em.mon.filter(function (m) { return m.k === H.chon; })[0] : null; }
  function veGui(than, d) {
    var h = htmlDau(d);
    if (!d.lop.cuaEm) { than.innerHTML = h + '<p class="nt-trong">Đây là hội chợ của thị trấn khác — em chỉ tham quan được.</p>'; ganChung(than); return; }
    var mine = d.ds.filter(function (g) { return g.la; });
    if (d.pha !== 'gui') {
      than.innerHTML = h + '<p class="nt-trong">Hội chợ chỉ nhận đồ từ <b>thứ Hai đến hết thứ Bảy</b>. ' + (d.pha === 'bau' ? 'Hôm nay là ngày bình chọn — sang thẻ <button type="button" class="nt-link" data-tab="gian">Gian hàng</button> nhé!' : 'Tuần mới sẽ mở vào thứ Hai.') + '</p>';
      ganChung(than); return;
    }
    if (H.xep) return veXep(than, d, h);
    h += '<p class="hcn-meo">Em đã gửi <b>' + mine.length + '/' + d.luat.guiToiDa + '</b> món. Món dự thi rời kho trong tuần và <b>được trả lại sau khi công bố kết quả</b> (kể cả khi đoạt giải). Hàng đột biến 🧬, giống lai, hàng chế biến được giám khảo chấm cao!</p>';
    if (mine.length >= d.luat.guiToiDa) {
      than.innerHTML = h + '<p class="nt-trong">Em đã gửi đủ ' + d.luat.guiToiDa + ' món tuần này. Muốn đổi? Rút một món ở thẻ <button type="button" class="nt-link" data-tab="gian">Gian hàng</button>.</p>';
      ganChung(than); return;
    }
    var m = monChon(d);
    if (H.chon && !m) { H.chon = ''; H.mau = ''; H.tt = []; }
    h += '<h3 class="hcn-h">① Chọn món trong kho</h3>';
    h += d.em.mon.length ? '<div class="hcn-kho">' + d.em.mon.map(function (x) {
      var sp = S.cat.SP[x.k] || { zh: x.k, vn: x.k, py: '' };
      return '<button type="button" class="hcn-o' + (x.k === H.chon ? ' chon' : '') + (x.loai === 'db' || x.loai === 'lai' ? ' quy' : '') + '" data-hcn-k="' + esc(x.k) + '">' + img('sp-' + x.k) +
        '<b lang="zh">' + esc(sp.zh) + '</b><small>' + esc(sp.vn) + '</small><em>' + esc(x.loaiVn) + ' · ×' + x.n + '</em><i>⚖ ' + (x.goc + x.gia) + '+</i></button>';
    }).join('') + '</div>' : '<p class="nt-trong">Kho chưa có món nào gửi được — thu hoạch, chăn nuôi hay chế biến rồi quay lại nhé!</p>';
    if (m) {
      var sp = S.cat.SP[m.k] || { vn: m.k };
      var tenVn = sp.vn || '';
      h += '<h3 class="hcn-h">② Chọn mẫu câu giới thiệu</h3><div class="hcn-mau">' + d.mau.map(function (x) {
        var c = x.vn.replace('{X}', x.vn.indexOf('{X}') === 0 ? tenVn : tenVn.charAt(0).toLowerCase() + tenVn.slice(1)).replace('{A}', '___').replace('{B}', '___');
        return '<button type="button" class="hcn-mau-o' + (x.k === H.mau ? ' chon' : '') + '" data-hcn-mau="' + x.k + '"><span>' + esc(c) + '</span><small>' + x.so + ' tính từ · +' + d.luat.gtDiem[x.so] + ' điểm</small></button>';
      }).join('') + '</div>';
      var mau = d.mau.filter(function (x) { return x.k === H.mau; })[0];
      if (mau) {
        h += '<h3 class="hcn-h">③ Chọn ' + mau.so + ' tính từ <small>(' + H.tt.length + '/' + mau.so + ')</small></h3><div class="hcn-tu">' + m.tu.map(function (k) {
          var t = d.tu[k];
          return '<button type="button" class="hcn-tu-o' + (H.tt.indexOf(k) >= 0 ? ' chon' : '') + '" data-hcn-tu="' + k + '"><b lang="zh">' + esc(t.zh) + '</b><small>' + esc(t.py) + '</small><em>' + esc(t.vn) + '</em></button>';
        }).join('') + '</div>';
        var du = H.tt.length === mau.so;
        h += '<p class="hcn-du">Điểm giám khảo dự kiến: <b>' + (m.goc + m.gia + d.luat.gtDiem[mau.so]) + '</b> = ' + m.goc + ' (' + esc(m.loaiVn) + ') + ' + m.gia + ' (giá trị) + ' + d.luat.gtDiem[mau.so] + ' (lời giới thiệu)</p>' +
          '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-hcn-ghep' + (du ? '' : ' disabled') + '>🧩 ④ Xếp câu</button></div>';
      }
    }
    than.innerHTML = h;
    ganChung(than);
    $all('[data-hcn-k]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-hcn-k');
        if (H.chon === k) { H.chon = ''; } else { H.chon = k; var sp = S.cat.SP[k]; if (sp) N.doc(sp.zh); }
        H.mau = ''; H.tt = []; N.veBang();
      });
    });
    $all('[data-hcn-mau]', than).forEach(function (b) {
      b.addEventListener('click', function () { H.mau = b.getAttribute('data-hcn-mau'); H.tt = []; N.veBang(); });
    });
    $all('[data-hcn-tu]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-hcn-tu'), i = H.tt.indexOf(k), mau = d.mau.filter(function (x) { return x.k === H.mau; })[0];
        if (i >= 0) H.tt.splice(i, 1);
        else { if (H.tt.length >= mau.so) H.tt.shift(); H.tt.push(k); N.doc(d.tu[k].zh); }
        N.veBang();
      });
    });
    var ng = $('[data-hcn-ghep]', than);
    if (ng) ng.addEventListener('click', function () {
      ng.disabled = true;
      N.goi('/api/farm/hoicho/ghep', { k: H.chon, mau: H.mau, tt: H.tt }).then(function (r) {
        H.xep = { o: r.o, vn: r.vn, dat: [] }; N.tieng('mua'); N.veBang();
      }, function (e) { ng.disabled = false; N.bao(e.message, 'loi'); });
    });
  }
  function veXep(than, d, h) {
    var x = H.xep, sp = S.cat.SP[H.chon] || {};
    h += '<div class="hcn-xep"><p class="hcn-xep-dau">🧩 Xếp các thẻ chữ thành câu giới thiệu ' + img('sp-' + H.chon) + ' <b lang="zh">' + esc(sp.zh || '') + '</b></p>' +
      '<p class="hcn-xep-vn">Nghĩa: <b>' + esc(x.vn) + '</b></p>' +
      '<div class="hcn-xep-dong" aria-label="Câu của em">' + (x.dat.length ? x.dat.map(function (i, j) {
        var t = x.o[i];
        return '<button type="button" class="hcn-the dat" data-hcn-bo="' + j + '"><b lang="zh">' + esc(t.zh) + '</b><small>' + esc(t.py) + '</small></button>';
      }).join('') : '<span class="hcn-xep-trong">Chạm thẻ bên dưới theo đúng thứ tự…</span>') + '</div>' +
      '<div class="hcn-xep-kho">' + x.o.map(function (t, i) {
        var dung = x.dat.indexOf(i) >= 0;
        return '<button type="button" class="hcn-the' + (dung ? ' an' : '') + '" data-hcn-the="' + i + '"' + (dung ? ' disabled aria-hidden="true"' : '') + '><b lang="zh">' + esc(t.zh) + '</b><small>' + esc(t.py) + '</small><em>' + esc(t.vn) + '</em></button>';
      }).join('') + '</div>' +
      '<p class="hcn-meo">Dấu câu (，！) máy tự thêm. Gợi ý: <span lang="zh">又…又…</span> = vừa… vừa…; <span lang="zh">我的</span> + tên món = món của em.</p>' +
      '<div class="nt-hang-nut"><button type="button" class="nt-nut" data-hcn-lai>← Chọn lại</button>' +
      '<button type="button" class="nt-nut nt-nut-xanh" data-hcn-gui' + (x.dat.length === x.o.length ? '' : ' disabled') + '>🎪 Gửi dự thi</button></div></div>';
    than.innerHTML = h;
    ganChung(than);
    $all('[data-hcn-the]', than).forEach(function (b) {
      b.addEventListener('click', function () { var i = +b.getAttribute('data-hcn-the'); if (x.dat.indexOf(i) < 0) { x.dat.push(i); N.doc(x.o[i].zh); N.veBang(); } });
    });
    $all('[data-hcn-bo]', than).forEach(function (b) {
      b.addEventListener('click', function () { x.dat.splice(+b.getAttribute('data-hcn-bo'), 1); N.veBang(); });
    });
    $('[data-hcn-lai]', than).addEventListener('click', function () { H.xep = null; N.veBang(); });
    var gui = $('[data-hcn-gui]', than);
    gui.addEventListener('click', function () {
      gui.disabled = true;
      N.goi('/api/farm/hoicho/gui', { k: H.chon, mau: H.mau, tt: H.tt, xep: x.dat.map(function (i) { return x.o[i].zh; }) }).then(function (r) {
        if (r.st) N.nhanTrangThai(r.st);
        N.tieng('len'); N.doc(r.gian.cau);
        N.bao('🎪 Đã bày gian hàng: ' + r.gian.cau + ' · giám khảo chấm ' + r.gian.gk + ' điểm');
        if (N.fx && N.fx.mung) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, false);
        H.xep = null; H.chon = ''; H.mau = ''; H.tt = [];
        var bd = N.bangDang(); if (bd) bd.tab = 'gian';
        tai();
      }, function (e) {
        N.tieng('sai'); N.bao(e.message, 'loi');
        x.dat = []; N.veBang();
      });
    });
  }

  /* ---------- tab Ket qua: bang xep hang + cach cham + giai thuong ---------- */
  function veKq(than, d) {
    var h = htmlDau(d), L = d.luat;
    if (d.kq && d.ds.length) {
      h += '<h3 class="hcn-h">🏆 Kết quả tuần ' + ngay(d.tuan) + '</h3><ol class="hcn-bxh">' + d.ds.map(function (g) {
        return '<li class="' + (g.hang ? 'hang' + g.hang : '') + (g.la ? ' la' : '') + '"><span class="hcn-bxh-thu">' + (g.hang ? HUY[g.hang - 1] : '#' + g.thu) + '</span>' + img('sp-' + g.k) +
          '<span class="hcn-bxh-ten"><b lang="zh">' + esc(g.zh) + '</b> ' + esc(g.vn) + '<small>👤 ' + esc(g.ten) + '</small></span><span class="hcn-bxh-diem">' + g.gk + ' + ' + g.ph + '×' + L.phieuDiem + ' = <b>' + g.tong + '</b></span></li>';
      }).join('') + '</ol>';
      if (!d.kq.soGiai) h += '<p class="hcn-meo">Tuần này chỉ có 1 bạn tham gia nên chưa trao giải — rủ thêm bạn nhé!</p>';
    } else if (d.truoc) {
      h += '<h3 class="hcn-h">🏆 Giải tuần trước (' + ngay(d.truoc.tuan) + ')</h3><ol class="hcn-bxh">' + d.truoc.giai.map(function (g) {
        return '<li class="hang' + g.hang + (g.la ? ' la' : '') + '"><span class="hcn-bxh-thu">' + HUY[g.hang - 1] + '</span>' + img('sp-' + g.k) +
          '<span class="hcn-bxh-ten"><b lang="zh">' + esc(g.zh || '') + '</b> ' + esc(g.vn || '') + '<small>👤 ' + esc(g.ten) + '</small></span><span class="hcn-bxh-diem"><b>' + g.tong + '</b> điểm</span></li>';
      }).join('') + '</ol>';
    } else h += '<p class="nt-trong">Kết quả tuần này công bố lúc <b>20 giờ Chủ nhật</b>.</p>';
    h += '<h3 class="hcn-h">🎁 Giải thưởng</h3><div class="hcn-giai">' + L.giai.map(function (g) {
      return '<div class="hcn-giai-o hang' + g.hang + '">' + anhNo(g.hang) + '<b>' + TEN_GIAI[g.hang - 1] + '</b><span>' + img('ic-xu') + ' ' + g.xu + ' xu</span>' +
        (g.hatQuy ? '<span>' + img('sp-nhansam') + ' ' + g.hatQuy + ' hạt giống quý</span>' : '') +
        '<span class="hcn-giai-tt">' + img(g.tt) + zh(g.ttZh, g.ttPy) + '<small>' + esc(g.ttVn) + ' (trang trí)</small></span></div>';
    }).join('') + '</div><p class="hcn-meo">Mỗi bạn nhiều nhất 1 giải. Số giải = số bạn tham gia − 1 (tối đa 3). Ai tham gia cũng được +' + L.xpThamGia + ' kinh nghiệm và <b>nhận lại đồ dự thi</b>.</p>';
    h += '<details class="hcn-cach"><summary>⚖ Cách chấm điểm</summary><p><b>Tổng điểm = Giám khảo + ' + L.phieuDiem + ' × số phiếu bình chọn.</b></p><ul>' +
      '<li>Loại hàng: ' + ['cay', 'con', 'gc', 'mon', 'quy', 'lai'].map(function (k) { return esc(L.loai[k].vn) + ' ' + L.loai[k].d; }).join(' · ') + ' · Cá câu 6 + 3×bậc</li>' +
      '<li>Đột biến 🧬: 巨型 khổng lồ ' + L.dbDiem[1] + ' · 金色 vàng kim ' + L.dbDiem[2] + ' · 彩虹 cầu vồng ' + L.dbDiem[3] + ' (đột biến của cây lai / cây quý +' + L.dbThem + ')</li>' +
      '<li>Giá trị: 2 × log₂(giá bán), tối đa ' + L.giaToiDa + '</li>' +
      '<li>Lời giới thiệu: 1 tính từ +' + L.gtDiem[1] + ' · 又…又… (2 tính từ) +' + L.gtDiem[2] + '</li>' +
      '<li>Bằng điểm: nhiều phiếu hơn xếp trước, rồi tới gian gửi sớm hơn.</li></ul></details>';
    if (d.ls && d.ls.length) {
      h += '<h3 class="hcn-h">📜 Giải của em</h3><ul class="hcn-ls">' + d.ls.map(function (x) {
        var sp = S.cat.SP[x.k] || { zh: x.k, vn: '' };
        return '<li>' + HUY[x.hang - 1] + ' Tuần ' + ngay(x.tuan) + ' · <span lang="zh">' + esc(sp.zh) + '</span> ' + esc(sp.vn) + ' · ' + x.tong + ' điểm</li>';
      }).join('') + '</ul>';
    }
    than.innerHTML = h;
    ganChung(than);
  }

  /* ---------- man nhan thuong ---------- */
  function veKet(than) {
    var h = '<div class="nt-chuc hcn-ket">';
    H.ket.forEach(function (e) {
      h += '<section class="hcn-ket-o' + (e.hang ? ' hang' + e.hang : '') + '"><h3>Hội chợ tuần ' + ngay(e.tuan) + '</h3>';
      if (e.hang) {
        var sp = S.cat.SP[e.k] || { zh: '', vn: '' };
        h += anhNo(e.hang) + '<h2>' + HUY[e.hang - 1] + ' ' + TEN_GIAI[e.hang - 1] + '!</h2><p><b lang="zh">' + esc(sp.zh) + '</b> ' + esc(sp.vn) + ' của em đạt <b>' + e.tong + '</b> điểm.</p>' +
          '<ul class="hcn-ket-qua"><li>' + img('ic-xu') + ' +' + e.xu + ' xu</li>' + (e.hat ? '<li>' + img('sp-' + e.hat.k) + ' +' + e.hat.n + ' hạt <span lang="zh">' + esc(e.hat.zh) + '</span> ' + esc(e.hat.vn) + '</li>' : '') +
          '<li>' + img(e.tt) + ' <span lang="zh">' + esc(e.ttZh) + '</span> ' + esc(e.ttVn) + ' — vào túi đồ, đặt lên nông trại nhé!</li></ul>';
      } else if (e.tra.length) h += '<p>Tuần này em chưa đoạt giải — tuần sau thử món hiếm hơn hoặc rủ bạn bình chọn nhé!</p>';
      if (e.tra.length) h += '<p class="hcn-ket-tra">↩ Đã trả về kho: ' + e.tra.map(function (t) { return '<span>' + img('sp-' + t.k) + ' <span lang="zh">' + esc(t.zh) + '</span> ×' + t.n + '</span>'; }).join(' ') + '</p>';
      if (e.xp) h += '<p class="hcn-ket-xp">+' + e.xp + ' kinh nghiệm</p>';
      h += '</section>';
    });
    h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-hcn-ve>← Hội chợ</button></div></div>';
    than.innerHTML = h;
    $('[data-hcn-ve]', than).addEventListener('click', function () { H.ket = null; H.d = null; N.veBang(); });
  }

  function ganChung(than) {
    $all('[data-hcn-doc]', than).forEach(function (b) { b.addEventListener('click', function () { N.doc(b.getAttribute('data-hcn-doc')); }); });
    var nh = $('[data-hcn-nhan]', than);
    if (nh) nh.addEventListener('click', function () {
      nh.disabled = true;
      N.goi('/api/farm/hoicho/nhan', {}).then(function (r) {
        if (r.st) N.nhanTrangThai(r.st);
        H.ket = r.ket;
        var thang = r.ket.some(function (e) { return e.hang; });
        N.tieng(thang ? 'len' : 'mua');
        if (thang && N.fx && N.fx.mung) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, true);
        N.veBang();
      }, function (e) { nh.disabled = false; N.bao(e.message, 'loi'); });
    });
  }

  N.dangKy('hoicho', function (than, bd) {
    $('#ntBangTit').textContent = 'Hội chợ nông sản 农产品博览会';
    if (H.d && !H.xep && Date.now() - (H.luc || 0) > 60000) H.d = null; // du lieu cu (mo lai bang sau 1 phut): tai lai
    var d = H.d;
    var tabs = [['gian', '🎪 Gian hàng'], ['gui', '📦 Gửi đồ'], ['kq', '🏆 Kết quả']];
    if (d && d.lop && !d.lop.cuaEm) tabs = [tabs[0], tabs[2]];
    var tab = bd.tab || 'gian';
    if (tab !== 'gian' && tab !== 'gui' && tab !== 'kq') tab = 'gian';
    N.datTab(tabs, tab);
    if (H.ket) return veKet(than);
    if (!d) { than.innerHTML = '<p class="nt-trong">Đang mở hội chợ…</p>'; tai(); return; }
    if (!d.lop) { than.innerHTML = '<p class="nt-trong">Em chưa có thị trấn nào — mở nông trại hoặc vào lớp để tham gia hội chợ nhé.</p>'; return; }
    if (tab === 'gui') veGui(than, d); else if (tab === 'kq') veKq(than, d); else veGian(than, d);
  });

  /* ---------- nut trong "⋯ Thêm" ---------- */
  function taoNut() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || $('#ntThemHc')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-them-o'; b.id = 'ntThemHc'; b.setAttribute('data-mo', 'hoicho');
    b.innerHTML = '<img src="/images/farm/hoicho-cup.svg" alt="" draggable="false"><span class="nt-muc-chu"><b>Hội chợ nông sản</b><small><span lang="zh">农产品博览会</span> · gửi đồ, bình chọn</small></span><i class="nt-cham" id="ntHcnCham" hidden></i>';
    var sau = $('#ntThemLai') || luoi.querySelector('[data-mo="kt-xuong"]');
    luoi.insertBefore(b, sau ? sau.nextSibling : null);
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      if (N.dongThiTran) N.dongThiTran();
      if (S.tham && N.veNha) N.veNha();
      moHoiCho('', 'gian');
    });
  }
  taoNut();
  setTimeout(taoNut, 0); // neu nut Lai giong chen sau thi van dung cho
  N.sau.push(function (st) {
    var c = $('#ntHcnCham');
    if (c) c.hidden = !(st && st.kt && st.kt.hc && st.kt.hc.nhan > 0);
  });
  N.htmlNk.hoicho = function (e) {
    var sp = (S.cat && S.cat.SP[e.k]) || { zh: '', vn: '' };
    return { hinh: 'hoicho-no-' + (e.hang || 1), chu: '🏆 Hội chợ nông sản 农产品博览会: <b>' + TEN_GIAI[(e.hang || 1) - 1] + '</b> với <span lang="zh">' + esc(sp.zh) + '</span> ' + esc(sp.vn) + '!' };
  };

  /* ---------- thi tran: nut tren dau + bang tin hoi cho ---------- */
  function taoNutTt() {
    var hang = $('#ntThiTran .nt-tt-nut');
    if (!hang || $('#ntHcnTtNut')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-nut nt-nut-vang'; b.id = 'ntHcnTtNut';
    b.innerHTML = '🏆 Hội chợ';
    var ve = hang.querySelector('[data-tt="ve"]');
    hang.insertBefore(b, ve || null);
    b.addEventListener('click', function (e) { e.stopPropagation(); moTuThiTran(); });
  }
  function moTuThiTran() {
    var t = N.thiTran && N.thiTran();
    var lop = t && t.lop && !t.cuaEm ? t.lopId : '';
    N.dongThiTran();
    moHoiCho(lop, 'gian');
  }
  taoNutTt();
  function veBangTt(r) {
    var luoi = $('#ntTtLuoi'), el = $('#ntHcnBang');
    if (!r || !r.lop || !luoi) { if (el) el.hidden = true; return; }
    if (!el) {
      el = document.createElement('div');
      el.id = 'ntHcnBang'; el.className = 'hcn-bang';
      luoi.parentNode.insertBefore(el, luoi);
      el.addEventListener('click', function (e) { if (e.target.closest('[data-hcn-vao]')) { e.stopPropagation(); moTuThiTran(); } });
    }
    el.hidden = false;
    var lop = r.cuaEm ? '' : r.lopId, cu = H.bang;
    var veB = function (d) {
      if (!d || !d.lop) { el.hidden = true; return; }
      var top = d.kq && d.kq.soGiai ? d.ds.filter(function (g) { return g.hang; }).map(function (g) { return { hang: g.hang, k: g.k, zh: g.zh, ten: g.ten }; }) : d.truoc ? d.truoc.giai : [];
      var dong = d.pha === 'gui' ? '📦 Đang nhận đồ dự thi (T2–T7) · ' + d.ds.length + ' gian hàng' : d.pha === 'bau' ? '👍 Hôm nay bình chọn tới 20 giờ · ' + d.ds.length + ' gian hàng' : '🏆 Đã công bố kết quả tuần này';
      el.innerHTML = img('hoicho-cup', 'hcn-bang-cup') + '<div class="hcn-bang-chu"><h3>Hội chợ nông sản <span lang="zh">农产品博览会</span> <small>nóngchǎnpǐn bólǎnhuì</small></h3><p>' + dong + '</p>' +
        (top.length ? '<p class="hcn-bang-top">' + (d.kq && d.kq.soGiai ? 'Tuần này: ' : 'Tuần trước: ') + top.map(function (g) {
          return '<span>' + anhNo(g.hang) + img('sp-' + g.k) + '<b>' + esc(g.ten) + '</b></span>';
        }).join('') + '</p>' : '') + '</div><button type="button" class="nt-nut nt-nut-vang" data-hcn-vao>Vào hội chợ →</button>';
    };
    if (cu && cu.lop === lop && Date.now() - cu.t < 30000) { veB(cu.d); return; }
    N.goi('/api/farm/hoicho' + (lop ? '?lop=' + encodeURIComponent(lop) : '')).then(function (d) {
      H.bang = { lop: lop, t: Date.now(), d: d };
      veB(d);
    }, function () { el.hidden = true; });
  }
  N.sauTt.push(function (r) { taoNutTt(); veBangTt(r); });
})();
