/* Kiem tra quy tac cua co giao cho cau hoi nong trai: "dung voi bai hoc sinh hoc va bai duoc giao,
   tuyet doi khong ra cau hoi ma hoc sinh chua hoc".
   Gia lap 1 hoc sinh chi hoc bai 1 + bai 2 (mac dinh HSK 2 (3.0)), sinh nhieu bo thu thach chu Han
   va de ca moi bac, roi kiem tra MOI cau (va moi dap an nhieu cua cau tu vung) deu thuoc 2 bai do.
   Chay: node tools/thu-cau-nong-trai.js [cap] [bai,bai...]   vd: node tools/thu-cau-nong-trai.js hsk1 3,4 */
const path = require('path');
const Ktbc = require(path.join(__dirname, '..', 'nong-trai-ktbc.js'));

const cap = process.argv[2] || 'hsk2v3';
const so = (process.argv[3] || '1,2').split(',').map((x) => x.trim()).filter(Boolean);
const urls = so.map((n) => (cap === 'hsk2' ? '/lessons/bai-' + n + '.html' : '/lessons/' + cap + '-bai-' + n + '.html'));
const choPhep = new Set(urls);

// app / d gia: chi de nap module, khong mo route nao
const app = new Proxy({}, { get: () => () => {} });
const d = new Proxy({ DATA_DIR: path.join(__dirname, '..', 'data'), USE_DB: false, suKien: null }, {
  get: (t, k) => (k in t ? t[k] : () => {}),
});
const nt = require(path.join(__dirname, '..', 'nong-trai.js'))(app, d);
const { deChuHanKt, deCaKt } = nt._thuCau;

const ng = Ktbc.nguonBai(urls, cap);
const tu = ng.vocab.filter((v) => /^[㐀-鿿]{1,4}$/.test(v.zh));
const bo = { tu, sai: [], den: [], urls, cap, nguon: 'thu', chu: [...new Set(tu.map((v) => v.zh).join('').split(''))], coBai: tu.length >= 4 };
const tuSet = new Set(ng.vocab.map((v) => v.zh)), vnSet = new Set(ng.vocab.map((v) => v.vn));

