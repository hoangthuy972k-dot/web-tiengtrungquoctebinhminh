// Nha may che bien 加工厂 · Nhan cong 雇工 · Xuat khau 出口 (co giao, 2026-11-13).
// Nguyen tac: kinh te nong trai luon day em HOC —
//  - Nha may: nguyen lieu la nong san em trong / nuoi (qua cau hoi tuoi nuoc, cho an); lam nhanh = tra loi 1–3 cau
//    tu bai em da hoc (khong mua bang xu duoc), toi da NHANH_NGAY lan / ngay.
//  - Nhan cong: chi di lam vao ngay em hoc du NC_SAO sao (ngay khong hoc thi nghi phep, khong tra luong);
//    KHONG tuoi nuoc, KHONG cho an (van la viec cua em, qua cau hoi).
//  - Xuat khau: sang cac vung dat tren Ban do phieu luu (phai toi tram 2 cua vung); giay to = cau hoi kieu cua vung;
//    tien hang tinh vao han muc ban moi ngay (con thieu thi nhan tiep ngay sau), toi da XK_TUAN chuyen / tuan.
// Tat ca chay tren may chu, trong khoa cua tung em (h.lanLuot).

// ---- Danh muc hang (dang ky vao SP o dau nong-trai.js) ----
// Nguyen lieu mua o Cho nong san (nl): khong ban lai duoc (chong mua re ban dat)
const NL = {
  duong: { zh: '糖', py: 'táng', vn: 'Đường', gia: 8, l: '袋' },
  yan: { zh: '盐', py: 'yán', vn: 'Muối', gia: 5, l: '袋' },
  siliao: { zh: '饲料', py: 'sìliào', vn: 'Thức ăn chăn nuôi', gia: 12, l: '袋', mo: 'Cho vật nuôi ăn kèm 1 bao: lần đó cho thêm 1 sản phẩm.' },
};
// Hang che bien (gc): can = nguyen lieu, phut = thoi gian lam 1 me
const HANG_GC = {
  mifen: { zh: '米粉', py: 'mǐfěn', vn: 'Bột gạo', can: { lua: 4 }, phut: 20, l: '袋' },
  yumimian: { zh: '玉米面', py: 'yùmǐmiàn', vn: 'Bột ngô', can: { ngo: 3 }, phut: 40, l: '袋' },
  mianbao: { zh: '面包', py: 'miànbāo', vn: 'Bánh mì', can: { mifen: 2, duong: 1 }, phut: 45, l: '个' },
  binggan: { zh: '饼干', py: 'bǐnggān', vn: 'Bánh quy', can: { yumimian: 1, trung: 2, duong: 1 }, phut: 60, l: '盒' },
  dangao: { zh: '蛋糕', py: 'dàngāo', vn: 'Bánh bông lan', can: { mifen: 2, trung: 2, sua: 1, duong: 1 }, phut: 120, l: '个' },
  nailao: { zh: '奶酪', py: 'nǎilào', vn: 'Phô mai', can: { sua: 3 }, phut: 90, l: '块' },
  suannai: { zh: '酸奶', py: 'suānnǎi', vn: 'Sữa chua', can: { sua: 2, duong: 1 }, phut: 60, l: '杯' },
  caomeizhi: { zh: '草莓汁', py: 'cǎoméi zhī', vn: 'Nước ép dâu', can: { dautay: 3 }, phut: 45, l: '杯' },
  putaozhi: { zh: '葡萄汁', py: 'pútao zhī', vn: 'Nước ép nho', can: { nho: 3 }, phut: 90, l: '瓶' },
  fanqiezhi: { zh: '番茄汁', py: 'fānqié zhī', vn: 'Nước ép cà chua', can: { cachua: 3, yan: 1 }, phut: 40, l: '杯' },
};
const XUONG = {
  bot: { zh: '磨坊', py: 'mòfáng', vn: 'Cối xay bột', lv: 5, xu: 300, r: ['mifen', 'yumimian'] },
  banh: { zh: '面包房', py: 'miànbāofáng', vn: 'Lò bánh', lv: 6, xu: 500, r: ['mianbao', 'binggan', 'dangao'] },
  sua: { zh: '乳品厂', py: 'rǔpǐnchǎng', vn: 'Xưởng sữa', lv: 7, xu: 700, r: ['nailao', 'suannai'] },
  ep: { zh: '果汁厂', py: 'guǒzhīchǎng', vn: 'Xưởng nước ép', lv: 8, xu: 900, r: ['caomeizhi', 'putaozhi', 'fanqiezhi'] },
};
const hangDoi = (lv) => (lv >= 12 ? 3 : 2); // so me xep hang moi nha may
const NHANH_NGAY = 8, NHANH_CHO_MS = 3 * 60000;
const soCauNhanh = (conMs) => (conMs <= 30 * 60000 ? 1 : conMs <= 120 * 60000 ? 2 : 3);

