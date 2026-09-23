// Ghep pinyin cho mot cum chu Han tu tu dien da co trong du lieu bai hoc,
// co xu ly bien dieu cua 不 va 一 (day la cho de sai nhat khi go tay).
const fs = require('fs');
const path = require('path');
const LEX = JSON.parse(fs.readFileSync(path.join(__dirname, 'tu-dien.json'), 'utf8'));
// Bo sung nhung chu chua xuat hien trong du lieu bai hoc
const BO_SUNG = {
  '珍惜': 'zhēnxī', '羨慕': 'xiànmù', '羡慕': 'xiànmù', '浪漫': 'làngmàn', '幽默感': 'yōumògǎn',
  '感': 'gǎn', '强': 'qiáng', '其次': 'qícì', '元': 'yuán', '奖金': 'jiǎngjīn', '艺术品': 'yìshùpǐn',
  '品': 'pǐn', '范围': 'fànwéi', '内': 'nèi', '举办': 'jǔbàn', '展览': 'zhǎnlǎn', '显示': 'xiǎnshì',
  '精神': 'jīngshén', '状态': 'zhuàngtài', '加深': 'jiāshēn', '感到': 'gǎndào', '当时': 'dāngshí',
  '区分': 'qūfēn', '区别': 'qūbié', '爱迪生': 'Àidíshēng', '发明': 'fāmíng', '电灯': 'diàndēng',
  '兴奋': 'xīngfèn', '保持': 'bǎochí', '服务': 'fúwù', '承认': 'chéngrèn', '机器': 'jīqì', '炒': 'chǎo', '戒烟': 'jièyān', '父母': 'fùmǔ', '朝': 'cháo', '订': 'dìng', '加点儿': 'jiā diǎnr', '热烈': 'rèliè', '湿': 'shī', '钢琴': 'gāngqín', '姑娘': 'gūniang', '乌云': 'wūyún', '加': 'jiā', '叉': 'chā', '传统': 'chuántǒng', '招待': 'zhāodài', '结': 'jié', '竹子': 'zhúzi', '盏': 'zhǎn', '背包': 'bēibāo', '圆': 'yuán', '风': 'fēng', '夜': 'yè', '中秋节': 'Zhōngqiūjié', '澳大利亚': 'Àodàlìyà', '晚会': 'wǎnhuì', '啤酒节': 'píjiǔjié', '满足': 'mǎnzú', '各地': 'gèdì', '背': 'bēi', '晒': 'shài', '下山': 'xiàshān', '铅笔': 'qiānbǐ', '外公': 'wàigōng', '外婆': 'wàipó', '面条': 'miàntiáo', '邻居': 'línjū', '家长': 'jiāzhǎng', '亮': 'liàng', '会议室': 'huìyìshì', '运动鞋': 'yùndòngxié', '兄弟': 'xiōngdì', '锁': 'suǒ', '装': 'zhuāng', '费': 'fèi', '班长': 'bānzhǎng', '房屋': 'fángwū', '冰': 'bīng', '匆忙': 'cōngmáng', '婚': 'hūn', '光临': 'guānglín', '同屋': 'tóngwū', '一刻钟': 'yí kè zhōng', '退': 'tuì', '草地': 'cǎodì', '滑': 'huá', '花茶': 'huāchá', '绿茶': 'lǜchá', '太阳伞': 'tàiyángsǎn', '雨伞': 'yǔsǎn', '扇子': 'shànzi', '秘书处': 'mìshūchù', '总经理': 'zǒngjīnglǐ', '河': 'hé', '化妆': 'huàzhuāng', '美食': 'měishí', '湖南': 'Húnán', '少数': 'shǎoshù', '航班号': 'hángbān hào', '改签': 'gǎiqiān', '名城': 'míngchéng', '鲜美': 'xiānměi', '小吃街': 'xiǎochījiē', '碗': 'wǎn', '甜': 'tián', '闻': 'wén', '目的地': 'mùdìdì', '丽江': 'Lìjiāng', '季节': 'jìjié', '鞋': 'xié', '该': 'gāi', '副': 'fù', '配': 'pèi', '拍': 'pāi', '大声': 'dàshēng', '理发店': 'lǐfàdiàn', '理发师': 'lǐfàshī', '会员卡': 'huìyuánkǎ', '口袋': 'kǒudài', '小区': 'xiǎoqū', '卧室': 'wòshì', '体育馆': 'tǐyùguǎn', '房租': 'fángzū', '钝': 'dùn', '白菜': 'báicài', '手表': 'shǒubiǎo', '帽子': 'màozi', '受伤': 'shòushāng', '腿': 'tuǐ', '碰见': 'pèngjiàn', '申请表': 'shēnqǐngbiǎo', '成绩证明': 'chéngjì zhèngmíng', '新建': 'xīnjiàn', '淡': 'dàn', '查': 'chá', '家庭': 'jiātíng', '交通工具': 'jiāotōng gōngjù', '工具': 'gōngjù', '邮票': 'yóupiào', '银行卡': 'yínhángkǎ', '邮箱': 'yóuxiāng', '中学生': 'zhōngxuéshēng', '输入': 'shūrù', '激烈': 'jīliè', '屋': 'wū', '海': 'hǎi', '整齐': 'zhěngqí', '毛衣': 'máoyī', '皮毛': 'pímáo', '出口': 'chūkǒu', '厘米': 'límǐ', '童话': 'tónghuà', '安徒生': 'Āntúshēng', '生物': 'shēngwù', '月底': 'yuèdǐ', '肺': 'fèi', '朵': 'duǒ', '采访': 'cǎifǎng', '发言': 'fāyán', '基本': 'jīběn', '墙': 'qiáng', '博士学位': 'bóshì xuéwèi', '学士': 'xuéshì', '邀请信': 'yāoqǐngxìn', '报社': 'bàoshè', '市区': 'shìqū', '访问': 'fǎngwèn', '同情心': 'tóngqíngxīn', '保持': 'bǎochí', '孙女': 'sūnnǚ', '暑假': 'shǔjià', '父亲节': 'fùqīnjié', '儿童节': 'értóngjié', '读物': 'dúwù', '粗心大意': 'cūxīn-dàyì', '马马虎虎': 'mǎmǎ-hūhū', '好动': 'hàodòng', '支': 'zhī', '牙刷': 'yáshuā', '挤': 'jǐ', '垃圾': 'lājī', '上升': 'shàngshēng', '倒': 'dào', '风景': 'fēngjǐng', '垃圾桶': 'lājītǒng', '停车场': 'tíngchēchǎng', '围巾': 'wéijīn', '工厂': 'gōngchǎng', '寒假': 'hánjià', '暖和': 'nuǎnhuo', '装': 'zhuāng', '犯': 'fàn', '改正': 'gǎizhèng', '现象': 'xiànxiàng', '改': 'gǎi', '良药苦口': 'liáng yào kǔ kǒu', '爱好者': 'àihàozhě', '省会': 'shěnghuì', '塑料袋': 'sùliàodài', '功夫': 'gōngfu', '深受': 'shēn shòu', "喜爱": "xǐ'ài", '听众': 'tīngzhòng', '薄': 'báo', '常见': 'chángjiàn', '片': 'piàn', '产生': 'chǎnshēng', '毫无': 'háowú', '无处不在': 'wúchù-bùzài', '事倍功半': 'shì bèi gōng bàn', '事半功倍': 'shì bàn gōng bèi', '间接': 'jiànjiē', '到达': 'dàodá', '死记': 'sǐjì', '翻': 'fān', '无论如何': 'wúlùn rúhé', '时尚': 'shíshàng', '常用': 'chángyòng', '语法知识': 'yǔfǎ zhīshi', '阅读能力': 'yuèdú nénglì', '睁': 'zhēng', '母亲节': 'mǔqīnjié', '抽空儿': 'chōu kòngr', '硕士学位': 'shuòshì xuéwèi', '硕士研究生': 'shuòshì yánjiūshēng', '富有': 'fùyǒu', '幸福感': 'xìngfúgǎn', '高低': 'gāodī', '种种': 'zhǒngzhǒng', '分不清': 'fēn bu qīng', '清': 'qīng', '满头大汗': 'mǎntóu-dàhàn', '轻轻松松': 'qīngqīng-sōngsōng', '随随便便': 'suísuí-biànbiàn', '科学家': 'kēxuéjiā', '画家': 'huàjiā', '作品': 'zuòpǐn', '实现': 'shíxiàn', '普通': 'pǔtōng', '运气': 'yùnqi', '戒': 'jiè', '烟': 'yān', '根': 'gēn', '浇水': 'jiāoshuǐ', '浇': 'jiāo', '组': 'zǔ', '摸': 'mō', '伤口': 'shāngkǒu', '毛巾': 'máojīn', '静坐': 'jìngzuò', '承诺': 'chéngnuò', '重要性': 'zhòngyàoxìng', '三分之二': 'sān fēn zhī èr', '帅哥': 'shuàigē', '帅气': 'shuàiqì', '研究生': 'yánjiūshēng', '轻声': 'qīngshēng', '意义': 'yìyì', '保护': 'bǎohù', '各种各样': 'gè zhǒng gè yàng', '侦探': 'zhēntàn', '坏处': 'huàichù', '苹果汁': 'píngguǒzhī', '乐在其中': 'lè zài qí zhōng', '举例如下': 'jǔ lì rú xià', '付': 'fù', '设计': 'shèjì', '食物': 'shíwù', '葡萄酒': 'pútaojiǔ', '购物中心': 'gòuwù zhōngxīn', '信用卡': 'xìnyòngkǎ', '艺术家': 'yìshùjiā', '流行音乐': 'liúxíng yīnyuè', '一串': 'yí chuàn', '串': 'chuàn', '表扬': 'biǎoyáng', '甜': 'tián', '咸': 'xián', '责任心': 'zérènxīn', '手忙脚乱': 'shǒumáng-jiǎoluàn', '笔记本': 'bǐjìběn', '取得': 'qǔdé', '规定': 'guīdìng', '质量': 'zhìliàng', '表示': 'biǎoshì', '招聘会': 'zhāopìnhuì', '负责人': 'fùzérén', '专业知识': 'zhuānyè zhīshi', '与此同时': 'yǔ cǐ tóngshí', '而且': 'érqiě', '姐妹': 'jiěmèi', '只有': 'zhǐyǒu', '只要': 'zhǐyào', '不但': 'búdàn', '不仅': 'bùjǐn', '主动': 'zhǔdòng', '才': 'cái', '且': 'qiě', '保': 'bǎo', '主': 'zhǔ', '祝': 'zhù', '幸福': 'xìngfú', '友谊': 'yǒuyì', '能力': 'nénglì', '三千': 'sānqiān'
};
Object.keys(BO_SUNG).forEach(k => { if (!LEX[k]) LEX[k] = BO_SUNG[k]; });
const KEYS = Object.keys(LEX).sort((a, b) => b.length - a.length);

