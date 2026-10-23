/* Tro choi tu choi o nha — nhom doi dau: Keo co, Doan tau tri thuc, Lat manh ghep.
   Dang ky vao khung chung tro-nha.js (window.TroNha). */
(function () {
  'use strict';
  var T = window.TroNha;
  if (!T) return;

  // Chay lai mot hieu ung CSS (bo lop roi gan lai). Bo qua khi giam chuyen dong.
  function nhun(d, lop) {
    if (!d || T.itChuyenDong) return;
    d.classList.remove(lop);
    void d.offsetWidth;
    d.classList.add(lop);
  }
  function soVN(n) { return String(n).replace('.', ','); }
  function themSai(ds, v) {
    for (var i = 0; i < ds.length; i++) if (ds[i].zh === v.zh) return;
    ds.push(v);
  }

  /* ══════════════ KEO CO ══════════════
     Em (ben trai) dau voi May (ben phai). Nut day o giua, moi ben 5 nac.
     Tra loi dung keo nut ve phia em, sai thi May keo. Ngoai ra May tu keo
     mot nac sau moi N giay (nhanh dan) nen phai tra loi nhanh.          */
  T.dangKy({
    key: 'keoco',
    ten: 'Kéo co',
    emoji: '💪',
    chu: '拔',
    nen: 'linear-gradient(160deg,#ff9a5a 0%,#d84315 100%)',
    moTa: 'Kéo co với Máy: trả lời đúng thì nút dây về phía em, sai hoặc chậm thì Máy kéo lại — kéo đủ 5 nấc là thắng.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var NAC = 5, BUOC = 7; // moi nac = 7% chieu ngang san keo
      var MUC = [{ ten: 'Dễ', giay: 8 }, { ten: 'Vừa', giay: 6 }, { ten: 'Khó', giay: 4.5 }];
      var sk = T.khung(hop, this, {});
      var lay = T.boCau(o.vocab);
      var dang = true, chon = 1, henCau = null, henMay = null, henHet = null, henThanh = null, go = null, st, el;

      function dungHen() {
        clearTimeout(henCau); clearTimeout(henMay); clearTimeout(henHet); clearInterval(henThanh);
        if (go) { go(); go = null; }
      }
      function gioiThieu() {
        dungHen();
        T.manMoi(sk, {
          ic: '💪',
          ten: 'Kéo co',
          luat: 'Em 🧒 kéo co với Máy 🤖. Trả lời <b>đúng</b> thì nút dây dịch về phía em, <b>sai</b> thì về phía Máy. ' +
            'Máy cũng tự kéo sau mỗi vài giây — trả lời càng nhanh càng tốt! Kéo đủ <b>5 nấc</b> là thắng.',
          nut: 'Bắt đầu kéo ▶'
        }, moi);
        var khung = sk.san.querySelector('.tn-moi');
        if (!khung) return;
        var hang = T.tao('div', 'tn-kc-muc');
        hang.setAttribute('role', 'group');
        hang.setAttribute('aria-label', 'Độ khó');
        MUC.forEach(function (m, i) {
          var b = T.tao('button', 'tn-nut tn-kc-muc-nut',
            T.esc(m.ten) + '<small>Máy kéo mỗi ' + soVN(m.giay) + ' giây</small>');
          b.type = 'button';
          b.setAttribute('aria-pressed', i === chon ? 'true' : 'false');
          b.addEventListener('click', function () {
            chon = i;
            Array.prototype.forEach.call(hang.children, function (x, k) { x.setAttribute('aria-pressed', k === chon ? 'true' : 'false'); });
          });
          hang.appendChild(b);
        });
        khung.insertBefore(hang, khung.lastChild);
      }

      function moi() {
        dungHen();
        st = { vi: 0, diem: 0, dung: 0, tong: 0, chuoi: 0, dai: 0, sai: [], nhip: MUC[chon].giay * 1000, xong: false };
        sk.diem(0);
        veSan();
        henMayKeo();
        cau();
      }
      function veSan() {
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        el = {};
        var vach = '';
        for (var k = -NAC; k <= NAC; k++) {
          vach += '<span class="tn-kc-vach' + (k === -NAC ? ' dich-em' : k === NAC ? ' dich-may' : k === 0 ? ' giua' : '') +
            '" style="left:' + (50 + k * BUOC) + '%"></span>';
        }
        el.dau = T.tao('div', 'tn-kc-dau',
          '<div class="tn-kc-nhan"><span class="tn-kc-nhan-em">🧒 Em</span><span class="tn-kc-muc-nho">' + T.esc(MUC[chon].ten) +
            '</span><span class="tn-kc-nhan-may">Máy 🤖</span></div>' +
          '<div class="tn-kc-bai" role="img" aria-label="Sân kéo co">' + vach +
            '<div class="tn-kc-day"><span class="tn-kc-nut"></span></div>' +
            '<span class="tn-kc-nguoi tn-kc-em" aria-hidden="true">🧒</span>' +
            '<span class="tn-kc-nguoi tn-kc-may" aria-hidden="true">🤖</span>' +
          '</div>' +
          '<div class="tn-kc-dem"><span>Máy sắp kéo</span><i><b></b></i></div>');
        el.day = el.dau.querySelector('.tn-kc-day');
        el.em = el.dau.querySelector('.tn-kc-em');
        el.may = el.dau.querySelector('.tn-kc-may');
        el.thanh = el.dau.querySelector('.tn-kc-dem b');
        el.hoi = T.tao('div', 'tn-kc-hoi');
        sk.san.appendChild(el.dau);
        sk.san.appendChild(el.hoi);
        viTri();
      }
      function viTri() {
        // day rong 200% nen 3.5% cua day = 7% cua san
        el.day.style.transform = 'translateX(' + (st.vi * BUOC / 2) + '%)';
        el.dau.classList.toggle('nghieng-em', st.vi < 0);
        el.dau.classList.toggle('nghieng-may', st.vi > 0);
      }
      // Thanh bao gio May se tu keo. Cap nhat bang JS (khong dung transition)
      // vi style.css tat het transition khi nguoi dung chon giam chuyen dong.
      function chayThanh(ms) {
        var t0 = Date.now();
        clearInterval(henThanh);
        function ve() {
          var pt = Math.min(1, (Date.now() - t0) / ms);
          el.thanh.style.width = (pt * 100).toFixed(1) + '%';
          el.thanh.classList.toggle('gap', pt > 0.75);
        }
        ve();
        henThanh = setInterval(ve, 100);
      }
      function henMayKeo() {
        clearTimeout(henMay);
        if (!dang || st.xong) return;
        chayThanh(st.nhip);
        henMay = setTimeout(function () {
          if (!dang || st.xong) return;
          T.keu(200, 0.18, 'sawtooth');
          T.rung(60);
          sk.bay('Máy kéo! 🤖', 'sai');
          keo(1);
          // Max nhanh dan, nhung khong nhanh hon 60% nhip ban dau
          st.nhip = Math.max(MUC[chon].giay * 600, st.nhip * 0.94);
          henMayKeo();
        }, st.nhip);
      }
      function keo(huong) {
        if (st.xong) return;
        st.vi = Math.max(-NAC, Math.min(NAC, st.vi + huong));
        viTri();
        nhun(huong < 0 ? el.em : el.may, 'keo');
        if (st.vi <= -NAC) ketThuc(true);
        else if (st.vi >= NAC) ketThuc(false);
      }
      function cau() {
        if (!dang || st.xong) return;
        var q = lay();
        var t0 = Date.now();
        sk.deBai(q.hoi);
        if (go) go();
        go = T.oDapAn(el.hoi, q, function (dung) {
          if (!dang || st.xong) return;
          st.tong++;
          if (dung) {
            var giay = (Date.now() - t0) / 1000;
            st.dung++; st.chuoi++; st.dai = Math.max(st.dai, st.chuoi);
            var cong = 10 + Math.round(10 * Math.max(0, 1 - giay / 5)) + Math.min(5, st.chuoi - 1) * 2;
            st.diem += cong;
            sk.diem(st.diem);
            sk.bay('+' + cong + (st.chuoi >= 3 ? ' 🔥' + st.chuoi : ''));
            keo(-1);
          } else {
            st.chuoi = 0;
            themSai(st.sai, q.tu);
            keo(1);
          }
          if (!st.xong) henCau = setTimeout(cau, dung ? 600 : 1300);
        });
      }
      function ketThuc(thang) {
        st.xong = true;
        clearTimeout(henMay); clearTimeout(henCau);
        if (go) { go(); go = null; }
        clearInterval(henThanh);
        el.dau.classList.add(thang ? 'thang' : 'thua');
        sk.deBai('');
        if (thang) {
          st.diem += 50;
          sk.diem(st.diem);
          sk.bay('Thắng! +50', 'vang');
        } else {
          T.keuSai();
          sk.bay('Máy thắng!', 'sai');
        }
        henHet = setTimeout(function () {
          if (!dang) return;
          T.ketQua(sk, 'keoco', {
            diem: st.diem, dung: st.dung, tong: st.tong, chuoi: st.dai, thang: thang, saiDs: st.sai,
            loi: thang ? 'Em kéo thắng Máy rồi!' : 'Máy thắng mất rồi!'
          }, gioiThieu);
        }, 1400);
      }

      gioiThieu();
      return { dung: function () { dang = false; dungHen(); } };
    }
  });

  /* ══════════════ DOAN TAU TRI THUC ══════════════
     60 giay. Moi cau dung gan them mot toa (ghi chu Han) sau dau tau,
     cau sai rot toa cuoi. Diem = so toa x 10 + thuong nhanh/chuoi.    */
  T.dangKy({
    key: 'doantau',
    ten: 'Đoàn tàu tri thức',
    emoji: '🚂',
    chu: '车',
    nen: 'linear-gradient(160deg,#4fc3f7 0%,#1565c0 100%)',
    moTa: 'Trong 60 giây, mỗi câu đúng gắn thêm một toa vào đoàn tàu, câu sai làm rớt toa cuối — tàu càng dài càng nhiều điểm.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var GIAY = 60;
      var sk = T.khung(hop, this, { gio: true });
      var lay = T.boCau(o.vocab);
      var dang = true, hen = null, henRoi = null, dh = null, go = null, st, el;

      function dungHen() {
        clearTimeout(hen); clearTimeout(henRoi);
        if (dh) { dh.dung(); dh = null; }
        if (go) { go(); go = null; }
      }
      function tinhDiem() { return st.toa.length * 10 + st.thuong; }

      function moi() {
        dungHen();
        st = { toa: [], thuong: 0, dung: 0, tong: 0, chuoi: 0, dai: 0, sai: [], mau: 0, xong: false };
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        el = {};
        el.ray = T.tao('div', 'tn-dt-ray' + (T.itChuyenDong ? '' : ' chay'),
          '<div class="tn-dt-dem" aria-live="polite">🚃 <b>0</b> toa</div>' +
          '<div class="tn-dt-tau"><span class="tn-dt-dau" aria-hidden="true">🚂</span><div class="tn-dt-toas"></div></div>' +
          '<div class="tn-dt-duong" aria-hidden="true"></div>');
        el.dem = el.ray.querySelector('.tn-dt-dem b');
        el.toas = el.ray.querySelector('.tn-dt-toas');
        el.dauTau = el.ray.querySelector('.tn-dt-dau');
        el.hoi = T.tao('div', 'tn-dt-hoi');
        sk.san.appendChild(el.ray);
        sk.san.appendChild(el.hoi);
        sk.diem(0);
        ve(false);
        dh = T.demNguoc(GIAY, sk.gio, het);
        cau();
      }
      // Ve lai cac toa: chi hien nhung toa cuoi vua khung, phia truoc co nhan "+N"
      function ve(coMoi) {
        clearTimeout(henRoi);
        var n = st.toa.length;
        el.dem.textContent = n;
        el.toas.innerHTML = '';
        var rong = el.toas.clientWidth || 0;
        // rong mot toa + khoang cach (px); tren dien thoai toa hep hon (xem css)
        var RONG_TOA = window.matchMedia && matchMedia('(max-width: 520px)').matches ? 56 : 60;
        var hien = n;
        if (n > Math.floor(rong / RONG_TOA)) {
          hien = Math.max(1, Math.floor((rong - 40) / RONG_TOA)); // 40px cho nhan "+N"
          el.toas.appendChild(T.tao('span', 'tn-dt-an', '+' + (n - hien)));
        }
        st.toa.slice(n - hien).forEach(function (t, i, ds) {
          var zh = t.tu.zh;
          var d = T.tao('span', 'tn-dt-toa m' + t.m + (zh.length > 3 ? ' rat-dai' : zh.length > 2 ? ' dai' : '') +
            (coMoi && i === ds.length - 1 ? ' moi' : ''), '<span class="tn-dt-zh">' + T.esc(zh) + '</span>');
          d.title = (t.tu.py ? t.tu.py + ' · ' : '') + t.tu.vn;
          el.toas.appendChild(d);
        });
      }
      function cau() {
        if (!dang || st.xong) return;
        var q = lay();
        var t0 = Date.now();
        sk.deBai(q.hoi);
        if (go) go();
        go = T.oDapAn(el.hoi, q, function (dung) {
          if (!dang || st.xong) return;
          st.tong++;
          if (dung) {
            var giay = (Date.now() - t0) / 1000;
            st.dung++; st.chuoi++; st.dai = Math.max(st.dai, st.chuoi);
            var thuong = (giay < 2.5 ? 5 : giay < 5 ? 2 : 0) + (st.chuoi >= 3 ? Math.min(10, (st.chuoi - 2) * 2) : 0);
            st.thuong += thuong;
            st.toa.push({ tu: q.tu, m: st.mau++ % 4 });
            ve(true);
            nhun(el.dauTau, 'hu');
            sk.bay('+' + (10 + thuong) + (st.chuoi >= 3 ? ' 🔥' + st.chuoi : ''));
          } else {
            st.chuoi = 0;
            themSai(st.sai, q.tu);
            if (st.toa.length) {
              st.toa.pop();
              sk.bay('Rớt 1 toa!', 'sai');
              var cuoi = el.toas.lastChild;
              if (cuoi && !T.itChuyenDong && cuoi.classList.contains('tn-dt-toa')) {
                cuoi.classList.add('roi');
                henRoi = setTimeout(function () { ve(false); }, 450);
              } else ve(false);
            }
          }
          sk.diem(tinhDiem());
          hen = setTimeout(cau, dung ? 450 : 1100);
        });
      }
      function het() {
        if (!dang || st.xong) return;
        st.xong = true;
        clearTimeout(hen);
        if (go) { go(); go = null; }
        dh = null;
        T.keu(392, 0.25, 'triangle');
        sk.bay('Hết giờ!', 'vang');
        sk.deBai('');
        hen = setTimeout(function () {
          if (!dang) return;
          var n = st.toa.length;
          T.ketQua(sk, 'doantau', {
            diem: tinhDiem(), dung: st.dung, tong: st.tong, chuoi: st.dai, saiDs: st.sai,
            loi: n ? 'Đoàn tàu dài ' + n + ' toa!' : 'Tàu chưa có toa nào — thử lại nhé!'
          }, moi);
        }, 1000);
      }

      T.manMoi(sk, {
        ic: '🚂',
        ten: 'Đoàn tàu tri thức',
        luat: 'Em có <b>60 giây</b>. Mỗi câu đúng gắn thêm <b>một toa</b> 🚃 vào đoàn tàu, câu sai làm <b>rớt toa cuối</b>. ' +
          'Trả lời nhanh và đúng liên tiếp được thưởng thêm 🔥.',
        nut: 'Cho tàu chạy ▶'
      }, moi);
      return { dung: function () { dang = false; dungHen(); } };
    }
  });

  /* ══════════════ LAT MANH GHEP ══════════════
     Mot buc tranh bi an (emoji cua mot tu) bi che boi 9 manh so.
     Cham manh -> tra loi cau hoi (tu khac) -> dung thi mo manh do.
     Bat cu luc nao co the "Đoán từ bí ẩn": dung duoc thuong cang lon
     khi mo cang it manh, sai mat mot tim. 3 buc tranh / luot, 3 tim.
     Neu chua du 4 tu co hinh thi giau chu Han, doan nghia tieng Viet. */
  T.dangKy({
    key: 'manhghep',
    ten: 'Lật mảnh ghép',
    emoji: '🧩',
    chu: '拼',
    nen: 'linear-gradient(160deg,#b388ff 0%,#6a1b9a 100%)',
    moTa: 'Trả lời đúng để lật từng mảnh ghép, rồi đoán xem bức tranh bí ẩn là từ nào — đoán càng sớm càng nhiều điểm.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var SO_HINH = 3, TIM = 3, SO_O = 9;
      var NEN = [
        'linear-gradient(135deg,#ffe29a,#ffa36c)',
        'linear-gradient(135deg,#a8edea,#5fb3f2)',
        'linear-gradient(135deg,#d4fc79,#5ccf8f)',
        'linear-gradient(135deg,#fbc2eb,#a18cd1)',
        'linear-gradient(135deg,#ffd1a9,#ff7e7e)'
      ];
      var sk = T.khung(hop, this, { tim: TIM });
      var coHinh = o.vocab.filter(function (v) { return v.em; });
      var laHinh = coHinh.length >= 4; // false -> giau chu Han, doan nghia
      var dang = true, hen = null, go = null, st, el, hang = [];

      function dungHen() {
        clearTimeout(hen);
        if (go) { go(); go = null; }
      }
      function thuong() { return 20 + (SO_O - st.mo) * 10; }

      function moi() {
        dungHen();
        st = {
          hinh: 0, diem: 0, dung: 0, tong: 0, chuoi: 0, dai: 0, sai: [], tim: TIM, xong: false,
          kho: T.tron(laHinh ? coHinh : o.vocab), nen: T.tron(NEN)
        };
        sk.diem(0);
        sk.tim(TIM, TIM);
        hinhMoi();
      }
      // Cau hoi cho mot manh: lay tu khac voi tu bi an, xoay vong
      function layCau() {
        var bi = st.bi;
        var khac = o.vocab.filter(function (v) { return v.zh !== bi.zh; });
        if (!hang.length) hang = T.tron(khac);
        var tu = hang.pop();
        while (tu && tu.zh === bi.zh) { if (!hang.length) hang = T.tron(khac); tu = hang.pop(); }
        return T.cauHoi(khac, tu);
      }
      function chonDoan(bi) {
        var nhieu = o.vocab.filter(function (v) { return v.zh !== bi.zh && v.vn !== bi.vn; });
        var it = laHinh ? nhieu.filter(function (v) { return v.em !== bi.em; }) : nhieu;
        var khac = T.tron(it.length >= 3 ? it : nhieu).slice(0, 3);
        return T.tron([bi].concat(khac));
      }
      function deBai(them) {
        sk.deBai('<span class="tn-mg-so">Hình ' + st.hinh + '/' + SO_HINH + '</span>' + (them || ''));
      }

      function hinhMoi() {
        dungHen();
        st.hinh++;
        st.mo = 0; st.khoa = false; st.daSai = {}; st.oDang = null;
        st.bi = st.kho[(st.hinh - 1) % st.kho.length];
        st.lua = chonDoan(st.bi);
        hang = [];
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        el = {};
        if (!laHinh) {
          sk.san.appendChild(T.tao('p', 'tn-mg-luu',
            '💡 Các bài đã chọn chưa đủ từ có hình minh hoạ, nên mỗi bức tranh sẽ giấu một <b>chữ Hán</b> — em đoán nghĩa tiếng Việt của nó nhé!'));
        }
        var khu = T.tao('div', 'tn-mg-khu');
        el.tranh = T.tao('div', 'tn-mg-tranh');
        el.tranh.style.background = st.nen[(st.hinh - 1) % st.nen.length];
        var noi = laHinh ? st.bi.em : st.bi.zh;
        el.tranh.innerHTML = '<div class="tn-mg-hinh' + (laHinh ? '' : ' la-chu c' + Math.min(4, st.bi.zh.length)) +
          '" aria-hidden="true">' + T.esc(noi) + '</div>';
        el.luoi = T.tao('div', 'tn-mg-luoi');
        el.luoi.setAttribute('role', 'group');
        el.luoi.setAttribute('aria-label', 'Các mảnh ghép');
        el.o = [];
        for (var i = 0; i < SO_O; i++) {
          (function (i) {
            var b = T.tao('button', 'tn-mg-o m' + (i % 4), '<span>' + (i + 1) + '</span>');
            b.type = 'button';
            b.setAttribute('aria-label', 'Mảnh số ' + (i + 1));
            b.addEventListener('click', function () { moO(i); });
            el.o.push(b);
            el.luoi.appendChild(b);
          })(i);
        }
        el.tranh.appendChild(el.luoi);
        el.ben = T.tao('div', 'tn-mg-ben');
        khu.appendChild(el.tranh);
        khu.appendChild(el.ben);
        sk.san.appendChild(khu);
        el.nutDoan = T.tao('button', 'tn-nut tn-nut-vang', '🔮 Đoán từ bí ẩn');
        el.nutDoan.type = 'button';
        el.nutDoan.addEventListener('click', function () { moDoan(false); });
        sk.duoi.appendChild(el.nutDoan);
        nghi();
      }
      // Ben phai khi chua hoi gi: nhac cach choi + diem thuong hien tai
      function nghi() {
        if (go) { go(); go = null; }
        boChon();
        deBai('<span class="tn-mg-goi">Chạm một ô số để lật mảnh ghép</span>');
        el.ben.innerHTML =
          '<p class="tn-mg-nhac">👆 Chạm một <b>ô số</b> rồi trả lời đúng để lật mảnh đó. Nhận ra ' +
          (laHinh ? 'bức tranh' : 'chữ Hán') + ' rồi thì bấm <b>Đoán từ bí ẩn</b>.</p>' +
          '<p class="tn-mg-thuong">Đoán đúng bây giờ được <b>+' + thuong() + '</b></p>';
      }
      function boChon() {
        if (st.oDang != null && el.o[st.oDang]) el.o[st.oDang].classList.remove('dang-chon');
        st.oDang = null;
      }
      function oTiep() {
        for (var i = 0; i < SO_O; i++) if (!el.o[i].classList.contains('mo')) return el.o[i];
        return null;
      }
      function cuoiMoi(tuDong) {
        // focus ve o ke tiep neu ban phim dang o trong vung hoi (de nguoi dung ban phim khoi lac)
        var a = document.activeElement;
        if (tuDong || !a || a === document.body || el.ben.contains(a)) {
          var n = oTiep();
          if (n) { try { n.focus(); } catch (e) { /* */ } }
        }
      }
      function focusDau() {
        var b = el.ben.querySelector('.tn-o:not(:disabled)');
        if (b) { try { b.focus(); } catch (e) { /* */ } }
      }

      function moO(i) {
        if (!dang || st.xong || st.khoa) return;
        var b = el.o[i];
        if (b.classList.contains('mo')) return;
        if (go) { go(); go = null; }
        boChon();
        st.oDang = i;
        b.classList.add('dang-chon');
        var q = layCau();
        deBai(q.hoi);
        el.ben.innerHTML = '';
        el.ben.appendChild(T.tao('p', 'tn-mg-nhac', 'Mảnh số <b>' + (i + 1) + '</b> — ' +
          (q.kieu === 'zh' ? 'chọn nghĩa đúng:' : 'chọn chữ Hán đúng:')));
        go = T.oDapAn(el.ben, q, function (dung) {
          if (!dang || st.xong) return;
          st.khoa = true;
          st.tong++;
          if (dung) {
            st.dung++; st.chuoi++; st.dai = Math.max(st.dai, st.chuoi);
            st.diem += 10;
            sk.diem(st.diem);
            sk.bay('+10');
            st.mo++;
            b.classList.remove('dang-chon');
            b.classList.add('mo');
            b.disabled = true;
          } else {
            st.chuoi = 0;
            themSai(st.sai, q.tu);
            matTim();
          }
          hen = setTimeout(function () {
            if (!dang) return;
            st.khoa = false;
            if (st.tim <= 0) { hetTim(); return; }
            if (st.mo >= SO_O) { moDoan(true); return; }
            nghi();
            cuoiMoi(false);
          }, dung ? 700 : 1400);
        }, { nho: true });
        focusDau();
      }
      function matTim() {
        st.tim--;
        sk.tim(st.tim, TIM);
        sk.bay('−1 ❤️', 'sai');
      }

      function moDoan(batBuoc) {
        if (!dang || st.xong || st.khoa) return;
        if (go) { go(); go = null; }
        boChon();
        deBai('<span class="tn-mg-goi">' + (laHinh ? 'Bức tranh là từ nào?' : 'Chữ Hán này nghĩa là gì?') + '</span>');
        el.ben.innerHTML = '';
        el.ben.appendChild(T.tao('p', 'tn-mg-nhac', batBuoc
          ? '🎉 Đã lật hết mảnh ghép! ' + (laHinh ? 'Bức tranh là từ nào?' : 'Chữ Hán này nghĩa là gì?')
          : '🔮 Đoán đúng được <b>+' + thuong() + '</b>, đoán sai mất 1 ❤️'));
        var q = {
          tu: st.bi, kieu: 'zh', hoi: '',
          lua: st.lua.map(function (v) { return laHinh ? v.zh : v.vn; }),
          laZh: laHinh,
          dung: st.lua.indexOf(st.bi)
        };
        go = T.oDapAn(el.ben, q, traLoiDoan, { nho: true, khongToMau: true });
        Array.prototype.forEach.call(el.ben.querySelectorAll('.tn-o'), function (b, i) {
          var v = st.lua[i];
          if (laHinh) {
            b.querySelector('.tn-o-chu').innerHTML = '<span class="tn-mg-lzh">' + T.esc(v.zh) + '</span>' +
              (v.py ? '<span class="tn-mg-lpy">' + T.esc(v.py) + '</span>' : '');
          }
          if (st.daSai[i]) { b.disabled = true; b.classList.add('is-mo'); }
        });
        if (!batBuoc) {
          var lui = T.tao('button', 'tn-nut tn-mg-lui', '← Lật tiếp mảnh ghép');
          lui.type = 'button';
          lui.addEventListener('click', function () { if (!st.khoa) { nghi(); cuoiMoi(true); } });
          el.ben.appendChild(lui);
        }
        focusDau();
      }
      function traLoiDoan(dung, i) {
        if (!dang || st.xong) return;
        st.tong++;
        var nut = el.ben.querySelectorAll('.tn-o')[i];
        if (dung) {
          st.dung++; st.chuoi++; st.dai = Math.max(st.dai, st.chuoi);
          var cong = thuong();
          st.diem += cong;
          sk.diem(st.diem);
          sk.bay('+' + cong + ' 🎉', 'vang');
          if (nut) nut.classList.add('is-dung');
          lo('dung');
        } else {
          st.chuoi = 0;
          st.daSai[i] = true;
          themSai(st.sai, st.bi);
          if (nut) { nut.classList.add('is-sai'); nut.disabled = true; }
          matTim();
          st.khoa = true;
          hen = setTimeout(function () {
            if (!dang) return;
            st.khoa = false;
            if (st.tim <= 0) { hetTim(); return; }
            if (st.mo >= SO_O) { moDoan(true); return; }
            nghi();
            cuoiMoi(true);
          }, 1000);
        }
      }
      // Lo toan bo buc tranh + dap an. kieu: 'dung' (doan trung) | 'het' (het tim)
      function lo(kieu) {
        if (go) { go(); go = null; }
        st.khoa = true;
        el.o.forEach(function (b) { b.classList.add('mo'); b.disabled = true; });
        el.tranh.classList.add('lo');
        sk.duoi.innerHTML = '';
        T.doc(st.bi.zh);
        var cuoi = kieu === 'het' || st.hinh >= SO_HINH;
        deBai('');
        el.ben.innerHTML =
          '<p class="tn-mg-nhac">' + (kieu === 'het' ? '💔 Hết tim rồi! Đáp án là:' : '🎉 Chính xác!') + '</p>' +
          '<div class="tn-mg-dapan">' + (st.bi.em ? '<span class="tn-mg-dem">' + T.esc(st.bi.em) + '</span>' : '') +
            '<span class="tn-mg-dzh">' + T.esc(st.bi.zh) + '</span>' +
            (st.bi.py ? '<span class="tn-mg-dpy">' + T.esc(st.bi.py) + '</span>' : '') +
            '<span class="tn-mg-dvn">' + T.esc(st.bi.vn) + '</span></div>';
        var nghe = T.tao('button', 'tn-nut tn-mg-lui', '🔊 Nghe');
        nghe.type = 'button';
        nghe.addEventListener('click', function () { T.doc(st.bi.zh); });
        var tiep = T.tao('button', 'tn-nut tn-nut-chinh', cuoi ? 'Xem kết quả ▶' : 'Hình tiếp theo ▶');
        tiep.type = 'button';
        tiep.addEventListener('click', function () {
          if (!dang) return;
          if (cuoi) ketThuc(kieu === 'het');
          else hinhMoi();
        });
        var hangNut = T.tao('div', 'tn-mg-hang');
        hangNut.appendChild(nghe);
        hangNut.appendChild(tiep);
        el.ben.appendChild(hangNut);
        setTimeout(function () { try { if (dang && tiep.parentNode) tiep.focus(); } catch (e) { /* */ } }, 50);
      }
      function hetTim() {
        st.xong = true;
        T.keuSai();
        lo('het');
      }
      function ketThuc(thua) {
        dungHen();
        st.xong = true;
        sk.deBai('');
        T.ketQua(sk, 'manhghep', {
          diem: st.diem, dung: st.dung, tong: st.tong, chuoi: st.dai, saiDs: st.sai,
          thang: thua ? false : undefined,
          loi: thua ? 'Hết tim mất rồi!' : undefined
        }, moi);
      }

      T.manMoi(sk, {
        ic: '🧩',
        ten: 'Lật mảnh ghép',
        luat: (laHinh ? 'Một bức tranh bí ẩn' : 'Một chữ Hán bí ẩn') + ' bị che bởi <b>9 mảnh ghép</b>. Chạm một mảnh, trả lời đúng để lật nó ra. ' +
          'Bấm <b>Đoán từ bí ẩn</b> bất cứ lúc nào — đoán càng sớm càng nhiều điểm, nhưng đoán sai mất 1 ❤️. Có <b>3 hình</b> và <b>3 tim</b>.' +
          (laHinh ? '' : '<br><small>💡 Các bài đã chọn chưa đủ từ có hình minh hoạ, nên lần này em sẽ đoán nghĩa của chữ Hán.</small>'),
        nut: 'Bắt đầu ▶'
      }, moi);
      return { dung: function () { dang = false; dungHen(); } };
    }
  });
})();
