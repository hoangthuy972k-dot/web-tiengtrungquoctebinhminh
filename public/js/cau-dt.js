// Ve cau "xep cau" (keo tha) va "noi tu" tren dien thoai — dung chung cho /choi va /dk.
// CauDT.ve(el, c, gui): c.k === 'xep' | 'noi' thi ve vao el va tra ve true; gui(payload) khi em bam Kiem tra:
//   xep -> { xep: [chi so cua c.tu theo thu tu em xep] }, noi -> { noi: [chi so ben phai cho tung tu ben trai] }.
// Trac nghiem (khong co c.k) tra ve false — trang tu ve nut A/B/C/D nhu cu.
(function () {
  'use strict';
  var MAU = ['#e5533d', '#2f8a57', '#3f7fb5', '#c77d3a'];

  function esc(t) {
    return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function rung(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* bo qua */ } }

  /* ---------------- xep cau: cham de dua vao / keo tha de doi cho ---------------- */
  function veXep(el, c, gui) {
    var dat = [], xong = false;
    el.className = 'cdt cdt-xep-khung';
    el.innerHTML = '<div class="cdt-dich" data-vung="dich"><span class="cdt-goi">Chạm hoặc kéo các từ vào đây</span></div>' +
      '<div class="cdt-kho" data-vung="kho"></div>' +
      '<div class="cdt-nut"><button type="button" class="cdt-lai">↺ Xếp lại</button><button type="button" class="cdt-gui" disabled>Kiểm tra ✓</button></div>';
    var dich = el.querySelector('.cdt-dich'), kho = el.querySelector('.cdt-kho'), nutGui = el.querySelector('.cdt-gui');
    function the(i) { return '<button type="button" class="cdt-the" data-i="' + i + '" lang="zh">' + esc(c.tu[i]) + '</button>'; }
    function ve() {
      dich.innerHTML = dat.length ? dat.map(the).join('') : '<span class="cdt-goi">Chạm hoặc kéo các từ vào đây</span>';
      kho.innerHTML = c.tu.map(function (_, i) { return dat.indexOf(i) < 0 ? the(i) : '<span class="cdt-the cdt-trong" aria-hidden="true">' + esc(c.tu[i]) + '</span>'; }).join('');
      nutGui.disabled = xong || dat.length !== c.tu.length;
      dich.classList.toggle('du', dat.length === c.tu.length);
    }
    // vi tri chen trong vung dich theo toa do ngon tay (doc theo dong, trai -> phai)
    function viTriChen(x, y) {
      var ds = Array.prototype.slice.call(dich.querySelectorAll('.cdt-the:not(.cdt-dang-keo)'));
      for (var k = 0; k < ds.length; k++) {
        var r = ds[k].getBoundingClientRect();
        if (y < r.top) return k;
        if (y <= r.bottom && x < r.left + r.width / 2) return k;
      }
      return ds.length;
    }
    function trong(vung, x, y) { var r = vung.getBoundingClientRect(); return x >= r.left - 8 && x <= r.right + 8 && y >= r.top - 12 && y <= r.bottom + 12; }
    function dua(i, vung, viTri) {
      var cu = dat.indexOf(i);
      if (cu >= 0) dat.splice(cu, 1);
      if (vung === 'dich') {
        // viTri tinh tren cac the con lai (khong tinh the dang keo) nen chen thang, khong can tru vi tri cu
        if (viTri == null || viTri > dat.length) viTri = dat.length;
        dat.splice(viTri, 0, i);
      }
      rung(15);
      ve();
    }
    var keo = null;
    el.addEventListener('pointerdown', function (e) {
      var t = e.target.closest('.cdt-the[data-i]');
      if (!t || xong) return;
      keo = { i: +t.getAttribute('data-i'), x0: e.clientX, y0: e.clientY, t: t, bong: null, id: e.pointerId, tu: t.parentNode === dich ? 'dich' : 'kho' };
      try { t.setPointerCapture(e.pointerId); } catch (er) { /* bo qua */ }
    });
    el.addEventListener('pointermove', function (e) {
      if (!keo || e.pointerId !== keo.id) return;
      var dx = e.clientX - keo.x0, dy = e.clientY - keo.y0;
      if (!keo.bong && Math.abs(dx) + Math.abs(dy) < 8) return;
      if (!keo.bong) {
        var r = keo.t.getBoundingClientRect();
        keo.bong = keo.t.cloneNode(true);
        keo.bong.className = 'cdt-the cdt-bong';
        keo.bong.style.width = r.width + 'px';
        keo.dx = keo.x0 - r.left; keo.dy = keo.y0 - r.top;
        document.body.appendChild(keo.bong);
        keo.t.classList.add('cdt-dang-keo');
      }
      e.preventDefault();
      keo.bong.style.left = (e.clientX - keo.dx) + 'px';
      keo.bong.style.top = (e.clientY - keo.dy) + 'px';
      dich.classList.toggle('cdt-sap-tha', trong(dich, e.clientX, e.clientY));
    });
    function thaRa(e) {
      if (!keo || e.pointerId !== keo.id) return;
      var k = keo;
      keo = null;
      dich.classList.remove('cdt-sap-tha');
      if (!k.bong) { dua(k.i, k.tu === 'kho' ? 'dich' : 'kho'); return; } // cham nhe: doi vung
      k.bong.remove();
      k.t.classList.remove('cdt-dang-keo');
      if (e.type === 'pointercancel') { ve(); return; }
      if (trong(dich, e.clientX, e.clientY)) dua(k.i, 'dich', viTriChen(e.clientX, e.clientY));
      else if (trong(kho, e.clientX, e.clientY)) dua(k.i, 'kho');
      else ve();
    }
    el.addEventListener('pointerup', thaRa);
    el.addEventListener('pointercancel', thaRa);
    el.querySelector('.cdt-lai').addEventListener('click', function () { if (xong) return; dat = []; ve(); });
    nutGui.addEventListener('click', function () {
      if (xong || dat.length !== c.tu.length) return;
      xong = true;
      nutGui.disabled = true;
      el.classList.add('cdt-khoa');
      gui({ xep: dat.slice() });
    });
    el._moLai = function () { xong = false; el.classList.remove('cdt-khoa'); ve(); };
    ve();
  }

  /* ---------------- noi tu: cham 1 tu ben trai roi cham nghia ben phai ---------------- */
  function veNoi(el, c, gui) {
    var cap = c.trai.map(function () { return -1; }), chonT = -1, xong = false;
    el.className = 'cdt cdt-noi-khung';
    el.innerHTML = '<div class="cdt-noi"><div class="cdt-cot cdt-trai"></div><div class="cdt-cot cdt-phai"></div></div>' +
      '<div class="cdt-nut"><button type="button" class="cdt-lai">↺ Nối lại</button><button type="button" class="cdt-gui" disabled>Kiểm tra ✓</button></div>';
    var trai = el.querySelector('.cdt-trai'), phai = el.querySelector('.cdt-phai'), nutGui = el.querySelector('.cdt-gui');
    function mauCua(i) { return MAU[i % MAU.length]; }
    function ve() {
      trai.innerHTML = c.trai.map(function (t, i) {
        var co = cap[i] >= 0;
        return '<button type="button" class="cdt-o' + (co ? ' co' : '') + (chonT === i ? ' chon' : '') + '" data-t="' + i + '"' +
          (co ? ' style="--mau:' + mauCua(i) + '"' : '') + ' lang="zh"><span class="cdt-so">' + (i + 1) + '</span>' + esc(t) + '</button>';
      }).join('');
      phai.innerHTML = c.phai.map(function (t, j) {
        var ai = cap.indexOf(j);
        return '<button type="button" class="cdt-o' + (ai >= 0 ? ' co' : '') + '" data-p="' + j + '"' + (ai >= 0 ? ' style="--mau:' + mauCua(ai) + '"' : '') + '>' +
          (ai >= 0 ? '<span class="cdt-so">' + (ai + 1) + '</span>' : '<span class="cdt-so cdt-chu">' + 'ABCD'.charAt(j) + '</span>') + esc(t) + '</button>';
      }).join('');
      nutGui.disabled = xong || cap.some(function (x) { return x < 0; });
    }
    el.addEventListener('click', function (e) {
      if (xong) return;
      var t = e.target.closest('[data-t]'), p = e.target.closest('[data-p]');
      if (t) {
        var i = +t.getAttribute('data-t');
        if (cap[i] >= 0) { cap[i] = -1; chonT = i; } else chonT = chonT === i ? -1 : i;
        rung(10); ve(); return;
      }
      if (p) {
        var j = +p.getAttribute('data-p'), ai = cap.indexOf(j);
        if (chonT < 0) { if (ai >= 0) { cap[ai] = -1; ve(); } return; }
        if (ai >= 0) cap[ai] = -1;
        cap[chonT] = j;
        chonT = -1;
        rung(20); ve();
      }
    });
    el.querySelector('.cdt-lai').addEventListener('click', function () { if (xong) return; cap = cap.map(function () { return -1; }); chonT = -1; ve(); });
    nutGui.addEventListener('click', function () {
      if (xong || cap.some(function (x) { return x < 0; })) return;
      xong = true; nutGui.disabled = true; el.classList.add('cdt-khoa');
      gui({ noi: cap.slice() });
    });
    el._moLai = function () { xong = false; el.classList.remove('cdt-khoa'); ve(); };
    ve();
  }

  window.CauDT = {
    ve: function (el, c, gui) {
      if (!c || !c.k) return false;
      if (c.k === 'xep') veXep(el, c, gui);
      else if (c.k === 'noi') veNoi(el, c, gui);
      else return false;
      return true;
    },
    // gui loi (mang chap chon): cho em bam lai
    moLai: function (el) { if (el && el._moLai) el._moLai(); },
    // dap an dung de hien sau khi cham
    dapHtml: function (c, dap) {
      if (c.k === 'xep') return '<b lang="zh">' + esc(dap) + '</b>';
      if (c.k === 'noi') return (dap || []).map(function (j, i) { return '<b lang="zh">' + esc(c.trai[i]) + '</b> → ' + esc(c.phai[j]); }).join(' · ');
      return '';
    },
    dapText: function (c, dap) {
      if (c.k === 'xep') return String(dap || '');
      if (c.k === 'noi') return (dap || []).map(function (j, i) { return c.trai[i] + ' → ' + c.phai[j]; }).join(' · ');
      return '';
    },
    // de bai: lenh + nghia / cau
    deBai: function (c) {
      if (c.k === 'xep') return c.ctx ? '«' + c.ctx + '»' : '';
      if (c.k === 'noi') return '';
      return c.zh || '';
    }
  };
})();
