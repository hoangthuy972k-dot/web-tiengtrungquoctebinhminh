/* Dung du lieu cho Che do lop hoc (/lop): public/js/lop-<cap>.js
   Moi bai gom 3 bo cau cho cac tro "Bat loi sai", "Gio the A/B/C", "Xep cau" (va de kiem tra):
     1) bai tap RIENG cua chinh bai do (fillData, sortData, mcData, errorFixData trong /js/<bai>-data.js)
        — giu het vi day la noi dung cua bai;
     2) bai tap ngu phap chung cua cap (grammar-*.js, grammar-errors-*.js) — CHI giu cau ma moi chu Han
        deu da hoc tinh den bai do (tu vung + bai khoa cac bai truoc va cap duoi).
   Cau A/B/C luon co 3 phuong an va dap an nam trong 3 phuong an do.
   Chay: node tools/build-lop.js            (moi cap)
         node tools/build-lop.js hsk3v3     (mot cap)
   Chay lai moi khi them / sua bai. Xong chay: node tools/stamp-assets.js --that */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const W = path.join(__dirname, '..', 'public');

function chay(code, extra) {
  const c = { window: {}, console: { log() {}, warn() {}, error() {} } };
  c.window.window = c.window;
  vm.createContext(c);
  try { vm.runInContext(code + (extra || ''), c, { timeout: 5000 }); } catch (e) { /* bo qua file loi */ }
  return c.window;
}
const doc = (f) => { try { return fs.readFileSync(path.join(W, f), 'utf8'); } catch (e) { return ''; } };

const APP = chay(doc('js/data.js'), ';window.A=APP_DATA;').A;

// File bai tap ngu phap chung cua tung cap (giong lop.js truoc day)
const GRAMMAR = {
  hsk1: ['js/grammar-hsk1.js', 'js/grammar-errors-hsk1.js'],
  hsk1v3: ['js/grammar-hsk1v3.js', 'js/grammar-errors-hsk1v3.js'],
  hsk2: ['js/hsk2-grammar-exercises.js', 'js/grammar-errors-hsk2.js'],
  hsk2v3: ['js/grammar-hsk2v3.js', 'js/grammar-errors-hsk2v3.js'],
  hsk3v3: ['js/grammar-hsk3v3.js', 'js/grammar-errors-hsk3v3.js'],
  hsk3: ['js/grammar-hsk3.js', 'js/grammar-errors-hsk3.js'],
  hsk4: ['js/grammar-hsk4.js', 'js/grammar-errors-hsk4.js'],
  yct: ['js/grammar-yct.js', 'js/grammar-errors-yct.js'],
};
// Hoc sinh hoc cap nay coi nhu da biet chu cua cac cap duoi
const DUOI = {
  hsk2: ['hsk1'], hsk3: ['hsk1', 'hsk2'], hsk4: ['hsk1', 'hsk2', 'hsk3'],
  hsk5: ['hsk1', 'hsk2', 'hsk3', 'hsk4'], hsk6: ['hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5'],
  hsk2v3: ['hsk1v3'], hsk3v3: ['hsk1v3', 'hsk2v3'],
};

// Cap duoc lay cau trong sach bai tap (wbData) lam cau hoi tro choi
const SBT_VAO_GAME = ['hsk1'];
// Cau SBT tach khoi sach thi co hon mot dap an hop ly (trong sach moi tu chi dung 1 lan nen hoc
// sinh loai tru duoc) hoac noi dung loi -> khong dua vao tro choi. Khoa = pre + '＿' + post.
const SBT_BO = new Set([
  '我＿会写我的汉语名字。', '今天是9＿31号，星期六。', '明天星期六，你＿什么？', '我想＿米饭。', '您好，您＿茶吗？',
  '请坐，这儿的中国菜＿好吃。', '中国菜很好吃，我们做中国菜＿。', '你们都来我家吃饭吧，我做了＿菜。',
]);

const HAN = /[㐀-鿿]/g;
const han = (s) => String(s || '').match(HAN) || [];

const baiCache = {};
function bai(url) {
  if (baiCache[url]) return baiCache[url];
  const code = doc(url.replace('/lessons/', 'js/').replace('.html', '-data.js'));
  const g = (n) => 'typeof ' + n + '!=="undefined"?' + n + ':null';
  const w = chay(code, ';window.D={vocab:' + g('vocabData') + ',dialog:' + g('dialogData') + ',fill:' + g('fillData') +
    ',sort:' + g('sortData') + ',mc:' + g('mcData') + ',err:' + g('errorFixData') + ',errMode:' + g('errorFixMode') + ',wb:' + g('wbData') + '};');
  const D = w.D || {};
  const chu = new Set();
  (D.vocab || []).forEach((v) => han(v && v.zh).forEach((h) => chu.add(h)));
  (D.dialog || []).forEach((d) => (d && d.lines || []).forEach((l) => han(l && l.zh).forEach((h) => chu.add(h))));
  return (baiCache[url] = { D, chu });
}

