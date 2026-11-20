/* ══════════════════════════════════════════════════════════════════
   CHAY DUA CHU HAN 汉字跑酷 (2026-11-20, co giao: "lam game chay 3 lan nhu video tren web tu hoc")
   ------------------------------------------------------------------
   Gia 3D ve bang canvas 2D (khong can thu vien): duong 3 lan chay vao chan troi, nui xa kieu tranh thuy mac,
   den long + truc ben duong. Nhan vat "be Han" (toc hai bui, khan do) tu chay. Moi luot 3 tam bien dap an tien lai:
   vuot / bam trai-phai / phim ←→ (A D) de vao lan co dap an dung truoc khi toi bien.
     - De: nghia tieng Viet -> chon chu Han; chu Han + pinyin -> chon nghia; nghe doc -> chon chu Han (xen ke)
     - Dung: +10 (+ chuoi), dong xu bay; sai: mat 1 tim, bien dung sang xanh, nghe lai tu do
     - Xu vang 铜钱 giua cac bien: +1 diem (cho vui, khong tinh vao cau hoi)
     - Toc do tang dan; giam chuyen dong -> cham hon 30% (van choi binh thuong)
   3 tim. Het tim hoac qua DICH cau -> man ket qua chung (TroNha.ketQua).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var T = window.TroNha;
  if (!T) return;

  var DICH = 25, TIM = 3;
  var Z0 = 9, ZXA = 70;            // phep chieu: p = Z0 / (Z0 + z); bien xuat hien o z = ZXA
  var MAU_BIEN = ['#ffe9a8', '#ffd2c4', '#cfe8ff'];

  T.dangKy({
    key: 'chaydua',
    ten: 'Chạy đua chữ Hán',
    emoji: '🏃',
    chu: '跑',
    nen: 'linear-gradient(160deg,#8fd3ff 0%,#4f8cff 55%,#2f5fd0 100%)',
    moTa: 'Chạy trên đường 3 làn — vuốt hoặc bấm trái/phải để lao vào tấm biển có đáp án đúng trước khi tới nơi!',
    canToiThieu: 3,
    mo: function (hop, o) {
      var sk = T.khung(hop, this, { tim: TIM });
      var cham = T.itChuyenDong ? 1.3 : 1;
      var layCau = T.boCau(o.vocab);
      var cv = null, ctx = null, W = 360, H = 480, dpr = 1, raf = 0, truoc = 0, choi = false, tamDung = false;
      var st = null;

      /* ---------------- dung san ---------------- */
      function dungSan() {
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        cv = T.tao('canvas', 'tn-cd-cv');
        cv.setAttribute('aria-label', 'Đường chạy 3 làn. Dùng phím mũi tên trái phải hoặc vuốt để đổi làn.');
        cv.setAttribute('role', 'img');
        sk.san.appendChild(cv);
        ctx = cv.getContext('2d');
        var nut = T.tao('div', 'tn-cd-nut',
          '<button type="button" data-cd="-1" aria-label="Sang làn trái">◀</button>' +
          '<span class="tn-cd-goi">Vuốt / bấm ◀ ▶ hoặc phím ← → để đổi làn</span>' +
          '<button type="button" data-cd="1" aria-label="Sang làn phải">▶</button>');
        sk.duoi.appendChild(nut);
        nut.addEventListener('click', function (e) {
          var b = e.target.closest('[data-cd]');
          if (b) doiLan(+b.getAttribute('data-cd'));
        });
        // vuot / cham trai-phai tren san
        var x0 = null, y0 = 0, t0 = 0;
        cv.addEventListener('pointerdown', function (e) { x0 = e.clientX; y0 = e.clientY; t0 = Date.now(); });
        cv.addEventListener('pointerup', function (e) {
          if (x0 == null) return;
          var dx = e.clientX - x0, dy = e.clientY - y0;
          x0 = null;
          if (Math.abs(dx) > 28 && Math.abs(dx) > Math.abs(dy)) { doiLan(dx > 0 ? 1 : -1); return; }
          if (Date.now() - t0 < 400) {
            var r = cv.getBoundingClientRect(), x = (e.clientX - r.left) / r.width;
            if (x < 0.4) doiLan(-1); else if (x > 0.6) doiLan(1);
          }
        });
        doKich();
      }
      function doKich() {
        if (!cv) return;
        var r = sk.san.getBoundingClientRect();
        W = Math.max(280, r.width || 360);
        H = Math.max(340, Math.min(W * 1.25, (window.innerHeight || 700) * 0.64));
        dpr = Math.min(2, window.devicePixelRatio || 1);
        cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
        cv.style.width = W + 'px'; cv.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      function phim(e) {
        if (!choi) return;
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') { e.preventDefault(); doiLan(-1); }
        else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') { e.preventDefault(); doiLan(1); }
      }
      function anTab() {
        tamDung = document.hidden;
        if (!tamDung) truoc = 0;
      }

      /* ---------------- trang thai ---------------- */
      function moi() {
        return {
          lan: 1, x: 1,               // lan muc tieu (0..2) va vi tri ve (noi suy)
          cuon: 0, tg: 0, buoc: 0,
          diem: 0, dung: 0, tong: 0, chuoi: 0, chuoiMax: 0, tim: TIM, saiDs: [],
          bien: null, xu: [], canh: [], hat: [], rung: 0, vap: 0, xong: false, dem: 0,
          may: [0, 1, 2, 3].map(function (i) { return { x: Math.random(), y: 0.05 + Math.random() * 0.16, s: 0.6 + Math.random() * 0.7, v: 0.004 + Math.random() * 0.006 }; })
        };
      }
      // toc do (don vi z / giay): bien di tu ZXA toi 0 trong ~4,6s luc dau, ~2,7s khi da dung nhieu
      function tocDo() {
        var t = Math.max(2.7, 4.6 - st.dung * 0.09) * cham;
        return ZXA / t;
      }
      function kieuCau(n) {
        // xen ke: nghia -> chu, chu -> nghia, nghe -> chu
        var k = n % 4;
        return k === 3 ? 'nghe' : k === 1 ? 'zh' : 'vn';
      }
      function bienMoi() {
        var kieu = kieuCau(st.tong);
        var q = layCau(kieu === 'zh' ? 'zh' : 'vn', 3);
        q.nghe = kieu === 'nghe';
        st.bien = { q: q, z: ZXA, kq: null, sang: -1 };
        if (q.nghe) {
          sk.deBai('<span class="tn-cd-de"><button type="button" class="tn-cd-loa" data-cd-nghe aria-label="Nghe lại">🔊</button> Nghe và chạy vào chữ Hán đúng</span>');
          T.doc(q.tu.zh);
        } else if (q.kieu === 'zh') {
          sk.deBai('<span class="tn-cd-de">' + q.hoi + '<small>chạy vào nghĩa đúng</small></span>');
        } else {
          sk.deBai('<span class="tn-cd-de">' + q.hoi + '<small>chạy vào chữ Hán đúng</small></span>');
        }
        // hang 3 o dap an (trai · giua · phai) ngay duoi de — doc kip ca khi bien con xa; bam o = chay sang lan do
        var de = sk.goc.querySelector('.tn-de');
        var hang = T.tao('span', 'tn-cd-lua' + (q.laZh ? ' la-zh' : ''));
        q.lua.forEach(function (txt, i) {
          var b = T.tao('button', 'tn-cd-o' + (i === st.lan ? ' on' : ''), '<i aria-hidden="true">' + ['◀', '▲', '▶'][i] + '</i><b' + (q.laZh ? ' lang="zh"' : '') + '>' + T.esc(txt) + '</b>');
          b.type = 'button';
          b.setAttribute('data-l', i);
          b.setAttribute('aria-label', ['Làn trái', 'Làn giữa', 'Làn phải'][i] + ': ' + txt);
          b.addEventListener('click', function () { if (choi && !st.xong) { st.lan = i; T.keu(520 + i * 90, 0.05, 'triangle'); toO(); } });
          hang.appendChild(b);
        });
        if (de) de.appendChild(hang);
        var nl = sk.goc.querySelector('[data-cd-nghe]');
        if (nl) nl.addEventListener('click', function () { T.doc(q.tu.zh); });
        // xu vang giua cac bien: 1 hang 4 dong xu o 1 lan ngau nhien
        var lx = Math.floor(Math.random() * 3);
        for (var i = 0; i < 4; i++) st.xu.push({ lan: lx, z: ZXA + 14 + i * 4, an: false });
      }
      function doiLan(d) {
        if (!choi || st.xong) return;
        var l = Math.max(0, Math.min(2, st.lan + d));
        if (l !== st.lan) { st.lan = l; T.keu(520 + l * 90, 0.05, 'triangle'); toO(); }
      }
      // to sang o dap an cua lan dang dung; sau khi cham bien: o dung xanh, o sai do
      function toO() {
        Array.prototype.forEach.call(sk.goc.querySelectorAll('.tn-cd-o'), function (b) {
          var i = +b.getAttribute('data-l'), bi = st.bien;
          b.classList.toggle('on', i === st.lan);
          if (bi && bi.kq != null) { b.classList.toggle('dung', i === bi.q.dung); b.classList.toggle('sai', bi.kq === false && i === Math.round(st.x)); b.disabled = true; }
        });
      }

      /* ---------------- vong lap ---------------- */
      function vong(t) {
        raf = requestAnimationFrame(vong);
        if (tamDung) return;
        var dt = truoc ? Math.min(0.05, (t - truoc) / 1000) : 0;
        truoc = t;
        if (choi && !st.xong) capNhat(dt);
        ve(t / 1000);
      }
      function capNhat(dt) {
        var v = tocDo();
        st.tg += dt;
        st.cuon += v * dt;
        st.buoc += dt * (8 + v * 0.08);
        st.x += (st.lan - st.x) * Math.min(1, dt * 12);
        if (st.rung > 0) st.rung = Math.max(0, st.rung - dt);
        if (st.vap > 0) st.vap = Math.max(0, st.vap - dt);
        // bien
        if (!st.bien) { if ((st.dem -= dt) <= 0) bienMoi(); }
        else {
          st.bien.z -= v * dt;
          if (st.bien.kq == null && st.bien.z <= 1.2) cham_(st.bien);
          if (st.bien.z < -6) {
            st.bien = null;
            st.dem = 0.35;
            if (st.tim <= 0 || st.tong >= DICH) ketThuc();
          }
        }
        // xu
        st.xu.forEach(function (x) {
          x.z -= v * dt;
          if (!x.an && x.z <= 0.8 && x.z > -1 && Math.round(st.x) === x.lan) {
            x.an = true; st.diem += 1; sk.diem(st.diem); T.keu(1250, 0.05, 'sine');
            hatBung(W / 2 + (x.lan - 1) * W * 0.26, H * 0.8, '#ffd54f', 6);
          }
        });
        st.xu = st.xu.filter(function (x) { return x.z > -3 && !x.an; });
        // canh ben duong (den long / truc)
        st.canh.forEach(function (c) { c.z -= v * dt; });
        st.canh = st.canh.filter(function (c) { return c.z > -2; });
        var cuoi = st.canh.length ? st.canh[st.canh.length - 1].z : 0;
        while (cuoi < ZXA + 10) { cuoi += 7; st.canh.push({ z: cuoi, ben: st.canh.length % 2 ? 1 : -1, k: Math.random() < 0.5 ? 'den' : 'truc' }); }
        // may troi cham
        st.may.forEach(function (m) { m.x += m.v * dt; if (m.x > 1.3) m.x = -0.3; });
        // hat
        st.hat.forEach(function (h) { h.t += dt; h.x += h.vx * dt; h.y += h.vy * dt; h.vy += 420 * dt; });
        st.hat = st.hat.filter(function (h) { return h.t < h.song; });
      }
      function cham_(b) {
        var lan = Math.round(st.x), q = b.q;
        st.tong++;
        b.sang = q.dung;
        setTimeout(toO, 0);
        if (lan === q.dung) {
          b.kq = true;
          st.dung++; st.chuoi++; st.chuoiMax = Math.max(st.chuoiMax, st.chuoi);
          var cong = 10 + Math.min(10, (st.chuoi - 1) * 2);
          st.diem += cong;
          sk.diem(st.diem);
          sk.bay('+' + cong + (st.chuoi > 1 ? ' · chuỗi ' + st.chuoi : ''), 'dung');
          T.keuDung();
          hatBung(W / 2 + (lan - 1) * W * 0.26, H * 0.62, '#ffd54f', 16);
          hatBung(W / 2 + (lan - 1) * W * 0.26, H * 0.62, '#7ee08a', 8);
        } else {
          b.kq = false;
          st.chuoi = 0;
          st.tim--;
          sk.tim(st.tim, TIM);
          st.saiDs.push(q.tu);
          st.rung = 0.35; st.vap = 0.6;
          sk.bay('Đáp án: ' + q.tu.zh + ' · ' + q.tu.vn, 'sai');
          T.keuSai();
          T.rung(120);
        }
        // nghe lai tu vua hoc (tru cau nghe da doc)
        setTimeout(function () { if (choi) T.doc(q.tu.zh); }, q.nghe ? 0 : 150);
      }
      function hatBung(x, y, mau, n) {
        if (T.itChuyenDong) n = Math.ceil(n / 2);
        for (var i = 0; i < n; i++) {
          var g = Math.random() * Math.PI * 2, s = 80 + Math.random() * 180;
          st.hat.push({ x: x, y: y, vx: Math.cos(g) * s, vy: Math.sin(g) * s - 160, t: 0, song: 0.7 + Math.random() * 0.4, r: 2 + Math.random() * 3, mau: mau });
        }
      }

      /* ---------------- ve ---------------- */
      function chieu(z) { return Z0 / (Z0 + Math.max(-Z0 * 0.8, z)); }
      function ve(t) {
        if (!ctx) return;
        var hz = H * 0.34, rongDay = W * 0.44;   // nua be rong duong o day man hinh
        var rx = st && st.rung ? (Math.random() - 0.5) * 10 * st.rung : 0;
        ctx.save();
        ctx.translate(rx, 0);
        // troi
        var g = ctx.createLinearGradient(0, 0, 0, hz);
        g.addColorStop(0, '#5aa9ff'); g.addColorStop(0.7, '#a9dcff'); g.addColorStop(1, '#e8f6ff');
        ctx.fillStyle = g; ctx.fillRect(-20, 0, W + 40, hz + 2);
        // mat troi
        ctx.fillStyle = 'rgba(255,240,180,.9)';
        ctx.beginPath(); ctx.arc(W * 0.8, hz * 0.32, W * 0.06, 0, 6.29); ctx.fill();
        // may
        (st ? st.may : []).forEach(function (m) { may(m.x * W, m.y * H, 34 * m.s); });
        // nui xa (thuy mac)
        nui(hz, '#9fc3b8', 0.55, 0.0); nui(hz, '#7aa89a', 0.38, 1.7);
        // co hai ben
        var gc = ctx.createLinearGradient(0, hz, 0, H);
        gc.addColorStop(0, '#9bd77a'); gc.addColorStop(1, '#5fb24a');
        ctx.fillStyle = gc; ctx.fillRect(-20, hz, W + 40, H - hz);
        // duong
        var cx = W / 2;
        ctx.fillStyle = '#d9cfc0';
        ctx.beginPath();
        ctx.moveTo(cx - rongDay * chieu(-1.5) * 1.02, H); ctx.lineTo(cx - 2, hz); ctx.lineTo(cx + 2, hz); ctx.lineTo(cx + rongDay * chieu(-1.5) * 1.02, H);
        ctx.closePath(); ctx.fill();
        // ke gach ngang (cuon) + vach lan
        var cuon = st ? st.cuon : t * 10;
        for (var k = 0; k < 40; k++) {
          var z = k * 3 - (cuon % 3);
          if (z < -1.4) continue;
          var p = chieu(z), y = hz + (H - hz) * p, p2 = chieu(z + 1.5), y2 = hz + (H - hz) * p2;
          if (k % 2 === 0) {
            ctx.fillStyle = 'rgba(160,140,115,.18)';
            ctx.beginPath();
            ctx.moveTo(cx - rongDay * p, y); ctx.lineTo(cx + rongDay * p, y); ctx.lineTo(cx + rongDay * p2, y2); ctx.lineTo(cx - rongDay * p2, y2);
            ctx.closePath(); ctx.fill();
          }
          // vach lan dut
          if (k % 2 === 1) {
            ctx.fillStyle = 'rgba(255,255,255,.85)';
            [-1 / 3, 1 / 3].forEach(function (f) {
              var w1 = Math.max(1, 5 * p), w2 = Math.max(1, 5 * p2);
              ctx.beginPath();
              ctx.moveTo(cx + f * 2 * rongDay * p - w1, y); ctx.lineTo(cx + f * 2 * rongDay * p + w1, y);
              ctx.lineTo(cx + f * 2 * rongDay * p2 + w2, y2); ctx.lineTo(cx + f * 2 * rongDay * p2 - w2, y2);
              ctx.closePath(); ctx.fill();
            });
          }
        }
        // vien duong do - vang
        [-1, 1].forEach(function (s) {
          ctx.strokeStyle = '#c62828'; ctx.lineWidth = Math.max(2, W * 0.012);
          ctx.beginPath(); ctx.moveTo(cx + s * rongDay * chieu(-1.5) * 1.02, H); ctx.lineTo(cx + s * 2, hz); ctx.stroke();
          ctx.strokeStyle = '#ffca28'; ctx.lineWidth = Math.max(1, W * 0.004);
          ctx.beginPath(); ctx.moveTo(cx + s * rongDay * chieu(-1.5) * 0.98, H); ctx.lineTo(cx + s * 1.5, hz); ctx.stroke();
        });
        if (st) {
          // canh ben duong (xa ve truoc)
          st.canh.slice().sort(function (a, b) { return b.z - a.z; }).forEach(function (c) { canhVat(c, hz, rongDay, t); });
          // xu
          st.xu.slice().sort(function (a, b) { return b.z - a.z; }).forEach(function (x) {
            if (x.z > ZXA + 30 || x.z < -0.5) return;
            var p = chieu(x.z), y = hz + (H - hz) * p, xx = cx + (x.lan - 1) * (2 / 3) * rongDay * p;
            dongXu(xx, y - 26 * p * (W / 360), Math.max(3, 15 * p * (W / 360)), t);
          });
          // bien dap an
          if (st.bien && st.bien.z > -6) bienVe(st.bien, hz, rongDay, t);
          // nhan vat
          // dung giua lan dung do sau cua hang nguoi tren man hinh (khong thi lech ra mep)
          var yN = H * 0.95, pN = (yN - hz) / (H - hz);
          nguoi(cx + (st.x - 1) * (2 / 3) * rongDay * pN, yN, Math.min(1.1, W / 360) * 0.68, t);
          // hat
          st.hat.forEach(function (h) {
            ctx.globalAlpha = Math.max(0, 1 - h.t / h.song);
            ctx.fillStyle = h.mau;
            ctx.beginPath(); ctx.arc(h.x, h.y, h.r, 0, 6.29); ctx.fill();
          });
          ctx.globalAlpha = 1;
        }
        ctx.restore();
      }
      function may(x, y, r) {
        ctx.fillStyle = 'rgba(255,255,255,.92)';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 6.29); ctx.arc(x + r * 0.9, y + r * 0.2, r * 0.75, 0, 6.29); ctx.arc(x - r * 0.9, y + r * 0.25, r * 0.7, 0, 6.29);
        ctx.fill();
      }
      function nui(hz, mau, cao, lech) {
        ctx.fillStyle = mau;
        ctx.beginPath(); ctx.moveTo(-20, hz);
        for (var i = 0; i <= 12; i++) {
          var x = i / 12 * (W + 40) - 20;
          var y = hz - H * cao * 0.3 * (0.35 + 0.65 * Math.abs(Math.sin(i * 1.3 + lech)));
          ctx.lineTo(x, y);
        }
        ctx.lineTo(W + 20, hz); ctx.closePath(); ctx.fill();
      }
      function canhVat(c, hz, rongDay, t) {
        var p = chieu(c.z);
        if (c.z > ZXA + 8) return;
        var y = hz + (H - hz) * p, x = W / 2 + c.ben * rongDay * p * 1.25, s = p * (W / 360);
        if (c.k === 'den') {
          // cot + den long do
          ctx.strokeStyle = '#5d3a1a'; ctx.lineWidth = Math.max(1, 5 * s);
          ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - 110 * s); ctx.lineTo(x - c.ben * 22 * s, y - 110 * s); ctx.stroke();
          var lx = x - c.ben * 22 * s, ly = y - 92 * s;
          ctx.fillStyle = '#e53935';
          ctx.beginPath(); ctx.ellipse(lx, ly, 13 * s, 16 * s, 0, 0, 6.29); ctx.fill();
          ctx.fillStyle = '#ffca28'; ctx.fillRect(lx - 7 * s, ly - 18 * s, 14 * s, 4 * s); ctx.fillRect(lx - 7 * s, ly + 14 * s, 14 * s, 4 * s);
          ctx.fillStyle = 'rgba(255,220,120,.35)';
          ctx.beginPath(); ctx.arc(lx, ly, 24 * s * (0.9 + 0.1 * Math.sin(t * 3 + c.z)), 0, 6.29); ctx.fill();
        } else {
          // khom truc
          ctx.strokeStyle = '#3f8f3a'; ctx.lineWidth = Math.max(1, 5 * s);
          for (var i = -1; i <= 1; i++) {
            ctx.beginPath(); ctx.moveTo(x + i * 8 * s, y); ctx.quadraticCurveTo(x + i * 14 * s, y - 70 * s, x + i * 20 * s, y - 120 * s); ctx.stroke();
          }
          ctx.fillStyle = '#5fbf4f';
          for (var j = 0; j < 6; j++) {
            var yy = y - (40 + j * 14) * s, xx = x + ((j % 3) - 1) * 14 * s;
            ctx.beginPath(); ctx.ellipse(xx + 10 * s, yy, 13 * s, 4 * s, -0.5, 0, 6.29); ctx.fill();
          }
        }
      }
      function dongXu(x, y, r, t) {
        var sx = Math.abs(Math.cos(t * 4 + x * 0.05));
        ctx.save(); ctx.translate(x, y); ctx.scale(Math.max(0.25, sx), 1);
        ctx.fillStyle = '#ffca28'; ctx.strokeStyle = '#a66b00'; ctx.lineWidth = Math.max(1, r * 0.18);
        ctx.beginPath(); ctx.arc(0, 0, r, 0, 6.29); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#a66b00'; ctx.fillRect(-r * 0.28, -r * 0.28, r * 0.56, r * 0.56);
        ctx.restore();
      }
      function chuVua(text, w, toMax, font) {
        var s = toMax;
        ctx.font = '700 ' + s + 'px ' + font;
        while (s > 8 && ctx.measureText(text).width > w) { s -= 1; ctx.font = '700 ' + s + 'px ' + font; }
        return s;
      }
      function bienVe(b, hz, rongDay, t) {
        var p = chieu(b.z), y = hz + (H - hz) * p, sc = p * (W / 360);
        if (b.z > ZXA + 1) return;
        var bw = (2 / 3) * rongDay * p * 0.86, bh = Math.max(14, 62 * sc), cot = 70 * sc;
        var hien = Math.min(1, (ZXA - b.z) / 8);   // hien dan khi o xa
        ctx.globalAlpha = hien;
        b.q.lua.forEach(function (txt, i) {
          var x = W / 2 + (i - 1) * (2 / 3) * rongDay * p;
          var top = y - cot - bh;
          // cot
          ctx.fillStyle = '#6d4c33';
          ctx.fillRect(x - bw * 0.36, y - cot, Math.max(1, 5 * sc), cot);
          ctx.fillRect(x + bw * 0.36 - Math.max(1, 5 * sc), y - cot, Math.max(1, 5 * sc), cot);
          // bang
          var mau = MAU_BIEN[i];
          if (b.kq != null && i === b.sang) mau = '#8ff0a0';
          else if (b.kq === false && i === Math.round(st.x)) mau = '#ff9c9c';
          ctx.fillStyle = 'rgba(43,29,58,.9)';
          tron(x - bw / 2 - 2 * sc, top - 2 * sc, bw + 4 * sc, bh + 4 * sc, 10 * sc); ctx.fill();
          ctx.fillStyle = mau;
          tron(x - bw / 2, top, bw, bh, 9 * sc); ctx.fill();
          if (b.kq === true && i === b.sang) {
            ctx.strokeStyle = 'rgba(255,255,255,' + (0.5 + 0.5 * Math.sin(t * 12)) + ')'; ctx.lineWidth = 3 * sc;
            tron(x - bw / 2, top, bw, bh, 9 * sc); ctx.stroke();
          }
          // chu
          ctx.fillStyle = '#2b1d3a'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          if (b.q.laZh) {
            chuVua(txt, bw * 0.86, Math.max(9, 34 * sc), '"Noto Serif SC", serif');
            ctx.fillText(txt, x, top + bh / 2 + 1 * sc);
          } else {
            // nghia tieng Viet: toi da 2 dong
            var font = '"Be Vietnam Pro", sans-serif', s = Math.max(8, 17 * sc), dong = [txt];
            ctx.font = '700 ' + s + 'px ' + font;
            if (ctx.measureText(txt).width > bw * 0.88) {
              var w = txt.split(' '), a = '', bb = '';
              for (var k = 0; k < w.length; k++) { if (ctx.measureText(a + ' ' + w[k]).width < bw * 0.88 || !a) a = (a ? a + ' ' : '') + w[k]; else bb = w.slice(k).join(' '); if (bb) break; }
              dong = [a, bb];
            }
            dong.forEach(function (d, j) {
              chuVua(d, bw * 0.88, s, font);
              ctx.fillText(d, x, top + bh / 2 + (j - (dong.length - 1) / 2) * s * 1.1);
            });
          }
        });
        ctx.globalAlpha = 1;
      }
      function tron(x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
      }
      // "be Han": nhin tu sau lung, toc hai bui, ao do, khan vang bay
      function nguoi(x, y, s, t) {
        var buoc = st ? st.buoc : t * 8, vap = st ? st.vap : 0;
        var nhun = Math.abs(Math.sin(buoc)) * 6 * s, ng = vap ? Math.sin(vap * 30) * 0.15 : Math.sin(buoc) * 0.06;
        // bong
        ctx.fillStyle = 'rgba(40,60,30,.28)';
        ctx.beginPath(); ctx.ellipse(x, y + 4 * s, 30 * s, 8 * s, 0, 0, 6.29); ctx.fill();
        ctx.save(); ctx.translate(x, y - nhun); ctx.rotate(ng);
        var V = '#2b1d3a';
        ctx.lineWidth = 3 * s; ctx.strokeStyle = V; ctx.lineCap = 'round';
        // chan
        [-1, 1].forEach(function (b, i) {
          var a = Math.sin(buoc + i * Math.PI) * 0.6;
          ctx.save(); ctx.translate(b * 9 * s, -24 * s); ctx.rotate(a);
          ctx.fillStyle = '#3949ab'; tron(-5 * s, 0, 10 * s, 22 * s, 4 * s); ctx.fill(); ctx.stroke();
          ctx.fillStyle = '#fff'; tron(-6 * s, 18 * s, 12 * s, 7 * s, 3 * s); ctx.fill(); ctx.stroke();
          ctx.restore();
        });
        // tay
        [-1, 1].forEach(function (b, i) {
          var a = Math.sin(buoc + i * Math.PI + Math.PI) * 0.8;
          ctx.save(); ctx.translate(b * 19 * s, -58 * s); ctx.rotate(a * b * 0.6 + b * 0.25);
          ctx.fillStyle = '#e53935'; tron(-4 * s, 0, 8 * s, 22 * s, 4 * s); ctx.fill(); ctx.stroke();
          ctx.fillStyle = '#ffd7b5'; ctx.beginPath(); ctx.arc(0, 24 * s, 4.5 * s, 0, 6.29); ctx.fill(); ctx.stroke();
          ctx.restore();
        });
        // than (ao do vien vang)
        ctx.fillStyle = '#e53935'; tron(-19 * s, -64 * s, 38 * s, 42 * s, 14 * s); ctx.fill(); ctx.stroke();
        ctx.strokeStyle = '#ffca28'; ctx.lineWidth = 3 * s;
        ctx.beginPath(); ctx.moveTo(-17 * s, -30 * s); ctx.lineTo(17 * s, -30 * s); ctx.stroke();
        ctx.strokeStyle = V; ctx.lineWidth = 3 * s;
        // khan vang bay
        var bay = Math.sin(t * 10) * 6 * s;
        ctx.fillStyle = '#ffca28';
        ctx.beginPath(); ctx.moveTo(-12 * s, -64 * s); ctx.quadraticCurveTo(-26 * s, -58 * s + bay, -34 * s, -50 * s + bay); ctx.lineTo(-30 * s, -44 * s + bay); ctx.quadraticCurveTo(-20 * s, -52 * s, -8 * s, -58 * s); ctx.closePath(); ctx.fill(); ctx.stroke();
        tron(-16 * s, -68 * s, 32 * s, 8 * s, 4 * s); ctx.fill(); ctx.stroke();
        // dau (nhin sau gay: co + tai mau da, ca dau la toc den, hai bui)
        ctx.fillStyle = '#ffd7b5';
        tron(-6 * s, -72 * s, 12 * s, 8 * s, 3 * s); ctx.fill();
        [-1, 1].forEach(function (b) { ctx.beginPath(); ctx.ellipse(b * 19 * s, -85 * s, 4 * s, 6 * s, 0, 0, 6.29); ctx.fill(); ctx.stroke(); });
        ctx.fillStyle = '#2b2233';
        ctx.beginPath(); ctx.arc(0, -87 * s, 19 * s, 0, 6.29); ctx.fill(); ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 2 * s;
        ctx.beginPath(); ctx.arc(-4 * s, -92 * s, 11 * s, Math.PI * 1.1, Math.PI * 1.5); ctx.stroke();
        ctx.strokeStyle = V; ctx.lineWidth = 3 * s;
        [-1, 1].forEach(function (b) {
          ctx.beginPath(); ctx.arc(b * 15 * s, -103 * s, 8 * s, 0, 6.29); ctx.fill(); ctx.stroke();
          ctx.fillStyle = '#e53935'; ctx.fillRect(b * 15 * s - 5 * s, -97 * s, 10 * s, 3 * s); ctx.fillStyle = '#2b2233';
        });
        ctx.restore();
      }

      /* ---------------- vao / ket thuc ---------------- */
      function batDau() {
        st = moi();
        st.dem = 0.6;
        sk.diem(0); sk.tim(TIM, TIM);
        dungSan();
        choi = true;
        truoc = 0;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(vong);
      }
      function ketThuc() {
        if (st.xong) return;
        st.xong = true; choi = false;
        setTimeout(function () {
          cancelAnimationFrame(raf);
          T.ketQua(sk, 'chaydua', { diem: st.diem, dung: st.dung, tong: st.tong, chuoi: st.chuoiMax, thang: st.tim > 0, saiDs: st.saiDs,
            loi: st.tim > 0 ? 'Về đích rồi! 到了！' : null }, function () { T.manMoi(sk, gioiThieu, batDau); });
        }, 500);
      }
      var gioiThieu = {
        ic: '🏃', ten: 'Chạy đua chữ Hán 汉字跑酷',
        luat: 'Bé Hán tự chạy trên đường 3 làn. Đọc đề ở trên, rồi <b>vuốt</b> hoặc bấm <b>◀ ▶</b> (phím <b>← →</b>) để chạy vào <b>tấm biển có đáp án đúng</b> trước khi tới nơi. Nhặt đồng xu dọc đường để thêm điểm. Sai mất 1 tim — 3 tim. Về đích sau ' + DICH + ' câu!',
        nut: 'Chạy thôi ▶'
      };
      document.addEventListener('keydown', phim);
      document.addEventListener('visibilitychange', anTab);
      window.addEventListener('resize', doKich);
      T.manMoi(sk, gioiThieu, batDau);
      return {
        dung: function () {
          choi = false;
          cancelAnimationFrame(raf);
          document.removeEventListener('keydown', phim);
          document.removeEventListener('visibilitychange', anTab);
          window.removeEventListener('resize', doKich);
        }
      };
    }
  });
})();
