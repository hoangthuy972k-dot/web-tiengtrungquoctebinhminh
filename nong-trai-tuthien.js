// Tu thien / Tang qua cho ban cung lop (hoc sinh xin, co giao mo 2026-11-14; co bo gioi han so luot: "không cần giới hạn").
// Luat (may chu kiem het):
//  - chi ban CUNG LOP that (cung classId tren he thong, giong tin nhan tu do), khong tu tang minh, ban da chan em
//    (danh sach chan cua tin nhan, f.tnChan) thi em khong tang duoc
//  - tang: xu (1 .. so xu dang co), hang trong kho hoac hat giong trong tui hat (1 .. so dang co, moi lan 1 loai)
//  - hang quy / dat tien (hiem, ban >= QT_GIA_QUY) va hang chi mua o cho (nl) khong tang duoc — tat bang QT_CHAN_QUY = false
//  - khong gioi han so lan tang / so qua nhan; chi chong bam nham lien tuc: moi QT_CHO_MS mot mon qua
//  - chuyen hang trong haiLuot (khoa ca 2 nong trai), ma yeu cau rid cua client -> bam 2 lan chi tinh 1 lan
//  - nhat ky 2 ben; nguoi nhan thay the qua lan sau mo nong trai, bam "Cảm ơn 谢谢！" -> nguoi tang +1 ❤
//    (moi mon qua chi cam on 1 lan; nguoi tang nhan toi da QT_CAM_NGAY ❤ cam on moi ngay de khong tang qua lai kiem tim)
//  - "Bạn tốt bụng nhất tuần": giup nhieu BAN KHAC NHAU nhat tuan truoc (khong tinh so xu) -> ghi vao ke cup
//  - thay co xem nhat ky qua theo lop: GET /api/admin/farm-qua (requireAdmin)
// Du lieu: nguoi tang f.qtd [{id, den, loai, k, n, c, t, cam}] + f.qtw {tuan: [id ban]} + f.qtLuc;
//          nguoi nhan f.qt [{id, ai, loai, k, n, c, t, xem, cam}]; nguoi tang f.qtCam {d, n}.
const QT_CHAN_QUY = true;   // false = cho tang ca hang quy / hang cho
const QT_GIA_QUY = 95;      // gia ban >= muc nay coi la hang quy (giong luat nhan cong van chuyen)
const QT_CHO_MS = 3000;     // chong bam lien tuc: 1 mon qua / 3 giay / nguoi tang
const QT_CAM_NGAY = 5;      // nguoi tang nhan toi da 5 ❤ cam on moi ngay
const QT_GIU = 30;          // so ban ghi qua giu lai moi ben
const QT_TB_IT = 2;         // "Bạn tốt bụng nhất tuần" can giup it nhat 2 ban khac nhau
const QT_SL_MAX = 100000;   // chan so vo ly (khong phai gioi han luot)
// Loi chuc mau (khong cho go tu do)
const QT_CHUC = [
  { zh: '祝你学习进步！', py: 'Zhù nǐ xuéxí jìnbù!', vn: 'Chúc bạn học tiến bộ!' },
  { zh: '加油！', py: 'Jiāyóu!', vn: 'Cố lên!' },
  { zh: '谢谢你！', py: 'Xièxie nǐ!', vn: 'Cảm ơn bạn!' },
  { zh: '送给你！', py: 'Sòng gěi nǐ!', vn: 'Tặng bạn nè!' },
  { zh: '祝你天天开心！', py: 'Zhù nǐ tiāntiān kāixīn!', vn: 'Chúc bạn ngày nào cũng vui!' },
];
const QT_CAM_ON = { zh: '谢谢你的礼物！', py: 'Xièxie nǐ de lǐwù!', vn: 'Cảm ơn món quà của bạn!' };

