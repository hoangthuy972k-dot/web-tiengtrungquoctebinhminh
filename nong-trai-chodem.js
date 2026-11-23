// Cho dem cuoi tuan 夜市 (2026-11-23): quay hang dem trong nong trai, mo tu 18:00 thu Sau den het Chu nhat (gio Viet Nam).
//  - Khach NPC lan luot den, NOI cau goi hang bang tieng Trung (may doc NTX.doc; chu an, co "Nghe lại" + "Xem chữ").
//    Cau goi hang chi dung tu rat thong dung (老板, 我要, 我想买, 给我, 有没有, 多少钱, 请, 谢谢…) + TEN HANG trong kho cua em
//    + so 1–10 + luong tu (h.LUONG). Em chon dung hang + so luong (+ luong tu) tren cac o; khach hoi gia thi chon cau tra loi gia.
//  - Dung: khach tra gia cho dem (×1,3–1,5 gia ban thuong; hang dot bien / cay lai ×1,5–1,7) + tien boa khi dung luong tu / tra loi gia.
//    Sai: khach lich su ra ve, hien dap an dung (chu Han + pinyin + nghia). Hang van trong kho.
//  - Khach "tan gau" 聊天: hoi 1 cau lay tu bai em DA HOC (h.phieuLuu.cauTruyen, kieu chon cau dap) — dung thi duoc boa nho.
//  - Gioi han: 8 khach / dem (ngay VN), 20 khach / cuoi tuan; tien ban tinh vao HAN MUC BAN NGAY (h.hanMuc / h.ghiBanNgay).
//  - Dap an giu o may chu (f.chodem.kh); client chi nhan cau noi (base64) + cac o lua chon.
// May local thu ngoai gio: NT_CHODEM=bat (luon mo) / NT_CHODEM=tat (luon dong).
const NGAY = 86400000, VN = 7 * 3600000;
const LV_MO = 2, KHACH_DEM = 8, KHACH_TUAN = 20, GIO_MO = 18;
const XP_DUNG = 3, XP_CHAT = 2, BOA_CHAT = [3, 6], SO_O_HANG = 4, GIA_TOI_DA_HOI = 999;

// Lich mo cua: { mo, moLuc (ms, lan mo toi), dongLuc (ms, luc dong), dow }
function lich(ms) {
  const t = ms + VN, ngay = Math.floor(t / NGAY), dow = (ngay + 4) % 7, gio = (t - ngay * NGAY) / 3600000; // 1/1/1970 la thu Nam
  const tuNhien = (dow === 5 && gio >= GIO_MO) || dow === 6 || dow === 0;
  const env = process.env.NT_CHODEM;
  const mo = env === 'bat' ? true : env === 'tat' ? false : tuNhien;
  const nuaDem = (n) => n * NGAY - VN; // 0:00 gio VN cua ngay thu n
  let dongLuc = null, moLuc = null;
  if (mo) dongLuc = tuNhien ? nuaDem(ngay + (dow === 5 ? 3 : dow === 6 ? 2 : 1)) : nuaDem(ngay + 1);
  else {
    let k = (5 - dow + 7) % 7;
    if (k === 0 && gio >= GIO_MO) k = 7;
    moLuc = nuaDem(ngay + k) + GIO_MO * 3600000;
  }
  return { mo, moLuc, dongLuc, dow };
}

