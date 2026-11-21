/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — kieu cau hoi moi cho bang hoi (cho an, tuoi cay, …) (2026-11-20, co giao: "cac cau hoi tren nong trai
   da dang hon: sap xep, noi nhieu tu voi nghia, dich Viet-Trung / Trung-Viet, cho cau hoi va hoc sinh tu go cau tra loi").
   Chi dung tu va cau cua BAI EM DA HOC / DUOC GIAO (nong-trai.js nap: tu vung + sortData + translateData(Rev) + cau vi du).
     xep   — sap xep cac cum thanh cau (sortData cua bai)
     vt    — dich Viet -> Trung: chon cau tieng Trung dung
     tv    — dich Trung -> Viet: chon nghia dung cua cau
     noi   — noi 4 tu voi 4 nghia (dung het, sai toi da 1 lan van tinh dung)
     go    — tu go: nghia -> go pinyin (khong can dau) hoac chu Han; chu Han -> go pinyin
   NTCau.thu(ctx) -> true neu da ve 1 cau (ctx.xong(dung, bao, docZh) khi em tra loi xong).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };

  function pyKhong(s) {
    s = String(s || '').toLowerCase();
    if (s.normalize) s = s.normalize('NFD');
    return s.replace(/u\u0308|\u00fc|u:/g, 'v').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '');
  }
  function zhKhong(s) { return String(s || '').replace(/[\s，。？！、；：,.?!;:"'“”‘’（）()…—·~～]/g, ''); }
  function cacPy(py) { return String(py || '').replace(/[（(][^）)]*[）)]/g, ' ').split(/[\/,;，；、]/).map(pyKhong).filter(Boolean); }

  // chon kieu: chi kieu co du du lieu; xoay vong de khong lap kieu lien tiep
  var truoc = '';
  function chonKieu(ctx) {
    var c = ctx.cau, tu = ctx.tu || [];
    var co = [];
    if (c.xep.length) co.push('xep', 'xep', 'xep'); // co giao: nhieu cau sap xep trat tu tu
    if (c.dich.length >= 3) co.push('vt', 'tv');
    if (tu.length >= 4) co.push('noi');
    if (tu.some(function (v) { return v.py; })) co.push('go');
    if (truoc !== 'xep') { /* xep duoc lap lai lien tiep */ } else co = co.filter(function (k) { return k !== 'xep' || Math.random() < 0.4; });
    co = co.filter(function (k) { return k !== truoc || k === 'xep'; });
    if (!co.length) return '';
    var k = co[Math.floor(Math.random() * co.length)];
    truoc = k;
    return k;
  }

  function thu(ctx) {
    // khoang 7/10 so cau la kieu moi (con lai giu 3 kieu cu cua nong trai)
    if (Math.random() < 0.3) return false;
    var k = chonKieu(ctx);
    if (!k) return false;
    ctx.hoi.khoa = false;
    $('#ntHoiBao').textContent = '';
    if (k === 'xep') return cauXep(ctx);
    if (k === 'vt' || k === 'tv') return cauDich(ctx, k);
    if (k === 'noi') return cauNoi(ctx);
    return cauGo(ctx);
  }

  /* ---------------- sap xep cau ---------------- */
  function cauXep(ctx) {
    var esc = ctx.esc, x = ctx.cau.xep[Math.floor(Math.random() * ctx.cau.xep.length)];
    var dau = x.w.filter(function (w) { return /^[，。？！、；：,.?!]+$/.test(w); });
    var cum = x.w.filter(function (w) { return !/^[，。？！、；：,.?!]+$/.test(w); });
    var thuTu = cum.map(function (w, i) { return { w: w, i: i }; });
    var tron = ctx.tron(thuTu.slice());
    // tranh tron ra dung thu tu
    if (tron.every(function (o, j) { return o.i === j; }) && tron.length > 1) tron.push(tron.shift());
    var chon = [];
    $('#ntHoiCau').innerHTML = '<p class="nt-hoi-hd">🧩 Sắp xếp thành câu đúng</p><div class="ntc-xep-dong" aria-live="polite"><span class="ntc-trong">Chạm hoặc kéo các cụm bên dưới vào đây…</span></div>' +
      '<p class="ntc-xep-meo">Kéo cụm trong câu để đổi chỗ · kéo ra ngoài hoặc chạm để bỏ</p>';
    var hop = $('#ntHoiChon');
    // keo tha: kv = { o: cum dang keo, tu: 'dong'|'ds', chen: vi tri chen trong cau (-1 = ngoai cau) }
    var kv = null, vuaKeo = false;
    function ve() {
      var dong = $('#ntHoiCau .ntc-xep-dong');
      var ds = chon.slice();
      if (kv && kv.dang) {
        ds = ds.filter(function (o) { return o !== kv.o; });
        if (kv.chen >= 0) ds.splice(Math.min(kv.chen, ds.length), 0, { cho: true, w: kv.o.w });
      }
      dong.innerHTML = ds.length ? ds.map(function (o) {
        if (o.cho) return '<span class="ntc-cum ntc-cho" lang="zh" aria-hidden="true">' + esc(o.w) + '</span>';
        return '<button type="button" class="ntc-cum chon" data-bo="' + chon.indexOf(o) + '" lang="zh">' + esc(o.w) + '</button>';
      }).join('') + (dau.length && chon.length === cum.length && !(kv && kv.dang) ? '<span class="ntc-dau">' + esc(dau[dau.length - 1]) + '</span>' : '')
        : '<span class="ntc-trong">Chạm hoặc kéo các cụm bên dưới vào đây…</span>';
      hop.innerHTML = '<div class="ntc-cum-ds">' + tron.map(function (o, j) {
        var da = chon.indexOf(o) >= 0 || (kv && kv.dang && kv.o === o && kv.chen >= 0);
        return '<button type="button" class="ntc-cum" data-lay="' + j + '"' + (da ? ' disabled' : '') + ' lang="zh">' + esc(o.w) + '</button>';
      }).join('') + '</div><button type="button" class="ntc-kt" data-kt' + (chon.length === cum.length ? '' : ' disabled') + '>Kiểm tra ✓</button>';
    }
    // vi tri chen theo diem ngon tay: truoc cum dau tien ma diem nam tren / ben trai tam cum (cau xuong dong van dung)
    function viTriChen(x, y) {
      var dong = $('#ntHoiCau .ntc-xep-dong'), r = dong.getBoundingClientRect();
      if (x < r.left - 30 || x > r.right + 30 || y < r.top - 34 || y > r.bottom + 34) return -1;
      var els = dong.querySelectorAll('.ntc-cum.chon'), i = 0;
      for (; i < els.length; i++) {
        var q = els[i].getBoundingClientRect();
        if (y < q.top) break;
        if (y <= q.bottom && x < q.left + q.width / 2) break;
      }
      return i;
    }
    function batDauKeo(e) {
      if (ctx.hoi.khoa || (e.pointerType === 'mouse' && e.button !== 0)) return;
      var b = e.target.closest('.ntc-cum');
      if (!b || b.disabled || b.classList.contains('ntc-cho')) return;
      var o = b.hasAttribute('data-bo') ? chon[+b.getAttribute('data-bo')] : b.hasAttribute('data-lay') ? tron[+b.getAttribute('data-lay')] : null;
      if (!o) return;
      var r = b.getBoundingClientRect();
      kv = { o: o, tu: b.hasAttribute('data-bo') ? 'dong' : 'ds', x0: e.clientX, y0: e.clientY, dx: e.clientX - r.left, dy: e.clientY - r.top, w: r.width, dang: false, chen: -1, bong: null };
    }
    function diKeo(e) {
      if (!kv) return;
      if (!kv.dang) {
        if (Math.abs(e.clientX - kv.x0) + Math.abs(e.clientY - kv.y0) < 8) return;
        kv.dang = true;
        var bong = document.createElement('div');
        bong.className = 'ntc-cum chon ntc-bong-keo';
        bong.setAttribute('lang', 'zh');
        bong.textContent = kv.o.w;
        bong.style.width = kv.w + 'px';
        document.body.appendChild(bong);
        kv.bong = bong;
      }
      e.preventDefault();
      kv.bong.style.left = (e.clientX - kv.dx) + 'px';
      kv.bong.style.top = (e.clientY - kv.dy) + 'px';
      var moi = viTriChen(e.clientX, e.clientY);
      if (moi !== kv.chen || !kv.daVe) { kv.chen = moi; kv.daVe = true; ve(); }
    }
    function thaKeo() {
      if (!kv) return;
      var k = kv;
      kv = null;
      if (!k.dang) return;
      if (k.bong) k.bong.remove();
      vuaKeo = true;
      setTimeout(function () { vuaKeo = false; }, 0);
      var cu = chon.indexOf(k.o);
      if (cu >= 0) chon.splice(cu, 1);
      if (k.chen >= 0) chon.splice(Math.min(k.chen, chon.length), 0, k.o);
      ve();
    }
    var vung = $('#ntHoiCau').parentNode || document.body;
    var xepId = (vung._xepId || 0) + 1;
    vung._xepId = xepId;
    vung.onpointerdown = batDauKeo;
    window.addEventListener('pointermove', diKeo, { passive: false });
    window.addEventListener('pointerup', thaKeo);
    window.addEventListener('pointercancel', thaKeo);
    // cau hoi dong / sang cau khac: go trinh keo cua cau nay
    var go = setInterval(function () {
      if ($('#ntHoiCau .ntc-xep-dong') && vung._xepId === xepId) return;
      clearInterval(go);
      window.removeEventListener('pointermove', diKeo);
      window.removeEventListener('pointerup', thaKeo);
      window.removeEventListener('pointercancel', thaKeo);
      if (vung.onpointerdown === batDauKeo) vung.onpointerdown = null;
      if (kv && kv.bong) kv.bong.remove();
      kv = null;
    }, 700);
    function bam(e) {
      if (ctx.hoi.khoa || vuaKeo) return;
      var b = e.target.closest('button');
      if (!b) return;
      if (b.hasAttribute('data-lay')) { chon.push(tron[+b.getAttribute('data-lay')]); ve(); }
      else if (b.hasAttribute('data-bo')) { chon.splice(+b.getAttribute('data-bo'), 1); ve(); }
      else if (b.hasAttribute('data-kt')) {
        var cau = chon.map(function (o) { return o.w; }).join('');
        var dung = zhKhong(cau) === zhKhong(x.zh);
        $('#ntHoiCau .ntc-xep-dong').classList.add(dung ? 'dung' : 'sai');
        ctx.xong(dung, dung ? 'Đúng rồi! <b lang="zh">' + esc(x.zh) + '</b>' : 'Chưa đúng — câu đúng: <b lang="zh">' + esc(x.zh) + '</b>', x.zh);
      }
    }
    ganMot(hop, bam);
    $('#ntHoiCau').onclick = bam;
    ve();
    return true;
  }

  /* ---------------- dich Viet <-> Trung (chon) ---------------- */
  function cauDich(ctx, k) {
    var esc = ctx.esc, ds = ctx.cau.dich, x = ds[Math.floor(Math.random() * ds.length)];
    // dap an nhieu: cau cung bai co do dai gan nhau
    var khac = ctx.tron(ds.filter(function (y) { return y.zh !== x.zh && y.vn !== x.vn; }))
      .sort(function (a, b) { return Math.abs(a.zh.length - x.zh.length) - Math.abs(b.zh.length - x.zh.length); }).slice(0, 3);
    if (khac.length < 2) return false;
    var lua = ctx.tron([x].concat(khac));
    if (k === 'vt') {
      $('#ntHoiCau').innerHTML = '<p class="nt-hoi-hd">🇻🇳→🇨🇳 Câu tiếng Trung nào đúng nghĩa?</p><p class="nt-hoi-vn ntc-cau">' + esc(x.vn) + '</p>';
      $('#ntHoiChon').innerHTML = lua.map(function (y, i) { return '<button type="button" class="zh ntc-lua" data-d="' + i + '" lang="zh">' + esc(y.zh) + '</button>'; }).join('');
    } else {
      $('#ntHoiCau').innerHTML = '<p class="nt-hoi-hd">🇨🇳→🇻🇳 Câu này nghĩa là gì?</p><button type="button" class="nt-hoi-zh ntc-cau-zh" data-doc="' + esc(x.zh) + '" lang="zh">' + esc(x.zh) + ' 🔊</button>' +
        (ctx.dk.py === 0 || !x.py ? '' : '<p class="nt-hoi-py">' + esc(x.py) + '</p>');
      $('#ntHoiChon').innerHTML = lua.map(function (y, i) { return '<button type="button" class="ntc-lua" data-d="' + i + '">' + esc(y.vn) + '</button>'; }).join('');
    }
    $('#ntHoiChon').classList.add('ntc-doc');
    ganMot($('#ntHoiChon'), function (e) {
      var b = e.target.closest('button[data-d]');
      if (!b || ctx.hoi.khoa) return;
      var y = lua[+b.getAttribute('data-d')], dung = y === x;
      Array.prototype.forEach.call($('#ntHoiChon').querySelectorAll('button[data-d]'), function (n, j) { if (lua[j] === x) n.classList.add('dung'); });
      if (!dung) b.classList.add('sai');
      $('#ntHoiChon').classList.remove('ntc-doc');
      ctx.xong(dung, (dung ? 'Đúng rồi! ' : 'Chưa đúng — ') + '<b lang="zh">' + esc(x.zh) + '</b> · ' + esc(x.vn), x.zh);
    });
    return true;
  }

  /* ---------------- noi 4 tu voi 4 nghia ---------------- */
  function cauNoi(ctx) {
    var esc = ctx.esc;
    var tu = ctx.tron(ctx.tu.filter(function (v) { return v.zh && v.vn; }).slice()), bon = [], thayVn = {};
    for (var i = 0; i < tu.length && bon.length < 4; i++) { if (!thayVn[tu[i].vn]) { thayVn[tu[i].vn] = 1; bon.push(tu[i]); } }
    if (bon.length < 4) return false;
    var phai = ctx.tron(bon.slice()), daNoi = {}, chonTrai = -1, sai = 0;
    $('#ntHoiCau').innerHTML = '<p class="nt-hoi-hd">🔗 Nối mỗi từ với nghĩa đúng</p><p class="ntc-goi">Chạm 1 chữ Hán rồi chạm nghĩa của nó.</p>';
    var hop = $('#ntHoiChon');
    function ve() {
      hop.innerHTML = '<div class="ntc-noi"><div class="ntc-noi-cot">' + bon.map(function (v, j) {
        return '<button type="button" class="ntc-noi-o zh' + (daNoi[j] != null ? ' xong' : '') + (chonTrai === j ? ' chon' : '') + '" data-t="' + j + '"' + (daNoi[j] != null ? ' disabled' : '') + ' lang="zh">' + esc(v.zh) + '</button>';
      }).join('') + '</div><div class="ntc-noi-cot">' + phai.map(function (v, j) {
        var xong = Object.keys(daNoi).some(function (t) { return daNoi[t] === j; });
        return '<button type="button" class="ntc-noi-o' + (xong ? ' xong' : '') + '" data-p="' + j + '"' + (xong ? ' disabled' : '') + '>' + esc(v.vn) + '</button>';
      }).join('') + '</div></div>';
    }
    ganMot(hop, function (e) {
      if (ctx.hoi.khoa) return;
      var b = e.target.closest('button');
      if (!b) return;
      if (b.hasAttribute('data-t')) { chonTrai = +b.getAttribute('data-t'); ve(); ctx.doc(bon[chonTrai].zh); return; }
      if (b.hasAttribute('data-p')) {
        if (chonTrai < 0) { $('#ntHoiBao').textContent = 'Chạm chữ Hán trước nhé.'; return; }
        var j = +b.getAttribute('data-p');
        if (phai[j] === bon[chonTrai]) {
          daNoi[chonTrai] = j; chonTrai = -1; ve();
          if (Object.keys(daNoi).length === 4) {
            var dung = sai <= 1;
            ctx.xong(dung, dung ? 'Nối đúng hết rồi! ' + (sai ? '(nhầm 1 lần)' : '') : 'Đã nối xong nhưng nhầm ' + sai + ' lần — ôn lại 4 từ này nhé: ' + bon.map(function (v) { return '<b lang="zh">' + esc(v.zh) + '</b> ' + esc(v.vn); }).join(' · '), '');
          }
        } else {
          sai++;
          b.classList.add('sai');
          setTimeout(function () { b.classList.remove('sai'); }, 450);
          $('#ntHoiBao').textContent = 'Chưa đúng cặp — thử lại!';
        }
      }
    });
    ve();
    return true;
  }

  /* ---------------- tu go dap an ---------------- */
  function cauGo(ctx) {
    var esc = ctx.esc, ds = ctx.tu.filter(function (v) { return v.py && v.zh; });
    if (!ds.length) return false;
    var v = ds[Math.floor(Math.random() * ds.length)];
    var kieu = Math.random() < 0.5 ? 'nghia' : 'chu'; // nghia -> go pinyin / chu Han; chu Han -> go pinyin
    $('#ntHoiCau').innerHTML = kieu === 'nghia'
      ? '<p class="nt-hoi-hd">⌨ Gõ từ tiếng Trung có nghĩa:</p><p class="nt-hoi-vn">' + esc(v.vn) + '</p><p class="ntc-goi">Gõ chữ Hán hoặc pinyin (không cần dấu thanh)</p>'
      : '<p class="nt-hoi-hd">⌨ Gõ pinyin của từ:</p><button type="button" class="nt-hoi-zh" data-doc="' + esc(v.zh) + '" lang="zh">' + esc(v.zh) + '</button><p class="ntc-goi">Không cần dấu thanh · vd: nihao hoặc ni3hao3</p>';
    var hop = $('#ntHoiChon');
    hop.innerHTML = '<form class="ntc-go" autocomplete="off"><input type="text" autocapitalize="off" spellcheck="false" aria-label="Gõ câu trả lời" placeholder="Gõ ở đây…"><button type="submit">Trả lời ✓</button></form>' +
      '<button type="button" class="ntc-bo" data-bo-qua>Mình chưa nhớ — xem đáp án</button>';
    var f = hop.querySelector('form'), o = f.querySelector('input');
    setTimeout(function () { try { o.focus(); } catch (e) { /* bo qua */ } }, 80);
    function cham(boQua) {
      if (ctx.hoi.khoa) return;
      var g = o.value.trim();
      if (!g && !boQua) { o.focus(); return; }
      var dung = !boQua && (zhKhong(g) === zhKhong(v.zh) || (pyKhong(g) && cacPy(v.py).indexOf(pyKhong(g)) >= 0));
      o.disabled = true;
      o.classList.add(dung ? 'dung' : 'sai');
      ctx.xong(dung, (dung ? 'Đúng rồi! ' : 'Đáp án: ') + '<b lang="zh">' + esc(v.zh) + '</b> ' + esc(v.py) + ' — ' + esc(v.vn), v.zh);
    }
    f.addEventListener('submit', function (e) { e.preventDefault(); cham(false); });
    hop.querySelector('[data-bo-qua]').addEventListener('click', function () { cham(true); });
    return true;
  }

  // gan 1 trinh nghe click cho hop (bo trinh cu cua cau truoc)
  function ganMot(hop, fn) {
    if (hop._ntc) hop.removeEventListener('click', hop._ntc);
    hop._ntc = fn;
    hop.addEventListener('click', fn);
    // cau kieu cu (button[data-i]) se xoa trinh nay khi ve lai — xem don()
  }
  // nong-trai.js ve cau kieu cu -> bo trinh kieu moi + class phu
  function don() {
    var hop = $('#ntHoiChon');
    if (hop && hop._ntc) { hop.removeEventListener('click', hop._ntc); hop._ntc = null; }
    if (hop) hop.classList.remove('ntc-doc');
    var c = $('#ntHoiCau');
    if (c) c.onclick = null;
  }

  window.NTCau = { thu: function (ctx) { don(); return thu(ctx); }, don: don };
})();
