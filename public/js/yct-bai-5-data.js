// ══════════════════════════════════════════
// DATA — YCT Bài 5: 你几岁？
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'几岁',py:'jǐ suì',pos:'Cụm từ',vn:'mấy tuổi (hỏi trẻ em)',em:'🔢',lesson:1,
   ex_zh:'你几岁？',ex_py:'Nǐ jǐ suì?',ex_vn:'Bạn mấy tuổi?',
   exList:[{zh:'你几岁？',py:'Nǐ jǐ suì?',vn:'Bạn mấy tuổi?'}],
   hanzi:[]},
  {n:2,zh:'岁',py:'suì',pos:'Lượng từ',vn:'tuổi',em:'🎂',lesson:1,
   ex_zh:'我六岁。',ex_py:'Wǒ liù suì.',ex_vn:'Mình sáu tuổi.',
   exList:[{zh:'我六岁。',py:'Wǒ liù suì.',vn:'Mình sáu tuổi.'}],
   hanzi:[
     {c:'岁',p:'suì',type:'上下结构 · Trên-dưới',st:6,ord:'山(biến thể) trên → 夕(tịch) dưới',rad:'山 (sơn – núi, biến thể)',mean:'tuổi',
      tip:'Xưa dùng để đếm số mùa/năm đã trải qua như ngọn núi tích tuổi theo thời gian → TUỔI.',
      cf:'出 (chū – "ra")',w:'几岁 / 六岁'},
   ]},
  {n:3,zh:'多大',py:'duō dà',pos:'Cụm từ',vn:'bao nhiêu tuổi (hỏi người lớn hơn)',em:'❓',lesson:2,
   ex_zh:'你哥哥多大？',ex_py:'Nǐ gēge duō dà?',ex_vn:'Anh trai bạn bao nhiêu tuổi?',
   exList:[{zh:'你哥哥多大？',py:'Nǐ gēge duō dà?',vn:'Anh trai bạn bao nhiêu tuổi?'}],
   hanzi:[]},
  {n:4,zh:'多',py:'duō',pos:'Phó từ',vn:'nhiều, bao nhiêu',em:'📊',lesson:2,
   ex_zh:'你哥哥多大？',ex_py:'Nǐ gēge duō dà?',ex_vn:'Anh trai bạn bao nhiêu tuổi?',
   exList:[{zh:'你哥哥多大？',py:'Nǐ gēge duō dà?',vn:'Anh trai bạn bao nhiêu tuổi?'}],
   hanzi:[
     {c:'多',p:'duō',type:'上下结构 · Trên-dưới',st:6,ord:'夕(tịch) trên → 夕(tịch) dưới',rad:'夕 (tịch – buổi tối)',mean:'nhiều, bao nhiêu',
      tip:'Hai chữ 夕(buổi tối) chồng lên nhau → NHIỀU đêm trôi qua = NHIỀU, BAO NHIÊU.',
      cf:'夜 (yè – "đêm")',w:'多大'},
   ]},
  {n:5,zh:'大',py:'dà',pos:'Tính từ',vn:'to, lớn',em:'📏',lesson:2,
   ex_zh:'你哥哥多大？',ex_py:'Nǐ gēge duō dà?',ex_vn:'Anh trai bạn bao nhiêu tuổi?',
   exList:[{zh:'你哥哥多大？',py:'Nǐ gēge duō dà?',vn:'Anh trai bạn bao nhiêu tuổi?'}],
   hanzi:[
     {c:'大',p:'dà',type:'独体字 · Tượng hình',st:3,ord:'一→ノ→㇏',rad:'大 (đại – tự thành bộ)',mean:'to, lớn',
      tip:'Hình người dang rộng tay chân → TO LỚN.',
      cf:'太 (tài – "quá")',w:'多大'},
   ]},
  {n:6,zh:'也',py:'yě',pos:'Phó từ',vn:'cũng',em:'➕',lesson:1,
   ex_zh:'他也六岁。',ex_py:'Tā yě liù suì.',ex_vn:'Anh ấy cũng sáu tuổi.',
   exList:[{zh:'他也六岁。',py:'Tā yě liù suì.',vn:'Anh ấy cũng sáu tuổi.'}],
   hanzi:[
     {c:'也',p:'yě',type:'独体字 · Chữ đơn',st:3,ord:'乛→𠃊→乙',rad:'乙 (ất)',mean:'cũng',
      tip:'Chữ cổ vốn chỉ hình cái bình đựng nước, nay dùng làm phó từ "CŨNG".',
      cf:'心 (xīn – "tim")',w:'他也六岁'},
   ]},
];

