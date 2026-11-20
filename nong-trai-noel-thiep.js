// Mua Noel — Thiep Giang sinh 圣诞贺卡 + Treo tat Noel 圣诞袜 (2026-11-18).
//  - Thiep: chon 1 mau thiep (5 mau ve o client) + 1..3 cau chuc MAU (khong go tu do) -> gui bat ky ban nao co nong trai
//    (cung classId, ca thi tran Tu Do 'tudo') hoac "Gửi cô". Moi ngay toi da TH_NGAY thiep, moi ban 1 thiep / ngay, co 1 thiep / ngay.
//    Nguoi nhan: f.thN [{id, ai, m, c, t, mo}] (Hop thiep, mo xem co hieu ung). Nguoi gui: f.thD [{id, den, m, c, t}] + f.thNg {d, n, ai}.
//    Thiep gui co: KV farm_chung 'thiepco:<lop>:<nam>' { ds: [{id, ai, m, c, t}] } — thay co xem o trang Bao cao.
//  - Tat Noel: moi nong trai treo 1 chiec tat canh nha (trong mua). Ban nao sang tham cung bo 1 mon qua nho
//    (xu / hat giong / hang trong kho — khong hang quy) + 1..2 cau chuc mau. May chu tru do cua nguoi tang NGAY, giu trong tat;
//    chu nong trai chi mo tat tu 25/12 (gio VN) -> do cong vao kho / tui hat / xu. Nguoi tang: f.tatG {d, n, ai}.
//    Chu: f.tat { ds: [{id, ai, loai, k, n, c, t, nam, mo}] }.
//  - Ngay "hom nay" cua mua Noel: homNay() — may local dat NT_NOEL_NGAY=2026-12-25 (hoac POST /api/farm/noel/_ngay-thiep khi NT_THU=1).
// Cau chuc dung chung (client danh dau cau co chu em da hoc, xep len truoc).
const Noel = require('./nong-trai-noel');

