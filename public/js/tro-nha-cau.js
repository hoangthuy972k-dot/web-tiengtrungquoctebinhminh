/* ══════════════════════════════════════════════════════════════════
   TRO CHOI CAU O NHA (/game) — hai tro man chieu cua Che do lop hoc
   dua sang trang tu hoc cua hoc sinh:
     · Tu ngu biet bay  (public/js/lop-bay.js)      — cau "sorts" cua bai
     · Doan tau tri thuc (public/js/lop-doantau.js) — cau trac nghiem "mcs"
   Ca hai mo toan man hinh o che do mot nguoi (mo({ mot: {...} })): khong
   chia doi, choi xong xem diem, ky luc, sao, roi choi lai hoac doi tro.
   Du lieu cau: window.LOP_DATA[cap] (tools/build-lop.js) — game-hub.js nap
   khi bam vao tro co canCau. Cung duong choi nay dung cho phong thi QR (/choi).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var T = window.TroNha;
  if (!T) return;

  /* ---------------- bo pinyin (tro choi chi hien chu Han + tieng Viet) ---------------- */
  var PY_RIENG = /[āǎēěīǐōǒūǔǖǘǚǜĀǍĒĚĪǏŌǑŪǓ]/;
  var TU_PY = /[A-Za-zÀ-ỹāǎēěīǐōǒūǔǖǘǚǜü']*[āǎēěīǐōǒūǔǖǘǚǜĀǍĒĚĪǏŌǑŪǓ][A-Za-zÀ-ỹāǎēěīǐōǒūǔǖǘǚǜü']*/g;
  function boPy(s) {
    if (!s || !PY_RIENG.test(s)) return s || '';
    return String(s).replace(TU_PY, '').replace(/[（(]\s*[,·\-–—\s]*[)）]/g, '').replace(/\s{2,}/g, ' ').trim();
  }
  function saoChep(q) { var c = {}; for (var k in q) c[k] = q[k]; return c; }
  function sachGhiChu(q) {
    var c = saoChep(q);
    ['why', 'context', 'hint'].forEach(function (k) { if (c[k]) c[k] = boPy(c[k]); });
    return c;
  }

  /* ---------------- man ket qua: ky luc, sao, ngay hoc ---------------- */
  function phuKetQua(key, kq, o) {
    if (!o) return;
    var kl = T.kyLuc(key, kq.diem);
    var ngay = T.ghiNgayHoc({ tong: kq.tong });
    o.innerHTML =
      '<div class="tc-dong' + (kl.moi ? ' is-moi' : '') + '">' +
        (kl.moi ? '🏆 Kỷ lục mới: <b>' + kq.diem + '</b> điểm!' : '🏆 Kỷ lục của em: <b>' + Math.max(kl.cu, kq.diem) + '</b> điểm') + '</div>' +
      (window.SaoGame ? window.SaoGame.tongKetHtml() : '') +
      (ngay ? '<div class="tc-dong">🔥 Đã tính 1 ngày học — giữ chuỗi ngày học của em</div>'
        : '<div class="tc-dong is-nhe">Làm từ ' + T.SO_CAU_NGAY_HOC + ' câu trở lên để tính 1 ngày học</div>');
  }

  // Mo tro toan man hinh; trong san cua trang de nut mo lai (lo bam nham dong)
  function moTro(hop, dinh, may, o, tuy) {
    function batTro() {
      var mot = {
        choiLai: true, nutVe: '← Đổi bài · đổi trò',
        onXong: function (kq, phu) { phuKetQua(dinh.key, kq, phu); },
        onDong: function () { if (o.thoat) o.thoat(); }
      };
      for (var k in tuy) mot[k] = tuy[k];
      may.mo({ cau: o.cau, nhan: o.nhan || '', mot: mot });
    }
    hop.innerHTML = '';
    var b = T.tao('div', 'tn-moi',
      '<div class="tn-moi-ic" aria-hidden="true">' + dinh.emoji + '</div><h2>' + T.esc(dinh.ten) + '</h2>' +
      '<p>Trò chơi đang mở toàn màn hình.</p>');
    var nut = T.tao('button', 'tn-nut tn-nut-chinh', '▶ Mở lại trò chơi');
    nut.type = 'button';
    nut.addEventListener('click', batTro);
    b.appendChild(nut);
    hop.appendChild(b);
    batTro();
    return { dung: function () { may.dong(); } };
  }

  T.dangKy({
    key: 'tubay',
    ten: 'Từ ngữ biết bay',
    emoji: '🦋',
    chu: '飞',
    nen: 'linear-gradient(160deg,#7fb4ef 0%,#b39ddb 50%,#f8bbd0 100%)',
    moTa: 'Các từ của câu bay lượn như những chú bướm — chạm từng từ theo đúng thứ tự để xếp thành câu. Mỗi ván 8 câu.',
    canCau: 'sorts',
    canToiThieu: 2,
    thieu: 'Những bài em chọn chưa có câu sắp xếp từ thành câu.',
    chuanCau: function (ds) {
      return ds.filter(function (q) { return q && Array.isArray(q.words) && !PY_RIENG.test(q.answer || '') && !PY_RIENG.test(q.words.join('')); })
        .map(sachGhiChu);
    },
    mo: function (hop, o) {
      if (!window.LopBay) { hop.innerHTML = '<p class="tn-thieu">Chưa tải được trò chơi, em tải lại trang nhé.</p>'; return { dung: function () { } }; }
      return moTro(hop, this, window.LopBay, o, { so: 8 });
    }
  });

  T.dangKy({
    key: 'noitoa',
    ten: 'Đoàn tàu tri thức · nối toa',
    emoji: '🚂',
    chu: '车',
    nen: 'linear-gradient(160deg,#5fb4e6 0%,#9fd6f2 50%,#9ccc78 100%)',
    moTa: 'Nối các toa thành đoàn tàu: đáp án ở đầu mỗi toa phải khớp câu hỏi trên toa đứng trước. Nối đúng hết là tàu kéo còi chạy!',
    canCau: 'mcs',
    canToiThieu: 2,
    thieu: 'Những bài em chọn chưa đủ câu trắc nghiệm để nối toa.',
    chuanCau: function (ds) {
      return ds.filter(function (q) {
        return q && Array.isArray(q.options) && !PY_RIENG.test(q.options.join(' ') + ' ' + (q.pre || '') + ' ' + (q.post || ''));
      }).map(sachGhiChu);
    },
    mo: function (hop, o) {
      if (!window.LopDoanTau) { hop.innerHTML = '<p class="tn-thieu">Chưa tải được trò chơi, em tải lại trang nhé.</p>'; return { dung: function () { } }; }
      return moTro(hop, this, window.LopDoanTau, o, { soToa: 6 });
    }
  });
})();
