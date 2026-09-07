// ══════════════════════════════════════════
// DATA — HSK4 Bài 18: 科技与世界 (Khoa học công nghệ và thế giới)
// Nguồn: HSK标准教程4下 (Giáo trình chuẩn HSK 4 Tập 2 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'降落',py:'jiàngluò',pos:'Động từ',vn:'đáp xuống, hạ cánh',em:'🛬',lesson:1,
   explain:['Máy bay hạ cánh. Trái nghĩa: 起飞 (cất cánh, Bài 4). 降 = giảm (降低 Bài 10).'],
   usage:'飞机降落, 起飞和降落, 降落在机场.',
   collo:['飞机是怎么起飞和降落的','降落在北京首都国际机场','安全降落'],
   ex_zh:'上次女儿问我飞机是怎么起飞和降落的，真不知道该怎么回答她。',ex_py:'Shàng cì nǚ\'ér wèn wǒ fēijī shì zěnme qǐfēi hé jiàngluò de, zhēn bù zhīdào gāi zěnme huídá tā.',ex_vn:'Lần trước con gái hỏi tôi máy bay cất cánh và hạ cánh thế nào, thật không biết nên trả lời sao.',
   exList:[
     {zh:'上次女儿问我飞机是怎么起飞和降落的，真不知道该怎么回答她，她现在总是有各种各样的"为什么"。',py:'Shàng cì nǚ\'ér wèn wǒ fēijī shì zěnme qǐfēi hé jiàngluò de, zhēn bù zhīdào gāi zěnme huídá tā, tā xiànzài zǒngshì yǒu gè zhǒng gè yàng de "wèi shénme".',vn:'Lần trước con gái hỏi tôi máy bay cất cánh và hạ cánh thế nào, thật không biết trả lời sao, giờ nó luôn có đủ loại "tại sao".'},
     {zh:'各位乘客，大家好，感谢大家乘坐此次航班，我们的飞机将于20分钟后降落在北京首都国际机场。',py:'Gèwèi chéngkè, dàjiā hǎo, gǎnxiè dàjiā chéngzuò cǐ cì hángbān, wǒmen de fēijī jiāng yú èrshí fēnzhōng hòu jiàngluò zài Běijīng Shǒudū Guójì Jīchǎng.',vn:'Kính thưa quý khách, cảm ơn quý khách đã đi chuyến bay này, máy bay sẽ hạ cánh xuống sân bay quốc tế Thủ đô Bắc Kinh sau 20 phút.'},
     {zh:'由于天气不好，飞机推迟了一个小时才降落。',py:'Yóuyú tiānqì bù hǎo, fēijī tuīchíle yí ge xiǎoshí cái jiàngluò.',vn:'Do thời tiết xấu, máy bay hoãn một tiếng mới hạ cánh.'},
   ],
   hanzi:[
     {c:'落',p:'luò',type:'上下结构 · Trên-dưới',st:12,ord:'艹 trên → 洛 dưới',rad:'艹 (thảo)',mean:'rơi',
      tip:'Cỏ 艹 + 洛 → lá cây RƠI → LẠC. 降落 = giáng lạc = hạ cánh; 落后 = tụt hậu (Bài 15).',
      cf:'洛 (luò – sông Lạc)',w:'降落 / 落后 / 落叶'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Do thời tiết xấu, máy bay hoãn một tiếng mới hạ cánh.',answer:'由于天气不好，飞机推迟了一个小时才降落。',answerPy:'Yóuyú tiānqì bù hǎo, fēijī tuīchíle yí ge xiǎoshí cái jiàngluò.',
      note:'由于 (Bài 10), 推迟 (Bài 4), 才 (Bài 3).'},
   ]},

  {n:2,zh:'火',py:'huǒ',pos:'Tính từ',vn:'chạy, đắt hàng, được ưa chuộng',em:'🔥',lesson:1,
   explain:['Nghĩa gốc: lửa. Nghĩa mở rộng khẩu ngữ: rất hot, bán chạy, nổi tiếng. 卖得很火, 这个歌手很火.'],
   usage:'卖得非常火, 生意很火, 很火的节目.',
   collo:['卖得非常火','生意很火','最近很火'],
   ex_zh:'有一本书叫《新十万个为什么》，现在卖得非常火。',ex_py:'Yǒu yì běn shū jiào "Xīn Shíwàn Ge Wèi Shénme", xiànzài mài de fēicháng huǒ.',ex_vn:'Có một cuốn sách tên "Mười vạn câu hỏi vì sao mới", hiện bán rất chạy.',
   exList:[
     {zh:'孩子眼中的世界是美丽和奇特的。有一本书叫《新十万个为什么》，现在卖得非常火。',py:'Háizi yǎnzhōng de shìjiè shì měilì hé qítè de. Yǒu yì běn shū jiào "Xīn Shíwàn Ge Wèi Shénme", xiànzài mài de fēicháng huǒ.',vn:'Thế giới trong mắt trẻ thật đẹp và kỳ lạ. Có cuốn sách "Mười vạn câu hỏi vì sao mới", hiện bán rất chạy.'},
     {zh:'这家餐厅的生意特别火，每天门口都排着长队。',py:'Zhè jiā cāntīng de shēngyi tèbié huǒ, měi tiān ménkǒu dōu páizhe cháng duì.',vn:'Nhà hàng này làm ăn rất phát đạt, ngày nào cửa cũng xếp hàng dài.'},
     {zh:'这个电视节目最近很火，几乎每个人都在讨论它。',py:'Zhège diànshì jiémù zuìjìn hěn huǒ, jīhū měi ge rén dōu zài tǎolùn tā.',vn:'Chương trình TV này dạo này rất hot, hầu như ai cũng bàn về nó.'},
   ],
   hanzi:[
     {c:'火',p:'huǒ',type:'独体字 · Chữ đơn thể',st:4,ord:'丶 → 丿 → 人',rad:'火 (hỏa)',mean:'lửa',
      tip:'Tượng hình ngọn LỬA. Nghĩa mở rộng: nóng, hot, bán chạy. 火车 (tàu hỏa), 着火 (cháy), 发火 (nổi giận).',
      cf:'灭 (miè – tắt)',w:'火 / 火车 / 着火 / 很火'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà hàng này làm ăn rất phát đạt, ngày nào cửa cũng xếp hàng dài.',answer:'这家餐厅的生意特别火，每天门口都排着长队。',answerPy:'Zhè jiā cāntīng de shēngyi tèbié huǒ, měi tiān ménkǒu dōu páizhe cháng duì.',
      note:'餐厅 (Bài 13), 排队 (Bài 17), 着 (Bài 2).'},
   ]},

  {n:3,zh:'作者',py:'zuòzhě',pos:'Danh từ',vn:'tác giả',em:'✍️',lesson:1,
   explain:['Người viết sách/bài. 者 = người (记者 Bài 16, 读者).'],
   usage:'作者是谁, 这本书的作者, 著名作者.',
   collo:['作者是谁啊','作者的名字','小说的作者'],
   ex_zh:'难道它和我们小时候看的《十万个为什么》不一样吗？作者是谁啊？',ex_py:'Nándào tā hé wǒmen xiǎoshíhou kàn de "Shíwàn Ge Wèi Shénme" bù yíyàng ma? Zuòzhě shì shéi a?',ex_vn:'Chẳng lẽ nó khác "Mười vạn câu hỏi vì sao" chúng ta đọc hồi nhỏ sao? Tác giả là ai vậy?',
   exList:[
     {zh:'难道它和我们小时候看的《十万个为什么》不一样吗？作者是谁啊？',py:'Nándào tā hé wǒmen xiǎoshíhou kàn de "Shíwàn Ge Wèi Shénme" bù yíyàng ma? Zuòzhě shì shéi a?',vn:'Chẳng lẽ nó khác "Mười vạn câu hỏi vì sao" chúng ta đọc hồi nhỏ sao? Tác giả là ai vậy?'},
     {zh:'作者的名字我没记住。',py:'Zuòzhě de míngzi wǒ méi jìzhu.',vn:'Tên tác giả tôi không nhớ.'},
     {zh:'让人吃惊的是，这本小说的作者竟然是个十几岁的中学生。',py:'Ràng rén chī jīng de shì, zhè běn xiǎoshuō de zuòzhě jìngrán shì ge shí jǐ suì de zhōngxuéshēng.',vn:'Điều đáng kinh ngạc là tác giả cuốn tiểu thuyết này lại là một học sinh cấp hai mười mấy tuổi.'},
   ],
   hanzi:[
     {c:'作',p:'zuò',type:'左右结构 · Trái-phải',st:7,ord:'亻 trái → 乍 phải',rad:'亻 (nhân)',mean:'làm, sáng tác',
      tip:'Người 亻 + 乍 → LÀM, SÁNG TÁC. 作者 = người sáng tác; 作用 (Bài 12); 工作; 作业.',
      cf:'做 (zuò – làm cụ thể)',w:'作者 / 作用 / 工作 / 作业'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điều đáng kinh ngạc là tác giả cuốn tiểu thuyết này lại là một học sinh cấp hai mười mấy tuổi.',answer:'让人吃惊的是，这本小说的作者竟然是个十几岁的中学生。',answerPy:'Ràng rén chī jīng de shì, zhè běn xiǎoshuō de zuòzhě jìngrán shì ge shí jǐ suì de zhōngxuéshēng.',
      note:'吃惊 (Bài 13), 竟然 (Bài 6).'},
   ]},

  {n:4,zh:'交通',py:'jiāotōng',pos:'Danh từ',vn:'giao thông',em:'🚦',lesson:1,
   explain:['Sự đi lại, vận chuyển. 交通方便, 交通工具, 交通问题.'],
   usage:'交通方便, 交通工具, 交通很堵.',
   collo:['地球、动物、植物、交通','交通方便','公共交通'],
   ex_zh:'介绍了各种科学知识，包括地球、动物、植物、交通、科学技术、社会和文化等很多方面。',ex_py:'Jièshàole gè zhǒng kēxué zhīshi, bāokuò dìqiú, dòngwù, zhíwù, jiāotōng, kēxué jìshù, shèhuì hé wénhuà děng hěn duō fāngmiàn.',ex_vn:'Giới thiệu đủ loại kiến thức khoa học, bao gồm Trái đất, động vật, thực vật, giao thông, khoa học kỹ thuật, xã hội và văn hóa.',
   exList:[
     {zh:'《新十万个为什么》的内容更新，介绍了各种科学知识，包括地球、动物、植物、交通、科学技术、社会和文化等很多方面。',py:'"Xīn Shíwàn Ge Wèi Shénme" de nèiróng gèng xīn, jièshàole gè zhǒng kēxué zhīshi, bāokuò dìqiú, dòngwù, zhíwù, jiāotōng, kēxué jìshù, shèhuì hé wénhuà děng hěn duō fāngmiàn.',vn:'Nội dung "Mười vạn câu hỏi vì sao mới" mới hơn, giới thiệu đủ kiến thức khoa học: Trái đất, động vật, thực vật, giao thông, khoa học kỹ thuật, xã hội và văn hóa.'},
     {zh:'这里交通很方便，附近有好几趟公共汽车。',py:'Zhèlǐ jiāotōng hěn fāngbiàn, fùjìn yǒu hǎo jǐ tàng gōnggòng qìchē.',vn:'Ở đây giao thông rất thuận tiện, gần đây có mấy tuyến xe buýt.'},
     {zh:'多乘坐公共交通工具，可以减少空气污染。',py:'Duō chéngzuò gōnggòng jiāotōng gōngjù, kěyǐ jiǎnshǎo kōngqì wūrǎn.',vn:'Đi phương tiện giao thông công cộng nhiều hơn có thể giảm ô nhiễm không khí.'},
   ],
   hanzi:[
     {c:'通',p:'tōng',type:'半包围结构 · Nửa bao quanh',st:10,ord:'甬 trong → 辶 bao',rad:'辶 (sước)',mean:'thông',
      tip:'Đi 辶 + 甬 → đường đi THÔNG suốt. 交通 = giao thông; 通过 (Bài 9); 通知 (Bài 4); 普通话 (Bài 12).',
      cf:'桶 (tǒng – thùng, Bài 14)',w:'交通 / 通过 / 通知 / 普通'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở đây giao thông rất thuận tiện, gần đây có mấy tuyến xe buýt.',answer:'这里交通很方便，附近有好几趟公共汽车。',answerPy:'Zhèlǐ jiāotōng hěn fāngbiàn, fùjìn yǒu hǎo jǐ tàng gōnggòng qìchē.',
      note:'趟 (Bài 17), 好几 (Bài 11).'},
   ]},

  {n:5,zh:'技术',py:'jìshù',pos:'Danh từ',vn:'kỹ thuật, công nghệ',em:'💻',lesson:1,
   explain:['Công nghệ, kỹ năng chuyên môn. 科学技术, 互联网技术, 技术的发展.'],
   usage:'科学技术, 技术的发展, 技术很好.',
   collo:['科学技术','电脑和互联网技术的发展','理发师技术不错'],
   ex_zh:'电脑和互联网技术的发展使学生们的学习方式发生了很多变化。',ex_py:'Diànnǎo hé hùliánwǎng jìshù de fāzhǎn shǐ xuéshengmen de xuéxí fāngshì fāshēngle hěn duō biànhuà.',ex_vn:'Sự phát triển công nghệ máy tính và Internet khiến phương thức học tập của sinh viên thay đổi nhiều.',
   exList:[
     {zh:'电脑和互联网技术的发展使学生们的学习方式发生了很多变化。',py:'Diànnǎo hé hùliánwǎng jìshù de fāzhǎn shǐ xuéshengmen de xuéxí fāngshì fāshēngle hěn duō biànhuà.',vn:'Sự phát triển công nghệ máy tính và Internet khiến phương thức học tập của sinh viên thay đổi nhiều.'},
     {zh:'现代科学技术的发展让世界变得越来越小。',py:'Xiàndài kēxué jìshù de fāzhǎn ràng shìjiè biànde yuè lái yuè xiǎo.',vn:'Sự phát triển của khoa học kỹ thuật hiện đại khiến thế giới ngày càng nhỏ.'},
     {zh:'A：对面那条街上新开了一家理发店，听说那儿的理发师技术还不错。B：是吗？正好我也该理发了。',py:'A: Duìmiàn nà tiáo jiē shang xīn kāile yì jiā lǐfàdiàn, tīngshuō nàr de lǐfàshī jìshù hái búcuò. B: Shì ma? Zhènghǎo wǒ yě gāi lǐ fà le.',vn:'A: Phố đối diện mới mở tiệm cắt tóc, nghe nói tay nghề thợ ở đó khá tốt. B: Thế à? Vừa hay tôi cũng nên cắt tóc.'},
   ],
   hanzi:[
     {c:'技',p:'jì',type:'左右结构 · Trái-phải',st:7,ord:'扌 trái → 支 phải',rad:'扌 (thủ)',mean:'kỹ năng',
      tip:'Tay 扌 + 支 → tay khéo → KỸ (kỹ năng). 技术 = kỹ thuật; 科技 = khoa học kỹ thuật.',
      cf:'枝 (zhī – cành)',w:'技术 / 科技'},
     {c:'术',p:'shù',type:'独体字 · Chữ đơn thể',st:5,ord:'木 → 丶',rad:'木 (mộc)',mean:'thuật',
      tip:'Giản thể của 術 → THUẬT, phương pháp. 技术, 艺术 (Bài 13), 美术.',
      cf:'木 (mù – gỗ)',w:'技术 / 艺术 / 手术'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sự phát triển của khoa học kỹ thuật hiện đại khiến thế giới ngày càng nhỏ.',answer:'现代科学技术的发展让世界变得越来越小。',answerPy:'Xiàndài kēxué jìshù de fāzhǎn ràng shìjiè biànde yuè lái yuè xiǎo.',
      note:'发展 (Bài 10), 让, 越来越 (Bài 1).'},
   ]},

  {n:6,zh:'是否',py:'shìfǒu',pos:'Phó từ',vn:'hay không',em:'❔',lesson:1,
   explain:['= 是不是, dùng trong văn viết. 是否能读懂, 是否幸福, 是否喜欢. Ngữ pháp trọng tâm.'],
   usage:'是否能……, 是否喜欢, 是否有.',
   collo:['她是否能读懂','婚姻是否幸福','是否喜欢这份工作'],
   ex_zh:'不过她这么小，我不知道她是否能读懂。',ex_py:'Búguò tā zhème xiǎo, wǒ bù zhīdào tā shìfǒu néng dúdǒng.',ex_vn:'Nhưng nó còn nhỏ thế, tôi không biết nó có đọc hiểu được không.',
   exList:[
     {zh:'太好了！不过她这么小，我不知道她是否能读懂。',py:'Tài hǎo le! Búguò tā zhème xiǎo, wǒ bù zhīdào tā shìfǒu néng dúdǒng.',vn:'Tuyệt quá! Nhưng nó còn nhỏ thế, tôi không biết nó có đọc hiểu được không.'},
     {zh:'有人认为有"夫妻相"的夫妻家庭生活幸福，实际上，婚姻是否幸福跟这个没有关系。',py:'Yǒu rén rènwéi yǒu "fūqīxiàng" de fūqī jiātíng shēnghuó xìngfú, shíjì shang, hūnyīn shìfǒu xìngfú gēn zhège méiyǒu guānxi.',vn:'Có người cho rằng vợ chồng có "tướng phu thê" thì hạnh phúc, thực ra hôn nhân có hạnh phúc hay không chẳng liên quan.'},
     {zh:'不少人以收入多少作为标准。当然，也有人主要看自己是否喜欢这份工作。',py:'Bù shǎo rén yǐ shōurù duōshǎo zuòwéi biāozhǔn. Dāngrán, yě yǒu rén zhǔyào kàn zìjǐ shìfǒu xǐhuan zhè fèn gōngzuò.',vn:'Nhiều người lấy thu nhập làm tiêu chuẩn. Đương nhiên cũng có người chủ yếu xem mình có thích công việc đó hay không.'},
   ],
   hanzi:[
     {c:'否',p:'fǒu',type:'上下结构 · Trên-dưới',st:7,ord:'不 trên → 口 dưới',rad:'口 (khẩu)',mean:'không, phủ định',
      tip:'不 + 口(miệng) → miệng nói KHÔNG → PHỦ. 是否 = có hay không; 否则 = nếu không (Bài 11).',
      cf:'杯 (bēi – cốc)',w:'是否 / 否则 / 否定'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhưng nó còn nhỏ thế, tôi không biết nó có đọc hiểu được không.',answer:'不过她这么小，我不知道她是否能读懂。',answerPy:'Búguò tā zhème xiǎo, wǒ bù zhīdào tā shìfǒu néng dúdǒng.',
      note:'不过 (Bài 10), bổ ngữ kết quả 读懂.'},
     {promptLang:'vi',prompt:'Cũng có người chủ yếu xem mình có thích công việc đó hay không.',answer:'也有人主要看自己是否喜欢这份工作。',answerPy:'Yě yǒu rén zhǔyào kàn zìjǐ shìfǒu xǐhuan zhè fèn gōngzuò.',
      note:'主要 (Bài 6), lượng từ 份 (Bài 10).'},
   ]},

  {n:7,zh:'秒',py:'miǎo',pos:'Lượng từ',vn:'giây',em:'⏱️',lesson:2,
   explain:['Đơn vị thời gian, 1/60 phút. 几秒钟, 一秒, 十秒.'],
   usage:'几秒钟, 一秒也不能等, 30秒.',
   collo:['几秒钟就解决了','等几秒','跑了十秒'],
   ex_zh:'现在的大学生一遇到不明白的问题，可以马上在网上查找答案，几秒钟就把问题解决了。',ex_py:'Xiànzài de dàxuéshēng yí yùdào bù míngbai de wèntí, kěyǐ mǎshàng zài wǎngshang cházhǎo dá\'àn, jǐ miǎo zhōng jiù bǎ wèntí jiějué le.',ex_vn:'Sinh viên bây giờ gặp vấn đề không hiểu, có thể tra ngay trên mạng, vài giây là giải quyết xong.',
   exList:[
     {zh:'现在的大学生一遇到不明白的问题，可以马上在网上查找答案，几秒钟就把问题解决了，这比我们上学的时候方便多了。',py:'Xiànzài de dàxuéshēng yí yùdào bù míngbai de wèntí, kěyǐ mǎshàng zài wǎngshang cházhǎo dá\'àn, jǐ miǎo zhōng jiù bǎ wèntí jiějué le, zhè bǐ wǒmen shàng xué de shíhou fāngbiàn duō le.',vn:'Sinh viên bây giờ gặp vấn đề không hiểu, tra ngay trên mạng, vài giây giải quyết xong, tiện hơn hồi chúng ta đi học nhiều.'},
     {zh:'他跑一百米只用了十一秒，比我快多了。',py:'Tā pǎo yìbǎi mǐ zhǐ yòngle shíyī miǎo, bǐ wǒ kuài duō le.',vn:'Anh ấy chạy 100 m chỉ mất 11 giây, nhanh hơn tôi nhiều.'},
     {zh:'请等几秒钟，电脑马上就打开了。',py:'Qǐng děng jǐ miǎo zhōng, diànnǎo mǎshàng jiù dǎkāi le.',vn:'Đợi vài giây, máy tính sẽ mở ngay.'},
   ],
   hanzi:[
     {c:'秒',p:'miǎo',type:'左右结构 · Trái-phải',st:9,ord:'禾 trái → 少 phải',rad:'禾 (hòa)',mean:'giây',
      tip:'Lúa 禾 + 少(nhỏ) → râu lúa rất nhỏ → đơn vị rất nhỏ → GIÂY. 秒钟, 秒表.',
      cf:'妙 (miào – tuyệt diệu)',w:'秒 / 秒钟 / 分秒'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy chạy 100 m chỉ mất 11 giây, nhanh hơn tôi nhiều.',answer:'他跑一百米只用了十一秒，比我快多了。',answerPy:'Tā pǎo yìbǎi mǐ zhǐ yòngle shíyī miǎo, bǐ wǒ kuài duō le.',
      note:'比……多了 (Bài 8), 米 (Bài 2).'},
   ]},

  {n:8,zh:'方式',py:'fāngshì',pos:'Danh từ',vn:'phương thức, cách thức',em:'🔀',lesson:2,
   explain:['Cách làm, lối (sống, học). 学习方式, 生活方式, 联系方式. So sánh 方法 (Bài 3).'],
   usage:'学习方式, 生活方式, 教育方式.',
   collo:['学习方式发生了变化','生活方式','教育方式'],
   ex_zh:'不仅是学习方式，而且连生活方式也发生了很大改变。',ex_py:'Bùjǐn shì xuéxí fāngshì, érqiě lián shēnghuó fāngshì yě fāshēngle hěn dà gǎibiàn.',ex_vn:'Không chỉ phương thức học tập, mà cả lối sống cũng thay đổi rất lớn.',
   exList:[
     {zh:'不仅是学习方式，而且连生活方式也发生了很大改变。',py:'Bùjǐn shì xuéxí fāngshì, érqiě lián shēnghuó fāngshì yě fāshēngle hěn dà gǎibiàn.',vn:'Không chỉ phương thức học tập, mà cả lối sống cũng thay đổi rất lớn.'},
     {zh:'骑自行车是一种很好的、锻炼身体的方式。',py:'Qí zìxíngchē shì yì zhǒng hěn hǎo de, duànliàn shēntǐ de fāngshì.',vn:'Đi xe đạp là một cách rèn luyện sức khỏe rất tốt.'},
     {zh:'你认为你的父母教育你的方式都正确吗？',py:'Nǐ rènwéi nǐ de fùmǔ jiàoyù nǐ de fāngshì dōu zhèngquè ma?',vn:'Bạn cho rằng cách bố mẹ giáo dục bạn đều đúng không?'},
   ],
   hanzi:[
     {c:'式',p:'shì',type:'半包围结构 · Nửa bao quanh',st:6,ord:'弋 bao → 工 trong',rad:'弋 (dặc)',mean:'kiểu',
      tip:'工 + 弋 → khuôn mẫu → THỨC, KIỂU. 方式 = phương thức; 正式 = chính thức; 样式.',
      cf:'试 (shì – thử)',w:'方式 / 正式 / 样式'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đi xe đạp là một cách rèn luyện sức khỏe rất tốt.',answer:'骑自行车是一种很好的、锻炼身体的方式。',answerPy:'Qí zìxíngchē shì yì zhǒng hěn hǎo de, duànliàn shēntǐ de fāngshì.',
      note:'锻炼 (Bài 7), định ngữ với 的.'},
   ]},

  {n:9,zh:'受不了',py:'shòubuliǎo',pos:'Cụm động từ',vn:'chịu không nổi, chịu không được',em:'😫',lesson:2,
   explain:['Không thể chịu đựng (đau, áp lực, thái độ…). Đứng trước danh từ/cụm danh từ: 受不了你, 眼睛受不了. Ngữ pháp trọng tâm.'],
   usage:'眼睛实在受不了, 受不了这样的老师, 真受不了.',
   collo:['眼睛实在受不了','受不了你了','真受不了这样的老师'],
   ex_zh:'不过天天对着电脑看，眼睛实在受不了。',ex_py:'Búguò tiāntiān duìzhe diànnǎo kàn, yǎnjing shízài shòubuliǎo.',ex_vn:'Nhưng ngày nào cũng nhìn màn hình máy tính, mắt thật sự chịu không nổi.',
   exList:[
     {zh:'不过天天对着电脑看，眼睛实在受不了。',py:'Búguò tiāntiān duìzhe diànnǎo kàn, yǎnjing shízài shòubuliǎo.',vn:'Nhưng ngày nào cũng nhìn màn hình máy tính, mắt thật sự chịu không nổi.'},
     {zh:'A：我们再去对面的商店看看吧。B：我真的受不了你了，你到底还要逛多久？',py:'A: Wǒmen zài qù duìmiàn de shāngdiàn kànkan ba. B: Wǒ zhēn de shòubuliǎo nǐ le, nǐ dàodǐ hái yào guàng duō jiǔ?',vn:'A: Chúng ta sang cửa hàng đối diện xem tiếp đi. B: Tôi thật chịu không nổi bạn, rốt cuộc bạn còn dạo bao lâu nữa?'},
     {zh:'A：真受不了这样的老师！一个简单的动作让我们练二三十遍。B：他对你们严格些好，这样可以让你们打好基础。',py:'A: Zhēn shòubuliǎo zhèyàng de lǎoshī! Yí ge jiǎndān de dòngzuò ràng wǒmen liàn èr-sānshí biàn. B: Tā duì nǐmen yángé xiē hǎo, zhèyàng kěyǐ ràng nǐmen dǎhǎo jīchǔ.',vn:'A: Thật chịu không nổi thầy như vậy! Một động tác đơn giản bắt luyện hai ba chục lần. B: Thầy nghiêm với các bạn là tốt, như vậy mới có nền tảng vững.'},
   ],
   hanzi:[
     {c:'受',p:'shòu',type:'上下结构 · Trên-dưới',st:8,ord:'爫 → 冖 → 又',rad:'又 (hựu)',mean:'chịu, nhận',
      tip:'Tay đưa 爫, tay nhận 又 → NHẬN, CHỊU. 受不了 = chịu không nổi; 难受 (Bài 17); 受到 (Bài 8).',
      cf:'爱 (ài – yêu)',w:'受不了 / 难受 / 受到 / 接受'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi thật chịu không nổi bạn, rốt cuộc bạn còn dạo bao lâu nữa?',answer:'我真的受不了你了，你到底还要逛多久？',answerPy:'Wǒ zhēn de shòubuliǎo nǐ le, nǐ dàodǐ hái yào guàng duō jiǔ?',
      note:'到底 (Bài 16), 逛 (Bài 5).'},
     {promptLang:'vi',prompt:'Thầy nghiêm với các bạn là tốt, như vậy mới có nền tảng vững.',answer:'他对你们严格些好，这样可以让你们打好基础。',answerPy:'Tā duì nǐmen yángé xiē hǎo, zhèyàng kěyǐ ràng nǐmen dǎhǎo jīchǔ.',
      note:'严格 (Bài 17), 基础 (Bài 13).'},
   ]},

  {n:10,zh:'日记',py:'rìjì',pos:'Danh từ',vn:'nhật ký',em:'📔',lesson:2,
   explain:['Ghi chép hằng ngày. 写日记, 网上日记, 一本日记.'],
   usage:'写日记, 在网上写日记, 看日记.',
   collo:['在网上写日记','给日记加密码','我的日记'],
   ex_zh:'现在越来越多的学生喜欢在网上写日记。',ex_py:'Xiànzài yuè lái yuè duō de xuésheng xǐhuan zài wǎngshang xiě rìjì.',ex_vn:'Bây giờ ngày càng nhiều sinh viên thích viết nhật ký trên mạng.',
   exList:[
     {zh:'现在越来越多的学生喜欢在网上写日记，他们说这样可以让朋友及时了解自己的生活。',py:'Xiànzài yuè lái yuè duō de xuésheng xǐhuan zài wǎngshang xiě rìjì, tāmen shuō zhèyàng kěyǐ ràng péngyou jíshí liǎojiě zìjǐ de shēnghuó.',vn:'Bây giờ ngày càng nhiều sinh viên thích viết nhật ký trên mạng, họ nói như vậy bạn bè kịp thời biết cuộc sống của mình.'},
     {zh:'但是如果别人都能看到我的日记的话，多不安全啊！',py:'Dànshì rúguǒ biérén dōu néng kàndào wǒ de rìjì dehuà, duō bù ānquán a!',vn:'Nhưng nếu ai cũng xem được nhật ký của tôi, thì không an toàn chút nào!'},
     {zh:'我从小学就养成了每天写日记的习惯。',py:'Wǒ cóng xiǎoxué jiù yǎngchéngle měi tiān xiě rìjì de xíguàn.',vn:'Tôi hình thành thói quen viết nhật ký mỗi ngày từ tiểu học.'},
   ],
   hanzi:[
     {c:'记',p:'jì',type:'左右结构 · Trái-phải',st:5,ord:'讠 trái → 己 phải',rad:'讠 (ngôn)',mean:'ghi',
      tip:'Lời 讠 + 己(mình) → ghi lời của mình → GHI, NHỚ. 日记 = ghi hằng ngày; 记者 (Bài 16); 记得; 忘记.',
      cf:'纪 (jì – kỷ)',w:'日记 / 记者 / 记得 / 忘记'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi hình thành thói quen viết nhật ký mỗi ngày từ tiểu học.',answer:'我从小学就养成了每天写日记的习惯。',answerPy:'Wǒ cóng xiǎoxué jiù yǎngchéngle měi tiān xiě rìjì de xíguàn.',
      note:'养成 (Bài 7), 从……就.'},
   ]},

  {n:11,zh:'安全',py:'ānquán',pos:'Tính từ',vn:'an toàn',em:'🔒',lesson:2,
   explain:['Không nguy hiểm. Trái nghĩa: 危险. 不安全, 安全第一, 注意安全.'],
   usage:'多不安全啊, 注意安全, 安全降落.',
   collo:['多不安全啊','注意安全','这样做很不安全'],
   ex_zh:'但是如果别人都能看到我的日记的话，多不安全啊！',ex_py:'Dànshì rúguǒ biérén dōu néng kàndào wǒ de rìjì dehuà, duō bù ānquán a!',ex_vn:'Nhưng nếu ai cũng xem được nhật ký của tôi, thì không an toàn chút nào!',
   exList:[
     {zh:'但是如果别人都能看到我的日记的话，多不安全啊！',py:'Dànshì rúguǒ biérén dōu néng kàndào wǒ de rìjì dehuà, duō bù ānquán a!',vn:'Nhưng nếu ai cũng xem được nhật ký của tôi, thì không an toàn chút nào!'},
     {zh:'有些人直接拿自己的生日做银行卡或信用卡的密码。其实，这样做很不安全。',py:'Yǒuxiē rén zhíjiē ná zìjǐ de shēngrì zuò yínhángkǎ huò xìnyòngkǎ de mìmǎ. Qíshí, zhèyàng zuò hěn bù ānquán.',vn:'Có người lấy ngày sinh làm mật khẩu thẻ ngân hàng hoặc thẻ tín dụng. Thực ra làm vậy rất không an toàn.'},
     {zh:'开车时千万要注意安全，别开太快。',py:'Kāi chē shí qiānwàn yào zhùyì ānquán, bié kāi tài kuài.',vn:'Khi lái xe tuyệt đối chú ý an toàn, đừng lái quá nhanh.'},
   ],
   hanzi:[
     {c:'安',p:'ān',type:'上下结构 · Trên-dưới',st:6,ord:'宀 trên → 女 dưới',rad:'宀 (miên)',mean:'yên',
      tip:'Người phụ nữ 女 ở trong nhà 宀 → YÊN ỔN, AN. 安全, 安静 (Bài 2), 安排 (Bài 6).',
      cf:'案 (àn – án)',w:'安全 / 安静 / 安排 / 平安'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có người lấy ngày sinh làm mật khẩu thẻ ngân hàng. Thực ra làm vậy rất không an toàn.',answer:'有些人直接拿自己的生日做银行卡的密码。其实，这样做很不安全。',answerPy:'Yǒuxiē rén zhíjiē ná zìjǐ de shēngrì zuò yínhángkǎ de mìmǎ. Qíshí, zhèyàng zuò hěn bù ānquán.',
      note:'直接 (Bài 12), 拿……做 (Bài 16), 密码 (từ mới).'},
   ]},

  {n:12,zh:'密码',py:'mìmǎ',pos:'Danh từ',vn:'mật mã, mật khẩu',em:'🔑',lesson:2,
   explain:['Mã bí mật để bảo vệ. 加密码, 输入密码, 忘记密码.'],
   usage:'给……加密码, 输入密码, 银行卡的密码.',
   collo:['给网上的日记加密码','忘了密码','信用卡的密码'],
   ex_zh:'放心吧，可以给网上的日记加密码，那样只有得到了允许，别人才能看到。',ex_py:'Fàng xīn ba, kěyǐ gěi wǎngshang de rìjì jiā mìmǎ, nàyàng zhǐyǒu dédàole yǔnxǔ, biérén cái néng kàndào.',ex_vn:'Yên tâm, có thể đặt mật khẩu cho nhật ký trên mạng, như vậy chỉ khi được cho phép người khác mới xem được.',
   exList:[
     {zh:'放心吧，可以给网上的日记加密码，那样只有得到了允许，别人才能看到。',py:'Fàng xīn ba, kěyǐ gěi wǎngshang de rìjì jiā mìmǎ, nàyàng zhǐyǒu dédàole yǔnxǔ, biérén cái néng kàndào.',vn:'Yên tâm, có thể đặt mật khẩu cho nhật ký trên mạng, như vậy chỉ khi được cho phép người khác mới xem được.'},
     {zh:'有些人直接拿自己的生日做银行卡或信用卡的密码。',py:'Yǒuxiē rén zhíjiē ná zìjǐ de shēngrì zuò yínhángkǎ huò xìnyòngkǎ de mìmǎ.',vn:'Có người lấy ngày sinh làm mật khẩu thẻ ngân hàng hoặc thẻ tín dụng.'},
     {zh:'糟糕，我把邮箱的密码忘了，怎么办？',py:'Zāogāo, wǒ bǎ yóuxiāng de mìmǎ wàng le, zěnme bàn?',vn:'Tệ quá, tôi quên mật khẩu hộp thư rồi, làm sao đây?'},
   ],
   hanzi:[
     {c:'密',p:'mì',type:'上下结构 · Trên-dưới',st:11,ord:'宀 → 必 → 山',rad:'宀 (miên)',mean:'kín, bí mật',
      tip:'Nhà 宀 + 必 + núi 山 → nơi kín đáo trong núi → BÍ MẬT, dày đặc. 密码 = mật mã; 秘密 = bí mật.',
      cf:'蜜 (mì – mật ong)',w:'密码 / 秘密'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tệ quá, tôi quên mật khẩu hộp thư rồi, làm sao đây?',answer:'糟糕，我把邮箱的密码忘了，怎么办？',answerPy:'Zāogāo, wǒ bǎ yóuxiāng de mìmǎ wàng le, zěnme bàn?',
      note:'糟糕 (Bài 5), câu chữ 把.'},
   ]},

  {n:13,zh:'允许',py:'yǔnxǔ',pos:'Động từ',vn:'cho phép',em:'✅',lesson:2,
   explain:['Đồng ý cho làm gì. 得到允许, 允许某人做某事, 不允许.'],
   usage:'得到允许, 允许我……, 不允许吸烟.',
   collo:['只有得到了允许','父母不允许','允许学生……'],
   ex_zh:'那样只有得到了允许，别人才能看到。',ex_py:'Nàyàng zhǐyǒu dédàole yǔnxǔ, biérén cái néng kàndào.',ex_vn:'Như vậy chỉ khi được cho phép, người khác mới xem được.',
   exList:[
     {zh:'可以给网上的日记加密码，那样只有得到了允许，别人才能看到。',py:'Kěyǐ gěi wǎngshang de rìjì jiā mìmǎ, nàyàng zhǐyǒu dédàole yǔnxǔ, biérén cái néng kàndào.',vn:'Có thể đặt mật khẩu cho nhật ký trên mạng, như vậy chỉ khi được cho phép người khác mới xem được.'},
     {zh:'小时候父母不允许我一个人去河边玩儿，因为太危险了。',py:'Xiǎoshíhou fùmǔ bù yǔnxǔ wǒ yí ge rén qù hé biān wánr, yīnwèi tài wēixiǎn le.',vn:'Hồi nhỏ bố mẹ không cho phép tôi một mình ra bờ sông chơi, vì quá nguy hiểm.'},
     {zh:'图书馆里不允许大声说话。',py:'Túshūguǎn li bù yǔnxǔ dàshēng shuō huà.',vn:'Trong thư viện không được phép nói to.'},
   ],
   hanzi:[
     {c:'允',p:'yǔn',type:'上下结构 · Trên-dưới',st:4,ord:'厶 trên → 儿 dưới',rad:'儿 (nhi)',mean:'cho phép',
      tip:'Chữ 4 nét: 厶 + 儿 → ƯNG THUẬN, cho phép. 允许 = doãn hứa.',
      cf:'充 (chōng – đầy)',w:'允许'},
     {c:'许',p:'xǔ',type:'左右结构 · Trái-phải',st:6,ord:'讠 trái → 午 phải',rad:'讠 (ngôn)',mean:'hứa, cho phép',
      tip:'Lời 讠 + 午 → HỨA, cho phép. 允许; 也许 (Bài 12); 许多 (Bài 8).',
      cf:'午 (wǔ – trưa)',w:'允许 / 也许 / 许多'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ bố mẹ không cho phép tôi một mình ra bờ sông chơi, vì quá nguy hiểm.',answer:'小时候父母不允许我一个人去河边玩儿，因为太危险了。',answerPy:'Xiǎoshíhou fùmǔ bù yǔnxǔ wǒ yí ge rén qù hé biān wánr, yīnwèi tài wēixiǎn le.',
      note:'Câu kiêm ngữ 允许 + người + động từ; 危险 (từ mới).'},
   ]},

  {n:14,zh:'座',py:'zuò',pos:'Lượng từ',vn:'tòa, hòn, cây (cầu, núi, cao ốc…)',em:'🏔️',lesson:3,
   explain:['Lượng từ cho vật lớn cố định: 一座桥, 一座山, 一座城市, 一座楼. Cũng có trong 座位 (Bài 3).'],
   usage:'一座桥, 一座山, 一座城市.',
   collo:['一座桥','一座山','一座大楼'],
   ex_zh:'梦到自己正在一座桥上走。',ex_py:'Mèngdào zìjǐ zhèngzài yí zuò qiáo shang zǒu.',ex_vn:'Mơ thấy mình đang đi trên một cây cầu.',
   exList:[
     {zh:'我昨天晚上做了一个特别奇怪的梦，梦到自己正在一座桥上走。',py:'Wǒ zuótiān wǎnshang zuòle yí ge tèbié qíguài de mèng, mèngdào zìjǐ zhèngzài yí zuò qiáo shang zǒu.',vn:'Tối qua tôi mơ một giấc mơ rất kỳ lạ, mơ thấy mình đang đi trên một cây cầu.'},
     {zh:'北京有一座山，叫香山，非常有名。每到秋天，满山都是红叶，风景特别漂亮。',py:'Běijīng yǒu yí zuò shān, jiào Xiāng Shān, fēicháng yǒumíng. Měi dào qiūtiān, mǎn shān dōu shì hóngyè, fēngjǐng tèbié piàoliang.',vn:'Bắc Kinh có ngọn núi tên Hương Sơn, rất nổi tiếng. Mỗi mùa thu, cả núi đầy lá đỏ, phong cảnh rất đẹp.'},
     {zh:'上海是一座国际化的大城市。',py:'Shànghǎi shì yí zuò guójìhuà de dà chéngshì.',vn:'Thượng Hải là một thành phố lớn mang tính quốc tế.'},
   ],
   hanzi:[
     {c:'座',p:'zuò',type:'半包围结构 · Nửa bao quanh',st:10,ord:'广 bao → 坐 trong',rad:'广 (nghiễm)',mean:'chỗ ngồi; tòa',
      tip:'Mái 广 + 坐(ngồi) → CHỖ NGỒI (座位 Bài 3); lượng từ cho vật lớn cố định (一座山/桥/楼).',
      cf:'坐 (zuò – ngồi, động từ)',w:'一座 / 座位 / 讲座'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bắc Kinh có ngọn núi tên Hương Sơn, rất nổi tiếng. Mỗi mùa thu, cả núi đầy lá đỏ.',answer:'北京有一座山，叫香山，非常有名。每到秋天，满山都是红叶。',answerPy:'Běijīng yǒu yí zuò shān, jiào Xiāng Shān, fēicháng yǒumíng. Měi dào qiūtiān, mǎn shān dōu shì hóngyè.',
      note:'香山 (Bài 17), 满 (Bài 11).'},
   ]},

  {n:15,zh:'桥',py:'qiáo',pos:'Danh từ',vn:'cầu',em:'🌉',lesson:3,
   explain:['Công trình bắc qua sông. 一座桥, 过桥, 桥上.'],
   usage:'一座桥, 在桥上走, 过桥.',
   collo:['在一座桥上走','过桥','桥下面'],
   ex_zh:'梦到自己正在一座桥上走，走着走着，突然开过来一辆车，非常危险。',ex_py:'Mèngdào zìjǐ zhèngzài yí zuò qiáo shang zǒu, zǒuzhe zǒuzhe, tūrán kāi guòlai yí liàng chē, fēicháng wēixiǎn.',ex_vn:'Mơ thấy mình đang đi trên cầu, đang đi thì đột nhiên một chiếc xe lao tới, rất nguy hiểm.',
   exList:[
     {zh:'梦到自己正在一座桥上走，走着走着，突然开过来一辆车，非常危险。',py:'Mèngdào zìjǐ zhèngzài yí zuò qiáo shang zǒu, zǒuzhe zǒuzhe, tūrán kāi guòlai yí liàng chē, fēicháng wēixiǎn.',vn:'Mơ thấy mình đang đi trên cầu, đang đi thì đột nhiên một chiếc xe lao tới, rất nguy hiểm.'},
     {zh:'过了这座桥再往前走五百米左右就是火车站。',py:'Guòle zhè zuò qiáo zài wǎng qián zǒu wǔbǎi mǐ zuǒyòu jiù shì huǒchēzhàn.',vn:'Qua cây cầu này đi tiếp khoảng 500 mét là ga tàu.'},
     {zh:'这座桥已经有一百多年的历史了，仍然很结实。',py:'Zhè zuò qiáo yǐjīng yǒu yìbǎi duō nián de lìshǐ le, réngrán hěn jiēshi.',vn:'Cây cầu này đã hơn trăm năm lịch sử, vẫn rất chắc chắn.'},
   ],
   hanzi:[
     {c:'桥',p:'qiáo',type:'左右结构 · Trái-phải',st:10,ord:'木 trái → 乔 phải',rad:'木 (mộc)',mean:'cầu',
      tip:'Gỗ 木 + 乔(cao) → công trình gỗ bắc cao qua sông → CẦU. 骄傲 (Bài 15) có 乔.',
      cf:'骄 (jiāo – kiêu)',w:'桥 / 大桥 / 天桥'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Qua cây cầu này đi tiếp khoảng 500 mét là ga tàu.',answer:'过了这座桥再往前走五百米左右就是火车站。',answerPy:'Guòle zhè zuò qiáo zài wǎng qián zǒu wǔbǎi mǐ zuǒyòu jiù shì huǒchēzhàn.',
      note:'左右 (Bài 15), 往 (Bài 2).'},
   ]},

  {n:16,zh:'危险',py:'wēixiǎn',pos:'Tính từ',vn:'nguy hiểm',em:'⚠️',lesson:3,
   explain:['Có thể gây hại. Trái nghĩa: 安全. 非常危险, 太危险了, 极其危险.'],
   usage:'非常危险, 太危险了, 危险的地方.',
   collo:['非常危险','极其危险的','太危险了'],
   ex_zh:'突然开过来一辆车，非常危险。',ex_py:'Tūrán kāi guòlai yí liàng chē, fēicháng wēixiǎn.',ex_vn:'Đột nhiên một chiếc xe lao tới, rất nguy hiểm.',
   exList:[
     {zh:'走着走着，突然开过来一辆车，非常危险。',py:'Zǒuzhe zǒuzhe, tūrán kāi guòlai yí liàng chē, fēicháng wēixiǎn.',vn:'Đang đi thì đột nhiên một chiếc xe lao tới, rất nguy hiểm.'},
     {zh:'无论对自己还是对其他人来说，喝完酒开车都是极其危险的。',py:'Wúlùn duì zìjǐ háishi duì qítā rén lái shuō, hēwán jiǔ kāi chē dōu shì jíqí wēixiǎn de.',vn:'Dù đối với bản thân hay người khác, uống rượu lái xe đều cực kỳ nguy hiểm.'},
     {zh:'A：刚才太危险了，那辆车怎么回事？B：不知道，突然加速，估计是新手，刚学会开车。',py:'A: Gāngcái tài wēixiǎn le, nà liàng chē zěnme huí shì? B: Bù zhīdào, tūrán jiāsù, gūjì shì xīnshǒu, gāng xuéhuì kāi chē.',vn:'A: Vừa rồi nguy hiểm quá, xe đó sao vậy? B: Không biết, đột nhiên tăng tốc, chắc là tay mới, vừa học lái.'},
   ],
   hanzi:[
     {c:'危',p:'wēi',type:'上下结构 · Trên-dưới',st:6,ord:'⺈ → 厂 → 㔾',rad:'㔾 (tiết)',mean:'nguy',
      tip:'Hình người đứng trên vách đá cao 厂 → NGUY. 危险 = nguy hiểm.',
      cf:'厄 (è – ách)',w:'危险 / 危机'},
     {c:'险',p:'xiǎn',type:'左右结构 · Trái-phải',st:9,ord:'阝 trái → 佥 phải',rad:'阝 (phụ)',mean:'hiểm',
      tip:'Núi 阝 + 佥 → núi HIỂM trở. 危险; 保险 = bảo hiểm.',
      cf:'检 (jiǎn – kiểm)',w:'危险 / 保险'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù đối với bản thân hay người khác, uống rượu lái xe đều cực kỳ nguy hiểm.',answer:'无论对自己还是对其他人来说，喝完酒开车都是极其危险的。',answerPy:'Wúlùn duì zìjǐ háishi duì qítā rén lái shuō, hēwán jiǔ kāi chē dōu shì jíqí wēixiǎn de.',
      note:'无论……都 (Bài 11), 对……来说 (Bài 5).'},
   ]},

  {n:17,zh:'接着',py:'jiēzhe',pos:'Phó từ',vn:'ngay sau đó, tiếp theo',em:'⏭️',lesson:3,
   explain:['Sự việc khác xảy ra ngay sau sự việc trước (về thời gian). Cũng nghĩa "tiếp tục": 接着看, 接着说. Ngữ pháp trọng tâm: 接着 vs 然后.'],
   usage:'接着又……, 接着说, 我接着看.',
   collo:['接着又梦见','你接着说吧','我接着看'],
   ex_zh:'接着又梦见我跳到车上，跟警察一起抓住了一个坏人。',ex_py:'Jiēzhe yòu mèngjiàn wǒ tiàodào chē shang, gēn jǐngchá yìqǐ zhuāzhùle yí ge huàirén.',ex_vn:'Ngay sau đó lại mơ thấy tôi nhảy lên xe, cùng cảnh sát bắt một kẻ xấu.',
   exList:[
     {zh:'接着又梦见我跳到车上，跟警察一起抓住了一个坏人。',py:'Jiēzhe yòu mèngjiàn wǒ tiàodào chē shang, gēn jǐngchá yìqǐ zhuāzhùle yí ge huàirén.',vn:'Ngay sau đó lại mơ thấy tôi nhảy lên xe, cùng cảnh sát bắt một kẻ xấu.'},
     {zh:'这本书的内容非常有趣，你看完以后先不要还，我接着看。',py:'Zhè běn shū de nèiróng fēicháng yǒuqù, nǐ kànwán yǐhòu xiān búyào huán, wǒ jiēzhe kàn.',vn:'Nội dung cuốn sách này rất thú vị, bạn đọc xong khoan trả, tôi đọc tiếp.'},
     {zh:'他毕业后在老家工作了一年，接着又考上了北京大学，读研究生。',py:'Tā bì yè hòu zài lǎojiā gōngzuòle yì nián, jiēzhe yòu kǎoshàngle Běijīng Dàxué, dú yánjiūshēng.',vn:'Sau tốt nghiệp anh ấy làm ở quê một năm, ngay sau đó lại thi đỗ Đại học Bắc Kinh, học cao học.'},
   ],
   hanzi:[
     {c:'接',p:'jiē',type:'左右结构 · Trái-phải',st:11,ord:'扌 trái → 妾 phải',rad:'扌 (thủ)',mean:'nối, đón',
      tip:'Tay 扌 + 妾 → tay TIẾP nhận, nối tiếp. 接着 = tiếp theo; 接受 (Bài 6); 接 (đón, nhận điện thoại Bài 4).',
      cf:'妾 (qiè)',w:'接着 / 接受 / 接电话 / 直接'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nội dung cuốn sách này rất thú vị, bạn đọc xong khoan trả, tôi đọc tiếp.',answer:'这本书的内容非常有趣，你看完以后先不要还，我接着看。',answerPy:'Zhè běn shū de nèiróng fēicháng yǒuqù, nǐ kànwán yǐhòu xiān búyào huán, wǒ jiēzhe kàn.',
      note:'有趣 (Bài 13), 还 (huán, Bài 4).'},
   ]},

  {n:18,zh:'警察',py:'jǐngchá',pos:'Danh từ',vn:'cảnh sát',em:'👮',lesson:3,
   explain:['Người giữ trật tự, an ninh. 一位警察, 当警察, 找警察.'],
   usage:'跟警察一起, 当警察, 报警.',
   collo:['跟警察一起抓坏人','当警察','交通警察'],
   ex_zh:'跟警察一起抓住了一个坏人。',ex_py:'Gēn jǐngchá yìqǐ zhuāzhùle yí ge huàirén.',ex_vn:'Cùng cảnh sát bắt được một kẻ xấu.',
   exList:[
     {zh:'接着又梦见我跳到车上，跟警察一起抓住了一个坏人。',py:'Jiēzhe yòu mèngjiàn wǒ tiàodào chē shang, gēn jǐngchá yìqǐ zhuāzhùle yí ge huàirén.',vn:'Ngay sau đó lại mơ thấy tôi nhảy lên xe, cùng cảnh sát bắt một kẻ xấu.'},
     {zh:'迷路的时候可以找警察帮忙。',py:'Mí lù de shíhou kěyǐ zhǎo jǐngchá bāng máng.',vn:'Khi lạc đường có thể nhờ cảnh sát giúp.'},
     {zh:'他从小就想当一名警察，保护大家的安全。',py:'Tā cóng xiǎo jiù xiǎng dāng yì míng jǐngchá, bǎohù dàjiā de ānquán.',vn:'Từ nhỏ anh ấy đã muốn làm cảnh sát, bảo vệ an toàn cho mọi người.'},
   ],
   hanzi:[
     {c:'警',p:'jǐng',type:'上下结构 · Trên-dưới',st:19,ord:'敬 trên → 言 dưới',rad:'言 (ngôn)',mean:'cảnh báo',
      tip:'敬(kính) + 言(lời) → lời nhắc nhở → CẢNH (báo). 警察 = cảnh sát; 报警 = báo cảnh sát.',
      cf:'敬 (jìng – kính)',w:'警察 / 报警 / 警告'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ nhỏ anh ấy đã muốn làm cảnh sát, bảo vệ an toàn cho mọi người.',answer:'他从小就想当一名警察，保护大家的安全。',answerPy:'Tā cóng xiǎo jiù xiǎng dāng yì míng jǐngchá, bǎohù dàjiā de ānquán.',
      note:'当 (Bài 10), 保护 (Bài 12), 安全 (từ mới).'},
   ]},

  {n:19,zh:'抓',py:'zhuā',pos:'Động từ',vn:'bắt, túm',em:'✊',lesson:3,
   explain:['Nắm lấy, bắt giữ. 抓住 = bắt được; 抓紧 = nắm chặt/tranh thủ; 抓住机会.'],
   usage:'抓住坏人, 抓住机会, 抓紧时间.',
   collo:['抓住了一个坏人','抓住机会','抓紧时间'],
   ex_zh:'跟警察一起抓住了一个坏人。',ex_py:'Gēn jǐngchá yìqǐ zhuāzhùle yí ge huàirén.',ex_vn:'Cùng cảnh sát bắt được một kẻ xấu.',
   exList:[
     {zh:'跟警察一起抓住了一个坏人。',py:'Gēn jǐngchá yìqǐ zhuāzhùle yí ge huàirén.',vn:'Cùng cảnh sát bắt được một kẻ xấu.'},
     {zh:'机会来了一定要抓住，否则就会后悔。',py:'Jīhuì láile yídìng yào zhuāzhù, fǒuzé jiù huì hòuhuǐ.',vn:'Cơ hội đến nhất định phải nắm lấy, nếu không sẽ hối hận.'},
     {zh:'快考试了，大家要抓紧时间复习。',py:'Kuài kǎoshì le, dàjiā yào zhuājǐn shíjiān fùxí.',vn:'Sắp thi rồi, mọi người phải tranh thủ thời gian ôn tập.'},
   ],
   hanzi:[
     {c:'抓',p:'zhuā',type:'左右结构 · Trái-phải',st:7,ord:'扌 trái → 爪 phải',rad:'扌 (thủ)',mean:'nắm, bắt',
      tip:'Tay 扌 + móng vuốt 爪 → dùng tay TÚM lấy → BẮT. 抓住 = bắt được; 抓紧 = nắm chặt.',
      cf:'爪 (zhǎo – móng vuốt)',w:'抓 / 抓住 / 抓紧'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cơ hội đến nhất định phải nắm lấy, nếu không sẽ hối hận.',answer:'机会来了一定要抓住，否则就会后悔。',answerPy:'Jīhuì láile yídìng yào zhuāzhù, fǒuzé jiù huì hòuhuǐ.',
      note:'否则 (Bài 11), 后悔 (Bài 9).'},
   ]},

  {n:20,zh:'咸',py:'xián',pos:'Tính từ',vn:'mặn',em:'🧂',lesson:3,
   explain:['Vị mặn (nhiều muối). 太咸, 有点儿咸, 咸的菜.'],
   usage:'太咸了, 有点儿咸, 吃得太咸.',
   collo:['晚饭吃得太咸','稍微有点儿咸','咸的'],
   ex_zh:'记得有一次，我晚饭吃得太咸，那天晚上就梦见自己到处找商店买矿泉水。',ex_py:'Jìde yǒu yí cì, wǒ wǎnfàn chī de tài xián, nà tiān wǎnshang jiù mèngjiàn zìjǐ dàochù zhǎo shāngdiàn mǎi kuàngquánshuǐ.',ex_vn:'Nhớ có lần bữa tối tôi ăn quá mặn, tối đó mơ thấy mình đi khắp nơi tìm cửa hàng mua nước suối.',
   exList:[
     {zh:'记得有一次，我晚饭吃得太咸，那天晚上就梦见自己到处找商店买矿泉水。',py:'Jìde yǒu yí cì, wǒ wǎnfàn chī de tài xián, nà tiān wǎnshang jiù mèngjiàn zìjǐ dàochù zhǎo shāngdiàn mǎi kuàngquánshuǐ.',vn:'Nhớ có lần bữa tối tôi ăn quá mặn, tối đó mơ thấy mình đi khắp nơi tìm cửa hàng mua nước suối.'},
     {zh:'A：饺子很香，不过鸡蛋汤稍微有点儿咸。B：那我下次少放点儿盐。',py:'A: Jiǎozi hěn xiāng, búguò jīdàn tāng shāowēi yǒudiǎnr xián. B: Nà wǒ xià cì shǎo fàng diǎnr yán.',vn:'A: Sủi cảo rất thơm, nhưng canh trứng hơi mặn một chút. B: Vậy lần sau tôi bỏ ít muối hơn.'},
     {zh:'医生说吃得太咸对身体不好，容易引起高血压。',py:'Yīshēng shuō chī de tài xián duì shēntǐ bù hǎo, róngyì yǐnqǐ gāoxuèyā.',vn:'Bác sĩ nói ăn quá mặn không tốt cho sức khỏe, dễ gây cao huyết áp.'},
   ],
   hanzi:[
     {c:'咸',p:'xián',type:'半包围结构 · Nửa bao quanh',st:9,ord:'戌 bao → 口 trong',rad:'口 (khẩu)',mean:'mặn',
      tip:'戌 + 口 → giản thể của 鹹 (mặn). Vị MẶN. Đối lập 甜 (ngọt), 酸 (chua), 苦 (đắng, Bài 13), 辣 (cay).',
      cf:'减 (jiǎn – giảm, Bài 14)',w:'咸 / 咸菜'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sủi cảo rất thơm, nhưng canh trứng hơi mặn một chút. — Vậy lần sau tôi bỏ ít muối hơn.',answer:'饺子很香，不过鸡蛋汤稍微有点儿咸。——那我下次少放点儿盐。',answerPy:'Jiǎozi hěn xiāng, búguò jīdàn tāng shāowēi yǒudiǎnr xián. — Nà wǒ xià cì shǎo fàng diǎnr yán.',
      note:'稍微 (Bài 13), 盐 (Bài 12), 香 (Bài 7).'},
   ]},

  {n:21,zh:'矿泉水',py:'kuàngquánshuǐ',pos:'Danh từ',vn:'nước suối, nước khoáng',em:'💧',lesson:3,
   explain:['Nước khoáng đóng chai. 一瓶矿泉水, 买矿泉水.'],
   usage:'买矿泉水, 一瓶矿泉水, 喝矿泉水.',
   collo:['到处找商店买矿泉水','一瓶矿泉水','矿泉水、果汁什么的'],
   ex_zh:'那天晚上就梦见自己到处找商店买矿泉水。',ex_py:'Nà tiān wǎnshang jiù mèngjiàn zìjǐ dàochù zhǎo shāngdiàn mǎi kuàngquánshuǐ.',ex_vn:'Tối đó mơ thấy mình đi khắp nơi tìm cửa hàng mua nước suối.',
   exList:[
     {zh:'那天晚上就梦见自己到处找商店买矿泉水。',py:'Nà tiān wǎnshang jiù mèngjiàn zìjǐ dàochù zhǎo shāngdiàn mǎi kuàngquánshuǐ.',vn:'Tối đó mơ thấy mình đi khắp nơi tìm cửa hàng mua nước suối.'},
     {zh:'我们去趟超市吧，明天出去玩儿得买点儿饼干和面包，还有矿泉水、果汁什么的。',py:'Wǒmen qù tàng chāoshì ba, míngtiān chūqù wánr děi mǎi diǎnr bǐnggān hé miànbāo, hái yǒu kuàngquánshuǐ, guǒzhī shénme de.',vn:'Đi siêu thị một chuyến đi, mai đi chơi phải mua bánh quy, bánh mì, còn nước suối, nước trái cây các thứ.'},
     {zh:'天气太热，出门记得带一瓶矿泉水。',py:'Tiānqì tài rè, chū mén jìde dài yì píng kuàngquánshuǐ.',vn:'Trời nóng quá, ra ngoài nhớ mang một chai nước suối.'},
   ],
   hanzi:[
     {c:'矿',p:'kuàng',type:'左右结构 · Trái-phải',st:8,ord:'石 trái → 广 phải',rad:'石 (thạch)',mean:'khoáng, mỏ',
      tip:'Đá 石 + 广 → MỎ KHOÁNG. 矿泉水 = nước suối có khoáng chất.',
      cf:'扩 (kuò – mở rộng)',w:'矿泉水 / 矿'},
     {c:'泉',p:'quán',type:'上下结构 · Trên-dưới',st:9,ord:'白 trên → 水 dưới',rad:'水 (thủy)',mean:'suối',
      tip:'白(trắng) + 水(nước) → nước trong chảy ra → SUỐI (tuyền). 泉水, 温泉 (suối nước nóng).',
      cf:'泵 (bèng – bơm)',w:'矿泉水 / 温泉 / 泉水'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời nóng quá, ra ngoài nhớ mang một chai nước suối.',answer:'天气太热，出门记得带一瓶矿泉水。',answerPy:'Tiānqì tài rè, chū mén jìde dài yì píng kuàngquánshuǐ.',
      note:'记得 + động từ, lượng từ 瓶.'},
   ]},

  {n:22,zh:'付款',py:'fù kuǎn',pos:'Động từ',vn:'trả tiền',em:'💳',lesson:4,
   explain:['Thanh toán tiền. Động từ ly hợp: 付了款. 付款购物, 用手机付款, 付现金 (Bài 5).'],
   usage:'付款购物, 用手机付款, 在线付款.',
   collo:['付款购物','用手机付款','付完款'],
   ex_zh:'除此以外，你还可以用它来听音乐、看电影、阅读、玩儿游戏、付款购物等。',ex_py:'Chú cǐ yǐwài, nǐ hái kěyǐ yòng tā lái tīng yīnyuè, kàn diànyǐng, yuèdú, wánr yóuxì, fù kuǎn gòuwù děng.',ex_vn:'Ngoài ra, bạn còn có thể dùng nó để nghe nhạc, xem phim, đọc sách, chơi game, thanh toán mua sắm.',
   exList:[
     {zh:'除此以外，你还可以用它来听音乐、看电影、阅读、玩儿游戏、付款购物等，这大大方便了人们的生活。',py:'Chú cǐ yǐwài, nǐ hái kěyǐ yòng tā lái tīng yīnyuè, kàn diànyǐng, yuèdú, wánr yóuxì, fù kuǎn gòuwù děng, zhè dàdà fāngbiànle rénmen de shēnghuó.',vn:'Ngoài ra, bạn còn dùng nó nghe nhạc, xem phim, đọc, chơi game, thanh toán mua sắm, điều này tiện lợi lớn cho cuộc sống.'},
     {zh:'现在很多人买东西都用手机付款，不用带现金了。',py:'Xiànzài hěn duō rén mǎi dōngxi dōu yòng shǒujī fù kuǎn, búyòng dài xiànjīn le.',vn:'Bây giờ nhiều người mua đồ đều thanh toán bằng điện thoại, không cần mang tiền mặt.'},
     {zh:'请您先付款，然后到旁边取货。',py:'Qǐng nín xiān fù kuǎn, ránhòu dào pángbiān qǔ huò.',vn:'Mời ngài thanh toán trước, sau đó sang bên cạnh lấy hàng.'},
   ],
   hanzi:[
     {c:'款',p:'kuǎn',type:'左右结构 · Trái-phải',st:12,ord:'祟 trái → 欠 phải',rad:'欠 (khiếm)',mean:'khoản tiền',
      tip:'柰 + 欠(nợ) → KHOẢN tiền. 付款 = trả tiền; 贷款 = vay; 款式 = kiểu dáng.',
      cf:'欠 (qiàn – nợ, thiếu)',w:'付款 / 贷款 / 款式'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bây giờ nhiều người mua đồ đều thanh toán bằng điện thoại, không cần mang tiền mặt.',answer:'现在很多人买东西都用手机付款，不用带现金了。',answerPy:'Xiànzài hěn duō rén mǎi dōngxi dōu yòng shǒujī fù kuǎn, búyòng dài xiànjīn le.',
      note:'现金 (Bài 5), 不用……了.'},
   ]},

  {n:23,zh:'举',py:'jǔ',pos:'Động từ',vn:'nêu, đưa ra; giơ',em:'🙋',lesson:4,
   explain:['(1) Nêu ra: 举一个例子, 举例说明. (2) Giơ lên: 举手, 举起. 举办 (Bài 11) = tổ chức.'],
   usage:'举一个例子, 举例, 举手.',
   collo:['举一个例子','举例说明','举手回答'],
   ex_zh:'举一个例子，迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。',ex_py:'Jǔ yí ge lìzi, mí lù shí, zhǐyào yòng shǒujī dìtú chá yíxià dìzhǐ, mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn.',ex_vn:'Nêu một ví dụ, khi lạc đường, chỉ cần dùng bản đồ điện thoại tra địa chỉ, lập tức biết cách đến địa điểm đó.',
   exList:[
     {zh:'举一个例子，迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。',py:'Jǔ yí ge lìzi, mí lù shí, zhǐyào yòng shǒujī dìtú chá yíxià dìzhǐ, mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn.',vn:'Nêu một ví dụ, khi lạc đường, chỉ cần dùng bản đồ điện thoại tra địa chỉ, lập tức biết cách đến địa điểm đó.'},
     {zh:'我们的生活发生了哪些变化？请举例说明。',py:'Wǒmen de shēnghuó fāshēngle nǎxiē biànhuà? Qǐng jǔ lì shuōmíng.',vn:'Cuộc sống chúng ta có những thay đổi gì? Hãy nêu ví dụ giải thích.'},
     {zh:'知道答案的同学请举手。',py:'Zhīdào dá\'àn de tóngxué qǐng jǔ shǒu.',vn:'Bạn nào biết đáp án xin giơ tay.'},
   ],
   hanzi:[
     {c:'举',p:'jǔ',type:'上下结构 · Trên-dưới',st:9,ord:'𭕄 trên → 丰 dưới',rad:'丶 (chủ)',mean:'giơ, nêu',
      tip:'Giản thể của 舉 (nhiều tay cùng nâng) → GIƠ, NÊU. 举例 = nêu ví dụ; 举办 (Bài 11); 举手.',
      cf:'誉 (yù – danh dự)',w:'举 / 举例 / 举办 / 举手'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc sống chúng ta có những thay đổi gì? Hãy nêu ví dụ giải thích.',answer:'我们的生活发生了哪些变化？请举例说明。',answerPy:'Wǒmen de shēnghuó fāshēngle nǎxiē biànhuà? Qǐng jǔ lì shuōmíng.',
      note:'发生 (Bài 7), 说明 (Bài 10).'},
   ]},

  {n:24,zh:'迷路',py:'mí lù',pos:'Động từ',vn:'lạc đường',em:'🧭',lesson:4,
   explain:['Không tìm được đường. Động từ ly hợp: 迷了路. 迷路时, 好像迷路了.'],
   usage:'迷路时, 好像迷路了, 怕迷路.',
   collo:['迷路时','咱们好像迷路了','在森林里迷路'],
   ex_zh:'迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。',ex_py:'Mí lù shí, zhǐyào yòng shǒujī dìtú chá yíxià dìzhǐ, mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn.',ex_vn:'Khi lạc đường, chỉ cần dùng bản đồ điện thoại tra địa chỉ, lập tức biết cách đến địa điểm đó.',
   exList:[
     {zh:'迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。',py:'Mí lù shí, zhǐyào yòng shǒujī dìtú chá yíxià dìzhǐ, mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn.',vn:'Khi lạc đường, chỉ cần dùng bản đồ điện thoại tra địa chỉ, lập tức biết cách đến địa điểm đó.'},
     {zh:'A：我怎么觉得咱们好像迷路了？B：没有，我以前来过这儿，前面路口左转就到了。',py:'A: Wǒ zěnme juéde zánmen hǎoxiàng mí lù le? B: Méiyǒu, wǒ yǐqián láiguo zhèr, qiánmiàn lùkǒu zuǒ zhuǎn jiù dào le.',vn:'A: Sao tôi thấy hình như chúng ta lạc đường rồi? B: Không, tôi từng đến đây, ngã tư phía trước rẽ trái là đến.'},
     {zh:'第一次来北京的时候，我在地铁站迷了路，幸好有警察帮忙。',py:'Dì-yī cì lái Běijīng de shíhou, wǒ zài dìtiě zhàn míle lù, xìnghǎo yǒu jǐngchá bāng máng.',vn:'Lần đầu đến Bắc Kinh, tôi lạc đường ở ga tàu điện ngầm, may có cảnh sát giúp.'},
   ],
   hanzi:[
     {c:'迷',p:'mí',type:'半包围结构 · Nửa bao quanh',st:9,ord:'米 trong → 辶 bao',rad:'辶 (sước)',mean:'lạc, mê',
      tip:'Đi 辶 + 米 (hạt gạo rải khắp nơi) → không biết đi hướng nào → LẠC, MÊ. 迷路 = lạc đường; 球迷 = fan bóng đá.',
      cf:'米 (mǐ – gạo, mét)',w:'迷路 / 球迷 / 迷人'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sao tôi thấy hình như chúng ta lạc đường rồi? — Không, ngã tư phía trước rẽ trái là đến.',answer:'我怎么觉得咱们好像迷路了？——没有，前面路口左转就到了。',answerPy:'Wǒ zěnme juéde zánmen hǎoxiàng mí lù le? — Méiyǒu, qiánmiàn lùkǒu zuǒ zhuǎn jiù dào le.',
      note:'好像 (Bài 6), 路口 (Bài 2), 转 (Bài 2).'},
   ]},

  {n:25,zh:'地址',py:'dìzhǐ',pos:'Danh từ',vn:'địa chỉ',em:'📍',lesson:4,
   explain:['Nơi ở/nơi liên hệ. 查地址, 邮箱地址, 家庭地址.'],
   usage:'查一下地址, 邮箱地址, 写地址.',
   collo:['用手机地图查一下地址','邮箱地址','把地址告诉我'],
   ex_zh:'只要用手机地图查一下地址，马上就能知道怎么去那个地点。',ex_py:'Zhǐyào yòng shǒujī dìtú chá yíxià dìzhǐ, mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn.',ex_vn:'Chỉ cần dùng bản đồ điện thoại tra địa chỉ, lập tức biết cách đến địa điểm đó.',
   exList:[
     {zh:'只要用手机地图查一下地址，马上就能知道怎么去那个地点。',py:'Zhǐyào yòng shǒujī dìtú chá yíxià dìzhǐ, mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn.',vn:'Chỉ cần dùng bản đồ điện thoại tra địa chỉ, lập tức biết cách đến địa điểm đó.'},
     {zh:'A：能把照片发到我邮箱里吗？B：没问题，把你的邮箱地址告诉我，我整理好了就发给你。',py:'A: Néng bǎ zhàopiàn fādào wǒ yóuxiāng li ma? B: Méi wèntí, bǎ nǐ de yóuxiāng dìzhǐ gàosu wǒ, wǒ zhěnglǐ hǎo le jiù fā gěi nǐ.',vn:'A: Gửi ảnh vào hộp thư của tôi được không? B: Không vấn đề, cho tôi địa chỉ email, tôi sắp xếp xong gửi ngay.'},
     {zh:'请在信封上写清楚收信人的地址和姓名。',py:'Qǐng zài xìnfēng shang xiě qīngchu shōuxìnrén de dìzhǐ hé xìngmíng.',vn:'Hãy viết rõ địa chỉ và họ tên người nhận trên phong bì.'},
   ],
   hanzi:[
     {c:'址',p:'zhǐ',type:'左右结构 · Trái-phải',st:7,ord:'土 trái → 止 phải',rad:'土 (thổ)',mean:'nền, chỗ',
      tip:'Đất 土 + 止(dừng) → chỗ đất dừng chân → CHỈ (địa chỉ). 地址 = địa chỉ; 网址 = địa chỉ web.',
      cf:'止 (zhǐ – dừng)',w:'地址 / 网址'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không vấn đề, cho tôi địa chỉ email, tôi sắp xếp xong gửi ngay.',answer:'没问题，把你的邮箱地址告诉我，我整理好了就发给你。',answerPy:'Méi wèntí, bǎ nǐ de yóuxiāng dìzhǐ gàosu wǒ, wǒ zhěnglǐ hǎo le jiù fā gěi nǐ.',
      note:'整理 (Bài 15), câu chữ 把.'},
   ]},

  {n:26,zh:'地点',py:'dìdiǎn',pos:'Danh từ',vn:'địa điểm, nơi',em:'🗺️',lesson:4,
   explain:['Nơi chốn cụ thể (họp, hẹn). 那个地点, 会议地点, 集合地点. Phân biệt 地址 (địa chỉ ghi).'],
   usage:'会议地点, 集合地点, 改地点.',
   collo:['怎么去那个地点','会议地点改到……','地点改在西门了'],
   ex_zh:'马上就能知道怎么去那个地点。',ex_py:'Mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn.',ex_vn:'Lập tức biết cách đến địa điểm đó.',
   exList:[
     {zh:'只要用手机地图查一下地址，马上就能知道怎么去那个地点。',py:'Zhǐyào yòng shǒujī dìtú chá yíxià dìzhǐ, mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn.',vn:'Chỉ cần dùng bản đồ điện thoại tra địa chỉ, lập tức biết cách đến địa điểm đó.'},
     {zh:'A：今天下午我们还是两点在东门集合吗？B：时间不变，地点改在西门了。快去整理一下东西吧，我们马上出发。',py:'A: Jīntiān xiàwǔ wǒmen háishi liǎng diǎn zài dōngmén jíhé ma? B: Shíjiān bú biàn, dìdiǎn gǎi zài xīmén le. Kuài qù zhěnglǐ yíxià dōngxi ba, wǒmen mǎshàng chūfā.',vn:'A: Chiều nay vẫn 2 giờ tập trung ở cổng đông à? B: Giờ không đổi, địa điểm đổi sang cổng tây. Mau dọn đồ, chúng ta xuất phát ngay.'},
     {zh:'联系过了，我已经通知他会议地点改到首都饭店了。',py:'Liánxìguo le, wǒ yǐjīng tōngzhī tā huìyì dìdiǎn gǎidào Shǒudū Fàndiàn le.',vn:'Liên lạc rồi, tôi đã thông báo địa điểm họp đổi sang khách sạn Thủ Đô.'},
   ],
   hanzi:[
     {c:'点',p:'diǎn',type:'上下结构 · Trên-dưới',st:9,ord:'占 trên → 灬 dưới',rad:'灬 (hỏa)',mean:'điểm',
      tip:'占 + 灬 → ĐIỂM. 地点 = địa điểm; 重点 (Bài 16); 优点/缺点 (Bài 8); 特点.',
      cf:'店 (diàn – cửa hàng)',w:'地点 / 重点 / 特点 / 优点'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giờ không đổi, địa điểm đổi sang cổng tây. Mau dọn đồ, chúng ta xuất phát ngay.',answer:'时间不变，地点改在西门了。快去整理一下东西吧，我们马上出发。',answerPy:'Shíjiān bú biàn, dìdiǎn gǎi zài xīmén le. Kuài qù zhěnglǐ yíxià dōngxi ba, wǒmen mǎshàng chūfā.',
      note:'整理 (Bài 15), 出发 (Bài 2).'},
   ]},

  {n:27,zh:'世纪',py:'shìjì',pos:'Danh từ',vn:'thế kỷ',em:'📅',lesson:5,
   explain:['100 năm. 21世纪, 上个世纪, 半个世纪.'],
   usage:'21世纪, 上个世纪, 一个世纪.',
   collo:['21世纪','上个世纪','半个世纪以前'],
   ex_zh:'21世纪，我们的生活发生了巨大变化。',ex_py:'Èrshíyī shìjì, wǒmen de shēnghuó fāshēngle jùdà biànhuà.',ex_vn:'Thế kỷ 21, cuộc sống chúng ta đã có thay đổi to lớn.',
   exList:[
     {zh:'21世纪，我们的生活发生了巨大变化。几千公里以外的国家，以前坐船需要几个月，现在乘坐飞机不过十几个小时。',py:'Èrshíyī shìjì, wǒmen de shēnghuó fāshēngle jùdà biànhuà. Jǐqiān gōnglǐ yǐwài de guójiā, yǐqián zuò chuán xūyào jǐ ge yuè, xiànzài chéngzuò fēijī búguò shí jǐ ge xiǎoshí.',vn:'Thế kỷ 21, cuộc sống thay đổi to lớn. Nước cách vài nghìn km, trước đây đi thuyền mất mấy tháng, nay đi máy bay chỉ hơn chục tiếng.'},
     {zh:'上个世纪五十年代，中国把大熊猫作为礼物送给其他国家。',py:'Shàng ge shìjì wǔshí niándài, Zhōngguó bǎ dà xióngmāo zuòwéi lǐwù sònggěi qítā guójiā.',vn:'Thập niên 50 thế kỷ trước, Trung Quốc tặng gấu trúc làm quà cho nước khác.'},
     {zh:'这座桥已经有一个多世纪的历史了。',py:'Zhè zuò qiáo yǐjīng yǒu yí ge duō shìjì de lìshǐ le.',vn:'Cây cầu này đã có lịch sử hơn một thế kỷ.'},
   ],
   hanzi:[
     {c:'纪',p:'jì',type:'左右结构 · Trái-phải',st:6,ord:'纟 trái → 己 phải',rad:'纟 (mịch)',mean:'kỷ',
      tip:'Sợi tơ 纟 + 己 → sắp xếp đầu mối → KỶ (ghi chép thời gian). 世纪 = thế kỷ; 纪念 = kỷ niệm.',
      cf:'记 (jì – ghi, bộ 讠)',w:'世纪 / 纪念 / 年纪'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thế kỷ 21, cuộc sống chúng ta đã có thay đổi to lớn.',answer:'21世纪，我们的生活发生了巨大变化。',answerPy:'Èrshíyī shìjì, wǒmen de shēnghuó fāshēngle jùdà biànhuà.',
      note:'发生 (Bài 7), 变化 (Bài 8).'},
   ]},

  {n:28,zh:'邮局',py:'yóujú',pos:'Danh từ',vn:'bưu điện',em:'🏤',lesson:5,
   explain:['Nơi gửi thư, bưu phẩm. 去邮局, 邮局寄信. 邮箱 = hộp thư.'],
   usage:'去邮局, 在邮局寄信, 连邮局都不用去.',
   collo:['连邮局都不用去','去邮局寄信','邮局旁边'],
   ex_zh:'原来寄信需要好几天，现在连邮局都不用去，只要在家里上网发个电子邮件。',ex_py:'Yuánlái jì xìn xūyào hǎo jǐ tiān, xiànzài lián yóujú dōu búyòng qù, zhǐyào zài jiāli shàng wǎng fā ge diànzǐ yóujiàn.',ex_vn:'Trước đây gửi thư mất mấy ngày, nay đến bưu điện cũng không cần, chỉ cần ở nhà lên mạng gửi email.',
   exList:[
     {zh:'原来寄信需要好几天，现在连邮局都不用去，只要在家里上网发个电子邮件，用不了一分钟，远处的朋友就能收到。',py:'Yuánlái jì xìn xūyào hǎo jǐ tiān, xiànzài lián yóujú dōu búyòng qù, zhǐyào zài jiāli shàng wǎng fā ge diànzǐ yóujiàn, yòngbuliǎo yì fēnzhōng, yuǎnchù de péngyou jiù néng shōudào.',vn:'Trước đây gửi thư mất mấy ngày, nay đến bưu điện cũng không cần, chỉ cần ở nhà gửi email, chưa đến một phút bạn ở xa đã nhận được.'},
     {zh:'请问，去邮局怎么走？我想寄个包裹。',py:'Qǐngwèn, qù yóujú zěnme zǒu? Wǒ xiǎng jì ge bāoguǒ.',vn:'Xin hỏi, đến bưu điện đi thế nào? Tôi muốn gửi bưu kiện.'},
     {zh:'邮局周末也开门，你星期六去寄也来得及。',py:'Yóujú zhōumò yě kāi mén, nǐ xīngqīliù qù jì yě láidejí.',vn:'Bưu điện cuối tuần cũng mở cửa, thứ Bảy bạn đi gửi cũng kịp.'},
   ],
   hanzi:[
     {c:'邮',p:'yóu',type:'左右结构 · Trái-phải',st:7,ord:'由 trái → 阝 phải',rad:'阝 (ấp)',mean:'bưu',
      tip:'由 + 阝(ấp, trạm) → trạm chuyển thư → BƯU. 邮局 = bưu điện; 邮件 = thư tín; 邮箱 = hộp thư.',
      cf:'油 (yóu – dầu)',w:'邮局 / 邮件 / 邮箱 / 邮票'},
     {c:'局',p:'jú',type:'半包围结构 · Nửa bao quanh',st:7,ord:'尸 bao → 句 trong',rad:'尸 (thi)',mean:'cục, sở',
      tip:'尸 + 句 → nơi làm việc → CỤC, SỞ. 邮局; 警察局 = sở cảnh sát; 结局 = kết cục.',
      cf:'句 (jù – câu)',w:'邮局 / 警察局 / 结局'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nay đến bưu điện cũng không cần, chỉ cần ở nhà lên mạng gửi email.',answer:'现在连邮局都不用去，只要在家里上网发个电子邮件。',answerPy:'Xiànzài lián yóujú dōu búyòng qù, zhǐyào zài jiāli shàng wǎng fā ge diànzǐ yóujiàn.',
      note:'连……都 (Bài 11), 只要 (Bài 8).'},
   ]},

  {n:29,zh:'收',py:'shōu',pos:'Động từ',vn:'nhận',em:'📥',lesson:5,
   explain:['Nhận (thư, tiền, quà). 收到 = nhận được; 收信; 收入 (Bài 10) = thu nhập; 收拾 = dọn dẹp.'],
   usage:'收到, 收信, 收礼物.',
   collo:['远处的朋友就能收到','很难收回','收到了通知'],
   ex_zh:'用不了一分钟，远处的朋友就能收到，比写信封用的时间都短。',ex_py:'Yòngbuliǎo yì fēnzhōng, yuǎnchù de péngyou jiù néng shōudào, bǐ xiě xìnfēng yòng de shíjiān dōu duǎn.',ex_vn:'Chưa đến một phút, bạn ở xa đã nhận được, ngắn hơn cả thời gian viết phong bì.',
   exList:[
     {zh:'用不了一分钟，远处的朋友就能收到，比写信封用的时间都短。',py:'Yòngbuliǎo yì fēnzhōng, yuǎnchù de péngyou jiù néng shōudào, bǐ xiě xìnfēng yòng de shíjiān dōu duǎn.',vn:'Chưa đến một phút, bạn ở xa đã nhận được, ngắn hơn cả thời gian viết phong bì.'},
     {zh:'说出去的话很难收回。因此，生气时不要随便说话。',py:'Shuō chūqu de huà hěn nán shōuhuí. Yīncǐ, shēng qì shí búyào suíbiàn shuō huà.',vn:'Lời nói ra rất khó thu lại. Vì vậy, lúc giận đừng nói bừa.'},
     {zh:'你收到我昨天发的邮件了吗？',py:'Nǐ shōudào wǒ zuótiān fā de yóujiàn le ma?',vn:'Bạn nhận được email tôi gửi hôm qua chưa?'},
   ],
   hanzi:[
     {c:'收',p:'shōu',type:'左右结构 · Trái-phải',st:6,ord:'丩 trái → 攵 phải',rad:'攵 (phộc)',mean:'thu, nhận',
      tip:'丩 + 攵 → gom lại → THU, NHẬN. 收到, 收入 (Bài 10), 收拾, 收回.',
      cf:'放 (fàng – thả, đối lập)',w:'收 / 收到 / 收入 / 收拾'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lời nói ra rất khó thu lại. Vì vậy, lúc giận đừng nói bừa.',answer:'说出去的话很难收回。因此，生气时不要随便说话。',answerPy:'Shuō chūqu de huà hěn nán shōuhuí. Yīncǐ, shēng qì shí búyào suíbiàn shuō huà.',
      note:'因此 (Bài 8), 随便 (Bài 7).'},
   ]},

  {n:30,zh:'信封',py:'xìnfēng',pos:'Danh từ',vn:'phong thư, bì thư',em:'✉️',lesson:5,
   explain:['Bì đựng thư. 写信封, 一个信封, 信封上.'],
   usage:'写信封, 信封上的地址, 一个信封.',
   collo:['比写信封用的时间都短','在信封上写地址','一个信封'],
   ex_zh:'比写信封用的时间都短。',ex_py:'Bǐ xiě xìnfēng yòng de shíjiān dōu duǎn.',ex_vn:'Ngắn hơn cả thời gian viết phong bì.',
   exList:[
     {zh:'远处的朋友就能收到，比写信封用的时间都短。',py:'Yuǎnchù de péngyou jiù néng shōudào, bǐ xiě xìnfēng yòng de shíjiān dōu duǎn.',vn:'Bạn ở xa đã nhận được, ngắn hơn cả thời gian viết phong bì.'},
     {zh:'请在信封上写清楚收信人的地址和姓名。',py:'Qǐng zài xìnfēng shang xiě qīngchu shōuxìnrén de dìzhǐ hé xìngmíng.',vn:'Hãy viết rõ địa chỉ và họ tên người nhận trên phong bì.'},
     {zh:'现在的年轻人很少用信封写信了，都发电子邮件。',py:'Xiànzài de niánqīngrén hěn shǎo yòng xìnfēng xiě xìn le, dōu fā diànzǐ yóujiàn.',vn:'Giới trẻ bây giờ ít viết thư bằng phong bì, đều gửi email.'},
   ],
   hanzi:[
     {c:'封',p:'fēng',type:'左右结构 · Trái-phải',st:9,ord:'圭 trái → 寸 phải',rad:'寸 (thốn)',mean:'phong, dán kín',
      tip:'圭 + 寸(tay) → tay đắp đất → ĐÓNG KÍN, PHONG. 信封 = phong thư; lượng từ 一封信.',
      cf:'挂 (guà – treo, Bài 16)',w:'信封 / 一封信'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hãy viết rõ địa chỉ và họ tên người nhận trên phong bì.',answer:'请在信封上写清楚收信人的地址和姓名。',answerPy:'Qǐng zài xìnfēng shang xiě qīngchu shōuxìnrén de dìzhǐ hé xìngmíng.',
      note:'地址 (từ mới), bổ ngữ kết quả 写清楚.'},
   ]},

  {n:31,zh:'网站',py:'wǎngzhàn',pos:'Danh từ',vn:'trang web',em:'🌐',lesson:5,
   explain:['Website. 打开网站, 购物网站, 新闻网站.'],
   usage:'打开网站, 购物网站, 学校的网站.',
   collo:['只要打开网站','购物网站','这个网站'],
   ex_zh:'现在只要打开网站，任何信息都可以在第一时间获得。',ex_py:'Xiànzài zhǐyào dǎkāi wǎngzhàn, rènhé xìnxī dōu kěyǐ zài dì-yī shíjiān huòdé.',ex_vn:'Bây giờ chỉ cần mở trang web, mọi thông tin đều có thể có ngay lập tức.',
   exList:[
     {zh:'以前外地的新闻要几天后才能知道，现在只要打开网站，任何信息都可以在第一时间获得。',py:'Yǐqián wàidì de xīnwén yào jǐ tiān hòu cái néng zhīdào, xiànzài zhǐyào dǎkāi wǎngzhàn, rènhé xìnxī dōu kěyǐ zài dì-yī shíjiān huòdé.',vn:'Trước đây tin tức nơi khác mấy ngày sau mới biết, nay chỉ cần mở trang web, mọi thông tin đều có ngay lập tức.'},
     {zh:'我经常在这个购物网站买东西，价格便宜，送货也快。',py:'Wǒ jīngcháng zài zhège gòuwù wǎngzhàn mǎi dōngxi, jiàgé piányi, sòng huò yě kuài.',vn:'Tôi thường mua đồ ở trang web mua sắm này, giá rẻ, giao hàng cũng nhanh.'},
     {zh:'报名的详细信息可以在学校的网站上查到。',py:'Bào míng de xiángxì xìnxī kěyǐ zài xuéxiào de wǎngzhàn shang chádào.',vn:'Thông tin chi tiết đăng ký có thể tra trên trang web của trường.'},
   ],
   hanzi:[
     {c:'站',p:'zhàn',type:'左右结构 · Trái-phải',st:10,ord:'立 trái → 占 phải',rad:'立 (lập)',mean:'đứng; trạm',
      tip:'立(đứng) + 占 → ĐỨNG; nơi dừng → TRẠM. 网站 = trạm mạng = website; 车站, 站起来 (Bài 15).',
      cf:'占 (zhàn – chiếm)',w:'网站 / 车站 / 站'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thông tin chi tiết đăng ký có thể tra trên trang web của trường.',answer:'报名的详细信息可以在学校的网站上查到。',answerPy:'Bào míng de xiángxì xìnxī kěyǐ zài xuéxiào de wǎngzhàn shang chádào.',
      note:'报名 (Bài 16), 详细 (Bài 12), 信息 (từ mới).'},
   ]},

  {n:32,zh:'信息',py:'xìnxī',pos:'Danh từ',vn:'tin tức, thông tin',em:'📨',lesson:5,
   explain:['Thông tin. 获得信息, 任何信息, 详细信息. So sánh 消息 (Bài 9: tin tức sự kiện).'],
   usage:'获得信息, 任何信息, 查信息.',
   collo:['任何信息都可以获得','详细信息','发信息'],
   ex_zh:'任何信息都可以在第一时间获得。',ex_py:'Rènhé xìnxī dōu kěyǐ zài dì-yī shíjiān huòdé.',ex_vn:'Mọi thông tin đều có thể có được ngay lập tức.',
   exList:[
     {zh:'现在只要打开网站，任何信息都可以在第一时间获得。',py:'Xiànzài zhǐyào dǎkāi wǎngzhàn, rènhé xìnxī dōu kěyǐ zài dì-yī shíjiān huòdé.',vn:'Bây giờ chỉ cần mở trang web, mọi thông tin đều có được ngay lập tức.'},
     {zh:'现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作"地球村"。',py:'Xiàndài kēxué jìshù de fāzhǎn ràng shìjiè biànde yuè lái yuè xiǎo, suǒyǐ xiànzài rénmen dōu bǎ dìqiú jiàozuò "dìqiúcūn".',vn:'Sự phát triển khoa học kỹ thuật hiện đại khiến thế giới ngày càng nhỏ, nên người ta gọi Trái đất là "làng toàn cầu".'},
     {zh:'互联网上的信息真真假假，我们要学会判断。',py:'Hùliánwǎng shang de xìnxī zhēnzhēn jiǎjiǎ, wǒmen yào xuéhuì pànduàn.',vn:'Thông tin trên Internet thật giả lẫn lộn, chúng ta phải học cách phán đoán.'},
   ],
   hanzi:[
     {c:'息',p:'xī',type:'上下结构 · Trên-dưới',st:10,ord:'自 trên → 心 dưới',rad:'心 (tâm)',mean:'tin; nghỉ',
      tip:'自(mũi) + 心(tim) → hơi thở → TIN TỨC (信息), NGHỈ (休息). 消息 (Bài 9).',
      cf:'自 (zì – tự)',w:'信息 / 消息 / 休息'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thông tin trên Internet thật giả lẫn lộn, chúng ta phải học cách phán đoán.',answer:'互联网上的信息真真假假，我们要学会判断。',answerPy:'Hùliánwǎng shang de xìnxī zhēnzhēn jiǎjiǎ, wǒmen yào xuéhuì pànduàn.',
      note:'互联网 (Bài 13), 假 (Bài 15), 判断 (Bài 15).'},
   ]},
];

