// Bon mua 春夏秋冬 cho nong trai (/nong-trai) — 2026-11-23.
//  - Nong trai doi mua moi tuan that (thu Hai 00:00 gio Viet Nam), tinh tu so tuan nen ca truong cung mot mua:
//    春 xuân -> 夏 hạ -> 秋 thu -> 冬 đông -> 春 ... Tuan goc: tuan 11/1/2027 = 春 (tuan 4/1/2027 = 冬, trung cuoi mua Noel).
//  - Mua Noel (nong-trai-noel.js, 17/11–6/1): tuan nao co ngay trong mua Noel thi ep 冬 (tuyet Noel khong lech mua).
//  - Cay dung mua 当季 dāngjì: lon nhanh hon (thoi gian x0,8) + ban cho cua hang gia cao hon (x1,15);
//    cay trai mua 反季 fǎnjì: lon cham hon (x1,15). Qua diem moc HE_SO_CAY / HE_SO_BAN cua nong-trai.js
//    (he so thoi gian chot luc gieo; gia chot luc ban). Cay quy / cay lai khong theo mua.
//  - Bang mua: tu vung thoi tiet 天气 (noi dung co dinh cua tinh nang: chu Han + pinyin + nghia, bam de nghe).
//  - Thu thach mua 季节挑战: 5 cau tu bai em DA HOC (phieuLuu.layCau 'de', khong nghe), dung >= 4 -> qua mua
//    (do trang tri doc quyen mua-xuan / mua-ha / mua-thu / mua-dong, toi da 2 cai moi loai; du roi thi 30 xu).
//    Moi tuan (= moi mua) nhan qua 1 lan, toi da 3 luot thu.
// Du lieu cua em: f.bm = { tuan, lan, xong, q: { tuan, ds, tl, bd }, bo: { xuan: so lan nhan, ... } }
// May local thu: NT_BONMUA=xuan|ha|thu|dong ep mua (bo qua ca Noel).
const Noel = require('./nong-trai-noel');

const NGAY_MS = 86400000, TUAN_MS = 7 * NGAY_MS, VN_MS = 7 * 3600000;
const GOC = Date.parse('2027-01-11T00:00:00Z'); // thu Hai cua 1 tuan 春
const HS = { nhanh: 0.8, ban: 1.15, cham: 1.15 };
const SO_CAU = 5, CAN_DUNG = 4, LUOT_TUAN = 3, XU_THAY = 30, XP_QUA = 10, TT_TOI_DA = 2, HAN_MS = 15 * 60000;

