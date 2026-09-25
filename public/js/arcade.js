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

  /* ══════════════ BO SINH CAU HOI ══════════════
     Bien du lieu bai hoc thanh cau trac nghiem. Hai nguon:
       · tu vung  — tu dong ra 4 kieu hoi (nghia↔chu, pinyin↔chu)
       · ngu phap — lay thang cau dien tu / cau dung-sai cua bai
     Cau hoi deu ve cung mot dang de tro choi chi viec hien ra.        */
  function chuoiKhacNhau(ds) {
    var thay = {}, ra = [];
    ds.forEach(function (x) {
      if (thay[x.hien]) return;
      thay[x.hien] = 1;
      ra.push(x);
    });
    return ra;
  }

  // Tra ve null khi khong du 4 lua chon KHAC NHAU (vd ca bai cung mot pinyin).
  function raMot(vocab, dich, layDe, layLua, nhan, loai) {
    var de = layDe(dich);
    if (!de) return null;
    var lua = chuoiKhacNhau(moi(vocab, dich, 6).map(function (v) {
      return { hien: layLua(v), zh: v.zh };
    }).filter(function (x) { return x.hien; }));
    var dungO = -1;
    lua.forEach(function (x, i) { if (x.zh === dich.zh) dungO = i; });
    if (dungO < 0 || lua.length < 3) return null;
    // Giu lai dung 4 lua chon, chac chan con dap an.
    if (lua.length > 4) {
      var giu = [lua[dungO]];
      lua.forEach(function (x, i) { if (i !== dungO && giu.length < 4) giu.push(x); });
      lua = tron(giu);
      dungO = -1;
      lua.forEach(function (x, i) { if (x.zh === dich.zh) dungO = i; });
    }
    return {
      loai: loai, nhan: nhan, de: de,
      luaChon: lua.map(function (x) { return x.hien; }),
      dung: dungO, giai: ''
    };
  }

  function cauTuVung(vocab) {
    var ra = [];
    vocab.forEach(function (v) {
      ra.push(raMot(vocab, v,
        function (d) { return esc(d.vn); },
        function (x) { return esc(x.zh); },
        'Chọn chữ Hán đúng nghĩa', 'vn2zh'));
      ra.push(raMot(vocab, v,
        function (d) { return '<span class="ar-de-zh">' + esc(d.zh) + '</span>'; },
        function (x) { return esc(x.vn); },
        'Chữ này nghĩa là gì', 'zh2vn'));
      ra.push(raMot(vocab, v,
        function (d) { return d.py ? '<span class="ar-de-py">' + esc(d.py) + '</span>' : ''; },
        function (x) { return esc(x.zh); },
        'Nhìn pinyin, chọn chữ', 'py2zh'));
      ra.push(raMot(vocab, v,
        function (d) { return d.py ? '<span class="ar-de-zh">' + esc(d.zh) + '</span>' : ''; },
        function (x) { return esc(x.py); },
        'Chữ này đọc thế nào', 'zh2py'));
    });
    return ra.filter(Boolean);
  }

  /* Boc `so` cau nhung trai deu tren cac nhom (diem ngu phap, kieu hoi)
     thay vi tron phang — tron phang hay ra ba bon cau lien tiep cung mot
     diem ngu phap, hoc sinh doan duoc dap an ma khong can hieu. */
  function traiDeu(ds, khoa, so) {
    if (so <= 0) return [];
    var nhom = {}, ten = [];
    tron(ds).forEach(function (c) {
      var k = c[khoa] || '';
      if (!nhom[k]) { nhom[k] = []; ten.push(k); }
      nhom[k].push(c);
    });
    ten = tron(ten);
    var ra = [], con = true;
    while (ra.length < so && con) {
      con = false;
      for (var i = 0; i < ten.length && ra.length < so; i++) {
        var g = nhom[ten[i]];
        if (g.length) { ra.push(g.shift()); con = true; }
      }
    }
    return ra;
  }

  function cauNguPhap(ds) {
    var ra = [];
    (ds || []).forEach(function (g) {
      if (g.kieu === 'dien') {
        if (!g.options || g.options.length < 2 || typeof g.answer !== 'number') return;
        ra.push({
          loai: 'dien',
          nhan: g.point ? 'Ngữ pháp · ' + esc(g.point) : 'Điền vào chỗ trống',
          de: (g.context ? '<span class="ar-de-viet">' + esc(g.context) + '</span>' : '') +
              '<span class="ar-de-zh">' + esc(g.pre || '') +
              '<em class="ar-de-trong">____</em>' + esc(g.post || '') + '</span>',
          luaChon: g.options.map(esc),
          dung: g.answer,
          giai: esc(g.explanation || '')
        });
      } else if (g.kieu === 'dungsai') {
        var hai = tron([{ t: g.wrong, ok: false }, { t: g.right, ok: true }]);
        ra.push({
          loai: 'dungsai',
          nhan: g.point ? 'Câu nào đúng · ' + esc(g.point) : 'Câu nào đúng',
          de: '<span class="ar-de-viet">Hai câu dưới đây, câu nào viết đúng?</span>',
          luaChon: hai.map(function (x) { return '<span class="ar-de-zh">' + esc(x.t) + '</span>'; }),
          dung: hai[0].ok ? 0 : 1,
          giai: esc(g.why || '')
        });
      }
    });
    return ra;
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
     6 · RẮN ĂN CHỮ  (小蛇吃球 · rắn tham ăn)
     Lái con rắn đi ăn chữ Hán ứng với nghĩa đang hỏi. Ăn đúng thì
     rắn dài thêm, ăn nhầm thì bị trừ điểm.
     Phím mũi tên / WASD, vuốt trên điện thoại, hoặc bấm bốn nút.
     ══════════════════════════════════════════════════════════════ */
  var snake = {
    key: 'snake',
    ten: 'Rắn ăn chữ',
    emoji: '🐍',
    mau: 'green',
    moTa: 'Lái rắn đi ăn chữ Hán đúng nghĩa — ăn đúng rắn dài thêm, đụng tường là hết.',
    moTaLop: 'Gọi một em lên lái rắn bằng phím mũi tên, cả lớp đọc chữ và hô hướng đi. Chiếu lớp thì rắn đi chậm và xuyên tường.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var sk = dungKhung(hop, snake, o);
      var vocab = o.vocab;
      // Man hep thi luoi thua hon, khong o be xiu doc khong ra chu.
      var hep = (window.innerWidth || 1024) < 620;
      var COT = hep ? 11 : 15, HANG = hep ? 9 : 11;
      var o_ = [], ran = [], huong = { x: 1, y: 0 }, huongMoi = { x: 1, y: 0 };
      var moi_ = [], dich = null;
      var diem = 0, dung = 0, tong = 0, chuoi = 0, chuoiMax = 0;
      var nhip = 0, song = true;

      sk.san.classList.add('ar-ran');
      sk.anGio();

      // Luoi o — tao mot lan, moi nhip chi doi class cho nhanh.
      var luoi = tao('div', 'ar-ran-luoi');
      luoi.style.setProperty('--cot', COT);
      luoi.style.setProperty('--hang', HANG);
      for (var i = 0; i < COT * HANG; i++) {
        var c = tao('div', 'ar-o');
        luoi.appendChild(c);
        o_.push(c);
      }
      sk.san.appendChild(luoi);

      // Bon nut huong — de choi tren dien thoai va tren bang cham.
      var dpad = tao('div', 'ar-dpad');
      [['↑', 0, -1], ['←', -1, 0], ['→', 1, 0], ['↓', 0, 1]].forEach(function (d, k) {
        var n = tao('button', 'ar-dnut ar-d' + k, d[0]);
        n.type = 'button';
        n.addEventListener('click', function () { doiHuong(d[1], d[2]); });
        dpad.appendChild(n);
      });
      sk.duoi.appendChild(dpad);

      function chiSo(x, y) { return y * COT + x; }
      function trong(x, y) {
        if (ran.some(function (p) { return p.x === x && p.y === y; })) return false;
        if (moi_.some(function (m) { return m.x === x && m.y === y; })) return false;
        return true;
      }

      function keDich() {
        dich = vocab[Math.floor(Math.random() * vocab.length)];
        sk.deBai('<span class="ar-p-nhan">Ăn chữ có nghĩa</span><b>' + esc(dich.vn) + '</b>');
      }

      function raMoi() {
        moi_ = [];
        var ds = moi(vocab, dich, 3);       // 1 chu dung + 2 chu nhieu
        ds.forEach(function (v) {
          for (var thu = 0; thu < 200; thu++) {
            var x = Math.floor(Math.random() * COT), y = Math.floor(Math.random() * HANG);
            if (trong(x, y)) { moi_.push({ x: x, y: y, tu: v }); return; }
          }
        });
      }

      function doiHuong(dx, dy) {
        // Khong cho quay dau 180 do — rắn se tu can vao minh.
        if (dx === -huong.x && dy === -huong.y) return;
        huongMoi = { x: dx, y: dy };
      }

      function ve() {
        o_.forEach(function (c) {
          c.className = 'ar-o';
          c.textContent = '';
        });
        moi_.forEach(function (m) {
          var c = o_[chiSo(m.x, m.y)];
          c.classList.add('ar-o-moi');
          c.textContent = m.tu.zh;
        });
        ran.forEach(function (p, i) {
          var c = o_[chiSo(p.x, p.y)];
          if (!c) return;
          c.classList.add(i === 0 ? 'ar-o-dau' : 'ar-o-than');
        });
      }

      function buoc() {
        if (!song) return;
        huong = huongMoi;
        var dau = { x: ran[0].x + huong.x, y: ran[0].y + huong.y };

        if (dau.x < 0 || dau.x >= COT || dau.y < 0 || dau.y >= HANG) {
          // Chieu lop thi xuyen tuong cho de choi, tu hoc thi thua.
          if (sk.lop) {
            dau.x = (dau.x + COT) % COT;
            dau.y = (dau.y + HANG) % HANG;
          } else return het();
        }
        if (ran.some(function (p, i) { return i && p.x === dau.x && p.y === dau.y; })) {
          if (!sk.lop) return het();
          return;                                   // chieu lop: dung yen cho de
        }

        ran.unshift(dau);
        var an = -1;
        moi_.forEach(function (m, i) { if (m.x === dau.x && m.y === dau.y) an = i; });
        if (an < 0) {
          ran.pop();
        } else {
          var m = moi_[an];
          tong++;
          if (m.tu.zh === dich.zh) {
            dung++; chuoi++; chuoiMax = Math.max(chuoiMax, chuoi);
            diem += sk.lop ? 1 : 10 + Math.min(chuoi, 5) * 2;
            keuDung(); doc(m.tu.zh);
            keDich(); raMoi();
          } else {
            chuoi = 0;
            ran.pop();
            if (!sk.lop) diem = Math.max(0, diem - 5);
            keuSai();
            moi_.splice(an, 1);
          }
          sk.diem(diem);
          if (o.onDiem) o.onDiem(diem);
        }
        ve();
      }

      function phim(e) {
        var k = e.key;
        var d = null;
        if (k === 'ArrowUp' || k === 'w' || k === 'W') d = [0, -1];
        else if (k === 'ArrowDown' || k === 's' || k === 'S') d = [0, 1];
        else if (k === 'ArrowLeft' || k === 'a' || k === 'A') d = [-1, 0];
        else if (k === 'ArrowRight' || k === 'd' || k === 'D') d = [1, 0];
        if (!d) return;
        e.preventDefault();
        doiHuong(d[0], d[1]);
      }
      var vuotX = 0, vuotY = 0;
      function chamDau(e) { vuotX = e.touches[0].clientX; vuotY = e.touches[0].clientY; }
      function chamHet(e) {
        var t = e.changedTouches[0];
        var dx = t.clientX - vuotX, dy = t.clientY - vuotY;
        if (Math.abs(dx) < 24 && Math.abs(dy) < 24) return;
        if (Math.abs(dx) > Math.abs(dy)) doiHuong(dx > 0 ? 1 : -1, 0);
        else doiHuong(0, dy > 0 ? 1 : -1);
      }

      function batDau() {
        song = true;
        diem = 0; dung = 0; tong = 0; chuoi = 0; chuoiMax = 0;
        sk.diem(0);
        huong = { x: 1, y: 0 };
        huongMoi = { x: 1, y: 0 };
        var gx = 3, gy = Math.floor(HANG / 2);
        ran = [{ x: gx, y: gy }, { x: gx - 1, y: gy }, { x: gx - 2, y: gy }];
        keDich(); raMoi(); ve();
        clearInterval(nhip);
        nhip = setInterval(buoc, sk.lop ? 420 : 240);
      }

      function het() {
        song = false;
        clearInterval(nhip);
        var giuLuoi = luoi, giuPad = dpad;
        sk.duoi.innerHTML = '';
        sk.san.className = 'ar-stage';
        ketQua(sk, { diem: diem, dung: dung, tong: tong, chuoi: chuoiMax }, function () {
          sk.san.className = 'ar-stage ar-ran';
          sk.san.innerHTML = '';
          sk.san.appendChild(giuLuoi);
          sk.duoi.appendChild(giuPad);
          batDau();
        });
        if (o.onXong) o.onXong({ diem: diem, dung: dung, tong: tong });
      }

      document.addEventListener('keydown', phim);
      sk.san.addEventListener('touchstart', chamDau, { passive: true });
      sk.san.addEventListener('touchend', chamHet, { passive: true });

      batDau();
      return {
        dung: function () {
          song = false;
          clearInterval(nhip);
          document.removeEventListener('keydown', phim);
        }
      };
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

  /* ══════════════════════════════════════════════════════════════
     5 · BẮN MẶT TRỜI  (后羿射日 · 狼来了 · 功夫熊猫 · 稻子熟了 …)
     Chín mặt trời thiêu cháy mặt đất. Mỗi câu trả lời đúng là một
     mũi tên — bắn rụng một mặt trời. Rụng hết chín thì thắng.

     Cau hoi tron ca TU VUNG (tu sinh) va NGU PHAP (lay tu bai hoc),
     nen mot tro nay thay duoc ca cum file trac nghiem co cot truyen.
     ══════════════════════════════════════════════════════════════ */
  var quiz = {
    key: 'quiz',
    ten: 'Hậu Nghệ bắn mặt trời',
    emoji: '🏹',
    mau: 'red',
    moTa: 'Chín mặt trời thiêu cháy mặt đất — mỗi câu trả lời đúng bắn rụng một mặt trời.',
    moTaLop: 'Chiếu câu hỏi cho cả lớp, tổ nào trả lời đúng thì bắn rụng một mặt trời. Có cả câu từ vựng lẫn câu ngữ pháp của bài.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var sk = dungKhung(hop, quiz, o);
      var SO_TROI = 9;
      var ds = [], vt = 0, diem = 0, dung = 0, chuoi = 0, chuoiMax = 0, song = true;
      var troi = [], hen = [];

      sk.san.classList.add('ar-troi');
      sk.anGio();

      function xoaHen() { hen.forEach(clearTimeout); hen = []; }

      function veTroi() {
        sk.san.innerHTML = '<div class="ar-nui"></div>';
        troi = [];
        for (var i = 0; i < SO_TROI; i++) {
          var m = tao('div', 'ar-mt');
          // Rai chin mat troi thanh vong cung tren bau troi.
          var t = (i + 0.5) / SO_TROI;
          m.style.left = (6 + t * 88) + '%';
          m.style.top = (46 - Math.sin(t * Math.PI) * 30) + '%';
          m.style.setProperty('--tre', (i * 0.09) + 's');
          sk.san.appendChild(m);
          troi.push(m);
        }
      }

      function batDau() {
        song = true;
        xoaHen();
        vt = 0; diem = 0; dung = 0; chuoi = 0; chuoiMax = 0;
        sk.diem(0);
        ds = tron(o.cauHoi || []).slice(0, SO_TROI);
        veTroi();
        hoi();
      }

      function hoi() {
        if (!song) return;
        if (vt >= ds.length) return het();
        var c = ds[vt];
        sk.deBai('<span class="ar-p-nhan">Câu ' + (vt + 1) + '/' + ds.length + ' · ' + c.nhan + '</span><b>' + c.de + '</b>');
        sk.duoi.innerHTML = '';
        sk.duoi.className = 'ar-foot ar-foot-' + c.loai;
        c.luaChon.forEach(function (t, i) {
          var n = tao('button', 'ar-opt ar-opt-rong', t);
          n.type = 'button';
          n.addEventListener('click', function () { tra(n, i, c); });
          sk.duoi.appendChild(n);
        });
      }

      function tra(nut, i, c) {
        if (!song || nut.disabled) return;
        $allTrong(sk.duoi).forEach(function (x) { x.disabled = true; });
        var ok = i === c.dung;
        if (ok) {
          dung++; chuoi++; chuoiMax = Math.max(chuoiMax, chuoi);
          diem += sk.lop ? 1 : 10 + Math.min(chuoi, 5) * 2;
          nut.classList.add('is-dung');
          keuDung();
          var m = troi[dung - 1];
          if (m) { m.classList.add('is-ban'); }
        } else {
          chuoi = 0;
          nut.classList.add('is-sai');
          $allTrong(sk.duoi).forEach(function (x, k) { if (k === c.dung) x.classList.add('is-dung'); });
          keuSai();
        }
        sk.diem(diem);
        if (o.onDiem) o.onDiem(diem);
        if (c.giai) {
          var g = tao('div', 'ar-giai', (ok ? '✓ ' : '✗ ') + c.giai);
          sk.san.appendChild(g);
        }
        vt++;
        hen.push(setTimeout(function () {
          var g2 = sk.san.querySelector('.ar-giai');
          if (g2) g2.parentNode.removeChild(g2);
          hoi();
        }, c.giai ? (sk.lop ? 4200 : 2600) : (sk.lop ? 2000 : 1200)));
      }

      function het() {
        song = false;
        xoaHen();
        sk.duoi.innerHTML = '';
        sk.duoi.className = 'ar-foot';
        sk.san.className = 'ar-stage';
        sk.deBai('<span class="ar-p-nhan">Xong rồi</span><b>Bắn được ' + dung + '/' + ds.length + ' mặt trời</b>');
        ketQua(sk, { diem: diem, dung: dung, tong: ds.length, chuoi: chuoiMax }, function () {
          sk.san.className = 'ar-stage ar-troi';
          batDau();
        });
        if (o.onXong) o.onXong({ diem: diem, dung: dung, tong: ds.length });
      }

      batDau();
      return { dung: function () { song = false; xoaHen(); } };
    }
  };
  function $allTrong(g) { return Array.prototype.slice.call(g.querySelectorAll('.ar-opt')); }

  /* ══════════════════════════════════════════════════════════════
     7 · MÊ CUNG ĐỌC CHỮ  (tìm lối ra mê cung)
     Đi từ 起点 tới 终点. Mỗi bước chỉ được bước sang ô kề bên mang
     chữ đúng nghĩa đang hỏi — bước sai thì bật lại.

     Duong di duoc dung san TRUOC khi rai chu, nen me cung luon co
     loi ra; chu dung dat vao o ke tiep tren duong di do.
     ══════════════════════════════════════════════════════════════ */
  var maze = {
    key: 'maze',
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

  /* ---------------- dang ky ---------------- */
  var KHO = {};
  [quiz, bubble, mole, snake, maze, memory, vanish].forEach(function (g) { KHO[g.key] = g; });

  window.Arcade = {
    kho: KHO,
    danhSach: function () { return Object.keys(KHO).map(function (k) { return KHO[k]; }); },
    /* Tra ve true neu bai hoc co du tu de choi tro nay. */
    duTu: function (key, vocab) {
      var g = KHO[key];
      return !!(g && vocab && vocab.length >= g.canToiThieu);
    },
    /* Tron cau tu vung voi cau ngu phap. Uu tien cho ngu phap len truoc
       (neu bai co) vi do la phan hoc sinh hay quen nhat, con cau tu vung
       thi luon san — lay bu cho du so cau. */
    raCau: function (vocab, nguPhap, so) {
      var np = traiDeu(cauNguPhap(nguPhap), 'nhan', Math.ceil(so / 2));
      var tv = traiDeu(cauTuVung(vocab), 'loai', Math.max(0, so - np.length));
      return tron(np.concat(tv));
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
      if (key === 'quiz') {
        o.cauHoi = window.Arcade.raCau(vocab, o.nguPhap, 9);
        if (o.cauHoi.length < 4) {
          hop.innerHTML = '<p class="ar-thieu">Chưa đủ câu hỏi cho những bài vừa chọn. Chọn thêm bài rồi chơi lại nhé.</p>';
          return { dung: function () { } };
        }
      }
      return g.mo(hop, o);
    }
  };
})();
