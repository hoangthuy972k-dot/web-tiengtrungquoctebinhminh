// Tin nhan TU DO giua ban cung lop o nong trai (co giao, 2026-11) — hoc sinh pho thong nen mac dinh co hang rao:
//  - chi ban CUNG LOP that su; moi lop co cong tac "Cho phép gõ tự do" (mac dinh BAT, thay co tat duoc bat cu luc nao)
//  - toi da 120 ky tu; loc truoc khi luu (nong-trai-tin-loc.js: tu tuc / xuc pham, so dien thoai, link, email, mang xa hoi)
//  - chung han muc voi tin mau (TIN_BAN_NGAY / ban, TIN_NGAY / ngay) + cho 10 giay giua 2 tin tu do
//  - khuyen khich tieng Trung: tin co >= 2 chu Han -> +1 xu (toi da 3 lan / ngay), goi y cau lay tu bai em da hoc
//  - luu o nong trai NGUOI NHAN: f.tn = [{ id, ai, tx, t, zh, bc }] (50 tin gan nhat, tu xoa sau 30 ngay) + 1 dong nhat ky 'tn'
//  - nguoi nhan: "Báo cáo" (an tin, danh dau cho thay co), "Chặn bạn này" (ban do khong gui tu do duoc nua; tin mau van duoc)
//  - thay co: /api/admin/farm-tin (xem tin theo lop, tin bi bao cao len dau, xoa, khoa nhan tu do N ngay, bat / tat ca lop)
// Chu luon hien bang esc() o client; may chu khong bao gio tra lai tu bi chan.
const Loc = require('./nong-trai-tin-loc');
const TN_GIU = 50, TN_HAN = 30 * 86400000, TN_CHO_MS = 10000, TN_ZH_NGAY = 3, TN_DAI = 120;
const CHUA_PHU_HOP = 'Tin nhắn chưa phù hợp, em viết lại nhé.';