var wuData = [
  {img:'🔑',label:'密码',py:'mìmǎ',letter:'A'},
  {img:'📨',label:'信息',py:'xìnxī',letter:'B'},
  {img:'🙋',label:'举',py:'jǔ',letter:'C'},
  {img:'⚠️',label:'危险',py:'wēixiǎn',letter:'D'},
  {img:'🚦',label:'交通',py:'jiāotōng',letter:'E'},
  {img:'💳',label:'付款',py:'fù kuǎn',letter:'F'},
];

var dialogData = [
  {scene:'课文1 · 王静给孙月推荐一本书',
   preQuiz:[{q:'王静推荐的书叫什么？',opts:['《十万个为什么》','《新十万个为什么》','《地球村》'],ans:1}],
   lines:[
     {sp:0,zh:'上次女儿问我飞机是怎么起飞和降落的，真不知道该怎么回答她，她现在总是有各种各样的"为什么"。',py:'Shàng cì nǚ\'ér wèn wǒ fēijī shì zěnme qǐfēi hé jiàngluò de, zhēn bù zhīdào gāi zěnme huídá tā, tā xiànzài zǒngshì yǒu gè zhǒng gè yàng de "wèi shénme".',vn:'Lần trước con gái hỏi tôi máy bay cất cánh hạ cánh thế nào, thật không biết trả lời sao, giờ nó luôn có đủ loại "tại sao".'},
     {sp:1,zh:'孩子眼中的世界是美丽和奇特的。有一本书叫《新十万个为什么》，现在卖得非常火。书里的内容都是儿童想知道的科学知识，相信你女儿一定喜欢读。',py:'Háizi yǎnzhōng de shìjiè shì měilì hé qítè de. Yǒu yì běn shū jiào "Xīn Shíwàn Ge Wèi Shénme", xiànzài mài de fēicháng huǒ. Shū li de nèiróng dōu shì értóng xiǎng zhīdào de kēxué zhīshi, xiāngxìn nǐ nǚ\'ér yídìng xǐhuan dú.',vn:'Thế giới trong mắt trẻ đẹp và kỳ lạ. Có cuốn "Mười vạn câu hỏi vì sao mới", hiện bán rất chạy. Nội dung đều là kiến thức khoa học trẻ muốn biết, tin rằng con gái bạn sẽ thích.'},
     {sp:0,zh:'难道它和我们小时候看的《十万个为什么》不一样吗？作者是谁啊？',py:'Nándào tā hé wǒmen xiǎoshíhou kàn de "Shíwàn Ge Wèi Shénme" bù yíyàng ma? Zuòzhě shì shéi a?',vn:'Chẳng lẽ nó khác cuốn chúng ta đọc hồi nhỏ sao? Tác giả là ai?'},
     {sp:1,zh:'作者的名字我没记住。《新十万个为什么》的内容更新，介绍了各种科学知识，包括地球、动物、植物、交通、科学技术、社会和文化等很多方面。',py:'Zuòzhě de míngzi wǒ méi jìzhu. "Xīn Shíwàn Ge Wèi Shénme" de nèiróng gèng xīn, jièshàole gè zhǒng kēxué zhīshi, bāokuò dìqiú, dòngwù, zhíwù, jiāotōng, kēxué jìshù, shèhuì hé wénhuà děng hěn duō fāngmiàn.',vn:'Tên tác giả tôi không nhớ. Nội dung cuốn mới mới hơn, giới thiệu đủ kiến thức khoa học: Trái đất, động vật, thực vật, giao thông, khoa học kỹ thuật, xã hội, văn hóa.'},
     {sp:0,zh:'太好了！不过她这么小，我不知道她是否能读懂。',py:'Tài hǎo le! Búguò tā zhème xiǎo, wǒ bù zhīdào tā shìfǒu néng dúdǒng.',vn:'Tuyệt quá! Nhưng nó còn nhỏ, tôi không biết nó có đọc hiểu không.'},
     {sp:1,zh:'放心吧，这本书的语言简单易懂，一定能增长孩子的科学知识。',py:'Fàng xīn ba, zhè běn shū de yǔyán jiǎndān yìdǒng, yídìng néng zēngzhǎng háizi de kēxué zhīshi.',vn:'Yên tâm, ngôn ngữ cuốn sách đơn giản dễ hiểu, nhất định tăng kiến thức khoa học cho trẻ.'},
   ]},
  {scene:'课文2 · 李老师和高老师在聊电脑和互联网技术的发展',
   preQuiz:[{q:'据调查，多少人遇到问题时首先想到上网找答案？',opts:['50%','70%','90%'],ans:1}],
   lines:[
     {sp:0,zh:'现在的大学生一遇到不明白的问题，可以马上在网上查找答案，几秒钟就把问题解决了，这比我们上学的时候方便多了。',py:'Xiànzài de dàxuéshēng yí yùdào bù míngbai de wèntí, kěyǐ mǎshàng zài wǎngshang cházhǎo dá\'àn, jǐ miǎo zhōng jiù bǎ wèntí jiějué le, zhè bǐ wǒmen shàng xué de shíhou fāngbiàn duō le.',vn:'Sinh viên bây giờ gặp vấn đề không hiểu, tra ngay trên mạng, vài giây giải quyết xong, tiện hơn hồi chúng ta đi học nhiều.'},
     {sp:1,zh:'现在的人们，尤其是大学生开始普遍使用电脑，他们的生活已经离不开电脑。据调查，70%的人遇到问题时，首先想到的就是上网找答案。',py:'Xiànzài de rénmen, yóuqí shì dàxuéshēng kāishǐ pǔbiàn shǐyòng diànnǎo, tāmen de shēnghuó yǐjīng lí bu kāi diànnǎo. Jù diàochá, bǎifēnzhī qīshí de rén yùdào wèntí shí, shǒuxiān xiǎngdào de jiù shì shàng wǎng zhǎo dá\'àn.',vn:'Người ta bây giờ, nhất là sinh viên, bắt đầu dùng máy tính phổ biến, cuộc sống không thể thiếu máy tính. Theo khảo sát, 70% người gặp vấn đề trước hết nghĩ đến lên mạng tìm đáp án.'},
     {sp:0,zh:'电脑和互联网技术的发展使学生们的学习方式发生了很多变化，不过天天对着电脑看，眼睛实在受不了。',py:'Diànnǎo hé hùliánwǎng jìshù de fāzhǎn shǐ xuéshengmen de xuéxí fāngshì fāshēngle hěn duō biànhuà, búguò tiāntiān duìzhe diànnǎo kàn, yǎnjing shízài shòubuliǎo.',vn:'Sự phát triển công nghệ máy tính và Internet khiến cách học thay đổi nhiều, nhưng ngày nào cũng nhìn màn hình, mắt thật chịu không nổi.'},
     {sp:1,zh:'不仅是学习方式，而且连生活方式也发生了很大改变。现在越来越多的学生喜欢在网上写日记，他们说这样可以让朋友及时了解自己的生活。',py:'Bùjǐn shì xuéxí fāngshì, érqiě lián shēnghuó fāngshì yě fāshēngle hěn dà gǎibiàn. Xiànzài yuè lái yuè duō de xuésheng xǐhuan zài wǎngshang xiě rìjì, tāmen shuō zhèyàng kěyǐ ràng péngyou jíshí liǎojiě zìjǐ de shēnghuó.',vn:'Không chỉ cách học, mà cả lối sống cũng thay đổi lớn. Ngày càng nhiều sinh viên thích viết nhật ký trên mạng, họ nói như vậy bạn bè kịp thời biết cuộc sống của mình.'},
     {sp:0,zh:'这个办法不错，既能方便大家的交流，还能节约用纸，保护环境。但是如果别人都能看到我的日记的话，多不安全啊！',py:'Zhège bànfǎ búcuò, jì néng fāngbiàn dàjiā de jiāoliú, hái néng jiéyuē yòng zhǐ, bǎohù huánjìng. Dànshì rúguǒ biérén dōu néng kàndào wǒ de rìjì dehuà, duō bù ānquán a!',vn:'Cách này hay, vừa tiện giao lưu, vừa tiết kiệm giấy, bảo vệ môi trường. Nhưng nếu ai cũng xem được nhật ký của tôi thì không an toàn chút nào!'},
     {sp:1,zh:'放心吧，可以给网上的日记加密码，那样只有得到了允许，别人才能看到。',py:'Fàng xīn ba, kěyǐ gěi wǎngshang de rìjì jiā mìmǎ, nàyàng zhǐyǒu dédàole yǔnxǔ, biérén cái néng kàndào.',vn:'Yên tâm, có thể đặt mật khẩu cho nhật ký, như vậy chỉ khi được cho phép người khác mới xem được.'},
   ]},
  {scene:'课文3 · 王静和孙月在聊关于梦的情况',
   preQuiz:[{q:'王静晚饭吃得太咸，那天晚上梦见了什么？',opts:['在桥上走','到处找商店买矿泉水','跟警察抓坏人'],ans:1}],
   lines:[
     {sp:0,zh:'我昨天晚上做了一个特别奇怪的梦，梦到自己正在一座桥上走，走着走着，突然开过来一辆车，非常危险，接着又梦见我跳到车上，跟警察一起抓住了一个坏人。',py:'Wǒ zuótiān wǎnshang zuòle yí ge tèbié qíguài de mèng, mèngdào zìjǐ zhèngzài yí zuò qiáo shang zǒu, zǒuzhe zǒuzhe, tūrán kāi guòlai yí liàng chē, fēicháng wēixiǎn, jiēzhe yòu mèngjiàn wǒ tiàodào chē shang, gēn jǐngchá yìqǐ zhuāzhùle yí ge huàirén.',vn:'Tối qua tôi mơ rất kỳ lạ, mơ thấy đang đi trên cầu, đột nhiên một chiếc xe lao tới, rất nguy hiểm, ngay sau đó lại mơ tôi nhảy lên xe, cùng cảnh sát bắt một kẻ xấu.'},
     {sp:1,zh:'奇怪，你怎么总能记住自己做了什么梦？我好像从来没做过梦。',py:'Qíguài, nǐ zěnme zǒng néng jìzhu zìjǐ zuòle shénme mèng? Wǒ hǎoxiàng cónglái méi zuòguo mèng.',vn:'Lạ thật, sao bạn luôn nhớ mình mơ gì? Hình như tôi chưa từng mơ.'},
     {sp:0,zh:'每个人都会做梦，区别只是有多有少。有的人睡醒之后还记得梦里的事情，有的人却记不清楚了。你之所以觉得从来没做过梦，只不过是忘记了。',py:'Měi ge rén dōu huì zuò mèng, qūbié zhǐshì yǒu duō yǒu shǎo. Yǒude rén shuìxǐng zhīhòu hái jìde mèng li de shìqing, yǒude rén què jì bu qīngchu le. Nǐ zhī suǒyǐ juéde cónglái méi zuòguo mèng, zhǐ búguò shì wàngjì le.',vn:'Ai cũng mơ, khác nhau chỉ là nhiều hay ít. Có người tỉnh dậy còn nhớ, có người lại không nhớ rõ. Bạn sở dĩ thấy chưa từng mơ, chẳng qua là quên mất.'},
     {sp:1,zh:'你说的有道理，我一般都是一觉睡到天亮。很多人认为做梦是上天要告诉他们将来会发生的一些事情，可能上天不想让我知道吧。',py:'Nǐ shuō de yǒu dàolǐ, wǒ yìbān dōu shì yí jiào shuìdào tiānliàng. Hěn duō rén rènwéi zuò mèng shì shàngtiān yào gàosu tāmen jiānglái huì fāshēng de yìxiē shìqing, kěnéng shàngtiān bù xiǎng ràng wǒ zhīdào ba.',vn:'Bạn nói có lý, tôi thường ngủ một mạch đến sáng. Nhiều người cho rằng mơ là ông trời báo trước điều sắp xảy ra, có lẽ trời không muốn cho tôi biết.'},
     {sp:0,zh:'一般晚上睡觉时，身体感觉到什么，人就容易梦到什么内容。记得有一次，我晚饭吃得太咸，那天晚上就梦见自己到处找商店买矿泉水。',py:'Yìbān wǎnshang shuì jiào shí, shēntǐ gǎnjuédào shénme, rén jiù róngyì mèngdào shénme nèiróng. Jìde yǒu yí cì, wǒ wǎnfàn chī de tài xián, nà tiān wǎnshang jiù mèngjiàn zìjǐ dàochù zhǎo shāngdiàn mǎi kuàngquánshuǐ.',vn:'Thường khi ngủ, cơ thể cảm thấy gì, dễ mơ thấy nấy. Nhớ có lần bữa tối ăn quá mặn, tối đó mơ thấy đi khắp nơi tìm mua nước suối.'},
     {sp:1,zh:'很多人都试着对梦进行解释，有些人甚至专门写过这方面的书，可惜到现在仍然没有一个科学的说法。',py:'Hěn duō rén dōu shìzhe duì mèng jìnxíng jiěshì, yǒuxiē rén shènzhì zhuānmén xiěguo zhè fāngmiàn de shū, kěxī dào xiànzài réngrán méiyǒu yí ge kēxué de shuōfǎ.',vn:'Nhiều người thử giải thích giấc mơ, có người thậm chí viết sách chuyên về nó, tiếc là đến nay vẫn chưa có cách giải thích khoa học.'},
   ]},
  {scene:'课文4 · Điện thoại di động thay đổi cuộc sống',
   preQuiz:[{q:'khi lạc đường, điện thoại giúp gì?',opts:['gọi cảnh sát','dùng bản đồ tra địa chỉ để biết cách đến','chụp ảnh'],ans:1}],
   lines:[
     {sp:0,zh:'现在手机不但价格降低了，而且作用也越来越大，打电话、发短信已经成了人们普遍使用的联系方法。除此以外，你还可以用它来听音乐、看电影、阅读、玩儿游戏、付款购物等，这大大方便了人们的生活。',py:'Xiànzài shǒujī búdàn jiàgé jiàngdī le, érqiě zuòyòng yě yuè lái yuè dà, dǎ diànhuà, fā duǎnxìn yǐjīng chéngle rénmen pǔbiàn shǐyòng de liánxì fāngfǎ. Chú cǐ yǐwài, nǐ hái kěyǐ yòng tā lái tīng yīnyuè, kàn diànyǐng, yuèdú, wánr yóuxì, fù kuǎn gòuwù děng, zhè dàdà fāngbiànle rénmen de shēnghuó.',vn:'Điện thoại giờ không chỉ rẻ hơn mà tác dụng ngày càng lớn, gọi điện, nhắn tin đã thành cách liên lạc phổ biến. Ngoài ra còn nghe nhạc, xem phim, đọc, chơi game, thanh toán mua sắm, tiện lợi lớn cho cuộc sống.'},
     {sp:0,zh:'举一个例子，迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。',py:'Jǔ yí ge lìzi, mí lù shí, zhǐyào yòng shǒujī dìtú chá yíxià dìzhǐ, mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn.',vn:'Nêu một ví dụ, khi lạc đường, chỉ cần dùng bản đồ điện thoại tra địa chỉ, lập tức biết cách đến địa điểm đó.'},
     {sp:0,zh:'现在的手机更像是一部可以拿在手中的电脑，现代人的生活已经越来越离不开手机了。',py:'Xiànzài de shǒujī gèng xiàng shì yí bù kěyǐ ná zài shǒu zhōng de diànnǎo, xiàndài rén de shēnghuó yǐjīng yuè lái yuè lí bu kāi shǒujī le.',vn:'Điện thoại giờ giống một chiếc máy tính cầm tay, cuộc sống người hiện đại ngày càng không thể rời điện thoại.'},
   ]},
  {scene:'课文5 · "Làng toàn cầu"',
   preQuiz:[{q:'vì sao người ta gọi Trái đất là "地球村"?',opts:['vì Trái đất rất nhỏ','vì khoa học kỹ thuật khiến thế giới ngày càng "nhỏ"','vì mọi người sống ở làng'],ans:1}],
   lines:[
     {sp:0,zh:'21世纪，我们的生活发生了巨大变化。几千公里以外的国家，以前坐船需要几个月，现在乘坐飞机不过十几个小时。',py:'Èrshíyī shìjì, wǒmen de shēnghuó fāshēngle jùdà biànhuà. Jǐqiān gōnglǐ yǐwài de guójiā, yǐqián zuò chuán xūyào jǐ ge yuè, xiànzài chéngzuò fēijī búguò shí jǐ ge xiǎoshí.',vn:'Thế kỷ 21, cuộc sống thay đổi to lớn. Nước cách vài nghìn km, trước đi thuyền mất mấy tháng, nay đi máy bay chỉ hơn chục tiếng.'},
     {sp:0,zh:'原来寄信需要好几天，现在连邮局都不用去，只要在家里上网发个电子邮件，用不了一分钟，远处的朋友就能收到，比写信封用的时间都短。以前外地的新闻要几天后才能知道，现在只要打开网站，任何信息都可以在第一时间获得。',py:'Yuánlái jì xìn xūyào hǎo jǐ tiān, xiànzài lián yóujú dōu búyòng qù, zhǐyào zài jiāli shàng wǎng fā ge diànzǐ yóujiàn, yòngbuliǎo yì fēnzhōng, yuǎnchù de péngyou jiù néng shōudào, bǐ xiě xìnfēng yòng de shíjiān dōu duǎn. Yǐqián wàidì de xīnwén yào jǐ tiān hòu cái néng zhīdào, xiànzài zhǐyào dǎkāi wǎngzhàn, rènhé xìnxī dōu kěyǐ zài dì-yī shíjiān huòdé.',vn:'Trước gửi thư mất mấy ngày, nay không cần đến bưu điện, chỉ cần ở nhà gửi email, chưa đến một phút bạn ở xa nhận được, ngắn hơn cả viết phong bì. Trước tin nơi khác mấy ngày sau mới biết, nay mở trang web, mọi thông tin có ngay.'},
     {sp:0,zh:'现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作"地球村"。',py:'Xiàndài kēxué jìshù de fāzhǎn ràng shìjiè biànde yuè lái yuè xiǎo, suǒyǐ xiànzài rénmen dōu bǎ dìqiú jiàozuò "dìqiúcūn".',vn:'Sự phát triển khoa học kỹ thuật hiện đại khiến thế giới ngày càng nhỏ, nên người ta gọi Trái đất là "làng toàn cầu".'},
   ]},
];

