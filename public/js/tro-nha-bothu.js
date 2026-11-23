/* ══════════════════════════════════════════════════════════════════
   GHEP BO THU 部首拼字 (2026-11-23) — tro tu choi o nha (/game)
   ------------------------------------------------------------------
   Moi vong: de bai (nghia tieng Viet + pinyin cua mot chu, HOAC mot tu thieu mot chu) + khung chu
   ve theo cau truc cua chu (trai-phai ⿰, tren-duoi ⿱, bao quanh ⿴ ⿺ ⿸ …) + khay manh (bo thu / thanh phan).
   Keo manh vao o cua khung (pointer events — chuot + cam ung) hoac bam manh -> vao o dang chon
   (ban phim: Tab toi manh, Enter). Bam o da co manh -> tra manh ve khay.
   Du o -> tu kiem: dung -> chu "khop" lai (hieu ung nho), doc tu, hien tu; sai -> o sai rung, manh ve khay.
   Dong ho moi vong + thuong chuoi nhe. 3 muc: De (2 manh trai-phai / tren-duoi, them 2 manh nhieu),
   Vua (moi chu, 3 manh nhieu), Kho (chu 3 manh, 5 manh nhieu, it gio hon).
   Du lieu: public/js/tro-nha-bothu-data.js (window.BoThuData) — CHI dung chu co trong tu vung cac bai
   em da chon (o.vocab); it hon 8 chu ghep duoc -> nhac hoc / chon them bai.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var T = window.TroNha, BT = window.BoThuData;
  if (!T || !BT) return;

  var KEY = 'bothu', SO_VONG = 10, TOI_THIEU = 8, LUU_MUC = 'hyv_bothu_muc';
  var MUC = {
    de: { ten: 'Dễ', giay: 35, nhieu: 2, mo: '2 mảnh trái–phải / trên–dưới' },
    vua: { ten: 'Vừa', giay: 28, nhieu: 3, mo: 'mọi kiểu khung, có chữ 3 mảnh' },
    kho: { ten: 'Khó', giay: 22, nhieu: 5, mo: 'chữ 3 mảnh, nhiều mảnh nhiễu' }
  };
  var TEN_BC = {
    '⿰': 'trái – phải', '⿱': 'trên – dưới', '⿲': 'trái – giữa – phải', '⿳': 'trên – giữa – dưới',
    '⿴': 'bao quanh', '⿵': 'bao phía trên', '⿶': 'bao phía dưới', '⿷': 'bao bên trái',
    '⿸': 'bao trên – trái', '⿹': 'bao trên – phải', '⿺': 'bao dưới – trái'
  };
  var NGANG = { '⿰': 1, '⿲': 1 }, DOC = { '⿱': 1, '⿳': 1 };
  // khung bao: o ngoai phu ca khung, o trong dat theo huong ho (css .bt-bao-*)
  var BAO = { '⿴': 'quanh', '⿵': 'tren', '⿶': 'duoi', '⿷': 'trai', '⿸': 'trentrai', '⿹': 'trenphai', '⿺': 'duoitrai' };
  // manh hep: bo ben trai / tren / phai / duoi chiem it cho hon (khung giong chu that)
  var HEP_TRAI = '亻氵冫扌讠钅饣纟忄犭礻衤口日月目火王禾米石土女子木马弓方耳足车阝彳舟牜片矢酉舌鱼革巾丩又夕止贝山歹';
  var HEP_PHAI = '刂阝卩攵欠页力寸鸟彡斤殳见';
  var HEP_TREN = '宀艹穴冖爫雨覀丷亠人日立';
  var HEP_DUOI = '心灬皿儿八衣巾土力贝子女虫';
  var MAU_MANH = ['#ffe9a8', '#ffd2c4', '#cfe8ff', '#d4f3c4', '#f1d4ff', '#ffe0b3'];

  function chuOf(s) { return Array.from ? Array.from(String(s || '')) : String(s || '').split(''); }
  function docMuc() { try { var m = localStorage.getItem(LUU_MUC); return MUC[m] ? m : 'de'; } catch (e) { return 'de'; } }
  function luuMuc(m) { try { localStorage.setItem(LUU_MUC, m); } catch (e) { /* bo qua */ } }

  // IDS -> chuoi (de so voi bang khi tim "chu khac ghep duoc")
  function idsCua(cay) { return typeof cay === 'string' ? cay : cay.op + cay.con.map(idsCua).join(''); }
  var THEO_IDS = {};
  Object.keys(BT.CHU).forEach(function (c) { THEO_IDS[BT.CHU[c].ids] = c; });

  /* Gom chu ghep duoc tu tu vung cac bai da chon: moi chu -> cac tu chua no, pinyin + nghia rieng (hanzi[]). */
  function gomChu(vocab) {
    var m = {}, ds = [];
    (vocab || []).forEach(function (v) {
      if (!v || !v.zh) return;
      chuOf(v.zh).forEach(function (ch) {
        var d = BT.CHU[ch];
        if (!d) return;
        var x = m[ch];
        if (!x) { x = m[ch] = { c: ch, d: d, tu: [], p: '', mean: '' }; ds.push(x); }
        if (x.tu.indexOf(v) === -1) x.tu.push(v);
        (v.hanzi || []).forEach(function (h) {
          if (!h || h.c !== ch) return;
          if (!x.p && h.p) x.p = String(h.p).split(/[\/,，;；]/)[0].trim();
          if (!x.mean && h.mean) x.mean = String(h.mean);
        });
        if (!x.mean && v.zh === ch) x.mean = v.vn;
      });
    });
    return ds;
  }
  function laDe(x) { return x.d.manh.length === 2 && (x.d.cay.op === '⿰' || x.d.cay.op === '⿱'); }
  function la3(x) { return x.d.manh.length === 3; }
  // Bo chu cho van: uu tien dung muc; thieu thi them chu gan muc nhat (De: 2 manh bao quanh -> 3 manh; Kho: 2 manh bao quanh -> de)
  // nhom kieu khung: '3' (3 manh), 'bao' (bao quanh), 'tren' (⿱), 'trai' (⿰)
  function nhomCua(x) { return la3(x) ? '3' : x.d.cay.op === '⿰' ? 'trai' : x.d.cay.op === '⿱' ? 'tren' : 'bao'; }
  // Lay xen ke tung nhom (tron trong nhom) -> van choi co du kieu khung, khong bi ⿰ (2/3 bang) lan at
  function xenKe(ds, nhoms, n) {
    var kho = {}, ra = [];
    nhoms.forEach(function (g) { kho[g] = T.tron(ds.filter(function (x) { return nhomCua(x) === g; })); });
    while (ra.length < n) {
      var them = 0;
      T.tron(nhoms).forEach(function (g) { if (ra.length < n && kho[g].length) { ra.push(kho[g].pop()); them++; } });
      if (!them) break;
    }
    return ra;
  }
  /* Bo chu cho van: dung muc truoc; thieu thi them chu gan muc nhat
     (De: ⿰/⿱ -> bao quanh -> 3 manh; Kho: 3 manh -> bao quanh -> ⿱/⿰). */
  function chonBo(ds, muc) {
    var n = Math.min(SO_VONG, ds.length), bo;
    if (muc === 'de') bo = xenKe(ds, ['trai', 'tren'], n).concat(xenKe(ds, ['bao'], n), xenKe(ds, ['3'], n));
    else if (muc === 'kho') bo = xenKe(ds, ['3'], n).concat(xenKe(ds, ['bao'], n), xenKe(ds, ['trai', 'tren'], n));
    else bo = xenKe(ds, ['3', 'bao', 'tren', 'trai'], n);
    return { bo: T.tron(bo.slice(0, n)) };
  }

  /* Manh nhieu: lay tu cac chu khac cua cung bai truoc (cung vi tri trong khung thi uu tien), khong trung
     manh dung, va khong ghep ra mot chu that khac (vd 他 -> 女 thanh 她) de khong co hai dap an.         */
  function manhNhieu(x, ds, n) {
    var dung = x.d.manh, op = x.d.cay.op;
    var diem = {};
    function them(g, d) { if (dung.indexOf(g) !== -1) return; diem[g] = Math.max(diem[g] || 0, d); }
    ds.forEach(function (y) {
      if (y === x) return;
      y.d.manh.forEach(function (g, k) { them(g, 2 + (y.d.cay.op === op && k < dung.length ? 2 : 0)); });
    });
    if (Object.keys(diem).length < n + 2) {
      Object.keys(BT.CHU).forEach(function (c) { BT.CHU[c].manh.forEach(function (g) { them(g, 0.5); }); });
    }
    var tao2 = function (thay, k) {
      var i = -1;
      function chep(t) { if (typeof t === 'string') { i++; return i === k ? thay : t; } return { op: t.op, con: t.con.map(chep) }; }
      return idsCua(chep(x.d.cay));
    };
    var ung = Object.keys(diem).filter(function (g) {
      for (var k = 0; k < dung.length; k++) { var c2 = THEO_IDS[tao2(g, k)]; if (c2 && c2 !== x.c) return false; }
      return true;
    }).map(function (g) { return { g: g, d: diem[g] + Math.random() * 2.2 }; });
    ung.sort(function (a, b) { return b.d - a.d; });
    return ung.slice(0, n).map(function (u) { return u.g; });
  }

  /* ---------------- ve khung theo cay IDS ----------------
     tra ve { el, o: [o1, o2, …] } — o theo thu tu manh (thu tu viet). mini: chi ve o nho (so do khung). */
  function veKhung(cay, mini) {
    var o = [];
    function trongSo(t, i, op) {
      if (typeof t !== 'string') return 1;
      if (op === '⿰') return i === 0 ? (HEP_TRAI.indexOf(t) !== -1 ? 0.72 : 1) : (HEP_PHAI.indexOf(t) !== -1 ? 0.72 : 1);
      if (op === '⿱') return i === 0 ? (HEP_TREN.indexOf(t) !== -1 ? 0.62 : 1) : (HEP_DUOI.indexOf(t) !== -1 ? 0.7 : 1);
      if (op === '⿲') return i === 0 ? (HEP_TRAI.indexOf(t) !== -1 ? 0.8 : 1) : i === 2 ? (HEP_PHAI.indexOf(t) !== -1 ? 0.8 : 1) : 1;
      if (op === '⿳') return i === 0 ? (HEP_TREN.indexOf(t) !== -1 ? 0.7 : 1) : i === 2 ? (HEP_DUOI.indexOf(t) !== -1 ? 0.8 : 1) : 1;
      return 1;
    }
    function nut(t, op, i) {
      if (typeof t === 'string') {
        var b = T.tao(mini ? 'span' : 'button', 'bt-o');
        if (!mini) {
          b.type = 'button';
          b.setAttribute('data-o', o.length);
          b.setAttribute('aria-label', 'Ô ' + (o.length + 1) + ' — trống');
        }
        o.push(b);
        if (op) b.style.flexGrow = trongSo(t, i, op);
        return b;
      }
      var lop = NGANG[t.op] ? 'bt-n bt-ngang' : DOC[t.op] ? 'bt-n bt-doc' : 'bt-n bt-bao bt-bao-' + BAO[t.op];
      var d = T.tao('div', lop);
      if (op) d.style.flexGrow = 1;
      t.con.forEach(function (c, k) { d.appendChild(nut(c, t.op, k)); });
      return d;
    }
    var el = nut(cay, null, 0);
    return { el: el, o: o };
  }

  /* Ve 1 manh vua khit o: do "muc" that cua glyph (canvas measureText -> actualBoundingBox) roi dat
     viewBox cua <svg><text> dung bang khung muc do -> bo 氵 亻 (nam lech trong o vuong cua font) van
     lap day o hep cua no, 女 子 bi "ep" vao nua khung nhu trong chu that. Gioi han meo 1.6 lan cho khoi xau.
     Font chua tai xong -> tam dung o vuong em mac dinh, tai xong ve lai.                                 */
  var FONT_DO = '700 100px "Noto Serif SC"', MUC_DO = {}, cvDo = null;
  function mucCua(g) {
    if (MUC_DO[g]) return MUC_DO[g];
    try {
      if (document.fonts && document.fonts.check && !document.fonts.check(FONT_DO, g)) return null;
      cvDo = cvDo || document.createElement('canvas');
      var c = cvDo.getContext('2d');
      c.font = FONT_DO;
      var m = c.measureText(g);
      if (m.actualBoundingBoxAscent == null) return null;
      var b = { x: -m.actualBoundingBoxLeft, y: -m.actualBoundingBoxAscent, w: m.actualBoundingBoxLeft + m.actualBoundingBoxRight, h: m.actualBoundingBoxAscent + m.actualBoundingBoxDescent };
      if (!(b.w > 2 && b.h > 2)) return null;
      MUC_DO[g] = b;
      return b;
    } catch (e) { return null; }
  }
  function veManh(o, g) {
    o.setAttribute('data-g', g);
    o.innerHTML = '<svg class="bt-g" aria-hidden="true" preserveAspectRatio="none"><text x="0" y="0" font-size="100">' + T.esc(g) + '</text></svg>';
    khit(o);
    if (!MUC_DO[g] && document.fonts && document.fonts.load) {
      document.fonts.load(FONT_DO, g).then(function () { if (o.getAttribute('data-g') === g && o.isConnected !== false) khit(o); }, function () { /* */ });
    }
  }
  function khit(o) {
    var sv = o.querySelector('svg.bt-g'), g = o.getAttribute('data-g');
    if (!sv || !g) return;
    var r = o.getBoundingClientRect();
    if (!r.width || !r.height) return;
    var b = mucCua(g) || { x: 0, y: -88, w: 100, h: 100 };   // du phong: o vuong em
    var dem = 0.1;                                        // le trong quanh muc
    var x = b.x - b.w * dem, y = b.y - b.h * dem, w = b.w * (1 + 2 * dem), h = b.h * (1 + 2 * dem);
    var A = r.width / r.height, a = w / h, meo = A / a, TOI = 1.6;
    if (meo > TOI) { var w2 = h * A / TOI; x -= (w2 - w) / 2; w = w2; }
    else if (meo < 1 / TOI) { var h2 = w / (A * TOI); y -= (h2 - h) / 2; h = h2; }
    sv.setAttribute('viewBox', x.toFixed(1) + ' ' + y.toFixed(1) + ' ' + w.toFixed(1) + ' ' + h.toFixed(1));
  }

  T.dangKy({
    key: KEY,
    ten: 'Ghép bộ thủ 部首拼字',
    emoji: '🧩',
    chu: '好',
    nen: 'linear-gradient(160deg,#ffd27a 0%,#ff9f5a 55%,#e5623c 100%)',
    moTa: 'Kéo bộ thủ vào khung chữ để ghép thành chữ Hán: 女 + 子 → 好! Có khung trái–phải, trên–dưới, bao quanh; 3 mức Dễ · Vừa · Khó.',
    canToiThieu: 4,
    mo: function (hop, o) {
      var dsChu = gomChu(o.vocab);
      if (dsChu.length < TOI_THIEU) {
        if (window.NhacNen) window.NhacNen.tat();
        hop.innerHTML = '<div class="tn-thieu bt-thieu"><div class="bt-thieu-ic" aria-hidden="true">🧩</div>' +
          '<p>Các bài em chọn mới có <b>' + dsChu.length + '</b> chữ ghép được bằng bộ thủ' +
          (dsChu.length ? ' (<span lang="zh">' + T.esc(dsChu.map(function (x) { return x.c; }).join(' ')) + '</span>)' : '') +
          ' — trò “Ghép bộ thủ” cần ít nhất <b>' + TOI_THIEU + '</b> chữ.</p>' +
          '<p>Em học thêm vài bài nữa rồi chọn thêm bài để chơi nhé! 加油！</p></div>';
        return { dung: function () { } };
      }

      var sk = T.khung(hop, this, { gio: true });
      var muc = docMuc();
      var st = null, gio = null, henGio = [], dangChoi = false;

      function hen(fn, ms) { var id = setTimeout(fn, ms); henGio.push(id); return id; }
      function huyHen() { henGio.forEach(clearTimeout); henGio = []; }
      function dungGio() { if (gio) { gio.dung(); gio = null; } }

      /* ---------------- gioi thieu + chon muc ---------------- */
      function gioiThieu() {
        dungGio(); huyHen(); dangChoi = false;
        sk.gio('—');
        var so = { de: dsChu.filter(laDe).length, vua: dsChu.length, kho: dsChu.filter(la3).length };
        T.manMoi(sk, {
          ic: '<span class="bt-moi-vd" aria-hidden="true"><b>女</b><i>+</i><b>子</b><i>→</i><b class="bt-moi-kq">好</b></span>',
          ten: 'Ghép bộ thủ 部首拼字',
          luat: 'Đọc đề (nghĩa + pinyin, hoặc từ còn thiếu một chữ), rồi <b>kéo</b> các mảnh bộ thủ vào đúng ô của khung chữ — hoặc <b>bấm</b> mảnh để đặt vào ô đang sáng. ' +
            'Bấm vào ô đã có mảnh để lấy ra. Ghép nhanh được thưởng thêm điểm, ghép đúng liền nhau có thưởng chuỗi.' +
            '<span class="bt-muc" role="group" aria-label="Chọn mức">' + Object.keys(MUC).map(function (k) {
              return '<button type="button" data-muc="' + k + '" aria-pressed="' + (k === muc) + '"' + (k === muc ? ' class="on"' : '') + '>' +
                '<b>' + MUC[k].ten + '</b><small>' + MUC[k].mo + ' · ' + MUC[k].giay + ' giây</small></button>';
            }).join('') + '</span>' +
            '<span class="bt-dem">Các bài em chọn có <b>' + dsChu.length + '</b> chữ ghép được (Dễ: ' + so.de + ' · Khó/3 mảnh: ' + so.kho + ').</span>',
          nut: 'Bắt đầu ghép ▶'
        }, batDau);
        Array.prototype.forEach.call(sk.san.querySelectorAll('[data-muc]'), function (b) {
          b.addEventListener('click', function () {
            muc = b.getAttribute('data-muc'); luuMuc(muc);
            Array.prototype.forEach.call(sk.san.querySelectorAll('[data-muc]'), function (x) {
              var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on);
            });
          });
        });
      }

      /* ---------------- van choi ---------------- */
      function batDau() {
        var chon = chonBo(dsChu, muc);
        st = { bo: chon.bo, i: -1, diem: 0, dung: 0, tong: 0, chuoi: 0, chuoiMax: 0, daGhep: [], canOn: [], loiTong: 0 };
        sk.diem(0);
        vongMoi();
      }

      function deBaiCua(x) {
        var tuDai = x.tu.filter(function (v) { return chuOf(v.zh).length >= 2 && chuOf(v.zh).length <= 5; });
        var coNghia = !!(x.mean || x.p);
        var kieu = tuDai.length && (!coNghia || Math.random() < (muc === 'kho' ? 0.6 : 0.45)) ? 'tu' : 'nghia';
        if (kieu === 'tu') {
          var v = tuDai[Math.floor(Math.random() * tuDai.length)];
          var chu = chuOf(v.zh), lo = false;
          var html = '<div class="bt-tu" lang="zh">' + chu.map(function (c) {
            if (c === x.c && !lo) { lo = true; return '<span class="bt-tu-o bt-tu-thieu" aria-label="chữ còn thiếu">?</span>'; }
            return '<span class="bt-tu-o">' + T.esc(c) + '</span>';
          }).join('') + '</div>' +
            '<div class="bt-de-vn">' + T.esc(v.vn) + '</div>' +
            (x.p ? '<div class="bt-de-py">chữ thiếu đọc là <b>' + T.esc(x.p) + '</b></div>' : '');
          return { kieu: 'tu', tu: v, html: html };
        }
        var v1 = x.tu.filter(function (v) { return v.zh === x.c; })[0] || x.tu[0];
        return {
          kieu: 'nghia', tu: v1,
          html: '<div class="bt-de-nhan">Ghép chữ có nghĩa</div>' +
            '<div class="bt-de-nghia">' + T.esc(anChu(x.mean || v1.vn, x.c)) + '</div>' +
            (x.p ? '<div class="bt-de-py"><b>' + T.esc(x.p) + '</b></div>' : '')
        };
      }

      // nghia co kem chu dang hoi (vd "gì (trong 什么)") -> che chu do lai
      function anChu(s, c) { return String(s || '').split(c).join('＿'); }

      function vongMoi() {
        dungGio(); huyHen();
        st.i++;
        if (st.i >= st.bo.length) { ketThuc(); return; }
        var x = st.bo[st.i];
        var m = MUC[muc];
        var de = deBaiCua(x);
        var nhieu = manhNhieu(x, dsChu, m.nhieu);
        var manh = T.tron(x.d.manh.concat(nhieu)).map(function (g, k) { return { id: k, g: g, o: -1 }; });
        st.v = { x: x, de: de, manh: manh, o: x.d.manh.map(function () { return -1; }), chon: 0, loi: 0, xong: false, giay: m.giay };

        sk.deBai('<span class="bt-tren">Chữ <b>' + (st.i + 1) + '</b>/' + st.bo.length + ' · ' + m.ten +
          (st.chuoi >= 2 ? ' · <span class="bt-chuoi">🔥 chuỗi ' + st.chuoi + '</span>' : '') + '</span>');
        sk.san.innerHTML = '';
        sk.duoi.innerHTML = '';
        var vung = T.tao('div', 'bt-vung');
        var trai = T.tao('div', 'bt-trai');
        var the = T.tao('div', 'bt-de', de.html);
        trai.appendChild(the);
        var k = veKhung(x.d.cay, false);
        var khung = T.tao('div', 'bt-khung');
        khung.setAttribute('role', 'group');
        khung.setAttribute('aria-label', 'Khung chữ kiểu ' + TEN_BC[x.d.cay.op] + ', ' + x.d.manh.length + ' ô');
        khung.appendChild(k.el);
        var ket = T.tao('div', 'bt-ket', '<span lang="zh">' + T.esc(x.c) + '</span>');
        ket.setAttribute('aria-hidden', 'true');
        khung.appendChild(ket);
        var nhan = T.tao('div', 'bt-kieu');
        var mini = veKhung(x.d.cay, true);
        var sd = T.tao('span', 'bt-sodo'); sd.setAttribute('aria-hidden', 'true'); sd.appendChild(mini.el);
        nhan.appendChild(sd);
        nhan.appendChild(T.tao('span', '', 'Khung <b>' + TEN_BC[x.d.cay.op] + '</b> · ' + x.d.manh.length + ' mảnh'));
        trai.appendChild(khung);
        trai.appendChild(nhan);
        var phai = T.tao('div', 'bt-phai');
        phai.appendChild(T.tao('div', 'bt-khay-nhan', 'Mảnh ghép — kéo vào khung hoặc bấm để đặt'));
        var khay = T.tao('div', 'bt-khay');
        khay.setAttribute('role', 'group');
        khay.setAttribute('aria-label', 'Các mảnh ghép');
        manh.forEach(function (mm, j) {
          var b = T.tao('button', 'bt-m', '<span lang="zh">' + T.esc(mm.g) + '</span>');
          b.type = 'button';
          b.style.setProperty('--bt-mau', MAU_MANH[j % MAU_MANH.length]);
          b.setAttribute('data-m', mm.id);
          b.setAttribute('aria-label', 'Mảnh ' + mm.g);
          khay.appendChild(b);
        });
        phai.appendChild(khay);
        var tb = T.tao('div', 'bt-tb'); tb.setAttribute('aria-live', 'polite');
        phai.appendChild(tb);
        vung.appendChild(trai); vung.appendChild(phai);
        sk.san.appendChild(vung);

        var nut = T.tao('div', 'bt-nut');
        nut.innerHTML = '<button type="button" class="tn-nut" data-bt="xoa">↺ Gỡ hết</button>' +
          '<button type="button" class="tn-nut tn-nut-vang" data-bt="bo">Bỏ qua ⏭</button>';
        sk.duoi.appendChild(nut);
        nut.addEventListener('click', function (e) {
          var b = e.target.closest('[data-bt]');
          if (!b || st.v.xong) return;
          if (b.getAttribute('data-bt') === 'xoa') { st.v.o.forEach(function (_, i) { traVe(i); }); chonO(0); }
          else lo(true);
        });

        st.v.dom = { khung: khung, o: k.o, khay: khay, tb: tb, ket: ket, nut: nut, the: the };
        k.o.forEach(function (oo, i) {
          oo.addEventListener('click', function () {
            if (st.v.xong) return;
            if (st.v.o[i] >= 0) { traVe(i); chonO(i); try { oo.focus(); } catch (e) { /* */ } }
            else chonO(i);
          });
        });
        ganKeo(khay);
        coChuKet();
        chonO(0);
        gio = T.demNguoc(m.giay, function (n) { st.v.giay = n; sk.gio(Math.max(0, n)); }, function () { gio = null; lo(false); });
      }

      /* ---------------- dat / go manh ---------------- */
      function manhTheoId(id) { return st.v.manh.filter(function (mm) { return mm.id === id; })[0]; }
      function nutManh(id) { return st.v.dom.khay.querySelector('[data-m="' + id + '"]'); }
      function chonO(i) {
        var v = st.v;
        if (i < 0 || i >= v.o.length) i = v.o.indexOf(-1);
        v.chon = i;
        v.dom.o.forEach(function (oo, k) { oo.classList.toggle('is-chon', k === i); });
      }
      function veO(i) {
        var v = st.v, oo = v.dom.o[i], id = v.o[i];
        oo.classList.remove('is-sai');
        if (id < 0) {
          oo.innerHTML = '';
          oo.removeAttribute('data-g');
          oo.classList.remove('co-manh');
          oo.setAttribute('aria-label', 'Ô ' + (i + 1) + ' — trống');
          return;
        }
        var g = manhTheoId(id).g;
        veManh(oo, g);
        oo.classList.add('co-manh');
        oo.setAttribute('aria-label', 'Ô ' + (i + 1) + ' — ' + g + ' (bấm để lấy ra)');
        if (!T.itChuyenDong) { oo.classList.remove('vua-dat'); void oo.offsetWidth; oo.classList.add('vua-dat'); }
      }
      function traVe(i) {
        var v = st.v, id = v.o[i];
        if (id < 0) return;
        manhTheoId(id).o = -1;
        v.o[i] = -1;
        var b = nutManh(id);
        if (b) { b.classList.remove('da-dat'); b.disabled = false; }
        veO(i);
      }
      function dat(id, i) {
        var v = st.v;
        if (v.xong) return;
        var mm = manhTheoId(id);
        if (!mm || mm.o >= 0) return;
        if (i == null || i < 0) i = v.chon >= 0 && v.o[v.chon] < 0 ? v.chon : v.o.indexOf(-1);
        if (i < 0) i = v.chon >= 0 ? v.chon : 0;
        if (v.o[i] >= 0) traVe(i);
        v.o[i] = id; mm.o = i;
        var b = nutManh(id), coTd = !!b && b === document.activeElement;
        if (b) { b.classList.add('da-dat'); b.disabled = true; }
        veO(i);
        T.keu(520 + i * 90, 0.07, 'triangle');
        if (v.o.indexOf(-1) === -1) { chonO(-1); hen(kiemTra, 260); }
        else {
          var tiep = -1;
          for (var k = 1; k <= v.o.length; k++) { var j = (i + k) % v.o.length; if (v.o[j] < 0) { tiep = j; break; } }
          chonO(tiep);
          // ban phim: giu tieu diem o khay (manh tiep theo con trong)
          var con = v.dom.khay.querySelector('.bt-m:not(.da-dat)');
          if (coTd && con) { try { con.focus(); } catch (e) { /* */ } }
        }
      }

      /* ---------------- keo tha (pointer events: chuot + cam ung + but) ---------------- */
      function ganKeo(khay) {
        var keo = null, vuaKeo = false;
        khay.addEventListener('click', function (e) {
          var b = e.target.closest('.bt-m');
          if (!b || b.disabled) return;
          if (vuaKeo) { vuaKeo = false; return; }
          dat(+b.getAttribute('data-m'));
        });
        khay.addEventListener('pointerdown', function (e) {
          var b = e.target.closest('.bt-m');
          if (!b || b.disabled || st.v.xong || (e.button != null && e.button > 0)) return;
          keo = { b: b, id: +b.getAttribute('data-m'), x0: e.clientX, y0: e.clientY, bong: null, pid: e.pointerId, tren: null };
          vuaKeo = false;
        });
        function oDuoi(x, y) {
          var el = document.elementFromPoint(x, y);
          var oo = el && el.closest ? el.closest('.bt-o') : null;
          return oo && st.v.dom.khung.contains(oo) ? oo : null;
        }
        function di(e) {
          if (!keo || e.pointerId !== keo.pid) return;
          var dx = e.clientX - keo.x0, dy = e.clientY - keo.y0;
          if (!keo.bong) {
            if (dx * dx + dy * dy < 49) return;
            keo.bong = T.tao('div', 'bt-bong', '<span lang="zh">' + T.esc(manhTheoId(keo.id).g) + '</span>');
            keo.bong.style.setProperty('--bt-mau', keo.b.style.getPropertyValue('--bt-mau'));
            document.body.appendChild(keo.bong);
            keo.b.classList.add('dang-keo');
            try { keo.b.setPointerCapture(keo.pid); } catch (er) { /* */ }
          }
          e.preventDefault();
          keo.bong.style.left = e.clientX + 'px';
          keo.bong.style.top = e.clientY + 'px';
          var oo = oDuoi(e.clientX, e.clientY);
          if (oo !== keo.tren) {
            if (keo.tren) keo.tren.classList.remove('is-tren');
            keo.tren = oo;
            if (oo) oo.classList.add('is-tren');
          }
        }
        function tha(e) {
          if (!keo || (e && e.pointerId !== keo.pid)) return;
          var k = keo; keo = null;
          if (!k.bong) return;               // chi la bam -> de 'click' lo
          vuaKeo = true;
          setTimeout(function () { vuaKeo = false; }, 400);
          if (k.tren) k.tren.classList.remove('is-tren');
          k.b.classList.remove('dang-keo');
          if (k.bong.parentNode) k.bong.parentNode.removeChild(k.bong);
          var oo = e && e.type === 'pointerup' ? oDuoi(e.clientX, e.clientY) : null;
          if (oo && !st.v.xong) dat(k.id, +oo.getAttribute('data-o'));
        }
        khay.addEventListener('pointermove', di);
        khay.addEventListener('pointerup', tha);
        khay.addEventListener('pointercancel', tha);
        khay.addEventListener('lostpointercapture', function (e) { if (keo && keo.bong && e.pointerId === keo.pid) tha({ type: 'cancel', pointerId: e.pointerId }); });
      }

      /* ---------------- kiem tra ---------------- */
      function kiemTra() {
        var v = st.v;
        if (v.xong || v.o.indexOf(-1) !== -1) return;
        var sai = [];
        v.o.forEach(function (id, i) { if (manhTheoId(id).g !== v.x.d.manh[i]) sai.push(i); });
        if (!sai.length) { thang(); return; }
        v.loi++; st.loiTong++;
        st.chuoi = 0;
        if (st.canOn.indexOf(v.x) === -1) st.canOn.push(v.x);
        T.keuSai(); T.rung(100);
        v.dom.tb.innerHTML = '<span class="bt-tb-sai">Chưa đúng — ' + sai.length + ' ô sai, thử lại nhé!</span>';
        sai.forEach(function (i) { v.dom.o[i].classList.add('is-sai'); });
        v.dom.khung.classList.remove('lac'); void v.dom.khung.offsetWidth; v.dom.khung.classList.add('lac');
        hen(function () {
          if (v.xong) return;
          sai.forEach(function (i) { traVe(i); });
          chonO(sai[0]);
        }, 650);
      }

      function thang() {
        var v = st.v;
        v.xong = true;
        dungGio();
        st.tong++; st.dung++;
        st.chuoi++; st.chuoiMax = Math.max(st.chuoiMax, st.chuoi);
        var co = 10 + (v.x.d.manh.length === 3 ? 5 : 0);
        var nhanh = Math.max(0, Math.ceil(v.giay / 3));
        var chuoi = st.chuoi >= 2 ? Math.min(10, (st.chuoi - 1) * 2) : 0;
        var cong = co + nhanh + chuoi - Math.min(6, v.loi * 3);
        cong = Math.max(3, cong);
        st.diem += cong; sk.diem(st.diem);
        T.keuDung();
        sk.bay('+' + cong + (chuoi ? ' · chuỗi ' + st.chuoi : ''), 'dung');
        if (st.daGhep.indexOf(v.x) === -1) st.daGhep.push(v.x);
        hienKetQuaVong(true);
      }

      // het gio / bo qua: lo dap an
      function lo(boQua) {
        var v = st.v;
        if (!v || v.xong) return;
        v.xong = true;
        dungGio();
        st.tong++; st.chuoi = 0;
        if (st.canOn.indexOf(v.x) === -1) st.canOn.push(v.x);
        T.keuSai();
        v.o.forEach(function (_, i) { traVe(i); });
        v.x.d.manh.forEach(function (g, i) {
          var oo = v.dom.o[i];
          veManh(oo, g);
          oo.classList.add('co-manh', 'is-lo');
        });
        sk.bay(boQua ? 'Bỏ qua' : 'Hết giờ!', 'sai');
        hienKetQuaVong(false);
      }

      function hienKetQuaVong(dung) {
        var v = st.v, x = v.x, tu = v.de.tu;
        chonO(-1);
        v.dom.o.forEach(function (oo) { oo.disabled = true; });
        Array.prototype.forEach.call(v.dom.khay.querySelectorAll('.bt-m'), function (b) { b.disabled = true; });
        hen(function () { v.dom.khung.classList.add('is-ghep'); }, dung ? 60 : 700);
        var ghep = x.d.manh.join(' + ');
        v.dom.tb.innerHTML =
          '<div class="bt-kq' + (dung ? ' dung' : ' lo') + '">' +
            '<div class="bt-kq-dong"><span class="bt-kq-chu" lang="zh">' + T.esc(x.c) + '</span>' +
              '<span class="bt-kq-ghep" lang="zh">= ' + T.esc(ghep) + '</span></div>' +
            (x.p ? '<div class="bt-kq-py">' + T.esc(x.p) + (x.mean ? ' · ' + T.esc(x.mean) : '') + '</div>' : (x.mean ? '<div class="bt-kq-py">' + T.esc(x.mean) + '</div>' : '')) +
            '<button type="button" class="bt-kq-tu" data-doc="' + T.esc(tu.zh) + '"><span aria-hidden="true">🔊</span> <b lang="zh">' + T.esc(tu.zh) + '</b> · ' + T.esc(tu.vn) + '</button>' +
          '</div>';
        v.dom.the.classList.add('da-xong');
        var thieu = v.dom.the.querySelector('.bt-tu-thieu');
        if (thieu) { thieu.textContent = x.c; thieu.classList.add('da-dien'); }
        v.dom.tb.querySelector('[data-doc]').addEventListener('click', function () { T.doc(tu.zh); });
        T.doc(tu.zh);
        v.dom.nut.innerHTML = '<button type="button" class="tn-nut tn-nut-chinh" data-tiep>' + (st.i + 1 >= st.bo.length ? 'Xem kết quả ▶' : 'Chữ tiếp ▶') + '</button>';
        var tiep = v.dom.nut.querySelector('[data-tiep]');
        tiep.addEventListener('click', function () { vongMoi(); });
        hen(function () { try { tiep.focus({ preventScroll: true }); } catch (e) { /* */ } }, 80);
      }

      /* ---------------- ket thuc ---------------- */
      function ketThuc() {
        dungGio(); huyHen();
        sk.deBai(''); sk.gio('—');
        var loi = st.dung === st.tong && !st.loiTong ? 'Hoàn hảo! 太棒了！' : null;
        T.ketQua(sk, KEY, {
          diem: st.diem, dung: st.dung, tong: st.tong, chuoi: st.chuoiMax, saiDs: [], loi: loi
        }, function () { gioiThieu(); });
        var kq = sk.san.querySelector('.tn-ketqua');
        if (!kq) return;
        var them = T.tao('div', 'bt-kt');
        if (st.daGhep.length) {
          them.innerHTML += '<div class="bt-kt-nhom"><b>Chữ em đã ghép</b> <small>(bấm để nghe)</small><div class="bt-kt-ds">' +
            st.daGhep.map(function (x) {
              return '<button type="button" class="bt-kt-chu" data-doc="' + T.esc(x.c) + '" lang="zh" aria-label="Nghe ' + T.esc(x.c) + '">' + T.esc(x.c) + '</button>';
            }).join('') + '</div></div>';
        }
        if (st.canOn.length) {
          them.innerHTML += '<div class="bt-kt-nhom bt-kt-on"><b>Cần ôn lại</b><ul>' +
            st.canOn.map(function (x) {
              var v = x.tu[0];
              return '<li><button type="button" class="bt-kt-dong" data-doc="' + T.esc(v.zh) + '">' +
                '<span class="bt-kt-c" lang="zh">' + T.esc(x.c) + '</span>' +
                '<span class="bt-kt-g" lang="zh">' + T.esc(x.d.manh.join(' + ')) + '</span>' +
                '<span class="bt-kt-n">' + (x.p ? T.esc(x.p) + ' · ' : '') + '<span lang="zh">' + T.esc(v.zh) + '</span> ' + T.esc(v.vn) + '</span>' +
                '</button></li>';
            }).join('') + '</ul></div>';
        }
        if (!them.innerHTML) return;
        them.addEventListener('click', function (e) {
          var b = e.target.closest('[data-doc]');
          if (b) T.doc(b.getAttribute('data-doc'));
        });
        var nutChoi = kq.querySelector('.tn-nut');
        kq.insertBefore(them, nutChoi ? nutChoi.nextSibling : null);
      }

      // chu ghep xong (.bt-ket) to vua long khung
      function coChuKet() {
        var d = st && st.v && st.v.dom;
        if (!d) return;
        var w = d.khung.clientWidth - 20;
        if (w > 0) d.ket.style.fontSize = Math.round(w * 0.9) + 'px';
      }
      function doKich() {
        if (!st || !st.v || !st.v.dom) return;
        st.v.dom.o.forEach(khit);
        coChuKet();
      }
      window.addEventListener('resize', doKich);
      gioiThieu();
      return {
        dung: function () {
          dungGio(); huyHen();
          window.removeEventListener('resize', doKich);
          var b = document.querySelector('.bt-bong');
          if (b && b.parentNode) b.parentNode.removeChild(b);
        }
      };
    }
  });
})();
