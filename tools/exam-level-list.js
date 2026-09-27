/* Dung lai thu muc + danh sach de cua mot cap trong /exam/index.html tu cac file tests/<cap>-test-N.js.
   Cach dung: node tools/exam-level-list.js hsk4        (tu HSK 4 tro len; HSK 1–3 soan tay truoc do)
   · the thu muc (nut "HSK 4 · N de thi") thay cho o "Sap co"
   · khoi <section id="lv-hsk4"> liet ke tung de
   · muc trong o chon bang xep hang
   Chay lai moi khi them de. Xong chay: node tools/stamp-assets.js --that */
const fs = require('fs');
const path = require('path');
const LV = process.argv[2];
if (!/^hsk[4-6]$/.test(LV || '')) { console.log('Dung: node tools/exam-level-list.js hsk4|hsk5|hsk6'); process.exit(1); }
const so = LV.slice(3);
const ROOT = path.join(__dirname, '..', 'public', 'exam');
const FILE = path.join(ROOT, 'index.html');
const META = {
  hsk4: { cau: '100 câu (Nghe 45 · Đọc 40 · Viết 15)', phut: 105 },
  hsk5: { cau: '100 câu (Nghe 45 · Đọc 45 · Viết 10)', phut: 125 },
  hsk6: { cau: '101 câu (Nghe 50 · Đọc 50 · Viết 1)', phut: 140 },
}[LV];

const de = fs.readdirSync(path.join(ROOT, 'tests'))
  .map((f) => (f.match(new RegExp('^' + LV + '-test-(\\d+)\\.js$')) || [])[1]).filter(Boolean).map(Number).sort((a, b) => a - b)
  .map((n) => {
    const g = { window: {} };
    new Function('window', fs.readFileSync(path.join(ROOT, 'tests', LV + '-test-' + n + '.js'), 'utf8'))(g.window);
    return { n, code: g.window.EXAM_DATA.code || '' };
  });
if (!de.length) { console.log('Chua co de ' + LV); process.exit(1); }

const ICO_FOLDER = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>';
const ICO_CHEV = '<svg class="ex-folder-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
const ICO_CUP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8M9 17h6"/></svg>';

const folder =
  '      <button type="button" class="ex-folder" data-folder="' + LV + '" aria-expanded="false" aria-controls="lv-' + LV + '">\n' +
  '        <span class="ex-folder-ico">' + ICO_FOLDER + '</span>\n' +
  '        <span class="ex-folder-t"><b>HSK ' + so + '</b><small>' + de.length + ' đề thi</small></span>\n' +
  '        <span class="ex-folder-prog" data-prog="' + LV + '"><span class="ex-folder-bar"><i style="width:0%"></i></span><small>Chưa thi đề nào</small></span>\n' +
  '        ' + ICO_CHEV + '\n' +
  '      </button>';

const section =
  '    <section class="ex-level" id="lv-' + LV + '" data-level="' + LV + '" aria-labelledby="lvt-' + LV + '" hidden>\n' +
  '      <div class="ex-level-head">\n' +
  '        <div><h2 id="lvt-' + LV + '">HSK ' + so + ' <span class="tag">' + de.length + ' đề</span></h2>\n' +
  '        <p class="ex-level-meta">Mỗi đề: ' + META.cau + ' · ' + META.phut + ' phút · Đạt từ 180/300 điểm</p></div>\n' +
  '        <button type="button" class="ex-level-close" data-close-folder aria-label="Đóng danh sách HSK ' + so + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>\n' +
  '      </div>\n' +
  '      <ol class="ex-tests" id="' + LV + 'Tests">\n' +
  de.map((d) => {
    const id = LV + '-test-' + d.n;
    return '        <li class="ex-test" data-test="' + id + '">\n' +
      '          <div class="ex-test-name"><h3>Test ' + d.n + '</h3><span>Đề thật ' + d.code + '</span></div>\n' +
      '          <div class="last" data-last="' + id + '"><span class="ex-st">Chưa thi</span></div>\n' +
      '          <div class="actions"><a class="ex-btn-link" href="/exam/test/?id=' + id + '" data-start="' + id + '">Bắt đầu thi</a><a class="ex-btn-link ghost ex-rank-btn" href="/exam/?rank=' + id + '#rank" data-rank-of="' + id + '" aria-label="Xếp hạng HSK ' + so + ' Test ' + d.n + '" title="Xếp hạng đề này">' + ICO_CUP + '</a></div>\n' +
      '        </li>\n';
  }).join('') +
  '      </ol>\n' +
  '    </section>';

const opts = '          <option value="level:' + LV + '">Tổng hợp HSK ' + so + '</option>\n' +
  de.map((d) => '          <option value="' + LV + '-test-' + d.n + '">HSK ' + so + ' - Test ' + d.n + '</option>\n').join('');

let h = fs.readFileSync(FILE, 'utf8');
const eol = h.indexOf('\r\n') >= 0 ? '\r\n' : '\n';
h = h.replace(/\r\n/g, '\n');

// 1. The thu muc: thay o "Sap co" hoac nut da co
const reSoon = new RegExp('      <div class="ex-folder is-soon" aria-disabled="true">\\n        <span class="ex-folder-ico">[\\s\\S]*?<b>HSK ' + so + '</b><small>Sắp có[\\s\\S]*?</div>');
const reBtn = new RegExp('      <button type="button" class="ex-folder" data-folder="' + LV + '"[\\s\\S]*?</button>');
if (reBtn.test(h)) h = h.replace(reBtn, () => folder);
else if (reSoon.test(h)) h = h.replace(reSoon, () => folder);
else throw new Error('Khong thay o thu muc HSK ' + so);

// 2. Khoi danh sach de: thay neu co, khong thi chen sau khoi cap truoc
const reSec = new RegExp('    <section class="ex-level" id="lv-' + LV + '"[\\s\\S]*?</section>');
if (reSec.test(h)) h = h.replace(reSec, () => section);
else {
  const truoc = 'hsk' + (Number(so) - 1);
  const reTruoc = new RegExp('    <section class="ex-level" id="lv-' + truoc + '"[\\s\\S]*?</section>');
  if (!reTruoc.test(h)) throw new Error('Khong thay khoi lv-' + truoc);
  h = h.replace(reTruoc, (m) => m + '\n\n' + section);
}

// 3. O chon bang xep hang
const reOpt = new RegExp('          <option value="level:' + LV + '">[\\s\\S]*?(?=          <option value="level:|          </select>)');
if (reOpt.test(h)) h = h.replace(reOpt, () => opts);
else h = h.replace('          </select>', () => opts + '          </select>');

fs.writeFileSync(FILE, eol === '\n' ? h : h.replace(/\n/g, eol));
console.log('Da cap nhat /exam/index.html: HSK ' + so + ' · ' + de.length + ' de (' + de.map((d) => d.code).join(', ') + ')');
