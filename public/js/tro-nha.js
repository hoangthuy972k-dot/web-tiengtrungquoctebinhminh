/* ══════════════════════════════════════════════════════════════════
   TRO CHOI TU CHOI O NHA — khung chung (Hi Han 喜汉, trang /game)
   ------------------------------------------------------------------
   Moi tro la mot doi tuong dang ky qua TroNha.dangKy({...}):
     key, ten, emoji, chu (chu Han trang tri tren the), nen (gradient),
     moTa, canToiThieu (so tu toi thieu), mo(hop, o) -> { dung: fn }
   o = { vocab: [{ zh, py, vn, hv, em, pos, hanzi[] }] }

   Khung chung lo: tao cau hoi trac nghiem tu tu vung, thanh tren
   (diem · tim · gio), o dap an 4 mau, man ket qua co ky luc rieng
   tung tro (luu localStorage). Moi tro chi lo phan choi cua minh.
   window.Arcade giu nguyen giao dien cu de game-hub.js khong phai doi.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ---------------- tien ich ---------------- */
  function tao(tag, cls, html) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (html != null) d.innerHTML = html;
    return d;
  }
  function tron(a) {
    var b = a.slice();
    for (var i = b.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = b[i]; b[i] = b[j]; b[j] = t;
    }
    return b;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }
  // Doc chu Han bang giong may cua trinh duyet; khong ho tro thi im lang.
  function doc(zh) {
    try {
      if (!window.speechSynthesis || !zh) return;
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(zh);
      u.lang = 'zh-CN';
      u.rate = 0.85;
      speechSynthesis.speak(u);
    } catch (e) { /* bo qua */ }
  }
  // Tieng bip ngan bang WebAudio — khong can file am thanh.
  var actx = null;
  function keu(tanSo, dai, kieu, tre) {
    try {
      if (!window.AudioContext && !window.webkitAudioContext) return;
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      var t0 = actx.currentTime + (tre || 0);
      var o = actx.createOscillator(), g = actx.createGain();
      o.type = kieu || 'sine';
      o.frequency.value = tanSo;
      g.gain.setValueAtTime(0.06, t0);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dai);
      o.connect(g); g.connect(actx.destination);
      o.start(t0);
      o.stop(t0 + dai);
    } catch (e) { /* bo qua */ }
  }
  function keuDung() { keu(660, 0.1); keu(990, 0.14, 'sine', 0.08); }
  function keuSai() { keu(180, 0.22, 'square'); }
  // Moi cau dung +1 sao (sao-game.js); sai thi dat lai chuoi dung lien tiep
  function ghiSao(dung) { if (window.SaoGame) { if (dung) window.SaoGame.dung(); else window.SaoGame.sai(); } }
  function keuThang() { [523, 659, 784, 1047].forEach(function (f, i) { keu(f, 0.18, 'triangle', i * 0.11); }); }
  function rung(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* bo qua */ } }
  var itChuyenDong = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------------- cau hoi trac nghiem tu tu vung ----------------
     kieu 'zh': hien chu Han (khong pinyin) -> chon nghia tieng Viet
     kieu 'vn': hien nghia tieng Viet -> chon chu Han
     Mac dinh xen ke ngau nhien hai kieu. Dap an nhieu nhat 4 lua chon. */
  function cauHoi(vocab, tu, kieu, soLua) {
    kieu = kieu || (Math.random() < 0.5 ? 'zh' : 'vn');
    soLua = Math.min(soLua || 4, vocab.length);
    var khac = tron(vocab.filter(function (v) { return v.zh !== tu.zh && v.vn !== tu.vn; })).slice(0, soLua - 1);
    var lua = tron([tu].concat(khac));
    return {
      tu: tu,
      kieu: kieu,
      hoi: kieu === 'zh'
        ? '<span class="tn-hoi-zh">' + esc(tu.zh) + '</span>' + (tu.py ? '<span class="tn-hoi-py">' + esc(tu.py) + '</span>' : '')
        : '<span class="tn-hoi-vn">' + esc(tu.vn) + '</span>',
      lua: lua.map(function (v) { return kieu === 'zh' ? v.vn : v.zh; }),
      laZh: kieu !== 'zh',            // lua chon la chu Han?
      dung: lua.indexOf(tu)
    };
  }
  // Bo cau xoay vong: het luot thi tron lai, khong lap mot tu hai lan lien.
  function boCau(vocab) {
    var hang = [], truoc = null;
    return function (kieu, soLua) {
      if (!hang.length) hang = tron(vocab);
      var tu = hang.pop();
      if (truoc && tu.zh === truoc.zh && hang.length) { hang.unshift(tu); tu = hang.pop(); }
      truoc = tu;
      return cauHoi(vocab, tu, kieu, soLua);
    };
  }

  /* ---------------- o dap an 4 mau ----------------
     ve(hop, q, cb): ve cac nut, bam -> to mau dung/sai -> cb(dung, chiSo).
     tuDong: true thi khong to mau (tro tu xu ly). Tra ve ham go bo.   */
  var HINH = ['▲', '◆', '●', '■'];
  function oDapAn(hop, q, cb, tuy) {
    tuy = tuy || {};
    var luoi = tao('div', 'tn-lua tn-lua-' + q.lua.length + (tuy.nho ? ' tn-lua-nho' : ''));
    var xong = false;
    q.lua.forEach(function (t, i) {
      var b = tao('button', 'tn-o tn-o' + i + (q.laZh ? ' is-zh' : ''),
        '<span class="tn-o-hinh" aria-hidden="true">' + HINH[i] + '</span><span class="tn-o-chu">' + esc(t) + '</span>');
      b.type = 'button';
      b.addEventListener('click', function () {
        if (xong) return;
        xong = true;
        var dung = i === q.dung;
        ghiSao(dung);
        if (!tuy.khongToMau) {
          Array.prototype.forEach.call(luoi.children, function (x, k) {
            x.disabled = true;
            x.classList.add(k === q.dung ? 'is-dung' : k === i ? 'is-sai' : 'is-mo');
          });
        }
        if (dung) keuDung(); else { keuSai(); rung(120); }
        if (q.kieu === 'vn' || dung) doc(q.tu.zh);
        cb(dung, i);
      });
      luoi.appendChild(b);
    });
    hop.appendChild(luoi);
    return function () { xong = true; if (luoi.parentNode) luoi.parentNode.removeChild(luoi); };
  }

  /* ---------------- khung tro choi ---------------- */
  function khung(hop, dinh, tuy) {
    tuy = tuy || {};
    hop.innerHTML = '';
    var goc = tao('div', 'tn tn-' + dinh.key);
    var tren = tao('div', 'tn-top');
    var deBai = tao('div', 'tn-de', '&nbsp;');
    var meta = tao('div', 'tn-meta');
    var oDiem = tao('span', 'tn-chip tn-chip-diem', '<i>Điểm</i><b>0</b>');
    var oTim = tao('span', 'tn-chip tn-chip-tim', '<b></b>');
    var oGio = tao('span', 'tn-chip tn-chip-gio', '<i>Giây</i><b>—</b>');
    meta.appendChild(oDiem);
    if (tuy.tim) meta.appendChild(oTim);
    if (tuy.gio) meta.appendChild(oGio);
    tren.appendChild(deBai);
    tren.appendChild(meta);
    var san = tao('div', 'tn-san');
    var duoi = tao('div', 'tn-duoi');
    goc.appendChild(tren); goc.appendChild(san); goc.appendChild(duoi);
    hop.appendChild(goc);
    var sk = {
      goc: goc, san: san, duoi: duoi,
      deBai: function (h) { deBai.innerHTML = h; },
      diem: function (n) {
        var b = oDiem.querySelector('b');
        if (b.textContent !== String(n)) { b.textContent = n; oDiem.classList.remove('nhun'); void oDiem.offsetWidth; oDiem.classList.add('nhun'); }
      },
      tim: function (n, toiDa) {
        var s = '';
        for (var i = 0; i < (toiDa || 3); i++) s += i < n ? '❤️' : '🤍';
        oTim.querySelector('b').textContent = s;
      },
      gio: function (n) { oGio.querySelector('b').textContent = n; oGio.classList.toggle('thap', n <= 5); },
      // Hien tam mot dong chu bay len giua san (vd "+10", "Chuỗi 3!")
      bay: function (chu, loai) {
        var b = tao('div', 'tn-bay ' + (loai || ''), esc(chu));
        san.appendChild(b);
        setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 1100);
      }
    };
    if (tuy.tim) sk.tim(tuy.tim, tuy.tim);
    return sk;
  }

  /* ---------------- dong ho dem nguoc ---------------- */
  function demNguoc(giay, moiGiay, het) {
    var con = giay, id = setInterval(function () {
      con--;
      moiGiay(con);
      if (con <= 0) { clearInterval(id); het(); }
    }, 1000);
    moiGiay(con);
    return {
      dung: function () { clearInterval(id); },
      them: function (n) { con += n; moiGiay(con); },
      con: function () { return con; }
    };
  }

  /* ---------------- man ket qua + ky luc ---------------- */
  function kyLuc(key, diem) {
    var k = 'hyv_tn_kl_' + key, cu = 0;
    try { cu = parseInt(localStorage.getItem(k) || '0', 10) || 0; } catch (e) { /* bo qua */ }
    var moi = diem > cu;
    if (moi) { try { localStorage.setItem(k, String(diem)); } catch (e) { /* bo qua */ } }
    return { cu: cu, moi: moi && diem > 0 };
  }
  // Doc ky luc (game-hub.js hien tren the tro choi)
  function docKyLuc(key) {
    try { return parseInt(localStorage.getItem('hyv_tn_kl_' + key) || '0', 10) || 0; } catch (e) { return 0; }
  }

  /* Choi xong 1 van tu 5 cau tro len = 1 ngay hoc, cung quy tac voi trang chu
     (QUY_TAC_NGAY_HOC trong app.js: "lam tu 5 cau bai tap"). Ghi vao hyv_study_days
     cua may nay; trang chu tu gop + dong bo len tai khoan o lan mo tiep theo.
     So phut hoc thi widgets.js (server tu gan vao game.html) da tu dem khi dang choi. */
  var SO_CAU_NGAY_HOC = 5;
  function ghiNgayHoc(kq) {
    if (!kq || !(kq.tong >= SO_CAU_NGAY_HOC)) return false;
    try {
      var d = new Date();
      var k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      var ds = JSON.parse(localStorage.getItem('hyv_study_days') || '[]');
      if (!Array.isArray(ds)) ds = [];
      if (ds.indexOf(k) === -1) { ds.push(k); localStorage.setItem('hyv_study_days', JSON.stringify(ds)); }
      return true;
    } catch (e) { return false; }
  }

  // kq: { diem, dung, tong, chuoi, thang (true/false/undefined), loi }
  function ketQua(sk, key, kq, choiLai) {
    sk.san.innerHTML = '';
    sk.duoi.innerHTML = '';
    var pt = kq.tong ? kq.dung / kq.tong : 0;
    var sao = kq.thang === false ? (pt >= 0.6 ? 1 : 0) : pt >= 0.9 ? 3 : pt >= 0.7 ? 2 : pt >= 0.4 ? 1 : 0;
    if (kq.thang === true && sao < 2) sao = 2;
    var kl = kyLuc(key, kq.diem);
    var tinhNgay = ghiNgayHoc(kq);
    var b = tao('div', 'tn-ketqua');
    b.innerHTML =
      '<div class="tn-kq-sao" aria-label="' + sao + ' sao">' + [0, 1, 2].map(function (i) {
        return '<span class="' + (i < sao ? 'on' : '') + '" style="animation-delay:' + (i * 0.18) + 's">★</span>';
      }).join('') + '</div>' +
      '<div class="tn-kq-tit">' + esc(kq.loi || (kq.thang === false ? 'Suýt nữa rồi!' : sao >= 3 ? 'Xuất sắc!' : sao >= 2 ? 'Giỏi lắm!' : 'Cố lên nhé!')) + '</div>' +
      '<div class="tn-kq-diem">' + kq.diem + ' <small>điểm</small></div>' +
      '<div class="tn-kq-chi">Đúng ' + kq.dung + '/' + kq.tong + (kq.chuoi > 1 ? ' · chuỗi dài nhất ' + kq.chuoi : '') + '</div>' +
      '<div class="tn-kq-kl">' + (kl.moi ? '🏆 Kỷ lục mới!' : 'Kỷ lục của em: ' + Math.max(kl.cu, kq.diem)) + '</div>' +
      (tinhNgay ? '<div class="tn-kq-ngay">🔥 Đã tính 1 ngày học — giữ chuỗi ngày học của em</div>'
        : '<div class="tn-kq-ngay is-chua">Làm từ ' + SO_CAU_NGAY_HOC + ' câu trở lên để tính 1 ngày học</div>');
    var nut = tao('button', 'tn-nut tn-nut-chinh', '↻ Chơi lại');
    nut.type = 'button';
    nut.addEventListener('click', choiLai);
    b.appendChild(nut);
    if (kq.saiDs && kq.saiDs.length) {
      var on = tao('div', 'tn-kq-on', '<b>Ôn lại các từ em làm sai:</b>' + kq.saiDs.slice(0, 8).map(function (v) {
        return '<span><em>' + esc(v.zh) + '</em> · ' + esc(v.vn) + '</span>';
      }).join(''));
      b.appendChild(on);
    }
    if (window.SaoGame) {
      var saoHtml = window.SaoGame.tongKetHtml();
      if (saoHtml) b.insertAdjacentHTML('beforeend', saoHtml);
      window.SaoGame.batDauVan();
    }
    sk.san.appendChild(b);
    if (sao >= 2) keuThang();
    setTimeout(function () { try { nut.focus(); } catch (e) { /* */ } }, 50);
  }

  /* ---------------- man gioi thieu truoc khi choi ----------------
     t = { ic, ten, luat (html), nut }. Bam nut -> batDau(). */
  function manMoi(sk, t, batDau) {
    sk.san.innerHTML = '';
    sk.duoi.innerHTML = '';
    sk.deBai('');
    var b = tao('div', 'tn-moi',
      '<div class="tn-moi-ic" aria-hidden="true">' + (t.ic || '🎮') + '</div>' +
      '<h2>' + esc(t.ten) + '</h2><p>' + (t.luat || '') + '</p>');
    var nut = tao('button', 'tn-nut tn-nut-chinh', esc(t.nut || 'Bắt đầu ▶'));
    nut.type = 'button';
    nut.addEventListener('click', batDau);
    b.appendChild(nut);
    sk.san.appendChild(b);
    setTimeout(function () { try { nut.focus(); } catch (e) { /* */ } }, 50);
  }

  /* ---------------- dang ky ---------------- */
  var KHO = {}, THU_TU = [];
  window.TroNha = {
    tao: tao, tron: tron, esc: esc, doc: doc, keu: keu, keuDung: function (khongSao) { keuDung(); if (!khongSao) ghiSao(true); },
    keuSai: function () { keuSai(); ghiSao(false); }, keuThang: keuThang, rung: rung,
    itChuyenDong: itChuyenDong,
    cauHoi: cauHoi, boCau: boCau, oDapAn: oDapAn, khung: khung, demNguoc: demNguoc, ketQua: ketQua, manMoi: manMoi,
    docKyLuc: docKyLuc,
    dangKy: function (g) { if (!KHO[g.key]) THU_TU.push(g.key); KHO[g.key] = g; }
  };

  // Giao dien cu ma game-hub.js dang goi
  window.Arcade = {
    kho: KHO,
    danhSach: function () { return THU_TU.map(function (k) { return KHO[k]; }); },
    mo: function (hop, key, o) {
      var g = KHO[key];
      if (!g) return { dung: function () { } };
      o = o || {};
      var vocab = (o.vocab || []).filter(function (v) { return v && v.zh && v.vn; });
      if (vocab.length < (g.canToiThieu || 4)) {
        hop.innerHTML = '<p class="tn-thieu">Các bài đã chọn mới có ' + vocab.length +
          ' từ — trò “' + esc(g.ten) + '” cần ít nhất ' + (g.canToiThieu || 4) + ' từ. Chọn thêm bài rồi chơi lại nhé.</p>';
        return { dung: function () { } };
      }
      // Tro choi khong hien pinyin (co yeu cau hoc sinh doc chu Han) — bo py ngay tu dau vao
      o.vocab = vocab.map(function (v) { var c = {}; for (var k in v) c[k] = v[k]; c.py = ''; return c; });
      if (window.SaoGame) window.SaoGame.batDauVan();
      return g.mo(hop, o);
    }
  };
})();
