// Trang hoc sinh: vao phong bang ma, bam dap an tren dien thoai.
// May chu: live.js (/api/live/...). Giu pid/tok trong sessionStorage de
// lo tai lai trang van o trong phong.
(function () {
  'use strict';
  var $ = function (s) { return document.getElementById(s); };
  var MAN = ['manVao', 'manCho', 'manHoi', 'manDaChon', 'manKq', 'manHet', 'manXong'];
  var HINH = ['▲', '◆', '●', '■'];
  var CHU = ['A', 'B', 'C', 'D']; // Rung Chuong Vang dung chu cai nhu tren man chieu
  var KEY = 'hyv_choi';
  var s = { ma: '', pid: '', tok: '', qid: -1, pha: '', daChon: -1, poll: 0, dem: 0, conLai: 0, tai: 0, nhip: false, nhipI: -1, dangPh: false,
    chuong: false, cuuSeq: null, rcKhoa: '', rcNghi: false, rcVeQid: -1 };
  function kyHieu(i) { return (s.chuong ? CHU : HINH)[i]; }

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
    boChuong();
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
    if (d.kieu === 'chuong') { veChuong(d); return; }
    if (s.chuong) boChuong();
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
        '<span class="ch-hinh" aria-hidden="true">' + kyHieu(i) + '</span>' +
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
    $('oDaChon').innerHTML = '<span class="ch-hinh">' + kyHieu(i) + '</span><span>' + esc(c.opts[i] || '') + '</span>';
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
  // Cong sao tro choi (sao-game.js) — moi cau chi mot lan du man ket qua ve lai nhieu lan
  function saoCau(id, dung) {
    if (!window.SaoGame || s.saoDa === id) return;
    s.saoDa = id;
    if (dung) window.SaoGame.dung(); else window.SaoGame.sai();
  }
  function veKq(d) {
    clearInterval(s.dem);
    var c = d.cau || s.cau || { opts: [] };
    var dung = d.chon >= 0 && d.chon === d.dung;
    if (d.chon >= 0) saoCau('q' + (d.qid || s.qid), dung);
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
      saoCau('n' + s.nhipI, r.dung);
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

  $('nutLai').addEventListener('click', function () {
    // Rung Chuong Vang van hoi tiep sau khi ket thuc (co the choi lai) — vao phong khac thi dung han
    clearTimeout(s.poll); s.ma = ''; xoaLuu();
    $('oMa').value = ''; hien('manVao');
  });

  /* ---- Rung Chuong Vang (phong kieu 'chuong'): tren san / roi san / cuu tro ---- */
  function boChuong() {
    if (!s.chuong) return;
    s.chuong = false; s.cuuSeq = null; s.rcKhoa = ''; s.rcNghi = false; s.rcVeQid = -1;
    document.body.classList.remove('ch-rc');
    $('rcTrang').hidden = true; $('rcBang').hidden = true; $('rcCuu').hidden = true;
    $('icCho').textContent = '👀'; $('titCho').textContent = 'Em đã vào lớp!';
    $('moCho').textContent = 'Nhìn lên bảng, câu hỏi sắp hiện ra…';
    $('moDaChon').textContent = 'Chờ cô lật đáp án nhé…';
    $('hetIc').textContent = '🏁'; $('hetTit').textContent = 'Kết thúc!';
    $('manHet').className = 'ch-man';
  }
  function veChuong(d) {
    if (!s.chuong) { s.chuong = true; document.body.classList.add('ch-rc'); }
    $('chanTen').textContent = d.ten;
    $('chanDiem').textContent = d.diem + 'đ';
    var tr = $('rcTrang');
    tr.hidden = false;
    tr.textContent = d.vang ? '🔔 Chuông vàng' : d.con ? '🟡 Trên sàn' : 'Đã rời sàn';
    tr.className = 'ch-rc-trang' + (d.con ? ' is-con' : '');
    // duoc dua tro lai san (cuu tro / phao / ca san cung sai / co cho len)
    var seq = d.cuu ? d.cuu.seq : 0;
    var cuuMoi = s.cuuSeq !== null && seq > s.cuuSeq;
    s.cuuSeq = seq;
    // vua duoc cuu o chinh cau cuu tro nay: man ket qua da bao roi, khong hien them lop phu
    var boQuaBao = d.pha === 'lat' && d.kq && d.kq.ve && s.rcVeQid !== d.qid;
    if (boQuaBao) s.rcVeQid = d.qid;
    if (cuuMoi && !boQuaBao) baoCuu(d.cuu.ly);

    var khoa = d.pha + ':' + d.qid;
    var moi = khoa !== s.rcKhoa;
    s.rcKhoa = khoa;
    s.pha = d.pha;
    if (d.pha === 'cho') { clearInterval(s.dem); veChoChuong(d, ''); s.qid = d.qid; return; }
    if (d.pha === 'hoi') {
      var c = d.cau || { opts: [] };
      if (c.cuu && d.con) { clearInterval(s.dem); veChoChuong(d, 'cuu'); s.qid = d.qid; s.daChon = -1; s.rcNghi = true; return; }
      if (d.qid !== s.qid || s.rcNghi) { s.rcNghi = false; s.qid = d.qid; s.daChon = -1; veCau(d); }
      veBangChuong(d);
      if (d.chon >= 0 && s.daChon < 0) { s.daChon = d.chon; veDaChon(d); }
      $('moDaChon').textContent = (!d.con && !c.cuu ? 'Luyện tập — không tính điểm. ' : '') + 'Chờ cô lật đáp án nhé…';
      if (d.khoa) {
        clearInterval(s.dem);
        $('demGio').textContent = '⏰';
        Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = true; });
      } else if (d.tam) { clearInterval(s.dem); $('demGio').textContent = '⏸'; }
      else demNguoc(d.conLai);
      return;
    }
    if (d.pha === 'lat') { if (moi || $('manKq').hidden) veKqChuong(d); return; }
    if (d.pha === 'het') {
      if (moi) veHetChuong(d);
      if (d.dong) { clearTimeout(s.poll); s.ma = ''; xoaLuu(); }
    }
  }
  function veChoChuong(d, vi) {
    var ic, tit, mo;
    if (vi === 'cuu') { ic = '🛟'; tit = 'Câu cứu trợ'; mo = 'Câu này dành cho các bạn đã rời sàn. Em đang trên sàn — nghỉ một chút nhé!'; }
    else if (!d.daBatDau) { ic = '🔔'; tit = 'Em đã lên sàn thi đấu!'; mo = 'Nhìn lên bảng — Rung Chuông Vàng sắp bắt đầu…'; }
    else if (d.con) { ic = '🟡'; tit = 'Em đang trên sàn!'; mo = 'Chờ câu hỏi tiếp theo…'; }
    else if (d.muon) { ic = '👀'; tit = 'Em vào muộn'; mo = 'Em đứng ngoài sàn nhưng vẫn được trả lời để luyện tập (không tính điểm). Cô có thể cho em lên sàn.'; }
    else { ic = '💺'; tit = 'Em đã rời sàn'; mo = 'Em vẫn được trả lời các câu tiếp theo để luyện tập (không tính điểm). Biết đâu sẽ có cứu trợ!'; }
    $('tenCho').textContent = d.ten;
    $('icCho').textContent = ic;
    $('titCho').textContent = tit;
    $('moCho').textContent = mo;
    if ($('manCho').hidden) hien('manCho');
  }
  function veBangChuong(d) {
    var c = d.cau || {}, b = $('rcBang'), t, cls;
    if (c.cuu) { t = '🛟 CÂU CỨU TRỢ — đúng và nhanh để trở lại sàn!'; cls = 'is-cuu'; }
    else if (c.cuoi) { t = '🔔 CÂU CHUÔNG VÀNG' + (d.con ? '' : ' · luyện tập, không tính điểm'); cls = 'is-vang'; }
    else if (d.con) { t = '🟡 Em đang trên sàn — trả lời đúng để ở lại!'; cls = 'is-con'; }
    else { t = 'Em đã rời sàn — luyện tập, không tính điểm'; cls = 'is-luyen'; }
    if (d.khoa) t += ' · ⏰ Hết giờ';
    b.textContent = t;
    b.className = 'ch-rc-bang ' + cls;
    b.hidden = false;
  }
  function veKqChuong(d) {
    clearInterval(s.dem);
    var c = d.cau || s.cau || { opts: [] }, kq = d.kq || {};
    var dung = !!kq.dung, tot = false, ic, tit, cong = '', phu = '';
    if (kq.tinh) saoCau('c' + (d.qid || s.qid), dung);
    if (c.cuu) {
      if (kq.ve) { tot = true; ic = '🛟'; tit = 'Em được cứu trợ, trở lại sàn!'; phu = 'Cố lên — trả lời đúng để ở lại sàn nhé!'; }
      else if (d.con) { tot = true; ic = '🟡'; tit = 'Em vẫn trên sàn'; phu = d.soVe ? d.soVe + ' bạn vừa được cứu trợ trở lại sàn.' : 'Chưa bạn nào được cứu lần này.'; }
      else if (dung) { ic = '⏱'; tit = 'Đúng rồi, nhưng chưa kịp được cứu'; phu = 'Các bạn đúng nhanh hơn đã đủ suất cứu trợ.'; }
      else { ic = d.chon < 0 ? '⏱' : '✗'; tit = 'Chưa được cứu lần này'; }
    } else if (kq.tinh) {
      if (dung) { tot = true; ic = c.cuoi ? '🔔' : '✓'; tit = c.cuoi ? 'Em đã rung chuông vàng!' : '✓ Đúng — em vẫn trên sàn'; cong = '+10'; }
      else { ic = d.chon < 0 ? '⏱' : '✗'; tit = 'Em đã rời sàn'; phu = (d.chon < 0 ? 'Em chưa kịp chọn đáp án. ' : '') + 'Em vẫn được làm tiếp để luyện tập (không tính điểm).'; }
    } else {
      tot = dung; ic = dung ? '✓' : '✗';
      tit = (dung ? 'Đúng rồi' : 'Chưa đúng') + ' — luyện tập, không tính điểm';
    }
    $('manKq').className = 'ch-man ch-kq ch-rc-kq ' + (tot ? 'dung' : 'sai') + (c.cuoi && kq.tinh && dung ? ' is-vang' : '');
    $('kqIc').textContent = ic;
    $('kqTit').textContent = tit;
    $('kqCong').textContent = cong;
    $('kqDung').innerHTML = !dung && d.dung >= 0 && c.opts[d.dung] != null ? 'Đáp án: <b>' + CHU[d.dung] + '. ' + esc(c.opts[d.dung]) + '</b>' : '';
    $('kqHang').innerHTML = 'Trên sàn còn <b>' + d.soCon + '</b> / ' + d.soHs + ' bạn' + (d.soRoi ? ' · ' + d.soRoi + ' bạn vừa rời sàn' : '');
    $('kqViTri').innerHTML = '';
    $('kqWhy').textContent = phu;
    $('nutTiep').hidden = true;
    hien('manKq');
    rung(tot ? [30, 40, 30] : 120);
  }
  function veHetChuong(d) {
    clearInterval(s.dem);
    $('hetIc').textContent = d.vang ? '🔔' : '🏁';
    $('hetTit').textContent = d.vang ? 'Em đã rung chuông vàng!' : 'Kết thúc!';
    $('manHet').className = 'ch-man' + (d.vang ? ' ch-rc-vang' : '');
    $('hetHang').innerHTML = 'Em xếp hạng <b>' + d.hang + '</b> / ' + d.soHs + ' · ' + d.diem + ' điểm' +
      (d.vang ? '' : d.con ? ' · trụ đến cuối' : d.roiCau ? ' · rời sàn ở câu ' + d.roiCau : '');
    $('hetBxh').innerHTML = (d.bxh || []).map(function (r, i) {
      return '<li><span>' + ['🥇', '🥈', '🥉', '4', '5'][i] + '</span><b>' + esc(r.ten) + (r.vang ? ' 🔔' : '') + '</b><i>' + r.diem + 'đ</i></li>';
    }).join('');
    hien('manHet');
    rung(d.vang ? [60, 40, 60, 40, 200] : 60);
  }
  var henCuu = 0;
  function baoCuu(ly) {
    var t = {
      cuu: ['🛟', 'Em được cứu trợ, trở lại sàn!', 'Cố lên — trả lời đúng để ở lại sàn nhé!'],
      phao: ['✈️', 'Máy bay giấy đưa em trở lại sàn!', 'Em được cứu trợ, trở lại sàn! Cơ hội có một không hai — cố lên!'],
      tatcasai: ['↩️', 'Cả sàn cùng sai — em được quay lại sàn!', 'Em được cứu trợ, trở lại sàn! Thi tiếp nào!'],
      gv: ['🟡', 'Cô đã cho em lên sàn!', 'Em được cứu trợ, trở lại sàn!']
    }[ly] || ['🛟', 'Em được cứu trợ, trở lại sàn!', ''];
    $('rcCuuIc').textContent = t[0];
    $('rcCuuTit').textContent = t[1];
    $('rcCuuMo').textContent = t[2];
    $('rcCuu').hidden = false;
    rung([40, 30, 40, 30, 120]);
    clearTimeout(henCuu);
    henCuu = setTimeout(function () { $('rcCuu').hidden = true; }, 5000);
  }
  $('rcCuuOk').addEventListener('click', function () { $('rcCuu').hidden = true; });

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