// Luong tu: pinyin + nghia (o chon luong tu hien ca 3)
const LG = {
  '个': { py: 'ge', vn: 'cái / quả' }, '斤': { py: 'jīn', vn: 'cân (nửa ký)' }, '瓶': { py: 'píng', vn: 'chai' }, '杯': { py: 'bēi', vn: 'cốc' },
  '盒': { py: 'hé', vn: 'hộp' }, '根': { py: 'gēn', vn: 'cây, củ (dài)' }, '棵': { py: 'kē', vn: 'cây, bắp (cải)' }, '朵': { py: 'duǒ', vn: 'bông (hoa)' },
  '串': { py: 'chuàn', vn: 'chùm' }, '碗': { py: 'wǎn', vn: 'bát' }, '份': { py: 'fèn', vn: 'phần' }, '盘': { py: 'pán', vn: 'đĩa' },
  '条': { py: 'tiáo', vn: 'con (cá), chiếc (khăn)' }, '张': { py: 'zhāng', vn: 'tấm, tờ' }, '节': { py: 'jié', vn: 'khúc, đoạn' }, '包': { py: 'bāo', vn: 'gói' },
  '袋': { py: 'dài', vn: 'túi' }, '块': { py: 'kuài', vn: 'miếng' }, '桌': { py: 'zhuō', vn: 'bàn (tiệc)' }, '匹': { py: 'pǐ', vn: 'xấp (vải)' }, '件': { py: 'jiàn', vn: 'chiếc (áo)' },
};
// luong tu dem trong cau tieng Viet (cai / qua thi bo: "3 cà chua")
const LG_VN = { '斤': 'cân', '瓶': 'chai', '杯': 'cốc', '盒': 'hộp', '朵': 'bông', '串': 'chùm', '碗': 'bát', '份': 'phần', '盘': 'đĩa', '条': 'con', '张': 'tấm', '包': 'gói', '袋': 'túi', '块': 'miếng', '桌': 'bàn', '匹': 'xấp', '节': 'khúc' };
const LG_NHIEU = ['个', '斤', '瓶', '杯', '盒', '根', '串', '条', '碗', '朵', '包'];

