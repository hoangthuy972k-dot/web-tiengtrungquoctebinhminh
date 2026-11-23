// ⚔️ Dau 1–1 truc tuyen (/dau): hai hoc sinh da dang nhap dau 10 cau nhanh, cung thay mot cau cung luc, 10 giay / cau.
// Diem = dung (100) + thuong toc do (toi da 50). Ket qua xong ca hai cung xem dap an + giai thich, bam "Dau lai".
//
// Cach vao tran:
//   (a) Tim doi thu: hang cho ngau nhien — uu tien cung lop + cung cap, roi cung cap, roi cung lop; cho lau moi ghep bat ky.
//       Cho 15 giay khong co ai -> moi dau voi "Rô-bốt" (giong doikhang.js).
//   (b) Moi ban: tao phong -> ma 4 chu so / link /dau?ma=1234.
//   (c) Thach dau ban cung lop dang online (danh sach ban cung lop co mat trong 25 giay qua).
//
// Cau hoi (quy tac cung): CHI tu bai em da hoc / duoc giao (d.baiOnCua -> urls). Hai ban: bai CA HAI cung co; khong du
// thi bai cua ban "thap hon" (cap thap hon / bai xa nhat nho hon) — loc bot bai ban kia chua toi neu van du tu.
// Kho cau: nong-trai-ktbc.js (cung ngan hang Kiem tra bai cu: nghia, chon chu Han, dien tu, ngu phap) + cau nghe tu tao.
// Khong hien pinyin (tro choi khong pinyin theo yeu cau co giao). May chu giu dap an, cham tren may chu.
//
// Thoi gian thuc: hoi vong ngan (~700 ms) nhu live.js / doikhang.js — tran, hang cho, phong chi o trong bo nho
// (co tran / han / gioi han). Chi luu KET QUA tran nguoi–nguoi (MySQL bang dau_mot khi USE_DB, khong thi DATA_DIR/dau_mot.json)
// de lam bang xep hang tuan (thang, ti le thang, chuoi thang) — tuan moi tu thu Hai gio VN (d.vnWeekKey).
// Sao: client goi /api/stars/game { n } (n = so cau dung + 2 neu thang, toi da 10) — may chu tinh san so n trong ket qua.
const path = require('path');
const crypto = require('crypto');
const Ktbc = require('./nong-trai-ktbc');

