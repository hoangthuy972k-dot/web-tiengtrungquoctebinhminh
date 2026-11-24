// "🏆 Thử thách cả lớp 全班挑战" (/thu-thach-lop) — 2026-11-24.
// Moi tuan (thu Hai -> Chu nhat, gio VN, khoa = vnWeekKey) ca lop cung HOC BAI de dat 1 chi tieu chung.
// Muc dich: hoc sinh HOC BAI nhieu hon (khong phai choi nhieu hon) -> chi tinh viec hoc that trong bai hoc:
//   - cau dung MOI trong bai hoc: daily_points.lesson_correct (server.js addDailyPoints — chi phan vuot moc cao nhat,
//     toi da 300 / lan dong bo, lan dong bo dau tien cua tai khoan khong tinh). KHONG tinh thi thu, nong trai, tro choi.
//   - phan bai lam LAN DAU trong tuan: part_done.first_ms (tu vung, ngu phap, hoi thoai, kiem tra cuoi…).
// Diem hoc cua 1 em trong tuan = cau dung moi + 5 x so phan bai moi (toi da 10 phan / tuan = 50 diem).
// Moi em gop vao chi tieu chung TOI DA 3 x phan 1 nguoi (180 diem) — 1 ban hoc rat nhieu khong "ganh" ca lop duoc.
//
// Chi tieu tuan = 60 diem x so em "dang hoc" cua lop (it nhat 2):
//   so em dang hoc = thanh vien lop co hoc bai trong 4 tuan TRUOC tuan nay (cau dung moi hoac phan bai lam / lam lai);
//   lop moi chua ai hoc -> nua so thanh vien. Chi tieu CHOT lan dau tinh trong tuan (luu lai) nen khong nhay giua tuan.
// Moc: 50% · 100% · 150% "vượt chỉ tiêu". Thuong (tra o nong-trai-thuthachlop.js vao nong trai cua em, moi moc 1 lan / tuan):
//   50% -> 20 xu · 100% -> 40 xu + Cup ca lop 全班奖杯 (lan dau tien, giu mai) · 150% -> 20 xu  => toi da 80 xu / tuan.
//   Phai tu gop it nhat 10 cau dung moi HOAC 1 phan bai moi trong tuan do moi duoc nhan (khong "an theo").
//   Nhan duoc trong tuan do va ca tuan sau (hoc toi Chu nhat thi sang thu Hai van nhan).
//
// Luu tru: MySQL (USE_DB) bang thu_thach_lop (class_id, week, data JSON { n, muc, hs, luc, kq }),
// khong thi file DATA_DIR/thu_thach_lop.json { 'lop|tuan': data }. kq = ket qua chot khi tuan da het
// (ban JSON local chi giu daily_points 14 ngay nen phai chot lai).
// Nhan thuong luu trong nong trai em (f.ttl) — doc qua api.docNhan do module nong trai gan vao.
const path = require('path');

const NGAY_MS = 864e5;
const TUAN_MS = 7 * NGAY_MS;
const MOI_NGUOI = 60;          // diem 1 em / tuan trong chi tieu
const IT_NHAT_HS = 2;          // chi tieu tinh it nhat cho 2 em
const TRAN_GOP = 3 * MOI_NGUOI; // 1 em gop toi da 180 diem vao chi tieu chung
const DIEM_PHAN = 5;           // 1 phan bai moi = 5 diem
const PHAN_TOI_DA = 10;        // toi da 10 phan / tuan duoc tinh
const CAN_CAU = 10, CAN_PHAN = 1; // dieu kien nhan thuong: >= 10 cau dung moi HOAC >= 1 phan bai moi
const SO_TUAN_XET = 4;         // "dang hoc" = co hoc trong 4 tuan truoc
const MOC = [
  { p: 50, xu: 20, ten: 'Nửa chặng đường' },
  { p: 100, xu: 40, cup: 1, ten: 'Đạt chỉ tiêu' },
  { p: 150, xu: 20, ten: 'Vượt chỉ tiêu' },
];
const CUP = { k: 'ttl-cup', zh: '全班奖杯', py: 'quánbān jiǎngbēi', vn: 'Cúp Thử thách cả lớp' };
const NHO_MS = 30 * 1000; // chi dung cho tuan truoc (tuan nay luon doc moi: em vua hoc xong mo trang la thay ngay)

