/* Tinh lai the "cap lien tu" cho cac cau luyen dich cua mot bai.
   Cau da duoc viet lai bang tay giu nguyen the da ghi trong viet-lai-bN.js;
   cac cau con lai duoc do lai bang bo nhan dien moi (da bo cac khung qua mo ho).
   Chay:  node sua-pair.js <so bai> [--that]                               */
const fs = require('fs');
const path = require('path');
const PAIRS = require('./khung-cau.js');

const arg = process.argv.slice(2).filter(function (x) { return x.indexOf('--') !== 0; });
const CAP = /^hsk[0-9]$/.test(arg[0]) ? arg[0] : 'hsk4';
const SO = /^hsk[0-9]$/.test(arg[0]) ? arg[1] : arg[0];
const TEN = CAP === 'hsk4' ? '' : CAP + '-';
const THAT = process.argv.includes('--that');
const FILE = path.join(process.cwd(), 'public', 'js', CAP + '-bai-' + SO + '-data.js');
let VIET_LAI = {};
try { VIET_LAI = require(path.join(process.cwd(), 'tools/tu-vung/noi-dung/' + TEN + 'viet-lai-' + SO + '.js')); } catch (e) { /* khong co */ }

const src = fs.readFileSync(FILE, 'utf8');
const vocabData = (new Function(src + '; return vocabData'))();

let giu = 0, doi = 0, boDi = 0, khong = 0;
vocabData.forEach(function (v) {
  (v.checkList || []).forEach(function (c, i) {
    const vl = VIET_LAI[v.zh + '|' + i];
    if (vl && vl.pair) { c.pair = vl.pair; giu++; return; }
    const moi = PAIRS.tim(c.answer);
    if (moi) { if (c.pair !== moi) doi++; c.pair = moi; }
    else { if (c.pair) { delete c.pair; boDi++; } khong++; }
  });
});
console.log(CAP.toUpperCase() + ' BAI ' + SO + ': giu nguyen(viet tay)=' + giu + '  do lai=' + doi + '  bo the mo ho=' + boDi + '  khong co the=' + khong);

if (!THAT) { console.log('  (chay thu)'); process.exit(0); }
const batDau = src.search(/(?:const|let|var) vocabData/);
let i = src.indexOf('[', batDau), sau = 0, ket = -1;
for (let k = i; k < src.length; k++) {
  if (src[k] === '[') sau++;
  else if (src[k] === ']') { sau--; if (sau === 0) { ket = k; break; } }
}
fs.writeFileSync(FILE, src.slice(0, batDau) + src.slice(batDau, i) + JSON.stringify(vocabData, null, 2) + src.slice(ket + 1));
console.log('  ✓ da ghi');
