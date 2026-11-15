// ══════════════════════════════════════════
// DATA — YCT Bài 5: 你几岁？
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'几岁',py:'jǐ suì',pos:'Cụm từ',vn:'mấy tuổi (hỏi trẻ em)', hv: 'kỉ tuế',em:'🔢',lesson:1,
   ex_zh:'你几岁？',ex_py:'Nǐ jǐ suì?',ex_vn:'Bạn mấy tuổi?',
   exList:[{zh:'你几岁？',py:'Nǐ jǐ suì?',vn:'Bạn mấy tuổi?'},{zh:'你妹妹几岁？',py:'Nǐ mèimei jǐ suì?',vn:'Em gái bạn mấy tuổi?'}],
   hanzi:[]},
  {n:2,zh:'岁',py:'suì',pos:'Lượng từ',vn:'tuổi', hv: 'tuế',em:'🎂',lesson:1,
   ex_zh:'我六岁。',ex_py:'Wǒ liù suì.',ex_vn:'Mình sáu tuổi.',
   exList:[{zh:'我六岁。',py:'Wǒ liù suì.',vn:'Mình sáu tuổi.'},{zh:'我妹妹三岁。',py:'Wǒ mèimei sān suì.',vn:'Em gái tớ ba tuổi.'}],
   hanzi:[
     {c:'岁',p:'suì',type:'上下结构 · Trên-dưới',st:6,ord:'山(biến thể) trên → 夕(tịch) dưới',rad:'山 (sơn – núi, biến thể)',mean:'tuổi',
      tip:'Xưa dùng để đếm số mùa/năm đã trải qua như ngọn núi tích tuổi theo thời gian → TUỔI.',
      cf:'出 (chū – "ra")',w:'几岁 / 六岁'},
   ]},
  {n:3,zh:'多大',py:'duō dà',pos:'Cụm từ',vn:'bao nhiêu tuổi (hỏi người lớn hơn)', hv: 'đa đại',em:'❓',lesson:2,
   ex_zh:'你哥哥多大？',ex_py:'Nǐ gēge duō dà?',ex_vn:'Anh trai bạn bao nhiêu tuổi?',
   exList:[{zh:'你哥哥多大？',py:'Nǐ gēge duō dà?',vn:'Anh trai bạn bao nhiêu tuổi?'},{zh:'你姐姐多大？',py:'Nǐ jiějie duō dà?',vn:'Chị gái bạn bao nhiêu tuổi?'}],
   hanzi:[]},
  {n:4,zh:'多',py:'duō',pos:'Phó từ',vn:'nhiều, bao nhiêu', hv: 'đa',em:'📊',lesson:2,
   ex_zh:'你爸爸多大？',ex_py:'Nǐ bàba duō dà?',ex_vn:'Bố bạn bao nhiêu tuổi?',
   exList:[
     {zh:'你爸爸多大？',py:'Nǐ bàba duō dà?',vn:'Bố bạn bao nhiêu tuổi?'},
     {zh:'你妈妈多大？',py:'Nǐ māma duō dà?',vn:'Mẹ bạn bao nhiêu tuổi?'},
   ],
   hanzi:[
     {c:'多',p:'duō',type:'上下结构 · Trên-dưới',st:6,ord:'夕(tịch) trên → 夕(tịch) dưới',rad:'夕 (tịch – buổi tối)',mean:'nhiều, bao nhiêu',
      tip:'Hai chữ 夕(buổi tối) chồng lên nhau → NHIỀU đêm trôi qua = NHIỀU, BAO NHIÊU.',
      cf:'夜 (yè – "đêm")',w:'多大'},
   ]},
  {n:5,zh:'大',py:'dà',pos:'Tính từ',vn:'to, lớn', hv: 'đại',em:'📏',lesson:2,
   ex_zh:'我家很大。',ex_py:'Wǒ jiā hěn dà.',ex_vn:'Nhà mình rất to.',
   exList:[
     {zh:'我家很大。',py:'Wǒ jiā hěn dà.',vn:'Nhà mình rất to.'},
     {zh:'我家不大。',py:'Wǒ jiā bú dà.',vn:'Nhà tớ không to.'},
   ],
   hanzi:[
     {c:'大',p:'dà',type:'独体字 · Tượng hình',st:3,ord:'一→ノ→㇏',rad:'大 (đại – tự thành bộ)',mean:'to, lớn',
      tip:'Hình người dang rộng tay chân → TO LỚN.',
      cf:'太 (tài – "quá")',w:'多大'},
   ]},
  {n:6,zh:'也',py:'yě',pos:'Phó từ',vn:'cũng', hv: 'dã',em:'➕',lesson:1,
   ex_zh:'他也六岁。',ex_py:'Tā yě liù suì.',ex_vn:'Anh ấy cũng sáu tuổi.',
   exList:[{zh:'他也六岁。',py:'Tā yě liù suì.',vn:'Anh ấy cũng sáu tuổi.'},{zh:'我也有妹妹。',py:'Wǒ yě yǒu mèimei.',vn:'Tớ cũng có em gái.'}],
   hanzi:[
     {c:'也',p:'yě',type:'独体字 · Chữ đơn',st:3,ord:'乛→𠃊→乙',rad:'乙 (ất)',mean:'cũng',
      tip:'Chữ cổ vốn chỉ hình cái bình đựng nước, nay dùng làm phó từ "CŨNG".',
      cf:'心 (xīn – "tim")',w:'他也六岁'},
   ]},
];

