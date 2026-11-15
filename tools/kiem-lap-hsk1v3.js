/* Kiem LAP NOI DUNG — phan Luyen tap HSK 1 (3.0 Moi), bai 1–15.
   Yeu cau giao vien: "tranh lap lai noi dung cac cau, co the giam so luong nhung han che lap lai noi dung".
   Moi muc bai tap (mc, fill, sort, listen, match, translate, translateRev, speaking) -> cac "cau loi"
   chu Han (tach theo dau cau 。？！，；：、——…, chi giu chu Han, bo cau < 3 chu va cau cong thuc nhu 不客气).
     mc     : phan chu Han trong de (＿＿ thay bang dap an dung) + phuong an dung ("Cau nao SAI?": 3 cau dung)
     fill   : pre + ans + post
     sort   : ans
     listen : audio (+ phuong an dung neu la cau chu Han)
     tr/trRev: zh
     speak  : q_zh + sample (cau mau)
     match  : left+right (chi so trung cap)
   Bao cao moi bai:
     [TRUNG]   cung mot cau o >= 2 muc khac nhau (ke ca khac dang);
     [GAN]     2 cau cung khung, chi doi 1 cho (tien to + hau to chung >= 60% cau ngan, phan khac <= 3 chu);
     [BAI KHOA] cau bai khoa (dialogData) chep nguyen o >= 2 muc;
     [NHIEU]   mc dung lai cung bo phuong an; dap an dung cua muc nay lai la phuong an cua muc khac;
     [CU]      cau (>= 4 chu) chep nguyen tu Luyen tap cua bai truoc;
     [GHEP]    cap ghep trung hoac ghep cheo thanh tu da hoc (de mo ho);
     [PHU]     tu vung cua bai chua xuat hien o muc nao (dich: 0).
   Diem bai = % muc khong dinh [TRUNG]/[GAN]. Ngoai le co chu y: bang CHO_PHEP (kem ly do).
   Chay: node tools/kiem-lap-hsk1v3.js          (moi bai, chi tom tat + loi)
         node tools/kiem-lap-hsk1v3.js 3        (mot bai)
         node tools/kiem-lap-hsk1v3.js 1-15 -v  (in tung cap) */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const JS = path.join(__dirname, '..', 'public', 'js');
const HAN1 = /[㐀-鿿]/;
const KHUC = /[㐀-鿿，。？！、；：…—＿_·“”‘’「」《》（）()?!,.\s0-9]+/g; // doan chu Han lien (ke ca dau cau)
const NGAT = /[，。？！；：、…—,?!;:\s“”「」]+/;
// Cau cong thuc / ung dap ngan: khong tinh lap
const CONG_THUC = new Set(['不客气', '没关系', '对不起', '谢谢你', '谢谢您', '老师好', '你们好', '同学们好', '再见', '不用谢', '没什么',
  '好的', '是的', '不是', '你呢', '我也是']);
// Ngoai le co chu y: { bai: [[cauA, cauB, ly do]] } — cauB = cauA khi la [TRUNG]
const CHO_PHEP = {};
const MIN = 3;

function napBai(n) {
  const c = {};
  vm.createContext(c);
  const code = fs.readFileSync(path.join(JS, 'hsk1v3-bai-' + n + '-data.js'), 'utf8');
  vm.runInContext(code + ';this.__D={vocab:vocabData,mc:mcData,fill:fillData,sort:sortData,match:matchData,' +
    'listen:listenData,tr:translateData,trRev:translateDataRev,speak:speakingData,dialog:dialogData};', c);
  return c.__D;
}
const chiHan = (s) => (String(s).match(/[㐀-鿿]/g) || []).join('');
const coHan = (s) => HAN1.test(String(s || ''));
// chuoi tron -> cac cau loi (chi chu Han)
function cauTu(s) {
  const out = [];
  (String(s || '').match(KHUC) || []).forEach((k) => {
    if (!coHan(k)) return;
    k.split(NGAT).forEach((p) => { const h = chiHan(p); if (h.length >= MIN && !CONG_THUC.has(h)) out.push(h); });
  });
  return out;
}

