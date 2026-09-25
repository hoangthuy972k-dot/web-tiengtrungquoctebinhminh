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

  /* Chon n tu khac nhau, luon co tu dich. */
  function moi(vocab, dich, n) {
    var khac = vocab.filter(function (v) { return v.zh !== dich.zh; });
    var ds = tron(khac).slice(0, Math.max(0, n - 1));
    ds.push(dich);
    return tron(ds);
  }

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
    ten: 'Bắn bong bóng chữ',
    emoji: '🎈',
    mau: 'teal',
    moTa: 'Bong bóng mang chữ Hán nổi lên, bấm đúng bong bóng ứng với nghĩa tiếng Việt.',
    moTaLop: 'Bong bóng mang chữ Hán nổi lên. Học sinh đọc chữ, đọc đúng thì thầy/cô bấm cho bóng vỡ.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var sk = dungKhung(hop, bubble, o);
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
          y: -28 - Math.random() * 25,
          v: (sk.lop ? 4.5 : 7) + Math.random() * (sk.lop ? 2.5 : 4),
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
     4 · TỪ NÀO BIẾN MẤT  (什么不见了)
     Chiếu một hàng chữ, cả lớp nhìn kỹ, màn che lại rồi bớt đi
     một chữ. Mở ra — chữ nào vừa biến mất?
     ══════════════════════════════════════════════════════════════ */
  var vanish = {
    key: 'vanish',
    ten: 'Từ nào biến mất',
    emoji: '👀',
    mau: 'indigo',
    moTa: 'Nhìn kỹ một hàng chữ, màn che lại rồi bớt đi một chữ — nhớ xem chữ nào vừa biến mất.',
    moTaLop: 'Chiếu một hàng chữ cho cả lớp nhìn kỹ, che lại rồi bớt một chữ. Tổ nào nói đúng chữ vừa mất thì được điểm.',
    canToiThieu: 5,
    mo: function (hop, o) {
      var sk = dungKhung(hop, vanish, o);
      var vocab = o.vocab;
      var soO = Math.min(8, Math.max(5, vocab.length >= 8 ? 8 : vocab.length));
      var diem = 0, dung = 0, tong = 0, van = 0, VAN_TOI_DA = 8;
      var hen = [], song = true, mat = null;

      function dongHo(ms, xong) {
        var t = setTimeout(xong, ms);
        hen.push(t);
        return t;
      }
      function xoaHen() { hen.forEach(clearTimeout); hen = []; }

      function veHang(ds, an) {
        sk.san.className = 'ar-stage ar-vanish';
        sk.san.innerHTML = '';
        ds.forEach(function (v) {
          var o2 = tao('div', 'ar-vcell' + (an && an.zh === v.zh ? ' is-mat' : ''));
          o2.innerHTML = '<b>' + esc(v.zh) + '</b><i>' + esc(v.py) + '</i>';
          sk.san.appendChild(o2);
        });
      }

      function vanMoi() {
        if (!song) return;
        van++;
        if (van > VAN_TOI_DA && !sk.lop) return het();
        var ds = tron(vocab).slice(0, soO);
        mat = ds[Math.floor(Math.random() * ds.length)];
        sk.deBai('<span class="ar-p-nhan">Nhìn kỹ</span><b>' + (sk.lop ? 'Ván ' + van : 'Ván ' + van + '/' + VAN_TOI_DA) + '</b>');
        veHang(ds, null);
        var dem = sk.lop ? 6 : 4;
        sk.gio(dem);
        (function lui() {
          dongHo(1000, function () {
            dem--;
            sk.gio(dem);
            if (dem > 0) lui();
            else cheLai(ds);
          });
        })();
      }

      function cheLai(ds) {
        sk.deBai('<span class="ar-p-nhan">&nbsp;</span><b>Che lại…</b>');
        sk.san.classList.add('is-che');
        dongHo(900, function () {
          sk.san.classList.remove('is-che');
          veHang(ds, mat);
          sk.deBai('<span class="ar-p-nhan">Chữ nào vừa biến mất?</span><b>Chọn ở bên dưới</b>');
          hoi(ds);
        });
      }

      function hoi(ds) {
        sk.duoi.innerHTML = '';
        var lua = moi(ds, mat, 4);
        lua.forEach(function (v) {
          var n = tao('button', 'ar-opt', '<b>' + esc(v.zh) + '</b><i>' + esc(v.vn) + '</i>');
          n.type = 'button';
          n.addEventListener('click', function () {
            if (n.disabled) return;
            Array.prototype.forEach.call(sk.duoi.querySelectorAll('.ar-opt'), function (x) { x.disabled = true; });
            tong++;
            if (v.zh === mat.zh) {
              dung++;
              diem += sk.lop ? 1 : 15;
              n.classList.add('is-dung');
              keuDung(); doc(mat.zh);
            } else {
              n.classList.add('is-sai');
              keuSai();
              Array.prototype.forEach.call(sk.duoi.querySelectorAll('.ar-opt'), function (x) {
                if (x.querySelector('b').textContent === mat.zh) x.classList.add('is-dung');
              });
            }
            sk.diem(diem);
            if (o.onDiem) o.onDiem(diem);
            dongHo(1600, function () { sk.duoi.innerHTML = ''; vanMoi(); });
          });
          sk.duoi.appendChild(n);
        });
      }

      function batDau() {
        song = true;
        xoaHen();
        diem = 0; dung = 0; tong = 0; van = 0;
        sk.diem(0);
        sk.duoi.innerHTML = '';
        vanMoi();
      }

      function het() {
        song = false;
        xoaHen();
        sk.duoi.innerHTML = '';
        sk.san.className = 'ar-stage';
        ketQua(sk, { diem: diem, dung: dung, tong: tong, chuoi: 0 }, batDau);
        if (o.onXong) o.onXong({ diem: diem, dung: dung, tong: tong });
      }

      batDau();
      return { dung: function () { song = false; xoaHen(); } };
    }
  };

  /* ---------------- dang ky ---------------- */
  var KHO = {};
  [bubble, mole, memory, vanish].forEach(function (g) { KHO[g.key] = g; });

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
