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
  hsk3v3: {
    duoi: ['hsk1v3', 'hsk2v3'], soTu: 1, soBai: 18,
    ten: [
      ['王姐', 2], ['小李', 4], ['姓李', 4], ['北京南站', 6], ['刘长春', 9], ['老张', 11], ['英国', 13],
      ['李老师', 10], ['李叔叔', 18], ['小文', 18],
    ],
    // Dang tu trong bai khoa HSK3 la bien the / tach ra / ghep cua tu da hoc: [dang, bai]
    them: [
      ['看起来', 1], ['行李箱', 1], ['什么样', 1], ['黑', 1], ['走出', 1], ['绿茶', 2], ['喜不喜欢', 2],
      ['放', 3], ['纸箱', 3], ['起来', 5], ['步', 8], ['泳', 8], ['发低烧', 8], ['话', 8], ['老', 9], ['奥运会', 9],
      ['出', 11], ['起', 12], ['今晚', 13], ['画板', 13], ['红茶', 13], ['红', 13], ['老城', 15], ['老街', 15], ['绿', 15],
      ['身上', 16], ['熊猫', 16], ['大猫熊', 16], ['觉', 16], ['熊猫馆', 16], ['中', 10], ['西边', 17],
      ['春节', 18], ['假', 18], ['会儿', 18], ['父母', 18],
    ],
  },
  // YCT (thieu nhi): cap rieng, khong co cap duoi; so 一..十 la tu vung bai 1 (khong mo 零百千万两)
  yct: {
    duoi: [], soTu: 99, soBai: 11,
    ten: [['乐乐', 2], ['甜甜', 2], ['明明', 2]],
    them: [['不谢', 8], ['早', 10]],
  },
  // HSK1 cu (HSK标准教程1): cap rieng, khong co cap duoi; so dem tu bai 5 (100以内的数字)
  hsk1: {
    duoi: [], soTu: 5,
    ten: [['李月', 3], ['李', 3], ['王方', 10], ['谢朋', 10], ['北京', 11], ['王', 12], ['大卫', 13], ['张', 14]],
    them: [['不谢', 2], ['哪国', 4]],
  },
};

// So bai cua cap (mac dinh 15; cap nao khac thi khai bao soBai trong CAP)
const SB = (c) => (CAP[c] && CAP[c].soBai) || 15;
// HSK 4 (3.0) — 新HSK教程4上+4下, 20 bai; cap duoi = toan bo hsk1v3 + hsk2v3 + hsk3v3
CAP.hsk4v3 = {
  duoi: ['hsk1v3', 'hsk2v3', 'hsk3v3'], soTu: 1, soBai: 20,
  // ten rieng trong bai khoa: [ten, bai gioi thieu]
  ten: [
    ['杨哥', 7], ['乐哥', 8], ['林静静', 12], ['林静', 12], ['周力', 13], ['刘小明', 13], ['徐前', 14], ['赵女士', 18], ['刘小雪', 19],
  ],
  // dang tu trong bai khoa HSK4 la ghep cua tu da hoc: [dang, bai]
  them: [
    ['租房', 2],
  ],
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
for (let n = 1; n <= SB(cap); n++) BAI[n] = napBai(cap, n);

// tu cua 1 muc vocab: "做饭" -> ["做饭"]; tach theo ky tu khong phai chu Han
function tuCuaMuc(v) { return (String(v.zh || '').match(HAN) || []); }

// Nen: tu + ten + so cua cac cap duoi (toan bo)
const NEN = new Set();
CAP[cap].duoi.forEach((d) => {
  for (let n = 1; n <= SB(d); n++) napBai(d, n).vocab.forEach((v) => tuCuaMuc(v).forEach((w) => NEN.add(w)));
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
  for (let i = n + 1; i <= SB(cap); i++) BAI[i].vocab.forEach((v) => tuCuaMuc(v).forEach((w) => { if (w.length >= 2) s.add(w); }));
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
  // Luyen noi 3 tang (YCT): t1.models / t2.drills / t3.tasks
  const sp = D.speak || {};
  ((sp.t1 && sp.t1.models) || []).forEach((m, i) => add('noi1.' + (i + 1), m.zh));
  ((sp.t2 && sp.t2.drills) || []).forEach((d, i) => [d.frame].concat(d.options || [], d.samples || []).forEach((s) => add('noi2.' + (i + 1), s)));
  ((sp.t3 && sp.t3.tasks) || []).forEach((t, i) => (t.structure || []).concat([t.sample, t.note, t.guide]).forEach((s) => add('noi3.' + (i + 1), s)));
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

const arg = process.argv[3] && !/^--/.test(process.argv[3]) ? process.argv[3] : '1-' + SB(cap);
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
