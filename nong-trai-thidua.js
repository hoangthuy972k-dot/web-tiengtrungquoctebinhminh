// Thi dua giua cac nong trai (co giao: "tang tinh nang thi dua giua cac nong trai hoac cac trai") — moi phan thuong
// deu gan voi SAO HOC (hoc bai) chu khong phai bam chuot; may chu dem, kiem tra va tra thuong (khong tra 2 lan).
//  1) Cup cac trai: trai = lop tren he thong (chua co lop -> giai theo cap nong trai). Diem tuan = sao hoc trung binh
//     moi thanh vien (+ thuong khi ca trai xong Don lon cua thi tran). Tuan sau: top 3 nhan xu, trai so 1 cam co vang.
//  2) Binh chon nong trai dep: sang nha ban bam "Thích" (1 lan / ban / ngay, toi da 5 / ngay, khong tu bau).
//     Top 10 tuan; top 3 tuan truoc duoc gan ruy bang tren nong trai.
//  3) Thach dau hoc 24 gio voi 1 ban cung lop: ai hoc duoc nhieu sao hon trong 24 gio thang (thuong tu he thong).
//  4) Ke cup: cup trai, ruy bang, so lan thang thach dau — ban sang nha cung thay.
// Them (dot 4):
//  5) Vuon tu kho: tu em hay sai thanh hat; on dung DUNG NGAY den han (on cach quang) cay lon 1 bac, sai heo 1 bac (khong chet);
//     3 lan -> no hoa, thu hoach duoc qua hiem.
//  6) Co thuong: diem mieng tu 9 (cham o Che do lop hoc) / thay co thuong tay -> qua cho san, em mo nong trai thi nhan.
//  7) Cay cham chi: moi ngay co hoc (co sao) them 1 bong; 7 bong -> qua vang; bo 1 ngay chi rung 1 bong (khien bao ve thi khong).
// Luu: nong trai cua tung em (doc/ghi) + bang farm_chung (docC/ghiC cua nong-trai-chung.js).

const CUP_XU = [50, 30, 20];       // xu cho moi thanh vien (co hoc trong tuan) cua trai hang 1, 2, 3
const CUP_HD = 10;                 // diem thuong khi ca trai xong Don lon tuan
const CUP_CHIA_TOI_THIEU = 3;      // chia trung binh cho it nhat 3 nguoi (trai 1–2 nguoi khong ap dao)
const BC_NGAY = 5;                 // so phieu "Thích" moi ngay
const BC_TOP = 10;
const TD_GIO = 24;                 // thach dau hoc trong 24 gio; loi moi het han sau 24 gio
const TD_THANG = 60, TD_THAM_GIA = 10, TD_HOA = 30;
const VUON_O = 8;                  // so o vuon tu kho
const CAY7_XU = 80;                // qua vang cay cham chi
const CO_XU = { xu50: 50, xu100: 100 };

