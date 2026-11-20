// Dem nguoc nam moi 新年快乐 tren nong trai (/nong-trai) — 2026-11-18.
//  - Ngay 31/12 (gio Viet Nam): client hien chip "🎆 Còn hh:mm:ss đến năm <nam>".
//  - 00:00 ngay 1/1: phao hoa tren nong trai + thi tran (gio dau tien, hoac den khi em dong), loi chuc 新年快乐！
//  - Qua nam moi: 1 lan / tai khoan / nam, nhan tu 1/1 den het 6/1 (may chu kiem ngay + da nhan chua).
// Du lieu tren nong trai: f.nnm = { nam: 2027, t } (da nhan qua nam moi nam do).
// Thu tren may local: NT_GIO=2026-12-31T23:59:30+07:00 (dong ho cua module nay bat dau tu luc do va chay tiep),
//   hoac (chi khi NT_THU=1) POST /api/farm/noel/_gio { gio: '2026-12-31T23:59:30+07:00' | '' , xoa: 1 }.
const VN = 7 * 3600000;
const LE_DEN = '01-06';        // nhan qua den het 6/1
const PHAO_HOA = 3600000;      // phao hoa trong 1 gio dau nam moi
const QUA = { xu: 88, xp: 20 }; // 88 = "phát phát" — kem 1 mon qua bat ngo (do trang tri / vat nuoi)

let lech = 0;
function datGio(iso) {
  const t = iso ? Date.parse(iso) : NaN;
  lech = Number.isFinite(t) ? t - Date.now() : 0;
  return lech;
}
if (process.env.NT_GIO) datGio(process.env.NT_GIO);
// Gio hien tai (ms) — co tinh NT_GIO khi thu tren may local
const gio = () => Date.now() + lech;
const ngayVn = (ms) => new Date((ms == null ? gio() : ms) + VN).toISOString().slice(0, 10);
// Nam moi sap toi / vua toi: thang 12 -> nam sau; thang 1 -> nam nay. moc = 00:00 1/1 gio VN (ms)
function namMoi(ms) {
  const ng = ngayVn(ms), y = Number(ng.slice(0, 4)), nam = ng.slice(5, 7) === '12' ? y + 1 : y;
  return { ngay: ng, nam, moc: Date.UTC(nam, 0, 1) - VN };
}
function tom(f) {
  const t = gio(), n = namMoi(t), md = n.ngay.slice(5);
  const dem = md === '12-31', le = md >= '01-01' && md <= LE_DEN;
  if (!dem && !le) return null;
  return { gio: t, nam: n.nam, moc: n.moc, dem, le, phao: le && t - n.moc < PHAO_HOA, da: !!(f && f.nnm && f.nnm.nam === n.nam), qua: QUA };
}

function gan(app, d, h) {
  h.ttThem.push((userId, f) => { const x = tom(f); return x ? { nnm: x } : {}; });

  app.post('/api/farm/noel/namoi', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      const x = tom(f);
      if (!x || !x.le) throw h.loi('Quà năm mới nhận từ 1/1 đến hết 6/1 nhé!');
      if (x.da) throw h.loi('Em đã nhận quà năm mới ' + x.nam + ' rồi — chúc em năm mới học giỏi!');
      f.xu += QUA.xu;
      f.xp += QUA.xp;
      const mon = h.moQua(f, h.lvTuXp(f.xp), true);
      f.nnm = { nam: x.nam, t: Date.now() };
      await h.ghi(me, f);
      return { ok: true, qua: { xu: QUA.xu, xp: QUA.xp, mon }, st: await h.trangThai(me, f) };
    }));
  }));

  // Chi may thu (NT_THU=1): doi gio cua module nay de xem dem nguoc / phao hoa; xoa=1 thi xoa qua da nhan
  if (process.env.NT_THU === '1') {
    app.post('/api/farm/noel/_gio', d.requireAuth, d.asyncRoute(async (req, res) => {
      const b = req.body || {};
      datGio(String(b.gio || ''));
      if (b.xoa) await h.lanLuot(req.user.id, async () => { const f = await h.doc(req.user.id); delete f.nnm; await h.ghi(req.user.id, f); });
      res.json({ ok: true, gio: new Date(gio()).toISOString() });
    }));
  }
}

module.exports = { gan, gio, ngayVn, namMoi, datGio, QUA };
