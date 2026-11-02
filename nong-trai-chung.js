// Hoat dong chung cua nong trai (/nong-trai, nut "Cùng nhau"):
//  - Cong trinh chung: ca lop gop gach (tra loi dung chu Han) + nong san de xay 1 cong trinh trong thi tran
//  - Thach dau chu Han: 2 ban lam cung 8 cau (4 tu cua moi ban), ai dung nhieu / nhanh hon thang
//  - Ban hoc cap doi 学伴: ngay nao ca hai dat 20 sao hoc thi ca hai mo ruong doi, giu chuoi ngay
//  - Le hoi cuoi tuan: Thu 7 + Chu nhat ca lop nau mon le hoi cho du muc tieu chung -> qua le hoi
// Pham vi "lop": ban co lop thi tinh trong lop, chua vao lop thi tinh chung ca cong dong.
// Du lieu chung (cong trinh, le hoi, tran thach dau) luu bang farm_chung / data/farm_chung.json.
const path = require('path');

const CT = [
  { k: 'ct-xuetang', zh: '学堂', py: 'xuétáng', vn: 'Học đường', gach: 12, sp: { lua: 3, carot: 2 } },
  { k: 'ct-shiqiao', zh: '石桥', py: 'shíqiáo', vn: 'Cầu đá', gach: 14, sp: { lua: 3, trung: 2 } },
  { k: 'ct-zhonglou', zh: '钟楼', py: 'zhōnglóu', vn: 'Tháp chuông', gach: 15, sp: { ngo: 2, carot: 2 } },
  { k: 'ct-xitai', zh: '戏台', py: 'xìtái', vn: 'Sân khấu tuồng', gach: 16, sp: { caibap: 1, trung: 2, lua: 2 } },
  { k: 'ct-baota', zh: '宝塔', py: 'bǎotǎ', vn: 'Bảo tháp', gach: 18, sp: { ngo: 2, sua: 1 } },
];
const CT_GACH_NGAY = 30;   // moi ban gop toi da 30 vien gach / ngay
const CT_DIEM_SP = 2;      // 1 nong san = 2 diem gop (1 vien gach = 1 diem)
const CT_DIEM_NHAN = 3;    // gop tu 3 diem tro len moi nhan qua khi xay xong
const CT_SO_CAU = 10;

const LH = [
  { k: 'zhongqiu', zh: '中秋节', py: 'Zhōngqiū jié', vn: 'Tết Trung thu', chuc: '中秋节快乐！', chucPy: 'Zhōngqiū jié kuàilè!',
    vh: 'Rằm tháng Tám: cả nhà ngắm trăng, ăn bánh trung thu, trẻ em rước đèn lồng.',
    mon: { zh: '月饼', py: 'yuèbing', vn: 'Bánh trung thu', hinh: 'mon-yuebing', can: { lua: 2, trungvit: 1 } }, qua: 'lh-tuzideng' },
  { k: 'chunjie', zh: '春节', py: 'Chūn jié', vn: 'Tết Nguyên đán', chuc: '新年快乐！', chucPy: 'Xīnnián kuàilè!',
    vh: 'Đêm giao thừa, nhiều gia đình Trung Quốc quây quần gói sủi cảo và đốt pháo đón năm mới.',
    mon: { zh: '饺子', py: 'jiǎozi', vn: 'Sủi cảo', hinh: 'wu:1f95f', can: { caibap: 1, lua: 1, trung: 1 } }, qua: 'lh-bianpao' },
  { k: 'duanwu', zh: '端午节', py: 'Duānwǔ jié', vn: 'Tết Đoan ngọ', chuc: '端午节快乐！', chucPy: 'Duānwǔ jié kuàilè!',
    vh: 'Mùng 5 tháng 5 âm lịch: đua thuyền rồng và ăn bánh 粽子 gói lá tre.',
    mon: { zh: '粽子', py: 'zòngzi', vn: 'Bánh ú lá tre', hinh: 'mon-zongzi', can: { lua: 2, ngo: 1 } }, qua: 'lh-longzhou' },
  { k: 'yuanxiao', zh: '元宵节', py: 'Yuánxiāo jié', vn: 'Tết Nguyên tiêu', chuc: '元宵节快乐！', chucPy: 'Yuánxiāo jié kuàilè!',
    vh: 'Rằm tháng Giêng: ngắm hoa đăng, giải câu đố trên đèn và ăn bánh trôi 汤圆.',
    mon: { zh: '汤圆', py: 'tāngyuán', vn: 'Bánh trôi', hinh: 'mon-tangyuan', can: { lua: 2, dautay: 1 } }, qua: 'lh-gongdeng' },
];
const LH_XU_MON = 3, LH_XU_NHAN = 20;