const tu = (zh, py, vn) => ({ zh, py, vn });
const MUA = [
  { k: 'xuan', zh: '春', py: 'chūn', vn: 'Xuân', ic: '🌸', ten: tu('春天', 'chūntiān', 'Mùa xuân'),
    dang: ['lua', 'dautay', 'zhusun', 'mudan'], trai: ['bido', 'hongzao'],
    cau: tu('春天来了，花开了。', 'Chūntiān lái le, huā kāi le.', 'Mùa xuân đến rồi, hoa nở rồi.'),
    tu: [tu('春天', 'chūntiān', 'mùa xuân'), tu('暖和', 'nuǎnhuo', 'ấm áp'), tu('花开了', 'huā kāi le', 'hoa nở rồi'),
      tu('下雨', 'xià yǔ', 'mưa (trời mưa)'), tu('刮风', 'guā fēng', 'gió thổi, nổi gió'), tu('绿', 'lǜ', 'xanh lá')],
    tt: 'mua-xuan' },
  { k: 'ha', zh: '夏', py: 'xià', vn: 'Hạ', ic: '☀️', ten: tu('夏天', 'xiàtiān', 'Mùa hạ (mùa hè)'),
    dang: ['duahau', 'huongduong', 'cachua', 'lizhi'], trai: ['caibap', 'khoaitay'],
    cau: tu('夏天很热，我们去游泳吧。', 'Xiàtiān hěn rè, wǒmen qù yóuyǒng ba.', 'Mùa hè rất nóng, chúng mình đi bơi nhé.'),
    tu: [tu('夏天', 'xiàtiān', 'mùa hè'), tu('热', 'rè', 'nóng'), tu('太阳', 'tàiyáng', 'mặt trời'),
      tu('晴天', 'qíngtiān', 'trời nắng'), tu('出汗', 'chū hàn', 'đổ mồ hôi'), tu('游泳', 'yóuyǒng', 'bơi')],
    tt: 'mua-ha' },
  { k: 'thu', zh: '秋', py: 'qiū', vn: 'Thu', ic: '🍁', ten: tu('秋天', 'qiūtiān', 'Mùa thu'),
    dang: ['bido', 'ngo', 'nho', 'hongzao'], trai: ['dautay', 'duahau'],
    cau: tu('秋天很凉快，叶子黄了。', 'Qiūtiān hěn liángkuai, yèzi huáng le.', 'Mùa thu rất mát mẻ, lá vàng rồi.'),
    tu: [tu('秋天', 'qiūtiān', 'mùa thu'), tu('凉快', 'liángkuai', 'mát mẻ'), tu('叶子黄了', 'yèzi huáng le', 'lá vàng rồi'),
      tu('刮风', 'guā fēng', 'gió thổi, nổi gió'), tu('月亮', 'yuèliang', 'mặt trăng'), tu('收获', 'shōuhuò', 'thu hoạch')],
    tt: 'mua-thu' },
  { k: 'dong', zh: '冬', py: 'dōng', vn: 'Đông', ic: '❄️', ten: tu('冬天', 'dōngtiān', 'Mùa đông'),
    dang: ['caibap', 'carot', 'khoaitay', 'lianou'], trai: ['duahau', 'huongduong'],
    cau: tu('冬天很冷，下雪了。', 'Dōngtiān hěn lěng, xià xuě le.', 'Mùa đông rất lạnh, tuyết rơi rồi.'),
    tu: [tu('冬天', 'dōngtiān', 'mùa đông'), tu('冷', 'lěng', 'lạnh'), tu('下雪', 'xià xuě', 'tuyết rơi'),
      tu('阴天', 'yīntiān', 'trời âm u'), tu('毛衣', 'máoyī', 'áo len'), tu('结冰', 'jié bīng', 'đóng băng')],
    tt: 'mua-dong' },
];
const MUA_MAP = {};
MUA.forEach((m, i) => { MUA_MAP[m.k] = i; });
// Tu chung ve thoi tiet / mua
const TU_CHUNG = [tu('天气', 'tiānqì', 'thời tiết'), tu('季节', 'jìjié', 'mùa (trong năm)'), tu('当季', 'dāngjì', 'đúng mùa'), tu('反季', 'fǎnjì', 'trái mùa')];
const TEN = { zh: '春夏秋冬', py: 'chūn xià qiū dōng', vn: 'Bốn mùa' };
const THACH = { zh: '季节挑战', py: 'jìjié tiǎozhàn', vn: 'Thử thách mùa' };
// Do trang tri mua (doc quyen: khong ban, khong roi ra vong quay / hop qua) — hinh /images/farm/mua-*.svg
const TT_MUA = {
  'mua-xuan': { zh: '桃花树', py: 'táohuā shù', vn: 'Cây hoa đào', lv: 1, doc: 1, dep: 24, bm: 'xuan' },
  'mua-ha': { zh: '遮阳伞', py: 'zhēyángsǎn', vn: 'Ô che nắng mùa hè', lv: 1, doc: 1, dep: 24, bm: 'ha' },
  'mua-thu': { zh: '枫树', py: 'fēngshù', vn: 'Cây phong lá đỏ', lv: 1, doc: 1, dep: 24, bm: 'thu' },
  'mua-dong': { zh: '冰灯', py: 'bīngdēng', vn: 'Đèn băng', lv: 1, doc: 1, dep: 24, bm: 'dong' },
};

const thuHai = (tuan) => Date.parse(tuan + 'T00:00:00Z');
const ngayKey = (ms) => new Date(ms).toISOString().slice(0, 10);
// Mua cua tuan (khoa = ngay thu Hai, YYYY-MM-DD)
function muaTuan(tuan) {
  const ep = process.env.NT_BONMUA;
  if (ep && MUA_MAP[ep] !== undefined) return { i: MUA_MAP[ep], ep: true };
  const t0 = thuHai(tuan);
  if (Noel.trongMua(tuan) || Noel.trongMua(ngayKey(t0 + 6 * NGAY_MS))) return { i: 3, noel: true };
  const n = Math.round((t0 - GOC) / TUAN_MS);
  return { i: ((n % 4) + 4) % 4 };
}