var wuData = [
  {img:'🎂',label:'岁',py:'suì',letter:'A'},
  {img:'📏',label:'大',py:'dà',letter:'B'},
  {img:'➕',label:'也',py:'yě',letter:'C'},
  {img:'🔢',label:'几岁',py:'jǐ suì',letter:'D'},
  {img:'❓',label:'多大',py:'duō dà',letter:'E'},
  {img:'📊',label:'多',py:'duō',letter:'F'},
];

var dialogData = [
  {scene:'Hỏi tuổi bạn nhỏ',
   lines:[
     {sp:0,zh:'乐乐，你几岁？',py:'Lèle, nǐ jǐ suì?',vn:'Lạc Lạc, bạn mấy tuổi?'},
     {sp:1,zh:'我六岁。',py:'Wǒ liù suì.',vn:'Mình sáu tuổi.'},
   ]},
  {scene:'Hỏi tuổi anh trai',
   lines:[
     {sp:0,zh:'你哥哥多大？',py:'Nǐ gēge duō dà?',vn:'Anh trai bạn bao nhiêu tuổi?'},
     {sp:1,zh:'他也六岁。',py:'Tā yě liù suì.',vn:'Anh ấy cũng sáu tuổi.'},
   ]},
  {scene:'So sánh tuổi với bạn mới',
   lines:[
     {sp:0,zh:'你几岁？',py:'Nǐ jǐ suì?',vn:'Bạn mấy tuổi?'},
     {sp:1,zh:'我七岁。',py:'Wǒ qī suì.',vn:'Mình bảy tuổi.'},
     {sp:0,zh:'我也七岁！',py:'Wǒ yě qī suì!',vn:'Mình cũng bảy tuổi!'},
   ]},
];

// Điền từ — tình huống hỏi tuổi
var fillData = [
  {pre:'Bạn có em gái nhỏ. Con hỏi em gái bạn mấy tuổi: “你妹妹',blank:'几',post:'岁？”',hint:'(mấy)',ans:'几',exp:'Hỏi tuổi trẻ nhỏ: 几 + 岁 → 你妹妹几岁？'},
  {pre:'Anh trai con mười tuổi: “我哥哥十',blank:'岁',post:'。”',hint:'(tuổi)',ans:'岁',exp:'Số + 岁: 十岁 = mười tuổi.'},
  {pre:'Con hỏi bạn: “Mẹ bạn bao nhiêu tuổi?” — “你妈妈',blank:'多大',post:'？”',hint:'(bao nhiêu tuổi — người lớn)',ans:'多大',exp:'Hỏi tuổi người lớn dùng 多大; 几岁 chỉ dùng hỏi trẻ nhỏ.'},
  {pre:'Điềm Điềm là người Trung Quốc, Minh Minh cũng vậy: “明明',blank:'也',post:'是中国人。”',hint:'(cũng)',ans:'也',exp:'也 đứng sau chủ ngữ, trước động từ: 明明也是中国人.'},
  {pre:'Con có một anh trai. Điềm Điềm cũng có một anh trai: “甜甜',blank:'也',post:'有一个哥哥。”',hint:'(cũng)',ans:'也',exp:'也 đứng trước 有: 甜甜也有一个哥哥.'},
];

// Sắp xếp — câu hỏi tuổi
var sortData = [
  {words:['甜甜','几','岁','？'],ans:'甜甜几岁？',audio:'甜甜几岁？'},
  {words:['我','妹妹','三','岁','。'],ans:'我妹妹三岁。',audio:'我妹妹三岁。'},
  {words:['我','也','认识','他','。'],ans:'我也认识他。',audio:'我也认识他。'},
  {words:['哥哥','九','岁','，','妹妹','五','岁','。'],ans:'哥哥九岁，妹妹五岁。',audio:'哥哥九岁，妹妹五岁。'},
  {words:['你','也','六','岁','吗','？'],ans:'你也六岁吗？',audio:'你也六岁吗？'},
];

var matchData = [
  {left:'你几岁？',right:'我七岁。'},
  {left:'你爸爸多大？',right:'他三十岁。'},
  {left:'你妹妹几岁？',right:'她三岁。'},
  {left:'我是中国人。',right:'我也是中国人！'},
  {left:'你有哥哥吗？',right:'有，他十岁。'},
  {left:'我八岁。',right:'我也八岁！'},
];

