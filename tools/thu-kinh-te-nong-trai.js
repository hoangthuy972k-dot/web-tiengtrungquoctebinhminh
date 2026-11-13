/* Kiem tra vong quay moi cua nong trai (nong-trai.js quayO): ti le tung o qua nhieu lan quay tren may chu,
   gia tri ky vong (so voi vong quay cu), luat "chuot an san vat" va "×2 thu hoach".
   Chay: node tools/thu-kinh-te-nong-trai.js [so_lan_quay]   (mac dinh 200000) */
const path = require('path');
const { quayO, VQ_O, VQ_X2_O, SP, CAY, CON, TT, thuRuong, hangChuotAn } = require(path.join(__dirname, '..', 'nong-trai.js'))._thuVq;

const N = Number(process.argv[2]) || 200000;
let loi = 0;
const sai = (s) => { loi++; console.log('  ✗', s); };

// Nong trai mau cap 6: 10 o ruong, ga + bo, kho 40 mon
function traiMau(lv) {
  const o = [];
  for (let i = 0; i < 10; i++) o.push({ id: i + 1, k: 'o', x: i, y: 0 });
  o.push({ id: 20, k: 'ga', x: 0, y: 2 }, { id: 21, k: 'bo', x: 1, y: 2 });
  return { xu: 0, xp: 0, o, kho: { lua: 20, carot: 10, trung: 6, sua: 4 }, tui: {}, hat: {}, lv };
}
// Gia tri quy ra xu cua 1 phan qua (de so sanh vong quay cu / moi)
const lvMau = 6;
const cayMo = Object.keys(CAY).filter((k) => !CAY[k].hiem && CAY[k].lv <= lvMau);
const tb = (a) => a.reduce((s, x) => s + x, 0) / a.length;
const giaTt = (k) => (TT[k].xu || TT[k].sao || 0);
const GT = {
  hat: (n) => n * tb(cayMo.map((k) => CAY[k].gia)),
  sp: (n) => n * tb(cayMo.map((k) => SP[k].ban).concat([SP.trung.ban, SP.sua.ban])),
  tt: () => tb(Object.keys(TT).filter((k) => !TT[k].doc && TT[k].lv <= lvMau + 1).map(giaTt)),
  con: (lvToi) => tb(Object.keys(CON).filter((k) => CON[k].lv <= lvToi).map((k) => CON[k].sao)),
  hatquy: () => tb(Object.keys(CAY).filter((k) => CAY[k].hiem).map((k) => CAY[k].ban * 2)),
  // ×2: them 1 lan thu hoach cho toi da 8 o (trang trai mau 10 o -> 8 o x 2 nong san x gia trung binh)
  x2: () => Math.min(VQ_X2_O, 10) * 2 * tb(cayMo.map((k) => SP[k].ban)),
  chuot: () => -2 * tb(cayMo.map((k) => SP[k].ban)),
};

// ---- 1) Ti le thuc te tren may chu (quayO + Math.random) ----
const dem = VQ_O.map(() => 0);
const tong = VQ_O.reduce((s, o) => s + o.w, 0);
let giaTri = 0;
for (let i = 0; i < N; i++) {
  const f = traiMau(lvMau);
  const r = quayO(f, lvMau, Math.random);
  dem[r.i]++;
  const q = r.qua;
  if (q.loai === 'xu') giaTri += q.n;
  else if (q.loai === 'hat') giaTri += GT.hat(q.n);
  else if (q.loai === 'sp') giaTri += GT.sp(q.n);
  else if (q.loai === 'tt') giaTri += GT.tt();
  else if (q.loai === 'con') giaTri += GT.con(lvMau + 3);
  else if (q.loai === 'hatquy') giaTri += GT.hatquy();
  else if (q.loai === 'x2') giaTri += q.du ? 10 : GT.x2();
  else if (q.loai === 'chuot') giaTri -= (q.n || 0) * (q.k ? SP[q.k].ban : 0);
}
console.log('Vong quay moi — ' + N + ' lan quay (may chu chon o):');
VQ_O.forEach((o, i) => {
  const thuc = dem[i] / N * 100, ly = o.w / tong * 100;
  console.log('  ' + (o.ten + '                    ').slice(0, 22) + ' ly thuyet ' + ly.toFixed(1).padStart(5) + '%  thuc te ' + thuc.toFixed(2).padStart(6) + '%');
  if (Math.abs(thuc - ly) > 0.6) sai('lech ti le o ' + o.ten);
});
// luot "+1" lam moi lan quay dang gia hon: EV / (1 - p_luot)
const pLuot = VQ_O.filter((o) => o.loai === 'luot').reduce((s, o) => s + o.w, 0) / tong;
const evMoi = giaTri / N / (1 - pLuot);
// Vong quay cu (truoc 2026-11-13): 8 o
const CU = [{ l: 'xu', n: 5, w: 20 }, { l: 'sp', n: 3, w: 16 }, { l: 'xu', n: 10, w: 18 }, { l: 'tt', w: 10 }, { l: 'xu', n: 20, w: 12 }, { l: 'luot', w: 8 }, { l: 'xu', n: 50, w: 5 }, { l: 'con', w: 3 }];
const tongCu = CU.reduce((s, o) => s + o.w, 0);
const spCu = tb(Object.keys(SP).filter((k) => !SP[k].mon && !SP[k].ca && !SP[k].nl && !SP[k].gc && !SP[k].hiem && (!CAY[k] || CAY[k].lv <= lvMau + 1)).map((k) => SP[k].ban));
const evCu = CU.reduce((s, o) => s + o.w / tongCu * (o.l === 'xu' ? o.n : o.l === 'sp' ? 3 * spCu : o.l === 'tt' ? GT.tt() : o.l === 'con' ? GT.con(lvMau + 1) : 0), 0) / (1 - 8 / tongCu);
console.log('  Gia tri ky vong 1 luot (quy ra xu, nong trai mau cap ' + lvMau + '): cu ≈ ' + evCu.toFixed(1) + ' · moi ≈ ' + evMoi.toFixed(1) + ' (' + ((evMoi / evCu - 1) * 100).toFixed(0) + '%)');
console.log('  O xau (mat luot + chuot): ' + VQ_O.filter((o) => o.xau).reduce((s, o) => s + o.w, 0) + '% · o hiem (hat quy + thu hiem): ' + VQ_O.filter((o) => o.hiem).reduce((s, o) => s + o.w, 0) + '%');
if (!(evMoi > evCu)) sai('gia tri ky vong moi khong cao hon cu');

