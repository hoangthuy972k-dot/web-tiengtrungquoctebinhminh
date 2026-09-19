// Tab "Lop & bai giao" cua trang quan tri: tao lop (ma lop), giao bai co han nop,
// xem lop nao / em nao da lam, chuyen hoc sinh giua cac lop.
(function () {
  'use strict';
  var T = window.__tr;
  if (!T) return;
  var $ = T.$, $all = T.$all, esc = T.esc;

  var selClass = null;   // lop dang xem o phan "Bai da giao" / "Hoc sinh trong lop"
  var openAssign = null; // bai giao dang mo chi tiet
  var busy = false;

  function api(method, url, body) {
    var pw = sessionStorage.getItem('hyv_admin_pw') || '';
    return fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json', 'X-Admin-Password': pw },
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (!r.ok) throw new Error(d.error || 'Lỗi máy chủ (' + r.status + ')');
        return d;
      });
    });
  }
  function run(p) {
    busy = true;
    return p.then(function (d) { busy = false; T.reload(); return d; })
      .catch(function (e) { busy = false; alert(e.message); });
  }

  function vnDate(ms, withDay) {
    return new Date(ms).toLocaleDateString('vi-VN', withDay
      ? { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Asia/Ho_Chi_Minh' }
      : { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Asia/Ho_Chi_Minh' });
  }
  // Ngay YYYY-MM-DD (gio VN) cua 1 moc thoi gian
  function vnIsoDate(ms) { return new Date(ms + 7 * 3600000).toISOString().slice(0, 10); }

  function lessonLabel(url) {
    var l = T.LESSON_BY_URL[url];
    return l ? T.levelName(l.level) + ' · Bài ' + l.number + ': ' + l.title : url;
  }
  function studentsById() {
    var m = {};
    (T.data().students || []).forEach(function (s) { m[s.id] = s; });
    return m;
  }
  function membersOf(classId) {
    var C = T.classes();
    var byId = studentsById();
    return Object.keys(C.members).filter(function (u) { return C.members[u].classId === classId && byId[u]; })
      .map(function (u) { return byId[u]; })
      .sort(function (a, b) { return (a.name || '').localeCompare(b.name || '', 'vi'); });
  }
  // Trang thai cua 1 bai giao voi tung hoc sinh trong lop
  function assignRows(a) {
    var C = T.classes();
    return membersOf(a.classId).map(function (s) {
      var d = (C.done[s.id] || {})[a.lessonUrl];
      var status = d ? (d.firstMs <= a.dueMs ? 'done' : 'late') : (C.now > a.dueMs ? 'overdue' : 'todo');
      return { s: s, d: d, status: status };
    });
  }

  // ---------- Ve ----------
  function render() {
    var C = T.classes();
    var box = $('#trClasses');
    if (!C || !box) return;
    if (selClass && !C.classes.some(function (c) { return c.id === selClass; })) selClass = null;
    if (!selClass && C.classes.length) selClass = C.classes[0].id;
    box.innerHTML = classesSection(C) + (C.classes.length ? assignFormSection(C) + assignedSection(C) + membersSection(C) : '');
    bind(box);
  }

  function classesSection(C) {
    var cards = C.classes.map(function (c) {
      var n = membersOf(c.id).length;
      var na = C.assignments.filter(function (a) { return a.classId === c.id; }).length;
      return '<div class="tc-card' + (c.id === selClass ? ' is-sel' : '') + '">' +
        '<div class="tc-card-top"><button type="button" class="tc-name" data-sel="' + esc(c.id) + '">' + esc(c.name) + '</button>' +
          '<span class="tr-muted">' + n + ' học sinh · ' + na + ' bài giao</span></div>' +
        '<div class="tc-code-row"><span class="tc-code-label">Mã lớp</span><code class="tc-code">' + esc(c.code) + '</code>' +
          '<button type="button" class="tc-mini" data-copy="' + esc(c.code) + '">Sao chép</button></div>' +
        '<div class="tc-actions">' +
          '<button type="button" class="tc-mini" data-rename="' + esc(c.id) + '">Đổi tên</button>' +
          '<button type="button" class="tc-mini" data-newcode="' + esc(c.id) + '">Tạo mã mới</button>' +
          '<button type="button" class="tc-mini is-danger" data-delclass="' + esc(c.id) + '">Xoá lớp</button>' +
        '</div></div>';
    }).join('');
    var noClass = (T.data().students || []).filter(function (s) { return !C.members[s.id]; }).length;
    return '<section class="admin-section"><div class="admin-section-title">🏫 Các lớp</div>' +
      '<p class="tr-hint">Đọc hoặc gửi <b>mã lớp</b> cho học sinh. Học sinh đăng nhập, nhập mã ở ô "Em học lớp của thầy cô?" trên trang chủ là vào đúng lớp. ' +
        (noClass ? '<b>' + noClass + '</b> học sinh chưa vào lớp nào.' : '') + '</p>' +
      '<div class="tc-grid">' + cards +
        '<form class="tc-card tc-new" id="tcNewForm"><label for="tcNewName" class="tc-code-label">Tạo lớp mới</label>' +
          '<input id="tcNewName" maxlength="100" placeholder="VD: HSK 2 · Tối 2-4-6" required>' +
          '<button type="submit" class="btn btn-primary">＋ Tạo lớp</button></form>' +
      '</div></section>';
  }

  function assignFormSection(C) {
    var lvOpts = T.LEVELS.map(function (l) { return '<option value="' + esc(l.id) + '">' + esc(l.name) + '</option>'; }).join('');
    var due = vnIsoDate(Date.now() + 7 * 86400000);
    return '<section class="admin-section"><div class="admin-section-title">📤 Giao bài</div>' +
      '<form class="tc-assign" id="tcAssignForm">' +
        '<fieldset class="tc-fs"><legend>Giao cho lớp</legend><div class="tc-checks">' +
          C.classes.map(function (c) {
            return '<label class="tc-check"><input type="checkbox" name="cls" value="' + esc(c.id) + '"' + (c.id === selClass ? ' checked' : '') + '> ' + esc(c.name) + '</label>';
          }).join('') + '</div></fieldset>' +
        '<div class="tc-row">' +
          '<label class="tc-lbl">Cấp<select id="tcLevel">' + lvOpts + '</select></label>' +
          '<label class="tc-lbl tc-grow">Bài học<select id="tcLesson"></select></label>' +
          '<label class="tc-lbl">Hạn nộp (hết ngày)<input type="date" id="tcDue" value="' + due + '" required></label>' +
        '</div>' +
        '<label class="tc-lbl">Ghi chú cho học sinh (không bắt buộc)<input id="tcNote" maxlength="300" placeholder="VD: Làm kỹ phần Ngữ pháp và Nhập vai trước khi làm Kiểm tra cuối"></label>' +
        '<p class="tr-hint">Học sinh được tính <b>Đã làm</b> khi làm xong <b>Bước 7 · Kiểm tra cuối bài</b>. Làm sau hạn vẫn được, thống kê ghi <b>Nộp muộn</b>.</p>' +
        '<button type="submit" class="btn btn-primary">📤 Giao bài</button>' +
      '</form></section>';
  }

  function tally(rows) {
    var t = { done: 0, late: 0, todo: 0, overdue: 0 };
    rows.forEach(function (r) { t[r.status]++; });
    return t;
  }

  function assignedSection(C) {
    var tabs = C.classes.map(function (c) {
      return '<button type="button" class="tc-ctab' + (c.id === selClass ? ' active' : '') + '" data-sel="' + esc(c.id) + '">' + esc(c.name) + '</button>';
    }).join('');
    var list = C.assignments.filter(function (a) { return a.classId === selClass; })
      .sort(function (a, b) { return b.dueMs - a.dueMs; });
    var body = list.length ? list.map(function (a) {
      var rows = assignRows(a);
      var t = tally(rows);
      var n = rows.length || 1;
      var past = C.now > a.dueMs;
      var isOpen = openAssign === a.id;
      return '<div class="tc-as' + (isOpen ? ' is-open' : '') + '">' +
        '<div class="tc-as-head">' +
          '<div class="tc-as-info"><div class="tc-as-title">' + esc(lessonLabel(a.lessonUrl)) + '</div>' +
            '<div class="tr-muted">Hạn ' + vnDate(a.dueMs, true) + (past ? ' · <b class="tc-past">đã hết hạn</b>' : '') + (a.note ? ' · 📝 ' + esc(a.note) : '') + '</div></div>' +
          '<div class="tc-as-stat"><b>' + (t.done + t.late) + '/' + rows.length + '</b> đã làm</div>' +
        '</div>' +
        '<div class="tc-bar" aria-hidden="true"><i class="is-done" style="width:' + (100 * t.done / n) + '%"></i><i class="is-late" style="width:' + (100 * t.late / n) + '%"></i></div>' +
        '<div class="tc-legend"><span class="tc-dot is-done"></span>Đúng hạn ' + t.done + ' <span class="tc-dot is-late"></span>Nộp muộn ' + t.late +
          ' <span class="tc-dot is-todo"></span>' + (past ? 'Không làm ' : 'Chưa làm ') + (t.todo + t.overdue) + '</div>' +
        '<div class="tc-as-actions">' +
          '<button type="button" class="tc-mini" data-open="' + esc(a.id) + '">' + (isOpen ? 'Ẩn danh sách' : 'Xem từng em') + '</button>' +
          '<button type="button" class="tc-mini" data-csv="' + esc(a.id) + '">⬇ CSV</button>' +
          '<button type="button" class="tc-mini" data-due="' + esc(a.id) + '">Đổi hạn</button>' +
          '<button type="button" class="tc-mini is-danger" data-delas="' + esc(a.id) + '">Xoá bài giao</button>' +
        '</div>' +
        (isOpen ? assignDetail(rows) : '') +
      '</div>';
    }).join('') : '<p class="tr-muted">Lớp này chưa có bài giao nào.</p>';
    return '<section class="admin-section"><div class="admin-section-title">📋 Bài đã giao</div>' +
      '<div class="tc-ctabs">' + tabs + '</div>' + body + '</section>';
  }

  function assignDetail(rows) {
    var groups = [
      { key: 'todo', label: '⏳ Chưa làm (còn hạn)' },
      { key: 'overdue', label: '⚠️ Quá hạn chưa làm' },
      { key: 'late', label: '🕘 Nộp muộn' },
      { key: 'done', label: '✅ Đúng hạn' }
    ];
    if (!rows.length) return '<p class="tr-muted tc-detail">Lớp chưa có học sinh nào.</p>';
    return '<div class="tc-detail">' + groups.map(function (g) {
      var list = rows.filter(function (r) { return r.status === g.key; });
      if (!list.length) return '';
      return '<div class="tc-group"><div class="tc-group-h">' + g.label + ' · ' + list.length + '</div><ul>' +
        list.map(function (r) {
          var sc = r.d && r.d.total ? Math.round(100 * r.d.correct / r.d.total) : null;
          return '<li><button type="button" class="tc-stu" data-stu="' + esc(r.s.id) + '">' + esc(r.s.name) + '</button>' +
            (r.d ? ' <span class="tc-score ' + (sc >= 80 ? 'is-good' : sc >= 60 ? 'is-mid' : 'is-low') + '">' + r.d.correct + '/' + r.d.total + '</span>' +
              ' <span class="tr-muted">' + vnDate(r.d.firstMs) + '</span>' : '') + '</li>';
        }).join('') + '</ul></div>';
    }).join('') + '</div>';
  }

  function membersSection(C) {
    var cls = C.classes.filter(function (c) { return c.id === selClass; })[0];
    var mem = membersOf(selClass);
    var none = (T.data().students || []).filter(function (s) { return !C.members[s.id]; })
      .sort(function (a, b) { return (a.name || '').localeCompare(b.name || '', 'vi'); });
    function moveSel(s, cur) {
      return '<select class="tc-move" data-user="' + esc(s.id) + '" aria-label="Chuyển lớp cho ' + esc(s.name) + '">' +
        '<option value="">' + (cur ? 'Chuyển lớp…' : 'Thêm vào lớp…') + '</option>' +
        C.classes.filter(function (c) { return c.id !== cur; }).map(function (c) { return '<option value="' + esc(c.id) + '">' + esc(c.name) + '</option>'; }).join('') +
        (cur ? '<option value="__out">Cho ra khỏi lớp</option>' : '') + '</select>';
    }
    return '<section class="admin-section"><div class="admin-section-title">👥 Học sinh lớp ' + esc(cls ? cls.name : '') + ' · ' + mem.length + '</div>' +
      (mem.length ? '<div class="admin-table-wrap"><table class="admin-table"><thead><tr><th>Học sinh</th><th>Vào lớp</th><th>Học gần nhất</th><th></th></tr></thead><tbody>' +
        mem.map(function (s) {
          var j = C.members[s.id];
          return '<tr><td><button type="button" class="tc-stu" data-stu="' + esc(s.id) + '">' + esc(s.name) + '</button><div class="tr-email">' + esc(s.email) + '</div></td>' +
            '<td>' + (j ? vnDate(j.joinedMs) : '—') + '</td>' +
            '<td>' + (s.lastActive ? vnDate(new Date(s.lastActive).getTime()) : 'Chưa học') + '</td>' +
            '<td>' + moveSel(s, selClass) + '</td></tr>';
        }).join('') + '</tbody></table></div>'
        : '<p class="tr-muted">Chưa có học sinh nào vào lớp này. Đưa mã lớp <b>' + esc(cls ? cls.code : '') + '</b> cho học sinh nhé.</p>') +
      (none.length ? '<details class="tc-none"><summary>Học sinh chưa vào lớp nào (' + none.length + ')</summary><ul>' +
        none.map(function (s) { return '<li><span>' + esc(s.name) + ' <span class="tr-muted">' + esc(s.email) + '</span></span>' + moveSel(s, null) + '</li>'; }).join('') +
        '</ul></details>' : '') +
    '</section>';
  }

  // ---------- Su kien ----------
  function fillLessons(box) {
    var lv = $('#tcLevel', box).value;
    var lessons = (APP_DATA.lessons[lv] || []).slice().sort(function (a, b) { return a.number - b.number; });
    $('#tcLesson', box).innerHTML = lessons.map(function (l) {
      return '<option value="' + esc(l.fullPageUrl) + '">Bài ' + l.number + ': ' + esc(l.title) + '</option>';
    }).join('');
  }

  function bind(box) {
    var C = T.classes();
    var lvSel = $('#tcLevel', box);
    if (lvSel) {
      // mac dinh: cap + bai ke tiep cua bai giao gan nhat cho lop dang chon
      var last = C.assignments.filter(function (a) { return a.classId === selClass && T.LESSON_BY_URL[a.lessonUrl]; })
        .sort(function (a, b) { return b.createdMs - a.createdMs; })[0];
      var lastInfo = last && T.LESSON_BY_URL[last.lessonUrl];
      if (lastInfo && APP_DATA.lessons[lastInfo.level]) lvSel.value = lastInfo.level;
      fillLessons(box);
      if (lastInfo) {
        var next = (APP_DATA.lessons[lastInfo.level] || []).filter(function (l) { return l.number === lastInfo.number + 1; })[0];
        if (next) $('#tcLesson', box).value = next.fullPageUrl;
      }
      lvSel.addEventListener('change', function () { fillLessons(box); });
    }
    $all('[data-sel]', box).forEach(function (b) {
      b.addEventListener('click', function () { selClass = b.getAttribute('data-sel'); openAssign = null; render(); });
    });
    $all('[data-copy]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var code = b.getAttribute('data-copy');
        (navigator.clipboard ? navigator.clipboard.writeText(code) : Promise.reject()).then(function () {
          b.textContent = 'Đã chép ✓';
          setTimeout(function () { b.textContent = 'Sao chép'; }, 1500);
        }).catch(function () { window.prompt('Mã lớp:', code); });
      });
    });
    $all('[data-rename]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var c = C.classes.filter(function (x) { return x.id === b.getAttribute('data-rename'); })[0];
        var name = window.prompt('Tên mới của lớp:', c.name);
        if (name && name.trim() && name.trim() !== c.name) run(api('POST', '/api/admin/classes/' + c.id, { name: name.trim() }));
      });
    });
    $all('[data-newcode]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        if (window.confirm('Tạo mã lớp mới? Mã cũ sẽ không dùng được nữa (học sinh đã vào lớp vẫn ở trong lớp).')) {
          run(api('POST', '/api/admin/classes/' + b.getAttribute('data-newcode'), { newCode: true }));
        }
      });
    });
    $all('[data-delclass]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var c = C.classes.filter(function (x) { return x.id === b.getAttribute('data-delclass'); })[0];
        if (window.confirm('Xoá lớp "' + c.name + '"?\nCác bài đã giao cho lớp này sẽ bị xoá; học sinh trong lớp trở về "chưa vào lớp". Điểm học của học sinh vẫn giữ nguyên.')) {
          run(api('DELETE', '/api/admin/classes/' + c.id));
        }
      });
    });
    var newForm = $('#tcNewForm', box);
    if (newForm) newForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (busy) return;
      run(api('POST', '/api/admin/classes', { name: $('#tcNewName', box).value.trim() })).then(function (d) {
        if (d && d.class) selClass = d.class.id;
      });
    });
    var aForm = $('#tcAssignForm', box);
    if (aForm) aForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (busy) return;
      var ids = $all('input[name="cls"]:checked', aForm).map(function (i) { return i.value; });
      if (!ids.length) { alert('Chọn ít nhất 1 lớp để giao bài.'); return; }
      run(api('POST', '/api/admin/assignments', {
        classIds: ids, lessonUrl: $('#tcLesson', box).value, dueDate: $('#tcDue', box).value, note: $('#tcNote', box).value
      })).then(function (d) { if (d && d.ok) alert('Đã giao bài cho ' + ids.length + ' lớp.'); });
    });
    $all('[data-open]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-open');
        openAssign = openAssign === id ? null : id;
        render();
      });
    });
    $all('[data-due]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var a = C.assignments.filter(function (x) { return x.id === b.getAttribute('data-due'); })[0];
        var v = window.prompt('Hạn nộp mới (năm-tháng-ngày, VD 2026-10-05):', vnIsoDate(a.dueMs));
        if (v && /^\d{4}-\d{2}-\d{2}$/.test(v.trim())) run(api('POST', '/api/admin/assignments/' + a.id, { dueDate: v.trim() }));
        else if (v) alert('Nhập ngày theo dạng năm-tháng-ngày, ví dụ 2026-10-05.');
      });
    });
    $all('[data-delas]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        if (window.confirm('Xoá bài giao này? Học sinh sẽ không thấy bài này trong danh sách nữa (điểm đã làm vẫn giữ).')) {
          run(api('DELETE', '/api/admin/assignments/' + b.getAttribute('data-delas')));
        }
      });
    });
    $all('[data-csv]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var a = C.assignments.filter(function (x) { return x.id === b.getAttribute('data-csv'); })[0];
        csvAssign(a);
      });
    });
    $all('[data-stu]', box).forEach(function (b) {
      b.addEventListener('click', function () { T.openStudent(b.getAttribute('data-stu')); });
    });
    $all('.tc-move', box).forEach(function (sel) {
      sel.addEventListener('change', function () {
        var v = sel.value;
        if (!v) return;
        run(api('POST', '/api/admin/members', { userId: sel.getAttribute('data-user'), classId: v === '__out' ? '' : v }));
      });
    });
  }

  function csvAssign(a) {
    var STATUS = { done: 'Đúng hạn', late: 'Nộp muộn', todo: 'Chưa làm', overdue: 'Quá hạn chưa làm' };
    var rows = [['Học sinh', 'Email', 'Trạng thái', 'Điểm Kiểm tra cuối', 'Ngày làm']];
    assignRows(a).forEach(function (r) {
      rows.push([r.s.name, r.s.email, STATUS[r.status], r.d ? r.d.correct + '/' + r.d.total : '', r.d ? vnDate(r.d.firstMs) : '']);
    });
    var text = '﻿' + lessonLabel(a.lessonUrl) + ' · hạn ' + vnDate(a.dueMs) + '\n' + rows.map(function (r) {
      return r.map(function (v) { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }).join(',');
    }).join('\n');
    var link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([text], { type: 'text/csv;charset=utf-8' }));
    link.download = 'bai-giao-' + vnIsoDate(a.dueMs) + '.csv';
    document.body.appendChild(link);
    link.click();
    setTimeout(function () { URL.revokeObjectURL(link.href); link.remove(); }, 500);
  }

  window.__trClasses = { render: render };
  render();
})();
