// Phien am cau tieng Trung theo kieu sach: ghep am tiet theo TU (Wǒmen), viet hoa dau cau va ten rieng.
//   const py = require('./py');  py('我们来中国学习了。') -> 'Wǒmen lái Zhōngguó xuéxí le.'
// Tach tu bang khop dai nhat theo danh sach tu da co tren web + tu bo sung; pinyin tung chu lay tu pinyin-pro
// (co bien am 一/不). Cai: cd tools/hsk4v3 && npm install
const { pinyin } = require('pinyin-pro');

// Ten rieng + tu hay doc sai (da tra theo sach)
const RIENG = {
  白家月: 'Bái Jiāyuè', 陈天中: 'Chén Tiānzhōng', 安妮: 'Ānní', 李文: 'Lǐ Wén', 王一飞: 'Wáng Yīfēi', 王一雪: 'Wáng Yīxuě',
  刘明: 'Liú Míng', 刘小雪: 'Liú Xiǎoxuě', 刘小明: 'Liú Xiǎomíng', 杨同乐: 'Yáng Tónglè', 小语: 'Xiǎoyǔ', 李雪: 'Lǐ Xuě',
  王老师: 'Wáng lǎoshī', 中国: 'Zhōngguó', 北京: 'Běijīng', 上海: 'Shànghǎi', 中文: 'Zhōngwén', 汉语: 'Hànyǔ',
  泰国: 'Tàiguó', 法国: 'Fǎguó', 加拿大: 'Jiānádà', 越南: 'Yuènán', 美国: 'Měiguó', 英国: 'Yīngguó', 日本: 'Rìběn', 韩国: 'Hánguó',
  同乐: 'Tónglè', 家月: 'Jiāyuè', 天中: 'Tiānzhōng', 一飞: 'Yīfēi', 一雪: 'Yīxuě', 小雪: 'Xiǎoxuě', 小明: 'Xiǎomíng',
};
const DUNG_HOA = new Set(Object.keys(RIENG).filter((k) => /^[A-Z]/.test(RIENG[k])));

let TU = null;
function dsTu() {
  if (TU) return TU;
  TU = new Set(Object.keys(require('./chi-muc')().tu));
  [
    '我们', '你们', '他们', '她们', '咱们', '什么', '怎么', '为什么', '这里', '那里', '这儿', '那儿', '以后', '以前', '可以', '已经',
    '欢迎', '留学', '学生', '学生证', '护照', '通知书', '上课', '下课', '然后', '网上', '选课', '试听', '客气', '谢谢',
    '老师', '问题', '校园', '图书馆', '体育馆', '超市', '城市', '方便', '刚才', '了解', '听说', '一点儿', '好像', '成绩', '机会', '没错',
    '一起', '发展', '越来越', '大学', '自己', '兴趣', '需要', '选择', '除了', '外国', '生活', '更快', '很多', '有人', '对于', '感兴趣', '意思',
    '希望', '公司', '工作', '喜欢', '打算', '回国', '医生', '热情', '有关', '更多', '语言', '准备', '一方面', '另一方面', '来说',
  ].forEach((w) => TU.add(w));
  Object.keys(RIENG).forEach((w) => TU.add(w));
  return TU;
}

function tach(s, them) {
  const tu = dsTu(), ra = [];
  let i = 0;
  while (i < s.length) {
    if (!/[㐀-鿿]/.test(s[i])) { ra.push(s[i]); i++; continue; }
    let k = Math.min(6, s.length - i);
    while (k > 1 && !tu.has(s.slice(i, i + k)) && !(them && them[s.slice(i, i + k)])) k--;
    ra.push(s.slice(i, i + k));
    i += k;
  }
  return ra;
}

const DAU = { '，': ',', '。': '.', '？': '?', '！': '!', '：': ':', '；': ';', '、': ',', '“': '“', '”': '”', '（': '(', '）': ')', '…': '…', '—': '—', '《': '«', '》': '»' };

// them: { 'chữ Hán của từ mới': 'pinyin trong sách' } — từ mới của bài lấy đúng pinyin sách
function py(s, them) {
  s = String(s || '').trim();
  if (!s) return '';
  const am = pinyin(s, { type: 'array', toneSandhi: true, nonZh: 'removed' });
  const phan = tach(s, them);
  let k = 0, ra = '', dauCau = true;
  phan.forEach((w) => {
    if (!/[㐀-鿿]/.test(w)) {
      const d = DAU[w] != null ? DAU[w] : w;
      if (/[,.?!:;)”»…]/.test(d)) ra = ra.replace(/\s+$/, '') + d + ' ';
      else if (/[(“«]/.test(d)) ra += d;
      else if (/\s/.test(d)) { /* bo */ } else ra += d + ' ';
      if (/[.?!]/.test(d)) dauCau = true;
      return;
    }
    let p;
    if (RIENG[w]) { p = RIENG[w]; k += w.length; } else if (them && them[w]) { p = them[w].replace(/\s+/g, ''); k += w.length; } else { p = am.slice(k, k + w.length).join(''); k += w.length; }
    if (dauCau || DUNG_HOA.has(w)) p = p.charAt(0).toUpperCase() + p.slice(1);
    dauCau = false;
    ra += p + ' ';
  });
  return ra.replace(/\s+([,.?!:;)”»])/g, '$1').replace(/([(“«])\s+/g, '$1').replace(/\s{2,}/g, ' ').trim();
}
module.exports = py;
module.exports.tach = tach;