// ---- 2) Chuot an san vat ----
const iChuot = VQ_O.findIndex((o) => o.loai === 'chuot');
const epChuot = () => { const w0 = VQ_O[iChuot].w; let r = 0; for (let i = 0; i < iChuot; i++) r += VQ_O[i].w; return (r + w0 / 2) / tong; };
function quayChuot(kho, lan) {
  const kq = [];
  for (let i = 0; i < (lan || 1); i++) {
    const f = { xu: 0, o: [], kho: Object.assign({}, kho), tui: {}, hat: {} };
    let goi = 0;
    const r = quayO(f, 6, () => (goi++ === 0 ? epChuot() : Math.random()));
    if (r.qua.loai !== 'chuot') sai('khong trung o chuot');
    kq.push({ q: r.qua, f });
  }
  return kq;
}
// kho trong -> chuot doi bung
quayChuot({}, 50).forEach((x) => { if (!x.q.doi || x.q.n) sai('kho trong ma van mat hang'); });
// kho 9 mon -> 10% < 1 -> khong mat gi
quayChuot({ lua: 9 }, 50).forEach((x) => { if (x.q.n) sai('kho 9 mon ma mat ' + x.q.n); });
// kho chi co hang quy / hang mua cho / ca / mon an -> khong dung toi
quayChuot({ nhansam: 30, tuyetlien: 20, duong: 40, cachep: 10, com: 10, kongdan: 10 }, 200).forEach((x) => { if (x.q.n) sai('chuot an hang quy/khong duoc phep: ' + x.q.k); });
// kho 40 mon -> mat 1..3 (<= 4 = 10%), chi 1 loai, dung so luong
let soMat = [0, 0, 0, 0];
quayChuot({ lua: 20, carot: 10, trung: 6, sua: 4, nhansam: 5 }, 2000).forEach((x) => {
  const n = x.q.n || 0;
  soMat[n]++;
  if (n > 3 || n > Math.floor(45 * 0.1)) sai('mat qua nhieu: ' + n);
  if (n && !hangChuotAn(x.q.k)) sai('an mon khong duoc phep ' + x.q.k);
  if (n && x.f.kho[x.q.k] !== { lua: 20, carot: 10, trung: 6, sua: 4 }[x.q.k] - n && !(x.f.kho[x.q.k] === undefined)) sai('tru kho sai');
  if (x.f.kho.nhansam !== 5) sai('dung vao hang quy');
});
// kho 15 mon -> toi da 1 (10%)
quayChuot({ lua: 15 }, 300).forEach((x) => { if ((x.q.n || 0) > 1) sai('kho 15 mon ma mat ' + x.q.n); });
console.log('Chuot: kho trong / 9 mon / chi hang quy -> khong mat; kho 45 mon mat 1/2/3 mon: ' + soMat.slice(1).join(' / ') + ' lan (tren 2000); kho 15 mon toi da 1 ✓');

// ---- 3) ×2 thu hoach: toi da VQ_X2_O o, dung xong thi het ----
const f2 = { x2thu: 1, kho: {}, o: [] };
const ds = [];
for (let i = 0; i < 10; i++) ds.push({ k: 'o', c: 'lua', h: 0 });
const cong = (k, n) => { f2.kho[k] = (f2.kho[k] || 0) + n; };
const r2 = thuRuong(f2, ds, '', cong);
if (f2.kho.lua !== VQ_X2_O * 4 + (10 - VQ_X2_O) * 2 || f2.x2thu || r2.x2 !== VQ_X2_O) sai('×2 thu hoach sai: ' + JSON.stringify(f2));
const r3 = thuRuong(f2, [{ k: 'o', c: 'lua', h: 0 }], '', cong);
if (r3.x2) sai('×2 dung lai lan 2');
console.log('×2 thu hoach: 10 o -> ' + VQ_X2_O + ' o gap doi, lan sau binh thuong ✓');

console.log(loi ? loi + ' LOI ✗' : 'Tat ca dung ✓');
process.exit(loi ? 1 : 0);
