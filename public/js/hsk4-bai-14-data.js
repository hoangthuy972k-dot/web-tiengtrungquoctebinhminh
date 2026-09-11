// ══════════════════════════════════════════
// DATA — HSK4 Bài 14: 保护地球母亲 (Bảo vệ Mẹ Trái đất)
// Nguồn: HSK标准教程4下 (Giáo trình chuẩn HSK 4 Tập 2 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'出差',py:'chū chāi',pos:'Động từ',vn:'đi công tác',em:'✈️',lesson:1,
   explain:['Đi làm việc ở nơi khác theo yêu cầu của cơ quan/công ty. Động từ ly hợp: 出了一次差, 出差三天.'],
   usage:'去上海出差, 出差三天, 明天要出差.',
   collo:['明天出差','去北京出差','出差回来'],
   ex_zh:'这是明天你出差要带的毛巾、牙膏和牙刷，把它们放到箱子里吧。',ex_py:'Zhè shì míngtiān nǐ chū chāi yào dài de máojīn, yágāo hé yáshuā, bǎ tāmen fàngdào xiāngzi li ba.',ex_vn:'Đây là khăn mặt, kem đánh răng và bàn chải ngày mai anh đi công tác cần mang, cho vào vali đi.',
   exList:[
     {zh:'这是明天你出差要带的毛巾、牙膏和牙刷，把它们放到箱子里吧。',py:'Zhè shì míngtiān nǐ chū chāi yào dài de máojīn, yágāo hé yáshuā, bǎ tāmen fàngdào xiāngzi li ba.',vn:'Đây là khăn mặt, kem đánh răng và bàn chải ngày mai anh đi công tác cần mang, cho vào vali đi.'},
     {zh:'真抱歉，明天我得出差，不能参加明天的会议了。',py:'Zhēn bàoqiàn, míngtiān wǒ děi chū chāi, bù néng cānjiā míngtiān de huìyì le.',vn:'Thật xin lỗi, mai tôi phải đi công tác, không thể dự cuộc họp ngày mai.'},
     {zh:'A：打扰一下，请问李老师在吗？B：他出差了。你找他有事吗？',py:'A: Dǎrǎo yíxià, qǐngwèn Lǐ lǎoshī zài ma? B: Tā chū chāi le. Nǐ zhǎo tā yǒu shì ma?',vn:'A: Làm phiền chút, cho hỏi thầy Lý có ở đây không? B: Thầy đi công tác rồi. Bạn tìm thầy có việc gì không?'},
   ],
   hanzi:[
     {c:'差',p:'chāi',type:'上下结构 · Trên-dưới',st:9,ord:'𦍌 trên → 工 dưới',rad:'工 (công)',mean:'sai phái',
      tip:'Chữ 差 đọc chāi = SAI PHÁI (cử đi làm việc), 出差 = ĐI CÔNG TÁC. Chú ý cùng chữ đọc chà = KÉM (差不多) và chā = SAI SỐ.',
      cf:'着 (zhe – trợ từ)',w:'出差 / 差不多 / 差别'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thật xin lỗi, mai tôi phải đi công tác, không thể dự cuộc họp ngày mai.',answer:'真抱歉，明天我得出差，不能参加明天的会议了。',answerPy:'Zhēn bàoqiàn, míngtiān wǒ děi chū chāi, bù néng cānjiā míngtiān de huìyì le.',
      note:'得 (děi) ôn lại Bài 3.'},
     {promptLang:'vi',prompt:'Thầy đi công tác rồi, có lẽ tuần sau mới về.',answer:'他出差了，大概下星期才回来。',answerPy:'Tā chū chāi le, dàgài xià xīngqī cái huílai.',
      note:'大概 ôn lại ngữ pháp Bài 13 + 才 (Bài 3).'},
   ]},

  {n:2,zh:'毛巾',py:'máojīn',pos:'Danh từ',vn:'khăn lau, khăn mặt',em:'🧻',lesson:1,
   explain:['Khăn bằng vải bông dùng để lau mặt, lau tay, lau người.'],
   usage:'一条毛巾, 用毛巾擦脸, 带毛巾.',
   collo:['一条毛巾','带毛巾','用毛巾擦'],
   ex_zh:'不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！',ex_py:'Búyòng ná zhèxiē, bīnguǎn dōu huì miǎnfèi tígōng de. Zàishuō, xiāngzi yǐjīng gòu zhòng de le!',ex_vn:'Không cần mang những thứ này, khách sạn đều cung cấp miễn phí. Hơn nữa, vali đã đủ nặng rồi!',
   exList:[
     {zh:'这是明天你出差要带的毛巾、牙膏和牙刷。',py:'Zhè shì míngtiān nǐ chū chāi yào dài de máojīn, yágāo hé yáshuā.',vn:'Đây là khăn mặt, kem đánh răng và bàn chải ngày mai anh đi công tác cần mang.'},
     {zh:'我明天要出差，妻子帮我把毛巾、牙膏和牙刷都放到了箱子里。',py:'Wǒ míngtiān yào chū chāi, qīzi bāng wǒ bǎ máojīn, yágāo hé yáshuā dōu fàngdào le xiāngzi li.',vn:'Mai tôi đi công tác, vợ giúp tôi cho khăn mặt, kem đánh răng và bàn chải vào vali.'},
     {zh:'为了保护环境，我出差时都自己带毛巾，不用宾馆的。',py:'Wèile bǎohù huánjìng, wǒ chū chāi shí dōu zìjǐ dài máojīn, bú yòng bīnguǎn de.',vn:'Để bảo vệ môi trường, khi đi công tác tôi đều tự mang khăn, không dùng của khách sạn.'},
   ],
   hanzi:[
     {c:'巾',p:'jīn',type:'独体字 · Chữ đơn thể',st:3,ord:'丨 → 冂 → 丨',rad:'巾 (cân)',mean:'khăn',
      tip:'Tượng hình chiếc KHĂN treo xuống. Ghép 毛(lông) + 巾(khăn) = KHĂN BÔNG. Là bộ thủ trong 帽 (mũ), 带 (đai).',
      cf:'币 (bì – tiền tệ)',w:'毛巾 / 纸巾 / 围巾'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mai tôi đi công tác, vợ giúp tôi cho khăn mặt, kem đánh răng và bàn chải vào vali.',answer:'我明天要出差，妻子帮我把毛巾、牙膏和牙刷都放到了箱子里。',answerPy:'Wǒ míngtiān yào chū chāi, qīzi bāng wǒ bǎ máojīn, yágāo hé yáshuā dōu fàngdào le xiāngzi li.',
      note:'Câu chữ 把 + 到 (ôn lại Bài 2).'},
   ]},

  {n:3,zh:'牙膏',py:'yágāo',pos:'Danh từ',vn:'kem đánh răng',em:'🪥',lesson:1,
   explain:['Kem dùng để đánh răng. 牙 = răng, 膏 = kem, cao.'],
   usage:'一支牙膏, 买牙膏, 牙膏用完了.',
   collo:['一支牙膏','牙膏和牙刷','牙膏用完了'],
   ex_zh:'把毛巾、牙膏和牙刷放到箱子里吧。',ex_py:'Bǎ máojīn, yágāo hé yáshuā fàngdào xiāngzi li ba.',ex_vn:'Cho khăn mặt, kem đánh răng và bàn chải vào vali đi.',
   exList:[
     {zh:'把毛巾、牙膏和牙刷放到箱子里吧。',py:'Bǎ máojīn, yágāo hé yáshuā fàngdào xiāngzi li ba.',vn:'Cho khăn mặt, kem đánh răng và bàn chải vào vali đi.'},
     {zh:'牙膏快用完了，明天去超市顺便买一支吧。',py:'Yágāo kuài yòngwán le, míngtiān qù chāoshì shùnbiàn mǎi yì zhī ba.',vn:'Kem đánh răng sắp hết rồi, mai đi siêu thị tiện thể mua một tuýp nhé.'},
     {zh:'李进开始不想带毛巾、牙膏和牙刷，因为宾馆会免费提供。',py:'Lǐ Jìn kāishǐ bù xiǎng dài máojīn, yágāo hé yáshuā, yīnwèi bīnguǎn huì miǎnfèi tígōng.',vn:'Lý Tiến lúc đầu không muốn mang khăn, kem đánh răng và bàn chải, vì khách sạn cung cấp miễn phí.'},
   ],
   hanzi:[
     {c:'膏',p:'gāo',type:'上下结构 · Trên-dưới',st:14,ord:'高 trên → 月 dưới',rad:'月 (nhục)',mean:'cao, kem',
      tip:'Bộ 月(nhục – thịt, mỡ) + 高(biểu âm) → MỠ, KEM đặc. 牙膏 = kem đánh răng.',
      cf:'高 (gāo – cao)',w:'牙膏 / 药膏'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kem đánh răng sắp hết rồi, mai đi siêu thị tiện thể mua một tuýp nhé.',answer:'牙膏快用完了，明天去超市顺便买一支吧。',answerPy:'Yágāo kuài yòngwán le, míngtiān qù chāoshì shùnbiàn mǎi yì zhī ba.',
      note:'顺便 ôn lại ngữ pháp Bài 4.'},
   ]},

  {n:4,zh:'重',py:'zhòng',pos:'Tính từ',vn:'nặng',em:'🏋️',lesson:1,
   explain:['Có trọng lượng lớn; cũng chỉ mức độ nghiêm trọng (严重). Chú ý đọc chóng = lặp lại (重新, Bài 8).'],
   usage:'箱子很重, 够重的了, 太重了.',
   collo:['箱子很重','够重的了','越来越重'],
   ex_zh:'不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！',ex_py:'Búyòng ná zhèxiē, bīnguǎn dōu huì miǎnfèi tígōng de. Zàishuō, xiāngzi yǐjīng gòu zhòng de le!',ex_vn:'Không cần mang những thứ này, khách sạn đều cung cấp miễn phí. Hơn nữa, vali đã đủ nặng rồi!',
   exList:[
     {zh:'不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！',py:'Búyòng ná zhèxiē, bīnguǎn dōu huì miǎnfèi tígōng de. Zàishuō, xiāngzi yǐjīng gòu zhòng de le!',vn:'Không cần mang những thứ này, khách sạn đều cung cấp miễn phí. Hơn nữa, vali đã đủ nặng rồi!'},
     {zh:'按照规定，您只能免费带20公斤的行李，超重的部分每公斤加收全部票价的1.5%。',py:'Ànzhào guīdìng, nín zhǐ néng miǎnfèi dài èrshí gōngjīn de xíngli, chāo zhòng de bùfen měi gōngjīn jiā shōu quánbù piàojià de bǎifēnzhī yī diǎn wǔ.',vn:'Theo quy định, ngài chỉ được mang miễn phí 20 kg hành lý, phần quá cân mỗi kg thu thêm 1,5% giá vé.'},
     {zh:'这个箱子太重了，我一个人搬不动。',py:'Zhège xiāngzi tài zhòng le, wǒ yí ge rén bānbudòng.',vn:'Cái vali này nặng quá, một mình tôi không bê nổi.'},
   ],
   hanzi:[
     {c:'重',p:'zhòng',type:'独体字 · Chữ đơn thể',st:9,ord:'丿 → 一 → 日 → 土',rad:'里 (lý)',mean:'nặng',
      tip:'Hình người đứng trên đất 土 vác túi nặng → NẶNG. Đa âm: zhòng (nặng, quan trọng 重要) / chóng (lặp lại 重新).',
      cf:'童 (tóng – trẻ con)',w:'重 / 严重 / 重要 / 重新'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái vali này nặng quá, một mình tôi không bê nổi.',answer:'这个箱子太重了，我一个人搬不动。',answerPy:'Zhège xiāngzi tài zhòng le, wǒ yí ge rén bānbudòng.',
      note:'Bổ ngữ khả năng 搬不动 ôn lại Bài 5.'},
     {promptLang:'vi',prompt:'Theo quy định, phần hành lý quá cân mỗi kg thu thêm 1,5% giá vé.',answer:'按照规定，超重的部分每公斤加收全部票价的1.5%。',answerPy:'Ànzhào guīdìng, chāo zhòng de bùfen měi gōngjīn jiā shōu quánbù piàojià de bǎifēnzhī yī diǎn wǔ.',
      note:'按照 (Bài 4), 规定/全部 (Bài 12), 部分 (Bài 13).'},
   ]},

  {n:5,zh:'行',py:'xíng',pos:'Động từ',vn:'được, đồng ý',em:'👌',lesson:1,
   explain:['Dùng để đồng ý, chấp nhận (= 可以, 好的). Phủ định: 不行 = không được. 还行 = tạm được.'],
   usage:'行，没问题, 不行, 还行.',
   collo:['行，没问题','这样不行','还行'],
   ex_zh:'行，没问题。我明天上午10点的飞机，你能开车把我送到机场吗？',ex_py:'Xíng, méi wèntí. Wǒ míngtiān shàngwǔ shí diǎn de fēijī, nǐ néng kāi chē bǎ wǒ sòngdào jīchǎng ma?',ex_vn:'Được, không vấn đề. Máy bay của anh 10 giờ sáng mai, em lái xe đưa anh ra sân bay được không?',
   exList:[
     {zh:'行，没问题。我明天上午10点的飞机，你能开车把我送到机场吗？',py:'Xíng, méi wèntí. Wǒ míngtiān shàngwǔ shí diǎn de fēijī, nǐ néng kāi chē bǎ wǒ sòngdào jīchǎng ma?',vn:'Được, không vấn đề. Máy bay của anh 10 giờ sáng mai, em lái xe đưa anh ra sân bay được không?'},
     {zh:'学校附近房子太贵。离学校远点儿没关系，只要离地铁或者公交车站近就行。',py:'Xuéxiào fùjìn fángzi tài guì. Lí xuéxiào yuǎn diǎnr méi guānxi, zhǐyào lí dìtiě huòzhě gōngjiāochē zhàn jìn jiù xíng.',vn:'Nhà gần trường đắt quá. Xa trường một chút không sao, chỉ cần gần ga tàu điện ngầm hoặc trạm xe buýt là được.'},
     {zh:'生活往往不会按照我们的计划来进行。因此，光有计划还不行。',py:'Shēnghuó wǎngwǎng bú huì ànzhào wǒmen de jìhuà lái jìnxíng. Yīncǐ, guāng yǒu jìhuà hái bù xíng.',vn:'Cuộc sống thường không diễn ra theo kế hoạch của chúng ta. Vì vậy, chỉ có kế hoạch thôi thì chưa được.'},
   ],
   hanzi:[
     {c:'行',p:'xíng',type:'左右结构 · Trái-phải',st:6,ord:'彳 trái → 亍 phải',rad:'行 (hành)',mean:'được; đi',
      tip:'Tượng hình NGÃ TƯ đường → ĐI, HÀNH; mở rộng thành "được, ổn" (xíng). Đọc háng = hàng, ngành (银行).',
      cf:'街 (jiē – phố, có 行 bao ngoài)',w:'行 / 不行 / 还行 / 银行 (háng)'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xa trường một chút không sao, chỉ cần gần ga tàu điện ngầm là được.',answer:'离学校远点儿没关系，只要离地铁站近就行。',answerPy:'Lí xuéxiào yuǎn diǎnr méi guānxi, zhǐyào lí dìtiě zhàn jìn jiù xíng.',
      note:'只要……就 ôn lại Bài 8.'},
   ]},

  {n:6,zh:'省',py:'shěng',pos:'Động từ',vn:'tiết kiệm',em:'💰',lesson:1,
   explain:['Dùng ít, tiết kiệm (tiền, thời gian, sức lực). Danh từ 省 = tỉnh (广东省, Bài 13).'],
   usage:'省油钱, 省时间, 省力气.',
   collo:['省油钱','省时间','省力气'],
   ex_zh:'你还是坐地铁去机场吧。这样不仅省油钱，而且还不会污染空气。',ex_py:'Nǐ háishi zuò dìtiě qù jīchǎng ba. Zhèyàng bùjǐn shěng yóu qián, érqiě hái bú huì wūrǎn kōngqì.',ex_vn:'Anh vẫn nên đi tàu điện ngầm ra sân bay. Như vậy không những tiết kiệm tiền xăng, mà còn không làm ô nhiễm không khí.',
   exList:[
     {zh:'你还是坐地铁去机场吧。这样不仅省油钱，而且还不会污染空气。',py:'Nǐ háishi zuò dìtiě qù jīchǎng ba. Zhèyàng bùjǐn shěng yóu qián, érqiě hái bú huì wūrǎn kōngqì.',vn:'Anh vẫn nên đi tàu điện ngầm ra sân bay. Như vậy không những tiết kiệm tiền xăng, mà còn không làm ô nhiễm không khí.'},
     {zh:'现在火车的速度非常快，有时乘坐火车甚至比乘坐飞机更省时间。',py:'Xiànzài huǒchē de sùdù fēicháng kuài, yǒushí chéngzuò huǒchē shènzhì bǐ chéngzuò fēijī gèng shěng shíjiān.',vn:'Bây giờ tốc độ tàu hỏa rất nhanh, có lúc đi tàu thậm chí còn tiết kiệm thời gian hơn đi máy bay.'},
     {zh:'用正确的方法学习，既省时间又省力气，可以事半功倍。',py:'Yòng zhèngquè de fāngfǎ xuéxí, jì shěng shíjiān yòu shěng lìqi, kěyǐ shìbàngōngbèi.',vn:'Học bằng phương pháp đúng, vừa tiết kiệm thời gian vừa đỡ tốn sức, có thể đạt hiệu quả gấp đôi.'},
   ],
   hanzi:[
     {c:'省',p:'shěng',type:'上下结构 · Trên-dưới',st:9,ord:'少 trên → 目 dưới',rad:'目 (mục)',mean:'tiết kiệm; tỉnh',
      tip:'少(ít) + 目(mắt) → nhìn ít, dùng ít → TIẾT KIỆM. Mở rộng thành TỈNH (đơn vị hành chính). Đọc xǐng = xét lại (反省).',
      cf:'少 (shǎo – ít)',w:'省钱 / 省时间 / 广东省 / 节省'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Như vậy không những tiết kiệm tiền xăng, mà còn không làm ô nhiễm không khí.',answer:'这样不仅省油钱，而且还不会污染空气。',answerPy:'Zhèyàng bùjǐn shěng yóu qián, érqiě hái bú huì wūrǎn kōngqì.',
      note:'不仅……而且 ôn lại Bài 6.'},
     {promptLang:'vi',prompt:'Học bằng phương pháp đúng, vừa tiết kiệm thời gian vừa đỡ tốn sức.',answer:'用正确的方法学习，既省时间又省力气。',answerPy:'Yòng zhèngquè de fāngfǎ xuéxí, jì shěng shíjiān yòu shěng lìqi.',
      note:'既……又 (Bài 7), 力气 (Bài 12).'},
   ]},

  {n:7,zh:'污染',py:'wūrǎn',pos:'Động từ',vn:'làm ô nhiễm',em:'🏭',lesson:1,
   explain:['Làm bẩn môi trường (không khí, nước). Cũng dùng như danh từ: 环境污染, 空气污染.'],
   usage:'污染空气, 环境污染, 减少污染.',
   collo:['污染空气','环境污染','减少污染'],
   ex_zh:'这样不仅省油钱，而且还不会污染空气。',ex_py:'Zhèyàng bùjǐn shěng yóu qián, érqiě hái bú huì wūrǎn kōngqì.',ex_vn:'Như vậy không những tiết kiệm tiền xăng, mà còn không làm ô nhiễm không khí.',
   exList:[
     {zh:'这样不仅省油钱，而且还不会污染空气。',py:'Zhèyàng bùjǐn shěng yóu qián, érqiě hái bú huì wūrǎn kōngqì.',vn:'Như vậy không những tiết kiệm tiền xăng, mà còn không làm ô nhiễm không khí.'},
     {zh:'塑料袋的大量使用也带来了严重的环境污染问题。',py:'Sùliàodài de dàliàng shǐyòng yě dàiláile yánzhòng de huánjìng wūrǎn wèntí.',vn:'Việc dùng túi nilông với số lượng lớn cũng mang lại vấn đề ô nhiễm môi trường nghiêm trọng.'},
     {zh:'只有大家共同努力，减少污染、保护环境，才能使我们的家变得更美丽。',py:'Zhǐyǒu dàjiā gòngtóng nǔlì, jiǎnshǎo wūrǎn, bǎohù huánjìng, cái néng shǐ wǒmen de jiā biàn de gèng měilì.',vn:'Chỉ khi mọi người cùng nỗ lực, giảm ô nhiễm, bảo vệ môi trường, mới có thể khiến ngôi nhà của chúng ta đẹp hơn.'},
   ],
   hanzi:[
     {c:'污',p:'wū',type:'左右结构 · Trái-phải',st:6,ord:'氵 trái → 亏 phải',rad:'氵 (thủy)',mean:'bẩn, ô',
      tip:'Bộ nước 氵 + 亏(thiếu, hụt) → nước tù đọng → BẨN, Ô. 污染 = Ô NHIỄM.',
      cf:'亏 (kuī – thiệt)',w:'污染 / 污水'},
     {c:'染',p:'rǎn',type:'上下结构 · Trên-dưới',st:9,ord:'氵 → 九 → 木',rad:'木 (mộc)',mean:'nhiễm, nhuộm',
      tip:'氵(nước) + 九(chín lần) + 木(cây – thuốc nhuộm) → nhúng vải vào nước thuốc nhiều lần → NHUỘM, NHIỄM.',
      cf:'柒 (qī – bảy, viết kép)',w:'污染 / 传染 / 染色'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc dùng túi nilông với số lượng lớn cũng mang lại vấn đề ô nhiễm môi trường nghiêm trọng.',answer:'塑料袋的大量使用也带来了严重的环境污染问题。',answerPy:'Sùliàodài de dàliàng shǐyòng yě dàiláile yánzhòng de huánjìng wūrǎn wèntí.',
      note:'使用 (Bài 12), 严重 (Bài 8).'},
     {promptLang:'vi',prompt:'Chỉ khi mọi người cùng nỗ lực giảm ô nhiễm, mới có thể khiến ngôi nhà của chúng ta đẹp hơn.',answer:'只有大家共同努力减少污染，才能使我们的家变得更美丽。',answerPy:'Zhǐyǒu dàjiā gòngtóng nǔlì jiǎnshǎo wūrǎn, cái néng shǐ wǒmen de jiā biàn de gèng měilì.',
      note:'只有……才 ôn lại Bài 9, 共同 (Bài 10).'},
   ]},

  {n:8,zh:'卫生间',py:'wèishēngjiān',pos:'Danh từ',vn:'nhà vệ sinh',em:'🚻',lesson:2,
   explain:['Phòng vệ sinh, toilet. 卫生 = vệ sinh, 间 = phòng.'],
   usage:'打扫卫生间, 卫生间很脏, 去卫生间.',
   collo:['打扫卫生间','卫生间很脏','去一下卫生间'],
   ex_zh:'小王，卫生间怎么那么脏啊？这会给客人留下不好的印象，快去打扫一下。',ex_py:'Xiǎo Wáng, wèishēngjiān zěnme nàme zāng a? Zhè huì gěi kèrén liúxià bù hǎo de yìnxiàng, kuài qù dǎsǎo yíxià.',ex_vn:'Tiểu Vương, sao nhà vệ sinh bẩn thế? Việc này sẽ để lại ấn tượng xấu cho khách, mau đi dọn dẹp đi.',
   exList:[
     {zh:'小王，卫生间怎么那么脏啊？这会给客人留下不好的印象，快去打扫一下。',py:'Xiǎo Wáng, wèishēngjiān zěnme nàme zāng a? Zhè huì gěi kèrén liúxià bù hǎo de yìnxiàng, kuài qù dǎsǎo yíxià.',vn:'Tiểu Vương, sao nhà vệ sinh bẩn thế? Việc này sẽ để lại ấn tượng xấu cho khách, mau đi dọn dẹp đi.'},
     {zh:'今天店里太忙了，卫生间很脏，我也没来得及打扫。',py:'Jīntiān diàn li tài máng le, wèishēngjiān hěn zāng, wǒ yě méi láidejí dǎsǎo.',vn:'Hôm nay cửa hàng bận quá, nhà vệ sinh rất bẩn, tôi cũng chưa kịp dọn.'},
     {zh:'请问，卫生间在哪儿？——在二楼，电梯旁边。',py:'Qǐngwèn, wèishēngjiān zài nǎr? — Zài èr lóu, diàntī pángbiān.',vn:'Xin hỏi, nhà vệ sinh ở đâu? — Ở tầng hai, cạnh thang máy.'},
   ],
   hanzi:[
     {c:'卫',p:'wèi',type:'独体字 · Chữ đơn thể (giản thể)',st:3,ord:'㇇ → 丨 → 一',rad:'卩 (tiết)',mean:'bảo vệ',
      tip:'Giản thể của 衛 (lính canh đi tuần quanh đường 行) → BẢO VỆ. 卫生 = bảo vệ sự sống → VỆ SINH.',
      cf:'卩 (jié – bộ tiết)',w:'卫生 / 卫生间 / 保卫'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm nay cửa hàng bận quá, nhà vệ sinh rất bẩn, tôi cũng chưa kịp dọn.',answer:'今天店里太忙了，卫生间很脏，我也没来得及打扫。',answerPy:'Jīntiān diàn li tài máng le, wèishēngjiān hěn zāng, wǒ yě méi láidejí dǎsǎo.',
      note:'来得及 ôn lại Bài 4, 打扫 (Bài 7).'},
   ]},

  {n:9,zh:'脏',py:'zāng',pos:'Tính từ',vn:'bẩn, bẩn thỉu',em:'🧹',lesson:2,
   explain:['Không sạch, dơ. Trái nghĩa: 干净.'],
   usage:'很脏, 弄脏了, 又脏又乱.',
   collo:['卫生间很脏','衣服弄脏了','又脏又乱'],
   ex_zh:'卫生间怎么那么脏啊？',ex_py:'Wèishēngjiān zěnme nàme zāng a?',ex_vn:'Sao nhà vệ sinh bẩn thế?',
   exList:[
     {zh:'卫生间怎么那么脏啊？这会给客人留下不好的印象。',py:'Wèishēngjiān zěnme nàme zāng a? Zhè huì gěi kèrén liúxià bù hǎo de yìnxiàng.',vn:'Sao nhà vệ sinh bẩn thế? Việc này sẽ để lại ấn tượng xấu cho khách.'},
     {zh:'孩子在外面玩儿了一下午，衣服都弄脏了。',py:'Háizi zài wàimiàn wánrle yí xiàwǔ, yīfu dōu nòngzāng le.',vn:'Đứa bé chơi ở ngoài cả buổi chiều, quần áo đều bị làm bẩn hết.'},
     {zh:'河水越来越脏，鱼都快活不下去了。',py:'Héshuǐ yuè lái yuè zāng, yú dōu kuài huóbuxiàqù le.',vn:'Nước sông ngày càng bẩn, cá sắp không sống nổi nữa.'},
   ],
   hanzi:[
     {c:'脏',p:'zāng',type:'左右结构 · Trái-phải',st:10,ord:'月 trái → 庄 phải',rad:'月 (nhục)',mean:'bẩn',
      tip:'Bộ 月(nhục) + 庄. Đọc zāng = BẨN; đọc zàng = NỘI TẠNG (心脏 tim). Cùng chữ hai nghĩa!',
      cf:'庄 (zhuāng – trang trại)',w:'脏 / 弄脏 / 心脏 (zàng)'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đứa bé chơi ở ngoài cả buổi chiều, quần áo đều bị làm bẩn hết.',answer:'孩子在外面玩儿了一下午，衣服都弄脏了。',answerPy:'Háizi zài wàimiàn wánrle yí xiàwǔ, yīfu dōu nòngzāng le.',
      note:'弄 + bổ ngữ kết quả ôn lại Bài 5.'},
   ]},

  {n:10,zh:'抱歉',py:'bàoqiàn',pos:'Động từ',vn:'xin lỗi, áy náy',em:'🙇',lesson:2,
   explain:['Cảm thấy có lỗi, xin lỗi (trang trọng hơn 对不起). Thường: 实在抱歉, 真抱歉, 很抱歉.'],
   usage:'实在抱歉, 真抱歉, 感到抱歉.',
   collo:['实在抱歉','真抱歉','对……感到抱歉'],
   ex_zh:'经理，实在抱歉。今天店里太忙了，我还没来得及打扫。',ex_py:'Jīnglǐ, shízài bàoqiàn. Jīntiān diàn li tài máng le, wǒ hái méi láidejí dǎsǎo.',ex_vn:'Giám đốc, thật sự xin lỗi. Hôm nay cửa hàng bận quá, tôi chưa kịp dọn dẹp.',
   exList:[
     {zh:'经理，实在抱歉。今天店里太忙了，我还没来得及打扫。',py:'Jīnglǐ, shízài bàoqiàn. Jīntiān diàn li tài máng le, wǒ hái méi láidejí dǎsǎo.',vn:'Giám đốc, thật sự xin lỗi. Hôm nay cửa hàng bận quá, tôi chưa kịp dọn dẹp.'},
     {zh:'真抱歉，明天我得出差，不能参加明天的会议了。',py:'Zhēn bàoqiàn, míngtiān wǒ děi chū chāi, bù néng cānjiā míngtiān de huìyì le.',vn:'Thật xin lỗi, mai tôi phải đi công tác, không thể dự cuộc họp ngày mai.'},
     {zh:'A：实在抱歉，我来晚了。今天路上有点儿堵。B：没关系，请坐。',py:'A: Shízài bàoqiàn, wǒ lái wǎn le. Jīntiān lùshang yǒudiǎnr dǔ. B: Méi guānxi, qǐng zuò.',vn:'A: Thật sự xin lỗi, tôi đến muộn. Hôm nay đường hơi tắc. B: Không sao, mời ngồi.'},
   ],
   hanzi:[
     {c:'歉',p:'qiàn',type:'左右结构 · Trái-phải',st:14,ord:'兼 trái → 欠 phải',rad:'欠 (khiếm)',mean:'áy náy',
      tip:'兼 + 欠(thiếu, nợ) → cảm thấy còn THIẾU NỢ người khác → ÁY NÁY. 抱歉 = ôm nỗi áy náy = XIN LỖI.',
      cf:'谦 (qiān – khiêm tốn)',w:'抱歉 / 道歉'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thật sự xin lỗi, tôi đến muộn. Hôm nay đường hơi tắc.',answer:'实在抱歉，我来晚了。今天路上有点儿堵。',answerPy:'Shízài bàoqiàn, wǒ lái wǎn le. Jīntiān lùshang yǒudiǎnr dǔ.',
      note:'实在 ôn lại ngữ pháp Bài 11.'},
   ]},

  {n:11,zh:'空',py:'kōng',pos:'Tính từ',vn:'trống, rỗng, không',em:'🫙',lesson:2,
   explain:['Không có gì bên trong. Chú ý đọc kòng = thời gian rảnh (有空).'],
   usage:'空瓶子, 空盒子, 房间是空的.',
   collo:['空饮料瓶子','空盒子','空房间'],
   ex_zh:'那张桌子下面还有一些空饮料瓶子和纸盒子。',ex_py:'Nà zhāng zhuōzi xiàmiàn hái yǒu yìxiē kōng yǐnliào píngzi hé zhǐ hézi.',ex_vn:'Dưới cái bàn kia còn có mấy chai nước rỗng và hộp giấy.',
   exList:[
     {zh:'那张桌子下面还有一些空饮料瓶子和纸盒子。',py:'Nà zhāng zhuōzi xiàmiàn hái yǒu yìxiē kōng yǐnliào píngzi hé zhǐ hézi.',vn:'Dưới cái bàn kia còn có mấy chai nước rỗng và hộp giấy.'},
     {zh:'这个房间是空的，没有人住。',py:'Zhège fángjiān shì kōng de, méiyǒu rén zhù.',vn:'Căn phòng này trống, không có ai ở.'},
     {zh:'空瓶子别乱扔，放到垃圾桶里可以回收。',py:'Kōng píngzi bié luàn rēng, fàngdào lājītǒng li kěyǐ huíshōu.',vn:'Chai rỗng đừng vứt bừa, bỏ vào thùng rác có thể tái chế.'},
   ],
   hanzi:[
     {c:'空',p:'kōng',type:'上下结构 · Trên-dưới',st:8,ord:'穴 trên → 工 dưới',rad:'穴 (huyệt)',mean:'trống',
      tip:'穴(hang, lỗ) + 工 → cái hang rỗng → TRỐNG, KHÔNG (空气 không khí). Đọc kòng = rảnh (有空).',
      cf:'穿 (chuān – xuyên, mặc)',w:'空 / 空气 / 空调 / 有空 (kòng)'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chai rỗng đừng vứt bừa, bỏ vào thùng rác đi.',answer:'空瓶子别乱扔，放到垃圾桶里吧。',answerPy:'Kōng píngzi bié luàn rēng, fàngdào lājītǒng li ba.',
      note:'别 + động từ (ôn lại Bài 1).'},
   ]},

  {n:12,zh:'盒子',py:'hézi',pos:'Danh từ',vn:'hộp',em:'📦',lesson:2,
   explain:['Vật đựng có nắp, thường nhỏ. Lượng từ: 个. 一盒 cũng dùng làm lượng từ (一盒巧克力).'],
   usage:'纸盒子, 一个盒子, 打开盒子.',
   collo:['纸盒子','打开盒子','空盒子'],
   ex_zh:'那张桌子下面还有一些空饮料瓶子和纸盒子。',ex_py:'Nà zhāng zhuōzi xiàmiàn hái yǒu yìxiē kōng yǐnliào píngzi hé zhǐ hézi.',ex_vn:'Dưới cái bàn kia còn có mấy chai nước rỗng và hộp giấy.',
   exList:[
     {zh:'那张桌子下面还有一些空饮料瓶子和纸盒子。',py:'Nà zhāng zhuōzi xiàmiàn hái yǒu yìxiē kōng yǐnliào píngzi hé zhǐ hézi.',vn:'Dưới cái bàn kia còn có mấy chai nước rỗng và hộp giấy.'},
     {zh:'她打开盒子，发现里面是一条漂亮的围巾。',py:'Tā dǎkāi hézi, fāxiàn lǐmiàn shì yì tiáo piàoliang de wéijīn.',vn:'Cô ấy mở hộp ra, phát hiện bên trong là một chiếc khăn quàng đẹp.'},
     {zh:'你经常使用一次性饭盒吗？',py:'Nǐ jīngcháng shǐyòng yícìxìng fànhé ma?',vn:'Bạn có thường dùng hộp cơm dùng một lần không?'},
   ],
   hanzi:[
     {c:'盒',p:'hé',type:'上下结构 · Trên-dưới',st:11,ord:'合 trên → 皿 dưới',rad:'皿 (mãnh)',mean:'hộp',
      tip:'合(đóng lại, khớp) + 皿(đồ đựng) → đồ đựng có nắp ĐÓNG KHỚP → HỘP.',
      cf:'盆 (pén – chậu)',w:'盒子 / 饭盒 / 一盒'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy mở hộp ra, phát hiện bên trong là một chiếc khăn quàng đẹp.',answer:'她打开盒子，发现里面是一条漂亮的围巾。',answerPy:'Tā dǎkāi hézi, fāxiàn lǐmiàn shì yì tiáo piàoliang de wéijīn.',
      note:'Bổ ngữ kết quả 打开 (ôn lại Bài 2).'},
   ]},

  {n:13,zh:'扔',py:'rēng',pos:'Động từ',vn:'vứt bỏ, ném',em:'🗑️',lesson:2,
   explain:['Vứt đi, ném đi. 扔掉 = vứt bỏ hẳn; 乱扔 = vứt bừa bãi.'],
   usage:'扔掉, 乱扔垃圾, 扔进垃圾桶.',
   collo:['扔掉','乱扔垃圾','把……扔掉'],
   ex_zh:'好的，我马上就去把它们扔掉。',ex_py:'Hǎo de, wǒ mǎshàng jiù qù bǎ tāmen rēngdiào.',ex_vn:'Vâng, tôi đi vứt chúng ngay.',
   exList:[
     {zh:'好的，我马上就去把它们扔掉。',py:'Hǎo de, wǒ mǎshàng jiù qù bǎ tāmen rēngdiào.',vn:'Vâng, tôi đi vứt chúng ngay.'},
     {zh:'如果在公共场所找不到垃圾箱，你一般会怎么做？——找到垃圾箱再扔。',py:'Rúguǒ zài gōnggòng chǎngsuǒ zhǎobudào lājīxiāng, nǐ yìbān huì zěnme zuò? — Zhǎodào lājīxiāng zài rēng.',vn:'Nếu ở nơi công cộng không tìm thấy thùng rác, bạn thường làm thế nào? — Tìm thấy thùng rác rồi mới vứt.'},
     {zh:'环境污染的原因之一是有人乱扔垃圾。',py:'Huánjìng wūrǎn de yuányīn zhī yī shì yǒu rén luàn rēng lājī.',vn:'Một trong những nguyên nhân ô nhiễm môi trường là có người vứt rác bừa bãi.'},
   ],
   hanzi:[
     {c:'扔',p:'rēng',type:'左右结构 · Trái-phải',st:5,ord:'扌 trái → 乃 phải',rad:'扌 (thủ)',mean:'ném',
      tip:'Bộ tay 扌 + 乃 → dùng tay NÉM, VỨT. Chữ chỉ 5 nét, rất dễ nhớ.',
      cf:'仍 (réng – vẫn)',w:'扔 / 扔掉 / 乱扔'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vâng, tôi đi vứt chúng ngay.',answer:'好的，我马上就去把它们扔掉。',answerPy:'Hǎo de, wǒ mǎshàng jiù qù bǎ tāmen rēngdiào.',
      note:'Câu chữ 把 + 掉 (ôn lại Bài 5).'},
     {promptLang:'vi',prompt:'Một trong những nguyên nhân ô nhiễm môi trường là có người vứt rác bừa bãi.',answer:'环境污染的原因之一是有人乱扔垃圾。',answerPy:'Huánjìng wūrǎn de yuányīn zhī yī shì yǒu rén luàn rēng lājī.',
      note:'……之一 ôn lại Bài 10.'},
   ]},

  {n:14,zh:'以',py:'yǐ',pos:'Giới từ',vn:'dựa vào, bằng',em:'🔧',lesson:2,
   explain:['Giới từ: dùng, bằng (以……+动词). 以……为…… = lấy … làm …. Liên từ: để, nhằm (chỉ mục đích).'],
   usage:'以最快的速度, 以……为……, ……，以表示……',
   collo:['以最快的速度完成','以严格的标准要求自己','以……为镜子'],
   ex_zh:'经理您放心，我一定以最快的速度完成。',ex_py:'Jīnglǐ nín fàng xīn, wǒ yídìng yǐ zuì kuài de sùdù wánchéng.',ex_vn:'Giám đốc yên tâm, tôi nhất định sẽ hoàn thành với tốc độ nhanh nhất.',
   exList:[
     {zh:'经理您放心，我一定以最快的速度完成。',py:'Jīnglǐ nín fàng xīn, wǒ yídìng yǐ zuì kuài de sùdù wánchéng.',vn:'Giám đốc yên tâm, tôi nhất định sẽ hoàn thành với tốc độ nhanh nhất.'},
     {zh:'我们应该以那些敢说真话的人为镜子，这样才能及时发现自己的缺点。',py:'Wǒmen yīnggāi yǐ nàxiē gǎn shuō zhēnhuà de rén wéi jìngzi, zhèyàng cái néng jíshí fāxiàn zìjǐ de quēdiǎn.',vn:'Chúng ta nên lấy những người dám nói thật làm gương, như vậy mới kịp thời phát hiện khuyết điểm của mình.'},
     {zh:'中国人往往会请重要的朋友去饭店吃饭，以表示对客人的尊重和礼貌。',py:'Zhōngguó rén wǎngwǎng huì qǐng zhòngyào de péngyou qù fàndiàn chī fàn, yǐ biǎoshì duì kèrén de zūnzhòng hé lǐmào.',vn:'Người Trung Quốc thường mời bạn bè quan trọng đi nhà hàng ăn cơm, để thể hiện sự tôn trọng và lễ phép với khách.'},
   ],
   hanzi:[
     {c:'以',p:'yǐ',type:'左右结构 · Trái-phải',st:4,ord:'㇙ → 丶 → 人',rad:'人 (nhân)',mean:'lấy, dùng',
      tip:'Chữ cổ vẽ người cầm đồ vật → DÙNG, LẤY, BẰNG. Có trong 可以, 以为, 以前, 以后, 所以.',
      cf:'似 (sì – giống)',w:'以 / 可以 / 以为 / 以前 / 所以'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giám đốc yên tâm, tôi nhất định sẽ hoàn thành với tốc độ nhanh nhất.',answer:'经理您放心，我一定以最快的速度完成。',answerPy:'Jīnglǐ nín fàng xīn, wǒ yídìng yǐ zuì kuài de sùdù wánchéng.',
      note:'放心 ôn lại Bài 5.'},
     {promptLang:'vi',prompt:'Chỉ khi lấy tiêu chuẩn nghiêm khắc yêu cầu bản thân mới có thể khiến mình trở nên xuất sắc hơn.',answer:'只有以严格的标准来要求自己才会让自己变得更优秀。',answerPy:'Zhǐyǒu yǐ yángé de biāozhǔn lái yāoqiú zìjǐ cái huì ràng zìjǐ biàn de gèng yōuxiù.',
      note:'只有……才 (Bài 9), 严格 (Bài 12), 标准/优秀 (Bài 10).'},
   ]},

  {n:15,zh:'速度',py:'sùdù',pos:'Danh từ',vn:'tốc độ',em:'⚡',lesson:2,
   explain:['Mức độ nhanh chậm. 度 còn có trong 温度 (nhiệt độ), 态度 (thái độ).'],
   usage:'速度很快, 以最快的速度, 按照现在的速度.',
   collo:['以最快的速度','火车的速度','速度非常快'],
   ex_zh:'我一定以最快的速度完成。',ex_py:'Wǒ yídìng yǐ zuì kuài de sùdù wánchéng.',ex_vn:'Tôi nhất định sẽ hoàn thành với tốc độ nhanh nhất.',
   exList:[
     {zh:'我一定以最快的速度完成。',py:'Wǒ yídìng yǐ zuì kuài de sùdù wánchéng.',vn:'Tôi nhất định sẽ hoàn thành với tốc độ nhanh nhất.'},
     {zh:'现在火车的速度非常快，有时乘坐火车甚至比乘坐飞机更节约时间。',py:'Xiànzài huǒchē de sùdù fēicháng kuài, yǒushí chéngzuò huǒchē shènzhì bǐ chéngzuò fēijī gèng jiéyuē shíjiān.',vn:'Bây giờ tốc độ tàu hỏa rất nhanh, có lúc đi tàu thậm chí còn tiết kiệm thời gian hơn đi máy bay.'},
     {zh:'按照现在的速度，想要在规定时间内完成计划，好像有点儿困难。',py:'Ànzhào xiànzài de sùdù, xiǎng yào zài guīdìng shíjiān nèi wánchéng jìhuà, hǎoxiàng yǒudiǎnr kùnnan.',vn:'Theo tốc độ hiện tại, muốn hoàn thành kế hoạch trong thời gian quy định, có vẻ hơi khó.'},
   ],
   hanzi:[
     {c:'速',p:'sù',type:'半包围结构 · Nửa bao quanh',st:10,ord:'束 trong → 辶 bao',rad:'辶 (sước)',mean:'nhanh',
      tip:'Bộ đi 辶 + 束(bó, buộc) → đi nhanh như bó tên bắn → TỐC, NHANH. 速度 = TỐC ĐỘ.',
      cf:'束 (shù – bó)',w:'速度 / 高速 / 快速'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Theo tốc độ hiện tại, muốn hoàn thành kế hoạch trong thời gian quy định, có vẻ hơi khó.',answer:'按照现在的速度，想要在规定时间内完成计划，好像有点儿困难。',answerPy:'Ànzhào xiànzài de sùdù, xiǎng yào zài guīdìng shíjiān nèi wánchéng jìhuà, hǎoxiàng yǒudiǎnr kùnnan.',
      note:'按照 (Bài 4), 规定 (Bài 12), 好像 (Bài 6).'},
   ]},

  {n:16,zh:'地球',py:'dìqiú',pos:'Danh từ',vn:'trái đất',em:'🌍',lesson:3,
   explain:['Hành tinh chúng ta đang sống. 地球一小时 = Giờ Trái đất.'],
   usage:'保护地球, 地球环境, 地球是我们共同的家.',
   collo:['保护地球','地球环境','地球一小时'],
   ex_zh:'早上听新闻说明天有一个叫"地球一小时"的活动，你对这个活动了解吗？',ex_py:'Zǎoshang tīng xīnwén shuō míngtiān yǒu yí ge jiào "Dìqiú Yì Xiǎoshí" de huódòng, nǐ duì zhège huódòng liǎojiě ma?',ex_vn:'Sáng nay nghe tin tức nói ngày mai có hoạt động tên "Giờ Trái đất", bạn có biết về hoạt động này không?',
   exList:[
     {zh:'早上听新闻说明天有一个叫"地球一小时"的活动，你对这个活动了解吗？',py:'Zǎoshang tīng xīnwén shuō míngtiān yǒu yí ge jiào "Dìqiú Yì Xiǎoshí" de huódòng, nǐ duì zhège huódòng liǎojiě ma?',vn:'Sáng nay nghe tin tức nói ngày mai có hoạt động tên "Giờ Trái đất", bạn có biết về hoạt động này không?'},
     {zh:'地球是我们共同的家，只有大家共同努力，才能使我们的家变得更美丽。',py:'Dìqiú shì wǒmen gòngtóng de jiā, zhǐyǒu dàjiā gòngtóng nǔlì, cái néng shǐ wǒmen de jiā biàn de gèng měilì.',vn:'Trái đất là ngôi nhà chung của chúng ta, chỉ khi mọi người cùng nỗ lực mới có thể khiến ngôi nhà đẹp hơn.'},
     {zh:'保护地球环境，并不是一件离我们很远、很难做到的事情。',py:'Bǎohù dìqiú huánjìng, bìng bú shì yí jiàn lí wǒmen hěn yuǎn, hěn nán zuòdào de shìqing.',vn:'Bảo vệ môi trường Trái đất không hề là việc xa vời, khó làm.'},
   ],
   hanzi:[
     {c:'球',p:'qiú',type:'左右结构 · Trái-phải',st:11,ord:'王 trái → 求 phải',rad:'王 (ngọc)',mean:'quả cầu',
      tip:'Bộ ngọc 王 + 求(biểu âm) → viên ngọc tròn → QUẢ CẦU, BÓNG. 地球 = quả cầu đất = TRÁI ĐẤT.',
      cf:'求 (qiú – cầu xin)',w:'地球 / 足球 / 篮球'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bảo vệ môi trường Trái đất không hề là việc xa vời, khó làm.',answer:'保护地球环境，并不是一件离我们很远、很难做到的事情。',answerPy:'Bǎohù dìqiú huánjìng, bìng bú shì yí jiàn lí wǒmen hěn yuǎn, hěn nán zuòdào de shìqing.',
      note:'并不 ôn lại Bài 4, 保护 (Bài 12).'},
   ]},

  {n:17,zh:'既然',py:'jìrán',pos:'Liên từ',vn:'vì, đã… thì…',em:'🔗',lesson:3,
   explain:['Dùng ở vế đầu, nêu sự thật đã có, vế sau (就/也/还/那么) rút ra kết luận. Ngữ pháp trọng tâm.'],
   usage:'既然……，就/那么……',
   collo:['既然这样，就……','既然不愿意……，为什么还……','既然明天……，那么……'],
   ex_zh:'既然明天晚上公司会关灯停电，那么我们肯定不用加班了。',ex_py:'Jìrán míngtiān wǎnshang gōngsī huì guān dēng tíng diàn, nàme wǒmen kěndìng búyòng jiā bān le.',ex_vn:'Đã là mai công ty tắt đèn cúp điện, thì chúng ta chắc chắn không phải tăng ca rồi.',
   exList:[
     {zh:'既然明天晚上公司会关灯停电，那么我们肯定不用加班了。',py:'Jìrán míngtiān wǎnshang gōngsī huì guān dēng tíng diàn, nàme wǒmen kěndìng búyòng jiā bān le.',vn:'Đã là mai công ty tắt đèn cúp điện, thì chúng ta chắc chắn không phải tăng ca rồi.'},
     {zh:'A：你既然不愿意打球，为什么还要打？B：我是不得不打啊，因为这些天我又胖了好几斤。',py:'A: Nǐ jìrán bú yuànyì dǎ qiú, wèishénme hái yào dǎ? B: Wǒ shì bùdébù dǎ a, yīnwèi zhèxiē tiān wǒ yòu pàngle hǎo jǐ jīn.',vn:'A: Bạn đã không muốn chơi bóng, sao còn chơi? B: Tôi buộc phải chơi, vì mấy hôm nay tôi lại béo thêm mấy cân.'},
     {zh:'既然这样，就只好安排在下周了。',py:'Jìrán zhèyàng, jiù zhǐhǎo ānpái zài xià zhōu le.',vn:'Đã vậy thì đành sắp xếp vào tuần sau.'},
   ],
   hanzi:[
     {c:'既',p:'jì',type:'左右结构 · Trái-phải',st:9,ord:'旣 trái → 旡 phải',rad:'旡 (ký)',mean:'đã',
      tip:'Hình người ăn xong quay đầu đi → ĐÃ XONG. 既然 = đã như vậy; 既……又 = vừa … vừa (Bài 7).',
      cf:'即 (jí – tức là)',w:'既然 / 既……又……'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã vậy thì đành sắp xếp vào tuần sau.',answer:'既然这样，就只好安排在下周了。',answerPy:'Jìrán zhèyàng, jiù zhǐhǎo ānpái zài xià zhōu le.',
      note:'只好 ôn lại Bài 3.'},
     {promptLang:'vi',prompt:'Đã có 15 trên 20 người đồng ý, thì chúng ta thông qua kế hoạch này.',answer:'既然二十个人中有十五个人同意，那我们就通过这个计划了。',answerPy:'Jìrán èrshí ge rén zhōng yǒu shíwǔ ge rén tóngyì, nà wǒmen jiù tōngguò zhège jìhuà le.',
      note:'通过 ôn lại Bài 9.'},
   ]},

  {n:18,zh:'停',py:'tíng',pos:'Động từ',vn:'ngừng, cúp, cắt',em:'⏸️',lesson:3,
   explain:['Dừng lại, ngừng (停电 cúp điện, 停车 đỗ xe, 停止 dừng lại). 不停地 = không ngừng.'],
   usage:'停电, 停车, 不停地.',
   collo:['关灯停电','停车','不停地变化'],
   ex_zh:'既然明天晚上公司会关灯停电，那么我们肯定不用加班了。',ex_py:'Jìrán míngtiān wǎnshang gōngsī huì guān dēng tíng diàn, nàme wǒmen kěndìng búyòng jiā bān le.',ex_vn:'Đã là mai công ty tắt đèn cúp điện, thì chúng ta chắc chắn không phải tăng ca rồi.',
   exList:[
     {zh:'既然明天晚上公司会关灯停电，那么我们肯定不用加班了。',py:'Jìrán míngtiān wǎnshang gōngsī huì guān dēng tíng diàn, nàme wǒmen kěndìng búyòng jiā bān le.',vn:'Đã là mai công ty tắt đèn cúp điện, thì chúng ta chắc chắn không phải tăng ca rồi.'},
     {zh:'随着年龄的增长，他们会发现生活总是在不停地变化。',py:'Suízhe niánlíng de zēngzhǎng, tāmen huì fāxiàn shēnghuó zǒngshì zài bù tíng de biànhuà.',vn:'Cùng với tuổi tác tăng lên, họ sẽ phát hiện cuộc sống luôn không ngừng thay đổi.'},
     {zh:'这儿不能停车，请把车停到停车场去。',py:'Zhèr bù néng tíng chē, qǐng bǎ chē tíngdào tíngchēchǎng qù.',vn:'Ở đây không được đỗ xe, xin đỗ xe vào bãi.'},
   ],
   hanzi:[
     {c:'停',p:'tíng',type:'左右结构 · Trái-phải',st:11,ord:'亻 trái → 亭 phải',rad:'亻 (nhân)',mean:'dừng',
      tip:'Người 亻 + 亭(đình, nhà nghỉ chân) → người DỪNG lại nghỉ ở đình → DỪNG, NGỪNG.',
      cf:'亭 (tíng – đình)',w:'停 / 停电 / 停车 / 不停'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở đây không được đỗ xe, xin đỗ xe vào bãi.',answer:'这儿不能停车，请把车停到停车场去。',answerPy:'Zhèr bù néng tíng chē, qǐng bǎ chē tíngdào tíngchēchǎng qù.',
      note:'把 + 到 + 去 (ôn lại Bài 2).'},
   ]},

  {n:19,zh:'得意',py:'déyì',pos:'Tính từ',vn:'hể hả, đắc chí',em:'😏',lesson:3,
   explain:['Vui vẻ tự mãn vì đạt được điều gì. Thường: 得意的样子, 因……而得意.'],
   usage:'看你得意的样子, 因一时的成功而得意.',
   collo:['得意的样子','别太得意','因成功而得意'],
   ex_zh:'看你得意的样子！还以为你高兴是为了支持环保，原来是因为不用加班啊！',ex_py:'Kàn nǐ déyì de yàngzi! Hái yǐwéi nǐ gāoxìng shì wèile zhīchí huánbǎo, yuánlái shì yīnwèi búyòng jiā bān a!',ex_vn:'Nhìn cái vẻ hể hả của bạn kìa! Còn tưởng bạn vui vì ủng hộ bảo vệ môi trường, hóa ra là vì không phải tăng ca!',
   exList:[
     {zh:'看你得意的样子！还以为你高兴是为了支持环保，原来是因为不用加班啊！',py:'Kàn nǐ déyì de yàngzi! Hái yǐwéi nǐ gāoxìng shì wèile zhīchí huánbǎo, yuánlái shì yīnwèi búyòng jiā bān a!',vn:'Nhìn cái vẻ hể hả của bạn kìa! Còn tưởng bạn vui vì ủng hộ bảo vệ môi trường, hóa ra là vì không phải tăng ca!'},
     {zh:'不要因一时的成功而得意，也不要因一时的失败而伤心。',py:'Búyào yīn yìshí de chénggōng ér déyì, yě búyào yīn yìshí de shībài ér shāngxīn.',vn:'Đừng vì thành công nhất thời mà đắc chí, cũng đừng vì thất bại nhất thời mà đau lòng.'},
     {zh:'他考了第一名，得意得连饭都忘了吃。',py:'Tā kǎole dì-yī míng, déyì de lián fàn dōu wàngle chī.',vn:'Anh ấy thi được hạng nhất, hể hả đến mức quên cả ăn cơm.'},
   ],
   hanzi:[
     {c:'意',p:'yì',type:'上下结构 · Trên-dưới',st:13,ord:'音 trên → 心 dưới',rad:'心 (tâm)',mean:'ý',
      tip:'音(âm thanh) + 心(tim) → tiếng lòng → Ý. 得意 = được ý mình → ĐẮC Ý, HỂ HẢ.',
      cf:'思 (sī – nghĩ)',w:'得意 / 意思 / 意见 / 满意'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng vì thành công nhất thời mà đắc chí, cũng đừng vì thất bại nhất thời mà đau lòng.',answer:'不要因一时的成功而得意，也不要因一时的失败而伤心。',answerPy:'Búyào yīn yìshí de chénggōng ér déyì, yě búyào yīn yìshí de shībài ér shāngxīn.',
      note:'成功/失败 ôn lại Bài 9, 伤心 (Bài 8).'},
   ]},

  {n:20,zh:'目的',py:'mùdì',pos:'Danh từ',vn:'mục đích',em:'🎯',lesson:3,
   explain:['Điều muốn đạt được. 目的是……, 达到目的, 目的很简单.'],
   usage:'目的是……, 达到目的, 主要目的.',
   collo:['目的挺简单','达到目的','活动的目的'],
   ex_zh:'其实目的挺简单的，就是提醒人们节约用电，希望引起人们对气候变暖问题的关注。',ex_py:'Qíshí mùdì tǐng jiǎndān de, jiù shì tíxǐng rénmen jiéyuē yòng diàn, xīwàng yǐnqǐ rénmen duì qìhòu biàn nuǎn wèntí de guānzhù.',ex_vn:'Thực ra mục đích khá đơn giản, chính là nhắc nhở mọi người tiết kiệm điện, hy vọng khơi dậy sự quan tâm đến vấn đề khí hậu nóng lên.',
   exList:[
     {zh:'其实目的挺简单的，就是提醒人们节约用电，希望引起人们对气候变暖问题的关注。',py:'Qíshí mùdì tǐng jiǎndān de, jiù shì tíxǐng rénmen jiéyuē yòng diàn, xīwàng yǐnqǐ rénmen duì qìhòu biàn nuǎn wèntí de guānzhù.',vn:'Thực ra mục đích khá đơn giản, chính là nhắc nhở mọi người tiết kiệm điện, hy vọng khơi dậy sự quan tâm đến vấn đề khí hậu nóng lên.'},
     {zh:'"地球一小时"是个什么活动？这个活动的目的是什么？',py:'"Dìqiú Yì Xiǎoshí" shì ge shénme huódòng? Zhège huódòng de mùdì shì shénme?',vn:'"Giờ Trái đất" là hoạt động gì? Mục đích của hoạt động này là gì?'},
     {zh:'为了达到目的，他坚持每天练习三个小时。',py:'Wèile dádào mùdì, tā jiānchí měi tiān liànxí sān ge xiǎoshí.',vn:'Để đạt được mục đích, anh ấy kiên trì luyện tập ba tiếng mỗi ngày.'},
   ],
   hanzi:[
     {c:'目',p:'mù',type:'独体字 · Chữ đơn thể',st:5,ord:'丨 → 𠃍 → 一 → 一 → 一',rad:'目 (mục)',mean:'mắt',
      tip:'Tượng hình con MẮT dựng đứng. Mắt nhìn vào đích → 目的 = MỤC ĐÍCH. Chú ý 的 ở đây đọc dì.',
      cf:'日 (rì – mặt trời, 4 nét)',w:'目的 / 节目 / 题目'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để đạt được mục đích, anh ấy kiên trì luyện tập ba tiếng mỗi ngày.',answer:'为了达到目的，他坚持每天练习三个小时。',answerPy:'Wèile dádào mùdì, tā jiānchí měi tiān liànxí sān ge xiǎoshí.',
      note:'达到 (Bài 12), 坚持 (Bài 9).'},
   ]},

  {n:21,zh:'暖',py:'nuǎn',pos:'Tính từ',vn:'ấm, ấm áp',em:'☀️',lesson:3,
   explain:['Ấm (không lạnh). 暖和 = ấm áp, 变暖 = ấm lên, 气候变暖 = khí hậu nóng lên.'],
   usage:'气候变暖, 天气暖和, 暖气.',
   collo:['气候变暖','天气变暖','暖和'],
   ex_zh:'希望引起人们对气候变暖问题的关注。',ex_py:'Xīwàng yǐnqǐ rénmen duì qìhòu biàn nuǎn wèntí de guānzhù.',ex_vn:'Hy vọng khơi dậy sự quan tâm của mọi người đến vấn đề khí hậu nóng lên.',
   exList:[
     {zh:'希望引起人们对气候变暖问题的关注。',py:'Xīwàng yǐnqǐ rénmen duì qìhòu biàn nuǎn wèntí de guānzhù.',vn:'Hy vọng khơi dậy sự quan tâm của mọi người đến vấn đề khí hậu nóng lên.'},
     {zh:'春天来了，天气一天比一天暖和。',py:'Chūntiān lái le, tiānqì yì tiān bǐ yì tiān nuǎnhuo.',vn:'Mùa xuân đến rồi, thời tiết ngày một ấm hơn.'},
     {zh:'随着地球气候变暖，很多地方的夏天越来越热。',py:'Suízhe dìqiú qìhòu biàn nuǎn, hěn duō dìfang de xiàtiān yuè lái yuè rè.',vn:'Cùng với khí hậu Trái đất nóng lên, mùa hè nhiều nơi ngày càng nóng.'},
   ],
   hanzi:[
     {c:'暖',p:'nuǎn',type:'左右结构 · Trái-phải',st:13,ord:'日 trái → 爰 phải',rad:'日 (nhật)',mean:'ấm',
      tip:'Mặt trời 日 + 爰 → có nắng → ẤM. Phân biệt với 缓 (huǎn – chậm, bộ 纟).',
      cf:'缓 (huǎn – chậm)',w:'暖 / 暖和 / 变暖 / 暖气'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cùng với khí hậu Trái đất nóng lên, mùa hè nhiều nơi ngày càng nóng.',answer:'随着地球气候变暖，很多地方的夏天越来越热。',answerPy:'Suízhe dìqiú qìhòu biàn nuǎn, hěn duō dìfang de xiàtiān yuè lái yuè rè.',
      note:'随着 ôn lại ngữ pháp Bài 13, 气候 (Bài 9).'},
   ]},

  {n:22,zh:'塑料袋',py:'sùliàodài',pos:'Danh từ',vn:'túi nilông, túi nhựa',em:'🛍️',lesson:4,
   explain:['Túi làm bằng nhựa. 塑料 = nhựa, 袋 = túi (纸袋 túi giấy, Bài 13).'],
   usage:'使用塑料袋, 免费塑料袋, 拒绝使用塑料袋.',
   collo:['节约使用塑料袋','免费塑料袋','拒绝使用塑料袋'],
   ex_zh:'塑料袋给人们的生活带来方便，受到人们的普遍欢迎，可是，它的大量使用也带来了严重的环境污染问题。',ex_py:'Sùliàodài gěi rénmen de shēnghuó dàilái fāngbiàn, shòudào rénmen de pǔbiàn huānyíng, kěshì, tā de dàliàng shǐyòng yě dàiláile yánzhòng de huánjìng wūrǎn wèntí.',ex_vn:'Túi nilông mang lại tiện lợi cho cuộc sống, được mọi người đón nhận rộng rãi, nhưng việc dùng với số lượng lớn cũng mang lại vấn đề ô nhiễm môi trường nghiêm trọng.',
   exList:[
     {zh:'塑料袋给人们的生活带来方便，受到人们的普遍欢迎。',py:'Sùliàodài gěi rénmen de shēnghuó dàilái fāngbiàn, shòudào rénmen de pǔbiàn huānyíng.',vn:'Túi nilông mang lại tiện lợi cho cuộc sống, được mọi người đón nhận rộng rãi.'},
     {zh:'一些国家规定，超市、商场不能为顾客提供免费塑料袋。',py:'Yìxiē guójiā guīdìng, chāoshì, shāngchǎng bù néng wèi gùkè tígōng miǎnfèi sùliàodài.',vn:'Một số nước quy định, siêu thị, trung tâm thương mại không được cung cấp túi nilông miễn phí cho khách.'},
     {zh:'请大家节约使用塑料袋，或者购物时自备购物袋，甚至拒绝使用塑料袋。',py:'Qǐng dàjiā jiéyuē shǐyòng sùliàodài, huòzhě gòuwù shí zì bèi gòuwùdài, shènzhì jùjué shǐyòng sùliàodài.',vn:'Mong mọi người tiết kiệm dùng túi nilông, hoặc tự mang túi khi mua sắm, thậm chí từ chối dùng túi nilông.'},
   ],
   hanzi:[
     {c:'塑',p:'sù',type:'上下结构 · Trên-dưới',st:13,ord:'朔 trên → 土 dưới',rad:'土 (thổ)',mean:'nặn, nhựa',
      tip:'朔 + 土(đất) → NẶN đất thành hình → chất dẻo có thể nặn = 塑料 (NHỰA).',
      cf:'朔 (shuò – mùng một)',w:'塑料 / 塑料袋 / 雕塑'},
     {c:'袋',p:'dài',type:'上下结构 · Trên-dưới',st:11,ord:'代 trên → 衣 dưới',rad:'衣 (y)',mean:'túi',
      tip:'代(biểu âm) + 衣(áo, vải) → đồ bằng vải để đựng → TÚI. 纸袋 (Bài 13), 塑料袋, 口袋.',
      cf:'代 (dài – thay)',w:'塑料袋 / 纸袋 / 口袋'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một số nước quy định, siêu thị không được cung cấp túi nilông miễn phí cho khách.',answer:'一些国家规定，超市不能为顾客提供免费塑料袋。',answerPy:'Yìxiē guójiā guīdìng, chāoshì bù néng wèi gùkè tígōng miǎnfèi sùliàodài.',
      note:'规定 (Bài 12), 顾客/提供 (Bài 6), 免费 (Bài 5).'},
   ]},

  {n:23,zh:'于是',py:'yúshì',pos:'Liên từ',vn:'thế là',em:'➡️',lesson:4,
   explain:['Dùng ở vế sau, sự việc sau xảy ra ngay tiếp theo sự việc trước (quan hệ tiếp nối). So sánh 因此 (nhấn mạnh nhân-quả).'],
   usage:'……，于是……',
   collo:['于是我爸妈就……','于是就有了……','于是，一些国家规定……'],
   ex_zh:'它的大量使用也带来了严重的环境污染问题。于是，一些国家规定，超市、商场不能为顾客提供免费塑料袋。',ex_py:'Tā de dàliàng shǐyòng yě dàiláile yánzhòng de huánjìng wūrǎn wèntí. Yúshì, yìxiē guójiā guīdìng, chāoshì, shāngchǎng bù néng wèi gùkè tígōng miǎnfèi sùliàodài.',ex_vn:'Việc dùng với số lượng lớn cũng mang lại ô nhiễm nghiêm trọng. Thế là, một số nước quy định siêu thị không được cung cấp túi nilông miễn phí.',
   exList:[
     {zh:'于是，一些国家规定，超市、商场不能为顾客提供免费塑料袋。',py:'Yúshì, yìxiē guójiā guīdìng, chāoshì, shāngchǎng bù néng wèi gùkè tígōng miǎnfèi sùliàodài.',vn:'Thế là, một số nước quy định siêu thị, trung tâm thương mại không được cung cấp túi nilông miễn phí.'},
     {zh:'听爷爷奶奶说，我妹妹出生那天，正好下了一场大雪，于是我爸妈就给她取名叫夏雪。',py:'Tīng yéye nǎinai shuō, wǒ mèimei chūshēng nà tiān, zhènghǎo xiàle yì cháng dà xuě, yúshì wǒ bàmā jiù gěi tā qǔ míng jiào Xià Xuě.',vn:'Nghe ông bà nói, ngày em gái tôi sinh ra vừa đúng có trận tuyết lớn, thế là bố mẹ đặt tên em là Hạ Tuyết.'},
     {zh:'大家都同意寒假去旅行，于是，我们开始讨论去哪里旅行的问题。',py:'Dàjiā dōu tóngyì hánjià qù lǚxíng, yúshì, wǒmen kāishǐ tǎolùn qù nǎlǐ lǚxíng de wèntí.',vn:'Mọi người đều đồng ý nghỉ đông đi du lịch, thế là chúng tôi bắt đầu thảo luận đi đâu.'},
   ],
   hanzi:[
     {c:'于',p:'yú',type:'独体字 · Chữ đơn thể',st:3,ord:'一 → 一 → 亅',rad:'二 (nhị)',mean:'ở, tại',
      tip:'Chữ 3 nét, giới từ văn viết "ở, tại, với". 于是 = ở việc này → THẾ LÀ; 由于 (Bài 10), 对于 (Bài 12), 终于.',
      cf:'干 (gān – khô)',w:'于是 / 由于 / 对于 / 终于'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mọi người đều đồng ý nghỉ đông đi du lịch, thế là chúng tôi bắt đầu thảo luận đi đâu.',answer:'大家都同意寒假去旅行，于是，我们开始讨论去哪里旅行的问题。',answerPy:'Dàjiā dōu tóngyì hánjià qù lǚxíng, yúshì, wǒmen kāishǐ tǎolùn qù nǎlǐ lǚxíng de wèntí.',
      note:'讨论 ôn lại Bài 13.'},
   ]},

  {n:24,zh:'鼓励',py:'gǔlì',pos:'Động từ',vn:'khuyến khích',em:'📣',lesson:4,
   explain:['Cổ vũ, động viên ai làm việc gì. 鼓励 + người + làm gì.'],
   usage:'鼓励大家……, 受到鼓励, 老师的鼓励.',
   collo:['鼓励大家购买','鼓励孩子','老师的鼓励'],
   ex_zh:'并且鼓励大家购买可以多次使用的购物袋。',ex_py:'Bìngqiě gǔlì dàjiā gòumǎi kěyǐ duō cì shǐyòng de gòuwùdài.',ex_vn:'Hơn nữa khuyến khích mọi người mua túi mua sắm dùng được nhiều lần.',
   exList:[
     {zh:'并且鼓励大家购买可以多次使用的购物袋。',py:'Bìngqiě gǔlì dàjiā gòumǎi kěyǐ duō cì shǐyòng de gòuwùdài.',vn:'Hơn nữa khuyến khích mọi người mua túi mua sắm dùng được nhiều lần.'},
     {zh:'为了鼓励大家少抽烟，人们将每年的4月7日定为"世界无烟日"。',py:'Wèile gǔlì dàjiā shǎo chōu yān, rénmen jiāng měi nián de sì yuè qī rì dìngwéi "Shìjiè Wú Yān Rì".',vn:'Để khuyến khích mọi người hút thuốc ít đi, người ta lấy ngày 7 tháng 4 hằng năm làm "Ngày thế giới không thuốc lá".'},
     {zh:'孩子失败的时候，父母应该鼓励他，而不是批评他。',py:'Háizi shībài de shíhou, fùmǔ yīnggāi gǔlì tā, ér bú shì pīpíng tā.',vn:'Khi con thất bại, cha mẹ nên khuyến khích nó, chứ không phải phê bình.'},
   ],
   hanzi:[
     {c:'鼓',p:'gǔ',type:'左右结构 · Trái-phải',st:13,ord:'壴 trái → 支 phải',rad:'鼓 (cổ)',mean:'trống',
      tip:'壴(cái trống) + 支(tay cầm dùi) → ĐÁNH TRỐNG cổ vũ → 鼓励 = KHUYẾN KHÍCH, 鼓掌 = vỗ tay.',
      cf:'支 (zhī – cành, chi)',w:'鼓励 / 鼓掌'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi con thất bại, cha mẹ nên khuyến khích nó, chứ không phải phê bình.',answer:'孩子失败的时候，父母应该鼓励他，而不是批评他。',answerPy:'Háizi shībài de shíhou, fùmǔ yīnggāi gǔlì tā, ér bú shì pīpíng tā.',
      note:'而不是 (Bài 8), 批评 (Bài 6).'},
   ]},

  {n:25,zh:'拒绝',py:'jùjué',pos:'Động từ',vn:'từ chối',em:'🙅',lesson:4,
   explain:['Không nhận, không đồng ý. Trái nghĩa: 接受 (Bài 6).'],
   usage:'拒绝使用……, 拒绝朋友的要求, 被拒绝.',
   collo:['拒绝使用塑料袋','拒绝别人的要求','不好意思拒绝'],
   ex_zh:'甚至拒绝使用塑料袋。',ex_py:'Shènzhì jùjué shǐyòng sùliàodài.',ex_vn:'Thậm chí từ chối dùng túi nilông.',
   exList:[
     {zh:'请大家节约使用塑料袋，或者购物时自备购物袋，甚至拒绝使用塑料袋。',py:'Qǐng dàjiā jiéyuē shǐyòng sùliàodài, huòzhě gòuwù shí zì bèi gòuwùdài, shènzhì jùjué shǐyòng sùliàodài.',vn:'Mong mọi người tiết kiệm dùng túi nilông, hoặc tự mang túi khi mua sắm, thậm chí từ chối dùng túi nilông.'},
     {zh:'有的人总是不好意思拒绝朋友的要求，害怕这样会影响两个人的感情。',py:'Yǒude rén zǒngshì bù hǎoyìsi jùjué péngyou de yāoqiú, hàipà zhèyàng huì yǐngxiǎng liǎng ge rén de gǎnqíng.',vn:'Có người luôn ngại từ chối yêu cầu của bạn bè, sợ như vậy sẽ ảnh hưởng tình cảm hai người.'},
     {zh:'他申请了那份工作，可惜被拒绝了。',py:'Tā shēnqǐngle nà fèn gōngzuò, kěxī bèi jùjué le.',vn:'Anh ấy xin công việc đó, tiếc là bị từ chối.'},
   ],
   hanzi:[
     {c:'拒',p:'jù',type:'左右结构 · Trái-phải',st:7,ord:'扌 trái → 巨 phải',rad:'扌 (thủ)',mean:'cự tuyệt',
      tip:'Tay 扌 + 巨(to lớn) → giơ tay đẩy ra → CỰ TUYỆT, TỪ CHỐI.',
      cf:'距 (jù – khoảng cách)',w:'拒绝'},
     {c:'绝',p:'jué',type:'左右结构 · Trái-phải',st:9,ord:'纟 trái → 色 phải',rad:'纟 (mịch)',mean:'dứt',
      tip:'Sợi tơ 纟 bị cắt ĐỨT → TUYỆT, DỨT HẲN. 拒绝 = từ chối dứt khoát.',
      cf:'色 (sè – màu)',w:'拒绝 / 绝对'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có người luôn ngại từ chối yêu cầu của bạn bè, sợ như vậy sẽ ảnh hưởng tình cảm hai người.',answer:'有的人总是不好意思拒绝朋友的要求，害怕这样会影响两个人的感情。',answerPy:'Yǒude rén zǒngshì bù hǎoyìsi jùjué péngyou de yāoqiú, hàipà zhèyàng huì yǐngxiǎng liǎng ge rén de gǎnqíng.',
      note:'害怕 (Bài 9), 影响 (Bài 4).'},
     {promptLang:'vi',prompt:'Anh ấy xin công việc đó, tiếc là bị từ chối.',answer:'他申请了那份工作，可惜被拒绝了。',answerPy:'Tā shēnqǐngle nà fèn gōngzuò, kěxī bèi jùjué le.',
      note:'申请 (Bài 13), 可惜 (Bài 12), câu chữ 被.'},
   ]},

  {n:26,zh:'减少',py:'jiǎnshǎo',pos:'Động từ',vn:'giảm bớt',em:'📉',lesson:4,
   explain:['Làm ít đi. Trái nghĩa: 增加 (Bài 9). 减少污染, 减少数量.'],
   usage:'减少污染, 减少使用数量, 大大减少.',
   collo:['减少污染','减少塑料袋的使用数量','减少压力'],
   ex_zh:'这样做可以减少塑料袋的使用数量，对环境保护有很大的作用。',ex_py:'Zhèyàng zuò kěyǐ jiǎnshǎo sùliàodài de shǐyòng shùliàng, duì huánjìng bǎohù yǒu hěn dà de zuòyòng.',ex_vn:'Làm như vậy có thể giảm số lượng túi nilông sử dụng, có tác dụng rất lớn đối với bảo vệ môi trường.',
   exList:[
     {zh:'这样做可以减少塑料袋的使用数量，对环境保护有很大的作用。',py:'Zhèyàng zuò kěyǐ jiǎnshǎo sùliàodài de shǐyòng shùliàng, duì huánjìng bǎohù yǒu hěn dà de zuòyòng.',vn:'Làm như vậy có thể giảm số lượng túi nilông sử dụng, có tác dụng rất lớn đối với bảo vệ môi trường.'},
     {zh:'只有大家共同努力，减少污染、保护环境，才能使我们的家变得更美丽。',py:'Zhǐyǒu dàjiā gòngtóng nǔlì, jiǎnshǎo wūrǎn, bǎohù huánjìng, cái néng shǐ wǒmen de jiā biàn de gèng měilì.',vn:'Chỉ khi mọi người cùng nỗ lực giảm ô nhiễm, bảo vệ môi trường, mới khiến ngôi nhà chúng ta đẹp hơn.'},
     {zh:'幽默不但可以减轻你工作上的压力，还可以拉近人与人之间的距离。',py:'Yōumò búdàn kěyǐ jiǎnqīng nǐ gōngzuò shang de yālì, hái kěyǐ lājìn rén yǔ rén zhījiān de jùlí.',vn:'Hài hước không những giảm nhẹ áp lực công việc, mà còn kéo gần khoảng cách giữa người với người.'},
   ],
   hanzi:[
     {c:'减',p:'jiǎn',type:'左右结构 · Trái-phải',st:11,ord:'冫 trái → 咸 phải',rad:'冫 (băng)',mean:'giảm',
      tip:'Bộ băng 冫 (lạnh, co lại) + 咸 → GIẢM, BỚT. 减少 = giảm ít đi; 减肥 = giảm béo (Bài 7).',
      cf:'感 (gǎn – cảm, bộ 心)',w:'减少 / 减肥 / 减轻'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm như vậy có thể giảm số lượng túi nilông sử dụng, có tác dụng rất lớn đối với bảo vệ môi trường.',answer:'这样做可以减少塑料袋的使用数量，对环境保护有很大的作用。',answerPy:'Zhèyàng zuò kěyǐ jiǎnshǎo sùliàodài de shǐyòng shùliàng, duì huánjìng bǎohù yǒu hěn dà de zuòyòng.',
      note:'作用/使用 ôn lại Bài 12.'},
   ]},

  {n:27,zh:'数量',py:'shùliàng',pos:'Danh từ',vn:'số lượng',em:'🔢',lesson:4,
   explain:['Lượng nhiều hay ít của sự vật. 数量 (số lượng) vs 质量 (chất lượng, Bài 6).'],
   usage:'使用数量, 数量很多, 减少数量.',
   collo:['塑料袋的使用数量','数量不多','增加数量'],
   ex_zh:'这样做可以减少塑料袋的使用数量。',ex_py:'Zhèyàng zuò kěyǐ jiǎnshǎo sùliàodài de shǐyòng shùliàng.',ex_vn:'Làm như vậy có thể giảm số lượng túi nilông sử dụng.',
   exList:[
     {zh:'这样做可以减少塑料袋的使用数量。',py:'Zhèyàng zuò kěyǐ jiǎnshǎo sùliàodài de shǐyòng shùliàng.',vn:'Làm như vậy có thể giảm số lượng túi nilông sử dụng.'},
     {zh:'这家公司的产品数量不多，但是质量很好。',py:'Zhè jiā gōngsī de chǎnpǐn shùliàng bù duō, dànshì zhìliàng hěn hǎo.',vn:'Sản phẩm của công ty này số lượng không nhiều, nhưng chất lượng rất tốt.'},
     {zh:'随着汽车数量的增加，空气污染越来越严重。',py:'Suízhe qìchē shùliàng de zēngjiā, kōngqì wūrǎn yuè lái yuè yánzhòng.',vn:'Cùng với số lượng ô tô tăng lên, ô nhiễm không khí ngày càng nghiêm trọng.'},
   ],
   hanzi:[
     {c:'量',p:'liàng',type:'上下结构 · Trên-dưới',st:12,ord:'日 → 一 → 里',rad:'里 (lý)',mean:'lượng',
      tip:'Hình cái cân đo lường → LƯỢNG (liàng). Đọc liáng = đo (量体温). 数量, 质量, 力量.',
      cf:'重 (zhòng – nặng)',w:'数量 / 质量 / 商量 (liang)'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cùng với số lượng ô tô tăng lên, ô nhiễm không khí ngày càng nghiêm trọng.',answer:'随着汽车数量的增加，空气污染越来越严重。',answerPy:'Suízhe qìchē shùliàng de zēngjiā, kōngqì wūrǎn yuè lái yuè yánzhòng.',
      note:'随着 (Bài 13), 增加 (Bài 9).'},
   ]},

  {n:28,zh:'温度',py:'wēndù',pos:'Danh từ',vn:'nhiệt độ',em:'🌡️',lesson:5,
   explain:['Mức nóng lạnh. 温度高/低, 空调的温度, 温度较低.'],
   usage:'温度很高, 把温度开得高一些, 温度较低.',
   collo:['空调的温度','温度比较低','温度上升'],
   ex_zh:'夏天把空调的温度开得高一些，出门时记得关空调和电脑，这样可以节约用电。',ex_py:'Xiàtiān bǎ kōngtiáo de wēndù kāi de gāo yìxiē, chū mén shí jìde guān kōngtiáo hé diànnǎo, zhèyàng kěyǐ jiéyuē yòng diàn.',ex_vn:'Mùa hè để nhiệt độ điều hòa cao hơn một chút, ra khỏi nhà nhớ tắt điều hòa và máy tính, như vậy có thể tiết kiệm điện.',
   exList:[
     {zh:'夏天把空调的温度开得高一些，出门时记得关空调和电脑，这样可以节约用电。',py:'Xiàtiān bǎ kōngtiáo de wēndù kāi de gāo yìxiē, chū mén shí jìde guān kōngtiáo hé diànnǎo, zhèyàng kěyǐ jiéyuē yòng diàn.',vn:'Mùa hè để nhiệt độ điều hòa cao hơn một chút, ra khỏi nhà nhớ tắt điều hòa và máy tính, như vậy có thể tiết kiệm điện.'},
     {zh:'这个月底，我和丈夫准备开车去长白山，那边温度比较低，所以要提前准备几件厚一些的衣服。',py:'Zhège yuèdǐ, wǒ hé zhàngfu zhǔnbèi kāi chē qù Chángbái Shān, nàbiān wēndù bǐjiào dī, suǒyǐ yào tíqián zhǔnbèi jǐ jiàn hòu yìxiē de yīfu.',vn:'Cuối tháng này, tôi và chồng định lái xe đi Trường Bạch Sơn, bên đó nhiệt độ khá thấp, nên phải chuẩn bị trước mấy bộ đồ dày.'},
     {zh:'室外锻炼并不是越早越好，尤其是冬天，日出前温度较低，并不适合运动。',py:'Shìwài duànliàn bìng bú shì yuè zǎo yuè hǎo, yóuqí shì dōngtiān, rìchū qián wēndù jiào dī, bìng bú shìhé yùndòng.',vn:'Tập ngoài trời không phải càng sớm càng tốt, nhất là mùa đông, trước bình minh nhiệt độ khá thấp, không thích hợp vận động.'},
   ],
   hanzi:[
     {c:'温',p:'wēn',type:'左右结构 · Trái-phải',st:12,ord:'氵 trái → 昷 phải',rad:'氵 (thủy)',mean:'ấm',
      tip:'Nước 氵 + 昷(hơi nóng bốc lên từ đồ đựng) → nước ẤM → ÔN. 温度 = nhiệt độ, 温暖 = ấm áp.',
      cf:'湿 (shī – ẩm)',w:'温度 / 温暖 / 体温'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mùa hè để nhiệt độ điều hòa cao hơn một chút, như vậy có thể tiết kiệm điện.',answer:'夏天把空调的温度开得高一些，这样可以节约用电。',answerPy:'Xiàtiān bǎ kōngtiáo de wēndù kāi de gāo yìxiē, zhèyàng kěyǐ jiéyuē yòng diàn.',
      note:'把 + 得 + bổ ngữ trạng thái; 节约 (Bài 12).'},
     {promptLang:'vi',prompt:'Bên đó nhiệt độ khá thấp, nên phải chuẩn bị trước mấy bộ đồ dày.',answer:'那边温度比较低，所以要提前准备几件厚一些的衣服。',answerPy:'Nàbiān wēndù bǐjiào dī, suǒyǐ yào tíqián zhǔnbèi jǐ jiàn hòu yìxiē de yīfu.',
      note:'提前 (Bài 4), 厚 (Bài 13).'},
   ]},

  {n:29,zh:'乘坐',py:'chéngzuò',pos:'Động từ',vn:'đi, đáp (xe buýt, máy bay…)',em:'🚌',lesson:5,
   explain:['Đi bằng phương tiện (văn viết, trang trọng hơn 坐). 乘坐地铁/飞机/火车.'],
   usage:'乘坐地铁, 乘坐飞机, 乘坐公共汽车.',
   collo:['乘坐地铁','乘坐飞机','乘坐火车'],
   ex_zh:'少开车，多骑车或者乘坐地铁和公共汽车，这样能降低空气污染。',ex_py:'Shǎo kāi chē, duō qí chē huòzhě chéngzuò dìtiě hé gōnggòng qìchē, zhèyàng néng jiàngdī kōngqì wūrǎn.',ex_vn:'Ít lái xe, đi xe đạp nhiều hơn hoặc đi tàu điện ngầm và xe buýt, như vậy có thể giảm ô nhiễm không khí.',
   exList:[
     {zh:'少开车，多骑车或者乘坐地铁和公共汽车，这样能降低空气污染。',py:'Shǎo kāi chē, duō qí chē huòzhě chéngzuò dìtiě hé gōnggòng qìchē, zhèyàng néng jiàngdī kōngqì wūrǎn.',vn:'Ít lái xe, đi xe đạp nhiều hơn hoặc đi tàu điện ngầm và xe buýt, như vậy có thể giảm ô nhiễm không khí.'},
     {zh:'现在火车的速度非常快，有时乘坐火车甚至比乘坐飞机更节约时间。',py:'Xiànzài huǒchē de sùdù fēicháng kuài, yǒushí chéngzuò huǒchē shènzhì bǐ chéngzuò fēijī gèng jiéyuē shíjiān.',vn:'Bây giờ tốc độ tàu hỏa rất nhanh, có lúc đi tàu thậm chí còn tiết kiệm thời gian hơn đi máy bay.'},
     {zh:'乘坐飞机时，请把手机关掉或者调成飞行模式。',py:'Chéngzuò fēijī shí, qǐng bǎ shǒujī guāndiào huòzhě tiáochéng fēixíng móshì.',vn:'Khi đi máy bay, xin tắt điện thoại hoặc chuyển sang chế độ máy bay.'},
   ],
   hanzi:[
     {c:'乘',p:'chéng',type:'独体字 · Chữ đơn thể',st:10,ord:'禾 → 北 (hai bên)',rad:'丿 (phiệt)',mean:'cưỡi, đi',
      tip:'Hình người trèo lên cây 木 → LEO LÊN, CƯỠI, ĐI (xe). 乘坐 = đáp (phương tiện), 乘客 = hành khách.',
      cf:'剩 (shèng – thừa)',w:'乘坐 / 乘客'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ít lái xe, đi tàu điện ngầm và xe buýt nhiều hơn, như vậy có thể giảm ô nhiễm không khí.',answer:'少开车，多乘坐地铁和公共汽车，这样能降低空气污染。',answerPy:'Shǎo kāi chē, duō chéngzuò dìtiě hé gōnggòng qìchē, zhèyàng néng jiàngdī kōngqì wūrǎn.',
      note:'降低 ôn lại Bài 10.'},
   ]},

  {n:30,zh:'丢',py:'diū',pos:'Động từ',vn:'ném, vứt; mất',em:'🔑',lesson:5,
   explain:['(1) Vứt, ném (把垃圾丢进垃圾桶). (2) Đánh mất (钥匙丢了, 丢东西).'],
   usage:'把垃圾丢进垃圾桶, 钥匙丢了, 丢东西.',
   collo:['丢进垃圾桶','钥匙丢了','别丢了'],
   ex_zh:'还有养成把垃圾丢进垃圾桶的习惯什么的。',ex_py:'Hái yǒu yǎngchéng bǎ lājī diūjìn lājītǒng de xíguàn shénme de.',ex_vn:'Còn có hình thành thói quen bỏ rác vào thùng rác, vân vân.',
   exList:[
     {zh:'还有养成把垃圾丢进垃圾桶的习惯什么的。',py:'Hái yǒu yǎngchéng bǎ lājī diūjìn lājītǒng de xíguàn shénme de.',vn:'Còn có hình thành thói quen bỏ rác vào thùng rác, vân vân.'},
     {zh:'喂，你还在逛街吗？我的钥匙丢了，进不了门，你快回来吧。',py:'Wèi, nǐ hái zài guàng jiē ma? Wǒ de yàoshi diū le, jìnbuliǎo mén, nǐ kuài huílai ba.',vn:'Alô, em còn đang dạo phố à? Anh làm mất chìa khóa rồi, không vào được nhà, em mau về đi.'},
     {zh:'旅行时要小心，别把护照丢了。',py:'Lǚxíng shí yào xiǎoxīn, bié bǎ hùzhào diū le.',vn:'Khi đi du lịch phải cẩn thận, đừng làm mất hộ chiếu.'},
   ],
   hanzi:[
     {c:'丢',p:'diū',type:'上下结构 · Trên-dưới',st:6,ord:'丿 → 去',rad:'丿 (phiệt)',mean:'mất, vứt',
      tip:'丿 + 去(đi) → đồ vật ĐI MẤT → MẤT, VỨT. Chỉ 6 nét, viết như 去 thêm một phẩy trên.',
      cf:'去 (qù – đi)',w:'丢 / 丢了 / 丢掉'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh làm mất chìa khóa rồi, không vào được nhà, em mau về đi.',answer:'我的钥匙丢了，进不了门，你快回来吧。',answerPy:'Wǒ de yàoshi diū le, jìnbuliǎo mén, nǐ kuài huílai ba.',
      note:'Bổ ngữ khả năng 进不了 (Bài 5), 钥匙 (Bài 3).'},
   ]},

  {n:31,zh:'垃圾桶',py:'lājītǒng',pos:'Danh từ',vn:'thùng rác',em:'🗑️',lesson:5,
   explain:['Thùng đựng rác. 垃圾 = rác (Bài 11), 桶 = thùng. 垃圾箱 cũng dùng.'],
   usage:'丢进垃圾桶, 垃圾桶满了, 倒垃圾.',
   collo:['丢进垃圾桶','垃圾桶又满了','找垃圾桶'],
   ex_zh:'还有养成把垃圾丢进垃圾桶的习惯什么的。',ex_py:'Hái yǒu yǎngchéng bǎ lājī diūjìn lājītǒng de xíguàn shénme de.',ex_vn:'Còn có hình thành thói quen bỏ rác vào thùng rác, vân vân.',
   exList:[
     {zh:'还有养成把垃圾丢进垃圾桶的习惯什么的。',py:'Hái yǒu yǎngchéng bǎ lājī diūjìn lājītǒng de xíguàn shénme de.',vn:'Còn có hình thành thói quen bỏ rác vào thùng rác, vân vân.'},
     {zh:'A：垃圾桶又满了，你去扔一下垃圾吧。B：好的，看完这个节目我就去。',py:'A: Lājītǒng yòu mǎn le, nǐ qù rēng yíxià lājī ba. B: Hǎo de, kànwán zhège jiémù wǒ jiù qù.',vn:'A: Thùng rác lại đầy rồi, anh đi đổ rác đi. B: Được, xem xong chương trình này anh đi ngay.'},
     {zh:'公园里每隔几十米就有一个垃圾桶，非常方便。',py:'Gōngyuán li měi gé jǐ shí mǐ jiù yǒu yí ge lājītǒng, fēicháng fāngbiàn.',vn:'Trong công viên cứ cách vài chục mét lại có một thùng rác, rất tiện.'},
   ],
   hanzi:[
     {c:'桶',p:'tǒng',type:'左右结构 · Trái-phải',st:11,ord:'木 trái → 甬 phải',rad:'木 (mộc)',mean:'thùng',
      tip:'Gỗ 木 + 甬(biểu âm) → THÙNG gỗ. 垃圾桶 = thùng rác, 水桶 = thùng nước.',
      cf:'通 (tōng – thông, bộ 辶)',w:'垃圾桶 / 水桶'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thùng rác lại đầy rồi, anh đi đổ rác đi.',answer:'垃圾桶又满了，你去扔一下垃圾吧。',answerPy:'Lājītǒng yòu mǎn le, nǐ qù rēng yíxià lājī ba.',
      note:'又 + 了 (ôn lại Bài 1), 满 (Bài 11).'},
   ]},

  {n:32,zh:'美丽',py:'měilì',pos:'Tính từ',vn:'đẹp',em:'🌸',lesson:5,
   explain:['Đẹp (thường dùng cho cảnh vật, thiên nhiên, văn viết). So với 漂亮 (khẩu ngữ, người/đồ vật).'],
   usage:'美丽的家, 变得更美丽, 美丽的风景.',
   collo:['变得更美丽','美丽的地球','美丽的风景'],
   ex_zh:'只有大家共同努力，减少污染、保护环境，才能使我们的家变得更美丽。',ex_py:'Zhǐyǒu dàjiā gòngtóng nǔlì, jiǎnshǎo wūrǎn, bǎohù huánjìng, cái néng shǐ wǒmen de jiā biàn de gèng měilì.',ex_vn:'Chỉ khi mọi người cùng nỗ lực giảm ô nhiễm, bảo vệ môi trường, mới có thể khiến ngôi nhà chúng ta đẹp hơn.',
   exList:[
     {zh:'只有大家共同努力，减少污染、保护环境，才能使我们的家变得更美丽。',py:'Zhǐyǒu dàjiā gòngtóng nǔlì, jiǎnshǎo wūrǎn, bǎohù huánjìng, cái néng shǐ wǒmen de jiā biàn de gèng měilì.',vn:'Chỉ khi mọi người cùng nỗ lực giảm ô nhiễm, bảo vệ môi trường, mới có thể khiến ngôi nhà chúng ta đẹp hơn.'},
     {zh:'怎样才能使地球变得更美丽？',py:'Zěnyàng cái néng shǐ dìqiú biàn de gèng měilì?',vn:'Làm thế nào mới có thể khiến Trái đất đẹp hơn?'},
     {zh:'这里的风景太美丽了，我们多拍几张照片吧。',py:'Zhèlǐ de fēngjǐng tài měilì le, wǒmen duō pāi jǐ zhāng zhàopiàn ba.',vn:'Phong cảnh ở đây đẹp quá, chúng ta chụp thêm mấy tấm ảnh đi.'},
   ],
   hanzi:[
     {c:'丽',p:'lì',type:'上下结构 · Trên-dưới (giản thể)',st:7,ord:'一 → 冂丶 → 冂丶',rad:'一 (nhất)',mean:'đẹp',
      tip:'Giản thể của 麗 (con hươu có cặp sừng đẹp). 美丽 = MỸ LỆ = đẹp.',
      cf:'两 (liǎng – hai)',w:'美丽 / 华丽'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm thế nào mới có thể khiến Trái đất đẹp hơn?',answer:'怎样才能使地球变得更美丽？',answerPy:'Zěnyàng cái néng shǐ dìqiú biàn de gèng měilì?',
      note:'使 (Bài 10) + 变得 + 更.'},
   ]},
];

