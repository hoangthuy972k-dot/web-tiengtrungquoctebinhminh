/* Gan noi dung 搭配 / 句型 / cap lien tu vao mot file du lieu bai HSK 4.
   Chay:  node ap-noidung.js <so bai> [--that]
   Khong --that thi chi bao cao, khong ghi file.

   Vi sao sua bang script chu khong go tay: pinyin cua cot giua duoc ghep tu
   tu dien rut ra tu chinh du lieu bai hoc (py.js), nen khong the go sai dau. */
const fs = require('fs');
const path = require('path');
const PY = require('./pinyin.js');
const PAIRS = require('./khung-cau.js');

const SO = process.argv[2];
const THAT = process.argv.includes('--that');
const FILE = path.join(process.cwd(), 'public', 'js', 'hsk4-bai-' + SO + '-data.js');
const NOI_DUNG = require(path.join(process.cwd(), 'tools/tu-vung/noi-dung/bai-' + SO + '.js'));
let VIET_LAI = {};
let PY_TAY = {};
try { PY_TAY = require(path.join(process.cwd(), 'tools/tu-vung/noi-dung/pinyin-' + SO + '.json')); } catch (e) { /* chua co */ }
try { VIET_LAI = require(path.join(process.cwd(), 'tools/tu-vung/noi-dung/viet-lai-' + SO + '.js')); } catch (e) { /* bai chua co phan viet lai */ }

const src = fs.readFileSync(FILE, 'utf8');
const vocabData = (new Function(src + '; return vocabData'))();

let soCollo = 0, soPattern = 0, soPair = 0, soVietLai = 0;
const thieuPy = [];
const daAm = [];

vocabData.forEach(function (v) {
  const nd = NOI_DUNG[v.zh];
  if (nd) {
    v.colloFull = nd.collo.map(function (c) {
      const r = PY.ghepKiemTra(c[0]);
      if (r.thieu) thieuPy.push(v.zh + ' → ' + c[0] + ' (' + r.py + ')');
      if (r.daAm.length) daAm.push(v.zh + ' → ' + c[0] + ' = ' + r.py + '  (chu da am: ' + r.daAm.join(' ') + ')');
      return { zh: c[0], py: r.py, vn: c[1] };
    });
    soCollo += v.colloFull.length;
    v.patterns = nd.patterns.map(function (p) { return { s: p[0], m: p[1] }; });
    soPattern += v.patterns.length;
  }
  (v.checkList || []).forEach(function (c, i) {
    const vl = VIET_LAI[v.zh + '|' + i];
    if (vl) {
      c.prompt = vl.prompt;
      c.answer = vl.answer;
      // Pinyin CAU phai go tay va da doi chieu — ghep may de sai chu da am
      const pyTay = PY_TAY[v.zh + '|' + i];
      if (!pyTay) { thieuPy.push(v.zh + '[cau] THIEU pinyin go tay cho: ' + vl.answer); }
      else c.answerPy = pyTay;
      if (vl.note) c.note = vl.note;
      c.pair = vl.pair;
      soVietLai++;
    }
    if (!c.pair) {
      const p = PAIRS.tim(c.answer);
      if (p) c.pair = p;
    }
    if (c.pair) soPair++;
  });
});

console.log('BAI ' + SO);
console.log('  hang 搭配 da gan : ' + soCollo);
console.log('  cau truc 句型    : ' + soPattern);
console.log('  cau viet lai     : ' + soVietLai);
console.log('  cau co cap lien tu: ' + soPair + '/' + vocabData.reduce(function (n, v) { return n + (v.checkList || []).length; }, 0));
if (daAm.length) {
  console.log('  ⓘ Can liec lai chu da am (' + daAm.length + '):');
  daAm.forEach(function (t) { console.log('     ' + t); });
}
if (thieuPy.length) {
  console.log('  ⚠ THIEU PINYIN (' + thieuPy.length + '):');
  thieuPy.forEach(function (t) { console.log('     ' + t); });
}

if (!THAT) { console.log('  (chay thu — khong ghi file)'); process.exit(thieuPy.length ? 1 : 0); }
if (thieuPy.length) { console.log('  ✗ KHONG GHI: con thieu pinyin, bo sung tu dien trong py.js truoc.'); process.exit(1); }

// Ghi lai: giu nguyen moi thu ngoai vocabData, chi thay khoi vocabData
const dau = src.indexOf('const vocabData');
const dauLet = src.indexOf('let vocabData');
const dauVar = src.indexOf('var vocabData');
const batDau = [dau, dauLet, dauVar].filter(function (x) { return x >= 0; }).sort(function (a, b) { return a - b; })[0];
if (batDau == null) throw new Error('Khong tim thay khai bao vocabData');
// Tim dau ; ket thuc khoi mang bang cach dem ngoac
let i = src.indexOf('[', batDau), sau = 0, ket = -1;
for (let k = i; k < src.length; k++) {
  if (src[k] === '[') sau++;
  else if (src[k] === ']') { sau--; if (sau === 0) { ket = k; break; } }
}
if (ket < 0) throw new Error('Khong tim thay ket thuc mang vocabData');
const truocKhai = src.slice(batDau, i);   // "const vocabData = "
const moi = src.slice(0, batDau) + truocKhai + JSON.stringify(vocabData, null, 2) + src.slice(ket + 1);
fs.writeFileSync(FILE, moi);
// Kiem tra lai file van chay duoc
const kiemTra = (new Function(fs.readFileSync(FILE, 'utf8') + '; return vocabData'))();
console.log('  ✓ DA GHI — doc lai duoc ' + kiemTra.length + ' tu');