// Muc bai tap: { id, loai, cau:[...], nguyen:[chuoi goc de in] }
function mucCuaBai(D) {
  const ds = [];
  const add = (id, loai, chuoi) => {
    const cau = [];
    chuoi.forEach((s) => cauTu(s).forEach((h) => { if (cau.indexOf(h) < 0) cau.push(h); }));
    ds.push({ id, loai, cau, goc: chuoi.filter(coHan).join(' | ') });
  };
  D.mc.forEach((q, i) => {
    const dung = q.opts[q.ans];
    let de = String(q.q || '');
    if (coHan(dung) && /[＿_]{1,}/.test(de)) de = de.replace(/[＿_]+/, chiHan(dung) ? dung : '');
    const parts = [de];
    // "Cau nao SAI?": dap an la cau loi -> noi dung hoc sinh doc la 3 cau dung con lai
    if (/SAI/.test(String(q.q || ''))) q.opts.forEach((o, j) => { if (j !== q.ans) parts.push(o); });
    else if (!/[＿_]/.test(String(q.q || ''))) parts.push(dung);
    add('mc' + (i + 1), 'mc', parts);
  });
  D.fill.forEach((q, i) => add('fill' + (i + 1), 'fill', [String(q.pre || '') + (q.ans || '') + String(q.post || '')]));
  D.sort.forEach((q, i) => add('sort' + (i + 1), 'sort', [q.ans]));
  (Array.isArray(D.listen) ? D.listen : []).forEach((g, i) => {
    const parts = [g.audio];
    (g.questions || []).forEach((q) => { const o = q.opts[q.ans]; if (coHan(o)) parts.push(o); });
    add('nghe' + (i + 1), 'nghe', parts);
  });
  D.tr.forEach((t, i) => add('dich' + (i + 1), 'dich', [t.zh]));
  D.trRev.forEach((t, i) => add('dichN' + (i + 1), 'dichN', [t.zh]));
  ((D.speak && D.speak.questions) || []).forEach((q, i) => add('noi' + (i + 1), 'noi', [q.q_zh, q.sample]));
  return ds;
}

// 2 cau cung khung, doi 1 cho? Phan chung (tien to + hau to) >= 3 chu va >= 60% cau dai hon, phan khac <= 3 chu.
// Phan khac co hu tu / tu nghi van (不 也 了 吗 谁 哪 …) = doi lap ngu phap co chu y (khang dinh/phu dinh, hoi/dap) -> khong tinh.
const HU = /[不没也都还很太吗呢了过着的得吧再又就才别谁哪几什怎]/;
function ganNhau(a, b) {
  if (a === b) return false;
  const L = Math.min(a.length, b.length), M = Math.max(a.length, b.length);
  if (L < 4) return false;
  let p = 0;
  while (p < L && a[p] === b[p]) p++;
  let s = 0;
  while (s < L - p && a[a.length - 1 - s] === b[b.length - 1 - s]) s++;
  const da = a.slice(p, a.length - s), db = b.slice(p, b.length - s);
  if (HU.test(da + db)) return false;
  if ((!da || !db) && L < 5) return false; // chen them vao cau qua ngan (我的老师 / 这是我的老师): cum tu vs cau, khong tinh
  return p + s >= 3 && (p + s) / M >= 0.6 && Math.max(da.length, db.length) <= 3;
}

function tuCuaBai(D) {
  const s = [];
  D.vocab.forEach((v) => { if (/riêng/i.test(v.pos || '')) return; (String(v.zh || '').match(/[㐀-鿿]+/g) || []).forEach((w) => s.push(w)); });
  return [...new Set(s)];
}

const arg = process.argv[2] && !/^-/.test(process.argv[2]) ? process.argv[2] : '1-15';
const [A, B] = arg.split('-').map(Number);
const chiTiet = process.argv.includes('-v');
const BAI = {};
for (let n = 1; n <= 15; n++) BAI[n] = napBai(n);
const MUC = {};
for (let n = 1; n <= 15; n++) MUC[n] = mucCuaBai(BAI[n]);
const daHoc = (n) => { const s = new Set(); for (let i = 1; i <= n; i++) BAI[i].vocab.forEach((v) => (String(v.zh || '').match(/[㐀-鿿]+/g) || []).forEach((w) => s.add(w))); return s; };

