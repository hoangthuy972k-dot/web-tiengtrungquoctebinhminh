// ══════════════════════════════════════════
// DATA — HSK4 Bài 20: 路上的风景 (Quang cảnh dọc đường)
// Nguồn: HSK标准教程4下 (Giáo trình chuẩn HSK 4 Tập 2 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'加油站',py:'jiāyóuzhàn',pos:'Danh từ',vn:'trạm xăng dầu',em:'⛽',lesson:1,
   explain:['Nơi đổ xăng. 加油 = đổ xăng / cố lên; 站 = trạm (网站 Bài 18).'],
   usage:'去加油站, 路上有加油站吗, 在加油站抽烟.',
   collo:['去机场的路上有加油站吗','在加油站抽烟很危险','找加油站'],
   ex_zh:'该加油了，去机场的路上有加油站吗？',ex_py:'Gāi jiā yóu le, qù jīchǎng de lùshang yǒu jiāyóuzhàn ma?',ex_vn:'Nên đổ xăng rồi, trên đường ra sân bay có trạm xăng không?',
   exList:[
     {zh:'该加油了，去机场的路上有加油站吗？',py:'Gāi jiā yóu le, qù jīchǎng de lùshang yǒu jiāyóuzhàn ma?',vn:'Nên đổ xăng rồi, trên đường ra sân bay có trạm xăng không?'},
     {zh:'我记得过了长江大桥往右一拐就有一个，大概有四五公里远。',py:'Wǒ jìde guòle Chángjiāng Dàqiáo wǎng yòu yì guǎi jiù yǒu yí ge, dàgài yǒu sì-wǔ gōnglǐ yuǎn.',vn:'Tôi nhớ qua cầu Trường Giang rẽ phải là có một trạm, khoảng bốn năm km.'},
     {zh:'在加油站这样的地方抽烟非常危险，因此很多地方都禁止抽烟。',py:'Zài jiāyóuzhàn zhèyàng de dìfang chōu yān fēicháng wēixiǎn, yīncǐ hěn duō dìfang dōu jìnzhǐ chōu yān.',vn:'Hút thuốc ở nơi như cây xăng rất nguy hiểm, vì vậy nhiều nơi cấm hút thuốc.'},
   ],
   hanzi:[
     {c:'油',p:'yóu',type:'左右结构 · Trái-phải',st:8,ord:'氵 trái → 由 phải',rad:'氵 (thủy)',mean:'dầu',
      tip:'Nước 氵 + 由 → chất lỏng → DẦU. 加油 = thêm dầu/cố lên; 油钱 (Bài 14); 邮 (Bài 18) cũng có 由.',
      cf:'邮 (yóu – bưu)',w:'加油站 / 加油 / 油'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nên đổ xăng rồi, trên đường ra sân bay có trạm xăng không?',answer:'该加油了，去机场的路上有加油站吗？',answerPy:'Gāi jiā yóu le, qù jīchǎng de lùshang yǒu jiāyóuzhàn ma?',
      note:'该……了 (Bài 7).'},
   ]},

  {n:2,zh:'航班',py:'hángbān',pos:'Danh từ',vn:'chuyến bay',em:'✈️',lesson:1,
   explain:['Chuyến bay theo lịch. 航班号, 几点的航班, 航班推迟了.'],
   usage:'几点的航班, 航班推迟, 改签航班.',
   collo:['你去北京的航班是几点的','航班推迟了一个小时','改签到后天的同一航班'],
   ex_zh:'你去北京的航班是几点的？时间来得及吗？',ex_py:'Nǐ qù Běijīng de hángbān shì jǐ diǎn de? Shíjiān láidejí ma?',ex_vn:'Chuyến bay đi Bắc Kinh của bạn mấy giờ? Thời gian có kịp không?',
   exList:[
     {zh:'你去北京的航班是几点的？时间来得及吗？',py:'Nǐ qù Běijīng de hángbān shì jǐ diǎn de? Shíjiān láidejí ma?',vn:'Chuyến bay đi Bắc Kinh của bạn mấy giờ? Thời gian có kịp không?'},
     {zh:'航班本来是十点的，后来机场网站上通知推迟了一个小时。',py:'Hángbān běnlái shì shí diǎn de, hòulái jīchǎng wǎngzhàn shang tōngzhī tuīchíle yí ge xiǎoshí.',vn:'Chuyến bay vốn 10 giờ, sau đó trang web sân bay thông báo hoãn một tiếng.'},
     {zh:'乘客，您好！我们很抱歉地通知您，由于天气原因，您乘坐的CA1864航班推迟起飞。',py:'Chéngkè, nín hǎo! Wǒmen hěn bàoqiàn de tōngzhī nín, yóuyú tiānqì yuányīn, nín chéngzuò de CA1864 hángbān tuīchí qǐfēi.',vn:'Kính thưa hành khách! Chúng tôi rất tiếc thông báo, do thời tiết, chuyến bay CA1864 của quý khách hoãn cất cánh.'},
   ],
   hanzi:[
     {c:'航',p:'háng',type:'左右结构 · Trái-phải',st:10,ord:'舟 trái → 亢 phải',rad:'舟 (chu)',mean:'đi thuyền, bay',
      tip:'Thuyền 舟 + 亢 → đi thuyền → mở rộng: HÀNG không. 航班 = chuyến bay; 航空 = hàng không.',
      cf:'船 (chuán – thuyền)',w:'航班 / 航空 / 航空公司'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyến bay vốn 10 giờ, sau đó trang web sân bay thông báo hoãn một tiếng.',answer:'航班本来是十点的，后来机场网站上通知推迟了一个小时。',answerPy:'Hángbān běnlái shì shí diǎn de, hòulái jīchǎng wǎngzhàn shang tōngzhī tuīchíle yí ge xiǎoshí.',
      note:'本来 (Bài 10), 网站 (Bài 18), 通知 (Bài 4).'},
   ]},

  {n:3,zh:'推迟',py:'tuīchí',pos:'Động từ',vn:'hoãn lại',em:'⏳',lesson:1,
   explain:['Lùi thời gian. 推 (Bài 16) + 迟. 推迟一个小时, 推迟起飞, 推迟到下周.'],
   usage:'推迟了一个小时, 推迟起飞, 推迟到……',
   collo:['通知推迟了一个小时','推迟起飞','出国的时间推迟了'],
   ex_zh:'后来机场网站上通知推迟了一个小时，所以九点半以前到就应该没问题。',ex_py:'Hòulái jīchǎng wǎngzhàn shang tōngzhī tuīchíle yí ge xiǎoshí, suǒyǐ jiǔ diǎn bàn yǐqián dào jiù yīnggāi méi wèntí.',ex_vn:'Sau đó trang web sân bay thông báo hoãn một tiếng, nên đến trước 9 rưỡi là không vấn đề.',
   exList:[
     {zh:'后来机场网站上通知推迟了一个小时，所以九点半以前到就应该没问题。',py:'Hòulái jīchǎng wǎngzhàn shang tōngzhī tuīchíle yí ge xiǎoshí, suǒyǐ jiǔ diǎn bàn yǐqián dào jiù yīnggāi méi wèntí.',vn:'Sau đó trang web sân bay thông báo hoãn một tiếng, nên đến trước 9 rưỡi là không vấn đề.'},
     {zh:'A：小高，听说你出国的时间推迟了？B：是的，我的签证还没办好，大概得10月底才能走。',py:'A: Xiǎo Gāo, tīngshuō nǐ chū guó de shíjiān tuīchí le? B: Shì de, wǒ de qiānzhèng hái méi bànhǎo, dàgài děi shí yuè dǐ cái néng zǒu.',vn:'A: Tiểu Cao, nghe nói thời gian ra nước ngoài của bạn hoãn rồi? B: Đúng, visa chưa xong, đại khái cuối tháng 10 mới đi được.'},
     {zh:'刚才听广播说明天可能会下大雨，足球比赛恐怕要推迟了。',py:'Gāngcái tīng guǎngbō shuō míngtiān kěnéng huì xià dà yǔ, zúqiú bǐsài kǒngpà yào tuīchí le.',vn:'Vừa nghe đài nói mai có thể mưa to, trận bóng e là phải hoãn.'},
   ],
   hanzi:[
     {c:'迟',p:'chí',type:'半包围结构 · Nửa bao quanh',st:7,ord:'尺 trong → 辶 bao',rad:'辶 (sước)',mean:'muộn',
      tip:'Đi 辶 + 尺 → đi chậm → MUỘN, TRỄ. 推迟 = đẩy lùi; 迟到 = đến muộn.',
      cf:'尺 (chǐ – thước)',w:'推迟 / 迟到 / 迟'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Visa tôi chưa xong, đại khái cuối tháng 10 mới đi được.',answer:'我的签证还没办好，大概得10月底才能走。',answerPy:'Wǒ de qiānzhèng hái méi bànhǎo, dàgài děi shí yuè dǐ cái néng zǒu.',
      note:'签证 (Bài 16), 大概 (Bài 13), 月底 (Bài 11), 才 (Bài 3).'},
   ]},

  {n:4,zh:'高速公路',py:'gāosù gōnglù',pos:'Danh từ',vn:'đường cao tốc',em:'🛣️',lesson:1,
   explain:['Đường tốc độ cao. 高速 = tốc độ cao (速度 Bài 14); 公路 = đường bộ. 上高速公路, 走高速公路.'],
   usage:'上高速公路, 走高速公路, 高速公路上.',
   collo:['往西走五百米就能上高速公路','走高速公路大约半个小时','高速公路上不能停车'],
   ex_zh:'一会儿加完油，往西走五百米就能上高速公路。走高速公路大约半个小时就到了。',ex_py:'Yíhuìr jiāwán yóu, wǎng xī zǒu wǔbǎi mǐ jiù néng shàng gāosù gōnglù. Zǒu gāosù gōnglù dàyuē bàn ge xiǎoshí jiù dào le.',ex_vn:'Lát đổ xăng xong, đi về phía tây 500 mét là lên được cao tốc. Đi cao tốc khoảng nửa tiếng là đến.',
   exList:[
     {zh:'一会儿加完油，往西走五百米就能上高速公路。走高速公路大约半个小时就到了。',py:'Yíhuìr jiāwán yóu, wǎng xī zǒu wǔbǎi mǐ jiù néng shàng gāosù gōnglù. Zǒu gāosù gōnglù dàyuē bàn ge xiǎoshí jiù dào le.',vn:'Lát đổ xăng xong, đi về phía tây 500 mét là lên được cao tốc. Đi cao tốc khoảng nửa tiếng là đến.'},
     {zh:'高速公路上汽车的速度不能超过每小时120公里。',py:'Gāosù gōnglù shang qìchē de sùdù bù néng chāoguò měi xiǎoshí yìbǎi èrshí gōnglǐ.',vn:'Trên cao tốc tốc độ ô tô không được vượt quá 120 km/giờ.'},
     {zh:'现在高速公路越来越多，开车去外地旅行方便多了。',py:'Xiànzài gāosù gōnglù yuè lái yuè duō, kāi chē qù wàidì lǚxíng fāngbiàn duō le.',vn:'Giờ cao tốc ngày càng nhiều, lái xe đi du lịch nơi khác tiện hơn nhiều.'},
   ],
   hanzi:[
     {c:'路',p:'lù',type:'左右结构 · Trái-phải',st:13,ord:'足 trái → 各 phải',rad:'足 (túc)',mean:'đường',
      tip:'Chân 足 + 各 → nơi chân đi → ĐƯỜNG. 公路 = đường công cộng; 路口 (Bài 2); 迷路 (Bài 18); 马路 (Bài 19).',
      cf:'各 (gè – mỗi)',w:'高速公路 / 路口 / 迷路 / 马路'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đi về phía tây 500 mét là lên được cao tốc. Đi cao tốc khoảng nửa tiếng là đến.',answer:'往西走五百米就能上高速公路。走高速公路大约半个小时就到了。',answerPy:'Wǎng xī zǒu wǔbǎi mǐ jiù néng shàng gāosù gōnglù. Zǒu gāosù gōnglù dàyuē bàn ge xiǎoshí jiù dào le.',
      note:'往 (Bài 2), 大约 (Bài 13), 米 (Bài 2).'},
   ]},

  {n:5,zh:'登机牌',py:'dēngjīpái',pos:'Danh từ',vn:'thẻ lên máy bay',em:'🎫',lesson:1,
   explain:['Boarding pass. 登机 = lên máy bay; 牌 = thẻ, biển. 换登机牌 = làm thủ tục lấy thẻ.'],
   usage:'换登机牌, 拿着登机牌, 登机牌上.',
   collo:['进去换登机牌','拿好登机牌','登机牌上的座位号'],
   ex_zh:'一会儿我自己进去换登机牌，你就不用送我了。',ex_py:'Yíhuìr wǒ zìjǐ jìnqu huàn dēngjīpái, nǐ jiù búyòng sòng wǒ le.',ex_vn:'Lát tôi tự vào đổi thẻ lên máy bay, bạn không cần tiễn tôi nữa.',
   exList:[
     {zh:'一会儿我自己进去换登机牌，你就不用送我了，等我到了首都机场再给你发短信。',py:'Yíhuìr wǒ zìjǐ jìnqu huàn dēngjīpái, nǐ jiù búyòng sòng wǒ le, děng wǒ dàole Shǒudū Jīchǎng zài gěi nǐ fā duǎnxìn.',vn:'Lát tôi tự vào đổi thẻ lên máy bay, bạn không cần tiễn, đợi tôi đến sân bay Thủ Đô sẽ nhắn tin.'},
     {zh:'请拿好您的护照和登机牌，准备登机。',py:'Qǐng náhǎo nín de hùzhào hé dēngjīpái, zhǔnbèi dēng jī.',vn:'Xin cầm sẵn hộ chiếu và thẻ lên máy bay, chuẩn bị lên máy bay.'},
     {zh:'登机牌上写着座位号，您可以按照号码找座位。',py:'Dēngjīpái shang xiězhe zuòwèi hào, nín kěyǐ ànzhào hàomǎ zhǎo zuòwèi.',vn:'Trên thẻ có ghi số ghế, ngài có thể theo số tìm chỗ ngồi.'},
   ],
   hanzi:[
     {c:'登',p:'dēng',type:'上下结构 · Trên-dưới',st:12,ord:'癶 trên → 豆 dưới',rad:'癶 (bát)',mean:'leo lên',
      tip:'Hai chân 癶 bước lên bệ 豆 → LEO LÊN, ĐĂNG. 登机 = lên máy bay; 登山 = leo núi; 登记 = đăng ký.',
      cf:'凳 (dèng – ghế đẩu)',w:'登机牌 / 登山 / 登记'},
     {c:'牌',p:'pái',type:'左右结构 · Trái-phải',st:12,ord:'片 trái → 卑 phải',rad:'片 (phiến)',mean:'thẻ, biển',
      tip:'Miếng 片 + 卑 → tấm THẺ, BIỂN. 登机牌, 牌子 (nhãn hiệu), 名牌.',
      cf:'片 (piàn – miếng)',w:'登机牌 / 牌子 / 名牌'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lát tôi tự vào đổi thẻ lên máy bay, bạn không cần tiễn tôi nữa.',answer:'一会儿我自己进去换登机牌，你就不用送我了。',answerPy:'Yíhuìr wǒ zìjǐ jìnqu huàn dēngjīpái, nǐ jiù búyòng sòng wǒ le.',
      note:'换 (Bài 5), 不用……了.'},
   ]},

  {n:6,zh:'首都',py:'shǒudū',pos:'Danh từ',vn:'thủ đô',em:'🏛️',lesson:1,
   explain:['Thành phố chính của một nước. 首都机场 = sân bay Thủ Đô (Bắc Kinh). 首 = đầu (首先 Bài 10).'],
   usage:'首都机场, 中国的首都, 首都北京.',
   collo:['首都机场','中国的首都是北京','越南的首都'],
   ex_zh:'等我到了首都机场再给你发短信。',ex_py:'Děng wǒ dàole Shǒudū Jīchǎng zài gěi nǐ fā duǎnxìn.',ex_vn:'Đợi tôi đến sân bay Thủ Đô sẽ nhắn tin cho bạn.',
   exList:[
     {zh:'等我到了首都机场再给你发短信。',py:'Děng wǒ dàole Shǒudū Jīchǎng zài gěi nǐ fā duǎnxìn.',vn:'Đợi tôi đến sân bay Thủ Đô sẽ nhắn tin cho bạn.'},
     {zh:'北京是中国的首都，也是一座有着几千年历史的文化名城。',py:'Běijīng shì Zhōngguó de shǒudū, yě shì yí zuò yǒuzhe jǐqiān nián lìshǐ de wénhuà míngchéng.',vn:'Bắc Kinh là thủ đô Trung Quốc, cũng là thành phố văn hóa nổi tiếng có lịch sử mấy nghìn năm.'},
     {zh:'河内是越南的首都，有很多有名的小吃。',py:'Hénèi shì Yuènán de shǒudū, yǒu hěn duō yǒumíng de xiǎochī.',vn:'Hà Nội là thủ đô Việt Nam, có nhiều món ăn vặt nổi tiếng.'},
   ],
   hanzi:[
     {c:'都',p:'dū',type:'左右结构 · Trái-phải',st:10,ord:'者 trái → 阝 phải',rad:'阝 (ấp)',mean:'đô thị',
      tip:'者 + 阝(ấp, thành) → thành lớn → ĐÔ (dū). Đọc dōu = đều (phó từ). 首都 = thủ đô.',
      cf:'者 (zhě – người)',w:'首都 / 都市 / 都 (dōu)'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bắc Kinh là thủ đô Trung Quốc, cũng là thành phố văn hóa nổi tiếng có lịch sử mấy nghìn năm.',answer:'北京是中国的首都，也是一座有着几千年历史的文化名城。',answerPy:'Běijīng shì Zhōngguó de shǒudū, yě shì yí zuò yǒuzhe jǐqiān nián lìshǐ de wénhuà míngchéng.',
      note:'座 (Bài 18), 着 (Bài 2).'},
   ]},

  {n:7,zh:'旅行',py:'lǚxíng',pos:'Động từ',vn:'du lịch',em:'🧳',lesson:2,
   explain:['Đi chơi xa. So sánh 旅游 (Bài 1): 旅行 nhấn mạnh hành trình, cũng làm danh từ (一次旅行).'],
   usage:'去旅行, 旅行方式, 一次愉快的旅行.',
   collo:['总是说想去旅行','旅行中有任何事','一次愉快的旅行'],
   ex_zh:'平时女儿那么多课，总是说想去旅行，但是没时间，怪可怜的。',ex_py:'Píngshí nǚ\'ér nàme duō kè, zǒngshì shuō xiǎng qù lǚxíng, dànshì méi shíjiān, guài kělián de.',ex_vn:'Bình thường con gái nhiều bài học, luôn nói muốn đi du lịch nhưng không có thời gian, tội nghiệp thật.',
   exList:[
     {zh:'平时女儿那么多课，总是说想去旅行，但是没时间，怪可怜的。',py:'Píngshí nǚ\'ér nàme duō kè, zǒngshì shuō xiǎng qù lǚxíng, dànshì méi shíjiān, guài kělián de.',vn:'Bình thường con gái nhiều bài học, luôn nói muốn đi du lịch nhưng không có thời gian, tội nghiệp thật.'},
     {zh:'一个人有时间一定要去旅行，旅行不仅能丰富一个人的经历，而且是很好的减压方法。',py:'Yí ge rén yǒu shíjiān yídìng yào qù lǚxíng, lǚxíng bùjǐn néng fēngfù yí ge rén de jīnglì, érqiě shì hěn hǎo de jiǎnyā fāngfǎ.',vn:'Có thời gian nhất định phải đi du lịch, du lịch không chỉ làm phong phú trải nghiệm mà còn là cách giảm áp lực tốt.'},
     {zh:'欢迎大家来到美丽的海南，旅行中有任何事您都可以找我商量。',py:'Huānyíng dàjiā láidào měilì de Hǎinán, lǚxíng zhōng yǒu rènhé shì nín dōu kěyǐ zhǎo wǒ shāngliang.',vn:'Hoan nghênh đến Hải Nam xinh đẹp, trong chuyến đi có việc gì đều có thể tìm tôi bàn bạc.'},
   ],
   hanzi:[
     {c:'旅',p:'lǚ',type:'左右结构 · Trái-phải',st:10,ord:'方 trái → 𠂉氏 phải',rad:'方 (phương)',mean:'lữ hành',
      tip:'Cờ 方 + đoàn người → đoàn đi xa → LỮ. 旅行, 旅游 (Bài 1), 旅馆.',
      cf:'族 (zú – tộc, cùng bộ)',w:'旅行 / 旅游 / 旅馆'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Du lịch không chỉ làm phong phú trải nghiệm của một người mà còn là cách giảm áp lực tốt.',answer:'旅行不仅能丰富一个人的经历，而且是很好的减压方法。',answerPy:'Lǚxíng bùjǐn néng fēngfù yí ge rén de jīnglì, érqiě shì hěn hǎo de jiǎnyā fāngfǎ.',
      note:'不仅……而且 (Bài 6), 丰富 (Bài 8), 经历 (Bài 9), 压力 (Bài 5).'},
   ]},

  {n:8,zh:'怪',py:'guài',pos:'Phó từ',vn:'rất, vô cùng',em:'❗',lesson:2,
   explain:['Phó từ khẩu ngữ: 怪 + tính từ + 的 = rất, khá (怪可怜的, 怪不好意思的). Cũng là tính từ "kỳ lạ" (奇怪 Bài 5) và động từ "trách" (怪我).'],
   usage:'怪可怜的, 怪不好意思的, 怪冷的.',
   collo:['怪可怜的','怪不好意思的','怪累的'],
   ex_zh:'总是说想去旅行，但是没时间，怪可怜的。',ex_py:'Zǒngshì shuō xiǎng qù lǚxíng, dànshì méi shíjiān, guài kělián de.',ex_vn:'Luôn nói muốn đi du lịch nhưng không có thời gian, tội nghiệp thật.',
   exList:[
     {zh:'总是说想去旅行，但是没时间，怪可怜的。',py:'Zǒngshì shuō xiǎng qù lǚxíng, dànshì méi shíjiān, guài kělián de.',vn:'Luôn nói muốn đi du lịch nhưng không có thời gian, tội nghiệp thật.'},
     {zh:'让你专门跑一趟，怪不好意思的。',py:'Ràng nǐ zhuānmén pǎo yí tàng, guài bù hǎoyìsi de.',vn:'Để bạn phải chạy một chuyến, thật ngại quá.'},
     {zh:'这件事不能怪他，是我没说清楚。',py:'Zhè jiàn shì bù néng guài tā, shì wǒ méi shuō qīngchu.',vn:'Chuyện này không thể trách anh ấy, là tôi nói không rõ.'},
   ],
   hanzi:[
     {c:'怪',p:'guài',type:'左右结构 · Trái-phải',st:8,ord:'忄 trái → 圣 phải',rad:'忄 (tâm)',mean:'lạ; trách',
      tip:'Tâm 忄 + 圣 → thấy trong lòng LẠ → KỲ QUÁI (奇怪 Bài 5); mở rộng: TRÁCH (怪我); phó từ khẩu ngữ: RẤT (怪……的).',
      cf:'圣 (shèng – thánh)',w:'怪 / 奇怪 / 怪不得 / 怪……的'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để bạn phải chạy một chuyến, thật ngại quá.',answer:'让你专门跑一趟，怪不好意思的。',answerPy:'Ràng nǐ zhuānmén pǎo yí tàng, guài bù hǎoyìsi de.',
      note:'专门 (Bài 9), 趟 (Bài 17), 怪……的.'},
   ]},

  {n:9,zh:'可怜',py:'kělián',pos:'Tính từ',vn:'đáng thương, tội nghiệp',em:'🥺',lesson:2,
   explain:['Đáng thương. 怪可怜的, 可怜的小狗. Cũng là động từ: 可怜他 (thương hại).'],
   usage:'怪可怜的, 可怜的小狗, 真可怜.',
   collo:['怪可怜的','一只可怜的小狗','太可怜了'],
   ex_zh:'但是没时间，怪可怜的。',ex_py:'Dànshì méi shíjiān, guài kělián de.',ex_vn:'Nhưng không có thời gian, tội nghiệp thật.',
   exList:[
     {zh:'平时女儿那么多课，总是说想去旅行，但是没时间，怪可怜的。',py:'Píngshí nǚ\'ér nàme duō kè, zǒngshì shuō xiǎng qù lǚxíng, dànshì méi shíjiān, guài kělián de.',vn:'Con gái nhiều bài học, luôn nói muốn du lịch nhưng không có thời gian, tội nghiệp thật.'},
     {zh:'我走在回家的路上，突然发现商店门口有一只可怜的小狗，我心里一软，就把它抱回了家。',py:'Wǒ zǒu zài huí jiā de lùshang, tūrán fāxiàn shāngdiàn ménkǒu yǒu yì zhī kělián de xiǎo gǒu, wǒ xīnli yì ruǎn, jiù bǎ tā bàohuíle jiā.',vn:'Tôi đi trên đường về nhà, đột nhiên thấy cửa hàng có một chú chó nhỏ đáng thương, tôi mềm lòng, ôm nó về nhà.'},
     {zh:'他一个人在国外，生病了也没人照顾，真可怜。',py:'Tā yí ge rén zài guówài, shēng bìng le yě méi rén zhàogù, zhēn kělián.',vn:'Anh ấy một mình ở nước ngoài, ốm cũng không ai chăm, thật đáng thương.'},
   ],
   hanzi:[
     {c:'怜',p:'lián',type:'左右结构 · Trái-phải',st:8,ord:'忄 trái → 令 phải',rad:'忄 (tâm)',mean:'thương',
      tip:'Tâm 忄 + 令 → trong lòng THƯƠNG XÓT → LÂN. 可怜 = đáng thương.',
      cf:'冷 (lěng – lạnh, cũng có 令)',w:'可怜 / 可怜的'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đột nhiên thấy cửa hàng có một chú chó nhỏ đáng thương, tôi mềm lòng, ôm nó về nhà.',answer:'突然发现商店门口有一只可怜的小狗，我心里一软，就把它抱回了家。',answerPy:'Tūrán fāxiàn shāngdiàn ménkǒu yǒu yì zhī kělián de xiǎo gǒu, wǒ xīnli yì ruǎn, jiù bǎ tā bàohuíle jiā.',
      note:'突然 (Bài 8), 抱 (Bài 17), 把……回.'},
   ]},

  {n:10,zh:'对面',py:'duìmiàn',pos:'Danh từ',vn:'đối diện, trước mặt',em:'↔️',lesson:2,
   explain:['Phía bên kia, trước mặt. 对面的饭店, 坐在对面, 马路对面.'],
   usage:'对面的饭店, 马路对面, 坐在我对面.',
   collo:['去对面的饭店','马路对面','对面那条街'],
   ex_zh:'中午我们不是要去对面的饭店吃烤鸭，祝贺她考试成绩都合格吗？',ex_py:'Zhōngwǔ wǒmen bú shì yào qù duìmiàn de fàndiàn chī kǎoyā, zhùhè tā kǎoshì chéngjì dōu hégé ma?',ex_vn:'Trưa nay chẳng phải chúng ta đến nhà hàng đối diện ăn vịt quay, chúc mừng con thi đạt hết sao?',
   exList:[
     {zh:'中午我们不是要去对面的饭店吃烤鸭，祝贺她考试成绩都合格吗？',py:'Zhōngwǔ wǒmen bú shì yào qù duìmiàn de fàndiàn chī kǎoyā, zhùhè tā kǎoshì chéngjì dōu hégé ma?',vn:'Trưa nay chẳng phải chúng ta đến nhà hàng đối diện ăn vịt quay, chúc mừng con thi đạt hết sao?'},
     {zh:'对面那条街上新开了一家理发店。',py:'Duìmiàn nà tiáo jiē shang xīn kāile yì jiā lǐfàdiàn.',vn:'Phố đối diện mới mở một tiệm cắt tóc.'},
     {zh:'去西边的公共汽车应该在对面坐。',py:'Qù xībiān de gōnggòng qìchē yīnggāi zài duìmiàn zuò.',vn:'Xe buýt đi phía tây phải đón ở bên đối diện.'},
   ],
   hanzi:[
     {c:'面',p:'miàn',type:'独体字 · Chữ đơn thể',st:9,ord:'一 → 丿 → 𠃌 → 目 …',rad:'面 (diện)',mean:'mặt',
      tip:'Tượng hình khuôn MẶT. 对面 = mặt đối mặt; 方面 (Bài 5); 面包; 见面.',
      cf:'而 (ér – mà)',w:'对面 / 方面 / 面包 / 见面'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phố đối diện mới mở một tiệm cắt tóc.',answer:'对面那条街上新开了一家理发店。',answerPy:'Duìmiàn nà tiáo jiē shang xīn kāile yì jiā lǐfàdiàn.',
      note:'理发 (Bài 19), lượng từ 条/家.'},
   ]},

  {n:11,zh:'烤鸭',py:'kǎoyā',pos:'Danh từ',vn:'vịt quay',em:'🦆',lesson:2,
   explain:['Món ăn nổi tiếng Bắc Kinh. 北京烤鸭, 吃烤鸭, 一只烤鸭.'],
   usage:'吃烤鸭, 北京烤鸭, 一只烤鸭.',
   collo:['去饭店吃烤鸭','北京烤鸭','烤鸭很有名'],
   ex_zh:'中午我们不是要去对面的饭店吃烤鸭吗？',ex_py:'Zhōngwǔ wǒmen bú shì yào qù duìmiàn de fàndiàn chī kǎoyā ma?',ex_vn:'Trưa nay chẳng phải chúng ta đến nhà hàng đối diện ăn vịt quay sao?',
   exList:[
     {zh:'中午我们不是要去对面的饭店吃烤鸭，祝贺她考试成绩都合格吗？',py:'Zhōngwǔ wǒmen bú shì yào qù duìmiàn de fàndiàn chī kǎoyā, zhùhè tā kǎoshì chéngjì dōu hégé ma?',vn:'Trưa nay chẳng phải chúng ta đến nhà hàng đối diện ăn vịt quay, chúc mừng con thi đạt hết sao?'},
     {zh:'来北京一定要尝一尝北京烤鸭。',py:'Lái Běijīng yídìng yào cháng yi cháng Běijīng kǎoyā.',vn:'Đến Bắc Kinh nhất định phải nếm thử vịt quay Bắc Kinh.'},
     {zh:'这家饭店的烤鸭很有名，每天都要排队。',py:'Zhè jiā fàndiàn de kǎoyā hěn yǒumíng, měi tiān dōu yào pái duì.',vn:'Vịt quay nhà hàng này rất nổi tiếng, ngày nào cũng phải xếp hàng.'},
   ],
   hanzi:[
     {c:'烤',p:'kǎo',type:'左右结构 · Trái-phải',st:10,ord:'火 trái → 考 phải',rad:'火 (hỏa)',mean:'nướng',
      tip:'Lửa 火 + 考 → NƯỚNG, QUAY. 烤鸭 = vịt quay; 烤肉 = thịt nướng; 考 (thi) không có 火.',
      cf:'考 (kǎo – thi)',w:'烤鸭 / 烤肉 / 烤'},
     {c:'鸭',p:'yā',type:'左右结构 · Trái-phải',st:10,ord:'甲 trái → 鸟 phải',rad:'鸟 (điểu)',mean:'vịt',
      tip:'甲(biểu âm) + chim 鸟 → VỊT. 烤鸭, 鸭子.',
      cf:'鸡 (jī – gà)',w:'烤鸭 / 鸭子'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đến Bắc Kinh nhất định phải nếm thử vịt quay Bắc Kinh.',answer:'来北京一定要尝一尝北京烤鸭。',answerPy:'Lái Běijīng yídìng yào cháng yi cháng Běijīng kǎoyā.',
      note:'尝 (Bài 7), động từ lặp 尝一尝.'},
   ]},

  {n:12,zh:'祝贺',py:'zhùhè',pos:'Động từ',vn:'chúc mừng',em:'🎉',lesson:2,
   explain:['Chúc mừng thành công/việc vui. 祝贺你, 祝贺她考试合格. So sánh 祝 (chúc) + 贺 (mừng).'],
   usage:'祝贺你, 祝贺她……, 表示祝贺.',
   collo:['祝贺她考试成绩都合格','祝贺你们','向他表示祝贺'],
   ex_zh:'祝贺她考试成绩都合格吗？',ex_py:'Zhùhè tā kǎoshì chéngjì dōu hégé ma?',ex_vn:'Chúc mừng con thi đạt hết sao?',
   exList:[
     {zh:'中午我们不是要去对面的饭店吃烤鸭，祝贺她考试成绩都合格吗？那时候再告诉她，不是更好？',py:'Zhōngwǔ wǒmen bú shì yào qù duìmiàn de fàndiàn chī kǎoyā, zhùhè tā kǎoshì chéngjì dōu hégé ma? Nà shíhou zài gàosu tā, bú shì gèng hǎo?',vn:'Trưa nay chẳng phải đến nhà hàng đối diện ăn vịt quay, chúc mừng con thi đạt hết sao? Lúc đó nói với con chẳng phải tốt hơn?'},
     {zh:'A：这次活动非常成功，我们顺利完成了公司交给的任务。B：辛苦了，祝贺你们！来，干一杯！',py:'A: Zhè cì huódòng fēicháng chénggōng, wǒmen shùnlì wánchéngle gōngsī jiāo gěi de rènwu. B: Xīnkǔ le, zhùhè nǐmen! Lái, gān yì bēi!',vn:'A: Hoạt động lần này rất thành công, chúng tôi hoàn thành thuận lợi nhiệm vụ công ty giao. B: Vất vả rồi, chúc mừng các bạn! Nào, cạn ly!'},
     {zh:'听说你考上研究生了，祝贺你！',py:'Tīngshuō nǐ kǎoshàng yánjiūshēng le, zhùhè nǐ!',vn:'Nghe nói bạn đỗ cao học rồi, chúc mừng bạn!'},
   ],
   hanzi:[
     {c:'贺',p:'hè',type:'上下结构 · Trên-dưới',st:9,ord:'加 trên → 贝 dưới',rad:'贝 (bối)',mean:'mừng',
      tip:'加(thêm) + 贝(tiền, quà) → mang quà đến → CHÚC MỪNG (hạ). 祝贺 = chúc hạ.',
      cf:'加 (jiā – thêm)',w:'祝贺 / 贺卡'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vất vả rồi, chúc mừng các bạn! Nào, cạn ly!',answer:'辛苦了，祝贺你们！来，干一杯！',answerPy:'Xīnkǔ le, zhùhè nǐmen! Lái, gān yì bēi!',
      note:'辛苦 (Bài 4), 干杯 (từ mới).'},
   ]},

  {n:13,zh:'合格',py:'hégé',pos:'Tính từ',vn:'đạt tiêu chuẩn, đạt yêu cầu',em:'✅',lesson:2,
   explain:['Đạt yêu cầu (thi, sản phẩm, con người). 考试合格, 合格的产品, 一个合格的现代人.'],
   usage:'考试成绩合格, 合格的产品, 合格的现代人.',
   collo:['考试成绩都合格','成绩都合格','做一个合格的现代人'],
   ex_zh:'祝贺她考试成绩都合格。',ex_py:'Zhùhè tā kǎoshì chéngjì dōu hégé.',ex_vn:'Chúc mừng con thi đạt hết.',
   exList:[
     {zh:'祝贺她考试成绩都合格。',py:'Zhùhè tā kǎoshì chéngjì dōu hégé.',vn:'Chúc mừng con thi đạt hết.'},
     {zh:'"活到老，学到老"。在现代社会中，我们必须坚持学习，努力获得新的知识，才能适应社会的发展速度，做一个合格的现代人。',py:'"Huó dào lǎo, xué dào lǎo". Zài xiàndài shèhuì zhōng, wǒmen bìxū jiānchí xuéxí, nǔlì huòdé xīn de zhīshi, cái néng shìyìng shèhuì de fāzhǎn sùdù, zuò yí ge hégé de xiàndài rén.',vn:'"Sống đến già, học đến già". Trong xã hội hiện đại, phải kiên trì học, nỗ lực có kiến thức mới, mới thích ứng tốc độ phát triển, làm một người hiện đại đạt chuẩn.'},
     {zh:'只要他这次考试的成绩都合格，就可以进入高级班学习。',py:'Zhǐyào tā zhè cì kǎoshì de chéngjì dōu hégé, jiù kěyǐ jìnrù gāojí bān xuéxí.',vn:'Chỉ cần lần này thi đạt hết, là có thể vào lớp cao cấp học.'},
   ],
   hanzi:[
     {c:'格',p:'gé',type:'左右结构 · Trái-phải',st:10,ord:'木 trái → 各 phải',rad:'木 (mộc)',mean:'cách, chuẩn',
      tip:'Gỗ 木 + 各 → khung chuẩn → CÁCH. 合格 = hợp chuẩn; 性格 (Bài 8); 价格 (Bài 5); 表格 (Bài 16); 严格 (Bài 12).',
      cf:'各 (gè – mỗi)',w:'合格 / 性格 / 价格 / 表格 / 严格'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần lần này thi đạt hết, là có thể vào lớp cao cấp học.',answer:'只要他这次考试的成绩都合格，就可以进入高级班学习。',answerPy:'Zhǐyào tā zhè cì kǎoshì de chéngjì dōu hégé, jiù kěyǐ jìnrù gāojí bān xuéxí.',
      note:'只要……就 (Bài 8), 成绩 (Bài 2).'},
   ]},

  {n:14,zh:'干杯',py:'gān bēi',pos:'Động từ',vn:'cạn ly',em:'🥂',lesson:3,
   explain:['Uống cạn để chúc mừng. Động từ ly hợp: 干一杯, 和……干杯. 干 (gān) = khô (Bài 17).'],
   usage:'干杯, 干一杯, 和你干杯的那个人.',
   collo:['和你干杯的那个人','来，干一杯','为……干杯'],
   ex_zh:'这张照片上和你干杯的那个人是少数民族吗？她打扮得真漂亮。',ex_py:'Zhè zhāng zhàopiàn shang hé nǐ gān bēi de nàge rén shì shǎoshù mínzú ma? Tā dǎban de zhēn piàoliang.',ex_vn:'Người cạn ly với bạn trong ảnh này là dân tộc thiểu số à? Cô ấy trang điểm đẹp thật.',
   exList:[
     {zh:'这张照片上和你干杯的那个人是少数民族吗？她打扮得真漂亮。',py:'Zhè zhāng zhàopiàn shang hé nǐ gān bēi de nàge rén shì shǎoshù mínzú ma? Tā dǎban de zhēn piàoliang.',vn:'Người cạn ly với bạn trong ảnh này là dân tộc thiểu số à? Cô ấy trang điểm đẹp thật.'},
     {zh:'辛苦了，祝贺你们！来，干一杯！',py:'Xīnkǔ le, zhùhè nǐmen! Lái, gān yì bēi!',vn:'Vất vả rồi, chúc mừng các bạn! Nào, cạn ly!'},
     {zh:'来，为我们的友谊干杯！',py:'Lái, wèi wǒmen de yǒuyì gān bēi!',vn:'Nào, cạn ly vì tình bạn của chúng ta!'},
   ],
   hanzi:[
     {c:'杯',p:'bēi',type:'左右结构 · Trái-phải',st:8,ord:'木 trái → 不 phải',rad:'木 (mộc)',mean:'cốc, ly',
      tip:'Gỗ 木 + 不 → cái CỐC (xưa làm bằng gỗ). 干杯 = cạn ly; 杯子; 世界杯.',
      cf:'不 (bù – không)',w:'干杯 / 杯子 / 一杯 / 世界杯'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nào, cạn ly vì tình bạn của chúng ta!',answer:'来，为我们的友谊干杯！',answerPy:'Lái, wèi wǒmen de yǒuyì gān bēi!',
      note:'为 (Bài 4), 友谊 (Bài 11).'},
   ]},

  {n:15,zh:'民族',py:'mínzú',pos:'Danh từ',vn:'dân tộc',em:'🎎',lesson:3,
   explain:['Cộng đồng người có chung văn hóa. 少数民族 = dân tộc thiểu số; 56个民族; 汉族.'],
   usage:'少数民族, 56个民族, 民族服装.',
   collo:['少数民族','中国有56个民族','民族文化'],
   ex_zh:'她是我们的导游，不是少数民族。',ex_py:'Tā shì wǒmen de dǎoyóu, bú shì shǎoshù mínzú.',ex_vn:'Cô ấy là hướng dẫn viên của chúng tôi, không phải dân tộc thiểu số.',
   exList:[
     {zh:'她是我们的导游，不是少数民族。一路上她给我们讲了很多有趣的笑话。',py:'Tā shì wǒmen de dǎoyóu, bú shì shǎoshù mínzú. Yí lù shang tā gěi wǒmen jiǎngle hěn duō yǒuqù de xiàohua.',vn:'Cô ấy là hướng dẫn viên, không phải dân tộc thiểu số. Dọc đường cô kể nhiều truyện cười thú vị.'},
     {zh:'中国有56个民族，其中汉族人的数量最多，汉族以外的55个民族由于人数较少，人们把它们叫作"少数民族"。',py:'Zhōngguó yǒu wǔshíliù ge mínzú, qízhōng Hànzú rén de shùliàng zuì duō, Hànzú yǐwài de wǔshíwǔ ge mínzú yóuyú rénshù jiào shǎo, rénmen bǎ tāmen jiàozuò "shǎoshù mínzú".',vn:'Trung Quốc có 56 dân tộc, người Hán đông nhất, 55 dân tộc còn lại do số người ít nên gọi là "dân tộc thiểu số".'},
     {zh:'每个民族都有自己的传统和文化。',py:'Měi ge mínzú dōu yǒu zìjǐ de chuántǒng hé wénhuà.',vn:'Mỗi dân tộc đều có truyền thống và văn hóa riêng.'},
   ],
   hanzi:[
     {c:'族',p:'zú',type:'左右结构 · Trái-phải',st:11,ord:'方 trái → 𠂉矢 phải',rad:'方 (phương)',mean:'tộc',
      tip:'Cờ 方 + tên 矢 → nhóm người cùng chiến đấu dưới một lá cờ → TỘC. 民族, 家族, 汉族.',
      cf:'旅 (lǚ – lữ, cùng bộ)',w:'民族 / 少数民族 / 家族'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi dân tộc đều có truyền thống và văn hóa riêng.',answer:'每个民族都有自己的传统和文化。',answerPy:'Měi ge mínzú dōu yǒu zìjǐ de chuántǒng hé wénhuà.',
      note:'传统 (Bài 9).'},
   ]},

  {n:16,zh:'打扮',py:'dǎban',pos:'Động từ',vn:'trang điểm, ăn diện',em:'💄',lesson:3,
   explain:['Ăn mặc, trang điểm. 打扮得真漂亮, 爱打扮. Cũng là danh từ: 这种打扮.'],
   usage:'打扮得很漂亮, 爱打扮, 这种打扮.',
   collo:['打扮得真漂亮','打扮一下','这种打扮不太合适'],
   ex_zh:'她打扮得真漂亮。',ex_py:'Tā dǎban de zhēn piàoliang.',ex_vn:'Cô ấy trang điểm đẹp thật.',
   exList:[
     {zh:'这张照片上和你干杯的那个人是少数民族吗？她打扮得真漂亮。',py:'Zhè zhāng zhàopiàn shang hé nǐ gān bēi de nàge rén shì shǎoshù mínzú ma? Tā dǎban de zhēn piàoliang.',vn:'Người cạn ly với bạn trong ảnh là dân tộc thiểu số à? Cô ấy trang điểm đẹp thật.'},
     {zh:'A：今晚我穿这条裙子怎么样？今年最流行的。B：很漂亮，不过我觉得这种打扮参加正式的舞会可能还是不太合适。',py:'A: Jīn wǎn wǒ chuān zhè tiáo qúnzi zěnmeyàng? Jīnnián zuì liúxíng de. B: Hěn piàoliang, búguò wǒ juéde zhè zhǒng dǎban cānjiā zhèngshì de wǔhuì kěnéng háishi bú tài héshì.',vn:'A: Tối nay tôi mặc váy này thế nào? Mốt nhất năm nay. B: Rất đẹp, nhưng tôi thấy kiểu ăn diện này dự vũ hội chính thức có lẽ chưa hợp.'},
     {zh:'参加面试前，稍微打扮一下会给人留下好印象。',py:'Cānjiā miànshì qián, shāowēi dǎban yíxià huì gěi rén liúxià hǎo yìnxiàng.',vn:'Trước khi phỏng vấn, chỉnh trang một chút sẽ để lại ấn tượng tốt.'},
   ],
   hanzi:[
     {c:'扮',p:'ban',type:'左右结构 · Trái-phải',st:7,ord:'扌 trái → 分 phải',rad:'扌 (thủ)',mean:'trang điểm',
      tip:'Tay 扌 + 分 → tay sửa soạn → TRANG ĐIỂM, đóng vai. 打扮 = ăn diện.',
      cf:'份 (fèn – phần)',w:'打扮 / 扮演'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rất đẹp, nhưng tôi thấy kiểu ăn diện này dự vũ hội chính thức có lẽ chưa hợp.',answer:'很漂亮，不过我觉得这种打扮参加正式的舞会可能还是不太合适。',answerPy:'Hěn piàoliang, búguò wǒ juéde zhè zhǒng dǎban cānjiā zhèngshì de wǔhuì kěnéng háishi bú tài héshì.',
      note:'正式 (Bài 6), 合适 (Bài 15), 流行 (Bài 5).'},
   ]},

  {n:17,zh:'笑话',py:'xiàohua',pos:'Danh từ',vn:'truyện cười',em:'😂',lesson:3,
   explain:['Chuyện gây cười. 讲笑话, 有趣的笑话, 一肚子的笑话. Cũng là động từ: 笑话别人 (chê cười).'],
   usage:'讲笑话, 有趣的笑话, 别笑话我.',
   collo:['讲了很多有趣的笑话','一肚子的笑话','别笑话我'],
   ex_zh:'一路上她给我们讲了很多有趣的笑话。',ex_py:'Yí lù shang tā gěi wǒmen jiǎngle hěn duō yǒuqù de xiàohua.',ex_vn:'Dọc đường cô ấy kể cho chúng tôi nhiều truyện cười thú vị.',
   exList:[
     {zh:'一路上她给我们讲了很多有趣的笑话。',py:'Yí lù shang tā gěi wǒmen jiǎngle hěn duō yǒuqù de xiàohua.',vn:'Dọc đường cô ấy kể cho chúng tôi nhiều truyện cười thú vị.'},
     {zh:'A：你这一肚子的笑话，都是从哪儿听来的？B：有个网站上有很多，看到有趣的我就记下来。',py:'A: Nǐ zhè yí dùzi de xiàohua, dōu shì cóng nǎr tīnglái de? B: Yǒu ge wǎngzhàn shang yǒu hěn duō, kàndào yǒuqù de wǒ jiù jì xiàlai.',vn:'A: Cả bụng truyện cười của bạn nghe từ đâu vậy? B: Có trang web có nhiều lắm, thấy hay tôi ghi lại.'},
     {zh:'她讲着讲着自己就先笑了，而大家却不明白她到底为什么笑。',py:'Tā jiǎngzhe jiǎngzhe zìjǐ jiù xiān xiào le, ér dàjiā què bù míngbai tā dàodǐ wèishénme xiào.',vn:'Cô ấy kể một lúc thì tự cười trước, còn mọi người lại không hiểu rốt cuộc cô cười gì.'},
   ],
   hanzi:[
     {c:'笑',p:'xiào',type:'上下结构 · Trên-dưới',st:10,ord:'⺮ trên → 夭 dưới',rad:'⺮ (trúc)',mean:'cười',
      tip:'Trúc ⺮ + 夭 → cây trúc uốn cong như người cười → CƯỜI. 笑话 = truyện cười; 开玩笑 (Bài 5).',
      cf:'夭 (yāo)',w:'笑话 / 开玩笑 / 笑'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cả bụng truyện cười của bạn nghe từ đâu vậy? — Có trang web có nhiều lắm, thấy hay tôi ghi lại.',answer:'你这一肚子的笑话，都是从哪儿听来的？——有个网站上有很多，看到有趣的我就记下来。',answerPy:'Nǐ zhè yí dùzi de xiàohua, dōu shì cóng nǎr tīnglái de? — Yǒu ge wǎngzhàn shang yǒu hěn duō, kàndào yǒuqù de wǒ jiù jì xiàlai.',
      note:'肚子 (Bài 7), 网站 (Bài 18), 有趣 (Bài 13).'},
   ]},

  {n:18,zh:'存',py:'cún',pos:'Động từ',vn:'gửi',em:'🏦',lesson:3,
   explain:['Gửi (đồ, tiền) để giữ. 存包 = gửi túi; 存钱 = gửi tiền; 存在 = tồn tại.'],
   usage:'存包, 存钱, 把行李存在……',
   collo:['存包的钥匙','存钱','把包存在这里'],
   ex_zh:'有一次我把存包的钥匙丢了，最后还是她帮我找到的。',ex_py:'Yǒu yí cì wǒ bǎ cún bāo de yàoshi diū le, zuìhòu háishi tā bāng wǒ zhǎodào de.',ex_vn:'Có lần tôi làm mất chìa khóa tủ gửi đồ, cuối cùng vẫn là cô ấy giúp tìm được.',
   exList:[
     {zh:'有一次我把存包的钥匙丢了，最后还是她帮我找到的。',py:'Yǒu yí cì wǒ bǎ cún bāo de yàoshi diū le, zuìhòu háishi tā bāng wǒ zhǎodào de.',vn:'Có lần tôi làm mất chìa khóa tủ gửi đồ, cuối cùng vẫn là cô ấy giúp tìm được.'},
     {zh:'进超市前请先把包存在门口。',py:'Jìn chāoshì qián qǐng xiān bǎ bāo cún zài ménkǒu.',vn:'Trước khi vào siêu thị xin gửi túi ở cửa.'},
     {zh:'他每个月都把一部分工资存进银行。',py:'Tā měi ge yuè dōu bǎ yí bùfen gōngzī cúnjìn yínháng.',vn:'Mỗi tháng anh ấy gửi một phần lương vào ngân hàng.'},
   ],
   hanzi:[
     {c:'存',p:'cún',type:'半包围结构 · Nửa bao quanh',st:6,ord:'𠂇 → 丨 → 子',rad:'子 (tử)',mean:'gửi, tồn tại',
      tip:'才 + 子 → giữ lại → TỒN, GỬI. 存包, 存钱, 存在, 保存.',
      cf:'在 (zài – ở)',w:'存 / 存包 / 存钱 / 存在'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi tháng anh ấy gửi một phần lương vào ngân hàng.',answer:'他每个月都把一部分工资存进银行。',answerPy:'Tā měi ge yuè dōu bǎ yí bùfen gōngzī cúnjìn yínháng.',
      note:'部分 (Bài 13), 工资 (Bài 10), 把……进.'},
   ]},

  {n:19,zh:'钥匙',py:'yàoshi',pos:'Danh từ',vn:'chìa khóa',em:'🔑',lesson:3,
   explain:['Dụng cụ mở khóa. 一把钥匙, 钥匙丢了, 房间的钥匙.'],
   usage:'一把钥匙, 钥匙丢了, 存包的钥匙.',
   collo:['存包的钥匙','钥匙丢了','找到钥匙'],
   ex_zh:'我把存包的钥匙丢了。',ex_py:'Wǒ bǎ cún bāo de yàoshi diū le.',ex_vn:'Tôi làm mất chìa khóa tủ gửi đồ.',
   exList:[
     {zh:'有一次我把存包的钥匙丢了，最后还是她帮我找到的。这张照片就是找到钥匙后，我们一起照的。',py:'Yǒu yí cì wǒ bǎ cún bāo de yàoshi diū le, zuìhòu háishi tā bāng wǒ zhǎodào de. Zhè zhāng zhàopiàn jiù shì zhǎodào yàoshi hòu, wǒmen yìqǐ zhào de.',vn:'Có lần tôi mất chìa khóa tủ gửi đồ, cuối cùng cô ấy giúp tìm được. Tấm ảnh này chụp chung sau khi tìm được chìa.'},
     {zh:'喂，你还在逛街吗？我的钥匙丢了，进不了门。',py:'Wèi, nǐ hái zài guàng jiē ma? Wǒ de yàoshi diū le, jìnbuliǎo mén.',vn:'Alô, em còn dạo phố à? Anh mất chìa khóa, không vào được nhà.'},
     {zh:'钥匙可能掉到沙发底下了，你找找看。',py:'Yàoshi kěnéng diàodào shāfā dǐxia le, nǐ zhǎozhao kàn.',vn:'Chìa khóa có thể rơi dưới gầm sofa, bạn tìm thử.'},
   ],
   hanzi:[
     {c:'钥',p:'yào',type:'左右结构 · Trái-phải',st:9,ord:'钅 trái → 月 phải',rad:'钅 (kim)',mean:'chìa khóa',
      tip:'Kim loại 钅 + 月 → CHÌA KHÓA. 钥匙 luôn đi đôi.',
      cf:'钢 (gāng – thép)',w:'钥匙'},
     {c:'匙',p:'shi',type:'半包围结构 · Nửa bao quanh',st:11,ord:'是 → 匕',rad:'匕 (chủy)',mean:'thìa; chìa',
      tip:'是 + 匕(thìa) → THÌA; trong 钥匙 đọc nhẹ shi = chìa khóa. 勺子 (Bài 12) cũng là thìa.',
      cf:'是 (shì – là)',w:'钥匙 / 汤匙'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có lần tôi làm mất chìa khóa tủ gửi đồ, cuối cùng vẫn là cô ấy giúp tìm được.',answer:'有一次我把存包的钥匙丢了，最后还是她帮我找到的。',answerPy:'Yǒu yí cì wǒ bǎ cún bāo de yàoshi diū le, zuìhòu háishi tā bāng wǒ zhǎodào de.',
      note:'丢 (Bài 14), 还是 (Bài 1), 把……了.'},
   ]},

  {n:20,zh:'究竟',py:'jiūjìng',pos:'Phó từ',vn:'rốt cuộc (nhấn mạnh trong câu hỏi)',em:'❓',lesson:3,
   explain:['Nhấn mạnh truy vấn trong câu hỏi hoặc câu có đại từ nghi vấn (= 到底 Bài 16), thiên về văn viết. Chủ ngữ là đại từ nghi vấn → 究竟 đứng trước. Ngữ pháp trọng tâm: 究竟 vs 到底.'],
   usage:'究竟哪个……？, 究竟是怎么回事, 究竟什么是……？',
   collo:['究竟哪个季节去比较好','究竟是怎么回事','究竟从哪里来'],
   ex_zh:'究竟哪个季节去丽江旅游比较好呢？',ex_py:'Jiūjìng nǎ ge jìjié qù Lìjiāng lǚyóu bǐjiào hǎo ne?',ex_vn:'Rốt cuộc mùa nào đi Lệ Giang du lịch thì tốt hơn?',
   exList:[
     {zh:'明年我有机会也去那儿看看，到时把你的导游介绍给我吧。究竟哪个季节去丽江旅游比较好呢？',py:'Míngnián wǒ yǒu jīhuì yě qù nàr kànkan, dào shí bǎ nǐ de dǎoyóu jièshào gěi wǒ ba. Jiūjìng nǎ ge jìjié qù Lìjiāng lǚyóu bǐjiào hǎo ne?',vn:'Năm sau có dịp tôi cũng đi xem, lúc đó giới thiệu hướng dẫn viên cho tôi nhé. Rốt cuộc mùa nào đi Lệ Giang thì tốt?'},
     {zh:'随着科学技术的发展，很多问题已经得到解决。但有些问题我们仍然无法回答，例如，生命究竟从哪里来？',py:'Suízhe kēxué jìshù de fāzhǎn, hěn duō wèntí yǐjīng dédào jiějué. Dàn yǒuxiē wèntí wǒmen réngrán wúfǎ huídá, lìrú, shēngmìng jiūjìng cóng nǎlǐ lái?',vn:'Cùng với sự phát triển khoa học kỹ thuật, nhiều vấn đề đã được giải quyết. Nhưng có vấn đề vẫn không trả lời được, ví dụ, sự sống rốt cuộc từ đâu đến?'},
     {zh:'学习时，不仅要知道答案是什么，还要弄清楚答案究竟是怎么得来的，只有这样，才能把问题真正弄懂。',py:'Xuéxí shí, bùjǐn yào zhīdào dá\'àn shì shénme, hái yào nòng qīngchu dá\'àn jiūjìng shì zěnme délái de, zhǐyǒu zhèyàng, cái néng bǎ wèntí zhēnzhèng nòngdǒng.',vn:'Khi học không chỉ biết đáp án là gì, còn phải làm rõ đáp án rốt cuộc có được thế nào, chỉ như vậy mới thật sự hiểu vấn đề.'},
   ],
   hanzi:[
     {c:'究',p:'jiū',type:'上下结构 · Trên-dưới',st:7,ord:'穴 trên → 九 dưới',rad:'穴 (huyệt)',mean:'tìm tòi',
      tip:'Hang 穴 + 九 → đào sâu đến cùng → CỨU (nghiên cứu). 究竟 = xét đến cùng; 研究 (Bài 9).',
      cf:'穷 (qióng – nghèo, Bài 10)',w:'究竟 / 研究'},
     {c:'竟',p:'jìng',type:'上下结构 · Trên-dưới',st:11,ord:'音 trên → 儿 dưới',rad:'立 (lập)',mean:'cuối cùng',
      tip:'音 + 儿 → bản nhạc kết thúc → CUỐI CÙNG, RỐT CUỘC. 究竟; 竟然 (Bài 6); 毕竟.',
      cf:'竞 (jìng – cạnh tranh, Bài 17)',w:'究竟 / 竟然 / 毕竟'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có vấn đề chúng ta vẫn không trả lời được, ví dụ, sự sống rốt cuộc từ đâu đến?',answer:'有些问题我们仍然无法回答，例如，生命究竟从哪里来？',answerPy:'Yǒuxiē wèntí wǒmen réngrán wúfǎ huídá, lìrú, shēngmìng jiūjìng cóng nǎlǐ lái?',
      note:'仍然 (Bài 17), 无法 (Bài 12), 例如 (Bài 10), 生命 (Bài 8).'},
     {promptLang:'vi',prompt:'Rốt cuộc mùa nào đi Lệ Giang du lịch thì tốt hơn?',answer:'究竟哪个季节去丽江旅游比较好呢？',answerPy:'Jiūjìng nǎ ge jìjié qù Lìjiāng lǚyóu bǐjiào hǎo ne?',
      note:'究竟 đứng trước đại từ nghi vấn làm chủ ngữ; 季节 (Bài 7).'},
   ]},

  {n:21,zh:'棵',py:'kē',pos:'Lượng từ',vn:'cây, ngọn (dùng cho thực vật)',em:'🌳',lesson:4,
   explain:['Lượng từ cho cây cối: 一棵树, 一棵草, 两棵植物. Phân biệt 颗 (kē – hạt nhỏ, viên).'],
   usage:'一棵树, 一棵一棵地, 两棵植物.',
   collo:['窗外的树一棵一棵地变绿','一棵大树','两棵不同的植物'],
   ex_zh:'窗外的树一棵一棵地变绿，北方也许还下着雪，南方却已经到处都是绿色了。',ex_py:'Chuāngwài de shù yì kē yì kē de biàn lǜ, běifāng yěxǔ hái xiàzhe xuě, nánfāng què yǐjīng dàochù dōu shì lǜsè le.',ex_vn:'Cây ngoài cửa sổ từng cây một xanh dần, miền Bắc có lẽ còn tuyết, miền Nam đã khắp nơi xanh rồi.',
   exList:[
     {zh:'窗外的树一棵一棵地变绿，北方也许还下着雪，南方却已经到处都是绿色了。',py:'Chuāngwài de shù yì kē yì kē de biàn lǜ, běifāng yěxǔ hái xiàzhe xuě, nánfāng què yǐjīng dàochù dōu shì lǜsè le.',vn:'Cây ngoài cửa sổ từng cây một xanh dần, miền Bắc có lẽ còn tuyết, miền Nam đã khắp nơi xanh rồi.'},
     {zh:'虽然这是两棵不同的植物，但是它们到底有什么区别，我也说不清楚。',py:'Suīrán zhè shì liǎng kē bù tóng de zhíwù, dànshì tāmen dàodǐ yǒu shénme qūbié, wǒ yě shuōbuqīngchu.',vn:'Tuy đây là hai cây khác nhau, nhưng rốt cuộc khác gì tôi cũng nói không rõ.'},
     {zh:'我家门口有一棵老树，已经有一百多年了。',py:'Wǒ jiā ménkǒu yǒu yì kē lǎo shù, yǐjīng yǒu yìbǎi duō nián le.',vn:'Trước cửa nhà tôi có một cây cổ thụ, đã hơn trăm năm.'},
   ],
   hanzi:[
     {c:'棵',p:'kē',type:'左右结构 · Trái-phải',st:12,ord:'木 trái → 果 phải',rad:'木 (mộc)',mean:'cây (lượng từ)',
      tip:'Gỗ 木 + 果 → lượng từ cho CÂY. Phân biệt 颗 (kē, bộ 页 – hạt, viên: 一颗星).',
      cf:'颗 (kē – hạt)',w:'一棵树 / 一棵草'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy đây là hai cây khác nhau, nhưng rốt cuộc khác gì tôi cũng nói không rõ.',answer:'虽然这是两棵不同的植物，但是它们到底有什么区别，我也说不清楚。',answerPy:'Suīrán zhè shì liǎng kē bù tóng de zhíwù, dànshì tāmen dàodǐ yǒu shénme qūbié, wǒ yě shuōbuqīngchu.',
      note:'植物 (Bài 12), 到底 (Bài 16), 区别 (Bài 8).'},
   ]},

  {n:22,zh:'汤',py:'tāng',pos:'Danh từ',vn:'canh, súp',em:'🍲',lesson:4,
   explain:['Món nước. 鸡蛋汤, 喝汤, 一碗汤. 汤 vs 场 (chǎng).'],
   usage:'喝汤, 鸡蛋汤, 一碗汤.',
   collo:['特别是汤','鸡蛋汤','喝一碗汤'],
   ex_zh:'南方菜很有特点，特别是汤，味道鲜美，很多北方人都喜欢喝。',ex_py:'Nánfāng cài hěn yǒu tèdiǎn, tèbié shì tāng, wèidào xiānměi, hěn duō běifāng rén dōu xǐhuan hē.',ex_vn:'Món ăn miền Nam rất đặc sắc, nhất là canh, vị tươi ngon, nhiều người miền Bắc thích uống.',
   exList:[
     {zh:'南方菜很有特点，特别是汤，味道鲜美，很多北方人都喜欢喝。',py:'Nánfāng cài hěn yǒu tèdiǎn, tèbié shì tāng, wèidào xiānměi, hěn duō běifāng rén dōu xǐhuan hē.',vn:'Món ăn miền Nam rất đặc sắc, nhất là canh, vị tươi ngon, nhiều người miền Bắc thích uống.'},
     {zh:'饺子很香，不过鸡蛋汤稍微有点儿咸。',py:'Jiǎozi hěn xiāng, búguò jīdàn tāng shāowēi yǒudiǎnr xián.',vn:'Sủi cảo rất thơm, nhưng canh trứng hơi mặn.'},
     {zh:'西红柿鸡蛋汤的做法很简单，我保证你一次就能学会。',py:'Xīhóngshì jīdàn tāng de zuòfǎ hěn jiǎndān, wǒ bǎozhèng nǐ yí cì jiù néng xuéhuì.',vn:'Cách nấu canh trứng cà chua rất đơn giản, tôi đảm bảo bạn học một lần là biết.'},
   ],
   hanzi:[
     {c:'汤',p:'tāng',type:'左右结构 · Trái-phải',st:6,ord:'氵 trái → 𠃓 phải',rad:'氵 (thủy)',mean:'canh',
      tip:'Nước 氵 + 𠃓 → nước nóng → CANH, SÚP. Phân biệt 场 (chǎng, bộ 土, Bài 19), 扬 (yáng, Bài 15).',
      cf:'场 (chǎng – sân)',w:'汤 / 鸡蛋汤 / 喝汤'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món ăn miền Nam rất đặc sắc, nhất là canh, vị tươi ngon, nhiều người miền Bắc thích uống.',answer:'南方菜很有特点，特别是汤，味道鲜美，很多北方人都喜欢喝。',answerPy:'Nánfāng cài hěn yǒu tèdiǎn, tèbié shì tāng, wèidào xiānměi, hěn duō běifāng rén dōu xǐhuan hē.',
      note:'特点 (Bài 18), 味道 (Bài 7).'},
   ]},

  {n:23,zh:'对话',py:'duìhuà',pos:'Động từ',vn:'đối thoại, tiếp xúc',em:'💬',lesson:4,
   explain:['Nói chuyện qua lại. 跟……对话, 一段对话, 完成对话.'],
   usage:'跟上海人对话, 一段对话, 对话练习.',
   collo:['跟上海人对话时','完成对话','一段对话'],
   ex_zh:'比如你跟上海人对话时，会发现上海话听起来就像外语一样。',ex_py:'Bǐrú nǐ gēn Shànghǎi rén duìhuà shí, huì fāxiàn Shànghǎi huà tīng qilai jiù xiàng wàiyǔ yíyàng.',ex_vn:'Ví dụ khi đối thoại với người Thượng Hải, bạn sẽ thấy tiếng Thượng Hải nghe như ngoại ngữ.',
   exList:[
     {zh:'比如你跟上海人对话时，会发现上海话听起来就像外语一样。',py:'Bǐrú nǐ gēn Shànghǎi rén duìhuà shí, huì fāxiàn Shànghǎi huà tīng qilai jiù xiàng wàiyǔ yíyàng.',vn:'Ví dụ khi đối thoại với người Thượng Hải, bạn sẽ thấy tiếng Thượng Hải nghe như ngoại ngữ.'},
     {zh:'上午来应聘的那个小伙子是学电子技术的，成绩很优秀，通过面试时和他的对话，感觉他的性格也不错。',py:'Shàngwǔ lái yìngpìn de nàge xiǎohuǒzi shì xué diànzǐ jìshù de, chéngjì hěn yōuxiù, tōngguò miànshì shí hé tā de duìhuà, gǎnjué tā de xìnggé yě búcuò.',vn:'Chàng trai đến ứng tuyển sáng nay học kỹ thuật điện tử, thành tích xuất sắc, qua đối thoại phỏng vấn thấy tính cách cũng tốt.'},
     {zh:'父母应该多和孩子对话，了解他们的想法。',py:'Fùmǔ yīnggāi duō hé háizi duìhuà, liǎojiě tāmen de xiǎngfǎ.',vn:'Cha mẹ nên đối thoại nhiều với con, hiểu suy nghĩ của chúng.'},
   ],
   hanzi:[
     {c:'话',p:'huà',type:'左右结构 · Trái-phải',st:8,ord:'讠 trái → 舌 phải',rad:'讠 (ngôn)',mean:'lời nói',
      tip:'Lời 讠 + lưỡi 舌 → LỜI NÓI. 对话, 普通话, 笑话, 电话, 说话.',
      cf:'活 (huó – sống, bộ 氵)',w:'对话 / 普通话 / 笑话 / 电话'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ví dụ khi đối thoại với người Thượng Hải, bạn sẽ thấy tiếng Thượng Hải nghe như ngoại ngữ.',answer:'比如你跟上海人对话时，会发现上海话听起来就像外语一样。',answerPy:'Bǐrú nǐ gēn Shànghǎi rén duìhuà shí, huì fāxiàn Shànghǎi huà tīng qilai jiù xiàng wàiyǔ yíyàng.',
      note:'听起来 (ngữ pháp bài), 像……一样 (Bài 6).'},
   ]},

  {n:24,zh:'普通话',py:'pǔtōnghuà',pos:'Danh từ',vn:'tiếng phổ thông, tiếng Quan thoại',em:'🗣️',lesson:4,
   explain:['Tiếng Trung chuẩn. 普通 (Bài 12) = phổ thông. 讲普通话, 普通话水平考试.'],
   usage:'讲普通话, 普通话水平考试, 说普通话.',
   collo:['上海人也会讲普通话','普通话水平考试','普通话说得很标准'],
   ex_zh:'虽然上海人也会讲普通话，可是仔细听，还是有上海味儿。',ex_py:'Suīrán Shànghǎi rén yě huì jiǎng pǔtōnghuà, kěshì zǐxì tīng, háishi yǒu Shànghǎi wèir.',ex_vn:'Tuy người Thượng Hải cũng nói tiếng phổ thông, nhưng nghe kỹ vẫn có giọng Thượng Hải.',
   exList:[
     {zh:'虽然上海人也会讲普通话，可是仔细听，还是有上海味儿。',py:'Suīrán Shànghǎi rén yě huì jiǎng pǔtōnghuà, kěshì zǐxì tīng, háishi yǒu Shànghǎi wèir.',vn:'Tuy người Thượng Hải cũng nói tiếng phổ thông, nhưng nghe kỹ vẫn có giọng Thượng Hải.'},
     {zh:'A：你的普通话水平考试考得怎么样？B：我这次没考，因为我错过了报名时间，只能等下次了。',py:'A: Nǐ de pǔtōnghuà shuǐpíng kǎoshì kǎo de zěnmeyàng? B: Wǒ zhè cì méi kǎo, yīnwèi wǒ cuòguòle bào míng shíjiān, zhǐ néng děng xià cì le.',vn:'A: Thi trình độ tiếng phổ thông của bạn thế nào? B: Lần này tôi không thi, vì lỡ thời gian đăng ký, đành đợi lần sau.'},
     {zh:'汉语普通话以北京话为标准。',py:'Hànyǔ pǔtōnghuà yǐ Běijīng huà wéi biāozhǔn.',vn:'Tiếng phổ thông lấy tiếng Bắc Kinh làm chuẩn.'},
   ],
   hanzi:[
     {c:'普',p:'pǔ',type:'上下结构 · Trên-dưới',st:12,ord:'並 trên → 日 dưới',rad:'日 (nhật)',mean:'phổ biến',
      tip:'並 + 日(mặt trời) → ánh nắng chiếu khắp → PHỔ. 普通话, 普遍 (Bài 13), 普通 (Bài 12).',
      cf:'谱 (pǔ – phổ nhạc)',w:'普通话 / 普遍 / 普通'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lần này tôi không thi, vì lỡ thời gian đăng ký, đành đợi lần sau.',answer:'我这次没考，因为我错过了报名时间，只能等下次了。',answerPy:'Wǒ zhè cì méi kǎo, yīnwèi wǒ cuòguòle bào míng shíjiān, zhǐ néng děng xià cì le.',
      note:'错过 (Bài 4), 报名 (Bài 16).'},
   ]},

  {n:25,zh:'小吃',py:'xiǎochī',pos:'Danh từ',vn:'món ăn vặt',em:'🍢',lesson:5,
   explain:['Món ăn nhẹ đặc sản. 有名的小吃, 各地的小吃, 小吃街.'],
   usage:'有名的小吃, 各地的小吃, 尝小吃.',
   collo:['尝到各地有名的小吃','美食小吃','小吃街'],
   ex_zh:'对我来说，最重要的是旅行能让我有机会尝到各地有名的小吃。',ex_py:'Duì wǒ lái shuō, zuì zhòngyào de shì lǚxíng néng ràng wǒ yǒu jīhuì chángdào gè dì yǒumíng de xiǎochī.',ex_vn:'Với tôi, quan trọng nhất là du lịch cho tôi cơ hội nếm món ăn vặt nổi tiếng các nơi.',
   exList:[
     {zh:'对我来说，最重要的是旅行能让我有机会尝到各地有名的小吃。',py:'Duì wǒ lái shuō, zuì zhòngyào de shì lǚxíng néng ràng wǒ yǒu jīhuì chángdào gè dì yǒumíng de xiǎochī.',vn:'Với tôi, quan trọng nhất là du lịch cho tôi cơ hội nếm món ăn vặt nổi tiếng các nơi.'},
     {zh:'北京有很多有名的小吃，比如烤鸭、豆汁儿什么的。',py:'Běijīng yǒu hěn duō yǒumíng de xiǎochī, bǐrú kǎoyā, dòuzhīr shénme de.',vn:'Bắc Kinh có nhiều món ăn vặt nổi tiếng, như vịt quay, nước đậu các thứ.'},
     {zh:'河内的小吃又便宜又好吃，游客都很喜欢。',py:'Hénèi de xiǎochī yòu piányi yòu hǎochī, yóukè dōu hěn xǐhuan.',vn:'Món ăn vặt Hà Nội vừa rẻ vừa ngon, du khách đều thích.'},
   ],
   hanzi:[
     {c:'吃',p:'chī',type:'左右结构 · Trái-phải',st:6,ord:'口 trái → 乞 phải',rad:'口 (khẩu)',mean:'ăn',
      tip:'Miệng 口 + 乞 → ĂN. 小吃 = món ăn nhỏ; 吃惊 (Bài 13); 吃苦 (Bài 13).',
      cf:'乞 (qǐ – xin)',w:'小吃 / 吃惊 / 吃苦 / 好吃'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Với tôi, quan trọng nhất là du lịch cho tôi cơ hội nếm món ăn vặt nổi tiếng các nơi.',answer:'对我来说，最重要的是旅行能让我有机会尝到各地有名的小吃。',answerPy:'Duì wǒ lái shuō, zuì zhòngyào de shì lǚxíng néng ràng wǒ yǒu jīhuì chángdào gè dì yǒumíng de xiǎochī.',
      note:'对……来说 (Bài 5), 尝 (Bài 7), 各地.'},
   ]},

  {n:26,zh:'收拾',py:'shōushi',pos:'Động từ',vn:'thu dọn, thu xếp',em:'🧹',lesson:5,
   explain:['Dọn dẹp, sắp xếp (≈ 整理 Bài 15). 收拾行李, 收拾房间, 收拾好.'],
   usage:'收拾行李, 收拾房间, 收拾一下.',
   collo:['收拾好行李','收拾房间','抽时间收拾一下'],
   ex_zh:'放假的时候，我会收拾好行李，带上地图，买张火车票，向目的地出发。',ex_py:'Fàng jià de shíhou, wǒ huì shōushi hǎo xíngli, dàishàng dìtú, mǎi zhāng huǒchēpiào, xiàng mùdìdì chūfā.',ex_vn:'Khi nghỉ, tôi thu dọn hành lý, mang bản đồ, mua vé tàu, xuất phát đến điểm đến.',
   exList:[
     {zh:'放假的时候，我会收拾好行李，带上地图，买张火车票，向目的地出发。',py:'Fàng jià de shíhou, wǒ huì shōushi hǎo xíngli, dàishàng dìtú, mǎi zhāng huǒchēpiào, xiàng mùdìdì chūfā.',vn:'Khi nghỉ, tôi thu dọn hành lý, mang bản đồ, mua vé tàu, xuất phát đến điểm đến.'},
     {zh:'你回到家就把衣服、书包什么的扔在沙发上，房间太乱了，你抽时间收拾一下吧。',py:'Nǐ huídào jiā jiù bǎ yīfu, shūbāo shénme de rēng zài shāfā shang, fángjiān tài luàn le, nǐ chōu shíjiān shōushi yíxià ba.',vn:'Về nhà là bạn ném quần áo, cặp sách lên sofa, phòng bừa quá, tranh thủ dọn đi.'},
     {zh:'好的，我现在就收拾，一定弄得整整齐齐。',py:'Hǎo de, wǒ xiànzài jiù shōushi, yídìng nòng de zhěngzhěng-qíqí.',vn:'Được, tôi dọn ngay, nhất định làm gọn gàng ngăn nắp.'},
   ],
   hanzi:[
     {c:'拾',p:'shi',type:'左右结构 · Trái-phải',st:9,ord:'扌 trái → 合 phải',rad:'扌 (thủ)',mean:'nhặt',
      tip:'Tay 扌 + 合 → tay gom lại → NHẶT, THẬP. 收拾 = thu nhặt = dọn dẹp. Cũng là số 10 viết kép.',
      cf:'合 (hé – hợp)',w:'收拾 / 拾'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Về nhà là bạn ném quần áo, cặp sách lên sofa, phòng bừa quá, tranh thủ dọn đi.',answer:'你回到家就把衣服、书包什么的扔在沙发上，房间太乱了，你抽时间收拾一下吧。',answerPy:'Nǐ huídào jiā jiù bǎ yīfu, shūbāo shénme de rēng zài shāfā shang, fángjiān tài luàn le, nǐ chōu shíjiān shōushi yíxià ba.',
      note:'什么的 (Bài 14), 扔 (Bài 14), 乱 (Bài 14), 抽 (Bài 7).'},
   ]},

  {n:27,zh:'出发',py:'chūfā',pos:'Động từ',vn:'xuất phát, khởi hành',em:'🚀',lesson:5,
   explain:['Bắt đầu đi. 向……出发, 几点出发, 马上出发. Trái với 到达.'],
   usage:'向目的地出发, 几点出发, 一放假就出发.',
   collo:['向目的地出发','马上出发','一放假就出发'],
   ex_zh:'买张火车票，向目的地出发。',ex_py:'Mǎi zhāng huǒchēpiào, xiàng mùdìdì chūfā.',ex_vn:'Mua vé tàu, xuất phát đến điểm đến.',
   exList:[
     {zh:'放假的时候，我会收拾好行李，带上地图，买张火车票，向目的地出发。',py:'Fàng jià de shíhou, wǒ huì shōushi hǎo xíngli, dàishàng dìtú, mǎi zhāng huǒchēpiào, xiàng mùdìdì chūfā.',vn:'Khi nghỉ, tôi thu dọn hành lý, mang bản đồ, mua vé tàu, xuất phát đến điểm đến.'},
     {zh:'时间不变，地点改在西门了。快去整理一下东西吧，我们马上出发。',py:'Shíjiān bú biàn, dìdiǎn gǎi zài xīmén le. Kuài qù zhěnglǐ yíxià dōngxi ba, wǒmen mǎshàng chūfā.',vn:'Giờ không đổi, địa điểm đổi sang cổng tây. Mau dọn đồ, chúng ta xuất phát ngay.'},
     {zh:'你认为理想的旅行方式是什么样的？一放假就出发吗？',py:'Nǐ rènwéi lǐxiǎng de lǚxíng fāngshì shì shénme yàng de? Yí fàng jià jiù chūfā ma?',vn:'Bạn cho rằng cách du lịch lý tưởng là thế nào? Vừa nghỉ là lên đường?'},
   ],
   hanzi:[
     {c:'发',p:'fā',type:'独体字 · Chữ đơn thể',st:5,ord:'𠂇 → 又 → 丶',rad:'又 (hựu)',mean:'phát',
      tip:'Giản thể của 發 → PHÁT. 出发, 发生 (Bài 7), 发展 (Bài 10), 沙发 (Bài 11); đọc fà = tóc (理发 Bài 19).',
      cf:'友 (yǒu – bạn)',w:'出发 / 发生 / 发展 / 理发 (fà)'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giờ không đổi, địa điểm đổi sang cổng tây. Mau dọn đồ, chúng ta xuất phát ngay.',answer:'时间不变，地点改在西门了。快去整理一下东西吧，我们马上出发。',answerPy:'Shíjiān bú biàn, dìdiǎn gǎi zài xīmén le. Kuài qù zhěnglǐ yíxià dōngxi ba, wǒmen mǎshàng chūfā.',
      note:'地点 (Bài 18), 整理 (Bài 15).'},
   ]},

  {n:28,zh:'辣',py:'là',pos:'Tính từ',vn:'cay',em:'🌶️',lesson:5,
   explain:['Vị cay. 太辣了, 咸辣, 香辣, 酸辣. 湖南菜的特点就是辣.'],
   usage:'很辣, 太辣了, 又辣又香.',
   collo:['湖南菜的特点就是辣','咸辣、香辣和酸辣','不能吃辣'],
   ex_zh:'湖南菜的特点就是辣，与其他地方的辣不同，湖南菜的辣主要是咸辣、香辣和酸辣。',ex_py:'Húnán cài de tèdiǎn jiù shì là, yǔ qítā dìfang de là bù tóng, Húnán cài de là zhǔyào shì xián là, xiāng là hé suān là.',ex_vn:'Đặc điểm món Hồ Nam là cay, khác cái cay nơi khác, cay Hồ Nam chủ yếu là cay mặn, cay thơm và cay chua.',
   exList:[
     {zh:'湖南菜的特点就是辣，与其他地方的辣不同，湖南菜的辣主要是咸辣、香辣和酸辣。',py:'Húnán cài de tèdiǎn jiù shì là, yǔ qítā dìfang de là bù tóng, Húnán cài de là zhǔyào shì xián là, xiāng là hé suān là.',vn:'Đặc điểm món Hồ Nam là cay, khác cái cay nơi khác, cay Hồ Nam chủ yếu là cay mặn, cay thơm và cay chua.'},
     {zh:'我不能吃辣，一吃辣的东西就咳嗽。',py:'Wǒ bù néng chī là, yì chī là de dōngxi jiù késou.',vn:'Tôi không ăn cay được, vừa ăn cay là ho.'},
     {zh:'四川菜又麻又辣，很多外国人也爱吃。',py:'Sìchuān cài yòu má yòu là, hěn duō wàiguó rén yě ài chī.',vn:'Món Tứ Xuyên vừa tê vừa cay, nhiều người nước ngoài cũng thích.'},
   ],
   hanzi:[
     {c:'辣',p:'là',type:'左右结构 · Trái-phải',st:14,ord:'辛 trái → 束 phải',rad:'辛 (tân)',mean:'cay',
      tip:'辛(cay) + 束 → CAY. Năm vị: 酸 (chua), 甜 (ngọt), 苦 (đắng, Bài 13), 辣 (cay), 咸 (mặn, Bài 18).',
      cf:'辛 (xīn – 辛苦 Bài 4)',w:'辣 / 辣椒 / 酸辣'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi không ăn cay được, vừa ăn cay là ho.',answer:'我不能吃辣，一吃辣的东西就咳嗽。',answerPy:'Wǒ bù néng chī là, yì chī là de dōngxi jiù késou.',
      note:'一……就 (ngữ pháp bài), 咳嗽 (Bài 7).'},
   ]},

  {n:29,zh:'香',py:'xiāng',pos:'Tính từ',vn:'thơm',em:'🌸',lesson:5,
   explain:['Mùi/vị thơm ngon. 很香, 香辣, 饺子很香, 睡得很香 (ngủ ngon).'],
   usage:'很香, 香辣, 饭菜很香.',
   collo:['香辣','饺子很香','花很香'],
   ex_zh:'湖南菜的辣主要是咸辣、香辣和酸辣。',ex_py:'Húnán cài de là zhǔyào shì xián là, xiāng là hé suān là.',ex_vn:'Cay Hồ Nam chủ yếu là cay mặn, cay thơm và cay chua.',
   exList:[
     {zh:'湖南菜的辣主要是咸辣、香辣和酸辣。',py:'Húnán cài de là zhǔyào shì xián là, xiāng là hé suān là.',vn:'Cay Hồ Nam chủ yếu là cay mặn, cay thơm và cay chua.'},
     {zh:'饺子很香，不过鸡蛋汤稍微有点儿咸。',py:'Jiǎozi hěn xiāng, búguò jīdàn tāng shāowēi yǒudiǎnr xián.',vn:'Sủi cảo rất thơm, nhưng canh trứng hơi mặn.'},
     {zh:'这几天香山特别热闹，秋天的红叶吸引了很多游客。',py:'Zhè jǐ tiān Xiāng Shān tèbié rènao, qiūtiān de hóngyè xīyǐnle hěn duō yóukè.',vn:'Mấy hôm nay Hương Sơn rất náo nhiệt, lá đỏ mùa thu thu hút nhiều du khách.'},
   ],
   hanzi:[
     {c:'香',p:'xiāng',type:'上下结构 · Trên-dưới',st:9,ord:'禾 trên → 日 dưới',rad:'香 (hương)',mean:'thơm',
      tip:'Lúa 禾 + 日 → hương lúa chín → THƠM, HƯƠNG. 香山 (Bài 17), 香蕉, 香港.',
      cf:'季 (jì – mùa)',w:'香 / 香山 / 香蕉 / 香港'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sủi cảo rất thơm, nhưng canh trứng hơi mặn.',answer:'饺子很香，不过鸡蛋汤稍微有点儿咸。',answerPy:'Jiǎozi hěn xiāng, búguò jīdàn tāng shāowēi yǒudiǎnr xián.',
      note:'饺子 (Bài 19), 稍微 (Bài 13), 咸 (Bài 18).'},
   ]},

  {n:30,zh:'酸',py:'suān',pos:'Tính từ',vn:'chua',em:'🍋',lesson:5,
   explain:['Vị chua. 酸辣, 太酸了, 又酸又甜. Cũng nghĩa "mỏi": 腿酸.'],
   usage:'很酸, 酸辣, 又酸又甜.',
   collo:['酸辣','又酸又甜','太酸了'],
   ex_zh:'湖南菜的辣主要是咸辣、香辣和酸辣。',ex_py:'Húnán cài de là zhǔyào shì xián là, xiāng là hé suān là.',ex_vn:'Cay Hồ Nam chủ yếu là cay mặn, cay thơm và cay chua.',
   exList:[
     {zh:'湖南菜的辣主要是咸辣、香辣和酸辣。虽然全国各地都有湖南饭馆儿，但最好还是直接去那里尝一尝。',py:'Húnán cài de là zhǔyào shì xián là, xiāng là hé suān là. Suīrán quánguó gè dì dōu yǒu Húnán fànguǎnr, dàn zuìhǎo háishi zhíjiē qù nàli cháng yi cháng.',vn:'Cay Hồ Nam chủ yếu là cay mặn, cay thơm và cay chua. Tuy khắp nơi có quán Hồ Nam, tốt nhất vẫn đến tận nơi nếm thử.'},
     {zh:'这种水果又酸又甜，味道很特别。',py:'Zhè zhǒng shuǐguǒ yòu suān yòu tián, wèidào hěn tèbié.',vn:'Loại quả này vừa chua vừa ngọt, vị rất đặc biệt.'},
     {zh:'爬了一天山，腿酸得走不动了。',py:'Pále yì tiān shān, tuǐ suān de zǒubudòng le.',vn:'Leo núi cả ngày, chân mỏi không đi nổi.'},
   ],
   hanzi:[
     {c:'酸',p:'suān',type:'左右结构 · Trái-phải',st:14,ord:'酉 trái → 夋 phải',rad:'酉 (dậu)',mean:'chua',
      tip:'Bộ 酉 (rượu, lên men) + 夋 → vị lên men → CHUA. 醒 (Bài 15) cũng bộ 酉.',
      cf:'醒 (xǐng – tỉnh)',w:'酸 / 酸辣 / 酸奶'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy khắp nơi có quán Hồ Nam, tốt nhất vẫn đến tận nơi nếm thử.',answer:'虽然全国各地都有湖南饭馆儿，但最好还是直接去那里尝一尝。',answerPy:'Suīrán quánguó gè dì dōu yǒu Húnán fànguǎnr, dàn zuìhǎo háishi zhíjiē qù nàli cháng yi cháng.',
      note:'直接 (Bài 12), 尝 (Bài 7), 最好 (Bài 3).'},
   ]},
];

