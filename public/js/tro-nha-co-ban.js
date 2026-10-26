/* Tro choi tu choi o nha — nhom co ban: Thu thach toc do, The lat.
   Dang ky vao khung chung tro-nha.js (window.TroNha). */
(function () {
  'use strict';
  var T = window.TroNha;
  if (!T) return;

  /* ══════════════ THU THACH TOC DO (Trac nghiem theo nhip do) ══════════════
     15 cau, moi cau 10 giay. Tra loi dung cang nhanh cang nhieu diem,
     dung lien tiep co thuong chuoi. Het gio mot cau = tinh la sai.   */
  T.dangKy({
    key: 'tocdo',
    ten: 'Thử thách tốc độ',
    emoji: '⏱️',
    chu: '快',
    nen: 'linear-gradient(160deg,#7c4dff 0%,#4527a0 100%)',
    moTa: '15 câu, mỗi câu 10 giây — trả lời càng nhanh càng nhiều điểm, đúng liên tiếp được thưởng chuỗi.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var SO_CAU = 15, GIAY = 10;
      var sk = T.khung(hop, this, { gio: true });
      var lay = T.boCau(o.vocab);
      var dang = true, hen = null, dh = null, st;

      function moi() {
        st = { i: 0, diem: 0, dung: 0, chuoi: 0, dai: 0, sai: [] };
        sk.diem(0);
        cau();
      }
      function cau() {
        if (!dang) return;
        if (st.i >= SO_CAU) { het(); return; }
        st.i++;
        var q = lay();
        var batDau = Date.now();
        sk.deBai('<span class="tn-td-so">Câu ' + st.i + '/' + SO_CAU + '</span>' + q.hoi);
        sk.san.innerHTML = '';
        var thanh = T.tao('div', 'tn-td-thanh', '<i></i>');
        sk.san.appendChild(thanh);
        var go = T.oDapAn(sk.san, q, function (dung) {
          if (dh) dh.dung();
          traLoi(q, dung, (Date.now() - batDau) / 1000);
        });
        // thanh thoi gian: cap nhat theo tung giay (khong dua vao CSS transition
        // vi may bat giam chuyen dong thi transition bi tat, thanh dung yen)
        var i = thanh.querySelector('i');
        if (dh) dh.dung();
        dh = T.demNguoc(GIAY, function (con) {
          sk.gio(con);
          i.style.width = Math.max(0, con / GIAY * 100) + '%';
        }, function () {
          go();
          T.keuSai();
          sk.bay('Hết giờ!', 'sai');
          traLoi(q, false, GIAY);
        });
      }
      function traLoi(q, dung, giay) {
        if (dung) {
          st.dung++; st.chuoi++; st.dai = Math.max(st.dai, st.chuoi);
          var cong = 50 + Math.round(50 * Math.max(0, 1 - giay / GIAY)) + Math.min(5, st.chuoi - 1) * 10;
          st.diem += cong;
          sk.diem(st.diem);
          sk.bay('+' + cong + (st.chuoi >= 3 ? ' 🔥' + st.chuoi : ''));
        } else {
          st.chuoi = 0;
          st.sai.push(q.tu);
        }
        hen = setTimeout(cau, dung ? 700 : 1500);
      }
      function het() {
        sk.gio('—');
        sk.deBai('');
        T.ketQua(sk, 'tocdo', { diem: st.diem, dung: st.dung, tong: SO_CAU, chuoi: st.dai, saiDs: st.sai }, moi);
      }
      T.manMoi(sk, { ic: '⏱️', ten: 'Thử thách tốc độ', luat: '15 câu hỏi, mỗi câu <b>10 giây</b>. Trả lời đúng càng nhanh càng nhiều điểm, đúng liên tiếp được thưởng thêm 🔥.' }, moi);
      return { dung: function () { dang = false; clearTimeout(hen); if (dh) dh.dung(); } };
    }
  });

  /* ══════════════ THE LAT ══════════════
     The mat truoc chu Han + pinyin, lat ra nghia + Han Viet + hinh.
     Em tu cham "Đã thuộc / Chưa thuộc"; the chua thuoc quay lai cuoi
     chong cho den khi thuoc het. Diem = so the thuoc ngay lan dau.   */
  T.dangKy({
    key: 'thelat',
    ten: 'Thẻ lật',
    emoji: '🃏',
    chu: '卡',
    nen: 'linear-gradient(160deg,#ffb86b 0%,#e0702a 100%)',
    moTa: 'Lật thẻ xem nghĩa, tự chấm “Đã thuộc” hay “Chưa thuộc” — thẻ chưa thuộc sẽ quay lại cho đến khi thuộc hết.',
    canToiThieu: 1,
    mo: function (hop, o) {
      var sk = T.khung(hop, this, {});
      var st;

      function moi() {
        st = { chong: T.tron(o.vocab).slice(0, 20), tong: 0, ngay: 0, lan: {}, sai: [] };
        st.tong = st.chong.length;
        sk.diem(0);
        ve();
      }
      function ve() {
        var v = st.chong[0];
        if (!v) { het(); return; }
        var thuoc = st.tong - st.chong.length;
        sk.deBai('<span class="tn-tl-dem">Đã thuộc ' + thuoc + '/' + st.tong + '</span>');
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        var the = T.tao('button', 'tn-tl-the');
        the.type = 'button';
        the.setAttribute('aria-label', 'Lật thẻ');
        the.innerHTML =
          '<span class="tn-tl-mat tn-tl-truoc"><span class="tn-tl-zh">' + T.esc(v.zh) + '</span>' +
            (v.py ? '<span class="tn-tl-py">' + T.esc(v.py) + '</span>' : '') + '<span class="tn-tl-goi">Chạm để lật</span></span>' +
          '<span class="tn-tl-mat tn-tl-sau">' + (v.em ? '<span class="tn-tl-em">' + T.esc(v.em) + '</span>' : '') +
            '<span class="tn-tl-vn">' + T.esc(v.vn) + '</span>' +
            (v.hv ? '<span class="tn-tl-hv">Hán Việt: ' + T.esc(v.hv) + '</span>' : '') +
            '<span class="tn-tl-zh2">' + T.esc(v.zh) + ' · ' + T.esc(v.py || '') + '</span></span>';
        the.addEventListener('click', function () {
          the.classList.toggle('lat');
          if (the.classList.contains('lat')) T.doc(v.zh);
        });
        var nghe = T.tao('button', 'tn-nut tn-tl-nghe', '🔊 Nghe');
        nghe.type = 'button';
        nghe.addEventListener('click', function () { T.doc(v.zh); });
        sk.san.appendChild(the);
        sk.san.appendChild(nghe);
        var chua = T.tao('button', 'tn-nut', '✗ Chưa thuộc');
        var roi = T.tao('button', 'tn-nut tn-nut-chinh', '✓ Đã thuộc');
        chua.type = roi.type = 'button';
        chua.addEventListener('click', function () {
          st.lan[v.zh] = (st.lan[v.zh] || 0) + 1;
          if (st.lan[v.zh] === 1) st.sai.push(v);
          st.chong.push(st.chong.shift());
          ve();
        });
        roi.addEventListener('click', function () {
          if (!st.lan[v.zh]) { st.ngay++; sk.diem(st.ngay * 10); }
          T.keuDung(true); // tu cham nen khong cong sao
          st.chong.shift();
          ve();
        });
        sk.duoi.appendChild(chua);
        sk.duoi.appendChild(roi);
      }
      function het() {
        sk.deBai('');
        T.ketQua(sk, 'thelat', {
          diem: st.ngay * 10, dung: st.ngay, tong: st.tong,
          loi: st.ngay === st.tong ? 'Thuộc hết ngay lần đầu!' : 'Đã thuộc hết ' + st.tong + ' thẻ!',
          saiDs: st.sai
        }, moi);
      }
      moi();
      return { dung: function () { } };
    }
  });
})();
