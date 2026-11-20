// Goi tu vung Noel 圣诞词汇 trong nong trai (/nong-trai) — 2026-11-18.
//  - 12 tu Noel (the tu co hinh, nghe), 4 cau mau ghep voi tu rat co ban (我, 很, 喜欢, 是, 的...), roi luyen tap 10 cau.
//  - Bai luyen tap do MAY CHU ra de + giu dap an + cham tung cau (client chi gui lua chon), it nhat 7/10 dung moi qua.
//  - Qua lan dau qua bai (1 lan / tai khoan): xu + kinh nghiem + cay thong Noel 圣诞树 vao tui (neu em chua co cay), da co thi them xu.
//  - LUAT CUNG (co giao): cau hoi cua nong trai chi duoc dung cac tu Noel nay SAU KHI em hoc xong bai nay:
//      daHoc(f) -> true khi em da qua bai; tu() -> danh sach tu; themTu(...) them tu Noel vao tuHocCua (chi trong mua le).
// Du lieu tren nong trai: f.ntv = { xong: 'YYYY-MM-DD', dung, lan } (da qua bai), f.ntvd = bai luyen tap dang lam.
const Noel = require('./nong-trai-noel');

// h = ten hinh trong /images/farm (noel-* co san, ntv-* ve rieng cho bai nay)
const TU = [
  { zh: '圣诞节', py: 'Shèngdàn jié', vn: 'Lễ Giáng sinh (Noel)', h: 'ntv-le' },
  { zh: '圣诞老人', py: 'Shèngdàn lǎorén', vn: 'Ông già Noel', h: 'ntv-ongia' },
  { zh: '圣诞树', py: 'Shèngdànshù', vn: 'Cây thông Noel', h: 'noel-thong' },
  { zh: '礼物', py: 'lǐwù', vn: 'Món quà', h: 'noel-qua' },
  { zh: '雪人', py: 'xuěrén', vn: 'Người tuyết', h: 'ntv-nguoituyet' },
  { zh: '雪花', py: 'xuěhuā', vn: 'Bông tuyết', h: 'noel-tuyet' },
  { zh: '铃铛', py: 'língdang', vn: 'Cái chuông nhỏ', h: 'noel-chuong' },
  { zh: '袜子', py: 'wàzi', vn: 'Chiếc tất (vớ)', h: 'ntv-tat' },
  { zh: '星星', py: 'xīngxing', vn: 'Ngôi sao', h: 'noel-sao' },
  { zh: '快乐', py: 'kuàilè', vn: 'Vui vẻ', h: 'ntv-vui' },
  { zh: '新年', py: 'xīnnián', vn: 'Năm mới', h: 'ntv-namoi' },
  { zh: '下雪', py: 'xià xuě', vn: 'Tuyết rơi', h: 'ntv-tuyetroi' },
];
// Cau mau: tung tu co pinyin; n = 1 la tu Noel (to mau), con lai la tu rat co ban (HSK1)
const w = (zh, py, n) => ({ zh, py, n: n ? 1 : 0 });
const CAU = [
  { zh: '我很喜欢圣诞树。', py: 'Wǒ hěn xǐhuan Shèngdànshù.', vn: 'Mình rất thích cây thông Noel.',
    ds: [w('我', 'wǒ'), w('很', 'hěn'), w('喜欢', 'xǐhuan'), w('圣诞树', 'Shèngdànshù', 1), w('。', '')] },
  { zh: '这是圣诞老人的礼物。', py: 'Zhè shì Shèngdàn lǎorén de lǐwù.', vn: 'Đây là quà của ông già Noel.',
    ds: [w('这', 'zhè'), w('是', 'shì'), w('圣诞老人', 'Shèngdàn lǎorén', 1), w('的', 'de'), w('礼物', 'lǐwù', 1), w('。', '')] },
  { zh: '下雪了，我们做雪人吧！', py: 'Xià xuě le, wǒmen zuò xuěrén ba!', vn: 'Tuyết rơi rồi, chúng mình đắp người tuyết đi!',
    ds: [w('下雪', 'xià xuě', 1), w('了', 'le'), w('，', ''), w('我们', 'wǒmen'), w('做', 'zuò'), w('雪人', 'xuěrén', 1), w('吧', 'ba'), w('！', '')] },
  { zh: '圣诞节快乐！新年快乐！', py: 'Shèngdàn jié kuàilè! Xīnnián kuàilè!', vn: 'Giáng sinh vui vẻ! Chúc mừng năm mới!',
    ds: [w('圣诞节', 'Shèngdàn jié', 1), w('快乐', 'kuàilè', 1), w('！', ''), w('新年', 'xīnnián', 1), w('快乐', 'kuàilè', 1), w('！', '')] },
];
const SO_CAU = 10;
const CAN_DUNG = 7;
// 10 cau: 3 nhin chu -> nghia, 3 nghia -> chu, 2 nghe -> chu, 2 chu -> pinyin (moi cau 1 tu khac nhau)
const KIEU = ['chu', 'chu', 'chu', 'nghia', 'nghia', 'nghia', 'nghe', 'nghe', 'py', 'py'];
const QUA = { xu: 50, xp: 20, cay: 'noel-thong', xuThay: 40 }; // da co cay thong -> them xuThay xu
const BAT_CACH = 8000;   // 2 lan bat dau cach nhau it nhat 8 giay
const BAT_NGAY = 30;     // toi da 30 lan / ngay
const TL_CACH = 700;     // 2 cau tra loi cach nhau it nhat 0,7 giay

