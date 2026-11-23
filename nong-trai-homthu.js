// Hom thu lang 信箱 (tinh nang them 2026-11-24) — luyen DOC moi ngay.
// Moi ngay (gio Viet Nam) 1–2 la thu ngan tu nhan vat trong lang (dan nhan vat cot truyen: nong-trai-truyen.js NV).
// Thu viet theo khuon 亲爱的___：… 谢谢！ + chu ky, nho em 1 viec cu the:
//   · 'xin': gui N mon trong kho (我想要五个鸡蛋，可以吗？) — mon la nong san em trong / nuoi duoc, N = 1–10, luong tu chi 个 / 斤
//   · 'hoi': tra loi 1 cau hoi — cau hoi LAY NGUYEN VAN tu hoi thoai bai em da hoc, dap an = cau dap trong bai
// QUY TAC TU VUNG (cung): khuon thu chi dung tu rat thong dung (TU_KHUON, kiem tra luc nap module) + ten nong san + so 1–10;
// moi thu co dung 1 cau lay tu bai em DA HOC (hoi thoai / cau vi du cua bai, qua h.tuHocCua + Ktbc).
// Truoc khi gui: 2 cau hoi doc hieu (muon gi / bao nhieu, hoac ai viet / tra loi the nao) — dap an giu o may chu.
// "Gửi": may chu kiem kho + tru hang -> thuong cao hon gia tri hang mot chut (xu) + buu thiep cam on; thinh thoang 1 do trang tri.
// Thu het han sau 2 ngay; toi da 2 thu / ngay; album "Thư đã nhận" giu 30 thu gan nhat.
// Du lieu: f.ht = { d (ngay phat gan nhat), coBai, ds: [thu dang cho], al: [thu da xong], da: [cau bai hoc da dung], tt (ngay nhan do trang tri) }
const Ktbc = require('./nong-trai-ktbc');

// Tu duoc phep trong khuon thu (yeu cau co giao) — moi token cua khuon phai nam trong day (kiem tra o duoi)
const TU = {
  '亲爱的': ['qīn\'ài de', 'thân mến'], '你好': ['nǐ hǎo', 'xin chào'], '你': ['nǐ', 'bạn'], '我': ['wǒ', 'tôi'],
  '想': ['xiǎng', 'muốn'], '要': ['yào', 'muốn, cần'], '可以': ['kěyǐ', 'có thể, được'], '吗': ['ma', '(trợ từ hỏi)'],
  '谢谢': ['xièxie', 'cảm ơn'], '今天': ['jīntiān', 'hôm nay'], '明天': ['míngtiān', 'ngày mai'],
  '个': ['ge', 'cái, quả (lượng từ)'], '斤': ['jīn', 'cân (nửa ký)'], '送给': ['sòng gěi', 'gửi cho, tặng cho'],
  '送': ['sòng', 'gửi, tặng'], '给': ['gěi', 'cho'], '帮': ['bāng', 'giúp'], '请': ['qǐng', 'xin, mời (lịch sự)'],
  '好': ['hǎo', 'tốt, khỏe, được'], '的': ['de', '(trợ từ: của)'], '了': ['le', '(trợ từ: rồi)'],
};
// Tu thong dung de TACH TU + nghia khi em bam vao cau bai hoc (chi de tra cuu, khong ra cau hoi; pinyin lay theo cau cua bai)
const TRA = {
  '我们': 'chúng tôi', '你们': 'các bạn', '他们': 'họ', '她们': 'họ (nữ)', '咱们': 'chúng mình', '他': 'anh ấy', '她': 'cô ấy', '它': 'nó',
  '您': 'ông, bà, ngài (kính trọng)', '这': 'này, đây', '那': 'kia, đó', '这里': 'ở đây', '那里': 'ở đó', '哪里': 'ở đâu', '哪儿': 'ở đâu',
  '什么': 'cái gì', '怎么': 'thế nào, sao', '怎么样': 'thế nào', '为什么': 'tại sao', '谁': 'ai', '几': 'mấy', '多少': 'bao nhiêu',
  '是': 'là', '有': 'có', '没有': 'không có', '在': 'ở, đang', '去': 'đi', '来': 'đến', '回': 'về', '看': 'xem, nhìn', '听': 'nghe',
  '说': 'nói', '吃': 'ăn', '喝': 'uống', '做': 'làm', '买': 'mua', '叫': 'gọi, tên là', '喜欢': 'thích', '知道': 'biết', '觉得': 'cảm thấy',
  '很': 'rất', '也': 'cũng', '都': 'đều', '还': 'còn', '就': 'thì, liền', '不': 'không', '没': 'chưa, không', '太': 'quá', '真': 'thật',
  '吧': '(nhé, đi)', '呢': '(trợ từ hỏi)', '啊': '(à, nhé)', '和': 'và', '一起': 'cùng nhau', '现在': 'bây giờ', '时间': 'thời gian',
  '时候': 'lúc', '天气': 'thời tiết', '朋友': 'bạn bè', '老师': 'thầy cô giáo', '学生': 'học sinh', '学习': 'học', '工作': 'làm việc',
  '家': 'nhà', '水': 'nước', '饭': 'cơm', '吃饭': 'ăn cơm', '昨天': 'hôm qua', '大': 'to', '小': 'nhỏ', '多': 'nhiều', '少': 'ít',
  '再见': 'tạm biệt', '不客气': 'không có gì', '对不起': 'xin lỗi', '没关系': 'không sao', '旅游': 'du lịch', '上班': 'đi làm',
};
const SO_ZH = ['', '一', '两', '三', '四', '五', '六', '七', '八', '九', '十'];
const SO_PY = ['', 'yī', 'liǎng', 'sān', 'sì', 'wǔ', 'liù', 'qī', 'bā', 'jiǔ', 'shí'];
const DAU = '，：！？。、';

