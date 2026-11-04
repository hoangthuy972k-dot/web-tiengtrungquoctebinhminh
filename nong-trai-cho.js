// Luu thong hang hoa (co giao: "nhieu hoc sinh co hang ban nhung khong co nhu cau mua"):
//  1) Thuong lai 商人: moi ngay 3 dot (6h, 12h, 18h gio VN) mot thuong lai den cho cua pham vi (lop / cong dong),
//     can mua nhung mon dang thua nhieu nhat. Tu mua sap re cua cac ban (toi da nua so luong), phan con lai
//     hoc sinh ban truc tiep tu kho — phai doc hieu cau tieng Trung (chon dung tranh mon hang) moi ban duoc.
//  2) Don hang thi tran tuan 本周大订单: ca lop gop hang hoan thanh don lon (tra xu ngay khi gop),
//     xong don ai gop cung nhan thuong, top 3 them thuong.
// Luu chung trong bang farm_chung (qua cac ham docC / ghiC cua nong-trai-chung.js).

const TL_NGUOI = [
  { zh: '王老板', py: 'Wáng lǎobǎn', vn: 'Ông chủ Vương' },
  { zh: '李阿姨', py: 'Lǐ āyí', vn: 'Dì Lý' },
  { zh: '张师傅', py: 'Zhāng shīfu', vn: 'Bác thợ Trương' },
  { zh: '陈经理', py: 'Chén jīnglǐ', vn: 'Giám đốc Trần' },
  { zh: '刘大叔', py: 'Liú dàshū', vn: 'Chú Lưu' },
  { zh: '赵奶奶', py: 'Zhào nǎinai', vn: 'Bà Triệu' },
];
const TL_GIO = [6, 12, 18];       // gio VN thuong lai den; 0h-6h khong co
const TL_TY_LE = 0.35;            // moi dot mua ~35% luong hang dang thua trong pham vi
const TL_QUET = 0.5;              // toi da nua so luong mua tu sap cac ban
const TL_GIA = 1.2;               // tra 1,2 lan gia cua hang
const HD_THUONG = 30, HD_TOP = [30, 20, 10];

