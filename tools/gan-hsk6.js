/* Ghep cac bai HSK 6 da soan vao web:
   node tools/gan-hsk6.js <thu-muc-soan> 2 3 4 ...
   <thu-muc-soan> co hsk6-meta/bai-N.json va hsk6-npt/bai-N.json (do tro ly soan).
   · chep meta/npt vao tools/hsk6-meta, tools/hsk6-npt
   · sinh trang public/lessons/hsk6-bai-N.html (khuon bai 1)
   · gop ngu phap chia theo diem -> public/js/ngu-phap-tab-hsk6.js
   · dang ky bai trong public/js/data.js (APP_DATA.lessons.hsk6)
   Xong chay: node tools/stamp-assets.js --that */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..');
const [, , SRC, ...ds] = process.argv;

ds.forEach(function (n) {
  ['hsk6-meta', 'hsk6-npt'].forEach(function (d) {
    const f = path.join(SRC, d, 'bai-' + n + '.json');
    JSON.parse(fs.readFileSync(f, 'utf8')); // hong thi dung ngay
    fs.copyFileSync(f, path.join(__dirname, d, 'bai-' + n + '.json'));
  });
  execFileSync(process.execPath, [path.join(__dirname, 'build-hsk6-page.js'), String(n)], { stdio: 'inherit' });
});

// Ngu phap chia theo diem
const NPT = path.join(__dirname, 'hsk6-npt');
const so = fs.readdirSync(NPT).map((f) => (f.match(/^bai-(\d+)\.json$/) || [])[1]).filter(Boolean).map(Number).sort((a, b) => a - b);
let js = '/* Ngữ pháp chia theo điểm — HSK6 (dùng với ngu-phap-tab.js). SINH TỰ ĐỘNG bằng tools/gan-hsk6.js\n' +
  '   từ tools/hsk6-npt/bai-N.json — sửa ở đó rồi chạy lại, đừng sửa tay file này. */\n' +
  'window.NGU_PHAP_TAB = window.NGU_PHAP_TAB || {};\n';
so.forEach(function (n) {
  js += 'window.NGU_PHAP_TAB["/lessons/hsk6-bai-' + n + '.html"] = ' + fs.readFileSync(path.join(NPT, 'bai-' + n + '.json'), 'utf8').trim() + ';\n';
});
fs.writeFileSync(path.join(ROOT, 'public', 'js', 'ngu-phap-tab-hsk6.js'), js);

// Danh sach bai trong app
const META = path.join(__dirname, 'hsk6-meta');
const bai = fs.readdirSync(META).map((f) => (f.match(/^bai-(\d+)\.json$/) || [])[1]).filter(Boolean).map(Number).sort((a, b) => a - b)
  .filter((n) => fs.existsSync(path.join(ROOT, 'public', 'lessons', 'hsk6-bai-' + n + '.html')));
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/&amp;/g, '&') + "'";
const entries = bai.map(function (n) {
  const m = JSON.parse(fs.readFileSync(path.join(META, 'bai-' + n + '.json'), 'utf8'));
  return '      {\n' +
    "        id: 'hsk6-l" + n + "',\n" +
    '        number: ' + n + ',\n' +
    '        title: ' + q(m.vn) + ',\n' +
    '        titleHanzi: ' + q(m.zh) + ',\n' +
    '        titlePinyin: ' + q(m.py) + ',\n' +
    '        topic: ' + q(m.topic) + ',\n' +
    '        vocabCount: ' + m.vocabCount + ',\n' +
    '        dialogueCount: 1,\n' +
    '        grammarCount: ' + m.grammar.length + ',\n' +
    "        fullPageUrl: '/lessons/hsk6-bai-" + n + ".html'\n" +
    '      }';
}).join(',\n');
const DATA = path.join(ROOT, 'public', 'js', 'data.js');
// data.js co the la CRLF (git tren Windows): lam viec voi LF roi tra lai dang cu
const goc = fs.readFileSync(DATA, 'utf8');
const eol = goc.indexOf('\r\n') >= 0 ? '\r\n' : '\n';
let d = goc.replace(/\r\n/g, '\n');
const re = /(\n    hsk6: \[\n)[\s\S]*?(\n    \],\n    yct: \[)/;
if (!re.test(d)) throw new Error('Khong thay khoi hsk6 trong data.js');
d = d.replace(re, (a, b, c) => b + entries + c);
fs.writeFileSync(DATA, eol === '\n' ? d : d.replace(/\n/g, eol));
console.log('Da ghep ' + ds.join(', ') + ' · app co ' + bai.length + ' bai HSK 6 · ngu phap ' + so.length + ' bai');