// Mon co the xin: chi mon co luong tu 个 / 斤 (tu duoc phep). vnLg = cach dem tieng Viet
const HANG = [
  { k: 'lua', lg: '斤', vnLg: 'cân' }, { k: 'carot', lg: '斤', vnLg: 'cân' }, { k: 'ngo', lg: '斤', vnLg: 'cân' },
  { k: 'caibap', lg: '斤', vnLg: 'cân' }, { k: 'cachua', lg: '个', vnLg: 'quả' }, { k: 'dautay', lg: '个', vnLg: 'quả' },
  { k: 'khoaitay', lg: '个', vnLg: 'củ' }, { k: 'bido', lg: '个', vnLg: 'quả' }, { k: 'duahau', lg: '个', vnLg: 'quả' },
  { k: 'trung', lg: '个', vnLg: 'quả' }, { k: 'trungvit', lg: '个', vnLg: 'quả' }, { k: 'len', lg: '斤', vnLg: 'cân' },
];
const HANG_MAP = {};
HANG.forEach((x) => { HANG_MAP[x.k] = x; });

// Nguoi viet thu (ten tu nong-trai-truyen.js) + cach xung ho trong ban dich
const AI = {
  lan: { emo: '👵', ban: 'cháu', toi: 'bà' }, tu: { emo: '🧔', ban: 'cháu', toi: 'chú' }, mai: { emo: '👩‍🏫', ban: 'em', toi: 'cô' },
  minh: { emo: '👦', ban: 'bạn', toi: 'mình' }, bach: { emo: '👴', ban: 'cháu', toi: 'ông' },
};
let NV = {};
try { NV = require('./nong-trai-truyen').NV || {}; } catch (e) { NV = {}; }
const NV_MAC = {
  lan: { ten: 'Bà Lan', zh: '兰奶奶', py: 'Lán nǎinai' }, tu: { ten: 'Chú Tư', zh: '四叔', py: 'Sì shū' }, mai: { ten: 'Cô Mai', zh: '梅老师', py: 'Méi lǎoshī' },
  minh: { ten: 'Minh Minh', zh: '明明', py: 'Míngming' }, bach: { ten: 'Ông Bách', zh: '柏爷爷', py: 'Bǎi yéye' },
};
const nvCua = (k) => {
  const a = NV[k] && NV[k].zh ? NV[k] : NV_MAC[k];
  return { k, ten: a.ten, zh: a.zh, py: a.py, emo: AI[k].emo };
};
const DS_AI = Object.keys(AI);

