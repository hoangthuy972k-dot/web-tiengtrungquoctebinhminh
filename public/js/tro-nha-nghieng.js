/* Quiz nghieng dau tren trang /game: lam bo cau 2 dap an tu tu vung cac bai da
   chon roi mo trang /nghieng (can camera, nhan dien khuon mat tai tu CDN nen o
   trang rieng). Ky luc luu cung khoa 'hyv_tn_kl_nghieng' nen the tro choi o /game
   van hien.                                                                    */
(function () {
  'use strict';
  var T = window.TroNha;
  if (!T) return;

  function tron(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  // Xen ke hai kieu: nhin chu Han chon nghia / nhin nghia chon chu Han
  function boCau(vocab) {
    return tron(vocab).slice(0, 12).map(function (v, i) {
      var khac = tron(vocab.filter(function (x) { return x.zh !== v.zh && x.vn !== v.vn; }))[0];
      if (!khac) return null;
      var dung = Math.random() < 0.5 ? 0 : 1;
      if (i % 2 === 0) {
        return { hoi: v.zh, hoiZh: true, py: v.py, trai: dung === 0 ? v.vn : khac.vn, phai: dung === 0 ? khac.vn : v.vn,
          dung: dung, docTruoc: v.zh, why: v.zh + ' (' + v.py + ') = ' + v.vn };
      }
      return { hoi: v.vn, trai: dung === 0 ? v.zh : khac.zh, phai: dung === 0 ? khac.zh : v.zh, zhOpt: true,
        dung: dung, docSau: v.zh, why: v.vn + ' = ' + v.zh + ' (' + v.py + ')' };
    }).filter(Boolean);
  }

  T.dangKy({
    key: 'nghieng',
    ten: 'Quiz nghiêng đầu',
    emoji: '🙆',
    chu: '头',
    nen: 'linear-gradient(160deg,#ff9a6b 0%,#c2412d 100%)',
    moTa: 'Bật camera, nghiêng đầu trái / phải (hoặc cười / há miệng) để chọn đáp án — vừa học vừa vận động.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var cau = boCau(o.vocab || []);
      try { localStorage.setItem('hyv_nghieng', JSON.stringify({ nguon: 'nha', nhan: '', cau: cau, luc: Date.now() })); } catch (e) { /* bo qua */ }
      hop.innerHTML =
        '<div class="tn-nghieng-mo">' +
          '<div class="tn-nghieng-ic" aria-hidden="true">🙆</div>' +
          '<p><b>' + cau.length + ' câu</b> đã sẵn sàng. Trò chơi cần <b>camera</b> và mở ở trang riêng.</p>' +
          '<a class="tn-nghieng-go" href="/nghieng">▶ Mở Quiz nghiêng đầu</a>' +
        '</div>';
      return { dung: function () { /* khong co gi phai dung */ } };
    }
  });
})();
