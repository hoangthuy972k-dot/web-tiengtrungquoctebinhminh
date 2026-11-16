// Mo phong thue nong trai (nong-trai-thue.js) tren cac nong trai mau — de chon hang so cong bang.
// Chay: node tools/thu-thue-nong-trai.js
// In bang: cap / kieu nong trai / tai san uoc tinh / muc mien / thue tai san / thue thu nhap / thue phai dong theo 3 muc hoc.
const path = require('path');
const NT = require(path.join(__dirname, '..', 'nong-trai.js'))._thuVq;
const Thue = require(path.join(__dirname, '..', 'nong-trai-thue.js'));
const cat = { SP: NT.SP, CON: NT.CON, TT: NT.TT, NHA: NT.NHA, DAT: NT.DAT };
const T = Thue.THUE;

// nong trai mau: o = danh sach vat dat tren dat (o ruong, vat nuoi, trang tri, nha, nha may)
function mk(p) {
  const o = [{ k: 'nha', n: p.nha || 1 }, { k: 'kho' }];
  for (let i = 0; i < (p.o || 8); i++) o.push({ k: 'o' });
  Object.keys(p.con || {}).forEach((k) => { for (let i = 0; i < p.con[k]; i++) o.push({ k }); });
  Object.keys(p.tt || {}).forEach((k) => { for (let i = 0; i < p.tt[k]; i++) o.push({ k }); });
  (p.xg || []).forEach((k) => o.push({ k: 'xg-' + k }));
  return { xu: p.xu, kho: p.kho || {}, o, tui: {}, dat: p.dat || 0, sap: [], can: [] };
}
const decorRe = (n) => ({ hoa: n, 'den-long': n, tung: n, 'cay-dao': n, gieng: Math.ceil(n / 3) });
const MAU = [
  { lv: 5, kieu: 'nghèo', tn: 150, f: mk({ xu: 40, o: 8, dat: 2, con: { ga: 2 }, kho: { lua: 10, trung: 3 } }) },
  { lv: 5, kieu: 'trung bình', tn: 500, f: mk({ xu: 300, o: 12, dat: 2, con: { ga: 3, vit: 2 }, kho: { carot: 10, ngo: 5, trung: 6 }, tt: { 'hoa-do': 4, ghe: 2 } }) },
  { lv: 5, kieu: 'giàu', tn: 1200, f: mk({ xu: 2500, o: 14, dat: 3, nha: 2, con: { ga: 6, vit: 4, bo: 2 }, kho: { ngo: 20, caibap: 10, sua: 5 }, tt: { 'hoa-do': 8, 'den-long': 4, 'ao-ca': 1 } }) },
  { lv: 15, kieu: 'nghèo', tn: 400, f: mk({ xu: 200, o: 20, dat: 4, nha: 2, con: { ga: 4, vit: 2, bo: 2 }, kho: { ngo: 10, trung: 5 } }) },
  { lv: 15, kieu: 'trung bình', tn: 1500, f: mk({ xu: 1500, o: 30, dat: 5, nha: 3, con: { ga: 6, vit: 4, bo: 3, cuu: 2, heo: 1 }, kho: { dautay: 15, bido: 8, sua: 10, len: 4 }, tt: Object.assign(decorRe(4), { 'ao-ca': 1, 'coi-xay': 1 }), xg: ['bot', 'banh'] }) },
  { lv: 15, kieu: 'giàu', tn: 4000, f: mk({ xu: 8000, o: 36, dat: 6, nha: 3, con: { ga: 6, vit: 6, bo: 6, cuu: 4, ong: 4, heo: 4, sutu: 2 }, kho: { bido: 40, duahau: 20, mat: 15, songlu: 10 }, tt: Object.assign(decorRe(10), { dinh: 2, cong: 1, 'ao-sen': 2, 'su-tu-da': 2 }), xg: ['bot', 'banh', 'sua', 'ep'] }) },
  { lv: 30, kieu: 'nghèo', tn: 600, f: mk({ xu: 600, o: 30, dat: 5, nha: 3, con: { ga: 6, vit: 4, bo: 4, heo: 2 }, kho: { bido: 10, sua: 10 }, tt: decorRe(4), xg: ['bot'] }) },
  { lv: 30, kieu: 'trung bình', tn: 2500, f: mk({ xu: 5000, o: 40, dat: 7, nha: 3, con: { ga: 6, vit: 6, bo: 6, cuu: 6, ong: 4, heo: 4, sutu: 2, ho: 2 }, kho: { nho: 30, duahau: 20, songlu: 10, menpiao: 5 }, tt: Object.assign(decorRe(10), { cong: 2, 'ao-sen': 2, 'cau-son': 1, bonsai: 2 }), xg: ['bot', 'banh', 'sua', 'ep'] }) },
  { lv: 30, kieu: 'giàu', tn: 7000, f: mk({ xu: 25000, o: 40, dat: 9, nha: 3, con: { ga: 6, vit: 6, bo: 6, cuu: 6, ong: 6, heo: 6, sutu: 4, ho: 4, khunglong: 3, gautruc: 1 }, kho: { nho: 80, songlu: 30, menpiao: 20, kongdan: 10 }, tt: Object.assign(decorRe(16), { cong: 3, 'ao-sen': 4, 'cau-son': 3, bonsai: 4, 'cot-rong': 2, 'cung-dien': 1 }), xg: ['bot', 'banh', 'sua', 'ep'] }) },
  { lv: 44, kieu: 'trung bình', tn: 3500, f: mk({ xu: 9000, o: 40, dat: 8, nha: 3, con: { ga: 6, vit: 6, bo: 6, cuu: 6, ong: 6, heo: 6, sutu: 3, ho: 3, khunglong: 2, gautruc: 1, can: 2 }, kho: { cha: 20, nuomi: 20, menpiao: 10, kongdan: 6 }, tt: Object.assign(decorRe(14), { cong: 3, 'ao-sen': 3, 'cau-son': 2, bonsai: 3, 'cot-rong': 2, 'cung-dien': 1, meihua: 2 }), xg: ['bot', 'banh', 'sua', 'ep', 'cha'] }) },
  // nong trai rat giau co giao gui: cap 44, diem dep ~2560, dat lon nhat
  { lv: 44, kieu: 'giàu (như ảnh)', tn: 9000, f: mk({ xu: 30000, o: 40, dat: 9, nha: 3, con: { ga: 6, vit: 6, bo: 6, cuu: 6, ong: 6, heo: 6, sutu: 6, ho: 6, khunglong: 6, gautruc: 4, can: 6 }, kho: { lizhi: 40, zhusun: 40, kongdan: 30, gaubong: 15, canjian: 20 }, tt: Object.assign(decorRe(30), { cong: 6, 'ao-sen': 6, 'cau-son': 6, bonsai: 6, 'cot-rong': 5, 'cung-dien': 3, meihua: 4 }), xg: ['bot', 'banh', 'sua', 'ep', 'cha', 'si'] }) },
  { lv: 60, kieu: 'trung bình', tn: 5000, f: mk({ xu: 15000, o: 40, dat: 9, nha: 3, con: { ga: 6, bo: 6, heo: 6, sutu: 4, ho: 4, khunglong: 4, gautruc: 2, can: 4, maoniu: 2 }, kho: { lianou: 30, lizhi: 30, kongdan: 15, maoniunai: 10 }, tt: Object.assign(decorRe(20), { 'cung-dien': 2, 'cot-rong': 3, jinlichi: 1, fengzheng: 2 }), xg: ['bot', 'banh', 'sua', 'ep', 'cha', 'si', 'gao'] }) },
  { lv: 60, kieu: 'giàu', tn: 14000, f: mk({ xu: 70000, o: 40, dat: 9, nha: 3, con: { ga: 6, vit: 6, bo: 6, cuu: 6, ong: 6, heo: 6, sutu: 6, ho: 6, khunglong: 6, gautruc: 6, can: 6, maoniu: 6 }, kho: { lianou: 80, lizhi: 80, kongdan: 40, gaubong: 30, maoniunai: 40 }, tt: Object.assign(decorRe(40), { 'cung-dien': 6, 'cot-rong': 6, jinlichi: 4, fengzheng: 6, meihua: 6 }), xg: ['bot', 'banh', 'sua', 'ep', 'cha', 'si', 'gao'] }) },
];
const HOC = [
  { ten: 'không học', ngay20: 0, ngayOn: 0 },
  { ten: '3 ngày', ngay20: 3, ngayOn: 0 },
  { ten: 'chăm (5 ngày+ôn)', ngay20: 5, ngayOn: 4 },
];
const pad = (s, n) => String(s).padStart(n);
const padR = (s, n) => String(s).padEnd(n);
console.log('Hằng số: miễn thuế tài sản ' + T.MIEN_CO_BAN + ' + ' + T.MIEN_MOI_CAP + '×cấp; bậc ' + T.BAC_TS.map((b) => (b[0] === Infinity ? '∞' : b[0]) + '@' + b[1] * 100 + '%').join(', ') +
  '; thu nhập miễn ' + T.MIEN_TN + ', bậc ' + T.BAC_TN.map((b) => (b[0] === Infinity ? '∞' : b[0]) + '@' + b[1] * 100 + '%').join(', ') +
  '; hàng ×' + T.HE_HANG + ', tài sản cố định ×' + T.HE_TAI_SAN + '; trần ' + T.TRAN * 100 + '% xu; dưới ' + T.TOI_THIEU + ' xu miễn; cấp < ' + T.LV + ' không đóng.\n');
