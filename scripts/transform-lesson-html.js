// One-off migration script: restructures a bai-N.html's exercise tabs
// from the old (fill/sort/match/mc/speak) layout into the new 5-part
// layout (match=Ghép từ, listen=Nghe, fill/sort/errfix=Ngữ pháp,
// speak=Luyện nói, tongket=Tổng kết). Run: node scripts/transform-lesson-html.js <N>
const fs = require('fs');
const path = require('path');

const n = process.argv[2];
if (!n) { console.error('Usage: node transform-lesson-html.js <lessonNumber>'); process.exit(1); }
const file = path.join(__dirname, '..', 'public', 'lessons', `bai-${n}.html`);
let html = fs.readFileSync(file, 'utf8');

// 1) Nav buttons: replace fill/sort/match/mc/speak block with new 7-tab block
const navRe = /  <button class="tab-btn" data-action="show-tab" data-tab="fill">[\s\S]*?<button class="tab-btn" data-action="show-tab" data-tab="speak">🗣️ Luyện nói<\/button>\n/;
const newNav = `  <button class="tab-btn" data-action="show-tab" data-tab="match">1️⃣ Ghép từ</button>
  <button class="tab-btn" data-action="show-tab" data-tab="listen">2️⃣ Nghe</button>
  <button class="tab-btn" data-action="show-tab" data-tab="fill">3️⃣ Điền từ</button>
  <button class="tab-btn" data-action="show-tab" data-tab="sort">3️⃣ Sắp xếp</button>
  <button class="tab-btn" data-action="show-tab" data-tab="errfix">3️⃣ Sửa lỗi</button>
  <button class="tab-btn" data-action="show-tab" data-tab="speak">4️⃣ Luyện nói</button>
  <button class="tab-btn" data-action="show-tab" data-tab="tongket">5️⃣ Tổng kết</button>
`;
if (!navRe.test(html)) { console.error('NAV block not found for bai-' + n); process.exit(1); }
html = html.replace(navRe, newNav);

// 2) Extract fill and sort blocks (preserve their inner content, just retitle)
function extractBlock(src, id) {
  const startMarker = `<div id="${id}" class="section">`;
  const start = src.indexOf(startMarker);
  if (start === -1) return null;
  // find matching close: next "\n</div>\n" that returns depth to 0
  let depth = 0, i = start;
  const re = /<div[^>]*>|<\/div>/g;
  re.lastIndex = start;
  let m;
  while ((m = re.exec(src))) {
    if (m[0].startsWith('<div')) depth++;
    else depth--;
    if (depth === 0) { i = m.index + m[0].length; break; }
  }
  return { text: src.slice(start, i), start, end: i };
}

const fillBlock = extractBlock(html, 'fill');
const sortBlock = extractBlock(html, 'sort');
const matchBlockOld = extractBlock(html, 'match');
const mcBlock = extractBlock(html, 'mc');
if (!fillBlock || !sortBlock || !matchBlockOld || !mcBlock) { console.error('Section block missing for bai-' + n); process.exit(1); }

const fillRetitled = fillBlock.text.replace(/<div class="sec-title">[^<]*<\/div>/, '<div class="sec-title">3️⃣ Điền vào chỗ trống</div>');
const sortRetitled = sortBlock.text.replace(/<div class="sec-title">[^<]*<\/div>/, '<div class="sec-title">3️⃣ Sắp xếp thành câu</div>');

const newMatchSection = `<div id="match" class="section">
  <div class="sec-head">
    <div class="sec-title">1️⃣ Ghép từ <span class="sec-badge">搭配</span></div>
    <div class="sec-sub">Bấm 1 ô <strong style="color:var(--sky)">bên trái</strong> → bấm ô <strong style="color:var(--teal)">bên phải</strong> để ghép thành cụm từ đúng (Động từ/Phó từ + Tân ngữ/Tính từ)</div>
  </div>
  <div class="m-fb" id="m-fb"></div>
  <div class="match-grid">
    <div><div class="mcol-title">Từ 1</div><div id="m-left"></div></div>
    <div><div class="mcol-title">Từ 2</div><div id="m-right"></div></div>
  </div>
  <div class="btn-row"><button class="btn-s" data-action="reset-match">Làm lại</button></div>
</div>

<div id="listen" class="section">
  <div class="sec-head">
    <div class="sec-title">2️⃣ Nghe hiểu <span class="sec-badge">听力</span></div>
    <div class="sec-sub">Nhấn 🔊 nghe đoạn hội thoại/câu (tình huống mới), rồi trả lời câu hỏi bên dưới</div>
  </div>
  <div id="listen-wrap"></div>
  <div class="score-box" id="listen-score">
    <div><div style="font-size:0.78rem;color:var(--mid)">Điểm số</div><div class="score-n" id="listen-sn"></div></div>
    <div class="score-m" id="listen-sm"></div>
  </div>
</div>

`;

const newErrfixSection = `

<div id="errfix" class="section">
  <div class="sec-head">
    <div class="sec-title">3️⃣ Sửa lỗi sai <span class="sec-badge">改错</span></div>
    <div class="sec-sub">Mỗi câu bên dưới đang SAI ngữ pháp — đây là lỗi mà học sinh Việt Nam rất hay mắc phải. Chọn câu SỬA ĐÚNG.</div>
  </div>
  <div id="errfix-list"></div>
  <div class="score-box" id="errfix-score">
    <div><div style="font-size:0.78rem;color:var(--mid)">Điểm số</div><div class="score-n" id="errfix-sn"></div></div>
    <div class="score-m" id="errfix-sm"></div>
  </div>
</div>
`;

// Replace the whole span from fill's start to mc's end with the reordered new content
const spanStart = fillBlock.start;
const spanEnd = mcBlock.end;
const replacement = newMatchSection + fillRetitled + '\n\n' + sortRetitled + newErrfixSection;
html = html.slice(0, spanStart) + replacement + html.slice(spanEnd);

// 3) Relabel speak tab title with 4️⃣ prefix (only first occurrence, the sec-title)
html = html.replace(/<div class="sec-title">🗣️ Luyện nói theo 3 tầng<\/div>/, '<div class="sec-title">4️⃣ Luyện nói theo 3 tầng</div>');

// 4) Insert tongket section right before the closing of .main (before the trailing </div> that precedes <script)
const scriptTagIdx = html.indexOf('<script src="/js/bai-' + n + '-data.js">');
if (scriptTagIdx === -1) { console.error('data.js script tag not found for bai-' + n); process.exit(1); }
const beforeScript = html.slice(0, scriptTagIdx);
const lastDivClose = beforeScript.lastIndexOf('</div>');
const tongketSection = `<div id="tongket" class="section">
  <div class="sec-head">
    <div class="sec-title">5️⃣ Tổng kết bài học <span class="sec-badge">总结</span></div>
    <div class="sec-sub">Điểm tổng hợp từ 4 phần bài tập bên trên — hoàn thành hết rồi quay lại đây để xem điểm chính xác nhất!</div>
  </div>
  <div id="summary-wrap"></div>
</div>

`;
html = beforeScript.slice(0, lastDivClose) + tongketSection + beforeScript.slice(lastDivClose) + html.slice(scriptTagIdx);

fs.writeFileSync(file, html, 'utf8');
console.log('Transformed bai-' + n + '.html OK');
