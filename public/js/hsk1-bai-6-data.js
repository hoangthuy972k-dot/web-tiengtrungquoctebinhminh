// ══════════════════════════════════════════
// DATA — HSK1 Bài 6: 我会说汉语
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'会',py:'huì',pos:'Động từ năng nguyện',vn:'biết (qua học tập, rèn luyện)',em:'🧠',lesson:1,
   ex_zh:'我会说汉语。',ex_py:'Wǒ huì shuō Hànyǔ.',ex_vn:'Tôi biết nói tiếng Trung.',
   exList:[
     {zh:'我会说汉语。',py:'Wǒ huì shuō Hànyǔ.',vn:'Tôi biết nói tiếng Trung.'},
     {zh:'她不会说。',py:'Tā bú huì shuō.',vn:'Cô ấy thì không biết.'},
   ],
   hanzi:[
     {c:'会',p:'huì',type:'上下结构 · Trên-dưới',st:6,ord:'人(biến thể) trên → 云(biến thể) dưới',rad:'人 (nhân, biến thể)',mean:'biết, có thể (qua học tập)',
      tip:'人(người) hội tụ đủ kiến thức → NGƯỜI đã học và nắm được kỹ năng.',
      cf:'云 (yún – "mây")',w:'我会说汉语'},
   ]},
  {n:2,zh:'说',py:'shuō',pos:'Động từ',vn:'nói',em:'🗣️',lesson:1,
   ex_zh:'我会说汉语。',ex_py:'Wǒ huì shuō Hànyǔ.',ex_vn:'Tôi biết nói tiếng Trung.',
   exList:[
     {zh:'我会说汉语。',py:'Wǒ huì shuō Hànyǔ.',vn:'Tôi biết nói tiếng Trung.'},
   ],
   hanzi:[
     {c:'说',p:'shuō',type:'左右结构 · Trái-phải',st:9,ord:'讠(ngôn) trái → 兑(đoài) phải',rad:'讠 (ngôn – lời nói)',mean:'nói',
      tip:'讠(lời nói) + 兑(trao đổi, vui vẻ) → dùng LỜI để trao đổi, NÓI CHUYỆN.',
      cf:'脱 (tuō – "cởi ra")',w:'说汉语 / 会说'},
   ]},
  {n:3,zh:'妈妈',py:'māma',pos:'Danh từ',vn:'mẹ',em:'👩‍👦',lesson:1,
   ex_zh:'你妈妈会说汉语吗？',ex_py:'Nǐ māma huì shuō Hànyǔ ma?',ex_vn:'Mẹ em biết nói tiếng Trung Quốc không?',
   exList:[
     {zh:'你妈妈会说汉语吗？',py:'Nǐ māma huì shuō Hànyǔ ma?',vn:'Mẹ em biết nói tiếng Trung Quốc không?'},
   ],
   hanzi:[
     {c:'妈',p:'mā',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 马(mã) phải',rad:'女 (nữ – con gái)',mean:'mẹ',
      tip:'女(nữ giới) + 马(mượn âm) → tiếng gọi thân thương dành cho MẸ.',
      cf:'吗 (ma – "trợ từ hỏi", cũng mượn âm 马")',w:'妈妈'},
   ]},
  {n:4,zh:'菜',py:'cài',pos:'Danh từ',vn:'món ăn, rau, thức ăn',em:'🥘',lesson:2,
   ex_zh:'中国菜很好吃。',ex_py:'Zhōngguó cài hěn hǎochī.',ex_vn:'Món ăn Trung Quốc rất ngon.',
   exList:[
     {zh:'中国菜很好吃。',py:'Zhōngguó cài hěn hǎochī.',vn:'Món ăn Trung Quốc rất ngon.'},
   ],
   hanzi:[
     {c:'菜',p:'cài',type:'上下结构 · Trên-dưới',st:11,ord:'艹(thảo) trên → 采(thái) dưới',rad:'艹 (thảo – cỏ cây)',mean:'món ăn, rau',
      tip:'艹(cây cỏ) + 采(hái) → RAU CỎ được hái về chế biến thành MÓN ĂN.',
      cf:'踩 (cǎi – "giẫm đạp", cũng có 采")',w:'中国菜 / 好吃'},
   ]},
  {n:5,zh:'很',py:'hěn',pos:'Phó từ',vn:'rất',em:'📈',lesson:2,
   ex_zh:'中国菜很好吃。',ex_py:'Zhōngguó cài hěn hǎochī.',ex_vn:'Món ăn Trung Quốc rất ngon.',
   exList:[
     {zh:'中国菜很好吃。',py:'Zhōngguó cài hěn hǎochī.',vn:'Món ăn Trung Quốc rất ngon.'},
   ],
   hanzi:[
     {c:'很',p:'hěn',type:'左右结构 · Trái-phải',st:9,ord:'彳(sách) trái → 艮(cấn) phải',rad:'彳 (sách – bước ngắn)',mean:'rất',
      tip:'彳(bước đi) + 艮(dừng lại, cứng) → nhấn mạnh mức độ, đi ĐẾN CÙNG = RẤT.',
      cf:'狠 (hěn – "hung dữ", cũng có 艮")',w:'很好吃 / 很好'},
   ]},
  {n:6,zh:'好吃',py:'hǎochī',pos:'Tính từ',vn:'ngon',em:'😋',lesson:2,
   ex_zh:'中国菜很好吃。',ex_py:'Zhōngguó cài hěn hǎochī.',ex_vn:'Món ăn Trung Quốc rất ngon.',
   exList:[
     {zh:'中国菜很好吃。',py:'Zhōngguó cài hěn hǎochī.',vn:'Món ăn Trung Quốc rất ngon.'},
   ],
   hanzi:[
     {c:'吃',p:'chī',type:'左右结构 · Trái-phải',st:6,ord:'口(khẩu) trái → 乞(khất) phải',rad:'口 (khẩu – miệng)',mean:'ăn',
      tip:'口(miệng) + 乞(xin, cầu) → dùng MIỆNG để ĂN, thoả mãn nhu cầu. (好 đã học ở Bài 1)',
      cf:'吸 (xī – "hít vào")',w:'好吃 / 吃饭'},
   ]},
  {n:7,zh:'做',py:'zuò',pos:'Động từ',vn:'làm, chế biến, nấu',em:'👩‍🍳',lesson:2,
   ex_zh:'你会做中国菜吗？',ex_py:'Nǐ huì zuò Zhōngguó cài ma?',ex_vn:'Anh có biết nấu món Trung Quốc không?',
   exList:[
     {zh:'你会做中国菜吗？',py:'Nǐ huì zuò Zhōngguó cài ma?',vn:'Anh có biết nấu món Trung Quốc không?'},
   ],
   hanzi:[
     {c:'做',p:'zuò',type:'左右结构 · Trái-phải',st:11,ord:'亻(nhân) trái → 故(biến thể) phải',rad:'亻 (nhân – người)',mean:'làm, chế biến, nấu',
      tip:'亻(người) đứng ra LÀM một việc gì đó cụ thể.',
      cf:'作 (zuò – "làm", nghĩa gần giống")',w:'做菜 / 做什么'},
   ]},
  {n:8,zh:'写',py:'xiě',pos:'Động từ',vn:'viết',em:'✍️',lesson:3,
   ex_zh:'你会写汉字吗？',ex_py:'Nǐ huì xiě Hànzì ma?',ex_vn:'Anh có biết viết chữ Hán không?',
   exList:[
     {zh:'你会写汉字吗？',py:'Nǐ huì xiě Hànzì ma?',vn:'Anh có biết viết chữ Hán không?'},
   ],
   hanzi:[
     {c:'写',p:'xiě',type:'上下结构 · Trên-dưới',st:5,ord:'冖(mịch) trên → 与(biến thể) dưới',rad:'冖 (mịch – trùm khăn)',mean:'viết',
      tip:'冖(gói ghém ý tưởng) → dùng bút để VIẾT ra thành chữ.',
      cf:'冠 (guān – "vương miện")',w:'写汉字 / 会写'},
   ]},
  {n:9,zh:'汉字',py:'Hànzì',pos:'Danh từ',vn:'chữ Hán',em:'🈴',lesson:3,
   ex_zh:'你会写汉字吗？',ex_py:'Nǐ huì xiě Hànzì ma?',ex_vn:'Anh có biết viết chữ Hán không?',
   exList:[
     {zh:'你会写汉字吗？',py:'Nǐ huì xiě Hànzì ma?',vn:'Anh có biết viết chữ Hán không?'},
   ],
   hanzi:[]},
  {n:10,zh:'字',py:'zì',pos:'Danh từ',vn:'chữ, ký tự',em:'🔤',lesson:3,
   ex_zh:'这个字怎么写？',ex_py:'Zhège zì zěnme xiě?',ex_vn:'Vậy chữ này anh viết thế nào?',
   exList:[
     {zh:'这个字怎么写？',py:'Zhège zì zěnme xiě?',vn:'Vậy chữ này anh viết thế nào?'},
   ],
   hanzi:[]},
  {n:11,zh:'怎么',py:'zěnme',pos:'Đại từ',vn:'như thế nào (hỏi cách thức)',em:'🤔',lesson:3,
   ex_zh:'这个字怎么写？',ex_py:'Zhège zì zěnme xiě?',ex_vn:'Vậy chữ này anh viết thế nào?',
   exList:[
     {zh:'这个字怎么写？',py:'Zhège zì zěnme xiě?',vn:'Vậy chữ này anh viết thế nào?'},
   ],
   hanzi:[
     {c:'怎',p:'zěn',type:'上下结构 · Trên-dưới',st:9,ord:'乍(biến thể) trên → 心(tâm) dưới',rad:'心 (tâm – trái tim, phần dưới)',mean:'như thế nào',
      tip:'心(tâm trí) băn khoăn không biết làm THẾ NÀO. (么 đã học ở Bài 3)',
      cf:'作 (zuò – "làm", cùng phần 乍")',w:'怎么写 / 怎么样'},
   ]},
  {n:12,zh:'读',py:'dú',pos:'Động từ',vn:'đọc',em:'📖',lesson:3,
   ex_zh:'这个字我会读，不会写。',ex_py:'Zhège zì wǒ huì dú, bú huì xiě.',ex_vn:'Chữ này tôi biết đọc chứ không biết viết.',
   exList:[
     {zh:'这个字我会读，不会写。',py:'Zhège zì wǒ huì dú, bú huì xiě.',vn:'Chữ này tôi biết đọc chứ không biết viết.'},
   ],
   hanzi:[
     {c:'读',p:'dú',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 卖(biến thể) phải',rad:'讠 (ngôn – lời nói)',mean:'đọc',
      tip:'讠(lời nói) + 卖(phát ra, bán) → phát ra tiếng từ chữ viết = ĐỌC.',
      cf:'卖 (mài – "bán")',w:'会读 / 读书'},
   ]},
];