const tron = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const ma = (s) => Buffer.from(encodeURIComponent(s)).toString('base64');
const daHoc = (f) => !!(f && f.ntv && f.ntv.xong);
const tu = () => TU.map((v) => ({ zh: v.zh, py: v.py, vn: v.vn, noel: 1 }));

// Them tu Noel vao bo tu em dang hoc (tuHocCua) — CHI khi em da hoc xong bai Noel va dang trong mua le.
function themTu(ds, thay, f, ngay) {
  try {
    if (!daHoc(f) || !Noel.trongMua(ngay)) return;
    tu().forEach((v) => { if (!thay[v.zh]) { thay[v.zh] = 1; ds.push(v); } });
  } catch (e) { /* bo qua: khong lam hong bo tu bai hoc */ }
}

function taoCau(v, k) {
  const khac = tron(TU.filter((x) => x.zh !== v.zh)).slice(0, 3);
  let hoi, lua, dap;
  if (k === 'chu') { hoi = { zh: v.zh, py: v.py }; lua = [v.vn].concat(khac.map((x) => x.vn)); dap = v.vn; }
  else if (k === 'nghia') { hoi = { vn: v.vn, h: v.h }; lua = [v.zh].concat(khac.map((x) => x.zh)); dap = v.zh; }
  else if (k === 'nghe') { hoi = { nghe: ma(v.zh), p: ma(v.py) }; lua = [v.zh].concat(khac.map((x) => x.zh)); dap = v.zh; }
  else { hoi = { zh: v.zh }; lua = [v.py].concat(khac.map((x) => x.py)); dap = v.py; }
  lua = tron(lua);
  return { k, hoi, lua, dap: lua.indexOf(dap), zh: v.zh };
}
const choHs = (q) => ({ k: q.k, hoi: q.hoi, lua: q.lua });

