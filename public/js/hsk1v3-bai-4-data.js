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

var wuData = [
  {img:'✋',label:'五',py:'wǔ',letter:'A'},
  {img:'👦',label:'哥哥',py:'gēge',letter:'B'},
  {img:'🙋',label:'学生',py:'xuésheng',letter:'C'},
  {img:'👴',label:'六十岁',py:'liùshí suì',letter:'D'},
  {img:'🤱',label:'妈妈',py:'māma',letter:'E'},
  {img:'👩‍🏫',label:'老师',py:'lǎoshī',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 4: Ngữ âm + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-4/wb-yuyin.mp3',
      blocks: [
        { type: 'table', caption: 'Biến điệu 2 âm tiết thanh 3 liên tiếp (214+214 → 35+214)',
          headers: ['Từ/cụm từ', 'Pinyin'],
          rows: [
            ['你好', 'nǐ + hǎo → ní + hǎo'],
            ['哪里', 'nǎ + lǐ → ná + lǐ'],
            ['可以', 'kě + yǐ → ké + yǐ'],
            ['小语', 'Xiǎo + yǔ → Xiáo + yǔ'],
            ['很好', 'hěn + hǎo → hén + hǎo']
          ],
          note: 'Khi 2 âm tiết thanh 3 (ˇ) đứng liền nhau, âm tiết đầu đọc thành thanh 2, tức 214+214→35+214.' },
        { type: 'wordlist', caption: 'Đọc theo, chú ý biến điệu thanh 3',
          items: ['shuǐguǒ', 'nǐ hǎo', 'kěyǐ', 'nǎlǐ', 'hěn hǎo', 'suǒyǐ', 'qǐng nǐ', 'shǒubiǎo'] },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-4-wb/nihao.jpg', py:'nǐ hǎo', hz:'你好'},
          {img:'/images/hsk1v3-bai-4-wb/nali.jpg', py:'nǎlǐ', hz:'哪里'},
          {img:'/images/hsk1v3-bai-4-wb/xiaoyu.jpg', py:'Xiǎoyǔ', hz:'小语'},
          {img:'/images/hsk1v3-bai-4-wb/shuiguo.jpg', py:'shuǐguǒ', hz:'水果'}
        ] },
        { type: 'table', caption: 'Thanh nhẹ (轻声) — cùng từ nhưng khác nghĩa khi đọc thanh nhẹ',
          headers: ['Từ', 'Có thanh điệu rõ', 'Đọc thanh nhẹ'],
          rows: [
            ['东西', 'dōngxī — phương hướng, đông và tây', 'dōngxi — đồ vật'],
            ['买卖', 'mǎi mài — mua và bán', 'mǎimai — việc buôn bán'],
            ['孙子', 'Sūnzǐ — tên riêng, nhà quân sự cổ đại TQ', 'sūnzi — cháu trai']
          ],
          note: 'Ngoài 4 thanh điệu cơ bản, một số âm tiết tiếng Trung đọc nhẹ và ngắn, gọi là thanh nhẹ (轻声), thường không đánh dấu thanh. Ví dụ: jiǎozi, bàba.' },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-4-wb/mama.jpg', py:'māma', hz:'妈妈'},
          {img:'/images/hsk1v3-bai-4-wb/baba.jpg', py:'bàba', hz:'爸爸'},
          {img:'/images/hsk1v3-bai-4-wb/yizi.jpg', py:'yǐzi', hz:'椅子'},
          {img:'/images/hsk1v3-bai-4-wb/jiaozi.jpg', py:'jiǎozi', hz:'饺子'}
        ] },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-4-wb/xiexie.jpg', py:'xièxie', hz:'谢谢'},
          {img:'/images/hsk1v3-bai-4-wb/yifu.jpg', py:'yīfu', hz:'衣服'},
          {img:'/images/hsk1v3-bai-4-wb/piaoliang.jpg', py:'piàoliang', hz:'漂亮'},
          {img:'/images/hsk1v3-bai-4-wb/zaoshang.jpg', py:'zǎoshang', hz:'早上'}
        ] }
      ]
    },
    {
      title: 'Nghe và đọc luyện tập',
      audio: '/audio/hsk1v3-bai-4/wb-tingdu.mp3',
      blocks: [
        { type: 'wordlist', caption: 'Nghe và chọn âm tiết nghe được, đọc to',
          items: [['pā', 'bā'], ['zì', 'cí'], ['náng', 'láng'], ['jǔ', 'qǔ'], ['mén', 'méng'], ['rù', 'lù'], ['kè', 'rè'], ['qīn', 'qīng']] },
        { type: 'wordlist', caption: 'Nghe và đọc theo, chú ý biến điệu thanh 3',
          items: ['nǐ hǎo', 'kěyǐ', 'nǎlǐ', 'shuǐguǒ', 'shǒubiǎo', 'suǒyǐ', 'pěngchǎng', 'hǎojiǔ', 'wǎndiǎn', 'liǎojiě', 'xǐzǎo', 'zhíyóu'] },
        { type: 'wordlist', caption: 'Nghe và đọc theo, chú ý phát âm thanh nhẹ',
          items: ['bāozi', 'xièxie', 'piányi', 'dìdi', 'piàoliang', 'méi guānxi', 'duìbuqǐ', 'rènshi'] },
        { type: 'wordlist', caption: 'Nghe và phân biệt thanh nhẹ với không thanh nhẹ, đọc theo',
          items: [['Sūnzǐ', 'sūnzi'], ['dōngxī', 'dōngxi'], ['yùnqi', 'yùnqi'], ['Lǎozǐ', 'lǎozi'], ['dìfāng', 'dìfang'], ['mǎmǎhūhū', 'māhu']] }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q1c.jpg'}
            ], answer: 'B' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q2c.jpg'}
            ], answer: 'C' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q3c.jpg'}
            ], answer: 'B' },
            { n: 4, options: [
              {key:'A', text:'十人', py:'shí rén'},
              {key:'B', text:'20个', py:'èrshí gè'},
              {key:'C', text:'三口人', py:'sān kǒu rén'}
            ], answer: 'B' },
            { n: 5, options: [
              {key:'A', text:'大', py:'dà'},
              {key:'B', text:'12岁', py:'shí\'èr suì'},
              {key:'C', text:'两千', py:'liǎngqiān'}
            ], answer: 'B' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'中国人', py:'Zhōngguó rén'},
              {key:'B', text:'泰国人', py:'Tàiguó rén'},
              {key:'C', text:'法国人', py:'Fǎguó rén'}
            ], answer: 'A' },
            { n: 10, options: [
              {key:'A', text:'安妮', py:'Ānnī'},
              {key:'B', text:'王一飞', py:'Wáng Yīfēi'},
              {key:'C', text:'白家月', py:'Bái Jiāyuè'}
            ], answer: 'C' }
          ],
          reading: [
            { n: 11, prompt: '老师，您好！', promptPy: 'Lǎoshī, nín hǎo!', options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 12, prompt: '我家有四口人。', promptPy: 'Wǒ jiā yǒu sì kǒu rén.', options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 13, prompt: '我哥哥今年20岁。', promptPy: 'Wǒ gēge jīnnián 20 suì.', options: [
              {key:'A', img:'/images/hsk1v3-bai-4-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-4-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-4-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-4-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 14, prompt: '她是谁？', promptPy: 'Tā shì shéi?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'他今年5岁。', py:'Tā jīnnián 5 suì.'},
              {key:'C', text:'我女朋友。', py:'Wǒ nǚpéngyou.'},
              {key:'D', text:'是的。', py:'Shì de.'}
            ], answer: 'C' },
            { n: 15, prompt: '你是法国人吗？', promptPy: 'Nǐ shì Fǎguó rén ma?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'他今年5岁。', py:'Tā jīnnián 5 suì.'},
              {key:'C', text:'我女朋友。', py:'Wǒ nǚpéngyou.'},
              {key:'D', text:'是的。', py:'Shì de.'}
            ], answer: 'D' },
            { n: 16, prompt: '您儿子多大？', promptPy: 'Nín érzi duō dà?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'他今年5岁。', py:'Tā jīnnián 5 suì.'},
              {key:'C', text:'我女朋友。', py:'Wǒ nǚpéngyou.'},
              {key:'D', text:'是的。', py:'Shì de.'}
            ], answer: 'B' },
            { n: 17, prompt: '她工作很（　）。', promptPy: 'Tā gōngzuò hěn ( ).', options: [
              {key:'A', text:'想', py:'xiǎng'},
              {key:'B', text:'忙', py:'máng'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：你们好吗？\n女：很好，我们很（　）你。', promptPy: 'Nǐmen hǎo ma? / Hěn hǎo, wǒmen hěn ( ) nǐ.', options: [
              {key:'A', text:'想', py:'xiǎng'},
              {key:'B', text:'忙', py:'máng'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '我家有三口人，爸爸、妈妈和我。\n★说话人家里有：', promptPy: 'Wǒ jiā yǒu sān kǒu rén, bàba, māma hé wǒ.', options: [
              {key:'A', text:'姐姐', py:'jiějie'},
              {key:'B', text:'三口人', py:'sān kǒu rén'},
              {key:'C', text:'四口人', py:'sì kǒu rén'}
            ], answer: 'B' },
            { n: 20, prompt: '她是法国人，我不是。\n★"她"是：', promptPy: 'Tā shì Fǎguó rén, wǒ bú shì.', options: [
              {key:'A', text:'法国人', py:'Fǎguó rén'},
              {key:'B', text:'中国人', py:'Zhōngguó rén'},
              {key:'C', text:'泰国人', py:'Tàiguó rén'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'刘明和王一雪聊天 · Hỏi thăm công việc',
   preQuiz:[
     {q:'一飞忙不忙？',opts:['很忙','不忙','不知道'],ans:0},
     {q:'她有多少个学生？',opts:['十个','二十个','三十个'],ans:1},
   ],
   lines:[
     {sp:0,zh:'一飞忙吗？',py:'Yīfēi máng ma?',vn:'Nhất Phi có bận không?'},
     {sp:1,zh:'她很忙。',py:'Tā hěn máng.',vn:'Dì ấy rất bận.'},
     {sp:0,zh:'她有多少个学生？',py:'Tā yǒu duōshao gè xuésheng?',vn:'Dì ấy có bao nhiêu học sinh?'},
     {sp:1,zh:'她有二十个学生。',py:'Tā yǒu èrshí gè xuésheng.',vn:'Dì ấy có hai mươi học sinh.'},
   ]},
  {scene:'王一雪和杨同乐聊家庭 · Hỏi thăm gia đình',
   preQuiz:[
     {q:'杨同乐有哥哥吗？',opts:['没有哥哥','有一个哥哥','有两个哥哥'],ans:0},
     {q:'杨同乐家有几口人？',opts:['三口人','四口人','五口人'],ans:1},
   ],
   lines:[
     {sp:0,zh:'我有两个哥哥，你呢？',py:'Wǒ yǒu liǎng gè gēge, nǐ ne?',vn:'Chị có hai anh trai. Em thì sao?'},
     {sp:1,zh:'我没有哥哥。',py:'Wǒ méiyǒu gēge.',vn:'Em không có anh trai.'},
     {sp:0,zh:'你家有几口人？',py:'Nǐ jiā yǒu jǐ kǒu rén?',vn:'Nhà em có mấy người?'},
     {sp:1,zh:'我家有四口人，爸爸、妈妈、妹妹和我。',py:'Wǒ jiā yǒu sì kǒu rén, bàba, māma, mèimei hé wǒ.',vn:'Nhà em có bốn người: bố, mẹ, em gái và em.'},
   ]},
  {scene:'杨同乐遇见王一雪母子 · Hỏi thăm con cái',
   preQuiz:[
     {q:'王一雪有几个孩子？',opts:['一个','两个','三个'],ans:1},
     {q:'她儿子今年几岁？',opts:['三岁','五岁','七岁'],ans:1},
     {q:'她女儿今年多大？',opts:['十岁','十二岁','十五岁'],ans:1},
   ],
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
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

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
