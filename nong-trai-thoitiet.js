// Ban tin thoi tiet 天气预报 cho nong trai (/nong-trai) — 2026-11-24.
//  - Moi ngay 1 ban tin radio ngan bang tieng Trung (2–3 cau, may doc to): nhiet do + thoi tiet hom nay / ngay mai
//    + canh bao thien tai ngay mai. Noi dung co dinh cua tinh nang (chu Han chuan + pinyin + nghia), tu vung thoi
//    tiet don gian (晴天 阴天 下雨 大雨 刮风 下雪 打雷 有雾 + 热 冷 度 + so).
//  - DU BAO DUNG THAT: thien tai cua ngay mai duoc chon TRUOC va ghi vao f.taiDb = { 'YYYY-MM-DD': kieu }
//    (vaoHook luc em mo nong trai, cung luat voi nong-trai.js xetThienTai: khac 6 kieu gan nhat, kieu can vat nuoi
//    chi khi co vat nuoi). xetThienTai (nong-trai.js) dung kieu da chon nay khi thien tai ap den.
//  - Nghe xong tra loi 2 cau (cham o may chu): dung moi cau +3 xu +2 kinh nghiem (1 lan / ngay).
//  - Chuan bi 准备 truoc cho thien tai ngay mai (1 lan / ngay, phai nghe ban tin truoc): lam san CB_SAN phan viec
//    chong thien tai (f.taiCb = { d: ngay mai, k, n }) -> mai thien tai den, thanh chong da co san n/can
//    (van con it nhat 1 phan de em tu chong va nhan thuong). Gia: dung 2/2 -> mien phi, 1/2 -> 10 xu, 0/2 -> 20 xu.
//  - Bon mua (nong-trai-bonmua.js): nhiet do theo mua; mua dong lanh hon, co the co tuyet (下雪).
// Du lieu cua em: f.ttb = { d, ban: { chu, mai, hn, tai, q }, tl: [true/false...], dung }, f.taiDb, f.taiCb.
const BonMua = (() => { try { return require('./nong-trai-bonmua'); } catch (e) { return null; } })();

const NGAY_MS = 86400000;
const XU_DUNG = 3, XP_DUNG = 2, GIA_CB = [20, 10, 0], CB_SAN = 3, LV_TAI = 2, TAI_NHO = 6; // TAI_NHO = nong-trai.js
const tu = (zh, py, vn) => ({ zh, py, vn });

// Thoi tiet: tu vung + cum tu dung trong cau "今天/明天 ___，__度。" + hinh /images/farm/thoitiet-<k>.svg
const TT = {
  qing: { tu: tu('晴天', 'qíngtiān', 'trời nắng'), cum: tu('是晴天', 'shì qíngtiān', 'trời nắng'), nhom: 'kho' },
  yin: { tu: tu('阴天', 'yīntiān', 'trời âm u'), cum: tu('是阴天', 'shì yīntiān', 'trời âm u'), nhom: 'may' },
  yu: { tu: tu('下雨', 'xià yǔ', 'trời mưa'), cum: tu('下雨', 'xià yǔ', 'có mưa'), nhom: 'mua' },
  dayu: { tu: tu('大雨', 'dà yǔ', 'mưa to'), cum: tu('下大雨', 'xià dà yǔ', 'mưa to'), nhom: 'mua' },
  feng: { tu: tu('刮风', 'guā fēng', 'nổi gió'), cum: tu('刮大风', 'guā dà fēng', 'gió to'), nhom: 'gio' },
  xue: { tu: tu('下雪', 'xià xuě', 'tuyết rơi'), cum: tu('下雪', 'xià xuě', 'có tuyết rơi'), nhom: 'tuyet' },
  lei: { tu: tu('打雷', 'dǎ léi', 'có sấm'), cum: tu('打雷', 'dǎ léi', 'có sấm sét'), nhom: 'mua' },
  wu: { tu: tu('有雾', 'yǒu wù', 'có sương mù'), cum: tu('有大雾', 'yǒu dà wù', 'sương mù dày'), nhom: 'may' },
};
// Tu chung (hien sau khi nghe, bam de doc)
const TU_THEM = [tu('天气', 'tiānqì', 'thời tiết'), tu('天气预报', 'tiānqì yùbào', 'dự báo thời tiết'), tu('今天', 'jīntiān', 'hôm nay'),
  tu('明天', 'míngtiān', 'ngày mai'), tu('度', 'dù', 'độ (nhiệt độ)'), tu('零下', 'língxià', 'âm (dưới 0 độ)'), tu('热', 'rè', 'nóng'),
  tu('冷', 'lěng', 'lạnh'), tu('注意', 'zhùyì', 'chú ý')];