const wuData = [
  {img:'🗣️',label:'说',py:'shuō',letter:'A'},
  {img:'👩‍👦',label:'妈妈',py:'māma',letter:'B'},
  {img:'🥘',label:'菜',py:'cài',letter:'C'},
  {img:'👩‍🍳',label:'做',py:'zuò',letter:'D'},
  {img:'✍️',label:'写',py:'xiě',letter:'E'},
  {img:'📖',label:'读',py:'dú',letter:'F'},
];

var dialogData = [
  {scene:'Ở trường · Hỏi khả năng nói tiếng Trung',
   lines:[
     {sp:0,zh:'你会说汉语吗？',py:'Nǐ huì shuō Hànyǔ ma?',vn:'Em có biết nói tiếng Trung Quốc không?'},
     {sp:1,zh:'我会说汉语。',py:'Wǒ huì shuō Hànyǔ.',vn:'Em có biết.'},
     {sp:0,zh:'你妈妈会说汉语吗？',py:'Nǐ māma huì shuō Hànyǔ ma?',vn:'Mẹ em biết nói tiếng Trung Quốc không?'},
     {sp:1,zh:'她不会说。',py:'Tā bú huì shuō.',vn:'Mẹ em thì không.'},
   ]},
  {scene:'Trong nhà bếp · Nấu ăn Trung Quốc',
   lines:[
     {sp:0,zh:'中国菜好吃吗？',py:'Zhōngguó cài hǎochī ma?',vn:'Món ăn Trung Quốc có ngon không?'},
     {sp:1,zh:'中国菜很好吃。',py:'Zhōngguó cài hěn hǎochī.',vn:'Rất ngon.'},
     {sp:0,zh:'你会做中国菜吗？',py:'Nǐ huì zuò Zhōngguó cài ma?',vn:'Anh có biết nấu món Trung Quốc không?'},
     {sp:1,zh:'我不会做。',py:'Wǒ bú huì zuò.',vn:'Tôi không biết.'},
   ]},
  {scene:'Ở thư viện · Viết chữ Hán',
   lines:[
     {sp:0,zh:'你会写汉字吗？',py:'Nǐ huì xiě Hànzì ma?',vn:'Anh có biết viết chữ Hán không?'},
     {sp:1,zh:'我会写。',py:'Wǒ huì xiě.',vn:'Tôi có biết.'},
     {sp:0,zh:'这个字怎么写？',py:'Zhège zì zěnme xiě?',vn:'Vậy chữ này anh viết thế nào?'},
     {sp:1,zh:'对不起，这个字我会读，不会写。',py:'Duìbuqǐ, zhège zì wǒ huì dú, bú huì xiě.',vn:'Xin lỗi, chữ này tôi biết đọc chứ không biết viết.'},
   ]},
];