module.exports = function (app, d) {
  /* ---------------- hang so ---------------- */
  const SO_CAU = 10;
  const IT_NHAT = 5;               // it nhat 5 cau moi cho dau
  const Q_MS = 10000;              // 10 giay / cau
  const NOP_TRE_MS = 500;          // chap nhan tre (mang cham) sau khi het gio
  const LO_MS = 2600;              // xem dap an giua hai cau
  const VS_MS = 5500;              // man VS + dem nguoc 3-2-1
  const CHO_VAO_MS = 8000;         // doi ban kia mo tran toi da 8 giay roi bat dau
  const DIEM_DUNG = 100, THUONG_NHANH = 50;
  const ROI_MS = 15000;            // khong hoi tran 15 giay khi dang dau = bo cuoc
  const BOT_SAU_MS = 15000;        // cho 15 giay -> duoc dau voi ro-bot
  const HANG_CHO_HET_MS = 6000;    // khong hoi hang cho 6 giay = roi hang
  const GHEP_BAT_KY_MS = 6000;     // cho >= 6 giay: ghep voi bat ky ai
  const GHEP_LOP_MS = 3000;        // cho >= 3 giay: ghep cung lop khac cap
  const ONLINE_MS = 25000;
  const PHONG_HET_MS = 10 * 60000;
  const TRAN_XONG_GIU_MS = 10 * 60000;
  const TRAN_BO_MS = 20 * 60000;
  const MAX_TRAN = 400, MAX_PHONG = 300, MAX_HANG_CHO = 300;
  const TAO_MOI_GIO = 20;          // phong + thach dau moi gio / em
  const BOT_MOI_GIO = 40;          // tran ro-bot moi gio / em
  const SAI_MA_10P = 20;           // nhap sai ma toi da 20 lan / 10 phut
  const BOT_DUNG = 0.6, BOT_CHAM = [3000, 8500];  // ro-bot dung ~60%, tra loi sau 3–8,5 giay (de ban hoc it van thang duoc)
  const TEN_BOT = 'Rô-bốt 🤖';
  const SAO_THANG = 2, SAO_TOI_DA = 10;
  const GIU_TUAN = 12;
  const FILE = path.join(d.DATA_DIR, 'dau_mot.json');

  /* ---------------- bo nho ---------------- */
  const tran = new Map();       // id -> tran
  const cuaEm = new Map();      // uid -> id tran dang dau / vua xong
  const hangCho = new Map();    // uid -> { uid, tu, hoi, cap, lop, bo }
  const phong = new Map();      // ma 4 so -> { ma, chu, den, tao, tuChoi, tranId }
  const phongCua = new Map();   // uid -> ma phong em dang mo
  const online = new Map();     // uid -> lan cuoi hoi (ms)
  const nhip = new Map();       // 'loai|uid' -> [moc thoi gian] (gioi han tao phong / bot / sai ma)
  const boNho = new Map();      // uid -> { t, bo } (bai em hoc, 60 giay)
  const avNho = new Map();      // uid -> { t, av }
  const dangGhep = new Set();   // uid dang duoc tao tran (khoa ngan: 2 yeu cau dong thoi khong ghep 1 em vao 2 tran)

  const now = () => Date.now();
  const tron = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = crypto.randomInt(0, i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const ngauNhien = (a, b) => a + Math.floor(Math.random() * (b - a));
  const idMoi = () => crypto.randomBytes(8).toString('hex');

  function demNhip(loai, uid, cuaSo, toiDa) {
    const k = loai + '|' + uid, t = now();
    const ds = (nhip.get(k) || []).filter((x) => t - x < cuaSo);
    if (ds.length >= toiDa) { nhip.set(k, ds); return false; }
    ds.push(t); nhip.set(k, ds);
    return true;
  }
  function conNhip(loai, uid, cuaSo, toiDa) {
    const ds = (nhip.get(loai + '|' + uid) || []).filter((x) => now() - x < cuaSo);
    return ds.length < toiDa;
  }

  // Don dep dinh ky: bo nho luon co gioi han
  function don() {
    const t = now();
    for (const [id, m] of tran) {
      if ((m.pha === 'het' && t - m.xongLuc > TRAN_XONG_GIU_MS) || t - m.cham > TRAN_BO_MS) {
        tran.delete(id);
        m.p.forEach((p) => { if (p.uid && cuaEm.get(p.uid) === id) cuaEm.delete(p.uid); });
      }
    }
    for (const [ma, ph] of phong) if (t - ph.tao > PHONG_HET_MS || (ph.tranId && t - ph.tao > 60000)) xoaPhong(ma);
    for (const [uid, x] of hangCho) if (t - x.hoi > HANG_CHO_HET_MS) hangCho.delete(uid);
    for (const [uid, x] of online) if (t - x > 5 * 60000) online.delete(uid);
    for (const [k, ds] of nhip) { const con = ds.filter((x) => t - x < 3600000); if (con.length) nhip.set(k, con); else nhip.delete(k); }
    for (const [k, x] of boNho) if (t - x.t > 120000) boNho.delete(k);
    for (const [k, x] of avNho) if (t - x.t > 15 * 60000) avNho.delete(k);
  }
  setInterval(don, 60000).unref();

  /* ---------------- ten, lop, nhan vat ---------------- */
  // Giong tenCongKhai o server.js: khach / nguoi ngoai lop chi thay ten goi + chu cai dau cua ho ("Nguyen Thanh Huyen" -> "Huyen N.")
  function tenCongKhai(name, day) {
    const t = String(name || '').trim().split(/\s+/).filter(Boolean);
    if (day || t.length < 2) return String(name || '');
    return t[t.length - 1] + ' ' + t[0].charAt(0).toUpperCase() + '.';
  }
  async function lopCua(uid) {
    const st = await d.loadClassState();
    const m = st.members[uid];
    if (!m) return { id: '', ten: '' };
    const c = (st.classes || []).find((x) => x.id === m.classId);
    return { id: m.classId, ten: c ? c.name : '' };
  }
  // Ten hien cho nguoi xem: ban cung lop thay ten that, nguoi khac thay ten da che
  function tenCho(xemLop, lop, ten) { return tenCongKhai(ten, !!(xemLop && xemLop === lop)); }

  // Nhan vat em tu thiet ke trong nong trai (chi doc, khong sua); chua co -> null (client dung NhanVat.macDinh(id))
  async function avCua(ids) {
    const out = {}, can = [];
    ids.filter(Boolean).forEach((id) => { const x = avNho.get(id); if (x && now() - x.t < 10 * 60000) out[id] = x.av; else can.push(id); });
    if (can.length) {
      try {
        if (!d.USE_DB) {
          const all = d.readJsonFile(path.join(d.DATA_DIR, 'farms.json')) || {};
          can.forEach((id) => { out[id] = (all[id] && all[id].av) || null; });
        } else {
          const [rows] = await d.db().query('SELECT user_id, data FROM farms WHERE user_id IN (?)', [can]);
          can.forEach((id) => { out[id] = null; });
          rows.forEach((r) => { try { out[r.user_id] = JSON.parse(r.data).av || null; } catch (e) { out[r.user_id] = null; } });
        }
      } catch (e) { can.forEach((id) => { out[id] = null; }); }
      can.forEach((id) => { const av = out[id] && typeof out[id] === 'object' ? out[id] : null; out[id] = av; avNho.set(id, { t: now(), av }); });
    }
    return out;
  }

  /* ---------------- bai em hoc -> bo cau ---------------- */
  const HANG_CAP = { yct: 0, hsk1: 1, hsk1v3: 1, hsk2: 2, hsk2v3: 2, hsk3: 3, hsk3v3: 3, hsk4: 4, hsk4v3: 4, hsk5: 5, hsk6: 6 };
  function capUrl(u) {
    const m = /^\/lessons\/([a-z0-9]+)-bai-(\d+)\.html$/.exec(u);
    if (m) return { cap: m[1], so: Number(m[2]) };
    const m2 = /^\/lessons\/bai-(\d+)\.html$/.exec(u);
    return m2 ? { cap: 'hsk2', so: Number(m2[1]) } : { cap: '', so: 0 };
  }
  async function baiCua(user) {
    const x = boNho.get(user.id);
    if (x && now() - x.t < 60000) return x.bo;
    const b = await d.baiOnCua(user);
    const urls = (b && Array.isArray(b.urls) ? b.urls : []).filter((u) => d.tuVungBai(u).length);
    let xa = 0;
    urls.forEach((u) => { const c = capUrl(u); if (c.cap === b.cap && c.so > xa) xa = c.so; });
    const bo = { urls, cap: (b && b.cap) || user.capHoc || user.level || '', xa, soTu: urls.reduce((s, u) => s + d.tuVungBai(u).length, 0), nguon: (b && b.nguon) || '' };
    boNho.set(user.id, { t: now(), bo });
    return bo;
  }
  function soTu(urls) { const z = {}; urls.forEach((u) => d.tuVungBai(u).forEach((v) => { z[v.zh] = 1; })); return Object.keys(z).length; }
  // Ai "thap hon": cap thap hon, roi bai xa nhat nho hon, roi it bai hon
  function thapHon(a, b) {
    const ha = HANG_CAP[a.cap] != null ? HANG_CAP[a.cap] : 9, hb = HANG_CAP[b.cap] != null ? HANG_CAP[b.cap] : 9;
    if (ha !== hb) return ha < hb ? a : b;
    if (a.xa !== b.xa) return a.xa < b.xa ? a : b;
    return a.urls.length <= b.urls.length ? a : b;
  }
  // Bo bai cho tran 2 nguoi (xem quy tac o dau file)
  function chonBai(a, b) {
    if (!b) return { urls: a.urls, cap: a.cap, cach: 'mot' };
    const chung = a.urls.filter((u) => b.urls.indexOf(u) >= 0);
    if (soTu(chung) >= 8) return { urls: chung, cap: a.cap === b.cap ? a.cap : '', cach: 'chung' };
    const thap = thapHon(a, b), cao = thap === a ? b : a;
    // bai cua ban thap hon ma ban kia cung da toi (cung cap, so bai <= bai xa nhat cua ban kia) hoac da hoc
    const caHai = thap.urls.filter((u) => { const c = capUrl(u); return cao.urls.indexOf(u) >= 0 || (c.cap === cao.cap && c.so <= cao.xa); });
    if (soTu(caHai) >= 8) return { urls: caHai, cap: thap.cap, cach: 'caHai' };
    return { urls: thap.urls, cap: thap.cap, cach: 'thap' };
  }

  // Tao bo cau (toi da SO_CAU), moi cau trac nghiem: { loai, lenh, zh, ctx, nghe, opts, dung, why, u }
  const NHOM = [['nghia', 3], ['viet', 2], ['nghe', 2], ['dien', 2], ['nguphap', 1]];
  function taoBo(urls, cap) {
    const ng = Ktbc.nguonBai(urls, cap);
    if (ng.vocab.length < 4) return [];
    const ra = [], tuDa = {}, khoaDa = {};
    const giaiTu = (v) => v.zh + ' = ' + v.vn + (v.hv ? ' · Hán Việt: ' + v.hv : '');
    function them(q, tu) {
      const k = q.loai + '|' + q.zh + '|' + q.nghe + '|' + q.opts[q.dung];
      if (khoaDa[k] || q.opts.length < 2 || q.dung < 0) return false;
      khoaDa[k] = 1; if (tu) tuDa[tu] = 1;
      ra.push(q);
      return true;
    }
    function tuCuaCau(l, c) {
      if (l === 'nghia') return c.zh;
      if (l === 'viet' || l === 'dien') return c.opts[c.dung];
      return '';
    }
    function lay(l, n, choLap) {
      if (n <= 0) return 0;
      let co = 0;
      if (l === 'nghe') {
        const ds = tron(ng.vocab).filter((v) => /[㐀-鿿]/.test(v.zh) && v.zh.length <= 6);
        for (const v of ds) {
          if (co >= n) break;
          if (!choLap && tuDa[v.zh]) continue;
          const sai = tron(ng.vocab.filter((x) => x.zh !== v.zh && x.vn !== v.vn)).map((x) => x.zh)
            .filter((z, i, a) => a.indexOf(z) === i).slice(0, 3);
          if (sai.length < 2) break;
          const opts = tron([v.zh].concat(sai));
          if (them({ loai: 'nghe', lenh: 'Nghe và chọn chữ Hán đúng', zh: '', ctx: '', nghe: v.zh, opts, dung: opts.indexOf(v.zh), why: giaiTu(v), u: v.u }, v.zh)) co++;
        }
        return co;
      }
      if (!Ktbc.coDang(ng, l)) return 0;
      const ung = Ktbc.taoCau(ng, [l], Math.max(n * 5, 10), false);
      for (const c of ung) {
        if (co >= n) break;
        if (c.k || !Array.isArray(c.opts)) continue;
        const tu = tuCuaCau(l, c);
        if (tu && !choLap && tuDa[tu]) continue;
        // 10 giay: bo cau ngu phap qua dai
        if (l === 'nguphap' && (String(c.zh).length > 70 || c.opts.some((o) => String(o).length > 32))) continue;
        let opts = c.opts.slice(), dung = c.dung;
        if (opts.length > 4) { const d0 = opts[dung]; opts = tron([d0].concat(tron(opts.filter((o, j) => j !== dung)).slice(0, 3))); dung = opts.indexOf(d0); }
        const v = tu && ng.tuMap[tu];
        let why = String(c.why || '').replace(/^Đáp án [A-F]: /, 'Đáp án: ');
        if ((l === 'nghia' || l === 'viet') && v) why = giaiTu(v);
        else if (l === 'dien' && v) why = (c.ctx ? c.ctx + ' — ' : '') + giaiTu(v);
        if (them({ loai: l, lenh: c.lenh || 'Chọn đáp án đúng', zh: c.zh || '', ctx: l === 'nghia' ? '' : (c.ctx || ''), nghe: '', opts, dung, why, u: Ktbc.nguonCau(c, ng) || (v && v.u) || '' }, tu)) co++;
      }
      return co;
    }
    NHOM.forEach(([l, n]) => lay(l, n, false));
    // thieu (bai it tu / thieu dang): bu bang dang tu vung con lai, roi moi cho phep hoi lai tu theo dang KHAC
    ['nghia', 'viet', 'nghe', 'dien'].forEach((l) => lay(l, SO_CAU - ra.length, false));
    ['nghia', 'viet', 'nghe'].forEach((l) => lay(l, SO_CAU - ra.length, true));
    // xen ke cac dang, cau ngu phap de giua tran
    return tron(ra.slice(0, SO_CAU));
  }

  /* ---------------- tran ---------------- */
  // m = { id, tao, cham, bot, lan (tran thu may cua cap nay), pha 'vs'|'choi'|'het', batDau, i, cauLuc, loLuc,
  //       cau: [...], bai: { urls, cach, cap }, p: [ben, ben], kq: 'a'|'b'|'h', lyDo, xongLuc, lai: [bool,bool], tranMoi }
  // ben = { uid|null, ten, lop, av, diem, dung, tl: [{ chon, dung, ms, diem }|null], thay (da mo tran), hoi (lan cuoi hoi) }
  function benMoi(u) {
    return { uid: u ? u.uid : null, ten: u ? u.ten : TEN_BOT, lop: u ? u.lop : '', av: u ? u.av : null, diem: 0, dung: 0, tl: [], thay: !u, hoi: now(), botLuc: 0 };
  }
  function taoTran(a, b, bai, cau, lan) {
    const m = {
      id: idMoi(), tao: now(), cham: now(), bot: !b, lan: lan || 1, pha: 'vs', batDau: 0, i: -1, cauLuc: 0, loLuc: 0,
      cau, bai, p: [benMoi(a), benMoi(b)], kq: '', lyDo: '', xongLuc: 0, lai: [false, !b ? true : false], tranMoi: '', saoXong: false,
    };
    tran.set(m.id, m);
    cuaEm.set(a.uid, m.id);
    if (b) cuaEm.set(b.uid, m.id);
    hangCho.delete(a.uid); if (b) hangCho.delete(b.uid);
    // moi em chi 1 viec mot luc: vao tran thi dong phong moi dang mo
    [a.uid, b && b.uid].forEach((u) => { const ma = u && phongCua.get(u); if (ma) xoaPhong(ma); });
    return m;
  }
  const benCua = (m, uid) => (m.p[0].uid === uid ? 0 : m.p[1].uid === uid ? 1 : -1);
  function diemCau(ms) { return DIEM_DUNG + Math.round(THUONG_NHANH * Math.max(0, Q_MS - ms) / Q_MS); }
  function ghiTl(m, s, chon, luc) {
    const q = m.cau[m.i];
    const ms = Math.max(0, Math.min(Q_MS, luc - m.cauLuc));
    const dung = chon === q.dung;
    const diem = dung ? diemCau(ms) : 0;
    m.p[s].tl[m.i] = { chon, dung, ms, diem };
    if (dung) { m.p[s].diem += diem; m.p[s].dung++; }
    return m.p[s].tl[m.i];
  }
  function batCau(m, i, luc) {
    m.i = i; m.cauLuc = luc; m.loLuc = 0;
    if (m.bot) m.p[1].botLuc = luc + ngauNhien(BOT_CHAM[0], BOT_CHAM[1]);
  }
  // Cho dong ho tran chay toi hien tai (goi moi lan co yeu cau)
  function chay(m) {
    const t = now();
    for (let vong = 0; vong < 40; vong++) {
      if (m.pha === 'het') return;
      // bo cuoc vi roi trang (khong hoi qua lau)
      for (let s = 0; s < 2; s++) {
        const p = m.p[s];
        if (p.uid && t - p.hoi > ROI_MS && (m.pha === 'choi' || (m.pha === 'vs' && m.batDau))) { ketThuc(m, s === 0 ? 'b' : 'a', 'roi'); return; }
      }
      if (m.pha === 'vs') {
        if (!m.batDau && (m.p.every((p) => p.thay) || t - m.tao > CHO_VAO_MS)) m.batDau = t + VS_MS;
        if (!m.batDau || t < m.batDau) return;
        m.pha = 'choi';
        batCau(m, 0, m.batDau);
        continue;
      }
      // pha choi
      const het = m.cauLuc + Q_MS;
      if (!m.loLuc) {
        if (m.bot && !m.p[1].tl[m.i] && m.p[1].botLuc <= Math.min(t, het)) {
          const q = m.cau[m.i];
          const dung = Math.random() < BOT_DUNG;
          const sai = q.opts.map((_, j) => j).filter((j) => j !== q.dung);
          ghiTl(m, 1, dung ? q.dung : sai[Math.floor(Math.random() * sai.length)], m.p[1].botLuc);
        }
        const xong = m.p.every((p) => p.tl[m.i]);
        if (xong) m.loLuc = Math.max(m.cauLuc, ...m.p.map((p) => m.cauLuc + p.tl[m.i].ms));
        else if (t >= het + NOP_TRE_MS) m.loLuc = het;
        else return;
        m.p.forEach((p) => { if (!p.tl[m.i]) p.tl[m.i] = { chon: -1, dung: false, ms: Q_MS, diem: 0 }; });
      }
      const tiep = m.loLuc + LO_MS;
      if (t < tiep) return;
      if (m.i + 1 < m.cau.length) { batCau(m, m.i + 1, tiep); continue; }
      const a = m.p[0], b = m.p[1];
      const kq = a.diem !== b.diem ? (a.diem > b.diem ? 'a' : 'b') : a.dung !== b.dung ? (a.dung > b.dung ? 'a' : 'b') : 'h';
      ketThuc(m, kq, 'diem');
      return;
    }
  }
  function ketThuc(m, kq, lyDo) {
    if (m.pha === 'het') return;
    m.pha = 'het'; m.kq = kq; m.lyDo = lyDo; m.xongLuc = now();
    if (!m.bot) ghiKetQua(m).catch((e) => console.error('dau-mot: khong ghi duoc ket qua', e.message));
  }

  /* ---------------- trang thai gui cho em ---------------- */
  function cauChoEm(q, i) { return { i, loai: q.loai, lenh: q.lenh, zh: q.zh, ctx: q.ctx, nghe: q.nghe, opts: q.opts }; }
  function benChoEm(m, s, xemLop) {
    const p = m.p[s];
    return {
      ten: p.uid ? tenCho(xemLop, p.lop, p.ten) : p.ten, id: p.uid || 'bot', bot: !p.uid, av: p.av, cungLop: !!(p.uid && xemLop && p.lop === xemLop),
      diem: p.diem, dung: p.dung,
      // dau cham tien do: 1 dung, 0 sai/het gio — chi cac cau da lo dap an (cau dang mo chi biet "da tra loi")
      vet: p.tl.slice(0, Math.max(0, m.loLuc || m.pha === 'het' ? m.i + 1 : m.i)).map((x) => (x && x.dung ? 1 : 0)),
      daTl: m.pha === 'choi' && !m.loLuc && !!p.tl[m.i],
    };
  }
  function saoCua(m, s) {
    const thang = m.kq === 'ab'[s];
    return Math.min(SAO_TOI_DA, m.p[s].dung + (thang ? SAO_THANG : 0));
  }
  function trangThai(m, s) {
    const t = now(), d2 = 1 - s, toi = m.p[s];
    const out = {
      id: m.id, pha: m.pha, n: m.cau.length, i: m.i, bot: m.bot, lan: m.lan, qMs: Q_MS,
      toi: benChoEm(m, s, toi.lop), doi: benChoEm(m, d2, toi.lop),
      nguon: m.bai.cach === 'chung' ? 'Bài cả hai em đã học' : m.bai.cach === 'mot' ? 'Bài em đã học' : 'Bài bạn học ít hơn đã học',
    };
    if (m.pha === 'vs') {
      out.sauMs = m.batDau ? Math.max(0, m.batDau - t) : -1;
      if (m.batDau) out.cauSau = cauChoEm(m.cau[0], 0);
    } else if (m.pha === 'choi') {
      const q = m.cau[m.i];
      out.cau = cauChoEm(q, m.i);
      out.conMs = Math.max(0, m.cauLuc + Q_MS - t);
      if (toi.tl[m.i]) out.toiChon = toi.tl[m.i].chon;
      if (m.loLuc) {
        const a = toi.tl[m.i], b = m.p[d2].tl[m.i];
        out.lo = { dap: q.dung, why: q.why, toiChon: a.chon, toiDung: a.dung, toiDiem: a.diem, doiChon: b.chon, doiDung: b.dung, doiDiem: b.diem };
        out.tiepMs = Math.max(0, m.loLuc + LO_MS - t);
        if (m.i + 1 < m.cau.length) out.cauSau = cauChoEm(m.cau[m.i + 1], m.i + 1);
      }
    } else {
      const kq = m.kq === 'h' ? 'hoa' : m.kq === 'ab'[s] ? 'thang' : 'thua';
      out.ketQua = {
        kq, lyDo: m.lyDo, sao: saoCua(m, s),
        ds: m.cau.map((q, i) => {
          const a = toi.tl[i], b = m.p[d2].tl[i];
          return { loai: q.loai, lenh: q.lenh, zh: q.zh, ctx: q.ctx, nghe: q.nghe, opts: q.opts, dap: q.dung, why: q.why,
            toiChon: a ? a.chon : -1, toiDiem: a ? a.diem : 0, toiMs: a ? a.ms : 0, doiChon: b ? b.chon : -1, doiDiem: b ? b.diem : 0 };
        }).slice(0, m.lyDo === 'roi' ? m.i + 1 : m.cau.length),
        lai: { toi: m.lai[s], doi: m.lai[d2] },
        doiRoi: !!m.p[d2].uid && t - m.p[d2].hoi > 12000,
        tranMoi: m.tranMoi || '',
      };
    }
    return out;
  }

  /* ---------------- luu ket qua + bang xep hang ---------------- */
  async function initTable() {
    if (!d.USE_DB) return;
    await d.db().query(
      'CREATE TABLE IF NOT EXISTS dau_mot (' +
        'id VARCHAR(16) PRIMARY KEY, week CHAR(10) NOT NULL, ms BIGINT NOT NULL, ' +
        'a_id VARCHAR(36) NOT NULL, b_id VARCHAR(36) NOT NULL, a_diem INT NOT NULL DEFAULT 0, b_diem INT NOT NULL DEFAULT 0, ' +
        'a_dung INT NOT NULL DEFAULT 0, b_dung INT NOT NULL DEFAULT 0, kq CHAR(1) NOT NULL, ly_do VARCHAR(12) NOT NULL DEFAULT \'\', ' +
        'INDEX idx_week (week), INDEX idx_a (a_id), INDEX idx_b (b_id), ' +
        'FOREIGN KEY (a_id) REFERENCES users(id) ON DELETE CASCADE, FOREIGN KEY (b_id) REFERENCES users(id) ON DELETE CASCADE' +
      ')'
    );
    await d.db().query('DELETE FROM dau_mot WHERE week < ?', [d.vnWeekKey(now() - GIU_TUAN * 7 * 864e5)]);
  }
  let bxhNho = new Map(); // tuan -> { t, rows }
  async function ghiKetQua(m) {
    const r = {
      id: m.id, week: d.vnWeekKey(m.xongLuc), ms: m.xongLuc, a: m.p[0].uid, b: m.p[1].uid,
      ad: m.p[0].diem, bd: m.p[1].diem, aD: m.p[0].dung, bD: m.p[1].dung, kq: m.kq, ly: m.lyDo,
    };
    bxhNho = new Map();
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || { rows: [] };
      const han = d.vnWeekKey(now() - GIU_TUAN * 7 * 864e5);
      all.rows = (all.rows || []).filter((x) => x.week >= han).concat([r]).slice(-20000);
      d.writeJsonFile(FILE, all);
      return;
    }
    await d.db().query('INSERT IGNORE INTO dau_mot (id, week, ms, a_id, b_id, a_diem, b_diem, a_dung, b_dung, kq, ly_do) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
      [r.id, r.week, r.ms, r.a, r.b, r.ad, r.bd, r.aD, r.bD, r.kq, r.ly]);
  }
  async function ketQuaTuan(week) {
    const x = bxhNho.get(week);
    if (x && now() - x.t < 30000) return x.rows;
    let rows;
    if (!d.USE_DB) rows = ((d.readJsonFile(FILE) || {}).rows || []).filter((r) => r.week === week);
    else {
      const [rs] = await d.db().query('SELECT id, ms, a_id, b_id, kq FROM dau_mot WHERE week = ? ORDER BY ms', [week]);
      rows = rs.map((r) => ({ id: r.id, ms: Number(r.ms), a: r.a_id, b: r.b_id, kq: r.kq }));
    }
    rows.sort((p, q) => p.ms - q.ms);
    bxhNho.set(week, { t: now(), rows });
    return rows;
  }
  // Thong ke tuan tung em: tran, thang, thua, hoa, chuoi (dang thang lien), chuoiMax (trong tuan)
  function thongKe(rows) {
    const tk = {};
    const cua = (id) => tk[id] || (tk[id] = { id, tran: 0, thang: 0, thua: 0, hoa: 0, chuoi: 0, chuoiMax: 0 });
    rows.forEach((r) => {
      [['a', r.a], ['b', r.b]].forEach(([s, id]) => {
        if (!id) return;
        const x = cua(id);
        x.tran++;
        if (r.kq === 'h') { x.hoa++; x.chuoi = 0; } else if (r.kq === s) { x.thang++; x.chuoi++; if (x.chuoi > x.chuoiMax) x.chuoiMax = x.chuoi; } else { x.thua++; x.chuoi = 0; }
      });
    });
    return tk;
  }

  /* ---------------- tien ich route ---------------- */
  async function emCua(req) {
    const u = req.user;
    online.set(u.id, now());
    const lop = await lopCua(u.id);
    return { uid: u.id, ten: u.name || 'Học sinh', lop: lop.id, tenLop: lop.ten };
  }
  function tranDangCo(uid) {
    const id = cuaEm.get(uid);
    const m = id && tran.get(id);
    if (!m) { if (id) cuaEm.delete(uid); return null; }
    chay(m);
    return m;
  }
  const dangDau = (m) => m && m.pha !== 'het';
  function xoaPhong(ma) {
    const ph = phong.get(ma);
    if (ph && phongCua.get(ph.chu) === ma) phongCua.delete(ph.chu);
    phong.delete(ma);
  }
  function maMoi() {
    for (let k = 0; k < 60; k++) { const ma = String(crypto.randomInt(1000, 10000)); if (!phong.has(ma)) return ma; }
    return null;
  }
  async function vaoTranVoi(a, b) {
    // a, b: { uid, ten, lop, user } (b null = ro-bot)
    if (dangGhep.has(a.uid) || (b && dangGhep.has(b.uid))) return { loi: 'Đang ghép trận, đợi một giây nhé.', ban: true };
    dangGhep.add(a.uid); if (b) dangGhep.add(b.uid);
    try { return await taoTranVoi(a, b); } finally { dangGhep.delete(a.uid); if (b) dangGhep.delete(b.uid); }
  }
  async function taoTranVoi(a, b) {
    const [ba, bb] = await Promise.all([baiCua(a.user), b ? baiCua(b.user) : null]);
    const bai = chonBai(ba, bb);
    const cau = taoBo(bai.urls, bai.cap);
    if (cau.length < IT_NHAT) return { loi: b ? 'Hai bạn chưa có đủ bài chung để ra câu hỏi — mỗi bạn học thêm 1 bài nhé.' : 'Em cần học ít nhất 1 bài có từ vựng thì mới đấu được nhé.' };
    const av = await avCua([a.uid, b && b.uid]);
    a.av = av[a.uid] || null; if (b) b.av = av[b.uid] || null;
    return { m: taoTran(a, b, { urls: bai.urls, cap: bai.cap, cach: bai.cach }, cau) };
  }
  const findUser = async (uid) => {
    // chi can { id, name, level, capHoc } cho baiOnCua; lay qua hang cho / phong (da luu user luc vao)
    const x = userNho.get(uid);
    return x ? x : null;
  };
  const userNho = new Map(); // uid -> req.user gan nhat (de tao tran cho ban kia trong hang cho / phong)
  function nhoUser(u) { userNho.set(u.id, { id: u.id, name: u.name, level: u.level, capHoc: u.capHoc || '' }); if (userNho.size > 5000) userNho.delete(userNho.keys().next().value); }

  /* ---------------- routes ---------------- */
  const R = (fn) => [d.requireAuth, d.asyncRoute(async (req, res) => { nhoUser(req.user); return fn(req, res); })];

  // Sanh: thong tin em + ban cung lop online + loi moi + tran dang co (hoi ~2,5 giay)
  app.get('/api/dau/sanh', ...R(async (req, res) => {
    const em = await emCua(req);
    const bo = await baiCua(req.user);
    const m = tranDangCo(em.uid);
    const t = now();
    // ban cung lop dang online
    let ban = [];
    if (em.lop) {
      const st = await d.loadClassState();
      const ten = await d.loadUserNames();
      const ids = Object.keys(st.members).filter((id) => id !== em.uid && st.members[id].classId === em.lop && t - (online.get(id) || 0) < ONLINE_MS);
      const av = await avCua(ids.slice(0, 60));
      ban = ids.slice(0, 60).map((id) => {
        const tm = tran.get(cuaEm.get(id) || '');
        return { id, ten: ten[id] || 'Bạn cùng lớp', av: av[id] || null, ranh: !dangDau(tm) && !hangCho.has(id) ? 1 : 0, cho: hangCho.has(id) ? 1 : 0 };
      }).sort((x, y) => y.ranh - x.ranh || x.ten.localeCompare(y.ten, 'vi'));
    }
    // loi thach dau gui toi em
    const ten = await d.loadUserNames();
    const loiMoi = [];
    for (const ph of phong.values()) {
      if (ph.den === em.uid && !ph.tranId && !ph.tuChoi && t - ph.tao < PHONG_HET_MS) loiMoi.push({ ma: ph.ma, ten: ten[ph.chu] || 'Bạn cùng lớp', id: ph.chu });
    }
    const avM = await avCua(loiMoi.map((x) => x.id));
    loiMoi.forEach((x) => { x.av = avM[x.id] || null; });
    // phong em dang mo
    const maEm = phongCua.get(em.uid);
    const ph = maEm && phong.get(maEm);
    res.json({
      toi: { id: em.uid, ten: em.ten, lop: em.tenLop, coBai: bo.soTu >= 4, soBai: bo.urls.length, nguon: bo.nguon, av: (await avCua([em.uid]))[em.uid] || null },
      tran: m ? { id: m.id, dang: dangDau(m) } : null,
      cho: hangCho.has(em.uid),
      phong: ph ? { ma: ph.ma, den: ph.den ? (ten[ph.den] || '') : '', tuChoi: !!ph.tuChoi } : null,
      ban, loiMoi,
    });
  }));

  // Tim doi thu (goi lai moi ~1 giay de giu cho trong hang): -> { tran } | { cho: true, giay, botOk }
  app.post('/api/dau/tim', ...R(async (req, res) => {
    const em = await emCua(req);
    const m0 = tranDangCo(em.uid);
    if (dangDau(m0)) return res.json({ tran: m0.id });
    if (dangGhep.has(em.uid)) return res.json({ cho: true, giay: 0, botOk: false });
    const bo = await baiCua(req.user);
    if (bo.soTu < 4) return res.status(400).json({ error: 'Em cần học ít nhất 1 bài có từ vựng thì mới đấu được nhé.' });
    const t = now();
    let x = hangCho.get(em.uid);
    if (!x) {
      if (hangCho.size >= MAX_HANG_CHO) return res.status(503).json({ error: 'Đang có quá nhiều bạn chờ, thử lại sau ít phút nhé.' });
      if (tran.size >= MAX_TRAN) return res.status(503).json({ error: 'Máy chủ đang bận nhiều trận, thử lại sau nhé.' });
      x = { uid: em.uid, ten: em.ten, lop: em.lop, cap: bo.cap, tu: t, hoi: t };
      hangCho.set(em.uid, x);
    }
    x.hoi = t;
    // tim ban ghep tot nhat
    for (const [uid, y] of hangCho) if (t - y.hoi > HANG_CHO_HET_MS) hangCho.delete(uid);
    const cho = t - x.tu;
    let tot = null, diemTot = -1;
    for (const y of hangCho.values()) {
      if (y.uid === em.uid || dangGhep.has(y.uid) || dangDau(tran.get(cuaEm.get(y.uid) || '')) || (x.boQua && x.boQua.indexOf(y.uid) >= 0)) continue;
      const lau = Math.max(cho, t - y.tu);
      const cungLop = !!(x.lop && x.lop === y.lop), cungCap = !!(x.cap && x.cap === y.cap);
      const dd = cungLop && cungCap ? 3 : cungCap ? 2 : cungLop ? (lau >= GHEP_LOP_MS ? 1 : -1) : (lau >= GHEP_BAT_KY_MS ? 0 : -1);
      if (dd > diemTot || (dd === diemTot && tot && y.tu < tot.tu)) { tot = y; diemTot = dd; }
    }
    if (tot && diemTot >= 0) {
      const ub = await findUser(tot.uid);
      if (ub && !dangGhep.has(tot.uid) && hangCho.has(tot.uid) && hangCho.has(em.uid)) {
        hangCho.delete(tot.uid); hangCho.delete(em.uid);
        const r = await vaoTranVoi({ uid: em.uid, ten: em.ten, lop: em.lop, user: req.user }, { uid: tot.uid, ten: tot.ten, lop: tot.lop, user: ub });
        if (r.m) return res.json({ tran: r.m.id });
        // khong ghep duoc: ca hai ve hang cho; khong co bai chung thi lan sau bo qua ban nay
        if (!dangDau(tran.get(cuaEm.get(em.uid) || ''))) hangCho.set(em.uid, x);
        if (!dangDau(tran.get(cuaEm.get(tot.uid) || ''))) hangCho.set(tot.uid, tot);
        if (!r.ban) { x.boQua = (x.boQua || []).concat(tot.uid).slice(-20); tot.boQua = (tot.boQua || []).concat(em.uid).slice(-20); }
      }
    }
    res.json({ cho: true, giay: Math.floor(cho / 1000), botOk: cho >= BOT_SAU_MS, soCho: hangCho.size });
  }));

  app.post('/api/dau/tim/huy', ...R(async (req, res) => {
    hangCho.delete(req.user.id);
    res.json({ ok: true });
  }));

  // Dau voi ro-bot (sau khi cho lau, hoac tu chon)
  app.post('/api/dau/bot', ...R(async (req, res) => {
    const em = await emCua(req);
    const m0 = tranDangCo(em.uid);
    if (dangDau(m0)) return res.json({ tran: m0.id });
    if (!conNhip('bot', em.uid, 3600000, BOT_MOI_GIO)) return res.status(429).json({ error: 'Em đấu với rô-bốt nhiều quá rồi, nghỉ một lát nhé.' });
    if (tran.size >= MAX_TRAN) return res.status(503).json({ error: 'Máy chủ đang bận nhiều trận, thử lại sau nhé.' });
    hangCho.delete(em.uid);
    const r = await vaoTranVoi({ uid: em.uid, ten: em.ten, lop: em.lop, user: req.user }, null);
    if (!r.m) return res.status(r.ban ? 409 : 400).json({ error: r.loi });
    demNhip('bot', em.uid, 3600000, BOT_MOI_GIO);
    hangCho.delete(em.uid);
    res.json({ tran: r.m.id });
  }));

  // Tao phong moi ban (ma 4 so) — { den: uid } = thach dau 1 ban cung lop dang online
  app.post('/api/dau/phong', ...R(async (req, res) => {
    const em = await emCua(req);
    const m0 = tranDangCo(em.uid);
    if (dangDau(m0)) return res.status(409).json({ error: 'Em đang có một trận chưa xong.', tran: m0.id });
    const bo = await baiCua(req.user);
    if (bo.soTu < 4) return res.status(400).json({ error: 'Em cần học ít nhất 1 bài có từ vựng thì mới đấu được nhé.' });
    let den = typeof req.body?.den === 'string' ? req.body.den : '';
    if (den) {
      const st = await d.loadClassState();
      const mb = st.members[den];
      if (den === em.uid || !em.lop || !mb || mb.classId !== em.lop) return res.status(400).json({ error: 'Chỉ thách đấu được bạn cùng lớp thôi nhé.' });
      if (now() - (online.get(den) || 0) > ONLINE_MS) return res.status(409).json({ error: 'Bạn ấy vừa rời mạng rồi.' });
      if (dangDau(tran.get(cuaEm.get(den) || ''))) return res.status(409).json({ error: 'Bạn ấy đang đấu trận khác, đợi chút nhé.' });
      let den5 = 0;
      for (const ph of phong.values()) if (ph.den === den && !ph.tranId && !ph.tuChoi) den5++;
      if (den5 >= 5) return res.status(429).json({ error: 'Bạn ấy đang có nhiều lời mời quá rồi.' });
    }
    if (!demNhip('phong', em.uid, 3600000, TAO_MOI_GIO)) return res.status(429).json({ error: 'Em tạo phòng nhiều quá, đợi một lúc rồi thử lại nhé.' });
    const cu = phongCua.get(em.uid);
    if (cu) xoaPhong(cu);
    if (phong.size >= MAX_PHONG) return res.status(503).json({ error: 'Máy chủ đang có quá nhiều phòng, thử lại sau nhé.' });
    const ma = maMoi();
    if (!ma) return res.status(503).json({ error: 'Chưa tạo được mã phòng, thử lại nhé.' });
    hangCho.delete(em.uid);
    phong.set(ma, { ma, chu: em.uid, den: den || '', tao: now(), tuChoi: false, tranId: '' });
    phongCua.set(em.uid, ma);
    res.json({ ma, link: '/dau?ma=' + ma });
  }));

  app.post('/api/dau/phong/huy', ...R(async (req, res) => {
    const ma = phongCua.get(req.user.id);
    if (ma) xoaPhong(ma);
    res.json({ ok: true });
  }));

  // Vao phong bang ma (ca nhan loi thach dau)
  app.post('/api/dau/phong/vao', ...R(async (req, res) => {
    const em = await emCua(req);
    const ma = String(req.body?.ma || '').replace(/\D/g, '');
    const m0 = tranDangCo(em.uid);
    if (dangDau(m0)) return res.status(409).json({ error: 'Em đang có một trận chưa xong.', tran: m0.id });
    if (!conNhip('saima', em.uid, 600000, SAI_MA_10P)) return res.status(429).json({ error: 'Em nhập sai mã nhiều lần quá, đợi vài phút nhé.' });
    const ph = phong.get(ma);
    if (!ph || now() - ph.tao > PHONG_HET_MS) { demNhip('saima', em.uid, 600000, SAI_MA_10P); return res.status(404).json({ error: 'Không tìm thấy phòng ' + (ma || '') + '. Em kiểm tra lại mã nhé.' }); }
    if (ph.chu === em.uid) return res.status(400).json({ error: 'Đây là phòng của em — gửi mã cho bạn nhé.' });
    if (ph.den && ph.den !== em.uid) return res.status(403).json({ error: 'Lời thách đấu này dành cho bạn khác.' });
    if (ph.tranId || ph.dangVao) return res.status(409).json({ error: 'Phòng này đã có người vào rồi.' });
    const chu = await findUser(ph.chu);
    if (!chu || dangDau(tran.get(cuaEm.get(ph.chu) || ''))) { xoaPhong(ma); return res.status(409).json({ error: 'Chủ phòng đang bận trận khác.' }); }
    const st = await d.loadClassState();
    const ten = await d.loadUserNames();
    const lopChu = st.members[ph.chu] ? st.members[ph.chu].classId : '';
    ph.dangVao = true;
    const r = await vaoTranVoi({ uid: ph.chu, ten: ten[ph.chu] || chu.name || 'Bạn', lop: lopChu, user: chu }, { uid: em.uid, ten: em.ten, lop: em.lop, user: req.user });
    ph.dangVao = false;
    if (!r.m) return res.status(r.ban ? 409 : 400).json({ error: r.loi });
    ph.tranId = r.m.id;
    xoaPhong(ma);
    res.json({ tran: r.m.id });
  }));

  app.post('/api/dau/phong/tu-choi', ...R(async (req, res) => {
    const ph = phong.get(String(req.body?.ma || ''));
    if (ph && ph.den === req.user.id) ph.tuChoi = true;
    res.json({ ok: true });
  }));

  // Trang thai tran (hoi ~700 ms)
  app.get('/api/dau/tran/:id', ...R(async (req, res) => {
    const m = tran.get(String(req.params.id));
    const s = m ? benCua(m, req.user.id) : -1;
    if (!m || s < 0) return res.status(404).json({ error: 'Không tìm thấy trận đấu.' });
    online.set(req.user.id, now());
    const p = m.p[s];
    p.thay = true; p.hoi = now(); m.cham = now();
    chay(m);
    res.json(trangThai(m, s));
  }));

  // Tra loi: { i, chon }
  app.post('/api/dau/tran/:id/tl', ...R(async (req, res) => {
    const m = tran.get(String(req.params.id));
    const s = m ? benCua(m, req.user.id) : -1;
    if (!m || s < 0) return res.status(404).json({ error: 'Không tìm thấy trận đấu.' });
    const t = now();
    m.p[s].hoi = t; m.p[s].thay = true; m.cham = t;
    chay(m);
    const i = Number(req.body?.i), chon = Number(req.body?.chon);
    if (m.pha !== 'choi' || i !== m.i || m.loLuc || m.p[s].tl[i]) return res.status(409).json({ error: 'Câu này đã đóng.', tt: trangThai(m, s) });
    if (t > m.cauLuc + Q_MS + NOP_TRE_MS) return res.status(409).json({ error: 'Hết giờ rồi.', tt: trangThai(m, s) });
    const q = m.cau[i];
    if (!Number.isInteger(chon) || chon < 0 || chon >= q.opts.length) return res.status(400).json({ error: 'Đáp án không hợp lệ.' });
    const x = ghiTl(m, s, chon, t);
    chay(m);
    res.json({ dung: x.dung, diem: x.diem, dap: q.dung, tt: trangThai(m, s) });
  }));

  // Roi tran (bo cuoc neu dang dau)
  app.post('/api/dau/tran/:id/bo', ...R(async (req, res) => {
    const m = tran.get(String(req.params.id));
    const s = m ? benCua(m, req.user.id) : -1;
    if (!m || s < 0) return res.json({ ok: true });
    if (m.pha !== 'het') ketThuc(m, s === 0 ? 'b' : 'a', 'roi');
    m.p[s].hoi = 0;
    if (cuaEm.get(req.user.id) === m.id) cuaEm.delete(req.user.id);
    res.json({ ok: true });
  }));

  // Dau lai cung doi thu (ca hai bam) — ro-bot thi vao ngay
  app.post('/api/dau/tran/:id/lai', ...R(async (req, res) => {
    const m = tran.get(String(req.params.id));
    const s = m ? benCua(m, req.user.id) : -1;
    if (!m || s < 0) return res.status(404).json({ error: 'Không tìm thấy trận đấu.' });
    m.p[s].hoi = now();
    if (m.pha !== 'het') return res.status(409).json({ error: 'Trận chưa xong.' });
    if (m.tranMoi) return res.json({ tran: m.tranMoi });
    const d2 = 1 - s;
    if (m.p[d2].uid && now() - m.p[d2].hoi > 12000) return res.status(409).json({ error: 'Bạn ấy đã rời trận rồi.' });
    if (m.bot && !conNhip('bot', req.user.id, 3600000, BOT_MOI_GIO)) return res.status(429).json({ error: 'Em đấu với rô-bốt nhiều quá rồi, nghỉ một lát nhé.' });
    if (tran.size >= MAX_TRAN) return res.status(503).json({ error: 'Máy chủ đang bận nhiều trận, thử lại sau nhé.' });
    m.lai[s] = true;
    if (!m.lai[d2]) return res.json({ cho: true });
    const a = m.p[0], b = m.p[1];
    const ua = a.uid === req.user.id ? req.user : await findUser(a.uid);
    const ub = b.uid ? (b.uid === req.user.id ? req.user : await findUser(b.uid)) : null;
    if (!ua || (b.uid && !ub)) return res.status(409).json({ error: 'Bạn ấy đã rời trận rồi.' });
    // cung bo bai, cau moi (tranh lap lai dung bo cu)
    const cu = {}; m.cau.forEach((q) => { cu[q.loai + '|' + q.zh + '|' + q.nghe] = 1; });
    let cau = taoBo(m.bai.urls, m.bai.cap);
    const moi = cau.filter((q) => !cu[q.loai + '|' + q.zh + '|' + q.nghe]);
    if (moi.length >= IT_NHAT) cau = moi.concat(cau.filter((q) => moi.indexOf(q) < 0)).slice(0, SO_CAU);
    if (cau.length < IT_NHAT) return res.status(400).json({ error: 'Chưa ra được bộ câu mới.' });
    if (m.bot) demNhip('bot', req.user.id, 3600000, BOT_MOI_GIO);
    const m2 = taoTran({ uid: a.uid, ten: a.ten, lop: a.lop, av: a.av }, b.uid ? { uid: b.uid, ten: b.ten, lop: b.lop, av: b.av } : null, m.bai, cau, m.lan + 1);
    m.tranMoi = m2.id;
    res.json({ tran: m2.id });
  }));

  // Bang xep hang tuan: ?pham=lop|all
  app.get('/api/dau/bxh', ...R(async (req, res) => {
    const em = await emCua(req);
    const week = d.vnWeekKey();
    const tk = thongKe(await ketQuaTuan(week));
    const st = await d.loadClassState();
    const ten = await d.loadUserNames();
    const pham = req.query.pham === 'all' || !em.lop ? 'all' : 'lop';
    let ds = Object.values(tk).filter((x) => ten[x.id] && (pham === 'all' || (st.members[x.id] && st.members[x.id].classId === em.lop)));
    ds.forEach((x) => { x.tiLe = x.tran ? Math.round((x.thang / x.tran) * 100) : 0; });
    ds.sort((a, b) => b.thang - a.thang || b.tiLe - a.tiLe || b.chuoiMax - a.chuoiMax || a.tran - b.tran);
    const hang = ds.map((x, i) => {
      const lop = st.members[x.id] ? st.members[x.id].classId : '';
      return { hang: i + 1, id: x.id, ten: tenCho(em.lop, lop, ten[x.id]), la: x.id === em.uid, tran: x.tran, thang: x.thang, thua: x.thua, hoa: x.hoa, tiLe: x.tiLe, chuoi: x.chuoi, chuoiMax: x.chuoiMax };
    });
    const top = hang.slice(0, 30);
    const toi = hang.find((x) => x.la) || null;
    const av = await avCua(top.map((x) => x.id));
    top.forEach((x) => { x.av = av[x.id] || null; });
    // thu Hai tuan sau 00:00 gio VN
    const reset = Date.parse(week + 'T00:00:00Z') - d.VN_OFFSET_MS + 7 * 864e5;
    res.json({ week, pham, coLop: !!em.lop, tenLop: em.tenLop, ds: top, toi, toiNgoai: toi && toi.hang > 30, conMs: Math.max(0, reset - now()) });
  }));

  return { initTable };
};