var wuData = [
  {img:'🧹',label:'收拾',py:'shōushi',letter:'A'},
  {img:'🍢',label:'小吃',py:'xiǎochī',letter:'B'},
  {img:'🦆',label:'烤鸭',py:'kǎoyā',letter:'C'},
  {img:'⛽',label:'加油站',py:'jiāyóuzhàn',letter:'D'},
  {img:'🛣️',label:'高速公路',py:'gāosù gōnglù',letter:'E'},
  {img:'🥂',label:'干杯',py:'gān bēi',letter:'F'},
];

var dialogData = [
  {scene:'课文1 · 小张去北京，朋友送小张去机场',
   preQuiz:[{q:'小张坐的航班时间发生了什么变化？',opts:['提前了一个小时','推迟了一个小时','没有变化'],ans:1},{q:'加油站在哪儿？',opts:['过了长江大桥往右一拐','机场旁边','高速公路上'],ans:0},{q:'小张到了首都机场以后会做什么？',opts:['给朋友发短信','给朋友打电话','什么都不做'],ans:0}],
   lines:[
     {sp:0,zh:'该加油了，去机场的路上有加油站吗？',py:'Gāi jiā yóu le, qù jīchǎng de lùshang yǒu jiāyóuzhàn ma?',vn:'Nên đổ xăng rồi, trên đường ra sân bay có trạm xăng không?'},
     {sp:1,zh:'我记得过了长江大桥往右一拐就有一个，大概有四五公里远。',py:'Wǒ jìde guòle Chángjiāng Dàqiáo wǎng yòu yì guǎi jiù yǒu yí ge, dàgài yǒu sì-wǔ gōnglǐ yuǎn.',vn:'Tôi nhớ qua cầu Trường Giang rẽ phải là có một trạm, khoảng bốn năm km.'},
     {sp:0,zh:'好，那我就放心了，别开着开着没油了。你去北京的航班是几点的？时间来得及吗？',py:'Hǎo, nà wǒ jiù fàng xīn le, bié kāizhe kāizhe méi yóu le. Nǐ qù Běijīng de hángbān shì jǐ diǎn de? Shíjiān láidejí ma?',vn:'Được, vậy tôi yên tâm, đừng đang lái thì hết xăng. Chuyến bay đi Bắc Kinh mấy giờ? Kịp không?'},
     {sp:1,zh:'航班本来是十点的，后来机场网站上通知推迟了一个小时，所以九点半以前到就应该没问题。',py:'Hángbān běnlái shì shí diǎn de, hòulái jīchǎng wǎngzhàn shang tōngzhī tuīchíle yí ge xiǎoshí, suǒyǐ jiǔ diǎn bàn yǐqián dào jiù yīnggāi méi wèntí.',vn:'Chuyến bay vốn 10 giờ, sau đó trang web sân bay thông báo hoãn một tiếng, nên đến trước 9 rưỡi là ổn.'},
     {sp:0,zh:'刚才我还有点儿担心来不及呢。一会儿加完油，往西走五百米就能上高速公路。走高速公路大约半个小时就到了。',py:'Gāngcái wǒ hái yǒudiǎnr dānxīn láibují ne. Yíhuìr jiāwán yóu, wǎng xī zǒu wǔbǎi mǐ jiù néng shàng gāosù gōnglù. Zǒu gāosù gōnglù dàyuē bàn ge xiǎoshí jiù dào le.',vn:'Vừa rồi tôi còn hơi lo không kịp. Lát đổ xăng xong, đi về phía tây 500 mét là lên cao tốc. Đi cao tốc khoảng nửa tiếng là đến.'},
     {sp:1,zh:'一会儿我自己进去换登机牌，你就不用送我了，等我到了首都机场再给你发短信。',py:'Yíhuìr wǒ zìjǐ jìnqu huàn dēngjīpái, nǐ jiù búyòng sòng wǒ le, děng wǒ dàole Shǒudū Jīchǎng zài gěi nǐ fā duǎnxìn.',vn:'Lát tôi tự vào đổi thẻ lên máy bay, bạn không cần tiễn, đợi tôi đến sân bay Thủ Đô sẽ nhắn tin.'},
   ]},
  {scene:'课文2 · 孙月和丈夫计划放寒假带女儿去旅行',
   preQuiz:[{q:'他们想在什么时候告诉女儿去旅行的消息？',opts:['女儿一回来就告诉她','中午吃烤鸭祝贺她时','放假那天'],ans:1},{q:'他们打算带女儿去哪儿旅游？',opts:['广西','北京','上海'],ans:0},{q:'广西的冬天怎么样？',opts:['非常暖和','非常冷','经常下雪'],ans:0}],
   lines:[
     {sp:0,zh:'女儿下个星期就要放寒假了，到时候咱们带她去旅游，放松放松，怎么样？',py:'Nǚ\'ér xià ge xīngqī jiù yào fàng hánjià le, dào shíhou zánmen dài tā qù lǚyóu, fàngsōng fàngsōng, zěnmeyàng?',vn:'Tuần sau con gái nghỉ đông rồi, đến lúc đó chúng ta đưa con đi du lịch, thư giãn chút, thế nào?'},
     {sp:1,zh:'平时女儿那么多课，总是说想去旅行，但是没时间，怪可怜的。这次放假咱们带她去哪儿玩儿比较好呢？',py:'Píngshí nǚ\'ér nàme duō kè, zǒngshì shuō xiǎng qù lǚxíng, dànshì méi shíjiān, guài kělián de. Zhè cì fàng jià zánmen dài tā qù nǎr wánr bǐjiào hǎo ne?',vn:'Bình thường con nhiều bài học, luôn nói muốn du lịch nhưng không có thời gian, tội nghiệp thật. Lần nghỉ này đưa con đi đâu chơi thì tốt?'},
     {sp:0,zh:'去年我同事带她儿子去广西玩儿了一趟，听说很不错，我们就去广西吧。',py:'Qùnián wǒ tóngshì dài tā érzi qù Guǎngxī wánrle yí tàng, tīngshuō hěn búcuò, wǒmen jiù qù Guǎngxī ba.',vn:'Năm ngoái đồng nghiệp đưa con trai đi Quảng Tây một chuyến, nghe nói rất tốt, chúng ta đi Quảng Tây đi.'},
     {sp:1,zh:'好啊，那里的气候和北方很不同，即使是冬天，也非常暖和，还能吃到许多新鲜的水果。等女儿一回来我就告诉她这个好消息。',py:'Hǎo a, nàli de qìhòu hé běifāng hěn bù tóng, jíshǐ shì dōngtiān, yě fēicháng nuǎnhuo, hái néng chīdào xǔduō xīnxiān de shuǐguǒ. Děng nǚ\'ér yì huílai wǒ jiù gàosu tā zhège hǎo xiāoxi.',vn:'Được, khí hậu ở đó khác miền Bắc, dù là mùa đông cũng rất ấm, còn ăn được nhiều hoa quả tươi. Đợi con vừa về là tôi báo tin vui này.'},
     {sp:0,zh:'先别着急说。中午我们不是要去对面的饭店吃烤鸭，祝贺她考试成绩都合格吗？那时候再告诉她，不是更好？',py:'Xiān bié zháojí shuō. Zhōngwǔ wǒmen bú shì yào qù duìmiàn de fàndiàn chī kǎoyā, zhùhè tā kǎoshì chéngjì dōu hégé ma? Nà shíhou zài gàosu tā, bú shì gèng hǎo?',vn:'Khoan vội nói. Trưa nay chẳng phải đến nhà hàng đối diện ăn vịt quay, chúc mừng con thi đạt hết sao? Lúc đó nói chẳng phải tốt hơn?'},
     {sp:1,zh:'好主意，到时她知道了肯定特别开心。',py:'Hǎo zhǔyi, dào shí tā zhīdàole kěndìng tèbié kāixīn.',vn:'Ý hay, lúc đó con biết chắc chắn rất vui.'},
   ]},
  {scene:'课文3 · 安娜向马克介绍去丽江旅行的经验',
   preQuiz:[{q:'什么时候去丽江旅游最好？',opts:['春天和秋天','每年12月到第二年3月','夏天'],ans:1},{q:'照片上和小夏干杯的人是谁？',opts:['导游','少数民族的朋友','小夏的妹妹'],ans:0},{q:'小夏丢了什么？导游帮他找到了吗？',opts:['存包的钥匙，找到了','护照，没找到','手机，找到了'],ans:0}],
   lines:[
     {sp:0,zh:'这么多照片，都是你这次去丽江旅行时照的？那里的自然风景可真美！',py:'Zhème duō zhàopiàn, dōu shì nǐ zhè cì qù Lìjiāng lǚxíng shí zhào de? Nàli de zìrán fēngjǐng kě zhēn měi!',vn:'Nhiều ảnh thế, đều chụp lúc bạn đi Lệ Giang à? Phong cảnh tự nhiên ở đó đẹp thật!'},
     {sp:1,zh:'是啊，小城四季的风景都很美，而且环境保护得也很好，因此每年都吸引着成千上万的游客去那儿旅游。',py:'Shì a, xiǎo chéng sìjì de fēngjǐng dōu hěn měi, érqiě huánjìng bǎohù de yě hěn hǎo, yīncǐ měi nián dōu xīyǐnzhe chéngqiān-shàngwàn de yóukè qù nàr lǚyóu.',vn:'Đúng, thị trấn nhỏ bốn mùa đều đẹp, môi trường bảo vệ tốt, nên mỗi năm thu hút hàng nghìn hàng vạn du khách.'},
     {sp:0,zh:'这张照片上和你干杯的那个人是少数民族吗？她打扮得真漂亮。',py:'Zhè zhāng zhàopiàn shang hé nǐ gān bēi de nàge rén shì shǎoshù mínzú ma? Tā dǎban de zhēn piàoliang.',vn:'Người cạn ly với bạn trong ảnh là dân tộc thiểu số à? Cô ấy trang điểm đẹp thật.'},
     {sp:1,zh:'她是我们的导游，不是少数民族。一路上她给我们讲了很多有趣的笑话。有一次我把存包的钥匙丢了，最后还是她帮我找到的。这张照片就是找到钥匙后，我们一起照的。',py:'Tā shì wǒmen de dǎoyóu, bú shì shǎoshù mínzú. Yí lù shang tā gěi wǒmen jiǎngle hěn duō yǒuqù de xiàohua. Yǒu yí cì wǒ bǎ cún bāo de yàoshi diū le, zuìhòu háishi tā bāng wǒ zhǎodào de. Zhè zhāng zhàopiàn jiù shì zhǎodào yàoshi hòu, wǒmen yìqǐ zhào de.',vn:'Cô ấy là hướng dẫn viên, không phải dân tộc thiểu số. Dọc đường cô kể nhiều truyện cười. Có lần tôi mất chìa khóa tủ gửi đồ, cô ấy giúp tìm được. Ảnh này chụp chung sau khi tìm được chìa.'},
     {sp:0,zh:'明年我有机会也去那儿看看，到时把你的导游介绍给我吧。究竟哪个季节去丽江旅游比较好呢？',py:'Míngnián wǒ yǒu jīhuì yě qù nàr kànkan, dào shí bǎ nǐ de dǎoyóu jièshào gěi wǒ ba. Jiūjìng nǎ ge jìjié qù Lìjiāng lǚyóu bǐjiào hǎo ne?',vn:'Năm sau có dịp tôi cũng đi, lúc đó giới thiệu hướng dẫn viên cho tôi nhé. Rốt cuộc mùa nào đi Lệ Giang tốt?'},
     {sp:1,zh:'那儿最美的季节是春天和秋天，不过那时候人比较多。稍微好一点儿的时间是每年12月到第二年3月。这段时间去丽江的话，无论交通还是吃、住都很便宜。',py:'Nàr zuì měi de jìjié shì chūntiān hé qiūtiān, búguò nà shíhou rén bǐjiào duō. Shāowēi hǎo yìdiǎnr de shíjiān shì měinián shí\'èryuè dào dì-èr nián sānyuè. Zhè duàn shíjiān qù Lìjiāng dehuà, wúlùn jiāotōng háishi chī, zhù dōu hěn piányi.',vn:'Mùa đẹp nhất là xuân và thu, nhưng lúc đó đông người. Thời gian tốt hơn chút là tháng 12 đến tháng 3 năm sau. Đi lúc đó, giao thông hay ăn ở đều rẻ.'},
   ]},
  {scene:'课文4 · Bắc và Nam Trung Quốc',
   preQuiz:[{q:'三四月份从北方坐火车到南方，一路上会看到什么？',opts:['树一棵一棵地变绿，北方还下雪，南方已经到处是绿色','到处都是雪','什么变化都没有'],ans:0},{q:'中国南北距离大约多少公里？',opts:['5500公里','550公里','55000公里'],ans:0},{q:'南方菜的什么味道鲜美，很多北方人喜欢？',opts:['汤','面条','饺子'],ans:0}],
   lines:[
     {sp:0,zh:'中国南北距离约5500公里，因此南北气候有很大区别。每年三四月份的时候，如果从北方坐火车到南方去旅游，一路上你会发现，不同的地方有不同的风景：窗外的树一棵一棵地变绿，北方也许还下着雪，南方却已经到处都是绿色了。',py:'Zhōngguó nán běi jùlí yuē wǔqiān wǔbǎi gōnglǐ, yīncǐ nán běi qìhòu yǒu hěn dà qūbié. Měi nián sān-sì yuèfèn de shíhou, rúguǒ cóng běifāng zuò huǒchē dào nánfāng qù lǚyóu, yí lù shang nǐ huì fāxiàn, bù tóng de dìfang yǒu bù tóng de fēngjǐng: chuāngwài de shù yì kē yì kē de biàn lǜ, běifāng yěxǔ hái xiàzhe xuě, nánfāng què yǐjīng dàochù dōu shì lǜsè le.',vn:'Trung Quốc Bắc Nam cách khoảng 5500 km, nên khí hậu khác nhiều. Tháng 3–4, nếu đi tàu từ Bắc vào Nam, dọc đường bạn thấy mỗi nơi một cảnh: cây ngoài cửa sổ từng cây xanh dần, Bắc có lẽ còn tuyết, Nam đã xanh khắp nơi.'},
     {sp:0,zh:'南方菜很有特点，特别是汤，味道鲜美，很多北方人都喜欢喝。另外，南方和北方的语言也有很大不同。比如你跟上海人对话时，会发现上海话听起来就像外语一样。虽然上海人也会讲普通话，可是仔细听，还是有上海味儿。',py:'Nánfāng cài hěn yǒu tèdiǎn, tèbié shì tāng, wèidào xiānměi, hěn duō běifāng rén dōu xǐhuan hē. Lìngwài, nánfāng hé běifāng de yǔyán yě yǒu hěn dà bù tóng. Bǐrú nǐ gēn Shànghǎi rén duìhuà shí, huì fāxiàn Shànghǎi huà tīng qilai jiù xiàng wàiyǔ yíyàng. Suīrán Shànghǎi rén yě huì jiǎng pǔtōnghuà, kěshì zǐxì tīng, háishi yǒu Shànghǎi wèir.',vn:'Món Nam rất đặc sắc, nhất là canh, vị tươi ngon, nhiều người Bắc thích. Ngoài ra ngôn ngữ Nam Bắc cũng khác nhiều. Ví dụ đối thoại với người Thượng Hải, tiếng Thượng Hải nghe như ngoại ngữ. Tuy họ nói tiếng phổ thông, nghe kỹ vẫn có giọng Thượng Hải.'},
   ]},
  {scene:'课文5 · Du lịch và món ăn Hồ Nam',
   preQuiz:[{q:'湖南菜的特点是什么？',opts:['甜','辣','清淡'],ans:1},{q:'对作者来说，旅行最重要的是什么？',opts:['能尝到各地有名的小吃','能照很多照片','能买很多东西'],ans:0},{q:'每次旅行结束后，作者会怎么样？',opts:['精神百倍地开始工作','很累，不想工作','马上再去旅行'],ans:0}],
   lines:[
     {sp:0,zh:'一个人有时间一定要去旅行，旅行不仅能丰富一个人的经历，而且是很好的减压方法。但对我来说，最重要的是旅行能让我有机会尝到各地有名的小吃。放假的时候，我会收拾好行李，带上地图，买张火车票，向目的地出发。',py:'Yí ge rén yǒu shíjiān yídìng yào qù lǚxíng, lǚxíng bùjǐn néng fēngfù yí ge rén de jīnglì, érqiě shì hěn hǎo de jiǎnyā fāngfǎ. Dàn duì wǒ lái shuō, zuì zhòngyào de shì lǚxíng néng ràng wǒ yǒu jīhuì chángdào gè dì yǒumíng de xiǎochī. Fàng jià de shíhou, wǒ huì shōushi hǎo xíngli, dàishàng dìtú, mǎi zhāng huǒchēpiào, xiàng mùdìdì chūfā.',vn:'Có thời gian nhất định phải du lịch, du lịch làm phong phú trải nghiệm và giảm áp lực. Với tôi, quan trọng nhất là được nếm món ăn vặt nổi tiếng các nơi. Khi nghỉ, tôi dọn hành lý, mang bản đồ, mua vé tàu, xuất phát.'},
     {sp:0,zh:'说起吃的东西，给我印象最深的是湖南菜。湖南菜的特点就是辣，与其他地方的辣不同，湖南菜的辣主要是咸辣、香辣和酸辣。虽然全国各地都有湖南饭馆儿，但最好还是直接去那里尝一尝。每次旅行结束后，我都会精神百倍地开始我的工作。',py:'Shuōqǐ chī de dōngxi, gěi wǒ yìnxiàng zuì shēn de shì Húnán cài. Húnán cài de tèdiǎn jiù shì là, yǔ qítā dìfang de là bù tóng, Húnán cài de là zhǔyào shì xián là, xiāng là hé suān là. Suīrán quánguó gè dì dōu yǒu Húnán fànguǎnr, dàn zuìhǎo háishi zhíjiē qù nàli cháng yi cháng. Měi cì lǚxíng jiéshù hòu, wǒ dōu huì jīngshén bǎibèi de kāishǐ wǒ de gōngzuò.',vn:'Nói đến đồ ăn, ấn tượng sâu nhất là món Hồ Nam. Đặc điểm là cay, khác nơi khác, chủ yếu cay mặn, cay thơm, cay chua. Tuy khắp nơi có quán Hồ Nam, tốt nhất đến tận nơi nếm. Sau mỗi chuyến đi, tôi tràn đầy tinh thần bắt đầu công việc.'},
   ]},
];

