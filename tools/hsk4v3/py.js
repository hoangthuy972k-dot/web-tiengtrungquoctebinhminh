// Phien am cau tieng Trung theo kieu sach: ghep am tiet theo TU (Wǒmen), viet hoa dau cau va ten rieng.
//   const py = require('./py');  py('我们来中国学习了。') -> 'Wǒmen lái Zhōngguó xuéxí le.'
// Tach tu: khop dai nhat theo ca hai chieu (xuoi + nguoc), chon cach tach it manh / it chu le hon
// (看完|整个, 年轻人|工资 → 年轻|人|工资, 请|客人). Pinyin tung chu lay tu pinyin-pro (co bien am 一/不),
// roi sua cac loi hay gap: 儿 hoa (yìdiǎnr), hau to 子 doc nhe, tro tu 得/地 = de, tu lay AABB.
// Cai: cd tools/hsk4v3 && npm install
const { pinyin } = require('pinyin-pro');

// Ten rieng + tu hay doc sai (da tra theo sach)
const RIENG = {
  白家月: 'Bái Jiāyuè', 陈天中: 'Chén Tiānzhōng', 安妮: 'Ānní', 李文: 'Lǐ Wén', 王一飞: 'Wáng Yīfēi', 王一雪: 'Wáng Yīxuě',
  刘明: 'Liú Míng', 刘小雪: 'Liú Xiǎoxuě', 刘小明: 'Liú Xiǎomíng', 杨同乐: 'Yáng Tónglè', 小语: 'Xiǎoyǔ', 李雪: 'Lǐ Xuě',
  王老师: 'Wáng lǎoshī', 中国: 'Zhōngguó', 北京: 'Běijīng', 上海: 'Shànghǎi', 中文: 'Zhōngwén', 汉语: 'Hànyǔ',
  泰国: 'Tàiguó', 法国: 'Fǎguó', 加拿大: 'Jiānádà', 越南: 'Yuènán', 美国: 'Měiguó', 英国: 'Yīngguó', 日本: 'Rìběn', 韩国: 'Hánguó',
  西安: "Xī'ān", 南京: 'Nánjīng', 广州: 'Guǎngzhōu', 深圳: 'Shēnzhèn', 成都: 'Chéngdū', 重庆: 'Chóngqìng', 天津: 'Tiānjīn', 哈尔滨: "Hā'ěrbīn", 云南: 'Yúnnán', 四川: 'Sìchuān',
  长城: 'Chángchéng', 故宫: 'Gùgōng', 黄河: 'Huáng Hé', 长江: 'Cháng Jiāng', 香港: 'Xiānggǎng', 昆明: 'Kūnmíng', 桂林: 'Guìlín', 青岛: 'Qīngdǎo', 大连: 'Dàlián', 武汉: 'Wǔhàn',
  河内: 'Hénèi', 贵州: 'Guìzhōu', 广东: 'Guǎngdōng', 海南: 'Hǎinán', 山东: 'Shāndōng', 西藏: 'Xīzàng', 新疆: 'Xīnjiāng', 内蒙古: 'Nèiměnggǔ', 拉萨: 'Lāsà', 丽江: 'Lìjiāng', 杭州: 'Hángzhōu', 苏州: 'Sūzhōu', 西湖: 'Xī Hú', 意大利: 'Yìdàlì', 西班牙: 'Xībānyá', 德国: 'Déguó', 俄罗斯: 'Éluósī', 印度: 'Yìndù', 泰国人: 'Tàiguórén', 京剧: 'jīngjù', 周力: 'Zhōu Lì', 胡志明市: 'Húzhìmíng Shì', 徐前: 'Xú Qián', 林静静: 'Lín Jìngjìng', 春节: 'Chūnjié',
  同乐: 'Tónglè', 家月: 'Jiāyuè', 天中: 'Tiānzhōng', 一飞: 'Yīfēi', 一雪: 'Yīxuě', 小雪: 'Xiǎoxuě', 小明: 'Xiǎomíng',
};
// Thanh nhe cua cac tu hay gap (pinyin-pro hay de nguyen thanh)
const NHE = {
  怎么着: 'zěnmezhe', 历史书: 'lìshǐshū', 值得: 'zhíde', 下来: 'xiàlai', 上来: 'shànglai', 起来: 'qǐlai', 出来: 'chūlai',
  回来: 'huílai', 过来: 'guòlai', 进来: 'jìnlai', 下去: 'xiàqu', 上去: 'shàngqu', 出去: 'chūqu', 回去: 'huíqu', 过去: 'guòqu', 进去: 'jìnqu', 旅行家: 'lǚxíngjiā', 游记: 'yóujì', 鲨鱼: 'shāyú', 打鱼: 'dǎyú', 作家: 'zuòjiā', 不好意思: 'bù hǎoyìsi', 打印机: 'dǎyìnjī', 大城市: 'dà chéngshì', 还是: 'háishi', 知识: 'zhīshi', 很多: 'hěn duō', 更多: 'gèng duō', 老妈: 'lǎomā', 老爸: 'lǎobà', 有意思: 'yǒu yìsi', 没意思: 'méi yìsi', 只要: 'zhǐyào', 只有: 'zhǐyǒu', 只是: 'zhǐshì', 只好: 'zhǐhǎo', 有的是: 'yǒudeshì', 目的地: 'mùdìdì',
  学生: 'xuésheng', 学生证: 'xuéshengzhèng', 收拾: 'shōushi', 东西: 'dōngxi', 意思: 'yìsi', 朋友: 'péngyou', 知道: 'zhīdao', 客气: 'kèqi', 衣服: 'yīfu',
  喜欢: 'xǐhuan', 漂亮: 'piàoliang', 舒服: 'shūfu', 地方: 'dìfang', 先生: 'xiānsheng', 认识: 'rènshi', 清楚: 'qīngchu', 告诉: 'gàosu',
  时候: 'shíhou', 休息: 'xiūxi', 麻烦: 'máfan', 明白: 'míngbai', 关系: 'guānxi', 事情: 'shìqing', 消息: 'xiāoxi', 主意: 'zhǔyi',
  便宜: 'piányi', 热闹: 'rènao', 窗户: 'chuānghu', 豆腐: 'dòufu', 打扮: 'dǎban', 商量: 'shāngliang', 照顾: 'zhàogu', 暖和: 'nuǎnhuo',
  凉快: 'liángkuai', 觉得: 'juéde', 怎么: 'zěnme', 什么: 'shénme', 这么: 'zhème', 那么: 'nàme', 多么: 'duōme', 眼睛: 'yǎnjing',
  头发: 'tóufa', 耳朵: 'ěrduo', 爸爸: 'bàba', 妈妈: 'māma', 哥哥: 'gēge', 姐姐: 'jiějie', 弟弟: 'dìdi', 妹妹: 'mèimei', 孩子: 'háizi',
  桌子: 'zhuōzi', 椅子: 'yǐzi', 名字: 'míngzi', 杯子: 'bēizi', 日子: 'rìzi', 帽子: 'màozi', 包子: 'bāozi', 饺子: 'jiǎozi', 盘子: 'pánzi',
  玻璃: 'bōli', 萝卜: 'luóbo', 葡萄: 'pútao', 太阳: 'tàiyang', 月亮: 'yuèliang', 晚上: 'wǎnshang', 早上: 'zǎoshang', 那里: 'nàli', 这里: 'zhèli',
  脑袋: 'nǎodai', attempt: '', 讲究: 'jiǎngjiu', 骨头: 'gǔtou', 石头: 'shítou', 木头: 'mùtou', 舌头: 'shétou', 馒头: 'mántou', 枕头: 'zhěntou',
  上面: 'shàngmian', 下面: 'xiàmian', 里面: 'lǐmian', 外面: 'wàimian', 前面: 'qiánmian', 后面: 'hòumian', 上边: 'shàngbian', 下边: 'xiàbian',
  里边: 'lǐbian', 外边: 'wàibian', 前边: 'qiánbian', 后边: 'hòubian', 旁边: 'pángbiān', 打听: 'dǎting', 吩咐: 'fēnfu', 结实: 'jiēshi',
  聪明: 'cōngming', 漂漂亮亮: 'piàopiao-liàngliàng', 厉害: 'lìhai', 实在: 'shízai', 部分: 'bùfen', 力气: 'lìqi', 尾巴: 'wěiba', 喇叭: 'lǎba',
};
delete NHE.attempt;
// 老/小 + ho (老王, 小李) la cach goi ten rieng: Lǎo Wáng, Xiǎo Lǐ
{ const HO = { 徐: 'Xú', 孙: 'Sūn', 郑: 'Zhèng', 胡: 'Hú', 高: 'Gāo', 何: 'Hé', 钱: 'Qián', 王: 'Wáng', 李: 'Lǐ', 张: 'Zhāng', 刘: 'Liú', 陈: 'Chén', 杨: 'Yáng', 赵: 'Zhào', 黄: 'Huáng', 周: 'Zhōu', 吴: 'Wú', 林: 'Lín', 马: 'Mǎ' };
  Object.keys(HO).forEach((h) => { RIENG['老' + h] = 'Lǎo ' + HO[h]; RIENG['小' + h] = 'Xiǎo ' + HO[h];
    // ho + danh xung (赵女士, 王先生, 张老师…): viet hoa ho
    [['女士', 'nǚshì'], ['先生', 'xiānsheng'], ['老师', 'lǎoshī'], ['阿姨', 'āyí'], ['经理', 'jīnglǐ'], ['教授', 'jiàoshòu'], ['医生', 'yīshēng'], ['大夫', 'dàifu'], ['师傅', 'shīfu'], ['总', 'zǒng']]
      .forEach((d) => { if (!RIENG[h + d[0]]) RIENG[h + d[0]] = HO[h] + ' ' + d[1]; }); }); }
