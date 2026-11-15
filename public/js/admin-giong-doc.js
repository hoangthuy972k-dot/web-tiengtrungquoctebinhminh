/* Trang Bao cao — tab "🔊 Giọng đọc": giong doc tieng Trung cua ca web (tts-azure.js tren may chu).
   Xem giong dang dung, so ky tu Azure da dung thang nay / han muc, bo nho dem; nghe thu cac giong Azure
   (tu vung / cau / hoi thoai 2 giong) qua CUNG duong may chu (co cache); chinh toc do tung che do;
   "Dung giong nay cho ca web" (provider = azure) va "Quay lai giong cu (Google)". */
(function () {
  'use strict';
  var PW_KEY = 'hyv_admin_pw';
  var MAU = {
    tu: { nhan: '▶ Từ vựng', text: '今天 · 休息 · 电脑 · 做饭 · 饺子', m: 'tu' },
    cau: { nhan: '▶ Câu', text: '今天几号？今天9月8号，星期日。你会做饭吗？', m: 'cau' },
    doan: { nhan: '▶ Hội thoại', doiThoai: ['你好！你叫什么名字？', '我叫大卫。你呢？', '我叫王一雪。很高兴认识你！', '我也很高兴认识你。'] }
  };
  var TEN_CD = { tu: 'Từ vựng', cau: 'Câu', doan: 'Hội thoại / đoạn văn' };
  var state = { d: null, loi: '', tinh: null, dangNghe: null, am: null };
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function so(n) { return Number(n || 0).toLocaleString('vi-VN'); }
  function mb(b) { return (b / 1048576).toFixed(b < 10485760 ? 1 : 0) + ' MB'; }
  function goi(url, opts) {
    opts = opts || {};
    opts.headers = Object.assign({ 'X-Admin-Password': sessionStorage.getItem(PW_KEY) || '' }, opts.headers || {});
    if (opts.body) opts.headers['Content-Type'] = 'application/json';
    return fetch(url, opts);
  }
  function goiJson(url, opts) {
    return goi(url, opts).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw new Error(j.error || 'Lỗi máy chủ.'); return j; }); });
  }
  function tai() {
    if (!sessionStorage.getItem(PW_KEY)) return Promise.resolve();
    return goiJson('/api/admin/tts').then(function (d) {
      state.d = d; state.loi = '';
      if (!state.tinh) state.tinh = { tu: d.tinh.tu, cau: d.tinh.cau, doan: d.tinh.doan };
    }).catch(function (e) { state.loi = e.message; });
  }
  function tenNgan(v) { return String(v || '').replace(/^zh-CN-/, '').replace(/Neural$/, ''); }
  function rate(m) {
    var d = state.d, r = d.nhip[m] + (state.tinh[m] || 0);
    return (r >= 0 ? '+' : '') + r + '%';
  }

  function ve() {
    var hop = $('#trGiong'), d = state.d;
    if (!hop) return;
    if (!d) { hop.innerHTML = '<section class="admin-section"><p class="admin-empty">' + esc(state.loi || 'Đang tải…') + '</p></section>'; return; }
    var dangAz = d.provider === 'azure', t = d.thang, phan = Math.min(100, Math.round(100 * t.kyTu / Math.max(1, t.hanMuc)));
    var html = '<section class="admin-section"><div class="admin-section-title">🔊 Giọng đọc tiếng Trung của cả web</div>';
    if (!d.azureCoKhoa) html += '<p class="gd-canh">⚠️ Máy chủ chưa có khoá Azure — kiểm tra biến AZURE_SPEECH_KEY / AZURE_SPEECH_REGION trên Hostinger (đặt xong bấm <b>Redeploy</b>). Trong lúc đó web vẫn dùng giọng cũ.</p>';
    if (d.azureGia) html += '<p class="gd-canh gd-canh--thu">🧪 Đang chạy chế độ thử trên máy (TTS_AZURE_GIA): âm thanh “Azure” là tiếng câm.</p>';
    html += '<div class="admin-cards">' +
      '<div class="admin-card"><div class="admin-card-label">Đang dùng</div><div class="admin-card-value is-sm">' +
        (dangAz ? 'Azure · ' + esc(tenNgan(d.voice)) : 'Google (giọng cũ)') + '</div><div class="admin-card-sub">' +
        (dangAz ? 'Từ ' + rate('tu') + ' · Câu ' + rate('cau') + ' · Đoạn ' + rate('doan') : 'Trò chơi, nông trại… đọc bằng giọng của máy học sinh') + '</div></div>' +
      '<div class="admin-card' + (phan >= 90 ? ' is-warn' : '') + '"><div class="admin-card-label">Azure tháng ' + esc(t.k.slice(5) + '/' + t.k.slice(0, 4)) + '</div>' +
        '<div class="admin-card-value is-sm">' + so(t.kyTu) + ' / ' + so(t.hanMuc) + '</div>' +
        '<div class="gd-thanh"><span style="width:' + phan + '%"></span></div>' +
        '<div class="admin-card-sub">ký tự tính phí · ' + so(t.lan) + ' lần gọi' + (t.loi ? ' · ' + so(t.loi) + ' lần lỗi' : '') + '</div></div>' +
      '<div class="admin-card"><div class="admin-card-label">Bộ nhớ đệm âm thanh</div><div class="admin-card-value is-sm">' + so(d.cache.soFile) + ' đoạn</div>' +
        '<div class="admin-card-sub">' + mb(d.cache.bytes) + ' / ' + mb(d.cache.max) + ' · ' + so(d.cache.ram) + ' đoạn trong RAM</div></div>' +
      '</div>';
    if (dangAz) html += '<p><button type="button" class="btn btn-outline" data-gd-google>↩ Quay lại giọng cũ (Google)</button></p>';
    html += '<p class="gd-kq" aria-live="polite" data-gd-kq></p></section>';

    // Nghe thu
    html += '<section class="admin-section"><div class="admin-section-title">🎧 Nghe thử và chọn giọng</div>' +
      '<p class="gd-goi-y">Mỗi nút đọc mẫu bằng đúng nhịp sẽ dùng trên web: <b>từ vựng</b> chậm nhất, nghỉ ' + d.nghi.tu + ' ms giữa các từ; <b>câu</b> chậm và rõ, nghỉ ' + d.nghi.cau + ' ms giữa các câu; <b>hội thoại</b> chậm hơn nói thường một chút (2 giọng thay nhau). Bài HSK1–2 / YCT tự chậm thêm 5%, HSK5 trở lên nhanh hơn 5%. Kéo thanh để chỉnh thêm (±10%) rồi nghe lại.</p>' +
      '<div class="gd-tinh">' + ['tu', 'cau', 'doan'].map(function (m) {
        return '<label class="gd-tinh-muc"><span>' + TEN_CD[m] + ' <b data-gd-rate="' + m + '">' + rate(m) + '</b></span>' +
          '<input type="range" min="-10" max="10" step="1" value="' + (state.tinh[m] || 0) + '" data-gd-tinh="' + m + '" aria-label="Chỉnh tốc độ ' + TEN_CD[m] + '"></label>';
      }).join('') + '</div>' +
      '<div class="gd-ds">' + d.giong.map(function (g) {
        var la = dangAz && g.ten === d.voice;
        return '<article class="gd-giong' + (la ? ' is-dung' : '') + '" data-gd-giong="' + esc(g.ten) + '">' +
          '<header><b>' + esc(tenNgan(g.ten)) + '</b> <span class="gd-gt">' + (g.gt === 'nu' ? 'nữ' : 'nam') + '</span>' + (la ? ' <span class="gd-nhan">✓ Đang dùng</span>' : '') + '</header>' +
          '<p class="gd-mo">' + esc(g.mo) + '</p>' +
          '<div class="gd-nut">' + ['tu', 'cau', 'doan'].map(function (m) { return '<button type="button" class="btn btn-outline" data-gd-nghe="' + m + '">' + MAU[m].nhan + '</button>'; }).join('') + '</div>' +
          '<button type="button" class="btn btn-primary gd-dung" data-gd-dung' + (d.azureCoKhoa ? '' : ' disabled') + '>' + (la ? 'Lưu tốc độ mới cho giọng này' : 'Dùng giọng này cho cả web') + '</button>' +
          '<p class="gd-kq" aria-live="polite"></p></article>';
      }).join('') + '</div></section>';

    // Sua cach doc
    html += '<section class="admin-section"><div class="admin-section-title">🛠 Sửa cách đọc từ đa âm (nâng cao, không bắt buộc)</div>' +
      '<p class="gd-goi-y">Nếu Azure đọc sai một từ (chữ đa âm, thanh nhẹ), ghi mỗi dòng: <code>từ = phiên âm SAPI</code>, ví dụ <code>银行 = yin 2 hang 2</code>. Chỉ áp dụng cho giọng Azure. Để trống nếu không cần.</p>' +
      '<textarea class="gd-pa" rows="4" data-gd-pa spellcheck="false">' + esc(Object.keys(d.phatAm || {}).map(function (w) { return w + ' = ' + d.phatAm[w]; }).join('\n')) + '</textarea>' +
      '<p><button type="button" class="btn btn-outline" data-gd-luu-pa>Lưu cách đọc</button></p><p class="gd-kq" aria-live="polite" data-gd-kq-pa></p></section>';

    // Ghi chu
    html += '<section class="admin-section"><div class="admin-section-title">ℹ️ Hạn mức miễn phí và bộ nhớ đệm</div><div class="gd-ghichu">' +
      '<p>• Gói miễn phí của Azure Speech cho khoảng <b>' + so(t.goiFree) + ' ký tự mỗi tháng</b> (mỗi chữ Hán tính 2 ký tự). Web tự dừng gọi Azure khi tới <b>' + so(t.hanMuc) + '</b> ký tự và quay về giọng Google / giọng của máy cho tới đầu tháng sau — không phát sinh tiền.</p>' +
      '<p>• Mỗi đoạn đã đọc được lưu lại trên máy chủ (bộ nhớ đệm, tối đa ' + mb(d.cache.max) + ', tự xoá đoạn lâu không dùng) và trong trình duyệt học sinh: cả lớp nghe cùng một từ chỉ tốn ký tự <b>một lần</b>, lần sau phát ngay.</p>' +
      '<p>• Gói miễn phí cũng giới hạn số lần gọi mỗi phút; khi Azure bận, câu đó tạm đọc bằng giọng dự phòng.</p>' +
      '<p>• File ghi âm của bài học và sách bài tập (tiếng thật của sách) <b>không bị thay</b> — chỉ những chỗ trước đây dùng giọng máy mới đổi.</p>' +
      '<p>• Đổi giọng xong, máy học sinh nhận giọng mới trong khoảng 10 phút.</p></div></section>';
    hop.innerHTML = html;
  }

  function dungAm() { if (state.am) { try { state.am.pause(); } catch (e) { /* */ } state.am = null; } }
  function nghe(btn) {
    var the = btn.closest('[data-gd-giong]'), kq = the.querySelector('.gd-kq'), m = btn.getAttribute('data-gd-nghe');
    var mau = MAU[m], body = { voice: the.getAttribute('data-gd-giong'), tinh: state.tinh };
    if (mau.doiThoai) body.doiThoai = mau.doiThoai; else { body.text = mau.text; body.m = mau.m; }
    dungAm();
    kq.textContent = 'Đang tạo âm thanh…';
    btn.disabled = true;
    goi('/api/admin/tts/thu', { method: 'POST', body: JSON.stringify(body) }).then(function (r) {
      if (!r.ok) return r.json().catch(function () { return {}; }).then(function (j) { throw new Error(j.error || 'Lỗi máy chủ.'); });
      var nguon = r.headers.get('X-TTS-Nguon') || '';
      return r.blob().then(function (b) {
        var a = new Audio(URL.createObjectURL(b));
        state.am = a;
        a.onended = function () { URL.revokeObjectURL(a.src); };
        kq.textContent = /cache/.test(nguon) ? 'Đang phát (lấy từ bộ nhớ đệm, không tốn ký tự).' : 'Đang phát.';
        var p = a.play(); if (p && p.catch) p.catch(function () { kq.textContent = 'Trình duyệt chặn phát âm thanh — bấm lại.'; });
      });
    }).catch(function (e) { kq.textContent = e.message; }).then(function () { btn.disabled = false; tai(); });
  }
  function luu(body, kq, xacNhan) {
    if (xacNhan && !confirm(xacNhan)) return;
    goiJson('/api/admin/tts', { method: 'POST', body: JSON.stringify(body) }).then(function (d) {
      state.d = d; state.tinh = { tu: d.tinh.tu, cau: d.tinh.cau, doan: d.tinh.doan };
      try { localStorage.removeItem('hyv_tts_cfg'); } catch (e) { /* */ }
      // lam moi ban cau hinh trinh duyet nay dang giu (cache 10 phut) de mo trang khac thay ngay giong moi
      try { fetch('/api/tts/cauhinh', { cache: 'reload' }).catch(function () {}); } catch (e) { /* */ }
      ve();
      var k = $('[data-gd-kq]'); if (k) k.textContent = d.provider === 'azure' ? '✓ Đã bật giọng ' + tenNgan(d.voice) + ' cho cả web.' : '✓ Đã quay lại giọng cũ (Google).';
    }).catch(function (e) { if (kq) kq.textContent = e.message; else alert(e.message); });
  }

  document.addEventListener('input', function (e) {
    var t = e.target;
    if (!t.closest || !t.closest('#trGiong') || !t.hasAttribute('data-gd-tinh')) return;
    var m = t.getAttribute('data-gd-tinh');
    state.tinh[m] = +t.value;
    var b = $('[data-gd-rate="' + m + '"]'); if (b) b.textContent = rate(m);
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('button');
    if (!t || !t.closest('#trGiong')) return;
    if (t.hasAttribute('data-gd-nghe')) { nghe(t); return; }
    if (t.hasAttribute('data-gd-dung')) {
      var the = t.closest('[data-gd-giong]'), v = the.getAttribute('data-gd-giong');
      luu({ provider: 'azure', voice: v, tinh: state.tinh }, the.querySelector('.gd-kq'),
        'Dùng giọng ' + tenNgan(v) + ' (Azure) cho cả web?\n\nTrò chơi, nông trại, ôn bài… sẽ đọc bằng giọng này (máy học sinh nhận trong khoảng 10 phút). File ghi âm của bài học và sách bài tập không đổi.');
      return;
    }
    if (t.hasAttribute('data-gd-google')) {
      luu({ provider: 'google' }, null, 'Quay lại giọng cũ (Google / giọng của máy học sinh) cho cả web?');
      return;
    }
    if (t.hasAttribute('data-gd-luu-pa')) {
      var pa = {}, sai = [];
      ($('[data-gd-pa]').value || '').split('\n').forEach(function (dong) {
        dong = dong.trim(); if (!dong) return;
        var i = dong.indexOf('='), w = i > 0 ? dong.slice(0, i).trim() : '', ph = i > 0 ? dong.slice(i + 1).trim().toLowerCase() : '';
        if (w && /^[a-z0-9 ]{1,60}$/.test(ph)) pa[w] = ph; else sai.push(dong);
      });
      var kq = $('[data-gd-kq-pa]');
      if (sai.length) { kq.textContent = 'Dòng chưa đúng dạng: ' + sai.join(' · '); return; }
      goiJson('/api/admin/tts', { method: 'POST', body: JSON.stringify({ phatAm: pa }) }).then(function (d) {
        state.d = d; ve(); var k2 = $('[data-gd-kq-pa]'); if (k2) k2.textContent = '✓ Đã lưu ' + Object.keys(d.phatAm).length + ' từ.';
      }).catch(function (err) { kq.textContent = err.message; });
    }
  });
  window.__trGiong = { render: function () { ve(); tai().then(ve); } };
})();
