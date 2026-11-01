/* ══════════════════════════════════════════════════════════
   KỂ LẠI BÀI ĐỌC 复述 — dùng chung cho lộ trình (app.js, HSK 5
   bước 7) và thẻ "Kể lại bài" trên trang bài đầy đủ (hsk5-extra.js):
     KeLai.mount(hop, retellData, { key, goc, say, onDone })
   · goc: nguyên văn bài đọc — để nhận ra khi em đọc thuộc lòng.
   · Ghi âm (MediaRecorder) để nghe lại + nhận diện giọng nói
     (Web Speech API, zh-CN — Chrome/Edge/Safari) để chấm: đủ ý,
     số từ mới dùng được, độ dài, có kể bằng lời mình không.
     Trình duyệt không nhận diện được thì em tự chấm theo danh sách.
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var LS_PREFIX = 'hyv_kelai:';
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function sach(t) { return String(t || '').replace(/[\s，。！？、,.!?；;：:“”"'‘’（）()「」]/g, ''); }
  function doc(key) { try { return JSON.parse(localStorage.getItem(LS_PREFIX + key)) || {}; } catch (e) { return {}; } }
  function ghi(key, v) { try { localStorage.setItem(LS_PREFIX + key, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function mmss(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + ('0' + s % 60).slice(-2); }

  // Ti le cum 6 chu cua loi em trung nguyen van -> cao la dang doc thuoc
  function tiLeThuoc(noi, goc) {
    noi = sach(noi); goc = sach(goc);
    if (noi.length < 12 || !goc) return 0;
    var n = 0, tong = 0;
    for (var i = 0; i + 6 <= noi.length; i += 3) { tong++; if (goc.indexOf(noi.substr(i, 6)) >= 0) n++; }
    return tong ? n / tong : 0;
  }

  function cham(d, loi, giay, goc) {
    var t = sach(loi);
    var phan = d.outline.map(function (o) {
      var nghe = o.words.filter(function (w) { return t.indexOf(w) >= 0; });
      return { ten: o.step, nghe: nghe, thieu: o.words.filter(function (w) { return nghe.indexOf(w) < 0; }), du: nghe.length > 0 };
    });
    var tuDung = {};
    phan.forEach(function (p) { p.nghe.forEach(function (w) { tuDung[w] = 1; }); });
    var soTu = Object.keys(tuDung).length;
    var duY = phan.filter(function (p) { return p.du; }).length;
    var thuoc = tiLeThuoc(loi, goc);
    var dMuc = {
      y: Math.round(40 * duY / phan.length),
      tu: Math.min(30, soTu * 3),
      dai: giay < 20 ? 4 : giay < 40 ? 10 : giay < 50 ? 15 : giay <= 150 ? 20 : 16,
      minh: thuoc < 0.3 ? 10 : thuoc < 0.5 ? 6 : 2
    };
    return {
      phan: phan, soTu: soTu, duY: duY, thuoc: thuoc, giay: giay, loi: loi, muc: dMuc,
      // doc thuoc nguyen van thi khong tinh la ke lai: toi da 50
      diem: Math.min(thuoc >= 0.6 ? 50 : 100, dMuc.y + dMuc.tu + dMuc.dai + dMuc.minh), luc: Date.now()
    };
  }

  function mount(hop, d, opts) {
    opts = opts || {};
    if (!hop || !d || !d.outline) return;
    var key = opts.key || 'mac-dinh';
    var st = doc(key);
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    var ghiAm = null; // { stream, mr, rec, t0, text, tam, timer, tick }
    var urlNghe = null;
    var cheDo = st.cheDo || 'goi-y';

    hop.classList.add('lv');
    hop.innerHTML =
      (d.intro ? '<div class="lv-card lv-intro-card">' + d.intro + '</div>' : '') +
      '<div class="lv-tabs" role="group" aria-label="Mức gợi ý">' +
        '<button type="button" class="lv-tab" data-kl-mode="goi-y">Có câu gợi ý</button>' +
        '<button type="button" class="lv-tab" data-kl-mode="tu-khoa">Chỉ từ khoá <small>khó hơn</small></button>' +
      '</div>' +
      '<div class="kl-grid" id="klDanY">' + d.outline.map(function (o, i) {
        return '<div class="lv-card kl-step" data-kl-p="' + i + '">' +
          '<span class="lv-num">' + (i + 1) + '</span>' +
          '<div class="kl-body"><div class="kl-name">' + esc(o.step) + '</div>' +
            '<div class="kl-cue lv-zh">' + esc(o.cue) + '</div>' +
            '<div class="kl-words">' + o.words.map(function (w) {
              return '<button type="button" class="kl-w lv-zh" data-kl-say="' + esc(w) + '" aria-label="Nghe từ ' + esc(w) + '">' + esc(w) + '</button>';
            }).join('') + '</div></div></div>';
      }).join('') + '</div>' +
      '<div class="lv-card kl-rec">' +
        '<div class="kl-rec-top">' +
          '<button type="button" class="kl-mic" id="klMic"><span class="kl-mic-dot" aria-hidden="true"></span><span id="klMicTxt">Bắt đầu kể</span></button>' +
          '<div class="kl-timer"><b id="klTime">0:00</b><span>mục tiêu khoảng 1 phút</span>' +
            '<div class="lv-bar"><i id="klBar"></i></div></div>' +
        '</div>' +
        (SR ? '' : '<p class="lv-note">Trình duyệt này chưa nhận diện được giọng nói — em vẫn ghi âm và nghe lại được, rồi tự chấm theo danh sách. Muốn máy chấm, mở bằng Chrome hoặc Edge.</p>') +
        '<div class="kl-live lv-zh" id="klLive" hidden></div>' +
        '<div class="lv-hint" id="klMsg"></div>' +
      '</div>' +
      '<div id="klKq"></div>';

    function chonCheDo(m) {
      cheDo = m; st.cheDo = m; ghi(key, st);
      hop.querySelectorAll('[data-kl-mode]').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-kl-mode') === m); });
      hop.querySelectorAll('.kl-cue').forEach(function (c) { c.hidden = m === 'tu-khoa'; });
    }
    hop.querySelectorAll('[data-kl-mode]').forEach(function (b) {
      b.addEventListener('click', function () { chonCheDo(b.getAttribute('data-kl-mode')); });
    });
    hop.addEventListener('click', function (e) {
      var w = e.target.closest('[data-kl-say]');
      if (w && typeof opts.say === 'function') opts.say(w.getAttribute('data-kl-say'));
    });

    // To xanh tu khoa da nghe thay (ca luc dang noi)
    function toTu(text) {
      var t = sach(text);
      hop.querySelectorAll('.kl-w').forEach(function (b) { b.classList.toggle('is-heard', !!t && t.indexOf(b.getAttribute('data-kl-say')) >= 0); });
      hop.querySelectorAll('[data-kl-p]').forEach(function (c, i) {
        var du = d.outline[i].words.some(function (w) { return t && t.indexOf(w) >= 0; });
        c.classList.toggle('is-du', du);
      });
    }

    var mic = hop.querySelector('#klMic');
    mic.addEventListener('click', function () { if (ghiAm) dung(); else batDau(); });

    function batDau() {
      var msg = hop.querySelector('#klMsg');
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        msg.textContent = 'Trình duyệt không cho ghi âm — hãy mở bằng Chrome hoặc Edge.';
        return;
      }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        var g = ghiAm = { stream: stream, t0: Date.now(), text: '', tam: '', chunks: [], thu: 0 };
        try {
          g.mr = new MediaRecorder(stream);
          g.mr.ondataavailable = function (e) { if (e.data && e.data.size) g.chunks.push(e.data); };
          g.mr.onstop = function () {
            if (urlNghe) URL.revokeObjectURL(urlNghe);
            urlNghe = URL.createObjectURL(new Blob(g.chunks, { type: g.mr.mimeType || 'audio/webm' }));
            var p = hop.querySelector('#klPlay');
            if (p) p.disabled = false;
          };
          g.mr.start();
        } catch (e) { g.mr = null; }
        if (SR) {
          try {
            var rec = g.rec = new SR();
            rec.lang = 'zh-CN'; rec.continuous = true; rec.interimResults = true;
            rec.onresult = function (e) {
              var tam = '';
              for (var k = e.resultIndex; k < e.results.length; k++) {
                if (e.results[k].isFinal) g.text += e.results[k][0].transcript; else tam += e.results[k][0].transcript;
              }
              g.tam = tam;
              var live = hop.querySelector('#klLive');
              live.hidden = false; live.textContent = g.text + tam;
              toTu(g.text + tam);
            };
            // Chrome tu ngat sau vai giay im lang -> noi lai khi em con dang ke
            rec.onend = function () { if (ghiAm === g && g.thu < 20) { g.thu++; try { rec.start(); } catch (err) { /* bo qua */ } } };
            rec.start();
          } catch (e) { g.rec = null; }
        }
        mic.classList.add('is-rec');
        hop.querySelector('#klMicTxt').textContent = 'Dừng & chấm';
        msg.textContent = 'Đang ghi âm… kể theo dàn ý, từ khoá nào máy nghe được sẽ chuyển xanh.';
        hop.querySelector('#klKq').innerHTML = '';
        toTu('');
        g.tick = setInterval(function () {
          var s = (Date.now() - g.t0) / 1000;
          hop.querySelector('#klTime').textContent = mmss(s);
          hop.querySelector('#klBar').style.width = Math.min(100, s / 60 * 100) + '%';
          if (s >= 180) dung();
        }, 250);
      }).catch(function () {
        hop.querySelector('#klMsg').textContent = 'Không mở được micro — hãy cho phép trang dùng micro rồi bấm lại.';
      });
    }

    function dung() {
      var g = ghiAm;
      if (!g) return;
      ghiAm = null;
      clearInterval(g.tick);
      var giay = (Date.now() - g.t0) / 1000;
      try { if (g.rec) g.rec.stop(); } catch (e) { /* bo qua */ }
      try { if (g.mr && g.mr.state !== 'inactive') g.mr.stop(); } catch (e) { /* bo qua */ }
      g.stream.getTracks().forEach(function (tr) { tr.stop(); });
      mic.classList.remove('is-rec');
      hop.querySelector('#klMicTxt').textContent = 'Kể lại lần nữa';
      hop.querySelector('#klMsg').textContent = '';
      // Doi mot nhip cho ket qua nhan dien cuoi cung ve
      setTimeout(function () {
        var loi = (g.text + (g.tam || '')).trim();
        var mayNghe = !!g.rec && sach(loi).length >= 15;
        var kq = mayNghe ? cham(d, loi, giay, opts.goc || '') : { tuCham: true, giay: giay, loi: loi, luc: Date.now() };
        st.kq = kq; ghi(key, st);
        veKetQua(kq, true);
        baoXong();
      }, 700);
    }

    function thanh(ten, diem, max) {
      return '<div class="lv-tc"><span>' + ten + '</span><div class="lv-bar"><i style="width:' + Math.round(diem / max * 100) + '%"></i></div><b>' + diem + '<small>/' + max + '</small></b></div>';
    }

    function veKetQua(kq, moi) {
      var el = hop.querySelector('#klKq');
      var h = '';
      if (kq.tuCham) {
        h += '<div class="lv-card lv-warn">' + (kq.giay < 15 ? 'Bài kể ngắn quá (' + mmss(kq.giay) + ') — ' : '') +
          'Máy chưa nghe rõ lời em nên không tự chấm được. Em nghe lại bản ghi và tự chấm theo danh sách bên dưới nhé.</div>';
      } else {
        var diem = kq.diem;
        h += '<div class="lv-card lv-score"><div class="lv-score-top"><div class="lv-ring' + (diem >= 60 ? ' pass' : '') + '"><b>' + diem + '</b><small>/100</small></div>' +
          '<div><div class="lv-src">Máy chấm theo lời em vừa kể</div><div class="lv-meta">' + mmss(kq.giay) + ' · đủ ' + kq.duY + '/' + kq.phan.length + ' ý · ' + kq.soTu + ' từ mới</div>' +
          '<div class="lv-note">Máy nghe có thể sai vài chữ; điểm này để em biết mình còn thiếu ý nào, từ nào.</div></div></div>' +
          thanh('Đủ ý', kq.muc.y, 40) + thanh('Từ mới', kq.muc.tu, 30) + thanh('Độ dài', kq.muc.dai, 20) + thanh('Lời của em', kq.muc.minh, 10) + '</div>';
        if (kq.thuoc >= 0.5) {
          h += '<div class="lv-card lv-warn"><b>Em đang đọc thuộc nguyên văn</b> (khoảng ' + Math.round(kq.thuoc * 100) + '% trùng bài đọc). Bài tập này yêu cầu kể bằng LỜI CỦA EM — thử chuyển sang "Chỉ từ khoá" và kể lại bằng câu đơn giản hơn.</div>';
        }
        var thieu = kq.phan.filter(function (p) { return !p.du; });
        h += '<div class="lv-card"><div class="lv-label">Từng ý trong dàn ý</div><ol class="kl-kq">' + kq.phan.map(function (p) {
          return '<li class="' + (p.du ? 'is-du' : 'is-thieu') + '"><b>' + (p.du ? '✓ ' : '✗ ') + esc(p.ten) + '</b>' +
            (p.nghe.length ? ' <span class="kl-ok lv-zh">' + esc(p.nghe.join('、')) + '</span>' : '') +
            (p.thieu.length ? ' <span class="kl-miss">chưa dùng: <span class="lv-zh">' + esc(p.thieu.join('、')) + '</span></span>' : '') + '</li>';
        }).join('') + '</ol>' +
          (thieu.length ? '<p class="lv-note">Kể lại lần nữa và nhớ thêm ý: ' + esc(thieu.map(function (p) { return p.ten; }).join(', ')) + '.</p>' : '<p class="lv-note">Em đã kể đủ các ý — lần sau thử chế độ "Chỉ từ khoá" và dùng thêm từ mới.</p>') +
        '</div>';
        h += '<div class="lv-card"><div class="lv-label">Máy nghe được</div><div class="lv-bai lv-zh">' + esc(kq.loi) + '</div></div>';
      }
      h += '<div class="lv-card"><div class="lv-actions">' +
        '<button type="button" class="lv-btn ghost sm" id="klPlay"' + (urlNghe ? '' : ' disabled') + '>▶ Nghe lại bản ghi</button>' +
        (moi || urlNghe ? '' : '<span class="lv-hint">Bản ghi chỉ giữ trong lần mở trang này.</span>') + '</div>' +
        '<div class="lv-label" style="margin-top:14px">Kể xong tự chấm</div>' +
        (d.checklist || []).map(function (c, i) {
          var on = st.tick && st.tick[i];
          return '<label class="kl-check"><input type="checkbox" data-kl-tick="' + i + '"' + (on ? ' checked' : '') + '> ' + esc(c) + '</label>';
        }).join('') + '</div>';
      el.innerHTML = h;
      var p = el.querySelector('#klPlay');
      if (p) p.addEventListener('click', function () { if (urlNghe) new Audio(urlNghe).play(); });
      el.querySelectorAll('[data-kl-tick]').forEach(function (c) {
        c.addEventListener('change', function () {
          st.tick = st.tick || {};
          st.tick[c.getAttribute('data-kl-tick')] = c.checked;
          ghi(key, st);
          baoXong();
        });
      });
      if (!kq.tuCham) toTu(kq.loi);
    }

    function baoXong() {
      if (typeof opts.onDone !== 'function' || !st.kq) return;
      var diem = st.kq.tuCham
        ? Math.round(100 * Object.keys(st.tick || {}).filter(function (k) { return st.tick[k]; }).length / Math.max(1, (d.checklist || []).length))
        : st.kq.diem;
      opts.onDone({ diem: diem, tuCham: !!st.kq.tuCham });
    }

    chonCheDo(cheDo);
    if (st.kq) veKetQua(st.kq, false);
  }

  window.KeLai = { mount: mount, _cham: cham };
})();
