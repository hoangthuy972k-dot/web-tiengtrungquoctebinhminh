// ══════════════════════════════════════════
// DATA — HSK3 Bài 10: 数学比历史难多了 (Môn Toán khó hơn môn Lịch Sử nhiều)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'个子',py:'gèzi',pos:'Danh từ',vn:'vóc dáng, thân hình',em:'📏',lesson:1,
   explain:['Chiều cao và hình dáng cơ thể một người.'],
   usage:'Danh từ; thường đi cùng tính từ 高/矮: 个子高, 个子矮.',
   collo:['个子高','个子矮','大个子'],
   ex_zh:'大山，你和马可谁个子高？',ex_py:'Dàshān, nǐ hé Mǎkě shéi gèzi gāo?',ex_vn:'Đại Sơn, giữa bạn và Marco ai cao hơn?',
   exList:[
     {zh:'大山，你和马可谁个子高？',py:'Dàshān, nǐ hé Mǎkě shéi gèzi gāo?',vn:'Đại Sơn, giữa bạn và Marco ai cao hơn?'},
     {zh:'她个子真高，讲得怎么样？',py:'Tā gèzi zhēn gāo, jiǎng de zěnmeyàng?',vn:'Cô ấy cao thật đấy, giảng thế nào?'},
     {zh:'你女儿个子真高，比你高多了吧？',py:'Nǐ nǚ\'ér gèzi zhēn gāo, bǐ nǐ gāo duō le ba?',vn:'Con gái bạn cao thật đấy, cao hơn bạn nhiều nhỉ?'},
   ],
   hanzi:[
     {c:'个',p:'gè',type:'独体字 · Chữ đơn',st:3,ord:'nét liền',rad:'人 (nhân – người)',mean:'cái, chiếc (lượng từ)',
      tip:'Chữ tượng hình mô phỏng hình một người/vật đơn lẻ → LƯỢNG TỪ đếm đơn vị; 个子 = "cái khung" của thân thể = VÓC DÁNG.',
      cf:'介 (jiè – "giới thiệu, ở giữa", nét gần giống")',w:'个子 / 一个 / 那个'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Marco cao hơn mình một chút.',answer:'马可比我高一点儿。',answerPy:'Mǎkě bǐ wǒ gāo yìdiǎnr.',
      note:'A比B+tính từ+一点儿 diễn tả mức chênh lệch nhỏ (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Con trai tôi cao hơn tôi rồi, thật ra nó chỉ mười bảy mười tám tuổi thôi.',answer:'我儿子比我高了，其实他才十七八岁。',answerPy:'Wǒ érzi bǐ wǒ gāo le, qíshí tā cái shíqī-bā suì.',
      note:'十七八岁 = số ước lượng ghép hai số liên tiếp (điểm ngữ pháp bài này).'},
   ]},

  {n:2,zh:'矮',py:'ǎi',pos:'Tính từ',vn:'thấp',em:'📉',lesson:1,
   explain:['Có chiều cao thấp, trái nghĩa với 高.'],
   usage:'Tính từ, làm vị ngữ với 很/比: 很矮, A比B矮.',
   collo:['比……矮','矮一点儿','个子矮'],
   ex_zh:'马可比我高，我比马可矮一点儿。',ex_py:'Mǎkě bǐ wǒ gāo, wǒ bǐ Mǎkě ǎi yìdiǎnr.',ex_vn:'Marco cao hơn mình, mình thấp hơn Marco một chút.',
   exList:[
     {zh:'马可比我高，我比马可矮一点儿。',py:'Mǎkě bǐ wǒ gāo, wǒ bǐ Mǎkě ǎi yìdiǎnr.',vn:'Marco cao hơn mình, mình thấp hơn Marco một chút.'},
     {zh:'他个子也不高，只比我高一点儿。',py:'Tā gèzi yě bù gāo, zhǐ bǐ wǒ gāo yìdiǎnr.',vn:'Vóc dáng cậu ấy cũng không cao, chỉ cao hơn mình một chút.'},
     {zh:'我比马可大两岁。',py:'Wǒ bǐ Mǎkě dà liǎng suì.',vn:'Mình lớn hơn Marco hai tuổi.'},
   ],
   hanzi:[
     {c:'矮',p:'ǎi',type:'左右结构 · Trái-phải',st:13,ord:'矢 trái → 委 phải',rad:'矢 (thỉ – mũi tên)',mean:'thấp',
      tip:'矢(mũi tên, vật ngắn) + 委(cong xuống) → hình ảnh vật NGẮN, CONG THẤP xuống = THẤP.',
      cf:'委 (wěi – "giao phó, ủy thác", không có bộ 矢")',w:'矮 / 很矮 / 比较矮'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy thấp hơn tôi nhưng chạy rất nhanh.',answer:'虽然他比我矮，但是跑得很快。',answerPy:'Suīrán tā bǐ wǒ ǎi, dànshì pǎo de hěn kuài.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
     {promptLang:'vi',prompt:'Nếu bạn thấp hơn tôi thì đứng phía trước đi.',answer:'如果你比我矮，就站在前边吧。',answerPy:'Rúguǒ nǐ bǐ wǒ ǎi, jiù zhàn zài qiánbian ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:3,zh:'历史',py:'lìshǐ',pos:'Danh từ',vn:'môn Lịch Sử',em:'📜',lesson:2,
   explain:['Môn học nghiên cứu các sự kiện đã xảy ra trong quá khứ.'],
   usage:'Danh từ; đi cùng 课/学: 历史课, 学历史.',
   collo:['历史课','学历史','中国历史'],
   ex_zh:'我喜欢历史课、体育课，不喜欢数学课。',ex_py:'Wǒ xǐhuan lìshǐ kè, tǐyù kè, bù xǐhuan shùxué kè.',ex_vn:'Mình thích môn Lịch Sử, môn Thể Dục, không thích môn Toán.',
   exList:[
     {zh:'我喜欢历史课、体育课，不喜欢数学课。',py:'Wǒ xǐhuan lìshǐ kè, tǐyù kè, bù xǐhuan shùxué kè.',vn:'Mình thích môn Lịch Sử, môn Thể Dục, không thích môn Toán.'},
     {zh:'我觉得数学比历史难多了，我听不懂。',py:'Wǒ juéde shùxué bǐ lìshǐ nánduō le, wǒ tīng bu dǒng.',vn:'Mình thấy môn Toán khó hơn Lịch Sử nhiều, mình nghe không hiểu.'},
     {zh:'今年十九了，正在国外学习，学历史和数学。',py:'Jīnnián shíjiǔ le, zhèngzài guówài xuéxí, xué lìshǐ hé shùxué.',vn:'Năm nay 19 tuổi rồi, đang học ở nước ngoài, học Lịch Sử và Toán.'},
   ],
   hanzi:[
     {c:'史',p:'shǐ',type:'独体字 · Chữ đơn',st:5,ord:'nét liền',rad:'口 (khẩu – miệng)',mean:'lịch sử, sử sách',
      tip:'Chữ cổ mô phỏng người cầm bút ghi chép → người chép SỬ, mở rộng thành LỊCH SỬ.',
      cf:'吏 (lì – "quan lại", gần giống nhưng khác nét trên")',w:'历史 / 史书'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mình thấy môn Toán khó hơn Lịch Sử nhiều.',answer:'我觉得数学比历史难多了。',answerPy:'Wǒ juéde shùxué bǐ lìshǐ nánduō le.',
      note:'A比B+tính từ+多了 diễn tả mức chênh lệch lớn (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Vì môn Toán khó hơn Lịch Sử nhiều nên mình nghe không hiểu.',answer:'因为数学比历史难多了，所以我听不懂。',answerPy:'Yīnwèi shùxué bǐ lìshǐ nánduō le, suǒyǐ wǒ tīng bu dǒng.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:4,zh:'体育',py:'tǐyù',pos:'Danh từ',vn:'môn Thể Dục',em:'⚽',lesson:2,
   explain:['Môn học và hoạt động rèn luyện thể chất.'],
   usage:'Danh từ; đi cùng 课: 体育课.',
   collo:['体育课','喜欢体育','体育比赛'],
   ex_zh:'我喜欢历史课、体育课，不喜欢数学课。',ex_py:'Wǒ xǐhuan lìshǐ kè, tǐyù kè, bù xǐhuan shùxué kè.',ex_vn:'Mình thích môn Lịch Sử, môn Thể Dục, không thích môn Toán.',
   exList:[
     {zh:'我喜欢历史课、体育课，不喜欢数学课。',py:'Wǒ xǐhuan lìshǐ kè, tǐyù kè, bù xǐhuan shùxué kè.',vn:'Mình thích môn Lịch Sử, môn Thể Dục, không thích môn Toán.'},
     {zh:'那么多人踢足球，他们在比赛吗？不是，他们在上体育课呢。',py:'Nàme duō rén tī zúqiú, tāmen zài bǐsài ma? Bú shì, tāmen zài shàng tǐyù kè ne.',vn:'Nhiều người đá bóng thế, họ đang thi đấu à? Không phải, họ đang học thể dục đấy.'},
     {zh:'数学也很有意思啊。',py:'Shùxué yě hěn yǒu yìsi a.',vn:'Môn Toán cũng thú vị mà.'},
   ],
   hanzi:[
     {c:'育',p:'yù',type:'上下结构 · Trên-dưới',st:8,ord:'亠+厶 trên → 月 dưới',rad:'月 (nhục – thịt, thân thể)',mean:'nuôi dưỡng, giáo dục',
      tip:'Hình ảnh đứa trẻ được sinh ra và NUÔI DƯỠNG → GIÁO DỤC; 体育 = rèn luyện THÂN THỂ.',
      cf:'脊 (jǐ – "xương sống", có bộ 月 tương tự")',w:'体育 / 教育 / 体育课'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con trai tôi thích nhất là môn Thể Dục.',answer:'我儿子最喜欢体育课。',answerPy:'Wǒ érzi zuì xǐhuan tǐyù kè.',
      note:'最 + động từ diễn tả mức độ cao nhất.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn thích môn Thể Dục thì mỗi ngày đều sẽ rất vui.',answer:'只要你喜欢体育课，每天都会很高兴。',answerPy:'Zhǐyào nǐ xǐhuan tǐyù kè, měitiān dōu huì hěn gāoxìng.',
      note:'只要……就…… (ở đây rút gọn) diễn tả điều kiện đủ.'},
   ]},

  {n:5,zh:'数学',py:'shùxué',pos:'Danh từ',vn:'môn Toán',em:'🔢',lesson:2,
   explain:['Môn học về số, phép tính và các quy luật liên quan.'],
   usage:'Danh từ; đi cùng 课/学: 数学课, 学数学.',
   collo:['数学课','学数学','数学老师'],
   ex_zh:'我觉得数学比历史难多了，我听不懂。',ex_py:'Wǒ juéde shùxué bǐ lìshǐ nánduō le, wǒ tīng bu dǒng.',ex_vn:'Mình thấy môn Toán khó hơn Lịch Sử nhiều, mình nghe không hiểu.',
   exList:[
     {zh:'我觉得数学比历史难多了，我听不懂。',py:'Wǒ juéde shùxué bǐ lìshǐ nánduō le, wǒ tīng bu dǒng.',vn:'Mình thấy môn Toán khó hơn Lịch Sử nhiều, mình nghe không hiểu.'},
     {zh:'给笑笑讲题的那个就是我们班数学老师。',py:'Gěi Xiàoxiao jiǎng tí de nàge jiùshì wǒmen bān shùxué lǎoshī.',vn:'Người đang giảng bài cho Tiếu Tiếu chính là giáo viên Toán lớp mình đấy.'},
     {zh:'我儿子的学习比以前好多了，主要是他有兴趣了。',py:'Wǒ érzi de xuéxí bǐ yǐqián hǎoduō le, zhǔyào shì tā yǒu xìngqù le.',vn:'Việc học của con trai tôi tốt hơn trước nhiều, chủ yếu là vì nó có hứng thú rồi.'},
   ],
   hanzi:[
     {c:'数',p:'shù',type:'左右结构 · Trái-phải',st:13,ord:'娄 trái → 攵 phải',rad:'攵 (phốc – gõ nhẹ)',mean:'số, đếm',
      tip:'娄(chuỗi hạt xâu liên tiếp) + 攵(hành động) → hành động ĐẾM từng hạt → SỐ, ĐẾM; 数学 = môn học về SỐ.',
      cf:'楼 (lóu – "lầu, tòa nhà", có bộ 木")',w:'数学 / 数字 / 数一数'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi ngày chúng ta học một hai tiếng thôi.',answer:'我们每天学一两个小时吧。',answerPy:'Wǒmen měitiān xué yì-liǎng ge xiǎoshí ba.',
      note:'一两个 = số ước lượng ghép hai số liên tiếp (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn thấy môn Toán khó thì mình có thể giúp bạn.',answer:'如果你觉得数学难，我就可以帮你。',answerPy:'Rúguǒ nǐ juéde shùxué nán, wǒ jiù kěyǐ bāng nǐ.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 担心 đã học ở Bài 9).'},
   ]},

  {n:6,zh:'方便',py:'fāngbiàn',pos:'Tính từ',vn:'thuận tiện',em:'👍',lesson:3,
   explain:['Dễ dàng, không gặp trở ngại khi làm việc gì đó.'],
   usage:'Tính từ, làm vị ngữ với 很/更: 很方便, A比B方便.',
   collo:['很方便','比较方便','不方便'],
   ex_zh:'那很方便啊。',ex_py:'Nà hěn fāngbiàn a.',ex_vn:'Vậy tiện quá.',
   exList:[
     {zh:'那很方便啊。',py:'Nà hěn fāngbiàn a.',vn:'Vậy tiện quá.'},
     {zh:'哪个方便一些呢？',py:'Nǎge fāngbiàn yìxiē ne?',vn:'Chỗ nào tiện hơn một chút?'},
     {zh:'学校里边比学校外边方便，附近有三四个车站。',py:'Xuéxiào lǐbian bǐ xuéxiào wàibian fāngbiàn, fùjìn yǒu sān-sì ge chēzhàn.',vn:'Bên trong trường tiện hơn bên ngoài trường, gần đó có ba bốn trạm xe.'},
   ],
   hanzi:[
     {c:'便',p:'biàn',type:'左右结构 · Trái-phải',st:9,ord:'亻 trái → 更 phải',rad:'亻 (nhân – người)',mean:'tiện lợi',
      tip:'亻(người) + 更(thay đổi, cải tiến) → người CẢI TIẾN cách làm để dễ dàng hơn = TIỆN LỢI.',
      cf:'更 (gèng – "càng, hơn nữa", không có bộ 亻")',w:'方便 / 便宜 (pián) / 随便'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đi xe đạp bảy tám phút là đến được.',answer:'骑车七八分钟就能到。',answerPy:'Qí chē qī-bā fēnzhōng jiù néng dào.',
      note:'七八分钟 = số ước lượng (ôn lại 骑 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Chỉ cần gần đó có trạm xe thì sẽ rất tiện.',answer:'只要附近有车站，就会很方便。',answerPy:'Zhǐyào fùjìn yǒu chēzhàn, jiù huì hěn fāngbiàn.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 附近 sẽ học ngay bên dưới).'},
   ]},

  {n:7,zh:'自行车',py:'zìxíngchē',pos:'Danh từ',vn:'xe đạp',em:'🚲',lesson:3,
   explain:['Phương tiện hai bánh di chuyển bằng cách đạp.'],
   usage:'Danh từ; lượng từ đi kèm là 辆: 一辆自行车.',
   collo:['一辆自行车','骑自行车','买自行车'],
   ex_zh:'我还打算买辆自行车，骑车七八分钟就能到。',ex_py:'Wǒ hái dǎsuàn mǎi liàng zìxíngchē, qí chē qī-bā fēnzhōng jiù néng dào.',ex_vn:'Mình còn định mua một chiếc xe đạp, đi xe bảy tám phút là đến được.',
   exList:[
     {zh:'我还打算买辆自行车，骑车七八分钟就能到。',py:'Wǒ hái dǎsuàn mǎi liàng zìxíngchē, qí chē qī-bā fēnzhōng jiù néng dào.',vn:'Mình còn định mua một chiếc xe đạp, đi xe bảy tám phút là đến được.'},
     {zh:'那辆太旧了，要换一辆，很便宜，两三百块钱。',py:'Nà liàng tài jiù le, yào huàn yí liàng, hěn piányi, liǎng-sān bǎi kuài qián.',vn:'Chiếc đó cũ quá rồi, phải đổi cái khác, rất rẻ, chỉ hai ba trăm đồng thôi.'},
     {zh:'一百多？自行车啊！',py:'Yìbǎi duō? Zìxíngchē a!',vn:'Hơn một trăm á? Xe đạp cơ đấy!'},
   ],
   hanzi:[
     {c:'骑',p:'qí',type:'左右结构 · Trái-phải',st:11,ord:'马 trái → 奇 phải',rad:'马 (mã – ngựa)',mean:'cưỡi, đi (xe)',
      tip:'马(ngựa) + 奇(kỳ lạ, đơn lẻ) → ngồi một mình trên NGỰA = CƯỠI, mở rộng nghĩa ĐI (xe đạp, xe máy).',
      cf:'寄 (jì – "gửi", có bộ 宀")',w:'自行车 / 骑自行车'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc xe đạp đó cũ quá rồi, phải đổi cái khác.',answer:'那辆自行车太旧了，要换一辆。',answerPy:'Nà liàng zìxíngchē tài jiù le, yào huàn yí liàng.',
      note:'太……了 diễn tả mức độ quá mức (ôn lại 旧/换 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Tuy chiếc xe đạp đó cũ nhưng đi vẫn được.',answer:'虽然那辆自行车很旧，但是骑起来还可以。',answerPy:'Suīrán nà liàng zìxíngchē hěn jiù, dànshì qí qǐlai hái kěyǐ.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:8,zh:'骑',py:'qí',pos:'Động từ',vn:'cưỡi, đi (xe)',em:'🚴',lesson:3,
   explain:['Ngồi lên và điều khiển một phương tiện hai bánh hoặc động vật.'],
   usage:'Động từ, mang tân ngữ trực tiếp: 骑 + [xe/ngựa] (骑自行车, 骑车).',
   collo:['骑自行车','骑车','骑马'],
   ex_zh:'我还打算买辆自行车，骑车七八分钟就能到。',ex_py:'Wǒ hái dǎsuàn mǎi liàng zìxíngchē, qí chē qī-bā fēnzhōng jiù néng dào.',ex_vn:'Mình còn định mua một chiếc xe đạp, đi xe bảy tám phút là đến được.',
   exList:[
     {zh:'我还打算买辆自行车，骑车七八分钟就能到。',py:'Wǒ hái dǎsuàn mǎi liàng zìxíngchē, qí chē qī-bā fēnzhōng jiù néng dào.',vn:'Mình còn định mua một chiếc xe đạp, đi xe bảy tám phút là đến được.'},
     {zh:'这个时间，骑车比坐公共汽车快得多。',py:'Zhège shíjiān, qí chē bǐ zuò gōnggòngqìchē kuài de duō.',vn:'Giờ này, đi xe đạp nhanh hơn nhiều so với đi xe buýt.'},
     {zh:'去中山南路骑自行车快还是坐公共汽车快？',py:'Qù Zhōngshān nánlù qí zìxíngchē kuài háishi zuò gōnggòngqìchē kuài?',vn:'Đi đường Trung Sơn Nam đi xe đạp nhanh hay đi xe buýt nhanh?'},
   ],
   hanzi:[
     {c:'骑',p:'qí',type:'左右结构 · Trái-phải',st:11,ord:'马 trái → 奇 phải',rad:'马 (mã – ngựa)',mean:'cưỡi, đi (xe)',
      tip:'马(ngựa) + 奇(đơn lẻ) → ngồi một mình trên NGỰA = CƯỠI, mở rộng nghĩa ĐI (xe đạp, xe máy).',
      cf:'崎 (qí – "gập ghềnh", có bộ 山")',w:'骑车 / 骑自行车 / 骑马'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Buổi sáng sớm, đi xe đạp nhanh hơn đi bộ nhiều.',answer:'早上，骑自行车比走路快得多。',answerPy:'Zǎoshang, qí zìxíngchē bǐ zǒulù kuài de duō.',
      note:'A比B+tính từ+得多 diễn tả mức chênh lệch lớn (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Nếu trời không mưa thì tôi thích đi xe đạp đi làm.',answer:'如果不下雨，我喜欢骑自行车上班。',answerPy:'Rúguǒ bú xiàyǔ, wǒ xǐhuan qí zìxíngchē shàngbān.',
      note:'如果……就…… (ở đây rút gọn) diễn tả giả thiết.'},
   ]},

  {n:9,zh:'旧',py:'jiù',pos:'Tính từ',vn:'cũ',em:'📦',lesson:3,
   explain:['Đã qua sử dụng lâu, không còn mới, trái nghĩa với 新.'],
   usage:'Tính từ, làm vị ngữ hoặc định ngữ: 很旧, 旧车.',
   collo:['太旧了','旧车','旧衣服'],
   ex_zh:'那辆太旧了，要换一辆。',ex_py:'Nà liàng tài jiù le, yào huàn yí liàng.',ex_vn:'Chiếc đó cũ quá rồi, phải đổi cái khác.',
   exList:[
     {zh:'那辆太旧了，要换一辆。',py:'Nà liàng tài jiù le, yào huàn yí liàng.',vn:'Chiếc đó cũ quá rồi, phải đổi cái khác.'},
     {zh:'听说你们店可以用旧车换新车？',py:'Tīngshuō nǐmen diàn kěyǐ yòng jiù chē huàn xīn chē?',vn:'Nghe nói cửa hàng các bạn có thể dùng xe cũ đổi xe mới à?'},
     {zh:'我那辆旧车送给你吧。',py:'Wǒ nà liàng jiù chē sòng gěi nǐ ba.',vn:'Chiếc xe cũ đó của tôi tặng bạn luôn nhé.'},
   ],
   hanzi:[
     {c:'旧',p:'jiù',type:'半包围结构 · Bán bao vây',st:5,ord:'日 trên → 一+丨 dưới',rad:'日 (nhật)',mean:'cũ',
      tip:'Chữ giản thể mô phỏng hình chiếc lồng đèn cũ (biến thể từ chữ phồn thể 舊) → CŨ, trái nghĩa với 新.',
      cf:'日 (rì – "mặt trời, ngày", không có nét dưới")',w:'旧车 / 很旧 / 新旧'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc xe này rẻ hơn chiếc kia hai ba trăm đồng, vì nó hơi cũ.',answer:'这辆车比那辆便宜两三百块钱，因为它有点儿旧。',answerPy:'Zhè liàng chē bǐ nà liàng piányi liǎng-sān bǎi kuài qián, yīnwèi tā yǒudiǎnr jiù.',
      note:'A比B便宜+số tiền diễn tả mức chênh lệch cụ thể.'},
     {promptLang:'vi',prompt:'Tuy chiếc áo này cũ nhưng tôi vẫn rất thích.',answer:'虽然这件衣服旧了，但是我还是很喜欢。',answerPy:'Suīrán zhè jiàn yīfu jiù le, dànshì wǒ háishi hěn xǐhuan.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:10,zh:'换',py:'huàn',pos:'Động từ',vn:'đổi, thay thế',em:'🔄',lesson:3,
   explain:['Thay thế vật này bằng vật khác.'],
   usage:'Động từ, mang tân ngữ trực tiếp: 换 + [vật] (换一辆, 换车).',
   collo:['换一辆','换车','换钱'],
   ex_zh:'那辆太旧了，要换一辆。',ex_py:'Nà liàng tài jiù le, yào huàn yí liàng.',ex_vn:'Chiếc đó cũ quá rồi, phải đổi cái khác.',
   exList:[
     {zh:'那辆太旧了，要换一辆。',py:'Nà liàng tài jiù le, yào huàn yí liàng.',vn:'Chiếc đó cũ quá rồi, phải đổi cái khác.'},
     {zh:'听说你们店可以用旧车换新车？',py:'Tīngshuō nǐmen diàn kěyǐ yòng jiù chē huàn xīn chē?',vn:'Nghe nói cửa hàng các bạn có thể dùng xe cũ đổi xe mới à?'},
     {zh:'又换了？你已经换了四五辆了吧？',py:'Yòu huàn le? Nǐ yǐjīng huànle sì-wǔ liàng le ba?',vn:'Lại đổi nữa à? Bạn đổi bốn năm chiếc rồi nhỉ?'},
   ],
   hanzi:[
     {c:'换',p:'huàn',type:'左右结构 · Trái-phải',st:10,ord:'扌 trái → 奂 phải',rad:'扌 (thủ – tay)',mean:'đổi, thay thế',
      tip:'扌(tay) + 奂(sáng sủa, mới mẻ) → dùng TAY thay đổi để có cái MỚI hơn = ĐỔI.',
      cf:'唤 (huàn – "gọi", có bộ 口")',w:'换车 / 换钱 / 交换'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn đổi bốn năm chiếc điện thoại rồi nhỉ?',answer:'你已经换了四五个手机了吧？',answerPy:'Nǐ yǐjīng huànle sì-wǔ ge shǒujī le ba?',
      note:'四五个 = số ước lượng (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Nếu chiếc xe này hỏng thì bạn nên đổi cái mới đi.',answer:'如果这辆车坏了，你就应该换一辆新的。',answerPy:'Rúguǒ zhè liàng chē huài le, nǐ jiù yīnggāi huàn yí liàng xīn de.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:11,zh:'地方',py:'dìfang',pos:'Danh từ',vn:'chỗ, nơi',em:'📍',lesson:4,
   explain:['Vị trí, khu vực cụ thể nào đó.'],
   usage:'Danh từ; làm định ngữ hoặc đứng độc lập: 这个地方, 找地方.',
   collo:['这个地方','找地方','安静的地方'],
   ex_zh:'这两个地方的房子一样吗？',ex_py:'Zhè liǎng ge dìfang de fángzi yíyàng ma?',ex_vn:'Nhà ở hai chỗ này có giống nhau không?',
   exList:[
     {zh:'这两个地方的房子一样吗？',py:'Zhè liǎng ge dìfang de fángzi yíyàng ma?',vn:'Nhà ở hai chỗ này có giống nhau không?'},
     {zh:'走，找个环境好的地方，我早就想跟你聊聊了。',py:'Zǒu, zhǎo ge huánjìng hǎo de dìfang, wǒ zǎo jiù xiǎng gēn nǐ liáoliao le.',vn:'Đi nào, tìm chỗ nào môi trường tốt, mình muốn nói chuyện với bạn từ lâu rồi.'},
     {zh:'我很高兴你们喜欢这个地方，下次我们再来。',py:'Wǒ hěn gāoxìng nǐmen xǐhuan zhège dìfang, xià cì wǒmen zài lái.',vn:'Tôi rất vui vì các bạn thích chỗ này, lần sau chúng ta lại đến.'},
   ],
   hanzi:[
     {c:'方',p:'fāng',type:'独体字 · Chữ đơn',st:4,ord:'nét liền',rad:'方 (phương)',mean:'phương hướng, vuông',
      tip:'Chữ tượng hình mô phỏng hai chiếc thuyền buộc nhau (hoặc lưỡi cày) → PHƯƠNG HƯỚNG; 地方 = "khoảnh đất theo hướng nào đó" = NƠI, CHỖ.',
      cf:'放 (fàng – "đặt, thả", có bộ 攵")',w:'地方 / 方便 / 四方'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngôi nhà đó môi trường rất tốt, chủ yếu là yên tĩnh.',answer:'那个地方环境很好，主要是很安静。',answerPy:'Nàge dìfang huánjìng hěn hǎo, zhǔyào shì hěn ānjìng.',
      note:'主要是 diễn tả lý do chính (ôn lại 环境/主要 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Nếu bạn tìm được chỗ yên tĩnh thì báo cho tôi biết nhé.',answer:'如果你找到安静的地方，就告诉我吧。',answerPy:'Rúguǒ nǐ zhǎodào ānjìng de dìfang, jiù gàosu wǒ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 安静 đã học ở Bài 8).'},
   ]},

  {n:12,zh:'中介',py:'zhōngjiè',pos:'Danh từ',vn:'môi giới',em:'🤝',lesson:4,
   explain:['Người/tổ chức đứng giữa kết nối hai bên, thường dùng cho môi giới nhà đất.'],
   usage:'Danh từ, làm chủ ngữ hoặc tân ngữ trong câu.',
   collo:['房屋中介','中介公司','找中介'],
   ex_zh:'这两个地方的房子一样吗？不一样。',ex_py:'Zhè liǎng ge dìfang de fángzi yíyàng ma? Bù yíyàng.',ex_vn:'Nhà ở hai chỗ này có giống nhau không? Không giống.',
   exList:[
     {zh:'这两个地方的房子一样吗？不一样。',py:'Zhè liǎng ge dìfang de fángzi yíyàng ma? Bù yíyàng.',vn:'Nhà ở hai chỗ này có giống nhau không? Không giống.'},
     {zh:'您看，学校外边的房子比学校里边的大一些。',py:'Nín kàn, xuéxiào wàibian de fángzi bǐ xuéxiào lǐbian de dà yìxiē.',vn:'Anh xem, nhà bên ngoài trường to hơn nhà bên trong trường một chút.'},
     {zh:'学校里边比学校外边方便，附近有三四个车站。',py:'Xuéxiào lǐbian bǐ xuéxiào wàibian fāngbiàn, fùjìn yǒu sān-sì ge chēzhàn.',vn:'Bên trong trường tiện hơn bên ngoài trường, gần đó có ba bốn trạm xe.'},
   ],
   hanzi:[
     {c:'介',p:'jiè',type:'独体字 · Chữ đơn',st:4,ord:'nét liền',rad:'人 (nhân – người)',mean:'ở giữa, giới thiệu',
      tip:'Chữ tượng hình mô phỏng người đứng GIỮA hai bên → mở rộng nghĩa GIỚI THIỆU, MÔI GIỚI.',
      cf:'个 (gè – lượng từ, nét gần giống")',w:'中介 / 介绍'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người môi giới nói nhà bên ngoài trường to hơn nhà bên trong trường một chút.',answer:'中介说学校外边的房子比学校里边的大一些。',answerPy:'Zhōngjiè shuō xuéxiào wàibian de fángzi bǐ xuéxiào lǐbian de dà yìxiē.',
      note:'A比B+tính từ+一些 diễn tả mức chênh lệch nhỏ.'},
     {promptLang:'vi',prompt:'Nếu bạn muốn thuê nhà thì nên hỏi người môi giới.',answer:'如果你想租房子，就应该问问中介。',answerPy:'Rúguǒ nǐ xiǎng zū fángzi, jiù yīnggāi wènwen zhōngjiè.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:13,zh:'主要',py:'zhǔyào',pos:'Tính từ',vn:'chủ yếu',em:'⭐',lesson:4,
   explain:['Quan trọng nhất, đóng vai trò chính.'],
   usage:'Tính từ/phó từ, thường đứng đầu vị ngữ: 主要是 + [lý do chính].',
   collo:['主要是','主要原因','最主要'],
   ex_zh:'大小没关系，主要是环境，哪个更安静？',ex_py:'Dàxiǎo méi guānxi, zhǔyào shì huánjìng, nǎge gèng ānjìng?',ex_vn:'To nhỏ không quan trọng, chủ yếu là môi trường, chỗ nào yên tĩnh hơn?',
   exList:[
     {zh:'大小没关系，主要是环境，哪个更安静？',py:'Dàxiǎo méi guānxi, zhǔyào shì huánjìng, nǎge gèng ānjìng?',vn:'To nhỏ không quan trọng, chủ yếu là môi trường, chỗ nào yên tĩnh hơn?'},
     {zh:'我爸爸身体那么好，主要是因为每天锻炼。',py:'Wǒ bàba shēntǐ nàme hǎo, zhǔyào shì yīnwèi měitiān duànliàn.',vn:'Bố tôi sức khỏe tốt thế, chủ yếu là vì mỗi ngày đều tập thể dục.'},
     {zh:'我儿子的学习比以前好多了，主要是他有兴趣了。',py:'Wǒ érzi de xuéxí bǐ yǐqián hǎoduō le, zhǔyào shì tā yǒu xìngqù le.',vn:'Việc học của con trai tôi tốt hơn trước nhiều, chủ yếu là vì nó có hứng thú rồi.'},
   ],
   hanzi:[
     {c:'要',p:'yào',type:'上下结构 · Trên-dưới',st:9,ord:'覀 trên → 女 dưới',rad:'覀 (á)',mean:'cần, quan trọng',
      tip:'Chữ cổ mô phỏng người phụ nữ chống hai tay vào eo (điểm mấu chốt cơ thể) → nghĩa ĐIỂM MẤU CHỐT, mở rộng thành QUAN TRỌNG, CẦN.',
      cf:'腰 (yāo – "cái eo", có bộ 月")',w:'主要 / 要求 / 需要'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'To nhỏ không quan trọng, chủ yếu là môi trường.',answer:'大小没关系，主要是环境。',answerPy:'Dàxiǎo méi guānxi, zhǔyào shì huánjìng.',
      note:'主要是 giới thiệu lý do/yếu tố chính (ôn lại 环境 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Vì chủ yếu là môi trường yên tĩnh nên tôi thích căn nhà đó.',answer:'因为主要是环境安静，所以我喜欢那个房子。',answerPy:'Yīnwèi zhǔyào shì huánjìng ānjìng, suǒyǐ wǒ xǐhuan nàge fángzi.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:14,zh:'环境',py:'huánjìng',pos:'Danh từ',vn:'môi trường',em:'🌳',lesson:4,
   explain:['Điều kiện xung quanh nơi sinh sống hoặc làm việc.'],
   usage:'Danh từ; làm chủ ngữ hoặc tân ngữ: 环境好, 环境安静.',
   collo:['环境好','环境安静','学校环境'],
   ex_zh:'大小没关系，主要是环境，哪个更安静？',ex_py:'Dàxiǎo méi guānxi, zhǔyào shì huánjìng, nǎge gèng ānjìng?',ex_vn:'To nhỏ không quan trọng, chủ yếu là môi trường, chỗ nào yên tĩnh hơn?',
   exList:[
     {zh:'大小没关系，主要是环境，哪个更安静？',py:'Dàxiǎo méi guānxi, zhǔyào shì huánjìng, nǎge gèng ānjìng?',vn:'To nhỏ không quan trọng, chủ yếu là môi trường, chỗ nào yên tĩnh hơn?'},
     {zh:'走，找个环境好的地方，我早就想跟你聊聊了。',py:'Zǒu, zhǎo ge huánjìng hǎo de dìfang, wǒ zǎo jiù xiǎng gēn nǐ liáoliao le.',vn:'Đi nào, tìm chỗ nào môi trường tốt, mình muốn nói chuyện với bạn từ lâu rồi.'},
     {zh:'这家饭馆的环境真好，菜也很好吃。',py:'Zhè jiā fànguǎn de huánjìng zhēn hǎo, cài yě hěn hǎochī.',vn:'Quán ăn này môi trường đẹp thật, đồ ăn cũng ngon.'},
   ],
   hanzi:[
     {c:'境',p:'jìng',type:'左右结构 · Trái-phải',st:14,ord:'土 trái → 竟 phải',rad:'土 (thổ – đất)',mean:'cảnh, biên giới',
      tip:'土(đất) + 竟(cuối cùng, hết) → RANH GIỚI của một vùng đất, mở rộng nghĩa MÔI TRƯỜNG, HOÀN CẢNH.',
      cf:'镜 (jìng – "gương, kính", có bộ 钅")',w:'环境 / 边境 / 环境好'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bên trong trường không yên tĩnh bằng bên ngoài trường.',answer:'学校里边的没有学校外边的那么安静。',answerPy:'Xuéxiào lǐbian de méiyǒu xuéxiào wàibian de nàme ānjìng.',
      note:'A没有B那么+tính từ diễn tả phủ định của so sánh (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Nếu môi trường yên tĩnh thì tôi sẽ thuê căn nhà đó.',answer:'如果环境安静，我就租那个房子。',answerPy:'Rúguǒ huánjìng ānjìng, wǒ jiù zū nàge fángzi.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:15,zh:'附近',py:'fùjìn',pos:'Danh từ',vn:'vùng lân cận',em:'🗺️',lesson:4,
   explain:['Khu vực gần một địa điểm nào đó.'],
   usage:'Danh từ chỉ nơi chốn; đứng độc lập hoặc làm định ngữ: 附近有, 学校附近.',
   collo:['附近有','学校附近','附近的超市'],
   ex_zh:'学校里边比学校外边方便，附近有三四个车站。',ex_py:'Xuéxiào lǐbian bǐ xuéxiào wàibian fāngbiàn, fùjìn yǒu sān-sì ge chēzhàn.',ex_vn:'Bên trong trường tiện hơn bên ngoài trường, gần đó có ba bốn trạm xe.',
   exList:[
     {zh:'学校里边比学校外边方便，附近有三四个车站。',py:'Xuéxiào lǐbian bǐ xuéxiào wàibian fāngbiàn, fùjìn yǒu sān-sì ge chēzhàn.',vn:'Bên trong trường tiện hơn bên ngoài trường, gần đó có ba bốn trạm xe.'},
     {zh:'这儿附近有没有安静点儿的咖啡店？',py:'Zhèr fùjìn yǒu méiyǒu ānjìng diǎnr de kāfēidiàn?',vn:'Gần đây có quán cà phê nào yên tĩnh hơn không?'},
     {zh:'楼上有个咖啡店，比这儿安静得多。',py:'Lóushàng yǒu ge kāfēidiàn, bǐ zhèr ānjìng de duō.',vn:'Trên lầu có một quán cà phê, yên tĩnh hơn ở đây nhiều.'},
   ],
   hanzi:[
     {c:'附',p:'fù',type:'左右结构 · Trái-phải',st:7,ord:'阝 trái → 付 phải',rad:'阝 (phụ – gò đất)',mean:'gần kề, phụ thuộc',
      tip:'阝(gò đất) + 付(giao cho, gắn liền) → mảnh đất GẮN LIỀN kề bên = GẦN KỀ; 附近 = vùng đất gần đó.',
      cf:'付 (fù – "trả tiền", không có bộ 阝")',w:'附近 / 附近的超市'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gần đó có ba bốn trạm xe.',answer:'附近有三四个车站。',answerPy:'Fùjìn yǒu sān-sì ge chēzhàn.',
      note:'三四个 = số ước lượng ghép hai số liên tiếp (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Nếu gần đây có siêu thị thì sẽ rất tiện.',answer:'如果附近有超市，就会很方便。',answerPy:'Rúguǒ fùjìn yǒu chāoshì, jiù huì hěn fāngbiàn.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 超市 đã học ở Bài 4).'},
   ]},
];

const wuData = [
  {img:'📏',label:'个子',py:'gèzi',letter:'A'},
  {img:'📜',label:'历史',py:'lìshǐ',letter:'B'},
  {img:'🔢',label:'数学',py:'shùxué',letter:'C'},
  {img:'🚲',label:'自行车',py:'zìxíngchē',letter:'D'},
  {img:'📍',label:'地方',py:'dìfang',letter:'E'},
  {img:'🌳',label:'环境',py:'huánjìng',letter:'F'},
];

var dialogData = [
  {scene:'在教室 · Trong lớp học (so sánh chiều cao)',
   preQuiz:[
     {q:'谁个子高？',opts:['马可','大山','一样高'],ans:0},
     {q:'谁年纪大？',opts:['大山','马可','一样大'],ans:0},
     {q:'谁的汉语说得更好？',opts:['马可','大山','一样好'],ans:0},
   ],
   lines:[
     {sp:0,zh:'大山，你和马可谁个子高？',py:'Dàshān, nǐ hé Mǎkě shéi gèzi gāo?',vn:'Đại Sơn, giữa bạn và Marco ai cao hơn?'},
     {sp:1,zh:'马可比我高，我比马可矮一点儿。',py:'Mǎkě bǐ wǒ gāo, wǒ bǐ Mǎkě ǎi yìdiǎnr.',vn:'Marco cao hơn mình, mình thấp hơn Marco một chút.'},
     {sp:0,zh:'那你们谁大？',py:'Nà nǐmen shéi dà?',vn:'Vậy ai lớn tuổi hơn?'},
     {sp:1,zh:'我比马可大两岁。',py:'Wǒ bǐ Mǎkě dà liǎng suì.',vn:'Mình lớn hơn Marco hai tuổi.'},
     {sp:0,zh:'你们谁的汉语说得更好？',py:'Nǐmen shéi de Hànyǔ shuō de gèng hǎo?',vn:'Ai trong hai bạn nói tiếng Trung giỏi hơn?'},
     {sp:1,zh:'马可比我说得好一些，我的汉语没有他好。',py:'Mǎkě bǐ wǒ shuō de hǎo yìxiē, wǒ de Hànyǔ méiyǒu tā hǎo.',vn:'Marco nói giỏi hơn mình một chút, tiếng Trung của mình không giỏi bằng cậu ấy.'},
   ]},
  {scene:'在教室 · Trong lớp học (môn học yêu thích)',
   preQuiz:[
     {q:'小明喜欢什么课？',opts:['历史课、体育课','数学课','都不喜欢'],ans:0},
     {q:'小明觉得数学怎么样？',opts:['比历史难多了','很简单','和历史一样难'],ans:0},
     {q:'他们打算每天学多长时间？',opts:['一两个小时','三四个小时','半个小时'],ans:0},
   ],
   lines:[
     {sp:1,zh:'我喜欢历史课、体育课，不喜欢数学课。',py:'Wǒ xǐhuan lìshǐ kè, tǐyù kè, bù xǐhuan shùxué kè.',vn:'Mình thích môn Lịch Sử, môn Thể Dục, không thích môn Toán.'},
     {sp:0,zh:'为什么？数学也很有意思啊。',py:'Wèi shénme? Shùxué yě hěn yǒu yìsi a.',vn:'Sao vậy? Môn Toán cũng thú vị mà.'},
     {sp:1,zh:'我觉得数学比历史难多了，我听不懂。',py:'Wǒ juéde shùxué bǐ lìshǐ nánduō le, wǒ tīng bu dǒng.',vn:'Mình thấy môn Toán khó hơn Lịch Sử nhiều, mình nghe không hiểu.'},
     {sp:0,zh:'别担心，我可以帮你。',py:'Bié dānxīn, wǒ kěyǐ bāng nǐ.',vn:'Đừng lo, mình có thể giúp bạn.'},
     {sp:1,zh:'好啊，我们每天学多长时间？',py:'Hǎo a, wǒmen měitiān xué duō cháng shíjiān?',vn:'Được đấy, mỗi ngày chúng ta học bao lâu?'},
     {sp:0,zh:'一两个小时吧。',py:'Yì-liǎng ge xiǎoshí ba.',vn:'Khoảng một hai tiếng thôi.'},
   ]},
  {scene:'在休息室 · Trong phòng giải lao',
   preQuiz:[
     {q:'小丽最近为什么来得早？',opts:['搬家了','换工作了','早起了'],ans:0},
     {q:'小丽走路要多久到公司？',opts:['二十分钟','十分钟','一个小时'],ans:0},
     {q:'小丽为什么要换自行车？',opts:['那辆太旧了','丢了','被偷了'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你最近比以前来得早多了，搬家了？',py:'Nǐ zuìjìn bǐ yǐqián lái de zǎoduō le, bān jiā le?',vn:'Dạo này bạn đến sớm hơn trước nhiều, chuyển nhà rồi à?'},
     {sp:1,zh:'是啊，你不知道？我上个月就搬家了，走路二十分钟就到。',py:'Shì a, nǐ bù zhīdào? Wǒ shàng ge yuè jiù bān jiā le, zǒu lù èrshí fēnzhōng jiù dào.',vn:'Đúng vậy, bạn không biết à? Tháng trước mình chuyển nhà rồi, đi bộ hai mươi phút là đến.'},
     {sp:0,zh:'那很方便啊。',py:'Nà hěn fāngbiàn a.',vn:'Vậy tiện quá.'},
     {sp:1,zh:'我还打算买辆自行车，骑车七八分钟就能到。',py:'Wǒ hái dǎsuàn mǎi liàng zìxíngchē, qí chē qī-bā fēnzhōng jiù néng dào.',vn:'Mình còn định mua một chiếc xe đạp, đi xe bảy tám phút là đến được.'},
     {sp:0,zh:'你不是有一辆吗？',py:'Nǐ bú shì yǒu yí liàng ma?',vn:'Chẳng phải bạn có một chiếc rồi sao?'},
     {sp:1,zh:'那辆太旧了，要换一辆，很便宜，两三百块钱。',py:'Nà liàng tài jiù le, yào huàn yí liàng, hěn piányi, liǎng-sān bǎi kuài qián.',vn:'Chiếc đó cũ quá rồi, phải đổi cái khác, rất rẻ, chỉ hai ba trăm đồng thôi.'},
   ]},
  {scene:'在看房子 · Đang xem nhà',
   preQuiz:[
     {q:'学校外边和里边的房子一样吗？',opts:['不一样，外边的更大','一样大','里边的更大'],ans:0},
     {q:'大山最看重什么？',opts:['环境安不安静','房子大小','价格'],ans:0},
     {q:'学校里边方便吗？',opts:['比外边方便，附近有车站','不方便','和外边一样'],ans:0},
   ],
   lines:[
     {sp:0,zh:'这两个地方的房子一样吗？',py:'Zhè liǎng ge dìfang de fángzi yíyàng ma?',vn:'Nhà ở hai chỗ này có giống nhau không?'},
     {sp:1,zh:'不一样。您看，学校外边的房子比学校里边的大一些。',py:'Bù yíyàng. Nín kàn, xuéxiào wàibian de fángzi bǐ xuéxiào lǐbian de dà yìxiē.',vn:'Không giống. Anh xem, nhà bên ngoài trường to hơn nhà bên trong trường một chút.'},
     {sp:0,zh:'大小没关系，主要是环境，哪个更安静？',py:'Dàxiǎo méi guānxi, zhǔyào shì huánjìng, nǎge gèng ānjìng?',vn:'To nhỏ không quan trọng, chủ yếu là môi trường, chỗ nào yên tĩnh hơn?'},
     {sp:1,zh:'学校里边的没有学校外边的那么安静。',py:'Xuéxiào lǐbian de méiyǒu xuéxiào wàibian de nàme ānjìng.',vn:'Bên trong trường không yên tĩnh bằng bên ngoài trường.'},
     {sp:0,zh:'哪个方便一些呢？',py:'Nǎge fāngbiàn yìxiē ne?',vn:'Chỗ nào tiện hơn một chút?'},
     {sp:1,zh:'学校里边比学校外边方便，附近有三四个车站。',py:'Xuéxiào lǐbian bǐ xuéxiào wàibian fāngbiàn, fùjìn yǒu sān-sì ge chēzhàn.',vn:'Bên trong trường tiện hơn bên ngoài trường, gần đó có ba bốn trạm xe.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'个子',right:'高'},
  {left:'历史',right:'课'},
  {left:'骑',right:'自行车'},
  {left:'换',right:'一辆'},
  {left:'学校',right:'附近'},
  {left:'环境',right:'安静'},
  {left:'走路',right:'二十分钟'},
  {left:'因为数学比历史难多了，',right:'所以我听不懂。'},
  {left:'虽然那辆自行车很旧，',right:'但是骑起来还可以。'},
  {left:'如果你觉得数学难，',right:'我就可以帮你。'},
  {left:'只要附近有车站，',right:'就会很方便。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我姐姐比我哥哥',blank:'矮',post:'一点儿。',hint:'(thấp)',ans:'矮'},
  {pre:'你和马可谁',blank:'个子',post:'高？',hint:'(vóc dáng)',ans:'个子'},
  {pre:'我喜欢',blank:'历史',post:'课、体育课。',hint:'(môn Lịch Sử)',ans:'历史'},
  {pre:'我们下午有',blank:'体育',post:'课。',hint:'(môn Thể Dục)',ans:'体育'},
  {pre:'我觉得',blank:'数学',post:'比体育有意思多了。',hint:'(môn Toán)',ans:'数学'},
  {pre:'坐地铁上班很',blank:'方便',post:'。',hint:'(thuận tiện)',ans:'方便'},
  {pre:'我还打算买辆',blank:'自行车',post:'。',hint:'(xe đạp)',ans:'自行车'},
  {pre:'他每天',blank:'骑',post:'自行车去公司，只要十分钟。',hint:'(cưỡi, đi xe)',ans:'骑'},
  {pre:'这件衣服太',blank:'旧',post:'了，可以送人。',hint:'(cũ)',ans:'旧'},
  {pre:'手机坏了，要',blank:'换',post:'一个新的。',hint:'(đổi, thay)',ans:'换'},
  {pre:'这个',blank:'地方',post:'的环境怎么样？',hint:'(chỗ, nơi)',ans:'地方'},
  {pre:'我喜欢这个地方，',blank:'主要',post:'是环境很好。',hint:'(chủ yếu)',ans:'主要'},
  {pre:'这家咖啡店的',blank:'环境',post:'很安静。',hint:'(môi trường)',ans:'环境'},
  {pre:'我家',blank:'附近',post:'有个超市。',hint:'(vùng lân cận)',ans:'附近'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','朋友','比','我','矮','，','我','比','我','朋友','高','一点儿','。'],ans:'我朋友比我矮，我比我朋友高一点儿。',audio:'我朋友比我矮，我比我朋友高一点儿。'},
  {words:['我','觉得','历史','比','数学','容易','多','了','。'],ans:'我觉得历史比数学容易多了。',audio:'我觉得历史比数学容易多了。'},
  {words:['你','最近','比','以前','来','得','早','多','了','。'],ans:'你最近比以前来得早多了。',audio:'你最近比以前来得早多了。'},
  {words:['我','朋友','打算','换','一','辆','新','自行车','。'],ans:'我朋友打算换一辆新自行车。',audio:'我朋友打算换一辆新自行车。'},
  {words:['因为','数学','题','很','难','，','所以','我','问','了','老师','。'],ans:'因为数学题很难，所以我问了老师。',audio:'因为数学题很难，所以我问了老师。'},
  {words:['虽然','那个','地方','很','远','，','但是','环境','很','安静','。'],ans:'虽然那个地方很远，但是环境很安静。',audio:'虽然那个地方很远，但是环境很安静。'},
  {words:['如果','你','觉得','历史','难','，','我们','就','一起','复习','吧','。'],ans:'如果你觉得历史难，我们就一起复习吧。',audio:'如果你觉得历史难，我们就一起复习吧。'},
  {words:['学校','里边','比','学校','外边','方便','。'],ans:'学校里边比学校外边方便。',audio:'学校里边比学校外边方便。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我矮马可一点儿比。',
   opts:['我比马可矮一点儿。','我矮马可一点儿比。','我比马可一点儿矮。','马可矮我比一点儿。'],ans:0,
   exp:'Cấu trúc so sánh: A+比+B+tính từ+一点儿, 比 phải đứng ngay sau chủ ngữ A, trước B, và tính từ đứng sau B.'},
  {wrong:'数学比历史了难多。',
   opts:['数学比历史难多了。','数学比历史了难多。','数学难比历史多了。','数学比历史难了多。'],ans:0,
   exp:'"多了" (mức độ chênh lệch lớn) phải đặt liền sau tính từ (难), không tách rời hoặc đảo vị trí với 了.'},
  {wrong:'这个咖啡店没有那么安静那个咖啡店。',
   opts:['这个咖啡店没有那个咖啡店那么安静。','这个咖啡店没有那么安静那个咖啡店。','这个咖啡店那个咖啡店没有那么安静。','没有这个咖啡店那个咖啡店那么安静。'],ans:0,
   exp:'Cấu trúc phủ định: A+没有+B+(这么/那么)+tính từ, B phải đứng ngay sau 没有, trước 那么.'},
  {wrong:'我们每天做三两个小时的作业吧。',
   opts:['我们每天做两三个小时的作业吧。','我们每天做三两个小时的作业吧。','我们每天做两个三小时的作业吧。','我们每天做三个两小时的作业吧。'],ans:0,
   exp:'Số ước lượng ghép hai số liên tiếp phải theo đúng thứ tự tăng dần (两三, không phải 三两).'},
  {wrong:'这儿附近有个五六咖啡店。',
   opts:['这儿附近有五六个咖啡店。','这儿附近有个五六咖啡店。','这儿附近有五六咖啡店个。','这儿附近五六个有咖啡店。'],ans:0,
   exp:'Số ước lượng (五六) phải đứng TRƯỚC lượng từ (个), theo cấu trúc [số ước lượng]+lượng từ+danh từ.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'大山和马可比，谁更高？谁的汉语更好？',
     q_vn:'So sánh Đại Sơn và Marco, ai cao hơn? Ai nói tiếng Trung giỏi hơn?',
     hint:'马可更高，马可的汉语也更好一些',
     sample:'马可比大山高，马可的汉语也比大山说得好一些。',
     sample_vn:'Marco cao hơn Đại Sơn, tiếng Trung của Marco cũng nói giỏi hơn Đại Sơn một chút.',
     note:'A比B+tính từ diễn tả so sánh hơn (điểm ngữ pháp bài này).'},
    {q_zh:'小明为什么不喜欢数学课？同学怎么帮他？',
     q_vn:'Vì sao Tiểu Minh không thích môn Toán? Bạn học giúp cậu ấy thế nào?',
     hint:'数学比历史难多了，听不懂，同学说可以帮他',
     sample:'小明觉得数学比历史难多了，他听不懂，所以同学说可以帮他，他们每天学一两个小时。',
     sample_vn:'Tiểu Minh thấy môn Toán khó hơn Lịch Sử nhiều, cậu ấy nghe không hiểu, nên bạn học nói có thể giúp cậu ấy, họ học mỗi ngày một hai tiếng.',
     note:'比+tính từ+多了 diễn tả mức độ chênh lệch lớn.'},
    {q_zh:'小丽最近为什么来得早？她打算怎么换交通方式？',
     q_vn:'Vì sao dạo này Tiểu Lệ đến sớm? Cô ấy định thay đổi phương tiện đi lại thế nào?',
     hint:'搬家了，打算买辆自行车',
     sample:'小丽最近搬家了，走路二十分钟就到，她还打算买辆自行车，骑车七八分钟就能到。',
     sample_vn:'Tiểu Lệ dạo này chuyển nhà rồi, đi bộ hai mươi phút là đến, cô ấy còn định mua một chiếc xe đạp, đi xe bảy tám phút là đến được.',
     note:'Số ước lượng (hai số liên tiếp) diễn tả khoảng thời gian không chính xác (điểm ngữ pháp bài này).'},
    {q_zh:'大山在看的两个地方的房子，哪个更安静？哪个更方便？',
     q_vn:'Trong hai chỗ nhà mà Đại Sơn đang xem, chỗ nào yên tĩnh hơn? Chỗ nào tiện hơn?',
     hint:'学校外边更安静，学校里边更方便',
     sample:'学校里边的没有学校外边的那么安静，但是学校里边比学校外边方便，附近有三四个车站。',
     sample_vn:'Bên trong trường không yên tĩnh bằng bên ngoài trường, nhưng bên trong trường tiện hơn bên ngoài trường, gần đó có ba bốn trạm xe.',
     note:'A没有B那么+tính từ diễn tả phủ định của so sánh (điểm ngữ pháp bài này).'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Anh trai tôi cao hơn bố tôi một chút.', zh:'我哥哥比我爸爸高一点儿。', py:'Wǒ gēge bǐ wǒ bàba gāo yìdiǎnr.'},
  {vi:'Mình thấy tiếng Trung khó hơn tiếng Anh nhiều.', zh:'我觉得汉语比英语难多了。', py:'Wǒ juéde Hànyǔ bǐ Yīngyǔ nánduō le.'},
  {vi:'Chúng ta luyện tập tám chín phút mỗi ngày thôi.', zh:'我们每天练习八九分钟吧。', py:'Wǒmen měitiān liànxí bā-jiǔ fēnzhōng ba.'},
  {vi:'Chiếc điện thoại đó cũ quá rồi, phải đổi cái mới.', zh:'那个手机太旧了，要换一个新的。', py:'Nàge shǒujī tài jiù le, yào huàn yí ge xīn de.'},
  {vi:'Phòng của tôi không rộng bằng phòng của bạn tôi.', zh:'我的房间没有我朋友的房间那么大。', py:'Wǒ de fángjiān méiyǒu wǒ péngyou de fángjiān nàme dà.'},
  {vi:'Con tôi thích trường này, chủ yếu là vì thầy cô dạy giỏi.', zh:'我孩子喜欢这个学校，主要是因为老师教得好。', py:'Wǒ háizi xǐhuan zhège xuéxiào, zhǔyào shì yīnwèi lǎoshī jiāo de hǎo.'},
  {vi:'Gần trường có bảy tám nhà hàng.', zh:'学校附近有七八个饭馆。', py:'Xuéxiào fùjìn yǒu qī-bā ge fànguǎn.'},
  {vi:'Đi xe đạp đến siêu thị chỉ mất năm phút.', zh:'骑自行车到超市只要五分钟。', py:'Qí zìxíngchē dào chāoshì zhǐyào wǔ fēnzhōng.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vì trời hôm nay lạnh quá nên tôi không muốn đi xe đạp.', zh:'因为今天太冷了，所以我不想骑自行车。', py:'Yīnwèi jīntiān tài lěng le, suǒyǐ wǒ bù xiǎng qí zìxíngchē.'},
  {vi:'Tuy chiếc xe đạp đó rẻ nhưng hơi khó lái.', zh:'虽然那辆自行车很便宜，但是有点儿难骑。', py:'Suīrán nà liàng zìxíngchē hěn piányi, dànshì yǒudiǎnr nán qí.'},
  {vi:'Nếu bạn thấy tiếng Trung khó thì mình có thể giúp bạn ôn tập.', zh:'如果你觉得汉语难，我就可以帮你复习。', py:'Rúguǒ nǐ juéde Hànyǔ nán, wǒ jiù kěyǐ bāng nǐ fùxí.'},
  {vi:'Chỉ cần gần đó có siêu thị thì mua đồ sẽ rất tiện.', zh:'只要附近有超市，买东西就会很方便。', py:'Zhǐyào fùjìn yǒu chāoshì, mǎi dōngxi jiù huì hěn fāngbiàn.'},
  {vi:'Cô ấy chuyển nhà tháng trước, bây giờ đến sớm hơn nhiều.', zh:'她上个月搬家了，现在来得早多了。', py:'Tā shàng ge yuè bān jiā le, xiànzài lái de zǎoduō le.'},
  {vi:'Chiếc xe này rẻ hơn chiếc kia hai ba trăm đồng.', zh:'这辆车比那辆便宜两三百块钱。', py:'Zhè liàng chē bǐ nà liàng piányi liǎng-sān bǎi kuài qián.'},
  {vi:'Em trai tôi cao hơn tôi rồi, thật ra nó mới mười lăm mười sáu tuổi thôi.', zh:'我弟弟比我高了，其实他才十五六岁。', py:'Wǒ dìdi bǐ wǒ gāo le, qíshí tā cái shíwǔ-liù suì.'},
  {vi:'Ngôi nhà đó môi trường rất tốt, chủ yếu là yên tĩnh.', zh:'那个房子环境很好，主要是很安静。', py:'Nàge fángzi huánjìng hěn hǎo, zhǔyào shì hěn ānjìng.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 10)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-10/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'男', pre:'妈，你看，', blank:'给笑笑讲题的那个就是我们班数学老师', post:'。',
       py:'Mā, nǐ kàn, gěi Xiàoxiao jiǎng tí de nàge jiùshì wǒmen bān shùxué lǎoshī.', vn:'Mẹ ơi, mẹ xem, người đang giảng bài cho Tiếu Tiếu chính là giáo viên Toán lớp con đấy.'},
      {speaker:'女', pre:'', blank:'她个子真高，讲得怎么样', post:'？',
       py:'Tā gèzi zhēn gāo, jiǎng de zěnmeyàng?', vn:'Cô ấy cao thật đấy, giảng thế nào?'},
    ]},
    {num:2, lines:[
      {speaker:'女', pre:'喂，', blank:'你听得见我说话吗', post:'？',
       py:'Wéi, nǐ tīng de jiàn wǒ shuōhuà ma?', vn:'Alo, bạn nghe thấy tôi nói không?'},
      {speaker:'男', pre:'喂，喂，你等一会儿，', blank:'我找个安静点儿的地方再跟你说', post:'。',
       py:'Wéi, wéi, nǐ děng yíhuìr, wǒ zhǎo ge ānjìng diǎnr de dìfang zài gēn nǐ shuō.', vn:'Alo, alo, bạn đợi chút, tôi tìm chỗ yên tĩnh hơn rồi nói chuyện với bạn tiếp.'},
    ]},
    {num:3, lines:[
      {speaker:'男', pre:'谢谢你们请我们吃饭，', blank:'这家饭馆的环境真好，菜也很好吃，特别是主菜', post:'。',
       py:'Xièxie nǐmen qǐng wǒmen chīfàn, zhè jiā fànguǎn de huánjìng zhēn hǎo, cài yě hěn hǎochī, tèbié shì zhǔcài.', vn:'Cảm ơn các bạn mời chúng tôi ăn cơm, quán ăn này môi trường đẹp thật, đồ ăn cũng ngon, đặc biệt là món chính.'},
      {speaker:'女', pre:'', blank:'我很高兴你们喜欢这个地方，下次我们再来', post:'。',
       py:'Wǒ hěn gāoxìng nǐmen xǐhuan zhège dìfang, xià cì wǒmen zài lái.', vn:'Tôi rất vui vì các bạn thích chỗ này, lần sau chúng ta lại đến.'},
    ]},
    {num:4, lines:[
      {speaker:'女', pre:'', blank:'听说你们店可以用旧车换新车', post:'？',
       py:'Tīngshuō nǐmen diàn kěyǐ yòng jiù chē huàn xīn chē?', vn:'Nghe nói cửa hàng các bạn có thể dùng xe cũ đổi xe mới à?'},
      {speaker:'男', pre:'对，这边请，', blank:'我来给您介绍一下吧。您有旧车吗', post:'？',
       py:'Duì, zhèbiān qǐng, wǒ lái gěi nín jièshào yíxià ba. Nín yǒu jiù chē ma?', vn:'Đúng vậy, mời anh/chị lối này, để tôi giới thiệu cho anh/chị nhé. Anh/chị có xe cũ không?'},
    ]},
    {num:5, lines:[
      {speaker:'男', pre:'看，', blank:'那么多人踢足球，他们在比赛吗', post:'？',
       py:'Kàn, nàme duō rén tī zúqiú, tāmen zài bǐsài ma?', vn:'Nhìn kìa, nhiều người đá bóng thế, họ đang thi đấu à?'},
      {speaker:'女', pre:'不是，', blank:'他们在上体育课呢', post:'。',
       py:'Bú shì, tāmen zài shàng tǐyù kè ne.', vn:'Không phải, họ đang học thể dục đấy.'},
    ]},
    {num:6, lines:[
      {pre:'地面上怎么都是雪？昨天我女朋友还穿裙子呢，', blank:'今天怎么就下雪了', post:'？',
       py:'Dìmiàn shang zěnme dōu shì xuě? Zuótiān wǒ nǚpéngyou hái chuān qúnzi ne, jīntiān zěnme jiù xiàxuě le?', vn:'Sao mặt đất toàn tuyết vậy? Hôm qua bạn gái tôi còn mặc váy, sao hôm nay lại có tuyết rồi?'},
    ]},
    {num:7, lines:[
      {pre:'走，找个环境好的地方，我早就想跟你聊聊了，', blank:'这儿附近有没有安静点儿的咖啡店', post:'？',
       py:'Zǒu, zhǎo ge huánjìng hǎo de dìfang, wǒ zǎo jiù xiǎng gēn nǐ liáoliao le, zhèr fùjìn yǒu méiyǒu ānjìng diǎnr de kāfēidiàn?', vn:'Đi nào, tìm chỗ môi trường tốt, mình muốn nói chuyện với bạn từ lâu rồi, gần đây có quán cà phê nào yên tĩnh hơn không?'},
    ]},
    {num:8, lines:[
      {pre:'我爸爸身体那么好，', blank:'主要是因为每天锻炼', post:'。',
       py:'Wǒ bàba shēntǐ nàme hǎo, zhǔyào shì yīnwèi měitiān duànliàn.', vn:'Bố tôi sức khỏe tốt thế, chủ yếu là vì mỗi ngày đều tập thể dục.'},
    ]},
    {num:9, lines:[
      {pre:'我每天工作八九个小时，中午也不能休息，', blank:'能不累吗', post:'？',
       py:'Wǒ měitiān gōngzuò bā-jiǔ ge xiǎoshí, zhōngwǔ yě bù néng xiūxi, néng bú lèi ma?', vn:'Tôi mỗi ngày làm việc tám chín tiếng, trưa cũng không được nghỉ, sao mà không mệt được?'},
    ]},
    {num:10, lines:[
      {pre:'我儿子的学习比以前好多了，', blank:'主要是他有兴趣了', post:'。',
       py:'Wǒ érzi de xuéxí bǐ yǐqián hǎoduō le, zhǔyào shì tā yǒu xìngqù le.', vn:'Việc học của con trai tôi tốt hơn trước nhiều, chủ yếu là vì nó có hứng thú rồi.'},
    ]},
  ],
  mc: [
    {num:11, options:['买两个','买三个','少买一点儿'], ans:2,
     lines:[
       {speaker:'男', pre:'前边有卖水果的，', blank:'我们买点儿苹果吧', post:'？', py:'Qiánbian yǒu mài shuǐguǒ de, wǒmen mǎi diǎnr píngguǒ ba?', vn:'Phía trước có người bán trái cây, chúng ta mua ít táo đi?'},
       {speaker:'女', pre:'现在是换季的时候，苹果不一定好吃，', blank:'别买太多，买两三个就行', post:'。', py:'Xiànzài shì huànjì de shíhou, píngguǒ bù yídìng hǎochī, bié mǎi tài duō, mǎi liǎng-sān ge jiù xíng.', vn:'Bây giờ là lúc giao mùa, táo chưa chắc đã ngon, đừng mua nhiều quá, mua hai ba quả là được rồi.'},
     ],
     explain:'男：前边有卖水果的，我们买点儿苹果吧？女：现在是换季的时候，苹果不一定好吃，别买太多，买两三个就行。问：女的是什么意思？ → 少买一点儿。'},
    {num:12, options:['好点儿了','好多了','越来越不好'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'今天怎么样？还发烧吗', post:'？', py:'Jīntiān zěnmeyàng? Hái fā shāo ma?', vn:'Hôm nay thế nào? Còn sốt không?'},
       {speaker:'女', pre:'', blank:'吃了药比昨天好一些了，但还头疼', post:'。', py:'Chīle yào bǐ zuótiān hǎo yìxiē le, dàn hái tóuténg.', vn:'Uống thuốc rồi đỡ hơn hôm qua một chút, nhưng vẫn đau đầu.'},
     ],
     explain:'男：今天怎么样？还发烧吗？女：吃了药比昨天好一些了，但还头疼。问：女的现在怎么样了？ → 好点儿了。'},
    {num:13, options:['小刚','方明','一样高'], ans:1,
     lines:[
       {speaker:'女', pre:'小刚，', blank:'方明高还是你高', post:'？', py:'Xiǎogāng, Fāngmíng gāo háishi nǐ gāo?', vn:'Tiểu Cương, Phương Minh cao hay bạn cao?'},
       {speaker:'男', pre:'他个子也不高，', blank:'只比我高一点儿', post:'。', py:'Tā gèzi yě bù gāo, zhǐ bǐ wǒ gāo yìdiǎnr.', vn:'Cậu ấy vóc dáng cũng không cao, chỉ cao hơn mình một chút.'},
     ],
     explain:'女：小刚，方明高还是你高？男：他个子也不高，只比我高一点儿。问：小刚和方明谁高？ → 方明。'},
    {num:14, options:['飞机上','电影院','火车上'], ans:0,
     lines:[
       {speaker:'男', pre:'怎么还没到？', blank:'我都看了三四个电影了', post:'。', py:'Zěnme hái méi dào? Wǒ dōu kànle sān-sì ge diànyǐng le.', vn:'Sao vẫn chưa đến? Tôi xem ba bốn bộ phim rồi đấy.'},
       {speaker:'女', pre:'我们是从中国到美国，还要再飞五六个小时。', blank:'你睡一会儿，或者再看几个电影', post:'。', py:'Wǒmen shì cóng Zhōngguó dào Měiguó, hái yào zài fēi wǔ-liù ge xiǎoshí. Nǐ shuì yíhuìr, huòzhě zài kàn jǐ ge diànyǐng.', vn:'Chúng ta bay từ Trung Quốc sang Mỹ, còn phải bay thêm năm sáu tiếng nữa. Bạn ngủ một chút đi, hoặc xem thêm vài bộ phim.'},
     ],
     explain:'男：怎么还没到？我都看了三四个电影了。女：我们是从中国到美国，还要再飞五六个小时。你睡一会儿，或者再看几个电影。问：他们可能在哪儿？ → 飞机上。'},
    {num:15, options:['三个','三十个','很多'], ans:2,
     lines:[
       {speaker:'女', pre:'喂，您好，', blank:'请找一下王老师', post:'。', py:'Wéi, nín hǎo, qǐng zhǎo yíxià Wáng lǎoshī.', vn:'Alo, chào anh, làm ơn tìm giúp tôi cô Vương.'},
       {speaker:'男', pre:'', blank:'我们这儿有三四个姓王的老师呢，您找哪一个', post:'？', py:'Wǒmen zhèr yǒu sān-sì ge xìng Wáng de lǎoshī ne, nín zhǎo nǎ yí ge?', vn:'Ở đây chúng tôi có ba bốn giáo viên họ Vương, anh/chị tìm ai vậy?'},
     ],
     explain:'女：喂，您好，请找一下王老师。男：我们这儿有三四个姓王的老师呢，您找哪一个？问：这个地方有几个姓王的老师？ → 很多。'},
    {num:16, options:['可能骑自行车','可能坐公共汽车','要去上课'], ans:0,
     lines:[
       {speaker:'女', pre:'', blank:'你要出去吗', post:'？', py:'Nǐ yào chūqu ma?', vn:'Bạn định ra ngoài à?'},
       {speaker:'男', pre:'小丽，我问你，', blank:'去中山南路骑自行车快还是坐公共汽车快', post:'？', py:'Xiǎolì, wǒ wèn nǐ, qù Zhōngshān nánlù qí zìxíngchē kuài háishi zuò gōnggòngqìchē kuài?', vn:'Tiểu Lệ, hỏi bạn nè, đi đường Trung Sơn Nam đi xe đạp nhanh hay đi xe buýt nhanh?'},
       {speaker:'女', pre:'这个时间，', blank:'骑车比坐公共汽车快得多。你这么着急，要去上课吗', post:'？', py:'Zhège shíjiān, qí chē bǐ zuò gōnggòngqìchē kuài de duō. Nǐ zhème zháojí, yào qù shàngkè ma?', vn:'Giờ này, đi xe đạp nhanh hơn nhiều so với đi xe buýt. Bạn vội thế, đi học à?'},
       {speaker:'男', pre:'不，', blank:'我要去见女朋友', post:'。', py:'Bù, wǒ yào qù jiàn nǚpéngyou.', vn:'Không, tôi đi gặp bạn gái.'},
     ],
     explain:'女：你要出去吗？男：小丽，我问你，去中山南路骑自行车快还是坐公共汽车快？女：这个时间，骑车比坐公共汽车快得多。你这么着急，要去上课吗？男：不，我要去见女朋友。问：关于男的，可以知道什么？ → 可能骑自行车。'},
    {num:17, options:['明天很冷','明天是阴天','下雪时最冷'], ans:0,
     lines:[
       {speaker:'女', pre:'', blank:'明天是晴天还是阴天', post:'？', py:'Míngtiān shì qíngtiān háishi yīntiān?', vn:'Ngày mai nắng hay âm u?'},
       {speaker:'男', pre:'', blank:'上午下雪，下午就晴了', post:'。', py:'Shàngwǔ xiàxuě, xiàwǔ jiù qíng le.', vn:'Sáng có tuyết, chiều thì nắng lại.'},
       {speaker:'女', pre:'太好了，', blank:'明天可以穿我的新裙子了', post:'。', py:'Tài hǎo le, míngtiān kěyǐ chuān wǒ de xīn qúnzi le.', vn:'Tuyệt quá, mai có thể mặc váy mới của mình rồi.'},
       {speaker:'男', pre:'', blank:'雪后晴天比下雪时冷得多，你不知道吗', post:'？', py:'Xuě hòu qíngtiān bǐ xiàxuě shí lěng de duō, nǐ bù zhīdào ma?', vn:'Trời nắng sau tuyết lạnh hơn lúc có tuyết nhiều đấy, bạn không biết à?'},
     ],
     explain:'女：明天是晴天还是阴天？男：上午下雪，下午就晴了。女：太好了，明天可以穿我的新裙子了。男：雪后晴天比下雪时冷得多，你不知道吗？问：男的是什么意思？ → 明天很冷。'},
    {num:18, options:['买了一辆旧车','买的是自行车','买了五辆车'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'我昨天换了辆新车，比那辆旧的舒服多了', post:'。', py:'Wǒ zuótiān huànle liàng xīn chē, bǐ nà liàng jiù de shūfu duō le.', vn:'Hôm qua tôi đổi chiếc xe mới rồi, thoải mái hơn chiếc cũ nhiều.'},
       {speaker:'女', pre:'', blank:'又换了？你已经换了四五辆了吧？多少钱', post:'？', py:'Yòu huàn le? Nǐ yǐjīng huànle sì-wǔ liàng le ba? Duōshao qián?', vn:'Lại đổi nữa à? Bạn đổi bốn năm chiếc rồi nhỉ? Bao nhiêu tiền?'},
       {speaker:'男', pre:'不贵，一百多。', blank:'我那辆旧车送给你吧', post:'。', py:'Bú guì, yìbǎi duō. Wǒ nà liàng jiù chē sòng gěi nǐ ba.', vn:'Không đắt, hơn một trăm thôi. Chiếc xe cũ của tôi tặng bạn luôn nhé.'},
       {speaker:'女', pre:'', blank:'一百多？自行车啊', post:'！', py:'Yìbǎi duō? Zìxíngchē a!', vn:'Hơn một trăm á? Xe đạp cơ đấy!'},
     ],
     explain:'男：我昨天换了辆新车，比那辆旧的舒服多了。女：又换了？你已经换了四五辆了吧？多少钱？男：不贵，一百多。我那辆旧车送给你吧。女：一百多？自行车啊！问：关于男的，可以知道什么？ → 买的是自行车。'},
    {num:19, options:['妈妈高得多','一样高','女儿高得多'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'你女儿个子真高，比你高多了吧', post:'？', py:'Nǐ nǚ\'ér gèzi zhēn gāo, bǐ nǐ gāo duō le ba?', vn:'Con gái bạn cao thật đấy, cao hơn bạn nhiều nhỉ?'},
       {speaker:'女', pre:'', blank:'其实我跟她一样高，只是她比我瘦多了', post:'。', py:'Qíshí wǒ gēn tā yíyàng gāo, zhǐshì tā bǐ wǒ shòu duō le.', vn:'Thực ra tôi cao bằng con bé, chỉ là con bé gầy hơn tôi nhiều thôi.'},
       {speaker:'男', pre:'她今年多大？', blank:'十七八岁？在哪儿学习呢', post:'？', py:'Tā jīnnián duō dà? Shíqī-bā suì? Zài nǎr xuéxí ne?', vn:'Năm nay con bé bao nhiêu tuổi? Mười bảy mười tám à? Đang học ở đâu vậy?'},
       {speaker:'女', pre:'', blank:'今年十九了，正在国外学习，学历史和数学', post:'。', py:'Jīnnián shíjiǔ le, zhèngzài guówài xuéxí, xué lìshǐ hé shùxué.', vn:'Năm nay 19 tuổi rồi, đang học ở nước ngoài, học Lịch Sử và Toán.'},
     ],
     explain:'男：你女儿个子真高，比你高多了吧？女：其实我跟她一样高，只是她比我瘦多了。男：她今年多大？十七八岁？在哪儿学习呢？女：今年十九了，正在国外学习，学历史和数学。问：关于女的和她女儿，可以知道什么？ → 一样高。'},
    {num:20, options:['去咖啡店','听音乐会','买东西'], ans:0,
     lines:[
       {speaker:'男', pre:'走了两三个小时了，还买了这么多东西，真累。', blank:'我们休息一会儿吧', post:'。', py:'Zǒule liǎng-sān ge xiǎoshí le, hái mǎile zhème duō dōngxi, zhēn lèi. Wǒmen xiūxi yíhuìr ba.', vn:'Đi bộ hai ba tiếng rồi, còn mua nhiều đồ thế này, mệt thật. Chúng ta nghỉ một chút đi.'},
       {speaker:'女', pre:'', blank:'那就在这儿坐坐，喝点儿水', post:'。', py:'Nà jiù zài zhèr zuòzuo, hē diǎnr shuǐ.', vn:'Vậy ngồi đây một chút, uống chút nước.'},
       {speaker:'男', pre:'', blank:'楼上有个咖啡店，比这儿安静得多，环境也不错，还有音乐', post:'。', py:'Lóushàng yǒu ge kāfēidiàn, bǐ zhèr ānjìng de duō, huánjìng yě búcuò, hái yǒu yīnyuè.', vn:'Trên lầu có một quán cà phê, yên tĩnh hơn ở đây nhiều, môi trường cũng đẹp, còn có nhạc nữa.'},
       {speaker:'女', pre:'也好，', blank:'我们上去喝点儿饮料', post:'。', py:'Yě hǎo, wǒmen shàngqu hē diǎnr yǐnliào.', vn:'Cũng được, chúng ta lên đó uống chút đồ uống đi.'},
     ],
     explain:'男：走了两三个小时了，还买了这么多东西，真累。我们休息一会儿吧。女：那就在这儿坐坐，喝点儿水。男：楼上有个咖啡店，比这儿安静得多，环境也不错，还有音乐。女：也好，我们上去喝点儿饮料。问：他们要做什么？ → 去咖啡店。'},
  ],
};
