// Le hoi Tet Nguyen dan 春节 cho nong trai (/nong-trai) — 2026-11-24.
//  - Mua le: tu ~3 tuan truoc Tet (som nhat 7/1, khong de len mua Noel 17/11–6/1) den het Tet Nguyen tieu 元宵节 (ram thang Gieng).
//    Ngay Tet lay tu BANG NGAY co dinh (am lich, khong tinh bang cong thuc) — them nam moi vao TET_BANG khi can.
//  - Do trang tri Tet (TT 'tet-*', co tet: 1 + doc: 1): chi ban trong bang Tet cua module nay (cua hang chung khong ban —
//    doc: 1 cung giu chung khong roi ra vong quay / hop qua / dau gia). Mua xong vao tui -> client mo che do dat.
//    Toi da TT_MAX moi loai (dang dat + trong tui). Ngoai mua do da mua van giu nhu do trang tri.
//  - Bep Tet 年夜饭: nau 年糕 / 饺子 / 春卷 / 粽子 tu nong san trong kho (chon dung ten tieng Trung cua mon moi nau duoc);
//    mon nau xong de trong f.tet.mon (khong phai SP -> khong ban, khong vao don hang). Du 4 mon -> bay mam co Tet:
//    lan dau = ban 年夜饭 (do trang tri doc quyen); sau do moi ngay 1 lan it xu (nho hon gia nong san da dung -> khong in xu).
//  - Li xi 红包: moi ngay gui LX_NGAY bao cho ban CUNG LOP (moi ban 1 bao / ngay, ban nhan toi da LX_NHAN bao / ngay);
//    muon gui phai chon dung loi chuc Tet 新年祝福 hop tinh huong. Xu CHUYEN tu nguoi gui sang nguoi nhan (khong in xu).
//  - 除夕 dem nguoc + phao hoa luc 00:00 mung 1 (client, theo gio may chu) + qua 压岁钱 dau nam (1 lan / mua).
//  - 元宵 猜灯谜: 3 ngay cuoi mua (13–15 thang Gieng), 5 cau do (uu tien dap an la tu trong bai em da hoc), 1 luot / ngay.
//  - On bai don Tet: moi ngay 3 cau tu bai em DA HOC (phieuLuu.layCau) -> dung >= 2 nhan qua Tet nho.
//  - The tu vung Tet (15 tu) — noi dung co dinh, co pinyin + nghia + cau vi du.
// Du lieu cua em: f.tet = { nam, mon, nau, yen, lx, lxn, hop, q, on, oq, me, mq, dm, ly, mam }
// May local: NT_TET=bat (bat mua + mo do den / qua mung 1 de thu) | NT_TET=tat;
//   NT_TET_GIO=2027-02-05T23:59:30+07:00 (dong ho cua module chay tu luc do), hoac (NT_THU=1) POST /api/farm/tet/_gio {gio, xoa}.
const VN = 7 * 3600000, NGAY = 86400000;

// Ngay Tet Nguyen dan (mung 1 thang Gieng) va Nguyen tieu (ram thang Gieng) — lich Viet Nam trung lich Trung Quoc cac nam nay.
const TET_BANG = [
  { nam: 2027, tet: '2027-02-06', yx: '2027-02-20', gc: '丁未', con: { zh: '羊', py: 'yáng', vn: 'Dê (Mùi)' } },
  { nam: 2028, tet: '2028-01-26', yx: '2028-02-09', gc: '戊申', con: { zh: '猴', py: 'hóu', vn: 'Khỉ (Thân)' } },
  { nam: 2029, tet: '2029-02-13', yx: '2029-02-27', gc: '己酉', con: { zh: '鸡', py: 'jī', vn: 'Gà (Dậu)' } },
  { nam: 2030, tet: '2030-02-03', yx: '2030-02-17', gc: '庚戌', con: { zh: '狗', py: 'gǒu', vn: 'Chó (Tuất)' } },
  { nam: 2031, tet: '2031-01-23', yx: '2031-02-06', gc: '辛亥', con: { zh: '猪', py: 'zhū', vn: 'Lợn (Hợi)' } },
  { nam: 2032, tet: '2032-02-11', yx: '2032-02-25', gc: '壬子', con: { zh: '鼠', py: 'shǔ', vn: 'Chuột (Tý)' } },
];
const TRUOC = 21;          // mo mua 3 tuan truoc Tet
const SOM_NHAT = '01-07';  // khong som hon 7/1 (mua Noel het 6/1)
const PHAO_HOA = 3600000;  // phao hoa trong 1 gio dau nam moi

const ms = (ngay) => Date.parse(ngay + 'T00:00:00Z');
const cong = (ngay, n) => new Date(ms(ngay) + n * NGAY).toISOString().slice(0, 10);
const hieu = (a, b) => Math.round((ms(a) - ms(b)) / NGAY);
TET_BANG.forEach((x) => {
  x.tru = cong(x.tet, -1);
  const som = x.nam + '-' + SOM_NHAT, bd = cong(x.tet, -TRUOC);
  x.bd = bd < som ? som : bd;
  x.moc = ms(x.tet) - VN; // 00:00 mung 1 gio Viet Nam
  x.me = cong(x.yx, -2);  // do den tu 13 thang Gieng
});

let lech = 0;
function datGio(iso) {
  const t = iso ? Date.parse(iso) : NaN;
  lech = Number.isFinite(t) ? t - Date.now() : 0;
  return lech;
}
if (process.env.NT_TET_GIO) datGio(process.env.NT_TET_GIO);
const gio = () => Date.now() + lech;
const ngayVn = (t) => new Date((t == null ? gio() : t) + VN).toISOString().slice(0, 10);

