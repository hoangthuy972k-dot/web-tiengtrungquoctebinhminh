// Trang hoc sinh: vao phong bang ma, bam dap an tren dien thoai.
// May chu: live.js (/api/live/...). Giu pid/tok trong sessionStorage de
// lo tai lai trang van o trong phong.
// Phong kieu 'tro': moi em choi Tu ngu biet bay / Doan tau tri thuc o che do mot nguoi
// (lop-bay.js / lop-doantau.js, cung duong choi voi /game) roi bao tien do + diem len may chu.
// Phong kieu 'keo' (Keo co qua ma QR): chon to; to dang dau tra loi cau co ra (giong phong 'gv'),
// to khac xem va co vu; lat dap an thi biet to minh co keo duoc nac nao khong.
(function () {
  'use strict';
  var $ = function (s) { return document.getElementById(s); };
  var MAN = ['manVao', 'manCho', 'manTo', 'manHoi', 'manDaChon', 'manKq', 'manHet', 'manXong', 'manOt'];
  var HINH = ['▲', '◆', '●', '■'];
  var CHU = ['A', 'B', 'C', 'D']; // Rung Chuong Vang dung chu cai nhu tren man chieu
  var KEY = 'hyv_choi';
  var s = { ma: '', pid: '', tok: '', qid: -1, pha: '', daChon: -1, poll: 0, dem: 0, conLai: 0, tai: 0, nhip: false, nhipI: -1, dangPh: false,
    chuong: false, cuuSeq: null, rcKhoa: '', rcNghi: false, rcVeQid: -1,
    troMo: '', troTai: false, troPhu: null, troSao: '', tienHen: 0, tienCho: null, troVan: -1, troToKy: '',
    onto: false, otGui: false, otKy: '', otLuot: 0, otDang: false };
  // Hinh minh hoa SVG (/images/game/duel-*.svg) thay cho emoji / ky hieu chu
  var ANH = '/images/game/duel-';
  var IC = { '✓': 'dung', '✗': 'sai', '⏱': 'gio', '🔔': 'bell', '🛟': 'phao', '🟡': 'san', '👀': 'mascot',
    '💺': 'ghe', '✈️': 'maybay', '↩️': 'quaylai', '🏁': 'finish', '🎉': 'tiec' };
  function hinh(ten, alt, cls) {
    return '<img' + (cls ? ' class="' + cls + '"' : '') + ' src="' + ANH + ten + '.svg" alt="' + (alt || '') + '" draggable="false">';
  }
  function datIc(el, ic) { if (IC[ic]) el.innerHTML = hinh(IC[ic]); else el.textContent = ic; }
  function huyChuong(i) { return i < 3 ? hinh('medal-' + (i + 1), String(i + 1), 'ch-huy') : String(i + 1); }
  function kyHieu(i) { return s.chuong ? CHU[i] : hinh('hinh-' + i, HINH[i]); }

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
      // Phong Cuoc dua ki thu: sang /dua de chon linh vat
      if (e.d && e.d.dua) {
        try { localStorage.setItem('hyv_choi_ten', ten); } catch (er) { /* bo qua */ }
        location.href = '/dua?ma=' + ma;
        return;
      }
      // Ma cua phong Thi tren lop (/thi) chu khong phai phong choi -> chuyen sang phong thi
      if (e.status === 404) {
        return fetch('/api/thi-lop/' + ma + '/thong-tin').then(function (r) {
          if (r.ok) { location.href = '/thi?ma=' + ma; return; }
          $('loiVao').textContent = e.message;
        }, function () { $('loiVao').textContent = e.message; });
      }
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
        .then(function () { if (s.ma) s.poll = setTimeout(vong, s.onto && s.pha === 'lat' ? 700 : s.pha === 'hoi' ? 1000 : 1500); });
    };
    vong();
  }
  function veRa(msg) {
    s.ma = '';
    clearTimeout(s.poll);
    dongTro();
    hien('manVao');
    $('loiVao').textContent = msg || '';
  }

  function ve(d) {
    // vao phong khac (khong tai lai trang): bo co cua kieu phong truoc
    s.nhip = d.kieu === 'nhip';
    if (d.kieu === 'chuong') { veChuong(d); return; }
    if (s.chuong) boChuong();
    if (s.onto && d.kieu !== 'onto') $('moDaChon').textContent = 'Chờ cô lật đáp án nhé…'; // vua roi phong on bai theo to
    s.onto = d.kieu === 'onto';
    if (s.onto) { veOnTo(d); return; }
    if (d.kieu === 'tro') { veTro(d); return; }
    if (d.kieu === 'keo') { veKeo(d); return; }
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
    $('cauLenh').textContent = c.lenh || '';
    $('cauLenh').hidden = !c.lenh;
    $('demGio').hidden = !!s.nhip && !s.han;
    var o = $('opts');
    // xep cau (keo tha) / noi tu: ve bang cau-dt.js
    if (c.k && window.CauDT) {
      $('cauZh').textContent = window.CauDT.deBai(c);
      $('cauZh').className = 'ch-cau ch-cau-nho';
      window.CauDT.ve(o, c, function (tl) { if (s.onto) guiOnTo(tl, c); else guiNhip(tl, c); });
      s.cau = c;
      hien('manHoi');
      rung(40);
      return;
    }
    $('cauZh').className = 'ch-cau';
    $('cauZh').textContent = (c.ctx ? '🗣️ ' + c.ctx + String.fromCharCode(10) : '') + (c.zh || '');
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
    if (s.onto) { guiOnTo({ chon: i }, c); return; }
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
    datIc($('kqIc'), dung ? '✓' : d.chon < 0 ? '⏱' : '✗');
    $('kqTit').textContent = dung ? 'Chính xác!' : d.chon < 0 ? 'Chưa kịp chọn' : 'Chưa đúng rồi';
    $('kqCong').textContent = dung ? '+' + d.cong + (d.chuoi >= 2 ? '  🔥 chuỗi ' + d.chuoi : '') : '';
    $('kqDung').innerHTML = !dung && d.dung >= 0 ? 'Đáp án: <b>' + HINH[d.dung] + ' ' + esc(c.opts[d.dung] || '') + '</b>' : '';
    $('kqHang').innerHTML = d.hang ? 'Hạng <b>' + d.hang + '</b> / ' + d.soHs + doiHang(d.hangCu, d.hang) : '';
    $('kqViTri').innerHTML = d.hang === 1 && d.hangCu > 1 ? '<div class="ch-vt-dau">' + hinh('crown', '', 'ch-ic-mien') + ' Bạn đang dẫn đầu!</div>'
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
      return '<li><span>' + huyChuong(i) + '</span><b>' + esc(r.ten) + '</b><i>' + r.diem + '</i></li>';
    }).join('');
    hien('manHet');
    // Phong ban be tu mo con giu de choi lai: van o trong phong, cho chu phong bam "Choi lai"
    if (d.giu) { $('hetHang').innerHTML += '<br><small>Chờ bạn chủ phòng bấm “Chơi lại” để chơi ván mới…</small>'; return; }
    if (d.hsChu && d.dong) $('hetHang').innerHTML += '<br><small>Bạn chủ phòng đã đóng phòng.</small>';
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
      '<span class="ch-nui-co">' + hinh('finish') + '</span>' + cham +
      '<b class="ch-nui-em" style="left:' + x0 + '%;bottom:' + (x0 * 0.9) + '%">Em</b></div>';
  }
  function nhomHtml(vt, tieuDe) {
    return '<div class="ch-chang"><div class="ch-chang-tit">' + tieuDe + '</div>' + vt.nhom.map(function (r, k) {
      var cach = k && r.hang - vt.nhom[k - 1].hang > 1 ? '<div class="ch-chang-cach">⋯</div>' : '';
      return cach + '<div class="ch-chang-hang' + (r.la ? ' la' : '') + '"><span>' + (r.hang <= 3 ? huyChuong(r.hang - 1) : r.hang) + '</span>' +
        '<b>' + esc(r.ten) + (r.la ? ' (bạn)' : '') + '</b><i>' + r.dungSo + ' câu</i></div>';
    }).join('') + '</div>';
  }
  function viTriHtml(vt, r) {
    var h = '';
    if (r.dauBang) h += '<div class="ch-vt-dau">' + hinh('crown', '', 'ch-ic-mien') + ' Bạn đang dẫn đầu!</div>';
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
  // Thong bao nhanh (vd ban vuot minh): dang lam bai thi hien trong thanh diem duoi day man hinh
  // de khong de len cau hoi / dap an; chua co thanh diem thi moi dung o noi phia tren.
  function baoNhanh(txt) {
    var chan = $('chan'), cb = $('chanBao');
    if (chan && cb && !chan.hidden) {
      cb.textContent = txt;
      cb.hidden = false;
      $('chanTen').hidden = true;
      clearTimeout(henBao);
      henBao = setTimeout(function () { cb.hidden = true; $('chanTen').hidden = false; }, 3200);
      return;
    }
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
      if (t.loai === 'biVuot') { baoNhanh('⚠️ ' + t.ten + ' vừa vượt bạn — cố lên! 加油！'); rung([60, 40, 60]); }
    });
    // Phong ban be tu mo (On bai cu tren /game — live.js p.hsChu): khong co co giao, chu phong bam Bat dau / Choi lai
    if (d.hsChu && !s.hsChu) {
      s.hsChu = true;
      $('titCho').textContent = 'Em đã vào phòng!';
      $('moCho').textContent = 'Chờ bạn chủ phòng bấm Bắt đầu nhé…';
      var moXong = $('manXong').querySelector('p.ch-mo:last-of-type');
      if (moXong) moXong.textContent = 'Chờ các bạn làm xong để xem bảng vàng nhé.';
    }
    // Ghe nong (phong co dong ho chung): hien dong ho dem nguoc tren cau hoi
    s.han = d.han || 0;
    if (s.han && d.pha === 'choi' && d.conLai != null) demNguoc(d.conLai); else if (s.han) clearInterval(s.dem);
    if (d.pha === 'cho') { if (doi) hien('manCho'); return; }
    // het van: phong con giu (d.giu) thi hoi tiep de cho van choi lai; chu phong dong han (d.dong) moi thoi
    if (d.pha === 'het') { if (doi || (s.giu && !d.giu)) { s.dangPh = false; veHet(d); } s.giu = !!d.giu; return; }
    if (doi) { s.nhipI = -1; s.dangPh = false; } // van moi trong cung phong
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
  function chonNhip(i, c) { guiNhip({ chon: i }, c); }
  // tl = { chon } (trac nghiem) | { xep } | { noi } — xem cau-hoi.js
  function guiNhip(tl, c) {
    if (s.dangPh) return;
    s.dangPh = true;
    if (!c.k) Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = true; });
    rung(25);
    api('POST', '/api/live/' + s.ma + '/tl', Object.assign({ pid: s.pid, tok: s.tok, i: s.nhipI }, tl)).then(function (r) {
      $('chanDiem').textContent = r.diem;
      if (r.dung == null) { s.dangPh = false; s.nhipI = -1; return; }
      saoCau('n' + s.nhipI, r.dung);
      $('manKq').className = 'ch-man ch-kq ' + (r.dung ? 'dung' : 'sai');
      datIc($('kqIc'), r.dung ? '✓' : '✗');
      $('kqTit').textContent = r.dung ? 'Chính xác!' : 'Chưa đúng rồi';
      $('kqCong').textContent = r.dung ? '+' + r.cong + (r.chuoi >= 2 ? '  🔥 chuỗi ' + r.chuoi : '') : '';
      $('kqDung').innerHTML = r.dung ? '' : c.k && window.CauDT ? 'Đáp án: ' + window.CauDT.dapHtml(c, r.dap) : 'Đáp án: <b>' + HINH[r.dap] + ' ' + esc(c.opts[r.dap] || '') + '</b>';
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
      if (e.status !== 409) {
        if (c.k && window.CauDT) window.CauDT.moLai($('opts'));
        else Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = false; });
      }
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
    datIc($('icCho'), '👀'); $('titCho').textContent = 'Em đã vào lớp!';
    $('moCho').textContent = 'Nhìn lên bảng, câu hỏi sắp hiện ra…';
    $('moDaChon').textContent = 'Chờ cô lật đáp án nhé…';
    datIc($('hetIc'), '🏁'); $('hetTit').textContent = 'Kết thúc!';
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
    datIc($('icCho'), ic);
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
    datIc($('kqIc'), ic);
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
    datIc($('hetIc'), d.vang ? '🔔' : '🏁');
    $('hetTit').textContent = d.vang ? 'Em đã rung chuông vàng!' : 'Kết thúc!';
    $('manHet').className = 'ch-man' + (d.vang ? ' ch-rc-vang' : '');
    $('hetHang').innerHTML = 'Em xếp hạng <b>' + d.hang + '</b> / ' + d.soHs + ' · ' + d.diem + ' điểm' +
      (d.vang ? '' : d.con ? ' · trụ đến cuối' : d.roiCau ? ' · rời sàn ở câu ' + d.roiCau : '');
    $('hetBxh').innerHTML = (d.bxh || []).map(function (r, i) {
      return '<li><span>' + huyChuong(i) + '</span><b>' + esc(r.ten) + (r.vang ? ' ' + hinh('bell', 'chuông vàng', 'ch-ic-nho') : '') + '</b><i>' + r.diem + 'đ</i></li>';
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
    datIc($('rcCuuIc'), t[0]);
    $('rcCuuTit').textContent = t[1];
    $('rcCuuMo').textContent = t[2];
    $('rcCuu').hidden = false;
    rung([40, 30, 40, 30, 120]);
    clearTimeout(henCuu);
    henCuu = setTimeout(function () { $('rcCuu').hidden = true; }, 5000);
  }
  $('rcCuuOk').addEventListener('click', function () { $('rcCuu').hidden = true; });

  /* ---- Tro choi tren dien thoai (phong kieu 'tro'): Tu ngu biet bay / Doan tau tri thuc ---- */
  var TEN_TRO = { bay: '🦋 Từ ngữ biết bay', doantau: '🚂 Đoàn tàu tri thức' };
  function mayTro(tro) { return tro === 'doantau' ? window.LopDoanTau : window.LopBay; }
  var MAU_TO = ['#e0573f', '#3f88c5', '#4f9d69', '#e8a33d'];
  function veTro(d) {
    var doi = d.pha !== s.pha;
    s.pha = d.pha;
    $('chanDiem').textContent = d.diem;
    $('chanTen').textContent = d.ten;
    var toEm = d.dsTo && d.to >= 0 ? d.dsTo[d.to] : null;
    $('chanTen').textContent = d.ten + (toEm ? ' · ' + toEm.ten : '');
    // co dong han phong: thoi hoi, xem ket qua lan cuoi
    if (d.dong) { dongTro(); veHetTro(d); clearTimeout(s.poll); s.ma = ''; xoaLuu(); return; }
    // phong chia to ma em chua chon to: chon truoc (vao muon cung chon duoc)
    if (d.dsTo && d.to < 0) { dongTro(); veChonTo(d); return; }
    if (d.pha === 'cho') {
      if (doi || $('manCho').hidden) {
        datIc($('icCho'), '👀');
        $('tenCho').textContent = d.ten + (toEm ? ' · ' + toEm.ten : '');
        $('titCho').textContent = 'Em đã vào phòng!';
        $('moCho').textContent = 'Trò chơi: ' + (TEN_TRO[d.tro] || '') + '. ' + (toEm ? 'Em thi cho ' + toEm.ten + ' — điểm tổ là điểm trung bình của cả tổ. ' : '') +
          'Chờ cô bấm Bắt đầu rồi chơi ngay trên điện thoại nhé…';
        hien('manCho');
      }
      return;
    }
    if (d.pha === 'het') {
      dongTro();
      if (doi || $('manHet').hidden) veHetTro(d);
      return;
    }
    // dang choi — co bam Choi lai (van moi) thi dong van cu
    if (s.troMo && s.troVan !== d.van) dongTro();
    if (d.xong) {
      if (s.troMo) { veHangTro(d.hang, d.soHs, toEm); return; } // dang xem man ket qua trong tro
      // tai lai trang sau khi da xong: hien man "em lam xong roi"
      $('xongTk').textContent = 'Em được ' + d.diem + ' điểm' + (d.tong ? ' · ' + d.dungSo + '/' + d.tong : '');
      $('xongHang').innerHTML = d.hang ? 'Hạng <b>' + d.hang + '</b> / ' + d.soHs : '';
      $('xongViTri').innerHTML = '';
      if ($('manXong').hidden) hien('manXong');
      return;
    }
    if (!s.troMo && !s.troTai) moTro(d);
  }
  // Lay bo cau cua phong roi mo tro o che do mot nguoi (khong dong duoc, khong choi lai)
  function moTro(d) {
    var may = mayTro(d.tro);
    if (!may) return;
    s.troTai = true;
    api('GET', '/api/live/' + s.ma + '/du?pid=' + encodeURIComponent(s.pid) + '&tok=' + encodeURIComponent(s.tok)).then(function (du) {
      s.troTai = false;
      if (!s.ma || s.pha !== 'choi') return;
      s.troMo = du.tro;
      s.troVan = du.van;
      s.troPhu = null;
      s.troSao = '';
      var mot = { batNgay: true, choiLai: false, nutVe: null, dong: false, onTienDo: guiTien, onXong: xongTro };
      var opt = du.opt || {};
      if (du.tro === 'doantau') { mot.soToa = du.cau.length + 1; mot.muc = opt.muc || 'vua'; }
      else { mot.so = du.cau.length; mot.toc = opt.toc || 'vua'; mot.nhieu = opt.nhieu || 0; }
      mayTro(du.tro).mo({ cau: du.cau, nhan: 'Phòng ' + s.ma, mot: mot });
      rung(40);
    }).catch(function () { s.troTai = false; /* lan hoi sau thu lai */ });
  }
  function dongTro() {
    clearTimeout(s.tienHen);
    s.tienHen = 0; s.tienCho = null;
    if (s.troMo) { var may = mayTro(s.troMo); if (may) may.dong(); }
    s.troMo = ''; s.troPhu = null; s.troTai = false;
  }
  function postTien(tt) {
    return api('POST', '/api/live/' + s.ma + '/tien', Object.assign({ pid: s.pid, tok: s.tok, van: s.troVan }, tt)).then(function (r) {
      $('chanDiem').textContent = r.diem;
      return r;
    });
  }
  // Tien do giua van: gop lai, toi da ~1 lan / 0,8 giay
  function guiTien(tt) {
    if (!s.ma) return;
    s.tienCho = tt;
    if (s.tienHen) return;
    s.tienHen = setTimeout(function () {
      s.tienHen = 0;
      var t = s.tienCho;
      s.tienCho = null;
      if (t && s.ma) postTien(t).catch(function () { /* mat mang: lan sau gui tiep */ });
    }, 800);
  }
  // Het van: gui ket qua cuoi (thu lai neu mang chap chon), hien thu hang trong man ket qua cua tro
  function xongTro(kq, phu) {
    clearTimeout(s.tienHen);
    s.tienHen = 0; s.tienCho = null;
    s.troPhu = phu;
    s.troSao = window.SaoGame ? window.SaoGame.tongKetHtml() : '';
    if (phu) phu.innerHTML = '<div class="tc-dong is-nhe">Đang gửi kết quả…</div>';
    var lan = 0;
    var gui = function () {
      lan++;
      postTien(kq).then(function (r) { veHangTro(r.hang, r.soHs, null); rung([30, 40, 30]); }).catch(function (e) {
        if (e.status === 409 || lan >= 4) {
          if (s.troPhu) s.troPhu.innerHTML = '<div class="tc-dong is-nhe">' + esc(e.status === 409 ? 'Cô đã kết thúc phòng trước khi em gửi kết quả.' : 'Chưa gửi được kết quả — kiểm tra mạng nhé.') + '</div>';
          return;
        }
        setTimeout(gui, 1500);
      });
    };
    gui();
  }
  // toEm: to cua em (phong chia to) { ten, hang, diem, soTv, soXong }
  function veHangTro(hang, soHs, toEm) {
    var ky = hang + '/' + soHs + (toEm ? '/' + toEm.hang + '/' + toEm.diem + '/' + toEm.soXong : '');
    if (!s.troPhu || !hang || s.troPhu.getAttribute('data-hang') === ky) return;
    s.troPhu.setAttribute('data-hang', ky);
    var con = toEm ? toEm.soTv - toEm.soXong : 0;
    s.troPhu.innerHTML = '<div class="tc-dong is-hang">🏅 Em đang xếp hạng <b>' + hang + '</b> / ' + soHs + '</div>' +
      (toEm ? '<div class="tc-dong is-to">👥 <b>' + esc(toEm.ten) + '</b> đang hạng ' + toEm.hang + ' · ' + toEm.diem + ' điểm' +
        (con > 0 ? '<br>Còn <b>' + con + ' bạn</b> trong tổ chưa xong — cổ vũ các bạn nhé! 加油！' : '<br>✓ Cả tổ đã xong!') + '</div>' : '') +
      s.troSao + '<div class="tc-dong is-nhe">Chờ cô kết thúc để xem bảng vàng nhé!</div>';
  }
  // Chon to: nut lon theo mau to, kem so ban da vao
  function veChonTo(d) {
    var ky = d.dsTo.map(function (x) { return x.ten + ':' + x.soTv; }).join('|');
    var nut = $('dsTo').querySelectorAll('[data-to]');
    // da co nut: chi cap nhat so ban (khong ve lai de nut khong nhay lai)
    if (nut.length === d.dsTo.length && !$('manTo').hidden) {
      d.dsTo.forEach(function (x, i) { nut[i].querySelector('small').textContent = x.soTv + ' bạn'; nut[i].disabled = false; });
    } else if (s.troToKy !== ky || $('manTo').hidden) {
      s.troToKy = ky;
      $('tenTo').textContent = d.ten;
      $('moTo').textContent = s.onto ? 'Cả lớp cùng trả lời từng câu — tổ có từ ' + Math.round((d.nguong || 0.5) * 100) + '% bạn đúng trở lên được chơi lượt đó. Bạn đúng nhanh nhất làm đội trưởng!'
        : 'Điểm tổ là điểm trung bình của cả tổ, cả tổ cùng xong còn được thưởng — cùng cố gắng nhé!';
      $('dsTo').innerHTML = d.dsTo.map(function (x, i) {
        return '<button type="button" class="ch-to-nut" data-to="' + i + '" style="--c:' + (x.mau || MAU_TO[i % 4]) + '"><b>' + esc(x.ten) + '</b><small>' + x.soTv + ' bạn</small></button>';
      }).join('');
    }
    if ($('manTo').hidden) hien('manTo');
  }
  $('dsTo').addEventListener('click', function (e) {
    var b = e.target.closest('[data-to]');
    if (!b || !s.ma) return;
    Array.prototype.forEach.call($('dsTo').querySelectorAll('button'), function (x) { x.disabled = true; });
    rung(30);
    api('POST', '/api/live/' + s.ma + '/to', { pid: s.pid, tok: s.tok, to: +b.getAttribute('data-to') })
      .then(function () { s.troToKy = ''; batDauPoll(); })
      .catch(function (er) { baoNhanh(er.message); s.troToKy = ''; batDauPoll(); });
  });
  /* ---- Keo co qua ma QR (phong kieu 'keo') ---- */
  function veKeo(d) {
    var moi = d.qid !== s.qid || d.pha !== s.pha;
    s.pha = d.pha;
    var k = d.keo, toEm = d.to >= 0 ? d.dsTo[d.to] : null;
    $('chanDiem').textContent = d.diem;
    $('chanTen').textContent = d.ten + (toEm ? ' · ' + toEm.ten : '');
    if (d.dong) { clearInterval(s.dem); veHetKeo(d); clearTimeout(s.poll); s.ma = ''; xoaLuu(); return; }
    if (d.to < 0) { veChonTo(d); return; }
    var dau = d.to === k.L || d.to === k.R;
    var tran = k.tenL + ' ⚔ ' + k.tenR;
    // to em khong dau tran nay, hoac chua co cau hoi: man cho (co vu)
    if (!dau || d.pha === 'cho' || d.pha === 'het') {
      clearInterval(s.dem);
      var ky = 'cho:' + d.pha + ':' + k.L + ':' + k.R + ':' + k.nac + ':' + k.thang + ':' + d.to;
      if (s.keoKy !== ky || $('manCho').hidden) {
        s.keoKy = ky;
        datIc($('icCho'), dau ? '👀' : '🎉');
        $('tenCho').textContent = d.ten + (toEm ? ' · ' + toEm.ten : '');
        $('titCho').textContent = k.thang >= 0 ? '🏆 ' + d.dsTo[k.thang].ten + ' thắng kéo co!' : dau ? 'Tổ em vào trận: ' + tran : 'Tổ em đang cổ vũ';
        $('moCho').innerHTML = (dau ? 'Câu hỏi sẽ hiện trên điện thoại — cả tổ cùng trả lời đúng thật nhanh để kéo dây!'
          : 'Trận đang đấu: <b>' + esc(tran) + '</b>. Chờ lượt ' + esc(toEm.ten) + ' nhé!') + dayHtml(k);
        hien('manCho');
      }
      return;
    }
    if (d.pha === 'hoi') {
      if (d.qid !== s.qid) { s.qid = d.qid; s.daChon = -1; veCau(d); }
      if (d.chon >= 0 && s.daChon < 0) { s.daChon = d.chon; veDaChon(d); $('moDaChon').textContent = 'Chờ cô lật đáp án — xem tổ nào kéo được dây nhé!'; }
      demNguoc(d.conLai);
      return;
    }
    if (d.pha === 'lat' && (moi || $('manKq').hidden)) {
      s.qid = d.qid;
      veKq(d);
      var kq = d.kq || {}, ben = kq.L && kq.L.to === d.to ? kq.L : kq.R;
      $('kqCong').textContent = '';
      $('kqHang').innerHTML = (kq.keo >= 0 ? (kq.keo === d.to ? '💪 <b>Tổ em</b> kéo được 1 nấc!' : '😮 <b>' + esc(d.dsTo[kq.keo].ten) + '</b> kéo được 1 nấc') : 'Hòa — dây đứng yên') +
        (ben ? '<br><small>Tổ em đúng ' + ben.dung + '/' + ben.soTv + ' bạn</small>' : '') +
        (kq.thang >= 0 ? '<br>🏆 <b>' + esc(d.dsTo[kq.thang].ten) + '</b> thắng kéo co!' : '') + dayHtml(k);
    }
  }
  // Day keo nho: co o giua, lech ve to dang keo
  function dayHtml(k) {
    var pt = 50 + k.nac * (42 / Math.max(1, k.max));
    return '<span class="ch-keo-day"><i style="left:' + pt + '%"></i><b class="l">' + esc(k.tenL) + '</b><b class="r">' + esc(k.tenR) + '</b></span>';
  }
  function veHetKeo(d) {
    datIc($('hetIc'), '🏁');
    $('hetTit').textContent = 'Kết thúc kéo co!';
    $('manHet').className = 'ch-man';
    $('hetHang').innerHTML = 'Em trả lời đúng <b>' + d.diem + '</b> câu';
    $('hetBxh').innerHTML = '';
    hien('manHet');
  }
  // Het van: thu hang ca nhan + bang to; phong van mo thi cho co bam Choi lai
  function veHetTro(d) {
    clearInterval(s.dem);
    var toEm = d.dsTo && d.to >= 0 ? d.dsTo[d.to] : null;
    datIc($('hetIc'), '🏁');
    $('hetTit').textContent = d.dong ? 'Kết thúc!' : 'Hết ván!';
    $('manHet').className = 'ch-man';
    $('hetHang').innerHTML = (d.hang ? 'Em xếp hạng <b>' + d.hang + '</b> / ' + d.soHs + ' · ' + d.diem + ' điểm' : '') +
      (toEm ? '<br>👥 ' + esc(toEm.ten) + ' xếp hạng <b>' + toEm.hang + '</b> · ' + toEm.diem + ' điểm' : '') +
      (d.dong ? '' : '<br><small>Chờ cô bấm “Chơi lại” để chơi ván mới…</small>');
    var ds = d.dsTo ? d.dsTo.slice().sort(function (a, b) { return a.hang - b.hang; }) : (d.bxh || []);
    $('hetBxh').innerHTML = ds.map(function (r, i) {
      return '<li><span>' + huyChuong(i) + '</span><b>' + esc(r.ten) + '</b><i>' + r.diem + '</i></li>';
    }).join('');
    hien('manHet');
  }

  /* ---- On bai theo to qua ma QR (phong kieu 'onto'): Gap thu bong / Xay lau dai / Duong bang bi mat ----
     Chon to -> moi vong tra loi cau chung (trac nghiem / xep / noi) -> lat: dung / sai + to em dung x/n ban;
     neu em la doi truong luot nay (dung nhanh nhat cua to duoc thuong) thi hien man chon (THA / manh / o bang / to). */
  var TEN_OT = { gapthu: '🧸 Gắp thú bông', laudai: '🏰 Xây lâu đài', duongbang: '🐧 Đường băng bí mật' };
  var DONG_OT = { gapthu: 'gắp thú', laudai: 'xây thêm mảnh', duongbang: 'bước lên ô băng' };
  var NHAN_O = { '': '❓ Chưa lật', an: '✓ An toàn', daan: '✓ An toàn', ca: '🐟 Cá thưởng', nut: '💦 Lỗ nước' };
  function phanTram() { return Math.round((s.otNguong || 0.5) * 100); }
  function veOnTo(d) {
    var toEm = d.to >= 0 ? d.dsTo[d.to] : null;
    s.otGame = d.game; s.otNguong = d.nguong;
    $('chanTen').textContent = d.ten + (toEm ? ' · ' + toEm.ten : '');
    $('chanDiem').textContent = d.diem;
    if (d.dong) { clearInterval(s.dem); clearInterval(s.otDem); veHetOnTo(d); clearTimeout(s.poll); s.ma = ''; xoaLuu(); return; }
    if (d.to < 0) { clearInterval(s.dem); s.pha = ''; veChonTo(d); return; }
    s.pha = d.pha;
    if (d.pha === 'cho') {
      clearInterval(s.dem); clearInterval(s.otDem);
      var ky = 'cho:' + d.van + ':' + d.to;
      if (s.otKy !== ky || $('manCho').hidden) {
        s.otKy = ky;
        s.qid = d.qid;
        datIc($('icCho'), '👀');
        $('tenCho').textContent = d.ten + ' · ' + toEm.ten;
        $('titCho').textContent = 'Em thi cho ' + toEm.ten + '!';
        $('moCho').innerHTML = 'Trò chơi: <b>' + (TEN_OT[d.game] || '') + '</b>. Mỗi vòng cả lớp cùng trả lời một câu — tổ có từ ' + phanTram() + '% bạn đúng được ' +
          DONG_OT[d.game] + '. Trả lời đúng <b>nhanh nhất tổ</b> thì em làm đội trưởng! Chờ cô bắt đầu nhé…';
        hien('manCho');
      }
      return;
    }
    if (d.pha === 'hoi') {
      clearInterval(s.otDem);
      if (d.qid !== s.qid) {
        s.qid = d.qid; s.daChon = -1; s.otGui = !!d.daGui; s.otDang = false; s.otKy = '';
        if (d.daGui) { s.cau = d.cau; veDaGuiOnTo(d); } else veCau(d);
      } else if (d.daGui && !s.otGui) { s.otGui = true; veDaGuiOnTo(d); }
      demNguoc(d.conLai);
      return;
    }
    if (d.pha === 'lat') { clearInterval(s.dem); s.qid = d.qid; veLatOnTo(d); return; }
    if (d.pha === 'het') veHetOnTo(d);
  }
  // tl = { chon } | { xep } | { noi } — may chu cham, chua bao dung / sai truoc khi lat
  function guiOnTo(tl, c) {
    if (s.otGui || s.otDang) return;
    s.otDang = true;
    if (!c.k) Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = true; });
    rung(25);
    api('POST', '/api/live/' + s.ma + '/tl', Object.assign({ pid: s.pid, tok: s.tok, qid: s.qid }, tl)).then(function () {
      s.otDang = false;
      s.otGui = true;
      veDaGuiOnTo({ cau: c, chon: tl.chon != null ? tl.chon : -1 });
    }).catch(function (e) {
      s.otDang = false;
      if (e.status === 409) { $('soCau').textContent = e.message; if (e.d && e.d.chonTo) batDauPoll(); return; }
      if (c.k && window.CauDT) window.CauDT.moLai($('opts'));
      else Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = false; });
      baoNhanh(e.message);
    });
  }
  function veDaGuiOnTo(d) {
    var c = d.cau || s.cau || {};
    if (!c.k && d.chon >= 0 && c.opts) veDaChon({ cau: c, chon: d.chon });
    else {
      $('oDaChon').className = 'ch-chon-o ch-ot-nop';
      $('oDaChon').innerHTML = '<span>📝 Đã nộp bài</span>';
      hien('manDaChon');
    }
    $('moDaChon').textContent = 'Chờ các bạn trong tổ… Tổ có từ ' + phanTram() + '% bạn đúng sẽ được ' + (DONG_OT[s.otGame] || 'chơi') + '!';
  }
  function veLatOnTo(d) {
    var k = d.kq || {}, L = d.luot;
    if (d.daGui) saoCau('ot' + d.van + '-' + d.qid, !!k.dung);
    if (L && L.la && !L.xong) { veLuotOnTo(d, L); return; }
    clearInterval(s.otDem);
    var ky = d.qid + '|' + (L ? L.id + ':' + (L.xong ? 1 : 0) : '-') + '|' + (d.tin || []).map(function (x) { return x.id; }).join(',');
    if (ky === s.otKy && !$('manKq').hidden) return;
    var moi = $('manKq').hidden || String(s.otKy).split('|')[0] !== String(d.qid);
    s.otKy = ky;
    var c = d.cau || s.cau || { opts: [] }, dung = !!k.dung;
    var toEm = d.dsTo[d.to] || { ten: '' }, x = (k.to || [])[d.to] || { dung: 0, soTv: 0 }, thu = (k.duoc || []).indexOf(d.to);
    $('manKq').className = 'ch-man ch-kq ' + (dung ? 'dung' : 'sai');
    datIc($('kqIc'), dung ? '✓' : d.daGui ? '✗' : '⏱');
    $('kqTit').textContent = dung ? 'Chính xác!' : d.daGui ? 'Chưa đúng rồi' : 'Chưa kịp trả lời';
    $('kqCong').textContent = '';
    $('kqDung').innerHTML = dung ? '' : c.k && window.CauDT ? 'Đáp án: ' + window.CauDT.dapHtml(c, k.dap)
      : c.opts && c.opts[k.dap] != null ? 'Đáp án: <b>' + HINH[k.dap] + ' ' + esc(c.opts[k.dap]) + '</b>' : '';
    var dt = thu >= 0 && k.doiTruong ? k.doiTruong[d.to] : null;
    $('kqHang').innerHTML = '👥 <b>' + esc(toEm.ten) + '</b> đúng ' + x.dung + '/' + x.soTv + ' bạn' +
      (thu >= 0 ? '<br>🎯 Tổ em được ' + DONG_OT[d.game] + ((k.duoc || []).length > 1 ? ' (lượt ' + (thu + 1) + ')' : '') + '!' : '<br><small>Tổ em chưa được lượt này — cố lên câu sau!</small>') +
      (dt ? '<br>👑 Đội trưởng: <b>' + esc(dt.ten) + '</b>' : '');
    var trang = '';
    if (L && !L.xong) {
      trang = L.to === d.to ? '<div class="ch-ot-cho">⏳ Đội trưởng <b>' + esc(L.ten) + '</b> đang chọn…</div>'
        : '<div class="ch-ot-cho is-khac">⏳ <b>' + esc((d.dsTo[L.to] || {}).ten || '') + '</b> đang chơi lượt…</div>';
    } else if (L && L.xong && L.to === d.to) trang = '<div class="ch-ot-cho">👀 Nhìn lên bảng xem kết quả nhé!</div>';
    var tin = (d.tin || []).map(function (t) {
      var m = t.to >= 0 && d.dsTo[t.to] ? d.dsTo[t.to].mau : '';
      return '<li' + (t.to === d.to ? ' class="la"' : '') + (m ? ' style="--c:' + m + '"' : '') + '>' + esc(t.txt) + '</li>';
    }).join('');
    $('kqViTri').innerHTML = trang + (tin ? '<ul class="ch-ot-tin">' + tin + '</ul>' : '');
    $('kqWhy').textContent = k.why ? '💡 ' + k.why : '';
    $('nutTiep').hidden = true;
    if (moi) { hien('manKq'); rung(dung ? [30, 40, 30] : 120); }
  }
  // Man doi truong: chon trong han (dem nguoc theo may chu)
  function veLuotOnTo(d, L) {
    if (s.otLuot !== L.id || $('manOt').hidden) {
      s.otLuot = L.id; s.otKy = ''; s.otDang = false;
      var toEm = d.dsTo[d.to] || { ten: '' };
      $('otTit').textContent = { tha: 'Bấm THẢ đúng lúc!', manh: 'Chọn mảnh ghép', o: 'Chọn một ô băng', cuop: 'Chọn tổ để “mượn” thú' }[L.loai] || 'Chọn nhé!';
      $('otMo').textContent = {
        tha: 'Nhìn cần gắp trên bảng — khi cần ở ngay trên thú bông em muốn thì bấm THẢ!',
        manh: 'Xây mảnh nào cho lâu đài của ' + toEm.ten + '?',
        o: 'Ô nào an toàn? Ô đã lật giống trên bảng; lỗ nước không bước vào được.',
        cuop: 'Lấy ngẫu nhiên 1 thú bông trong tủ của tổ em chọn.'
      }[L.loai] || '';
      var html;
      if (L.loai === 'tha') html = '<button type="button" class="ch-ot-tha" data-v="tha">THẢ!</button>';
      else if (L.loai === 'o') {
        html = '<div class="ch-ot-cot">' + L.ds.map(function (x) {
          return '<button type="button" class="ch-ot-o is-' + (x.loai || 'up') + '" data-v="' + esc(x.v) + '"' + (x.tat ? ' disabled' : '') + '>' +
            '<b>' + esc(x.nhan) + '</b><small>' + (NHAN_O[x.loai || ''] || '') + '</small></button>';
        }).join('') + '</div>';
      } else {
        html = '<div class="ch-ot-ds">' + L.ds.map(function (x) {
          var m = L.loai === 'cuop' && d.dsTo[+x.v] ? d.dsTo[+x.v].mau : '';
          return '<button type="button" class="ch-ot-nut' + (m ? ' is-to' : '') + '" data-v="' + esc(x.v) + '"' + (x.tat ? ' disabled' : '') + (m ? ' style="--c:' + m + '"' : '') + '>' +
            '<b>' + esc(x.nhan) + '</b>' + (x.phu ? '<small>' + esc(x.phu) + '</small>' : '') + '</button>';
        }).join('') + '</div>';
      }
      $('otChon').innerHTML = html;
      hien('manOt');
      rung([60, 40, 60]);
    }
    if (!s.otDang) demOt(L.conLai);
  }
  function demOt(ms) {
    clearInterval(s.otDem);
    var het = Date.now() + (ms || 0);
    var paint = function () {
      var con = Math.max(0, Math.ceil((het - Date.now()) / 1000));
      $('otDem').textContent = con + 's';
      $('otDem').classList.toggle('thap', con <= 3);
      if (con <= 0) clearInterval(s.otDem);
    };
    paint();
    s.otDem = setInterval(paint, 250);
  }
  $('otChon').addEventListener('click', function (e) {
    var b = e.target.closest('[data-v]');
    if (!b || b.disabled || !s.ma || s.otDang) return;
    s.otDang = true;
    Array.prototype.forEach.call($('otChon').querySelectorAll('button'), function (x) { x.disabled = true; });
    b.classList.add('is-chon');
    rung(50);
    api('POST', '/api/live/' + s.ma + '/hanh', { pid: s.pid, tok: s.tok, id: s.otLuot, v: b.getAttribute('data-v') }).then(function () {
      clearInterval(s.otDem);
      $('otDem').textContent = '';
      $('otMo').textContent = 'Đã chọn! Nhìn lên bảng xem kết quả nhé 👀';
    }).catch(function (er) {
      // mat mang: ve lai man chon o lan hoi sau (neu luot van mo); het luot thi lan hoi sau ra ket qua
      s.otDang = false; s.otLuot = 0;
      baoNhanh(er.message);
    });
  });
  function veHetOnTo(d) {
    clearInterval(s.dem); clearInterval(s.otDem);
    var ket = d.ket, toEm = d.to >= 0 ? d.dsTo[d.to] : null;
    var ky = 'het:' + d.van + ':' + (ket ? ket.hang.length : 0) + ':' + (d.dong ? 1 : 0) + ':' + d.diem;
    if (ky === s.otKy && !$('manHet').hidden) return;
    s.otKy = ky;
    var r = ket && toEm ? ket.hang.filter(function (x) { return x.to === d.to; })[0] : null;
    datIc($('hetIc'), r && r.hang === 1 ? '🎉' : '🏁');
    $('hetTit').textContent = r && r.hang === 1 ? toEm.ten + ' vô địch!' : d.dong ? 'Kết thúc!' : 'Hết ván!';
    $('manHet').className = 'ch-man';
    $('hetHang').innerHTML = (r ? '👥 ' + esc(toEm.ten) + ' xếp hạng <b>' + r.hang + '</b> · ' + r.diem + ' ' + esc(ket.don) + '<br>' : '') +
      'Em trả lời đúng <b>' + d.diem + '</b>/' + (d.soCau || 0) + ' câu' + (d.dong ? '' : '<br><small>Chờ cô bấm “Chơi lại” để chơi ván mới…</small>');
    $('hetBxh').innerHTML = ket ? ket.hang.slice().sort(function (a, b) { return a.hang - b.hang; }).map(function (x) {
      return '<li' + (x.to === d.to ? ' class="la"' : '') + '><span>' + huyChuong(x.hang - 1) + '</span><b>' + esc((d.dsTo[x.to] || {}).ten || '') + '</b><i>' + x.diem + ' ' + esc(ket.don) + '</i></li>';
    }).join('') : '';
    hien('manHet');
  }

  /* ---- khoi tao ---- */
  var q = new URLSearchParams(location.search);
  // Mo trong khung cua chu phong (On bai cu tren /game): khong can nut sang phong khac
  if (q.get('chu')) $('nutLai').hidden = true;
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
