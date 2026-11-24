// Bao tang nong trai 博物馆 (tinh nang them 2026-11-24).
// Album suu tap MOI THU em tung co tren nong trai, chia thanh cac phong trung bay 展厅:
// 农作物 nong san (ca cay quy 人参/雪莲), 突变 qua dot bien, 杂交 giong lai, 动物 vat nuoi + san pham, 鱼 ca o ho cau,
// 加工品 hang che bien + mon an, 宠物 thu cung + lenh da thuoc, 装饰 do trang tri doc quyen (TT[k].doc).
// Theo doi: f.bt = { k: 'YYYY-MM-DD' (ngay dau tien thay em co) | 'c' (da co tu truoc khi mo bao tang) }.
//  - quanSat(f) nhin trang thai (kho, tui, o, sap, f.dotBien, f.lai.biet, f.hc.bst, f.daNau, f.pet) va ghi khoa moi:
//    chay ngay truoc moi lan luu nong trai (moc h.truocGhi trong nong-trai.js), khi mo nong trai (vaoHook) va khi mo bao tang.
//  - Lan quan sat dau tien (chua co f.bt) = "backfill" tu du lieu san co -> danh dau 'c'.
// Cot moc (ty le 10/25/50/75/100% + hoan thanh tung phong) -> danh hieu 称号 hien canh ten nhan vat + thuong 1 lan
// (xu, do trang tri doc quyen cua bao tang dang ky vao h.TT). Nhan thuong idempotent: f.btx.m[k].
// Hoc: bam hien vat doc to ten; moi phong co "huong dan vien" 5 cau ve hien vat CUA EM (ten la tu vung nong trai),
// thieu thi bu cau tu bai em da hoc (h.phieuLuu.layCau); 1 lan / phong / ngay, 2 xu + 1 xp moi cau dung.
// Sang tham ban: xem bao tang cua ban (chi doc).
// Du lieu khac: f.btx = { m: {mocKey: ngay}, ch: mocKey (danh hieu dang deo), q: {phong: ngay HDV}, cq: luot HDV dang lam }
const Lai = require('./nong-trai-lai');
const XuongCat = require('./nong-trai-xuong').CAT;
let Pet = null;
try { Pet = require('./nong-trai-thucung'); } catch (e) { Pet = null; }

