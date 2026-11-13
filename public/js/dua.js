// Trang hoc sinh — Cuoc dua ki thu (/dua). May chu: live.js (phong kieu 'dua', /api/live/...).
// Em nhap ma + ten, chon linh vat, tu lam cau theo nhip rieng: dung = linh vat chay len 1 buoc.
// Sau moi 3 / 5 cau (co chon) hien toan canh duong dua. Giu pid/tok trong sessionStorage de tai lai trang van o trong phong.
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var MAN = ['manVao', 'manLv', 'manCho', 'manHoi', 'manKq', 'manTc', 'manXong', 'manHet'];
  var KEY = 'hyv_dua';
  var MAU = ['o0', 'o1', 'o2', 'o3'];
  var CHU = ['A', 'B', 'C', 'D'];
  var s = { ma: '', pid: '', tok: '', ten: '', lv: '', poll: 0, pha: '', i: -1, cau: null, gui: false, canh: null, cho: false, loi: 0, tong: 0, buoc: 0 };
  var LV = window.DuaCanh.LV, THU_TU = window.DuaCanh.THU_TU, anh = window.DuaCanh.anh;

  function hien(id) {
    MAN.forEach(function (m) { $(m).hidden = m !== id; });
    $('chan').hidden = id === 'manVao' || id === 'manLv';
    window.scrollTo(0, 0);
  }
  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function api(method, url, body) {
    return fetch(url, {
      method: method, headers: body ? { 'Content-Type': 'application/json' } : {},
      body: body ? JSON.stringify(body) : undefined, cache: 'no-store'
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d.error || 'Lỗi kết nối'); e.d = d; e.status = r.status; throw e; }
        return d;
      });
    });
  }
  function luu() { try { sessionStorage.setItem(KEY, JSON.stringify({ ma: s.ma, pid: s.pid, tok: s.tok, lv: s.lv, ten: s.ten })); } catch (e) { /* bo qua */ } }
  function xoaLuu() { try { sessionStorage.removeItem(KEY); } catch (e) { /* bo qua */ } }
  function rung(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* bo qua */ } }
  function baoNhanh(txt) {
    var cb = $('chanBao');
    cb.textContent = txt; cb.hidden = false; $('chanTen').hidden = true;
    clearTimeout(s.henBao);
    s.henBao = setTimeout(function () { cb.hidden = true; $('chanTen').hidden = false; }, 3200);
  }
  function veChan() {
    $('chanHinh').src = anh(s.lv);
    $('chanTen').textContent = s.ten;
    $('chanBuoc').textContent = s.buoc + ' bước';
  }

  /* ---------------- vao phong + chon linh vat ---------------- */
  var q0 = new URLSearchParams(location.search);
  // Mo trong khung cua chu phong (On bai cu tren /game): khong can nut sang phong khac
  if (q0.get('chu')) $('nutLai').hidden = true;
  if (q0.get('ma')) $('oMa').value = q0.get('ma').replace(/\D/g, '').slice(0, 6);
  try { $('oTen').value = localStorage.getItem('hyv_choi_ten') || ''; } catch (e) { /* bo qua */ }
  $('formVao').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var ma = $('oMa').value.replace(/\D/g, ''), ten = $('oTen').value.trim();
    $('loiVao').textContent = '';
    if (ma.length !== 6) { $('loiVao').textContent = 'Mã phòng gồm 6 chữ số.'; return; }
    if (!ten) { $('loiVao').textContent = 'Em nhập tên nhé.'; return; }
    s.ma = ma; s.ten = ten;
    try { localStorage.setItem('hyv_choi_ten', ten); } catch (e) { /* bo qua */ }
    $('lvTen').textContent = ten;
    veLv();
    hien('manLv');
  });
  function veLv() {
    $('dsLv').innerHTML = THU_TU.map(function (k) {
      var x = LV[k];
      return '<button type="button" class="du-lv-o' + (s.lv === k ? ' chon' : '') + '" data-lv="' + k + '" role="option" aria-selected="' + (s.lv === k) + '">' +
        '<img src="' + anh(k) + '" alt="" draggable="false"><b lang="zh">' + esc(x.zh) + '</b><small>' + esc(x.py) + ' · ' + esc(x.vn) + '</small></button>';
    }).join('');
    $('nutVaoDua').disabled = !s.lv;
  }
  $('dsLv').addEventListener('click', function (e) {
    var b = e.target.closest('[data-lv]');
    if (!b) return;
    s.lv = b.getAttribute('data-lv');
    rung(20);
    veLv();
  });
  $('nutLvLui').addEventListener('click', function () { hien('manVao'); });
  $('nutVaoDua').addEventListener('click', function () {
    var b = this;
    if (!s.lv) return;
    b.disabled = true;
    $('loiLv').textContent = '';
    api('POST', '/api/live/' + s.ma + '/vao', { ten: s.ten, lv: s.lv }).then(function (d) {
      s.pid = d.pid; s.tok = d.tok; s.ten = d.ten;
      luu(); veChan();
      $('choTen').textContent = s.ten;
      $('choHinh').src = anh(s.lv);
      var x = LV[s.lv];
      $('choLv').innerHTML = 'Linh vật của em: <b lang="zh">' + esc(x.zh) + '</b> ' + esc(x.py) + ' — ' + esc(x.vn);
      hien('manCho');
      batDauPoll();
    }).catch(function (e) {
      $('loiLv').textContent = e.status === 404 ? 'Không tìm thấy phòng — kiểm tra lại mã trên bảng nhé.' : e.message;
      b.disabled = false;
    });
  });

  /* ---------------- hoi trang thai ---------------- */
  function batDauPoll(canh) {
    clearTimeout(s.poll);
    var vong = function () {
      if (!s.ma || !s.pid) return;
      api('GET', '/api/live/' + s.ma + '/hs?pid=' + encodeURIComponent(s.pid) + '&tok=' + encodeURIComponent(s.tok) + (canh ? '&canh=1' : ''))
        .then(function (d) { s.loi = 0; canh = false; ve(d); })
        .catch(function (e) {
          if (e.status === 403 || e.status === 404) { xoaLuu(); clearTimeout(s.poll); s.ma = ''; $('loiVao').textContent = e.message; hien('manVao'); return; }
          s.loi++;
        })
        .then(function () { if (s.ma && !s.cho) s.poll = setTimeout(vong, s.pha === 'choi' ? 2500 : 1500); });
    };
    vong();
  }
  function ve(d) {
    if (d.kieu && d.kieu !== 'dua') { xoaLuu(); location.href = '/choi?ma=' + s.ma; return; }
    s.tong = d.tong || s.tong;
    s.buoc = d.dungSo || 0;
    if (d.lv) s.lv = d.lv;
    veChan();
    (d.tin || []).forEach(function (t) { if (t.loai === 'biVuot') { baoNhanh('⚠️ ' + t.ten + ' vừa vượt lên trước em — chạy nhanh lên! 加油！'); rung([60, 40, 60]); } });
    var doi = d.pha !== s.pha;
    s.pha = d.pha;
    // Phong ban be tu mo (On bai cu tren /game — live.js p.hsChu): chu phong bam Bat dau / Choi lai
    if (d.hsChu && !s.hsChu) {
      s.hsChu = true;
      $('choMo').textContent = 'Chờ bạn chủ phòng bấm Bắt đầu 🔫';
      var moXong = $('manXong').querySelector('p.du-mo');
      if (moXong) moXong.textContent = 'Chờ các bạn về đích để lên bục trao giải nhé.';
    }
    if (d.pha === 'cho') { if (doi || $('manCho').hidden) hien('manCho'); return; }
    if (d.pha === 'het') {
      if (doi || (d.dong && !s.daDong)) veHet(d);
      // chu phong da dong han phong: thoi hoi (phong con giu thi hoi tiep, cho van choi lai)
      if (d.dong) { s.daDong = true; clearTimeout(s.poll); s.ma = ''; s.pid = ''; xoaLuu(); }
      return;
    }
    if (doi) { s.cho = false; s.canh = null; s.i = -1; s.gui = false; } // van moi trong cung phong
    if (s.cho) return; // dang xem ket qua / toan canh
    if (d.xong) { veXong(d); return; }
    if (d.cau && (d.i !== s.i || $('manHoi').hidden)) { s.i = d.i; veCau(d.cau, d); }
  }

  /* ---------------- cau hoi ---------------- */
  function veMini() {
    var pt = s.tong ? Math.min(1, s.buoc / s.tong) : 0;
    $('miniHinh').src = anh(s.lv);
    $('miniHinh').style.left = (pt * 100) + '%';
    $('miniVach').style.width = (pt * 100) + '%';
  }
  function veCau(c, d) {
    s.cau = c;
    $('soCau').textContent = 'Câu ' + (d.i + 1) + '/' + d.tong;
    veMini();
    $('cauLenh').textContent = c.lenh || '';
    $('cauLenh').hidden = !c.lenh;
    var o = $('opts');
    if (c.k && window.CauDT) {
      $('cauZh').textContent = window.CauDT.deBai(c);
      $('cauZh').className = 'du-cau nho';
      $('cauCtx').textContent = '';
      window.CauDT.ve(o, c, function (tl) { gui(tl); });
    } else {
      $('cauZh').className = 'du-cau' + (/[㐀-鿿]/.test(c.zh || '') ? ' zh' : '');
      $('cauZh').textContent = c.zh || '';
      $('cauCtx').textContent = c.ctx || '';
      o.className = 'du-opts n' + c.opts.length;
      o.innerHTML = c.opts.map(function (t, k) {
        return '<button type="button" class="du-opt ' + MAU[k] + '" data-i="' + k + '"' + (/[㐀-鿿]/.test(t) ? ' lang="zh"' : '') + '>' +
          '<span class="du-chu" aria-hidden="true">' + CHU[k] + '</span><span class="du-opt-t">' + esc(t) + '</span></button>';
      }).join('');
    }
    hien('manHoi');
    rung(30);
  }
  $('opts').addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.du-opt') : null;
    if (!b || b.disabled) return;
    b.classList.add('da-chon');
    gui({ chon: +b.getAttribute('data-i') });
  });
  function gui(tl) {
    if (s.gui) return;
    var c = s.cau;
    s.gui = true;
    if (!c.k) Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = true; });
    api('POST', '/api/live/' + s.ma + '/tl', Object.assign({ pid: s.pid, tok: s.tok, i: s.i }, tl)).then(function (r) {
      s.gui = false;
      if (r.dung == null) { s.i = -1; batDauPoll(); return; }
      if (window.SaoGame) { if (r.dung) window.SaoGame.dung(); else window.SaoGame.sai(); }
      s.buoc += r.dung ? 1 : 0;
      veChan();
      s.cho = true;
      clearTimeout(s.poll);
      s.canh = r.dua || null;
      s.xongCuoi = !!r.xong;
      veKq(r, c);
    }).catch(function (e) {
      s.gui = false;
      if (c.k && window.CauDT) window.CauDT.moLai($('opts'));
      else Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = false; });
      s.i = -1;
      batDauPoll();
    });
  }
  function veKq(r, c) {
    $('manKq').className = 'du-man du-kq ' + (r.dung ? 'dung' : 'sai');
    $('kqHinh').src = anh(s.lv);
    $('kqHieu').textContent = r.dung ? '💨' : '💫';
    $('kqTit').textContent = r.dung ? ['Chính xác! 太棒了！', 'Giỏi quá! 很好！', 'Tuyệt vời! 真棒！'][s.buoc % 3] : 'Ôi, vấp ngã rồi!';
    $('kqCong').textContent = r.dung ? '+1 bước · ' + (r.chuoi >= 2 ? '🔥 đúng liền ' + r.chuoi + ' câu' : 'chạy tiếp nào!') : 'Đứng dậy chạy tiếp nhé — câu sau sẽ đúng!';
    $('kqDap').innerHTML = r.dung ? '' : 'Đáp án: ' + (c.k && window.CauDT ? window.CauDT.dapHtml(c, r.dap) : '<b>' + CHU[r.dap] + '. ' + esc(c.opts[r.dap] || '') + '</b>');
    $('kqWhy').textContent = r.why ? '💡 ' + r.why : '';
    $('nutTiep').textContent = r.xong ? 'Xem kết quả 🏁' : s.canh ? 'Xem toàn cảnh đường đua 🌳' : 'Câu tiếp →';
    hien('manKq');
    rung(r.dung ? [30, 40, 30] : 140);
  }
  $('nutTiep').addEventListener('click', function () {
    if (s.canh) { veToanCanh(s.canh, 'tcCanh', 'tcHang'); $('nutChayTiep').textContent = s.xongCuoi ? 'Xem kết quả 🏁' : 'Chạy tiếp →'; hien('manTc'); return; }
    tiep();
  });
  $('nutChayTiep').addEventListener('click', tiep);
  function tiep() {
    s.cho = false; s.canh = null; s.i = -1;
    batDauPoll(s.xongCuoi);
  }
  function veToanCanh(d, idCanh, idHang) {
    window.DuaCanh.ve($(idCanh), d, { gon: true });
    var k = (d.ds || []).findIndex(function (r) { return r.la; });
    var me = d.ds[k], tr = k > 0 ? d.ds[k - 1] : null;
    $(idHang).innerHTML = me ? 'Em đang ở <b>hạng ' + d.hang + '/' + d.soHs + '</b> · ' + me.buoc + '/' + d.tong + ' bước' +
      (tr ? '<br><small>Còn <b>' + Math.max(1, tr.buoc - me.buoc) + ' bước</b> nữa để đuổi kịp ' + esc(tr.ten) + '</small>' : (d.hang === 1 && me.buoc > 0 ? '<br><small>👑 Em đang dẫn đầu cả lớp!</small>' : '')) : '';
  }

  /* ---------------- ve dich / ket thuc ---------------- */
  function veXong(d) {
    if (d.dua) veToanCanh(d.dua, 'xongCanh', 'xongHang');
    if ($('manXong').hidden) { hien('manXong'); rung([30, 40, 30, 40, 80]); }
  }
  function veHet(d) {
    s.cho = false;
    var dua = d.dua || { ds: [] };
    var top = dua.ds.slice(0, 3);
    var thu = [1, 0, 2].filter(function (i) { return top[i]; });
    $('hetBuc').innerHTML = thu.map(function (i) {
      var r = top[i];
      return '<div class="du-buc-o b' + (i + 1) + (r.la ? ' la' : '') + '"><span class="du-buc-ten">' + esc(r.ten) + '</span><img src="' + anh(r.lv) + '" alt="">' +
        '<div class="du-buc-khoi"><b>' + ['🥇', '🥈', '🥉'][i] + '</b><small>' + r.buoc + ' bước</small></div></div>';
    }).join('');
    $('hetHang').innerHTML = (dua.hang ? 'Em về <b>hạng ' + dua.hang + '/' + dua.soHs + '</b>' + (dua.hang <= 3 ? ' — xuất sắc! 🎉' : ' — cố lên lần sau nhé!') : '') +
      (d.giu ? '<br><small>Chờ bạn chủ phòng bấm “Chơi lại” để đua ván mới…</small>' : d.hsChu && d.dong ? '<br><small>Bạn chủ phòng đã đóng phòng.</small>' : '');
    hien('manHet');
    if (d.giu) return; // phong con giu de choi lai: van o trong phong
    xoaLuu();
  }
  $('nutLai').addEventListener('click', function () { clearTimeout(s.poll); s.ma = ''; s.pid = ''; $('oMa').value = ''; hien('manVao'); });

  /* ---------------- tai lai trang: vao lai phong cu ---------------- */
  try {
    var cu = JSON.parse(sessionStorage.getItem(KEY) || 'null');
    if (cu && cu.ma && cu.pid) {
      s.ma = cu.ma; s.pid = cu.pid; s.tok = cu.tok; s.lv = cu.lv || ''; s.ten = cu.ten || '';
      veChan();
      $('choTen').textContent = s.ten; $('choHinh').src = anh(s.lv);
      hien('manCho');
      batDauPoll();
    }
  } catch (e) { /* bo qua */ }
})();