function gan(app, d, h) {
  const loi = h.loi, CAY = h.CAY;
  // chi giu cay co that trong CAY (phong khi doi ten)
  MUA.forEach((m) => { m.dang = m.dang.filter((k) => CAY[k]); m.trai = m.trai.filter((k) => CAY[k] && m.dang.indexOf(k) < 0); });
  Object.assign(h.TT, TT_MUA);

  function nay() {
    const tuan = d.vnWeekKey(), m = muaTuan(tuan);
    const het = thuHai(tuan) - VN_MS + TUAN_MS;
    const sau = muaTuan(ngayKey(thuHai(tuan) + TUAN_MS));
    return { tuan, i: m.i, k: MUA[m.i].k, noel: !!m.noel, het, sau: MUA[sau.i].k };
  }
  const heSoCay = (k) => { const m = MUA[nay().i]; return m.dang.indexOf(k) >= 0 ? HS.nhanh : m.trai.indexOf(k) >= 0 ? HS.cham : 1; };
  h.HE_SO_CAY.push((f, k) => heSoCay(k));
  h.HE_SO_BAN.push((f, k) => (MUA[nay().i].dang.indexOf(k) >= 0 ? HS.ban : 1));

  const bmCua = (f, tuan) => {
    let b = f.bm;
    if (!b || typeof b !== 'object') b = f.bm = {};
    b.bo = b.bo || {};
    if (b.tuan !== tuan) { b.tuan = tuan; b.lan = 0; b.xong = false; delete b.q; }
    return b;
  };
  const coTt = (f, k) => (f.o || []).filter((o) => o.k === k).length + ((f.tui && f.tui[k]) || 0);
  // tom tat gui cung trang thai nong trai (st.kt.bonmua)
  function tom(f) {
    const n = nay(), b = f && f.bm && f.bm.tuan === n.tuan ? f.bm : {};
    return { k: n.k, noel: n.noel, het: n.het, sau: n.sau, tuan: n.tuan, xong: !!b.xong, lan: b.lan || 0, con: Math.max(0, LUOT_TUAN - (b.lan || 0)) };
  }
  h.ttThem.push((userId, f) => ({ bonmua: tom(f) }));
  if (h.CATALOG) h.CATALOG.BONMUA = { MUA, HS, TU_CHUNG, TEN, THACH, SO_CAU, CAN_DUNG, LUOT_TUAN, XU_THAY, TT_TOI_DA };

  function trangThaiBm(f) {
    const t = tom(f), b = f.bm || {};
    const m = MUA[MUA_MAP[t.k]];
    return Object.assign(t, {
      qua: { k: m.tt, co: coTt(f, m.tt), du: coTt(f, m.tt) >= TT_TOI_DA },
      bo: MUA.map((x) => ({ k: x.k, tt: x.tt, n: (b.bo && b.bo[x.k]) || 0, co: coTt(f, x.tt) })),
      cau: b.q && b.q.tuan === t.tuan && Date.now() - b.q.bd < HAN_MS ? { da: b.q.tl.length, so: b.q.ds.length } : null,
    });
  }

  app.get('/api/farm/bonmua', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id);
    res.json(trangThaiBm(f));
  }));

  app.post('/api/farm/bonmua/bat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const ds = await h.phieuLuu.layCau(req.user, 'de', SO_CAU, { nghe: false });
    if (ds.length < 3) return res.status(400).json({ error: 'Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi nhé!', chuaHoc: true });
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), n = nay(), b = bmCua(f, n.tuan);
      if (b.xong) throw loi('Tuần này em đã vượt Thử thách mùa rồi — mùa sau (thứ Hai) có thử thách mới nhé!');
      if (b.lan >= LUOT_TUAN) throw loi('Tuần này em đã thử ' + LUOT_TUAN + ' lượt rồi — ôn bài rồi chờ mùa sau nhé!');
      b.lan++;
      b.q = { tuan: n.tuan, ds, tl: [], bd: Date.now() };
      await h.ghi(me, f);
      return { ok: true, so: ds.length, can: Math.min(CAN_DUNG, ds.length), ds: ds.map((q) => ({ k: q.k, hoi: q.hoi, lua: q.lua })), bm: trangThaiBm(f) };
    }));
  }));

  app.post('/api/farm/bonmua/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, body = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), n = nay(), b = bmCua(f, n.tuan), r = b.q;
      if (!r || r.tuan !== n.tuan || Date.now() - r.bd > HAN_MS) { delete b.q; await h.ghi(me, f); throw loi('Lượt thử thách đã hết hạn — bấm Bắt đầu lại nhé.'); }
      const q = r.ds[r.tl.length];
      if (!q) throw loi('Lượt này đã xong.');
      const dung = h.chamCau(q, body);
      r.tl.push(dung);
      h.onCau(f, q, body, dung);
      const kq = Object.assign({ ok: true, dung }, h.ketQuaCau(q));
      if (r.tl.length < r.ds.length) { await h.ghi(me, f); return kq; }
      delete b.q;
      const so = r.tl.filter(Boolean).length, can = Math.min(CAN_DUNG, r.ds.length);
      kq.ket = { dung: so, so: r.ds.length, can, dat: so >= can && !b.xong };
      if (kq.ket.dat) {
        const m = MUA[n.i];
        b.xong = true;
        b.bo[m.k] = (b.bo[m.k] || 0) + 1;
        f.xp += XP_QUA;
        kq.ket.xp = XP_QUA;
        if (coTt(f, m.tt) < TT_TOI_DA) {
          f.tui = f.tui || {};
          f.tui[m.tt] = (f.tui[m.tt] || 0) + 1;
          kq.ket.tt = Object.assign({ k: m.tt }, TT_MUA[m.tt]);
        } else {
          f.xu += XU_THAY;
          kq.ket.xu = XU_THAY;
        }
      }
      await h.ghi(me, f);
      kq.st = await h.trangThai(me, f);
      kq.bm = trangThaiBm(f);
      return kq;
    }));
  }));
}

module.exports = { gan, MUA, MUA_MAP, HS, TT_MUA, muaTuan };