var matchData = [
  {left:'该',right:'该加油了'},
  {left:'推迟',right:'推迟了一个小时'},
  {left:'上',right:'上高速公路'},
  {left:'换',right:'换登机牌'},
  {left:'怪',right:'怪可怜的'},
  {left:'祝贺',right:'祝贺她考试合格'},
  {left:'讲',right:'讲笑话'},
  {left:'一棵',right:'一棵一棵地变绿'},
  {left:'收拾',right:'收拾好行李'},
  {left:'向目的地',right:'向目的地出发'},
];

var fillData = [
  {pre:'该加油了，去机场的路上有',blank:'',post:'吗？',hint:'jiāyóuzhàn',ans:'加油站'},
  {pre:'你去北京的',blank:'',post:'是几点的？时间来得及吗？',hint:'hángbān',ans:'航班'},
  {pre:'后来机场网站上通知',blank:'',post:'了一个小时。',hint:'tuīchí',ans:'推迟'},
  {pre:'往西走五百米就能上',blank:'',post:'。',hint:'gāosù gōnglù',ans:'高速公路'},
  {pre:'一会儿我自己进去换',blank:'',post:'，你就不用送我了。',hint:'dēngjīpái',ans:'登机牌'},
  {pre:'总是说想去旅行，但是没时间，怪',blank:'',post:'的。',hint:'kělián',ans:'可怜'},
  {pre:'中午我们不是要去',blank:'',post:'的饭店吃烤鸭吗？',hint:'duìmiàn',ans:'对面'},
  {pre:'',blank:'',post:'她考试成绩都合格。',hint:'zhùhè',ans:'祝贺'},
  {pre:'这张照片上和你',blank:'',post:'的那个人是少数民族吗？',hint:'gān bēi',ans:'干杯'},
  {pre:'她',blank:'',post:'得真漂亮。',hint:'dǎban',ans:'打扮'},
  {pre:'有一次我把存包的',blank:'',post:'丢了。',hint:'yàoshi',ans:'钥匙'},
  {pre:'',blank:'',post:'哪个季节去丽江旅游比较好呢？',hint:'jiūjìng',ans:'究竟'},
  {pre:'窗外的树一',blank:'',post:'一棵地变绿。',hint:'kē',ans:'棵'},
  {pre:'虽然上海人也会讲',blank:'',post:'，可是仔细听，还是有上海味儿。',hint:'pǔtōnghuà',ans:'普通话'},
  {pre:'放假的时候，我会',blank:'',post:'好行李，向目的地出发。',hint:'shōushi',ans:'收拾'},
];