// ---- Khuon thu ----  token: tu trong TU | '{SO}' '{LG}' '{MON}' '{TEN}' | dau cau
const MO = [ // cau chao
  { t: ['你好', '！'], vn: 'Chào {ban}!' },
  { t: ['你', '今天', '好', '吗', '？'], vn: 'Hôm nay {ban} khỏe không?' },
  { t: ['你', '好', '吗', '？'], vn: '{Ban} khỏe không?' },
];
const YC = [ // loi nho (1–2 cau)
  [{ t: ['我', '想', '要', '{SO}', '{LG}', '{MON}', '，', '可以', '吗', '？'], vn: '{Toi} muốn {so} {lg} {mon}, được không?' }],
  [{ t: ['请', '你', '送给', '我', '{SO}', '{LG}', '{MON}', '，', '好', '吗', '？'], vn: '{Ban} gửi cho {toi} {so} {lg} {mon} nhé, được không?' }],
  [{ t: ['你', '可以', '帮', '我', '吗', '？'], vn: '{Ban} giúp {toi} được không?' }, { t: ['我', '要', '{SO}', '{LG}', '{MON}', '。'], vn: '{Toi} cần {so} {lg} {mon}.' }],
  [{ t: ['我', '今天', '想', '要', '{SO}', '{LG}', '{MON}', '。'], vn: 'Hôm nay {toi} muốn có {so} {lg} {mon}.' }, { t: ['你', '明天', '可以', '送给', '我', '吗', '？'], vn: 'Ngày mai {ban} gửi cho {toi} được không?' }],
  [{ t: ['我', '明天', '要', '{SO}', '{LG}', '{MON}', '，', '你', '可以', '帮', '我', '吗', '？'], vn: 'Ngày mai {toi} cần {so} {lg} {mon}, {ban} giúp {toi} được không?' }],
  [{ t: ['我', '想', '要', '{SO}', '{LG}', '{MON}', '，', '你', '可以', '送给', '我', '吗', '？'], vn: '{Toi} muốn {so} {lg} {mon}, {ban} gửi cho {toi} được không?' }],
];
const DG = [ // cau cam on cuoi thu
  { t: ['谢谢', '你', '！'], vn: 'Cảm ơn {ban}!' },
  { t: ['谢谢', '！'], vn: 'Cảm ơn nhé!' },
  { t: ['请', '你', '帮', '我', '，', '谢谢', '！'], vn: 'Nhờ {ban} giúp {toi} nhé, cảm ơn!' },
];
// Buu thiep cam on sau khi gui (cau co dinh, co pinyin + nghia)
const THIEP = [
  { zh: '谢谢你！你真好！', py: 'Xièxie nǐ! Nǐ zhēn hǎo!', vn: 'Cảm ơn {ban}! {Ban} thật tốt!' },
  { zh: '太好了！谢谢！', py: 'Tài hǎo le! Xièxie!', vn: 'Tuyệt quá! Cảm ơn nhé!' },
  { zh: '你是我的好朋友！', py: 'Nǐ shì wǒ de hǎo péngyou!', vn: '{Ban} là bạn tốt của {toi}!' },
  { zh: '谢谢你的帮助！', py: 'Xièxie nǐ de bāngzhù!', vn: 'Cảm ơn {ban} đã giúp đỡ!' },
  { zh: '明天见！', py: 'Míngtiān jiàn!', vn: 'Hẹn gặp {ban} ngày mai!' },
];
// kiem tra luc nap: khuon thu chi dung tu duoc phep
(function kiemKhuon() {
  const dsT = [].concat(MO, DG, ...YC);
  dsT.forEach((c) => c.t.forEach((w) => {
    if (TU[w] || /^\{(SO|LG|MON|TEN)\}$/.test(w) || (w.length === 1 && DAU.indexOf(w) >= 0)) return;
    throw new Error('nong-trai-homthu: tu "' + w + '" khong nam trong tu duoc phep cua khuon thu');
  }));
}());

const SO_THU_NGAY = 2, GT_TOI_DA = 100, GT_TOI_THIEU = 12, LUU_AL = 30, LUU_DA = 40, TT_CACH = 7, TT_TI_LE = 0.1;
const THUONG_HOI = 12, THUONG_HOI_SAI = 4;
const TT_HT = { 'homthu-youtong': { zh: '邮筒', py: 'yóutǒng', vn: 'Hòm thư xanh của làng', lv: 1, doc: 1, dep: 14 } };

