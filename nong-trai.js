// Nong trai cua em (/nong-trai): moi hoc sinh co 1 nong trai luu tren may chu.
// - Sao hoc tap (bang stars) la tien chinh: mua vat nuoi, do trang tri, mo rong dat.
//   Tieu sao KHONG tru vao bang stars (bang xep hang giu nguyen) — nong trai ghi rieng
//   so sao da tieu (saoTieu); so du = tong sao - saoTieu.
// - Xu kiem tu ban nong san / don hang / qua diem danh: mua hat giong, hang rao...
// - May chu giu gia, thoi gian lon cua cay/vat nuoi va vi tri — client chi gui hanh dong.
// Cau hoi on tu (cho an, tuoi nuoc) chay o client: phan thuong chi la xu/nong san,
// khong bao gio ra sao, nen khong co gi de gian lan.
const path = require('path');

const PHUT = 60000;

const CAY = {
  lua: { zh: '水稻', py: 'shuǐdào', vn: 'Lúa', lv: 1, gia: 2, phut: 2, ban: 3, xp: 1 },
  carot: { zh: '胡萝卜', py: 'húluóbo', vn: 'Cà rốt', lv: 1, gia: 4, phut: 15, ban: 6, xp: 2 },
  ngo: { zh: '玉米', py: 'yùmǐ', vn: 'Ngô', lv: 2, gia: 7, phut: 45, ban: 11, xp: 3 },
  caibap: { zh: '白菜', py: 'báicài', vn: 'Cải thảo', lv: 3, gia: 10, phut: 90, ban: 16, xp: 4 },
  dautay: { zh: '草莓', py: 'cǎoméi', vn: 'Dâu tây', lv: 4, gia: 15, phut: 180, ban: 25, xp: 6 },
  huongduong: { zh: '向日葵', py: 'xiàngrìkuí', vn: 'Hướng dương', lv: 5, gia: 22, phut: 300, ban: 36, xp: 8 },
  bido: { zh: '南瓜', py: 'nánguā', vn: 'Bí ngô', lv: 6, gia: 30, phut: 480, ban: 52, xp: 10 },
};
const THU_MOI_O = 2; // moi o dat thu duoc 2 nong san

const CON = {
  ga: { zh: '鸡', py: 'jī', vn: 'Gà', lv: 1, sao: 15, sp: 'trung', phut: 30, xp: 2 },
  vit: { zh: '鸭', py: 'yā', vn: 'Vịt', lv: 2, sao: 25, sp: 'trungvit', phut: 60, xp: 3 },
  bo: { zh: '牛', py: 'niú', vn: 'Bò', lv: 3, sao: 45, sp: 'sua', phut: 120, xp: 5 },
  cuu: { zh: '羊', py: 'yáng', vn: 'Cừu', lv: 4, sao: 60, sp: 'len', phut: 240, xp: 7 },
  ong: { zh: '蜜蜂', py: 'mìfēng', vn: 'Tổ ong', lv: 5, sao: 80, sp: 'mat', phut: 360, xp: 9 },
};
const CON_TOI_DA = 6; // moi loai toi da 6 con

// Nong san trong kho: cay trong + san pham vat nuoi
const SP = {
  trung: { zh: '鸡蛋', py: 'jīdàn', vn: 'Trứng gà', ban: 9 },
  trungvit: { zh: '鸭蛋', py: 'yādàn', vn: 'Trứng vịt', ban: 14 },
  sua: { zh: '牛奶', py: 'niúnǎi', vn: 'Sữa bò', ban: 26 },
  len: { zh: '羊毛', py: 'yángmáo', vn: 'Len', ban: 42 },
  mat: { zh: '蜂蜜', py: 'fēngmì', vn: 'Mật ong', ban: 60 },
};
Object.keys(CAY).forEach((k) => { SP[k] = { zh: CAY[k].zh, py: CAY[k].py, vn: CAY[k].vn, ban: CAY[k].ban }; });

