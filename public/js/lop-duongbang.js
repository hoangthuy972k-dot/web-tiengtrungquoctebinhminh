/* Duong bang bi mat — tro on bai theo to tren man chieu (khung chung: lop-onto.js).
   Ho bang co L cot, moi cot 3 o bang up kin; ben trai la bo xuat phat, ben phai la lau dai.
   Moi to mot chu chim canh cut. Luot cua to: tra loi dung thi chon 1 trong 3 o cua cot ngay truoc mat:
   o an toan (tien 1), o nut (rot xuong nuoc, lui 1 o), o ca thuong (tien 1 roi truot them 1).
   O da lat thi giu nguyen cho ca lop cung thay (o nut thanh lo nuoc, khong buoc vao duoc nua).
   Sai thi dung yen. To toi lau dai dau tien thang; het so vong thi xep theo quang duong. */
(function () {
  'use strict';
  if (!window.LopOnTo) return;

  var V = '#2b1d3a';
  var DAI = { ngan: 7, vua: 9, dai: 11 };

  function chimCanhCut(mau, cls) {
    return '<svg class="' + (cls || 'db-cc-svg') + '" viewBox="0 0 60 72" aria-hidden="true">' +
      '<ellipse cx="30" cy="68" rx="18" ry="3.5" fill="rgba(43,29,58,.18)"/>' +
      '<path d="M18 64l-6 5h14zM42 64l6 5H34z" fill="#ff9f1c" stroke="' + V + '" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M30 4C14 4 8 22 8 40c0 16 8 26 22 26s22-10 22-26C52 22 46 4 30 4z" fill="#33405e" stroke="' + V + '" stroke-width="3"/>' +
      '<path d="M30 20c-10 0-14 10-14 22 0 12 6 18 14 18s14-6 14-18c0-12-4-22-14-22z" fill="#fff"/>' +
      '<path d="M9 34q-8 10-4 20q6-4 8-12z" fill="#33405e" stroke="' + V + '" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M51 34q8 10 4 20q-6-4-8-12z" fill="#33405e" stroke="' + V + '" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<circle cx="23" cy="18" r="3.4" fill="' + V + '"/><circle cx="37" cy="18" r="3.4" fill="' + V + '"/>' +
      '<circle cx="24" cy="17" r="1.1" fill="#fff"/><circle cx="38" cy="17" r="1.1" fill="#fff"/>' +
      '<path d="M25 24h10l-5 6z" fill="#ff9f1c" stroke="' + V + '" stroke-width="2" stroke-linejoin="round"/>' +
      '<ellipse cx="18" cy="25" rx="3" ry="2" fill="#ff8fa3" opacity=".7"/><ellipse cx="42" cy="25" rx="3" ry="2" fill="#ff8fa3" opacity=".7"/>' +
      '<path d="M12 32q18 8 36 0v6q-18 8-36 0z" fill="' + mau + '" stroke="' + V + '" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M40 36l4 14-8-2z" fill="' + mau + '" stroke="' + V + '" stroke-width="2.5" stroke-linejoin="round"/>' +
    '</svg>';
  }
  var CA = '<svg class="db-ca" viewBox="0 0 60 40" aria-hidden="true"><path d="M44 20l14-12v24z" fill="#ff9f1c" stroke="' + V + '" stroke-width="3" stroke-linejoin="round"/>' +
    '<ellipse cx="26" cy="20" rx="22" ry="14" fill="#ffb347" stroke="' + V + '" stroke-width="3"/><circle cx="14" cy="17" r="3" fill="' + V + '"/>' +
    '<path d="M24 10q6 10 0 20M32 11q5 9 0 18" fill="none" stroke="#e07a1f" stroke-width="2.5"/></svg>';
  var XUONG_CA = '<svg class="db-xuong" viewBox="0 0 60 40" aria-hidden="true"><path d="M8 20h40M16 12v16M24 10v20M32 10v20M40 12v16" stroke="#7a9cb8" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M48 20l8-7v14z" fill="none" stroke="#7a9cb8" stroke-width="3" stroke-linejoin="round"/><circle cx="6" cy="20" r="4" fill="none" stroke="#7a9cb8" stroke-width="3"/></svg>';
  var NUT = '<svg class="db-nut" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M50 50L22 12M50 50L86 20M50 50L90 70M50 50L30 92M50 50L8 58" stroke="' + V + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<path d="M50 50L58 34L70 30M50 50L66 62M50 50L38 66" stroke="' + V + '" stroke-width="2" fill="none"/></svg>';
  var LAU_DAI = '<svg class="db-lau" viewBox="0 0 120 150" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' +
    '<rect x="8" y="58" width="26" height="86" fill="#e7f6ff" stroke="' + V + '" stroke-width="3.5"/><path d="M4 60L21 22L38 60Z" fill="#7fc8f8" stroke="' + V + '" stroke-width="3.5" stroke-linejoin="round"/>' +
    '<rect x="86" y="58" width="26" height="86" fill="#e7f6ff" stroke="' + V + '" stroke-width="3.5"/><path d="M82 60L99 22L116 60Z" fill="#7fc8f8" stroke="' + V + '" stroke-width="3.5" stroke-linejoin="round"/>' +
    '<rect x="30" y="74" width="60" height="70" fill="#f3fbff" stroke="' + V + '" stroke-width="3.5"/>' +
    '<path d="M30 74v-9h10v9M50 74v-9h10v9M70 74v-9h10v9" fill="#f3fbff" stroke="' + V + '" stroke-width="3"/>' +
    '<path d="M48 144v-24a12 12 0 0 1 24 0v24z" fill="#5aa9e6" stroke="' + V + '" stroke-width="3.5"/>' +
    '<path d="M21 22V6M99 22V6" stroke="' + V + '" stroke-width="3"/><path class="db-co" d="M21 6l14 5-14 5zM99 6l14 5-14 5z" fill="#e9a23b" stroke="' + V + '" stroke-width="2.5" stroke-linejoin="round"/>' +
    '<rect x="15" y="80" width="12" height="16" rx="6" fill="#5aa9e6" stroke="' + V + '" stroke-width="2.5"/><rect x="93" y="80" width="12" height="16" rx="6" fill="#5aa9e6" stroke="' + V + '" stroke-width="2.5"/>' +
    '<path d="M38 96l4-6 4 6M76 96l4-6 4 6" fill="none" stroke="#7fc8f8" stroke-width="3" stroke-linecap="round"/></svg>';
  var LOGO = '<svg viewBox="0 0 100 100"><rect x="0" y="0" width="100" height="100" fill="#dff3ff"/>' +
    '<rect x="8" y="58" width="22" height="22" rx="5" fill="#fff" stroke="' + V + '" stroke-width="3"/><rect x="38" y="58" width="22" height="22" rx="5" fill="#a9dcf5" stroke="' + V + '" stroke-width="3"/>' +
    '<rect x="68" y="58" width="22" height="22" rx="5" fill="#fff" stroke="' + V + '" stroke-width="3"/><path d="M42 62l8 8-6 6M50 70l6-8" stroke="' + V + '" stroke-width="2" fill="none"/>' +
    '<g transform="translate(10 10) scale(.62)">' + chimCanhCut('#d2452f', '').replace(/^<svg[^>]*>/, '').replace('</svg>', '') + '</g></svg>';

  /* ---------------- trang thai ---------------- */
  var G = null, T = null;
  function taoHo(L) {
    var cot = [null];
    for (var c = 1; c <= L; c++) {
      var o;
      var r = Math.random();
      if (c >= 3 && r < 0.22) o = ['an', 'nut', 'nut'];
      else if (c < L && r < 0.6) o = ['an', 'ca', 'nut'];
      else o = ['an', 'an', 'nut'];
      cot.push(G.tron(o).map(function (l) { return { loai: l, mo: false, an: false }; }));
    }
    return cot;
  }
  function vi(i) { var l = T.doi[i].lich; return l[l.length - 1]; }
  function dich() { return T.L + 1; }

  /* ---------------- ve ---------------- */
  function veKhung() {
    var L = T.L, o = '';
    for (var c = 1; c <= L; c++) {
      for (var h = 0; h < 3; h++) o += '<button type="button" class="db-o" data-c="' + c + '" data-h="' + h + '" style="grid-column:' + (c + 1) + ';grid-row:' + (h + 1) + '" disabled></button>';
    }
    var quan = '';
    for (var i = 0; i < G.cfg.soTo; i++) quan += '<div class="db-quan" data-i="' + i + '" style="--tc:' + G.to(i).mau + '">' + chimCanhCut(G.to(i).mau) + '<b>' + (i + 1) + '</b></div>';
    G.man.innerHTML =
      '<div class="db-choi">' +
        '<div class="db-to" id="dbTo"></div>' +
        '<div class="db-ho" id="dbHo" style="--L:' + L + '">' +
          '<div class="db-bo"><span>XUẤT PHÁT</span></div>' + o +
          '<div class="db-dich" style="grid-column:' + (L + 2) + '">' + LAU_DAI + '<span>LÂU ĐÀI</span></div>' +
          '<div class="db-lop-quan" id="dbQuan">' + quan + '</div>' +
        '</div>' +
        '<div class="db-ban">' +
          '<div class="db-chu"><span class="db-chu-o an"></span>An toàn: tiến 1 <span class="db-chu-o nut"></span>Băng nứt: lùi 1 <span class="db-chu-o ca"></span>Cá thưởng: +1 bước</div>' +
          '<div class="db-tin" id="dbTin" aria-live="polite"></div>' +
          '<button type="button" class="ot-nut ot-nut--vang ot-nut--to" id="dbHoi" hidden></button>' +
        '</div>' +
      '</div>';
    G.$('#dbHoi').addEventListener('click', moCau);
    G.$all('.db-o').forEach(function (b) {
      b.addEventListener('click', function () { chon(+b.getAttribute('data-c'), +b.getAttribute('data-h')); });
    });
    veO();
    veTo();
    datQuan(true);
  }
  function veO() {
    G.$all('.db-o').forEach(function (b) {
      var c = +b.getAttribute('data-c'), h = +b.getAttribute('data-h'), o = T.cot[c][h];
      var chonDuoc = T.pha === 'chon' && c === vi(T.luot).c + 1 && !(o.mo && o.loai === 'nut');
      b.className = 'db-o' + (o.mo ? ' is-mo db-o--' + (o.loai === 'ca' && o.an ? 'daan' : o.loai) : '') + (chonDuoc ? ' is-chon' : '') + (o.moi ? ' is-lat' : '');
      b.disabled = !chonDuoc;
      b.innerHTML = !o.mo ? '<span class="db-hoi">?</span>' + (chonDuoc ? '<kbd>' + (h + 1) + '</kbd>' : '')
        : o.loai === 'nut' ? NUT + '<span class="db-lo"></span>'
        : o.loai === 'ca' ? (o.an ? XUONG_CA : CA) + (chonDuoc ? '<kbd>' + (h + 1) + '</kbd>' : '')
        : '<span class="db-sang"></span>' + (chonDuoc ? '<kbd>' + (h + 1) + '</kbd>' : '');
      b.setAttribute('aria-label', 'Cột ' + c + ', ô ' + (h + 1) + (o.mo ? ' (' + ({ an: 'an toàn', nut: 'băng nứt', ca: 'cá' })[o.loai] + ')' : ''));
      o.moi = false;
    });
  }
  function veTo() {
    var box = G.$('#dbTo');
    if (!box) return;
    var h = '';
    for (var i = 0; i < G.cfg.soTo; i++) {
      var t = G.to(i), p = vi(i).c;
      h += '<span class="db-to-chip' + (i === T.luot && T.pha !== 'het' ? ' is-luot' : '') + '" style="--tc:' + t.mau + '">' +
        '<img src="' + G.esc(t.hinh) + '" alt="" draggable="false"><b>' + G.esc(t.ten) + '</b>' +
        '<em>' + (p >= dich() ? '🏰' : p === 0 ? 'bờ' : 'ô ' + p + '/' + T.L) + '</em></span>';
    }
    box.innerHTML = h;
  }
  // Toa do cac chim canh cut (tinh tu o / bo / lau dai), nhieu chim cung cho thi xep le nhau
  function toaDo(p) {
    var ho = G.$('#dbHo'), r0 = ho.getBoundingClientRect(), el;
    if (p.c <= 0) el = G.$('.db-bo');
    else if (p.c >= dich()) el = G.$('.db-dich');
    else el = G.$('.db-o[data-c="' + p.c + '"][data-h="' + p.h + '"]');
    var r = el.getBoundingClientRect();
    return { x: r.left - r0.left, y: r.top - r0.top, w: r.width, h: r.height, rong: p.c <= 0 || p.c >= dich() };
  }
  function datQuan(ngay) {
    var ho = G.$('#dbHo');
    if (!ho) return;
    var o0 = G.$('.db-o'), co = o0 ? Math.min(o0.offsetWidth, o0.offsetHeight) : 80;
    var s = co * 0.74;
    var nhom = {};
    T.doi.forEach(function (d, i) { var p = vi(i), k = p.c <= 0 ? 'bo' : p.c >= dich() ? 'dich' : p.c + '-' + p.h; (nhom[k] = nhom[k] || []).push(i); });
    T.doi.forEach(function (d, i) {
      var el = G.$('.db-quan[data-i="' + i + '"]');
      if (!el || d.dangNhay) return;
      var p = vi(i), k = p.c <= 0 ? 'bo' : p.c >= dich() ? 'dich' : p.c + '-' + p.h, cung = nhom[k], j = cung.indexOf(i), n = cung.length;
      var r = toaDo(p), x, y, sz = s;
      if (r.rong) {
        // bo / lau dai: xep doc thanh 2 cot
        var hang = Math.ceil(n / 2), cotJ = n > 1 ? j % 2 : 0.5, hangJ = Math.floor(j / 2);
        sz = Math.min(s, r.h / Math.max(3, hang) * 0.95);
        x = r.x + r.w * (0.27 + cotJ * 0.46) - sz / 2;
        y = r.y + r.h * ((hangJ + 0.5) / Math.max(3, hang)) - sz * 0.55 + (p.c >= dich() ? r.h * 0.12 : 0);
      } else {
        if (n > 1) sz = s * (n > 4 ? 0.5 : n > 2 ? 0.62 : 0.78);
        var cotN = n > 4 ? 3 : n > 1 ? 2 : 1, hangN = Math.ceil(n / cotN);
        x = r.x + r.w * ((j % cotN + 0.5) / cotN) - sz / 2;
        y = r.y + r.h * ((Math.floor(j / cotN) + 0.5) / hangN) - sz * 0.6;
      }
      if (ngay) el.style.transition = 'none';
      el.style.width = sz + 'px';
      el.style.height = (sz * 1.2) + 'px';
      el.style.transform = 'translate(' + Math.round(x) + 'px,' + Math.round(y) + 'px)';
      el.classList.toggle('is-luot', i === T.luot && T.pha !== 'het');
      if (ngay) { void el.offsetWidth; el.style.transition = ''; }
    });
  }
  function nhay(i) {
    var el = G.$('.db-quan[data-i="' + i + '"]');
    if (!el) return;
    el.classList.remove('is-nhay');
    void el.offsetWidth;
    el.classList.add('is-nhay');
  }
  function tin(h) { var el = G.$('#dbTin'); if (el) el.innerHTML = h; }

  /* ---------------- luot ---------------- */
  function batLuot() {
    T.pha = 'cho';
    G.veVong('Vòng ' + T.vongHt + '/' + G.cfg.vong);
    veO(); veTo(); datQuan();
    var t = G.to(T.luot), b = G.$('#dbHoi');
    tin('Lượt của <b style="color:' + t.mau + '">' + G.esc(t.ten) + '</b>');
    b.hidden = false;
    b.innerHTML = '❓ Câu hỏi cho ' + G.esc(t.ten) + ' <kbd>Enter</kbd>';
    b.focus();
  }
  function moCau() {
    if (T.pha !== 'cho') return;
    T.pha = 'hoi';
    G.$('#dbHoi').hidden = true;
    var cuoi = vi(T.luot).c === T.L;
    G.hoi({
      to: T.luot,
      phu: cuoi ? '🏰 Đúng → vào lâu đài!' : '🧊 Đúng → chọn ô băng',
      nutDung: cuoi ? '🏰 Tiến vào lâu đài ▶' : '🧊 Chọn ô băng ▶',
      nutSai: 'Chuyển lượt ▶',
      xong: function (dung) {
        if (!dung) {
          nhay(T.luot);
          G.toast('🥶 ' + G.esc(G.to(T.luot).ten) + ' đứng yên chờ lượt sau');
          hetLuot();
          return;
        }
        T.doi[T.luot].dung++;
        if (vi(T.luot).c === T.L) { diToi(T.luot, { c: dich(), h: -1 }); G.sau(700, veDich); return; }
        T.pha = 'chon';
        veO(); veTo();
        tin('<b style="color:' + G.to(T.luot).mau + '">' + G.esc(G.to(T.luot).ten) + '</b> chọn một ô băng phía trước <kbd>1</kbd><kbd>2</kbd><kbd>3</kbd>');
        G.snd.bam();
      }
    });
  }
  function diToi(i, p) {
    T.doi[i].lich.push(p);
    datQuan();
    nhay(i);
    veTo();
  }
  // tuQr: lua chon cua doi truong gui tu dien thoai (thi qua ma QR thi bam o tren bang khong tinh)
  function chon(c, h, tuQr) {
    if (T.pha !== 'chon' || (G.qr && !tuQr)) return;
    var i = T.luot, p = vi(i);
    if (c !== p.c + 1) return;
    var o = T.cot[c][h];
    if (o.mo && o.loai === 'nut') return;
    T.pha = 'lat';
    var moiLat = !o.mo;
    o.mo = true; o.moi = moiLat;
    veO();
    G.snd.cach();
    var ten = G.esc(G.to(i).ten);
    if (o.loai === 'an' || (o.loai === 'ca' && o.an)) {
      diToi(i, { c: c, h: h });
      G.snd.thang();
      tin(ten + ' bước lên <b>ô băng an toàn</b> ✔');
      G.sau(900, hetLuot);
      return;
    }
    if (o.loai === 'ca') {
      diToi(i, { c: c, h: h });
      G.sau(500, function () {
        o.an = true; veO();
        G.bao('🐟 +1 bước!', 'xanh');
        G.snd.sao();
        tin(ten + ' ăn <b>cá thưởng</b> rồi trượt thêm 1 bước! 🐟');
        G.sau(900, function () {
          G.snd.truot();
          if (c + 1 > T.L) { diToi(i, { c: dich(), h: -1 }); G.sau(800, veDich); return; }
          // truot sang mot o khong nut cua cot ke tiep (lat luon cho ca lop thay)
          var ung = [0, 1, 2].filter(function (k) { return T.cot[c + 1][k].loai !== 'nut'; });
          var k = ung[Math.floor(Math.random() * ung.length)], o2 = T.cot[c + 1][k];
          if (!o2.mo) { o2.mo = true; o2.moi = true; }
          if (o2.loai === 'ca') o2.an = true;
          veO();
          var el = G.$('.db-quan[data-i="' + i + '"]');
          if (el) el.classList.add('is-truot');
          diToi(i, { c: c + 1, h: k });
          G.sau(800, function () { if (el) el.classList.remove('is-truot'); hetLuot(); });
        });
      });
      return;
    }
    // o nut: buoc len, bang vo, rot xuong nuoc, boi ve lui 1 o
    var el = G.$('.db-quan[data-i="' + i + '"]');
    T.doi[i].lich.push({ c: c, h: h });
    datQuan();
    nhay(i);
    G.sau(600, function () {
      G.snd.nut();
      if (el) el.classList.add('is-chim');
      G.sau(350, function () { G.snd.bom(); G.bao('💦 Băng nứt! Lùi 1 ô', 'lam'); });
      G.sau(1300, function () {
        var l = T.doi[i].lich;
        l.pop();                    // o nut
        if (l.length > 1) l.pop();  // lui 1 o
        if (el) el.classList.remove('is-chim');
        datQuan(true);
        nhay(i);
        veTo();
        var q = vi(i).c;
        tin(ten + ' rơi xuống nước, bơi về ' + (q === 0 ? 'bờ xuất phát' : 'ô ' + q) + ' 🥶 — ô nứt đã lộ cho cả lớp thấy');
        G.sau(1000, hetLuot);
      });
    });
  }
  function veDich() {
    var i = T.luot;
    T.pha = 'het';
    G.bao('🏰 ' + G.to(i).ten + ' về đích!', 'xanh');
    G.snd.ken();
    G.sau(2000, function () { ketThuc(G.to(i).ten + ' tới lâu đài đầu tiên!'); });
  }
  function hetLuot() {
    if (G.pha !== 'choi' || T.pha === 'het') return;
    // thi qua ma QR: bao xong luot cua to nay — lop-onto-qr.js chuyen to / vong
    if (G.qr) { T.pha = 'cho'; veO(); var el = G.$('#dbTin'); G.qr.het(el ? el.textContent : ''); return; }
    T.luot++;
    if (T.luot >= G.cfg.soTo) {
      T.luot = 0;
      T.vongHt++;
      if (T.vongHt > G.cfg.vong) { ketThuc('Hết ' + G.cfg.vong + ' vòng — tổ đi xa nhất thắng.'); return; }
      G.toast('🔔 Vòng ' + T.vongHt + ' bắt đầu!');
    }
    batLuot();
  }
  function ketThuc(loi) {
    T.pha = 'het';
    var hang = [];
    for (var i = 0; i < G.cfg.soTo; i++) {
      var p = vi(i).c, t = G.to(i);
      hang.push({ i: i, diem: Math.min(p, dich()), nho: T.doi[i].dung,
        phu: '<div class="db-buc">' + chimCanhCut(t.mau, 'db-buc-svg') + '<span>' + (p >= dich() ? '🏰 Về đích' : p === 0 ? 'Còn ở bờ' : 'Tới ô ' + p + '/' + T.L) + '</span></div>',
        ghi: T.doi[i].dung + ' câu đúng' });
    }
    G.ketThuc({ hang: hang, don: 'bước', tieuDe: 'Vượt hồ băng', loi: loi });
  }

  window.LopOnTo.dangKy({
    id: 'duongbang',
    ten: 'Đường băng bí mật',
    logo: LOGO,
    nhac: 'vui',
    luat: 'Mỗi tổ một chú chim cánh cụt vượt hồ băng tới lâu đài. Trả lời <b>đúng</b> thì chọn 1 trong 3 ô băng úp ở cột phía trước: ' +
      '<b>ô an toàn</b> tiến 1, <b>ô nứt</b> rơi xuống nước lùi 1 ô, <b>cá thưởng</b> tiến thêm 1 bước. Ô đã lật giữ nguyên cho cả lớp cùng nhớ! ' +
      '<b>Sai</b> thì đứng yên. Tổ tới lâu đài đầu tiên thắng; hết số vòng thì tổ đi xa nhất thắng.',
    vong: { ten: 'Số vòng tối đa', ds: [6, 8, 10, 12], md: 8 },
    them: [{ k: 'dai', ten: 'Chiều dài hồ', md: 'vua', ds: [['ngan', '🐾 Ngắn · 7 cột'], ['vua', '🧊 Vừa · 9 cột'], ['dai', '🏔️ Dài · 11 cột']] }],
    batDau: function (g) {
      G = g;
      T = { L: DAI[G.cfg.x.dai] || 9, luot: 0, vongHt: 1, pha: 'cho', doi: [] };
      T.cot = taoHo(T.L);
      for (var i = 0; i < G.cfg.soTo; i++) T.doi.push({ lich: [{ c: 0, h: -1 }], dung: 0 });
      veKhung();
      batLuot();
      G.sau(60, function () { datQuan(true); });
    },
    // Thi qua ma QR (lop-onto-qr.js): moi to duoc thuong buoc 1 o — doi truong chon o bang tren dien thoai
    qr: {
      batDau: function (g) {
        G = g;
        T = { L: DAI[G.cfg.x.dai] || 9, luot: -1, vongHt: 1, pha: 'cho', doi: [] };
        T.cot = taoHo(T.L);
        for (var i = 0; i < G.cfg.soTo; i++) T.doi.push({ lich: [{ c: 0, h: -1 }], dung: 0 });
        veKhung();
        tin('📱 Cả lớp trả lời trên điện thoại — tổ đủ bạn đúng được bước lên ô băng!');
        G.sau(60, function () { datQuan(true); });
      },
      hanh: function (i) {
        T.luot = i;
        T.doi[i].dung++;
        var p = vi(i), t = G.to(i);
        if (p.c === T.L) { T.pha = 'lat'; diToi(i, { c: dich(), h: -1 }); G.sau(700, veDich); return; }
        var c = p.c + 1;
        T.pha = 'chon';
        veO(); veTo(); datQuan();
        tin('📱 <b style="color:' + t.mau + '">' + G.esc(t.ten) + '</b> — đội trưởng chọn một ô băng phía trước trên điện thoại');
        G.snd.bam();
        var ok = [0, 1, 2].filter(function (h) { var o = T.cot[c][h]; return !(o.mo && o.loai === 'nut'); });
        G.qr.chon({
          loai: 'o',
          ds: [0, 1, 2].map(function (h) {
            var o = T.cot[c][h];
            return { v: String(h), nhan: 'Ô ' + (h + 1), loai: o.mo ? (o.loai === 'ca' && o.an ? 'daan' : o.loai) : '', tat: ok.indexOf(h) < 0 };
          }),
          tuDong: function () { return ok[Math.floor(Math.random() * ok.length)]; }
        }, function (h) {
          h = +h;
          if (ok.indexOf(h) < 0) h = ok[0];
          chon(c, h, true);
        });
      },
      xong: function () { return !T || T.pha === 'het'; },
      ketThuc: function () { if (T && T.pha !== 'het') ketThuc('Hết ' + G.cfg.vong + ' vòng — tổ đi xa nhất thắng.'); }
    },
    doiCo: function () { if (T && G.$('#dbHo')) datQuan(true); },
    phim: function (e, g, k) {
      if (!T) return false;
      if ((k === 'enter' || k === ' ') && T.pha === 'cho') { moCau(); return true; }
      if (T.pha === 'chon' && k >= '1' && k <= '3') { chon(vi(T.luot).c + 1, +k - 1); return true; }
      return false;
    },
    dong: function () { T = null; }
  });
})();