const ngayCong = (k, n) => new Date(Date.parse(k + 'T00:00:00Z') + n * 86400000).toISOString().slice(0, 10);
const ngauNhien = (a) => a[Math.floor(Math.random() * a.length)];
const tron = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const hoaDau = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// so tien thuong cho thu 'xin' (gia tri = so luong × gia ban goc): dung het cau hoi -> +20% + 2 xu; sai -> dung gia tri
function thuongXin(gt, dungHet) { return dungHet ? Math.ceil(gt * 1.2) + 2 : gt; }
// chon so luong: tong gia tri trong [GT_TOI_THIEU, tran theo cap] (tran <= GT_TOI_DA), 1–10 mon
function chonSo(ban, lv, rnd) {
  rnd = rnd || Math.random;
  const tran = Math.min(GT_TOI_DA, 30 + lv * 6);
  const muc = GT_TOI_THIEU + rnd() * (tran - GT_TOI_THIEU);
  let n = Math.max(1, Math.min(10, Math.round(muc / ban)));
  while (n > 1 && n * ban > GT_TOI_DA) n--;
  return n;
}
// mon em co the co: cay da mo theo cap (khong quy), san pham vat nuoi em dang nuoi hoac dang co trong kho
function monCo(f, lv, CAY, CON, SP) {
  const nuoi = {};
  (f.o || []).forEach((o) => { if (CON[o.k]) nuoi[CON[o.k].sp] = 1; });
  return HANG.filter((x) => {
    if (!SP[x.k] || SP[x.k].ban > GT_TOI_DA) return false;
    if (CAY[x.k]) return !CAY[x.k].hiem && CAY[x.k].lv <= lv;
    return nuoi[x.k] || ((f.kho || {})[x.k] || 0) > 0;
  });
}

// ---- tach tu (de bam vao tu xem pinyin + nghia): tham lam theo tu dien ----
// py (pinyin ca cau cua bai): neu so am tiet = so chu Han thi gan am tiet cho tung chu (doc dung theo ngu canh, ca 一/不 bien dieu)
const NGUYEN_AM = 'aeiouüvāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ';
const AM_TIET = new RegExp('(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])?[' + NGUYEN_AM + ']+(?:ng(?![' + NGUYEN_AM + '])|n(?![' + NGUYEN_AM + '])|r(?![' + NGUYEN_AM + ']))?', 'gi');
function amTiet(py) { return (String(py || '').normalize('NFC').match(AM_TIET) || []); }
function tachTu(zh, tuDien, py) {
  const ra = [];
  const s = [...zh];
  const han = s.filter((c) => /[㐀-鿿]/.test(c)).length;
  const at = amTiet(py);
  const khop = at.length === han && han > 0;
  let iHan = 0;
  const lay = (n) => { const x = at.slice(iHan, iHan + n); iHan += n; return x.join(''); };
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (!/[㐀-鿿]/.test(c)) {
      const cuoi = ra[ra.length - 1];
      if (cuoi && cuoi.l) cuoi.z += c; else ra.push({ z: c, l: 1 });
      i++; continue;
    }
    let ok = null;
    for (let L = Math.min(4, s.length - i); L >= 1; L--) {
      const w = s.slice(i, i + L);
      if (w.some((x) => !/[㐀-鿿]/.test(x))) continue;
      if (tuDien[w.join('')]) { ok = { z: w.join(''), p: tuDien[w.join('')][0], v: tuDien[w.join('')][1] }; break; }
    }
    if (ok) {
      const n = [...ok.z].length;
      if (khop) ok.p = lay(n);
      ra.push(ok); i += n; continue;
    }
    const cuoi = ra[ra.length - 1];
    const p = khop ? lay(1) : '';
    if (cuoi && cuoi.u) { cuoi.z += c; cuoi.p += p; } else ra.push({ z: c, p, u: 1 });
    i++;
  }
  return ra.map((t) => (t.l ? { z: t.z } : t.u ? { z: t.z, p: t.p, v: '' } : t));
}

// ---- tao 1 la thu tu bo bai em hoc ----
// bo = h.tuHocCua(user); tra ve null neu bai em hoc chua du cau
function nguonCau(bo) {
  const urls = (bo && bo.urls) || [];
  if (!urls.length) return null;
  const ng = Ktbc.nguonBai(urls, bo.cap);
  const tuDien = {};
  Object.keys(TRA).forEach((k) => { tuDien[k] = ['', TRA[k]]; });
  Object.keys(TU).forEach((k) => { tuDien[k] = TU[k]; });
  ng.vocab.forEach((v) => { if (v.zh && v.py && v.vn && !TU[v.zh]) tuDien[v.zh] = [v.py, v.vn]; });
  (bo.tu || []).forEach((v) => { if (v.zh && v.py && v.vn && !TU[v.zh]) tuDien[v.zh] = [v.py, v.vn]; });
  const cau = [], cap = [], tatCa = [];
  urls.forEach((u) => Ktbc.hoiThoaiBai(u).forEach((sc) => sc.lines.forEach((l, i) => {
    const zl = [...l.zh].length;
    if (zl <= 24) tatCa.push(l.zh);
    if (l.vn && zl >= 3 && zl <= 20) cau.push({ zh: l.zh, py: l.py, vn: l.vn, u });
    const b = sc.lines[i + 1];
    if (b && b.sp !== l.sp && /[？?]$/.test(l.zh) && zl <= 22 && [...b.zh].length <= 24 && l.vn) cap.push({ a: { zh: l.zh, py: l.py, vn: l.vn, u }, b: { zh: b.zh, py: b.py, vn: b.vn } });
  })));
  ng.vocab.forEach((v) => {
    const zl = v.ex_zh ? [...v.ex_zh].length : 0;
    if (v.ex_vn && zl >= 3 && zl <= 20 && v.ex_zh !== v.zh) cau.push({ zh: v.ex_zh, py: v.ex_py || '', vn: v.ex_vn, u: v.u });
  });
  return { cau, cap, tatCa: [...new Set(tatCa)], tuDien };
}