// Do trang tri: tra bang sao hoac xu; dep = diem "dep" cua nong trai; w = 2 la vat 2x2
const TT = {
  rao: { zh: '篱笆', py: 'líba', vn: 'Hàng rào ngang', lv: 1, xu: 15, dep: 1 },
  'rao-doc': { zh: '篱笆', py: 'líba', vn: 'Hàng rào dọc', lv: 1, xu: 15, dep: 1 },
  duong: { zh: '石板路', py: 'shíbǎnlù', vn: 'Đường lát đá', lv: 1, xu: 10, dep: 1, phang: 1 },
  da: { zh: '石头', py: 'shítou', vn: 'Hòn đá', lv: 1, xu: 20, dep: 1 },
  bien: { zh: '木牌', py: 'mùpái', vn: 'Biển gỗ', lv: 1, xu: 30, dep: 2 },
  'hoa-do': { zh: '红花', py: 'hónghuā', vn: 'Luống hoa đỏ', lv: 1, sao: 4, dep: 3 },
  'hoa-vang': { zh: '菊花', py: 'júhuā', vn: 'Hoa cúc', lv: 1, sao: 4, dep: 3 },
  'hoa-tim': { zh: '紫花', py: 'zǐhuā', vn: 'Hoa tím', lv: 2, sao: 4, dep: 3 },
  'hom-thu': { zh: '信箱', py: 'xìnxiāng', vn: 'Hòm thư', lv: 2, sao: 6, dep: 4 },
  ghe: { zh: '长椅', py: 'chángyǐ', vn: 'Ghế gỗ', lv: 2, sao: 8, dep: 5 },
  'den-long': { zh: '灯笼', py: 'dēnglong', vn: 'Đèn lồng', lv: 2, sao: 10, dep: 7 },
  'chau-hoa': { zh: '花盆', py: 'huāpén', vn: 'Chậu hoa sứ', lv: 3, sao: 8, dep: 5 },
  'bu-nhin': { zh: '稻草人', py: 'dàocǎorén', vn: 'Bù nhìn', lv: 3, sao: 10, dep: 6 },
  tung: { zh: '松树', py: 'sōngshù', vn: 'Cây thông', lv: 3, sao: 10, dep: 6 },
  truc: { zh: '竹子', py: 'zhúzi', vn: 'Khóm trúc', lv: 3, sao: 12, dep: 7 },
  'cay-cam': { zh: '金橘', py: 'jīnjú', vn: 'Cây quất', lv: 4, sao: 12, dep: 8 },
  'cay-dao': { zh: '桃树', py: 'táoshù', vn: 'Cây hoa đào', lv: 4, sao: 15, dep: 10 },
  'xich-du': { zh: '秋千', py: 'qiūqiān', vn: 'Xích đu', lv: 4, sao: 15, dep: 9 },
  gieng: { zh: '水井', py: 'shuǐjǐng', vn: 'Giếng nước', lv: 5, sao: 18, dep: 10 },
  'ao-ca': { zh: '鱼塘', py: 'yútáng', vn: 'Ao cá', lv: 3, sao: 40, dep: 25, w: 2 },
  'coi-xay': { zh: '风车', py: 'fēngchē', vn: 'Cối xay gió', lv: 4, sao: 50, dep: 30, w: 2 },
  'cay-lon': { zh: '大树', py: 'dàshù', vn: 'Cây cổ thụ', lv: 5, sao: 45, dep: 28, w: 2 },
  cau: { zh: '小桥', py: 'xiǎoqiáo', vn: 'Cầu nhỏ', lv: 5, sao: 55, dep: 32, w: 2 },
  dinh: { zh: '亭子', py: 'tíngzi', vn: 'Đình nghỉ mát', lv: 6, sao: 70, dep: 45, w: 2 },
  cong: { zh: '牌坊', py: 'páifāng', vn: 'Cổng làng', lv: 7, sao: 90, dep: 60, w: 2 },
};

