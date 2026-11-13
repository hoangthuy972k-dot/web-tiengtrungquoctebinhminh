// Cot truyen va nhan vat cua nong trai (co giao, 2026-11): 1 mua ~8 chuong, moi TUAN (gio VN) mo toi da 1 chuong
// (chuong sau con can doc xong chuong truoc) — ca lop di cung nhau, khong ai "cay" het trong 1 ngay.
// NOI DUNG (nhan vat, loi thoai, viec, qua) nam o nong-trai-truyen.js; file nay chi la may chay:
//   f.tr = { xong: [{ t, tuan }], moTuan, g: { ch, p: 'mo' | 'viec' | 'ket', i, dem: { viec: so }, da, lv, zq } }
// Moi chuong: canh mo dau -> 1–2 viec nong trai (dem bang su kien cua cac he thong san co) -> canh ket -> qua (1 lan).
// "Khoanh khac tieng Trung": cau NGUYEN VAN tu bai em da hoc / duoc giao (h.phieuLuu.cauTruyen), may chu giu dap an,
// cham bang cau-hoi.js; sai thi nhan vat nhac lai kem pinyin, lam lai duoc (khong phat), co ghi on cach quang.
// Em chua hoc bai nao -> the "hoc mot bai truoc" (canh tieng Viet truoc do van doc duoc).
const T = require('./nong-trai-truyen');