// Mua Tet chua ngay `ngay` (YYYY-MM-DD gio VN) hoac null
function muaCua(ngay) {
  if (process.env.NT_TET === 'tat') return null;
  const x = TET_BANG.find((m) => ngay >= m.bd && ngay <= m.yx);
  if (x) return { m: x, thu: process.env.NT_TET === 'bat' };
  if (process.env.NT_TET === 'bat') return { m: TET_BANG.find((m) => m.yx >= ngay) || TET_BANG[TET_BANG.length - 1], thu: true };
  return null;
}
const trongMua = (ngay) => !!muaCua(ngay || ngayVn());
// giai doan: cho (don Tet) | tru (除夕) | tet (mung 1–3) | xuan (sau mung 3) | yx (13–15 thang Gieng)
function giaiDoan(m, ngay) {
  if (ngay < m.tru) return 'cho';
  if (ngay === m.tru) return 'tru';
  if (ngay >= m.me) return 'yx';
  if (ngay <= cong(m.tet, 2)) return 'tet';
  return 'xuan';
}

/* ---------------- noi dung co dinh ---------------- */
const tu = (zh, py, vn) => ({ zh, py, vn });
// Do trang tri Tet ban trong mua (xu) + 2 mon doc quyen. Hinh /images/farm/<k>.svg
const TT_TET = {
  'tet-chunlian': { zh: '春联', py: 'chūnlián', vn: 'Câu đối Tết', lv: 1, xu: 60, dep: 9, doc: 1, tet: 1,
    mo: 'Dán hai bên cửa: 一帆风顺 yì fān fēng shùn (thuận buồm xuôi gió), 万事如意 wànshì rúyì (vạn sự như ý).' },
  'tet-fu': { zh: '倒福', py: 'dào fú', vn: 'Chữ Phúc dán ngược', lv: 1, xu: 30, dep: 5, doc: 1, tet: 1,
    mo: '福倒了 fú dào le (chữ Phúc bị ngược) đọc giống 福到了 fú dào le (Phúc đến rồi!) — nên người ta cố ý dán ngược.' },
  'tet-denlong': { zh: '红灯笼', py: 'hóng dēnglong', vn: 'Đèn lồng đỏ', lv: 1, xu: 45, dep: 7, doc: 1, tet: 1,
    mo: 'Đèn lồng đỏ treo cửa — màu đỏ là màu may mắn, xua điều xui.' },
  'tet-bianpao': { zh: '鞭炮', py: 'biānpào', vn: 'Dây pháo đỏ', lv: 1, xu: 50, dep: 7, doc: 1, tet: 1,
    mo: '放鞭炮 fàng biānpào — đốt pháo đón năm mới (ở đây chỉ là pháo trang trí, an toàn!).' },
  'tet-nianhua': { zh: '年画', py: 'niánhuà', vn: 'Tranh Tết', lv: 1, xu: 80, dep: 12, doc: 1, tet: 1,
    mo: 'Tranh Tết dán trong nhà — giống tranh Đông Hồ của Việt Nam: em bé ôm cá chép 年年有余.' },
  'tet-taohua': { zh: '桃花', py: 'táohuā', vn: 'Cành đào (Tết miền Bắc)', lv: 1, xu: 120, dep: 18, doc: 1, tet: 1,
    mo: 'Hoa đào hồng — Tết miền Bắc Việt Nam và Trung Quốc đều chơi đào.' },
  'tet-mai': { zh: '黄梅花', py: 'huángméihuā', vn: 'Cây mai vàng (Tết miền Nam)', lv: 1, xu: 120, dep: 18, doc: 1, tet: 1,
    mo: 'Mai vàng Tết miền Nam (tiếng Trung gọi 黄梅 huángméi; còn 梅花 méihuā là hoa mơ/hoa mai trắng của Trung Quốc).' },
  'tet-jinju': { zh: '金桔', py: 'jīnjú', vn: 'Cây quất', lv: 1, xu: 120, dep: 18, doc: 1, tet: 1,
    mo: '桔 jú đọc gần 吉 jí (may mắn) — quả vàng tròn như tiền vàng.' },
  // doc quyen (khong ban): giai do den 元宵 / mam co Tet
  'tet-dengmi': { zh: '元宵灯', py: 'yuánxiāo dēng', vn: 'Đèn Nguyên tiêu', lv: 1, dep: 20, doc: 1, tet: 1, qua: 1,
    mo: 'Quà đoán đúng câu đố đèn 猜灯谜 đêm rằm tháng Giêng.' },
  'tet-mam': { zh: '年夜饭', py: 'niányèfàn', vn: 'Mâm cơm tất niên', lv: 1, dep: 20, doc: 1, tet: 1, qua: 1,
    mo: 'Quà bày đủ 4 món Tết ở Bếp Tết — cả nhà quây quần đêm 除夕.' },
};
const BAN = Object.keys(TT_TET).filter((k) => !TT_TET[k].qua);
const TT_MAX = 2;

// Bep Tet: nguyen lieu la nong san / hang cho trong kho
const MON = {
  'tet-niangao': { zh: '年糕', py: 'niángāo', vn: 'Bánh tổ (bánh nếp ngọt)', can: { lua: 4, duong: 1 },
    y: '年糕 niángāo đọc giống 年高 nián gāo — năm sau cao hơn, giỏi hơn năm trước.' },
  'tet-jiaozi': { zh: '饺子', py: 'jiǎozi', vn: 'Sủi cảo (bánh chẻo)', can: { caibap: 2, trung: 1, lua: 1 },
    y: 'Miền Bắc Trung Quốc ăn sủi cảo đêm giao thừa — hình giống thỏi vàng 元宝, mong năm mới giàu có.' },
  'tet-chunjuan': { zh: '春卷', py: 'chūnjuǎn', vn: 'Nem rán (chả giò)', can: { carot: 2, caibap: 1, trung: 1 },
    y: '春卷 = cuốn mùa xuân — món chiên vàng giòn, màu như vàng thỏi.' },
  'tet-zongzi': { zh: '粽子', py: 'zòngzi', vn: 'Bánh chưng', can: { lua: 4, ngo: 1, trung: 1 },
    y: 'Bánh chưng vuông của Tết Việt — tiếng Trung gọi chung các loại bánh gói lá là 粽子.' },
};
const NAU_NGAY = 8, NAU_XP = 3, NAU_XP_MOI = 5;
const YEN = { xu: 30, xp: 20, xuSau: 20, xpSau: 8 }; // lan dau + ban 年夜饭; sau do 1 lan / ngay