function taoThu(o) {
  // o = { nguon, f, lv, CAY, CON, SP, loai? }
  const { nguon, f, lv, CAY, CON, SP } = o;
  const da = new Set((f.ht && f.ht.da) || []);
  const ai = ngauNhien(DS_AI);
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  // thu hoi: can cap cau hoi -> cau dap trong hoi thoai + 3 cau nhieu
  const capCo = nguon.cap.filter((c) => !da.has(c.a.zh));
  if (o.loai !== 'xin' && capCo.length && nguon.tatCa.length >= 6 && (o.loai === 'hoi' || Math.random() < 0.35)) {
    const c = ngauNhien(capCo);
    const nhieu = tron(nguon.tatCa.filter((z) => z !== c.a.zh && z !== c.b.zh && !/[？?]$/.test(z)));
    if (nhieu.length >= 3) {
      const lua = tron([c.b.zh].concat(nhieu.slice(0, 3)));
      const aiLua = tron([ai].concat(tron(DS_AI.filter((x) => x !== ai)).slice(0, 3)));
      return {
        id, ai, loai: 'hoi', mo: 0,
        cau: { zh: c.a.zh, py: c.a.py, vn: c.a.vn, u: c.a.u, tk: tachTu(c.a.zh, nguon.tuDien, c.a.py) },
        dapCau: { zh: c.b.zh, py: c.b.py, vn: c.b.vn },
        q: [{ t: 'ai', lua: aiLua, dap: aiLua.indexOf(ai) }, { t: 'dap', lua, dap: lua.indexOf(c.b.zh) }],
      };
    }
  }
  const mon = monCo(f, lv, CAY, CON, SP);
  const cauCo = nguon.cau.filter((c) => !da.has(c.zh));
  if (!mon.length || !(cauCo.length || nguon.cau.length)) return null;
  // nua so lan uu tien mon dang co trong kho (gui duoc ngay)
  const trongKho = mon.filter((x) => ((f.kho || {})[x.k] || 0) > 0);
  const m = trongKho.length && Math.random() < 0.5 ? ngauNhien(trongKho) : ngauNhien(mon);
  const n = chonSo(SP[m.k].ban, lv);
  const c = ngauNhien(cauCo.length ? cauCo : nguon.cau);
  const khac = tron(HANG.filter((x) => x.k !== m.k && SP[x.k])).slice(0, 3).map((x) => x.k);
  const luaMon = tron([m.k].concat(khac));
  const soKhac = tron([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => x !== n)).slice(0, 3);
  const luaSo = tron([n].concat(soKhac));
  return {
    id, ai, loai: 'xin', mo: Math.floor(Math.random() * MO.length), yc: Math.floor(Math.random() * YC.length), dg: Math.floor(Math.random() * DG.length),
    k: m.k, n, lg: m.lg,
    cau: { zh: c.zh, py: c.py, vn: c.vn, u: c.u, tk: tachTu(c.zh, nguon.tuDien, c.py) },
    q: [{ t: 'mon', lua: luaMon, dap: luaMon.indexOf(m.k) }, { t: 'so', lua: luaSo, dap: luaSo.indexOf(n) }],
  };
}