const DUNG_HOA = new Set(Object.keys(RIENG).filter((k) => /^[A-Z]/.test(RIENG[k])));
// 子 khong doc nhe; 儿 la chu goc (khong phai 儿 hoa)
const ZI_DU = new Set(['孔子', '孟子', '君子', '原子', '电子', '分子', '男子', '女子', '瓜子', '老子', '孝子', '游子', '赤子', '天子', '弟子']);
const ER_GOC = new Set(['儿子', '女儿', '儿童', '幼儿', '婴儿', '儿女', '孤儿', '儿科', '健儿', '男儿']);

// Tu dien hoc tu pinyin viet tay cua cac cap khac (tao-tu-ghep.js): ranh gioi tu + thanh nhe dung
let GHEP = {};
try { GHEP = require('./tu-ghep.json'); } catch (e) { GHEP = {}; }
// bo cac cum dong tu + 了/着/过 (吃了, 了了…) — de quy tac rieng cua 了/着/过 xu ly
const BU_TU = /^(不过|不同|不但|不断|不错|不管|不仅|不论|不如|不然|不少|不久|不安|不幸|不必|不光|不得不|不好意思|不一定|不一样|不客气|不怎么|不行|不对|不用|不要|不必|不得了|不见了|不停|不平)$/;
Object.keys(GHEP).forEach((w) => {
  if (/[吗呢吧啊呀嘛]$/.test(w) || (/的$/.test(w) && !/^(别的|有的|目的|似的)$/.test(w)) || (w.length === 2 && w[0] === '不' && !BU_TU.test(w))) delete GHEP[w];
});
['年少', '说好', '人来'].forEach((w) => delete GHEP[w]);
// 一 + luong tu (一本, 一个…) viet roi: yì běn — giu cac tu that (一些, 一点, 一起, 一样…)
Object.keys(GHEP).forEach((w) => { if (w.length === 2 && w[0] === '一' && /[本个张件只条次天年位家口块份双杯碗瓶首句段篇封台辆座节层场门道种]/.test(w[1])) delete GHEP[w]; });
Object.keys(GHEP).forEach((w) => { if (/[了着过]$/.test(w) && !/^(为了|除了|算了|罢了|不过|难过|经过|通过|超过|错过|度过|过过|接着|跟着|随着|顺着|沿着|对着|向着|朝着|意味着|看着)$/.test(w)) delete GHEP[w]; });
let TU = null;
function haThuong() {
  const vung = require('./chi-muc')().tu;
  Object.keys(GHEP).forEach((w) => { if (/^[A-ZĀÁǍÀĒÉĚÈŌÓǑÒ]/.test(GHEP[w]) && vung[w] && !/^(中国|北京|上海|汉语|中文)/.test(w)) GHEP[w] = GHEP[w].charAt(0).toLowerCase() + GHEP[w].slice(1); });
}
function dsTu() {
  if (TU) return TU;
  TU = new Set(Object.keys(require('./chi-muc')().tu));
  [
    '我们', '你们', '他们', '她们', '咱们', '什么', '怎么', '为什么', '这里', '那里', '这儿', '那儿', '哪儿', '以后', '以前', '可以', '已经',
    '欢迎', '留学', '学生', '学生证', '护照', '通知书', '上课', '下课', '然后', '网上', '选课', '试听', '客气', '谢谢',
    '老师', '问题', '校园', '图书馆', '体育馆', '超市', '城市', '方便', '刚才', '了解', '听说', '一点儿', '有点儿', '一会儿', '好像', '成绩', '机会', '没错',
    '一起', '发展', '越来越', '大学', '自己', '兴趣', '需要', '选择', '除了', '外国', '生活', '有人', '对于', '感兴趣', '意思',
    '希望', '公司', '工作', '喜欢', '打算', '回国', '医生', '热情', '有关', '语言', '准备', '一方面', '另一方面', '来说',
    '看完', '年轻', '年轻人', '工资', '客人', '有效', '流行性', '咳嗽', '外出', '相比', '农家乐', '首都', '课本', '性别', '小事', '垃圾', '环保', '老年人', '老年班', '快递', '鸡汤', '担忧', '想法',
    '实习生', '大学生', '模拟', '大城市', '学到', '学会', '估计', '全家', '父母', '课堂', '分类', '父亲', '母亲', '房子', '东西', '时候', '朋友', '觉得', '知道', '应该', '可能', '已经', '还是', '或者',
  ].forEach((w) => TU.add(w));
  haThuong();
  Object.keys(RIENG).concat(Object.keys(NHE), Object.keys(GHEP)).forEach((w) => TU.add(w));
  TU.delete('从小');   // thuong la 从 + 小事 / 小时候, hiem khi la 从小 (từ nhỏ)
  return TU;
}

