/* Tro choi tu choi o nha — nhom hanh dong: Chan Zombie, Chem hoa qua.
   Dang ky vao khung chung tro-nha.js (window.TroNha).
   Ca hai tro chay bang requestAnimationFrame, di chuyen theo thoi gian
   (khong theo so khung hinh), tam dung khi an tab, don sach trong dung(). */
(function () {
  'use strict';
  var T = window.TroNha;
  if (!T) return;

  /* ---------------- tien ich chung ---------------- */
  // Tu v co trung chu Han hoac trung nghia voi tu nao trong ds khong
  function trungTu(v, ds) {
    for (var i = 0; i < ds.length; i++) {
      if (ds[i] && (ds[i].zh === v.zh || ds[i].vn === v.vn)) return true;
    }
    return false;
  }
  // Hang tu xoay vong: het luot thi tron lai; bo qua tu dang co tren san
  function hangTu(vocab) {
    var hang = [];
    return function (tranh) {
      for (var lan = 0; lan < 2; lan++) {
        if (!hang.length) hang = T.tron(vocab);
        for (var i = hang.length - 1; i >= 0; i--) {
          if (!trungTu(hang[i], tranh)) return hang.splice(i, 1)[0];
        }
        hang = [];
      }
      return null;
    };
  }
  // Phim so 1-9 (bo qua khi dang go chu hoac giu Ctrl/Alt/Cmd)
  function soPhim(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return 0;
    var t = e.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return 0;
    var n = parseInt(e.key, 10);
    return n >= 1 && n <= 9 ? n : 0;
  }
  function go(el) { if (el && el.parentNode) el.parentNode.removeChild(el); }
  // Hinh ve (sprite SVG) trong /images/game/
  var ANH = '/images/game/';
  function anh(cls, ten) {
    return '<img' + (cls ? ' class="' + cls + '"' : '') + ' src="' + ANH + ten + '.svg" alt="" draggable="false">';
  }
  // Tai truoc hinh de luc chem / ha guc khong bi nhay trong
  function napTruoc(ds) {
    ds.forEach(function (ten) { var i = new Image(); i.src = ANH + ten + '.svg'; });
  }

  /* ══════════════ CHAN ZOMBIE ══════════════
     Nha ben trai, 3-4 lan duong. Zombie cam bien chu Han di tu phai sang.
     De bai la nghia tieng Viet -> cham zombie mang chu do de ha guc.
     Zombie khac dung lai truoc hang rao (khong pha nha), chi con dang
     duoc hoi moi treo rao vao nha -> mat 1 tim. Moi con duoc hoi luon
     dung dau lan cua no nen phim 1-4 chon dung con dau lan.
     Ha 25 con la thang, het 3 tim la thua. Cu 5 con len mot dot.     */
  T.dangKy({
    key: 'zombie',
    ten: 'Chặn Zombie',
    emoji: '🧟',
    chu: '守',
    nen: 'linear-gradient(160deg,#7bc96f 0%,#2f6b45 100%)',
    moTa: 'Zombie cầm biển chữ Hán tiến về nhà — chạm đúng con mang chữ có nghĩa ở đề bài để chặn nó lại.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var THANG = 25, TIM = 3;
      var cham = T.itChuyenDong ? 1.35 : 1;     // giam chuyen dong -> zombie di cham hon
      var sk = T.khung(hop, this, { tim: TIM });
      var layTu = hangTu(o.vocab);
      var choi = false, raf = 0, truoc = null, tamDung = !!document.hidden;
      var hen = [], st = null, san = null, nhaEl = null, raoEl = null, dem = 0;
      // kich thuoc (px) va vi tri (% chieu rong san)
      var W = 320, H = 400, L = 4, zw = 84, zwP = 25, nha = 15, rao = 26, raoP = 3;

      function sau(fn, ms) {
        var id = setTimeout(function () {
          var k = hen.indexOf(id);
          if (k >= 0) hen.splice(k, 1);
          fn();
        }, ms);
        hen.push(id);
      }
      function xoaHen() { hen.forEach(function (id) { clearTimeout(id); }); hen = []; }

      function doKich() {
        if (!san) return;
        W = san.clientWidth || 320;
        H = san.clientHeight || 400;
        zw = Math.round(Math.max(70, Math.min(100, W * 0.11)));
        zwP = zw / W * 100;
        nha = Math.max(13, 52 / W * 100);
        raoP = 10 / W * 100;
        rao = nha + Math.max(7, 30 / W * 100);
        san.style.setProperty('--zb-w', zw + 'px');
        nhaEl.style.width = nha + '%';
        raoEl.style.left = rao + '%';
      }

      function dungSan() {
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        san = T.tao('div', 'tn-zb-san');
        nhaEl = T.tao('div', 'tn-zb-nha', anh('tn-zb-mai', 'zombie-house'));
        raoEl = T.tao('div', 'tn-zb-rao');
        san.appendChild(nhaEl);
        san.appendChild(raoEl);
        sk.san.appendChild(san);
        H = san.clientHeight || 400;
        L = H < 330 ? 3 : 4;
        for (var l = 0; l < L; l++) {
          var lan = T.tao('div', 'tn-zb-lan', '<span class="tn-zb-so" aria-hidden="true">' + (l + 1) + '</span>');
          lan.style.top = (l / L * 100) + '%';
          lan.style.height = (100 / L) + '%';
          san.insertBefore(lan, nhaEl);
        }
        san.addEventListener('pointerdown', nhanXuong);
        san.addEventListener('click', bamPhimNut);
        doKich();
      }

      /* ----- thong so theo dot ----- */
      function dot() { return 1 + Math.floor(st.giet / 5); }
      function tocDo() { return 85 / (Math.max(6, 15 - (dot() - 1) * 2.2) * cham); }   // % / giay
      function khoangSinh() { return Math.max(1.2, 3.2 - (dot() - 1) * 0.5) * cham * (0.8 + Math.random() * 0.4); }
      function toiDa() { return Math.min(o.vocab.length, L * 2, 2 + dot()); }

      function trongLan(l) {
        return st.ds.filter(function (z) { return z.lan === l; }).sort(function (a, b) { return a.x - b.x; });
      }

      // Sinh mot zombie o mep phai, lan con cho; tra ve null neu khong co cho
      function sinh() {
        var x0 = 100 - zwP, trong = [], it = [];
        for (var l = 0; l < L; l++) {
          var ds = trongLan(l);
          if (!ds.length) trong.push(l);
          else if (ds.length < 2 && ds[ds.length - 1].x + zwP + 1 < x0) it.push(l);
        }
        var chon = trong.length ? trong : it;
        if (!chon.length) return null;
        var tu = layTu(st.ds.map(function (z) { return z.tu; }));
        if (!tu) return null;
        var lan = chon[Math.floor(Math.random() * chon.length)];
        var z = { id: ++dem, tu: tu, lan: lan, x: x0, muc: false, nhanh: 0, vMuc: 0, cho: false, chet: false };
        var dai = tu.zh.length;
        z.el = T.tao('button', 'tn-zb-z tn-zb-moi',
          '<span class="tn-zb-bien' + (dai >= 5 ? ' rat-dai' : dai >= 3 ? ' dai' : '') + '" lang="zh">' + T.esc(tu.zh) + '</span>' +
          anh('tn-zb-em', 'zombie-' + (1 + z.id % 3)) + anh('tn-zb-khoi', 'zombie-poof'));
        z.el.type = 'button';
        z.el.setAttribute('data-id', String(z.id));
        z.el.setAttribute('aria-label', tu.zh);
        z.el.style.top = ((lan + 0.5) / L * 100) + '%';
        z.el.style.left = x0 + '%';
        z.el.style.zIndex = String(3 + lan);
        z.em = z.el.querySelector('.tn-zb-em');
        san.appendChild(z.el);
        st.ds.push(z);
        return z;
      }

      // Chon zombie duoc hoi: ngau nhien trong cac con dung dau lan
      function chonMuc() {
        var ung = [];
        for (var l = 0; l < L; l++) {
          var ds = trongLan(l);
          if (ds.length) ung.push(ds[0]);
        }
        if (!ung.length) { var moi1 = sinh(); if (moi1) ung.push(moi1); }
        if (!ung.length) { st.muc = null; sk.deBai(''); return; }
        var m = ung[Math.floor(Math.random() * ung.length)];
        m.muc = true;
        // con o gan nha duoc di cham lai de em kip doc
        var minT = Math.max(2.6, 4.8 - (dot() - 1) * 0.45) * cham;
        m.vMuc = Math.min(tocDo(), Math.max(1, (m.x - nha) / minT));
        if (m.cho) { m.cho = false; m.el.classList.remove('tn-zb-cho'); }
        st.muc = m;
        veDe();
      }
      function veDe() {
        var m = st.muc;
        if (!m) return;
        sk.deBai('<span class="tn-zb-nhan">Đợt ' + dot() + ' · ' + st.giet + '/' + THANG + '</span>' +
          (m.tu.em ? '<span class="tn-zb-goi" aria-hidden="true">' + T.esc(m.tu.em) + '</span>' : '') +
          '<span class="tn-hoi-vn">' + T.esc(m.tu.vn) + '</span>');
      }

      function boZ(z) {
        z.chet = true;
        var k = st.ds.indexOf(z);
        if (k >= 0) st.ds.splice(k, 1);
      }
      function ghiSai(tu) { if (tu && st.sai.indexOf(tu) < 0) st.sai.push(tu); }

      function chon(z) {
        if (!choi || !z || z.chet) return;
        if (z === st.muc) haGuc(z); else saiZ(z);
      }
      function haGuc(z) {
        var dotCu = dot();
        boZ(z);
        st.giet++; st.chuoi++; st.dai = Math.max(st.dai, st.chuoi);
        var cong = 10 + Math.min(5, st.chuoi - 1) * 2;
        st.diem += cong;
        sk.diem(st.diem);
        sk.bay('+' + cong + (st.chuoi >= 3 ? ' 🔥' + st.chuoi : ''));
        T.keuDung();
        T.doc(z.tu.zh);
        z.el.disabled = true;
        z.el.classList.add('tn-zb-poof');
        sau(function () { go(z.el); }, 500);
        st.muc = null;
        if (st.giet >= THANG) { ketThuc(true); return; }
        if (dot() > dotCu) baoDot();
        chonMuc();
      }
      function saiZ(z) {
        z.nhanh = st.t + 1.2;                     // chay nhanh mot luc
        z.el.classList.remove('tn-zb-giat');
        void z.el.offsetWidth;
        z.el.classList.add('tn-zb-giat');
        // hien nghia cua chu vua cham nham de em hoc luon
        var cu = z.el.querySelector('.tn-zb-nghia');
        if (cu) go(cu);
        var nghia = T.tao('span', 'tn-zb-nghia', T.esc(z.tu.vn));
        z.el.appendChild(nghia);
        sau(function () { go(nghia); if (!z.chet) z.el.classList.remove('tn-zb-giat'); }, 1300);
        st.diem = Math.max(0, st.diem - 5);
        sk.diem(st.diem);
        st.chuoi = 0;
        st.saiLan++;
        if (st.muc) ghiSai(st.muc.tu);
        T.keuSai();
        T.rung(120);
        sk.bay('-5', 'sai');
      }
      function phaNha(z) {
        boZ(z);
        z.el.disabled = true;
        z.el.classList.add('tn-zb-vao');
        sau(function () { go(z.el); }, 450);
        st.tim--;
        sk.tim(st.tim, TIM);
        st.saiLan++;
        st.chuoi = 0;
        ghiSai(z.tu);
        T.keuSai();
        T.rung([80, 60, 140]);
        sk.bay('-1 ❤️', 'sai');
        nhaEl.classList.remove('tn-zb-rung');
        void nhaEl.offsetWidth;
        nhaEl.classList.add('tn-zb-rung');
        var nhaCu = nhaEl;
        sau(function () { nhaCu.classList.remove('tn-zb-rung'); }, 600);
        st.muc = null;
        if (st.tim <= 0) { ketThuc(false); return; }
        chonMuc();
      }
      function baoDot() {
        var b = T.tao('div', 'tn-zb-bao', 'Đợt ' + dot() + '!');
        san.appendChild(b);
        T.keu(440, 0.15, 'triangle');
        T.keu(330, 0.2, 'triangle', 0.14);
        sau(function () { go(b); }, 1600);
      }

      /* ----- vong lap chinh ----- */
      function buoc(t) {
        raf = requestAnimationFrame(buoc);
        if (!choi || tamDung) { truoc = null; return; }
        if (truoc == null) { truoc = t; return; }
        var dt = Math.min(0.1, (t - truoc) / 1000);
        truoc = t;
        st.t += dt;
        // sinh them zombie
        st.cho -= dt;
        if (st.cho <= 0) {
          st.cho = khoangSinh();
          if (st.ds.length < toiDa()) sinh();
        }
        // di chuyen tung lan: khong vuot con phia truoc, con thuong dung o rao
        var v = tocDo(), dungRao = rao + raoP + 0.5, vao = null;
        for (var l = 0; l < L; l++) {
          var ds = trongLan(l), gioiHan = -999;
          for (var i = 0; i < ds.length; i++) {
            var z = ds[i];
            var vz = z.muc ? z.vMuc : v;
            if (st.t < z.nhanh) vz *= 2.5;
            var nx = z.x - vz * dt;
            if (!z.muc) nx = Math.max(nx, Math.min(z.x, dungRao));
            nx = Math.max(nx, Math.min(z.x, gioiHan));
            var dungYen = !z.muc && nx >= z.x - 0.0001;
            if (dungYen !== z.cho) { z.cho = dungYen; z.el.classList.toggle('tn-zb-cho', dungYen); }
            z.x = nx;
            z.el.style.left = nx.toFixed(2) + '%';
            gioiHan = nx + zwP + 0.8;
            if (z.muc && nx <= nha) vao = z;
          }
        }
        if (vao) phaNha(vao);
      }

      function ketThuc(thang) {
        choi = false;
        if (raf) { cancelAnimationFrame(raf); raf = 0; }
        sk.deBai('');
        if (thang) {
          st.ds.slice().forEach(function (z) {
            boZ(z);
            z.el.disabled = true;
            z.el.classList.add('tn-zb-poof');
          });
        }
        sau(function () {
          san = null;
          T.ketQua(sk, 'zombie', {
            diem: st.diem, dung: st.giet, tong: st.giet + st.saiLan, chuoi: st.dai, thang: thang,
            loi: thang ? 'Em đã chặn được cả bầy zombie!' : 'Zombie vào nhà mất rồi!',
            saiDs: st.sai
          }, moi);
        }, thang ? 700 : 900);
      }

      function moi() {
        xoaHen();
        st = { ds: [], muc: null, giet: 0, diem: 0, tim: TIM, chuoi: 0, dai: 0, saiLan: 0, sai: [], t: 0, cho: 1.6 };
        dungSan();
        sk.diem(0);
        sk.tim(TIM, TIM);
        sinh();
        sinh();
        chonMuc();
        choi = true;
        truoc = null;
        if (!raf) raf = requestAnimationFrame(buoc);
      }

      /* ----- dieu khien ----- */
      function timZ(el) {
        var id = parseInt(el.getAttribute('data-id'), 10);
        for (var i = 0; i < st.ds.length; i++) if (st.ds[i].id === id) return st.ds[i];
        return null;
      }
      // Cham bang ngon tay / chuot: dung pointerdown de khong lo khi zombie dang di
      function nhanXuong(e) {
        if (!choi) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        var b = e.target && e.target.closest ? e.target.closest('.tn-zb-z') : null;
        if (b) chon(timZ(b));
      }
      // Enter / Space tren nut dang focus (click tu ban phim co detail = 0)
      function bamPhimNut(e) {
        if (!choi || e.detail !== 0) return;
        var b = e.target && e.target.closest ? e.target.closest('.tn-zb-z') : null;
        if (b) chon(timZ(b));
      }
      // Phim 1-4: chon con dung dau lan tuong ung
      function phim(e) {
        if (!choi) return;
        var n = soPhim(e);
        if (!n || n > L) return;
        e.preventDefault();
        var ds = trongLan(n - 1);
        if (ds.length) chon(ds[0]);
      }
      function anHien() { tamDung = !!document.hidden; truoc = null; }

      document.addEventListener('keydown', phim);
      document.addEventListener('visibilitychange', anHien);
      window.addEventListener('resize', doKich);

      napTruoc(['zombie-1', 'zombie-2', 'zombie-3', 'zombie-poof', 'zombie-house']);
      T.manMoi(sk, {
        ic: anh('tn-moi-anh', 'zombie-1'),
        ten: 'Chặn Zombie',
        luat: 'Zombie cầm biển <b>chữ Hán</b> đang tiến về nhà em! Đọc nghĩa tiếng Việt ở trên rồi <b>chạm đúng zombie</b> mang chữ đó. ' +
          'Chạm nhầm bị trừ điểm, để zombie vào nhà mất ❤️. Chặn đủ <b>' + THANG + ' con</b> là thắng. ' +
          '<br><small>Máy tính: bấm phím 1–4 để chọn con đầu mỗi làn.</small>'
      }, moi);

      return {
        dung: function () {
          choi = false;
          if (raf) cancelAnimationFrame(raf);
          raf = 0;
          xoaHen();
          document.removeEventListener('keydown', phim);
          document.removeEventListener('visibilitychange', anHien);
          window.removeEventListener('resize', doKich);
        }
      };
    }
  });

  /* ══════════════ CHEM HOA QUA ══════════════
     Hoa qua mang chu Han bi tung len tu duoi (vat ly trong luc), 2-4 qua
     mot luc. De bai la nghia tieng Viet -> vuot (hoac cham) chem qua dung.
     Chem nham qua sai hoac bom 💣 mat 1 tim. Qua dung roi khoi man hinh thi
     duoc tung lai, khong tru gi. 60 giay + 3 tim. Chem nhanh lien tiep
     duoc combo. Toa do luu theo ti le (0-1) cua san, doi ra px khi ve.  */
  T.dangKy({
    key: 'chemqua',
    ten: 'Chém hoa quả',
    emoji: '🍉',
    chu: '切',
    nen: 'linear-gradient(160deg,#ff9a5a 0%,#d6336c 100%)',
    moTa: 'Hoa quả mang chữ Hán bay lên — vuốt chém đúng quả có nghĩa ở đề bài, tránh quả sai và bom 💣.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var GIAY = 60, TIM = 3, TOI_DA = 4;
      // [ten hinh, mau nuoc khi chem]
      var QUA = [['watermelon', 'red'], ['orange', 'orange'], ['apple', 'yellow'], ['strawberry', 'red'],
        ['kiwi', 'green'], ['lemon', 'yellow'], ['peach', 'orange'], ['pear', 'green']];
      var cham = T.itChuyenDong ? 0.65 : 1;     // giam chuyen dong -> qua bay cham hon
      var sk = T.khung(hop, this, { tim: TIM, gio: true });
      var layTu = hangTu(o.vocab);
      var choi = false, raf = 0, truoc = null, tamDung = !!document.hidden;
      var hen = [], st = null, san = null, ve = null, ctx = null;
      var W = 320, H = 400, KT = 72, dpr = 1;
      var VET_MS = 170;

      function sau(fn, ms) {
        var id = setTimeout(function () {
          var k = hen.indexOf(id);
          if (k >= 0) hen.splice(k, 1);
          fn();
        }, ms);
        hen.push(id);
      }
      function xoaHen() { hen.forEach(function (id) { clearTimeout(id); }); hen = []; }

      function doKich() {
        if (!san) return;
        W = san.clientWidth || 320;
        H = san.clientHeight || 400;
        KT = Math.round(Math.max(64, Math.min(92, W * 0.15)));
        san.style.setProperty('--cq-kt', KT + 'px');
        dpr = Math.min(2, window.devicePixelRatio || 1);
        ve.width = Math.round(W * dpr);
        ve.height = Math.round(H * dpr);
        if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (st) st.coVe = true;
      }

      function dungSan() {
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        san = T.tao('div', 'tn-cq-san');
        ve = T.tao('canvas', 'tn-cq-vet');
        ve.setAttribute('aria-hidden', 'true');
        san.appendChild(ve);
        sk.san.appendChild(san);
        sk.san.classList.add('tn-cq-choi');      // touch-action:none chi khi dang choi
        ctx = ve.getContext ? ve.getContext('2d') : null;
        san.addEventListener('pointerdown', xuong);
        san.addEventListener('pointermove', keo);
        san.addEventListener('pointerup', len);
        san.addEventListener('pointercancel', len);
        san.addEventListener('lostpointercapture', len);
        san.addEventListener('contextmenu', chanMenu);
        doKich();
      }
      function chanMenu(e) { e.preventDefault(); }

      /* ----- qua ----- */
      function trongLuc() { return 1.15 * cham * (1 + Math.min(0.3, st.t / GIAY * 0.3)); }   // don vi: H / giay^2
      function tuTren() {
        var a = st.ds.filter(function (f) { return f.tu; }).map(function (f) { return f.tu; });
        if (st.muc) a.push(st.muc);
        return a;
      }
      function soTrong() {
        for (var n = 1; n <= TOI_DA; n++) {
          if (!st.ds.some(function (f) { return f.so === n; })) return n;
        }
        return 0;
      }
      function coMuc() { return st.ds.some(function (f) { return f.tu && f.tu === st.muc; }); }

      // tu = null -> qua bom
      function taoQua(tu) {
        var bom = !tu, dai = tu ? tu.zh.length : 0;
        var f = { tu: tu, so: soTrong(), x: 0.5, y: 1.2, y0: 1.2, vx: 0, vy: 0, g: 1, rot: 0, vr: 0 };
        f.qua = bom ? null : QUA[Math.floor(Math.random() * QUA.length)];
        f.el = T.tao('div', 'tn-cq-qua' + (bom ? ' bom' : ''),
          anh('tn-cq-em', bom ? 'fruit-bomb' : 'fruit-' + f.qua[0]) +
          (bom ? '' : '<span class="tn-cq-chu' + (dai >= 5 ? ' rat-dai' : dai >= 3 ? ' dai' : '') + '" lang="zh">' + T.esc(tu.zh) + '</span>') +
          '<span class="tn-cq-so" aria-hidden="true">' + f.so + '</span>');
        f.em = f.el.firstChild;
        san.appendChild(f.el);
        st.ds.push(f);
        tung(f);
        return f;
      }
      // Tung qua tu duoi len theo duong cong, dinh o khoang 15-40% chieu cao
      function tung(f) {
        var g = trongLuc();
        f.g = g;
        f.y0 = f.y = 1 + KT * 0.6 / H;
        var dinh = 0.15 + Math.random() * 0.25;
        f.vy = -Math.sqrt(2 * g * (f.y0 - dinh));
        var bay = 2 * -f.vy / g;
        var x0 = 0.5;
        for (var k = 0; k < 6; k++) {
          x0 = 0.14 + Math.random() * 0.72;
          var gan = st.ds.some(function (q) { return q !== f && q.y > 0.6 && Math.abs(q.x - x0) < 0.2; });
          if (!gan) break;
        }
        var x1 = Math.max(0.12, Math.min(0.88, x0 + (Math.random() - 0.5) * 0.6));
        f.x = x0;
        f.vx = (x1 - x0) / bay;
        f.rot = Math.random() * 40 - 20;
        f.vr = T.itChuyenDong ? 0 : (Math.random() * 2 - 1) * 160;
        dat(f);
      }
      function dat(f) {
        f.el.style.transform = 'translate3d(' + (f.x * W - KT / 2).toFixed(1) + 'px,' + (f.y * H - KT / 2).toFixed(1) + 'px,0)';
        if (f.vr) f.em.style.transform = 'rotate(' + Math.round(f.rot) + 'deg)';
      }

      function chonMuc() {
        var tren = st.ds.filter(function (f) { return f.tu; }).map(function (f) { return f.tu; });
        var tu = layTu(tren);
        // het tu moi thi hoi luon mot qua dang bay
        if (!tu && tren.length) tu = tren[Math.floor(Math.random() * tren.length)];
        st.muc = tu;
        st.choMuc = 0.35;
        veDe();
      }
      function veDe() {
        var m = st.muc;
        if (!m) { sk.deBai(''); return; }
        sk.deBai('<span class="tn-cq-nhan">Chém</span>' +
          (m.em ? '<span class="tn-cq-goi" aria-hidden="true">' + T.esc(m.em) + '</span>' : '') +
          '<span class="tn-hoi-vn">' + T.esc(m.vn) + '</span>');
      }

      /* ----- chem ----- */
      function ghiSai(tu) { if (tu && st.sai.indexOf(tu) < 0) st.sai.push(tu); }
      function chem(f) {
        if (!choi) return;
        var k = st.ds.indexOf(f);
        if (k < 0) return;
        st.ds.splice(k, 1);
        vo(f);
        if (!f.tu) { matTim('💥 -1 ❤️'); return; }
        if (f.tu === st.muc) {
          st.dung++; st.chuoi++; st.dai = Math.max(st.dai, st.chuoi);
          st.combo = st.t - st.lanCuoi < 2.5 ? st.combo + 1 : 1;
          st.lanCuoi = st.t;
          var cong = 10 + Math.min(4, st.combo - 1) * 5;
          st.diem += cong;
          sk.diem(st.diem);
          sk.bay('+' + cong + (st.combo >= 2 ? ' Combo x' + st.combo : ''), st.combo >= 2 ? 'vang' : '');
          T.keuDung();
          T.doc(f.tu.zh);
          chonMuc();
        } else {
          st.saiLan++;
          ghiSai(st.muc);
          goiY(f, f.tu.zh + ' = ' + f.tu.vn);
          matTim('-1 ❤️');
        }
      }
      function matTim(chu) {
        st.chuoi = 0;
        st.combo = 0;
        st.tim--;
        sk.tim(st.tim, TIM);
        T.keuSai();
        T.rung(150);
        sk.bay(chu, 'sai');
        san.classList.remove('tn-cq-do');
        void san.offsetWidth;
        san.classList.add('tn-cq-do');
        var sanCu = san;
        sau(function () { sanCu.classList.remove('tn-cq-do'); }, 500);
        if (st.tim <= 0) ketThuc(true);
      }
      // Qua vo doi (hoac bom no)
      function vo(f) {
        var nua = f.qua ? 'fruit-' + f.qua[0] + '-half' : '';
        var m = T.tao('div', 'tn-cq-manh' + (f.qua ? '' : ' no'),
          f.qua ? anh('tn-cq-nuoc', 'fruit-splash-' + f.qua[1]) +
            '<span class="tn-cq-nua trai">' + anh('', nua) + '</span><span class="tn-cq-nua phai">' + anh('', nua) + '</span>'
            : '<span class="tn-cq-nua">' + anh('', 'fruit-boom') + '</span>');
        m.setAttribute('aria-hidden', 'true');
        m.style.transform = 'translate3d(' + (f.x * W - KT / 2).toFixed(1) + 'px,' + (f.y * H - KT / 2).toFixed(1) + 'px,0)';
        san.appendChild(m);
        go(f.el);
        sau(function () { go(m); }, 760);
      }
      // Nhan nho "chu = nghia" tai cho qua bi chem nham
      function goiY(f, chu) {
        var g = T.tao('div', 'tn-cq-goiy', T.esc(chu));
        g.style.left = Math.max(80, Math.min(W - 80, f.x * W)).toFixed(0) + 'px';
        g.style.top = Math.max(40, Math.min(H - 40, f.y * H)).toFixed(0) + 'px';
        san.appendChild(g);
        sau(function () { go(g); }, 1700);
      }

      /* ----- vuot / cham ----- */
      function diem(e) {
        var r = st.rect || san.getBoundingClientRect();
        return { x: e.clientX - r.left, y: e.clientY - r.top };
      }
      function kcDoan(px, py, a, b) {
        var dx = b.x - a.x, dy = b.y - a.y, d2 = dx * dx + dy * dy;
        var k = d2 ? ((px - a.x) * dx + (py - a.y) * dy) / d2 : 0;
        k = Math.max(0, Math.min(1, k));
        var x = a.x + k * dx - px, y = a.y + k * dy - py;
        return Math.sqrt(x * x + y * y);
      }
      // cham: chi chem qua gan nhat
      function trungDiem(p) {
        var r = KT * 0.55 + 6, tot = null, gan = r;
        st.ds.forEach(function (f) {
          var d = kcDoan(f.x * W, f.y * H, p, p);
          if (d <= gan) { gan = d; tot = f; }
        });
        if (tot) chem(tot);
      }
      // vuot: chem moi qua ma net vuot cat qua
      function trungDoan(a, b) {
        var r = KT * 0.55 + 4, ds = st.ds.slice();
        for (var i = 0; i < ds.length && choi; i++) {
          if (kcDoan(ds[i].x * W, ds[i].y * H, a, b) <= r) chem(ds[i]);
        }
      }
      function themVet(p) { st.vet.push({ x: p.x, y: p.y, t: performance.now(), n: st.net }); }
      function xuong(e) {
        if (!choi) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        e.preventDefault();
        st.rect = san.getBoundingClientRect();
        try { san.setPointerCapture(e.pointerId); } catch (x) { /* bo qua */ }
        var p = diem(e);
        st.vuot = e.pointerId;
        st.net++;
        st.cuoi = p;
        themVet(p);
        trungDiem(p);
      }
      function keo(e) {
        if (!choi || st.vuot !== e.pointerId) return;
        var p = diem(e);
        themVet(p);
        trungDoan(st.cuoi, p);
        st.cuoi = p;
      }
      function len(e) { if (st && st.vuot === e.pointerId) st.vuot = null; }

      function veVet(now) {
        if (!ctx) return;
        var vet = st.vet;
        while (vet.length && now - vet[0].t > VET_MS) vet.shift();
        if (!vet.length && !st.coVe) return;
        ctx.clearRect(0, 0, W, H);
        st.coVe = vet.length > 0;
        ctx.lineCap = 'round';
        for (var i = 1; i < vet.length; i++) {
          var a = vet[i - 1], b = vet[i];
          if (a.n !== b.n) continue;
          var k = Math.max(0, 1 - (now - b.t) / VET_MS);
          ctx.strokeStyle = 'rgba(255,240,200,' + (0.35 * k).toFixed(2) + ')';
          ctx.lineWidth = 6 + 10 * k;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          ctx.strokeStyle = 'rgba(255,255,255,' + (0.95 * k).toFixed(2) + ')';
          ctx.lineWidth = 2 + 5 * k;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }

      /* ----- vong lap chinh ----- */
      function buoc(t) {
        raf = requestAnimationFrame(buoc);
        if (!choi || tamDung) { truoc = null; return; }
        if (truoc == null) { truoc = t; return; }
        var dt = Math.min(0.1, (t - truoc) / 1000);
        truoc = t;
        st.t += dt;
        // dong ho rieng de dung duoc khi an tab
        var con = Math.max(0, Math.ceil(GIAY - st.t));
        if (con !== st.giay) { st.giay = con; sk.gio(con); }
        if (st.t >= GIAY) { ketThuc(false); return; }
        // tung qua dung (luon co tren san) va qua nhieu / bom
        st.choMuc -= dt;
        st.cho -= dt;
        var co = coMuc();
        if (!co && st.muc && st.choMuc <= 0 && st.ds.length < TOI_DA) { taoQua(st.muc); co = true; }
        if (st.cho <= 0) {
          st.cho = (Math.max(0.8, 1.7 - st.t / GIAY) + Math.random() * 0.5) / cham;
          var toiDa = st.t < 12 ? 2 : st.t < 32 ? 3 : 4;
          if (!co) toiDa--;                       // chua cho cho qua dung
          if (st.ds.length < toiDa) {
            var coBom = st.ds.some(function (f) { return !f.tu; });
            if (st.t > 8 && !coBom && Math.random() < 0.18) taoQua(null);
            else {
              var tu = layTu(tuTren());
              if (tu) taoQua(tu);
            }
          }
        }
        // vat ly
        for (var i = st.ds.length - 1; i >= 0; i--) {
          var f = st.ds[i];
          f.vy += f.g * dt;
          f.x += f.vx * dt;
          f.y += f.vy * dt;
          f.rot += f.vr * dt;
          if (f.vy > 0 && f.y > f.y0) {
            if (f.tu && f.tu === st.muc) tung(f);   // qua dung roi -> tung lai, khong tru
            else { st.ds.splice(i, 1); go(f.el); }
            continue;
          }
          dat(f);
        }
        veVet(performance.now());
      }

      function ketThuc(hetTim) {
        choi = false;
        if (raf) { cancelAnimationFrame(raf); raf = 0; }
        st.vuot = null;
        sk.san.classList.remove('tn-cq-choi');
        sk.deBai('');
        sk.gio('—');
        if (ctx) ctx.clearRect(0, 0, W, H);
        sau(function () {
          san = null; ve = null; ctx = null;
          T.ketQua(sk, 'chemqua', {
            diem: st.diem, dung: st.dung, tong: st.dung + st.saiLan, chuoi: st.dai,
            thang: hetTim ? false : undefined,
            loi: hetTim ? 'Hết tim rồi!' : undefined,
            saiDs: st.sai
          }, moi);
        }, 800);
      }

      function moi() {
        xoaHen();
        st = {
          ds: [], muc: null, diem: 0, dung: 0, saiLan: 0, sai: [], tim: TIM, chuoi: 0, dai: 0,
          combo: 0, lanCuoi: -9, t: 0, giay: -1, cho: 0.8, choMuc: 0,
          vet: [], net: 0, vuot: null, cuoi: null, rect: null, coVe: false
        };
        dungSan();
        sk.diem(0);
        sk.tim(TIM, TIM);
        sk.gio(GIAY);
        chonMuc();
        taoQua(st.muc);
        choi = true;
        truoc = null;
        if (!raf) raf = requestAnimationFrame(buoc);
      }

      // Phim 1-4: chem qua co so tuong ung
      function phim(e) {
        if (!choi) return;
        var n = soPhim(e);
        if (!n || n > TOI_DA) return;
        e.preventDefault();
        for (var i = 0; i < st.ds.length; i++) {
          if (st.ds[i].so === n) { chem(st.ds[i]); return; }
        }
      }
      function anHien() { tamDung = !!document.hidden; truoc = null; if (st) st.vuot = null; }
      function doiCo() { if (choi) { doKich(); if (st) st.rect = null; } }

      document.addEventListener('keydown', phim);
      document.addEventListener('visibilitychange', anHien);
      window.addEventListener('resize', doiCo);

      var hinh = ['fruit-bomb', 'fruit-boom', 'fruit-splash-red', 'fruit-splash-orange', 'fruit-splash-green', 'fruit-splash-yellow'];
      QUA.forEach(function (q) { hinh.push('fruit-' + q[0], 'fruit-' + q[0] + '-half'); });
      napTruoc(hinh);
      T.manMoi(sk, {
        ic: anh('tn-moi-anh', 'fruit-watermelon'),
        ten: 'Chém hoa quả',
        luat: 'Hoa quả mang <b>chữ Hán</b> bay lên. Đọc nghĩa tiếng Việt ở trên rồi <b>vuốt (hoặc chạm)</b> chém đúng quả đó. ' +
          'Chém nhầm quả sai hay bom 💣 mất ❤️. Chém nhanh liên tiếp được <b>combo</b>. Có <b>60 giây</b>! ' +
          '<br><small>Máy tính: bấm phím 1–4 theo số trên quả.</small>'
      }, moi);

      return {
        dung: function () {
          choi = false;
          if (raf) cancelAnimationFrame(raf);
          raf = 0;
          xoaHen();
          sk.san.classList.remove('tn-cq-choi');
          document.removeEventListener('keydown', phim);
          document.removeEventListener('visibilitychange', anHien);
          window.removeEventListener('resize', doiCo);
        }
      };
    }
  });
})();
