// Mua Noel cho nong trai (/nong-trai) — 2026-11-17, co giao: "them phan trang tri cay thong noel cho thi tran,
// cay thong vat pham cho tung trang trai, hieu ung no, ngoi sao thi hoc sinh mua them, giao dien chung mua le hoi".
//  - Mua le: tu 17/11 den het 6/1 moi nam (gio Viet Nam). Ngoai mua nong trai y nhu cu; cay thong da mua van giu (do trang tri).
//  - Cay thong Noel 圣诞树 (TT 'noel-thong', 2x2, tra xu): chi ban trong mua. Do trang tri treo len cay cua em luu o
//    o.tr = { sao: 1, no: 2, ... } (mua bang xu qua hanh dong 'trangtri' trong lam() — nong-trai.js).
//    Gia do trang tri KHONG tinh vao gia phong to / thue tai san (chi tinh gia cay); diem dep: moi 2 mon +1, ngoi sao +3.
//  - Cay thong thi tran (moi lop 1 cay, ca lop Tu Do): moi ban treo 1 mon mien phi moi ngay, them mon thi tra it xu;
//    cang nhieu mon cay cang sang (MOC_SANG). Luu o farm_chung khoa 'noel:<pham vi>:<nam mua>'.
// May local thu ngoai mua: NT_NOEL=tat (tat mua) / NT_NOEL=bat (bat mua).
const MUA = { tu: '11-17', den: '01-06' }; // MM-DD, lap lai moi nam

function trongMua(ngay) {
  if (process.env.NT_NOEL === 'tat') return false;
  if (process.env.NT_NOEL === 'bat') return true;
  const md = String(ngay || '').slice(5, 10);
  return md >= MUA.tu || md <= MUA.den;
}
// Nam cua mua le (mua 2026 = 17/11/2026 .. 6/1/2027)
function namMua(ngay) {
  const y = Number(String(ngay).slice(0, 4));
  return String(ngay).slice(5, 10) <= MUA.den ? y - 1 : y;
}

// Do trang tri cho cay thong cua tung nong trai (gia xu, toi da moi cay)
const TR = {
  sao: { zh: '星星', py: 'xīngxing', vn: 'Ngôi sao trên ngọn', xu: 40, max: 1, ic: '⭐' },
  den: { zh: '彩灯', py: 'cǎidēng', vn: 'Dây đèn nháy', xu: 25, max: 2, ic: '💡' },
  no: { zh: '蝴蝶结', py: 'húdiéjié', vn: 'Nơ đỏ', xu: 12, max: 3, ic: '🎀' },
  chau: { zh: '彩球', py: 'cǎiqiú', vn: 'Quả châu', xu: 8, max: 6, ic: '🔴' },
  chuong: { zh: '铃铛', py: 'língdang', vn: 'Chuông vàng', xu: 15, max: 3, ic: '🔔' },
  keo: { zh: '拐杖糖', py: 'guǎizhàngtáng', vn: 'Kẹo gậy', xu: 10, max: 3, ic: '🍬' },
  qua: { zh: '礼物', py: 'lǐwù', vn: 'Hộp quà dưới gốc', xu: 18, max: 4, ic: '🎁' },
};
const CAY_K = 'noel-thong';
// Diem dep them tu do trang tri: moi 2 mon +1, co ngoi sao +3 (khong nhan theo co phong to)
function depTr(tr) {
  if (!tr || typeof tr !== 'object') return 0;
  let n = 0;
  Object.keys(TR).forEach((k) => { n += Math.max(0, Math.min(TR[k].max, Math.floor(Number(tr[k]) || 0))); });
  return Math.floor(n / 2) + (tr.sao ? 3 : 0);
}
const soTr = (tr) => Object.keys(TR).reduce((s, k) => s + ((tr && tr[k]) || 0), 0);
const TR_DU = Object.keys(TR).reduce((s, k) => s + TR[k].max, 0);

// Cay thong thi tran: cac mon ca lop treo chung
const TT_TR = {
  chau: { zh: '彩球', py: 'cǎiqiú', vn: 'Quả châu', ic: '🔴' },
  no: { zh: '蝴蝶结', py: 'húdiéjié', vn: 'Nơ đỏ', ic: '🎀' },
  chuong: { zh: '铃铛', py: 'língdang', vn: 'Chuông', ic: '🔔' },
  keo: { zh: '拐杖糖', py: 'guǎizhàngtáng', vn: 'Kẹo gậy', ic: '🍬' },
  tuyet: { zh: '雪花', py: 'xuěhuā', vn: 'Bông tuyết', ic: '❄️' },
  qua: { zh: '礼物', py: 'lǐwù', vn: 'Hộp quà', ic: '🎁' },
};
const TREO_GIA = 5;      // xu cho moi mon them (mon dau moi ngay mien phi)
const TREO_NGAY = 6;     // toi da 6 mon / ban / ngay
const TREO_TOI_DA = 300; // cay thong thi tran chua toi da 300 mon
const TREO_XP = 2;
// Cang nhieu mon cang sang: [so mon, ten]
const MOC_SANG = [
  { n: 0, vn: 'Chưa thắp đèn' }, { n: 5, vn: 'Dây đèn đầu tiên' }, { n: 15, vn: 'Lung linh' },
  { n: 30, vn: 'Ngôi sao sáng' }, { n: 60, vn: 'Lấp lánh' }, { n: 100, vn: 'Rực rỡ' },
];
const capSang = (n) => { let i = 0; while (i < MOC_SANG.length - 1 && n >= MOC_SANG[i + 1].n) i++; return i; };