var wuData = [
  {img:'🌡️',label:'温度',py:'wēndù',letter:'A'},
  {img:'🌍',label:'地球',py:'dìqiú',letter:'B'},
  {img:'🗑️',label:'垃圾桶',py:'lājītǒng',letter:'C'},
  {img:'⚡',label:'速度',py:'sùdù',letter:'D'},
  {img:'🏭',label:'污染',py:'wūrǎn',letter:'E'},
  {img:'🛍️',label:'塑料袋',py:'sùliàodài',letter:'F'},
];

var dialogData = [
  {scene:'课文1 · 李进要出差，王静和李进在聊天儿',
   preQuiz:[{q:'王静为什么建议李进坐地铁去机场？',opts:['因为开车太贵','因为堵车严重，坐地铁省油钱又不污染空气','因为她不会开车'],ans:1},{q:'李进为什么不想带毛巾、牙膏和牙刷？',opts:['宾馆会免费提供，而且箱子已经够重了','他不用这些东西','他要在机场买'],ans:0},{q:'李进明天的飞机是几点的？',opts:['上午8点','上午10点','下午2点'],ans:1}],
   lines:[
     {sp:0,zh:'这是明天你出差要带的毛巾、牙膏和牙刷，把它们放到箱子里吧。',py:'Zhè shì míngtiān nǐ chū chāi yào dài de máojīn, yágāo hé yáshuā, bǎ tāmen fàngdào xiāngzi li ba.',vn:'Đây là khăn mặt, kem đánh răng và bàn chải ngày mai anh đi công tác cần mang, cho vào vali đi.'},
     {sp:1,zh:'不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！',py:'Búyòng ná zhèxiē, bīnguǎn dōu huì miǎnfèi tígōng de. Zàishuō, xiāngzi yǐjīng gòu zhòng de le!',vn:'Không cần mang những thứ này, khách sạn đều cung cấp miễn phí. Hơn nữa, vali đã đủ nặng rồi!'},
     {sp:0,zh:'我当然知道宾馆里有。你不是一直说要保护环境吗？现在就从身边的小事做起吧。',py:'Wǒ dāngrán zhīdào bīnguǎn li yǒu. Nǐ bú shì yìzhí shuō yào bǎohù huánjìng ma? Xiànzài jiù cóng shēnbiān de xiǎo shì zuòqǐ ba.',vn:'Em đương nhiên biết khách sạn có. Chẳng phải anh luôn nói phải bảo vệ môi trường sao? Bây giờ hãy bắt đầu từ những việc nhỏ quanh mình đi.'},
     {sp:1,zh:'行，没问题。我明天上午10点的飞机，你能开车把我送到机场吗？',py:'Xíng, méi wèntí. Wǒ míngtiān shàngwǔ shí diǎn de fēijī, nǐ néng kāi chē bǎ wǒ sòngdào jīchǎng ma?',vn:'Được, không vấn đề. Máy bay của anh 10 giờ sáng mai, em lái xe đưa anh ra sân bay được không?'},
     {sp:0,zh:'那个时间路上堵车多严重啊！你还是坐地铁去机场吧。这样不仅省油钱，而且还不会污染空气。',py:'Nàge shíjiān lùshang dǔ chē duō yánzhòng a! Nǐ háishi zuò dìtiě qù jīchǎng ba. Zhèyàng bùjǐn shěng yóu qián, érqiě hái bú huì wūrǎn kōngqì.',vn:'Giờ đó đường tắc nghiêm trọng lắm! Anh vẫn nên đi tàu điện ngầm ra sân bay. Như vậy không những tiết kiệm tiền xăng, mà còn không làm ô nhiễm không khí.'},
     {sp:1,zh:'好，那就听你的。',py:'Hǎo, nà jiù tīng nǐ de.',vn:'Được, vậy nghe em.'},
   ]},
  {scene:'课文2 · 经理和服务员在谈工作',
   preQuiz:[{q:'经理希望小王做什么？',opts:['去买饮料','打扫卫生间，把空瓶子和纸盒子扔掉','招聘服务员'],ans:1},{q:'小王为什么还没打扫卫生间？',opts:['今天店里太忙了','他忘了','他不想打扫'],ans:0},{q:'小王认为餐厅应该做什么？',opts:['再多招聘几个服务员','关门休息','换经理'],ans:0}],
   lines:[
     {sp:0,zh:'小王，卫生间怎么那么脏啊？这会给客人留下不好的印象，快去打扫一下。',py:'Xiǎo Wáng, wèishēngjiān zěnme nàme zāng a? Zhè huì gěi kèrén liúxià bù hǎo de yìnxiàng, kuài qù dǎsǎo yíxià.',vn:'Tiểu Vương, sao nhà vệ sinh bẩn thế? Việc này sẽ để lại ấn tượng xấu cho khách, mau đi dọn dẹp đi.'},
     {sp:1,zh:'经理，实在抱歉。今天店里太忙了，我还没来得及打扫。',py:'Jīnglǐ, shízài bàoqiàn. Jīntiān diàn li tài máng le, wǒ hái méi láidejí dǎsǎo.',vn:'Giám đốc, thật sự xin lỗi. Hôm nay cửa hàng bận quá, tôi chưa kịp dọn dẹp.'},
     {sp:0,zh:'那张桌子下面还有一些空饮料瓶子和纸盒子。',py:'Nà zhāng zhuōzi xiàmiàn hái yǒu yìxiē kōng yǐnliào píngzi hé zhǐ hézi.',vn:'Dưới cái bàn kia còn có mấy chai nước rỗng và hộp giấy.'},
     {sp:1,zh:'好的，我马上就去把它们扔掉。',py:'Hǎo de, wǒ mǎshàng jiù qù bǎ tāmen rēngdiào.',vn:'Vâng, tôi đi vứt chúng ngay.'},
     {sp:0,zh:'以后你一定得注意这个问题，不管客人多多，生意多忙，我们都要保证餐厅干净卫生。',py:'Yǐhòu nǐ yídìng děi zhùyì zhège wèntí, bùguǎn kèrén duō duō, shēngyi duō máng, wǒmen dōu yào bǎozhèng cāntīng gānjìng wèishēng.',vn:'Sau này cậu nhất định phải chú ý vấn đề này, bất kể khách đông đến đâu, việc bận đến đâu, chúng ta đều phải đảm bảo nhà hàng sạch sẽ vệ sinh.'},
     {sp:1,zh:'经理您放心，我一定以最快的速度完成。不过咱们真的应该再多招聘几个服务员了。',py:'Jīnglǐ nín fàng xīn, wǒ yídìng yǐ zuì kuài de sùdù wánchéng. Búguò zánmen zhēn de yīnggāi zài duō zhāopìn jǐ ge fúwùyuán le.',vn:'Giám đốc yên tâm, tôi nhất định hoàn thành với tốc độ nhanh nhất. Nhưng chúng ta thật sự nên tuyển thêm mấy nhân viên phục vụ nữa.'},
   ]},
  {scene:'课文3 · 孙月和王静在聊关于环保的事情',
   preQuiz:[{q:'“地球一小时”活动的目的是什么？',opts:['让大家不用加班','提醒人们节约用电，关注气候变暖问题','让公司省钱'],ans:1},{q:'“地球一小时”活动是从哪一年开始的？',opts:['2000年','2007年','2017年'],ans:1},{q:'活动时人们会做什么？',opts:['关灯一小时','开灯一小时','不吃饭一小时'],ans:0}],
   lines:[
     {sp:0,zh:'早上听新闻说明天有一个叫"地球一小时"的活动，你对这个活动了解吗？',py:'Zǎoshang tīng xīnwén shuō míngtiān yǒu yí ge jiào "Dìqiú Yì Xiǎoshí" de huódòng, nǐ duì zhège huódòng liǎojiě ma?',vn:'Sáng nay nghe tin tức nói ngày mai có hoạt động tên "Giờ Trái đất", bạn có biết về hoạt động này không?'},
     {sp:1,zh:'这个活动年年都有，最早是从2007年开始的。明天晚上很多人都会关灯一小时，支持这个活动。你没看到门口的通知吗？我们公司也参加。',py:'Zhège huódòng niánnián dōu yǒu, zuì zǎo shì cóng èr líng líng qī nián kāishǐ de. Míngtiān wǎnshang hěn duō rén dōu huì guān dēng yì xiǎoshí, zhīchí zhège huódòng. Nǐ méi kàndào ménkǒu de tōngzhī ma? Wǒmen gōngsī yě cānjiā.',vn:'Hoạt động này năm nào cũng có, sớm nhất bắt đầu từ năm 2007. Tối mai nhiều người sẽ tắt đèn một tiếng để ủng hộ. Bạn không thấy thông báo ở cửa sao? Công ty chúng ta cũng tham gia.'},
     {sp:0,zh:'真的吗？太好了！既然明天晚上公司会关灯停电，那么我们肯定不用加班了。',py:'Zhēn de ma? Tài hǎo le! Jìrán míngtiān wǎnshang gōngsī huì guān dēng tíng diàn, nàme wǒmen kěndìng búyòng jiā bān le.',vn:'Thật à? Tuyệt quá! Đã là tối mai công ty tắt đèn cúp điện, thì chúng ta chắc chắn không phải tăng ca rồi.'},
     {sp:1,zh:'看你得意的样子！还以为你高兴是为了支持环保，原来是因为不用加班啊！',py:'Kàn nǐ déyì de yàngzi! Hái yǐwéi nǐ gāoxìng shì wèile zhīchí huánbǎo, yuánlái shì yīnwèi búyòng jiā bān a!',vn:'Nhìn cái vẻ hể hả của bạn kìa! Còn tưởng bạn vui vì ủng hộ bảo vệ môi trường, hóa ra là vì không phải tăng ca!'},
     {sp:0,zh:'环境保护我当然也支持了！对了，为什么会有这么一个活动啊？',py:'Huánjìng bǎohù wǒ dāngrán yě zhīchí le! Duì le, wèishénme huì yǒu zhème yí ge huódòng a?',vn:'Bảo vệ môi trường tất nhiên tôi cũng ủng hộ! À, sao lại có hoạt động như vậy?'},
     {sp:1,zh:'其实目的挺简单的，就是提醒人们节约用电，希望引起人们对气候变暖问题的关注。',py:'Qíshí mùdì tǐng jiǎndān de, jiù shì tíxǐng rénmen jiéyuē yòng diàn, xīwàng yǐnqǐ rénmen duì qìhòu biàn nuǎn wèntí de guānzhù.',vn:'Thực ra mục đích khá đơn giản, chính là nhắc mọi người tiết kiệm điện, hy vọng khơi dậy sự quan tâm đến vấn đề khí hậu nóng lên.'},
   ]},
  {scene:'课文4 · Túi nilông và môi trường',
   preQuiz:[{q:'一些国家对塑料袋有什么规定？',opts:['超市不能为顾客提供免费塑料袋','完全不能用塑料袋','必须用纸袋'],ans:0},{q:'塑料袋大量使用带来了什么问题？',opts:['严重的环境污染','价格太贵','不方便'],ans:0},{q:'我们购物时可以怎么做？',opts:['自备购物袋','多要几个塑料袋','不买东西'],ans:0}],
   lines:[
     {sp:0,zh:'塑料袋给人们的生活带来方便，受到人们的普遍欢迎，可是，它的大量使用也带来了严重的环境污染问题。于是，一些国家规定，超市、商场不能为顾客提供免费塑料袋，并且鼓励大家购买可以多次使用的购物袋。',py:'Sùliàodài gěi rénmen de shēnghuó dàilái fāngbiàn, shòudào rénmen de pǔbiàn huānyíng, kěshì, tā de dàliàng shǐyòng yě dàiláile yánzhòng de huánjìng wūrǎn wèntí. Yúshì, yìxiē guójiā guīdìng, chāoshì, shāngchǎng bù néng wèi gùkè tígōng miǎnfèi sùliàodài, bìngqiě gǔlì dàjiā gòumǎi kěyǐ duō cì shǐyòng de gòuwùdài.',vn:'Túi nilông mang lại tiện lợi cho cuộc sống, được mọi người đón nhận rộng rãi, nhưng việc dùng với số lượng lớn cũng mang lại ô nhiễm môi trường nghiêm trọng. Thế là, một số nước quy định siêu thị, trung tâm thương mại không được cung cấp túi nilông miễn phí, đồng thời khuyến khích mọi người mua túi dùng được nhiều lần.'},
     {sp:0,zh:'我们每个人都有责任保护环境，因此，请大家节约使用塑料袋，或者购物时自备购物袋，甚至拒绝使用塑料袋。',py:'Wǒmen měi ge rén dōu yǒu zérèn bǎohù huánjìng, yīncǐ, qǐng dàjiā jiéyuē shǐyòng sùliàodài, huòzhě gòuwù shí zì bèi gòuwùdài, shènzhì jùjué shǐyòng sùliàodài.',vn:'Mỗi chúng ta đều có trách nhiệm bảo vệ môi trường, vì vậy, mong mọi người tiết kiệm dùng túi nilông, hoặc tự mang túi khi mua sắm, thậm chí từ chối dùng túi nilông.'},
     {sp:0,zh:'虽然这是一件很小的事，但这样做可以减少塑料袋的使用数量，对环境保护有很大的作用。',py:'Suīrán zhè shì yí jiàn hěn xiǎo de shì, dàn zhèyàng zuò kěyǐ jiǎnshǎo sùliàodài de shǐyòng shùliàng, duì huánjìng bǎohù yǒu hěn dà de zuòyòng.',vn:'Tuy đây là việc rất nhỏ, nhưng làm vậy có thể giảm số lượng túi nilông sử dụng, có tác dụng rất lớn đối với bảo vệ môi trường.'},
   ]},
  {scene:'课文5 · Bảo vệ Trái đất từ việc nhỏ',
   preQuiz:[{q:'夏天怎么做可以节约用电？',opts:['把空调的温度开得高一些','不用空调','开着窗户开空调'],ans:0},{q:'怎么做能降低空气污染？',opts:['少开车，多骑车或者乘坐地铁和公共汽车','多开车','多买车'],ans:0},{q:'保护地球环境是一件什么样的事情？',opts:['从身边的小事就可以做起','离我们很远，很难做到','只有科学家能做'],ans:0}],
   lines:[
     {sp:0,zh:'保护地球环境，并不是一件离我们很远、很难做到的事情。实际上，我们只需注意一下身边的小事就可以。',py:'Bǎohù dìqiú huánjìng, bìng bú shì yí jiàn lí wǒmen hěn yuǎn, hěn nán zuòdào de shìqing. Shíjì shang, wǒmen zhǐ xū zhùyì yíxià shēnbiān de xiǎo shì jiù kěyǐ.',vn:'Bảo vệ môi trường Trái đất không hề là việc xa vời, khó làm. Thực tế, chúng ta chỉ cần chú ý những việc nhỏ quanh mình là được.'},
     {sp:0,zh:'例如，夏天把空调的温度开得高一些，出门时记得关空调和电脑，这样可以节约用电；少开车，多骑车或者乘坐地铁和公共汽车，这样能降低空气污染；还有养成把垃圾丢进垃圾桶的习惯什么的。',py:'Lìrú, xiàtiān bǎ kōngtiáo de wēndù kāi de gāo yìxiē, chū mén shí jìde guān kōngtiáo hé diànnǎo, zhèyàng kěyǐ jiéyuē yòng diàn; shǎo kāi chē, duō qí chē huòzhě chéngzuò dìtiě hé gōnggòng qìchē, zhèyàng néng jiàngdī kōngqì wūrǎn; hái yǒu yǎngchéng bǎ lājī diūjìn lājītǒng de xíguàn shénme de.',vn:'Ví dụ, mùa hè để nhiệt độ điều hòa cao hơn chút, ra ngoài nhớ tắt điều hòa và máy tính, như vậy tiết kiệm điện; ít lái xe, đi xe đạp hoặc tàu điện ngầm, xe buýt nhiều hơn, như vậy giảm ô nhiễm không khí; còn hình thành thói quen bỏ rác vào thùng rác, vân vân.'},
     {sp:0,zh:'这些是我们每个人都能够做到的小事，但却有实实在在的效果。地球是我们共同的家，只有大家共同努力，减少污染、保护环境，才能使我们的家变得更美丽。',py:'Zhèxiē shì wǒmen měi ge rén dōu nénggòu zuòdào de xiǎo shì, dàn què yǒu shíshízàizài de xiàoguǒ. Dìqiú shì wǒmen gòngtóng de jiā, zhǐyǒu dàjiā gòngtóng nǔlì, jiǎnshǎo wūrǎn, bǎohù huánjìng, cái néng shǐ wǒmen de jiā biàn de gèng měilì.',vn:'Đây là những việc nhỏ mỗi người đều làm được, nhưng lại có hiệu quả thực sự. Trái đất là ngôi nhà chung, chỉ khi mọi người cùng nỗ lực giảm ô nhiễm, bảo vệ môi trường, mới khiến ngôi nhà của chúng ta đẹp hơn.'},
   ]},
];

