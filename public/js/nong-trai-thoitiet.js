/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — BAN TIN THOI TIET 天气预报 (2026-11-24)
   · Moi ngay 1 ban tin radio ngan bang tieng Trung (may doc to, chu an): nhiet do + thoi tiet hom nay / ngay mai
     + canh bao thien tai ngay mai. "Nghe lại" / "Xem chữ" (khi may khong phat duoc tieng).
   · 2 cau hoi (may chu cham): ngay mai troi the nao (chon hinh) + nhiet do / nen lam gi. Dung moi cau +3 xu.
   · Du bao dung that: thien tai ngay mai da chon truoc tren may chu. Nghe xong em "Chuẩn bị 准备" truoc
     (dung 2/2 mien phi, 1/2 10 xu, 0/2 20 xu): mai thien tai den, viec chong da lam san 3 phan.
   · O thoi tiet nho o goc phai (duoi chip thien tai): chua nghe -> radio + 明天? ; nghe roi -> hinh troi + nhiet do.
   · Nut 🌦 trong "⋯ Thêm" (nhom Học & thử thách).
   May chu: nong-trai-thoitiet.js (st.kt.thoitiet, cat.THOITIET, /api/farm/thoitiet, /thoitiet/tl, /thoitiet/chuanbi).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$, $all = N.$all, esc = N.esc;
  var T = { d: null, tai: false, chu: false, phat: false, kq: null, khoa: false };
  var TAI_IC = { gh: '☀️', sau: '🐛', mua: '🌧️', ret: '❄️', bao: '🌀', lu: '🌊', chuot: '🐭', muada: '🧊', nong: '🔥', suong: '🌫️', cat: '🏜️', chau: '🦗' };
  var VIEC_IC = { gh: '🪣', sau: '🐛', mua: '⛏️', ret: '🪵', bao: '🪢', lu: '🧱', chuot: '🪤', muada: '⛺', nong: '🪭', suong: '🏮', cat: '🧹', chau: '🥅' };

  function C() { return (S.cat && S.cat.THOITIET) || { TT: {}, GIA_CB: [20, 10, 0], CB_SAN: 3 }; }
  function tom() { return S.st && S.st.kt && S.st.kt.thoitiet; }
  function hinh(w, cls) { return '<img class="' + (cls || 'tt-hinh') + '" src="/images/farm/thoitiet-' + esc(w) + '.svg" alt="" draggable="false">'; }
  function tuTt(w) { return C().TT[w] || { zh: '', py: '', vn: '' }; }
  function nutTu(t) {
    return '<button type="button" class="tt-tu" data-tt-doc="' + esc(t.zh) + '"><b lang="zh">' + esc(t.zh) + '</b><span lang="zh-Latn">' + esc(t.py) + '</span><small>' + esc(t.vn) + '</small></button>';
  }
  function chuBan() { return T.d && T.d.ban ? N.giaiNghe(T.d.ban.nghe) : ''; }

  function tai() {
    if (T.tai) return;
    T.tai = true;
    N.goi('/api/farm/thoitiet').then(function (r) { T.tai = false; T.d = r; veLai(); }, function (e) { T.tai = false; N.bao(e.message, 'loi'); });
  }
  function veLai() { var bd = N.bangDang(); if (bd && bd.loai === 'thoitiet') N.veBang(); }

  // phat ban tin (docKiem: biet may co that su phat tieng khong); khong phat duoc -> hien chu
  function phat(than) {
    var zh = chuBan();
    if (!zh) return;
    var nut = $('[data-tt-nghe]', than);
    if (nut) nut.classList.add('dang');
    if (N.mayKhongNghe()) { hienChu(than, true); if (nut) nut.classList.remove('dang'); return; }
    N.docKiem(zh, function (ok) {
      var n2 = $('[data-tt-nghe]');
      if (n2) n2.classList.remove('dang');
      if (!ok) hienChu($('#ntBangThan') || than, true);
    });
  }
  function hienChu(than, tuDong) {
    T.chu = true;
    var o = $('[data-tt-chu]', than);
    if (!o) return;
    o.hidden = false;
    o.innerHTML = (tuDong ? '<small>Máy chưa phát được tiếng — em đọc bản tin nhé:</small>' : '') + '<b lang="zh">' + esc(chuBan()) + '</b>';
    var b = $('[data-tt-xem]', than);
    if (b) b.hidden = true;
  }

  /* ---------------- cau hoi ---------------- */
  function htmlLua(q, j, x, nhan) {
    if (q.kieu === 'w') {
      var t = tuTt(x);
      return '<button type="button" class="tt-lua w" data-tt-chon="' + j + '" aria-label="' + esc(t.vn) + '">' + hinh(x) +
        (nhan ? '<b lang="zh">' + esc(t.zh) + '</b><small>' + esc(t.py) + ' · ' + esc(t.vn) + '</small>' : '') + '</button>';
    }
    if (q.kieu === 't') {
      return '<button type="button" class="tt-lua t" data-tt-chon="' + j + '"><b>' + x + '°</b>' + (nhan ? '<small lang="zh">' + esc(nhan.zh) + '</small><small>' + esc(nhan.py) + '</small>' : '') + '</button>';
    }
    return '<button type="button" class="tt-lua v" data-tt-chon="' + j + '"><span class="tt-lua-ic" aria-hidden="true">' + (VIEC_IC[x.k] || '🛠') + '</span><b>' + esc(x.vn) + '</b><small><span lang="zh">' + esc(x.zh) + '</span> ' + esc(x.py) + '</small></button>';
  }
  function htmlCau(i) {
    var d = T.d, q = d.q[i], kq = T.kq && T.kq.i === i ? T.kq : null;
    var h = '<div class="tt-cau"><p class="tt-cau-so">Câu ' + (i + 1) + '/' + d.q.length + '</p>' +
      '<button type="button" class="tt-hoi" data-tt-doc="' + esc(q.hoi.zh) + '"><b lang="zh">' + esc(q.hoi.zh) + '</b><span>' + esc(q.hoi.py) + '</span><small>' + esc(q.hoi.vn) + '</small></button>' +
      '<div class="tt-luoi ' + q.kieu + '">' + q.lua.map(function (x, j) {
        return htmlLua(q, j, x, kq ? (q.kieu === 'w' ? true : kq.lua[j]) : null);
      }).join('') + '</div>';
    if (kq) {
      h += '<p class="tt-dg ' + (kq.dung ? 'dung' : 'sai') + '">' + (kq.dung ? '✔ Đúng rồi! +' + C().XU_DUNG + ' xu' : '✘ Chưa đúng — nghe lại bản tin nhé') + '</p>' +
        '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh" data-tt-tiep>' + (i + 1 < d.q.length ? 'Câu tiếp →' : 'Xem kết quả →') + '</button></div>';
    }
    return h + '</div>';
  }
  function ganCau(than, i) {
    var kq = T.kq && T.kq.i === i ? T.kq : null;
    if (kq) {
      $all('[data-tt-chon]', than).forEach(function (b, j) { b.disabled = true; b.classList.add(j === kq.dap ? 'dung' : j === kq.chon ? 'sai' : 'mo'); });
      var tiep = $('[data-tt-tiep]', than);
      if (tiep) tiep.addEventListener('click', function () { T.kq = null; N.veBang(); });
      return;
    }
    $all('[data-tt-chon]', than).forEach(function (b) {
      b.addEventListener('click', function () {
        if (T.khoa) return;
        T.khoa = true;
        var chon = +b.getAttribute('data-tt-chon');
        N.goi('/api/farm/thoitiet/tl', { i: i, chon: chon }).then(function (r) {
          T.khoa = false;
          T.kq = { i: i, chon: chon, dung: r.dung, dap: r.dap, lua: r.lua };
          if (r.tt) T.d = r.tt;
          if (r.st) N.nhanTrangThai(r.st);
          N.tieng(r.dung ? 'dung' : 'sai');
          var x = r.lua[r.dap];
          if (x && x.zh) N.doc(x.zh);
          N.veBang();
        }, function (e) { T.khoa = false; N.bao(e.message, 'loi'); T.d = null; tai(); });
      });
    });
  }

  /* ---------------- ket qua: loi ban tin + tu vung + chuan bi ---------------- */
  function htmlKet() {
    var k = T.d.ket, c = C(), h = '';
    h += '<div class="tt-diem"><b>Đúng ' + k.dung + '/' + k.so + '</b>' + (k.xu ? ' · +' + k.xu + ' xu · +' + k.xp + ' kinh nghiệm' : ' · nghe lại và đọc lời bản tin bên dưới nhé') + '</div>';
    h += '<div class="tt-du"><div class="tt-ngay">' + hinh(k.hn.w) + '<span><small>Hôm nay <span lang="zh">今天</span></small><b lang="zh">' + esc(k.hn.zh) + '</b><em>' + k.hn.t + '°</em></span></div>' +
      '<div class="tt-ngay mai">' + hinh(k.mai.w) + '<span><small>Ngày mai <span lang="zh">明天</span></small><b lang="zh">' + esc(k.mai.zh) + '</b><em>' + k.mai.t + '°</em></span></div></div>';
    // chuan bi cho thien tai ngay mai
    if (k.tai) {
      var t = k.tai;
      h += '<div class="tt-cb' + (k.daCb ? ' xong' : '') + '"><p class="tt-cb-dau"><span aria-hidden="true">' + (TAI_IC[t.k] || '⚠️') + '</span><b>Ngày mai: <span lang="zh">' + esc(t.zh) + '</span> ' + esc(t.py) + ' · ' + esc(t.vn) + '</b></p>' +
        '<p class="tt-cb-hieu">' + esc(t.hieu) + '</p>';
      if (k.daCb) {
        h += '<p class="tt-cb-ok">✓ Em đã chuẩn bị <span lang="zh">准备好了</span>! Mai thiên tai đến, việc <b>' + esc(t.viec.toLowerCase()) + '</b> đã có sẵn ' + k.cbSan + ' ' + esc(t.don) + ' — chống xong rất nhanh.</p>';
      } else {
        var gia = k.gia;
        h += '<p>Chuẩn bị <span lang="zh">准备</span> zhǔnbèi từ hôm nay: <b>' + esc(t.viec) + '</b> trước — làm sẵn <b>' + k.cbSan + ' ' + esc(t.don) + '</b> (<span lang="zh">' + esc(t.dzh) + '</span> ' + esc(t.dpy) + '). Mai chỉ cần trả lời ít câu hơn để chống thiên tai.</p>' +
          '<p class="tt-cb-gia">' + (gia ? 'Giá: <b>' + gia + ' xu</b> (đúng ' + k.dung + '/' + k.so + ' câu · đúng cả 2 thì miễn phí)' : '🎉 Em nghe đúng cả 2 câu — chuẩn bị <b>miễn phí</b>!') + '</p>' +
          '<div class="nt-hang-nut"><button type="button" class="nt-nut nt-nut-xanh nt-nut-to" data-tt-cb' + (S.st && S.st.xu < gia ? ' disabled' : '') + '>' + (VIEC_IC[t.k] || '🛠') + ' Chuẩn bị ngay' + (gia ? ' · ' + gia + ' xu' : ' · miễn phí') + '</button></div>';
      }
      h += '</div>';
    } else {
      h += '<p class="tt-yen">🌤 Ngày mai trời yên — không cần chuẩn bị.' + (T.d.lv < T.d.lvTai ? ' (Thiên tai bắt đầu từ cấp ' + T.d.lvTai + '.)' : '') + '</p>';
    }
    h += '<h3 class="tt-h">📻 Lời bản tin <small>bấm để nghe từng câu</small></h3><div class="tt-loi">' + k.chu.map(function (x) {
      return '<button type="button" class="nt-cau" data-tt-doc="' + esc(x.zh) + '"><b lang="zh">' + esc(x.zh) + '</b><i>' + esc(x.py) + '</i><span>' + esc(x.vn) + '</span></button>';
    }).join('') + '</div>';
    h += '<h3 class="tt-h">📖 Từ vựng thời tiết <small>bấm để nghe</small></h3><div class="tt-tus">' + k.tu.map(nutTu).join('') + '</div>';
    h += '<details class="tt-them"><summary>Tất cả hình thời tiết</summary><div class="tt-tus">' + Object.keys(c.TT).map(function (w) {
      return '<button type="button" class="tt-tu co-hinh" data-tt-doc="' + esc(c.TT[w].zh) + '">' + hinh(w) + '<b lang="zh">' + esc(c.TT[w].zh) + '</b><span lang="zh-Latn">' + esc(c.TT[w].py) + '</span><small>' + esc(c.TT[w].vn) + '</small></button>';
    }).join('') + '</div></details>';
    h += '<p class="nt-meo">Mai quay lại nghe bản tin mới nhé! <span lang="zh">明天见！</span></p>';
    return h;
  }

  function ve(than) {
    var d = T.d, c = C();
    var xong = !!d.ket;
    // dang xem dap an cau vua tra loi -> giu cau do; chua xong -> cau ke tiep; xong -> ket qua
    var dangXemKq = !!T.kq, i = T.kq ? T.kq.i : d.tl.length;
    var h = '<div class="tt"><div class="tt-dau">' + hinh('tv', 'tt-tv') + '<div><p class="tt-ten"><b lang="zh">' + esc(c.TEN ? c.TEN.zh : '天气预报') + '</b> <span>tiānqì yùbào</span></p>' +
      '<p class="tt-gt">Nghe bản tin hôm nay rồi trả lời ' + d.q.length + ' câu (đúng mỗi câu +' + c.XU_DUNG + ' xu). Biết trước thiên tai ngày mai để <b>chuẩn bị <span lang="zh">准备</span></b>!</p></div></div>';
    h += '<div class="tt-nghe-hop"><button type="button" class="tt-nghe" data-tt-nghe>' + hinh('radio', 'tt-radio') + '<span>🔊 ' + (T.phat ? 'Nghe lại' : 'Nghe bản tin') + '</span><i class="tt-song" aria-hidden="true"></i></button>' +
      (xong ? '' : '<button type="button" class="nt-nut tt-xem" data-tt-xem' + (T.chu ? ' hidden' : '') + '>👀 Xem chữ</button>') +
      '<p class="tt-chu" data-tt-chu hidden aria-live="polite"></p></div>';
    if (!xong || dangXemKq) h += htmlCau(i);
    else h += htmlKet();
    than.innerHTML = h + '</div>';
    $all('img', than).forEach(function (im) { im.addEventListener('error', function () { im.classList.add('hong'); }, { once: true }); });
    $all('[data-tt-doc]', than).forEach(function (b) { b.addEventListener('click', function () { N.doc(b.getAttribute('data-tt-doc')); }); });
    $('[data-tt-nghe]', than).addEventListener('click', function () {
      if (!T.phat) { T.phat = true; var s = $('[data-tt-nghe] span', than); if (s) s.textContent = '🔊 Nghe lại'; }
      phat(than);
    });
    var xem = $('[data-tt-xem]', than);
    if (xem) xem.addEventListener('click', function () { hienChu(than, false); });
    if (T.chu && !xong) hienChu(than, false);
    if (!xong || dangXemKq) ganCau(than, i);
    var cb = $('[data-tt-cb]', than);
    if (cb) cb.addEventListener('click', function () {
      cb.disabled = true;
      N.goi('/api/farm/thoitiet/chuanbi', {}).then(function (r) {
        T.d = r.tt;
        if (r.st) N.nhanTrangThai(r.st);
        N.tieng('len');
        N.doc('准备好了');
        N.bao('✓ Đã chuẩn bị cho ngày mai' + (r.gia ? ' · -' + r.gia + ' xu' : ''));
        N.veBang();
      }, function (e) { cb.disabled = false; N.bao(e.message, 'loi'); });
    });
    // lan dau mo trong ngay (chua tra loi): tu phat ban tin
    if (!xong && !T.phat && !d.tl.length) { T.phat = true; var sp = $('[data-tt-nghe] span', than); if (sp) sp.textContent = '🔊 Nghe lại'; phat(than); }
  }

  N.dangKy('thoitiet', function (than) {
    $('#ntBangTit').textContent = 'Bản tin thời tiết 天气预报';
    N.datTab([], '');
    if (!T.d || !S.st) { than.innerHTML = '<p class="nt-trong">📻 Đang dò sóng radio…</p>'; tai(); return; }
    ve(than);
  });
  function moBanTin() { T.d = null; T.kq = null; T.chu = false; T.phat = false; }

  /* ---------------- o thoi tiet o goc phai ---------------- */
  function veNut() {
    var x = tom(), cot = $('#ntPhai');
    var nut = $('#ntTtNut');
    if (!x || !cot) { if (nut) nut.hidden = true; return; }
    if (!nut) {
      nut = document.createElement('button');
      nut.type = 'button';
      nut.id = 'ntTtNut';
      nut.className = 'tt-nut';
      nut.addEventListener('click', function () { if (S.tham && N.veNha) N.veNha(); moBanTin(); N.moBang('thoitiet'); });
      cot.appendChild(nut);
    }
    nut.hidden = !!S.tham;
    var h, nhan;
    if (!x.nghe) {
      h = hinh('radio', 'tt-nut-hinh') + '<span class="tt-nut-chu"><b lang="zh">明天</b><small>?</small></span><i class="tt-nut-cham" aria-hidden="true"></i>';
      nhan = 'Bản tin thời tiết 天气预报 — nghe để biết thời tiết ngày mai';
    } else {
      var t = tuTt(x.w);
      h = hinh(x.w, 'tt-nut-hinh') + '<span class="tt-nut-chu"><b lang="zh">明天</b><small>' + x.t + '°</small></span>' +
        (x.tai ? '<em class="tt-nut-bao' + (x.cb ? ' ok' : '') + '" aria-hidden="true">' + (x.cb ? '✓' : '!') + '</em>' : '');
      nhan = 'Ngày mai ' + t.vn + ' ' + x.t + ' độ' + (x.tai ? ' · có thiên tai ' + (x.taiZh || '') + (x.cb ? ' (đã chuẩn bị)' : ' — bấm để chuẩn bị') : '');
    }
    if (nut.getAttribute('data-h') !== h) { nut.innerHTML = h; nut.setAttribute('data-h', h); }
    nut.classList.toggle('chua', !x.nghe);
    nut.setAttribute('aria-label', nhan);
    nut.title = nhan;
  }
  N.sau.push(function () { veNut(); });

  /* ---------------- thien tai hom nay da duoc chuan bi tu hom qua: ghi chu ---------------- */
  function ghiCb(hop) {
    var x = tom();
    if (!hop || !x || !x.cbHn || S.tham || $('.tt-cb-ghi', hop)) return;
    var p = document.createElement('p');
    p.className = 'tt-cb-ghi';
    p.innerHTML = '🌦 Nhờ nghe bản tin <span lang="zh">天气预报</span> và chuẩn bị từ hôm qua, em đã làm sẵn <b>' + x.cbHn + ' phần việc</b>!';
    var h2 = $('h2', hop) || $('.nt-tai-dau', hop);
    if (h2 && h2.parentNode) h2.parentNode.insertBefore(p, h2.nextSibling); else hop.insertBefore(p, hop.firstChild);
  }
  N.nhip.push(function () { var hop = $('.nt-tai-den'); if (hop) ghiCb(hop); });
  N.sauBang.push(function (bd) { if (bd && bd.loai === 'thientai') ghiCb($('#ntBangThan')); });

  /* ---------------- nut trong "⋯ Thêm" (nhom Học & thử thách) ---------------- */
  function taoNutThem() {
    var luoi = $('#ntThemLuoi');
    if (!luoi || $('#ntThemThoiTiet')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-them-o'; b.id = 'ntThemThoiTiet'; b.setAttribute('data-mo', 'thoitiet');
    b.innerHTML = '<span class="nt-them-emo" aria-hidden="true">🌦</span><span class="nt-muc-chu"><b>Bản tin thời tiết</b><small>nghe dự báo, chuẩn bị thiên tai 天气预报</small></span>';
    var sau = luoi.querySelector('[data-mo="bonmua"]');
    luoi.insertBefore(b, sau ? sau.nextSibling : null);
    // bang "Them" tu dong lai va mo bang (moTuNut) — o day chi xoa trang thai cu
    b.addEventListener('click', moBanTin);
  }
  taoNutThem();
  veNut();
})();
