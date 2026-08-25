// ══════════════════════════════════════════
// DATA — Bài 7: 你家离公司远吗？
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'教室',py:'jiàoshì',pos:'Danh từ',vn:'phòng học, lớp học',em:'🏫',lesson:1,
   ex_zh:'他还在教室学习呢。',ex_py:'Tā hái zài jiàoshì xuéxí ne.',ex_vn:'Cậu ấy vẫn còn đang học ở trên lớp kìa.',
   exList:[
     {zh:'他还在教室学习呢。',py:'Tā hái zài jiàoshì xuéxí ne.',vn:'Cậu ấy vẫn còn đang học ở trên lớp kìa.'},
     {zh:'教室里有很多学生。',py:'Jiàoshì lǐ yǒu hěn duō xuésheng.',vn:'Trong lớp học có rất nhiều học sinh.'},
     {zh:'老师在教室等你。',py:'Lǎoshī zài jiàoshì děng nǐ.',vn:'Thầy giáo đang đợi bạn ở lớp học.'},
   ],
   hanzi:[
     {c:'教',p:'jiào',type:'左右结构 · Trái-phải',st:11,ord:'孝 (biến thể) trái → 攵 (phốc) phải',rad:'攵 (phốc – gõ nhẹ)',mean:'dạy học',
      tip:'攵 (tay cầm roi nhẹ nhắc nhở) + 孝 → hành động DẠY DỖ.',
      cf:'孝 (xiào, hiếu thảo)',w:'教室 / 教书 / 教你'},
     {c:'室',p:'shì',type:'上下结构 · Trên-dưới',st:9,ord:'宀 (miên) trên → 至 (chí) dưới',rad:'宀 (miên – mái nhà)',mean:'phòng',
      tip:'Mái nhà 宀 trên 至 (đến, tới) → nơi mọi người tới, một căn PHÒNG.',
      cf:'到 (dào, sẽ học ở cuối bài này)',w:'教室 / 房室 / 卧室'},
   ]},
  {n:2,zh:'机场',py:'jīchǎng',pos:'Danh từ',vn:'sân bay',em:'✈️',lesson:2,
   ex_zh:'我在去机场的路上。',ex_py:'Wǒ zài qù jīchǎng de lùshang.',ex_vn:'Tôi đang trên đường ra sân bay.',
   exList:[
     {zh:'我在去机场的路上。',py:'Wǒ zài qù jīchǎng de lùshang.',vn:'Tôi đang trên đường ra sân bay.'},
     {zh:'机场离这儿很远。',py:'Jīchǎng lí zhèr hěn yuǎn.',vn:'Sân bay cách đây rất xa.'},
     {zh:'我们在机场见面吧。',py:'Wǒmen zài jīchǎng jiànmiàn ba.',vn:'Chúng ta gặp nhau ở sân bay nhé.'},
   ],
   hanzi:[
     {c:'机',p:'jī',type:'左右结构 · Trái-phải',st:6,ord:'木 (mộc) trái → 几 (kỷ) phải',rad:'木 (mộc – cây, gỗ)',mean:'máy móc',
      tip:'Xưa máy móc làm bằng gỗ 木 → nghĩa MÁY. 机场 = sân bãi cho máy bay.',
      cf:'几 (jǐ, mấy)',w:'机场 / 飞机 / 手机'},
     {c:'场',p:'chǎng',type:'左右结构 · Trái-phải',st:6,ord:'土 (thổ) trái → 场 biến thể phải',rad:'土 (thổ – đất)',mean:'bãi, sân',
      tip:'Bộ 土 (đất) → khoảnh đất rộng dùng làm SÂN, BÃI.',
      cf:'汤 (tāng, canh, bộ 氵)',w:'机场 / 操场 / 广场'},
   ]},
  {n:3,zh:'路',py:'lù',pos:'Danh từ',vn:'đường, tuyến đường',em:'🛣️',lesson:2,
   ex_zh:'去机场的路上。',ex_py:'Qù jīchǎng de lùshang.',ex_vn:'Trên đường đi sân bay.',
   exList:[
     {zh:'去机场的路上。',py:'Qù jīchǎng de lùshang.',vn:'Trên đường đi sân bay.'},
     {zh:'这条路很长。',py:'Zhè tiáo lù hěn cháng.',vn:'Con đường này rất dài.'},
     {zh:'路上车太多了。',py:'Lùshang chē tài duō le.',vn:'Trên đường nhiều xe quá.'},
   ],
   hanzi:[
     {c:'路',p:'lù',type:'左右结构 · Trái-phải',st:13,ord:'⻊(túc) trái → 各 (các) phải',rad:'⻊(túc – chân)',mean:'đường',
      tip:'Bộ ⻊(chân) → nơi đôi chân đi qua = ĐƯỜNG.',
      cf:'露 (lù, sương, bộ 雨)',w:'路上 / 走路 / 马路'},
   ]},
  {n:4,zh:'离',py:'lí',pos:'Giới từ',vn:'cách (khoảng cách)',em:'📏',lesson:3,
   ex_zh:'你家离公司远吗？',ex_py:'Nǐ jiā lí gōngsī yuǎn ma?',ex_vn:'Nhà bạn cách công ty có xa không?',
   exList:[
     {zh:'你家离公司远吗？',py:'Nǐ jiā lí gōngsī yuǎn ma?',vn:'Nhà bạn cách công ty có xa không?'},
     {zh:'我家离学校很近。',py:'Wǒ jiā lí xuéxiào hěn jìn.',vn:'Nhà tôi cách trường học rất gần.'},
     {zh:'今天离我的生日还有一个多星期。',py:'Jīntiān lí wǒ de shēngrì hái yǒu yí ge duō xīngqī.',vn:'Hôm nay cách sinh nhật tôi còn hơn một tuần nữa.'},
   ],
   hanzi:[
     {c:'离',p:'lí',type:'独体字 · Chữ đơn',st:10,ord:'亠→凶→凵→𡿨',rad:'离 (li – tự thành bộ)',mean:'cách, rời xa',
      tip:'Nghĩa gốc là "chia lìa, rời xa" → mở rộng thành giới từ chỉ KHOẢNG CÁCH giữa 2 điểm.',
      cf:'难 (nán, khó)',w:'离公司 / 离家 / 离开'},
   ]},
  {n:5,zh:'公司',py:'gōngsī',pos:'Danh từ',vn:'công ty',em:'🏢',lesson:3,
   ex_zh:'你家离公司远吗？',ex_py:'Nǐ jiā lí gōngsī yuǎn ma?',ex_vn:'Nhà bạn cách công ty có xa không?',
   exList:[
     {zh:'你家离公司远吗？',py:'Nǐ jiā lí gōngsī yuǎn ma?',vn:'Nhà bạn cách công ty có xa không?'},
     {zh:'我在一家大公司工作。',py:'Wǒ zài yì jiā dà gōngsī gōngzuò.',vn:'Tôi làm việc ở một công ty lớn.'},
     {zh:'这是我们公司。',py:'Zhè shì wǒmen gōngsī.',vn:'Đây là công ty của chúng tôi.'},
   ],
   hanzi:[
     {c:'公',p:'gōng',type:'上下结构 · Trên-dưới',st:4,ord:'八 (bát) trên → 厶 (khư) dưới',rad:'八 (bát)',mean:'công, chung',
      tip:'Đã học ở Bài 6 (公斤) — 公 + 司 = nơi quản lý việc chung = CÔNG TY.',
      cf:'私 (sī, riêng tư)',w:'公司 / 公斤 / 公园'},
     {c:'司',p:'sī',type:'半包围 · Bán bao',st:5,ord:'⼮ (gập) → 一 → 口',rad:'口 (khẩu)',mean:'quản lý',
      tip:'Bộ 口 (miệng ra lệnh) → nơi có người QUẢN LÝ, điều hành.',
      cf:'同 (tóng, giống nhau)',w:'公司 / 司机'},
   ]},
  {n:6,zh:'远',py:'yuǎn',pos:'Tính từ',vn:'xa',em:'🏞️',lesson:3,
   ex_zh:'你家离公司远吗？',ex_py:'Nǐ jiā lí gōngsī yuǎn ma?',ex_vn:'Nhà bạn cách công ty có xa không?',
   exList:[
     {zh:'你家离公司远吗？',py:'Nǐ jiā lí gōngsī yuǎn ma?',vn:'Nhà bạn cách công ty có xa không?'},
     {zh:'机场离这儿很远。',py:'Jīchǎng lí zhèr hěn yuǎn.',vn:'Sân bay cách đây rất xa.'},
     {zh:'我家不远。',py:'Wǒ jiā bù yuǎn.',vn:'Nhà tôi không xa.'},
   ],
   hanzi:[
     {c:'远',p:'yuǎn',type:'半包围 · Bán bao (辶)',st:7,ord:'元 (nguyên) → 辶 (viết sau cùng)',rad:'辶 (sước – đi)',mean:'xa',
      tip:'Bộ 辶 (đi) + 元 → phải đi một quãng dài, xuất phát ban đầu (元) đã lùi XA.',
      cf:'园 (yuán, vườn, bộ 囗)',w:'远吗 / 很远 / 不远'},
   ]},
  {n:7,zh:'公共汽车',py:'gōnggòng qìchē',pos:'Danh từ',vn:'xe buýt công cộng',em:'🚌',lesson:3,
   ex_zh:'坐公共汽车要一个多小时呢。',ex_py:'Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.',ex_vn:'Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy.',
   exList:[
     {zh:'坐公共汽车要一个多小时呢。',py:'Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.',vn:'Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy.'},
     {zh:'我每天坐公共汽车上班。',py:'Wǒ měitiān zuò gōnggòng qìchē shàngbān.',vn:'Mỗi ngày tôi đi xe buýt đi làm.'},
     {zh:'公共汽车来了。',py:'Gōnggòng qìchē lái le.',vn:'Xe buýt đến rồi.'},
   ],
   hanzi:[
     {c:'公',p:'gōng',type:'上下结构 · Trên-dưới',st:4,ord:'八→厶',rad:'八 (bát)',mean:'công cộng',
      tip:'Lặp lại 公 (chung) — 公共 = thuộc về mọi người, CÔNG CỘNG.',
      cf:'松 (sōng, thông, khác bộ)',w:'公共汽车 / 公共场所'},
     {c:'汽',p:'qì',type:'左右结构 · Trái-phải',st:7,ord:'氵(thủy) trái → 气 (khí) phải',rad:'氵(thủy – nước)',mean:'hơi nước; ô tô',
      tip:'Nước 氵 bốc hơi 气 → động cơ hơi nước xưa, nay chỉ chung XE Ô TÔ.',
      cf:'气 (qì, khí, thiếu bộ 氵)',w:'汽车 / 汽水'},
   ]},
  {n:8,zh:'小时',py:'xiǎoshí',pos:'Danh từ',vn:'tiếng đồng hồ',em:'⏰',lesson:3,
   ex_zh:'坐公共汽车要一个多小时呢。',ex_py:'Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.',ex_vn:'Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy.',
   exList:[
     {zh:'坐公共汽车要一个多小时呢。',py:'Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.',vn:'Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy.'},
     {zh:'我们等了两个小时。',py:'Wǒmen děngle liǎng ge xiǎoshí.',vn:'Chúng tôi đã đợi hai tiếng đồng hồ.'},
     {zh:'一个小时以后再打给我。',py:'Yí ge xiǎoshí yǐhòu zài dǎ gěi wǒ.',vn:'Một tiếng sau hãy gọi lại cho tôi.'},
   ],
   hanzi:[
     {c:'小',p:'xiǎo',type:'独体字 · Chữ đơn',st:3,ord:'丨→丶→丶',rad:'小 (tiểu – tự thành bộ)',mean:'nhỏ',
      tip:'Ba nét nhỏ xíu cách điệu → "NHỎ". 小 + 时 = một khoảng thời gian nhỏ đơn vị = GIỜ.',
      cf:'少 (shǎo, ít, thêm nét)',w:'小时 / 小学 / 多小'},
     {c:'时',p:'shí',type:'左右结构 · Trái-phải',st:7,ord:'日 (nhật) trái → 寸 (thốn) phải',rad:'日 (nhật – mặt trời)',mean:'giờ, thời gian',
      tip:'Đã học ở Bài 2 (时间) — 小 + 时 = đơn vị GIỜ.',
      cf:'待 (dài, chờ đợi)',w:'小时 / 时间 / 有时'},
   ]},
  {n:9,zh:'慢',py:'màn',pos:'Tính từ',vn:'chậm',em:'🐢',lesson:3,
   ex_zh:'坐公共汽车太慢了。',ex_py:'Zuò gōnggòng qìchē tài màn le.',ex_vn:'Đi xe buýt chậm quá.',
   exList:[
     {zh:'坐公共汽车太慢了。',py:'Zuò gōnggòng qìchē tài màn le.',vn:'Đi xe buýt chậm quá.'},
     {zh:'请你说慢一点儿。',py:'Qǐng nǐ shuō màn yìdiǎnr.',vn:'Làm ơn nói chậm một chút.'},
     {zh:'这个电脑很慢。',py:'Zhège diànnǎo hěn màn.',vn:'Cái máy tính này rất chậm.'},
   ],
   hanzi:[
     {c:'慢',p:'màn',type:'左右结构 · Trái-phải',st:14,ord:'忄(tâm) trái → 曼 (mạn) phải',rad:'忄(tâm – trái tim)',mean:'chậm',
      tip:'Bộ 忄(tâm lý) → tâm trạng thong thả, không vội = CHẬM. Trái nghĩa 快.',
      cf:'漫 (màn, tràn lan, bộ 氵)',w:'太慢了 / 慢慢 / 走慢'},
   ]},
  {n:10,zh:'快',py:'kuài',pos:'Tính từ',vn:'nhanh',em:'⚡',lesson:3,
   ex_zh:'开车也不快。',ex_py:'Kāi chē yě bú kuài.',ex_vn:'Lái xe cũng chẳng nhanh hơn đâu.',
   exList:[
     {zh:'开车也不快。',py:'Kāi chē yě bú kuài.',vn:'Lái xe cũng chẳng nhanh hơn đâu.'},
     {zh:'请快一点儿。',py:'Qǐng kuài yìdiǎnr.',vn:'Làm ơn nhanh lên một chút.'},
     {zh:'他跑得很快。',py:'Tā pǎo de hěn kuài.',vn:'Anh ấy chạy rất nhanh.'},
   ],
   hanzi:[
     {c:'快',p:'kuài',type:'左右结构 · Trái-phải',st:7,ord:'忄(tâm) trái → 夬 (quyết) phải',rad:'忄(tâm – trái tim)',mean:'nhanh',
      tip:'Đã học trong 快乐 ở Bài 4 — 忄(tâm) nhẹ nhõm, dứt khoát = NHANH. Trái nghĩa 慢.',
      cf:'块 (kuài, đơn vị tiền, bộ 土, Bài 3)',w:'很快 / 快乐 / 快来'},
   ]},
  {n:11,zh:'过',py:'guò',pos:'Động từ',vn:'đón, trải qua (ngày lễ, sinh nhật)',em:'🎉',lesson:4,
   ex_zh:'今天给你过生日。',ex_py:'Jīntiān gěi nǐ guò shēngrì.',ex_vn:'Hôm nay chúc mừng sinh nhật bạn.',
   exList:[
     {zh:'今天给你过生日。',py:'Jīntiān gěi nǐ guò shēngrì.',vn:'Hôm nay chúc mừng sinh nhật bạn.'},
     {zh:'我们怎么过春节？',py:'Wǒmen zěnme guò chūnjié?',vn:'Chúng ta đón Tết thế nào?'},
     {zh:'时间过得真快。',py:'Shíjiān guò de zhēn kuài.',vn:'Thời gian trôi qua thật nhanh.'},
   ],
   hanzi:[
     {c:'过',p:'guò',type:'半包围 · Bán bao (辶)',st:6,ord:'寸 (thốn) → 辶 (viết sau cùng)',rad:'辶 (sước – đi)',mean:'đi qua, trải qua',
      tip:'Bộ 辶 (đi) → thời gian/sự việc TRÔI QUA, cũng dùng cho việc "đón" một ngày lễ.',
      cf:'边 (biān, bên, Bài 3)',w:'过生日 / 过年 / 经过'},
   ]},
  {n:12,zh:'走',py:'zǒu',pos:'Động từ',vn:'đi, đi bộ',em:'🚶',lesson:4,
   ex_zh:'走几分钟就到了。',ex_py:'Zǒu jǐ fēnzhōng jiù dào le.',ex_vn:'Đi bộ vài phút là tới rồi.',
   exList:[
     {zh:'走几分钟就到了。',py:'Zǒu jǐ fēnzhōng jiù dào le.',vn:'Đi bộ vài phút là tới rồi.'},
     {zh:'我们走路去吧。',py:'Wǒmen zǒulù qù ba.',vn:'Chúng ta đi bộ đi.'},
     {zh:'他已经走了。',py:'Tā yǐjīng zǒu le.',vn:'Anh ấy đã đi rồi.'},
   ],
   hanzi:[
     {c:'走',p:'zǒu',type:'独体字 · Chữ đơn',st:7,ord:'土 (biến thể) → 龰 (chỉ – biến thể)',rad:'走 (tẩu – tự thành bộ)',mean:'đi, đi bộ',
      tip:'Hình người vung tay bước đi cách điệu → "ĐI".',
      cf:'足 (zú, chân)',w:'走路 / 走了 / 快走'},
   ]},
  {n:13,zh:'到',py:'dào',pos:'Động từ',vn:'đến, tới nơi',em:'📍',lesson:4,
   ex_zh:'20分钟就到。',ex_py:'Èrshí fēnzhōng jiù dào.',ex_vn:'20 phút nữa là tới liền.',
   exList:[
     {zh:'20分钟就到。',py:'Èrshí fēnzhōng jiù dào.',vn:'20 phút nữa là tới liền.'},
     {zh:'你到了吗？',py:'Nǐ dào le ma?',vn:'Bạn đến chưa?'},
     {zh:'走几分钟就到了。',py:'Zǒu jǐ fēnzhōng jiù dào le.',vn:'Đi bộ vài phút là tới rồi.'},
   ],
   hanzi:[
     {c:'到',p:'dào',type:'左右结构 · Trái-phải',st:8,ord:'至 (chí) trái → 刂(đao) phải',rad:'刂(đao – dao)',mean:'đến, tới',
      tip:'至 (đến nơi) + 刂 → xác định điểm ĐẾN dứt khoát, rõ ràng.',
      cf:'倒 (dǎo, đổ, ngã, bộ 亻)',w:'到了 / 就到 / 到家'},
   ]},
];