var sortData = [
  {words:['别','开着','开着','没','油','了'],ans:'别开着开着没油了',audio:'/audio/hsk4-bai-20/sort-1.mp3'},
  {words:['等','女儿','一','回来','我','就','告诉','她','这个','好','消息'],ans:'等女儿一回来我就告诉她这个好消息',audio:'/audio/hsk4-bai-20/sort-2.mp3'},
  {words:['究竟','哪个','季节','去','丽江','旅游','比较','好','呢','？'],ans:'究竟哪个季节去丽江旅游比较好呢？',audio:'/audio/hsk4-bai-20/sort-3.mp3'},
  {words:['上海话','听','起来','就','像','外语','一样'],ans:'上海话听起来就像外语一样',audio:'/audio/hsk4-bai-20/sort-4.mp3'},
  {words:['说起','吃','的','东西','，','给','我','印象','最','深','的','是','湖南菜'],ans:'说起吃的东西，给我印象最深的是湖南菜',audio:'/audio/hsk4-bai-20/sort-5.mp3'},
  {words:['每年','都','吸引','着','成千上万','的','游客'],ans:'每年都吸引着成千上万的游客',audio:'/audio/hsk4-bai-20/sort-6.mp3'},
  {words:['无论','交通','还是','吃','、','住','都','很','便宜'],ans:'无论交通还是吃、住都很便宜',audio:'/audio/hsk4-bai-20/sort-7.mp3'},
  {words:['旅行','不仅','能','丰富','一个','人','的','经历','，','而且','是','很好','的','减压','方法'],ans:'旅行不仅能丰富一个人的经历，而且是很好的减压方法',audio:'/audio/hsk4-bai-20/sort-8.mp3'},
];

