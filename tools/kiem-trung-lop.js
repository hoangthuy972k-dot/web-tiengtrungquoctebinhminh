/* Kiem TRUNG CAU — kho cau Che do lop hoc (/lop): public/js/lop-<cap>.js (sinh boi tools/build-lop.js).
   Yeu cau co giao: "tat ca cac cau luyen tap deu ra soat khong bi trung cau nao ca tren phan che do lop hoc".
   Moi cap, trong mot bai va giua cac bai cung cap, bao cao:
     [TRUNG]    cau A/B/C trung hẳn: cung de (chi tinh chu Han, pre＿post) + cung dap an
                (cau tu vung «我» nghia la gi? / «tôi» — chu Han la gi? tinh theo tu duoc hoi);
     [HAI NGUON] cung mot cau (cau day du sau khi dien dap an) o 2 muc khac nguon (bai/np/hk/tu/dich/noi/sbt/nguphap)
                hoac khac cho trong — hoc sinh gap lai cung cau;
     [GAN]      2 cau cung khung, chi doi 1 cho (chi bao, khong sua — thuong la doi chieu co chu y);
     [PA]       phuong an trung nhau trong cung mot cau (sau khi bo khoang trang);
     [XEP]      cau xep cung dap an (trong bai / giua bai); xep trung voi cau A/B/C day du;
     [DS]       cau dung/sai trung cau;
     [TU]       tu vung (vocabData) trung trong mot bai / lap lai o bai khac cung cap.
   Chay: node tools/kiem-trung-lop.js              (moi cap)
         node tools/kiem-trung-lop.js hsk1v3 -v    (mot cap, in het vi du)
   Thoat ma 1 neu con [TRUNG] / [XEP] trung hẳn / [DS] trung / [PA]. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const W = path.join(__dirname, '..', 'public');

function chay(code, extra) {
  const c = { window: {}, console: { log() {}, warn() {}, error() {} } };
  c.window.window = c.window;
  vm.createContext(c);
  try { vm.runInContext(code + (extra || ''), c, { timeout: 5000 }); } catch (e) { /* bo qua */ }
  return c.window;
}
const doc = (f) => { try { return fs.readFileSync(path.join(W, f), 'utf8'); } catch (e) { return ''; } };
const han = (s) => (String(s || '').match(/[㐀-鿿0-9]/g) || []).join('');
const chiHan = (s) => (String(s || '').match(/[㐀-鿿]/g) || []).join('');

/* Khoa cua mot cau A/B/C — giong khoaMc trong tools/build-lop.js */
function khoaMc(m) {
  const dung = String(m.options[m.answer] || '').trim();
  if (m.src === 'tu') {
    // cung tu + cung nghia (hoi xuoi «我» nghia la gi? hay nguoc «tôi» — chu Han la gi? deu la mot cau)
    const g = /^«([^»]+)»/.exec(m.pre || '');
    const xuoi = g && /[㐀-鿿]/.test(g[1]);
    return 'tu:' + (xuoi ? g[1] : dung) + '|' + (xuoi ? dung : (g ? g[1] : ''));
  }
  if (m.noBlank) {
    const hp = han(m.pre);
    // de tieng Viet (dich cau): noi dung = cau tieng Trung dap an
    if (!han(dung)) return 'v:' + String(m.pre || '').trim() + '|' + dung; // de + dap an tieng Viet
    return hp ? 'q:' + hp + '|' + han(dung) : 'zh:' + han(dung);
  }
  return 'b:' + han(m.pre) + '＿' + han(m.post) + '|' + (han(dung) || dung);
}
// Cau day du (sau khi dien dap an) — de bat cung cau khac cho trong / khac nguon
function cauDu(m) {
  const dung = String(m.options[m.answer] || '');
  if (m.src === 'tu') return '';
  if (m.noBlank) return han(m.pre) ? '' : han(dung);
  return han(String(m.pre || '') + dung + String(m.post || ''));
}

// Cau dung/sai: giu dau cau (co cau sai chi vi dau cau: 不要看手机，了。), chi bo khoang trang, dau nua -> dau toan
function khoaDs(s) { return String(s || '').replace(/\s+/g, '').replace(/,/g, '，').replace(/\?/g, '？').replace(/!/g, '！').replace(/;/g, '；').replace(/:/g, '：'); }
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
  if ((!da || !db) && L < 5) return false;
  return p + s >= 3 && (p + s) / M >= 0.6 && Math.max(da.length, db.length) <= 3;
}

