// ══════════════════════════════════════════
// DATA — HSK1 Bài 10: 我能坐这儿吗?
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'桌子',py:'zhuōzi',pos:'Danh từ',vn:'cái bàn',em:'🍽️',lesson:1,
   ex_zh:'桌子上有什么？',ex_py:'Zhuōzi shang yǒu shénme?',ex_vn:'Trên bàn có gì vậy?',
   exList:[
     {zh:'桌子上有什么？',py:'Zhuōzi shang yǒu shénme?',vn:'Trên bàn có gì vậy?'},
   ],
   hanzi:[
     {c:'桌',p:'zhuō',type:'上下结构 · Trên-dưới',st:10,ord:'占(biến thể) trên → 木(mộc) dưới',rad:'木 (mộc – gỗ, phần dưới)',mean:'cái bàn',
      tip:'占(cao lên) trên 木(gỗ) → vật bằng gỗ có mặt cao để dùng = BÀN.',
      cf:'桌 dễ nhầm 卓 (zhuó – "xuất sắc")',w:'桌子'},
   ]},
  {n:2,zh:'上',py:'shang',pos:'Danh từ',vn:'trên, phía trên',em:'⬆️',lesson:1,
   ex_zh:'桌子上有什么？',ex_py:'Zhuōzi shang yǒu shénme?',ex_vn:'Trên bàn có gì vậy?',
   exList:[
     {zh:'桌子上有什么？',py:'Zhuōzi shang yǒu shénme?',vn:'Trên bàn có gì vậy?'},
   ],
   hanzi:[
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'丨→一→一',rad:'一 (nhất)',mean:'trên, phía trên',
      tip:'Một điểm nằm TRÊN đường ngang → chỉ vị trí PHÍA TRÊN (ngược với 下 đã học Bài 8).',
      cf:'下 (xià – "dưới", đã học Bài 8")',w:'桌子上 / 上午'},
   ]},
  {n:3,zh:'电脑',py:'diànnǎo',pos:'Danh từ',vn:'máy vi tính',em:'🖥️',lesson:1,
   ex_zh:'桌子上有一个电脑和一本书。',ex_py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.',ex_vn:'Có một chiếc máy vi tính và một quyển sách.',
   exList:[
     {zh:'桌子上有一个电脑和一本书。',py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.',vn:'Có một chiếc máy vi tính và một quyển sách.'},
   ],
   hanzi:[
     {c:'电',p:'diàn',type:'独体字 · Tượng hình',st:5,ord:'日(biến thể) → 乚',rad:'雨 (vũ, biến thể)',mean:'điện',
      tip:'Hình tia chớp ngoằn ngoèo trên trời → ĐIỆN.',
      cf:'甲 (jiǎ – "giáp, hạng nhất")',w:'电脑 / 电视 / 电话'},
     {c:'脑',p:'nǎo',type:'左右结构 · Trái-phải',st:10,ord:'月(nhục) trái → 甾(biến thể) phải',rad:'月 (nhục – thịt, biến thể)',mean:'não, bộ não',
      tip:'月(bộ phận cơ thể) + phần biểu thị hộp sọ → NÃO BỘ; 电脑 = "não điện tử" = MÁY VI TÍNH.',
      cf:'恼 (nǎo – "buồn phiền")',w:'电脑'},
   ]},
  {n:4,zh:'和',py:'hé',pos:'Liên từ',vn:'và',em:'➕',lesson:1,
   ex_zh:'桌子上有一个电脑和一本书。',ex_py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.',ex_vn:'Có một chiếc máy vi tính và một quyển sách.',
   exList:[
     {zh:'桌子上有一个电脑和一本书。',py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.',vn:'Có một chiếc máy vi tính và một quyển sách.'},
   ],
   hanzi:[
     {c:'和',p:'hé',type:'左右结构 · Trái-phải',st:8,ord:'禾(hòa) trái → 口(khẩu) phải',rad:'口 (khẩu – miệng)',mean:'và',
      tip:'禾(lúa, no đủ) + 口(miệng ăn) → mọi người hoà thuận, ghép nối các thứ VÀ nhau.',
      cf:'合 (hé – "hợp", nghĩa gần giống")',w:'电脑和书'},
   ]},
  {n:5,zh:'本',py:'běn',pos:'Lượng từ',vn:'cuốn, quyển (lượng từ dùng cho sách, vở)',em:'📕',lesson:1,
   ex_zh:'桌子上有一本书。',ex_py:'Zhuōzi shang yǒu yì běn shū.',ex_vn:'Trên bàn có một quyển sách.',
   exList:[
     {zh:'桌子上有一本书。',py:'Zhuōzi shang yǒu yì běn shū.',vn:'Trên bàn có một quyển sách.'},
   ],
   hanzi:[
     {c:'本',p:'běn',type:'独体字 · Chữ đơn',st:5,ord:'木(biến thể) → 一',rad:'木 (mộc – gỗ, biến thể)',mean:'cuốn, quyển; gốc rễ',
      tip:'木(cây) thêm nét chỉ GỐC RỄ → cuốn sách được ví như "gốc" tri thức.',
      cf:'木 (mù – "cây, gỗ")',w:'一本书'},
   ]},
  {n:6,zh:'里',py:'li',pos:'Danh từ',vn:'trong, bên trong',em:'📦',lesson:1,
   ex_zh:'杯子在桌子里。',ex_py:'Bēizi zài zhuōzi li.',ex_vn:'Cái ly ở trong bàn.',
   exList:[
     {zh:'杯子在桌子里。',py:'Bēizi zài zhuōzi li.',vn:'Cái ly ở trong bàn.'},
   ],
   hanzi:[
     {c:'里',p:'lǐ',type:'独体字 · Chữ đơn',st:7,ord:'田(biến thể) → 土(biến thể)',rad:'里 (lý – tự thành bộ)',mean:'trong, bên trong',
      tip:'Hình ruộng 田 trên đất 土 → nơi ở bên trong làng xóm, mở rộng nghĩa "TRONG".',
      cf:'理 (lǐ – "lý lẽ")',w:'桌子里'},
   ]},
  {n:7,zh:'前面',py:'qiánmiàn',pos:'Danh từ',vn:'phía trước',em:'👉',lesson:2,
   ex_zh:'前面那个人叫什么名字？',ex_py:'Qiánmiàn nàge rén jiào shénme míngzi?',ex_vn:'Người ở phía trước tên gì vậy?',
   exList:[
     {zh:'前面那个人叫什么名字？',py:'Qiánmiàn nàge rén jiào shénme míngzi?',vn:'Người ở phía trước tên gì vậy?'},
   ],
   hanzi:[
     {c:'前',p:'qián',type:'上下结构 · Trên-dưới',st:9,ord:'㸚(biến thể) trên → 刖(biến thể) dưới',rad:'⺈ (đao, biến thể)',mean:'trước, phía trước',
      tip:'Hình chiếc thuyền tiến về phía trước → TRƯỚC, PHÍA TRƯỚC. (面 đã học ở Bài 9)',
      cf:'煎 (jiān – "chiên, rán")',w:'前面 / 以前'},
   ]},
  {n:8,zh:'后面',py:'hòumiàn',pos:'Danh từ',vn:'phía sau',em:'👈',lesson:2,
   ex_zh:'后面那个人呢？',ex_py:'Hòumiàn nàge rén ne?',ex_vn:'Còn người ở phía sau?',
   exList:[
     {zh:'后面那个人呢？',py:'Hòumiàn nàge rén ne?',vn:'Còn người ở phía sau?'},
   ],
   hanzi:[
     {c:'后',p:'hòu',type:'半包围结构 · Bán bao vây',st:6,ord:'厂(biến thể) → 口(khẩu) trong',rad:'口 (khẩu – miệng)',mean:'sau, phía sau',
      tip:'Hình người đứng sau ra lệnh → chỉ vị trí PHÍA SAU, thời gian SAU. (面 đã học ở Bài 9)',
      cf:'厚 (hòu – "dày")',w:'后面 / 以后'},
   ]},
  {n:9,zh:'这儿',py:'zhèr',pos:'Đại từ',vn:'chỗ này, ở đây',em:'📍',lesson:3,
   ex_zh:'我能坐这儿吗？',ex_py:'Wǒ néng zuò zhèr ma?',ex_vn:'Tôi có thể ngồi ở đây được không?',
   exList:[
     {zh:'我能坐这儿吗？',py:'Wǒ néng zuò zhèr ma?',vn:'Tôi có thể ngồi ở đây được không?'},
   ],
   hanzi:[]},
  {n:10,zh:'没有',py:'méiyǒu',pos:'Phó từ',vn:'không có',em:'🚫',lesson:3,
   ex_zh:'这儿有人吗？没有。',ex_py:'Zhèr yǒu rén ma? Méiyǒu.',ex_vn:'Chỗ này có ai ngồi chưa? Chưa.',
   exList:[
     {zh:'这儿有人吗？没有。',py:'Zhèr yǒu rén ma? Méiyǒu.',vn:'Chỗ này có ai ngồi chưa? Chưa.'},
   ],
   hanzi:[
     {c:'没',p:'méi',type:'左右结构 · Trái-phải',st:7,ord:'氵(thuỷ) trái → 殳(biến thể) phải',rad:'氵 (thuỷ – nước)',mean:'không, không có',
      tip:'氵(nước) dâng lên che lấp mọi thứ → mang nghĩa KHÔNG CÒN, KHÔNG CÓ. (有 đã học ở Bài 5)',
      cf:'汉 (hàn – "Hán", cũng có bộ 氵")',w:'没有 / 没关系'},
   ]},
  {n:11,zh:'能',py:'néng',pos:'Động từ năng nguyện',vn:'có thể',em:'✅',lesson:3,
   ex_zh:'我能坐这儿吗？',ex_py:'Wǒ néng zuò zhèr ma?',ex_vn:'Tôi có thể ngồi ở đây được không?',
   exList:[
     {zh:'我能坐这儿吗？',py:'Wǒ néng zuò zhèr ma?',vn:'Tôi có thể ngồi ở đây được không?'},
   ],
   hanzi:[
     {c:'能',p:'néng',type:'左右结构 · Trái-phải',st:10,ord:'厶月(biến thể) trái → 匕匕(biến thể) phải',rad:'月 (nhục – thịt, biến thể)',mean:'có thể',
      tip:'Hình con gấu mạnh mẽ (chữ cổ) → biểu tượng NĂNG LỰC, khả năng làm được việc gì = CÓ THỂ.',
      cf:'熊 (xióng – "con gấu", cùng gốc")',w:'我能坐这儿吗'},
   ]},
  {n:12,zh:'坐',py:'zuò',pos:'Động từ',vn:'ngồi',em:'🪑',lesson:3,
   ex_zh:'请坐。',ex_py:'Qǐng zuò.',ex_vn:'Mời ngồi.',
   exList:[
     {zh:'请坐。',py:'Qǐng zuò.',vn:'Mời ngồi.'},
   ],
   hanzi:[
     {c:'坐',p:'zuò',type:'上下结构 · Trên-dưới',st:7,ord:'从(biến thể) trên → 土(thổ) dưới',rad:'土 (thổ – đất)',mean:'ngồi',
      tip:'从(hai người) ngồi trên 土(đất/ghế) → NGỒI.',
      cf:'座 (zuò – "chỗ ngồi", danh từ tương ứng")',w:'请坐 / 能坐这儿'},
   ]},
];

const wuData = [
  {img:'🖥️',label:'电脑',py:'diànnǎo',letter:'A'},
  {img:'🍽️',label:'桌子',py:'zhuōzi',letter:'B'},
  {img:'👉',label:'前面',py:'qiánmiàn',letter:'C'},
  {img:'👈',label:'后面',py:'hòumiàn',letter:'D'},
  {img:'🪑',label:'坐',py:'zuò',letter:'E'},
  {img:'📦',label:'里',py:'li',letter:'F'},
];

var dialogData = [
  {scene:'Trong văn phòng · Đồ vật trên bàn',
   lines:[
     {sp:0,zh:'桌子上有什么？',py:'Zhuōzi shang yǒu shénme?',vn:'Trên bàn có gì vậy?'},
     {sp:1,zh:'桌子上有一个电脑和一本书。',py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.',vn:'Có một chiếc máy vi tính và một quyển sách.'},
     {sp:0,zh:'杯子在哪儿？',py:'Bēizi zài nǎr?',vn:'Vậy cái ly đâu?'},
     {sp:1,zh:'杯子在桌子里。',py:'Bēizi zài zhuōzi li.',vn:'Ở trong bàn.'},
   ]},
  {scene:'Ở phòng tập thể dục · Hỏi tên người',
   lines:[
     {sp:0,zh:'前面那个人叫什么名字？',py:'Qiánmiàn nàge rén jiào shénme míngzi?',vn:'Người ở phía trước tên gì vậy?'},
     {sp:1,zh:'她叫王方，在医院工作。',py:'Tā jiào Wáng Fāng, zài yīyuàn gōngzuò.',vn:'Cô ấy tên là Vương Phương, làm việc ở bệnh viện.'},
     {sp:0,zh:'后面那个人呢？他叫什么名字？',py:'Hòumiàn nàge rén ne? Tā jiào shénme míngzi?',vn:'Còn người ở phía sau? Anh ấy tên gì?'},
     {sp:1,zh:'他叫谢朋，在商店工作。',py:'Tā jiào Xiè Péng, zài shāngdiàn gōngzuò.',vn:'Anh ấy tên Tạ Bằng, làm việc ở cửa hàng.'},
   ]},
  {scene:'Ở thư viện · Xin phép ngồi',
   lines:[
     {sp:0,zh:'这儿有人吗？',py:'Zhèr yǒu rén ma?',vn:'Chỗ này có ai ngồi chưa?'},
     {sp:1,zh:'没有。',py:'Méiyǒu.',vn:'Chưa.'},
     {sp:0,zh:'我能坐这儿吗？',py:'Wǒ néng zuò zhèr ma?',vn:'Tôi có thể ngồi ở đây được không?'},
     {sp:1,zh:'请坐。',py:'Qǐng zuò.',vn:'Mời ngồi.'},
   ]},
];

// Điền từ — đổi đồ vật/địa điểm so với bài khoá
var fillData = [
  {pre:'Bạn hỏi trên bàn có gì: “桌子',blank:'上',post:'有什么？”',hint:'(trên, phía trên)',ans:'上'},
  {pre:'Bạn nói có sách và máy tính: “桌子上有一本书',blank:'和',post:'一个电脑。”',hint:'(và)',ans:'和'},
  {pre:'Bạn nói tiền để trong ngăn bàn: “钱在桌子',blank:'里',post:'。”',hint:'(trong, bên trong)',ans:'里'},
  {pre:'Bạn hỏi tên người đứng phía trước: “',blank:'前面',post:'那个人叫什么名字？”',hint:'(phía trước)',ans:'前面'},
  {pre:'Bạn hỏi tên người đứng phía sau: “',blank:'后面',post:'那个人叫什么名字？”',hint:'(phía sau)',ans:'后面'},
  {pre:'Bạn nói chỗ này chưa có ai: “这儿',blank:'没有',post:'人。”',hint:'(không có)',ans:'没有'},
  {pre:'Bạn xin phép ngồi: “我',blank:'能',post:'坐这儿吗？”',hint:'(có thể)',ans:'能'},
  {pre:'Bạn mời người khác ngồi: “请',blank:'坐',post:'。”',hint:'(ngồi)',ans:'坐'},
];

// Sắp xếp — đổi câu chữ/đồ vật so với bài khoá
var sortData = [
  {words:['桌子','上','有','一','个','电脑','。'],ans:'桌子上有一个电脑。',audio:'桌子上有一个电脑。'},
  {words:['钱','在','桌子','里','。'],ans:'钱在桌子里。',audio:'钱在桌子里。'},
  {words:['前面','那个','人','叫','什么','名字','？'],ans:'前面那个人叫什么名字？',audio:'前面那个人叫什么名字？'},
  {words:['她','在','医院','工作','。'],ans:'她在医院工作。',audio:'她在医院工作。'},
  {words:['这儿','有','人','吗','？'],ans:'这儿有人吗？',audio:'这儿有人吗？'},
  {words:['我','能','坐','这儿','吗','？'],ans:'我能坐这儿吗？',audio:'我能坐这儿吗？'},
];

var matchData = [
  {left:'桌子上有什么？',right:'桌子上有一个电脑和一本书。'},
  {left:'杯子在哪儿？',right:'杯子在桌子里。'},
  {left:'前面那个人叫什么名字？',right:'她叫王方，在医院工作。'},
  {left:'这儿有人吗？',right:'没有。'},
  {left:'我能坐这儿吗？',right:'请坐。'},
];

// Trắc nghiệm — trọng tâm 和/没有/能, không audio
var mcData = [
  {q:'桌子＿＿有什么？',opts:['上','下','里','和'],ans:0},
  {q:'桌子上有一本书＿＿一个电脑。',opts:['和','是','有','在'],ans:0},
  {q:'钱在桌子＿＿。',opts:['里','上','和','能'],ans:0},
  {q:'"能" nghĩa là gì?',opts:['có thể','muốn','biết','cần'],ans:0},
  {q:'"没有" là phủ định của từ nào?',opts:['有','是','在','能'],ans:0},
  {q:'"这儿有人吗？" — trả lời phủ định đúng là?',opts:['没有','不有','不是','没是'],ans:0},
  {q:'"前面" nghĩa là gì?',opts:['phía trước','phía sau','bên trong','bên trên'],ans:0},
  {q:'"后面" nghĩa là gì?',opts:['phía sau','phía trước','bên trong','bên dưới'],ans:0},
  {q:'Xin phép ngồi lịch sự dùng cấu trúc nào?',opts:['能……吗？','要……吗？','是……吗？','有……吗？'],ans:0},
  {q:'"电脑" nghĩa là gì?',opts:['máy vi tính','điện thoại','sách','bàn'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'桌子上有什么？',py:'Zhuōzi shang yǒu shénme?',vn:'Trên bàn có gì vậy?'},
      {zh:'桌子上有一个电脑和一本书。',py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.',vn:'Có một chiếc máy vi tính và một quyển sách.'},
      {zh:'前面那个人叫什么名字？',py:'Qiánmiàn nàge rén jiào shénme míngzi?',vn:'Người ở phía trước tên gì vậy?'},
      {zh:'这儿有人吗？',py:'Zhèr yǒu rén ma?',vn:'Chỗ này có ai ngồi chưa?'},
      {zh:'我能坐这儿吗？',py:'Wǒ néng zuò zhèr ma?',vn:'Tôi có thể ngồi ở đây được không?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'桌子上有一个＿＿。',frame_py:'Zhuōzi shang yǒu yí ge ___.',vn:'Trên bàn có một cái ＿＿.',options:['电脑','杯子'],samples:['桌子上有一个电脑。','桌子上有一个杯子。']},
      {frame:'桌子＿＿有钱。',frame_py:'Zhuōzi ___ yǒu qián.',vn:'＿＿ bàn có tiền.',options:['里','上'],samples:['桌子里有钱。','桌子上有钱。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'💻 Tình huống 1 — Miêu tả đồ vật trên bàn làm việc',
       guide:'Đồng nghiệp hỏi bạn trên bàn làm việc của bạn có những gì.',
       structure:['桌子上有什么？','桌子上有一个＿＿和一本＿＿。'],
       sample:'桌子上有什么？桌子上有一个电脑和一本书。',
       sample_vn:'Trên bàn có gì vậy? Có một chiếc máy vi tính và một quyển sách.',
       note:'Liên từ 和 chỉ dùng để nối DANH TỪ với danh từ (电脑 和 书) — không dùng để nối hai câu hoàn chỉnh như "và" trong tiếng Việt.'},
      {role:'🏋️ Tình huống 2 — Hỏi tên người lạ trong phòng tập',
       guide:'Bạn muốn hỏi tên hai người đang đứng trước và sau bạn trong phòng tập thể dục.',
       structure:['前面那个人叫什么名字？','后面那个人呢？'],
       sample:'前面那个人叫什么名字？后面那个人呢？',
       sample_vn:'Người ở phía trước tên gì vậy? Còn người ở phía sau?',
       note:'前面/后面 + 那个人 là cách chỉ người một cách LỊCH SỰ khi chưa biết tên, thường dùng khi mô tả vị trí tương đối trong đám đông.'},
      {role:'📚 Tình huống 3 — Xin phép ngồi ở thư viện',
       guide:'Bạn vào thư viện và thấy một chỗ trống, hãy hỏi xem có ai ngồi chưa và xin phép ngồi.',
       structure:['这儿有人吗？','我能坐这儿吗？'],
       sample:'这儿有人吗？没有。我能坐这儿吗？请坐。',
       sample_vn:'Chỗ này có ai ngồi chưa? Chưa. Tôi có thể ngồi ở đây được không? Mời ngồi.',
       note:'能……吗？ là cách xin phép LỊCH SỰ rất thông dụng — dùng được trong hầu hết tình huống xin phép hàng ngày, không chỉ riêng việc ngồi.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 10 + ôn lại từ bài 1-9
// ══════════════════════════════════════════
var translateData = [
  {vi:'Trên bàn có một máy tính và một quyển sách.', zh:'桌子上有一个电脑和一本书。', py:'Zhuōzi shang yǒu yí ge diànnǎo hé yì běn shū.'},
  {vi:'Tôi có thể ngồi đây không?', zh:'我能坐这儿吗？', py:'Wǒ néng zuò zhèr ma?'},
  {vi:'Trong bàn không có tiền.', zh:'桌子里没有钱。', py:'Zhuōzi lǐ méiyǒu qián.'},
  {vi:'Mời ngồi!', zh:'请坐！', py:'Qǐng zuò!'},
];
