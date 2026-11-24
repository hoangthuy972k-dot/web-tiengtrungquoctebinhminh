/* ══════════════════════════════════════════════════════════
   LUYỆN ĐỌC TO CÓ CHẤM — bước "📖 Đọc theo" của Hội thoại (app.js, dpVeBuoc).
   app.js nạp file này khi học sinh mở bước 2, rồi gọi:
     DocTo.mount(than, { key, scene, say, onPass })
       · than : khung #dpbThan (đã có .dp-lines > .dp-line[data-li] > .dp-bubble > .dp-say)
       · key  : '<url bài>#<đoạn>' — điểm tốt nhất từng câu lưu ở localStorage 'hyv_docto'
       · say  : hàm đọc mẫu (vpSpeak) · onPass(li): câu đạt ≥ 70% lần đầu (cộng sao)
     DocTo.stop()  — dừng nghe (app.js gọi trong rpStopRec khi đổi bước / đổi đoạn)
   Chấm: nhận diện giọng nói (Web Speech, zh-CN) rồi so TỪNG CHỮ với câu gốc
   (bỏ dấu câu; số Ả Rập = chữ số Hán; chữ đồng âm máy hay viết nhầm 他/她, 在/再…
   coi là đúng; 儿 cuối âm (一点儿) đọc hay không đều được).
   Trình duyệt không nhận diện được / micro bị chặn: ghi âm để nghe lại (nếu được)
   và nút tự đánh dấu "Em đã đọc" — không bao giờ để nút chết.
   ══════════════════════════════════════════════════════════ */