const wuData = [
  {img:'🎂',label:'岁',py:'suì',letter:'A'},
  {img:'📏',label:'大',py:'dà',letter:'B'},
  {img:'➕',label:'也',py:'yě',letter:'C'},
  {img:'🔢',label:'几岁',py:'jǐ suì',letter:'D'},
  {img:'❓',label:'多大',py:'duō dà',letter:'E'},
  {img:'📊',label:'多',py:'duō',letter:'F'},
];

const dialogData = [
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
const fillData = [
  {pre:'Con hỏi tuổi bạn nhỏ: “你',blank:'几',post:'岁？”',hint:'(mấy — hỏi trẻ em)',ans:'几'},
  {pre:'Con nói tuổi mình: “我六',blank:'岁',post:'。”',hint:'(tuổi)',ans:'岁'},
  {pre:'Con hỏi tuổi anh trai bạn: “你哥哥',blank:'多',post:'大？”',hint:'(bao nhiêu — hỏi người lớn hơn)',ans:'多'},
  {pre:'Con nói ai đó cũng bằng tuổi mình: “他',blank:'也',post:'六岁。”',hint:'(cũng)',ans:'也'},
  {pre:'Con hỏi tuổi bố: “你爸爸',blank:'多',post:'大？”',hint:'(bao nhiêu)',ans:'多'},
  {pre:'Con so sánh: “妹妹小，哥哥',blank:'大',post:'。”',hint:'(to, lớn)',ans:'大'},
  {pre:'Con xác nhận tuổi mình: “我七',blank:'岁',post:'。”',hint:'(tuổi)',ans:'岁'},
  {pre:'Con nói mình giống bạn: “我',blank:'也',post:'七岁。”',hint:'(cũng)',ans:'也'},
];

// Sắp xếp — câu hỏi tuổi
const sortData = [
  {words:['你','几','岁','？'],ans:'你几岁？',audio:'你几岁？'},
  {words:['我','六','岁','。'],ans:'我六岁。',audio:'我六岁。'},
  {words:['你','哥哥','多','大','？'],ans:'你哥哥多大？',audio:'你哥哥多大？'},
  {words:['他','也','六','岁','。'],ans:'他也六岁。',audio:'他也六岁。'},
  {words:['我','七','岁','。'],ans:'我七岁。',audio:'我七岁。'},
  {words:['我','也','七','岁','！'],ans:'我也七岁！',audio:'我也七岁！'},
];

const matchData = [
  {left:'你几岁？',right:'我六岁。'},
  {left:'你哥哥多大？',right:'他也六岁。'},
  {left:'你妹妹几岁？',right:'她三岁。'},
  {left:'你几岁？',right:'我七岁。'},
  {left:'你也七岁吗？',right:'我也七岁。'},
];

// Trắc nghiệm — không audio
const mcData = [
  {q:'你＿＿岁？(hỏi tuổi trẻ em)',opts:['几','多','哪','什么'],ans:0},
  {q:'你哥哥＿＿大？(hỏi tuổi người lớn hơn)',opts:['多','几','哪','什么'],ans:0},
  {q:'"岁" nghĩa là gì?',opts:['tuổi','năm','tháng','ngày'],ans:0},
  {q:'"也" nghĩa là gì?',opts:['cũng','và','nhưng','rất'],ans:0},
  {q:'"大" nghĩa là gì?',opts:['to, lớn','nhỏ, bé','cao','thấp'],ans:0},
  {q:'Khi nào dùng "多大" thay vì "几岁" để hỏi tuổi?',opts:['khi hỏi người lớn tuổi hơn','khi hỏi trẻ nhỏ','khi hỏi con vật','không có sự khác biệt'],ans:0},
  {q:'我六岁，他＿＿六岁。',opts:['也','多','大','几'],ans:0},
  {q:'"几岁" dùng để hỏi ai?',opts:['trẻ em, số tuổi nhỏ','người lớn tuổi','ông bà','tất cả mọi người như nhau'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Mình cũng bảy tuổi"?',opts:['我也七岁。','我七也岁。','也我七岁。','七我也岁。'],ans:0},
  {q:'"多" nghĩa là gì?',opts:['nhiều, bao nhiêu','ít','vừa đủ','không có'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy nhé!',
    models:[
      {zh:'你几岁？',py:'Nǐ jǐ suì?',vn:'Bạn mấy tuổi?'},
      {zh:'我六岁。',py:'Wǒ liù suì.',vn:'Mình sáu tuổi.'},
      {zh:'你哥哥多大？',py:'Nǐ gēge duō dà?',vn:'Anh trai bạn bao nhiêu tuổi?'},
      {zh:'他也六岁。',py:'Tā yě liù suì.',vn:'Anh ấy cũng sáu tuổi.'},
      {zh:'我也七岁！',py:'Wǒ yě qī suì!',vn:'Mình cũng bảy tuổi!'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu con tạo được.',
    drills:[
      {frame:'我＿＿岁。',frame_py:'Wǒ ___ suì.',vn:'Mình ＿＿ tuổi.',options:['六','七','八'],samples:['我六岁。','我七岁。','我八岁。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, con hãy tưởng tượng mình đang ở trong tình huống thật và tự nói câu phù hợp nhé!',
    tasks:[
      {role:'🎂 Tình huống 1 — Hỏi tuổi bạn cùng lớp',
       guide:'Con muốn biết bạn cùng lớp mấy tuổi.',
       structure:['你几岁？','我＿＿岁。'],
       sample:'你几岁？我六岁。',
       sample_vn:'Bạn mấy tuổi? Mình sáu tuổi.',
       note:'几岁 dùng để hỏi tuổi TRẺ EM (số nhỏ) — khi lớn lên các con sẽ học cách hỏi tuổi người lớn bằng 多大.'},
      {role:'👨‍👦 Tình huống 2 — Hỏi tuổi anh trai của bạn',
       guide:'Con hỏi bạn mình xem anh trai bạn ấy bao nhiêu tuổi.',
       structure:['你哥哥多大？','他也＿＿岁。'],
       sample:'你哥哥多大？他也六岁。',
       sample_vn:'Anh trai bạn bao nhiêu tuổi? Anh ấy cũng sáu tuổi.',
       note:'也 dùng khi hai người CÙNG chung một đặc điểm — ở đây là cùng tuổi.'},
      {role:'🙋 Tình huống 3 — So sánh tuổi với bạn mới quen',
       guide:'Con và bạn mới quen cùng nói tuổi của mình và nhận ra mình bằng tuổi nhau.',
       structure:['你几岁？','我七岁。','我也七岁！'],
       sample:'你几岁？我七岁。我也七岁！',
       sample_vn:'Bạn mấy tuổi? Mình bảy tuổi. Mình cũng bảy tuổi!',
       note:'Khi phát hiện mình giống bạn (cùng tuổi, cùng sở thích...), dùng 也 để nói "mình cũng vậy" — một cách kết bạn rất tự nhiên.'},
    ],
  },
};
