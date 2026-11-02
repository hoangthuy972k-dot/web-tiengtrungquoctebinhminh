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
  同乐: 'Tónglè', 家月: 'Jiāyuè', 天中: 'Tiānzhōng', 一飞: 'Yīfēi', 一雪: 'Yīxuě', 小雪: 'Xiǎoxuě', 小明: 'Xiǎomíng',
};
// Thanh nhe cua cac tu hay gap (pinyin-pro hay de nguyen thanh)
const NHE = {
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
const DUNG_HOA = new Set(Object.keys(RIENG).filter((k) => /^[A-Z]/.test(RIENG[k])));
// 子 khong doc nhe; 儿 la chu goc (khong phai 儿 hoa)
const ZI_DU = new Set(['孔子', '孟子', '君子', '原子', '电子', '分子', '男子', '女子', '瓜子', '老子', '孝子', '游子', '赤子', '天子', '弟子']);
const ER_GOC = new Set(['儿子', '女儿', '儿童', '幼儿', '婴儿', '儿女', '孤儿', '儿科', '健儿', '男儿']);

let TU = null;
function dsTu() {
  if (TU) return TU;
  TU = new Set(Object.keys(require('./chi-muc')().tu));
  [
    '我们', '你们', '他们', '她们', '咱们', '什么', '怎么', '为什么', '这里', '那里', '这儿', '那儿', '哪儿', '以后', '以前', '可以', '已经',
    '欢迎', '留学', '学生', '学生证', '护照', '通知书', '上课', '下课', '然后', '网上', '选课', '试听', '客气', '谢谢',
    '老师', '问题', '校园', '图书馆', '体育馆', '超市', '城市', '方便', '刚才', '了解', '听说', '一点儿', '有点儿', '一会儿', '好像', '成绩', '机会', '没错',
    '一起', '发展', '越来越', '大学', '自己', '兴趣', '需要', '选择', '除了', '外国', '生活', '有人', '对于', '感兴趣', '意思',
    '希望', '公司', '工作', '喜欢', '打算', '回国', '医生', '热情', '有关', '语言', '准备', '一方面', '另一方面', '来说',
    '看完', '年轻', '年轻人', '工资', '客人', '有效', '流行性', '咳嗽', '房子', '东西', '时候', '朋友', '觉得', '知道', '应该', '可能', '已经', '还是', '或者',
  ].forEach((w) => TU.add(w));
  Object.keys(RIENG).concat(Object.keys(NHE)).forEach((w) => TU.add(w));
  return TU;
}

const laHan = (c) => /[㐀-鿿]/.test(c);
// AABB (干干净净, 高高兴兴): 4 chu lien nhau giu nguyen mot khoi
function laAabb(s, i) {
  return i + 3 < s.length && s[i] === s[i + 1] && s[i + 2] === s[i + 3] && s[i] !== s[i + 2] && laHan(s[i]) && laHan(s[i + 2]);
}
function coTu(w, tu, them) { return w.length === 1 || tu.has(w) || !!(them && them[w]); }

// Tach mot doan toan chu Han theo mot chieu
function tachXuoi(s, tu, them) {
  const ra = [];
  let i = 0;
  while (i < s.length) {
    if (laAabb(s, i)) { ra.push(s.slice(i, i + 4)); i += 4; continue; }
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
    let k = Math.min(6, j);
    while (k > 1 && !coTu(s.slice(j - k, j), tu, them)) k--;
    ra.unshift(s.slice(j - k, j));
    j -= k;
  }
  return ra;
}
function tachDoan(s, tu, them) {
  const a = tachXuoi(s, tu, them), b = tachNguoc(s, tu, them);
  if (a.length !== b.length) return a.length < b.length ? a : b;
  const le = (x) => x.filter((w) => w.length === 1).length;
  return le(a) < le(b) ? a : b;   // hoa nhau thi chon chieu nguoc (thuong dung hon voi tieng Trung)
}

function tach(s, them) {
  const tu = dsTu(), ra = [];
  let i = 0;
  while (i < s.length) {
    if (!laHan(s[i])) { ra.push(s[i]); i++; continue; }
    let j = i;
    while (j < s.length && laHan(s[j])) j++;
    tachDoan(s.slice(i, j), tu, them).forEach((w) => ra.push(w));
    i = j;
  }
  return ra;
}

const DAU = { '，': ',', '。': '.', '？': '?', '！': '!', '：': ':', '；': ';', '、': ',', '“': '“', '”': '”', '（': '(', '）': ')', '…': '…', '—': '—', '《': '«', '》': '»' };
const CHU_THE = new Set(['我', '你', '他', '她', '我们', '你们', '他们', '咱们', '就', '还', '也', '都', '可', '总', '只', '真', '又', '必须']);

// them: { 'chữ Hán của từ mới': 'pinyin trong sách' } — từ mới của bài lấy đúng pinyin sách
function py(s, them) {
  s = String(s || '').trim();
  if (!s) return '';
  const am = pinyin(s, { type: 'array', toneSandhi: true, nonZh: 'removed' });
  const phan = tach(s, them);
  const truoc = (t) => { for (let x = t - 1; x >= 0; x--) if (laHan(phan[x][0])) return phan[x]; else return ''; return ''; };
  const sau = (t) => (phan[t + 1] && laHan(phan[t + 1][0]) ? phan[t + 1] : '');
  let k = 0, ra = '', dauCau = true;
  phan.forEach((w, t) => {
    if (!laHan(w[0])) {
      const d = DAU[w] != null ? DAU[w] : w;
      if (/[,.?!:;)”»…]/.test(d)) ra = ra.replace(/\s+$/, '') + d + ' ';
      else if (/[(“«]/.test(d)) ra += d;
      else if (/\s/.test(d)) { /* bo */ } else ra += d + ' ';
      if (/[.?!]/.test(d)) dauCau = true;
      return;
    }
    let p, ds = am.slice(k, k + w.length);
    k += w.length;
    if (RIENG[w]) p = RIENG[w];
    else if (them && them[w]) p = String(them[w]).split('/')[0].trim();
    else if (NHE[w]) p = NHE[w];
    else {
      // 儿 hoa: 一点儿 → yìdiǎnr, 玩儿 → wánr (tru 儿子, 女儿…)
      if (w.length > 1 && w.slice(-1) === '儿' && !ER_GOC.has(w)) { ds = ds.slice(0, -1); ds[ds.length - 1] += 'r'; }
      // hau to 子 doc nhe: 房子 fángzi, 桌子 zhuōzi
      if (w.length > 1 && w.slice(-1) === '子' && !ZI_DU.has(w)) ds[ds.length - 1] = 'zi';
      // tro tu 得 / 地
      // 得: sau chu ngu + 了/的/过/病 = dé (mắc, được: 她得了感冒); sau chu ngu + dong tu = děi (phải); con lai = de
      if (w === '得') {
        const tr = truoc(t), sa = sau(t), nx = phan[t + 1] || '';
        ds = [CHU_THE.has(tr) && /^[了的过病奖]/.test(nx) ? 'dé' : CHU_THE.has(tr) && !/^[很不太非真挺好]/.test(sa) ? 'děi' : 'de'];
      }
      // V得了 / V不了 o cuoi cau: 了 = liǎo (吃得了, 去不了)
      if (w === '了' && /^[得不]$/.test(truoc(t)) && !sau(t)) ds = ['liǎo'];
      // chu le hay bi doc sai: 好 dung rieng luon la hǎo (有什么好客气的), 咳 = ké
      if (w === '好') ds = ['hǎo'];
      if (w === '咳') ds = ['ké'];
      if (w === '地') {
        const tr = truoc(t), sa = sau(t);
        ds = [/^[上下里方图铁址球区点面]/.test(sa) || /[在这那土草本外当各满天]$/.test(tr) || !tr ? 'dì' : 'de'];
      }
      if (w.length === 4 && laAabb(w, 0)) p = ds[0] + ds[1] + '-' + ds[2] + ds[3];
      // am tiet bat dau bang a/o/e (khong dung dau tu) can dau cach am: 女儿 nǚ'ér, 平安 píng'ān
      else p = ds.map((x, i) => (i && /^[aāáǎàoōóǒòeēéěè]/.test(x) ? "'" + x : x)).join('');
    }
    // 儿 dung rieng sau mot tu (玩 + 儿): gan r vao am tiet truoc
    if (w === '儿' && truoc(t) && !RIENG[w]) { ra = ra.replace(/\s+$/, '') + 'r '; return; }
    if (dauCau || DUNG_HOA.has(w)) p = p.charAt(0).toUpperCase() + p.slice(1);
    dauCau = false;
    ra += p + ' ';
  });
  return ra.replace(/\s+([,.?!:;)”»])/g, '$1').replace(/([(“«])\s+/g, '$1').replace(/\s{2,}/g, ' ').trim();
}
module.exports = py;
module.exports.tach = tach;