// Li xi
const LX_XU = [6, 8, 18];       // 六六大顺 / 发 / 要发
const LX_NGAY = 3, LX_NHAN = 5, LX_XP = 3, LX_HOI_NGAY = 30, LX_GIU = 20, LX_HAN = 10 * 60000;
const CHUC = {
  xinnian: { zh: '新年快乐！', py: 'Xīnnián kuàilè!', vn: 'Chúc mừng năm mới!' },
  wanshi: { zh: '万事如意！', py: 'Wànshì rúyì!', vn: 'Vạn sự như ý!' },
  xinxiang: { zh: '心想事成！', py: 'Xīn xiǎng shì chéng!', vn: 'Muốn gì được nấy (ước gì được nấy)!' },
  daji: { zh: '大吉大利！', py: 'Dàjí dàlì!', vn: 'Đại cát đại lợi — may mắn thật nhiều!' },
  shenti: { zh: '身体健康！', py: 'Shēntǐ jiànkāng!', vn: 'Chúc sức khỏe dồi dào!' },
  xuexi: { zh: '学习进步！', py: 'Xuéxí jìnbù!', vn: 'Chúc học hành tiến bộ!' },
  gongxi: { zh: '恭喜发财！', py: 'Gōngxǐ fācái!', vn: 'Chúc phát tài, làm ăn phát đạt!' },
  niannian: { zh: '年年有余！', py: 'Niánnián yǒu yú!', vn: 'Năm nào cũng dư dả! (余 yú đọc giống 鱼 yú — con cá)' },
};
const RIENG = ['shenti', 'xuexi', 'gongxi', 'niannian']; // chuc theo hoan canh (dap an nhieu lay o day -> khong mo ho)
// Tinh huong (khong co ten ban — client ghep ten ban vao)
const TINH_HUONG = [
  { vn: 'Bạn ấy vừa ốm dậy, em muốn chúc bạn khỏe mạnh.', dap: 'shenti' },
  { vn: 'Ông bà của bạn ấy đã lớn tuổi — em chúc cả nhà bạn mạnh khỏe.', dap: 'shenti' },
  { vn: 'Bạn ấy sắp thi, muốn năm mới học giỏi hơn.', dap: 'xuexi' },
  { vn: 'Bạn ấy đang cố học tiếng Trung thật tốt.', dap: 'xuexi' },
  { vn: 'Bố mẹ bạn ấy mở cửa hàng, ngày mai bán hàng đầu năm.', dap: 'gongxi' },
  { vn: 'Nông trại của bạn ấy muốn bán được thật nhiều nông sản.', dap: 'gongxi' },
  { vn: 'Cả nhà bạn ấy đang ăn món cá trong bữa cơm tất niên.', dap: 'niannian' },
  { vn: 'Sáng mùng 1 em gặp bạn ấy — câu chúc quen thuộc nhất.', dap: 'xinnian' },
  { vn: 'Bạn ấy mong năm mới mọi việc đều suôn sẻ.', dap: 'wanshi' },
  { vn: 'Bạn ấy có một điều ước lớn cho năm mới.', dap: 'xinxiang' },
];

// 15 tu vung Tet (+ hinh neu co + cau vi du dung ngu phap co ban)
const TU = [
  { zh: '春节', py: 'Chūnjié', vn: 'Tết Nguyên đán', h: 'tet-fu', vd: tu('春节快到了！', 'Chūnjié kuài dào le!', 'Tết sắp đến rồi!') },
  { zh: '除夕', py: 'chúxī', vn: 'Đêm giao thừa (ngày cuối năm âm lịch)', h: 'tet-mam', vd: tu('除夕我们一起吃年夜饭。', 'Chúxī wǒmen yìqǐ chī niányèfàn.', 'Đêm giao thừa cả nhà cùng ăn cơm tất niên.') },
  { zh: '红包', py: 'hóngbāo', vn: 'Bao lì xì', h: 'tet-hongbao', vd: tu('妈妈给我一个红包。', 'Māma gěi wǒ yí ge hóngbāo.', 'Mẹ cho em một bao lì xì.') },
  { zh: '春联', py: 'chūnlián', vn: 'Câu đối Tết', h: 'tet-chunlian', vd: tu('我们在门上贴春联。', 'Wǒmen zài mén shang tiē chūnlián.', 'Chúng mình dán câu đối lên cửa.') },
  { zh: '福', py: 'fú', vn: 'Phúc, may mắn', h: 'tet-fu', vd: tu('福倒了——福到了！', 'Fú dào le — fú dào le!', 'Chữ Phúc ngược rồi — Phúc đến rồi!') },
  { zh: '拜年', py: 'bàinián', vn: 'Chúc Tết, đi chúc Tết', h: 'tet-hongbao', vd: tu('初一我们去爷爷奶奶家拜年。', 'Chū yī wǒmen qù yéye nǎinai jiā bàinián.', 'Mùng 1 chúng mình đến nhà ông bà chúc Tết.') },
  { zh: '年夜饭', py: 'niányèfàn', vn: 'Cơm tất niên (bữa tối đêm 30)', h: 'tet-mam', vd: tu('年夜饭真好吃！', 'Niányèfàn zhēn hǎochī!', 'Cơm tất niên ngon thật!') },
  { zh: '饺子', py: 'jiǎozi', vn: 'Sủi cảo (bánh chẻo)', h: 'tet-jiaozi', vd: tu('北方人过年吃饺子。', 'Běifāng rén guònián chī jiǎozi.', 'Người miền Bắc (Trung Quốc) ăn Tết bằng sủi cảo.') },
  { zh: '鞭炮', py: 'biānpào', vn: 'Pháo (dây pháo)', h: 'tet-bianpao', vd: tu('小心！他们在放鞭炮。', 'Xiǎoxīn! Tāmen zài fàng biānpào.', 'Cẩn thận! Họ đang đốt pháo.') },
  { zh: '守岁', py: 'shǒusuì', vn: 'Thức đón giao thừa', h: 'tet-denlong', vd: tu('除夕晚上我们守岁。', 'Chúxī wǎnshang wǒmen shǒusuì.', 'Tối giao thừa chúng mình thức đón năm mới.') },
  { zh: '压岁钱', py: 'yāsuìqián', vn: 'Tiền mừng tuổi', h: 'tet-hongbao', vd: tu('我用压岁钱买书。', 'Wǒ yòng yāsuìqián mǎi shū.', 'Em dùng tiền mừng tuổi để mua sách.') },
  { zh: '元宵', py: 'yuánxiāo', vn: 'Rằm tháng Giêng; bánh trôi', h: 'tet-dengmi', vd: tu('元宵节我们吃元宵、看灯。', 'Yuánxiāo jié wǒmen chī yuánxiāo, kàn dēng.', 'Rằm tháng Giêng chúng mình ăn bánh trôi, ngắm đèn.') },
  { zh: '灯笼', py: 'dēnglong', vn: 'Đèn lồng', h: 'tet-denlong', vd: tu('街上有很多红灯笼。', 'Jiē shang yǒu hěn duō hóng dēnglong.', 'Trên phố có rất nhiều đèn lồng đỏ.') },
  { zh: '恭喜发财', py: 'gōngxǐ fācái', vn: 'Chúc phát tài', h: 'tet-jinju', vd: tu('恭喜发财，红包拿来！', 'Gōngxǐ fācái, hóngbāo ná lái!', 'Chúc phát tài, lì xì đâu nào! (câu đùa của trẻ con)') },
  { zh: '新年快乐', py: 'xīnnián kuàilè', vn: 'Chúc mừng năm mới', h: 'tet-taohua', vd: tu('祝你新年快乐！', 'Zhù nǐ xīnnián kuàilè!', 'Chúc bạn năm mới vui vẻ!') },
];

