/* Bo suu tap the chu Han 汉字卡 (/the-chu)
   · GET /api/the-chu: the cua em (moi chu trong bai da hoc / duoc giao), may chu tu thu them the moi.
   · Luyen the: POST /api/the-chu/luyen (cau hoi, khong kem dap an) → POST /api/the-chu/tra-loi (may chu cham,
     cong diem thuan thuc co tran ngay). Cau dung cong sao qua SaoGame (/api/stars/game, tran sao tro choi).
   · Doc: DocZh (giong dung chung cua web). Viet chu: HanziWriter (/js/vendor), net lay tu du lieu bai hoc. */
(function () {
  'use strict';

  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function luuDoc(k, md) { try { return localStorage.getItem(k) || md; } catch (e) { return md; } }
  function luuGhi(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* bo qua */ } }

  var HANG_IC = { thuong: '', bac: '🥈', vang: '🥇', kc: '💎' };
  var HANG_TEN = { thuong: 'Thường', bac: 'Bạc', vang: 'Vàng', kc: 'Kim cương' };
  var HANG_ZH = { thuong: '普通', bac: '银卡', vang: '金卡', kc: '钻石' };
  var S = { du: null, xep: luuDoc('hyv_tc_xep', 'bo') === 'bai' ? 'bai' : 'bo', loc: 'all', tim: '', moi: {}, lt: null };

  /* ---------------- dang nhap & API ---------------- */
  function auth() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a : null; } catch (e) { return null; }
  }
  function goi(url, body) {
    var a = auth(), h = { 'Content-Type': 'application/json' };
    if (a) h.Authorization = 'Bearer ' + a.token;
    return fetch(url, body ? { method: 'POST', headers: h, body: JSON.stringify(body) } : { headers: h }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) { var e = new Error(j.error || 'Lỗi mạng, thử lại nhé.'); e.status = r.status; e.j = j; throw e; }
        return j;
      });
    });
  }

  /* ---------------- doc tieng Trung ---------------- */
  function noi(t) {
    if (!t) return;
    if (window.DocZh) { window.DocZh.doc(t, { m: 'tu' }); return; }
    try {
      var u = new SpeechSynthesisUtterance(t); u.lang = 'zh-CN'; u.rate = 0.8;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) { /* may khong doc duoc */ }
  }

  var hwHua = null;
  function napHW() {
    if (typeof HanziWriter !== 'undefined') return Promise.resolve();
    if (hwHua) return hwHua;
    hwHua = new Promise(function (ok) {
      var s = document.createElement('script');
      s.src = '/js/vendor/hanzi-writer.min.js';
      s.onload = function () { ok(); };
      s.onerror = function () { ok(); };
      document.head.appendChild(s);
    });
    return hwHua;
  }

  /* ---------------- tai bo suu tap ---------------- */
  function hienPhan(id) {
    ['tcDang', 'tcKhach', 'tcChuaHoc'].forEach(function (x) { $('#' + x).hidden = x !== id; });
    ['tcTong', 'tcLoc', 'tcAlbum'].forEach(function (x) { $('#' + x).hidden = !!id; });
  }
  function tai(imLang) {
    if (!auth()) { hienPhan('tcKhach'); return Promise.resolve(); }
    if (!imLang) hienPhan('tcDang');
    return goi('/api/the-chu').then(function (d) {
      S.du = d;
      S.theoChu = {};
      d.the.forEach(function (t, i) { t.i = i; S.theoChu[t.c] = t; });
      if (!d.the.length) { hienPhan('tcChuaHoc'); return; }
      hienPhan('');
      veTong();
      veLoc();
      veAlbum();
      var moi = d.the.filter(function (t) { return t.n; });
      if (moi.length && !imLang) moThe(moi);
    }).catch(function (e) {
      if (e.status === 401) { hienPhan('tcKhach'); return; }
      hienPhan('tcDang');
      $('#tcDang').textContent = '⚠️ ' + e.message;
    });
  }

  function hangSau(m) {
    var h = S.du.hang, cur = h[0], sau = null;
    for (var i = 0; i < h.length; i++) { if (m >= h[i].tu) { cur = h[i]; sau = h[i + 1] || null; } }
    return { cur: cur, sau: sau, pt: sau ? Math.max(0, Math.min(100, Math.round((m - cur.tu) / (sau.tu - cur.tu) * 100))) : 100 };
  }

  function veTong() {
    var d = S.du, cap = d.cap;
    $('#tcCo').textContent = cap.tong ? cap.co : d.the.length;
    $('#tcTongCap').textContent = cap.tong || d.the.length;
    $('#tcCap').textContent = cap.ten || '';
    $('#tcCap').hidden = !cap.ten;
    var pt = cap.tong ? Math.round(cap.co / cap.tong * 100) : 100;
    $('#tcThanhI').style.width = pt + '%';
    $('#tcThanh').setAttribute('aria-valuenow', pt);
    $('#tcThanh').setAttribute('aria-valuemin', 0);
    $('#tcThanh').setAttribute('aria-valuemax', 100);
    var ngoai = d.the.length - cap.co;
    $('#tcTongPhu').textContent = (cap.tong ? 'Còn ' + (cap.tong - cap.co) + ' chữ của ' + cap.ten + ' đang chờ em học. ' : '') +
      (ngoai > 0 ? 'Cả album có ' + d.the.length + ' thẻ (gồm ' + ngoai + ' thẻ ở cấp khác).' : '');
    $('#tcHangDem').innerHTML = ['thuong', 'bac', 'vang', 'kc'].map(function (k) {
      return '<span class="tc-hd hg-' + k + '"><i aria-hidden="true"></i>' + HANG_TEN[k] + ' <b>' + (d.dem[k] || 0) + '</b></span>';
    }).join('');
    var h = d.hang;
    $('#tcNgay').innerHTML = '⚡ Luyện thẻ hôm nay: <b>' + d.ngay.diem + '/' + d.ngay.tran + '</b> điểm thuần thục · mỗi câu đúng +' + d.ngay.cau +
      ', mỗi chữ tối đa +' + d.ngay.chu + '/ngày · Bạc ' + h[1].tu + ' · Vàng ' + h[2].tu + ' · Kim cương ' + h[3].tu + ' điểm';
    $('#tcLuyenNut').disabled = d.the.length < 4;
    $('#tcLuyenNut').title = d.the.length < 4 ? 'Cần ít nhất 4 thẻ để luyện' : '';
  }

  function veLoc() {
    var d = S.du;
    $('#tcLocHang').innerHTML = [['all', 'Tất cả', d.the.length]].concat(['thuong', 'bac', 'vang', 'kc'].map(function (k) {
      return [k, (HANG_IC[k] ? HANG_IC[k] + ' ' : '') + HANG_TEN[k], d.dem[k] || 0];
    })).map(function (x) {
      return '<button type="button" class="tc-chip' + (S.loc === x[0] ? ' is-on' : '') + '" data-loc="' + x[0] + '">' + x[1] + ' <small>' + x[2] + '</small></button>';
    }).join('');
    $all('[data-xep]').forEach(function (b) { b.classList.toggle('is-on', b.getAttribute('data-xep') === S.xep); });
  }

  function theHtml(t, them) {
    var hs = hangSau(t.m);
    return '<button type="button" class="tc-the hg-' + t.hg + '" data-c="' + esc(t.c) + '" aria-label="Thẻ ' + esc(t.c) + ' ' + esc(t.p) + ', hạng ' + HANG_TEN[t.hg] + '">' +
      '<span class="tc-the-khung"><span class="tc-the-mat">' +
      '<span class="tc-the-chu" lang="zh">' + esc(t.c) + '</span>' +
      '<span class="tc-the-py">' + esc(t.p) + '</span>' +
      '</span>' +
      (HANG_IC[t.hg] ? '<span class="tc-the-goc" aria-hidden="true">' + HANG_IC[t.hg] + '</span>' : '') +
      (t.s ? '<span class="tc-the-st" aria-hidden="true" title="Số nét">' + t.s + '</span>' : '') +
      '<span class="tc-the-tien" aria-hidden="true"><i style="width:' + hs.pt + '%"></i></span>' +
      '</span>' + ((them !== false && (t.n || S.moi[t.c])) ? '<span class="tc-the-moi">MỚI</span>' : '') + '</button>';
  }

  function khop(t) {
    if (S.loc !== 'all' && t.hg !== S.loc) return false;
    var q = S.tim.trim().toLowerCase();
    if (!q) return true;
    var bo = function (s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').toLowerCase(); };
    return t.c === q || t.r === q || bo(t.p).indexOf(bo(q)) === 0 || bo(t.h).indexOf(bo(q)) === 0 || t.p.toLowerCase() === q;
  }

  function veAlbum() {
    var d = S.du, ds = d.the.filter(khop), nhom = [], html = '';
    if (S.xep === 'bo') {
      var theoBo = {};
      ds.forEach(function (t) {
        var k = t.r || '?';
        (theoBo[k] = theoBo[k] || { k: k, ten: t.rn, ds: [] }).ds.push(t);
      });
      nhom = Object.keys(theoBo).map(function (k) { return theoBo[k]; }).sort(function (a, b) {
        if (a.k === '?') return 1; if (b.k === '?') return -1;
        return b.ds.length - a.ds.length || (a.k < b.k ? -1 : 1);
      });
      nhom.forEach(function (g) {
        g.ds.sort(function (a, b) { return (a.s || 99) - (b.s || 99) || a.i - b.i; });
        var tieu = g.k === '?' ? 'Chưa có thông tin bộ thủ' : '<span class="tc-nhom-zh" lang="zh">' + esc(g.k) + '</span> Bộ ' + esc(g.ten.replace(/^\S+\s*/, ''));
        html += '<section class="tc-nhom"><h2 class="tc-nhom-dau">' + tieu + ' <small>' + g.ds.length + ' thẻ</small></h2>' +
          '<div class="tc-luoi">' + g.ds.map(function (t) { return theHtml(t); }).join('') + '</div></section>';
      });
    } else {
      var capBai = {};
      (d.cap.bai || []).forEach(function (b) { capBai[b.u] = b; });
      d.bai.forEach(function (b) {
        var cua = ds.filter(function (t) { return t.u === b.u; });
        if (!cua.length) return;
        var cb = capBai[b.u];
        html += '<section class="tc-nhom"><h2 class="tc-nhom-dau">' + esc(b.cap) + (b.so != null ? ' · Bài ' + esc(b.so) : '') +
          (b.zh ? ' <span lang="zh">' + esc(b.zh) + '</span>' : '') +
          ' <small>' + esc(b.ten) + (cb ? ' · ' + cb.co + '/' + cb.tong + ' chữ' : '') + '</small></h2>' +
          '<div class="tc-luoi">' + cua.map(function (t) { return theHtml(t); }).join('') + '</div></section>';
      });
      // bai chua mo cua cap em dang hoc: chi hien so luong (khong lo chu)
      if (S.loc === 'all' && !S.tim.trim()) {
        var co = {};
        d.bai.forEach(function (b) { co[b.u] = 1; });
        var khoa = (d.cap.bai || []).filter(function (b) { return !co[b.u] && b.tong; });
        if (khoa.length) {
          html += '<section class="tc-nhom"><h2 class="tc-nhom-dau">🔒 Thẻ đang chờ mở <small>' + esc(d.cap.ten) + '</small></h2>' +
            khoa.map(function (b) {
              return '<div class="tc-khoa"><span aria-hidden="true">🎴</span><span><b>Bài ' + esc(b.so) + '</b> · ' + esc(b.ten) +
                ' — <b>' + b.tong + '</b> thẻ chờ em học bài này để mở</span></div>';
            }).join('') + '</section>';
        }
      }
    }
    $('#tcAlbum').innerHTML = html || '<p class="tc-rong">Không có thẻ nào khớp — thử bỏ bộ lọc nhé.</p>';
  }

  /* ---------------- chi tiet the ---------------- */
  var ctMo = null;
  function moPhu(el) { el.hidden = false; document.body.style.overflow = 'hidden'; }
  function dongPhu(el) {
    el.hidden = true;
    if (!$all('.tc-phu').some(function (x) { return !x.hidden; })) document.body.style.overflow = '';
  }
  function moChiTiet(c) {
    var t = S.theoChu[c];
    if (!t) return;
    ctMo = c;
    var hop = $('#tcChiTiet'), noiDung = $('#tcCtNoi');
    noiDung.innerHTML = '<p class="tc-dang">Đang mở thẻ…</p>';
    moPhu(hop);
    goi('/api/the-chu/chu/' + encodeURIComponent(c)).then(function (x) {
      if (ctMo !== c) return;
      var hs = hangSau(x.m);
      var h = '<div class="tc-ct-dau">' +
        '<div class="tc-to hg-' + x.hg + '"><div class="tc-the-mat"><span class="tc-the-chu" lang="zh">' + esc(x.c) + '</span></div></div>' +
        '<div class="tc-ct-ten"><h2 id="tcCtTen">' + esc(x.p || '') + '</h2>' +
        (x.h ? '<p class="tc-ct-hv">Hán Việt: ' + esc(x.h) + '</p>' : '') +
        (x.nghia ? '<p class="tc-ct-nghia">' + esc(x.nghia) + '</p>' : '') +
        '<span class="tc-ct-hang hg-' + x.hg + '">' + (HANG_IC[x.hg] ? HANG_IC[x.hg] + ' ' : '') + 'Thẻ ' + HANG_TEN[x.hg] + ' <span lang="zh">' + HANG_ZH[x.hg] + '</span></span>' +
        '</div></div>';
      h += '<div class="tc-ct-nut">' +
        '<button type="button" class="tc-nut" data-noi="' + esc(x.c) + '">🔊 Nghe</button>' +
        (x.net ? '<button type="button" class="tc-nut" id="tcCtViet">✍️ Xem cách viết</button>' : '') +
        '<button type="button" class="tc-nut tc-nut-chinh" id="tcCtLuyen">⚡ Luyện chữ này</button></div>' +
        '<div class="tc-hw" id="tcCtHw" hidden><div class="tc-hw-o" id="tcCtHwO"></div></div>';
      h += '<div class="tc-ct-o"><h3>Độ thuần thục</h3>' +
        '<div class="tc-tien-ct"><i style="width:' + hs.pt + '%"></i></div>' +
        '<p>' + (hs.sau ? '<b>' + x.m + '/' + hs.sau.tu + '</b> điểm — còn ' + (hs.sau.tu - x.m) + ' điểm nữa lên thẻ <b>' + hs.sau.ten + '</b>.' : '<b>' + x.m + '</b> điểm — thẻ đã đạt hạng cao nhất!') +
        ' Hôm nay chữ này còn nhận được <b>+' + x.con + '</b>.</p></div>';
      var o = [];
      if (x.boThu) o.push('<div><span>Bộ thủ 部首</span><b>' + esc(x.boThu) + '</b></div>');
      if (x.s) o.push('<div><span>Số nét 笔画</span><b>' + x.s + ' nét</b></div>');
      if (x.bai) o.push('<div><span>Học ở bài</span><b>' + esc(x.bai.cap) + (x.bai.so != null ? ' · Bài ' + esc(x.bai.so) : '') + '</b></div>');
      if (o.length) h += '<div class="tc-ct-o"><div class="tc-ct-luoi">' + o.join('') + '</div></div>';
      if (x.tu && x.tu.length) {
        h += '<div class="tc-ct-o"><h3>Từ trong bài 课文词语</h3>' + x.tu.map(function (w) {
          return '<div class="tc-tu"><span class="tc-tu-zh" lang="zh">' + esc(w.zh) + '</span><span><span class="tc-tu-py">' + esc(w.py) + '</span><br><span class="tc-tu-vn">' + esc(w.vn) + '</span></span>' +
            '<button type="button" class="tc-loa" data-noi="' + esc(w.zh) + '" aria-label="Nghe ' + esc(w.zh) + '">🔊</button></div>';
        }).join('') +
        (x.cau ? '<div class="tc-tu"><span><span class="tc-tu-zh" lang="zh" style="font-size:17px">' + esc(x.cau.zh) + '</span><br><span class="tc-tu-py">' + esc(x.cau.py) + '</span><br><span class="tc-tu-vn">' + esc(x.cau.vn) + '</span></span>' +
          '<button type="button" class="tc-loa" data-noi="' + esc(x.cau.zh) + '" aria-label="Nghe câu ví dụ">🔊</button></div>' : '') + '</div>';
      }
      if (x.pt) {
        h += '<div class="tc-ct-o"><h3>Chuyện của chữ 字源</h3>' +
          (x.pt.loai ? '<p><b>' + esc(x.pt.loai) + '</b></p>' : '') +
          '<p>' + esc(x.pt.meo) + '</p>' +
          (x.pt.thuTu ? '<p><small>Cấu tạo: ' + esc(x.pt.thuTu) + '</small></p>' : '') +
          (x.pt.nham ? '<p><small>Dễ nhầm: <span lang="zh">' + esc(x.pt.nham) + '</span></small></p>' : '') + '</div>';
      }
      noiDung.innerHTML = h;
      var bV = $('#tcCtViet');
      if (bV) bV.addEventListener('click', function () { xemCachViet(x); });
      $('#tcCtLuyen').addEventListener('click', function () { dongPhu(hop); batDauLuyen(x.c); });
    }).catch(function (e) { noiDung.innerHTML = '<p class="tc-dang">⚠️ ' + esc(e.message) + '</p>'; });
  }
  function xemCachViet(x) {
    var o = $('#tcCtHw'), hop = $('#tcCtHwO');
    o.hidden = false; hop.innerHTML = '';
    napHW().then(function () {
      if (typeof HanziWriter === 'undefined') { hop.textContent = 'Không tải được phần viết chữ.'; return; }
      var w = HanziWriter.create(hop, x.c, {
        width: 200, height: 200, padding: 12, showOutline: true, strokeColor: '#2b1d3a', radicalColor: '#b5361f',
        strokeAnimationSpeed: 1, delayBetweenStrokes: 220,
        charDataLoader: function () { return x.net; }
      });
      w.animateCharacter();
    });
  }

  /* ---------------- mo the moi ---------------- */
  function moThe(moi) {
    var hop = $('#tcMo'), toi = 12;
    moi.forEach(function (t) { S.moi[t.c] = 1; });
    $('#tcMoTen').textContent = '✨ Em mở được ' + moi.length + ' thẻ chữ mới! 新卡';
    $('#tcMoBo').innerHTML = moi.slice(0, toi).map(function (t, i) {
      return '<div class="tc-mo-the" style="--tre:' + (0.25 + i * 0.12).toFixed(2) + 's">' + theHtml(t, false) + '<div class="tc-mo-lung" aria-hidden="true">汉</div></div>';
    }).join('');
    $('#tcMoThem').textContent = moi.length > toi ? '+ ' + (moi.length - toi) + ' thẻ khác đã vào album' : 'Ôn luyện để nâng thẻ lên Bạc, Vàng, Kim cương nhé!';
    moPhu(hop);
    $all('.tc-the', hop).forEach(function (b) { b.tabIndex = -1; });
    $('#tcMoXong').focus();
  }
  $('#tcMoXong').addEventListener('click', function () {
    dongPhu($('#tcMo'));
    goi('/api/the-chu/da-xem', {}).catch(function () { /* lan sau xem lai */ });
    if (S.du) S.du.the.forEach(function (t) { t.n = 0; });
  });

  /* ---------------- luyen the ---------------- */
  function batDauLuyen(chu) {
    var hop = $('#tcLuyen');
    $('#tcLtNoi').innerHTML = '<p class="tc-dang">Đang xào bài…</p>';
    $('#tcLtCham').innerHTML = '';
    $('#tcLtDiem').textContent = '';
    moPhu(hop);
    goi('/api/the-chu/luyen', chu ? { chu: chu } : {}).then(function (d) {
      S.lt = { id: d.id, cau: d.cau, i: 0, dung: 0, diem: d.ngay.diem, tran: d.ngay.tran, them: 0, len: [], kq: [] };
      if (window.SaoGame) window.SaoGame.batDauVan();
      veCau();
    }).catch(function (e) {
      $('#tcLtNoi').innerHTML = '<div class="tc-ket"><p>⚠️ ' + esc(e.message) + '</p><div class="tc-ket-nut"><a class="tc-nut" href="/">Đi học bài</a></div></div>';
    });
  }
  function veCham() {
    var L = S.lt;
    $('#tcLtCham').innerHTML = L.cau.map(function (q, i) {
      var k = L.kq[i];
      return '<i class="' + (k === true ? 'is-dung' : k === false ? 'is-sai' : i === L.i ? 'is-nay' : '') + '"></i>';
    }).join('');
    $('#tcLtDiem').textContent = 'Hôm nay ' + L.diem + '/' + L.tran + ' điểm';
  }
  function veCau() {
    var L = S.lt, q = L.cau[L.i];
    if (!q) { ketThuc(); return; }
    veCham();
    var h = q.hoi, tieu = '', than = '';
    if (q.k === 'nghia') { tieu = 'Chữ này nghĩa là gì?'; than = '<div class="tc-cau-zh" lang="zh">' + esc(h.zh) + '</div>'; }
    else if (q.k === 'chu') { tieu = 'Chữ nào đọc là…'; than = '<div class="tc-cau-py">' + esc(h.py) + '</div>'; }
    else if (q.k === 'thanh') { tieu = 'Chữ này đọc thanh mấy?'; than = '<div class="tc-cau-zh" lang="zh">' + esc(h.zh) + '</div><div class="tc-cau-goi">' + esc(h.py0) + ' + ?</div>'; }
    else if (q.k === 'tu') { tieu = 'Điền chữ còn thiếu vào từ'; than = '<div class="tc-cau-tu" lang="zh">' + esc(h.tu) + '</div><p class="tc-cau-vn">' + esc(h.vn) + '</p>'; }
    else if (q.k === 'viet') {
      tieu = 'Viết chữ này 写一写';
      than = (h.tu ? '<div class="tc-cau-tu" lang="zh">' + esc(h.tu) + '</div>' : '') +
        '<p class="tc-cau-vn"><b>' + esc(h.py) + '</b> · ' + esc(h.vn) + '</p>' +
        '<div class="tc-hw"><div class="tc-hw-o" id="tcLtHw"></div></div><p class="tc-viet-tb" id="tcLtVietTb">Viết từng nét theo đúng thứ tự nhé.</p>';
    }
    var zh = q.k === 'chu' || q.k === 'tu';
    var lua = q.k === 'viet'
      ? '<div class="tc-lua tc-lua-1"><button type="button" data-chon="-1">Bỏ qua câu này</button></div>'
      : '<div class="tc-lua">' + q.lua.map(function (x, i) {
        return '<button type="button" data-chon="' + i + '"' + (zh ? ' class="is-zh" lang="zh"' : '') + '>' + esc(x) + '</button>';
      }).join('') + '</div>';
    $('#tcLtNoi').innerHTML = '<div class="tc-cau"><p class="tc-cau-hoi">' + (L.i + 1) + '/' + L.cau.length + ' · ' + tieu + '</p>' + than + '</div>' + lua + '<div id="tcLtKq"></div>';
    var nut = $('#tcLtNoi [data-chon]');
    if (nut && q.k !== 'viet') nut.focus();
    if (q.k === 'viet') {
      napHW().then(function () {
        var o = $('#tcLtHw'), tb = $('#tcLtVietTb');
        if (!o || S.lt !== L || L.cau[L.i] !== q) return;
        if (typeof HanziWriter === 'undefined') { tb.textContent = 'Không tải được ô viết chữ — bấm Bỏ qua.'; return; }
        var w = HanziWriter.create(o, 'X', {
          width: 200, height: 200, padding: 12, showOutline: false, showCharacter: false, showHintAfterMisses: 3,
          strokeColor: '#2b1d3a', highlightColor: '#4caf50', drawingColor: '#2b1d3a', drawingWidth: 18,
          charDataLoader: function () { return h.net; }
        });
        w.quiz({
          onMistake: function () { tb.textContent = '❌ Chưa đúng nét, thử lại nhé!'; },
          onCorrectStroke: function () { tb.textContent = '✅ Đúng rồi! Viết tiếp nét sau…'; },
          onComplete: function () { tb.textContent = '🎉 Viết đúng rồi!'; setTimeout(function () { traLoi(0); }, 450); }
        });
      });
    }
  }
  function traLoi(chon) {
    var L = S.lt, q = L.cau[L.i];
    if (!q || L.dang || L.kq[L.i] !== undefined) return;
    L.dang = true;
    $all('#tcLtNoi [data-chon]').forEach(function (b) { b.disabled = true; });
    goi('/api/the-chu/tra-loi', { id: L.id, i: L.i, chon: chon }).then(function (r) {
      L.dang = false;
      L.kq[L.i] = r.dung;
      if (r.dung) { L.dung++; if (window.SaoGame) window.SaoGame.dung(); } else if (window.SaoGame) window.SaoGame.sai();
      L.them += r.diem; L.diem = r.np;
      var t = S.theoChu[r.c];
      if (t) { t.m = r.m; t.hg = r.hg; }
      if (r.lenHang && t && L.len.indexOf(t) < 0) L.len.push(t);
      if (q.k !== 'viet') {
        var bs = $all('#tcLtNoi [data-chon]');
        if (bs[r.dap]) bs[r.dap].classList.add('is-dung');
        if (!r.dung && bs[chon]) bs[chon].classList.add('is-sai');
      }
      var ghiChu = '';
      if (r.dung) {
        ghiChu = r.diem ? '+' + r.diem + ' điểm thuần thục' :
          r.ly === 'chu' ? 'Chữ này hôm nay đã đủ điểm — mai luyện tiếp nhé' :
          r.ly === 'ngay' ? 'Hôm nay em đã đủ ' + r.tran + ' điểm luyện thẻ' :
          r.ly === 'nhanh' ? 'Trả lời nhanh quá nên chưa tính điểm' : '';
      }
      var tieu = r.dung ? '✅ Đúng rồi!' : chon === -1 ? '⏭ Bỏ qua' : '❌ Chưa đúng';
      $('#tcLtKq').innerHTML = '<div class="tc-kq ' + (r.dung ? 'is-dung' : 'is-sai') + '">' +
        '<span class="tc-kq-chu" lang="zh">' + esc(r.c) + '</span>' +
        '<span class="tc-kq-noi"><b>' + tieu + '</b> ' + (t ? esc(t.p) + (t.h ? ' · ' + esc(t.h) : '') : '') +
        (ghiChu ? '<br>' + esc(ghiChu) : '') +
        (r.lenHang ? '<br><span class="tc-len-hang tc-ct-hang hg-' + r.hg + '">' + HANG_IC[r.hg] + ' Lên thẻ ' + HANG_TEN[r.hg] + '!</span>' : '') + '</span>' +
        '<button type="button" class="tc-nut tc-nut-chinh" id="tcLtTiep">' + (L.i + 1 < L.cau.length ? 'Tiếp →' : 'Xem kết quả') + '</button></div>';
      veCham();
      noi(r.c);
      $('#tcLtTiep').focus();
    }).catch(function (e) {
      L.dang = false;
      if (e.status === 410) { $('#tcLtNoi').innerHTML = '<div class="tc-ket"><p>' + esc(e.message) + '</p><div class="tc-ket-nut"><button type="button" class="tc-nut tc-nut-chinh" data-lai>⚡ Lượt mới</button></div></div>'; return; }
      $all('#tcLtNoi [data-chon]').forEach(function (b) { b.disabled = false; });
      $('#tcLtKq').innerHTML = '<p class="tc-viet-tb">⚠️ ' + esc(e.message) + '</p>';
    });
  }
  function ketThuc() {
    var L = S.lt;
    veCham();
    var tong = L.cau.length;
    $('#tcLtNoi').innerHTML = '<div class="tc-ket">' +
      '<div class="tc-ket-so">' + L.dung + '/' + tong + '</div>' +
      '<h2>' + (L.dung === tong ? '🎉 Tuyệt vời!' : L.dung >= tong / 2 ? '👍 Giỏi lắm!' : '💪 Cố lên nhé!') + '</h2>' +
      '<p>+' + L.them + ' điểm thuần thục · hôm nay ' + L.diem + '/' + L.tran + '</p>' +
      (L.len.length ? '<p><b>Thẻ lên hạng:</b></p><div class="tc-ket-len">' + L.len.map(function (t) { return theHtml(t, false); }).join('') + '</div>' : '') +
      (window.SaoGame ? window.SaoGame.tongKetHtml() : '') +
      '<div class="tc-ket-nut"><button type="button" class="tc-nut" data-ve>Về album</button>' +
      '<button type="button" class="tc-nut tc-nut-chinh" data-lai>⚡ Luyện tiếp</button></div></div>';
    S.lt.xong = true;
    tai(true);
  }
  function dongLuyen() {
    dongPhu($('#tcLuyen'));
    if (window.DocZh) window.DocZh.dung();
    if (S.lt && !S.lt.xong && S.lt.kq.length) tai(true);
    S.lt = null;
  }

  /* ---------------- su kien ---------------- */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target : null;
    if (!el) return;
    var x;
    if ((x = el.closest('[data-noi]'))) { noi(x.getAttribute('data-noi')); return; }
    if ((x = el.closest('#tcAlbum .tc-the, .tc-ket-len .tc-the'))) {
      if (x.closest('#tcLuyen')) return;
      moChiTiet(x.getAttribute('data-c')); return;
    }
    if ((x = el.closest('[data-xep]'))) {
      S.xep = x.getAttribute('data-xep'); luuGhi('hyv_tc_xep', S.xep); veLoc(); veAlbum(); return;
    }
    if ((x = el.closest('[data-loc]'))) { S.loc = x.getAttribute('data-loc'); veLoc(); veAlbum(); return; }
    if (el.closest('#tcChiTiet [data-dong]')) { ctMo = null; dongPhu($('#tcChiTiet')); return; }
    if ((x = el.closest('#tcLuyen [data-chon]'))) { traLoi(Number(x.getAttribute('data-chon'))); return; }
    if (el.closest('#tcLtTiep')) { S.lt.i++; veCau(); return; }
    if (el.closest('#tcLuyen [data-lai]')) { batDauLuyen(); return; }
    if (el.closest('#tcLuyen [data-ve]') || el.closest('#tcLtDong')) { dongLuyen(); return; }
    if (el.closest('#tcLuyenNut')) { batDauLuyen(); return; }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!$('#tcChiTiet').hidden) { ctMo = null; dongPhu($('#tcChiTiet')); }
    else if (!$('#tcLuyen').hidden) dongLuyen();
    else if (!$('#tcMo').hidden) $('#tcMoXong').click();
  });
  var henTim = null;
  $('#tcTim').addEventListener('input', function (e) {
    clearTimeout(henTim);
    henTim = setTimeout(function () { S.tim = e.target.value; if (S.du) veAlbum(); }, 150);
  });

  tai();
})();
