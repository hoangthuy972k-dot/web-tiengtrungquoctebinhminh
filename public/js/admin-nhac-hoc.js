/* Trang Bao cao — tab "Can nhac hoc": hoc sinh da >= 3 ngay chua vao hoc,
   chia theo lop. Moi em co san 1 tin nhan Zalo (giong co giao, co ten em,
   bai em dang hoc, link hoc tiep) va nut "Sao chep". May chu KHONG gui gi —
   thay/co tu dan vao Zalo.
   Du lieu lay tu admin.js (window.__tr): /api/admin/report + /api/admin/classes. */
(function () {
  'use strict';

  var SITE_KEY = 'hyv_admin_site';   // dia chi web dung trong link (mac dinh = trang dang mo)
  var DAYS_KEY = 'hyv_admin_nhac_ngay';
  var DONE_KEY = 'hyv_admin_nhac_da'; // { userId: 'YYYY-MM-DD' } — da sao chep tin nhan ngay nao
  var DAY_MS = 86400000;

  var opt = { minDays: 3, cls: '', newbies: true };
  try { opt.minDays = parseInt(localStorage.getItem(DAYS_KEY), 10) || 3; } catch (e) { /* bo qua */ }

  function tr() { return window.__tr; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return tr().esc(s); }
  function readLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function writeLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function todayKey() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function site() {
    var s = '';
    try { s = localStorage.getItem(SITE_KEY) || ''; } catch (e) { /* bo qua */ }
    return (s || location.origin).replace(/\/+$/, '');
  }

  // ---------- Tinh toan cho tung hoc sinh ----------
  // Lan hoc gan nhat = moi nhat trong: lan mo web co hoc (lastActive), phan bai lam
  // gan nhat (lastLesson) va ngay hoc cuoi cung (studyDays).
  function lastStudyMs(s) {
    var t = 0;
    if (s.lastActive) t = Math.max(t, new Date(s.lastActive).getTime() || 0);
    if (s.lastLesson && s.lastLesson.ms) t = Math.max(t, Number(s.lastLesson.ms) || 0);
    var days = s.studyDays || [];
    if (days.length) {
      var d = days.slice().sort()[days.length - 1];
      t = Math.max(t, new Date(d + 'T12:00:00').getTime() || 0);
    }
    return t || null;
  }
  // Chuoi ngay hoc lien tiep ket thuc o ngay hoc cuoi cung (= chuoi vua bi ngat)
  function chuoiDaMat(s) {
    var arr = (s.studyDays || []).slice().sort();
    if (!arr.length) return s.streak || 0;
    var n = 1;
    for (var i = arr.length - 1; i > 0; i--) {
      var a = Date.parse(arr[i] + 'T00:00:00Z'), b = Date.parse(arr[i - 1] + 'T00:00:00Z');
      if (a === b) continue;
      if (a - b === DAY_MS) n++;
      else break;
    }
    return Math.max(n, s.streak || 0);
  }
  function lessonList(level) {
    return (typeof APP_DATA !== 'undefined' && APP_DATA.lessons && APP_DATA.lessons[level]) || [];
  }
  function slugOf(url) { return String(url || '').replace(/^\/lessons\//, '').replace(/\.html$/, ''); }
  function linkTo(url) { return url ? site() + '/?hoc=' + encodeURIComponent(slugOf(url)) : site() + '/'; }
  function lessonText(info) {
    return tr().levelName(info.level) + ' · Bài ' + info.number + (info.title ? ': ' + info.title : '');
  }
  // Ten goi = chu cuoi cua ho ten, viet hoa chu dau ("nguyen van an" -> "An")
  function tenGoi(full) {
    var w = String(full || '').trim().split(/\s+/);
    var t = w[w.length - 1] || '';
    return t ? t.charAt(0).toLocaleUpperCase('vi') + t.slice(1) : 'em';
  }

  function rosterNameOf(userId) {
    var c = tr().classes();
    var r = c && (c.roster || []).filter(function (x) { return x.userId === userId; })[0];
    return r ? r.name : '';
  }

  // Tong hop 1 em: null neu em khong can nhac
  function build(s) {
    var now = Date.now();
    var last = lastStudyMs(s);
    var created = s.createdAt ? new Date(s.createdAt).getTime() : 0;
    var days = last ? Math.floor((now - last) / DAY_MS) : (created ? Math.floor((now - created) / DAY_MS) : null);
    if (days == null || days < opt.minDays) return null;
    if (!last && !opt.newbies) return null;
    var name = rosterNameOf(s.id) || s.name || '';
    var ll = s.lastLesson && tr().LESSON_BY_URL[s.lastLesson.url] ? s.lastLesson : null;
    var info = ll ? tr().LESSON_BY_URL[ll.url] : null;
    // Bai cuoi da lam xong Kiem tra cuoi -> link sang bai tiep theo cua cap do
    var nextInfo = null, nextUrl = null;
    if (info && ll.parts && ll.parts.indexOf('final') !== -1) {
      var list = lessonList(info.level);
      for (var i = 0; i < list.length; i++) {
        if (list[i].fullPageUrl === ll.url && list[i + 1] && list[i + 1].fullPageUrl) {
          nextUrl = list[i + 1].fullPageUrl;
          nextInfo = tr().LESSON_BY_URL[nextUrl];
          break;
        }
      }
    }
    var firstUrl = null;
    if (!last) {
      var l0 = lessonList(s.level)[0];
      firstUrl = l0 && l0.fullPageUrl ? l0.fullPageUrl : null;
    }
    return {
      s: s, name: name, days: days, never: !last, lastMs: last,
      info: info, partsDone: ll && ll.parts ? ll.parts.length : 0, finalDone: !!nextInfo,
      nextInfo: nextInfo,
      lost: last ? chuoiDaMat(s) : 0,
      link: linkTo(nextUrl || (ll && ll.url) || firstUrl)
    };
  }

  // ---------- Tin nhan Zalo (giong co giao) ----------
  function message(x) {
    var ten = tenGoi(x.name);
    if (x.never) {
      return 'Chào ' + ten + ' ơi 👋 Cô thấy em đã tạo tài khoản Hi Hán được ' + x.days + ' ngày rồi mà chưa bắt đầu bài nào. ' +
        'Em thử học bài đầu tiên nhé, chỉ khoảng 15 phút thôi. Chỗ nào chưa hiểu cứ nhắn cô nha!\n' +
        '👉 Vào học: ' + x.link;
    }
    var mo;
    if (x.days < 7) mo = 'Chào ' + ten + ' ơi 👋 Đã ' + x.days + ' ngày rồi cô chưa thấy em vào Hi Hán học bài.';
    else if (x.days < 21) mo = 'Chào ' + ten + ' ơi 👋 Đã ' + x.days + ' ngày rồi cô chưa thấy em vào học, cô nhớ em đó 😊';
    else mo = 'Chào ' + ten + ' ơi 👋 Lâu lắm rồi (' + x.days + ' ngày) cô chưa thấy em vào học. Cô vẫn đang chờ em quay lại đó 😊';
    var bai = '';
    if (x.nextInfo) {
      bai = ' Lần trước em đã làm xong bài kiểm tra cuối Bài ' + x.info.number + ' rồi, giỏi lắm! Mình sang ' + lessonText(x.nextInfo) + ' nhé.';
    } else if (x.info) {
      bai = ' Lần trước em đang học ' + lessonText(x.info) + (x.partsDone ? ', đã xong ' + x.partsDone + ' phần rồi' : '') + '.';
    } else if (x.s.level) {
      bai = ' Lần trước em đang học ' + tr().levelName(x.s.level) + '.';
    }
    var chuoi = x.lost >= 2 ? ' Chuỗi ' + x.lost + ' ngày học liên tiếp của em bị ngắt mất rồi, mình bắt đầu chuỗi mới ngay hôm nay nha!' : '';
    return mo + bai + chuoi + ' Em dành 10–15 phút học tiếp nhé, cô tin em làm được! 💪\n' +
      '👉 Học tiếp tại đây: ' + x.link;
  }

  // ---------- Sao chep: navigator.clipboard, khong duoc thi boi den chu + execCommand ----------
  function copyText(text, ta) {
    function fallback() {
      var el = ta, tmp = null;
      if (!el) {
        tmp = el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'fixed';
        el.style.top = '-1000px';
        document.body.appendChild(el);
      }
      el.focus();
      el.select();
      try { el.setSelectionRange(0, el.value.length); } catch (e) { /* bo qua */ }
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      if (tmp) tmp.parentNode.removeChild(tmp);
      return Promise.resolve(ok);
    }
    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { return true; }, fallback);
    }
    return fallback();
  }

  // ---------- Giao dien ----------
  var lastGroups = [];

  function groups() {
    var data = tr().data();
    var cls = tr().classes() || { classes: [] };
    if (!data) return [];
    var byClass = {};
    data.students.forEach(function (s) {
      if (opt.cls === 'none' && s.classId) return;
      if (opt.cls && opt.cls !== 'none' && s.classId !== opt.cls) return;
      var x = build(s);
      if (!x) return;
      var k = s.classId && cls.classes.some(function (c) { return c.id === s.classId; }) ? s.classId : '';
      (byClass[k] = byClass[k] || []).push(x);
    });
    var order = cls.classes.map(function (c) { return { id: c.id, name: (/^l[ớo]p\s/i.test(c.name) ? '' : 'Lớp ') + c.name }; });
    order.push({ id: '', name: 'Chưa vào lớp' });
    return order.filter(function (g) { return byClass[g.id]; }).map(function (g) {
      // em vua bo hoc (it ngay) dung truoc — de keo lai nhat; em chua hoc buoi nao xuong cuoi
      var items = byClass[g.id].sort(function (a, b) {
        return (a.never - b.never) || (a.days - b.days) || String(a.name).localeCompare(String(b.name), 'vi');
      });
      return { id: g.id, name: g.name, items: items };
    });
  }

  function itemHtml(x, gi, ii) {
    var da = readLS(DONE_KEY, {})[x.s.id];
    var meta = [];
    if (x.info) meta.push('📖 ' + esc(lessonText(x.info)) + (x.finalDone ? ' <span class="nh-ok-chip">đã xong</span>' : ''));
    else meta.push('📖 ' + esc(tr().levelName(x.s.level)) + ' · chưa làm bài nào');
    if (x.lost >= 2) meta.push('🔥 Mất chuỗi ' + x.lost + ' ngày');
    if (x.s.stars && x.s.stars.total) meta.push('⭐ ' + x.s.stars.total);
    if (x.lastMs) meta.push('Học lần cuối ' + new Date(x.lastMs).toLocaleDateString('vi-VN'));
    return '<li class="nh-item" data-g="' + gi + '" data-i="' + ii + '">' +
      '<div class="nh-top">' +
        '<button type="button" class="nh-name" data-open="' + esc(x.s.id) + '">' + esc(x.name) + '</button>' +
        '<span class="nh-days' + (x.days >= 14 ? ' is-long' : '') + '">' + (x.never ? 'Chưa học buổi nào · ' + x.days + ' ngày' : x.days + ' ngày chưa học') + '</span>' +
        (da ? '<span class="nh-done" title="Thầy/cô đã sao chép tin nhắn cho em này">✓ đã nhắc ' + esc(da.slice(8, 10) + '/' + da.slice(5, 7)) + '</span>' : '') +
      '</div>' +
      '<div class="nh-meta">' + meta.join(' · ') + '</div>' +
      '<label class="sr-only" for="nhMsg' + gi + '_' + ii + '">Tin nhắn cho ' + esc(x.name) + '</label>' +
      '<textarea class="nh-msg" id="nhMsg' + gi + '_' + ii + '" rows="7" spellcheck="false">' + esc(message(x)) + '</textarea>' +
      '<div class="nh-actions">' +
        '<button type="button" class="btn btn-primary nh-copy">📋 Sao chép</button>' +
        '<span class="nh-status" aria-live="polite"></span>' +
      '</div>' +
    '</li>';
  }

  function render() {
    var box = $('#trNhac');
    if (!box || !tr() || !tr().data()) return;
    var cls = tr().classes() || { classes: [] };
    lastGroups = groups();
    var total = lastGroups.reduce(function (a, g) { return a + g.items.length; }, 0);
    var dem = $('#nhTabDem');
    if (dem) { dem.hidden = !total; dem.textContent = total > 99 ? '99+' : String(total); }

    var controls = '<div class="nh-controls">' +
      '<label class="tr-field">Chưa học từ <select id="nhDays">' + [3, 5, 7, 14, 30].map(function (n) {
        return '<option value="' + n + '"' + (n === opt.minDays ? ' selected' : '') + '>' + n + ' ngày</option>';
      }).join('') + '</select></label>' +
      '<label class="tr-field"><span class="sr-only">Lọc theo lớp</span><select id="nhClass"><option value="">Tất cả lớp</option>' +
        cls.classes.map(function (c) { return '<option value="' + esc(c.id) + '"' + (opt.cls === c.id ? ' selected' : '') + '>' + esc(c.name) + '</option>'; }).join('') +
        '<option value="none"' + (opt.cls === 'none' ? ' selected' : '') + '>Chưa vào lớp</option></select></label>' +
      '<label class="nh-check"><input type="checkbox" id="nhNew"' + (opt.newbies ? ' checked' : '') + '> Gồm em chưa học buổi nào</label>' +
      '<label class="tr-field nh-site">Địa chỉ web trong link <input type="url" id="nhSite" value="' + esc(site()) + '" spellcheck="false"></label>' +
    '</div>';

    var body = lastGroups.length ? lastGroups.map(function (g, gi) {
      return '<section class="admin-section nh-group" data-g="' + gi + '">' +
        '<div class="nh-group-head"><div class="admin-section-title">🏫 ' + esc(g.name) + ' <span class="tr-muted">· ' + g.items.length + ' em</span></div>' +
          '<button type="button" class="btn btn-outline nh-copy-all" data-g="' + gi + '">📋 Sao chép tất cả</button>' +
          '<span class="nh-status nh-status-all" aria-live="polite"></span></div>' +
        '<textarea class="nh-all" rows="8" hidden aria-label="Tất cả tin nhắn của ' + esc(g.name) + '"></textarea>' +
        '<ol class="nh-list">' + g.items.map(function (x, ii) { return itemHtml(x, gi, ii); }).join('') + '</ol>' +
      '</section>';
    }).join('') : '<p class="admin-empty">🎉 Không có em nào ' + opt.minDays + ' ngày trở lên chưa vào học.</p>';

    box.innerHTML = '<section class="admin-section">' +
      '<div class="admin-section-title">📣 Cần nhắc học <span class="tr-muted">· ' + total + ' em</span></div>' +
      '<p class="tr-hint">Học sinh đã ' + opt.minDays + ' ngày trở lên chưa vào học, chia theo lớp. Mỗi em có sẵn một tin nhắn Zalo (thầy/cô có thể sửa trong ô trước khi chép). ' +
        'Bấm <b>Sao chép</b> rồi dán vào Zalo của em. Trang web không tự gửi tin nhắn nào.</p>' +
      controls + '</section>' + body;
    bind(box);
  }

  function markDone(userId) {
    var m = readLS(DONE_KEY, {});
    m[userId] = todayKey();
    // chi giu 60 ngay gan nhat cho gon
    var han = new Date(Date.now() - 60 * DAY_MS).toISOString().slice(0, 10);
    Object.keys(m).forEach(function (k) { if (m[k] < han) delete m[k]; });
    writeLS(DONE_KEY, m);
  }

  function bind(box) {
    $('#nhDays', box).addEventListener('change', function () {
      opt.minDays = parseInt(this.value, 10) || 3;
      try { localStorage.setItem(DAYS_KEY, String(opt.minDays)); } catch (e) { /* bo qua */ }
      render();
    });
    $('#nhClass', box).addEventListener('change', function () { opt.cls = this.value; render(); });
    $('#nhNew', box).addEventListener('change', function () { opt.newbies = this.checked; render(); });
    $('#nhSite', box).addEventListener('change', function () {
      var v = String(this.value || '').trim().replace(/\/+$/, '');
      if (v && !/^https?:\/\/[^\s/]+/i.test(v)) { this.value = site(); return; }
      try { if (v && v !== location.origin) localStorage.setItem(SITE_KEY, v); else localStorage.removeItem(SITE_KEY); } catch (e) { /* bo qua */ }
      render();
    });
    $all('[data-open]', box).forEach(function (b) {
      b.addEventListener('click', function () { tr().openStudent(b.getAttribute('data-open')); });
    });
    $all('.nh-copy', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var li = b.closest('.nh-item');
        var ta = $('.nh-msg', li), st = $('.nh-status', li);
        var x = lastGroups[+li.getAttribute('data-g')].items[+li.getAttribute('data-i')];
        copyText(ta.value, ta).then(function (ok) {
          if (ok) {
            st.textContent = '✓ Đã chép — dán vào Zalo của em';
            markDone(x.s.id);
          } else {
            ta.focus(); ta.select();
            st.textContent = 'Chữ đã được bôi đen — bấm Ctrl+C (hoặc giữ để sao chép) nhé.';
          }
        });
      });
    });
    $all('.nh-copy-all', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var sec = b.closest('.nh-group');
        var g = lastGroups[+b.getAttribute('data-g')];
        var texts = $all('.nh-msg', sec).map(function (ta, i) {
          return '— ' + g.items[i].name + ' —\n' + ta.value;
        });
        var all = texts.join('\n\n');
        var st = $('.nh-status-all', sec);
        var hidden = $('.nh-all', sec);
        copyText(all, null).then(function (ok) {
          if (ok) {
            st.textContent = '✓ Đã chép ' + g.items.length + ' tin nhắn';
            g.items.forEach(function (x) { markDone(x.s.id); });
          } else {
            hidden.hidden = false;
            hidden.value = all;
            hidden.focus(); hidden.select();
            st.textContent = 'Chữ đã được bôi đen ở ô bên dưới — bấm Ctrl+C nhé.';
          }
        });
      });
    });
  }

  window.__trNhac = { render: render };
})();
