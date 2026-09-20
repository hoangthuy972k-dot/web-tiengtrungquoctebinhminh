// Dung phan Ngu phap cua 1 cap tu file soan noi dung (data-grammar/<cap>.json):
//  - chen khoi "Loi hoc sinh Viet hay mac" vao dung the ngu phap trong trang bai hoc
//  - sinh file bai tap tuong tac public/js/grammar-<cap>.js
// Chay: node tools/build-grammar.js hsk1v3
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const level = process.argv[2];
if (!level) { console.error('Thieu ten cap, vi du: node tools/build-grammar.js hsk1v3'); process.exit(1); }

// Noi dung soan co the nam trong 1 file <cap>.json hoac nhieu file trong thu muc <cap>/
const dir = path.join(ROOT, 'data-grammar', level);
const one = path.join(ROOT, 'data-grammar', level + '.json');
const data = {};
function merge(file) {
  const part = JSON.parse(fs.readFileSync(file, 'utf8'));
  Object.keys(part).forEach(function (url) {
    if (!data[url]) data[url] = { points: [] };
    data[url].points = data[url].points.concat(part[url].points || []);
  });
}
if (fs.existsSync(one)) merge(one);
if (fs.existsSync(dir)) fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().forEach((f) => merge(path.join(dir, f)));
if (!Object.keys(data).length) { console.error('Khong co noi dung cho cap ' + level); process.exit(1); }
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function errorsHtml(errors) {
  if (!errors || !errors.length) return '';
  return '\n    <div class="g-errors">\n      <div class="g-errors-title">⚠️ Lỗi học sinh Việt hay mắc</div>\n' +
    errors.map((e) =>
      '      <div class="g-err">' +
      '<div class="g-err-wrong">✗ ' + esc(e.wrong) + '</div>' +
      '<div class="g-err-why">' + esc(e.why) + '</div>' +
      '<div class="g-err-right">✓ ' + esc(e.right) + '</div></div>').join('\n') +
    '\n    </div>\n  ';
}

const exercises = {};
const report = [];
Object.keys(data).forEach((url) => {
  const lesson = data[url];
  const file = path.join(ROOT, 'public', url.replace(/^\//, ''));
  if (!fs.existsSync(file)) { report.push('KHONG THAY TRANG: ' + url); return; }
  let html = fs.readFileSync(file, 'utf8');
  const cards = html.split('<div class="grammar-card">');
  let injected = 0;
  lesson.points.forEach((p, i) => {
    const idx = i + 1;               // card dau tien nam o phan tu 1 cua mang
    if (!cards[idx]) { report.push(url + ': khong co the ngu phap #' + idx); return; }
    // bo khoi loi cu (neu dung lai) roi chen khoi moi truoc khi dong the
    cards[idx] = cards[idx].replace(/\n\s*<div class="g-errors">[\s\S]*?<\/div>\n\s*<\/div>/, '\n  </div>');
    const end = cards[idx].lastIndexOf('</div>');
    if (end < 0) { report.push(url + ': the #' + idx + ' sai cau truc'); return; }
    const block = errorsHtml(p.errors);
    if (block) {
      cards[idx] = cards[idx].slice(0, end) + block + cards[idx].slice(end);
      injected++;
    }
    if (p.items && p.items.length) {
      (exercises[url] = exercises[url] || []).push({ point: p.title, items: p.items });
    }
  });
  fs.writeFileSync(file, cards.join('<div class="grammar-card">'));
  report.push(url + ': ' + injected + ' khoi loi sai, ' +
    (exercises[url] ? exercises[url].reduce((s, g) => s + g.items.length, 0) : 0) + ' cau bai tap');
});

const out = path.join(ROOT, 'public', 'js', 'grammar-' + level + '.js');
const js = '// Bai tap ngu phap ' + level + ' — soan rieng theo trinh do (sinh tu data-grammar/' + level + '.json).\n' +
  'window.GRAMMAR_EXTRA = Object.assign(window.GRAMMAR_EXTRA || {}, ' + JSON.stringify(exercises) + ');\n';
fs.writeFileSync(out, js);

report.forEach((r) => console.log(r));
const total = Object.values(exercises).reduce((s, gs) => s + gs.reduce((x, g) => x + g.items.length, 0), 0);
console.log('---');
console.log('Bai hoc:', Object.keys(exercises).length, '| diem ngu phap:', Object.values(exercises).reduce((s, g) => s + g.length, 0),
  '| cau bai tap:', total, '| file:', Math.round(js.length / 1024) + ' KB');
