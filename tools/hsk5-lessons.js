/* Mo ta tung bai HSK 5 — dung de sinh trang bang tools/build-hsk5-page.js.
   Moi bai mot file tools/hsk5-meta/bai-N.json: {zh, py, vn, topic, vocabCount,
   synonymCount, grammar:[{point, explain, rule, examples, errors}]}.
   Noi dung hoc (tu vung, bai doc, bai tap) nam o public/js/hsk5-bai-N-data.js  */
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, 'hsk5-meta');
const out = {};
fs.readdirSync(DIR).forEach(function (f) {
  const m = f.match(/^bai-(\d+)\.json$/);
  if (m) out[m[1]] = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'));
});
module.exports = out;
