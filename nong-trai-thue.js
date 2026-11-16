// Thue nong trai 税 shuì (co giao 2026-11-16: "thuat toan tinh thue cho nhung ho co nhieu tai san hoac thu hoach duoc nhieu").
// Luat (may chu tinh het, moi tuan VN 1 lan, luc em mo nong trai lan dau trong tuan moi — giong tra cup lop):
//  - Thue tai san 财产税: uoc tinh tai san = xu + hang trong kho / sap / tiem (gia ban x HE_HANG)
//    + vat nuoi, do trang tri, nha, nha may, o ruong, dat (gia mua x HE_TAI_SAN; mua bang sao doi XU_SAO xu / sao).
//    Mien thue MIEN_CO_BAN + MIEN_MOI_CAP x cap; phan vuot tinh luy tien BAC_TS.
//  - Thue thu nhap 所得税: xu kiem tu BAN HANG tuan truoc (cua hang, thuong lai, cho, tiem, sap, don hang, nha hang,
//    xuat khau, dau gia, ban cho bang Can mua) — dem bang f.thn (ghiThuNhap trong nong-trai.js). Thuong hoc tap,
//    ruong sao, doi sao, qua... KHONG tinh. Mien MIEN_TN xu / tuan, phan vuot tinh BAC_TN.
//  - Giam thue vi hoc: moi ngay tuan truoc hoc >= SAO_NGAY sao -10% (toi da -50%); lam "Hôm nay em ôn gì" >= ON_NGAY ngay -20% nua.
//  - Tran: khong qua TRAN (10%) so xu dang co, khong bao gio am xu, khong bao gio lay do vat; thieu thi bo qua (khong ghi no).
//    Duoi TOI_THIEU xu thi mien. Cap < LV khong bao gio dong thue.
//  - Tien thue vao Quy thi tran (pham vi lop / cong dong): CT_PHAN thue tho xay cong trinh chung (XU_GACH xu = 1 vien gach,
//    toi da GACH_PHAN so gach cua moi cong trinh — phan con lai van phai tra loi cau hoi), phan con lai la tro cap tuan
//    cho TC_SO ban tai san thap nhat co hoc >= TC_NGAY_HOC ngay tuan truoc (nhan o "Phần thưởng thị trấn").
//  - Nha hao tam cua tuan: top 3 dong thue nhieu nhat (hien o thi tran).
// Du lieu: f.thue { tu, tuan, ls[4], moi, tcCho, tcNhan }, f.thn { w, n, tw, tn };
//          chung 'thue:<pham vi>' (quy), 'thd:<tuan>' (ngay hoc >= 20 sao), 'thd:meta' (bat dau dem).
const THUE = {
  LV: 10,
  MIEN_CO_BAN: 5000, MIEN_MOI_CAP: 600,
  BAC_TS: [[20000, 0.005], [50000, 0.01], [Infinity, 0.02]], // [do rong bac, thue suat] tinh tu muc mien thue
  MIEN_TN: 2000,
  BAC_TN: [[6000, 0.03], [Infinity, 0.06]],
  HE_HANG: 0.8, HE_TAI_SAN: 0.4, XU_SAO: 1,
  SAO_NGAY: 20, GIAM_NGAY: 0.10, GIAM_NGAY_MAX: 0.5, ON_NGAY: 4, GIAM_ON: 0.2,
  TRAN: 0.10, TOI_THIEU: 5,
  CT_PHAN: 0.6, XU_GACH: 10, GACH_PHAN: 0.5,
  TC_SO: 5, TC_MIN: 20, TC_MAX: 50, TC_NGAY_HOC: 3,
};
const GIA_RIENG = { 'nha-kinh': 2500 }; // do doc quyen mua bang xu o module khac
const LS_GIU = 4, TUAN_GIU = 8;
const XUONG = require('./nong-trai-xuong').CAT.XUONG;

