// Dap nguoi tuyet 堆雪人 duī xuěrén — 2026-11-18.
//  - Trong mua le, bong tuyet lap lanh 雪花 xuěhuā thinh thoang hien tren nong trai cua em (client ve); cham de nhat.
//    MAY CHU gioi han: toi da NHAT_NGAY bong / ngay, moi bong cach nhau CACH_MIN..CACH_MAX giay (khong bam lien duoc).
//    Bong tuyet con co tu Lich Noel va hop qua ong gia Noel (nong-trai-noel-lich.js trao()).
//  - Du GIA_DAP bong tuyet -> dap 1 nguoi tuyet (do trang tri 'noel-tuyetnhan', vao tui do, dat len nong trai nhu do khac).
//  - Gan tung bo phan len nguoi tuyet da dat (moi bo phan ton bong tuyet, co chu Han + pinyin + nghia):
//    头 dau, 眼睛 mat, 鼻子 mui ca rot, 帽子 mu, 围巾 khan, 手 tay (canh cay), 扣子 cuc ao. Mat, mui, mu, khan can co dau truoc.
//    Luu o o.sn = { dau: 1, mat: 1, ... } (giong o.tr cua cay thong). Diem dep: moi bo phan +1, du 7 bo phan +5.
//    Nguoi tuyet da gan bo phan thi khong cat vao tui (bo phan se roi mat) — van keo doi cho duoc.
// Du lieu: f.ntuyet = { n (bong tuyet dang co), d, nhat (da nhat hom nay), sau (luc som nhat nhat bong tiep), tong }
const Noel = require('./nong-trai-noel');

const K = 'noel-tuyetnhan';
const NHAT_NGAY = 10;
const CACH_MIN = 35, CACH_MAX = 70; // giay
const GIA_DAP = 10;
const TOI_DA = 2; // nguoi tuyet moi nong trai (dang dat + trong tui)
const SN = {
  dau: { zh: '头', py: 'tóu', vn: 'Cái đầu', gia: 4, ic: '⚪' },
  mat: { zh: '眼睛', py: 'yǎnjing', vn: 'Đôi mắt', gia: 2, can: 'dau', ic: '👀' },
  mui: { zh: '鼻子', py: 'bízi', vn: 'Mũi cà rốt', gia: 2, can: 'dau', ic: '🥕' },
  mu: { zh: '帽子', py: 'màozi', vn: 'Cái mũ', gia: 4, can: 'dau', ic: '🎩' },
  khan: { zh: '围巾', py: 'wéijīn', vn: 'Khăn quàng', gia: 3, can: 'dau', ic: '🧣' },
  tay: { zh: '手', py: 'shǒu', vn: 'Đôi tay cành cây', gia: 3, ic: '🌿' },
  cuc: { zh: '扣子', py: 'kòuzi', vn: 'Hàng cúc áo', gia: 2, ic: '⚫' },
};
const SN_THU_TU = ['dau', 'mat', 'mui', 'mu', 'khan', 'tay', 'cuc'];
const TT_MUC = { zh: '雪人', py: 'xuěrén', vn: 'Người tuyết', lv: 1, doc: 1, noel: 1, dep: 10 };
const TT = { [K]: TT_MUC };

const soSn = (sn) => (sn && typeof sn === 'object' ? SN_THU_TU.filter((k) => sn[k]).length : 0);
function depSn(sn) { const n = soSn(sn); return n + (n >= SN_THU_TU.length ? 5 : 0); }

