/* Mỗi ngày một câu 每日一句 (/moi-ngay)
   Mỗi ngày 1 câu từ bài em đang học, 3 bước ngắn: 🎧 Nghe (chọn nghĩa) → 🎤 Nói (đọc to, máy so từng chữ) → ✍️ Viết (xếp thẻ + gõ 1 chữ).
   Đã đăng nhập: mọi đáp án chấm trên máy chủ (moi-ngay.js), giữ chuỗi 🔥, nhận ⭐ qua /api/stars/game.
   Khách: 1 câu mẫu HSK1 Bài 1 chấm ngay trên máy, không lưu gì — mời đăng nhập để giữ chuỗi.
   Giọng đọc: DocZh (doc-zh.js, theo tốc độ đọc chung của web). Chấm phát âm: Web Speech API zh-CN, so chữ giống rpCompare (app.js). */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var THE = $('#mnThe'), BUOC = $('#mnBuoc'), BANG = $('#mnBang'), CHIP = $('#mnChip');
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  var THU = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

  var S = {
    may: null, that: false, data: null, cau: null, xem: null, ban: false,
    daNghe: false, hienPy: false,
    rec: null, dem: null, loiMic: '', tuCham: !SR, kqNoi: null,
    xepThu: [], kqXep: null, kqChu: null, loiChu: '',
    ghiAm: null, ghiUrl: '', dangNhan: false, saoTt: ''
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  function auth() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a : null; } catch (e) { return null; }
  }
  function giai64(s) { try { return decodeURIComponent(atob(s || '')); } catch (e) { return ''; } }
  function ma64(s) { try { return btoa(encodeURIComponent(s || '')); } catch (e) { return ''; } }
  function vnNgay() { return new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10); }
  function sach(s) { return String(s || '').replace(/[^㐀-鿿豈-﫿A-Za-z0-9]/g, ''); }
  function laKyTu(ch) { return /[㐀-鿿豈-﫿A-Za-z0-9]/.test(ch); }

  /* ───────────── giọng đọc ───────────── */
  function giongZh() {
    try {
      return (speechSynthesis.getVoices() || []).filter(function (v) {
        var l = (v.lang || '').toLowerCase().replace('_', '-');
        return /^zh/.test(l) && !/^(yue|zh-hk)/.test(l);
      })[0] || null;
    } catch (e) { return null; }
  }
  function docZh(zh, cham) {
    if (!zh) return;
    S.daNghe = true;
    var loa = $('#mnLoa');
    if (loa) loa.classList.remove('is-moi');
    if (!cham && window.DocZh) { window.DocZh.doc(zh, { m: 'cau', cap: (S.data && S.data.cap) || '' }); return; }
    var SS = window.speechSynthesis;
    if (!SS || !window.SpeechSynthesisUtterance) { if (window.DocZh) window.DocZh.doc(zh, { m: 'cau' }); return; }
    try { SS.cancel(); } catch (e) { /* bo qua */ }
    var u = new SpeechSynthesisUtterance(zh);
    u.lang = 'zh-CN';
    u.rate = cham ? 0.6 : 0.85;
    var g = giongZh();
    if (g) u.voice = g;
    try { SS.speak(u); } catch (e) { /* bo qua */ }
  }
  function dungDoc() { try { if (window.DocZh) window.DocZh.dung(); else if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { /* bo qua */ } }
  function cauNghe() { return S.data && S.data.nghe ? giai64(S.data.nghe.am) : ''; }

  /* ───────────── chấm phát âm (giống rpCompare của app.js) — chỉ dùng cho câu mẫu của khách ───────────── */
  function soPhatAm(goc, nghe) {
    var a = sach(goc), b = sach(nghe), n = a.length, m = b.length, i, j;
    if (!n) return { diem: 0, trung: [] };
    var dp = [];
    for (i = 0; i <= n; i++) { var hang = []; for (j = 0; j <= m; j++) hang.push(0); dp.push(hang); }
    for (i = n - 1; i >= 0; i--) for (j = m - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    var trung = [];
    for (i = 0; i < n; i++) trung.push(false);
    i = 0; j = 0;
    while (i < n && j < m) {
      if (a[i] === b[j]) { trung[i] = true; i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
    }
    var thua = Math.max(0, m - dp[0][0]);
    var diem = Math.round(100 * dp[0][0] / (n + thua * 0.5));
    return { diem: Math.max(0, Math.min(100, diem)), trung: trung };
  }

  /* ───────────── máy chủ / máy thử ───────────── */
  function api(method, url, body) {
    var a = auth();
    var h = { 'Content-Type': 'application/json' };
    if (a) h.Authorization = 'Bearer ' + a.token;
    return fetch(url, { method: method, headers: h, body: body ? JSON.stringify(body) : undefined }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) { var e = new Error(d.error || 'Máy chủ đang bận, em thử lại sau nhé.'); e.status = r.status; throw e; }
        return d;
      });
    });
  }
  var MayThat = {
    lay: function () { return api('GET', '/api/moi-ngay'); },
    nghe: function (chon) { return api('POST', '/api/moi-ngay/nghe', { chon: chon }); },
    noi: function (b) { return api('POST', '/api/moi-ngay/noi', b); },
    xep: function (thuTu) { return api('POST', '/api/moi-ngay/xep', { thuTu: thuTu }); },
    chu: function (b) { return api('POST', '/api/moi-ngay/chu', b); }
  };
  // Khách: cùng định dạng trạng thái với máy chủ, chấm ngay trên máy
  function MayThu(P) {
    var r = { chon: null, noi: { xong: false, diem: null, tu: false, lan: 0, nghe: '', trung: null },
      xep: { lan: 0, xong: false, dungLan: 0, dungDau: null, cuoi: null }, chu: { goiY: false, lan: 0, xong: false, dung: false, go: '' }, xong: false };
    function xem(kq) {
      var buoc = r.xong ? 'xong' : r.chon == null ? 'nghe' : !r.noi.xong ? 'noi' : !r.xep.xong ? 'xep' : 'chu';
      var da = r.chon != null;
      return {
        thu: true, ngay: vnNgay(), buoc: buoc, nguon: P.nguon, cap: P.cap, bai: P.bai, kq: kq || null,
        nghe: { am: P.am, p: ma64(P.cau.py), lua: P.nghe.lua, chon: r.chon, dung: da ? r.chon === P.nghe.dap : null, dap: da ? P.nghe.dap : null },
        cau: da && (buoc === 'noi' || buoc === 'xong') ? P.cau : null,
        goiY: da ? { py: P.cau.py, vn: P.cau.vn } : null,
        noi: da ? { xong: r.noi.xong, diem: r.noi.diem, tu: r.noi.tu, lan: r.noi.lan, nghe: r.noi.nghe, trung: r.noi.trung, dat: P.dat } : null,
        xep: r.noi.xong ? { the: P.the, lan: r.xep.lan, conLan: Math.max(0, 3 - r.xep.lan), xong: r.xep.xong, dungLan: r.xep.dungLan,
          dungDau: r.xep.dungDau, cuoi: r.xep.cuoi, dap: r.xep.xong ? P.dap : null } : null,
        chu: r.xep.xong ? { mau: P.chu.mau, py: P.chu.py, vn: P.chu.vn, tuZh: P.chu.tuZh, lua: r.chu.goiY ? P.chu.lua : null, lan: r.chu.lan,
          conLan: Math.max(0, 2 - r.chu.lan), xong: r.chu.xong, dung: r.chu.dung, go: r.chu.go, dap: r.chu.xong ? P.chu.chu : null } : null,
        ghiChu: r.xong ? P.ghiChu : null, thuong: null, chuoi: null
      };
    }
    var xong = function (kq) { return Promise.resolve(xem(kq)); };
    return {
      lay: function () { return xong(); },
      nghe: function (chon) { if (r.chon == null) r.chon = chon; return xong(); },
      noi: function (b) {
        var kq;
        r.noi.lan++;
        if (b.tu) { r.noi.tu = true; kq = { tu: true, tot: !!b.tot }; } else {
          var s = soPhatAm(P.cau.zh, b.nghe);
          kq = { diem: s.diem, trung: s.trung, nghe: b.nghe, dat: s.diem >= P.dat };
          if (r.noi.diem == null || s.diem >= r.noi.diem) { r.noi.diem = s.diem; r.noi.nghe = b.nghe; r.noi.trung = s.trung; }
        }
        r.noi.xong = true;
        return xong(kq);
      },
      xep: function (thuTu) {
        var cau = thuTu.map(function (n) { return P.the[n]; }), dich = P.dap.join('');
        r.xep.lan++;
        var dung = cau.join('') === dich, dau = 0, noi = '';
        for (var k = 0; k < cau.length; k++) { if (dich.indexOf(noi + cau[k]) === 0) { noi += cau[k]; dau++; } else break; }
        r.xep.dungDau = dau; r.xep.cuoi = thuTu;
        if (dung) { r.xep.xong = true; r.xep.dungLan = r.xep.lan; } else if (r.xep.lan >= 3) r.xep.xong = true;
        return xong({ dung: dung, dungDau: dau });
      },
      chu: function (b) {
        if (b.goiY) { r.chu.goiY = true; return xong(); }
        var han = (String(b.chu || '').match(/[㐀-鿿豈-﫿]/) || [])[0] || '';
        if (!han) return xong({ loi: 'Em gõ một chữ Hán vào ô nhé.' });
        r.chu.lan++; r.chu.go = han;
        var dung = han === P.chu.chu;
        if (dung) { r.chu.xong = true; r.chu.dung = true; } else if (r.chu.lan >= 2) r.chu.xong = true;
        if (r.chu.xong) r.xong = true;
        return xong({ dung: dung });
      }
    };
  }

  /* ───────────── vẽ chung ───────────── */
  function nhan(loai, chu) { return '<span class="mn-nhan is-' + loai + '">' + chu + '</span>'; }
  function cauHtml(c, trung, nho) {
    if (!c) return '';
    var k = 0;
    var zh = Array.from(c.zh).map(function (ch) {
      if (!trung || !laKyTu(ch)) return esc(ch);
      var ok = trung[k++];
      return '<span class="' + (ok ? 'c-trung' : 'c-lo') + '">' + esc(ch) + '</span>';
    }).join('');
    return '<div class="mn-cau' + (nho ? ' is-nho' : '') + '"><div class="mn-cau-zh" lang="zh-CN">' + zh + '</div>' +
      '<div class="mn-cau-py">' + esc(c.py) + '</div><div class="mn-cau-vn">' + esc(c.vn) + '</div></div>';
  }
  function nutDoc(nho) {
    return '<div class="mn-hang is-giua"><button type="button" class="mn-nut is-nho" data-doc="1">🔊 Nghe mẫu</button>' +
      '<button type="button" class="mn-nut is-nho" data-doc="cham">🐢 Nghe chậm</button></div>';
  }
  function nutTiep(chu, id) { return '<div class="mn-tiep"><button type="button" class="mn-nut is-chinh is-rong" id="' + (id || 'mnTiep') + '">' + chu + '</button></div>'; }
  function dangVe() { return S.xem || (S.data && S.data.buoc) || 'nghe'; }

  function veThanhBuoc(v) {
    var thu = { nghe: 0, noi: 1, xep: 2, chu: 2, xong: 3 }[v];
    var xongDen = { nghe: 0, noi: 1, xep: 2, chu: 2, xong: 3 }[(S.data && S.data.buoc) || 'nghe'];
    $$('li', BUOC).forEach(function (li, i) {
      li.classList.toggle('is-nay', i === thu);
      li.classList.toggle('is-xong', i < xongDen && i !== thu);
    });
  }
  function veDau() {
    var d = S.data;
    if (!d) return;
    var p = $('#mnNgay');
    var t = new Date(d.ngay + 'T00:00:00Z');
    var ngay = THU[t.getUTCDay()] + ' · ' + t.getUTCDate() + '/' + (t.getUTCMonth() + 1) + '/' + t.getUTCFullYear();
    if (p) p.textContent = ngay + (d.nguon ? ' · Câu từ ' + d.nguon : '');
    if (d.chuoi) { CHIP.hidden = false; $('#mnChipSo').textContent = d.chuoi.hienTai || 0; } else CHIP.hidden = true;
  }

  function ve() {
    var d = S.data;
    if (!d) return;
    var v = dangVe();
    veDau();
    veThanhBuoc(v);
    var bao = d.thu && v !== 'xong' ? '<p class="mn-bao">👋 Em đang thử với câu mẫu <b>HSK1 Bài 1</b>. <a href="/#dang-nhap">Đăng nhập</a> để có câu từ đúng bài em học và giữ chuỗi 🔥 mỗi ngày.</p>' : '';
    if (!d.thu && d.batDau && v === 'nghe') bao = '<p class="mn-bao">📚 Em chưa học bài nào nên câu hôm nay lấy từ Bài 1. Học thêm bài để câu mỗi ngày theo đúng bài em đang học nhé.</p>';
    var html = v === 'nghe' ? veNghe(d) : v === 'noi' ? veNoi(d) : v === 'xep' ? veXep(d) : v === 'chu' ? veChu(d) : veXong(d);
    THE.innerHTML = bao + html;
    THE.style.animation = 'none'; void THE.offsetWidth; THE.style.animation = '';
    ganChung();
    if (v === 'nghe') ganNghe(d);
    else if (v === 'noi') ganNoi(d);
    else if (v === 'xep') ganXep(d);
    else if (v === 'chu') ganChu(d);
    else ganXong(d);
  }
  function ganChung() {
    $$('[data-doc]', THE).forEach(function (b) {
      b.addEventListener('click', function () { docZh(S.cau ? S.cau.zh : cauNghe(), b.getAttribute('data-doc') === 'cham'); });
    });
    var t = $('#mnTiep', THE);
    if (t) t.addEventListener('click', function () {
      dungMic();
      dungDoc();
      var cu = dangVe();
      S.xem = null;
      S.kqNoi = null; S.kqXep = null; S.kqChu = null; S.loiMic = ''; S.loiChu = '';
      ve();
      window.scrollTo({ top: Math.max(0, THE.getBoundingClientRect().top + window.scrollY - 90), behavior: 'smooth' });
      // sang bước Nói: đọc mẫu 1 lần cho em nghe
      if (cu === 'nghe' && S.cau) setTimeout(function () { docZh(S.cau.zh); }, 250);
    });
  }
  function gui(buoc, p) {
    if (S.ban) return Promise.reject(new Error('ban'));
    S.ban = true;
    S.xem = buoc;
    return p.then(function (d) {
      S.ban = false;
      S.data = d;
      if (d.cau) S.cau = d.cau;
      return d;
    }, function (e) {
      S.ban = false;
      if (e && e.status === 401) { veLoi('Phiên đăng nhập đã hết hạn — <a href="/#dang-nhap">đăng nhập lại</a> để giữ chuỗi nhé.'); throw e; }
      alert((e && e.message) || 'Có lỗi, em thử lại nhé.');
      throw e;
    });
  }

  /* ───────────── bước 1: nghe ───────────── */
  function veNghe(d) {
    var n = d.nghe, da = n.chon != null;
    var lua = n.lua.map(function (t, i) {
      var cls = !da ? '' : i === n.dap ? ' is-dung' : i === n.chon ? ' is-sai' : ' is-mo';
      return '<button type="button" class="mn-lua-o' + cls + '" data-i="' + i + '"' + (da ? ' disabled' : '') + '>' +
        '<span class="mn-lua-chu">' + 'ABC'.charAt(i) + '</span><span>' + esc(t) + '</span></button>';
    }).join('');
    var sau = '';
    if (da) {
      sau = '<div class="mn-kq ' + (n.dung ? 'is-dung' : 'is-sai') + '"><p>' + (n.dung ? '🎉 Đúng rồi! Tai em thính lắm.' : '💡 Chưa đúng — không sao, nghe lại câu nhé.') + '</p></div>' +
        cauHtml(S.cau, null, true) + nutTiep('Tiếp: 🎤 Nói →');
    } else {
      sau = '<p class="mn-meo">Máy không phát được tiếng? <button type="button" class="mn-link" id="mnPy">Xem pinyin</button></p>' +
        (S.hienPy ? '<p class="mn-cau-py" style="text-align:center">' + esc(giai64(n.p)) + '</p>' : '');
    }
    return nhan('nghe', '🎧 Bước 1 · Nghe') + '<p class="mn-lenh">Nghe câu rồi chọn nghĩa đúng</p>' +
      '<div class="mn-loa-hop"><button type="button" class="mn-loa' + (S.daNghe ? '' : ' is-moi') + '" id="mnLoa" aria-label="Nghe câu">🔊</button>' +
      '<button type="button" class="mn-nut is-nho" id="mnCham">🐢 Nghe chậm</button></div>' +
      '<div class="mn-lua" role="group" aria-label="Chọn nghĩa">' + lua + '</div>' + sau;
  }
  function ganNghe(d) {
    var zh = cauNghe();
    $('#mnLoa').addEventListener('click', function () { docZh(zh); });
    $('#mnCham').addEventListener('click', function () { docZh(zh, true); });
    var py = $('#mnPy');
    if (py) py.addEventListener('click', function () { S.hienPy = true; ve(); });
    $$('.mn-lua-o', THE).forEach(function (b) {
      b.addEventListener('click', function () {
        if (d.nghe.chon != null) return;
        gui('nghe', S.may.nghe(+b.getAttribute('data-i'))).then(ve, function () {});
      });
    });
  }

  /* ───────────── bước 2: nói ───────────── */
  function coGhiAm() { return !!(window.MediaRecorder && navigator.mediaDevices && navigator.mediaDevices.getUserMedia); }
  function veNoi(d) {
    var n = d.noi || {}, kq = S.kqNoi;
    var diem = kq && kq.diem != null ? kq.diem : (!n.tu && n.diem != null ? n.diem : null);
    var trung = kq && kq.trung ? kq.trung : (!n.tu && n.trung ? n.trung : null);
    var nghe = kq && kq.nghe != null ? kq.nghe : n.nghe;
    var html = nhan('noi', '🎤 Bước 2 · Nói') + '<p class="mn-lenh">Đọc to câu này</p>' + cauHtml(S.cau, diem != null && !S.tuCham ? trung : null) + nutDoc();
    if (!S.tuCham) {
      html += '<div style="margin-top:16px"><button type="button" class="mn-mic" id="mnMic"><span aria-hidden="true">🎤</span><span>' +
        (n.lan ? 'Bấm rồi đọc lại' : 'Bấm rồi đọc to') + '</span></button>' +
        '<div class="mn-thanh" id="mnThanh" hidden><i id="mnThanhI"></i></div>' +
        '<p class="mn-nghe-duoc" id="mnNgheDuoc">' + (S.loiMic ? '⚠️ ' + esc(S.loiMic) : '') + '</p></div>';
      if (diem != null) {
        var dat = diem >= (n.dat || 70);
        html += '<div class="mn-kq ' + (dat ? 'is-dung' : '') + '"><div class="mn-diem"><div class="mn-vong' + (dat ? '' : ' is-thap') + '" style="--d:' + diem + '"><b>' + diem + '%</b></div><div>' +
          '<p>' + (diem >= 90 ? '🌟 Xuất sắc! Phát âm rất rõ.' : dat ? '👍 Tốt lắm! Máy nghe đúng gần hết.' : '💪 Gần được rồi — nghe mẫu rồi đọc chậm, rõ từng chữ nhé.') + '</p>' +
          (nghe ? '<p class="mn-meo">Máy nghe được: <span class="zh" lang="zh-CN">' + esc(nghe) + '</span></p>' : '') +
          (!dat ? '<p class="mn-meo">Chữ màu đỏ là chữ máy chưa nghe ra.</p>' : '') + '</div></div></div>';
      }
      html += '<p class="mn-meo" style="text-align:center"><button type="button" class="mn-link" id="mnTuCham">Không dùng micro được? Tự chấm</button></p>';
    } else {
      html += '<div class="mn-tu-cham">' + (SR ? '' : '<p>🎙️ Trình duyệt này chưa chấm được giọng nói (thử Chrome hoặc Edge). Em <b>tự chấm</b> nhé:</p>') +
        (coGhiAm()
          ? '<p>Bấm ⏺ ghi âm, đọc to câu, rồi nghe lại giọng em và so với giọng mẫu.</p><div class="mn-hang"><button type="button" class="mn-nut is-chinh" id="mnGhi">' +
            (S.ghiAm ? '⏹ Dừng ghi' : '⏺ Ghi âm') + '</button><button type="button" class="mn-nut" id="mnNgheLai"' + (S.ghiUrl ? '' : ' disabled') + '>▶ Giọng em</button></div>'
          : '<p>Nghe mẫu rồi đọc to theo 2–3 lần cho trôi chảy.</p>') +
        '<p class="mn-meo">Đọc giống mẫu chưa?</p><div class="mn-hang"><button type="button" class="mn-nut is-xanh" id="mnTot">' + (n.tu && n.xong ? '✓ Đã tự chấm' : '👍 Em đọc giống rồi') + '</button></div>' +
        (SR ? '<p class="mn-meo"><button type="button" class="mn-link" id="mnDungMic">← Dùng micro để máy chấm</button></p>' : '') + '</div>';
    }
    if (n.xong) html += nutTiep('Tiếp: ✍️ Viết →');
    return html;
  }
  function dungMic() {
    if (S.dem) { clearInterval(S.dem); S.dem = null; }
    if (S.rec) { try { S.rec.abort(); } catch (e) { /* bo qua */ } S.rec = null; }
    if (S.ghiAm) { try { S.ghiAm.stop(); } catch (e) { /* bo qua */ } }
  }
  function batMic() {
    var rec;
    try { rec = new SR(); } catch (e) { S.tuCham = true; ve(); return; }
    dungDoc();
    rec.lang = 'zh-CN'; rec.continuous = false; rec.interimResults = true; rec.maxAlternatives = 1;
    var fin = '', tam = '', xong = false, bd = Date.now();
    var giay = Math.min(15, Math.round(4 + sach(S.cau.zh).length * 0.6));
    var mic = $('#mnMic'), nd = $('#mnNgheDuoc'), thanh = $('#mnThanh'), ti = $('#mnThanhI');
    S.loiMic = '';
    rec.onresult = function (e) {
      tam = '';
      for (var k = e.resultIndex; k < e.results.length; k++) {
        if (e.results[k].isFinal) fin += e.results[k][0].transcript; else tam += e.results[k][0].transcript;
      }
      if (nd) nd.innerHTML = '👂 <span class="zh" lang="zh-CN">' + esc(fin + tam) + '</span>';
    };
    rec.onerror = function (e) {
      var l = e && e.error;
      S.loiMic = l === 'not-allowed' || l === 'service-not-allowed' ? 'Chưa có quyền dùng micro — bấm 🔒 trên thanh địa chỉ, cho phép micro rồi thử lại (hoặc chọn Tự chấm).'
        : l === 'network' ? 'Không kết nối được dịch vụ nhận giọng — em thử lại, hoặc chọn Tự chấm.'
        : l === 'aborted' ? '' : 'Máy chưa nghe thấy em nói — bấm 🎤 rồi đọc to, rõ hơn nhé.';
    };
    rec.onend = function () {
      if (xong) return;
      xong = true;
      if (S.dem) { clearInterval(S.dem); S.dem = null; }
      if (S.rec !== rec) return; // da huy (bam Tiep / roi buoc)
      S.rec = null;
      var noi = (fin || tam).trim();
      if (!noi) { if (!S.loiMic) S.loiMic = 'Máy chưa nghe thấy em nói — bấm 🎤 thử lại nhé.'; ve(); return; }
      gui('noi', S.may.noi({ nghe: noi })).then(function (d) { S.kqNoi = d.kq; S.loiMic = ''; ve(); }, function () { ve(); });
    };
    try { rec.start(); } catch (e) { S.loiMic = 'Không bật được micro — em thử lại hoặc chọn Tự chấm.'; ve(); return; }
    S.rec = rec;
    if (mic) { mic.classList.add('is-dang'); mic.innerHTML = '<span aria-hidden="true">⏹</span><span>Đang nghe… đọc xong bấm vào đây</span>'; }
    if (nd) nd.innerHTML = '👂 Em đọc đi…';
    if (thanh) thanh.hidden = false;
    S.dem = setInterval(function () {
      var con = Math.max(0, 1 - (Date.now() - bd) / (giay * 1000));
      if (ti) ti.style.width = (con * 100).toFixed(1) + '%';
      if (con <= 0) { clearInterval(S.dem); S.dem = null; try { rec.stop(); } catch (e) { /* bo qua */ } }
    }, 100);
  }
  function ganNoi(d) {
    var mic = $('#mnMic');
    if (mic) mic.addEventListener('click', function () {
      if (S.rec) { try { S.rec.stop(); } catch (e) { /* bo qua */ } return; }
      if (S.ban) return;
      batMic();
    });
    var tc = $('#mnTuCham');
    if (tc) tc.addEventListener('click', function () { dungMic(); S.tuCham = true; ve(); });
    var dm = $('#mnDungMic');
    if (dm) dm.addEventListener('click', function () { dungMic(); S.tuCham = false; ve(); });
    var ghi = $('#mnGhi');
    if (ghi) ghi.addEventListener('click', function () {
      if (S.ghiAm) { try { S.ghiAm.stop(); } catch (e) { /* bo qua */ } return; }
      dungDoc();
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (luong) {
        var mr, phan = [];
        try { mr = new MediaRecorder(luong); } catch (e) { luong.getTracks().forEach(function (t) { t.stop(); }); return; }
        mr.ondataavailable = function (e) { if (e.data && e.data.size) phan.push(e.data); };
        mr.onstop = function () {
          luong.getTracks().forEach(function (t) { t.stop(); });
          S.ghiAm = null;
          if (S.ghiUrl) try { URL.revokeObjectURL(S.ghiUrl); } catch (e) { /* bo qua */ }
          S.ghiUrl = phan.length ? URL.createObjectURL(new Blob(phan, { type: mr.mimeType || 'audio/webm' })) : '';
          if (dangVe() === 'noi') ve();
          phatGhiAm();
        };
        mr.start();
        S.ghiAm = mr;
        ghi.textContent = '⏹ Dừng ghi';
        setTimeout(function () { if (S.ghiAm === mr) try { mr.stop(); } catch (e) { /* bo qua */ } }, 15000);
      }).catch(function () { alert('Chưa có quyền dùng micro — em đọc to theo mẫu rồi bấm "Em đọc giống rồi" nhé.'); });
    });
    var nl = $('#mnNgheLai');
    if (nl) nl.addEventListener('click', phatGhiAm);
    var tot = $('#mnTot');
    if (tot) tot.addEventListener('click', function () {
      if (d.noi && d.noi.tu && d.noi.xong) return;
      gui('noi', S.may.noi({ tu: true, tot: true })).then(function (x) { S.kqNoi = x.kq; ve(); }, function () {});
    });
  }
  function phatGhiAm() {
    if (!S.ghiUrl) return;
    try { var a = new Audio(S.ghiUrl); var p = a.play(); if (p && p.catch) p.catch(function () { /* bo qua */ }); } catch (e) { /* bo qua */ }
  }

  /* ───────────── bước 3a: xếp thẻ ───────────── */
  function veXep(d) {
    var x = d.xep, kq = S.kqXep;
    var dangLam = !x.xong;
    var thuTu = dangLam ? S.xepThu : (x.dungLan ? null : (x.cuoi || []));
    var oXep;
    if (!dangLam && x.dungLan) {
      oXep = x.dap.map(function (t) { return '<span class="mn-o is-dung" lang="zh-CN">' + esc(t) + '</span>'; }).join('');
    } else {
      oXep = thuTu.map(function (i, k) {
        var cls = kq && !kq.dung && kq.dungDau != null ? (k < kq.dungDau ? ' is-dung' : ' is-sai') : '';
        return '<button type="button" class="mn-o' + cls + '" data-o="' + k + '" lang="zh-CN"' + (dangLam ? '' : ' disabled') + '>' + esc(x.the[i]) + '</button>';
      }).join('');
    }
    var kho = dangLam ? x.the.map(function (t, i) {
      var dung = S.xepThu.indexOf(i) >= 0;
      return '<button type="button" class="mn-o' + (dung ? ' is-trong' : '') + '" data-k="' + i + '" lang="zh-CN"' + (dung ? ' tabindex="-1" aria-hidden="true"' : '') + '>' + esc(t) + '</button>';
    }).join('') : '';
    var g = d.goiY || {};
    var html = nhan('viet', '✍️ Bước 3 · Viết') + '<p class="mn-lenh">Xếp các thẻ thành câu đúng</p>' +
      '<div class="mn-dich">' + esc(g.vn) + '</div>' +
      '<div class="mn-o-xep" id="mnOXep" aria-label="Câu em xếp">' + oXep + '</div>';
    if (dangLam) {
      html += '<div class="mn-kho" aria-label="Các thẻ">' + kho + '</div>' +
        '<div class="mn-hang is-giua" style="margin-top:16px"><button type="button" class="mn-nut is-chinh" id="mnKtXep"' + (S.xepThu.length === x.the.length ? '' : ' disabled') + '>Kiểm tra</button>' +
        '<button type="button" class="mn-nut is-nho" id="mnXepLai">↺ Xếp lại</button><button type="button" class="mn-nut is-nho" data-doc="cham">🐢 Nghe gợi ý</button></div>';
      if (kq && !kq.dung) html += '<div class="mn-kq is-sai"><p>' + (kq.dungDau ? 'Đúng ' + kq.dungDau + ' thẻ đầu (màu xanh) — sửa phần sau nhé.' : 'Thẻ đầu tiên chưa đúng — nghe lại câu rồi xếp lại nhé.') + '</p><p class="mn-meo">Còn ' + x.conLan + ' lần thử.</p></div>';
      else if (x.lan === 0) html += '<p class="mn-meo" style="text-align:center">Chạm thẻ để đưa lên câu, chạm lần nữa để bỏ ra. Có ' + x.conLan + ' lần thử.</p>';
    } else {
      html += x.dungLan ? '<div class="mn-kq is-dung"><p>🎉 Đúng rồi!' + (x.dungLan === 1 ? ' Xếp đúng ngay lần đầu.' : '') + '</p></div>'
        : '<div class="mn-kq is-sai"><p>Câu đúng là:</p><p class="zh" lang="zh-CN" style="font-size:1.4rem">' + esc(x.dap.join(' ')) + '</p></div>';
      html += '<p class="mn-cau-py" style="text-align:center">' + esc(g.py) + '</p>' + nutTiep('Tiếp: gõ chữ còn thiếu →');
    }
    return html;
  }
  function ganXep(d) {
    var x = d.xep;
    if (x.xong) return;
    $$('[data-k]', THE).forEach(function (b) {
      b.addEventListener('click', function () {
        var i = +b.getAttribute('data-k');
        if (S.xepThu.indexOf(i) >= 0) return;
        S.xepThu.push(i); S.kqXep = null; ve();
      });
    });
    $$('[data-o]', THE).forEach(function (b) {
      b.addEventListener('click', function () { S.xepThu.splice(+b.getAttribute('data-o'), 1); S.kqXep = null; ve(); });
    });
    $('#mnXepLai').addEventListener('click', function () { S.xepThu = []; S.kqXep = null; ve(); });
    $('#mnKtXep').addEventListener('click', function () {
      if (S.xepThu.length !== x.the.length) return;
      gui('xep', S.may.xep(S.xepThu.slice())).then(function (d2) {
        S.kqXep = d2.kq;
        if (d2.kq && d2.kq.loi) alert(d2.kq.loi);
        ve();
      }, function () {});
    });
  }

  /* ───────────── bước 3b: gõ chữ ───────────── */
  function veChu(d) {
    var c = d.chu, kq = S.kqChu;
    var trong = c.xong ? '<span class="mn-trong">' + esc(c.dap) + '</span>' : '<span class="mn-trong">？</span>';
    var mau = esc(c.mau).replace('＿', trong);
    var html = nhan('viet', '✍️ Bước 3 · Viết') + '<p class="mn-lenh">Gõ chữ Hán còn thiếu</p>' +
      '<div class="mn-mau" lang="zh-CN">' + mau + '</div>' +
      '<p class="mn-goi">' + (c.tuZh ? 'Từ <span class="zh" lang="zh-CN">' + esc(c.tuZh) + '</span> · ' : '') + '<b>' + esc(c.py) + '</b> · ' + esc(c.vn) + '</p>';
    if (!c.xong) {
      html += '<form class="mn-go" id="mnGoForm" autocomplete="off"><input type="text" id="mnGo" lang="zh-CN" inputmode="text" maxlength="4" ' +
        'aria-label="Chữ còn thiếu" placeholder="字" autocapitalize="off" spellcheck="false"><button type="submit" class="mn-nut is-chinh">Kiểm tra</button></form>';
      if (c.lua) {
        html += '<div class="mn-chon4" role="group" aria-label="Chọn chữ">' + c.lua.map(function (z) {
          return '<button type="button" class="mn-o" data-chu="' + esc(z) + '" lang="zh-CN">' + esc(z) + '</button>';
        }).join('') + '</div>';
      } else html += '<p class="mn-meo" style="text-align:center"><button type="button" class="mn-link" id="mnGoiY">Không gõ được chữ Hán? Chọn chữ</button></p>';
      if (S.loiChu) html += '<div class="mn-kq"><p>' + esc(S.loiChu) + '</p></div>';
      else if (kq && !kq.dung) html += '<div class="mn-kq is-sai"><p>Chưa đúng — đó là chữ <span class="zh">' + esc(c.go) + '</span>. Thử lần nữa nhé (còn ' + c.conLan + ' lần).</p></div>';
    } else {
      html += c.dung ? '<div class="mn-kq is-dung"><p>🎉 Chính xác! Chữ <span class="zh" lang="zh-CN">' + esc(c.dap) + '</span>.</p></div>'
        : '<div class="mn-kq is-sai"><p>Chữ đúng là <span class="zh" lang="zh-CN" style="font-size:1.3rem">' + esc(c.dap) + '</span> — nhớ nét chữ này cho ngày mai nhé.</p></div>';
      html += nutTiep(d.thu ? '🎉 Xem kết quả' : '🎉 Xem kết quả & chuỗi 🔥');
    }
    return html;
  }
  function ganChu(d) {
    if (d.chu.xong) return;
    var f = $('#mnGoForm'), inp = $('#mnGo');
    function guiChu(chu) {
      S.loiChu = '';
      gui('chu', S.may.chu({ chu: chu })).then(function (d2) {
        S.kqChu = d2.kq;
        if (d2.kq && d2.kq.loi) S.loiChu = d2.kq.loi;
        ve();
        var i2 = $('#mnGo');
        if (i2 && !(d2.chu && d2.chu.lua)) i2.focus();
      }, function () {});
    }
    f.addEventListener('submit', function (e) { e.preventDefault(); guiChu(inp.value); });
    $$('[data-chu]', THE).forEach(function (b) { b.addEventListener('click', function () { guiChu(b.getAttribute('data-chu')); }); });
    var gy = $('#mnGoiY');
    if (gy) gy.addEventListener('click', function () { gui('chu', S.may.chu({ goiY: true })).then(ve, function () {}); });
  }

  /* ───────────── kết quả ───────────── */
  var LUA_TO = '<svg class="mn-lua-to" viewBox="0 0 64 76" aria-hidden="true"><path d="M32 4c5 13 22 20 22 40 0 15-10 27-22 27S10 59 10 45c0-10 5-15 10-20 0 8 3 12 7 13-2-13 0-25 5-34z" fill="#ff8a3d" stroke="#2b1d3a" stroke-width="5" stroke-linejoin="round"/>' +
    '<path d="M32 38c3 7 10 10 10 19 0 7-5 11-10 11s-10-4-10-11c0-8 7-11 10-19z" fill="#ffd45e" stroke="#2b1d3a" stroke-width="4" stroke-linejoin="round"/></svg>';
  function veXong(d) {
    var c = S.cau || d.cau, n = d.noi || {}, x = d.xep || {}, ch = d.chu || {};
    var html = nhan('xong', '✅ Xong câu hôm nay') + '<p class="mn-mung">🎉 Giỏi lắm! Em đã xong câu hôm nay</p>' + cauHtml(c) + nutDoc() +
      (d.nguon ? '<p class="mn-nguon" style="text-align:center;margin-top:8px">📖 ' + esc(d.nguon) + '</p>' : '') +
      '<ul class="mn-tom">' +
        '<li>🎧 Nghe hiểu <b>' + (d.nghe.dung ? '✓ Đúng' : '✗ Chưa đúng') + '</b></li>' +
        '<li>🎤 Đọc to <b>' + (n.tu && n.diem == null ? 'Tự chấm 👍' : (n.diem != null ? n.diem + '%' : '—')) + '</b></li>' +
        '<li>✍️ Xếp câu <b>' + (x.dungLan ? '✓ Đúng' + (x.dungLan > 1 ? ' (lần ' + x.dungLan + ')' : '') : '✗ Chưa đúng') + '</b></li>' +
        '<li>🖊️ Gõ chữ <b>' + (ch.dung ? '✓ ' + esc(ch.dap) : '✗ ' + esc(ch.dap || '')) + '</b></li>' +
      '</ul>';
    var g = d.ghiChu || {};
    if (g.tu) {
      var t = g.tu;
      html += '<div class="mn-ghi"><h3>📌 Từ khoá</h3><p><span class="zh" lang="zh-CN">' + esc(t.zh) + '</span> <span class="py">' + esc(t.py) + '</span>' +
        (t.hv ? ' · Hán Việt: <b>' + esc(t.hv) + '</b>' : '') + '</p><p>' + (t.pos ? '<i>' + esc(t.pos) + '</i> — ' : '') + esc(t.vn) + '</p>' +
        (t.mau || []).map(function (m) { return '<p><span class="mn-ct">' + esc(m.s) + '</span>' + (m.m ? ' ' + esc(m.m) : '') + '</p>'; }).join('') +
        (t.giai ? '<p class="mn-meo">' + esc(t.giai) + '</p>' : '') + '</div>';
    }
    if (g.np) {
      html += '<div class="mn-ghi"><h3>📐 Ngữ pháp: ' + esc(g.np.ten) + '</h3>' +
        (g.np.cauTruc || []).map(function (s) { return '<p><span class="mn-ct">' + esc(s) + '</span></p>'; }).join('') +
        (g.np.giai ? '<p class="mn-meo">' + esc(g.np.giai) + '</p>' : '') + '</div>';
    }
    if (d.thu) {
      html += '<div class="mn-khach"><p>Đăng nhập để mỗi ngày có 1 câu từ đúng bài em đang học, giữ chuỗi 🔥 và nhận ⭐.</p>' +
        '<div class="mn-hang is-giua"><a class="mn-nut is-chinh" href="/#dang-nhap">Đăng nhập</a><button type="button" class="mn-nut" id="mnThuNua">Thử câu khác</button></div></div>';
      return html;
    }
    var cu = d.chuoi || { hienTai: 0, best: 0, lich: [] };
    html += '<div class="mn-chuoi">' + LUA_TO + '<div><div class="mn-chuoi-so">' + (cu.hienTai || 0) + '<small>ngày liên tiếp</small></div>' +
      '<p>Kỷ lục: <b>' + (cu.best || 0) + '</b> ngày · Tổng: <b>' + (cu.tong || 0) + '</b> ngày</p></div></div>' +
      '<ul class="mn-7" aria-label="7 ngày gần đây">' + (cu.lich || []).map(function (l) {
        return '<li class="' + (l.xong ? 'is-xong' : '') + (l.homNay ? ' is-nay' : '') + '">' + (l.homNay ? 'Nay' : l.thu) + '<i>' + (l.xong ? '🔥' : '') + '</i></li>';
      }).join('') + '</ul>';
    var th = d.thuong;
    if (th) {
      html += '<div class="mn-sao"><h3>⭐ Thưởng hôm nay: +' + th.n + ' sao</h3><ul>' +
        th.ly.map(function (l) { return '<li>' + esc(l.t) + ': +' + l.n + '</li>'; }).join('') + '</ul>' +
        '<p class="mn-sao-tt" id="mnSaoTt">' + esc(S.saoTt || (th.daNhan != null ? (th.daNhan ? 'Đã nhận +' + th.daNhan + ' ⭐' : 'Hôm nay em đã nhận đủ sao trò chơi nên câu này không cộng thêm sao.') : '⭐ Đang nhận sao…')) + '</p></div>';
    }
    html += '<p class="mn-mai">Hẹn em ngày mai — câu mới mở lúc 0 giờ (giờ Việt Nam). ' +
      (d.bai ? '<a href="' + esc(d.bai) + '">Ôn lại bài này →</a>' : '') + '</p>';
    return html;
  }
  function ganXong(d) {
    var tn = $('#mnThuNua');
    if (tn) tn.addEventListener('click', function () { batDauThu(); });
    if (d.thu) return;
    veBang();
    var th = d.thuong;
    if (th && th.daNhan == null && !S.dangNhan) nhanSao(th);
  }
  function datSaoTt(s) { S.saoTt = s; var p = $('#mnSaoTt'); if (p) p.textContent = s; }
  function nhanSao(th) {
    S.dangNhan = true;
    var duoc = 0, lan = 0, het = false, loi = false;
    datSaoTt('⭐ Đang nhận sao…');
    function mot() {
      var n = Math.min(10, th.n - duoc);
      return api('POST', '/api/stars/game', { n: n }).then(function (r) {
        duoc += r.gameAwarded || 0;
        lan++;
        if (r.gameCap && r.gameToday >= r.gameCap) het = true;
        // may chu chi cho 0,7 giay / sao tinh tu lan cong truoc: doi roi xin phan con lai
        if (duoc < th.n && !het && lan < 4) return new Promise(function (ok) { setTimeout(ok, n * 700 + 500); }).then(mot);
      });
    }
    mot().catch(function () { loi = true; }).then(function () {
      if (loi && !duoc) { datSaoTt('Chưa nhận được sao — tải lại trang để nhận nhé.'); S.dangNhan = false; return; }
      datSaoTt(duoc >= th.n ? 'Đã nhận +' + duoc + ' ⭐' : duoc ? 'Đã nhận +' + duoc + ' ⭐ (hôm nay em gần đủ sao trò chơi rồi)' : 'Hôm nay em đã nhận đủ sao trò chơi nên câu này không cộng thêm sao.');
      return api('POST', '/api/moi-ngay/nhan', { duoc: duoc }).then(function (d) { S.data = d; }).catch(function () { /* bo qua */ })
        .then(function () { S.dangNhan = false; });
    });
  }

  /* ───────────── bảng chuỗi tuần ───────────── */
  function veBang() {
    api('GET', '/api/moi-ngay/bang').then(function (b) {
      var huy = ['🥇', '🥈', '🥉'];
      BANG.innerHTML = '<h2>🏆 Ai giữ chuỗi dài nhất</h2><p>' + (b.loai === 'lop' ? 'Lớp ' + esc(b.tenLop) + ' · tuần này' : 'Các bạn đang giữ chuỗi trên Hi Hán · tuần này') + '</p>' +
        (b.ds.length ? '<ol>' + b.ds.map(function (r) {
          return '<li class="' + (r.laEm ? 'is-em' : '') + '"><span class="h">' + (huy[r.hang - 1] || r.hang) + '</span><span class="t">' + esc(r.ten) + (r.laEm ? ' (em)' : '') + '</span>' +
            '<span class="w">' + r.tuan + '/7 ngày</span><span class="s">🔥 ' + r.chuoi + '</span></li>';
        }).join('') + '</ol>' : '<p class="mn-trong-bang">Chưa có ai giữ chuỗi tuần này — em mở màn nhé!</p>');
      BANG.hidden = false;
    }).catch(function () { BANG.hidden = true; });
  }

  /* ───────────── bắt đầu ───────────── */
  function veLoi(html) {
    THE.innerHTML = '<p class="mn-cho">' + html + '</p><div class="mn-hang is-giua"><button type="button" class="mn-nut" id="mnLai">Thử lại</button></div>';
    var l = $('#mnLai');
    if (l) l.addEventListener('click', batDau);
  }
  function datLai() {
    dungMic();
    S.xem = null; S.cau = null; S.kqNoi = null; S.kqXep = null; S.kqChu = null; S.xepThu = []; S.loiMic = ''; S.loiChu = '';
    S.daNghe = false; S.hienPy = false; S.saoTt = '';
    BANG.hidden = true;
  }
  function batDauThu(ghiChu) {
    datLai();
    S.that = false;
    api('GET', '/api/moi-ngay/thu').then(function (P) {
      S.may = MayThu(P);
      return S.may.lay();
    }).then(function (d) {
      S.data = d;
      ve();
      if (ghiChu) { var b = $('.mn-bao', THE); if (b) b.innerHTML = ghiChu; }
    }).catch(function (e) { veLoi(esc((e && e.message) || 'Không tải được câu mẫu.')); });
  }
  function batDau() {
    datLai();
    if (!auth()) { batDauThu(); return; }
    S.that = true;
    S.may = MayThat;
    MayThat.lay().then(function (d) {
      S.data = d;
      if (d.cau) S.cau = d.cau;
      ve();
    }).catch(function (e) {
      if (e && e.status === 401) { batDauThu('⏰ Phiên đăng nhập đã hết hạn — <a href="/#dang-nhap">đăng nhập lại</a> để giữ chuỗi 🔥. Tạm thời em thử với câu mẫu HSK1 Bài 1.'); return; }
      veLoi(esc((e && e.message) || 'Không tải được câu hôm nay.'));
    });
  }
  // Để trang mở qua 0 giờ: quay lại thì lấy câu của ngày mới
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && S.that && S.data && S.data.ngay !== vnNgay() && !S.rec && !S.ban) batDau();
  });
  window.addEventListener('pagehide', dungMic);
  if (window.speechSynthesis && speechSynthesis.getVoices) try { speechSynthesis.getVoices(); } catch (e) { /* nap truoc giong doc */ }
  batDau();
})();