module.exports = function ganCotTruyen(app, d, h, c) {
  const loi = h.loi, SP = h.SP, CH = T.MUA.chuong;
  const tr = (f) => { f.tr = f.tr || {}; f.tr.xong = f.tr.xong || []; return f.tr; };
  const viecCua = (ch, lv) => ch.viec.map((v) => (v.lv && lv < v.lv && v.thay ? v.thay : v));
  const canhCua = (ch, p) => (p === 'ket' ? ch.ket : ch.mo);
  const soNgayToiTuanSau = () => Math.max(1, Math.ceil(d.secondsToVnWeekEnd() / 86400));

  // Trang thai 1 chuong voi em: xong | dang | mo (bat dau duoc) | cho (doi tuan sau) | khoa
  function ttChuong(f, i) {
    const t = f.tr || {}, xong = (t.xong || []).length;
    if (i < xong) return { tt: 'xong' };
    if (t.g && t.g.ch === i) return { tt: 'dang' };
    if (i > xong || t.g) return { tt: 'khoa', ly: 'Đọc xong chương ' + i + ' trước đã.' };
    if (i > 0 && t.moTuan === d.vnWeekKey()) return { tt: 'cho', ly: 'Mỗi tuần mở 1 chương — chương này mở vào thứ Hai (còn ' + soNgayToiTuanSau() + ' ngày).' };
    return { tt: 'mo' };
  }
  function moTaQua(q) {
    const ds = [];
    if (q.xu) ds.push(q.xu + ' xu');
    if (q.hat) ds.push(q.hat + ' hạt giống');
    if (q.hatquy) ds.push(q.hatquy + ' hạt quý');
    if (q.tt) ds.push(h.TT[q.tt].vn);
    if (q.ky) ds.push(h.TT[T.MUA.ky].vn + ' (kỷ vật cuối mùa)');
    return ds.join(' + ');
  }
  function phatQua(f, q, lv) {
    const ra = [], chon = (a) => a[Math.floor(Math.random() * a.length)];
    f.hat = f.hat || {};
    if (q.xu) { f.xu += q.xu; ra.push({ loai: 'xu', n: q.xu }); }
    if (q.hat) { const k = chon(Object.keys(h.CAY).filter((x) => !h.CAY[x].hiem && h.CAY[x].lv <= Math.max(1, lv))); f.hat[k] = (f.hat[k] || 0) + q.hat; ra.push({ loai: 'hat', k, n: q.hat }); }
    if (q.hatquy) { const k = chon(h.CAY_HIEM); f.hat[k] = (f.hat[k] || 0) + q.hatquy; ra.push({ loai: 'hatquy', k, n: q.hatquy }); }
    if (q.tt) { f.tui[q.tt] = (f.tui[q.tt] || 0) + 1; ra.push({ loai: 'tt', k: q.tt, n: 1 }); }
    if (q.ky) {
      f.tui[T.MUA.ky] = (f.tui[T.MUA.ky] || 0) + 1; ra.push({ loai: 'tt', k: T.MUA.ky, n: 1, ky: 1 });
      f.ke = f.ke || {}; f.ke.kn = (f.ke.kn || []).filter((x) => x.k !== T.MUA.k).concat({ k: T.MUA.k, ten: T.MUA.ten, t: Date.now() });
    }
    return ra;
  }
  // Tien do 1 viec (dem luu trong g.dem; viec "hoc" dat roi thi giu luon)
  function tienDo(f, g, v, idx, homNay) {
    const dem = g.dem[idx] || 0;
    if (v.giao) return { co: dem ? 1 : 0, can: 1, xong: !!dem, du: Object.keys(v.giao).every((k) => (f.kho[k] || 0) >= v.giao[k]) };
    if (v.hoc) {
      if (!dem && homNay != null && homNay >= v.hoc) g.dem[idx] = v.hoc;
      return { co: g.dem[idx] ? v.hoc : Math.min(homNay || 0, v.hoc), can: v.hoc, xong: !!g.dem[idx] };
    }
    return { co: Math.min(dem, v.n), can: v.n, xong: dem >= v.n };
  }
  // Su kien tu cac he thong khac (thu hoach, nhat, giao don, ban cho, nha may, ban do, tha tim...) -> dem viec dang lam
  h.suKienHook.push((f, ten, n) => {
    const g = f.tr && f.tr.g;
    if (!g || g.p !== 'viec') return;
    viecCua(CH[g.ch], g.lv).forEach((v, idx) => { if (v.ev && v.ev.indexOf(ten) >= 0) g.dem[idx] = Math.min(v.n, (g.dem[idx] || 0) + n); });
  });
  // viec "hoc du sao hom nay": ghi nhan khi em mo nong trai (dat roi thi giu, sang ngay khong mat)
  h.vaoHook.push(async (user, f) => {
    const g = f.tr && f.tr.g;
    if (!g || g.p !== 'viec') return false;
    const vs = viecCua(CH[g.ch], g.lv);
    if (!vs.some((v, i) => v.hoc && !g.dem[i])) return false;
    const homNay = h.saoHoc(await d.loadStar(user.id)).homNay, truoc = JSON.stringify(g.dem);
    vs.forEach((v, i) => tienDo(f, g, v, i, homNay));
    return JSON.stringify(g.dem) !== truoc;
  });
  const goiY = (q) => (q.pyCau ? 'Pinyin: ' + q.pyCau : q.k === 'xep' && q.c && q.c.dap ? 'Câu bắt đầu bằng «' + [...q.c.dap][0] + '…»' : q.py ? q.zh + ' — ' + q.py : 'Đọc chậm lại từng chữ nhé.');
  // Canh / viec hien tai gui cho client (co the sinh cau tieng Trung moi -> doi f); { view, doi }
  async function hienTai(user, f) {
    const t = tr(f), g = t.g;
    if (!g) return { view: null, doi: false };
    const ch = CH[g.ch];
    if (g.p === 'viec') {
      const homNay = h.saoHoc(await d.loadStar(user.id)).homNay, truoc = JSON.stringify(g.dem);
      const viec = viecCua(ch, g.lv).map((v, idx) => Object.assign({ idx, mo: v.mo, ai: v.ai || '', giao: v.giao || null, hoc: v.hoc || 0 }, tienDo(f, g, v, idx, homNay)));
      return { view: { ch: g.ch, p: 'viec', viec, xongHet: viec.every((x) => x.xong) }, doi: JSON.stringify(g.dem) !== truoc };
    }
    const ds = canhCua(ch, g.p), cd = ds[g.i];
    if (Array.isArray(cd)) return { view: { ch: g.ch, p: g.p, i: g.i, so: ds.length, the: { ai: cd[0], bc: cd[1], t: cd[2] } }, doi: false };
    let doi = false;
    if (!g.zq) {
      g.da = g.da || {};
      const q = h.phieuLuu.cauTruyen(await h.tuHocCua(user), cd.zh, { thay: g.da, tuDa: {} });
      if (q) { g.zq = { q, sai: 0 }; doi = true; }
    }
    const z = g.zq;
    return { doi, view: { ch: g.ch, p: g.p, i: g.i, so: ds.length, the: { ai: cd.ai, bc: z && z.xong ? 'vui' : '', t: cd.t, zh: cd.zh,
      cau: z && !z.xong ? { k: z.q.k, hoi: z.q.hoi, lua: z.q.lua } : null, chuaHoc: !z, xong: !!(z && z.xong), sai: z ? z.sai : 0,
      goiY: z && z.sai && !z.xong ? goiY(z.q) : '', kq: z && z.xong ? Object.assign({ dung: true }, h.ketQuaCau(z.q)) : null } } };
  }
  function tomTat(f) {
    return {
      mua: { k: T.MUA.k, ten: T.MUA.ten, zh: T.MUA.zh, py: T.MUA.py }, nv: T.NV,
      ds: CH.map((ch, i) => Object.assign({ i, ten: ch.ten, tom: ch.tom, qua: moTaQua(ch.qua) }, ttChuong(f, i))),
      xong: (f.tr && f.tr.xong ? f.tr.xong.length : 0), so: CH.length,
    };
  }
  async function traVe(user, f, them) {
    const r = await hienTai(user, f);
    if (r.doi) await h.ghi(user.id, f);
    return Object.assign(tomTat(f), { dang: r.view }, them || {});
  }

  app.get('/api/farm/truyen', d.requireAuth, d.asyncRoute(async (req, res) => {
    res.json(await h.lanLuot(req.user.id, async () => traVe(req.user, await h.doc(req.user.id))));
  }));
  app.post('/api/farm/truyen/mo', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, i = Math.floor(Number(req.body && req.body.i));
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), t = tr(f);
      if (!CH[i]) throw loi('Không có chương này.');
      const tt = ttChuong(f, i);
      if (tt.tt === 'dang') return traVe(req.user, f);
      if (tt.tt !== 'mo') throw loi(tt.ly || 'Chương này em đã đọc xong — bấm “Xem lại” nhé.');
      t.g = { ch: i, p: 'mo', i: 0, dem: {}, da: {}, lv: h.lvTuXp(f.xp), bd: Date.now() };
      t.moTuan = d.vnWeekKey();
      await h.ghi(me, f);
      return traVe(req.user, f);
    }));
  }));
  app.post('/api/farm/truyen/tiep', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), t = tr(f), g = t.g;
      if (!g) throw loi('Em chưa mở chương nào.');
      const ch = CH[g.ch];
      let ket = null;
      if (g.p === 'viec') {
        const homNay = h.saoHoc(await d.loadStar(me)).homNay;
        if (!viecCua(ch, g.lv).every((v, idx) => tienDo(f, g, v, idx, homNay).xong)) throw loi('Còn việc chưa xong — làm xong rồi quay lại kể tiếp nhé!');
        g.p = 'ket'; g.i = 0;
      } else {
        const ds = canhCua(ch, g.p), cd = ds[g.i];
        if (!Array.isArray(cd)) {
          if (!g.zq) throw loi('Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để nghe hiểu câu tiếng Trung này nhé!');
          if (!g.zq.xong) throw loi('Trả lời câu tiếng Trung trước đã nhé.');
          delete g.zq;
        }
        g.i++;
        if (g.i >= ds.length) {
          if (g.p === 'mo') { g.p = ch.viec.length ? 'viec' : 'ket'; g.i = 0; }
          else {
            // het chuong: phat qua DUNG 1 LAN (chi khi day la chuong ke tiep chua ghi xong)
            let qua = [];
            if (t.xong.length === g.ch) { t.xong.push({ t: Date.now(), tuan: d.vnWeekKey() }); qua = phatQua(f, ch.qua, h.lvTuXp(f.xp)); f.xp += 10; }
            ket = { ch: g.ch, ten: ch.ten, qua, hetMua: t.xong.length >= CH.length };
            t.g = null;
          }
        }
      }
      await h.ghi(me, f);
      return traVe(req.user, f, ket ? { ket, st: await h.trangThai(me, f) } : {});
    }));
  }));
  app.post('/api/farm/truyen/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), g = tr(f).g, z = g && g.zq;
      if (!z || z.xong) throw loi('Không có câu nào đang chờ.');
      const dung = h.chamCau(z.q, b);
      h.onCau(f, z.q, b, dung);
      let kq;
      if (dung) { z.xong = 1; kq = Object.assign({ ok: true, dung: true }, h.ketQuaCau(z.q)); if (c.ldCong) c.ldCong(me); }
      else { z.sai = (z.sai || 0) + 1; kq = { ok: true, dung: false, goiY: goiY(z.q), sai: z.sai }; } // sai: KHONG gui dap an, chi goi y pinyin
      await h.ghi(me, f);
      return kq;
    }));
  }));
  app.post('/api/farm/truyen/giao', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, idx = Math.floor(Number(req.body && req.body.v));
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), g = tr(f).g;
      if (!g || g.p !== 'viec') throw loi('Chưa tới lúc giao hàng.');
      const v = viecCua(CH[g.ch], g.lv)[idx];
      if (!v || !v.giao) throw loi('Không có việc này.');
      if (g.dem[idx]) throw loi('Em đã giao rồi.');
      Object.keys(v.giao).forEach((k) => { if ((f.kho[k] || 0) < v.giao[k]) throw loi('Kho chưa đủ ' + v.giao[k] + ' ' + SP[k].vn.toLowerCase() + ' (đang có ' + (f.kho[k] || 0) + ').'); });
      Object.keys(v.giao).forEach((k) => { f.kho[k] -= v.giao[k]; if (!f.kho[k]) delete f.kho[k]; });
      g.dem[idx] = 1; f.xp += 2;
      await h.ghi(me, f);
      return traVe(req.user, f, { st: await h.trangThai(me, f) });
    }));
  }));
  // Xem lai chuong da doc xong (chi doc, khong co qua; khoanh khac tieng Trung chi nhac lai loi dan)
  app.post('/api/farm/truyen/xem', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id), i = Math.floor(Number(req.body && req.body.i));
    if (!CH[i] || i >= tr(f).xong.length) return res.status(400).json({ error: 'Em chưa đọc xong chương này.' });
    const doi = (cd) => (Array.isArray(cd) ? { ai: cd[0], bc: cd[1], t: cd[2] } : { ai: cd.ai, bc: '', t: cd.t, daQua: 1 });
    res.json({ i, ten: CH[i].ten, canh: CH[i].mo.map(doi).concat([{ ai: 'ke', bc: '', t: '— ' + CH[i].viec.map((v) => v.mo).join(' · ') + ' —', viec: 1 }], CH[i].ket.map(doi)) });
  }));

  // tom tat cho nong trai: cham do tren o "Câu chuyện" + bong bong nhan vat khi dang co viec
  h.ttThem.push((userId, f) => {
    const t = f.tr || {}, g = t.g, xong = (t.xong || []).length;
    let cho = null, sanSang = false;
    if (g && g.p === 'viec') {
      const vs = viecCua(CH[g.ch], g.lv).map((v, idx) => Object.assign({ v }, tienDo(f, g, v, idx, null)));
      const con = vs.filter((x) => !x.xong)[0];
      sanSang = !con;
      const ai = (con && con.v.ai) || (CH[g.ch].mo.find((cd) => Array.isArray(cd) && cd[0] !== 'ke') || ['lan'])[0];
      cho = con ? { ai, mo: con.v.mo, co: con.v.hoc ? null : con.co, can: con.can } : { ai, mo: 'Xong việc rồi — quay lại nghe kể tiếp nhé!', xong: 1 };
    }
    const moDuoc = !g && xong < CH.length && ttChuong(f, xong).tt === 'mo';
    return { tr: { cham: moDuoc || sanSang || !!(g && g.p !== 'viec'), cho, xong, so: CH.length } };
  });
  Object.assign(h.CATALOG, { TR_NV: T.NV });
  return { CH };
};
