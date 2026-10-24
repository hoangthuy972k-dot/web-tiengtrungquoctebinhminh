// Trang hoc sinh: vao phong bang ma, bam dap an tren dien thoai.
// May chu: live.js (/api/live/...). Giu pid/tok trong sessionStorage de
// lo tai lai trang van o trong phong.
(function () {
  'use strict';
  var $ = function (s) { return document.getElementById(s); };
  var MAN = ['manVao', 'manCho', 'manHoi', 'manDaChon', 'manKq', 'manHet', 'manXong'];
  var HINH = ['▲', '◆', '●', '■'];
  var KEY = 'hyv_choi';
  var s = { ma: '', pid: '', tok: '', qid: -1, pha: '', daChon: -1, poll: 0, dem: 0, conLai: 0, tai: 0, nhip: false, nhipI: -1, dangPh: false };

  function hien(id) {
    MAN.forEach(function (m) { $(m).hidden = m !== id; });
    $('chan').hidden = id === 'manVao';
  }
  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function api(method, url, body) {
    return fetch(url, {
      method: method,
      headers: body ? { 'Content-Type': 'application/json' } : {},
      body: body ? JSON.stringify(body) : undefined,
      cache: 'no-store',
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d.error || 'Lỗi kết nối'); e.d = d; e.status = r.status; throw e; }
        return d;
      });
    });
  }
  function luu() { try { sessionStorage.setItem(KEY, JSON.stringify({ ma: s.ma, pid: s.pid, tok: s.tok })); } catch (e) { /* bo qua */ } }
  function xoaLuu() { try { sessionStorage.removeItem(KEY); } catch (e) { /* bo qua */ } }
  function rung(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* bo qua */ } }

  /* ---- vao phong ---- */
  $('formVao').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var ma = $('oMa').value.replace(/\D/g, '');
    var ten = $('oTen').value.trim();
    $('loiVao').textContent = '';
    if (ma.length !== 6) { $('loiVao').textContent = 'Mã phòng gồm 6 chữ số.'; return; }
    if (!ten) { $('loiVao').textContent = 'Em nhập tên nhé.'; return; }
    $('nutVao').disabled = true;
    api('POST', '/api/live/' + ma + '/vao', { ten: ten }).then(function (d) {
      s.ma = ma; s.pid = d.pid; s.tok = d.tok;
      try { localStorage.setItem('hyv_choi_ten', ten); } catch (e) { /* bo qua */ }
      luu();
      $('chanTen').textContent = d.ten;
      $('tenCho').textContent = d.ten;
      hien('manCho');
      batDauPoll();
    }).catch(function (e) {
      $('loiVao').textContent = e.message;
    }).then(function () { $('nutVao').disabled = false; });
  });

  /* ---- hoi trang thai ---- */
  function batDauPoll() {
    clearTimeout(s.poll);
    var vong = function () {
      if (document.hidden) { s.poll = setTimeout(vong, 1500); return; }
      api('GET', '/api/live/' + s.ma + '/hs?pid=' + encodeURIComponent(s.pid) + '&tok=' + encodeURIComponent(s.tok))
        .then(function (d) { s.loiLienTiep = 0; ve(d); })
        .catch(function (e) {
          if (e.status === 403 || e.status === 404) { xoaLuu(); veRa(e.message); return; }
          s.loiLienTiep = (s.loiLienTiep || 0) + 1;
        })
        .then(function () { if (s.ma) s.poll = setTimeout(vong, s.pha === 'hoi' ? 1000 : 1500); });
    };
    vong();
  }
  function veRa(msg) {
    s.ma = '';
    clearTimeout(s.poll);
    hien('manVao');
    $('loiVao').textContent = msg || '';
  }

  function ve(d) {
    $('chanDiem').textContent = d.diem;
    $('chanTen').textContent = d.ten;
    if (d.kieu === 'nhip') { s.nhip = true; veNhip(d); return; }
    var moi = d.qid !== s.qid || d.pha !== s.pha;
    s.pha = d.pha;
    if (d.pha === 'cho') { if (moi) hien('manCho'); s.qid = d.qid; return; }
    if (d.pha === 'hoi') {
      if (d.qid !== s.qid) { s.qid = d.qid; s.daChon = -1; veCau(d); }
      if (d.chon >= 0 && s.daChon < 0) { s.daChon = d.chon; veDaChon(d); }
      demNguoc(d.conLai);
      return;
    }
    if (d.pha === 'lat') { if (moi || $('manKq').hidden) { s.qid = d.qid; veKq(d); } return; }
    if (d.pha === 'het') { if (moi) veHet(d); }
  }

  function veCau(d) {
    var c = d.cau || { opts: [] };
    $('soCau').textContent = 'Câu ' + (c.so || d.qid) + (c.tong ? '/' + c.tong : '');
    $('cauZh').textContent = (c.ctx ? '🗣️ ' + c.ctx + String.fromCharCode(10) : '') + (c.zh || '');
    $('demGio').hidden = !!s.nhip;
    var o = $('opts');
    o.className = 'ch-opts n' + c.opts.length;
    o.innerHTML = c.opts.map(function (t, i) {
      return '<button type="button" class="ch-opt o' + i + '" data-i="' + i + '">' +
        '<span class="ch-hinh" aria-hidden="true">' + HINH[i] + '</span>' +
        '<span class="ch-opt-t">' + esc(t) + '</span></button>';
    }).join('');
    Array.prototype.forEach.call(o.querySelectorAll('button'), function (b) {
      b.addEventListener('click', function () { chon(parseInt(b.getAttribute('data-i'), 10), c); });
    });
    s.cau = c;
    hien('manHoi');
    rung(40);
  }
  function chon(i, c) {
    if (s.nhip) { chonNhip(i, c); return; }
    if (s.daChon >= 0) return;
    s.daChon = i;
    Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = true; });
    rung(25);
    api('POST', '/api/live/' + s.ma + '/tl', { pid: s.pid, tok: s.tok, qid: s.qid, chon: i })
      .then(function () { veDaChon({ cau: c, chon: i }); })
      .catch(function (e) {
        s.daChon = -1;
        Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = false; });
        if (e.status === 409) { $('soCau').textContent = e.message; }
      });
  }
  function veDaChon(d) {
    var c = d.cau || s.cau || { opts: [] };
    var i = d.chon;
    $('oDaChon').className = 'ch-chon-o o' + i;
    $('oDaChon').innerHTML = '<span class="ch-hinh">' + HINH[i] + '</span><span>' + esc(c.opts[i] || '') + '</span>';
    hien('manDaChon');
  }
  function demNguoc(ms) {
    clearInterval(s.dem);
    var het = Date.now() + (ms || 0);
    var paint = function () {
      var con = Math.max(0, Math.ceil((het - Date.now()) / 1000));
      $('demGio').textContent = con + 's';
      $('demGio').classList.toggle('thap', con <= 5);
      if (con <= 0) clearInterval(s.dem);
    };
    paint();
    s.dem = setInterval(paint, 250);
  }
  function veKq(d) {
    clearInterval(s.dem);
    var c = d.cau || s.cau || { opts: [] };
    var dung = d.chon >= 0 && d.chon === d.dung;
    $('manKq').className = 'ch-man ch-kq ' + (dung ? 'dung' : 'sai');
    $('kqIc').textContent = dung ? '✓' : d.chon < 0 ? '⏱' : '✗';
    $('kqTit').textContent = dung ? 'Chính xác!' : d.chon < 0 ? 'Chưa kịp chọn' : 'Chưa đúng rồi';
    $('kqCong').textContent = dung ? '+' + d.cong + (d.chuoi >= 2 ? '  🔥 chuỗi ' + d.chuoi : '') : '';
    $('kqDung').innerHTML = !dung && d.dung >= 0 ? 'Đáp án: <b>' + HINH[d.dung] + ' ' + esc(c.opts[d.dung] || '') + '</b>' : '';
    $('kqHang').innerHTML = d.hang ? 'Hạng <b>' + d.hang + '</b> / ' + d.soHs + doiHang(d.hangCu, d.hang) : '';
    $('kqViTri').innerHTML = d.hang === 1 && d.hangCu > 1 ? '<div class="ch-vt-dau">👑 Bạn đang dẫn đầu!</div>'
      : d.vuot && d.vuot.length ? '<div class="ch-vt-vuot">🔥 Bạn vừa vượt <b>' + d.vuot.map(esc).join(', ') + '</b></div>' : '';
    $('kqWhy').textContent = '';
    $('nutTiep').hidden = true;
    hien('manKq');
    rung(dung ? [30, 40, 30] : 120);
  }
  function veHet(d) {
    clearInterval(s.dem);
    $('hetHang').innerHTML = d.hang ? 'Em xếp hạng <b>' + d.hang + '</b> / ' + d.soHs + ' · ' + d.diem + ' điểm' : '';
    $('hetBxh').innerHTML = (d.bxh || []).map(function (r, i) {
      return '<li><span>' + ['🥇', '🥈', '🥉', '4', '5'][i] + '</span><b>' + esc(r.ten) + '</b><i>' + r.diem + '</i></li>';
    }).join('');
    hien('manHet');
    xoaLuu();
    clearTimeout(s.poll);
    s.ma = '';
  }
  /* ---- vi tri tren "nui": hang, vuot ai, con cach ban phia truoc bao xa ---- */
  function doiHang(cu, moi) {
    if (!cu || !moi || cu === moi) return '';
    return cu > moi ? ' <span class="ch-len">▲' + (cu - moi) + '</span>' : ' <span class="ch-xuong">▼' + (moi - cu) + '</span>';
  }
  function nuiHtml(vt) {
    var tong = Math.max(1, s.tong || Math.max.apply(null, vt.doan.concat([1])));
    var dem = {};
    var cham = vt.doan.map(function (n, k) {
      if (k === vt.hang - 1) return '';
      dem[n] = (dem[n] || 0) + 1;
      var x = Math.min(100, n / tong * 100);
      return '<i style="left:' + x + '%;bottom:' + (x * 0.9 + Math.min(4, dem[n] - 1) * 9) + '%"></i>';
    }).join('');
    var x0 = Math.min(100, vt.dungSo / tong * 100);
    return '<div class="ch-nui" aria-label="Bạn đang ở bậc ' + vt.dungSo + ' trên ' + tong + '">' +
      '<span class="ch-nui-co">🚩</span>' + cham +
      '<b class="ch-nui-em" style="left:' + x0 + '%;bottom:' + (x0 * 0.9) + '%">Em</b></div>';
  }
  function nhomHtml(vt, tieuDe) {
    return '<div class="ch-chang"><div class="ch-chang-tit">' + tieuDe + '</div>' + vt.nhom.map(function (r, k) {
      var cach = k && r.hang - vt.nhom[k - 1].hang > 1 ? '<div class="ch-chang-cach">⋯</div>' : '';
      return cach + '<div class="ch-chang-hang' + (r.la ? ' la' : '') + '"><span>' + (['🥇', '🥈', '🥉'][r.hang - 1] || r.hang) + '</span>' +
        '<b>' + esc(r.ten) + (r.la ? ' (bạn)' : '') + '</b><i>' + r.dungSo + ' câu</i></div>';
    }).join('') + '</div>';
  }
  function viTriHtml(vt, r) {
    var h = '';
    if (r.dauBang) h += '<div class="ch-vt-dau">👑 Bạn đang dẫn đầu!</div>';
    h += '<div class="ch-vt-hang">Hạng <b>' + vt.hang + '</b><small>/' + vt.soHs + '</small>' + doiHang(r.hangCu, vt.hang) + '</div>';
    if (r.vuot && r.vuot.length) h += '<div class="ch-vt-vuot">🔥 Bạn vừa vượt <b>' + r.vuot.map(esc).join(', ') + '</b></div>';
    if (vt.truoc) {
      var cach = vt.truoc.dungSo - vt.dungSo;
      h += '<div class="ch-vt-duoi">' + (cach > 0
        ? 'Còn <b>' + cach + ' câu đúng</b> nữa là đuổi kịp <b>' + esc(vt.truoc.ten) + '</b> (hạng ' + vt.truoc.hang + ')'
        : 'Đang ngang <b>' + esc(vt.truoc.ten) + '</b> — đúng tiếp và nhanh hơn để vượt!') + '</div>';
    } else if (vt.sau) {
      var hon = vt.dungSo - vt.sau.dungSo;
      h += '<div class="ch-vt-duoi">' + (hon > 0 ? 'Bạn hơn <b>' + esc(vt.sau.ten) + '</b> ' + hon + ' câu — giữ vững nhé!' : '<b>' + esc(vt.sau.ten) + '</b> đang bám sát ngay sau bạn!') + '</div>';
    }
    h += nuiHtml(vt);
    // cu 3 cau dung: dung lai xem bang chang
    if (r.moc) h += nhomHtml(vt, '⛰️ Chặng ' + Math.round(vt.dungSo / 3) + ' — bạn đang ở đây');
    return h;
  }
  var henBao = 0;
  function baoNhanh(txt) {
    var t = $('toast');
    t.textContent = txt;
    t.hidden = false;
    clearTimeout(henBao);
    henBao = setTimeout(function () { t.hidden = true; }, 3200);
  }

  /* ---- kieu tu lam theo nhip rieng: moi em tu sang cau tiep ---- */
  function veNhip(d) {
    var doi = d.pha !== s.pha;
    s.pha = d.pha;
    if (d.tong) s.tong = d.tong;
    // ban khac vua vuot minh -> bao ngay
    (d.tin || []).forEach(function (t) {
      if (t.loai === 'biVuot') { baoNhanh('⚠️ ' + t.ten + ' vừa vượt bạn — cố lên!'); rung([60, 40, 60]); }
    });
    if (d.pha === 'cho') { if (doi) hien('manCho'); return; }
    if (d.pha === 'het') { if (doi) { s.dangPh = false; veHet(d); } return; }
    if (d.xong) {
      if (s.dangPh) return; // dang xem dap an cau cuoi
      $('xongTk').textContent = 'Đúng ' + d.dungSo + '/' + d.tong + ' câu · ' + d.diem + ' điểm';
      $('xongHang').innerHTML = d.hang ? 'Hạng <b>' + d.hang + '</b> / ' + d.soHs : '';
      if (d.vt) $('xongViTri').innerHTML = nhomHtml(d.vt, 'Bảng leo núi lúc này');
      if ($('manXong').hidden) { hien('manXong'); rung([30, 40, 30]); }
      return;
    }
    if (s.dangPh || !d.cau) return;
    if (d.i !== s.nhipI || $('manHoi').hidden) {
      s.nhipI = d.i;
      d.cau.so = d.i + 1;
      d.cau.tong = d.tong;
      veCau(d);
    }
  }
  function chonNhip(i, c) {
    if (s.dangPh) return;
    s.dangPh = true;
    Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = true; });
    rung(25);
    api('POST', '/api/live/' + s.ma + '/tl', { pid: s.pid, tok: s.tok, i: s.nhipI, chon: i }).then(function (r) {
      $('chanDiem').textContent = r.diem;
      if (r.dung == null) { s.dangPh = false; s.nhipI = -1; return; }
      $('manKq').className = 'ch-man ch-kq ' + (r.dung ? 'dung' : 'sai');
      $('kqIc').textContent = r.dung ? '✓' : '✗';
      $('kqTit').textContent = r.dung ? 'Chính xác!' : 'Chưa đúng rồi';
      $('kqCong').textContent = r.dung ? '+' + r.cong + (r.chuoi >= 2 ? '  🔥 chuỗi ' + r.chuoi : '') : '';
      $('kqDung').innerHTML = r.dung ? '' : 'Đáp án: <b>' + HINH[r.dap] + ' ' + esc(c.opts[r.dap] || '') + '</b>';
      $('kqHang').innerHTML = '';
      $('kqViTri').innerHTML = r.vt ? viTriHtml(r.vt, r) : '';
      $('kqWhy').textContent = r.why ? '💡 ' + r.why : '';
      if (r.dauBang) rung([40, 30, 40, 30, 80]);
      $('nutTiep').hidden = false;
      $('nutTiep').textContent = r.xong ? 'Xem kết quả →' : 'Câu tiếp →';
      hien('manKq');
      rung(r.dung ? [30, 40, 30] : 120);
    }).catch(function (e) {
      s.dangPh = false;
      s.nhipI = -1; // lech cau (vd. mo 2 tab): lay lai cau hien tai
      if (e.status !== 409) Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = false; });
      batDauPoll();
    });
  }
  $('nutTiep').addEventListener('click', function () {
    s.dangPh = false;
    $('nutTiep').hidden = true;
    batDauPoll(); // hoi may ngay de lay cau tiep
  });

  $('nutLai').addEventListener('click', function () { $('oMa').value = ''; hien('manVao'); });

  /* ---- khoi tao ---- */
  var q = new URLSearchParams(location.search);
  if (q.get('ma')) $('oMa').value = q.get('ma').replace(/\D/g, '').slice(0, 6);
  try { $('oTen').value = localStorage.getItem('hyv_choi_ten') || ''; } catch (e) { /* bo qua */ }
  var cu = null;
  try { cu = JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { /* bo qua */ }
  if (cu && cu.ma && cu.pid && (!q.get('ma') || q.get('ma') === cu.ma)) {
    s.ma = cu.ma; s.pid = cu.pid; s.tok = cu.tok;
    hien('manCho');
    batDauPoll();
  } else {
    hien('manVao');
    if ($('oMa').value) $('oTen').focus(); else $('oMa').focus();
  }
})();