const wuData = [
  {img:'🏫',label:'教室',py:'jiàoshì',letter:'A'},
  {img:'✈️',label:'机场',py:'jīchǎng',letter:'B'},
  {img:'🚌',label:'公共汽车',py:'gōnggòng qìchē',letter:'C'},
  {img:'🏢',label:'公司',py:'gōngsī',letter:'D'},
  {img:'🚶',label:'走',py:'zǒu',letter:'E'},
  {img:'⏰',label:'小时',py:'xiǎoshí',letter:'F'},
];

const dialogData = [
  {scene:'在家里 · Ở nhà',
   lines:[
     {sp:0,zh:'大卫回来了吗？',py:'Dàwèi huílái le ma?',vn:'David đã về chưa?'},
     {sp:1,zh:'没有，他还在教室学习呢。',py:'Méiyǒu, tā hái zài jiàoshì xuéxí ne.',vn:'Chưa, cậu ấy vẫn còn đang học ở trên lớp kìa.'},
     {sp:0,zh:'已经九点多了，他怎么还在学习？',py:'Yǐjīng jiǔ diǎn duō le, tā zěnme hái zài xuéxí?',vn:'Đã hơn 9 giờ rồi, sao cậu ấy vẫn còn học thế?'},
     {sp:1,zh:'明天有考试，他说今天要好好准备。',py:'Míngtiān yǒu kǎoshì, tā shuō jīntiān yào hǎohǎo zhǔnbèi.',vn:'Ngày mai có bài thi, cậu ấy bảo hôm nay phải chuẩn bị thật tốt.'},
   ]},
  {scene:'去机场的路上 · Trên đường đi sân bay',
   lines:[
     {sp:0,zh:'你现在在哪儿呢？',py:'Nǐ xiànzài zài nǎr ne?',vn:'Bây giờ bạn đang ở đâu thế?'},
     {sp:1,zh:'在去机场的路上。你已经到了吗？',py:'Zài qù jīchǎng de lùshang. Nǐ yǐjīng dào le ma?',vn:'Đang trên đường ra sân bay. Bạn đã đến nơi chưa?'},
     {sp:0,zh:'我下飞机了。你还有多长时间能到这儿？',py:'Wǒ xià fēijī le. Nǐ hái yǒu duō cháng shíjiān néng dào zhèr?',vn:'Tôi xuống máy bay rồi. Bạn còn bao lâu nữa thì đến được đây?'},
     {sp:1,zh:'20分钟就到。',py:'Èrshí fēnzhōng jiù dào.',vn:'20 phút nữa là tới liền.'},
   ]},
  {scene:'在健身房 · Trong phòng tập thể dục',
   lines:[
     {sp:0,zh:'你家离公司远吗？',py:'Nǐ jiā lí gōngsī yuǎn ma?',vn:'Nhà bạn cách công ty có xa không?'},
     {sp:1,zh:'很远，坐公共汽车要一个多小时呢。',py:'Hěn yuǎn, zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.',vn:'Rất xa, đi xe buýt mất hơn một tiếng đồng hồ cơ đấy.'},
     {sp:0,zh:'坐公共汽车太慢了，你怎么不开车？',py:'Zuò gōnggòng qìchē tài màn le, nǐ zěnme bù kāi chē?',vn:'Đi xe buýt chậm quá, sao bạn không tự lái xe đi?'},
     {sp:1,zh:'开车也不快，路上车太多了。',py:'Kāi chē yě bú kuài, lùshang chē tài duō le.',vn:'Lái xe cũng chẳng nhanh hơn đâu, trên đường nhiều xe lắm.'},
   ]},
  {scene:'在路上 · Trên đường đi',
   lines:[
     {sp:0,zh:'今天晚上我们一起吃饭吧，给你过生日。',py:'Jīntiān wǎnshang wǒmen yìqǐ chīfàn ba, gěi nǐ guò shēngrì.',vn:'Tối nay chúng ta cùng đi ăn cơm đi, để chúc mừng sinh nhật bạn.'},
     {sp:1,zh:'今天离我的生日还有一个多星期呢。',py:'Jīntiān lí wǒ de shēngrì hái yǒu yí ge duō xīngqī ne.',vn:'Hôm nay cách ngày sinh nhật của tôi tận hơn một tuần nữa cơ mà.'},
     {sp:0,zh:'下个星期我要去北京，今天过吧。',py:'Xià ge xīngqī wǒ yào qù Běijīng, jīntiān guò ba.',vn:'Tuần sau tôi phải đi Bắc Kinh rồi, hôm nay tổ chức luôn đi.'},
     {sp:1,zh:'好吧，离这儿不远有一个中国饭馆，走几分钟就到了。',py:'Hǎoba, lí zhèr bù yuǎn yǒu yí ge Zhōngguó fànguǎn, zǒu jǐ fēnzhōng jiù dào le.',vn:'Được thôi, cách đây không xa có một nhà hàng Trung Quốc, đi bộ vài phút là tới rồi.'},
   ]},
];

