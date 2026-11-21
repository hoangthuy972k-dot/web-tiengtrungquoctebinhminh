/* Gan "Luyen tap sach bai tap" (wbData) cho mot bai HSK 3 (3.0).

   Dung:  node gan.js <N>           kiem tra + ghi ban xem truoc bai-N/wbData.preview.js
          node gan.js <N> --that    ghi that: thay (hoac them) khoi wbData o CUOI public/js/hsk3v3-bai-N-data.js

   Nguon: bai-N/wb.js  (module.exports = { sections: [...] } — dung y dinh dang wbData cua HSK 2 (3.0)).
   Tu dong:
     - promptPy cua cau trong mocktest va py cua phuong an / ngan tu (bank) neu chua co
       (dung tools/hsk4v3/py.js — can `cd tools/hsk4v3 && npm install` mot lan). Muon tat: py: false / promptPy: false.
     - kiem tra: dap an nam trong letters / options, letters co trong bank, so cau lien tuc,
       anh ton tai va < 80 KB, khong co chu CJK Extension B tro len (ma > U+FFFF).          */
const fs = require('fs');
const path = require('path');

const N = process.argv[2];
const THAT = process.argv.includes('--that');
if (!/^\d+$/.test(N || '')) { console.error('Dung: node gan.js <so-bai> [--that]'); process.exit(1); }

const GOC = path.join(__dirname, '..', '..');
const SRC = path.join(__dirname, 'bai-' + N, 'wb.js');
const DATA = path.join(GOC, 'public', 'js', 'hsk3v3-bai-' + N + '-data.js');
const wb = require(SRC);

let py = null;
try { py = require('../hsk4v3/py'); } catch (e) { console.warn('! Khong nap duoc tools/hsk4v3/py.js (chua npm install?) — bo qua tu dong pinyin'); }

const HAN = /[㐀-鿿]/;
const loi = [];
const canhBao = [];

// ---------- pinyin ----------
const NOI = /^([A-Z]|男|女|问)：/;
const NOI_PY = { 男: 'Nán', 女: 'Nǚ', 问: 'Wèn' };
function pyDong(line) {
  let s = line.trim(), dau = '';
  const m = s.match(NOI);
  if (m) { dau = (NOI_PY[m[1]] || m[1]) + ': '; s = s.slice(m[0].length); }
  if (s[0] === '★') { s = s.slice(1); }
  return dau + py(s).replace(/\(\s*\)/g, '(　)');
}
function pyNhieu(text) { return String(text).split('\n').map(pyDong).join('\n'); }

