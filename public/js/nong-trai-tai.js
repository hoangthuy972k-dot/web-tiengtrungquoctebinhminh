/* ══════════════════════════════════════════════════════════════════
   NONG TRAI — Nap module khi can (2026-11-24): trang nhe hon tren dien thoai yeu, hoc sinh thay y nhu cu.
   · Module nap sau nam trong <template data-nt-tai="ten"> o DUNG cho the <link>/<script> cu trong nong-trai.html
     (template khong tai gi). May chu van gan ?v= vao URL ben trong (sendVersionedHtml) -> file nap sau duoc cache /
     doi phien ban y nhu the <script> thuong. CSS chen lai dung cho template cu (thu tu cascade giu nguyen).
   · Mua le (Noel, Tet): chi nap khi may chu bao dang mua (st.kt.noel.mua, st.kt.nnm, st.kt.tet.mua) — hoac ngoai mua
     khi con thu can ve: cay thong Noel / nguoi tuyet / do Tet tren nong trai (cua em hoac ban dang tham, thu nho
     o thi tran), thiep / tat Noel chua mo, nhat ky co dong cua module do.
   · Bang chi dung khi mo (lai giong, hoi cho, tu thien): nut gia giong het nut that (cung id, cung cho); bam ->
     moBang -> veBang khong thay bang -> NTX.thieuBang: hien "Đang mở…", nap, ve lai. Nap xong nut that thay nut gia.
     Nap som khi co viec can hien (cham do, qua moi, nhat ky, thi tran co hoi cho, ruong giong lai).
   · Nap xong: goi lai cac moc module vua them (sau, sauVe) + ve lai thi tran neu dang mo -> nhu luc nap tu dau.
   Them module nap sau: boc the trong nong-trai.html bang <template data-nt-tai="ten">, roi them luat o NHOM / BANG /
   NK / xetVat duoi day. Module co ve gi len nong trai luc mo trang (radio, hom thu, thu cung...) thi de nap thuong.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var N = window.NTX;
  if (!N) return;
  var S = N.S, $ = N.$;

  /* ---------------- danh sach file tu cac <template data-nt-tai> ---------------- */
  var TEP = {}, THU_TU = [];
  Array.prototype.forEach.call(document.querySelectorAll('template[data-nt-tai]'), function (tpl) {
    var ten = tpl.getAttribute('data-nt-tai'), el = tpl.content && tpl.content.firstElementChild;
    if (!ten || !el) return;
    var t = TEP[ten] || (TEP[ten] = { css: [], js: [] });
    if (el.tagName === 'SCRIPT' && el.getAttribute('src')) { t.js.push(el.getAttribute('src')); if (THU_TU.indexOf(ten) < 0) THU_TU.push(ten); }
    else if (el.tagName === 'LINK' && el.getAttribute('href')) t.css.push({ href: el.getAttribute('href'), tpl: tpl });
  });

  var NOEL = ['noel', 'noel-thiep', 'noel-sangnhat', 'noel-tv', 'noel-namoi', 'noel-lich', 'noel-qua', 'noel-tuyet'];
  var TET = ['noel-namoi', 'tet']; // phao hoa giao thua (NTX.phaoHoa) + lop .nnm-* nam o nong-trai-noel-namoi
  // bang -> module can nap
  var BANG = {
    lai: ['lai'], hoicho: ['hoicho'], tuthien: ['tuthien'], tet: TET,
    'noel-cay': ['noel'], 'noel-thiep': ['noel', 'noel-thiep'], 'noel-tat': ['noel', 'noel-thiep'], 'noel-tuyet': ['noel', 'noel-tuyet'],
    'noel-lich': NOEL, 'noel-tv': NOEL, 'noel-qua': NOEL
  };
  // ten tam cho bang luc dang nap (giong ten module tu dat)
  var TIT = { lai: 'Phòng lai giống 育种室', hoicho: 'Hội chợ nông sản 农产品博览会', tuthien: '🎁 Từ thiện · Tặng quà', tet: 'Lễ hội Tết 春节' };
  // dong nhat ky (N.htmlNk) -> module ve dong do
  var NK = {
    hoicho: ['hoicho'], qtdi: ['tuthien'], qtden: ['tuthien'], qtcam: ['tuthien'], tetlx: TET, tetlxdi: TET,
    thiep: ['noel', 'noel-thiep'], tatden: ['noel', 'noel-thiep'], tatdi: ['noel', 'noel-thiep'], tatmo: ['noel', 'noel-thiep']
  };

  /* ---------------- nap ---------------- */
  var DA = {};      // ten -> Promise (dang nap / da nap)
  var XONG = {};    // ten -> true khi script da chay
  var hang = Promise.resolve(); // chen script theo dung thu tu cu (async=false), lo sau doi lo truoc
  function moi(ds) { return THU_TU.filter(function (t) { return ds.indexOf(t) >= 0 && !DA[t]; }); }
  function daCo(ds) { return ds.every(function (t) { return !TEP[t] || XONG[t]; }); }
  function chenCss(ds) {
    return Promise.all(ds.reduce(function (a, t) {
      return a.concat(TEP[t].css.map(function (c) {
        if (document.querySelector('link[rel="stylesheet"][href="' + c.href + '"]')) return Promise.resolve();
        return new Promise(function (ok) {
          var l = document.createElement('link');
          l.rel = 'stylesheet'; l.href = c.href;
          l.onload = l.onerror = function () { ok(); };
          c.tpl.parentNode.insertBefore(l, c.tpl);
          setTimeout(ok, 8000); // CSS treo: van cho chay JS
        });
      }));
    }, []));
  }
  function tai(ds) {
    var m = moi(ds);
    if (m.length) {
      // tai truoc JS song song voi CSS (preload), chay JS sau khi CSS da co -> khong nhay giao dien
      m.forEach(function (t) {
        TEP[t].js.forEach(function (src) {
          var p = document.createElement('link');
          p.rel = 'preload'; p.as = 'script'; p.href = src;
          document.head.appendChild(p);
        });
      });
      var css = chenCss(m), moc = { sau: N.sau.length, sauVe: N.sauVe.length };
      var lo = hang.then(function () { return css; }).then(function () {
        return Promise.all(m.map(function (t) { return chenJs(t); }));
      });
      hang = lo.catch(function () {});
      m.forEach(function (t, i) {
        DA[t] = lo.then(function (kq) { return kq[i]; }, function (e) { delete DA[t]; throw e; });
      });
      lo.then(function () { chayLai(moc); }, function () { chayLai(moc); });
    }
    return Promise.all(ds.filter(function (t) { return TEP[t]; }).map(function (t) { return DA[t]; }));
  }
  function chenJs(t) {
    var srcs = TEP[t].js;
    choBo(t);
    return Promise.all(srcs.map(function (src) {
      return new Promise(function (ok, loi) {
        var s = document.createElement('script');
        s.async = false; s.src = src;
        s.onload = function () { ok(); };
        s.onerror = function () { s.remove(); loi(new Error('nap ' + src)); };
        document.body.appendChild(s);
      });
    })).then(function () { XONG[t] = true; choXong(t, true); }, function (e) { choXong(t, false); throw e; });
  }
  // goi lai moc module vua them, nhu khi trang nhan trang thai / ve ban do lan dau
  function chayLai(moc) {
    if (!S.st) return;
    N.sau.slice(moc.sau).forEach(function (fn) { try { fn(S.st); } catch (e) { /* bo qua */ } });
    N.sauVe.slice(moc.sauVe).forEach(function (fn) { try { fn(); } catch (e) { /* bo qua */ } });
    var tt = $('#ntThiTran');
    if (tt && !tt.hidden && N.veThiTran && N.thiTran && N.thiTran()) { try { N.veThiTran(); } catch (e) { /* bo qua */ } }
  }

  /* ---------------- bang chua nap: NTX.thieuBang (goi tu veBang) ---------------- */
  N.thieuBang = function (l, than) {
    var ds = BANG[l];
    if (!ds || daCo(ds)) return false;
    $('#ntBangTit').textContent = TIT[l] || '';
    N.datTab([], '');
    than.innerHTML = '<p class="nt-trong">Đang mở…</p>';
    tai(ds).then(function () {
      var b = N.bangDang();
      if (b && b.loai === l) N.veBang();
    }, function () {
      var b = N.bangDang();
      if (b && b.loai === l) than.innerHTML = '<p class="nt-trong">Chưa tải được phần này — em kiểm tra mạng rồi mở lại nhé.</p>';
    });
    return true;
  };

  /* ---------------- nut gia (giong het nut module tu tao — sua module thi sua ca o day) ---------------- */
  var CHO = {}; // ten -> [{ el, ids }]
  function themCho(ten, el) { (CHO[ten] = CHO[ten] || []).push({ el: el, ids: [] }); }
  // truoc khi module chay: bo id nut gia de module tu tao nut that
  function choBo(t) {
    (CHO[t] || []).forEach(function (c) {
      c.ids = [c.el].concat(Array.prototype.slice.call(c.el.querySelectorAll('[id]'))).map(function (x) { var id = x.id; x.removeAttribute('id'); return [x, id]; });
    });
  }
  // module chay xong: nut that vao dung cho nut gia; loi thi tra id lai cho nut gia
  function choXong(t, ok) {
    (CHO[t] || []).forEach(function (c) {
      var id = c.ids.length ? c.ids[0][1] : '', that = id && document.getElementById(id);
      if (ok && that && that !== c.el) { if (c.el.parentNode) c.el.parentNode.replaceChild(that, c.el); }
      else c.ids.forEach(function (x) { x[0].id = x[1]; });
    });
    if (ok) delete CHO[t];
  }
  function nutThem(ten, id, mo, html, sau) {
    var luoi = $('#ntThemLuoi');
    if (!luoi || !TEP[ten] || $('#' + id)) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-them-o'; b.id = id; b.setAttribute('data-mo', mo);
    b.innerHTML = html;
    var a = sau();
    luoi.insertBefore(b, a ? a.nextSibling : null);
    themCho(ten, b);
  }
  // = taoNut() cua nong-trai-lai.js
  nutThem('lai', 'ntThemLai', 'lai', '<span class="nt-them-emo" aria-hidden="true">🧬</span><span class="nt-muc-chu"><b>Lai giống</b><small>ghép 2 cây thành giống mới 杂交</small></span>',
    function () { return $('#ntThemLuoi [data-mo="kt-xuong"]'); });
  // = taoNut() cua nong-trai-hoicho.js
  nutThem('hoicho', 'ntThemHc', 'hoicho', '<img src="/images/farm/hoicho-cup.svg" alt="" draggable="false"><span class="nt-muc-chu"><b>Hội chợ nông sản</b><small><span lang="zh">农产品博览会</span> · gửi đồ, bình chọn</small></span><i class="nt-cham" id="ntHcnCham" hidden></i>',
    function () { return $('#ntThemLai') || $('#ntThemLuoi [data-mo="kt-xuong"]'); });
  // = taoNutTt() cua nong-trai-hoicho.js (nut tren dau thi tran): bam -> nap -> bam nut that
  (function () {
    var hangNut = $('#ntThiTran .nt-tt-nut');
    if (!hangNut || !TEP.hoicho || $('#ntHcnTtNut')) return;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'nt-nut nt-nut-vang'; b.id = 'ntHcnTtNut';
    b.innerHTML = '🏆 Hội chợ';
    hangNut.insertBefore(b, hangNut.querySelector('[data-tt="ve"]') || null);
    themCho('hoicho', b);
    bamSauKhiNap(b, ['hoicho'], 'ntHcnTtNut');
  })();
  // nut co san trong HTML nhung su kien do module gan (vd. 🎁 Tặng quà khi sang tham ban — nong-trai-tuthien.js)
  function bamSauKhiNap(nut, ds, id) {
    if (!nut) return;
    nut.addEventListener('click', function (e) {
      if (daCo(ds)) return;
      e.stopImmediatePropagation();
      tai(ds).then(function () {
        var that = id ? document.getElementById(id) : nut;
        if (that) that.click();
      }, function () { N.bao('Chưa tải được — em kiểm tra mạng rồi thử lại nhé.', 'loi'); });
    });
  }
  if (TEP.tuthien) bamSauKhiNap($('#ntThamQua'), ['tuthien']);

  /* ---------------- khi nao can nap ---------------- */
  function laNoelThong(o) { return o.k === 'noel-thong'; }
  function kNguoiTuyet() { return (S.cat && S.cat.NTUYET && S.cat.NTUYET.K) || 'noel-tuyetnhan'; }
  // do vat tren ban do (cua em / ban dang tham) ma module ve them hoac giai thich khi cham
  function xetVat(ds, os) {
    if (!os || !os.length) return;
    var c = S.cat || {}, kt = kNguoiTuyet();
    os.forEach(function (o) {
      if (!o || !o.k) return;
      if (laNoelThong(o)) ds.push('noel');
      else if (o.k === kt) ds.push('noel', 'noel-tuyet');
      else if (/^tet-/.test(o.k) && c.TT && c.TT[o.k] && c.TT[o.k].mo) ds.push.apply(ds, TET);
      else if (o.k === 'o' && o.c && c.CAY && c.CAY[o.c] && c.CAY[o.c].lai) ds.push('lai');
    });
  }
  function nap(ds) {
    var can = moi(ds);
    if (can.length) tai(can).catch(function () { /* lan sau thu lai */ });
  }
  N.sau.push(function (st) {
    if (!st) return;
    var kt = st.kt || {}, ds = [];
    if ((kt.noel && kt.noel.mua) || kt.nnm) ds.push.apply(ds, NOEL);
    if (kt.noelTuyet && kt.noelTuyet.nguoi > 0) ds.push('noel', 'noel-tuyet');
    if (kt.noelTh && (kt.noelTh.thMoi > 0 || kt.noelTh.tat > 0)) ds.push('noel', 'noel-thiep');
    if (kt.tet && kt.tet.mua) ds.push.apply(ds, TET);
    if (kt.hc && kt.hc.nhan > 0) ds.push('hoicho');
    if (kt.qtMoi > 0) ds.push('tuthien');
    (st.nk || []).forEach(function (e) { if (e && NK[e.l]) ds.push.apply(ds, NK[e.l]); });
    xetVat(ds, st.o);
    nap(ds);
  });
  N.sauVe.push(function () {
    var d = N.duLieuBanDo(), ds = [];
    if (d) xetVat(ds, d.o);
    nap(ds);
  });
  N.sauTt.push(function (r) {
    if (!r) return;
    var ds = ['hoicho']; // bang tin hoi cho tren thi tran
    (r.ds || []).forEach(function (b) { if ((b.o || []).some(function (o) { return laNoelThong(o) && o.tr; })) ds.push('noel'); });
    nap(ds);
  });

  N.taiModule = tai; // (ds) -> Promise: module khac / thu nghiem
})();