var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'乘客，您好！我们很抱歉地通知您，由于天气原因，您乘坐的CA1864____推迟起飞。',
   opts:['合格','航班','对话','可怜'],ans:1,
   exp:'航班 (chuyến bay) — CA1864航班. Câu có 抱歉 (Bài 14), 由于 (Bài 10), 乘坐 (Bài 14). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'我走在回家的路上，突然发现商店门口有一只____的小狗，我心里一软，就把它抱回了家。',
   opts:['合格','航班','可怜','旅行'],ans:2,
   exp:'可怜 (đáng thương) — 可怜的小狗. Câu có 突然 (Bài 8), 抱 (Bài 17). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'欢迎大家来到美丽的海南，____中有任何事您都可以找我商量，希望我的服务能让您满意。',
   opts:['合格','对话','可怜','旅行'],ans:3,
   exp:'旅行 (chuyến du lịch) — 旅行中. Câu có 任何 (Bài 11), 商量 (Bài 12), 满意 (Bài 6). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'"活到老，学到老"。在现代社会中，我们必须坚持学习。努力获得新的知识，才能适应社会的发展速度，做一个____的现代人。',
   opts:['合格','航班','对话','旅行'],ans:0,
   exp:'合格 (đạt chuẩn) — 合格的现代人. Câu có 坚持 (Bài 9), 获得 (Bài 10), 适应 (Bài 8), 速度 (Bài 14). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'上午来应聘的那个小伙子是学电子技术的，成绩很优秀，通过面试时和他的____，感觉他的性格也不错，我觉得他挺适合这份工作的。',
   opts:['合格','航班','对话','可怜'],ans:2,
   exp:'对话 (đối thoại) — 和他的对话. Câu có 小伙子 (Bài 16), 技术 (Bài 18), 面试 (Bài 10), 性格 (Bài 8). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：你的____水平考试考得怎么样？B：我这次没考，因为我错过了报名时间，只能等下次了。',
   opts:['祝贺','笑话','打扮','普通话'],ans:3,
   exp:'普通话 (tiếng phổ thông) — 普通话水平考试. Câu có 错过 (Bài 4), 报名 (Bài 16). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：今晚我穿这条裙子怎么样？今年最流行的。B：很漂亮，不过我觉得这种____参加正式的舞会可能还是不太合适。',
   opts:['祝贺','笑话','打扮','推迟'],ans:2,
   exp:'打扮 (kiểu ăn diện) — 这种打扮. Câu có 流行 (Bài 5), 正式 (Bài 6), 合适 (Bài 15). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：小高，听说你出国的时间____了？B：是的，我的签证还没办好，大概得10月底才能走。',
   opts:['祝贺','笑话','普通话','推迟'],ans:3,
   exp:'推迟 (hoãn) — 时间推迟了. Câu có 签证 (Bài 16), 大概 (Bài 13), 月底 (Bài 11). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：这次活动非常成功，我们顺利完成了公司交给的任务。B：辛苦了，____你们！来，干一杯！',
   opts:['祝贺','笑话','打扮','推迟'],ans:0,
   exp:'祝贺 (chúc mừng) — 祝贺你们. Câu có 顺利 (Bài 9), 任务 (Bài 12), 辛苦 (Bài 4). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：你这一肚子的____，都是从哪儿听来的？B：有个网站上有很多，看到有趣的我就记下来。我把网址发给你，你也去看看吧。',
   opts:['祝贺','笑话','打扮','普通话'],ans:1,
   exp:'笑话 (truyện cười) — 一肚子的笑话. Câu có 肚子 (Bài 7), 网站 (Bài 18), 有趣 (Bài 13). Các từ còn lại không phù hợp nghĩa.'},
];