// Lam sach cau Han (giong lop.js): bo ve sau "／", tach chu thich cuoi trong ngoac
function cauHan(raw) {
  if (!raw) return null;
  let s = String(raw).trim();
  if (s.indexOf('／') >= 0) s = s.split('／')[0].trim();
  let note = '';
  s = s.replace(/[（(]([^）)]*)[）)]\s*$/, (m, inner) => { note = inner.trim(); return ''; }).trim();
  if (!s || /[A-Za-zÀ-ỹ]/.test(s) || han(s).length < 2) return null;
  return { text: s, note };
}

// Ghep the tu thanh dap an (giong lop.js) — khong ghep duoc thi bo cau xep
function xepDuoc(words, answer) {
  const pool = words.map((w) => ({ w, used: false })).sort((a, b) => b.w.length - a.w.length);
  let rest = answer;
  while (rest.length) {
    const f = pool.find((p) => !p.used && rest.indexOf(p.w) === 0);
    if (!f) { if (/^[。！？，、；：“”"'（）]/.test(rest)) { rest = rest.slice(1); continue; } return false; }
    f.used = true; rest = rest.slice(f.w.length);
  }
  return pool.every((p) => p.used);
}

// Loi dan tieng Viet truoc cau Han ("Bạn hỏi …: “你是＿＿人吗？”") -> tach thanh dong goi y,
// cau chieu len bang chi con phan chu Han.
function tachDan(pre, post, ctx) {
  pre = String(pre || ''); post = String(post || ''); ctx = ctx || '';
  const mo = Math.max(pre.lastIndexOf('“'), pre.lastIndexOf('"'), pre.lastIndexOf('「'));
  if (mo >= 0 && /[A-Za-zÀ-ỹ]/.test(pre.slice(0, mo))) {
    const dan = pre.slice(0, mo).replace(/[:：\s]+$/, '');
    ctx = dan + (ctx ? ' — ' + ctx : '');
    pre = pre.slice(mo + 1);
    post = post.replace(/[”"」]([^”"」]*)$/, '$1');
  }
  return { pre, post, ctx };
}

// Goi y cua bai tap ("(có)", "(đừng)") -> bo ngoac ngoai; rong thi tra ''
function goiY(h) {
  return String(h || '').trim().replace(/^[（(]\s*|\s*[）)]$/g, '').trim();
}

// 3 phuong an, dap an luon nam trong do. Chon nhieu nhieu khac dap an, uu tien cung do dai.
function baPhuongAn(dung, nhieu) {
  const ds = [];
  const them = (x) => { if (x && x !== dung && ds.indexOf(x) < 0) ds.push(x); };
  nhieu.filter((x) => String(x).length === String(dung).length).forEach(them);
  nhieu.forEach(them);
  return [dung].concat(ds.slice(0, 2));
}

function dungCap(level) {
  const lessons = (APP.lessons[level] || []).slice().sort((a, b) => a.number - b.number);
  if (!lessons.length) return null;
  // ngu phap chung
  let gw = {};
  (GRAMMAR[level] || []).forEach((f) => { gw = Object.assign(gw, chay(doc(f))); });
  const bank = Object.assign({}, gw.GRAMMAR_EXTRA || {}, gw.HSK2_GRAMMAR_EXERCISES || {});
  const errBank = gw.GRAMMAR_ERRORS || {};

  // chu da hoc cua cac cap duoi
  const duoi = new Set();
  (DUOI[level] || []).forEach((d) => (APP.lessons[d] || []).forEach((L) => bai(L.fullPageUrl).chu.forEach((h) => duoi.add(h))));

  const daHoc = new Set(duoi);
  const thongKe = { rieng: 0, chung: 0, boChung: 0 };
  const out = lessons.map((L) => {
    const url = L.fullPageUrl;
    const B = bai(url);
    B.chu.forEach((h) => daHoc.add(h));
    const hocRoi = (t) => han(t).every((h) => daHoc.has(h));
    const D = B.D;
    const judges = [], mcs = [], sorts = [];
    const seenJ = {}, seenM = {}, seenS = {};
    const themJ = (j) => { if (seenJ[j.sentence]) return; seenJ[j.sentence] = 1; judges.push(j); };
    const themM = (m) => {
      // Goi y nghia trong ngoac o cuoi cau ("…门开着呢。（bên phải）") -> tach ra truong hint rieng.
      // Goi y hay chinh la nghia cua dap an -> lop.js an sau nut "Gợi ý", thay/co bam moi hien.
      const ng = String(m.post || '').match(/[（(]([^）)]*[A-Za-zÀ-ỹ][^）)]*)[）)]\s*$/);
      if (ng) { m.post = m.post.slice(0, ng.index).trimEnd(); m.hint = (m.hint ? m.hint + ' — ' : '') + ng[1].trim(); }
      if (!m.hint) delete m.hint;
      const k = m.pre + '|' + m.options[m.answer] + '|' + m.post; if (seenM[k]) return; seenM[k] = 1; mcs.push(m); };
    const themS = (s) => { if (seenS[s.answer] || !xepDuoc(s.words, s.answer)) return; seenS[s.answer] = 1; sorts.push(s); };

    /* ---- 1) bai tap rieng cua bai ---- */
    const fills = (D.fill || []).filter((q) => q && q.ans);
    const tuBai = (D.vocab || []).map((v) => v && v.zh).filter(Boolean);
    fills.forEach((q) => {
      const nhieu = fills.map((x) => x.ans).concat(tuBai);
      const opts = baPhuongAn(q.ans, nhieu);
      if (opts.length < 3) return;
      const t = tachDan(q.pre, q.post, '');
      themM({ pre: t.pre, post: t.post, options: opts, answer: 0, context: t.ctx, hint: goiY(q.hint), why: q.exp || '', point: '', src: 'bai' });
      thongKe.rieng++;
    });
    (D.mc || []).forEach((q) => {
      if (!q || !Array.isArray(q.opts) || typeof q.ans !== 'number' || !q.opts[q.ans]) return;
      const opts = [q.opts[q.ans]].concat(q.opts.filter((o, i) => i !== q.ans).slice(0, 2));
      const t = String(q.q || '');
      const cat = t.split(/＿+|_{2,}|（\s*）/);
      if (cat.length === 2) {
        const t = tachDan(cat[0], cat[1].replace(/[（(][^）)]*[）)]\s*$/, ''), '');
        themM({ pre: t.pre, post: t.post, options: opts, answer: 0, context: t.ctx, hint: goiY((cat[1].match(/[（(]([^）)]*)[）)]\s*$/) || [])[1]), why: q.exp || '', point: '', src: 'bai' });
      } else {
        themM({ pre: t, post: '', noBlank: true, options: opts, answer: 0, context: '', why: q.exp || '', point: '', src: 'bai' });
      }
      thongKe.rieng++;
    });
    (D.sort || []).forEach((q) => {
      if (!q || !Array.isArray(q.words) || q.words.length < 3) return;
      const ans = String(q.ans || q.answer || '').split('／')[0].trim();
      if (!ans) return;
      themS({ words: q.words.slice(), answer: ans, context: q.vn || '', why: '', point: '', src: 'bai' });
      thongKe.rieng++;
    });
    (D.err || []).forEach((q) => {
      if (!q || !Array.isArray(q.opts) || typeof q.ans !== 'number') return;
      if (D.errMode === 'wordchoice' || /_{2,}|＿/.test(q.wrong || '')) {
        const cat = String(q.wrong || '').split(/_{2,}|＿+/);
        if (cat.length !== 2) return;
        const opts = [q.opts[q.ans]].concat(q.opts.filter((o, i) => i !== q.ans).slice(0, 2));
        themM({ pre: cat[0], post: cat[1], options: opts, answer: 0, context: '', why: q.exp || '', point: '', src: 'bai' });
      } else {
        const w = cauHan(q.wrong), r = cauHan(q.opts[q.ans]);
        if (!w || !r || w.text === r.text) return;
        themJ({ sentence: w.text, note: w.note, isCorrect: false, fix: r.text, why: q.exp || '', point: '', src: 'bai' });
        themJ({ sentence: r.text, note: r.note, isCorrect: true, fix: '', why: '', point: '', src: 'bai' });
      }
      thongKe.rieng++;
    });

    /* ---- 1b) sach bai tap (wbData, phan Doc): cau dien tu vao cho trong.
       Cau nhin tranh / dung–sai khong lay. Chi cap trong SBT_VAO_GAME. ---- */
    if (SBT_VAO_GAME.indexOf(level) >= 0 && D.wb && Array.isArray(D.wb.sections)) {
      D.wb.sections.forEach((sec) => (sec.blocks || []).forEach((b) => {
        if (b.type !== 'mocktest') return;
        let bank = null;
        (b.reading || []).forEach((q) => {
          if (q.bank) bank = q.bank;
          if (q.part && !q.bank) bank = null;
          if (q.img || !q.answer || !q.prompt) return;
          const ds = (q.options || (q.letters ? (bank || []).filter((x) => q.letters.indexOf(x.key) >= 0) : [])).filter((o) => o && o.text);
          const dung = ds.find((o) => o.key === q.answer);
          if (!dung || ds.length < 3 || ds.some((o) => /[✓✗]/.test(o.text))) return;
          const opts = [dung.text].concat(ds.filter((o) => o !== dung).map((o) => o.text).slice(0, 2));
          const cat = String(q.prompt).split(/（\s*）|\(\s*\)/);
          if (cat.length === 2 && SBT_BO.has(cat[0].trim() + '＿' + cat[1].trim())) return;
          if (cat.length === 2) themM({ pre: cat[0].trim(), post: cat[1].trim(), options: opts, answer: 0, context: '', why: q.vn || '', point: '', src: 'sbt' });
          // cau ghep hoi–dap khong lay: dap an nhieu lay tu ngan chung de co cau cung hop ly (hai dap an dung)
          else return;
          thongKe.rieng++;
        });
      }));
    }

    /* ---- 2) bai tap ngu phap chung — chi cau toan chu da hoc ---- */
    const loc = (t) => { if (hocRoi(t)) { thongKe.chung++; return true; } thongKe.boChung++; return false; };
    (bank[url] || []).forEach((g) => (g.items || []).forEach((q) => {
      if (q.type === 'judge') {
        const c = cauHan(q.sentence);
        if (!c || !loc(c.text)) return;
        const f = q.correctVersion ? cauHan(q.correctVersion) : null;
        themJ({ sentence: c.text, note: c.note, isCorrect: !!q.isCorrect, fix: f ? f.text : '', why: q.explanation || '', point: g.point || '' });
      } else if (!q.type || q.type === 'mc') {
        if (!q.options || q.options.length < 2 || typeof q.answer !== 'number' || !q.options[q.answer]) return;
        if (!loc((q.pre || '') + q.options[q.answer] + (q.post || '') + q.options.join(''))) return;
        const opts = [q.options[q.answer]].concat(q.options.filter((o, i) => i !== q.answer).slice(0, 2));
        themM({ pre: q.pre || '', post: q.post || '', options: opts, answer: 0, context: q.context || '', why: q.explanation || '', point: g.point || '' });
      } else if (q.type === 'sort' && Array.isArray(q.words) && q.words.length >= 3 && q.answer) {
        const ans = String(q.answer).split('／')[0].trim();
        if (!loc(ans)) return;
        themS({ words: q.words.slice(), answer: ans, context: q.context || '', why: q.explanation || '', point: g.point || '' });
      }
    }));
    (errBank[url] || []).forEach((e) => {
      const w = cauHan(e.wrong), r = cauHan(e.right);
      if (!w || !r || !loc(w.text + r.text)) return;
      themJ({ sentence: w.text, note: w.note, isCorrect: false, fix: r.text, why: e.why || '', point: e.point || '' });
      themJ({ sentence: r.text, note: r.note, isCorrect: true, fix: '', why: '', point: e.point || '' });
    });

    return { n: L.number, url, title: L.titleHanzi || L.title || '', judges, mcs, sorts };
  });
  return { out, thongKe };
}

