/* Tro choi tu choi o nha — nhom tri tue: Do min, Keo tha.
   Dang ky vao khung chung tro-nha.js (window.TroNha). */
(function () {
  'use strict';
  var T = window.TroNha;
  if (!T) return;

  /* ══════════════ DO MIN ══════════════
     Bai min 5x5, 5 qua min (dat sau lan cham dau nen o dau luon an toan).
     Cham o dong -> tra loi cau hoi. Dung: mo o (so = so min xung quanh,
     0 thi tu mo loang nhu do min co dien); trung min -> mat 1 tim.
     Sai: mat 1 tim, o van dong. Cam co (giu lau / chuot phai / nut 🚩)
     de danh dau o nghi co min — o da cam co khong mo duoc.            */
  T.dangKy({
    key: 'domin',
    ten: 'Dò mìn',
    emoji: '💣',
    chu: '雷',
    nen: 'linear-gradient(160deg,#7bd389 0%,#2e7d5b 100%)',
    moTa: 'Chạm một ô trên bãi mìn 5×5 và trả lời đúng để mở ô — số trên ô cho biết quanh đó có mấy quả mìn, hãy cắm cờ 🚩 chỗ nghi có mìn.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var CO = 5, SO_MIN = 5, TIM = 3, TONG = CO * CO;
      var sk = T.khung(hop, this, { tim: TIM });
      var lay = T.boCau(o.vocab);
      var dang = true, hens = [], giuId = null, giu = null, loaiTro = '', boQuaDen = 0;
      var st, khung, luoi, nutCo, oO = [], phu = null;

      function hen(fn, ms) { hens.push(setTimeout(fn, ms)); }
      function huyGiu() { if (giuId) clearTimeout(giuId); giuId = null; giu = null; }

      function moi() {
        hens.forEach(clearTimeout); hens = [];
        huyGiu();
        st = {
          min: null, ke: [], mo: [], co: [], no: [],
          tim: TIM, diem: 0, dung: 0, tong: 0, sai: [], daSai: {},
          coCo: false, hoi: false, xong: false, lo: false
        };
        for (var i = 0; i < TONG; i++) { st.mo.push(false); st.co.push(false); st.no.push(false); }
        sk.diem(0);
        sk.tim(TIM, TIM);
        veSan();
      }

      /* ---- ban do ---- */
      function keBen(i) {
        var r = Math.floor(i / CO), c = i % CO, ds = [];
        for (var dr = -1; dr <= 1; dr++) {
          for (var dc = -1; dc <= 1; dc++) {
            if (!dr && !dc) continue;
            var rr = r + dr, cc = c + dc;
            if (rr >= 0 && rr < CO && cc >= 0 && cc < CO) ds.push(rr * CO + cc);
          }
        }
        return ds;
      }
      // Dat min tranh o vua cham VA cac o ke ben (o dau tien luon mo ra
      // mot vung trong nhu do min that), roi dem so min ke ben cho tung o
      function datMin(tranh) {
        var cho = [], tranhDs = [tranh].concat(keBen(tranh));
        for (var i = 0; i < TONG; i++) if (tranhDs.indexOf(i) < 0) cho.push(i);
        var chon = T.tron(cho).slice(0, SO_MIN);
        st.min = [];
        for (i = 0; i < TONG; i++) st.min.push(chon.indexOf(i) >= 0);
        for (i = 0; i < TONG; i++) {
          st.ke[i] = keBen(i).filter(function (j) { return st.min[j]; }).length;
        }
      }
      function soMoAnToan() {
        var n = 0;
        for (var i = 0; i < TONG; i++) if (st.mo[i] && !st.no[i]) n++;
        return n;
      }

      /* ---- ve ---- */
      function veSan() {
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        oO = [];
        phu = null;
        khung = T.tao('div', 'tn-dm-khung');
        luoi = T.tao('div', 'tn-dm-luoi');
        luoi.setAttribute('aria-label', 'Bãi mìn 5 × 5');
        for (var i = 0; i < TONG; i++) {
          var b = T.tao('button', 'tn-dm-o');
          b.type = 'button';
          b.setAttribute('data-i', i);
          oO.push(b);
          luoi.appendChild(b);
          veO(i);
        }
        luoi.addEventListener('click', onClick);
        luoi.addEventListener('contextmenu', onMenu);
        luoi.addEventListener('pointerdown', onXuong);
        luoi.addEventListener('pointermove', onDi);
        luoi.addEventListener('pointerup', huyGiu);
        luoi.addEventListener('pointercancel', huyGiu);
        luoi.addEventListener('pointerleave', huyGiu);
        luoi.addEventListener('keydown', onPhim);
        khung.appendChild(luoi);
        sk.san.appendChild(khung);
        sk.san.appendChild(T.tao('p', 'tn-dm-meo', T.anh('mine-flag') + ' Cắm cờ: giữ lâu · chuột phải · phím <b>F</b>'));
        nutCo = T.tao('button', 'tn-nut tn-dm-nutco', T.anh('mine-flag') + ' Cắm cờ');
        nutCo.type = 'button';
        nutCo.addEventListener('click', function () {
          if (st.xong) return;
          st.coCo = !st.coCo;
          T.keu(st.coCo ? 560 : 420, 0.07);
          capNhat();
        });
        sk.duoi.appendChild(nutCo);
        capNhat();
        setTimeout(function () { try { if (dang && oO[12]) oO[12].focus(); } catch (e) { /* */ } }, 50);
      }
      function veO(i, tre) {
        var b = oO[i];
        if (!b) return;
        var hang = Math.floor(i / CO) + 1, cot = i % CO + 1, ten = 'Ô hàng ' + hang + ' cột ' + cot;
        var cls = 'tn-dm-o', chu = '', nhan = ten;
        if (st.mo[i] && st.no[i]) {
          cls += ' is-no'; chu = T.anh('mine-boom', 'tn-dm-hinh'); nhan += ': mìn nổ';
        } else if (st.mo[i]) {
          var k = st.ke[i];
          cls += ' is-mo' + (k ? ' n' + k : '');
          chu = k ? String(k) : '';
          nhan += k ? ': ' + k + ' mìn xung quanh' : ': trống';
        } else if (st.lo && st.min && st.min[i]) {
          cls += ' is-lo'; chu = T.anh(st.co[i] ? 'mine-flag' : 'mine-bomb', 'tn-dm-hinh'); nhan += ': có mìn';
        } else if (st.lo && st.co[i]) {
          cls += ' is-cosai'; chu = T.anh('mine-flag-wrong', 'tn-dm-hinh'); nhan += ': cắm cờ nhầm';
        } else if (st.co[i]) {
          cls += ' is-co'; chu = T.anh('mine-flag', 'tn-dm-hinh'); nhan += ': đã cắm cờ';
        } else {
          nhan += ': chưa mở';
        }
        b.className = cls;
        b.innerHTML = chu ? '<span aria-hidden="true">' + chu + '</span>' : '';
        b.setAttribute('aria-label', nhan);
        if (st.mo[i] || st.xong) b.setAttribute('aria-disabled', 'true'); else b.removeAttribute('aria-disabled');
        if (tre && !T.itChuyenDong) b.style.animationDelay = (tre * 0.06) + 's';
      }
      function capNhat() {
        var co = 0, no = 0;
        for (var i = 0; i < TONG; i++) { if (st.co[i] && !st.mo[i]) co++; if (st.no[i]) no++; }
        var con = SO_MIN - co - no;
        sk.deBai('<span class="tn-dm-dem" title="Số mìn chưa đánh dấu">' + T.anh('mine-bomb') + ' ' + con + '</span>' +
          '<span class="tn-dm-goi">' + (st.xong ? '' : st.coCo ? 'Chạm ô để cắm / gỡ cờ' : 'Chạm một ô để mở') + '</span>');
        sk.tim(st.tim, TIM);
        if (nutCo) {
          nutCo.classList.toggle('is-bat', st.coCo);
          nutCo.setAttribute('aria-pressed', st.coCo ? 'true' : 'false');
          nutCo.disabled = st.xong;
        }
      }

      /* ---- tuong tac voi o ---- */
      function oTu(e) {
        var b = e.target && e.target.closest ? e.target.closest('.tn-dm-o') : null;
        return b && luoi.contains(b) ? parseInt(b.getAttribute('data-i'), 10) : -1;
      }
      function onClick(e) {
        var i = oTu(e);
        if (i < 0) return;
        if (Date.now() < boQuaDen) return;   // vua cam co bang giu lau
        chamO(i);
      }
      function onMenu(e) {
        var i = oTu(e);
        if (i < 0) return;
        e.preventDefault();
        // Cam ung da co giu lau rieng; chi chuot / phim menu moi cam co o day
        if (loaiTro === 'touch' || loaiTro === 'pen') return;
        doiCo(i);
      }
      function onXuong(e) {
        loaiTro = e.pointerType || '';
        var i = oTu(e);
        huyGiu();
        if (i < 0 || loaiTro === 'mouse') return;
        giu = { i: i, x: e.clientX, y: e.clientY };
        giuId = setTimeout(function () {
          var g = giu;
          giuId = null; giu = null;
          if (!g || !dang) return;
          if (doiCo(g.i)) { boQuaDen = Date.now() + 600; T.rung(30); }
        }, 450);
      }
      function onDi(e) {
        if (!giu) return;
        var dx = e.clientX - giu.x, dy = e.clientY - giu.y;
        if (dx * dx + dy * dy > 100) huyGiu();
      }
      function onPhim(e) {
        loaiTro = '';
        var i = oTu(e);
        if (i < 0) return;
        var k = e.key, toi = -1;
        if (k === 'ArrowLeft' && i % CO > 0) toi = i - 1;
        else if (k === 'ArrowRight' && i % CO < CO - 1) toi = i + 1;
        else if (k === 'ArrowUp' && i >= CO) toi = i - CO;
        else if (k === 'ArrowDown' && i < TONG - CO) toi = i + CO;
        else if (k === 'f' || k === 'F') { e.preventDefault(); doiCo(i); return; }
        else return;
        e.preventDefault();
        oO[toi].focus();
      }
      function doiCo(i) {
        if (!dang || st.xong || st.hoi || st.mo[i]) return false;
        st.co[i] = !st.co[i];
        T.keu(st.co[i] ? 620 : 380, 0.07);
        veO(i);
        capNhat();
        return true;
      }
      function chamO(i) {
        if (!dang || st.xong || st.hoi || st.mo[i]) return;
        if (st.coCo) { doiCo(i); return; }
        if (st.co[i]) { T.keu(300, 0.08); sk.bay('Ô đã cắm cờ 🚩', 'vang'); return; }
        if (!st.min) datMin(i);
        hoi(i);
      }

      /* ---- cau hoi tren lop phu ---- */
      function hoi(i) {
        st.hoi = true;
        st.tong++;
        var q = lay();
        oO[i].classList.add('is-chon');
        phu = T.tao('div', 'tn-dm-phu');
        var hopHoi = T.tao('div', 'tn-dm-hop');
        hopHoi.setAttribute('role', 'dialog');
        hopHoi.setAttribute('aria-label', 'Trả lời để mở ô');
        hopHoi.appendChild(T.tao('div', 'tn-dm-hop-tit', 'Trả lời đúng để mở ô hàng ' + (Math.floor(i / CO) + 1) + ', cột ' + (i % CO + 1)));
        hopHoi.appendChild(T.tao('div', 'tn-dm-hop-de', q.hoi));
        var huy = T.tao('button', 'tn-nut tn-dm-huy', '↩ Chọn ô khác');
        huy.type = 'button';
        T.oDapAn(hopHoi, q, function (dung) {
          huy.disabled = true;
          hen(function () {
            if (!dang) return;
            dongPhu(i);
            traLoi(i, q, dung);
          }, dung ? 650 : 1400);
        }, { nho: true });
        huy.addEventListener('click', function () { st.tong--; dongPhu(i); });
        hopHoi.addEventListener('keydown', function (e) {
          if ((e.key === 'Escape' || e.key === 'Esc') && !huy.disabled) { e.preventDefault(); st.tong--; dongPhu(i); }
        });
        hopHoi.appendChild(huy);
        phu.appendChild(hopHoi);
        khung.appendChild(phu);
        setTimeout(function () {
          try { var nut = hopHoi.querySelector('.tn-o'); if (nut) nut.focus(); } catch (e) { /* */ }
        }, 30);
      }
      function dongPhu(i) {
        if (phu && phu.parentNode) phu.parentNode.removeChild(phu);
        phu = null;
        st.hoi = false;
        if (oO[i]) {
          oO[i].classList.remove('is-chon');
          try { oO[i].focus(); } catch (e) { /* */ }
        }
      }
      function traLoi(i, q, dung) {
        if (dung) {
          st.dung++;
          if (st.min[i]) {
            st.mo[i] = true; st.no[i] = true;
            st.tim--;
            veO(i);
            T.keu(110, 0.45, 'sawtooth');
            T.rung([80, 40, 160]);
            sk.bay('💥 Trúng mìn! −1 ❤️', 'sai');
          } else {
            moRong(i);
          }
        } else {
          st.tim--;
          if (!st.daSai[q.tu.zh]) { st.daSai[q.tu.zh] = 1; st.sai.push(q.tu); }
          sk.bay('Sai rồi! −1 ❤️', 'sai');
        }
        capNhat();
        if (st.tim <= 0) thua();
        else if (soMoAnToan() >= TONG - SO_MIN) thang();
      }
      // Mo o i; o so 0 thi mo loang cac o xung quanh (khong hoi them)
      function moRong(i) {
        var hang = [[i, 0]], dem = 0;
        while (hang.length) {
          var x = hang.shift(), j = x[0];
          if (st.mo[j] || st.co[j] || st.min[j]) continue;
          st.mo[j] = true;
          dem++;
          veO(j, x[1]);
          if (st.ke[j] === 0) {
            keBen(j).forEach(function (k) { if (!st.mo[k]) hang.push([k, x[1] + 1]); });
          }
        }
        if (!dem) return;
        st.diem += dem * 10;
        sk.diem(st.diem);
        sk.bay('+' + dem * 10 + (dem > 1 ? ' · mở ' + dem + ' ô' : ''));
      }

      /* ---- ket thuc ---- */
      function thua() {
        st.xong = true; st.lo = true; st.coCo = false;
        for (var i = 0; i < TONG; i++) veO(i);
        capNhat();
        sk.deBai('<span class="tn-dm-goi">' + T.anh('mine-boom') + ' Hết tim rồi — mìn nằm ở đây!</span>');
        hen(function () {
          T.ketQua(sk, 'domin', {
            diem: st.diem, dung: st.dung, tong: st.tong, thang: false,
            loi: 'Bùm! Hết tim rồi', saiDs: st.sai
          }, moi);
        }, 2000);
      }
      function thang() {
        st.xong = true; st.coCo = false;
        for (var i = 0; i < TONG; i++) { if (st.min[i] && !st.mo[i]) st.co[i] = true; veO(i); }
        var thuong = st.tim * 50;
        st.diem += thuong;
        sk.diem(st.diem);
        capNhat();
        sk.deBai('<span class="tn-dm-goi">🎉 Đã dò hết bãi mìn!</span>');
        hen(function () { if (dang) sk.bay('+' + thuong + ' thưởng ❤️', 'vang'); }, 500);
        hen(function () {
          T.ketQua(sk, 'domin', {
            diem: st.diem, dung: st.dung, tong: st.tong, thang: true,
            loi: 'Phá hết bãi mìn!', saiDs: st.sai
          }, moi);
        }, 1700);
      }

      T.manMoi(sk, {
        ic: T.anh('mine-bomb', 'tn-moi-hinh'), ten: 'Dò mìn',
        luat: 'Bãi mìn 5×5 giấu <b>5 quả mìn</b>. Chạm một ô rồi trả lời đúng để mở ô — số trên ô là số mìn ở 8 ô xung quanh. ' +
          'Trả lời sai hoặc mở trúng mìn mất 1 ' + T.anh('ui-heart') + '. Giữ lâu / chuột phải / nút ' + T.anh('mine-flag') + ' để cắm cờ chỗ nghi có mìn. Mở hết ô an toàn là thắng!'
      }, moi);
      return {
        dung: function () {
          dang = false;
          hens.forEach(clearTimeout); hens = [];
          huyGiu();
        }
      };
    }
  });

  /* ══════════════ KEO THA ══════════════
     Moi vong 5 the chu Han (+pinyin) va 5 o nghia tieng Viet, tron thu tu.
     Keo the vao dung nghia (Pointer Events: chuot + cam ung), hoac cham the
     roi cham o (ban phim cung duoc). Dung: the nam vao o, doc tu, cong diem.
     Sai: the bat ve, tru 5 giay. 4 vong, tong 90 giay, con giay duoc thuong. */
  T.dangKy({
    key: 'keotha',
    ten: 'Kéo thả',
    emoji: '🔗',
    chu: '连',
    nen: 'linear-gradient(160deg,#5ab0ff 0%,#3f51b5 100%)',
    moTa: 'Kéo từng chữ Hán thả vào đúng nghĩa tiếng Việt (hoặc chạm chữ rồi chạm nghĩa) — 4 vòng trong 90 giây, ghép sai bị trừ giờ.',
    canToiThieu: 5,
    mo: function (hop, o) {
      var SO_TU = 5, SO_VONG = 4, GIAY = 90, PHAT = 5;
      var sk = T.khung(hop, this, { gio: true });
      var dang = true, hens = [], dh = null, keo = null, boQuaDen = 0;
      var st, ban, khuChu, khuNghia, tuVong = [];

      function hen(fn, ms) { hens.push(setTimeout(fn, ms)); }

      // Chia tu thanh cac vong 5 tu, trong mot vong khong trung nghia
      function chiaVong() {
        var thay = {}, kho = T.tron(o.vocab).filter(function (v) {
          if (thay[v.zh]) return false;
          thay[v.zh] = 1;
          return true;
        });
        var ds = [];
        while (ds.length < SO_VONG) {
          var vong = [], nghia = {}, con = [];
          kho.forEach(function (v) {
            var k = String(v.vn).toLowerCase();
            if (vong.length < SO_TU && !nghia[k]) { vong.push(v); nghia[k] = 1; } else con.push(v);
          });
          if (vong.length < SO_TU && (ds.length || vong.length < 2)) break;
          ds.push(vong);
          kho = con;
          if (vong.length < SO_TU) break;
        }
        if (!ds.length) ds.push(T.tron(o.vocab).slice(0, SO_TU));
        return ds;
      }

      function moi() {
        hens.forEach(clearTimeout); hens = [];
        keo = null;
        var vongs = chiaVong(), tong = 0;
        vongs.forEach(function (v) { tong += v.length; });
        st = { vongs: vongs, v: 0, diem: 0, dung: 0, tong: tong, chuoi: 0, dai: 0, sai: [], daSai: {}, chon: null, khoa: false };
        sk.diem(0);
        veVong();
        if (dh) dh.dung();
        dh = T.demNguoc(GIAY, sk.gio, hetGio);
      }

      /* ---- ve mot vong ---- */
      function veVong() {
        st.chon = null;
        st.khoa = false;
        tuVong = st.vongs[st.v];
        sk.deBai('<span class="tn-kt-so">Vòng ' + (st.v + 1) + '/' + st.vongs.length + '</span>' +
          '<span class="tn-kt-goi">Kéo chữ Hán vào đúng nghĩa</span>');
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        ban = T.tao('div', 'tn-kt-ban');
        khuChu = T.tao('div', 'tn-kt-chu');
        khuChu.setAttribute('aria-label', 'Các chữ Hán');
        khuNghia = T.tao('div', 'tn-kt-nghia');
        khuNghia.setAttribute('aria-label', 'Các nghĩa tiếng Việt');
        var so = tuVong.map(function (v, k) { return k; });
        T.tron(so).forEach(function (k) {
          var v = tuVong[k];
          var b = T.tao('button', 'tn-kt-the',
            '<span class="tn-kt-zh">' + T.esc(v.zh) + '</span>' + (v.py ? '<span class="tn-kt-py">' + T.esc(v.py) + '</span>' : ''));
          b.type = 'button';
          b.setAttribute('data-k', k);
          b.setAttribute('aria-pressed', 'false');
          b.setAttribute('aria-label', v.zh + (v.py ? ' (' + v.py + ')' : '') + ' — chọn rồi chọn nghĩa');
          khuChu.appendChild(b);
        });
        T.tron(so).forEach(function (k) {
          var v = tuVong[k];
          var b = T.tao('button', 'tn-kt-o',
            '<span class="tn-kt-vn">' + (v.em ? '<span class="tn-kt-em" aria-hidden="true">' + T.esc(v.em) + '</span> ' : '') + T.esc(v.vn) + '</span>' +
            '<span class="tn-kt-dich"></span>');
          b.type = 'button';
          b.setAttribute('data-k', k);
          b.setAttribute('aria-label', 'Nghĩa: ' + v.vn);
          khuNghia.appendChild(b);
        });
        ban.appendChild(khuChu);
        ban.appendChild(khuNghia);
        ban.addEventListener('pointerdown', onXuong);
        ban.addEventListener('pointermove', onDi);
        ban.addEventListener('pointerup', onLen);
        ban.addEventListener('pointercancel', onHuy);
        ban.addEventListener('lostpointercapture', onHuy);
        ban.addEventListener('click', onClick);
        ban.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' || e.key === 'Esc') boChon();
        });
        sk.san.appendChild(ban);
        setTimeout(function () {
          try { var c = khuChu.querySelector('.tn-kt-the'); if (dang && c) c.focus(); } catch (e) { /* */ }
        }, 50);
      }

      /* ---- chon bang cham / ban phim ---- */
      function chon(the) {
        boChon();
        st.chon = the;
        the.classList.add('is-chon');
        the.setAttribute('aria-pressed', 'true');
        khuNghia.classList.add('dang-chon');
        T.keu(520, 0.05);
      }
      function boChon() {
        if (!st || !st.chon) return;
        st.chon.classList.remove('is-chon');
        st.chon.setAttribute('aria-pressed', 'false');
        st.chon = null;
        if (khuNghia) khuNghia.classList.remove('dang-chon');
      }
      function onClick(e) {
        if (!dang || st.khoa || Date.now() < boQuaDen) return;
        var t = e.target && e.target.closest ? e.target : null;
        if (!t) return;
        var the = t.closest('.tn-kt-the'), oN = t.closest('.tn-kt-o');
        if (the && ban.contains(the)) {
          if (st.chon === the) boChon(); else chon(the);
        } else if (oN && ban.contains(oN)) {
          if (oN.classList.contains('is-dung')) return;
          if (!st.chon) {
            T.keu(300, 0.08);
            khuChu.classList.remove('nhac'); void khuChu.offsetWidth; khuChu.classList.add('nhac');
            sk.bay('Chọn chữ Hán trước nhé', 'vang');
            return;
          }
          ghep(st.chon, oN, true);
        }
      }

      /* ---- keo bang Pointer Events ---- */
      function oDuoi(x, y) {
        var ds = document.elementsFromPoint ? document.elementsFromPoint(x, y) : [document.elementFromPoint(x, y)];
        for (var i = 0; i < ds.length; i++) {
          var el = ds[i];
          if (!el || !el.closest) continue;
          var s = el.closest('.tn-kt-o');
          if (s && ban.contains(s)) return s;
        }
        return null;
      }
      function onXuong(e) {
        if (!dang || st.khoa || keo) return;
        var the = e.target && e.target.closest ? e.target.closest('.tn-kt-the') : null;
        if (!the || !ban.contains(the)) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        keo = { el: the, id: e.pointerId, x0: e.clientX, y0: e.clientY, dang: false, tren: null };
        try { the.setPointerCapture(e.pointerId); } catch (er) { /* */ }
      }
      function onDi(e) {
        if (!keo || e.pointerId !== keo.id) return;
        var dx = e.clientX - keo.x0, dy = e.clientY - keo.y0;
        if (!keo.dang) {
          if (dx * dx + dy * dy < 64) return;   // chua du xa: van coi la cham
          keo.dang = true;
          keo.el.classList.add('is-keo');
          boChon();
        }
        e.preventDefault();
        keo.el.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
        var s = oDuoi(e.clientX, e.clientY);
        if (s && s.classList.contains('is-dung')) s = null;
        if (s !== keo.tren) {
          if (keo.tren) keo.tren.classList.remove('is-tren');
          keo.tren = s;
          if (s) s.classList.add('is-tren');
        }
      }
      function thaKeo() {
        var k = keo;
        keo = null;
        if (k.tren) k.tren.classList.remove('is-tren');
        k.el.classList.remove('is-keo');
        try { if (k.el.hasPointerCapture && k.el.hasPointerCapture(k.id)) k.el.releasePointerCapture(k.id); } catch (er) { /* */ }
        return k;
      }
      function onLen(e) {
        if (!keo || e.pointerId !== keo.id) return;
        var k = thaKeo();
        if (!k.dang) return;              // la cham -> de click xu ly
        boQuaDen = Date.now() + 400;      // nuot click di kem sau khi keo
        var s = oDuoi(e.clientX, e.clientY);
        if (s && !s.classList.contains('is-dung') && !st.khoa) ghep(k.el, s, false);
        else veVe(k.el);
      }
      function onHuy(e) {
        if (!keo || e.pointerId !== keo.id) return;
        var k = thaKeo();
        if (k.dang) { boQuaDen = Date.now() + 400; veVe(k.el); }
      }
      function veVe(the) {
        the.style.transition = T.itChuyenDong ? 'none' : 'transform .28s cubic-bezier(.3,1.4,.5,1)';
        the.style.transform = '';
        hen(function () { the.style.transition = ''; }, 320);
      }

      /* ---- ghep the vao o ---- */
      function ghep(the, oN, tuCham) {
        var a = parseInt(the.getAttribute('data-k'), 10), b = parseInt(oN.getAttribute('data-k'), 10);
        var v = tuVong[a];
        boChon();
        if (a === b) {
          the.parentNode.removeChild(the);
          oN.classList.add('is-dung');
          oN.setAttribute('aria-disabled', 'true');
          oN.setAttribute('aria-label', 'Nghĩa: ' + v.vn + ' — đã ghép ' + v.zh);
          oN.querySelector('.tn-kt-dich').innerHTML = T.esc(v.zh) + (v.py ? '<small>' + T.esc(v.py) + '</small>' : '');
          T.keuDung();
          T.doc(v.zh);
          if (!st.daSai[v.zh]) st.dung++;
          st.chuoi++; st.dai = Math.max(st.dai, st.chuoi);
          var cong = 20 + Math.min(4, st.chuoi - 1) * 5;
          st.diem += cong;
          sk.diem(st.diem);
          sk.bay('+' + cong + (st.chuoi >= 3 ? ' 🔥' + st.chuoi : ''));
          var conThe = khuChu.querySelector('.tn-kt-the');
          if (!conThe) { hetVong(); return; }
          if (tuCham) { try { conThe.focus(); } catch (er) { /* */ } }
        } else {
          T.keuSai();
          T.rung(120);
          st.chuoi = 0;
          if (!st.daSai[v.zh]) { st.daSai[v.zh] = 1; st.sai.push(v); }
          var phat = dh ? Math.min(PHAT, dh.con() - 1) : 0;
          if (phat > 0) dh.them(-phat);
          sk.bay('Chưa đúng!' + (phat > 0 ? ' −' + phat + ' giây' : ''), 'sai');
          oN.classList.remove('is-loi'); void oN.offsetWidth; oN.classList.add('is-loi');
          the.classList.add('is-sai');
          hen(function () { oN.classList.remove('is-loi'); the.classList.remove('is-sai'); }, 650);
          veVe(the);
        }
      }

      function hetVong() {
        st.khoa = true;
        var con = dh ? dh.con() : 0;
        if (dh) dh.dung();
        dh = null;
        var cuoi = st.v + 1 >= st.vongs.length;
        if (!cuoi) sk.bay('Xong vòng ' + (st.v + 1) + '! 👏', 'vang');
        hen(function () {
          if (!dang) return;
          if (cuoi) { xong(con); return; }
          st.v++;
          veVong();
          dh = T.demNguoc(con, sk.gio, hetGio);
        }, 1000);
      }
      function xong(con) {
        var thuong = con * 3;
        st.diem += thuong;
        sk.diem(st.diem);
        if (thuong) sk.bay('+' + thuong + ' thưởng ⏱️', 'vang');
        hen(function () {
          sk.gio('—');
          sk.deBai('');
          T.ketQua(sk, 'keotha', {
            diem: st.diem, dung: st.dung, tong: st.tong, chuoi: st.dai, thang: true,
            loi: st.dung === st.tong ? 'Ghép đúng hết ngay lần đầu!' : 'Ghép xong tất cả!', saiDs: st.sai
          }, moi);
        }, 1100);
      }
      function hetGio() {
        dh = null;
        st.khoa = true;
        if (keo) { var k = thaKeo(); veVe(k.el); }
        boChon();
        T.keuSai();
        sk.bay('Hết giờ!', 'sai');
        hen(function () {
          sk.gio('—');
          sk.deBai('');
          T.ketQua(sk, 'keotha', {
            diem: st.diem, dung: st.dung, tong: st.tong, chuoi: st.dai, thang: false,
            loi: 'Hết giờ rồi!', saiDs: st.sai
          }, moi);
        }, 1200);
      }

      T.manMoi(sk, {
        ic: T.anh('match-link', 'tn-moi-hinh'), ten: 'Kéo thả',
        luat: 'Kéo mỗi chữ Hán thả vào đúng <b>nghĩa tiếng Việt</b> — hoặc chạm chữ rồi chạm nghĩa. ' +
          'Có ' + Math.max(1, Math.min(SO_VONG, Math.floor(o.vocab.length / SO_TU))) + ' vòng, tổng <b>' + GIAY + ' giây</b>; ghép sai bị trừ ' + PHAT + ' giây, xong sớm được thưởng điểm.'
      }, moi);
      return {
        dung: function () {
          dang = false;
          hens.forEach(clearTimeout); hens = [];
          if (dh) dh.dung();
          dh = null;
          keo = null;
        }
      };
    }
  });
})();