const laHan = (c) => /[㐀-鿿]/.test(c);
const AA_GIU = new Set('常刚慢好渐天人个偏往明默稍悄轻静快早晚多少大小高高远深久久试'.split('').filter((c) => c !== '试'));
const boDau = (x) => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC').replace(/v/g, 'ü');
// Chu hay dung rieng mot minh (dong tu / gioi tu / pho tu / tro tu)
const TU_DO = new Set('是的了在不也都就很有人个从和跟对给把被让叫向往到去来说看做想要会能吃喝买还又再才只最太更上下里好完成住懂见'.split(''));
// AABB (干干净净, 高高兴兴): 4 chu lien nhau giu nguyen mot khoi
function laAabb(s, i) {
  return i + 3 < s.length && s[i] === s[i + 1] && s[i + 2] === s[i + 3] && s[i] !== s[i + 2] && laHan(s[i]) && laHan(s[i + 2]) &&
    !!TU && TU.has(s[i] + s[i + 2]) && !NHE[s[i] + s[i + 1]];   // 爸爸妈妈 khong phai tu lay AABB
}
function coTu(w, tu, them) { return w.length === 1 || tu.has(w) || !!(them && them[w]) || (w.length === 2 && w[0] === w[1] && laHan(w[0]) && !/[了的着过是一不]/.test(w[0])); }

