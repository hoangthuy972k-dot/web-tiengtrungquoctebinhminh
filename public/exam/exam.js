/* ============================================================
   Thi thử HSK — engine phòng thi (exam.js)
   - Tải đề theo ?id=, render các dạng câu hỏi
   - Bảng câu hỏi bên phải: câu đã làm / chưa làm, bấm để nhảy tới câu
   - Đồng hồ đếm ngược, hết giờ tự nộp
   - Xác nhận khi Thoát / Nộp bài; lưu bài đang làm vào localStorage
   - Kết quả: điểm từng phần, đúng/sai từng câu, đáp án + văn bản nghe
   ============================================================ */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $all = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  var ICONS = {
    headphones: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    pencil: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/></svg>',
    speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    cross: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
  };

  var QS = new URLSearchParams(location.search);
  // Xem lai bai cho thay co (/thi?xem=1, nam trong khung cua /thi-lop): chi ve de + danh dau dung / sai,
  // du lieu (de, bai lam, dung/sai) do trang thay co dua vao qua window.HYV_XEM.ve(...) — xem xemKhoiDong()
  var XEM = QS.get('xem') === '1';
  var xem = { dung: null, deThi: false, daBind: false };
  // Thi tren lop (/thi?ma=123456): de, dong ho, phan Nghe do may giao vien dieu khien — xem thi-lop.js
  var LOP = !XEM && /^\d{6}$/.test(QS.get('ma') || '') ? QS.get('ma') : '';
  // Ban in (/thi?in=1&id=...&phan=listen,read&kem=de|phieu|dapan): de giay, phieu tra loi, dap an
  var IN = !XEM && !LOP && QS.get('in') === '1';
  var id = QS.get('id') || 'hsk2-test-1';
  var STORE = LOP ? 'hyv_thilop_' + LOP : 'hyv_exam_' + id;
  // phong: trang thai phong tu may chu, lech: gio may chu - gio may em, tlMay: bai da luu tren may chu (doi may)
  var lop = { pid: '', tok: '', phong: null, lech: 0, daTai: false, poll: null, luu: null, tlMay: null, daHien: false, roi: false, cauNghe: -1 };
  var ID_LOP = 'hyv_thilop_id_' + LOP; // pid + tok cua em trong phong (tai lai trang van vao lai duoc)
  var RESULTS = 'hyv_exam_results';
  var data = null;
  var state = { answers: {}, startedAt: 0, submitted: false, result: null };
  var timerId = null;
  var questionIndex = {}; // n -> {q, part, section, group}
  var allQuestions = [];

  // ---------- Tải đề ----------
  function taiDe(deId) {
    var s = document.createElement('script');
    s.src = '/exam/tests/' + encodeURIComponent(deId) + '.js';
    s.onload = function () { data = window.EXAM_DATA; init(); };
    s.onerror = function () { $('#exMain').innerHTML = '<div class="ex-card"><h3>Không tìm thấy đề thi</h3><p><a href="/exam/">← Quay lại danh sách đề</a></p></div>'; };
    document.head.appendChild(s);
  }
  if (XEM) xemKhoiDong();
  else if (LOP) lopKhoiDong();
  else if (!IN && /^\/thi\/?$/.test(location.pathname)) lopNhapMa();
  else taiDe(id);

  function init() {
    if (LOP) lopChuanBiDe();
    if (IN) chonPhanIn();
    document.title = data.title + (LOP ? ' — Thi trên lớp' : ' — Thi thử HSK');
    $('#exTitle').textContent = data.title;
    indexQuestions();
    if (IN) { initIn(); return; }
    loadState();
    if (LOP) lopGopBai();
    var fresh = !state.startedAt;
    if (fresh) { state.startedAt = LOP ? lop.phong.batDau : Date.now(); saveState(); if (!LOP) startAttempt(); }
    if (LOP && !state.submitted) lopQuaPhanNghe(true);
    render();
    bindTop();
    if (LOP) { if (state.submitted) lopDaNop(); else { startTimer(); lopNghe(); } return; }
    if (state.submitted) { showResult(); sendRank(state.result && state.result.auto); } else startTimer();
  }

  // ---------- Bảng xếp hạng ----------
  // Máy chủ tự bấm giờ từ lúc gọi /api/exam/start và tự chấm lại đáp án khi
  // nộp, nên điểm xếp hạng không phụ thuộc vào số liệu trình duyệt gửi lên.
  var attemptReady = null;
  function authToken() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a.token : null; } catch (e) { return null; }
  }
  function postApi(path, body) {
    return fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authToken() },
      body: JSON.stringify(body)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) throw new Error(j.error || 'HTTP ' + r.status);
        return j;
      });
    });
  }
  function startAttempt() {
    if (!authToken()) return;
    attemptReady = postApi('/api/exam/start', { examId: id }).then(function (j) {
      state.attemptId = j.attemptId;
      state.attemptCounts = !!j.counts;
      saveState();
    }).catch(function () { /* mất mạng: lượt này không được xếp hạng */ })
      .then(function () { attemptReady = null; updateRankNote(); });
  }
  function fmtShort(sec) {
    sec = Math.max(0, Math.round(sec || 0));
    var m = Math.floor(sec / 60), s2 = sec % 60;
    return m + ':' + (s2 < 10 ? '0' : '') + s2;
  }
  function rankNoteHtml() {
    if (LOP) return '<b>📝 Thi trên lớp</b> · Phòng ' + LOP + (lop.phong && lop.phong.ten ? ' · ' + esc(lop.phong.ten) : '') + '<br>Bài làm tự lưu lên máy thầy cô.';
    if (state.attemptId) {
      return state.attemptCounts
        ? '<b>🏆 Lượt này được tính xếp hạng.</b> Điểm càng cao, nộp càng sớm thì hạng càng cao.'
        : 'Bạn đã có lượt tính xếp hạng cho đề này. Lượt này chỉ để luyện tập.';
    }
    if (attemptReady) return 'Đang kết nối bảng xếp hạng…';
    if (!authToken()) return 'Bạn chưa đăng nhập nên kết quả sẽ không lên <a href="/exam/#rank">bảng xếp hạng</a>.';
    return 'Lượt này bắt đầu khi chưa đăng nhập nên không được tính xếp hạng.';
  }
  function updateRankNote() {
    var el = document.getElementById('exRankNote');
    if (el) el.innerHTML = rankNoteHtml();
    if (state.submitted) renderRankBox();
  }
  function sendRank(auto) {
    if (state.rank) { renderRankBox(); return; }
    if (!state.attemptId && !attemptReady) { renderRankBox(); return; }
    state.rankStatus = 'sending';
    renderRankBox();
    (attemptReady || Promise.resolve()).then(function () {
      if (!state.attemptId) throw new Error('no-attempt');
      return postApi('/api/exam/submit', { attemptId: state.attemptId, answers: state.answers, auto: !!auto });
    }).then(function (j) {
      state.rank = j; state.rankStatus = ''; saveState(); renderRankBox();
    }).catch(function (err) {
      state.rankStatus = err && err.message === 'no-attempt' ? '' : 'error';
      saveState(); renderRankBox();
    });
  }
  function renderRankBox() {
    var box = document.getElementById('exRankBox');
    if (!box) return;
    var link = '<a class="ex-rank-link" href="/exam/?rank=' + encodeURIComponent(id) + '#rank">Xem bảng xếp hạng đề này →</a>';
    var h;
    if (state.rank && state.rank.attempt) {
      var a = state.rank.attempt, r = state.rank.ranked;
      if (a.isRanked) {
        h = '<div class="ex-rank-head"><span>🏆 Điểm xếp hạng</span><b>' + a.rankPoints + '</b><small>/ 1000</small></div>' +
          (r ? '<div class="ex-rank-pos">Hạng <b>#' + r.rank + '</b> trên ' + r.of + ' học sinh đã thi đề này</div>' : '') +
          '<div class="ex-rank-calc"><div><span>Điểm bài thi ' + a.score + '/' + a.maxScore + '</span><b>' + a.basePoints + '</b></div>' +
          '<div><span>Thưởng thời gian (làm ' + fmtShort(a.usedSec) + ' / ' + fmtShort(data.durationSec) + ')</span><b>+' + a.timeBonus + '</b></div></div>';
      } else {
        h = '<div class="ex-rank-title">🏆 Bảng xếp hạng</div><p>Đây là lượt làm lại để luyện tập nên không thay đổi bảng xếp hạng.</p>' +
          (r ? '<div class="ex-rank-pos">Lượt tính điểm của bạn: <b>' + r.rankPoints + ' điểm</b> · Hạng <b>#' + r.rank + '</b> / ' + r.of + '</div>' : '');
      }
      h += link;
    } else if (state.rankStatus === 'sending') {
      h = '<div class="ex-rank-title">🏆 Bảng xếp hạng</div><p>Đang gửi kết quả lên bảng xếp hạng…</p>';
    } else if (state.rankStatus === 'error') {
      h = '<div class="ex-rank-title">🏆 Bảng xếp hạng</div><p>Chưa gửi được kết quả do mất kết nối.</p>' +
        '<button type="button" class="ex-btn-ghost" id="exRankRetry">Gửi lại</button>';
    } else {
      h = '<div class="ex-rank-title">🏆 Bảng xếp hạng</div><p>' + (authToken()
        ? 'Lượt thi này bắt đầu khi chưa đăng nhập nên không được tính xếp hạng.'
        : 'Hãy đăng nhập tài khoản ở trang chủ trước khi thi để kết quả được xếp hạng.') + '</p>' + link;
    }
    box.innerHTML = h;
    var retry = document.getElementById('exRankRetry');
    if (retry) retry.addEventListener('click', function () { sendRank(state.result && state.result.auto); });
  }

  function indexQuestions() {
    allQuestions = [];
    data.sections.forEach(function (sec) {
      sec.parts.forEach(function (part) {
        var qs = [];
        if (part.groups) part.groups.forEach(function (g) { g.questions.forEach(function (q) { qs.push({ q: q, group: g }); }); });
        else part.questions.forEach(function (q) { qs.push({ q: q, group: null }); });
        qs.forEach(function (it) {
          it.part = part; it.section = sec;
          it.text = part.type === 'arrange' || part.type === 'write';
          it.pw = part.type === 'pic-write';
          it.essay = part.type === 'essay';
          it.sum = part.type === 'summary';
          questionIndex[it.q.n] = it;
          allQuestions.push(it);
        });
      });
    });
  }

  // Cau tu viet (sap xep cau, viet chu Han): bo khoang trang + dau cau roi so khop
  function normText(v) {
    return String(v == null ? '' : v).replace(/[\s，。！？、,.!?；;：:“”"'‘’（）()]/g, '');
  }
  // Nhin tranh viet cau (HSK 4 cau 96–100): cham so bo — cau co dung tu cho san, du dai
  // (>= minHan chu Han, mac dinh 5) va khong qua 40 chu. Sau khi nop hien cau mau de tu so.
  function hanCount(v) { return (String(v || '').match(/[\u3400-\u9fff]/g) || []).length; }
  function picWriteOk(q, v) {
    var t = normText(v), n = hanCount(t);
    return !!t && t.indexOf(q.word) !== -1 && n >= (q.minHan || 5) && n <= 40;
  }
  // Viet doan (HSK 5 cau 99–100): cham so bo — du dai (>= minHan, mac dinh 60 chu Han, toi da 200)
  // va dung du cac tu cho san (neu co). Sau khi nop co the nho AI cham chi tiet.
  function essayCheck(q, v) {
    var t = normText(v), n = hanCount(t);
    var thieu = (q.words || []).filter(function (w) { return t.indexOf(w) === -1; });
    return { n: n, thieu: thieu, ok: n >= (q.minHan || 60) && n <= 200 && !thieu.length };
  }
  // 缩写 (HSK 6 cau 101): cham so bo theo do dai — tu minHan (mac dinh 300) den 1,5 lan so chu yeu cau
  function summaryCheck(q, v) {
    var n = hanCount(normText(v)), max = Math.round((q.soChu || 400) * 1.5);
    return { n: n, max: max, ok: n >= (q.minHan || 300) && n <= max };
  }
  function isRight(n, v) {
    var it = questionIndex[n];
    if (!it || v === undefined) return false;
    if (it.pw) return picWriteOk(it.q, v);
    if (it.essay) return essayCheck(it.q, v).ok;
    if (it.sum) return summaryCheck(it.q, v).ok;
    if (it.text) {
      var got = normText(v);
      // q.accept: cac cach viet dung khac (dap an chinh thuc cho phep 2 cach xep cau)
      return got !== '' && [it.q.answer].concat(it.q.accept || []).some(function (a) { return got === normText(a); });
    }
    return v === it.q.answer;
  }
  function hasAnswer(n) {
    var v = state.answers[n];
    return v !== undefined && v !== '';
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORE);
      if (raw) { var st = JSON.parse(raw); if (st && st.answers) state = st; }
    } catch (e) { /* ignore */ }
  }
  function saveState() {
    if (IN) return;
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* ignore */ }
    if (LOP && !state.submitted) lopHenLuu();
  }
  function clearState() { try { localStorage.removeItem(STORE); } catch (e) { /* ignore */ } }

  // ---------- Render ----------
  function render() {
    var html = '';
    data.sections.forEach(function (sec, si) {
      var total = countSection(sec);
      // Moi phan thi la mot "trang" rieng: dang thi chi hien phan dang lam (state.sec);
      // sang phan sau thi phan truoc bi khoa, khong xem lai duoc. Nop bai xong thi hien het de xem lai.
      html += '<div class="ex-sec" data-sec="' + sec.id + '"' + (!IN && !state.submitted && si !== curSec() ? ' hidden' : '') + '>';
      // Thi tren lop / ban in: khong co nut nghe — bai nghe phat qua loa cua thay co
      var coAudio = sec.audio && !LOP && !IN && !XEM;
      html += '<div class="ex-sec-head" id="sec-' + sec.id + '"><span class="ex-sec-icon">' + (ICONS[sec.icon] || '') + '</span>' +
        '<span class="ex-sec-title">' + esc(sec.name) + ': (' + total + ' câu)</span>' +
        (coAudio ? '<audio id="exAudio" class="ex-sec-audio" controls preload="metadata" src="' + esc(sec.audio) + '" aria-label="Audio cả phần ' + esc(sec.name) + '"></audio>' : '') +
        (IN ? '' : '<span class="ex-info" title="' + esc(sec.note || '') + '">' + ICONS.info + '</span>') + '</div>';
      if (coAudio && sec.note) html += '<p class="ex-audio-note">🎧 ' + esc(sec.note) + '</p>';
      if (LOP && sec.audio) {
        html += '<div class="ex-lop-loa" id="exLopLoa"><span class="ex-lop-loa-ic">' + ICONS.speaker + '</span>' +
          '<span class="ex-lop-loa-t"><b>Nghe loa của thầy cô</b><span id="exLopCau">Chờ thầy cô phát bài nghe…</span></span>' +
          '<label class="ex-lop-cuon"><input type="checkbox" id="exLopCuon" checked /> Tự cuộn tới câu đang đọc</label></div>';
      }
      sec.parts.forEach(function (part) { html += renderPart(part, sec); });
      var next = IN ? null : data.sections[si + 1];
      if (next && LOP && sec.id === 'listen' && !state.submitted) {
        html += '<div class="ex-next ex-lop-cho-doc"><span class="ex-sec-icon">' + (ICONS[next.icon] || '') + '</span>' +
          '<span class="ex-next-t">' + esc(next.name) + ': (' + countSection(next) + ' câu)<small>Hết bài nghe, thầy cô sẽ mở phần ' + esc(next.name) + ' cho cả lớp — em không cần bấm gì.</small></span></div>';
      } else if (next) {
        html += '<div class="ex-next"' + (state.submitted ? ' hidden' : '') + '><span class="ex-sec-icon">' + (ICONS[next.icon] || '') + '</span>' +
          '<span class="ex-next-t">' + esc(next.name) + ': (' + countSection(next) + ' câu)<small>Sang phần ' + esc(next.name) + ' thì không quay lại phần ' + esc(sec.name) + ' được nữa.</small></span>' +
          '<button type="button" data-next-sec="' + (si + 1) + '">Chuyển tới phần ' + esc(next.name) + ' ›</button></div>';
      }
      html += '</div>';
    });
    $('#exMain').innerHTML = html;
    if (XEM) { applyAnswersToDom(); return; } // trang xem lai cua thay co: khong co bang cau hoi / dong ho
    if (!state.submitted) { sumEnter(); saveState(); }
    renderSide();
    bindMain();
    applyAnswersToDom();
    followSectionInSide();
    var audio = $('#exAudio');
    if (audio) audio.playbackRate = parseFloat($('#exSpeed').value);
  }

  // ---------- 缩写 (HSK 6 cau 101) ----------
  // state.sum[n] = { t: luc bat dau doc, w: da sang buoc viet }. Het readSec (mac dinh 600 giay) thi tu an bai.
  function sumState(n) { state.sum = state.sum || {}; return state.sum[n] || {}; }
  function sumQs() { return allQuestions.filter(function (it) { return it.sum; }); }
  function sumLeft(q) { var st = sumState(q.n); return st.t ? Math.max(0, (q.readSec || 600) - Math.floor((Date.now() - st.t) / 1000)) : (q.readSec || 600); }
  function fmtMS(sec) { var m = Math.floor(sec / 60), s2 = sec % 60; return (m < 10 ? '0' : '') + m + ':' + (s2 < 10 ? '0' : '') + s2; }
  function paras(t) { return String(t || '').split(/\n+/).map(function (p) { return '<p>' + esc(p) + '</p>'; }).join(''); }
  function sumEnter() {
    // bat dau tinh gio doc khi phan thi chua cau 101 dang hien
    sumQs().forEach(function (it) {
      if (data.sections[curSec()] !== it.section) return;
      state.sum = state.sum || {};
      if (!state.sum[it.q.n]) state.sum[it.q.n] = { t: Date.now() };
    });
  }
  function sumToWrite(n) {
    state.sum = state.sum || {};
    state.sum[n] = Object.assign({ t: Date.now() }, state.sum[n], { w: true });
    saveState();
    var card = document.getElementById('q-' + n);
    if (!card) return;
    $all('.ex-sum-text, [data-sum-start], [data-sum-clock]', card).forEach(function (el) { el.remove(); });
    var w = $('.ex-sum-write', card); if (w) w.hidden = false;
    var ta = $('textarea', card); if (ta) ta.focus();
  }
  function sumTick() {
    if (state.submitted) return;
    sumQs().forEach(function (it) {
      var st = sumState(it.q.n);
      if (!st.t || st.w) return;
      var left = sumLeft(it.q);
      var c = $('[data-sum-clock="' + it.q.n + '"] span');
      if (c) c.textContent = fmtMS(left);
      if (left <= 0) sumToWrite(it.q.n);
    });
  }

  // ---------- Chuyen phan thi (mot chieu, nhu thi that) ----------
  function curSec() { return Math.min(Math.max(state.sec || 0, 0), data.sections.length - 1); }
  function sectionQs(sec) {
    return [].concat.apply([], sec.parts.map(function (p) { return p.groups ? [].concat.apply([], p.groups.map(function (g) { return g.questions; })) : p.questions; }));
  }
  function goNextSection(si) {
    if (state.submitted || si !== curSec() + 1 || !data.sections[si]) return;
    var sec = data.sections[curSec()], next = data.sections[si];
    var left = sectionQs(sec).filter(function (q) { return !hasAnswer(q.n); }).length;
    openModal('Chuyển sang phần ' + next.name,
      (left ? 'Phần ' + sec.name + ' còn ' + left + ' câu chưa làm. ' : '') + 'Sau khi chuyển sang phần ' + next.name + ', bạn sẽ không thể quay lại xem hay sửa phần ' + sec.name + ' nữa.',
      'Chuyển sang phần ' + next.name, function () { chuyenPhan(si); });
  }
  function chuyenPhan(si) {
    stopClip();
    var a = $('#exAudio'); if (a) a.pause();
    state.sec = si; sumEnter(); saveState();
    $all('#exMain .ex-sec').forEach(function (el, i) { el.hidden = i !== si; });
    renderSide();
    applyAnswersToDom();
    $('#exTimerTxt').textContent = fmt(remainingSec());
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // Cuon bang cau hoi ben phai toi phan thi dang lam (Nghe / Doc / Viet)
  var sideObserver = null;
  function followSectionInSide() {
    if (!('IntersectionObserver' in window)) return;
    if (sideObserver) sideObserver.disconnect();
    sideObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var nav = $('#exNav');
        var head = nav && $('h3[data-sec-nav="' + en.target.getAttribute('data-sec') + '"]', nav);
        if (head && window.innerWidth > 960) nav.scrollTo({ top: head.offsetTop - nav.offsetTop - 6, behavior: 'smooth' });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $all('#exMain .ex-sec').forEach(function (el) { sideObserver.observe(el); });
  }

  function countSection(sec) {
    var n = 0;
    sec.parts.forEach(function (p) { n += p.groups ? p.groups.reduce(function (a, g) { return a + g.questions.length; }, 0) : p.questions.length; });
    return n;
  }

  // O trong "（　）" trong cau -> o xanh nhat (dien tu da chon vao day)
  function zhHtml(zh, n) {
    return esc(zh).replace(/（\s*　*\s*）|\(\s*\)/g, function () {
      return '<span class="ex-blank"' + (n ? ' data-blank="' + n + '"' : '') + '></span>';
    }).replace(/＿(\d+)＿/g, function (m, k) { return '<span class="ex-blank ex-blank-n" data-blank="' + k + '" data-bn="' + k + '">' + k + '</span>'; })
      .replace(/【([^【】]*)】/g, '<u class="ex-u">$1</u>') // phan gach chan trong de goc (vd HSK 5 "划线句子")
      .replace(/\n/g, '<br>');
  }
  function textBlock(q, cls) {
    return '<div class="ex-text ' + (cls || '') + '">' + (q.py ? '<div class="py">' + esc(q.py) + '</div>' : '') + '<div class="zh">' + zhHtml(q.zh, q.n) + '</div></div>';
  }
  function playBtn(q) {
    if (!q.audio || LOP || IN) return '';
    return '<button type="button" class="ex-play" data-play="' + q.n + '" aria-label="Nghe câu ' + q.n + '">' + ICONS.speaker + '</button>';
  }
  function cardHead(label, q) {
    return '<div class="ex-card-head"><h3>' + esc(label) + '</h3>' + (q ? playBtn(q) : '') + '<span class="ex-flag" title="Câu hỏi">' + ICONS.flag + '</span></div>';
  }
  function letterBtns(n, keys) {
    return '<div class="ex-letters">' + keys.map(function (k) {
      return '<button type="button" class="ex-letter" data-n="' + n + '" data-v="' + k + '">' + k + '</button>';
    }).join('') + '</div>';
  }
  function tfBtns(n) {
    return '<div class="ex-judge-btns">' +
      '<button type="button" class="ex-tf" data-n="' + n + '" data-v="true" aria-label="Đúng">' + ICONS.check + '</button>' +
      '<button type="button" class="ex-tf" data-n="' + n + '" data-v="false" aria-label="Sai">' + ICONS.cross + '</button></div>';
  }
  function rowNum(q) {
    return '<span class="ex-row-n">' + q.n + '.' + playBtn(q) + '</span>';
  }
  // Cau dai / hoi thoai 2 dong: nut chu cai xuong duoi cau cho de doc
  function isLongRow(q) {
    return !!(q.zh && (q.zh.indexOf('\n') !== -1 || q.zh.length > 24));
  }
  function explainBox(n) {
    return '<div class="ex-explain" data-explain="' + n + '" hidden></div>';
  }

  function anhDe(f) { return /^(\/|data:)/.test(f || '') ? f : data.img + f; }
  function passageImg(g) {
    return g.img ? '<img class="ex-passage-img" src="' + anhDe(g.img) + '" alt="" loading="lazy" />' : '';
  }
  function renderWordFillGroup(g) {
    var keysW = g.words.map(function (w) { return w.k; });
    var h = '<div class="ex-card" id="q-' + g.range[0] + '" data-group="' + g.range[0] + '">' + cardHead('Câu ' + g.range[0] + ' - ' + g.range[1]) +
      '<div class="ex-bank">' + g.words.map(function (w) {
        return '<div class="ex-bank-item' + (w.used ? ' used' : '') + '"><b>' + w.k + '.</b><span>' + (w.py ? '<span class="py">' + esc(w.py) + '</span>' : '') + '<span class="zh">' + esc(w.zh) + '</span></span></div>';
      }).join('') + '</div>' +
      (g.example ? '<p class="ex-example">' + esc(g.example) + '</p>' : '');
    g.questions.forEach(function (q) {
      h += '<div class="ex-row' + (isLongRow(q) ? ' is-long' : '') + '" id="q-' + q.n + '" data-n="' + q.n + '">' + rowNum(q) + '<div class="ex-row-text">' + textBlock(q) +
        explainBox(q.n) + '</div>' + letterBtns(q.n, keysW) + '</div>';
    });
    return h + '</div>';
  }

  function renderPart(part, sec) {
    var h = '<p class="ex-part-intro"><b>' + esc(part.name) + '</b> · ' + esc(part.intro || '') + '</p>';
    if (part.example && (part.type === 'arrange' || part.type === 'write')) h += '<p class="ex-example ex-example-part">' + esc(part.example) + '</p>';
    if (part.type === 'judge-pic') {
      // HSK 1 phan Doc 1: tranh kem mot tu (chu + pinyin) — dung hay sai
      part.questions.forEach(function (q) {
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n, q) +
          '<div class="ex-judge"><img src="' + anhDe(q.img) + '" alt="Hình câu ' + q.n + '" loading="lazy" />' +
          (q.zh ? '<div class="ex-judge-tu">' + textBlock(q) + '</div>' : '') + tfBtns(q.n) + '</div>' +
          explainBox(q.n) + '</div>';
      });
    } else if (part.type === 'pic-mc') {
      // HSK 1 phan Nghe 2: moi cau 3 tranh A B C, chon tranh dung
      part.questions.forEach(function (q) {
        var keys = Object.keys(q.pics);
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n, q) +
          '<div class="ex-opts ex-opts-pic">' + keys.map(function (k) {
            return '<button type="button" class="ex-opt ex-opt-pic" data-n="' + q.n + '" data-v="' + k + '"><span class="ex-opt-k">' + k + '</span><img src="' + anhDe(q.pics[k]) + '" alt="Hình ' + k + '" /></button>';
          }).join('') + '</div>' + explainBox(q.n) + '</div>';
      });
    } else if (part.type === 'pic-match') {
      part.groups.forEach(function (g) {
        var keys = Object.keys(g.pics);
        h += '<div class="ex-card" id="q-' + g.range[0] + '" data-group="' + g.range[0] + '">' + cardHead('Câu ' + g.range[0] + ' - ' + g.range[1]) +
          '<div class="ex-pics">' + keys.map(function (k) { return '<div class="ex-pic"><img src="' + anhDe(g.pics[k]) + '" alt="Hình ' + k + '" loading="lazy" /><span class="ex-pic-k">' + k + '</span></div>'; }).join('') + '</div>' +
          (g.example ? '<p class="ex-example">' + esc(g.example) + '</p>' : '');
        g.questions.forEach(function (q) {
          h += '<div class="ex-row' + (q.zh ? '' : ' no-text') + '" id="q-' + q.n + '" data-n="' + q.n + '">' + rowNum(q) + '<div class="ex-row-text">' + (q.zh ? textBlock(q) : '') +
            explainBox(q.n) + '</div>' + letterBtns(q.n, keys) + '</div>';
        });
        h += '</div>';
      });
    } else if (part.type === 'mc') {
      var mcCard = function (q, sub) {
        return '<div class="ex-card' + (sub ? ' ex-sub' : '') + '" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n, q) +
          (q.zh ? textBlock(q, 'ex-passage') : '') +
          (q.star ? '<div class="ex-text ex-star-q"><div class="zh">★' + esc(q.star) + '</div></div>' : '') +
          (q.zh || q.star ? '<div style="height:10px"></div>' : '') +
          '<div class="ex-opts' + (q.options.length > 3 ? ' ex-opts-4' : '') + (q.options.some(function (o) { return String(o.zh).length > 18; }) ? ' ex-opts-long' : '') + '">' + q.options.map(function (o, i) {
            var k = 'ABCDEF'[i];
            return '<button type="button" class="ex-opt" data-n="' + q.n + '" data-v="' + k + '"><span class="ex-opt-k">' + k + '</span>' + (o.py ? '<div class="py">' + esc(o.py) + '</div>' : '') + '<div class="zh">' + esc(o.zh) + '</div></button>';
          }).join('') + '</div>' + explainBox(q.n) + '</div>';
      };
      if (part.groups) {
        // Mot doan van dung chung cho nhieu cau (HSK 4 doc 80–85, nghe 36–45)
        part.groups.forEach(function (g) {
          if (g.questions.length === 1 && !g.zh) { h += mcCard(g.questions[0], false); return; }
          h += '<div class="ex-card ex-group" id="q-g' + g.range[0] + '" data-group="' + g.range[0] + '">' +
            '<div class="ex-card-head"><h3>Câu ' + g.range[0] + ' - ' + g.range[1] + '</h3>' + (g.audio ? playBtn({ n: g.range[0], audio: g.audio }) : '') + '</div>' +
            (g.zh ? '<div class="ex-text ex-passage">' + passageImg(g) + '<div class="zh">' + zhHtml(g.zh) + '</div></div>' : '') +
            g.questions.map(function (q) { return mcCard(q, true); }).join('') + '</div>';
        });
      } else part.questions.forEach(function (q) { h += mcCard(q, false); });
    } else if (part.type === 'word-fill') {
      if (part.groups) part.groups.forEach(function (g) { h += renderWordFillGroup(g); });
      else h += renderWordFillGroup({ range: part.range, words: part.words, example: part.example, questions: part.questions });
    } else if (part.type === 'judge-text') {
      part.questions.forEach(function (q) {
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n, q) +
          '<div class="ex-judge-text"><div>' + (q.zh ? textBlock(q) : '') + '<div class="ex-star ex-text' + (q.zh ? '' : ' ex-star-only') + '"><div class="py">' + esc(q.starPy || '') + '</div><div class="zh">' + esc(q.star) + '</div></div></div>' + tfBtns(q.n) + '</div>' +
          explainBox(q.n) + '</div>';
      });
    } else if (part.type === 'sent-match') {
      part.groups.forEach(function (g) {
        var keysS = g.options.map(function (o) { return o.k; });
        h += '<div class="ex-card" id="q-' + g.range[0] + '" data-group="' + g.range[0] + '">' + cardHead('Câu ' + g.range[0] + ' - ' + g.range[1]) +
          (g.zh ? '<div class="ex-text ex-passage ex-sent-passage">' + passageImg(g) + '<div class="zh">' + zhHtml(g.zh) + '</div></div>' : '') +
          '<div class="ex-bank sent">' + g.options.map(function (o) { return '<div class="ex-bank-item' + (o.used ? ' used' : '') + '"><b>' + o.k + '.</b><span class="ex-text"><span class="py">' + esc(o.py || '') + '</span><span class="zh">' + esc(o.zh) + '</span></span></div>'; }).join('') + '</div>' +
          (g.example ? '<p class="ex-example">' + esc(g.example) + '</p>' : '');
        g.questions.forEach(function (q) {
          h += '<div class="ex-row' + (q.zh ? (isLongRow(q) ? ' is-long' : '') : ' no-text') + '" id="q-' + q.n + '" data-n="' + q.n + '">' + rowNum(q) + '<div class="ex-row-text">' + (q.zh ? textBlock(q) : '') +
            explainBox(q.n) + '</div>' + letterBtns(q.n, keysS) + '</div>';
        });
        h += '</div>';
      });
    } else if (part.type === 'summary') {
      // HSK 6 cau 101 (缩写): doc bai 10 phut -> bai bi an, khong xem lai -> viet tom tat ~400 chu
      part.questions.forEach(function (q) {
        var st = sumState(q.n);
        var doc = !state.submitted && !st.w;
        h += '<div class="ex-card ex-sum" id="q-' + q.n + '" data-n="' + q.n + '">' +
          '<div class="ex-card-head"><h3>Câu ' + q.n + '</h3>' +
          (doc ? '<span class="ex-sum-clock" data-sum-clock="' + q.n + '">' + ICONS.clock + '<span>' + fmtMS(sumLeft(q)) + '</span></span>' : '') + '</div>' +
          (doc
            ? '<div class="ex-sum-text zh">' + paras(q.text) + '</div>' +
              '<button type="button" class="ex-btn-ghost ex-sum-start" data-sum-start="' + q.n + '">Bắt đầu tóm tắt</button>'
            : '') +
          '<div class="ex-sum-write"' + (doc ? ' hidden' : '') + '>' +
            '<p class="ex-essay-de">Tóm tắt bài văn vừa đọc thành bài khoảng ' + (q.soChu || 400) + ' chữ, tự đặt tiêu đề. Chỉ kể lại nội dung, không thêm ý kiến của mình.</p>' +
            '<textarea class="ex-input ex-textarea ex-essay-ta ex-sum-ta" data-input="' + q.n + '" rows="14" autocomplete="off" spellcheck="false" lang="zh" placeholder="Nội dung tóm tắt" aria-label="Bài tóm tắt câu ' + q.n + '"></textarea>' +
            '<div class="ex-essay-count" data-count="' + q.n + '" data-count-of="' + (q.soChu || 400) + '">0 / ' + (q.soChu || 400) + ' chữ</div>' +
          '</div>' +
          explainBox(q.n) + '</div>';
      });
    } else if (part.type === 'arrange') {
      part.questions.forEach(function (q) {
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n) +
          '<div class="ex-chips" data-chips="' + q.n + '">' + q.words.map(function (w, i) {
            return '<button type="button" class="ex-chip" data-chip="' + q.n + '" data-ci="' + i + '">' + esc(w) + '</button>';
          }).join('') + '</div>' +
          '<div class="ex-arrange-line" data-line="' + q.n + '"><span class="ex-arrange-ph">Bấm các từ ở trên theo đúng thứ tự…</span></div>' +
          '<button type="button" class="ex-arrange-clear" data-clear="' + q.n + '" hidden>Xếp lại</button>' +
          explainBox(q.n) + '</div>';
      });
    } else if (part.type === 'order') {
      // HSK 4 doc 56–65: sap xep 3 cau A B C thanh doan van dung
      part.questions.forEach(function (q) {
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n) +
          '<div class="ex-order" data-chips="' + q.n + '">' + q.items.map(function (it, i) {
            return '<button type="button" class="ex-chip ex-order-item" data-chip="' + q.n + '" data-ci="' + i + '"><b>' + esc(it.k) + '</b><span class="zh">' + esc(it.zh) + '</span></button>';
          }).join('') + '</div>' +
          '<div class="ex-arrange-line ex-order-line" data-line="' + q.n + '"><span class="ex-arrange-ph">Bấm các câu A, B, C theo đúng thứ tự…</span></div>' +
          '<button type="button" class="ex-arrange-clear" data-clear="' + q.n + '" hidden>Xếp lại</button>' +
          explainBox(q.n) + '</div>';
      });
    } else if (part.type === 'pic-write') {
      // HSK 4 viet 96–100: nhin tranh, dung tu cho san viet mot cau
      part.questions.forEach(function (q) {
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n) +
          '<div class="ex-picwrite"><img src="' + anhDe(q.img) + '" alt="Hình câu ' + q.n + '" loading="lazy" /><div class="ex-picwrite-tu zh">' + esc(q.word) + '</div></div>' +
          '<textarea class="ex-input ex-textarea" data-input="' + q.n + '" rows="3" autocomplete="off" spellcheck="false" lang="zh" placeholder="Nhập vào câu trả lời của bạn..." aria-label="Câu trả lời câu ' + q.n + '"></textarea>' +
          explainBox(q.n) + '</div>';
      });
    } else if (part.type === 'essay') {
      // HSK 5 cau 99: 5 tu cho san · cau 100: mot buc tranh — viet doan khoang 80 chu
      part.questions.forEach(function (q) {
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n) +
          (q.words ? '<div class="ex-essay-words zh">' + q.words.map(function (w) { return '<span>' + esc(w) + '</span>'; }).join('') + '</div>' : '') +
          (q.img ? '<div class="ex-picwrite ex-essay-pic"><img src="' + anhDe(q.img) + '" alt="Hình câu ' + q.n + '" loading="lazy" /></div>' : '') +
          (q.prompt ? '<p class="ex-essay-de">' + esc(q.prompt) + '</p>' : '') +
          '<textarea class="ex-input ex-textarea ex-essay-ta" data-input="' + q.n + '" rows="6" autocomplete="off" spellcheck="false" lang="zh" placeholder="Nhập vào câu trả lời của bạn..." aria-label="Bài viết câu ' + q.n + '"></textarea>' +
          '<div class="ex-essay-count" data-count="' + q.n + '">0 chữ</div>' +
          explainBox(q.n) + '</div>';
      });
    } else if (part.type === 'write') {
      part.questions.forEach(function (q) {
        h += '<div class="ex-card" id="q-' + q.n + '" data-n="' + q.n + '">' + cardHead('Câu ' + q.n) +
          '<div class="ex-write">' +
            '<div class="ex-write-sent zh">' + esc(q.pre) +
              '<ruby class="ex-write-ruby"><span class="ex-blank ex-blank-write" data-wblank="' + q.n + '"></span><rt>' + esc(q.py) + '</rt></ruby>' +
              esc(q.post) + '</div>' +
            '<input type="text" class="ex-input" data-input="' + q.n + '" maxlength="4" autocomplete="off" spellcheck="false" lang="zh" placeholder="Nhập đáp án..." aria-label="Đáp án câu ' + q.n + '" />' +
          '</div>' + explainBox(q.n) + '</div>';
      });
    }
    return h;
  }

  // ---------- Nghe tung cau (phat 1 doan cua file nghe) ----------
  var clip = { audio: null, n: null, end: 0 };
  function sectionAudioSrc() {
    var sec = data.sections.filter(function (s) { return s.audio; })[0];
    return sec ? sec.audio : null;
  }
  function stopClip() {
    if (clip.audio) clip.audio.pause();
    if (clip.n != null) {
      var b = $('.ex-play[data-play="' + clip.n + '"]');
      if (b) { b.classList.remove('is-playing'); b.innerHTML = ICONS.speaker; }
    }
    clip.n = null;
  }
  function playClip(n) {
    var q = questionIndex[n] && questionIndex[n].q;
    var src = sectionAudioSrc();
    if (!q || !q.audio || !src) return;
    if (clip.n === n) { stopClip(); return; }
    stopClip();
    var full = $('#exAudio');
    if (full && !full.paused) full.pause();
    if (!clip.audio) {
      clip.audio = new Audio(src);
      clip.audio.preload = 'auto';
      clip.audio.addEventListener('timeupdate', function () {
        if (clip.n != null && clip.audio.currentTime >= clip.end) stopClip();
      });
      clip.audio.addEventListener('ended', stopClip);
    }
    clip.n = n;
    clip.end = q.audio[1];
    var startAt = function () {
      try { clip.audio.currentTime = q.audio[0]; } catch (e) { /* chua tai xong */ }
      clip.audio.playbackRate = parseFloat($('#exSpeed').value) || 1;
      var p = clip.audio.play();
      if (p && p.catch) p.catch(stopClip);
    };
    if (clip.audio.readyState >= 1) startAt();
    else clip.audio.addEventListener('loadedmetadata', startAt, { once: true });
    var b = $('.ex-play[data-play="' + n + '"]');
    if (b) { b.classList.add('is-playing'); b.innerHTML = ICONS.pause; }
  }

  // ---------- Sap xep cau ----------
  function arrangeOrder(n) {
    state.order = state.order || {};
    return state.order[n] || [];
  }
  function setArrange(n, order) {
    var q = questionIndex[n].q;
    state.order = state.order || {};
    if (order.length) {
      state.order[n] = order;
      state.answers[n] = q.items ? order.map(function (i) { return q.items[i].k; }).join('') : order.map(function (i) { return q.words[i]; }).join('');
    } else {
      delete state.order[n];
      delete state.answers[n];
    }
    saveState();
    applyAnswersToDom();
  }

  // ---------- Sidebar ----------
  function renderSide() {
    var h = '<div class="ex-timer-box"><span class="ex-timer" id="exTimer">' + ICONS.clock + '<span id="exTimerTxt">--:--:--</span></span>' +
      '<button type="button" class="ex-btn-primary" id="exSubmit">Nộp bài</button></div>' +
      '<div class="ex-rank-note" id="exRankNote">' + rankNoteHtml() + '</div>' +
      '<div class="ex-nav" id="exNav">';
    data.sections.forEach(function (sec, si) {
      // Phan da qua / chua toi: khoa (khong bam toi cau duoc)
      var khoa = si !== curSec();
      h += '<h3 data-sec-nav="' + sec.id + '"' + (khoa ? ' class="is-locked"' : '') + '>' + esc(sec.name) +
        (khoa ? '<small>' + (si < curSec() ? 'Đã xong · đã khoá' : 'Chưa mở') + '</small>' : '') + '</h3>';
      sec.parts.forEach(function (part) {
        h += '<h4' + (khoa ? ' class="is-locked"' : '') + '>' + esc(part.name) + '</h4><div class="ex-nav-grid' + (khoa ? ' is-locked' : '') + '">';
        var qs = part.groups ? [].concat.apply([], part.groups.map(function (g) { return g.questions; })) : part.questions;
        qs.forEach(function (q) { h += '<button type="button" class="ex-dot" data-dot="' + q.n + '"' + (khoa ? ' disabled' : ' data-goto="q-' + q.n + '"') + '>' + q.n + '</button>'; });
        h += '</div>';
      });
    });
    h += '<div class="ex-nav-legend"><span>Chưa làm</span><span class="l-done">Đã làm</span></div></div>';
    $('#exSide').innerHTML = h;
    $('#exSubmit').addEventListener('click', confirmSubmit);
  }

  // ---------- Sự kiện ----------
  function bindMain() {
    $('#exMain').addEventListener('click', function (e) {
      var goto = e.target.closest('[data-goto]');
      if (goto) { scrollToId(goto.getAttribute('data-goto')); return; }
      var nx = e.target.closest('[data-next-sec]');
      if (nx) { goNextSection(parseInt(nx.getAttribute('data-next-sec'), 10)); return; }
      var ss = e.target.closest('[data-sum-start]');
      if (ss) {
        var sn = parseInt(ss.getAttribute('data-sum-start'), 10);
        openModal('Bắt đầu tóm tắt', 'Bài đọc sẽ bị ẩn và bạn không thể xem lại nữa. Bắt đầu viết bài tóm tắt?', 'Bắt đầu viết', function () { sumToWrite(sn); });
        return;
      }
      var ai = e.target.closest('[data-ai-cham]');
      if (ai) { aiCham(parseInt(ai.getAttribute('data-ai-cham'), 10)); return; }
      var play = e.target.closest('[data-play]');
      if (play) { playClip(parseInt(play.getAttribute('data-play'), 10)); return; }
      if (state.submitted) return;
      var chip = e.target.closest('[data-chip]');
      if (chip) {
        var cn = parseInt(chip.getAttribute('data-chip'), 10), ci = parseInt(chip.getAttribute('data-ci'), 10);
        var ord = arrangeOrder(cn).slice();
        if (ord.indexOf(ci) === -1) { ord.push(ci); setArrange(cn, ord); }
        return;
      }
      var placed = e.target.closest('[data-placed]');
      if (placed) {
        var pn = parseInt(placed.getAttribute('data-placed'), 10), pi = parseInt(placed.getAttribute('data-ci'), 10);
        setArrange(pn, arrangeOrder(pn).filter(function (x) { return x !== pi; }));
        return;
      }
      var clr = e.target.closest('[data-clear]');
      if (clr) { setArrange(parseInt(clr.getAttribute('data-clear'), 10), []); return; }
      var btn = e.target.closest('[data-n][data-v]');
      if (!btn) return;
      var n = parseInt(btn.getAttribute('data-n'), 10);
      var v = btn.getAttribute('data-v');
      if (v === 'true') v = true; else if (v === 'false') v = false;
      if (state.answers[n] === v) delete state.answers[n]; else state.answers[n] = v;
      saveState();
      applyAnswersToDom();
    });
    $('#exMain').addEventListener('input', function (e) {
      var inp = e.target.closest('[data-input]');
      if (!inp || state.submitted) return;
      var n = parseInt(inp.getAttribute('data-input'), 10);
      var v = inp.value.trim();
      if (v) state.answers[n] = v; else delete state.answers[n];
      saveState();
      applyAnswersToDom();
      var cnt = $('[data-count="' + n + '"]');
      if (cnt) cnt.textContent = hanCount(v) + (cnt.getAttribute('data-count-of') ? ' / ' + cnt.getAttribute('data-count-of') : '') + ' chữ';
    });
    document.addEventListener('click', function (e) {
      var goto = e.target.closest('#exSide [data-goto]');
      if (goto) scrollToId(goto.getAttribute('data-goto'));
    });
  }

  // AI cham chi tiet bai viet doan (dung chung API cham doan cua phan Luyen viet)
  function aiCham(n) {
    var q = questionIndex[n].q, box = $('[data-ai="' + n + '"]');
    if (!box) return;
    box.innerHTML = '<div class="ex-ai-wait">AI đang chấm bài (khoảng 10–30 giây)…</div>';
    var h = { 'Content-Type': 'application/json' };
    var tk = authToken(); if (tk) h.Authorization = 'Bearer ' + tk;
    var body = questionIndex[n].sum
      ? { kieu: 'sgk', capDo: data.level || 'HSK 6', soChu: q.soChu || 400, goc: q.text, bai: String(state.answers[n] || ''),
          de: '缩写 (HSK 6 câu 101): đọc bài văn 10 phút rồi viết lại thành bài khoảng ' + (q.soChu || 400) + ' chữ, tự đặt tiêu đề, chỉ kể lại nội dung, không thêm ý kiến.' }
      : { capDo: data.level || 'HSK 5', de: q.prompt || (q.words ? 'Dùng các từ cho sẵn viết một đoạn văn khoảng 80 chữ.' : 'Nhìn tranh viết một đoạn văn khoảng 80 chữ.'),
          tu: q.words || [], bai: String(state.answers[n] || '') };
    fetch('/api/ai/cham-doan', { method: 'POST', headers: h, body: JSON.stringify(body) }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (x) {
        if (!x.ok || typeof x.j.diem !== 'number') { box.innerHTML = '<div class="ex-ai-err">' + esc((x.j && x.j.error) || 'AI chưa chấm được, thử lại sau nhé.') + '</div>'; return; }
        var j = x.j;
        var tc = j.tieuChi;
        box.innerHTML = '<div class="ex-ai-kq"><b>AI chấm: ' + j.diem + '/100</b>' +
          (tc ? '<div class="ex-ai-tc">Nội dung ' + tc.noiDung + '/25 · Từ vựng ' + tc.tuVung + '/25 · Ngữ pháp ' + tc.nguPhap + '/30 · Bố cục ' + tc.boCuc + '/20</div>' : '') +
          (j.nhanXet ? '<p>' + esc(j.nhanXet) + '</p>' : '') +
          (j.loi && j.loi.length ? '<ol>' + j.loi.map(function (l) { return '<li><s class="hanzi">' + esc(l.sai) + '</s> → <b class="hanzi">' + esc(l.sua) + '</b><br><small>' + esc(l.giai) + '</small></li>'; }).join('') + '</ol>' : '') +
          (j.baiSua ? '<div class="ex-ai-sua"><small>Bài sau khi sửa:</small><div class="hanzi">' + esc(j.baiSua) + '</div></div>' : '') + '</div>';
      }).catch(function () { box.innerHTML = '<div class="ex-ai-err">Không kết nối được máy chủ.</div>'; });
  }

  function scrollToId(idStr) {
    var el = document.getElementById(idStr);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function applyAnswersToDom() {
    $all('#exMain [data-n][data-v]').forEach(function (b) {
      var n = parseInt(b.getAttribute('data-n'), 10);
      var v = b.getAttribute('data-v'); if (v === 'true') v = true; else if (v === 'false') v = false;
      b.classList.toggle('sel', state.answers[n] === v);
    });
    $all('.ex-dot').forEach(function (d) {
      var n = parseInt(d.getAttribute('data-dot'), 10);
      d.classList.toggle('done', hasAnswer(n));
    });
    // Dien tu: hien tu da chon ngay trong o trong
    $all('#exMain [data-blank]').forEach(function (el) {
      var n = parseInt(el.getAttribute('data-blank'), 10);
      var it = questionIndex[n];
      var v = state.answers[n];
      var word = '';
      var bn = el.getAttribute('data-bn');
      if (it && v !== undefined && (it.part.type === 'word-fill' || it.part.type === 'sent-match')) {
        var bank = it.part.type === 'sent-match' ? it.group.options : it.group ? it.group.words : it.part.words;
        var w = (bank || []).filter(function (x) { return x.k === v; })[0];
        word = w ? w.zh : '';
      } else if (it && v !== undefined && bn && it.part.type === 'mc') {
        var o = it.q.options['ABCDEF'.indexOf(v)];
        word = o ? o.zh : '';
      }
      el.textContent = word || bn || '';
      el.classList.toggle('filled', !!word);
    });
    // Sap xep cau
    $all('#exMain [data-line]').forEach(function (line) {
      var n = parseInt(line.getAttribute('data-line'), 10);
      var q = questionIndex[n].q;
      var ord = arrangeOrder(n);
      line.innerHTML = ord.length
        ? ord.map(function (i) {
            return '<button type="button" class="ex-chip is-placed" data-placed="' + n + '" data-ci="' + i + '">' + (q.items ? '<b>' + esc(q.items[i].k) + '</b>' : esc(q.words[i])) + '</button>';
          }).join(q.items ? '<span class="ex-order-arrow">→</span>' : '')
        : '<span class="ex-arrange-ph">' + (q.items ? 'Bấm các câu A, B, C theo đúng thứ tự…' : 'Bấm các từ ở trên theo đúng thứ tự…') + '</span>';
      $all('[data-chip="' + n + '"]').forEach(function (c) {
        c.classList.toggle('is-used', ord.indexOf(parseInt(c.getAttribute('data-ci'), 10)) !== -1);
      });
      var clr = $('[data-clear="' + n + '"]');
      if (clr) clr.hidden = !ord.length || state.submitted;
    });
    // Viet chu Han
    $all('#exMain [data-input]').forEach(function (inp) {
      var n = parseInt(inp.getAttribute('data-input'), 10);
      var v = state.answers[n] || '';
      if (document.activeElement !== inp && inp.value !== v) inp.value = v;
      var blank = $('[data-wblank="' + n + '"]');
      if (blank) { blank.textContent = v; blank.classList.toggle('filled', !!v); }
    });
  }

  function bindTop() {
    $('#exBack').addEventListener('click', function () {
      if (LOP) {
        if (state.submitted) { location.href = '/'; return; }
        openModal('Rời phòng thi', 'Bài làm đã được lưu lên máy thầy cô. Em có thể vào lại bằng mã phòng ' + LOP + ' để làm tiếp, đồng hồ vẫn chạy.', 'Rời phòng', function () { lop.roi = true; location.href = '/'; });
        return;
      }
      if (state.submitted) { location.href = '/exam/'; return; }
      openModal('Thoát bài thi', 'Bạn có chắc chắn muốn thoát không? Bài làm hiện tại sẽ được lưu lại để bạn làm tiếp sau.', 'Thoát', function () { location.href = '/exam/'; });
    });
    var menu = $('#exMenu'), optBtn = $('#exOptBtn');
    optBtn.addEventListener('click', function (e) { e.stopPropagation(); menu.hidden = !menu.hidden; optBtn.setAttribute('aria-expanded', String(!menu.hidden)); });
    document.addEventListener('click', function (e) { if (!menu.hidden && !menu.contains(e.target)) menu.hidden = true; });
    $('#exSpeed').addEventListener('input', function () {
      var r = parseFloat(this.value); $('#exSpeedVal').textContent = r + 'x';
      var a = $('#exAudio'); if (a) a.playbackRate = r;
    });
    $('#exPy').addEventListener('change', function () { document.body.classList.toggle('py-off', !this.checked); });
    window.addEventListener('beforeunload', function (e) {
      if (state.submitted || lop.roi) return;
      e.preventDefault(); e.returnValue = '';
    });
  }

  // ---------- Đồng hồ ----------
  function remainingSec() {
    if (LOP) return Math.max(0, Math.ceil((lop.phong.hetLuc - (Date.now() + lop.lech)) / 1000));
    return Math.max(0, data.durationSec - Math.floor((Date.now() - state.startedAt) / 1000));
  }
  function fmt(sec) {
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s2 = sec % 60;
    return [h, m, s2].map(function (x) { return (x < 10 ? '0' : '') + x; }).join(':');
  }
  function startTimer() {
    var tick = function () {
      var r = remainingSec();
      $('#exTimerTxt').textContent = fmt(r);
      $('#exTimer').classList.toggle('low', r <= 300);
      sumTick();
      if (r <= 0) { clearInterval(timerId); submit(true); }
    };
    tick(); timerId = setInterval(tick, 1000);
  }

  // ---------- Modal ----------
  function openModal(title, text, okLabel, onOk) {
    var root = $('#exModalRoot');
    root.innerHTML = '<div class="ex-modal-bg"><div class="ex-modal" role="dialog" aria-modal="true"><h3>' + esc(title) + '</h3><p>' + esc(text) + '</p>' +
      '<div class="ex-modal-actions"><button type="button" class="ex-btn-ghost" id="exModalCancel">Hủy</button><button type="button" class="ex-btn-primary" id="exModalOk">' + esc(okLabel) + '</button></div></div></div>';
    $('#exModalCancel').addEventListener('click', closeModal);
    $('.ex-modal-bg').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
    $('#exModalOk').addEventListener('click', function () { closeModal(); onOk(); });
    $('#exModalOk').focus();
  }
  function closeModal() { $('#exModalRoot').innerHTML = ''; }

  function confirmSubmit() {
    var left = allQuestions.filter(function (it) { return !hasAnswer(it.q.n); }).length;
    var msg = left > 0 ? 'Bạn còn ' + left + ' câu chưa làm. Bạn có chắc chắn muốn nộp bài không?' : 'Bạn có chắc chắn muốn nộp bài không?';
    openModal('Nộp bài', msg, 'Đồng ý', function () { submit(false); });
  }

  // ---------- Chấm bài ----------
  function submit(auto) {
    if (state.submitted) return;
    clearInterval(timerId);
    stopClip();
    var res = tinhKetQua(auto, Date.now());
    state.submitted = true; state.result = res; saveState();
    if (LOP) { lopNop(); return; }
    luuLichSu(res);
    showResult();
    sendRank(auto);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Cham tren may em (thi tren lop: tinh lai khi may chu gui dap an phan may soan)
  function tinhKetQua(auto, at) {
    var res = { sections: [], correct: 0, total: allQuestions.length, score: 0, max: data.maxScore, at: at, auto: !!auto, usedSec: Math.min(data.durationSec, Math.floor((at - state.startedAt) / 1000)) };
    data.sections.forEach(function (sec) {
      var sr = { id: sec.id, name: sec.name, correct: 0, total: 0, parts: [] };
      sec.parts.forEach(function (part) {
        var qs = part.groups ? [].concat.apply([], part.groups.map(function (g) { return g.questions; })) : part.questions;
        var pr = { name: part.name, correct: 0, total: qs.length };
        qs.forEach(function (q) { if (isRight(q.n, state.answers[q.n])) pr.correct++; });
        sr.correct += pr.correct; sr.total += pr.total; sr.parts.push(pr);
      });
      sr.score = Math.round(sr.correct / sr.total * (data.maxScore / data.sections.length));
      res.correct += sr.correct; res.score += sr.score; res.sections.push(sr);
    });
    res.pass = res.score >= data.passScore;
    return res;
  }
  function luuLichSu(res) {
    try {
      var hist = JSON.parse(localStorage.getItem(RESULTS) || '{}');
      hist[id] = { score: res.score, max: res.max, correct: res.correct, total: res.total, pass: res.pass, at: res.at };
      localStorage.setItem(RESULTS, JSON.stringify(hist));
    } catch (e) { /* ignore */ }
  }

  // Dung / sai mot cau: trang xem lai cua thay co lay ket qua may chu da cham (xem.dung) neu co
  function dungCau(n, v) {
    if (xem.dung && Object.prototype.hasOwnProperty.call(xem.dung, n)) return !!xem.dung[n];
    return isRight(n, v);
  }
  // Phan "Ban chon / Ban viet ..." sau dap an. Thay co xem bai cua em (?xem=1): "Học sinh ...", "Bỏ trống";
  // xem de trong (khong co bai cua em) thi bo qua
  function hsLam(chosen, ok, viet, gt) {
    if (xem.deThi) return '';
    if (!XEM) return chosen === undefined ? (viet ? ' · Bạn chưa làm' : ' · Bạn chưa chọn') : ok ? (viet ? ' · Bạn làm đúng' : ' · Bạn chọn đúng') : (viet ? ' · Bạn viết: ' : ' · Bạn chọn: ') + gt;
    return chosen === undefined ? ' · <b class="ex-xem-trong">Bỏ trống</b>'
      : ok ? ' · <b class="ex-xem-dung">✓ Học sinh ' + (viet ? 'làm' : 'chọn') + ' đúng</b>'
      : ' · <b class="ex-xem-sai">✗ Học sinh ' + (viet ? 'viết' : 'chọn') + ': ' + gt + '</b>';
  }
  function chuaLam() { return XEM ? '<b class="ex-xem-trong">Bỏ trống</b>' : 'Bạn chưa làm'; }
  // Dong "Cham so bo" cua cau viet (bai lam cua em) — xem de trong thi khong co
  function dongCham(ok, noiDung) {
    if (xem.deThi) return '';
    return '<div class="ans' + (XEM ? (ok ? ' ex-xem-ok' : ' ex-xem-bad') : '') + '">' + noiDung + '</div>';
  }

  // Danh dau tung cau sau khi nop — dung chung cho hoc sinh xem lai (showResult) va trang xem lai cua thay co (xemVe)
  function danhDauBai() {
    // Nop xong: mo lai tat ca cac phan de xem dap an
    $all('#exMain .ex-sec').forEach(function (el) { el.hidden = false; });
    $all('#exMain .ex-next').forEach(function (el) { el.hidden = true; });
    $all('#exMain .ex-sum-text, #exMain [data-sum-start], #exMain [data-sum-clock]').forEach(function (el) { el.remove(); });
    $all('#exMain .ex-sum-write').forEach(function (el) { el.hidden = false; });
    // đánh dấu từng câu
    allQuestions.forEach(function (it) {
      var q = it.q, chosen = state.answers[q.n], ok = dungCau(q.n, chosen);
      if (chosen === '') chosen = undefined;
      var card = document.getElementById('q-' + q.n);
      if (card && !xem.deThi) card.classList.add(chosen === undefined ? 'is-skip' : ok ? 'is-correct' : 'is-wrong');
      $all('#exMain [data-n="' + q.n + '"][data-v]').forEach(function (b) {
        var v = b.getAttribute('data-v'); if (v === 'true') v = true; else if (v === 'false') v = false;
        b.classList.remove('sel');
        if (v === q.answer) b.classList.add('ok');
        else if (v === chosen) b.classList.add('bad');
        b.disabled = true;
      });
      $all('#exMain [data-chip="' + q.n + '"], #exMain [data-placed="' + q.n + '"]').forEach(function (c) { c.disabled = true; });
      var inp = $('#exMain [data-input="' + q.n + '"]');
      if (inp) { inp.disabled = true; if (!xem.deThi) inp.classList.add(chosen === undefined ? 'skip' : ok ? 'ok' : 'bad'); }
      var line = $('#exMain [data-line="' + q.n + '"]');
      if (line && !xem.deThi) line.classList.add(chosen === undefined ? 'skip' : ok ? 'ok' : 'bad');
      var clrBtn = $('#exMain [data-clear="' + q.n + '"]');
      if (clrBtn) clrBtn.hidden = true;
      var ex = $('[data-explain="' + q.n + '"]');
      if (ex) {
        var ansTxt = typeof q.answer === 'boolean' ? (q.answer ? '✓ Đúng' : '✗ Sai') : q.answer;
        var ec = it.essay ? essayCheck(q, chosen) : null;
        var sc = it.sum ? summaryCheck(q, chosen) : null;
        var aiBox = chosen !== undefined && !XEM ? '<div class="ex-ai-box" data-ai="' + q.n + '"><button type="button" class="ex-btn-ghost ex-ai-btn" data-ai-cham="' + q.n + '">Nhờ AI chấm chi tiết</button></div>' : '';
        var moMau = XEM ? ' open' : ''; // thay co xem bai: mo san bai mau canh bai cua em
        var h = it.sum
          ? dongCham(ok, chosen === undefined ? chuaLam() : 'Chấm sơ bộ: ' + (ok ? 'đạt' : 'chưa đạt') + ' — ' + sc.n + ' chữ' +
              (sc.n < (q.minHan || 300) ? ' · bài cần khoảng ' + (q.soChu || 400) + ' chữ' : sc.n > sc.max ? ' · bài quá dài, cần khoảng ' + (q.soChu || 400) + ' chữ' : '')) +
            aiBox +
            '<details class="ex-essay-mau"><summary>Bài đọc gốc</summary><div class="hanzi ex-sum-goc">' + paras(q.text) + '</div>' + (q.textVn ? '<div class="vn">' + paras(q.textVn) + '</div>' : '') + '</details>' +
            '<details class="ex-essay-mau"' + moMau + '><summary>Bài tóm tắt mẫu</summary><div class="hanzi">' + paras(q.answer) + '</div>' + (q.vn ? '<div class="vn">' + paras(q.vn) + '</div>' : '') + '</details>'
          : it.essay
          ? dongCham(ok, chosen === undefined ? chuaLam() : 'Chấm sơ bộ: ' + (ok ? 'đạt' : 'chưa đạt') + ' — ' + ec.n + ' chữ' +
              (q.words ? (ec.thieu.length ? ' · còn thiếu: <span class="hanzi">' + esc(ec.thieu.join('、')) + '</span>' : ' · dùng đủ 5 từ') : '') +
              (ec.n < (q.minHan || 60) ? ' · cần khoảng 80 chữ' : '')) +
            aiBox +
            '<details class="ex-essay-mau"' + moMau + '><summary>Bài mẫu tham khảo</summary><div class="hanzi">' + esc(q.answer) + '</div>' + (q.vn ? '<div class="vn">' + esc(q.vn) + '</div>' : '') + '</details>'
          : it.pw
          ? dongCham(ok, chosen === undefined ? chuaLam() : ok ? 'Chấm sơ bộ: đạt (có dùng 「' + esc(q.word) + '」, câu đủ ý)' : 'Chấm sơ bộ: chưa đạt — câu phải dùng 「' + esc(q.word) + '」 và dài khoảng 5–40 chữ') +
            '<div class="ans">Câu mẫu: <span class="hanzi">' + esc(q.answer) + '</span>' + (q.accept && q.accept.length ? '<br>Cách khác: <span class="hanzi">' + esc(q.accept.join(' / ')) + '</span>' : '') + '</div>'
          : it.text
          ? '<div class="ans">Đáp án: <span class="hanzi">' + esc(q.answer) + '</span>' + hsLam(chosen, ok, true, '<span class="hanzi">' + esc(chosen) + '</span>') + '</div>'
          : '<div class="ans">Đáp án: ' + esc(ansTxt) + hsLam(chosen, ok, false, esc(typeof chosen === 'boolean' ? (chosen ? '✓' : '✗') : chosen)) + '</div>';
        if (q.items) {
          // Ghep ba cau theo dung thu tu; cau nao khong co dau cau o cuoi thi noi bang dau phay
          var doan = String(q.answer).split('').map(function (k) { var x = q.items.filter(function (y) { return y.k === k; })[0]; return x ? x.zh : ''; });
          h += '<div class="zh hanzi">' + esc(doan.map(function (c, i) { return i < doan.length - 1 && !/[，。！？；：、”…]$/.test(c) ? c + '，' : c; }).join('')) + '</div>';
        }
        if (q.script) h += '<div class="zh hanzi">' + esc(q.script) + '</div>';
        if (q.scriptVn) h += '<div class="vn">' + esc(q.scriptVn) + '</div>';
        if (q.scriptVn && q.starVn) h += '<div class="vn">★ ' + esc(q.starVn) + '</div>';
        if (q.vn && !q.scriptVn && !it.essay && !it.sum) h += '<div class="vn">' + esc(q.vn) + (q.starVn ? '<br>★ ' + esc(q.starVn) : '') + '</div>';
        else if (!q.vn && !q.scriptVn && q.starVn) h += '<div class="vn">★ ' + esc(q.starVn) + '</div>';
        ex.innerHTML = h; ex.hidden = false;
      }
    });
  }

  function showResult() {
    var res = state.result;
    danhDauBai();
    // sidebar kết quả
    var pct = Math.round(res.score / res.max * 100);
    var C = 2 * Math.PI * 80;
    var d = new Date(res.at);
    var pad = function (x) { return (x < 10 ? '0' : '') + x; };
    var dateStr = d.getFullYear() + '.' + pad(d.getMonth() + 1) + '.' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
    var h2 = '<div class="ex-result"><h3>' + esc(data.title) + '</h3><div class="date">' + dateStr + (res.auto ? ' · Hết giờ, tự động nộp' : '') + '</div>' +
      '<div class="ex-ring' + (res.pass ? ' pass' : '') + '"><svg viewBox="0 0 190 190"><circle class="track" cx="95" cy="95" r="80"/><circle class="bar" cx="95" cy="95" r="80" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - pct / 100)) + '"/></svg>' +
      '<div class="ex-ring-txt"><b>' + pct + '%</b><span>' + (res.pass ? 'Đạt' : 'Chưa đạt') + '</span></div></div>' +
      '<div class="ex-stats"><div><small>Chính xác</small><b>' + res.correct + '</b></div><div><small>Số điểm</small><b>' + res.score + '</b><small>/ ' + res.max + '</small></div><div><small>Câu hỏi</small><b>' + res.total + '</b></div></div>' +
      (LOP ? '<div class="ex-result-actions"><a class="ex-btn-ghost" href="/">Về trang chủ</a></div></div>'
        : '<div class="ex-result-actions"><button type="button" class="ex-btn-primary" id="exRetry">Làm lại</button><a class="ex-btn-ghost" href="/exam/">Đề khác</a></div></div>');
    h2 += '<div class="ex-rankbox" id="exRankBox"></div>';
    h2 += '<div class="ex-breakdown">';
    res.sections.forEach(function (sr) {
      var sp = Math.round(sr.correct / sr.total * 100);
      h2 += '<div class="ex-bd-sec">' + ({ listen: '🎧', read: '📖', write: '✍️' }[sr.id] || '📖') + ' ' + esc(sr.name) + ' (' + sr.correct + '/' + sr.total + ') <span style="margin-left:auto;font-weight:600;color:#6b625c">' + sr.score + ' điểm</span></div>' +
        '<div class="ex-bar big"><i style="width:' + sp + '%"></i></div>';
      sr.parts.forEach(function (pr) {
        var pp = Math.round(pr.correct / pr.total * 100);
        h2 += '<div class="ex-bd-row"><span>' + esc(pr.name) + ' (' + pr.correct + '/' + pr.total + '):</span><div class="ex-bar"><i style="width:' + pp + '%"></i></div><span>' + pp + '%</span></div>';
      });
    });
    h2 += '</div><div class="ex-nav" id="exNav"><h3>Xem lại câu hỏi</h3>';
    data.sections.forEach(function (sec) {
      sec.parts.forEach(function (part) {
        h2 += '<h4>' + esc(sec.name) + ' · ' + esc(part.name) + '</h4><div class="ex-nav-grid">';
        var qs = part.groups ? [].concat.apply([], part.groups.map(function (g) { return g.questions; })) : part.questions;
        qs.forEach(function (q) {
          var chosen = state.answers[q.n];
          var cls = !hasAnswer(q.n) ? '' : isRight(q.n, chosen) ? ' ok' : ' bad';
          h2 += '<button type="button" class="ex-dot' + cls + '" data-goto="q-' + q.n + '">' + q.n + '</button>';
        });
        h2 += '</div>';
      });
    });
    h2 += '</div>';
    $('#exSide').innerHTML = h2;
    if (LOP) return;
    renderRankBox();
    $('#exRetry').addEventListener('click', function () {
      var retryMsg = 'Kết quả hiện tại sẽ được giữ trong lịch sử, bài làm sẽ bắt đầu lại từ đầu với thời gian đầy đủ.' +
        (state.attemptId || authToken() ? ' Lượt làm lại chỉ để luyện tập, bảng xếp hạng chỉ tính lượt nộp đầu tiên.' : '');
      openModal('Làm lại đề này', retryMsg, 'Làm lại', function () {
        clearState(); location.reload();
      });
    });
  }

  /* ============================================================
     Thi trên lớp (/thi?ma=123456) — phòng do thầy cô tạo ở /thi-lop
     Vào phòng (tên / danh sách lớp) → chờ bắt đầu → làm bài như phòng thi thường,
     phần Nghe nghe loa của thầy cô → nộp → điểm hiện ngay hoặc khi thầy cô công bố.
     ============================================================ */
  function lopApi(method, path, body) {
    var h = { 'Content-Type': 'application/json' };
    var tk = authToken(); if (tk) h.Authorization = 'Bearer ' + tk;
    return fetch('/api/thi-lop/' + LOP + path, { method: method, headers: h, body: body ? JSON.stringify(body) : undefined })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (!r.ok) { var e = new Error(j.error || 'Lỗi máy chủ (' + r.status + ').'); e.raKhoi = !!j.raKhoi; throw e; }
          return j;
        });
      });
  }
  function lopNhoMay(pid, tok) {
    lop.pid = pid; lop.tok = tok;
    STORE = 'hyv_thilop_' + LOP + '_' + pid; // may dung chung (phong may): moi ban mot bai lam rieng
    try { localStorage.setItem(ID_LOP, JSON.stringify({ pid: pid, tok: tok })); } catch (e) { /* bo qua */ }
  }
  function lopTheTrong(html) {
    $('#exSide').innerHTML = '';
    $('#exMain').innerHTML = '<div class="ex-card ex-lop-vao">' + html + '</div>';
  }

  // /thi khong co ma: o nhap ma phong
  function lopNhapMa() {
    document.body.classList.add('ex-lop');
    $('#exTitle').textContent = 'Thi trên lớp';
    lopTheTrong('<div class="ex-lop-ma">Thi trên lớp</div><h2>Nhập mã phòng thi</h2><p>Mã gồm 6 số, thầy cô chiếu trên bảng.</p>' +
      '<input id="exLopMa" class="ex-input ex-lop-o-ma" inputmode="numeric" maxlength="6" autocomplete="off" placeholder="123456" aria-label="Mã phòng thi" />' +
      '<button type="button" class="ex-btn-primary" id="exLopMaBtn">Vào phòng</button><p class="ex-lop-err" id="exLopErr" hidden></p>');
    var o = $('#exLopMa');
    var di = function () {
      var m = o.value.replace(/\D/g, '');
      if (m.length !== 6) { $('#exLopErr').textContent = 'Mã phòng có 6 số.'; $('#exLopErr').hidden = false; return; }
      location.href = '/thi?ma=' + m;
    };
    $('#exLopMaBtn').addEventListener('click', di);
    o.addEventListener('keydown', function (e) { if (e.key === 'Enter') di(); });
    o.focus();
  }

  function lopKhoiDong() {
    document.body.classList.add('ex-lop');
    $('#exTitle').textContent = 'Thi trên lớp · Phòng ' + LOP;
    var nho = null;
    try { nho = JSON.parse(localStorage.getItem(ID_LOP) || 'null'); } catch (e) { /* bo qua */ }
    if (!nho || !nho.pid) { lopVeVao(); return; }
    lopNhoMay(nho.pid, nho.tok);
    lopApi('GET', '/hs?pid=' + encodeURIComponent(lop.pid) + '&tok=' + encodeURIComponent(lop.tok))
      .then(function (ph) { lopCapNhat(ph); lopPoll(); })
      .catch(function (e) {
        if (e.raKhoi) { lopQuenMay(); lopVeVao(); return; }
        lopLoi(e.message);
      });
  }
  function lopQuenMay() {
    try { localStorage.removeItem(ID_LOP); } catch (e) { /* bo qua */ }
    lop.pid = ''; lop.tok = '';
    clearInterval(lop.poll);
  }
  function lopLoi(msg) {
    lopTheTrong('<div class="ex-lop-ma">Phòng thi ' + LOP + '</div><h2>Chưa vào được phòng thi</h2><p class="ex-lop-err">' + esc(msg) + '</p>' +
      '<button type="button" class="ex-btn-primary" id="exLopThu">Thử lại</button>');
    $('#exLopThu').addEventListener('click', function () { location.reload(); });
  }

  function lopVeVao() {
    lopTheTrong('<p>Đang tải phòng thi…</p>');
    lopApi('GET', '/thong-tin').then(function (t) {
      var h = '<div class="ex-lop-ma">Phòng thi ' + LOP + '</div><h2>' + esc(t.tieuDe) + '</h2>' + (t.tenLop ? '<p><b>' + esc(t.tenLop) + '</b></p>' : '');
      if (t.pha === 'xong') h += '<p class="ex-lop-err">Bài thi này đã thu bài. Nếu em đã làm trên máy khác, chọn tên mình để xem lại.</p>';
      if (t.ds) {
        h += '<p class="ex-lop-hd">Chọn tên của em:</p><div class="ex-lop-ten">' + t.ds.map(function (r) {
          return '<button type="button" data-ros="' + esc(r.id) + '" class="' + (r.id === t.goiY ? 'goi-y' : '') + (r.da ? ' da' : '') + '">' + esc(r.ten) + (r.da ? '<small>đã vào</small>' : '') + '</button>';
        }).join('') + '</div>';
      } else {
        h += '<label class="ex-lop-hd" for="exLopTen">Họ và tên của em</label>' +
          '<input id="exLopTen" class="ex-input" maxlength="40" autocomplete="name" value="' + esc(t.tk) + '" placeholder="Ví dụ: Nguyễn Gia My" />' +
          '<button type="button" class="ex-btn-primary" id="exLopVaoBtn">Vào phòng thi</button>';
      }
      if (t.tk) h += '<p class="ex-lop-nho">Đang đăng nhập: <b>' + esc(t.tk) + '</b> — đổi máy giữa giờ vẫn vào lại đúng bài đang làm.</p>';
      h += '<p class="ex-lop-err" id="exLopErr" hidden></p>';
      lopTheTrong(h);
      $all('[data-ros]').forEach(function (b) {
        b.addEventListener('click', function () { lopVao({ rosterId: b.getAttribute('data-ros') }); });
      });
      var o = $('#exLopTen');
      if (o) {
        $('#exLopVaoBtn').addEventListener('click', function () { lopVao({ ten: o.value }); });
        o.addEventListener('keydown', function (e) { if (e.key === 'Enter') lopVao({ ten: o.value }); });
      }
      var gy = $('.ex-lop-ten .goi-y'); if (gy) gy.scrollIntoView({ block: 'center' });
    }).catch(function (e) { lopLoi(e.message); });
  }
  function lopVao(body) {
    lopApi('POST', '/vao', body).then(function (r) {
      lopNhoMay(r.pid, r.tok);
      lop.tlMay = r.tl; lop.secMay = r.sec;
      lopCapNhat(r.phong);
      lopPoll();
    }).catch(function (e) {
      var el = $('#exLopErr'); if (el) { el.textContent = e.message; el.hidden = false; }
    });
  }
  function lopPoll() {
    clearInterval(lop.poll);
    lop.poll = setInterval(function () {
      if (!lop.pid) return;
      lopApi('GET', '/hs?pid=' + encodeURIComponent(lop.pid) + '&tok=' + encodeURIComponent(lop.tok))
        .then(lopCapNhat)
        .catch(function (e) { if (e.raKhoi) lopBiDay(); });
    }, 3000);
  }
  // Ma cua may nay bi thay (em vao lai tren may khac)
  function lopBiDay() {
    clearInterval(lop.poll); clearInterval(timerId); clearTimeout(lop.luu);
    lop.roi = true;
    lopTheTrong('<div class="ex-lop-ma">Phòng thi ' + LOP + '</div><h2>Máy này đã dừng</h2>' +
      '<p>Em đã vào phòng thi bằng một máy khác, nên bài làm tiếp tục ở máy đó. Muốn quay lại làm ở máy này, nhờ thầy cô bấm <b>“Cho vào lại”</b> cạnh tên em rồi bấm nút dưới đây.</p>' +
      '<button type="button" class="ex-btn-primary" id="exLopLai">Vào lại phòng thi</button>');
    $('#exLopLai').addEventListener('click', function () { lopQuenMay(); location.reload(); });
  }
  function lopDoiTenNut() {
    var b = $('#exLopDoi');
    if (b) b.addEventListener('click', function () { lopQuenMay(); lop.roi = true; location.reload(); });
  }

  function lopCapNhat(ph) {
    var cu = lop.phong;
    lop.phong = ph;
    lop.lech = ph.now - Date.now();
    if (ph.pha === 'cho') { lopVeCho(); return; }
    if (!lop.daTai) { lop.daTai = true; id = ph.examId; taiDe(ph.examId); return; }
    if (!data || !allQuestions.length) return;
    if (!state.submitted) {
      if (ph.pha === 'xong' || ph.daNop) { submit(true); return; }
      lopQuaPhanNghe(false);
      lopNghe();
      if (cu && cu.hetLuc && cu.hetLuc !== ph.hetLuc) lopThongBao(ph.hetLuc > cu.hetLuc ? 'Thầy cô đã cộng thêm giờ làm bài ⏰' : 'Thầy cô đã đổi giờ làm bài');
    } else if (ph.kq && state.lopDaGui && !lop.daHien) lopHienKetQua();
  }
  function lopVeCho() {
    var ph = lop.phong;
    var so = $('#exLopSoHs');
    if (so) { so.textContent = ph.soHs; return; }
    lopTheTrong('<div class="ex-lop-ma">Phòng thi ' + LOP + '</div><h2>' + esc(ph.tieuDe) + '</h2>' +
      '<p>Chào <b>' + esc(ph.ten || '') + '</b>, em đã vào phòng thi.</p>' +
      '<div class="ex-lop-cho"><i></i><i></i><i></i></div>' +
      '<p>Chờ thầy cô bấm <b>Bắt đầu</b>… Trong phòng có <b id="exLopSoHs">' + ph.soHs + '</b> bạn.</p>' +
      '<p class="ex-lop-nho">Đề sẽ hiện ra ngay tại đây. Phần Nghe: em nghe loa của thầy cô và chọn đáp án trên máy của mình.</p>' +
      '<button type="button" class="ex-lop-doi" id="exLopDoi">Không phải em? Vào bằng tên khác</button>');
    lopDoiTenNut();
  }
  // De chi gom cac phan thay co chon; moi phan van 100 diem nhu de that
  function lopChuanBiDe() {
    var ph = lop.phong, all = data.sections.length, per = data.maxScore / all;
    data.sections = data.sections.filter(function (s) { return ph.phan.indexOf(s.id) !== -1; })
      .map(function (s) { return (ph.soan && ph.soan[s.id]) || s; });
    data.passScore = Math.round(data.passScore / data.maxScore * per * data.sections.length);
    data.maxScore = Math.round(per * data.sections.length);
    data.title = ph.tieuDe;
  }
  // Doi may giua gio: may moi chua co gi thi lay bai da luu tren may chu
  function lopGopBai() {
    if (lop.tlMay && Object.keys(lop.tlMay).length && !Object.keys(state.answers || {}).length) {
      state.answers = lop.tlMay;
      state.sec = lop.secMay || 0;
    }
    lop.tlMay = null;
  }
  // Thay co bam "Mo phan Doc": ca lop tu sang phan sau
  function lopQuaPhanNghe(truocKhiVe) {
    var si = curSec(), sec = data.sections[si];
    if (!sec || sec.id !== 'listen' || !lop.phong.ngheXong || !data.sections[si + 1]) return;
    if (truocKhiVe) { state.sec = si + 1; return; }
    chuyenPhan(si + 1);
    lopThongBao('Hết phần Nghe — chuyển sang phần ' + data.sections[si + 1].name);
  }
  // "Dang doc cau 5" theo may thay co, to sang va cuon toi cau do
  function lopNghe() {
    var el = $('#exLopCau');
    if (!el) return;
    var ng = lop.phong.nghe;
    if (lop.phong.ngheXong) { el.textContent = 'Bài nghe đã kết thúc.'; return; }
    if (!ng || !ng.cau) el.textContent = ng && ng.phat ? 'Đang phát phần hướng dẫn…' : 'Chờ thầy cô phát bài nghe…';
    else el.textContent = (ng.phat ? 'Đang đọc câu ' : 'Tạm dừng ở câu ') + ng.cau;
    var cau = ng ? ng.cau : 0;
    if (cau === lop.cauNghe) return;
    lop.cauNghe = cau;
    $all('.ex-dang-nghe').forEach(function (x) { x.classList.remove('ex-dang-nghe'); });
    var c = cau && document.getElementById('q-' + cau);
    if (!c) return;
    c.classList.add('ex-dang-nghe');
    var cb = $('#exLopCuon'), sec = data.sections[curSec()];
    if (cb && cb.checked && sec && sec.id === 'listen') c.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  function lopHenLuu() {
    clearTimeout(lop.luu);
    lop.luu = setTimeout(function () {
      if (state.submitted || !lop.pid) return;
      lopApi('POST', '/luu', { pid: lop.pid, tok: lop.tok, tl: state.answers, sec: curSec() })
        .then(lopCapNhat)
        .catch(function (e) { if (e.raKhoi) lopBiDay(); });
    }, 1200);
  }
  function lopNop() {
    clearTimeout(lop.luu);
    lopVeDaNop();
    if (lop.dangGui) return;
    lop.dangGui = true;
    (function gui() {
      lopApi('POST', '/nop', { pid: lop.pid, tok: lop.tok, tl: state.answers, auto: !!(state.result && state.result.auto) })
        .then(function (ph) { lop.dangGui = false; state.lopDaGui = true; saveState(); lopCapNhat(ph); lopVeDaNop(); })
        .catch(function (e) {
          if (e.raKhoi) { lop.dangGui = false; lopBiDay(); return; }
          lopVeDaNop('Chưa gửi được bài lên máy thầy cô — đang thử lại…');
          setTimeout(gui, 4000);
        });
    })();
  }
  function lopDaNop() {
    if (!state.lopDaGui) lopNop(); else lopVeDaNop();
  }
  function lopVeDaNop(loi) {
    if (lop.daHien) return;
    if (state.lopDaGui && lop.phong && lop.phong.kq) { lopHienKetQua(); return; }
    clearInterval(timerId);
    $all('#exMain .ex-sec').forEach(function (el) { el.hidden = true; });
    var box = $('#exLopXong');
    if (!box) {
      box = document.createElement('div');
      box.id = 'exLopXong'; box.className = 'ex-card ex-lop-vao';
      $('#exMain').insertBefore(box, $('#exMain').firstChild);
    }
    var lam = allQuestions.filter(function (it) { return hasAnswer(it.q.n); }).length;
    box.innerHTML = '<div class="ex-lop-tick">' + ICONS.check + '</div>' +
      '<h2>' + (state.lopDaGui ? 'Em đã nộp bài' : 'Đang nộp bài…') + '</h2>' +
      '<p>Em đã làm <b>' + lam + '/' + allQuestions.length + '</b> câu' + (state.result && state.result.auto ? ' (hết giờ, máy tự nộp)' : '') + '.</p>' +
      (loi ? '<p class="ex-lop-err">' + esc(loi) + '</p>' : state.lopDaGui ? '<p>Chờ thầy cô công bố kết quả — điểm và đáp án sẽ hiện ngay tại đây.</p>' : '') +
      '<button type="button" class="ex-lop-doi" id="exLopDoi">Không phải em? Vào bằng tên khác</button>';
    lopDoiTenNut();
    $('#exSide').innerHTML = '<div class="ex-rank-note">' + rankNoteHtml() + '</div>';
  }
  function lopHienKetQua() {
    lop.daHien = true;
    var sv = lop.phong && lop.phong.soan;
    if (sv) Object.keys(sv).forEach(function (id) {
      (sv[id].parts || []).forEach(function (p) {
        (p.groups || [p]).forEach(function (g) {
          (g.options || []).forEach(function (o) {
            var it = g.questions && g.questions[0] && questionIndex[g.questions[0].n];
            var go = it && it.group && (it.group.options || []).filter(function (x) { return x.k === o.k; })[0];
            if (go && o.vn) go.vn = o.vn;
          });
          (g.questions || []).forEach(function (q) {
            var it = questionIndex[q.n];
            if (!it) return;
            if (q.answer !== undefined) it.q.answer = q.answer;
            if (q.accept) it.q.accept = q.accept;
            if (q.vn) it.q.vn = q.vn;
          });
        });
      });
      // gio moi co dap an -> cham lai tren may em cho khop voi diem may chu
      state.result = tinhKetQua(state.result && state.result.auto, (state.result && state.result.at) || Date.now());
      saveState();
    });
    clearInterval(lop.poll);
    var box = $('#exLopXong'); if (box) box.remove();
    showResult();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  function lopThongBao(t) {
    var el = $('#exLopToast');
    if (!el) { el = document.createElement('div'); el.id = 'exLopToast'; el.className = 'ex-lop-toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.textContent = t;
    el.classList.add('on');
    clearTimeout(lop.toast);
    lop.toast = setTimeout(function () { el.classList.remove('on'); }, 4000);
  }

  /* ============================================================
     Xem lại bài cho thầy cô (/thi?xem=1) — trang này nằm trong khung của /thi-lop.
     Trang thầy cô gọi window.HYV_XEM.ve({ data, tl, dung, deThi, dau, tk }): đề được vẽ bằng chính
     render() + danhDauBai() của phòng thi, nên giống hệt màn xem lại của học sinh.
     ============================================================ */
  function xemKhoiDong() {
    document.body.classList.add('ex-xem');
    $('#exMain').innerHTML = '<div class="ex-card"><p>Trang này mở từ màn hình <a href="/thi-lop">Thi trên lớp</a> của thầy cô.</p></div>';
    $('#exSide').innerHTML = '';
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ai-sai]');
      if (!b) return;
      var ds = b.parentNode.querySelector('.ex-xem-ds');
      if (ds) { ds.hidden = !ds.hidden; b.setAttribute('aria-expanded', String(!ds.hidden)); }
    });
    window.HYV_XEM = { ve: xemVe, loc: xemLoc, toi: xemToi, dungNghe: function () { stopClip(); } };
  }
  function xemO(n) { return $('#exMain .ex-card[data-n="' + n + '"], #exMain .ex-row[data-n="' + n + '"]'); }
  // Cau sap xep: may chu chi luu chuoi dap an em xep -> doan lai thu tu cac manh de ve nhu luc em lam
  function xemThuTu(q, v) {
    if (typeof v !== 'string' || !v) return null;
    if (q.items) {
      var ks = q.items.map(function (x) { return x.k; });
      var o = v.split('').map(function (k) { return ks.indexOf(k); });
      return o.indexOf(-1) === -1 ? o : null;
    }
    if (!q.words) return null;
    var con = v, ord = [];
    while (con) {
      var tot = -1;
      q.words.forEach(function (w, i) {
        if (ord.indexOf(i) === -1 && w && con.indexOf(w) === 0 && (tot === -1 || w.length > q.words[tot].length)) tot = i;
      });
      if (tot === -1) return null;
      ord.push(tot);
      con = con.slice(q.words[tot].length);
    }
    return ord;
  }
  // o.data: de (chuoi JSON, da loc phan thi + phan may soan) · o.tl: bai lam · o.dung: dung/sai may chu da cham
  // o.deThi: chi xem de + dap an · o.tk: { n: { d, t, sai: [ten] | null } } so ban dung tung cau · o.dau: dau trang khi in
  // Tra ve { n: 'dung' | 'sai' | 'trong' } cho thanh nhay cau cua trang thay co
  function xemVe(o) {
    stopClip();
    data = JSON.parse(o.data);
    state = { answers: o.tl || {}, startedAt: 0, submitted: true, result: null, order: {} };
    xem.dung = o.dung || null;
    xem.deThi = !!o.deThi;
    questionIndex = {};
    indexQuestions();
    // de trong: o xep cau hien san thu tu dung
    allQuestions.forEach(function (it) { var t = xemThuTu(it.q, xem.deThi ? it.q.answer : state.answers[it.q.n]); if (t) state.order[it.q.n] = t; });
    render();
    danhDauBai();
    // the nhom (vd cau 41–45 chung kho tu) trung id voi cau dau nhom: mau dung/sai chi dat tren tung dong cau
    $all('#exMain [data-group]').forEach(function (g) { g.classList.remove('is-correct', 'is-wrong', 'is-skip'); });
    if (!xem.daBind) { xem.daBind = true; bindMain(); }
    $all('#exMain [data-line]').forEach(function (line) {
      var n = parseInt(line.getAttribute('data-line'), 10), v = state.answers[n];
      if (state.order[n]) { if (xem.deThi) line.classList.add('ok'); return; }
      line.innerHTML = v ? '<span class="hanzi ex-xem-viet">' + esc(v) + '</span>' : '<span class="ex-arrange-ph">' + (xem.deThi ? '' : 'Bỏ trống') + '</span>';
    });
    var kq = {};
    allQuestions.forEach(function (it) {
      var n = it.q.n, v = state.answers[n];
      kq[n] = v === undefined || v === '' ? 'trong' : dungCau(n, v) ? 'dung' : 'sai';
      var el = xemO(n);
      if (el && !xem.deThi) el.setAttribute('data-xl', kq[n]);
      var t = o.tk && o.tk[n], ex = $('[data-explain="' + n + '"]');
      if (!t || !ex) return;
      var pt = t.t ? Math.round(t.d / t.t * 100) : 0;
      ex.insertAdjacentHTML('beforeend', '<div class="ex-xem-tk"><span class="ex-xem-tk-so" style="background:hsl(' + Math.round(pt * 1.2) + ' 62% 86%)"><b>' + t.d + '/' + t.t + '</b> bạn đúng</span>' +
        (t.sai && t.sai.length ? '<button type="button" class="ex-xem-ai" data-ai-sai="' + n + '" aria-expanded="false">Ai sai? (' + t.sai.length + ')</button><span class="ex-xem-ds" hidden>' + t.sai.map(esc).join(', ') + '</span>'
          : t.sai ? '<span class="ex-xem-ca">Cả lớp làm đúng</span>' : '') + '</div>');
    });
    if (o.dau) $('#exMain').insertAdjacentHTML('afterbegin', '<div class="ex-xem-dau">' + o.dau + '</div>');
    document.title = data.title + ' — Xem lại';
    $all('#exMain img').forEach(function (im) { im.loading = 'eager'; }); // in ra giay du hinh
    $all('#exMain textarea').forEach(function (t) { t.style.height = 'auto'; t.style.height = (t.scrollHeight + 6) + 'px'; });
    window.scrollTo({ top: 0, behavior: 'instant' });
    return kq;
  }
  // Chi cau sai (va bo trong): an cau dung, an luon nhom / dang bai / phan thi khong con cau nao
  function xemLoc(chiSai) {
    $all('#exMain [data-xl]').forEach(function (el) { el.hidden = chiSai && el.getAttribute('data-xl') === 'dung'; });
    $all('#exMain [data-group]').forEach(function (g) { g.hidden = chiSai && !$('[data-xl]:not([hidden])', g); });
    var con = 0;
    $all('#exMain .ex-sec').forEach(function (sec) {
      var intro = null, co = false, coPhan = false;
      var dong = function () {
        if (!intro) return;
        intro.hidden = chiSai && !co;
        var vd = intro.nextElementSibling;
        if (vd && vd.classList.contains('ex-example-part')) vd.hidden = intro.hidden;
      };
      Array.prototype.forEach.call(sec.children, function (el) {
        if (el.classList.contains('ex-part-intro')) { dong(); intro = el; co = false; return; }
        if (el.matches('[data-xl], [data-group]') && !el.hidden) { co = true; coPhan = true; }
      });
      dong();
      sec.hidden = chiSai && !coPhan;
      if (!sec.hidden) con++;
    });
    var tb = $('#exXemHet');
    if (!tb) { tb = document.createElement('div'); tb.id = 'exXemHet'; tb.className = 'ex-card ex-xem-het'; tb.textContent = 'Không có câu sai nào — em làm đúng hết.'; $('#exMain').appendChild(tb); }
    tb.hidden = !chiSai || con > 0;
  }
  function xemToi(n) {
    var el = xemO(n);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.classList.remove('ex-xem-nhay');
    void el.offsetWidth;
    el.classList.add('ex-xem-nhay');
  }

  /* ============================================================
     Bản in (/thi?in=1&id=...&phan=listen,read&kem=de|phieu|dapan)
     de: đề giấy cho học sinh · phieu: phiếu tô đáp án · dapan: đáp án + lời bài nghe
     ============================================================ */
  function chonPhanIn() {
    if (QS.get('soan') === '1') {
      var sv = null;
      try { sv = JSON.parse(localStorage.getItem('hyv_thilop_in') || 'null'); } catch (e) { /* bo qua */ }
      if (sv && sv.id === id && sv.soan) {
        data.sections = data.sections.map(function (s) { return sv.soan[s.id] || s; });
        data.title += ' · ' + (sv.soan.read || sv.soan.write).nguon;
      }
    }
    var ph = (QS.get('phan') || '').split(',').filter(Boolean);
    if (ph.length) data.sections = data.sections.filter(function (s) { return ph.indexOf(s.id) !== -1; });
    if (!data.sections.length) data.sections = window.EXAM_DATA.sections;
  }
  function khoaCau(it) {
    var t = it.part.type, q = it.q, g = it.group;
    if (t === 'judge-pic' || t === 'judge-text') return ['✓', '✗'];
    if (t === 'pic-mc') return Object.keys(q.pics);
    if (t === 'pic-match') return Object.keys(g.pics);
    if (t === 'mc') return q.options.map(function (o, i) { return 'ABCDEF'[i]; });
    if (t === 'word-fill') return (g ? g.words : it.part.words).map(function (w) { return w.k; });
    if (t === 'sent-match') return g.options.map(function (o) { return o.k; });
    return null;
  }
  function itsCuaPhan(sec) { return allQuestions.filter(function (it) { return it.section === sec; }); }
  function phieuHtml() {
    return data.sections.map(function (sec) {
      return '<section class="ex-in-khoi"><h3>' + esc(sec.name) + '</h3><div class="ex-in-luoi">' + itsCuaPhan(sec).map(function (it) {
        var k = khoaCau(it);
        var dai = it.essay || it.sum ? ' ex-in-rong' : it.pw || it.text ? ' ex-in-vua' : '';
        return '<div class="ex-in-o' + dai + '"><b>' + it.q.n + '</b>' + (k
          ? k.map(function (x) { return '<span class="ex-in-k">' + esc(x) + '</span>'; }).join('')
          : '<span class="ex-in-dong"></span>' + (it.essay || it.sum ? new Array(it.sum ? 12 : 5).join('<span class="ex-in-dong"></span>') : '')) + '</div>';
      }).join('') + '</div></section>';
    }).join('');
  }
  function dapAnHtml() {
    var h = data.sections.map(function (sec) {
      return '<section class="ex-in-khoi"><h3>Đáp án · ' + esc(sec.name) + '</h3><div class="ex-in-luoi ex-in-da">' + itsCuaPhan(sec).map(function (it) {
        var a = it.q.answer, dai = it.text || it.pw || it.essay || it.sum;
        var txt = typeof a === 'boolean' ? (a ? '✓' : '✗') : String(a == null ? '' : a);
        return '<div class="ex-in-o' + (dai ? ' ex-in-rong' : '') + '"><b>' + it.q.n + '</b><span class="' + (dai ? 'hanzi' : 'ex-in-dung') + '">' + (dai && (it.pw || it.essay || it.sum) ? 'Câu mẫu: ' : '') + esc(txt) + '</span></div>';
      }).join('') + '</div></section>';
    }).join('');
    var nghe = allQuestions.filter(function (it) { return it.section.id === 'listen' && it.q.script; });
    if (nghe.length) {
      h += '<section class="ex-in-khoi"><h3>Lời bài nghe</h3><ol class="ex-in-loi">' + nghe.map(function (it) {
        return '<li value="' + it.q.n + '"><div class="hanzi">' + esc(it.q.script).replace(/\n/g, '<br>') + '</div>' + (it.q.scriptVn ? '<div class="vn">' + esc(it.q.scriptVn) + '</div>' : '') + '</li>';
      }).join('') + '</ol></section>';
    }
    return h;
  }
  function initIn() {
    document.body.classList.add('ex-in');
    var kem = ['de', 'phieu', 'dapan'].indexOf(QS.get('kem')) !== -1 ? QS.get('kem') : 'de';
    var ten = { de: 'Đề thi', phieu: 'Phiếu trả lời', dapan: 'Đáp án' }[kem];
    var phut = parseInt(QS.get('phut'), 10);
    var bar = '<div class="ex-in-bar"><span>Bản in · ' + ten + '</span><button type="button" class="ex-btn-primary" id="exInBtn">In</button></div>';
    var dau = '<div class="ex-in-dau"><h1>' + esc(data.title) + ' · ' + esc(data.sections.map(function (s) { return s.name; }).join(' + ')) + '</h1>' +
      (kem === 'dapan' ? '<p>' + ten + ' — dành cho thầy cô</p>'
        : '<div class="ex-in-ttin"><span>Họ và tên: <i></i></span><span>Lớp: <i></i></span><span>Điểm: <i></i></span></div>' +
          '<p>' + allQuestions.length + ' câu' + (phut > 0 ? ' · ' + phut + ' phút' : '') + (kem === 'phieu' ? ' · Khoanh tròn hoặc tô đáp án em chọn, câu viết thì viết vào dòng kẻ.' : '') + '</p>') + '</div>';
    if (kem === 'de') {
      render();
      $('#exMain').insertAdjacentHTML('afterbegin', bar + dau);
      // ban in: tai het hinh ngay (anh "lazy" o cuoi trang chua tai thi trang in bi thieu hinh)
      $all('#exMain img').forEach(function (im) { im.loading = 'eager'; });
    }
    else $('#exMain').innerHTML = bar + dau + (kem === 'phieu' ? phieuHtml() : dapAnHtml());
    $('#exSide').innerHTML = '';
    document.title = ten + ' — ' + data.title;
    $('#exInBtn').addEventListener('click', function () { window.print(); });
    $('#exBack').addEventListener('click', function () { if (history.length > 1) history.back(); else window.close(); });
    $('#exPy').addEventListener('change', function () { document.body.classList.toggle('py-off', !this.checked); });
  }
})();
