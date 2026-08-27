// ══════════════════════════════════════════
// DATA — YCT Bài 5: 你几岁？
// ══════════════════════════════════════════
var vocabData = [
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

// Trắc nghiệm — không audio
var mcData = [
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
  {q:'Câu nào ĐÚNG khi hỏi tuổi anh trai (người lớn hơn)?',opts:['你哥哥多大？','你哥哥几岁？','哥哥你多大？','多大你哥哥？'],ans:0},
  {q:'"几岁" và "多大" khác nhau ở đâu?',opts:['几岁 hỏi trẻ em, 多大 hỏi người lớn hơn','cả hai đều hỏi trẻ em','cả hai đều hỏi người lớn','không khác nhau'],ans:0},
  {q:'我七岁，你＿＿七岁吗？',opts:['也','多','大','几'],ans:0},
  {q:'"岁" dùng để làm gì?',opts:['lượng từ đếm tuổi','lượng từ đếm người','lượng từ đếm đồ vật','động từ'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Bạn mấy tuổi?"?',opts:['你几岁？','你多岁？','几你岁？','岁你几？'],ans:0},
];

// Điền từ — tình huống hỏi tuổi
var fillData = [
  {pre:'Con hỏi tuổi bạn nhỏ: “你',blank:'几',post:'岁？”',hint:'(mấy — hỏi trẻ em)',ans:'几'},
  {pre:'Con nói tuổi mình: “我六',blank:'岁',post:'。”',hint:'(tuổi)',ans:'岁'},
  {pre:'Con hỏi tuổi anh trai bạn: “你哥哥',blank:'多',post:'大？”',hint:'(bao nhiêu — hỏi người lớn hơn)',ans:'多'},
  {pre:'Con nói ai đó cũng bằng tuổi mình: “他',blank:'也',post:'六岁。”',hint:'(cũng)',ans:'也'},
  {pre:'Con hỏi tuổi bố: “你爸爸',blank:'多',post:'大？”',hint:'(bao nhiêu)',ans:'多'},
  {pre:'Con so sánh: “妹妹小，哥哥',blank:'大',post:'。”',hint:'(to, lớn)',ans:'大'},
  {pre:'Con xác nhận tuổi mình: “我七',blank:'岁',post:'。”',hint:'(tuổi)',ans:'岁'},
  {pre:'Con nói mình giống bạn: “我',blank:'也',post:'七岁。”',hint:'(cũng)',ans:'也'},
];
