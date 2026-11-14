// Nong trai cua em (/nong-trai): moi hoc sinh co 1 nong trai luu tren may chu.
// - Sao hoc tap (bang stars) la tien chinh: mua vat nuoi, do trang tri, mo rong dat.
//   Tieu sao KHONG tru vao bang stars (bang xep hang giu nguyen) — nong trai ghi rieng
//   so sao da tieu (saoTieu); so du = tong sao - saoTieu.
// - Xu kiem tu ban nong san / don hang / qua diem danh: mua hat giong, hang rao...
// - May chu giu gia, thoi gian lon cua cay/vat nuoi va vi tri — client chi gui hanh dong.
// Cau hoi on tu (cho an, tuoi nuoc) chay o client: phan thuong chi la xu/nong san,
// khong bao gio ra sao, nen khong co gi de gian lan.
const path = require('path');
const fsMod = require('fs');
const vmMod = require('vm');
// Ngan hang cau hoi Kiem tra bai cu (thu thach chu Han, ho cau ca) — xem nong-trai-ktbc.js
const Ktbc = require('./nong-trai-ktbc');
const CauHoi = Ktbc.CauHoi;

const PHUT = 60000;

const CAY = {
  lua: { zh: '水稻', py: 'shuǐdào', vn: 'Lúa', lv: 1, gia: 2, phut: 2, ban: 3, xp: 1 },
  carot: { zh: '胡萝卜', py: 'húluóbo', vn: 'Cà rốt', lv: 1, gia: 4, phut: 15, ban: 6, xp: 2 },
  ngo: { zh: '玉米', py: 'yùmǐ', vn: 'Ngô', lv: 2, gia: 7, phut: 45, ban: 11, xp: 3 },
  caibap: { zh: '白菜', py: 'báicài', vn: 'Cải thảo', lv: 3, gia: 10, phut: 90, ban: 16, xp: 4 },
  dautay: { zh: '草莓', py: 'cǎoméi', vn: 'Dâu tây', lv: 4, gia: 15, phut: 180, ban: 25, xp: 6 },
  huongduong: { zh: '向日葵', py: 'xiàngrìkuí', vn: 'Hướng dương', lv: 5, gia: 22, phut: 300, ban: 36, xp: 8 },
  bido: { zh: '南瓜', py: 'nánguā', vn: 'Bí ngô', lv: 6, gia: 30, phut: 480, ban: 52, xp: 10 },
  // them 2026-11-03 (hoc sinh xin da dang thuc vat hon)
  cachua: { zh: '番茄', py: 'fānqié', vn: 'Cà chua', lv: 3, gia: 12, phut: 120, ban: 20, xp: 5 },
  khoaitay: { zh: '土豆', py: 'tǔdòu', vn: 'Khoai tây', lv: 5, gia: 18, phut: 240, ban: 30, xp: 7 },
  duahau: { zh: '西瓜', py: 'xīguā', vn: 'Dưa hấu', lv: 7, gia: 38, phut: 600, ban: 66, xp: 12 },
  nho: { zh: '葡萄', py: 'pútao', vn: 'Nho', lv: 8, gia: 46, phut: 720, ban: 80, xp: 14 },
  // Cay quy 珍稀 (2026-11-13): KHONG mua hat duoc — chi gieo bang hat quy (vong quay, ban do phieu luu, dau gia).
  // lv 99 = khong bao gio "mo khoa theo cap" -> khong vao don hang, dac san, hop qua, gieo hang loat.
  nhansam: { zh: '人参', py: 'rénshēn', vn: 'Nhân sâm', lv: 99, gia: 0, phut: 480, ban: 110, xp: 10, hiem: 1 },
  tuyetlien: { zh: '雪莲', py: 'xuělián', vn: 'Tuyết liên', lv: 99, gia: 0, phut: 720, ban: 160, xp: 14, hiem: 1 },
};
const CAY_HIEM = Object.keys(CAY).filter((k) => CAY[k].hiem);
const THU_MOI_O = 2; // moi o dat thu duoc 2 nong san
const XU_MOI_SAO = 1; // doi 1 sao hoc tap = 1 xu nong trai
// Ruong hoc tap: hoc du so sao trong ngay (lam bai, hoc du gio, tro choi tu hoc...) thi mo ruong lay xu.
// Ruong go con cong them theo chuoi ngay hoc lien tiep (toi da +10 xu).
// Thu thach chu Han: 10 cau ve chu Han cua bai em dang hoc, dung tu 8 cau -> hop qua bi an (toi da 3 hop / ngay)
const CH_SO = 10, CH_DAT = 8, CH_QUA_NGAY = 3;
// Cau hoi chi lay tu bai em da hoc / bai thay co giao; chua co bai nao thi khong ra cau
const CHUA_HOC = 'Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi nhé!';
// Vong quay may man 幸运大转盘 (y tuong cua co giao): luot quay moi ngay theo viec hoc —
// dang nhap hoc +1, hoc tu 30 sao +1, hoc tu 80 sao +2 (cong don, toi da 4 luot / ngay; luot khong cong sang hom sau).
// O quay do may chu chon theo trong so (w); "Thêm 1 lượt" tra lai luot vua quay.
// 2026-11-13 (co giao: "tang them ti le voi nhieu phan thuong, hoac quay vao o mat luot hoac bi mat san vat"):
// them moc 10 sao (+1 luot hoc tap), 12 o co ca o xau (mat luot, chuot an san vat). Ti le hien o nut "ℹ️ Tỉ lệ".
const VQ_MOC = [
  { sao: 0, luot: 1, ten: 'Đăng nhập học hôm nay' },
  { sao: 10, luot: 1, ten: 'Học từ 10 sao hôm nay' },
  { sao: 30, luot: 1, ten: 'Học từ 30 sao hôm nay' },
  { sao: 80, luot: 2, ten: 'Học từ 80 sao hôm nay' },
];
// w = trong so (tong 100 -> w chinh la %). Thu tu = thu tu o tren banh xe.
const VQ_O = [
  { loai: 'xu', n: 10, w: 16, zh: '金币', ten: '10 xu', mo: 'Nhận 10 xu' },
  { loai: 'hat', n: 4, w: 12, zh: '种子', ten: 'Hạt giống ×4', nhan: 'Hạt ×4', mo: '4 hạt giống của một loại cây em trồng được (gieo miễn phí)' },
  { loai: 'xu', n: 20, w: 14, zh: '金币', ten: '20 xu', mo: 'Nhận 20 xu' },
  { loai: 'mat', n: 0, w: 9, zh: '谢谢参与', ten: 'Mất lượt', nhan: 'Mất lượt', xau: 1, mo: 'Không được gì — lượt sau may hơn!' },
  { loai: 'sp', n: 4, w: 10, zh: '农产品', ten: 'Nông sản ×4', nhan: 'Nông sản', mo: '4 nông sản (cây em trồng được / sản phẩm vật nuôi)' },
  { loai: 'xu', n: 60, w: 6, zh: '大奖', ten: '60 xu', mo: 'Giải lớn 60 xu' },
  { loai: 'tt', n: 1, w: 8, zh: '装饰', ten: 'Đồ trang trí', nhan: 'Trang trí', mo: '1 đồ trang trí vào túi đồ' },
  { loai: 'chuot', n: 0, w: 7, zh: '老鼠来了', ten: 'Chuột ăn sản vật', nhan: 'Chuột!', xau: 1,
    mo: 'Chuột gặm mất 1–3 món của một loại hàng trong kho (không quá 10% kho, không bao giờ đụng hàng quý). Kho trống thì chuột đói bụng đi về.' },
  { loai: 'x2', n: 2, w: 8, zh: '双倍收获', ten: '×2 thu hoạch', nhan: '×2 thu', mo: 'Lần thu hoạch ruộng tới được gấp đôi (tối đa ' + 8 + ' ô)' },
  { loai: 'luot', n: 1, w: 6, zh: '再来一次', ten: 'Thêm 1 lượt', nhan: '+1 lượt', mo: 'Quay thêm 1 lượt' },
  { loai: 'hatquy', n: 1, w: 3, zh: '珍稀种子', ten: 'Hạt giống quý', nhan: 'Hạt quý', hiem: 1, mo: '1 hạt nhân sâm 人参 hoặc tuyết liên 雪莲 — cây quý, bán được giá cao' },
  { loai: 'con', n: 1, w: 1, zh: '稀有动物', ten: 'Vật nuôi hiếm', nhan: 'Thú hiếm', hiem: 1, mo: 'Một vật nuôi (có thể là loài trên cấp em tới 3 cấp)' },
];
const VQ_X2_O = 8; // ×2 thu hoach ap dung toi da 8 o ruong
const VQ_CHUOT_TOI_DA = 3, VQ_CHUOT_PHAN = 0.1;
const RUONG = [
  { sao: 20, xu: 15, xp: 3, ten: 'Rương gỗ' },
  { sao: 50, xu: 30, xp: 6, ten: 'Rương bạc' },
  { sao: 100, xu: 60, xp: 12, ten: 'Rương vàng' },
];

const CON = {
  ga: { zh: '鸡', py: 'jī', vn: 'Gà', lv: 1, sao: 15, sp: 'trung', phut: 30, xp: 2 },
  vit: { zh: '鸭', py: 'yā', vn: 'Vịt', lv: 2, sao: 25, sp: 'trungvit', phut: 60, xp: 3 },
  bo: { zh: '牛', py: 'niú', vn: 'Bò', lv: 3, sao: 45, sp: 'sua', phut: 120, xp: 5 },
  cuu: { zh: '羊', py: 'yáng', vn: 'Cừu', lv: 4, sao: 60, sp: 'len', phut: 240, xp: 7 },
  ong: { zh: '蜜蜂', py: 'mìfēng', vn: 'Tổ ong', lv: 5, sao: 80, sp: 'mat', phut: 360, xp: 9 },
  // them 2026-11-03 (hoc sinh xin heo, su tu, ho, khung long — dat hon cac con cu)
  // Vat nuoi quy: mo khoa theo cap (co giao: cap 15, 20, 25… moi mua duoc)
  heo: { zh: '猪', py: 'zhū', vn: 'Heo', lv: 10, sao: 150, sp: 'songlu', phut: 480, xp: 12 },
  sutu: { zh: '狮子', py: 'shīzi', vn: 'Sư tử', lv: 15, sao: 250, sp: 'menpiao', phut: 600, xp: 16 },
  ho: { zh: '老虎', py: 'lǎohǔ', vn: 'Hổ', lv: 20, sao: 320, sp: 'jinianpin', phut: 720, xp: 18 },
  khunglong: { zh: '恐龙', py: 'kǒnglóng', vn: 'Khủng long', lv: 25, sao: 450, sp: 'kongdan', phut: 960, xp: 25 },
  gautruc: { zh: '熊猫', py: 'xióngmāo', vn: 'Gấu trúc', lv: 30, sao: 600, sp: 'gaubong', phut: 1200, xp: 30 },
};
const CON_TOI_DA = 6; // moi loai toi da 6 con

// Nong san trong kho: cay trong + san pham vat nuoi
const SP = {
  trung: { zh: '鸡蛋', py: 'jīdàn', vn: 'Trứng gà', ban: 9 },
  trungvit: { zh: '鸭蛋', py: 'yādàn', vn: 'Trứng vịt', ban: 14 },
  sua: { zh: '牛奶', py: 'niúnǎi', vn: 'Sữa bò', ban: 26 },
  len: { zh: '羊毛', py: 'yángmáo', vn: 'Len', ban: 42 },
  mat: { zh: '蜂蜜', py: 'fēngmì', vn: 'Mật ong', ban: 60 },
  songlu: { zh: '松露', py: 'sōnglù', vn: 'Nấm truffle (heo đánh hơi tìm được)', ban: 95 },
  menpiao: { zh: '门票', py: 'ménpiào', vn: 'Vé xem sư tử', ban: 160 },
  jinianpin: { zh: '纪念品', py: 'jìniànpǐn', vn: 'Quà lưu niệm hổ', ban: 200 },
  kongdan: { zh: '恐龙蛋', py: 'kǒnglóng dàn', vn: 'Trứng khủng long', ban: 300 },
  gaubong: { zh: '熊猫玩偶', py: 'xióngmāo wán\'ǒu', vn: 'Gấu bông gấu trúc', ban: 420 },
};
Object.keys(CAY).forEach((k) => { SP[k] = { zh: CAY[k].zh, py: CAY[k].py, vn: CAY[k].vn, ban: CAY[k].ban }; if (CAY[k].hiem) SP[k].hiem = 1; });
// Hang che bien (nha may) + hang mua o cho (nguyen lieu, thuc an chan nuoi) — danh muc o nong-trai-xuong.js
const XuongCat = require('./nong-trai-xuong').CAT;
XuongCat.dangKySp(SP);
// Bep: mon an can nhieu loai nong san (mot nong trai thuong khong tu du -> mua cua ban). hinh = tranh 3D /images/wu/<ma>.png
const MON = {
  com: { zh: '米饭', py: 'mǐfàn', vn: 'Cơm trắng', hinh: '1f35a', can: { lua: 2 } },
  'nuoc-carot': { zh: '胡萝卜汁', py: 'húluóbo zhī', vn: 'Nước ép cà rốt', hinh: '1f9c3', can: { carot: 3 } },
  'com-rang': { zh: '蛋炒饭', py: 'dàn chǎofàn', vn: 'Cơm rang trứng', hinh: '1f373', can: { lua: 1, trung: 2 } },
  'chao-bi': { zh: '南瓜粥', py: 'nánguā zhōu', vn: 'Cháo bí đỏ', hinh: '1f963', can: { bido: 1, lua: 1 } },
  'canh-ngo': { zh: '玉米汤', py: 'yùmǐ tāng', vn: 'Súp ngô', hinh: '1f372', can: { ngo: 2, sua: 1 } },
  'sui-cao': { zh: '白菜饺子', py: 'báicài jiǎozi', vn: 'Sủi cảo cải thảo', hinh: '1f95f', can: { caibap: 2, trung: 1 } },
  'sua-mat': { zh: '蜂蜜牛奶', py: 'fēngmì niúnǎi', vn: 'Sữa mật ong', hinh: '1f95b', can: { mat: 1, sua: 1 } },
  'banh-dau': { zh: '草莓蛋糕', py: 'cǎoméi dàngāo', vn: 'Bánh kem dâu', hinh: '1f370', can: { dautay: 2, trung: 2, sua: 1 } },
  // Mon cao cap (nha hang): nguyen lieu tu nhieu nha khac nhau -> phai mua cua ban; lv = cap mo khoa
  'yu-tang': { zh: '鱼汤', py: 'yútāng', vn: 'Canh cá', hinh: '1f35c', can: { cadiec: 1, caibap: 1 }, lv: 2 },
  'fanqie-dan': { zh: '番茄炒蛋', py: 'fānqié chǎo dàn', vn: 'Trứng xào cà chua', hinh: '1f345', can: { cachua: 2, trung: 2 }, lv: 3 },
  'hongshao-yu': { zh: '红烧鲤鱼', py: 'hóngshāo lǐyú', vn: 'Cá chép kho', hinh: '1f41f', can: { cachep: 1, cachua: 1, khoaitay: 1 }, lv: 6 },
  'xigua-zhi': { zh: '西瓜汁', py: 'xīguā zhī', vn: 'Nước ép dưa hấu mật ong', hinh: '1f964', can: { duahau: 1, mat: 1 }, lv: 7 },
  'shuiguo': { zh: '水果沙拉', py: 'shuǐguǒ shālā', vn: 'Salad trái cây', hinh: '1f347', can: { nho: 1, dautay: 2, duahau: 1, sua: 1 }, lv: 8 },
  'songlu-fan': { zh: '松露炒饭', py: 'sōnglù chǎofàn', vn: 'Cơm chiên nấm truffle', hinh: '1f958', can: { songlu: 1, lua: 2, trungvit: 1 }, lv: 10 },
  'manhan': { zh: '满汉全席', py: 'Mǎn-Hàn quánxí', vn: 'Đại tiệc Mãn Hán', hinh: '1f37d', can: { cakoi: 1, songlu: 1, mat: 1, nho: 1, sua: 1 }, lv: 15 },
  'konglong-gao': { zh: '恐龙蛋糕', py: 'kǒnglóng dàngāo', vn: 'Bánh kem trứng khủng long', hinh: '1f382', can: { kongdan: 1, sua: 2, dautay: 2 }, lv: 25 },
  // Mon dung hang che bien (nha may 2026-11-13)
  'nailao-mianbao': { zh: '奶酪面包', py: 'nǎilào miànbāo', vn: 'Bánh mì phô mai', hinh: '1f35e', can: { mianbao: 1, nailao: 1 }, lv: 7 },
  'suannai-bei': { zh: '水果酸奶', py: 'shuǐguǒ suānnǎi', vn: 'Sữa chua trái cây', hinh: '1f347', can: { suannai: 1, dautay: 2 }, lv: 7 },
};
function tinhGiaMon() {
  Object.keys(MON).forEach((k) => {
    const m = MON[k];
    const goc = Object.keys(m.can).reduce((t, x) => t + SP[x].ban * m.can[x], 0);
    SP[k] = { zh: m.zh, py: m.py, vn: m.vn, ban: Math.round(goc * 1.6), hinh: m.hinh, mon: 1 };
  });
}
// Ho cau ca 钓鱼湖 (y tuong cua co giao): ca cang to, dep -> gia cang cao, cau hoi cang kho; ca be xau -> cau hoi de.
// t = bac 1..5, cm = khoang kich thuoc. Ca cau duoc vao kho nhu nong san (ban, bay sap, tang ban duoc).
const CA = {
  cacon: { zh: '小鱼', py: 'xiǎoyú', vn: 'Cá con', t: 1, ban: 4, cm: [5, 12] },
  cachach: { zh: '泥鳅', py: 'níqiu', vn: 'Cá chạch', t: 1, ban: 5, cm: [8, 18] },
  cadiec: { zh: '鲫鱼', py: 'jìyú', vn: 'Cá diếc', t: 2, ban: 10, cm: [12, 25] },
  catram: { zh: '草鱼', py: 'cǎoyú', vn: 'Cá trắm cỏ', t: 2, ban: 12, cm: [25, 50] },
  cachep: { zh: '鲤鱼', py: 'lǐyú', vn: 'Cá chép', t: 3, ban: 22, cm: [30, 60] },
  cavuoc: { zh: '鲈鱼', py: 'lúyú', vn: 'Cá vược', t: 3, ban: 25, cm: [30, 65] },
  cavang: { zh: '金鱼', py: 'jīnyú', vn: 'Cá vàng', t: 4, ban: 45, cm: [15, 30] },
  cakoi: { zh: '锦鲤', py: 'jǐnlǐ', vn: 'Cá koi', t: 4, ban: 55, cm: [45, 85] },
  carong: { zh: '金龙鱼', py: 'jīnlóngyú', vn: 'Cá rồng vàng', t: 5, ban: 120, cm: [70, 110] },
};
Object.keys(CA).forEach((k) => { const c = CA[k]; SP[k] = { zh: c.zh, py: c.py, vn: c.vn, ban: c.ban, ca: c.t }; });
tinhGiaMon();
// Nha hang 餐厅: moi ngay 3 khach goi mon bang tieng Trung; phuc vu dung mon -> tra 1,3 lan gia mon (khong tinh vao han muc ban)
const KHACH = [
  { zh: '小明', py: 'Xiǎo Míng' }, { zh: '王奶奶', py: 'Wáng nǎinai' }, { zh: '李先生', py: 'Lǐ xiānsheng' },
  { zh: '张小姐', py: 'Zhāng xiǎojiě' }, { zh: '外国朋友', py: 'wàiguó péngyou' }, { zh: '马老师', py: 'Mǎ lǎoshī' },
];
const NH_SO = 3, NH_HE_SO = 1.3;
// Bac ca: w = ti le xuat hien trong ho; so cau, so lua chon, nhieu "giong" (kho), gioi han giay moi cau
const CA_BAC = [null,
  { ten: 'Cá bé', zh: '小鱼', w: 32, so: 1, lua: 3, giong: false, giay: 0, xp: 1, de: 'Dễ: xem chữ Hán + pinyin, chọn nghĩa' },
  { ten: 'Cá vừa', zh: '中鱼', w: 27, so: 1, lua: 4, giong: false, giay: 0, xp: 2, de: 'Vừa: chữ Hán không pinyin ↔ nghĩa' },
  { ten: 'Cá to', zh: '大鱼', w: 20, so: 1, lua: 4, giong: true, giay: 30, xp: 3, de: 'Khó: đáp án gần giống nhau, 30 giây' },
  { ten: 'Cá đẹp hiếm', zh: '漂亮的鱼', w: 14, so: 2, lua: 4, giong: true, giay: 20, xp: 5, de: 'Rất khó: 2 câu liền, từ em hay sai, 20 giây/câu' },
  { ten: 'Cá huyền thoại', zh: '传说中的鱼', w: 7, so: 3, lua: 4, giong: true, giay: 15, xp: 8, de: 'Siêu khó: 3 câu liền, điền chữ + pinyin, 15 giây/câu' },
];
// Moi cau moi ngay: 3 + 1 moi 10 sao hoc hom nay (toi da 15); ho luon co 7 bong ca
const MOI_CO_BAN = 3, MOI_MOI_SAO = 10, MOI_TOI_DA = 15, HO_SO_CA = 7;
// Luong tu khi goi ten hang bang tieng Trung (don dac biet): 三个鸡蛋、两瓶牛奶…
const LUONG = { lua: '斤', carot: '根', ngo: '根', caibap: '棵', dautay: '个', huongduong: '朵', bido: '个', cachua: '个', khoaitay: '个', duahau: '个', nho: '串', songlu: '个', menpiao: '张', jinianpin: '个', kongdan: '个', gaubong: '个', trung: '个', trungvit: '个',
  sua: '瓶', len: '斤', mat: '瓶', com: '碗', 'nuoc-carot': '杯', 'com-rang': '份', 'chao-bi': '碗', 'canh-ngo': '碗', 'sui-cao': '盘', 'sua-mat': '杯', 'banh-dau': '个' };
Object.keys(CA).forEach((k) => { LUONG[k] = '条'; });
Object.assign(LUONG, { 'yu-tang': '碗', 'fanqie-dan': '盘', 'hongshao-yu': '盘', 'xigua-zhi': '杯', shuiguo: '盘', 'songlu-fan': '碗', manhan: '桌', 'konglong-gao': '个' });
Object.assign(LUONG, { nhansam: '根', tuyetlien: '朵', 'nailao-mianbao': '个', 'suannai-bei': '杯' }, XuongCat.LUONG);
const SO_ZH = ['', '一', '两', '三', '四', '五'];
// Bang "Can mua" o cho cong dong: moi em toi da 2 tin, xu giu lai khi dang, qua 2 ngay tu huy tra xu
const CAN_TOI_DA = 2, CAN_SL_TOI_DA = 5, CAN_HAN_MS = 2 * 86400000;
// Mac ca o cho: moi luot 1 tinh huong, chon cau tieng Trung dung (1 dung + 2 nhieu)
const MAC_CA = [
  { hoi: 'Em muốn hỏi giá món hàng này', dung: [{ zh: '这个多少钱？', py: 'Zhège duōshao qián?' }, { zh: '这个怎么卖？', py: 'Zhège zěnme mài?' }],
    sai: ['这个是什么颜色？', '你今年几岁？', '现在几点了？', '你家在哪儿？'], tra: '{gia}块钱。' },
  { hoi: 'Em thấy đắt quá, muốn xin bớt', dung: [{ zh: '太贵了，便宜一点儿吧！', py: 'Tài guì le, piányi yìdiǎnr ba!' }, { zh: '能便宜一点儿吗？', py: 'Néng piányi yìdiǎnr ma?' }],
    sai: ['太好了，我很喜欢！', '我不会说汉语。', '今天天气很好。', '我们一起去吧！'], tra: '好吧，便宜一点儿。' },
  { hoi: 'Em đồng ý mua', dung: [{ zh: '好，我买了。', py: 'Hǎo, wǒ mǎi le.' }, { zh: '好的，我要这个。', py: 'Hǎo de, wǒ yào zhège.' }],
    sai: ['对不起，我不认识你。', '我想喝水。', '明天见！', '我在学校学习。'], tra: '谢谢！欢迎再来！' },
];
const VN_MAC_CA = { '这个多少钱？': 'Cái này bao nhiêu tiền?', '这个怎么卖？': 'Cái này bán thế nào?', '太贵了，便宜一点儿吧！': 'Đắt quá, rẻ chút đi!',
  '能便宜一点儿吗？': 'Rẻ chút được không?', '好，我买了。': 'Được, tôi mua.', '好的，我要这个。': 'Được, tôi lấy cái này.' };
const SO_PY = ['', 'yì', 'liǎng', 'sān', 'sì', 'wǔ'];
const LUONG_PY = { '袋': 'dài', '盒': 'hé', '块': 'kuài', '斤': 'jīn', '根': 'gēn', '棵': 'kē', '个': 'ge', '朵': 'duǒ', '瓶': 'píng', '碗': 'wǎn', '杯': 'bēi', '份': 'fèn', '盘': 'pán', '串': 'chuàn', '张': 'zhāng', '条': 'tiáo', '桌': 'zhuō' };

