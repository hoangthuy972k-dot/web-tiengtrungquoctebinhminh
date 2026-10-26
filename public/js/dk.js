// Trang hoc sinh — Game doi khang keo co 1-1 (/dk). May chu: doikhang.js (/api/dk/...).
// Moi em tu lam cau theo nhip rieng; dung = keo day ve phia minh, sai = khoa 1.5 giay.
// Giu pid/tok trong sessionStorage de lo tai lai trang van o trong phong.
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var MAN = ['manVao', 'manCho', 'manDau', 'manKq', 'manHet'];
  var CHU = ['A', 'B', 'C', 'D'];
  var KEY = 'hyv_dk';
  var NAC = 5;
  var s = {
    ma: '', pid: '', tok: '', poll: 0, tt: null, capId: 0, i: -1, cau: null,
    gui: false, fxDen: 0, fxHen: 0, day: 0, kqId: 0, dem: 0, hetLuc: 0, man: '', ver: 0
  };

  function hien(id) {
    s.man = id;
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
      cache: 'no-store'
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
  function lacLai(el, cls) {
    el.classList.remove(cls);
    void el.offsetWidth; // ep trinh duyet ve lai de hieu ung chay lai tu dau
    el.classList.add(cls);
  }

  /* ---------------- vao phong ---------------- */
  $('formVao').addEventListener('submit', function (ev) {
    ev.preventDefault();
    var ma = $('oMa').value.replace(/\D/g, '');
    var ten = $('oTen').value.trim();
    $('loiVao').textContent = '';
    if (ma.length !== 6) { $('loiVao').textContent = 'Mã phòng gồm 6 chữ số.'; return; }
    if (!ten) { $('loiVao').textContent = 'Em nhập tên nhé.'; return; }
    $('nutVao').disabled = true;
    api('POST', '/api/dk/' + ma + '/vao', { ten: ten }).then(function (d) {
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

  /* ---------------- hoi trang thai ---------------- */
  function batDauPoll() {
    clearTimeout(s.poll);
    var vong = function () {
      if (!s.ma) return;
      if (document.hidden) { s.poll = setTimeout(vong, 1500); return; }
      var ver = s.ver;
      api('GET', '/api/dk/' + s.ma + '/hs?pid=' + encodeURIComponent(s.pid) + '&tok=' + encodeURIComponent(s.tok))
        .then(function (d) { if (ver === s.ver) ve(d); }) // bo qua ket qua cu (gui truoc khi em vua tra loi)
        .catch(function (e) {
          if (e.status === 403 || e.status === 404) { xoaLuu(); veRa(e.message); }
        })
        .then(function () { if (s.ma) s.poll = setTimeout(vong, 700); });
    };
    vong();
  }
  function veRa(msg) {
    s.ma = '';
    clearTimeout(s.poll);
    clearInterval(s.dem);
    hien('manVao');
    $('loiVao').textContent = msg || '';
  }

  function ve(d) {
    if (!d) return;
    s.tt = d;
    $('chanTen').textContent = d.ten;
    $('tenCho').textContent = d.ten;
    $('chanThang').textContent = '🏆 ' + (d.thang || 0);
    if (d.pha === 'het') { veHet(d); return; }
    var c = d.cap;
    if (!c) { veCho(d); return; }
    if (c.id !== s.capId) batDauTran(d);
    veDay(c);
    // dang hien phan hoi dung/sai: de het hieu ung roi moi sang cau / ket qua
    if (s.gui || s.fxDen > Date.now()) return;
    if (c.kq) { veKq(d); return; }
    if (s.man !== 'manDau') hien('manDau');
    if (c.cau) {
      $('hetCau').hidden = true;
      $('hoi').hidden = false;
      if (c.i !== s.i) veCau(c);
    } else {
      $('hoi').hidden = true;
      $('hetCau').hidden = false;
    }
  }

  function veCho(d) {
    clearInterval(s.dem);
    $('titCho').textContent = d.pha === 'cho' ? 'Em đã vào phòng!' : 'Chờ vòng sau nhé!';
    $('moCho').textContent = d.pha === 'cho' ? 'Chờ cô ghép cặp và bắt đầu…'
      : d.pha === 'choi' ? 'Các bạn đang đấu. Em sẽ được ghép cặp ở vòng mới.' : 'Chờ cô bắt đầu vòng mới…';
    $('soCho').textContent = d.soHs ? d.soHs + ' bạn trong phòng' : '';
    if (s.man !== 'manCho') hien('manCho');
  }

  /* ---------------- tran dau ---------------- */
  function batDauTran(d) {
    var c = d.cap;
    s.capId = c.id; s.i = -1; s.day = c.day; s.gui = false; s.fxDen = 0;
    clearTimeout(s.fxHen);
    $('fx').hidden = true;
    $('dauVong').textContent = 'Vòng ' + d.vong;
    $('tenToi').textContent = d.ten;
    $('tenBan').textContent = c.doi;
    $('avBan').textContent = c.doiBot ? '🤖' : '😤';
    demNguoc(c.conLai);
    hien('manDau');
    rung([60, 60, 120]);
  }
  function demNguoc(ms) {
    clearInterval(s.dem);
    s.hetLuc = Date.now() + (ms || 0);
    var paint = function () {
      var con = Math.max(0, Math.ceil((s.hetLuc - Date.now()) / 1000));
      $('dauGio').textContent = '⏱ ' + Math.floor(con / 60) + ':' + ('0' + con % 60).slice(-2);
      $('dauGio').classList.toggle('thap', con <= 10);
      if (con <= 0) clearInterval(s.dem);
    };
    paint();
    s.dem = setInterval(paint, 250);
  }
  // Day: duong = ve phia em (ben trai)
  function veDay(c) {
    var cu = s.day;
    s.day = c.day;
    if (c.conLai && Math.abs(Date.now() + c.conLai - s.hetLuc) > 1500) demNguoc(c.conLai);
    var x = 50 - Math.max(-NAC, Math.min(NAC, c.day)) * (40 / NAC);
    $('dayCo').style.left = x + '%';
    $('san').style.setProperty('--lech', String(c.day));
    $('keoToi').textContent = c.toi;
    $('keoBan').textContent = c.ban;
    $('nac').innerHTML = c.day > 0 ? 'Em đang dẫn <b>' + c.day + '</b> nấc — còn ' + (NAC - c.day) + ' nấc nữa là thắng!'
      : c.day < 0 ? '<span class="nguy">' + esc(c.doi) + ' đang dẫn ' + (-c.day) + ' nấc — kéo lại mau!</span>'
      : 'Hai bên đang ngang nhau';
    if (c.day < cu) {
      // doi thu vua keo
      lacLai($('san'), 'bi-keo');
      rung(35);
    } else if (c.day > cu) {
      lacLai($('san'), 'keo-ve');
    }
  }
  function veCau(c) {
    s.i = c.i;
    s.cau = c.cau;
    $('soCau').textContent = 'Câu ' + (c.i + 1) + '/' + c.tong;
    var q = c.cau;
    $('cauZh').textContent = (q.ctx ? '🗣️ ' + q.ctx + '\n' : '') + (q.zh || '');
    var o = $('opts');
    o.className = 'dk-opts n' + q.opts.length;
    o.innerHTML = q.opts.map(function (t, k) {
      return '<button type="button" class="dk-opt o' + k + '" data-i="' + k + '">' +
        '<span class="dk-chu" aria-hidden="true">' + CHU[k] + '</span>' +
        '<span class="dk-opt-t">' + esc(t) + '</span></button>';
    }).join('');
  }
  $('opts').addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.dk-opt') : null;
    if (!b || b.disabled) return;
    chon(parseInt(b.getAttribute('data-i'), 10));
  });
  function khoaNut(on) {
    Array.prototype.forEach.call($('opts').querySelectorAll('button'), function (b) { b.disabled = on; });
  }

  function chon(k) {
    if (s.gui || s.fxDen > Date.now() || s.i < 0) return;
    s.gui = true;
    khoaNut(true);
    var cau = s.cau;
    var nut = $('opts').querySelector('[data-i="' + k + '"]');
    if (nut) nut.classList.add('da-chon');
    api('POST', '/api/dk/' + s.ma + '/tl', { pid: s.pid, tok: s.tok, i: s.i, chon: k }).then(function (r) {
      s.gui = false;
      s.ver++;
      if (window.SaoGame) { if (r.dung) window.SaoGame.dung(); else window.SaoGame.sai(); }
      phanHoi(r.dung, r.dung ? '' : (CHU[r.dap] + '. ' + (cau && cau.opts[r.dap] || '')), r.dung ? 450 : 1500);
      if (r.tt) { s.tt = r.tt; if (r.tt.cap) veDay(r.tt.cap); }
    }).catch(function (e) {
      s.gui = false;
      if (e.status === 429) { phanHoi(null, '', e.d && e.d.khoa || 800); return; }
      khoaNut(false);
      if (e.d && e.d.tt) { s.i = -1; ve(e.d.tt); }
      else if (e.status === 403) { xoaLuu(); veRa(e.message); }
    });
  }
  // Hien phan hoi: dung (xanh, ngan) / sai (do, kem dap an + thanh khoa 1.5 giay)
  function phanHoi(dung, dap, ms) {
    var fx = $('fx');
    fx.className = 'dk-fx ' + (dung ? 'dung' : 'sai');
    $('fxIc').textContent = dung ? '💪' : dung === false ? '✗' : '⏳';
    $('fxT').textContent = dung ? 'Kéo!' : dung === false ? 'Sai rồi — chờ chút…' : 'Chờ chút…';
    $('fxDap').innerHTML = dap ? 'Đáp án: <b>' + esc(dap) + '</b>' : '';
    var thanh = $('fxKhoa').querySelector('i');
    $('fxKhoa').hidden = !!dung;
    thanh.style.transition = 'none';
    thanh.style.width = '100%';
    void thanh.offsetWidth;
    thanh.style.transition = 'width ' + ms + 'ms linear';
    thanh.style.width = '0%';
    fx.hidden = false;
    rung(dung ? 40 : [90, 60, 90]);
    s.fxDen = Date.now() + ms;
    clearTimeout(s.fxHen);
    s.fxHen = setTimeout(function () {
      fx.hidden = true;
      s.fxDen = 0;
      khoaNut(false);
      if (s.tt) ve(s.tt);
    }, ms);
  }

  /* ---------------- ket qua ---------------- */
  var LY = { keo: 'Kéo dây về tới vạch!', gio: 'Hết giờ — tính theo vị trí dây.', hetcau: 'Hết câu hỏi — tính theo vị trí dây.', dung: 'Cô dừng vòng — tính theo vị trí dây.', bocuoc: 'Đối thủ đã rời trận.' };
  function veKq(d) {
    var c = d.cap;
    clearInterval(s.dem);
    if (s.kqId === c.id && s.man === 'manKq') return;
    s.kqId = c.id;
    var kq = c.kq;
    $('manKq').className = 'dk-man dk-kq ' + kq;
    $('kqIc').textContent = kq === 'thang' ? '🏆' : kq === 'hoa' ? '🤝' : '💪';
    $('kqTit').textContent = kq === 'thang' ? 'Em thắng rồi!' : kq === 'hoa' ? 'Hòa nhau!' : 'Thua mất rồi…';
    $('kqLy').textContent = (kq === 'thua' && c.lyDo === 'keo' ? c.doi + ' kéo dây về trước.' : LY[c.lyDo] || '');
    $('kqSo').innerHTML = 'Em kéo <b>' + c.toi + '</b> · ' + esc(c.doi) + ' kéo <b>' + c.ban + '</b>';
    $('kqTong').textContent = 'Tổng: ' + (d.thang || 0) + ' trận thắng · ' + (d.keo || 0) + ' lần kéo';
    hien('manKq');
    rung(kq === 'thang' ? [40, 40, 40, 40, 160] : 200);
  }
  function veHet(d) {
    clearInterval(s.dem);
    $('hetHang').innerHTML = d.hang ? 'Em xếp hạng <b>' + d.hang + '</b> / ' + d.soHs + ' · ' + (d.thang || 0) + ' trận thắng' : '';
    $('hetBxh').innerHTML = (d.bxh || []).map(function (r, k) {
      return '<li><span>' + ['🥇', '🥈', '🥉', '4', '5'][k] + '</span><b>' + esc(r.ten) + '</b><i>' + r.thang + ' 🏆</i></li>';
    }).join('');
    hien('manHet');
    xoaLuu();
    clearTimeout(s.poll);
    s.ma = '';
  }

  $('nutLai').addEventListener('click', function () { $('oMa').value = ''; s.capId = 0; hien('manVao'); });

  /* ---------------- khoi tao ---------------- */
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
