/* ============================================================
   Hai nut noi o goc phai moi trang (tru phong thi HSK):
   1) Tro ly AI "Tieu Han" — hoi dap tieng Trung (mac dinh khong gioi han so cau, co chong spam)
   2) Tin nhan — tim hoc sinh, xem ai dang truc tuyen, nhan tin, loi moi, chan
   Server gan file nay vao moi trang HTML (xem sendVersionedHtml trong server.js).
   ============================================================ */
(function () {
  'use strict';
  if (window.__hwLoaded) return;
  window.__hwLoaded = true;

  // ---------- Tien ich ----------
  function $(sel, root) { return (root || document).querySelector(sel); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function auth() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a : null; } catch (e) { return null; }
  }
  function ssGet(k, d) { try { var v = sessionStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
  function ssSet(k, v) { try { sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  function headers(json) {
    var h = {};
    if (json) h['Content-Type'] = 'application/json';
    var a = auth();
    if (a) h.Authorization = 'Bearer ' + a.token;
    return h;
  }
  function getJSON(url) {
    return fetch(url, { headers: headers(false) }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) { var e = new Error(j.error || 'HTTP ' + r.status); e.status = r.status; throw e; }
        return j;
      });
    });
  }
  function postJSON(url, body) {
    return fetch(url, { method: 'POST', headers: headers(true), body: JSON.stringify(body || {}) }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) { var e = new Error(j.error || 'HTTP ' + r.status); e.status = r.status; throw e; }
        return j;
      });
    });
  }
  function initial(name) {
    var parts = String(name || '').trim().split(/\s+/);
    return (parts[parts.length - 1] || '?').charAt(0).toUpperCase();
  }
  var AVATAR_COLORS = ['#c8372d', '#2f3c7e', '#1f9254', '#b7791f', '#7c3aed', '#0d9488', '#db2777', '#4f46e5'];
  function avatarHtml(user, size) {
    var n = 0;
    String(user.id || user.name || '').split('').forEach(function (ch) { n = (n * 31 + ch.charCodeAt(0)) % 9973; });
    return '<span class="hw-avatar' + (size ? ' ' + size : '') + (user.online ? ' is-online' : '') + '" style="background:' +
      AVATAR_COLORS[n % AVATAR_COLORS.length] + '" aria-hidden="true">' + esc(initial(user.name)) + '</span>';
  }
  function timeLabel(ms) {
    var d = new Date(ms), now = new Date();
    var pad = function (x) { return (x < 10 ? '0' : '') + x; };
    if (d.toDateString() === now.toDateString()) return pad(d.getHours()) + ':' + pad(d.getMinutes());
    return pad(d.getDate()) + '/' + pad(d.getMonth() + 1);
  }
  // Markdown rat nho cho cau tra loi AI: **dam**, gach dau dong, xuong dong. Luon escape truoc.
  function richText(text) {
    var lines = esc(text).split('\n');
    var html = '', inList = false;
    lines.forEach(function (line) {
      var m = line.match(/^\s*(?:[-•*]|\d+\.)\s+(.*)$/);
      if (m) {
        if (!inList) { html += '<ul>'; inList = true; }
        html += '<li>' + inlineMd(m[1]) + '</li>';
      } else {
        if (inList) { html += '</ul>'; inList = false; }
        html += line.trim() ? inlineMd(line) + '<br>' : '<br>';
      }
    });
    if (inList) html += '</ul>';
    return html.replace(/(<br>)+$/, '');
  }
  function inlineMd(s) {
    return s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/([㐀-鿿　-〿＀-￯]+)/g, '<span class="zh">$1</span>');
  }
  function openLogin() {
    var btn = document.getElementById('authBannerLogin') || document.getElementById('sidebarUserBtn');
    if (btn) { closePanels(); btn.click(); return; }
    location.href = '/#dang-nhap';
  }

  // ---------- Icon (tu ve, khong dung anh ngoai) ----------
  var I = {
    lantern: function (idp) {
      return '<svg viewBox="0 0 64 64" aria-hidden="true">' +
        '<rect x="27" y="3" width="10" height="6" rx="2" fill="#b7791f"/>' +
        '<ellipse cx="32" cy="33" rx="22" ry="21" fill="#d9533a"/>' +
        '<ellipse cx="25" cy="22" rx="9" ry="6" fill="#ef7a5f" opacity=".55"/>' +
        '<path d="M32 13v40M21 15c-5 10-5 26 0 36M43 15c5 10 5 26 0 36" stroke="#f6c979" stroke-opacity=".5" stroke-width="1.4" fill="none"/>' +
        '<rect x="17" y="10" width="30" height="5" rx="2.5" fill="#f2bf6b"/>' +
        '<rect x="17" y="51" width="30" height="5" rx="2.5" fill="#f2bf6b"/>' +
        '<ellipse cx="24.5" cy="32" rx="3.2" ry="3.8" fill="#1f1a17"/><circle cx="25.6" cy="30.6" r="1.1" fill="#fff"/>' +
        '<ellipse cx="39.5" cy="32" rx="3.2" ry="3.8" fill="#1f1a17"/><circle cx="40.6" cy="30.6" r="1.1" fill="#fff"/>' +
        '<ellipse cx="19.5" cy="38.5" rx="3.2" ry="2" fill="#f7a08b"/><ellipse cx="44.5" cy="38.5" rx="3.2" ry="2" fill="#f7a08b"/>' +
        '<path d="M28 38.5q4 4 8 0" stroke="#1f1a17" stroke-width="2" stroke-linecap="round" fill="none"/>' +
        '<path d="M32 56v4" stroke="#b7791f" stroke-width="2"/><path d="M28.5 59.5h7l-1.2 4.5h-4.6z" fill="#f2bf6b"/>' +
        '</svg>';
    },
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.2 3.6c-.5.4-1.3 0-1.3-.6V16A2.5 2.5 0 0 1 4 13.5z" fill="currentColor"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    x: '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 2.5l7 7M9.5 2.5l-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    expand: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
    reset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v5h5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
    mic: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>',
    send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12 20 4l-4 16-4.5-6.5z" fill="currentColor"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
    more: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="19" r="2" fill="currentColor"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5c3-1.2 6.5-1.2 10 1 3.5-2.2 7-2.2 10-1v14c-3-1.2-6.5-1.2-10 1-3.5-2.2-7-2.2-10-1zM12 6v14" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    hanzi: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 9h8M12 6v12M8 14c2 0 3 1 4 4M16 14c-2 0-3 1-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/></svg>',
    talk: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-3 3v-3H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M19 9h0a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3-3h-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    emptyChat: '<svg viewBox="0 0 150 120" aria-hidden="true"><ellipse cx="75" cy="108" rx="52" ry="7" fill="#f0e6d6"/>' +
      '<rect x="18" y="22" width="78" height="54" rx="16" fill="#fdefec"/><path d="M34 76l-6 16 20-16z" fill="#fdefec"/>' +
      '<rect x="32" y="38" width="46" height="6" rx="3" fill="#e8b8aa"/><rect x="32" y="52" width="30" height="6" rx="3" fill="#e8b8aa"/>' +
      '<rect x="62" y="44" width="70" height="46" rx="14" fill="#fff6e5" stroke="#f2bf6b" stroke-width="2"/><path d="M116 90l6 13-17-13z" fill="#fff6e5" stroke="#f2bf6b" stroke-width="2" stroke-linejoin="round"/>' +
      '<circle cx="84" cy="67" r="4" fill="#c8372d"/><circle cx="97" cy="67" r="4" fill="#c8372d" opacity=".7"/><circle cx="110" cy="67" r="4" fill="#c8372d" opacity=".4"/></svg>'
  };

  // ---------- Dung khung ----------
  var root = document.createElement('div');
  root.className = 'hw-root';
  root.innerHTML =
    '<div class="hw-fab-stack">' +
      '<a class="hw-star" id="hwStar" href="/#dang-nhap" title="Đăng nhập để tích ngôi sao chăm chỉ">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z"/></svg>' +
        '<span class="hw-star-num" id="hwStarNum">Tích sao</span>' +
        '<span class="hw-star-bar" id="hwStarBar" hidden><i id="hwStarFill"></i></span>' +
      '</a>' +
      '<div class="hw-mascot-wrap" id="hwMascotWrap">' +
        '<button type="button" class="hw-mascot" id="hwAiBtn" aria-label="Mở Trợ lý AI" aria-expanded="false" aria-controls="hwAiPanel">' + I.lantern() + '</button>' +
        '<button type="button" class="hw-mascot-hide" id="hwAiHide" aria-label="Ẩn Trợ lý AI">' + I.x + '</button>' +
      '</div>' +
      '<button type="button" class="hw-chat-fab" id="hwChatBtn" aria-label="Mở Tin nhắn" aria-expanded="false" aria-controls="hwChatPanel">' +
        I.chat + '<span class="hw-badge" id="hwChatBadge" hidden>0</span></button>' +
    '</div>' +

    '<section class="hw-panel" id="hwAiPanel" role="dialog" aria-labelledby="hwAiTitle" hidden>' +
      '<header class="hw-head">' +
        '<span class="hw-head-avatar">' + I.lantern() + '</span>' +
        '<div class="hw-head-text"><p class="hw-head-title" id="hwAiTitle">Trợ lý AI</p><p class="hw-head-sub" id="hwAiQuota">Đang kiểm tra…</p></div>' +
        '<button type="button" class="hw-icon-btn" id="hwAiReset" aria-label="Cuộc trò chuyện mới" title="Cuộc trò chuyện mới">' + I.reset + '</button>' +
        '<button type="button" class="hw-icon-btn hw-expand" id="hwAiExpand" aria-label="Phóng to khung chat" title="Phóng to">' + I.expand + '</button>' +
        '<button type="button" class="hw-icon-btn" data-hw-close aria-label="Đóng">' + I.close + '</button>' +
      '</header>' +
      '<div class="hw-body" id="hwAiBody" aria-live="polite"></div>' +
      '<form class="hw-foot hw-ai-foot" id="hwAiForm">' +
        '<button type="button" class="hw-round" id="hwAiMic" aria-label="Nói để nhập câu hỏi" title="Nói để nhập">' + I.mic + '</button>' +
        '<div class="hw-compose">' +
          '<textarea class="hw-textarea" id="hwAiInput" rows="1" maxlength="2000" autocomplete="off" spellcheck="false" placeholder="Gõ câu hỏi của bạn…" aria-label="Câu hỏi cho trợ lý AI" aria-describedby="hwAiHint"></textarea>' +
          '<span class="hw-count" id="hwAiCount" hidden></span>' +
        '</div>' +
        '<button type="submit" class="hw-round is-send" id="hwAiSend" aria-label="Gửi câu hỏi" title="Gửi" disabled>' + I.send + '</button>' +
        '<p class="hw-hint" id="hwAiHint">Enter để gửi · Shift + Enter để xuống dòng</p>' +
      '</form>' +
    '</section>' +

    '<section class="hw-panel" id="hwChatPanel" role="dialog" aria-labelledby="hwChatTitle" hidden></section>' +
    '<div class="hw-toast" id="hwToast" role="status" aria-live="polite" hidden></div>';
  document.body.appendChild(root);

  var aiBtn = $('#hwAiBtn', root), chatBtn = $('#hwChatBtn', root);
  var aiPanel = $('#hwAiPanel', root), chatPanel = $('#hwChatPanel', root);

  function closePanels() {
    [aiPanel, chatPanel].forEach(function (p) { p.hidden = true; });
    aiBtn.setAttribute('aria-expanded', 'false');
    chatBtn.setAttribute('aria-expanded', 'false');
    stopChatPolling();
  }
  root.addEventListener('click', function (e) {
    if (e.target.closest('[data-hw-close]')) closePanels();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && (!aiPanel.hidden || !chatPanel.hidden)) closePanels();
  });

  if (ssGet('hw_ai_hidden', false)) $('#hwMascotWrap', root).hidden = true;
  $('#hwAiHide', root).addEventListener('click', function () {
    $('#hwMascotWrap', root).hidden = true;
    if (!aiPanel.hidden) closePanels();
    ssSet('hw_ai_hidden', true);
  });

  // ============================================================
  // 1) TRO LY AI
  // ============================================================
  var aiMsgs = ssGet('hw_ai_msgs', []);
  var aiBusy = false;
  var aiQuota = null;
  var aiBody = $('#hwAiBody', root), aiInput = $('#hwAiInput', root), aiSend = $('#hwAiSend', root);
  var SUGGESTIONS = ['Dịch: "Vì trời mưa nên tôi không đi"', '你好 và 您好 khác nhau thế nào?', 'Giải thích cách dùng 了 kèm ví dụ'];

  aiBtn.addEventListener('click', function () {
    if (!aiPanel.hidden) { closePanels(); return; }
    closePanels();
    aiPanel.hidden = false;
    aiBtn.setAttribute('aria-expanded', 'true');
    renderAi();
    loadQuota();
    setTimeout(function () { aiInput.focus(); }, 60);
  });
  $('#hwAiExpand', root).addEventListener('click', function () { aiPanel.classList.toggle('is-wide'); });
  $('#hwAiReset', root).addEventListener('click', function () {
    if (aiBusy) return;
    aiMsgs = []; ssSet('hw_ai_msgs', aiMsgs); renderAi(); aiInput.focus();
  });

  // Chi het luot khi may chu dang dat gioi han theo ngay (mac dinh la khong gioi han)
  function outOfQuota() {
    return !!(aiQuota && aiQuota.enabled && !aiQuota.unlimited && aiQuota.remaining <= 0);
  }

  function quotaText() {
    if (!aiQuota) return 'Đang kiểm tra…';
    if (!aiQuota.enabled) return 'Tạm thời chưa hoạt động';
    if (aiQuota.unlimited) return 'Đang trực tuyến · hỏi thoải mái';
    return 'Còn lại ' + aiQuota.remaining + '/' + aiQuota.limit + ' câu hôm nay';
  }
  function loadQuota() {
    getJSON('/api/ai/quota').then(function (q) { aiQuota = q; $('#hwAiQuota', root).textContent = quotaText(); renderAi(); })
      .catch(function () { $('#hwAiQuota', root).textContent = 'Không kết nối được'; });
  }

  function renderAi() {
    var html = '';
    if (aiQuota && !aiQuota.enabled) {
      html += '<p class="hw-note">Trợ lý AI đang được cài đặt và sẽ sớm hoạt động. Bạn quay lại sau nhé!</p>';
    } else if (aiQuota && !aiQuota.unlimited && !aiQuota.loggedIn) {
      html += '<p class="hw-note">Khách được hỏi ' + aiQuota.limit + ' câu mỗi ngày. <a href="#" data-hw-login>Đăng nhập</a> để được hỏi nhiều hơn.</p>';
    }
    if (!aiMsgs.length) {
      html += '<div class="hw-ai-hello">' +
        '<div class="hw-ai-hello-mascot">' + I.lantern() + '</div>' +
        '<h3>Xin chào, mình là Tiểu Hán</h3><p>Hỏi mình bất cứ điều gì về tiếng Trung nhé!</p>' +
        '<div class="hw-ai-can"><h4>MÌNH CÓ THỂ GIÚP BẠN</h4><ul>' +
          '<li>' + I.hanzi + 'Tra cứu từ vựng và chữ Hán</li>' +
          '<li>' + I.book + 'Giải thích ngữ pháp kèm ví dụ</li>' +
          '<li>' + I.talk + 'Dịch câu và luyện hội thoại tiếng Trung</li>' +
        '</ul></div>' +
        '<div class="hw-chips">' + SUGGESTIONS.map(function (s) {
          return '<button type="button" class="hw-chip" data-hw-suggest="' + esc(s) + '">' + esc(s) + '</button>';
        }).join('') + '</div></div>';
    } else {
      html += '<div class="hw-msgs">' + aiMsgs.map(function (m) {
        return '<div class="hw-msg ' + (m.role === 'user' ? 'is-me' : (m.error ? 'is-error' : 'is-them')) + '">' +
          (m.role === 'user' ? esc(m.content).replace(/\n/g, '<br>') : richText(m.content)) + '</div>';
      }).join('') + (aiBusy ? '' : '') + '</div>';
    }
    aiBody.innerHTML = html;
    aiBody.scrollTop = aiBody.scrollHeight;
    aiInput.placeholder = outOfQuota()
      ? 'Hôm nay bạn đã hết lượt hỏi, mai quay lại nhé'
      : 'Gõ câu hỏi của bạn…';
    syncAiInput();
  }

  // Hoc sinh luon go duoc chu. Nut Gui chi tat khi o trong hoac AI dang tra loi.
  function syncAiInput() {
    aiInput.style.height = 'auto';
    aiInput.style.height = Math.min(aiInput.scrollHeight, 132) + 'px';
    aiInput.classList.toggle('is-scroll', aiInput.scrollHeight > 132);
    var len = aiInput.value.length;
    var count = $('#hwAiCount', root);
    count.hidden = len < 1500;
    count.textContent = len + '/2000';
    aiSend.disabled = aiBusy || !aiInput.value.trim();
  }

  aiBody.addEventListener('click', function (e) {
    var chip = e.target.closest('[data-hw-suggest]');
    if (chip) { askAi(chip.getAttribute('data-hw-suggest')); return; }
    if (e.target.closest('[data-hw-login]')) { e.preventDefault(); openLogin(); }
  });
  aiInput.addEventListener('input', syncAiInput);
  aiInput.addEventListener('keydown', function (e) {
    // Enter = gui, Shift+Enter = xuong dong. Bo qua khi dang go bo go tieng Trung/tieng Viet
    // (isComposing / keyCode 229), vi Enter luc do la de chon chu.
    if (e.key !== 'Enter' || e.isComposing || e.keyCode === 229) return;
    e.preventDefault();
    if (e.shiftKey) {
      // tu chen dong moi tai con tro de chac chan chay tren moi trinh duyet/ban phim
      var start = aiInput.selectionStart, end = aiInput.selectionEnd;
      aiInput.value = aiInput.value.slice(0, start) + '\n' + aiInput.value.slice(end);
      aiInput.selectionStart = aiInput.selectionEnd = start + 1;
      syncAiInput();
      return;
    }
    if (!aiSend.disabled) askAi(aiInput.value.trim());
  });
  $('#hwAiForm', root).addEventListener('submit', function (e) {
    e.preventDefault();
    if (aiInput.value.trim()) askAi(aiInput.value.trim());
  });

  function askAi(text) {
    if (aiBusy || !text) return;
    if (aiQuota && (!aiQuota.enabled || outOfQuota())) {
      aiMsgs.push({ role: 'user', content: text });
      aiMsgs.push({
        role: 'assistant', error: true,
        content: !aiQuota.enabled
          ? 'Trợ lý AI đang được cài đặt nên chưa trả lời được. Câu hỏi của bạn vẫn còn trong khung chat, bạn quay lại hỏi sau nhé!'
          : (aiQuota.loggedIn ? 'Hôm nay bạn đã dùng hết lượt hỏi. Mai quay lại nhé!' : 'Bạn đã dùng hết lượt hỏi miễn phí hôm nay. Đăng nhập để được hỏi thêm.')
      });
      aiInput.value = '';
      ssSet('hw_ai_msgs', aiMsgs.slice(-30));
      renderAi();
      aiInput.focus();
      return;
    }
    aiBusy = true;
    aiInput.value = '';
    aiMsgs.push({ role: 'user', content: text });
    renderAi();
    var box = aiBody.querySelector('.hw-msgs');
    var bubble = document.createElement('div');
    bubble.className = 'hw-msg is-them';
    bubble.innerHTML = '<span class="hw-typing" aria-label="Đang trả lời"><i></i><i></i><i></i></span>';
    box.appendChild(bubble);
    aiBody.scrollTop = aiBody.scrollHeight;

    var history = aiMsgs.filter(function (m) { return !m.error; }).map(function (m) { return { role: m.role, content: m.content }; });
    var answer = '';
    fetch('/api/ai/chat', { method: 'POST', headers: headers(true), body: JSON.stringify({ messages: history }) })
      .then(function (r) {
        if (!r.ok) {
          return r.json().catch(function () { return {}; }).then(function (j) {
            if (typeof j.remaining === 'number' && aiQuota) aiQuota.remaining = j.remaining;
            throw new Error(j.error || 'Trợ lý AI đang bận, bạn thử lại sau nhé.');
          });
        }
        var rem = r.headers.get('X-AI-Remaining');
        if (rem != null && aiQuota) { aiQuota.remaining = Number(rem); $('#hwAiQuota', root).textContent = quotaText(); }
        if (!r.body || !r.body.getReader) {
          return r.text().then(function (t) { answer = t; bubble.innerHTML = richText(answer); });
        }
        var reader = r.body.getReader();
        var decoder = new TextDecoder();
        function pump() {
          return reader.read().then(function (res) {
            if (res.done) { answer += decoder.decode(); bubble.innerHTML = richText(answer); return; }
            answer += decoder.decode(res.value, { stream: true });
            bubble.innerHTML = richText(answer);
            aiBody.scrollTop = aiBody.scrollHeight;
            return pump();
          });
        }
        return pump();
      })
      .then(function () {
        aiMsgs.push({ role: 'assistant', content: answer || 'Mình chưa trả lời được, bạn hỏi lại nhé.' });
      })
      .catch(function (err) {
        if (answer) aiMsgs.push({ role: 'assistant', content: answer });
        else aiMsgs.push({ role: 'assistant', content: err.message, error: true });
      })
      .then(function () {
        aiBusy = false;
        // chi luu 30 tin gan nhat trong phien
        aiMsgs = aiMsgs.slice(-30);
        ssSet('hw_ai_msgs', aiMsgs);
        $('#hwAiQuota', root).textContent = quotaText();
        renderAi();
        aiInput.focus();
      });
  }

  // Noi de nhap (tieng Viet) — chi hien khi trinh duyet ho tro
  (function setupMic() {
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    var mic = $('#hwAiMic', root);
    if (!SR) { mic.hidden = true; return; }
    var rec = null;
    mic.addEventListener('click', function () {
      if (rec) { rec.stop(); return; }
      rec = new SR();
      rec.lang = 'vi-VN';
      rec.interimResults = true;
      rec.onresult = function (e) {
        var t = '';
        for (var i = 0; i < e.results.length; i++) t += e.results[i][0].transcript;
        aiInput.value = t;
        syncAiInput();
      };
      rec.onend = function () { rec = null; mic.classList.remove('is-listening'); aiInput.focus(); };
      rec.onerror = rec.onend;
      mic.classList.add('is-listening');
      try { rec.start(); } catch (err) { rec = null; mic.classList.remove('is-listening'); }
    });
  })();

  // ============================================================
  // 2) TIN NHAN
  // ============================================================
  var chat = { view: 'list', tab: 'all', q: '', peer: null, data: null, online: [], search: null, thread: null, menu: false };
  var listTimer = null, threadTimer = null, searchTimer = null;

  chatBtn.addEventListener('click', function () {
    if (!chatPanel.hidden) { closePanels(); return; }
    closePanels();
    chatPanel.hidden = false;
    chatBtn.setAttribute('aria-expanded', 'true');
    chat.view = 'list';
    renderChat();
    refreshChat();
    startListPolling();
  });

  function stopChatPolling() { clearInterval(listTimer); clearInterval(threadTimer); listTimer = threadTimer = null; }
  function startListPolling() { stopChatPolling(); listTimer = setInterval(function () { if (chat.view === 'list') refreshChat(); }, 10000); }
  function startThreadPolling() { stopChatPolling(); threadTimer = setInterval(loadThread, 4000); }

  function refreshChat() {
    if (!auth()) { renderChat(); return; }
    Promise.all([getJSON('/api/chat/conversations'), getJSON('/api/chat/online')])
      .then(function (res) {
        chat.data = res[0];
        chat.online = res[1].users || [];
        setBadge(res[0]);
        if (chat.view === 'list') renderChat();
      })
      .catch(function (err) {
        if (err.status === 401) { chat.data = null; }
        if (chat.view === 'list') renderChat(err.status === 401 ? null : 'Không tải được tin nhắn. Kiểm tra kết nối rồi thử lại.');
      });
  }

  function requestsOf(data) { return (data && data.conversations || []).filter(function (c) { return c.status === 'request'; }); }
  function setBadge(data) {
    var n = (data.unreadTotal || 0);
    var badge = $('#hwChatBadge', root);
    badge.hidden = n <= 0;
    badge.textContent = n > 99 ? '99+' : String(n);
    chatBtn.setAttribute('aria-label', n > 0 ? 'Mở Tin nhắn, ' + n + ' tin chưa đọc' : 'Mở Tin nhắn');
  }

  function chatHead(title, extra) {
    return '<header class="hw-head">' + (extra || '') +
      '<div class="hw-head-text"><p class="hw-head-title" id="hwChatTitle">' + title + '</p></div>' +
      '<button type="button" class="hw-icon-btn" data-hw-refresh aria-label="Làm mới" title="Làm mới">' + I.reset + '</button>' +
      '<button type="button" class="hw-icon-btn" data-hw-close aria-label="Đóng">' + I.close + '</button></header>';
  }

  function renderChat(errorMsg) {
    if (chat.view === 'thread') { renderThread(); return; }
    var a = auth();
    if (!a) {
      chatPanel.innerHTML = chatHead('Tin nhắn') +
        '<div class="hw-body"><div class="hw-empty">' + I.emptyChat +
        '<p><b>Đăng nhập để nhắn tin</b></p><p>Kết bạn học cùng, xem ai đang trực tuyến và trò chuyện bằng tiếng Trung.</p>' +
        '<button type="button" class="hw-cta" data-hw-login>Đăng nhập</button></div></div>';
      return;
    }
    var keepFocus = document.activeElement && document.activeElement.id === 'hwChatSearch';
    var caret = keepFocus ? document.activeElement.selectionStart : 0;
    var data = chat.data || { conversations: [], blocked: [] };
    var reqs = requestsOf(data);
    var unreadCount = data.conversations.filter(function (c) { return c.status !== 'request' && c.unread > 0; }).length;
    var html = chatHead('Tin nhắn') + '<div class="hw-body">' +
      '<label class="hw-search">' + I.search +
        '<input id="hwChatSearch" type="search" placeholder="Tìm người dùng" aria-label="Tìm người dùng theo tên" value="' + esc(chat.q) + '" autocomplete="off" /></label>';

    if (errorMsg) html += '<p class="hw-note" style="margin-top:12px">' + esc(errorMsg) + '</p>';

    if (chat.q.trim().length >= 2) {
      html += '<p class="hw-section-label">Kết quả tìm kiếm</p>';
      if (!chat.search) html += '<p class="hw-note">Đang tìm…</p>';
      else if (!chat.search.length) html += '<p class="hw-note">Không tìm thấy ai tên như vậy.</p>';
      else html += '<ul class="hw-list">' + chat.search.map(function (u) {
        return '<li><button type="button" class="hw-row" data-hw-open="' + esc(u.id) + '" data-hw-name="' + esc(u.name) + '">' + avatarHtml(u) +
          '<span class="hw-row-main"><span class="hw-row-name">' + esc(u.name) + '</span><span class="hw-row-last">' +
          (u.online ? 'Đang trực tuyến' : 'Ngoại tuyến') + (u.level ? ' · ' + esc(String(u.level).toUpperCase()) : '') + '</span></span></button></li>';
      }).join('') + '</ul>';
    } else {
      html += '<p class="hw-section-label">Đang trực tuyến' + (chat.online.length ? ' · ' + chat.online.length : '') + '</p>';
      html += chat.online.length
        ? '<div class="hw-online">' + chat.online.map(function (u) {
            return '<button type="button" class="hw-online-item" data-hw-open="' + esc(u.id) + '" data-hw-name="' + esc(u.name) + '" title="' + esc(u.name) + '">' +
              avatarHtml(u, 'lg') + '<span>' + esc(u.name) + '</span></button>';
          }).join('') + '</div>'
        : '<p class="hw-note">Chưa có học sinh nào khác đang trực tuyến.</p>';

      var tabs = [['all', 'Tất cả', 0], ['unread', 'Chưa đọc', unreadCount], ['requests', 'Lời mời', reqs.length], ['blocked', 'Đã chặn', 0]];
      html += '<div class="hw-tabs" role="tablist">' + tabs.map(function (t) {
        return '<button type="button" role="tab" aria-selected="' + (chat.tab === t[0]) + '" class="hw-tab' + (chat.tab === t[0] ? ' is-active' : '') + '" data-hw-tab="' + t[0] + '">' +
          t[1] + (t[2] ? '<b>' + t[2] + '</b>' : '') + '</button>';
      }).join('') + '</div>';
      html += listForTab(data, reqs);
    }
    chatPanel.innerHTML = html + '</div>';
    if (keepFocus) {
      var inp = $('#hwChatSearch', chatPanel);
      inp.focus();
      try { inp.setSelectionRange(caret, caret); } catch (e) { /* ignore */ }
    }
  }

  function listForTab(data, reqs) {
    var rows;
    if (chat.tab === 'blocked') {
      if (!data.blocked.length) return emptyState('Bạn chưa chặn ai.');
      return '<ul class="hw-list">' + data.blocked.map(function (u) {
        return '<li class="hw-row" style="cursor:default">' + avatarHtml(u) + '<span class="hw-row-main"><span class="hw-row-name">' + esc(u.name) + '</span></span>' +
          '<button type="button" class="hw-mini-btn" data-hw-action="unblock" data-hw-peer="' + esc(u.id) + '">Bỏ chặn</button></li>';
      }).join('') + '</ul>';
    }
    if (chat.tab === 'requests') rows = reqs;
    else if (chat.tab === 'unread') rows = data.conversations.filter(function (c) { return c.status !== 'request' && c.unread > 0; });
    else rows = data.conversations.filter(function (c) { return c.status !== 'request'; });
    if (!rows.length) {
      return emptyState(chat.tab === 'requests' ? 'Không có lời mời nào.' : chat.tab === 'unread' ? 'Bạn đã đọc hết tin nhắn.' : 'Chưa có cuộc trò chuyện nào');
    }
    return '<ul class="hw-list">' + rows.map(function (c) {
      var side = '<span class="hw-row-side">' + timeLabel(c.last.at) +
        (c.unread ? '<span class="hw-badge">' + c.unread + '</span>' : (c.status === 'pending' ? '<span class="hw-pill">Chờ chấp nhận</span>' : '')) + '</span>';
      return '<li><button type="button" class="hw-row' + (c.unread ? ' is-unread' : '') + '" data-hw-open="' + esc(c.peer.id) + '" data-hw-name="' + esc(c.peer.name) + '">' +
        avatarHtml(c.peer) + '<span class="hw-row-main"><span class="hw-row-name">' + esc(c.peer.name) + '</span>' +
        '<span class="hw-row-last">' + (c.last.mine ? 'Bạn: ' : '') + esc(c.last.body) + '</span></span>' + side + '</button></li>';
    }).join('') + '</ul>';
  }

  function emptyState(text) {
    return '<div class="hw-empty">' + I.emptyChat + '<p>' + esc(text) + '</p>' +
      (chat.tab === 'all' ? '<p style="font-size:.85rem">Tìm tên bạn học ở ô phía trên để bắt đầu trò chuyện.</p>' : '') + '</div>';
  }

  chatPanel.addEventListener('input', function (e) {
    if (e.target.id !== 'hwChatSearch') return;
    chat.q = e.target.value;
    clearTimeout(searchTimer);
    if (chat.q.trim().length < 2) { chat.search = null; renderChat(); return; }
    chat.search = null;
    renderChat();
    var q = chat.q.trim();
    searchTimer = setTimeout(function () {
      getJSON('/api/chat/users?q=' + encodeURIComponent(q)).then(function (r) {
        if (chat.q.trim() !== q) return;
        chat.search = r.users || [];
        renderChat();
      }).catch(function () { chat.search = []; renderChat(); });
    }, 300);
  });

  chatPanel.addEventListener('click', function (e) {
    var t = e.target;
    if (t.closest('[data-hw-login]')) { e.preventDefault(); openLogin(); return; }
    if (t.closest('[data-hw-refresh]')) { if (chat.view === 'thread') loadThread(); else refreshChat(); return; }
    var tab = t.closest('[data-hw-tab]');
    if (tab) { chat.tab = tab.getAttribute('data-hw-tab'); renderChat(); return; }
    var open = t.closest('[data-hw-open]');
    if (open) { openThread({ id: open.getAttribute('data-hw-open'), name: open.getAttribute('data-hw-name') }); return; }
    if (t.closest('[data-hw-back]')) {
      chat.view = 'list'; chat.thread = null; chat.menu = false;
      renderChat(); refreshChat(); startListPolling();
      return;
    }
    if (t.closest('[data-hw-menu]')) { chat.menu = !chat.menu; renderThread(); return; }
    var act = t.closest('[data-hw-action]');
    if (act) { doAction(act.getAttribute('data-hw-action'), act.getAttribute('data-hw-peer') || (chat.peer && chat.peer.id)); }
  });

  function doAction(action, peerId) {
    if (!peerId) return;
    if (action === 'block' && !window.confirm('Chặn người này? Hai bạn sẽ không nhắn tin cho nhau được nữa.')) return;
    chat.menu = false;
    postJSON('/api/chat/action', { peer: peerId, action: action }).then(function () {
      if (chat.view === 'thread') {
        if (action === 'decline') { chat.view = 'list'; renderChat(); refreshChat(); startListPolling(); }
        else loadThread();
      } else {
        refreshChat();
      }
    }).catch(function (err) { window.alert(err.message); });
  }

  // ---------- Cuoc tro chuyen ----------
  function openThread(peer) {
    chat.view = 'thread';
    chat.peer = peer;
    chat.thread = null;
    chat.menu = false;
    renderThread();
    loadThread();
    startThreadPolling();
  }

  function loadThread() {
    if (chat.view !== 'thread' || !chat.peer) return;
    var peerId = chat.peer.id;
    getJSON('/api/chat/messages?with=' + encodeURIComponent(peerId)).then(function (r) {
      if (chat.view !== 'thread' || !chat.peer || chat.peer.id !== peerId) return;
      var changed = !chat.thread || JSON.stringify(chat.thread) !== JSON.stringify(r);
      chat.thread = r;
      chat.peer = r.peer;
      if (changed) renderThread();
    }).catch(function (err) {
      if (err.status === 401) { chat.view = 'list'; renderChat(); }
    });
  }

  function renderThread() {
    var p = chat.peer || {};
    var t = chat.thread;
    var input = $('#hwChatInput', chatPanel);
    var draft = input ? input.value : '';
    var hadFocus = input && document.activeElement === input;
    var body = chatPanel.querySelector('.hw-body');
    var nearBottom = !body || body.scrollHeight - body.scrollTop - body.clientHeight < 80;

    var status = t ? t.status : 'none';
    var html = '<header class="hw-head" style="position:relative">' +
      '<button type="button" class="hw-icon-btn" data-hw-back aria-label="Quay lại danh sách">' + I.back + '</button>' +
      avatarHtml(p, 'sm') +
      '<div class="hw-head-text"><p class="hw-head-title" id="hwChatTitle">' + esc(p.name || '') + '</p>' +
      '<p class="hw-head-sub">' + (p.online ? 'Đang trực tuyến' : 'Ngoại tuyến') + '</p></div>' +
      '<button type="button" class="hw-icon-btn" data-hw-menu aria-label="Tuỳ chọn" aria-expanded="' + chat.menu + '">' + I.more + '</button>' +
      '<button type="button" class="hw-icon-btn" data-hw-close aria-label="Đóng">' + I.close + '</button>' +
      (chat.menu ? '<div class="hw-menu" role="menu">' + (status === 'blocked'
        ? '<button type="button" role="menuitem" data-hw-action="unblock">Bỏ chặn</button>'
        : '<button type="button" role="menuitem" class="is-danger" data-hw-action="block">Chặn người này</button>') + '</div>' : '') +
      '</header><div class="hw-body">';

    if (!t) {
      html += '<p class="hw-note">Đang tải tin nhắn…</p>';
    } else {
      if (status === 'request') {
        html += '<div class="hw-banner"><b>' + esc(p.name) + '</b> muốn trò chuyện với bạn. Chỉ trả lời nếu bạn quen người này.' +
          '<div class="hw-banner-actions"><button type="button" class="hw-mini-btn is-primary" data-hw-action="accept">Chấp nhận</button>' +
          '<button type="button" class="hw-mini-btn" data-hw-action="decline">Từ chối</button>' +
          '<button type="button" class="hw-mini-btn" data-hw-action="block">Chặn</button></div></div>';
      } else if (status === 'pending') {
        html += '<p class="hw-note">Đã gửi lời mời. Khi ' + esc(p.name) + ' chấp nhận, hai bạn sẽ nhắn tin tiếp được.</p>';
      } else if (status === 'blocked') {
        html += '<p class="hw-note">Bạn đã chặn người này. Mở menu ⋮ để bỏ chặn.</p>';
      } else if (status === 'none') {
        html += '<p class="hw-note">Gửi lời chào đầu tiên. ' + esc(p.name) + ' cần chấp nhận thì hai bạn mới nhắn tin tiếp được. Hãy lịch sự và không chia sẻ thông tin cá nhân nhé.</p>';
      }
      if (t.messages.length) {
        html += '<div class="hw-msgs">' + t.messages.map(function (m) {
          return '<div class="hw-msg ' + (m.mine ? 'is-me' : 'is-them') + '">' + esc(m.body) +
            '<span class="hw-msg-time">' + timeLabel(m.at) + (m.mine && m.read ? ' · Đã xem' : '') + '</span></div>';
        }).join('') + '</div>';
      }
    }
    html += '</div>';

    var canSend = t && status !== 'blocked' && status !== 'pending' && !t.blockedMe;
    var placeholder = !t ? 'Đang tải…' : status === 'pending' ? 'Đợi bạn ấy chấp nhận lời mời' : status === 'blocked' ? 'Bạn đã chặn người này' : t.blockedMe ? 'Không thể nhắn cho người này' : 'Nhập tin nhắn…';
    html += '<form class="hw-foot" id="hwChatForm"><input class="hw-input" id="hwChatInput" type="text" maxlength="1000" autocomplete="off" aria-label="Tin nhắn" placeholder="' + placeholder + '"' + (canSend ? '' : ' disabled') + ' />' +
      '<button type="submit" class="hw-round is-send" aria-label="Gửi"' + (canSend ? '' : ' disabled') + '>' + I.send + '</button></form>';

    chatPanel.innerHTML = html;
    var nb = chatPanel.querySelector('.hw-body');
    if (nearBottom) nb.scrollTop = nb.scrollHeight;
    var ni = $('#hwChatInput', chatPanel);
    if (canSend) { ni.value = draft; if (hadFocus || !draft) ni.focus(); }
    $('#hwChatForm', chatPanel).addEventListener('submit', sendChat);
  }

  function sendChat(e) {
    e.preventDefault();
    var input = $('#hwChatInput', chatPanel);
    var text = input.value.trim();
    if (!text || !chat.peer) return;
    input.value = '';
    input.disabled = true;
    postJSON('/api/chat/send', { to: chat.peer.id, body: text })
      .then(function () { loadThread(); })
      .catch(function (err) {
        input.disabled = false;
        input.value = text;
        window.alert(err.message);
      });
  }

  // ============================================================
  // 3) NGOI SAO CHAM CHI — +5 sao lan dau mo web moi ngay, +5 sao moi 5 phut
  //    hoc that. May chu giu so sao; o day chi bao "dang hoc" moi 30 giay khi
  //    tab dang mo va hoc sinh co thao tac (2 phut khong dong gi = dang nghi).
  // ============================================================
  var starEl = $('#hwStar', root), starNum = $('#hwStarNum', root), starBar = $('#hwStarBar', root), starFill = $('#hwStarFill', root);
  var toastEl = $('#hwToast', root), toastTimer = null;
  var star = { total: 0, secToNext: 300, blockSec: 300, perBlock: 5, capped: false, ready: false };
  var STAR_TICK_SEC = 30, STAR_IDLE_MS = 120000;
  var lastActive = Date.now(), starNudged = false;

  function touchActive() { lastActive = Date.now(); }
  ['pointerdown', 'pointermove', 'keydown', 'touchstart', 'wheel', 'scroll'].forEach(function (ev) {
    document.addEventListener(ev, touchActive, { passive: true, capture: true });
  });
  // Dang nghe audio (hoi thoai, tu vung) cung la dang hoc
  document.addEventListener('play', touchActive, true);
  document.addEventListener('timeupdate', touchActive, true);
  function starActive() { return !document.hidden && Date.now() - lastActive < STAR_IDLE_MS; }

  function showToast(html, cls) {
    clearTimeout(toastTimer);
    toastEl.className = 'hw-toast' + (cls ? ' ' + cls : '');
    toastEl.innerHTML = html;
    toastEl.hidden = false;
    // ep chay lai animation
    void toastEl.offsetWidth;
    toastEl.classList.add('is-in');
    toastTimer = setTimeout(function () { toastEl.hidden = true; toastEl.classList.remove('is-in'); }, 4500);
  }

  function fmtSec(s) {
    var m = Math.floor(s / 60), r = s % 60;
    return m + ':' + (r < 10 ? '0' : '') + r;
  }
  function renderStar() {
    if (!auth()) {
      starEl.href = '/#dang-nhap';
      starEl.title = 'Đăng nhập để tích ngôi sao chăm chỉ';
      starNum.textContent = 'Tích sao';
      starBar.hidden = true;
      starEl.classList.remove('is-on');
    } else {
      starEl.href = '/#xep-hang-sao';
      starEl.classList.add('is-on');
      starNum.textContent = star.ready ? star.total.toLocaleString('vi-VN') : '…';
      starBar.hidden = !star.ready;
      var pct = star.capped ? 100 : Math.max(0, Math.min(100, Math.round((1 - star.secToNext / star.blockSec) * 100)));
      starFill.style.width = pct + '%';
      starEl.title = !star.ready ? 'Đang tải số sao…'
        : star.capped ? 'Hôm nay bạn đã đạt mức sao tối đa từ giờ học, mai học tiếp nhé!'
        : 'Còn ' + fmtSec(star.secToNext) + ' học nữa là được +' + star.perBlock + ' sao';
    }
    try {
      window.dispatchEvent(new CustomEvent('hw:stars', { detail: { loggedIn: !!auth(), ready: star.ready, total: star.total, secToNext: star.secToNext, blockSec: star.blockSec, perBlock: star.perBlock, capped: star.capped } }));
    } catch (e) { /* ignore */ }
  }
  function applyStar(d, kind) {
    star.total = d.total || 0;
    star.secToNext = typeof d.secToNext === 'number' ? d.secToNext : star.blockSec;
    star.blockSec = d.blockSec || 300;
    star.perBlock = d.perBlock || 5;
    star.capped = !!d.capped;
    star.ready = true;
    if (d.awarded > 0) {
      starNudged = false;
      starEl.classList.remove('is-pop');
      void starEl.offsetWidth;
      starEl.classList.add('is-pop');
      showToast(kind === 'visit'
        ? '<b>+' + d.awarded + ' ⭐</b> Chào mừng bạn quay lại học hôm nay!'
        : '<b>+' + d.awarded + ' ⭐</b> Tuyệt vời! Bạn vừa học chăm chỉ thêm 5 phút.', 'is-gold');
    }
    renderStar();
  }
  function starVisit() {
    if (!auth()) { star.ready = false; renderStar(); return; }
    renderStar();
    postJSON('/api/stars/visit', {}).then(function (d) { applyStar(d, 'visit'); }).catch(function () { /* ignore */ });
  }

  // +1 sao ngay khi tra loi dung 1 cau. Cac bai tap (trong app va tren trang
  // bai hoc) goi window.hwStarAnswer(khoa-cau); gom cac cau dung trong 0,4 giay
  // roi gui 1 lan. May chu chi thuong cau nao dung LAN DAU (lam lai khong tinh).
  var answerQueue = [], answerTimer = null;
  window.hwStarAnswer = function (key) {
    if (!auth() || typeof key !== 'string' || !key) return;
    answerQueue.push(key.slice(0, 160));
    clearTimeout(answerTimer);
    answerTimer = setTimeout(flushAnswers, 400);
  };
  function flushAnswers() {
    if (!answerQueue.length) return;
    var keys = answerQueue.splice(0, 50);
    postJSON('/api/stars/correct', { keys: keys }).then(function (d) {
      var n = d.answerAwarded || 0;
      applyStar(d, 'answer');
      if (n > 0) {
        starEl.classList.remove('is-pop');
        void starEl.offsetWidth;
        starEl.classList.add('is-pop');
        showToast('<b>+' + n + ' ⭐</b> ' + (n === 1 ? 'Trả lời đúng rồi!' : 'Trả lời đúng ' + n + ' câu!'), 'is-gold');
      }
      if (answerQueue.length) flushAnswers();
    }).catch(function () { /* mat mang: bo qua, lan tra loi sau van tinh */ });
  }
  function starTick() {
    if (!auth() || !star.ready || !starActive() || star.capped) return;
    postJSON('/api/stars/tick', { seconds: STAR_TICK_SEC }).then(function (d) { applyStar(d, 'tick'); }).catch(function () { /* ignore */ });
  }
  // Dem nguoc tai cho giua 2 lan bao de thanh sao chay muot, va nhac truoc khi dat moc
  var starToken = (auth() || {}).token || '';
  setInterval(function () {
    // Vua dang nhap / dang xuat ngay trong tab nay (khong co su kien storage)
    var tok = (auth() || {}).token || '';
    if (tok !== starToken) { starToken = tok; star.ready = false; starVisit(); }
    if (!auth() || !star.ready || !starActive() || star.capped) return;
    if (star.secToNext > 1) star.secToNext--;
    if (star.secToNext <= 60 && !starNudged) {
      starNudged = true;
      showToast('💪 Cố lên! Còn 1 phút nữa là bạn nhận thêm <b>+' + star.perBlock + ' ⭐</b>');
    }
    renderStar();
  }, 1000);
  setInterval(starTick, STAR_TICK_SEC * 1000);
  starVisit();
  document.addEventListener('visibilitychange', function () { if (!document.hidden) touchActive(); });

  // ---------- Chay nen: trang thai truc tuyen + so tin chua doc ----------
  function heartbeat() {
    if (!auth() || document.hidden) return;
    postJSON('/api/presence', {}).catch(function () { /* ignore */ });
  }
  function pollBadge() {
    if (!auth() || document.hidden || !chatPanel.hidden) return;
    getJSON('/api/chat/conversations').then(function (d) { chat.data = d; setBadge(d); }).catch(function () { /* ignore */ });
  }
  heartbeat();
  pollBadge();
  setInterval(heartbeat, 60000);
  setInterval(pollBadge, 30000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) { heartbeat(); pollBadge(); } });
  // dang nhap/dang xuat o tab khac
  window.addEventListener('storage', function (e) {
    if (e.key !== 'hyv_auth') return;
    aiQuota = null;
    if (!chatPanel.hidden) { chat.view = 'list'; refreshChat(); }
    if (!aiPanel.hidden) loadQuota();
    heartbeat(); pollBadge();
    if (!auth()) $('#hwChatBadge', root).hidden = true;
    starVisit();
  });
})();