// Điền từ — đổi chủ ngữ/đối tượng so với bài khoá
var fillData = [
  {pre:'Bạn khẳng định mình biết nói tiếng Trung: “我',blank:'会',post:'说汉语。”',hint:'(biết — qua học tập)',ans:'会'},
  {pre:'Bạn phủ định mẹ mình biết nói tiếng Trung: “我妈妈不',blank:'会',post:'说汉语。”',hint:'(biết)',ans:'会'},
  {pre:'Bạn khen món ăn ngon: “这个菜',blank:'很',post:'好吃。”',hint:'(rất)',ans:'很'},
  {pre:'Bạn hỏi ai đó có biết nấu món Việt Nam không: “你会',blank:'做',post:'越南菜吗？”',hint:'(làm, nấu)',ans:'做'},
  {pre:'Bạn hỏi ai đó có biết viết chữ Hán không: “你会',blank:'写',post:'汉字吗？”',hint:'(viết)',ans:'写'},
  {pre:'Bạn hỏi cách viết một chữ cụ thể: “这个字',blank:'怎么',post:'写？”',hint:'(như thế nào)',ans:'怎么'},
  {pre:'Bạn nói mình biết đọc nhưng không biết viết: “这个字我会读，',blank:'不',post:'会写。”',hint:'(không, chẳng)',ans:'不'},
  {pre:'Bạn hỏi mẹ có biết đọc chữ Hán không: “你',blank:'妈妈',post:'会读汉字吗？”',hint:'(mẹ)',ans:'妈妈'},
];

