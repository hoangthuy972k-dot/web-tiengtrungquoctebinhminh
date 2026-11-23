// Lai giong cay 杂交育种 (co giao, 2026-11-23: "them tinh nang lai giong cay").
// Phong lai giong 育种室: chon 2 loai nong san trong kho (4 qua moi loai, qua dot bien 突变 thi 1 qua la du),
// tra loi 3 cau hoi tu bai em da hoc (dung >= 2) -> neu dung "cong thuc" thi ra 3 hat giong lai (+2 moi cha/me dot bien)
// va ghi vao So lai giong; khong dung cong thuc thi chi ton nua so qua + nhan goi y ve 1 giong lai chua tim ra.
// Cay lai la CAY rieng (hiem + lai): chi gieo bang hat lai, khong mua, khong vao don hang / vong quay / dac san.
// Ten cay lai ghep tu chu cua cay cha me (莓瓜 = 莓 trong 草莓 + 瓜 trong 西瓜) — hoc cach tao tu tieng Trung.
// Hinh cay lai: may chu ghep nua trai hinh cay A + nua phai hinh cay B (/images/farm/lai-*.svg, sp-lai-*.svg).
const fs = require('fs');
const path = require('path');

const LAI = [
  { k: 'lai-meigua', cha: ['dautay', 'duahau'], zh: '莓瓜', py: 'méiguā', vn: 'Dưa dâu', ghep: '莓 (草莓 dâu tây) + 瓜 (西瓜 dưa hấu)', goiY: 'Một nửa đỏ mọng ngọt lịm, một nửa to tròn mát lạnh mùa hè.' },
  { k: 'lai-shuqie', cha: ['cachua', 'khoaitay'], zh: '薯茄', py: 'shǔqié', vn: 'Khoai cà', ghep: '薯 (củ, như 土豆) + 茄 (番茄 cà chua)', goiY: 'Trên cành ra quả đỏ, dưới đất lại có củ.' },
  { k: 'lai-yudao', cha: ['lua', 'ngo'], zh: '玉稻', py: 'yùdào', vn: 'Lúa ngô', ghep: '玉 (玉米 ngô) + 稻 (水稻 lúa)', goiY: 'Hai loại hạt nuôi sống người châu Á: một loại bông vàng cúi đầu, một loại bắp to.' },
  { k: 'lai-luobocai', cha: ['carot', 'caibap'], zh: '萝卜菜', py: 'luóbocài', vn: 'Cải cà rốt', ghep: '萝卜 (胡萝卜 cà rốt) + 菜 (白菜 cải)', goiY: 'Lá to cuộn tròn ở trên, củ màu cam ở dưới.' },
  { k: 'lai-kuimei', cha: ['huongduong', 'dautay'], zh: '葵莓', py: 'kuíméi', vn: 'Dâu hướng dương', ghep: '葵 (向日葵 hướng dương) + 莓 (草莓 dâu tây)', goiY: 'Một bông hoa luôn nhìn mặt trời gặp một quả nhỏ đỏ ngọt.' },
  { k: 'lai-nanxigua', cha: ['bido', 'duahau'], zh: '南西瓜', py: 'nánxīguā', vn: 'Bí dưa', ghep: '南 (南瓜 bí ngô) + 西瓜 (dưa hấu)', goiY: 'Hai anh em họ 瓜: một anh phía Nam, một anh phía Tây.' },
  { k: 'lai-putaomei', cha: ['nho', 'dautay'], zh: '葡萄莓', py: 'pútaoméi', vn: 'Nho dâu', ghep: '葡萄 (nho) + 莓 (草莓 dâu tây)', goiY: 'Quả mọc thành chùm tím gặp quả đỏ có hạt li ti bên ngoài.' },
  { k: 'lai-nanguashu', cha: ['bido', 'khoaitay'], zh: '南瓜薯', py: 'nánguāshǔ', vn: 'Khoai bí', ghep: '南瓜 (bí ngô) + 薯 (củ, như 土豆)', goiY: 'Quả tròn màu cam gặp củ nâu dưới đất.' },
  { k: 'lai-putaogua', cha: ['duahau', 'nho'], zh: '葡萄瓜', py: 'pútaoguā', vn: 'Dưa nho', ghep: '葡萄 (nho) + 瓜 (西瓜 dưa hấu)', goiY: 'Quả to nhất ruộng gặp quả mọc thành chùm.' },
  { k: 'lai-jinkui', cha: ['huongduong', 'ngo'], zh: '金葵米', py: 'jīnkuímǐ', vn: 'Ngô hướng dương', ghep: '金 (vàng) + 葵 (向日葵) + 米 (玉米 ngô)', goiY: 'Hai cây cao vàng óng: một cây có hoa to, một cây có bắp.' },
  { k: 'lai-xiangnuo', cha: ['lua', 'nuomi'], zh: '香糯稻', py: 'xiāngnuòdào', vn: 'Lúa nếp thơm', ghep: '香 (thơm) + 糯 (糯米 nếp) + 稻 (水稻 lúa)', goiY: 'Hai loại gạo: một loại hạt thường, một loại hạt dẻo để làm bánh chưng.' },
  { k: 'lai-zhuyumi', cha: ['zhusun', 'ngo'], zh: '竹玉米', py: 'zhúyùmǐ', vn: 'Ngô măng', ghep: '竹 (竹笋 măng tre) + 玉米 (ngô)', goiY: 'Cây mọc nhanh như tre gặp cây có bắp vàng.' },
  { k: 'lai-litao', cha: ['lizhi', 'nho'], zh: '荔萄', py: 'lìtáo', vn: 'Vải nho', ghep: '荔 (荔枝 vải) + 萄 (葡萄 nho)', goiY: 'Quả vỏ đỏ sần sùi gặp quả chùm màu tím.' },
  { k: 'lai-lianshu', cha: ['lianou', 'khoaitay'], zh: '莲薯', py: 'liánshǔ', vn: 'Khoai sen', ghep: '莲 (莲藕 củ sen) + 薯 (củ, như 土豆)', goiY: 'Củ mọc dưới bùn ao gặp củ mọc dưới đất ruộng.' },
  { k: 'lai-zaoqie', cha: ['hongzao', 'cachua'], zh: '枣茄', py: 'zǎoqié', vn: 'Cà táo đỏ', ghep: '枣 (红枣 táo đỏ) + 茄 (番茄 cà chua)', goiY: 'Hai quả màu đỏ: một quả khô ngọt để nấu chè, một quả mọng để nấu canh.' },
  { k: 'lai-huacha', cha: ['cha', 'mudan'], zh: '花香茶', py: 'huāxiāngchá', vn: 'Trà hương hoa', ghep: '花 (牡丹 hoa) + 香 (thơm) + 茶 (trà)', goiY: 'Lá để pha nước uống gặp loài hoa vua của Trung Quốc.' },
];
const LAI_MAP = {};
LAI.forEach((l) => { LAI_MAP[l.k] = l; });
const capKhoa = (a, b) => [a, b].sort().join('+');
const CONG_THUC = {};
LAI.forEach((l) => { CONG_THUC[capKhoa(l.cha[0], l.cha[1])] = l.k; });