const SANH = [
  { k: 'cay', zh: '农作物', py: 'nóngzuòwù', vn: 'Nông sản', emo: '🌾' },
  { k: 'db', zh: '突变', py: 'tūbiàn', vn: 'Quả đột biến', emo: '🧬' },
  { k: 'lai', zh: '杂交', py: 'zájiāo', vn: 'Giống lai', emo: '🌱' },
  { k: 'con', zh: '动物', py: 'dòngwù', vn: 'Vật nuôi & sản phẩm', emo: '🐄' },
  { k: 'ca', zh: '鱼', py: 'yú', vn: 'Cá ở hồ câu', emo: '🐟' },
  { k: 'gc', zh: '加工品', py: 'jiāgōngpǐn', vn: 'Hàng chế biến & món ăn', emo: '🍞' },
  { k: 'pet', zh: '宠物', py: 'chǒngwù', vn: 'Thú cưng & lệnh đã thuộc', emo: '🐶' },
  { k: 'tt', zh: '装饰', py: 'zhuāngshì', vn: 'Đồ trang trí độc quyền', emo: '🏮' },
];
const DB_BAC = [
  { l: 1, zh: '巨型', py: 'jùxíng', vn: 'khổng lồ' },
  { l: 2, zh: '金色', py: 'jīnsè', vn: 'vàng kim' },
  { l: 3, zh: '彩虹', py: 'cǎihóng', vn: 'cầu vồng' },
];
// Do trang tri doc quyen cua bao tang (thuong cot moc) — hinh /images/farm/<k>.svg
const TT_BT = {
  'baotang-gui': { zh: '展柜', py: 'zhǎnguì', vn: 'Tủ trưng bày', lv: 1, doc: 1, dep: 22 },
  'baotang-guan': { zh: '博物馆', py: 'bówùguǎn', vn: 'Bảo tàng nông trại', lv: 1, doc: 1, dep: 60, w: 2 },
  'baotang-huashi': { zh: '恐龙化石', py: 'kǒnglóng huàshí', vn: 'Hóa thạch khủng long', lv: 1, doc: 1, dep: 45 },
  'baotang-diqiuyi': { zh: '地球仪', py: 'dìqiúyí', vn: 'Quả địa cầu cổ', lv: 1, doc: 1, dep: 70 },
};
// Cot moc: p = % tong so hien vat; danh hieu 称号 + thuong 1 lan
const MOC_PT = [
  { k: 'p10', p: 10, zh: '小小收藏家', py: 'xiǎoxiǎo shōucángjiā', vn: 'Nhà sưu tầm nhí', huy: 'baotang-huy-1', xu: 50 },
  { k: 'p25', p: 25, zh: '收藏家', py: 'shōucángjiā', vn: 'Nhà sưu tầm', huy: 'baotang-huy-2', xu: 150, tt: 'baotang-gui' },
  { k: 'p50', p: 50, zh: '博物学家', py: 'bówùxuéjiā', vn: 'Nhà vạn vật học', huy: 'baotang-huy-3', xu: 300, tt: 'baotang-guan' },
  { k: 'p75', p: 75, zh: '鉴赏家', py: 'jiànshǎngjiā', vn: 'Nhà thẩm định', huy: 'baotang-huy-4', xu: 500, tt: 'baotang-huashi' },
  { k: 'p100', p: 100, zh: '博物馆馆长', py: 'bówùguǎn guǎnzhǎng', vn: 'Giám đốc bảo tàng', huy: 'baotang-huy-5', xu: 1000, tt: 'baotang-diqiuyi' },
];
// Hoan thanh 1 phong: danh hieu rieng + xu = 40 + 4 x so hien vat cua phong
const MOC_SANH = {
  cay: { zh: '种植能手', py: 'zhòngzhí néngshǒu', vn: 'Cao thủ trồng trọt' },
  db: { zh: '突变猎人', py: 'tūbiàn lièrén', vn: 'Thợ săn đột biến' },
  lai: { zh: '育种专家', py: 'yùzhǒng zhuānjiā', vn: 'Chuyên gia lai giống' },
  con: { zh: '动物之友', py: 'dòngwù zhī yǒu', vn: 'Bạn của muôn loài' },
  ca: { zh: '钓鱼高手', py: 'diàoyú gāoshǒu', vn: 'Cao thủ câu cá' },
  gc: { zh: '能工巧匠', py: 'nénggōng qiǎojiàng', vn: 'Người thợ khéo tay' },
  pet: { zh: '宠物达人', py: 'chǒngwù dárén', vn: 'Chuyên gia thú cưng' },
  tt: { zh: '珍宝收藏家', py: 'zhēnbǎo shōucángjiā', vn: 'Nhà sưu tầm báu vật' },
};
const xuSanh = (n) => 40 + 4 * n;
const HDV_MIN = 3, HDV_SO = 5, HDV_XU = 2, HDV_XP = 1, HDV_HAN = 15 * 60000, SO_LUA = 4;

