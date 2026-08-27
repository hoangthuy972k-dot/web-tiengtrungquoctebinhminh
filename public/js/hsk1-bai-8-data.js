// ══════════════════════════════════════════
// DATA — HSK1 Bài 8: 我想喝茶
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'想',py:'xiǎng',pos:'Động từ năng nguyện',vn:'muốn, dự định làm gì',em:'💭',lesson:1,
   ex_zh:'我想喝茶。',ex_py:'Wǒ xiǎng hē chá.',ex_vn:'Tôi muốn uống trà.',
   exList:[
     {zh:'我想喝茶。',py:'Wǒ xiǎng hē chá.',vn:'Tôi muốn uống trà.'},
     {zh:'你想喝什么？',py:'Nǐ xiǎng hē shénme?',vn:'Cô muốn uống gì?'},
   ],
   hanzi:[
     {c:'想',p:'xiǎng',type:'上下结构 · Trên-dưới',st:13,ord:'相(tương) trên → 心(tâm) dưới',rad:'心 (tâm – trái tim)',mean:'muốn, nghĩ, dự định',
      tip:'相(nhìn nhau, quan sát) + 心(tâm trí) → trong lòng suy nghĩ, mong MUỐN điều gì.',
      cf:'相 (xiāng – "lẫn nhau")',w:'我想 / 你想'},
   ]},
  {n:2,zh:'喝',py:'hē',pos:'Động từ',vn:'uống',em:'🥤',lesson:1,
   ex_zh:'我想喝茶。',ex_py:'Wǒ xiǎng hē chá.',ex_vn:'Tôi muốn uống trà.',
   exList:[
     {zh:'我想喝茶。',py:'Wǒ xiǎng hē chá.',vn:'Tôi muốn uống trà.'},
   ],
   hanzi:[
     {c:'喝',p:'hē',type:'左右结构 · Trái-phải',st:12,ord:'口(khẩu) trái → 曷(hạt) phải',rad:'口 (khẩu – miệng)',mean:'uống',
      tip:'口(miệng) dùng để UỐNG chất lỏng.',
      cf:'渴 (kě – "khát", cũng có 曷")',w:'喝茶 / 喝水'},
   ]},
  {n:3,zh:'茶',py:'chá',pos:'Danh từ',vn:'trà',em:'🍵',lesson:1,
   ex_zh:'我想喝茶。',ex_py:'Wǒ xiǎng hē chá.',ex_vn:'Tôi muốn uống trà.',
   exList:[
     {zh:'我想喝茶。',py:'Wǒ xiǎng hē chá.',vn:'Tôi muốn uống trà.'},
   ],
   hanzi:[
     {c:'茶',p:'chá',type:'上下结构 · Trên-dưới',st:9,ord:'艹(thảo) trên → 余(biến thể) dưới',rad:'艹 (thảo – cỏ cây)',mean:'trà',
      tip:'艹(lá cây) pha thành thức uống → TRÀ.',
      cf:'茶 dễ nhầm 荼 (tú – "cỏ đắng")',w:'喝茶'},
   ]},
  {n:4,zh:'吃',py:'chī',pos:'Động từ',vn:'ăn',em:'🍽️',lesson:1,
   ex_zh:'我想吃米饭。',ex_py:'Wǒ xiǎng chī mǐfàn.',ex_vn:'Tôi muốn ăn cơm.',
   exList:[
     {zh:'我想吃米饭。',py:'Wǒ xiǎng chī mǐfàn.',vn:'Tôi muốn ăn cơm.'},
   ],
   hanzi:[]},
  {n:5,zh:'米饭',py:'mǐfàn',pos:'Danh từ',vn:'cơm',em:'🍚',lesson:1,
   ex_zh:'我想吃米饭。',ex_py:'Wǒ xiǎng chī mǐfàn.',ex_vn:'Tôi muốn ăn cơm.',
   exList:[
     {zh:'我想吃米饭。',py:'Wǒ xiǎng chī mǐfàn.',vn:'Tôi muốn ăn cơm.'},
   ],
   hanzi:[
     {c:'米',p:'mǐ',type:'独体字 · Tượng hình',st:6,ord:'丶→一→丨→㇏→ノ→一',rad:'米 (mễ – tự thành bộ)',mean:'gạo',
      tip:'Hình hạt gạo tản ra từ bông lúa → GẠO.',
      cf:'来 (lái – "đến")',w:'米饭'},
     {c:'饭',p:'fàn',type:'左右结构 · Trái-phải',st:7,ord:'饣(thực) trái → 反(phản) phải',rad:'饣 (thực – ăn uống)',mean:'cơm',
      tip:'饣(bộ ăn uống) + 反(lật qua lật lại, xới cơm) → CƠM.',
      cf:'饱 (bǎo – "no")',w:'米饭'},
   ]},
  {n:6,zh:'下午',py:'xiàwǔ',pos:'Danh từ',vn:'buổi chiều',em:'🌇',lesson:2,
   ex_zh:'下午你想做什么？',ex_py:'Xiàwǔ nǐ xiǎng zuò shénme?',ex_vn:'Buổi chiều bạn muốn làm gì?',
   exList:[
     {zh:'下午你想做什么？',py:'Xiàwǔ nǐ xiǎng zuò shénme?',vn:'Buổi chiều bạn muốn làm gì?'},
   ],
   hanzi:[
     {c:'下',p:'xià',type:'独体字 · Chữ đơn',st:3,ord:'一→丨→丶',rad:'一 (nhất)',mean:'dưới, phía dưới',
      tip:'Một điểm nằm DƯỚI đường ngang → chỉ vị trí PHÍA DƯỚI.',
      cf:'卡 (kǎ – "thẻ")',w:'下午 / 下面'},
     {c:'午',p:'wǔ',type:'独体字 · Chữ đơn',st:4,ord:'ノ→一→十(biến thể)',rad:'十 (thập, biến thể)',mean:'buổi trưa',
      tip:'Hình cái chày giã gạo lúc giữa trưa → BUỔI TRƯA.',
      cf:'牛 (niú – "con trâu")',w:'下午 / 中午'},
   ]},
  {n:7,zh:'商店',py:'shāngdiàn',pos:'Danh từ',vn:'cửa hàng, tiệm',em:'🏪',lesson:2,
   ex_zh:'下午我想去商店。',ex_py:'Xiàwǔ wǒ xiǎng qù shāngdiàn.',ex_vn:'Chiều nay mình muốn đến cửa hàng.',
   exList:[
     {zh:'下午我想去商店。',py:'Xiàwǔ wǒ xiǎng qù shāngdiàn.',vn:'Chiều nay mình muốn đến cửa hàng.'},
   ],
   hanzi:[
     {c:'商',p:'shāng',type:'上下结构 · Trên-dưới',st:11,ord:'立(lập) trên → 冏(biến thể) dưới',rad:'冂 (biến thể)',mean:'buôn bán, thương mại',
      tip:'Người đứng 立 tính toán trao đổi hàng hoá → THƯƠNG MẠI, BUÔN BÁN.',
      cf:'裔 (yì – "hậu duệ")',w:'商店'},
     {c:'店',p:'diàn',type:'半包围结构 · Bán bao vây',st:8,ord:'广(nghiễm) ngoài → 占(chiếm) trong',rad:'广 (nghiễm – mái hiên)',mean:'cửa hàng, tiệm',
      tip:'广(mái nhà lớn) + 占(bày bán) → nơi bày bán hàng hoá = CỬA HÀNG.',
      cf:'点 (diǎn – "điểm, giờ")',w:'商店'},
   ]},
  {n:8,zh:'买',py:'mǎi',pos:'Động từ',vn:'mua',em:'🛒',lesson:2,
   ex_zh:'你想买什么？',ex_py:'Nǐ xiǎng mǎi shénme?',ex_vn:'Bạn muốn mua gì vậy?',
   exList:[
     {zh:'你想买什么？',py:'Nǐ xiǎng mǎi shénme?',vn:'Bạn muốn mua gì vậy?'},
   ],
   hanzi:[
     {c:'买',p:'mǎi',type:'独体字 · Chữ đơn',st:6,ord:'一→フ→大(biến thể)',rad:'大 (đại, biến thể)',mean:'mua',
      tip:'Hình dáng cầm vật phẩm trao đổi → MUA.',
      cf:'卖 (mài – "bán", thêm nét trên đầu")',w:'买东西 / 买杯子'},
   ]},
  {n:9,zh:'个',py:'gè',pos:'Lượng từ',vn:'cái, chiếc (lượng từ dùng chung)',em:'🔘',lesson:2,
   ex_zh:'我想买一个杯子。',ex_py:'Wǒ xiǎng mǎi yí ge bēizi.',ex_vn:'Mình muốn mua một cái ly.',
   exList:[
     {zh:'我想买一个杯子。',py:'Wǒ xiǎng mǎi yí ge bēizi.',vn:'Mình muốn mua một cái ly.'},
   ],
   hanzi:[
     {c:'个',p:'gè',type:'独体字 · Chữ đơn',st:3,ord:'丿→丨→㇏',rad:'人 (nhân, biến thể)',mean:'cái, chiếc',
      tip:'Hình đơn giản một cá thể đứng riêng lẻ → lượng từ dùng CHUNG cho hầu hết danh từ.',
      cf:'介 (jiè – "giới thiệu")',w:'一个 / 这个 / 那个'},
   ]},
  {n:10,zh:'杯子',py:'bēizi',pos:'Danh từ',vn:'cốc, ly, tách',em:'☕',lesson:2,
   ex_zh:'我想买一个杯子。',ex_py:'Wǒ xiǎng mǎi yí ge bēizi.',ex_vn:'Mình muốn mua một cái ly.',
   exList:[
     {zh:'我想买一个杯子。',py:'Wǒ xiǎng mǎi yí ge bēizi.',vn:'Mình muốn mua một cái ly.'},
   ],
   hanzi:[
     {c:'杯',p:'bēi',type:'左右结构 · Trái-phải',st:8,ord:'木(mộc) trái → 不(bất) phải',rad:'木 (mộc – gỗ)',mean:'cốc, ly, tách',
      tip:'木(gỗ, vật liệu làm cốc thời xưa) + 不(mượn âm) → CỐC, LY.',
      cf:'坏 (huài – "hỏng")',w:'杯子 / 一杯茶'},
     {c:'子',p:'zi',type:'独体字 · Tượng hình',st:3,ord:'了→一',rad:'子 (tử – tự thành bộ)',mean:'con; hậu tố danh từ',
      tip:'Hình đứa trẻ mới sinh, tay chân còn quấn tã → CON; dùng làm hậu tố cho nhiều danh từ (杯子, 椅子...).',
      cf:'孑 (jié – "cô độc")',w:'杯子 / 儿子'},
   ]},
  {n:11,zh:'这',py:'zhè',pos:'Đại từ',vn:'đây, này',em:'👇',lesson:3,
   ex_zh:'这个杯子多少钱？',ex_py:'Zhège bēizi duōshao qián?',ex_vn:'Cái ly này bao nhiêu tiền?',
   exList:[
     {zh:'这个杯子多少钱？',py:'Zhège bēizi duōshao qián?',vn:'Cái ly này bao nhiêu tiền?'},
   ],
   hanzi:[
     {c:'这',p:'zhè',type:'半包围结构 · Bán bao vây',st:7,ord:'文(biến thể) → 辶(sước) bao ngoài',rad:'辶 (sước – đi)',mean:'này, đây',
      tip:'辶(đi tới gần) → chỉ vật/việc GẦN người nói = NÀY, ĐÂY.',
      cf:'达 (dá – "đạt tới")',w:'这个 / 这是'},
   ]},
  {n:12,zh:'多少',py:'duōshao',pos:'Đại từ',vn:'bao nhiêu (hỏi số lượng thường lớn hơn 10)',em:'❔',lesson:3,
   ex_zh:'这个杯子多少钱？',ex_py:'Zhège bēizi duōshao qián?',ex_vn:'Cái ly này bao nhiêu tiền?',
   exList:[
     {zh:'这个杯子多少钱？',py:'Zhège bēizi duōshao qián?',vn:'Cái ly này bao nhiêu tiền?'},
   ],
   hanzi:[
     {c:'少',p:'shǎo',type:'独体字 · Chữ đơn',st:4,ord:'小(biến thể) → 丿',rad:'小 (tiểu – nhỏ, biến thể)',mean:'ít',
      tip:'小(nhỏ) thêm một nét phẩy → càng NHỎ, ÍT hơn nữa; ghép với 多(nhiều) để hỏi SỐ LƯỢNG.',
      cf:'小 (xiǎo – "nhỏ")',w:'多少钱 / 多少人'},
   ]},
  {n:13,zh:'钱',py:'qián',pos:'Danh từ',vn:'tiền',em:'💰',lesson:3,
   ex_zh:'这个杯子多少钱？',ex_py:'Zhège bēizi duōshao qián?',ex_vn:'Cái ly này bao nhiêu tiền?',
   exList:[
     {zh:'这个杯子多少钱？',py:'Zhège bēizi duōshao qián?',vn:'Cái ly này bao nhiêu tiền?'},
   ],
   hanzi:[
     {c:'钱',p:'qián',type:'左右结构 · Trái-phải',st:10,ord:'钅(kim) trái → 戋(biến thể) phải',rad:'钅 (kim – kim loại)',mean:'tiền',
      tip:'钅(kim loại, đúc tiền xu) → TIỀN.',
      cf:'浅 (qiǎn – "nông, cạn")',w:'多少钱 / 花钱'},
   ]},
  {n:14,zh:'块',py:'kuài',pos:'Lượng từ',vn:'đồng (đơn vị tiền tệ khẩu ngữ)',em:'💵',lesson:3,
   ex_zh:'28块。',ex_py:'Èrshíbā kuài.',ex_vn:'28 đồng.',
   exList:[
     {zh:'28块。',py:'Èrshíbā kuài.',vn:'28 đồng.'},
   ],
   hanzi:[
     {c:'块',p:'kuài',type:'左右结构 · Trái-phải',st:7,ord:'土(thổ) trái → 夬(quyết) phải',rad:'土 (thổ – đất)',mean:'đồng (tiền), cục, miếng',
      tip:'土(đất nặn thành cục) → mở rộng dùng để đếm ĐỒNG TIỀN, MIẾNG.',
      cf:'快 (kuài – "nhanh", cùng phần 夬")',w:'28块 / 一块钱'},
   ]},
  {n:15,zh:'那',py:'nà',pos:'Đại từ',vn:'kia, đó',em:'👉',lesson:3,
   ex_zh:'那个杯子18块钱。',ex_py:'Nàge bēizi shíbā kuài qián.',ex_vn:'Ly đó 18 đồng.',
   exList:[
     {zh:'那个杯子18块钱。',py:'Nàge bēizi shíbā kuài qián.',vn:'Ly đó 18 đồng.'},
   ],
   hanzi:[
     {c:'那',p:'nà',type:'左右结构 · Trái-phải',st:6,ord:'刀(biến thể) → 阝(ấp) phải',rad:'阝 (ấp – thành ấp, phần phải)',mean:'kia, đó',
      tip:'阝(vùng đất, thành ấp ở xa) → chỉ vật/việc XA người nói = KIA, ĐÓ.',
      cf:'哪 (nǎ – "nào", đã học Bài 4")',w:'那个 / 那是'},
   ]},
];

