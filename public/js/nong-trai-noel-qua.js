/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Ong gia Noel tha qua 圣诞老人送礼物 (2026-11-18).
   Giua moi luot ong gia Noel bay ngang troi (public/js/nong-trai-noel.js goi N.noelSantaGiua), hoi may chu
   (nong-trai-noel-qua.js) co tha qua khong. Co thi hop qua du xuong nong trai cua em (du + lap lanh).
   Cham hop -> 1 cau hoi tu bai em da hoc (may chu ra cau + cham) -> dung: mo qua; sai: hop van nam do, thu lai sau.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var $ = N.$, $all = N.$all, esc = N.esc, S = N.S;
  var G = { id: '', x: -1, y: -1, el: null, roi: false, dangXin: false, cau: null, khoa: false };
  var V = '#2b1d3a';
  var TEN_KIEU = { nghia: 'Chọn chữ Hán đúng nghĩa', chu: 'Từ này nghĩa là gì?', py: 'Chọn pinyin đúng' };
  function mua() { var n = S.st && S.st.kt && S.st.kt.noel; return !!(n && n.mua); }
  function tt() { return (S.st && S.st.kt && S.st.kt.noelQua) || { dang: '', con: 0 }; }
  function giam() { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }

  // vi tri hop: o trong trong phan nong trai dang thay
  function chonCho() {
    var dat = $('#ntDat'), d = S.st, k = $('#ntKhung');
    if (!dat || !d || !d.kich) return false;
    var T = S.o || 48, r = dat.getBoundingClientRect(), x0 = 0, y0 = 0, x1 = d.kich.w, y1 = d.kich.h;
    if (k) {
      var kr = k.getBoundingClientRect(), sx = r.width / (d.kich.w * T) || 1, sy = r.height / (d.kich.h * T) || 1;
      x0 = Math.max(0, Math.floor((kr.left - r.left) / (T * sx)) + 1); x1 = Math.min(d.kich.w, Math.ceil((kr.right - r.left) / (T * sx)) - 1);
      y0 = Math.max(0, Math.floor((kr.top - r.top) / (T * sy)) + 1); y1 = Math.min(d.kich.h, Math.ceil((Math.min(kr.bottom, innerHeight - 90) - r.top) / (T * sy)) - 1);
    }
    if (x1 - x0 < 1 || y1 - y0 < 1) { x0 = 0; y0 = 0; x1 = d.kich.w; y1 = d.kich.h; }
    var ung = [];
    for (var y = y0; y < y1; y++) for (var x = x0; x < x1; x++) if (N.datDuoc(x, y, 1)) ung.push([x, y]);
    if (!ung.length) for (var y2 = y0; y2 < y1; y2++) for (var x2 = x0; x2 < x1; x2++) ung.push([x2, y2]);
    var p = ung[Math.floor(Math.random() * ung.length)];
    if (!p) return false;
    G.x = p[0]; G.y = p[1];
    return true;
  }
  function svgDu() {
    return '<svg class="nq-du" viewBox="0 0 60 50" aria-hidden="true"><path d="M4 22C4 8 18 2 30 2S56 8 56 22Q49 17 43 22Q37 17 30 22Q23 17 17 22Q11 17 4 22Z" fill="#e53935" stroke="' + V + '" stroke-width="2.2" stroke-linejoin="round"/>' +
      '<path d="M17 22Q20 8 30 2Q40 8 43 22Q37 17 30 22Q23 17 17 22Z" fill="#fff" stroke="' + V + '" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M5 22L26 48M17 22L28 48M43 22L32 48M55 22L34 48" stroke="' + V + '" stroke-width="1.1"/></svg>';
  }
  function veHop() {
    var dat = $('#ntDat');
    if (!dat || !G.el) return;
    var T = S.o || 48;
    G.el.style.left = (G.x * T) + 'px';
    G.el.style.top = (G.y * T) + 'px';
    G.el.style.width = T + 'px';
    G.el.style.height = T + 'px';
    if (G.el.parentNode !== dat) dat.appendChild(G.el);
  }
  function taoHop(roi) {
    if (G.el) G.el.remove();
    if (G.x < 0 && !chonCho()) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'nq-hop' + (roi ? ' roi' : '');
    b.setAttribute('aria-label', 'Hộp quà của ông già Noel — chạm để mở');
    b.innerHTML = '<span class="nq-dung">' + svgDu() + '<span class="nq-hao" aria-hidden="true"></span><img src="' + N.anh('noel-qua') + '" alt="" draggable="false">' +
      '<i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i></span>';
    ['pointerdown', 'mousedown', 'touchstart'].forEach(function (ev) { b.addEventListener(ev, function (e) { e.stopPropagation(); }, { passive: true }); });
    b.addEventListener('click', function (e) { e.stopPropagation(); moHop(); });
    G.el = b;
    veHop();
    if (roi) setTimeout(function () { b.classList.remove('roi'); b.classList.add('dat'); }, giam() ? 2600 : 3200);
    else b.classList.add('dat');
  }
  function boHop() { if (G.el) G.el.remove(); G.el = null; G.id = ''; G.x = -1; G.y = -1; }
  // dong bo voi trang thai may chu
  function dongBo() {
    var t = tt();
    if (!mua() || S.tham || !t.dang) { if (G.el && (!t.dang || !mua())) boHop(); else if (G.el && S.tham) G.el.remove(); return; }
    if (G.id !== t.dang) { G.id = t.dang; G.x = -1; taoHop(false); return; }
    if (!G.el) taoHop(false); else veHop();
  }
  N.sauVe.push(dongBo);
  N.sau.push(dongBo);

  // ong gia Noel bay toi giua troi -> hoi may chu co tha qua khong
  N.noelSantaGiua = function () {
    if (!mua() || S.tham || G.dangXin || G.el || !S.st) return;
    var t = tt();
    if (t.dang || !t.con) return;
    G.dangXin = true;
    N.goi('/api/farm/noel/qua/xin', window.__nqThu ? { thu: 1 } : {}).then(function (r) {
      G.dangXin = false;
      if (r.noelQua && S.st.kt) S.st.kt.noelQua = r.noelQua;
      if (!r.roi || S.tham) return;
      G.id = r.id; G.x = -1;
      taoHop(true);
      N.bao('🎅 Ông già Noel vừa thả một hộp quà xuống nông trại! Chạm vào hộp quà để mở 🎁');
    }, function () { G.dangXin = false; });
  };

  /* ---------------- mo hop: 1 cau hoi ---------------- */
  function moHop() {
    if (!G.id) return;
    if (G.el) G.el.classList.add('cham');
    N.doc('礼物');
    N.moBang('noel-qua');
  }
  function laBang() { var b = N.bangDang(); return b && b.loai === 'noel-qua'; }
  N.dangKy('noel-qua', function (than) {
    $('#ntBangTit').textContent = '🎁 Quà của ông già Noel';
    N.datTab([], '');
    var dau = '<div class="nq-dau">' + N.img('noel-qua', 'nq-dau-h') + '<div><button type="button" class="nq-ten" data-doc="圣诞礼物"><b lang="zh">圣诞礼物</b> Shèngdàn lǐwù · Quà Giáng sinh 🔊</button>' +
      '<p>Trả lời đúng 1 câu từ bài em đã học để mở hộp quà!</p></div></div>';
    if (!G.id) { than.innerHTML = dau + '<p class="nt-trong">Hộp quà không còn nữa.</p>'; return; }
    than.innerHTML = dau + '<div id="nqCau"><p class="nt-trong">Ông già Noel đang chọn câu hỏi…</p></div>';
    ganDoc(than);
    var id = G.id;
    N.goi('/api/farm/noel/qua/cau', { id: id }).then(function (r) {
      if (!laBang() || G.id !== id) return;
      G.cau = r.cau;
      veCau(r.cau, id);
    }, function (e) {
      var hop = $('#nqCau');
      if (hop) hop.innerHTML = '<p class="nq-tb">' + esc(e.message) + '</p><div class="nt-hang-nut"><button type="button" class="nt-nut" data-nq-dong>Để sau</button></div>';
      var dg = $('[data-nq-dong]');
      if (dg) dg.addEventListener('click', N.dongBang);
    });
  });
  function ganDoc(el) { $all('[data-doc]', el).forEach(function (b) { b.addEventListener('click', function () { N.doc(b.getAttribute('data-doc')); }); }); }
  function veCau(q, id) {
    var hop = $('#nqCau');
    if (!hop) return;
    var h = q.hoi || {}, laZh = q.k === 'nghia';
    var deBai = q.k === 'nghia' ? '<div class="nt-ch-vn">' + esc(h.vn) + '</div>'
      : '<div class="nt-ch-zh" lang="zh">' + esc(h.zh) + '</div>' + (h.py && q.k === 'chu' ? '<div class="nt-ch-goi">' + esc(h.py) + '</div>' : '');
    hop.innerHTML = '<div class="nt-ch nq-ch"><p class="nt-ch-kieu">' + TEN_KIEU[q.k] + '</p>' + deBai +
      '<div class="nt-ch-lua' + (laZh ? ' zh' : '') + '">' + q.lua.map(function (l, j) {
        return '<button type="button" data-nq="' + j + '"' + (laZh ? ' lang="zh"' : '') + '>' + esc(l) + '</button>';
      }).join('') + '</div><p class="nt-ch-giai" id="nqGiai" aria-live="polite"></p><div id="nqKq"></div></div>';
    G.khoa = false;
    $all('[data-nq]', hop).forEach(function (b) {
      b.addEventListener('click', function () {
        if (G.khoa) return;
        G.khoa = true;
        var chon = +b.getAttribute('data-nq');
        N.goi('/api/farm/noel/qua/tl', { id: id, chon: chon }).then(function (r) { ketQua(hop, r, chon); }, function (e) { G.khoa = false; N.bao(e.message, 'loi'); });
      });
    });
  }
  function ketQua(hop, r, chon) {
    $all('[data-nq]', hop).forEach(function (x, j) { x.disabled = true; x.classList.add(j === r.dap ? 'dung' : j === chon ? 'sai' : 'mo'); });
    N.tieng(r.dung ? 'dung' : 'sai');
    var g = $('#nqGiai', hop);
    if (g) g.innerHTML = '<b lang="zh">' + esc(r.zh) + '</b> ' + esc(r.py) + ' — ' + esc(r.vn);
    if (r.zh) N.doc(r.zh);
    var kq = $('#nqKq', hop), el = G.el;
    if (r.dung) {
      kq.innerHTML = '<div class="nq-mo"><div class="nq-mo-hop" aria-hidden="true"><span class="nq-nap">' + N.img('noel-qua') + '</span><span class="nq-tia"></span></div>' +
        '<p class="nq-mo-t">🎉 Đúng rồi! Hộp quà mở ra:</p>' + (N.noelQuaHtml ? N.noelQuaHtml(r.qua) : '') +
        '<button type="button" class="nt-nut nt-nut-xanh" data-nq-dong>Cảm ơn ông già Noel! <span lang="zh">谢谢！</span></button></div>';
      if (el) { el.classList.add('mo'); setTimeout(function () { if (el.parentNode) el.remove(); }, 700); }
      G.el = null; G.id = ''; G.x = -1;
      if (r.st) N.nhanTrangThai(r.st);
      var mo = $('.nq-mo-hop', kq);
      if (mo && N.fx && N.fx.mung && !giam()) setTimeout(function () { N.fx.mung(mo, true); }, 250);
    } else {
      kq.innerHTML = '<p class="nq-tb">Chưa đúng rồi — không sao đâu! Hộp quà vẫn nằm trên nông trại. Đợi một chút rồi chạm lại để thử câu khác nhé 🎁</p>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut" data-nq-dong>Để sau</button></div>';
      if (el) el.classList.remove('cham');
      if (r.st) N.nhanTrangThai(r.st);
    }
    var dg = $('[data-nq-dong]', kq);
    if (dg) { dg.addEventListener('click', N.dongBang); }
    $all('img', kq).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
  }
  if (S.st) dongBo();
})();