// Goi y cach co do trang tri doc quyen (theo tien to khoa)
const THE_MOC = { 'den-phuc': 10, 'cau-doi': 25, 'bang-chu': 50, 'bia-trang': 100 };
function goiTt(k, t) {
  if (THE_MOC[k]) return { n: 'Bộ sưu tập chữ Hán', g: 'Bộ sưu tập chữ Hán: đủ ' + THE_MOC[k] + ' thẻ chữ' };
  const p = [
    [/^lm-/, 'Công trình mốc', 'Công trình mốc: mua ở cửa hàng khi nông trại đạt cấp ' + t.lv],
    [/^bac-/, 'Danh hiệu & cúp', 'Biển danh hiệu: nhận khi nông trại lên bậc mới'],
    [/^cup-/, 'Danh hiệu & cúp', 'Lớp em đứng top 3 thị trấn trong tuần'],
    [/^hoicho-/, 'Danh hiệu & cúp', 'Đoạt giải ở Hội chợ nông sản tuần'],
    [/^cg-/, 'Danh hiệu & cúp', 'Đạt từ 8/10 câu ở Nhiệm vụ chuyên gia (cấp 40)'],
    [/^nha-kinh$/, 'Công trình mốc', 'Xây nhà kính ở bảng Cấp độ (cấp 35)'],
    [/^ct-/, 'Cùng cả lớp', 'Cùng cả lớp xây công trình chung ở thị trấn'],
    [/^ttl-/, 'Cùng cả lớp', 'Thử thách cả lớp 全班挑战: cả lớp học bài đạt chỉ tiêu tuần'],
    [/^pl-/, 'Phiêu lưu & câu chuyện', 'Qua trạm cuối một vùng đất trên Bản đồ phiêu lưu'],
    [/^tr-/, 'Phiêu lưu & câu chuyện', 'Hoàn thành một chương Câu chuyện làng Tre Xanh'],
    [/^lh-/, 'Lễ hội & mùa', 'Quà lễ hội cuối tuần'],
    [/^mua-/, 'Lễ hội & mùa', 'Thử thách bốn mùa 春夏秋冬 hằng tuần'],
    [/^noel-/, 'Lễ hội & mùa', 'Chỉ có trong mùa Noel (lịch Noel, người tuyết…)'],
  ].find((x) => x[0].test(k));
  return p ? { n: p[1], g: p[2] } : { n: 'Lễ hội & mùa', g: 'Phần thưởng đặc biệt từ sự kiện của nông trại' };
}
const TU_THE = (p) => (p === 'ngoi' ? 'ngoi' : p === 'nam' || p === 'ngu' ? 'ngu' : p === 'nhay' || p === 'xoay' ? 'nhay' : 'dung');