var matchData = [
  {left:'免费',right:'免费提供'},
  {left:'从身边的',right:'从身边的小事做起'},
  {left:'污染',right:'污染空气'},
  {left:'留下',right:'留下不好的印象'},
  {left:'以最快的',right:'以最快的速度完成'},
  {left:'关灯',right:'关灯停电'},
  {left:'节约',right:'节约用电'},
  {left:'拒绝',right:'拒绝使用塑料袋'},
  {left:'减少',right:'减少污染'},
  {left:'养成',right:'养成……的习惯'},
];

var fillData = [
  {pre:'这是明天你',blank:'',post:'要带的毛巾、牙膏和牙刷。',hint:'chū chāi',ans:'出差'},
  {pre:'再说，箱子已经够',blank:'',post:'的了！',hint:'zhòng',ans:'重'},
  {pre:'这样不仅省油钱，而且还不会',blank:'',post:'空气。',hint:'wūrǎn',ans:'污染'},
  {pre:'小王，',blank:'',post:'怎么那么脏啊？快去打扫一下。',hint:'wèishēngjiān',ans:'卫生间'},
  {pre:'经理，实在',blank:'',post:'。今天店里太忙了。',hint:'bàoqiàn',ans:'抱歉'},
  {pre:'那张桌子下面还有一些',blank:'',post:'饮料瓶子和纸盒子。',hint:'kōng',ans:'空'},
  {pre:'好的，我马上就去把它们',blank:'',post:'掉。',hint:'rēng',ans:'扔'},
  {pre:'我一定',blank:'',post:'最快的速度完成。',hint:'yǐ',ans:'以'},
  {pre:'',blank:'',post:'明天晚上公司会关灯停电，那么我们肯定不用加班了。',hint:'jìrán',ans:'既然'},
  {pre:'看你',blank:'',post:'的样子！原来是因为不用加班啊！',hint:'déyì',ans:'得意'},
  {pre:'其实',blank:'',post:'挺简单的，就是提醒人们节约用电。',hint:'mùdì',ans:'目的'},
  {pre:'',blank:'',post:'，一些国家规定，超市不能为顾客提供免费塑料袋。',hint:'yúshì',ans:'于是'},
  {pre:'并且',blank:'',post:'大家购买可以多次使用的购物袋。',hint:'gǔlì',ans:'鼓励'},
  {pre:'这样做可以',blank:'',post:'塑料袋的使用数量。',hint:'jiǎnshǎo',ans:'减少'},
  {pre:'少开车，多骑车或者',blank:'',post:'地铁和公共汽车。',hint:'chéngzuò',ans:'乘坐'},
];