const SO = ['', '一', '两', '三', '四', '五', '六', '七', '八', '九', '十'];
const SO_PY = ['', 'yī', 'liǎng', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ', 'shí'];
const thanh4 = (py) => py === 'ge' || /[àèìòùǜ]/.test(py);
// "一" truoc luong tu: yí + thanh 4 (一个 yí ge), con lai yì (一斤 yì jīn)
const soPy = (n, lgPy) => (n === 1 ? (thanh4(lgPy) ? 'yí' : 'yì') : SO_PY[n]);

// So tien bang chu Han (1–99999): 56 -> 五十六 wǔshíliù, 305 -> 三百零五 sānbǎi líng wǔ, 2 -> 两
const CHU = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const CHU_PY = ['líng', 'yī', 'èr', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ'];
const BAC = [[10000, '万', 'wàn'], [1000, '千', 'qiān'], [100, '百', 'bǎi'], [10, '十', 'shí'], [1, '', '']];
function soTien(n) {
  n = Math.floor(n);
  if (n === 1) return { zh: '一', py: 'yí' };   // 一块钱 yí kuài
  if (n === 2) return { zh: '两', py: 'liǎng' }; // 两块钱
  const p = [];
  let bd = false, khong = false;
  BAC.forEach(([v, u, up]) => {
    const c = Math.floor(n / v) % 10;
    if (!c) { if (bd) khong = true; return; }
    if (khong) { p.push({ zh: '零', py: 'líng', v: 0 }); khong = false; }
    let zh = CHU[c], py = CHU_PY[c];
    if (c === 2 && v >= 100) { zh = '两'; py = 'liǎng'; }
    if (c === 1 && v === 10 && !bd) { zh = ''; py = ''; }
    if (c === 1 && v >= 100) py = v === 10000 ? 'yí' : 'yì';
    p.push({ zh: zh + u, py: py + up, v });
    bd = true;
  });
  // pinyin: chuc + don vi viet lien (wǔshíliù), cac bac lon cach nhau (sānbǎi wǔshíliù)
  const py = [];
  p.forEach((x, i) => { if (i && x.v < 10 && p[i - 1].v === 10) py[py.length - 1] += (/^[aeo]/.test(x.py) ? "'" : '') + x.py; else py.push(x.py); });
  return { zh: p.map((x) => x.zh).join(''), py: py.join(' ') };
}

// Cau goi hang (chi tu thong dung + ten hang). {s}{l}{t}: so + luong tu + ten hang; gia: khach hoi gia
const MAU = [
  { zh: '老板，我要{s}{l}{t}。', py: 'Lǎobǎn, wǒ yào {s} {l} {t}.', vn: 'Ông chủ ơi, tôi muốn {n} {t}.' },
  { zh: '我想买{s}{l}{t}，多少钱？', py: 'Wǒ xiǎng mǎi {s} {l} {t}, duōshao qián?', vn: 'Tôi muốn mua {n} {t}, bao nhiêu tiền?', gia: 1 },
  { zh: '有没有{t}？给我{s}{l}。', py: 'Yǒu méiyǒu {t}? Gěi wǒ {s} {l}.', vn: 'Có {t0} không? Cho tôi {n}.' },
  { zh: '你好！请给我{s}{l}{t}，谢谢！', py: 'Nǐ hǎo! Qǐng gěi wǒ {s} {l} {t}, xièxie!', vn: 'Xin chào! Làm ơn cho tôi {n} {t}, cảm ơn!' },
  { zh: '老板，{s}{l}{t}多少钱？', py: 'Lǎobǎn, {s} {l} {t} duōshao qián?', vn: 'Ông chủ ơi, {n} {t} bao nhiêu tiền?', gia: 1 },
  { zh: '老板，有{t}吗？我要{s}{l}。', py: 'Lǎobǎn, yǒu {t} ma? Wǒ yào {s} {l}.', vn: 'Ông chủ ơi, có {t0} không? Tôi lấy {n}.' },
  { zh: '我要买{s}{l}{t}，给你钱。', py: 'Wǒ yào mǎi {s} {l} {t}, gěi nǐ qián.', vn: 'Tôi muốn mua {n} {t}, gửi bạn tiền.' },
];
const CAM_ON = [
  { zh: '谢谢老板！', py: 'Xièxie lǎobǎn!', vn: 'Cảm ơn ông chủ!' },
  { zh: '太好了，谢谢！', py: 'Tài hǎo le, xièxie!', vn: 'Tuyệt quá, cảm ơn!' },
  { zh: '好的，谢谢你！再见！', py: 'Hǎo de, xièxie nǐ! Zàijiàn!', vn: 'Được rồi, cảm ơn bạn! Tạm biệt!' },
];
const RA_VE = [
  { zh: '没关系，我下次再来。', py: 'Méi guānxi, wǒ xià cì zài lái.', vn: 'Không sao, lần sau tôi lại đến.' },
  { zh: '不对……没关系，再见！', py: 'Bú duì…… méi guānxi, zàijiàn!', vn: 'Không đúng rồi… không sao, tạm biệt!' },
];
const CHAO_CHAT = [
  { zh: '老板，你好！我想问你一个问题。', py: 'Lǎobǎn, nǐ hǎo! Wǒ xiǎng wèn nǐ yí ge wèntí.', vn: 'Chào ông chủ! Tôi muốn hỏi bạn một câu.' },
  { zh: '今天人很多！我们说说话，好吗？', py: 'Jīntiān rén hěn duō! Wǒmen shuōshuo huà, hǎo ma?', vn: 'Hôm nay đông người quá! Mình nói chuyện chút nhé?' },
];
// Khach NPC (nhan vat ve bang window.NhanVat o client); pk denlong = cam den long di cho dem
const KHACH = [
  { zh: '王奶奶', py: 'Wáng nǎinai', vn: 'Bà Vương', av: { gt: '', da: 0, toc: 'bui', mt: 0, ao: 'khoac', ma: 5, duoi: 'vay', md: 7, mu: '', mm: 0, kinh: 'tron', pk: 'tui', mp: 0, mat: '' } },
  { zh: '小明', py: 'Xiǎo Míng', vn: 'Tiểu Minh', av: { gt: 'nam', da: 1, toc: 'ngan', mt: 0, ao: 'thun', ma: 4, duoi: 'short', md: 7, mu: '', mm: 0, kinh: '', pk: 'denlong', mp: 0, mat: '' } },
  { zh: '李叔叔', py: 'Lǐ shūshu', vn: 'Chú Lý', av: { gt: 'nam', da: 2, toc: 'renngoi', mt: 1, ao: 'somi', ma: 2, duoi: 'dai', md: 7, mu: '', mm: 0, kinh: '', pk: '', mp: 0, mat: '' } },
  { zh: '张阿姨', py: 'Zhāng āyí', vn: 'Cô Trương', av: { gt: '', da: 0, toc: 'bob', mt: 1, ao: 'khoac', ma: 1, duoi: 'dai', md: 4, mu: '', mm: 0, kinh: '', pk: 'tui', mp: 2, mat: '' } },
  { zh: '小红', py: 'Xiǎo Hóng', vn: 'Tiểu Hồng', av: { gt: '', da: 1, toc: 'duoi', mt: 0, ao: 'thun', ma: 0, duoi: 'vay', md: 2, mu: 'no', mm: 0, kinh: '', pk: 'bongbay', mp: 4, mat: '' } },
  { zh: '马老师', py: 'Mǎ lǎoshī', vn: 'Thầy Mã', av: { gt: 'nam', da: 0, toc: 'dinh', mt: 0, ao: 'vest', ma: 7, duoi: 'dai', md: 7, mu: '', mm: 0, kinh: 'vuong', pk: 'sach', mp: 4, mat: '' } },
  { zh: '陈爷爷', py: 'Chén yéye', vn: 'Ông Trần', av: { gt: 'nam', da: 2, toc: 'xu', mt: 0, ao: 'somi', ma: 6, duoi: 'dai', md: 5, mu: 'coi', mm: 2, kinh: '', pk: 'quat', mp: 2, mat: '' } },
  { zh: '外国朋友', py: 'wàiguó péngyou', vn: 'Bạn nước ngoài', av: { gt: 'nam', da: 0, toc: 'xoan', mt: 3, ao: 'thethao', ma: 3, duoi: 'short', md: 4, mu: 'luoi', mm: 0, kinh: '', pk: 'balo', mp: 5, mat: '' } },
  { zh: '刘医生', py: 'Liú yīshēng', vn: 'Bác sĩ Lưu', av: { gt: '', da: 0, toc: 'dai', mt: 0, ao: 'somi', ma: 6, duoi: 'dai', md: 4, mu: '', mm: 0, kinh: 'tron', pk: '', mp: 0, mat: '' } },
  { zh: '小美', py: 'Xiǎo Měi', vn: 'Tiểu Mỹ', av: { gt: '', da: 1, toc: 'dai', mt: 1, ao: 'aodai', ma: 1, duoi: 'dai', md: 6, mu: 'hoa', mm: 1, kinh: '', pk: 'denlong', mp: 0, mat: '' } },
];

const chon = (a) => a[Math.floor(Math.random() * a.length)];
function tron(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const b64 = (s) => Buffer.from(encodeURIComponent(s || '')).toString('base64');
const hoa = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const vnNgan = (s) => String(s || '').replace(/\s*\(.*\)\s*$/, '');
const vnThuong = (s) => { s = vnNgan(s); return s.charAt(0).toLowerCase() + s.slice(1); };

function gan(app, d, h) {
  const loi = h.loi, SP = h.SP, CAY = h.CAY;
  const lgPy = (l) => (LG[l] && LG[l].py) || h.LUONG_PY[l] || '';
  // luong tu cua mon: hang dot bien theo cay goc, cay lai theo cay me dau
  function luongTu(k) {
    if (h.LUONG[k]) return h.LUONG[k];
    const sp = SP[k];
    if (sp && sp.db && h.LUONG[sp.goc]) return h.LUONG[sp.goc];
    const c = CAY[k];
    if (c && c.lai && c.cha && h.LUONG[c.cha[0]]) return h.LUONG[c.cha[0]];
    return '个';
  }
  const dacBiet = (k) => !!(SP[k] && (SP[k].db || (CAY[k] && CAY[k].lai)));
  const heSoBan = (f, k) => (h.HE_SO_BAN || []).reduce((t, fn) => { try { const x = Number(fn(f, k)); return x > 0 && x < 10 ? t * x : t; } catch (e) { return t; } }, 1);
  // hang ban duoc o cho dem: co trong kho, khong phai hang mua de dung (nl)
  const banDuoc = (k) => !!SP[k] && !SP[k].nl && /[一-鿿]/.test(SP[k].zh);
  const ngay = () => d.vnDayKey(), tuan = () => d.vnWeekKey();

  function cd(f) {
    const w = tuan();
    if (!f.chodem || f.chodem.w !== w) f.chodem = { w, d: '', nd: 0, nt: 0, xu: 0, dung: 0, kh: null, ls: [] };
    const x = f.chodem;
    if (x.d !== ngay()) { x.d = ngay(); x.nd = 0; }
    return x;
  }
  const conKhach = (x) => Math.max(0, Math.min(KHACH_DEM - x.nd, KHACH_TUAN - x.nt));
  const docCd = (f) => (f.chodem && f.chodem.w === tuan() ? f.chodem : null);

  // trang thai gon gui kem /api/farm (st.kt.chodem): banner + nut trong "⋯ Thêm"
  h.ttThem.push((uid, f, lv) => {
    const l = lich(Date.now()), x = docCd(f);
    const nd = x && x.d === ngay() ? x.nd : 0, nt = x ? x.nt : 0;
    return { chodem: { mo: l.mo, moLuc: l.moLuc, dongLuc: l.dongLuc, lvMo: LV_MO, khoa: lv < LV_MO,
      con: Math.max(0, Math.min(KHACH_DEM - nd, KHACH_TUAN - nt)), dang: !!(x && x.kh) } };
  });

  // ---- tao khach ----
  function oHang(f, k, lv) {
    const ds = [k], daZh = {};
    daZh[SP[k].zh] = 1;
    const them = (ks) => tron(ks).forEach((x) => { if (ds.length < SO_O_HANG && SP[x] && !daZh[SP[x].zh]) { ds.push(x); daZh[SP[x].zh] = 1; } });
    them(Object.keys(f.kho || {}).filter((x) => (f.kho[x] || 0) > 0 && banDuoc(x)));
    them(Object.keys(CAY).filter((x) => !CAY[x].hiem && CAY[x].lv <= lv + 2).concat(['trung', 'sua', 'trungvit']));
    return tron(ds);
  }
  function oLuong(l) {
    const ds = [l].concat(tron(LG_NHIEU.filter((x) => x !== l)).slice(0, 3));
    return tron(ds).map((x) => ({ zh: x, py: lgPy(x), vn: (LG[x] && LG[x].vn) || '' }));
  }
  function khachMua(f, lv, con) {
    let kho = Object.keys(f.kho || {}).filter((k) => (f.kho[k] || 0) > 0 && banDuoc(k));
    if (!kho.length) return null;
    // don hang vua han muc ban con lai (khong de em mat nhieu hang ma chi nhan it xu vi het han muc)
    const giaMax = (k) => Math.round(SP[k].ban * heSoBan(f, k) * (dacBiet(k) ? 1.7 : 1.5));
    const vua = kho.filter((k) => giaMax(k) <= con);
    if (!vua.length) return { han: true };
    kho = vua;
    // uu tien hang nhieu (can bang hon), nhung hang it van co the duoc goi
    const k = chon(kho.concat(kho.filter((x) => f.kho[x] >= 3)));
    const l = luongTu(k), sp = SP[k];
    const hs = dacBiet(k) ? 1.5 + Math.random() * 0.2 : 1.3 + Math.random() * 0.2;
    const gia = Math.max(1, Math.round(sp.ban * heSoBan(f, k) * hs));
    const nMax = Math.max(1, Math.min(10, f.kho[k], Math.floor(con / gia)));
    const n = 1 + Math.floor(Math.random() * nMax);
    const mau = MAU.filter((m) => !m.gia || gia * n <= GIA_TOI_DA_HOI);
    const m = chon(mau), lp = lgPy(l), sZh = SO[n], sPy = soPy(n, lp);
    const tv = vnThuong(sp.vn), nv = n + (LG_VN[l] ? ' ' + LG_VN[l] : '');
    const cau = {
      zh: m.zh.replace('{s}', sZh).replace('{l}', l).replace('{t}', sp.zh),
      py: hoa(m.py.replace('{s}', sPy).replace('{l}', lp).replace('{t}', sp.py).replace(/\s+/g, ' ')),
      vn: m.vn.replace('{n}', nv).replace('{t}', tv).replace('{t0}', tv),
    };
    const ds = oHang(f, k, lv);
    return { loai: 'mua', k, n, l, gia, hs: Math.round(hs * 100) / 100, hoiGia: !!m.gia, cau, ds,
      gias: ds.reduce((o, x) => { o[x] = Math.max(1, Math.round(SP[x].ban * heSoBan(f, x) * (dacBiet(x) ? 1.6 : 1.4))); return o; }, {}),
      lgs: oLuong(l) };
  }
  // Gia hien tren o: gia cua khach nay cho mon dung, cac mon khac gia uoc luong (khong lo dap an)
  function choHs(kh, f) {
    const pub = { id: kh.id, loai: kh.loai, kh: KHACH[kh.ai], ai: kh.ai, nghe: b64(kh.cau.zh), buoc: kh.buoc || 'nghe' };
    if (kh.loai === 'mua') {
      pub.ds = kh.ds.map((k) => ({ k, zh: SP[k].zh, py: SP[k].py, vn: vnNgan(SP[k].vn), co: (f.kho[k] || 0) }));
      pub.lgs = kh.lgs;
      pub.hoiGia = kh.hoiGia;
      if (kh.buoc === 'gia') pub.gia = { opts: kh.giaOpts.map((x) => ({ zh: x.zh, py: x.py })), n: kh.n, l: kh.l, lPy: lgPy(kh.l), gia: kh.gia, k: kh.k };
    } else {
      pub.q = { k: kh.q.k, hoi: kh.q.hoi, lua: kh.q.lua };
    }
    return pub;
  }
  function giaOpts(kh) {
    const T = kh.gia * kh.n, ds = [T];
    const thu = [kh.gia, T + 10, T > 10 ? T - 10 : T + 20, T + kh.gia, Number(String(T).split('').reverse().join('')), T * 2, T + 1];
    thu.forEach((x) => { if (ds.length < 4 && x > 0 && x <= 99999 && ds.indexOf(x) < 0) ds.push(x); });
    while (ds.length < 4) { const x = T + ds.length * 7; if (ds.indexOf(x) < 0) ds.push(x); }
    return tron(ds).map((v) => { const s = soTien(v); return { v, zh: s.zh + '块钱。', py: hoa(s.py + ' kuài qián.') }; });
  }

  async function trangThaiCd(user, f) {
    const lv = h.lvTuXp(f.xp), l = lich(Date.now()), x = docCd(f);
    const hm = await h.hanMuc(user.id, f);
    const kho = Object.keys(f.kho || {}).filter((k) => (f.kho[k] || 0) > 0 && banDuoc(k));
    const xem = tron(kho).slice(0, 6).map((k) => ({ k, zh: SP[k].zh, py: SP[k].py, vn: vnNgan(SP[k].vn), l: luongTu(k), lPy: lgPy(luongTu(k)),
      ban: SP[k].ban, tu: Math.round(SP[k].ban * (dacBiet(k) ? 1.5 : 1.3)), den: Math.round(SP[k].ban * (dacBiet(k) ? 1.7 : 1.5)) }));
    const nd = x && x.d === ngay() ? x.nd : 0, nt = x ? x.nt : 0;
    return {
      now: Date.now(), mo: l.mo, moLuc: l.moLuc, dongLuc: l.dongLuc, lv, lvMo: LV_MO,
      dem: { da: nd, toiDa: KHACH_DEM }, tuan: { da: nt, toiDa: KHACH_TUAN },
      con: Math.max(0, Math.min(KHACH_DEM - nd, KHACH_TUAN - nt)),
      tong: { xu: x ? x.xu : 0, dung: x ? x.dung : 0, khach: nt },
      ban: { con: hm.con, toiDa: hm.toiDa }, coHang: kho.length > 0, xem,
      kh: x && x.kh && l.mo ? choHs(x.kh, f) : null, ls: x ? x.ls.slice(-8).reverse() : [],
      lg: LG, mau: { zh: '老板，我要三个番茄。', py: 'Lǎobǎn, wǒ yào sān ge fānqié.', vn: 'Ông chủ ơi, tôi muốn 3 quả cà chua.' },
    };
  }

  app.get('/api/farm/chodem', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id);
    res.json(await trangThaiCd(req.user, f));
  }));

  // Moi khach tiep theo (dang co khach thi tra lai khach do — khong doi khach de chon cau de)
  app.post('/api/farm/chodem/khach', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    // cau hoi cho khach tan gau: chuan bi ngoai khoa (doc bai em hoc)
    let qChat = null;
    try { qChat = h.phieuLuu.cauTruyen(await h.tuHocCua(req.user), 'dap'); } catch (e) { qChat = null; }
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), lv = h.lvTuXp(f.xp), l = lich(Date.now());
      if (lv < LV_MO) throw loi('Chợ đêm mở cho nông trại từ cấp ' + LV_MO + '.');
      if (!l.mo) throw loi('Chợ đêm chỉ mở từ 18:00 thứ Sáu đến hết Chủ nhật — hẹn em cuối tuần nhé!');
      const x = cd(f);
      if (x.kh) return { ok: true, kh: choHs(x.kh, f), cd: await trangThaiCd(req.user, f) };
      if (conKhach(x) <= 0) throw loi(x.nt >= KHACH_TUAN ? 'Cuối tuần này em đã đón ' + KHACH_TUAN + ' vị khách rồi — tuần sau chợ đêm lại mở nhé!' : 'Đêm nay đã hết khách (' + KHACH_DEM + ' khách) — mai quay lại nhé!');
      const hm = await h.hanMuc(me, f);
      // khach thu 3, 7… (va khi kho het hang) la khach tan gau neu em co bai da hoc
      const muonChat = qChat && (x.nt % 4 === 2 || !Object.keys(f.kho || {}).some((k) => f.kho[k] > 0 && banDuoc(k)));
      let kh = null;
      if (!muonChat) {
        kh = khachMua(f, lv, hm.con);
        if (kh && kh.han) {
          throw loi((hm.con < 1 ? 'Hạn mức bán hôm nay đã hết (' + hm.toiDa + ' xu)' : 'Hạn mức bán hôm nay chỉ còn ' + hm.con + ' xu — chưa đủ cho món nào trong kho') +
            ' — học thêm để mở rộng: mỗi sao học = +' + h.BAN_MOI_SAO + ' xu hạn mức!');
        }
      }
      if (!kh && qChat) kh = { loai: 'chat', q: qChat, cau: chon(CHAO_CHAT) };
      if (!kh) throw loi('Kho chưa có hàng để bán — thu hoạch vài ô ruộng rồi quay lại chợ đêm nhé!');
      const truoc = x.ls.length ? x.ls[x.ls.length - 1].ai : -1;
      kh.ai = chon(KHACH.map((_, i) => i).filter((i) => i !== truoc));
      kh.id = Math.random().toString(36).slice(2, 10);
      kh.bd = Date.now();
      x.kh = kh; x.nd++; x.nt++;
      await h.ghi(me, f);
      return { ok: true, kh: choHs(kh, f), cd: await trangThaiCd(req.user, f) };
    }));
  }));

  // ket thuc 1 khach: ghi lich su, xoa khach dang cho
  function xong(x, kh, kq) {
    x.kh = null;
    x.ls.push({ t: Date.now(), ai: kh.ai, loai: kh.loai, k: kh.k || '', n: kh.n || 0, dung: !!kq.dung, xu: kq.xu || 0 });
    if (x.ls.length > 20) x.ls = x.ls.slice(-20);
    if (kq.dung) x.dung++;
    x.xu += kq.xu || 0;
  }
  function dapAnMua(kh) {
    const sp = SP[kh.k];
    return { k: kh.k, n: kh.n, l: kh.l, lPy: lgPy(kh.l), lVn: (LG[kh.l] && LG[kh.l].vn) || '', zh: sp.zh, py: sp.py, vn: vnNgan(sp.vn), cau: kh.cau };
  }
  // Ban hang: tra tien (co tien boa), tinh vao han muc ban ngay
  async function banHang(me, f, x, kh, kq) {
    if ((f.kho[kh.k] || 0) < kh.n) {
      kq.dung = false; kq.hetHang = true;
      kq.loi = 'Kho không còn đủ ' + vnNgan(SP[kh.k].vn).toLowerCase() + ' — khách đành đi chỗ khác.';
      return;
    }
    const goc = kh.gia * kh.n;
    const boaLg = kh.lgDung ? Math.max(1, Math.round(goc * 0.1)) : 0;
    const boaGia = kh.giaDung ? Math.max(2, Math.round(goc * 0.1)) : 0;
    const hm = await h.hanMuc(me, f);
    const muon = goc + boaLg + boaGia, tra = Math.min(muon, hm.con);
    f.kho[kh.k] -= kh.n;
    if (!f.kho[kh.k]) delete f.kho[kh.k];
    if (tra > 0) { h.ghiBanNgay(f, tra); f.xu += tra; }
    const xp = XP_DUNG + (kh.lgDung ? 1 : 0) + (kh.giaDung ? 1 : 0);
    f.xp += xp;
    Object.assign(kq, { xu: tra, goc, boaLg, boaGia, xp, catHanMuc: muon - tra, camOn: chon(CAM_ON), gia: kh.gia, hs: kh.hs });
  }

  // Buoc 1: chon hang + so luong + luong tu
  app.post('/api/farm/chodem/ban', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = cd(f), kh = x.kh;
      if (!kh || kh.loai !== 'mua' || kh.buoc === 'gia') throw loi('Không có khách đang chờ mua hàng.');
      if (!lich(Date.now()).mo) { x.kh = null; await h.ghi(me, f); throw loi('Chợ đêm đã đóng cửa — hẹn em cuối tuần sau!'); }
      const k = String(b.k || ''), n = Math.floor(Number(b.n) || 0), l = String(b.l || '');
      const dungHang = k === kh.k || (SP[k] && SP[k].zh === SP[kh.k].zh), dungSo = n === kh.n;
      kh.lgDung = l === kh.l;
      const kq = { ok: true, dungHang, dungSo, dungLg: kh.lgDung, dap: dapAnMua(kh) };
      if (!dungHang || !dungSo) {
        kq.dung = false; kq.raVe = chon(RA_VE);
        xong(x, kh, kq);
      } else if (kh.hoiGia) {
        kh.buoc = 'gia';
        kh.giaOpts = giaOpts(kh);
        kq.buoc = 'gia';
        kq.kh = choHs(kh, f);
        await h.ghi(me, f);
        return kq;
      } else {
        kq.dung = true;
        await banHang(me, f, x, kh, kq);
        xong(x, kh, kq);
      }
      await h.ghi(me, f);
      kq.st = await h.trangThai(me, f);
      kq.cd = await trangThaiCd(req.user, f);
      return kq;
    }));
  }));

  // Buoc 2 (khach hoi 多少钱): chon cau tra loi gia; chon = -1 la bo qua (van ban, khong co boa gia)
  app.post('/api/farm/chodem/gia', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = cd(f), kh = x.kh;
      if (!kh || kh.buoc !== 'gia') throw loi('Khách chưa hỏi giá.');
      const i = Math.floor(Number(b.chon));
      const T = kh.gia * kh.n, o = kh.giaOpts[i];
      kh.giaDung = !!o && o.v === T;
      const dung = kh.giaOpts.find((z) => z.v === T);
      const kq = { ok: true, dung: true, giaDung: kh.giaDung, boQua: i < 0, giaDap: { zh: dung.zh, py: dung.py, v: T, i: kh.giaOpts.indexOf(dung) }, dungLg: !!kh.lgDung, dap: dapAnMua(kh) };
      await banHang(me, f, x, kh, kq);
      xong(x, kh, kq);
      await h.ghi(me, f);
      kq.st = await h.trangThai(me, f);
      kq.cd = await trangThaiCd(req.user, f);
      return kq;
    }));
  }));

  // Khach tan gau: tra loi 1 cau tu bai em da hoc
  app.post('/api/farm/chodem/chat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = cd(f), kh = x.kh;
      if (!kh || kh.loai !== 'chat') throw loi('Không có khách đang trò chuyện.');
      const q = kh.q, dung = h.chamCau(q, b);
      h.onCau(f, q, b, dung);
      const kq = Object.assign({ ok: true, dung }, h.ketQuaCau(q));
      if (dung) {
        const hm = await h.hanMuc(me, f);
        const boa = Math.min(hm.con, BOA_CHAT[0] + Math.floor(Math.random() * (BOA_CHAT[1] - BOA_CHAT[0] + 1)));
        if (boa > 0) { h.ghiBanNgay(f, boa); f.xu += boa; }
        f.xp += XP_CHAT;
        kq.xu = boa; kq.xp = XP_CHAT; kq.camOn = chon(CAM_ON);
      } else kq.raVe = RA_VE[0];
      xong(x, kh, kq);
      await h.ghi(me, f);
      kq.st = await h.trangThai(me, f);
      kq.cd = await trangThaiCd(req.user, f);
      return kq;
    }));
  }));

  // Moi khach ve (bo qua): van tinh 1 luot khach, hien dap an
  app.post('/api/farm/chodem/bo', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = cd(f), kh = x.kh;
      if (!kh) throw loi('Không có khách nào đang chờ.');
      const kq = { ok: true, dung: false, boQua: true, raVe: RA_VE[0] };
      if (kh.loai === 'mua') kq.dap = dapAnMua(kh);
      else Object.assign(kq, h.ketQuaCau(kh.q));
      xong(x, kh, kq);
      await h.ghi(me, f);
      kq.st = await h.trangThai(me, f);
      kq.cd = await trangThaiCd(req.user, f);
      return kq;
    }));
  }));
}

module.exports = { gan, lich, soTien, LG, MAU, KHACH, KHACH_DEM, KHACH_TUAN, LV_MO };
