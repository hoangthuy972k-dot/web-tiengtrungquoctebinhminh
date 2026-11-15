/* QT1 — "chi dung tu da hoc" cho phan Luyen tap cac cap 3.0 Moi (hsk1v3, hsk2v3), bai 1–15.
   Moi chuoi chu Han trong cac bai tap (mcData, fillData, sortData, matchData, listenData,
   translateData, translateDataRev, speakingData) cua bai N chi duoc dung:
     - tu vung cua cac cap DUOI (hsk2v3: toan bo hsk1v3) + ten rieng va so dem cua cap duoi,
     - tu trong vocabData cua bai 1..N cua cap dang kiem,
     - so dem (hsk1v3: tu bai 4; hsk2v3: luon) va chu so, dau cau,
     - ten rieng da xuat hien trong bai khoa (bang TEN ben duoi, kem bai gioi thieu).
   Tach tu tham lam (khop tu dai nhat); ky tu nao khong nam trong tu da hoc -> bao loi.
   Them: tu nhieu chu cua bai SAU cung cap xuat hien nguyen ven trong cau -> bao loi,
   tru khi nam trong mot tu da hoc dai hon.
   Chay: node tools/kiem-qt1.js hsk2v3            (moi bai)
         node tools/kiem-qt1.js hsk2v3 5          (mot bai)
         node tools/kiem-qt1.js hsk2v3 1-5 --phu  (them bao cao do phu tu vung)
   (tools/kiem-qt1-hsk1v3.js van giu nguyen cho hsk1v3.) */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const JS = path.join(__dirname, '..', 'public', 'js');
const HAN = /[㐀-鿿]+/g;
const SO = '零一二三四五六七八九十百千万两';
// Cau hinh tung cap: ten rieng trong bai khoa [ten, bai gioi thieu], bai bat dau duoc dung so dem, cap duoi
const CAP = {
  hsk1v3: {
    duoi: [], soTu: 4,
    ten: [
      ['小语', 1], ['王一飞', 1], ['一飞', 1],
      ['白家月', 2], ['家月', 2], ['安妮', 2], ['陈天中', 2], ['李文', 2],
      ['王一雪', 3], ['一雪', 3],
      ['刘明', 4], ['杨同乐', 4], ['同乐', 4],
      ['小胡', 8], ['胡医生', 8], ['小明', 10], ['小雪', 10],
    ],
  },
  hsk2v3: {
    duoi: ['hsk1v3'], soTu: 1,
    ten: [
      ['天中', 1], ['北京烤鸭', 1], ['北京大学', 2], ['刘爷爷', 5], ['杨', 14], ['颐和园', 15],
    ],
    // Dang tu xuat hien trong bai khoa HSK2 la bien the / tach ra cua tu da hoc: [dang, bai]
    them: [
      ['点儿', 1], ['帮个忙', 1], ['打个电话', 1], ['烤鸭', 1], ['客气', 5], ['姐', 5], ['爸', 5], ['妈', 5],
      ['高高兴兴', 6], ['舒舒服服', 6], ['睡一觉', 6], ['没错', 7], ['出来', 9], ['跳舞跳得', 14],
    ],
  },
};

const cap = process.argv[2];
if (!CAP[cap]) { console.log('Dung: node tools/kiem-qt1.js <' + Object.keys(CAP).join('|') + '> [bai|a-b] [--phu]'); process.exit(2); }

function napBai(c0, n) {
  const c = {};
  vm.createContext(c);
  const code = fs.readFileSync(path.join(JS, c0 + '-bai-' + n + '-data.js'), 'utf8');
  vm.runInContext(code + ';this.__D={vocab:vocabData,mc:mcData,fill:fillData,sort:sortData,match:matchData,' +
    'listen:listenData,tr:translateData,trRev:translateDataRev,speak:speakingData,dialog:dialogData};', c);
  return c.__D;
}
const BAI = {};
for (let n = 1; n <= 15; n++) BAI[n] = napBai(cap, n);

// tu cua 1 muc vocab: "做饭" -> ["做饭"]; tach theo ky tu khong phai chu Han
function tuCuaMuc(v) { return (String(v.zh || '').match(HAN) || []); }