// Sắp xếp — đổi ngôi/đối tượng so với bài khoá
var sortData = [
  {words:['你','会','说','汉语','吗','？'],ans:'你会说汉语吗？',audio:'你会说汉语吗？'},
  {words:['我','不','会','说','。'],ans:'我不会说。',audio:'我不会说。'},
  {words:['这个','菜','很','好吃','。'],ans:'这个菜很好吃。',audio:'这个菜很好吃。'},
  {words:['你','会','做','中国','菜','吗','？'],ans:'你会做中国菜吗？',audio:'你会做中国菜吗？'},
  {words:['这个','字','怎么','写','？'],ans:'这个字怎么写？',audio:'这个字怎么写？'},
  {words:['我','会','读','，','不','会','写','。'],ans:'我会读，不会写。',audio:'我会读，不会写。'},
];

var matchData = [
  {left:'你会说汉语吗？',right:'我会说汉语。'},
  {left:'你妈妈会说汉语吗？',right:'她不会说。'},
  {left:'中国菜好吃吗？',right:'中国菜很好吃。'},
  {left:'你会做中国菜吗？',right:'我不会做。'},
  {left:'这个字怎么写？',right:'对不起，这个字我会读，不会写。'},
];

// Trắc nghiệm — trọng tâm 会/很/怎么, không audio
var mcData = [
  {q:'我＿＿说汉语。(biết, qua học tập)',opts:['会','是','有','叫'],ans:0},
  {q:'Câu vị ngữ tính từ (Chủ ngữ + 很 + Tính từ). Câu nào ĐÚNG?',opts:['中国菜很好吃','中国菜好吃很','很中国菜好吃','中国菜很吃好'],ans:0},
  {q:'这个字＿＿写？(hỏi cách thức)',opts:['怎么','什么','谁','哪'],ans:0},
  {q:'Phủ định của "会" là gì?',opts:['不会','没会','不是会','别会'],ans:0},
  {q:'"写" nghĩa là gì?',opts:['viết','đọc','nói','làm'],ans:0},
  {q:'"读" nghĩa là gì?',opts:['đọc','viết','nói','nghe'],ans:0},
  {q:'"做" nghĩa là gì?',opts:['làm, nấu','ăn','uống','mua'],ans:0},
  {q:'Muốn phủ định "好吃" (ngon), câu đúng là?',opts:['不好吃','不很好吃','没好吃','别好吃'],ans:0},
  {q:'"妈妈" nghĩa là gì?',opts:['mẹ','bố','chị gái','em gái'],ans:0},
  {q:'Câu nào đúng khi nói "Tôi biết đọc nhưng không biết viết"?',opts:['我会读，不会写','我会读，没写','我读会，不写会','我不会读也不会写'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'你会说汉语吗？',py:'Nǐ huì shuō Hànyǔ ma?',vn:'Em có biết nói tiếng Trung Quốc không?'},
      {zh:'我会说汉语。',py:'Wǒ huì shuō Hànyǔ.',vn:'Em có biết.'},
      {zh:'中国菜很好吃。',py:'Zhōngguó cài hěn hǎochī.',vn:'Món ăn Trung Quốc rất ngon.'},
      {zh:'你会做中国菜吗？',py:'Nǐ huì zuò Zhōngguó cài ma?',vn:'Anh có biết nấu món Trung Quốc không?'},
      {zh:'这个字怎么写？',py:'Zhège zì zěnme xiě?',vn:'Vậy chữ này anh viết thế nào?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'你会＿＿汉字吗？',frame_py:'Nǐ huì ___ Hànzì ma?',vn:'Bạn có biết ＿＿ chữ Hán không?',options:['写','读'],samples:['你会写汉字吗？','你会读汉字吗？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'🗣️ Tình huống 1 — Tự giới thiệu khả năng ngôn ngữ',
       guide:'Ai đó hỏi bạn có biết nói tiếng Trung không, và hỏi thêm về mẹ của bạn.',
       structure:['你会说汉语吗？','我会说汉语，我妈妈不会说。'],
       sample:'你会说汉语吗？我会说汉语，我妈妈不会说。',
       sample_vn:'Bạn biết nói tiếng Trung không? Tôi biết nói tiếng Trung, mẹ tôi thì không biết.',
       note:'会 chỉ dùng cho khả năng có được QUA HỌC TẬP, rèn luyện (như ngôn ngữ, tay nghề) — không dùng cho khả năng bẩm sinh.'},
      {role:'🍜 Tình huống 2 — Nhận xét món ăn khi đi ăn cùng bạn',
       guide:'Bạn đang ăn món Trung Quốc cùng bạn bè và muốn khen món ăn.',
       structure:['中国菜好吃吗？','中国菜很好吃。'],
       sample:'中国菜好吃吗？中国菜很好吃。',
       sample_vn:'Món ăn Trung Quốc có ngon không? Rất ngon.',
       note:'Câu vị ngữ tính từ tiếng Trung LUÔN cần 很 ở giữa (dù không nhấn mạnh "rất") — nói "中国菜好吃" (thiếu 很) nghe cộc lốc, không tự nhiên bằng.'},
      {role:'✍️ Tình huống 3 — Hỏi cách viết chữ Hán khi không chắc',
       guide:'Bạn đang đọc sách và gặp một chữ Hán mình biết đọc nhưng không chắc cách viết.',
       structure:['这个字怎么写？','这个字我会读，不会写。'],
       sample:'这个字怎么写？对不起，这个字我会读，不会写。',
       sample_vn:'Chữ này viết thế nào? Xin lỗi, chữ này tôi biết đọc chứ không biết viết.',
       note:'Khả năng ĐỌC và VIẾT chữ Hán thường phát triển KHÔNG ĐỀU nhau — người học có thể đọc hiểu rất nhiều chữ nhưng chỉ viết được một phần nhỏ, đây là điều hoàn toàn bình thường.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 6 + ôn lại từ bài 1-5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi biết viết chữ Hán.', zh:'我会写汉字。', py:'Wǒ huì xiě Hànzì.'},
  {vi:'Món ăn Trung Quốc rất ngon.', zh:'中国菜很好吃。', py:'Zhōngguó cài hěn hǎochī.'},
  {vi:'Chữ Hán này đọc thế nào?', zh:'汉字怎么读？', py:'Hànzì zěnme dú?'},
  {vi:'Mẹ tôi biết nói tiếng Trung.', zh:'我妈妈会说汉语。', py:'Wǒ māma huì shuō Hànyǔ.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Mẹ tôi biết nấu món Trung Quốc, rất ngon.', zh:'我妈妈会做中国菜，很好吃。', py:'Wǒ māma huì zuò Zhōngguó cài, hěn hǎochī.'},
  {vi:'Cô giáo biết viết rất nhiều chữ Hán.', zh:'老师会写很多汉字。', py:'Lǎoshī huì xiě hěn duō Hànzì.'},
  {vi:'Bạn tôi biết nói tiếng Trung.', zh:'我朋友会说汉语。', py:'Wǒ péngyou huì shuō Hànyǔ.'},
  {vi:'Bạn có biết viết chữ Hán không?', zh:'你会写汉字吗？', py:'Nǐ huì xiě Hànzì ma?'},
];