// Điền từ — trộn từ Bài 2 (小时/忙), Bài 5 (准备)
const fillData = [
  {pre:'已经九点多了，他怎么',blank:'还',post:'在学习？',hint:'(vẫn, còn)',ans:'还',exp:'还 biểu thị hành động vẫn đang tiếp diễn'},
  {pre:'你现在在哪儿',blank:'呢',post:'？',hint:'(trợ từ hỏi tiếp diễn)',ans:'呢',exp:'呢 dùng ở câu hỏi về trạng thái đang diễn ra'},
  {pre:'20分钟',blank:'就',post:'到。',hint:'(liền, ngay)',ans:'就',exp:'就 diễn tả hành động xảy ra nhanh, sớm'},
  {pre:'你家',blank:'离',post:'公司远吗？',hint:'(cách)',ans:'离',exp:'A + 离 + B = khoảng cách giữa A và B'},
  {pre:'坐公共汽车太慢了，你怎么不',blank:'开',post:'车？',hint:'(lái)',ans:'开',exp:'开车 = lái xe'},
  {pre:'走几分钟就',blank:'到',post:'了。',hint:'(đến, tới)',ans:'到',exp:'到 = đến, tới nơi'},
  {pre:'我每天坐公共汽车上班，要一个多',blank:'小时',post:'。',hint:'(tiếng đồng hồ)',ans:'小时',exp:'小时 = đơn vị đo thời gian, tiếng đồng hồ'},
  {pre:'我已经',blank:'准备',post:'好了，可以出发了。',hint:'(chuẩn bị — ôn từ Bài 5)',ans:'准备',exp:'准备 = chuẩn bị (đã học ở Bài 5)'},
];

