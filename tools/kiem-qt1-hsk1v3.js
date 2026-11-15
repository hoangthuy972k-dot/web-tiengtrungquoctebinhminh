/* QT1 — "chi dung tu da hoc" cho phan Luyen tap HSK 1 (3.0 Moi), bai 1–15.
   Moi chuoi chu Han trong cac bai tap (mcData, fillData, sortData, matchData, listenData,
   translateData, translateDataRev, speakingData) cua bai N chi duoc dung:
     - tu trong vocabData cua bai 1..N,
     - so dem (tu bai 4, bai hoc cach doc so) va chu so, dau cau,
     - ten rieng da xuat hien trong bai khoa (bang TEN ben duoi, kem bai gioi thieu).
   Tach tu tham lam (khop tu dai nhat); ky tu nao khong nam trong tu da hoc -> bao loi.
   Them: tu nhieu chu cua bai SAU (vd 家人 bai 15) xuat hien nguyen ven trong cau -> bao loi,
   tru khi nam trong mot tu da hoc dai hon.
   Chay: node tools/kiem-qt1-hsk1v3.js            (moi bai)
         node tools/kiem-qt1-hsk1v3.js 5          (mot bai)
         node tools/kiem-qt1-hsk1v3.js 1-5 --phu  (them bao cao do phu tu vung) */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const JS = path.join(__dirname, '..', 'public', 'js');
const HAN = /[㐀-鿿]+/g;
const SO = '零一二三四五六七八九十百千万两';
// Ten rieng trong bai khoa: [ten, bai gioi thieu]
const TEN = [
  ['小语', 1], ['王一飞', 1], ['一飞', 1],
  ['白家月', 2], ['家月', 2], ['安妮', 2], ['陈天中', 2], ['李文', 2],
  ['王一雪', 3], ['一雪', 3],
  ['刘明', 4], ['杨同乐', 4], ['同乐', 4],
  ['小胡', 8], ['胡医生', 8], ['小明', 10], ['小雪', 10],
];
// Phan cau co dinh dung trong de bai tieng Viet (khong phai cau hoc sinh doc): khong co

function napBai(n) {
  const c = {};
  vm.createContext(c);
  const code = fs.readFileSync(path.join(JS, 'hsk1v3-bai-' + n + '-data.js'), 'utf8');
  vm.runInContext(code + ';this.__D={vocab:vocabData,mc:mcData,fill:fillData,sort:sortData,match:matchData,' +
    'listen:listenData,tr:translateData,trRev:translateDataRev,speak:speakingData,dialog:dialogData};', c);
  return c.__D;
}

const BAI = {};
for (let n = 1; n <= 15; n++) BAI[n] = napBai(n);

// tu cua 1 muc vocab: "做饭" -> ["做饭"]; tach theo ky tu khong phai chu Han
function tuCuaMuc(v) { return (String(v.zh || '').match(HAN) || []); }

function tapChoPhep(n) {
  const s = new Set();
  for (let i = 1; i <= n; i++) BAI[i].vocab.forEach((v) => tuCuaMuc(v).forEach((w) => s.add(w)));
  TEN.forEach(([t, b]) => { if (b <= n) s.add(t); });
  if (n >= 4) SO.split('').forEach((c) => s.add(c));
  // 儿 hoa am cua tu da hoc (面条儿 -> 面条) — khong them; 儿 chi hop le khi nam trong tu da hoc
  return s;
}
function tuBaiSau(n) {
  const s = new Set();
  for (let i = n + 1; i <= 15; i++) BAI[i].vocab.forEach((v) => tuCuaMuc(v).forEach((w) => { if (w.length >= 2) s.add(w); }));
  return s;
}

// Tach tham lam: tra ve { tu: [...], loi: [ky tu / doan khong khop] }
function tach(chuoi, cho) {
  const maxL = 6, tu = [], loi = [];
  let i = 0;
  while (i < chuoi.length) {
    let k = 0;
    for (let L = Math.min(maxL, chuoi.length - i); L >= 1; L--) {
      const w = chuoi.substr(i, L);
      if (cho.has(w)) { k = L; break; }
    }
    if (!k) { loi.push(chuoi[i]); i++; continue; }
    tu.push(chuoi.substr(i, k));
    i += k;
  }
  return { tu, loi };
}