const TT_MUC = { zh: '圣诞树', py: 'Shèngdànshù', vn: 'Cây thông Noel', lv: 1, xu: 80, dep: 12, w: 2, noel: 1 };
const CAT = { MUA, TR, TT_TR, TREO_GIA, TREO_NGAY, TREO_TOI_DA, MOC_SANG, CAY_K, TR_DU,
  CHUC: { zh: '圣诞快乐！', py: 'Shèngdàn kuàilè!', vn: 'Giáng sinh vui vẻ!' } };

function gan(app, d, h, c) {
  const muaNay = () => trongMua(d.vnDayKey());
  const tomMua = () => {
    const ngay = d.vnDayKey(), nam = namMua(ngay);
    return { mua: trongMua(ngay), nam, den: (nam + 1) + '-' + MUA.den };
  };
  h.ttThem.push(() => ({ noel: tomMua() }));
  const khoaCay = (pk, nam) => 'noel:' + pk + ':' + nam;

  function tomCay(cay, me, ten, laEm) {
    const ds = (cay && cay.ds) || [];
    const dem = {}, ai = {};
    ds.forEach((x) => { dem[x.k] = (dem[x.k] || 0) + 1; ai[x.ai] = (ai[x.ai] || 0) + 1; });
    const ngay = d.vnDayKey();
    const emNay = cay && cay.ng && cay.ng[me] && cay.ng[me].d === ngay ? cay.ng[me].n : 0;
    return {
      n: ds.length, cap: capSang(ds.length), dem,
      // moi mon: kieu + ten nguoi treo (tren cay ve theo thu tu treo)
      ds: ds.map((x) => ({ k: x.k, ten: ten[x.ai] || 'Bạn cũ', em: x.ai === me })),
      ai: Object.keys(ai).filter((id) => ten[id]).map((id) => ({ ten: ten[id], n: ai[id], em: id === me })).sort((a, b) => b.n - a.n).slice(0, 40),
      em: laEm ? { homNay: emNay, mien: emNay === 0, con: Math.max(0, TREO_NGAY - emNay) } : null,
    };
  }

  // Cay thong thi tran: ?lop=<id> xem cay cua lop khac (chi xem)
  app.get('/api/farm/noel/cay', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const m = tomMua();
    const pv = await c.phamVi(me);
    const muon = String(req.query.lop || '');
    let pk = pv.loai === 'lop' ? pv.k : '';
    if (muon && /^[\w-]{1,60}$/.test(muon) && 'lop:' + muon !== pk) pk = 'lop:' + muon;
    if (!pk) return res.json(Object.assign({ cay: null }, m));
    const [cay, ten] = await Promise.all([c.docC(khoaCay(pk, m.nam)), d.loadUserNames()]);
    const laEm = pk === pv.k;
    res.json(Object.assign({ cuaEm: laEm, cay: tomCay(cay, me, ten, laEm) }, m));
  }));

  app.post('/api/farm/noel/treo', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const k = String((req.body && req.body.k) || '');
    await h.traLoi(res, (async () => {
      if (!muaNay()) throw h.loi('Mùa Noel đã qua — hẹn em mùa sau nhé!');
      if (!TT_TR[k]) throw h.loi('Không có món trang trí này.');
      const pv = await c.phamVi(me);
      if (pv.loai !== 'lop') throw h.loi('Em chưa có thị trấn — mở nông trại để có lô đất trong thị trấn nhé.');
      const nam = namMua(d.vnDayKey()), kc = khoaCay(pv.k, nam);
      return h.lanLuot(me, () => c.khoaC(kc, async () => {
        const f = await h.doc(me);
        const ngay = d.vnDayKey();
        const cay = (await c.docC(kc)) || { ds: [], ng: {} };
        cay.ng = cay.ng || {};
        if (cay.ds.length >= TREO_TOI_DA) throw h.loi('Cây thông của thị trấn đã kín đồ trang trí rồi — đẹp quá!');
        const nay = cay.ng[me] && cay.ng[me].d === ngay ? cay.ng[me].n : 0;
        if (nay >= TREO_NGAY) throw h.loi('Hôm nay em đã treo ' + TREO_NGAY + ' món rồi — mai treo tiếp nhé!');
        const gia = nay === 0 ? 0 : TREO_GIA;
        if (gia && f.xu < gia) throw h.loi('Cần ' + gia + ' xu để treo thêm — em đang có ' + f.xu + ' xu.');
        f.xu -= gia;
        f.xp += TREO_XP;
        cay.ds.push({ ai: me, k, t: Date.now() });
        cay.ng[me] = { d: ngay, n: nay + 1 };
        await c.ghiC(kc, cay);
        await h.ghi(me, f);
        const ten = await d.loadUserNames();
        return { ok: true, gia, xp: TREO_XP, cay: tomCay(cay, me, ten, true), st: await h.trangThai(me, f) };
      }));
    })());
  }));
}

module.exports = { gan, trongMua, namMua, depTr, soTr, TR, TT_TR, TT_MUC, CAT, CAY_K };