function tron(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// ---- Thuan (khong can may chu) — dung cho tools/thu-kinh-te-nong-trai.js ----
// so hien vat can de dat moc p%
const canMoc = (p, tong) => Math.max(1, Math.ceil(tong * p / 100));
// danh sach moc + trang thai dat / da nhan (dem: { tong, n, sanh: {k: {n, tong}} })
function dsMoc(dem, x) {
  const m = (x && x.m) || {};
  const ds = MOC_PT.map((c) => {
    const can = canMoc(c.p, dem.tong);
    return { k: c.k, loai: 'p', p: c.p, zh: c.zh, py: c.py, vn: c.vn, huy: c.huy, xu: c.xu, tt: c.tt || '', can, dat: dem.n >= can, da: m[c.k] || '' };
  });
  SANH.forEach((s) => {
    const d = dem.sanh[s.k], t = MOC_SANH[s.k];
    if (!d || !d.tong || !t) return;
    ds.push({ k: 'h-' + s.k, loai: 'h', sanh: s.k, zh: t.zh, py: t.py, vn: t.vn, huy: 'baotang-huy-sanh', xu: xuSanh(d.tong), tt: '', can: d.tong, dat: d.n >= d.tong, da: m['h-' + s.k] || '' });
  });
  return ds;
}
// nhan thuong 1 moc (idempotent): tra { xu, tt } hoac nem loi chuoi
function nhanMoc(f, k, dem, ngay) {
  const x = f.btx = f.btx || {};
  x.m = x.m || {};
  const c = dsMoc(dem, x).find((m) => m.k === k);
  if (!c) throw 'Không có cột mốc này.';
  if (x.m[k]) throw 'Em đã nhận thưởng cột mốc này rồi.';
  if (!c.dat) throw 'Em chưa đạt cột mốc này — sưu tập thêm nhé!';
  x.m[k] = ngay;
  f.xu = (f.xu || 0) + c.xu;
  if (c.tt) { f.tui = f.tui || {}; f.tui[c.tt] = (f.tui[c.tt] || 0) + 1; }
  // danh hieu moi nhan -> deo luon (em doi lai duoc)
  x.ch = k;
  return { xu: c.xu, tt: c.tt, moc: c };
}

function gan(app, d, h) {
  const loi = h.loi;
  const ngay = () => d.vnDayKey();
  Object.keys(TT_BT).forEach((k) => { if (!h.TT[k]) h.TT[k] = TT_BT[k]; });

  // ---- Danh muc hien vat (dung luoi: lan dau can thi moi dung, khi moi module da dang ky TT / SP) ----
  let CAT = null;
  function cat() {
    if (CAT) return CAT;
    const { CAY, SP, CON, TT, MON } = h, CA = h.CA || {}, CA_BAC = (h.CATALOG && h.CATALOG.CA_BAC) || [];
    const vat = (k, o, them) => Object.assign({ k, zh: o.zh, py: o.py, vn: o.vn }, them);
    const sanh = {};
    // 农作物
    const cay = Object.keys(CAY).filter((k) => !CAY[k].lai).sort((a, b) => (CAY[a].hiem || 0) - (CAY[b].hiem || 0) || CAY[a].lv - CAY[b].lv);
    sanh.cay = cay.map((k) => vat(k, CAY[k], CAY[k].hiem
      ? { hinh: 'sp-' + k, nhom: 'Cây quý 珍稀', goi: 'Hạt giống quý (vòng quay may mắn, hộp quà, bản đồ phiêu lưu) — gieo rồi thu hoạch' }
      : { hinh: 'sp-' + k, nhom: 'Cây trồng', goi: 'Mua hạt ở cửa hàng (cấp ' + CAY[k].lv + '), gieo rồi thu hoạch' }));
    // 突变
    const cayDb = cay.filter((k) => !CAY[k].hiem);
    sanh.db = [];
    DB_BAC.forEach((b) => cayDb.forEach((c) => {
      const k = 'db' + b.l + '-' + c;
      if (!SP[k]) return;
      sanh.db.push(vat(k, SP[k], { hinh: 'sp-' + k, nhom: b.zh + ' ' + b.vn,
        goi: 'Thu hoạch ' + CAY[c].vn.toLowerCase() + ' đôi khi ra quả ' + b.zh + ' (' + b.vn + ') — ô đã tưới cơ hội ×2' }));
    }));
    // 杂交
    sanh.lai = Lai.LAI.filter((l) => CAY[l.k]).map((l) => vat(l.k, l, { hinh: 'sp-' + l.k, nhom: 'Giống lai',
      goi: 'Lai giống (cấp ' + Lai.LV_MO + '): ' + l.goiY }));
    // 动物 + san pham
    const con = Object.keys(CON).sort((a, b) => CON[a].lv - CON[b].lv);
    sanh.con = con.map((k) => vat(k, CON[k], { hinh: k, nhom: 'Vật nuôi', goi: 'Mua ở cửa hàng (cấp ' + CON[k].lv + ')' }));
    const daSp = {};
    con.forEach((k) => {
      const s = CON[k].sp;
      if (!s || daSp[s] || !SP[s]) return;
      daSp[s] = 1;
      sanh.con.push(vat(s, SP[s], { hinh: 'sp-' + s, nhom: 'Sản phẩm', goi: 'Nuôi ' + CON[k].vn.toLowerCase() + ' rồi nhặt sản phẩm' }));
    });
    // 鱼
    sanh.ca = Object.keys(CA).sort((a, b) => CA[a].t - CA[b].t || CA[a].ban - CA[b].ban).map((k) => vat(k, CA[k], { hinh: 'sp-' + k, nhom: 'Cá',
      goi: 'Câu ở hồ câu cá (cấp 3) — bậc ' + CA[k].t + (CA_BAC[CA[k].t] ? ': ' + CA_BAC[CA[k].t].ten.toLowerCase() : '') }));
    // 加工品 + mon an
    const G = XuongCat.HANG_GC, X = XuongCat.XUONG;
    sanh.gc = Object.keys(G).filter((k) => SP[k]).map((k) => {
      const xk = Object.keys(X).find((x) => X[x].r.indexOf(k) >= 0), xg = X[xk] || {};
      return vat(k, G[k], { hinh: 'sp-' + k, nhom: 'Hàng chế biến', goi: 'Làm ở ' + (xg.vn || 'nhà máy') + ' ' + (xg.zh || '') + ' (cấp ' + Math.max(xg.lv || 5, G[k].lv || 0) + ')' });
    });
    Object.keys(MON || {}).filter((k) => SP[k]).forEach((k) => {
      const m = MON[k], can = Object.keys(m.can).map((x) => (SP[x] ? SP[x].vn.toLowerCase().replace(/\s*\(.*\)$/, '') : x)).join(', ');
      sanh.gc.push(vat(k, m, { hinh: 'sp-' + k, nhom: 'Món ăn', goi: 'Nấu ở bếp: ' + can + (m.lv ? ' (cấp ' + m.lv + ')' : '') }));
    });
    // 宠物 + lenh
    sanh.pet = [];
    if (Pet && Pet.LENH) {
      sanh.pet.push({ k: 'pet', zh: '宠物', py: 'chǒngwù', vn: 'Thú cưng', hinh: 'pet-cho-ngoi', nhom: 'Thú cưng', goi: 'Nhận nuôi thú cưng (cấp ' + Pet.LV_MO + ', Thêm → Thú cưng)' });
      Pet.LENH.forEach((l) => sanh.pet.push(vat('lenh-' + l.k, l, { hinh: 'pet-cho-' + TU_THE(l.dien), the: TU_THE(l.dien), khongHinh: 1, nhom: 'Lệnh đã thuộc',
        goi: 'Dạy thú cưng lệnh “' + l.vn + '” 3 buổi ở 3 ngày khác nhau' })));
    }
    // 装饰 doc quyen (khong tinh do cua bao tang)
    sanh.tt = Object.keys(TT).filter((k) => TT[k].doc && !TT_BT[k] && TT[k].zh).map((k) => {
      const g = goiTt(k, TT[k]);
      return vat(k, TT[k], { hinh: k, nhom: g.n, goi: g.g });
    });
    const NHOM_TT = ['Công trình mốc', 'Danh hiệu & cúp', 'Cùng cả lớp', 'Phiêu lưu & câu chuyện', 'Bộ sưu tập chữ Hán', 'Lễ hội & mùa'];
    sanh.tt.sort((a, b) => NHOM_TT.indexOf(a.nhom) - NHOM_TT.indexOf(b.nhom));
    const tat = new Set(), cua = {};
    SANH.forEach((s) => (sanh[s.k] || []).forEach((v) => { if (!tat.has(v.k)) { tat.add(v.k); cua[v.k] = v; } }));
    // khoa trung giua 2 phong (vd khong co) -> chi tinh 1 lan
    SANH.forEach((s) => { const thay = new Set(); sanh[s.k] = (sanh[s.k] || []).filter((v) => !thay.has(v.k) && thay.add(v.k)); });
    CAT = { sanh, tat, cua, tong: tat.size };
    return CAT;
  }

  // ---- Quan sat: ghi hien vat moi em dang co ----
  function quanSat(f) {
    if (!f || typeof f !== 'object') return false;
    const K = cat().tat, moi = !f.bt || typeof f.bt !== 'object';
    if (moi) f.bt = {};
    const bt = f.bt, hom = moi ? 'c' : ngay();
    let doi = moi;
    const them = (k) => { if (k && !bt[k] && K.has(k)) { bt[k] = hom; doi = true; } };
    const khoa = (o) => { if (o && typeof o === 'object') for (const k in o) if (o[k]) them(k); };
    for (const k in f.kho || {}) if (f.kho[k] > 0) them(k);
    for (const k in f.tui || {}) if (f.tui[k] > 0) them(k);
    if (Array.isArray(f.o)) f.o.forEach((o) => o && them(o.k));
    if (Array.isArray(f.sap)) f.sap.forEach((o) => o && them(o.k));
    khoa(f.dotBien); khoa(f.daNau);
    if (f.lai) khoa(f.lai.biet);
    if (f.hc) khoa(f.hc.bst);
    if (f.pet && f.pet.loai && Pet) {
      them('pet');
      const th = Pet._thu && Pet._thu.thuoc;
      if (th) Pet.LENH.forEach((l) => { try { if (th(f.pet, l.k)) them('lenh-' + l.k); } catch (e) { /* bo qua */ } });
    }
    return doi;
  }
  if (Array.isArray(h.truocGhi)) h.truocGhi.push(quanSat);
  h.vaoHook.push(async (user, f) => quanSat(f));

  function dem(f) {
    const c = cat(), bt = f.bt || {}, sanh = {};
    let n = 0;
    SANH.forEach((s) => {
      const ds = c.sanh[s.k] || [], co = ds.filter((v) => bt[v.k]).length;
      sanh[s.k] = { n: co, tong: ds.length };
      n += co;
    });
    return { n, tong: c.tong, sanh };
  }
  const tenMoc = (k) => {
    const p = MOC_PT.find((m) => m.k === k);
    if (p) return { k, zh: p.zh, py: p.py, vn: p.vn, huy: p.huy };
    const s = /^h-(\w+)$/.exec(k || ''), t = s && MOC_SANH[s[1]];
    return t ? { k, zh: t.zh, py: t.py, vn: t.vn, huy: 'baotang-huy-sanh' } : null;
  };
  const chCua = (f) => { const x = f.btx || {}; return x.ch && x.m && x.m[x.ch] ? tenMoc(x.ch) : null; };
  // hien vat em so huu (de ra cau hoi): ten day du + hinh
  function hienVat(f, v) {
    if (v.k === 'pet' && f.pet && Pet && Pet.LOAI[f.pet.loai]) {
      const l = Pet.LOAI[f.pet.loai];
      return Object.assign({}, v, { zh: l.zh, py: l.py, vn: l.vn, hinh: 'pet-' + f.pet.loai + '-ngoi' });
    }
    if (/^lenh-/.test(v.k) && f.pet && Pet && Pet.LOAI[f.pet.loai]) return Object.assign({}, v, { hinh: 'pet-' + f.pet.loai + '-' + v.the });
    return v;
  }

  // Trang thai gui client. rieng = bao tang cua em (co goi y + HDV + moc); khong = xem cua ban
  function trangThaiBt(f, rieng) {
    const c = cat(), bt = f.bt || {}, x = f.btx || {}, q = x.q || {}, hn = ngay(), dm = dem(f);
    const sanh = SANH.filter((s) => (c.sanh[s.k] || []).length).map((s) => {
      const ds = c.sanh[s.k].map((v0) => {
        const v = hienVat(f, v0);
        if (bt[v.k]) return { k: v.k, zh: v.zh, py: v.py, vn: v.vn, hinh: v.hinh, nhom: v.nhom, co: bt[v.k] };
        return rieng ? { k: v.k, hinh: v.hinh, nhom: v.nhom, goi: v.goi } : { k: v.k, hinh: v.hinh, nhom: v.nhom };
      });
      const o = { k: s.k, zh: s.zh, py: s.py, vn: s.vn, emo: s.emo, n: dm.sanh[s.k].n, tong: dm.sanh[s.k].tong, ds };
      if (rieng) o.hdv = { da: q[s.k] === hn, du: dm.sanh[s.k].n >= HDV_MIN };
      return o;
    });
    const out = { n: dm.n, tong: dm.tong, sanh, ch: chCua(f) };
    if (rieng) {
      out.moc = dsMoc(dm, x);
      out.hdv = { min: HDV_MIN, so: HDV_SO, xu: HDV_XU, xp: HDV_XP };
      const cq = x.cq;
      out.dang = cq && Date.now() - cq.bd < HDV_HAN ? { s: cq.s, i: cq.tl.length, so: cq.ds.length } : null;
    }
    return out;
  }
  // gon cho trang thai nong trai (st.kt.bt): tien do + danh hieu + so moc cho nhan
  h.ttThem.push((userId, f) => {
    const dm = dem(f);
    const nhan = dsMoc(dm, f.btx).filter((m) => m.dat && !m.da).length;
    return { bt: { n: dm.n, tong: dm.tong, ch: chCua(f), nhan } };
  });

  app.get('/api/farm/baotang', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (quanSat(f)) await h.ghi(me, f);
      return trangThaiBt(f, true);
    }));
  }));

  // Xem bao tang cua ban (chi doc; khong luu gi vao nong trai ban). gon=1: chi danh hieu (nhan ten)
  app.get('/api/farm/baotang/xem/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const id = String(req.params.id || '');
    await h.traLoi(res, (async () => {
      await h.cungLop(req.user.id, id);
      const f0 = await h.doc(id);
      const f = Object.assign({}, f0, { bt: f0.bt && typeof f0.bt === 'object' ? Object.assign({}, f0.bt) : undefined });
      quanSat(f);
      if (req.query.gon) return { ch: chCua(f) };
      const ten = (await d.loadUserNames())[id] || '';
      return Object.assign({ ten }, trangThaiBt(f, false));
    })());
  }));

  app.post('/api/farm/baotang/nhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, k = String((req.body || {}).m || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      quanSat(f);
      let r;
      try { r = nhanMoc(f, k, dem(f), ngay()); } catch (e) { if (typeof e === 'string') throw loi(e); throw e; }
      h.ghiNk(f, { l: 'bt', t: Date.now(), zh: r.moc.zh, vn: r.moc.vn });
      await h.ghi(me, f);
      const tt = r.tt ? h.TT[r.tt] : null;
      return { ok: true, xu: r.xu, tt: tt ? { k: r.tt, zh: tt.zh, py: tt.py, vn: tt.vn } : null, ch: tenMoc(k), st: await h.trangThai(me, f), bt: trangThaiBt(f, true) };
    }));
  }));

  app.post('/api/farm/baotang/chon', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, k = String((req.body || {}).m || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = f.btx = f.btx || {};
      if (k && !(x.m && x.m[k] && tenMoc(k))) throw loi('Em chưa có danh hiệu này.');
      x.ch = k;
      await h.ghi(me, f);
      return { ok: true, ch: chCua(f), st: await h.trangThai(me, f) };
    }));
  }));

  // ---- Huong dan vien 导游: 5 cau ve hien vat cua em ----
  // loai: hinh (xem hinh -> chon ten Han), nghia (Han + pinyin -> chon nghia), chu (nghia -> chon chu Han), tranh (chu Han -> chon hinh)
  function taoCauBt(v, i, kho, cuaEm) {
    const kieu = v.khongHinh ? ['nghia', 'chu'] : ['hinh', 'nghia', 'tranh', 'chu'];
    const loai = kieu[i % kieu.length];
    const truong = loai === 'nghia' ? 'vn' : loai === 'tranh' ? 'hinh' : 'zh';
    // dap an nhieu: uu tien hien vat em co cung phong, roi hien vat em co phong khac, roi hien vat cung phong
    const da = new Set([v[truong]]);
    const lua = [v[truong]];
    const nhan = (ds) => tron(ds.slice()).forEach((x) => {
      if (lua.length >= SO_LUA || !x[truong] || da.has(x[truong]) || x.zh === v.zh || x.vn === v.vn || (loai === 'tranh' && x.khongHinh)) return;
      da.add(x[truong]); lua.push(x[truong]);
    });
    nhan(cuaEm.filter((x) => x.sanh === v.sanh)); nhan(cuaEm); nhan(kho);
    tron(lua);
    const hoi = loai === 'hinh' ? { hinh: v.hinh } : loai === 'nghia' ? { zh: v.zh, py: v.py } : loai === 'chu' ? { vn: v.vn } : { zh: v.zh };
    return { k: 'bt', loai, hoi, lua, dap: lua.indexOf(v[truong]), zh: v.zh, py: v.py, vn: v.vn, hinh: v.hinh };
  }
  const choHs = (q) => (q.k === 'bt' ? { k: 'bt', loai: q.loai, hoi: q.hoi, lua: q.lua } : { k: q.k, hoi: q.hoi, lua: q.lua });

  app.post('/api/farm/baotang/hdv/bat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, sk = String((req.body || {}).s || '');
    const s = SANH.find((x) => x.k === sk);
    if (!s) return res.status(400).json({ error: 'Chọn một phòng trưng bày nhé.' });
    // thieu hien vat thi bu cau tu bai em da hoc (lay truoc khi khoa vi cham)
    const f0 = await h.doc(me);
    quanSat(f0);
    const coSanh = (cat().sanh[sk] || []).filter((v) => f0.bt[v.k]).length;
    let bu = [];
    if (coSanh >= HDV_MIN && coSanh < HDV_SO) {
      try { bu = await h.phieuLuu.layCau(req.user, 'thung', HDV_SO - coSanh, { nghe: false }); } catch (e) { bu = []; }
    }
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = f.btx = f.btx || {}, hn = ngay();
      quanSat(f);
      x.q = x.q || {};
      const c = cat(), bt = f.bt;
      const cuaEm = [];
      SANH.forEach((z) => (c.sanh[z.k] || []).forEach((v) => { if (bt[v.k]) cuaEm.push(Object.assign({ sanh: z.k }, hienVat(f, v))); }));
      const trong = cuaEm.filter((v) => v.sanh === sk);
      if (trong.length < HDV_MIN) throw loi('Sưu tập ít nhất ' + HDV_MIN + ' hiện vật trong phòng ' + s.zh + ' để hướng dẫn viên giới thiệu nhé.');
      if (x.q[sk] === hn) throw loi('Hôm nay hướng dẫn viên đã dẫn em tham quan phòng này rồi — mai quay lại nhé!');
      const kho = (c.sanh[sk] || []).map((v) => Object.assign({ sanh: sk }, hienVat(f, v)));
      const chon = tron(trong.slice()).slice(0, HDV_SO), lech = Math.floor(Math.random() * 4);
      const ds = chon.map((v, i) => taoCauBt(v, i + lech, kho, cuaEm)).filter((q) => q.lua.length >= 2 && q.dap >= 0);
      bu.slice(0, Math.max(0, HDV_SO - ds.length)).forEach((q) => ds.push(q));
      tron(ds);
      x.q[sk] = hn;
      x.cq = { s: sk, ds, tl: [], bd: Date.now() };
      await h.ghi(me, f);
      return { ok: true, s: sk, so: ds.length, ds: ds.map(choHs) };
    }));
  }));

  app.post('/api/farm/baotang/hdv/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = f.btx = f.btx || {}, r = x.cq;
      if (!r || Date.now() - r.bd > HDV_HAN) { delete x.cq; await h.ghi(me, f); throw loi('Lượt tham quan đã hết hạn — mai hướng dẫn viên lại dẫn em đi nhé.'); }
      const q = r.ds[r.tl.length];
      if (!q) throw loi('Lượt này đã xong.');
      const dung = h.chamCau(q, b);
      r.tl.push(dung);
      if (q.k !== 'bt') h.onCau(f, q, b, dung); // cau tu bai hoc -> on cach quang; ten hien vat thi khong
      const kq = Object.assign({ ok: true, dung }, h.ketQuaCau(q));
      if (q.k === 'bt') kq.hinh = q.hinh;
      if (r.tl.length < r.ds.length) { await h.ghi(me, f); return kq; }
      delete x.cq;
      const n = r.tl.filter(Boolean).length, xu = n * HDV_XU, xp = n * HDV_XP;
      f.xu += xu; f.xp += xp;
      kq.ket = { dung: n, so: r.ds.length, xu, xp, s: r.s };
      await h.ghi(me, f);
      kq.st = await h.trangThai(me, f);
      kq.bt = trangThaiBt(f, true);
      return kq;
    }));
  }));
}

module.exports = { gan, SANH, MOC_PT, MOC_SANH, TT_BT, HDV_SO, HDV_XU, HDV_XP, xuSanh, _thu: { canMoc, dsMoc, nhanMoc } };