// Tach mot doan toan chu Han theo mot chieu
function tachXuoi(s, tu, them) {
  const ra = [];
  let i = 0;
  while (i < s.length) {
    if (laAabb(s, i)) { ra.push(s.slice(i, i + 4)); i += 4; continue; }
    if (s[i] === '一' && s[i + 2] === '一' && i + 3 < s.length) { ra.push(s[i], s[i + 1], s[i + 2], s[i + 3]); i += 4; continue; }
    let k = Math.min(6, s.length - i);
    while (k > 1 && !coTu(s.slice(i, i + k), tu, them)) k--;
    ra.push(s.slice(i, i + k));
    i += k;
  }
  return ra;
}
function tachNguoc(s, tu, them) {
  const ra = [];
  let j = s.length;
  while (j > 0) {
    if (j >= 4 && laAabb(s, j - 4)) { ra.unshift(s.slice(j - 4, j)); j -= 4; continue; }
    if (j >= 4 && s[j - 4] === '一' && s[j - 2] === '一') { ra.unshift(s[j - 4], s[j - 3], s[j - 2], s[j - 1]); j -= 4; continue; }
    let k = Math.min(6, j);
    while (k > 1 && !coTu(s.slice(j - k, j), tu, them)) k--;
    ra.unshift(s.slice(j - k, j));
    j -= k;
  }
  return ra;
}
function tachDoan(s, tu, them) {
  const a = tachXuoi(s, tu, them), b = tachNguoc(s, tu, them);
  const moi = (x) => (them ? x.filter((w) => w.length > 1 && them[w]).length : 0);
  if (moi(a) !== moi(b)) return moi(a) > moi(b) ? a : b;
  if (a.length !== b.length) return a.length < b.length ? a : b;
  const le = (x) => x.filter((w) => w.length === 1).length;
  if (le(a) !== le(b)) return le(a) < le(b) ? a : b;
  const tuDo = (x) => x.filter((w) => w.length === 1 && TU_DO.has(w)).length;
  if (tuDo(a) !== tuDo(b)) return tuDo(a) > tuDo(b) ? a : b;
  // con hoa: uu tien cach tach de 的 dung rieng (性别|的, 没有|的 — khong phai 性|别的, 没|有的)
  const de = (x) => x.filter((w) => w.length > 1 && w.slice(-1) === '的').length;
  if (de(a) !== de(b)) return de(a) < de(b) ? a : b;
  return b;   // hoa nhau thi chon chieu nguoc (thuong dung hon voi tieng Trung)
}

