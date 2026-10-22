/* ══════════════════════════════════════════════════════════════════
   NGU PHAP CHIA THEO DIEM
   ------------------------------------------------------------------
   Moi diem ngu phap mot tab. Trong tab: cau truc -> giai thich -> vi du
   -> loi hoc sinh Viet hay mac -> ngay ben duoi la cac bai tap cua chinh
   diem do (bt: [{so, tieuDe, cap, huongDan?, chon?, cau: [...] }]).

   Kieu cau (cau[i].kieu):
     dien     o trong + chip lua chon            tu cham
     vitri    chon vi tri A/B/C                  tu cham
     dungsai  cau dung hay sai                   tu cham
     go       go dap an ngan                     tu cham
     xep      xep manh thanh cau                 tu cham
     viet     viet lai cau theo yeu cau          so dap an mau
     hoi      hoan thanh loi trong hoi thoai     so dap an mau
     dich     dich Viet -> Trung                 so dap an mau
     vandung  dung diem ngu phap hoan thanh cau  AI cham thang 10 + sua loi

   Cau tu do (viet / hoi / dich) co nhieu cach noi dung nen web KHONG bao
   sai: khop dap an thi bao dung, khong khop thi hien dap an mau de em tu
   so. Diem bai hoc chi tinh cac dang tu cham.

   Dung: NguPhapTab.render(oTab, oNoiDung, diem, { key, speak(zh), onScore({correct,total}) })
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var TU_CHAM = { dien: 1, vitri: 1, dungsai: 1, go: 1, xep: 1 };
  var HUONG_DAN = {
    dien: 'Bấm từ bên dưới để điền vào chỗ trống. Bấm vào ô đã điền để xoá.',
    vitri: 'Bấm chữ cái chỉ vị trí đúng.',
    dungsai: 'Chọn Đúng hoặc Sai — câu sai sẽ hiện cách sửa.',
    go: 'Gõ đáp án rồi bấm Kiểm tra.',
    xep: 'Bấm lần lượt các mảnh để ghép thành câu đúng; bấm mảnh đã ghép để trả lại.',
    viet: 'Viết câu theo yêu cầu rồi bấm Kiểm tra — khác đáp án mẫu thì em tự so lại nhé.',
    hoi: 'Gõ câu tiếng Trung rồi bấm Kiểm tra. Câu tự do có nhiều cách nói đúng — nếu khác đáp án mẫu, em tự so lại nhé.',
    dich: 'Gõ câu tiếng Trung rồi bấm Kiểm tra. Câu tự do có nhiều cách nói đúng — nếu khác đáp án mẫu, em tự so lại nhé.',
    vandung: 'Viết phần còn thiếu bằng chữ Hán, dùng đúng điểm ngữ pháp của tab này, rồi bấm Chấm điểm. AI chấm thang 10, chỉ ra từng lỗi và sửa câu cho em.'
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // Giu duy nhat the gach chan <u> cua de goc ("dat cau hoi cho phan gach chan")
  function escU(s) {
    return esc(s).replace(/&lt;u&gt;/g, '<u>').replace(/&lt;\/u&gt;/g, '</u>');
  }

  // Bo dau cau, khoang trang de so dap an: "对不起，明天我要去公司。" = "对不起明天我要去公司"
  function chuan(s) {
    return String(s || '').replace(/<\/?u>/g, '').replace(/[\s。，,.？?！!、；;：:"“”'‘’（）()…—\-·]/g, '');
  }
  // So cau em viet voi cac dap an; truoc / sau la phan cau cho san quanh o nhap
  function khop(tra, dsDap, truoc, sau) {
    var t = chuan(tra);
    if (!t) return false;
    var a = chuan(truoc), b = chuan(sau);
    var em = [t, a + t, t + b, a + t + b];
    return dsDap.some(function (d) {
      var c = chuan(d);
      return em.indexOf(c) >= 0 || [a + c, c + b, a + c + b].indexOf(t) >= 0;
    });
  }

  var HAN = /[㐀-鿿豈-﫿]+/g;
  var CO_CHU_VIET = /[a-zA-ZÀ-ỹ]/;

  // Nhan tab ngan: 助动词“要” -> 要 · 「不仅……也/还……」 -> 不仅…也/还…
  // Giu so thu tu "(1)", "(2)" de hai diem cung ten khong ra hai nhan giong nhau
  function nhanNgan(ten) {
    ten = String(ten);
    var so = (ten.match(/[(（](\d+)[)）]/) || [])[1];
    var duoi = so ? ' (' + so + ')' : '';
    var m = ten.match(/[“"「]([^”"」]+)[”"」]/g);
    if (m && m.length) {
      var s = m.slice(0, 2).map(function (x) { return x.replace(/[“”"「」]/g, ''); }).join(' · ').replace(/……/g, '…');
      if (!CO_CHU_VIET.test(s)) return { t: (s.length > 9 ? s.slice(0, 8) + '…' : s) + duoi, vn: false };
    }
    var v = ten.replace(/\s*[—:：].*$/, '').replace(/\s*[(（]\d+[)）]/, '').trim();
    var toi = 22 - duoi.length;
    return { t: (v.length > toi ? v.slice(0, toi - 1).trim() + '…' : v) + duoi, vn: true };
  }
  // Nhan dai hon, dung khi hai nhan ngan van trung: "Động từ 在" / "Giới từ 在"
  function nhanPhanBiet(ten) {
    var n = nhanNgan(ten);
    var truoc = String(ten).split(/[“"「]/)[0].replace(/\s*[(（]\d+[)）]/, '').trim();
    if (!truoc || n.vn) return n;
    truoc = truoc.length > 14 ? truoc.slice(0, 13).trim() + '…' : truoc;
    return { t: truoc + ' ' + n.t, vn: true };
  }
  function veTen(ten) {
    // Ten co chu Viet: de font Latin, chi boc chu Han bang font Han
    if (!CO_CHU_VIET.test(ten)) return '<h2 class="npt-ten hanzi">' + esc(ten) + '</h2>';
    return '<h2 class="npt-ten is-vn">' + esc(ten).replace(HAN, function (h) { return '<span class="npt-ten-han">' + h + '</span>'; }) + '</h2>';
  }

  var NHAN_CT = /^(Phủ định|Nghi vấn|Khẳng định|Chú ý|Lưu ý)\s*[:：]\s*/;
  function coNhan(dong) { return NHAN_CT.test(dong); }
  // To mau cong thuc: chu Han o ngoai ngoac -> do dam; trong ngoac (vi du) -> xam;
  // Sub / V / O / Adj / N -> the nho. macDinh: dong khong ghi nhan trong khi cac
  // dong khac co (Phu dinh / Nghi van) thi do la cau khang dinh.
  function veCongThuc(dong, macDinh) {
    var nhan = macDinh || '';
    var m = dong.match(NHAN_CT);
    if (m) { nhan = m[1]; dong = dong.slice(m[0].length); }
    var phan = dong.split(/(\([^)]*\)|（[^）]*）)/);
    var html = phan.map(function (p) {
      if (/^[(（]/.test(p)) {
        if (/^[(（]\s*\+/.test(p)) return '<span class="npt-tuy">' + veTag(esc(p)) + '</span>';
        return '<span class="npt-ngoac">' + esc(p) + '</span>';
      }
      return veTag(esc(p).replace(HAN, function (h) { return '<b class="npt-han">' + h + '</b>'; }));
    }).join('');
    return (nhan ? '<span class="npt-ct-nhan">' + esc(nhan) + '</span>' : '') +
      '<span class="npt-ct-cong">' + html + '</span>';
  }
  // Chi gan nhan khi ky hieu dung rieng: "N" trong "Nơi chốn" / "V" trong
  // "Vật" khong phai ky hieu (\b cua JS coi "ơ", "ậ" la dau ngat tu).
  function veTag(s) {
    return s.replace(/(^|[\s+(（\/])(Sub|Adj|VP1|VP2|VP|V|O|N)(?=[\s+)）\/,，]|$)/g, '$1<span class="npt-tag">$2</span>');
  }

  // Doi thu tu cac manh cho den khi khac thu tu dung
  function xaoManh(manh, dap) {
    var dung = chuan(dap);
    if (chuan(manh.join('')) !== dung) return manh.slice();
    var a = manh.slice();
    for (var lan = 0; lan < 8; lan++) {
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      if (chuan(a.join('')) !== dung) break;
    }
    return a;
  }
  function nhanChip(w) { return w === '∅' ? '∅ bỏ trống' : w; }

  /* ---------------- luu lai bai dang lam ---------------- */
  function docLuu(key) {
    try { return JSON.parse(localStorage.getItem('hyv_npt:' + key) || '{}') || {}; }
    catch (e) { return {}; }
  }
  function ghiLuu(key, st) {
    try { localStorage.setItem('hyv_npt:' + key, JSON.stringify(st)); } catch (e) { /* bo qua */ }
  }
  function tokenDangNhap() {
    try { var a = JSON.parse(localStorage.getItem('hyv_auth') || 'null'); return a && a.token ? a.token : ''; }
    catch (e) { return ''; }
  }

  /* ---------------- cham tung kieu cau ---------------- */
  function daLam(c, v) {
    if (!v) return false;
    if (c.kieu === 'dien') return Array.isArray(v) && v.length === c.dap.length && v.every(Boolean);
    if (c.kieu === 'vitri' || c.kieu === 'dungsai') return !!v.chon;
    if (c.kieu === 'xep') return !!v.xong;
    return !!(v.kt && v.tra);
  }
  function laDung(c, v) {
    if (!daLam(c, v)) return false;
    if (c.kieu === 'dien') return v.every(function (x, k) { return c.dap[k].indexOf(x) >= 0; });
    if (c.kieu === 'vitri') return c.dap.indexOf(v.chon) >= 0;
    if (c.kieu === 'dungsai') return (v.chon === 'dung') === !!c.dung;
    if (c.kieu === 'xep') return !!v.dung;
    if (c.kieu === 'go') return c.dap.some(function (d) { return chuan(d) === chuan(v.tra); });
    return false;
  }
  // Phan cau cho san quanh o nhap (hoi thoai / van dung)
  function khungNhap(c) {
    if (c.kieu === 'hoi') {
      var o = c.dong.filter(function (d) { return d.o; })[0] || {};
      return { truoc: o.truoc || '', sau: o.sau || '' };
    }
    if (c.kieu === 'vandung') {
      var de = c.de || '';
      var mB = de.match(/B[：:]\s*(.*)$/);
      if (mB) de = mB[1];
      var p = de.split('＿＿＿');
      return { truoc: p[0] || '', sau: p[1] || '', a: mB ? (c.de.match(/^A[：:]\s*(.*?)\s*B[：:]/) || [])[1] || '' : '' };
    }
    return { truoc: '', sau: '' };
  }

  /* ================================================================== */
  function render(oTab, oNoi, diem, opts) {
    opts = opts || {};
    var key = opts.key || location.pathname;
    var st = docLuu(key);
    st.a = st.a || {};
    if (typeof st.tab !== 'number' || st.tab < 0 || st.tab >= diem.length) st.tab = 0;
    var daGhiDiem = false;

    function luu() { ghiLuu(key, st); }
    function khoi(pi, so) {
      var b = diem[pi].bt || [];
      for (var i = 0; i < b.length; i++) if (b[i].so === so) return b[i];
      return null;
    }
    function tach(id) {
      var m = id.split('-');
      return { so: +m[0].slice(1), pi: +m[1], ci: +m[2] };
    }
    function cauCua(id) {
      var t = tach(id), b = khoi(t.pi, t.so);
      return b ? b.cau[t.ci] : null;
    }
    function idCua(so, pi, ci) { return 'b' + so + '-' + pi + '-' + ci; }

    /* ---- tinh diem (chi cac dang tu cham) ---- */
    function thongKe(chiDiem) {
      var tong = 0, lam = 0, dung = 0;
      diem.forEach(function (p, pi) {
        if (chiDiem != null && pi !== chiDiem) return;
        (p.bt || []).forEach(function (b) {
          b.cau.forEach(function (c, ci) {
            if (!TU_CHAM[c.kieu]) return;
            tong++;
            var v = st.a[idCua(b.so, pi, ci)];
            if (daLam(c, v)) { lam++; if (laDung(c, v)) dung++; }
          });
        });
      });
      return { tong: tong, lam: lam, dung: dung };
    }

    function veTab() {
      var nhan = diem.map(function (p) { return nhanNgan(p.ten); });
      nhan = nhan.map(function (n, i) {
        var trung = nhan.some(function (m, j) { return j !== i && m.t === n.t; });
        return trung ? nhanPhanBiet(diem[i].ten) : n;
      });
      oTab.innerHTML = diem.map(function (p, i) {
        var tk = thongKe(i);
        var xong = tk.tong && tk.lam === tk.tong;
        var n = nhan[i];
        return '<button type="button" class="npt-tabbtn' + (i === st.tab ? ' active' : '') + '" data-npt-tab="' + i + '"' +
          ' aria-pressed="' + (i === st.tab) + '" title="' + esc(p.ten) + '">' +
          '<span class="npt-tab-so">' + (i + 1) + '</span>' +
          '<span class="npt-tab-han' + (n.vn ? ' is-vn' : '') + '">' + esc(n.t) + '</span>' +
          (tk.tong ? '<span class="npt-tab-dem' + (xong ? ' xong' : '') + '">' + (xong ? '✓ ' : '') + tk.dung + '/' + tk.tong + '</span>' : '') +
          '</button>';
      }).join('');
      // Hang tab truot ngang (dien thoai): dua tab dang chon vao tam nhin
      var act = oTab.querySelector('.npt-tabbtn.active');
      if (act && oTab.scrollWidth > oTab.clientWidth + 2) {
        oTab.scrollLeft += act.getBoundingClientRect().left - oTab.getBoundingClientRect().left - 8;
      }
    }

    function veTongKet() {
      var tk = thongKe();
      var el = oNoi.querySelector('.npt-tongket');
      if (el) el.innerHTML = tk.tong ? 'Cả bài: đã làm <b>' + tk.lam + '/' + tk.tong + '</b> câu tự chấm · đúng <b>' + tk.dung + '</b>' : '';
      if (tk.tong && tk.lam === tk.tong && !daGhiDiem && typeof opts.onScore === 'function') {
        daGhiDiem = true;
        opts.onScore({ correct: tk.dung, total: tk.tong });
      }
    }

    /* ---------------- phan ly thuyet ---------------- */
    function veLyThuyet(p) {
      return '<header class="npt-head">' +
          '<span class="npt-so">' + esc(p.so) + '</span>' +
          '<div>' + veTen(p.ten) + (p.tenVn ? '<p class="npt-tenvn">' + esc(p.tenVn) + '</p>' : '') + '</div>' +
        '</header>' +

        (p.cauTruc && p.cauTruc.length ? '<section class="npt-khoi npt-cautruc"><h3 class="npt-h">Cấu trúc</h3>' +
          '<ul>' + p.cauTruc.map(function (d) {
            return '<li>' + veCongThuc(d, p.cauTruc.some(coNhan) ? 'Khẳng định' : '') + '</li>';
          }).join('') + '</ul>' +
        '</section>' : '') +

        (p.giaiThich ? '<section class="npt-khoi"><h3 class="npt-h">Giải thích</h3>' +
          '<p class="npt-giai">' + esc(p.giaiThich) + '</p>' +
        '</section>' : '') +

        (p.viDu && p.viDu.length ? '<section class="npt-khoi"><h3 class="npt-h">Ví dụ</h3><ol class="npt-vidu">' +
          p.viDu.map(function (v) {
            return '<li><div class="npt-vd-zh hanzi">' + esc(v.zh) +
              (opts.speak ? ' <button type="button" class="npt-loa" data-npt-noi="' + esc(v.zh) + '" aria-label="Nghe câu này"><svg class="ui-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg></button>' : '') +
              '</div>' + (v.py ? '<div class="npt-vd-py">' + esc(v.py) + '</div>' : '') +
              (v.vn ? '<div class="npt-vd-vn">' + esc(v.vn) + '</div>' : '') + '</li>';
          }).join('') + '</ol></section>' : '') +

        (p.loi && p.loi.length ? '<section class="npt-khoi npt-loi"><h3 class="npt-h">Lỗi học sinh Việt hay mắc</h3>' +
          p.loi.map(function (l) {
            return '<div class="npt-loi-mot">' +
              '<div class="npt-loi-sai hanzi"><span aria-hidden="true">✗</span> ' + esc(l.sai) + '</div>' +
              (l.why ? '<div class="npt-loi-vi">' + esc(l.why) + '</div>' : '') +
              '<div class="npt-loi-dung hanzi"><span aria-hidden="true">✓</span> ' + esc(l.dung) + '</div>' +
            '</div>';
          }).join('') + '</section>' : '');
    }

    /* ---------------- ve tung kieu cau ---------------- */
    function veNutKT(id, chu) {
      return '<button type="button" class="npt-nut" data-npt-kt="' + id + '">' + (chu || 'Kiểm tra') + '</button>';
    }
    function veInput(id, v, aria, dai) {
      if (dai) {
        return '<textarea class="npt-in npt-in-dai hanzi" data-npt-in="' + id + '" rows="2" autocomplete="off" spellcheck="false" lang="zh" aria-label="' + aria + '">' +
          esc(v.tra || '') + '</textarea>';
      }
      return '<input type="text" class="npt-in hanzi" data-npt-in="' + id + '" value="' + esc(v.tra || '') + '"' +
        ' autocomplete="off" spellcheck="false" lang="zh" aria-label="' + aria + '">';
    }

    function veCau(c, id, b) {
      var v = st.a[id] || {};
      var h = '';
      if (c.goiY && (c.kieu === 'dien' || c.kieu === 'dich')) h += '<div class="npt-ngucanh">' + esc(c.goiY) + '</div>';
      if (c.goiY && c.kieu === 'xep') h += '<div class="npt-ngucanh">Nghĩa: ' + esc(c.goiY) + '</div>';

      if (c.kieu === 'dien') {
        var vd = Array.isArray(v) ? v : [];
        var cau = '';
        c.phan.forEach(function (ph, k) {
          cau += esc(ph);
          if (k < c.phan.length - 1) {
            cau += '<button type="button" class="npt-o' + (vd[k] ? ' co' : '') + '" data-npt-o="' + id + '" data-k="' + k + '"' +
              ' aria-label="Chỗ trống ' + (k + 1) + (vd[k] ? ': ' + esc(vd[k]) : '') + '">' + (vd[k] ? esc(vd[k]) : '&nbsp;') + '</button>';
          }
        });
        h += '<div class="npt-cau hanzi">' + cau + '</div>' +
          '<div class="npt-chon">' + (c.chon || b.chon || []).map(function (w) {
            return '<button type="button" class="npt-chip hanzi" data-npt-chip="' + id + '" data-w="' + esc(w) + '">' + esc(nhanChip(w)) + '</button>';
          }).join('') + '</div>';
      } else if (c.kieu === 'vitri') {
        h += (c.tu ? '<div class="npt-yc">Đặt <b class="hanzi">' + esc(c.tu) + '</b> vào vị trí đúng</div>' : '') +
          '<div class="npt-cau hanzi">' + esc(c.cau).replace(/\b([ABC])\b/g, '<span class="npt-vt">$1</span>') + '</div>' +
          '<div class="npt-chon">' + c.chon.map(function (w) {
            return '<button type="button" class="npt-chip npt-chip-chu' + (v.chon === w ? ' da' : '') + '" data-npt-pick="' + id + '" data-w="' + w + '">' + w + '</button>';
          }).join('') + '</div>';
      } else if (c.kieu === 'dungsai') {
        h += '<div class="npt-cau hanzi">' + esc(c.cau) + '</div>' +
          '<div class="npt-chon">' +
            '<button type="button" class="npt-chip npt-ds' + (v.chon === 'dung' ? ' da' : '') + '" data-npt-pick="' + id + '" data-w="dung">✓ Đúng</button>' +
            '<button type="button" class="npt-chip npt-ds' + (v.chon === 'sai' ? ' da' : '') + '" data-npt-pick="' + id + '" data-w="sai">✗ Sai</button>' +
          '</div>';
      } else if (c.kieu === 'go') {
        h += '<div class="npt-cau hanzi">' + esc(c.cau) + '</div>' +
          '<div class="npt-nhap">' + veInput(id, v, 'Đáp án') + veNutKT(id) + '</div>';
      } else if (c.kieu === 'xep') {
        h += '<div class="npt-khay hanzi" data-npt-khay="' + id + '" aria-label="Câu em ghép"></div>' +
          '<div class="npt-manh" data-npt-manh="' + id + '"></div>';
      } else if (c.kieu === 'viet') {
        h += '<div class="npt-yc">' + esc(c.yeuCau) + '</div>' +
          '<div class="npt-goc hanzi">' + escU(c.goc) + '</div>' +
          '<div class="npt-nhap">' + veInput(id, v, 'Câu viết lại') + veNutKT(id) + '</div>';
      } else if (c.kieu === 'hoi') {
        h += c.dong.map(function (d) {
          var ai = '<span class="npt-ai' + (d.ai === 'B' ? ' is-b' : '') + '">' + esc(d.ai) + '</span>';
          if (!d.o) return '<div class="npt-hoi hanzi">' + ai + esc(d.t) + '</div>';
          return '<div class="npt-hoi npt-hoi-o hanzi">' + ai +
            (d.truoc ? '<span class="npt-bdau">' + esc(d.truoc) + '</span>' : '') +
            '<div class="npt-nhap">' + veInput(id, v, 'Câu trả lời') + veNutKT(id) + '</div>' +
            (d.sau ? '<span class="npt-bdau">' + esc(d.sau) + '</span>' : '') +
          '</div>';
        }).join('') +
        (c.goiY ? '<div class="npt-goiy">Gợi ý: ' + esc(c.goiY) + '</div>' : '');
      } else if (c.kieu === 'dich') {
        h += '<div class="npt-yc">Dịch sang tiếng Trung</div><div class="npt-dich">' + esc(c.vn) + '</div>' +
          '<div class="npt-nhap">' + veInput(id, v, 'Câu tiếng Trung') + veNutKT(id) + '</div>';
      } else if (c.kieu === 'vandung') {
        var kn = khungNhap(c);
        if (kn.a) h += '<div class="npt-hoi hanzi"><span class="npt-ai">A</span>' + esc(kn.a) + '</div>';
        if (c.tuDo) {
          h += '<div class="npt-yc">Tự đặt câu</div>' +
            '<div class="npt-nhap npt-nhap-dai">' + veInput(id, v, 'Câu em tự đặt', true) + '</div>';
        } else {
          h += '<div class="npt-vd hanzi">' + (kn.a ? '<span class="npt-ai is-b">B</span>' : '') +
            (kn.truoc ? '<span class="npt-bdau">' + esc(kn.truoc) + '</span>' : '') +
            '<div class="npt-nhap">' + veInput(id, v, 'Phần em viết') + '</div>' +
            (kn.sau ? '<span class="npt-bdau">' + esc(kn.sau) + '</span>' : '') +
          '</div>';
        }
        h += '<div class="npt-goiy">' + (c.tuDo ? '' : 'Ý cần viết: ') + esc(c.goiY) + '</div>' +
          '<div class="npt-vd-nut"><button type="button" class="npt-nut npt-nut-ai" data-npt-ai="' + id + '">✦ Chấm điểm</button></div>';
      }
      h += '<div class="npt-kq" data-npt-kq="' + id + '" aria-live="polite"></div>';
      return '<li class="npt-q npt-k-' + c.kieu + '" data-npt-q="' + id + '">' + h + '</li>';
    }

    function huongDanKhoi(b) {
      var kieu = [];
      b.cau.forEach(function (c) { if (kieu.indexOf(c.kieu) < 0) kieu.push(c.kieu); });
      var hd = kieu.map(function (k) { return HUONG_DAN[k]; }).filter(function (x, i, a) { return x && a.indexOf(x) === i; });
      return (b.huongDan ? '<b>' + esc(b.huongDan.replace(/[.。:：\s]+$/, '')) + '.</b> ' : '') + hd.join(' ');
    }

    function veKhoi(p, pi, b) {
      var chiAi = b.cau.every(function (c) { return c.kieu === 'vandung'; });
      return '<article class="npt-card npt-card-' + b.so + '" data-npt-bt="' + b.so + '" data-npt-p="' + pi + '">' +
        '<header class="npt-card-h">' +
          (b.cap ? '<span class="npt-cap npt-cap-' + Math.min(b.so, 4) + '">' + esc(b.cap) + '</span>' : '') +
          '<h4>Bài tập ' + b.so + ' — ' + esc(b.tieuDe) + '</h4>' +
          '<p class="npt-hd">' + huongDanKhoi(b) + '</p>' +
        '</header>' +
        (b.chon ? '<div class="npt-bank" aria-hidden="true"><span>Chọn:</span>' +
          b.chon.map(function (w) { return '<b class="hanzi">' + esc(nhanChip(w)) + '</b>'; }).join('') + '</div>' : '') +
        '<ol class="npt-ds">' + b.cau.map(function (c, ci) { return veCau(c, idCua(b.so, pi, ci), b); }).join('') + '</ol>' +
        '<footer class="npt-card-f">' +
          '<button type="button" class="npt-nut npt-nut-phu" data-npt-dapan="' + b.so + '">' + (chiAi ? 'Xem câu mẫu' : 'Xem đáp án') + '</button>' +
          '<button type="button" class="npt-nut npt-nut-phu" data-npt-lamlai="' + b.so + '">Làm lại</button>' +
          '<span class="npt-card-dem" data-npt-dem="' + b.so + '"></span>' +
        '</footer>' +
      '</article>';
    }

    /* ---------------- cap nhat trang thai tung cau ---------------- */
    function giaiHtml(c) { return c.giai ? '<div class="npt-giai-ngan">💡 ' + esc(c.giai) + '</div>' : ''; }

    function capNhat(id) {
      var c = cauCua(id);
      var q = oNoi.querySelector('[data-npt-q="' + id + '"]');
      if (!c || !q) return;
      var kq = q.querySelector('[data-npt-kq]');
      var v = st.a[id];
      q.classList.remove('dung', 'sai', 'mau');

      if (c.kieu === 'dien') {
        var vd = Array.isArray(v) ? v : [];
        var du = daLam(c, vd);
        Array.prototype.forEach.call(q.querySelectorAll('.npt-o'), function (o) {
          var k = +o.getAttribute('data-k');
          o.classList.remove('dung', 'sai');
          if (du) o.classList.add(c.dap[k].indexOf(vd[k]) >= 0 ? 'dung' : 'sai');
        });
        if (!du) { kq.innerHTML = ''; return; }
        var ok = laDung(c, vd);
        q.classList.add(ok ? 'dung' : 'sai');
        kq.innerHTML = (ok ? '<span class="npt-ok">✓ Đúng rồi</span>'
          : '<span class="npt-no">✗ Chưa đúng</span> · đáp án: <b class="hanzi">' + c.dap.map(function (d) { return esc(nhanChip(d[0])); }).join(' / ') + '</b>') +
          giaiHtml(c);
        return;
      }
      if (c.kieu === 'vitri' || c.kieu === 'dungsai') {
        Array.prototype.forEach.call(q.querySelectorAll('[data-npt-pick]'), function (x) {
          x.classList.toggle('da', !!v && x.getAttribute('data-w') === v.chon);
        });
        if (!daLam(c, v)) { kq.innerHTML = ''; return; }
        var ok2 = laDung(c, v);
        q.classList.add(ok2 ? 'dung' : 'sai');
        var them = '';
        if (c.kieu === 'vitri') {
          if (!ok2) them = ' · đáp án: <b>' + c.dap.join(' hoặc ') + '</b>';
        } else {
          them = c.dung ? ' · câu này đúng' : (c.sua ? ' · câu này sai, sửa: <b class="hanzi">' + esc(c.sua) + '</b>' : ' · câu này sai');
        }
        kq.innerHTML = (ok2 ? '<span class="npt-ok">✓ Đúng rồi</span>' : '<span class="npt-no">✗ Chưa đúng</span>') + them + giaiHtml(c);
        return;
      }
      if (c.kieu === 'xep') { veManh(id); return; }
      if (c.kieu === 'vandung') { veKetQuaAi(id); return; }

      // go / viet / hoi / dich
      v = v || {};
      if (!v.tra || !v.kt) { kq.innerHTML = ''; return; }
      var kn = khungNhap(c);
      if (c.kieu === 'go') {
        var ok3 = laDung(c, v);
        q.classList.add(ok3 ? 'dung' : 'sai');
        kq.innerHTML = (ok3 ? '<span class="npt-ok">✓ Đúng rồi</span>'
          : '<span class="npt-no">✗ Chưa đúng</span> · đáp án: <b class="hanzi">' + esc(c.dap[0]) + '</b>') + giaiHtml(c);
        return;
      }
      var ok4 = khop(v.tra, c.dap, kn.truoc, kn.sau);
      q.classList.add(ok4 ? 'dung' : 'mau');
      kq.innerHTML = (ok4
        ? '<span class="npt-ok">✓ Chính xác</span>' + (khop(v.tra, [c.dap[0]], kn.truoc, kn.sau) ? ''
            : ' · cách này cũng đúng; trong đáp án viết: <b class="hanzi">' + esc(c.dap[0]) + '</b>')
        : '<span class="npt-mau-nhan">Đáp án mẫu</span> <b class="hanzi">' + esc(c.dap[0]) + '</b>' +
          (c.dap.length > 1 ? '<span class="npt-mau-ghi">Cũng đúng: ' + c.dap.slice(1).map(esc).join(' · ') + '</span>' : '') +
          '<span class="npt-mau-ghi">Câu của em khác đáp án mẫu — so lại xem đã đủ ý và đúng trật tự chưa.</span>') +
        (c.py && !ok4 ? '<div class="npt-py">' + esc(c.py) + '</div>' : '') + giaiHtml(c);
    }

    function veManh(id) {
      var c = cauCua(id);
      var v = st.a[id] || {};
      if (!v.thuTu || v.thuTu.length !== c.manh.length) { v.thuTu = xaoManh(c.manh, c.dap[0]); v.chon = []; }
      if (!v.chon) v.chon = [];
      st.a[id] = v;
      var khay = oNoi.querySelector('[data-npt-khay="' + id + '"]');
      var manh = oNoi.querySelector('[data-npt-manh="' + id + '"]');
      if (!khay || !manh) return;
      khay.innerHTML = v.chon.length
        ? v.chon.map(function (i, k) {
            return '<button type="button" class="npt-manh1 da" data-npt-tra="' + id + '" data-k="' + k + '">' + esc(v.thuTu[i]) + '</button>';
          }).join('')
        : '<span class="npt-khay-trong">Bấm các mảnh bên dưới theo đúng thứ tự…</span>';
      manh.innerHTML = v.thuTu.map(function (w, i) {
        var dung = v.chon.indexOf(i) >= 0;
        return '<button type="button" class="npt-manh1' + (dung ? ' an' : '') + '" data-npt-lay="' + id + '" data-i="' + i + '"' +
          (dung ? ' disabled aria-hidden="true"' : '') + '>' + esc(w) + '</button>';
      }).join('');
      var q = oNoi.querySelector('[data-npt-q="' + id + '"]');
      var kq = q.querySelector('[data-npt-kq]');
      q.classList.remove('dung', 'sai');
      v.xong = v.chon.length === v.thuTu.length;
      if (!v.xong) { v.dung = false; kq.innerHTML = ''; return; }
      var cau = v.chon.map(function (i) { return v.thuTu[i]; }).join('');
      v.dung = khop(cau, c.dap);
      q.classList.add(v.dung ? 'dung' : 'sai');
      kq.innerHTML = (v.dung
        ? '<span class="npt-ok">✓ Đúng rồi</span>' + (khop(cau, [c.dap[0]]) ? ' · <b class="hanzi">' + esc(c.dap[0]) + '</b>'
            : ' · cách xếp này cũng đúng; trong đáp án viết: <b class="hanzi">' + esc(c.dap[0]) + '</b>')
        : '<span class="npt-no">✗ Chưa đúng</span> — bấm mảnh để sửa · đáp án: <b class="hanzi">' + esc(c.dap[0]) + '</b>') +
        (v.dung ? giaiHtml(c) : '');
    }

    /* ---------------- AI cham cau van dung ---------------- */
    // Khi AI tam nghi: tu kiem tra co dung du tu bat buoc khong
    function kiemTuKhoa(c, tra) {
      var thieu = (c.can || []).filter(function (g) {
        return !g.some(function (w) { return tra.indexOf(w) >= 0; });
      });
      return thieu.map(function (g) { return g.join(' / '); });
    }
    function cauDayDu(c, tra) {
      if (c.tuDo) return tra;
      var kn = khungNhap(c);
      return kn.truoc + tra + kn.sau;
    }
    function veKetQuaAi(id) {
      var c = cauCua(id);
      var v = st.a[id] || {};
      var q = oNoi.querySelector('[data-npt-q="' + id + '"]');
      if (!q) return;
      var kq = q.querySelector('[data-npt-kq]');
      var nut = q.querySelector('[data-npt-ai]');
      q.classList.remove('dung', 'sai', 'mau', 'dang');
      if (nut) { nut.disabled = !!v.dang; nut.textContent = v.dang ? 'AI đang chấm…' : (v.kq ? '✦ Chấm lại' : '✦ Chấm điểm'); }
      if (v.dang) { q.classList.add('dang'); kq.innerHTML = '<span class="npt-dang">AI đang đọc câu của em…</span>'; return; }
      if (v.kq) {
        var r = v.kq;
        var muc = r.diem >= 9 ? 'tot' : r.diem >= 7 ? 'kha' : r.diem >= 5 ? 'tb' : 'yeu';
        q.classList.add(r.diem >= 7 ? 'dung' : 'mau');
        kq.innerHTML =
          '<div class="npt-ai-kq npt-ai-' + muc + '">' +
            '<div class="npt-ai-dau">' +
              '<span class="npt-ai-diem"><b>' + r.diem + '</b>/10</span>' +
              '<span class="npt-ai-ct">' + (r.dungCauTruc ? '✓ Dùng đúng điểm ngữ pháp' : '✗ Chưa dùng đúng điểm ngữ pháp') + '</span>' +
            '</div>' +
            (r.nhanXet ? '<p class="npt-ai-nx">' + esc(r.nhanXet) + '</p>' : '') +
            (r.loi && r.loi.length ? '<ul class="npt-ai-loi">' + r.loi.map(function (l) {
              return '<li><span class="npt-ai-sai hanzi">' + esc(l.sai) + '</span> → <span class="npt-ai-sua hanzi">' + esc(l.sua) + '</span>' +
                (l.giai ? '<div class="npt-ai-giai">' + esc(l.giai) + '</div>' : '') + '</li>';
            }).join('') + '</ul>' : '') +
            (r.cauSua && chuan(r.cauSua) !== chuan(v.day) ? '<div class="npt-ai-sua-cau"><span>Câu đã sửa</span><b class="hanzi">' + esc(r.cauSua) + '</b></div>' : '') +
            '<div class="npt-ai-mau"><span>Câu mẫu</span><b class="hanzi">' + esc(c.mau) + '</b></div>' +
          '</div>';
        return;
      }
      if (v.loiAi) {
        q.classList.add('mau');
        var thieu = kiemTuKhoa(c, v.tra || '');
        kq.innerHTML = '<div class="npt-ai-kq npt-ai-nghi">' +
          '<p class="npt-ai-nx">' + esc(v.loiAi) + '</p>' +
          ((c.can || []).length ? (thieu.length
            ? '<p class="npt-ai-tu">✗ Câu của em chưa có: <b class="hanzi">' + thieu.map(esc).join('</b>, <b class="hanzi">') + '</b></p>'
            : '<p class="npt-ai-tu">✓ Câu của em đã dùng đủ từ của điểm ngữ pháp.</p>') : '') +
          '<div class="npt-ai-mau"><span>Câu mẫu</span><b class="hanzi">' + esc(c.mau) + '</b></div>' +
        '</div>';
        return;
      }
      kq.innerHTML = '';
    }

    function chamAi(id) {
      var c = cauCua(id);
      var t = tach(id);
      var inp = oNoi.querySelector('[data-npt-in="' + id + '"]');
      var v = st.a[id] || {};
      v.tra = inp ? inp.value.trim() : '';
      st.a[id] = v;
      if (!v.tra) { if (inp) inp.focus(); return; }
      if (!/[㐀-鿿]/.test(v.tra)) {
        v.kq = null; v.loiAi = 'Em hãy viết bằng chữ Hán nhé.'; v.dang = false; veKetQuaAi(id); return;
      }
      v.day = cauDayDu(c, v.tra);
      v.dang = true; v.kq = null; v.loiAi = '';
      veKetQuaAi(id);
      var p = diem[t.pi];
      var h = { 'Content-Type': 'application/json' };
      var tk = tokenDangNhap();
      if (tk) h.Authorization = 'Bearer ' + tk;
      fetch('/api/ai/cham-cau', {
        method: 'POST', headers: h,
        body: JSON.stringify({
          diem: p.ten, cauTruc: p.cauTruc || [], de: c.de, goiY: c.goiY, mau: c.mau, tuDo: !!c.tuDo, tra: v.day
        })
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (!r.ok) throw new Error(j.error || 'AI chấm bài đang bận.');
          return j;
        });
      }).then(function (j) {
        v.dang = false; v.kq = j; v.loiAi = '';
        st.a[id] = v; luu(); veKetQuaAi(id); veDemCard(t.pi, t.so);
      }).catch(function (e) {
        v.dang = false; v.kq = null;
        v.loiAi = (e && e.message) || 'AI chấm bài đang bận.';
        if (!/đáp án mẫu|câu mẫu/i.test(v.loiAi)) v.loiAi += ' Em so với câu mẫu bên dưới nhé.';
        st.a[id] = v; luu(); veKetQuaAi(id);
      });
    }

    function veDemCard(pi, so) {
      var el = oNoi.querySelector('[data-npt-p="' + pi + '"][data-npt-bt="' + so + '"] [data-npt-dem]');
      var b = khoi(pi, so);
      if (!el || !b) return;
      var tong = 0, dung = 0, lam = 0, mem = 0, memDung = 0, aiLam = 0, aiTong = 0;
      b.cau.forEach(function (c, ci) {
        var v = st.a[idCua(so, pi, ci)];
        if (TU_CHAM[c.kieu]) {
          tong++;
          if (daLam(c, v)) { lam++; if (laDung(c, v)) dung++; }
        } else if (c.kieu === 'vandung') {
          if (v && v.kq) { aiLam++; aiTong += v.kq.diem; }
        } else if (v && v.kt && v.tra) {
          mem++;
          var kn = khungNhap(c);
          if (khop(v.tra, c.dap, kn.truoc, kn.sau)) memDung++;
        }
      });
      var ra = [];
      if (lam) ra.push('Đúng ' + dung + '/' + tong);
      if (mem) ra.push('Khớp đáp án mẫu ' + memDung + '/' + (b.cau.length - tong - (b.cau.filter(function (c) { return c.kieu === 'vandung'; }).length)));
      if (aiLam) ra.push('AI chấm ' + aiLam + ' câu · TB ' + (Math.round(aiTong / aiLam * 10) / 10) + '/10');
      el.textContent = ra.join(' · ');
    }

    function veLaiHet() {
      var pi = st.tab;
      (diem[pi].bt || []).forEach(function (b) {
        b.cau.forEach(function (c, ci) {
          var id = idCua(b.so, pi, ci);
          var v = st.a[id];
          if (c.kieu === 'vandung' && v && v.dang) v.dang = false;   // tai lai giua chung
          capNhat(id);
        });
        veDemCard(pi, b.so);
      });
    }

    function sauThayDoi(pi, so) {
      veDemCard(pi, so);
      veTab();
      veTongKet();
      luu();
    }

    /* ---------------- ve ca tab ---------------- */
    function veNoiDung() {
      var p = diem[st.tab];
      var bt = p.bt || [];
      oNoi.innerHTML = '<div class="npt">' +
        veLyThuyet(p) +
        (bt.length ? '<section class="npt-bt"><h3 class="npt-bt-h">Bài tập luyện tập</h3>' +
          bt.map(function (b) { return veKhoi(p, st.tab, b); }).join('') +
        '</section>' : '') +
        '<div class="npt-cuoi">' +
          '<p class="npt-tongket" aria-live="polite"></p>' +
          (st.tab < diem.length - 1
            ? '<button type="button" class="npt-nut npt-nut-lon" data-npt-tab="' + (st.tab + 1) + '">Sang điểm ' + (st.tab + 2) + ': ' + esc(nhanNgan(diem[st.tab + 1].ten).t) + ' →</button>'
            : '') +
        '</div>' +
      '</div>';
      veLaiHet();
      veTongKet();
    }

    function chonTab(i, cuon) {
      st.tab = i;
      luu();
      veTab();
      veNoiDung();
      if (cuon && oTab.scrollIntoView) oTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function veDapAn(card, pi, so, mo) {
      Array.prototype.forEach.call(card.querySelectorAll('.npt-dapan'), function (x) { x.remove(); });
      if (!mo) return;
      var b = khoi(pi, so);
      b.cau.forEach(function (c, ci) {
        var q = card.querySelector('[data-npt-q="' + idCua(so, pi, ci) + '"]');
        if (!q) return;
        var d = document.createElement('div');
        d.className = 'npt-dapan hanzi';
        var noi;
        if (c.kieu === 'dien') noi = c.dap.map(function (x) { return esc(nhanChip(x[0])); }).join(' / ');
        else if (c.kieu === 'vitri') noi = esc(c.dap.join(' hoặc '));
        else if (c.kieu === 'dungsai') noi = c.dung ? 'Đúng' : 'Sai' + (c.sua ? ' → ' + esc(c.sua) : '');
        else if (c.kieu === 'vandung') noi = esc(c.mau);
        else noi = esc(c.dap[0]) + (c.dap.length > 1 ? '<small>Cũng đúng: ' + c.dap.slice(1).map(esc).join(' · ') + '</small>' : '');
        d.innerHTML = '<span>' + (c.kieu === 'vandung' ? 'Câu mẫu' : 'Đáp án') + '</span> ' + noi;
        q.appendChild(d);
      });
    }

    /* ---------------- su kien (uy quyen, gan mot lan) ---------------- */
    function bam(e) {
      var t = e.target.closest ? e.target.closest('button') : null;
      if (!t) return;
      var a, id;
      if ((a = t.getAttribute('data-npt-tab')) != null) { chonTab(+a, t.closest('.npt-cuoi') != null); return; }
      if ((a = t.getAttribute('data-npt-noi')) != null) { if (opts.speak) opts.speak(a); return; }

      // dien — bam chip: dien vao o trong dau tien con trong
      if ((id = t.getAttribute('data-npt-chip')) != null) {
        var c = cauCua(id), v = (Array.isArray(st.a[id]) ? st.a[id] : []).slice();
        while (v.length < c.dap.length) v.push('');
        var w = t.getAttribute('data-w');
        if (c.ghep && w.indexOf('……') > 0) {
          v = w.split('……');
        } else {
          var k = v.indexOf('');
          if (k < 0) {
            for (var i = 0; i < v.length; i++) if (c.dap[i].indexOf(v[i]) < 0) { k = i; break; }
            if (k < 0) return;
          }
          v[k] = w;
        }
        st.a[id] = v;
        v.forEach(function (x, kk) {
          var o = oNoi.querySelector('[data-npt-o="' + id + '"][data-k="' + kk + '"]');
          if (o) { o.innerHTML = x ? esc(x) : '&nbsp;'; o.classList.toggle('co', !!x); }
        });
        capNhat(id);
        sauThayDoi(tach(id).pi, tach(id).so);
        return;
      }
      // dien — bam o da dien: xoa
      if ((id = t.getAttribute('data-npt-o')) != null) {
        var c2 = cauCua(id), v2 = (Array.isArray(st.a[id]) ? st.a[id] : []).slice(), k2 = +t.getAttribute('data-k');
        if (!v2[k2]) return;
        if (c2.ghep) v2 = v2.map(function () { return ''; }); else v2[k2] = '';
        st.a[id] = v2;
        v2.forEach(function (x, kk) {
          var o = oNoi.querySelector('[data-npt-o="' + id + '"][data-k="' + kk + '"]');
          if (o) { o.innerHTML = x ? esc(x) : '&nbsp;'; o.classList.toggle('co', !!x); }
        });
        capNhat(id);
        sauThayDoi(tach(id).pi, tach(id).so);
        return;
      }
      // vitri / dungsai
      if ((id = t.getAttribute('data-npt-pick')) != null) {
        var cv = cauCua(id), vv = st.a[id] || {};
        if (laDung(cv, vv)) return;          // da dung thi khoa
        vv.chon = t.getAttribute('data-w');
        st.a[id] = vv;
        capNhat(id);
        sauThayDoi(tach(id).pi, tach(id).so);
        return;
      }
      // xep — lay manh / tra manh
      if ((id = t.getAttribute('data-npt-lay')) != null) {
        st.a[id].chon.push(+t.getAttribute('data-i'));
        veManh(id);
        sauThayDoi(tach(id).pi, tach(id).so);
        return;
      }
      if ((id = t.getAttribute('data-npt-tra')) != null) {
        st.a[id].chon.splice(+t.getAttribute('data-k'), 1);
        veManh(id);
        sauThayDoi(tach(id).pi, tach(id).so);
        return;
      }
      // Kiem tra o nhap
      if ((id = t.getAttribute('data-npt-kt')) != null) {
        var inp = oNoi.querySelector('[data-npt-in="' + id + '"]');
        var v5 = st.a[id] || {};
        v5.tra = inp ? inp.value.trim() : '';
        v5.kt = !!v5.tra;
        st.a[id] = v5;
        capNhat(id);
        if (!v5.tra && inp) inp.focus();
        sauThayDoi(tach(id).pi, tach(id).so);
        return;
      }
      // AI cham
      if ((id = t.getAttribute('data-npt-ai')) != null) { chamAi(id); return; }
      // Xem dap an ca bai tap
      if ((a = t.getAttribute('data-npt-dapan')) != null) {
        var card = t.closest('.npt-card');
        var mo = !card.classList.contains('lo');
        card.classList.toggle('lo', mo);
        t.textContent = mo ? (+a === 4 ? 'Ẩn câu mẫu' : 'Ẩn đáp án') : (+a === 4 ? 'Xem câu mẫu' : 'Xem đáp án');
        veDapAn(card, +card.getAttribute('data-npt-p'), +a, mo);
        return;
      }
      // Lam lai ca bai tap
      if ((a = t.getAttribute('data-npt-lamlai')) != null) {
        var pi = +t.closest('.npt-card').getAttribute('data-npt-p');
        khoi(pi, +a).cau.forEach(function (_, ci) { delete st.a[idCua(+a, pi, ci)]; });
        daGhiDiem = false;
        luu();
        veTab();
        veNoiDung();
        var cardMoi = oNoi.querySelector('[data-npt-p="' + pi + '"][data-npt-bt="' + a + '"]');
        if (cardMoi && cardMoi.scrollIntoView) cardMoi.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Enter trong o nhap = bam Kiem tra / Cham diem (textarea: Ctrl+Enter)
    function phim(e) {
      if (e.key !== 'Enter') return;
      var id = e.target.getAttribute && e.target.getAttribute('data-npt-in');
      if (!id) return;
      if (e.target.tagName === 'TEXTAREA' && !(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      var nut = oNoi.querySelector('[data-npt-kt="' + id + '"]') || oNoi.querySelector('[data-npt-ai="' + id + '"]');
      if (nut) nut.click();
    }

    if (oTab.__npt) oTab.removeEventListener('click', oTab.__npt);
    if (oNoi.__npt) { oNoi.removeEventListener('click', oNoi.__npt); oNoi.removeEventListener('keydown', oNoi.__nptK); }
    oTab.__npt = bam; oNoi.__npt = bam; oNoi.__nptK = phim;
    oTab.addEventListener('click', bam);
    oNoi.addEventListener('click', bam);
    oNoi.addEventListener('keydown', phim);

    oTab.classList.add('npt-tabs');
    veTab();
    veNoiDung();
  }

  window.NguPhapTab = { render: render, _chuan: chuan, _khop: khop, _nhanNgan: nhanNgan };
})();
