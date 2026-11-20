// Mua Noel — Thi dua "Thị trấn sáng nhất" 最亮的小镇 (2026-11-18).
//  - Bang xep hang cay thong thi tran: so mon trang tri ca lop da treo (KV 'noel:lop:<id>:<nam>' cua nong-trai-noel.js),
//    tat ca cac lop ke ca thi tran Tu Do 'tudo'. Hien trong bang cay thong thi tran (#ntNoelTt) va "🏙 Các thị trấn".
//  - Ngay 24/12 (gio VN, homNay() cua nong-trai-noel-thiep.js — NT_NOEL_NGAY de thu) may chu CHOT ket qua 1 lan:
//    KV 'noelvd:<nam>' { nam, ngay, ds: top 10, thang: [lop co nhieu mon nhat (dong hang thi cung thang)], ai: { lop: [em da treo >= 1 mon] } }.
//    Lop thang: danh hieu "Thị trấn sáng nhất <nam>" + khung ten vang (ten thi tran, nong trai cac ban) den het mua;
//    moi em cua lop thang da treo it nhat 1 mon nhan thuong 1 lan (f.noelVd = nam).
const Noel = require('./nong-trai-noel');
const Thiep = require('./nong-trai-noel-thiep');

const VD_XU = 120, VD_XP = 40;
const NGAY_CHOT = '12-24';
const NHO_MS = 15000; // bang xep hang tinh lai sau 15 giay

function gan(app, d, h, c) {
  const homNay = () => Thiep.homNay(d);
  const namNay = () => Noel.namMua(homNay());
  const ngayChot = (nam) => nam + '-' + NGAY_CHOT;
  let nho = null; // { luc, nam, ds }

  async function bangHienTai(nam) {
    if (nho && nho.nam === nam && Date.now() - nho.luc < NHO_MS) return nho.ds;
    const st = await d.loadClassState();
    const coNguoi = {};
    Object.keys(st.members).forEach((u) => { coNguoi[st.members[u].classId] = (coNguoi[st.members[u].classId] || 0) + 1; });
    const ds = await Promise.all(st.classes.filter((cl) => coNguoi[cl.id]).map(async (cl) => {
      const cay = await c.docC('noel:lop:' + cl.id + ':' + nam);
      const mon = (cay && Array.isArray(cay.ds)) ? cay.ds : [];
      const ai = {};
      mon.forEach((x) => { ai[x.ai] = 1; });
      return { id: cl.id, ten: cl.name, n: mon.length, ban: Object.keys(ai).length, cuoi: mon.length ? mon[mon.length - 1].t : 0, ai: Object.keys(ai), tuDo: !!cl.tuDo };
    }));
    // nhieu mon hon dung truoc; bang nhau thi lop dat moc som hon dung truoc
    ds.sort((a, b) => b.n - a.n || a.cuoi - b.cuoi || a.ten.localeCompare(b.ten, 'vi'));
    nho = { luc: Date.now(), nam, ds };
    return ds;
  }
  // Ket qua da chot (tu 24/12 cua mua nay; mua cu chot roi thi doc lai)
  async function ketQua(nam) {
    const k = 'noelvd:' + nam;
    const co = await c.docC(k);
    if (co) return co;
    if (homNay() < ngayChot(nam)) return null;
    return c.khoaC(k, async () => {
      const co2 = await c.docC(k);
      if (co2) return co2;
      nho = null;
      const ds = await bangHienTai(nam);
      const max = ds.length ? ds[0].n : 0;
      const thang = max > 0 ? ds.filter((x) => x.n === max).map((x) => x.id) : [];
      const ai = {};
      thang.forEach((id) => { ai[id] = (ds.find((x) => x.id === id) || {}).ai || []; });
      const kq = { nam, ngay: homNay(), luc: Date.now(), ds: ds.slice(0, 10).map((x) => ({ id: x.id, ten: x.ten, n: x.n, ban: x.ban })), thang, ai };
      await c.ghiC(k, kq);
      return kq;
    });
  }

  app.get('/api/farm/noel/sangnhat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, nam = namNay();
    const [st, f] = await Promise.all([d.loadClassState(), h.doc(me)]);
    const lop = st.members[me] ? st.members[me].classId : '';
    const kq = await ketQua(nam);
    const ds = kq ? kq.ds : (await bangHienTai(nam)).slice(0, 30).map((x) => ({ id: x.id, ten: x.ten, n: x.n, ban: x.ban }));
    const thang = kq ? kq.thang : [];
    let em = null;
    if (lop) {
      const hang = ds.findIndex((x) => x.id === lop);
      const duoc = !!(kq && thang.indexOf(lop) >= 0 && (kq.ai[lop] || []).indexOf(me) >= 0);
      em = { lop, hang: hang >= 0 ? hang + 1 : 0, thang: thang.indexOf(lop) >= 0, duoc, da: f.noelVd === nam, xu: VD_XU, xp: VD_XP };
      if (!kq) { const x = (await bangHienTai(nam)).find((y) => y.id === lop); em.n = x ? x.n : 0; em.treo = !!(x && x.ai.indexOf(me) >= 0); }
    }
    // mua da qua: khong con hien danh hieu (chi giu ket qua trong KV)
    res.json({ mua: Noel.trongMua(homNay()), nam, chot: ngayChot(nam), daChot: !!kq, ngay: homNay(),
      ds: ds.map((x, i) => Object.assign({ hang: i + 1, la: x.id === lop, thang: thang.indexOf(x.id) >= 0 }, x)), thang, em });
  }));

  app.post('/api/farm/noel/sangnhat/nhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, nam = namNay();
    await h.traLoi(res, (async () => {
      const kq = await ketQua(nam);
      if (!kq) throw h.loi('Chưa chốt kết quả — ngày 24/12 mới biết thị trấn nào sáng nhất nhé!');
      const st = await d.loadClassState();
      const lop = st.members[me] ? st.members[me].classId : '';
      if (!lop || kq.thang.indexOf(lop) < 0) throw h.loi('Thị trấn của em chưa phải sáng nhất năm nay — mùa sau cố lên nhé!');
      if ((kq.ai[lop] || []).indexOf(me) < 0) throw h.loi('Phần thưởng dành cho bạn đã treo ít nhất 1 món lên cây thông thị trấn.');
      return h.lanLuot(me, async () => {
        const f = await h.doc(me);
        if (f.noelVd === nam) throw h.loi('Em đã nhận thưởng rồi.');
        f.noelVd = nam;
        f.xu = (f.xu || 0) + VD_XU;
        f.xp = (f.xp || 0) + VD_XP;
        h.ghiNk(f, { l: 'noelvd', nam, xu: VD_XU });
        await h.ghi(me, f);
        return { ok: true, xu: VD_XU, xp: VD_XP, st: await h.trangThai(me, f) };
      });
    })());
  }));
}

module.exports = { gan };
