// ══════════════════════════════════════════
// DATA — YCT Bài 3: 他是谁？
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'他',py:'tā',pos:'Đại từ',vn:'anh ấy, bạn ấy',em:'👦',lesson:1,
   ex_zh:'他是谁？',ex_py:'Tā shì shéi?',ex_vn:'Anh ấy là ai vậy?',
   exList:[{zh:'他是谁？',py:'Tā shì shéi?',vn:'Anh ấy là ai vậy?'}],
   hanzi:[
     {c:'他',p:'tā',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân) trái → 也(dã) phải',rad:'亻 (nhân – người)',mean:'anh ấy, bạn ấy',
      tip:'亻(người nam) + 也(đại từ cổ) → chỉ NGƯỜI NAM đang được nhắc đến.',
      cf:'她 (tā – "cô ấy", cùng phần 也")',w:'他是谁'},
   ]},
  {n:2,zh:'是',py:'shì',pos:'Động từ',vn:'là',em:'✅',lesson:1,
   ex_zh:'他是中国人。',ex_py:'Tā shì Zhōngguó rén.',ex_vn:'Bạn ấy là người Trung Quốc.',
   exList:[{zh:'他是中国人。',py:'Tā shì Zhōngguó rén.',vn:'Bạn ấy là người Trung Quốc.'}],
   hanzi:[
     {c:'是',p:'shì',type:'上下结构 · Trên-dưới',st:9,ord:'日(nhật) trên → 正(biến thể) dưới',rad:'日 (nhật – mặt trời)',mean:'là',
      tip:'日(mặt trời) đứng CHÍNH GIỮA bầu trời → biểu thị điều ĐÚNG, khẳng định LÀ.',
      cf:'量 (liàng – "đo lường")',w:'他是谁'},
   ]},
  {n:3,zh:'谁',py:'shéi',pos:'Đại từ',vn:'ai',em:'❓',lesson:1,
   ex_zh:'他是谁？',ex_py:'Tā shì shéi?',ex_vn:'Anh ấy là ai vậy?',
   exList:[{zh:'他是谁？',py:'Tā shì shéi?',vn:'Anh ấy là ai vậy?'}],
   hanzi:[
     {c:'谁',p:'shéi',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 隹(chuy) phải',rad:'讠 (ngôn – lời nói)',mean:'ai',
      tip:'讠(lời nói) dùng để cất tiếng HỎI xem người đó là ai.',
      cf:'唯 (wéi – "duy nhất")',w:'他是谁'},
   ]},
  {n:4,zh:'哪',py:'nǎ',pos:'Đại từ',vn:'nào, cái nào',em:'🧭',lesson:2,
   ex_zh:'明明是哪国人？',ex_py:'Míngming shì nǎ guó rén?',ex_vn:'Minh Minh là người nước nào?',
   exList:[{zh:'明明是哪国人？',py:'Míngming shì nǎ guó rén?',vn:'Minh Minh là người nước nào?'}],
   hanzi:[
     {c:'哪',p:'nǎ',type:'左右结构 · Trái-phải',st:9,ord:'口(khẩu) trái → 那(na) phải',rad:'口 (khẩu – miệng)',mean:'nào, cái nào',
      tip:'口(miệng hỏi) + 那(kia) → hỏi xem là CÁI NÀO trong số đó.',
      cf:'那 (nà – "kia, đó")',w:'哪国人'},
   ]},
  {n:5,zh:'国',py:'guó',pos:'Danh từ',vn:'nước, quốc gia',em:'🌍',lesson:2,
   ex_zh:'明明是哪国人？',ex_py:'Míngming shì nǎ guó rén?',ex_vn:'Minh Minh là người nước nào?',
   exList:[{zh:'明明是哪国人？',py:'Míngming shì nǎ guó rén?',vn:'Minh Minh là người nước nào?'}],
   hanzi:[
     {c:'国',p:'guó',type:'全包围结构 · Bao vây hoàn toàn',st:8,ord:'囗(vi) ngoài → 玉(biến thể) trong',rad:'囗 (vi – vây quanh)',mean:'nước, quốc gia',
      tip:'囗(tường thành bao quanh) + 玉(ngọc quý bên trong) → lãnh thổ có biên giới bảo vệ báu vật = ĐẤT NƯỚC.',
      cf:'固 (gù – "vững chắc")',w:'哪国人 / 中国'},
   ]},
  {n:6,zh:'人',py:'rén',pos:'Danh từ',vn:'người',em:'🧍',lesson:2,
   ex_zh:'他是中国人。',ex_py:'Tā shì Zhōngguó rén.',ex_vn:'Bạn ấy là người Trung Quốc.',
   exList:[{zh:'他是中国人。',py:'Tā shì Zhōngguó rén.',vn:'Bạn ấy là người Trung Quốc.'}],
   hanzi:[
     {c:'人',p:'rén',type:'独体字 · Tượng hình',st:2,ord:'丿→㇏',rad:'人 (nhân – tự thành bộ)',mean:'người',
      tip:'Hình dáng một người đang đứng nghiêng, hai chân chống đỡ → NGƯỜI.',
      cf:'入 (rù – "vào")',w:'中国人'},
   ]},
  {n:7,zh:'中国人',py:'Zhōngguó rén',pos:'Danh từ',vn:'người Trung Quốc',em:'🇨🇳',lesson:2,
   ex_zh:'他是中国人。',ex_py:'Tā shì Zhōngguó rén.',ex_vn:'Bạn ấy là người Trung Quốc.',
   exList:[{zh:'他是中国人。',py:'Tā shì Zhōngguó rén.',vn:'Bạn ấy là người Trung Quốc.'}],
   hanzi:[
     {c:'中',p:'zhōng',type:'独体字 · Chữ đơn',st:4,ord:'丨(cổn) xuyên qua 口(khẩu)',rad:'丨 (cổn – nét sổ)',mean:'giữa, trung tâm',
      tip:'Một nét thẳng xuyên qua giữa ô vuông → chỉ vị trí TRUNG TÂM, Ở GIỮA.',
      cf:'冲 (chōng – "xông tới")',w:'中国人 / 中国'},
   ]},
];