const ngayCong = (k, n) => new Date(Date.parse(k + 'T00:00:00Z') + n * NGAY_MS).toISOString().slice(0, 10);
const nhanTuan = (w) => {
  const f = (k) => { const d = new Date(k + 'T00:00:00Z'); return d.getUTCDate() + '/' + (d.getUTCMonth() + 1); };
  return f(w) + ' – ' + f(ngayCong(w, 6));
};
const duDieuKien = (x) => !!x && ((x.cau || 0) >= CAN_CAU || (x.phan || 0) >= CAN_PHAN);
const diemCua = (x) => (x.cau || 0) + DIEM_PHAN * Math.min(PHAN_TOI_DA, x.phan || 0);

module.exports = function (app, o) {
  const FILE = path.join(o.DATA_DIR, 'thu_thach_lop.json');
  const FILE_DIEM = path.join(o.DATA_DIR, 'daily_points.json');
  const FILE_LOP = path.join(o.DATA_DIR, 'classes.json');

  // gio "bay gio" (NT_THU=1: dat lech gio de thu ket thuc tuan / nhan thuong tuan truoc)
  let lech = 0;
  const bayGio = () => Date.now() + lech;
  const dauTuanMs = (w) => Date.parse(w + 'T00:00:00Z') - o.VN_OFFSET_MS;

  /* ---------------- luu tru ---------------- */
  async function initTable() {
    if (!o.USE_DB) return;
    await o.db().query(
      'CREATE TABLE IF NOT EXISTS thu_thach_lop (' +
        'class_id VARCHAR(36) NOT NULL, week CHAR(10) NOT NULL, data TEXT NOT NULL, updated_ms BIGINT NOT NULL DEFAULT 0, ' +
        'PRIMARY KEY (class_id, week)' +
      ')'
    );
  }
  async function docRec(cid, w) {
    if (!o.USE_DB) return (o.readJsonFile(FILE) || {})[cid + '|' + w] || null;
    const [rows] = await o.db().query('SELECT data FROM thu_thach_lop WHERE class_id = ? AND week = ?', [cid, w]);
    if (!rows.length) return null;
    try { return JSON.parse(rows[0].data); } catch (e) { return null; }
  }
  async function ghiRec(cid, w, rec) {
    if (!o.USE_DB) {
      const all = o.readJsonFile(FILE) || {};
      all[cid + '|' + w] = rec;
      // giu 26 tuan gan nhat
      const han = ngayCong(o.vnWeekKey(bayGio()), -26 * 7);
      Object.keys(all).forEach((k) => { if (k.slice(k.lastIndexOf('|') + 1) < han) delete all[k]; });
      o.writeJsonFile(FILE, all);
      return;
    }
    await o.db().query(
      'INSERT INTO thu_thach_lop (class_id, week, data, updated_ms) VALUES (?,?,?,?) ON DUPLICATE KEY UPDATE data = VALUES(data), updated_ms = VALUES(updated_ms)',
      [cid, w, JSON.stringify(rec), Date.now()]
    );
  }
  async function dsRec(cid, truocTuan, n) {
    if (!o.USE_DB) {
      const all = o.readJsonFile(FILE) || {};
      return Object.keys(all).filter((k) => k.indexOf(cid + '|') === 0).map((k) => ({ w: k.slice(cid.length + 1), rec: all[k] }))
        .filter((x) => x.w < truocTuan).sort((a, b) => (a.w < b.w ? 1 : -1)).slice(0, n);
    }
    const [rows] = await o.db().query('SELECT week, data FROM thu_thach_lop WHERE class_id = ? AND week < ? ORDER BY week DESC LIMIT ?', [cid, truocTuan, n]);
    const out = [];
    rows.forEach((r) => { try { out.push({ w: String(r.week), rec: JSON.parse(r.data) }); } catch (e) { /* bo qua */ } });
    return out;
  }

  /* ---------------- so lieu hoc that ---------------- */
  // uid -> { cau, phan } trong [tuNgay, denNgay] (khoa ngay VN) / [tuMs, denMs).
  // lamLai = true: tinh ca phan bai lam lai (last_ms) — chi dung de biet em "dang hoc".
  async function soLieu(ids, tuNgay, denNgay, tuMs, denMs, lamLai) {
    const out = {};
    ids.forEach((u) => { out[u] = { cau: 0, phan: 0 }; });
    if (!ids.length) return out;
    if (!o.USE_DB) {
      const all = o.readJsonFile(FILE_DIEM) || {};
      Object.keys(all).forEach((ngay) => {
        if (ngay < tuNgay || ngay > denNgay) return;
        ids.forEach((u) => { const r = all[ngay] && all[ngay][u]; if (r) out[u].cau += Math.max(0, r.lessonCorrect || 0); });
      });
      const done = o.loadPartDone ? await o.loadPartDone(ids) : ((o.readJsonFile(FILE_LOP) || {}).done || {});
      ids.forEach((u) => Object.keys(done[u] || {}).forEach((url) => {
        const parts = done[u][url] || {};
        Object.keys(parts).forEach((p) => {
          const f = Number(parts[p].firstMs) || 0, l = Number(parts[p].lastMs) || 0;
          if ((f >= tuMs && f < denMs) || (lamLai && l >= tuMs && l < denMs)) out[u].phan++;
        });
      }));
      return out;
    }
    const [a] = await o.db().query(
      'SELECT user_id, SUM(lesson_correct) AS s FROM daily_points WHERE user_id IN (?) AND day >= ? AND day <= ? GROUP BY user_id',
      [ids, tuNgay, denNgay]
    );
    a.forEach((r) => { if (out[r.user_id]) out[r.user_id].cau = Math.max(0, Number(r.s) || 0); });
    const [b] = lamLai
      ? await o.db().query(
        'SELECT user_id, COUNT(*) AS n FROM part_done WHERE user_id IN (?) AND ((first_ms >= ? AND first_ms < ?) OR (last_ms >= ? AND last_ms < ?)) GROUP BY user_id',
        [ids, tuMs, denMs, tuMs, denMs])
      : await o.db().query(
        'SELECT user_id, COUNT(*) AS n FROM part_done WHERE user_id IN (?) AND first_ms >= ? AND first_ms < ? GROUP BY user_id',
        [ids, tuMs, denMs]);
    b.forEach((r) => { if (out[r.user_id]) out[r.user_id].phan = Number(r.n) || 0; });
    return out;
  }

  async function lopCua(uid) {
    const st = await o.loadClassState();
    const mem = st.members && st.members[uid];
    if (!mem) return null;
    const cls = (st.classes || []).find((c) => c.id === mem.classId);
    if (!cls) return null;
    const ids = Object.keys(st.members).filter((u) => st.members[u].classId === cls.id);
    return { id: cls.id, ten: cls.name, ids };
  }

  // Chot chi tieu cua lop trong tuan w (lan dau tinh trong tuan)
  async function chiTieu(cid, ids, w) {
    let rec = await docRec(cid, w);
    if (rec && rec.muc > 0) return rec;
    const bd = dauTuanMs(w);
    const truoc = await soLieu(ids, ngayCong(w, -7 * SO_TUAN_XET), ngayCong(w, -1), bd - SO_TUAN_XET * TUAN_MS, bd, true);
    const dangHoc = ids.filter((u) => truoc[u].cau > 0 || truoc[u].phan > 0).length;
    let n = dangHoc || Math.ceil(ids.length / 2);
    n = Math.max(IT_NHAT_HS, Math.min(n, Math.max(IT_NHAT_HS, ids.length)));
    rec = Object.assign(rec || {}, { n, muc: n * MOI_NGUOI, hs: ids.length, dangHoc, luc: Date.now() });
    await ghiRec(cid, w, rec);
    return rec;
  }

  const nho = new Map(); // 'lop|tuan' -> { t, v }
  // Tien do cua lop cid trong tuan w: { muc, n, tong, pt, ds: { uid: { cau, phan, diem, gop, du } }, xong }
  async function tinh(cid, ids, w, moi) {
    const key = cid + '|' + w;
    const c = nho.get(key);
    if (!moi && c && Date.now() - c.t < NHO_MS && c.v.hsKey === ids.join(',')) return c.v;
    const rec = await chiTieu(cid, ids, w);
    const bd = dauTuanMs(w), xong = bd + TUAN_MS <= bayGio();
    const sl = await soLieu(ids, w, ngayCong(w, 6), bd, bd + TUAN_MS, false);
    const ds = {};
    let tong = 0, soGop = 0, soDu = 0;
    ids.forEach((u) => {
      const x = sl[u], diem = diemCua(x), gop = Math.min(TRAN_GOP, diem), du = duDieuKien(x);
      ds[u] = { cau: x.cau, phan: x.phan, diem, gop, du };
      tong += gop;
      if (diem > 0) soGop++;
      if (du) soDu++;
    });
    const pt = Math.floor((100 * tong) / rec.muc);
    if (xong && !rec.kq) {
      const top = ids.filter((u) => ds[u].diem > 0).sort((a, b) => ds[b].diem - ds[a].diem).slice(0, 3);
      rec.kq = { tong, pt, soGop, soDu, hs: ids.length, top };
      await ghiRec(cid, w, rec);
    }
    const v = { w, muc: rec.muc, n: rec.n, dangHoc: rec.dangHoc, tong, pt, ds, soGop, soDu, xong, kq: rec.kq || null, hsKey: ids.join(',') };
    nho.set(key, { t: Date.now(), v });
    if (nho.size > 300) nho.delete(nho.keys().next().value);
    return v;
  }

  const mocDat = (pt) => MOC.filter((m) => pt >= m.p).map((m) => m.p);

  // API cho module nong trai (nong-trai-thuthachlop.js): tinh thuong em duoc nhan
  // -> [{ w, pt, du, dat: [50, 100…] }] cho tuan truoc + tuan nay
  async function choNhan(uid) {
    const lop = await lopCua(uid);
    if (!lop) return { lop: null, tuan: [] };
    const now = bayGio(), wNay = o.vnWeekKey(now), wTruoc = o.vnWeekKey(now - TUAN_MS);
    const tuan = [];
    for (const w of [wTruoc, wNay]) {
      const t = await tinh(lop.id, lop.ids, w, true);
      const x = t.ds[uid] || { cau: 0, phan: 0 };
      tuan.push({ w, pt: t.pt, du: duDieuKien(x), dat: mocDat(t.pt) });
    }
    return { lop, tuan };
  }
  const api = { MOC, CUP, choNhan, bayGio, docNhan: null };
  module.exports.api = api;

  /* ---------------- trang /thu-thach-lop ---------------- */
  const R = '/api/thu-thach-lop';
  app.get(R, o.requireAuth, o.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const now = bayGio();
    const wNay = o.vnWeekKey(now), wTruoc = o.vnWeekKey(now - TUAN_MS);
    const conGiay = Math.max(0, Math.round((dauTuanMs(wNay) + TUAN_MS - now) / 1000));
    const luat = { moiNguoi: MOI_NGUOI, tranGop: TRAN_GOP, diemPhan: DIEM_PHAN, phanToiDa: PHAN_TOI_DA, canCau: CAN_CAU, canPhan: CAN_PHAN, moc: MOC, cup: CUP };
    const lop = await lopCua(me);
    if (!lop) return res.json({ coLop: false, tuan: wNay, nhanTuan: nhanTuan(wNay), conGiay, luat });

    const [nay, truoc, ten, daNhan] = await Promise.all([
      tinh(lop.id, lop.ids, wNay, true), tinh(lop.id, lop.ids, wTruoc, false), o.loadUserNames(),
      api.docNhan ? api.docNhan(me).catch(() => null) : Promise.resolve(null),
    ]);
    const em = nay.ds[me] || { cau: 0, phan: 0, diem: 0, gop: 0, du: false };
    // ten lay tu tai khoan (giong bang nong trai); danh sach ten giu 60 giay nen ban vua tao tai khoan co the chua co ten
    const tenCua = (u) => ten[u] || (u === me ? req.user.name : '') || 'Bạn cùng lớp';
    const xep = lop.ids.filter((u) => nay.ds[u] && nay.ds[u].diem > 0).sort((a, b) => nay.ds[b].diem - nay.ds[a].diem || String(tenCua(a)).localeCompare(String(tenCua(b)), 'vi'));
    const hang = (u, i) => ({ hang: i + 1, ten: tenCua(u), diem: nay.ds[u].diem, cau: nay.ds[u].cau, phan: nay.ds[u].phan, la: u === me });
    const top = xep.slice(0, 5).map(hang);
    const viTri = xep.indexOf(me);
    const emHang = viTri >= 5 ? hang(me, viTri) : null;

    // thuong: moi moc 1 lan / tuan (nhan o nong trai em)
    const nhan = daNhan && daNhan.w ? daNhan.w : {};
    const thuongTuan = (t, x) => MOC.map((m) => ({
      p: m.p, xu: m.xu, cup: !!m.cup, dat: t.pt >= m.p, daNhan: (nhan[t.w] || []).indexOf(m.p) >= 0,
    })).map((m) => Object.assign(m, { coThe: m.dat && !m.daNhan && duDieuKien(x) }));
    const mocNay = thuongTuan(nay, em);
    const emTruoc = truoc.ds[me] || { cau: 0, phan: 0 };
    const mocTruoc = thuongTuan(truoc, emTruoc);
    const coTheNhan = api.docNhan ? mocNay.concat(mocTruoc).filter((m) => m.coThe) : [];

    // ket qua cac tuan truoc (6 tuan)
    const ls = await dsRec(lop.id, wNay, 6);
    const lichSu = [];
    for (const x of ls) {
      let kq = x.rec.kq;
      if (!kq && dauTuanMs(x.w) + TUAN_MS <= now) kq = (await tinh(lop.id, lop.ids, x.w, true)).kq;
      if (!kq || !kq.soGop) continue; // tuan khong ai hoc (vd truoc khi lop dung tinh nang) thi khong hien
      lichSu.push({
        tuan: x.w, nhan: nhanTuan(x.w), muc: x.rec.muc, tong: kq.tong, pt: kq.pt, soGop: kq.soGop, soDu: kq.soDu, hs: kq.hs,
        moc: mocDat(kq.pt), top: (kq.top || []).map((u) => ten[u] || '').filter(Boolean),
        daNhan: (nhan[x.w] || []).slice(),
      });
    }

    res.json({
      coLop: true, lop: { ten: lop.ten, soHs: lop.ids.length },
      tuan: wNay, nhanTuan: nhanTuan(wNay), conGiay, luat,
      muc: nay.muc, n: nay.n, tong: nay.tong, pt: nay.pt, soGop: nay.soGop, soDu: nay.soDu,
      em: { cau: em.cau, phan: em.phan, diem: em.diem, gop: em.gop, du: em.du, hang: viTri >= 0 ? viTri + 1 : 0,
        canCau: Math.max(0, CAN_CAU - em.cau) },
      top, emHang,
      moc: mocNay,
      tuanTruoc: { tuan: wTruoc, nhan: nhanTuan(wTruoc), pt: truoc.pt, moc: mocTruoc, du: duDieuKien(emTruoc) },
      coNhan: !!api.docNhan, coTheNhan: coTheNhan.length, xuCoThe: coTheNhan.reduce((t, m) => t + m.xu, 0),
      coCup: !!(daNhan && daNhan.cup),
      lichSu,
    });
  }));

  // NT_THU=1: dat gio de thu (body { lech: ms } hoac { den: ISO }; {} = gio that)
  if (process.env.NT_THU === '1') {
    app.post(R + '/_gio', o.requireAuth, o.asyncRoute(async (req, res) => {
      const b = req.body || {};
      lech = b.den ? Date.parse(b.den) - Date.now() : Number(b.lech) || 0;
      if (!Number.isFinite(lech)) lech = 0;
      nho.clear();
      res.json({ ok: true, bayGio: new Date(bayGio()).toISOString(), tuan: o.vnWeekKey(bayGio()) });
    }));
  }

  return { initTable };
};

// Hang so dung chung (nong-trai-thuthachlop.js + tools/thu-kinh-te-nong-trai.js)
module.exports.MOC = MOC;
module.exports.CUP = CUP;
module.exports.duDieuKien = duDieuKien;
module.exports.diemCua = diemCua;
module.exports.api = null;
