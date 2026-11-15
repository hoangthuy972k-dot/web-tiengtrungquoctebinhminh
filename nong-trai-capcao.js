// Nong trai cap cao (2026-11-15, co giao: "them level cho nong trai, level cao se kho hon va nhieu dieu thu vi hon").
// Gan cuoi nong-trai.js voi helper h (hKt). Moi thu chay tren may chu, trong khoa cua tung em (h.lanLuot / h.haiLuot).
//  - GET /api/farm/capdo        : trang "Cấp độ & phần thưởng" (bac, moc cap, mo khoa tung cap, thuong) — tinh tu danh muc that
//  - Nha kinh 温室 (cap 35)     : xay 1 lan bang xu; dat tren nong trai + ngay hoc du NK_SAO sao -> cay khong bi thien tai thoi tiet
//  - Nhiem vu chuyen gia (40)   : moi tuan 10 cau KHO NHAT tu bai em da hoc (DO_KHO cao nhat), dat CG_DAT -> hat quy + xu (+ dinh dong lan dau)
//  - Le hoi nong trai (50)      : moi thang mo 1 le hoi 48 gio; ban sang du tra loi 1 cau tu BAI CUA BAN AY -> ca hai co xu
//  - Kem hoc tro 师徒 (60)      : kem toi da 3 ban cap <= 40; moi ngay 1 loi khuyen; thuong CHI khi tro hoc du HT_SAO sao hom do
// Quy tac cau hoi: chi tu bai em da hoc / duoc giao (h.tuHocCua) — khong co bai thi khong ra cau.
const XuongCat = require('./nong-trai-xuong').CAT;

const NK_XU = 2500;
const CG_SO = 10, CG_DAT = 8, CG_LUOT = 3, CG_XU = 120, CG_QUY = 2;
const LE_MS = 48 * 3600000, LE_XU_CHU = 15, LE_XU_KHACH = 5, LE_KHACH_MAX = 12, LE_KHACH_QUY = 5;
const HT_TOI_DA = 3, HT_LV_TRO = 40, HT_SAO = 20, HT_XU_THAY = 25, HT_XU_TRO = 10;
// Loi khuyen hoc tap (thay gui cho tro) — cau ngan HSK 1–2
const HT_MEO = [
  { zh: '每天学一点儿。', py: 'Měitiān xué yìdiǎnr.', vn: 'Mỗi ngày học một chút.' },
  { zh: '先听，再说。', py: 'Xiān tīng, zài shuō.', vn: 'Nghe trước, rồi mới nói.' },
  { zh: '多写汉字！', py: 'Duō xiě Hànzì!', vn: 'Viết chữ Hán nhiều vào!' },
  { zh: '不懂就问老师。', py: 'Bù dǒng jiù wèn lǎoshī.', vn: 'Không hiểu thì hỏi thầy cô.' },
  { zh: '复习昨天的生词。', py: 'Fùxí zuótiān de shēngcí.', vn: 'Ôn lại từ mới hôm qua.' },
  { zh: '大声读课文。', py: 'Dàshēng dú kèwén.', vn: 'Đọc to bài khoá.' },
  { zh: '和朋友一起练习。', py: 'Hé péngyou yìqǐ liànxí.', vn: 'Luyện tập cùng bạn bè.' },
  { zh: '加油，你能行！', py: 'Jiāyóu, nǐ néng xíng!', vn: 'Cố lên, bạn làm được!' },
];

