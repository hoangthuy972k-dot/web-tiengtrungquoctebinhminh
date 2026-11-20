// Ong gia Noel tha qua 圣诞老人送礼物 — 2026-11-18.
//  Khi ong gia Noel bay ngang troi nong trai cua em (public/js/nong-trai-noel.js bayOngGia), giua duong client hoi
//  POST /api/farm/noel/qua/xin; MAY CHU quyet dinh co tha hop qua khong: trong mua le, toi da SO_NGAY hop / ngay,
//  cach nhau it nhat CACH_MS, chua co hop nao dang nam tren nong trai, va them chut may rui (TI_LE).
//  Hop qua roi xuong nong trai (du + lap lanh). Cham hop -> 1 cau hoi CHI tu bai em da hoc / duoc giao (h.tuHocCua + h.taoCau):
//   dung -> qua nho (xu / hat giong / do trang tri treo len cay thong / bong tuyet), sai -> hop van nam do, CHO_SAI_MS sau hoi cau khac.
// Du lieu: f.nqua = { d, n (so hop da tha hom nay), t (luc tha gan nhat), dang: { id, t } | null, q: { id, q } | null, sai, mo (tong hop da mo) }
const Noel = require('./nong-trai-noel');
const Lich = require('./nong-trai-noel-lich');

const SO_NGAY = 3;
const CACH_MS = 5 * 60000;
const TI_LE = 0.6;
const CHO_SAI_MS = 15000;
// Qua trong hop (trong so w)
const QUA = [
  { w: 35, q: () => ({ xu: 10 + Math.floor(Math.random() * 16) }) },
  { w: 25, q: () => ({ hat: 2 }) },
  { w: 20, q: () => ({ tr: ['chau', 'no', 'chuong', 'keo', 'qua'][Math.floor(Math.random() * 5)] }) },
  { w: 20, q: () => ({ tuyet: 2 + Math.floor(Math.random() * 2) }) },
];
function chonQua() {
  let r = Math.random() * QUA.reduce((s, x) => s + x.w, 0);
  for (const x of QUA) { if (r < x.w) return x.q(); r -= x.w; }
  return QUA[0].q();
}

function gan(app, d, h) {
  const loi = h.loi;
  const muaNay = () => Noel.trongMua(d.vnDayKey());
  function quaCua(f) {
    const ngay = d.vnDayKey();
    let q = f.nqua;
    if (!q || typeof q !== 'object') q = f.nqua = { d: ngay, n: 0, t: 0, dang: null };
    if (q.d !== ngay) { q.d = ngay; q.n = 0; }
    return q;
  }
  const tom = (f) => {
    const q = f.nqua && typeof f.nqua === 'object' ? f.nqua : null, ngay = d.vnDayKey();
    return { dang: q && q.dang ? q.dang.id : '', con: Math.max(0, SO_NGAY - (q && q.d === ngay ? q.n || 0 : 0)), mo: (q && q.mo) || 0 };
  };
  h.ttThem.push((userId, f) => ({ noelQua: tom(f) }));
  if (h.CATALOG) h.CATALOG.NQUA = { SO_NGAY, CHO_SAI_MS, TEN: { zh: '圣诞礼物', py: 'Shèngdàn lǐwù', vn: 'Quà Giáng sinh' } };

  // Giua luot bay: co tha qua khong?
  app.post('/api/farm/noel/qua/xin', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, thu = process.env.NT_THU === '1' && req.body && req.body.thu;
    await h.traLoi(res, h.lanLuot(me, async () => {
      if (!muaNay()) return { roi: false };
      const f = await h.doc(me), q = quaCua(f), now = Date.now();
      if (q.dang || q.n >= SO_NGAY) return { roi: false, noelQua: tom(f) };
      if (!thu && (now - (q.t || 0) < CACH_MS || Math.random() >= TI_LE)) return { roi: false, noelQua: tom(f) };
      q.n++; q.t = now;
      q.dang = { id: Math.random().toString(36).slice(2, 10), t: now };
      delete q.q;
      await h.ghi(me, f);
      return { roi: true, id: q.dang.id, noelQua: tom(f) };
    }));
  }));

  // Cham hop qua -> 1 cau hoi tu bai em da hoc
  app.post('/api/farm/noel/qua/cau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String((req.body && req.body.id) || '');
    const bo = await h.tuHocCua(req.user);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), q = quaCua(f);
      if (!q.dang || q.dang.id !== id) throw loi('Hộp quà này không còn nữa.');
      if (q.q && q.q.id === id) return { cau: { k: q.q.q.k, hoi: q.q.q.hoi, lua: q.q.q.lua } };
      const cho = (q.sai || 0) + CHO_SAI_MS - Date.now();
      if (cho > 0) throw loi('Ông già Noel đang gói lại hộp quà — đợi ' + Math.ceil(cho / 1000) + ' giây rồi thử câu khác nhé!');
      if (!bo.coBai || bo.tu.length < 4) throw loi('Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để mở hộp quà nhé!');
      // uu tien tu den han on, roi tu hay sai, roi ngau nhien — chi trong bo tu bai em hoc
      const theoZh = (z) => bo.tu.find((v) => v.zh === z);
      const ung = (bo.den || []).map(theoZh).filter(Boolean).concat((bo.sai || []).map(theoZh).filter(Boolean));
      let cau = null;
      for (let lan = 0; lan < 8 && !cau; lan++) {
        const v = lan < 2 && ung.length ? ung[Math.floor(Math.random() * ung.length)] : bo.tu[Math.floor(Math.random() * bo.tu.length)];
        const kieu = ['nghia', 'chu', 'py'][Math.floor(Math.random() * 3)];
        const c = h.taoCau(bo, v, kieu, 4, false, true);
        if (h.cauDung(c) && c.k !== 'viet' && c.k !== 'nghe') cau = c;
      }
      if (!cau) throw loi('Chưa đủ từ trong bài em học để ra câu hỏi — học thêm một bài nhé!');
      q.q = { id, q: cau };
      await h.ghi(me, f);
      return { cau: { k: cau.k, hoi: cau.hoi, lua: cau.lua } };
    }));
  }));

  app.post('/api/farm/noel/qua/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, id = String(b.id || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), q = quaCua(f);
      if (!q.dang || q.dang.id !== id || !q.q || q.q.id !== id) throw loi('Câu hỏi đã hết — chạm hộp quà để lấy câu mới.');
      const cau = q.q.q, dung = h.chamCau(cau, { chon: b.chon });
      h.onCau(f, cau, { chon: b.chon }, dung);
      delete q.q;
      const kq = Object.assign({ ok: true, dung }, h.ketQuaCau(cau));
      if (dung) {
        q.dang = null;
        q.mo = (q.mo || 0) + 1;
        kq.qua = Lich.trao(f, chonQua(), h);
        f.xp += 2;
      } else q.sai = Date.now();
      await h.ghi(me, f);
      kq.st = await h.trangThai(me, f);
      return kq;
    }));
  }));
}

module.exports = { gan };
