/* Thử thách cả lớp 全班挑战 (/thu-thach-lop)
   Mỗi tuần cả lớp cùng HỌC BÀI để đạt 1 chỉ tiêu chung (chỉ tính câu đúng mới + phần bài mới trong bài học).
   Mốc 50% / 100% / 150%: bạn nào đã góp sức (≥ 10 câu đúng mới hoặc 1 phần bài mới) nhận xu vào nông trại,
   mốc 100% lần đầu còn được Cúp cả lớp 全班奖杯. Máy chủ: thu-thach-lop.js (tiến độ) + nong-trai-thuthachlop.js (nhận thưởng).
   Trang không phát âm thanh. */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var NOI = $('#ttNoi'), GIO = $('#ttGio'), GIO_SO = $('#ttGioSo'), PHU = $('#ttPhu');
  var S = { d: null, het: 0, dangNhan: false, kq: null, loiNhan: '' };

  var MOC_ZH = {
    50: { zh: '加油', py: 'jiāyóu', vn: 'Cố lên!', ten: 'Nửa chặng đường' },
    100: { zh: '完成', py: 'wánchéng', vn: 'Hoàn thành', ten: 'Đạt chỉ tiêu' },
    150: { zh: '超额完成', py: 'chāo\'é wánchéng', vn: 'Vượt chỉ tiêu', ten: 'Vượt chỉ tiêu' }
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  function auth() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a : null; } catch (e) { return null; }
  }
  function goi(method, url, body) {
    var a = auth(), h = { 'Content-Type': 'application/json' };
    if (a) h.Authorization = 'Bearer ' + a.token;
    return fetch(url, { method: method, headers: h, body: body ? JSON.stringify(body) : undefined }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d.error || 'Có lỗi, em thử lại sau nhé.'); e.status = r.status; throw e; }
        return d;
      });
    });
  }
  function so(n) { return Number(n || 0).toLocaleString('vi-VN'); }
  function zh(z, py, vn) {
    return '<span class="tt-zhc"><b lang="zh-CN" class="zh">' + esc(z) + '</b> <i>' + esc(py) + '</i>' + (vn ? ' <span>' + esc(vn) + '</span>' : '') + '</span>';
  }

  /* ───────── đếm ngược tới hết tuần ───────── */
  function conLai(giay) {
    giay = Math.max(0, Math.round(giay));
    var ng = Math.floor(giay / 86400), g = Math.floor((giay % 86400) / 3600), p = Math.floor((giay % 3600) / 60);
    if (ng > 0) return ng + ' ngày ' + g + ' giờ';
    if (g > 0) return g + ' giờ ' + p + ' phút';
    return Math.max(1, p) + ' phút';
  }
  function nhipGio() {
    if (!S.het) return;
    var giay = (S.het - Date.now()) / 1000;
    if (giay <= 0) { S.het = 0; GIO.hidden = true; tai(); return; }
    GIO.hidden = false;
    GIO_SO.textContent = conLai(giay);
  }
  setInterval(nhipGio, 20000);

  /* ───────── vẽ ───────── */
  function veKhach() {
    NOI.innerHTML = '<section class="tt-the tt-giua">' +
      '<p class="tt-to">👋 Em đăng nhập để cùng cả lớp làm thử thách nhé!</p>' +
      '<p>Mỗi tuần cả lớp cùng học bài để đạt một chỉ tiêu chung. Lớp đạt mốc thì mọi bạn đã góp sức đều nhận thưởng ở nông trại.</p>' +
      '<a class="tt-nut is-chinh" href="/#dang-nhap">Đăng nhập</a></section>' + htmlLuat(null);
  }
  function veLoi(msg) {
    NOI.innerHTML = '<section class="tt-the tt-giua"><p class="tt-to">😕 ' + msg + '</p>' +
      '<button type="button" class="tt-nut" id="ttThuLai">Thử lại</button></section>';
    $('#ttThuLai').addEventListener('click', tai);
  }
  function veChuaLop(d) {
    PHU.textContent = 'Tuần ' + d.nhanTuan + ' · cả lớp cùng học để đạt chỉ tiêu.';
    NOI.innerHTML = '<section class="tt-the tt-giua">' +
      '<img class="tt-hinh-nho" src="/images/farm/ttl-cup.svg" alt="" width="72" height="72">' +
      '<p class="tt-to">Em chưa vào lớp nào</p>' +
      '<p>Thử thách này dành cho <b>cả lớp</b>: các bạn cùng lớp học bài để đạt chung một chỉ tiêu mỗi tuần. ' +
      'Em hãy vào lớp trước nhé — ở <b>trang chủ</b>, tìm ô <b>“Em học lớp của thầy cô?”</b> rồi nhập <b>mã lớp</b> thầy cô đưa.</p>' +
      '<p class="tt-nho">Chưa có mã lớp? Em hỏi thầy cô nhé. Trong lúc chờ, em vẫn học bài bình thường — điểm học của em tuần này sẽ được tính khi em vào lớp.</p>' +
      '<a class="tt-nut is-chinh" href="/">Về trang chủ nhập mã lớp</a></section>' + htmlLuat(d.luat);
  }

  function htmlThanh(d) {
    var pt = d.pt || 0, MAX = 150;
    var rong = Math.min(pt, MAX) / MAX * 100;
    var moc = (d.luat.moc || []).map(function (m) {
      var x = m.p / MAX * 100, dat = pt >= m.p;
      return '<span class="tt-moc-v' + (dat ? ' is-dat' : '') + (m.p === MAX ? ' is-cuoi' : '') + '" style="left:' + x + '%"><i></i><b>' + m.p + '%</b></span>';
    }).join('');
    return '<div class="tt-thanh" role="progressbar" aria-valuemin="0" aria-valuemax="150" aria-valuenow="' + Math.min(pt, 150) + '" aria-label="Tiến độ cả lớp">' +
      '<div class="tt-thanh-ray"><div class="tt-thanh-day' + (pt >= 100 ? ' is-dat' : '') + '" style="width:' + rong + '%"></div></div>' + moc + '</div>';
  }

  function htmlMoc(d) {
    return '<ul class="tt-moc">' + d.moc.map(function (m) {
      var z = MOC_ZH[m.p] || { zh: '', py: '', vn: '', ten: '' };
      var trang = m.daNhan ? '<span class="tt-nhan is-xong">✓ Đã nhận</span>'
        : m.coThe ? '<span class="tt-nhan is-mo">🎁 Nhận được</span>'
        : m.dat ? '<span class="tt-nhan is-dat">✓ Lớp đã đạt</span>'
        : '<span class="tt-nhan">Chưa đạt</span>';
      var thuong = '+' + m.xu + ' xu' + (m.cup ? (d.coCup ? '' : ' + Cúp cả lớp') : '');
      return '<li class="' + (m.dat ? 'is-dat' : '') + '">' +
        '<span class="tt-moc-pt">' + m.p + '%</span>' +
        '<span class="tt-moc-ten"><b>' + esc(z.ten) + '</b>' + zh(z.zh, z.py, z.vn) + '</span>' +
        '<span class="tt-moc-thuong"><b>' + thuong + '</b>' + trang + '</span></li>';
    }).join('') + '</ul>';
  }

  function htmlNhan(d) {
    var kq = '';
    if (S.kq) {
      kq = '<div class="tt-kq" role="status"><p class="tt-to">🎉 Em đã nhận <b>+' + S.kq.xu + ' xu</b> vào nông trại!</p>' +
        (S.kq.cup ? '<p class="tt-kq-cup"><img src="/images/farm/ttl-cup.svg" alt="" width="56" height="56">' +
          '<span>Và <b>' + zh(S.kq.cup.zh, S.kq.cup.py, '') + '</b> — ' + esc(S.kq.cup.vn) + ' đã nằm trong <b>túi đồ</b> nông trại. Em đặt nó lên nông trại cho cả lớp cùng ngắm nhé!</span></p>' : '') +
        '<a class="tt-lienket" href="/nong-trai">Đến nông trại của em →</a></div>';
    }
    if (!d.coNhan) return kq + '<p class="tt-nho">Phần thưởng tạm thời chưa nhận được — em quay lại sau nhé.</p>';
    if (d.coTheNhan > 0) {
      var truoc = d.tuanTruoc.moc.filter(function (m) { return m.coThe; }).length;
      return kq + '<button type="button" class="tt-nut is-chinh is-to" id="ttNhan"' + (S.dangNhan ? ' disabled' : '') + '>🎁 Nhận thưởng +' + d.xuCoThe + ' xu</button>' +
        (truoc ? '<p class="tt-nho">Gồm cả phần thưởng của tuần trước (' + esc(d.tuanTruoc.nhan) + ') em chưa nhận.</p>' : '') +
        (S.loiNhan ? '<p class="tt-loi">' + esc(S.loiNhan) + '</p>' : '');
    }
    var dat = d.moc.filter(function (m) { return m.dat; });
    var msg;
    if (!dat.length) msg = 'Lớp đạt <b>50%</b> chỉ tiêu là mở phần thưởng đầu tiên. Cùng cố lên nào!';
    else if (!d.em.du) msg = 'Lớp đã đạt mốc rồi! Em cần tự góp <b>' + (d.em.canCau > 0 ? 'thêm ' + d.em.canCau + ' câu đúng mới' : '') + '</b>' +
      (d.em.canCau > 0 ? ' (hoặc làm <b>1 phần bài mới</b>)' : '') + ' để nhận thưởng — không "ăn theo" đâu nhé 😉';
    else if (dat.length < 3) msg = 'Em đã nhận thưởng các mốc lớp đạt. Lớp lên mốc tiếp theo là em nhận thêm!';
    else msg = 'Em đã nhận hết thưởng tuần này. Lớp mình giỏi quá! 🎉';
    return kq + '<p class="tt-goi">' + msg + '</p>' + (S.loiNhan ? '<p class="tt-loi">' + esc(S.loiNhan) + '</p>' : '');
  }

  function htmlEm(d) {
    var e = d.em, L = d.luat;
    return '<section class="tt-the">' +
      '<h2>📘 Em đã góp</h2>' +
      '<div class="tt-so3">' +
        '<div><b>' + so(e.cau) + '</b><span>câu đúng mới</span></div>' +
        '<div><b>' + so(e.phan) + '</b><span>phần bài mới</span></div>' +
        '<div class="is-chinh"><b>' + so(e.diem) + '</b><span>điểm học</span></div>' +
      '</div>' +
      '<p class="tt-nho">Em đang góp <b>' + so(e.gop) + ' / ' + L.tranGop + '</b> điểm vào chỉ tiêu chung' +
        (e.hang ? ' · đứng thứ <b>' + e.hang + '</b> trong lớp' : '') + '.</p>' +
      (e.du ? '<p class="tt-du is-ok">✓ Em đã đủ điều kiện nhận thưởng tuần này.</p>'
        : '<p class="tt-du">Còn thiếu: <b>' + e.canCau + ' câu đúng mới</b> hoặc <b>1 phần bài mới</b> nữa là em đủ điều kiện nhận thưởng.</p>') +
      '<a class="tt-nut" href="/">📚 Học bài tiếp</a>' +
    '</section>';
  }

  function htmlTop(d) {
    var hang = function (r) {
      var huy = r.hang === 1 ? '🥇' : r.hang === 2 ? '🥈' : r.hang === 3 ? '🥉' : r.hang;
      return '<li class="' + (r.la ? 'is-em' : '') + '"><span class="tt-hang">' + huy + '</span>' +
        '<span class="tt-ten">' + esc(r.ten) + (r.la ? ' <em>(em)</em>' : '') + '<small>' + so(r.cau) + ' câu · ' + so(r.phan) + ' phần</small></span>' +
        '<b class="tt-diem">' + so(r.diem) + '</b></li>';
    };
    var chua = Math.max(0, (d.lop.soHs || 0) - (d.soGop || 0));
    return '<section class="tt-the">' +
      '<h2>⭐ Góp nhiều nhất tuần này</h2>' +
      (d.top.length ? '<ol class="tt-top5">' + d.top.map(hang).join('') + (d.emHang ? '<li class="tt-cach" aria-hidden="true">⋯</li>' + hang(d.emHang) : '') + '</ol>'
        : '<p class="tt-goi">Tuần này chưa bạn nào học bài. Em mở đầu đi — bạn đầu tiên luôn được nhớ tên! 🌱</p>') +
      (chua > 0 && d.top.length ? '<p class="tt-nho">Còn <b>' + chua + '</b> bạn trong lớp chưa góp điểm tuần này — rủ bạn cùng học nhé!</p>' : '') +
    '</section>';
  }

  function htmlLichSu(d) {
    if (!d.lichSu || !d.lichSu.length) return '';
    return '<section class="tt-the">' +
      '<h2>📅 Các tuần trước</h2>' +
      '<ul class="tt-ls">' + d.lichSu.map(function (t) {
        var ic = t.pt >= 150 ? '🏆' : t.pt >= 100 ? '🎉' : t.pt >= 50 ? '👍' : '🌱';
        var loi = t.pt >= 150 ? 'Vượt chỉ tiêu' : t.pt >= 100 ? 'Đạt chỉ tiêu' : t.pt >= 50 ? 'Qua nửa chặng' : 'Chưa đạt mốc';
        return '<li><span class="tt-ls-ic" aria-hidden="true">' + ic + '</span>' +
          '<span class="tt-ls-chu"><b>Tuần ' + esc(t.nhan) + '</b> · ' + loi + '<small>' + so(t.tong) + ' / ' + so(t.muc) + ' điểm · ' + t.soGop + ' bạn góp' +
          (t.top.length ? ' · góp nhiều nhất: ' + t.top.map(esc).join(', ') : '') + '</small></span>' +
          '<b class="tt-ls-pt' + (t.pt >= 100 ? ' is-dat' : '') + '">' + t.pt + '%</b></li>';
      }).join('') + '</ul></section>';
  }

  function htmlLuat(L) {
    L = L || { moiNguoi: 60, tranGop: 180, diemPhan: 5, phanToiDa: 10, canCau: 10 };
    return '<details class="tt-the tt-luat"><summary>❓ Cách tính điểm & phần thưởng</summary>' +
      '<ul>' +
        '<li><b>Chỉ tính học bài thật</b>: mỗi <b>câu đúng mới</b> trong bài học = 1 điểm; mỗi <b>phần bài làm lần đầu</b> (từ vựng, ngữ pháp, hội thoại, kiểm tra…) = ' + L.diemPhan + ' điểm (tối đa ' + L.phanToiDa + ' phần / tuần). Chơi nông trại, trò chơi hay thi thử không tính.</li>' +
        '<li>Làm lại bài cũ chỉ được tính phần câu đúng <b>vượt</b> điểm cao nhất trước đó.</li>' +
        '<li><b>Chỉ tiêu</b> = ' + L.moiNguoi + ' điểm × số bạn đang học trong lớp (bạn có học bài trong 4 tuần trước). Lớp đông hay ít đều công bằng.</li>' +
        '<li>Mỗi bạn góp tối đa <b>' + L.tranGop + ' điểm</b> vào chỉ tiêu chung — để cả lớp cùng học, không để một bạn gánh hết.</li>' +
        '<li>Mốc <b>50%</b>: +20 xu · <b>100%</b>: +40 xu và lần đầu được <b>Cúp cả lớp</b> ' + zh('全班奖杯', 'quánbān jiǎngbēi', '') + ' cho nông trại · <b>150%</b>: +20 xu.</li>' +
        '<li>Muốn nhận thưởng, em phải tự góp ít nhất <b>' + L.canCau + ' câu đúng mới</b> hoặc <b>1 phần bài mới</b> trong tuần đó. Mỗi mốc nhận 1 lần; thưởng tuần trước vẫn nhận được trong tuần này.</li>' +
        '<li>Tuần tính từ <b>thứ Hai</b> đến hết <b>Chủ nhật</b> (giờ Việt Nam).</li>' +
      '</ul></details>';
  }

  function ve() {
    var d = S.d;
    if (!d.coLop) { veChuaLop(d); return; }
    PHU.innerHTML = (/^lớp\s/i.test(d.lop.ten) ? '' : 'Lớp ') + '<b>' + esc(d.lop.ten) + '</b> · tuần ' + esc(d.nhanTuan);
    var chuThanh = d.pt >= 150 ? '🏆 Lớp mình đã <b>vượt chỉ tiêu</b>! ' + zh('超额完成', 'chāo\'é wánchéng', 'vượt chỉ tiêu')
      : d.pt >= 100 ? '🎉 Lớp mình đã <b>đạt chỉ tiêu</b>! Cố lên mốc 150% nhé.'
      : d.pt >= 50 ? '👍 Qua nửa chặng rồi! Còn <b>' + so(Math.max(0, d.muc - d.tong)) + '</b> điểm nữa là đạt chỉ tiêu.'
      : 'Còn <b>' + so(Math.max(0, Math.ceil(d.muc / 2) - d.tong)) + '</b> điểm nữa là lớp đạt mốc 50%.';
    NOI.innerHTML =
      '<section class="tt-the tt-lop">' +
        '<h2>🏫 Cả lớp tuần này</h2>' +
        '<p class="tt-tong"><b>' + so(d.tong) + '</b> / ' + so(d.muc) + ' điểm học <span class="tt-pt' + (d.pt >= 100 ? ' is-dat' : '') + '">' + d.pt + '%</span></p>' +
        htmlThanh(d) +
        '<p class="tt-goi">' + chuThanh + '</p>' +
        '<p class="tt-nho">Chỉ tiêu: ' + d.luat.moiNguoi + ' điểm × ' + d.n + ' bạn đang học · <b>' + d.soDu + '/' + d.lop.soHs + '</b> bạn đã góp đủ điều kiện.</p>' +
        htmlMoc(d) +
        '<div class="tt-nhan-hop">' + htmlNhan(d) + '</div>' +
      '</section>' +
      htmlEm(d) + htmlTop(d) + htmlLichSu(d) + htmlLuat(d.luat);
    var nut = $('#ttNhan');
    if (nut) nut.addEventListener('click', nhan);
  }

  function nhan() {
    if (S.dangNhan) return;
    S.dangNhan = true; S.loiNhan = '';
    var nut = $('#ttNhan');
    if (nut) { nut.disabled = true; nut.textContent = 'Đang nhận…'; }
    goi('POST', '/api/farm/thuthachlop/nhan').then(function (r) {
      S.kq = r;
      S.dangNhan = false;
      return tai();
    }).catch(function (e) {
      S.dangNhan = false;
      S.loiNhan = e.message;
      if (e.status === 401) { veKhach(); return; }
      tai();
    });
  }

  function tai() {
    if (!auth()) { veKhach(); return Promise.resolve(); }
    return goi('GET', '/api/thu-thach-lop').then(function (d) {
      S.d = d;
      S.het = Date.now() + (d.conGiay || 0) * 1000;
      nhipGio();
      ve();
    }).catch(function (e) {
      if (e.status === 401) { veKhach(); return; }
      veLoi(esc(e.message || 'Không tải được thử thách.'));
    });
  }
  tai();
})();