console.log(padR('Cấp/kiểu', 22) + pad('xu', 7) + pad('hàng', 7) + pad('cố định', 8) + pad('tài sản', 8) + pad('miễn', 7) + pad('TN tuần', 8) + pad('thuế TS', 8) + pad('thuế TN', 8) + pad('gộp', 6) + ' | ' + HOC.map((x) => pad(x.ten, 17)).join('') + pad('%xu*', 7));
MAU.forEach((m) => {
  const ts = Thue.taiSan(m.f, cat);
  const ra = HOC.map((h) => Thue.tinhThue({ lv: m.lv, ts: ts.tong, tn: m.tn, xu: m.f.xu, ngay20: h.ngay20, ngayOn: h.ngayOn }));
  const b0 = ra[0];
  console.log(padR(m.lv + ' ' + m.kieu, 22) + pad(ts.xu, 7) + pad(ts.hang, 7) + pad(ts.co, 8) + pad(ts.tong, 8) + pad(b0 ? b0.mien : '-', 7) + pad(m.tn, 8) +
    pad(b0 ? b0.tTs : '-', 8) + pad(b0 ? b0.tTn : '-', 8) + pad(b0 ? b0.gop : '-', 6) + ' | ' +
    ra.map((b) => pad(b ? b.thue + (b.catTran ? '(trần)' : '') : 'không thuế', 17)).join('') + pad(b0 && m.f.xu ? (b0.thue / m.f.xu * 100).toFixed(1) + '%' : '-', 7));
});
console.log('\n* %xu = thuế khi không học / số xu đang có.');
// kiem tra luat cung
let loi = 0;
const kiem = (dk, msg) => { if (!dk) { loi++; console.log('LỖI: ' + msg); } };
kiem(Thue.tinhThue({ lv: 9, ts: 1e9, tn: 1e9, xu: 1e9 }) === null, 'cấp 9 phải không có thuế');
const b = Thue.tinhThue({ lv: 50, ts: 1e7, tn: 1e6, xu: 1000 });
kiem(b.thue <= 100, 'trần 10% xu');
kiem(Thue.tinhThue({ lv: 50, ts: 1e7, tn: 1e6, xu: 0 }).thue === 0, 'không xu thì không thuế');
kiem(Thue.tinhThue({ lv: 50, ts: 1e7, tn: 1e6, xu: 49 }).thue === 0, 'thuế < 5 xu được miễn');
const k0 = Thue.tinhThue({ lv: 40, ts: 60000, tn: 9000, xu: 1e6, ngay20: 0 }), k7 = Thue.tinhThue({ lv: 40, ts: 60000, tn: 9000, xu: 1e6, ngay20: 7, ngayOn: 7 });
kiem(k7.giam === 0.7 && k7.thue < k0.thue, 'giảm tối đa 70% khi học đủ');
kiem(Thue.tinhThue({ lv: 40, ts: 60000, tn: 9000, xu: 1e6, ngay20: 9 }).giamNgay === 0.5, 'giảm theo ngày tối đa 50%');
console.log(loi ? '\n' + loi + ' lỗi' : '\nKiểm tra luật: OK (cấp < 10, trần 10%, không âm, miễn < 5 xu, giảm tối đa 70%)');
process.exitCode = loi ? 1 : 0;
