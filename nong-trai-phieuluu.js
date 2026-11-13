// Ban do phieu luu 冒险地图 (co giao, 2026-11-13): 5 vung dat, moi vung 1 kieu cau hoi —
//   Lang Khoi Dau (pinyin) · Thung Lung Tu Vung (HSK / tu vung) · Thanh Pho Giao Tiep (hoi thoai)
//   Dao Ngu Phap (cau truc cau) · De Che Han Ngu (thu thach tong hop, mo khi 4 vung kia moi vung qua >= 3 tram).
// QUY TAC CUNG: moi cau chi lay tu bai em DA HOC hoac bai thay co GIAO (h.tuHocCua -> d.baiOnCua), ke ca dap an nhieu
// va cau hoi thoai (dialogData cua chinh cac bai do). May chu giu dap an, cham bang cau-hoi.js.
// Tram: 5 cau, dung >= 4 la qua (5/5 = 3 sao, 4/5 = 2 sao). De Che: 10 cau, dung >= 8 (10 = 3 sao, 9 = 2, 8 = 1).
// Qua lan dau qua tram (hat, hat quy, trang tri, xu; tram cuoi = do trang tri rieng cua vung); choi lai chi +PL_LAI_XU xu, toi da PL_LAI_NGAY / ngay.
// Vung dat cung la noi XUAT KHAU (nong-trai-xuong.js): toi tram 2 cua vung moi xuat hang sang duoc.
const VUNG = [
  { k: 'lang', zh: '起点村', py: 'Qǐdiǎn cūn', vn: 'Làng Khởi Đầu', chu: 'Pinyin & thanh điệu', tram: 6, so: 5, dat: 4,
    mo: { lv: 1 }, qua: 'pl-lang', kieu: ['py', 'thanh', 'nghe'], mau: '#7cc456' },
  { k: 'thung', zh: '词汇谷', py: 'Cíhuì gǔ', vn: 'Thung Lũng Từ Vựng', chu: 'Từ vựng HSK', tram: 6, so: 5, dat: 4,
    mo: { lv: 3, vung: 'lang', n: 3 }, qua: 'pl-thung', kieu: ['nghia', 'viet', 'thieu', 'noi'], mau: '#ffb74d' },
  { k: 'pho', zh: '交际城', py: 'Jiāojì chéng', vn: 'Thành Phố Giao Tiếp', chu: 'Hội thoại', tram: 6, so: 5, dat: 4,
    mo: { lv: 5, vung: 'thung', n: 3 }, qua: 'pl-pho', kieu: ['dap', 'xephk'], mau: '#64b5f6' },
  { k: 'dao', zh: '语法岛', py: 'Yǔfǎ dǎo', vn: 'Đảo Ngữ Pháp', chu: 'Cấu trúc câu', tram: 6, so: 5, dat: 4,
    mo: { lv: 7, vung: 'pho', n: 3 }, qua: 'pl-dao', kieu: ['np', 'xep'], mau: '#4db6ac' },
  { k: 'de', zh: '汉语帝国', py: 'Hànyǔ dìguó', vn: 'Đế Chế Hán Ngữ', chu: 'Thử thách tổng hợp', tram: 3, so: 10, dat: 8,
    mo: { tatCa: 3 }, qua: 'pl-de', kieu: ['tonghop'], mau: '#e57373' },
];
const VUNG_MAP = {};
VUNG.forEach((v) => { VUNG_MAP[v.k] = v; });
// Qua lan dau qua tram (theo thu tu tram). doc = do trang tri rieng cua vung
const QUA_TRAM = [{ xu: 20 }, { hat: 3 }, { xu: 30, tt: 1 }, { hatquy: 1 }, { xu: 40 }, { doc: 1, xu: 30 }];
const QUA_DE = [{ hatquy: 2, xu: 50 }, { xu: 100, con: 1 }, { doc: 1, xu: 100 }];
const PL_LAI_XU = 5, PL_LAI_NGAY = 25;
const PL_HAN_MS = 30 * 60000; // 1 luot choi tram giu 30 phut