// Thoi tiet + nhiet do + cau canh bao cho tung kieu thien tai (TAI trong nong-trai.js)
const THEO_TAI = {
  gh: { w: 'qing', nong: 1, bao: tu('明天有干旱，不下雨。', 'Míngtiān yǒu gānhàn, bú xià yǔ.', 'Ngày mai có hạn hán, trời không mưa.') },
  sau: { w: 'yin', bao: tu('明天菜上有很多虫子。', 'Míngtiān cài shang yǒu hěn duō chóngzi.', 'Ngày mai trên rau có rất nhiều sâu.') },
  mua: { w: 'dayu', bao: tu('明天有暴雨。', 'Míngtiān yǒu bàoyǔ.', 'Ngày mai có mưa bão.') },
  ret: { w: 'yin', lanh: 1, bao: tu('明天有寒潮，很冷。', 'Míngtiān yǒu háncháo, hěn lěng.', 'Ngày mai có đợt rét, rất lạnh.') },
  bao: { w: 'feng', bao: tu('明天有台风，风很大。', 'Míngtiān yǒu táifēng, fēng hěn dà.', 'Ngày mai có bão, gió rất to.') },
  lu: { w: 'dayu', bao: tu('明天河水很多，有洪水。', 'Míngtiān hé shuǐ hěn duō, yǒu hóngshuǐ.', 'Ngày mai nước sông dâng cao, có lũ.') },
  chuot: { w: 'yin', bao: tu('明天仓库里有老鼠。', 'Míngtiān cāngkù li yǒu lǎoshǔ.', 'Ngày mai trong kho có chuột.') },
  muada: { w: 'lei', bao: tu('明天下冰雹。', 'Míngtiān xià bīngbáo.', 'Ngày mai có mưa đá.') },
  nong: { w: 'qing', nong: 1, bao: tu('明天太热了，多喝水！', 'Míngtiān tài rè le, duō hē shuǐ!', 'Ngày mai nóng quá, uống nhiều nước nhé!') },
  suong: { w: 'wu', bao: tu('明天有大雾，看不见路。', 'Míngtiān yǒu dà wù, kàn bu jiàn lù.', 'Ngày mai sương mù dày, không nhìn thấy đường.') },
  cat: { w: 'feng', bao: tu('明天有沙尘暴。', 'Míngtiān yǒu shāchénbào.', 'Ngày mai có bão cát.') },
  chau: { w: 'qing', bao: tu('明天有很多蚂蚱。', 'Míngtiān yǒu hěn duō màzha.', 'Ngày mai có rất nhiều châu chấu.') },
};
// Thoi tiet binh thuong theo mua + khoang nhiet do
const MUA_TT = {
  xuan: { ds: ['qing', 'yin', 'yu', 'feng'], t: [16, 24] },
  ha: { ds: ['qing', 'qing', 'yu', 'lei', 'yin'], t: [29, 34] },
  thu: { ds: ['qing', 'yin', 'feng', 'yu'], t: [18, 26] },
  dong: { ds: ['yin', 'qing', 'feng', 'xue'], t: [4, 12] },
};
const CHAO = [tu('大家好！', 'Dàjiā hǎo!', 'Chào mọi người!'), tu('早上好！', 'Zǎoshang hǎo!', 'Chào buổi sáng!'), tu('你们好！', 'Nǐmen hǎo!', 'Chào các bạn!')];
const CHU_Y = tu('请大家注意！', 'Qǐng dàjiā zhùyì!', 'Mọi người chú ý nhé!');
const HEN = tu('明天见！', 'Míngtiān jiàn!', 'Hẹn gặp lại ngày mai!');
const HOI = {
  wMai: tu('明天天气怎么样？', 'Míngtiān tiānqì zěnmeyàng?', 'Ngày mai thời tiết thế nào?'),
  wHn: tu('今天天气怎么样？', 'Jīntiān tiānqì zěnmeyàng?', 'Hôm nay thời tiết thế nào?'),
  tMai: tu('明天多少度？', 'Míngtiān duōshao dù?', 'Ngày mai bao nhiêu độ?'),
  tHn: tu('今天多少度？', 'Jīntiān duōshao dù?', 'Hôm nay bao nhiêu độ?'),
  viec: tu('我们应该做什么？', 'Wǒmen yīnggāi zuò shénme?', 'Để chuẩn bị cho ngày mai, chúng ta nên làm gì?'),
};
const TEN = { zh: '天气预报', py: 'tiānqì yùbào', vn: 'Bản tin thời tiết' };
const CB = { zh: '准备', py: 'zhǔnbèi', vn: 'Chuẩn bị' };