module.exports = function ganCapCao(app, d, h) {
  const loi = h.loi;
  const ngay = () => d.vnDayKey();
  const thang = () => d.vnDayKey().slice(0, 7);
  const homNayCua = async (id) => h.saoHoc(await d.loadStar(id)).homNay;
  const moTn = (f, k) => h.lvTuXp(f.xp) >= h.MO_TN[k].lv;
  const canMo = (f, k) => { if (!moTn(f, k)) throw loi(h.MO_TN[k].vn + ' mở ở cấp ' + h.MO_TN[k].lv + ' — em đang cấp ' + h.lvTuXp(f.xp) + '.'); };
  const hatQuy = (f, n) => { f.hat = f.hat || {}; const ra = {}; for (let i = 0; i < n; i++) { const k = h.CAY_HIEM[Math.floor(Math.random() * h.CAY_HIEM.length)]; f.hat[k] = (f.hat[k] || 0) + 1; ra[k] = (ra[k] || 0) + 1; } return ra; };
  const cauChoHs = (q) => ({ k: q.k, hoi: q.hoi, lua: q.lua });

  /* ======================= CAP DO & PHAN THUONG ======================= */
  // Mo khoa cua tung cap 1..100, tinh tu danh muc that (doi danh muc -> trang tu doi)
  let moCache = null;
  function moKhoa() {
    if (moCache) return moCache;
    const ds = Array.from({ length: h.LV_TOI_DA + 1 }, () => []);
    const vao = (lv, x) => { if (lv >= 1 && lv <= h.LV_TOI_DA) ds[lv].push(x); };
    Object.keys(h.CAY).forEach((k) => { const c = h.CAY[k]; if (!c.hiem) vao(c.lv, { loai: 'cay', k, zh: c.zh, py: c.py, vn: c.vn, hinh: 'sp-' + k }); });
    Object.keys(h.CON).forEach((k) => { const c = h.CON[k]; vao(c.lv, { loai: 'con', k, zh: c.zh, py: c.py, vn: c.vn, hinh: k, sao: c.sao }); });
    Object.keys(h.TT).forEach((k) => { const t = h.TT[k]; if (!t.doc || t.moc) vao(t.lv, { loai: t.moc ? 'moc' : 'tt', k, zh: t.zh, py: t.py, vn: t.vn, hinh: k, dep: t.dep, sao: t.sao || 0, xu: t.xu || 0 }); });
    Object.keys(XuongCat.XUONG).forEach((k) => { const x = XuongCat.XUONG[k]; vao(x.lv, { loai: 'xuong', k, zh: x.zh, py: x.py, vn: x.vn, hinh: 'xg-' + k, xu: x.xu }); });
    Object.keys(XuongCat.HANG_GC).forEach((k) => {
      const r = XuongCat.HANG_GC[k], xg = Object.keys(XuongCat.XUONG).find((b) => XuongCat.XUONG[b].r.indexOf(k) >= 0);
      const lv = Math.max(r.lv || 0, xg ? XuongCat.XUONG[xg].lv : 1);
      vao(lv, { loai: 'ct', k, zh: r.zh, py: r.py, vn: r.vn, hinh: 'sp-' + k, xg });
    });
    Object.keys(h.MON).forEach((k) => { const m = h.MON[k]; if (m.lv) vao(m.lv, { loai: 'mon', k, zh: m.zh, py: m.py, vn: m.vn, hinh: 'sp-' + k }); });
    Object.keys(h.MO_TN).forEach((k) => { const m = h.MO_TN[k]; if (m.lv > 1) vao(m.lv, { loai: 'tn', k, zh: m.zh, vn: m.vn }); });
    h.DAT.forEach((x, i) => { if (i && x.lv) vao(x.lv, { loai: 'dat', k: 'dat' + i, zh: x.zh || '扩建', vn: 'Đất ' + x.w + '×' + x.h + (x.vn ? ' · ' + x.vn : '') }); });
    h.NHA.forEach((x, i) => { if (x && x.lv) vao(x.lv, { loai: 'nha', k: 'nha-' + i, zh: x.zh, py: x.py, vn: x.vn, hinh: 'nha-' + i }); });
    h.BAC.forEach((b, i) => {
      if (i) vao(b.tu, { loai: 'bac', k: 'bac-' + i, zh: b.zh, py: b.py, vn: b.vn, ic: b.ic });
      const dk = h.DO_KHO[i], cu = h.DO_KHO[i - 1];
      if (i && cu && JSON.stringify(dk) !== JSON.stringify(cu)) vao(b.tu, { loai: 'kho', k: 'kho' + i, vn: moTaKho(dk) });
    });
    moCache = ds;
    return ds;
  }
  function moTaKho(dk) {
    const p = [];
    if (dk.lua) p.push(dk.lua + ' lựa chọn mỗi câu từ vựng');
    if (!dk.py) p.push('cá bé và câu tưới nước không còn pinyin');
    if (dk.np) p.push('thêm ' + dk.np + ' câu ngữ pháp / xếp câu / nối từ trong thử thách chữ Hán');
    if (dk.giay < 1) p.push('đồng hồ câu cá còn ' + Math.round(dk.giay * 100) + '%');
    p.push('hộp quà cần đúng ' + dk.chDat + '/10');
    return 'Câu hỏi khó hơn: ' + p.join(', ') + '.';
  }
  app.get('/api/farm/capdo', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id), lv = h.lvTuXp(f.xp), mo = moKhoa();
    const ds = [];
    for (let n = 1; n <= h.LV_TOI_DA; n++) ds.push({ lv: n, xp: h.XP_LV[n], buoc: n > 1 ? h.XP_LV[n] - h.XP_LV[n - 1] : 0, mo: mo[n], thuong: n > 1 ? h.thuongCap(n) : null });
    res.json({ lv, xp: f.xp, bac: h.bacCua(lv), lvT: f.lvT || 0, ds, moc: h.MOC_CAP, nk: !!f.nhkCo, nkXu: NK_XU });
  }));

  /* ======================= NHA KINH 温室 ======================= */
  app.post('/api/farm/nhakinh/xay', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      canMo(f, 'nhk');
      if (f.nhkCo) throw loi('Em đã xây nhà kính rồi — nếu chưa thấy, mở Kho → Túi đồ để đặt lên nông trại.');
      if (f.xu < NK_XU) throw loi('Cần ' + NK_XU + ' xu để xây nhà kính — em đang có ' + f.xu + ' xu.');
      f.xu -= NK_XU;
      f.nhkCo = Date.now();
      f.tui['nha-kinh'] = (f.tui['nha-kinh'] || 0) + 1;
      f.xp += 20;
      await h.ghi(me, f);
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));

  /* ======================= NHIEM VU CHUYEN GIA 专家任务 ======================= */
  const cgCua = (f) => (f.cg && f.cg.tuan === d.vnWeekKey() ? f.cg : { tuan: d.vnWeekKey(), lan: 0, xong: false });
  const cgChoHs = (f) => {
    const c = cgCua(f), q = c.dang;
    return { tuan: c.tuan, lan: c.lan, luot: CG_LUOT, xong: !!c.xong, so: CG_SO, dat: CG_DAT, xu: CG_XU, quy: CG_QUY, tong: f.cgSo || 0, ding: !!f.cgDing,
      dang: q ? { id: q.id, nguon: q.nguon, so: q.ds.length, da: q.tl.length, dung: q.tl.filter(Boolean).length, ds: q.ds.map(cauChoHs) } : null };
  };
  app.get('/api/farm/chuyengia', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id);
    res.json(Object.assign({ mo: moTn(f, 'cg'), lvMo: h.MO_TN.cg.lv }, cgChoHs(f)));
  }));
  app.post('/api/farm/chuyengia/moi', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    const bo = await h.tuHocCua(req.user);
    // do kho cao nhat (bac 80–100): 5 lua chon, khong pinyin, nhieu ngu phap / xep cau / noi tu — van chi bai em da hoc
    const de = h.deChuHanKt(bo, { nghe: !!b.nghe, viet: true, dk: h.DO_KHO[h.DO_KHO.length - 1] });
    if (!de || de.ds.length < CG_SO - 2) return res.status(400).json({ error: 'Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi nhé!', chuaHoc: true });
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      canMo(f, 'cg');
      const c = cgCua(f);
      if (c.dang && c.dang.tl.length < c.dang.ds.length) return cgChoHs(f);
      if (c.lan >= CG_LUOT) throw loi('Tuần này em đã thử ' + CG_LUOT + ' lần — tuần sau có thử thách mới nhé!');
      c.lan++;
      c.dang = { id: Math.random().toString(36).slice(2, 10), nguon: de.nguon, ds: de.ds.slice(0, CG_SO), tl: [] };
      f.cg = c;
      await h.ghi(me, f);
      return cgChoHs(f);
    }));
  }));
  app.post('/api/farm/chuyengia/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), c = cgCua(f), q0 = c.dang;
      if (!q0 || q0.id !== String(b.id || '')) throw loi('Lượt thử thách này đã kết thúc.');
      const i = q0.tl.length;
      if (Number(b.i) !== i || !q0.ds[i]) throw loi('Câu này em đã trả lời rồi.');
      const q = q0.ds[i], dung = h.chamCau(q, b);
      q0.tl.push(dung);
      h.onCau(f, q, b, dung);
      const kq = Object.assign({ ok: true, dung, i }, h.ketQuaCau(q));
      if (q0.tl.length >= q0.ds.length) {
        const soDung = q0.tl.filter(Boolean).length;
        kq.ketThuc = { soDung, so: q0.ds.length, dat: soDung >= CG_DAT };
        if (soDung >= CG_DAT && !c.xong) {
          c.xong = true;
          f.xu += CG_XU; f.xp += 30;
          f.cgSo = (f.cgSo || 0) + 1;
          kq.ketThuc.qua = { xu: CG_XU, hat: hatQuy(f, CG_QUY) };
          if (!f.cgDing) { f.cgDing = 1; f.tui['cg-ding'] = (f.tui['cg-ding'] || 0) + 1; kq.ketThuc.qua.tt = 'cg-ding'; }
        } else if (soDung >= CG_DAT) kq.ketThuc.daNhan = true;
        delete c.dang;
      }
      f.cg = c;
      await h.ghi(me, f);
      kq.cg = cgChoHs(f);
      if (kq.ketThuc) kq.st = await h.trangThai(me, f);
      return kq;
    }));
  }));

  /* ======================= LE HOI NONG TRAI 农场节 ======================= */
  const leDang = (f) => !!(f.le && f.le.kt > Date.now());
  async function leChoHs(f) {
    const ten = await d.loadUserNames(), le = f.le || null;
    return { mo: moTn(f, 'le'), lvMo: h.MO_TN.le.lv, dang: leDang(f), daMoThang: !!(le && le.thang === thang()),
      kt: le ? le.kt : 0, khach: le ? (le.khach || []).map((id) => ten[id] || 'Một bạn') : [], quy: !!(le && le.quy),
      xuChu: LE_XU_CHU, xuKhach: LE_XU_KHACH, toiDa: LE_KHACH_MAX, canQuy: LE_KHACH_QUY, gio: LE_MS / 3600000 };
  }
  app.get('/api/farm/lehoi', d.requireAuth, d.asyncRoute(async (req, res) => { res.json(await leChoHs(await h.doc(req.user.id))); }));
  app.post('/api/farm/lehoi/mo', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      canMo(f, 'le');
      if (leDang(f)) throw loi('Lễ hội của em đang diễn ra rồi!');
      if (f.le && f.le.thang === thang()) throw loi('Tháng này em đã mở lễ hội — tháng sau mở tiếp nhé!');
      f.le = { thang: thang(), bd: Date.now(), kt: Date.now() + LE_MS, khach: [], quy: 0 };
      f.xp += 10;
      await h.ghi(me, f);
      return Object.assign({ ok: true, st: await h.trangThai(me, f) }, { le: await leChoHs(f) });
    }));
  }));
  // khach: lay 1 cau tu bai CUA KHACH (khach phai co bai da hoc / duoc giao)
  app.post('/api/farm/lehoi/cau/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    const bo = await h.tuHocCua(req.user), ng = h.boKtbc(bo);
    const q = ng ? h.chonKt(ng, ['nghia', 'viet', 'dien'], 1, {})[0] : null;
    if (!q) return res.status(400).json({ error: 'Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi nhé!', chuaHoc: true });
    await h.traLoi(res, h.cungLop(me, id).then(async () => {
      const ff = await h.doc(id);
      if (!leDang(ff)) throw loi('Lễ hội ở nhà bạn đã kết thúc rồi.');
      if ((ff.le.khach || []).indexOf(me) >= 0) throw loi('Em đã dự lễ hội này rồi — cảm ơn em!');
      return h.lanLuot(me, async () => {
        const fm = await h.doc(me);
        fm.leq = { id, q, t: Date.now() };
        await h.ghi(me, fm);
        return { cau: cauChoHs(q) };
      });
    }));
  }));
  app.post('/api/farm/lehoi/tl/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id), b = req.body || {};
    await h.traLoi(res, h.cungLop(me, id).then(() => h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      const q = fm.leq && fm.leq.id === id ? fm.leq.q : null;
      if (!q) throw loi('Câu hỏi đã hết — bấm “Dự lễ hội” lại nhé.');
      delete fm.leq;
      const dung = h.chamCau(q, b);
      h.onCau(fm, q, b, dung);
      const kq = Object.assign({ ok: true, dung }, h.ketQuaCau(q));
      if (dung && leDang(ff) && (ff.le.khach || []).indexOf(me) < 0) {
        ff.le.khach = (ff.le.khach || []).concat(me);
        fm.xu += LE_XU_KHACH; fm.xp += 2;
        kq.vao = { xu: LE_XU_KHACH };
        if (ff.le.khach.length <= LE_KHACH_MAX) { ff.xu += LE_XU_CHU; ff.xp += 3; }
        let quy = null;
        if (ff.le.khach.length >= LE_KHACH_QUY && !ff.le.quy) { ff.le.quy = 1; quy = hatQuy(ff, 1); }
        h.ghiNk(ff, { ai: me, l: 'lehoi', n: ff.le.khach.length, xu: ff.le.khach.length <= LE_KHACH_MAX ? LE_XU_CHU : 0, quy: quy ? Object.keys(quy)[0] : '' });
        await h.ghi(id, ff);
      }
      await h.ghi(me, fm);
      kq.le = { kt: ff.le ? ff.le.kt : 0, khach: ff.le ? (ff.le.khach || []).length : 0, da: !!(ff.le && (ff.le.khach || []).indexOf(me) >= 0) };
      kq.st = await h.trangThai(me, fm);
      return kq;
    })));
  }));

  /* ======================= KEM HOC TRO 师徒 ======================= */
  const htCua = (f) => { f.ht = f.ht || {}; f.ht.tro = Array.isArray(f.ht.tro) ? f.ht.tro : []; return f.ht; };
  const htNgay = (f) => { const x = htCua(f); if (!x.ngay || x.ngay.d !== ngay()) x.ngay = { d: ngay(), meo: {}, nhan: {} }; return x.ngay; };
  async function lopCua(me) { return h.banCungLop(me); }
  app.get('/api/farm/hoctro', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, f = await h.doc(me), lv = h.lvTuXp(f.xp);
    const [ten, lop] = await Promise.all([d.loadUserNames(), lopCua(me)]);
    const x = htCua(f), ng = x.ngay && x.ngay.d === ngay() ? x.ngay : { meo: {}, nhan: {} };
    const ids = (lop ? lop.ids : []).filter((id) => id !== me && ten[id]);
    const farms = await h.docNhieu(ids.concat(x.tro).filter((v, i, a) => a.indexOf(v) === i));
    const tro = [];
    for (const id of x.tro) {
      const fr = farms[id];
      tro.push({ id, ten: ten[id] || 'Một bạn', lv: fr ? h.lvTuXp(fr.xp) : 0, homNay: await homNayCua(id), meo: ng.meo[id] != null ? ng.meo[id] : -1, nhan: !!ng.nhan[id] });
    }
    const ungVien = !moTn(f, 'ht') ? [] : ids.filter((id) => farms[id] && x.tro.indexOf(id) < 0 && !farms[id].thay && h.lvTuXp(farms[id].xp) <= HT_LV_TRO)
      .map((id) => ({ id, ten: ten[id], lv: h.lvTuXp(farms[id].xp), daMoi: (farms[id].htMoi || []).some((m) => m.id === me) }))
      .sort((a, b) => a.lv - b.lv).slice(0, 30);
    res.json({ mo: moTn(f, 'ht'), lvMo: h.MO_TN.ht.lv, lv, tro, toiDa: HT_TOI_DA, lvTro: HT_LV_TRO, sao: HT_SAO, xuThay: HT_XU_THAY, xuTro: HT_XU_TRO, meo: HT_MEO,
      thay: f.thay ? { id: f.thay, ten: ten[f.thay] || 'Một bạn' } : null, moi: (f.htMoi || []).map((m) => ({ id: m.id, ten: ten[m.id] || 'Một bạn' })), ungVien, coLop: !!lop });
  }));
  async function cungLopThat(me, id) {
    const lop = await lopCua(me);
    if (!lop || lop.ids.indexOf(id) < 0 || id === me) throw loi('Chỉ kèm được bạn cùng lớp.');
  }
  app.post('/api/farm/hoctro/moi/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    await h.traLoi(res, cungLopThat(me, id).then(() => h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      canMo(fm, 'ht');
      const x = htCua(fm);
      if (x.tro.indexOf(id) >= 0) throw loi('Bạn này đã là học trò của em.');
      if (x.tro.length >= HT_TOI_DA) throw loi('Em đang kèm đủ ' + HT_TOI_DA + ' bạn rồi.');
      if (h.lvTuXp(ff.xp) > HT_LV_TRO) throw loi('Chỉ kèm được bạn từ cấp ' + HT_LV_TRO + ' trở xuống.');
      if (ff.thay) throw loi('Bạn này đã có người kèm rồi.');
      ff.htMoi = (Array.isArray(ff.htMoi) ? ff.htMoi : []).filter((m) => m.id !== me).concat({ id: me, t: Date.now() }).slice(-5);
      h.ghiNk(ff, { ai: me, l: 'htmoi' });
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true };
    })));
  }));
  app.post('/api/farm/hoctro/dongy/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id); // me = tro, id = thay
    await h.traLoi(res, cungLopThat(me, id).then(() => h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ft = await h.doc(id);
      if (!(fm.htMoi || []).some((m) => m.id === id)) throw loi('Lời mời này không còn nữa.');
      if (fm.thay) throw loi('Em đã có người kèm rồi.');
      const x = htCua(ft);
      if (x.tro.length >= HT_TOI_DA) { fm.htMoi = fm.htMoi.filter((m) => m.id !== id); await h.ghi(me, fm); throw loi('Bạn ấy đã kèm đủ ' + HT_TOI_DA + ' bạn rồi.'); }
      if (x.tro.indexOf(me) < 0) x.tro.push(me);
      fm.thay = id;
      fm.htMoi = [];
      h.ghiNk(ft, { ai: me, l: 'htok' });
      await h.ghi(id, ft);
      await h.ghi(me, fm);
      return { ok: true };
    })));
  }));
  app.post('/api/farm/hoctro/tuchoi/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      f.htMoi = (f.htMoi || []).filter((m) => m.id !== id);
      await h.ghi(me, f);
      return { ok: true };
    }));
  }));
  // thoi kem (thay bo tro hoac tro roi thay) — don ca hai phia
  app.post('/api/farm/hoctro/thoi/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    if (id === me) return res.status(400).json({ error: 'Không hợp lệ.' });
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      const xm = htCua(fm), xf = htCua(ff);
      xm.tro = xm.tro.filter((x) => x !== id); xf.tro = xf.tro.filter((x) => x !== me);
      if (fm.thay === id) delete fm.thay;
      if (ff.thay === me) delete ff.thay;
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true };
    }));
  }));
  app.post('/api/farm/hoctro/meo/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id), i = Math.floor(Number(req.body && req.body.i));
    if (!HT_MEO[i]) return res.status(400).json({ error: 'Không có lời khuyên này.' });
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      if (htCua(fm).tro.indexOf(id) < 0) throw loi('Bạn này không phải học trò của em.');
      const n = htNgay(fm);
      if (n.meo[id] != null) throw loi('Hôm nay em đã gửi lời khuyên cho bạn này rồi.');
      n.meo[id] = i;
      h.ghiNk(ff, { ai: me, l: 'htmeo', c: i });
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true };
    }));
  }));
  // nhan thuong hom nay: chi khi da gui loi khuyen hom nay VA tro hoc du HT_SAO sao hom nay
  app.post('/api/farm/hoctro/thuong/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    const sao = await homNayCua(id);
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      if (htCua(fm).tro.indexOf(id) < 0) throw loi('Bạn này không phải học trò của em.');
      const n = htNgay(fm);
      if (n.meo[id] == null) throw loi('Gửi một lời khuyên học tập cho bạn trước đã.');
      if (n.nhan[id]) throw loi('Hôm nay em đã nhận thưởng kèm bạn này rồi.');
      if (sao < HT_SAO) throw loi('Bạn mới học ' + sao + '/' + HT_SAO + ' sao hôm nay — thưởng chỉ có khi bạn học đủ. Nhắc bạn cùng học nhé!');
      n.nhan[id] = 1;
      fm.xu += HT_XU_THAY; fm.xp += 5;
      ff.xu += HT_XU_TRO; ff.xp += 2;
      h.ghiNk(ff, { ai: me, l: 'htthuong', xu: HT_XU_TRO });
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true, xu: HT_XU_THAY, st: await h.trangThai(me, fm) };
    }));
  }));

  // Trang thai gon cho client (cham do, nut tren nong trai)
  h.ttThem.push((userId, f) => ({
    cap: {
      le: leDang(f) ? { kt: f.le.kt, khach: (f.le.khach || []).length } : null,
      nk: !!f.nhkCo,
      cg: f.cg && f.cg.tuan === d.vnWeekKey() ? { xong: !!f.cg.xong, lan: f.cg.lan } : null,
      htMoi: (f.htMoi || []).length, thay: f.thay || '', tro: (f.ht && f.ht.tro ? f.ht.tro.length : 0),
    },
  }));
  Object.assign(h.CATALOG, { HT_MEO, CAPCAO: { NK_XU, CG_DAT, CG_SO, CG_LUOT, LE_MS, HT_SAO } });
  return { HT_MEO };
};
