// Trich khoi "Loi hoc sinh Viet hay mac" tu 15 trang HSK 2 (bai-N.html) -> grammar-errors-hsk2.js
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'public', 'lessons');
const strip = (s) => s.replace(/<[^>]*>/g, '').replace(/^[✗✓]\s*/, '').trim();
const out = {};
let total = 0;
for (let n = 1; n <= 15; n++) {
  const file = path.join(dir, 'bai-' + n + '.html');
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  // Duyet ca the tieu de va cac loi theo dung thu tu xuat hien trong trang
  const re = /<div class="g-title"[^>]*>([\s\S]*?)<\/div>|<div class="g-err"><div class="g-err-wrong">([\s\S]*?)<\/div><div class="g-err-why">([\s\S]*?)<\/div><div class="g-err-right">([\s\S]*?)<\/div><\/div>/g;
  const list = [];
  let m, point = '';
  while ((m = re.exec(html))) {
    if (m[1] !== undefined) { point = strip(m[1]).replace(/^\d+\s*/, ''); continue; }
    list.push({ point: point, wrong: strip(m[2]), right: strip(m[4]), why: strip(m[3]) });
  }
  if (list.length) { out['/lessons/bai-' + n + '.html'] = list; total += list.length; }
}
const js = '// Loi hoc sinh Viet hay mac — hsk2 (trich tu cac trang bai hoc).\n' +
  'window.GRAMMAR_ERRORS = Object.assign(window.GRAMMAR_ERRORS || {}, ' + JSON.stringify(out) + ');\n';
fs.writeFileSync(path.join(__dirname, '..', 'public', 'js', 'grammar-errors-hsk2.js'), js);
console.log('bai:', Object.keys(out).length, '| loi:', total, '| file:', Math.round(js.length / 1024) + ' KB');