const CAU = [
  { zh: '祝你圣诞快乐！', py: 'Zhù nǐ Shèngdàn kuàilè!', vn: 'Chúc bạn Giáng sinh vui vẻ!' },
  { zh: '圣诞快乐！', py: 'Shèngdàn kuàilè!', vn: 'Giáng sinh vui vẻ!' },
  { zh: '新年快乐！', py: 'Xīnnián kuàilè!', vn: 'Chúc mừng năm mới!' },
  { zh: '我喜欢你的农场。', py: 'Wǒ xǐhuan nǐ de nóngchǎng.', vn: 'Mình thích nông trại của bạn.', ban: 1 },
  { zh: '我们一起学习中文吧！', py: 'Wǒmen yìqǐ xuéxí Zhōngwén ba!', vn: 'Mình cùng học tiếng Trung nhé!' },
  { zh: '谢谢你！', py: 'Xièxie nǐ!', vn: 'Cảm ơn bạn!', ban: 1 },
  { zh: '你是我的好朋友。', py: 'Nǐ shì wǒ de hǎo péngyou.', vn: 'Bạn là bạn tốt của mình.', ban: 1 },
  { zh: '祝你学习进步！', py: 'Zhù nǐ xuéxí jìnbù!', vn: 'Chúc bạn học tiến bộ!', ban: 1 },
  { zh: '祝你天天开心！', py: 'Zhù nǐ tiāntiān kāixīn!', vn: 'Chúc bạn ngày nào cũng vui!' },
  { zh: '祝你身体健康！', py: 'Zhù nǐ shēntǐ jiànkāng!', vn: 'Chúc bạn mạnh khoẻ!' },
  { zh: '送给你一个礼物。', py: 'Sòng gěi nǐ yí ge lǐwù.', vn: 'Tặng bạn một món quà.', ban: 1 },
  { zh: '明年见！', py: 'Míngnián jiàn!', vn: 'Hẹn gặp năm sau!' },
  { zh: '我爱中文！', py: 'Wǒ ài Zhōngwén!', vn: 'Mình yêu tiếng Trung!' },
  { zh: '老师，谢谢您！', py: 'Lǎoshī, xièxie nín!', vn: 'Em cảm ơn cô ạ!', co: 1 },
  { zh: '老师，圣诞快乐！', py: 'Lǎoshī, Shèngdàn kuàilè!', vn: 'Cô ơi, Giáng sinh vui vẻ ạ!', co: 1 },
  { zh: '祝老师身体健康！', py: 'Zhù lǎoshī shēntǐ jiànkāng!', vn: 'Chúc cô mạnh khoẻ ạ!', co: 1 },
];
// Mau thiep (hinh ve o client: public/js/nong-trai-noel-thiep.js)
const MAU = {
  thong: { zh: '圣诞树', py: 'Shèngdànshù', vn: 'Cây thông' },
  tuyet: { zh: '雪人', py: 'xuěrén', vn: 'Người tuyết' },
  onggia: { zh: '圣诞老人', py: 'Shèngdàn lǎorén', vn: 'Ông già Noel' },
  chuong: { zh: '铃铛', py: 'língdang', vn: 'Chuông vàng' },
  dem: { zh: '星空', py: 'xīngkōng', vn: 'Đêm sao' },
};
const TH_NGAY = 5;      // thiep / ngay / em (gom ca thiep gui co)
const TH_CAU = 3;       // toi da 3 cau / thiep
const TH_GIU = 40;      // hop thiep giu 40 thiep gan nhat
const TH_XP = 3;        // gui 1 thiep +3 kinh nghiem
const TH_CO_TOI_DA = 400;
const TAT_NGAY = 3;     // 1 em bo toi da 3 mon qua / ngay (moi tat 1 mon / ngay)
const TAT_XU = 50;      // qua xu toi da 50 xu / lan
const TAT_SL = 10;      // hang / hat toi da 10 / lan
const TAT_CAU = 2;
const TAT_TOI_DA = 40;  // 1 chiec tat chua toi da 40 mon cho mo
const TAT_XP = 2;
const GIA_QUY = 95;     // giong Tu thien: hang ban >= 95 xu coi la quy, khong tang

// "Hom nay" cua mua Noel: dung chung ngayNoel() cua lich dem nguoc (nong-trai-noel-lich.js — doc NT_NOEL_NGAY va
// POST /api/farm/noel/_ngay); thieu file do thi tu doc NT_NOEL_NGAY. ngayThu: POST /api/farm/noel/_ngay-thiep (chi NT_THU=1).
let Lich = null;
try { Lich = require('./nong-trai-noel-lich'); } catch (e) { Lich = null; }
let ngayThu = '';
function homNay(d) {
  if (ngayThu) return ngayThu;
  if (Lich && typeof Lich.ngayNoel === 'function') return Lich.ngayNoel(d);
  const e = process.env.NT_NOEL_NGAY || '';
  return /^\d{4}-\d\d-\d\d$/.test(e) ? e : d.vnDayKey();
}
const ngayMoTat = (nam) => nam + '-12-25';