// ---- so tieng Trung (nhiet do -9..39) ----
const SO_ZH = '零一二三四五六七八九', SO_PY = ['líng', 'yī', 'èr', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ'];
function soZh(n) {
  if (n < 0) { const x = soZh(-n); return { zh: '零下' + x.zh, py: 'língxià ' + x.py }; }
  if (n < 10) return { zh: SO_ZH[n], py: SO_PY[n] };
  const c = Math.floor(n / 10), u = n % 10;
  return { zh: (c > 1 ? SO_ZH[c] : '') + '十' + (u ? SO_ZH[u] : ''), py: (c > 1 ? SO_PY[c] : '') + 'shí' + (u ? (u === 2 ? "'" : '') + SO_PY[u] : '') }; // shí'èr
}
// ---- ngau nhien co hat giong (ban tin co dinh trong ngay cho tung em) ----
function rngTu(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => {
    h = (h + 0x6D2B79F5) | 0;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const chon1 = (r, a) => a[Math.floor(r() * a.length)];
const tron = (r, a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const ngaySau = (dk) => new Date(Date.parse(dk + 'T00:00:00Z') + NGAY_MS).toISOString().slice(0, 10);
function tuanCua(dk) {
  const t = Date.parse(dk + 'T00:00:00Z'), dow = (new Date(t).getUTCDay() + 6) % 7;
  return new Date(t - dow * NGAY_MS).toISOString().slice(0, 10);
}
function muaCua(dk) {
  if (!BonMua || !BonMua.muaTuan || !BonMua.MUA) return 'thu';
  try { return BonMua.MUA[BonMua.muaTuan(tuanCua(dk)).i].k; } catch (e) { return 'thu'; }
}
const khong2 = (t) => (t === 2 ? 3 : t === -2 ? -3 : t); // tranh 二度 / 两度
// Thoi tiet + nhiet do cua 1 ngay (kieu thien tai k hoac null)
function thoiTietNgay(k, mua, r) {
  const m = MUA_TT[mua] || MUA_TT.thu, x = k && THEO_TAI[k];
  const trong = (a, b) => a + Math.floor(r() * (b - a + 1));
  let w = x ? x.w : chon1(r, m.ds), t;
  if (x && x.nong) t = mua === 'ha' ? trong(36, 39) : mua === 'dong' ? trong(24, 28) : trong(30, 34); // han han / nang nong: nong hon han mua
  else if (x && x.lanh) { if (mua === 'dong') { w = 'xue'; t = trong(-4, 1); } else t = trong(3, 8); }
  else if (w === 'xue') t = trong(-3, 1);
  else t = trong(m.t[0], m.t[1]);
  return { w, t: khong2(t) };
}

function gan(app, d, h) {
  const loi = h.loi, CON = h.CON;
  const TAI = (h.CATALOG && h.CATALOG.TAI) || {};
  const hnKey = () => d.vnDayKey();
  const lv = (f) => h.lvTuXp(f.xp);

  // ---- chon truoc thien tai hom nay (neu chua ap den) + ngay mai; cung luat voi xetThienTai ----
  function chonTai(gan, coCon, r) {
    const hop = (k) => !TAI[k].canCon || coCon;
    let ds = Object.keys(TAI).filter((k) => hop(k) && gan.indexOf(k) < 0);
    if (!ds.length) ds = Object.keys(TAI).filter((k) => hop(k) && k !== gan[0]);
    return ds.length ? chon1(r, ds) : null;
  }
  function lapDuBao(uid, f) {
    const hn = hnKey(), mai = ngaySau(hn);
    let doi = false;
    if (f.taiDb && typeof f.taiDb === 'object') {
      Object.keys(f.taiDb).forEach((k) => { if (k < hn || !TAI[f.taiDb[k]]) { delete f.taiDb[k]; doi = true; } });
      if (!Object.keys(f.taiDb).length) { delete f.taiDb; doi = true; }
    } else if (f.taiDb !== undefined) { delete f.taiDb; doi = true; }
    if (f.taiCb && (!f.taiCb.d || f.taiCb.d < hn)) { delete f.taiCb; doi = true; }
    if (lv(f) < LV_TAI || !Object.keys(TAI).length) return doi;
    const r = rngTu('tai|' + uid + '|' + hn);
    const coCon = (f.o || []).some((o) => CON[o.k]);
    let ganDay = Array.isArray(f.taiDa) ? f.taiDa.slice(0, TAI_NHO) : [];
    const daAp = f.taiXet === hn; // thien tai hom nay da ap den (da nam o f.taiDa[0])
    if (!daAp) {
      if (!f.taiDb || !TAI[f.taiDb[hn]]) { const k = chonTai(ganDay, coCon, r); if (k) { f.taiDb = f.taiDb || {}; f.taiDb[hn] = k; doi = true; } }
      if (f.taiDb && f.taiDb[hn]) ganDay = [f.taiDb[hn]].concat(ganDay).slice(0, TAI_NHO);
    }
    if (!f.taiDb || !TAI[f.taiDb[mai]]) { const k = chonTai(ganDay, coCon, r); if (k) { f.taiDb = f.taiDb || {}; f.taiDb[mai] = k; doi = true; } }
    return doi;
  }
  h.vaoHook.push(async (user, f) => lapDuBao(user.id, f));

  // ---- tao ban tin cua hom nay ----
  function kieuHn(f, hn) {
    if (f.tai && f.tai.d === hn && TAI[f.tai.k]) return f.tai.k;
    return f.taiDb && TAI[f.taiDb[hn]] ? f.taiDb[hn] : null;
  }
  const kieuMai = (f, hn) => (f.taiDb && TAI[f.taiDb[ngaySau(hn)]] ? f.taiDb[ngaySau(hn)] : null);
  function cauNgay(chao, ten, x) {
    const so = soZh(x.t), c = TT[x.w].cum;
    const hoa = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return {
      zh: (chao ? chao.zh : '') + ten.zh + c.zh + '，' + so.zh + '度。',
      py: (chao ? chao.py + ' ' : '') + hoa(ten.py + ' ' + c.py + ', ' + so.py + ' dù.'),
      vn: (chao ? chao.vn + ' ' : '') + ten.vn + ' ' + c.vn + ', ' + x.t + ' độ.',
    };
  }
  function luaNhiet(r, dung, khac) {
    const ds = [dung];
    [khac, dung + 10, dung - 10, dung + 5, dung - 6, dung + 15].forEach((x) => { x = khong2(x); if (ds.length < 4 && ds.indexOf(x) < 0 && x >= -9 && x <= 45) ds.push(x); });
    return tron(r, ds);
  }
  function luaTroi(r, dung, khac) {
    const nhom = TT[dung].nhom, ds = [dung];
    if (khac && TT[khac].nhom !== nhom) ds.push(khac);
    tron(r, Object.keys(TT)).forEach((k) => { if (ds.length < 4 && ds.indexOf(k) < 0 && TT[k].nhom !== nhom && ds.every((x) => TT[x].nhom !== TT[k].nhom)) ds.push(k); });
    return tron(r, ds);
  }
  function taoBan(uid, f, hn) {
    const mai = ngaySau(hn), r = rngTu('ban|' + uid + '|' + hn);
    const kHn = kieuHn(f, hn), kMai = lv(f) >= LV_TAI ? kieuMai(f, hn) : null;
    // thoi tiet + nhiet do cua moi ngay co hat giong theo (em, ngay): ban tin hom nay noi '今天' dung bang '明天' hom qua
    const xHn = thoiTietNgay(kHn, muaCua(hn), rngTu('ngay|' + uid + '|' + hn)), xMai = thoiTietNgay(kMai, muaCua(mai), rngTu('ngay|' + uid + '|' + mai));
    const chu = [cauNgay(chon1(r, CHAO), tu('今天', 'jīntiān', 'Hôm nay'), xHn), cauNgay(null, tu('明天', 'míngtiān', 'Ngày mai'), xMai)];
    if (kMai) { const b = THEO_TAI[kMai].bao; chu.push({ zh: b.zh + CHU_Y.zh, py: b.py + ' ' + CHU_Y.py, vn: b.vn + ' ' + CHU_Y.vn }); } else chu.push(HEN);
    // cau 1: ngay mai troi the nao (chon hinh); cau 2: nhiet do / viec can lam / hom nay
    const q = [{ k: 'wMai', lua: luaTroi(r, xMai.w, xHn.w) }];
    q[0].dap = q[0].lua.indexOf(xMai.w);
    const loai2 = chon1(r, kMai ? ['tMai', 'viec', 'tMai', 'viec', 'tHn'] : ['tMai', 'tHn', 'wHn']);
    const q2 = { k: loai2 };
    if (loai2 === 'tMai') q2.lua = luaNhiet(r, xMai.t, xHn.t);
    if (loai2 === 'tHn') q2.lua = luaNhiet(r, xHn.t, xMai.t);
    if (loai2 === 'wHn') q2.lua = luaTroi(r, xHn.w, xMai.w);
    if (loai2 === 'viec') {
      const wM = THEO_TAI[kMai].w;
      const SINH = ['sau', 'chau', 'chuot']; // sau / chau chau / chuot: khong dat canh nhau (de nham)
      const khac = tron(r, Object.keys(TAI).filter((k) => k !== kMai && THEO_TAI[k] && TT[THEO_TAI[k].w].nhom !== TT[wM].nhom && TAI[k].viec !== TAI[kMai].viec &&
        !(SINH.indexOf(k) >= 0 && SINH.indexOf(kMai) >= 0)));
      const ds = [kMai];
      khac.forEach((k) => { if (ds.length < 4 && ds.every((x) => TAI[x].viec !== TAI[k].viec)) ds.push(k); });
      q2.lua = tron(r, ds);
    }
    q2.dap = q2.lua.indexOf(loai2 === 'tMai' ? xMai.t : loai2 === 'tHn' ? xHn.t : loai2 === 'wHn' ? xHn.w : kMai);
    q.push(q2);
    return { hn: xHn, mai: xMai, kHn, kMai, chu, q };
  }
  function bt(f) {
    const hn = hnKey();
    if (!f.ttb || f.ttb.d !== hn) return null;
    return f.ttb;
  }
  // tao / lam moi ban tin hom nay (chua tra loi cau nao thi cap nhat theo du bao moi nhat)
  function layBan(uid, f) {
    const hn = hnKey();
    let b = bt(f), doi = false;
    const kMai = lv(f) >= LV_TAI ? kieuMai(f, hn) : null;
    if (!b || (!b.tl.length && (b.ban.kMai !== kMai || b.ban.kHn !== kieuHn(f, hn)))) {
      f.ttb = b = { d: hn, ban: taoBan(uid, f, hn), tl: [], dung: 0 };
      doi = true;
    }
    return { b, doi };
  }
  const xong = (b) => !!b && b.tl.length >= b.ban.q.length;
  const daCb = (f) => !!(f.taiCb && f.taiCb.d === ngaySau(hnKey()));
  const giaCb = (b) => GIA_CB[Math.max(0, Math.min(2, b.dung | 0))];
  const ma = (s) => Buffer.from(encodeURIComponent(s)).toString('base64');
  const taiTom = (k) => (k && TAI[k] ? { k, zh: TAI[k].zh, py: TAI[k].py, vn: TAI[k].vn, hieu: TAI[k].hieu, viec: TAI[k].viec, don: TAI[k].don, dzh: TAI[k].dzh, dpy: TAI[k].dpy, can: TAI[k].can } : null);
  // nhan cua 1 lua chon (gui sau khi tra loi)
  function nhanLua(q, x) {
    if (q.k === 'wMai' || q.k === 'wHn') return Object.assign({ k: x }, TT[x].tu);
    if (q.k === 'viec') return { k: x, vn: TAI[x].viec, zh: TAI[x].dzh, py: TAI[x].dpy };
    const s = soZh(x);
    return { k: x, zh: s.zh + '度', py: s.py + ' dù', vn: x + ' độ' };
  }
  function cauChoHs(q) {
    const o = { k: q.k, hoi: HOI[q.k], kieu: q.k === 'viec' ? 'viec' : q.k.charAt(0) === 'w' ? 'w' : 't' };
    o.lua = q.k === 'viec' ? q.lua.map((x) => ({ k: x, vn: TAI[x].viec, zh: TAI[x].dzh, py: TAI[x].dpy })) : q.lua;
    return o;
  }
  // tu vung xuat hien trong ban tin
  function tuBan(ban) {
    const ds = [TT[ban.hn.w].tu];
    if (ban.mai.w !== ban.hn.w) ds.push(TT[ban.mai.w].tu);
    const chuAll = ban.chu.map((c) => c.zh).join('');
    TU_THEM.forEach((t) => { if (chuAll.indexOf(t.zh) >= 0 || t.zh === '天气' || t.zh === '天气预报') ds.push(t); });
    if (ban.kMai) ds.push({ zh: TAI[ban.kMai].zh, py: TAI[ban.kMai].py, vn: TAI[ban.kMai].vn.toLowerCase() });
    return ds;
  }
  function trangThaiTt(f) {
    const b = bt(f), hn = hnKey();
    const o = { lv: lv(f), lvTai: LV_TAI, xuDung: XU_DUNG, xpDung: XP_DUNG, giaCb: GIA_CB, cbSan: CB_SAN, ten: TEN, cb: CB };
    if (!b) return o;
    const ban = b.ban;
    o.ban = { nghe: ma(ban.chu.map((c) => c.zh).join('')), so: ban.chu.length };
    o.q = ban.q.map(cauChoHs);
    o.tl = b.tl.map((dung, i) => ({ dung, dap: ban.q[i].dap, lua: ban.q[i].lua.map((x) => nhanLua(ban.q[i], x)) }));
    if (xong(b)) {
      const kMaiNay = lv(f) >= LV_TAI ? kieuMai(f, hn) : null;
      o.ket = {
        dung: b.dung, so: ban.q.length, xu: b.dung * XU_DUNG, xp: b.dung * XP_DUNG,
        chu: ban.chu, tu: tuBan(ban), hn: Object.assign({}, ban.hn, TT[ban.hn.w].tu), mai: Object.assign({}, ban.mai, TT[ban.mai.w].tu),
        tai: taiTom(kMaiNay), gia: giaCb(b), daCb: daCb(f), cbSan: CB_SAN,
      };
    }
    return o;
  }
  // tom tat cho o thoi tiet tren HUD (st.kt.thoitiet): chi lo du bao ngay mai SAU khi em nghe xong
  h.ttThem.push((userId, f) => {
    const b = bt(f), hn = hnKey();
    const x = { nghe: xong(b) };
    if (x.nghe) {
      x.w = b.ban.mai.w; x.t = b.ban.mai.t;
      const k = lv(f) >= LV_TAI ? kieuMai(f, hn) : null;
      if (k) { x.tai = k; x.taiZh = TAI[k].zh; x.cb = daCb(f); }
    }
    if (f.tai && f.tai.d === hn && f.tai.cb) x.cbHn = f.tai.cb; // thien tai hom nay da duoc chuan bi tu hom qua
    return { thoitiet: x };
  });
  if (h.CATALOG) h.CATALOG.THOITIET = { TT: Object.keys(TT).reduce((o, k) => { o[k] = TT[k].tu; return o; }, {}), TEN, CB, XU_DUNG, XP_DUNG, GIA_CB, CB_SAN, LV_TAI };

  app.get('/api/farm/thoitiet', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me);
      let doi = lapDuBao(me, f);
      const r = layBan(me, f);
      if (doi || r.doi) await h.ghi(me, f);
      return trangThaiTt(f);
    }));
  }));

  app.post('/api/farm/thoitiet/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, body = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), b = bt(f);
      if (!b) throw loi('Mở bản tin thời tiết hôm nay trước nhé.');
      if (xong(b)) throw loi('Hôm nay em đã trả lời bản tin rồi — mai nghe bản tin mới nhé!');
      const i = b.tl.length, q = b.ban.q[i];
      if (body.i !== undefined && Number(body.i) !== i) throw loi('Câu hỏi đã đổi — mở lại bản tin nhé.');
      const chon = Math.floor(Number(body.chon));
      const dung = chon === q.dap;
      b.tl.push(dung);
      const kq = { ok: true, dung, dap: q.dap, lua: q.lua.map((x) => nhanLua(q, x)) };
      if (dung) { b.dung = (b.dung | 0) + 1; f.xu += XU_DUNG; f.xp += XP_DUNG; }
      await h.ghi(me, f);
      kq.tt = trangThaiTt(f);
      if (xong(b)) kq.st = await h.trangThai(me, f);
      return kq;
    }));
  }));

  app.post('/api/farm/thoitiet/chuanbi', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), b = bt(f), hn = hnKey(), mai = ngaySau(hn);
      if (!xong(b)) throw loi('Nghe bản tin và trả lời 2 câu hỏi trước đã nhé!');
      const k = lv(f) >= LV_TAI ? kieuMai(f, hn) : null;
      if (!k) throw loi('Ngày mai trời yên — không cần chuẩn bị.');
      if (daCb(f)) throw loi('Em đã chuẩn bị cho ngày mai rồi.');
      const gia = giaCb(b);
      if (f.xu < gia) throw loi('Cần ' + gia + ' xu để chuẩn bị.');
      f.xu -= gia;
      f.taiCb = { d: mai, k, n: CB_SAN };
      await h.ghi(me, f);
      return { ok: true, gia, tt: trangThaiTt(f), st: await h.trangThai(me, f) };
    }));
  }));
}

module.exports = { gan, TT, THEO_TAI, MUA_TT, soZh, thoiTietNgay, GIA_CB, CB_SAN, XU_DUNG };