// Do trang tri: tra bang sao hoac xu; dep = diem "dep" cua nong trai; w = 2 la vat 2x2
const TT = {
  rao: { zh: '篱笆', py: 'líba', vn: 'Hàng rào ngang', lv: 1, xu: 15, dep: 1 },
  'rao-doc': { zh: '篱笆', py: 'líba', vn: 'Hàng rào dọc', lv: 1, xu: 15, dep: 1 },
  duong: { zh: '石板路', py: 'shíbǎnlù', vn: 'Đường lát đá', lv: 1, xu: 10, dep: 1, phang: 1 },
  da: { zh: '石头', py: 'shítou', vn: 'Hòn đá', lv: 1, xu: 20, dep: 1 },
  bien: { zh: '木牌', py: 'mùpái', vn: 'Biển gỗ', lv: 1, xu: 30, dep: 2 },
  'hoa-do': { zh: '红花', py: 'hónghuā', vn: 'Luống hoa đỏ', lv: 1, sao: 4, dep: 3 },
  'hoa-vang': { zh: '菊花', py: 'júhuā', vn: 'Hoa cúc', lv: 1, sao: 4, dep: 3 },
  'hoa-tim': { zh: '紫花', py: 'zǐhuā', vn: 'Hoa tím', lv: 2, sao: 4, dep: 3 },
  'hom-thu': { zh: '信箱', py: 'xìnxiāng', vn: 'Hòm thư', lv: 2, sao: 6, dep: 4 },
  ghe: { zh: '长椅', py: 'chángyǐ', vn: 'Ghế gỗ', lv: 2, sao: 8, dep: 5 },
  'den-long': { zh: '灯笼', py: 'dēnglong', vn: 'Đèn lồng', lv: 2, sao: 10, dep: 7 },
  'chau-hoa': { zh: '花盆', py: 'huāpén', vn: 'Chậu hoa sứ', lv: 3, sao: 8, dep: 5 },
  'bu-nhin': { zh: '稻草人', py: 'dàocǎorén', vn: 'Bù nhìn', lv: 3, sao: 10, dep: 6 },
  tung: { zh: '松树', py: 'sōngshù', vn: 'Cây thông', lv: 3, sao: 10, dep: 6 },
  truc: { zh: '竹子', py: 'zhúzi', vn: 'Khóm trúc', lv: 3, sao: 12, dep: 7 },
  'cay-cam': { zh: '金橘', py: 'jīnjú', vn: 'Cây quất', lv: 4, sao: 12, dep: 8 },
  'cay-dao': { zh: '桃树', py: 'táoshù', vn: 'Cây hoa đào', lv: 4, sao: 15, dep: 10 },
  'xich-du': { zh: '秋千', py: 'qiūqiān', vn: 'Xích đu', lv: 4, sao: 15, dep: 9 },
  gieng: { zh: '水井', py: 'shuǐjǐng', vn: 'Giếng nước', lv: 5, sao: 18, dep: 10 },
  'ao-ca': { zh: '鱼塘', py: 'yútáng', vn: 'Ao cá', lv: 3, sao: 40, dep: 25, w: 2 },
  'coi-xay': { zh: '风车', py: 'fēngchē', vn: 'Cối xay gió', lv: 4, sao: 50, dep: 30, w: 2 },
  'cay-lon': { zh: '大树', py: 'dàshù', vn: 'Cây cổ thụ', lv: 5, sao: 45, dep: 28, w: 2 },
  cau: { zh: '小桥', py: 'xiǎoqiáo', vn: 'Cầu nhỏ', lv: 5, sao: 55, dep: 32, w: 2 },
  dinh: { zh: '亭子', py: 'tíngzi', vn: 'Đình nghỉ mát', lv: 6, sao: 70, dep: 45, w: 2 },
  cong: { zh: '牌坊', py: 'páifāng', vn: 'Cổng làng', lv: 7, sao: 90, dep: 60, w: 2 },
  // Do trang tri quy: mo khoa o cap cao
  'ao-sen': { zh: '荷花池', py: 'héhuā chí', vn: 'Hồ sen', lv: 12, sao: 110, dep: 70, w: 2 },
  'su-tu-da': { zh: '石狮子', py: 'shí shīzi', vn: 'Sư tử đá', lv: 15, sao: 90, dep: 45 },
  'cau-son': { zh: '红桥', py: 'hóng qiáo', vn: 'Cầu son đỏ', lv: 18, sao: 160, dep: 95, w: 2 },
  'den-da': { zh: '石灯笼', py: 'shí dēnglong', vn: 'Đèn đá', lv: 20, sao: 110, dep: 55 },
  bonsai: { zh: '盆景', py: 'pénjǐng', vn: 'Cây bonsai', lv: 22, sao: 130, dep: 65 },
  'cot-rong': { zh: '龙柱', py: 'lóngzhù', vn: 'Cột rồng', lv: 25, sao: 170, dep: 85 },
  'cung-dien': { zh: '宫殿', py: 'gōngdiàn', vn: 'Cung điện', lv: 30, sao: 400, dep: 220, w: 2 },
  // Doc quyen: chi mo khoa bang Bo suu tap chu Han (khong ban trong cua hang)
  'den-phuc': { zh: '福字灯笼', py: 'fúzì dēnglong', vn: 'Đèn lồng chữ Phúc', lv: 1, doc: 1, dep: 12 },
  'cau-doi': { zh: '春联', py: 'chūnlián', vn: 'Câu đối đỏ', lv: 1, doc: 1, dep: 18 },
  'bang-chu': { zh: '书法牌', py: 'shūfǎ pái', vn: 'Bảng thư pháp', lv: 1, doc: 1, dep: 25 },
  'bia-trang': { zh: '状元碑', py: 'zhuàngyuán bēi', vn: 'Bia Trạng nguyên', lv: 1, doc: 1, dep: 40 },
  // Doc quyen: qua cong trinh chung cua lop (nong-trai-chung.js) — ban sao nho cua cong trinh da cung xay
  'ct-xuetang': { zh: '学堂', py: 'xuétáng', vn: 'Học đường', lv: 1, doc: 1, dep: 50, w: 2 },
  'ct-shiqiao': { zh: '石桥', py: 'shíqiáo', vn: 'Cầu đá', lv: 1, doc: 1, dep: 50, w: 2 },
  'ct-zhonglou': { zh: '钟楼', py: 'zhōnglóu', vn: 'Tháp chuông', lv: 1, doc: 1, dep: 55, w: 2 },
  'ct-xitai': { zh: '戏台', py: 'xìtái', vn: 'Sân khấu tuồng', lv: 1, doc: 1, dep: 55, w: 2 },
  'ct-baota': { zh: '宝塔', py: 'bǎotǎ', vn: 'Bảo tháp', lv: 1, doc: 1, dep: 60, w: 2 },
  // Doc quyen: qua le hoi cuoi tuan
  'lh-tuzideng': { zh: '兔子灯', py: 'tùzi dēng', vn: 'Đèn thỏ Trung thu', lv: 1, doc: 1, dep: 20 },
  'lh-bianpao': { zh: '鞭炮', py: 'biānpào', vn: 'Dây pháo Tết', lv: 1, doc: 1, dep: 20 },
  'lh-longzhou': { zh: '龙舟', py: 'lóngzhōu', vn: 'Thuyền rồng', lv: 1, doc: 1, dep: 22 },
  'lh-gongdeng': { zh: '宫灯', py: 'gōngdēng', vn: 'Đèn cung đình', lv: 1, doc: 1, dep: 20 },
  // Doc quyen: cup cho lop dung top 3 thi tran tuan
  'cup-vang': { zh: '金杯', py: 'jīnbēi', vn: 'Cúp vàng thị trấn', lv: 1, doc: 1, dep: 30 },
  'cup-bac': { zh: '银杯', py: 'yínbēi', vn: 'Cúp bạc thị trấn', lv: 1, doc: 1, dep: 24 },
  'cup-dong': { zh: '铜杯', py: 'tóngbēi', vn: 'Cúp đồng thị trấn', lv: 1, doc: 1, dep: 18 },
  // Doc quyen: qua tram cuoi moi vung dat tren Ban do phieu luu (nong-trai-phieuluu.js)
  'pl-lang': { zh: '拼音石', py: 'pīnyīn shí', vn: 'Bia đá pinyin', lv: 1, doc: 1, dep: 25 },
  'pl-thung': { zh: '词汇树', py: 'cíhuì shù', vn: 'Cây từ vựng', lv: 1, doc: 1, dep: 30 },
  'pl-pho': { zh: '茶馆', py: 'cháguǎn', vn: 'Quán trà giao tiếp', lv: 1, doc: 1, dep: 35 },
  'pl-dao': { zh: '灯塔', py: 'dēngtǎ', vn: 'Ngọn hải đăng ngữ pháp', lv: 1, doc: 1, dep: 40 },
  'pl-de': { zh: '金龙像', py: 'jīnlóng xiàng', vn: 'Tượng rồng vàng Đế Chế', lv: 1, doc: 1, dep: 60 },
};
// Doc quyen: qua tung chuong cot truyen (noi dung o nong-trai-truyen.js)
Object.assign(TT, require('./nong-trai-truyen').TT);
// Bo suu tap chu Han: 1 chu tra loi dung 3 lan trong Thu thach = 1 the; du moc thi nhan do doc quyen
const THE_DUNG = 3;
const MOC_THE = [{ n: 10, k: 'den-phuc' }, { n: 25, k: 'cau-doi' }, { n: 50, k: 'bang-chu' }, { n: 100, k: 'bia-trang' }];
// Hoc vi theo tong sao hoc tap (khong mua duoc bang xu)
const HOC_VI = [
  { sao: 0, zh: '童生', vn: 'Đồng sinh' }, { sao: 100, zh: '秀才', vn: 'Tú tài' }, { sao: 300, zh: '举人', vn: 'Cử nhân' },
  { sao: 600, zh: '贡士', vn: 'Cống sĩ' }, { sao: 1000, zh: '进士', vn: 'Tiến sĩ' }, { sao: 1500, zh: '探花', vn: 'Thám hoa' },
  { sao: 2200, zh: '榜眼', vn: 'Bảng nhãn' }, { sao: 3000, zh: '状元', vn: 'Trạng nguyên' },
];
// Ban cho cua hang: goi dung ten tieng Trung +10%, sai chi 70%; han muc xu/ngay = 30 + 10 x sao hoc hom nay
const BAN_CO_BAN = 30, BAN_MOI_SAO = 10;

// Nha: nang cap 1 -> 2 -> 3
const NHA = [
  null,
  { zh: '小房子', py: 'xiǎo fángzi', vn: 'Nhà nhỏ', dep: 10 },
  { zh: '新房子', py: 'xīn fángzi', vn: 'Nhà có hiên', lv: 5, sao: 120, dep: 40 },
  { zh: '大房子', py: 'dà fángzi', vn: 'Nhà hai tầng', lv: 8, sao: 300, dep: 100 },
];
const KHO = { zh: '仓库', py: 'cāngkù', vn: 'Nhà kho', dep: 5 };
const O_DAT = { zh: '田', py: 'tián', vn: 'Ô ruộng' };

// Kich thuoc dat: mo rong bang sao
const DAT = [
  { w: 10, h: 8 },
  { w: 12, h: 10, sao: 30, lv: 2 },
  { w: 14, h: 12, sao: 60, lv: 4 },
  { w: 16, h: 14, sao: 100, lv: 6 },
  { w: 18, h: 16, sao: 160, lv: 8 },
  // Dat lon (co giao: du cap + tra bang xu); tu 20 o rong, lo dat trong thi tran to gap doi
  { w: 20, h: 18, xu: 2000, lv: 12, zh: '大农场', py: 'dà nóngchǎng', vn: 'Trang trại lớn' },
  { w: 22, h: 20, xu: 4000, lv: 16, zh: '大农场', py: 'dà nóngchǎng', vn: 'Trang trại lớn' },
  { w: 24, h: 22, xu: 7000, lv: 20, zh: '庄园', py: 'zhuāngyuán', vn: 'Điền trang' },
  { w: 26, h: 24, xu: 12000, lv: 25, zh: '庄园', py: 'zhuāngyuán', vn: 'Điền trang' },
  { w: 28, h: 26, xu: 20000, lv: 30, zh: '皇家庄园', py: 'huángjiā zhuāngyuán', vn: 'Điền trang hoàng gia' },
];
const O_MIEN_PHI = 4;
const CHAI_XU = 3; // gio qua giau trong bui cay canh ruong moi ngay (bam nhat; ten hanh dong 'chai' giu nguyen)
function giaODat(soO) { return 3 + Math.max(0, soO - O_MIEN_PHI); }
function oToiDa(lv) { return Math.min(40, 6 + 2 * lv); }

function lvTuXp(xp) {
  let n = 1;
  while (n < 30 && 5 * n * (n + 1) <= xp) n++;
  return n;
}
function xpCuaLv(n) { return 5 * n * (n - 1); }

// Nha may che bien dat tren nong trai: vat 'xg-<ma>' rong 2x2 (nong-trai-xuong.js)
const xgCua = (k) => (/^xg-/.test(String(k)) && XuongCat.XUONG[String(k).slice(3)] ? String(k).slice(3) : '');
function rong(o) {
  if (o.k === 'nha' || o.k === 'kho' || xgCua(o.k)) return 2;
  return (TT[o.k] && TT[o.k].w) || 1;
}

function nongTraiMoi() {
  const now = Date.now();
  return {
    v: 1, xp: 0, xu: 20, saoTieu: 0, dat: 0, nid: 10,
    o: [
      { id: 1, k: 'nha', x: 1, y: 1, n: 1 },
      { id: 2, k: 'kho', x: 4, y: 1 },
      { id: 3, k: 'o', x: 1, y: 4, c: 'lua', h: now }, // o dau tien chin san de em thu hoach ngay
      { id: 4, k: 'o', x: 2, y: 4 },
      { id: 5, k: 'o', x: 1, y: 5 },
      { id: 6, k: 'o', x: 2, y: 5 },
      { id: 7, k: 'ga', x: 6, y: 4, h: null },
      { id: 8, k: 'hoa-do', x: 7, y: 1 },
    ],
    kho: {}, // nong san
    tui: {}, // do trang tri / vat nuoi / o dat dang cat
    ngay: '', chuoi: 0,
    don: { d: '', x: [] },
    tham: { d: '', ids: [] },
    tim: 0,
    sap: [], // o sap hang: { id, k, n, gia }
    nk: [], nkXem: 0, // nhat ky + lan cuoi em xem
    giup: { d: '', n: 0 }, // so lan giup ban hom nay
    chao: { d: '', ids: [] }, // da gui loi chao cho ai hom nay
    tin: { d: '', dem: {}, tong: 0 }, // tin nhan da gui hom nay (theo ban)
    qua: { d: '', ids: [] }, // da tang qua cho ai hom nay
  };
}

function diemDep(f) {
  let d = 0;
  f.o.forEach((o) => {
    if (o.k === 'nha') d += NHA[o.n || 1].dep;
    else if (o.k === 'kho') d += KHO.dep;
    else if (TT[o.k]) d += TT[o.k].dep;
    else if (xgCua(o.k)) d += XuongCat.DEP;
  });
  return d;
}