var sortData = [
  {words:['箱子','已经','够','重','的','了'],ans:'箱子已经够重的了',audio:'/audio/hsk4-bai-14/sort-1.mp3'},
  {words:['现在','就','从','身边','的','小事','做起','吧'],ans:'现在就从身边的小事做起吧',audio:'/audio/hsk4-bai-14/sort-2.mp3'},
  {words:['这样','不仅','省','油钱','，','而且','还','不会','污染','空气'],ans:'这样不仅省油钱，而且还不会污染空气',audio:'/audio/hsk4-bai-14/sort-3.mp3'},
  {words:['我','一定','以','最快','的','速度','完成'],ans:'我一定以最快的速度完成',audio:'/audio/hsk4-bai-14/sort-4.mp3'},
  {words:['既然','这样','，','就','只好','安排','在','下周','了'],ans:'既然这样，就只好安排在下周了',audio:'/audio/hsk4-bai-14/sort-5.mp3'},
  {words:['大家','都','同意','寒假','去','旅行','，','于是','我们','开始','讨论','去','哪里'],ans:'大家都同意寒假去旅行，于是我们开始讨论去哪里',audio:'/audio/hsk4-bai-14/sort-6.mp3'},
  {words:['我们','每个','人','都','有','责任','保护','环境'],ans:'我们每个人都有责任保护环境',audio:'/audio/hsk4-bai-14/sort-7.mp3'},
  {words:['只有','大家','共同','努力','，','才','能','使','我们','的','家','变得','更','美丽'],ans:'只有大家共同努力，才能使我们的家变得更美丽',audio:'/audio/hsk4-bai-14/sort-8.mp3'},
];