function gan(app, d, h, c) {
  const loi = h.loi, SP = h.SP, CAY = h.CAY;
  const muaNay = () => Noel.trongMua(homNay(d));
  const namNay = () => Noel.namMua(homNay(d));
  if (h.CATALOG) h.CATALOG.NOEL_TH = { cau: CAU, mau: MAU, thNgay: TH_NGAY, thCau: TH_CAU, tatNgay: TAT_NGAY, tatXu: TAT_XU, tatSl: TAT_SL, tatCau: TAT_CAU };
  const ridHop = (s) => /^[a-z0-9]{6,32}$/i.test(s);
  const spDuoc = (k) => { const s = SP[k]; return !!s && !s.hiem && !s.nl && !(s.ban >= GIA_QUY); };
  const hatDuoc = (k) => !!CAY[k] && !CAY[k].hiem;
  function tenMon(loai, k, n) {
    if (loai === 'xu') return { zh: '金币', py: 'jīnbì', vn: n + ' xu' };
    if (loai === 'hat') { const x = CAY[k] || {}; return { zh: (x.zh || '') + '种子', py: (x.py || '') + ' zhǒngzi', vn: n + ' hạt ' + String(x.vn || k).toLowerCase() }; }
    const x = SP[k] || {};
    return { zh: x.zh || '', py: x.py || '', vn: n + ' ' + String(x.vn || k).toLowerCase() };
  }
  // danh sach cau: so nguyen hop le, khong trung, 1..max; choCo = thiep gui co
  function cauHop(ds, max, choCo) {
    if (!Array.isArray(ds) || !ds.length || ds.length > max) return null;
    const out = [];
    for (const x of ds) {
      const i = Math.floor(Number(x));
      if (!Number.isInteger(i) || !CAU[i] || out.indexOf(i) >= 0) return null;
      if (CAU[i].co && !choCo) return null;
      if (CAU[i].ban && choCo) return null;
      out.push(i);
    }
    return out;
  }
  async function lopCua(uid) { const st = await d.loadClassState(); const m = st.members[uid]; return m ? m.classId : ''; }
  // Tat Noel: ai co nong trai cung bo qua duoc (2026-11-20 co giao: "bo gioi han cung thi tran, ai tang cung duoc")
  async function coNongTrai(me, id) {
    if (!id || id === me) return false;
    return !!(await h.docNhieu([id]))[id];
  }
  // % chu Han cua tung cau em da hoc (tu cac bai em hoc / duoc giao)
  async function phanHoc(user) {
    try {
      const bo = await h.tuHocCua(user);
      const chu = new Set(bo.chu || []);
      return CAU.map((x) => {
        const hs = [...x.zh].filter((ch) => /[㐀-鿿]/.test(ch));
        return hs.length ? Math.round(hs.filter((ch) => chu.has(ch)).length * 100 / hs.length) : 0;
      });
    } catch (e) { return CAU.map(() => 0); }
  }
  const ngayNg = (g, ngay) => (g && g.d === ngay ? g : { d: ngay, n: 0, ai: [] });

  // trang thai gui client: so thiep chua mo, so qua trong tat, mo tat duoc chua
  h.ttThem.push((userId, f) => {
    const thMoi = (Array.isArray(f.thN) ? f.thN : []).filter((x) => !x.mo).length;
    const ds = f.tat && Array.isArray(f.tat.ds) ? f.tat.ds.filter((x) => !x.mo) : [];
    const ngay = homNay(d);
    return { noelTh: { thMoi, tat: ds.length, tatMo: ds.some((x) => ngay >= ngayMoTat(x.nam)), ngayMo: ngayMoTat(namNay()), ngay } };
  });

  /* ================= THIEP ================= */
  app.get('/api/farm/noel/thiep', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const [st, ten, f, hoc] = await Promise.all([d.loadClassState(), d.loadUserNames(), h.doc(me), phanHoc(req.user)]);
    const lop = st.members[me] ? st.members[me].classId : '';
    const cls = lop ? st.classes.find((x) => x.id === lop) : null;
    const ids = lop ? Object.keys(st.members).filter((u) => st.members[u].classId === lop && u !== me && ten[u]) : [];
    const farms = await h.docNhieu(ids);
    const ngay = homNay(d), g = ngayNg(f.thNg, ngay);
    const ban = ids.filter((u) => farms[u]).map((u) => ({ id: u, ten: ten[u], av: farms[u].av || null, da: g.ai.indexOf(u) >= 0,
      chan: (farms[u].tnChan || []).indexOf(me) >= 0 })).sort((a, b) => a.ten.localeCompare(b.ten, 'vi'));
    res.json({
      mua: muaNay(), lop: cls ? cls.name : '', ban, hoc,
      nhan: (Array.isArray(f.thN) ? f.thN : []).map((x) => ({ id: x.id, ten: ten[x.ai] || 'Một bạn', m: x.m, c: x.c, t: x.t, mo: !!x.mo })),
      gui: (Array.isArray(f.thD) ? f.thD : []).slice(0, 20).map((x) => ({ id: x.id, ten: x.den === 'co' ? 'Cô giáo' : (ten[x.den] || 'Một bạn'), co: x.den === 'co', m: x.m, c: x.c, t: x.t })),
      homNay: g.n, con: Math.max(0, TH_NGAY - g.n), daCo: g.ai.indexOf('co') >= 0,
    });
  }));

  app.post('/api/farm/noel/thiep/gui', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    const den = String(b.den || ''), m = String(b.m || ''), rid = String(b.rid || ''), choCo = den === 'co';
    if (!muaNay()) return res.status(400).json({ error: 'Mùa Noel đã qua — hẹn em mùa sau nhé!' });
    if (!ridHop(rid)) return res.status(400).json({ error: 'Thiếu mã yêu cầu, em thử lại nhé.' });
    if (!MAU[m]) return res.status(400).json({ error: 'Em chọn mẫu thiệp nhé.' });
    const cau = cauHop(b.c, TH_CAU, choCo);
    if (!cau) return res.status(400).json({ error: 'Em chọn 1–' + TH_CAU + ' câu chúc trong danh sách nhé.' });
    const lop = await lopCua(me);
    if (!lop) return res.status(400).json({ error: 'Em chưa có thị trấn — mở nông trại để vào thị trấn nhé.' });
    // 2026-11-20 co giao: bo gioi han cung thi tran — gui thiep cho bat ky ban nao da mo nong trai
    if (!choCo && !(await coNongTrai(me, den))) return res.status(400).json({ error: 'Bạn này chưa mở nông trại.' });
    const ngay = homNay(d), nam = namNay(), t = Date.now();
    const kiem = (fm) => {
      fm.thD = Array.isArray(fm.thD) ? fm.thD : [];
      if (fm.thD.some((x) => x.id === rid)) return 'lap';
      const g = ngayNg(fm.thNg, ngay);
      if (g.n >= TH_NGAY) throw loi('Hôm nay em đã gửi ' + TH_NGAY + ' tấm thiệp rồi — mai gửi tiếp nhé!');
      if (g.ai.indexOf(den) >= 0) throw loi(choCo ? 'Hôm nay em đã gửi thiệp cho cô rồi — cô cảm ơn em nhé!' : 'Hôm nay em đã gửi thiệp cho bạn này rồi — mai gửi tiếp nhé!');
      return g;
    };
    const ghiGui = (fm, g) => {
      g.n++; g.ai.push(den); fm.thNg = g;
      fm.thD = [{ id: rid, den, m, c: cau, t }].concat(fm.thD).slice(0, 30);
      fm.xp = (fm.xp || 0) + TH_XP;
    };
    if (choCo) {
      const kc = 'thiepco:' + lop + ':' + nam;
      return h.traLoi(res, h.lanLuot(me, () => c.khoaC(kc, async () => {
        const fm = await h.doc(me), g = kiem(fm);
        if (g === 'lap') return { ok: true, lap: true, st: await h.trangThai(me, fm) };
        const x = (await c.docC(kc)) || { ds: [] };
        x.ds = [{ id: rid, ai: me, m, c: cau, t }].concat(x.ds || []).slice(0, TH_CO_TOI_DA);
        await c.ghiC(kc, x);
        ghiGui(fm, g);
        await h.ghi(me, fm);
        return { ok: true, xp: TH_XP, st: await h.trangThai(me, fm) };
      })));
    }
    await h.traLoi(res, h.haiLuot(me, den, async () => {
      const fm = await h.doc(me), ff = await h.doc(den);
      const g = kiem(fm);
      if (g === 'lap') return { ok: true, lap: true, st: await h.trangThai(me, fm) };
      if ((ff.tnChan || []).indexOf(me) >= 0) throw loi('Bạn này hiện chưa nhận thiệp từ em.');
      ff.thN = [{ id: rid, ai: me, m, c: cau, t, mo: 0 }].concat(Array.isArray(ff.thN) ? ff.thN : []).slice(0, TH_GIU);
      ghiGui(fm, g);
      h.ghiNk(ff, { ai: me, l: 'thiep', m });
      await h.ghi(den, ff);
      await h.ghi(me, fm);
      return { ok: true, xp: TH_XP, st: await h.trangThai(me, fm) };
    }));
  }));

  app.post('/api/farm/noel/thiep/mo', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String((req.body && req.body.id) || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      const x = (Array.isArray(f.thN) ? f.thN : []).find((y) => y.id === id);
      if (!x) throw loi('Không tìm thấy tấm thiệp này.');
      if (!x.mo) { x.mo = Date.now(); await h.ghi(me, f); }
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));

  /* ================= TAT NOEL ================= */
  function cacMon(f) {
    const hang = [];
    Object.keys(f.kho || {}).forEach((k) => { if (f.kho[k] > 0 && spDuoc(k)) hang.push({ loai: 'sp', k, n: f.kho[k] }); });
    Object.keys(f.hat || {}).forEach((k) => { if (f.hat[k] > 0 && hatDuoc(k)) hang.push({ loai: 'hat', k, n: f.hat[k] }); });
    return hang;
  }
  const chuaMo = (f) => (f.tat && Array.isArray(f.tat.ds) ? f.tat.ds.filter((x) => !x.mo) : []);

  // ?id=<ban> : xem tat cua ban (khi sang tham); khong co id = tat cua em
  app.get('/api/farm/noel/tat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.query.id || '') || me;
    const ngay = homNay(d), nam = namNay();
    if (id === me) {
      const [f, ten] = await Promise.all([h.doc(me), d.loadUserNames()]);
      const ds = f.tat && Array.isArray(f.tat.ds) ? f.tat.ds : [];
      const cho = ds.filter((x) => !x.mo);
      // chua toi ngay mo: chi biet so qua (bat ngo!), khong lo ai tang gi
      const daMo = ds.filter((x) => x.mo).slice(0, 40).map((x) => ({ id: x.id, ten: ten[x.ai] || 'Một bạn', loai: x.loai, k: x.k, n: x.n, c: x.c, t: x.t }));
      return res.json({ cuaEm: true, mua: muaNay(), ngay, ngayMo: ngayMoTat(nam), n: cho.length, moDuoc: cho.some((x) => ngay >= ngayMoTat(x.nam)), daMo });
    }
    const [fb, fm, cung] = await Promise.all([h.doc(id), h.doc(me), coNongTrai(me, id)]);
    const g = ngayNg(fm.tatG, ngay);
    res.json({ cuaEm: false, mua: muaNay(), ngay, ngayMo: ngayMoTat(nam), n: chuaMo(fb).length, cung, da: g.ai.indexOf(id) >= 0,
      con: Math.max(0, TAT_NGAY - g.n), day: chuaMo(fb).length >= TAT_TOI_DA, xu: fm.xu, hang: cung ? cacMon(fm) : [] });
  }));

  app.post('/api/farm/noel/tat/bo', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    const id = String(b.id || ''), loai = String(b.loai || ''), k = String(b.k || ''), n = Math.floor(Number(b.n)), rid = String(b.rid || '');
    if (!muaNay()) return res.status(400).json({ error: 'Mùa Noel đã qua — hẹn em mùa sau nhé!' });
    if (!ridHop(rid)) return res.status(400).json({ error: 'Thiếu mã yêu cầu, em thử lại nhé.' });
    if (['xu', 'sp', 'hat'].indexOf(loai) < 0) return res.status(400).json({ error: 'Em chọn quà để bỏ vào tất nhé.' });
    const max = loai === 'xu' ? TAT_XU : TAT_SL;
    if (!Number.isInteger(n) || n < 1 || n > max) return res.status(400).json({ error: 'Quà nhỏ thôi em: tối đa ' + max + (loai === 'xu' ? ' xu' : ' món') + ' mỗi lần.' });
    if (loai === 'sp' && !spDuoc(k)) return res.status(400).json({ error: SP[k] ? 'Món này quý quá — em chọn món khác nhé.' : 'Không có món này.' });
    if (loai === 'hat' && !hatDuoc(k)) return res.status(400).json({ error: CAY[k] ? 'Hạt giống quý không tặng được, em chọn hạt khác nhé.' : 'Không có hạt giống này.' });
    const cau = cauHop(b.c, TAT_CAU, false);
    if (!cau) return res.status(400).json({ error: 'Em chọn 1–' + TAT_CAU + ' câu chúc nhé.' });
    if (!(await coNongTrai(me, id))) return res.status(400).json({ error: 'Bạn này chưa mở nông trại.' });
    const ngay = homNay(d), nam = namNay();
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id), t = Date.now();
      ff.tat = ff.tat && Array.isArray(ff.tat.ds) ? ff.tat : { ds: [] };
      if (ff.tat.ds.some((x) => x.id === rid)) return { ok: true, lap: true, st: await h.trangThai(me, fm) };
      if ((ff.tnChan || []).indexOf(me) >= 0) throw loi('Bạn này hiện chưa nhận quà từ em.');
      const g = ngayNg(fm.tatG, ngay);
      if (g.ai.indexOf(id) >= 0) throw loi('Hôm nay em đã bỏ quà vào tất của bạn này rồi — mai nhé!');
      if (g.n >= TAT_NGAY) throw loi('Hôm nay em đã bỏ ' + TAT_NGAY + ' món quà rồi — mai tặng tiếp nhé!');
      if (chuaMo(ff).length >= TAT_TOI_DA) throw loi('Tất của bạn đầy quà rồi!');
      if (loai === 'xu') {
        if (!(fm.xu >= n)) throw loi('Em chỉ có ' + (fm.xu || 0) + ' xu thôi.');
        fm.xu -= n;
      } else {
        const kho = loai === 'sp' ? 'kho' : 'hat';
        const co = (fm[kho] && fm[kho][k]) || 0;
        if (co < n) throw loi(co ? 'Em chỉ còn ' + co + ' thôi.' : 'Em không còn món này.');
        fm[kho][k] = co - n; if (!fm[kho][k]) delete fm[kho][k];
      }
      // tat chi giu qua chua mo + qua da mo cua mua nay
      ff.tat.ds = [{ id: rid, ai: me, loai, k: loai === 'xu' ? '' : k, n, c: cau, t, nam, mo: 0 }]
        .concat(ff.tat.ds.filter((x) => !x.mo || x.nam === nam)).slice(0, TAT_TOI_DA + 40);
      g.n++; g.ai.push(id); fm.tatG = g;
      fm.xp = (fm.xp || 0) + TAT_XP;
      h.ghiNk(fm, { ai: id, l: 'tatdi', loai, k: loai === 'xu' ? '' : k, n });
      h.ghiNk(ff, { ai: me, l: 'tatden' });
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true, xp: TAT_XP, n: chuaMo(ff).length, st: await h.trangThai(me, fm) };
    }));
  }));

  // Mo tat (tu 25/12): moi mon qua toi han -> cong vao xu / kho / tui hat
  app.post('/api/farm/noel/tat/mo', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const ten = await d.loadUserNames();
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), ngay = homNay(d), t = Date.now();
      const ds = chuaMo(f).filter((x) => ngay >= ngayMoTat(x.nam));
      if (!ds.length) {
        if (chuaMo(f).length) throw loi('Chưa tới đêm Giáng sinh! Tất mở được từ ngày ' + ngayMoTat(namNay()).split('-').reverse().slice(0, 2).join('/') + ' nhé.');
        throw loi('Tất của em chưa có quà nào.');
      }
      ds.forEach((x) => {
        if (x.loai === 'xu') f.xu = (f.xu || 0) + x.n;
        else { const kho = x.loai === 'sp' ? 'kho' : 'hat'; f[kho] = f[kho] || {}; f[kho][x.k] = (f[kho][x.k] || 0) + x.n; }
        x.mo = t;
      });
      h.ghiNk(f, { l: 'tatmo', n: ds.length });
      await h.ghi(me, f);
      return { ok: true, ds: ds.map((x) => ({ id: x.id, ten: ten[x.ai] || 'Một bạn', loai: x.loai, k: x.k, n: x.n, c: x.c })), st: await h.trangThai(me, f) };
    }));
  }));

  if (process.env.NT_THU === '1') {
    // CHI MAY THU: doi "hom nay" cua mua Noel ({ngay:'2026-12-25'}; rong = ngay that)
    app.post('/api/farm/noel/_ngay-thiep', d.requireAuth, (req, res) => {
      const v = String((req.body && req.body.ngay) || '');
      ngayThu = /^\d{4}-\d\d-\d\d$/.test(v) ? v : '';
      res.json({ ok: true, ngay: homNay(d) });
    });
  }

  /* ================= thay co: thiep + qua trong tat theo lop (chi xem) ================= */
  app.get('/api/admin/farm-noel', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const st = await d.loadClassState(), ten = await d.loadUserNames(), nam = namNay();
    const lop = String(req.query.lop || (st.classes[0] && st.classes[0].id) || '');
    const ids = Object.keys(st.members).filter((u) => st.members[u].classId === lop);
    const farms = await h.docNhieu(ids);
    const cauZh = (cs) => (cs || []).map((i) => (CAU[i] ? CAU[i].zh : '')).join(' ');
    const the = [], tat = [];
    ids.forEach((u) => {
      const f = farms[u];
      if (!f) return;
      (Array.isArray(f.thN) ? f.thN : []).forEach((x) => the.push({ tenTu: ten[x.ai] || '(đã xoá tài khoản)', tenDen: ten[u] || '', m: (MAU[x.m] || {}).vn || x.m, cau: cauZh(x.c), t: x.t, mo: !!x.mo }));
      (f.tat && Array.isArray(f.tat.ds) ? f.tat.ds : []).forEach((x) => { const mm = tenMon(x.loai, x.k, x.n); tat.push({ tenTu: ten[x.ai] || '(đã xoá tài khoản)', tenDen: ten[u] || '', mon: mm.vn + (mm.zh ? ' ' + mm.zh : ''), cau: cauZh(x.c), t: x.t, mo: !!x.mo }); });
    });
    the.sort((a, b) => b.t - a.t); tat.sort((a, b) => b.t - a.t);
    // thiep gui co: moi lop (ca Tu Do), moi nhat truoc
    const co = [];
    await Promise.all(st.classes.map(async (cl) => {
      const x = await c.docC('thiepco:' + cl.id + ':' + nam);
      ((x && x.ds) || []).forEach((y) => co.push({ lop: cl.name, tenTu: ten[y.ai] || '(đã xoá tài khoản)', m: (MAU[y.m] || {}).vn || y.m, cau: cauZh(y.c), vn: (y.c || []).map((i) => (CAU[i] ? CAU[i].vn : '')).join(' '), t: y.t }));
    }));
    co.sort((a, b) => b.t - a.t);
    res.json({ lop, nam, the: the.slice(0, 200), tat: tat.slice(0, 200), co: co.slice(0, 200) });
  }));

  return { homNay: () => homNay(d) };
}

module.exports = { gan, homNay, CAU, MAU };