// ---- thanh dieu pinyin: doi dau thanh 1 am tiet -> dap an nhieu ----
const THANH = { a: ['ā', 'á', 'ǎ', 'à'], e: ['ē', 'é', 'ě', 'è'], i: ['ī', 'í', 'ǐ', 'ì'], o: ['ō', 'ó', 'ǒ', 'ò'], u: ['ū', 'ú', 'ǔ', 'ù'], 'ü': ['ǖ', 'ǘ', 'ǚ', 'ǜ'] };
const DAU = {};
Object.keys(THANH).forEach((g) => THANH[g].forEach((c, t) => { DAU[c] = [g, t]; }));
function bienThanh(py, tron) {
  const s = [...String(py || '')], vt = [];
  s.forEach((c, i) => { if (DAU[c]) vt.push(i); });
  const ra = new Set();
  vt.forEach((i) => {
    const [g, t] = DAU[s[i]];
    for (let x = 0; x < 4; x++) if (x !== t) { const b = s.slice(); b[i] = THANH[g][x]; ra.add(b.join('')); }
  });
  // doi 2 am tiet cung luc (them lua chon cho tu 2 chu)
  if (vt.length >= 2) {
    for (let lan = 0; lan < 6; lan++) {
      const b = s.slice();
      vt.forEach((i) => { const [g, t] = DAU[s[i]]; b[i] = THANH[g][(t + 1 + Math.floor(Math.random() * 3)) % 4]; });
      ra.add(b.join(''));
    }
  }
  ra.delete(py);
  return tron([...ra]);
}

