/* ══════════════════════════════════════════════════════════════════
   BAO VE HANH TINH 守护星球 (2026-11-20, co giao: "lam game nay" — thien thach mang chu Han roi, go de ban)
   ------------------------------------------------------------------
   Canvas 2D: vu tru sao lap lanh, hanh tinh cong o duoi, khau phao giua. Thien thach lua mang chu Han
   (kem nghia nho de goi y — tat duoc) roi xuong. Hai cach choi:
     - ⌨ Go pinyin: go pinyin (khong can dau thanh; so thanh / dau deu duoc) -> phao ban tia laser no thien thach.
       Go toi dau thi thien thach khop duoc ngam (khung vang). Enter / dung -> ban.
     - 👆 Chon nghia (dien thoai): thien thach thap nhat duoc ngam, bam 1 trong 4 nghia dung -> ban.
   Cham dat: mat 1 tim (5 tim), hien dap an + doc. Chuoi ban trung -> nhan diem (x2 .. x7).
   Toc do tang dan; giam chuyen dong -> roi cham hon 30%. Thang: ha DICH thien thach.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var T = window.TroNha;
  if (!T) return;
  var DICH = 40, TIM = 5;

  // pinyin -> chu cai khong dau (bo thanh, so, dau cach, ' ·), u: / ü -> v
  function pyKhong(s) {
    s = String(s || '').toLowerCase();
    if (s.normalize) s = s.normalize('NFD');
    return s.replace(/u\u0308|\u00fc|u:/g, 'v').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '');
  }
  // San choi an pinyin (v.py = '') de hoc sinh luyen doc chu -> ghep pinyin tu phan tich tung chu (v.hanzi[].p)
  function pyCua(tu) {
    if (tu.py) return tu.py;
    var hz = tu.hanzi || [], ra = [];
    var chu = Array.from ? Array.from(String(tu.zh || '')) : String(tu.zh || '').split('');
    for (var i = 0; i < chu.length; i++) {
      if (/[，。？！、\s…·]/.test(chu[i])) continue;
      var h = hz.filter(function (x) { return x && x.c === chu[i] && x.p; })[0];
      if (!h) return '';
      ra.push(String(h.p).split(/[\/,，]/)[0].trim());
    }
    return ra.join(' ');
  }
  function cacPy(tu) {
    // "hǎo / hào" -> 2 cach; bo phan trong ngoac
    return String(pyCua(tu)).replace(/[（(][^）)]*[）)]/g, ' ').split(/[\/,;，；、]|\s+hoặc\s+/).map(pyKhong).filter(Boolean);
  }

  T.dangKy({
    key: 'thienthach',
    ten: 'Bảo vệ hành tinh',
    emoji: '☄️',
    chu: '星',
    nen: 'linear-gradient(160deg,#1a2a6c 0%,#3a3f9e 50%,#0b1238 100%)',
    moTa: 'Thiên thạch mang chữ Hán lao xuống hành tinh — gõ pinyin (hoặc chọn nghĩa) để khẩu pháo bắn nổ trước khi chạm đất!',
    canToiThieu: 4,
    mo: function (hop, o) {
      var sk = T.khung(hop, this, { tim: TIM });
      var cham = T.itChuyenDong ? 1.3 : 1;
      // tu vung nap xong sau khi mo tro (game-hub them vao cung mang o.vocab) -> loc luc can, khong loc truoc
      function dsTu() { return o.vocab.filter(function (v) { return v.zh && cacPy(v).length; }); }
      var kieu = 'go', goiY = true;
      var cv, ctx, W = 600, H = 460, dpr = 1, raf = 0, truoc = 0, choi = false, tamDung = false, st = null;
      var oGo = null, oChon = null, hangTu = [];
      var sao = [];

      function layTu() {
        if (!hangTu.length) hangTu = T.tron(dsTu());
        // khong de 2 thien thach cung chu tren man
        for (var i = hangTu.length - 1; i >= 0; i--) {
          var v = hangTu[i];
          if (!st.tt.some(function (x) { return x.tu.zh === v.zh; })) { hangTu.splice(i, 1); return v; }
        }
        return hangTu.pop();
      }

      /* ---------------- san ---------------- */
      function dungSan() {
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        cv = T.tao('canvas', 'tn-tt-cv');
        cv.setAttribute('role', 'img');
        cv.setAttribute('aria-label', 'Thiên thạch mang chữ Hán đang rơi xuống hành tinh');
        sk.san.appendChild(cv);
        ctx = cv.getContext('2d');
        var duoi = T.tao('div', 'tn-tt-duoi');
        if (kieu === 'go') {
          duoi.innerHTML = '<label class="tn-tt-go"><span>⌨ Gõ pinyin</span><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" inputmode="latin" placeholder="vd: nihao / ni3hao3" aria-label="Gõ pinyin của chữ trên thiên thạch"></label>' +
            '<button type="button" class="tn-tt-nho" data-tt-goi aria-pressed="' + goiY + '">' + (goiY ? '💡 Đang hiện nghĩa' : '💡 Hiện nghĩa') + '</button>';
          oGo = duoi.querySelector('input');
          oGo.addEventListener('input', goPhim);
          oGo.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); banTheoGo(true); } });
        } else {
          duoi.innerHTML = '<div class="tn-tt-chon" aria-live="polite"></div>';
          oChon = duoi.querySelector('.tn-tt-chon');
        }
        sk.duoi.appendChild(duoi);
        var ng = duoi.querySelector('[data-tt-goi]');
        if (ng) ng.addEventListener('click', function () {
          goiY = !goiY; ng.setAttribute('aria-pressed', goiY); ng.textContent = goiY ? '💡 Đang hiện nghĩa' : '💡 Hiện nghĩa';
          if (oGo) oGo.focus();
        });
        cv.addEventListener('click', function () { if (oGo) oGo.focus(); });
        doKich();
        sao = [];
        for (var i = 0; i < 110; i++) sao.push({ x: Math.random(), y: Math.random() * 0.8, r: Math.random() * 1.4 + 0.3, p: Math.random() * 6.3 });
        if (oGo) setTimeout(function () { oGo.focus(); }, 60);
      }
      function doKich() {
        if (!cv) return;
        var r = sk.san.getBoundingClientRect();
        W = Math.max(280, r.width || 600);
        H = Math.max(320, Math.min(W * 0.95, (window.innerHeight || 700) * 0.58));
        dpr = Math.min(2, window.devicePixelRatio || 1);
        cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
        cv.style.width = W + 'px'; cv.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      /* ---------------- trang thai ---------------- */
      function moi() {
        return { tt: [], no: [], tia: [], hat: [], diem: 0, dung: 0, tong: 0, chuoi: 0, chuoiMax: 0, tim: TIM, saiDs: [], sinh: 0.8, tg: 0, xong: false, ngam: null, rung: 0 };
      }
      function nhan() { return Math.min(7, 1 + Math.floor(st.chuoi / 3)); }
      function tocRoi() { return (H * 0.055 + Math.min(H * 0.06, st.dung * H * 0.0018)) / cham; }   // px / giay
      function khoangSinh() { return Math.max(1.5, 3.4 - st.dung * 0.05) * cham; }
      function toiDaCung() { return Math.min(5, 2 + Math.floor(st.dung / 8)); }

      function sinhTT() {
        var tu = layTu();
        if (!tu) return;
        var r = Math.max(26, Math.min(40, W * 0.045));
        var x = r + 10 + Math.random() * (W - 2 * r - 20);
        st.tt.push({ tu: tu, x: x, y: -r, r: r, v: tocRoi() * (0.85 + Math.random() * 0.3), xoay: Math.random() * 6.3, vx: (Math.random() - 0.5) * 8, chet: false, id: Math.random() });
        if (kieu === 'chon') veChon();
      }

      /* ---------------- ban ---------------- */
      // Sau khi ban trung: xoa o go. Bo go tieng Viet (Unikey/Telex) hay "dien lai" chu vua go ngay sau khi xoa
      // -> trong 2,5 giay, neu o go bat dau bang pinyin vua ban thi cat bo phan do (giu phan em go tiep).
      var vuaBan = '', vuaBanLuc = 0, daiTruoc = 0;
      function xoaGo(g) {
        vuaBan = g || ''; vuaBanLuc = Date.now(); daiTruoc = 0;
        oGo.value = ''; oGo.classList.remove('sai');
        setTimeout(function () { if (oGo && pyKhong(oGo.value) === vuaBan) { oGo.value = ''; oGo.classList.remove('sai'); } }, 0);
        setTimeout(function () { if (oGo && pyKhong(oGo.value) === vuaBan) { oGo.value = ''; oGo.classList.remove('sai'); } }, 120);
      }
      function goPhim() {
        // chi cat khi chu cu duoc dien lai CA CUM mot luc (bo go lam) — em go tung chu thi khong dung toi
        var dai = oGo.value.length, nhay = dai - daiTruoc;
        daiTruoc = dai;
        if (vuaBan && Date.now() - vuaBanLuc < 2500 && nhay >= Math.max(2, vuaBan.length)) {
          var g0 = pyKhong(oGo.value);
          if (g0.indexOf(vuaBan) === 0) {
            // giu phan sau pinyin cu (chu em go tiep)
            oGo.value = g0.slice(vuaBan.length);
            daiTruoc = oGo.value.length;
            vuaBan = '';
            if (!oGo.value) { oGo.classList.remove('sai'); st.ngam = null; return; }
          }
        }
        var g = pyKhong(oGo.value);
        st.ngam = null;
        if (!g) return;
        // ngam: thien thach thap nhat co pinyin bat dau bang chu da go
        var ung = st.tt.filter(function (x) { return !x.chet && cacPy(x.tu).some(function (p) { return p.indexOf(g) === 0; }); })
          .sort(function (a, b) { return b.y - a.y; })[0];
        st.ngam = ung || null;
        oGo.classList.toggle('sai', !ung);
        banTheoGo(false);
      }
      function banTheoGo(enter) {
        var g = pyKhong(oGo.value);
        if (!g) return;
        var trung = st.tt.filter(function (x) { return !x.chet && cacPy(x.tu).indexOf(g) >= 0; }).sort(function (a, b) { return b.y - a.y; })[0];
        if (trung) { ban(trung); xoaGo(g); st.ngam = null; return; }
        if (enter) {
          // Enter ma khong khop: rung nhe, xoa o go
          T.keu(200, 0.12, 'square'); oGo.classList.add('sai');
          st.chuoi = 0;
          setTimeout(function () { if (oGo) { oGo.value = ''; oGo.classList.remove('sai'); } }, 220);
        }
      }
      function veChon() {
        if (!oChon) return;
        var muc = st.tt.filter(function (x) { return !x.chet; }).sort(function (a, b) { return b.y - a.y; })[0];
        st.ngam = muc || null;
        if (!muc) { oChon.innerHTML = '<p class="tn-tt-cho">Chờ thiên thạch…</p>'; oChon._id = null; return; }
        if (oChon._id === muc.id) return;
        oChon._id = muc.id;
        var q = T.cauHoi(o.vocab, muc.tu, 'zh', 4);
        oChon.innerHTML = '<p class="tn-tt-hoi">Bắn <b lang="zh">' + T.esc(muc.tu.zh) + '</b> — chọn nghĩa đúng:</p>';
        var luoi = T.tao('div', 'tn-tt-luoi');
        q.lua.forEach(function (t, i) {
          var b = T.tao('button', 'tn-tt-lua', T.esc(t));
          b.type = 'button';
          b.addEventListener('click', function () {
            if (!choi || muc.chet) return;
            if (i === q.dung) ban(muc);
            else { b.classList.add('sai'); b.disabled = true; T.keu(200, 0.12, 'square'); st.chuoi = 0; }
          });
          luoi.appendChild(b);
        });
        oChon.appendChild(luoi);
      }
      function ban(x) {
        x.chet = true;
        st.dung++; st.tong++; st.chuoi++; st.chuoiMax = Math.max(st.chuoiMax, st.chuoi);
        var cong = 10 * nhan();
        st.diem += cong; sk.diem(st.diem);
        T.keuDung();
        st.tia.push({ x: x.x, y: x.y, t: 0 });
        st.no.push({ x: x.x, y: x.y, r: x.r, t: 0, chu: x.tu.zh, py: pyCua(x.tu) });
        for (var i = 0; i < (T.itChuyenDong ? 10 : 22); i++) {
          var g = Math.random() * 6.3, v = 60 + Math.random() * 220;
          st.hat.push({ x: x.x, y: x.y, vx: Math.cos(g) * v, vy: Math.sin(g) * v, t: 0, song: 0.5 + Math.random() * 0.5, mau: ['#ffd54f', '#ff8a3d', '#fff3c4', '#ff5252'][i % 4], r: 1.5 + Math.random() * 3 });
        }
        if (st.chuoi >= 3 && st.chuoi % 3 === 0) sk.bay('Chuỗi ' + st.chuoi + ' · ×' + nhan(), 'dung');
        T.doc(x.tu.zh);
        if (st.dung >= DICH) ketThuc(true);
        else if (kieu === 'chon') setTimeout(veChon, 30);
      }
      function chamDat(x) {
        x.chet = true;
        st.tong++; st.chuoi = 0; st.tim--; st.rung = 0.4;
        sk.tim(st.tim, TIM);
        st.saiDs.push(x.tu);
        T.keuSai(); T.rung(150);
        sk.bay(x.tu.zh + ' · ' + pyCua(x.tu) + ' · ' + x.tu.vn, 'sai');
        st.no.push({ x: x.x, y: H * 0.86, r: x.r * 1.4, t: 0, dat: true });
        T.doc(x.tu.zh);
        if (st.tim <= 0) ketThuc(false);
        else if (kieu === 'chon') setTimeout(veChon, 30);
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
        st.tg += dt;
        if (st.rung > 0) st.rung = Math.max(0, st.rung - dt);
        st.sinh -= dt;
        var song = st.tt.filter(function (x) { return !x.chet; }).length;
        if (st.sinh <= 0 && song < toiDaCung()) { sinhTT(); st.sinh = khoangSinh(); }
        else if (st.sinh <= 0) st.sinh = 0.4;
        var mat = H * 0.84;
        st.tt.forEach(function (x) {
          if (x.chet) return;
          x.y += x.v * dt; x.x += x.vx * dt; x.xoay += dt * 0.8;
          if (x.x < x.r || x.x > W - x.r) x.vx = -x.vx;
          if (x.y + x.r * 0.6 >= mat) chamDat(x);
        });
        st.tt = st.tt.filter(function (x) { return !x.chet; });
        if (st.ngam && st.ngam.chet) st.ngam = null;
        st.no.forEach(function (n) { n.t += dt; });
        st.no = st.no.filter(function (n) { return n.t < 0.9; });
        st.tia.forEach(function (n) { n.t += dt; });
        st.tia = st.tia.filter(function (n) { return n.t < 0.22; });
        st.hat.forEach(function (h) { h.t += dt; h.x += h.vx * dt; h.y += h.vy * dt; h.vy += 120 * dt; });
        st.hat = st.hat.filter(function (h) { return h.t < h.song; });
        if (kieu === 'chon' && oChon && !oChon._id && song) veChon();
      }

      /* ---------------- ve ---------------- */
      function ve(t) {
        if (!ctx) return;
        var rx = st && st.rung ? (Math.random() - 0.5) * 12 * st.rung : 0;
        ctx.save(); ctx.translate(rx, 0);
        var g = ctx.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, '#060b2e'); g.addColorStop(0.55, '#16246b'); g.addColorStop(1, '#2d4fb8');
        ctx.fillStyle = g; ctx.fillRect(-20, 0, W + 40, H);
        // tinh van mo
        var tv = ctx.createRadialGradient(W * 0.25, H * 0.3, 0, W * 0.25, H * 0.3, W * 0.5);
        tv.addColorStop(0, 'rgba(160,110,255,.22)'); tv.addColorStop(1, 'rgba(160,110,255,0)');
        ctx.fillStyle = tv; ctx.fillRect(0, 0, W, H);
        sao.forEach(function (s) {
          ctx.globalAlpha = 0.35 + 0.65 * Math.abs(Math.sin(t * 1.5 + s.p));
          ctx.fillStyle = '#fff';
          ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, 6.29); ctx.fill();
        });
        ctx.globalAlpha = 1;
        // hanh tinh (mat cong) + mieng hoa than
        var mat = H * 0.84;
        ctx.fillStyle = '#7ec3ff';
        ctx.beginPath(); ctx.ellipse(W / 2, mat + H * 0.9, W * 1.1, H * 0.95, 0, Math.PI, Math.PI * 2); ctx.fill();
        var gm = ctx.createLinearGradient(0, mat - 10, 0, H);
        gm.addColorStop(0, '#e9f3ff'); gm.addColorStop(1, '#9fb7d9');
        ctx.fillStyle = gm;
        ctx.beginPath(); ctx.ellipse(W / 2, mat + H * 0.92, W * 1.08, H * 0.93, 0, Math.PI, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(110,135,180,.35)';
        [[0.18, 0.93, 26], [0.42, 0.9, 16], [0.7, 0.94, 30], [0.86, 0.9, 14]].forEach(function (c) {
          ctx.beginPath(); ctx.ellipse(W * c[0], H * c[1], c[2] * W / 600, c[2] * 0.35 * W / 600, 0, 0, 6.29); ctx.fill();
        });
        // phao
        var px = W / 2, py = H * 0.9;
        var mt = st && st.ngam ? st.ngam : null;
        var goc = mt ? Math.atan2(mt.y - py, mt.x - px) + Math.PI / 2 : 0;
        ctx.save(); ctx.translate(px, py); ctx.rotate(goc);
        ctx.fillStyle = '#cfd8e6'; ctx.strokeStyle = '#2b1d3a'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(-7, 0); ctx.lineTo(-5, -34); ctx.lineTo(5, -34); ctx.lineTo(7, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.fillStyle = '#ff5252'; ctx.fillRect(-5, -38, 10, 6); ctx.strokeRect(-5, -38, 10, 6);
        ctx.restore();
        ctx.fillStyle = '#4f8cff'; ctx.strokeStyle = '#2b1d3a'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(px, py, 18, Math.PI, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
        if (st) {
          // tia laser
          st.tia.forEach(function (n) {
            ctx.globalAlpha = 1 - n.t / 0.22;
            ctx.strokeStyle = '#7ff7ff'; ctx.lineWidth = 6; ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(px, py - 30); ctx.lineTo(n.x, n.y); ctx.stroke();
            ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(px, py - 30); ctx.lineTo(n.x, n.y); ctx.stroke();
          });
          ctx.globalAlpha = 1;
          // thien thach
          st.tt.forEach(function (x) { veTT(x, t); });
          // vu no
          st.no.forEach(function (n) {
            var k = n.t / 0.9;
            ctx.globalAlpha = 1 - k;
            var rg = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * (1 + k * 2));
            rg.addColorStop(0, n.dat ? 'rgba(255,90,60,.9)' : 'rgba(255,250,200,.95)'); rg.addColorStop(0.5, 'rgba(255,140,40,.6)'); rg.addColorStop(1, 'rgba(255,80,30,0)');
            ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(n.x, n.y, n.r * (1 + k * 2), 0, 6.29); ctx.fill();
            if (n.chu) {
              ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.font = '700 ' + Math.round(n.r * 0.7) + 'px "Be Vietnam Pro", sans-serif';
              ctx.fillText(n.py || '', n.x, n.y - n.r - 10 - k * 24);
            }
          });
          ctx.globalAlpha = 1;
          st.hat.forEach(function (h) {
            ctx.globalAlpha = Math.max(0, 1 - h.t / h.song);
            ctx.fillStyle = h.mau; ctx.beginPath(); ctx.arc(h.x, h.y, h.r, 0, 6.29); ctx.fill();
          });
          ctx.globalAlpha = 1;
          // nhan diem chuoi
          if (st.chuoi >= 3) {
            ctx.fillStyle = '#ffd54f'; ctx.font = '900 ' + Math.round(W * 0.035 + 10) + 'px "Be Vietnam Pro", sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'top';
            ctx.fillText('×' + nhan(), W - 14, 12);
          }
        }
        ctx.restore();
      }
      function veTT(x, t) {
        var r = x.r;
        // duoi lua
        var dl = ctx.createLinearGradient(x.x, x.y - r * 3.2, x.x, x.y);
        dl.addColorStop(0, 'rgba(255,120,40,0)'); dl.addColorStop(1, 'rgba(255,170,60,.85)');
        ctx.fillStyle = dl;
        ctx.beginPath(); ctx.moveTo(x.x - r * 0.75, x.y - r * 0.2); ctx.quadraticCurveTo(x.x, x.y - r * (3 + 0.3 * Math.sin(t * 20 + x.xoay)), x.x + r * 0.75, x.y - r * 0.2); ctx.closePath(); ctx.fill();
        // hon da
        ctx.save(); ctx.translate(x.x, x.y); ctx.rotate(x.xoay * 0.3);
        var gd = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.2, 0, 0, r);
        gd.addColorStop(0, '#ffb26b'); gd.addColorStop(0.6, '#e2621f'); gd.addColorStop(1, '#8a2e0a');
        ctx.fillStyle = gd; ctx.strokeStyle = '#2b1d3a'; ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (var i = 0; i < 9; i++) { var a = i / 9 * 6.283, rr = r * (0.88 + 0.12 * Math.sin(i * 2.7 + x.id * 10)); ctx[i ? 'lineTo' : 'moveTo'](Math.cos(a) * rr, Math.sin(a) * rr); }
        ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.fillStyle = 'rgba(120,40,10,.45)';
        ctx.beginPath(); ctx.arc(r * 0.35, r * 0.25, r * 0.18, 0, 6.29); ctx.arc(-r * 0.3, r * 0.4, r * 0.12, 0, 6.29); ctx.fill();
        ctx.restore();
        // chu Han
        var ngam = st.ngam === x;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        var to = x.tu.zh.length > 2 ? r * 0.62 : x.tu.zh.length > 1 ? r * 0.8 : r * 1.05;
        ctx.font = '900 ' + Math.round(to) + 'px "Noto Serif SC", serif';
        ctx.lineWidth = 5; ctx.strokeStyle = '#3a1500'; ctx.strokeText(x.tu.zh, x.x, x.y + 1);
        ctx.fillStyle = '#fff6c8'; ctx.fillText(x.tu.zh, x.x, x.y + 1);
        // nhan goi y nghia + khung ngam
        if (goiY || kieu === 'chon') {
          var nh = kieu === 'chon' ? '' : x.tu.vn;
          if (nh) {
            ctx.font = '700 ' + Math.max(11, Math.round(r * 0.42)) + 'px "Be Vietnam Pro", sans-serif';
            var w = Math.min(W * 0.4, ctx.measureText(nh).width + 14), hh = Math.max(18, r * 0.62);
            var bx = x.x + r * 0.7, by = x.y - hh / 2;
            if (bx + w > W - 4) bx = x.x - r * 0.7 - w;
            ctx.fillStyle = 'rgba(255,255,255,.92)'; tronRect(bx, by, w, hh, 6); ctx.fill();
            ctx.fillStyle = '#2b1d3a'; ctx.textAlign = 'left';
            ctx.fillText(rutGon(nh, w - 12), bx + 7, by + hh / 2 + 1);
          }
        }
        if (ngam) {
          ctx.strokeStyle = '#ffe066'; ctx.lineWidth = 3; ctx.setLineDash([6, 4]);
          ctx.beginPath(); ctx.arc(x.x, x.y, r + 8 + Math.sin(t * 8) * 2, 0, 6.29); ctx.stroke(); ctx.setLineDash([]);
          if (oGo && oGo.value) {
            ctx.fillStyle = '#ffe066'; ctx.textAlign = 'center'; ctx.font = '800 ' + Math.max(12, Math.round(r * 0.45)) + 'px "Be Vietnam Pro", sans-serif';
            ctx.fillText(oGo.value, x.x, x.y + r + 16);
          }
        }
      }
      function rutGon(s, w) {
        if (ctx.measureText(s).width <= w) return s;
        while (s.length > 1 && ctx.measureText(s + '…').width > w) s = s.slice(0, -1);
        return s + '…';
      }
      function tronRect(x, y, w, h, r) {
        ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
      }

      /* ---------------- vao / ket thuc ---------------- */
      function batDau() {
        st = moi();
        sk.diem(0); sk.tim(TIM, TIM);
        sk.deBai(kieu === 'go' ? '<span class="tn-tt-de">⌨ Gõ <b>pinyin</b> của chữ trên thiên thạch để bắn — không cần dấu thanh</span>'
          : '<span class="tn-tt-de">👆 Chọn <b>nghĩa đúng</b> của thiên thạch thấp nhất để bắn</span>');
        dungSan();
        choi = true; truoc = 0;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(vong);
      }
      function ketThuc(thang) {
        if (st.xong) return;
        st.xong = true; choi = false;
        setTimeout(function () {
          cancelAnimationFrame(raf);
          T.ketQua(sk, 'thienthach', { diem: st.diem, dung: st.dung, tong: st.tong, chuoi: st.chuoiMax, thang: thang, saiDs: st.saiDs,
            loi: thang ? 'Hành tinh an toàn! 地球安全了！' : null }, function () { gioiThieu(); });
        }, 600);
      }
      function gioiThieu() {
        T.manMoi(sk, {
          ic: '☄️', ten: 'Bảo vệ hành tinh 守护星球',
          luat: 'Thiên thạch mang chữ Hán đang lao xuống! <b>Gõ pinyin</b> (vd <i>nihao</i> hoặc <i>ni3hao3</i>, không cần dấu) để khẩu pháo bắn nổ. Bắn liên tiếp được nhân điểm tới <b>×7</b>. Thiên thạch chạm đất mất 1 tim — có ' + TIM + ' tim. Hạ ' + DICH + ' thiên thạch là thắng!' +
            '<span class="tn-tt-kieu"><button type="button" data-kieu="go" class="on">⌨ Gõ pinyin</button><button type="button" data-kieu="chon">👆 Chọn nghĩa (điện thoại)</button></span>',
          nut: 'Bảo vệ hành tinh ▶'
        }, batDau);
        Array.prototype.forEach.call(sk.san.querySelectorAll('[data-kieu]'), function (b) {
          b.addEventListener('click', function () {
            kieu = b.getAttribute('data-kieu');
            Array.prototype.forEach.call(sk.san.querySelectorAll('[data-kieu]'), function (x) { x.classList.toggle('on', x === b); });
          });
        });
      }
      function anTab() { tamDung = document.hidden; if (!tamDung) truoc = 0; }
      document.addEventListener('visibilitychange', anTab);
      window.addEventListener('resize', doKich);
      // man hinh rong (may tinh) mac dinh go; dien thoai mac dinh chon nghia
      if ((window.innerWidth || 800) < 640) kieu = 'chon';
      gioiThieu();
      if (kieu === 'chon') Array.prototype.forEach.call(sk.san.querySelectorAll('[data-kieu]'), function (x) { x.classList.toggle('on', x.getAttribute('data-kieu') === 'chon'); });
      return {
        dung: function () {
          choi = false;
          cancelAnimationFrame(raf);
          document.removeEventListener('visibilitychange', anTab);
          window.removeEventListener('resize', doKich);
        }
      };
    }
  });
})();