// Nha: nang cap 1 -> 2 -> 3
const NHA = [
  null,
  { zh: '小房子', py: 'xiǎo fángzi', vn: 'Nhà nhỏ', dep: 10 },
  { zh: '新房子', py: 'xīn fángzi', vn: 'Nhà có hiên', lv: 5, sao: 120, dep: 40 },
  { zh: '大房子', py: 'dà fángzi', vn: 'Nhà hai tầng', lv: 8, sao: 300, dep: 100 },
];
const KHO = { zh: '仓库', py: 'cāngkù', vn: 'Nhà kho', dep: 5 };
const O_DAT = { zh: '田', py: 'tián', vn: 'Ô ruộng' };

// Kich thuoc dat: mo rong bang sao
const DAT = [
  { w: 10, h: 8 },
  { w: 12, h: 10, sao: 30, lv: 2 },
  { w: 14, h: 12, sao: 60, lv: 4 },
  { w: 16, h: 14, sao: 100, lv: 6 },
  { w: 18, h: 16, sao: 160, lv: 8 },
];
const O_MIEN_PHI = 4;
function giaODat(soO) { return 3 + Math.max(0, soO - O_MIEN_PHI); }
function oToiDa(lv) { return Math.min(40, 6 + 2 * lv); }

function lvTuXp(xp) {
  let n = 1;
  while (n < 30 && 5 * n * (n + 1) <= xp) n++;
  return n;
}
function xpCuaLv(n) { return 5 * n * (n - 1); }

function rong(o) {
  if (o.k === 'nha' || o.k === 'kho') return 2;
  return (TT[o.k] && TT[o.k].w) || 1;
}

function nongTraiMoi() {
  const now = Date.now();
  return {
    v: 1, xp: 0, xu: 20, saoTieu: 0, dat: 0, nid: 10,
    o: [
      { id: 1, k: 'nha', x: 1, y: 1, n: 1 },
      { id: 2, k: 'kho', x: 4, y: 1 },
      { id: 3, k: 'o', x: 1, y: 4, c: 'lua', h: now }, // o dau tien chin san de em thu hoach ngay
      { id: 4, k: 'o', x: 2, y: 4 },
      { id: 5, k: 'o', x: 1, y: 5 },
      { id: 6, k: 'o', x: 2, y: 5 },
      { id: 7, k: 'ga', x: 6, y: 4, h: null },
      { id: 8, k: 'hoa-do', x: 7, y: 1 },
    ],
    kho: {}, // nong san
    tui: {}, // do trang tri / vat nuoi / o dat dang cat
    ngay: '', chuoi: 0,
    don: { d: '', x: [] },
    tham: { d: '', ids: [] },
    tim: 0,
  };
}

function diemDep(f) {
  let d = 0;
  f.o.forEach((o) => {
    if (o.k === 'nha') d += NHA[o.n || 1].dep;
    else if (o.k === 'kho') d += KHO.dep;
    else if (TT[o.k]) d += TT[o.k].dep;
  });
  return d;
}