const THANH4 = /[àèìòùǜáò]/; // dung ham rieng ben duoi thay vi regex nay
function thanhDieu(am) {
  // Tra ve 1..4, 0 = thanh nhe
  if (/[āēīōūǖ]/.test(am)) return 1;
  if (/[áéíóúǘ]/.test(am)) return 2;
  if (/[ǎěǐǒǔǚ]/.test(am)) return 3;
  if (/[àèìòùǜ]/.test(am)) return 4;
  return 0;
}
function amDau(py) { return String(py).split(/\s+/)[0] || ''; }

function ghep(s) {
  const ra = [];
  let i = 0, thieu = 0;
  while (i < s.length) {
    const c = s[i];
    if (!/[\u4e00-\u9fff]/.test(c)) { i++; continue; }
    let khop = '';
    for (const k of KEYS) {
      if (k.length <= s.length - i && s.substr(i, k.length) === k) { khop = k; break; }
    }
    if (!khop) { ra.push({ zh: c, py: '?' }); thieu++; i++; continue; }
    ra.push({ zh: khop, py: LEX[khop] });
    i += khop.length;
  }
  // Bien dieu: 不 truoc thanh 4 -> bú ; 一 truoc thanh 4 -> yí, truoc 1/2/3 -> yì
  for (let k = 0; k < ra.length; k++) {
    const sau = ra[k + 1] ? thanhDieu(amDau(ra[k + 1].py)) : -1;
    if (ra[k].zh === '不' && sau === 4) ra[k].py = 'bú';
    if (ra[k].zh === '不' && sau !== 4 && sau >= 0) ra[k].py = 'bù';
    if (ra[k].zh === '一') {
      if (sau === 4) ra[k].py = 'yí';
      else if (sau >= 1 && sau <= 3) ra[k].py = 'yì';
    }
  }
  // Gop lai hai truong hop de bi tach sai khi ghep tung chu:
  //   · chu lap lai (慢慢, 看看)  · chuoi chu so (二十, 一百)
  const SO = /^[一二三四五六七八九十百千万零两]$/;
  const gop = [];
  ra.forEach(function (x) {
    const truoc = gop[gop.length - 1];
    const lapLai = truoc && truoc.zh === x.zh && x.zh.length === 1;
    const deuLaSo = truoc && SO.test(truoc.zh) && SO.test(x.zh);
    if (lapLai || deuLaSo) { truoc.zh += x.zh; truoc.py += x.py; return; }
    gop.push({ zh: x.zh, py: x.py });
  });
  return { py: gop.map(x => x.py).join(' '), thieu: thieu };
}
const DA_AM = '只得了着长好为重教差觉行还大会和干空数便正';
function ghepKiemTra(s) {
  const r = ghep(s);
  // Chu da am chi dang tin khi khop ca TU, khong phai khop tung chu le
  const le = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/[一-鿿]/.test(c)) {
      let khop = 0;
      for (const k of KEYS) { if (k.length > 1 && k.length <= s.length - i && s.substr(i, k.length) === k) { khop = k.length; break; } }
      if (!khop && DA_AM.indexOf(c) >= 0) le.push(c);
      i += khop || 1;
    } else i++;
  }
  r.daAm = le;
  return r;
}
module.exports = { ghep: ghep, ghepKiemTra: ghepKiemTra, LEX: LEX };
