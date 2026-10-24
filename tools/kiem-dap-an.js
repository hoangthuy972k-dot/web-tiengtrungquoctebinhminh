// Kiem tra vi tri dap an dung trong du lieu bai hoc.
// Moi cau dang { opts: [...], ans: <so> } duoc dem theo vi tri dap an dung. Neu mot
// nhom cau (theo cap + ten bien du lieu) co >= 70% dap an o cung mot vi tri thi bao
// loi — hoc sinh se doan duoc "cu bam A". Cac nhom ma luc hien thi da duoc xao
// (mcData, errorFixData, preQuiz — xem tronPhuongAn trong app.js va tronDapAn trong
// lesson-engine.js) chi duoc liet ke de tham khao, khong tinh la loi.
//
//   node tools/kiem-dap-an.js          -> bang tong hop, thoat ma 1 neu co loi
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DIR = path.join(__dirname, '..', 'public', 'js');
const DA_XAO = { mcData: 1, errorFixData: 1, preQuiz: 1 };
const NGUONG = 0.7, TOI_THIEU = 8;

const nhom = {}; // "cap · bien" -> { dem: [..], tong, xao }
function ghi(cap, ten, q) {
  const k = cap + ' · ' + ten;
  const g = nhom[k] = nhom[k] || { dem: [0, 0, 0, 0, 0, 0], tong: 0, xao: !!DA_XAO[ten] };
  g.dem[Math.min(5, q.ans)]++;
  g.tong++;
}
function duyet(cap, ten, x, sau) {
  if (!x || typeof x !== 'object' || sau > 8) return;
  if (Array.isArray(x)) { x.forEach((y) => duyet(cap, ten, y, sau + 1)); return; }
  if (Array.isArray(x.opts) && x.opts.length >= 2 && typeof x.ans === 'number') ghi(cap, ten, x);
  Object.keys(x).forEach((k) => {
    if (k === 'opts') return;
    duyet(cap, k === 'preQuiz' ? 'preQuiz' : ten, x[k], sau + 1);
  });
}

fs.readdirSync(DIR).filter((f) => /bai-\d+-data\.js$/.test(f)).forEach((f) => {
  const cap = f.replace(/-?bai-\d+-data\.js$/, '') || 'hsk2-3-4 cu';
  const ctx = {};
  vm.createContext(ctx);
  try { vm.runInContext(fs.readFileSync(path.join(DIR, f), 'utf8').replace(/\b(const|let)\s/g, 'var '), ctx); } catch (e) { return; }
  Object.keys(ctx).forEach((ten) => duyet(cap, ten, ctx[ten], 0));
});

let loi = 0;
const dong = Object.keys(nhom).sort().map((k) => {
  const g = nhom[k];
  const lech = Math.max.apply(null, g.dem) / g.tong;
  const viTri = 'ABCDEF'[g.dem.indexOf(Math.max.apply(null, g.dem))];
  const xau = !g.xao && g.tong >= TOI_THIEU && lech >= NGUONG;
  if (xau) loi++;
  return (xau ? 'LOI  ' : g.xao ? 'xao  ' : 'ok   ') + k.padEnd(34) + String(g.tong).padStart(5) + ' cau  ' +
    g.dem.slice(0, 4).map((n, i) => 'ABCD'[i] + ':' + n).join(' ') + '   dồn về ' + viTri + ' ' + Math.round(lech * 100) + '%';
});
console.log(dong.join('\n'));
console.log(loi ? '\n' + loi + ' nhom cau dồn đáp án mà chưa được xáo khi hiển thị.' : '\nKhông có nhóm câu nào dồn đáp án mà chưa được xáo.');
process.exitCode = loi ? 1 : 0;