// Cau do den 猜灯谜 (co dien, rat de). tu = tu trong bai hoc lien quan den dap an (uu tien neu em da hoc)
const DO = [
  { cau: '日月一起来。', py: 'Rì yuè yìqǐ lái.', loai: '猜一字 · đoán 1 chữ', dap: '明', khac: ['朋', '早', '星'], tu: ['明天', '明白', '聪明'],
    giai: '日 (mặt trời) + 月 (mặt trăng) = 明 míng — sáng (明天 ngày mai).' },
  { cau: '两个月亮一起走。', py: 'Liǎng ge yuèliang yìqǐ zǒu.', loai: '猜一字 · đoán 1 chữ', dap: '朋', khac: ['明', '用', '肥'], tu: ['朋友'],
    giai: 'Hai chữ 月 đứng cạnh nhau = 朋 péng (朋友 bạn bè).' },
  { cau: '一人一张口，口下长只手。', py: 'Yì rén yì zhāng kǒu, kǒu xià zhǎng zhī shǒu.', loai: '猜一字 · đoán 1 chữ', dap: '拿', khac: ['合', '哈', '拉'], tu: ['拿'],
    giai: '人 + 一 + 口 = 合, dưới thêm 手 (tay) = 拿 ná (cầm, lấy).' },
  { cau: '一家十一口。', py: 'Yì jiā shíyī kǒu.', loai: '猜一字 · đoán 1 chữ', dap: '吉', khac: ['古', '叶', '田'], tu: ['吉'],
    giai: '十 + 一 + 口 = 吉 jí (may mắn, như 大吉大利) — chữ rất hợp ngày Tết!' },
  { cau: '人有它大，天没它大。', py: 'Rén yǒu tā dà, tiān méi tā dà.', loai: '猜一字 · đoán 1 chữ', dap: '一', khac: ['口', '人', '十'], tu: ['一'],
    giai: '人 thêm 一 thành 大; 天 bớt 一 cũng thành 大 → chữ 一 yī.' },
  { cau: '二人坐在土上。', py: 'Èr rén zuò zài tǔ shang.', loai: '猜一字 · đoán 1 chữ', dap: '坐', khac: ['座', '从', '佳'], tu: ['坐'],
    giai: 'Hai chữ 人 ngồi trên chữ 土 (đất) = 坐 zuò (ngồi).' },
  { cau: '一人前面走，一人后面跟。', py: 'Yì rén qiánmiàn zǒu, yì rén hòumiàn gēn.', loai: '猜一字 · đoán 1 chữ', dap: '从', khac: ['众', '天', '夫'], tu: ['从'],
    giai: 'Hai chữ 人 đi nối đuôi nhau = 从 cóng (từ, theo).' },
  { cau: '千条线，万条线，掉到水里看不见。', py: 'Qiān tiáo xiàn, wàn tiáo xiàn, diào dào shuǐ li kàn bu jiàn.', loai: '猜一自然现象 · đoán hiện tượng thiên nhiên', dap: '雨', khac: ['雪', '风', '云'], tu: ['下雨', '雨'],
    giai: 'Nghìn sợi vạn sợi, rơi xuống nước thì không thấy nữa → mưa 雨 yǔ (下雨 trời mưa).' },
  { cau: '有面没有口，有脚没有手。四只脚，自己不会走。', py: 'Yǒu miàn méiyǒu kǒu, yǒu jiǎo méiyǒu shǒu. Sì zhī jiǎo, zìjǐ bú huì zǒu.', loai: '猜一家具 · đoán đồ trong nhà', dap: '桌子', khac: ['电视', '门', '杯子'], tu: ['桌子'],
    giai: 'Có mặt (桌面 mặt bàn) mà không có miệng, bốn chân mà không tự đi → cái bàn 桌子 zhuōzi.' },
  { cau: '什么东西越洗越脏？', py: 'Shénme dōngxi yuè xǐ yuè zāng?', loai: '猜一物 · đoán 1 vật', dap: '水', khac: ['衣服', '手', '杯子'], tu: ['水', '喝水'],
    giai: 'Càng giặt, càng rửa thì nước 水 shuǐ càng bẩn!' },
  { cau: '麻屋子，红帐子，里面住着白胖子。', py: 'Má wūzi, hóng zhàngzi, lǐmiàn zhùzhe bái pàngzi.', loai: '猜一食物 · đoán 1 món ăn', dap: '花生', khac: ['鸡蛋', '苹果', '米饭'], tu: ['花生'],
    giai: 'Vỏ sần (麻屋子), áo lụa đỏ (红帐子), bên trong là "chú béo trắng" (白胖子) → lạc 花生 huāshēng.' },
  { cau: '一口咬掉牛尾巴。', py: 'Yì kǒu yǎodiào niú wěiba.', loai: '猜一字 · đoán 1 chữ', dap: '告', khac: ['吃', '生', '舌'], tu: ['告诉'],
    giai: 'Chữ 牛 mất "đuôi" (nét sổ thò xuống), thêm 口 ở dưới = 告 gào (告诉 nói cho biết).' },
];
const DO_SO = 5, DO_XU = 4, DO_CAN = 4;
// On bai don Tet + qua dau nam
const ON = { so: 3, can: 2, lan: 3, xu: 18, xp: 6 };
const LY = { xu: 66, xp: 20 };   // 压岁钱 dau nam: 1 lan / mua, tu mung 1
const HAN_CAU = 15 * 60000;

