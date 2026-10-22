const fs = require('fs');
const path = require('path');
const DIR = 'public/js';
const lex = {};           // 汉字 -> pinyin
const nguon = {};
function them(zh, py, tu) {
  if (!zh || !py) return;
  zh = String(zh).trim(); py = String(py).trim();
  if (!/^[\u4e00-\u9fff]+$/.test(zh)) return;
  if (!/^[a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüńňǹ' ]+$/.test(py)) return;
  if (lex[zh] && lex[zh] !== py) return;   // da biet, bo qua ban khac
  lex[zh] = py; nguon[zh] = tu;
}
fs.readdirSync(DIR).filter(f => /-data\.js$/.test(f)).forEach(f => {
  let data;
  try { data = fs.readFileSync(path.join(DIR, f), 'utf8'); } catch (e) { return; }
  const sandbox = {};
  try { (new Function('with(this){' + data + '; return typeof vocabData!=="undefined"?vocabData:[]}')).call(sandbox); } catch (e) { return; }
  let vd = [];
  try { vd = (new Function(data + '; return typeof vocabData!=="undefined"?vocabData:[]'))(); } catch (e) { return; }
  vd.forEach(v => {
    them(v.zh, v.py, f);
    (v.hanzi || []).forEach(h => them(h.c, h.p, f));
  });
});
fs.writeFileSync(process.argv[2] || 'lex.json', JSON.stringify(lex, null, 0));
console.log('So muc tu dien: ' + Object.keys(lex).length);
const dai = Object.keys(lex).filter(k => k.length >= 2).length;
console.log('  tu 2 chu tro len: ' + dai + ' | mot chu: ' + (Object.keys(lex).length - dai));