var speakingData = {
  intro:'Hãy dùng từ vựng và ngữ pháp của Bài 20 (kết hợp ngữ pháp của cả 20 bài) để kể về những chuyến đi của bạn.',
  questions:[
    {q_zh:'你认为理想的旅行方式是什么样的？为什么？',q_vn:'Bạn cho rằng cách du lịch lý tưởng là thế nào? Vì sao?',
     hint:'一……就……；对……来说',
     sample:'对我来说，理想的旅行是一放假就出发，坐火车去南方，一路上看不同的风景，尝各地有名的小吃。',sample_vn:'Với tôi, du lịch lý tưởng là vừa nghỉ là lên đường, đi tàu vào Nam, dọc đường ngắm cảnh khác nhau, nếm món ăn vặt các nơi.',
     note:'一……就/出发/小吃 (bài mới) + 对……来说 (Bài 5) + 尝 (Bài 7).'},
    {q_zh:'哪次旅行是你最难忘的？给你印象最深的是什么？',q_vn:'Chuyến đi nào khó quên nhất với bạn? Ấn tượng sâu nhất là gì?',
     hint:'说起……；给我印象最深的是……',
     sample:'说起旅行，给我印象最深的是去年去丽江那一趟。导游一路上讲了很多笑话，风景美极了。我们还和少数民族的人一起干杯。',sample_vn:'Nói về du lịch, ấn tượng sâu nhất là chuyến Lệ Giang năm ngoái. Hướng dẫn viên kể nhiều truyện cười, cảnh đẹp vô cùng. Chúng tôi còn cạn ly với người dân tộc thiểu số.',
     note:'说起/笑话/干杯/民族 (bài mới, V+起) + 趟 (Bài 17) + 导游 (Bài 16) + 极了 (Bài 4).'},
    {q_zh:'在你的印象中，中国南方和北方有什么不同？',q_vn:'Theo bạn, miền Nam và miền Bắc Trung Quốc khác nhau thế nào?',
     hint:'究竟……；……听起来像……',
     sample:'南北气候有很大区别，北方冬天下雪，南方却很暖和。语言也不同，上海话听起来就像外语一样。究竟哪边更好，我也说不清楚。',sample_vn:'Khí hậu Nam Bắc khác nhiều, Bắc mùa đông có tuyết, Nam lại ấm. Ngôn ngữ cũng khác, tiếng Thượng Hải nghe như ngoại ngữ. Rốt cuộc bên nào tốt hơn, tôi cũng nói không rõ.',
     note:'究竟/听起来 (bài mới) + 区别 (Bài 8) + 暖和 (Bài 17) + 像……一样 (Bài 6).'},
    {q_zh:'你喜欢吃辣的吗？你们国家的菜有什么特点？',q_vn:'Bạn thích ăn cay không? Món ăn nước bạn có đặc điểm gì?',
     hint:'又……又……；特点就是……',
     sample:'我不太能吃辣，一吃辣就咳嗽。越南菜的特点就是又酸又香，特别是汤，味道鲜美，还有很多有名的小吃。',sample_vn:'Tôi không ăn cay được lắm, vừa ăn cay là ho. Đặc điểm món Việt là vừa chua vừa thơm, nhất là canh, vị tươi ngon, còn nhiều món ăn vặt nổi tiếng.',
     note:'辣/酸/香/汤 (bài mới) + 一……就 + 又……又 (Bài 1) + 特点 (Bài 18) + 咳嗽 (Bài 7).'},
    {q_zh:'去机场或者出发旅行前，你一般会做哪些准备？',q_vn:'Trước khi ra sân bay hoặc đi du lịch, bạn thường chuẩn bị gì?',
     hint:'先……，然后……，最后……；千万别……',
     sample:'我会先收拾好行李，然后查一下航班有没有推迟，最后去加油站加满油再上高速公路。千万别开着开着没油了。',sample_vn:'Tôi dọn hành lý trước, rồi kiểm tra chuyến bay có hoãn không, cuối cùng đến trạm xăng đổ đầy rồi lên cao tốc. Tuyệt đối đừng đang lái thì hết xăng.',
     note:'收拾/航班/推迟/加油站/高速公路/V着V着 (bài mới) + 先……然后……最后 (Bài 3) + 千万 (Bài 15).'},
  ]
};