const HB_MUC = 20;          // moi ban can 20 sao hoc trong ngay
const HB_MOI_TOI_DA = 5;
const TD_SO = 8, TD_TAO_NGAY = 3, TD_HAN_MS = 3 * 86400000;
const TD_XU = { thang: 15, thua: 5, hoa: 10 };

module.exports = function ganHoatDongChung(app, d, h) {
  const FILE = path.join(d.DATA_DIR, 'farm_chung.json');

  async function initTable() {
    if (!d.USE_DB) return;
    await d.db().query('CREATE TABLE IF NOT EXISTS farm_chung (k VARCHAR(80) PRIMARY KEY, data MEDIUMTEXT NOT NULL, updated_ms BIGINT NOT NULL)');
  }
  async function docC(k) {
    if (!d.USE_DB) return (d.readJsonFile(FILE) || {})[k] || null;
    const [rows] = await d.db().query('SELECT data FROM farm_chung WHERE k = ?', [k]);
    if (!rows.length) return null;
    try { return JSON.parse(rows[0].data); } catch (e) { return null; }
  }
  async function ghiC(k, v) {
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      all[k] = v;
      d.writeJsonFile(FILE, all);
      return;
    }
    await d.db().query('INSERT INTO farm_chung (k, data, updated_ms) VALUES (?,?,?) ON DUPLICATE KEY UPDATE data=VALUES(data), updated_ms=VALUES(updated_ms)',
      [k, JSON.stringify(v), Date.now()]);
  }
  const khoaC = (k, fn) => h.lanLuot('C:' + k, fn);
  const loi = h.loi;
  const ngayTruoc = (key) => new Date(Date.parse(key + 'T00:00:00Z') - 86400000).toISOString().slice(0, 10);
  const thuTrongTuan = () => new Date(Date.parse(d.vnDayKey() + 'T00:00:00Z')).getUTCDay(); // 0 = Chu nhat
  const tronMang = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // Pham vi hoat dong: lop cua em, chua co lop thi ca cong dong
  async function phamVi(me) {
    const st = await d.loadClassState();
    const mem = st.members[me];
    if (mem) {
      const cls = st.classes.find((c) => c.id === mem.classId);
      const ids = Object.keys(st.members).filter((u) => st.members[u].classId === mem.classId);
      return { k: 'lop:' + mem.classId, loai: 'lop', ten: cls ? cls.name : 'Lớp em', ids };
    }
    const cd = await h.taiCongDong();
    return { k: 'cd', loai: 'cd', ten: 'Cộng đồng Hi Hán', ids: cd.map((x) => x.id) };
  }
  const heSo = (n) => Math.max(3, Math.min(25, n));

  /* ---------------- Cong trinh chung ---------------- */
  function taoCt(i, so) {
    const m = CT[i % CT.length], hs = heSo(so);
    const can = { gach: m.gach * hs };
    Object.keys(m.sp).forEach((k) => { can[k] = Math.ceil(m.sp[k] * hs); });
    return { i: i % CT.length, lan: i, bd: d.vnWeekKey(), can, co: {}, gop: {}, xong: 0, xongTuan: '' };
  }
  // Doc cong trinh cua pham vi; xay xong thi tuan sau moi bat dau cong trinh moi
  async function layCt(pv) {
    let s = await docC('ct:' + pv.k);
    let doi = false;
    if (!s) { s = { ct: taoCt(0, pv.ids.length), xay: [] }; doi = true; }
    if (s.ct.xong && s.ct.xongTuan !== d.vnWeekKey()) { s.ct = taoCt((s.ct.lan || 0) + 1, pv.ids.length); doi = true; }
    if (doi) await ghiC('ct:' + pv.k, s);
    return s;
  }
  function ctDu(ct) { return Object.keys(ct.can).every((k) => (ct.co[k] || 0) >= ct.can[k]); }
  function gopCt(s, me, them, diem) {
    const ct = s.ct;
    Object.keys(them).forEach((k) => { ct.co[k] = Math.min(ct.can[k], (ct.co[k] || 0) + them[k]); });
    ct.gop[me] = (ct.gop[me] || 0) + diem;
    if (!ct.xong && ctDu(ct)) {
      ct.xong = Date.now();
      ct.xongTuan = d.vnWeekKey();
      s.xay = [{ k: CT[ct.i].k, t: ct.xong, gop: Object.assign({}, ct.gop), nhan: [] }].concat(s.xay || []).slice(0, 8);
      return true;
    }
    return false;
  }
  function gachHomNay(f) { return f.ctGach && f.ctGach.d === d.vnDayKey() ? f.ctGach.n : 0; }

  async function deGach(user) {
    const de = await h.deChuHan(user);
    return de.ds.slice(0, CT_SO_CAU);
  }
  const cauChoHs = (q) => (q ? { k: q.k, hoi: q.hoi, lua: q.lua } : null);

  /* ---------------- Le hoi ---------------- */
  function leHoiTuan() {
    const tuan = d.vnWeekKey();
    const so = Math.floor(Date.parse(tuan + 'T00:00:00Z') / (7 * 86400000));
    return { tuan, lh: LH[((so % LH.length) + LH.length) % LH.length] };
  }
  const dangLeHoi = () => { const t = thuTrongTuan(); return t === 6 || t === 0; };
  const mucLh = (so) => Math.max(15, Math.min(120, so * 4));

  /* ---------------- Ban hoc cap doi ---------------- */
  async function saoHomNay(id) { return h.saoHoc(await d.loadStar(id)).homNay; }

  /* ---------------- Thach dau ---------------- */
  async function ketThucTd(td) {
    // Ca hai lam xong, hoac het han: tinh thang thua + tra xu (moi tran tra 1 lan)
    if (td.xong) return td;
    const a = td.kq[td.a] || {}, b = td.kq[td.b] || {};
    const hetHan = Date.now() - td.t > TD_HAN_MS;
    if (!(a.xong && b.xong) && !hetHan) return td;
    const diem = (x) => (x.tl || []).filter((t) => t.dung).length;
    let kq;
    if (a.xong && b.xong) {
      const da = diem(a), db = diem(b);
      kq = da !== db ? (da > db ? td.a : td.b) : a.ms !== b.ms ? (a.ms < b.ms ? td.a : td.b) : '';
    } else if (a.xong || b.xong) kq = a.xong ? td.a : td.b; // ban kia khong lam -> thang
    else kq = null; // ca hai bo: huy
    td.xong = Date.now();
    td.thang = kq;
    if (kq === null) return td;
    await h.haiLuot(td.a, td.b, async () => {
      const fa = await h.doc(td.a), fb = await h.doc(td.b);
      [[fa, td.a, td.b], [fb, td.b, td.a]].forEach(([f, id, ban]) => {
        const lam = (td.kq[id] || {}).xong;
        const ket = kq === '' ? 'hoa' : kq === id ? 'thang' : 'thua';
        f.tdTk = f.tdTk || { thang: 0, thua: 0, hoa: 0 };
        f.tdTk[ket]++;
        if (lam) { f.xu += TD_XU[ket]; f.xp += ket === 'thang' ? 5 : 2; }
        h.ghiNk(f, { ai: ban, l: 'tdkq', tid: td.id, kq: ket, xu: lam ? TD_XU[ket] : 0 });
      });
      await h.ghi(td.a, fa);
      await h.ghi(td.b, fb);
    });
    return td;
  }
  async function docTd(tid) {
    const td = await docC('td:' + tid);
    if (!td) return null;
    if (!td.xong && Date.now() - td.t > TD_HAN_MS) return khoaC('td:' + tid, async () => {
      const x = await docC('td:' + tid);
      await ketThucTd(x);
      await ghiC('td:' + tid, x);
      return x;
    });
    return td;
  }
  function tomTd(td, me, ten) {
    const ban = td.a === me ? td.b : td.a;
    const em = td.kq[me] || {}, bk = td.kq[ban] || {};
    const diem = (x) => (x.tl || []).filter((t) => t.dung).length;
    const xemBan = !!(em.xong || td.xong);
    return {
      id: td.id, ban: { id: ban, ten: ten[ban] || 'Một bạn' }, laNguoiMoi: td.a === me, t: td.t,
      em: { da: (em.tl || []).length, dung: diem(em), xong: !!em.xong, ms: em.ms || 0 },
      banKq: { da: (bk.tl || []).length, xong: !!bk.xong, dung: xemBan ? diem(bk) : null, ms: xemBan ? bk.ms || 0 : null },
      so: td.ds.length, xong: !!td.xong, kq: td.xong ? (td.thang === null ? 'huy' : td.thang === '' ? 'hoa' : td.thang === me ? 'thang' : 'thua') : '',
    };
  }

  /* ---------------- Tong hop cho bang "Cùng nhau" ---------------- */
  app.get('/api/farm/chung', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const pv = await phamVi(me);
    const [s, f, ten, cd] = await Promise.all([layCt(pv), h.doc(me), d.loadUserNames(), h.taiCongDong()]);
    const avTheo = {};
    cd.forEach((x) => { avTheo[x.id] = x.av; });
    const top = (gop) => Object.keys(gop || {}).filter((id) => ten[id]).map((id) => ({ id, ten: ten[id], n: gop[id], la: id === me, av: avTheo[id] || null }))
      .sort((a, b) => b.n - a.n).slice(0, 8);
    const ct = s.ct, m = CT[ct.i];
    const xay = (s.xay || []).map((x) => {
      const mm = CT.find((c) => c.k === x.k) || {};
      return { k: x.k, zh: mm.zh, py: mm.py, vn: mm.vn, t: x.t, gopEm: x.gop[me] || 0, daNhan: x.nhan.indexOf(me) >= 0,
        coTheNhan: (x.gop[me] || 0) >= CT_DIEM_NHAN && x.nhan.indexOf(me) < 0 };
    });

    const { tuan, lh } = leHoiTuan();
    const sl = (await docC('lh:' + pv.k + ':' + tuan)) || { n: 0, gop: {}, nhan: [] };
    const muc = mucLh(pv.ids.length);
    const t = thuTrongTuan();
    const giayToiT7 = ((6 - t + 7) % 7) * 86400 - Math.floor((Date.now() + 7 * 3600000) % 86400000 / 1000);

    // ban hoc cap doi
    let hb = { muc: HB_MUC, ban: null, moi: [] };
    hb.moi = (f.hbMoi || []).filter((x) => ten[x.ai]).map((x) => ({ id: x.ai, ten: ten[x.ai], av: avTheo[x.ai] || null }));
    hb.daGui = f.hbGui || null;
    if (hb.daGui && ten[hb.daGui]) hb.daGuiTen = ten[hb.daGui];
    hb.emHomNay = await saoHomNay(me);
    if (f.hb && f.hb.ban) {
      const ngay = d.vnDayKey();
      const banSao = await saoHomNay(f.hb.ban);
      const chuoi = f.hb.cuoi === ngay || f.hb.cuoi === ngayTruoc(ngay) ? f.hb.chuoi || 0 : 0;
      hb.ban = { id: f.hb.ban, ten: ten[f.hb.ban] || 'Bạn học', av: avTheo[f.hb.ban] || null, homNay: banSao };
      hb.chuoi = chuoi;
      hb.tu = f.hb.tu;
      hb.daNhan = f.hb.nhan === ngay;
      hb.coTheNhan = !hb.daNhan && hb.emHomNay >= HB_MUC && banSao >= HB_MUC;
      hb.daNhac = !!(f.hb.nhac === ngay);
    }

    // thach dau
    const tds = [];
    for (const x of (f.td || []).slice(0, 10)) {
      const td = await docTd(x);
      if (td) tds.push(tomTd(td, me, ten));
    }
    const ngay = d.vnDayKey();
    res.json({
      pham: { ten: pv.ten, loai: pv.loai, so: pv.ids.length },
      ct: {
        k: m.k, zh: m.zh, py: m.py, vn: m.vn, can: ct.can, co: ct.co, xong: !!ct.xong, gopEm: ct.gop[me] || 0, top: top(ct.gop),
        conGach: Math.max(0, CT_GACH_NGAY - gachHomNay(f)), gachNgay: CT_GACH_NGAY, diemNhan: CT_DIEM_NHAN, diemSp: CT_DIEM_SP,
        cau: f.ctq && f.ctq.ngay === ngay && f.ctq.i < f.ctq.ds.length ? cauChoHs(f.ctq.ds[f.ctq.i]) : null,
      },
      xay,
      lh: {
        k: lh.k, zh: lh.zh, py: lh.py, vn: lh.vn, chuc: lh.chuc, chucPy: lh.chucPy, vh: lh.vh, mon: lh.mon, qua: lh.qua,
        mo: dangLeHoi(), conGiay: dangLeHoi() ? d.secondsToVnWeekEnd() : Math.max(0, giayToiT7),
        n: sl.n, muc, em: sl.gop[me] || 0, top: top(sl.gop), daNhan: sl.nhan.indexOf(me) >= 0,
        coTheNhan: dangLeHoi() && sl.n >= muc && (sl.gop[me] || 0) > 0 && sl.nhan.indexOf(me) < 0,
        xuMon: LH_XU_MON, xuNhan: LH_XU_NHAN,
      },
      hb,
      td: tds, tdTk: f.tdTk || { thang: 0, thua: 0, hoa: 0 },
      tdCon: TD_TAO_NGAY - (f.tdTao && f.tdTao.d === ngay ? f.tdTao.n : 0), tdSo: TD_SO, tdXu: TD_XU,
    });
  }));

  // Gach cho cong trinh: tra loi 1 cau chu Han, dung = 1 vien gach
  app.post('/api/farm/ct/cau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const ds = await deGach(req.user);
    if (ds.length < 4) return res.status(400).json({ error: 'Chưa đủ từ vựng để ra câu — học thêm bài rồi quay lại nhé!' });
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (gachHomNay(f) >= CT_GACH_NGAY) throw loi('Hôm nay em đã góp đủ ' + CT_GACH_NGAY + ' viên gạch — mai góp tiếp nhé!');
      f.ctq = { ngay: d.vnDayKey(), ds, i: 0 };
      await h.ghi(me, f);
      return { cau: cauChoHs(ds[0]) };
    }));
  }));
  app.post('/api/farm/ct/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, chon = Math.floor(Number(req.body && req.body.chon));
    const pv = await phamVi(me);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      const q = f.ctq && f.ctq.ngay === d.vnDayKey() ? f.ctq.ds[f.ctq.i] : null;
      if (!q) throw loi('Câu này đã hết — bấm "Góp gạch" để lấy câu mới.');
      const dung = chon === q.dap;
      f.ctq.i++;
      const kq = { ok: true, dung, dap: q.dap, zh: q.zh, py: q.py, vn: q.vn };
      if (dung) {
        if (gachHomNay(f) >= CT_GACH_NGAY) throw loi('Hôm nay em đã góp đủ gạch rồi.');
        const ngay = d.vnDayKey();
        f.ctGach = { d: ngay, n: gachHomNay(f) + 1 };
        f.xp += 1;
        kq.xong = await khoaC('ct:' + pv.k, async () => {
          const s = await layCt(pv);
          if (s.ct.xong) return true;
          if ((s.ct.co.gach || 0) >= s.ct.can.gach) throw loi('Công trình đã đủ gạch — góp nông sản còn thiếu nhé!');
          const xong = gopCt(s, me, { gach: 1 }, 1);
          await ghiC('ct:' + pv.k, s);
          return xong;
        });
      }
      kq.conGach = Math.max(0, CT_GACH_NGAY - gachHomNay(f));
      kq.cau = kq.conGach > 0 && f.ctq.i < f.ctq.ds.length ? cauChoHs(f.ctq.ds[f.ctq.i]) : null;
      await h.ghi(me, f);
      return kq;
    }));
  }));
  // Gop nong san trong kho cho cong trinh
  app.post('/api/farm/ct/gop', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, k = String((req.body && req.body.k) || ''), n = Math.floor(Number(req.body && req.body.n));
    const pv = await phamVi(me);
    await h.traLoi(res, h.lanLuot(me, async () => {
      if (!h.SP[k] || !(n >= 1)) throw loi('Món góp chưa hợp lệ.');
      const f = await h.doc(me);
      if ((f.kho[k] || 0) < n) throw loi('Kho không đủ ' + h.SP[k].vn.toLowerCase() + '.');
      const xong = await khoaC('ct:' + pv.k, async () => {
        const s = await layCt(pv);
        const thieu = (s.ct.can[k] || 0) - (s.ct.co[k] || 0);
        if (s.ct.xong || thieu <= 0) throw loi('Công trình không cần thêm món này nữa.');
        const so = Math.min(n, thieu);
        f.kho[k] -= so;
        if (!f.kho[k]) delete f.kho[k];
        f.xp += so;
        const x = gopCt(s, me, { [k]: so }, so * CT_DIEM_SP);
        await ghiC('ct:' + pv.k, s);
        return { xong: x, so };
      });
      await h.ghi(me, f);
      return { ok: true, xong: xong.xong, so: xong.so, st: await h.trangThai(me, f) };
    }));
  }));
  // Nhan qua cong trinh da xay xong: ban sao nho cua cong trinh (lan dau) + xu theo cong gop
  app.post('/api/farm/ct/nhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, k = String((req.body && req.body.k) || '');
    const pv = await phamVi(me);
    await h.traLoi(res, h.lanLuot(me, () => khoaC('ct:' + pv.k, async () => {
      const s = await layCt(pv);
      const x = (s.xay || []).find((c) => c.k === k && c.nhan.indexOf(me) < 0 && (c.gop[me] || 0) >= CT_DIEM_NHAN);
      if (!x) throw loi('Chưa có quà công trình cho em.');
      const f = await h.doc(me);
      x.nhan.push(me);
      const xu = Math.min(60, 10 + x.gop[me]);
      f.xu += xu;
      f.xp += 10;
      f.ctCo = f.ctCo || [];
      let mon = '';
      if (f.ctCo.indexOf(k) < 0) { f.ctCo.push(k); f.tui[k] = (f.tui[k] || 0) + 1; mon = k; }
      await ghiC('ct:' + pv.k, s);
      await h.ghi(me, f);
      return { ok: true, xu, mon, st: await h.trangThai(me, f) };
    })));
  }));

  // Le hoi: nau mon le hoi (chon dung ten chu Han) -> gop vao muc tieu chung
  app.post('/api/farm/lh/nau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, goi = String((req.body && req.body.goi) || '');
    if (!dangLeHoi()) return res.status(400).json({ error: 'Lễ hội chỉ mở Thứ Bảy và Chủ nhật.' });
    const pv = await phamVi(me);
    const { tuan, lh } = leHoiTuan();
    const m = lh.mon;
    await h.traLoi(res, h.lanLuot(me, async () => {
      if (goi !== m.zh) throw loi('Tên món chưa đúng — nhìn lại tranh rồi chọn lại nhé!');
      const f = await h.doc(me);
      Object.keys(m.can).forEach((x) => { if ((f.kho[x] || 0) < m.can[x]) throw loi('Chưa đủ nguyên liệu: cần ' + m.can[x] + ' ' + h.SP[x].vn.toLowerCase() + '. Mua thêm ở chợ nhé!'); });
      const kq = await khoaC('lh:' + pv.k + ':' + tuan, async () => {
        const sl = (await docC('lh:' + pv.k + ':' + tuan)) || { n: 0, gop: {}, nhan: [] };
        sl.n++;
        sl.gop[me] = (sl.gop[me] || 0) + 1;
        await ghiC('lh:' + pv.k + ':' + tuan, sl);
        return { n: sl.n, em: sl.gop[me], du: sl.n === mucLh(pv.ids.length) };
      });
      Object.keys(m.can).forEach((x) => { f.kho[x] -= m.can[x]; if (!f.kho[x]) delete f.kho[x]; });
      f.xu += LH_XU_MON;
      f.xp += 3;
      await h.ghi(me, f);
      return Object.assign({ ok: true, xu: LH_XU_MON, st: await h.trangThai(me, f) }, kq);
    }));
  }));
  app.post('/api/farm/lh/nhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    if (!dangLeHoi()) return res.status(400).json({ error: 'Lễ hội đã kết thúc.' });
    const pv = await phamVi(me);
    const { tuan, lh } = leHoiTuan();
    await h.traLoi(res, h.lanLuot(me, () => khoaC('lh:' + pv.k + ':' + tuan, async () => {
      const sl = (await docC('lh:' + pv.k + ':' + tuan)) || { n: 0, gop: {}, nhan: [] };
      if (sl.n < mucLh(pv.ids.length)) throw loi('Lễ hội chưa đủ ' + mucLh(pv.ids.length) + ' món — cùng nấu thêm nhé!');
      if (!(sl.gop[me] > 0)) throw loi('Em nấu ít nhất 1 món lễ hội để nhận quà nhé.');
      if (sl.nhan.indexOf(me) >= 0) throw loi('Em đã nhận quà lễ hội này rồi.');
      sl.nhan.push(me);
      const f = await h.doc(me);
      f.tui[lh.qua] = (f.tui[lh.qua] || 0) + 1;
      f.xu += LH_XU_NHAN;
      f.xp += 8;
      await ghiC('lh:' + pv.k + ':' + tuan, sl);
      await h.ghi(me, f);
      return { ok: true, mon: lh.qua, xu: LH_XU_NHAN, st: await h.trangThai(me, f) };
    })));
  }));

  // Ban hoc cap doi
  app.post('/api/farm/hb/moi/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    await h.traLoi(res, h.cungLop(me, id).then(() => h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      if (fm.hb && fm.hb.ban) throw loi('Em đã có bạn học rồi.');
      if (ff.hb && ff.hb.ban) throw loi('Bạn này đã có bạn học khác rồi.');
      ff.hbMoi = (ff.hbMoi || []).filter((x) => x.ai !== me);
      if (ff.hbMoi.length >= HB_MOI_TOI_DA) throw loi('Bạn này đang có nhiều lời mời quá — thử bạn khác nhé.');
      ff.hbMoi.unshift({ ai: me, t: Date.now() });
      fm.hbGui = id;
      h.ghiNk(ff, { ai: me, l: 'hbmoi' });
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true };
    })));
  }));
  app.post('/api/farm/hb/dongy/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    await h.traLoi(res, h.cungLop(me, id).then(() => h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      if (!(fm.hbMoi || []).some((x) => x.ai === id)) throw loi('Lời mời này không còn nữa.');
      fm.hbMoi = (fm.hbMoi || []).filter((x) => x.ai !== id);
      if (fm.hb && fm.hb.ban) throw loi('Em đã có bạn học rồi.');
      if (ff.hb && ff.hb.ban) { await h.ghi(me, fm); throw loi('Bạn này vừa kết đôi với bạn khác mất rồi.'); }
      const ngay = d.vnDayKey();
      fm.hb = { ban: id, tu: ngay, chuoi: 0, cuoi: '' };
      ff.hb = { ban: me, tu: ngay, chuoi: 0, cuoi: '' };
      fm.hbMoi = []; ff.hbMoi = [];
      delete fm.hbGui; delete ff.hbGui;
      h.ghiNk(ff, { ai: me, l: 'hbok' });
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true };
    })));
  }));
  app.post('/api/farm/hb/tuchoi/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      f.hbMoi = (f.hbMoi || []).filter((x) => x.ai !== id);
      await h.ghi(me, f);
      return { ok: true };
    }));
  }));
  app.post('/api/farm/hb/huy', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const f0 = await h.doc(me);
    const id = f0.hb && f0.hb.ban;
    if (!id) {
      // huy loi moi da gui
      await h.traLoi(res, h.lanLuot(me, async () => { const f = await h.doc(me); delete f.hbGui; await h.ghi(me, f); return { ok: true }; }));
      return;
    }
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      delete fm.hb;
      if (ff.hb && ff.hb.ban === me) delete ff.hb;
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true };
    }));
  }));
  // Ruong doi: ca hai dat HB_MUC sao hoc hom nay -> moi ban tu mo phan cua minh; chuoi ngay tinh chung
  app.post('/api/farm/hb/ruong', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const f0 = await h.doc(me);
    const id = f0.hb && f0.hb.ban;
    if (!id) return res.status(400).json({ error: 'Em chưa có bạn học.' });
    const [sm, sb] = await Promise.all([saoHomNay(me), saoHomNay(id)]);
    if (sm < HB_MUC || sb < HB_MUC) return res.status(400).json({ error: 'Cả hai bạn cần đạt ' + HB_MUC + ' sao học hôm nay mới mở được rương đôi.' });
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      const ngay = d.vnDayKey();
      if (!fm.hb || fm.hb.ban !== id) throw loi('Em chưa có bạn học.');
      if (fm.hb.nhan === ngay) throw loi('Hôm nay em đã mở rương đôi rồi.');
      // chuoi: lan dau trong ngay (cua ca doi) moi tang
      if (fm.hb.cuoi !== ngay) {
        const chuoi = fm.hb.cuoi === ngayTruoc(ngay) ? (fm.hb.chuoi || 0) + 1 : 1;
        fm.hb.chuoi = chuoi; fm.hb.cuoi = ngay;
        if (ff.hb && ff.hb.ban === me) { ff.hb.chuoi = chuoi; ff.hb.cuoi = ngay; }
      }
      fm.hb.nhan = ngay;
      const chuoi = fm.hb.chuoi;
      const xu = 10 + Math.min(20, 2 * chuoi);
      fm.xu += xu;
      fm.xp += 3;
      const qua = chuoi % 7 === 0 ? h.moQua(fm, h.lvTuXp(fm.xp), true) : null;
      if (ff.hb && ff.hb.ban === me) await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true, xu, chuoi, qua, st: await h.trangThai(me, fm) };
    }));
  }));
  app.post('/api/farm/hb/nhac', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const f0 = await h.doc(me);
    const id = f0.hb && f0.hb.ban;
    if (!id) return res.status(400).json({ error: 'Em chưa có bạn học.' });
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      const ngay = d.vnDayKey();
      if (fm.hb.nhac === ngay) throw loi('Hôm nay em đã nhắc bạn rồi.');
      fm.hb.nhac = ngay;
      h.ghiNk(ff, { ai: me, l: 'hbnhac' });
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true };
    }));
  }));

  // Thach dau chu Han
  app.post('/api/farm/td/moi/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    try { await h.cungLop(me, id); } catch (e) { if (e.farm) return res.status(400).json({ error: e.message }); throw e; }
    const ngay = d.vnDayKey();
    const f0 = await h.doc(me);
    if ((f0.tdTao && f0.tdTao.d === ngay ? f0.tdTao.n : 0) >= TD_TAO_NGAY) return res.status(400).json({ error: 'Mỗi ngày mời tối đa ' + TD_TAO_NGAY + ' trận thách đấu.' });
    for (const x of (f0.td || []).slice(0, 10)) {
      const td = await docC('td:' + x);
      if (td && !td.xong && (td.a === id || td.b === id) && Date.now() - td.t < TD_HAN_MS) return res.status(400).json({ error: 'Em và bạn này đang có một trận chưa xong.' });
    }
    const ub = await d.findUserById(id);
    if (!ub) return res.status(400).json({ error: 'Không tìm thấy bạn này.' });
    const [da, db] = await Promise.all([h.deChuHan(req.user), h.deChuHan(ub)]);
    const thay = {}, ds = [];
    const lay = (nguon, n) => { let c = 0; for (const q of nguon) { if (c >= n) break; if (!thay[q.zh]) { thay[q.zh] = 1; ds.push(q); c++; } } };
    lay(da.ds, TD_SO / 2); lay(db.ds, TD_SO - ds.length); lay(da.ds, TD_SO - ds.length);
    if (ds.length < 5) return res.status(400).json({ error: 'Chưa đủ từ vựng để ra đề thách đấu.' });
    const tid = Math.random().toString(36).slice(2, 10);
    const td = { id: tid, a: me, b: id, t: Date.now(), ds: tronMang(ds), kq: {}, xong: 0, thang: null };
    await ghiC('td:' + tid, td);
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fm = await h.doc(me), ff = await h.doc(id);
      fm.tdTao = { d: ngay, n: (fm.tdTao && fm.tdTao.d === ngay ? fm.tdTao.n : 0) + 1 };
      fm.td = [tid].concat(fm.td || []).slice(0, 15);
      ff.td = [tid].concat(ff.td || []).slice(0, 15);
      h.ghiNk(ff, { ai: me, l: 'td', tid });
      await h.ghi(id, ff);
      await h.ghi(me, fm);
      return { ok: true, id: tid };
    }));
  }));
  // Bat dau / xem tran: tra de (khong kem dap an); lan dau bam bat dau thi tinh gio
  app.post('/api/farm/td/:tid/bd', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, tid = String(req.params.tid);
    await h.traLoi(res, khoaC('td:' + tid, async () => {
      const td = await docC('td:' + tid);
      if (!td || (td.a !== me && td.b !== me)) throw loi('Không tìm thấy trận này.');
      if (td.xong) throw loi('Trận này đã kết thúc.');
      const em = td.kq[me] || (td.kq[me] = { tl: [], bd: Date.now(), xong: 0 });
      if (em.xong) throw loi('Em đã làm xong — chờ bạn làm nhé.');
      await ghiC('td:' + tid, td);
      return { id: tid, i: em.tl.length, dung: em.tl.filter((x) => x.dung).length, ds: td.ds.map((q) => ({ k: q.k, hoi: q.hoi, lua: q.lua })) };
    }));
  }));
  app.post('/api/farm/td/:tid/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, tid = String(req.params.tid), b = req.body || {};
    const ten = await d.loadUserNames();
    await h.traLoi(res, khoaC('td:' + tid, async () => {
      const td = await docC('td:' + tid);
      if (!td || (td.a !== me && td.b !== me)) throw loi('Không tìm thấy trận này.');
      const em = td.kq[me];
      if (!em || em.xong || td.xong) throw loi('Lượt này đã kết thúc.');
      const i = em.tl.length;
      if (Number(b.i) !== i) throw loi('Câu này em đã trả lời rồi.');
      const q = td.ds[i], chon = Math.floor(Number(b.chon));
      const dung = chon === q.dap;
      em.tl.push({ chon, dung });
      const kq = { ok: true, dung, dap: q.dap, zh: q.zh, py: q.py, vn: q.vn };
      if (em.tl.length >= td.ds.length) {
        em.xong = Date.now();
        em.ms = em.xong - em.bd;
        await ketThucTd(td);
        kq.tran = tomTd(td, me, ten);
      }
      await ghiC('td:' + tid, td);
      return kq;
    }));
  }));

  // Danh sach ban de chon (moi thach dau / ban hoc): ban cung lop, chua co lop thi cong dong
  app.get('/api/farm/chung/ban', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const pv = await phamVi(me);
    const [cd, ten] = await Promise.all([h.taiCongDong(), d.loadUserNames()]);
    const theo = {};
    cd.forEach((x) => { theo[x.id] = x; });
    const q = String(req.query.q || '').trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
    let ids = pv.loai === 'lop' ? pv.ids.filter((id) => theo[id]) : cd.map((x) => x.id);
    ids = ids.filter((id) => id !== me && ten[id]);
    if (q) ids = ids.filter((id) => ten[id].toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').indexOf(q) >= 0);
    res.json({ pham: pv.ten, ds: ids.slice(0, 40).map((id) => ({ id, ten: ten[id], av: theo[id] ? theo[id].av : null, lv: theo[id] ? theo[id].lv : 0 })) });
  }));

  return { initTable, CT, LH };
};
