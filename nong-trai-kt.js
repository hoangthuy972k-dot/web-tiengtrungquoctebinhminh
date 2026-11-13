// Cho nong san 农贸市场 · Cua hang rieng 我的小店 · Dau gia 拍卖会 (co giao, 2026-11-13).
// Du lieu chung cua pham vi (lop / cong dong) luu qua docC / ghiC / khoaC (nong-trai-chung.js):
//   mk:<pv>            gia cho: he so h[k] (0,5–2 lan gia goc), luong ban / mua trong gio, lich su 7 ngay
//   dg:<pv>:<tuan>     phien dau gia tuan: lo hang, gia cao nhat, hop thu (hoan xu, giao hang, tien ban)
// Thu tu khoa luon la: khoa nguoi choi (h.lanLuot / h.haiLuot) -> khoa du lieu chung (c.khoaC). Moi lan
// chuyen xu deu nam trong khoa; hop thu dau gia co ma rieng tung muc (f.dgDa) nen nhan lai bao nhieu lan cung chi 1 lan.
// Chong "may in tien": ban cho tinh vao han muc ban ngay (30 + 10 x sao hoc hom nay); hang mua o cho (nl) khong ban lai duoc;
// tiem rieng chi chuyen xu giua cac ban (gia ±30% gia cho, phi 5%, moi em mua toi da TIEM_MUA_NGAY lan / ngay).
const MK_GIO = 3600000, MK_MIN = 0.5, MK_MAX = 2, MK_TROI = 0.08, MK_HOI = 0.97;
const TIEM_HAN = 48 * 3600000, TIEM_PHI = 0.05, TIEM_MUA_NGAY = 5, TIEM_BIEN = 0.3, TIEM_SL = 20;
const soOTiem = (lv) => (lv >= 14 ? 6 : lv >= 10 ? 5 : 4);
const DG_BUOC_CHOT = 2 * 60000, DG_GIU_TOI_DA = 3, DG_PHI = 0.05, DG_LO_EM = 2;

