/* ⚔️ Dau 1–1 truc tuyen (/dau) — may chu: dau-mot.js (/api/dau/...).
   Sanh (tim doi thu / moi ban bang ma 4 so / thach dau ban cung lop dang online / bang tuan)
   -> man VS + dem nguoc -> 10 cau, ca hai cung thay mot cau cung luc, 10 giay / cau -> ket qua + xem lai dap an + dau lai.
   Hoi vong ngan: tran ~700 ms, sanh ~2,5 giay, hang cho ~1 giay. Dap an cham tren may chu.
   Khong hien pinyin (tro choi khong pinyin). Am thanh tu tong hop (WebAudio) + giong doc DocZh; nut 🔊 tat het. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var MAN = ['manDn', 'manSanh', 'manTim', 'manPhong', 'manVs', 'manDau', 'manKq'];
  var CHU = ['A', 'B', 'C', 'D'];
  var HAN = /[㐀-鿿]/;
  var NV = window.NhanVat;
  var S = {
    tok: '', me: null, man: '', sanh: null, henSanh: 0, henTim: 0, henTran: 0, tranId: '', st: null,
    hienI: -1, loI: -1, chon: -1, het: 0, raf: 0, henCau: 0, henDem: [], tickCuoi: -1, phamBxh: 'lop',
    tat: false, saoDa: {}, daNhan: {}, timLuc: 0, phong: null, ketId: '', datTen: '', loiMoiCu: ''
  };

  /* ---------------- tien ich ---------------- */
  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function auth() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a : null; } catch (e) { return null; }
  }
  function api(method, url, body) {
    var h = { Authorization: 'Bearer ' + S.tok };
    if (body) h['Content-Type'] = 'application/json';
    return fetch(url, { method: method, headers: h, body: body ? JSON.stringify(body) : undefined, cache: 'no-store' }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) {
        if (r.status === 401) { hien('manDn'); }
        if (!r.ok) { var e = new Error(d.error || 'Lỗi kết nối, thử lại nhé.'); e.d = d; e.status = r.status; throw e; }
        return d;
      });
    });
  }
  function hien(id) {
    if (S.man === id) return;
    S.man = id;
    MAN.forEach(function (m) { $(m).hidden = m !== id; });
    document.body.classList.toggle('dau-choi', id === 'manVs' || id === 'manDau');
    if (id === 'manSanh' || id === 'manPhong') henSanh(id === 'manPhong' ? 1500 : 200);
    window.scrollTo(0, 0);
  }
  var tbHen = 0;
  function thongBao(chu) {
    var el = $('tbao');
    el.textContent = chu; el.hidden = false;
    el.classList.remove('is-hien'); void el.offsetWidth; el.classList.add('is-hien');
    clearTimeout(tbHen);
    tbHen = setTimeout(function () { el.hidden = true; }, 3200);
  }
  function rung(ms) { try { if (!S.tat && navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* bo qua */ } }
  function lacLai(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }

  // Nhan vat: ro-bot dung hinh ve san; ban hoc sinh dung nhan vat nong trai (chua thiet ke -> mac dinh theo ma tai khoan)
  function hinhNv(id, av, bot) {
    if (bot) return '<img class="dau-nv-bot" src="/images/game/duel-robot.svg" alt="" draggable="false">';
    if (!NV) return '<span class="dau-nv-chu">' + esc(String(id || '?').charAt(0)) + '</span>';
    try { return NV.svg(av || NV.macDinh(id), 'nv-svg'); } catch (e) { return NV.svg(NV.macDinh(id)); }
  }
  function tenNgan(t) { return NV && NV.tenNgan ? NV.tenNgan(t) : String(t || ''); }

  /* ---------------- am thanh ---------------- */
  var ac = null;
  function am(loai) {
    if (S.tat) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
      var NOT = {
        tick: [[880, 0, 0.06, 'square', 0.05]],
        dem: [[523, 0, 0.16, 'triangle', 0.18]],
        batdau: [[784, 0, 0.12, 'triangle', 0.2], [1046, 0.12, 0.22, 'triangle', 0.2]],
        dung: [[660, 0, 0.09, 'triangle', 0.2], [990, 0.09, 0.16, 'triangle', 0.2]],
        sai: [[200, 0, 0.22, 'sawtooth', 0.09], [150, 0.12, 0.2, 'sawtooth', 0.08]],
        moi: [[740, 0, 0.1, 'sine', 0.2], [988, 0.12, 0.14, 'sine', 0.2]],
        thang: [[523, 0, 0.12, 'triangle', 0.2], [659, 0.12, 0.12, 'triangle', 0.2], [784, 0.24, 0.12, 'triangle', 0.2], [1046, 0.36, 0.34, 'triangle', 0.22]],
        thua: [[440, 0, 0.18, 'triangle', 0.16], [370, 0.18, 0.18, 'triangle', 0.16], [294, 0.36, 0.34, 'triangle', 0.16]]
      }[loai] || [];
      var t0 = ac.currentTime + 0.01;
      NOT.forEach(function (n) {
        var o = ac.createOscillator(), g = ac.createGain();
        o.type = n[3]; o.frequency.value = n[0];
        g.gain.setValueAtTime(0.0001, t0 + n[1]);
        g.gain.exponentialRampToValueAtTime(n[4], t0 + n[1] + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + n[1] + n[2]);
        o.connect(g); g.connect(ac.destination);
        o.start(t0 + n[1]); o.stop(t0 + n[1] + n[2] + 0.05);
      });
    } catch (e) { /* khong co am thanh */ }
  }
  function noi(chu, tuBam) {
    if (!chu || (S.tat && !tuBam)) return;
    try {
      if (window.DocZh) { window.DocZh.doc(chu, { m: 'tu' }); return; }
      if (!window.speechSynthesis) return;
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(chu);
      u.lang = 'zh-CN'; u.rate = 0.85;
      speechSynthesis.speak(u);
    } catch (e) { /* bo qua */ }
  }
  function datLoa() {
    $('nutLoa').textContent = S.tat ? '🔇' : '🔊';
    $('nutLoa').setAttribute('aria-pressed', S.tat ? 'true' : 'false');
    $('nutLoa').title = S.tat ? 'Bật âm thanh' : 'Tắt âm thanh';
  }
  try { S.tat = localStorage.getItem('hyv_dau_tat') === '1'; } catch (e) { /* bo qua */ }
  datLoa();
  $('nutLoa').addEventListener('click', function () {
    S.tat = !S.tat;
    try { localStorage.setItem('hyv_dau_tat', S.tat ? '1' : '0'); } catch (e) { /* bo qua */ }
    if (S.tat) { try { if (window.DocZh) window.DocZh.dung(); else if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { /* bo qua */ } }
    datLoa();
  });

  /* ================= SANH ================= */
  function henSanh(ms) {
    clearTimeout(S.henSanh);
    S.henSanh = setTimeout(taiSanh, ms);
  }
  function taiSanh() {
    if (S.man !== 'manSanh' && S.man !== 'manPhong') return;
    api('GET', '/api/dau/sanh').then(function (d) {
      S.sanh = d;
      // dang co tran (vua ghep / ban vua nhan loi / tai lai trang giua tran) -> vao ngay
      if (d.tran && d.tran.dang) { vaoTran(d.tran.id); return; }
      if (S.man === 'manPhong') vePhong(d);
      else veSanh(d);
      henSanh(S.man === 'manPhong' ? 1500 : 2500);
    }).catch(function (e) {
      if (e.status === 401) return;
      henSanh(4000);
    });
  }
  function veSanh(d) {
    var t = d.toi;
    $('theToi').innerHTML = '<span class="dau-toi-nv">' + hinhNv(t.id, t.av) + '</span>' +
      '<div class="dau-toi-chu"><b>' + esc(t.ten) + '</b>' + (t.lop ? '<span class="dau-chip">' + esc(t.lop) + '</span>' : '<span class="dau-chip is-nhat">Chưa vào lớp</span>') +
      (t.coBai ? '<small>📚 Câu hỏi lấy từ: ' + esc(t.nguon || (t.soBai + ' bài em đã học')) + '</small>'
        : '<small class="is-canh">Em chưa học bài nào có từ vựng — học 1 bài rồi quay lại đấu nhé!</small>') + '</div>';
    ['nutTim', 'nutTaoPhong'].forEach(function (id) { $(id).disabled = !t.coBai; });
    // loi thach dau
    var lm = d.loiMoi || [];
    var khoa = lm.map(function (x) { return x.ma; }).join(',');
    if (khoa && khoa !== S.loiMoiCu) { am('moi'); rung([60, 40, 60]); }
    S.loiMoiCu = khoa;
    $('loiMoi').innerHTML = lm.map(function (x) {
      return '<div class="dau-the dau-moi-the"><span class="dau-moi-nv">' + hinhNv(x.id, x.av) + '</span>' +
        '<div class="dau-moi-chu"><b>' + esc(x.ten) + '</b> thách đấu em! <span lang="zh">挑战</span></div>' +
        '<div class="dau-moi-nut"><button type="button" class="dau-nut dau-nut-do dau-nut-nho" data-nhan="' + esc(x.ma) + '"' + (t.coBai ? '' : ' disabled') + '>Nhận lời ⚔️</button>' +
        '<button type="button" class="dau-nut dau-nut-trang dau-nut-nho" data-tuchoi="' + esc(x.ma) + '">Để sau</button></div></div>';
    }).join('');
    // tran do dang (vua xong, co the dau lai)
    $('tranDo').hidden = true;
    // ban cung lop
    var ds = d.ban || [];
    if (!t.lop) $('dsBan').innerHTML = '<p class="dau-nhat">Em chưa vào lớp nào. Vào lớp ở trang chủ (mã lớp thầy cô cho) để thấy và thách đấu bạn cùng lớp.</p>';
    else if (!ds.length) $('dsBan').innerHTML = '<p class="dau-nhat">Chưa có bạn cùng lớp nào đang mở trang Đấu. Bấm <b>Mời bạn</b> để gửi mã phòng nhé!</p>';
    else {
      $('dsBan').innerHTML = ds.map(function (b) {
        var tt = b.ranh ? '<span class="dau-tt is-ranh">● Rảnh</span>' : b.cho ? '<span class="dau-tt is-cho">● Đang tìm trận</span>' : '<span class="dau-tt is-ban">● Đang đấu</span>';
        return '<div class="dau-ban-hang"><span class="dau-ban-nv">' + hinhNv(b.id, b.av) + '</span><div class="dau-ban-chu"><b>' + esc(b.ten) + '</b>' + tt + '</div>' +
          '<button type="button" class="dau-nut dau-nut-vang dau-nut-nho" data-thach="' + esc(b.id) + '" data-ten="' + esc(b.ten) + '"' + (b.ranh && t.coBai ? '' : ' disabled') + '>Thách đấu</button></div>';
      }).join('');
    }
    if (!$('tabLop').dataset.daTai) taiBxh();
  }

  $('manSanh').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b || b.disabled) return;
    if (b.dataset.nhan) vaoMa(b.dataset.nhan);
    else if (b.dataset.tuchoi) {
      api('POST', '/api/dau/phong/tu-choi', { ma: b.dataset.tuchoi }).catch(function () {});
      var the = b.closest('.dau-moi-the'); if (the) the.remove();
    } else if (b.dataset.thach) taoPhong(b.dataset.thach, b.dataset.ten);
  });

  /* ---------------- bang xep hang tuan ---------------- */
  function taiBxh() {
    $('tabLop').dataset.daTai = '1';
    api('GET', '/api/dau/bxh?pham=' + S.phamBxh).then(veBxh).catch(function (e) { $('bxh').innerHTML = '<p class="dau-loi">' + esc(e.message) + '</p>'; });
  }
  function veBxh(d) {
    if (!d.coLop) { $('tabLop').hidden = true; S.phamBxh = 'all'; }
    $('tabLop').textContent = d.tenLop ? 'Lớp ' + d.tenLop.replace(/^Lớp\s+/i, '') : 'Lớp em';
    $('tabLop').classList.toggle('is-on', d.pham === 'lop');
    $('tabAll').classList.toggle('is-on', d.pham === 'all');
    var ngay = Math.floor(d.conMs / 864e5), gio = Math.floor((d.conMs % 864e5) / 36e5);
    $('bxhReset').textContent = 'Tuần này còn ' + (ngay ? ngay + ' ngày ' : '') + gio + ' giờ — sang thứ Hai bảng làm mới.';
    function hang(r) {
      var huy = r.hang <= 3 ? '<img src="/images/game/duel-medal-' + r.hang + '.svg" alt="' + r.hang + '">' : r.hang;
      return '<li class="dau-bxh-hang' + (r.la ? ' is-toi' : '') + '"><span class="dau-bxh-so">' + huy + '</span>' +
        '<span class="dau-bxh-nv">' + hinhNv(r.id, r.av) + '</span><span class="dau-bxh-ten" title="' + esc(r.ten) + '">' + esc(tenNgan(r.ten)) + (r.la ? ' <small>(em)</small>' : '') + '</span>' +
        '<span class="dau-bxh-o" title="Số trận thắng"><b>' + r.thang + '</b><small>thắng</small></span>' +
        '<span class="dau-bxh-o" title="Tỉ lệ thắng"><b>' + r.tiLe + '%</b><small>' + r.tran + ' trận</small></span>' +
        '<span class="dau-bxh-o" title="Chuỗi thắng dài nhất tuần"><b>' + (r.chuoiMax ? '🔥' + r.chuoiMax : '–') + '</b><small>chuỗi</small></span></li>';
    }
    if (!d.ds.length) { $('bxh').innerHTML = '<p class="dau-nhat">Tuần này chưa có trận nào. Em hãy là người mở màn! 💪</p>'; return; }
    $('bxh').innerHTML = '<ol>' + d.ds.map(hang).join('') + (d.toiNgoai && d.toi ? '<li class="dau-bxh-cach">…</li>' + hang(Object.assign({ av: S.sanh && S.sanh.toi.av }, d.toi)) : '') + '</ol>';
  }
  [$('tabLop'), $('tabAll')].forEach(function (b) {
    b.addEventListener('click', function () { S.phamBxh = b.dataset.pham; taiBxh(); });
  });

  /* ---------------- tim doi thu ---------------- */
  $('nutTim').addEventListener('click', function () {
    am('moi');
    S.timLuc = Date.now();
    $('timNv').innerHTML = S.sanh ? hinhNv(S.sanh.toi.id, S.sanh.toi.av) : '';
    $('timBot').hidden = true;
    $('timDem').textContent = '0 giây';
    hien('manTim');
    tim();
  });
  function tim() {
    if (S.man !== 'manTim') return;
    api('POST', '/api/dau/tim').then(function (d) {
      if (S.man !== 'manTim') return;
      if (d.tran) { vaoTran(d.tran); return; }
      $('timDem').textContent = d.giay + ' giây';
      if (d.botOk && $('timBot').hidden) { $('timBot').hidden = false; am('moi'); }
      $('timMo').textContent = d.soCho > 1 ? 'Có ' + (d.soCho - 1) + ' bạn khác đang tìm trận…' : 'Ưu tiên bạn cùng lớp, cùng cấp độ.';
      S.henTim = setTimeout(tim, 1000);
    }).catch(function (e) {
      if (S.man !== 'manTim') return;
      if (e.status >= 400 && e.status < 500 && e.status !== 409) { thongBao(e.message); hien('manSanh'); return; }
      S.henTim = setTimeout(tim, 2000);
    });
  }
  $('nutHuyTim').addEventListener('click', function () {
    clearTimeout(S.henTim);
    api('POST', '/api/dau/tim/huy').catch(function () {});
    hien('manSanh');
  });
  $('nutBot').addEventListener('click', function () {
    clearTimeout(S.henTim);
    var b = $('nutBot'); b.disabled = true;
    api('POST', '/api/dau/bot').then(function (d) { b.disabled = false; vaoTran(d.tran); })
      .catch(function (e) { b.disabled = false; thongBao(e.message); tim(); });
  });

  /* ---------------- phong moi ban / thach dau ---------------- */
  $('nutTaoPhong').addEventListener('click', function () { taoPhong('', ''); });
  function taoPhong(den, ten) {
    api('POST', '/api/dau/phong', den ? { den: den } : {}).then(function (d) {
      S.phong = { ma: d.ma, den: den, ten: ten, link: location.origin + d.link };
      $('phongTit').textContent = den ? 'Đã gửi lời thách đấu!' : 'Phòng của em';
      $('phongMo').innerHTML = den ? 'Đang chờ <b>' + esc(ten) + '</b> nhận lời… Bạn ấy sẽ thấy lời mời ngay trên trang Đấu.'
        : 'Gửi mã này cho bạn. Bạn mở trang <b>Đấu 1–1</b>, nhập mã là vào đấu ngay.';
      $('phongMa').innerHTML = d.ma.split('').map(function (c) { return '<span>' + c + '</span>'; }).join('');
      $('phongChia').hidden = !!den;
      $('nutChiaSe').hidden = !navigator.share;
      $('phongLink').textContent = den ? '' : S.phong.link;
      $('phongCho').textContent = den ? 'Lời mời giữ trong 10 phút.' : 'Đang chờ bạn vào phòng… (mã dùng được 10 phút)';
      hien('manPhong');
    }).catch(function (e) {
      thongBao(e.message);
      if (e.d && e.d.tran) vaoTran(e.d.tran);
    });
  }
  function vePhong(d) {
    if (!S.phong) return;
    if (!d.phong) { thongBao(S.phong.den ? 'Lời mời đã hết hạn.' : 'Phòng đã đóng.'); S.phong = null; hien('manSanh'); return; }
    if (d.phong.tuChoi) $('phongCho').textContent = '😅 ' + (S.phong.ten || 'Bạn ấy') + ' chưa muốn đấu lúc này. Em thử bạn khác nhé!';
  }
  $('nutHuyPhong').addEventListener('click', function () {
    api('POST', '/api/dau/phong/huy').catch(function () {});
    S.phong = null;
    hien('manSanh');
  });
  $('nutChepLink').addEventListener('click', function () {
    if (!S.phong) return;
    var chu = S.phong.link;
    (navigator.clipboard ? navigator.clipboard.writeText(chu) : Promise.reject()).then(function () { thongBao('Đã chép link phòng ' + S.phong.ma + '!'); })
      .catch(function () { thongBao('Mã phòng: ' + S.phong.ma); });
  });
  $('nutChiaSe').addEventListener('click', function () {
    if (!S.phong || !navigator.share) return;
    navigator.share({ title: 'Đấu 1–1 · Hi Hán', text: 'Vào đấu với mình! Mã phòng ' + S.phong.ma, url: S.phong.link }).catch(function () {});
  });

  $('formMa').addEventListener('submit', function (e) {
    e.preventDefault();
    var ma = $('oMa').value.replace(/\D/g, '');
    $('loiMa').textContent = '';
    if (ma.length !== 4) { $('loiMa').textContent = 'Mã phòng gồm 4 chữ số.'; return; }
    vaoMa(ma);
  });
  function vaoMa(ma) {
    api('POST', '/api/dau/phong/vao', { ma: ma }).then(function (d) { $('oMa').value = ''; vaoTran(d.tran); })
      .catch(function (e) {
        if (e.d && e.d.tran) { vaoTran(e.d.tran); return; }
        $('loiMa').textContent = e.message;
        thongBao(e.message);
      });
  }

  /* ================= TRAN ================= */
  function vaoTran(id) {
    clearTimeout(S.henSanh); clearTimeout(S.henTim);
    if (S.tranId !== id) {
      S.tranId = id; S.st = null; S.hienI = -1; S.loI = -1; S.chon = -1; S.ketId = ''; S.datTen = '';
      S.henDem.forEach(clearTimeout); S.henDem = []; clearTimeout(S.henCau); S.henCauI = -1;
    }
    S.phong = null;
    hoiTran();
  }
  function hoiTran() {
    clearTimeout(S.henTran);
    var id = S.tranId;
    if (!id) return;
    api('GET', '/api/dau/tran/' + id).then(function (st) {
      if (id !== S.tranId) return;
      veTran(st);
      S.henTran = setTimeout(hoiTran, st.pha === 'het' ? 1500 : 700);
    }).catch(function (e) {
      if (id !== S.tranId) return;
      if (e.status === 404) { thongBao('Trận đấu đã kết thúc.'); S.tranId = ''; hien('manSanh'); return; }
      S.henTran = setTimeout(hoiTran, 1500);
    });
  }

  function veTran(st) {
    S.st = st;
    if (S.datTen !== st.id) {
      S.datTen = st.id;
      $('dToiNv').innerHTML = hinhNv(st.toi.id, st.toi.av, false);
      $('dDoiNv').innerHTML = hinhNv(st.doi.id, st.doi.av, st.doi.bot);
      $('dToiTen').textContent = 'Em';
      $('dDoiTen').textContent = tenNgan(st.doi.ten);
      $('vsA').innerHTML = '<span class="dau-vs-nv">' + hinhNv(st.toi.id, st.toi.av) + '</span><b>' + esc(tenNgan(st.toi.ten)) + '</b><small>Em</small>';
      $('vsB').innerHTML = '<span class="dau-vs-nv">' + hinhNv(st.doi.id, st.doi.av, st.doi.bot) + '</span><b>' + esc(st.doi.bot ? st.doi.ten : tenNgan(st.doi.ten)) + '</b><small>' +
        (st.doi.bot ? 'Máy' : st.doi.cungLop ? 'Bạn cùng lớp' : 'Đối thủ') + '</small>';
      $('vsNguon').textContent = '📚 ' + st.nguon + (st.lan > 1 ? ' · Trận ' + st.lan : '');
    }
    if (st.pha === 'vs') {
      if (S.man !== 'manVs') { hien('manVs'); $('vsDem').textContent = ''; }
      if (st.sauMs < 0) $('vsDem').innerHTML = '<span class="dau-vs-cho">Đang chờ bạn vào trận…</span>';
      else if (!S.henDem.length) henDemNguoc(st.sauMs);
      if (st.cauSau) henCauMoi(st.cauSau, st.sauMs);
      return;
    }
    if (st.pha === 'choi') {
      if (S.man !== 'manDau') hien('manDau');
      if (S.hienI !== st.i) hienCau(st.cau, st.conMs);
      else if (!st.lo && Math.abs((S.het - performance.now()) - st.conMs) > 350) S.het = performance.now() + st.conMs;
      if (st.toiChon != null && S.chon < 0) { S.chon = st.toiChon; danhDauChon(); }
      capNhatBang(st);
      if (st.lo && S.loI !== st.i) loDapAn(st);
      if (st.cauSau && st.tiepMs != null) henCauMoi(st.cauSau, st.tiepMs);
      return;
    }
    ketQua(st);
  }

  // Dem nguoc 3-2-1 o man VS, khop voi luc may chu bat dau cau 1
  function henDemNguoc(ms) {
    am('moi');
    [3, 2, 1].forEach(function (k) {
      var luc = ms - k * 1000;
      S.henDem.push(setTimeout(function () {
        $('vsDem').innerHTML = '<span class="dau-vs-so">' + k + '</span>';
        lacLai($('vsDem'), 'is-nay'); am('dem');
      }, Math.max(0, luc)));
    });
    S.henDem.push(setTimeout(function () { $('vsDem').innerHTML = '<span class="dau-vs-so is-di">开始!</span>'; am('batdau'); }, Math.max(0, ms - 80)));
  }
  function henCauMoi(c, ms) {
    if (!c || c.i <= S.hienI || S.henCauI === c.i) return;
    S.henCauI = c.i;
    clearTimeout(S.henCau);
    S.henCau = setTimeout(function () { if (S.hienI < c.i && S.st && S.st.pha !== 'het') { hien('manDau'); hienCau(c, S.st.qMs || 10000); } }, Math.max(0, ms));
  }

  function hienCau(c, conMs) {
    S.hienI = c.i; S.chon = -1; S.tickCuoi = -1;
    S.het = performance.now() + conMs;
    var st = S.st;
    $('dCauSo').textContent = (c.i + 1) + '/' + (st ? st.n : 10);
    $('dLenh').textContent = c.lenh;
    var de = $('dDe');
    de.className = 'dau-de' + (c.nghe ? ' is-nghe' : HAN.test(c.zh) && c.zh.length <= 4 ? ' is-chu' : HAN.test(c.zh) ? ' is-cau' : ' is-viet');
    de.innerHTML = c.nghe ? '<button type="button" class="dau-loa-to" id="dLoaTo" aria-label="Nghe">🔊</button>' : esc(c.zh).replace(/＿＿/g, '<span class="dau-trong">＿＿</span>');
    if (HAN.test(c.zh)) de.setAttribute('lang', 'zh'); else de.removeAttribute('lang');
    $('dCtx').textContent = c.ctx || '';
    $('dNghe').hidden = !c.nghe;
    $('dNghe').dataset.chu = c.nghe || '';
    var laChu = c.opts.every(function (o) { return HAN.test(o) && o.length <= 8; });
    $('dLua').className = 'dau-lua' + (laChu ? ' is-chu' : '');
    $('dLua').innerHTML = c.opts.map(function (o, j) {
      return '<button type="button" class="dau-o o-' + j + '" data-j="' + j + '"' + (HAN.test(o) ? ' lang="zh"' : '') + '><span class="dau-o-chu">' + CHU[j] + '</span><span class="dau-o-nd">' + esc(o) + '</span></button>';
    }).join('');
    $('dTb').textContent = '';
    $('dTb').className = 'dau-tb';
    lacLai($('dCau'), 'is-vao');
    if (c.nghe) setTimeout(function () { noi(c.nghe); }, 150);
    chayGio();
  }
  $('dDe').addEventListener('click', function (e) { if (e.target.closest('#dLoaTo')) noi($('dNghe').dataset.chu, true); });
  $('dNghe').addEventListener('click', function () { noi($('dNghe').dataset.chu, true); });

  function chayGio() {
    cancelAnimationFrame(S.raf);
    var Q = (S.st && S.st.qMs) || 10000;
    (function buoc() {
      var con = Math.max(0, S.het - performance.now());
      var mo = S.loI !== S.hienI;
      $('dGio').style.transform = 'scaleX(' + (mo ? con / Q : 0) + ')';
      $('dGio').classList.toggle('is-gap', con < 3000);
      var giay = Math.ceil(con / 1000);
      $('dGioSo').textContent = mo ? giay : '';
      if (mo && S.chon < 0 && giay <= 3 && giay > 0 && giay !== S.tickCuoi) { S.tickCuoi = giay; am('tick'); }
      if (mo && con <= 0 && S.chon < 0) khoaLua('Hết giờ ⏰');
      if (mo) S.raf = requestAnimationFrame(buoc);
    })();
  }
  function khoaLua(chu) {
    Array.prototype.forEach.call($('dLua').querySelectorAll('.dau-o'), function (b) { b.disabled = true; });
    if (chu && !$('dTb').textContent) $('dTb').textContent = chu;
  }
  function danhDauChon() {
    var b = $('dLua').querySelector('[data-j="' + S.chon + '"]');
    if (b) b.classList.add('is-chon');
    khoaLua('');
  }

  $('dLua').addEventListener('click', function (e) {
    var b = e.target.closest('.dau-o');
    if (!b || b.disabled || S.chon >= 0 || S.loI === S.hienI) return;
    var st = S.st, i = S.hienI, j = Number(b.dataset.j);
    if (performance.now() > S.het + 400) return;
    S.chon = j;
    danhDauChon();
    $('dTb').textContent = 'Đã chọn — chờ ' + (st && st.doi.bot ? 'Rô-bốt' : 'bạn') + '…';
    api('POST', '/api/dau/tran/' + S.tranId + '/tl', { i: i, chon: j }).then(function (d) {
      if (S.hienI !== i) return;
      b.classList.add(d.dung ? 'is-dung' : 'is-sai');
      if (d.dung) { am('dung'); rung(30); bayDiem('+' + d.diem, b); } else { am('sai'); rung([40, 30, 40]); lacLai(b, 'is-lac'); }
      $('dTb').textContent = d.dung ? 'Chính xác! 太棒了' : 'Chưa đúng rồi…';
      if (d.tt) veTran(d.tt);
    }).catch(function (e) {
      if (e.d && e.d.tt) veTran(e.d.tt);
      else { thongBao(e.message); }
    });
  });
  function bayDiem(chu, goc) {
    var el = document.createElement('span');
    el.className = 'dau-bay';
    el.textContent = chu;
    var r = goc.getBoundingClientRect();
    el.style.left = (r.left + r.width / 2) + 'px';
    el.style.top = (r.top + window.scrollY) + 'px';
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 1100);
  }

  function capNhatBang(st) {
    var a = st.toi.diem, b = st.doi.diem;
    if ($('dToiDiem').textContent !== String(a)) { $('dToiDiem').textContent = a; lacLai($('dToiDiem'), 'is-nay'); }
    if ($('dDoiDiem').textContent !== String(b)) { $('dDoiDiem').textContent = b; lacLai($('dDoiDiem'), 'is-nay'); }
    $('dKeo').style.width = (a + b ? Math.max(8, Math.min(92, (a / (a + b)) * 100)) : 50) + '%';
    function vet(ben, laDoi) {
      var o = '';
      for (var k = 0; k < st.n; k++) {
        var cl = k < ben.vet.length ? (ben.vet[k] ? 'ok' : 'sai') : k === st.i ? (ben.daTl ? 'tl' : 'nay') : '';
        o += '<span class="dau-cham ' + cl + '"></span>';
      }
      return (laDoi ? '<small>' + esc(tenNgan(st.doi.ten)) + '</small>' : '<small>Em</small>') + o;
    }
    $('dVetToi').innerHTML = vet(st.toi, false);
    $('dVetDoi').innerHTML = vet(st.doi, true);
    document.querySelector('.b-doi').classList.toggle('is-tl', !!st.doi.daTl);
  }

  function loDapAn(st) {
    S.loI = st.i;
    var lo = st.lo;
    var nut = $('dLua').querySelectorAll('.dau-o');
    Array.prototype.forEach.call(nut, function (b) {
      var j = Number(b.dataset.j);
      b.disabled = true;
      if (j === lo.dap) b.classList.add('is-dap');
      if (j === lo.toiChon && !lo.toiDung) b.classList.add('is-sai');
      if (j === lo.toiChon && lo.toiDung) b.classList.add('is-dung');
      if (j === lo.doiChon) b.insertAdjacentHTML('beforeend', '<span class="dau-o-doi" title="' + esc(st.doi.ten) + ' chọn">' + hinhNv(st.doi.id, st.doi.av, st.doi.bot) + '</span>');
    });
    var tb = lo.toiChon < 0 ? 'Hết giờ ⏰' : lo.toiDung ? 'Đúng! +' + lo.toiDiem : 'Sai rồi';
    var doi = st.doi.bot ? 'Rô-bốt' : tenNgan(st.doi.ten);
    tb += ' · ' + doi + ': ' + (lo.doiChon < 0 ? 'hết giờ' : lo.doiDung ? 'đúng +' + lo.doiDiem : 'sai');
    $('dTb').innerHTML = '<b>' + esc(tb) + '</b>' + (lo.why ? '<span class="dau-why" lang="zh">' + esc(lo.why) + '</span>' : '');
    $('dTb').className = 'dau-tb ' + (lo.toiDung ? 'is-dung' : 'is-sai');
    if (lo.toiChon < 0) am('sai');
  }

  /* ---------------- ket qua ---------------- */
  function ketQua(st) {
    var k = st.ketQua;
    cancelAnimationFrame(S.raf); clearTimeout(S.henCau);
    if (k.tranMoi) { vaoTran(k.tranMoi); return; }
    var lan = S.ketId !== st.id;
    if (lan) {
      S.ketId = st.id;
      hien('manKq');
      var tieuDe = { thang: ['Em thắng rồi!', '胜利', 'duel-trophy'], thua: ['Thua mất rồi…', '再接再厉', 'duel-muscle'], hoa: ['Hòa nhau!', '平局', 'duel-ribbon'] }[k.kq];
      var lyDo = k.lyDo === 'roi' ? (k.kq === 'thang' ? (st.doi.bot ? '' : 'Bạn ấy đã rời trận — em thắng.') : 'Em đã rời trận nên bị xử thua.') : '';
      $('kqDau').className = 'dau-kq-dau is-' + k.kq;
      $('kqDau').innerHTML = '<img src="/images/game/' + tieuDe[2] + '.svg" alt="" draggable="false"><h1>' + tieuDe[0] + ' <span lang="zh">' + tieuDe[1] + '</span></h1>' + (lyDo ? '<p>' + esc(lyDo) + '</p>' : '');
      $('kqTi').innerHTML = benKq(st.toi, 'Em', k.kq === 'thang') + '<span class="dau-kq-vs">VS</span>' + benKq(st.doi, st.doi.bot ? st.doi.ten : tenNgan(st.doi.ten), k.kq === 'thua');
      document.querySelector('.dau-kq-h').hidden = !k.ds.length;
      $('kqDs').innerHTML = k.ds.map(function (q, i) {
        var dung = q.toiChon === q.dap;
        var de = q.nghe ? '🔊 ' + q.nghe : q.zh;
        return '<li class="dau-kq-cau ' + (dung ? 'is-dung' : 'is-sai') + '"><div class="dau-kq-cau-dau"><span class="dau-kq-so">' + (i + 1) + '</span>' +
          '<span class="dau-kq-lenh">' + esc(q.lenh) + '</span><span class="dau-kq-diem">' + (dung ? '+' + q.toiDiem : '0') + '</span></div>' +
          (de ? '<p class="dau-kq-de"' + (HAN.test(de) ? ' lang="zh"' : '') + '>' + esc(de) + '</p>' : '') + (q.ctx ? '<p class="dau-kq-ctx">' + esc(q.ctx) + '</p>' : '') +
          '<ul class="dau-kq-lua">' + q.opts.map(function (o, j) {
            var cl = j === q.dap ? 'is-dap' : j === q.toiChon ? 'is-sai' : '';
            var nhan = (j === q.toiChon ? '<em>em</em>' : '') + (j === q.doiChon ? '<em class="is-doi">' + esc(st.doi.bot ? 'rô-bốt' : 'bạn') + '</em>' : '');
            return '<li class="' + cl + '"' + (HAN.test(o) ? ' lang="zh"' : '') + '><span>' + CHU[j] + '</span>' + esc(o) + nhan + '</li>';
          }).join('') + '</ul>' + (q.toiChon < 0 ? '<p class="dau-kq-het">Em hết giờ ở câu này.</p>' : '') +
          (q.why ? '<p class="dau-kq-why"><b>Giải thích:</b> ' + esc(q.why) + '</p>' : '') + '</li>';
      }).join('');
      am(k.kq === 'thang' ? 'thang' : k.kq === 'thua' ? 'thua' : 'dem');
      if (k.kq === 'thang') { rung([80, 50, 80, 50, 160]); phaoHoa(); }
      guiSao(st.id, k.sao);
    }
    // dau lai
    var nut = $('nutLai');
    nut.disabled = !!k.doiRoi || k.lai.toi;
    nut.classList.toggle('is-moi', !!k.lai.doi && !k.lai.toi && !st.doi.bot);
    $('kqLai').textContent = k.doiRoi ? 'Bạn ấy đã rời trận.' : k.lai.toi ? 'Đang chờ bạn ấy đồng ý đấu lại…' : k.lai.doi && !st.doi.bot ? '🔥 Bạn ấy muốn đấu lại! Bấm Đấu lại để vào ngay.' : '';
  }
  function benKq(b, ten, thang) {
    return '<div class="dau-kq-ben' + (thang ? ' is-thang' : '') + '"><span class="dau-kq-nv">' + hinhNv(b.id, b.av, b.bot) + (thang ? '<img class="dau-kq-vm" src="/images/game/duel-crown.svg" alt="">' : '') + '</span>' +
      '<b>' + esc(ten) + '</b><span class="dau-kq-so-diem">' + b.diem + '</span><small>' + b.dung + ' câu đúng</small></div>';
  }
  function phaoHoa() {
    var k = document.createElement('div');
    k.className = 'dau-phao';
    for (var i = 0; i < 26; i++) {
      var p = document.createElement('i');
      p.style.left = (Math.random() * 100) + '%';
      p.style.animationDelay = (Math.random() * 0.6) + 's';
      p.style.background = ['#d9432f', '#2f74c9', '#f5a524', '#23874c', '#ff7b96'][i % 5];
      k.appendChild(p);
    }
    document.body.appendChild(k);
    setTimeout(function () { k.remove(); }, 3200);
  }
  // Sao qua cong /api/stars/game co san (n = so cau dung + thuong thang, may chu da tinh); moi tran gui 1 lan
  function guiSao(id, n) {
    var khoa = 'hyv_dau_sao_' + id;
    var da = false;
    try { da = !!sessionStorage.getItem(khoa); } catch (e) { da = !!S.saoDa[id]; }
    if (da || S.saoDa[id] || !n) { $('kqSao').textContent = n ? '⭐ +' + n + ' sao' : ''; return; }
    S.saoDa[id] = 1;
    try { sessionStorage.setItem(khoa, '1'); } catch (e) { /* bo qua */ }
    $('kqSao').textContent = '⭐ Đang cộng sao…';
    api('POST', '/api/stars/game', { n: n }).then(function (d) {
      var g = d.gameAwarded || 0;
      $('kqSao').textContent = g ? '⭐ +' + g + ' sao' + (g < n ? ' (đã gần chạm hạn sao trò chơi hôm nay)' : '') : '⭐ Hôm nay em đã nhận đủ sao trò chơi rồi — mai đấu tiếp nhé!';
    }).catch(function () { $('kqSao').textContent = ''; });
  }
  $('nutLai').addEventListener('click', function () {
    var b = $('nutLai');
    b.disabled = true;
    api('POST', '/api/dau/tran/' + S.tranId + '/lai').then(function (d) {
      if (d.tran) vaoTran(d.tran);
      else $('kqLai').textContent = 'Đang chờ bạn ấy đồng ý đấu lại…';
    }).catch(function (e) { b.disabled = false; thongBao(e.message); });
  });
  $('nutVeSanh').addEventListener('click', function () {
    var id = S.tranId;
    clearTimeout(S.henTran);
    S.tranId = '';
    if (id) api('POST', '/api/dau/tran/' + id + '/bo').catch(function () {});
    $('tabLop').dataset.daTai = '';
    hien('manSanh');
  });

  /* ---------------- khoi dong ---------------- */
  var a = auth();
  if (!a) { hien('manDn'); return; }
  S.tok = a.token;
  var maUrl = (new URLSearchParams(location.search).get('ma') || '').replace(/\D/g, '');
  if (maUrl) { try { history.replaceState(null, '', '/dau'); } catch (e) { /* bo qua */ } }
  hien('manSanh');
  if (maUrl.length === 4) { $('oMa').value = maUrl; setTimeout(function () { vaoMa(maUrl); }, 300); }
  // Tab an lau roi mo lai: hoi ngay
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) return;
    if (S.tranId) hoiTran(); else if (S.man === 'manSanh' || S.man === 'manPhong') henSanh(0);
  });
})();