// ---- Nhan cong ----
const NC_VT = {
  thu: { zh: '收割工', py: 'shōugē gōng', vn: 'Người thu hoạch', luong: 15, viec: 'Thu hoạch ruộng đã chín' },
  chan: { zh: '饲养员', py: 'sìyǎngyuán', vn: 'Người chăn nuôi', luong: 12, viec: 'Nhặt sản phẩm của vật nuôi' },
  van: { zh: '运输工', py: 'yùnshū gōng', vn: 'Người vận chuyển', luong: 10, viec: 'Chở hàng nhà máy làm xong về kho, giao đơn hằng ngày đủ hàng' },
};
const NC_TEN = [
  { zh: '阿福', py: 'Ā Fú' }, { zh: '小莲', py: 'Xiǎo Lián' }, { zh: '大壮', py: 'Dà Zhuàng' },
  { zh: '阿兰', py: 'Ā Lán' }, { zh: '小虎', py: 'Xiǎo Hǔ' }, { zh: '老陈', py: 'Lǎo Chén' },
];
const NC_SAO = 10, NC_THUE = 40, NC_VUI_DAU = 70, NC_LOG = 40;
const soNc = (lv) => (lv >= 11 ? 3 : lv >= 9 ? 2 : lv >= 7 ? 1 : 0);

// ---- Xuat khau sang cac vung dat ----
const XK_HANG = {
  lang: ['lua', 'carot', 'ngo', 'trung', 'mifen', 'yumimian'],
  thung: ['caibap', 'cachua', 'dautay', 'duahau', 'caomeizhi', 'fanqiezhi'],
  pho: ['mianbao', 'binggan', 'dangao', 'sua', 'trungvit', 'khoaitay'],
  dao: ['nailao', 'suannai', 'mat', 'len', 'cadiec', 'cachep'],
  de: ['dangao', 'putaozhi', 'nailao', 'nho', 'mat', 'huongduong'],
};
const XK_GIO = { lang: 4, thung: 6, pho: 8, dao: 10, de: 12 };
const XK_TUAN = 6, XK_DANG = 3, XK_SO_CAU = 2, XK_CHO_MS = 60000;

const LUONG = {}, LUONG_PY = { '袋': 'dài', '盒': 'hé', '块': 'kuài' };
Object.keys(NL).forEach((k) => { LUONG[k] = NL[k].l; });
Object.keys(HANG_GC).forEach((k) => { LUONG[k] = HANG_GC[k].l; });
function dangKySp(SP) {
  Object.keys(NL).forEach((k) => { const x = NL[k]; SP[k] = { zh: x.zh, py: x.py, vn: x.vn, ban: x.gia, nl: 1 }; });
  // gia hang che bien = 1,4 x gia nguyen lieu + cong lam (theo thoi gian)
  Object.keys(HANG_GC).forEach((k) => {
    const x = HANG_GC[k];
    const goc = Object.keys(x.can).reduce((t, y) => t + SP[y].ban * x.can[y], 0);
    SP[k] = { zh: x.zh, py: x.py, vn: x.vn, ban: Math.round(goc * 1.4 + x.phut * 0.08 + 3), gc: 1 };
  });
}
// hang che bien cua cac nha may em da xay (de ra don hang hang ngay)
function hangCua(f) {
  const b = (f.xuong && f.xuong.b) || {};
  return Object.keys(b).reduce((a, k) => a.concat(XUONG[k] ? XUONG[k].r : []), []);
}
const DEP = 15; // diem dep cua 1 nha may dat tren nong trai
const CAT = { NL, HANG_GC, XUONG, LUONG, LUONG_PY, DEP, dangKySp, hangCua };

