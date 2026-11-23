// Thu cung hoc lenh 宠物 (tinh nang them 2026-11-23).
// Nhan nuoi 1 thu cung (小狗 / 小猫 / 小兔子; 熊猫宝宝 o cap cao) bang xu, dat ten. Thu cung di theo nhan vat cua em tren nong trai.
// Day lenh = hoc cau lenh tieng Trung co dinh (坐下, 过来, 握手…): noi vao micro (Web Speech zh-CN, khop >= 70% chu)
// hoac khong co micro thi chon dung cau lenh cho loi nhac tieng Viet. Moi lenh mo theo thu tu; 3 buoi day thanh cong
// o 3 NGAY khac nhau thi thuoc lenh (toi da DAY_NGAY buoi / ngay). Lenh da thuoc: bam la thu cung lam xiec + doc to cau lenh.
// Vui (0–100) giam dan theo gio; cho an (xu hoac nong san hop khau vi, 2 bua / ngay) va "choi voi thu cung"
// (3 cau hoi tu bai em da hoc, 1 lan / ngay) lam tang vui.
// Ich loi nho, co tran: thu cung vui (>= VUI_CAN) va thuoc 去拿 -> moi ngay tha ve 1 phan nong san co ban;
// thuoc 别动 -> moi ngay 1 lan canh kho khi vong quay ra o "Chuot" (nong-trai.js CHAN_CHUOT).
// Du lieu: f.pet = { loai, ten, mua, vui, vt, an:{d,n}, choi, lenh:{k:{n,d}}, day:{d,n,thu}, dung:{d,n}, lay, gac, q, cq }
const Loc = require('./nong-trai-tin-loc');

const LV_MO = 5;
const LOAI = {
  cho: { zh: '小狗', py: 'xiǎogǒu', vn: 'Chó con', lv: 5, xu: 150, keu: '汪汪！', keuPy: 'wāngwāng', an: ['trung', 'sua'] },
  meo: { zh: '小猫', py: 'xiǎomāo', vn: 'Mèo con', lv: 5, xu: 150, keu: '喵～', keuPy: 'miāo', an: ['cacon', 'cachach', 'cadiec', 'sua'] },
  tho: { zh: '小兔子', py: 'xiǎotùzi', vn: 'Thỏ con', lv: 5, xu: 120, keu: '吱吱！', keuPy: 'zhīzhī', an: ['carot', 'caibap'] },
  gautruc: { zh: '熊猫宝宝', py: 'xióngmāo bǎobao', vn: 'Gấu trúc con', lv: 20, xu: 500, keu: '嗷呜～', keuPy: 'áowū', an: ['zhusun', 'carot'] },
};
// Cau lenh co dinh (tieng Trung chuan) — mo theo thu tu. dien = kieu hoat anh o client.
const LENH = [
  { k: 'zuoxia', zh: '坐下', py: 'zuòxià', vn: 'Ngồi xuống', dien: 'ngoi' },
  { k: 'guolai', zh: '过来', py: 'guòlái', vn: 'Lại đây', dien: 'lai' },
  { k: 'woshou', zh: '握手', py: 'wòshǒu', vn: 'Bắt tay', dien: 'bat' },
  { k: 'zhuanquan', zh: '转圈', py: 'zhuànquān', vn: 'Xoay vòng', dien: 'xoay' },
  { k: 'tiao', zh: '跳起来', py: 'tiào qǐlai', vn: 'Nhảy lên', dien: 'nhay' },
  { k: 'biedong', zh: '别动', py: 'bié dòng', vn: 'Đứng yên', dien: 'dung', ich: 'Canh kho: mỗi ngày 1 lần đuổi chuột ở vòng quay may mắn (khi thú cưng vui).' },
  { k: 'tangxia', zh: '躺下', py: 'tǎngxià', vn: 'Nằm xuống', dien: 'nam' },
  { k: 'quna', zh: '去拿', py: 'qù ná', vn: 'Đi lấy (đồ)', dien: 'lay', ich: 'Mỗi ngày 1 lần tha về một phần nông sản (khi thú cưng vui).' },
  { k: 'jiao', zh: '叫一声', py: 'jiào yì shēng', vn: 'Kêu một tiếng', dien: 'keu' },
  { k: 'shuijiao', zh: '睡觉', py: 'shuìjiào', vn: 'Đi ngủ', dien: 'ngu' },
];
const LENH_MAP = {};
LENH.forEach((l, i) => { LENH_MAP[l.k] = Object.assign({ i }, l); });
const THUC_AN = { zh: '宠物粮', py: 'chǒngwùliáng', vn: 'Thức ăn thú cưng', xu: 8 };

