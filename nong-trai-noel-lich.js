// Lich dem nguoc Noel 圣诞倒计时 Shèngdàn dàojìshí (advent calendar 1 -> 24/12) cho nong trai — 2026-11-18.
//  - 24 o cua, o so N mo duoc tu ngay N/12 (gio Viet Nam) tro di; o lo ngay van mo bu duoc den het 24/12
//    nhung chuoi "khong lo ngay nao" bi dut. Sau 24/12 lich khoa (van xem lai qua da mo).
//  - Muon mo o phai HOC hom nay: >= SAO_CAN sao hoc trong ngay HOAC xong "Hôm nay em ôn gì" (khoa '/onhn-xong|<ngay>').
//    Moi ngay toi da 1 o cua hom nay + BU_NGAY o mo bu.
//  - Qua nho moi ngay (xu, hat giong, bong tuyet cho nguoi tuyet, do trang tri treo thang len cay thong Noel cua em —
//    chua co cay / cay da du mon thi doi ra xu); o 24 qua lon (tuong tuan loc + xu + hat quy).
//    Mo du 24 o, o nao cung dung ngay -> Huy hieu "Chăm chỉ mùa Noel" (do trang tri doc quyen).
//  - Moi o kem 1 tu tieng Trung mua Noel (chu Han + pinyin + nghia) de doc to.
// Du lieu: f.nlich = { nam, mo: { '<n>': 'YYYY-MM-DD' }, q: { '<n>': [qua] }, ng: { d, n } (so o mo hom nay), hh: 1 (da nhan huy hieu) }
// May local thu: NT_NOEL_NGAY=2026-12-05 (doi "hom nay" cua lich), NT_THU=1 mo POST /api/farm/noel/_ngay { ngay } de doi luc chay.
const Noel = require('./nong-trai-noel');

const SAO_CAN = 20; // sao hoc trong ngay de mo o
const BU_NGAY = 2;  // so o mo bu toi da moi ngay (ngoai o cua hom nay)
const K_TUANLOC = 'noel-tuanloc', K_HUYHIEU = 'noel-huyhieu';
// Do trang tri doc quyen cua lich (khong ban, khong roi o vong quay / hop qua)
const TT = {
  [K_TUANLOC]: { zh: '驯鹿', py: 'xùnlù', vn: 'Tượng tuần lộc Noel', lv: 1, doc: 1, noel: 1, dep: 25 },
  [K_HUYHIEU]: { zh: '圣诞勤学章', py: 'Shèngdàn qínxué zhāng', vn: 'Huy hiệu Chăm chỉ mùa Noel', lv: 1, doc: 1, noel: 1, dep: 35 },
};
// Tu cua tung o (1..24)
const TU = [
  ['圣诞节', 'Shèngdànjié', 'Lễ Giáng sinh'], ['冬天', 'dōngtiān', 'mùa đông'], ['冷', 'lěng', 'lạnh'], ['雪', 'xuě', 'tuyết'],
  ['雪花', 'xuěhuā', 'bông tuyết'], ['雪人', 'xuěrén', 'người tuyết'], ['帽子', 'màozi', 'cái mũ'], ['围巾', 'wéijīn', 'khăn quàng cổ'],
  ['手套', 'shǒutào', 'găng tay'], ['袜子', 'wàzi', 'đôi tất'], ['星星', 'xīngxing', 'ngôi sao'], ['铃铛', 'língdang', 'cái chuông'],
  ['蜡烛', 'làzhú', 'cây nến'], ['糖果', 'tángguǒ', 'kẹo'], ['蛋糕', 'dàngāo', 'bánh kem'], ['卡片', 'kǎpiàn', 'tấm thiệp'],
  ['礼物', 'lǐwù', 'món quà'], ['圣诞树', 'Shèngdànshù', 'cây thông Noel'], ['驯鹿', 'xùnlù', 'tuần lộc'], ['雪橇', 'xuěqiāo', 'xe trượt tuyết'],
  ['圣诞老人', 'Shèngdàn lǎorén', 'ông già Noel'], ['朋友', 'péngyou', 'bạn bè'], ['快乐', 'kuàilè', 'vui vẻ'], ['平安夜', 'Píng\'ānyè', 'đêm Giáng sinh'],
].map((t, i) => ({ n: i + 1, zh: t[0], py: t[1], vn: t[2] }));
// Qua cua tung o: xu | hat (so hat giong thuong) | tr (do trang tri cay thong) | tuyet (bong tuyet) | tt (do doc quyen) | quy (hat quy)
const QUA = [
  null,
  { xu: 20 }, { hat: 2 }, { tr: 'chau' }, { tuyet: 3 }, { xu: 25 }, { tr: 'no' }, { hat: 3 }, { tuyet: 4 },
  { xu: 30 }, { tr: 'chuong' }, { hat: 3 }, { tuyet: 4 }, { xu: 35 }, { tr: 'keo' }, { tuyet: 5 }, { hat: 4 },
  { xu: 40 }, { tr: 'qua' }, { tuyet: 5 }, { xu: 45 }, { tr: 'den' }, { hat: 4 }, { xu: 50, tuyet: 5 },
  { tt: K_TUANLOC, xu: 100, quy: 1, tr: 'sao' },
];
const HUY_HIEU = { zh: '圣诞勤学章', py: 'Shèngdàn qínxué zhāng', vn: 'Chăm chỉ mùa Noel' };