(function (root) {
  'use strict';

  var PASS = 70;
  var LS_KEY = 'hyv_docto';

  /* ---------------- So chữ (thuần, chạy được trong node để kiểm thử) ---------------- */
  // Nhóm chữ ĐỒNG ÂM HOÀN TOÀN (cùng âm, cùng thanh) máy nhận diện hay chọn nhầm:
  // học sinh đọc đúng âm thì không bị trừ điểm vì máy viết chữ khác.
  var DONG_AM = [
    '他她它', '的得地', '在再', '做作坐座', '是事市试式室视', '有友', '和合河', '里理李礼',
    '像象向项', '元园员原圆', '已以', '后候', '进近', '见件建健', '道到', '刻课客', '网往',
    '钱前', '生声', '书输舒', '家加', '早澡', '气汽器', '校笑效', '天添', '心新欣辛', '电店',
    '跟根', '带代待戴袋', '位味卫未', '叫较', '就旧', '现线县', '吗嘛', '们门', '很狠', '方芳',
    '认任', '机鸡', '意义艺易亿', '公工功攻', '己几', '二两', '〇零', '一幺'
  ];
  var CANON = {};
  DONG_AM.forEach(function (g) { for (var i = 0; i < g.length; i++) CANON[g.charAt(i)] = g.charAt(0); });
  function canon(ch) { return CANON[ch] || ch; }

  var HAN = /[㐀-鿿豈-﫿]/;
  var SO = '零一二三四五六七八九';
  function soLe(s) { return s.split('').map(function (d) { return SO.charAt(+d); }).join(''); }
  function soDem(n) {
    if (n === 0) return '零';
    var dv = ['', '十', '百', '千'], ds = String(n).split('').map(Number), L = ds.length, s = '', khong = false;
    for (var i = 0; i < L; i++) {
      var d = ds[i];
      if (d === 0) { khong = true; continue; }
      if (khong && s) s += '零';
      khong = false;
      s += SO.charAt(d) + dv[L - 1 - i];
    }
    return n >= 10 && n < 20 ? s.replace(/^一十/, '十') : s;
  }
  // "2011" + 年 → 二〇一一 (đọc từng số); 70 → 七十; 3.5 → 三点五; 8:30 → 八点三十; số dài → đọc từng số
  function docSo(run, sau) {
    var m = run.match(/^(\d+)(?:([.:：])(\d+))?$/);
    if (!m) return soLe(run.replace(/\D/g, ''));
    var nguyen = m[1], s;
    if (nguyen.length > 4 || (nguyen.length > 1 && nguyen.charAt(0) === '0') || (nguyen.length === 4 && sau === '年')) s = soLe(nguyen);
    else s = soDem(+nguyen);
    if (m[2]) s += '点' + (m[2] === '.' ? soLe(m[3]) : soDem(+m[3]));
    return s;
  }
  function doiSoToanGoc(s) {
    return String(s || '').replace(/[０-９]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); });
  }
  // Chuỗi → các đơn vị hiển thị { t: chữ gốc, n: [chữ đã chuẩn hoá], opt }
  function tachDonVi(text) {
    var s = doiSoToanGoc(text), out = [], i = 0;
    while (i < s.length) {
      var ch = s.charAt(i);
      if (/\d/.test(ch)) {
        var m = s.slice(i).match(/^\d+(?:[.:：]\d+)?/)[0];
        var chu = docSo(m, s.charAt(i + m.length));
        out.push({ t: m, n: chu.split('').map(canon) });
        i += m.length;
        continue;
      }
      if (HAN.test(ch)) out.push({ t: ch, n: [canon(ch)] });
      else if (/[A-Za-z]/.test(ch)) out.push({ t: ch, n: [ch.toLowerCase()] });
      else out.push({ t: ch, n: [] });
      i++;
    }
    // 儿 hoá (一点儿, 哪儿, 玩儿): máy hay bỏ chữ 儿 — đọc hay không đều được.
    // Không áp dụng cho 女儿, 儿子, 儿童… (儿 là một âm tiết thật).
    out.forEach(function (u, k) {
      if (u.t !== '儿' || k === 0) return;
      var truoc = out[k - 1].t, sau = out[k + 1] ? out[k + 1].t : '';
      if (HAN.test(truoc) && '女幼婴孤健'.indexOf(truoc) < 0 && '子童女歌科'.indexOf(sau) < 0) u.opt = true;
    });
    return out;
  }
  function phang(units) {
    var a = [];
    units.forEach(function (u, k) { u.n.forEach(function (c) { a.push({ c: c, u: k, opt: !!u.opt }); }); });
    return a;
  }

  // So câu gốc với lời máy nghe được: căn chỉnh (khớp 0, thay 1, thiếu 1 — chữ tuỳ chọn 0,
  // thừa 0,5) → điểm % = chữ đúng / (số chữ cần đọc + 0,5 × chữ thừa)
  function cham(goc, nghe) {
    var units = tachDonVi(goc);
    var a = phang(units), b = phang(tachDonVi(nghe)).map(function (x) { return x.c; });
    var n = a.length, m = b.length, i, j;
    var INS = 0.5;
    var D = [];
    for (i = 0; i <= n; i++) D.push(new Array(m + 1));
    D[n][m] = 0;
    for (i = n; i >= 0; i--) {
      for (j = m; j >= 0; j--) {
        if (i === n && j === m) continue;
        var best = Infinity;
        if (i < n && j < m) best = D[i + 1][j + 1] + (a[i].c === b[j] ? 0 : 1);
        if (i < n) best = Math.min(best, D[i + 1][j] + (a[i].opt ? 0 : 1));
        if (j < m) best = Math.min(best, D[i][j + 1] + INS);
        D[i][j] = best;
      }
    }
    var hit = new Array(n).fill(false), thua = 0;
    i = 0; j = 0;
    while (i < n || j < m) {
      if (i < n && j < m && a[i].c === b[j] && D[i][j] === D[i + 1][j + 1]) { hit[i] = true; i++; j++; }
      else if (i < n && j < m && D[i][j] === D[i + 1][j + 1] + 1) { i++; j++; }
      else if (i < n && D[i][j] === D[i + 1][j] + (a[i].opt ? 0 : 1)) i++;
      else { thua++; j++; }
    }
    var dung = 0, can = 0;
    a.forEach(function (x, k) {
      if (hit[k]) { dung++; can++; } else if (!x.opt) can++;
    });
    thua = Math.min(thua, Math.max(can, 1));
    var diem = can ? Math.round(100 * dung / (can + INS * thua)) : 0;
    diem = Math.max(0, Math.min(100, diem));
    var ttDonVi = units.map(function (u) { return { t: u.t, st: u.n.length ? 'ok' : '' }; });
    a.forEach(function (x, k) { if (!hit[k] && !x.opt) ttDonVi[x.u].st = 'miss'; });
    return { diem: diem, sao: soSao(diem), donVi: ttDonVi, dung: dung, can: can, thua: thua };
  }
  function soSao(d) { return d >= 90 ? 3 : d >= PASS ? 2 : d >= 40 ? 1 : 0; }

  /* ---------------- Lưu điểm tốt nhất ---------------- */
  function docKho() { try { var o = JSON.parse(localStorage.getItem(LS_KEY)); return o && typeof o === 'object' ? o : {}; } catch (e) { return {}; } }
  function ghiKho(o) {
    var ks = Object.keys(o);
    if (ks.length > 800) {   // giữ 800 đoạn hội thoại mới nhất
      ks.sort(function (x, y) { return (o[x]._t || 0) - (o[y]._t || 0); });
      ks.slice(0, ks.length - 800).forEach(function (k) { delete o[k]; });
    }
    try { localStorage.setItem(LS_KEY, JSON.stringify(o)); } catch (e) { /* đầy bộ nhớ: bỏ qua */ }
  }

  /* ---------------- Giao diện ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function chon(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  var LOI_KHEN = [
    ['Máy chưa nghe rõ lắm. Bấm 🔊 nghe mẫu, rồi đọc to, chậm, rõ từng chữ nhé — em làm được mà!',
      'Chưa sao đâu! Nghe mẫu thêm một lần rồi đọc lại thật to và rõ nhé.'],
    ['Khá rồi! Nghe mẫu rồi đọc chậm, rõ các chữ màu đỏ nhé.',
      'Em đọc được một phần rồi. Nghe mẫu thêm một lần rồi thử lại nhé!'],
    ['Tốt lắm! Chữ màu đỏ là chỗ máy chưa nghe rõ — thử lại để lấy 3 sao nhé.',
      'Đọc tốt rồi! Chú ý thêm mấy chữ màu đỏ là hoàn hảo.'],
    ['Xuất sắc! Em đọc rất chuẩn 👏', 'Tuyệt vời! Máy nghe đúng cả câu.', 'Hay quá! Em đọc rõ ràng, trôi chảy.']
  ];
  function saoHtml(n) {
    return '<span class="dt-sao" aria-label="' + n + ' trên 3 sao">' +
      [0, 1, 2].map(function (k) { return '<i class="' + (k < n ? 'on' : '') + '">★</i>'; }).join('') + '</span>';
  }

  var SR = root.SpeechRecognition || root.webkitSpeechRecognition || null;
  var srHong = false;   // trình duyệt có SR nhưng không dùng được (vd. iPhone tắt nhận diện)
  function coGhiAm() {
    return !!(root.MediaRecorder && root.navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  var dang = null;      // lượt đang nghe / ghi âm: { li, rec, mr, stream, huy, ... }
  var cssXong = false;

  function napCss() {
    if (cssXong || !root.document) return;
    cssXong = true;
    if (document.querySelector('link[href*="/css/doc-to.css"]')) return;
    var v = '';
    var s = document.querySelector('script[src*="/js/doc-to.js"]');
    var m = s && s.getAttribute('src').match(/[?&]v=([^&]+)/);
    if (m) v = '?v=' + m[1];
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = '/css/doc-to.css' + v;
    document.head.appendChild(l);
  }

  function stop() {
    var g = dang;
    if (!g) return;
    dang = null;
    g.huy = true;
    clearTimeout(g.hen);
    try { if (g.rec) g.rec.abort(); } catch (e) { /* bỏ qua */ }
    try { if (g.mr && g.mr.state !== 'inactive') g.mr.stop(); } catch (e) { /* bỏ qua */ }
    if (g.stream) g.stream.getTracks().forEach(function (t) { t.stop(); });
    if (g.xong) g.xong();
  }

  function imLang() {
    try { if (root.speechSynthesis) root.speechSynthesis.cancel(); } catch (e) { /* bỏ qua */ }
    try { document.querySelectorAll('audio').forEach(function (a) { if (!a.paused) a.pause(); }); } catch (e) { /* bỏ qua */ }
  }

  function mount(than, opts) {
    stop();
    opts = opts || {};
    if (!than || !opts.scene || !opts.key || than._docTo) return;
    napCss();
    var scene = opts.scene;
    var lines = scene.lines || [];
    var kho = docKho();
    var bang = kho[opts.key] || {};
    function luu() { kho = docKho(); bang._t = Date.now(); kho[opts.key] = bang; ghiKho(kho); }
    var urlGhi = {};   // li -> blob URL bản ghi (chỉ trong lần mở trang này)

    var cheDo = function () { return SR && !srHong ? 'nghe' : coGhiAm() ? 'ghi' : 'tu'; };

    // Ô tổng kết ở đầu
    var tong = document.createElement('div');
    tong.className = 'dt-tong';
    tong.setAttribute('aria-live', 'polite');
    var dau = than.querySelector('.dp-content-head');
    if (dau) than.insertBefore(tong, dau); else than.insertBefore(tong, than.firstChild);

    function veTong() {
      var N = lines.length, tot = 0, tuDanh = 0;
      for (var li = 0; li < N; li++) {
        var r = bang[li];
        if (!r) continue;
        if (r.s >= PASS) tot++; else if (r.k) tuDanh++;
      }
      var cd = cheDo();
      var xong = tot + (cd === 'nghe' ? 0 : tuDanh);
      var pct = N ? Math.round(100 * xong / N) : 0;
      tong.innerHTML =
        '<div class="dt-tong-dong"><span class="dt-tong-ic" aria-hidden="true">🎙️</span><div class="dt-tong-txt"><span>' +
          (xong >= N && N
            ? '<b>🎉 Em đã đọc tốt cả ' + N + '/' + N + ' câu!</b>'
            : cd === 'nghe' ? '<b>Em đã đọc tốt ' + tot + '/' + N + ' câu</b>' + (tuDanh ? ' · tự đánh dấu ' + tuDanh + ' câu' : '')
            : '<b>Em đã đọc ' + xong + '/' + N + ' câu</b>') +
          '</span><span class="dt-tong-meo">' + (cd === 'nghe'
            ? 'Bấm <b>🎙️ Đọc</b> ở từng câu rồi đọc to — máy tô màu từng chữ và chấm sao. Được ★★ trở lên là đọc tốt.'
            : cd === 'ghi'
              ? 'Trình duyệt này chưa chấm được giọng đọc (hay gặp trên iPhone). Bấm <b>🎙️ Đọc</b> để ghi âm, nghe lại giọng em so với mẫu rồi tự đánh dấu. Muốn máy chấm, mở bằng Chrome hoặc Edge.'
              : 'Trình duyệt này chưa chấm và chưa ghi âm được. Em nghe mẫu 🔊, đọc to theo rồi bấm <b>✓ Em đã đọc</b>. Muốn máy chấm, mở bằng Chrome hoặc Edge.') +
          '</span></div></div>' +
        '<div class="dt-thanh" role="progressbar" aria-valuemin="0" aria-valuemax="' + N + '" aria-valuenow="' + xong + '"><i style="width:' + pct + '%"></i></div>';
    }

    // Nút + chip ở từng câu, khung kết quả ngay dưới câu
    var o = {};   // li -> { line, bubble, btn, chip, kq }
    Array.prototype.forEach.call(than.querySelectorAll('.dp-line[data-li]'), function (lineEl) {
      var li = +lineEl.getAttribute('data-li');
      var ln = lines[li];
      if (!ln || !ln.zh) return;
      var bubble = lineEl.querySelector('.dp-bubble');
      if (!bubble) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dt-mic';
      btn.setAttribute('data-dt-li', li);
      // Hàng dưới cùng bong bóng: [🎙️ Đọc] [điểm tốt nhất] — không chen vào chữ Hán trên điện thoại
      var hang = document.createElement('div');
      hang.className = 'dt-hang';
      var chip = document.createElement('span');
      chip.className = 'dt-chip';
      hang.appendChild(btn);
      hang.appendChild(chip);
      bubble.appendChild(hang);
      var kq = document.createElement('div');
      kq.className = 'dt-kq';
      kq.hidden = true;
      kq.setAttribute('aria-live', 'polite');
      lineEl.parentNode.insertBefore(kq, lineEl.nextSibling);
      o[li] = { line: lineEl, bubble: bubble, btn: btn, chip: chip, kq: kq, ln: ln };
      veNut(li);
    });
    if (!Object.keys(o).length) { tong.remove(); return; }
    veTong();

    function veNut(li) {
      var x = o[li], r = bang[li], dangNghe = dang && dang.li === li;
      x.btn.classList.toggle('is-rec', !!dangNghe);
      x.btn.innerHTML = dangNghe ? '⏹ Xong' : '🎙️ Đọc';
      x.btn.setAttribute('aria-label', dangNghe ? 'Đọc xong, dừng nghe' : 'Đọc to câu này để máy chấm');
      if (r && typeof r.s === 'number') {
        x.chip.className = 'dt-chip ' + (r.s >= PASS ? 'is-ok' : 'is-low');
        x.chip.innerHTML = saoHtml(soSao(r.s)) + ' ' + r.s + '%';
        x.chip.title = 'Điểm tốt nhất của em ở câu này';
      } else if (r && r.k) {
        x.chip.className = 'dt-chip is-tu';
        x.chip.textContent = '✓ Đã đọc';
        x.chip.title = 'Em tự đánh dấu đã đọc';
      } else {
        x.chip.className = 'dt-chip';
        x.chip.textContent = '';
      }
    }

    function anPy(li) {
      var box = o[li].line.parentNode;
      return box && box.classList.contains('vn-hidden') && !o[li].line.classList.contains('show-vn');
    }
    function dongGoc(li, donVi) {
      var ln = o[li].ln;
      var zh = donVi
        ? donVi.map(function (u) { return u.st ? '<span class="dt-' + u.st + '">' + esc(u.t) + '</span>' : esc(u.t); }).join('')
        : esc(ln.zh.replace(/<[^>]*>/g, ''));
      return '<div class="dt-dong hanzi">' + zh + '</div>' + (ln.py && !anPy(li) ? '<div class="dt-py">' + esc(ln.py) + '</div>' : '');
    }
    function nutTuDanh(li) {
      var r = bang[li];
      return '<button type="button" class="rp-btn dt-tu" data-dt-tu="' + li + '"' + (r && (r.k || r.s >= PASS) ? ' disabled' : '') + '>' +
        (r && (r.k || r.s >= PASS) ? '✓ Đã đánh dấu' : '✓ Em đã đọc câu này') + '</button>';
    }
    function nutMau(li) { return typeof opts.say === 'function' ? '<button type="button" class="rp-btn" data-dt-mau="' + li + '">🔊 Nghe mẫu</button>' : ''; }

    function moKq(li, html, lop) {
      var x = o[li];
      x.kq.className = 'dt-kq' + (lop ? ' ' + lop : '');
      x.kq.innerHTML = html;
      x.kq.hidden = false;
    }

    function veKetQua(li, kq, nghe) {
      var r = bang[li] || {};
      var loi = chon(LOI_KHEN[kq.sao]);
      moKq(li,
        dongGoc(li, kq.donVi) +
        '<div class="dt-nghe">Máy nghe được: <span class="hanzi">「' + esc(nghe) + '」</span></div>' +
        '<div class="dt-diem">' + saoHtml(kq.sao) + '<b>' + kq.diem + '%</b><span>' + esc(loi) + '</span></div>' +
        (r.s > kq.diem ? '<div class="dt-best">Điểm tốt nhất của em ở câu này vẫn giữ: ' + saoHtml(soSao(r.s)) + ' ' + r.s + '%</div>' : '') +
        '<div class="dt-nut"><button type="button" class="rp-btn is-mic" data-dt-lai="' + li + '">↻ Thử lại</button>' + nutMau(li) + '</div>',
        kq.diem >= PASS ? 'is-ok' : 'is-low');
    }

    function veLoi(li, thongBao) {
      moKq(li,
        '<div class="dt-loi">' + thongBao + '</div>' +
        '<div class="dt-nut"><button type="button" class="rp-btn is-mic" data-dt-lai="' + li + '">↻ Thử lại</button>' + nutMau(li) + nutTuDanh(li) + '</div>',
        'is-warn');
    }

    function veDangNghe(li, chu) {
      var cd = dang && dang.cheDo;
      moKq(li,
        dongGoc(li) +
        '<div class="dt-dang"><span class="rp-rec-dot"></span>' + (cd === 'ghi' ? 'Đang ghi âm… em đọc to câu này' : 'Đang nghe… em đọc to câu này') + '</div>' +
        (cd === 'nghe' ? '<div class="dt-live hanzi">' + esc(chu || '') + '</div>' : '') +
        '<div class="dt-nut"><button type="button" class="rp-btn is-main" data-dt-xong="' + li + '">⏹ Đọc xong</button></div>',
        'is-dang');
    }

    function ghiDiem(li, kq) {
      var r = bang[li] || {};
      var truoc = typeof r.s === 'number' ? r.s : -1;
      if (kq.diem > truoc) { r.s = kq.diem; r.t = Date.now(); }
      bang[li] = r;
      luu();
      // máy chủ chỉ cộng sao 1 lần cho mỗi câu (khoá theo câu), nên gọi lại không sao
      if (kq.diem >= PASS && typeof opts.onPass === 'function') opts.onPass(li);
    }

    function tuDanh(li) {
      var r = bang[li] || {};
      r.k = 1; r.t = r.t || Date.now();
      bang[li] = r;
      luu();
      veNut(li);
      veTong();
      var b = o[li].kq.querySelector('[data-dt-tu]');
      if (b) { b.disabled = true; b.textContent = '✓ Đã đánh dấu'; }
    }

    /* --- Nhận diện giọng nói --- */
    function batNghe(li) {
      var rec;
      try { rec = new SR(); } catch (e) { srHong = true; veTong(); batDau(li); return; }
      rec.lang = 'zh-CN';
      rec.continuous = false;
      rec.interimResults = true;
      rec.maxAlternatives = 1;
      var g = dang = { li: li, rec: rec, cheDo: 'nghe', text: '', tam: '', loi: null };
      g.xong = function () { bo(li); };
      rec.onresult = function (e) {
        if (dang !== g) return;
        var tam = '';
        for (var k = e.resultIndex; k < e.results.length; k++) {
          if (e.results[k].isFinal) g.text += e.results[k][0].transcript; else tam += e.results[k][0].transcript;
        }
        g.tam = tam;
        var live = o[li].kq.querySelector('.dt-live');
        if (live) live.textContent = g.text + tam;
      };
      rec.onerror = function (e) { g.loi = (e && e.error) || 'loi'; };
      rec.onend = function () {
        if (g.huy || dang !== g) return;
        dang = null;
        clearTimeout(g.hen);
        veNut(li);
        if (!document.body.contains(than)) return;
        var noi = (g.text || g.tam || '').trim();
        if (noi && /[㐀-鿿A-Za-z0-9０-９]/.test(noi)) {
          var kq = cham(o[li].ln.zh.replace(/<[^>]*>/g, ''), noi);
          ghiDiem(li, kq);
          veKetQua(li, kq, noi);
          veNut(li);
          veTong();
          return;
        }
        thongBaoLoi(li, g.loi);
      };
      try { rec.start(); } catch (e) { dang = null; srHong = true; veTong(); batDau(li); return; }
      // phòng khi trình duyệt không tự dừng
      g.hen = setTimeout(function () { if (dang === g) { try { rec.stop(); } catch (e) { /* bỏ qua */ } } }, 12000 + o[li].ln.zh.length * 600);
      veNut(li);
      veDangNghe(li, '');
    }
    // Lượt nghe bị huỷ (đổi bước, bấm câu khác, bấm 🔊): đóng khung "đang nghe"
    function bo(li) {
      veNut(li);
      if (o[li].kq.classList.contains('is-dang')) o[li].kq.hidden = true;
    }
    function thongBaoLoi(li, l) {
        if (l === 'not-allowed') {
          veLoi(li, '🔒 Chưa có quyền dùng micro. Bấm biểu tượng ổ khoá cạnh địa chỉ trang → cho phép <b>Micro</b>, rồi bấm Thử lại. Hoặc em đọc to theo mẫu rồi tự đánh dấu.');
        } else if (l === 'service-not-allowed' || l === 'language-not-supported') {
          srHong = true;
          veTong();
          veLoi(li, 'Trình duyệt này không cho máy nghe để chấm (hay gặp trên iPhone).' +
            (coGhiAm() ? ' Bấm <b>Thử lại</b> để ghi âm và nghe lại giọng em,' : ' Em nghe mẫu, đọc to theo') + ' rồi tự đánh dấu. Muốn máy chấm, mở bằng Chrome hoặc Edge.');
        } else if (l === 'audio-capture') {
          veLoi(li, '🎤 Không tìm thấy micro trên máy. Cắm tai nghe có micro rồi thử lại, hoặc đọc to theo mẫu rồi tự đánh dấu.');
        } else if (l === 'network') {
          veLoi(li, '📶 Mạng yếu nên máy chưa chấm được. Thử lại sau giây lát, hoặc đọc to theo mẫu rồi tự đánh dấu.');
        } else {
          veLoi(li, 'Máy chưa nghe thấy gì. Em bấm <b>Thử lại</b> rồi đọc to, rõ hơn nhé (để điện thoại gần miệng).');
        }
    }

    /* --- Ghi âm để nghe lại (không có nhận diện) --- */
    function batGhi(li) {
      var g = dang = { li: li, cheDo: 'ghi', chunks: [] };
      g.xong = function () { bo(li); };
      veNut(li);
      moKq(li, dongGoc(li) + '<div class="dt-dang">Đang mở micro…</div>', 'is-dang');
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        if (dang !== g || g.huy) { stream.getTracks().forEach(function (t) { t.stop(); }); return; }
        g.stream = stream;
        try {
          g.mr = new MediaRecorder(stream);
        } catch (e) {
          stream.getTracks().forEach(function (t) { t.stop(); });
          dang = null; veNut(li);
          veLoi(li, 'Máy chưa ghi âm được. Em nghe mẫu, đọc to theo rồi tự đánh dấu nhé.');
          return;
        }
        g.mr.ondataavailable = function (e) { if (e.data && e.data.size) g.chunks.push(e.data); };
        g.mr.onstop = function () {
          if (g.stream) g.stream.getTracks().forEach(function (t) { t.stop(); });
          if (g.huy) return;
          if (urlGhi[li]) URL.revokeObjectURL(urlGhi[li]);
          urlGhi[li] = g.chunks.length ? URL.createObjectURL(new Blob(g.chunks, { type: g.mr.mimeType || 'audio/webm' })) : null;
          if (!document.body.contains(than)) return;
          moKq(li,
            dongGoc(li) +
            '<div class="dt-loi">' + (urlGhi[li] ? 'Nghe lại giọng em rồi so với mẫu. Đọc giống mẫu rồi thì bấm <b>✓ Em đã đọc câu này</b>.' : 'Chưa ghi được tiếng. Em thử ghi lại nhé.') + '</div>' +
            '<div class="dt-nut">' + (urlGhi[li] ? '<button type="button" class="rp-btn is-main" data-dt-nghe="' + li + '">▶ Nghe giọng em</button>' : '') +
              nutMau(li) + '<button type="button" class="rp-btn is-mic" data-dt-lai="' + li + '">↻ Ghi lại</button>' + nutTuDanh(li) + '</div>',
            'is-warn');
        };
        g.mr.start();
        g.hen = setTimeout(function () { if (dang === g) xongGhi(); }, 20000);
        veDangNghe(li);
      }).catch(function () {
        if (dang !== g) return;
        dang = null; veNut(li);
        veLoi(li, '🔒 Chưa có quyền dùng micro. Cho phép micro cho trang này rồi bấm Thử lại — hoặc em đọc to theo mẫu rồi tự đánh dấu.');
      });
    }
    function xongGhi() {
      var g = dang;
      if (!g || g.cheDo !== 'ghi') return;
      dang = null;
      clearTimeout(g.hen);
      veNut(g.li);
      try { if (g.mr && g.mr.state !== 'inactive') g.mr.stop(); } catch (e) { /* bỏ qua */ }
    }

    function batDau(li) {
      if (dang) {
        var cu = dang.li;
        if (cu === li) {   // bấm lại chính nút đang nghe = đọc xong
          if (dang.cheDo === 'nghe') { try { dang.rec.stop(); } catch (e) { stop(); } } else xongGhi();
          return;
        }
        stop();
      }
      imLang();
      var cd = cheDo();
      if (cd === 'nghe') batNghe(li);
      else if (cd === 'ghi') batGhi(li);
      else {
        moKq(li, dongGoc(li) +
          '<div class="dt-loi">Trình duyệt này chưa chấm được giọng đọc. Em nghe mẫu 🔊, đọc to theo 2–3 lần rồi bấm <b>✓ Em đã đọc câu này</b>.</div>' +
          '<div class="dt-nut">' + nutMau(li) + nutTuDanh(li) + '</div>', 'is-warn');
      }
    }

    // Một bộ lắng nghe cho cả khung (khung được vẽ lại mỗi lần đổi bước)
    than.addEventListener('click', function (e) {
      var t = e.target.closest('[data-speak], .dt-mic, [data-dt-lai], [data-dt-xong], [data-dt-mau], [data-dt-tu], [data-dt-nghe]');
      if (!t || !than.contains(t)) return;
      if (t.hasAttribute('data-speak')) { if (dang) stop(); return; }   // bấm 🔊 khi đang nghe: dừng nghe trước
      e.stopPropagation();   // không bật/tắt pinyin của bong bóng
      if (t.classList.contains('dt-mic')) batDau(+t.getAttribute('data-dt-li'));
      else if (t.hasAttribute('data-dt-lai')) batDau(+t.getAttribute('data-dt-lai'));
      else if (t.hasAttribute('data-dt-xong')) batDau(+t.getAttribute('data-dt-xong'));
      else if (t.hasAttribute('data-dt-mau')) { if (dang) stop(); opts.say(o[+t.getAttribute('data-dt-mau')].ln.zh.replace(/<[^>]*>/g, '')); }
      else if (t.hasAttribute('data-dt-tu')) tuDanh(+t.getAttribute('data-dt-tu'));
      else if (t.hasAttribute('data-dt-nghe')) {
        var u = urlGhi[+t.getAttribute('data-dt-nghe')];
        if (u) { imLang(); try { new Audio(u).play(); } catch (err) { /* bỏ qua */ } }
      }
    }, true);

    // cho kiểm thử: giả lập kết quả nhận diện
    than._docTo = {
      gia: function (li, nghe) {
        var kq = cham(o[li].ln.zh.replace(/<[^>]*>/g, ''), nghe);
        ghiDiem(li, kq); veKetQua(li, kq, nghe); veNut(li); veTong();
        return kq;
      },
      loi: function (li, ma) { thongBaoLoi(li, ma); }
    };
  }

  var api = { mount: mount, stop: stop, cham: cham, _tach: tachDonVi, PASS: PASS };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root && root.document) root.DocTo = api;
})(typeof window !== 'undefined' ? window : globalThis);
