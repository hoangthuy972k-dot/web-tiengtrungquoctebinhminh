// Hoi cho nong san tuan 农产品博览会 (2026-11-23).
// Moi thi tran (lop that, hoac thi tran ao 'tudo' cua em chua vao lop) co 1 hoi cho moi tuan:
//   Thu Hai 00:00 -> Thu Bay 23:59 (gio VN): moi em gui toi da 2 mon KHAC NHAU tu kho (mon roi kho, nam o gian hang);
//     moi mon kem 1 cau gioi thieu tieng Trung em tu XEP tu cac the chu (mau cau co dinh + tinh tu hop voi mon).
//     Trong thoi gian nay em rut lai duoc (tra mon ve kho).
//   Chu nhat 00:00 -> 20:00: ca thi tran binh chon — moi em 3 phieu / tuan, moi gian toi da 1 phieu, khong tu bau cho minh.
//   Chu nhat 20:00: cong bo ket qua (tinh 1 lan, luu lai). Diem = giam khao (do hiem / chat luong / gia / loi gioi thieu)
//     + 8 x so phieu. Moi em toi da 1 giai (gian cao nhat cua em). So giai = min(3, so em tham gia - 1).
//   Sau ket qua: moi em tu bam "Nhan" — TAT CA mon du thi tra ve kho (ca em doat giai), cong them thuong:
//     🥇 80 xu + 1 hat giong quy + Cup vang hoi cho 金奖杯; 🥈 50 xu + 1 hat quy + Huy chuong bac 银奖牌; 🥉 30 xu + Huy chuong dong 铜奖牌;
//     moi em tham gia +3 kinh nghiem. Nhan 1 lan (danh dau trong nong trai em, trong khoa cua em -> nhieu request cung chi 1 lan).
// Du lieu chung: farm_chung khoa 'hc:<lopId>:<tuan>' = { ds: [gian], nid, bau: { uid: [id gian] }, kq }.
// Du lieu rieng: f.hc = { ve: { <tuan>: <lopId> } (tuan con mon / thuong chua nhan), ls: [lich su giai] }.
const LOAI = {
  cay: { vn: 'Nông sản', d: 10 },
  con: { vn: 'Sản phẩm vật nuôi', d: 14 },
  ca: { vn: 'Cá câu', d: 6 }, // + 3 x bac ca
  gc: { vn: 'Hàng chế biến', d: 18 },
  mon: { vn: 'Món ăn', d: 18 },
  quy: { vn: 'Cây quý 珍稀', d: 22 },
  lai: { vn: 'Giống lai 杂交', d: 26 },
  db: { vn: 'Đột biến 突变', d: 0 }, // theo bac dot bien
  khac: { vn: 'Hàng khác', d: 8 },
};
const DB_DIEM = { 1: 30, 2: 40, 3: 52 }, DB_THEM_QUY = 8;
const GIA_TOI_DA = 15, PHIEU_DIEM = 8, GUI_TOI_DA = 2, PHIEU_TUAN = 3;
const GT_DIEM = { 2: 6, 1: 4 }; // loi gioi thieu 2 tinh tu (又…又…) / 1 tinh tu
const GIAI = [
  { hang: 1, xu: 80, hatQuy: 1, tt: 'hoicho-cup', xp: 12 },
  { hang: 2, xu: 50, hatQuy: 1, tt: 'hoicho-bac', xp: 8 },
  { hang: 3, xu: 30, hatQuy: 0, tt: 'hoicho-dong', xp: 5 },
];
const XP_THAM_GIA = 3;
const TT_HC = {
  'hoicho-cup': { zh: '金奖杯', py: 'jīn jiǎngbēi', vn: 'Cúp vàng hội chợ', lv: 1, doc: 1, dep: 28 },
  'hoicho-bac': { zh: '银奖牌', py: 'yín jiǎngpái', vn: 'Huy chương bạc hội chợ', lv: 1, doc: 1, dep: 20 },
  'hoicho-dong': { zh: '铜奖牌', py: 'tóng jiǎngpái', vn: 'Huy chương đồng hội chợ', lv: 1, doc: 1, dep: 14 },
};

