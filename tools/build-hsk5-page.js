/* Sinh trang bai hoc HSK 5 tu mo ta ngan (tools/hsk5-lessons.js).
   KHUON la chinh trang bai 1 (public/lessons/hsk5-bai-1.html): moi sua giao dien
   lam tren bai 1 truoc, roi sinh lai ca bo — cac bai khac chi khac phan dau trang,
   so tu / so diem ngu phap / so cap tu, cac the ngu phap va file du lieu.

   Cach dung:  node tools/build-hsk5-page.js <so-bai>
               node tools/build-hsk5-page.js all        (bo qua bai 1 — bai 1 la khuon)
   Sinh xong PHAI chay tiep:  node tools/stamp-assets.js --that
   (dong dau phien ban len CSS/JS, khong co dau thi trinh duyet giu ban cu)  */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const META = require('./hsk5-lessons.js');
const KHUON = fs.readFileSync(path.join(ROOT, 'public', 'lessons', 'hsk5-bai-1.html'), 'utf8')
  .replace(/\?v=[a-z0-9]+/g, '');

function grammarCard(n, g) {
  const rows = g.examples.map((e) =>
    '        <tr><td style="font-family:\'Noto Serif SC\',serif;color:var(--sky-d)">' + e.zh + '</td>' +
    '<td style="color:var(--soft);font-size:0.82rem">' + e.py + '</td>' +
    '<td style="color:var(--mid);font-size:0.85rem">' + e.vn + '</td></tr>').join('\n');

  const errs = (g.errors || []).map((e) =>
    '      <div class="g-err"><div class="g-err-wrong">✗ ' + e.wrong + '</div>' +
    '<div class="g-err-why">' + e.why + '</div>' +
    '<div class="g-err-right">✓ ' + e.right + '</div></div>').join('\n');

  return '  <div class="grammar-card">\n' +
    '    <div class="g-title"><span class="g-num">' + n + '</span>「' + g.point + '」</div>\n' +
    '    <div class="g-sub">' + g.explain + '</div>\n' +
    '    <div class="g-rule"><strong>Cấu trúc：</strong> ' + g.rule + '</div>\n' +
    '    <table class="g-table">\n' +
    '      <thead><tr><th>Câu tiếng Trung</th><th>Phiên âm</th><th>Nghĩa tiếng Việt</th></tr></thead>\n' +
    '      <tbody>\n' + rows + '\n      </tbody>\n' +
    '    </table>\n' +
    (errs ? '    <div class="g-errors">\n      <div class="g-errors-title">⚠️ Lỗi học sinh Việt hay mắc</div>\n' + errs + '\n    </div>\n' : '') +
    '  </div>';
}

function page(m) {
  let h = KHUON;
  function doi(re, fn) {
    if (!re.test(h)) throw new Error('Khuon bai 1 da doi, khong thay: ' + re);
    h = h.replace(re, fn);
  }
  doi(/<title>[^<]*<\/title>/, () => '<title>HSK5 · Bài ' + m.n + ' · ' + m.zh + '</title>');
  doi(/<div class="header-badge">[^<]*<\/div>/, () => '<div class="header-badge">HSK5 · Bài ' + m.n + '</div>');
  doi(/<div class="header-zh">[^<]*<\/div>/, () => '<div class="header-zh">' + m.zh + '</div>');
  doi(/<div class="header-py">[^<]*<\/div>/, () => '<div class="header-py">' + m.py + '</div>');
  doi(/<div class="header-vn">[^<]*<\/div>/, () => '<div class="header-vn">' + m.vn + '</div>');
  doi(/(<span class="h-chip">🏠 )[^<]*(<\/span>)/, (a, b, c) => b + m.topic + c);
  doi(/📚 \d+ từ mới/, () => '📚 ' + m.vocabCount + ' từ mới');
  doi(/(<div class="sec-title">📚 Từ mới <span class="sec-badge">)\d+ từ/, (a, b) => b + m.vocabCount + ' từ');
  doi(/📐 \d+ điểm ngữ pháp/, () => '📐 ' + m.grammar.length + ' điểm ngữ pháp');
  doi(/🔍 \d+ cặp từ gần nghĩa/, () => '🔍 ' + m.synonymCount + ' cặp từ gần nghĩa');
  // Phan ngu phap: giu phan dau, thay cac the
  doi(/(<div id="grammar" class="section">\s*<div class="sec-head">\s*<div class="sec-title">📐 Ngữ pháp <span class="sec-badge">)\d+ điểm([\s\S]*?<\/div>\s*<\/div>\n)[\s\S]*?(\n<\/div>\n\n<div id="synonym")/,
    (a, dau, giua, cuoi) => dau + m.grammar.length + ' điểm' + giua + '\n' +
      m.grammar.map((g, i) => grammarCard(i + 1, g)).join('\n\n') + '\n' + cuoi);
  doi(/\/js\/hsk5-bai-1-data\.js/, () => '/js/hsk5-bai-' + m.n + '-data.js');
  return h;
}

const arg = process.argv[2];
const list = arg === 'all' ? Object.keys(META).filter((n) => n !== '1') : [arg];
list.forEach(function (n) {
  const m = META[n];
  if (!m) { console.log('Bo qua bai ' + n + ' — chua co mo ta trong tools/hsk5-lessons.js'); return; }
  if (String(n) === '1') { console.log('Bai 1 la khuon — sua truc tiep public/lessons/hsk5-bai-1.html'); return; }
  m.n = Number(n);
  const out = path.join(ROOT, 'public', 'lessons', 'hsk5-bai-' + n + '.html');
  fs.writeFileSync(out, page(m));
  console.log('Da sinh  ' + path.relative(ROOT, out) + '  (' + m.zh + ')');
});