var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'为了____大家少抽烟，人们将每年的4月7日定为"世界无烟日"。',
   opts:['拒绝','鼓励','得意','省'],ans:1,
   exp:'鼓励 (khuyến khích) — 鼓励大家少抽烟. Câu có 为了 (Bài 4), 抽烟 (Bài 7). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'有的人总是不好意思____朋友的要求，害怕这样会影响两个人的感情。',
   opts:['鼓励','拒绝','省','重'],ans:1,
   exp:'拒绝 (từ chối) — 拒绝……的要求. Câu có 总是 (Bài 1), 害怕 (Bài 9). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'按照规定，您只能免费带20公斤的行李，超____的部分每公斤加收全部票价的1.5%。',
   opts:['拒绝','得意','重','鼓励'],ans:2,
   exp:'重 (zhòng, nặng) — 超重 = quá cân. Câu có 按照 (Bài 4), 规定/全部 (Bài 12), 部分 (Bài 13). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'不要因一时的成功而____，也不要因一时的失败而伤心，因为那些都已经过去，重要的是怎样过好将来的生活。',
   opts:['拒绝','鼓励','得意','重'],ans:2,
   exp:'得意 (đắc chí) — 因成功而得意. Câu có 成功/失败 (Bài 9), 伤心 (Bài 8). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'山东____烟台市是中国著名的"苹果之都"。由于气候等自然条件较好，那儿的苹果个儿大，味道香甜，颜色也漂亮。',
   opts:['鼓励','得意','省','重'],ans:2,
   exp:'省 (shěng, tỉnh) — 山东省. Câu có 著名 (Bài 10), 由于 (Bài 10), 气候 (Bài 9). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：打扰一下，请问李老师在吗？B：他____了。你找他有事吗？',
   opts:['扔','出差','抱歉','行'],ans:1,
   exp:'出差 (đi công tác) — 他出差了. Câu có 打扰 (Bài 6). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：喂，你还在逛街吗？我的钥匙____了，进不了门，你快回来吧。B：好，我马上就回去。',
   opts:['扔','丢','出差','行'],ans:1,
   exp:'丢 (mất) — 钥匙丢了. Câu có 逛街 (Bài 5), bổ ngữ khả năng 进不了 (Bài 5). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：实在____，我来晚了。今天路上有点儿堵。B：没关系，请坐。你喝果汁还是咖啡？',
   opts:['扔','丢','抱歉','行'],ans:2,
   exp:'抱歉 (xin lỗi) — 实在抱歉. Câu có 实在 (Bài 11). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：垃圾桶又满了，你去____一下垃圾吧。B：好的，看完这个节目我就去。',
   opts:['扔','丢','抱歉','出差'],ans:0,
   exp:'扔 (đổ, vứt) — 扔垃圾. Câu có 又……了 (Bài 1), 节目 (Bài 6). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：马上就要毕业了，你准备在学校附近租房子吗？B：学校附近房子太贵。离学校远点儿没关系，只要离地铁或者公交车站近就____。',
   opts:['扔','丢','抱歉','行'],ans:3,
   exp:'行 (được) — 只要……就行. Câu có 毕业 (Bài 9), 只要……就 (Bài 8). Các từ còn lại không phù hợp nghĩa.'},
];