// Tinh tu dung trong loi gioi thieu (noi dung co dinh cua tinh nang: chu Han chuan + pinyin + nghia)
const TU = {
  da: { zh: '大', py: 'dà', vn: 'to' },
  xinxian: { zh: '新鲜', py: 'xīnxiān', vn: 'tươi' },
  tian: { zh: '甜', py: 'tián', vn: 'ngọt' },
  xiang: { zh: '香', py: 'xiāng', vn: 'thơm' },
  haochi: { zh: '好吃', py: 'hǎochī', vn: 'ngon' },
  haohe: { zh: '好喝', py: 'hǎohē', vn: 'ngon (đồ uống)' },
  piaoliang: { zh: '漂亮', py: 'piàoliang', vn: 'đẹp' },
  keai: { zh: '可爱', py: 'kě\'ài', vn: 'đáng yêu' },
  ruan: { zh: '软', py: 'ruǎn', vn: 'mềm' },
  zhengui: { zh: '珍贵', py: 'zhēnguì', vn: 'quý' },
};
// Mau cau: {X} = ten mon, {A}/{B} = tinh tu. Dau cau (，！) tu them theo mau — em chi xep the chu.
const MAU = [
  { k: 'yy', so: 2, vn: '{X} của em vừa {A} vừa {B}!', tok: ['我的', '{X}', '又', '{A}', '又', '{B}'], dau: { 5: '！' } },
  { k: 'kk', so: 1, vn: 'Mọi người đến xem {X} của em nè — rất {A}!', tok: ['大家', '来', '看看', '我的', '{X}', '非常', '{A}'], dau: { 4: '，', 6: '！' } },
  { k: 'zs', so: 1, vn: 'Đây là {X} của em, {A} thật đấy!', tok: ['这', '是', '我的', '{X}', '真', '{A}', '啊'], dau: { 3: '，', 6: '！' } },
];
const MAU_MAP = {};
MAU.forEach((m) => { MAU_MAP[m.k] = m; });
const PY_TOK = { '我的': 'wǒ de', '又': 'yòu', '大家': 'dàjiā', '来': 'lái', '看看': 'kànkan', '非常': 'fēicháng', '这': 'zhè', '是': 'shì', '真': 'zhēn', '啊': 'a' };
const VN_TOK = { '我的': 'của em', '又': 'vừa…', '大家': 'mọi người', '来': 'đến', '看看': 'xem thử', '非常': 'rất', '这': 'đây', '是': 'là', '真': 'thật', '啊': '(cảm thán)' };

// Tinh tu hop voi tung mon
const NGOT = ['dautay', 'duahau', 'nho', 'lizhi', 'hongzao', 'bido', 'ngo', 'carot'];
const HOA = ['huongduong', 'mudan'];
const TU_SP = {
  trung: ['da', 'xinxian'], trungvit: ['da', 'xinxian'], sua: ['xinxian', 'haohe', 'xiang'], maoniunai: ['xinxian', 'haohe', 'xiang'],
  len: ['ruan', 'piaoliang'], canjian: ['ruan', 'piaoliang'], mat: ['tian', 'xiang', 'haochi'], songlu: ['xiang', 'zhengui', 'haochi'],
  menpiao: ['piaoliang', 'zhengui'], jinianpin: ['piaoliang', 'zhengui'], kongdan: ['da', 'zhengui', 'piaoliang'],
  gaubong: ['keai', 'ruan', 'piaoliang'], kongqueyu: ['piaoliang', 'zhengui', 'ruan'],
  mifen: ['xinxian', 'xiang'], yumimian: ['xinxian', 'xiang'], nailao: ['xiang', 'haochi'], suannai: ['tian', 'haohe'],
  caomeizhi: ['tian', 'haohe', 'xinxian'], putaozhi: ['tian', 'haohe', 'xinxian'], fanqiezhi: ['xinxian', 'haohe'],
  chaye: ['xiang', 'zhengui'], suyoucha: ['xiang', 'haohe'], huacha: ['xiang', 'haohe'],
  sichou: ['piaoliang', 'ruan', 'zhengui'], sijin: ['piaoliang', 'ruan', 'zhengui'], maoyi: ['ruan', 'piaoliang'],
  yaoshikou: ['keai', 'ruan', 'piaoliang'], baozhen: ['keai', 'ruan', 'piaoliang'], gongzai: ['keai', 'ruan', 'da'],
  'xigua-zhi': ['tian', 'haohe', 'xiang'], 'nuoc-carot': ['tian', 'haohe', 'xinxian'], 'sua-mat': ['tian', 'haohe', 'xiang'],
};
['mianbao', 'binggan', 'dangao', 'zaogao', 'yuebing', 'zongzi', 'tangyuan'].forEach((k) => { TU_SP[k] = ['xiang', 'tian', 'haochi']; });
const MON_NGOT = ['banh-dau', 'shuiguo', 'konglong-gao', 'suannai-bei'];