// dong cua thu (de hien) — token {z, p, v}; vn = ban dich (chi gui khi da tra loi xong)
function dongThu(t, ten, SP) {
  const a = AI[t.ai] || AI.lan, nv = nvCua(t.ai);
  const hang = HANG_MAP[t.k];
  const sp = t.k && SP[t.k];
  const thay = (s) => s.replace(/\{ban\}/g, a.ban).replace(/\{Ban\}/g, hoaDau(a.ban)).replace(/\{toi\}/g, a.toi).replace(/\{Toi\}/g, hoaDau(a.toi))
    .replace(/\{so\}/g, String(t.n || '')).replace(/\{lg\}/g, hang ? hang.vnLg : '').replace(/\{mon\}/g, sp ? sp.vn.toLowerCase() : '');
  const tk = (w) => {
    if (w === '{TEN}') return { z: ten, p: '', v: 'tên em' };
    if (w === '{SO}') return { z: SO_ZH[t.n], p: t.n === 1 ? (t.lg === '个' ? 'yí' : 'yì') : SO_PY[t.n], v: 'số ' + t.n };
    if (w === '{LG}') return { z: t.lg, p: TU[t.lg][0], v: TU[t.lg][1] };
    if (w === '{MON}') return { z: sp.zh, p: sp.py, v: sp.vn.toLowerCase() };
    if (TU[w]) return { z: w, p: TU[w][0], v: TU[w][1] };
    return { z: w };
  };
  const dong = (c) => ({ tk: c.t.map(tk), vn: thay(c.vn) });
  const ds = [{ tk: [{ z: '亲爱的', p: TU['亲爱的'][0], v: TU['亲爱的'][1] }, { z: ten, p: '', v: 'tên em' }, { z: '：' }], vn: hoaDau(a.ban) + ' ' + ten + ' thân mến,', mo: 1 }];
  const cauHoc = { tk: t.cau.tk, py: t.cau.py, vn: t.cau.vn, hoc: 1 };
  if (t.loai === 'hoi') {
    ds.push(dong(MO[0]), dong(MO[1]), cauHoc, dong(DG[0]));
  } else {
    ds.push(dong(MO[t.mo] || MO[0]));
    YC[t.yc].forEach((c) => ds.push(dong(c)));
    ds.push(cauHoc, dong(DG[t.dg] || DG[0]));
  }
  ds.push({ tk: [{ z: nv.zh, p: nv.py, v: nv.ten }], vn: nv.ten, ky: 1 });
  return ds;
}

// cau hoi doc hieu (khong co dap an tru khi da tra loi)
const LENH_Q = { mon: 'Người viết muốn gì?', so: 'Muốn bao nhiêu?', ai: 'Ai viết thư này?', dap: 'Em trả lời câu hỏi trong thư thế nào?' };
function choQ(t, q, i, SP) {
  const hang = HANG_MAP[t.k];
  const lua = q.lua.map((x) => {
    if (q.t === 'mon') return { chu: SP[x] ? SP[x].vn : x, hinh: 'sp-' + x };
    if (q.t === 'so') return { chu: x + ' ' + (hang ? hang.vnLg : '') };
    if (q.t === 'ai') { const nv = nvCua(x); return { chu: nv.ten, emo: nv.emo }; }
    return { zh: x };
  });
  const r = { t: q.t, lenh: LENH_Q[q.t], lua };
  const tl = t.tl && t.tl[i];
  if (tl !== undefined && tl !== null) { r.chon = tl; r.dap = q.dap; r.dung = tl === q.dap; }
  return r;
}