const LV_MO = 6, CAN_QUA = 4, PHI_XU = 20, LAI_NGAY = 10, HAT_RA = 3, HAT_DOT_BIEN = 2, SO_CAU = 3, CAN_DUNG = 2;

// Dang ky cay lai vao CAY (goi trong nong-trai.js ngay sau bang CAY): thoi gian = trung binh, gia ~ 85% tong gia 2 cay
function dangKyCay(CAY) {
  LAI.forEach((l) => {
    const a = CAY[l.cha[0]], b = CAY[l.cha[1]];
    CAY[l.k] = {
      zh: l.zh, py: l.py, vn: l.vn, lv: 99, gia: 0, phut: Math.round((a.phut + b.phut) / 2), ban: Math.round((a.ban + b.ban) * 0.85),
      xp: Math.max(a.xp, b.xp) + 2, hiem: 1, lai: 1, cha: l.cha.slice(), lvMo: Math.max(a.lv, b.lv), ghep: l.ghep,
    };
  });
}

// ---- hinh cay lai: ghep nua trai cay A + nua phai cay B ----
const HINH = new Map();
function ruotSvg(file, tienTo) {
  let s;
  try { s = fs.readFileSync(file, 'utf8'); } catch (e) { return null; }
  const m = /<svg[^>]*>([\s\S]*)<\/svg>/.exec(s);
  if (!m) return null;
  return m[1].replace(/id="([^"]+)"/g, 'id="' + tienTo + '$1"').replace(/url\(#([^)]+)\)/g, 'url(#' + tienTo + '$1)').replace(/href="#([^"]+)"/g, 'href="#' + tienTo + '$1"');
}
function hinhLai(k, sp) {
  const key = (sp ? 'sp-' : '') + k;
  if (HINH.has(key)) return HINH.get(key);
  const l = LAI_MAP[k];
  if (!l) return null;
  const thu = path.join(__dirname, 'public', 'images', 'farm');
  const a = ruotSvg(path.join(thu, (sp ? 'sp-' : '') + l.cha[0] + '.svg'), 'a-') || ruotSvg(path.join(thu, 'sp-' + l.cha[0] + '.svg'), 'a-');
  const b = ruotSvg(path.join(thu, (sp ? 'sp-' : '') + l.cha[1] + '.svg'), 'b-') || ruotSvg(path.join(thu, 'sp-' + l.cha[1] + '.svg'), 'b-');
  if (!a || !b) return null;
  const V = '#2b1d3a';
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs>' +
    '<clipPath id="lai-t"><path d="M0 0H52Q46 25 52 50T52 100H0Z"/></clipPath><clipPath id="lai-p"><path d="M52 0Q46 25 52 50T52 100H100V0Z"/></clipPath></defs>' +
    '<g clip-path="url(#lai-t)">' + a + '</g><g clip-path="url(#lai-p)">' + b + '</g>' +
    '<path d="M52 4Q46 25 52 50T52 96" fill="none" stroke="#fff8ec" stroke-width="2.6" stroke-dasharray="3 4" stroke-linecap="round"/>' +
    '<g transform="translate(16 15)"><circle r="11" fill="#e1f5fe" stroke="' + V + '" stroke-width="2.4"/>' +
    '<text y="5" text-anchor="middle" font-size="13" font-weight="900" fill="#00796b" font-family="Noto Serif SC, serif">杂</text></g></svg>';
  HINH.set(key, svg);
  return svg;
}