function tach(s, them) {
  const tu = dsTu(), ra = [];
  let i = 0;
  const coCham = them ? Object.keys(them).filter((x) => x.indexOf('·') >= 0).sort((a, b) => b.length - a.length) : [];
  while (i < s.length) {
    const tc = coCham.find((x) => s.startsWith(x, i));
    if (tc) { ra.push(tc); i += tc.length; continue; }
    if (!laHan(s[i])) {
      let j = i + 1;
      if (/[0-9A-Za-z.%]/.test(s[i])) while (j < s.length && /[0-9A-Za-z.%]/.test(s[j])) j++;
      ra.push(s.slice(i, j)); i = j; continue;
    }
    let j = i;
    while (j < s.length && laHan(s[j])) j++;
    tachDoan(s.slice(i, j), tu, them).forEach((w) => ra.push(w));
    i = j;
  }
  return ra;
}

const DAU = { '，': ',', '。': '.', '？': '?', '！': '!', '：': ':', '；': ';', '、': ',', '“': '“', '”': '”', '（': '(', '）': ')', '…': '…', '—': '—', '《': '«', '》': '»' };
const CHU_THE = new Set(['估计', '大家', '全家', '我', '你', '他', '她', '我们', '你们', '他们', '咱们', '就', '还', '也', '都', '可', '总', '只', '真', '又', '必须']);