var matchData = [
  {left:'起飞和',right:'起飞和降落'},
  {left:'卖得',right:'卖得非常火'},
  {left:'几秒钟',right:'几秒钟就解决了'},
  {left:'离不开',right:'离不开电脑'},
  {left:'加',right:'加密码'},
  {left:'得到',right:'得到允许'},
  {left:'抓住',right:'抓住坏人'},
  {left:'举',right:'举一个例子'},
  {left:'查',right:'查一下地址'},
  {left:'把地球',right:'把地球叫作"地球村"'},
];

var fillData = [
  {pre:'上次女儿问我飞机是怎么起飞和',blank:'',post:'的。',hint:'jiàngluò',ans:'降落'},
  {pre:'有一本书叫《新十万个为什么》，现在卖得非常',blank:'',post:'。',hint:'huǒ',ans:'火'},
  {pre:'',blank:'',post:'的名字我没记住。',hint:'zuòzhě',ans:'作者'},
  {pre:'不过她这么小，我不知道她',blank:'',post:'能读懂。',hint:'shìfǒu',ans:'是否'},
  {pre:'几',blank:'',post:'钟就把问题解决了。',hint:'miǎo',ans:'秒'},
  {pre:'不仅是学习',blank:'',post:'，而且连生活方式也发生了很大改变。',hint:'fāngshì',ans:'方式'},
  {pre:'天天对着电脑看，眼睛实在',blank:'',post:'。',hint:'shòubuliǎo',ans:'受不了'},
  {pre:'可以给网上的日记加',blank:'',post:'。',hint:'mìmǎ',ans:'密码'},
  {pre:'只有得到了',blank:'',post:'，别人才能看到。',hint:'yǔnxǔ',ans:'允许'},
  {pre:'突然开过来一辆车，非常',blank:'',post:'。',hint:'wēixiǎn',ans:'危险'},
  {pre:'',blank:'',post:'又梦见我跳到车上，跟警察一起抓住了一个坏人。',hint:'jiēzhe',ans:'接着'},
  {pre:'我晚饭吃得太',blank:'',post:'，那天晚上就梦见自己到处找商店买矿泉水。',hint:'xián',ans:'咸'},
  {pre:'',blank:'',post:'一个例子，迷路时，只要用手机地图查一下地址就行。',hint:'jǔ',ans:'举'},
  {pre:'现在连',blank:'',post:'都不用去，只要在家里上网发个电子邮件。',hint:'yóujú',ans:'邮局'},
  {pre:'只要打开网站，任何',blank:'',post:'都可以在第一时间获得。',hint:'xìnxī',ans:'信息'},
];

