/* Them the "Bac cau Han-Viet" vao moi trang bai hoc.
   Noi dung the do lesson-engine.js tu sinh ra tu am Han-Viet co san trong
   vocabData cua tung bai, nen khong phai soan them chu nao.

   Cach dung:  node tools/add-hanviet-tab.js          (chay thu)
               node tools/add-hanviet-tab.js --that   (ghi de)          */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'public', 'lessons');
const THAT = process.argv.includes('--that');

const TAB = '  <button class="tab-btn" data-action="show-tab" data-tab="hanviet">🌉 Hán–Việt</button>';
const SECTION = [
  '<div id="hanviet" class="section">',
  '  <div class="sec-head">',
  '    <div class="sec-title">🌉 Bắc cầu Hán–Việt <span class="sec-badge">汉越词</span></div>',
  '    <div class="sec-sub">Từ nào đọc âm Hán–Việt là đoán được nghĩa, từ nào phải nhớ riêng — tách rõ hai loại</div>',
  '  </div>',
  '  <div id="hanviet-wrap"></div>',
  '</div>'
].join('\n');

let them = 0, boQua = 0, loi = 0;

fs.readdirSync(DIR).filter((f) => /\.html$/.test(f)).sort().forEach(function (f) {
  const p = path.join(DIR, f);
  let s = fs.readFileSync(p, 'utf8');

  if (s.indexOf('data-tab="hanviet"') >= 0) { boQua++; return; }

  // Mot so trang dung xuong dong kieu Windows — phai giu dung kieu cua tung file
  const nl = s.indexOf('\r\n') >= 0 ? '\r\n' : '\n';

  // 1) Chen nut the — ngay sau the "Tu moi" cho de thay
  const m = s.match(/^.*data-tab="vocab".*(\r?\n)/m);
  if (!m) { console.log('  ⚠ khong thay the "Tu moi": ' + f); loi++; return; }
  s = s.replace(m[0], m[0] + TAB + nl);

  // 2) Chen phan noi dung — dat ngay truoc phan "The nho" neu co
  const anchor = s.match(/<div id="flash" class="section">/);
  const block = SECTION.split('\n').join(nl);
  if (anchor) {
    s = s.replace(anchor[0], block + nl + nl + anchor[0]);
  } else {
    const tail = s.lastIndexOf('</div>' + nl + nl + '<script');
    if (tail < 0) { console.log('  ⚠ khong thay cho chen noi dung: ' + f); loi++; return; }
    s = s.slice(0, tail + 6 + nl.length) + nl + block + nl + s.slice(tail + 6 + nl.length);
  }

  if (THAT) fs.writeFileSync(p, s);
  them++;
});

console.log(THAT ? '=== DA GHI ===' : '=== CHAY THU, khong ghi ===');
console.log('Them the  : ' + them + ' trang');
console.log('Da co san : ' + boQua + ' trang');
if (loi) console.log('Khong xu ly duoc: ' + loi + ' trang');