module.exports = function ganKinhTe(app, d, h, c) {
  const loi = h.loi, SP = h.SP, CAY = h.CAY;
  const now = () => Date.now();
  const ngay = () => d.vnDayKey();
  const XG = require('./nong-trai-xuong').CAT;

  /* ======================= CHO NONG SAN ======================= */
  // Hang cho thu mua (em ban vao): nong san, san pham vat nuoi, cay quy, hang che bien, ca
  const MK_BAN = h.HANG.concat(h.CAY_HIEM, Object.keys(XG.HANG_GC), Object.keys(h.CA));
  // Hang cho ban ra: hat giong (hat:<cay>) + nguyen lieu (duong, muoi, thuc an chan nuoi)
  const MK_MUA = Object.keys(CAY).filter((k) => !CAY[k].hiem).map((k) => 'hat:' + k).concat(Object.keys(XG.NL));
  const giaGoc = (k) => (k.indexOf('hat:') === 0 ? CAY[k.slice(4)].gia : SP[k] ? SP[k].ban : 0);
  const giaBanCho = (m, k) => Math.max(1, Math.round(giaGoc(k) * ((m.h && m.h[k]) || 1)));
  const giaMuaCho = (m, k) => Math.max(1, Math.round(giaGoc(k) * ((m.h && m.h[k]) || 1) * 1.1));
  function soHat(s) { let x = 7; for (const ch of s) x = (x * 31 + ch.charCodeAt(0)) % 2147483647; return x / 2147483647; }
  const kep = (x) => Math.max(MK_MIN, Math.min(MK_MAX, x));
  // Cap nhat gia (goi trong khoa): moi gio — mua nhieu hon ban -> tang, ban nhieu -> giam (toi da ±15%/gio),
  // dan tro ve gia goc (x0,97 moi gio); moi ngay troi ngau nhien ±4%; ghi lich su theo ngay (7 ngay)
  function capNhat(m, pvK) {
    const t = now(), hom = ngay();
    m.h = m.h || {}; m.ban = m.ban || {}; m.mua = m.mua || {}; m.ls = m.ls || {};
    if (!m.t) m.t = t;
    const gio = Math.floor((t - m.t) / MK_GIO);
    let doi = false;
    if (gio >= 1) {
      new Set(Object.keys(m.ban).concat(Object.keys(m.mua))).forEach((k) => {
        const r = ((m.mua[k] || 0) + 4) / ((m.ban[k] || 0) + 4);
        m.h[k] = kep((m.h[k] || 1) * Math.max(0.85, Math.min(1.15, Math.pow(r, 0.3))));
      });
      const hoi = Math.pow(MK_HOI, Math.min(gio, 72));
      Object.keys(m.h).forEach((k) => { m.h[k] = kep(1 + (m.h[k] - 1) * hoi); });
      m.ban = {}; m.mua = {}; m.t += gio * MK_GIO; doi = true;
    }
    if (m.d !== hom) {
      MK_BAN.concat(MK_MUA).forEach((k) => { m.h[k] = kep((m.h[k] || 1) * (1 + (soHat(pvK + '|' + hom + '|' + k) - 0.5) * MK_TROI)); });
      m.d = hom; doi = true;
    }
    if (doi) {
      const giu = new Set(Array.from({ length: 8 }, (x, i) => d.vnDayKey(t - i * 86400000)));
      MK_BAN.concat(MK_MUA).forEach((k) => {
        const l = m.ls[k] = m.ls[k] || {};
        l[hom] = Math.round((m.h[k] || 1) * 1000) / 1000;
        Object.keys(l).forEach((x) => { if (!giu.has(x)) delete l[x]; });
      });
    }
    return doi;
  }
  async function docMk(pvK) {
    return c.khoaC('mk:' + pvK, async () => {
      const m = (await c.docC('mk:' + pvK)) || {};
      if (capNhat(m, pvK)) await c.ghiC('mk:' + pvK, m);
      return m;
    });
  }
  // Ghi luong giao dich (trong khoa cho) -> anh huong gia o lan cap nhat sau
  async function ghiLuong(pvK, loai, k, n, fn) {
    return c.khoaC('mk:' + pvK, async () => {
      const m = (await c.docC('mk:' + pvK)) || {};
      capNhat(m, pvK);
      const kq = fn ? fn(m) : null;
      m[loai] = m[loai] || {};
      m[loai][k] = (m[loai][k] || 0) + n;
      await c.ghiC('mk:' + pvK, m);
      return kq;
    });
  }
  function bangGia(m) {
    const hom = ngay(), qua = d.vnDayKey(now() - 86400000);
    const ngay7 = Array.from({ length: 7 }, (x, i) => d.vnDayKey(now() - (6 - i) * 86400000));
    const dong = (k, loai) => {
      const l = (m.ls && m.ls[k]) || {}, g = giaGoc(k);
      const hqua = l[qua] || 1, hnay = (m.h && m.h[k]) || 1;
      return { k, loai, goc: g, gia: loai === 'ban' ? giaBanCho(m, k) : giaMuaCho(m, k), h: Math.round(hnay * 100) / 100,
        xu: Math.round((hnay / hqua - 1) * 100), ls: ngay7.map((x) => (l[x] != null ? Math.round(g * l[x] * (loai === 'mua' ? 1.1 : 1)) : null)) };
    };
    return { ban: MK_BAN.map((k) => dong(k, 'ban')), mua: MK_MUA.map((k) => dong(k, 'mua')), hom };
  }
  app.get('/api/farm/mk', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const pv = await c.phamVi(me);
    const [m, f] = await Promise.all([docMk(pv.k), h.doc(me)]);
    const hm = await h.hanMuc(me, f);
    res.json(Object.assign(bangGia(m), { pham: pv.ten, hm: { con: hm.con, toiDa: hm.toiDa }, sau: Math.max(0, m.t + MK_GIO - now()), kho: f.kho, hat: f.hat || {}, xu: f.xu }));
  }));
  app.post('/api/farm/mk/ban', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, k = String(b.k || ''), muon = Math.floor(Number(b.n) || 0);
    const pv = await c.phamVi(me);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (h.lvTuXp(f.xp) < h.MO_TN.cho.lv) throw loi('Chợ nông sản mở ở cấp ' + h.MO_TN.cho.lv + '.');
      if (MK_BAN.indexOf(k) < 0) throw loi('Chợ không thu mua món này.');
      if (muon < 1 || (f.kho[k] || 0) < muon) throw loi('Kho không đủ hàng.');
      const goiDung = String(b.goi || '') === SP[k].zh;
      const hm = await h.hanMuc(me, f);
      const kq = await c.khoaC('mk:' + pv.k, async () => {
        const m = (await c.docC('mk:' + pv.k)) || {};
        capNhat(m, pv.k);
        const don = Math.max(1, Math.round(giaBanCho(m, k) * (goiDung ? 1 : 0.7)));
        const n = Math.min(muon, Math.floor(hm.con / don));
        if (n < 1) return { n: 0, don };
        m.ban = m.ban || {}; m.ban[k] = (m.ban[k] || 0) + n;
        await c.ghiC('mk:' + pv.k, m);
        return { n, don };
      });
      if (kq.n < 1) throw loi('Hạn mức bán hôm nay còn ' + hm.con + ' xu (' + hm.toiDa + ' xu/ngày) — học thêm để mở rộng: mỗi sao học = +' + h.BAN_MOI_SAO + ' xu!');
      const xu = kq.n * kq.don;
      f.kho[k] -= kq.n; if (!f.kho[k]) delete f.kho[k];
      f.xu += xu; h.ghiBanNgay(f, xu); f.xp += Math.min(8, kq.n);
      await h.ghi(me, f);
      return { ok: true, n: kq.n, xu, goiDung, don: kq.don, catBot: muon - kq.n, st: await h.trangThai(me, f) };
    }));
  }));
  app.post('/api/farm/mk/mua', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, k = String(b.k || ''), n = Math.floor(Number(b.n) || 0);
    const pv = await c.phamVi(me);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp);
      if (lv < h.MO_TN.cho.lv) throw loi('Chợ nông sản mở ở cấp ' + h.MO_TN.cho.lv + '.');
      if (MK_MUA.indexOf(k) < 0) throw loi('Chợ không bán món này.');
      if (n < 1 || n > 20) throw loi('Mỗi lần mua 1–20.');
      if (k.indexOf('hat:') === 0 && CAY[k.slice(4)].lv > lv) throw loi('Lên cấp ' + CAY[k.slice(4)].lv + ' để mua hạt này.');
      const don = await ghiLuong(pv.k, 'mua', k, 0, (m) => giaMuaCho(m, k));
      const tien = don * n;
      if (f.xu < tien) throw loi('Cần ' + tien + ' xu — em đang có ' + f.xu + ' xu.');
      f.xu -= tien;
      if (k.indexOf('hat:') === 0) { f.hat = f.hat || {}; f.hat[k.slice(4)] = (f.hat[k.slice(4)] || 0) + n; } else f.kho[k] = (f.kho[k] || 0) + n;
      await h.ghi(me, f);
      await ghiLuong(pv.k, 'mua', k, n);
      return { ok: true, n, xu: tien, st: await h.trangThai(me, f) };
    }));
  }));

  /* ======================= CUA HANG RIENG ======================= */
  const tiem = (f) => { f.tiem = f.tiem || {}; f.tiem.ds = f.tiem.ds || []; return f.tiem; };
  const conHan = (o) => now() - o.t < TIEM_HAN;
  // hang qua 48 gio tu ve kho (chay khi em mo nong trai)
  h.vaoHook.push(async (user, f) => {
    if (!f.tiem || !f.tiem.ds || !f.tiem.ds.length) return false;
    const het = f.tiem.ds.filter((o) => !conHan(o));
    if (!het.length) return false;
    het.forEach((o) => { f.kho[o.k] = (f.kho[o.k] || 0) + o.n; });
    f.tiem.ds = f.tiem.ds.filter((o) => conHan(o));
    f.tiem.tb = (f.tiem.tb || []).concat(het.map((o) => ({ ve: 1, k: o.k, n: o.n, t: now() }))).slice(-10);
    return true;
  });
  const tenAn = (t) => { const p = String(t || '').trim().split(/\s+/).filter(Boolean); return p.length < 2 ? String(t || 'Một bạn') : p[p.length - 1] + ' ' + p[0].charAt(0).toUpperCase() + '.'; };
  function khoangTiem(m, k, n) {
    const u = giaBanCho(m, k);
    return { min: Math.max(1, Math.round(u * n * (1 - TIEM_BIEN))), max: Math.max(1, Math.round(u * n * (1 + TIEM_BIEN))), u };
  }
  app.get('/api/farm/tiem', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, chiId = String(req.query.id || '');
    const pv = await c.phamVi(me);
    const ids = pv.ids.indexOf(me) < 0 ? pv.ids.concat(me) : pv.ids;
    const [farms, ten, m] = await Promise.all([h.docNhieu(chiId ? [chiId, me] : ids), d.loadUserNames(), docMk(pv.k)]);
    const fm = farms[me] || await h.doc(me);
    const daMua = fm.tiemMua && fm.tiemMua.d === ngay() ? fm.tiemMua.n : 0;
    const ds = Object.keys(farms).filter((id) => id !== me && ten[id] && (!chiId || id === chiId) && pv.ids.indexOf(id) >= 0).map((id) => {
      const f = farms[id], t = f.tiem || {};
      return { id, ten: tenAn(ten[id]), lv: h.lvTuXp(f.xp), av: f.av || null,
        ds: (t.ds || []).filter(conHan).map((o) => ({ lid: o.id, k: o.k, n: o.n, gia: o.gia, het: o.t + TIEM_HAN })) };
    }).filter((x) => x.ds.length).sort((a, b) => b.ds.length - a.ds.length);
    const lv = h.lvTuXp(fm.xp);
    const em = tiem(fm);
    res.json({ pham: pv.ten, ds, muaCon: Math.max(0, TIEM_MUA_NGAY - daMua), muaToiDa: TIEM_MUA_NGAY, phi: TIEM_PHI,
      em: { mo: lv >= h.MO_TN.tiem.lv, so: soOTiem(lv), ds: em.ds.map((o) => ({ lid: o.id, k: o.k, n: o.n, gia: o.gia, het: o.t + TIEM_HAN, conHan: conHan(o) })) },
      gia: MK_BAN.reduce((o, k) => { o[k] = giaBanCho(m, k); return o; }, {}), bien: TIEM_BIEN, kho: fm.kho, xu: fm.xu });
  }));
  app.post('/api/farm/tiem/bay', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, k = String(b.k || ''), n = Math.floor(Number(b.n) || 0), gia = Math.floor(Number(b.gia) || 0);
    const pv = await c.phamVi(me);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp), t = tiem(f);
      if (lv < h.MO_TN.tiem.lv) throw loi('Cửa hàng riêng mở ở cấp ' + h.MO_TN.tiem.lv + '.');
      if (MK_BAN.indexOf(k) < 0) throw loi('Món này không bày bán ở tiệm được.');
      if (n < 1 || n > TIEM_SL || (f.kho[k] || 0) < n) throw loi('Số lượng 1–' + TIEM_SL + ' và kho phải đủ hàng.');
      if (t.ds.filter(conHan).length >= soOTiem(lv)) throw loi('Tiệm đã đầy ' + soOTiem(lv) + ' ô (cấp 10: 5 ô, cấp 14: 6 ô).');
      const kg = khoangTiem(await docMk(pv.k), k, n);
      if (gia < kg.min || gia > kg.max) throw loi('Giá phải trong khoảng ' + kg.min + '–' + kg.max + ' xu (±30% giá chợ).');
      f.kho[k] -= n; if (!f.kho[k]) delete f.kho[k];
      f.nid = f.nid || 10;
      t.ds.push({ id: f.nid++, k, n, gia, t: now() });
      await h.ghi(me, f);
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));
  app.post('/api/farm/tiem/go', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, lid = Number(req.body && req.body.lid);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), t = tiem(f), o = t.ds.find((x) => x.id === lid);
      if (!o) throw loi('Món này đã được bán rồi.');
      t.ds = t.ds.filter((x) => x !== o);
      f.kho[o.k] = (f.kho[o.k] || 0) + o.n;
      await h.ghi(me, f);
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));
  app.post('/api/farm/tiem/mua', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, id = String(b.id || ''), lid = Number(b.lid);
    if (!id || id === me) return res.status(400).json({ error: 'Không mua hàng của chính tiệm em được.' });
    const pv = await c.phamVi(me);
    if (pv.ids.indexOf(id) < 0) return res.status(400).json({ error: 'Tiệm này không ở thị trấn của em.' });
    await h.traLoi(res, h.haiLuot(me, id, async () => {
      const fb = await h.doc(me), fs = await h.doc(id), t = tiem(fs);
      const o = t.ds.find((x) => x.id === lid);
      if (!o || !conHan(o)) throw loi('Món này vừa có bạn mua mất hoặc đã hết hạn.');
      const hom = ngay();
      if (!fb.tiemMua || fb.tiemMua.d !== hom) fb.tiemMua = { d: hom, n: 0 };
      if (fb.tiemMua.n >= TIEM_MUA_NGAY) throw loi('Hôm nay em đã mua ở tiệm ' + TIEM_MUA_NGAY + ' lần rồi — mai mua tiếp nhé.');
      if (fb.xu < o.gia) throw loi('Em chưa đủ xu — cần ' + o.gia + ' xu.');
      const phi = Math.max(1, Math.ceil(o.gia * TIEM_PHI));
      fb.xu -= o.gia; fb.kho[o.k] = (fb.kho[o.k] || 0) + o.n; fb.tiemMua.n++; fb.xp += 1;
      t.ds = t.ds.filter((x) => x !== o);
      fs.xu += o.gia - phi; fs.xp += 2;
      t.tb = (t.tb || []).concat({ k: o.k, n: o.n, xu: o.gia - phi, phi, ai: me, t: now() }).slice(-10);
      await h.ghi(id, fs);
      await h.ghi(me, fb);
      await ghiLuong(pv.k, 'mua', o.k, o.n).catch(() => {});
      return { ok: true, k: o.k, n: o.n, tra: o.gia, st: await h.trangThai(me, fb) };
    }));
  }));
  // thong bao cho nguoi ban (hang da ban / het han ve kho): client lay 1 lan khi mo nong trai
  app.post('/api/farm/tiem/xem', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const r = await h.lanLuot(me, async () => {
      const f = await h.doc(me), tb = (f.tiem && f.tiem.tb) || [];
      if (!tb.length) return [];
      delete f.tiem.tb; await h.ghi(me, f);
      return tb;
    });
    const ten = await d.loadUserNames();
    res.json({ tb: r.map((x) => Object.assign({}, x, { ten: x.ai ? tenAn(ten[x.ai]) : '' })) });
  }));

  /* ======================= DAU GIA ======================= */
  const tuanTruoc = (t) => new Date(Date.parse(t + 'T00:00:00Z') - 7 * 86400000).toISOString().slice(0, 10);
  // gio dong phien: ngay thu (0 = thu Hai) luc 20h gio VN cua tuan tk
  const gioDong = (tk, thu) => Date.parse(tk + 'T00:00:00Z') - 7 * 3600000 + thu * 86400000 + 20 * 3600000;
  const CON_QUY = () => Object.keys(h.CON).filter((k) => h.CON[k].lv >= 10);
  const TT_QUY = () => Object.keys(h.TT).filter((k) => !h.TT[k].doc && h.TT[k].lv >= 12);
  function loHe(tk, pvK) {
    const r = (s) => soHat(pvK + '|' + tk + '|' + s);
    const chon = (a, s) => a[Math.floor(r(s) * a.length) % a.length];
    const conQ = CON_QUY().sort((a, b) => h.CON[a].lv - h.CON[b].lv);
    const lo = [
      { vat: { loai: 'hat', k: chon(h.CAY_HIEM, 'h'), n: 3 }, gia: 60, buoc: 5, het: gioDong(tk, 2) },
      { vat: { loai: 'con', k: conQ[Math.floor(Math.pow(r('c'), 2) * conQ.length)] || conQ[0], n: 1 }, gia: 120, buoc: 10, het: gioDong(tk, 4) },
      { vat: { loai: 'tt', k: chon(TT_QUY(), 't'), n: 1 }, gia: 80, buoc: 5, het: gioDong(tk, 6) },
    ];
    const t = now();
    return lo.map((x, i) => Object.assign({ id: tk.replace(/-/g, '') + 'h' + i, ban: 'he', cao: null, lich: [], xong: false }, x, { het: Math.max(x.het, t + 6 * 3600000) }));
  }
  // Chot cac lo da het gio (trong khoa dg) — moi lo chi chot 1 lan (xong = true)
  function chot(dg) {
    const t = now();
    dg.hop = dg.hop || {};
    const vao = (uid, e) => { (dg.hop[uid] = dg.hop[uid] || []).push(e); };
    let doi = false;
    dg.lo.forEach((x) => {
      if (x.xong || x.het > t) return;
      x.xong = true; doi = true;
      if (x.cao) {
        vao(x.cao.ai, { id: 'w' + x.id, loai: 'vat', vat: x.vat, ly: 'Em thắng đấu giá' });
        if (x.ban !== 'he') { const phi = Math.ceil(x.cao.xu * DG_PHI); vao(x.ban, { id: 's' + x.id, loai: 'xu', xu: x.cao.xu - phi, phi, vat: x.vat, ly: 'Tiền bán đấu giá (đã trừ phí 5%)' }); }
      } else if (x.ban !== 'he') vao(x.ban, { id: 't' + x.id, loai: 'vat', vat: x.vat, ly: 'Không có ai trả giá — trả lại món hàng' });
    });
    return doi;
  }
  async function moDg(pvK, tk, taoMoi) {
    const key = 'dg:' + pvK + ':' + tk;
    return c.khoaC(key, async () => {
      let dg = await c.docC(key);
      if (!dg && taoMoi) { dg = { lo: loHe(tk, pvK), hop: {} }; await c.ghiC(key, dg); }
      if (dg && chot(dg)) await c.ghiC(key, dg);
      return dg;
    });
  }
  function giaoVat(f, v) {
    if (v.loai === 'hat') { f.hat = f.hat || {}; f.hat[v.k] = (f.hat[v.k] || 0) + v.n; } else f.tui[v.k] = (f.tui[v.k] || 0) + v.n;
  }
  // Nhan hop thu (goi trong khoa cua em): ghi ma da nhan vao f TRUOC, roi moi xoa khoi du lieu chung -> nhan lai cung khong trung
  async function nhanHop(me, f, pvK) {
    let nhan = [];
    for (const tk of [d.vnWeekKey(), tuanTruoc(d.vnWeekKey())]) {
      const key = 'dg:' + pvK + ':' + tk;
      const ds = await c.khoaC(key, async () => {
        const dg = await c.docC(key);
        if (!dg) return [];
        if (chot(dg)) await c.ghiC(key, dg);
        const hop = (dg.hop && dg.hop[me]) || [];
        if (!hop.length) return [];
        f.dgDa = Array.isArray(f.dgDa) ? f.dgDa : [];
        const moi = hop.filter((e) => f.dgDa.indexOf(e.id) < 0);
        moi.forEach((e) => { if (e.loai === 'xu') f.xu += e.xu; else giaoVat(f, e.vat); f.dgDa.unshift(e.id); });
        f.dgDa = f.dgDa.slice(0, 200);
        if (moi.length) await h.ghi(me, f);
        delete dg.hop[me];
        await c.ghiC(key, dg);
        return moi;
      });
      nhan = nhan.concat(ds);
    }
    if (nhan.length) f.dgTb = (f.dgTb || []).concat(nhan.map((e) => ({ loai: e.loai, xu: e.xu, vat: e.vat, ly: e.ly }))).slice(-10);
    return nhan;
  }
  h.vaoHook.push(async (user, f) => {
    if (!f.dgCo || now() - f.dgCo > 15 * 86400000) return false;
    const pv = await c.phamVi(user.id);
    return (await nhanHop(user.id, f, pv.k)).length > 0;
  });
  function veDg(dg, me, ten, tk) {
    const t = now();
    return dg.lo.map((x) => ({
      id: x.id, vat: x.vat, gia: x.gia, buoc: x.buoc, het: x.het, xong: x.xong || x.het <= t, he: x.ban === 'he', cuaEm: x.ban === me,
      nguoiBan: x.ban === 'he' ? 'Hội chợ' : tenAn(ten[x.ban]),
      cao: x.cao ? { xu: x.cao.xu, ten: x.cao.ai === me ? 'Em' : tenAn(ten[x.cao.ai]), la: x.cao.ai === me } : null,
      toiThieu: x.cao ? x.cao.xu + x.buoc : x.gia, soLan: (x.lich || []).length, tuan: tk,
    })).sort((a, b) => (a.xong - b.xong) || a.het - b.het);
  }
  app.get('/api/farm/dg', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, pv = await c.phamVi(me), tk = d.vnWeekKey();
    const [dg, cu, ten] = await Promise.all([moDg(pv.k, tk, true), moDg(pv.k, tuanTruoc(tk), false), d.loadUserNames()]);
    const r = await h.lanLuot(me, async () => {
      const f = await h.doc(me);
      const nhan = f.dgCo ? await nhanHop(me, f, pv.k) : [];
      const tb = f.dgTb || [];
      if (tb.length) { delete f.dgTb; await h.ghi(me, f); }
      return { f, tb: tb.length ? tb : nhan };
    });
    const f = r.f, lv = h.lvTuXp(f.xp);
    const ds = veDg(dg, me, ten, tk).concat(cu ? veDg(cu, me, ten, tuanTruoc(tk)).filter((x) => !x.xong) : []);
    const giu = ds.filter((x) => !x.xong && x.cao && x.cao.la).length;
    // mon em dang co the dua len dau gia: hat quy, vat nuoi quy trong tui, do trang tri quy / doc quyen trong tui
    const coThe = [];
    h.CAY_HIEM.forEach((k) => { if ((f.hat || {})[k] > 0) coThe.push({ loai: 'hat', k, co: f.hat[k] }); });
    Object.keys(f.tui || {}).forEach((k) => {
      if (f.tui[k] > 0 && h.CON[k] && h.CON[k].lv >= 10) coThe.push({ loai: 'con', k, co: f.tui[k] });
      if (f.tui[k] > 0 && h.TT[k] && (h.TT[k].doc || h.TT[k].lv >= 12) && !/^cup-/.test(k)) coThe.push({ loai: 'tt', k, co: f.tui[k] });
    });
    res.json({ pham: pv.ten, ds, giu, giuToiDa: DG_GIU_TOI_DA, xu: f.xu, mo: lv >= h.MO_TN.dg.lv, tb: r.tb, coThe, phi: DG_PHI, now: now() });
  }));
  app.post('/api/farm/dg/dat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, id = String(b.id || ''), xu = Math.floor(Number(b.xu) || 0);
    const pv = await c.phamVi(me);
    const tk = /^(\d{8})/.exec(id) ? id.slice(0, 4) + '-' + id.slice(4, 6) + '-' + id.slice(6, 8) : '';
    if (!tk || (tk !== d.vnWeekKey() && tk !== tuanTruoc(d.vnWeekKey()))) return res.status(400).json({ error: 'Phiên đấu giá này đã đóng.' });
    const key = 'dg:' + pv.k + ':' + tk;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (h.lvTuXp(f.xp) < h.MO_TN.dg.lv) throw loi('Đấu giá mở ở cấp ' + h.MO_TN.dg.lv + '.');
      if (!(xu >= 1) || xu > 100000) throw loi('Số xu chưa hợp lệ.');
      const kq = await c.khoaC(key, async () => {
        const dg = await c.docC(key);
        if (!dg) throw loi('Không có phiên này.');
        chot(dg);
        const x = dg.lo.find((y) => y.id === id), t = now();
        if (!x || x.xong || x.het <= t) { await c.ghiC(key, dg); throw loi('Lô này đã đóng.'); }
        if (x.ban === me) throw loi('Không trả giá món của chính em được.');
        if (x.cao && x.cao.ai === me) throw loi('Em đang giữ giá cao nhất rồi.');
        const min = x.cao ? x.cao.xu + x.buoc : x.gia;
        if (xu < min) throw loi('Phải trả ít nhất ' + min + ' xu.');
        // so lo em dang giu gia cao nhat (ca 2 tuan)
        let giu = dg.lo.filter((y) => !y.xong && y.cao && y.cao.ai === me).length;
        const khac = tk === d.vnWeekKey() ? await c.docC('dg:' + pv.k + ':' + tuanTruoc(tk)) : await c.docC('dg:' + pv.k + ':' + d.vnWeekKey());
        if (khac) giu += khac.lo.filter((y) => !y.xong && y.het > t && y.cao && y.cao.ai === me).length;
        if (giu >= DG_GIU_TOI_DA) throw loi('Em đang giữ giá cao nhất ở ' + DG_GIU_TOI_DA + ' lô — đợi có kết quả rồi trả giá tiếp nhé.');
        if (f.xu < xu) throw loi('Em có ' + f.xu + ' xu — chưa đủ ' + xu + ' xu.');
        // giu xu cua em (ghi nong trai truoc), roi ghi gia moi + hoan xu nguoi truoc vao hop thu cua ho
        f.xu -= xu; f.dgCo = t;
        await h.ghi(me, f);
        try {
          dg.hop = dg.hop || {};
          if (x.cao) (dg.hop[x.cao.ai] = dg.hop[x.cao.ai] || []).push({ id: 'r' + x.id + '-' + (x.lich || []).length, loai: 'xu', xu: x.cao.xu, ly: 'Hoàn xu: có bạn trả cao hơn', vat: x.vat });
          x.cao = { ai: me, xu, t };
          x.lich = (x.lich || []).concat({ ai: me, xu, t }).slice(-30);
          let them = false;
          if (x.het - t < DG_BUOC_CHOT) { x.het += DG_BUOC_CHOT; them = true; }
          await c.ghiC(key, dg);
          return { them, het: x.het };
        } catch (e) { f.xu += xu; await h.ghi(me, f); throw e; }
      });
      return Object.assign({ ok: true, xu, st: await h.trangThai(me, f) }, kq);
    }));
  }));
  // Em dua mon quy len dau gia (24 hoac 48 gio); mon roi khoi tui ngay (giu cho nguoi thang)
  app.post('/api/farm/dg/dang', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, loai = String(b.loai || ''), k = String(b.k || '');
    const gia = Math.floor(Number(b.gia) || 0), gio = Number(b.gio) === 48 ? 48 : 24;
    const n = loai === 'hat' ? Math.max(1, Math.min(3, Math.floor(Number(b.n) || 1))) : 1;
    const pv = await c.phamVi(me), tk = d.vnWeekKey(), key = 'dg:' + pv.k + ':' + tk;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (h.lvTuXp(f.xp) < h.MO_TN.dg.lv) throw loi('Đấu giá mở ở cấp ' + h.MO_TN.dg.lv + '.');
      const hopLe = (loai === 'hat' && h.CAY_HIEM.indexOf(k) >= 0 && ((f.hat || {})[k] || 0) >= n) ||
        (loai === 'con' && h.CON[k] && h.CON[k].lv >= 10 && (f.tui[k] || 0) >= 1) ||
        (loai === 'tt' && h.TT[k] && (h.TT[k].doc || h.TT[k].lv >= 12) && !/^cup-/.test(k) && (f.tui[k] || 0) >= 1);
      if (!hopLe) throw loi('Chỉ đưa lên được hạt giống quý, vật nuôi quý hoặc đồ trang trí quý đang có trong túi.');
      const san = loai === 'hat' ? 30 * n : loai === 'con' ? 60 : 40;
      if (gia < san || gia > 3000) throw loi('Giá khởi điểm từ ' + san + ' đến 3000 xu.');
      await moDg(pv.k, tk, true);
      await c.khoaC(key, async () => {
        const dg = await c.docC(key);
        const dang = dg.lo.filter((y) => y.ban === me && !y.xong).length;
        if (dang >= DG_LO_EM) throw loi('Mỗi em đưa tối đa ' + DG_LO_EM + ' món cùng lúc.');
        if (loai === 'hat') { f.hat[k] -= n; if (!f.hat[k]) delete f.hat[k]; } else { f.tui[k]--; if (!f.tui[k]) delete f.tui[k]; }
        f.dgCo = now(); f.dgSo = (f.dgSo || 0) + 1;
        await h.ghi(me, f);
        dg.lo.push({ id: tk.replace(/-/g, '') + 'e' + me.slice(0, 8) + f.dgSo, ban: me, vat: { loai, k, n }, gia, buoc: Math.max(5, Math.round(gia * 0.05)), het: now() + gio * 3600000, cao: null, lich: [], xong: false });
        await c.ghiC(key, dg);
      });
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));

  h.ttThem.push((userId, f) => ({ tiemTb: f.tiem && f.tiem.tb ? f.tiem.tb.length : 0, tiemDang: f.tiem && f.tiem.ds ? f.tiem.ds.length : 0, dgTb: f.dgTb ? f.dgTb.length : 0 }));
  Object.assign(h.CATALOG, { MK: { BAN: MK_BAN, MUA: MK_MUA, NL: XG.NL }, TIEM: { HAN: TIEM_HAN, PHI: TIEM_PHI, BIEN: TIEM_BIEN, MUA_NGAY: TIEM_MUA_NGAY } });
  return { docMk, giaBanCho };
};