var sortData = [
  {words:['孩子','眼中','的','世界','是','美丽','和','奇特','的'],ans:'孩子眼中的世界是美丽和奇特的',audio:'/audio/hsk4-bai-18/sort-1.mp3'},
  {words:['我','不','知道','她','是否','能','读懂'],ans:'我不知道她是否能读懂',audio:'/audio/hsk4-bai-18/sort-2.mp3'},
  {words:['他们','的','生活','已经','离不开','电脑'],ans:'他们的生活已经离不开电脑',audio:'/audio/hsk4-bai-18/sort-3.mp3'},
  {words:['天天','对着','电脑','看','，','眼睛','实在','受不了'],ans:'天天对着电脑看，眼睛实在受不了',audio:'/audio/hsk4-bai-18/sort-4.mp3'},
  {words:['只有','得到','了','允许','，','别人','才','能','看到'],ans:'只有得到了允许，别人才能看到',audio:'/audio/hsk4-bai-18/sort-5.mp3'},
  {words:['每个','人','都','会','做梦','，','区别','只是','有多','有少'],ans:'每个人都会做梦，区别只是有多有少',audio:'/audio/hsk4-bai-18/sort-6.mp3'},
  {words:['现代','人','的','生活','已经','越来越','离不开','手机','了'],ans:'现代人的生活已经越来越离不开手机了',audio:'/audio/hsk4-bai-18/sort-7.mp3'},
  {words:['现在','人们','都','把','地球','叫作','"地球村"'],ans:'现在人们都把地球叫作"地球村"',audio:'/audio/hsk4-bai-18/sort-8.mp3'},
];

