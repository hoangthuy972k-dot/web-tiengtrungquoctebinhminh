// Dung phan Ngu phap cua 1 cap tu file soan noi dung (data-grammar/<cap>/*.json):
//  - chen khoi "Loi hoc sinh Viet hay mac" vao dung the ngu phap trong trang bai hoc
//  - sinh file bai tap tuong tac public/js/grammar-<cap>.js
// Chay lai nhieu lan van cho ket qua giong nhau (khoi cu bi go ra truoc khi chen moi).
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

// Tim vi tri the </div> DONG dung the <div ...> bat dau tai openIdx (dem do sau)
function closeOf(html, openIdx) {
  const re = /<div\b[^>]*>|<\/div>/gi;
  re.lastIndex = openIdx;
  let depth = 0;
  let m;
  while ((m = re.exec(html))) {
    if (m[0][1] === '/') {
      depth--;
      if (depth === 0) return m.index;
    } else depth++;
  }
  return -1;
}

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

// Go het khoi loi sai cu trong trang (de chay lai khong bi nhan doi)
function stripOld(html) {
  let out = html;
  for (;;) {
    const at = out.indexOf('<div class="g-errors">');
    if (at < 0) return out;
    const close = closeOf(out, at);
    if (close < 0) return out;
    let start = at;
    while (start > 0 && /\s/.test(out[start - 1])) start--;   // bo ca khoang trang truoc khoi
    out = out.slice(0, start) + out.slice(close + 6);
  }
}

const exercises = {};
const mistakes = {};
const report = [];
Object.keys(data).forEach((url) => {
  const lesson = data[url];
  const file = path.join(ROOT, 'public', url.replace(/^\//, ''));
  if (!fs.existsSync(file)) { report.push('KHONG THAY TRANG: ' + url); return; }
  let html = stripOld(fs.readFileSync(file, 'utf8'));

  // Vi tri bat dau cua tung the ngu phap
  const starts = [];
  const re = /<div class="grammar-card">/g;
  let m;
  while ((m = re.exec(html))) starts.push(m.index);

  let injected = 0;
  // chen tu the CUOI len dau de cac vi tri phia truoc khong bi xe dich
  for (let i = lesson.points.length - 1; i >= 0; i--) {
    const p = lesson.points[i];
    if (!p.errors || !p.errors.length) continue;
    if (starts[i] === undefined) { report.push(url + ': khong co the ngu phap #' + (i + 1)); continue; }
    const close = closeOf(html, starts[i]);
    if (close < 0) { report.push(url + ': the #' + (i + 1) + ' sai cau truc'); continue; }
    html = html.slice(0, close) + errorsHtml(p.errors) + html.slice(close);
    injected++;
  }
  lesson.points.forEach((p) => {
    if (p.items && p.items.length) (exercises[url] = exercises[url] || []).push({ point: p.title, items: p.items });
    // Khoi "Loi hoc sinh Viet hay mac" cung duoc xuat rieng — Che do lop hoc dung
    // lam de cho tro "Bat loi sai" o nhung cap khong co cau Dung/Sai.
    (p.errors || []).forEach((e) => {
      if (e.wrong && e.right) (mistakes[url] = mistakes[url] || []).push({ point: p.title, wrong: e.wrong, right: e.right, why: e.why || '' });
    });
  });

  const open = (html.match(/<div\b/g) || []).length;
  const closed = (html.match(/<\/div>/g) || []).length;
  if (open !== closed) { report.push('!! ' + url + ': the div lech ' + open + '/' + closed + ' — KHONG GHI FILE'); return; }
  fs.writeFileSync(file, html);
  report.push(url + ': ' + injected + ' khoi loi sai, ' +
    (exercises[url] ? exercises[url].reduce((s, g) => s + g.items.length, 0) : 0) + ' cau bai tap');
});

const out = path.join(ROOT, 'public', 'js', 'grammar-' + level + '.js');
const js = '// Bai tap ngu phap ' + level + ' — soan rieng theo trinh do (sinh tu data-grammar/' + level + '/).\n' +
  'window.GRAMMAR_EXTRA = Object.assign(window.GRAMMAR_EXTRA || {}, ' + JSON.stringify(exercises) + ');\n';
fs.writeFileSync(out, js);

const outErr = path.join(ROOT, 'public', 'js', 'grammar-errors-' + level + '.js');
const jsErr = '// Loi hoc sinh Viet hay mac — ' + level + ' (sinh tu data-grammar/' + level + '/).\n' +
  'window.GRAMMAR_ERRORS = Object.assign(window.GRAMMAR_ERRORS || {}, ' + JSON.stringify(mistakes) + ');\n';
fs.writeFileSync(outErr, jsErr);

report.forEach((r) => console.log(r));
const total = Object.values(exercises).reduce((s, gs) => s + gs.reduce((x, g) => x + g.items.length, 0), 0);
console.log('---');
console.log('Bai hoc:', Object.keys(exercises).length, '| diem ngu phap:', Object.values(exercises).reduce((s, g) => s + g.length, 0),
  '| cau bai tap:', total, '| file:', Math.round(js.length / 1024) + ' KB');
console.log('Loi hay mac:', Object.values(mistakes).reduce((s, a) => s + a.length, 0), '| file:', Math.round(jsErr.length / 1024) + ' KB');