// Sắp xếp — khác câu Điền từ/Trắc nghiệm, ôn từ Bài 3/4/6
const sortData = [
  {words:['我','在','去','机场','的','路上','。'],ans:'我在去机场的路上。',audio:'我在去机场的路上。'},
  {words:['走','几','分钟','就','到','了','。'],ans:'走几分钟就到了。',audio:'走几分钟就到了。'},
  {words:['他','还','在','教室','学习','。'],ans:'他还在教室学习。',audio:'他还在教室学习。'},
  {words:['我','每天','坐','公共汽车','上班','，','非常','忙','。'],ans:'我每天坐公共汽车上班，非常忙。',audio:'我每天坐公共汽车上班，非常忙。'},
  {words:['我','姐姐','的','手表','是','送','的','。'],ans:'我姐姐的手表是送的。',audio:'我姐姐的手表是送的。'},
  {words:['公司','离','我','家','不','远','。'],ans:'公司离我家不远。',audio:'公司离我家不远。'},
];

const matchData = [
  {left:'大卫回来了吗？',right:'没有，他还在教室学习呢。'},
  {left:'你现在在哪儿呢？',right:'在去机场的路上。'},
  {left:'你家离公司远吗？',right:'很远，坐公共汽车要一个多小时。'},
  {left:'坐公共汽车太慢了，你怎么不开车？',right:'开车也不快，路上车太多了。'},
  {left:'今天离我的生日还有多久？',right:'还有一个多星期呢。'},
  {left:'走几分钟就到了吗？',right:'对，离这儿不远。'},
];