const APP = chay(doc('js/data.js'), ';window.A=APP_DATA;').A;
function vocabBai(url) {
  const w = chay(doc(url.replace('/lessons/', 'js/').replace('.html', '-data.js')), ';window.V=typeof vocabData!=="undefined"?vocabData:null;');
  return (w.V || []).filter((v) => v && v.zh);
}

const args = process.argv.slice(2);
const chiTiet = args.includes('-v');
// --dir <thu muc>: doc lop-<cap>.js o thu muc khac (vd ban sao truoc khi dung lai) de so truoc / sau
const iDir = args.indexOf('--dir');
const DIR = iDir >= 0 ? args[iDir + 1] : path.join(W, 'js');
const chi = args.find((a, i) => !/^-/.test(a) && (iDir < 0 || i !== iDir + 1));
const caps = fs.readdirSync(DIR).map((f) => (/^lop-([a-z0-9]+)\.js$/.exec(f) || [])[1])
  .filter((c) => c && APP.lessons[c] && (!chi || c === chi));

let loiNang = 0;
const tongBang = [];
caps.forEach((cap) => {
  const D = (chay(fs.readFileSync(path.join(DIR, 'lop-' + cap + '.js'), 'utf8')).LOP_DATA || {})[cap];
  if (!Array.isArray(D)) return;
  const R = { trungTrong: [], trungGiua: [], haiNguon: [], gan: [], pa: [], xepTrong: [], xepGiua: [], xepMc: [], ds: [], tuTrong: [], tuGiua: [] };
  const mcK = {}, duK = {}, sK = {}, jK = {};
  let soMc = 0, soS = 0, soJ = 0;
  D.forEach((L) => {
    (L.mcs || []).forEach((m, i) => {
      soMc++;
      const id = 'b' + L.n + '#' + i + '(' + (m.src || 'nguphap') + ')';
      const k = khoaMc(m);
      (mcK[k] = mcK[k] || []).push({ id, n: L.n, m });
      const c = cauDu(m);
      if (c.length >= 3) (duK[c] = duK[c] || []).push({ id, n: L.n, m, k });
      const op = (m.options || []).map((o) => String(o).replace(/\s+/g, ''));
      if (new Set(op).size !== op.length) R.pa.push(id + ' ' + JSON.stringify(m.options) + ' ← ' + (m.pre || '') + '＿' + (m.post || ''));
    });
    (L.sorts || []).forEach((s, i) => {
      soS++;
      const k = han(s.answer);
      (sK[k] = sK[k] || []).push({ id: 'b' + L.n + '#' + i + '(' + (s.src || 'nguphap') + ')', n: L.n, s });
    });
    (L.judges || []).forEach((j, i) => {
      soJ++;
      const k = khoaDs(j.sentence);
      (jK[k] = jK[k] || []).push({ id: 'b' + L.n + '#' + i, n: L.n, j });
    });
  });
  const moTa = (x) => (x.m.noBlank ? x.m.pre : (x.m.pre || '') + '＿' + (x.m.post || '')) + ' → ' + x.m.options[x.m.answer];
  Object.keys(mcK).forEach((k) => {
    const g = mcK[k];
    if (g.length < 2) return;
    const baiKhac = new Set(g.map((x) => x.n)).size > 1;
    (baiKhac ? R.trungGiua : R.trungTrong).push(moTa(g[0]) + '  ← ' + g.map((x) => x.id).join(', '));
  });
  Object.keys(duK).forEach((c) => {
    const g = duK[c];
    const khoa = new Set(g.map((x) => x.k));
    if (khoa.size < 2) return; // cung khoa -> da tinh o [TRUNG]
    R.haiNguon.push(c + '  ← ' + g.map((x) => x.id + ' 「' + moTa(x) + '」').join(' | '));
  });
  // [GAN] chi trong cung bai (giua bai qua nhieu, thuong la khung ngu phap)
  D.forEach((L) => {
    const cs = [];
    (L.mcs || []).forEach((m, i) => { const c = cauDu(m); if (c.length >= 4) cs.push([c, 'b' + L.n + '#' + i + '(' + (m.src || 'nguphap') + ')']); });
    (L.sorts || []).forEach((s, i) => { const c = han(s.answer); if (c.length >= 4) cs.push([c, 'b' + L.n + ' xep#' + i]); });
    for (let a = 0; a < cs.length; a++) for (let b = a + 1; b < cs.length; b++) {
      if (ganNhau(cs[a][0], cs[b][0])) R.gan.push(cs[a][1] + ' 「' + cs[a][0] + '」 ~ ' + cs[b][1] + ' 「' + cs[b][0] + '」');
    }
  });
  Object.keys(sK).forEach((k) => {
    const g = sK[k];
    if (g.length >= 2) (new Set(g.map((x) => x.n)).size > 1 ? R.xepGiua : R.xepTrong).push(g[0].s.answer + '  ← ' + g.map((x) => x.id).join(', '));
    if (duK[k]) R.xepMc.push(g[0].s.answer + '  ← xep ' + g.map((x) => x.id).join(',') + ' = A/B/C ' + duK[k].map((x) => x.id).join(','));
  });
  Object.keys(jK).forEach((k) => {
    if (jK[k].length < 2) return;
    const nguoc = new Set(jK[k].map((x) => !!x.j.isCorrect)).size > 1;
    R.ds.push(jK[k][0].j.sentence + (nguoc ? ' (VUA DUNG VUA SAI)' : '') + '  ← ' + jK[k].map((x) => x.id).join(', '));
  });
  // tu vung
  const tuO = {};
  (APP.lessons[cap] || []).forEach((L) => {
    const thay = {};
    vocabBai(L.fullPageUrl).forEach((v) => {
      const zh = String(v.zh).trim();
      if (thay[zh]) { R.tuTrong.push('bai ' + L.number + ': ' + zh); return; }
      thay[zh] = 1;
      (tuO[zh] = tuO[zh] || []).push(L.number);
    });
  });
  Object.keys(tuO).forEach((zh) => { if (tuO[zh].length > 1) R.tuGiua.push(zh + ' (bai ' + tuO[zh].join(', ') + ')'); });

  const so = (a) => a.length;
  const nang = so(R.trungTrong) + so(R.trungGiua) + so(R.pa) + so(R.xepTrong) + so(R.xepGiua) + so(R.ds);
  loiNang += nang;
  tongBang.push([cap, soMc, soS, soJ, so(R.trungTrong), so(R.trungGiua), so(R.haiNguon), so(R.gan), so(R.pa), so(R.xepTrong) + so(R.xepGiua), so(R.xepMc), so(R.ds), so(R.tuTrong), so(R.tuGiua)]);
  console.log('== ' + cap + ': ' + D.length + ' bai · ' + soMc + ' A/B/C · ' + soS + ' xep · ' + soJ + ' dung/sai');
  console.log('   trung hẳn trong bai ' + so(R.trungTrong) + ' · giua bai ' + so(R.trungGiua) + ' · cung cau khac nguon/cho trong ' + so(R.haiNguon) +
    ' · gan (cung khung) ' + so(R.gan) + ' · phuong an trung ' + so(R.pa) + ' · xep trung ' + (so(R.xepTrong) + so(R.xepGiua)) +
    ' · xep = A/B/C ' + so(R.xepMc) + ' · dung/sai trung ' + so(R.ds) + ' · tu trung trong bai ' + so(R.tuTrong) + ' · tu lap o bai khac ' + so(R.tuGiua));
  const inRa = (ten, arr, n) => { if (!arr.length) return; arr.slice(0, chiTiet ? arr.length : n).forEach((l) => console.log('   [' + ten + '] ' + l)); if (!chiTiet && arr.length > n) console.log('   [' + ten + '] … +' + (arr.length - n)); };
  inRa('TRUNG trong bai', R.trungTrong, 4); inRa('TRUNG giua bai', R.trungGiua, 4); inRa('HAI NGUON', R.haiNguon, 3);
  inRa('GAN', R.gan, 2); inRa('PA', R.pa, 4); inRa('XEP', R.xepTrong.concat(R.xepGiua), 4); inRa('XEP=ABC', R.xepMc, 2);
  inRa('DS', R.ds, 3); inRa('TU trong bai', R.tuTrong, 4); inRa('TU giua bai', R.tuGiua, 3);
});
console.log('\ncap      A/B/C  xep  d/s | trung:trong giua | 2nguon  gan  PA  xep  xep=ABC  d/s | tu:trong giua');
tongBang.forEach((r) => console.log(r[0].padEnd(8) + String(r[1]).padStart(6) + String(r[2]).padStart(5) + String(r[3]).padStart(5) + ' |' +
  String(r[4]).padStart(11) + String(r[5]).padStart(5) + ' |' + String(r[6]).padStart(7) + String(r[7]).padStart(5) + String(r[8]).padStart(4) +
  String(r[9]).padStart(5) + String(r[10]).padStart(9) + String(r[11]).padStart(5) + ' |' + String(r[12]).padStart(9) + String(r[13]).padStart(6)));
process.exitCode = loiNang ? 1 : 0;