var speakingData = {
  intro:'Hãy dùng từ vựng và ngữ pháp của Bài 14 (kết hợp ngữ pháp các bài trước) để nói về bảo vệ môi trường.',
  questions:[
    {q_zh:'你认为在生活中哪些方面会产生污染？',q_vn:'Bạn cho rằng những mặt nào trong cuộc sống gây ra ô nhiễm?',
     hint:'……什么的；不仅……而且……',
     sample:'我觉得开车、乱扔垃圾、使用塑料袋什么的都会产生污染。汽车不仅污染空气，而且数量越来越多。',sample_vn:'Tôi thấy lái xe, vứt rác bừa, dùng túi nilông vân vân đều gây ô nhiễm. Ô tô không những làm ô nhiễm không khí mà số lượng còn ngày càng nhiều.',
     note:'什么的 (bài mới) + 不仅……而且 (Bài 6) + 使用 (Bài 12).'},
    {q_zh:'你认为一个国家应该有哪些规定来保护环境？',q_vn:'Bạn nghĩ một quốc gia nên có những quy định gì để bảo vệ môi trường?',
     hint:'应该规定……，以……；鼓励……',
     sample:'我觉得国家应该规定超市不能免费提供塑料袋，以减少塑料袋的使用数量，并且鼓励大家乘坐公共汽车。',sample_vn:'Tôi nghĩ nhà nước nên quy định siêu thị không được phát túi nilông miễn phí, để giảm số lượng túi nilông, đồng thời khuyến khích mọi người đi xe buýt.',
     note:'以 (mục đích, bài mới) + 规定/并且 (Bài 12) + 免费/提供 (Bài 5, 6).'},
    {q_zh:'既然保护环境这么重要，我们应该做些什么？',q_vn:'Đã biết bảo vệ môi trường quan trọng như vậy, chúng ta nên làm gì?',
     hint:'既然……，就……；从身边的小事做起',
     sample:'既然保护环境这么重要，我们就应该从身边的小事做起，比如出门时记得关灯，把垃圾丢进垃圾桶。',sample_vn:'Đã biết bảo vệ môi trường quan trọng như vậy, chúng ta nên bắt đầu từ việc nhỏ quanh mình, ví dụ ra ngoài nhớ tắt đèn, bỏ rác vào thùng rác.',
     note:'既然……就 (bài mới) + 比如 (Bài 3) + câu chữ 把.'},
    {q_zh:'污染对你的生活有哪些影响？',q_vn:'Ô nhiễm có ảnh hưởng gì đến cuộc sống của bạn?',
     hint:'随着……，越来越……；于是……',
     sample:'随着汽车数量的增加，空气越来越脏，我经常咳嗽。于是，我决定少开车，多骑自行车。',sample_vn:'Cùng với số lượng ô tô tăng, không khí ngày càng bẩn, tôi thường ho. Thế là tôi quyết định ít lái xe, đi xe đạp nhiều hơn.',
     note:'于是 (bài mới) + 随着 (Bài 13) + 增加 (Bài 9) + 咳嗽 (Bài 7).'},
    {q_zh:'你出差或旅行时，会自己带毛巾、牙膏吗？为什么？',q_vn:'Khi đi công tác hay du lịch, bạn có tự mang khăn, kem đánh răng không? Vì sao?',
     hint:'虽然……，但是……；够……的了',
     sample:'虽然宾馆免费提供，但是我还是自己带。这样可以保护环境，再说，我的箱子还不够重。',sample_vn:'Tuy khách sạn cung cấp miễn phí, nhưng tôi vẫn tự mang. Như vậy có thể bảo vệ môi trường, hơn nữa vali tôi chưa đủ nặng.',
     note:'够 (bài mới) + 再说 (Bài 11) + 免费 (Bài 5).'},
  ]
};