// Trắc nghiệm — không audio; trộn từ Bài 2/3/4/5/6
const mcData = [
  {q:'已经九点多了，他怎么＿＿在学习？',opts:['还','就','才','再'],ans:0},
  {q:'你现在在哪儿＿＿？',opts:['呢','吗','了','吧'],ans:0},
  {q:'20分钟＿＿到。',opts:['就','还','才','再'],ans:0},
  {q:'你家＿＿公司远吗？',opts:['离','从','到','对'],ans:0},
  {q:'坐公共汽车太慢了，你怎么不开＿＿？',opts:['车','门','机场','路'],ans:0},
  {q:'我姐姐每天很＿＿，没有时间休息。',opts:['忙','慢','远','贵'],ans:0},
  {q:'这块手表不是我买的，是朋友＿＿的。',opts:['送','过','走','到'],ans:0},
  {q:'我已经＿＿好了，可以出发了。',opts:['准备','考试','咖啡','意思'],ans:0},
  {q:'因为下雨，＿＿我们没去游泳。',opts:['所以','因为','还','就'],ans:0},
  {q:'走几分钟就＿＿了。',opts:['到','走','过','离'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'你家离公司远吗？',py:'Nǐ jiā lí gōngsī yuǎn ma?',vn:'Nhà bạn cách công ty có xa không?'},
      {zh:'坐公共汽车要一个多小时呢。',py:'Zuò gōnggòng qìchē yào yí ge duō xiǎoshí ne.',vn:'Đi xe buýt mất hơn một tiếng đồng hồ cơ đấy.'},
      {zh:'你现在在哪儿呢？',py:'Nǐ xiànzài zài nǎr ne?',vn:'Bây giờ bạn đang ở đâu thế?'},
      {zh:'走几分钟就到了。',py:'Zǒu jǐ fēnzhōng jiù dào le.',vn:'Đi bộ vài phút là tới rồi.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'你家离＿＿远吗？',frame_py:'Nǐ jiā lí ___ yuǎn ma?',vn:'Nhà bạn cách ＿＿ có xa không?',options:['公司','学校','机场'],samples:['你家离公司远吗？','你家离学校远吗？','你家离机场远吗？']},
      {frame:'坐＿＿要一个多小时。',frame_py:'Zuò ___ yào yí ge duō xiǎoshí.',vn:'Đi ＿＿ mất hơn một tiếng.',options:['公共汽车','飞机','车'],samples:['坐公共汽车要一个多小时。','坐飞机要一个多小时。','坐车要一个多小时。']},
      {frame:'＿＿分钟就到了。',frame_py:'___ fēnzhōng jiù dào le.',vn:'＿＿ phút nữa là tới rồi.',options:['十','二十','五'],samples:['十分钟就到了。','二十分钟就到了。','五分钟就到了。']},
      {frame:'他还在＿＿学习呢。',frame_py:'Tā hái zài ___ xuéxí ne.',vn:'Cậu ấy vẫn còn đang học ở ＿＿ kìa.',options:['教室','家里','图书馆'],samples:['他还在教室学习呢。','他还在家里学习呢。','他还在图书馆学习呢。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'🏢 Tình huống 1 — Hỏi thăm khoảng cách nhà và công ty',
       guide:'Bạn hỏi đồng nghiệp nhà cách công ty có xa không và đi lại bằng gì.',
       structure:['你家离＿＿远吗？','坐＿＿要多长时间？'],
       sample:'你家离公司远吗？坐公共汽车要多长时间？',
       sample_vn:'Nhà bạn cách công ty có xa không? Đi xe buýt mất bao lâu?'},
      {role:'✈️ Tình huống 2 — Hẹn gặp ở sân bay',
       guide:'Bạn gọi điện hỏi bạn mình đang ở đâu và còn bao lâu nữa thì đến sân bay.',
       structure:['你现在在哪儿＿＿？','你还有多长时间能到＿＿？'],
       sample:'你现在在哪儿呢？你还有多长时间能到机场？',
       sample_vn:'Bây giờ bạn đang ở đâu thế? Bạn còn bao lâu nữa thì đến sân bay?'},
      {role:'🎂 Tình huống 3 — Rủ bạn đi ăn mừng sinh nhật',
       guide:'Bạn rủ bạn mình đi ăn tối để mừng sinh nhật, và nói địa điểm gần đây.',
       structure:['今天晚上我们一起吃饭吧，给你过＿＿。','离这儿不远有一个＿＿。'],
       sample:'今天晚上我们一起吃饭吧，给你过生日。离这儿不远有一个中国饭馆。',
       sample_vn:'Tối nay chúng ta cùng đi ăn cơm đi, để chúc mừng sinh nhật bạn. Cách đây không xa có một nhà hàng Trung Quốc.'},
    ],
  },
};