// Trắc nghiệm — không audio
var mcData = [
  {q:'Bạn kể về bố của Minh Minh. Con muốn hỏi: “Bố bạn ấy bao nhiêu tuổi?”',opts:['他爸爸多大？','他爸爸几岁？','他爸爸多岁？','他爸爸大多？'],ans:0,exp:'Hỏi tuổi người lớn dùng 多大; 几岁 chỉ hỏi trẻ nhỏ (dưới 10 tuổi).'},
  {q:'Em bé hàng xóm rất đáng yêu. Con hỏi em: “Em mấy tuổi?”',opts:['你几岁？','你多岁？','你几大？','你岁几？'],ans:0,exp:'Hỏi tuổi trẻ nhỏ: 几 + 岁 → 你几岁？'},
  {q:'Minh Minh có em gái. Lạc Lạc cũng có em gái. Con nói:',opts:['乐乐也有妹妹。','也乐乐有妹妹。','乐乐有也妹妹。','乐乐有妹妹也。'],ans:0,exp:'也 đứng sau chủ ngữ, trước động từ: 乐乐 + 也 + 有. Không đặt 也 cuối câu như "cũng" trong tiếng Việt nói.'},
  {q:'Bạn hỏi em gái con mấy tuổi. Em gái con bốn tuổi. Con đáp:',opts:['她四岁。','她四个岁。','她岁四。','她四口岁。'],ans:0,exp:'岁 đứng ngay sau số, không cần lượng từ 个 hay 口.'},
  {q:'Câu nào SAI?',opts:['我爸爸几岁？','你妹妹五岁吗？','老师多大？','我也有姐姐。'],ans:0,exp:'Bố là người lớn → hỏi 多大, không dùng 几岁.'},
];

var speakingData = {
  t1:{
    intro:'Nhấn nút loa nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'我六岁。',py:'Wǒ liù suì.',vn:'Mình sáu tuổi.'},
      {zh:'他也六岁。',py:'Tā yě liù suì.',vn:'Anh ấy cũng sáu tuổi.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn nút loa để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'我＿＿岁。',frame_py:'Wǒ ___ suì.',vn:'Mình ＿＿ tuổi.',options:['八','九'],samples:['我八岁。','我九岁。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🎂 Tình huống 1 — Con mấy tuổi?',
       guide:'Bạn mới hỏi con mấy tuổi. Con nói tuổi thật của mình.',
       structure:['我……岁。'],
       sample:'我七岁。',
       sample_vn:'Mình bảy tuổi.',
       note:'Nói tuổi: 我 + số + 岁, không cần 是.'},
      {role:'👩 Tình huống 2 — Hỏi tuổi mẹ',
       guide:'Con muốn biết mẹ bao nhiêu tuổi. Mẹ là người lớn nên con dùng 多大.',
       structure:['妈妈，你多大？'],
       sample:'妈妈，你多大？',
       sample_vn:'Mẹ ơi, mẹ bao nhiêu tuổi ạ?',
       note:'Người lớn → 多大; em bé → 几岁.'},
      {role:'🤝 Tình huống 3 — Mình cũng vậy!',
       guide:'Bạn nói: “我八岁。” Con cũng tám tuổi. Con nói gì?',
       structure:['我也……岁！'],
       sample:'我也八岁！',
       sample_vn:'Mình cũng tám tuổi!',
       note:'也 đứng sau 我, trước số tuổi.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt→Trung) — câu ví dụ của chính bài này
// ══════════════════════════════════════════
var translateData = [
  {vi:"Chị gái mình chín tuổi.", zh:"我姐姐九岁。", py:"Wǒ jiějie jiǔ suì."},
  {vi:"Bạn ấy (bạn gái) cũng quen mình.", zh:"她也认识我。", py:"Tā yě rènshi wǒ."},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung→Việt) — lời thoại trong bài, khác chiều Việt→Trung
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:"Em gái cũng rất vui!", zh:"妹妹也很高兴！", py:"Mèimei yě hěn gāoxìng!"},
  {vi:"Cô giáo cũng quen mẹ mình.", zh:"老师也认识我妈妈。", py:"Lǎoshī yě rènshi wǒ māma."},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đoạn nghe ngắn (đọc bằng giọng máy), chỉ dùng từ đã học
// ══════════════════════════════════════════
var listenData = [
  {audio:'我是明明，我十岁。',
   questions:[
     {q:'Minh Minh mấy tuổi?',opts:['6','10','7'],ans:1,exp:'我十岁 = mình mười tuổi.'},
   ]},
  {audio:'姐姐多大？她九岁。',
   questions:[
     {q:'Chị gái bao nhiêu tuổi?',opts:['9','5','10'],ans:0,exp:'她九岁 = chị ấy chín tuổi.'},
   ]},
  {audio:'乐乐五岁，明明也五岁。',
   questions:[
     {q:'Ai cũng năm tuổi giống Lạc Lạc?',opts:['Điềm Điềm','Anh trai','Minh Minh'],ans:2,exp:'明明也五岁 = Minh Minh cũng năm tuổi.'},
   ]},
  {audio:'我妈妈三十岁，我爸爸也三十岁。',
   questions:[
     {q:'Mẹ bạn nhỏ bao nhiêu tuổi?',opts:['13','30','3'],ans:1,exp:'三十岁 = ba mươi tuổi.'},
     {q:'Còn bố bao nhiêu tuổi?',opts:['Cũng 30 tuổi','10 tuổi','Không nói'],ans:0,exp:'也三十岁 = cũng ba mươi tuổi.'},
   ]},
];
