/* PinyinCheDo — MOT quy tac hien phien am cho ca web.
   ------------------------------------------------------------------
   Quy tac (co giao duyet):
   · HSK 1 (ca HSK 1 3.0) va YCT: noi dang HOC (trang bai, the nho, on hom nay)
     thi hien pinyin duoi chu Han; van co lua chon lam mo.
   · HSK 2 tro len: an mac dinh, cham / di chuot vao "👁" de hien TUNG dong.
   · Tro choi va bai kiem tra: khong co pinyin (nhu cu) — tru cau nghe khi may
     khong doc duoc tieng Trung (ngu canh 'nghe-du-phong').
   · Hoc sinh tu chon (luu localStorage 'hyv_phien_am'):
       'cap'  = Theo cap do (mac dinh) · 'hien' = Luon hien · 'an' = An, cham de hien
     Lua chon chi ap dung noi dang hoc; tro choi / kiem tra van khong co pinyin.

   API:
     PinyinCheDo.nen(level, context)  -> 'hien' | 'an' | 'khong'
         level   : 'hsk1' | 'hsk1v3' | 'yct' | 'hsk2v3' | 'hsk5' ... , so (1–6),
                   hoac duong dan trang bai ('/lessons/hsk2v3-bai-5.html')
         context : 'hoc' (trang bai) | 'the' (the nho) | 'on' (on hom nay / on tap)
                   | 'game' | 'thi' | 'nghe-du-phong'
     PinyinCheDo.hien(level, context) -> true neu nen hien ngay
     PinyinCheDo.cheDo() / datCheDo(v) -> doc / ghi lua chon cua hoc sinh
     PinyinCheDo.cap(level)            -> ma cap da chuan hoa ('hsk1v3', 'hsk2', ...)
     PinyinCheDo.laSoCap(level)        -> true voi HSK 1 / HSK 1 3.0 / YCT
     PinyinCheDo.html(py, level, context) -> HTML pinyin theo dung quy tac
         ('hien': <span class="pcd-py">, 'an': nut "👁 Pinyin" + dong an, 'khong': '')
     Su kien: window 'pinyinchedo' (detail: {cheDo}) khi hoc sinh doi lua chon.  */
(function () {
  'use strict';
  if (window.PinyinCheDo) return;

  var KEY = 'hyv_phien_am';
  var CU = 'hyv_py_bai'; // nut cu "Pinyin cau: hien / mo" tren trang bai (doc lai neu chua chon kieu moi)
  var SO_CAP = { hsk1: 1, hsk1v3: 1, yct: 1 };
  var NHAN = { cap: 'Theo cấp độ (mặc định)', hien: 'Luôn hiện', an: 'Ẩn, chạm để hiện' };

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function cap(level) {
    if (typeof level === 'number') return level <= 1 ? 'hsk1' : 'hsk' + level;
    var s = String(level == null ? '' : level).toLowerCase();
    var m = s.match(/\/(?:([a-z0-9]+)-)?bai-\d+(?:\.html)?/);
    if (m) return m[1] || 'hsk2'; // /lessons/bai-N.html = HSK 2 bo cu
    if (/^\d$/.test(s)) return s === '1' ? 'hsk1' : 'hsk' + s;
    return s || 'hsk2';
  }
  function laSoCap(level) { return !!SO_CAP[cap(level)]; }

  function cheDo() {
    try {
      var v = localStorage.getItem(KEY);
      if (v === 'cap' || v === 'hien' || v === 'an') return v;
      var cu = localStorage.getItem(CU);
      if (cu === 'mo') return 'an';
      if (cu === 'hien') return 'hien';
    } catch (e) { /* localStorage bi chan */ }
    return 'cap';
  }
  function datCheDo(v) {
    if (v !== 'cap' && v !== 'hien' && v !== 'an') v = 'cap';
    try { localStorage.setItem(KEY, v); } catch (e) { /* bo qua */ }
    try { window.dispatchEvent(new CustomEvent('pinyinchedo', { detail: { cheDo: v } })); } catch (e) { /* bo qua */ }
  }

  function nen(level, context) {
    var ctx = context || 'hoc';
    if (ctx === 'nghe-du-phong') return 'hien';
    if (ctx === 'game' || ctx === 'thi') return 'khong';
    var c = cheDo();
    if (c === 'hien') return 'hien';
    if (c === 'an') return 'an';
    return laSoCap(level) ? 'hien' : 'an';
  }
  function hien(level, context) { return nen(level, context) === 'hien'; }

  function html(py, level, context) {
    if (!py) return '';
    var m = nen(level, context);
    if (m === 'khong') return '';
    if (m === 'hien') return '<span class="pcd-py" lang="zh-Latn">' + esc(py) + '</span>';
    return '<button type="button" class="pcd-nut" data-pcd-mo aria-expanded="false">👁 Pinyin</button>' +
      '<span class="pcd-py" lang="zh-Latn" hidden>' + esc(py) + '</span>';
  }
  // Nut "👁 Pinyin" do html() tao ra: cham de hien / an dong ngay sau no
  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest && e.target.closest('[data-pcd-mo]');
    if (!b) return;
    var n = b.nextElementSibling;
    if (!n) return;
    e.stopPropagation();
    n.hidden = !n.hidden;
    b.setAttribute('aria-expanded', n.hidden ? 'false' : 'true');
  });
  // Doi lua chon o tab khac -> bao cho trang nay
  window.addEventListener('storage', function (e) {
    if (e.key !== KEY && e.key !== CU) return;
    try { window.dispatchEvent(new CustomEvent('pinyinchedo', { detail: { cheDo: cheDo() } })); } catch (er) { /* bo qua */ }
  });

  window.PinyinCheDo = {
    KEY: KEY, NHAN: NHAN,
    nen: nen, hien: hien, cheDo: cheDo, datCheDo: datCheDo,
    cap: cap, laSoCap: laSoCap, html: html
  };
})();
