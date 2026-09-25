/* ══════════════════════════════════════════════════════════════════
   TRANG TRO CHOI ON TU  (/game)
   ------------------------------------------------------------------
   Mot trang duy nhat phuc vu ca hai:
     · hoc sinh tu choi  — co dong ho, co diem
     · thay/co chieu lop — chu to, khong dem nguoc

   Danh sach bai lay tu APP_DATA (public/js/data.js) nen PHU DU
   moi cap do va moi bai dang co tren web — chon bai nao thi tro
   choi lay dung tu vung cua bai do.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var $ = function (s, g) { return (g || document).querySelector(s); };
  var $all = function (s, g) { return Array.prototype.slice.call((g || document).querySelectorAll(s)); };

  var state = {
    cheDo: 'hoc',
    level: 'hsk1',
    lessons: [],      // [{url, ten, so}]
    picked: {},       // url -> 1
    phien: null       // phien choi dang mo
  };

  /* ---------------- nho lua chon ---------------- */
  function luu() {
    try {
      localStorage.setItem('hyv_game', JSON.stringify({
        cheDo: state.cheDo, level: state.level, picked: Object.keys(state.picked)
      }));
    } catch (e) { /* bo qua */ }
  }
  function doc() {
    try {
      var d = JSON.parse(localStorage.getItem('hyv_game') || '{}');
      if (d.cheDo === 'lop' || d.cheDo === 'hoc') state.cheDo = d.cheDo;
      if (d.level) state.level = d.level;
      if (Array.isArray(d.picked)) d.picked.forEach(function (u) { state.picked[u] = 1; });
    } catch (e) { /* bo qua */ }
  }

  /* ---------------- danh sach cap do & bai ---------------- */
  // data.js khai bao `const APP_DATA` nen bien nam o pham vi script
  // chung chu KHONG gan len window — phai doc thang bang typeof.
  function duLieu() {
    return (typeof APP_DATA !== 'undefined') ? APP_DATA : {};
  }

  function capDo() {
    var D = duLieu();
    return (D.levels || []).filter(function (l) {
      return (D.lessons && D.lessons[l.id] || []).length;
    });
  }
  /* ---------------- nap ngu phap cua mot cap ----------------
     Moi cap co hai file: cau dien tu (GRAMMAR_EXTRA, rieng HSK2 bo cu
     dung HSK2_GRAMMAR_EXERCISES) va loi hay mac (GRAMMAR_ERRORS).
     Cap nao thieu file thi bo qua — tro choi van chay bang tu vung.  */
  var FILE_NP = {
    hsk1:   ['/js/grammar-hsk1.js', '/js/grammar-errors-hsk1.js'],
    hsk1v3: ['/js/grammar-hsk1v3.js', '/js/grammar-errors-hsk1v3.js'],
    hsk2:   ['/js/hsk2-grammar-exercises.js', '/js/grammar-errors-hsk2.js'],
    hsk2v3: ['/js/grammar-hsk2v3.js', '/js/grammar-errors-hsk2v3.js'],
    hsk3:   ['/js/grammar-hsk3.js', '/js/grammar-errors-hsk3.js'],
    hsk4:   ['/js/grammar-hsk4.js', '/js/grammar-errors-hsk4.js'],
    yct:    ['/js/grammar-yct.js', '/js/grammar-errors-yct.js']
  };
  var daNap = {};
  function napNguPhap(level) {
    var ds = FILE_NP[level];
    if (!ds || daNap[level]) return Promise.resolve();
    daNap[level] = 1;
    return Promise.all(ds.map(function (src) {
      return new Promise(function (xong) {
        var s = document.createElement('script');
        s.src = src;
        s.onload = xong;
        s.onerror = function () { xong(); };   // thieu file thi bo qua
        document.head.appendChild(s);
      });
    }));
  }

  /* Gom cau ngu phap cua dung nhung bai da chon, doi ve dang chung
     cho bo sinh cau hoi trong arcade.js. */
  function nguPhapDaChon() {
    var urls = {};
    state.lessons.forEach(function (l) { if (state.picked[l.url]) urls[l.url] = 1; });
    var ra = [];
    [window.GRAMMAR_EXTRA, window.HSK2_GRAMMAR_EXERCISES].forEach(function (nguon) {
      if (!nguon) return;
      Object.keys(nguon).forEach(function (u) {
        if (!urls[u]) return;
        (nguon[u] || []).forEach(function (nhom) {
          (nhom.items || []).forEach(function (q) {
            if (q.type && q.type !== 'mc') return;          // bo cau dung/sai, sap xep
            if (!q.options || q.options.length < 2) return;
            if (typeof q.answer !== 'number') return;
            ra.push({
              kieu: 'dien', point: nhom.point || '',
              context: q.context || '', pre: q.pre || '', post: q.post || '',
              options: q.options, answer: q.answer, explanation: q.explanation || ''
            });
          });
        });
      });
    });
    if (window.GRAMMAR_ERRORS) {
      Object.keys(window.GRAMMAR_ERRORS).forEach(function (u) {
        if (!urls[u]) return;
        (window.GRAMMAR_ERRORS[u] || []).forEach(function (e) {
          if (!e.wrong || !e.right) return;
          // Chi lay loi la CAU tieng Trung, bo nhung ghi chu bang tieng Viet.
          if (!/[一-鿿]/.test(e.wrong) || !/[一-鿿]/.test(e.right)) return;
          ra.push({ kieu: 'dungsai', point: e.point || '', wrong: e.wrong, right: e.right, why: e.why || '' });
        });
      });
    }
    return ra;
  }

  function baiCua(level) {
    var D = duLieu();
    var ds = (D.lessons && D.lessons[level]) || [];
    return ds.filter(function (b) { return b && b.fullPageUrl; }).map(function (b, i) {
      return {
        url: b.fullPageUrl,
        so: b.number || b.id || (i + 1),
        ten: b.title || b.name || ('Bài ' + (i + 1))
      };
    });
  }

  /* ---------------- nap tu vung cua mot bai ----------------
     File du lieu bai hoc la script gan bien toan cuc (vocabData...),
     nen nap trong iframe an de khong lam ban bien cua trang nay va
     de bai sau khong de len bai truoc.                              */
  var kho = {};
  function napBai(url) {
    if (kho[url]) return Promise.resolve(kho[url]);
    var src = url.replace('/lessons/', '/js/').replace('.html', '-data.js');
    return new Promise(function (resolve) {
      var ifr = document.createElement('iframe');
      ifr.style.display = 'none';
      document.body.appendChild(ifr);
      var xong = false;
      function tra(ds) {
        if (xong) return;
        xong = true;
        kho[url] = ds;
        try { document.body.removeChild(ifr); } catch (e) { /* bo qua */ }
        resolve(ds);
      }
      var d = ifr.contentDocument;
      var sc = d.createElement('script');
      sc.src = src;
      sc.onload = function () {
        var raw = (ifr.contentWindow && ifr.contentWindow.vocabData) || [];
        tra(raw.filter(function (v) { return v && v.zh && v.vn; }).map(function (v) {
          return {
            zh: v.zh, py: v.py || '', vn: v.vn, hv: v.hv || '',
            em: v.em || '', hanzi: Array.isArray(v.hanzi) ? v.hanzi : []
          };
        }));
      };
      sc.onerror = function () { tra([]); };
      d.body.appendChild(sc);
      setTimeout(function () { tra([]); }, 8000);   // file hong thi khong treo mai
    });
  }
  function napDaChon() {
    var urls = state.lessons.filter(function (l) { return state.picked[l.url]; })
      .map(function (l) { return l.url; });
    return Promise.all(urls.map(napBai)).then(function (phan) {
      var ra = [], thay = {};
      phan.forEach(function (ds) {
        ds.forEach(function (v) {
          if (thay[v.zh]) return;
          thay[v.zh] = 1;
          ra.push(v);
        });
      });
      return ra;
    });
  }

  /* ---------------- ve man chuan bi ---------------- */
  function veCapDo() {
    var sel = $('#ghLevel');
    sel.innerHTML = capDo().map(function (l) {
      return '<option value="' + l.id + '">' + l.name + '</option>';
    }).join('');
    if (!capDo().some(function (l) { return l.id === state.level; })) {
      state.level = (capDo()[0] || {}).id || 'hsk1';
    }
    sel.value = state.level;
    sel.addEventListener('change', function () {
      state.level = sel.value;
      state.picked = {};
      veBai();
      luu();
    });
  }

  function veBai() {
    state.lessons = baiCua(state.level);
    var wrap = $('#ghLessons');
    if (!state.lessons.length) {
      wrap.innerHTML = '<span class="gh-trong">Cấp này chưa có bài nào.</span>';
      demBai();
      return;
    }
    wrap.innerHTML = state.lessons.map(function (l) {
      return '<button type="button" class="lop-lesson-chip' + (state.picked[l.url] ? ' on' : '') +
        '" data-url="' + l.url + '" title="' + String(l.ten).replace(/"/g, '&quot;') + '">Bài ' + l.so + '</button>';
    }).join('');
    $all('.lop-lesson-chip', wrap).forEach(function (b) {
      b.addEventListener('click', function () {
        var u = b.getAttribute('data-url');
        if (state.picked[u]) delete state.picked[u]; else state.picked[u] = 1;
        b.classList.toggle('on');
        demBai();
        luu();
      });
    });
    demBai();
  }

  function demBai() {
    var ds = state.lessons.filter(function (l) { return state.picked[l.url]; });
    var p = $('#ghCount');
    if (!ds.length) {
      p.innerHTML = 'Chưa chọn bài nào — bấm vào số bài bên dưới.';
      p.classList.remove('on');
    } else {
      p.innerHTML = '✓ Đang chọn: <b>' + ds.map(function (l) { return 'Bài ' + l.so; }).join(' · ') + '</b>';
      p.classList.add('on');
    }
    veTro();
  }

  /* ---------------- danh sach tro choi ---------------- */
  function veTro() {
    var wrap = $('#ghGames');
    var soBai = state.lessons.filter(function (l) { return state.picked[l.url]; }).length;
    wrap.innerHTML = window.Arcade.danhSach().map(function (g) {
      var moTa = state.cheDo === 'lop' ? (g.moTaLop || g.moTa) : g.moTa;
      return '<button type="button" class="gh-game" data-game="' + g.key + '"' + (soBai ? '' : ' disabled') + '>' +
        '<span class="gh-game-emoji" style="background:var(--color-' + g.mau + '-50)">' + g.emoji + '</span>' +
        '<span class="gh-game-ten">' + g.ten + '</span>' +
        '<span class="gh-game-mo">' + moTa + '</span>' +
      '</button>';
    }).join('');
    if (!soBai) {
      wrap.insertAdjacentHTML('afterbegin', '<p class="gh-nhac">Chọn ít nhất một bài ở trên rồi mới chơi được.</p>');
    }
    $all('.gh-game[data-game]', wrap).forEach(function (b) {
      b.addEventListener('click', function () { batDau(b.getAttribute('data-game')); });
    });
  }

  /* ---------------- vao choi ---------------- */
  function batDau(key) {
    var g = window.Arcade.kho[key];
    var ds = state.lessons.filter(function (l) { return state.picked[l.url]; });
    $('#ghSetup').hidden = true;
    $('#ghPlay').hidden = false;
    $('#ghPlayTen').textContent = g.emoji + ' ' + g.ten;
    $('#ghPlayBai').textContent = ds.map(function (l) { return 'Bài ' + l.so; }).join(' · ');
    $('#ghStage').innerHTML = '<p class="gh-dangtai">Đang lấy từ vựng…</p>';
    document.body.classList.toggle('gh-dang-lop', state.cheDo === 'lop');

    // Tro trac nghiem con can them cau ngu phap cua bai, nen nap song song.
    Promise.all([napDaChon(), napNguPhap(state.level)]).then(function (ra) {
      var vocab = ra[0];
      if (!vocab.length) {
        $('#ghStage').innerHTML = '<p class="ar-thieu">Những bài vừa chọn chưa có dữ liệu từ vựng. Chọn bài khác giúp mình nhé.</p>';
        return;
      }
      if (state.phien) state.phien.dung();
      state.phien = window.Arcade.mo($('#ghStage'), key, {
        vocab: vocab,
        nguPhap: nguPhapDaChon(),
        cheDo: state.cheDo
      });
    });
  }

  function thoat() {
    if (state.phien) { state.phien.dung(); state.phien = null; }
    $('#ghStage').innerHTML = '';
    $('#ghPlay').hidden = true;
    $('#ghSetup').hidden = false;
    document.body.classList.remove('gh-dang-lop');
  }

  /* ---------------- khoi dong ---------------- */
  function chay() {
    doc();

    $all('#ghMode button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-mode') === state.cheDo);
      b.addEventListener('click', function () {
        state.cheDo = b.getAttribute('data-mode');
        $all('#ghMode button').forEach(function (x) {
          x.classList.toggle('active', x === b);
        });
        veTro();
        luu();
      });
    });

    $('#ghAll').addEventListener('click', function () {
      state.lessons.forEach(function (l) { state.picked[l.url] = 1; });
      veBai(); luu();
    });
    $('#ghNone').addEventListener('click', function () {
      state.picked = {};
      veBai(); luu();
    });
    $('#ghRand').addEventListener('click', function () {
      if (!state.lessons.length) return;
      state.picked = {};
      var l = state.lessons[Math.floor(Math.random() * state.lessons.length)];
      state.picked[l.url] = 1;
      veBai(); luu();
    });
    $('#ghBack').addEventListener('click', thoat);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !$('#ghPlay').hidden) thoat();
    });

    veCapDo();
    veBai();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', chay);
  else chay();
})();