// Don hang hom nay: sinh co dinh theo (nguoi, ngay) de may chu tinh lai duoc
function soNgauNhien(hat) {
  let s = 0;
  for (let i = 0; i < hat.length; i++) s = (s * 31 + hat.charCodeAt(i)) >>> 0;
  return function () {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
function donHang(f, userId, ngay) {
  const lv = lvTuXp(f.xp);
  const coCon = {};
  f.o.forEach((o) => { if (CON[o.k]) coCon[o.k] = 1; });
  const hang = Object.keys(CAY).filter((k) => CAY[k].lv <= lv)
    .concat(Object.keys(CON).filter((k) => coCon[k]).map((k) => CON[k].sp));
  const r = soNgauNhien(userId + '|' + ngay);
  const ds = [];
  for (let i = 0; i < 3; i++) {
    const loai = Math.min(hang.length, r() < 0.5 ? 1 : 2);
    const can = {};
    let tien = 0, xp = 2;
    for (let j = 0; j < loai; j++) {
      let k = hang[Math.floor(r() * hang.length)];
      let thu = 0;
      while (can[k] && thu++ < 5) k = hang[Math.floor(r() * hang.length)];
      if (can[k]) continue;
      const laCay = !!CAY[k];
      const sl = laCay ? 2 + Math.floor(r() * 3) : 1 + Math.floor(r() * 2);
      can[k] = sl;
      tien += SP[k].ban * sl;
      xp += sl;
    }
    ds.push({ can, xu: Math.round(tien * 1.6) + 5, xp });
  }
  return ds;
}

// Don hang chot 1 lan moi ngay (len cap giua ngay khong doi don dang lam)
function donHomNay(f, userId, ngay) {
  if (f.don.d !== ngay || !Array.isArray(f.don.ds)) {
    f.don = { d: ngay, x: [], ds: donHang(f, userId, ngay) };
    return { ds: f.don.ds, moi: true };
  }
  return { ds: f.don.ds, moi: false };
}

module.exports = function ganNongTrai(app, d) {
  const FILE = path.join(d.DATA_DIR, 'farms.json');
  const khoa = new Map(); // userId -> Promise (xu ly lan luot tung nguoi)

  async function initTable() {
    if (!d.USE_DB) return;
    await d.db().query(
      'CREATE TABLE IF NOT EXISTS farms (' +
        'user_id VARCHAR(36) PRIMARY KEY, ' +
        'data MEDIUMTEXT NOT NULL, ' +
        'lv INT NOT NULL DEFAULT 1, ' +
        'dep INT NOT NULL DEFAULT 0, ' +
        'updated_ms BIGINT NOT NULL, ' +
        'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
      ')'
    );
  }

  async function doc(userId) {
    let raw = null;
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      raw = all[userId] || null;
    } else {
      const [rows] = await d.db().query('SELECT data FROM farms WHERE user_id = ?', [userId]);
      if (rows.length) { try { raw = JSON.parse(rows[0].data); } catch (e) { raw = null; } }
    }
    if (!raw) return nongTraiMoi();
    return Object.assign(nongTraiMoi(), raw);
  }
  async function ghi(userId, f) {
    const lv = lvTuXp(f.xp), dep = diemDep(f);
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      all[userId] = f;
      d.writeJsonFile(FILE, all);
      return;
    }
    await d.db().query(
      'INSERT INTO farms (user_id, data, lv, dep, updated_ms) VALUES (?,?,?,?,?) ' +
        'ON DUPLICATE KEY UPDATE data=VALUES(data), lv=VALUES(lv), dep=VALUES(dep), updated_ms=VALUES(updated_ms)',
      [userId, JSON.stringify(f), lv, dep, Date.now()]
    );
  }
  async function tomTat(ids) {
    const out = {};
    if (!ids.length) return out;
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      ids.forEach((id) => { if (all[id]) out[id] = { lv: lvTuXp(all[id].xp || 0), dep: diemDep(all[id]), tim: all[id].tim || 0 }; });
      return out;
    }
    const [rows] = await d.db().query('SELECT user_id, lv, dep, data FROM farms WHERE user_id IN (?)', [ids]);
    rows.forEach((r) => {
      let tim = 0;
      try { tim = JSON.parse(r.data).tim || 0; } catch (e) { /* bo qua */ }
      out[r.user_id] = { lv: r.lv, dep: r.dep, tim };
    });
    return out;
  }

  function lanLuot(userId, fn) {
    const truoc = khoa.get(userId) || Promise.resolve();
    const sau = truoc.catch(() => {}).then(fn);
    khoa.set(userId, sau);
    sau.finally(() => { if (khoa.get(userId) === sau) khoa.delete(userId); }).catch(() => {});
    return sau;
  }

  async function saoCo(userId, f) {
    const s = await d.loadStar(userId);
    return Math.max(0, (s.total || 0) - (f.saoTieu || 0));
  }

  async function trangThai(userId, f) {
    const ngay = d.vnDayKey();
    const lv = lvTuXp(f.xp);
    const don = donHomNay(f, userId, ngay).ds.map((x, i) => Object.assign({}, x, { xong: !!f.don.x[i] }));
    return {
      now: Date.now(),
      sao: await saoCo(userId, f),
      xu: f.xu, xp: f.xp, lv, xpLv: xpCuaLv(lv), xpSau: xpCuaLv(lv + 1),
      dat: f.dat, kich: DAT[f.dat], o: f.o, kho: f.kho, tui: f.tui,
      quaHomNay: f.ngay !== ngay, chuoi: f.chuoi,
      don, dep: diemDep(f), tim: f.tim || 0,
      oToiDa: oToiDa(lv), soO: f.o.filter((o) => o.k === 'o').length + (f.tui.o || 0),
    };
  }

  // Kiem tra o (x, y) rong w x w co nam trong dat va khong de len vat khac
  function datDuoc(f, x, y, w, boQuaId) {
    const k = DAT[f.dat];
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0 || x + w > k.w || y + w > k.h) return false;
    return !f.o.some((o) => {
      if (o.id === boQuaId) return false;
      const r = rong(o);
      return x < o.x + r && o.x < x + w && y < o.y + r && o.y < y + w;
    });
  }

  function loi(msg) { const e = new Error(msg); e.farm = true; return e; }

  async function lam(userId, b) {
    const f = await doc(userId);
    const now = Date.now();
    const lv = lvTuXp(f.xp);
    const ngay = d.vnDayKey();
    const a = String(b.a || '');
    const timO = () => {
      const o = f.o.find((x) => x.id === Number(b.id));
      if (!o) throw loi('Không tìm thấy ô này.');
      return o;
    };
    const tieuSao = async (n) => {
      if ((await saoCo(userId, f)) < n) throw loi('Chưa đủ sao — làm bài ôn tập để kiếm thêm sao nhé!');
      f.saoTieu += n;
    };
    const tieuXu = (n) => {
      if (f.xu < n) throw loi('Chưa đủ xu — thu hoạch và bán nông sản để có xu.');
      f.xu -= n;
    };
    const them = { xu: 0, xp: 0, sp: {} };
    const congSp = (k, n) => { f.kho[k] = (f.kho[k] || 0) + n; them.sp[k] = (them.sp[k] || 0) + n; };

    if (a === 'trong') {
      const o = timO();
      const c = CAY[b.c];
      if (o.k !== 'o' || o.c) throw loi('Ô này đang có cây.');
      if (!c) throw loi('Không có loại hạt này.');
      if (c.lv > lv) throw loi('Lên cấp ' + c.lv + ' để trồng ' + c.vn + '.');
      tieuXu(c.gia);
      o.c = b.c; o.h = now + c.phut * PHUT; o.t = 0;
    } else if (a === 'trongHet') {
      // gieo cung 1 loai hat vao moi o trong (het xu thi dung)
      const c = CAY[b.c];
      if (!c || c.lv > lv) throw loi('Không có loại hạt này.');
      let n = 0;
      f.o.forEach((o) => {
        if (o.k === 'o' && !o.c && f.xu >= c.gia) { f.xu -= c.gia; o.c = b.c; o.h = now + c.phut * PHUT; o.t = 0; n++; }
      });
      if (!n) throw loi(f.xu < c.gia ? 'Chưa đủ xu mua hạt.' : 'Không còn ô trống.');
    } else if (a === 'tuoi') {
      const o = timO();
      if (o.k !== 'o' || !o.c || o.h <= now) throw loi('Ô này không cần tưới.');
      if (o.t) throw loi('Ô này đã tưới rồi.');
      o.t = 1;
      o.h = now + Math.round((o.h - now) * 0.6); // tuoi nuoc: con 60% thoi gian
      them.xp += 1;
    } else if (a === 'thu') {
      const ds = b.id === 'het' ? f.o.filter((o) => o.k === 'o' && o.c && o.h <= now) : [timO()];
      if (!ds.length) throw loi('Chưa có ô nào chín.');
      ds.forEach((o) => {
        if (o.k !== 'o' || !o.c || o.h > now) throw loi('Cây chưa chín.');
        congSp(o.c, THU_MOI_O);
        them.xp += CAY[o.c].xp;
        o.c = null; o.h = null; o.t = 0;
      });
    } else if (a === 'choan') {
      const o = timO();
      if (!CON[o.k]) throw loi('Không phải vật nuôi.');
      if (o.h) throw loi(o.h > now ? 'Con vật đang no rồi.' : 'Hãy thu sản phẩm trước.');
      o.h = now + CON[o.k].phut * PHUT;
      them.xp += 2; // vua tra loi dung 3 cau on tu
    } else if (a === 'nhat') {
      const ds = b.id === 'het' ? f.o.filter((o) => CON[o.k] && o.h && o.h <= now) : [timO()];
      if (!ds.length) throw loi('Chưa có sản phẩm.');
      ds.forEach((o) => {
        if (!CON[o.k] || !o.h || o.h > now) throw loi('Chưa có sản phẩm.');
        congSp(CON[o.k].sp, 1);
        them.xp += CON[o.k].xp;
        o.h = null;
      });
    } else if (a === 'ban') {
      const k = String(b.k || '');
      const n = Math.floor(Number(b.n) || 0);
      if (!SP[k] || n < 1 || (f.kho[k] || 0) < n) throw loi('Không đủ hàng để bán.');
      f.kho[k] -= n;
      if (!f.kho[k]) delete f.kho[k];
      them.xu = SP[k].ban * n;
      f.xu += them.xu;
    } else if (a === 'mua' || a === 'dat') {
      // mua moi (tra tien) hoac lay tu tui do ra dat (mien phi)
      const k = String(b.k || '');
      const x = Number(b.x), y = Number(b.y);
      const laO = k === 'o', con = CON[k], tt = TT[k];
      if (!laO && !con && !tt) throw loi('Không có món này.');
      const w = tt && tt.w ? 2 : 1;
      if (!datDuoc(f, x, y, w)) throw loi('Chỗ này không đặt được.');
      if (a === 'dat') {
        if (!(f.tui[k] > 0)) throw loi('Trong túi không còn món này.');
        f.tui[k]--;
        if (!f.tui[k]) delete f.tui[k];
      } else {
        const muc = con || tt;
        if (muc && muc.lv > lv) throw loi('Lên cấp ' + muc.lv + ' để mua món này.');
        if (laO) {
          const soO = f.o.filter((o) => o.k === 'o').length + (f.tui.o || 0);
          if (soO >= oToiDa(lv)) throw loi('Cấp ' + lv + ' tối đa ' + oToiDa(lv) + ' ô ruộng — lên cấp để mở thêm.');
          await tieuSao(giaODat(soO));
        } else if (con) {
          const soCon = f.o.filter((o) => o.k === k).length + (f.tui[k] || 0);
          if (soCon >= CON_TOI_DA) throw loi('Mỗi loại nuôi tối đa ' + CON_TOI_DA + ' con.');
          await tieuSao(con.sao);
        } else if (tt.sao) await tieuSao(tt.sao);
        else tieuXu(tt.xu);
        if (tt) them.xp += Math.ceil(tt.dep / 2);
        if (con) them.xp += 3;
      }
      const moi = { id: f.nid++, k, x, y };
      if (con) moi.h = null;
      f.o.push(moi);
    } else if (a === 'doi') {
      const o = timO();
      const x = Number(b.x), y = Number(b.y);
      if (!datDuoc(f, x, y, rong(o), o.id)) throw loi('Chỗ này không đặt được.');
      o.x = x; o.y = y;
    } else if (a === 'cat') {
      const o = timO();
      if (o.k === 'nha' || o.k === 'kho') throw loi('Không cất được nhà.');
      if (o.k === 'o' && o.c) throw loi('Thu hoạch xong mới cất ô ruộng được.');
      if (CON[o.k] && o.h) throw loi(o.h > now ? 'Đợi con vật làm xong sản phẩm đã.' : 'Thu sản phẩm trước đã.');
      f.o = f.o.filter((x) => x !== o);
      f.tui[o.k] = (f.tui[o.k] || 0) + 1;
    } else if (a === 'morong') {
      const sau = DAT[f.dat + 1];
      if (!sau) throw loi('Đất đã rộng tối đa.');
      if (sau.lv > lv) throw loi('Lên cấp ' + sau.lv + ' để mở rộng đất.');
      await tieuSao(sau.sao);
      f.dat++;
      them.xp += 10;
    } else if (a === 'nangnha') {
      const nha = f.o.find((o) => o.k === 'nha');
      const sau = NHA[(nha.n || 1) + 1];
      if (!sau) throw loi('Nhà đã đẹp nhất rồi!');
      if (sau.lv > lv) throw loi('Lên cấp ' + sau.lv + ' để nâng cấp nhà.');
      await tieuSao(sau.sao);
      nha.n = (nha.n || 1) + 1;
      them.xp += 20;
    } else if (a === 'qua') {
      if (f.ngay === ngay) throw loi('Hôm nay em đã nhận quà rồi.');
      const homQua = d.vnDayKey(now - 86400000);
      f.chuoi = f.ngay === homQua ? Math.min(30, (f.chuoi || 0) + 1) : 1;
      f.ngay = ngay;
      them.xu = 10 + 5 * Math.min(7, f.chuoi);
      f.xu += them.xu;
      them.xp += 2;
    } else if (a === 'don') {
      const i = Math.floor(Number(b.i));
      const ds = donHomNay(f, userId, ngay).ds;
      if (!ds[i]) throw loi('Không có đơn hàng này.');
      if (f.don.x[i]) throw loi('Đơn này đã giao rồi.');
      const can = ds[i].can;
      Object.keys(can).forEach((k) => { if ((f.kho[k] || 0) < can[k]) throw loi('Kho chưa đủ ' + SP[k].vn + '.'); });
      Object.keys(can).forEach((k) => { f.kho[k] -= can[k]; if (!f.kho[k]) delete f.kho[k]; });
      f.don.x[i] = 1;
      them.xu = ds[i].xu;
      f.xu += them.xu;
      them.xp += ds[i].xp;
    } else {
      throw loi('Hành động không hợp lệ.');
    }
    const lvCu = lv;
    f.xp += them.xp;
    await ghi(userId, f);
    const st = await trangThai(userId, f);
    return { ok: true, them, lenCap: st.lv > lvCu ? st.lv : 0, st };
  }

  const CATALOG = { CAY, CON, SP, TT, NHA, KHO, O_DAT, DAT, THU_MOI_O, CON_TOI_DA, O_MIEN_PHI };

  app.get('/api/farm', d.requireAuth, d.asyncRoute(async (req, res) => {
    const st = await lanLuot(req.user.id, async () => {
      const f = await doc(req.user.id);
      // ngay moi: chot don hang hom nay vao du lieu
      if (donHomNay(f, req.user.id, d.vnDayKey()).moi) await ghi(req.user.id, f);
      return trangThai(req.user.id, f);
    });
    res.json(req.query.cat ? Object.assign({ cat: CATALOG }, st) : st);
  }));

  app.post('/api/farm/act', d.requireAuth, d.asyncRoute(async (req, res) => {
    try {
      res.json(await lanLuot(req.user.id, () => lam(req.user.id, req.body || {})));
    } catch (err) {
      if (!err.farm) throw err;
      res.status(400).json({ error: err.message });
    }
  }));

  // Ban cung lop: danh sach nong trai (cap, diem dep, tim)
  async function banCungLop(userId) {
    const st = await d.loadClassState();
    const mem = st.members[userId];
    if (!mem) return null;
    const cls = st.classes.find((c) => c.id === mem.classId);
    const ids = Object.keys(st.members).filter((u) => st.members[u].classId === mem.classId);
    return { ten: cls ? cls.name : '', ids };
  }

  app.get('/api/farm/lop', d.requireAuth, d.asyncRoute(async (req, res) => {
    const lop = await banCungLop(req.user.id);
    if (!lop) return res.json({ lop: null, ds: [] });
    const [tt, ten] = await Promise.all([tomTat(lop.ids), d.loadUserNames()]);
    const f = await doc(req.user.id);
    const ngay = d.vnDayKey();
    const daTham = f.tham.d === ngay ? f.tham.ids : [];
    const ds = lop.ids.filter((id) => ten[id]).map((id) => ({
      id, ten: ten[id], la: id === req.user.id,
      lv: tt[id] ? tt[id].lv : 0, dep: tt[id] ? tt[id].dep : 0, tim: tt[id] ? tt[id].tim : 0,
      co: !!tt[id], daTim: daTham.indexOf(id) >= 0,
    })).sort((a, b) => b.dep - a.dep || b.lv - a.lv);
    res.json({ lop: lop.ten, ds });
  }));

  app.get('/api/farm/xem/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const lop = await banCungLop(req.user.id);
    const id = String(req.params.id);
    if (!lop || lop.ids.indexOf(id) < 0) return res.status(403).json({ error: 'Chỉ thăm được nông trại của bạn cùng lớp.' });
    const [f, ten] = await Promise.all([doc(id), d.loadUserNames()]);
    const now = Date.now();
    res.json({
      ten: ten[id] || '', lv: lvTuXp(f.xp), dep: diemDep(f), tim: f.tim || 0, kich: DAT[f.dat], now,
      // chi gui hinh dang nong trai, khong gui xu / kho
      o: f.o.map((o) => ({ id: o.id, k: o.k, x: o.x, y: o.y, n: o.n, c: o.c, h: o.h })),
    });
  }));

  // Tha tim cho nong trai ban: moi ngay 1 lan / ban, toi da 10 ban; nguoi tha duoc +3 xu
  app.post('/api/farm/tim/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const id = String(req.params.id);
    const me = req.user.id;
    if (id === me) return res.status(400).json({ error: 'Không tự thả tim cho mình được.' });
    const lop = await banCungLop(me);
    if (!lop || lop.ids.indexOf(id) < 0) return res.status(403).json({ error: 'Chỉ thăm được nông trại của bạn cùng lớp.' });
    const ngay = d.vnDayKey();
    const kq = await lanLuot(me, async () => {
      const f = await doc(me);
      if (f.tham.d !== ngay) f.tham = { d: ngay, ids: [] };
      if (f.tham.ids.indexOf(id) >= 0) throw loi('Hôm nay em đã thả tim cho bạn này rồi.');
      if (f.tham.ids.length >= 10) throw loi('Mỗi ngày thả tim tối đa 10 bạn.');
      f.tham.ids.push(id);
      f.xu += 3;
      await ghi(me, f);
      return f.xu;
    }).catch((err) => { if (err.farm) return { loi: err.message }; throw err; });
    if (kq && kq.loi) return res.status(400).json({ error: kq.loi });
    const tim = await lanLuot(id, async () => {
      const g = await doc(id);
      g.tim = (g.tim || 0) + 1;
      await ghi(id, g);
      return g.tim;
    });
    res.json({ ok: true, xu: kq, tim, them: 3 });
  }));

  return { initTable };
};
