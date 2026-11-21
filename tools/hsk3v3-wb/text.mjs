// Lay chu (text layer) tu PDF co lop chu — dung cho file dap an HSK3--学练手册(习题答案).pdf
// (trang K = dap an bai K, K = 1..18; trang 19–20 = de mo phong HSK 3 cuoi sach).
// Bo khoang trang thua giua cac chu Han (lop chu cua file dap an hay chen dau cach giua chu).
//
// Dung:  node text.mjs "<file.pdf>"            in ca file
//        node text.mjs "<file.pdf>" 1          chi in trang 1 (= dap an bai 1)
import fs from 'fs';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const [, , F, TRANG] = process.argv;
if (!F) { console.error('Dung: node text.mjs file.pdf [trang]'); process.exit(1); }
const doc = await getDocument({ data: new Uint8Array(fs.readFileSync(F)), useSystemFonts: true }).promise;
const CJK = '\\u3000-\\u303f\\u3400-\\u9fff\\uff00-\\uffef';
const gonChu = (s) => s.replace(new RegExp('([' + CJK + '])\\s+(?=[' + CJK + '])', 'g'), '$1')
  .replace(/(\d)\s*\.\s*(?=[A-F])/g, '$1');

let out = '';
const tu = TRANG ? +TRANG : 1, den = TRANG ? +TRANG : doc.numPages;
for (let p = tu; p <= den; p++) {
  const page = await doc.getPage(p);
  const tc = await page.getTextContent();
  // gom theo dong (toa do y)
  const rows = new Map();
  for (const it of tc.items) {
    if (!it.str) continue;
    const y = Math.round(it.transform[5]);
    let key = [...rows.keys()].find((k) => Math.abs(k - y) <= 2);
    if (key === undefined) { key = y; rows.set(key, []); }
    rows.get(key).push(it);
  }
  const lines = [...rows.entries()].sort((a, b) => b[0] - a[0])
    .map(([, its]) => gonChu(its.sort((a, b) => a.transform[4] - b.transform[4]).map((i) => i.str).join(' ').replace(/\s+/g, ' ').trim()))
    .filter(Boolean);
  out += `===== Trang ${p} =====\n` + lines.join('\n') + '\n\n';
}
process.stdout.write(out);