// them: { 'chữ Hán của từ mới': 'pinyin trong sách' } — từ mới của bài lấy đúng pinyin sách
function py(s, them) {
  s = String(s || '').trim();
  if (!s) return '';
  const am = pinyin(s, { type: 'array', toneSandhi: true, nonZh: 'removed' });
  const phan = tach(s, them);
  // tu Han lien truoc (bo qua dau ngoac: 每（一）个人)
  const truoc = (t) => { for (let x = t - 1; x >= 0; x--) { if (laHan(phan[x][0])) return phan[x]; if (!/^[（）()]$/.test(phan[x])) return ''; } return ''; };
  const sau = (t) => (phan[t + 1] && laHan(phan[t + 1][0]) ? phan[t + 1] : '');
  let k = 0, ra = '', dauCau = true;
  phan.forEach((w, t) => {
    if (!laHan(w[0])) {
      const d = DAU[w] != null ? DAU[w] : w;
      if (/[,.?!:;)”»…]/.test(d)) ra = ra.replace(/\s+$/, '') + d + ' ';
      else if (/[(“«]/.test(d)) ra += d;
      else if (/\s/.test(d)) { /* bo */ } else { ra += d + ' '; if (/[0-9A-Za-z]/.test(d)) dauCau = false; }
      if (/[.?!]/.test(d) && !/[0-9]/.test(d)) dauCau = true;
      return;
    }
    const soHan = [...w].filter(laHan).length;
    let p, ds = am.slice(k, k + soHan);
    k += soHan;
    if (RIENG[w]) p = RIENG[w];
    else if (them && them[w]) p = String(them[w]).split('/')[0].trim();
    else if (NHE[w]) p = NHE[w];
    else if (GHEP[w] && w !== '的话' && w !== '个人' && !(w.length === 4 && laAabb(w, 0))) p = GHEP[w];
    else {
      // 儿 hoa: 一点儿 → yìdiǎnr, 玩儿 → wánr (tru 儿子, 女儿…)
      if (w.length > 1 && w.slice(-1) === '儿' && !ER_GOC.has(w)) { ds = ds.slice(0, -1); ds[ds.length - 1] += 'r'; }
      // hau to 子 doc nhe: 房子 fángzi, 桌子 zhuōzi
      if (w.length > 1 && w.slice(-1) === '子' && !ZI_DU.has(w)) ds[ds.length - 1] = 'zi';
      // tro tu 得 / 地
      // 得: sau chu ngu + 了/的/过/病 = dé (mắc, được: 她得了感冒); sau chu ngu + dong tu = děi (phải); con lai = de
      if (w === '得') {
        const tr = truoc(t), sa = sau(t), nx = phan[t + 1] || '';
        ds = [(CHU_THE.has(tr) && /^[了的过病奖]/.test(nx)) || /^[奖分冠第]/.test(nx) ? 'dé' : /^[一二两三四五六七八九十几半0-9]/.test(nx) ? 'děi' : CHU_THE.has(tr) && !/^[很不太非真挺好]/.test(sa) ? 'děi' : 'de'];
      }
      // V得了 / V不了 o cuoi cau: 了 = liǎo (吃得了, 去不了)
      if (w === '了') ds = ['le'];
      if (w.length === 2 && w[0] === w[1] && !AA_GIU.has(w[0])) ds = [ds[0], boDau(ds[1])];
      // V一V (闻一闻, 看一看): 一 doc nhe
      if (w === '一') {
        const vyv = truoc(t) && truoc(t) === sau(t) && truoc(t).length === 1 && phan[t + 2] !== '比';
        // pinyin-pro doc 一 trong 年一年 thanh yi — chi giu yi cho V一V that (闻一闻); con lai bien am theo am sau
        if (vyv) ds = ['yi'];
        else if (/^y[iīíǐì]$/.test(ds[0])) { const sa = sau(t); const am2 = sa ? pinyin(sa[0]) : ''; ds = [!sa ? 'yī' : /[àèìòùǜ]/.test(am2) ? 'yí' : 'yì']; }
      }
      // 理(了个)发: fà
      if (w === '发' && /[理个]$/.test(truoc(t))) ds = ['fà'];
      var deHua = w === '的话' && (!!sau(t) || !/如果|要是|假如|万一|只要|就是|不然/.test(s));
      if (w === '的话') ds = deHua ? ['de', 'huà'] : ['de', 'huà'];
      if (w === '大') ds = ['dà'];
      if (w === '是') ds = ['shì'];
      if (w === '了' && /^[得不]$/.test(truoc(t)) && (!sau(t) || /^[吗呢吧啊了]$/.test(sau(t))) && !CHU_THE.has(phan[t - 2] || '')) ds = ['liǎo'];
      // chu le hay bi doc sai: 好 dung rieng luon la hǎo (有什么好客气的), 咳 = ké
      if (w === '好') ds = ['hǎo'];
      // V不C (赶不上, 去不成): 不 doc nhe bu
      const dtDon = truoc(t).length === 1 && !CHU_THE.has(truoc(t)) && !/[也都就还不没很再又才也]$/.test(truoc(t));
      if (w === '不' && dtDon && /^[上下来去到了起完懂见住开动成出清掉]/.test(sau(t))) ds = ['bu'];
      if (w.length === 2 && w[0] === '不' && dtDon && /[上下来去起完懂见住开动成出清掉]/.test(w[1])) ds = ['bu', ds[1]];
      if (w === '长' && /^[得大高成]/.test(sau(t))) ds = ['zhǎng'];
      if (w === '少') ds = ['shǎo'];
      if (w === '当') ds = ['dāng'];
      if (w === '待' && /^[在了着一]/.test(sau(t))) ds = ['dāi'];
      // 还 + 给/回/书/钱 = huán (trả lại)
      if (w === '还' && /^(给|回|书|钱|清|款)/.test(sau(t))) ds = ['huán'];
      if (w === '咳') ds = ['ké'];
      // 只 dung rieng = zhǐ (chỉ), tru luong tu sau so / 这 / 那 / 几 (一只猫)
      if (w === '只') ds = [/[一二两三四五六七八九十几这那每半]$/.test(truoc(t)) ? 'zhī' : 'zhǐ'];
      // 干 dung rieng: dong tu gàn sau 多/能/要/想… hoac truoc 活/事/什么 (多学多干, 干活); con lai gān (衣服干了)
      if (w === '干') ds = [/[多在能会要想去来肯苦实大不没你我他她们]$/.test(truoc(t)) || /^[活事什吗嘛得完]/.test(sau(t)) ? 'gàn' : 'gān'];
      // 呀 o dau cau la than tu yā; o cuoi cau la tro tu ya
      if (w === '呀') ds = [truoc(t) ? 'ya' : 'yā'];
      if (w === '地') {
        const tr = truoc(t), sa = sau(t);
        ds = [/^[上下里方图铁址球区点面的]/.test(sa) || /[在这那土草本外当各满天两一几多目]$/.test(tr) || !tr ? 'dì' : 'de'];
      }
      if (w === '个人' && /[一二两三四五六七八九十几这那每哪]$/.test(truoc(t))) { ra += ds[0] + ' '; p = ds[1]; }
      else if (w.length === 2 && w[0] === '一' && /[本个张件只条次位家口块份双杯碗瓶首句段篇封台辆座节层场门道种]/.test(w[1])) p = ds[0] + ' ' + ds[1];
      else if (w.length === 4 && laAabb(w, 0)) p = ds[0] + ds[1] + '-' + ds[2] + ds[3];
      // am tiet bat dau bang a/o/e (khong dung dau tu) can dau cach am: 女儿 nǚ'ér, 平安 píng'ān
      else if (w === '的话') p = deHua ? 'de huà' : 'dehuà';
      else p = ds.map((x, i) => (i && /^[aāáǎàoōóǒòeēéěè]/.test(x) ? "'" + x : x)).join('');
    }
    // 儿 dung rieng sau mot tu (玩 + 儿): gan r vao am tiet truoc
    if (w === '儿' && truoc(t) && !RIENG[w]) { ra = ra.replace(/\s+$/, '') + 'r '; return; }
    if (dauCau || DUNG_HOA.has(w)) p = p.charAt(0).toUpperCase() + p.slice(1);
    dauCau = false;
    ra += p + ' ';
  });
  return ra.replace(/—(\s*—)+/g, '—').replace(/\s+([,.?!:;)”»])/g, '$1').replace(/([(“«])\s+/g, '$1').replace(/\s{2,}/g, ' ').trim();
}
module.exports = py;
module.exports.tach = tach;