// Nen: tu + ten + so cua cac cap duoi (toan bo)
const NEN = new Set();
CAP[cap].duoi.forEach((d) => {
  for (let n = 1; n <= 15; n++) napBai(d, n).vocab.forEach((v) => tuCuaMuc(v).forEach((w) => NEN.add(w)));
  CAP[d].ten.concat(CAP[d].them || []).forEach(([t]) => NEN.add(t));
  SO.split('').forEach((ch) => NEN.add(ch));
});

function tapChoPhep(n) {
  const s = new Set(NEN);
  for (let i = 1; i <= n; i++) BAI[i].vocab.forEach((v) => tuCuaMuc(v).forEach((w) => s.add(w)));
  CAP[cap].ten.concat(CAP[cap].them || []).forEach(([t, b]) => { if (b <= n) s.add(t); });
  if (n >= CAP[cap].soTu) SO.split('').forEach((c) => s.add(c));
  return s;
}
function tuBaiSau(n) {
  const s = new Set();
  for (let i = n + 1; i <= 15; i++) BAI[i].vocab.forEach((v) => tuCuaMuc(v).forEach((w) => { if (w.length >= 2) s.add(w); }));
  return s;
}

// Tach tu: quy hoach dong — it chu chua hoc nhat, roi it tu nhat (tranh 有时间 -> 有时|间).
// Tra ve { tu: [...], loi: [ky tu khong khop] }
function tach(chuoi, cho) {
  const maxL = 6, n = chuoi.length;
  const best = [[0, 0, -1, 0]]; // [so chu loi, so tu, vi tri truoc, la tu?]
  for (let i = 1; i <= n; i++) {
    let b = null;
    for (let L = 1; L <= Math.min(maxL, i); L++) {
      const w = chuoi.substr(i - L, L), p = best[i - L];
      const ok = cho.has(w);
      if (!ok && L > 1) continue;
      const c = [p[0] + (ok ? 0 : 1), p[1] + 1, i - L, ok ? 1 : 0];
      if (!b || c[0] < b[0] || (c[0] === b[0] && c[1] < b[1])) b = c;
    }
    best.push(b);
  }
  const tu = [], loi = [];
  for (let i = n; i > 0; i = best[i][2]) {
    const w = chuoi.slice(best[i][2], i);
    if (best[i][3]) tu.unshift(w); else loi.unshift(w);
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
      // Tu bai sau: tach lai voi (da hoc + tu do); chi bao khi tu do thanh mot tu rieng trong cach tach
      // (走路上班 = 走路|上班 -> khong phai 路上; 坐地铁 = 坐|地铁 -> bao).
      sau.forEach((w) => {
        if (cho.has(w) || run.indexOf(w) < 0) return;
        const them = new Set(cho); them.add(w);
        if (tach(run, them).tu.indexOf(w) >= 0) loi.push(where + ': 「' + run + '」 co tu cua bai sau: ' + w);
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

const arg = process.argv[3] && !/^--/.test(process.argv[3]) ? process.argv[3] : '1-15';
const [a, b] = arg.split('-').map(Number);
const phu = process.argv.includes('--phu');
let tong = 0;
for (let n = a; n <= (b || a); n++) {
  const loi = kiemBai(n);
  tong += loi.length;
  const D = BAI[n];
  const nghe = Array.isArray(D.listen) ? D.listen.reduce((s, g) => s + (g.questions || []).length, 0) : 0;
  console.log(cap + ' bai ' + n + ': mc ' + D.mc.length + ' · fill ' + D.fill.length + ' · sort ' + D.sort.length + ' · match ' + D.match.length +
    ' · nghe ' + nghe + ' · dich ' + D.tr.length + '/' + D.trRev.length + ' -> ' + (loi.length ? loi.length + ' loi' : 'OK'));
  loi.forEach((l) => console.log('   ✗ ' + l));
  if (phu) { const t = doPhu(n); if (t.length) console.log('   do phu < 2: ' + t.join(' ')); }
}
console.log(tong ? 'TONG: ' + tong + ' loi' : 'TONG: 0 loi ✓');
process.exitCode = tong ? 1 : 0;
module.exports = { tach, tapChoPhep, BAI };