const giaODat = (i) => 3 + Math.max(0, i - 4); // giong nong-trai.js giaODat (sao)
// Uoc tinh tai san cua 1 nong trai (cat = { SP, CON, TT, NHA, DAT })
function taiSan(f, cat) {
  const T = THUE, xuSao = (n) => n * T.XU_SAO;
  let hang = 0, co = 0;
  const giaHang = (k, n) => ((cat.SP[k] && cat.SP[k].ban) || 0) * (n || 0);
  Object.keys(f.kho || {}).forEach((k) => { hang += giaHang(k, f.kho[k]); });
  (f.sap || []).forEach((o) => { hang += giaHang(o.k, o.n); });
  ((f.tiem && f.tiem.ds) || []).forEach((o) => { hang += giaHang(o.k, o.n); });
  let soO = 0;
  const giaVat = (k, n) => {
    if (k === 'o') { const g = giaODat(soO); soO++; return xuSao(g); }
    if (cat.CON[k]) return xuSao(cat.CON[k].sao || 0);
    const m = /^xg-(.+)$/.exec(k);
    if (m && XUONG[m[1]]) return XUONG[m[1]].xu || 0;
    if (GIA_RIENG[k]) return GIA_RIENG[k];
    const t = cat.TT[k];
    if (t && !t.doc) return t.sao ? xuSao(t.sao) : t.xu || 0;
    if (t && t.moc) return t.sao ? xuSao(t.sao) : t.xu || 0;
    if (k === 'nha') { let s = 0; for (let i = 2; i <= (n || 1); i++) s += xuSao((cat.NHA[i] && cat.NHA[i].sao) || 0); return s; }
    return 0; // cup, qua doc quyen, nha kho: khong tinh
  };
  (f.o || []).forEach((o) => { co += giaVat(o.k, o.n); });
  Object.keys(f.tui || {}).forEach((k) => { for (let i = 0; i < (f.tui[k] || 0) && i < 200; i++) co += giaVat(k, 1); });
  for (let i = 1; i <= (f.dat || 0) && cat.DAT[i]; i++) co += cat.DAT[i].xu || xuSao(cat.DAT[i].sao || 0);
  const xu = Math.max(0, f.xu || 0) + (f.can || []).reduce((a, x) => a + (x.gia || 0), 0);
  const out = { xu, hang: Math.round(hang * T.HE_HANG), co: Math.round(co * T.HE_TAI_SAN), hangGoc: Math.round(hang), coGoc: Math.round(co) };
  out.tong = out.xu + out.hang + out.co;
  return out;
}
function chiaBac(so, bac) {
  let con = so, tu = 0;
  const ds = [];
  for (const [rong, tl] of bac) {
    if (con <= 0) break;
    const phan = Math.min(con, rong);
    ds.push({ tu, den: tu + phan, tl, so: Math.round(phan), thue: phan * tl });
    con -= phan; tu += rong;
  }
  return ds;
}
// x = { lv, ts (tai san), tn (thu nhap tuan), xu (xu dang co), ngay20, ngayOn }
function tinhThue(x) {
  const T = THUE;
  if (!(x.lv >= T.LV)) return null;
  const mien = T.MIEN_CO_BAN + T.MIEN_MOI_CAP * x.lv;
  const bacTs = chiaBac(Math.max(0, x.ts - mien), T.BAC_TS), bacTn = chiaBac(Math.max(0, x.tn - T.MIEN_TN), T.BAC_TN);
  const tong = (ds) => ds.reduce((a, b) => a + b.thue, 0);
  const tTs = tong(bacTs), tTn = tong(bacTn), gop = Math.round(tTs + tTn);
  const giamNgay = Math.min(T.GIAM_NGAY_MAX, T.GIAM_NGAY * (x.ngay20 || 0)), giamOn = (x.ngayOn || 0) >= T.ON_NGAY ? T.GIAM_ON : 0;
  const giam = Math.round((giamNgay + giamOn) * 100) / 100;
  const sauGiam = Math.round(gop * (1 - giam));
  const xu = Math.max(0, Math.floor(x.xu || 0)), tran = Math.floor(xu * T.TRAN);
  let thue = Math.min(sauGiam, tran, xu);
  const catTran = sauGiam > thue;
  if (thue < T.TOI_THIEU) thue = 0;
  const r = (ds) => ds.map((b) => ({ tu: b.tu, den: b.den, tl: b.tl, so: b.so, thue: Math.round(b.thue) }));
  return { lv: x.lv, ts: Math.round(x.ts), mien, bacTs: r(bacTs), tTs: Math.round(tTs), tn: Math.round(x.tn), mienTn: T.MIEN_TN, bacTn: r(bacTn), tTn: Math.round(tTn),
    gop, ngay20: x.ngay20 || 0, ngayOn: x.ngayOn || 0, giamNgay, giamOn, giam, sauGiam, xu, tran, catTran, thue };
}