const wuData = [
  {img:'🍵',label:'茶',py:'chá',letter:'A'},
  {img:'🍚',label:'米饭',py:'mǐfàn',letter:'B'},
  {img:'🏪',label:'商店',py:'shāngdiàn',letter:'C'},
  {img:'☕',label:'杯子',py:'bēizi',letter:'D'},
  {img:'💰',label:'钱',py:'qián',letter:'E'},
  {img:'🥤',label:'喝',py:'hē',letter:'F'},
];

var dialogData = [
  {scene:'Ở quán ăn · Gọi đồ uống, món ăn',
   lines:[
     {sp:0,zh:'你想喝什么？',py:'Nǐ xiǎng hē shénme?',vn:'Cô muốn uống gì?'},
     {sp:1,zh:'我想喝茶。',py:'Wǒ xiǎng hē chá.',vn:'Tôi muốn uống trà.'},
     {sp:0,zh:'你想吃什么？',py:'Nǐ xiǎng chī shénme?',vn:'Cô muốn dùng món gì?'},
     {sp:1,zh:'我想吃米饭。',py:'Wǒ xiǎng chī mǐfàn.',vn:'Tôi muốn ăn cơm.'},
   ]},
  {scene:'Trong phòng khách · Kế hoạch buổi chiều',
   lines:[
     {sp:0,zh:'下午你想做什么？',py:'Xiàwǔ nǐ xiǎng zuò shénme?',vn:'Buổi chiều bạn muốn làm gì?'},
     {sp:1,zh:'下午我想去商店。',py:'Xiàwǔ wǒ xiǎng qù shāngdiàn.',vn:'Mình muốn đến cửa hàng.'},
     {sp:0,zh:'你想买什么？',py:'Nǐ xiǎng mǎi shénme?',vn:'Bạn muốn mua gì vậy?'},
     {sp:1,zh:'我想买一个杯子。',py:'Wǒ xiǎng mǎi yí ge bēizi.',vn:'Mình muốn mua một cái ly.'},
   ]},
  {scene:'Ở cửa hàng · Hỏi giá',
   lines:[
     {sp:0,zh:'你好！这个杯子多少钱？',py:'Nǐ hǎo! Zhège bēizi duōshao qián?',vn:'Chào cô! Cái ly này bao nhiêu tiền?'},
     {sp:1,zh:'28块。',py:'Èrshíbā kuài.',vn:'28 đồng.'},
     {sp:0,zh:'那个杯子多少钱？',py:'Nàge bēizi duōshao qián?',vn:'Còn cái ly đó?'},
     {sp:1,zh:'那个杯子18块钱。',py:'Nàge bēizi shíbā kuài qián.',vn:'Ly đó 18 đồng.'},
   ]},
];