module.exports = function ganTin(app, d, h, c) {
  const loi = h.loi, now = () => Date.now();
  const tnCua = (f) => { f.tn = (Array.isArray(f.tn) ? f.tn : []).filter((x) => now() - x.t < TN_HAN); return f.tn; };
  async function lopCua(uid) { const st = await d.loadClassState(); const m = st.members[uid]; return m ? m.classId : ''; }
  async function lopMo(classId) { const x = await c.docC('tncf:' + classId); return !(x && x.tat); }
  // me nhan tu do cho id duoc khong (cung lop + lop dang bat)
  async function duocNhan(me, id) {
    const a = await lopCua(me), b = await lopCua(id);
    if (!a || a !== b) return { duoc: false, ly: 'Chỉ viết tin tự do được cho bạn cùng lớp — với bạn lớp khác em dùng câu mẫu nhé.' };
    if (!(await lopMo(a))) return { duoc: false, ly: 'Lớp em đang tắt tin nhắn tự do — em dùng câu mẫu nhé.' };
    return { duoc: true, lop: a };
  }
  const soHan = (s) => (String(s).match(/[㐀-鿿]/g) || []).length;

  app.post('/api/farm/tn/gui/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    const tx = Loc.lamSach(req.body && req.body.tx).slice(0, TN_DAI * 2);
    if (id === me) return res.status(400).json({ error: 'Không tự nhắn cho mình được.' });
    if (!tx) return res.status(400).json({ error: 'Em chưa viết gì cả.' });
    const dk = await duocNhan(me, id);
    if (!dk.duoc) return res.status(400).json({ error: dk.ly });
    if (!Loc.kiem(tx).ok) return res.status(400).json({ error: CHUA_PHU_HOP });
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id), t = now(), ngay = d.vnDayKey();
      if (fm.tnKhoa && fm.tnKhoa > t) throw loi('Em đang tạm thời chưa dùng được tin nhắn tự do — em dùng câu mẫu nhé.');
      if ((ff.tnChan || []).indexOf(me) >= 0) throw loi('Bạn này hiện chưa nhận tin nhắn tự do — em gửi câu mẫu nhé.');
      if (fm.tnLuc && t - fm.tnLuc < TN_CHO_MS) throw loi('Chờ ' + Math.ceil((TN_CHO_MS - (t - fm.tnLuc)) / 1000) + ' giây rồi gửi tin tiếp nhé.');
      if (!fm.tin || fm.tin.d !== ngay) fm.tin = { d: ngay, dem: {}, tong: 0 };
      const n = fm.tin.dem[id] || 0;
      if (n >= h.TIN_BAN_NGAY) throw loi('Hôm nay em đã nhắn bạn này ' + h.TIN_BAN_NGAY + ' tin rồi — mai nói chuyện tiếp nhé!');
      if (fm.tin.tong >= h.TIN_NGAY) throw loi('Hôm nay em đã gửi ' + h.TIN_NGAY + ' tin rồi.');
      fm.tin.dem[id] = n + 1; fm.tin.tong++; fm.tnLuc = t;
      const zh = soHan(tx) >= 2;
      let xu = 0;
      if (zh) {
        if (!fm.tnZh || fm.tnZh.d !== ngay) fm.tnZh = { d: ngay, n: 0 };
        if (fm.tnZh.n < TN_ZH_NGAY) { fm.tnZh.n++; xu = 1; fm.xu += 1; }
      }
      const ds = tnCua(ff), tin = { id: t.toString(36) + Math.random().toString(36).slice(2, 7), ai: me, tx, t, zh: zh ? 1 : 0 };
      ds.push(tin);
      // giu 50 tin gan nhat (tin dang bi bao cao giu lai cho thay co xem)
      while (ds.length > TN_GIU) { const i = ds.findIndex((x) => !x.bc); ds.splice(i >= 0 ? i : 0, 1); }
      h.ghiNk(ff, { ai: me, l: 'tn', mid: tin.id });
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true, them: { xu }, zh, conTin: h.TIN_BAN_NGAY - n - 1, st: await h.trangThai(me, fm) };
    }));
  }));
  // Bao cao 1 tin em nhan duoc: an voi em, danh dau cho thay co
  app.post('/api/farm/tn/baocao', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, mid = String((req.body && req.body.id) || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = tnCua(f).find((y) => y.id === mid);
      if (!x) throw loi('Không tìm thấy tin này.');
      x.bc = now();
      await h.ghi(me, f);
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));
  // Chan / bo chan 1 ban (ban do khong gui tin tu do cho em duoc nua; cau mau van gui duoc)
  app.post('/api/farm/tn/chan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String((req.body && req.body.id) || ''), bo = !!(req.body && req.body.bo);
    if (!id || id === me) return res.status(400).json({ error: 'Không chặn được.' });
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      f.tnChan = (f.tnChan || []).filter((x) => x !== id);
      if (!bo) f.tnChan = f.tnChan.concat(id).slice(-50);
      await h.ghi(me, f);
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));
  // Trang thai nhan tin voi 1 ban + goi y cau tieng Trung (chi tu bai em da hoc / duoc giao)
  app.get('/api/farm/tn/tt/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    const [dk, f] = await Promise.all([duocNhan(me, id), h.doc(me)]);
    let goiY = [];
    if (dk.duoc) {
      const bo = await h.tuHocCua(req.user), cau = [], da = {};
      (bo.urls || []).forEach((u) => h.Ktbc.hoiThoaiBai(u).forEach((sc) => sc.lines.forEach((l) => { if (l.zh.length <= 16 && !da[l.zh]) { da[l.zh] = 1; cau.push({ zh: l.zh, py: l.py, vn: l.vn }); } })));
      if (cau.length < 6) h.Ktbc.nguonBai(bo.urls || [], bo.cap).vocab.forEach((v) => { if (v.ex_zh && v.ex_zh.length <= 16 && !da[v.ex_zh]) { da[v.ex_zh] = 1; cau.push({ zh: v.ex_zh, py: v.ex_py, vn: v.ex_vn }); } });
      for (let i = cau.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [cau[i], cau[j]] = [cau[j], cau[i]]; }
      goiY = cau.slice(0, 6);
    }
    const ngay = d.vnDayKey(), n = f.tin && f.tin.d === ngay ? f.tin.dem[id] || 0 : 0;
    res.json({ duoc: dk.duoc && !(f.tnKhoa > now()), ly: dk.duoc ? (f.tnKhoa > now() ? 'Em đang tạm thời chưa dùng được tin nhắn tự do — em dùng câu mẫu nhé.' : '') : dk.ly,
      goiY, conTin: Math.max(0, h.TIN_BAN_NGAY - n), dai: TN_DAI, zhCon: TN_ZH_NGAY - (f.tnZh && f.tnZh.d === ngay ? f.tnZh.n : 0) });
  }));
  // tin em nhan duoc (chua bao cao) cho nhat ky: id -> { tx, zh, ai }
  h.ttThem.push((userId, f) => {
    const m = {};
    (Array.isArray(f.tn) ? f.tn : []).forEach((x) => { if (!x.bc && now() - x.t < TN_HAN) m[x.id] = { tx: x.tx, zh: x.zh, ai: x.ai }; });
    return { tn: m, tnChan: f.tnChan || [] };
  });

  /* ---------------- thay co: xem / xoa / khoa / bat tat theo lop ---------------- */
  app.get('/api/admin/farm-tin', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const st = await d.loadClassState(), ten = await d.loadUserNames();
    const lops = [];
    for (const cl of st.classes) lops.push({ id: cl.id, ten: cl.name, mo: await lopMo(cl.id) });
    const lop = String(req.query.lop || (lops[0] && lops[0].id) || '');
    const ids = Object.keys(st.members).filter((u) => st.members[u].classId === lop);
    const tatCa = await h.docNhieu(Object.keys(st.members)), t = now(), ds = [], khoa = [];
    const farms = tatCa;
    // so tin dang bi bao cao cua tung lop (de thay co biet lop nao can xem)
    lops.forEach((l) => { l.bc = 0; });
    Object.keys(tatCa).forEach((id) => { const l = lops.find((x) => x.id === (st.members[id] || {}).classId); if (l) l.bc += (Array.isArray(tatCa[id].tn) ? tatCa[id].tn : []).filter((x) => x.bc && t - x.t < TN_HAN).length; });
    ids.forEach((id) => {
      const f = farms[id];
      if (!f) return;
      if (f.tnKhoa > t) khoa.push({ id, ten: ten[id] || '', den: f.tnKhoa });
      (Array.isArray(f.tn) ? f.tn : []).forEach((x) => { if (t - x.t < TN_HAN) ds.push({ id: x.id, den: id, tenDen: ten[id] || '', tu: x.ai, tenTu: ten[x.ai] || '', tx: x.tx, t: x.t, zh: x.zh, bc: x.bc || 0 }); });
    });
    ds.sort((a, b) => (b.bc ? 1 : 0) - (a.bc ? 1 : 0) || b.t - a.t);
    res.json({ lops, lop, ds: ds.slice(0, 300), khoa, soBaoCao: ds.filter((x) => x.bc).length, tongBaoCao: lops.reduce((a, l) => a + l.bc, 0) });
  }));
  app.post('/api/admin/farm-tin/xoa', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const den = String((req.body && req.body.den) || ''), mid = String((req.body && req.body.id) || '');
    await h.lanLuot(den, async () => {
      const f = await h.doc(den);
      f.tn = (Array.isArray(f.tn) ? f.tn : []).filter((x) => x.id !== mid);
      await h.ghi(den, f);
    });
    res.json({ ok: true });
  }));
  app.post('/api/admin/farm-tin/khoa', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const uid = String((req.body && req.body.userId) || ''), ngay = Math.max(0, Math.min(60, Math.floor(Number(req.body && req.body.ngay) || 0)));
    if (!uid) return res.status(400).json({ error: 'Thiếu học sinh.' });
    await h.lanLuot(uid, async () => {
      const f = await h.doc(uid);
      if (ngay) f.tnKhoa = now() + ngay * 86400000; else delete f.tnKhoa;
      await h.ghi(uid, f);
    });
    res.json({ ok: true });
  }));
  app.post('/api/admin/farm-tin/lop', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const lop = String((req.body && req.body.classId) || '');
    if (!lop) return res.status(400).json({ error: 'Thiếu lớp.' });
    await c.khoaC('tncf:' + lop, async () => c.ghiC('tncf:' + lop, { tat: !(req.body && req.body.mo), t: now() }));
    res.json({ ok: true });
  }));

  return { duocNhan };
};