const chi = process.argv[2];
Object.keys(APP.lessons).forEach((level) => {
  if (chi && level !== chi) return;
  const r = dungCap(level);
  if (!r) return;
  const f = path.join(W, 'js', 'lop-' + level + '.js');
  fs.writeFileSync(f, '// Du lieu Che do lop hoc — sinh boi tools/build-lop.js, dung sua tay.\n' +
    'window.LOP_DATA = window.LOP_DATA || {};\nwindow.LOP_DATA[' + JSON.stringify(level) + '] = ' + JSON.stringify(r.out) + ';\n');
  const t = r.out.reduce((a, l) => ({ j: a.j + l.judges.length, m: a.m + l.mcs.length, s: a.s + l.sorts.length }), { j: 0, m: 0, s: 0 });
  const it = r.out.filter((l) => l.mcs.length < 3 || l.sorts.length < 1).map((l) => l.n);
  console.log(level + ': ' + r.out.length + ' bai · ' + t.j + ' dung/sai · ' + t.m + ' A/B/C · ' + t.s + ' xep · bai tap rieng ' + r.thongKe.rieng +
    ' · ngu phap chung giu ' + r.thongKe.chung + ', bo ' + r.thongKe.boChung + ' (co chu chua hoc)' + (it.length ? ' · bai it cau: ' + it.join(',') : '') +
    ' · ' + (fs.statSync(f).size / 1024).toFixed(0) + ' KB');
});