let soCau = 0, loi = 0;
const theoKieu = {};
function bao(q, ly) { loi++; if (loi <= 15) console.log('  ✗', ly, JSON.stringify({ k: q.k, u: q.u, hoi: q.hoi, lua: q.lua }).slice(0, 240)); }
function kiem(q) {
  soCau++;
  theoKieu[q.k] = (theoKieu[q.k] || 0) + 1;
  if (!choPhep.has(q.u)) bao(q, 'bai nguon ngoai bo: ' + q.u);
  if (q.k === 'noi') q.c.trai.forEach((z) => { if (!tuSet.has(z)) bao(q, 'tu noi ngoai bo: ' + z); });
  // cau tu vung: moi lua chon la tu / nghia cua bo bai
  if ((q.k === 'kt' && q.zh && /^(Từ này nghĩa là gì|Chọn chữ Hán đúng nghĩa)/.test(q.c.lenh)) || q.k === 'nghe') {
    q.lua.forEach((o) => { if (!tuSet.has(o) && !vnSet.has(o)) bao(q, 'lua chon ngoai bo: ' + o); });
  }
  if ((q.k === 'nghe' || q.k === 'viet') && !tuSet.has(q.zh)) bao(q, 'tu ngoai bo: ' + q.zh);
}
for (let i = 0; i < 150; i++) {
  const de = deChuHanKt(bo, { nghe: true, viet: true });
  if (de) de.ds.forEach(kiem);
}
for (let t = 1; t <= 5; t++) for (let i = 0; i < 60; i++) {
  const de = deCaKt(bo, t, { nghe: true });
  if (de) de.ds.forEach(kiem);
}
console.log('Bai cho phep:', urls.join(', '), '| tu:', ng.vocab.length, '| trac nghiem bai:', ng.mcs.length, '| xep cau:', ng.sorts.length);
console.log('Da kiem', soCau, 'cau', JSON.stringify(theoKieu), '->', loi ? loi + ' LOI' : 'tat ca thuoc bai cho phep ✓');
// ---- Ban do phieu luu (nong-trai-phieuluu.js): cau moi vung dat cung chi tu bai cho phep ----
const { deVung, VUNG } = nt._thuCau;
const boDau = (p) => String(p || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ü/g, 'v').toLowerCase();
const pySet = new Set(ng.vocab.map((v) => v.py)), pyGoc = new Set(ng.vocab.map((v) => boDau(v.py)));
const htSet = new Set();
urls.forEach((u) => Ktbc.hoiThoaiBai(u).forEach((sc) => sc.lines.forEach((l) => htSet.add(l.zh))));
let soVung = 0;
const theoVung = {};
function kiemVung(vk, q) {
  soVung++;
  const kv = vk + ':' + (q.kv || q.k);
  theoVung[kv] = (theoVung[kv] || 0) + 1;
  if (!choPhep.has(q.u)) bao(q, vk + ' bai nguon ngoai bo: ' + q.u);
  const lo = JSON.stringify({ k: q.k, hoi: q.hoi, lua: q.lua });
  if (/"(dung|dap)"/.test(lo)) bao(q, vk + ' lo dap an cho client');
  if (q.k === 'noi') q.c.trai.forEach((z) => { if (!tuSet.has(z)) bao(q, 'tu noi ngoai bo: ' + z); });
  const lenh = (q.c && q.c.lenh) || '';
  if (/pinyin|thanh điệu/i.test(lenh)) {
    if (q.c.zh && !tuSet.has(q.c.zh)) bao(q, 'tu pinyin ngoai bo: ' + q.c.zh);
    q.lua.forEach((o) => { if (!pySet.has(o) && !pyGoc.has(boDau(o))) bao(q, 'pinyin ngoai bo: ' + o); });
  }
  if (/em đáp thế nào/.test(lenh)) { if (!htSet.has(q.c.zh)) bao(q, 'cau hoi thoai ngoai bo'); q.lua.forEach((o) => { if (!htSet.has(o)) bao(q, 'dap an hoi thoai ngoai bo: ' + o); }); }
  if (/đoạn hội thoại/.test(lenh)) q.c.tu.forEach((o) => { if (!htSet.has(o)) bao(q, 'cau xep hoi thoai ngoai bo: ' + o); });
  if (/^(Từ này nghĩa là gì|Chọn chữ Hán đúng nghĩa)/.test(lenh)) q.lua.forEach((o) => { if (!tuSet.has(o) && !vnSet.has(o)) bao(q, 'lua chon ngoai bo: ' + o); });
}
VUNG.forEach((v) => { for (let i = 0; i < 60; i++) deVung(bo, v.k, v.so, { nghe: i % 2 === 0 }).forEach((q) => kiemVung(v.k, q)); });
console.log('Ban do phieu luu: da kiem', soVung, 'cau', JSON.stringify(theoVung));
console.log('Ban do ->', loi ? loi + ' LOI (tong)' : 'tat ca thuoc bai cho phep ✓');
const r3 = VUNG.every((v) => deVung({ tu: [], sai: [], den: [], urls: [], cap, nguon: '', chu: [], coBai: false }, v.k, v.so, {}).length === 0);
console.log('Ban do, hoc sinh chua hoc bai nao:', r3 ? 'khong ra cau (dung) ✓' : 'VAN RA CAU ✗');
if (!r3) loi++;
// bo rong: khong duoc ra cau nao
const rong = { tu: [], sai: [], den: [], urls: [], cap, nguon: '', chu: [], coBai: false };
const r1 = deChuHanKt(rong, { nghe: true, viet: true }), r2 = deCaKt(rong, 3, {});
console.log('Hoc sinh chua hoc bai nao:', !r1 && !r2 ? 'khong ra cau (dung) ✓' : 'VAN RA CAU ✗');
process.exit(loi || r1 || r2 ? 1 : 0);