let ngayThu = ''; // NT_THU: doi ngay luc chay
function ngayNoel(d) {
  const e = ngayThu || process.env.NT_NOEL_NGAY || '';
  return /^\d{4}-\d{2}-\d{2}$/.test(e) ? e : d.vnDayKey();
}
const ngayCuaO = (nam, n) => nam + '-12-' + (n < 10 ? '0' : '') + n;
const soNgay = (a, b) => Math.round((Date.parse(b + 'T00:00:00Z') - Date.parse(a + 'T00:00:00Z')) / 86400000);

// Trao qua (dung chung cho lich, qua ong gia Noel, ...): q = { xu, hat, quy, tr, tuyet, tt } -> danh sach mo ta cho client
function trao(f, q, h) {
  const ra = [];
  const lv = h.lvTuXp(f.xp);
  f.hat = f.hat || {}; f.tui = f.tui || {};
  if (q.xu) { f.xu += q.xu; ra.push({ loai: 'xu', n: q.xu }); }
  if (q.hat) {
    const ds = Object.keys(h.CAY).filter((k) => !h.CAY[k].hiem && h.CAY[k].lv <= Math.max(1, lv));
    const k = ds[Math.floor(Math.random() * ds.length)] || Object.keys(h.CAY)[0];
    f.hat[k] = (f.hat[k] || 0) + q.hat;
    ra.push({ loai: 'hat', k, n: q.hat });
  }
  if (q.quy && h.CAY_HIEM && h.CAY_HIEM.length) {
    const k = h.CAY_HIEM[Math.floor(Math.random() * h.CAY_HIEM.length)];
    f.hat[k] = (f.hat[k] || 0) + q.quy;
    ra.push({ loai: 'hat', k, n: q.quy, quy: 1 });
  }
  if (q.tr && Noel.TR[q.tr]) {
    // treo thang len cay thong Noel cua em (cay con cho cho mon nay); khong co thi doi ra xu bang gia mon
    const m = Noel.TR[q.tr];
    const cay = (f.o || []).find((o) => o.k === Noel.CAY_K && !((o.tr && o.tr[q.tr]) >= m.max));
    if (cay) {
      cay.tr = cay.tr && typeof cay.tr === 'object' ? cay.tr : {};
      cay.tr[q.tr] = (cay.tr[q.tr] || 0) + 1;
      ra.push({ loai: 'tr', t: q.tr, treo: 1 });
    } else { f.xu += m.xu; ra.push({ loai: 'tr', t: q.tr, xu: m.xu }); }
  }
  if (q.tuyet) {
    f.ntuyet = f.ntuyet && typeof f.ntuyet === 'object' ? f.ntuyet : {};
    f.ntuyet.n = (f.ntuyet.n || 0) + q.tuyet;
    ra.push({ loai: 'tuyet', n: q.tuyet });
  }
  if (q.tt) { f.tui[q.tt] = (f.tui[q.tt] || 0) + 1; ra.push({ loai: 'tt', k: q.tt }); }
  return ra;
}