module.exports = function ganPhieuLuu(app, d, h, c) {
  const loi = h.loi, CauHoi = h.CauHoi, Ktbc = h.Ktbc;
  const tron = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const b64 = (s) => Buffer.from(encodeURIComponent(s || '')).toString('base64');

  // Boc 1 cau dinh dang cau-hoi.js thanh cau nong trai (giong cauKt): may chu giu c (co dap an), em chi nhan hoi + lua
  function boc(c, u, tu, them) {
    c = CauHoi.chuan(c);
    if (!c) return null;
    const q = { k: c.k || 'kt', c, hoi: CauHoi.choHs(c), lua: c.k ? [] : c.opts.slice(), dap: c.k ? -1 : c.dung, u: u || '' };
    if (tu) { q.zh = tu.zh; q.py = tu.py; q.vn = tu.vn; }
    q.doc = them && them.doc != null ? them.doc : (c.k === 'xep' ? c.dap : tu ? tu.zh : '');
    if (them && them.nghe) { q.hoi.nghe = b64(them.nghe); q.hoi.p = b64(them.nghe); q.hoi.nghePy = 1; }
    if (them && them.pyCau) q.pyCau = them.pyCau; // pinyin ca cau (goi y khi em tra loi sai trong cot truyen)
    return q;
  }
  const loc = (ng, src) => Object.assign({}, ng, { mcs: ng.mcs.filter((m) => src.indexOf(m.src) >= 0) });

  /* ---- Lang Khoi Dau: pinyin ---- */
  function cauPinyin(bo, kieu, tuDa) {
    const ds = tron(bo.tu.filter((v) => v.py && !tuDa[v.zh]));
    for (const v of ds) {
      const khac = tron(bo.tu.filter((x) => x.py && x.zh !== v.zh && x.py.toLowerCase() !== v.py.toLowerCase())).map((x) => x.py);
      const tv = bienThanh(v.py, tron);
      let opts;
      if (kieu === 'thanh') { if (tv.length < 2) continue; opts = [v.py].concat(tv.slice(0, 3)); }
      else if (kieu === 'nghe') { if (khac.length + tv.length < 3) continue; opts = [v.py].concat(tv.slice(0, 1), khac).slice(0, 4); }
      else { if (khac.length + tv.length < 3) continue; opts = [v.py].concat(tv.slice(0, 2), khac).slice(0, 4); }
      opts = tron([...new Set(opts)]);
      if (opts.length < 3) continue;
      const c = kieu === 'nghe'
        ? { lenh: 'Nghe rồi chọn pinyin đúng', zh: '', ctx: '', why: v.zh + ' — ' + v.vn, opts, dung: opts.indexOf(v.py) }
        : { lenh: kieu === 'thanh' ? 'Chọn đúng thanh điệu' : 'Chọn pinyin đúng', zh: v.zh, ctx: kieu === 'thanh' ? v.vn : '', why: v.vn, opts, dung: opts.indexOf(v.py) };
      const q = boc(c, v.u, v, kieu === 'nghe' ? { nghe: v.zh, doc: v.zh } : null);
      if (q) { tuDa[v.zh] = 1; return q; }
    }
    return null;
  }
  /* ---- Thung Lung Tu Vung ---- */
  function cauThieu(bo, tuDa) {
    for (const v of tron(bo.tu.filter((x) => x.zh.length >= 2 && !tuDa[x.zh]))) {
      const o = h.taoCau(bo, v, 'thieu', 4);
      if (!h.cauDung(o) || o.k !== 'thieu') continue;
      const q = boc({ lenh: 'Chọn chữ còn thiếu', zh: o.hoi.thieu, ctx: o.hoi.vn, why: v.zh + ' ' + (v.py || '') + ' — ' + v.vn, opts: o.lua, dung: o.dap }, v.u, v);
      if (q) { tuDa[v.zh] = 1; return q; }
    }
    return null;
  }
  /* ---- Thanh Pho Giao Tiep: hoi thoai cua chinh cac bai em hoc ---- */
  function boHoiThoai(bo) {
    const canh = [];
    (bo.urls || []).forEach((u) => Ktbc.hoiThoaiBai(u).forEach((sc) => canh.push({ u, lines: sc.lines })));
    return canh;
  }
  function cauDap(canh, thay) {
    const moi = [];
    canh.forEach((sc) => sc.lines.forEach((l) => { if (l.zh.length <= 60) moi.push(l.zh); }));
    const tatCa = [...new Set(moi)];
    if (tatCa.length < 4) return null;
    const cap = [];
    canh.forEach((sc) => sc.lines.forEach((l, i) => {
      const s = sc.lines[i + 1];
      if (s && s.sp !== l.sp && l.zh.length <= 60 && s.zh.length <= 60) cap.push({ u: sc.u, a: l, b: s });
    }));
    for (const x of tron(cap)) {
      const key = 'dap|' + x.a.zh;
      if (thay[key]) continue;
      const nhieu = tron(tatCa.filter((z) => z !== x.b.zh && z !== x.a.zh)).slice(0, 3);
      if (nhieu.length < 3) continue;
      const opts = tron([x.b.zh].concat(nhieu));
      const q = boc({ lenh: 'Bạn nói câu này — em đáp thế nào?', zh: x.a.zh, ctx: '', why: x.a.zh + ' (' + x.a.vn + ') → ' + x.b.zh + ' (' + x.b.vn + ')', opts, dung: opts.indexOf(x.b.zh) }, x.u, null, { doc: x.b.zh, pyCau: x.a.py });
      if (q) { thay[key] = 1; return q; }
    }
    return null;
  }
  function cauXepHt(canh, thay) {
    const dk = [];
    canh.forEach((sc) => {
      for (let i = 0; i + 3 <= sc.lines.length; i++) {
        const ba = sc.lines.slice(i, i + 3);
        if (ba.every((l) => l.zh.length <= 40) && new Set(ba.map((l) => l.zh)).size === 3) dk.push({ u: sc.u, ba });
      }
    });
    for (const x of tron(dk)) {
      const key = 'xht|' + x.ba[0].zh;
      if (thay[key]) continue;
      let tu = x.ba.map((l) => l.zh), lan = 0;
      do { tu = tron(x.ba.map((l) => l.zh)); lan++; } while (lan < 8 && tu.join('|') === x.ba.map((l) => l.zh).join('|'));
      const q = boc({ k: 'xep', lenh: 'Xếp các câu thành đoạn hội thoại đúng thứ tự', ctx: x.ba[0].vn, why: x.ba.map((l) => l.vn).join(' / '), tu, dap: x.ba.map((l) => l.zh).join('') }, x.u, null, { doc: x.ba.map((l) => l.zh).join('') });
      if (q) { thay[key] = 1; return q; }
    }
    return null;
  }

  // 1 cau cua vung v, kieu k (co the doi sang kieu khac neu bai em khong co du lieu); null neu khong ra duoc
  function cauKieu(bo, ng, canh, k, ctx, opt) {
    const { thay, tuDa } = ctx;
    const kt = (n, ds) => h.chonKt(n, ds, 1, { thay, tuDa, coPy: true })[0] || null;
    switch (k) {
      case 'py': case 'thanh': return cauPinyin(bo, k, tuDa);
      case 'nghe': return opt.nghe ? cauPinyin(bo, 'nghe', tuDa) : cauPinyin(bo, 'py', tuDa);
      case 'nghia': case 'viet': case 'noi': return Ktbc.coDang(ng, k) ? kt(ng, [k]) : null;
      case 'thieu': return cauThieu(bo, tuDa);
      case 'dap': return cauDap(canh, thay) || (loc(ng, ['hk', 'bai']).mcs.length ? kt(loc(ng, ['hk', 'bai']), ['nguphap']) : null);
      case 'xephk': return cauXepHt(canh, thay) || (Ktbc.coDang(ng, 'xepcau') ? kt(ng, ['xepcau']) : null);
      case 'np': return loc(ng, ['np']).mcs.length ? kt(loc(ng, ['np']), ['nguphap']) : null;
      case 'xep': return Ktbc.coDang(ng, 'xepcau') ? kt(ng, ['xepcau']) : null;
    }
    return null;
  }
  // Du phong khi bai khong co du lieu cho kieu cua vung (vd bai khong co hoi thoai): cau cung nhom gan nhat
  const DU_PHONG = {
    lang: ['py', 'thanh'], thung: ['nghia', 'viet', 'thieu'],
    pho: ['dap', 'xephk', 'np', 'xep', 'nghia'], dao: ['np', 'xep', 'dap', 'nghia', 'viet'],
  };
  // n cau cua vung (ham thuan theo bo tu em hoc — dung cho tools/thu-cau-nong-trai.js)
  function deVung(bo, vk, n, opt) {
    opt = opt || {};
    const v = VUNG_MAP[vk];
    if (!v || !bo || !bo.tu || bo.tu.length < 4) return [];
    const ng = Ktbc.nguonBai(bo.urls || [], bo.cap);
    if (ng.vocab.length < 4) return [];
    const canh = boHoiThoai(bo);
    const ctx = { thay: {}, tuDa: {} };
    let ke;
    if (vk === 'de') {
      // De Che: 2 pinyin + 3 tu vung + 2 hoi thoai + 3 ngu phap, tron
      ke = tron(['py', 'thanh', 'nghia', 'viet', 'thieu', 'dap', 'xephk', 'np', 'xep', 'noi']);
    } else ke = [];
    const ra = [];
    for (let i = 0; ra.length < n && i < n * 4; i++) {
      const k = vk === 'de' ? ke[ra.length % ke.length] : v.kieu[i % v.kieu.length];
      let q = cauKieu(bo, ng, canh, k, ctx, opt);
      if (!q) {
        const nhom = vk === 'de' ? ['nghia', 'viet', 'np', 'xep', 'py', 'thieu'] : DU_PHONG[vk];
        for (const k2 of tron(nhom)) { q = cauKieu(bo, ng, canh, k2, ctx, opt); if (q) break; }
      }
      if (q) { q.kv = k; ra.push(q); }
    }
    return ra.length >= Math.min(n, 3) ? ra : [];
  }
  /* ---- Cot truyen (nong-trai-cottruyen.js): "khoanh khac tieng Trung" — cau NGUYEN VAN cua bai em hoc ----
     nghia: 1 cau hoi thoai / cau vi du cua bai -> chon nghia tieng Viet (cac nghia nhieu cung la cau cua bai)
     dap  : chon cau dap trong hoi thoai cua bai · xep: xep tu thanh cau (cau xep cua bai) */
  function cauNghiaCau(ng, canh, thay) {
    let cau = [];
    canh.forEach((sc) => sc.lines.forEach((l) => { if (l.zh.length <= 60 && l.vn && l.vn.length <= 110) cau.push({ u: sc.u, zh: l.zh, py: l.py, vn: l.vn }); }));
    if (cau.length < 4) ng.vocab.forEach((v) => { if (v.ex_zh && v.ex_vn && v.ex_zh !== v.zh && v.ex_zh.length <= 60 && v.ex_vn.length <= 110) cau.push({ u: v.u, zh: v.ex_zh, py: v.ex_py, vn: v.ex_vn }); });
    const daZh = {}, daVn = {};
    cau = cau.filter((x) => { if (daZh[x.zh] || daVn[x.vn]) return false; daZh[x.zh] = 1; daVn[x.vn] = 1; return true; });
    if (cau.length < 4) return null;
    for (const x of tron(cau)) {
      const key = 'nc|' + x.zh;
      if (thay[key]) continue;
      const opts = tron([x.vn].concat(tron(cau.filter((y) => y !== x)).slice(0, 3).map((y) => y.vn)));
      const q = boc({ lenh: 'Câu này nghĩa là gì?', zh: x.zh, ctx: '', why: x.py || '', opts, dung: opts.indexOf(x.vn) }, x.u, null, { doc: x.zh, pyCau: x.py });
      if (q) { thay[key] = 1; return q; }
    }
    return null;
  }
  // 1 cau cho cot truyen; null = bai em hoc chua du du lieu (hoac em chua hoc bai nao)
  function cauTruyen(bo, kieu, ctx) {
    ctx = ctx || { thay: {}, tuDa: {} };
    if (!bo || !bo.tu || bo.tu.length < 4) return null;
    const ng = Ktbc.nguonBai(bo.urls || [], bo.cap);
    if (ng.vocab.length < 4) return null;
    const canh = boHoiThoai(bo), { thay, tuDa } = ctx;
    const kt = (n, ds) => h.chonKt(n, ds, 1, { thay, tuDa, coPy: true })[0] || null;
    const nghia = () => cauNghiaCau(ng, canh, thay);
    const hk = () => (loc(ng, ['hk', 'bai']).mcs.length ? kt(loc(ng, ['hk', 'bai']), ['nguphap']) : null);
    const xepCau = () => (Ktbc.coDang(ng, 'xepcau') ? kt(ng, ['xepcau']) : null);
    const tu = () => (Ktbc.coDang(ng, 'nghia') ? kt(ng, ['nghia']) : null);
    const thu = kieu === 'dap' ? [() => cauDap(canh, thay), nghia, hk, xepCau, tu]
      : kieu === 'xep' ? [xepCau, () => cauXepHt(canh, thay), nghia, hk, tu]
        : [nghia, hk, xepCau, tu];
    for (const fn of thu) { const q = fn(); if (q) { q.kv = kieu; return q; } }
    return null;
  }
  async function layCau(user, vk, n, opt) {
    const bo = await h.tuHocCua(user);
    return deVung(bo, vk, n, opt);
  }

  /* ---------------- tien trinh ---------------- */
  const pl = (f) => { f.pl = f.pl || {}; f.pl.v = f.pl.v || {}; return f.pl; };
  const soQua = (f, k) => ((f.pl && f.pl.v && f.pl.v[k]) || []).length;
  // vung mo chua: theo cap nong trai hoac tien do vung truoc; De Che: 4 vung kia moi vung >= 3 tram
  function moVung(f, v, lv) {
    if (v.mo.tatCa) {
      const thieu = VUNG.filter((x) => x.k !== 'de' && soQua(f, x.k) < v.mo.tatCa);
      return thieu.length ? { mo: false, ly: 'Qua ít nhất ' + v.mo.tatCa + ' trạm ở mỗi vùng: còn ' + thieu.map((x) => x.vn).join(', ') } : { mo: true };
    }
    if (lv >= v.mo.lv) return { mo: true };
    if (v.mo.vung && soQua(f, v.mo.vung) >= v.mo.n) return { mo: true };
    return { mo: false, ly: 'Nông trại cấp ' + v.mo.lv + ' hoặc qua ' + v.mo.n + ' trạm ' + VUNG_MAP[v.mo.vung].vn };
  }
  // da toi tram 2 (qua tram 1) -> xuat khau sang vung nay duoc
  const daToi = (f, vk) => soQua(f, vk) >= 1;
  const quaCua = (v, t) => (v.k === 'de' ? QUA_DE : QUA_TRAM)[t] || { xu: 10 };
  function moTaQua(v, t) {
    const q = quaCua(v, t), ds = [];
    if (q.xu) ds.push(q.xu + ' xu');
    if (q.hat) ds.push(q.hat + ' hạt giống');
    if (q.hatquy) ds.push(q.hatquy + ' hạt quý');
    if (q.tt) ds.push('đồ trang trí');
    if (q.con) ds.push('vật nuôi');
    if (q.doc) ds.push(h.TT[v.qua].vn + ' ' + h.TT[v.qua].zh);
    return ds.join(' + ');
  }
  function phatQua(f, v, t, lv) {
    const q = quaCua(v, t), ra = [];
    const chon = (a) => a[Math.floor(Math.random() * a.length)];
    f.hat = f.hat || {};
    if (q.xu) { f.xu += q.xu; ra.push({ loai: 'xu', n: q.xu }); }
    if (q.hat) {
      const k = chon(Object.keys(h.CAY).filter((x) => !h.CAY[x].hiem && h.CAY[x].lv <= Math.max(1, lv)));
      f.hat[k] = (f.hat[k] || 0) + q.hat; ra.push({ loai: 'hat', k, n: q.hat });
    }
    if (q.hatquy) { const k = chon(h.CAY_HIEM); f.hat[k] = (f.hat[k] || 0) + q.hatquy; ra.push({ loai: 'hatquy', k, n: q.hatquy }); }
    if (q.tt) { const k = chon(Object.keys(h.TT).filter((x) => h.TT[x].lv <= lv + 1 && !h.TT[x].doc)); f.tui[k] = (f.tui[k] || 0) + 1; ra.push({ loai: 'tt', k, n: 1 }); }
    if (q.con) {
      const ds = Object.keys(h.CON).filter((k) => h.CON[k].lv <= lv + 2 && f.o.filter((o) => o.k === k).length + (f.tui[k] || 0) < h.CON_TOI_DA);
      if (ds.length) { const k = chon(ds); f.tui[k] = (f.tui[k] || 0) + 1; ra.push({ loai: 'con', k, n: 1 }); }
    }
    if (q.doc) { f.tui[v.qua] = (f.tui[v.qua] || 0) + 1; ra.push({ loai: 'tt', k: v.qua, n: 1, doc: 1 }); }
    return ra;
  }
  const laiHomNay = (f) => (f.pl && f.pl.lai && f.pl.lai.d === d.vnDayKey() ? f.pl.lai.xu : 0);
  function trangThaiPl(f, lv) {
    return {
      vung: VUNG.map((v) => {
        const m = moVung(f, v, lv), s = ((f.pl && f.pl.v && f.pl.v[v.k]) || []);
        return { k: v.k, zh: v.zh, py: v.py, vn: v.vn, chu: v.chu, tram: v.tram, so: v.so, dat: v.dat, mau: v.mau, qua: v.qua,
          mo: m.mo, ly: m.ly || '', sao: s.slice(), xk: daToi(f, v.k), quaTram: Array.from({ length: v.tram }, (x, t) => moTaQua(v, t)) };
      }),
      lai: { xu: laiHomNay(f), toiDa: PL_LAI_NGAY, moi: PL_LAI_XU },
      dang: f.pl && f.pl.q && Date.now() - f.pl.q.bd < PL_HAN_MS ? { v: f.pl.q.v, t: f.pl.q.t, da: f.pl.q.tl.length, so: f.pl.q.ds.length, dung: f.pl.q.tl.filter(Boolean).length } : null,
    };
  }
  const choHs = (q) => ({ k: q.k, hoi: q.hoi, lua: q.lua });

  app.get('/api/farm/pl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id);
    const bo = await h.tuHocCua(req.user);
    res.json(Object.assign(trangThaiPl(f, h.lvTuXp(f.xp)), { coBai: !!(bo && bo.coBai), nguon: bo ? bo.nguon : '' }));
  }));
  app.post('/api/farm/pl/bat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, vk = String(b.v || ''), t = Math.floor(Number(b.t));
    const v = VUNG_MAP[vk];
    if (!v || !(t >= 0) || t >= v.tram) return res.status(400).json({ error: 'Trạm này không có.' });
    const ds = await layCau(req.user, vk, v.so, { nghe: !!b.nghe });
    if (ds.length < v.so) return res.status(400).json({ error: 'Bài em đã học chưa đủ câu cho vùng này — học thêm bài (hoặc bài thầy cô giao) rồi quay lại nhé!', chuaHoc: true });
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp), p = pl(f);
      const m = moVung(f, v, lv);
      if (!m.mo) throw loi(v.vn + ' chưa mở: ' + m.ly + '.');
      if (t > soQua(f, vk)) throw loi('Qua trạm ' + (soQua(f, vk) + 1) + ' trước đã nhé!');
      p.q = { v: vk, t, ds, tl: [], bd: Date.now() };
      await h.ghi(me, f);
      return { ok: true, v: vk, t, so: ds.length, can: v.dat, ds: ds.map(choHs), lanDau: t >= soQua(f, vk) };
    }));
  }));
  app.post('/api/farm/pl/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp), p = pl(f), r = p.q;
      if (!r || Date.now() - r.bd > PL_HAN_MS) throw loi('Lượt chơi đã hết hạn — bấm trạm để chơi lại.');
      const q = r.ds[r.tl.length];
      if (!q) throw loi('Trạm này đã xong.');
      const dung = h.chamCau(q, b);
      r.tl.push(dung);
      h.onCau(f, q, b, dung);
      if (dung && c.ldCong) c.ldCong(me);
      const kq = Object.assign({ ok: true, dung, i: r.tl.length - 1 }, h.ketQuaCau(q));
      if (r.tl.length >= r.ds.length) {
        const v = VUNG_MAP[r.v], n = r.tl.filter(Boolean).length, dat = n >= v.dat;
        const sao = !dat ? 0 : v.k === 'de' ? (n >= 10 ? 3 : n >= 9 ? 2 : 1) : (n >= v.so ? 3 : 2);
        const s = p.v[r.v] = p.v[r.v] || [];
        const lanDau = dat && r.t >= s.length;
        let qua = [], xuLai = 0;
        if (dat) {
          if (h.suKien) h.suKien(f, 'pl', 1);
          if (lanDau) { s.push(sao); qua = phatQua(f, v, r.t, lv); f.xp += 5; }
          else {
            s[r.t] = Math.max(s[r.t] || 0, sao);
            const da = laiHomNay(f);
            xuLai = Math.max(0, Math.min(PL_LAI_XU, PL_LAI_NGAY - da));
            if (xuLai) { f.xu += xuLai; p.lai = { d: d.vnDayKey(), xu: da + xuLai }; }
            f.xp += 1;
          }
        }
        delete p.q;
        kq.ket = { v: r.v, t: r.t, dung: n, so: r.ds.length, dat, sao, lanDau, qua, xuLai, moiMo: lanDau && r.t + 1 >= v.tram ? 'het' : '' };
        await h.ghi(me, f);
        kq.pl = trangThaiPl(f, h.lvTuXp(f.xp));
        kq.st = await h.trangThai(me, f);
        return kq;
      }
      await h.ghi(me, f);
      return kq;
    }));
  }));

  Object.assign(h.CATALOG, { PL_VUNG: VUNG.map((v) => ({ k: v.k, zh: v.zh, py: v.py, vn: v.vn, chu: v.chu, mau: v.mau, qua: v.qua })) });
  return { VUNG, VUNG_MAP, deVung, layCau, daToi, moVung, soQua, bienThanh, cauTruyen };
};
module.exports.VUNG = VUNG;