function gan(app, d, h, c) {
  const T = THUE, loi = h.loi;
  const cat = { SP: h.SP, CON: h.CON, TT: h.TT, NHA: h.NHA, DAT: h.DAT };
  const tuanTruoc = (w) => new Date(Date.parse(w + 'T00:00:00Z') - 7 * 86400000).toISOString().slice(0, 10);
  const ngayCua = (w) => { const a = []; for (let i = 0; i < 7; i++) a.push(new Date(Date.parse(w + 'T00:00:00Z') + i * 86400000).toISOString().slice(0, 10)); return a; };
  const batDauTuan = (w) => Date.parse(w + 'T00:00:00+07:00');
  const thnTuan = (f, w) => (!f.thn ? 0 : f.thn.w === w ? f.thn.n || 0 : f.thn.tw === w ? f.thn.tn || 0 : 0);
  if (h.CATALOG) h.CATALOG.THUE = Object.assign({}, THUE, { BAC_TS: THUE.BAC_TS.map((b) => [b[0] === Infinity ? 0 : b[0], b[1]]), BAC_TN: THUE.BAC_TN.map((b) => [b[0] === Infinity ? 0 : b[0], b[1]]) });

  /* ---- Ngay hoc >= SAO_NGAY sao: may chu bao moi lan luu sao (server.js baoNt('sao')) ---- */
  let daGhi = new Set(), daGhiNgay = '';
  c.khoaC('thd:meta', async () => { if (!(await c.docC('thd:meta'))) await c.ghiC('thd:meta', { tu: Date.now() }); }).catch(() => {});
  if (d.suKien) {
    d.suKien.on('sao', (uid, s) => {
      try {
        const ngay = d.vnDayKey();
        if (!s || s.day !== ngay || d.starsToday(s) < T.SAO_NGAY) return;
        if (daGhiNgay !== ngay) { daGhi = new Set(); daGhiNgay = ngay; }
        if (daGhi.has(uid)) return;
        daGhi.add(uid);
        const k = 'thd:' + d.vnWeekKey();
        c.khoaC(k, async () => {
          const x = (await c.docC(k)) || { u: {} };
          const a = x.u[uid] = x.u[uid] || [];
          if (a.indexOf(ngay) < 0) { a.push(ngay); await c.ghiC(k, x); }
        }).catch((e) => { daGhi.delete(uid); console.error('Thue (ngay hoc):', e.message); });
      } catch (e) { /* bo qua */ }
    });
  }
  // So ngay trong tuan w em hoc >= SAO_NGAY sao. Tuan bat dau dem giua chung (tuan dua len may chu):
  // lay them uoc tinh tu so ngay hoc (scores.studyDays) va tong sao tuan / 20 — lay so lon hon (nghieng ve hoc sinh).
  async function ngay20(uid, w) {
    const [x, meta] = await Promise.all([c.docC('thd:' + w), c.docC('thd:meta')]);
    const dem = ((x && x.u && x.u[uid]) || []).filter((n) => n >= w).length;
    if (meta && meta.tu <= batDauTuan(w)) return Math.min(7, dem);
    const [s, sc] = await Promise.all([d.loadStar(uid), d.loadScoreOf(uid)]);
    const sao = s.week === w ? s.weekStars || 0 : s.prevWeek === w ? s.prevWeekStars || 0 : 0;
    const ds = ngayCua(w), hoc = ((sc && sc.studyDays) || []).filter((n) => ds.indexOf(n) >= 0).length;
    return Math.min(7, Math.max(dem, Math.min(hoc, Math.floor(sao / T.SAO_NGAY))));
  }
  // So ngay xong "Hôm nay em ôn gì" (khoa '/onhn-xong|<ngay>' trong star_answers)
  async function ngayOn(uid, w) {
    if (!d.loadStarAnswerKeys) return 0;
    const ds = ngayCua(w);
    const keys = await d.loadStarAnswerKeys(uid);
    return keys.filter((k) => k.indexOf('/onhn-xong|') === 0 && ds.indexOf(k.slice(11)) >= 0).length;
  }
  async function soNgayHoc(uid, w) {
    const sc = await d.loadScoreOf(uid);
    const ds = ngayCua(w);
    return ((sc && sc.studyDays) || []).filter((n) => ds.indexOf(n) >= 0).length;
  }
  async function hoaDon(uid, f, w) {
    const ts = taiSan(f, cat);
    const [n20, nOn] = await Promise.all([ngay20(uid, w), ngayOn(uid, w).catch(() => 0)]);
    const b = tinhThue({ lv: h.lvTuXp(f.xp), ts: ts.tong, tn: thnTuan(f, w), xu: f.xu, ngay20: n20, ngayOn: nOn });
    if (b) b.chiTiet = ts;
    return b;
  }

  /* ---- Quy thi tran ---- */
  const quyMoi = () => ({ tong: 0, ctDu: 0, tcDu: 0, gachTong: 0, tcTong: 0, w: {} });
  const tuanMoi = () => ({ thu: 0, ng: {}, gach: 0, tc: {}, nhan: [] });
  async function docQuy(k) { return Object.assign(quyMoi(), (await c.docC('thue:' + k)) || {}); }
  function catTuan(q) { const ks = Object.keys(q.w).sort().reverse(); ks.slice(TUAN_GIU).forEach((x) => { delete q.w[x]; }); }
  // Nop thue vao quy (1 lan / em / tuan nop) roi tu thue tho xay cong trinh. Khoa: em -> quy -> cong trinh.
  async function nopQuy(pv, uid, w, xu) {
    return c.khoaC('thue:' + pv.k, async () => {
      const q = await docQuy(pv.k);
      const ww = q.w[w] = Object.assign(tuanMoi(), q.w[w] || {});
      if (ww.ng[uid] != null) return { gach: 0, trung: true };
      ww.ng[uid] = xu; ww.thu += xu; q.tong += xu;
      const ct = Math.round(xu * T.CT_PHAN);
      q.ctDu += ct; q.tcDu += xu - ct;
      let gach = 0;
      const muon = Math.floor(q.ctDu / T.XU_GACH);
      if (muon > 0 && c.quyXayCt) {
        try { gach = await c.quyXayCt(pv, muon, T.GACH_PHAN); } catch (e) { gach = 0; }
        q.ctDu -= gach * T.XU_GACH; ww.gach += gach; q.gachTong += gach;
      }
      catTuan(q);
      await c.ghiC('thue:' + pv.k, q);
      return { gach };
    });
  }
  // Tro cap tuan w: TC_SO ban tai san thap nhat co hoc >= TC_NGAY_HOC ngay tuan truoc (tinh 1 lan / pham vi / tuan)
  async function xetTroCap(pv) {
    const w = d.vnWeekKey();
    const q0 = await docQuy(pv.k);
    if (q0.w[w] && q0.w[w].tcXet) return q0;
    return c.khoaC('thue:' + pv.k, async () => {
      const q = await docQuy(pv.k);
      const ww = q.w[w] = Object.assign(tuanMoi(), q.w[w] || {});
      if (ww.tcXet) return q;
      ww.tcXet = Date.now();
      // tro cap tuan truoc chua nhan -> tra lai quy
      const wp = q.w[tuanTruoc(w)];
      if (wp && wp.tc && !wp.hoan) {
        const con = Object.keys(wp.tc).filter((u) => (wp.nhan || []).indexOf(u) < 0).reduce((a, u) => a + wp.tc[u], 0);
        q.tcDu += con; q.tcTong -= con; wp.hoan = con || -1;
      }
      if (q.tcDu >= T.TC_MIN) {
        const [farms, ten] = await Promise.all([h.docNhieu(pv.ids), d.loadUserNames()]);
        // chi ban co tai san duoi muc mien thue cua cap minh (khong phai nong trai giau) moi duoc xet
        const ds = Object.keys(farms).filter((id) => ten[id]).map((id) => ({ id, ts: taiSan(farms[id], cat).tong, mien: T.MIEN_CO_BAN + T.MIEN_MOI_CAP * h.lvTuXp(farms[id].xp) }))
          .filter((x) => x.ts <= x.mien).sort((a, b) => a.ts - b.ts || (a.id < b.id ? -1 : 1));
        const chon = [], tw = tuanTruoc(w);
        for (const x of ds) {
          if (chon.length >= T.TC_SO) break;
          if ((await soNgayHoc(x.id, tw).catch(() => 0)) >= T.TC_NGAY_HOC) chon.push(x.id);
        }
        const n = Math.min(chon.length, Math.floor(q.tcDu / T.TC_MIN));
        if (n > 0) {
          const moi = Math.max(T.TC_MIN, Math.min(T.TC_MAX, Math.floor(q.tcDu / n)));
          chon.slice(0, n).forEach((id) => { ww.tc[id] = moi; });
          q.tcDu -= moi * n; q.tcTong += moi * n;
        }
      }
      catTuan(q);
      await c.ghiC('thue:' + pv.k, q);
      return q;
    });
  }
  // Tom tat quy cho thi tran / bang thue (ten hien bang ten ngan o may khach)
  async function tomQuy(pvK, me) {
    const q = await docQuy(pvK), ten = await d.loadUserNames(), w = d.vnWeekKey();
    const ww = q.w[w] || tuanMoi(), wp = q.w[tuanTruoc(w)] || tuanMoi();
    const nguon = Object.keys(ww.ng).length ? ww : wp;
    const hao = Object.keys(nguon.ng).filter((u) => ten[u] && nguon.ng[u] > 0).sort((a, b) => nguon.ng[b] - nguon.ng[a]).slice(0, 3)
      .map((u) => ({ ten: ten[u], n: nguon.ng[u], la: u === me }));
    return {
      du: Math.round(q.ctDu + q.tcDu), tong: q.tong, gachTong: q.gachTong, tcTong: q.tcTong,
      tuan: { thu: ww.thu, gach: ww.gach, so: Object.keys(ww.ng).filter((u) => ww.ng[u] > 0).length },
      hao, haoTuan: nguon === ww ? 'nay' : 'truoc',
      tc: Object.keys(ww.tc).filter((u) => ten[u]).map((u) => ({ ten: ten[u], xu: ww.tc[u], la: u === me, nhan: ww.nhan.indexOf(u) >= 0 })),
    };
  }

  /* ---- Chot thue tuan truoc: luc em mo nong trai (trong khoa cua em) ---- */
  h.vaoHook.push(async (user, f) => {
    const uid = user.id, w = d.vnWeekKey(), tw = tuanTruoc(w);
    let doi = false;
    if (!f.thue) { f.thue = { tu: w, tuan: tw, ls: [], moi: 0 }; doi = true; }
    const pv = await c.phamVi(uid);
    // tro cap: xet cho ca pham vi (lan dau trong tuan), bao cho em neu em duoc nhan
    try {
      const q = await xetTroCap(pv), ww = q.w[w];
      const coTc = ww && ww.tc[uid] && ww.nhan.indexOf(uid) < 0 && f.thue.tcNhan !== w;
      if (coTc && !(f.thue.tcCho && f.thue.tcCho.w === w)) { f.thue.tcCho = { w, xu: ww.tc[uid] }; doi = true; }
      if (!coTc && f.thue.tcCho) { delete f.thue.tcCho; doi = true; }
    } catch (e) { console.error('Thue (tro cap):', e.message); }
    if (f.thue.tuan >= tw || f.thue.tu > tw) return doi;
    // chua chot tuan truoc (bo tuan cu hon: khong truy thu)
    f.thue.tuan = tw;
    const b = await hoaDon(uid, f, tw);
    if (!b || b.gop < T.TOI_THIEU) return true; // cap < 10 hoac duoi muc mien thue: khong co hoa don
    b.w = tw; b.tra = w; b.t = Date.now(); b.pham = pv.ten; b.gach = 0;
    if (b.thue > 0) {
      const r = await nopQuy(pv, uid, w, b.thue).catch((e) => { console.error('Thue (nop quy):', e.message); return { loi: 1 }; });
      // quy da ghi em nop tuan nay (vd du lieu nong trai bi ghi de) -> khong thu lan 2; quy loi -> tuan nay mien (khong mat xu oan)
      if (r.trung || r.loi) return true;
      b.gach = r.gach || 0;
      f.xu = Math.max(0, f.xu - b.thue);
      h.ghiNk(f, { l: 'thue', xu: b.thue, w: tw });
    }
    delete b.chiTiet.hangGoc; delete b.chiTiet.coGoc;
    f.thue.ls = [b].concat(f.thue.ls || []).slice(0, LS_GIU);
    f.thue.moi = 1;
    return true;
  });
  h.ttThem.push((userId, f, lv) => {
    const t = f.thue || {}, w = d.vnWeekKey();
    return { thue: { mo: lv >= T.LV, moi: t.moi && t.ls && t.ls[0] ? t.ls[0] : null, tc: t.tcCho && t.tcCho.w === w ? t.tcCho : null } };
  });

  /* ---- Tro cap nhan qua "Phần thưởng thị trấn" (nong-trai-chung.js thuongtt) ---- */
  if (c.thuongThem) c.thuongThem.push({
    loai: 'trocap',
    ds: async (me, f) => {
      const pv = await c.phamVi(me), q = await xetTroCap(pv), w = d.vnWeekKey(), ww = q.w[w];
      if (!ww || !ww.tc[me]) return [];
      return [{ loai: 'trocap', xu: ww.tc[me], daNhan: ww.nhan.indexOf(me) >= 0 || (f.thue && f.thue.tcNhan === w) }];
    },
    nhan: async (me, f) => {
      const pv = await c.phamVi(me), w = d.vnWeekKey();
      await c.khoaC('thue:' + pv.k, async () => {
        const q = await docQuy(pv.k), ww = q.w[w];
        if (!ww || !ww.tc[me]) throw loi('Em chưa có trợ cấp tuần này.');
        if (ww.nhan.indexOf(me) >= 0) throw loi('Em đã nhận trợ cấp tuần này rồi.');
        ww.nhan.push(me);
        await c.ghiC('thue:' + pv.k, q);
      });
      f.thue = f.thue || { tu: w, tuan: tuanTruoc(w), ls: [], moi: 0 };
      f.thue.tcNhan = w;
      delete f.thue.tcCho;
      h.ghiNk(f, { l: 'trocap', w });
    },
  });

  /* ---- API ---- */
  app.get('/api/farm/thue', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, w = d.vnWeekKey();
    const pv = await c.phamVi(me);
    const f = await h.doc(me), lv = h.lvTuXp(f.xp);
    const [uoc, quy] = await Promise.all([hoaDon(me, f, w), (async () => { await xetTroCap(pv).catch(() => null); return tomQuy(pv.k, me); })()]);
    if (uoc) { delete uoc.chiTiet.hangGoc; delete uoc.chiTiet.coGoc; }
    res.json({ mo: lv >= T.LV, lv, lvMo: T.LV, uoc, ls: (f.thue && f.thue.ls) || [], quy, pham: { ten: pv.ten, loai: pv.loai },
      giayHetTuan: d.secondsToVnWeekEnd(), tu: f.thue ? f.thue.tu : w });
  }));
  app.post('/api/farm/thue/xem', d.requireAuth, d.asyncRoute(async (req, res) => {
    await h.traLoi(res, h.lanLuot(req.user.id, async () => {
      const f = await h.doc(req.user.id);
      if (f.thue && f.thue.moi) { f.thue.moi = 0; await h.ghi(req.user.id, f); }
      return { ok: true };
    }));
  }));
  // Thay co: thue thu / quy / tro cap cua tung lop (chi xem)
  app.get('/api/admin/farm-thue', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const st = await d.loadClassState(), ten = await d.loadUserNames(), w = d.vnWeekKey();
    const lop = String(req.query.lop || '') || (st.classes[0] && st.classes[0].id) || '';
    const q = await docQuy('lop:' + lop), ww = q.w[w] || tuanMoi(), wp = q.w[tuanTruoc(w)] || tuanMoi();
    const tom = (x) => ({ thu: x.thu, gach: x.gach, nop: Object.keys(x.ng).filter((u) => x.ng[u] > 0).sort((a, b) => x.ng[b] - x.ng[a]).map((u) => ({ ten: ten[u] || '(đã xoá)', xu: x.ng[u] })),
      tc: Object.keys(x.tc).map((u) => ({ ten: ten[u] || '(đã xoá)', xu: x.tc[u], nhan: x.nhan.indexOf(u) >= 0 })) });
    res.json({ lop, du: Math.round(q.ctDu + q.tcDu), tong: q.tong, gachTong: q.gachTong, tcTong: q.tcTong, nay: tom(ww), truoc: tom(wp), luat: { lv: T.LV, mien: T.MIEN_CO_BAN, moiCap: T.MIEN_MOI_CAP } });
  }));

  // CHI DE THU tren may local (NT_THU=1): gia lap sang tuan moi cho em dang dang nhap
  //  lui: 1 -> coi nhu tuan truoc chua chot thue (lan mo nong trai sau se chot); thn: thu nhap tuan truoc;
  //  ngay20: so ngay hoc >= 20 sao tuan truoc; tcLai: 1 -> xet lai tro cap tuan nay; tcDu: dat quy tro cap
  if (process.env.NT_THU === '1') {
    app.post('/api/farm/_thue', d.requireAuth, d.asyncRoute(async (req, res) => {
      const b = req.body || {}, me = req.user.id, w = d.vnWeekKey(), tw = tuanTruoc(w);
      const pv = await c.phamVi(me);
      await h.traLoi(res, h.lanLuot(me, async () => {
        const f = await h.doc(me);
        if (b.lui) { f.thue = Object.assign(f.thue || { ls: [], moi: 0 }, { tu: tuanTruoc(tw), tuan: tuanTruoc(tw) }); }
        if (Number.isFinite(Number(b.thn))) f.thn = { w, n: (f.thn && f.thn.w === w ? f.thn.n : 0), tw, tn: Math.max(0, Math.floor(Number(b.thn))) };
        await h.ghi(me, f);
        if (Number.isFinite(Number(b.ngay20))) {
          await c.khoaC('thd:' + tw, async () => {
            const x = (await c.docC('thd:' + tw)) || { u: {} };
            x.u[me] = ngayCua(tw).slice(0, Math.max(0, Math.min(7, Number(b.ngay20))));
            await c.ghiC('thd:' + tw, x);
          });
          await c.khoaC('thd:meta', async () => { await c.ghiC('thd:meta', { tu: Date.parse('2020-01-01') }); });
        }
        if (b.tcLai || Number.isFinite(Number(b.tcDu))) {
          await c.khoaC('thue:' + pv.k, async () => {
            const q = await docQuy(pv.k);
            if (q.w[w] && b.tcLai) { delete q.w[w].tcXet; q.w[w].tc = {}; q.w[w].nhan = []; }
            if (Number.isFinite(Number(b.tcDu))) q.tcDu = Math.max(0, Number(b.tcDu));
            await c.ghiC('thue:' + pv.k, q);
          });
        }
        return { ok: true, thue: f.thue, thn: f.thn };
      }));
    }));
  }

  return { tomQuy, xetTroCap, _thu: { hoaDon, nopQuy, ngay20, ngayOn } };
}

module.exports = { gan, THUE, taiSan, tinhThue, chiaBac };
