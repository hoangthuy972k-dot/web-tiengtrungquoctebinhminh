/* ══════════════════════════════════════════════════════════════════
   KHO TRO CHOI TUONG TAC — Hi Han 喜汉
   ------------------------------------------------------------------
   Cac tro choi bam/cham tren man hinh, dung chung cho HAI che do:

     cheDo:'lop'  — chieu len lop. Chu to, khong dem nguoc, sai khong
                    bi tru diem. Thay/co bam sau khi hoc sinh doc.
     cheDo:'hoc'  — hoc sinh tu choi trong app. Co dong ho, co diem,
                    co chuoi dung lien tiep, cuoi van co bang ket qua.

   Moi tro deu chay bang MANG TU VUNG cua bai hoc:
     { zh, py, vn, hv, em, hanzi[] }
   nen them mot bai moi la ca kho tro choi co noi dung moi — khong phai
   go lai tung tu vao tung tro nhu ban PowerPoint.

   Cach dung:
     var phien = Arcade.mo(hopChua, 'bubble', {
       vocab: mangTu, cheDo: 'hoc', onXong: function (kq) {...}
     });
     phien.dung();            // go bo, dung moi dong ho va vong lap
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
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  }
  // Doc chu Han. Tat khi trinh duyet khong ho tro — khong lam vo tro choi.
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
  function keu(tanSo, dai) {
    try {
      if (!window.AudioContext && !window.webkitAudioContext) return;
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      var o = actx.createOscillator(), g = actx.createGain();
      o.type = 'sine';
      o.frequency.value = tanSo;
      g.gain.value = 0.06;
      o.connect(g); g.connect(actx.destination);
      o.start();
      g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dai);
      o.stop(actx.currentTime + dai);
    } catch (e) { /* bo qua */ }
  }
  function keuDung() { keu(880, 0.14); }
  function keuSai() { keu(180, 0.2); }

  /* ══════════════ KHUNG CHUNG ══════════════
     Moi tro nhan mot doi tuong `sanKhau` co san: thanh tren (de bai +
     diem + dong ho), vung choi, thanh duoi (nut). Tro chi lo phan choi. */
  function dungKhung(hop, dinh, o) {
    var lop = o.cheDo === 'lop';
    hop.innerHTML = '';
    // Tien to 'ar-tro-' de class goc khong bao gio dung ten voi class cua
    // cac manh ben trong (vd .ar-mole la con chuot, khong phai khung game).
    var goc = tao('div', 'ar ar-tro-' + dinh.key + (lop ? ' ar-lop' : ' ar-hoc'));

    var tren = tao('div', 'ar-top');
    var deBai = tao('div', 'ar-prompt', '&nbsp;');
    var meta = tao('div', 'ar-meta');
    var oDiem = tao('span', 'ar-chip ar-chip-diem', '<i>Điểm</i><b>0</b>');
    var oGio = tao('span', 'ar-chip ar-chip-gio', '<i>Giây</i><b>—</b>');
    meta.appendChild(oDiem);
    if (!lop) meta.appendChild(oGio);
    tren.appendChild(deBai);
    tren.appendChild(meta);

    var san = tao('div', 'ar-stage');
    var duoi = tao('div', 'ar-foot');

    goc.appendChild(tren);
    goc.appendChild(san);
    goc.appendChild(duoi);
    hop.appendChild(goc);

    return {
      goc: goc, san: san, duoi: duoi, lop: lop,
      deBai: function (h) { deBai.innerHTML = h; },
      diem: function (n) { oDiem.querySelector('b').textContent = n; },
      gio: function (n) { oGio.querySelector('b').textContent = n; },
      anGio: function () { oGio.style.display = 'none'; }
    };
  }

  /* Bang ket qua cuoi van (chi che do hoc sinh). */
  function ketQua(sk, kq, choiLai) {
    sk.san.innerHTML = '';
    var b = tao('div', 'ar-over');
    var pt = kq.tong ? Math.round(kq.dung / kq.tong * 100) : 0;
    b.innerHTML =
      '<div class="ar-over-emoji">' + (pt >= 80 ? '🎉' : pt >= 50 ? '👏' : '💪') + '</div>' +
      '<div class="ar-over-diem">' + kq.diem + ' điểm</div>' +
      '<div class="ar-over-chi">Đúng ' + kq.dung + '/' + kq.tong +
        (kq.chuoi ? ' · chuỗi dài nhất ' + kq.chuoi : '') + '</div>';
    var nut = tao('button', 'ar-btn ar-btn-chinh', 'Chơi lại');
    nut.type = 'button';
    nut.addEventListener('click', choiLai);
    b.appendChild(nut);
    sk.san.appendChild(b);
  }

  /* ══════════════════════════════════════════════════════════════
     1 · BONG BÓNG  (吹泡泡 · 找珍珠 · 扭蛋机 · 小青蛙找妈妈)
     Bong bóng mang chữ Hán nổi lên. Đọc nghĩa tiếng Việt ở trên,
     bấm đúng bong bóng mang chữ đó.
     ══════════════════════════════════════════════════════════════ */
  var bubble = {
    key: 'bubble',
    chu: '泡',
    anh: '/img/game/bong-bong.png',
    nen: 'linear-gradient(160deg,#5fd0c6 0%,#17a89f 100%)',
    ten: 'Bắn bong bóng chữ',
    emoji: '🎈',
    mau: 'teal',
    moTa: 'Bong bóng mang chữ Hán nổi lên, bấm đúng bong bóng ứng với nghĩa tiếng Việt.',
    moTaLop: 'Bong bóng mang chữ Hán nổi lên. Học sinh đọc chữ, đọc đúng thì thầy/cô bấm cho bóng vỡ.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var sk = dungKhung(hop, bubble, o);
      sk.san.classList.add('ar-bong-nen');
      var vocab = o.vocab;
      var diem = 0, dung = 0, tong = 0, chuoi = 0, chuoiMax = 0;
      var bong = [], dich = null, raf = 0, dongHo = 0, conLai = o.cheDo === 'lop' ? 0 : 75;
      var truoc = 0, song = true;

      function keDich() {
        dich = vocab[Math.floor(Math.random() * vocab.length)];
        sk.deBai('<span class="ar-p-nhan">Tìm chữ có nghĩa</span><b>' + esc(dich.vn) + '</b>');
      }

      function themBong() {
        if (bong.length >= (sk.lop ? 5 : 6)) return;
        // Luon giu it nhat mot bong mang chu dang can tim.
        var coDich = bong.some(function (b) { return b.tu.zh === dich.zh; });
        var tu;
        if (!coDich) tu = dich;
        else {
          // Khong tha trung chu voi bong dang noi — nhin cho de phan biet.
          var dangCo = {};
          bong.forEach(function (x) { dangCo[x.tu.zh] = 1; });
          var con = vocab.filter(function (v) { return !dangCo[v.zh]; });
          if (!con.length) return;
          tu = con[Math.floor(Math.random() * con.length)];
        }
        var d = tao('button', 'ar-bub');
        d.type = 'button';
        d.innerHTML = '<span class="ar-bub-zh">' + esc(tu.zh) + '</span>' +
                      '<span class="ar-bub-py">' + esc(tu.py) + '</span>';
        var co = 1 + Math.min(tu.zh.length, 4) * 0.13;
        d.style.setProperty('--co', co);
        // y = phan tram CHIEU CAO SAN, dat qua thuoc tinh bottom (transform
        // dung % thi lai tinh theo chinh bong bong nen khong dung o day).
        var b = {
          nut: d, tu: tu,
          x: 6 + Math.random() * 78,
          // Bay cham de kip doc chu Han + nghia: tu hoc ~4–6 giay, chieu lop
          // ~5–8 giay moi qua het san. Xuat phat sat mep duoi cho khoi cho lau.
          y: -22 - Math.random() * 8,
          v: (sk.lop ? 1.7 : 2.3) + Math.random() * (sk.lop ? 0.8 : 1.1),
          lac: Math.random() * Math.PI * 2
        };
        d.style.left = b.x + '%';
        d.style.bottom = b.y + '%';
        d.addEventListener('click', function () { no(b); });
        sk.san.appendChild(d);
        bong.push(b);
      }

      function boBong(b, lopHieuUng) {
        if (lopHieuUng) b.nut.classList.add(lopHieuUng);
        var i = bong.indexOf(b);
        if (i >= 0) bong.splice(i, 1);
        setTimeout(function () {
          if (b.nut.parentNode) b.nut.parentNode.removeChild(b.nut);
        }, lopHieuUng ? 260 : 0);
      }

      function no(b) {
        if (!song) return;
        var ok = b.tu.zh === dich.zh;
        tong++;
        if (ok) {
          dung++; chuoi++; chuoiMax = Math.max(chuoiMax, chuoi);
          diem += sk.lop ? 1 : 10 + Math.min(chuoi, 5) * 2;
          keuDung(); doc(b.tu.zh);
          boBong(b, 'ar-bub-no');
          sk.diem(diem);
          if (o.onDiem) o.onDiem(diem);
          keDich();
        } else {
          chuoi = 0;
          if (!sk.lop) { diem = Math.max(0, diem - 5); sk.diem(diem); }
          keuSai();
          b.nut.classList.remove('ar-bub-lac');
          void b.nut.offsetWidth;
          b.nut.classList.add('ar-bub-lac');
        }
      }

      function khung(t) {
        if (!song) return;
        var dt = truoc ? Math.min((t - truoc) / 1000, 0.05) : 0.016;
        truoc = t;
        bong.slice().forEach(function (b) {
          b.y += b.v * dt * 10;
          b.lac += dt * 1.6;
          b.nut.style.bottom = b.y.toFixed(1) + '%';
          b.nut.style.transform = 'translate3d(' + (Math.sin(b.lac) * 14).toFixed(1) + 'px,0,0)';
          if (b.y > 112) boBong(b, '');
        });
        if (Math.random() < 0.035) themBong();
        // Neu chu dang tim troi mat thi tha lai ngay.
        if (!bong.some(function (b) { return b.tu.zh === dich.zh; }) && Math.random() < 0.08) themBong();
        raf = requestAnimationFrame(khung);
      }

      function batDau() {
        song = true; truoc = 0;
        diem = 0; dung = 0; tong = 0; chuoi = 0; chuoiMax = 0;
        bong = [];
        sk.san.innerHTML = '';
        sk.diem(0);
        keDich();
        for (var i = 0; i < 3; i++) themBong();
        raf = requestAnimationFrame(khung);
        if (!sk.lop) {
          conLai = 75;
          sk.gio(conLai);
          dongHo = setInterval(function () {
            conLai--;
            sk.gio(conLai);
            if (conLai <= 0) het();
          }, 1000);
        } else sk.anGio();
      }

      function het() {
        song = false;
        cancelAnimationFrame(raf);
        clearInterval(dongHo);
        ketQua(sk, { diem: diem, dung: dung, tong: tong, chuoi: chuoiMax }, batDau);
        if (o.onXong) o.onXong({ diem: diem, dung: dung, tong: tong });
      }

      batDau();
      return {
        dung: function () {
          song = false;
          cancelAnimationFrame(raf);
          clearInterval(dongHo);
        }
      };
    }
  };

  /* ══════════════════════════════════════════════════════════════
     2 · ĐẬP CHUỘT  (打地鼠)
     Chuột thò lên khỏi hang, mỗi con mang một chữ. Đập đúng con
     mang chữ ứng với nghĩa đang hỏi.
     ══════════════════════════════════════════════════════════════ */
  var mole = {
    key: 'mole',
    chu: '鼠',
    anh: '/img/game/chuot.png',
    nen: 'linear-gradient(160deg,#e8c99a 0%,#c99a62 100%)',
    ten: 'Đập chuột chọn chữ',
    emoji: '🐹',
    mau: 'orange',
    moTa: 'Chuột thò lên mang chữ Hán, đập đúng con mang chữ ứng với nghĩa đang hỏi.',
    moTaLop: 'Chuột thò lên mang chữ Hán. Gọi một em đọc, đúng thì thầy/cô đập con chuột đó.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var sk = dungKhung(hop, mole, o);
      var vocab = o.vocab;
      var SO_HANG = 9;
      var diem = 0, dung = 0, tong = 0, chuoi = 0, chuoiMax = 0;
      var hang = [], dich = null, nhip = 0, dongHo = 0, conLai = 60, song = true;

      sk.san.classList.add('ar-moles');
      for (var i = 0; i < SO_HANG; i++) {
        var h = tao('div', 'ar-hole');
        var c = tao('button', 'ar-mole');
        c.type = 'button';
        c.innerHTML = '<span class="ar-mole-than"><i class="ar-mole-mat"></i><i class="ar-mole-mat"></i></span>' +
                      '<span class="ar-mole-zh"></span>';
        h.appendChild(c);
        sk.san.appendChild(h);
        hang.push({ o: h, nut: c, tu: null, len: false });
      }
      hang.forEach(function (x) {
        x.nut.addEventListener('click', function () { dap(x); });
      });

      function keDich() {
        dich = vocab[Math.floor(Math.random() * vocab.length)];
        sk.deBai('<span class="ar-p-nhan">Đập con mang chữ có nghĩa</span><b>' + esc(dich.vn) + '</b>');
      }

      function hien(x, tu) {
        x.tu = tu; x.len = true;
        x.nut.querySelector('.ar-mole-zh').textContent = tu.zh;
        x.nut.classList.add('is-len');
      }
      function an(x) {
        x.len = false; x.tu = null;
        x.nut.classList.remove('is-len');
      }

      function dot() {
        if (!song) return;
        // An bot con cu, tha con moi — luon giu it nhat 1 con dung.
        hang.forEach(function (x) { if (x.len && Math.random() < 0.45) an(x); });
        var trong = hang.filter(function (x) { return !x.len; });
        if (!trong.length) return;
        var soRa = Math.min(trong.length, sk.lop ? 3 : 2 + Math.floor(Math.random() * 2));
        var chon = tron(trong).slice(0, soRa);
        var coDich = hang.some(function (x) { return x.len && x.tu && x.tu.zh === dich.zh; });
        // Moi dot chi tha cac chu KHAC NHAU va khac chu dang co tren san —
        // de ba con chuot cung deo mot chu thi hoc sinh nhin rat roi.
        var dangCo = {};
        hang.forEach(function (x) { if (x.len && x.tu) dangCo[x.tu.zh] = 1; });
        var con = tron(vocab.filter(function (v) { return !dangCo[v.zh]; }));
        chon.forEach(function (x, k) {
          var tu;
          if (!coDich && k === 0) tu = dich;
          else tu = con.shift();
          if (!tu) return;                       // het chu khac de tha thi thoi
          dangCo[tu.zh] = 1;
          con = con.filter(function (v) { return v.zh !== tu.zh; });
          hien(x, tu);
        });
      }

      function dap(x) {
        if (!song || !x.len) return;
        var ok = x.tu.zh === dich.zh;
        tong++;
        if (ok) {
          dung++; chuoi++; chuoiMax = Math.max(chuoiMax, chuoi);
          diem += sk.lop ? 1 : 10 + Math.min(chuoi, 5) * 2;
          keuDung(); doc(x.tu.zh);
          x.nut.classList.add('ar-mole-trung');
          setTimeout(function () { x.nut.classList.remove('ar-mole-trung'); an(x); }, 240);
          sk.diem(diem);
          if (o.onDiem) o.onDiem(diem);
          keDich();
        } else {
          chuoi = 0;
          if (!sk.lop) { diem = Math.max(0, diem - 5); sk.diem(diem); }
          keuSai();
          x.nut.classList.add('ar-mole-truot');
          setTimeout(function () { x.nut.classList.remove('ar-mole-truot'); }, 300);
        }
      }

      function batDau() {
        song = true;
        diem = 0; dung = 0; tong = 0; chuoi = 0; chuoiMax = 0;
        hang.forEach(an);
        sk.diem(0);
        keDich();
        dot();
        nhip = setInterval(dot, sk.lop ? 2600 : 1500);
        if (!sk.lop) {
          conLai = 60;
          sk.gio(conLai);
          dongHo = setInterval(function () {
            conLai--; sk.gio(conLai);
            if (conLai <= 0) het();
          }, 1000);
        } else sk.anGio();
      }

      function het() {
        song = false;
        clearInterval(nhip); clearInterval(dongHo);
        hang.forEach(an);
        var giu = sk.san.innerHTML;
        sk.san.classList.remove('ar-moles');
        ketQua(sk, { diem: diem, dung: dung, tong: tong, chuoi: chuoiMax }, function () {
          sk.san.innerHTML = giu;
          sk.san.classList.add('ar-moles');
          hang = [];
          Array.prototype.forEach.call(sk.san.querySelectorAll('.ar-hole'), function (h) {
            var x = { o: h, nut: h.querySelector('.ar-mole'), tu: null, len: false };
            x.nut.addEventListener('click', function () { dap(x); });
            hang.push(x);
          });
          batDau();
        });
        if (o.onXong) o.onXong({ diem: diem, dung: dung, tong: tong });
      }

      batDau();
      return { dung: function () { song = false; clearInterval(nhip); clearInterval(dongHo); } };
    }
  };

  /* ══════════════════════════════════════════════════════════════
     3 · LẬT THẺ TRÍ NHỚ  (LUCKY CARDS 翻牌游戏)
     Úp các thẻ, lật hai thẻ một lượt. Chữ Hán ghép với nghĩa
     tiếng Việt thì cặp đó ở lại.
     ══════════════════════════════════════════════════════════════ */
  var memory = {
    key: 'memory',
    chu: '忆',
    anh: '',
    nen: 'linear-gradient(160deg,#c49af0 0%,#8248c9 100%)',
    ten: 'Lật thẻ trí nhớ',
    emoji: '🎴',
    mau: 'purple',
    moTa: 'Lật hai thẻ một lượt, ghép chữ Hán với nghĩa tiếng Việt cho đến khi hết bàn.',
    moTaLop: 'Chiếu bàn thẻ úp. Từng tổ chọn hai thẻ để lật — ghép đúng thì tổ đó được điểm.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var sk = dungKhung(hop, memory, o);
      var vocab = o.vocab;
      var soCap = Math.min(8, Math.max(4, vocab.length >= 8 ? 8 : vocab.length));
      var the = [], mo1 = null, khoa = false, ghep = 0, luot = 0, dongHo = 0, giay = 0, song = true;

      function batDau() {
        song = true;
        mo1 = null; khoa = false; ghep = 0; luot = 0; giay = 0;
        sk.diem(0);
        sk.deBai('<span class="ar-p-nhan">Ghép chữ Hán với nghĩa</span><b>0/' + soCap + ' cặp</b>');
        var chon = tron(vocab).slice(0, soCap);
        var bai = [];
        chon.forEach(function (v, i) {
          bai.push({ id: i, mat: 'zh', tu: v });
          bai.push({ id: i, mat: 'vn', tu: v });
        });
        bai = tron(bai);
        sk.san.innerHTML = '';
        sk.san.className = 'ar-stage ar-cards';
        the = bai.map(function (b) {
          var n = tao('button', 'ar-card');
          n.type = 'button';
          n.innerHTML =
            '<span class="ar-card-lung">喜</span>' +
            '<span class="ar-card-mat">' +
              (b.mat === 'zh'
                ? '<b class="ar-card-zh">' + esc(b.tu.zh) + '</b><i class="ar-card-py">' + esc(b.tu.py) + '</i>'
                : '<b class="ar-card-vn">' + esc(b.tu.vn) + '</b>') +
            '</span>';
          var t = { nut: n, id: b.id, mat: b.mat, tu: b.tu, xong: false };
          n.addEventListener('click', function () { lat(t); });
          sk.san.appendChild(n);
          return t;
        });
        clearInterval(dongHo);
        if (!sk.lop) {
          sk.gio(0);
          dongHo = setInterval(function () { giay++; sk.gio(giay); }, 1000);
        } else sk.anGio();
      }

      function lat(t) {
        if (!song || khoa || t.xong || t.nut.classList.contains('is-mo')) return;
        t.nut.classList.add('is-mo');
        if (t.mat === 'zh') doc(t.tu.zh);
        if (!mo1) { mo1 = t; return; }
        luot++;
        if (mo1.id === t.id && mo1.mat !== t.mat) {
          mo1.xong = t.xong = true;
          mo1.nut.classList.add('is-xong');
          t.nut.classList.add('is-xong');
          ghep++;
          keuDung();
          sk.diem(ghep);
          if (o.onDiem) o.onDiem(ghep);
          sk.deBai('<span class="ar-p-nhan">Ghép chữ Hán với nghĩa</span><b>' + ghep + '/' + soCap + ' cặp</b>');
          mo1 = null;
          if (ghep === soCap) het();
        } else {
          keuSai();
          khoa = true;
          var a = mo1; mo1 = null;
          setTimeout(function () {
            a.nut.classList.remove('is-mo');
            t.nut.classList.remove('is-mo');
            khoa = false;
          }, 800);
        }
      }

      function het() {
        song = false;
        clearInterval(dongHo);
        var diem = sk.lop ? ghep : Math.max(10, soCap * 20 - (luot - soCap) * 5 - giay);
        sk.san.className = 'ar-stage';
        ketQua(sk, { diem: diem, dung: ghep, tong: soCap, chuoi: 0 }, function () {
          batDau();
        });
        if (o.onXong) o.onXong({ diem: diem, dung: ghep, tong: soCap });
      }

      batDau();
      return { dung: function () { song = false; clearInterval(dongHo); } };
    }
  };

  /* ══════════════════════════════════════════════════════════════
     7 · MÊ CUNG ĐỌC CHỮ  (tìm lối ra mê cung)
     Đi từ 起点 tới 终点. Mỗi bước chỉ được bước sang ô kề bên mang
     chữ đúng nghĩa đang hỏi — bước sai thì bật lại.

     Duong di duoc dung san TRUOC khi rai chu, nen me cung luon co
     loi ra; chu dung dat vao o ke tiep tren duong di do.
     ══════════════════════════════════════════════════════════════ */
  var maze = {
    key: 'maze',
    chu: '迷',
    anh: '/img/game/ruong.png',
    nen: 'linear-gradient(160deg,#8fa8ef 0%,#4a63c9 100%)',
    ten: 'Mê cung đọc chữ',
    emoji: '🧭',
    mau: 'blue',
    moTa: 'Đi từ điểm xuất phát tới cửa ra, mỗi bước chọn ô kề bên mang chữ đúng nghĩa.',
    moTaLop: 'Chiếu mê cung, cả lớp đọc các ô kề bên rồi chỉ hướng đi. Thầy/cô bấm ô mà lớp chọn.',
    canToiThieu: 5,
    mo: function (hop, o) {
      var sk = dungKhung(hop, maze, o);
      var vocab = o.vocab;
      var COT = 6, HANG = 5;
      var o_ = [], tu_ = [], duong = [], buoc = 0, tai = null;
      var diem = 0, dung = 0, tong = 0, song = true, hen = [];

      sk.san.classList.add('ar-me');
      sk.anGio();

      function xoaHen() { hen.forEach(clearTimeout); hen = []; }
      function chiSo(x, y) { return y * COT + x; }

      /* Dung mot duong di ngau nhien tu goc duoi-trai len goc tren-phai.
         Chi di sang phai hoac len tren nen chac chan toi noi, khong quanh. */
      function veDuong() {
        var p = [{ x: 0, y: HANG - 1 }];
        var x = 0, y = HANG - 1;
        while (x < COT - 1 || y > 0) {
          var sangPhai;
          if (x >= COT - 1) sangPhai = false;
          else if (y <= 0) sangPhai = true;
          else sangPhai = Math.random() < 0.5;
          if (sangPhai) x++; else y--;
          p.push({ x: x, y: y });
        }
        return p;
      }

      function raiChu() {
        // Moi o mot chu; hai o ke nhau khong trung chu de con phan biet duoc.
        tu_ = [];
        for (var i = 0; i < COT * HANG; i++) tu_.push(null);
        duong.forEach(function (p, i) {
          var cam = {};
          [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) {
            var k = chiSo(p.x + d[0], p.y + d[1]);
            if (tu_[k]) cam[tu_[k].zh] = 1;
          });
          if (i > 0 && tu_[chiSo(duong[i - 1].x, duong[i - 1].y)]) {
            cam[tu_[chiSo(duong[i - 1].x, duong[i - 1].y)].zh] = 1;
          }
          var con = vocab.filter(function (v) { return !cam[v.zh]; });
          tu_[chiSo(p.x, p.y)] = (con.length ? con : vocab)[Math.floor(Math.random() * (con.length ? con.length : vocab.length))];
        });
        for (var k2 = 0; k2 < tu_.length; k2++) {
          if (tu_[k2]) continue;
          tu_[k2] = vocab[Math.floor(Math.random() * vocab.length)];
        }
        // Quet lai ca luoi: khong de hai o KE NHAU mang cung mot chu —
        // bai it tu thi chu se lap lai, nhung lap canh nhau thi roi mat.
        for (var y2 = 0; y2 < HANG; y2++) {
          for (var x2 = 0; x2 < COT; x2++) {
            var k3 = chiSo(x2, y2);
            var tren = y2 > 0 ? tu_[chiSo(x2, y2 - 1)] : null;
            var trai = x2 > 0 ? tu_[chiSo(x2 - 1, y2)] : null;
            var lan2 = 0;
            while (lan2++ < 60 &&
              ((tren && tren.zh === tu_[k3].zh) || (trai && trai.zh === tu_[k3].zh))) {
              tu_[k3] = vocab[Math.floor(Math.random() * vocab.length)];
            }
          }
        }
        // Bao dam o ke tiep tren duong khac han cac o ke ben con lai.
        duong.forEach(function (p, i) {
          if (i === 0) return;
          var dungO = chiSo(p.x, p.y);
          var truoc = duong[i - 1];
          [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) {
            var nx = truoc.x + d[0], ny = truoc.y + d[1];
            if (nx < 0 || nx >= COT || ny < 0 || ny >= HANG) return;
            var k = chiSo(nx, ny);
            if (k === dungO) return;
            // Thay chu o nay neu no trung chu dich, va khi thay thi tranh
            // luon cac o ke ben no — khong lai de ra mot cap trung moi.
            var lan = 0;
            while (tu_[k] && tu_[k].zh === tu_[dungO].zh && lan++ < 60) {
              var cam2 = {};
              [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (e) {
                var ax = nx + e[0], ay = ny + e[1];
                if (ax < 0 || ax >= COT || ay < 0 || ay >= HANG) return;
                var t2 = tu_[chiSo(ax, ay)];
                if (t2) cam2[t2.zh] = 1;
              });
              cam2[tu_[dungO].zh] = 1;
              var con2 = vocab.filter(function (v) { return !cam2[v.zh]; });
              if (!con2.length) break;
              tu_[k] = con2[Math.floor(Math.random() * con2.length)];
            }
          });
        });
      }

      function ve() {
        sk.san.innerHTML = '';
        var luoi = tao('div', 'ar-me-luoi');
        luoi.style.setProperty('--cot', COT);
        luoi.style.setProperty('--hang', HANG);
        o_ = [];
        for (var y = 0; y < HANG; y++) {
          for (var x = 0; x < COT; x++) {
            var k = chiSo(x, y);
            var n = tao('button', 'ar-me-o');
            n.type = 'button';
            n.innerHTML = '<b>' + esc(tu_[k].zh) + '</b><i>' + esc(tu_[k].py) + '</i>';
            if (x === 0 && y === HANG - 1) n.classList.add('is-dau');
            if (x === COT - 1 && y === 0) n.classList.add('is-cuoi');
            (function (xx, yy, nut) {
              nut.addEventListener('click', function () { buocToi(xx, yy, nut); });
            })(x, y, n);
            luoi.appendChild(n);
            o_.push(n);
          }
        }
        sk.san.appendChild(luoi);
        veDau();
      }

      function veDau() {
        o_.forEach(function (n) { n.classList.remove('is-dangO', 'is-daDi'); });
        for (var i = 0; i <= buoc; i++) {
          var p = duong[i];
          o_[chiSo(p.x, p.y)].classList.add(i === buoc ? 'is-dangO' : 'is-daDi');
        }
        tai = duong[buoc];
        var ke = duong[buoc + 1];
        if (!ke) return;
        sk.deBai('<span class="ar-p-nhan">Bước ' + (buoc + 1) + '/' + (duong.length - 1) +
          ' · đi sang ô kề bên có nghĩa</span><b>' + esc(tu_[chiSo(ke.x, ke.y)].vn) + '</b>');
      }

      function buocToi(x, y, nut) {
        if (!song) return;
        var keBen = Math.abs(x - tai.x) + Math.abs(y - tai.y) === 1;
        if (!keBen) {
          nut.classList.remove('is-xa');
          void nut.offsetWidth;
          nut.classList.add('is-xa');
          return;
        }
        var ke = duong[buoc + 1];
        tong++;
        if (ke && x === ke.x && y === ke.y) {
          dung++;
          diem += sk.lop ? 1 : 12;
          keuDung(); doc(tu_[chiSo(x, y)].zh);
          buoc++;
          sk.diem(diem);
          if (o.onDiem) o.onDiem(diem);
          veDau();
          if (buoc >= duong.length - 1) {
            sk.deBai('<span class="ar-p-nhan">Tới nơi rồi</span><b>Ra khỏi mê cung 🎉</b>');
            hen.push(setTimeout(het, 1200));
          }
        } else {
          if (!sk.lop) diem = Math.max(0, diem - 4);
          sk.diem(diem);
          keuSai();
          nut.classList.remove('is-sai');
          void nut.offsetWidth;
          nut.classList.add('is-sai');
          hen.push(setTimeout(function () { nut.classList.remove('is-sai'); }, 500));
        }
      }

      function batDau() {
        song = true;
        xoaHen();
        diem = 0; dung = 0; tong = 0; buoc = 0;
        sk.diem(0);
        duong = veDuong();
        raiChu();
        ve();
      }

      function het() {
        song = false;
        xoaHen();
        sk.san.className = 'ar-stage';
        ketQua(sk, { diem: diem, dung: dung, tong: tong, chuoi: 0 }, function () {
          sk.san.className = 'ar-stage ar-me';
          batDau();
        });
        if (o.onXong) o.onXong({ diem: diem, dung: dung, tong: tong });
      }

      batDau();
      return { dung: function () { song = false; xoaHen(); } };
    }
  };

  /* ══════════════════════════════════════════════════════════════
     9 · VÒNG QUAY MAY MẮN  (抽奖合集 · bốc thăm trúng thưởng · tik tok)
     Quay để bốc ngẫu nhiên. Bốn thứ có thể đặt lên vòng quay:
       · từ vựng của bài đã chọn — quay trúng từ nào thì đọc từ đó
       · số thứ tự               — gọi học sinh theo số trong sổ
       · tổ                      — chọn tổ đi trước
       · danh sách tự nhập       — tên học sinh, ghi chú của thầy cô

     Ten hoc sinh CHI nam trong trinh duyet cua may thay co (localStorage),
     khong gui di dau, khong nam trong ma nguon.
     ══════════════════════════════════════════════════════════════ */
  var MAU_VQ = ['#c8372d', '#e9a23b', '#1f8a4c', '#2f5fdb', '#8a241d',
                '#b7791f', '#0d8a80', '#7c3aed', '#d9580c', '#db2777'];

  var wheel = {
    key: 'wheel',
    ten: 'Vòng quay may mắn',
    emoji: '🎯',
    chu: '运',
    anh: '',
    nen: 'linear-gradient(160deg,#f6d67a 0%,#c8372d 100%)',
    mau: 'gold',
    moTa: 'Quay để bốc ngẫu nhiên một từ — trúng từ nào thì đọc và đặt câu với từ đó.',
    moTaLop: 'Quay để bốc từ, gọi số thứ tự, chọn tổ đi trước hay bốc tên học sinh. Gạt “bỏ ra sau khi trúng” để không gọi trùng.',
    canToiThieu: 2,
    mo: function (hop, o) {
      var sk = dungKhung(hop, wheel, o);
      sk.san.classList.add('ar-vq');
      sk.anGio();

      var KIEU = [
        { id: 'tu', ten: 'Từ vựng' },
        { id: 'so', ten: 'Số thứ tự' },
        { id: 'to', ten: 'Tổ' },
        { id: 'tay', ten: 'Tự nhập' }
      ];
      var kieu = 'tu', siSo = 30, soTo = 4, boRa = false, tayTho = '';
      var danhSach = [], daTrung = [], dang = false, hen = [], canVeLai = false;
      var oQuay, oKim, oNut, oKetQua;

      try {
        var d = JSON.parse(localStorage.getItem('hyv_vq') || '{}');
        if (d.kieu) kieu = d.kieu;
        if (d.siSo) siSo = d.siSo;
        if (d.soTo) soTo = d.soTo;
        if (typeof d.boRa === 'boolean') boRa = d.boRa;
        if (typeof d.tay === 'string') tayTho = d.tay;
      } catch (e) { /* bo qua */ }
      function luu() {
        try {
          localStorage.setItem('hyv_vq', JSON.stringify(
            { kieu: kieu, siSo: siSo, soTo: soTo, boRa: boRa, tay: tayTho }));
        } catch (e) { /* bo qua */ }
      }
      function xoaHen() { hen.forEach(clearTimeout); hen = []; }

      /* Lap danh sach o tren vong quay theo kieu dang chon. */
      function lapDanhSach() {
        var ds = [];
        if (kieu === 'tu') {
          ds = tron(o.vocab).map(function (v) { return { chinh: v.zh, phu: v.py, goi: v.vn }; });
        } else if (kieu === 'so') {
          for (var i = 1; i <= siSo; i++) ds.push({ chinh: String(i), phu: '', goi: 'Số ' + i });
        } else if (kieu === 'to') {
          for (var t = 1; t <= soTo; t++) ds.push({ chinh: 'Tổ ' + t, phu: '', goi: 'Tổ ' + t });
        } else {
          ds = tayTho.split('\n').map(function (x) { return x.trim(); })
            .filter(Boolean).map(function (x) { return { chinh: x, phu: '', goi: x }; });
        }
        // Bo nhung o da trung neu thay co bat "bo ra sau khi trung".
        if (boRa && daTrung.length) {
          ds = ds.filter(function (x) { return daTrung.indexOf(x.chinh) < 0; });
        }
        return ds;
      }

      function ve() {
        danhSach = lapDanhSach();
        // Vong quay nhieu hon 12 o thi chu be li ti — boc ngau nhien 12 o.
        var hien = danhSach.length > 12 ? tron(danhSach).slice(0, 12) : danhSach;
        oQuay.innerHTML = '';
        oQuay.style.transform = 'rotate(0deg)';
        oQuay.__hien = hien;

        if (!hien.length) {
          oQuay.style.background = 'var(--color-gray-200)';
          oKetQua.innerHTML = '<span class="ar-vq-het">Hết mất rồi — bấm “Quay lại từ đầu”.</span>';
          return;
        }
        var buoc = 360 / hien.length;
        var mieng = hien.map(function (x, i) {
          return MAU_VQ[i % MAU_VQ.length] + ' ' + (i * buoc).toFixed(2) + 'deg ' + ((i + 1) * buoc).toFixed(2) + 'deg';
        }).join(', ');
        oQuay.style.background = 'conic-gradient(' + mieng + ')';

        hien.forEach(function (x, i) {
          var n = tao('span', 'ar-vq-nhan');
          n.style.transform = 'rotate(' + (i * buoc + buoc / 2) + 'deg)';
          n.innerHTML = '<b>' + esc(x.chinh) + '</b>' + (x.phu ? '<i>' + esc(x.phu) + '</i>' : '');
          oQuay.appendChild(n);
        });
      }

      function quay() {
        if (dang) return;
        // Danh sach dai hon so o tren vong thi CHIA LAI truoc moi lan quay —
        // neu khong, si so 30 ma vong chi co 12 o thi 18 em con lai khong
        // bao gio duoc goi.
        if (canVeLai || (danhSach || []).length > 12) {
          canVeLai = false;
          oQuay.style.transition = 'none';
          ve();
          void oQuay.offsetWidth;
        }
        var hien = oQuay.__hien || [];
        if (!hien.length) return;
        dang = true;
        oNut.disabled = true;
        oKetQua.innerHTML = '';
        var buoc = 360 / hien.length;
        var i = Math.floor(Math.random() * hien.length);
        // Kim o dinh (goc 0). Quay nguoc lai de tam o thu i dung duoi kim.
        var dich = 360 * (4 + Math.floor(Math.random() * 3)) - (i * buoc + buoc / 2);
        oQuay.style.transition = 'transform 4.1s cubic-bezier(.12,.66,.16,1)';
        oQuay.style.transform = 'rotate(' + dich + 'deg)';
        oKim.classList.add('is-quay');
        hen.push(setTimeout(function () {
          dang = false;
          oNut.disabled = false;
          oKim.classList.remove('is-quay');
          xong(hien[i]);
        }, 4250));
      }

      function xong(x) {
        keuDung();
        if (kieu === 'tu') doc(x.chinh);
        oKetQua.innerHTML = '<span class="ar-vq-nhan-kq">Trúng</span>' +
          '<b>' + esc(x.chinh) + '</b>' +
          (x.goi && x.goi !== x.chinh ? '<i>' + esc(x.goi) + '</i>' : '');
        oKetQua.classList.remove('is-hien');
        void oKetQua.offsetWidth;
        oKetQua.classList.add('is-hien');
        // Giu nguyen o vua trung tren vong cho ca lop con nhin thay; den
        // dau luot quay sau moi go ra. KHONG hen gio go, vi hen gio co the
        // no dung luc dang quay lan sau — vong bi ve lai giua chung va ket
        // qua cong bo lech khoi o dang hien.
        if (boRa) {
          daTrung.push(x.chinh);
          canVeLai = true;
        }
      }

      function veBangDieuKhien() {
        sk.duoi.innerHTML = '';
        var hang = tao('div', 'ar-vq-dk');

        var nhom = tao('div', 'ar-vq-kieu');
        KIEU.forEach(function (k) {
          var b = tao('button', 'ar-vq-k' + (k.id === kieu ? ' on' : ''), k.ten);
          b.type = 'button';
          b.addEventListener('click', function () {
            kieu = k.id; daTrung = []; canVeLai = false;
            luu(); veBangDieuKhien();
            oQuay.style.transition = 'none';
            ve();
          });
          nhom.appendChild(b);
        });
        hang.appendChild(nhom);

        if (kieu === 'so') {
          var l1 = tao('label', 'ar-vq-so', 'Sĩ số ');
          var i1 = tao('input');
          i1.type = 'number'; i1.min = '2'; i1.max = '60'; i1.value = siSo;
          i1.addEventListener('change', function () {
            siSo = Math.max(2, Math.min(60, +i1.value || 30));
            i1.value = siSo; daTrung = []; canVeLai = false; luu();
            oQuay.style.transition = 'none'; ve();
          });
          l1.appendChild(i1);
          hang.appendChild(l1);
        } else if (kieu === 'to') {
          var l2 = tao('label', 'ar-vq-so', 'Số tổ ');
          var i2 = tao('input');
          i2.type = 'number'; i2.min = '2'; i2.max = '8'; i2.value = soTo;
          i2.addEventListener('change', function () {
            soTo = Math.max(2, Math.min(8, +i2.value || 4));
            i2.value = soTo; daTrung = []; canVeLai = false; luu();
            oQuay.style.transition = 'none'; ve();
          });
          l2.appendChild(i2);
          hang.appendChild(l2);
        }

        var l3 = tao('label', 'ar-vq-gat');
        var i3 = tao('input');
        i3.type = 'checkbox'; i3.checked = boRa;
        i3.addEventListener('change', function () {
          boRa = i3.checked; daTrung = []; canVeLai = false; luu();
          oQuay.style.transition = 'none'; ve();
        });
        l3.appendChild(i3);
        l3.appendChild(document.createTextNode(' Bỏ ra sau khi trúng'));
        hang.appendChild(l3);

        var lam = tao('button', 'ar-btn', 'Quay lại từ đầu');
        lam.type = 'button';
        lam.addEventListener('click', function () {
          daTrung = []; canVeLai = false; oQuay.style.transition = 'none'; ve();
          oKetQua.innerHTML = '';
        });
        hang.appendChild(lam);
        sk.duoi.appendChild(hang);

        if (kieu === 'tay') {
          var ta = tao('textarea', 'ar-vq-nhap');
          ta.rows = 3;
          ta.placeholder = 'Mỗi dòng một tên hoặc một việc…\nLan\nMinh\nHà';
          ta.value = tayTho;
          ta.addEventListener('input', function () {
            tayTho = ta.value; daTrung = []; canVeLai = false; luu();
            oQuay.style.transition = 'none'; ve();
          });
          sk.duoi.appendChild(ta);
          var ghi = tao('p', 'ar-vq-ghi',
            'Danh sách này chỉ nằm trong trình duyệt của máy này, không gửi đi đâu.');
          sk.duoi.appendChild(ghi);
        }
      }

      function batDau() {
        sk.deBai('<span class="ar-p-nhan">Vòng quay may mắn</span><b>Bấm giữa vòng để quay</b>');
        sk.san.innerHTML = '';
        var khung = tao('div', 'ar-vq-khung');
        oKim = tao('div', 'ar-vq-kim');
        oQuay = tao('div', 'ar-vq-dia');
        oNut = tao('button', 'ar-vq-nut', 'QUAY');
        oNut.type = 'button';
        oNut.addEventListener('click', quay);
        khung.appendChild(oQuay);
        khung.appendChild(oKim);
        khung.appendChild(oNut);
        oKetQua = tao('div', 'ar-vq-kq');
        sk.san.appendChild(khung);
        sk.san.appendChild(oKetQua);
        ve();
        veBangDieuKhien();
      }

      batDau();
      return { dung: function () { dang = false; xoaHen(); } };
    }
  };

  /* ---------------- dang ky ---------------- */
  var KHO = {};
  [bubble, mole, maze, memory, wheel].forEach(function (g) { KHO[g.key] = g; });

  window.Arcade = {
    kho: KHO,
    danhSach: function () { return Object.keys(KHO).map(function (k) { return KHO[k]; }); },
    /* Tra ve true neu bai hoc co du tu de choi tro nay. */
    duTu: function (key, vocab) {
      var g = KHO[key];
      return !!(g && vocab && vocab.length >= g.canToiThieu);
    },
    mo: function (hop, key, o) {
      var g = KHO[key];
      if (!g) return { dung: function () { } };
      o = o || {};
      var vocab = (o.vocab || []).filter(function (v) { return v && v.zh && v.vn; });
      if (vocab.length < g.canToiThieu) {
        hop.innerHTML = '<p class="ar-thieu">Bài này mới có ' + vocab.length +
          ' từ — trò “' + esc(g.ten) + '” cần ít nhất ' + g.canToiThieu + ' từ. Chọn thêm bài rồi chơi lại nhé.</p>';
        return { dung: function () { } };
      }
      o.vocab = vocab;
      o.cheDo = o.cheDo === 'lop' ? 'lop' : 'hoc';
      return g.mo(hop, o);
    }
  };
})();