// Don hang hom nay: sinh co dinh theo (nguoi, ngay) de may chu tinh lai duoc
function soNgauNhien(hat) {
  let s = 0;
  for (let i = 0; i < hat.length; i++) s = (s * 31 + hat.charCodeAt(i)) >>> 0;
  return function () {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
// ngoai = [{ k, id, ten }]: dac san cua cac ban (da xep: mon em khong tu lam duoc, ban dang co san len truoc)
function donHang(f, userId, ngay, ngoai) {
  const lv = lvTuXp(f.xp);
  const coCon = {};
  f.o.forEach((o) => { if (CON[o.k]) coCon[o.k] = 1; });
  const hang = Object.keys(CAY).filter((k) => CAY[k].lv <= lv)
    .concat(Object.keys(CON).filter((k) => coCon[k]).map((k) => CON[k].sp), XuongCat.hangCua(f));
  const r = soNgauNhien(userId + '|' + ngay);
  const ds = [];
  for (let i = 0; i < 3; i++) {
    const loai = Math.min(hang.length, r() < 0.5 ? 1 : 2);
    const can = {};
    let tien = 0, xp = 2;
    for (let j = 0; j < loai; j++) {
      let k = hang[Math.floor(r() * hang.length)];
      let thu = 0;
      while (can[k] && thu++ < 5) k = hang[Math.floor(r() * hang.length)];
      if (can[k]) continue;
      const laCay = !!CAY[k];
      const sl = laCay ? 2 + Math.floor(r() * 3) : 1 + Math.floor(r() * 2);
      can[k] = sl;
      tien += SP[k].ban * sl;
      xp += sl;
    }
    ds.push({ can, xu: Math.round(tien * 1.6) + 5, xp });
  }
  // Don thu 3: can dac san cua ban khac -> phai mua ban voi nhau (tra cong cao hon don thuong)
  if (ngoai && ngoai.length) {
    const top = ngoai.slice(0, Math.min(3, ngoai.length));
    const x = top[Math.floor(r() * top.length)];
    const sl = CAY[x.k] ? 2 + Math.floor(r() * 2) : 1 + Math.floor(r() * 2);
    ds[2] = { can: { [x.k]: sl }, xu: Math.round(SP[x.k].ban * sl * 2) + 8, xp: 3 + sl, ban: { id: x.id, ten: x.ten } };
  }
  return ds;
}

// Don hang chot 1 lan moi ngay (len cap giua ngay khong doi don dang lam)
function donHomNay(f, userId, ngay, ngoai) {
  if (f.don.d !== ngay || !Array.isArray(f.don.ds)) {
    f.don = { d: ngay, x: [], ds: donHang(f, userId, ngay, ngoai) };
    return { ds: f.don.ds, moi: true };
  }
  return { ds: f.don.ds, moi: false };
}

// ---- Choi cung ban ----
// Sap hang: bay nong san cho ban cung lop mua bang xu. Gia moi o trong khoang
// 0,5x - 2x gia ban cho cua hang (khong "chuyen xu" qua lon giua cac ban).
function soOSap(lv) { return lv >= 5 ? 6 : 4; }
const SAP_SL_TOI_DA = 20;
// Mua cua ban: 3 lan dau moi ngay duoc hoan 20% xu, lan thu 3 them 1 luot vong quay
const MUA_THUONG_SO = 3, MUA_HOAN = 0.2;
// hs = he so cung - cau luc bay sap (hang dang thieu thi tran gia cao hon)
function khoangGia(k, n, hs) {
  const goc = SP[k].ban * n;
  return { min: Math.max(1, Math.ceil(goc * 0.5)), max: Math.max(1, Math.round(goc * 1.3 * (hs || 1))), goc };
}
function cauCanMua(k, n) {
  const l = LUONG[k] || '个';
  const so = n === 1 ? (l === '个' || l === '份' ? 'yí' : 'yì') : SO_PY[n];
  return { zh: '我想买' + SO_ZH[n] + l + SP[k].zh + '。', py: 'Wǒ xiǎng mǎi ' + so + ' ' + (LUONG_PY[l] || '') + ' ' + SP[k].py + '.',
    vn: 'Mình muốn mua ' + n + ' ' + SP[k].vn.toLowerCase() + '.' };
}
// Gia dang ban cua 1 o sap: khong qua tran 1,3x; qua 1 ngay chua ai mua thi moi ngay giam 15% (khong duoi gia san)
function giaSap(o) {
  if (!SP[o.k]) return o.gia;
  const kg = khoangGia(o.k, o.n, o.hs);
  let g = Math.min(o.gia, kg.max);
  const ngay = o.t ? Math.floor((Date.now() - o.t) / 86400000) : 0;
  if (ngay >= 1) g = Math.round(g * Math.pow(0.85, ngay));
  return Math.max(kg.min, g);
}
function sapHien(ds) { return (ds || []).map((o) => Object.assign({}, o, { gia: giaSap(o), giaDat: o.gia })); }
// Giup ban (tuoi cay / cho vat nuoi an — phai tra loi cau on tu): toi da moi ngay
const GIUP_NGAY = 6;

// Thien tai 天灾 (co giao: da dang, moi ngay 1 kieu khac nhau): lv >= 2, vao nong trai choi duoc ~2 phut thi
// thien tai trong ngay ap den (khac cac kieu 6 ngay gan nhat), keo dai het ngay. Em vuot qua bang cau chu Han
// (moi cau dung = 1 phan viec), ban be sang giup duoc.
// Hieu ung (chung cho moi kieu): cay = nhan thoi gian cay moi gieo, thu = moi o chi thu duoc n, khongTrong = khong gieo,
// khongTuoi = khong tuoi duoc, con = nhan thoi gian vat nuoi, ban = nhan gia ban cho cua hang. canCon = chi den nha co vat nuoi.
const TAI = {
  gh: { zh: '干旱', py: 'gānhàn', vn: 'Hạn hán', hieu: 'Trời không mưa: cây mới gieo lớn chậm gấp đôi.', viec: 'Gánh nước cứu hạn', don: 'xô nước', dzh: '水桶', dpy: 'shuǐtǒng', can: 5, cay: 2,
    hoc: { zh: '天气很热，没有下雨。', py: 'Tiānqì hěn rè, méiyǒu xià yǔ.', vn: 'Trời rất nóng, không có mưa.' } },
  sau: { zh: '虫灾', py: 'chóngzāi', vn: 'Sâu bệnh', hieu: 'Sâu ăn lá: mỗi ô ruộng chỉ thu được 1 nông sản.', viec: 'Bắt sâu', don: 'con sâu', dzh: '虫子', dpy: 'chóngzi', can: 6, thu: 1,
    hoc: { zh: '菜上有很多虫子！', py: 'Cài shang yǒu hěn duō chóngzi!', vn: 'Trên rau có nhiều sâu quá!' } },
  mua: { zh: '暴雨', py: 'bàoyǔ', vn: 'Mưa bão', hieu: 'Ruộng ngập nước: chưa gieo hạt mới được.', viec: 'Đào rãnh thoát nước', don: 'nhát xẻng', dzh: '水沟', dpy: 'shuǐgōu', can: 5, khongTrong: 1,
    hoc: { zh: '外面下大雨了！', py: 'Wàimiàn xià dà yǔ le!', vn: 'Bên ngoài mưa to rồi!' } },
  ret: { zh: '寒潮', py: 'háncháo', vn: 'Rét đậm', hieu: 'Trời lạnh: vật nuôi cần gấp đôi thời gian mới cho sản phẩm.', viec: 'Kiếm củi sưởi ấm chuồng', don: 'bó củi', dzh: '木柴', dpy: 'mùchái', can: 5, con: 2, canCon: 1,
    hoc: { zh: '今天很冷，多穿衣服！', py: 'Jīntiān hěn lěng, duō chuān yīfu!', vn: 'Hôm nay rất lạnh, mặc nhiều áo vào!' } },
  bao: { zh: '台风', py: 'táifēng', vn: 'Bão lớn', hieu: 'Gió giật mạnh: cây và vật nuôi đều chậm hơn 1,5 lần.', viec: 'Chằng chống chuồng trại', don: 'sợi dây thừng', dzh: '绳子', dpy: 'shéngzi', can: 6, cay: 1.5, con: 1.5,
    hoc: { zh: '台风来了，风很大！', py: 'Táifēng lái le, fēng hěn dà!', vn: 'Bão đến rồi, gió to quá!' } },
  lu: { zh: '洪水', py: 'hóngshuǐ', vn: 'Lũ lụt', hieu: 'Nước lũ tràn ruộng: không tưới được, cây mới gieo lớn chậm 1,5 lần.', viec: 'Đắp bao cát chặn lũ', don: 'bao cát', dzh: '沙袋', dpy: 'shādài', can: 6, cay: 1.5, khongTuoi: 1,
    hoc: { zh: '河水太多了，快走！', py: 'Hé shuǐ tài duō le, kuài zǒu!', vn: 'Nước sông nhiều quá, đi mau!' } },
  chuot: { zh: '鼠灾', py: 'shǔzāi', vn: 'Chuột phá kho', hieu: 'Chuột gặm hàng trong kho: bán cho cửa hàng chỉ được 80% giá.', viec: 'Đặt bẫy bắt chuột', don: 'cái bẫy', dzh: '老鼠夹', dpy: 'lǎoshǔjiā', can: 5, ban: 0.8,
    hoc: { zh: '仓库里有老鼠！', py: 'Cāngkù li yǒu lǎoshǔ!', vn: 'Trong kho có chuột!' } },
  muada: { zh: '冰雹', py: 'bīngbáo', vn: 'Mưa đá', hieu: 'Đá rơi dập lá: mỗi ô ruộng chỉ thu được 1 nông sản.', viec: 'Dựng mái che ruộng', don: 'tấm mái', dzh: '棚子', dpy: 'péngzi', can: 5, thu: 1,
    hoc: { zh: '天上下冰雹了，别出去！', py: 'Tiān shang xià bīngbáo le, bié chūqu!', vn: 'Trời mưa đá rồi, đừng ra ngoài!' } },
  nong: { zh: '热浪', py: 'rèlàng', vn: 'Nắng nóng', hieu: 'Nóng gay gắt: vật nuôi mệt, cần lâu gấp 1,5 lần.', viec: 'Quạt mát cho vật nuôi', don: 'cái quạt', dzh: '扇子', dpy: 'shànzi', can: 5, con: 1.5, canCon: 1,
    hoc: { zh: '今天太热了，多喝水！', py: 'Jīntiān tài rè le, duō hē shuǐ!', vn: 'Hôm nay nóng quá, uống nhiều nước nhé!' } },
  suong: { zh: '大雾', py: 'dàwù', vn: 'Sương mù dày', hieu: 'Không thấy đường: cây mới gieo lớn chậm 1,5 lần.', viec: 'Thắp đèn soi đường', don: 'ngọn đèn', dzh: '灯', dpy: 'dēng', can: 5, cay: 1.5,
    hoc: { zh: '雾太大了，我看不见。', py: 'Wù tài dà le, wǒ kàn bu jiàn.', vn: 'Sương mù dày quá, mình không nhìn thấy.' } },
  cat: { zh: '沙尘暴', py: 'shāchénbào', vn: 'Bão cát', hieu: 'Bụi cát phủ hàng: bán cho cửa hàng chỉ được 80% giá, cây chậm 1,3 lần.', viec: 'Quét cát khỏi nông trại', don: 'cái chổi', dzh: '扫帚', dpy: 'sàozhou', can: 6, ban: 0.8, cay: 1.3,
    hoc: { zh: '风里都是沙子！', py: 'Fēng li dōu shì shāzi!', vn: 'Trong gió toàn là cát!' } },
  chau: { zh: '蝗灾', py: 'huángzāi', vn: 'Châu chấu', hieu: 'Đàn châu chấu kéo đến: mỗi ô ruộng chỉ thu được 1 nông sản.', viec: 'Đuổi châu chấu', don: 'cái lưới', dzh: '网', dpy: 'wǎng', can: 6, thu: 1,
    hoc: { zh: '好多蚂蚱在吃菜！', py: 'Hǎo duō màzha zài chī cài!', vn: 'Nhiều châu chấu đang ăn rau quá!' } },
};
const TAI_XU = 10, TAI_HAN_MS = 2 * 86400000, TAI_CHO_MS = 2 * 60000, TAI_NHO = 6, TAI_GIUP_NGAY = 3, TAI_GIUP_XU = 2;
const ngayVn = () => new Date(Date.now() + 7 * 3600000).toISOString().slice(0, 10);
// thien tai moi (co ngay d) het khi sang ngay moi; du lieu cu (khong co d) giu han 2 ngay
const taiConHan = (t) => (t.d ? t.d === ngayVn() : Date.now() - t.bd < TAI_HAN_MS);
const taiDang = (f, k) => !!(f.tai && !f.tai.xong && TAI[f.tai.k] && taiConHan(f.tai) && (!k || f.tai.k === k));
// gia tri hieu ung cua thien tai dang co (0 neu khong co)
// Khien bao ve 护盾: hoc du KHIEN_SAO sao trong ngay thi thien tai khong con tac dung (van chong de nhan thuong)
const KHIEN_SAO = 30;
const taiHieu = (f, x) => (taiDang(f) && !f.tai.khien && TAI[f.tai.k][x]) || 0;
const heSoTai = (f, x) => taiHieu(f, x) || 1;
function taiChoHs(f) {
  if (!taiDang(f)) return null;
  const t = TAI[f.tai.k];
  const het = f.tai.d ? Date.parse(f.tai.d + 'T00:00:00Z') - 7 * 3600000 + 86400000 : f.tai.bd + TAI_HAN_MS;
  return Object.assign({ k: f.tai.k, co: f.tai.co, bd: f.tai.bd, conMs: Math.max(0, het - Date.now()), xu: TAI_XU, khien: !!f.tai.khien }, t);
}
// Mo dan tinh nang theo cap (co giao); client hien loi gioi thieu ngan khi len cap / lan dau mo
const MO_TN = {
  cau: { lv: 3, zh: '钓鱼湖', vn: 'Hồ câu cá', gt: 'Chạm bóng cá rồi thả câu: cá càng to càng quý, câu hỏi càng khó. Mỗi ngày có mồi câu theo số sao học.' },
  hd: { lv: 4, zh: '本周大订单', vn: 'Đơn lớn của thị trấn', gt: 'Cả lớp cùng gom hàng cho một đơn lớn mỗi tuần: góp hàng được trả xu, đủ đơn ai góp cũng có thưởng.' },
  tl: { lv: 5, zh: '商人', vn: 'Thương lái', gt: 'Thương lái đến chợ 3 lần mỗi ngày, đặt hàng bằng tiếng Trung — đọc hiểu, chọn đúng món thì bán được giá cao.' },
  nh: { lv: 6, zh: '餐厅', vn: 'Nhà hàng', gt: 'Mỗi ngày 3 vị khách gọi món bằng tiếng Trung — nấu đúng món rồi phục vụ để nhận xu.' },
  // them 2026-11 (thi dua + vuon tu kho) — xem nong-trai-thidua.js
  vuon: { lv: 2, zh: '难词花园', vn: 'Vườn từ khó', gt: 'Từ em hay sai thành hạt giống. Ôn đúng từ đó vào ngày đến hạn thì cây lớn; 3 lần thì nở hoa và cho quà hiếm. Ôn sai cây chỉ héo một chút, không bao giờ chết.' },
  bc: { lv: 3, zh: '最美农场', vn: 'Bình chọn nông trại đẹp', gt: 'Sang thăm nông trại bạn và bấm 👍 Thích (mỗi ngày 5 lượt). Top 3 tuần được gắn ruy băng trên nông trại.' },
  tdh: { lv: 3, zh: '学习挑战', vn: 'Thách đấu học 24 giờ', gt: 'Mời một bạn cùng lớp đua học trong 24 giờ: ai kiếm được nhiều sao học hơn thì thắng (+60 xu), cả hai cùng học được +10 xu.' },
  // them 2026-11-13 (kinh te nong trai) — xem nong-trai-kt.js, nong-trai-xuong.js, nong-trai-phieuluu.js
  truyen: { lv: 1, zh: '村里的故事', vn: 'Câu chuyện làng Tre Xanh', gt: 'Mỗi tuần một chương truyện mới với bà Lan, chú Tư, cô Mai, ông Bách và Minh Minh — cậu bạn hàng xóm chỉ nói tiếng Trung. Đọc truyện, hiểu câu tiếng Trung (lấy từ bài em đã học), làm việc giúp cả làng và nhận quà.' },
  pl: { lv: 1, zh: '冒险地图', vn: 'Bản đồ phiêu lưu', gt: 'Năm vùng đất: Làng Khởi Đầu (pinyin), Thung Lũng Từ Vựng, Thành Phố Giao Tiếp (hội thoại), Đảo Ngữ Pháp và Đế Chế Hán Ngữ. Mỗi trạm 5 câu từ bài em đã học — đúng 4/5 là qua trạm, nhận quà lần đầu.' },
  cho: { lv: 3, zh: '农贸市场', vn: 'Chợ nông sản', gt: 'Giá ở chợ lên xuống theo cung cầu cả lớp: nhiều bạn bán thì giá giảm, nhiều bạn mua thì giá tăng. Bán đúng lúc giá cao (vẫn tính hạn mức bán ngày), mua hạt giống, đường, muối, thức ăn chăn nuôi.' },
  xuong: { lv: 5, zh: '加工厂', vn: 'Nhà máy chế biến', gt: 'Xây cối xay bột, lò bánh, xưởng sữa, xưởng nước ép: biến nông sản thành hàng chế biến đắt hơn — cần cho nhà hàng, đơn hàng và xuất khẩu. Muốn làm nhanh? Trả lời 1–3 câu từ bài đã học.' },
  tiem: { lv: 6, zh: '我的小店', vn: 'Cửa hàng riêng', gt: 'Mở tiệm riêng: bày hàng với giá trong khoảng ±30% giá chợ, các bạn cùng lớp vào mua. Chợ thu phí 5%; hàng bày quá 48 giờ tự về kho.' },
  nc: { lv: 7, zh: '雇工', vn: 'Nhân công', gt: 'Thuê người thu hoạch, người chăn nuôi, người vận chuyển. Họ chỉ đi làm vào ngày em học đủ 10 sao (ngày em không học, họ nghỉ phép và không lấy lương). Tưới nước, cho ăn vẫn là việc của em!' },
  xk: { lv: 8, zh: '出口', vn: 'Xuất khẩu', gt: 'Chở hàng sang các vùng đất trên Bản đồ phiêu lưu: mỗi tuần mỗi vùng cần hàng khác nhau, trả thêm 20–60%. Giấy tờ là câu hỏi tiếng Trung theo kiểu của vùng đất — trả lời đúng mới xuất hàng được.' },
  dg: { lv: 10, zh: '拍卖会', vn: 'Đấu giá', gt: 'Mỗi tuần có phiên đấu giá hạt giống quý, vật nuôi hiếm, đồ trang trí đặc biệt. Đặt giá bằng xu — xu được giữ lại, ai trả cao hơn thì em được hoàn xu ngay.' },
};
// Giai dau thi dua theo cap nong trai
const GIAI = [
  { tu: 1, den: 5, zh: '铜', vn: 'Đồng' }, { tu: 6, den: 10, zh: '银', vn: 'Bạc' }, { tu: 11, den: 15, zh: '金', vn: 'Vàng' },
  { tu: 16, den: 20, zh: '白金', vn: 'Bạch kim' }, { tu: 21, den: 99, zh: '钻石', vn: 'Kim cương' },
];
const giaiCua = (lv) => GIAI.findIndex((g) => lv >= g.tu && lv <= g.den);
// On cach quang (Leitner): tu tra loi dung len hop, sai ve hop 0; hop n hen on lai sau ON_NGAY[n] ngay
const ON_NGAY = [0, 1, 3, 7, 14, 30];
function ghiOn(f, zh, dung) {
  if (!zh) return;
  f.on = f.on || {};
  const x = f.on[zh] || [0, 0];
  const hop = dung ? Math.min(ON_NGAY.length - 1, x[0] + 1) : 0;
  const denHan = !f.on[zh] || x[1] <= Date.now();
  f.on[zh] = [hop, Date.now() + ON_NGAY[hop] * 86400000 + (dung ? 0 : 10 * 60000)];
  // Vuon tu kho: on dung dung ngay den han -> cay lon 1 bac (3 bac thi no hoa); sai -> heo lui 1 bac (khong chet)
  const p = f.vuon && Array.isArray(f.vuon.o) ? f.vuon.o.find((y) => y.zh === zh) : null;
  if (p && p.gd < 3) {
    if (dung && denHan) { p.gd++; p.t = Date.now(); delete p.heo; }
    else if (!dung && p.gd > 0) { p.gd--; p.heo = Date.now(); }
  }
  const ks = Object.keys(f.on);
  if (ks.length > 500) ks.sort((a, b) => f.on[b][1] - f.on[a][1]).slice(0, ks.length - 500).forEach((k) => { delete f.on[k]; });
}
// Du lieu net chu cua bai (cho cau "viet chu"): doc public/js/<bai>-strokes.js, luu bo nho
const netCache = new Map();
function netCuaBai(url) {
  if (netCache.has(url)) return netCache.get(url);
  let net = {};
  const m = /^\/lessons\/([a-z0-9-]+)\.html$/.exec(String(url || ''));
  const file = m && path.join(__dirname, 'public', 'js', m[1] + '-strokes.js');
  if (file && fsMod.existsSync(file)) {
    try {
      const sb = {};
      vmMod.runInNewContext(fsMod.readFileSync(file, 'utf8') + '\n;this.__n = typeof STROKE_DATA !== "undefined" ? STROKE_DATA : null;', sb, { timeout: 3000 });
      net = sb.__n || {};
    } catch (e) { net = {}; }
  }
  netCache.set(url, net);
  return net;
}
// Loi chao co san (khong go chu tu do): vua choi vua doc tieng Trung
const LOI_CHAO = [
  { zh: '你好！', py: 'Nǐ hǎo!', vn: 'Chào bạn!' },
  { zh: '你的农场真漂亮！', py: 'Nǐ de nóngchǎng zhēn piàoliang!', vn: 'Nông trại của bạn đẹp quá!' },
  { zh: '加油！', py: 'Jiāyóu!', vn: 'Cố lên nhé!' },
  { zh: '谢谢你！', py: 'Xièxie nǐ!', vn: 'Cảm ơn bạn!' },
  { zh: '我们一起学习吧！', py: 'Wǒmen yìqǐ xuéxí ba!', vn: 'Mình cùng học nhé!' },
  { zh: '你的动物很可爱！', py: 'Nǐ de dòngwù hěn kě\'ài!', vn: 'Vật nuôi của bạn dễ thương quá!' },
  { zh: '欢迎来我的农场！', py: 'Huānyíng lái wǒ de nóngchǎng!', vn: 'Mời bạn sang nông trại mình chơi!' },
  { zh: '明天见！', py: 'Míngtiān jiàn!', vn: 'Mai gặp lại nhé!' },
  // (8 cau tren giu nguyen thu tu: nhat ky cu luu theo so thu tu)
  { zh: '早上好！', py: 'Zǎoshang hǎo!', vn: 'Chào buổi sáng!' },
  { zh: '晚上好！', py: 'Wǎnshang hǎo!', vn: 'Chào buổi tối!' },
  { zh: '好久不见！', py: 'Hǎojiǔ bú jiàn!', vn: 'Lâu rồi không gặp!' },
  { zh: '你真棒！', py: 'Nǐ zhēn bàng!', vn: 'Bạn giỏi quá!' },
  { zh: '生日快乐！', py: 'Shēngrì kuàilè!', vn: 'Chúc mừng sinh nhật!' },
  { zh: '考试加油！', py: 'Kǎoshì jiāyóu!', vn: 'Thi tốt nhé!' },
  { zh: '对不起！', py: 'Duìbuqǐ!', vn: 'Xin lỗi bạn!' },
  { zh: '我们是好朋友！', py: 'Wǒmen shì hǎo péngyou!', vn: 'Chúng mình là bạn tốt!' },
];

// ---- Noi chuyen bang tieng Trung (chon mau, khong go chu tu do) ----
// Ghep cau: mau cau + 1 tu dien vao cho trong {x}. Tu lay tu danh sach o (slot).
const TIN_TU = {
  viec: [
    { k: 'hoc', zh: '学习', py: 'xuéxí', vn: 'học bài' },
    { k: 'choi', zh: '玩', py: 'wán', vn: 'chơi' },
    { k: 'trongrau', zh: '种菜', py: 'zhòng cài', vn: 'trồng rau' },
    { k: 'choan', zh: '喂动物', py: 'wèi dòngwù', vn: 'cho vật nuôi ăn' },
    { k: 'hat', zh: '唱歌', py: 'chàng gē', vn: 'hát' },
    { k: 'docsach', zh: '看书', py: 'kàn shū', vn: 'đọc sách' },
    { k: 'congvien', zh: '去公园', py: 'qù gōngyuán', vn: 'đi công viên' },
    { k: 'vietchu', zh: '写汉字', py: 'xiě Hànzì', vn: 'viết chữ Hán' },
    { k: 'dabong', zh: '踢足球', py: 'tī zúqiú', vn: 'đá bóng' },
  ],
  giup: [
    { k: 'tuoi', zh: '浇水', py: 'jiāo shuǐ', vn: 'tưới nước' },
    { k: 'choan', zh: '喂动物', py: 'wèi dòngwù', vn: 'cho vật nuôi ăn' },
    { k: 'thu', zh: '收菜', py: 'shōu cài', vn: 'thu hoạch' },
    { k: 'hoc', zh: '学习汉语', py: 'xuéxí Hànyǔ', vn: 'học tiếng Trung' },
  ],
};
// slot 'mon' = vat nuoi / do trang tri (CON, TT); 'sp' = nong san (SP)
const TIN_MAU = [
  { zh: '你的{x}真漂亮！', py: 'Nǐ de {x} zhēn piàoliang!', vn: '{x} của bạn đẹp quá!', o: 'mon' },
  { zh: '我们一起{x}吧！', py: 'Wǒmen yìqǐ {x} ba!', vn: 'Mình cùng {x} nhé!', o: 'viec' },
  { zh: '谢谢你帮我{x}！', py: 'Xièxie nǐ bāng wǒ {x}!', vn: 'Cảm ơn bạn đã giúp mình {x}!', o: 'giup' },
  { zh: '我想买你的{x}。', py: 'Wǒ xiǎng mǎi nǐ de {x}.', vn: 'Mình muốn mua {x} của bạn.', o: 'sp' },
  { zh: '我很喜欢{x}！', py: 'Wǒ hěn xǐhuan {x}!', vn: 'Mình rất thích {x}!', o: 'mon' },
  { zh: '明天我们去{x}，好吗？', py: 'Míngtiān wǒmen qù {x}, hǎo ma?', vn: 'Mai mình đi {x} nhé, được không?', o: 'viec' },
];
// Hoi ban: ban tra loi bang 1 trong cac cau co san -> thanh 1 doan hoi thoai nho trong nhat ky 2 ben
const TIN_HOI = [
  { zh: '你今天学习了吗？', py: 'Nǐ jīntiān xuéxí le ma?', vn: 'Hôm nay bạn học bài chưa?', a: [
    { zh: '学了！', py: 'Xué le!', vn: 'Học rồi!' }, { zh: '还没有。', py: 'Hái méiyǒu.', vn: 'Chưa.' }, { zh: '我正在学习。', py: 'Wǒ zhèngzài xuéxí.', vn: 'Mình đang học.' }] },
  { zh: '你喜欢什么动物？', py: 'Nǐ xǐhuan shénme dòngwù?', vn: 'Bạn thích con vật gì?', a: [
    { zh: '我喜欢鸡。', py: 'Wǒ xǐhuan jī.', vn: 'Mình thích gà.' }, { zh: '我喜欢牛。', py: 'Wǒ xǐhuan niú.', vn: 'Mình thích bò.' },
    { zh: '我喜欢羊。', py: 'Wǒ xǐhuan yáng.', vn: 'Mình thích cừu.' }, { zh: '我喜欢猫。', py: 'Wǒ xǐhuan māo.', vn: 'Mình thích mèo.' }] },
  { zh: '你有几只鸡？', py: 'Nǐ yǒu jǐ zhī jī?', vn: 'Bạn có mấy con gà?', a: [
    { zh: '我有一只鸡。', py: 'Wǒ yǒu yì zhī jī.', vn: 'Mình có một con gà.' }, { zh: '我有两只鸡。', py: 'Wǒ yǒu liǎng zhī jī.', vn: 'Mình có hai con gà.' },
    { zh: '我有很多鸡。', py: 'Wǒ yǒu hěn duō jī.', vn: 'Mình có nhiều gà lắm.' }, { zh: '我没有鸡。', py: 'Wǒ méiyǒu jī.', vn: 'Mình không có gà.' }] },
  { zh: '你喜欢我的农场吗？', py: 'Nǐ xǐhuan wǒ de nóngchǎng ma?', vn: 'Bạn thích nông trại của mình không?', a: [
    { zh: '很喜欢！', py: 'Hěn xǐhuan!', vn: 'Thích lắm!' }, { zh: '非常漂亮！', py: 'Fēicháng piàoliang!', vn: 'Đẹp vô cùng!' }, { zh: '还可以。', py: 'Hái kěyǐ.', vn: 'Cũng được.' }] },
  { zh: '你在做什么？', py: 'Nǐ zài zuò shénme?', vn: 'Bạn đang làm gì thế?', a: [
    { zh: '我在种菜。', py: 'Wǒ zài zhòng cài.', vn: 'Mình đang trồng rau.' }, { zh: '我在学习汉语。', py: 'Wǒ zài xuéxí Hànyǔ.', vn: 'Mình đang học tiếng Trung.' },
    { zh: '我在喂动物。', py: 'Wǒ zài wèi dòngwù.', vn: 'Mình đang cho vật nuôi ăn.' }] },
  { zh: '你最喜欢吃什么？', py: 'Nǐ zuì xǐhuan chī shénme?', vn: 'Bạn thích ăn gì nhất?', a: [
    { zh: '我喜欢吃草莓。', py: 'Wǒ xǐhuan chī cǎoméi.', vn: 'Mình thích ăn dâu tây.' }, { zh: '我喜欢吃玉米。', py: 'Wǒ xǐhuan chī yùmǐ.', vn: 'Mình thích ăn ngô.' },
    { zh: '我喜欢吃鸡蛋。', py: 'Wǒ xǐhuan chī jīdàn.', vn: 'Mình thích ăn trứng.' }] },
  { zh: '明天一起玩，好吗？', py: 'Míngtiān yìqǐ wán, hǎo ma?', vn: 'Mai mình chơi cùng nhé, được không?', a: [
    { zh: '好啊！', py: 'Hǎo a!', vn: 'Được thôi!' }, { zh: '明天我很忙。', py: 'Míngtiān wǒ hěn máng.', vn: 'Mai mình bận lắm.' }, { zh: '好，明天见！', py: 'Hǎo, míngtiān jiàn!', vn: 'Ừ, mai gặp nhé!' }] },
  { zh: '你会写汉字吗？', py: 'Nǐ huì xiě Hànzì ma?', vn: 'Bạn biết viết chữ Hán không?', a: [
    { zh: '会一点儿。', py: 'Huì yìdiǎnr.', vn: 'Biết một chút.' }, { zh: '我会写很多汉字！', py: 'Wǒ huì xiě hěn duō Hànzì!', vn: 'Mình viết được nhiều chữ Hán lắm!' }, { zh: '还不会。', py: 'Hái bú huì.', vn: 'Chưa biết.' }] },
];
const TIN_BAN_NGAY = 3;   // moi ban toi da 3 tin moi ngay
const TIN_NGAY = 20;      // tong so tin moi ngay
const QUA_NGAY = 3;       // tang toi da 3 mon qua moi ngay (moi ban 1 mon)
// Nhat ky nong trai: ai da tha tim, tuoi giup, mua hang, gui loi chao (giu 30 dong moi nhat)
function ghiNk(f, e) {
  e.t = Date.now();
  f.nk = [e].concat(Array.isArray(f.nk) ? f.nk : []).slice(0, 30);
}

// ---- Nhan vat ao cua moi em (dung tren nong trai, hien khi sang nha ban, tren lo dat thi tran) ----
// av = { da, toc, mt, ao, ma, duoi, md, mu, mm, kinh }: kieu la chu, mau la so thu tu bang mau o client.
const NV_KIEU = {
  gt: ['', 'nam'], // '' = ban nu (nhan vat luu truoc khi co lua chon nay)
  toc: ['ngan', 'xu', 'bob', 'dai', 'duoi', 'bui', 'renngoi', 'xoan', 'dinh'],
  ao: ['thun', 'khoac', 'somi', 'aodai', 'thethao', 'vest', 'bexin'],
  duoi: ['dai', 'short', 'vay'],
  mu: ['', 'luoi', 'nonla', 'len', 'no', 'vuong', 'bao', 'coi', 'tho', 'meo', 'hoa', 'bep', 'kep', 'tainghe', 'nguoc'],
  kinh: ['', 'den', 'tron', 'tim', 'sao', 'boi', 'vuong'],
  pk: ['', 'balo', 'khan', 'cavat', 'noco', 'quat', 'bongbay', 'sach', 'denlong', 'tui', 'gau', 'bongda', 'vot'],
  mat: ['', 'tit', 'nhay', 'sao', 'le'],
};
const NV_SO_MAU = { da: 4, mt: 6, ma: 8, md: 8, mm: 8, mp: 8 };
// mon dac biet tra bang sao (mua 1 lan, doi qua lai mien phi)
const NV_SAO = {
  'ao:aodai': 25, 'mu:vuong': 20, 'kinh:tim': 10,
  'mu:tho': 15, 'mu:hoa': 12, 'kinh:sao': 12, 'pk:gau': 15, 'pk:denlong': 10, 'pk:bongbay': 8,
};
function kiemNhanVat(v) {
  if (!v || typeof v !== 'object') return null;
  const av = {};
  for (const k of Object.keys(NV_KIEU)) {
    const x = String(v[k] == null ? '' : v[k]);
    if (NV_KIEU[k].indexOf(x) < 0) return null;
    av[k] = x;
  }
  for (const k of Object.keys(NV_SO_MAU)) {
    const n = v[k] == null ? 0 : Number(v[k]); // nhan vat luu truoc khi co mau phu kien
    if (!Number.isInteger(n) || n < 0 || n >= NV_SO_MAU[k]) return null;
    av[k] = n;
  }
  return av;
}

// ---- Vong quay: chon 1 o theo trong so va phat qua vao f (ham thuan, dung lai trong tools/thu-kinh-te-nong-trai.js) ----
// rnd = ham ngau nhien [0,1). Tra ve { i: chi so o, qua: {loai, k, n, ...}, sp: {k: n} hang vao kho }
function hangChuotAn(k) {
  const s = SP[k];
  return !!s && !s.hiem && !s.nl && !s.mon && !s.ca && (s.gc || (CAY[k] && !CAY[k].hiem) || (s.ban < 95 && Object.keys(CON).some((c) => CON[c].sp === k)));
}
function quayO(f, lv, rnd) {
  const tong = VQ_O.reduce((a, o) => a + o.w, 0);
  let r = rnd() * tong, i = 0;
  while (i < VQ_O.length - 1 && r >= VQ_O[i].w) { r -= VQ_O[i].w; i++; }
  const o = VQ_O[i], chon = (ds) => ds[Math.floor(rnd() * ds.length)];
  const cayMo = Object.keys(CAY).filter((k) => !CAY[k].hiem && CAY[k].lv <= Math.max(1, lv));
  const out = { i, qua: { loai: o.loai, n: o.n } };
  f.hat = f.hat || {};
  const themTui = (k) => { f.tui[k] = (f.tui[k] || 0) + 1; };
  const ttNgau = () => chon(Object.keys(TT).filter((x) => TT[x].lv <= lv + 1 && !TT[x].doc));
  if (o.loai === 'xu') f.xu += o.n;
  else if (o.loai === 'hat') { const k = chon(cayMo); f.hat[k] = (f.hat[k] || 0) + o.n; out.qua.k = k; }
  else if (o.loai === 'hatquy') { const k = chon(CAY_HIEM); f.hat[k] = (f.hat[k] || 0) + o.n; out.qua.k = k; }
  else if (o.loai === 'sp') {
    const coCon = {};
    f.o.forEach((x) => { if (CON[x.k]) coCon[CON[x.k].sp] = 1; });
    const ds = cayMo.concat(Object.keys(coCon).filter((k) => SP[k].ban < 95));
    const k = chon(ds);
    f.kho[k] = (f.kho[k] || 0) + o.n; out.qua.k = k; out.sp = { [k]: o.n };
  } else if (o.loai === 'tt') { const k = ttNgau(); themTui(k); out.qua.k = k; }
  else if (o.loai === 'con') {
    const ds = Object.keys(CON).filter((k) => CON[k].lv <= lv + 3 && f.o.filter((x) => x.k === k).length + (f.tui[k] || 0) < CON_TOI_DA);
    if (ds.length) { const k = chon(ds); themTui(k); out.qua.k = k; } else { const k = ttNgau(); themTui(k); out.qua = { loai: 'tt', k, n: 1 }; }
  } else if (o.loai === 'x2') {
    // dang co ×2 chua dung -> doi thanh 10 xu (khong cong don)
    if (f.x2thu) { f.xu += 10; out.qua = { loai: 'x2', n: 2, du: 1, xu: 10 }; } else f.x2thu = 1;
  } else if (o.loai === 'chuot') {
    // chuot gam 1–3 mon cua 1 loai hang thuong; khong qua 10% tong kho, khong dung hang quy / ca / mon an / hang mua o cho
    const tongKho = Object.keys(f.kho).reduce((a, k) => a + (f.kho[k] || 0), 0);
    const tran = Math.floor(tongKho * VQ_CHUOT_PHAN);
    const ds = Object.keys(f.kho).filter((k) => f.kho[k] > 0 && hangChuotAn(k));
    const muon = 1 + Math.floor(rnd() * VQ_CHUOT_TOI_DA);
    if (!ds.length || tran < 1) out.qua = { loai: 'chuot', n: 0, doi: 1 };
    else {
      const k = chon(ds), n = Math.min(muon, tran, f.kho[k]);
      f.kho[k] -= n; if (!f.kho[k]) delete f.kho[k];
      out.qua = { loai: 'chuot', k, n };
    }
  }
  return out;
}
// Thu hoach cac o ruong da chin (em bam hoac nguoi lam thue): ×2 tu vong quay ap dung toi da VQ_X2_O o
function thuRuong(f, ds, dacSanEm, congSp) {
  let x2 = f.x2thu ? VQ_X2_O : 0, dung = 0, xp = 0, dacSan = '';
  ds.forEach((o) => {
    let n = (taiHieu(f, 'thu') || THU_MOI_O) + (o.c === dacSanEm ? 1 : 0);
    if (x2 > 0) { n *= 2; x2--; dung++; }
    congSp(o.c, n);
    if (o.c === dacSanEm) dacSan = o.c;
    xp += CAY[o.c].xp;
    o.c = null; o.h = null; o.t = 0;
  });
  if (dung) delete f.x2thu;
  return { xp, dacSan, x2: dung };
}
// Nhat san pham vat nuoi (dac san +1, an thuc an chan nuoi +1)
function nhatCon(f, ds, dacSanEm, congSp) {
  let xp = 0, dacSan = '';
  ds.forEach((o) => {
    const sp = CON[o.k].sp;
    congSp(sp, (sp === dacSanEm ? 2 : 1) + (o.sl ? 1 : 0));
    if (sp === dacSanEm) dacSan = sp;
    xp += CON[o.k].xp;
    o.h = null; delete o.sl;
  });
  return { xp, dacSan };
}

module.exports = function ganNongTrai(app, d) {
  let thiDua = null; // nong-trai-thidua.js (gan o cuoi)
  let xuongMod = null; // nong-trai-xuong.js (gan o cuoi)
  let tinMod = null;   // nong-trai-tin.js (gan o cuoi)
  const FILE = path.join(d.DATA_DIR, 'farms.json');
  const khoa = new Map(); // userId -> Promise (xu ly lan luot tung nguoi)
  const suKienHook = []; // (f, ten su kien, so) — cot truyen dem viec
  const suKien = (f, ten, n) => { suKienHook.forEach((fn) => { try { fn(f, ten, n); } catch (e) { /* bo qua */ } }); };
  const vaoHook = [];  // async (user, f) -> true neu da doi f (chay trong khoa cua em khi mo nong trai)
  const ttThem = [];   // (userId, f, st) -> them truong vao trang thai gui client

  async function initTable() {
    if (!d.USE_DB) return;
    await d.db().query(
      'CREATE TABLE IF NOT EXISTS farms (' +
        'user_id VARCHAR(36) PRIMARY KEY, ' +
        'data MEDIUMTEXT NOT NULL, ' +
        'lv INT NOT NULL DEFAULT 1, ' +
        'dep INT NOT NULL DEFAULT 0, ' +
        'updated_ms BIGINT NOT NULL, ' +
        'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
      ')'
    );
  }

  async function doc(userId) {
    let raw = null;
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      raw = all[userId] || null;
    } else {
      const [rows] = await d.db().query('SELECT data FROM farms WHERE user_id = ?', [userId]);
      if (rows.length) { try { raw = JSON.parse(rows[0].data); } catch (e) { raw = null; } }
    }
    if (!raw) return nongTraiMoi();
    return Object.assign(nongTraiMoi(), raw);
  }
  async function ghi(userId, f) {
    const lv = lvTuXp(f.xp), dep = diemDep(f);
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      all[userId] = f;
      d.writeJsonFile(FILE, all);
      return;
    }
    await d.db().query(
      'INSERT INTO farms (user_id, data, lv, dep, updated_ms) VALUES (?,?,?,?,?) ' +
        'ON DUPLICATE KEY UPDATE data=VALUES(data), lv=VALUES(lv), dep=VALUES(dep), updated_ms=VALUES(updated_ms)',
      [userId, JSON.stringify(f), lv, dep, Date.now()]
    );
  }
  async function tomTat(ids) {
    const out = {};
    if (!ids.length) return out;
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      ids.forEach((id) => { if (all[id]) out[id] = { lv: lvTuXp(all[id].xp || 0), dep: diemDep(all[id]), tim: all[id].tim || 0 }; });
      return out;
    }
    const [rows] = await d.db().query('SELECT user_id, lv, dep, data FROM farms WHERE user_id IN (?)', [ids]);
    rows.forEach((r) => {
      let tim = 0;
      try { tim = JSON.parse(r.data).tim || 0; } catch (e) { /* bo qua */ }
      out[r.user_id] = { lv: r.lv, dep: r.dep, tim };
    });
    return out;
  }

  function lanLuot(userId, fn) {
    const truoc = khoa.get(userId) || Promise.resolve();
    const sau = truoc.catch(() => {}).then(fn);
    khoa.set(userId, sau);
    sau.finally(() => { if (khoa.get(userId) === sau) khoa.delete(userId); }).catch(() => {});
    return sau;
  }

  async function saoCo(userId, f) {
    const s = await d.loadStar(userId);
    return Math.max(0, (s.total || 0) - (f.saoTieu || 0));
  }

  // Nhat ky kem ten ban (ten lay tu tai khoan, khong luu vao du lieu nong trai)
  async function nhatKy(f) {
    const ds = Array.isArray(f.nk) ? f.nk : [];
    if (!ds.length) return [];
    const ten = await d.loadUserNames();
    return ds.map((e) => Object.assign({}, e, { ten: ten[e.ai] || 'Một bạn' }));
  }

  // Sao hoc duoc hom nay / tuan nay (doc tu bang sao hoc tap, khong tinh sao da tieu)
  function saoHoc(s) {
    return {
      homNay: s.day === d.vnDayKey() ? d.starsToday(s) : 0,
      tuan: s.week === d.vnWeekKey() ? s.weekStars || 0 : 0,
    };
  }
  function daBanHomNay(f) { return f.banNgay && f.banNgay.d === d.vnDayKey() ? f.banNgay.xu : 0; }
  // Han muc xu kiem tu BAN HANG moi ngay (cua hang + thuong lai + nha hang + don lon): 30 + 10 x sao hoc hom nay
  async function hanMuc(userId, f) {
    const homNay = saoHoc(await d.loadStar(userId)).homNay;
    const toiDa = BAN_CO_BAN + BAN_MOI_SAO * homNay;
    return { toiDa, con: Math.max(0, toiDa - daBanHomNay(f)), homNay };
  }
  function ghiBanNgay(f, xu) { f.banNgay = { d: d.vnDayKey(), xu: daBanHomNay(f) + xu }; }
  // Nhiem vu hom nay: viec hoc + viec nong trai (mo theo cap); du 3 viec / du het -> nhan thuong
  function nhiemVu(f, homNay, lv) {
    const ngay = d.vnDayKey();
    const ds = [
      { k: 'hoc', ten: 'Học bài được 20 sao', xong: homNay >= 20 },
      { k: 'ruong', ten: 'Mở 1 rương học tập', xong: ruongDaMo(f).length > 0 },
      { k: 'chuhan', ten: 'Thử thách chữ Hán — mở 1 hộp quà', xong: !!(f.chQua && f.chQua.d === ngay && f.chQua.n > 0) },
      { k: 'don', ten: 'Giao 1 đơn hàng', xong: !!(f.don && f.don.d === ngay && Object.values(f.don.x || {}).some(Boolean)) },
    ];
    if (f.tai && f.tai.d === ngay) ds.push({ k: 'tai', ten: 'Chống thiên tai hôm nay', xong: f.tai.xong === 'ok' });
    if (lv >= MO_TN.cau.lv) ds.push({ k: 'cau', ten: 'Thả câu ở hồ cá', xong: !!(f.hc && f.hc.d === ngay && f.hc.n > 0) });
    if (lv >= MO_TN.nh.lv) ds.push({ k: 'nh', ten: 'Phục vụ 1 khách nhà hàng', xong: !!(f.nh && f.nh.d === ngay && f.nh.ds.some((o) => o.xong)) });
    const nhan = f.nv && f.nv.d === ngay ? f.nv.nhan : [];
    return { ds, xong: ds.filter((x) => x.xong).length, nhan, thuong: [{ can: 3, xu: 10 }, { can: ds.length, xu: 20, luot: 1 }] };
  }
  function soThe(f) { return Object.keys(f.the || {}).filter((z) => f.the[z][0] >= THE_DUNG).length; }
  // Khach nha hang hom nay (tao lan dau trong ngay): uu tien mon da mo khoa, co ca mon cao cap
  // xao tron co hat giong (cung em + cung ngay -> cung danh sach khach, ke ca truoc khi luu)
  function tronHat(a, hat) {
    a = a.slice();
    let x = hat;
    const r = () => { x = (x * 1103515245 + 12345) % 2147483648; return x / 2147483648; };
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }
  const hatChu = (str) => { let x = 7; for (const ch of str) x = (x * 31 + ch.charCodeAt(0)) % 2147483647; return x; };
  function nhaHang(f, lv, id) {
    const ngay = d.vnDayKey();
    if (f.nh && f.nh.d === ngay) return f.nh;
    const hat = hatChu(String(id) + ngay), tronMang = (a) => tronHat(a, hat + a.length);
    const mo = Object.keys(MON).filter((k) => !MON[k].lv || MON[k].lv <= lv);
    const cao = tronMang(mo.filter((k) => MON[k].lv)), thuong = tronMang(mo.filter((k) => !MON[k].lv));
    const chon = cao.slice(0, 2).concat(thuong).slice(0, NH_SO);
    const kh = tronMang(KHACH);
    f.nh = { d: ngay, ds: tronMang(chon).map((m, i) => ({ m, xu: Math.round(SP[m].ban * NH_HE_SO), kh: kh[i % kh.length], xong: 0 })) };
    return f.nh;
  }
  function ruongDaMo(f) { return f.ruong && f.ruong.d === d.vnDayKey() ? f.ruong.ds : []; }
  // Vong quay: so luot co / da quay / con lai hom nay
  function vongQuay(f, homNay) {
    const v = f.vq && f.vq.d === d.vnDayKey() ? f.vq : { n: 0, them: 0 };
    const co = VQ_MOC.reduce((a, m) => a + (homNay >= m.sao ? m.luot : 0), 0) + (v.them || 0);
    return { da: v.n || 0, co, con: Math.max(0, co - (v.n || 0)), moc: VQ_MOC.map((m) => Object.assign({ dat: homNay >= m.sao }, m)) };
  }
  async function tomThiTruong(userId) {
    try {
      const tt = await thiTruong(userId);
      return { dacSan: tt.dacSan[userId] || null, heSo: tt.heSo, can: tt.can, soNguoi: tt.soNguoi, cung: tt.cung, lop: tt.lop };
    } catch (e) { return null; }
  }
  async function trangThai(userId, f) {
    const ngay = d.vnDayKey();
    const lv = lvTuXp(f.xp);
    const don = donHomNay(f, userId, ngay).ds.map((x, i) => Object.assign({}, x, { xong: !!f.don.x[i] }));
    const sv = await d.loadStar(userId);
    const sh = saoHoc(sv);
    return {
      now: Date.now(),
      sao: Math.max(0, (sv.total || 0) - (f.saoTieu || 0)),
      hoc: { homNay: sh.homNay, tuan: sh.tuan, ruong: ruongDaMo(f), tong: sv.total || 0 },
      vq: vongQuay(f, sh.homNay),
      nv: nhiemVu(f, sh.homNay, lv),
      cau: moiCa({ n: f.hc && f.hc.d === ngay ? f.hc.n || 0 : 0 }, sh.homNay),
      ban: { da: daBanHomNay(f), toiDa: BAN_CO_BAN + BAN_MOI_SAO * sh.homNay }, x2thu: !!f.x2thu,
      the: soThe(f), theMoc: f.theMoc || 0,
      xu: f.xu, xp: f.xp, lv, xpLv: xpCuaLv(lv), xpSau: xpCuaLv(lv + 1),
      dat: f.dat, kich: DAT[f.dat], o: f.o, kho: f.kho, tui: f.tui,
      quaHomNay: f.ngay !== ngay, chuoi: f.chuoi,
      don, dep: diemDep(f), tim: f.tim || 0,
      oToiDa: oToiDa(lv), soO: f.o.filter((o) => o.k === 'o').length + (f.tui.o || 0),
      sap: sapHien(f.sap), soOSap: soOSap(lv),
      donDb: f.donDb && f.donDb.d === ngay ? f.donDb : null, daNau: f.daNau || {},
      nh: lv < MO_TN.nh.lv ? [] : (nhaHang(f, lv, userId).ds || []).map((o) => ({ m: o.m, xu: o.xu, kh: o.kh, xong: o.xong,
        zh: '服务员，我要一份' + MON[o.m].zh + '！', py: 'Fúwùyuán, wǒ yào yí fèn ' + MON[o.m].py + '!' })),
      muaBan: { n: f.muaBan && f.muaBan.d === ngay ? f.muaBan.n : 0, so: MUA_THUONG_SO },
      can: (f.can || []).map((x) => Object.assign({}, x, cauCanMua(x.k, x.n))),
      av: f.av || null, avMua: f.avMua || [], ten: (await d.loadUserNames())[userId] || '',
      nk: await nhatKy(f), nkMoi: (f.nk || []).filter((e) => e.t > (f.nkXem || 0)).length,
      tai: taiChoHs(f), taiVua: f.tai && f.tai.xong === 'ok' && Date.now() - f.tai.kt < 60000 ? f.tai.k : '',
      thiTruong: await tomThiTruong(userId),
      kt: ttThem.reduce((o, fn) => { try { Object.assign(o, fn(userId, f, lv)); } catch (e) { /* bo qua */ } return o; }, {}),
      tt: thanhTich(f), cay7: thiDua ? thiDua.cay7ChoHs(f) : null, hat: f.hat || {},
      chai: f.chai === ngay,
    };
  }
  // Thanh tich hien tren nong trai (ca khi ban sang tham): co vang trai so 1, ruy bang nong trai dep, ke cup
  function thanhTich(f) {
    const tuan = d.vnWeekKey(), k = f.ke || {};
    return { coVang: f.coVang === tuan, ruy: f.ruy && f.ruy.tuan === tuan ? f.ruy.hang : 0,
      cup: (k.cup || []).slice(0, 8), dep: (k.dep || []).slice(0, 8), td: k.td || 0, kn: (k.kn || []).slice(0, 8) };
  }

  // Kiem tra o (x, y) rong w x w co nam trong dat va khong de len vat khac
  function datDuoc(f, x, y, w, boQuaId) {
    const k = DAT[f.dat];
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0 || x + w > k.w || y + w > k.h) return false;
    return !f.o.some((o) => {
      if (o.id === boQuaId) return false;
      const r = rong(o);
      return x < o.x + r && o.x < x + w && y < o.y + r && o.y < y + w;
    });
  }

  function loi(msg) { const e = new Error(msg); e.farm = true; return e; }

  /* ---- Cung - cau trong lop: dac san 特产, don can hang cua ban, bang "Lop dang can", gia theo cung - cau ---- */
  const HANG = Object.keys(CAY).filter((k) => !CAY[k].hiem).concat(Object.keys(CON).map((k) => CON[k].sp));
  const tuanSo = () => Math.floor(Date.parse(d.vnWeekKey() + 'T00:00:00Z') / (7 * 86400000));
  const ttNho = new Map(); // pham vi -> { t, data } (luu 60 giay)
  async function phamViTt(userId) {
    const lop = await banCungLop(userId);
    if (lop) return { k: 'lop:' + lop.id, ids: lop.ids, lop: true };
    const cd = await taiCongDong();
    const ids = cd.slice(0, 150).map((x) => x.id);
    if (ids.indexOf(userId) < 0) ids.push(userId);
    return { k: 'cd', ids, lop: false };
  }
  // Hang em tu lam duoc: cay da mo khoa + san pham cua vat nuoi em dang nuoi (ca trong tui)
  function hangLamDuoc(f) {
    const lv = lvTuXp(f.xp), co = {};
    f.o.forEach((o) => { if (CON[o.k]) co[CON[o.k].sp] = 1; });
    Object.keys(f.tui || {}).forEach((k) => { if (CON[k] && f.tui[k] > 0) co[CON[k].sp] = 1; });
    return HANG.filter((k) => (CAY[k] ? CAY[k].lv <= lv : !!co[k]));
  }
  // Chia dac san moi tuan: xoay vong danh sach hang, moi ban nhan 1 mon CHUA ai nhan trong cac mon ban ay lam duoc
  // -> ca lop phu nhieu loai hang nhat co the; het mon moi thi moi trung
  function chiaDacSan(farms, ids) {
    const W = tuanSo(), ds = ids.filter((id) => farms[id]).sort();
    const lech = W % HANG.length;
    const xoay = HANG.slice(lech).concat(HANG.slice(0, lech)).reverse(); // mon cap cao truoc: ban cap cao giu hang hiem
    const kq = {}, daCo = {};
    // ban lam duoc it mon nhat chon truoc (de khong bi het cho)
    const thuTu = ds.map((id) => ({ id, lam: hangLamDuoc(farms[id]) })).sort((a, b) => a.lam.length - b.lam.length || (a.id < b.id ? -1 : 1));
    thuTu.forEach((x, n) => {
      const cho = xoay.filter((k) => x.lam.indexOf(k) >= 0);
      if (!cho.length) return;
      const k = cho.find((m) => !daCo[m]) || cho[(n + W) % cho.length];
      kq[x.id] = k;
      daCo[k] = (daCo[k] || 0) + 1;
    });
    return kq;
  }
  async function thiTruong(userId) {
    const pv = await phamViTt(userId);
    const nho = ttNho.get(pv.k);
    if (nho && Date.now() - nho.t < 60000 && nho.data.ids.indexOf(userId) >= 0) return nho.data;
    const farms = await docNhieu(pv.ids);
    const ngay = d.vnDayKey();
    const can = {}, nguoi = {}, cung = {};
    const them = (o, k, n) => { if (SP[k]) o[k] = (o[k] || 0) + n; };
    const ghiNguoi = (k, id) => { (nguoi[k] = nguoi[k] || {})[id] = 1; };
    Object.keys(farms).forEach((id) => {
      const f = farms[id];
      if (f.don && f.don.d === ngay && Array.isArray(f.don.ds)) {
        f.don.ds.forEach((o, i) => { if (!f.don.x[i]) Object.keys(o.can).forEach((k) => { them(can, k, o.can[k]); ghiNguoi(k, id); }); });
      }
      if (f.donDb && f.donDb.d === ngay && !f.donDb.xong) Object.keys(f.donDb.can || {}).forEach((k) => { them(can, k, f.donDb.can[k]); ghiNguoi(k, id); });
      (f.can || []).forEach((x) => { them(can, x.k, x.n); ghiNguoi(x.k, id); });
      Object.keys(f.kho || {}).forEach((k) => them(cung, k, f.kho[k]));
      (f.sap || []).forEach((o) => them(cung, o.k, o.n));
    });
    // he so gia: (can + 3) / (co + 3), lay can bac hai cho em, gioi han 0,7 - 1,6
    const heSo = {};
    HANG.forEach((k) => {
      const r = ((can[k] || 0) + 3) / ((cung[k] || 0) + 3);
      heSo[k] = Math.round(Math.max(0.7, Math.min(1.6, Math.sqrt(r))) * 20) / 20;
    });
    const soNguoi = {};
    Object.keys(nguoi).forEach((k) => { soNguoi[k] = Object.keys(nguoi[k]).length; });
    const data = { ids: pv.ids, lop: pv.lop, can, soNguoi, cung, heSo, dacSan: chiaDacSan(farms, pv.ids), tuan: d.vnWeekKey() };
    ttNho.set(pv.k, { t: Date.now(), data });
    return data;
  }
  const heSoCua = (tt, k) => (tt && tt.heSo[k]) || 1;
  // Dac san cua cac ban (tru em) de ra don hang: mon em khong tu lam duoc + ban dang co san len truoc
  async function hangCuaBan(userId, f) {
    const tt = await thiTruong(userId);
    const ten = await d.loadUserNames();
    const em = tt.dacSan[userId], lam = hangLamDuoc(f);
    const ds = Object.keys(tt.dacSan).filter((id) => id !== userId && tt.dacSan[id] !== em && ten[id])
      .map((id) => ({ k: tt.dacSan[id], id, ten: ten[id] }));
    const diem = (x) => (lam.indexOf(x.k) < 0 ? 2 : 0) + ((tt.cung[x.k] || 0) > 0 ? 1 : 0) + Math.random() * 0.5;
    return ds.sort((a, b) => diem(b) - diem(a));
  }

  async function lam(userId, b) {
    const f = await doc(userId);
    const now = Date.now();
    const lv = lvTuXp(f.xp);
    const ngay = d.vnDayKey();
    const a = String(b.a || '');
    const timO = () => {
      const o = f.o.find((x) => x.id === Number(b.id));
      if (!o) throw loi('Không tìm thấy ô này.');
      return o;
    };
    const tieuSao = async (n) => {
      if ((await saoCo(userId, f)) < n) throw loi('Chưa đủ sao — làm bài ôn tập để kiếm thêm sao nhé!');
      f.saoTieu += n;
    };
    const tieuXu = (n) => {
      if (f.xu < n) throw loi('Chưa đủ xu — thu hoạch và bán nông sản để có xu.');
      f.xu -= n;
    };
    const them = { xu: 0, xp: 0, sp: {} };
    const congSp = (k, n) => { f.kho[k] = (f.kho[k] || 0) + n; them.sp[k] = (them.sp[k] || 0) + n; };
    // thi truong lop chi doc khi can (thu hoach, nhat, ban, bay sap)
    const tt = ['thu', 'nhat', 'ban', 'sap'].indexOf(a) >= 0 ? await thiTruong(userId) : null;
    const dacSanEm = tt ? tt.dacSan[userId] : null;

    if (a === 'trong') {
      const o = timO();
      const c = CAY[b.c];
      if (o.k !== 'o' || o.c) throw loi('Ô này đang có cây.');
      if (!c) throw loi('Không có loại hạt này.');
      if (c.hiem && !(f.hat && f.hat[b.c] > 0)) throw loi(c.vn + ' là cây quý — chỉ gieo được bằng hạt quý (vòng quay, bản đồ phiêu lưu, đấu giá).');
      if (c.lv > lv && !c.hiem) throw loi('Lên cấp ' + c.lv + ' để trồng ' + c.vn + '.');
      if (taiHieu(f, 'khongTrong')) throw loi(TAI[f.tai.k].zh + '！' + TAI[f.tai.k].hieu + ' — chống thiên tai trước (bấm thanh thiên tai).');
      // hat giong quy (Co thuong) gieo khong ton xu
      if (f.hat && f.hat[b.c] > 0) { f.hat[b.c]--; if (!f.hat[b.c]) delete f.hat[b.c]; } else tieuXu(c.gia);
      o.c = b.c; o.h = now + Math.round(c.phut * PHUT * heSoTai(f, 'cay')); o.t = 0;
    } else if (a === 'trongHet') {
      // gieo cung 1 loai hat vao moi o trong (het xu thi dung)
      const c = CAY[b.c];
      if (!c || c.lv > lv) throw loi('Không có loại hạt này.');
      if (taiHieu(f, 'khongTrong')) throw loi(TAI[f.tai.k].zh + '！' + TAI[f.tai.k].hieu + ' — chống thiên tai trước (bấm thanh thiên tai).');
      const heSo = heSoTai(f, 'cay');
      let n = 0;
      f.o.forEach((o) => {
        if (o.k === 'o' && !o.c && f.xu >= c.gia) { f.xu -= c.gia; o.c = b.c; o.h = now + Math.round(c.phut * PHUT * heSo); o.t = 0; n++; }
      });
      if (!n) throw loi(f.xu < c.gia ? 'Chưa đủ xu mua hạt.' : 'Không còn ô trống.');
    } else if (a === 'tuoi') {
      const o = timO();
      if (o.k !== 'o' || !o.c || o.h <= now) throw loi('Ô này không cần tưới.');
      if (o.t) throw loi('Ô này đã tưới rồi.');
      if (taiHieu(f, 'khongTuoi')) throw loi(TAI[f.tai.k].zh + '！' + TAI[f.tai.k].hieu);
      o.t = 1;
      o.h = now + Math.round((o.h - now) * 0.6); // tuoi nuoc: con 60% thoi gian
      them.xp += 1;
    } else if (a === 'thu') {
      const ds = b.id === 'het' ? f.o.filter((o) => o.k === 'o' && o.c && o.h <= now) : [timO()];
      if (!ds.length) throw loi('Chưa có ô nào chín.');
      ds.forEach((o) => { if (o.k !== 'o' || !o.c || o.h > now) throw loi('Cây chưa chín.'); });
      const r = thuRuong(f, ds, dacSanEm, congSp);
      them.xp += r.xp;
      them.soO = ds.length;
      if (r.dacSan) them.dacSan = r.dacSan;
      if (r.x2) them.x2 = r.x2;
    } else if (a === 'choan') {
      const o = timO();
      if (!CON[o.k]) throw loi('Không phải vật nuôi.');
      if (o.h) throw loi(o.h > now ? 'Con vật đang no rồi.' : 'Hãy thu sản phẩm trước.');
      o.h = now + Math.round(CON[o.k].phut * PHUT * heSoTai(f, 'con'));
      them.xp += 2; // vua tra loi dung 3 cau on tu
      // thuc an chan nuoi 饲料 (mua o cho): lan nay con vat cho them 1 san pham
      if (b.sl) {
        if (!((f.kho.siliao || 0) > 0)) throw loi('Kho chưa có thức ăn chăn nuôi 饲料 — mua ở Chợ nông sản nhé.');
        f.kho.siliao--; if (!f.kho.siliao) delete f.kho.siliao;
        o.sl = 1; them.sl = 1;
      }
    } else if (a === 'nhat') {
      const ds = b.id === 'het' ? f.o.filter((o) => CON[o.k] && o.h && o.h <= now && (!b.k || o.k === b.k)) : [timO()];
      if (!ds.length) throw loi('Chưa có sản phẩm.');
      ds.forEach((o) => { if (!CON[o.k] || !o.h || o.h > now) throw loi('Chưa có sản phẩm.'); });
      const r = nhatCon(f, ds, dacSanEm, congSp);
      them.xp += r.xp;
      them.soO = ds.length;
      if (r.dacSan) them.dacSan = r.dacSan;
    } else if (a === 'ban') {
      const k = String(b.k || '');
      const n = Math.floor(Number(b.n) || 0);
      if (!SP[k] || n < 1 || (f.kho[k] || 0) < n) throw loi('Không đủ hàng để bán.');
      if (SP[k].nl) throw loi(SP[k].vn + ' mua ở chợ để dùng (nấu, chế biến, chăn nuôi) — không bán lại được.');
      const goiDung = String(b.goi || '') === SP[k].zh;
      const tien = Math.max(1, Math.round(SP[k].ban * n * (goiDung ? 1.1 : 0.7) * heSoCua(tt, k) * heSoTai(f, 'ban')));
      const homNay = saoHoc(await d.loadStar(userId)).homNay;
      const toiDa = BAN_CO_BAN + BAN_MOI_SAO * homNay, da = daBanHomNay(f);
      if (da + tien > toiDa) throw loi('Hạn mức bán cho cửa hàng hôm nay còn ' + Math.max(0, toiDa - da) + ' xu. Học thêm để mở rộng: mỗi sao học = +' + BAN_MOI_SAO + ' xu hạn mức!');
      f.banNgay = { d: ngay, xu: da + tien };
      f.kho[k] -= n;
      if (!f.kho[k]) delete f.kho[k];
      them.xu = tien;
      them.goiDung = goiDung;
      f.xu += them.xu;
    } else if (a === 'mua' || a === 'dat') {
      // mua moi (tra tien) hoac lay tu tui do ra dat (mien phi)
      const k = String(b.k || '');
      const x = Number(b.x), y = Number(b.y);
      const laO = k === 'o', con = CON[k], tt = TT[k], xgK = xgCua(k), xgM = xgK ? XuongCat.XUONG[xgK] : null;
      if (!laO && !con && !tt && !xgM) throw loi('Không có món này.');
      if (a === 'mua' && tt && tt.doc) throw loi('Món này là quà độc quyền (Bộ sưu tập chữ Hán, công trình lớp, lễ hội) — không bán ở cửa hàng.');
      const w = (tt && tt.w) || xgM ? 2 : 1;
      if (!datDuoc(f, x, y, w)) throw loi(xgM ? 'Nhà máy cần khoảng trống 2×2 ô — chọn chỗ rộng hơn, dời bớt đồ hoặc mở rộng đất nhé.' : 'Chỗ này không đặt được.');
      if (a === 'dat') {
        if (!(f.tui[k] > 0)) throw loi('Trong túi không còn món này.');
        f.tui[k]--;
        if (!f.tui[k]) delete f.tui[k];
      } else {
        const muc = con || tt;
        if (muc && muc.lv > lv) throw loi('Lên cấp ' + muc.lv + ' để mua món này.');
        if (laO) {
          const soO = f.o.filter((o) => o.k === 'o').length + (f.tui.o || 0);
          if (soO >= oToiDa(lv)) throw loi('Cấp ' + lv + ' tối đa ' + oToiDa(lv) + ' ô ruộng — lên cấp để mở thêm.');
          await tieuSao(giaODat(soO));
        } else if (con) {
          const soCon = f.o.filter((o) => o.k === k).length + (f.tui[k] || 0);
          if (soCon >= CON_TOI_DA) throw loi('Mỗi loại nuôi tối đa ' + CON_TOI_DA + ' con.');
          await tieuSao(con.sao);
        } else if (xgM) {
          // xay nha may: tra xu, ghi so huu (f.xuong.b) roi dat ngay len nong trai
          if (lv < MO_TN.xuong.lv) throw loi('Nhà máy mở ở cấp ' + MO_TN.xuong.lv + '.');
          if (xgM.lv > lv) throw loi('Lên cấp ' + xgM.lv + ' để xây ' + xgM.vn + '.');
          f.xuong = f.xuong || {}; f.xuong.b = f.xuong.b || {};
          if (f.xuong.b[xgK]) throw loi('Em đã xây ' + xgM.vn + ' rồi.');
          if (f.xu < xgM.xu) throw loi('Cần ' + xgM.xu + ' xu để xây ' + xgM.vn + ' — em đang có ' + f.xu + ' xu.');
          f.xu -= xgM.xu;
          f.xuong.b[xgK] = { q: [], t: now };
          them.xp += 15;
        } else if (tt.sao) await tieuSao(tt.sao);
        else tieuXu(tt.xu);
        if (tt) them.xp += Math.ceil(tt.dep / 2);
        if (con) them.xp += 3;
      }
      const moi = { id: f.nid++, k, x, y };
      if (con) moi.h = null;
      f.o.push(moi);
    } else if (a === 'doi') {
      const o = timO();
      const x = Number(b.x), y = Number(b.y);
      if (!datDuoc(f, x, y, rong(o), o.id)) throw loi('Chỗ này không đặt được.');
      o.x = x; o.y = y;
    } else if (a === 'cat') {
      const o = timO();
      if (o.k === 'nha' || o.k === 'kho') throw loi('Không cất được nhà.');
      if (o.k === 'o' && o.c) throw loi('Thu hoạch xong mới cất ô ruộng được.');
      if (CON[o.k] && o.h) throw loi(o.h > now ? 'Đợi con vật làm xong sản phẩm đã.' : 'Thu sản phẩm trước đã.');
      if (xgCua(o.k) && f.xuong && f.xuong.b && f.xuong.b[xgCua(o.k)] && (f.xuong.b[xgCua(o.k)].q || []).length) throw loi('Nhà máy đang có mẻ hàng — đợi xong và thu hàng rồi mới cất được.');
      f.o = f.o.filter((x) => x !== o);
      f.tui[o.k] = (f.tui[o.k] || 0) + 1;
    } else if (a === 'morong') {
      const sau = DAT[f.dat + 1];
      if (!sau) throw loi('Đất đã rộng tối đa.');
      if (sau.lv > lv) throw loi('Lên cấp ' + sau.lv + ' để mở rộng đất.');
      if (sau.xu) {
        if (f.xu < sau.xu) throw loi('Cần ' + sau.xu + ' xu để mở rộng — em đang có ' + f.xu + ' xu. Bán hàng, giao đơn để có thêm xu nhé!');
        f.xu -= sau.xu;
      } else await tieuSao(sau.sao);
      f.dat++;
      them.xp += sau.xu ? 30 : 10;
    } else if (a === 'nangnha') {
      const nha = f.o.find((o) => o.k === 'nha');
      const sau = NHA[(nha.n || 1) + 1];
      if (!sau) throw loi('Nhà đã đẹp nhất rồi!');
      if (sau.lv > lv) throw loi('Lên cấp ' + sau.lv + ' để nâng cấp nhà.');
      await tieuSao(sau.sao);
      nha.n = (nha.n || 1) + 1;
      them.xp += 20;
    } else if (a === 'qua') {
      if (f.ngay === ngay) throw loi('Hôm nay em đã nhận quà rồi.');
      const homQua = d.vnDayKey(now - 86400000);
      f.chuoi = f.ngay === homQua ? Math.min(30, (f.chuoi || 0) + 1) : 1;
      f.ngay = ngay;
      them.xu = 10 + 5 * Math.min(7, f.chuoi);
      f.xu += them.xu;
      them.xp += 2;
    } else if (a === 'don') {
      const i = Math.floor(Number(b.i));
      const ds = donHomNay(f, userId, ngay).ds;
      if (!ds[i]) throw loi('Không có đơn hàng này.');
      if (f.don.x[i]) throw loi('Đơn này đã giao rồi.');
      const can = ds[i].can;
      Object.keys(can).forEach((k) => { if ((f.kho[k] || 0) < can[k]) throw loi('Kho chưa đủ ' + SP[k].vn + '.'); });
      Object.keys(can).forEach((k) => { f.kho[k] -= can[k]; if (!f.kho[k]) delete f.kho[k]; });
      f.don.x[i] = 1;
      them.xu = ds[i].xu;
      f.xu += them.xu;
      them.xp += ds[i].xp;
    } else if (a === 'sap') {
      // bay nong san len sap: hang roi kho ngay (khong ban 2 lan)
      const k = String(b.k || '');
      const n = Math.floor(Number(b.n) || 0);
      const gia = Math.floor(Number(b.gia) || 0);
      if (!SP[k] || n < 1 || n > SAP_SL_TOI_DA || (f.kho[k] || 0) < n) throw loi('Không đủ hàng để bày sạp.');
      if (SP[k].nl) throw loi(SP[k].vn + ' mua ở chợ để dùng — không bày bán lại được.');
      if (f.sap.length >= soOSap(lv)) throw loi('Sạp đã đầy ' + soOSap(lv) + ' ô' + (lv < 5 ? ' — lên cấp 5 có thêm 2 ô.' : '.'));
      const hs = heSoCua(tt, k);
      const kg = khoangGia(k, n, hs);
      if (gia < kg.min || gia > kg.max) throw loi('Giá phải từ ' + kg.min + ' đến ' + kg.max + ' xu.');
      f.kho[k] -= n;
      if (!f.kho[k]) delete f.kho[k];
      f.sap.push({ id: f.nid++, k, n, gia, t: Date.now(), hs });
    } else if (a === 'gosap') {
      const o = f.sap.find((x) => x.id === Number(b.id));
      if (!o) throw loi('Món này đã được bán rồi.');
      f.sap = f.sap.filter((x) => x !== o);
      f.kho[o.k] = (f.kho[o.k] || 0) + o.n;
    } else if (a === 'nhanvat') {
      const av = kiemNhanVat(b.av);
      if (!av) throw loi('Nhân vật chưa hợp lệ.');
      const mua = Array.isArray(f.avMua) ? f.avMua.slice() : [];
      let can = 0;
      ['toc', 'ao', 'duoi', 'mu', 'kinh', 'pk', 'mat'].forEach((k) => {
        const key = k + ':' + av[k];
        if (NV_SAO[key] && mua.indexOf(key) < 0) { can += NV_SAO[key]; mua.push(key); }
      });
      if (can) await tieuSao(can);
      if (!f.av) them.xp += 3;
      f.av = av;
      f.avMua = mua;
    } else if (a === 'xemnk') {
      f.nkXem = now;
    } else if (a === 'chai') {
      // Gio qua trong bui cay (2026-11): nhat 1 lan / ngay VN -> +3 xu (lanLuot khoa theo hoc sinh, lan 2 bao loi)
      if (f.chai === ngay) throw loi('Hôm nay em đã nhặt giỏ quà rồi — mai quay lại ruộng tìm giỏ mới nhé!');
      f.chai = ngay;
      f.xu += CHAI_XU;
      them.xu += CHAI_XU;
      them.xp += 1;
    } else if (a === 'ruong') {
      const i = Number(b.i);
      const r = RUONG[i];
      if (!r) throw loi('Không có rương này.');
      const da = ruongDaMo(f);
      if (da.indexOf(i) >= 0) throw loi('Hôm nay em đã mở ' + r.ten.toLowerCase() + ' rồi.');
      const homNay = saoHoc(await d.loadStar(userId)).homNay;
      if (homNay < r.sao) throw loi('Cần học được ' + r.sao + ' sao hôm nay — em mới có ' + homNay + ' sao.');
      let them1 = r.xu;
      if (i === 0) {
        const sc = await d.loadScoreOf(userId);
        them1 += Math.min(10, (sc && sc.streak) || 0);
      }
      f.ruong = { d: ngay, ds: da.concat(i) };
      f.xu += them1;
      them.xu += them1;
      them.xp += r.xp;
    } else if (a === 'nau') {
      // nau 1 phan: chon dung ten tieng Trung cua mon (nhin tranh) moi duoc nau
      const k = String(b.m || ''), m = MON[k];
      if (!m) throw loi('Không có món này.');
      if (m.lv && m.lv > lv) throw loi('Lên cấp ' + m.lv + ' để nấu món này.');
      if (String(b.goi || '') !== m.zh) throw loi('Tên món chưa đúng — nhìn lại công thức rồi chọn lại nhé!');
      Object.keys(m.can).forEach((x) => { if ((f.kho[x] || 0) < m.can[x]) throw loi('Chưa đủ nguyên liệu: cần ' + m.can[x] + ' ' + SP[x].vn.toLowerCase() + '. Mua thêm ở chợ nhé!'); });
      Object.keys(m.can).forEach((x) => { f.kho[x] -= m.can[x]; if (!f.kho[x]) delete f.kho[x]; });
      f.kho[k] = (f.kho[k] || 0) + 1;
      them.sp[k] = 1;
      f.daNau = f.daNau || {};
      if (!f.daNau[k]) { them.monMoi = k; them.xp += 5; }
      f.daNau[k] = (f.daNau[k] || 0) + 1;
      them.xp += 2;
    } else if (a === 'nvqua') {
      // nhan thuong nhiem vu hom nay (i = 0: du 3 viec, 1: du het)
      const nv = nhiemVu(f, saoHoc(await d.loadStar(userId)).homNay, lv), i = Number(b.i), tg = nv.thuong[i];
      if (!tg) throw loi('Không có phần thưởng này.');
      if (nv.nhan.indexOf(i) >= 0) throw loi('Em đã nhận phần thưởng này rồi.');
      if (nv.xong < tg.can) throw loi('Cần xong ' + tg.can + ' nhiệm vụ — em mới xong ' + nv.xong + '.');
      f.nv = { d: ngay, nhan: nv.nhan.concat(i) };
      f.xu += tg.xu;
      them.xu += tg.xu;
      them.xp += 5;
      if (tg.luot) { const v = f.vq && f.vq.d === ngay ? f.vq : { d: ngay, n: 0, them: 0 }; f.vq = { d: ngay, n: v.n || 0, them: (v.them || 0) + 1 }; them.luot = 1; }
    } else if (a === 'phucvu') {
      // phuc vu khach nha hang: doc cau goi mon tieng Trung, chon dung mon trong kho
      if (lv < MO_TN.nh.lv) throw loi('Nhà hàng mở ở cấp ' + MO_TN.nh.lv + '.');
      const nh = nhaHang(f, lv, userId), i = Number(b.i), o = nh.ds[i];
      if (!o) throw loi('Không có khách này.');
      if (o.xong) throw loi('Khách này đã được phục vụ rồi.');
      if (String(b.m || '') !== o.m) throw loi('Khách không gọi món này — đọc lại tên món nhé!');
      if ((f.kho[o.m] || 0) < 1) throw loi('Kho chưa có món này — vào Bếp nấu trước nhé!');
      f.kho[o.m] -= 1;
      if (!f.kho[o.m]) delete f.kho[o.m];
      const hm = await hanMuc(userId, f);
      if (hm.con < 1) throw loi('Hạn mức bán hôm nay đã hết (' + hm.toiDa + ' xu) — học thêm sao để phục vụ tiếp: mỗi sao = +' + BAN_MOI_SAO + ' xu hạn mức!');
      o.xong = 1;
      const tra = Math.min(o.xu, hm.con);
      ghiBanNgay(f, tra);
      f.xu += tra;
      them.xu += tra;
      if (tra < o.xu) them.catHanMuc = o.xu - tra;
      them.xp += 3;
    } else if (a === 'dondb') {
      // giao don dac biet (de bai chi co chu Han)
      const dd = f.donDb;
      if (!dd || dd.d !== ngay || dd.xong) throw loi('Hôm nay không còn đơn đặc biệt.');
      Object.keys(dd.can).forEach((x) => { if ((f.kho[x] || 0) < dd.can[x]) throw loi('Chưa đủ hàng — đọc kỹ đơn rồi tìm mua ở chợ nhé!'); });
      Object.keys(dd.can).forEach((x) => { f.kho[x] -= dd.can[x]; if (!f.kho[x]) delete f.kho[x]; });
      dd.xong = true;
      f.xu += dd.xu;
      them.xu += dd.xu;
      them.xp += 5;
    } else if (a === 'doisao') {
      // Doi sao lay xu (mot chieu: xu khong doi nguoc ra sao — sao chi kiem duoc bang hoc bai)
      const n = Number(b.n);
      if (!Number.isInteger(n) || n < 1 || n > 100000) throw loi('Số sao muốn đổi chưa hợp lệ.');
      await tieuSao(n);
      f.xu += n * XU_MOI_SAO;
      them.xu += n * XU_MOI_SAO;
    } else if (a === 'quay') {
      // Vong quay may man: may chu chon o theo trong so (quayO), roi phat qua; client chi quay banh xe den o do
      const homNay = saoHoc(await d.loadStar(userId)).homNay;
      const vq = vongQuay(f, homNay);
      if (vq.con <= 0) throw loi('Hết lượt quay hôm nay — học thêm để có lượt mới (10 sao +1, 30 sao +1, 80 sao +2)!');
      const v = f.vq && f.vq.d === ngay ? f.vq : { d: ngay, n: 0, them: 0 };
      v.n += 1;
      const r = quayO(f, lv, Math.random);
      if (r.qua.loai === 'luot') v.them = (v.them || 0) + 1;
      if (r.qua.loai === 'xu') them.xu += r.qua.n;
      if (r.qua.xu) them.xu += r.qua.xu;
      if (r.sp) Object.keys(r.sp).forEach((k) => { them.sp[k] = (them.sp[k] || 0) + r.sp[k]; });
      f.vq = { d: ngay, n: v.n, them: v.them || 0 };
      them.quay = { o: r.i, qua: r.qua };
    } else {
      throw loi('Hành động không hợp lệ.');
    }
    const lvCu = lv;
    f.xp += them.xp;
    // su kien cho cot truyen (dem viec cua chuong dang lam)
    const soSk = a === 'thu' || a === 'nhat' ? them.soO || 0 : ['choan', 'don', 'ban', 'quay', 'nau'].indexOf(a) >= 0 ? 1 : 0;
    if (soSk) suKien(f, a, soSk);
    await ghi(userId, f);
    if (a === 'sap' || a === 'gosap') boNhoCongDong(); // cho cong dong thay hang moi ngay
    const st = await trangThai(userId, f);
    return { ok: true, them, lenCap: st.lv > lvCu ? st.lv : 0, st };
  }

  const CATALOG = { VQ_X2_O, CAY_HIEM, MO_TN, GIAI, KHIEN_SAO, CA, CA_BAC, VQ_O, VQ_MOC, CAN_TOI_DA, CAN_SL_TOI_DA, MON, LUONG, LUONG_PY, CAY, CON, SP, TT, NHA, KHO, O_DAT, DAT, THU_MOI_O, CON_TOI_DA, O_MIEN_PHI, LOI_CHAO, GIUP_NGAY, SAP_SL_TOI_DA, NV_SAO, XU_MOI_SAO, RUONG,
    MOC_THE, HOC_VI, THE_DUNG, BAN_CO_BAN, BAN_MOI_SAO, TAI, TAI_GIUP_XU,
    TIN_TU, TIN_MAU, TIN_HOI, TIN_BAN_NGAY, QUA_NGAY };

  // Don dac biet moi ngay: can hang em CHUA tu lam ra (cay cap cao, san pham vat nuoi em chua co, mon an),
  // uu tien hang dang bay o cho cong dong; de bai chi viet bang chu Han
  async function taoDonDb(f, userId) {
    const lv = lvTuXp(f.xp);
    const coCon = {};
    f.o.forEach((o) => { if (CON[o.k]) coCon[CON[o.k].sp] = 1; });
    Object.keys(f.tui || {}).forEach((k) => { if (CON[k]) coCon[CON[k].sp] = 1; });
    const tuLam = (k) => (CAY[k] && CAY[k].lv <= lv) || coCon[k];
    let cho = {};
    try { (await taiCongDong()).forEach((x) => { if (x.id !== userId) x.sap.forEach((o) => { cho[o.k] = (cho[o.k] || 0) + o.n; }); }); } catch (e) { cho = {}; }
    let ung = Object.keys(cho).filter((k) => SP[k] && k !== 'len' && !SP[k].nl && !tuLam(k));
    if (!ung.length) ung = Object.keys(SP).filter((k) => k !== 'len' && !CA[k] && !SP[k].hiem && !SP[k].nl && !(MON[k] && MON[k].lv) && !tuLam(k));
    if (!ung.length) ung = Object.keys(MON);
    const can = {};
    tronMang(ung).slice(0, Math.random() < 0.5 ? 1 : 2).forEach((k) => { can[k] = Math.max(1, Math.min(3, cho[k] || 2, 1 + Math.floor(Math.random() * 3))); });
    const ks = Object.keys(can);
    const cau = '我要' + ks.map((k) => SO_ZH[can[k]] + LUONG[k] + SP[k].zh).join('和') + '。';
    // "yi" doi thanh "yi" thanh 2 truoc thanh 4 (一个, 一份)
    const soPy = (n, l) => (n === 1 && /[ègèfèn]/.test(LUONG_PY[l] || '') && (l === '个' || l === '份') ? 'yí' : SO_PY[n]);
    const py = 'Wǒ yào ' + ks.map((k) => soPy(can[k], LUONG[k]) + ' ' + LUONG_PY[LUONG[k]] + ' ' + SP[k].py).join(' hé ') + '.';
    const vn = 'Tôi cần ' + ks.map((k) => can[k] + ' ' + SP[k].vn.toLowerCase()).join(' và ') + '.';
    const xu = Math.round(ks.reduce((t, k) => t + SP[k].ban * can[k], 0) * 2) + 10;
    return { d: d.vnDayKey(), can, cau, py, vn, xu, xong: false };
  }

  app.get('/api/farm', d.requireAuth, d.asyncRoute(async (req, res) => {
    const st = await lanLuot(req.user.id, async () => {
      const f = await doc(req.user.id);
      if (!f.donDb || f.donDb.d !== d.vnDayKey()) { f.donDb = await taoDonDb(f, req.user.id); await ghi(req.user.id, f); }
      const het = (f.can || []).filter((x) => Date.now() - x.t > CAN_HAN_MS);
      if (het.length) { het.forEach((x) => { f.xu += x.gia; }); f.can = f.can.filter((x) => het.indexOf(x) < 0); await ghi(req.user.id, f); }
      // ngay moi: chot don hang hom nay vao du lieu
      const ngoai = f.don.d !== d.vnDayKey() ? await hangCuaBan(req.user.id, f).catch(() => null) : null;
      if (donHomNay(f, req.user.id, d.vnDayKey(), ngoai).moi) await ghi(req.user.id, f);
      if (xetThienTai(f)) await ghi(req.user.id, f);
      // khien bao ve: hoc du KHIEN_SAO sao hom nay -> thien tai khong con tac dung
      if (taiDang(f) && !f.tai.khien && saoHoc(await d.loadStar(req.user.id)).homNay >= KHIEN_SAO) { f.tai.khien = 1; await ghi(req.user.id, f); }
      // cac module kinh te (nhan cong lam viec, hang tiem het han ve kho, hop thu dau gia...) — moi ham tu ghi neu doi
      for (const fn of vaoHook) { try { if (await fn(req.user, f)) await ghi(req.user.id, f); } catch (e) { console.error('Nong trai (vao):', e.message); } }
      return trangThai(req.user.id, f);
    });
    res.json(req.query.cat ? Object.assign({ cat: CATALOG }, st) : st);
  }));

  // Moi ngay 1 thien tai (lv >= 2): lan dau vao nong trai trong ngay ghi gio vao; choi duoc TAI_CHO_MS thi
  // thien tai ap den — kieu khac voi TAI_NHO kieu gan nhat. Thien tai hom truoc chua xong thi tu qua.
  function xetThienTai(f) {
    const ngay = d.vnDayKey(), now = Date.now();
    let doi = false;
    if (f.tai && !f.tai.xong && !taiConHan(f.tai)) { f.tai.xong = 'het'; f.tai.kt = now; doi = true; }
    if (!f.taiVao || f.taiVao.d !== ngay) { f.taiVao = { d: ngay, t: now }; doi = true; }
    if (f.taiXet === ngay || taiDang(f) || lvTuXp(f.xp) < 2 || now - f.taiVao.t < TAI_CHO_MS) return doi;
    f.taiXet = ngay;
    const coCon = f.o.some((o) => CON[o.k]);
    const gan = Array.isArray(f.taiDa) ? f.taiDa : [];
    let ds = Object.keys(TAI).filter((k) => (!TAI[k].canCon || coCon) && gan.indexOf(k) < 0);
    if (!ds.length) ds = Object.keys(TAI).filter((k) => (!TAI[k].canCon || coCon) && k !== gan[0]);
    const k = ds[Math.floor(Math.random() * ds.length)];
    f.tai = { k, d: ngay, bd: now, co: 0, giup: [] };
    f.taiDa = [k].concat(gan).slice(0, TAI_NHO);
    delete f.taiq;
    return true;
  }
  // Mot phan viec chong thien tai hoan thanh (em tu lam hoac ban giup); du thi thien tai qua di
  function lamTai(f, n) {
    const t = TAI[f.tai.k];
    f.tai.co = Math.min(t.can, f.tai.co + n);
    if (f.tai.co >= t.can) {
      f.tai.xong = 'ok'; f.tai.kt = Date.now();
      f.xu += TAI_XU; f.xp += 5;
      return true;
    }
    return false;
  }
  const cauTai = (q) => (q ? { k: q.k, hoi: q.hoi, lua: q.lua } : null);
  app.post('/api/farm/thientai/cau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const de = await deChuHan(req.user);
    if (de.ds.length < 4) return res.status(400).json({ error: CHUA_HOC, chuaHoc: true });
    await traLoi(res, lanLuot(me, async () => {
      const f = await doc(me);
      if (!taiDang(f)) throw loi('Nông trại đang yên bình — không có thiên tai.');
      f.taiq = { ds: de.ds, i: 0 };
      await ghi(me, f);
      return { cau: cauTai(f.taiq.ds[0]) };
    }));
  }));
  app.post('/api/farm/thientai/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, chon = Math.floor(Number(req.body && req.body.chon));
    await traLoi(res, lanLuot(me, async () => {
      const f = await doc(me);
      if (!taiDang(f)) throw loi('Thiên tai đã qua rồi!');
      const q = f.taiq && f.taiq.ds[f.taiq.i];
      if (!q) throw loi('Hết câu — bấm để lấy câu mới.');
      const dung = chon === q.dap;
      f.taiq.i++;
      ghiOn(f, q.zh, dung);
      const kq = { ok: true, dung, dap: q.dap, zh: q.zh, py: q.py, vn: q.vn, xong: false };
      if (dung) { kq.xong = lamTai(f, 1); chung.ldCong(me); }
      kq.cau = !kq.xong && f.taiq.i < f.taiq.ds.length ? cauTai(f.taiq.ds[f.taiq.i]) : null;
      if (kq.xong) delete f.taiq;
      await ghi(me, f);
      kq.st = await trangThai(me, f);
      return kq;
    }));
  }));
  // Ban sang nha giup chong thien tai: tra loi dung 1 cau = 1 phan viec cho ban (moi ban 1 lan/ngay, toi da 3 lan/ngay)
  app.post('/api/farm/thientai/giupcau/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    const de = await deChuHan(req.user);
    if (!de.ds.length) return res.status(400).json({ error: CHUA_HOC, chuaHoc: true });
    await traLoi(res, cungLop(me, id).then(() => lanLuot(me, async () => {
      const fm = await doc(me);
      fm.taiGiupQ = { id, q: de.ds[0] };
      await ghi(me, fm);
      return { cau: cauTai(de.ds[0]) };
    })));
  }));
  app.post('/api/farm/thientai/giup/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id), chon = Math.floor(Number(req.body && req.body.chon));
    await traLoi(res, cungLop(me, id).then(() => haiLuot(me, id, async () => {
      const fm = await doc(me), ff = await doc(id);
      const ngay = d.vnDayKey();
      const q = fm.taiGiupQ && fm.taiGiupQ.id === id ? fm.taiGiupQ.q : null;
      if (!q) throw loi('Câu hỏi đã hết — thử lại nhé.');
      delete fm.taiGiupQ;
      if (!taiDang(ff)) { await ghi(me, fm); throw loi('Thiên tai ở nhà bạn đã qua rồi!'); }
      if (!fm.taiGiup || fm.taiGiup.d !== ngay) fm.taiGiup = { d: ngay, n: 0 };
      if (fm.taiGiup.n >= TAI_GIUP_NGAY) { await ghi(me, fm); throw loi('Hôm nay em đã giúp chống thiên tai ' + TAI_GIUP_NGAY + ' lần rồi.'); }
      ff.tai.giup = ff.tai.giup || [];
      if (ff.tai.giup.indexOf(me) >= 0) { await ghi(me, fm); throw loi('Em đã giúp bạn này rồi.'); }
      const dung = chon === q.dap;
      const kq = { ok: true, dung, dap: q.dap, zh: q.zh, py: q.py, vn: q.vn, xong: false };
      if (dung) {
        ff.tai.giup.push(me);
        fm.taiGiup.n++;
        fm.xu += TAI_GIUP_XU; fm.xp += 2;
        kq.xong = lamTai(ff, 1);
        ghiNk(ff, { ai: me, l: 'taigiup', k: ff.tai.k, xong: kq.xong ? 1 : 0 });
        chung.ldCong(me);
        await ghi(id, ff);
      }
      await ghi(me, fm);
      kq.tai = taiChoHs(ff);
      kq.st = await trangThai(me, fm);
      return kq;
    })));
  }));

  app.get('/api/farm/canlop', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const [tt, ten, f] = await Promise.all([thiTruong(me), d.loadUserNames(), doc(me)]);
    const dacSanCua = {};
    Object.keys(tt.dacSan).forEach((id) => { if (ten[id]) (dacSanCua[tt.dacSan[id]] = dacSanCua[tt.dacSan[id]] || []).push({ id, ten: ten[id], la: id === me }); });
    const lam = hangLamDuoc(f);
    const ds = HANG.map((k) => ({ k, can: tt.can[k] || 0, soNguoi: tt.soNguoi[k] || 0, co: tt.cung[k] || 0, heSo: tt.heSo[k], dacSan: dacSanCua[k] || [], emLam: lam.indexOf(k) >= 0 }))
      .sort((a, b) => b.can - a.can || b.heSo - a.heSo);
    res.json({ lop: tt.lop, tuan: tt.tuan, dacSanEm: tt.dacSan[me] || null, ds });
  }));

  app.post('/api/farm/act', d.requireAuth, d.asyncRoute(async (req, res) => {
    try {
      res.json(await lanLuot(req.user.id, () => lam(req.user.id, req.body || {})));
    } catch (err) {
      if (!err.farm) throw err;
      res.status(400).json({ error: err.message });
    }
  }));

  // Ban cung lop: danh sach nong trai (cap, diem dep, tim)
  async function banCungLop(userId) {
    const st = await d.loadClassState();
    const mem = st.members[userId];
    if (!mem) return null;
    const cls = st.classes.find((c) => c.id === mem.classId);
    const ids = Object.keys(st.members).filter((u) => st.members[u].classId === mem.classId);
    return { id: mem.classId, ten: cls ? cls.name : '', ids };
  }

  // Cong dong: ai co tai khoan va da mo nong trai deu thay nhau, tham, mua ban, nhan tin duoc
  // (thi tran / cho lop van chi gom ban cung lop). Danh sach giu trong bo nho 20 giay.
  async function coNongTrai(id) {
    if (!d.USE_DB) return !!(d.readJsonFile(FILE) || {})[id];
    const [rows] = await d.db().query('SELECT 1 FROM farms WHERE user_id = ? LIMIT 1', [id]);
    return rows.length > 0;
  }
  async function coTheChoi(me, id) {
    if (!id || id === me) return false;
    const lop = await banCungLop(me);
    if (lop && lop.ids.indexOf(id) >= 0) return true;
    return coNongTrai(id);
  }
  let congDong = null, congDongLuc = 0;
  function boNhoCongDong() { congDong = null; }
  async function taiCongDong() {
    if (congDong && Date.now() - congDongLuc < 20000) return congDong;
    let ds = [];
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      ds = Object.keys(all).map((id) => ({ id, f: Object.assign(nongTraiMoi(), all[id]) }));
    } else {
      const [rows] = await d.db().query('SELECT user_id, data FROM farms ORDER BY dep DESC LIMIT 2000');
      rows.forEach((r) => { try { ds.push({ id: r.user_id, f: Object.assign(nongTraiMoi(), JSON.parse(r.data)) }); } catch (e) { /* bo qua */ } });
    }
    const [ten, st, sao] = await Promise.all([d.loadUserNames(), d.loadClassState(), d.loadAllStars()]);
    const tuanCua = {};
    const tongCua = {};
    sao.forEach((x) => { tuanCua[x.userId] = saoHoc(x).tuan; tongCua[x.userId] = x.total || 0; });
    const tenLop = {};
    st.classes.forEach((c) => { tenLop[c.id] = c.name; });
    congDong = ds.filter((x) => ten[x.id]).map((x) => ({
      id: x.id, ten: ten[x.id], lop: st.members[x.id] ? tenLop[st.members[x.id].classId] || '' : '',
      lv: lvTuXp(x.f.xp), dep: diemDep(x.f), tim: x.f.tim || 0, av: x.f.av || null, sap: x.f.sap || [], can: x.f.can || [], tuan: tuanCua[x.id] || 0, hv: tongCua[x.id] || 0,
    })).sort((a, b) => b.dep - a.dep || b.lv - a.lv || a.ten.localeCompare(b.ten, 'vi'));
    congDongLuc = Date.now();
    return congDong;
  }
  const boDau = (t) => String(t || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');

  app.get('/api/farm/congdong', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const q = boDau(String(req.query.q || '').slice(0, 40)).trim();
    const tu = Math.max(0, Math.min(5000, parseInt(req.query.tu, 10) || 0));
    const all = await taiCongDong();
    const loc = all.filter((x) => !q || boDau(x.ten).indexOf(q) >= 0 || boDau(x.lop).indexOf(q) >= 0);
    const f = await doc(me);
    const ngay = d.vnDayKey();
    const daTham = f.tham.d === ngay ? f.tham.ids : [];
    res.json({
      tong: all.length, soLoc: loc.length, tu,
      ds: loc.slice(tu, tu + 30).map((x) => ({
        id: x.id, ten: x.ten, lop: x.lop, la: x.id === me, lv: x.lv, dep: x.dep, tim: x.tim, av: x.av,
        sap: x.sap.length, daTim: daTham.indexOf(x.id) >= 0, hang: all.indexOf(x) + 1, tuan: x.tuan, hv: x.hv,
      })),
    });
  }));

  // Cho cong dong: hang ca web bay ban (moi nhat cua tung ban), loc theo mon
  app.get('/api/farm/chocongdong', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, k = String(req.query.k || '');
    const all = await taiCongDong();
    const ds = [];
    all.forEach((x) => {
      if (x.id === me) return;
      sapHien(x.sap).forEach((o) => { if (!k || o.k === k) ds.push({ id: x.id, ten: x.ten, lop: x.lop, sid: o.id, k: o.k, n: o.n, gia: o.gia }); });
    });
    ds.sort((a, b) => a.gia / a.n - b.gia / b.n || (a.k < b.k ? -1 : 1));
    const loai = {};
    all.forEach((x) => { if (x.id !== me) x.sap.forEach((o) => { loai[o.k] = (loai[o.k] || 0) + 1; }); });
    res.json({ ds: ds.slice(0, 200), soMon: ds.length, loai });
  }));

  // Thi dua tuan: xep hang theo SAO HOC TAP kiem duoc tu thu Hai (khong phai do dep nong trai)
  // pham 'lop' = ban cung lop, 'cd' = moi ban co nong trai tren web
  app.get('/api/farm/thidua', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    const pham = req.query.pham === 'cd' ? 'cd' : 'lop';
    const cd = await taiCongDong();
    const theoId = {};
    cd.forEach((x) => { theoId[x.id] = x; });
    let ids, tenPham = '';
    if (pham === 'lop') {
      const lop = await banCungLop(me);
      if (!lop) return res.json({ pham, lop: null, ds: [] });
      ids = lop.ids; tenPham = lop.ten;
    } else ids = cd.map((x) => x.id);
    if (ids.indexOf(me) < 0) ids = ids.concat(me);
    const [sao, ten, sc] = await Promise.all([d.loadAllStars(), d.loadUserNames(), d.loadScoreOf(me)]);
    const theoSao = {};
    sao.forEach((x) => { theoSao[x.userId] = x; });
    const tuanNay = d.vnWeekKey(), tuanTruoc = new Date(Date.parse(tuanNay + 'T00:00:00Z') - 7 * 86400000).toISOString().slice(0, 10);
    // sao tuan truoc: dang luu o prevWeek (neu tuan nay da hoc) hoac van o week (neu tuan nay chua hoc)
    const saoTuanTruoc = (s) => (!s ? 0 : s.week === tuanNay ? (s.prevWeek === tuanTruoc ? s.prevWeekStars || 0 : 0) : s.week === tuanTruoc ? s.weekStars || 0 : 0);
    let bang = ids.filter((id) => ten[id]).map((id) => {
      const sh = theoSao[id] ? saoHoc(theoSao[id]) : { homNay: 0, tuan: 0 };
      const x = theoId[id];
      return { id, ten: ten[id], tuan: sh.tuan, homNay: sh.homNay, la: id === me, av: x ? x.av : null, lv: x ? x.lv : 0, lop: x ? x.lop : '', hv: theoSao[id] ? theoSao[id].total || 0 : 0,
        truoc: saoTuanTruoc(theoSao[id]) };
    }).sort((a, b) => b.tuan - a.tuan || b.homNay - a.homNay || a.ten.localeCompare(b.ten, 'vi'));
    // giai dau theo cap: chi so voi ban cung giai
    const lvEm = lvTuXp((await doc(me)).xp), giaiEm = giaiCua(lvEm);
    const giai = req.query.giai === '1';
    if (giai) bang = bang.filter((r) => r.la || giaiCua(r.lv || 1) === giaiEm);
    const tienBo = bang.filter((r) => r.tuan - r.truoc > 0).map((r) => ({ id: r.id, ten: r.ten, av: r.av, la: r.la, tang: r.tuan - r.truoc, tuan: r.tuan, truoc: r.truoc }))
      .sort((a, b) => b.tang - a.tang).slice(0, 5);
    bang.forEach((r, i) => { r.hang = i + 1; });
    const k = bang.findIndex((r) => r.la);
    const em = bang[k];
    const tren = k > 0 ? bang[k - 1] : null;
    res.json({
      pham, lop: tenPham, tong: bang.length, conGiay: d.secondsToVnWeekEnd(), giai, giaiEm: Object.assign({ i: giaiEm }, GIAI[giaiEm]), tienBo,
      ds: bang.slice(0, 30),
      em: em ? Object.assign({}, em, { chuoi: (sc && sc.streak) || 0, tren: tren ? { ten: tren.ten, tuan: tren.tuan, can: tren.tuan - em.tuan + 1 } : null }) : null,
    });
  }));

  /* ---------------- Thu thach chu Han -> hop qua bi an ----------------
     May chu ra de (tu vung cac bai em dang hoc), giu dap an, cham tung cau,
     trao qua — client chi gui lua chon nen khong gian lan duoc.             */
  const tronMang = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const TU_LAP = { 'cái': 1, 'con': 1, 'người': 1, 'của': 1, 'là': 1, 'có': 1, 'không': 1, 'được': 1, 'một': 1, 'rất': 1, 'và': 1 };
  const tuNghia = (vn) => String(vn || '').toLowerCase().split(/[\s,;/()（）.·…-]+/).filter((w) => w.length > 1 && !TU_LAP[w]);
  // muc "giong nhau" de chon dap an nhieu kho (chung chu Han / cung so chu / nghia gan)
  function giong(a, b) {
    let dd = 0;
    for (const c of a.zh) if (b.zh.indexOf(c) >= 0) { dd += 3; break; }
    if (a.zh.length === b.zh.length) dd += 2;
    const wa = tuNghia(a.vn), wb = tuNghia(b.vn);
    if (wa.some((w) => wb.indexOf(w) >= 0)) dd += 2;
    return dd + Math.random() * 2.5;
  }
  function nhieu(ds, tu, n, khoa) {
    const thay = {}; thay[khoa(tu)] = 1;
    return ds.filter((v) => v.zh !== tu.zh).map((v) => ({ v, dd: giong(tu, v) })).sort((x, y) => y.dd - x.dd)
      .map((x) => x.v).filter((v) => { const k = khoa(v); if (!k || thay[k]) return false; thay[k] = 1; return true; }).slice(0, n);
  }
  // Bo tu em dang hoc (cac bai on gan nhat), tu hay sai, kho chu de ra cau "dien chu"
  async function tuHocCua(user) {
    const on = await d.baiOnCua(user);
    let tu = [], thay = {};
    (on.urls || []).forEach((u) => d.tuVungBai(u).forEach((v) => { if (!thay[v.zh] && /^[㐀-鿿]{1,4}$/.test(v.zh)) { thay[v.zh] = 1; tu.push(Object.assign({ u }, v)); } }));
    // KHONG bu them tu ngoai bai hoc (truoc day bu ten cac mon trong nong trai): it tu qua thi khong ra cau
    const nguon = (on.nguon || '').replace(/^Ôn từ /, '');
    // tu den han on lai (on cach quang), hop thap truoc
    const fm = await doc(user.id), ghi0 = fm.on || {}, bay = Date.now();
    const den = tu.filter((v) => ghi0[v.zh] && ghi0[v.zh][1] <= bay).sort((a, b) => ghi0[a.zh][0] - ghi0[b.zh][0]).map((v) => v.zh);
    return { tu, nguon, sai: (on.sai || []).filter((z) => thay[z]), chu: [...new Set(tu.map((v) => v.zh).join('').split(''))], den,
      urls: on.urls || [], cap: on.cap, coBai: tu.length >= 4 };
  }
  // nhieu de: chon ngau nhien (khong can giong)
  function ngauNhien(ds, tu, n, khoa) {
    const thay = {}; thay[khoa(tu)] = 1;
    return tronMang(ds.filter((v) => v.zh !== tu.zh)).filter((v) => { const k = khoa(v); if (!k || thay[k]) return false; thay[k] = 1; return true; }).slice(0, n);
  }
  // 1 cau hoi ve tu v: k = nghia | py | chu | thieu; n = so lua chon; kho = dap an nhieu gan giong; goiPy = hien pinyin (cau de)
  function taoCau(bo, v, k, n, kho, goiPy) {
    const tu = bo.tu, chonNhieu = kho ? nhieu : ngauNhien;
    if (k === 'viet') {
      // viet chu con thieu trong tu (net chu lay tu bai hoc); client cham bang HanziWriter: xong = chon 0
      const net = netCuaBai(v.u), chs = [...v.zh], vt = chs.findIndex((c) => net[c]);
      if (vt < 0) k = 'thieu';
      else return { k, hoi: { tu: chs.map((c, j) => (j === vt ? '＿' : c)).join(''), py: v.py, vn: v.vn, net: net[chs[vt]] }, lua: ['✓'], dap: 0, zh: v.zh, py: v.py, vn: v.vn, u: v.u };
    }
    if (k === 'thieu' && v.zh.length < 2) k = 'nghia';
    if (k === 'py' && !v.py) k = 'chu';
    let hoi, lua, dap;
    if (k === 'nghia') {        // nghia tieng Viet -> chon chu Han
      lua = [v.zh].concat(chonNhieu(tu, v, n - 1, (x) => x.zh).map((x) => x.zh));
      hoi = { vn: v.vn }; dap = v.zh;
    } else if (k === 'nghe') {  // nghe doc -> chon chu Han (client doc bang giong may; ma hoa nhe de khong lo dap an tren man hinh)
      lua = [v.zh].concat(chonNhieu(tu, v, n - 1, (x) => x.zh).map((x) => x.zh));
      // p = pinyin (chi hien khi may em khong phat duoc tieng)
      hoi = { nghe: Buffer.from(encodeURIComponent(v.zh)).toString('base64'), p: Buffer.from(encodeURIComponent(v.py || '')).toString('base64') }; dap = v.zh;
    } else if (k === 'py') {    // chu Han -> chon pinyin
      lua = [v.py].concat(chonNhieu(tu.filter((x) => x.py), v, n - 1, (x) => x.py.toLowerCase()).map((x) => x.py));
      hoi = { zh: v.zh }; dap = v.py;
    } else if (k === 'chu') {   // chu Han -> chon nghia
      lua = [v.vn].concat(chonNhieu(tu, v, n - 1, (x) => x.vn).map((x) => x.vn));
      hoi = goiPy && v.py ? { zh: v.zh, py: v.py } : { zh: v.zh }; dap = v.vn;
    } else {                     // tu thieu 1 chu -> chon chu con thieu
      const vt = Math.floor(Math.random() * v.zh.length), c = v.zh[vt];
      const khac = tronMang(bo.chu.filter((x) => v.zh.indexOf(x) < 0)).slice(0, n - 1);
      lua = [c].concat(khac);
      hoi = { thieu: v.zh.slice(0, vt) + '＿' + v.zh.slice(vt + 1), vn: v.vn }; dap = c;
    }
    lua = tronMang(lua.filter((x, j, a) => x && a.indexOf(x) === j));
    return { k, hoi, lua, dap: lua.indexOf(dap), zh: v.zh, py: v.py, vn: v.vn, u: v.u };
  }
  const cauDung = (q) => (q.k === 'viet' || q.lua.length >= 2) && q.dap >= 0;

  /* ---- Ngan hang Kiem tra bai cu (cung kho voi man Kiem tra bai cu + tro choi dien thoai, khong co cau dich) ----
     Cau luu tren may chu: { k: 'kt' (trac nghiem) | 'xep' | 'noi', c: cau day du (cau-hoi.js, co dap an),
       hoi: CauHoi.choHs(c) (gui cho em, khong co dap an), lua, dap (chi so dung voi trac nghiem),
       zh/py/vn: tu vung cau hoi nhac toi (de on cach quang + the chu), doc: cau doc to sau khi tra loi } */
  const KT_TU = ['nghia', 'viet', 'dien'];
  // Bo du lieu cho cac bai em dang hoc (cung bai voi tuHocCua); null neu khong du de ra cau
  function boKtbc(bo) {
    const ng = Ktbc.nguonBai(bo.urls || [], bo.cap);
    return ng.vocab.length >= 4 ? ng : null;
  }
  // Giu n lua chon (luon co dap an dung)
  function catLua(c, n) {
    if (c.k || !n || c.opts.length <= n) return c;
    const dung = c.opts[c.dung];
    const opts = tronMang([dung].concat(tronMang(c.opts.filter((o, j) => j !== c.dung)).slice(0, n - 1)));
    return Object.assign({}, c, { opts, dung: opts.indexOf(dung) });
  }
  function cauKt(c, ng) {
    // "Đáp án C: ..." — chu cai co the khong con dung sau khi xao / bot lua chon
    if (/^Đáp án [A-F]: /.test(c.why || '')) c = Object.assign({}, c, { why: c.why.replace(/^Đáp án [A-F]: /, 'Đáp án: ') });
    // u: bai nguon cua cau (chi noi bo, khong gui cho em) — de kiem tra cau hoi chi thuoc bai em da hoc / duoc giao
    const q = { k: c.k || 'kt', c, hoi: CauHoi.choHs(c), lua: c.k ? [] : c.opts.slice(), dap: c.k ? -1 : c.dung, u: Ktbc.nguonCau(c, ng) };
    let tu = '';
    if (!c.k) {
      const m = /^«([^»]+)»/.exec(c.zh), dung = c.opts[c.dung];
      tu = ng.tuMap[c.zh] ? c.zh : m && ng.tuMap[m[1]] ? m[1] : ng.tuMap[dung] ? dung : '';
      q.doc = /＿＿/.test(c.zh) ? c.zh.replace('＿＿', dung) : tu;
    } else if (c.k === 'xep') q.doc = c.dap;
    else { q.noi = c.trai.filter((z) => ng.tuMap[z]); q.doc = ''; }
    if (tu) { const v = ng.tuMap[tu]; q.zh = v.zh; q.py = v.py; q.vn = v.vn; }
    return q;
  }
  const khoaCau = (q) => q.k + '|' + (q.c ? (q.c.zh || '') + '|' + JSON.stringify(q.c.k ? q.c.dap : q.c.opts[q.c.dung]) : q.zh);
  // n cau dang ds; opt.uuTien(q) -> diem (cao truoc); opt.thay / opt.tuDa: cau / tu da dung (tranh trung)
  function chonKt(ng, ds, n, opt) {
    opt = opt || {};
    if (n <= 0) return [];
    const thay = opt.thay || {}, tuDa = opt.tuDa || {};
    const ung = Ktbc.taoCau(ng, ds, Math.max(n * 4, 8), opt.coPy).map((c) => cauKt(catLua(c, opt.lua), ng));
    const ut = opt.uuTien || (() => 0);
    const xep = ung.map((q) => ({ q, d: ut(q) + Math.random() })).sort((a, b) => b.d - a.d).map((x) => x.q);
    const ra = [];
    for (const q of xep) {
      if (ra.length >= n) break;
      const k = khoaCau(q);
      if (thay[k] || (q.zh && tuDa[q.zh])) continue;
      thay[k] = 1; if (q.zh) tuDa[q.zh] = 1;
      ra.push(q);
    }
    return ra;
  }
  // Thu thach chu Han tu ngan hang Kiem tra bai cu: cau nghe (1–2) + viet chu (1) cua nong trai,
  // con lai: tu vung (uu tien tu den han on / hay sai), ngu phap, xep cau, noi tu. null -> dung bo cu
  function deChuHanKt(bo, opt) {
    const ng = boKtbc(bo);
    if (!ng) return null;
    const den = bo.den || [], sai = bo.sai || [];
    const ut = (zh) => (den.indexOf(zh) >= 0 ? 3 : sai.indexOf(zh) >= 0 ? 2 : 0);
    const tuDa = {}, thay = {}, dacBiet = [];
    const tuUt = bo.tu.map((v) => ({ v, d: ut(v.zh) + Math.random() })).sort((a, b) => b.d - a.d).map((x) => x.v);
    let vi = 0;
    if (opt.nghe) {
      const soNghe = 1 + (Math.random() < 0.5 ? 1 : 0);
      for (; vi < tuUt.length && dacBiet.length < soNghe; vi++) {
        const q = taoCau(bo, tuUt[vi], 'nghe', 4, true);
        if (cauDung(q)) { dacBiet.push(q); tuDa[q.zh] = 1; }
      }
    }
    if (opt.viet) {
      for (let lan = 0; vi < tuUt.length && lan < 12; vi++, lan++) {
        const q = taoCau(bo, tuUt[vi], 'viet', 4, true);
        if (q.k === 'viet') { dacBiet.push(q); tuDa[q.zh] = 1; vi++; break; }
      }
    }
    const con = CH_SO - dacBiet.length;
    const soNp = Ktbc.coDang(ng, 'nguphap') ? 2 : 0, soXep = Ktbc.coDang(ng, 'xepcau') ? 1 : 0, soNoi = Ktbc.coDang(ng, 'noi') ? 1 : 0;
    const dsTu = KT_TU.filter((l) => Ktbc.coDang(ng, l));
    const khac = chonKt(ng, ['nguphap'], soNp, { thay, tuDa }).concat(chonKt(ng, ['xepcau'], soXep, { thay, tuDa }), chonKt(ng, ['noi'], soNoi, { thay, tuDa }));
    const tuVung = chonKt(ng, dsTu, con - khac.length, { thay, tuDa, uuTien: (q) => (q.zh ? ut(q.zh) : 0) });
    let ds = tuVung.concat(khac);
    if (ds.length < con) ds = ds.concat(chonKt(ng, Ktbc.LOAI_DT, con - ds.length, { thay, tuDa }));
    ds = tronMang(dacBiet.concat(ds.slice(0, con)));
    return ds.length >= 5 ? { nguon: bo.nguon, ds } : null;
  }
  // opt.nghe: may em doc duoc tieng Trung -> co cau nghe; opt.viet: co cau viet chu
  // opt.ktbc: lay cau tu ngan hang Kiem tra bai cu (hop qua) — cac hoat dong khac van dung bo tu vung cu
  async function deChuHan(user, opt) {
    opt = opt || {};
    const bo = await tuHocCua(user), tu = bo.tu, sai = bo.sai, den = bo.den || [];
    if (opt.ktbc) { const kt = deChuHanKt(bo, opt); if (kt) return kt; }
    // uu tien: tu den han on (toi da 4), tu hay sai (toi da 3), roi cac tu khac
    const chon = tronMang(tu.filter((v) => den.indexOf(v.zh) >= 0)).slice(0, 4)
      .concat(tronMang(tu.filter((v) => den.indexOf(v.zh) < 0 && sai.indexOf(v.zh) >= 0)).slice(0, 3))
      .concat(tronMang(tu.filter((v) => den.indexOf(v.zh) < 0 && sai.indexOf(v.zh) < 0))).slice(0, CH_SO);
    const kieu = ['nghia', 'nghia', 'nghia', 'py', 'py', 'py', 'thieu', 'thieu', 'chu', 'chu'];
    if (opt.nghe) { kieu[0] = 'nghe'; kieu[8] = 'nghe'; }
    if (opt.viet) kieu[3] = 'viet';
    const k2 = tronMang(kieu);
    return { nguon: bo.nguon, ds: chon.map((v, i) => taoCau(bo, v, k2[i], 4, true)).filter(cauDung) };
  }
  // De cho 1 con ca bac t: ca cang to -> nhieu cau hon, dap an giong nhau hon, uu tien tu em hay sai / tu dai
  const KIEU_CA = [null, ['chu'], ['chu', 'nghia'], ['nghia', 'py'], ['py', 'thieu', 'nghia'], ['thieu', 'py', 'nghia']];
  // Ca theo ngan hang Kiem tra bai cu: ca be -> nghia cua tu (co pinyin); ca to -> ngu phap, dien tu, xep cau, noi tu
  const KIEU_CA_KT = [null, ['nghia'], ['nghia', 'viet'], ['viet', 'dien', 'noi'], ['nguphap', 'dien', 'xepcau'], ['nguphap', 'xepcau', 'noi', 'dien']];
  function deCaKt(bo, t, opt) {
    const ng = boKtbc(bo);
    if (!ng) return null;
    const bac = CA_BAC[t];
    let ks = KIEU_CA_KT[t].filter((l) => Ktbc.coDang(ng, l));
    if (!ks.length) ks = (t <= 2 ? ['nghia', 'viet'] : ['dien', 'viet', 'nghia']).filter((l) => Ktbc.coDang(ng, l));
    if (!ks.length) return null;
    ks = tronMang(ks);
    if (opt && opt.nghe && t >= 2 && t <= 4 && Math.random() < 1 / (ks.length + 1)) ks.unshift('nghe');
    const kho = (zh) => bo.sai.indexOf(zh) >= 0 || (bo.den || []).indexOf(zh) >= 0;
    // ca be: tu ngan; ca to: tu em hay sai / den han on
    const ut = (q) => (!q.zh ? 0 : t >= 4 ? (kho(q.zh) ? 3 : 0) + q.zh.length * 0.3 : t <= 2 ? -q.zh.length * 0.6 : 0);
    const thay = {}, tuDa = {}, cau = [];
    for (let i = 0; i < bac.so * 3 && cau.length < bac.so; i++) {
      const l = ks[cau.length % ks.length];
      if (l === 'nghe') {
        const ds = tronMang(bo.tu.filter((v) => !tuDa[v.zh]));
        const v = (t >= 4 ? ds.filter((x) => kho(x.zh)) : []).concat(ds)[0];
        const q = v && taoCau(bo, v, 'nghe', bac.lua, bac.giong);
        if (q && cauDung(q)) { cau.push(q); tuDa[q.zh] = 1; } else ks = ks.filter((x) => x !== 'nghe');
        continue;
      }
      const q = chonKt(ng, [l], 1, { thay, tuDa, uuTien: ut, lua: bac.lua, coPy: t === 1 })[0];
      if (q) cau.push(q);
    }
    return cau.length >= bac.so ? { nguon: bo.nguon, ds: cau } : null;
  }
  async function deCa(user, t, opt) {
    const bo = await tuHocCua(user), bac = CA_BAC[t];
    const kt = deCaKt(bo, t, opt);
    if (kt) return kt;
    const kho = (v) => bo.sai.indexOf(v.zh) >= 0 || (bo.den || []).indexOf(v.zh) >= 0;
    const sai = tronMang(bo.tu.filter(kho));
    const thuong = tronMang(bo.tu.filter((v) => !kho(v)));
    const ds = t >= 4 ? sai.concat(thuong.sort((a, b) => b.zh.length - a.zh.length)) : t === 3 ? thuong.concat(sai) : thuong.sort((a, b) => a.zh.length - b.zh.length).concat(sai);
    // ca be: lay trong nua tu ngan/de; ca to: lay tu dau danh sach (tu sai, tu dai)
    const nguon = t <= 2 ? tronMang(ds.slice(0, Math.max(6, Math.ceil(ds.length / 2)))) : ds;
    const ks = KIEU_CA[t].slice();
    if (opt && opt.nghe && t >= 2 && t <= 4) ks.push('nghe');
    const kieu = tronMang(ks);
    const cau = [];
    for (const v of nguon) {
      if (cau.length >= bac.so) break;
      const q = taoCau(bo, v, kieu[cau.length % kieu.length], bac.lua, bac.giong, t === 1);
      if (cauDung(q)) cau.push(q);
    }
    return { nguon: bo.nguon, ds: cau };
  }
  // Cham 1 cau: cau cu (chon === dap) hoac cau Kiem tra bai cu (cau-hoi.js: { chon } | { xep } | { noi })
  function chamCau(q, b) {
    b = b || {};
    if (q.c) { const r = CauHoi.cham(q.c, b); return !!(r.hopLe && r.dung); }
    return Math.floor(Number(b.chon)) === q.dap;
  }
  // On cach quang: cau ve 1 tu -> ghi tu do; noi tu -> ghi tung cap; ngu phap / xep cau (khong co tu) bo qua
  function onCau(f, q, b, dung) {
    if (q.c && q.c.k === 'noi') {
      const x = Array.isArray(b && b.noi) ? b.noi.map(Number) : [];
      q.c.trai.forEach((z, i) => { if ((q.noi || []).indexOf(z) >= 0) ghiOn(f, z, x[i] === q.c.dap[i]); });
      return;
    }
    ghiOn(f, q.zh, dung);
  }
  // Phan gui lai sau khi cham: dap an + giai thich (cau Kiem tra bai cu co them why / doc)
  function ketQuaCau(q) {
    const kq = { dap: q.c ? CauHoi.dapAn(q.c) : q.dap, zh: q.zh || '', py: q.py || '', vn: q.vn || '' };
    if (q.c) { kq.kt = q.k; kq.why = q.c.why || ''; kq.doc = q.doc || ''; }
    return kq;
  }
  // So giay cho 1 cau ca (xep cau / noi tu gap doi, cau ngu phap co cau dai gap ruoi)
  function giayCau(t, q) {
    const g = CA_BAC[t].giay;
    if (!g || !q) return g;
    return q.k === 'xep' || q.k === 'noi' ? g * 2 : q.k === 'kt' && q.c && /＿＿/.test(q.c.zh) ? Math.round(g * 1.5) : g;
  }
  // Hop qua: nong san / do trang tri / xu / vat nuoi (hiem). Diem tuyet doi -> khong ra loai thuong
  function moQua(f, lv, tuyetDoi) {
    const r = tuyetDoi ? 62 + Math.random() * 38 : Math.random() * 100; // 10/10: chi ra do trang tri hoac vat nuoi
    const chon = (ds) => ds[Math.floor(Math.random() * ds.length)];
    if (r >= 92) {
      const con = Object.keys(CON).filter((k) => CON[k].lv <= lv + 1 && f.o.filter((o) => o.k === k).length + (f.tui[k] || 0) < CON_TOI_DA);
      if (con.length) { const k = chon(con); f.tui[k] = (f.tui[k] || 0) + 1; return { loai: 'con', k, n: 1, hiem: 'Hiếm' }; }
    }
    if (r >= 62) {
      const tt = Object.keys(TT).filter((k) => TT[k].lv <= lv + 1 && !TT[k].doc);
      const k = chon(tt); f.tui[k] = (f.tui[k] || 0) + 1;
      return { loai: 'tt', k, n: 1, hiem: r >= 85 ? 'Quý' : 'Đẹp' };
    }
    if (r >= 45) { const n = 20 + Math.floor(Math.random() * 21); f.xu += n; return { loai: 'xu', k: 'xu', n, hiem: 'Thường' }; }
    const sp = Object.keys(SP).filter((k) => !CA[k] && !SP[k].hiem && !SP[k].nl && (!CAY[k] || CAY[k].lv <= lv + 1));
    const k = chon(sp), n = CAY[k] ? 3 : 2;
    f.kho[k] = (f.kho[k] || 0) + n;
    return { loai: 'sp', k, n, hiem: 'Thường' };
  }
  const conQua = (f) => CH_QUA_NGAY - (f.chQua && f.chQua.d === d.vnDayKey() ? f.chQua.n : 0);
  const deChoHs = (ch) => ({ id: ch.id, nguon: ch.nguon, so: ch.ds.length, da: ch.tl.length, dung: ch.tl.filter((x) => x.dung).length,
    ds: ch.ds.map((q) => ({ k: q.k, hoi: q.hoi, lua: q.lua })) });

  app.get('/api/farm/chuhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await doc(req.user.id);
    const ch = f.ch && !f.ch.xong && f.ch.ngay === d.vnDayKey() ? f.ch : null;
    const bo = await tuHocCua(req.user);
    res.json({ conQua: conQua(f), quaNgay: CH_QUA_NGAY, dat: CH_DAT, so: CH_SO, dang: ch ? deChoHs(ch) : null, coBai: bo.coBai, nguon: bo.nguon });
  }));
  app.get('/api/farm/bosuutap', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await doc(req.user.id);
    const ds = Object.keys(f.the || {}).map((zh) => ({ zh, n: f.the[zh][0], py: f.the[zh][1], vn: f.the[zh][2] }))
      .sort((a, b) => b.n - a.n || a.zh.localeCompare(b.zh));
    res.json({ ds, the: soThe(f), theMoc: f.theMoc || 0 });
  }));
  app.post('/api/farm/chuhan/moi', d.requireAuth, d.asyncRoute(async (req, res) => {
    const de = await deChuHan(req.user, { nghe: !!(req.body && req.body.nghe), viet: true, ktbc: true });
    if (de.ds.length < 5) return res.status(400).json({ error: CHUA_HOC, chuaHoc: true });
    const out = await lanLuot(req.user.id, async () => {
      const f = await doc(req.user.id);
      f.ch = { id: Math.random().toString(36).slice(2, 10), ngay: d.vnDayKey(), nguon: de.nguon, ds: de.ds, tl: [], xong: false };
      await ghi(req.user.id, f);
      return { conQua: conQua(f), dang: deChoHs(f.ch) };
    });
    res.json(out);
  }));
  app.post('/api/farm/chuhan/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const b = req.body || {};
    await traLoi(res, lanLuot(req.user.id, async () => {
      const f = await doc(req.user.id);
      const ch = f.ch;
      if (!ch || ch.xong || ch.id !== String(b.id || '')) throw loi('Lượt thử thách này đã kết thúc — bắt đầu lượt mới nhé.');
      const i = ch.tl.length;
      if (Number(b.i) !== i) throw loi('Câu này em đã trả lời rồi.');
      const q = ch.ds[i], chon = Number(b.chon);
      const dung = chamCau(q, b);
      ch.tl.push({ chon: Number.isFinite(chon) ? chon : -1, dung });
      onCau(f, q, b, dung);
      const kq = Object.assign({ ok: true, dung, i }, ketQuaCau(q));
      if (dung) chung.ldCong(req.user.id);
      if (dung && q.zh && q.vn && q.k !== 'noi') {
        f.the = f.the || {};
        const t = f.the[q.zh] || [0, q.py, q.vn];
        t[0]++;
        f.the[q.zh] = t;
        if (t[0] === THE_DUNG) {
          kq.theMoi = { zh: q.zh, py: q.py, vn: q.vn };
          const so = soThe(f), moc = MOC_THE[f.theMoc || 0];
          if (moc && so >= moc.n) {
            f.theMoc = (f.theMoc || 0) + 1;
            f.tui[moc.k] = (f.tui[moc.k] || 0) + 1;
            kq.mocMoi = { k: moc.k, n: moc.n };
          }
        }
      }
      if (ch.tl.length >= ch.ds.length) {
        ch.xong = true;
        const soDung = ch.tl.filter((x) => x.dung).length;
        kq.ketThuc = { soDung, so: ch.ds.length, dat: soDung >= CH_DAT };
        if (soDung >= CH_DAT && conQua(f) > 0) {
          const ngay = d.vnDayKey();
          f.chQua = { d: ngay, n: (f.chQua && f.chQua.d === ngay ? f.chQua.n : 0) + 1 };
          kq.ketThuc.qua = moQua(f, lvTuXp(f.xp), soDung === ch.ds.length);
          f.xp += 2;
        }
        kq.ketThuc.conQua = conQua(f);
      }
      await ghi(req.user.id, f);
      if (kq.ketThuc || kq.mocMoi) kq.st = await trangThai(req.user.id, f);
      return kq;
    }));
  }));

  /* ---------------- Ho cau ca 钓鱼湖 ----------------
     Ho co 7 bong ca (bac 1..5, to dan). Chon bong -> tha cau (ton 1 moi) -> tra loi cau hoi theo bac:
     dung het = cau duoc ca (vao kho, ghi bo suu tap + ky luc cm); sai / qua gio = ca song mat.
     May chu giu dap an va dong ho -> khong gian lan duoc.                                           */
  const tongWCa = CA_BAC.reduce((a, b) => a + (b ? b.w : 0), 0);
  function caMoi(t) {
    if (!t) { let r = Math.random() * tongWCa; t = 1; while (t < 5 && r >= CA_BAC[t].w) { r -= CA_BAC[t].w; t++; } }
    return { id: Math.random().toString(36).slice(2, 9), t, x: 8 + Math.floor(Math.random() * 84), y: 14 + Math.floor(Math.random() * 62) };
  }
  function hoCa(f) {
    const ngay = d.vnDayKey();
    const hc = f.hc = f.hc || {};
    if (hc.d !== ngay) { hc.d = ngay; hc.n = 0; }
    if (!Array.isArray(hc.ho)) hc.ho = [];
    hc.bst = hc.bst || {};
    // luon co it nhat 2 ca be/vua cho ban moi hoc
    while (hc.ho.length < HO_SO_CA) hc.ho.push(caMoi(hc.ho.filter((c) => c.t <= 2).length < 2 ? 1 + Math.floor(Math.random() * 2) : 0));
    return hc;
  }
  function moiCa(hc, homNay) {
    const them = Math.floor(homNay / MOI_MOI_SAO), co = Math.min(MOI_TOI_DA, MOI_CO_BAN + them);
    return { co, da: hc.n, con: Math.max(0, co - hc.n), sau: co >= MOI_TOI_DA ? 0 : (them + 1) * MOI_MOI_SAO - homNay };
  }
  const dangCaChoHs = (g) => {
    const gy = giayCau(g.t, g.ds[g.tl.length]);
    return { id: g.id, t: g.t, ca: g.ca, i: g.tl.length, so: g.ds.length, giay: CA_BAC[g.t].giay, nguon: g.nguon,
      conMs: gy ? Math.max(0, g.bd + gy * 1000 - Date.now()) : 0,
      ds: g.ds.map((q) => ({ k: q.k, hoi: q.hoi, lua: q.lua, gy: giayCau(g.t, q) })) };
  };
  const hoChoHs = (hc, homNay, coBai) => ({ ho: hc.ho, moi: moiCa(hc, homNay), bst: hc.bst, dang: hc.dang ? dangCaChoHs(hc.dang) : null, coBai: coBai !== false });
  const homNayCua = async (userId) => saoHoc(await d.loadStar(userId)).homNay;

  app.get('/api/farm/hocau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const homNay = await homNayCua(req.user.id);
    res.json(await lanLuot(req.user.id, async () => {
      const f = await doc(req.user.id);
      const truoc = JSON.stringify(f.hc || null);
      const hc = hoCa(f);
      if (JSON.stringify(hc) !== truoc) await ghi(req.user.id, f);
      return hoChoHs(hc, homNay, (await tuHocCua(req.user)).coBai);
    }));
  }));
  app.post('/api/farm/hocau/tha', d.requireAuth, d.asyncRoute(async (req, res) => {
    const b = req.body || {};
    const homNay = await homNayCua(req.user.id);
    await traLoi(res, lanLuot(req.user.id, async () => {
      const f = await doc(req.user.id);
      const hc = hoCa(f);
      if (lvTuXp(f.xp) < MO_TN.cau.lv) throw loi('Hồ câu cá mở ở cấp ' + MO_TN.cau.lv + ' — chăm sóc nông trại để lên cấp nhé!');
      const c = hc.ho.find((x) => x.id === String(b.id || ''));
      if (!c) throw loi('Con cá này bơi đi mất rồi — chọn con khác nhé!');
      if (hc.dang && hc.dang.ca === c.id) return { ok: true, dang: dangCaChoHs(hc.dang), ho: hoChoHs(hc, homNay) };
      const m = moiCa(hc, homNay);
      if (m.con <= 0) throw loi(m.sau ? 'Hết mồi câu rồi — học thêm ' + m.sau + ' sao nữa để có thêm 1 mồi nhé!' : 'Hôm nay em dùng hết ' + MOI_TOI_DA + ' mồi rồi — mai câu tiếp nhé!');
      const de = await deCa(req.user, c.t, { nghe: !!b.nghe });
      if (de.ds.length < CA_BAC[c.t].so) throw loi(CHUA_HOC);
      // dang cau con khac ma bo do -> con do bơi mất
      if (hc.dang) { const cu = hc.dang.ca; hc.ho = hc.ho.filter((x) => x.id !== cu); }
      hc.n++;
      // 1,5 giay dau la luc phao chim (ca can cau) -> dong ho bat dau sau do
      hc.dang = { id: Math.random().toString(36).slice(2, 10), ca: c.id, t: c.t, ds: de.ds, tl: [], bd: Date.now() + 1500, nguon: de.nguon };
      hoCa(f);
      await ghi(req.user.id, f);
      return { ok: true, dang: dangCaChoHs(hc.dang), ho: hoChoHs(hc, homNay) };
    }));
  }));
  app.post('/api/farm/hocau/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const b = req.body || {};
    const homNay = await homNayCua(req.user.id);
    await traLoi(res, lanLuot(req.user.id, async () => {
      const f = await doc(req.user.id);
      const hc = hoCa(f), g = hc.dang;
      if (!g || g.id !== String(b.id || '')) throw loi('Lượt câu này đã kết thúc — chọn cá khác nhé.');
      const i = g.tl.length;
      if (Number(b.i) !== i) throw loi('Câu này em đã trả lời rồi.');
      const q = g.ds[i], bac = CA_BAC[g.t];
      const gy = giayCau(g.t, q);
      const cham = !!gy && Date.now() - g.bd > (gy + 4) * 1000;
      const dung = !cham && chamCau(q, b);
      g.tl.push(dung);
      onCau(f, q, b, dung);
      const kq = Object.assign({ ok: true, dung, cham, i }, ketQuaCau(q));
      if (dung) chung.ldCong(req.user.id);
      const xong = () => { hc.ho = hc.ho.filter((x) => x.id !== g.ca); hc.dang = null; hoCa(f); };
      if (!dung) {
        kq.song = true; xong();
      } else if (g.tl.length < g.ds.length) {
        g.bd = Date.now();
      } else {
        const loai = Object.keys(CA).filter((k) => CA[k].t === g.t);
        const k = loai[Math.floor(Math.random() * loai.length)], [a, z] = CA[k].cm;
        const cm = Math.round(a + Math.random() * (z - a));
        f.kho[k] = (f.kho[k] || 0) + 1;
        const cu = hc.bst[k] || [0, 0];
        kq.bat = { k, cm, t: g.t, moi: !cu[0], kyLuc: cu[0] > 0 && cm > cu[1] };
        hc.bst[k] = [cu[0] + 1, Math.max(cu[1], cm)];
        f.xp += bac.xp;
        xong();
      }
      await ghi(req.user.id, f);
      kq.ho = hoChoHs(hc, homNay);
      if (kq.bat) kq.st = await trangThai(req.user.id, f);
      return kq;
    }));
  }));

  app.get('/api/farm/lop', d.requireAuth, d.asyncRoute(async (req, res) => {
    const lop = await banCungLop(req.user.id);
    if (!lop) return res.json({ lop: null, ds: [] });
    const [tt, ten] = await Promise.all([tomTat(lop.ids), d.loadUserNames()]);
    const f = await doc(req.user.id);
    const ngay = d.vnDayKey();
    const daTham = f.tham.d === ngay ? f.tham.ids : [];
    const ds = lop.ids.filter((id) => ten[id]).map((id) => ({
      id, ten: ten[id], la: id === req.user.id,
      lv: tt[id] ? tt[id].lv : 0, dep: tt[id] ? tt[id].dep : 0, tim: tt[id] ? tt[id].tim : 0,
      co: !!tt[id], daTim: daTham.indexOf(id) >= 0,
    })).sort((a, b) => b.dep - a.dep || b.lv - a.lv);
    res.json({ lop: lop.ten, ds });
  }));

  app.get('/api/farm/xem/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const id = String(req.params.id);
    if (!(await coTheChoi(req.user.id, id))) return res.status(403).json({ error: 'Bạn này chưa mở nông trại.' });
    const [f, ten, fm] = await Promise.all([doc(id), d.loadUserNames(), doc(req.user.id)]);
    const now = Date.now(), ngay = d.vnDayKey();
    const svb = await d.loadStar(id);
    // lop cua ban -> nut 'Thi tran' tren thanh tham mo dung thi tran lop ban ay
    const lopBan = await banCungLop(id);
    res.json({
      ten: ten[id] || '', lv: lvTuXp(f.xp), dep: diemDep(f), tim: f.tim || 0, kich: DAT[f.dat], now, hv: svb.total || 0,
      // chi gui hinh dang nong trai + sap hang, khong gui xu / kho
      o: f.o.map((o) => ({ id: o.id, k: o.k, x: o.x, y: o.y, n: o.n, c: o.c, h: o.h, t: o.t })),
      sap: sapHien(f.sap), av: f.av || null, xg: xuongMod ? xuongMod.xgTom(f) : {}, nc: xuongMod ? xuongMod.ncTom(f, false) : [],
      daTim: fm.tham.d === ngay && fm.tham.ids.indexOf(id) >= 0,
      daChao: !!(fm.chao && fm.chao.d === ngay && fm.chao.ids.indexOf(id) >= 0),
      conGiup: GIUP_NGAY - (fm.giup && fm.giup.d === ngay ? fm.giup.n : 0),
      conTin: TIN_BAN_NGAY - (fm.tin && fm.tin.d === ngay ? fm.tin.dem[id] || 0 : 0),
      daTang: !!(fm.qua && fm.qua.d === ngay && fm.qua.ids.indexOf(id) >= 0),
      tai: taiChoHs(f), daGiupTai: !!(taiDang(f) && (f.tai.giup || []).indexOf(req.user.id) >= 0),
      lop: lopBan ? { id: lopBan.id, ten: lopBan.ten } : null,
      tt: thanhTich(f), cay7: thiDua ? thiDua.cay7ChoHs(f) : null,
      daThich: !!(fm.bc && fm.bc.d === ngay && fm.bc.ids.indexOf(id) >= 0),
      tnMo: tinMod ? (await tinMod.duocNhan(req.user.id, id)).duoc : false,
    });
  }));

  // Tha tim cho nong trai ban: moi ngay 1 lan / ban, toi da 10 ban; nguoi tha duoc +3 xu
  app.post('/api/farm/tim/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const id = String(req.params.id);
    const me = req.user.id;
    if (id === me) return res.status(400).json({ error: 'Không tự thả tim cho mình được.' });
    if (!(await coTheChoi(me, id))) return res.status(403).json({ error: 'Bạn này chưa mở nông trại.' });
    const ngay = d.vnDayKey();
    const kq = await lanLuot(me, async () => {
      const f = await doc(me);
      if (f.tham.d !== ngay) f.tham = { d: ngay, ids: [] };
      if (f.tham.ids.indexOf(id) >= 0) throw loi('Hôm nay em đã thả tim cho bạn này rồi.');
      if (f.tham.ids.length >= 10) throw loi('Mỗi ngày thả tim tối đa 10 bạn.');
      f.tham.ids.push(id);
      f.xu += 3;
      suKien(f, 'tim', 1);
      await ghi(me, f);
      return f.xu;
    }).catch((err) => { if (err.farm) return { loi: err.message }; throw err; });
    if (kq && kq.loi) return res.status(400).json({ error: kq.loi });
    const tim = await lanLuot(id, async () => {
      const g = await doc(id);
      g.tim = (g.tim || 0) + 1;
      ghiNk(g, { ai: me, l: 'tim' });
      await ghi(id, g);
      return g.tim;
    });
    res.json({ ok: true, xu: kq, tim, them: 3 });
  }));

  // Hai nguoi cung luc (mua hang, giup ban): khoa theo thu tu id de khong ket khoa
  function haiLuot(a, b, fn) {
    const [x, y] = a < b ? [a, b] : [b, a];
    return lanLuot(x, () => lanLuot(y, fn));
  }
  async function docNhieu(ids) {
    const out = {};
    if (!ids.length) return out;
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      ids.forEach((id) => { if (all[id]) out[id] = Object.assign(nongTraiMoi(), all[id]); });
      return out;
    }
    const [rows] = await d.db().query('SELECT user_id, data FROM farms WHERE user_id IN (?)', [ids]);
    rows.forEach((r) => { try { out[r.user_id] = Object.assign(nongTraiMoi(), JSON.parse(r.data)); } catch (e) { /* bo qua */ } });
    return out;
  }
  async function cungLop(me, id) {
    if (id === me) throw loi('Đây là nông trại của em mà.');
    if (!(await coTheChoi(me, id))) throw loi('Bạn này chưa mở nông trại.');
  }
  // Loi nong trai -> 400 kem thong bao; loi khac de server xu ly
  function traLoi(res, p) {
    return p.then((kq) => res.json(kq), (err) => { if (!err.farm) throw err; res.status(400).json({ error: err.message }); });
  }

  // Cho lop: tat ca o sap cua cac ban cung lop
  app.get('/api/farm/cho', d.requireAuth, d.asyncRoute(async (req, res) => {
    const lop = await banCungLop(req.user.id);
    if (!lop) return res.json({ lop: null, ds: [] });
    const ids = lop.ids.filter((id) => id !== req.user.id);
    const [farms, ten] = await Promise.all([docNhieu(ids), d.loadUserNames()]);
    const ds = [];
    Object.keys(farms).forEach((id) => {
      sapHien(farms[id].sap).forEach((o) => ds.push({ id, ten: ten[id] || '', sid: o.id, k: o.k, n: o.n, gia: o.gia }));
    });
    ds.sort((a, b) => (a.k < b.k ? -1 : a.k > b.k ? 1 : a.gia / a.n - b.gia / b.n));
    res.json({ lop: lop.ten, ds });
  }));

  // Thi tran cua lop: moi ban 1 lo dat, ve thu nho hinh dang nong trai that (khong gui xu / kho)
  // ?lop=<id>: xem thi tran cua lop khac (chi xem + sang tham tung nong trai; khong gui ma lop)
  app.get('/api/farm/thitran', d.requireAuth, d.asyncRoute(async (req, res) => {
    const lopEm = await banCungLop(req.user.id);
    const muon = String(req.query.lop || '');
    let lop = lopEm;
    if (muon && (!lopEm || lopEm.id !== muon)) {
      const st = await d.loadClassState();
      const cls = st.classes.find((c) => c.id === muon);
      if (!cls) return res.status(404).json({ error: 'Không tìm thấy thị trấn này.' });
      lop = { id: muon, ten: cls.name, ids: Object.keys(st.members).filter((u) => st.members[u].classId === muon) };
    }
    if (!lop) return res.json({ lop: null, ds: [], cuaEm: true });
    const [farms, ten, sao] = await Promise.all([docNhieu(lop.ids), d.loadUserNames(), d.loadAllStars()]);
    const tuanCua = {}, tongCua = {};
    sao.forEach((x) => { tuanCua[x.userId] = saoHoc(x).tuan; tongCua[x.userId] = x.total || 0; });
    const ds = lop.ids.filter((id) => ten[id]).map((id) => {
      const f = farms[id];
      const x = { id, ten: ten[id], la: id === req.user.id, co: !!f, tuan: tuanCua[id] || 0, hv: tongCua[id] || 0 };
      if (f) Object.assign(x, {
        lv: lvTuXp(f.xp), dep: diemDep(f), tim: f.tim || 0, kich: DAT[f.dat], sap: (f.sap || []).length, av: f.av || null,
        // lo dat tren thi tran: co vang trai so 1 + ruy bang nong trai dep cua tuan (chi them truong, khong doi gi khac)
        coVang: thanhTich(f).coVang, ruy: thanhTich(f).ruy,
        o: f.o.map((o) => ({ id: o.id, k: o.k, x: o.x, y: o.y, n: o.n, c: o.c, h: o.h, t: o.t })),
      });
      return x;
    }).sort((a, b) => (b.dep || 0) - (a.dep || 0) || (b.lv || 0) - (a.lv || 0) || a.ten.localeCompare(b.ten, 'vi'));
    const [ct, cv] = await Promise.all([chung.ctLop(lop.id), chung.coVuLop(lop.id, req.user.id)]);
    const diem = ds.filter((x) => x.co).reduce((t, x) => t + (x.dep || 0) + (x.tuan || 0), 0) + 150 * ct.xay.length + (await chung.diemThem(lop.id));
    const dh = await chung.danhHieuLop(lop.id, diem);
    res.json({ lop: lop.ten, lopId: lop.id, cuaEm: !!(lopEm && lopEm.id === lop.id), now: Date.now(), ds, ct, covu: cv, diem, cap: dh.cap, hangTuanTruoc: dh.hangTuanTruoc, yeuMen: dh.yeuMen, loiChu: dh.loiChu });
  }));

  /* ---- Bang "Can mua": dang nhu cau, ban cho ban dang can ---- */
  app.get('/api/farm/nhucau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, now = Date.now();
    const ds = [];
    (await taiCongDong()).forEach((x) => {
      if (x.id === me) return;
      x.can.forEach((c) => { if (SP[c.k] && now - c.t <= CAN_HAN_MS) ds.push(Object.assign({ id: x.id, ten: x.ten, lop: x.lop, nid: c.id, k: c.k, n: c.n, gia: c.gia, t: c.t }, cauCanMua(c.k, c.n))); });
    });
    ds.sort((a, b) => b.t - a.t);
    res.json({ ds: ds.slice(0, 120) });
  }));
  app.post('/api/farm/nhucau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const b = req.body || {};
    await traLoi(res, lanLuot(req.user.id, async () => {
      const f = await doc(req.user.id);
      const k = String(b.k || ''), n = Math.floor(Number(b.n) || 0), gia = Math.floor(Number(b.gia) || 0);
      if (!SP[k] || k === 'len') throw loi('Chọn món em muốn mua nhé.');
      if (n < 1 || n > CAN_SL_TOI_DA) throw loi('Mỗi tin mua từ 1 đến ' + CAN_SL_TOI_DA + ' món.');
      f.can = (f.can || []).filter((x) => Date.now() - x.t <= CAN_HAN_MS);
      if (f.can.length >= CAN_TOI_DA) throw loi('Em đang có ' + CAN_TOI_DA + ' tin cần mua — đợi bạn bán hoặc huỷ bớt một tin nhé.');
      const kg = khoangGia(k, n);
      if (gia < kg.min || gia > kg.max) throw loi('Giá trả phải từ ' + kg.min + ' đến ' + kg.max + ' xu.');
      if (f.xu < gia) throw loi('Em chưa đủ ' + gia + ' xu để đăng tin (xu được giữ lại cho tới khi có bạn bán).');
      f.xu -= gia;
      f.can.push({ id: f.nid++, k, n, gia, t: Date.now() });
      await ghi(req.user.id, f);
      boNhoCongDong();
      return { ok: true, st: await trangThai(req.user.id, f) };
    }));
  }));
  app.post('/api/farm/nhucau/huy', d.requireAuth, d.asyncRoute(async (req, res) => {
    const nid = Number((req.body || {}).nid);
    await traLoi(res, lanLuot(req.user.id, async () => {
      const f = await doc(req.user.id);
      const c = (f.can || []).find((x) => x.id === nid);
      if (!c) throw loi('Tin này đã được bán hoặc đã huỷ.');
      f.can = f.can.filter((x) => x !== c);
      f.xu += c.gia;
      await ghi(req.user.id, f);
      boNhoCongDong();
      return { ok: true, them: { xu: c.gia }, st: await trangThai(req.user.id, f) };
    }));
  }));
  // Ban hang cho ban dang can: hang tu kho em -> kho ban, xu (da giu san) -> em
  app.post('/api/farm/nhucau/ban/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id), nid = Number((req.body || {}).nid);
    await traLoi(res, cungLop(me, id).then(() => haiLuot(me, id, async () => {
      const fm = await doc(me), fc = await doc(id);
      const c = (fc.can || []).find((x) => x.id === nid);
      if (!c || Date.now() - c.t > CAN_HAN_MS) throw loi('Bạn ấy vừa mua được rồi hoặc tin đã hết hạn.');
      if ((fm.kho[c.k] || 0) < c.n) throw loi('Em chưa đủ ' + c.n + ' ' + SP[c.k].vn.toLowerCase() + ' trong kho.');
      fm.kho[c.k] -= c.n;
      if (!fm.kho[c.k]) delete fm.kho[c.k];
      fm.xu += c.gia;
      fm.xp += 2;
      fc.kho[c.k] = (fc.kho[c.k] || 0) + c.n;
      fc.can = fc.can.filter((x) => x !== c);
      ghiNk(fc, { ai: me, l: 'canmua', k: c.k, n: c.n, xu: c.gia });
      await ghi(id, fc);
      await ghi(me, fm);
      boNhoCongDong();
      return { ok: true, them: { xu: c.gia }, st: await trangThai(me, fm) };
    })));
  }));

  // Mac ca truoc khi mua: may chu ra 3 luot, giu dap an, cham tung cau
  app.post('/api/farm/macca', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String((req.body || {}).ban || ''), sid = Number((req.body || {}).sid);
    await traLoi(res, cungLop(me, id).then(async () => {
      const fs2 = await doc(id);
      const o = (fs2.sap || []).find((x) => x.id === sid);
      if (!o) throw loi('Món này vừa có bạn khác mua mất rồi.');
      const gia = giaSap(o);
      return lanLuot(me, async () => {
        const fb = await doc(me);
        const ds = MAC_CA.map((c) => {
          const dung = c.dung[Math.floor(Math.random() * c.dung.length)];
          const lua = tronMang([dung.zh].concat(tronMang(c.sai).slice(0, 2)));
          return { hoi: c.hoi, lua, dap: lua.indexOf(dung.zh), zh: dung.zh, py: dung.py, tra: c.tra.replace('{gia}', gia) };
        });
        fb.mc = { id: Math.random().toString(36).slice(2, 10), ban: id, sid, ds, tl: [] };
        await ghi(me, fb);
        return { id: fb.mc.id, gia, cau: ds.map((q) => ({ hoi: q.hoi, lua: q.lua })) };
      });
    }));
  }));
  app.post('/api/farm/macca/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const b = req.body || {};
    await traLoi(res, lanLuot(req.user.id, async () => {
      const f = await doc(req.user.id);
      const mc = f.mc;
      if (!mc || mc.id !== String(b.id || '')) throw loi('Lượt mặc cả đã kết thúc.');
      const i = mc.tl.length;
      if (Number(b.i) !== i || i >= mc.ds.length) throw loi('Câu này đã trả lời rồi.');
      const q = mc.ds[i], dung = Number(b.chon) === q.dap;
      mc.tl.push(dung);
      await ghi(req.user.id, f);
      return { dung, dap: q.dap, zh: q.zh, py: q.py, vn: VN_MAC_CA[q.zh] || '', tra: q.tra, giam: mc.tl.filter((x) => x).length * 10 };
    }));
  }));

  // Mua 1 o sap cua ban: xu cua em -> ban, hang -> kho em
  app.post('/api/farm/muasap/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id), sid = Number(req.body && req.body.sid);
    await traLoi(res, cungLop(me, id).then(() => haiLuot(me, id, async () => {
      const fb = await doc(me), fs = await doc(id);
      const o = (fs.sap || []).find((x) => x.id === sid);
      if (!o) throw loi('Món này vừa có bạn khác mua mất rồi.');
      const gia = giaSap(o);
      // mac ca xong (3 luot) -> moi cau dung giam 10%; phan giam do "hoi cho" bu, nguoi ban van nhan du
      const mc = fb.mc && fb.mc.id === String(req.body.mc || '') && fb.mc.ban === id && fb.mc.sid === sid && fb.mc.tl.length === fb.mc.ds.length ? fb.mc : null;
      const giam = mc ? mc.tl.filter((x) => x).length * 0.1 : 0;
      const tra = Math.max(1, Math.round(gia * (1 - giam)));
      if (fb.xu < tra) throw loi('Em chưa đủ xu — cần ' + tra + ' xu.');
      fb.mc = null;
      fb.xu -= tra;
      const ngayMua = d.vnDayKey();
      if (!fb.muaBan || fb.muaBan.d !== ngayMua) fb.muaBan = { d: ngayMua, n: 0 };
      let thuong = null;
      if (fb.muaBan.n < MUA_THUONG_SO) {
        fb.muaBan.n++;
        const hoan = Math.max(1, Math.round(tra * MUA_HOAN));
        fb.xu += hoan;
        thuong = { hoan, n: fb.muaBan.n, so: MUA_THUONG_SO };
        if (fb.muaBan.n === MUA_THUONG_SO) {
          const v = fb.vq && fb.vq.d === ngayMua ? fb.vq : { d: ngayMua, n: 0, them: 0 };
          fb.vq = { d: ngayMua, n: v.n || 0, them: (v.them || 0) + 1 };
          thuong.luot = 1;
        }
      }
      fb.kho[o.k] = (fb.kho[o.k] || 0) + o.n;
      fb.xp += 1;
      fs.sap = fs.sap.filter((x) => x !== o);
      fs.xu += gia;
      fs.xp += 2;
      ghiNk(fs, { ai: me, l: 'mua', k: o.k, n: o.n, xu: gia });
      await ghi(id, fs);
      await ghi(me, fb);
      boNhoCongDong();
      return { ok: true, them: { sp: { [o.k]: o.n } }, tra, giam: Math.round(giam * 100), thuong, st: await trangThai(me, fb), sap: sapHien(fs.sap) };
    })));
  }));

  // Giup ban: tuoi cay (cay dang lon, chua tuoi) hoac cho vat nuoi dang doi an
  app.post('/api/farm/giup/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id), oid = Number(req.body && req.body.oid);
    await traLoi(res, cungLop(me, id).then(() => haiLuot(me, id, async () => {
      const fm = await doc(me), ff = await doc(id);
      const ngay = d.vnDayKey(), now = Date.now();
      if (!fm.giup || fm.giup.d !== ngay) fm.giup = { d: ngay, n: 0 };
      if (fm.giup.n >= GIUP_NGAY) throw loi('Hôm nay em đã giúp bạn ' + GIUP_NGAY + ' lần rồi — mai giúp tiếp nhé!');
      const o = ff.o.find((x) => x.id === oid);
      if (!o) throw loi('Không tìm thấy ô này.');
      const them = { xu: 0, xp: 0 };
      if (o.k === 'o') {
        if (!o.c || o.h <= now || o.t) throw loi('Ô này không cần tưới nữa.');
        o.t = 1;
        o.h = now + Math.round((o.h - now) * 0.6);
        ghiNk(ff, { ai: me, l: 'tuoi', c: o.c });
        them.xu = 2; them.xp = 1;
      } else if (CON[o.k]) {
        if (o.h) throw loi('Con vật này đã được cho ăn rồi.');
        o.h = now + Math.round(CON[o.k].phut * PHUT * heSoTai(ff, 'con'));
        ghiNk(ff, { ai: me, l: 'choan', k: o.k });
        them.xu = 4; them.xp = 2;
      } else throw loi('Món này không cần giúp.');
      fm.giup.n++;
      fm.xu += them.xu;
      fm.xp += them.xp;
      await ghi(id, ff);
      await ghi(me, fm);
      return { ok: true, them, o: { id: o.id, k: o.k, x: o.x, y: o.y, c: o.c, h: o.h, t: o.t }, st: await trangThai(me, fm), conGiup: GIUP_NGAY - fm.giup.n };
    })));
  }));

  // Kiem tra 1 tin nhan theo mau -> du lieu ghi vao nhat ky ban (chi so, khong luu chu tu do)
  function kiemTin(b) {
    const t = String(b.t || '');
    // kt = loai tin (khong dung 't': ghiNk dung 't' cho thoi diem)
    if (t === 'chao') { const c = Math.floor(Number(b.c)); if (LOI_CHAO[c]) return { kt: t, c }; }
    if (t === 'cau') {
      const m = Math.floor(Number(b.m)), x = String(b.x || ''), mau = TIN_MAU[m];
      if (mau) {
        const ok = mau.o === 'mon' ? !!(CON[x] || TT[x]) : mau.o === 'sp' ? !!SP[x] : (TIN_TU[mau.o] || []).some((w) => w.k === x);
        if (ok) return { kt: t, m, x };
      }
    }
    if (t === 'hoi') { const q = Math.floor(Number(b.q)); if (TIN_HOI[q]) return { kt: t, q, hid: Date.now().toString(36) + Math.random().toString(36).slice(2, 6) }; }
    return null;
  }
  // Gui 1 tin cho ban: moi ban toi da 3 tin / ngay; tin dau tien moi ngay cho moi ban +1 xu
  app.post('/api/farm/tin/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id);
    await traLoi(res, cungLop(me, id).then(() => {
      const tin = kiemTin(req.body || {});
      if (!tin) throw loi('Tin nhắn chưa hợp lệ.');
      return haiLuot(me, id, async () => {
        const fm = await doc(me), ff = await doc(id);
        const ngay = d.vnDayKey();
        if (!fm.tin || fm.tin.d !== ngay) fm.tin = { d: ngay, dem: {}, tong: 0 };
        const n = fm.tin.dem[id] || 0;
        if (n >= TIN_BAN_NGAY) throw loi('Hôm nay em đã nhắn bạn này ' + TIN_BAN_NGAY + ' tin rồi — mai nói chuyện tiếp nhé!');
        if (fm.tin.tong >= TIN_NGAY) throw loi('Hôm nay em đã gửi ' + TIN_NGAY + ' tin rồi.');
        fm.tin.dem[id] = n + 1;
        fm.tin.tong++;
        const them = { xu: n === 0 ? 1 : 0 };
        fm.xu += them.xu;
        ghiNk(ff, Object.assign({ ai: me, l: 'tin' }, tin));
        await ghi(id, ff);
        await ghi(me, fm);
        return { ok: true, them, conTin: TIN_BAN_NGAY - n - 1, st: await trangThai(me, fm) };
      });
    }));
  }));
  // Tra loi cau hoi ban gui (trong nhat ky cua em) -> cau tra loi hien trong nhat ky ban
  app.post('/api/farm/traloi/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id), hid = String((req.body && req.body.hid) || ''), a = Math.floor(Number(req.body && req.body.a));
    await traLoi(res, cungLop(me, id).then(() => haiLuot(me, id, async () => {
      const fm = await doc(me), ff = await doc(id);
      const e = (fm.nk || []).find((x) => x.l === 'tin' && x.kt === 'hoi' && x.hid === hid && x.ai === id);
      if (!e) throw loi('Không tìm thấy câu hỏi này.');
      if (e.ta != null) throw loi('Em đã trả lời câu này rồi.');
      if (!TIN_HOI[e.q] || !TIN_HOI[e.q].a[a]) throw loi('Câu trả lời chưa hợp lệ.');
      e.ta = a;
      fm.xu += 1;
      ghiNk(ff, { ai: me, l: 'dap', q: e.q, a });
      await ghi(id, ff);
      await ghi(me, fm);
      return { ok: true, them: { xu: 1 }, st: await trangThai(me, fm) };
    })));
  }));
  // Tang ban 1 nong san kem thiep "送给你！" (moi ban 1 mon / ngay, toi da 3 mon / ngay)
  app.post('/api/farm/tang/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id), k = String((req.body && req.body.k) || '');
    await traLoi(res, cungLop(me, id).then(() => haiLuot(me, id, async () => {
      const fm = await doc(me), ff = await doc(id);
      const ngay = d.vnDayKey();
      if (!SP[k] || !(fm.kho[k] > 0)) throw loi('Kho không còn món này.');
      if (!fm.qua || fm.qua.d !== ngay) fm.qua = { d: ngay, ids: [] };
      if (fm.qua.ids.indexOf(id) >= 0) throw loi('Hôm nay em đã tặng quà bạn này rồi.');
      if (fm.qua.ids.length >= QUA_NGAY) throw loi('Mỗi ngày tặng tối đa ' + QUA_NGAY + ' món quà.');
      fm.qua.ids.push(id);
      fm.kho[k]--;
      if (!fm.kho[k]) delete fm.kho[k];
      fm.xp += 2;
      ff.kho[k] = (ff.kho[k] || 0) + 1;
      ghiNk(ff, { ai: me, l: 'qua', k });
      await ghi(id, ff);
      await ghi(me, fm);
      return { ok: true, them: { xp: 2 }, st: await trangThai(me, fm) };
    })));
  }));

  // Gui loi chao co san: moi ban 1 lan / ngay, nguoi gui +1 xu
  app.post('/api/farm/chao/:id', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, id = String(req.params.id), c = Math.floor(Number(req.body && req.body.c));
    await traLoi(res, cungLop(me, id).then(() => {
      if (!LOI_CHAO[c]) throw loi('Không có lời chào này.');
      return haiLuot(me, id, async () => {
        const fm = await doc(me), ff = await doc(id);
        const ngay = d.vnDayKey();
        if (!fm.chao || fm.chao.d !== ngay) fm.chao = { d: ngay, ids: [] };
        if (fm.chao.ids.indexOf(id) >= 0) throw loi('Hôm nay em đã chào bạn này rồi.');
        fm.chao.ids.push(id);
        fm.xu += 1;
        ghiNk(ff, { ai: me, l: 'chao', c });
        await ghi(id, ff);
        await ghi(me, fm);
        return { ok: true, them: { xu: 1 }, st: await trangThai(me, fm) };
      });
    }));
  }));

  // CHI DE THU tren may local (bien moi truong NT_THU=1, khong bao gio dat tren may chu that):
  // dat kinh nghiem / xu cho tai khoan dang dang nhap de thu cac tinh nang mo theo cap.
  if (process.env.NT_THU === '1') {
    app.post('/api/farm/_thu', d.requireAuth, d.asyncRoute(async (req, res) => {
      const b = req.body || {};
      await traLoi(res, lanLuot(req.user.id, async () => {
        const f = await doc(req.user.id);
        if (Number.isFinite(Number(b.xp))) f.xp = Math.max(0, Math.floor(Number(b.xp)));
        if (Number.isFinite(Number(b.xu))) f.xu = Math.max(0, Math.floor(Number(b.xu)));
        // thu nong trai: doi kich thuoc dat (chi tang hoac giam khi moi do vat van nam trong dat moi)
        if (Number.isInteger(b.dat) && DAT[b.dat] && f.o.every((o) => o.x + rong(o) <= DAT[b.dat].w && o.y + rong(o) <= DAT[b.dat].h)) f.dat = b.dat;
        if (b.chaiLai) delete f.chai;
        // thu kinh te: dat kho / tui / hat, lam chin moi o ruong + vat nuoi dang lam
        ['kho', 'tui', 'hat'].forEach((k) => { if (b[k] && typeof b[k] === 'object') f[k] = Object.assign(f[k] || {}, b[k]); });
        if (b.trTuan && f.tr) f.tr.moTuan = '2000-01-03'; // cot truyen: coi nhu chuong truoc mo tu tuan cu
        if (b.chin) f.o.forEach((o) => { if ((o.k === 'o' && o.c) || (CON[o.k] && o.h)) o.h = Date.now() - 1000; });
        await ghi(req.user.id, f);
        return { ok: true, st: await trangThai(req.user.id, f) };
      }));
    }));
  }

  // Hoat dong chung: cong trinh lop, thach dau, ban hoc cap doi, le hoi cuoi tuan
  const chung = require('./nong-trai-chung')(app, d, {
    doc, ghi, lanLuot, haiLuot, loi, traLoi, trangThai, deChuHan, moQua, taiCongDong, ghiNk, lvTuXp, saoHoc, cungLop, SP, CON, TIN_TU,
  });
  require('./nong-trai-cho')(app, d, {
    doc, ghi, lanLuot, loi, traLoi, trangThai, ghiNk, docNhieu, thiTruong, giaSap, boNhoCongDong, SP, CA, CAY, HANG, LUONG, LUONG_PY,
    hanMuc, ghiBanNgay, lvTuXp, MO_TN, BAN_MOI_SAO,
  }, chung);
  // Thi dua giua cac nong trai + vuon tu kho + co thuong + cay cham chi
  thiDua = require('./nong-trai-thidua')(app, d, {
    doc, ghi, lanLuot, haiLuot, loi, traLoi, trangThai, lvTuXp, saoHoc, taiCongDong, coTheChoi, ghiNk, moQua, ghiOn, tuHocCua, taoCau,
    MO_TN, GIAI, giaiCua, KHIEN_SAO, CAY, CON, CON_TOI_DA, SP,
  }, chung);
  // Kinh te nong trai 2026-11-13: ban do phieu luu (cau hoi theo vung dat), cho nong san + tiem rieng + dau gia,
  // nha may che bien + nhan cong + xuat khau sang cac vung dat
  const hKt = {
    doc, ghi, lanLuot, haiLuot, loi, traLoi, trangThai, ghiNk, docNhieu, thiTruong, hanMuc, ghiBanNgay, lvTuXp, saoHoc, taiCongDong, boNhoCongDong,
    tuHocCua, boKtbc, chonKt, taoCau, cauDung, chamCau, onCau, ketQuaCau, ghiOn, thuRuong, nhatCon, donHomNay, moQua, vaoHook, ttThem, banCungLop,
    MO_TN, SP, CAY, CON, TT, CA, MON, HANG, LUONG, LUONG_PY, CON_TOI_DA, CAY_HIEM, BAN_MOI_SAO, Ktbc, CauHoi, CATALOG, NHOM_TT: null, datDuoc, rong, suKien, suKienHook, TIN_BAN_NGAY, TIN_NGAY,
  };
  const phieuLuu = require('./nong-trai-phieuluu')(app, d, hKt, chung);
  hKt.phieuLuu = phieuLuu;
  require('./nong-trai-kt')(app, d, hKt, chung);
  xuongMod = require('./nong-trai-xuong').gan(app, d, hKt, chung);
  // Cot truyen + nhan vat (noi dung: nong-trai-truyen.js)
  require('./nong-trai-cottruyen')(app, d, hKt, chung);
  // Tin nhan tu do giua ban cung lop (co bo loc + thay co kiem duyet)
  tinMod = require('./nong-trai-tin')(app, d, hKt, chung);
  async function initTatCa() { await initTable(); await chung.initTable(); }

  // _thuCau: chi de chay tools/thu-cau-nong-trai.js (kiem tra cau hoi chi thuoc bai em da hoc / duoc giao)
  return { initTable: initTatCa, _thuCau: { deChuHanKt, deCaKt, ghiOn, deVung: phieuLuu.deVung, VUNG: phieuLuu.VUNG, cauTruyen: phieuLuu.cauTruyen } };
};

// Cho cong cu thu (tools/thu-kinh-te-nong-trai.js): ham thuan cua vong quay
module.exports._thuVq = { quayO, VQ_O, VQ_X2_O, SP, CAY, CON, TT, thuRuong, hangChuotAn };