function gan(app, d, h) {
  const loi = h.loi;
  const muaNay = () => Noel.trongMua(d.vnDayKey());
  function tuyetCua(f) {
    const ngay = d.vnDayKey();
    let t = f.ntuyet;
    if (!t || typeof t !== 'object') t = f.ntuyet = {};
    t.n = t.n || 0;
    if (t.d !== ngay) { t.d = ngay; t.nhat = 0; }
    return t;
  }
  const tom = (f) => {
    const t = f.ntuyet && typeof f.ntuyet === 'object' ? f.ntuyet : {}, ngay = d.vnDayKey();
    const coDat = (f.o || []).filter((o) => o.k === K).length, trongTui = (f.tui && f.tui[K]) || 0;
    return { n: t.n || 0, con: Math.max(0, NHAT_NGAY - (t.d === ngay ? t.nhat || 0 : 0)), sau: t.sau || 0, nguoi: coDat + trongTui, tui: trongTui };
  };
  h.ttThem.push((userId, f) => ({ noelTuyet: tom(f) }));
  if (h.CATALOG) h.CATALOG.NTUYET = { K, NHAT_NGAY, GIA_DAP, TOI_DA, SN, SN_THU_TU,
    TEN: { zh: '堆雪人', py: 'duī xuěrén', vn: 'Đắp người tuyết' }, BONG: { zh: '雪花', py: 'xuěhuā', vn: 'Bông tuyết' } };

  // Nhat 1 bong tuyet lap lanh
  app.post('/api/farm/noel/tuyet/nhat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      if (!muaNay()) throw loi('Mùa Noel đã qua — hẹn em mùa sau nhé!');
      const f = await h.doc(me), t = tuyetCua(f), now = Date.now();
      if (t.nhat >= NHAT_NGAY) throw loi('Hôm nay em đã nhặt đủ ' + NHAT_NGAY + ' bông tuyết rồi — mai tuyết lại rơi nhé!');
      if (now < (t.sau || 0) - 2000) throw loi('Bông tuyết tan mất rồi — đợi bông tiếp theo nhé!');
      t.n++; t.nhat++; t.tong = (t.tong || 0) + 1;
      t.sau = now + (CACH_MIN + Math.floor(Math.random() * (CACH_MAX - CACH_MIN))) * 1000;
      await h.ghi(me, f);
      return { ok: true, noelTuyet: tom(f) };
    }));
  }));

  // Dap 1 nguoi tuyet moi (vao tui do)
  app.post('/api/farm/noel/tuyet/dap', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      if (!muaNay()) throw loi('Mùa Noel đã qua — hẹn em mùa sau nhé!');
      const f = await h.doc(me), t = tuyetCua(f);
      if (tom(f).nguoi >= TOI_DA) throw loi('Nông trại của em đã có ' + TOI_DA + ' người tuyết rồi.');
      if (t.n < GIA_DAP) throw loi('Cần ' + GIA_DAP + ' bông tuyết để đắp người tuyết — em đang có ' + t.n + '.');
      t.n -= GIA_DAP;
      f.tui = f.tui || {};
      f.tui[K] = (f.tui[K] || 0) + 1;
      f.xp += 3;
      await h.ghi(me, f);
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));

  // Gan 1 bo phan len nguoi tuyet dang dat tren nong trai
  app.post('/api/farm/noel/tuyet/phan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, id = Number(b.id), p = String(b.p || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const m = SN[p];
      if (!m) throw loi('Không có bộ phận này.');
      const f = await h.doc(me), t = tuyetCua(f);
      const o = (f.o || []).find((x) => x.id === id && x.k === K);
      if (!o) throw loi('Không tìm thấy người tuyết này — đặt người tuyết lên nông trại trước nhé.');
      o.sn = o.sn && typeof o.sn === 'object' ? o.sn : {};
      if (o.sn[p]) throw loi('Người tuyết đã có ' + m.vn.toLowerCase() + ' rồi.');
      if (m.can && !o.sn[m.can]) throw loi('Gắn ' + SN[m.can].vn.toLowerCase() + ' ' + SN[m.can].zh + ' trước đã nhé!');
      if (t.n < m.gia) throw loi('Cần ' + m.gia + ' bông tuyết — em đang có ' + t.n + '. Nhặt thêm bông tuyết lấp lánh trên nông trại nhé!');
      t.n -= m.gia;
      o.sn[p] = 1;
      const xong = soSn(o.sn) >= SN_THU_TU.length;
      f.xp += xong ? 10 : 2;
      await h.ghi(me, f);
      return { ok: true, p, xong, st: await h.trangThai(me, f) };
    }));
  }));

  if (process.env.NT_THU === '1') {
    // CHI may local: dat so bong tuyet ({ n })
    app.post('/api/farm/noel/tuyet/_thu', d.requireAuth, d.asyncRoute(async (req, res) => {
      const me = req.user.id, n = Math.max(0, Math.floor(Number(req.body && req.body.n) || 0));
      await h.traLoi(res, h.lanLuot(me, async () => {
        const f = await h.doc(me), t = tuyetCua(f);
        t.n = n; t.sau = 0;
        if (req.body && req.body.lai) t.nhat = 0;
        await h.ghi(me, f);
        return { ok: true, noelTuyet: tom(f) };
      }));
    }));
  }
}

module.exports = { gan, TT, K, SN, soSn, depSn };
