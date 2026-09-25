// Tab "Lop & bai giao" cua trang quan tri: tao lop (ma lop), giao bai co han nop,
// xem lop nao / em nao da lam, chuyen hoc sinh giua cac lop.
(function () {
  'use strict';
  var T = window.__tr;
  if (!T) return;
  var $ = T.$, $all = T.$all, esc = T.esc;

  // Cac phan cua 1 bai — giao vien co the giao ca bai hoac chi vai phan
  var PARTS = [
    { k: 'warmup', t: 'Khởi động' }, { k: 'vocab', t: 'Từ vựng' }, { k: 'flash', t: 'Thẻ nhớ' },
    { k: 'grammar', t: 'Ngữ pháp' }, { k: 'dialog', t: 'Hội thoại' }, { k: 'roleplay', t: 'Nhập vai' },
    { k: 'listen', t: 'Nghe' }, { k: 'game', t: 'Luyện tập (trò chơi)' }, { k: 'speak', t: 'Nói' },
    { k: 'translate', t: 'Dịch' }, { k: 'workbook', t: 'Sách bài tập' }, { k: 'final', t: 'Kiểm tra cuối' }
  ];
  function partLabel(k) { var p = PARTS.filter(function (x) { return x.k === k; })[0]; return p ? p.t : k; }
  function partsText(a) {
    return a.parts && a.parts.length ? a.parts.map(partLabel).join(' · ') : 'Cả bài (Kiểm tra cuối)';
  }

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
  function rosterOf(classId) {
    return (T.classes().roster || []).filter(function (r) { return r.classId === classId; })
      .sort(function (a, b) { return a.sort - b.sort; });
  }
  // Moi dong = 1 hoc sinh cua lop: theo danh sach lop (ke ca em chua vao lop),
  // cong them tai khoan da vao lop nhung chua gan ten trong danh sach.
  function classRows(classId) {
    var C = T.classes();
    var byId = studentsById();
    var rows = [];
    var linked = {};
    rosterOf(classId).forEach(function (r) {
      var s = r.userId && byId[r.userId] && C.members[r.userId] && C.members[r.userId].classId === classId ? byId[r.userId] : null;
      if (r.userId) linked[r.userId] = 1;
      rows.push({ name: r.name, r: r, s: s });
    });
    membersOf(classId).forEach(function (s) { if (!linked[s.id]) rows.push({ name: s.name, r: null, s: s, extra: true }); });
    return rows;
  }
  // Xong = da lam du cac phan duoc giao (khong giao phan nao = ca bai, tinh Kiem tra cuoi)
  function statusOf(a, doneOfLesson, now) {
    var need = a.parts && a.parts.length ? a.parts : ['final'];
    var have = need.filter(function (p) { return doneOfLesson && doneOfLesson[p]; });
    if (have.length < need.length) {
      return { status: now > a.dueMs ? 'overdue' : 'todo', doneParts: have.length, need: need.length };
    }
    var doneMs = Math.max.apply(null, have.map(function (p) { return doneOfLesson[p].firstMs; }));
    var c = 0, t = 0;
    have.forEach(function (p) { c += doneOfLesson[p].correct || 0; t += doneOfLesson[p].total || 0; });
    return { status: doneMs <= a.dueMs ? 'done' : 'late', doneParts: need.length, need: need.length, correct: c, total: t, doneMs: doneMs };
  }
  function assignRows(a) {
    var C = T.classes();
    return classRows(a.classId).map(function (row) {
      if (!row.s) return { name: row.name, s: null, status: 'nojoin', doneParts: 0, need: (a.parts && a.parts.length) || 1 };
      var st = statusOf(a, (C.done[row.s.id] || {})[a.lessonUrl], C.now);
      return Object.assign({ name: row.name, s: row.s }, st);
    });
  }

  // ---------- Ve ----------
  function render() {
    var C = T.classes();
    var box = $('#trClasses');
    if (!C || !box) return;
    if (selClass && !C.classes.some(function (c) { return c.id === selClass; })) selClass = null;
    if (!selClass && C.classes.length) selClass = C.classes[0].id;
    box.innerHTML = classesSection(C) + (C.classes.length ? assignFormSection(C) + assignedSection(C) + diemSection(C) + membersSection(C) : '');
    bind(box);
  }

  /* ---------------- So diem lop ----------------
     Bon cot: chuyen can (tu dong theo bai da lam), xay dung bai (cong o che do
     lop hoc), giua ki va cuoi ki (thay/co nhap o day).                      */
  var diemData = null;      // { classId, sessions, roster }
  var diemDangTai = false;

  function taiDiem(classId) {
    if (diemDangTai) return;
    diemDangTai = true;
    api('GET', '/api/admin/points?classId=' + encodeURIComponent(classId))
      .then(function (d) { diemDangTai = false; diemData = d; render(); })
      .catch(function () { diemDangTai = false; });
  }

  function diemSection(C) {
    if (!selClass) return '';
    if (!diemData || diemData.classId !== selClass) {
      taiDiem(selClass);
      return '<section class="admin-section"><div class="admin-section-title">🎒 Sổ điểm lớp</div>' +
        '<p class="assign-empty">Đang tải sổ điểm…</p></section>';
    }
    var r = diemData.roster;
    if (!r.length) {
      return '<section class="admin-section"><div class="admin-section-title">🎒 Sổ điểm lớp</div>' +
        '<p class="assign-empty">Lớp này chưa có danh sách học sinh.</p></section>';
    }
    var rows = r.map(function (s) {
      return '<tr>' +
        '<td class="dm-no">' + s.no + '</td>' +
        '<td class="dm-name">' + esc(s.name) + (s.joined ? '' : ' <small class="dm-out">chưa vào lớp</small>') + '</td>' +
        '<td class="dm-auto">' + s.chuyenCan + '<i>/' + s.tongBai + '</i></td>' +
        '<td class="dm-auto' + (s.build > 0 ? ' is-plus' : '') + '">' + (s.build > 0 ? '+' + s.build : '—') + '</td>' +
        '<td class="dm-auto' + (s.mieng != null ? ' is-oral' : '') + '" title="' +
          (s.mieng == null ? 'Chưa gọi lên bảng lần nào'
            : s.miengSo + ' lần gọi · lần gần nhất ' + s.miengLan) + '">' +
          (s.mieng == null ? '—' : s.mieng) + '</td>' +
        '<td><input type="number" class="dm-in" min="0" max="10" data-diem="mid" data-id="' + esc(s.id) + '" value="' + (s.mid == null ? '' : s.mid) + '" placeholder="—"></td>' +
        '<td><input type="number" class="dm-in" min="0" max="10" data-diem="final" data-id="' + esc(s.id) + '" value="' + (s.final == null ? '' : s.final) + '" placeholder="—"></td>' +
      '</tr>';
    }).join('');

    return '<section class="admin-section">' +
      '<div class="admin-section-title">🎒 Sổ điểm lớp</div>' +
      '<p class="tc-hint"><b>Chuyên cần</b> và <b>Xây dựng bài</b> máy tự tính — chuyên cần +1 mỗi bài tập em làm xong, ' +
        'xây dựng bài cộng ở <a href="/lop" target="_blank" rel="noopener">Chế độ lớp học</a> khi em giơ tay. ' +
        '<b>Miệng</b> là trung bình các lần thầy/cô gọi em lên bảng đầu giờ ở Chế độ lớp học. ' +
        'Hai cột kiểm tra thì thầy/cô gõ vào đây, gõ xong bấm ra ngoài là tự lưu.</p>' +
      '<div class="admin-table-wrap"><table class="admin-table dm-table">' +
        '<thead><tr><th>#</th><th>Học sinh</th><th>Chuyên cần</th><th>Xây dựng</th><th>Miệng</th><th>Giữa kì</th><th>Cuối kì</th></tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
      '</table></div>' +
      '<p class="tc-hint" id="dmSaved"></p>' +
    '</section>';
  }

  function luuDiem(el) {
    var kind = el.getAttribute('data-diem');
    var id = el.getAttribute('data-id');
    var v = el.value.trim();
    if (v === '') return;                       // de trong = chua cham, khong ghi gi
    var n = Math.max(0, Math.min(10, Math.round(Number(v))));
    if (!Number.isFinite(n)) { el.value = ''; return; }
    el.value = n;
    api('POST', '/api/admin/points', { classId: selClass, rosterId: id, kind: kind, value: n })
      .then(function () {
        var s = diemData && diemData.roster.filter(function (x) { return x.id === id; })[0];
        if (s) s[kind] = n;
        var note = document.getElementById('dmSaved');
        if (note) {
          note.textContent = '✓ Đã lưu lúc ' + new Date().toLocaleTimeString('vi-VN');
          note.style.color = 'var(--color-green-600)';
        }
      })
      .catch(function (e) { alert(e.message); });
  }

  function classesSection(C) {
    var cards = C.classes.map(function (c) {
      var n = classRows(c.id).length;
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
        '<fieldset class="tc-fs"><legend>Yêu cầu học sinh làm</legend>' +
          '<label class="tc-check"><input type="radio" name="scope" value="all" checked> Cả bài <span class="tr-muted">(xong khi làm Kiểm tra cuối)</span></label> ' +
          '<label class="tc-check"><input type="radio" name="scope" value="parts"> Chỉ một số phần</label>' +
          '<div class="tc-checks tc-parts" id="tcParts" hidden>' +
            PARTS.map(function (p) {
              return '<label class="tc-check"><input type="checkbox" name="part" value="' + esc(p.k) + '"> ' + esc(p.t) + '</label>';
            }).join('') +
          '</div>' +
        '</fieldset>' +
        '<label class="tc-lbl">Ghi chú cho học sinh (không bắt buộc)<input id="tcNote" maxlength="300" placeholder="VD: Làm kỹ phần Ngữ pháp trước khi làm bài tập"></label>' +
        '<p class="tr-hint">Học sinh được tính <b>Đã làm</b> khi làm xong <b>tất cả các phần được giao</b>. Làm sau hạn vẫn được, thống kê ghi <b>Nộp muộn</b>.</p>' +
        '<button type="submit" class="btn btn-primary">📤 Giao bài</button>' +
      '</form></section>';
  }

  function tally(rows) {
    var t = { done: 0, late: 0, todo: 0, overdue: 0, nojoin: 0 };
    rows.forEach(function (r) { t[r.status]++; });
    return t;
  }

  function assignedSection(C) {
    var tabs = C.classes.map(function (c) {
      return '<button type="button" class="tc-ctab' + (c.id === selClass ? ' active' : '') + '" data-sel="' + esc(c.id) + '">' + esc(c.name) + '</button>';
    }).join('');
    var ordered = C.assignments.filter(function (a) { return a.classId === selClass; })
      .sort(function (a, b) { return a.createdMs - b.createdMs || a.dueMs - b.dueMs; });
    var sessionOf = {};
    ordered.forEach(function (a, n) { sessionOf[a.id] = n + 1; });
    var list = ordered.slice().reverse();
    var body = list.length ? list.map(function (a) {
      var rows = assignRows(a);
      var t = tally(rows);
      var n = rows.length || 1;
      var past = C.now > a.dueMs;
      var isOpen = openAssign === a.id;
      return '<div class="tc-as' + (isOpen ? ' is-open' : '') + '">' +
        '<div class="tc-as-head">' +
          '<div class="tc-as-info"><div class="tc-as-title"><span class="tc-session">Buổi ' + sessionOf[a.id] + '</span> ' + esc(lessonLabel(a.lessonUrl)) + '</div>' +
            '<div class="tr-muted">📚 ' + esc(partsText(a)) + ' · Hạn ' + vnDate(a.dueMs, true) + (past ? ' · <b class="tc-past">đã hết hạn</b>' : '') + (a.note ? ' · 📝 ' + esc(a.note) : '') + '</div></div>' +
          '<div class="tc-as-stat"><b>' + (t.done + t.late) + '/' + rows.length + '</b> đã làm</div>' +
        '</div>' +
        '<div class="tc-bar" aria-hidden="true"><i class="is-done" style="width:' + (100 * t.done / n) + '%"></i><i class="is-late" style="width:' + (100 * t.late / n) + '%"></i></div>' +
        '<div class="tc-legend"><span class="tc-dot is-done"></span>Đúng hạn ' + t.done + ' <span class="tc-dot is-late"></span>Nộp muộn ' + t.late +
          ' <span class="tc-dot is-todo"></span>' + (past ? 'Không làm ' : 'Chưa làm ') + (t.todo + t.overdue + t.nojoin) + (t.nojoin ? ' <span class="tr-muted">(' + t.nojoin + ' em chưa vào lớp)</span>' : '') + '</div>' +
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
      { key: 'nojoin', label: '🚪 Chưa vào lớp trên web' },
      { key: 'late', label: '🕘 Nộp muộn' },
      { key: 'done', label: '✅ Đúng hạn' }
    ];
    if (!rows.length) return '<p class="tr-muted tc-detail">Lớp chưa có học sinh nào.</p>';
    return '<div class="tc-detail">' + groups.map(function (g) {
      var list = rows.filter(function (r) { return r.status === g.key; });
      if (!list.length) return '';
      return '<div class="tc-group"><div class="tc-group-h">' + g.label + ' · ' + list.length + '</div><ul>' +
        list.map(function (r) {
          var sc = r.total ? Math.round(100 * r.correct / r.total) : null;
          var doneAll = r.status === 'done' || r.status === 'late';
          return '<li>' + (r.s ? '<button type="button" class="tc-stu" data-stu="' + esc(r.s.id) + '">' + esc(r.name) + '</button>' : '<span class="tc-stu is-out">' + esc(r.name) + '</span>') +
            (doneAll && r.total ? ' <span class="tc-score ' + (sc >= 80 ? 'is-good' : sc >= 60 ? 'is-mid' : 'is-low') + '">' + r.correct + '/' + r.total + '</span>' : '') +
            (doneAll ? ' <span class="tr-muted">' + vnDate(r.doneMs) + '</span>' : (r.need > 1 && r.s ? ' <span class="tr-muted">đã làm ' + r.doneParts + '/' + r.need + ' phần</span>' : '')) + '</li>';
        }).join('') + '</ul></div>';
    }).join('') + '</div>';
  }

  function membersSection(C) {
    var cls = C.classes.filter(function (c) { return c.id === selClass; })[0];
    var roster = rosterOf(selClass);
    var rows = classRows(selClass);
    var joined = rows.filter(function (r) { return r.s; }).length;
    var freeNames = roster.filter(function (r) { return !r.userId; });
    var none = (T.data().students || []).filter(function (s) { return !C.members[s.id]; })
      .sort(function (a, b) { return (a.name || '').localeCompare(b.name || '', 'vi'); });
    function moveSel(s, cur) {
      return '<select class="tc-move" data-user="' + esc(s.id) + '" aria-label="Chuyển lớp cho ' + esc(s.name) + '">' +
        '<option value="">' + (cur ? 'Chuyển lớp…' : 'Thêm vào lớp…') + '</option>' +
        C.classes.filter(function (c) { return c.id !== cur; }).map(function (c) { return '<option value="' + esc(c.id) + '">' + esc(c.name) + '</option>'; }).join('') +
        (cur ? '<option value="__out">Cho ra khỏi lớp</option>' : '') + '</select>';
    }
    // Tai khoan da vao lop ma chua gan ten -> giao vien chon ten cho em do
    function linkSel(s) {
      if (!freeNames.length) return '';
      return '<select class="tc-link" data-user="' + esc(s.id) + '" aria-label="Gắn tên cho ' + esc(s.name) + '">' +
        '<option value="">Gắn với tên trong danh sách…</option>' +
        freeNames.map(function (r) { return '<option value="' + esc(r.id) + '">' + esc(r.name) + '</option>'; }).join('') + '</select>';
    }
    var table = rows.length
      ? '<div class="admin-table-wrap"><table class="admin-table tc-roster"><thead><tr><th>#</th><th>Học sinh</th><th>Tài khoản trên web</th><th>Học gần nhất</th><th></th></tr></thead><tbody>' +
        rows.map(function (row, i) {
          var s = row.s;
          var acc = s
            ? '<button type="button" class="tc-stu" data-stu="' + esc(s.id) + '">✅ ' + esc(s.name) + '</button><div class="tr-email">' + esc(s.email) + '</div>'
            : '<span class="tc-nojoin">Chưa vào lớp</span>';
          var actions = [];
          if (row.r) {
            actions.push('<button type="button" class="tc-mini" data-rn="' + esc(row.r.id) + '">Sửa tên</button>');
            if (row.r.userId) actions.push('<button type="button" class="tc-mini" data-unlink="' + esc(row.r.id) + '">Gỡ tài khoản</button>');
            actions.push('<button type="button" class="tc-mini is-danger" data-delr="' + esc(row.r.id) + '">Xoá tên</button>');
          }
          if (s) actions.push(moveSel(s, selClass));
          if (row.extra) actions.push(linkSel(s));
          return '<tr class="' + (s ? '' : 'is-out') + (row.extra ? ' is-extra' : '') + '"><td class="tr-muted">' + (i + 1) + '</td>' +
            '<td><b>' + esc(row.name) + '</b>' + (row.extra ? ' <span class="tc-extra">chưa có trong danh sách</span>' : '') + '</td>' +
            '<td>' + acc + '</td>' +
            '<td>' + (s && s.lastActive ? vnDate(new Date(s.lastActive).getTime()) : '—') + '</td>' +
            '<td><div class="tc-row-actions">' + actions.join('') + '</div></td></tr>';
        }).join('') + '</tbody></table></div>'
      : '<p class="tr-muted">Lớp chưa có ai. Dán danh sách lớp ở dưới, rồi đưa mã lớp <b>' + esc(cls ? cls.code : '') + '</b> cho học sinh.</p>';
    return '<section class="admin-section"><div class="admin-section-title">👥 Danh sách lớp ' + esc(cls ? cls.name : '') +
        ' · <span class="' + (joined < rows.length ? 'tc-past' : '') + '">' + joined + '/' + rows.length + ' em đã vào lớp</span></div>' +
      (roster.length ? '<p class="tr-hint">Khi nhập mã lớp, học sinh chọn đúng tên mình trong danh sách này. Em nào chọn nhầm tên: bấm <b>Gỡ tài khoản</b> ở tên đó.</p>' : '') +
      table +
      '<details class="tc-none tc-paste"' + (roster.length ? '' : ' open') + '><summary>📋 ' + (roster.length ? 'Thêm tên vào danh sách lớp' : 'Dán danh sách lớp') + '</summary>' +
        '<p class="tr-hint">Mỗi dòng 1 học sinh. Copy thẳng từ Excel cũng được (cột STT, lớp… tự bỏ). Tên viết HOA sẽ tự đổi thành "Nguyễn Văn An". Tên đã có sẽ bỏ qua.</p>' +
        '<textarea id="tcRosterText" rows="8" placeholder="1. Lương Kim Chi&#10;2. Phan Minh Thông&#10;…"></textarea>' +
        '<button type="button" class="btn btn-primary" id="tcRosterAdd">Thêm vào danh sách</button></details>' +
      (none.length ? '<details class="tc-none"><summary>Tài khoản chưa vào lớp nào (' + none.length + ')</summary><ul>' +
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
    // O nhap diem giua ki / cuoi ki: go xong bam ra ngoai (hoac Enter) la luu
    $all('.dm-in', box).forEach(function (el) {
      el.addEventListener('change', function () { luuDiem(el); });
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter') el.blur(); });
    });
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
    // chon 'Chỉ một số phần' thi hien danh sach phan
    $all('input[name="scope"]', box).forEach(function (rb) {
      rb.addEventListener('change', function () {
        $('#tcParts', box).hidden = $('input[name="scope"]:checked', box).value !== 'parts';
      });
    });
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
      var scope = $('input[name="scope"]:checked', aForm).value;
      if (scope === 'parts' && !$all('input[name="part"]:checked', aForm).length) { alert('Chọn ít nhất 1 phần, hoặc chọn "Cả bài".'); return; }
      run(api('POST', '/api/admin/assignments', {
        classIds: ids, lessonUrl: $('#tcLesson', box).value, dueDate: $('#tcDue', box).value, note: $('#tcNote', box).value,
        parts: $('input[name="scope"]:checked', aForm).value === 'parts' ? $all('input[name="part"]:checked', aForm).map(function (i) { return i.value; }) : []
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
    var addBtn = $('#tcRosterAdd', box);
    if (addBtn) addBtn.addEventListener('click', function () {
      var text = $('#tcRosterText', box).value;
      if (!text.trim() || busy) return;
      run(api('POST', '/api/admin/roster', { classId: selClass, text: text })).then(function (d) {
        if (d && d.ok) alert('Đã thêm ' + d.added + ' tên vào danh sách lớp.' + (d.skipped.length ? ' Bỏ qua ' + d.skipped.length + ' tên đã có: ' + d.skipped.join(', ') : ''));
      });
    });
    $all('[data-rn]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        var r = (C.roster || []).filter(function (x) { return x.id === b.getAttribute('data-rn'); })[0];
        var name = window.prompt('Sửa tên học sinh:', r.name);
        if (name && name.trim() && name.trim() !== r.name) run(api('POST', '/api/admin/roster/' + r.id, { name: name.trim() }));
      });
    });
    $all('[data-unlink]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        if (window.confirm('Gỡ tài khoản khỏi tên này? Học sinh đó sẽ phải chọn lại tên khi vào trang chủ.')) {
          run(api('POST', '/api/admin/roster/' + b.getAttribute('data-unlink'), { unlink: true }));
        }
      });
    });
    $all('[data-delr]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        if (window.confirm('Xoá tên này khỏi danh sách lớp?')) run(api('DELETE', '/api/admin/roster/' + b.getAttribute('data-delr')));
      });
    });
    $all('.tc-link', box).forEach(function (sel) {
      sel.addEventListener('change', function () {
        if (sel.value) run(api('POST', '/api/admin/roster/' + sel.value, { userId: sel.getAttribute('data-user') }));
      });
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
    var STATUS = { done: 'Đúng hạn', late: 'Nộp muộn', todo: 'Chưa làm', overdue: 'Quá hạn chưa làm', nojoin: 'Chưa vào lớp trên web' };
    var rows = [['Học sinh', 'Email', 'Trạng thái', 'Số phần đã làm', 'Số câu đúng', 'Ngày làm']];
    assignRows(a).forEach(function (r) {
      var doneAll = r.status === 'done' || r.status === 'late';
      rows.push([r.name, r.s ? r.s.email : '', STATUS[r.status], r.doneParts + '/' + r.need, doneAll && r.total ? r.correct + '/' + r.total : '', doneAll ? vnDate(r.doneMs) : '']);
    });
    var text = '﻿' + lessonLabel(a.lessonUrl) + ' · ' + partsText(a) + ' · hạn ' + vnDate(a.dueMs) + '\n' + rows.map(function (r) {
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