const tron = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const CAT = {
  TT_MAX, BAN, MON, NAU_NGAY, YEN, LX_XU, LX_NGAY, LX_NHAN, CHUC, TU, DO_SO, DO_XU, DO_CAN, ON, LY,
  TEN: { zh: '春节', py: 'Chūnjié', vn: 'Tết Nguyên đán' },
};

function gan(app, d, h) {
  const loi = h.loi;
  Object.keys(TT_TET).forEach((k) => { h.TT[k] = TT_TET[k]; });
  if (h.CATALOG) h.CATALOG.TET = CAT;

  const ngay = () => ngayVn();
  function nay() { const n = ngay(), x = muaCua(n); return x ? Object.assign({ n, gd: giaiDoan(x.m, n) }, x) : null; }
  const coTt = (f, k) => (f.o || []).filter((o) => o.k === k).length + ((f.tui && f.tui[k]) || 0);
  function tetCua(f, nam) {
    if (!f.tet || typeof f.tet !== 'object' || f.tet.nam !== nam) f.tet = { nam, mon: {}, hop: [] };
    f.tet.mon = f.tet.mon || {};
    f.tet.hop = Array.isArray(f.tet.hop) ? f.tet.hop : [];
    return f.tet;
  }
  const demNgay = (o, n) => (o && o.d === n ? o.n || 0 : 0);
  const coMe = (x) => x.thu || x.gd === 'yx';
  const coLy = (x) => x.thu || x.n >= x.m.tet;
  function tom(f) {
    const x = nay();
    if (!x) return { mua: false };
    const m = x.m, t = f && f.tet && f.tet.nam === m.nam ? f.tet : {};
    const hop = Array.isArray(t.hop) ? t.hop : [];
    return {
      mua: true, thu: x.thu, nam: m.nam, gc: m.gc, con: m.con, tet: m.tet, tru: m.tru, yx: m.yx, bd: m.bd, moc: m.moc, me0: m.me,
      ngay: x.n, gio: gio(), gd: x.gd, conNgay: Math.max(0, hieu(m.tru, x.n)), phao: PHAO_HOA,
      me: coMe(x), meXong: !!(t.me && t.me.d === x.n), ly: { mo: coLy(x), da: !!t.ly },
      on: !!(t.on && t.on.d === x.n && t.on.xong), lxMoi: hop.filter((e) => !e.xem).length,
    };
  }
  h.ttThem.push((userId, f) => ({ tet: tom(f) }));
  const mua = () => { const x = nay(); if (!x) throw loi('Lễ hội Tết đã qua — hẹn em Tết năm sau nhé!'); return x; };

  async function banCua(me) {
    const lop = await h.banCungLop(me);
    if (!lop) return { lop: null, ds: [] };
    const ids = lop.ids.filter((u) => u !== me);
    const [farms, ten] = await Promise.all([h.docNhieu(ids), d.loadUserNames()]);
    // ten nguoi dung co bo nho 60 giay: ban moi dang ky chua co ten van lì xì duoc
    const ds = ids.filter((u) => farms[u]).map((u) => ({ id: u, ten: ten[u] || 'Bạn mới', av: farms[u].av || null }))
      .sort((a, b) => a.ten.localeCompare(b.ten, 'vi'));
    return { lop, ds };
  }
  async function chiTiet(req, f) {
    const x = nay();
    if (!x) return { tet: { mua: false } };
    const t = tetCua(f, x.m.nam), n = x.n;
    const ban = await banCua(req.user.id);
    const ten = await d.loadUserNames();
    const gui = t.lx && t.lx.d === n ? t.lx : { n: 0, ai: [] };
    return {
      tet: tom(f),
      mua: BAN.map((k) => ({ k, co: coTt(f, k) })),
      quaTt: Object.keys(TT_TET).filter((k) => TT_TET[k].qua).map((k) => ({ k, co: coTt(f, k) })),
      bep: { mon: t.mon, nau: demNgay(t.nau, n), yen: { da: !!t.mam, homNay: !!(t.yen && t.yen.d === n) } },
      lx: {
        lop: ban.lop ? ban.lop.ten : '', ban: ban.ds.map((b) => Object.assign(b, { da: (gui.ai || []).indexOf(b.id) >= 0 })),
        gui: gui.n || 0, nhan: demNgay(t.lxn, n),
        hop: t.hop.slice(0, LX_GIU).map((e) => ({ id: e.id, ten: ten[e.ai] || 'Một bạn', xu: e.xu, c: e.c, t: e.t, xem: !!e.xem })),
        dang: t.q && Date.now() - t.q.bd < LX_HAN ? { den: t.q.den, ten: ten[t.q.den] || '', xu: t.q.xu, tinh: TINH_HUONG[t.q.c].vn, lua: t.q.lua } : null,
      },
      on: { xong: !!(t.on && t.on.d === n && t.on.xong), lan: t.on && t.on.d === n ? t.on.lan || 0 : 0,
        dang: t.oq && Date.now() - t.oq.bd < HAN_CAU ? { da: t.oq.tl.length, so: t.oq.ds.length } : null },
      me: { mo: coMe(x), xong: !!(t.me && t.me.d === n), dung: t.me && t.me.d === n ? t.me.dung : 0, dm: !!t.dm,
        dang: t.mq && t.mq.d === n ? { da: t.mq.tl.length, so: t.mq.ds.length } : null },
    };
  }

  app.get('/api/farm/tet', d.requireAuth, d.asyncRoute(async (req, res) => {
    const f = await h.doc(req.user.id);
    res.json(await chiTiet(req, f));
  }));

  // ---- mua do trang tri Tet (vao tui; client mo che do dat) ----
  app.post('/api/farm/tet/mua', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, k = String((req.body && req.body.k) || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      mua();
      const m = TT_TET[k];
      if (!m || m.qua) throw loi('Không có món này ở hội chợ Tết.');
      const f = await h.doc(me);
      if (coTt(f, k) >= TT_MAX) throw loi('Em đã có ' + TT_MAX + ' ' + m.vn.toLowerCase() + ' rồi — chọn món Tết khác nhé!');
      if (f.xu < m.xu) throw loi('Cần ' + m.xu + ' xu — em đang có ' + f.xu + ' xu.');
      f.xu -= m.xu;
      f.xp += 2;
      f.tui = f.tui || {};
      f.tui[k] = (f.tui[k] || 0) + 1;
      await h.ghi(me, f);
      return { ok: true, k, st: await h.trangThai(me, f) };
    }));
  }));

  // ---- bep Tet ----
  app.post('/api/farm/tet/nau', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, k = String(b.k || '');
    await h.traLoi(res, h.lanLuot(me, async () => {
      const x = mua(), m = MON[k];
      if (!m) throw loi('Không có món này.');
      const f = await h.doc(me), t = tetCua(f, x.m.nam);
      if (String(b.goi || '') !== m.zh) throw loi('Tên món chưa đúng — nhìn lại hình và nghĩa rồi chọn lại nhé!');
      if (demNgay(t.nau, x.n) >= NAU_NGAY) throw loi('Hôm nay bếp Tết đã nấu ' + NAU_NGAY + ' món rồi — mai nấu tiếp nhé!');
      const kho = f.kho || {};
      Object.keys(m.can).forEach((y) => {
        if ((kho[y] || 0) < m.can[y]) { const sp = h.SP[y] || {}; throw loi('Chưa đủ nguyên liệu: cần ' + m.can[y] + ' ' + String(sp.vn || y).toLowerCase() + (y === 'duong' ? ' (mua ở Chợ nông sản)' : '') + '.'); }
      });
      Object.keys(m.can).forEach((y) => { kho[y] -= m.can[y]; if (!kho[y]) delete kho[y]; });
      const moi = !(t.daNau && t.daNau[k]);
      t.daNau = t.daNau || {}; t.daNau[k] = 1;
      t.mon[k] = (t.mon[k] || 0) + 1;
      t.nau = { d: x.n, n: demNgay(t.nau, x.n) + 1 };
      const xp = NAU_XP + (moi ? NAU_XP_MOI : 0);
      f.xp += xp;
      await h.ghi(me, f);
      return { ok: true, k, xp, moi, mon: t.mon, nau: t.nau.n, st: await h.trangThai(me, f) };
    }));
  }));

  app.post('/api/farm/tet/yen', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const x = mua();
      const f = await h.doc(me), t = tetCua(f, x.m.nam);
      const thieu = Object.keys(MON).filter((k) => !(t.mon[k] > 0));
      if (thieu.length) throw loi('Mâm cỗ còn thiếu: ' + thieu.map((k) => MON[k].zh + ' ' + MON[k].vn.toLowerCase()).join(', ') + '.');
      if (t.yen && t.yen.d === x.n) throw loi('Hôm nay em đã bày mâm cơm Tết rồi — mai bày tiếp nhé!');
      Object.keys(MON).forEach((k) => { t.mon[k]--; if (!t.mon[k]) delete t.mon[k]; });
      t.yen = { d: x.n };
      const dau = !t.mam;
      const q = dau ? { xu: YEN.xu, xp: YEN.xp, tt: 'tet-mam' } : { xu: YEN.xuSau, xp: YEN.xpSau };
      if (dau) { t.mam = 1; f.tui = f.tui || {}; f.tui['tet-mam'] = (f.tui['tet-mam'] || 0) + 1; }
      f.xu += q.xu; f.xp += q.xp;
      await h.ghi(me, f);
      return { ok: true, qua: q, mon: t.mon, st: await h.trangThai(me, f) };
    }));
  }));

  // ---- li xi 红包 ----
  function cauLx(c) {
    const dap = TINH_HUONG[c].dap;
    const khac = tron(RIENG.filter((k) => k !== dap)).slice(0, 3);
    return tron([dap].concat(khac));
  }
  app.post('/api/farm/tet/lx/bat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, den = String(b.den || ''), xu = Math.floor(Number(b.xu));
    await h.traLoi(res, (async () => {
      const x = mua();
      if (LX_XU.indexOf(xu) < 0) throw loi('Chọn số xu cho bao lì xì: ' + LX_XU.join(' / ') + ' xu.');
      if (!den || den === me) throw loi('Chọn một bạn cùng lớp để lì xì nhé.');
      const ban = await banCua(me);
      const bn = ban.ds.find((u) => u.id === den);
      if (!bn) throw loi('Em chỉ lì xì được cho bạn cùng lớp (bạn đã mở nông trại).');
      return h.lanLuot(me, async () => {
        const f = await h.doc(me), t = tetCua(f, x.m.nam);
        const gui = t.lx && t.lx.d === x.n ? t.lx : { d: x.n, n: 0, ai: [] };
        if (gui.n >= LX_NGAY) throw loi('Hôm nay em đã gửi ' + LX_NGAY + ' bao lì xì rồi — mai gửi tiếp nhé!');
        if ((gui.ai || []).indexOf(den) >= 0) throw loi('Hôm nay em đã lì xì ' + bn.ten + ' rồi — mỗi bạn 1 bao mỗi ngày.');
        if (f.xu < xu) throw loi('Cần ' + xu + ' xu để bỏ vào bao lì xì — em đang có ' + f.xu + ' xu.');
        if (demNgay(t.lxh, x.n) >= LX_HOI_NGAY) throw loi('Hôm nay em đã thử chọn lời chúc nhiều lần rồi — mai thử tiếp nhé!');
        t.lxh = { d: x.n, n: demNgay(t.lxh, x.n) + 1 };
        const c = Math.floor(Math.random() * TINH_HUONG.length);
        const lua = cauLx(c);
        t.q = { den, xu, c, lua, bd: Date.now() };
        await h.ghi(me, f);
        return { ok: true, den, ten: bn.ten, xu, tinh: TINH_HUONG[c].vn, lua };
      });
    })());
  }));
  app.post('/api/farm/tet/lx/gui', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {}, chon = String(b.c || '');
    await h.traLoi(res, (async () => {
      const x = mua();
      const f0 = await h.doc(me), q0 = f0.tet && f0.tet.nam === x.m.nam ? f0.tet.q : null;
      if (!q0 || Date.now() - q0.bd > LX_HAN) throw loi('Bao lì xì đã hết hạn — bấm Lì xì lại nhé.');
      const den = q0.den;
      return h.haiLuot(me, den, async () => {
        const fm = await h.doc(me), t = tetCua(fm, x.m.nam), q = t.q;
        if (!q || q.den !== den || Date.now() - q.bd > LX_HAN) throw loi('Bao lì xì đã hết hạn — bấm Lì xì lại nhé.');
        delete t.q;
        const dap = TINH_HUONG[q.c].dap, dung = chon === dap;
        const kq = { ok: true, dung, dap, chuc: CHUC[dap], chon: CHUC[chon] ? chon : '' };
        if (!dung) { await h.ghi(me, fm); kq.st = await h.trangThai(me, fm); return kq; }
        const gui = t.lx && t.lx.d === x.n ? t.lx : { d: x.n, n: 0, ai: [] };
        gui.ai = gui.ai || [];
        if (gui.n >= LX_NGAY || gui.ai.indexOf(den) >= 0) throw loi('Hôm nay em đã lì xì đủ rồi.');
        if (fm.xu < q.xu) throw loi('Không đủ xu để bỏ vào bao lì xì.');
        const ff = await h.doc(den), tn = tetCua(ff, x.m.nam);
        if (demNgay(tn.lxn, x.n) >= LX_NHAN) {
          await h.ghi(me, fm);
          kq.dung = true; kq.day = true;
          kq.loi = 'Hôm nay bạn ấy đã nhận ' + LX_NHAN + ' bao lì xì rồi — em lì xì bạn khác hoặc để mai nhé (em chưa mất xu).';
          kq.st = await h.trangThai(me, fm);
          return kq;
        }
        fm.xu -= q.xu; ff.xu += q.xu;
        fm.xp += LX_XP;
        t.lx = { d: x.n, n: gui.n + 1, ai: gui.ai.concat(den) };
        tn.lxn = { d: x.n, n: demNgay(tn.lxn, x.n) + 1 };
        const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        tn.hop = [{ id, ai: me, xu: q.xu, c: dap, t: Date.now(), xem: false }].concat(tn.hop).slice(0, LX_GIU);
        h.ghiNk(fm, { ai: den, l: 'tetlxdi', xu: q.xu, c: dap });
        h.ghiNk(ff, { ai: me, l: 'tetlx', xu: q.xu, c: dap });
        await h.ghi(den, ff);
        await h.ghi(me, fm);
        Object.assign(kq, { xu: q.xu, xp: LX_XP, con: LX_NGAY - t.lx.n, st: await h.trangThai(me, fm) });
        return kq;
      });
    })());
  }));
  app.post('/api/farm/tet/lx/xem', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const x = nay(), f = await h.doc(me);
      if (x && f.tet && f.tet.nam === x.m.nam && Array.isArray(f.tet.hop)) { f.tet.hop.forEach((e) => { e.xem = true; }); await h.ghi(me, f); }
      return { ok: true, st: await h.trangThai(me, f) };
    }));
  }));

  // ---- on bai don Tet: 3 cau tu bai em da hoc ----
  app.post('/api/farm/tet/on/bat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, (async () => {
      const x = mua();
      const ds = await h.phieuLuu.layCau(req.user, 'thung', ON.so, { nghe: false });
      if (ds.length < ON.so) { const e = loi('Em hãy học ít nhất một bài (hoặc bài thầy cô giao) để có câu hỏi ôn Tết nhé!'); throw e; }
      return h.lanLuot(me, async () => {
        const f = await h.doc(me), t = tetCua(f, x.m.nam);
        const o = t.on && t.on.d === x.n ? t.on : { d: x.n, lan: 0, xong: false };
        if (o.xong) throw loi('Hôm nay em đã nhận quà ôn bài đón Tết rồi — mai ôn tiếp nhé!');
        if (o.lan >= ON.lan) throw loi('Hôm nay em đã thử ' + ON.lan + ' lần — ôn bài rồi mai thử lại nhé!');
        o.lan++;
        t.on = o;
        t.oq = { ds, tl: [], bd: Date.now() };
        await h.ghi(me, f);
        return { ok: true, so: ds.length, can: ON.can, ds: ds.map((q) => ({ k: q.k, hoi: q.hoi, lua: q.lua })) };
      });
    })());
  }));
  app.post('/api/farm/tet/on/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, b = req.body || {};
    await h.traLoi(res, h.lanLuot(me, async () => {
      const x = mua();
      const f = await h.doc(me), t = tetCua(f, x.m.nam), r = t.oq;
      if (!r || Date.now() - r.bd > HAN_CAU) { delete t.oq; await h.ghi(me, f); throw loi('Lượt ôn bài đã hết hạn — bấm bắt đầu lại nhé.'); }
      const q = r.ds[r.tl.length];
      if (!q) throw loi('Lượt này đã xong.');
      const dung = h.chamCau(q, b);
      r.tl.push(dung);
      h.onCau(f, q, b, dung);
      const kq = Object.assign({ ok: true, dung }, h.ketQuaCau(q));
      if (r.tl.length < r.ds.length) { await h.ghi(me, f); return kq; }
      delete t.oq;
      const n = r.tl.filter(Boolean).length, dat = n >= ON.can;
      kq.ket = { dung: n, so: r.ds.length, dat };
      const o = t.on && t.on.d === x.n ? t.on : { d: x.n, lan: 1 };
      if (dat && !o.xong) { o.xong = true; f.xu += ON.xu; f.xp += ON.xp; kq.ket.qua = { xu: ON.xu, xp: ON.xp }; }
      t.on = o;
      await h.ghi(me, f);
      kq.st = await h.trangThai(me, f);
      return kq;
    }));
  }));

  // ---- 压岁钱 dau nam (tu mung 1, 1 lan / mua) ----
  app.post('/api/farm/tet/qua', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, h.lanLuot(me, async () => {
      const x = mua();
      if (!coLy(x)) throw loi('Tiền mừng tuổi nhận từ mùng 1 Tết nhé — còn ' + hieu(x.m.tet, x.n) + ' ngày nữa!');
      const f = await h.doc(me), t = tetCua(f, x.m.nam);
      if (t.ly) throw loi('Em đã nhận tiền mừng tuổi năm nay rồi — chúc em năm mới học giỏi!');
      t.ly = 1;
      f.xu += LY.xu; f.xp += LY.xp;
      await h.ghi(me, f);
      return { ok: true, qua: LY, st: await h.trangThai(me, f) };
    }));
  }));

  // ---- 元宵 猜灯谜 ----
  function chonDo(bo) {
    const da = new Set((bo && bo.tu ? bo.tu : []).map((v) => v.zh));
    const hoc = tron(DO.filter((x) => x.tu.some((z) => da.has(z))));
    const con = tron(DO.filter((x) => hoc.indexOf(x) < 0));
    return hoc.concat(con).slice(0, DO_SO).map((x) => {
      const lua = tron([x.dap].concat(x.khac));
      return { i: DO.indexOf(x), lua, dap: lua.indexOf(x.dap), hoc: x.tu.some((z) => da.has(z)) };
    });
  }
  const doGui = (q) => { const x = DO[q.i]; return { cau: x.cau, py: x.py, loai: x.loai, lua: q.lua, hoc: q.hoc }; };
  app.post('/api/farm/tet/me/bat', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id;
    await h.traLoi(res, (async () => {
      const x = mua();
      if (!coMe(x)) throw loi('Đố đèn mở ngày ' + x.m.me.slice(8) + '/' + x.m.me.slice(5, 7) + ' – rằm tháng Giêng (' + x.m.yx.slice(8) + '/' + x.m.yx.slice(5, 7) + ') nhé!');
      let bo = null;
      try { bo = await h.tuHocCua(req.user); } catch (e) { bo = null; }
      return h.lanLuot(me, async () => {
        const f = await h.doc(me), t = tetCua(f, x.m.nam);
        if (t.me && t.me.d === x.n) throw loi('Hôm nay em đã đoán đèn rồi — mai lại có đèn mới!');
        if (!(t.mq && t.mq.d === x.n)) t.mq = { d: x.n, ds: chonDo(bo), tl: [] };
        await h.ghi(me, f);
        return { ok: true, da: t.mq.tl.length, so: t.mq.ds.length, ds: t.mq.ds.map(doGui), can: DO_CAN, xu: DO_XU };
      });
    })());
  }));
  app.post('/api/farm/tet/me/tl', d.requireAuth, d.asyncRoute(async (req, res) => {
    const me = req.user.id, i = Math.floor(Number((req.body || {}).i));
    await h.traLoi(res, h.lanLuot(me, async () => {
      const x = mua();
      const f = await h.doc(me), t = tetCua(f, x.m.nam), r = t.mq;
      if (!r || r.d !== x.n) throw loi('Bấm "Đoán đèn" để bắt đầu nhé.');
      const q = r.ds[r.tl.length];
      if (!q) throw loi('Lượt này đã xong.');
      const dung = i === q.dap;
      r.tl.push(dung);
      const goc = DO[q.i];
      const kq = { ok: true, dung, dap: q.dap, chu: goc.dap, giai: goc.giai };
      if (r.tl.length >= r.ds.length) {
        const n = r.tl.filter(Boolean).length;
        const qua = { xu: n * DO_XU };
        if (n >= DO_CAN && !t.dm) { t.dm = 1; f.tui = f.tui || {}; f.tui['tet-dengmi'] = (f.tui['tet-dengmi'] || 0) + 1; qua.tt = 'tet-dengmi'; }
        f.xu += qua.xu; f.xp += 2 + n;
        t.me = { d: x.n, dung: n };
        delete t.mq;
        kq.ket = { dung: n, so: r.ds.length, qua };
        await h.ghi(me, f);
        kq.st = await h.trangThai(me, f);
        return kq;
      }
      await h.ghi(me, f);
      return kq;
    }));
  }));

  // Chi may thu (NT_THU=1): doi gio cua module (dem nguoc / phao hoa / do den); xoa=1 xoa du lieu Tet cua em
  if (process.env.NT_THU === '1') {
    app.post('/api/farm/tet/_gio', d.requireAuth, d.asyncRoute(async (req, res) => {
      const b = req.body || {};
      if (b.gio !== undefined) datGio(String(b.gio || ''));
      if (b.xoa) await h.lanLuot(req.user.id, async () => { const f = await h.doc(req.user.id); delete f.tet; await h.ghi(req.user.id, f); });
      res.json({ ok: true, gio: new Date(gio()).toISOString(), ngay: ngayVn(), mua: muaCua(ngayVn()) ? muaCua(ngayVn()).m.nam : null });
    }));
  }
}

module.exports = { gan, trongMua, muaCua, giaiDoan, TET_BANG, TT_TET, MON, CHUC, TINH_HUONG, TU, DO, CAT, _thu: { datGio, gio, ngayVn, cong, hieu } };