// Điền từ — đổi đối tượng/giá so với bài khoá
var fillData = [
  {pre:'Bạn muốn gọi món uống ở quán: “我',blank:'想',post:'喝茶。”',hint:'(muốn)',ans:'想'},
  {pre:'Bạn hỏi ai đó muốn ăn gì: “你想',blank:'吃',post:'什么？”',hint:'(ăn)',ans:'吃'},
  {pre:'Bạn hỏi giá của cái ly: “这个杯子',blank:'多少',post:'钱？”',hint:'(bao nhiêu — số lớn)',ans:'多少'},
  {pre:'Bạn nói giá mười lăm đồng: “十五',blank:'块',post:'。”',hint:'(đồng — đơn vị tiền khẩu ngữ)',ans:'块'},
  {pre:'Bạn hỏi buổi chiều ai đó định làm gì: “',blank:'下午',post:'你想做什么？”',hint:'(buổi chiều)',ans:'下午'},
  {pre:'Bạn nói mình muốn đi mua sắm: “我想去',blank:'商店',post:'。”',hint:'(cửa hàng)',ans:'商店'},
  {pre:'Chỉ vào vật gần mình: “',blank:'这',post:'是我的杯子。”',hint:'(này, đây)',ans:'这'},
  {pre:'Chỉ vào vật xa mình: “',blank:'那',post:'是你的杯子。”',hint:'(kia, đó)',ans:'那'},
];