const VN_MS = 7 * 3600000, NGAY_MS = 86400000;

function gan(app, d, h, chung) {
  const loi = h.loi, SP = h.SP, CAY = h.CAY, CON = h.CON;
  Object.keys(TT_HC).forEach((k) => { if (!h.TT[k]) h.TT[k] = TT_HC[k]; });
  const SP_CON = {};
  Object.keys(CON).forEach((k) => { SP_CON[CON[k].sp] = 1; });

  // gio "bay gio" cua hoi cho (NT_THU=1: dat lech gio de thu cac moc trong tuan)
  let lech = 0;
  const bayGio = () => Date.now() + lech;
  const tuanCua = (ms) => d.vnWeekKey(ms);
  const dauTuan = (w) => Date.parse(w + 'T00:00:00Z') - VN_MS;
  const moc = (w) => { const a = dauTuan(w); return { bd: a, bau: a + 6 * NGAY_MS, kq: a + 6 * NGAY_MS + 20 * 3600000, het: a + 7 * NGAY_MS }; };
  function pha(w, t) {
    const m = moc(w);
    t = t == null ? bayGio() : t;
    return t < m.bau ? 'gui' : t < m.kq ? 'bau' : 'xong';
  }
  const tuanTruoc = (w) => new Date(Date.parse(w + 'T00:00:00Z') - 7 * NGAY_MS).toISOString().slice(0, 10);
  const khoaKv = (lopId, w) => 'hc:' + lopId + ':' + w;
  const docHc = async (lopId, w) => (await chung.docC(khoaKv(lopId, w))) || { ds: [], nid: 1, bau: {}, kq: null };
  const tenAn = (t) => { const p = String(t || '').trim().split(/\s+/).filter(Boolean); return p.length < 2 ? String(t || 'Một bạn') : p[p.length - 1] + ' ' + p[0].charAt(0).toUpperCase() + '.'; };
  const hc = (f) => { f.hc = f.hc || {}; f.hc.ve = f.hc.ve || {}; f.hc.ls = f.hc.ls || []; return f.hc; };

  // ---- phan loai + diem giam khao ----
  function loaiCua(k) {
    const sp = SP[k];
    if (!sp || sp.nl) return null;
    if (sp.db) return 'db';
    const c = CAY[k];
    if (c) return c.lai ? 'lai' : c.hiem ? 'quy' : 'cay';
    if (sp.gc) return 'gc';
    if (sp.mon) return 'mon';
    if (sp.ca) return 'ca';
    if (SP_CON[k]) return 'con';
    return 'khac';
  }
  function tuCua(k) {
    const sp = SP[k];
    if (!sp) return [];
    if (TU_SP[k]) return TU_SP[k].slice();
    let ds;
    if (sp.db) {
      ds = tuCua(sp.goc).filter((x) => x !== 'zhengui');
      if (sp.db === 1 && ds.indexOf('da') < 0) ds.unshift('da');
      ds.push('zhengui');
      return ds.slice(0, 5);
    }
    const c = CAY[k];
    if (c && c.lai) {
      ds = [];
      (c.cha || []).forEach((p) => tuCua(p).forEach((x) => { if (ds.indexOf(x) < 0 && x !== 'zhengui') ds.push(x); }));
      ds.push('zhengui');
      return ds.slice(0, 5);
    }
    if (c && c.hiem) return ['da', 'zhengui', 'xinxian'];
    if (c) return NGOT.indexOf(k) >= 0 ? ['da', 'xinxian', 'tian', 'haochi', 'piaoliang'] : HOA.indexOf(k) >= 0 ? ['da', 'piaoliang', 'xiang'] : k === 'cha' ? ['xinxian', 'xiang', 'piaoliang'] : ['da', 'xinxian', 'haochi', 'piaoliang'];
    if (sp.mon) return MON_NGOT.indexOf(k) >= 0 ? ['xiang', 'tian', 'haochi'] : ['xiang', 'haochi'];
    if (sp.ca) return sp.ca >= 4 ? ['da', 'xinxian', 'piaoliang', 'zhengui'] : ['da', 'xinxian', 'piaoliang'];
    return ['piaoliang', 'zhengui'];
  }
  // diem giam khao: loai (do hiem) + gia tri + loi gioi thieu
  function chamGk(k, soTu) {
    const loai = loaiCua(k);
    if (!loai) return null;
    const sp = SP[k];
    let goc = LOAI[loai].d;
    if (loai === 'db') {
      goc = DB_DIEM[sp.db] || 30;
      const cg = CAY[sp.goc];
      if (cg && (cg.lai || cg.hiem)) goc += DB_THEM_QUY;
    } else if (loai === 'ca') goc += 3 * (sp.ca || 1);
    const gia = Math.max(0, Math.min(GIA_TOI_DA, Math.round(2 * Math.log2(Math.max(1, sp.ban || 1)))));
    const gt = soTu ? GT_DIEM[soTu] || 0 : 0;
    return { loai, goc, gia, gt, gk: goc + gia + gt };
  }

  // ---- loi gioi thieu: dung the chu, kiem tra thu tu ----
  function chonTu(k, mau, tt) {
    const m = MAU_MAP[mau];
    if (!m) throw loi('Chọn một mẫu câu giới thiệu nhé.');
    tt = Array.isArray(tt) ? tt.map(String) : [];
    const duoc = tuCua(k);
    if (tt.length !== m.so || new Set(tt).size !== tt.length || tt.some((x) => duoc.indexOf(x) < 0 || !TU[x])) {
      throw loi(m.so === 2 ? 'Chọn 2 tính từ khác nhau hợp với món này.' : 'Chọn 1 tính từ hợp với món này.');
    }
    return { m, tt };
  }
  const dien = (m, k, tt) => m.tok.map((t) => (t === '{X}' ? SP[k].zh : t === '{A}' ? TU[tt[0]].zh : t === '{B}' ? TU[tt[1]].zh : t));
  const pyTok = (t, k) => (PY_TOK[t] || (Object.keys(TU).find((x) => TU[x].zh === t) ? TU[Object.keys(TU).find((x) => TU[x].zh === t)].py : t === SP[k].zh ? SP[k].py : ''));
  function cauHoanChinh(m, k, tt) {
    const ds = dien(m, k, tt);
    const zh = ds.map((t, i) => t + (m.dau[i] || '')).join('');
    let py = ds.map((t, i) => pyTok(t, k) + (m.dau[i] ? (m.dau[i] === '，' ? ',' : '!') : '')).join(' ');
    py = py.charAt(0).toUpperCase() + py.slice(1);
    const tenVn = String(SP[k].vn || '');
    let vn = m.vn.replace('{A}', TU[tt[0]].vn.replace(/ \(.*\)$/, '')).replace('{B}', tt[1] ? TU[tt[1]].vn.replace(/ \(.*\)$/, '') : '');
    vn = m.vn.indexOf('{X}') === 0 ? vn.replace('{X}', tenVn) : vn.replace('{X}', tenVn.charAt(0).toLowerCase() + tenVn.slice(1));
    return { zh, py, vn };
  }
  // tra ve thu tu tinh tu em da xep (又A又B = 又B又A deu dung), sai thi null
  function dungThuTu(m, k, tt, xep) {
    if (!Array.isArray(xep)) return null;
    const thu = (a) => { const ds = dien(m, k, a); return ds.length === xep.length && ds.every((t, i) => t === String(xep[i])); };
    if (thu(tt)) return tt;
    if (tt.length === 2 && thu([tt[1], tt[0]])) return [tt[1], tt[0]];
    return null;
  }
  const tron = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ---- thi tran cua em / lop dang xem ----
  async function thiTranCua(me) {
    const lop = await h.banCungLop(me);
    return lop ? { id: lop.id, ten: lop.ten, ids: lop.ids, tuDo: lop.id === 'tudo' } : null;
  }
  async function thiTranId(id) {
    const st = await d.loadClassState();
    const cls = st.classes.find((c) => c.id === id);
    if (!cls) return null;
    return { id, ten: cls.name, ids: Object.keys(st.members).filter((u) => st.members[u].classId === id), tuDo: id === 'tudo' };
  }

  // ---- ket qua (tinh 1 lan sau CN 20:00, luu trong ban ghi chung) ----
  function xepHang(x) {
    const phieu = {};
    Object.keys(x.bau || {}).forEach((u) => (x.bau[u] || []).forEach((id) => { phieu[id] = (phieu[id] || 0) + 1; }));
    const ds = x.ds.map((g) => ({ id: g.id, u: g.u, gk: g.gk, ph: phieu[g.id] || 0, t: g.t }));
    ds.forEach((g) => { g.tong = g.gk + PHIEU_DIEM * g.ph; });
    ds.sort((a, b) => b.tong - a.tong || b.ph - a.ph || a.t - b.t);
    const soNguoi = new Set(ds.map((g) => g.u)).size;
    const soGiai = Math.max(0, Math.min(GIAI.length, soNguoi - 1));
    const daCo = new Set(), giai = [];
    ds.forEach((g, i) => {
      g.thu = i + 1;
      if (giai.length < soGiai && !daCo.has(g.u)) { daCo.add(g.u); g.hang = giai.length + 1; giai.push({ id: g.id, u: g.u, hang: g.hang, tong: g.tong }); }
    });
    return { t: Date.now(), soNguoi, soGiai, ds: ds.map((g) => ({ id: g.id, ph: g.ph, tong: g.tong, thu: g.thu, hang: g.hang || 0 })), giai };
  }
  async function ketQua(lopId, w) {
    if (pha(w) !== 'xong') return null;
    const k = khoaKv(lopId, w);
    const co = await chung.docC(k);
    if (!co || !co.ds || !co.ds.length) return co ? co.kq || null : null;
    if (co.kq) return co.kq;
    return chung.khoaC(k, async () => {
      const x = (await chung.docC(k)) || { ds: [], nid: 1, bau: {}, kq: null };
      if (x.kq) return x.kq;
      x.kq = xepHang(x);
      await chung.ghiC(k, x);
      return x.kq;
    });
  }

  // ---- tom tat gui client ----
  function tenHien(id, me, ten, xemThat) { if (id === me) return 'Em'; return xemThat ? ten[id] || 'Một bạn' : tenAn(ten[id]); }
  function tomGian(g, me, ten, xemThat, kq, x, ph) {
    const sp = SP[g.k] || { zh: g.k, py: '', vn: g.k };
    const r = kq && kq.ds.find((y) => y.id === g.id);
    const out = {
      id: g.id, k: g.k, zh: sp.zh, py: sp.py, vn: sp.vn, db: sp.db || 0, ten: tenHien(g.u, me, ten, xemThat), la: g.u === me,
      cau: g.cau, cauPy: g.py, cauVn: g.vn, gk: g.gk, ct: g.ct, loai: g.ct ? LOAI[g.ct.loai].vn : '',
      daBau: !!(x.bau[me] || []).some((id) => id === g.id),
    };
    if (r) Object.assign(out, { ph: r.ph, tong: r.tong, thu: r.thu, hang: r.hang });
    else if (ph) out.ph = null; // dang binh chon: an so phieu cho toi khi cong bo
    return out;
  }
  async function trangThaiHc(me, lop, cuaEm, f) {
    const now = bayGio(), w = tuanCua(now), p = pha(w, now), mc = moc(w);
    const [x, ten] = await Promise.all([docHc(lop.id, w), d.loadUserNames()]);
    const xemThat = cuaEm && !lop.tuDo;
    const kq = p === 'xong' ? await ketQua(lop.id, w) : null;
    const wt = tuanTruoc(w);
    const kqTruoc = await ketQua(lop.id, wt);
    let truoc = null;
    if (kqTruoc && kqTruoc.giai.length) {
      const xt = await docHc(lop.id, wt);
      truoc = { tuan: wt, soNguoi: kqTruoc.soNguoi, giai: kqTruoc.giai.map((gg) => { const g = xt.ds.find((y) => y.id === gg.id) || {}; const sp = SP[g.k] || {}; return { hang: gg.hang, tong: gg.tong, k: g.k, zh: sp.zh, py: sp.py, vn: sp.vn, ten: tenHien(gg.u, me, ten, xemThat), la: gg.u === me }; }) };
    }
    const daBau = cuaEm ? (x.bau[me] || []).length : 0;
    const out = {
      lop: { id: lop.id, ten: lop.ten, tuDo: lop.tuDo, cuaEm }, tuan: w, pha: p, now, moc: mc,
      soNguoi: new Set(x.ds.map((g) => g.u)).size,
      ds: x.ds.slice().sort((a, b) => b.t - a.t).map((g) => tomGian(g, me, ten, xemThat, kq, x, p === 'bau')).sort((a, b) => (kq ? a.thu - b.thu : 0)),
      kq: kq ? { soNguoi: kq.soNguoi, soGiai: kq.soGiai } : null, truoc,
      luat: { guiToiDa: GUI_TOI_DA, phieuTuan: PHIEU_TUAN, phieuDiem: PHIEU_DIEM, giaToiDa: GIA_TOI_DA, gtDiem: GT_DIEM, dbDiem: DB_DIEM, dbThem: DB_THEM_QUY, loai: LOAI, giai: GIAI.map((g) => Object.assign({}, g, { ttZh: TT_HC[g.tt].zh, ttPy: TT_HC[g.tt].py, ttVn: TT_HC[g.tt].vn })), xpThamGia: XP_THAM_GIA },
    };
    if (cuaEm && f) {
      const cuaToi = x.ds.filter((g) => g.u === me);
      out.em = {
        soGui: cuaToi.length, conPhieu: Math.max(0, PHIEU_TUAN - daBau),
        mon: Object.keys(f.kho || {}).filter((k) => f.kho[k] > 0 && loaiCua(k) && cuaToi.every((g) => g.k !== k)).map((k) => {
          const c = chamGk(k, 0);
          return { k, n: f.kho[k], loai: c.loai, loaiVn: LOAI[c.loai].vn, goc: c.goc, gia: c.gia, tu: tuCua(k) };
        }).sort((a, b) => (b.goc + b.gia) - (a.goc + a.gia)),
      };
      out.tu = TU;
      out.mau = MAU.map((m) => ({ k: m.k, so: m.so, vn: m.vn }));
      out.chuaNhan = choNhan(f).map((y) => y.w);
      out.ls = hc(f).ls.slice(0, 8);
    }
    return out;
  }
  // tuan da co ket qua ma em con mon / thuong chua nhan
  function choNhan(f) {
    const ve = (f.hc && f.hc.ve) || {};
    return Object.keys(ve).filter((w) => pha(w) === 'xong').map((w) => ({ w, lop: ve[w] }));
  }
  h.ttThem.push((userId, f) => ({ hc: { nhan: choNhan(f).length } }));

  app.get('/api/farm/hoicho', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, muon = String(req.query.lop || '');
    const lopEm = await thiTranCua(me);
    let lop = lopEm;
    if (muon && (!lopEm || lopEm.id !== muon)) {
      lop = await thiTranId(muon);
      if (!lop) return res.status(404).json({ error: 'Không tìm thấy thị trấn này.' });
    }
    if (!lop) return res.json({ lop: null });
    const cuaEm = !!(lopEm && lopEm.id === lop.id);
    res.json(await trangThaiHc(me, lop, cuaEm, await h.doc(me)));
  }));

  // Buoc 1: lay cac the chu (xao tron) de em xep loi gioi thieu
  app.post('/api/farm/hoicho/ghep', d.requireAuth, d.asyncRoute(async (req, res) => {
    const b = req.body || {}, k = String(b.k || '');
    await h.traLoi(res, (async () => {
      if (!loaiCua(k)) throw loi('Món này không gửi dự thi được.');
      const { m, tt } = chonTu(k, String(b.mau || ''), b.tt);
      const ds = dien(m, k, tt);
      let o = tron(ds);
      for (let i = 0; i < 5 && o.join('|') === ds.join('|'); i++) o = tron(ds);
      const c = cauHoanChinh(m, k, tt);
      return { ok: true, vn: c.vn, o: o.map((t) => ({ zh: t, py: pyTok(t, k), vn: VN_TOK[t] || (t === SP[k].zh ? SP[k].vn : (TU[Object.keys(TU).find((x) => TU[x].zh === t)] || {}).vn || '') })) };
    })());
  }));

  // Buoc 2: gui mon du thi (kiem tra thu tu the chu, gioi han 2 mon / tuan, chi trong T2–T7)
  app.post('/api/farm/hoicho/gui', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, k = String(b.k || '');
    const lop = await thiTranCua(me);
    await h.traLoi(res, h.lanLuot(me, async () => {
      if (!lop) throw loi('Em chưa có thị trấn nào.');
      const w = tuanCua(bayGio());
      if (pha(w) !== 'gui') throw loi('Hội chợ chỉ nhận đồ dự thi từ thứ Hai đến hết thứ Bảy.');
      if (!loaiCua(k)) throw loi('Món này không gửi dự thi được.');
      const { m, tt: chon } = chonTu(k, String(b.mau || ''), b.tt);
      const tt = dungThuTu(m, k, chon, b.xep);
      if (!tt) throw loi('Câu chưa đúng thứ tự — đọc lại nghĩa tiếng Việt rồi xếp lại nhé!');
      const f = await h.doc(me);
      if (!((f.kho || {})[k] > 0)) throw loi('Trong kho không còn ' + String(SP[k].vn).toLowerCase() + '.');
      const kk = khoaKv(lop.id, w);
      const c = chamGk(k, m.so), cau = cauHoanChinh(m, k, tt);
      const g = await chung.khoaC(kk, async () => {
        const x = await docHc(lop.id, w);
        const cuaToi = x.ds.filter((y) => y.u === me);
        if (cuaToi.length >= GUI_TOI_DA) throw loi('Mỗi tuần em gửi tối đa ' + GUI_TOI_DA + ' món.');
        if (cuaToi.some((y) => y.k === k)) throw loi('Em đã gửi món này rồi — chọn món khác nhé.');
        const moi = { id: x.nid || 1, u: me, k, mau: m.k, tt, cau: cau.zh, py: cau.py, vn: cau.vn, gk: c.gk, ct: { loai: c.loai, goc: c.goc, gia: c.gia, gt: c.gt }, t: bayGio() };
        x.nid = moi.id + 1;
        x.ds.push(moi);
        await chung.ghiC(kk, x);
        return moi;
      });
      f.kho[k]--;
      if (!f.kho[k]) delete f.kho[k];
      hc(f).ve[w] = lop.id;
      await h.ghi(me, f);
      return { ok: true, gian: { id: g.id, k, cau: g.cau, py: g.py, vn: g.vn, gk: g.gk, ct: g.ct }, st: await h.trangThai(me, f) };
    }));
  }));

  // Rut mon ve kho (chi T2–T7)
  app.post('/api/farm/hoicho/rut', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = Math.floor(Number((req.body || {}).id));
    const lop = await thiTranCua(me);
    await h.traLoi(res, h.lanLuot(me, async () => {
      if (!lop) throw loi('Em chưa có thị trấn nào.');
      const w = tuanCua(bayGio());
      if (pha(w) !== 'gui') throw loi('Đã hết hạn rút đồ — đồ sẽ được trả lại sau khi công bố kết quả.');
      const f = await h.doc(me);
      const kk = khoaKv(lop.id, w);
      const r = await chung.khoaC(kk, async () => {
        const x = await docHc(lop.id, w);
        const g = x.ds.find((y) => y.id === id && y.u === me);
        if (!g) throw loi('Không tìm thấy gian hàng này.');
        x.ds = x.ds.filter((y) => y !== g);
        await chung.ghiC(kk, x);
        return { k: g.k, con: x.ds.some((y) => y.u === me) };
      });
      f.kho[r.k] = (f.kho[r.k] || 0) + 1;
      if (!r.con && hc(f).ve[w] === lop.id) delete f.hc.ve[w];
      await h.ghi(me, f);
      return { ok: true, k: r.k, st: await h.trangThai(me, f) };
    }));
  }));

  // Binh chon (CN 00:00–20:00): 3 phieu / tuan, moi gian 1 phieu, khong bau cho minh, chi thi tran cua em
  app.post('/api/farm/hoicho/bau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = Math.floor(Number((req.body || {}).id));
    const lop = await thiTranCua(me);
    await h.traLoi(res, (async () => {
      if (!lop) throw loi('Em chưa có thị trấn nào.');
      const w = tuanCua(bayGio());
      if (pha(w) !== 'bau') throw loi('Bình chọn mở vào Chủ nhật, từ 0 giờ đến 20 giờ.');
      const kk = khoaKv(lop.id, w);
      return chung.khoaC(kk, async () => {
        const x = await docHc(lop.id, w);
        const g = x.ds.find((y) => y.id === id);
        if (!g) throw loi('Không tìm thấy gian hàng này.');
        if (g.u === me) throw loi('Không tự bình chọn cho gian của mình nhé!');
        x.bau = x.bau || {};
        const da = x.bau[me] || [];
        if (da.indexOf(id) >= 0) throw loi('Em đã bình chọn gian này rồi.');
        if (da.length >= PHIEU_TUAN) throw loi('Em đã dùng hết ' + PHIEU_TUAN + ' phiếu tuần này.');
        x.bau[me] = da.concat([id]);
        await chung.ghiC(kk, x);
        return { ok: true, conPhieu: PHIEU_TUAN - x.bau[me].length };
      });
    })());
  }));

  // Nhan lai do + thuong cac tuan da co ket qua (idempotent: xoa f.hc.ve[tuan] trong cung lan ghi, trong khoa cua em)
  app.post('/api/farm/hoicho/nhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x0 = hc(f);
      const cho = choNhan(f);
      if (!cho.length) throw loi('Em không còn đồ hay phần thưởng hội chợ nào để nhận.');
      const ket = [];
      for (const { w, lop } of cho) {
        const kq = await ketQua(lop, w);
        const x = await docHc(lop, w);
        const cuaToi = x.ds.filter((g) => g.u === me);
        const tra = {};
        cuaToi.forEach((g) => { f.kho[g.k] = (f.kho[g.k] || 0) + 1; tra[g.k] = (tra[g.k] || 0) + 1; });
        const e = { tuan: w, tra: Object.keys(tra).map((k) => ({ k, n: tra[k], zh: SP[k] ? SP[k].zh : k, vn: SP[k] ? SP[k].vn : k })), xp: cuaToi.length ? XP_THAM_GIA : 0, xu: 0 };
        const gg = kq && kq.giai.find((y) => y.u === me);
        if (gg) {
          const gi = GIAI[gg.hang - 1], g = cuaToi.find((y) => y.id === gg.id) || {};
          f.xu += gi.xu; e.xu = gi.xu;
          e.xp += gi.xp;
          f.tui = f.tui || {}; f.tui[gi.tt] = (f.tui[gi.tt] || 0) + 1; e.tt = gi.tt; e.ttZh = TT_HC[gi.tt].zh; e.ttVn = TT_HC[gi.tt].vn;
          if (gi.hatQuy && h.CAY_HIEM.length) {
            const hk = h.CAY_HIEM[Math.floor(Math.random() * h.CAY_HIEM.length)];
            f.hat = f.hat || {}; f.hat[hk] = (f.hat[hk] || 0) + gi.hatQuy;
            e.hat = { k: hk, n: gi.hatQuy, zh: CAY[hk].zh, vn: CAY[hk].vn };
          }
          e.hang = gg.hang; e.k = g.k; e.tong = gg.tong;
          x0.ls.unshift({ tuan: w, hang: gg.hang, k: g.k, tong: gg.tong });
          x0.ls = x0.ls.slice(0, 20);
          h.ghiNk(f, { l: 'hoicho', hang: gg.hang, k: g.k });
        }
        f.xp += e.xp;
        delete x0.ve[w];
        ket.push(e);
      }
      await h.ghi(me, f);
      return { ok: true, ket, st: await h.trangThai(me, f) };
    }));
  }));

  // NT_THU=1: dat gio cua hoi cho de thu (body { den: '2026-11-29T21:00:00+07:00' } hoac { lech: ms }; {} = gio that)
  if (process.env.NT_THU === '1') {
    app.post('/api/farm/hoicho/_gio', d.requireAuth, d.asyncRoute(async (req, res) => {
      const b = req.body || {};
      lech = b.den ? Date.parse(b.den) - Date.now() : Number(b.lech) || 0;
      if (!Number.isFinite(lech)) lech = 0;
      const w = tuanCua(bayGio());
      res.json({ ok: true, bayGio: new Date(bayGio()).toISOString(), tuan: w, pha: pha(w) });
    }));
  }
}

module.exports = { gan, TU, MAU, GIAI, TT_HC, LOAI };