// Moi chuoi can kiem cua 1 bai: [vi tri, chuoi]
function chuoiCuaBai(D) {
  const out = [];
  const add = (where, s) => { if (s != null && s !== '') out.push([where, String(s)]); };
  D.mc.forEach((q, i) => { add('mc' + (i + 1) + '.q', q.q); q.opts.forEach((o, j) => add('mc' + (i + 1) + '.opt' + j, o)); add('mc' + (i + 1) + '.exp', q.exp); });
  D.fill.forEach((q, i) => { ['pre', 'blank', 'post', 'hint', 'ans', 'exp'].forEach((k) => add('fill' + (i + 1) + '.' + k, q[k])); });
  D.sort.forEach((q, i) => { add('sort' + (i + 1) + '.ans', q.ans); add('sort' + (i + 1) + '.words', (q.words || []).join('')); (q.alt || []).forEach((a) => add('sort' + (i + 1) + '.alt', a)); });
  D.match.forEach((q, i) => { add('match' + (i + 1), String(q.left) + String(q.right)); });
  (Array.isArray(D.listen) ? D.listen : []).forEach((g, i) => {
    add('listen' + (i + 1) + '.audio', g.audio);
    (g.questions || []).forEach((q, j) => { add('listen' + (i + 1) + '.' + (j + 1) + '.q', q.q); q.opts.forEach((o) => add('listen' + (i + 1) + '.' + (j + 1) + '.opt', o)); add('listen' + (i + 1) + '.' + (j + 1) + '.exp', q.exp); });
  });
  D.tr.forEach((t, i) => add('tr' + (i + 1), t.zh));
  D.trRev.forEach((t, i) => add('trRev' + (i + 1), t.zh));
  ((D.speak && D.speak.questions) || []).forEach((q, i) => {
    ['q_zh', 'hint', 'sample', 'note'].forEach((k) => add('speak' + (i + 1) + '.' + k, q[k]));
  });
  return out;
}

function kiemBai(n) {
  const cho = tapChoPhep(n), sau = tuBaiSau(n);
  const loi = [];
  chuoiCuaBai(BAI[n]).forEach(([where, s]) => {
    (s.match(HAN) || []).forEach((run) => {
      const r = tach(run, cho);
      if (r.loi.length) loi.push(where + ': 「' + run + '」 chua hoc: ' + [...new Set(r.loi)].join(' '));
      // tu bai sau nam tron trong cau (khong thuoc tu da hoc dai hon)
      sau.forEach((w) => {
        let p = run.indexOf(w);
        while (p >= 0) {
          // vi tri p..p+w.length co bi mot tu da hoc dai hon bao trum khong?
          let bao = false;
          for (let a = Math.max(0, p - 5); a <= p && !bao; a++) {
            for (let b = p + w.length; b <= Math.min(run.length, a + 6); b++) {
              const x = run.slice(a, b);
              if (x.length > w.length && cho.has(x)) { bao = true; break; }
            }
          }
          if (!bao && !cho.has(w)) loi.push(where + ': 「' + run + '」 co tu cua bai sau: ' + w);
          p = run.indexOf(w, p + 1);
        }
      });
    });
  });
  return loi;
}

// Do phu: moi tu noi dung cua bai (khong phai ten rieng) xuat hien trong >= 2 muc mc/fill/sort/match
function doPhu(n) {
  const D = BAI[n];
  const muc = [];
  D.mc.forEach((q) => muc.push(q.q + ' ' + q.opts.join(' ')));
  D.fill.forEach((q) => muc.push(q.pre + q.ans + q.post));
  D.sort.forEach((q) => muc.push(q.ans));
  D.match.forEach((q) => muc.push(q.left + q.right));
  const thieu = [];
  D.vocab.forEach((v) => {
    if (/riêng/i.test(v.pos || '')) return;
    tuCuaMuc(v).forEach((w) => {
      const c = muc.filter((m) => m.indexOf(w) >= 0).length;
      if (c < 2) thieu.push(w + '(' + c + ')');
    });
  });
  return thieu;
}

const arg = process.argv[2] && !/^--/.test(process.argv[2]) ? process.argv[2] : '1-15';
const [a, b] = arg.split('-').map(Number);
const phu = process.argv.includes('--phu');
let tong = 0;
for (let n = a; n <= (b || a); n++) {
  const loi = kiemBai(n);
  tong += loi.length;
  const D = BAI[n];
  const nghe = Array.isArray(D.listen) ? D.listen.reduce((s, g) => s + (g.questions || []).length, 0) : 0;
  console.log('Bai ' + n + ': mc ' + D.mc.length + ' · fill ' + D.fill.length + ' · sort ' + D.sort.length + ' · match ' + D.match.length +
    ' · nghe ' + nghe + ' · dich ' + D.tr.length + '/' + D.trRev.length + ' -> ' + (loi.length ? loi.length + ' loi' : 'OK'));
  loi.forEach((l) => console.log('   ✗ ' + l));
  if (phu) { const t = doPhu(n); if (t.length) console.log('   do phu < 2: ' + t.join(' ')); }
}
console.log(tong ? 'TONG: ' + tong + ' loi' : 'TONG: 0 loi ✓');
process.exitCode = tong ? 1 : 0;
module.exports = { tach, tapChoPhep, BAI };
