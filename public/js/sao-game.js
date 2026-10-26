/* Sao tro choi — dung chung cho moi game hoc sinh tu choi (/game, /nghieng, /van-dong)
   va game choi tren dien thoai o lop (/choi, /dk).
   · Moi cau dung +1 ⭐ (da dang nhap), dung lien tiep 5 cau thuong them +1 ⭐.
   · Gom cac cau dung roi gui /api/stars/game; may chu co tran rieng moi ngay cho sao
     tro choi (hoc sinh van phai hoc bai moi nhieu sao).
   · Chua dang nhap: van dem so sao "bo lo" de nhac dang nhap o man ket qua.
   Goi: SaoGame.dung(), SaoGame.sai(), SaoGame.batDauVan(), SaoGame.tongKetHtml().   */
(function () {
  'use strict';

  var CHUOI_THUONG = 5;
  var S = { cho: 0, van: 0, boLo: 0, chuoi: 0, tong: null, homNay: 0, tran: 0, het: false, dangGui: false, hen: null, x: 0, y: 0 };

  function auth() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a : null; } catch (e) { return null; }
  }

  // Nho cho bam cuoi cung de "+1 ⭐" bay ra tu do
  document.addEventListener('pointerdown', function (e) { S.x = e.clientX; S.y = e.clientY; }, true);

  /* ---------------- hieu ung ---------------- */
  var nhan = null;
  function veNhan() {
    if (!nhan) {
      nhan = document.createElement('div');
      nhan.className = 'sg-nhan';
      nhan.setAttribute('aria-live', 'polite');
      document.body.appendChild(nhan);
    }
    // Hien trong man toan man hinh cua game neu dang mo
    var cha = document.fullscreenElement || document.body;
    if (nhan.parentNode !== cha) cha.appendChild(nhan);
    var a = auth();
    if (!a) {
      nhan.innerHTML = '<span class="sg-sao">⭐</span><span>' + S.boLo + ' sao đang chờ — <b>đăng nhập</b> để nhận</span>';
      nhan.classList.add('is-khach');
    } else {
      nhan.innerHTML = '<span class="sg-sao">⭐</span><b>+' + S.van + '</b><span>ván này' + (S.tong != null ? ' · tổng ' + S.tong.toLocaleString('vi-VN') : '') + '</span>';
      nhan.classList.remove('is-khach');
    }
    nhan.classList.add('is-hien');
    nhan.classList.remove('is-nay');
    void nhan.offsetWidth;
    nhan.classList.add('is-nay');
  }
  function bay(chu, lop) {
    var el = document.createElement('div');
    el.className = 'sg-bay' + (lop ? ' ' + lop : '');
    el.textContent = chu;
    var x = S.x || window.innerWidth / 2, y = S.y || window.innerHeight / 2;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    (document.fullscreenElement || document.body).appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 1300);
  }
  var tbLuc = 0;
  function thongBao(html) {
    var t = document.createElement('div');
    t.className = 'sg-tb';
    t.innerHTML = html;
    (document.fullscreenElement || document.body).appendChild(t);
    setTimeout(function () { t.classList.add('is-di'); }, 2600);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 3100);
  }

  /* ---------------- gui len may chu ---------------- */
  function gui() {
    S.hen = null;
    var a = auth();
    if (!a || S.dangGui || S.cho <= 0 || S.het) return;
    var n = Math.min(10, S.cho);
    S.dangGui = true;
    fetch('/api/stars/game', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + a.token },
      body: JSON.stringify({ n: n })
    }).then(function (r) { return r.json().then(function (d) { if (!r.ok) throw new Error(d.error || 'loi'); return d; }); })
      .then(function (d) {
        var duoc = d.gameAwarded || 0;
        S.cho -= duoc;
        S.van += duoc;
        S.tong = d.total;
        S.homNay = d.gameToday || 0;
        S.tran = d.gameCap || 0;
        if (duoc) veNhan();
        if (S.tran && S.homNay >= S.tran) {
          S.het = true;
          S.cho = 0;
          if (Date.now() - tbLuc > 60000) {
            tbLuc = Date.now();
            thongBao('🌟 Hôm nay em đã nhận đủ <b>' + S.tran + ' ⭐</b> từ trò chơi! Học bài mới để nhận thêm sao nhé.');
          }
        }
      })
      .catch(function () { /* mat mang: giu lai, lan sau gui tiep */ })
      .then(function () {
        S.dangGui = false;
        // Con cau chua duoc tinh (may chu gioi han toc do) thi thu lai sau
        if (S.cho > 0 && !S.het) hen(1500);
      });
  }
  function hen(ms) {
    if (S.hen) return;
    S.hen = setTimeout(gui, ms);
  }

  /* ---------------- API ---------------- */
  function dung() {
    S.chuoi++;
    var them = 1, thuong = S.chuoi % CHUOI_THUONG === 0;
    if (thuong) them++;
    if (!auth()) {
      S.boLo += them;
      if (S.boLo === 1 || S.boLo % 10 === 0) veNhan();
      return;
    }
    if (S.het) return;
    S.cho += them;
    bay('+1 ⭐');
    if (thuong) setTimeout(function () { bay('🔥 ' + S.chuoi + ' câu liền · +1 ⭐', 'is-chuoi'); }, 350);
    hen(900);
  }
  function sai() { S.chuoi = 0; }
  function batDauVan() { S.van = 0; S.chuoi = 0; }

  // Dong tong ket dat vao man ket qua cua game
  function tongKetHtml() {
    var a = auth();
    if (!a) {
      return S.boLo
        ? '<div class="sg-kq is-khach">🔒 Em vừa bỏ lỡ <b>' + S.boLo + ' ⭐</b> — đăng nhập ở trang chủ để mỗi câu đúng đều được cộng sao và lên bảng xếp hạng!</div>'
        : '';
    }
    var tong = S.van + S.cho;
    if (!tong && !S.het) return '';
    return '<div class="sg-kq">⭐ Ván này em nhận <b>+' + tong + ' sao</b>' +
      (S.tran ? ' · hôm nay từ trò chơi <b>' + Math.min(S.tran, S.homNay + S.cho) + '/' + S.tran + '</b>' : '') +
      (S.het ? '<br><small>Đã đủ sao trò chơi hôm nay — học bài mới để nhận thêm.</small>' : '') + '</div>';
  }

  window.SaoGame = { dung: dung, sai: sai, batDauVan: batDauVan, tongKetHtml: tongKetHtml, coTaiKhoan: function () { return !!auth(); } };
})();
