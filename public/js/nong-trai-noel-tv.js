/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Hoc tu Noel 圣诞词汇 (2026-11-18). May chu: nong-trai-noel-tv.js (ra de, giu dap an, cham, trao qua).
   Bang 'noel-tv' co 3 the:
   - 'the'  : 12 the tu (hinh, chu Han to, pinyin, nghia, cham de nghe)
   - 'cau'  : 4 cau mau ghep tu Noel voi tu rat co ban (moi tu co pinyin, tu Noel to do)
   - 'thu'  : luyen tap 10 cau (nghia / chu / nghe / pinyin) — dung 7/10 la qua, lan dau nhan qua
   Loi vao: nut "📖 Học từ Noel" trong bang Thêm (trong mua le) + nut tren bang chao mua Noel.
   Hoc xong thi cac cau hoi tren nong trai moi duoc hoi ca tu Noel (may chu quyet dinh).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, S = N.S;
  var V = { d: null, luc: 0, nghe: {}, q: null, fb: null, ket: null, gui: false, hen: 0 };
  var TEN_KIEU = { chu: 'Từ này nghĩa là gì?', nghia: 'Chọn chữ Hán đúng', nghe: 'Nghe rồi chọn chữ Hán', py: 'Chọn pinyin đúng' };

  function mua() { var n = S.st && S.st.kt && S.st.kt.noel; return !!(n && n.mua); }
  function daHoc() { var x = S.st && S.st.kt && S.st.kt.ntv; return !!(x && x.da); }
  function giam() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function giai(s) { try { return decodeURIComponent(atob(s)); } catch (e) { return ''; } }
  function laBang() { var b = N.bangDang(); return b && b.loai === 'noel-tv'; }
  function veLai() { if (laBang()) N.veBang(); }
  function tai() {
    return N.goi('/api/farm/noel/tv').then(function (r) {
      V.d = r; V.luc = Date.now();
      if (r.dang && !V.q) { V.q = r.dang; V.ket = null; V.fb = null; }
      return r;
    });
  }
  function moBang(tab) { N.dongThiTran(); if (S.tham) N.veNha(); N.moBang('noel-tv', tab || 'the'); }
  N.moTuNoel = moBang;

  /* ---------------- bang ---------------- */
  N.dangKy('noel-tv', function (than, b) {
    $('#ntBangTit').textContent = '📖 Học từ Noel 圣诞词汇';
    var tab = b.tab || 'the';
    b.tab = tab;
    N.datTab([['the', '🃏 Thẻ từ'], ['cau', '💬 Câu mẫu'], ['thu', '✏️ Luyện tập']], tab);
    if (!V.d) {
      than.innerHTML = '<p class="nt-trong">Đang tải…</p>';
      tai().then(veLai, function (e) { than.innerHTML = '<p class="nt-trong">' + esc(e.message) + '</p>'; });
      return;
    }
    if (tab === 'cau') veCau(than);
    else if (tab === 'thu') veThu(than);
    else veThe(than);
    $all('[data-ntv-tab]', than).forEach(function (x) {
      x.addEventListener('click', function () { var bb = N.bangDang(); if (bb) { bb.tab = x.getAttribute('data-ntv-tab'); N.veBang(); than.scrollTop = 0; } });
    });
  });

  function dauBai() {
    var r = V.d;
    if (r.em) return '<div class="ntv-dau xong"><span aria-hidden="true">✅</span><p><b>Em đã học xong bài Noel</b> (đúng ' + r.em.dung + '/' + r.so + ').' +
      ' Từ giờ câu hỏi trên nông trại có thể hỏi cả các từ Noel này — ôn lại thẻ từ cho nhớ nhé!</p></div>';
    return '<div class="ntv-dau"><span aria-hidden="true">🎄</span><p><b>3 bước:</b> nghe 12 thẻ từ → đọc câu mẫu → luyện tập ' + r.so + ' câu.' +
      ' Đúng từ <b>' + r.can + '/' + r.so + '</b> câu là nhận quà 🎁 và mở câu hỏi Noel trên nông trại.</p></div>';
  }

  function veThe(than) {
    var r = V.d, n = Object.keys(V.nghe).length;
    var h = '<div class="ntv">' + dauBai() + '<div class="ntv-luoi">';
    r.tu.forEach(function (v, i) {
      h += '<button type="button" class="ntv-the' + (V.nghe[v.zh] ? ' da' : '') + '" data-doc="' + esc(v.zh) + '" data-ntv-the="' + i + '" style="--i:' + i + '">' +
        '<span class="ntv-the-hinh">' + N.img(v.h) + '</span>' +
        '<b lang="zh">' + esc(v.zh) + '</b><span class="ntv-py">' + esc(v.py) + '</span><i>' + esc(v.vn) + '</i>' +
        '<em class="ntv-loa" aria-hidden="true">🔊</em></button>';
    });
    h += '</div><p class="ntv-dem" id="ntvDem">' + (n >= r.tu.length ? '🎧 Em đã nghe đủ ' + r.tu.length + ' từ — giỏi quá!' : '🎧 Chạm vào thẻ để nghe · đã nghe <b>' + n + '/' + r.tu.length + '</b>') + '</p>' +
      '<div class="ntv-nut-hang"><button type="button" class="nt-nut ntv-tiep" data-ntv-tab="cau">Tiếp: Câu mẫu →</button></div></div>';
    than.innerHTML = h;
    $all('[data-ntv-the]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        var v = r.tu[+b.getAttribute('data-ntv-the')];
        V.nghe[v.zh] = 1;
        b.classList.add('da');
        b.classList.remove('nay'); void b.offsetWidth; b.classList.add('nay');
        var k = Object.keys(V.nghe).length, dem = $('#ntvDem');
        if (dem) dem.innerHTML = k >= r.tu.length ? '🎧 Em đã nghe đủ ' + r.tu.length + ' từ — giỏi quá!' : '🎧 Chạm vào thẻ để nghe · đã nghe <b>' + k + '/' + r.tu.length + '</b>';
      });
    });
  }

  function veCau(than) {
    var r = V.d;
    var h = '<div class="ntv"><p class="nt-meo">Chạm vào từng từ để nghe. <span class="ntv-mau">Chữ đỏ</span> là từ Noel; các từ còn lại là từ cơ bản em đã gặp (我 wǒ, 很 hěn, 喜欢 xǐhuan, 是 shì, 的 de…).</p>';
    r.cau.forEach(function (c, i) {
      h += '<div class="ntv-cau" style="--i:' + i + '"><div class="ntv-cau-tu" lang="zh">';
      // dau cau dinh lien voi tu dung truoc (khong roi xuong dong mot minh)
      c.ds.forEach(function (w, j) {
        if (!w.py) return;
        var dau = '';
        for (var k = j + 1; k < c.ds.length && !c.ds[k].py; k++) dau += c.ds[k].zh;
        h += '<span class="ntv-cum"><button type="button" class="ntv-tu' + (w.n ? ' n' : '') + '" data-doc="' + esc(w.zh) + '"><small>' + esc(w.py) + '</small><b>' + esc(w.zh) + '</b></button>' +
          (dau ? '<span class="ntv-dau-cau">' + esc(dau) + '</span>' : '') + '</span>';
      });
      h += '</div><p class="ntv-cau-py">' + esc(c.py) + '</p><p class="ntv-cau-vn">' + esc(c.vn) + '</p>' +
        '<button type="button" class="ntv-cau-nghe" data-doc="' + esc(c.zh) + '">🔊 Nghe cả câu</button></div>';
    });
    h += '<div class="ntv-nut-hang"><button type="button" class="nt-nut nt-nut-phu ntv-lui" data-ntv-tab="the">← Thẻ từ</button>' +
      '<button type="button" class="nt-nut ntv-tiep" data-ntv-tab="thu">Tiếp: Luyện tập →</button></div></div>';
    than.innerHTML = h;
  }

  /* ---------------- luyen tap ---------------- */
  function quaHtml() {
    var r = V.d, q = r.qua;
    if (r.em) return '';
    return '<div class="ntv-qua"><span class="ntv-qua-hop" aria-hidden="true">' + N.img('noel-qua') + '</span><div><b>Quà lần đầu qua bài</b><p>' +
      '<span class="nt-gia xu">' + N.img('ic-xu') + (q.xu + (r.coCay ? q.xuThay : 0)) + '</span> <span class="nt-gia">' + N.img('ic-xp') + q.xp + ' KN</span>' +
      (r.coCay ? '' : ' + <b>Cây thông Noel</b> <span lang="zh">圣诞树</span> vào túi') + '</p></div></div>';
  }
  function veThu(than) {
    var r = V.d;
    if (!r.mua) { than.innerHTML = '<div class="ntv"><p class="nt-trong">Mùa Noel đã qua — em vẫn xem lại thẻ từ và câu mẫu được nhé!</p></div>'; return; }
    if (V.ket) return veKet(than);
    if (!V.q) {
      than.innerHTML = '<div class="ntv">' + dauBai() + '<div class="ntv-bat"><div class="ntv-bat-hinh" aria-hidden="true">' + N.img('ntv-ongia') + '</div>' +
        '<h3>Luyện tập ' + r.so + ' câu</h3><p>Nhìn chữ chọn nghĩa · nhìn nghĩa chọn chữ · nghe chọn chữ · chọn pinyin.<br>Đúng từ <b>' + r.can + '</b> câu là qua bài.</p>' +
        quaHtml() + '<button type="button" class="nt-nut ntv-bat-nut" id="ntvBat">▶ ' + (r.em ? 'Luyện lại' : 'Bắt đầu') + '</button></div></div>';
      $('#ntvBat').addEventListener('click', function () { batDau(this); });
      return;
    }
    veCauHoi(than);
  }
  function batDau(nut) {
    if (V.gui) return;
    V.gui = true;
    if (nut) nut.disabled = true;
    N.goi('/api/farm/noel/tv/bat', {}).then(function (r) {
      V.gui = false; V.q = r.dang; V.fb = null; V.ket = null; veLai();
    }, function (e) { V.gui = false; if (nut) nut.disabled = false; N.bao(e.message, 'loi'); });
  }
  function veCauHoi(than) {
    var q = V.q, fb = V.fb && V.fb.i === q.tl.length - 1 ? V.fb : null, i = fb ? fb.i : q.tl.length;
    if (!fb && i >= q.ds.length) { V.q = null; return veThu(than); }
    var c = q.ds[i], hoi = c.hoi, coChu = c.k === 'nghia' || c.k === 'nghe';
    var tien = q.ds.map(function (x, j) {
      var t = q.tl[j];
      return '<i class="' + (t ? (t.dung ? 'dung' : 'sai') : j === i ? 'nay' : '') + '"></i>';
    }).join('');
    var giua = '';
    if (c.k === 'chu') giua = '<button type="button" class="nt-hoi-zh" data-doc="' + esc(hoi.zh) + '" lang="zh">' + esc(hoi.zh) + '</button><p class="nt-hoi-py">' + esc(hoi.py) + '</p>';
    else if (c.k === 'py') giua = '<button type="button" class="nt-hoi-zh" lang="zh">' + esc(hoi.zh) + '</button>';
    else if (c.k === 'nghia') giua = '<span class="ntv-hoi-hinh">' + N.img(hoi.h) + '</span><p class="nt-hoi-vn">' + esc(hoi.vn) + '</p>';
    else {
      var zh = giai(hoi.nghe), py = giai(hoi.p);
      giua = '<button type="button" class="nt-hoi-loa ntv-loa-to" id="ntvNghe">🔊 Nghe lại</button>' +
        '<p class="ntv-goi-py" id="ntvGoiPy"' + (N.mayKhongNghe && N.mayKhongNghe() ? '' : ' hidden') + '>Máy em không đọc được? Pinyin: <b>' + esc(py) + '</b></p>';
      c._zh = zh;
    }
    var h = '<div class="ntv ntv-lam"><div class="ntv-lam-dau"><span>Câu <b>' + (i + 1) + '</b>/' + q.ds.length + '</span><span class="ntv-dung-so">✔ ' +
      q.tl.filter(function (t) { return t.dung; }).length + '</span></div><div class="nt-hoi-tien ntv-tien">' + tien + '</div>' +
      '<div class="nt-hoi-cau ntv-hoi"><p class="nt-hoi-hd">' + TEN_KIEU[c.k] + '</p>' + giua + '</div>' +
      '<div class="nt-hoi-chon ntv-chon' + (coChu ? ' zh' : '') + '">' + c.lua.map(function (l, j) {
        var cls = fb ? (j === fb.kq.dap ? 'dung' : j === fb.c ? 'sai' : 'mo') : '';
        return '<button type="button" class="' + (coChu ? 'zh ' : '') + cls + '" data-ntv-c="' + j + '"' + (fb ? ' disabled' : '') + (coChu ? ' lang="zh"' : '') + '>' + esc(l) + '</button>';
      }).join('') + '</div>' +
      '<p class="nt-hoi-bao ntv-bao" id="ntvBao">' + (fb ? baoHtml(fb.kq) : '') + '</p>' +
      (fb && !fb.kq.dung && !fb.kq.ket ? '<div class="ntv-nut-hang"><button type="button" class="nt-nut" id="ntvTiep">Câu tiếp →</button></div>' : '') + '</div>';
    than.innerHTML = h;
    var nghe = $('#ntvNghe');
    if (nghe) {
      nghe.addEventListener('click', function () { N.doc(c._zh); });
      if (!fb && !c._da) { c._da = 1; setTimeout(function () { if (laBang()) N.doc(c._zh); }, 250); }
    }
    $all('[data-ntv-c]', than).forEach(function (b) { b.addEventListener('click', function () { chon(i, +b.getAttribute('data-ntv-c')); }); });
    var tiep = $('#ntvTiep');
    if (tiep) { tiep.addEventListener('click', sangCau); tiep.focus(); }
  }
  function baoHtml(kq) {
    return (kq.dung ? '<span class="ntv-ok">🎉 Đúng rồi!</span> ' : '<span class="ntv-sai">Chưa đúng —</span> ') +
      '<button type="button" class="ntv-bao-tu" data-doc="' + esc(kq.zh) + '"><b lang="zh">' + esc(kq.zh) + '</b> ' + esc(kq.py) + '</button> · ' + esc(kq.vn);
  }
  function chon(i, c) {
    if (V.gui || !V.q || (V.fb && V.fb.i === i)) return;
    V.gui = true;
    $all('[data-ntv-c]').forEach(function (b) { b.disabled = true; });
    N.goi('/api/farm/noel/tv/tl', { id: V.q.id, i: i, c: c }).then(function (kq) {
      V.gui = false;
      V.q.tl.push({ c: c, dung: kq.dung });
      V.fb = { i: i, c: c, kq: kq };
      N.tieng(kq.dung ? 'dung' : 'sai');
      if (kq.dung) N.doc(kq.zh);
      if (kq.ket) {
        V.ket = kq.ket;
        if (kq.em) V.d.em = kq.em;
        if (kq.st) N.nhanTrangThai(kq.st);
      }
      veLai();
      clearTimeout(V.hen);
      if (kq.ket) V.hen = setTimeout(function () { V.fb = null; V.q = null; veLai(); if (laBang() && V.ket && V.ket.qua) mung(); }, 1400);
      else if (kq.dung) V.hen = setTimeout(sangCau, 1100);
    }, function (e) {
      V.gui = false;
      N.bao(e.message, 'loi');
      // bai het han / lech: tai lai tu may chu
      V.q = null; V.fb = null;
      tai().then(veLai, veLai);
    });
  }
  function sangCau() { clearTimeout(V.hen); V.fb = null; veLai(); }
  function mung() {
    var o = document.querySelector('.ntv-ket-sao');
    if (N.fx && N.fx.mung) N.fx.mung(o || null, true);
    N.tieng('mung');
    N.doc('圣诞快乐！');
  }
  function veKet(than) {
    var k = V.ket, r = V.d, sao = k.dung >= 10 ? 3 : k.dung >= 9 ? 2 : k.dung >= k.can ? 1 : 0;
    var h = '<div class="ntv ntv-ket' + (k.dat ? ' dat' : '') + '"><div class="ntv-ket-sao" aria-label="' + sao + ' sao">' +
      [0, 1, 2].map(function (j) { return '<span class="' + (j < sao ? 'co' : '') + '" style="--j:' + j + '">★</span>'; }).join('') + '</div>' +
      '<h3>' + (k.dat ? '圣诞快乐！ Giỏi lắm!' : 'Gần được rồi!') + '</h3>' +
      '<p class="ntv-ket-so">Đúng <b>' + k.dung + '/' + k.tong + '</b> câu' + (k.dat ? '' : ' — cần ' + k.can + ' câu để qua bài.') + '</p>';
    if (k.qua) {
      h += '<div class="ntv-qua nhan"><span class="ntv-qua-hop" aria-hidden="true">' + N.img(k.qua.cay || 'noel-qua') + '</span><div><b>🎁 Em nhận được</b><p>' +
        '<span class="nt-gia xu">' + N.img('ic-xu') + k.qua.xu + '</span> <span class="nt-gia">' + N.img('ic-xp') + k.qua.xp + ' KN</span>' +
        (k.qua.cay ? ' + <b>Cây thông Noel</b> <span lang="zh">圣诞树</span> Shèngdànshù (đã cất vào túi — đặt lên nông trại rồi treo đồ trang trí nhé!)' : '') + '</p></div></div>' +
        '<p class="ntv-mo">🔓 Từ giờ câu hỏi trên nông trại có thể hỏi cả <b>12 từ Noel</b> em vừa học.</p>';
    } else if (k.dat) h += '<p class="ntv-mo">Em đã nhận quà bài này rồi — luyện lại để nhớ thật lâu nhé!</p>';
    h += '<div class="ntv-nut-hang"><button type="button" class="nt-nut nt-nut-phu" data-ntv-tab="the">🃏 Xem lại thẻ từ</button>' +
      '<button type="button" class="nt-nut" id="ntvLai">↻ Làm lại</button></div></div>';
    than.innerHTML = h;
    $('#ntvLai').addEventListener('click', function () { V.ket = null; batDau(this); });
    void r;
  }

  /* ---------------- loi vao: bang Thêm + bang chao mua Noel ---------------- */
  function nutThem() {
    var luoi = $('#ntThemLuoi'), b = $('#ntvThem');
    if (!mua()) { if (b) b.remove(); return; }
    if (!luoi) return;
    if (!b) {
      b = document.createElement('button');
      b.type = 'button';
      b.id = 'ntvThem';
      b.className = 'nt-them-o ntv-them';
      b.setAttribute('data-mo', 'noel-tv');
      b.innerHTML = N.img('ntv-le') + '<span class="nt-muc-chu"><b>Học từ Noel <span lang="zh">圣诞词汇</span></b><small id="ntvPhu"></small></span><i class="nt-cham" id="ntvCham" hidden></i>';
      var dau = luoi.querySelector('.nt-them-o');
      luoi.insertBefore(b, dau || null);
    }
    var da = daHoc();
    $('#ntvPhu').textContent = da ? '✅ đã học · ôn lại 12 từ Noel' : '12 từ · luyện tập nhận quà 🎁';
    $('#ntvCham').hidden = da;
  }
  function nutBanChao() {
    var hang = $('#ntNoelBan .nt-noel-ban-nut');
    if (!hang || hang.querySelector('[data-ntv-mo]')) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'nt-nut nt-nut-nho';
    b.setAttribute('data-ntv-mo', '1');
    b.textContent = '📖 Học từ Noel';
    b.addEventListener('click', function () { moBang('the'); });
    hang.appendChild(b);
  }
  N.sau.push(function () {
    nutThem();
    if (mua()) setTimeout(nutBanChao, 0);
    if (V.d && Date.now() - V.luc > 60000 && !laBang()) V.d = null; // du lieu cu: tai lai khi mo bang
  });
  if (S.st) { nutThem(); setTimeout(nutBanChao, 0); }
})();