// ---------- kiem tra + dien pinyin ----------
function anh(url, noi) {
  if (!url) return;
  const f = path.join(GOC, 'public', url.replace(/^\//, ''));
  if (!fs.existsSync(f)) { loi.push(noi + ': thieu anh ' + url); return; }
  const kb = fs.statSync(f).size / 1024;
  if (kb > 80) canhBao.push(noi + ': anh ' + url + ' nang ' + Math.round(kb) + ' KB (> 80 KB)');
}
function dienPy(o) {
  if (!py || !o || o.py === false || o.py || !o.text || !HAN.test(o.text)) { if (o && o.py === false) delete o.py; return; }
  o.py = pyNhieu(o.text);
  // tu / cum tu (khong phai ca cau) viet thuong chu dau, giong sach: cì, bù hǎoyìsi
  if (!/[。？！?!.]$/.test(o.text)) o.py = o.py.charAt(0).toLowerCase() + o.py.slice(1);
}

let soCau = 0;
wb.sections.forEach(function (sec, si) {
  (sec.blocks || []).forEach(function (b, bi) {
    const noi = 'muc ' + (si + 1) + ' khoi ' + (bi + 1) + ' (' + b.type + ')';
    if (b.type === 'blankdrill') {
      (b.items || []).forEach(function (it, i) { if (!it.answer) loi.push(noi + ' cau ' + (i + 1) + ': thieu answer'); });
      soCau += (b.items || []).length;
    }
    if (b.type !== 'mocktest') return;
    ['listening', 'reading', 'writing'].forEach(function (k) { if (!Array.isArray(b[k])) b[k] = []; });
    let bank = null, truoc = 0;
    b.listening.concat(b.reading, b.writing).forEach(function (q) {
      const ten = noi + ' cau ' + q.n;
      if (truoc && q.n !== truoc + 1) canhBao.push(ten + ': so cau khong lien tuc (truoc la ' + truoc + ')');
      truoc = q.n;
      if (q.bank) { bank = q.bank; bank.forEach(function (o) { dienPy(o); anh(o.img, ten); }); }
      else if (q.part) bank = null;
      (q.options || []).forEach(function (o) { dienPy(o); anh(o.img, ten); });
      anh(q.img, ten);
      if (q.promptPy === false) delete q.promptPy;
      else if (py && q.prompt && !q.promptPy && HAN.test(q.prompt)) q.promptPy = pyNhieu(q.prompt);
      if (q.free) { if (!q.script) canhBao.push(ten + ': cau tu viet chua co cau tham khao (script)'); return; }
      if (!q.answer) { canhBao.push(ten + ': chua co dap an'); return; }
      soCau++;
      if (q.input) return;
      if (q.letters) {
        if (q.letters.indexOf(q.answer) < 0) loi.push(ten + ': dap an ' + q.answer + ' khong nam trong letters');
        if (!bank) loi.push(ten + ': co letters nhung khong co bank phia tren');
        else q.letters.forEach(function (l) { if (!bank.some(function (o) { return o.key === l; })) loi.push(ten + ': letter ' + l + ' khong co trong bank'); });
      } else if (!(q.options || []).some(function (o) { return o.key === q.answer; })) loi.push(ten + ': dap an ' + q.answer + ' khong nam trong options');
    });
  });
});

// ---------- ghi ra JS (dang object literal, nhay don, giong cac file HSK 2) ----------
function chuoi(s) { return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'"; }
function ser(v, ind) {
  if (v === null || typeof v !== 'object') return typeof v === 'string' ? chuoi(v) : String(v);
  const pad = '  '.repeat(ind + 1), pad0 = '  '.repeat(ind);
  const parts = Array.isArray(v) ? v.map(function (x) { return ser(x, ind + 1); })
    : Object.keys(v).filter(function (k) { return v[k] !== undefined; }).map(function (k) { return (/^[A-Za-z_$][\w$]*$/.test(k) ? k : chuoi(k)) + ': ' + ser(v[k], ind + 1); });
  const mo = Array.isArray(v) ? '[' : '{', dong = Array.isArray(v) ? ']' : '}';
  const motDong = mo + (Array.isArray(v) ? '' : ' ') + parts.join(', ') + (Array.isArray(v) ? '' : ' ') + dong;
  if (motDong.indexOf('\n') < 0 && pad0.length + motDong.length <= 150) return parts.length ? motDong : mo + dong;
  return mo + '\n' + parts.map(function (p) { return pad + p; }).join(',\n') + '\n' + pad0 + dong;
}

const MOC = '// ══════════════════════════════════════════\n// LUYỆN TẬP SÁCH BÀI TẬP';
const khoi = MOC + ' (新HSK教程3 学练手册, Bài ' + N + (wb.title ? ': ' + wb.title : '') + ')\n' +
  '// Sinh tu tools/hsk3v3-wb/bai-' + N + '/wb.js bang `node tools/hsk3v3-wb/gan.js ' + N + ' --that` — sua o file nguon roi chay lai.\n' +
  '// ══════════════════════════════════════════\n' +
  'var wbData = ' + ser({ sections: wb.sections }, 0) + ';\n';

// chu ngoai BMP (CJK Ext-B tro len) — font tren dien thoai hay thieu
for (const ch of khoi) if (ch.codePointAt(0) > 0xffff) loi.push('chu ngoai BMP: ' + ch + ' U+' + ch.codePointAt(0).toString(16).toUpperCase());

canhBao.forEach(function (c) { console.warn('! ' + c); });
if (loi.length) { loi.forEach(function (l) { console.error('X ' + l); }); console.error(loi.length + ' loi — khong ghi.'); process.exit(1); }
try { new Function(khoi + '\nreturn wbData;')(); } catch (e) { console.error('X khoi wbData sinh ra loi cu phap: ' + e.message); process.exit(1); }

console.log('Bai ' + N + ': ' + wb.sections.length + ' muc, ' + soCau + ' cau cham diem duoc.');
if (!THAT) {
  const f = path.join(__dirname, 'bai-' + N, 'wbData.preview.js');
  fs.writeFileSync(f, khoi);
  console.log('Ban xem truoc: ' + f + '  (them --that de ghi vao ' + path.relative(GOC, DATA) + ')');
  process.exit(0);
}
let goc = fs.readFileSync(DATA, 'utf8');
const crlf = goc.indexOf('\r\n') > -1;
goc = goc.replace(/\r\n/g, '\n');
const i = goc.indexOf(MOC);
if (i > -1) {
  if (goc.indexOf('var wbData', i) < 0) { console.error('X Thay moc nhung khong thay var wbData — sua tay'); process.exit(1); }
  goc = goc.slice(0, i).replace(/\s*$/, '\n\n');
} else {
  if (/\bvar wbData\b/.test(goc)) { console.error('X File da co var wbData khong theo moc cua cong cu — sua tay'); process.exit(1); }
  goc = goc.replace(/\s*$/, '\n\n');
}
let ra = goc + khoi;
if (crlf) ra = ra.replace(/\n/g, '\r\n');
fs.writeFileSync(DATA, ra);
console.log('Da ghi ' + path.relative(GOC, DATA) + (crlf ? ' (CRLF)' : ''));