module.exports = function ganCho(app, d, h, c) {
  const loi = h.loi, SP = h.SP;
  const tronMang = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const gioVn = () => new Date(Date.now() + 7 * 3600000).getUTCHours();
  // dot hien tai (0..2) hoac -1 ban dem; so giay toi dot sau
  function dotHienTai() {
    const g = gioVn();
    let dot = -1;
    TL_GIO.forEach((x, i) => { if (g >= x) dot = i; });
    const vn = new Date(Date.now() + 7 * 3600000);
    const giayTrongNgay = vn.getUTCHours() * 3600 + vn.getUTCMinutes() * 60 + vn.getUTCSeconds();
    const sau = TL_GIO.find((x) => x * 3600 > giayTrongNgay);
    return { dot, sau: (sau != null ? sau * 3600 : 24 * 3600 + TL_GIO[0] * 3600) - giayTrongNgay };
  }
  const tenHang = (k) => SP[k];
  function cauMua(k, n, gia) {
    const l = h.LUONG[k] || '个', lp = h.LUONG_PY[l] || 'ge';
    return { zh: '我要买' + n + l + SP[k].zh + '，每' + l + gia + '块钱。', py: 'Wǒ yào mǎi ' + n + ' ' + lp + ' ' + SP[k].py + ', měi ' + lp + ' ' + gia + ' kuài qián.' };
  }
  const giaTl = (k) => Math.max(SP[k].ban + 1, Math.round(SP[k].ban * TL_GIA));
  const hangThuong = () => h.HANG.filter((k) => SP[k]);

  async function taoTl(me, ma, dot) {
    const tt = await h.thiTruong(me);
    const cung = tt.cung || {};
    let ds = Object.keys(cung).filter((k) => SP[k] && cung[k] >= 2).sort((a, b) => cung[b] * SP[b].ban - cung[a] * SP[a].ban).slice(0, 3);
    const them = tronMang(hangThuong().filter((k) => ds.indexOf(k) < 0 && (cung[k] || 0) > 0)).slice(0, 4 - ds.length);
    ds = ds.concat(them);
    if (ds.length < 2) ds = ds.concat(tronMang(['trung', 'lua', 'carot', 'ngo', 'sua'].filter((k) => ds.indexOf(k) < 0))).slice(0, 3);
    const ngau = hangThuong().concat(Object.keys(h.CA));
    const nguoi = TL_NGUOI[(Number(ma.replace(/\D/g, '').slice(-6)) + dot) % TL_NGUOI.length];
    return {
      ma, dot, nguoi, t: Date.now(), quet: [], ban: {}, sai: {},
      ds: ds.map((k) => {
        const n = Math.max(3, Math.min(40, Math.ceil((cung[k] || 0) * TL_TY_LE)));
        const lua = tronMang([k].concat(tronMang(ngau.filter((x) => x !== k)).slice(0, 3)));
        return { k, tong: n, con: n, gia: giaTl(k), lua };
      }),
    };
  }
  // Thuong lai tu mua sap re cua cac ban (khoa: nguoi ban -> tl, cung thu tu voi luc hoc sinh ban)
  async function quetSap(pvK, key, ids) {
    const farms = await h.docNhieu(ids);
    const tl0 = await c.docC(key);
    if (!tl0) return;
    for (let i = 0; i < tl0.ds.length; i++) {
      const it = tl0.ds[i];
      let ngan = Math.floor(it.tong * TL_QUET);
      const sap = [];
      Object.keys(farms).forEach((id) => (farms[id].sap || []).forEach((o) => {
        if (o.k === it.k && h.giaSap(o) / o.n <= it.gia) sap.push({ id, sid: o.id, don: h.giaSap(o) / o.n, n: o.n });
      }));
      sap.sort((a, b) => a.don - b.don);
      for (const x of sap) {
        if (ngan <= 0) break;
        if (x.n > ngan) continue;
        const ok = await h.lanLuot(x.id, async () => {
          const fs = await h.doc(x.id);
          const o = (fs.sap || []).find((y) => y.id === x.sid);
          if (!o) return 0;
          const gia = h.giaSap(o);
          const ban = await c.khoaC(key, async () => {
            const tl = await c.docC(key);
            const it2 = tl && tl.ds[i];
            if (!it2 || it2.con < o.n) return false;
            it2.con -= o.n;
            tl.quet = [{ k: o.k, n: o.n, ai: x.id }].concat(tl.quet || []).slice(0, 20);
            await c.ghiC(key, tl);
            return true;
          });
          if (!ban) return 0;
          fs.sap = fs.sap.filter((y) => y !== o);
          fs.xu += gia;
          fs.xp += 2;
          h.ghiNk(fs, { ai: 'tl', l: 'thuonglai', k: o.k, n: o.n, xu: gia, tl: tl0.nguoi.zh });
          await h.ghi(x.id, fs);
          return o.n;
        });
        ngan -= ok;
      }
    }
    h.boNhoCongDong();
  }
  async function layTl(me) {
    const { dot, sau } = dotHienTai();
    if (dot < 0) return { dot, sau, tl: null };
    const pv = await c.phamVi(me);
    const ma = d.vnDayKey().replace(/-/g, '') + dot;
    const key = 'tl:' + pv.k + ':' + ma;
    let moi = false;
    let tl = await c.khoaC(key, async () => {
      let x = await c.docC(key);
      if (!x) { x = await taoTl(me, ma, dot); await c.ghiC(key, x); moi = true; }
      return x;
    });
    if (moi) { await quetSap(pv.k, key, pv.ids); tl = await c.docC(key); }
    return { dot, sau, tl, key };
  }
  const gioiHan = (it) => Math.max(3, Math.ceil(it.tong / 2));
  function tlChoHs(tl, me) {
    return {
      ma: tl.ma, nguoi: tl.nguoi,
      ds: tl.ds.map((it, i) => {
        const emBan = (tl.ban[me] && tl.ban[me][i]) || 0, sai = (tl.sai[me] || []).indexOf(i) >= 0;
        const biet = emBan > 0 || sai || (tl.biet && tl.biet[me] && tl.biet[me].indexOf(i) >= 0);
        return Object.assign({ i, con: it.con, tong: it.tong, gia: it.gia, lua: it.lua, emBan, sai, gioiHan: gioiHan(it), k: biet ? it.k : null }, cauMua(it.k, it.tong, it.gia));
      }),
      quet: (tl.quet || []).length, quetN: (tl.quet || []).reduce((a, x) => a + x.n, 0),
    };
  }

  app.get('/api/farm/thuonglai', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const r = await layTl(me);
    res.json({ dot: r.dot, sau: r.sau, gio: TL_GIO, tl: r.tl ? tlChoHs(r.tl, me) : null });
  }));
  app.post('/api/farm/thuonglai/ban', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    const r = await layTl(me);
    await h.traLoi(res, h.lanLuot(me, async () => {
      if (!r.tl || r.tl.ma !== String(b.ma || '')) throw loi('Thương lái này đã đi rồi — xem thương lái mới nhé!');
      const f = await h.doc(me);
      if (h.lvTuXp(f.xp) < h.MO_TN.tl.lv) throw loi('Thương lái mở ở cấp ' + h.MO_TN.tl.lv + '.');
      // ban cho thuong lai tinh vao han muc ban hang (tang theo sao hoc hom nay)
      const hm = await h.hanMuc(me, f);
      const kq = await c.khoaC(r.key, async () => {
        const tl = await c.docC(r.key);
        const i = Number(b.i), it = tl.ds[i];
        if (!it) throw loi('Không có dòng hàng này.');
        tl.sai[me] = tl.sai[me] || [];
        if (tl.sai[me].indexOf(i) >= 0) throw loi('Em đã chọn nhầm món này — thương lái không mua của em món này nữa.');
        if (String(b.chon || '') !== it.k) {
          tl.sai[me].push(i);
          await c.ghiC(r.key, tl);
          return { sai: true, k: it.k };
        }
        tl.biet = tl.biet || {};
        tl.biet[me] = tl.biet[me] || [];
        if (tl.biet[me].indexOf(i) < 0) tl.biet[me].push(i);
        tl.ban[me] = tl.ban[me] || {};
        const da = tl.ban[me][i] || 0;
        const n = Math.min(Math.floor(Number(b.n) || 0) || 999, it.con, gioiHan(it) - da, f.kho[it.k] || 0, Math.floor(hm.con / it.gia));
        if (n < 1) {
          await c.ghiC(r.key, tl);
          return { k: it.k, n: 0, ly: it.con < 1 ? 'het' : da >= gioiHan(it) ? 'du' : (f.kho[it.k] || 0) < 1 ? 'kho' : 'hanmuc', toiDa: hm.toiDa };
        }
        it.con -= n;
        tl.ban[me][i] = da + n;
        await c.ghiC(r.key, tl);
        return { k: it.k, n, xu: n * it.gia };
      });
      if (kq.n > 0) {
        f.kho[kq.k] -= kq.n;
        if (!f.kho[kq.k]) delete f.kho[kq.k];
        f.xu += kq.xu;
        h.ghiBanNgay(f, kq.xu);
        f.xp += Math.min(10, kq.n);
        await h.ghi(me, f);
      }
      const tl = await c.docC(r.key);
      return Object.assign({ ok: true, tl: tlChoHs(tl, me) }, kq, kq.n > 0 ? { st: await h.trangThai(me, f) } : {});
    }));
  }));

  /* ---------------- Don hang thi tran tuan 本周大订单 ---------------- */
  const tuanTruoc = (t) => new Date(Date.parse(t + 'T00:00:00Z') - 7 * 86400000).toISOString().slice(0, 10);
  async function taoHd(me, pv) {
    const tt = await h.thiTruong(me);
    const cung = tt.cung || {}, so = Math.max(3, Math.min(30, pv.ids.length));
    const hang = hangThuong();
    let ds = hang.filter((k) => (cung[k] || 0) > 0).sort((a, b) => cung[b] - cung[a]).slice(0, 3);
    ds = ds.concat(tronMang(hang.filter((k) => ds.indexOf(k) < 0 && (h.CAY[k] ? h.CAY[k].lv <= 4 : ['trung', 'trungvit', 'sua', 'len'].indexOf(k) >= 0))).slice(0, 4 - ds.length));
    const can = {};
    ds.forEach((k) => { can[k] = Math.max(5, Math.min(300, Math.round(so * Math.max(1, 50 / SP[k].ban)))); });
    return { can, co: {}, gop: {}, xong: 0, nhan: [] };
  }
  async function layHd(me, pv, tuan, taoMoi) {
    const key = 'hd:' + pv.k + ':' + tuan;
    return c.khoaC(key, async () => {
      let x = await c.docC(key);
      if (!x && taoMoi) { x = await taoHd(me, pv); await c.ghiC(key, x); }
      return x;
    });
  }
  async function hdChoHs(hd, me, tuan) {
    const ten = await d.loadUserNames();
    const top = Object.keys(hd.gop).filter((id) => ten[id]).map((id) => ({ id, ten: ten[id], n: hd.gop[id], la: id === me })).sort((a, b) => b.n - a.n);
    const hang = top.findIndex((x) => x.la);
    return {
      tuan, xong: !!hd.xong, gopEm: hd.gop[me] || 0, daNhan: hd.nhan.indexOf(me) >= 0,
      coTheNhan: !!hd.xong && (hd.gop[me] || 0) > 0 && hd.nhan.indexOf(me) < 0,
      thuong: HD_THUONG + (hang >= 0 && hang < 3 ? HD_TOP[hang] : 0), hang: hang >= 0 ? hang + 1 : 0,
      ds: Object.keys(hd.can).map((k) => ({ k, can: hd.can[k], co: hd.co[k] || 0, xu: Math.round(SP[k].ban * 0.9),
        zh: '需要' + hd.can[k] + (h.LUONG[k] || '个') + SP[k].zh, py: 'Xūyào ' + hd.can[k] + ' ' + (h.LUONG_PY[h.LUONG[k] || '个'] || 'ge') + ' ' + SP[k].py })),
      top: top.slice(0, 8), soNguoi: top.length,
    };
  }
  app.get('/api/farm/hd', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, pv = await c.phamVi(me), tuan = d.vnWeekKey();
    const hd = await layHd(me, pv, tuan, true);
    const cu = await layHd(me, pv, tuanTruoc(tuan), false);
    res.json({
      pham: pv.ten, conGiay: d.secondsToVnWeekEnd(), hd: await hdChoHs(hd, me, tuan),
      cu: cu && cu.xong && (cu.gop[me] || 0) > 0 && cu.nhan.indexOf(me) < 0 ? await hdChoHs(cu, me, tuanTruoc(tuan)) : null,
    });
  }));
  app.post('/api/farm/hd/gop', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, k = String(b.k || ''), n = Math.floor(Number(b.n));
    const pv = await c.phamVi(me), tuan = d.vnWeekKey();
    await h.traLoi(res, h.lanLuot(me, async () => {
      if (!SP[k] || !(n >= 1)) throw loi('Món góp chưa hợp lệ.');
      const f = await h.doc(me);
      if (h.lvTuXp(f.xp) < h.MO_TN.hd.lv) throw loi('Đơn lớn mở ở cấp ' + h.MO_TN.hd.lv + '.');
      if ((f.kho[k] || 0) < 1) throw loi('Kho của em không có ' + SP[k].vn.toLowerCase() + '.');
      const hm = await h.hanMuc(me, f);
      const key = 'hd:' + pv.k + ':' + tuan;
      const kq = await c.khoaC(key, async () => {
        const hd = await c.docC(key);
        if (!hd || !hd.can[k]) throw loi('Đơn tuần này không cần món này.');
        const thieu = hd.can[k] - (hd.co[k] || 0);
        if (thieu <= 0) throw loi('Món này đã đủ rồi — góp món khác nhé!');
        const so = Math.min(n, thieu, f.kho[k]);
        hd.co[k] = (hd.co[k] || 0) + so;
        hd.gop[me] = (hd.gop[me] || 0) + SP[k].ban * so;
        let xong = false;
        if (!hd.xong && Object.keys(hd.can).every((x) => (hd.co[x] || 0) >= hd.can[x])) { hd.xong = Date.now(); xong = true; }
        await c.ghiC(key, hd);
        return { so, xong, hd };
      });
      // van gop duoc cho ca lop; tien tra toi da bang han muc ban con lai hom nay
      const du = Math.round(SP[k].ban * 0.9 * kq.so), xu = Math.min(du, hm.con);
      f.kho[k] -= kq.so;
      if (!f.kho[k]) delete f.kho[k];
      f.xu += xu;
      h.ghiBanNgay(f, xu);
      f.xp += Math.min(15, kq.so);
      await h.ghi(me, f);
      return { ok: true, so: kq.so, xu, catHanMuc: du - xu, xong: kq.xong, hd: await hdChoHs(kq.hd, me, tuan), st: await h.trangThai(me, f) };
    }));
  }));
  app.post('/api/farm/hd/nhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, pv = await c.phamVi(me), tuanNay = d.vnWeekKey();
    const tuan = String((req.body && req.body.tuan) || tuanNay);
    if (tuan !== tuanNay && tuan !== tuanTruoc(tuanNay)) return res.status(400).json({ error: 'Đơn này đã hết hạn nhận thưởng.' });
    await h.traLoi(res, h.lanLuot(me, async () => {
      const key = 'hd:' + pv.k + ':' + tuan;
      const thuong = await c.khoaC(key, async () => {
        const hd = await c.docC(key);
        if (!hd || !hd.xong) throw loi('Đơn chưa hoàn thành — cả lớp cố lên!');
        if (!(hd.gop[me] > 0)) throw loi('Em chưa góp hàng cho đơn này.');
        if (hd.nhan.indexOf(me) >= 0) throw loi('Em đã nhận thưởng rồi.');
        const hang = Object.keys(hd.gop).sort((a, b) => hd.gop[b] - hd.gop[a]).indexOf(me);
        hd.nhan.push(me);
        await c.ghiC(key, hd);
        return HD_THUONG + (hang < 3 ? HD_TOP[hang] : 0);
      });
      const f = await h.doc(me);
      f.xu += thuong;
      f.xp += 10;
      await h.ghi(me, f);
      return { ok: true, xu: thuong, st: await h.trangThai(me, f) };
    }));
  }));

  return { dotHienTai };
};