var translateData = [
  {vi:'Nên đổ xăng rồi, trên đường ra sân bay có trạm xăng không?',zh:'该加油了，去机场的路上有加油站吗？',py:'Gāi jiā yóu le, qù jīchǎng de lùshang yǒu jiāyóuzhàn ma?'},
  {vi:'Được, vậy tôi yên tâm, đừng đang lái thì hết xăng.',zh:'好，那我就放心了，别开着开着没油了。',py:'Hǎo, nà wǒ jiù fàng xīn le, bié kāizhe kāizhe méi yóu le.'},
  {vi:'Chuyến bay vốn 10 giờ, sau đó trang web sân bay thông báo hoãn một tiếng.',zh:'航班本来是十点的，后来机场网站上通知推迟了一个小时。',py:'Hángbān běnlái shì shí diǎn de, hòulái jīchǎng wǎngzhàn shang tōngzhī tuīchíle yí ge xiǎoshí.'},
  {vi:'Bình thường con gái nhiều bài học, luôn nói muốn đi du lịch nhưng không có thời gian, tội nghiệp thật.',zh:'平时女儿那么多课，总是说想去旅行，但是没时间，怪可怜的。',py:'Píngshí nǚ\'ér nàme duō kè, zǒngshì shuō xiǎng qù lǚxíng, dànshì méi shíjiān, guài kělián de.'},
  {vi:'Đợi con gái vừa về là tôi báo cho con tin vui này.',zh:'等女儿一回来我就告诉她这个好消息。',py:'Děng nǚ\'ér yì huílai wǒ jiù gàosu tā zhège hǎo xiāoxi.'},
  {vi:'Rốt cuộc mùa nào đi Lệ Giang du lịch thì tốt hơn?',zh:'究竟哪个季节去丽江旅游比较好呢？',py:'Jiūjìng nǎ ge jìjié qù Lìjiāng lǚyóu bǐjiào hǎo ne?'},
  {vi:'Ví dụ khi đối thoại với người Thượng Hải, bạn sẽ thấy tiếng Thượng Hải nghe như ngoại ngữ.',zh:'比如你跟上海人对话时，会发现上海话听起来就像外语一样。',py:'Bǐrú nǐ gēn Shànghǎi rén duìhuà shí, huì fāxiàn Shànghǎi huà tīng qilai jiù xiàng wàiyǔ yíyàng.'},
  {vi:'Nói đến đồ ăn, ấn tượng sâu nhất với tôi là món Hồ Nam.',zh:'说起吃的东西，给我印象最深的是湖南菜。',py:'Shuōqǐ chī de dōngxi, gěi wǒ yìnxiàng zuì shēn de shì Húnán cài.'},
];
var translateDataRev = [
  {vi:'Đi về phía tây 500 mét là lên được cao tốc. Đi cao tốc khoảng nửa tiếng là đến.',zh:'往西走五百米就能上高速公路。走高速公路大约半个小时就到了。',py:'Wǎng xī zǒu wǔbǎi mǐ jiù néng shàng gāosù gōnglù. Zǒu gāosù gōnglù dàyuē bàn ge xiǎoshí jiù dào le.'},
  {vi:'Lát tôi tự vào đổi thẻ lên máy bay, bạn không cần tiễn, đợi tôi đến sân bay Thủ Đô sẽ nhắn tin.',zh:'一会儿我自己进去换登机牌，你就不用送我了，等我到了首都机场再给你发短信。',py:'Yíhuìr wǒ zìjǐ jìnqu huàn dēngjīpái, nǐ jiù búyòng sòng wǒ le, děng wǒ dàole Shǒudū Jīchǎng zài gěi nǐ fā duǎnxìn.'},
  {vi:'Trưa nay chẳng phải chúng ta đến nhà hàng đối diện ăn vịt quay, chúc mừng con thi đạt hết sao?',zh:'中午我们不是要去对面的饭店吃烤鸭，祝贺她考试成绩都合格吗？',py:'Zhōngwǔ wǒmen bú shì yào qù duìmiàn de fàndiàn chī kǎoyā, zhùhè tā kǎoshì chéngjì dōu hégé ma?'},
  {vi:'Người cạn ly với bạn trong ảnh này là dân tộc thiểu số à? Cô ấy trang điểm đẹp thật.',zh:'这张照片上和你干杯的那个人是少数民族吗？她打扮得真漂亮。',py:'Zhè zhāng zhàopiàn shang hé nǐ gān bēi de nàge rén shì shǎoshù mínzú ma? Tā dǎban de zhēn piàoliang.'},
  {vi:'Có lần tôi làm mất chìa khóa tủ gửi đồ, cuối cùng vẫn là cô ấy giúp tìm được.',zh:'有一次我把存包的钥匙丢了，最后还是她帮我找到的。',py:'Yǒu yí cì wǒ bǎ cún bāo de yàoshi diū le, zuìhòu háishi tā bāng wǒ zhǎodào de.'},
  {vi:'Cây ngoài cửa sổ từng cây một xanh dần, miền Bắc có lẽ còn tuyết, miền Nam đã khắp nơi xanh rồi.',zh:'窗外的树一棵一棵地变绿，北方也许还下着雪，南方却已经到处都是绿色了。',py:'Chuāngwài de shù yì kē yì kē de biàn lǜ, běifāng yěxǔ hái xiàzhe xuě, nánfāng què yǐjīng dàochù dōu shì lǜsè le.'},
  {vi:'Khi nghỉ, tôi thu dọn hành lý, mang bản đồ, mua vé tàu, xuất phát đến điểm đến.',zh:'放假的时候，我会收拾好行李，带上地图，买张火车票，向目的地出发。',py:'Fàng jià de shíhou, wǒ huì shōushi hǎo xíngli, dàishàng dìtú, mǎi zhāng huǒchēpiào, xiàng mùdìdì chūfā.'},
  {vi:'Đặc điểm món Hồ Nam là cay, chủ yếu là cay mặn, cay thơm và cay chua.',zh:'湖南菜的特点就是辣，主要是咸辣、香辣和酸辣。',py:'Húnán cài de tèdiǎn jiù shì là, zhǔyào shì xián là, xiāng là hé suān là.'},
];

