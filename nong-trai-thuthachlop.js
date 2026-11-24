// Thuong "🏆 Thử thách cả lớp 全班挑战" vao nong trai (2026-11-24) — chi endpoint nhan thuong.
// Tien do / chi tieu / dieu kien tinh o thu-thach-lop.js (trang /thu-thach-lop); o day chi tra thuong vao nong trai em:
//   moi moc (50% / 100% / 150%) 1 lan / tuan: 20 / 40 / 20 xu (toi da 80 xu / tuan);
//   moc 100% lan DAU TIEN: them Cup ca lop 全班奖杯 vao tui do (do doc quyen, khong ban, giu mai).
//   Phai tu gop >= 10 cau dung moi hoac >= 1 phan bai moi trong tuan do. Nhan duoc tuan nay + tuan truoc.
// Du lieu rieng: f.ttl = { w: { '<tuan>': [50, 100, …] } (giu 4 tuan), cup: 1, xu: tong xu da nhan }.
// Ghi trong h.lanLuot(em) -> bam nhieu lan / nhieu thiet bi cung chi nhan 1 lan.
const Ttl = require('./thu-thach-lop');

const GIU_TUAN = 4;
const TT_TTL = {
  [Ttl.CUP.k]: { zh: Ttl.CUP.zh, py: Ttl.CUP.py, vn: Ttl.CUP.vn, lv: 1, doc: 1, dep: 26 },
};

// Thuan (khong can may chu) — dung o day va trong tools/thu-kinh-te-nong-trai.js.
// Tra thuong cac moc `dat` (vd [50, 100]) cua tuan w cho nong trai f; du = em du dieu kien gop.
// Tra ve { xu, cup, moc: [p…] } (rong neu khong co gi moi).
function traThuong(f, w, dat, du) {
  const kq = { xu: 0, cup: 0, moc: [] };
  if (!du || !Array.isArray(dat) || !dat.length) return kq;
  const x = f.ttl && typeof f.ttl === 'object' ? f.ttl : (f.ttl = {});
  x.w = x.w && typeof x.w === 'object' ? x.w : {};
  const da = Array.isArray(x.w[w]) ? x.w[w] : (x.w[w] = []);
  Ttl.MOC.forEach((m) => {
    if (dat.indexOf(m.p) < 0 || da.indexOf(m.p) >= 0) return;
    da.push(m.p);
    kq.moc.push(m.p);
    kq.xu += m.xu;
    if (m.cup && !x.cup) {
      x.cup = 1;
      f.tui = f.tui || {};
      f.tui[Ttl.CUP.k] = (f.tui[Ttl.CUP.k] || 0) + 1;
      kq.cup = 1;
    }
  });
  if (!da.length) delete x.w[w];
  f.xu = (f.xu || 0) + kq.xu;
  x.xu = (x.xu || 0) + kq.xu;
  // chi giu GIU_TUAN tuan gan nhat
  Object.keys(x.w).sort().slice(0, -GIU_TUAN).forEach((k) => { delete x.w[k]; });
  return kq;
}

function gan(app, d, h) {
  Object.keys(TT_TTL).forEach((k) => { if (!h.TT[k]) h.TT[k] = TT_TTL[k]; });
  const api = Ttl.api; // null neu thu-thach-lop.js khong duoc nap
  if (!api) return;
  // trang /thu-thach-lop doc cac moc em da nhan
  api.docNhan = async (uid) => {
    const f = await h.doc(uid);
    const x = f.ttl || {};
    return { w: x.w || {}, cup: !!x.cup };
  };

  app.post('/api/farm/thuthachlop/nhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const cn = await api.choNhan(me);
      if (!cn.lop) throw h.loi('Em chưa vào lớp nào. Nhập mã lớp thầy cô đưa ở trang chủ để cùng cả lớp làm thử thách nhé.');
      const f = await h.doc(me);
      const ket = [];
      let xu = 0, cup = 0;
      cn.tuan.forEach((t) => {
        const r = traThuong(f, t.w, t.dat, t.du);
        if (r.moc.length) { ket.push({ tuan: t.w, moc: r.moc, xu: r.xu }); xu += r.xu; cup = cup || r.cup; }
      });
      if (!ket.length) {
        const coDat = cn.tuan.some((t) => t.dat.length);
        const du = cn.tuan.some((t) => t.du && t.dat.length);
        throw h.loi(!coDat ? 'Lớp em chưa đạt mốc nào — cùng học thêm để đạt 50% nhé!'
          : !du ? 'Em cần tự góp ít nhất 10 câu đúng mới (hoặc làm 1 phần bài mới) trong tuần thì mới nhận được thưởng.'
            : 'Em đã nhận hết phần thưởng của các mốc lớp đạt rồi.');
      }
      await h.ghi(me, f);
      return { ok: true, ket, xu, cup: cup ? Ttl.CUP : null, xuCo: f.xu };
    }));
  }));
}

module.exports = { gan, TT_TTL, _thu: { traThuong, GIU_TUAN } };