// Trắc nghiệm — không audio
const mcData = [
  {q:'他是＿＿？(hỏi về người)',opts:['谁','什么','哪','怎么样'],ans:0},
  {q:'他是＿＿国人？(hỏi quốc tịch)',opts:['哪','什么','谁','这'],ans:0},
  {q:'"是" nghĩa là gì?',opts:['là','có','muốn','đi'],ans:0},
  {q:'"人" nghĩa là gì?',opts:['người','nước','bạn','thầy'],ans:0},
  {q:'"国" nghĩa là gì?',opts:['nước, quốc gia','người','thành phố','làng'],ans:0},
  {q:'"他" dùng để chỉ ai?',opts:['một bạn nam','một bạn nữ','chính mình','thầy cô'],ans:0},
  {q:'"中国人" nghĩa là gì?',opts:['người Trung Quốc','nước Trung Quốc','tiếng Trung Quốc','bạn Trung Quốc'],ans:0},
  {q:'Câu nào ĐÚNG khi hỏi ai đó là người nước nào?',opts:['你是哪国人？','你哪是国人？','哪你是国人？','国你是哪人？'],ans:0},
  {q:'Từ nào dùng để hỏi "ai"?',opts:['谁','哪','什么','怎么'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Cô ấy là ai?"',opts:['她是谁？','她谁是？','谁她是？','是她谁？'],ans:0},
  {q:'"哪" nghĩa là gì?',opts:['nào, cái nào','đó, kia','ai','gì'],ans:0},
  {q:'Câu nào ĐÚNG khi nói "Bạn ấy là Minh Minh."?',opts:['他是明明。','明明是他。','他明明是。','是他明明。'],ans:0},
  {q:'Trong câu "他是中国人", chữ nào chỉ QUỐC TỊCH?',opts:['中国人','他','是','谁'],ans:0},
  {q:'Muốn hỏi "Bạn là người nước nào?", con nói gì?',opts:['你是哪国人？','你是谁？','你是中国人吗？','他是谁？'],ans:0},
  {q:'"她" và "他" khác nhau ở đâu?',opts:['她 chỉ bạn nữ, 他 chỉ bạn nam','cả hai đều chỉ bạn nam','cả hai đều chỉ bạn nữ','không khác nhau'],ans:0},
];

// Điền từ — tình huống hỏi về người & quốc tịch
const fillData = [
  {pre:'Con hỏi một người trong ảnh là ai: “他是',blank:'谁',post:'？”',hint:'(ai)',ans:'谁'},
  {pre:'Con hỏi bạn ấy đến từ nước nào: “他是',blank:'哪',post:'国人？”',hint:'(nào, cái nào)',ans:'哪'},
  {pre:'Con khẳng định bạn ấy là người Trung Quốc: “他是中国',blank:'人',post:'。”',hint:'(người)',ans:'人'},
  {pre:'Con nói mình là người Trung Quốc: “我',blank:'是',post:'中国人。”',hint:'(là)',ans:'是'},
  {pre:'Con hỏi một bạn nam là ai: “',blank:'他',post:'是谁？”',hint:'(anh ấy, bạn ấy)',ans:'他'},
  {pre:'Con xác nhận lại quốc tịch: “你是中国人',blank:'吗',post:'？”',hint:'(trợ từ hỏi — ôn Bài 2)',ans:'吗'},
  {pre:'Con nói phần "nước" trong từ quốc gia: “中',blank:'国',post:'人”',hint:'(nước, quốc gia)',ans:'国'},
  {pre:'Con hỏi một bạn nữ là ai: “她',blank:'是',post:'谁？”',hint:'(là)',ans:'是'},
];