function gan(app, d, h) {
  const loi = h.loi;
  // cham do o nut "Lich Noel" khi o cua hom nay chua mo
  h.ttThem.push((userId, f) => {
    const ngay = ngayNoel(d), nam = Noel.namMua(ngay);
    const n = ngay >= ngayCuaO(nam, 1) && ngay <= ngayCuaO(nam, 24) ? Number(ngay.slice(8, 10)) : 0;
    const l = f.nlich && f.nlich.nam === nam ? f.nlich : null;
    return { noelLich: { n, da: !!(n && l && l.mo && l.mo[n]) } };
  });
  if (h.CATALOG) h.CATALOG.NLICH ={ SAO_CAN, BU_NGAY, TU, HUY_HIEU, TEN: { zh: '圣诞倒计时', py: 'Shèngdàn dàojìshí', vn: 'Lịch đếm ngược Noel' } };

  // Hom nay em da hoc du chua (sao hoc + "Hom nay em on gi") — luon theo ngay that
  async function hocHomNay(uid) {
    const ngay = d.vnDayKey();
    const [s, keys] = await Promise.all([d.loadStar(uid), d.loadStarAnswerKeys ? d.loadStarAnswerKeys(uid).catch(() => []) : []]);
    const sao = s && s.day === ngay ? d.starsToday(s) : 0;
    const on = keys.indexOf('/onhn-xong|' + ngay) >= 0;
    return { sao, can: SAO_CAN, on, du: sao >= SAO_CAN || on };
  }
  function lichCua(f, nam) {
    let l = f.nlich;
    if (!l || typeof l !== 'object' || l.nam !== nam) l = f.nlich = { nam, mo: {}, q: {} };
    l.mo = l.mo || {}; l.q = l.q || {};
    return l;
  }
  // Trang thai lich gui client
  function tom(f, ngay, hoc) {
    const nam = Noel.namMua(ngay), l = f.nlich && f.nlich.nam === nam ? f.nlich : { mo: {}, q: {} };
    const dau = ngayCuaO(nam, 1), cuoi = ngayCuaO(nam, 24);
    const homNay = ngay >= dau && ngay <= cuoi ? Number(ngay.slice(8, 10)) : 0;
    const daMoNay = l.ng && l.ng.d === ngay ? l.ng.n || 0 : 0;
    let dung = 0, lo = false;
    const o = TU.map((t) => {
      const mo = l.mo[t.n] || '', dn = mo && mo === ngayCuaO(nam, t.n);
      if (dn) dung++;
      if (t.n < (homNay || (ngay > cuoi ? 25 : 0)) && !dn) lo = true;
      const tt = mo ? 'mo' : !homNay ? 'khoa' : t.n === homNay ? 'nay' : t.n < homNay ? 'bu' : 'khoa';
      return Object.assign({ tt, dn: !!dn }, mo ? { qua: l.q[t.n] || [] } : {});
    });
    const soMo = Object.keys(l.mo).length;
    const buDa = Math.max(0, daMoNay - (homNay && l.mo[homNay] === ngay ? 1 : 0));
    return {
      mua: Noel.trongMua(ngay), nam, ngay, homNay, truoc: ngay < dau ? soNgay(ngay, dau) : 0, het: ngay > cuoi,
      o, soMo, dung, deu: !lo, hh: !!l.hh, buCon: Math.max(0, BU_NGAY - buDa), hoc,
    };
  }

  app.get('/api/farm/noel/lich', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const [f, hoc] = await Promise.all([h.doc(me), hocHomNay(me)]);
    res.json(tom(f, ngayNoel(d), hoc));
  }));

  app.post('/api/farm/noel/lich/mo', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, n = Math.floor(Number(req.body && req.body.n));
    await h.traLoi(res, h.lanLuot(me, async () => {
      const ngay = ngayNoel(d), nam = Noel.namMua(ngay);
      if (!Noel.trongMua(ngay)) throw loi('Mùa Noel đã qua — hẹn em mùa sau nhé!');
      if (!(n >= 1 && n <= 24)) throw loi('Không có ô này.');
      const dau = ngayCuaO(nam, 1), cuoi = ngayCuaO(nam, 24), ngayO = ngayCuaO(nam, n);
      if (ngay < dau) throw loi('Lịch mở từ ngày 1/12 — còn ' + soNgay(ngay, dau) + ' ngày nữa nhé!');
      if (ngay > cuoi) throw loi('Lịch Noel năm nay đã khép lại sau ngày 24/12.');
      if (ngay < ngayO) throw loi('Ô số ' + n + ' mở vào ngày ' + n + '/12 — còn ' + soNgay(ngay, ngayO) + ' ngày nữa.');
      const f = await h.doc(me);
      const l = lichCua(f, nam);
      if (l.mo[n]) throw loi('Ô số ' + n + ' em đã mở rồi.');
      const hoc = await hocHomNay(me);
      if (!hoc.du) throw loi('Học thêm đã nhé: cần ' + SAO_CAN + ' sao học hôm nay (em có ' + hoc.sao + ') hoặc xong "Hôm nay em ôn gì".');
      l.ng = l.ng && l.ng.d === ngay ? l.ng : { d: ngay, n: 0, bu: 0 };
      const bu = ngayO !== ngay;
      if (bu && (l.ng.bu || 0) >= BU_NGAY) throw loi('Hôm nay em đã mở bù ' + BU_NGAY + ' ô rồi — mai mở bù tiếp nhé!');
      l.mo[n] = ngay;
      l.ng.n++;
      if (bu) l.ng.bu = (l.ng.bu || 0) + 1;
      const qua = trao(f, QUA[n], h);
      l.q[n] = qua;
      f.xp += n === 24 ? 20 : 3;
      // du 24 o, o nao cung dung ngay -> huy hieu
      let hh = false;
      if (!l.hh && TU.every((t) => l.mo[t.n] === ngayCuaO(nam, t.n))) {
        l.hh = 1; hh = true;
        f.tui[K_HUYHIEU] = (f.tui[K_HUYHIEU] || 0) + 1;
        f.xu += 100;
      }
      await h.ghi(me, f);
      return { ok: true, n, qua, hh, tu: TU[n - 1], lich: tom(f, ngay, hoc), st: await h.trangThai(me, f) };
    }));
  }));

  if (process.env.NT_THU === '1') {
    // CHI may local: doi "hom nay" cua lich ({ ngay: '2026-12-05' } | { ngay: '' } = ngay that)
    app.post('/api/farm/noel/_ngay', d.requireAuth, d.asyncRoute(async (req, res) => {
      const x = String((req.body && req.body.ngay) || '');
      ngayThu = /^\d{4}-\d{2}-\d{2}$/.test(x) ? x : '';
      res.json({ ok: true, ngay: ngayNoel(d) });
    }));
  }
}

module.exports = { gan, trao, TT, TU, QUA, ngayNoel, K_HUYHIEU, K_TUANLOC };