module.exports = function ganThiDua(app, d, h, c) {
  const loi = h.loi;
  const tuanTruoc = (t) => new Date(Date.parse(t + 'T00:00:00Z') - 7 * 86400000).toISOString().slice(0, 10);
  const ngayTruoc = (k) => new Date(Date.parse(k + 'T00:00:00Z') - 86400000).toISOString().slice(0, 10);
  const ngaySau = (k) => new Date(Date.parse(k + 'T00:00:00Z') + 86400000).toISOString().slice(0, 10);
  const tron = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const moTn = (f, k) => h.lvTuXp(f.xp) >= h.MO_TN[k].lv;
  function ke(f) { f.ke = f.ke || {}; f.ke.cup = f.ke.cup || []; f.ke.dep = f.ke.dep || []; f.ke.td = f.ke.td || 0; return f.ke; }

  /* ======================= 1) CUP CAC TRAI ======================= */
  // Danh sach trai cua 1 tuan: lop + giai tu do (ban chua vao lop, theo cap nong trai)
  async function bangTrai(tuan, laTuanTruoc) {
    const [st, cd, sao, ten] = await Promise.all([d.loadClassState(), h.taiCongDong(), d.loadAllStars(), d.loadUserNames()]);
    const saoTuan = {};
    sao.forEach((x) => {
      saoTuan[x.userId] = x.week === tuan ? x.weekStars || 0 : (laTuanTruoc && x.prevWeek === tuan ? x.prevWeekStars || 0 : 0);
    });
    const lvCua = {};
    cd.forEach((x) => { lvCua[x.id] = x.lv; });
    const ds = [];
    for (const cl of st.classes) {
      const ids = Object.keys(st.members).filter((u) => st.members[u].classId === cl.id && ten[u]);
      if (!ids.length) continue;
      const hd = await c.docC('hd:lop:' + cl.id + ':' + tuan);
      ds.push({ id: 'lop:' + cl.id, ten: cl.name, loai: 'lop', ids, hd: !!(hd && hd.xong) });
    }
    const hdCd = await c.docC('hd:cd:' + tuan);
    const giai = {};
    cd.forEach((x) => {
      if (st.members[x.id]) return;
      const g = h.giaiCua(x.lv || 1);
      (giai[g] = giai[g] || []).push(x.id);
    });
    Object.keys(giai).forEach((g) => {
      const G = h.GIAI[g];
      ds.push({ id: 'giai:' + g, ten: 'Trại tự do · Giải ' + G.vn, zh: G.zh, loai: 'giai', ids: giai[g], hd: !!(hdCd && hdCd.xong) });
    });
    ds.forEach((t) => {
      const tong = t.ids.reduce((s, id) => s + (saoTuan[id] || 0), 0);
      t.sao = tong;
      t.so = t.ids.length;
      t.tb = Math.round(tong / Math.max(CUP_CHIA_TOI_THIEU, t.so) * 10) / 10;
      t.diem = Math.round((t.tb + (t.hd ? CUP_HD : 0)) * 10) / 10;
      t.idsHoc = t.ids.filter((id) => (saoTuan[id] || 0) > 0);
    });
    ds.sort((a, b) => b.diem - a.diem || b.sao - a.sao || a.ten.localeCompare(b.ten, 'vi'));
    ds.forEach((t, i) => { t.hang = i + 1; });
    return ds;
  }
  // Ket qua tuan truoc: tinh 1 lan roi luu (khong doi nua, khong tra thuong 2 lan)
  async function cupTuanTruoc() {
    const tt = tuanTruoc(d.vnWeekKey()), k = 'cup:' + tt;
    const co = await c.docC(k);
    if (co) return co;
    return c.khoaC(k, async () => {
      const lai = await c.docC(k);
      if (lai) return lai;
      const ds = (await bangTrai(tt, true)).filter((t) => t.diem > 0);
      const kq = { tuan: tt, top: ds.slice(0, 3).map((t) => ({ id: t.id, ten: t.ten, zh: t.zh || '', diem: t.diem, tb: t.tb, hd: t.hd, hang: t.hang, ids: t.ids, idsHoc: t.idsHoc })) };
      await c.ghiC(k, kq);
      return kq;
    });
  }
  // Tra thuong cup cho 1 em (goi khi em mo nong trai). Idempotent: f.cupTra = tuan da xet.
  async function traCup(me) {
    const kq = await cupTuanTruoc();
    return h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (f.cupTra === kq.tuan) return null;
      f.cupTra = kq.tuan;
      const t = kq.top.find((x) => x.ids.indexOf(me) >= 0);
      let ra = null;
      if (t) {
        if (t.hang === 1) f.coVang = d.vnWeekKey();           // co vang cam tren nong trai ca tuan nay
        ke(f).cup.unshift({ tuan: kq.tuan, hang: t.hang, ten: t.ten });
        f.ke.cup = f.ke.cup.slice(0, 20);
        const xu = t.idsHoc.indexOf(me) >= 0 ? CUP_XU[t.hang - 1] : 0;   // phai co hoc trong tuan moi co xu
        f.xu += xu;
        ra = { hang: t.hang, ten: t.ten, xu, tuan: kq.tuan };
        h.ghiNk(f, { l: 'cup', hang: t.hang, xu });
      }
      await h.ghi(me, f);
      return ra;
    });
  }
  async function traiCua(me, ds) {
    const st = await d.loadClassState();
    const m = st.members[me];
    if (m) return ds.find((t) => t.id === 'lop:' + m.classId) || null;
    return ds.find((t) => t.loai === 'giai' && t.ids.indexOf(me) >= 0) || null;
  }
  app.get('/api/farm/cup', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const traMoi = await traCup(me);
    const ruyMoi = await traRuy(me);
    const [ds, kq] = await Promise.all([bangTrai(d.vnWeekKey(), false), cupTuanTruoc()]);
    const em = await traiCua(me, ds);
    res.json({
      tuan: d.vnWeekKey(), conGiay: d.secondsToVnWeekEnd(), xu: CUP_XU, thuongHd: CUP_HD, traMoi, ruyMoi,
      em: em ? em.id : '',
      ds: ds.slice(0, 30).map((t) => ({ id: t.id, ten: t.ten, zh: t.zh || '', loai: t.loai, so: t.so, sao: t.sao, tb: t.tb, hd: t.hd, diem: t.diem, hang: t.hang, la: !!em && em.id === t.id })),
      emHang: em ? { hang: em.hang, diem: em.diem, tb: em.tb, so: em.so, hd: em.hd } : null,
      truoc: { tuan: kq.tuan, top: kq.top.map((t) => ({ id: t.id, ten: t.ten, zh: t.zh, diem: t.diem, hang: t.hang })) },
    });
  }));

  /* ======================= 2) BINH CHON NONG TRAI DEP ======================= */
  async function bangDep(tuan) {
    const x = (await c.docC('bc:' + tuan)) || {};
    return Object.keys(x).map((id) => ({ id, n: x[id] })).sort((a, b) => b.n - a.n || (a.id < b.id ? -1 : 1));
  }
  // Ruy bang cho top 3 tuan truoc: ghi 1 lan vao nong trai (ke cup) khi em mo nong trai
  async function traRuy(me) {
    const tt = tuanTruoc(d.vnWeekKey());
    const top = (await bangDep(tt)).filter((x) => x.n > 0).slice(0, 3);
    const i = top.findIndex((x) => x.id === me);
    return h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (f.ruyXet === tt) return null;
      f.ruyXet = tt;
      let ra = null;
      if (i >= 0) {
        f.ruy = { tuan: d.vnWeekKey(), hang: i + 1 };
        ke(f).dep.unshift({ tuan: tt, hang: i + 1, n: top[i].n });
        f.ke.dep = f.ke.dep.slice(0, 20);
        ra = { hang: i + 1, n: top[i].n };
        h.ghiNk(f, { l: 'ruy', hang: i + 1 });
      }
      await h.ghi(me, f);
      return ra;
    });
  }
  app.get('/api/farm/dep', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, tuan = d.vnWeekKey();
    const [ds, truoc, ten, cd, f] = await Promise.all([bangDep(tuan), bangDep(tuanTruoc(tuan)), d.loadUserNames(), h.taiCongDong(), h.doc(me)]);
    const avCua = {}, lopCua = {};
    cd.forEach((x) => { avCua[x.id] = x.av; lopCua[x.id] = x.lop; });
    const ngay = d.vnDayKey();
    const da = f.bc && f.bc.d === ngay ? f.bc.ids : [];
    const hang = ds.findIndex((x) => x.id === me);
    res.json({
      mo: moTn(f, 'bc'), con: BC_NGAY - da.length, toiDa: BC_NGAY, conGiay: d.secondsToVnWeekEnd(),
      ds: ds.filter((x) => ten[x.id]).slice(0, BC_TOP).map((x, i) => ({ id: x.id, ten: ten[x.id], lop: lopCua[x.id] || '', av: avCua[x.id] || null, n: x.n, hang: i + 1, la: x.id === me })),
      em: { n: hang >= 0 ? ds[hang].n : 0, hang: hang >= 0 ? hang + 1 : 0 },
      truoc: truoc.filter((x) => ten[x.id] && x.n > 0).slice(0, 3).map((x, i) => ({ id: x.id, ten: ten[x.id], n: x.n, hang: i + 1 })),
    });
  }));
  app.post('/api/farm/dep/thich/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id || '');
    if (id === me) return res.status(400).json({ error: 'Không tự bình chọn cho nông trại của mình được.' });
    if (!(await h.coTheChoi(me, id))) return res.status(403).json({ error: 'Bạn này chưa mở nông trại.' });
    const ngay = d.vnDayKey(), tuan = d.vnWeekKey();
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (!moTn(f, 'bc')) throw loi('Bình chọn nông trại đẹp mở ở cấp ' + h.MO_TN.bc.lv + '.');
      if (!f.bc || f.bc.d !== ngay) f.bc = { d: ngay, ids: [] };
      if (f.bc.ids.indexOf(id) >= 0) throw loi('Hôm nay em đã thích nông trại này rồi — mai bình chọn tiếp nhé!');
      if (f.bc.ids.length >= BC_NGAY) throw loi('Hôm nay em đã dùng hết ' + BC_NGAY + ' lượt thích rồi.');
      f.bc.ids.push(id);
      const n = await c.khoaC('bc:' + tuan, async () => {
        const x = (await c.docC('bc:' + tuan)) || {};
        x[id] = (x[id] || 0) + 1;
        await c.ghiC('bc:' + tuan, x);
        return x[id];
      });
      await h.ghi(me, f);
      return { ok: true, n, con: BC_NGAY - f.bc.ids.length };
    }));
  }));

  /* ======================= 3) THACH DAU HOC 24 GIO ======================= */
  // Cap nhat so sao trong khung gio: may chu bao moi lan luu sao (server.js baoNt('sao'))
  let dangDua = null; // uid -> id tran dang dien ra
  async function napDangDua() {
    if (dangDua) return dangDua;
    const x = (await c.docC('tdh:dang')) || {};
    dangDua = new Map(Object.entries(x));
    return dangDua;
  }
  async function ghiDangDua() { const o = {}; (await napDangDua()).forEach((v, k) => { o[k] = v; }); await c.ghiC('tdh:dang', o); }
  if (d.suKien) {
    d.suKien.on('sao', (uid, s) => {
      napDangDua().then((m) => {
        const id = m.get(uid);
        if (!id) return null;
        return c.khoaC('tdh:' + id, async () => {
          const t = await c.docC('tdh:' + id);
          if (!t || t.tt !== 'dang' || Date.now() > t.kt) return;
          const ben = t.a === uid ? 'a' : t.b === uid ? 'b' : '';
          if (!ben) return;
          t.sao[ben].cuoi = Math.max(t.sao[ben].bd, s.total || 0);
          await c.ghiC('tdh:' + id, t);
        });
      }).catch((e) => console.error('Thach dau 24h:', e.message));
    });
  }
  const tongSao = async (uid) => ((await d.loadStar(uid)) || {}).total || 0;
  // Ket thuc tran / het han loi moi; tra thuong 1 lan (khoa tren tran + 2 nong trai)
  async function xetTran(id) {
    const t0 = await c.docC('tdh:' + id);
    if (!t0) return null;
    const now = Date.now();
    if (!((t0.tt === 'cho' && now >= t0.tao + TD_GIO * 3600000) || (t0.tt === 'dang' && now >= t0.kt))) return t0;
    return h.haiLuot(t0.a, t0.b, () => c.khoaC('tdh:' + id, async () => {
      const t = await c.docC('tdh:' + id);
      if (!t || (t.tt !== 'cho' && t.tt !== 'dang')) return t;
      const [fa, fb] = await Promise.all([h.doc(t.a), h.doc(t.b)]);
      if (t.tt === 'cho') t.tt = 'het';
      else {
        const sa = t.sao.a.cuoi - t.sao.a.bd, sb = t.sao.b.cuoi - t.sao.b.bd;
        t.kq = { a: sa, b: sb, thang: sa > sb ? t.a : sb > sa ? t.b : '' };
        t.tt = 'xong';
        const tra = (f, uid, so) => {
          let xu = so > 0 ? TD_THAM_GIA : 0;
          if (t.kq.thang === uid) { xu += TD_THANG; ke(f).td++; } else if (!t.kq.thang && so > 0) xu += TD_HOA;
          f.xu += xu;
          f.tdhKq = { id, xu, thang: t.kq.thang === uid, hoa: !t.kq.thang, em: so, ban: uid === t.a ? sb : sa, voi: uid === t.a ? t.b : t.a };
          h.ghiNk(f, { l: 'tdh', xu });
        };
        tra(fa, t.a, sa); tra(fb, t.b, sb);
      }
      if (fa.tdh === id) delete fa.tdh;
      if (fb.tdh === id) delete fb.tdh;
      await Promise.all([h.ghi(t.a, fa), h.ghi(t.b, fb)]);
      const m = await napDangDua();
      if (m.get(t.a) === id) m.delete(t.a);
      if (m.get(t.b) === id) m.delete(t.b);
      await ghiDangDua();
      await c.ghiC('tdh:' + id, t);
      return t;
    }));
  }
  async function tranChoHs(t, me) {
    if (!t) return null;
    const ten = await d.loadUserNames();
    const ban = t.a === me ? t.b : t.a, benEm = t.a === me ? 'a' : 'b', benBan = benEm === 'a' ? 'b' : 'a';
    const now = Date.now();
    return {
      id: t.id, tt: t.tt, laNguoiMoi: t.a === me, ban: { id: ban, ten: ten[ban] || '' },
      em: t.sao ? t.sao[benEm].cuoi - t.sao[benEm].bd : 0, banSao: t.sao ? t.sao[benBan].cuoi - t.sao[benBan].bd : 0,
      conMs: t.tt === 'dang' ? Math.max(0, t.kt - now) : t.tt === 'cho' ? Math.max(0, t.tao + TD_GIO * 3600000 - now) : 0,
      thuong: { thang: TD_THANG, thamGia: TD_THAM_GIA, hoa: TD_HOA },
    };
  }
  async function tranCua(uid) {
    const f = await h.doc(uid);
    if (!f.tdh) return null;
    const t = await xetTran(f.tdh);
    return t && (t.tt === 'cho' || t.tt === 'dang') ? t : null;
  }
  app.get('/api/farm/tdh', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const t = await tranCua(me);
    // ket qua tran vua xong (hien 1 lan)
    const kq = await h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (!f.tdhKq) return null;
      const x = f.tdhKq; delete f.tdhKq; await h.ghi(me, f);
      x.ten = (await d.loadUserNames())[x.voi] || '';
      return x;
    });
    const f = await h.doc(me);
    res.json({ mo: moTn(f, 'tdh'), dang: await tranChoHs(t, me), kq, gio: TD_GIO, thuong: { thang: TD_THANG, thamGia: TD_THAM_GIA, hoa: TD_HOA } });
  }));
  // tran cua 1 ban (hien tren nong trai ban khi sang tham)
  app.get('/api/farm/tdh/xem/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const id = String(req.params.id);
    if (!(await h.coTheChoi(req.user.id, id))) return res.status(403).json({ error: 'Bạn này chưa mở nông trại.' });
    const t = await tranCua(id);
    res.json({ dang: t && t.tt === 'dang' ? await tranChoHs(t, id) : null });
  }));
  app.post('/api/farm/tdh/moi/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id || '');
    const st = await d.loadClassState();
    if (!st.members[me] || !st.members[id] || st.members[me].classId !== st.members[id].classId || id === me) {
      return res.status(400).json({ error: 'Chỉ thách đấu được bạn cùng lớp.' });
    }
    await h.traLoi(res, (async () => {
      if (await tranCua(me)) throw loi('Em đang có một trận thách đấu rồi — xong trận đó đã nhé!');
      if (await tranCua(id)) throw loi('Bạn này đang có trận thách đấu khác rồi.');
      return h.haiLuot(me, id, async () => {
        const [fm, fb] = await Promise.all([h.doc(me), h.doc(id)]);
        if (!moTn(fm, 'tdh')) throw loi('Thách đấu học mở ở cấp ' + h.MO_TN.tdh.lv + '.');
        if (!moTn(fb, 'tdh')) throw loi('Bạn này chưa lên cấp ' + h.MO_TN.tdh.lv + ' để nhận thách đấu.');
        if (fm.tdh || fb.tdh) throw loi('Một trong hai bạn vừa có trận khác.');
        const t = { id: Math.random().toString(36).slice(2, 10), a: me, b: id, tao: Date.now(), tt: 'cho' };
        fm.tdh = t.id; fb.tdh = t.id;
        h.ghiNk(fb, { ai: me, l: 'tdh-moi' });
        await c.ghiC('tdh:' + t.id, t);
        await Promise.all([h.ghi(me, fm), h.ghi(id, fb)]);
        return { ok: true, dang: await tranChoHs(t, me) };
      });
    })());
  }));
  async function traLoiMoi(req, res, dongY) {
    const me = req.user.id;
    await h.traLoi(res, (async () => {
      const t0 = await tranCua(me);
      if (!t0 || t0.tt !== 'cho' || t0.b !== me) throw loi('Không có lời mời thách đấu nào đang chờ em.');
      return h.haiLuot(t0.a, t0.b, () => c.khoaC('tdh:' + t0.id, async () => {
        const t = await c.docC('tdh:' + t0.id);
        if (!t || t.tt !== 'cho') throw loi('Lời mời này không còn nữa.');
        const [fa, fb] = await Promise.all([h.doc(t.a), h.doc(t.b)]);
        if (dongY) {
          const [sa, sb] = await Promise.all([tongSao(t.a), tongSao(t.b)]);
          t.tt = 'dang'; t.bd = Date.now(); t.kt = t.bd + TD_GIO * 3600000;
          t.sao = { a: { bd: sa, cuoi: sa }, b: { bd: sb, cuoi: sb } };
          const m = await napDangDua(); m.set(t.a, t.id); m.set(t.b, t.id); await ghiDangDua();
          h.ghiNk(fa, { ai: t.b, l: 'tdh-dongy' });
        } else {
          t.tt = 'tuchoi';
          if (fa.tdh === t.id) delete fa.tdh;
          if (fb.tdh === t.id) delete fb.tdh;
          h.ghiNk(fa, { ai: t.b, l: 'tdh-tuchoi' });
        }
        await c.ghiC('tdh:' + t.id, t);
        await Promise.all([h.ghi(t.a, fa), h.ghi(t.b, fb)]);
        return { ok: true, dang: dongY ? await tranChoHs(t, me) : null };
      }));
    })());
  }
  app.post('/api/farm/tdh/dongy', d.requireAuth, d.asyncRoute((req, res) => traLoiMoi(req, res, true)));
  app.post('/api/farm/tdh/tuchoi', d.requireAuth, d.asyncRoute((req, res) => traLoiMoi(req, res, false)));
  // nguoi moi rut lai loi moi (chua bat dau)
  app.post('/api/farm/tdh/huy', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, (async () => {
      const t0 = await tranCua(me);
      if (!t0 || t0.tt !== 'cho' || t0.a !== me) throw loi('Không có lời mời nào để rút lại.');
      return h.haiLuot(t0.a, t0.b, () => c.khoaC('tdh:' + t0.id, async () => {
        const t = await c.docC('tdh:' + t0.id);
        if (!t || t.tt !== 'cho') throw loi('Lời mời này không còn nữa.');
        t.tt = 'huy';
        const [fa, fb] = await Promise.all([h.doc(t.a), h.doc(t.b)]);
        if (fa.tdh === t.id) delete fa.tdh;
        if (fb.tdh === t.id) delete fb.tdh;
        await c.ghiC('tdh:' + t.id, t);
        await Promise.all([h.ghi(t.a, fa), h.ghi(t.b, fb)]);
        return { ok: true };
      }));
    })());
  }));

  /* ======================= 5) VUON TU KHO ======================= */
  // Hat moi: tu em hay sai (bai on) + tu sai o nong trai (hop on cach quang = 0), chi trong bo bai em da hoc / duoc giao
  async function gieoVuon(user, f) {
    const bo = await h.tuHocCua(user);
    const v = f.vuon = f.vuon || { o: [], da: {} };
    v.o = (v.o || []).filter((p) => bo.tu.some((t) => t.zh === p.zh)); // bai khong con trong bo -> bo cay
    if (v.o.length >= VUON_O) return bo;
    const now = Date.now(), co = {};
    v.o.forEach((p) => { co[p.zh] = 1; });
    const on = f.on || {};
    const ung = bo.tu.filter((t) => !co[t.zh] && !(v.da[t.zh] && now - v.da[t.zh] < 7 * 86400000) &&
      (bo.sai.indexOf(t.zh) >= 0 || (on[t.zh] && on[t.zh][0] === 0)));
    // tu sai gan day (hop 0, han on som) truoc
    ung.sort((a, b) => ((on[a.zh] || [9, 0])[0] - (on[b.zh] || [9, 0])[0]) || ((on[a.zh] || [0, 0])[1] - (on[b.zh] || [0, 0])[1]));
    ung.slice(0, VUON_O - v.o.length).forEach((t) => { v.o.push({ zh: t.zh, py: t.py, vn: t.vn, u: t.u, gd: 0, t: now }); });
    return bo;
  }
  function vuonChoHs(f) {
    const on = f.on || {}, now = Date.now();
    return ((f.vuon && f.vuon.o) || []).map((p, i) => ({ i, zh: p.zh, py: p.py, vn: p.vn, gd: p.gd,
      denHan: !on[p.zh] || on[p.zh][1] <= now, hen: on[p.zh] ? on[p.zh][1] : 0, heo: !!(p.heo && now - p.heo < 86400000) }));
  }
  app.get('/api/farm/vuon', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (!moTn(f, 'vuon')) return { mo: false, lv: h.MO_TN.vuon.lv };
      const bo = await gieoVuon(req.user, f);
      await h.ghi(me, f);
      return { mo: true, coBai: bo.coBai, toiDa: VUON_O, ds: vuonChoHs(f) };
    }));
  }));
  // "On ngay": 1 cau ve tu cua cay (dap an nhieu tu bo bai em hoc), may chu giu dap an
  app.post('/api/farm/vuon/cau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, i = Math.floor(Number(req.body && req.body.i));
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      const p = f.vuon && f.vuon.o && f.vuon.o[i];
      if (!p) throw loi('Không tìm thấy cây này.');
      const bo = await h.tuHocCua(req.user);
      const v = bo.tu.find((t) => t.zh === p.zh);
      if (!v || bo.tu.length < 4) throw loi('Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi nhé!');
      const kieu = Math.random() < 0.5 ? 'nghia' : 'chu';
      const q = h.taoCau(bo, v, kieu, 4, true);
      f.vuonQ = { i, zh: p.zh, q };
      await h.ghi(me, f);
      return { cau: { k: q.k, hoi: q.hoi, lua: q.lua } };
    }));
  }));
  app.post('/api/farm/vuon/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, chon = Math.floor(Number(req.body && req.body.chon));
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      const vq = f.vuonQ;
      if (!vq) throw loi('Câu hỏi đã hết — bấm Ôn ngay để lấy câu mới.');
      delete f.vuonQ;
      const p = f.vuon && f.vuon.o.find((x) => x.zh === vq.zh);
      const truoc = p ? p.gd : 0;
      const on = (f.on || {})[vq.zh];
      const denHan = !on || on[1] <= Date.now();
      const dung = chon === vq.q.dap;
      h.ghiOn(f, vq.zh, dung); // ghiOn cap nhat luon cay trong vuon (lon / heo)
      await h.ghi(me, f);
      return { ok: true, dung, dap: vq.q.dap, zh: vq.q.zh, py: vq.q.py, vn: vq.q.vn, denHan, lon: p ? p.gd - truoc : 0, gd: p ? p.gd : 0,
        hen: (f.on[vq.zh] || [0, 0])[1], ds: vuonChoHs(f) };
    }));
  }));
  app.post('/api/farm/vuon/thu', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, i = Math.floor(Number(req.body && req.body.i));
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      const p = f.vuon && f.vuon.o && f.vuon.o[i];
      if (!p) throw loi('Không tìm thấy cây này.');
      if (p.gd < 3) throw loi('Cây chưa nở hoa — ôn đúng từ này vào ngày đến hạn để cây lớn nhé.');
      f.vuon.o.splice(i, 1);
      f.vuon.da = f.vuon.da || {};
      f.vuon.da[p.zh] = Date.now();
      const qua = h.moQua(f, h.lvTuXp(f.xp), true);
      f.xp += 3;
      await h.ghi(me, f);
      return { ok: true, qua, zh: p.zh, py: p.py, vn: p.vn, st: await h.trangThai(me, f) };
    }));
  }));

  /* ======================= 6) CO THUONG ======================= */
  // Qua cho san: farm_chung 'cothuong:<uid>' = [{ id, loai, xu?, ly, oral?, t }]
  const LOAI_CO = { xu50: 'xu50', xu100: 'xu100', hat: 'hat', con: 'con' };
  async function themCo(uid, qua) {
    await c.khoaC('cothuong:' + uid, async () => {
      const ds = (await c.docC('cothuong:' + uid)) || [];
      if (qua.oral && ds.some((x) => x.oral === qua.oral)) return;
      ds.push(qua);
      await c.ghiC('cothuong:' + uid, ds.slice(-30));
    });
  }
  if (d.suKien) {
    d.suKien.on('mieng', (m) => {
      // chi khi ten trong danh sach lop da gan tai khoan (roster.userId) — khong doan theo ten
      if (!m || !m.userId || m.score == null || m.score < 9) return;
      themCo(m.userId, { id: 'o' + m.id, oral: m.id, loai: m.score >= 10 ? 'con' : 'hat', diem: m.score,
        ly: 'Cô thưởng vì em trả bài tốt (' + m.score + ' điểm)', t: Date.now() }).catch((e) => console.error('Co thuong:', e.message));
    });
    d.suKien.on('mieng-xoa', (oralId) => {
      // thay co hoan tac lan cham: rut qua chua nhan (khong biet uid -> tim trong cac danh sach dang cho)
      c.khoaC('cothuong:idx', async () => {
        const idx = (await c.docC('cothuong:idx')) || {};
        const uid = idx[oralId];
        if (!uid) return;
        await c.khoaC('cothuong:' + uid, async () => {
          const ds = (await c.docC('cothuong:' + uid)) || [];
          await c.ghiC('cothuong:' + uid, ds.filter((x) => x.oral !== oralId));
        });
        delete idx[oralId];
        await c.ghiC('cothuong:idx', idx);
      }).catch((e) => console.error('Co thuong (hoan tac):', e.message));
    });
    // ghi chi muc oral -> uid de hoan tac duoc
    d.suKien.on('mieng', (m) => {
      if (!m || !m.userId || m.score == null || m.score < 9) return;
      c.khoaC('cothuong:idx', async () => {
        const idx = (await c.docC('cothuong:idx')) || {};
        idx[m.id] = m.userId;
        const ks = Object.keys(idx);
        if (ks.length > 2000) ks.slice(0, ks.length - 2000).forEach((k) => { delete idx[k]; });
        await c.ghiC('cothuong:idx', idx);
      }).catch(() => {});
    });
  }
  // Hat giong quy: 3 hat cua loai cay dat nhat em trong duoc (gieo khong ton xu)
  function hatQuy(lv) {
    const ds = Object.keys(h.CAY).filter((k) => h.CAY[k].lv <= Math.max(1, lv)).sort((a, b) => h.CAY[b].ban - h.CAY[a].ban);
    return ds[0] || 'lua';
  }
  function conQuy(f, lv) {
    const ds = Object.keys(h.CON).filter((k) => h.CON[k].lv <= Math.max(1, lv) &&
      f.o.filter((o) => o.k === k).length + (f.tui[k] || 0) < h.CON_TOI_DA).sort((a, b) => h.CON[b].lv - h.CON[a].lv);
    return ds[0] || '';
  }
  function traQua(f, q) {
    const lv = h.lvTuXp(f.xp);
    if (q.loai === 'xu50' || q.loai === 'xu100') { f.xu += CO_XU[q.loai]; return { loai: 'xu', n: CO_XU[q.loai] }; }
    if (q.loai === 'con') {
      const k = conQuy(f, lv);
      if (k) { f.tui[k] = (f.tui[k] || 0) + 1; return { loai: 'con', k, n: 1 }; }
      f.xu += 100; return { loai: 'xu', n: 100 };
    }
    const k = hatQuy(lv);
    f.hat = f.hat || {};
    f.hat[k] = (f.hat[k] || 0) + 3;
    return { loai: 'hat', k, n: 3 };
  }
  // Em mo nong trai -> nhan het qua dang cho (moi qua hien 1 the)
  app.post('/api/farm/cothuong/nhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, () => c.khoaC('cothuong:' + me, async () => {
      const ds = (await c.docC('cothuong:' + me)) || [];
      if (!ds.length) return { ds: [] };
      const f = await h.doc(me);
      const ra = ds.map((q) => Object.assign({ ly: q.ly, diem: q.diem || 0 }, traQua(f, q)));
      ra.forEach((x) => h.ghiNk(f, { l: 'cothuong', loai: x.loai }));
      await h.ghi(me, f);
      await c.ghiC('cothuong:' + me, []);
      return { ds: ra, st: await h.trangThai(me, f) };
    })));
  }));
  // Thay co thuong tay (man Cham diem mieng): 1 em hoac ca lop
  const coLog = [];
  app.post('/api/admin/farm-thuong', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const b = req.body || {}, loai = LOAI_CO[String(b.loai || '')], classId = String(b.classId || ''), rosterId = String(b.rosterId || '');
    if (!loai) return res.status(400).json({ error: 'Chọn loại quà.' });
    const now = Date.now();
    while (coLog.length && now - coLog[0] > 3600000) coLog.shift();
    if (coLog.length >= 60) return res.status(429).json({ error: 'Thưởng nhiều quá trong 1 giờ — đợi một lúc nhé.' });
    const st = await d.loadClassState();
    const ro = st.roster.filter((r) => r.classId === classId && (rosterId === '*' || r.id === rosterId));
    if (!ro.length) return res.status(404).json({ error: 'Không tìm thấy học sinh trong lớp này.' });
    const coTk = ro.filter((r) => r.userId), lan = 'm' + now.toString(36);
    for (const r of coTk) {
      await themCo(r.userId, { id: lan + r.id, lan, loai, ly: String(b.ly || '').trim().slice(0, 80) || 'Cô thưởng cho em', t: now });
    }
    coLog.push(now);
    const log = (await c.docC('cothuong:log')) || [];
    log.unshift({ lan, t: now, classId, rosterId, loai, so: coTk.length });
    await c.ghiC('cothuong:log', log.slice(0, 100));
    res.json({ ok: true, lan, so: coTk.length, khongTk: ro.length - coTk.length });
  }));
  // Hoan tac 1 lan thuong tay (qua chua nhan thi rut lai)
  app.delete('/api/admin/farm-thuong/:lan', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const lan = String(req.params.lan || '');
    const log = (await c.docC('cothuong:log')) || [];
    const x = log.find((y) => y.lan === lan);
    if (!x) return res.status(404).json({ error: 'Không tìm thấy lần thưởng này.' });
    const st = await d.loadClassState();
    const ro = st.roster.filter((r) => r.classId === x.classId && (x.rosterId === '*' || r.id === x.rosterId) && r.userId);
    let rut = 0;
    for (const r of ro) {
      await c.khoaC('cothuong:' + r.userId, async () => {
        const ds = (await c.docC('cothuong:' + r.userId)) || [];
        const con = ds.filter((q) => q.lan !== lan);
        rut += ds.length - con.length;
        await c.ghiC('cothuong:' + r.userId, con);
      });
    }
    await c.ghiC('cothuong:log', log.filter((y) => y.lan !== lan));
    res.json({ ok: true, rut });
  }));

  /* ======================= 7) CAY CHAM CHI ======================= */
  // Ngay co hoc: co trong studyDays (dong bo tu trang hoc) hoac hom nay co sao.
  async function capNhatCay7(me, f) {
    const hom = d.vnDayKey();
    const [sc, sv] = await Promise.all([d.loadScoreOf(me), d.loadStar(me)]);
    const homNay = h.saoHoc(sv).homNay;
    const ngayHoc = new Set(((sc && sc.studyDays) || []).filter((x) => typeof x === 'string'));
    if (homNay > 0) ngayHoc.add(hom);
    const cy = f.cay7 = f.cay7 || { n: 0, d: ngayTruoc(hom), kh: '' };
    if (homNay >= h.KHIEN_SAO) cy.kh = hom; // ngay co khien bao ve
    let doi = false, rung = 0;
    // xet tung ngay tu sau lan xet truoc toi hom nay (hom nay chi cong khi da hoc, chua tinh la bo)
    let k = ngaySau(cy.d), lan = 0, daMat = false;
    while (k <= hom && lan < 60) {
      lan++;
      if (ngayHoc.has(k)) {
        if (!cy.chin) { cy.n = Math.min(7, cy.n + 1); if (cy.n >= 7) cy.chin = 1; }
        cy.d = k; doi = true; daMat = false;
      } else if (k < hom) {
        // bo 1 ngay: rung toi da 1 bong cho ca dot nghi; ngay truoc do co khien thi khong rung
        if (!daMat && !cy.chin && cy.n > 0 && cy.kh !== ngayTruoc(k)) { cy.n--; rung++; }
        daMat = true; cy.d = k; doi = true;
      } else break;
      k = ngaySau(k);
    }
    if (rung) cy.rung = hom;
    return doi || rung;
  }
  function cay7ChoHs(f) {
    const cy = f.cay7 || { n: 0 };
    return { n: cy.n || 0, chin: !!cy.chin, rung: cy.rung === d.vnDayKey(), hocHom: cy.d === d.vnDayKey() };
  }
  app.get('/api/farm/cay7', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      if (await capNhatCay7(me, f)) await h.ghi(me, f);
      return Object.assign({ xu: CAY7_XU }, cay7ChoHs(f));
    }));
  }));
  app.post('/api/farm/cay7/thu', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      await capNhatCay7(me, f);
      if (!f.cay7 || !f.cay7.chin) throw loi('Cây chưa có quả vàng — học mỗi ngày để cây nở đủ 7 bông nhé.');
      f.cay7.n = 0; delete f.cay7.chin;
      f.xu += CAY7_XU; f.xp += 5;
      const qua = h.moQua(f, h.lvTuXp(f.xp), true);
      h.ghiNk(f, { l: 'cay7' });
      await h.ghi(me, f);
      return { ok: true, xu: CAY7_XU, qua, cay7: cay7ChoHs(f), st: await h.trangThai(me, f) };
    }));
  }));

  // Ham dung chung cho trang thai nong trai / nha ban
  return { cay7ChoHs, vuonChoHs, _thu: { capNhatCay7, xetTran, bangTrai, cupTuanTruoc, traCup } };
};