let TONG = { trung: 0, gan: 0, khoa: 0, nhieu: 0, cu: 0, ghep: 0, phu: 0, muc: 0, sach: 0 };
const bang = [];
for (let n = A; n <= (B || A); n++) {
  const D = BAI[n], ds = MUC[n];
  const choPhep = (a, b) => (CHO_PHEP[n] || []).some(([x, y]) => (x === a && y === b) || (x === b && y === a));
  const loi = { trung: [], gan: [], khoa: [], nhieu: [], cu: [], ghep: [], phu: [] };
  const dinh = new Set();
  // [TRUNG]
  const noi = {};
  ds.forEach((m) => m.cau.forEach((h) => { (noi[h] = noi[h] || []).push(m.id); }));
  Object.keys(noi).forEach((h) => {
    if (noi[h].length < 2 || choPhep(h, h)) return;
    loi.trung.push(h + ' ← ' + noi[h].join(', '));
    noi[h].forEach((id) => dinh.add(id));
  });
  // [GAN] — moi cap muc 1 lan
  for (let i = 0; i < ds.length; i++) for (let j = i + 1; j < ds.length; j++) {
    let hit = null;
    ds[i].cau.forEach((a) => ds[j].cau.forEach((b) => { if (!hit && ganNhau(a, b) && !choPhep(a, b)) hit = [a, b]; }));
    if (hit) { loi.gan.push(ds[i].id + ' 「' + hit[0] + '」 ~ ' + ds[j].id + ' 「' + hit[1] + '」'); dinh.add(ds[i].id); dinh.add(ds[j].id); }
  }
  // [BAI KHOA]
  const khoa = new Set();
  (D.dialog || []).forEach((d) => (d.lines || []).forEach((l) => cauTu(l.zh).forEach((h) => khoa.add(h))));
  khoa.forEach((h) => { if (noi[h] && noi[h].length >= 2) loi.khoa.push(h + ' ← ' + noi[h].join(', ')); });
  // [NHIEU]
  const boPA = {};
  D.mc.forEach((q, i) => { const k = q.opts.slice().sort().join('|'); (boPA[k] = boPA[k] || []).push('mc' + (i + 1)); });
  Object.keys(boPA).forEach((k) => { if (boPA[k].length > 1) loi.nhieu.push('cung bo phuong an [' + k.split('|').join(' / ') + '] ← ' + boPA[k].join(', ')); });
  D.mc.forEach((q, i) => {
    const dung = chiHan(q.opts[q.ans]);
    if (dung.length < 4 || /SAI/.test(String(q.q || ''))) return;
    D.mc.forEach((r, j) => { if (i !== j && r.opts.some((o) => chiHan(o) === dung)) loi.nhieu.push('dap an mc' + (i + 1) + ' 「' + dung + '」 la phuong an cua mc' + (j + 1)); });
  });
  // [CU]
  if (n > 1) {
    const truoc = {};
    for (let m = 1; m < n; m++) MUC[m].forEach((x) => x.cau.forEach((h) => { if (h.length >= 4 && !truoc[h]) truoc[h] = 'bai ' + m + ' ' + x.id; }));
    ds.forEach((x) => x.cau.forEach((h) => { if (truoc[h]) loi.cu.push(x.id + ' 「' + h + '」 = ' + truoc[h]); }));
  }
  // [GHEP]
  const dh = daHoc(n);
  const capSeen = {};
  D.match.forEach((p, i) => {
    const k = p.left + '+' + p.right;
    if (capSeen[k]) loi.ghep.push('cap trung ' + k + ' (match' + capSeen[k] + ', match' + (i + 1) + ')'); else capSeen[k] = i + 1;
    D.match.forEach((r, j) => {
      if (i === j || p.left === r.left || p.right === r.right) return;
      const w = chiHan(p.left + r.right);
      if (w && dh.has(w) && !D.match.some((x) => chiHan(x.left + x.right) === w)) loi.ghep.push('mo ho: ' + p.left + '(match' + (i + 1) + ') + ' + r.right + '(match' + (j + 1) + ') = ' + w + ' cung la tu da hoc');
    });
  });
  // [PHU] — tu cua bai xuat hien it nhat 1 lan trong phan luyen tap (mc tinh de + moi phuong an)
  const toan = [];
  ds.forEach((m) => toan.push(m.goc));
  D.mc.forEach((q) => toan.push(q.opts.join(' ')));
  D.match.forEach((p) => toan.push(String(p.left) + String(p.right)));
  const chuoi = toan.join(' ');
  tuCuaBai(D).forEach((w) => { if (chuoi.indexOf(w) < 0) loi.phu.push(w); });

  const nghe = (Array.isArray(D.listen) ? D.listen : []).length;
  const so = 'mc ' + D.mc.length + ' · fill ' + D.fill.length + ' · sort ' + D.sort.length + ' · nghe ' + nghe +
    ' · ghep ' + D.match.length + ' · dich ' + D.tr.length + '/' + D.trRev.length + ' · noi ' + ((D.speak && D.speak.questions) || []).length;
  const diem = Math.round(100 * (1 - dinh.size / ds.length));
  console.log('Bai ' + n + ': ' + so + ' → trung ' + loi.trung.length + ', gan ' + loi.gan.length + ', bai khoa ' + loi.khoa.length +
    ', phuong an ' + loi.nhieu.length + ', cu ' + loi.cu.length + ', ghep ' + loi.ghep.length + ', thieu tu ' + loi.phu.length + ' · diem ' + diem + '/100');
  const inRa = (ten, arr, luon) => { if (arr.length && (chiTiet || luon)) arr.forEach((l) => console.log('   [' + ten + '] ' + l)); };
  inRa('TRUNG', loi.trung, true); inRa('GAN', loi.gan, true); inRa('BAI KHOA', loi.khoa, chiTiet); inRa('NHIEU', loi.nhieu, true);
  inRa('CU', loi.cu, true); inRa('GHEP', loi.ghep, true);
  if (loi.phu.length) console.log('   [PHU] chua dung: ' + loi.phu.join(' '));
  Object.keys(loi).forEach((k) => { TONG[k] += loi[k].length; });
  TONG.muc += ds.length; TONG.sach += ds.length - dinh.size;
  bang.push(diem);
}
console.log('TONG: ' + TONG.muc + ' muc · trung ' + TONG.trung + ' · gan ' + TONG.gan + ' · bai khoa ' + TONG.khoa + ' · phuong an ' + TONG.nhieu +
  ' · cu ' + TONG.cu + ' · ghep ' + TONG.ghep + ' · thieu tu ' + TONG.phu + ' · DIEM ' + Math.round(100 * TONG.sach / TONG.muc) + '/100');
process.exitCode = TONG.trung || TONG.cu ? 1 : 0;
module.exports = { mucCuaBai, cauTu, ganNhau };