function gan(app, d, h) {
  const muaNay = () => Noel.trongMua(d.vnDayKey());
  h.ttThem.push((userId, f) => (muaNay() ? { ntv: { da: daHoc(f) } } : {}));
  const coCay = (f) => (f.o || []).some((o) => o.k === QUA.cay) || !!(f.tui && f.tui[QUA.cay]);
  const tomEm = (f) => (daHoc(f) ? { xong: f.ntv.xong, dung: f.ntv.dung } : null);
  const dangLam = (f) => {
    const x = f.ntvd;
    if (!x || x.xong || !Array.isArray(x.ds) || x.ngay !== d.vnDayKey()) return null;
    return { id: x.id, ds: x.ds.map(choHs), tl: x.tl, dung: x.tl.filter((t) => t.dung).length };
  };

  app.get('/api/farm/noel/tv', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id);
    res.json({ mua: muaNay(), tu: TU, cau: CAU, so: SO_CAU, can: CAN_DUNG, qua: QUA, em: tomEm(f), dang: dangLam(f), coCay: coCay(f) });
  }));

  // Bat dau 1 bai luyen tap moi (10 tu khac nhau, kieu cau tron)
  app.post('/api/farm/noel/tv/bat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      if (!muaNay()) throw h.loi('Mùa Noel đã qua — hẹn em mùa sau nhé!');
      const f = await h.doc(me);
      const ngay = d.vnDayKey(), cu = f.ntvd && f.ntvd.ngay === ngay ? f.ntvd : null;
      if (cu && Date.now() - cu.t < BAT_CACH) throw h.loi('Chờ vài giây rồi bắt đầu lại nhé.');
      const lan = (cu ? cu.lan || 0 : 0) + 1;
      if (lan > BAT_NGAY) throw h.loi('Hôm nay em luyện nhiều lắm rồi — mai làm tiếp nhé!');
      const kieu = tron(KIEU);
      const ds = tron(TU).slice(0, SO_CAU).map((v, i) => taoCau(v, kieu[i]));
      f.ntvd = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7), t: Date.now(), lt: Date.now(), ngay, lan, ds, tl: [] };
      await h.ghi(me, f);
      return { dang: dangLam(f) };
    }));
  }));

  // Tra loi cau i (lan luot tung cau): may chu cham; cau cuoi tra ket qua + qua lan dau
  app.post('/api/farm/noel/tv/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      const x = f.ntvd;
      if (!x || x.xong || x.id !== String(b.id || '') || x.ngay !== d.vnDayKey()) throw h.loi('Bài luyện tập đã hết hạn — bắt đầu lại nhé.');
      const i = Math.floor(Number(b.i));
      if (i !== x.tl.length || !x.ds[i]) throw h.loi('Câu này đã trả lời rồi.');
      if (Date.now() - x.lt < TL_CACH) throw h.loi('Chậm lại một chút nhé!');
      const q = x.ds[i], c = Math.floor(Number(b.c));
      const dung = c === q.dap;
      x.tl.push({ c, dung });
      x.lt = Date.now();
      const v = TU.find((t) => t.zh === q.zh) || {};
      const kq = { dung, dap: q.dap, zh: v.zh, py: v.py, vn: v.vn };
      if (x.tl.length >= x.ds.length) {
        x.xong = true;
        const soDung = x.tl.filter((t) => t.dung).length, dat = soDung >= CAN_DUNG;
        let qua = null;
        if (dat && !daHoc(f)) {
          const lanDau = !coCay(f);
          f.xu += QUA.xu + (lanDau ? 0 : QUA.xuThay);
          f.xp += QUA.xp;
          if (lanDau) { f.tui = f.tui || {}; f.tui[QUA.cay] = (f.tui[QUA.cay] || 0) + 1; }
          qua = { xu: QUA.xu + (lanDau ? 0 : QUA.xuThay), xp: QUA.xp, cay: lanDau ? QUA.cay : null };
          f.ntv = { xong: d.vnDayKey(), dung: soDung, lan: 1 };
        } else if (dat) {
          f.ntv.lan = (f.ntv.lan || 1) + 1;
          if (soDung > (f.ntv.dung || 0)) f.ntv.dung = soDung;
        }
        kq.ket = { dung: soDung, tong: x.ds.length, can: CAN_DUNG, dat, qua };
      }
      await h.ghi(me, f);
      if (kq.ket) { kq.em = tomEm(f); kq.st = await h.trangThai(me, f); }
      return kq;
    }));
  }));
}

module.exports = { gan, TU, CAU, daHoc, tu, themTu, CAN_DUNG, SO_CAU };
