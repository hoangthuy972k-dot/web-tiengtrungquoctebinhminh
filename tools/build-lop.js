/* Dung du lieu cho Che do lop hoc (/lop): public/js/lop-<cap>.js
   Moi bai gom 3 bo cau cho cac tro "Bat loi sai", "Gio the A/B/C", "Xep cau" (va de kiem tra):
     1) bai tap RIENG cua chinh bai do (fillData, sortData, mcData, errorFixData trong /js/<bai>-data.js)
        — giu het vi day la noi dung cua bai;
        + tu vung (nghia <-> chu Han), bai khoa (doc hieu preQuiz + dien tu vao cau bai khoa),
          bai tap phan Ngu phap chia theo diem (ngu-phap-tab-<cap>.js) — de cau hoi phu het noi dung bai;
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
const LATIN = /[A-Za-zÀ-ỹ]/;
// Nghia ngan cho phuong an A/B/C: lay nghia dau tien, dai qua thi cat theo dau phay
function nghiaNgan(vn) {
  let s = String(vn || '').split(/[;；]/)[0].trim();
  if (s.length > 30) s = s.split(/[,，]/)[0].trim();
  return s.length > 40 ? '' : s;
}
const han = (s) => String(s || '').match(HAN) || [];

const baiCache = {};
function bai(url) {
  if (baiCache[url]) return baiCache[url];
  const code = doc(url.replace('/lessons/', 'js/').replace('.html', '-data.js'));
  const g = (n) => 'typeof ' + n + '!=="undefined"?' + n + ':null';
  const w = chay(code, ';window.D={vocab:' + g('vocabData') + ',dialog:' + g('dialogData') + ',fill:' + g('fillData') +
    ',sort:' + g('sortData') + ',mc:' + g('mcData') + ',err:' + g('errorFixData') + ',errMode:' + g('errorFixMode') + ',wb:' + g('wbData') +
    ',trans:' + g('translateData') + '};');
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
  // Phan Ngu phap chia theo diem cua tung bai
  const NPT = chay(doc('js/ngu-phap-tab-' + level + '.js')).NGU_PHAP_TAB || {};

  // chu da hoc cua cac cap duoi
  const duoi = new Set();
  (DUOI[level] || []).forEach((d) => (APP.lessons[d] || []).forEach((L) => bai(L.fullPageUrl).chu.forEach((h) => duoi.add(h))));

  const daHoc = new Set(duoi);
  // Tu (>= 2 chu) cua tung bai trong cap — de biet cau dich dung lai tu cua bai nao
  const tuCuaBai = [];
  const thongKe = { rieng: 0, chung: 0, boChung: 0, tu: 0, hk: 0, np: 0 };
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

    /* ---- 1c) tu vung cua bai: nghia <-> chu Han, xen ke hai chieu ---- */
    const tuNghia = [];
    const thayTu = {};
    (D.vocab || []).forEach((v) => {
      const zh = String(v && v.zh || '').trim(), vn = nghiaNgan(v && v.vn);
      if (!zh || !vn || !han(zh).length || LATIN.test(zh) || thayTu[zh]) return;
      thayTu[zh] = 1;
      tuNghia.push({ zh, vn });
    });
    tuNghia.forEach((v, i) => {
      const khac = tuNghia.filter((x) => x.zh !== v.zh && x.vn !== v.vn);
      const xuoi = i % 2 === 0;
      const opts = baPhuongAn(xuoi ? v.vn : v.zh, khac.map((x) => (xuoi ? x.vn : x.zh)));
      if (opts.length < 3) return;
      themM({ pre: xuoi ? '«' + v.zh + '» nghĩa là gì?' : '«' + v.vn + '» — chữ Hán là gì?', post: '', noBlank: true,
        options: opts, answer: 0, context: 'Từ vựng', why: '', point: '', src: 'tu' });
      thongKe.tu++;
    });

    /* ---- 1d) bai khoa: cau hoi doc hieu (preQuiz) + dien tu vung vao cau cua bai khoa ---- */
    const tuDai = tuNghia.map((v) => v.zh).sort((a, b) => b.length - a.length);
    let soDien = 0;
    (D.dialog || []).forEach((d) => {
      ((d && d.preQuiz) || []).forEach((q) => {
        if (!q || !Array.isArray(q.opts) || typeof q.ans !== 'number' || !q.opts[q.ans] || LATIN.test(String(q.q) + q.opts.join(''))) return;
        const opts = [q.opts[q.ans]].concat(q.opts.filter((o, i) => i !== q.ans).slice(0, 2));
        if (opts.length < 3) return;
        themM({ pre: String(q.q).trim(), post: '', noBlank: true, options: opts, answer: 0, context: 'Đọc hiểu bài khoá', why: '', point: '', src: 'hk' });
        thongKe.hk++;
      });
      ((d && d.lines) || []).forEach((l) => {
        if (soDien >= 20 || !l || !l.zh || LATIN.test(l.zh) || han(l.zh).length < 5) return;
        const w = tuDai.find((x) => l.zh.indexOf(x) >= 0);
        if (!w) return;
        const i = l.zh.indexOf(w);
        const opts = baPhuongAn(w, tuDai.filter((x) => x !== w && l.zh.indexOf(x) < 0));
        if (opts.length < 3) return;
        themM({ pre: l.zh.slice(0, i), post: l.zh.slice(i + w.length), options: opts, answer: 0, context: 'Câu trong bài khoá',
          hint: nghiaNgan(l.vn) ? String(l.vn).trim() : '', why: '', point: '', src: 'hk' });
        soDien++;
        thongKe.hk++;
      });
    });

    /* ---- 1e) phan Ngu phap chia theo diem: dien -> A/B/C, dungsai -> dung/sai, xep -> xep cau,
       dich -> chon cau dich dung (bo cau co pinyin; cau viet tu do khong lay) ---- */
    const dichDs = [];
    (NPT[url] || []).forEach((p) => (p.bt || []).forEach((b) => (b.cau || []).forEach((c) => {
      if (!c) return;
      const diemNP = p.ten || '';
      if (c.kieu === 'dien' && Array.isArray(c.phan) && c.phan.length === 2 && Array.isArray(c.dap) && c.dap.length === 1 && Array.isArray(c.chon)) {
        const nhan = [].concat(c.dap[0] || []);
        if (!nhan[0]) return;
        const opts = baPhuongAn(nhan[0], c.chon.filter((x) => nhan.indexOf(x) < 0));
        if (opts.length < 3 || LATIN.test(opts.join('') + c.phan.join(''))) return;
        themM({ pre: c.phan[0], post: c.phan[1], options: opts, answer: 0, context: '', hint: c.goiY || '', why: c.giai || '', point: diemNP, src: 'np' });
        thongKe.np++;
      } else if (c.kieu === 'dungsai' && c.cau && !LATIN.test(c.cau)) {
        const cs = cauHan(c.cau);
        if (!cs) return;
        const sua = c.sua ? cauHan(c.sua) : null;
        themJ({ sentence: cs.text, note: '', isCorrect: !!c.dung, fix: sua ? sua.text : '', why: c.giai || '', point: diemNP, src: 'np' });
        thongKe.np++;
      } else if (c.kieu === 'xep' && Array.isArray(c.manh) && c.manh.length >= 3 && c.dap && c.dap[0] && !LATIN.test(c.manh.join(''))) {
        themS({ words: c.manh.slice(), answer: String(c.dap[0]).trim(), context: c.goiY || '', why: c.giai || '', point: diemNP, src: 'np' });
        thongKe.np++;
      } else if (c.kieu === 'dich' && c.vn && c.dap && c.dap[0] && !LATIN.test(c.dap[0])) {
        dichDs.push({ vn: String(c.vn).trim(), zh: String(c.dap[0]).trim(), why: c.giai || '', point: diemNP });
      }
    })));
    dichDs.forEach((x) => {
      const opts = baPhuongAn(x.zh, dichDs.filter((y) => y.zh !== x.zh).map((y) => y.zh));
      if (opts.length < 3) return;
      themM({ pre: '«' + x.vn + '» — dịch sang tiếng Trung là?', post: '', noBlank: true, options: opts, answer: 0, context: 'Dịch câu', why: x.why, point: x.point, src: 'np' });
      thongKe.np++;
    });

    /* ---- 1f) cau dich (cho Kiem tra bai cu): cau dich cua bai, cau dich phan Ngu phap, cau vi du
       cua tu vung, cau bai khoa. Chi giu cau toan chu da hoc toi bai nay; ghi lai tu cua cac bai
       TRUOC co trong cau (on xoan oc: bai 3 dung lai tu bai 1, 2). ---- */
    const tuBaiNay = tuNghia.map((v) => v.zh).filter((w) => han(w).length >= 2);
    const dich = [], thayD = {};
    const themD = (zh, vn) => {
      zh = String(zh || '').split('／')[0].trim(); vn = String(vn || '').trim();
      const k = han(zh).join('');
      if (!zh || !vn || thayD[k] || han(zh).length < 3 || han(zh).length > 30 || LATIN.test(zh) || !hocRoi(zh)) return;
      thayD[k] = 1;
      const cu = [];
      tuCuaBai.forEach((b) => b.tu.forEach((w) => { if (cu.length < 4 && zh.indexOf(w) >= 0 && !cu.some((x) => x[0] === w)) cu.push([w, b.n]); }));
      dich.push({ zh, vn, cu, moi: tuBaiNay.some((w) => zh.indexOf(w) >= 0) ? 1 : 0 });
    };
    (D.trans || []).forEach((t) => t && themD(t.zh, t.vi));
    (NPT[url] || []).forEach((p) => (p.bt || []).forEach((b) => (b.cau || []).forEach((c) => {
      if (c && c.kieu === 'dich' && c.dap && c.dap[0]) themD(c.dap[0], c.vn);
    })));
    (D.vocab || []).forEach((v) => {
      if (!v) return;
      (Array.isArray(v.exList) && v.exList.length ? v.exList : [{ zh: v.ex_zh, vn: v.ex_vn }]).forEach((e) => e && themD(e.zh, e.vn));
    });
    (D.dialog || []).forEach((d) => ((d && d.lines) || []).forEach((l) => l && themD(l.zh, l.vn)));
    // Uu tien: vua co tu bai nay vua co tu bai truoc > co tu bai nay > con lai; giu toi da 40 cau
    dich.sort((a, b) => (b.moi * 2 + (b.cu.length ? 1 : 0)) - (a.moi * 2 + (a.cu.length ? 1 : 0)));
    dich.splice(40);
    dich.forEach((d) => { if (!d.cu.length) delete d.cu; if (!d.moi) delete d.moi; });
    tuCuaBai.push({ n: L.number, tu: tuBaiNay });

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

    return { n: L.number, url, title: L.titleHanzi || L.title || '', judges, mcs, sorts, dich };
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
    ' · tu vung ' + r.thongKe.tu + ' · bai khoa ' + r.thongKe.hk + ' · ngu phap theo diem ' + r.thongKe.np +
    ' · ngu phap chung giu ' + r.thongKe.chung + ', bo ' + r.thongKe.boChung + ' (co chu chua hoc)' + (it.length ? ' · bai it cau: ' + it.join(',') : '') +
    ' · ' + (fs.statSync(f).size / 1024).toFixed(0) + ' KB');
});