function gan(app, d, h) {
  const loi = h.loi, SP = h.SP, CAY = h.CAY, CON = h.CON;
  Object.keys(TT_HT).forEach((k) => { if (h.TT && !h.TT[k]) h.TT[k] = TT_HT[k]; });
  const ngay = () => d.vnDayKey();
  const htCua = (f) => {
    let x = f.ht;
    if (!x || typeof x !== 'object') x = f.ht = {};
    x.ds = Array.isArray(x.ds) ? x.ds : [];
    x.al = Array.isArray(x.al) ? x.al : [];
    x.da = Array.isArray(x.da) ? x.da : [];
    return x;
  };
  const conHan = (t, hom) => hom <= ngayCong(t.ngay, 1);
  // bo thu het han; tra ve true neu co thay doi
  function don(x, hom) {
    const truoc = x.ds.length;
    x.ds = x.ds.filter((t) => !t.xong && conHan(t, hom));
    return x.ds.length !== truoc;
  }
  const xongHet = (t) => t.q.every((q, i) => t.tl && t.tl[i] !== undefined && t.tl[i] !== null);
  const dungHet = (t) => t.q.every((q, i) => t.tl && t.tl[i] === q.dap);
  function tenEm(ten) {
    const s = String(ten || '').trim().split(/\s+/).pop() || '';
    const sach = s.replace(/[^\p{L}\p{N}]/gu, '').slice(0, 12);
    return sach || '小朋友';
  }
  function choThu(t, ten, hom) {
    const xong = xongHet(t) || t.xong;
    const dong = dongThu(t, ten, SP).map((l) => (xong ? l : Object.assign({}, l, { vn: undefined })));
    const nv = nvCua(t.ai);
    const r = {
      id: t.id, ai: { k: t.ai, ten: nv.ten, zh: nv.zh, py: nv.py, emo: nv.emo }, loai: t.loai, ngay: t.ngay, het: ngayCong(t.ngay, 1),
      homNay: t.ngay === hom, doc: !!t.doc, xong: !!t.xong, dong, q: t.q.map((q, i) => choQ(t, q, i, SP)), daTl: xongHet(t),
    };
    if (xongHet(t) || t.xong) {
      if (t.loai === 'xin') {
        const sp = SP[t.k], hang = HANG_MAP[t.k];
        r.can = { k: t.k, n: t.n, lg: t.lg, zh: sp.zh, py: sp.py, vn: sp.vn, vnLg: hang.vnLg, gt: sp.ban * t.n, thuong: thuongXin(sp.ban * t.n, dungHet(t)) };
      } else {
        r.dapCau = t.dapCau; r.thuong = dungHet(t) ? THUONG_HOI : THUONG_HOI_SAI;
      }
      r.dungHet = dungHet(t);
    }
    if (t.thiep !== undefined) {
      const tp = THIEP[t.thiep], a = AI[t.ai];
      r.thiep = { zh: tp.zh, py: tp.py, vn: tp.vn.replace(/\{ban\}/g, a.ban).replace(/\{Ban\}/g, hoaDau(a.ban)).replace(/\{toi\}/g, a.toi) };
      r.nhan = t.nhan || null;
    }
    return r;
  }
  async function tenCua(user) { return tenEm(user.name || (await d.loadUserNames())[user.id]); }
  async function ketQua(uid, f, ten) {
    const x = htCua(f), hom = ngay();
    return {
      ds: x.ds.map((t) => choThu(t, ten, hom)),
      al: x.al.map((t) => choThu(t, ten, hom)),
      coBai: x.coBai !== false, soNgay: SO_THU_NGAY, hom,
    };
  }

  // tom tat gui kem trang thai nong trai: so thu chua doc (co do tren hom thu + cham do o nut "Thêm")
  h.ttThem.push((userId, f) => {
    const x = f.ht && typeof f.ht === 'object' ? f.ht : {}, hom = d.vnDayKey();
    const ds = (Array.isArray(x.ds) ? x.ds : []).filter((t) => !t.xong && hom <= ngayCong(t.ngay, 1));
    const chuaPhat = x.d !== hom && (x.coBai !== false || x.kd !== hom);
    return { homthu: { moi: ds.filter((t) => !t.doc).length + (chuaPhat ? 1 : 0), cho: ds.length + (chuaPhat ? 1 : 0) } };
  });

  app.get('/api/farm/homthu', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const [bo, ten] = await Promise.all([h.tuHocCua(req.user), tenCua(req.user)]);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = htCua(f), hom = ngay(), lv = h.lvTuXp(f.xp);
      let doi = don(x, hom);
      if (x.d !== hom) {
        const nguon = nguonCau(bo);
        const coBai = !!(nguon && (nguon.cau.length || nguon.cap.length));
        if (x.coBai !== coBai || x.kd !== hom) { x.coBai = coBai; x.kd = hom; doi = true; }
        if (coBai) {
          // 1–2 thu / ngay; tong thu dang cho toi da 2 ngay × 2
          const so = Math.min(1 + (Math.random() < 0.5 ? 1 : 0), SO_THU_NGAY * 2 - x.ds.length);
          const daAi = {};
          for (let i = 0; i < so; i++) {
            let t = null;
            for (let k = 0; k < 4 && (!t || daAi[t.ai]); k++) t = taoThu({ nguon, f, lv, CAY, CON, SP, loai: i === 1 && x.ds.some((y) => y.loai === 'hoi' && y.ngay === hom) ? 'xin' : undefined });
            if (!t) break;
            daAi[t.ai] = 1;
            t.ngay = hom; t.tl = [];
            x.ds.push(t);
            x.da = [t.cau.zh].concat(x.da).slice(0, LUU_DA);
          }
          x.d = hom; doi = true;
        }
      }
      if (doi) await h.ghi(me, f);
      const r = await ketQua(me, f, ten);
      if (doi) r.st = await h.trangThai(me, f);
      return r;
    }));
  }));

  app.post('/api/farm/homthu/doc', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String((req.body || {}).id || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = htCua(f);
      const t = x.ds.find((y) => y.id === id);
      if (!t) throw loi('Không tìm thấy lá thư này.');
      if (!t.doc) { t.doc = true; await h.ghi(me, f); }
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));

  app.post('/api/farm/homthu/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, id = String(b.id || ''), i = Math.floor(Number(b.i)), chon = Math.floor(Number(b.chon));
    const ten = await tenCua(req.user);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = htCua(f), hom = ngay();
      const t = x.ds.find((y) => y.id === id);
      if (!t || !conHan(t, hom)) throw loi('Lá thư này đã hết hạn.');
      const q = t.q[i];
      if (!q) throw loi('Câu hỏi không hợp lệ.');
      if (!(chon >= 0 && chon < q.lua.length)) throw loi('Hãy chọn một đáp án.');
      t.tl = Array.isArray(t.tl) ? t.tl : [];
      if (t.tl[i] !== undefined && t.tl[i] !== null) throw loi('Câu này em đã trả lời rồi.');
      t.tl[i] = chon;
      t.doc = true;
      await h.ghi(me, f);
      return { ok: true, dung: chon === q.dap, dap: q.dap, thu: choThu(t, ten, hom) };
    }));
  }));

  app.post('/api/farm/homthu/gui', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String((req.body || {}).id || '');
    const ten = await tenCua(req.user);
    await h.traLoi(res, h.lanLuot(me, async () => {
      const f = await h.doc(me), x = htCua(f), hom = ngay();
      const t = x.ds.find((y) => y.id === id);
      if (!t || t.xong || !conHan(t, hom)) throw loi('Lá thư này đã hết hạn hoặc đã gửi rồi.');
      if (!xongHet(t)) throw loi('Em hãy trả lời các câu hỏi về lá thư trước nhé.');
      const dung = dungHet(t), nhan = { xu: 0, xp: 0 };
      if (t.loai === 'xin') {
        const co = (f.kho || {})[t.k] || 0;
        if (co < t.n) throw loi('Kho mới có ' + co + '/' + t.n + ' ' + SP[t.k].vn.toLowerCase() + ' — thu hoạch thêm rồi gửi trước khi thư hết hạn nhé.');
        f.kho[t.k] = co - t.n;
        if (!f.kho[t.k]) delete f.kho[t.k];
        nhan.xu = thuongXin(SP[t.k].ban * t.n, dung);
        nhan.xp = dung ? 3 : 1;
        nhan.gui = { k: t.k, n: t.n };
      } else {
        nhan.xu = dung ? THUONG_HOI : THUONG_HOI_SAI;
        nhan.xp = dung ? 3 : 1;
      }
      // thinh thoang: do trang tri 邮筒 (toi da 1 lan / TT_CACH ngay, chi khi doc hieu dung het)
      if (dung && Math.random() < TT_TI_LE && (!x.tt || ngayCong(x.tt, TT_CACH) <= hom)) {
        f.tui = f.tui || {};
        f.tui['homthu-youtong'] = (f.tui['homthu-youtong'] || 0) + 1;
        x.tt = hom;
        nhan.tt = { k: 'homthu-youtong', zh: TT_HT['homthu-youtong'].zh, py: TT_HT['homthu-youtong'].py, vn: TT_HT['homthu-youtong'].vn };
      }
      f.xu += nhan.xu; f.xp += nhan.xp;
      t.xong = true; t.thiep = Math.floor(Math.random() * THIEP.length); t.nhan = nhan;
      x.ds = x.ds.filter((y) => y !== t);
      x.al = [t].concat(x.al).slice(0, LUU_AL);
      await h.ghi(me, f);
      const r = await ketQua(me, f, ten);
      r.ok = true; r.thu = choThu(t, ten, hom); r.nhan = nhan; r.st = await h.trangThai(me, f);
      return r;
    }));
  }));
}

module.exports = {
  gan, HANG, TU, TT_HT,
  _thu: { taoThu, nguonCau, dongThu, tachTu, thuongXin, chonSo, monCo, GT_TOI_DA, SO_THU_NGAY, THUONG_HOI, MO, YC, DG, TU, HANG },
};
