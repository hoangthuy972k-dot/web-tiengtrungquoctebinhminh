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

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
const matchData = [
  {left:'坐',right:'公共汽车'},
  {left:'离',right:'远'},
  {left:'走',right:'路'},
  {left:'过',right:'生日'},
  {left:'开',right:'车'},
  {left:'一个',right:'小时'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: hỏi đường đến siêu thị/bệnh viện.
// Ôn lại 因为 (Bài 6), 生日 (Bài 4).
// ══════════════════════════════════════════
const listenData = [
  {audio:'医院离我家不远，走十分钟就到了。',
   questions:[
     {q:'医院离他家远不远？',opts:['不远','很远','不知道','很远很远'],ans:0},
     {q:'走路要多长时间？',opts:['十分钟','一个小时','半个小时','不知道'],ans:0},
   ]},
  {audio:'超市离公司很远，坐公共汽车要一个多小时，开车也不快，因为路上车太多。',
   questions:[
     {q:'超市离公司远吗？',opts:['很远','不远','不知道','一点儿都不远'],ans:0},
     {q:'坐公共汽车要多长时间？',opts:['一个多小时','十分钟','半个小时','不知道'],ans:0},
   ]},
  {audio:'还有一个星期就是我的生日了，我们下个星期一起过吧。',
   questions:[
     {q:'还有多长时间是他的生日？',opts:['一个星期','一天','一个月','不知道'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: hỏi đường đến siêu thị
// ══════════════════════════════════════════
const fillData = [
  {pre:'超市',blank:'离',post:'这儿远吗？',hint:'(cách)',ans:'离'},
  {pre:'不远，走几分钟',blank:'就',post:'到了。',hint:'(là, liền)',ans:'就',exp:'就 ở đây nhấn mạnh khoảng cách/thời gian NGẮN.'},
  {pre:'你',blank:'还',post:'在超市吗？',hint:'(vẫn, còn)',ans:'还'},
  {pre:'对，我还在这儿买东西',blank:'呢',post:'。',hint:'(trợ từ ngữ khí — nhấn mạnh)',ans:'呢'},
  {pre:'坐公共汽车要一个多',blank:'小时',post:'。',hint:'(tiếng đồng hồ)',ans:'小时'},
  {pre:'坐公共汽车太',blank:'慢',post:'了。',hint:'(chậm)',ans:'慢'},
  {pre:'还有一个星期',blank:'就',post:'是我的生日了。',hint:'(là — nhấn mạnh sắp đến)',ans:'就'},
  {pre:'我们下个星期一起',blank:'过',post:'吧。',hint:'(tổ chức, đón — sinh nhật/lễ)',ans:'过'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
const sortData = [
  {words:['超市','离','这儿','远','吗','？'],ans:'超市离这儿远吗？',audio:'超市离这儿远吗？'},
  {words:['走','几','分钟','就','到','了','。'],ans:'走几分钟就到了。',audio:'走几分钟就到了。'},
  {words:['坐','公共汽车','要','一','个','多','小时','。'],ans:'坐公共汽车要一个多小时。',audio:'坐公共汽车要一个多小时。'},
  {words:['坐','公共汽车','太','慢','了','。'],ans:'坐公共汽车太慢了。',audio:'坐公共汽车太慢了。'},
  {words:['还','有','一','个','星期','就','是','我','的','生日','了','。'],ans:'还有一个星期就是我的生日了。',audio:'还有一个星期就是我的生日了。'},
  {words:['我们','下','个','星期','一起','过','吧','。'],ans:'我们下个星期一起过吧。',audio:'我们下个星期一起过吧。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
const errorFixData = [
  {wrong:'超市远这儿离吗？',
   opts:['超市离这儿远吗？','超市这儿离远吗？','离超市这儿远吗？','这儿超市离远吗？'],ans:0,
   exp:'离 đứng giữa hai ĐỊA ĐIỂM: A + 离 + B + xa/gần.'},
  {wrong:'到就几分钟走了。',
   opts:['走几分钟就到了。','就走几分钟到了。','到走几分钟就了。','几分钟走就到了。'],ans:0,
   exp:'就 đứng NGAY TRƯỚC động từ 到 để nhấn mạnh việc xảy ra nhanh/sớm.'},
  {wrong:'你在超市还吗？',
   opts:['你还在超市吗？','你在还超市吗？','还你在超市吗？','你在超市还了吗？'],ans:0,
   exp:'还 (vẫn, còn) đứng TRƯỚC động từ 在, không đặt cuối câu như "còn" trong tiếng Việt.'},
  {wrong:'我在这儿买东西还呢。',
   opts:['我还在这儿买东西呢。','我在这儿还买东西呢。','我在这儿买东西呢还。','还我在这儿买东西呢。'],ans:0,
   exp:'还 đứng TRƯỚC động từ chính (在), 呢 luôn đứng CUỐI câu.'},
  {wrong:'公共汽车坐太慢了。',
   opts:['坐公共汽车太慢了。','公共汽车坐太慢了。','太坐公共汽车慢了。','坐太公共汽车慢了。'],ans:0,
   exp:'坐 (động từ) phải đứng TRƯỚC phương tiện: 坐 + 公共汽车/飞机/车.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
const speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'超市离这儿远吗？',
     q_vn:'Siêu thị cách đây có xa không?',
     hint:'不远，走＿＿分钟就到了。',
     sample:'不远，走几分钟就到了。',
     sample_vn:'Không xa, đi bộ vài phút là tới.',
     note:'离 dùng để nói khoảng cách giữa HAI địa điểm, không phải "từ" như 从.'},
    {q_zh:'你还在哪儿呢？',
     q_vn:'Bạn vẫn còn ở đâu vậy?',
     hint:'我还在＿＿买东西呢。',
     sample:'我还在超市买东西呢。',
     sample_vn:'Tôi vẫn đang ở siêu thị mua đồ đấy.',
     note:'呢 ở cuối câu trần thuật mang nghĩa nhấn mạnh, giống như "đấy/cơ" trong tiếng Việt.'},
    {q_zh:'你的生日是什么时候？下个星期你有空吗？',
     q_vn:'Sinh nhật bạn là khi nào? Tuần sau bạn có rảnh không?',
     hint:'还有＿＿就是我的生日了。',
     sample:'还有一个星期就是我的生日了，可是下个星期我要去北京，今天过吧！',
     sample_vn:'Còn một tuần nữa là sinh nhật tôi, nhưng tuần sau tôi phải đi Bắc Kinh rồi, hôm nay tổ chức luôn đi!',
     note:'还有……就……了 dùng để nói "còn bao lâu nữa thì" một sự việc sẽ xảy ra.'},
  ],
};
