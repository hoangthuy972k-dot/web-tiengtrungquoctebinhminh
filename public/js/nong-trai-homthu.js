/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — HOM THU LANG 信箱 (2026-11-24): luyen doc moi ngay
   · Moi ngay 1–2 la thu ngan tu nguoi trong lang (Bà Lan, Chú Tư, Cô Mai, Minh Minh, Ông Bách).
     Hom thu dung canh nha; co do dung len khi co thu chua doc (dung thang trong goc nhin 3D nhu .nt-nv).
   · Doc thu: pinyin an mac dinh (nut bat/tat), bam vao tu -> pinyin + nghia + doc to. 1 cau trong thu la cau bai em da hoc.
   · 2 cau hoi doc hieu (may chu cham) -> hien ban dich -> "Gửi" (may chu kiem kho + tru hang) -> buu thiep cam on + xu.
   · "Thư đã nhận": 30 thu gan nhat, doc lai + nghe.
   May chu: nong-trai-homthu.js (/api/farm/homthu, /doc, /tl, /gui).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$, $all = N.$all, esc = N.esc, img = N.img;
  var H = { d: null, mo: '', ket: null, tai: false, el: null, tra: null };
  var KHOA_PY = 'hyv_nt_ht_py';

  function batPy() { try { return localStorage.getItem(KHOA_PY) === '1'; } catch (e) { return false; } }
  function datPy(v) { try { localStorage.setItem(KHOA_PY, v ? '1' : '0'); } catch (e) { /* bo qua */ } }
  function soMoi() { var k = S.st && S.st.kt && S.st.kt.homthu; return k ? k.moi || 0 : 0; }

  function tai() {
    if (H.tai) return;
    H.tai = true;
    N.goi('/api/farm/homthu').then(function (r) {
      H.tai = false; H.d = r;
      var bd = N.bangDang();
      if (bd && bd.loai === 'homthu') N.veBang();
      if (r.st && !S.tham) N.nhanTrangThai(r.st); // co do cap nhat theo thu vua phat
    }, function (e) { H.tai = false; N.bao(e.message, 'loi'); });
  }
  function thuCua(id) {
    if (!H.d) return null;
    return H.d.ds.filter(function (t) { return t.id === id; })[0] || H.d.al.filter(function (t) { return t.id === id; })[0] || null;
  }
  function thayThu(t) {
    if (!H.d || !t) return;
    ['ds', 'al'].forEach(function (k) { H.d[k] = H.d[k].map(function (x) { return x.id === t.id ? t : x; }); });
  }
  function chuThu(t) {
    return t.dong.map(function (l) { return l.tk.map(function (w) { return /[㐀-鿿]/.test(w.z) || /^[，：！？。]+$/.test(w.z) ? w.z : ''; }).join(''); }).join('');
  }
  function ngayVn(k) { var p = String(k || '').split('-'); return p.length === 3 ? +p[2] + '/' + +p[1] : k; }

  /* ---------- 1) hom thu canh nha tren ban do ---------- */
  function datHom() {
    var el = H.el;
    if (!el || !el.isConnected) return;
    var d = N.duLieuBanDo(), nha = d && d.o.filter(function (o) { return o.k === 'nha'; })[0];
    if (!nha) { el.remove(); return; }
    var T = S.o, x = nha.x - 0.08, y = nha.y + 1.98;
    el.style.left = (x * T) + 'px';
    el.style.top = (y * T) + 'px';
    el.style.width = Math.round(T * 0.78) + 'px';
    el.style.zIndex = Math.round(N.zSau(x, y, 0) * 10) + 4;
  }
  function veHom() {
    if (H.el && H.el.isConnected) H.el.remove();
    H.el = null;
    var dat = $('#ntDat');
    if (!dat || S.tham || !S.st || !S.cat) return;
    var el = document.createElement('div');
    el.className = 'ht-hom';
    el.innerHTML = '<button type="button" class="ht-hom-nut" aria-label="Hòm thư làng">' +
      '<img class="ht-hom-hinh" src="' + N.anh('homthu-hom') + '" alt="" draggable="false">' +
      '<img class="ht-co" src="' + N.anh('homthu-co') + '" alt="" draggable="false">' +
      '<img class="ht-bay" src="' + N.anh('homthu-thu') + '" alt="" draggable="false"></button>';
    H.el = el;
    dat.appendChild(el);
    datHom();
    capNhatCo();
    el.querySelector('button').addEventListener('click', function (e) { e.stopPropagation(); moHom(); });
  }
  function capNhatCo() {
    var n = soMoi();
    if (H.el) {
      H.el.classList.toggle('co-thu', n > 0);
      var b = H.el.querySelector('button');
      if (b) b.setAttribute('aria-label', 'Hòm thư làng' + (n > 0 ? ' — có ' + n + ' thư mới' : ''));
    }
    var c = $('#ntHtCham');
    if (c) c.hidden = !(n > 0);
    var phu = $('#ntHtPhu');
    if (phu) phu.textContent = n > 0 ? n + ' thư mới · đọc thư, giúp người trong làng' : '信箱 · đọc thư, giúp người trong làng';
    var tc = $('#ntThemCham');
    if (tc && n > 0) tc.hidden = false;
  }
  function moHom() {
    if (S.tham && N.veNha) N.veNha();
    H.mo = ''; H.ket = null; H.tra = null; H.d = null;
    N.moBang('homthu', 'moi');
  }
  N.sauVe.push(veHom);
  N.sauXoay.push(datHom);
  N.sau.push(capNhatCo);

  /* ---------- 2) bang hom thu ---------- */
  function htmlTu(w, py) {
    if (w.v === undefined && w.p === undefined) return '<span class="ht-dau">' + esc(w.z) + '</span>';
    var trong = py && w.p ? '<ruby>' + esc(w.z) + '<rt>' + esc(w.p) + '</rt></ruby>' : esc(w.z);
    return '<button type="button" class="ht-tu" data-z="' + esc(w.z) + '" data-p="' + esc(w.p || '') + '" data-v="' + esc(w.v || '') + '">' + trong + '</button>';
  }
  function htmlThu(t, py) {
    var h = '<article class="ht-giay' + (py ? ' co-py' : '') + '" lang="zh">';
    t.dong.forEach(function (l) {
      var lop = 'ht-dong' + (l.mo ? ' mo' : '') + (l.ky ? ' ky' : '') + (l.hoc ? ' hoc' : '');
      h += '<p class="' + lop + '">' + (l.hoc ? '<span class="ht-hoc" lang="vi" title="Câu trong bài em đã học">📖</span>' : '') +
        l.tk.map(function (w) { return htmlTu(w, py); }).join('') +
        (l.hoc && py && l.py && l.tk.some(function (w) { return w.v !== undefined && !w.p; }) ? '<small class="ht-py-cau" lang="vi">' + esc(l.py) + '</small>' : '') +
        (l.vn ? '<small class="ht-vn" lang="vi">' + esc(l.vn) + '</small>' : '') + '</p>';
    });
    return h + '<img class="ht-tem" src="' + N.anh('homthu-tem') + '" alt="" draggable="false"></article>';
  }
  function htmlCauHoi(t) {
    var h = '<div class="ht-cau">';
    t.q.forEach(function (q, i) {
      var tl = q.chon !== undefined;
      h += '<div class="ht-q" data-q="' + i + '"><p class="ht-q-lenh"><b>Câu ' + (i + 1) + ':</b> ' + esc(q.lenh) + '</p><div class="ht-lua' + (q.t === 'dap' ? ' dai' : '') + '">';
      q.lua.forEach(function (o, j) {
        var lop = 'ht-o';
        if (tl && j === q.dap) lop += ' dung';
        else if (tl && j === q.chon) lop += ' sai';
        var noi = o.hinh ? img(o.hinh) + '<span>' + esc(o.chu) + '</span>' : o.emo ? '<span class="ht-emo" aria-hidden="true">' + o.emo + '</span><span>' + esc(o.chu) + '</span>'
          : o.zh ? '<span lang="zh">' + esc(o.zh) + '</span>' : '<span>' + esc(o.chu) + '</span>';
        h += '<button type="button" class="' + lop + '" data-o="' + j + '"' + (tl ? ' disabled' : '') + '>' + noi + '</button>';
      });
      h += '</div>';
      if (tl) h += '<p class="ht-q-kq ' + (q.dung ? 'dung' : 'sai') + '">' + (q.dung ? '✔ Đúng rồi!' : '✘ Chưa đúng — đáp án đúng đã được tô xanh.') + '</p>';
      h += '</div>';
    });
    return h + '</div>';
  }
  function htmlGui(t) {
    var h = '<div class="ht-gui">';
    if (t.loai === 'xin' && t.can) {
      var c = t.can, co = (S.st.kho || {})[c.k] || 0, du = co >= c.n;
      h += '<div class="ht-gui-mon">' + img('sp-' + c.k) + '<p><b>Gửi ' + c.n + ' ' + esc(c.vnLg) + ' ' + esc(c.vn.toLowerCase()) + '</b> <span lang="zh">' + esc(c.zh) + '</span> cho ' + esc(t.ai.ten) +
        '<small>Kho em có: <b class="' + (du ? 'du' : 'thieu') + '">' + co + '/' + c.n + '</b> · nhận ' + img('ic-xu') + ' <b>' + c.thuong + ' xu</b>' +
        (t.dungHet ? ' (cao hơn giá bán ' + c.gt + ' xu)' : ' (bằng giá hàng — lần sau đọc kỹ để được thưởng thêm)') + '</small></p></div>' +
        '<button type="button" class="nt-nut nt-nut-xanh ht-nut-gui" data-ht-gui' + (du ? '' : ' disabled') + '>📮 Gửi</button>' +
        (du ? '' : '<p class="ht-thieu">Kho chưa đủ — thu hoạch thêm rồi quay lại gửi trước ngày ' + ngayVn(t.het) + ' nhé.</p>');
    } else if (t.loai === 'hoi' && t.dapCau) {
      h += '<p class="ht-dap">✉️ Thư trả lời của em: <b lang="zh">' + esc(t.dapCau.zh) + '</b><small>' + esc(t.dapCau.py) + ' — ' + esc(t.dapCau.vn) + '</small></p>' +
        '<p class="ht-thuong">Nhận ' + img('ic-xu') + ' <b>' + t.thuong + ' xu</b></p>' +
        '<button type="button" class="nt-nut nt-nut-xanh ht-nut-gui" data-ht-gui>📮 Gửi thư trả lời</button>';
    }
    return h + '</div>';
  }
  function htmlThiep(t) {
    if (!t.thiep) return '';
    return '<div class="ht-thiep"><img src="' + N.anh('homthu-thu') + '" alt="" draggable="false"><div><p class="ht-thiep-zh" lang="zh">' + esc(t.thiep.zh) +
      '</p><small>' + esc(t.thiep.py) + '</small><small>' + esc(t.thiep.vn) + '</small><em>— ' + esc(t.ai.ten) + ' <span lang="zh">' + esc(t.ai.zh) + '</span></em></div>' +
      '<button type="button" class="ht-loa" data-ht-doc-thiep aria-label="Nghe bưu thiếp">🔊</button></div>';
  }
  function ganTu(than) {
    $all('.ht-tu', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var z = b.getAttribute('data-z'), p = b.getAttribute('data-p'), v = b.getAttribute('data-v');
        $all('.ht-tu.bat', than).forEach(function (x) { x.classList.remove('bat'); });
        b.classList.add('bat');
        var tra = $('.ht-tra', than);
        if (tra) {
          tra.hidden = false;
          tra.innerHTML = '<b lang="zh">' + esc(z) + '</b>' + (p ? ' <span>' + esc(p) + '</span>' : '') +
            (v ? ' — ' + esc(v) : /[㐀-鿿]/.test(z) ? ' — <i>nghĩa cả câu hiện sau khi em trả lời câu hỏi</i>' : '');
        }
        if (/[㐀-鿿]/.test(z)) N.doc(z);
      });
    });
  }

  function veDs(than) {
    var d = H.d, h = '<div class="ht">';
    h += '<p class="ht-gt">📮 Mỗi ngày người trong làng gửi <b>1–2 lá thư</b> nhờ em giúp. Đọc thư, trả lời câu hỏi rồi bấm <b>Gửi</b>. ' +
      'Thư để được <b>2 ngày</b>. Bấm vào từ để xem <b>pinyin + nghĩa</b>.</p>';
    if (!d.coBai && !d.ds.length) {
      h += '<p class="nt-trong">📭 Hòm thư trống. Em hãy học ít nhất một bài (hoặc bài thầy cô giao) — người trong làng sẽ viết thư có câu em vừa học!</p>';
    } else if (!d.ds.length) {
      h += '<p class="nt-trong">📭 Hôm nay em đã đọc hết thư rồi. Mai lại có thư mới nhé!</p>';
    } else {
      h += '<ul class="ht-ds">' + d.ds.map(function (t) {
        return '<li><button type="button" class="ht-phong' + (t.doc ? '' : ' moi') + '" data-ht-mo="' + esc(t.id) + '">' + img('homthu-thu') +
          '<span class="ht-phong-chu"><b>' + t.ai.emo + ' ' + esc(t.ai.ten) + ' <span lang="zh">' + esc(t.ai.zh) + '</span></b>' +
          '<small>' + (t.loai === 'hoi' ? 'Hỏi em một câu' : 'Nhờ em gửi đồ') + ' · ' + (t.homNay ? 'hôm nay' : 'hôm qua') + ' · hạn đến hết ' + ngayVn(t.het) + '</small></span>' +
          (t.doc ? (t.daTl ? '<em class="ht-nhan xanh">chờ gửi</em>' : '<em class="ht-nhan">đang đọc</em>') : '<em class="ht-nhan do">mới</em>') + '</button></li>';
      }).join('') + '</ul>';
    }
    than.innerHTML = h + '</div>';
    $all('[data-ht-mo]', than).forEach(function (b) {
      b.addEventListener('click', function () { H.mo = b.getAttribute('data-ht-mo'); N.tieng('mua'); N.veBang(); });
    });
  }

  function veThu(than, t) {
    var py = batPy();
    var h = '<div class="ht"><div class="ht-thanh"><button type="button" class="nt-nut ht-ve" data-ht-ve>← Hòm thư</button>' +
      '<button type="button" class="nt-nut ht-py' + (py ? ' bat' : '') + '" data-ht-py aria-pressed="' + py + '">' + (py ? 'Ẩn pinyin' : 'Hiện pinyin') + '</button>' +
      '<button type="button" class="nt-nut ht-loa" data-ht-doc aria-label="Nghe đọc cả thư">🔊</button></div>' +
      htmlThu(t, py) + '<p class="ht-tra" aria-live="polite" hidden></p>';
    h += htmlCauHoi(t);
    if (t.daTl && !t.xong) h += htmlGui(t);
    than.innerHTML = h + '</div>';
    ganTu(than);
    $('[data-ht-ve]', than).addEventListener('click', function () { H.mo = ''; N.veBang(); });
    $('[data-ht-py]', than).addEventListener('click', function () { datPy(!batPy()); N.veBang(); });
    $('[data-ht-doc]', than).addEventListener('click', function () { N.doc(chuThu(t)); });
    $all('.ht-q', than).forEach(function (qe) {
      var i = +qe.getAttribute('data-q');
      $all('[data-o]', qe).forEach(function (b) {
        b.addEventListener('click', function () {
          if (b.disabled) return;
          $all('[data-o]', qe).forEach(function (x) { x.disabled = true; });
          N.goi('/api/farm/homthu/tl', { id: t.id, i: i, chon: +b.getAttribute('data-o') }).then(function (r) {
            N.tieng(r.dung ? 'dung' : 'sai');
            thayThu(r.thu);
            N.veBang();
          }, function (e) { $all('[data-o]', qe).forEach(function (x) { x.disabled = false; }); N.bao(e.message, 'loi'); if (e.status === 400) tai(); });
        });
      });
    });
    var g = $('[data-ht-gui]', than);
    if (g) g.addEventListener('click', function () {
      g.disabled = true;
      N.goi('/api/farm/homthu/gui', { id: t.id }).then(function (r) {
        if (r.st) N.nhanTrangThai(r.st);
        H.d = { ds: r.ds, al: r.al, coBai: r.coBai, soNgay: r.soNgay, hom: r.hom };
        H.ket = { thu: r.thu, nhan: r.nhan };
        H.mo = '';
        N.tieng('len');
        N.veBang();
      }, function (e) { g.disabled = false; N.bao(e.message, 'loi'); N.tieng('sai'); });
    });
    // mo thu = da doc (co do ha xuong)
    if (!t.doc) {
      t.doc = true;
      N.goi('/api/farm/homthu/doc', { id: t.id }).then(function (r) { if (r.st) N.nhanTrangThai(r.st); }, function () { /* bo qua */ });
    }
  }

  function veKet(than) {
    var k = H.ket, t = k.thu, n = k.nhan || {};
    var h = '<div class="nt-chuc ht-ket"><h2>📮 Đã gửi cho ' + esc(t.ai.ten) + '!</h2>' + htmlThiep(t) +
      '<p class="ht-nhan-qua">+' + img('ic-xu') + ' <b>' + n.xu + ' xu</b> · +' + n.xp + ' kinh nghiệm' +
      (n.gui ? ' · đã gửi ' + n.gui.n + ' ' + esc((S.cat.SP[n.gui.k] || {}).vn || '').toLowerCase() : '') + '</p>';
    if (n.tt) {
      h += '<p class="ht-qua-tt">' + img(n.tt.k) + '<span>🎁 ' + esc(t.ai.ten) + ' tặng thêm <b>' + esc(n.tt.vn) + '</b> <span lang="zh">' + esc(n.tt.zh) + '</span> ' + esc(n.tt.py) +
        ' — đã cất vào túi đồ, đặt lên nông trại nhé!</span></p>';
    }
    h += '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-ht-xong>← Hòm thư</button></div></div>';
    than.innerHTML = h;
    if (t.thiep) N.doc(t.thiep.zh);
    if (N.fx && N.fx.mung) N.fx.mung({ x: innerWidth / 2, y: innerHeight * 0.4 }, !!n.tt);
    var dt = $('[data-ht-doc-thiep]', than);
    if (dt) dt.addEventListener('click', function () { N.doc(t.thiep.zh); });
    $('[data-ht-xong]', than).addEventListener('click', function () { H.ket = null; N.veBang(); });
  }

  function veAlbum(than) {
    var d = H.d, py = batPy();
    var h = '<div class="ht"><p class="ht-gt">📖 30 lá thư gần nhất em đã giúp. Bấm vào để đọc lại, nghe đọc 🔊 và xem bản dịch.</p>';
    if (!d.al.length) h += '<p class="nt-trong">Chưa có thư nào — đọc và gửi thư ở mục "Thư mới" nhé!</p>';
    else {
      h += '<div class="ht-thanh"><button type="button" class="nt-nut ht-py' + (py ? ' bat' : '') + '" data-ht-py aria-pressed="' + py + '">' + (py ? 'Ẩn pinyin' : 'Hiện pinyin') + '</button></div>';
      h += d.al.map(function (t) {
        return '<details class="ht-al" data-ht-al="' + esc(t.id) + '"><summary>' + img('homthu-thu') + '<span><b>' + t.ai.emo + ' ' + esc(t.ai.ten) + '</b><small>' + ngayVn(t.ngay) + ' · ' +
          (t.loai === 'hoi' ? 'trả lời câu hỏi' : (t.can ? 'gửi ' + t.can.n + ' ' + esc(t.can.vnLg) + ' ' + esc(t.can.vn.toLowerCase()) : '')) + (t.dungHet ? ' · đọc hiểu đúng hết ✔' : '') + '</small></span></summary>' +
          '<div class="ht-al-than"><button type="button" class="nt-nut ht-loa" data-ht-doc-al="' + esc(t.id) + '" aria-label="Nghe đọc thư">🔊 Nghe thư</button>' +
          htmlThu(t, py) + htmlThiep(t) + '</div></details>';
      }).join('');
      h += '<p class="ht-tra" aria-live="polite" hidden></p>';
    }
    than.innerHTML = h + '</div>';
    ganTu(than);
    var nPy = $('[data-ht-py]', than);
    if (nPy) nPy.addEventListener('click', function () { datPy(!batPy()); N.veBang(); });
    $all('[data-ht-doc-al]', than).forEach(function (b) {
      b.addEventListener('click', function () { var t = thuCua(b.getAttribute('data-ht-doc-al')); if (t) N.doc(chuThu(t)); });
    });
    $all('[data-ht-doc-thiep]', than).forEach(function (b) {
      b.addEventListener('click', function () { var t = thuCua(b.closest('[data-ht-al]').getAttribute('data-ht-al')); if (t && t.thiep) N.doc(t.thiep.zh); });
    });
    // o tra tu dat ngay duoi la thu dang mo
    $all('details.ht-al', than).forEach(function (dt) {
      dt.addEventListener('toggle', function () { var tra = $('.ht-tra', than); if (dt.open && tra) { tra.hidden = true; dt.querySelector('.ht-al-than').appendChild(tra); } });
    });
  }

  N.dangKy('homthu', function (than) {
    var bd = N.bangDang(), tab = (bd && bd.tab) || 'moi';
    if (tab !== 'moi' && tab !== 'al') tab = 'moi';
    if (bd) bd.tab = tab;
    $('#ntBangTit').textContent = 'Hòm thư làng 信箱';
    var n = H.d ? H.d.ds.filter(function (t) { return !t.doc; }).length : 0;
    N.datTab([['moi', '📬 Thư mới' + (n ? ' (' + n + ')' : '')], ['al', '📖 Thư đã nhận']], tab);
    if (!H.d || !S.st) { than.innerHTML = '<p class="nt-trong">Đang mở hòm thư…</p>'; tai(); return; }
    if (tab === 'al') { H.mo = ''; H.ket = null; return veAlbum(than); }
    if (H.ket) return veKet(than);
    var t = H.mo && H.d.ds.filter(function (x) { return x.id === H.mo; })[0];
    if (t) return veThu(than, t);
    H.mo = '';
    veDs(than);
  });

  // nut trong "⋯ Thêm" (nhom Học & thử thách)
  function taoNut() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || $('#ntThemHomThu')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-them-o'; b.id = 'ntThemHomThu'; b.setAttribute('data-mo', 'homthu');
    b.innerHTML = '<img src="' + N.anh('homthu-hom') + '" alt="" draggable="false"><span class="nt-muc-chu"><b>Hòm thư làng <span lang="zh">信箱</span></b>' +
      '<small id="ntHtPhu">信箱 · đọc thư, giúp người trong làng</small></span><i class="nt-cham" id="ntHtCham" hidden></i>';
    var sau = luoi.querySelector('[data-mo="kt-truyen"]');
    luoi.insertBefore(b, sau ? sau.nextSibling : null);
    b.addEventListener('click', function (e) { e.stopPropagation(); moHom(); });
  }
  taoNut();
  capNhatCo();
})();