var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'北京有一____山，叫香山，非常有名。每到秋天，满山都是红叶，风景特别漂亮。',
   opts:['收','座','安全','危险'],ans:1,
   exp:'座 (lượng từ cho núi) — 一座山. Câu có 香山 (Bài 17), 满 (Bài 11), 风景 (Bài 6). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'有些人直接拿自己的生日做银行卡或信用卡的密码。其实，这样做很不____。',
   opts:['收','座','安全','降落'],ans:2,
   exp:'安全 (an toàn) — 很不安全. Câu có 直接 (Bài 12), 拿……做 (Bài 16), 密码 (từ mới). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'无论对自己还是对其他人来说，喝完酒开车都是极其____的。',
   opts:['收','安全','危险','降落'],ans:2,
   exp:'危险 (nguy hiểm) — 极其危险. Câu có 无论……都 (Bài 11), 对……来说 (Bài 5). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'说出去的话很难____回。因此，生气时不要随便说话，这时候说的一般都是气话，会给别人留下不好的印象，甚至会伤害别人。',
   opts:['收','座','安全','降落'],ans:0,
   exp:'收 (thu) — 收回 = thu lại. Câu có 因此 (Bài 8), 随便 (Bài 7), 印象 (Bài 6), 伤害 (Bài 9). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'各位乘客，大家好，感谢大家乘坐此次航班，我们的飞机将于20分钟后____在北京首都国际机场。',
   opts:['收','座','危险','降落'],ans:3,
   exp:'降落 (hạ cánh) — 降落在机场. Câu có 乘坐 (Bài 14), 航班 (Bài 4). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：饺子很香，不过鸡蛋汤稍微有点儿____。B：那我下次少放点儿盐。',
   opts:['地点','地址','技术','咸'],ans:3,
   exp:'咸 (mặn) — 有点儿咸. Câu có 稍微 (Bài 13), 盐 (Bài 12). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：对面那条街上新开了一家理发店，听说那儿的理发师____还不错。B：是吗？正好我也该理发了，那明天下班后我去试试。',
   opts:['地点','地址','技术','迷路'],ans:2,
   exp:'技术 (tay nghề) — 理发师技术不错. Câu có 理发 (Bài 7), 正好 (Bài 4). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：我怎么觉得咱们好像____了？B：没有，我以前来过这儿，前面路口左转就到了。',
   opts:['地点','地址','迷路','咸'],ans:2,
   exp:'迷路 (lạc đường) — 好像迷路了. Câu có 好像 (Bài 6), 路口 (Bài 2). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：能把照片发到我邮箱里吗？B：没问题，把你的邮箱____告诉我，我整理好了就发给你。',
   opts:['地点','地址','技术','迷路'],ans:1,
   exp:'地址 (địa chỉ) — 邮箱地址. Câu có 整理 (Bài 15), câu chữ 把. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：今天下午我们还是两点在东门集合吗？B：时间不变，____改在西门了。快去整理一下东西吧，我们马上出发。',
   opts:['地点','地址','技术','咸'],ans:0,
   exp:'地点 (địa điểm) — 地点改在西门. Câu có 集合 (Bài 6), 出发 (Bài 2). Các từ còn lại không phù hợp nghĩa.'},
];