var translateData = [
  {vi:'Đây là khăn mặt, kem đánh răng và bàn chải ngày mai anh đi công tác cần mang, cho vào vali đi.',zh:'这是明天你出差要带的毛巾、牙膏和牙刷，把它们放到箱子里吧。',py:'Zhè shì míngtiān nǐ chū chāi yào dài de máojīn, yágāo hé yáshuā, bǎ tāmen fàngdào xiāngzi li ba.'},
  {vi:'Không cần mang những thứ này, khách sạn đều cung cấp miễn phí. Hơn nữa, vali đã đủ nặng rồi!',zh:'不用拿这些，宾馆都会免费提供的。再说，箱子已经够重的了！',py:'Búyòng ná zhèxiē, bīnguǎn dōu huì miǎnfèi tígōng de. Zàishuō, xiāngzi yǐjīng gòu zhòng de le!'},
  {vi:'Như vậy không những tiết kiệm tiền xăng, mà còn không làm ô nhiễm không khí.',zh:'这样不仅省油钱，而且还不会污染空气。',py:'Zhèyàng bùjǐn shěng yóu qián, érqiě hái bú huì wūrǎn kōngqì.'},
  {vi:'Giám đốc yên tâm, tôi nhất định sẽ hoàn thành với tốc độ nhanh nhất.',zh:'经理您放心，我一定以最快的速度完成。',py:'Jīnglǐ nín fàng xīn, wǒ yídìng yǐ zuì kuài de sùdù wánchéng.'},
  {vi:'Đã là tối mai công ty tắt đèn cúp điện, thì chúng ta chắc chắn không phải tăng ca rồi.',zh:'既然明天晚上公司会关灯停电，那么我们肯定不用加班了。',py:'Jìrán míngtiān wǎnshang gōngsī huì guān dēng tíng diàn, nàme wǒmen kěndìng búyòng jiā bān le.'},
  {vi:'Thực ra mục đích khá đơn giản, chính là nhắc nhở mọi người tiết kiệm điện.',zh:'其实目的挺简单的，就是提醒人们节约用电。',py:'Qíshí mùdì tǐng jiǎndān de, jiù shì tíxǐng rénmen jiéyuē yòng diàn.'},
  {vi:'Thế là, một số nước quy định siêu thị không được cung cấp túi nilông miễn phí cho khách.',zh:'于是，一些国家规定，超市不能为顾客提供免费塑料袋。',py:'Yúshì, yìxiē guójiā guīdìng, chāoshì bù néng wèi gùkè tígōng miǎnfèi sùliàodài.'},
  {vi:'Chỉ khi mọi người cùng nỗ lực giảm ô nhiễm, bảo vệ môi trường, mới có thể khiến ngôi nhà chúng ta đẹp hơn.',zh:'只有大家共同努力，减少污染、保护环境，才能使我们的家变得更美丽。',py:'Zhǐyǒu dàjiā gòngtóng nǔlì, jiǎnshǎo wūrǎn, bǎohù huánjìng, cái néng shǐ wǒmen de jiā biàn de gèng měilì.'},
];
var translateDataRev = [
  {vi:'Chẳng phải anh luôn nói phải bảo vệ môi trường sao? Bây giờ hãy bắt đầu từ những việc nhỏ quanh mình đi.',zh:'你不是一直说要保护环境吗？现在就从身边的小事做起吧。',py:'Nǐ bú shì yìzhí shuō yào bǎohù huánjìng ma? Xiànzài jiù cóng shēnbiān de xiǎo shì zuòqǐ ba.'},
  {vi:'Sao nhà vệ sinh bẩn thế? Việc này sẽ để lại ấn tượng xấu cho khách, mau đi dọn dẹp đi.',zh:'卫生间怎么那么脏啊？这会给客人留下不好的印象，快去打扫一下。',py:'Wèishēngjiān zěnme nàme zāng a? Zhè huì gěi kèrén liúxià bù hǎo de yìnxiàng, kuài qù dǎsǎo yíxià.'},
  {vi:'Bất kể khách đông đến đâu, việc bận đến đâu, chúng ta đều phải đảm bảo nhà hàng sạch sẽ vệ sinh.',zh:'不管客人多多，生意多忙，我们都要保证餐厅干净卫生。',py:'Bùguǎn kèrén duō duō, shēngyi duō máng, wǒmen dōu yào bǎozhèng cāntīng gānjìng wèishēng.'},
  {vi:'Nhìn cái vẻ hể hả của bạn kìa! Hóa ra là vì không phải tăng ca!',zh:'看你得意的样子！原来是因为不用加班啊！',py:'Kàn nǐ déyì de yàngzi! Yuánlái shì yīnwèi búyòng jiā bān a!'},
  {vi:'Hy vọng khơi dậy sự quan tâm của mọi người đến vấn đề khí hậu nóng lên.',zh:'希望引起人们对气候变暖问题的关注。',py:'Xīwàng yǐnqǐ rénmen duì qìhòu biàn nuǎn wèntí de guānzhù.'},
  {vi:'Mong mọi người tiết kiệm dùng túi nilông, hoặc tự mang túi khi mua sắm, thậm chí từ chối dùng túi nilông.',zh:'请大家节约使用塑料袋，或者购物时自备购物袋，甚至拒绝使用塑料袋。',py:'Qǐng dàjiā jiéyuē shǐyòng sùliàodài, huòzhě gòuwù shí zì bèi gòuwùdài, shènzhì jùjué shǐyòng sùliàodài.'},
  {vi:'Mùa hè để nhiệt độ điều hòa cao hơn một chút, ra ngoài nhớ tắt điều hòa và máy tính.',zh:'夏天把空调的温度开得高一些，出门时记得关空调和电脑。',py:'Xiàtiān bǎ kōngtiáo de wēndù kāi de gāo yìxiē, chū mén shí jìde guān kōngtiáo hé diànnǎo.'},
  {vi:'Ít lái xe, đi xe đạp nhiều hơn hoặc đi tàu điện ngầm và xe buýt, như vậy có thể giảm ô nhiễm không khí.',zh:'少开车，多骑车或者乘坐地铁和公共汽车，这样能降低空气污染。',py:'Shǎo kāi chē, duō qí chē huòzhě chéngzuò dìtiě hé gōnggòng qìchē, zhèyàng néng jiàngdī kōngqì wūrǎn.'},
];