module.exports = function ganTuThien(app, d, h, c) {
  const loi = h.loi, SP = h.SP, CAY = h.CAY;
  // client can loi chuc + luat de ve nhat ky / bang tang qua (gui kem danh muc GET /api/farm?cat=1)
  if (h.CATALOG) h.CATALOG.QT = { chuc: QT_CHUC, camOn: QT_CAM_ON, chanQuy: QT_CHAN_QUY, giaQuy: QT_GIA_QUY, choMs: QT_CHO_MS, camNgay: QT_CAM_NGAY };
  const ridHop = (s) => /^[a-z0-9]{6,32}$/i.test(s);
  function spDuoc(k) {
    const s = SP[k];
    if (!s) return false;
    return !QT_CHAN_QUY || (!s.hiem && !s.nl && !(s.ban >= QT_GIA_QUY));
  }
  function hatDuoc(k) { return !!CAY[k] && (!QT_CHAN_QUY || !CAY[k].hiem); }
  // ten mon de hien (nhat ky thay co / lich su)
  function tenMon(loai, k, n) {
    if (loai === 'xu') return { zh: '金币', py: 'jīnbì', vn: n + ' xu' };
    if (loai === 'hat') { const x = CAY[k] || {}; return { zh: (x.zh || '') + '种子', py: (x.py || '') + ' zhǒngzi', vn: n + ' hạt ' + String(x.vn || k).toLowerCase() }; }
    const x = SP[k] || {};
    return { zh: x.zh || '', py: x.py || '', vn: n + ' ' + String(x.vn || k).toLowerCase() };
  }
  async function lopCua(uid) { const st = await d.loadClassState(); const m = st.members[uid]; return m ? m.classId : ''; }
  // ban cung lop that (giong tin nhan tu do) + ban ay da co nong trai
  async function cungLopThat(me, id) {
    if (!id || id === me) return false;
    const a = await lopCua(me);
    if (!a || a !== (await lopCua(id))) return false;
    return !!(await h.docNhieu([id]))[id];
  }
  function cacMon(f) {
    const hang = [];
    Object.keys(f.kho || {}).forEach((k) => { if (f.kho[k] > 0 && spDuoc(k)) hang.push({ loai: 'sp', k, n: f.kho[k] }); });
    Object.keys(f.hat || {}).forEach((k) => { if (f.hat[k] > 0 && hatDuoc(k)) hang.push({ loai: 'hat', k, n: f.hat[k] }); });
    return hang;
  }
  const soBanTuan = (f, tuan) => ((f.qtw && f.qtw[tuan]) || []).length;

  // ---- Tang qua ----
  app.post('/api/farm/tuthien/tang/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id), b = req.body || {};
    const loai = String(b.loai || ''), k = String(b.k || ''), n = Math.floor(Number(b.n)), rid = String(b.rid || ''), ci = Math.floor(Number(b.c) || 0);
    if (id === me) return res.status(400).json({ error: 'Không tự tặng quà cho mình được.' });
    if (!ridHop(rid)) return res.status(400).json({ error: 'Thiếu mã yêu cầu, em thử lại nhé.' });
    if (['xu', 'sp', 'hat'].indexOf(loai) < 0) return res.status(400).json({ error: 'Em chọn quà để tặng nhé.' });
    if (!Number.isInteger(n) || n < 1 || n > QT_SL_MAX) return res.status(400).json({ error: 'Số lượng chưa đúng.' });
    if (loai === 'sp' && !spDuoc(k)) return res.status(400).json({ error: SP[k] ? 'Món này quý quá — không tặng được, em chọn món khác nhé.' : 'Không có món này.' });
    if (loai === 'hat' && !hatDuoc(k)) return res.status(400).json({ error: CAY[k] ? 'Hạt giống quý không tặng được, em chọn hạt khác nhé.' : 'Không có hạt giống này.' });
    if (!(await cungLopThat(me, id))) return res.status(400).json({ error: 'Em chỉ tặng quà được cho bạn cùng lớp (bạn đã mở nông trại).' });
    const c2 = QT_CHUC[ci] ? ci : 0;
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id), t = Date.now();
      fm.qtd = Array.isArray(fm.qtd) ? fm.qtd : [];
      // bam 2 lan / mang gui lai: cung rid -> tra ket qua cu, khong chuyen lan nua
      if (fm.qtd.some((x) => x.id === rid)) return { ok: true, lap: true, st: await h.trangThai(me, fm) };
      if (h.lvTuXp(fm.xp) < h.MO_TN.qt.lv) throw loi('Tặng quà mở ở cấp ' + h.MO_TN.qt.lv + ' — chăm nông trại thêm chút nhé!');
      if ((ff.tnChan || []).indexOf(me) >= 0) throw loi('Bạn này hiện chưa nhận quà từ em.');
      if (fm.qtLuc && t - fm.qtLuc < QT_CHO_MS) throw loi('Chậm thôi nào — đợi ' + Math.ceil((QT_CHO_MS - (t - fm.qtLuc)) / 1000) + ' giây rồi tặng tiếp nhé.');
      if (loai === 'xu') {
        if (!(fm.xu >= n)) throw loi('Em chỉ có ' + (fm.xu || 0) + ' xu thôi.');
        fm.xu -= n; ff.xu = (ff.xu || 0) + n;
      } else if (loai === 'sp') {
        const co = (fm.kho && fm.kho[k]) || 0;
        if (co < n) throw loi(co ? 'Kho chỉ còn ' + co + ' ' + String(SP[k].vn).toLowerCase() + ' thôi.' : 'Kho không còn món này.');
        fm.kho[k] = co - n; if (!fm.kho[k]) delete fm.kho[k];
        ff.kho = ff.kho || {}; ff.kho[k] = (ff.kho[k] || 0) + n;
      } else {
        const co = (fm.hat && fm.hat[k]) || 0;
        if (co < n) throw loi(co ? 'Túi hạt chỉ còn ' + co + ' hạt thôi.' : 'Túi hạt không còn hạt này.');
        fm.hat[k] = co - n; if (!fm.hat[k]) delete fm.hat[k];
        ff.hat = ff.hat || {}; ff.hat[k] = (ff.hat[k] || 0) + n;
      }
      fm.qtLuc = t;
      const ghiChu = { loai, k: loai === 'xu' ? '' : k, n, c: c2, t };
      fm.qtd = [Object.assign({ id: rid, den: id, cam: 0 }, ghiChu)].concat(fm.qtd).slice(0, QT_GIU);
      ff.qt = [Object.assign({ id: rid, ai: me, xem: 0, cam: 0 }, ghiChu)].concat(Array.isArray(ff.qt) ? ff.qt : []).slice(0, QT_GIU);
      // ban tot bung: dem ban khac nhau duoc giup trong tuan (giu 3 tuan gan nhat)
      const tuan = d.vnWeekKey();
      fm.qtw = fm.qtw && typeof fm.qtw === 'object' ? fm.qtw : {};
      fm.qtw[tuan] = fm.qtw[tuan] || [];
      if (fm.qtw[tuan].indexOf(id) < 0) fm.qtw[tuan].push(id);
      Object.keys(fm.qtw).sort().reverse().slice(3).forEach((w) => { delete fm.qtw[w]; });
      h.ghiNk(fm, { ai: id, l: 'qtdi', loai, k: ghiChu.k, n, c: c2 });
      h.ghiNk(ff, { ai: me, l: 'qtden', loai, k: ghiChu.k, n, c: c2, qid: rid });
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true, st: await h.trangThai(me, fm) };
    }));
  }));

  // ---- Cam on (moi mon qua 1 lan; nguoi tang +1 ❤, toi da QT_CAM_NGAY moi ngay) ----
  app.post('/api/farm/tuthien/camon', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, qid = String((req.body && req.body.id) || '');
    const f0 = await h.doc(me);
    const q0 = (Array.isArray(f0.qt) ? f0.qt : []).find((x) => x.id === qid);
    if (!q0) return res.status(400).json({ error: 'Không tìm thấy món quà này.' });
    const ai = q0.ai;
    await h.traLoi(res, h.haiLuot(me, ai, async () => {
      const f = await h.doc(me), g = await h.doc(ai), ngay = d.vnDayKey();
      const q = (Array.isArray(f.qt) ? f.qt : []).find((x) => x.id === qid);
      if (!q) throw loi('Không tìm thấy món quà này.');
      q.xem = 1;
      if (q.cam) { await h.ghi(me, f); return { ok: true, da: true, st: await h.trangThai(me, f) }; }
      q.cam = Date.now();
      let tim = 0;
      if (!g.qtCam || g.qtCam.d !== ngay) g.qtCam = { d: ngay, n: 0 };
      if (g.qtCam.n < QT_CAM_NGAY) { g.qtCam.n++; g.tim = (g.tim || 0) + 1; tim = 1; }
      const di = (Array.isArray(g.qtd) ? g.qtd : []).find((x) => x.id === qid);
      if (di) di.cam = q.cam;
      h.ghiNk(g, { ai: me, l: 'qtcam', loai: q.loai, k: q.k, n: q.n, tim });
      await h.ghi(ai, g);
      await h.ghi(me, f);
      return { ok: true, tim, st: await h.trangThai(me, f) };
    }));
  }));
  // Dong the qua ma chua cam on (van cam on duoc sau o lich su)
  app.post('/api/farm/tuthien/xem', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, qid = String((req.body && req.body.id) || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      const q = (Array.isArray(f.qt) ? f.qt : []).find((x) => x.id === qid);
      if (q && !q.xem) { q.xem = 1; await h.ghi(me, f); }
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));

  // ---- Ban tot bung nhat tuan (theo lop) ----
  const tbNho = new Map(); // 'lop:tuan' -> ket qua (tuan da qua thi khong doi)
  function tuanTruoc() { return d.vnWeekKey(Date.parse(d.vnWeekKey() + 'T00:00:00Z') - 7 * 3600000 - 86400000); }
  function dauBang(farms, ids, tuan) {
    let max = 0;
    ids.forEach((u) => { if (farms[u]) max = Math.max(max, soBanTuan(farms[u], tuan)); });
    return max >= QT_TB_IT ? { n: max, ds: ids.filter((u) => farms[u] && soBanTuan(farms[u], tuan) === max) } : { n: 0, ds: [] };
  }
  async function totBungTuanTruoc(lop) {
    const tuan = tuanTruoc(), key = lop + ':' + tuan;
    if (tbNho.has(key)) return tbNho.get(key);
    let kq = await c.docC('qttb:' + key);
    if (!kq) {
      kq = await c.khoaC('qttb:' + key, async () => {
        const co = await c.docC('qttb:' + key);
        if (co) return co;
        const st = await d.loadClassState();
        const ids = Object.keys(st.members).filter((u) => st.members[u].classId === lop);
        const x = Object.assign({ tuan }, dauBang(await h.docNhieu(ids), ids, tuan));
        await c.ghiC('qttb:' + key, x);
        return x;
      });
    }
    tbNho.set(key, kq);
    return kq;
  }
  // mo nong trai: em la ban tot bung nhat tuan truoc -> ghi 1 lan vao ke cup
  h.vaoHook.push(async (user, f) => {
    const lop = await lopCua(user.id);
    if (!lop) return false;
    const kq = await totBungTuanTruoc(lop);
    if (!kq || kq.ds.indexOf(user.id) < 0) return false;
    f.ke = f.ke || {};
    f.ke.tb = Array.isArray(f.ke.tb) ? f.ke.tb : [];
    if (f.ke.tb.some((x) => x.tuan === kq.tuan)) return false;
    f.ke.tb.unshift({ tuan: kq.tuan, n: kq.n });
    f.ke.tb = f.ke.tb.slice(0, 20);
    return true;
  });

  // So qua moi chua xem (client tai danh sach day du qua GET /api/farm/tuthien)
  h.ttThem.push((userId, f) => ({ qtMoi: (Array.isArray(f.qt) ? f.qt : []).filter((x) => !x.xem).length }));

  // ---- Bang tu thien: ban cung lop, mon tang duoc, lich su, qua moi, ban tot bung ----
  app.get('/api/farm/tuthien', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const [st, ten, f] = await Promise.all([d.loadClassState(), d.loadUserNames(), h.doc(me)]);
    const lop = st.members[me] ? st.members[me].classId : '';
    const cls = lop ? st.classes.find((x) => x.id === lop) : null;
    const ids = lop ? Object.keys(st.members).filter((u) => st.members[u].classId === lop && u !== me && ten[u]) : [];
    const farms = await h.docNhieu(ids.concat(me));
    const tuan = d.vnWeekKey();
    const ban = ids.filter((u) => farms[u]).map((u) => ({ id: u, ten: ten[u], lv: h.lvTuXp(farms[u].xp || 0), av: farms[u].av || null,
      chan: (farms[u].tnChan || []).indexOf(me) >= 0 })).sort((a, b) => a.ten.localeCompare(b.ten, 'vi'));
    const ls = [];
    (Array.isArray(f.qt) ? f.qt : []).forEach((x) => ls.push({ id: x.id, ve: 'nhan', ai: x.ai, ten: ten[x.ai] || 'Một bạn', loai: x.loai, k: x.k, n: x.n, c: x.c, t: x.t, cam: !!x.cam, xem: !!x.xem }));
    (Array.isArray(f.qtd) ? f.qtd : []).forEach((x) => ls.push({ id: x.id, ve: 'tang', ai: x.den, ten: ten[x.den] || 'Một bạn', loai: x.loai, k: x.k, n: x.n, c: x.c, t: x.t, cam: !!x.cam }));
    ls.sort((a, b) => b.t - a.t);
    let tb = null, tbTruoc = null;
    if (lop) {
      const dau = dauBang(farms, ids.concat(me), tuan);
      tb = { n: dau.n, ds: dau.ds.map((u) => ({ id: u, ten: ten[u] || '', la: u === me })), em: soBanTuan(f, tuan) };
      const kq = await totBungTuanTruoc(lop);
      if (kq && kq.ds.length) tbTruoc = { n: kq.n, ds: kq.ds.map((u) => ({ id: u, ten: ten[u] || '', la: u === me })) };
    }
    const ngay = d.vnDayKey();
    res.json({
      lop: cls ? cls.name : '', ban, xu: f.xu, hang: cacMon(f), chuc: QT_CHUC, camOn: QT_CAM_ON,
      ls: ls.slice(0, 20), moi: ls.filter((x) => x.ve === 'nhan' && !x.xem).reverse(),
      tb, tbTruoc, choMs: QT_CHO_MS, camNgay: QT_CAM_NGAY, chanQuy: QT_CHAN_QUY, giaQuy: QT_GIA_QUY,
      camHomNay: f.qtCam && f.qtCam.d === ngay ? f.qtCam.n : 0,
    });
  }));

  /* ---------------- thay co: nhat ky qua tang theo lop (chi xem) ---------------- */
  app.get('/api/admin/farm-qua', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const st = await d.loadClassState(), ten = await d.loadUserNames();
    const lop = String(req.query.lop || (st.classes[0] && st.classes[0].id) || '');
    const ids = Object.keys(st.members).filter((u) => st.members[u].classId === lop);
    const farms = await h.docNhieu(ids), ds = [], tuan = d.vnWeekKey(), tong = {};
    ids.forEach((u) => {
      (farms[u] && Array.isArray(farms[u].qt) ? farms[u].qt : []).forEach((x) => {
        const m = tenMon(x.loai, x.k, x.n);
        ds.push({ tu: x.ai, tenTu: ten[x.ai] || '(đã xoá tài khoản)', den: u, tenDen: ten[u] || '', loai: x.loai, mon: m.vn + (m.zh ? ' ' + m.zh : ''), n: x.n, t: x.t, cam: !!x.cam,
          khacLop: !st.members[x.ai] || st.members[x.ai].classId !== lop });
        if (x.t >= Date.parse(tuan + 'T00:00:00Z') - 7 * 3600000) {
          const g = tong[x.ai] = tong[x.ai] || { id: x.ai, ten: ten[x.ai] || '', lan: 0, xu: 0, ban: {} };
          g.lan++; if (x.loai === 'xu') g.xu += x.n; g.ban[u] = 1;
        }
      });
    });
    ds.sort((a, b) => b.t - a.t);
    const tuanNay = Object.keys(tong).map((k) => ({ id: k, ten: tong[k].ten, lan: tong[k].lan, xu: tong[k].xu, soBan: Object.keys(tong[k].ban).length })).sort((a, b) => b.lan - a.lan);
    res.json({ lop, ds: ds.slice(0, 300), tuanNay });
  }));

  return { cungLopThat, QT_CHUC };
};