var speakingData = {
  intro:'Hãy dùng từ vựng và ngữ pháp của Bài 18 (kết hợp ngữ pháp các bài trước) để nói về khoa học công nghệ và cuộc sống.',
  questions:[
    {q_zh:'你常用电脑做什么？你平均每天上网的时间大概是多长？',q_vn:'Bạn thường dùng máy tính làm gì? Trung bình mỗi ngày bạn lên mạng bao lâu?',
     hint:'除此以外……；大概……左右',
     sample:'我常用电脑查信息、写作业。除此以外，我还用它看电影。我每天上网的时间大概三个小时左右。',sample_vn:'Tôi thường dùng máy tính tra thông tin, làm bài tập. Ngoài ra còn xem phim. Mỗi ngày lên mạng khoảng ba tiếng.',
     note:'除此以外/信息 (bài mới) + 大概 (Bài 13) + 左右 (Bài 15).'},
    {q_zh:'互联网对你的生活有哪些影响？',q_vn:'Internet có ảnh hưởng gì đến cuộc sống của bạn?',
     hint:'不仅……，而且连……也……；离不开',
     sample:'互联网不仅改变了我的学习方式，而且连生活方式也改变了。现在我付款、购物都用手机，已经离不开它了。',sample_vn:'Internet không chỉ thay đổi cách học của tôi mà cả lối sống cũng thay đổi. Giờ thanh toán, mua sắm đều dùng điện thoại, không thể thiếu nó.',
     note:'方式/付款 (bài mới) + 不仅……而且 (Bài 6) + 连……也 (Bài 11) + bổ ngữ khả năng 离不开.'},
    {q_zh:'你会因为上网而减少和朋友正常交流的时间吗？',q_vn:'Bạn có vì lên mạng mà giảm thời gian giao lưu bình thường với bạn bè không?',
     hint:'是否……；受不了……',
     sample:'我不知道自己是否会这样。有时候朋友们聚会时都在看手机，我真受不了这种情况，所以我会提醒大家少看手机。',sample_vn:'Tôi không biết mình có vậy không. Có lúc bạn bè họp mặt đều nhìn điện thoại, tôi thật chịu không nổi tình huống đó, nên tôi nhắc mọi người bớt nhìn điện thoại.',
     note:'是否/受不了 (bài mới) + 聚会 (Bài 8) + 提醒 (Bài 4).'},
    {q_zh:'请举一个例子，说说科技的发展给我们的生活带来了什么变化。',q_vn:'Hãy nêu ví dụ về thay đổi mà khoa học công nghệ mang lại cho cuộc sống.',
     hint:'举一个例子；原来……，现在……',
     sample:'举一个例子，原来寄信需要好几天，现在发个电子邮件用不了一分钟朋友就能收到，连邮局都不用去了。',sample_vn:'Nêu ví dụ, trước gửi thư mất mấy ngày, nay gửi email chưa đến một phút bạn đã nhận được, đến bưu điện cũng không cần.',
     note:'举/邮局/收 (bài mới) + 原来 (Bài 4) + 连……都 (Bài 11) + 用不了 (Bài 5).'},
    {q_zh:'你做过什么奇怪的梦？你觉得梦是否能告诉我们将来的事情？',q_vn:'Bạn từng mơ giấc mơ kỳ lạ nào? Bạn nghĩ giấc mơ có báo trước tương lai không?',
     hint:'梦到……，接着又……；仍然没有……',
     sample:'我梦到自己在一座桥上走，接着又梦见掉进了水里。我觉得梦不能告诉我们将来的事，到现在科学家仍然没有一个科学的说法。',sample_vn:'Tôi mơ đang đi trên cầu, ngay sau đó lại mơ rơi xuống nước. Tôi nghĩ mơ không báo trước tương lai, đến nay các nhà khoa học vẫn chưa có lời giải thích khoa học.',
     note:'接着/座/桥 (bài mới) + 梦 (Bài 17) + 仍然 (Bài 17) + 掉 (Bài 5).'},
  ]
};