var listenData = {
  type: 'workbook',
  audioParts: [
    { src: '/audio/hsk4-bai-14/listen-1.mp3', from: 1, to: 5 },
    { src: '/audio/hsk4-bai-14/listen-2.mp3', from: 6, to: 12 },
    { src: '/audio/hsk4-bai-14/listen-3.mp3', from: 13, to: 22 }
  ],
  dictation: [
    {num:1, stmt:'大家同意我的看法。', judge:false, lines:[
      {pre:'虽然我建议这次演出的事情让小黄来负责，', blank:'可是大家觉得他太年轻', post:'，担心他经验不够。',
       py:'Suīrán wǒ jiànyì zhè cì yǎnchū de shìqing ràng Xiǎo Huáng lái fùzé, kěshì dàjiā juéde tā tài niánqīng, dānxīn tā jīngyàn bú gòu.',
       vn:'Tuy tôi đề nghị để Tiểu Hoàng phụ trách buổi biểu diễn lần này, nhưng mọi người thấy cậu ấy quá trẻ, lo cậu ấy chưa đủ kinh nghiệm.'}]},
    {num:2, stmt:'超市提供免费塑料袋。', judge:false, lines:[
      {pre:'为了减少塑料袋给环境带来的污染，', blank:'现在超市不再提供免费塑料袋', post:'，有需要的顾客，可以向超市购买。',
       py:'Wèile jiǎnshǎo sùliàodài gěi huánjìng dàilái de wūrǎn, xiànzài chāoshì bú zài tígōng miǎnfèi sùliàodài, yǒu xūyào de gùkè, kěyǐ xiàng chāoshì gòumǎi.',
       vn:'Để giảm ô nhiễm môi trường do túi ni lông gây ra, hiện nay siêu thị không còn cung cấp túi ni lông miễn phí, khách hàng có nhu cầu có thể mua từ siêu thị.'}]},
    {num:3, stmt:'年轻人应该相信自己。', judge:true, lines:[
      {pre:'年轻就是健康，年轻就是美丽。不要太担心胖瘦，也不要太关心自己长得是不是漂亮、是不是帅，', blank:'年轻人最重要的是要对自己有信心', post:'。',
       py:'Niánqīng jiù shì jiànkāng, niánqīng jiù shì měilì. Bú yào tài dānxīn pàng shòu, yě bú yào tài guānxīn zìjǐ zhǎng de shì bu shì piàoliang, shì bu shì shuài, niánqīngrén zuì zhòngyào de shì yào duì zìjǐ yǒu xìnxīn.',
       vn:'Trẻ là khoẻ, trẻ là đẹp. Đừng quá lo béo gầy, cũng đừng quá bận tâm mình có đẹp, có bảnh hay không, điều quan trọng nhất với người trẻ là phải tự tin vào bản thân.'}]},
    {num:4, stmt:'她不愿意用宾馆的毛巾。', judge:true, lines:[
      {pre:'虽然还有一部分宾馆会向客人提供免费的毛巾、牙膏和牙刷，但是每次出差，', blank:'她都会自己带这些东西', post:'，很少用宾馆里的。',
       py:'Suīrán hái yǒu yí bùfen bīnguǎn huì xiàng kèrén tígōng miǎnfèi de máojīn, yágāo hé yáshuā, dànshì měi cì chūchāi, tā dōu huì zìjǐ dài zhèxiē dōngxi, hěn shǎo yòng bīnguǎn li de.',
       vn:'Tuy vẫn có một số khách sạn cung cấp khăn mặt, kem đánh răng và bàn chải miễn phí cho khách, nhưng mỗi lần đi công tác cô ấy đều tự mang những thứ này, rất ít dùng đồ của khách sạn.'}]},
    {num:5, stmt:'舞会上不要直接拒绝邀请。', judge:true, lines:[
      {pre:'', blank:'舞会上最好不要直接拒绝别人的邀请', post:'，如果不得不拒绝，可以告诉他："我有些累了，想休息一下。"之后也不要很快又接受其他人的邀请。',
       py:'Wǔhuì shang zuì hǎo bú yào zhíjiē jùjué biérén de yāoqǐng, rúguǒ bùdébù jùjué, kěyǐ gàosu tā: "Wǒ yǒuxiē lèi le, xiǎng xiūxi yíxià." Zhīhòu yě bú yào hěn kuài yòu jiēshòu qítā rén de yāoqǐng.',
       vn:'Trong buổi khiêu vũ tốt nhất đừng từ chối thẳng lời mời của người khác, nếu buộc phải từ chối, có thể nói: "Tôi hơi mệt, muốn nghỉ một chút." Sau đó cũng đừng nhanh chóng nhận lời mời của người khác.'}]}
  ],
  mc: [
    {num:6, options:['很干净','很脏','很大','打扫完了'], ans:1, q:'那个房间怎么样？',
     lines:[
       {speaker:'女', pre:'', blank:'你的房间实在是太脏了', post:'，快找时间好好儿打扫一下吧。', py:'Nǐ de fángjiān shízài shì tài zāng le, kuài zhǎo shíjiān hǎohāor dǎsǎo yíxià ba.', vn:'Phòng của anh bẩn quá đi, mau tìm thời gian dọn dẹp cho tử tế đi.'},
       {speaker:'男', pre:'行，', blank:'我午饭前一定打扫干净', post:'。', py:'Xíng, wǒ wǔfàn qián yídìng dǎsǎo gānjìng.', vn:'Được, trước bữa trưa anh nhất định dọn sạch.'}
     ],
     explain:'问：那个房间怎么样？ "实在是太脏了" → B 很脏. D sai vì mới hứa sẽ dọn.'},
    {num:7, options:['带吃的','放衣服','扔垃圾','送到山上'], ans:2, q:'女的为什么要拿塑料袋？',
     lines:[
       {speaker:'男', pre:'我们是去爬山，', blank:'你拿塑料袋干什么', post:'？', py:'Wǒmen shì qù páshān, nǐ ná sùliàodài gàn shénme?', vn:'Mình đi leo núi, em cầm túi ni lông làm gì?'},
       {speaker:'女', pre:'我担心山上没有垃圾桶，', blank:'总不能乱扔垃圾啊', post:'。', py:'Wǒ dānxīn shān shang méiyǒu lājītǒng, zǒng bù néng luàn rēng lājī a.', vn:'Em sợ trên núi không có thùng rác, đâu thể vứt rác bừa bãi được.'}
     ],
     explain:'问：女的为什么要拿塑料袋？ "山上没有垃圾桶，总不能乱扔垃圾" → để đựng rác, đáp án C 扔垃圾.'},
    {num:8, options:['没调查完','关于保护动物','10%的人不感兴趣','大部分人愿意参加'], ans:3, q:'关于这次调查，可以知道什么？',
     lines:[
       {speaker:'男', pre:'小夏，', blank:'这次的调查结果出来了吗', post:'？', py:'Xiǎo Xià, zhè cì de diàochá jiéguǒ chūlai le ma?', vn:'Tiểu Hạ, kết quả khảo sát lần này có chưa?'},
       {speaker:'女', pre:'出来了，', blank:'表示愿意参加环保活动的人达到百分之九十', post:'，只有百分之四的人回答说不感兴趣。', py:'Chūlai le, biǎoshì yuànyì cānjiā huánbǎo huódòng de rén dádào bǎi fēn zhī jiǔshí, zhǐyǒu bǎi fēn zhī sì de rén huídá shuō bù gǎn xìngqù.', vn:'Có rồi, số người sẵn sàng tham gia hoạt động bảo vệ môi trường đạt 90%, chỉ 4% trả lời không hứng thú.'}
     ],
     explain:'问：关于这次调查，可以知道什么？ "百分之九十…愿意参加" → D 大部分人愿意参加. C sai: 4% chứ không phải 10%.'},
    {num:9, options:['再使用','扔垃圾桶','打网球','放垃圾'], ans:0, q:'女的对那个盒子是什么意见？',
     lines:[
       {speaker:'男', pre:'这个盒子还有用吗？', blank:'没用我就扔垃圾桶里了', post:'。', py:'Zhège hézi hái yǒu yòng ma? Méi yòng wǒ jiù rēng lājītǒng li le.', vn:'Cái hộp này còn dùng không? Không dùng thì anh vứt vào thùng rác đây.'},
       {speaker:'女', pre:'别扔，', blank:'正好可以用它来放网球', post:'。', py:'Bié rēng, zhènghǎo kěyǐ yòng tā lái fàng wǎngqiú.', vn:'Đừng vứt, vừa hay có thể dùng nó đựng bóng tennis.'}
     ],
     explain:'问：女的对那个盒子是什么意见？ "别扔，正好可以用它来放网球" → tận dụng lại, đáp án A 再使用.'},
    {num:10, options:['正在出差','忘了时间','不想见面','感到抱歉'], ans:3, q:'关于王先生，可以知道什么？',
     lines:[
       {speaker:'女', pre:'王先生，', blank:'上星期跟您约好明天见面', post:'，您还记得吧？', py:'Wáng xiānsheng, shàng xīngqī gēn nín yuēhǎo míngtiān jiànmiàn, nín hái jìde ba?', vn:'Ông Vương, tuần trước hẹn ông ngày mai gặp mặt, ông còn nhớ chứ?'},
       {speaker:'男', pre:'张小姐，我刚刚接到通知，明天要出差，', blank:'很抱歉', post:'，等我回来以后再跟您联系，我下周一回来。', py:'Zhāng xiǎojiě, wǒ gānggāng jiēdào tōngzhī, míngtiān yào chūchāi, hěn bàoqiàn, děng wǒ huílai yǐhòu zài gēn nín liánxì, wǒ xià zhōuyī huílai.', vn:'Cô Trương, tôi vừa nhận thông báo, mai phải đi công tác, rất xin lỗi, đợi tôi về rồi liên hệ lại với cô, thứ Hai tuần sau tôi về.'}
     ],
     explain:'问：关于王先生，可以知道什么？ "很抱歉" → D 感到抱歉. A sai vì mai mới đi công tác.'},
    {num:11, options:['牙刷','牙膏','饮料','塑料袋'], ans:1, q:'男的想要什么？',
     lines:[
       {speaker:'男', pre:'', blank:'牙膏用完了', post:'，家里还有新的吗？', py:'Yágāo yòngwán le, jiā li hái yǒu xīn de ma?', vn:'Kem đánh răng hết rồi, nhà còn cái mới không?'},
       {speaker:'女', pre:'有，我上午刚买的，', blank:'就在那个塑料袋里', post:'。', py:'Yǒu, wǒ shàngwǔ gāng mǎi de, jiù zài nàge sùliàodài li.', vn:'Có, sáng nay em vừa mua, ở ngay trong cái túi ni lông kia.'}
     ],
     explain:'问：男的想要什么？ "牙膏用完了" → B 牙膏. 塑料袋 chỉ là chỗ đựng.'},
    {num:12, options:['目的','方法','过程','结果'], ans:2, q:'女的没提到什么？',
     lines:[
       {speaker:'男', pre:'太失败了，', blank:'我怎么觉得自己什么事儿都做不好呢', post:'？', py:'Tài shībài le, wǒ zěnme juéde zìjǐ shénme shìr dōu zuòbuhǎo ne?', vn:'Thất bại quá, sao tôi thấy mình chuyện gì cũng làm không tốt vậy?'},
       {speaker:'女', pre:'不管做什么事情，在做之前，至少要考虑三点：首先，你的目的是什么？其次，你的方法是什么？', blank:'第三，你计划中的结果是什么样子', post:'？', py:'Bùguǎn zuò shénme shìqing, zài zuò zhīqián, zhìshǎo yào kǎolǜ sān diǎn: shǒuxiān, nǐ de mùdì shì shénme? Qícì, nǐ de fāngfǎ shì shénme? Dì-sān, nǐ jìhuà zhōng de jiéguǒ shì shénme yàngzi?', vn:'Dù làm việc gì, trước khi làm ít nhất phải cân nhắc ba điểm: trước hết, mục đích của bạn là gì? Thứ hai, phương pháp của bạn là gì? Thứ ba, kết quả bạn dự tính là như thế nào?'}
     ],
     explain:'问：女的没提到什么？ Cô ấy nhắc 目的, 方法, 结果; không nhắc 过程 → C. Chú ý câu hỏi phủ định.'},
    {num:13, options:['挺舒服','正合适','更漂亮','容易脏'], ans:3, q:'女的觉得白色的怎么样？',
     lines:[
       {speaker:'男', pre:'你', blank:'再试试白色的', post:'。', py:'Nǐ zài shìshi báisè de.', vn:'Em thử thêm đôi màu trắng đi.'},
       {speaker:'女', pre:'我觉得这双就挺舒服的，', blank:'大小也可以', post:'。', py:'Wǒ juéde zhè shuāng jiù tǐng shūfu de, dàxiǎo yě kěyǐ.', vn:'Em thấy đôi này khá êm, cỡ cũng vừa.'},
       {speaker:'男', pre:'', blank:'白色的更漂亮', post:'。', py:'Báisè de gèng piàoliang.', vn:'Màu trắng đẹp hơn.'},
       {speaker:'女', pre:'不试了，', blank:'白色的容易脏', post:'，还是黑色的好。', py:'Bú shì le, báisè de róngyì zāng, háishi hēisè de hǎo.', vn:'Không thử nữa, màu trắng dễ bẩn, vẫn là màu đen tốt hơn.'}
     ],
     explain:'问：女的觉得白色的怎么样？ "白色的容易脏" → D 容易脏. C là ý của người nam.'},
    {num:14, options:['有人接女的','女的坐出租车回来的','男的写完材料了','女的帮男的检查'], ans:1, q:'根据对话，可以知道什么？',
     lines:[
       {speaker:'男', pre:'真抱歉，', blank:'本来我该去火车站接你的', post:'。', py:'Zhēn bàoqiàn, běnlái wǒ gāi qù huǒchēzhàn jiē nǐ de.', vn:'Thật xin lỗi, đáng lẽ anh phải ra ga đón em.'},
       {speaker:'女', pre:'没关系，', blank:'我打个车就回来了', post:'，很方便。你那篇材料写完没有？', py:'Méi guānxi, wǒ dǎ ge chē jiù huílai le, hěn fāngbiàn. Nǐ nà piān cáiliào xiěwán méiyǒu?', vn:'Không sao, em bắt taxi về là được, rất tiện. Tài liệu của anh viết xong chưa?'},
       {speaker:'男', pre:'差不多了，', blank:'我再检查一遍', post:'，就可以交了。', py:'Chàbuduō le, wǒ zài jiǎnchá yí biàn, jiù kěyǐ jiāo le.', vn:'Gần xong rồi, anh kiểm tra lại một lượt nữa là nộp được.'},
       {speaker:'女', pre:'那你', blank:'快写吧', post:'。', py:'Nà nǐ kuài xiě ba.', vn:'Vậy anh viết nhanh đi.'}
     ],
     explain:'问：根据对话，可以知道什么？ "我打个车就回来了" → B 女的坐出租车回来的. A sai vì không ai đón; C sai vì "差不多了" (chưa xong hẳn).'},
    {num:15, options:['空调卖光了','这个月没有上个月热','商场的活动很吸引人','空调卖得跟上个月一样多'], ans:2, q:'根据对话，下列哪个正确？',
     lines:[
       {speaker:'男', pre:'你们这个月', blank:'空调卖得怎么样', post:'？', py:'Nǐmen zhège yuè kōngtiáo mài de zěnmeyàng?', vn:'Tháng này chỗ các bạn bán điều hoà thế nào?'},
       {speaker:'女', pre:'挺好的，一共卖了四百多台，', blank:'几乎是上个月的两倍', post:'。', py:'Tǐng hǎo de, yígòng màile sìbǎi duō tái, jīhū shì shàng ge yuè de liǎng bèi.', vn:'Khá tốt, tổng cộng bán hơn bốn trăm chiếc, gần gấp đôi tháng trước.'},
       {speaker:'男', pre:'天气热了，', blank:'自然就卖得好一些', post:'。', py:'Tiānqì rè le, zìrán jiù mài de hǎo yìxiē.', vn:'Trời nóng lên thì đương nhiên bán chạy hơn.'},
       {speaker:'女', pre:'这是一方面，另外一个原因是', blank:'商场现在有"以旧换新"的活动', post:'，吸引了不少顾客。', py:'Zhè shì yì fāngmiàn, lìngwài yí ge yuányīn shì shāngchǎng xiànzài yǒu "yǐ jiù huàn xīn" de huódòng, xīyǐnle bù shǎo gùkè.', vn:'Đó là một mặt, một nguyên nhân khác là trung tâm thương mại đang có chương trình "đổi cũ lấy mới", thu hút không ít khách.'}
     ],
     explain:'问：下列哪个正确？ "活动…吸引了不少顾客" → C. D sai vì bán gần gấp đôi tháng trước.'},
    {num:16, options:['他们一起回来的','家里停电了','邻居来了','灯有问题'], ans:3, q:'根据对话，下列哪个正确？',
     lines:[
       {speaker:'女', pre:'怎么回事？', blank:'你怎么不开灯', post:'？', py:'Zěnme huí shì? Nǐ zěnme bù kāi dēng?', vn:'Sao thế? Sao anh không bật đèn?'},
       {speaker:'男', pre:'我也是刚进门，', blank:'刚发现灯不亮', post:'，是不是停电了？', py:'Wǒ yě shì gāng jìnmén, gāng fāxiàn dēng bú liàng, shì bu shì tíngdiàn le?', vn:'Anh cũng vừa vào nhà, vừa phát hiện đèn không sáng, có phải mất điện không?'},
       {speaker:'女', pre:'应该不会，', blank:'邻居家的灯都亮着呢', post:'。', py:'Yīnggāi bú huì, línjū jiā de dēng dōu liàngzhe ne.', vn:'Chắc không, đèn nhà hàng xóm vẫn sáng mà.'},
       {speaker:'男', pre:'那', blank:'就是灯坏了', post:'。', py:'Nà jiù shì dēng huài le.', vn:'Vậy là đèn hỏng rồi.'}
     ],
     explain:'问：下列哪个正确？ "那就是灯坏了" → D 灯有问题. B sai vì hàng xóm vẫn có điện.'},
    {num:17, options:['他生病了','姐姐喜欢狗','他要出差','他周六加班'], ans:2, q:'男的为什么让姐姐照顾他的狗？',
     lines:[
       {speaker:'男', pre:'姐，我要出几天差，', blank:'你能帮我照顾一下我的狗吗', post:'？', py:'Jiě, wǒ yào chū jǐ tiān chāi, nǐ néng bāng wǒ zhàogù yíxià wǒ de gǒu ma?', vn:'Chị ơi, em đi công tác mấy ngày, chị chăm con chó giúp em được không?'},
       {speaker:'女', pre:'当然可以。', blank:'你要去几天', post:'？', py:'Dāngrán kěyǐ. Nǐ yào qù jǐ tiān?', vn:'Đương nhiên được. Em đi mấy ngày?'},
       {speaker:'男', pre:'来回一共四天，我星期六就回来。', blank:'你记得每天要带它出去玩儿', post:'。', py:'Láihuí yígòng sì tiān, wǒ xīngqīliù jiù huílai. Nǐ jìde měi tiān yào dài tā chūqu wánr.', vn:'Đi về tổng cộng bốn ngày, thứ Bảy em về. Chị nhớ mỗi ngày dắt nó ra ngoài chơi nhé.'},
       {speaker:'女', pre:'放心吧，', blank:'我会照顾好它的', post:'。', py:'Fàngxīn ba, wǒ huì zhàogù hǎo tā de.', vn:'Yên tâm, chị sẽ chăm nó tốt.'}
     ],
     explain:'问：男的为什么让姐姐照顾他的狗？ "我要出几天差" → C 他要出差.'},
    {num:18, options:['宾馆','图书馆','饭馆','体育馆'], ans:3, q:'男的最可能去哪儿？',
     lines:[
       {speaker:'男', pre:'妈，', blank:'我去打篮球了', post:'。', py:'Mā, wǒ qù dǎ lánqiú le.', vn:'Mẹ, con đi chơi bóng rổ đây.'},
       {speaker:'女', pre:'等一下，', blank:'你帮我把这袋垃圾扔到楼下', post:'。', py:'Děng yíxià, nǐ bāng wǒ bǎ zhè dài lājī rēngdào lóuxià.', vn:'Đợi chút, con mang túi rác này xuống dưới vứt giúp mẹ.'},
       {speaker:'男', pre:'', blank:'好的', post:'。', py:'Hǎo de.', vn:'Vâng.'},
       {speaker:'女', pre:'带手机了吗？', blank:'早点儿回来', post:'。', py:'Dài shǒujī le ma? Zǎo diǎnr huílai.', vn:'Mang điện thoại chưa? Về sớm nhé.'}
     ],
     explain:'问：男的最可能去哪儿？ "我去打篮球了" → D 体育馆.'},
    {num:19, options:['上班时间','堵车情况','城市区别','地铁优点'], ans:3, q:'这段话主要介绍什么？',
     lines:[
       {speaker:'旁白', pre:'在北京，坐地铁很方便。很多人都选择坐地铁上下班，', blank:'一方面是考虑到地铁速度快', post:'，并且不会堵车，不用担心上班会迟到；', py:'Zài Běijīng, zuò dìtiě hěn fāngbiàn. Hěn duō rén dōu xuǎnzé zuò dìtiě shàng xiàbān, yì fāngmiàn shì kǎolǜ dào dìtiě sùdù kuài, bìngqiě bú huì dǔchē, búyòng dānxīn shàngbān huì chídào;', vn:'Ở Bắc Kinh, đi tàu điện ngầm rất tiện. Nhiều người chọn đi tàu điện ngầm đi làm, một mặt là vì tàu nhanh, lại không tắc đường, không lo đi làm muộn;'},
       {speaker:'旁白', pre:'另一方面地铁也不算贵，跟别的城市差不多，距离不同、票价也不同，', blank:'最低三块', post:'。如果使用"一卡通"，每个月超过100块，还会打八折，这样就更便宜了。', py:'lìng yì fāngmiàn dìtiě yě bú suàn guì, gēn biéde chéngshì chàbuduō, jùlí bùtóng, piàojià yě bùtóng, zuì dī sān kuài. Rúguǒ shǐyòng "yīkǎtōng", měi ge yuè chāoguò yìbǎi kuài, hái huì dǎ bā zhé, zhèyàng jiù gèng piányi le.', vn:'mặt khác tàu điện ngầm cũng không đắt, tương đương các thành phố khác, quãng đường khác nhau thì giá vé khác nhau, thấp nhất ba tệ. Nếu dùng "thẻ một cửa", mỗi tháng quá 100 tệ còn được giảm 20%, như vậy càng rẻ hơn.'}
     ],
     explain:'问：这段话主要介绍什么？ Cả đoạn nói về ưu điểm của tàu điện ngầm (nhanh, không tắc, rẻ) → D 地铁优点.'},
    {num:20, options:['3块','8块','1块','2块'], ans:0, q:'北京地铁票最低多少钱？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）距离不同、票价也不同，', blank:'最低三块', post:'。', py:'(Tóng yí duàn huà) Jùlí bùtóng, piàojià yě bùtóng, zuì dī sān kuài.', vn:'(Cùng đoạn văn) Quãng đường khác nhau thì giá vé khác nhau, thấp nhất ba tệ.'}
     ],
     explain:'问：北京地铁票最低多少钱？ "最低三块" → A 3块. 8 chỉ là 打八折 (giảm 20%).'},
    {num:21, options:['很紧张','没意思','很熟悉','很简单'], ans:1, q:'刚开始运动时，很多人会觉得怎么样？',
     lines:[
       {speaker:'旁白', pre:'"习惯成自然"这句话是说，一件事我们做的次数越多，就会越熟悉，习惯就会慢慢地养成。其实，', blank:'养成一个好习惯并没有我们想得那么难', post:'。', py:'"Xíguàn chéng zìrán" zhè jù huà shì shuō, yí jiàn shì wǒmen zuò de cìshù yuè duō, jiù huì yuè shúxi, xíguàn jiù huì mànman de yǎngchéng. Qíshí, yǎngchéng yí ge hǎo xíguàn bìng méiyǒu wǒmen xiǎng de nàme nán.', vn:'Câu "thói quen thành tự nhiên" nghĩa là một việc làm càng nhiều lần thì càng quen, thói quen sẽ dần hình thành. Thực ra, hình thành một thói quen tốt không khó như chúng ta nghĩ.'},
       {speaker:'旁白', pre:'比如说运动，不少人刚开始运动时，', blank:'会感觉十分无聊', post:'，于是很快就放弃了。但坚持下来的人会告诉你："只要坚持一段时间，你会发现，运动已成为你生活中不可缺少的一部分。"', py:'Bǐrú shuō yùndòng, bù shǎo rén gāng kāishǐ yùndòng shí, huì gǎnjué shífēn wúliáo, yúshì hěn kuài jiù fàngqì le. Dàn jiānchí xiàlai de rén huì gàosu nǐ: "Zhǐyào jiānchí yí duàn shíjiān, nǐ huì fāxiàn, yùndòng yǐ chéngwéi nǐ shēnghuó zhōng bù kě quēshǎo de yí bùfen."', vn:'Ví dụ như vận động, không ít người lúc mới bắt đầu thấy rất chán nên nhanh chóng bỏ cuộc. Nhưng người kiên trì được sẽ nói với bạn: "Chỉ cần kiên trì một thời gian, bạn sẽ thấy vận động đã trở thành một phần không thể thiếu trong cuộc sống."'}
     ],
     explain:'问：刚开始运动时，很多人会觉得怎么样？ "会感觉十分无聊" → B 没意思.'},
    {num:22, options:['坚持很重要','非常困难','要多听意见','需要别人帮忙'], ans:0, q:'对于养成好习惯，说话人觉得怎么样？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）养成一个好习惯并没有我们想得那么难。…', blank:'只要坚持一段时间', post:'，你会发现，运动已成为你生活中不可缺少的一部分。', py:'(Tóng yí duàn huà) Yǎngchéng yí ge hǎo xíguàn bìng méiyǒu wǒmen xiǎng de nàme nán. … Zhǐyào jiānchí yí duàn shíjiān, nǐ huì fāxiàn, yùndòng yǐ chéngwéi nǐ shēnghuó zhōng bù kě quēshǎo de yí bùfen.', vn:'(Cùng đoạn văn) Hình thành thói quen tốt không khó như ta nghĩ. … Chỉ cần kiên trì một thời gian, bạn sẽ thấy vận động đã thành một phần không thể thiếu trong cuộc sống.'}
     ],
     explain:'问：对于养成好习惯，说话人觉得怎么样？ "并没有那么难…只要坚持" → A 坚持很重要. B ngược nghĩa.'}
  ]
};
