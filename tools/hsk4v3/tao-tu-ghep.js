// Rut tu dien "tu → pinyin viet lien" tu chinh cac cau da co pinyin viet tay tren web
// (vi du, hoi thoai, cau dich cua moi cap — TRU hsk4v3 vi pinyin cua no do may sinh).
// Moi cap (cau chu Han, pinyin ghep theo tu) duoc doi chieu am tiet tung chu (pinyin-pro, bo dau)
// de biet tu nao gom chu nao → tu-ghep.json: { "人们": "rénmen", "中国人": "Zhōngguórén", ... }
// py.js dung file nay de tach tu + lay dung thanh nhe. Chay lai khi them cap moi: node tools/hsk4v3/tao-tu-ghep.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { pinyin } = require('pinyin-pro');
const JS = path.join(__dirname, '..', '..', 'public', 'js');

const boDau = (x) => x.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/ü/g, 'v').replace(/[^a-zv]/g, '');
const laHan = (c) => /[㐀-鿿]/.test(c);
const dem = {};   // tu -> { py -> so lan }
let soCau = 0, soKhop = 0;

function hoc(zh, py) {
  zh = String(zh || ''); py = String(py || '');
  if (!zh || !py || /\d/.test(zh)) return;
  const chu = [...zh].filter(laHan);
  if (chu.length < 2) return;
  const am = pinyin(chu.join(''), { type: 'array', toneSandhi: false }).map(boDau);
  const tok = py.replace(/[—–]/g, ' ').split(/[\s,.?!;:，。？！；：“”"'‘’()（）«»…\-]+/).filter((t) => /[a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]/.test(t));
  soCau++;
  let i = 0;
  for (const t of tok) {
    const goc = boDau(t.replace(/'/g, ''));
    let j = i, ghep = '';
    while (j < chu.length && ghep.length < goc.length) { ghep += am[j]; j++; }
    // 儿 hoa: 'yidianr' = yi + dian + er
    if (ghep !== goc && j < chu.length + 1 && chu[j - 1] === '儿' && ghep.replace(/er$/, 'r') === goc) ghep = goc;
    if (ghep !== goc) return;   // lech → bo ca cau (tranh hoc sai)
    const tu = chu.slice(i, j).join('');
    if (tu.length >= 2 && tu.length <= 5) {
      const p = t.replace(/^[A-Z]/, (c) => c) ;
      (dem[tu] = dem[tu] || {})[p] = (dem[tu][p] || 0) + 1;
    }
    i = j;
  }
  if (i === chu.length) soKhop++;
}

fs.readdirSync(JS).filter((f) => /-bai-\d+-data\.js$/.test(f) && !/^hsk4v3-/.test(f)).forEach((f) => {
  const c = { window: {} };
  c.window.window = c.window;
  vm.createContext(c);
  const vars = ['vocabData', 'dialogData', 'translateData', 'translateDataRev', 'speakingData'];
  try {
    vm.runInContext(fs.readFileSync(path.join(JS, f), 'utf8') + ';window.D={' + vars.map((v) => v + ':typeof ' + v + '!=="undefined"?' + v + ':null').join(',') + '};', c, { timeout: 5000 });
  } catch (e) { return; }
  const D = c.window.D || {};
  (D.vocabData || []).forEach((v) => {
    if (!v) return;
    hoc(v.ex_zh, v.ex_py);
    (v.exList || []).forEach((e) => e && hoc(e.zh, e.py));
    (v.colloFull || []).forEach((e) => e && hoc(e.zh, e.py));
    (v.checkList || []).forEach((e) => e && hoc(e.answer, e.answerPy));
  });
  (D.dialogData || []).forEach((d) => ((d && d.lines) || []).forEach((l) => l && hoc(l.zh, l.py)));
  (D.translateData || []).concat(D.translateDataRev || []).forEach((t) => t && hoc(t.zh, t.py));
});

// Chon cach doc pho bien nhat; viet thuong tru ten rieng (moi lan gap deu viet hoa)
const ra = {};
Object.keys(dem).sort().forEach((tu) => {
  const m = dem[tu];
  const thuong = {};
  Object.keys(m).forEach((p) => { const k = p.charAt(0).toLowerCase() + p.slice(1); thuong[k] = (thuong[k] || 0) + m[p]; });
  const tot = Object.keys(thuong).sort((a, b) => thuong[b] - thuong[a])[0];
  const hoaHet = Object.keys(m).every((p) => /^[A-ZĀÁǍÀĒÉĚÈŌÓǑÒ]/.test(p));
  const tong = Object.values(m).reduce((a, b) => a + b, 0);
  // ten rieng: luon viet hoa va gap >= 3 lan (tu dau cau cung viet hoa nen can nhieu lan)
  ra[tu] = hoaHet && tong >= 3 ? tot.charAt(0).toUpperCase() + tot.slice(1) : tot;
});
fs.writeFileSync(path.join(__dirname, 'tu-ghep.json'), JSON.stringify(ra, null, 0).replace(/","/g, '",\n"') + '\n');
console.log('Cau: ' + soCau + ', khop tron cau: ' + soKhop + ', tu hoc duoc: ' + Object.keys(ra).length);