var translateData = [
  {vi:'Lần trước con gái hỏi tôi máy bay cất cánh và hạ cánh thế nào, thật không biết nên trả lời sao.',zh:'上次女儿问我飞机是怎么起飞和降落的，真不知道该怎么回答她。',py:'Shàng cì nǚ\'ér wèn wǒ fēijī shì zěnme qǐfēi hé jiàngluò de, zhēn bù zhīdào gāi zěnme huídá tā.'},
  {vi:'Nhưng nó còn nhỏ thế, tôi không biết nó có đọc hiểu được không.',zh:'不过她这么小，我不知道她是否能读懂。',py:'Búguò tā zhème xiǎo, wǒ bù zhīdào tā shìfǒu néng dúdǒng.'},
  {vi:'Sinh viên bây giờ gặp vấn đề không hiểu, có thể tra ngay trên mạng, vài giây là giải quyết xong.',zh:'现在的大学生一遇到不明白的问题，可以马上在网上查找答案，几秒钟就把问题解决了。',py:'Xiànzài de dàxuéshēng yí yùdào bù míngbai de wèntí, kěyǐ mǎshàng zài wǎngshang cházhǎo dá\'àn, jǐ miǎo zhōng jiù bǎ wèntí jiějué le.'},
  {vi:'Nhưng ngày nào cũng nhìn màn hình máy tính, mắt thật sự chịu không nổi.',zh:'不过天天对着电脑看，眼睛实在受不了。',py:'Búguò tiāntiān duìzhe diànnǎo kàn, yǎnjing shízài shòubuliǎo.'},
  {vi:'Có thể đặt mật khẩu cho nhật ký trên mạng, như vậy chỉ khi được cho phép người khác mới xem được.',zh:'可以给网上的日记加密码，那样只有得到了允许，别人才能看到。',py:'Kěyǐ gěi wǎngshang de rìjì jiā mìmǎ, nàyàng zhǐyǒu dédàole yǔnxǔ, biérén cái néng kàndào.'},
  {vi:'Ngay sau đó lại mơ thấy tôi nhảy lên xe, cùng cảnh sát bắt một kẻ xấu.',zh:'接着又梦见我跳到车上，跟警察一起抓住了一个坏人。',py:'Jiēzhe yòu mèngjiàn wǒ tiàodào chē shang, gēn jǐngchá yìqǐ zhuāzhùle yí ge huàirén.'},
  {vi:'Nêu một ví dụ, khi lạc đường, chỉ cần dùng bản đồ điện thoại tra địa chỉ, lập tức biết cách đến địa điểm đó.',zh:'举一个例子，迷路时，只要用手机地图查一下地址，马上就能知道怎么去那个地点。',py:'Jǔ yí ge lìzi, mí lù shí, zhǐyào yòng shǒujī dìtú chá yíxià dìzhǐ, mǎshàng jiù néng zhīdào zěnme qù nàge dìdiǎn.'},
  {vi:'Sự phát triển khoa học kỹ thuật hiện đại khiến thế giới ngày càng nhỏ, nên người ta gọi Trái đất là "làng toàn cầu".',zh:'现代科学技术的发展让世界变得越来越小，所以现在人们都把地球叫作"地球村"。',py:'Xiàndài kēxué jìshù de fāzhǎn ràng shìjiè biànde yuè lái yuè xiǎo, suǒyǐ xiànzài rénmen dōu bǎ dìqiú jiàozuò "dìqiúcūn".'},
];
var translateDataRev = [
  {vi:'Có một cuốn sách tên "Mười vạn câu hỏi vì sao mới", hiện bán rất chạy.',zh:'有一本书叫《新十万个为什么》，现在卖得非常火。',py:'Yǒu yì běn shū jiào "Xīn Shíwàn Ge Wèi Shénme", xiànzài mài de fēicháng huǒ.'},
  {vi:'Theo khảo sát, 70% người gặp vấn đề trước hết nghĩ đến lên mạng tìm đáp án.',zh:'据调查，70%的人遇到问题时，首先想到的就是上网找答案。',py:'Jù diàochá, bǎifēnzhī qīshí de rén yùdào wèntí shí, shǒuxiān xiǎngdào de jiù shì shàng wǎng zhǎo dá\'àn.'},
  {vi:'Không chỉ phương thức học tập, mà cả lối sống cũng thay đổi rất lớn.',zh:'不仅是学习方式，而且连生活方式也发生了很大改变。',py:'Bùjǐn shì xuéxí fāngshì, érqiě lián shēnghuó fāngshì yě fāshēngle hěn dà gǎibiàn.'},
  {vi:'Nhưng nếu ai cũng xem được nhật ký của tôi, thì không an toàn chút nào!',zh:'但是如果别人都能看到我的日记的话，多不安全啊！',py:'Dànshì rúguǒ biérén dōu néng kàndào wǒ de rìjì dehuà, duō bù ānquán a!'},
  {vi:'Ai cũng mơ, khác nhau chỉ là nhiều hay ít.',zh:'每个人都会做梦，区别只是有多有少。',py:'Měi ge rén dōu huì zuò mèng, qūbié zhǐshì yǒu duō yǒu shǎo.'},
  {vi:'Nhớ có lần bữa tối tôi ăn quá mặn, tối đó mơ thấy mình đi khắp nơi tìm cửa hàng mua nước suối.',zh:'记得有一次，我晚饭吃得太咸，那天晚上就梦见自己到处找商店买矿泉水。',py:'Jìde yǒu yí cì, wǒ wǎnfàn chī de tài xián, nà tiān wǎnshang jiù mèngjiàn zìjǐ dàochù zhǎo shāngdiàn mǎi kuàngquánshuǐ.'},
  {vi:'Ngoài ra, bạn còn có thể dùng nó để nghe nhạc, xem phim, đọc sách, chơi game, thanh toán mua sắm.',zh:'除此以外，你还可以用它来听音乐、看电影、阅读、玩儿游戏、付款购物等。',py:'Chú cǐ yǐwài, nǐ hái kěyǐ yòng tā lái tīng yīnyuè, kàn diànyǐng, yuèdú, wánr yóuxì, fù kuǎn gòuwù děng.'},
  {vi:'Nay đến bưu điện cũng không cần, chỉ cần ở nhà lên mạng gửi email, chưa đến một phút bạn ở xa đã nhận được.',zh:'现在连邮局都不用去，只要在家里上网发个电子邮件，用不了一分钟，远处的朋友就能收到。',py:'Xiànzài lián yóujú dōu búyòng qù, zhǐyào zài jiāli shàng wǎng fā ge diànzǐ yóujiàn, yòngbuliǎo yì fēnzhōng, yuǎnchù de péngyou jiù néng shōudào.'},
];

