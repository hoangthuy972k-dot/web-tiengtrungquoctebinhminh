/* ══════════════════════════════════════════════════════════════════
   NGU PHAP CHIA THEO DIEM
   ------------------------------------------------------------------
   Moi diem ngu phap mot tab. Trong tab: cau truc -> giai thich -> vi du
   -> loi hoc sinh Viet hay mac -> ngay ben duoi la ba dang bai tap cua
   chinh diem do, dung nhu tai lieu cua giao vien:
     Bai tap 1  chon / dien tu            (co hoc)       — tu cham
     Bai tap 2  sap xep / viet lai cau    (ban giao tiep) — tu cham
     Bai tap 3  hoi thoai & dich          (giao tiep)     — so voi dap an mau

   Bai tap 3 la cau tu do, mot y co nhieu cach noi dung, nen web KHONG
   cham sai: khop dap an thi bao dung, khong khop thi hien dap an mau de
   em tu so. Diem bai hoc chi tinh bai tap 1 + 2.

   Dung: NguPhapTab.render(oTab, oNoiDung, diem, {
           key, speak(zh), onScore({correct, total}) })
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Bo dau cau, khoang trang de so dap an: "对不起，明天我要去公司。" = "对不起明天我要去公司"
  function chuan(s) {
    return String(s || '').replace(/[\s。，,.？?！!、；;：:"“”'‘’（）()…—\-·]/g, '');
  }

  function khop(tra, dsDap, dau) {
    var t = chuan(tra);
    if (!t) return false;
    var truoc = chuan(dau || '');
    return dsDap.some(function (d) {
      var c = chuan(d);
      return c === t || (truoc && c === truoc + t);
    });
  }

  // Nhan tab ngan: 助动词“要” -> 要 · 概数的表达：“几”和“多” -> 几 · 多
  function nhanNgan(ten) {
    var m = String(ten).match(/[“"]([^”"]+)[”"]/g);
    if (m && m.length) return m.map(function (x) { return x.replace(/[“”"]/g, ''); }).join(' · ');
    return ten;
  }

  // "Chon/dien tu thich hop (co hoc)" -> { ten, cap }
  function tachCap(tieuDe) {
    var m = String(tieuDe).match(/^(.+?)\s*[（(]([^)）]+)[)）]\s*$/);
    if (!m) return { ten: tieuDe, cap: '' };
    return { ten: m[1], cap: m[2].charAt(0).toUpperCase() + m[2].slice(1) };
  }

  var HAN = /[㐀-鿿豈-﫿]+/g;

  // To mau cong thuc: chu Han o ngoai ngoac -> do dam; trong ngoac (vi du
  // minh hoa) -> xam; Sub / V / O / Adj / N -> the nho.
  var NHAN_CT = /^(Phủ định|Nghi vấn|Khẳng định|Chú ý|Lưu ý)\s*[:：]\s*/;
  function coNhan(dong) { return NHAN_CT.test(dong); }
  // macDinh: dong khong ghi nhan trong khi cac dong khac co (Phu dinh / Nghi van)
  // thi do la cau khang dinh — ghi ro de cac dong thang cot.
  function veCongThuc(dong, macDinh) {
    var nhan = macDinh || '';
    var m = dong.match(NHAN_CT);
    if (m) { nhan = m[1]; dong = dong.slice(m[0].length); }
    var phan = dong.split(/(\([^)]*\)|（[^）]*）)/);
    var html = phan.map(function (p) {
      if (/^[(（]/.test(p)) {
        // "(+ O)" la thanh phan tuy chon, khong phai vi du
        if (/^[(（]\s*\+/.test(p)) return '<span class="npt-tuy">' + veTag(esc(p)) + '</span>';
        return '<span class="npt-ngoac">' + esc(p) + '</span>';
      }
      return veTag(esc(p).replace(HAN, function (h) { return '<b class="npt-han">' + h + '</b>'; }));
    }).join('');
    return (nhan ? '<span class="npt-ct-nhan">' + esc(nhan) + '</span>' : '') +
      '<span class="npt-ct-cong">' + html + '</span>';
  }
  function veTag(s) {
    return s.replace(/\b(Sub|Adj|V|O|N)\b/g, '<span class="npt-tag">$1</span>');
  }

  // Doi thu tu cac manh cho den khi khac thu tu dung (giu nguyen neu da khac)
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

  /* ---------------- luu lai bai dang lam ---------------- */
  function docLuu(key) {
    try { return JSON.parse(localStorage.getItem('hyv_npt:' + key) || '{}') || {}; }
    catch (e) { return {}; }
  }
  function ghiLuu(key, st) {
    try { localStorage.setItem('hyv_npt:' + key, JSON.stringify(st)); } catch (e) { /* bo qua */ }
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

    /* ---- tinh diem tren TOAN BAI (moi tab) ---- */
    function thongKe(chiDiem) {
      var tong = 0, lam = 0, dung = 0;
      diem.forEach(function (p, pi) {
        if (chiDiem != null && pi !== chiDiem) return;
        p.bt1.cau.forEach(function (c, ci) {
          tong++;
          var v = st.a['b1-' + pi + '-' + ci] || [];
          if (v.length === c.dap.length && v.every(Boolean)) {
            lam++;
            if (v.every(function (x, k) { return c.dap[k].indexOf(x) >= 0; })) dung++;
          }
        });
        p.bt2.cau.forEach(function (c, ci) {
          tong++;
          var v = st.a['b2-' + pi + '-' + ci];
          if (!v || !v.xong) return;
          lam++;
          if (v.dung) dung++;
        });
      });
      return { tong: tong, lam: lam, dung: dung };
    }

    function veTab() {
      oTab.innerHTML = diem.map(function (p, i) {
        var tk = thongKe(i);
        var xong = tk.tong && tk.lam === tk.tong;
        return '<button type="button" class="npt-tabbtn' + (i === st.tab ? ' active' : '') + '" data-npt-tab="' + i + '"' +
          ' aria-pressed="' + (i === st.tab) + '">' +
          '<span class="npt-tab-so">' + (i + 1) + '</span>' +
          '<span class="npt-tab-han">' + esc(nhanNgan(p.ten)) + '</span>' +
          '<span class="npt-tab-dem' + (xong ? ' xong' : '') + '">' + (xong ? '✓ ' : '') + tk.dung + '/' + tk.tong + '</span>' +
          '</button>';
      }).join('');
    }

    function veTongKet() {
      var tk = thongKe();
      var el = oNoi.querySelector('.npt-tongket');
      if (el) {
        el.innerHTML = 'Cả bài: đã làm <b>' + tk.lam + '/' + tk.tong + '</b> câu tự chấm · đúng <b>' + tk.dung + '</b>';
      }
      if (tk.tong && tk.lam === tk.tong && !daGhiDiem && typeof opts.onScore === 'function') {
        daGhiDiem = true;
        opts.onScore({ correct: tk.dung, total: tk.tong });
      }
    }

    /* ---------------- phan ly thuyet ---------------- */
    function veLyThuyet(p) {
      return '<header class="npt-head">' +
          '<span class="npt-so">' + esc(p.so) + '</span>' +
          '<div><h2 class="npt-ten hanzi">' + esc(p.ten) + '</h2>' +
          '<p class="npt-tenvn">' + esc(p.tenVn) + '</p></div>' +
        '</header>' +

        '<section class="npt-khoi npt-cautruc"><h3 class="npt-h">Cấu trúc</h3>' +
          '<ul>' + p.cauTruc.map(function (d) {
            return '<li>' + veCongThuc(d, p.cauTruc.some(coNhan) ? 'Khẳng định' : '') + '</li>';
          }).join('') + '</ul>' +
        '</section>' +

        '<section class="npt-khoi"><h3 class="npt-h">Giải thích</h3>' +
          '<p class="npt-giai">' + esc(p.giaiThich) + '</p>' +
        '</section>' +

        (p.viDu.length ? '<section class="npt-khoi"><h3 class="npt-h">Ví dụ</h3><ol class="npt-vidu">' +
          p.viDu.map(function (v) {
            return '<li><div class="npt-vd-zh hanzi">' + esc(v.zh) +
              (opts.speak ? ' <button type="button" class="npt-loa" data-npt-noi="' + esc(v.zh) + '" aria-label="Nghe câu này">🔊</button>' : '') +
              '</div><div class="npt-vd-py">' + esc(v.py) + '</div><div class="npt-vd-vn">' + esc(v.vn) + '</div></li>';
          }).join('') + '</ol></section>' : '') +

        (p.loi.length ? '<section class="npt-khoi npt-loi"><h3 class="npt-h">Lỗi học sinh Việt hay mắc</h3>' +
          p.loi.map(function (l) {
            return '<div class="npt-loi-mot">' +
              '<div class="npt-loi-sai hanzi"><span aria-hidden="true">✗</span> ' + esc(l.sai) + '</div>' +
              '<div class="npt-loi-vi">' + esc(l.why) + '</div>' +
              '<div class="npt-loi-dung hanzi"><span aria-hidden="true">✓</span> ' + esc(l.dung) + '</div>' +
            '</div>';
          }).join('') + '</section>' : '');
    }

    /* ---------------- khung chung cua mot bai tap ---------------- */
    function khungBT(so, tieuDe, huongDan, than, pi) {
      var t = tachCap(tieuDe);
      return '<article class="npt-card" data-npt-bt="' + so + '" data-npt-p="' + pi + '">' +
        '<header class="npt-card-h">' +
          (t.cap ? '<span class="npt-cap npt-cap-' + so + '">' + esc(t.cap) + '</span>' : '') +
          '<h4>Bài tập ' + so + ' — ' + esc(t.ten) + '</h4>' +
          '<p class="npt-hd">' + huongDan + '</p>' +
        '</header>' + than +
        '<footer class="npt-card-f">' +
          '<button type="button" class="npt-nut npt-nut-phu" data-npt-dapan="' + so + '">Xem đáp án</button>' +
          '<button type="button" class="npt-nut npt-nut-phu" data-npt-lamlai="' + so + '">Làm lại</button>' +
          '<span class="npt-card-dem" data-npt-dem="' + so + '"></span>' +
        '</footer>' +
      '</article>';
    }

    /* ---- Bai tap 1: dien tu ---- */
    function veBT1(p, pi) {
      var bt = p.bt1;
      var than = '<div class="npt-bank" aria-hidden="true"><span>Chọn:</span>' +
          bt.chon.map(function (w) { return '<b class="hanzi">' + esc(w) + '</b>'; }).join('') + '</div>' +
        '<ol class="npt-ds">' + bt.cau.map(function (c, ci) {
          var id = 'b1-' + pi + '-' + ci;
          var v = st.a[id] || [];
          var cau = '';
          c.phan.forEach(function (ph, k) {
            cau += esc(ph);
            if (k < c.phan.length - 1) {
              cau += '<button type="button" class="npt-o' + (v[k] ? ' co' : '') + '" data-npt-o="' + id + '" data-k="' + k + '"' +
                ' aria-label="Chỗ trống ' + (k + 1) + (v[k] ? ': ' + esc(v[k]) : '') + '">' + (v[k] ? esc(v[k]) : '&nbsp;') + '</button>';
            }
          });
          return '<li class="npt-q" data-npt-q="' + id + '">' +
            '<div class="npt-cau hanzi">' + cau + '</div>' +
            '<div class="npt-chon">' + bt.chon.map(function (w) {
              return '<button type="button" class="npt-chip hanzi" data-npt-chip="' + id + '" data-w="' + esc(w) + '">' + esc(w) + '</button>';
            }).join('') + '</div>' +
            '<div class="npt-kq" data-npt-kq="' + id + '" aria-live="polite"></div>' +
          '</li>';
        }).join('') + '</ol>';
      return khungBT(1, bt.tieuDe, 'Bấm từ bên dưới để điền vào chỗ trống. Bấm vào ô đã điền để xoá.', than, pi);
    }

    /* ---- Bai tap 2: sap xep / viet lai ---- */
    function veBT2(p, pi) {
      var bt = p.bt2;
      var coXep = bt.cau.some(function (c) { return c.kieu === 'xep'; });
      var coViet = bt.cau.some(function (c) { return c.kieu === 'viet'; });
      var hd = (coXep ? 'Bấm lần lượt các mảnh để ghép thành câu đúng; bấm mảnh đã ghép để trả lại.' : '') +
        (coViet ? (coXep ? ' ' : '') + 'Câu viết lại: gõ câu mới rồi bấm Kiểm tra.' : '');
      var than = '<ol class="npt-ds">' + bt.cau.map(function (c, ci) {
        var id = 'b2-' + pi + '-' + ci;
        if (c.kieu === 'viet') {
          var v = st.a[id] || {};
          return '<li class="npt-q" data-npt-q="' + id + '">' +
            '<div class="npt-yc">' + esc(c.yeuCau) + '</div>' +
            '<div class="npt-goc hanzi">' + esc(c.goc) + '</div>' +
            '<div class="npt-nhap">' +
              '<input type="text" class="npt-in hanzi" data-npt-in="' + id + '" value="' + esc(v.tra || '') + '" autocomplete="off" spellcheck="false" lang="zh" aria-label="Câu viết lại">' +
              '<button type="button" class="npt-nut" data-npt-kt="' + id + '">Kiểm tra</button>' +
            '</div>' +
            '<div class="npt-kq" data-npt-kq="' + id + '" aria-live="polite"></div>' +
          '</li>';
        }
        return '<li class="npt-q" data-npt-q="' + id + '">' +
          '<div class="npt-khay hanzi" data-npt-khay="' + id + '" aria-label="Câu em ghép"></div>' +
          '<div class="npt-manh" data-npt-manh="' + id + '"></div>' +
          '<div class="npt-kq" data-npt-kq="' + id + '" aria-live="polite"></div>' +
        '</li>';
      }).join('') + '</ol>';
      return khungBT(2, bt.tieuDe, hd, than, pi);
    }

    /* ---- Bai tap 3: hoi thoai / dich ---- */
    function veBT3(p, pi) {
      var bt = p.bt3;
      var than = '<ol class="npt-ds">' + bt.cau.map(function (c, ci) {
        var id = 'b3-' + pi + '-' + ci;
        var v = st.a[id] || {};
        var nhap = '<div class="npt-nhap">' +
            '<input type="text" class="npt-in hanzi" data-npt-in="' + id + '" value="' + esc(v.tra || '') + '"' +
              (c.kieu === 'hoi' ? ' placeholder="' + esc(c.goiY) + '"' : '') +
              ' autocomplete="off" spellcheck="false" lang="zh" aria-label="Câu trả lời">' +
            '<button type="button" class="npt-nut" data-npt-kt="' + id + '">Kiểm tra</button>' +
          '</div>';
        // Hoi thoai: o nhap nam ngay tren dong cua B, nhu dang noi tiep
        var de = c.kieu === 'hoi'
          ? '<div class="npt-hoi hanzi"><span class="npt-ai">A</span>' + esc(c.a) + '</div>' +
            '<div class="npt-hoi npt-hoi-b hanzi"><span class="npt-ai is-b">B</span>' +
              (c.bDau ? '<span class="npt-bdau">' + esc(c.bDau) + '</span>' : '') + nhap + '</div>'
          : '<div class="npt-yc">Dịch sang tiếng Trung</div><div class="npt-dich">' + esc(c.vn) + '</div>' + nhap;
        return '<li class="npt-q" data-npt-q="' + id + '">' + de +
          (c.kieu === 'hoi' ? '<div class="npt-goiy">Gợi ý: ' + esc(c.goiY) + '</div>' : '') +
          '<div class="npt-kq" data-npt-kq="' + id + '" aria-live="polite"></div>' +
        '</li>';
      }).join('') + '</ol>';
      return khungBT(3, bt.tieuDe, 'Gõ câu tiếng Trung rồi bấm Kiểm tra. Câu tự do có nhiều cách nói đúng — nếu khác đáp án mẫu, em tự so lại nhé.', than, pi);
    }

    /* ---------------- tim du lieu cau theo id ---------------- */
    function cauCua(id) {
      var m = id.split('-');
      var p = diem[+m[1]];
      return p ? p['bt' + m[0].slice(1)].cau[+m[2]] : null;
    }

    /* ---------------- cham + ve lai trang thai tung cau ---------------- */
    function capNhatBT1(id) {
      var c = cauCua(id), v = st.a[id] || [];
      var q = oNoi.querySelector('[data-npt-q="' + id + '"]');
      if (!q) return;
      var kq = q.querySelector('[data-npt-kq]');
      var du = v.length === c.dap.length && v.every(Boolean);
      q.classList.remove('dung', 'sai');
      Array.prototype.forEach.call(q.querySelectorAll('.npt-o'), function (o) {
        var k = +o.getAttribute('data-k');
        o.classList.remove('dung', 'sai');
        if (du) o.classList.add(c.dap[k].indexOf(v[k]) >= 0 ? 'dung' : 'sai');
      });
      if (!du) { kq.innerHTML = ''; return; }
      var ok = v.every(function (x, k) { return c.dap[k].indexOf(x) >= 0; });
      q.classList.add(ok ? 'dung' : 'sai');
      kq.innerHTML = ok ? '<span class="npt-ok">✓ Đúng rồi</span>'
        : '<span class="npt-no">✗ Chưa đúng</span> · đáp án: <b class="hanzi">' + c.dap.map(function (d) { return esc(d[0]); }).join(' / ') + '</b>';
    }

    function veManh(id) {
      var c = cauCua(id);
      var v = st.a[id] || {};
      if (!v.thuTu) v.thuTu = xaoManh(c.manh, c.dap[0]);
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
      kq.innerHTML = v.dung
        ? '<span class="npt-ok">✓ Đúng rồi</span>' + (khop(cau, [c.dap[0]]) ? ''
            : ' · cách xếp này cũng đúng; trong sách viết: <b class="hanzi">' + esc(c.dap[0]) + '</b>')
        : '<span class="npt-no">✗ Chưa đúng</span> — bấm mảnh để sửa · đáp án: <b class="hanzi">' + esc(c.dap[0]) + '</b>';
    }

    function chamNhap(id, bamNut) {
      var c = cauCua(id);
      var v = st.a[id] || {};
      var q = oNoi.querySelector('[data-npt-q="' + id + '"]');
      var kq = q.querySelector('[data-npt-kq]');
      q.classList.remove('dung', 'sai', 'mau');
      if (!v.tra || !v.kt) { kq.innerHTML = ''; if (id.charAt(1) === '2') { v.xong = false; v.dung = false; } return; }
      var ok = khop(v.tra, c.dap, c.bDau);
      if (id.charAt(1) === '2') {
        // Viet lai cau: cau ngan, mot dap an — cham dung / sai
        v.xong = true; v.dung = ok;
        q.classList.add(ok ? 'dung' : 'sai');
        kq.innerHTML = ok ? '<span class="npt-ok">✓ Đúng rồi</span>'
          : '<span class="npt-no">✗ Chưa đúng</span> · đáp án: <b class="hanzi">' + esc(c.dap[0]) + '</b>';
      } else {
        // Hoi thoai / dich: khong khop thi chi hien dap an mau, khong bao sai
        q.classList.add(ok ? 'dung' : 'mau');
        kq.innerHTML = ok ? '<span class="npt-ok">✓ Chính xác</span>' + (khop(v.tra, [c.dap[0]], c.bDau) ? ''
            : ' · cách nói này cũng đúng; trong sách viết: <b class="hanzi">' + esc(c.dap[0]) + '</b>')
          : '<span class="npt-mau-nhan">Đáp án mẫu</span> <b class="hanzi">' + esc(c.dap[0]) + '</b>' +
            '<span class="npt-mau-ghi">Câu của em khác đáp án mẫu — so lại xem đã đủ ý và đúng trật tự chưa.</span>';
      }
      st.a[id] = v;
    }

    function veDemCard(pi, so) {
      var el = oNoi.querySelector('[data-npt-p="' + pi + '"][data-npt-bt="' + so + '"] [data-npt-dem]');
      if (!el) return;
      var p = diem[pi], tong = p['bt' + so].cau.length, dung = 0, lam = 0;
      p['bt' + so].cau.forEach(function (c, ci) {
        var id = 'b' + so + '-' + pi + '-' + ci;
        var v = st.a[id];
        if (so === 1) {
          v = v || [];
          if (v.length === c.dap.length && v.every(Boolean)) {
            lam++;
            if (v.every(function (x, k) { return c.dap[k].indexOf(x) >= 0; })) dung++;
          }
        } else if (so === 2) {
          if (v && v.xong) { lam++; if (v.dung) dung++; }
        } else if (v && v.kt && v.tra) {
          lam++; if (khop(v.tra, c.dap, c.bDau)) dung++;
        }
      });
      el.textContent = lam ? (so === 3 ? 'Khớp đáp án mẫu ' + dung + '/' + tong : 'Đúng ' + dung + '/' + tong) : '';
    }

    function veLaiHet() {
      var pi = st.tab;
      diem[pi].bt1.cau.forEach(function (_, ci) { capNhatBT1('b1-' + pi + '-' + ci); });
      diem[pi].bt2.cau.forEach(function (c, ci) {
        var id = 'b2-' + pi + '-' + ci;
        if (c.kieu === 'xep') veManh(id); else chamNhap(id);
      });
      diem[pi].bt3.cau.forEach(function (_, ci) { chamNhap('b3-' + pi + '-' + ci); });
      [1, 2, 3].forEach(function (so) { veDemCard(pi, so); });
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
      oNoi.innerHTML = '<div class="npt">' +
        veLyThuyet(p) +
        '<section class="npt-bt"><h3 class="npt-bt-h">Bài tập luyện tập</h3>' +
          veBT1(p, st.tab) + veBT2(p, st.tab) + veBT3(p, st.tab) +
        '</section>' +
        '<div class="npt-cuoi">' +
          '<p class="npt-tongket" aria-live="polite"></p>' +
          (st.tab < diem.length - 1
            ? '<button type="button" class="npt-nut npt-nut-lon" data-npt-tab="' + (st.tab + 1) + '">Sang điểm ' + (st.tab + 2) + ': ' + esc(nhanNgan(diem[st.tab + 1].ten)) + ' →</button>'
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

    /* ---------------- su kien (uy quyen, gan mot lan) ---------------- */
    function bam(e) {
      var t = e.target.closest ? e.target.closest('button') : null;
      if (!t) return;
      var a;
      if ((a = t.getAttribute('data-npt-tab')) != null) { chonTab(+a, t.closest('.npt-cuoi') != null); return; }
      if ((a = t.getAttribute('data-npt-noi')) != null) { if (opts.speak) opts.speak(a); return; }

      // Bai tap 1 — bam chip: dien vao o trong dau tien con trong
      if ((a = t.getAttribute('data-npt-chip')) != null) {
        var c = cauCua(a), v = (st.a[a] || []).slice();
        while (v.length < c.dap.length) v.push('');
        var k = v.indexOf('');
        if (k < 0) {
          // Da dien du ma sai: bam chip moi thay o sai dau tien
          k = -1;
          for (var i = 0; i < v.length; i++) if (c.dap[i].indexOf(v[i]) < 0) { k = i; break; }
          if (k < 0) return;
        }
        v[k] = t.getAttribute('data-w');
        st.a[a] = v;
        var o = oNoi.querySelector('[data-npt-o="' + a + '"][data-k="' + k + '"]');
        if (o) { o.innerHTML = esc(v[k]); o.classList.add('co'); }
        capNhatBT1(a);
        sauThayDoi(+a.split('-')[1], 1);
        return;
      }
      // Bai tap 1 — bam o da dien: xoa
      if ((a = t.getAttribute('data-npt-o')) != null) {
        var v2 = (st.a[a] || []).slice(), k2 = +t.getAttribute('data-k');
        if (!v2[k2]) return;
        v2[k2] = '';
        st.a[a] = v2;
        t.innerHTML = '&nbsp;'; t.classList.remove('co');
        capNhatBT1(a);
        sauThayDoi(+a.split('-')[1], 1);
        return;
      }
      // Bai tap 2 — lay manh / tra manh
      if ((a = t.getAttribute('data-npt-lay')) != null) {
        var v3 = st.a[a];
        v3.chon.push(+t.getAttribute('data-i'));
        veManh(a);
        sauThayDoi(+a.split('-')[1], 2);
        return;
      }
      if ((a = t.getAttribute('data-npt-tra')) != null) {
        var v4 = st.a[a];
        v4.chon.splice(+t.getAttribute('data-k'), 1);
        veManh(a);
        sauThayDoi(+a.split('-')[1], 2);
        return;
      }
      // Kiem tra o nhap
      if ((a = t.getAttribute('data-npt-kt')) != null) {
        var inp = oNoi.querySelector('[data-npt-in="' + a + '"]');
        var v5 = st.a[a] || {};
        v5.tra = inp ? inp.value.trim() : '';
        v5.kt = !!v5.tra;
        st.a[a] = v5;
        chamNhap(a);
        if (!v5.tra && inp) inp.focus();
        sauThayDoi(+a.split('-')[1], +a.charAt(1));
        return;
      }
      // Xem dap an ca bai tap
      if ((a = t.getAttribute('data-npt-dapan')) != null) {
        var card = t.closest('.npt-card');
        var mo = !card.classList.contains('lo');
        card.classList.toggle('lo', mo);
        t.textContent = mo ? 'Ẩn đáp án' : 'Xem đáp án';
        veDapAn(card, +card.getAttribute('data-npt-p'), +a, mo);
        return;
      }
      // Lam lai ca bai tap
      if ((a = t.getAttribute('data-npt-lamlai')) != null) {
        var pi = +t.closest('.npt-card').getAttribute('data-npt-p');
        diem[pi]['bt' + a].cau.forEach(function (_, ci) { delete st.a['b' + a + '-' + pi + '-' + ci]; });
        daGhiDiem = false;
        luu();
        veTab();
        veNoiDung();
        var cardMoi = oNoi.querySelector('[data-npt-p="' + pi + '"][data-npt-bt="' + a + '"]');
        if (cardMoi && cardMoi.scrollIntoView) cardMoi.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function veDapAn(card, pi, so, mo) {
      Array.prototype.forEach.call(card.querySelectorAll('.npt-dapan'), function (x) { x.remove(); });
      if (!mo) return;
      diem[pi]['bt' + so].cau.forEach(function (c, ci) {
        var q = card.querySelector('[data-npt-q="b' + so + '-' + pi + '-' + ci + '"]');
        if (!q) return;
        var d = document.createElement('div');
        d.className = 'npt-dapan hanzi';
        d.innerHTML = '<span>Đáp án</span> ' + (so === 1
          ? c.dap.map(function (x) { return esc(x[0]); }).join(' / ')
          : esc(c.dap[0]) + (c.dap.length > 1 ? '<small>Cũng đúng: ' + c.dap.slice(1).map(esc).join(' · ') + '</small>' : ''));
        q.appendChild(d);
      });
    }

    // Enter trong o nhap = bam Kiem tra
    function phim(e) {
      if (e.key !== 'Enter') return;
      var id = e.target.getAttribute && e.target.getAttribute('data-npt-in');
      if (!id) return;
      e.preventDefault();
      var nut = oNoi.querySelector('[data-npt-kt="' + id + '"]');
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

  window.NguPhapTab = { render: render, _chuan: chuan, _khop: khop };
})();