var listenData = {
  type: 'workbook',
  audioParts: [
    { src: '/audio/hsk4-bai-20/listen-1.mp3', from: 1, to: 5 },
    { src: '/audio/hsk4-bai-20/listen-2.mp3', from: 6, to: 12 },
    { src: '/audio/hsk4-bai-20/listen-3.mp3', from: 13, to: 22 }
  ],
  dictation: [
    {num:1, stmt:'他们在火车上。', judge:false, lines:[
      {pre:'各位乘客，你们好，', blank:'感谢大家乘坐本次航班', post:'。我们为您准备了饮料和小吃，请您在座位上等一下，工作人员会送到您身边。',
       py:'Gèwèi chéngkè, nǐmen hǎo, gǎnxiè dàjiā chéngzuò běn cì hángbān. Wǒmen wèi nín zhǔnbèile yǐnliào hé xiǎochī, qǐng nín zài zuòwèi shang děng yíxià, gōngzuò rényuán huì sòngdào nín shēnbiān.',
       vn:'Kính chào quý hành khách, cảm ơn quý vị đã đi chuyến bay này. Chúng tôi đã chuẩn bị đồ uống và đồ ăn nhẹ, xin quý vị đợi tại chỗ ngồi, nhân viên sẽ mang đến tận nơi.'}]},
    {num:2, stmt:'大家受到了表扬。', judge:true, lines:[
      {pre:'大家干得非常好，', blank:'我们已经提前完成了全年任务', post:'，感谢大家这几个月来的努力工作！好，现在我代表公司祝贺大家顺利完成任务！',
       py:'Dàjiā gàn de fēicháng hǎo, wǒmen yǐjīng tíqián wánchéngle quánnián rènwu, gǎnxiè dàjiā zhè jǐ ge yuè lái de nǔlì gōngzuò! Hǎo, xiànzài wǒ dàibiǎo gōngsī zhùhè dàjiā shùnlì wánchéng rènwu!',
       vn:'Mọi người làm rất tốt, chúng ta đã hoàn thành sớm nhiệm vụ cả năm, cảm ơn mọi người đã nỗ lực làm việc mấy tháng qua! Nào, giờ tôi thay mặt công ty chúc mừng mọi người hoàn thành nhiệm vụ!'}]},
    {num:3, stmt:'他暑假想去云南旅行。', judge:true, lines:[
      {pre:'我打算去云南玩儿，听说那边四季如春，', blank:'不仅风景美，而且当地少数民族都非常热情', post:'，相信这个暑假会十分有趣。',
       py:'Wǒ dǎsuàn qù Yúnnán wánr, tīngshuō nàbiān sìjì rú chūn, bùjǐn fēngjǐng měi, érqiě dāngdì shǎoshù mínzú dōu fēicháng rèqíng, xiāngxìn zhège shǔjià huì shífēn yǒuqù.',
       vn:'Tôi định đi Vân Nam chơi, nghe nói bên đó bốn mùa như xuân, không những phong cảnh đẹp mà các dân tộc thiểu số ở đó đều rất nhiệt tình, tin rằng kỳ nghỉ hè này sẽ rất thú vị.'}]},
    {num:4, stmt:'大门钥匙只有一把。', judge:false, lines:[
      {pre:'给，这是家里大门的钥匙，', blank:'你和你姐一人一把', post:'。这把小的是你房间的，拿好了，别弄丢了。',
       py:'Gěi, zhè shì jiā li dàmén de yàoshi, nǐ hé nǐ jiě yì rén yì bǎ. Zhè bǎ xiǎo de shì nǐ fángjiān de, náhǎo le, bié nòngdiū le.',
       vn:'Đây, chìa khoá cổng nhà, con và chị con mỗi đứa một chiếc. Chiếc nhỏ này là của phòng con, giữ cẩn thận, đừng làm mất.'}]},
    {num:5, stmt:'加油站不允许打手机。', judge:true, lines:[
      {pre:'在加油站或者离加油站很近的地方抽烟、打手机，是很危险的。因此，', blank:'法律规定加油站禁止抽烟和使用手机', post:'。',
       py:'Zài jiāyóuzhàn huòzhě lí jiāyóuzhàn hěn jìn de dìfang chōuyān, dǎ shǒujī, shì hěn wēixiǎn de. Yīncǐ, fǎlǜ guīdìng jiāyóuzhàn jìnzhǐ chōuyān hé shǐyòng shǒujī.',
       vn:'Hút thuốc, gọi điện thoại ở cây xăng hoặc nơi rất gần cây xăng là rất nguy hiểm. Vì vậy, pháp luật quy định cây xăng cấm hút thuốc và sử dụng điện thoại di động.'}]}
  ],
  mc: [
    {num:6, options:['汽车坏了','行李丢了','航班错过了','上班迟到了'], ans:2, q:'男的怎么了？',
     lines:[
       {speaker:'女', pre:'你不是出差了吗？', blank:'怎么还在这里', post:'？', py:'Nǐ bú shì chūchāi le ma? Zěnme hái zài zhèlǐ?', vn:'Anh chẳng phải đi công tác rồi sao? Sao vẫn ở đây?'},
       {speaker:'男', pre:'我是准时出发的，可是路上堵车。', blank:'我到机场时，我要坐的飞机已经起飞了', post:'。', py:'Wǒ shì zhǔnshí chūfā de, kěshì lù shang dǔchē. Wǒ dào jīchǎng shí, wǒ yào zuò de fēijī yǐjīng qǐfēi le.', vn:'Tôi xuất phát đúng giờ, nhưng đường tắc. Lúc tôi đến sân bay, máy bay tôi phải đi đã cất cánh rồi.'}
     ],
     explain:'问：男的怎么了？ "我到机场时…飞机已经起飞了" → C 航班错过了.'},
    {num:7, options:['工资低','没有孩子','妻子爱买衣服','妻子很懒'], ans:3, q:'女的为什么觉得儿子可怜？',
     lines:[
       {speaker:'男', pre:'听说你儿子去年结婚了，', blank:'现在他生活不错吧', post:'。', py:'Tīngshuō nǐ érzi qùnián jiéhūn le, xiànzài tā shēnghuó búcuò ba.', vn:'Nghe nói con trai chị năm ngoái kết hôn, giờ chắc sống tốt nhỉ.'},
       {speaker:'女', pre:'别提了，他怪可怜的。', blank:'他妻子太懒', post:'，不做饭，不洗衣服，连孩子也不带。', py:'Bié tí le, tā guài kělián de. Tā qīzi tài lǎn, bú zuò fàn, bù xǐ yīfu, lián háizi yě bú dài.', vn:'Đừng nhắc nữa, nó tội lắm. Vợ nó lười quá, không nấu cơm, không giặt đồ, đến con cũng không trông.'}
     ],
     explain:'问：女的为什么觉得儿子可怜？ "他妻子太懒" → D 妻子很懒. B sai vì có nhắc "连孩子也不带" (có con).'},
    {num:8, options:['报名旅行','考普通话','参加面试','检查网站'], ans:1, q:'男的想要干什么？',
     lines:[
       {speaker:'男', pre:'你好，', blank:'我想报名参加这个月的普通话水平考试', post:'。', py:'Nǐ hǎo, wǒ xiǎng bàomíng cānjiā zhège yuè de pǔtōnghuà shuǐpíng kǎoshì.', vn:'Chào cô, tôi muốn đăng ký thi trình độ tiếng phổ thông tháng này.'},
       {speaker:'女', pre:'对不起，报名工作今天上午刚结束。', blank:'下次考试的报名时间您可以上我们的网站查一下', post:'。', py:'Duìbuqǐ, bàomíng gōngzuò jīntiān shàngwǔ gāng jiéshù. Xià cì kǎoshì de bàomíng shíjiān nín kěyǐ shàng wǒmen de wǎngzhàn chá yíxià.', vn:'Xin lỗi, việc đăng ký vừa kết thúc sáng nay. Thời gian đăng ký kỳ thi sau ông có thể lên website của chúng tôi tra.'}
     ],
     explain:'问：男的想要干什么？ "报名参加…普通话水平考试" → B 考普通话.'},
    {num:9, options:['书里','飞机上','网上','电梯里'], ans:2, q:'那个笑话是在哪儿看到的？',
     lines:[
       {speaker:'男', pre:'这个笑话确实有意思，', blank:'你在哪里看到的', post:'？', py:'Zhège xiàohua quèshí yǒu yìsi, nǐ zài nǎlǐ kàndào de?', vn:'Truyện cười này đúng là thú vị, cậu xem ở đâu vậy?'},
       {speaker:'女', pre:'有一个网站，', blank:'里面有很多有趣的笑话', post:'，我现在就把网址发给你。', py:'Yǒu yí ge wǎngzhàn, lǐmiàn yǒu hěn duō yǒuqù de xiàohua, wǒ xiànzài jiù bǎ wǎngzhǐ fā gěi nǐ.', vn:'Có một trang web, trong đó có nhiều truyện cười thú vị, tôi gửi địa chỉ cho cậu ngay.'}
     ],
     explain:'问：那个笑话是在哪儿看到的？ "有一个网站" → C 网上.'},
    {num:10, options:['桌子上','包里','银行里','门上'], ans:3, q:'钥匙在哪儿？',
     lines:[
       {speaker:'女', pre:'你看见我的钥匙了吗？', blank:'刚刚我去银行存钱时，记得放到包里了', post:'。这会儿就找不到了。', py:'Nǐ kànjiàn wǒ de yàoshi le ma? Gānggāng wǒ qù yínháng cún qián shí, jìde fàngdào bāo li le. Zhè huìr jiù zhǎobudào le.', vn:'Anh thấy chìa khoá của em không? Lúc nãy đi ngân hàng gửi tiền, em nhớ đã bỏ vào túi. Giờ lại không tìm thấy.'},
       {speaker:'男', pre:'别找了，你看，', blank:'在门上挂着呢', post:'。', py:'Bié zhǎo le, nǐ kàn, zài mén shang guàzhe ne.', vn:'Đừng tìm nữa, em xem, đang treo trên cửa kìa.'}
     ],
     explain:'问：钥匙在哪儿？ "在门上挂着呢" → D 门上. 包里 chỉ là chỗ cô ấy nhớ nhầm.'},
    {num:11, options:['抽烟','吃咸的','少吃辣','打针'], ans:2, q:'根据对话，哪个对男的身体有好处？',
     lines:[
       {speaker:'男', pre:'医生，我的病严重吗？', blank:'是不是需要打针啊', post:'？', py:'Yīshēng, wǒ de bìng yánzhòng ma? Shì bu shì xūyào dǎzhēn a?', vn:'Bác sĩ, bệnh của tôi có nặng không? Có cần tiêm không?'},
       {speaker:'女', pre:'不是很严重，我给你开点儿药，回去好好休息。另外，', blank:'最近不要抽烟，少吃咸的和辣的', post:'。', py:'Bú shì hěn yánzhòng, wǒ gěi nǐ kāi diǎnr yào, huíqu hǎohāo xiūxi. Lìngwài, zuìjìn bú yào chōuyān, shǎo chī xián de hé là de.', vn:'Không nặng lắm, tôi kê chút thuốc, về nghỉ ngơi cho tốt. Ngoài ra, dạo này đừng hút thuốc, ăn ít đồ mặn và cay.'}
     ],
     explain:'问：哪个对男的身体有好处？ "少吃咸的和辣的" → C 少吃辣. Không cần tiêm (D), không hút thuốc (A).'},
    {num:12, options:['高兴','抱歉','难过','失望'], ans:0, q:'男的是什么心情？',
     lines:[
       {speaker:'男', pre:'这次活动非常成功，大家顺利完成了公司交给的任务。', blank:'辛苦了，祝贺你们', post:'！', py:'Zhè cì huódòng fēicháng chénggōng, dàjiā shùnlì wánchéngle gōngsī jiāo gěi de rènwu. Xīnkǔ le, zhùhè nǐmen!', vn:'Hoạt động lần này rất thành công, mọi người đã hoàn thành thuận lợi nhiệm vụ công ty giao. Vất vả rồi, chúc mừng các bạn!'},
       {speaker:'女', pre:'能有这么大的成绩，', blank:'主要是每个人工作都非常努力', post:'。来，干一杯！', py:'Néng yǒu zhème dà de chéngjì, zhǔyào shì měi ge rén gōngzuò dōu fēicháng nǔlì. Lái, gān yì bēi!', vn:'Có được thành tích lớn thế này chủ yếu là do mỗi người đều làm việc rất chăm chỉ. Nào, cạn ly!'}
     ],
     explain:'问：男的是什么心情？ "非常成功…祝贺你们" → A 高兴.'},
    {num:13, options:['戴上帽子','少带东西','带些水果','带行李箱'], ans:1, q:'男的希望女的怎么样？',
     lines:[
       {speaker:'男', pre:'东西都收拾好了吗？', blank:'可以出发了吧', post:'？', py:'Dōngxi dōu shōushi hǎo le ma? Kěyǐ chūfā le ba?', vn:'Đồ đạc thu dọn xong chưa? Xuất phát được chưa?'},
       {speaker:'女', pre:'马上，', blank:'再拿些吃的就行了', post:'。', py:'Mǎshàng, zài ná xiē chī de jiù xíng le.', vn:'Ngay đây, lấy thêm ít đồ ăn nữa là được.'},
       {speaker:'男', pre:'', blank:'少拿点儿，别带太多', post:'。', py:'Shǎo ná diǎnr, bié dài tài duō.', vn:'Lấy ít thôi, đừng mang nhiều quá.'},
       {speaker:'女', pre:'我知道，', blank:'就拿两瓶水，两包饼干', post:'。', py:'Wǒ zhīdào, jiù ná liǎng píng shuǐ, liǎng bāo bǐnggān.', vn:'Em biết, chỉ lấy hai chai nước, hai gói bánh quy.'}
     ],
     explain:'问：男的希望女的怎么样？ "少拿点儿，别带太多" → B 少带东西.'},
    {num:14, options:['机场太远','汽车没油','航班推迟','忘了时间'], ans:1, q:'男的刚才担心什么？',
     lines:[
       {speaker:'男', pre:'油箱里剩的油不多了，', blank:'看看哪儿有加油站', post:'。', py:'Yóuxiāng li shèng de yóu bù duō le, kànkan nǎr yǒu jiāyóuzhàn.', vn:'Xăng trong bình còn không nhiều, xem chỗ nào có cây xăng.'},
       {speaker:'女', pre:'前面就有一个，', blank:'大概有四五公里远', post:'。', py:'Qiánmiàn jiù yǒu yí ge, dàgài yǒu sì-wǔ gōnglǐ yuǎn.', vn:'Phía trước có một cây, cách khoảng bốn năm cây số.'},
       {speaker:'男', pre:'好，那我就放心了，刚才我还有点儿担心，', blank:'怕开着开着没油了', post:'。', py:'Hǎo, nà wǒ jiù fàngxīn le, gāngcái wǒ hái yǒudiǎnr dānxīn, pà kāizhe kāizhe méi yóu le.', vn:'Tốt, vậy anh yên tâm rồi, lúc nãy còn hơi lo, sợ đang chạy thì hết xăng.'},
       {speaker:'女', pre:'我们先去加油，', blank:'航班是十点的，来得及', post:'。', py:'Wǒmen xiān qù jiāyóu, hángbān shì shí diǎn de, láidejí.', vn:'Mình đi đổ xăng trước, chuyến bay mười giờ, vẫn kịp.'}
     ],
     explain:'问：男的刚才担心什么？ "怕开着开着没油了" → B 汽车没油.'},
    {num:15, options:['骑马','超车','河边打球','江里游泳'], ans:3, q:'女的认为什么很危险？',
     lines:[
       {speaker:'女', pre:'', blank:'你会游泳吗', post:'？', py:'Nǐ huì yóuyǒng ma?', vn:'Anh biết bơi không?'},
       {speaker:'男', pre:'当然会，我是在长江边上长大的，', blank:'小时候常去江里游泳', post:'。', py:'Dāngrán huì, wǒ shì zài Cháng Jiāng biān shang zhǎngdà de, xiǎo shíhou cháng qù jiāng li yóuyǒng.', vn:'Đương nhiên biết, anh lớn lên bên bờ Trường Giang, hồi nhỏ thường ra sông bơi.'},
       {speaker:'女', pre:'真的？', blank:'那会不会很危险', post:'？', py:'Zhēn de? Nà huì bu huì hěn wēixiǎn?', vn:'Thật à? Thế có nguy hiểm không?'},
       {speaker:'男', pre:'江边长大的孩子从小就习惯了，', blank:'没什么危险的', post:'。', py:'Jiāng biān zhǎngdà de háizi cóngxiǎo jiù xíguàn le, méi shénme wēixiǎn de.', vn:'Trẻ con lớn lên bên sông từ nhỏ đã quen, chẳng nguy hiểm gì.'}
     ],
     explain:'问：女的认为什么很危险？ Cô ấy hỏi "那会不会很危险" về việc bơi ở sông → D 江里游泳.'},
    {num:16, options:['烤鸭贵','服务好','座位少','关门早'], ans:1, q:'女的觉得那家饭馆儿怎么样？',
     lines:[
       {speaker:'男', pre:'对面新开了家饭馆儿，', blank:'你去过吗', post:'？', py:'Duìmiàn xīn kāile jiā fànguǎnr, nǐ qùguo ma?', vn:'Đối diện mới mở một quán ăn, em đi chưa?'},
       {speaker:'女', pre:'去过，那儿菜不错，特别是烤鸭，', blank:'服务态度也挺好', post:'，就是去晚了要等座位。', py:'Qùguo, nàr cài búcuò, tèbié shì kǎoyā, fúwù tàidu yě tǐng hǎo, jiù shì qù wǎn le yào děng zuòwèi.', vn:'Đi rồi, món ở đó ngon, nhất là vịt quay, thái độ phục vụ cũng rất tốt, chỉ là đến muộn phải đợi chỗ.'},
       {speaker:'男', pre:'那我这会儿去', blank:'估计有很多人了', post:'。', py:'Nà wǒ zhè huìr qù gūjì yǒu hěn duō rén le.', vn:'Vậy giờ anh đi chắc đông người rồi.'},
       {speaker:'女', pre:'是，', blank:'你想去的话要早点儿出发', post:'。', py:'Shì, nǐ xiǎng qù de huà yào zǎo diǎnr chūfā.', vn:'Ừ, muốn đi thì phải xuất phát sớm.'}
     ],
     explain:'问：女的觉得那家饭馆儿怎么样？ "服务态度也挺好" → B 服务好. C sai: đông khách chứ không phải ít chỗ.'},
    {num:17, options:['有约会','去面试','去存钱','参加舞会'], ans:1, q:'女的今天为什么要打扮？',
     lines:[
       {speaker:'男', pre:'你今天打扮得真漂亮，', blank:'有约会啊', post:'？', py:'Nǐ jīntiān dǎban de zhēn piàoliang, yǒu yuēhuì a?', vn:'Hôm nay cậu ăn diện đẹp thật, có hẹn hò à?'},
       {speaker:'女', pre:'不是，', blank:'下午有家银行通知我去面试', post:'，所以就打扮了一下。', py:'Bú shì, xiàwǔ yǒu jiā yínháng tōngzhī wǒ qù miànshì, suǒyǐ jiù dǎbanle yíxià.', vn:'Không phải, chiều nay có một ngân hàng gọi tôi đi phỏng vấn nên trang điểm một chút.'},
       {speaker:'男', pre:'银行挺好的，', blank:'紧张不', post:'？', py:'Yínháng tǐng hǎo de, jǐnzhāng bù?', vn:'Ngân hàng tốt đấy, có căng thẳng không?'},
       {speaker:'女', pre:'不紧张，', blank:'这是我这个星期的第四个面试了', post:'。', py:'Bù jǐnzhāng, zhè shì wǒ zhège xīngqī de dì-sì ge miànshì le.', vn:'Không, đây là buổi phỏng vấn thứ tư trong tuần này của tôi rồi.'}
     ],
     explain:'问：女的今天为什么要打扮？ "银行通知我去面试" → B 去面试. C 去存钱 là bẫy từ 银行.'},
    {num:18, options:['很聪明','很有趣','很兴奋','丢钱了'], ans:2, q:'女的怎么了？',
     lines:[
       {speaker:'男', pre:'你怎么这么兴奋？', blank:'不就是收拾完房间了吗', post:'？', py:'Nǐ zěnme zhème xīngfèn? Bú jiù shì shōushi wán fángjiān le ma?', vn:'Sao em hưng phấn thế? Chẳng phải chỉ là dọn xong phòng thôi sao?'},
       {speaker:'女', pre:'你猜', blank:'我收拾房间时找到什么了', post:'？', py:'Nǐ cāi wǒ shōushi fángjiān shí zhǎodào shénme le?', vn:'Anh đoán xem lúc dọn phòng em tìm thấy gì?'},
       {speaker:'男', pre:'', blank:'难道找到钱了', post:'？', py:'Nándào zhǎodào qián le?', vn:'Chẳng lẽ nhặt được tiền?'},
       {speaker:'女', pre:'你真聪明，', blank:'我在咱们床底下找到一百块钱', post:'。', py:'Nǐ zhēn cōngming, wǒ zài zánmen chuáng dǐxia zhǎodào yìbǎi kuài qián.', vn:'Anh thông minh thật, em tìm thấy một trăm tệ dưới gầm giường.'},
       {speaker:'男', pre:'一说起钱，我突然想起来', blank:'我昨天衣服口袋里少了一百', post:'。那就是我的钱！', py:'Yì shuōqǐ qián, wǒ tūrán xiǎng qilai wǒ zuótiān yīfu kǒudai li shǎole yìbǎi. Nà jiù shì wǒ de qián!', vn:'Nhắc đến tiền, anh chợt nhớ hôm qua túi áo anh thiếu mất một trăm. Đó là tiền của anh!'}
     ],
     explain:'问：女的怎么了？ "你怎么这么兴奋" → C 很兴奋. D sai: người mất tiền là người nam.'},
    {num:19, options:['看到酒的颜色','感觉到酒的香气','尝到酒的味道','听到好听的声音'], ans:3, q:'人们干杯时会怎样？',
     lines:[
       {speaker:'旁白', pre:'人们在喝酒时，用眼睛能欣赏到酒的颜色，用鼻子可以感觉到酒的香气，用嘴能尝到酒的味道，', blank:'只剩下耳朵没事做', post:'，所以它不太高兴。', py:'Rénmen zài hē jiǔ shí, yòng yǎnjing néng xīnshǎng dào jiǔ de yánsè, yòng bízi kěyǐ gǎnjué dào jiǔ de xiāngqì, yòng zuǐ néng chángdào jiǔ de wèidào, zhǐ shèngxià ěrduo méi shì zuò, suǒyǐ tā bú tài gāoxìng.', vn:'Khi uống rượu, mắt thưởng thức được màu rượu, mũi cảm nhận được hương rượu, miệng nếm được vị rượu, chỉ còn tai không có việc gì làm nên nó không vui lắm.'},
       {speaker:'旁白', pre:'可当我们一干杯，', blank:'杯子就会发出好听的声音', post:'，耳朵一听到，就高兴起来了。这也许就是中国人喝酒时总喜欢干杯的原因。', py:'Kě dāng wǒmen yì gānbēi, bēizi jiù huì fāchū hǎotīng de shēngyīn, ěrduo yì tīngdào, jiù gāoxìng qilai le. Zhè yěxǔ jiù shì Zhōngguórén hē jiǔ shí zǒng xǐhuan gānbēi de yuányīn.', vn:'Nhưng khi chúng ta cụng ly, ly sẽ phát ra âm thanh dễ nghe, tai vừa nghe thấy liền vui lên. Đó có lẽ là lý do người Trung Quốc uống rượu luôn thích cụng ly.'}
     ],
     explain:'问：人们干杯时会怎样？ "杯子就会发出好听的声音" → D 听到好听的声音.'},
    {num:20, options:['别抽烟','要小心','要慢点儿喝','为什么干杯'], ans:3, q:'这段话主要讲中国人喝酒时：',
     lines:[
       {speaker:'旁白', pre:'（同一段话）', blank:'这也许就是中国人喝酒时总喜欢干杯的原因', post:'。', py:'(Tóng yí duàn huà) Zhè yěxǔ jiù shì Zhōngguórén hē jiǔ shí zǒng xǐhuan gānbēi de yuányīn.', vn:'(Cùng đoạn văn) Đó có lẽ là lý do người Trung Quốc uống rượu luôn thích cụng ly.'}
     ],
     explain:'问：这段话主要讲中国人喝酒时： Đoạn giải thích lý do thích 干杯 → D 为什么干杯.'},
    {num:21, options:['树变绿了','都是晴天','慢慢变冷','突然下雪'], ans:0, q:'南方很多地方，2月会怎么样？',
     lines:[
       {speaker:'旁白', pre:'从中国的最南边到最北边有五千多公里，因此南北方的气候有很大区别。南方很多地方的冬天一点儿也不冷，温度跟北方春天差不多，', blank:'2月份的时候已经很暖和', post:'，可以只穿一件毛衣了，树开始长出新叶子，路边的花也开了，非常漂亮。', py:'Cóng Zhōngguó de zuì nánbian dào zuì běibian yǒu wǔqiān duō gōnglǐ, yīncǐ nán-běifāng de qìhòu yǒu hěn dà qūbié. Nánfāng hěn duō dìfang de dōngtiān yìdiǎnr yě bù lěng, wēndù gēn běifāng chūntiān chàbuduō, èr yuèfèn de shíhou yǐjīng hěn nuǎnhuo, kěyǐ zhǐ chuān yí jiàn máoyī le, shù kāishǐ zhǎngchū xīn yèzi, lùbiān de huā yě kāi le, fēicháng piàoliang.', vn:'Từ cực nam đến cực bắc Trung Quốc dài hơn năm nghìn cây số, vì vậy khí hậu nam bắc khác nhau rất nhiều. Mùa đông nhiều nơi ở miền Nam không hề lạnh, nhiệt độ gần bằng mùa xuân miền Bắc, tháng 2 đã rất ấm, chỉ cần mặc một chiếc áo len, cây bắt đầu ra lá mới, hoa ven đường cũng nở, rất đẹp.'},
       {speaker:'旁白', pre:'所以', blank:'很多北方人都喜欢这个时候去南方旅行', post:'，而南方人也喜欢这个时候去北方滑雪和看冰灯。', py:'Suǒyǐ hěn duō běifāngrén dōu xǐhuan zhège shíhou qù nánfāng lǚxíng, ér nánfāngrén yě xǐhuan zhège shíhou qù běifāng huáxuě hé kàn bīngdēng.', vn:'Vì vậy nhiều người miền Bắc thích đi du lịch miền Nam vào lúc này, còn người miền Nam cũng thích lúc này lên miền Bắc trượt tuyết và ngắm đèn băng.'}
     ],
     explain:'问：南方很多地方，2月会怎么样？ "树开始长出新叶子" → A 树变绿了. C ngược nghĩa (已经很暖和).'},
    {num:22, options:['二月的天气','南北的不同','南方的冬天','南方的风景'], ans:2, q:'这段话主要介绍什么？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）', blank:'南方很多地方的冬天一点儿也不冷', post:'，温度跟北方春天差不多…所以很多北方人都喜欢这个时候去南方旅行。', py:'(Tóng yí duàn huà) Nánfāng hěn duō dìfang de dōngtiān yìdiǎnr yě bù lěng, wēndù gēn běifāng chūntiān chàbuduō … suǒyǐ hěn duō běifāngrén dōu xǐhuan zhège shíhou qù nánfāng lǚxíng.', vn:'(Cùng đoạn văn) Mùa đông nhiều nơi ở miền Nam không hề lạnh, nhiệt độ gần bằng mùa xuân miền Bắc … vì vậy nhiều người miền Bắc thích đi du lịch miền Nam vào lúc này.'}
     ],
     explain:'问：这段话主要介绍什么？ Phần lớn đoạn miêu tả mùa đông ấm áp ở miền Nam → C 南方的冬天. B chỉ là câu mở đầu.'}
  ]
};
