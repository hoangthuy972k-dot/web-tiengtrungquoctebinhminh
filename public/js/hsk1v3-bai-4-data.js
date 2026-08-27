// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 4: 我有两个孩子
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'有',py:'yǒu',pos:'Động từ',vn:'có',em:'✋',lesson:1,
   ex_zh:'她有二十个学生。',ex_py:'Tā yǒu èrshí gè xuésheng.',ex_vn:'Cô ấy có hai mươi học sinh.',
   exList:[
     {zh:'她有二十个学生。',py:'Tā yǒu èrshí gè xuésheng.',vn:'Cô ấy có hai mươi học sinh.'},
     {zh:'她有多少个学生？',py:'Tā yǒu duōshao gè xuésheng?',vn:'Cô ấy có bao nhiêu học sinh?'},
   ],
   hanzi:[
     {c:'有',p:'yǒu',type:'半包围结构 · Bán bao vây',st:6,ord:'ナ(biến thể) → 月(nhục)',rad:'月 (nhục – thịt)',mean:'có',
      tip:'Bàn tay ナ cầm miếng thịt 月 → sở hữu vật gì đó = CÓ.',
      cf:'冇 (mǎo – phương ngữ "không có")',w:'有学生 / 没有'},
   ]},
  {n:2,zh:'多少',py:'duōshao',pos:'Đại từ',vn:'bao nhiêu',em:'❓',lesson:1,
   ex_zh:'她有多少个学生？',ex_py:'Tā yǒu duōshao gè xuésheng?',ex_vn:'Cô ấy có bao nhiêu học sinh?',
   exList:[
     {zh:'她有多少个学生？',py:'Tā yǒu duōshao gè xuésheng?',vn:'Cô ấy có bao nhiêu học sinh?'},
   ]},
  {n:3,zh:'个',py:'gè',pos:'Lượng từ',vn:'(dùng chung cho nhiều danh từ)',em:'🔢',lesson:1,
   ex_zh:'她有二十个学生。',ex_py:'Tā yǒu èrshí gè xuésheng.',ex_vn:'Cô ấy có hai mươi học sinh.',
   exList:[
     {zh:'她有二十个学生。',py:'Tā yǒu èrshí gè xuésheng.',vn:'Cô ấy có hai mươi học sinh.'},
     {zh:'我有两个哥哥。',py:'Wǒ yǒu liǎng gè gēge.',vn:'Tôi có hai anh trai.'},
   ]},
  {n:4,zh:'哥哥',py:'gēge',pos:'Danh từ',vn:'anh trai',em:'👦',lesson:2,
   ex_zh:'我有两个哥哥，你呢？',ex_py:'Wǒ yǒu liǎng gè gēge, nǐ ne?',ex_vn:'Chị có hai anh trai, em thì sao?',
   exList:[
     {zh:'我有两个哥哥，你呢？',py:'Wǒ yǒu liǎng gè gēge, nǐ ne?',vn:'Chị có hai anh trai, em thì sao?'},
     {zh:'我没有哥哥。',py:'Wǒ méiyǒu gēge.',vn:'Em không có anh trai.'},
   ]},
  {n:5,zh:'呢',py:'ne',pos:'Trợ từ',vn:'thì sao (dùng ở cuối câu hỏi)',em:'❔',lesson:2,
   ex_zh:'我有两个哥哥，你呢？',ex_py:'Wǒ yǒu liǎng gè gēge, nǐ ne?',ex_vn:'Chị có hai anh trai, em thì sao?',
   exList:[
     {zh:'我有两个哥哥，你呢？',py:'Wǒ yǒu liǎng gè gēge, nǐ ne?',vn:'Chị có hai anh trai, em thì sao?'},
     {zh:'我叫白家月，你呢？',py:'Wǒ jiào Bái Jiāyuè, nǐ ne?',vn:'Mình tên là Bạch Gia Nguyệt, còn bạn?'},
   ]},
  {n:6,zh:'没有',py:'méiyǒu',pos:'Động từ',vn:'không có',em:'🚫',lesson:2,
   ex_zh:'我没有哥哥。',ex_py:'Wǒ méiyǒu gēge.',ex_vn:'Em không có anh trai.',
   exList:[
     {zh:'我没有哥哥。',py:'Wǒ méiyǒu gēge.',vn:'Em không có anh trai.'},
   ]},
  {n:7,zh:'家',py:'jiā',pos:'Danh từ',vn:'gia đình, nhà',em:'🏠',lesson:2,
   ex_zh:'你家有几口人？',ex_py:'Nǐ jiā yǒu jǐ kǒu rén?',ex_vn:'Nhà em có mấy người?',
   exList:[
     {zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà em có mấy người?'},
     {zh:'我家有四口人。',py:'Wǒ jiā yǒu sì kǒu rén.',vn:'Nhà em có bốn người.'},
   ],
   hanzi:[
     {c:'家',p:'jiā',type:'上下结构 · Trên-dưới',st:10,ord:'宀(miên) trên → 豕(thỉ) dưới',rad:'宀 (miên – mái nhà)',mean:'nhà, gia đình',
      tip:'Mái nhà 宀 + 豕(con lợn) → thời xưa nuôi lợn dưới nhà là dấu hiệu có một GIA ĐÌNH ổn định.',
      cf:'豪 (háo – "hào kiệt", cũng có 豕")',w:'我家 / 家人'},
   ]},
  {n:8,zh:'几',py:'jǐ',pos:'Đại từ',vn:'mấy',em:'🔟',lesson:2,
   ex_zh:'你家有几口人？',ex_py:'Nǐ jiā yǒu jǐ kǒu rén?',ex_vn:'Nhà em có mấy người?',
   exList:[
     {zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà em có mấy người?'},
     {zh:'您儿子几岁？',py:'Nín érzi jǐ suì?',vn:'Con trai chị mấy tuổi?'},
   ]},
  {n:9,zh:'口',py:'kǒu',pos:'Lượng từ',vn:'(đếm người trong gia đình)',em:'👪',lesson:2,
   ex_zh:'我家有四口人。',ex_py:'Wǒ jiā yǒu sì kǒu rén.',ex_vn:'Nhà em có bốn người.',
   exList:[
     {zh:'我家有四口人。',py:'Wǒ jiā yǒu sì kǒu rén.',vn:'Nhà em có bốn người.'},
   ]},
  {n:10,zh:'爸爸',py:'bàba',pos:'Danh từ',vn:'bố, ba',em:'👨',lesson:2,
   ex_zh:'我家有四口人，爸爸、妈妈、妹妹和我。',ex_py:'Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.',ex_vn:'Nhà em có bốn người: bố, mẹ, em gái và em.',
   exList:[
     {zh:'我家有四口人，爸爸、妈妈、妹妹和我。',py:'Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.',vn:'Nhà em có bốn người: bố, mẹ, em gái và em.'},
   ]},
  {n:11,zh:'妈妈',py:'māma',pos:'Danh từ',vn:'mẹ',em:'👩',lesson:2,
   ex_zh:'我家有四口人，爸爸、妈妈、妹妹和我。',ex_py:'Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.',ex_vn:'Nhà em có bốn người: bố, mẹ, em gái và em.',
   exList:[
     {zh:'我家有四口人，爸爸、妈妈、妹妹和我。',py:'Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.',vn:'Nhà em có bốn người: bố, mẹ, em gái và em.'},
   ]},
  {n:12,zh:'妹妹',py:'mèimei',pos:'Danh từ',vn:'em gái',em:'👧',lesson:2,
   ex_zh:'我家有四口人，爸爸、妈妈、妹妹和我。',ex_py:'Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.',ex_vn:'Nhà em có bốn người: bố, mẹ, em gái và em.',
   exList:[
     {zh:'我家有四口人，爸爸、妈妈、妹妹和我。',py:'Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.',vn:'Nhà em có bốn người: bố, mẹ, em gái và em.'},
   ]},
  {n:13,zh:'和',py:'hé',pos:'Liên từ',vn:'và',em:'➕',lesson:2,
   ex_zh:'爸爸、妈妈、妹妹和我。',ex_py:'Bàba, māma, mèimei hé wǒ.',ex_vn:'Bố, mẹ, em gái và em.',
   exList:[
     {zh:'爸爸、妈妈、妹妹和我。',py:'Bàba, māma, mèimei hé wǒ.',vn:'Bố, mẹ, em gái và em.'},
   ]},
  {n:14,zh:'儿子',py:'érzi',pos:'Danh từ',vn:'con trai',em:'👦',lesson:3,
   ex_zh:'我有两个孩子，一个儿子，一个女儿。',ex_py:'Wǒ yǒu liǎng gè háizi, yí gè érzi, yí gè nǚ\'ér.',ex_vn:'Tôi có hai con, một con trai, một con gái.',
   exList:[
     {zh:'我有两个孩子，一个儿子，一个女儿。',py:'Wǒ yǒu liǎng gè háizi, yí gè érzi, yí gè nǚ\'ér.',vn:'Tôi có hai con, một con trai, một con gái.'},
     {zh:'这是您儿子吗？',py:'Zhè shì nín érzi ma?',vn:'Đây là con trai chị phải không?'},
   ]},
  {n:15,zh:'孩子',py:'háizi',pos:'Danh từ',vn:'con, trẻ con',em:'🧒',lesson:3,
   ex_zh:'我有两个孩子。',ex_py:'Wǒ yǒu liǎng gè háizi.',ex_vn:'Tôi có hai con.',
   exList:[
     {zh:'我有两个孩子。',py:'Wǒ yǒu liǎng gè háizi.',vn:'Tôi có hai con.'},
   ]},
  {n:16,zh:'女儿',py:'nǚ\'ér',pos:'Danh từ',vn:'con gái',em:'👧',lesson:3,
   ex_zh:'您女儿多大？',ex_py:'Nín nǚ\'ér duō dà?',ex_vn:'Con gái chị bao nhiêu tuổi?',
   exList:[
     {zh:'您女儿多大？',py:'Nín nǚ\'ér duō dà?',vn:'Con gái chị bao nhiêu tuổi?'},
   ]},
  {n:17,zh:'岁',py:'suì',pos:'Lượng từ',vn:'tuổi',em:'🎂',lesson:3,
   ex_zh:'他今年五岁。',ex_py:'Tā jīnnián wǔ suì.',ex_vn:'Cháu năm nay năm tuổi.',
   exList:[
     {zh:'他今年五岁。',py:'Tā jīnnián wǔ suì.',vn:'Cháu năm nay năm tuổi.'},
     {zh:'您儿子几岁？',py:'Nín érzi jǐ suì?',vn:'Con trai chị mấy tuổi?'},
   ]},
  {n:18,zh:'他',py:'tā',pos:'Đại từ',vn:'anh ấy, cậu ấy, ông ấy',em:'👨',lesson:3,
   ex_zh:'他今年五岁。',ex_py:'Tā jīnnián wǔ suì.',ex_vn:'Cháu năm nay năm tuổi.',
   exList:[
     {zh:'他今年五岁。',py:'Tā jīnnián wǔ suì.',vn:'Cháu năm nay năm tuổi.'},
   ]},
  {n:19,zh:'今年',py:'jīnnián',pos:'Danh từ',vn:'năm nay',em:'📅',lesson:3,
   ex_zh:'他今年五岁。',ex_py:'Tā jīnnián wǔ suì.',ex_vn:'Cháu năm nay năm tuổi.',
   exList:[
     {zh:'他今年五岁。',py:'Tā jīnnián wǔ suì.',vn:'Cháu năm nay năm tuổi.'},
     {zh:'她今年十二。',py:'Tā jīnnián shí\'èr.',vn:'Cháu năm nay mười hai tuổi.'},
   ]},
  {n:20,zh:'多',py:'duō',pos:'Đại từ',vn:'bao nhiêu (phó từ chỉ mức độ)',em:'📏',lesson:3,
   ex_zh:'您女儿多大？',ex_py:'Nín nǚ\'ér duō dà?',ex_vn:'Con gái chị bao nhiêu tuổi?',
   exList:[
     {zh:'您女儿多大？',py:'Nín nǚ\'ér duō dà?',vn:'Con gái chị bao nhiêu tuổi?'},
   ]},
  {n:21,zh:'大',py:'dà',pos:'Tính từ',vn:'lớn (chỉ tuổi tác)',em:'📈',lesson:3,
   ex_zh:'您女儿多大？',ex_py:'Nín nǚ\'ér duō dà?',ex_vn:'Con gái chị bao nhiêu tuổi?',
   exList:[
     {zh:'您女儿多大？',py:'Nín nǚ\'ér duō dà?',vn:'Con gái chị bao nhiêu tuổi? (dùng 多大 để hỏi tuổi người trên 10 tuổi, khác 几岁 dùng cho trẻ dưới 10 tuổi)'},
   ]},
];

const wuData = [
  {img:'✋',label:'五',py:'wǔ',letter:'A'},
  {img:'👦',label:'哥哥',py:'gēge',letter:'B'},
  {img:'🙋',label:'学生',py:'xuésheng',letter:'C'},
  {img:'👴',label:'六十岁',py:'liùshí suì',letter:'D'},
  {img:'🤱',label:'妈妈',py:'māma',letter:'E'},
  {img:'👩‍🏫',label:'老师',py:'lǎoshī',letter:'F'},
];

var dialogData = [
  {scene:'刘明和王一雪聊天 · Hỏi thăm công việc',
   lines:[
     {sp:0,zh:'一飞忙吗？',py:'Yīfēi máng ma?',vn:'Nhất Phi có bận không?'},
     {sp:1,zh:'她很忙。',py:'Tā hěn máng.',vn:'Dì ấy rất bận.'},
     {sp:0,zh:'她有多少个学生？',py:'Tā yǒu duōshao gè xuésheng?',vn:'Dì ấy có bao nhiêu học sinh?'},
     {sp:1,zh:'她有二十个学生。',py:'Tā yǒu èrshí gè xuésheng.',vn:'Dì ấy có hai mươi học sinh.'},
   ]},
  {scene:'王一雪和杨同乐聊家庭 · Hỏi thăm gia đình',
   lines:[
     {sp:0,zh:'我有两个哥哥，你呢？',py:'Wǒ yǒu liǎng gè gēge, nǐ ne?',vn:'Chị có hai anh trai. Em thì sao?'},
     {sp:1,zh:'我没有哥哥。',py:'Wǒ méiyǒu gēge.',vn:'Em không có anh trai.'},
     {sp:0,zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà em có mấy người?'},
     {sp:1,zh:'我家有四口人，爸爸、妈妈、妹妹和我。',py:'Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.',vn:'Nhà em có bốn người: bố, mẹ, em gái và em.'},
   ]},
  {scene:'杨同乐遇见王一雪母子 · Hỏi thăm con cái',
   lines:[
     {sp:1,zh:'这是您儿子吗？',py:'Zhè shì nín érzi ma?',vn:'Đây là con trai chị phải không?'},
     {sp:0,zh:'是的。我有两个孩子，一个儿子，一个女儿。',py:'Shì de. Wǒ yǒu liǎng gè háizi, yí gè érzi, yí gè nǚ\'ér.',vn:'Đúng vậy. Chị có hai con, một con trai và một con gái.'},
     {sp:1,zh:'您儿子几岁？',py:'Nín érzi jǐ suì?',vn:'Con trai chị mấy tuổi rồi?'},
     {sp:0,zh:'他今年五岁。',py:'Tā jīnnián wǔ suì.',vn:'Cháu năm nay năm tuổi.'},
     {sp:1,zh:'您女儿多大？',py:'Nín nǚ\'ér duō dà?',vn:'Con gái chị bao nhiêu tuổi?'},
     {sp:0,zh:'她今年十二。',py:'Tā jīnnián shí\'èr.',vn:'Cháu năm nay mười hai tuổi.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'多', right:'少'},
  {left:'没', right:'有'},
  {left:'爸', right:'爸'},
  {left:'儿', right:'子'},
  {left:'女', right:'儿'},
  {left:'今', right:'年'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI dùng từ vựng bài học
// ══════════════════════════════════════════
var listenData = [
  {audio:'我有一个哥哥，没有姐姐。我家有三口人，爸爸、妈妈和我。',
   questions:[
     {q:'说话人有哥哥吗？',opts:['有一个哥哥','没有哥哥','有两个哥哥','不知道'],ans:0},
     {q:'说话人家有几口人？',opts:['三口人','四口人','两口人','五口人'],ans:0},
   ]},
  {audio:'我的儿子今年八岁，我的女儿今年三岁，她很可爱。',
   questions:[
     {q:'说话人的儿子今年几岁？',opts:['八岁','三岁','十岁','五岁'],ans:0},
     {q:'说话人的女儿今年几岁？',opts:['三岁','八岁','十二岁','六岁'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ (dựa theo bài tập tổng hợp thật trong sách)
// ══════════════════════════════════════════
var fillData = [
  {pre:'王一飞老师有', blank:'二十', post:'个学生。', hint:'(20)', ans:'二十'},
  {pre:'杨同乐家有四', blank:'口', post:'人。', hint:'(lượng từ đếm người)', ans:'口'},
  {pre:'王一雪：我有两个孩子，你', blank:'呢', post:'？ 杨同乐：我', ans:'呢'},
  {pre:'杨同乐：我', blank:'没', post:'孩子。', hint:'(không — phủ định của 有)', ans:'没'},
  {pre:'杨同乐：您女儿今年多', blank:'大', post:'？', hint:'(hỏi tuổi người lớn)', ans:'大'},
  {pre:'您儿子', blank:'几', post:'岁？', hint:'(mấy — hỏi tuổi trẻ em)', ans:'几'},
  {pre:'我家有四口人，爸爸、妈妈、妹妹', blank:'和', post:'我。', hint:'(và)', ans:'和'},
  {pre:'我有两个孩子，一个儿子，一个', blank:'女儿', post:'。', hint:'(con gái)', ans:'女儿'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['她','有','二十','个','学生','。'], ans:'她有二十个学生。', audio:'她有二十个学生。'},
  {words:['我','没有','哥哥','。'], ans:'我没有哥哥。', audio:'我没有哥哥。'},
  {words:['你','家','有','几','口','人','？'], ans:'你家有几口人？', audio:'你家有几口人？'},
  {words:['我','有','两个','孩子','。'], ans:'我有两个孩子。', audio:'我有两个孩子。'},
  {words:['他','今年','五','岁','。'], ans:'他今年五岁。', audio:'他今年五岁。'},
  {words:['您','女儿','多','大','？'], ans:'您女儿多大？', audio:'您女儿多大？'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'Phủ định của "有" (có) là gì?', opts:['没/没有', '不有', '不是', '没是'], ans:0},
  {q:'"你家有几口人？" — "口" ở đây dùng để làm gì?', opts:['Lượng từ đếm người trong gia đình', 'Lượng từ đếm sách', 'Danh từ chỉ cái miệng', 'Động từ ăn uống'], ans:0},
  {q:'"我有两个哥哥，你呢？" — "呢" dùng để làm gì?', opts:['Hỏi lại về tình huống tương tự đã nêu', 'Phủ định câu trước', 'Kết thúc câu trần thuật', 'Nhấn mạnh số nhiều'], ans:0},
  {q:'Hỏi tuổi một em bé dưới 10 tuổi, dùng cụm từ nào?', opts:['几岁', '多大', '多少岁', '几年'], ans:0},
  {q:'Hỏi tuổi một người trên 10 tuổi, dùng cụm từ nào?', opts:['多大', '几岁', '几年', '多少'], ans:0},
  {q:'Số "2" khi đứng trước lượng từ (như 个) được đọc là gì?', opts:['两 (liǎng)', '二 (èr)', 'Cả hai đều được, không phân biệt', '贰 (đại tự)'], ans:0},
  {q:'"我家有四口人，爸爸、妈妈、妹妹和我" — có bao nhiêu người trong câu?', opts:['4', '3', '5', '2'], ans:0},
  {q:'"孩子" và "儿子" khác nhau thế nào?', opts:['孩子 = con nói chung, 儿子 = con trai cụ thể', 'Không khác gì cả', '孩子 chỉ dùng cho con gái', '儿子 chỉ dùng số nhiều'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："你家有几口人？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Nhà bạn có mấy người?" Bạn trả lời thế nào?',
     hint: '我家有……口人。', sample: '我家有四口人，爸爸、妈妈、妹妹和我。', sample_vn: 'Nhà tôi có bốn người: bố, mẹ, em gái và tôi.',
     note: 'Cấu trúc "我家有 + số + 口人" dùng để nói số thành viên trong gia đình.'},
    {q_zh: '朋友问你有没有哥哥/姐姐，你怎么回答？', q_vn: 'Bạn của bạn hỏi bạn có anh/chị không, bạn trả lời thế nào?',
     hint: '我有/没有……', sample: '我没有哥哥，我有一个姐姐。', sample_vn: 'Tôi không có anh trai, tôi có một chị gái.',
     note: '没有 là dạng phủ định của 有, dùng để nói "không có".'},
    {q_zh: '有人问你孩子多大了，你怎么回答？', q_vn: 'Có người hỏi con bạn bao nhiêu tuổi rồi, bạn trả lời thế nào?',
     hint: '他/她今年……岁。', sample: '我儿子今年五岁，我女儿今年十二岁。', sample_vn: 'Con trai tôi năm nay năm tuổi, con gái tôi năm nay mười hai tuổi.',
     note: 'Trẻ dưới 10 tuổi hỏi 几岁, trên 10 tuổi hỏi 多大.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cô ấy có bao nhiêu học sinh? — Cô ấy có hai mươi học sinh.', zh:'她有多少个学生？——她有二十个学生。', py:'Tā yǒu duōshao gè xuésheng? — Tā yǒu èrshí gè xuésheng.'},
  {vi:'Nhà em có mấy người? — Nhà em có bốn người: bố, mẹ, em gái và em.', zh:'你家有几口人？——我家有四口人，爸爸、妈妈、妹妹和我。', py:'Nǐ jiā yǒu jǐ kǒu rén? — Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.'},
  {vi:'Tôi có hai con, một con trai, một con gái.', zh:'我有两个孩子，一个儿子，一个女儿。', py:'Wǒ yǒu liǎng gè háizi, yí gè érzi, yí gè nǚ\'ér.'},
  {vi:'Con trai chị mấy tuổi rồi? — Cháu năm nay năm tuổi.', zh:'您儿子几岁？——他今年五岁。', py:'Nín érzi jǐ suì? — Tā jīnnián wǔ suì.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tôi có một anh trai, tôi không có em gái.', zh:'我有一个哥哥，我没有妹妹。', py:'Wǒ yǒu yí gè gēge, wǒ méiyǒu mèimei.'},
  {vi:'Giáo viên của tôi có bao nhiêu học sinh, bạn biết không?', zh:'我老师有多少个学生，你知道吗？', py:'Wǒ lǎoshī yǒu duōshao gè xuésheng, nǐ zhīdào ma?'},
  {vi:'Con gái chị bao nhiêu tuổi rồi? — Cháu năm nay mười hai tuổi.', zh:'您女儿多大了？——她今年十二。', py:'Nín nǚ\'ér duō dà le? — Tā jīnnián shí\'èr.'},
  {vi:'Nhà tôi có ba người: bố, mẹ và tôi, không có anh chị em.', zh:'我家有三口人，爸爸、妈妈和我，没有哥哥姐姐。', py:'Wǒ jiā yǒu sān kǒu rén, bàba, māma hé wǒ, méiyǒu gēge jiějie.'},
];