var listenData = {
  type: 'workbook',
  audioParts: [
    { src: '/audio/hsk4-bai-18/listen-1.mp3', from: 1, to: 5 },
    { src: '/audio/hsk4-bai-18/listen-2.mp3', from: 6, to: 12 },
    { src: '/audio/hsk4-bai-18/listen-3.mp3', from: 13, to: 22 }
  ],
  dictation: [
    {num:1, stmt:'地址填错地方了。', judge:true, lines:[
      {pre:'先生，', blank:'您把收件人和寄件人的地址填反了', post:'，这儿应该填您自己的地址。我再给您一张单子，您重新填一下吧。',
       py:'Xiānsheng, nín bǎ shōujiànrén hé jìjiànrén de dìzhǐ tiánfǎn le, zhèr yīnggāi tián nín zìjǐ de dìzhǐ. Wǒ zài gěi nín yì zhāng dānzi, nín chóngxīn tián yíxià ba.',
       vn:'Thưa ông, ông điền ngược địa chỉ người nhận và người gửi rồi, chỗ này phải điền địa chỉ của chính ông. Tôi đưa ông tờ khác, ông điền lại nhé.'}]},
    {num:2, stmt:'他们要坐地铁。', judge:false, lines:[
      {pre:'姐，咱们弄错方向了，', blank:'去西边的公共汽车应该过马路去那边坐', post:'。正好前边有个天桥，我们从那儿过马路吧。',
       py:'Jiě, zánmen nòngcuò fāngxiàng le, qù xībian de gōnggòng qìchē yīnggāi guò mǎlù qù nàbiān zuò. Zhènghǎo qiánbian yǒu ge tiānqiáo, wǒmen cóng nàr guò mǎlù ba.',
       vn:'Chị ơi, mình nhầm hướng rồi, xe buýt đi phía tây phải sang bên kia đường mới bắt được. Vừa hay phía trước có cầu vượt, mình qua đường ở đó nhé.'}]},
    {num:3, stmt:'明天中午有大雪。', judge:false, lines:[
      {pre:'由于冷空气南下，', blank:'我省明天将迎来大风降温天气', post:'，有些地方还会有小到中雨，交通会受到一定影响，听众朋友们出行时一定要注意安全。',
       py:'Yóuyú lěng kōngqì nán xià, wǒ shěng míngtiān jiāng yínglái dàfēng jiàngwēn tiānqì, yǒuxiē dìfang hái huì yǒu xiǎo dào zhōng yǔ, jiāotōng huì shòudào yídìng yǐngxiǎng, tīngzhòng péngyoumen chūxíng shí yídìng yào zhùyì ānquán.',
       vn:'Do không khí lạnh tràn xuống phía nam, ngày mai tỉnh ta sẽ có gió mạnh, nhiệt độ giảm, một số nơi còn có mưa nhỏ đến vừa, giao thông sẽ bị ảnh hưởng, quý thính giả ra ngoài nhất định chú ý an toàn.'}]},
    {num:4, stmt:'遇到危险时要冷静。', judge:true, lines:[
      {pre:'遇到危险时，哭不能解决任何问题，你应该想办法向别人求助。但在这之前，', blank:'你必须先让自己冷静下来', post:'。',
       py:'Yùdào wēixiǎn shí, kū bù néng jiějué rènhé wèntí, nǐ yīnggāi xiǎng bànfǎ xiàng biérén qiúzhù. Dàn zài zhè zhīqián, nǐ bìxū xiān ràng zìjǐ lěngjìng xiàlai.',
       vn:'Khi gặp nguy hiểm, khóc không giải quyết được gì, bạn nên tìm cách nhờ người khác giúp. Nhưng trước đó, bạn phải bình tĩnh lại đã.'}]},
    {num:5, stmt:'黄河是中国的"母亲河"。', judge:true, lines:[
      {pre:'黄河是中国第二大河，它有5464公里长，', blank:'人们把它叫作"母亲河"', post:'。从地图上看，它就像一个大大的"几"字。',
       py:'Huáng Hé shì Zhōngguó dì-èr dà hé, tā yǒu wǔqiān sìbǎi liùshísì gōnglǐ cháng, rénmen bǎ tā jiàozuò "mǔqīnhé". Cóng dìtú shang kàn, tā jiù xiàng yí ge dàdà de "jǐ" zì.',
       vn:'Hoàng Hà là con sông lớn thứ hai Trung Quốc, dài 5464 km, người ta gọi nó là "sông Mẹ". Nhìn trên bản đồ, nó giống một chữ "几" thật to.'}]}
  ],
  mc: [
    {num:6, options:['没有邮件','电脑坏了','电话有问题','密码错了'], ans:3, q:'男的为什么感到奇怪？',
     lines:[
       {speaker:'女', pre:'你叔叔刚打电话来说', blank:'给你发了个电子邮件', post:'，让你查收。', py:'Nǐ shūshu gāng dǎ diànhuà lái shuō gěi nǐ fāle ge diànzǐ yóujiàn, ràng nǐ cháshōu.', vn:'Chú con vừa gọi điện nói đã gửi email cho con, bảo con kiểm tra.'},
       {speaker:'男', pre:'我正在上邮箱，可一直进不去，真奇怪，', blank:'总说我的密码有错', post:'，没错啊。', py:'Wǒ zhèngzài shàng yóuxiāng, kě yìzhí jìnbuqù, zhēn qíguài, zǒng shuō wǒ de mìmǎ yǒu cuò, méi cuò a.', vn:'Con đang vào hộp thư mà mãi không vào được, lạ thật, cứ báo mật khẩu sai, đâu có sai.'}
     ],
     explain:'问：男的为什么感到奇怪？ "总说我的密码有错" → D 密码错了.'},
    {num:7, options:['在超市','没带钱','在找人','迷路了'], ans:2, q:'关于男的，下列哪个正确？',
     lines:[
       {speaker:'男', pre:'喂，你在哪儿呢？我已经到公园了，', blank:'怎么看不到你啊', post:'？', py:'Wèi, nǐ zài nǎr ne? Wǒ yǐjīng dào gōngyuán le, zěnme kànbudào nǐ a?', vn:'Alô, em ở đâu? Anh đến công viên rồi, sao không thấy em?'},
       {speaker:'女', pre:'我在公园旁边的超市呢，正好我买了一箱矿泉水，', blank:'你来接我一下吧', post:'。', py:'Wǒ zài gōngyuán pángbiān de chāoshì ne, zhènghǎo wǒ mǎile yì xiāng kuàngquánshuǐ, nǐ lái jiē wǒ yíxià ba.', vn:'Em ở siêu thị cạnh công viên, vừa hay mua một thùng nước khoáng, anh đến đón em nhé.'}
     ],
     explain:'问：关于男的，下列哪个正确？ "怎么看不到你啊" → anh ấy đang tìm người, đáp án C 在找人. A sai: người ở siêu thị là người nữ.'},
    {num:8, options:['寄信','写地址','找信封','发邮件'], ans:2, q:'男的让女的做什么？',
     lines:[
       {speaker:'男', pre:'', blank:'你那儿有大一点儿的信封吗', post:'？这个太小了。', py:'Nǐ nàr yǒu dà yìdiǎnr de xìnfēng ma? Zhège tài xiǎo le.', vn:'Chỗ cô có phong bì to hơn không? Cái này nhỏ quá.'},
       {speaker:'女', pre:'稍等一下，', blank:'我发完这封电子邮件就给你找', post:'。', py:'Shāo děng yíxià, wǒ fāwán zhè fēng diànzǐ yóujiàn jiù gěi nǐ zhǎo.', vn:'Đợi chút, tôi gửi xong email này sẽ tìm cho anh.'}
     ],
     explain:'问：男的让女的做什么？ "有大一点儿的信封吗…就给你找" → C 找信封. D 发邮件 là việc cô ấy đang làm.'},
    {num:9, options:['做菜','咖啡','面条','葡萄酒'], ans:0, q:'他们在谈什么？',
     lines:[
       {speaker:'男', pre:'你尝一下，', blank:'这个菜味道怎么样', post:'？', py:'Nǐ cháng yíxià, zhège cài wèidào zěnmeyàng?', vn:'Em nếm thử, món này vị thế nào?'},
       {speaker:'女', pre:'我尝了，稍微有点儿咸，', blank:'是不是盐放多了', post:'？', py:'Wǒ cháng le, shāowēi yǒudiǎnr xián, shì bu shì yán fàng duō le?', vn:'Em nếm rồi, hơi mặn một chút, có phải cho nhiều muối quá không?'}
     ],
     explain:'问：他们在谈什么？ "这个菜味道…盐放多了" → A 做菜.'},
    {num:10, options:['非常困','发烧了','没起床','受欢迎'], ans:0, q:'女的怎么了？',
     lines:[
       {speaker:'男', pre:'你困了就先去睡一会儿吧，', blank:'等比赛开始了，我再叫你起来接着看', post:'。', py:'Nǐ kùn le jiù xiān qù shuì yíhuìr ba, děng bǐsài kāishǐ le, wǒ zài jiào nǐ qǐlai jiēzhe kàn.', vn:'Em buồn ngủ thì đi ngủ một lát trước, đợi trận đấu bắt đầu anh gọi em dậy xem tiếp.'},
       {speaker:'女', pre:'好的，', blank:'我实在受不了了', post:'，先去躺会儿。', py:'Hǎo de, wǒ shízài shòubuliǎo le, xiān qù tǎng huìr.', vn:'Được, em thật sự chịu không nổi nữa, đi nằm một lát.'}
     ],
     explain:'问：女的怎么了？ "你困了…我实在受不了了" → A 非常困.'},
    {num:11, options:['高兴','无聊','担心','轻松'], ans:2, q:'男的现在心情怎么样？',
     lines:[
       {speaker:'女', pre:'做得怎么样了？', blank:'今天能解决这个问题吗', post:'？', py:'Zuò de zěnmeyàng le? Jīntiān néng jiějué zhège wèntí ma?', vn:'Làm đến đâu rồi? Hôm nay giải quyết được vấn đề này không?'},
       {speaker:'男', pre:'情况比我们想的复杂得多，', blank:'还有一个技术问题不知道怎么办', post:'，今天恐怕完不了了。', py:'Qíngkuàng bǐ wǒmen xiǎng de fùzá de duō, hái yǒu yí ge jìshù wèntí bù zhīdào zěnme bàn, jīntiān kǒngpà wánbuliǎo le.', vn:'Tình hình phức tạp hơn chúng ta nghĩ nhiều, còn một vấn đề kỹ thuật không biết xử lý sao, hôm nay e là không xong được.'}
     ],
     explain:'问：男的现在心情怎么样？ "不知道怎么办…恐怕完不了了" → lo lắng, đáp án C 担心.'},
    {num:12, options:['借钱','买饼干','找钥匙','问路'], ans:0, q:'男的在做什么？',
     lines:[
       {speaker:'男', pre:'我想买这本词典，可出门忘带钱包了，', blank:'你能不能先借我一点儿', post:'？一会儿回去还你。', py:'Wǒ xiǎng mǎi zhè běn cídiǎn, kě chūmén wàng dài qiánbāo le, nǐ néng bu néng xiān jiè wǒ yìdiǎnr? Yíhuìr huíqu huán nǐ.', vn:'Tôi muốn mua cuốn từ điển này, nhưng ra ngoài quên mang ví, cô cho tôi vay một ít được không? Lát về trả.'},
       {speaker:'女', pre:'没问题。高老师，', blank:'您要多少', post:'？', py:'Méi wèntí. Gāo lǎoshī, nín yào duōshao?', vn:'Không vấn đề. Thầy Cao, thầy cần bao nhiêu?'}
     ],
     explain:'问：男的在做什么？ "你能不能先借我一点儿" → A 借钱.'},
    {num:13, options:['大学毕业了','找到工作了','考上硕士了','做教育工作'], ans:2, q:'女的为什么说男的很厉害？',
     lines:[
       {speaker:'女', pre:'大学毕业后就没联系了，', blank:'你现在在哪儿工作呢', post:'？', py:'Dàxué bìyè hòu jiù méi liánxì le, nǐ xiànzài zài nǎr gōngzuò ne?', vn:'Tốt nghiệp đại học xong là mất liên lạc, giờ cậu làm ở đâu?'},
       {speaker:'男', pre:'毕业后在老家工作了一年，', blank:'接着又考上了北京大学', post:'，现在在读研究生。', py:'Bìyè hòu zài lǎojiā gōngzuòle yì nián, jiēzhe yòu kǎoshàngle Běijīng Dàxué, xiànzài zài dú yánjiūshēng.', vn:'Tốt nghiệp xong làm ở quê một năm, rồi thi đỗ Đại học Bắc Kinh, giờ đang học cao học.'},
       {speaker:'女', pre:'真厉害！是硕士了。', blank:'你读什么专业？几年', post:'？', py:'Zhēn lìhai! Shì shuòshì le. Nǐ dú shénme zhuānyè? Jǐ nián?', vn:'Giỏi thật! Thạc sĩ rồi. Cậu học ngành gì? Mấy năm?'},
       {speaker:'男', pre:'', blank:'教育学，三年', post:'。', py:'Jiàoyùxué, sān nián.', vn:'Giáo dục học, ba năm.'}
     ],
     explain:'问：女的为什么说男的很厉害？ "考上了北京大学…真厉害！是硕士了" → C 考上硕士了. D sai: học giáo dục học, không phải làm nghề giáo dục.'},
    {num:14, options:['火车站','机场','公园','图书馆'], ans:3, q:'他们明天要去哪儿？',
     lines:[
       {speaker:'男', pre:'', blank:'明天见面的地点改在东门了', post:'？', py:'Míngtiān jiànmiàn de dìdiǎn gǎi zài dōngmén le?', vn:'Địa điểm gặp mặt ngày mai đổi sang cổng đông rồi à?'},
       {speaker:'女', pre:'是，', blank:'从那边去国家图书馆方便一些', post:'。', py:'Shì, cóng nàbiān qù Guójiā Túshūguǎn fāngbiàn yìxiē.', vn:'Đúng, từ bên đó đi Thư viện Quốc gia tiện hơn.'},
       {speaker:'男', pre:'那我通知班里的同学。', blank:'时间变了吗', post:'？', py:'Nà wǒ tōngzhī bān li de tóngxué. Shíjiān biàn le ma?', vn:'Vậy tôi thông báo các bạn trong lớp. Thời gian có đổi không?'},
       {speaker:'女', pre:'没变，', blank:'还是上午八点', post:'。', py:'Méi biàn, háishi shàngwǔ bā diǎn.', vn:'Không đổi, vẫn tám giờ sáng.'}
     ],
     explain:'问：他们明天要去哪儿？ "去国家图书馆" → D 图书馆. 东门 chỉ là chỗ tập trung.'},
    {num:15, options:['网站有问题','网址错了','上网速度不快','女的的电脑坏了'], ans:3, q:'根据对话，可以知道什么？',
     lines:[
       {speaker:'女', pre:'这个网站地址是不是错的？', blank:'试了好几遍都打不开', post:'。', py:'Zhège wǎngzhàn dìzhǐ shì bu shì cuò de? Shìle hǎo jǐ biàn dōu dǎbukāi.', vn:'Địa chỉ trang web này có phải sai không? Thử mấy lần đều không mở được.'},
       {speaker:'男', pre:'你把网址发过来，', blank:'我试一下', post:'。', py:'Nǐ bǎ wǎngzhǐ fā guòlai, wǒ shì yíxià.', vn:'Cậu gửi địa chỉ qua, tôi thử xem.'},
       {speaker:'女', pre:'怎么样？', blank:'你那儿能打开吗', post:'？', py:'Zěnmeyàng? Nǐ nàr néng dǎkāi ma?', vn:'Sao rồi? Bên cậu mở được không?'},
       {speaker:'男', pre:'可以，速度挺快的，', blank:'是不是你电脑有问题', post:'？', py:'Kěyǐ, sùdù tǐng kuài de, shì bu shì nǐ diànnǎo yǒu wèntí?', vn:'Được, tốc độ khá nhanh, có phải máy tính của cậu có vấn đề không?'}
     ],
     explain:'问：根据对话，可以知道什么？ Máy người nam mở được, "是不是你电脑有问题" → D 女的的电脑坏了. A, B, C đều bị loại vì trang mở bình thường, tốc độ nhanh.'},
    {num:16, options:['是新手','开车慢','想停车','技术好'], ans:0, q:'通过对话，可以知道男的怎么样？',
     lines:[
       {speaker:'女', pre:'危险！', blank:'你开得太快了', post:'。', py:'Wēixiǎn! Nǐ kāi de tài kuài le.', vn:'Nguy hiểm! Anh lái nhanh quá.'},
       {speaker:'男', pre:'好吧，好吧，', blank:'我开慢点儿', post:'。', py:'Hǎo ba, hǎo ba, wǒ kāi màn diǎnr.', vn:'Được rồi, được rồi, anh lái chậm lại.'},
       {speaker:'女', pre:'你现在把车停下，我来开，', blank:'我真受不了你了', post:'！', py:'Nǐ xiànzài bǎ chē tíngxià, wǒ lái kāi, wǒ zhēn shòubuliǎo nǐ le!', vn:'Anh dừng xe lại ngay, để em lái, em chịu không nổi anh nữa!'},
       {speaker:'男', pre:'让我再开会儿。你不是也刚学会几天吗？', blank:'自己也是个新手', post:'。', py:'Ràng wǒ zài kāi huìr. Nǐ bú shì yě gāng xuéhuì jǐ tiān ma? Zìjǐ yě shì ge xīnshǒu.', vn:'Để anh lái thêm chút. Em chẳng phải cũng mới biết lái vài ngày sao? Bản thân cũng là tay mới.'},
       {speaker:'女', pre:'至少比你开得慢，', blank:'技术比你好', post:'。', py:'Zhìshǎo bǐ nǐ kāi de màn, jìshù bǐ nǐ hǎo.', vn:'Ít nhất em lái chậm hơn anh, kỹ thuật tốt hơn anh.'}
     ],
     explain:'问：可以知道男的怎么样？ Cả hai đều mới học lái ("你不是也刚学会几天吗？自己也是个新手") → A 是新手. B, D ngược nội dung.'},
    {num:17, options:['学校','作者','办公室','中学生'], ans:1, q:'通过对话，可以知道男的联系了什么人？',
     lines:[
       {speaker:'女', pre:'', blank:'你联系那位作者了吗', post:'？', py:'Nǐ liánxì nà wèi zuòzhě le ma?', vn:'Anh liên hệ với tác giả đó chưa?'},
       {speaker:'男', pre:'联系了，她竟然是一位在校大学生，', blank:'没想到她那么年轻', post:'。', py:'Liánxì le, tā jìngrán shì yí wèi zàixiào dàxuéshēng, méi xiǎngdào tā nàme niánqīng.', vn:'Liên hệ rồi, cô ấy thế mà là sinh viên đang học, không ngờ trẻ vậy.'},
       {speaker:'女', pre:'', blank:'她同意和我们聊一聊了', post:'？', py:'Tā tóngyì hé wǒmen liáo yi liáo le?', vn:'Cô ấy đồng ý trò chuyện với chúng ta rồi à?'},
       {speaker:'男', pre:'是的，暂定在下星期一，', blank:'她上午九点来我们办公室谈', post:'。', py:'Shì de, zàndìng zài xià xīngqīyī, tā shàngwǔ jiǔ diǎn lái wǒmen bàngōngshì tán.', vn:'Đúng, tạm định thứ Hai tuần sau, chín giờ sáng cô ấy đến văn phòng chúng ta nói chuyện.'}
     ],
     explain:'问：可以知道男的联系了什么人？ "你联系那位作者了吗？— 联系了" → B 作者. D sai: cô ấy là sinh viên đại học, không phải học sinh trung học.'},
    {num:18, options:['介绍科学知识','特别有意思','赚了很多钱','解释了很多梦'], ans:3, q:'关于《周公解梦》，下列哪个最可能正确？',
     lines:[
       {speaker:'男', pre:'我昨天晚上做了一个特别有意思的梦，', blank:'梦到家里有好多好多水', post:'，高兴死我了。', py:'Wǒ zuótiān wǎnshang zuòle yí ge tèbié yǒu yìsi de mèng, mèngdào jiā li yǒu hǎo duō hǎo duō shuǐ, gāoxìng sǐ wǒ le.', vn:'Tối qua tôi mơ một giấc mơ rất thú vị, mơ thấy nhà có rất nhiều nước, vui muốn chết.'},
       {speaker:'女', pre:'这有什么可高兴的？晚上睡觉时，', blank:'身体感觉到什么，人就容易梦到什么内容', post:'。', py:'Zhè yǒu shénme kě gāoxìng de? Wǎnshang shuìjiào shí, shēntǐ gǎnjué dào shénme, rén jiù róngyì mèngdào shénme nèiróng.', vn:'Có gì đáng vui? Lúc ngủ, cơ thể cảm thấy gì thì người ta dễ mơ thấy cái đó.'},
       {speaker:'男', pre:'早上一醒，我就去查了《周公解梦》，', blank:'书上说梦到水，说明会有很大一笔收入', post:'呢！', py:'Zǎoshang yì xǐng, wǒ jiù qù chále «Zhōugōng Jiěmèng», shū shang shuō mèngdào shuǐ, shuōmíng huì yǒu hěn dà yì bǐ shōurù ne!', vn:'Sáng vừa tỉnh tôi đi tra «Chu Công giải mộng», sách nói mơ thấy nước là sẽ có một khoản thu nhập lớn!'},
       {speaker:'女', pre:'那你慢慢等着吧，', blank:'那本书上的内容一点儿也不科学', post:'。', py:'Nà nǐ mànman děngzhe ba, nà běn shū shang de nèiróng yìdiǎnr yě bù kēxué.', vn:'Vậy anh cứ từ từ mà đợi, nội dung cuốn sách đó chẳng khoa học chút nào.'}
     ],
     explain:'问：关于《周公解梦》，下列哪个最可能正确？ Sách giải thích ý nghĩa các giấc mơ → D 解释了很多梦. A sai vì "一点儿也不科学".'},
    {num:19, options:['开始时间','完成的情况','做事的顺序','别浪费时间'], ans:2, q:'做计划表时，首先要注意什么？',
     lines:[
       {speaker:'旁白', pre:'每个人都应该学会管理时间，', blank:'而做计划表、严格按照计划做事是有效管理时间的第一步', post:'。', py:'Měi ge rén dōu yīnggāi xuéhuì guǎnlǐ shíjiān, ér zuò jìhuàbiǎo, yángé ànzhào jìhuà zuòshì shì yǒuxiào guǎnlǐ shíjiān de dì-yī bù.', vn:'Ai cũng nên học cách quản lý thời gian, mà lập bảng kế hoạch, làm việc nghiêm túc theo kế hoạch là bước đầu tiên để quản lý thời gian hiệu quả.'},
       {speaker:'旁白', pre:'在做计划表时', blank:'首先要注意把重要的事安排在前面', post:'，除此之外，还要写明完成时间，这样才能做到不浪费一分一秒。', py:'Zài zuò jìhuàbiǎo shí shǒuxiān yào zhùyì bǎ zhòngyào de shì ānpái zài qiánmian, chú cǐ zhī wài, hái yào xiěmíng wánchéng shíjiān, zhèyàng cái néng zuòdào bú làngfèi yì fēn yì miǎo.', vn:'Khi lập bảng kế hoạch, trước hết phải chú ý xếp việc quan trọng lên trước, ngoài ra còn phải ghi rõ thời gian hoàn thành, như vậy mới không lãng phí một phút một giây.'}
     ],
     explain:'问：做计划表时，首先要注意什么？ "首先要注意把重要的事安排在前面" → thứ tự làm việc, đáp án C 做事的顺序.'},
    {num:20, options:['工作总结','管理效果','做计划的方法','时间的重要性'], ans:2, q:'这段话主要谈的是什么？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）', blank:'在做计划表时首先要注意把重要的事安排在前面，除此之外，还要写明完成时间', post:'。', py:'(Tóng yí duàn huà) Zài zuò jìhuàbiǎo shí shǒuxiān yào zhùyì bǎ zhòngyào de shì ānpái zài qiánmian, chú cǐ zhī wài, hái yào xiěmíng wánchéng shíjiān.', vn:'(Cùng đoạn văn) Khi lập bảng kế hoạch, trước hết phải xếp việc quan trọng lên trước, ngoài ra còn phải ghi rõ thời gian hoàn thành.'}
     ],
     explain:'问：这段话主要谈的是什么？ Đoạn chủ yếu hướng dẫn cách lập bảng kế hoạch → C 做计划的方法.'},
    {num:21, options:['为了赚钱','减少污染','衣服太脏','洗衣服太辛苦'], ans:3, q:'根据这段话，为什么会出现洗衣机？',
     lines:[
       {speaker:'旁白', pre:'因为有些人觉得用手写字麻烦，于是有了打字机；因为有些人觉得每天爬楼麻烦，于是有了电梯；', blank:'因为有些人觉得洗衣服麻烦，于是有了洗衣机', post:'；', py:'Yīnwèi yǒuxiē rén juéde yòng shǒu xiě zì máfan, yúshì yǒule dǎzìjī; yīnwèi yǒuxiē rén juéde měi tiān pá lóu máfan, yúshì yǒule diàntī; yīnwèi yǒuxiē rén juéde xǐ yīfu máfan, yúshì yǒule xǐyījī;', vn:'Vì có người thấy viết tay phiền nên có máy đánh chữ; vì có người thấy ngày nào cũng leo cầu thang phiền nên có thang máy; vì có người thấy giặt quần áo phiền nên có máy giặt;'},
       {speaker:'旁白', pre:'同样因为有些人觉得走路又累又麻烦，才有了各种交通工具。所以，', blank:'觉得麻烦不一定是件坏事', post:'。', py:'tóngyàng yīnwèi yǒuxiē rén juéde zǒulù yòu lèi yòu máfan, cái yǒule gè zhǒng jiāotōng gōngjù. Suǒyǐ, juéde máfan bù yídìng shì jiàn huàishì.', vn:'cũng vì có người thấy đi bộ vừa mệt vừa phiền nên mới có các loại phương tiện giao thông. Vì vậy, thấy phiền không hẳn là chuyện xấu.'}
     ],
     explain:'问：为什么会出现洗衣机？ "觉得洗衣服麻烦，于是有了洗衣机" → D 洗衣服太辛苦 (麻烦 ≈ vất vả, phiền).'},
    {num:22, options:['麻烦的好处','麻烦的原因','爬楼的快乐','交通工具的特点'], ans:0, q:'这段话主要想告诉我们什么？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）所以，', blank:'觉得麻烦不一定是件坏事', post:'。', py:'(Tóng yí duàn huà) Suǒyǐ, juéde máfan bù yídìng shì jiàn huàishì.', vn:'(Cùng đoạn văn) Vì vậy, thấy phiền không hẳn là chuyện xấu.'}
     ],
     explain:'问：这段话主要想告诉我们什么？ Kết luận "觉得麻烦不一定是件坏事" → cái phiền có lợi ích (thúc đẩy phát minh), đáp án A 麻烦的好处.'}
  ]
};