function gan(app, d, h, c) {
  const loi = h.loi, SP = h.SP;
  const ngay = () => d.vnDayKey();
  const xg = (f) => { f.xuong = f.xuong || {}; f.xuong.b = f.xuong.b || {}; f.xuong.nid = f.xuong.nid || 1; return f.xuong; };
  const congKho = (f, k, n) => { f.kho[k] = (f.kho[k] || 0) + n; };
  const truKho = (f, k, n) => { f.kho[k] -= n; if (!f.kho[k]) delete f.kho[k]; };

  /* ======================= NHA MAY ======================= */
  // Nha may la vat 'xg-<ma>' (2x2) tren nong trai. viTri: 'dat' = dang dat, 'tui' = trong tui do, '' = chua co vat (du lieu cu)
  const viTri = (f, bk) => (f.o.some((o) => o.k === 'xg-' + bk) ? 'dat' : (f.tui['xg-' + bk] || 0) > 0 ? 'tui' : '');
  // tim cho trong 2x2 (uu tien gan nha kho, quet tu tren xuong); khong con cho -> null
  function choTrong(f) {
    const kich = f.o.reduce((m, o) => ({ w: Math.max(m.w, o.x + h.rong(o)), h: Math.max(m.h, o.y + h.rong(o)) }), { w: 0, h: 0 });
    for (let y = 0; y < 40; y++) for (let x = 0; x < 40; x++) if (h.datDuoc(f, x, y, 2)) return { x, y };
    return kich && null;
  }
  // Tai khoan da xay nha may truoc khi nha may hien tren nong trai: tu dat vao cho trong, het cho thi cat vao tui
  function diTru(f) {
    const b = f.xuong && f.xuong.b;
    if (!b) return false;
    let doi = false;
    Object.keys(b).forEach((bk) => {
      if (!XUONG[bk] || viTri(f, bk)) return;
      const c0 = choTrong(f);
      if (c0) { f.nid = f.nid || 10; f.o.push({ id: f.nid++, k: 'xg-' + bk, x: c0.x, y: c0.y }); }
      else f.tui['xg-' + bk] = 1;
      doi = true;
    });
    return doi;
  }
  h.vaoHook.push(async (user, f) => diTru(f));
  // hang doi tung nha may (cho client ve trang thai tren nong trai: ranh / dang lam / xong)
  function xgTom(f) {
    const b = (f.xuong && f.xuong.b) || {}, ra = {};
    Object.keys(b).forEach((bk) => { ra[bk] = (b[bk].q || []).map((j) => ({ r: j.r, bd: j.bd, kt: j.kt })); });
    return ra;
  }
  // Chuyen cac me da xong vao kho; tra ve { k: n }
  function thuXong(f, chiB) {
    const x = xg(f), now = Date.now(), ra = {};
    Object.keys(x.b).forEach((b) => {
      if (chiB && b !== chiB) return;
      const q = x.b[b].q || [];
      x.b[b].q = q.filter((j) => {
        if (j.kt > now) return true;
        congKho(f, j.r, 1); ra[j.r] = (ra[j.r] || 0) + 1;
        return false;
      });
    });
    return ra;
  }
  function xuongChoHs(f, lv) {
    const x = xg(f), now = Date.now();
    const nh = f.xuong.nh && f.xuong.nh.d === ngay() ? f.xuong.nh.n : 0;
    return {
      now, hang: hangDoi(lv), nhanh: { con: Math.max(0, NHANH_NGAY - nh), toiDa: NHANH_NGAY },
      ds: Object.keys(XUONG).map((b) => {
        const m = XUONG[b], co = x.b[b];
        return { b, zh: m.zh, py: m.py, vn: m.vn, lv: m.lv, xu: m.xu, co: !!co, khoa: m.lv > lv, o: co ? viTri(f, b) : '',
          q: co ? (co.q || []).map((j) => ({ id: j.id, r: j.r, bd: j.bd, kt: j.kt, xong: j.kt <= now, chay: j.bd <= now && j.kt > now, cho: j.cho && j.cho > now ? j.cho : 0 })) : [],
          r: m.r.map((r) => ({ k: r, can: HANG_GC[r].can, phut: HANG_GC[r].phut, ban: SP[r].ban })) };
      }),
      cau: f.xuong.cau ? { b: f.xuong.cau.b, j: f.xuong.cau.j, da: f.xuong.cau.tl.length, so: f.xuong.cau.ds.length } : null,
    };
  }
  app.get('/api/farm/xuong', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id);
    res.json(xuongChoHs(f, h.lvTuXp(f.xp)));
  }));
  app.post('/api/farm/xuong', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, a = String(b.a || ''), bk = String(b.b || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp), x = xg(f), m = XUONG[bk];
      if (lv < h.MO_TN.xuong.lv) throw loi('Nhà máy mở ở cấp ' + h.MO_TN.xuong.lv + '.');
      if (!m) throw loi('Không có nhà máy này.');
      const kq = { ok: true };
      if (a === 'xay') {
        if (x.b[bk]) throw loi('Em đã xây ' + m.vn + ' rồi.');
        if (m.lv > lv) throw loi('Lên cấp ' + m.lv + ' để xây ' + m.vn + '.');
        if (f.xu < m.xu) throw loi('Cần ' + m.xu + ' xu để xây ' + m.vn + ' — em đang có ' + f.xu + ' xu.');
        // (client moi xay bang cach chon cho dat — act 'mua' k 'xg-<ma>'; duong cu nay tu tim cho trong)
        f.xu -= m.xu; x.b[bk] = { q: [], t: Date.now() }; f.xp += 15;
        diTru(f);
      } else if (a === 'lam') {
        const co = x.b[bk], r = String(b.r || ''), ct = HANG_GC[r];
        if (!co) throw loi('Xây ' + m.vn + ' trước đã.');
        if (viTri(f, bk) !== 'dat') throw loi(m.vn + ' đang cất trong túi đồ — đặt lên nông trại (Kho → Túi đồ) rồi mới chạy máy được.');
        if (!ct || m.r.indexOf(r) < 0) throw loi('Nhà máy này không làm món đó.');
        co.q = co.q || [];
        if (co.q.length >= hangDoi(lv)) throw loi('Hàng chờ đầy (' + hangDoi(lv) + ' mẻ) — đợi xong hoặc thu hàng trước.');
        Object.keys(ct.can).forEach((y) => { if ((f.kho[y] || 0) < ct.can[y]) throw loi('Chưa đủ ' + SP[y].vn.toLowerCase() + ' (cần ' + ct.can[y] + ', có ' + (f.kho[y] || 0) + ').' + (SP[y].nl ? ' Mua ở Chợ nông sản nhé.' : '')); });
        Object.keys(ct.can).forEach((y) => truKho(f, y, ct.can[y]));
        const now = Date.now(), cuoi = co.q.length ? co.q[co.q.length - 1].kt : now;
        const bd = Math.max(now, cuoi);
        co.q.push({ id: x.nid++, r, bd, kt: bd + ct.phut * 60000 });
        f.xp += 2;
      } else if (a === 'thu') {
        const ra = thuXong(f, bk);
        if (!Object.keys(ra).length) throw loi('Chưa có mẻ nào xong.');
        kq.ra = ra; f.xp += Object.values(ra).reduce((s, n) => s + n, 0) * 2;
      } else if (a === 'huy') {
        // huy me CHUA bat dau: tra nguyen lieu ve kho
        const co = x.b[bk], j = Number(b.j), now = Date.now();
        const i = co ? co.q.findIndex((y) => y.id === j) : -1;
        if (i < 0) throw loi('Không có mẻ này.');
        const job = co.q[i];
        if (job.bd <= now) throw loi('Mẻ đang làm thì không huỷ được.');
        Object.keys(HANG_GC[job.r].can).forEach((y) => congKho(f, y, HANG_GC[job.r].can[y]));
        const dt = job.kt - job.bd;
        co.q.splice(i, 1);
        co.q.forEach((y, k) => { if (k >= i) { y.bd -= dt; y.kt -= dt; } });
      } else throw loi('Hành động không hợp lệ.');
      await h.ghi(me, f);
      kq.xuong = xuongChoHs(f, h.lvTuXp(f.xp));
      kq.st = await h.trangThai(me, f);
      return kq;
    }));
  }));
  // Lam nhanh me dang chay: 1–3 cau tu bai em da hoc (tu vung); dung het -> me xong ngay, cac me sau doi len
  app.post('/api/farm/xuong/nhanh', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, bk = String(b.b || ''), j = Number(b.j);
    const ds = await h.phieuLuu.layCau(req.user, 'thung', 3, { nghe: false });
    if (ds.length < 3) return res.status(400).json({ error: 'Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi nhé!', chuaHoc: true });
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = xg(f), co = x.b[bk], now = Date.now();
      const job = co && (co.q || []).find((y) => y.id === j);
      if (!job) throw loi('Không có mẻ này.');
      if (job.kt <= now) throw loi('Mẻ này đã xong rồi — bấm Thu hàng.');
      if (job.bd > now) throw loi('Mẻ này chưa bắt đầu — chỉ làm nhanh được mẻ đang chạy.');
      if (job.cho && job.cho > now) throw loi('Vừa trả lời sai — đợi ' + Math.ceil((job.cho - now) / 60000) + ' phút rồi thử lại nhé.');
      const nh = f.xuong.nh && f.xuong.nh.d === ngay() ? f.xuong.nh.n : 0;
      if (nh >= NHANH_NGAY) throw loi('Hôm nay em đã làm nhanh ' + NHANH_NGAY + ' lần rồi.');
      const so = soCauNhanh(job.kt - now);
      f.xuong.cau = { b: bk, j, ds: ds.slice(0, so), tl: [], bd: now };
      await h.ghi(me, f);
      return { ok: true, so, ds: f.xuong.cau.ds.map((q) => ({ k: q.k, hoi: q.hoi, lua: q.lua })) };
    }));
  }));
  app.post('/api/farm/xuong/nhanhtl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = xg(f), r = x.cau, now = Date.now();
      if (!r || now - r.bd > 15 * 60000) { delete x.cau; await h.ghi(me, f); throw loi('Lượt câu hỏi đã hết hạn — bấm Làm nhanh lại nhé.'); }
      const q = r.ds[r.tl.length];
      const dung = h.chamCau(q, b);
      r.tl.push(dung);
      h.onCau(f, q, b, dung);
      const kq = Object.assign({ ok: true, dung }, h.ketQuaCau(q));
      const co = x.b[r.b], job = co && (co.q || []).find((y) => y.id === r.j);
      if (!dung) {
        if (job) job.cho = now + NHANH_CHO_MS;
        delete x.cau; kq.xong = true; kq.thanh = false;
      } else if (r.tl.length >= r.ds.length) {
        delete x.cau; kq.xong = true; kq.thanh = !!job && job.kt > now;
        if (kq.thanh) {
          const dt = job.kt - now, i = co.q.indexOf(job);
          co.q.forEach((y, k) => { if (k > i) { y.bd -= dt; y.kt -= dt; } else if (k === i) y.kt = now; });
          const nh = f.xuong.nh && f.xuong.nh.d === ngay() ? f.xuong.nh.n : 0;
          f.xuong.nh = { d: ngay(), n: nh + 1 };
          f.xp += 2;
          if (c.ldCong) c.ldCong(me);
        }
      }
      await h.ghi(me, f);
      if (kq.xong) { kq.xuong = xuongChoHs(f, h.lvTuXp(f.xp)); kq.st = await h.trangThai(me, f); }
      return kq;
    }));
  }));

  /* ======================= NHAN CONG ======================= */
  const nc = (f) => { f.nc = f.nc || {}; f.nc.ds = f.nc.ds || []; f.nc.log = f.nc.log || []; f.nc.nid = f.nc.nid || 1; return f.nc; };
  function ghiLog(f, w, s) { const n = nc(f); n.log.unshift({ t: Date.now(), id: w ? w.id : 0, ai: w ? w.ten.zh : '', s }); n.log = n.log.slice(0, NC_LOG); }
  // Giao don hang ngay ma kho da du (nguoi van chuyen)
  function giaoDon(f, me) {
    const ds = h.donHomNay(f, me, ngay()).ds;
    let n = 0, xu = 0;
    ds.forEach((o, i) => {
      if (f.don.x[i]) return;
      if (!Object.keys(o.can).every((k) => (f.kho[k] || 0) >= o.can[k])) return;
      Object.keys(o.can).forEach((k) => truKho(f, k, o.can[k]));
      f.don.x[i] = 1; f.xu += o.xu; f.xp += o.xp; n++; xu += o.xu;
    });
    return { n, xu };
  }
  // Moi lan em mo nong trai: nhan cong lam viec (chi ngay em hoc du NC_SAO sao). Tra ve true neu doi f
  async function chayNc(user, f) {
    const n = f.nc;
    if (!n || !n.ds || !n.ds.length) return false;
    const me = user.id, hom = ngay(), now = Date.now();
    const homNay = h.saoHoc(await d.loadStar(me)).homNay;
    if (!n.ngay || n.ngay.d !== hom) n.ngay = { d: hom, w: {} };
    let doi = false;
    const tom = [];
    let dacSanEm = null;
    for (const w of n.ds.slice()) {
      const st = n.ngay.w[w.id] = n.ngay.w[w.id] || { tt: '', thu: 0, nhat: 0, giao: 0, xg: 0 };
      if (homNay < NC_SAO) {
        if (!st.tt) { st.tt = 'nghi'; ghiLog(f, w, 'nghỉ phép hôm nay (em chưa học đủ ' + NC_SAO + ' sao) — không lấy lương'); doi = true; }
        continue;
      }
      if (st.tt === '' || st.tt === 'nghi') {
        const luong = NC_VT[w.vt].luong;
        if (f.xu >= luong) {
          f.xu -= luong; st.tt = 'lam'; st.luong = luong; w.vui = Math.min(100, (w.vui || NC_VUI_DAU) + 5);
          ghiLog(f, w, 'đến làm (em học đủ sao) · nhận lương ' + luong + ' xu');
        } else {
          st.tt = 'no'; w.vui = (w.vui || NC_VUI_DAU) - 30;
          ghiLog(f, w, 'không nhận được lương (thiếu xu) — buồn và nghỉ hôm nay');
          if (w.vui <= 0) { n.ds = n.ds.filter((y) => y !== w); ghiLog(f, w, 'đã xin nghỉ việc vì nhiều ngày không được trả lương'); tom.push({ s: w.ten.zh + ' đã nghỉ việc' }); }
        }
        doi = true;
      }
      if (st.tt !== 'lam') continue;
      const cong = { sp: {} };
      const congSp = (k, m) => { congKho(f, k, m); cong.sp[k] = (cong.sp[k] || 0) + m; };
      if (w.vt === 'thu') {
        const ds = f.o.filter((o) => o.k === 'o' && o.c && o.h <= now);
        if (ds.length) {
          if (dacSanEm == null) { try { dacSanEm = (await h.thiTruong(me)).dacSan[me] || ''; } catch (e) { dacSanEm = ''; } }
          const r = h.thuRuong(f, ds, dacSanEm, congSp);
          f.xp += r.xp; st.thu += ds.length; doi = true;
          ghiLog(f, w, 'thu hoạch ' + ds.length + ' ô ruộng'); tom.push({ s: w.ten.zh + ' thu hoạch ' + ds.length + ' ô', sp: cong.sp });
        }
      } else if (w.vt === 'chan') {
        const ds = f.o.filter((o) => h.CON[o.k] && o.h && o.h <= now);
        if (ds.length) {
          if (dacSanEm == null) { try { dacSanEm = (await h.thiTruong(me)).dacSan[me] || ''; } catch (e) { dacSanEm = ''; } }
          const r = h.nhatCon(f, ds, dacSanEm, congSp);
          f.xp += r.xp; st.nhat += ds.length; doi = true;
          ghiLog(f, w, 'nhặt sản phẩm của ' + ds.length + ' con vật'); tom.push({ s: w.ten.zh + ' nhặt ' + ds.length + ' sản phẩm', sp: cong.sp });
        }
      } else if (w.vt === 'van') {
        const ra = thuXong(f), so = Object.values(ra).reduce((s, m) => s + m, 0);
        if (so) { st.xg += so; doi = true; ghiLog(f, w, 'chở ' + so + ' mẻ hàng nhà máy về kho'); tom.push({ s: w.ten.zh + ' chở ' + so + ' mẻ hàng về kho', sp: ra }); }
        const g = giaoDon(f, me);
        if (g.n) { st.giao += g.n; doi = true; ghiLog(f, w, 'giao ' + g.n + ' đơn hàng (+' + g.xu + ' xu)'); tom.push({ s: w.ten.zh + ' giao ' + g.n + ' đơn · +' + g.xu + ' xu' }); }
      }
    }
    if (tom.length) { n.tb = (n.tb || []).concat(tom).slice(-6); doi = true; }
    return doi;
  }
  h.vaoHook.push(chayNc);
  // Tom tat nhan cong de ve tren nong trai (nha em: kem viec hom nay; ban sang tham: chi ten, viec, trang thai)
  function ncTom(f, rieng) {
    const n = f.nc;
    if (!n || !n.ds || !n.ds.length) return [];
    const hom = ngay(), dau = Date.parse(hom + 'T00:00:00Z') - 7 * 3600000;
    return n.ds.slice(0, 3).map((w) => {
      const st = n.ngay && n.ngay.d === hom ? n.ngay.w[w.id] : null;
      const x = { id: w.id, vt: w.vt, ten: w.ten, vui: w.vui == null ? NC_VUI_DAU : w.vui, tt: st ? st.tt : '',
        hom: { thu: st ? st.thu || 0 : 0, nhat: st ? st.nhat || 0 : 0, giao: st ? st.giao || 0 : 0, xg: st ? st.xg || 0 : 0 } };
      if (rieng) x.log = (n.log || []).filter((e) => e.id === w.id && e.t >= dau).slice(0, 4).map((e) => e.s);
      return x;
    });
  }
  function ncChoHs(f, lv, homNay) {
    const n = nc(f), hom = ngay();
    return {
      sao: NC_SAO, homNay, toiDa: soNc(lv), thue: NC_THUE, vt: NC_VT, capMo: [7, 9, 11],
      ds: n.ds.map((w) => {
        const st = n.ngay && n.ngay.d === hom ? n.ngay.w[w.id] || null : null;
        return { id: w.id, vt: w.vt, ten: w.ten, av: w.av, vui: w.vui, bd: w.bd, hom: st || { tt: homNay >= NC_SAO ? '' : 'nghi', thu: 0, nhat: 0, giao: 0, xg: 0 } };
      }),
      log: n.log.slice(0, 25),
    };
  }
  app.get('/api/farm/nc', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const r = await h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (await chayNc(req.user, f)) await h.ghi(me, f);
      return ncChoHs(f, h.lvTuXp(f.xp), h.saoHoc(await d.loadStar(me)).homNay);
    });
    res.json(r);
  }));
  app.post('/api/farm/nc', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, a = String(b.a || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp), n = nc(f);
      if (a === 'xem') { const tb = n.tb || []; delete n.tb; await h.ghi(me, f); return { ok: true, tb }; }
      if (lv < h.MO_TN.nc.lv) throw loi('Nhân công mở ở cấp ' + h.MO_TN.nc.lv + '.');
      if (a === 'thue') {
        const vt = String(b.vt || '');
        if (!NC_VT[vt]) throw loi('Không có việc này.');
        if (n.ds.length >= soNc(lv)) throw loi('Cấp ' + lv + ' thuê tối đa ' + soNc(lv) + ' người (cấp 9: 2 người, cấp 11: 3 người).');
        if (f.xu < NC_THUE) throw loi('Cần ' + NC_THUE + ' xu tiền thuê.');
        f.xu -= NC_THUE;
        const daCo = n.ds.map((w) => w.ten.zh);
        const ten = NC_TEN.filter((t) => daCo.indexOf(t.zh) < 0)[Math.floor(Math.random() * (NC_TEN.length - daCo.length))] || NC_TEN[0];
        const w = { id: n.nid++, vt, ten, av: Math.random().toString(36).slice(2, 10), vui: NC_VUI_DAU, bd: Date.now() };
        n.ds.push(w);
        ghiLog(f, w, 'bắt đầu làm ' + NC_VT[vt].vn.toLowerCase());
        await chayNc(req.user, f);
      } else if (a === 'cho') {
        const w = n.ds.find((y) => y.id === Number(b.id));
        if (!w) throw loi('Không có người này.');
        n.ds = n.ds.filter((y) => y !== w);
        ghiLog(f, w, 'đã thôi việc — cảm ơn em!');
      } else throw loi('Hành động không hợp lệ.');
      await h.ghi(me, f);
      return { ok: true, nc: ncChoHs(f, lv, h.saoHoc(await d.loadStar(me)).homNay), st: await h.trangThai(me, f) };
    }));
  }));

  /* ======================= XUAT KHAU ======================= */
  const tuan = () => d.vnWeekKey();
  function hat(s) { let x = 7; for (const ch of s) x = (x * 31 + ch.charCodeAt(0)) % 2147483647; return () => { x = (x * 48271) % 2147483647; return x / 2147483647; }; }
  // Hop dong tuan cua 1 vung (giong nhau voi moi em trong tuan): 3 dong hang theo chu de vung
  function hopDong(vk, tk) {
    const r = hat(vk + '|' + tk), ds = XK_HANG[vk].slice();
    for (let i = ds.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [ds[i], ds[j]] = [ds[j], ds[i]]; }
    // uu tien 1 hop dong hang che bien (thuong cao nhat)
    const gc = ds.filter((k) => SP[k].gc), tho = ds.filter((k) => !SP[k].gc);
    const chon = (gc.length ? [gc[0]] : []).concat(tho.slice(0, 2), gc.slice(1)).slice(0, 3);
    return chon.map((k, i) => {
      const laGc = !!SP[k].gc;
      const n = Math.max(2, Math.min(laGc ? 4 : 12, Math.round((laGc ? 160 : 140) / SP[k].ban)));
      const tl = laGc ? 1.45 + Math.round(r() * 3) * 0.05 : 1.2 + Math.round(r() * 4) * 0.05;
      return { i, k, n, tl: Math.round(tl * 100) / 100, xu: Math.round(SP[k].ban * n * tl), gc: laGc, xe: vk === 'dao' ? 'thuyen' : 'xe', gio: XK_GIO[vk] };
    });
  }
  const xkf = (f) => { if (!f.xk || f.xk.tuan !== tuan()) f.xk = { tuan: tuan(), da: [], gui: (f.xk && f.xk.gui || []).filter((g) => !g.xong), cho: {} }; return f.xk; };
  const XE = { xe: { zh: '卡车', py: 'kǎchē', vn: 'xe tải' }, thuyen: { zh: '船', py: 'chuán', vn: 'thuyền' } };
  function donZh(vk, hd) {
    const v = h.phieuLuu.VUNG_MAP[vk], l = h.LUONG[hd.k] || '个', x = XE[hd.xe];
    return { zh: '订单：' + hd.n + l + SP[hd.k].zh + '，用' + x.zh + '运到' + v.zh + '。', py: 'Dìngdān: ' + hd.n + ' ' + (h.LUONG_PY[l] || '') + ' ' + SP[hd.k].py + ', yòng ' + x.py + ' yùn dào ' + v.py + '.',
      vn: 'Đơn hàng: ' + hd.n + ' ' + SP[hd.k].vn.toLowerCase() + ', chở bằng ' + x.vn + ' tới ' + v.vn + '.' };
  }
  function xkChoHs(f, lv) {
    const x = xkf(f), now = Date.now();
    return {
      tuan: x.tuan, conTuan: Math.max(0, XK_TUAN - (x.soTuan || 0)), toiDaTuan: XK_TUAN, dangToiDa: XK_DANG,
      vung: h.phieuLuu.VUNG.map((v) => ({ k: v.k, zh: v.zh, py: v.py, vn: v.vn, mau: v.mau, toi: h.phieuLuu.daToi(f, v.k),
        hd: hopDong(v.k, x.tuan).map((hd) => Object.assign({ da: x.da.indexOf(v.k + ':' + hd.i) >= 0, co: f.kho[hd.k] || 0 }, hd, donZh(v.k, hd))) })),
      gui: x.gui.filter((g) => !g.xong).map((g) => ({ id: g.id, v: g.v, k: g.k, n: g.n, xu: g.xu, nhan: g.nhan || 0, bd: g.bd, den: g.den, toi: g.den <= now, xe: g.xe })),
      cau: x.cau ? { v: x.cau.v, i: x.cau.i } : null, cho: x.choDen && x.choDen > now ? x.choDen : 0,
    };
  }
  app.get('/api/farm/xk', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id);
    res.json(xkChoHs(f, h.lvTuXp(f.xp)));
  }));
  // Lam giay to: XK_SO_CAU cau kieu cua vung (tu bai em da hoc)
  app.post('/api/farm/xk/cau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, vk = String(b.v || ''), i = Number(b.i);
    if (!h.phieuLuu.VUNG_MAP[vk]) return res.status(400).json({ error: 'Không có vùng đất này.' });
    const ds = await h.phieuLuu.layCau(req.user, vk, XK_SO_CAU, { nghe: !!b.nghe });
    if (ds.length < XK_SO_CAU) return res.status(400).json({ error: 'Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để làm giấy tờ nhé!', chuaHoc: true });
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp), x = xkf(f), now = Date.now();
      if (lv < h.MO_TN.xk.lv) throw loi('Xuất khẩu mở ở cấp ' + h.MO_TN.xk.lv + '.');
      if (!h.phieuLuu.daToi(f, vk)) throw loi('Em cần tới trạm 2 của ' + h.phieuLuu.VUNG_MAP[vk].vn + ' trên Bản đồ phiêu lưu trước.');
      const hd = hopDong(vk, x.tuan)[i];
      if (!hd) throw loi('Không có hợp đồng này.');
      if (x.da.indexOf(vk + ':' + i) >= 0) throw loi('Hợp đồng này em đã giao tuần này rồi.');
      if ((x.soTuan || 0) >= XK_TUAN) throw loi('Tuần này em đã xuất ' + XK_TUAN + ' chuyến rồi.');
      if (x.gui.filter((g) => !g.xong).length >= XK_DANG) throw loi('Đang có ' + XK_DANG + ' chuyến hàng trên đường — nhận tiền chuyến cũ trước nhé.');
      if ((f.kho[hd.k] || 0) < hd.n) throw loi('Kho chưa đủ ' + hd.n + ' ' + SP[hd.k].vn.toLowerCase() + '.');
      if (x.choDen && x.choDen > now) throw loi('Giấy tờ vừa sai — đợi ' + Math.ceil((x.choDen - now) / 1000) + ' giây rồi làm lại nhé.');
      x.cau = { v: vk, i, ds, tl: [], bd: now };
      await h.ghi(me, f);
      return { ok: true, don: Object.assign({}, hd, donZh(vk, hd)), ds: ds.map((q) => ({ k: q.k, hoi: q.hoi, lua: q.lua })) };
    }));
  }));
  app.post('/api/farm/xk/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = xkf(f), r = x.cau, now = Date.now();
      if (!r || now - r.bd > 15 * 60000) { delete x.cau; await h.ghi(me, f); throw loi('Giấy tờ đã hết hạn — làm lại nhé.'); }
      const q = r.ds[r.tl.length];
      const dung = h.chamCau(q, b);
      r.tl.push(dung);
      h.onCau(f, q, b, dung);
      const kq = Object.assign({ ok: true, dung }, h.ketQuaCau(q));
      if (!dung) { delete x.cau; x.choDen = now + XK_CHO_MS; kq.xong = true; kq.gui = false; }
      else if (r.tl.length >= r.ds.length) {
        delete x.cau; kq.xong = true;
        const hd = hopDong(r.v, x.tuan)[r.i];
        // kiem lai luc xuat (kho co the da doi)
        if (x.da.indexOf(r.v + ':' + r.i) >= 0 || (x.soTuan || 0) >= XK_TUAN || x.gui.filter((g) => !g.xong).length >= XK_DANG) throw loi('Không xuất thêm được chuyến này.');
        if ((f.kho[hd.k] || 0) < hd.n) throw loi('Kho không còn đủ hàng để xuất.');
        truKho(f, hd.k, hd.n);
        x.da.push(r.v + ':' + r.i); x.soTuan = (x.soTuan || 0) + 1;
        x.nid = (x.nid || 0) + 1;
        const g = { id: x.tuan + '-' + x.nid, v: r.v, i: r.i, k: hd.k, n: hd.n, xu: hd.xu, nhan: 0, bd: now, den: now + hd.gio * 3600000, xe: hd.xe };
        x.gui.push(g);
        kq.gui = true; f.xp += 5;
        if (c.ldCong) c.ldCong(me);
      }
      await h.ghi(me, f);
      if (kq.xong) { kq.xk = xkChoHs(f, h.lvTuXp(f.xp)); kq.st = await h.trangThai(me, f); }
      return kq;
    }));
  }));
  // Nhan tien chuyen hang da toi: tinh vao han muc ban hang ngay; thieu han muc thi phan con lai nhan tiep hom sau
  app.post('/api/farm/xk/nhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String((req.body && req.body.id) || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = xkf(f), now = Date.now();
      const g = x.gui.find((y) => y.id === id && !y.xong);
      if (!g) throw loi('Không có chuyến hàng này.');
      if (g.den > now) throw loi('Hàng chưa tới nơi — còn ' + Math.ceil((g.den - now) / 60000) + ' phút.');
      const hm = await h.hanMuc(me, f);
      const con = g.xu - (g.nhan || 0), tra = Math.min(con, hm.con);
      if (tra < 1) throw loi('Hạn mức bán hôm nay đã hết (' + hm.toiDa + ' xu) — học thêm sao để nhận tiền (mỗi sao +' + h.BAN_MOI_SAO + ' xu), hoặc nhận tiếp ngày mai.');
      g.nhan = (g.nhan || 0) + tra;
      f.xu += tra; h.ghiBanNgay(f, tra);
      if (g.nhan >= g.xu) { g.xong = now; f.xp += 8; }
      x.gui = x.gui.filter((y) => !y.xong);
      await h.ghi(me, f);
      return { ok: true, xu: tra, con: g.xu - g.nhan, xk: xkChoHs(f, h.lvTuXp(f.xp)), st: await h.trangThai(me, f) };
    }));
  }));

  // tom tat cho trang thai chinh (cham do tren nut)
  h.ttThem.push((userId, f, lv) => {
    const now = Date.now(), x = f.xuong && f.xuong.b ? f.xuong.b : {};
    let xongXg = 0;
    Object.keys(x).forEach((b) => (x[b].q || []).forEach((j) => { if (j.kt <= now) xongXg++; }));
    const xkToi = f.xk && f.xk.gui ? f.xk.gui.filter((g) => !g.xong && g.den <= now).length : 0;
    return { xg: xgTom(f), nc: ncTom(f, true), ncSao: NC_SAO, xongXg, soXg: Object.keys(x).length, soNc: f.nc && f.nc.ds ? f.nc.ds.length : 0, ncTb: f.nc && f.nc.tb ? f.nc.tb.length : 0, xkToi };
  });
  Object.assign(h.CATALOG, { XG: { XUONG, HANG_GC, NL, NHANH_NGAY }, NC_VT, NC_SAO });
  return { thuXong, hopDong, xgTom, diTru, ncTom };
}

module.exports = { CAT, gan };