const CAN_THUOC = 3;      // so buoi day thanh cong (moi buoi 1 ngay khac nhau) de thuoc 1 lenh
const DAY_NGAY = 3;       // so buoi day thanh cong toi da / ngay (moi lenh 1 buoi / ngay)
const THU_NGAY = 30;      // so lan bat dau day toi da / ngay
const NOI_LAN = 5;        // so lan noi lai trong 1 buoi
const DIEM_NOI = 70;      // % chu khop
const BUA_NGAY = 2, VUI_BUA = 30, VUI_BUA_SP = 35;
const VUI_DAU = 70, VUI_CAN = 60, GIAM_GIO = 2; // vui giam 2 diem / gio (48 / ngay)
const CHOI_CAU = 3, VUI_CAU = 10, XP_CAU = 2;
const DUNG_VUI_LAN = 5, VUI_DUNG = 2; // 5 lan ra lenh dau tien moi ngay: +2 vui
const XP_DAY = 3, XP_THUOC = 10;
const LAY_GT = 30, LAY_TOI_DA = 5; // 去拿: 1 loai cay co ban, so luong ~ 30 xu (toi da 5 qua)
const HAN_BUOI = 10 * 60000, HAN_CHOI = 15 * 60000;

// ten thu cung: bo ky tu HTML / dau ngoac, gon khoang trang, toi da 12 ky tu
const sachTen = (s) => Loc.lamSach(s).replace(/[<>&"'`\\]/g, '').replace(/\s+/g, ' ').trim().slice(0, 12);
const kep = (n) => Math.max(0, Math.min(100, n));
function vuiNay(p, now) {
  if (!p) return 0;
  const t = now || Date.now();
  return kep((p.vui || 0) - Math.max(0, t - (p.vt || t)) / 3600000 * GIAM_GIO);
}
function doiVui(p, delta, now) {
  const t = now || Date.now();
  p.vui = kep(vuiNay(p, t) + delta);
  p.vt = t;
}
// so chu khop theo day con chung dai nhat (giong rpCompare cua trang bai hoc)
function soKhop(target, heard) {
  const sach = (s) => String(s || '').replace(/[^㐀-鿿A-Za-z0-9]/g, '');
  const a = sach(target), b = sach(heard).slice(0, 40);
  const n = a.length, m = b.length;
  if (!n) return { diem: 0, hit: [] };
  const dp = [];
  for (let i = 0; i <= n; i++) dp.push(new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const hit = new Array(n).fill(false);
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { hit[i] = true; i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
  }
  const thua = Math.max(0, m - dp[0][0]);
  return { diem: Math.max(0, Math.min(100, Math.round(100 * dp[0][0] / (n + thua * 0.5)))), hit };
}
// 去拿: 1 loai cay thuong (khong quy / lai) da mo, cap <= 8, so luong quy ra ~LAY_GT xu
function quaLay(CAY, SP, lv, rnd) {
  const ds = Object.keys(CAY).filter((k) => !CAY[k].hiem && !CAY[k].lai && CAY[k].lv <= Math.min(Math.max(1, lv), 8) && SP[k]);
  const k = ds[Math.floor((rnd || Math.random)() * ds.length)];
  if (!k) return null;
  return { k, n: Math.max(1, Math.min(LAY_TOI_DA, Math.round(LAY_GT / SP[k].ban))) };
}
// lenh thuoc chua / mo chua
const thuoc = (p, k) => !!(p.lenh && p.lenh[k] && p.lenh[k].n >= CAN_THUOC);
function moLenh(p, k) {
  const l = LENH_MAP[k];
  if (!l) return false;
  if (l.i === 0) return true;
  const truoc = p.lenh && p.lenh[LENH[l.i - 1].k];
  return !!(truoc && truoc.n >= 1);
}
// Vong quay ra o chuot: thu cung vui + thuoc 别动 -> duoi chuot (1 lan / ngay)
function chanChuot(f, ngay, now) {
  const p = f.pet;
  if (!p || !LOAI[p.loai] || !thuoc(p, 'biedong') || vuiNay(p, now) < VUI_CAN || p.gac === ngay) return null;
  p.gac = ngay;
  const l = LOAI[p.loai];
  return { zh: '别动！老鼠跑了！', py: 'Bié dòng! Lǎoshǔ pǎo le!', vn: l.vn + ' ' + p.ten + ' đứng canh kho (đã thuộc lệnh 别动) — chuột sợ quá chạy mất, kho không mất gì!', hinh: 'pet-' + p.loai + '-dung' };
}
// tom tat gui kem trang thai nong trai (st.kt.pet) va khi ban sang tham
function tomPet(f, now) {
  const p = f.pet;
  if (!p || !LOAI[p.loai]) return null;
  return { loai: p.loai, ten: p.ten, vui: Math.round(vuiNay(p, now)), thuoc: LENH.filter((l) => thuoc(p, l.k)).map((l) => l.k) };
}

function gan(app, d, h) {
  const loi = h.loi, SP = h.SP, CAY = h.CAY;
  const ngay = () => d.vnDayKey();
  Object.assign(h.CATALOG, { PET: { LOAI, LENH, THUC_AN, LV_MO, VUI_CAN } });
  h.ttThem.push((userId, f, lv) => ({ pet: tomPet(f), petMo: lv >= LV_MO }));
  if (Array.isArray(h.CHAN_CHUOT)) h.CHAN_CHUOT.push((f) => chanChuot(f, ngay()));

  function trangThaiPet(f) {
    const lv = h.lvTuXp(f.xp), p = f.pet, hn = ngay(), now = Date.now();
    const kq = { mo: lv >= LV_MO, lvMo: LV_MO, lv, xu: f.xu, canThuoc: CAN_THUOC, dayNgay: DAY_NGAY, diemNoi: DIEM_NOI, buaNgay: BUA_NGAY, vuiCan: VUI_CAN, choiCau: CHOI_CAU, thucAn: THUC_AN };
    kq.loai = Object.keys(LOAI).map((k) => Object.assign({ k, mo: lv >= LOAI[k].lv }, LOAI[k]));
    if (!p || !LOAI[p.loai]) { kq.pet = null; return kq; }
    const dayHom = p.day && p.day.d === hn ? p.day : { n: 0, thu: 0 };
    kq.pet = {
      loai: p.loai, ten: p.ten, vui: Math.round(vuiNay(p, now)),
      an: p.an && p.an.d === hn ? p.an.n : 0, choi: p.choi === hn, lay: p.lay === hn, gac: p.gac === hn,
      day: dayHom.n, thu: dayHom.thu || 0, thuNgay: THU_NGAY,
      lenh: LENH.map((l) => {
        const x = (p.lenh && p.lenh[l.k]) || { n: 0 };
        return { k: l.k, n: Math.min(CAN_THUOC, x.n || 0), hom: x.d === hn, mo: moLenh(p, l.k), thuoc: (x.n || 0) >= CAN_THUOC };
      }),
      // mon an hop khau vi dang co trong kho
      khoAn: LOAI[p.loai].an.filter((k) => SP[k]).map((k) => ({ k, zh: SP[k].zh, vn: SP[k].vn, co: f.kho[k] || 0, can: SP[k].ban >= 20 ? 1 : 2 })),
      cq: p.cq && now - p.cq.bd < HAN_CHOI ? { da: p.cq.tl.length, so: p.cq.ds.length } : null,
    };
    return kq;
  }
  const can = (f) => {
    if (!f.pet || !LOAI[f.pet.loai]) throw loi('Em chưa nuôi thú cưng nào.');
    return f.pet;
  };

  app.get('/api/farm/thucung', d.requireAuth, d.asyncRoute(async (req, res) => {
    res.json(trangThaiPet(await h.doc(req.user.id)));
  }));

  // Ban sang tham: xem thu cung cua ban (chi doc)
  app.get('/api/farm/thucung/xem/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const id = String(req.params.id);
    await h.traLoi(res, (async () => {
      await h.cungLop(req.user.id, id);
      return { pet: tomPet(await h.doc(id)) };
    })());
  }));

  // Nhan nuoi
  app.post('/api/farm/thucung/nuoi', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    const ten = sachTen(b.ten);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp), l = LOAI[b.loai];
      if (f.pet && LOAI[f.pet.loai]) throw loi('Em đã có thú cưng rồi.');
      if (!l) throw loi('Chọn một loài thú cưng nhé.');
      if (lv < l.lv) throw loi(l.vn + ' mở ở nông trại cấp ' + l.lv + '.');
      if (!ten) throw loi('Đặt tên cho thú cưng của em nhé.');
      if (!Loc.kiem(ten).ok) throw loi('Tên này chưa phù hợp, em đặt tên khác nhé.');
      if (f.xu < l.xu) throw loi('Cần ' + l.xu + ' xu để nhận nuôi ' + l.vn.toLowerCase() + ' (em có ' + f.xu + ').');
      f.xu -= l.xu;
      f.pet = { loai: b.loai, ten, mua: Date.now(), vui: VUI_DAU, vt: Date.now(), lenh: {} };
      await h.ghi(me, f);
      return { ok: true, pet: trangThaiPet(f), st: await h.trangThai(me, f) };
    }));
  }));

  app.post('/api/farm/thucung/ten', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, ten = sachTen((req.body || {}).ten);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), p = can(f);
      if (!ten) throw loi('Tên chưa có chữ nào.');
      if (!Loc.kiem(ten).ok) throw loi('Tên này chưa phù hợp, em đặt tên khác nhé.');
      p.ten = ten;
      await h.ghi(me, f);
      return { ok: true, pet: trangThaiPet(f), st: await h.trangThai(me, f) };
    }));
  }));

  // Cho an: mon = 'thucan' (mua bang xu) hoac 1 nong san hop khau vi (2 qua, hang >= 20 xu thi 1 qua)
  app.post('/api/farm/thucung/an', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, mon = String((req.body || {}).mon || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), p = can(f), hn = ngay();
      const n = p.an && p.an.d === hn ? p.an.n : 0;
      if (n >= BUA_NGAY) throw loi(p.ten + ' đã ăn no ' + BUA_NGAY + ' bữa hôm nay rồi — mai cho ăn tiếp nhé!');
      let them;
      if (mon === 'thucan') {
        if (f.xu < THUC_AN.xu) throw loi('Cần ' + THUC_AN.xu + ' xu mua thức ăn.');
        f.xu -= THUC_AN.xu;
        them = VUI_BUA;
      } else {
        if (LOAI[p.loai].an.indexOf(mon) < 0 || !SP[mon]) throw loi(LOAI[p.loai].vn + ' không ăn món này.');
        const so = SP[mon].ban >= 20 ? 1 : 2;
        if ((f.kho[mon] || 0) < so) throw loi('Cần ' + so + ' ' + SP[mon].vn.toLowerCase() + ' trong kho.');
        f.kho[mon] -= so; if (!f.kho[mon]) delete f.kho[mon];
        them = VUI_BUA_SP;
      }
      doiVui(p, them);
      p.an = { d: hn, n: n + 1 };
      await h.ghi(me, f);
      return { ok: true, them, pet: trangThaiPet(f), st: await h.trangThai(me, f) };
    }));
  }));

  // Bat dau 1 buoi day lenh. cach: 'noi' (micro) -> gui cau lenh de em doc; 'chon' -> 4 lua chon, dap an giu o may chu
  app.post('/api/farm/thucung/day/bat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, cach = b.cach === 'noi' ? 'noi' : 'chon';
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), p = can(f), hn = ngay(), l = LENH_MAP[b.k];
      if (!l) throw loi('Lệnh không hợp lệ.');
      if (!moLenh(p, l.k)) throw loi('Dạy xong lệnh trước (ít nhất 1 buổi) rồi mới dạy lệnh này nhé.');
      if (thuoc(p, l.k)) throw loi(p.ten + ' đã thuộc lệnh này rồi!');
      const x = (p.lenh && p.lenh[l.k]) || {};
      if (x.d === hn) throw loi('Hôm nay đã dạy lệnh này rồi — mai ôn tiếp để ' + p.ten + ' nhớ lâu nhé!');
      p.day = p.day && p.day.d === hn ? p.day : { d: hn, n: 0, thu: 0 };
      if (p.day.n >= DAY_NGAY) throw loi('Hôm nay đã dạy ' + DAY_NGAY + ' buổi rồi — thú cưng cũng cần nghỉ, mai dạy tiếp nhé!');
      if ((p.day.thu || 0) >= THU_NGAY) throw loi('Hôm nay thử nhiều quá rồi — mai dạy tiếp nhé!');
      p.day.thu = (p.day.thu || 0) + 1;
      const q = { k: l.k, cach, bd: Date.now(), lan: 0 };
      const out = { ok: true, k: l.k, cach, vn: l.vn, ten: p.ten };
      if (cach === 'noi') { out.zh = l.zh; out.py = l.py; out.diem = DIEM_NOI; out.lan = NOI_LAN; } else {
        const khac = LENH.filter((y) => y.k !== l.k).sort(() => Math.random() - 0.5).slice(0, 3);
        const lua = khac.concat([l]).sort(() => Math.random() - 0.5);
        q.dung = lua.indexOf(l);
        out.lua = lua.map((y) => ({ zh: y.zh, py: y.py }));
      }
      p.q = q;
      await h.ghi(me, f);
      return out;
    }));
  }));

  app.post('/api/farm/thucung/day/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), p = can(f), hn = ngay(), q = p.q;
      if (!q || Date.now() - q.bd > HAN_BUOI) { delete p.q; await h.ghi(me, f); throw loi('Buổi dạy đã hết giờ — bấm Dạy lại nhé.'); }
      const l = LENH_MAP[q.k];
      let dung, kq = {};
      if (q.cach === 'noi') {
        const s = soKhop(l.zh, String(b.noi || ''));
        dung = s.diem >= DIEM_NOI;
        q.lan++;
        kq = { diem: s.diem, hit: s.hit, chu: l.zh, conLan: Math.max(0, NOI_LAN - q.lan) };
        if (!dung && q.lan < NOI_LAN) { await h.ghi(me, f); return Object.assign({ ok: true, dung: false, tiep: true }, kq); }
      } else {
        dung = Number(b.chon) === q.dung;
        kq = { dungLa: q.dung };
      }
      delete p.q;
      kq.zh = l.zh; kq.py = l.py; kq.vn = l.vn;
      if (dung) {
        p.day = p.day && p.day.d === hn ? p.day : { d: hn, n: 0, thu: 0 };
        p.lenh = p.lenh || {};
        const x = p.lenh[l.k] || { n: 0 };
        if (x.d !== hn && p.day.n < DAY_NGAY && x.n < CAN_THUOC) {
          x.n += 1; x.d = hn; p.lenh[l.k] = x;
          p.day.n += 1;
          f.xp += XP_DAY;
          kq.buoi = x.n;
          if (x.n >= CAN_THUOC) { f.xp += XP_THUOC; kq.thuoc = true; doiVui(p, 10); } else doiVui(p, 3);
        }
      }
      await h.ghi(me, f);
      return Object.assign({ ok: true, dung }, kq, { pet: trangThaiPet(f), st: await h.trangThai(me, f) });
    }));
  }));

  // Ra lenh da thuoc: thu cung lam xiec (client), +vui 5 lan dau / ngay; 去拿 tha ve nong san (1 lan / ngay, khi vui)
  app.post('/api/farm/thucung/lenh', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, k = String((req.body || {}).k || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), p = can(f), hn = ngay(), l = LENH_MAP[k];
      if (!l) throw loi('Lệnh không hợp lệ.');
      if (!thuoc(p, k)) throw loi(p.ten + ' chưa thuộc lệnh này — dạy đủ ' + CAN_THUOC + ' buổi nhé.');
      const out = { ok: true, k, dien: l.dien };
      p.dung = p.dung && p.dung.d === hn ? p.dung : { d: hn, n: 0 };
      if (p.dung.n < DUNG_VUI_LAN) { p.dung.n++; doiVui(p, VUI_DUNG); }
      if (k === 'quna') {
        if (p.lay === hn) out.ly = 'Hôm nay ' + p.ten + ' đã tha đồ về rồi — mai nhé!';
        else if (vuiNay(p) < VUI_CAN) out.ly = p.ten + ' chưa đủ vui (cần ' + VUI_CAN + ') để đi lấy đồ — cho ăn hoặc chơi cùng nhé!';
        else {
          const q = quaLay(CAY, SP, h.lvTuXp(f.xp));
          if (q) {
            p.lay = hn;
            f.kho[q.k] = (f.kho[q.k] || 0) + q.n;
            out.qua = q;
          }
        }
      }
      await h.ghi(me, f);
      out.vui = Math.round(vuiNay(p));
      if (out.qua) out.st = await h.trangThai(me, f);
      return out;
    }));
  }));

  // Choi voi thu cung: 3 cau hoi tu bai em da hoc, 1 lan / ngay, moi cau dung +10 vui
  app.post('/api/farm/thucung/choi/bat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const ds = await h.phieuLuu.layCau(req.user, 'thung', CHOI_CAU, { nghe: false });
    if (ds.length < CHOI_CAU) return res.status(400).json({ error: 'Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi nhé!', chuaHoc: true });
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), p = can(f);
      if (p.choi === ngay()) throw loi('Hôm nay em đã chơi với ' + p.ten + ' rồi — mai chơi tiếp nhé!');
      p.cq = { ds, tl: [], bd: Date.now() };
      await h.ghi(me, f);
      return { ok: true, so: ds.length, ds: ds.map((q) => ({ k: q.k, hoi: q.hoi, lua: q.lua })) };
    }));
  }));

  app.post('/api/farm/thucung/choi/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), p = can(f), r = p.cq;
      if (!r || Date.now() - r.bd > HAN_CHOI) { delete p.cq; await h.ghi(me, f); throw loi('Lượt chơi đã hết giờ — bấm Chơi lại nhé.'); }
      if (p.choi === ngay()) { delete p.cq; await h.ghi(me, f); throw loi('Hôm nay em đã chơi rồi.'); }
      const q = r.ds[r.tl.length];
      if (!q) throw loi('Lượt này đã xong.');
      const dung = h.chamCau(q, b);
      r.tl.push(dung);
      h.onCau(f, q, b, dung);
      if (dung) { doiVui(p, VUI_CAU); f.xp += XP_CAU; }
      const kq = Object.assign({ ok: true, dung }, h.ketQuaCau(q));
      if (r.tl.length >= r.ds.length) {
        delete p.cq;
        p.choi = ngay();
        kq.ket = { dung: r.tl.filter(Boolean).length, so: r.ds.length, vui: Math.round(vuiNay(p)) };
        await h.ghi(me, f);
        kq.st = await h.trangThai(me, f);
        kq.pet = trangThaiPet(f);
        return kq;
      }
      await h.ghi(me, f);
      return kq;
    }));
  }));
}

module.exports = { LOAI, LENH, LENH_MAP, LV_MO, CAN_THUOC, DAY_NGAY, VUI_CAN, gan, _thu: { sachTen, vuiNay, doiVui, soKhop, quaLay, chanChuot, moLenh, thuoc, LAY_GT, LAY_TOI_DA } };