function gan(app, d, h) {
  const loi = h.loi, CAY = h.CAY, SP = h.SP;
  app.get(/^\/images\/farm\/(sp-)?(lai-[a-z]+)\.svg$/, (req, res, next) => {
    const svg = hinhLai(req.params[1], !!req.params[0]);
    if (!svg) return next();
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.type('image/svg+xml').send(svg);
  });

  const ngay = () => d.vnDayKey();
  const lai = (f) => { f.lai = f.lai || {}; f.lai.biet = f.lai.biet || {}; return f.lai; };
  // cha me hop le: nong san thuong (khong quy, khong lai) da mo theo cap, hoac qua dot bien cua no
  function chaMe(k, lv) {
    const sp = SP[k];
    const goc = sp && sp.db ? sp.goc : k;
    const c = CAY[goc];
    if (!c || c.hiem || c.lai || c.lv > lv) return null;
    return { k, goc, dotBien: !!(sp && sp.db), can: sp && sp.db ? 1 : CAN_QUA };
  }
  function trangThaiLai(f, lv) {
    const x = lai(f);
    return {
      mo: lv >= LV_MO, lvMo: LV_MO, canQua: CAN_QUA, phi: PHI_XU, hatRa: HAT_RA, hatDb: HAT_DOT_BIEN, soCau: SO_CAU, canDung: CAN_DUNG,
      hom: x.d === ngay() ? x.n || 0 : 0, toiDaNgay: LAI_NGAY,
      so: LAI.map((l) => {
        const biet = !!x.biet[l.k], c = CAY[l.k];
        return biet ? { k: l.k, biet: true, zh: l.zh, py: l.py, vn: l.vn, ghep: l.ghep, cha: l.cha, lan: x.biet[l.k], phut: c.phut, ban: c.ban }
          : { k: l.k, biet: false, goiY: l.goiY, lvMo: c.lvMo, moDuoc: c.lvMo <= lv };
      }),
      cau: x.q && Date.now() - x.q.bd < 15 * 60000 ? { a: x.q.a, b: x.q.b, da: x.q.tl.length, so: x.q.ds.length } : null,
    };
  }

  app.get('/api/farm/lai', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id);
    res.json(trangThaiLai(f, h.lvTuXp(f.xp)));
  }));

  app.post('/api/farm/lai/bat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    const ds = await h.phieuLuu.layCau(req.user, 'thung', SO_CAU, { nghe: false });
    if (ds.length < SO_CAU) return res.status(400).json({ error: 'Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi nhé!', chuaHoc: true });
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp), x = lai(f);
      if (lv < LV_MO) throw loi('Phòng lai giống mở ở cấp ' + LV_MO + '.');
      if ((x.d === ngay() ? x.n || 0 : 0) >= LAI_NGAY) throw loi('Hôm nay em đã lai ' + LAI_NGAY + ' lần rồi — mai thử tiếp nhé!');
      const A = chaMe(String(b.a || ''), lv), B = chaMe(String(b.b || ''), lv);
      if (!A || !B) throw loi('Chọn 2 loại nông sản em đã trồng được (không dùng cây quý hay cây lai).');
      if (A.goc === B.goc) throw loi('Chọn 2 loại cây KHÁC nhau để lai nhé.');
      [A, B].forEach((p) => { if ((f.kho[p.k] || 0) < p.can) throw loi('Cần ' + p.can + ' ' + SP[p.k].vn.toLowerCase() + ' trong kho (em có ' + (f.kho[p.k] || 0) + ').'); });
      if (f.xu < PHI_XU) throw loi('Cần ' + PHI_XU + ' xu phí phòng lai giống.');
      x.q = { a: A.k, b: B.k, ds, tl: [], bd: Date.now() };
      await h.ghi(me, f);
      return { ok: true, so: ds.length, can: CAN_DUNG, ds: ds.map((q) => ({ k: q.k, hoi: q.hoi, lua: q.lua })) };
    }));
  }));

  app.post('/api/farm/lai/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp), x = lai(f), r = x.q;
      if (!r || Date.now() - r.bd > 15 * 60000) { delete x.q; await h.ghi(me, f); throw loi('Lượt lai giống đã hết hạn — bấm Lai giống lại nhé.'); }
      const q = r.ds[r.tl.length];
      if (!q) throw loi('Lượt này đã xong.');
      const dung = h.chamCau(q, b);
      r.tl.push(dung);
      h.onCau(f, q, b, dung);
      const kq = Object.assign({ ok: true, dung }, h.ketQuaCau(q));
      if (r.tl.length < r.ds.length) { await h.ghi(me, f); return kq; }
      // het cau: cham ket qua
      delete x.q;
      const n = r.tl.filter(Boolean).length;
      const A = chaMe(r.a, lv), B = chaMe(r.b, lv);
      kq.ket = { dung: n, so: r.ds.length, dat: n >= CAN_DUNG };
      if (!kq.ket.dat || !A || !B || (f.kho[A.k] || 0) < A.can || (f.kho[B.k] || 0) < B.can || f.xu < PHI_XU) {
        if (kq.ket.dat) kq.ket.loi = 'Kho hoặc xu đã thay đổi — chưa lai được.';
        await h.ghi(me, f);
        kq.st = await h.trangThai(me, f);
        kq.lai = trangThaiLai(f, lv);
        return kq;
      }
      const tru = (p, so) => { f.kho[p.k] -= so; if (!f.kho[p.k]) delete f.kho[p.k]; };
      f.xu -= PHI_XU;
      x.n = (x.d === ngay() ? x.n || 0 : 0) + 1; x.d = ngay();
      const kGiong = CONG_THUC[capKhoa(A.goc, B.goc)];
      if (kGiong) {
        tru(A, A.can); tru(B, B.can);
        const hat = HAT_RA + (A.dotBien ? HAT_DOT_BIEN : 0) + (B.dotBien ? HAT_DOT_BIEN : 0);
        f.hat = f.hat || {};
        f.hat[kGiong] = (f.hat[kGiong] || 0) + hat;
        const moi = !x.biet[kGiong];
        x.biet[kGiong] = (x.biet[kGiong] || 0) + 1;
        f.xp += moi ? 12 : 4;
        const l = LAI_MAP[kGiong];
        kq.ket.giong = { k: kGiong, zh: l.zh, py: l.py, vn: l.vn, ghep: l.ghep, hat, moi };
      } else {
        // khong dung cong thuc: ton nua so qua (qua dot bien van ton 1) + goi y 1 giong chua tim ra co cay A hoac B
        tru(A, Math.max(1, Math.ceil(A.can / 2))); tru(B, Math.max(1, Math.ceil(B.can / 2)));
        f.xp += 1;
        const chua = LAI.filter((l) => !x.biet[l.k] && CAY[l.k].lvMo <= lv && (l.cha.indexOf(A.goc) >= 0 || l.cha.indexOf(B.goc) >= 0));
        const g = chua[Math.floor(Math.random() * chua.length)];
        kq.ket.khong = true;
        if (g) {
          const ai = g.cha.indexOf(A.goc) >= 0 ? A.goc : B.goc;
          kq.ket.goiY = { cay: CAY[ai].vn, zh: CAY[ai].zh, chu: g.goiY };
        }
      }
      await h.ghi(me, f);
      kq.st = await h.trangThai(me, f);
      kq.lai = trangThaiLai(f, lv);
      return kq;
    }));
  }));
}

module.exports = { LAI, LAI_MAP, CONG_THUC, LV_MO, dangKyCay, hinhLai, gan };
