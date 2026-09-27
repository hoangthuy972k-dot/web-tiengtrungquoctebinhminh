/* Sinh trang bai hoc HSK 6 tu tools/hsk6-meta/bai-N.json. KHUON la trang bai 1 HSK 5
   (public/lessons/hsk5-bai-1.html) — cung giao dien; chi doi dau trang, so dem, the ngu phap,
   file du lieu va vai cau chu thich HSK 5 -> HSK 6.
   Cach dung: node tools/build-hsk6-page.js <so-bai> | all   (xong chay node tools/stamp-assets.js --that) */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const META = require('./hsk6-lessons.js');
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
  doi(/<title>[^<]*<\/title>/, () => '<title>HSK6 · Bài ' + m.n + ' · ' + m.zh + '</title>');
  doi(/<div class="header-badge">[^<]*<\/div>/, () => '<div class="header-badge">HSK6 · Bài ' + m.n + '</div>');
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
  doi(/\/js\/hsk5-bai-1-data\.js/, () => '/js/hsk6-bai-' + m.n + '-data.js');
  // Chu rieng cua HSK 6 (khuon la trang HSK 5)
  h = h.replace(/Đây là phần quyết định điểm HSK 5./g, 'Đây là phần quyết định điểm HSK 6.')
    .replace(/Lên HSK 5,/g, 'Lên HSK 6,').replace(/đề HSK 5 không/g, 'đề HSK 6 không')
    .replace(/Đúng dạng đề thi HSK 5 phần viết: xếp câu và viết đoạn 80 chữ./g, 'Làm đúng đề 运用 · 写一写 của sách (thường là viết tóm tắt bài khoá khoảng 300 chữ).')
    .replace(/đây là chỗ HSK 5 khác HSK 3–4/g, 'đây là chỗ HSK 6 khác HSK 3–4');
  return h;
}

const arg = process.argv[2];
const list = arg === 'all' ? Object.keys(META) : [arg];
list.forEach(function (n) {
  const m = META[n];
  if (!m) { console.log('Bo qua bai ' + n + ' — chua co mo ta trong tools/hsk6-lessons.js'); return; }
  m.n = Number(n);
  const out = path.join(ROOT, 'public', 'lessons', 'hsk6-bai-' + n + '.html');
  fs.writeFileSync(out, page(m));
  console.log('Da sinh  ' + path.relative(ROOT, out) + '  (' + m.zh + ')');
});