// Sắp xếp — đổi giá/đồ vật so với bài khoá
var sortData = [
  {words:['你','想','喝','什么','？'],ans:'你想喝什么？',audio:'你想喝什么？'},
  {words:['我','想','吃','米饭','。'],ans:'我想吃米饭。',audio:'我想吃米饭。'},
  {words:['下午','我','想','去','商店','。'],ans:'下午我想去商店。',audio:'下午我想去商店。'},
  {words:['我','想','买','一','个','杯子','。'],ans:'我想买一个杯子。',audio:'我想买一个杯子。'},
  {words:['这个','杯子','多少','钱','？'],ans:'这个杯子多少钱？',audio:'这个杯子多少钱？'},
  {words:['那个','杯子','十五','块','钱','。'],ans:'那个杯子十五块钱。',audio:'那个杯子十五块钱。'},
];

var matchData = [
  {left:'你想喝什么？',right:'我想喝茶。'},
  {left:'下午你想做什么？',right:'下午我想去商店。'},
  {left:'你想买什么？',right:'我想买一个杯子。'},
  {left:'这个杯子多少钱？',right:'28块。'},
  {left:'那个杯子多少钱？',right:'那个杯子18块钱。'},
];

// Trắc nghiệm — trọng tâm 想/多少/这-那, không audio
var mcData = [
  {q:'我＿＿喝茶。(muốn)',opts:['想','会','是','有'],ans:0},
  {q:'这个杯子＿＿钱？(hỏi số lớn hơn 10)',opts:['多少','几','怎么','什么'],ans:0},
  {q:'"个" là loại từ nào?',opts:['lượng từ dùng chung','danh từ chỉ người','động từ','tính từ'],ans:0},
  {q:'"这" và "那" khác nhau thế nào?',opts:['这 chỉ vật gần, 那 chỉ vật xa','这 chỉ vật xa, 那 chỉ vật gần','cả hai đều chỉ vật gần','cả hai đều chỉ vật xa'],ans:0},
  {q:'Đơn vị tiền tệ khẩu ngữ (nói) là gì?',opts:['块','元','钱','毛'],ans:0},
  {q:'"米饭" nghĩa là gì?',opts:['cơm','trà','nước','bánh'],ans:0},
  {q:'"商店" nghĩa là gì?',opts:['cửa hàng','trường học','ngân hàng','thư viện'],ans:0},
  {q:'"买" nghĩa là gì?',opts:['mua','bán','cho','tặng'],ans:0},
  {q:'Câu nào ĐÚNG khi hỏi giá?',opts:['这个杯子多少钱？','这个杯子几钱？','这个杯子多钱？','这个杯子怎么钱？'],ans:0},
  {q:'"喝" nghĩa là gì?',opts:['uống','ăn','nói','đọc'],ans:0},
];

var speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'你想喝什么？',py:'Nǐ xiǎng hē shénme?',vn:'Cô muốn uống gì?'},
      {zh:'我想喝茶。',py:'Wǒ xiǎng hē chá.',vn:'Tôi muốn uống trà.'},
      {zh:'下午我想去商店。',py:'Xiàwǔ wǒ xiǎng qù shāngdiàn.',vn:'Chiều nay mình muốn đến cửa hàng.'},
      {zh:'我想买一个杯子。',py:'Wǒ xiǎng mǎi yí ge bēizi.',vn:'Mình muốn mua một cái ly.'},
      {zh:'这个杯子多少钱？',py:'Zhège bēizi duōshao qián?',vn:'Cái ly này bao nhiêu tiền?'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我想买＿＿。',frame_py:'Wǒ xiǎng mǎi ___.',vn:'Tôi muốn mua ＿＿.',options:['一个杯子','一本书'],samples:['我想买一个杯子。','我想买一本书。']},
      {frame:'这个＿＿多少钱？',frame_py:'Zhège ___ duōshao qián?',vn:'Cái ＿＿ này bao nhiêu tiền?',options:['杯子','书'],samples:['这个杯子多少钱？','这本书多少钱？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, hãy tưởng tượng bạn đang ở trong tình huống thực tế và tự nói ra câu phù hợp.',
    tasks:[
      {role:'☕ Tình huống 1 — Gọi đồ uống ở quán',
       guide:'Bạn đang ở quán ăn, nhân viên hỏi bạn muốn dùng gì.',
       structure:['你想喝什么？','我想喝＿＿。'],
       sample:'你想喝什么？我想喝茶。',
       sample_vn:'Bạn muốn uống gì? Tôi muốn uống trà.',
       note:'想 dùng để diễn tả MONG MUỐN, nguyện vọng cá nhân — nhẹ nhàng hơn 要 (sẽ học sau) vốn mang tính quyết định dứt khoát hơn.'},
      {role:'🛍️ Tình huống 2 — Lên kế hoạch mua sắm buổi chiều',
       guide:'Bạn định đi mua sắm buổi chiều và nói cho bạn cùng phòng biết kế hoạch của mình.',
       structure:['下午你想做什么？','下午我想去商店买＿＿。'],
       sample:'下午你想做什么？下午我想去商店买杯子。',
       sample_vn:'Buổi chiều bạn muốn làm gì? Chiều nay mình muốn đến cửa hàng mua ly.',
       note:'Có thể ghép nhiều động từ liên tiếp trong một câu (去商店买杯子) để diễn tả một CHUỖI HÀNH ĐỘNG có mục đích, giống câu liên động đã học ở Bài 7.'},
      {role:'💰 Tình huống 3 — Hỏi giá khi mua sắm',
       guide:'Bạn đang ở cửa hàng, muốn hỏi giá của hai món đồ khác nhau để so sánh.',
       structure:['这个杯子多少钱？','那个＿＿多少钱？'],
       sample:'这个杯子多少钱？那个杯子多少钱？',
       sample_vn:'Cái ly này bao nhiêu tiền? Cái ly kia bao nhiêu tiền?',
       note:'多少 dùng khi hỏi số lượng LỚN HƠN 10 (đặc biệt là tiền) — khác với 几 chỉ dùng cho số nhỏ hơn 10 đã học ở Bài 5.'},
    ],
  },
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 8 + ôn lại từ bài 1-7
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi muốn uống trà.', zh:'我想喝茶。', py:'Wǒ xiǎng hē chá.'},
  {vi:'Cái cốc này bao nhiêu tiền?', zh:'这个杯子多少钱？', py:'Zhège bēizi duōshao qián?'},
  {vi:'Chiều nay tôi muốn đi cửa hàng mua cốc.', zh:'下午我想去商店买杯子。', py:'Xiàwǔ wǒ xiǎng qù shāngdiàn mǎi bēizi.'},
  {vi:'Năm đồng.', zh:'五块钱。', py:'Wǔ kuài qián.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tôi muốn uống trà, tôi muốn ăn cơm.', zh:'我想喝茶，我想吃米饭。', py:'Wǒ xiǎng hē chá, wǒ xiǎng chī mǐfàn.'},
  {vi:'Cái cốc này bao nhiêu tiền? Năm đồng.', zh:'这个杯子多少钱？五块钱。', py:'Zhège bēizi duōshao qián? Wǔ kuài qián.'},
  {vi:'Chiều nay tôi muốn đi cửa hàng mua cơm.', zh:'下午我想去商店买米饭。', py:'Xiàwǔ wǒ xiǎng qù shāngdiàn mǎi mǐfàn.'},
  {vi:'Nhà tôi có ba cái cốc.', zh:'我家有三个杯子。', py:'Wǒ jiā yǒu sān ge bēizi.'},
];
