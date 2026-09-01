// ══════════════════════════════════════════
// DATA — HSK3 Bài 15: 其他都没什么问题 (Những câu khác đều không có vấn đề gì)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'留学',py:'liú xué',pos:'Động từ',vn:'du học',em:'🎓',lesson:1,
   explain:['Đi học ở nước ngoài để nâng cao trình độ.'],
   usage:'Động từ ly hợp; đi cùng khoảng thời gian: 留学两年.',
   collo:['去留学','留学两年','留学生活'],
   ex_zh:'我来中国留学两年了。',ex_py:'Wǒ lái Zhōngguó liú xué liǎng nián le.',ex_vn:'Em đến Trung Quốc du học được hai năm rồi.',
   exList:[
     {zh:'老师，我来中国留学两年了，但是我的汉语水平提高得一点儿也不快啊。',py:'Lǎoshī, wǒ lái Zhōngguó liú xué liǎng nián le, dànshì wǒ de Hànyǔ shuǐpíng tígāo de yìdiǎnr yě bú kuài a.',vn:'Thầy ơi, em đến Trung Quốc du học được hai năm rồi, nhưng trình độ tiếng Trung của em tiến bộ chẳng nhanh chút nào cả.'},
     {zh:'女儿在国外留学三年了。',py:'Nǚ\'ér zài guówài liú xué sān nián le.',vn:'Con gái đi du học nước ngoài được ba năm rồi.'},
     {zh:'除了每天上课学习以外，她课后还要去饭馆帮忙。',py:'Chúle měi tiān shàngkè xuéxí yǐwài, tā kèhòu hái yào qù fànguǎn bāngmáng.',vn:'Ngoài mỗi ngày lên lớp học ra, sau giờ học cô ấy còn phải đến nhà hàng phụ giúp.'},
   ],
   hanzi:[
     {c:'留',p:'liú',type:'上下结构 · Trên-dưới',st:10,ord:'⺜ trên → 田 dưới',rad:'田 (điền)',mean:'lưu lại, ở lại',
      tip:'⺜(cây non) + 田(ruộng) → cây non được giữ LẠI trên ruộng để chăm sóc = LƯU LẠI, Ở LẠI.',
      cf:'流 (liú – "chảy", có bộ 氵")',w:'留学 / 留下'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con gái của chú đi du học ở Úc được một năm rồi.',answer:'叔叔的女儿在澳大利亚留学一年了。',answerPy:'Shūshu de nǚ\'ér zài Àodàlìyà liú xué yì nián le.',
      note:'留学 + khoảng thời gian + 了 diễn tả việc đã kéo dài.'},
     {promptLang:'vi',prompt:'Tuy anh ấy đến Trung Quốc du học hai năm rồi nhưng trình độ tiến bộ không nhanh.',answer:'虽然他来中国留学两年了，但是水平提高得不快。',answerPy:'Suīrán tā lái Zhōngguó liú xué liǎng nián le, dànshì shuǐpíng tígāo de bú kuài.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:2,zh:'水平',py:'shuǐpíng',pos:'Danh từ',vn:'trình độ',em:'📊',lesson:1,
   explain:['Mức độ năng lực, khả năng của một người trong một lĩnh vực.'],
   usage:'Danh từ; đi cùng động từ 提高: 提高水平.',
   collo:['汉语水平','提高水平','水平不错'],
   ex_zh:'我的汉语水平提高得一点儿也不快。',ex_py:'Wǒ de Hànyǔ shuǐpíng tígāo de yìdiǎnr yě bú kuài.',ex_vn:'Trình độ tiếng Trung của em tiến bộ chẳng nhanh chút nào cả.',
   exList:[
     {zh:'但是我的汉语水平提高得一点儿也不快啊。',py:'Dànshì wǒ de Hànyǔ shuǐpíng tígāo de yìdiǎnr yě bú kuài a.',vn:'Nhưng trình độ tiếng Trung của em tiến bộ chẳng nhanh chút nào cả.'},
     {zh:'你现在打篮球的水平越来越高了。',py:'Nǐ xiànzài dǎ lánqiú de shuǐpíng yuè lái yuè gāo le.',vn:'Trình độ chơi bóng rổ của bạn bây giờ ngày càng cao rồi.'},
     {zh:'他的英语水平很不错。',py:'Tā de Yīngyǔ shuǐpíng hěn búcuò.',vn:'Trình độ tiếng Anh của anh ấy khá tốt.'},
   ],
   hanzi:[
     {c:'平',p:'píng',type:'独体字 · Chữ đơn (tượng hình)',st:5,ord:'nét liền',rad:'干 (can)',mean:'bằng phẳng',
      tip:'Chữ tượng hình mô phỏng mặt nước BẰNG PHẲNG khi cân bằng; 水(nước)+平(bằng) = mức nước ngang = TRÌNH ĐỘ.',
      cf:'干 (gān – "khô", không có nét ngang trên")',w:'水平 / 平常'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trình độ tiếng Trung của em gái cũng khá tốt.',answer:'妹妹的汉语水平也很不错。',answerPy:'Mèimei de Hànyǔ shuǐpíng yě hěn búcuò.',
      note:'很不错 diễn tả đánh giá tích cực.'},
     {promptLang:'vi',prompt:'Nếu bạn học chăm chỉ thì trình độ sẽ nâng cao nhanh.',answer:'如果你认真学习，水平就会提高得很快。',answerPy:'Rúguǒ nǐ rènzhēn xuéxí, shuǐpíng jiù huì tígāo de hěn kuài.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:3,zh:'提高',py:'tí gāo',pos:'Động từ',vn:'nâng cao, tiến bộ',em:'📈',lesson:1,
   explain:['Làm cho mức độ, trình độ trở nên cao hơn trước.'],
   usage:'Động từ, mang tân ngữ là danh từ trừu tượng: 提高水平.',
   collo:['提高水平','提高得快','越提高越好'],
   ex_zh:'我的汉语水平提高得一点儿也不快。',ex_py:'Wǒ de Hànyǔ shuǐpíng tígāo de yìdiǎnr yě bú kuài.',ex_vn:'Trình độ tiếng Trung của em tiến bộ chẳng nhanh chút nào cả.',
   exList:[
     {zh:'但是我的汉语水平提高得一点儿也不快啊。',py:'Dànshì wǒ de Hànyǔ shuǐpíng tígāo de yìdiǎnr yě bú kuài a.',vn:'Nhưng trình độ tiếng Trung của em tiến bộ chẳng nhanh chút nào cả.'},
     {zh:'我觉得没什么提高，还跟以前一样。',py:'Wǒ juéde méi shénme tígāo, hái gēn yǐqián yíyàng.',vn:'Tôi thấy không tiến bộ gì cả, vẫn giống như trước đây.'},
     {zh:'努力练习才能提高水平。',py:'Nǔlì liànxí cái néng tígāo shuǐpíng.',vn:'Phải nỗ lực luyện tập mới có thể nâng cao trình độ.'},
   ],
   hanzi:[
     {c:'提',p:'tí',type:'左右结构 · Trái-phải',st:12,ord:'扌 trái → 是 phải',rad:'扌 (thủ – tay)',mean:'nâng, đề cập',
      tip:'扌(tay) + 是(đúng, xác định) → dùng tay NÂNG một vật lên đúng vị trí; mở rộng nghĩa NÂNG CAO, ĐỀ CẬP.',
      cf:'题 (tí – "đề bài", có bộ 页")',w:'提高 / 提问'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phải nghe nhiều nói nhiều mới có thể nâng cao trình độ tiếng Trung.',answer:'多听多说才能提高汉语水平。',answerPy:'Duō tīng duō shuō cái néng tígāo Hànyǔ shuǐpíng.',
      note:'才 diễn tả điều kiện cần (ôn lại đã học ở Bài 12).'},
     {promptLang:'vi',prompt:'Chỉ cần bạn chăm chỉ luyện tập thì trình độ sẽ nâng cao.',answer:'只要你认真练习，水平就会提高。',answerPy:'Zhǐyào nǐ rènzhēn liànxí, shuǐpíng jiù huì tígāo.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:4,zh:'练习',py:'liànxí',pos:'Danh từ',vn:'bài tập',em:'📝',lesson:1,
   explain:['Bài luyện tập nhằm củng cố kiến thức, kỹ năng.'],
   usage:'Danh từ; đi cùng động từ 做: 做练习. Cũng có thể làm động từ nghĩa "luyện tập".',
   collo:['做练习','练习汉语','努力练习'],
   ex_zh:'你每天认真学习，做练习、完成作业。',ex_py:'Nǐ měi tiān rènzhēn xuéxí, zuò liànxí, wán chéng zuòyè.',ex_vn:'Em ngày nào cũng học chăm chỉ, làm bài tập, hoàn thành bài về nhà.',
   exList:[
     {zh:'你每天认真学习，做练习、完成作业，一直不错啊。',py:'Nǐ měi tiān rènzhēn xuéxí, zuò liànxí, wán chéng zuòyè, yìzhí búcuò a.',vn:'Em ngày nào cũng học chăm chỉ, làm bài tập, hoàn thành bài về nhà, vẫn tốt mà.'},
     {zh:'除了认真学，慢慢写以外，还要努力练习。',py:'Chúle rènzhēn xué, mànman xiě yǐwài, hái yào nǔlì liànxí.',vn:'Ngoài học nghiêm túc, viết chậm rãi ra, còn phải nỗ lực luyện tập.'},
     {zh:'这些练习不太难。',py:'Zhèxiē liànxí bú tài nán.',vn:'Mấy bài tập này không khó lắm.'},
   ],
   hanzi:[
     {c:'练',p:'liàn',type:'左右结构 · Trái-phải',st:8,ord:'纟 trái → 东 phải (giản thể)',rad:'纟 (mịch – tơ lụa)',mean:'luyện tập',
      tip:'纟(sợi tơ, dệt đi dệt lại) + phần phải (giản thể) → lặp đi lặp lại nhiều lần = LUYỆN TẬP.',
      cf:'炼 (liàn – "tôi luyện", có bộ 火")',w:'练习 / 训练'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài tập hôm nay không nhiều lắm.',answer:'今天的练习不太多。',answerPy:'Jīntiān de liànxí bú tài duō.',
      note:'不太 + Adj diễn tả mức độ không cao lắm.'},
     {promptLang:'vi',prompt:'Nếu bạn làm xong bài tập thì có thể xem tivi.',answer:'如果你做完练习，就可以看电视。',answerPy:'Rúguǒ nǐ zuòwán liànxí, jiù kěyǐ kàn diànshì.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:5,zh:'完成',py:'wán chéng',pos:'Động từ',vn:'hoàn thành',em:'✅',lesson:1,
   explain:['Làm xong một công việc, nhiệm vụ nào đó.'],
   usage:'Động từ, mang tân ngữ là danh từ chỉ công việc: 完成作业.',
   collo:['完成作业','完成任务','按时完成'],
   ex_zh:'做练习、完成作业，一直不错啊。',ex_py:'Zuò liànxí, wán chéng zuòyè, yìzhí búcuò a.',ex_vn:'Làm bài tập, hoàn thành bài về nhà, vẫn tốt mà.',
   exList:[
     {zh:'你每天认真学习，做练习、完成作业，一直不错啊。',py:'Nǐ měi tiān rènzhēn xuéxí, zuò liànxí, wán chéng zuòyè, yìzhí búcuò a.',vn:'Em ngày nào cũng học chăm chỉ, làm bài tập, hoàn thành bài về nhà, vẫn tốt mà.'},
     {zh:'我已经完成了今天的作业。',py:'Wǒ yǐjīng wánchéngle jīntiān de zuòyè.',vn:'Tôi đã hoàn thành bài tập hôm nay rồi.'},
     {zh:'这个短期班下周日就要结束了。',py:'Zhège duǎnqībān xià zhōurì jiù yào jiéshù le.',vn:'Lớp học ngắn hạn này tuần sau chủ nhật là kết thúc rồi.'},
   ],
   hanzi:[
     {c:'成',p:'chéng',type:'独体字 · Chữ đơn',st:6,ord:'nét liền',rad:'戈 (qua – vũ khí)',mean:'thành công, hoàn thành',
      tip:'Chữ tượng hình mô phỏng vũ khí (戈) hoàn tất một trận chiến → THÀNH CÔNG, HOÀN THÀNH.',
      cf:'城 (chéng – "thành phố", có bộ 土")',w:'完成 / 成功'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đã hoàn thành bài luyện tập của cuộc thi lần này rồi.',answer:'他已经完成了这次比赛的练习。',answerPy:'Tā yǐjīng wánchéngle zhè cì bǐsài de liànxí.',
      note:'已经……了 diễn tả hành động đã hoàn tất.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn hoàn thành bài tập thì có thể ra ngoài chơi.',answer:'只要你完成作业，就可以出去玩。',answerPy:'Zhǐyào nǐ wánchéng zuòyè, jiù kěyǐ chūqu wán.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:6,zh:'句子',py:'jùzi',pos:'Danh từ',vn:'câu',em:'📄',lesson:1,
   explain:['Đơn vị ngôn ngữ diễn đạt một ý hoàn chỉnh.'],
   usage:'Danh từ; đi cùng động từ 写/说: 写句子.',
   collo:['这个句子','写句子','句子的意思'],
   ex_zh:'除了这个句子意思有些不清楚外，其他都没什么问题。',ex_py:'Chúle zhège jùzi yìsi yǒuxiē bù qīngchu wài, qítā dōu méi shénme wèntí.',ex_vn:'Ngoài câu này ý nghĩa hơi không rõ ràng ra, còn lại đều không có vấn đề gì.',
   exList:[
     {zh:'除了这个句子意思有些不清楚外，其他都没什么问题。',py:'Chúle zhège jùzi yìsi yǒuxiē bù qīngchu wài, qítā dōu méi shénme wèntí.',vn:'Ngoài câu này ý nghĩa hơi không rõ ràng ra, còn lại đều không có vấn đề gì.'},
     {zh:'这个句子怎么读？',py:'Zhège jùzi zěnme dú?',vn:'Câu này đọc thế nào?'},
     {zh:'请你用这个词造一个句子。',py:'Qǐng nǐ yòng zhège cí zào yí ge jùzi.',vn:'Xin bạn dùng từ này đặt một câu.'},
   ],
   hanzi:[
     {c:'句',p:'jù',type:'半包围结构 · Bán bao vây',st:5,ord:'勹 ngoài → 口 trong',rad:'勹 (bao)',mean:'câu',
      tip:'勹(bao bọc) + 口(miệng, lời nói) → lời nói được BAO BỌC trọn vẹn thành một Ý = CÂU.',
      cf:'包 (bāo – "gói", có 巳 thay vì 口")',w:'句子 / 一句话'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu này dịch thế nào?',answer:'这个句子怎么翻译？',answerPy:'Zhège jùzi zěnme fānyì?',
      note:'怎么 + V hỏi về cách thức.'},
     {promptLang:'vi',prompt:'Nếu câu nào không hiểu thì bạn có thể hỏi tôi.',answer:'如果有什么句子不明白，你就可以问我。',answerPy:'Rúguǒ yǒu shénme jùzi bù míngbai, nǐ jiù kěyǐ wèn wǒ.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:7,zh:'其他',py:'qítā',pos:'Đại từ',vn:'cái khác',em:'➕',lesson:1,
   explain:['Chỉ những sự vật, người khác ngoài cái đã được nhắc đến.'],
   usage:'Đại từ, làm định ngữ hoặc chủ ngữ: 其他 + N; 其他都….',
   collo:['其他人','其他问题','其他都没什么'],
   ex_zh:'除了这个句子意思有些不清楚外，其他都没什么问题。',ex_py:'Chúle zhège jùzi yìsi yǒuxiē bù qīngchu wài, qítā dōu méi shénme wèntí.',ex_vn:'Ngoài câu này ý nghĩa hơi không rõ ràng ra, còn lại đều không có vấn đề gì.',
   exList:[
     {zh:'除了这个句子意思有些不清楚外，其他都没什么问题。',py:'Chúle zhège jùzi yìsi yǒuxiē bù qīngchu wài, qítā dōu méi shénme wèntí.',vn:'Ngoài câu này ý nghĩa hơi không rõ ràng ra, còn lại đều không có vấn đề gì.'},
     {zh:'除了小云，其他人都来了。',py:'Chúle Xiǎoyún, qítā rén dōu lái le.',vn:'Ngoài bạn Vân ra, những người khác đều đến rồi.'},
     {zh:'我只买了几件衣服，其他也没买什么啊。',py:'Wǒ zhǐ mǎile jǐ jiàn yīfu, qítā yě méi mǎi shénme a.',vn:'Tôi chỉ mua vài cái áo, cái khác cũng chẳng mua gì đâu.'},
   ],
   hanzi:[
     {c:'其',p:'qí',type:'独体字 · Chữ đơn (tượng hình)',st:8,ord:'nét liền',rad:'八 (bát)',mean:'cái đó, những cái khác',
      tip:'Chữ tượng hình mô phỏng cái nia (dụng cụ sàng gạo) chỉ vật KHÁC được sàng ra; 其(cái đó)+他(khác) = CÁI KHÁC.',
      cf:'甚 (shèn – "rất", hình dáng gần giống")',w:'其他 / 其中'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngoài Tiểu Minh ra, các học sinh khác đều đã hoàn thành bài tập rồi.',answer:'除了小明，其他学生都完成作业了。',answerPy:'Chúle Xiǎomíng, qítā xuésheng dōu wánchéng zuòyè le.',
      note:'除了……都…… diễn tả loại trừ một phần (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn có việc khác cần giúp thì cứ nói với tôi.',answer:'如果你有其他事情需要帮忙，就跟我说吧。',answerPy:'Rúguǒ nǐ yǒu qítā shìqing xūyào bāngmáng, jiù gēn wǒ shuō ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:8,zh:'发',py:'fā',pos:'Động từ',vn:'gửi, gửi đi',em:'📧',lesson:1,
   explain:['Chuyển, gửi thông tin, đồ vật đến người khác.'],
   usage:'Động từ, mang tân ngữ: 发电子邮件, 发短信.',
   collo:['发电子邮件','发短信','用手机发'],
   ex_zh:'可以给我打电话或者发电子邮件。',ex_py:'Kěyǐ gěi wǒ dǎ diànhuà huòzhě fā diànzǐ yóujiàn.',ex_vn:'Có thể gọi điện hoặc gửi email cho thầy.',
   exList:[
     {zh:'以后有什么不明白的地方，可以给我打电话或者发电子邮件。',py:'Yǐhòu yǒu shénme bù míngbai de dìfang, kěyǐ gěi wǒ dǎ diànhuà huòzhě fā diànzǐ yóujiàn.',vn:'Sau này có chỗ nào không hiểu, em có thể gọi điện hoặc gửi email cho thầy.'},
     {zh:'我的手机能上网，用手机也能发。',py:'Wǒ de shǒujī néng shàng wǎng, yòng shǒujī yě néng fā.',vn:'Điện thoại tôi lên mạng được, dùng điện thoại cũng gửi được.'},
     {zh:'你要发电子邮件吗？',py:'Nǐ yào fā diànzǐ yóujiàn ma?',vn:'Bạn cần gửi email à?'},
   ],
   hanzi:[
     {c:'发',p:'fā',type:'独体字 · Chữ đơn (giản thể)',st:5,ord:'nét liền',rad:'又 (hựu)',mean:'phát ra, gửi',
      tip:'Chữ giản thể mô phỏng hình mũi tên được BẮN ra, PHÁT ra → PHÁT, GỬI ĐI.',
      cf:'友 (yǒu – "bạn", hình dáng gần giống")',w:'发 / 出发 / 发现'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Máy tính này lên mạng được, cũng gửi email được.',answer:'这个电脑能上网，也能发电子邮件。',answerPy:'Zhège diànnǎo néng shàng wǎng, yě néng fā diànzǐ yóujiàn.',
      note:'能 diễn tả khả năng (ôn lại 上网 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Nếu bạn cần gửi email thì có thể dùng máy tính của tôi.',answer:'如果你要发电子邮件，就可以用我的电脑。',answerPy:'Rúguǒ nǐ yào fā diànzǐ yóujiàn, jiù kěyǐ yòng wǒ de diànnǎo.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:9,zh:'要求',py:'yāoqiú',pos:'Danh từ',vn:'yêu cầu',em:'📋',lesson:2,
   explain:['Điều đòi hỏi, mong muốn người khác phải đạt được.'],
   usage:'Danh từ; đi cùng động từ 讲/有: 讲要求.',
   collo:['比赛的要求','有要求','满足要求'],
   ex_zh:'我先给大家讲讲这次比赛的要求。',ex_py:'Wǒ xiān gěi dàjiā jiǎngjiang zhè cì bǐsài de yāoqiú.',ex_vn:'Thầy nói trước cho các em về yêu cầu của cuộc thi lần này.',
   exList:[
     {zh:'我先给大家讲讲这次比赛的要求和一些需要注意的地方。',py:'Wǒ xiān gěi dàjiā jiǎngjiang zhè cì bǐsài de yāoqiú hé yìxiē xūyào zhù yì de dìfang.',vn:'Thầy nói trước cho các em về yêu cầu của cuộc thi lần này và một số điều cần chú ý.'},
     {zh:'您对房子还有什么要求吗？',py:'Nín duì fángzi hái yǒu shénme yāoqiú ma?',vn:'Anh còn có yêu cầu gì về căn nhà không?'},
     {zh:'我只有这一个要求。',py:'Wǒ zhǐyǒu zhè yí ge yāoqiú.',vn:'Tôi chỉ có mỗi một yêu cầu này thôi.'},
   ],
   hanzi:[
     {c:'求',p:'qiú',type:'独体字 · Chữ đơn (tượng hình)',st:7,ord:'nét liền',rad:'水 (thuỷ)',mean:'yêu cầu, cầu xin',
      tip:'Chữ tượng hình cổ mô phỏng hình bộ da thú được CẦU XIN, SĂN TÌM → YÊU CẦU, MONG MUỐN.',
      cf:'球 (qiú – "quả bóng", có bộ 王")',w:'要求 / 求助'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy chỉ có một yêu cầu về căn nhà thôi.',answer:'他对房子只有一个要求。',answerPy:'Tā duì fángzi zhǐyǒu yí ge yāoqiú.',
      note:'只有 diễn tả sự giới hạn duy nhất.'},
     {promptLang:'vi',prompt:'Nếu bạn có yêu cầu gì thì cứ nói với thầy giáo.',answer:'如果你有什么要求，就跟老师说吧。',answerPy:'Rúguǒ nǐ yǒu shénme yāoqiú, jiù gēn lǎoshī shuō ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:10,zh:'注意',py:'zhù yì',pos:'Động từ',vn:'chú ý',em:'⚠️',lesson:2,
   explain:['Tập trung tâm trí, cẩn thận với một điều gì đó.'],
   usage:'Động từ, mang tân ngữ: 注意 + [việc/vấn đề]; hoặc làm định ngữ 需要注意的地方.',
   collo:['需要注意的地方','注意安全','请注意'],
   ex_zh:'一些需要注意的地方。',ex_py:'Yìxiē xūyào zhù yì de dìfang.',ex_vn:'Một số điều cần chú ý.',
   exList:[
     {zh:'我先给大家讲讲这次比赛的要求和一些需要注意的地方。',py:'Wǒ xiān gěi dàjiā jiǎngjiang zhè cì bǐsài de yāoqiú hé yìxiē xūyào zhù yì de dìfang.',vn:'Thầy nói trước cho các em về yêu cầu của cuộc thi lần này và một số điều cần chú ý.'},
     {zh:'请注意安全。',py:'Qǐng zhù yì ānquán.',vn:'Xin hãy chú ý an toàn.'},
     {zh:'开车的时候要注意路上的行人。',py:'Kāichē de shíhou yào zhù yì lùshang de xíngrén.',vn:'Lúc lái xe phải chú ý người đi bộ trên đường.'},
   ],
   hanzi:[
     {c:'注',p:'zhù',type:'左右结构 · Trái-phải',st:8,ord:'氵 trái → 主 phải',rad:'氵 (thuỷ – nước)',mean:'chú ý, đổ vào',
      tip:'氵(nước) + 主(chủ, tập trung) → dồn nước CHẢY vào một điểm CHỦ, mở rộng nghĩa TẬP TRUNG chú ý.',
      cf:'住 (zhù – "ở", có bộ 亻")',w:'注意 / 注重'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lúc thi phải chú ý thời gian.',answer:'考试的时候要注意时间。',answerPy:'Kǎoshì de shíhou yào zhù yì shíjiān.',
      note:'……的时候 diễn tả thời điểm.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn chú ý an toàn thì bố mẹ sẽ yên tâm.',answer:'只要你注意安全，爸爸妈妈就会放心。',answerPy:'Zhǐyào nǐ zhù yì ānquán, bàba māma jiù huì fàngxīn.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:11,zh:'上网',py:'shàng wǎng',pos:'Động từ',vn:'lên mạng',em:'🌐',lesson:3,
   explain:['Kết nối và sử dụng mạng internet.'],
   usage:'Động từ ly hợp: 上 + 网; đi cùng 用: 用电脑上网.',
   collo:['用电脑上网','在网上','上网真方便'],
   ex_zh:'现在用电脑上网真方便啊！',ex_py:'Xiànzài yòng diànnǎo shàng wǎng zhēn fāngbiàn a!',ex_vn:'Bây giờ dùng máy tính lên mạng tiện thật đấy!',
   exList:[
     {zh:'现在用电脑上网真方便啊！',py:'Xiànzài yòng diànnǎo shàng wǎng zhēn fāngbiàn a!',vn:'Bây giờ dùng máy tính lên mạng tiện thật đấy!'},
     {zh:'我的手机能上网，用手机也能发。',py:'Wǒ de shǒujī néng shàng wǎng, yòng shǒujī yě néng fā.',vn:'Điện thoại tôi lên mạng được, dùng điện thoại cũng gửi được.'},
     {zh:'弟弟只好上网看自己喜欢的电视节目。',py:'Dìdi zhǐhǎo shàng wǎng kàn zìjǐ xǐhuan de diànshì jiémù.',vn:'Em trai đành lên mạng xem chương trình tivi mình thích.'},
   ],
   hanzi:[
     {c:'网',p:'wǎng',type:'半包围结构 · Bán bao vây',st:6,ord:'冂 ngoài → 乂 trong',rad:'冂 (quynh)',mean:'lưới, mạng',
      tip:'冂(khung bao) + 乂(đan chéo) → hình ảnh sợi dây đan chéo tạo thành LƯỚI; mở rộng nghĩa MẠNG internet.',
      cf:'肉 (ròu – "thịt", hình dáng gần giống")',w:'上网 / 网上'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bên ngoài trời mưa, anh ấy đành ở nhà lên mạng xem phim.',answer:'外面下雨，他只好在家上网看电影。',answerPy:'Wàimiàn xià yǔ, tā zhǐhǎo zài jiā shàng wǎng kàn diànyǐng.',
      note:'只好 diễn tả sự bất đắc dĩ (ôn lại 节目 đã học ở Bài 14).'},
     {promptLang:'vi',prompt:'Nếu bạn muốn xem tin tức thì có thể lên mạng.',answer:'如果你想看新闻，就可以上网。',answerPy:'Rúguǒ nǐ xiǎng kàn xīnwén, jiù kěyǐ shàng wǎng.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:12,zh:'除了',py:'chúle',pos:'Giới từ',vn:'ngoài...ra',em:'🚫',lesson:3,
   explain:['Loại trừ một thành phần, thường đi cùng 以外.'],
   usage:'除了 + [A] + 以外，都/还/也……',
   collo:['除了……以外','除了……都','除了……还'],
   ex_zh:'除了看新闻，人们还可以在网上听歌。',ex_py:'Chúle kàn xīnwén, rénmen hái kěyǐ zài wǎngshang tīng gē.',ex_vn:'Ngoài xem tin tức ra, mọi người còn có thể nghe nhạc trên mạng.',
   exList:[
     {zh:'是啊，除了看新闻，人们还可以在网上听歌、看电影、买东西。',py:'Shì a, chúle kàn xīnwén, rénmen hái kěyǐ zài wǎngshang tīng gē, kàn diànyǐng, mǎi dōngxi.',vn:'Đúng vậy, ngoài xem tin tức ra, mọi người còn có thể nghe nhạc, xem phim, mua đồ trên mạng.'},
     {zh:'除了小云，其他人都来了。',py:'Chúle Xiǎoyún, qítā rén dōu lái le.',vn:'Ngoài bạn Vân ra, những người khác đều đến rồi.'},
     {zh:'除了春节、中秋节以外，啤酒节也是这里很重要的一个节日。',py:'Chúle Chūnjié, Zhōngqiū jié yǐwài, píjiǔ jié yě shì zhèli hěn zhòngyào de yí ge jiérì.',vn:'Ngoài Tết Nguyên đán, Tết Trung thu ra, lễ hội bia cũng là một ngày lễ rất quan trọng ở đây.'},
   ],
   hanzi:[
     {c:'除',p:'chú',type:'左右结构 · Trái-phải',st:9,ord:'阝 trái → 余 phải',rad:'阝 (phụ – gò đất)',mean:'trừ ra, ngoại trừ',
      tip:'阝(bậc thang trên núi) + 余(dư thừa, còn lại) → bước LOẠI TRỪ dần từng bậc, còn lại phần khác = TRỪ RA.',
      cf:'余 (yú – "dư thừa", không có bộ 阝")',w:'除了 / 除非'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngoài hát ra, anh ấy còn thích nhảy múa.',answer:'除了唱歌以外，他还喜欢跳舞。',answerPy:'Chúle chànggē yǐwài, tā hái xǐhuan tiàowǔ.',
      note:'除了……还…… diễn tả bổ sung thêm điều khác (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Ngoài tiếng Trung ra, tôi còn biết nói tiếng Anh.',answer:'除了汉语以外，我还会说英语。',answerPy:'Chúle Hànyǔ yǐwài, wǒ hái huì shuō Yīngyǔ.',
      note:'除了……还…… diễn tả bổ sung thêm điều khác.'},
   ]},

  {n:13,zh:'新闻',py:'xīnwén',pos:'Danh từ',vn:'tin tức',em:'📰',lesson:3,
   explain:['Thông tin về những sự việc mới xảy ra.'],
   usage:'Danh từ; đi cùng động từ 看: 看新闻.',
   collo:['看新闻','听新闻','有意思的新闻'],
   ex_zh:'除了看新闻，人们还可以在网上听歌。',ex_py:'Chúle kàn xīnwén, rénmen hái kěyǐ zài wǎngshang tīng gē.',ex_vn:'Ngoài xem tin tức ra, mọi người còn có thể nghe nhạc trên mạng.',
   exList:[
     {zh:'是啊，除了看新闻，人们还可以在网上听歌、看电影、买东西。',py:'Shì a, chúle kàn xīnwén, rénmen hái kěyǐ zài wǎngshang tīng gē, kàn diànyǐng, mǎi dōngxi.',vn:'Đúng vậy, ngoài xem tin tức ra, mọi người còn có thể nghe nhạc, xem phim, mua đồ trên mạng.'},
     {zh:'今天报纸上有什么新闻吗？',py:'Jīntiān bàozhǐ shang yǒu shénme xīnwén ma?',vn:'Hôm nay báo có tin tức gì không?'},
     {zh:'报纸上有什么有意思的新闻，他都读给我们听。',py:'Bàozhǐ shang yǒu shénme yǒuyìsi de xīnwén, tā dōu dú gěi wǒmen tīng.',vn:'Báo có tin tức gì thú vị, ông ấy đều đọc cho chúng tôi nghe.'},
   ],
   hanzi:[
     {c:'闻',p:'wén',type:'半包围结构 · Bán bao vây',st:9,ord:'门 ngoài → 耳 trong',rad:'门 (môn – cửa)',mean:'nghe, ngửi',
      tip:'门(cửa) + 耳(tai) → đứng sau CỬA dùng TAI để NGHE tin tức; 新(mới)+闻(nghe được) = TIN TỨC mới.',
      cf:'问 (wèn – "hỏi", có 口 thay vì 耳")',w:'新闻 / 闻名'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên mạng có tin tức gì thú vị không?',answer:'网上有什么有意思的新闻吗？',answerPy:'Wǎngshang yǒu shénme yǒuyìsi de xīnwén ma?',
      note:'什么 làm đại từ chỉ thị, hỏi một cách lịch sự (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Ngoài xem tin tức ra, ông ấy còn thích uống trà.',answer:'除了看新闻以外，他还喜欢喝茶。',answerPy:'Chúle kàn xīnwén yǐwài, tā hái xǐhuan hē chá.',
      note:'除了……还…… diễn tả bổ sung thêm điều khác.'},
   ]},

  {n:14,zh:'花',py:'huā',pos:'Động từ',vn:'tốn, tiêu tốn',em:'💸',lesson:3,
   explain:['Tiêu tốn tiền bạc hoặc thời gian.'],
   usage:'Động từ, mang tân ngữ là 钱/时间: 花钱, 花时间.',
   collo:['花钱','花时间','不用花钱'],
   ex_zh:'不用花钱，还有新衣服穿。',ex_py:'Búyòng huā qián, hái yǒu xīn yīfu chuān.',ex_vn:'Không tốn tiền mà lại có áo mới mặc.',
   exList:[
     {zh:'不用花钱，还有新衣服穿，他满意极了。',py:'Búyòng huā qián, hái yǒu xīn yīfu chuān, tā mǎnyì jí le.',vn:'Không tốn tiền mà lại có áo mới mặc, cậu ấy hài lòng lắm.'},
     {zh:'这个月你怎么花了这么多钱？',py:'Zhège yuè nǐ zěnme huāle zhème duō qián?',vn:'Tháng này sao bạn tiêu nhiều tiền thế?'},
     {zh:'叔叔让我花时间认真地读一读这本书。',py:'Shūshu ràng wǒ huā shíjiān rènzhēn de dú yi dú zhè běn shū.',vn:'Chú bảo tôi dành thời gian đọc kỹ quyển sách này.'},
   ],
   hanzi:[
     {c:'花',p:'huā',type:'上下结构 · Trên-dưới',st:7,ord:'艹 trên → 化 dưới',rad:'艹 (thảo – cỏ cây)',mean:'hoa; tiêu tốn',
      tip:'艹(thực vật) + 化(biến đổi) → cây BIẾN ĐỔI ra HOA; mở rộng nghĩa TIÊU TỐN (tiền như hoa nở rồi tàn).',
      cf:'化 (huà – "biến đổi", không có bộ 艹")',w:'花钱 / 花 (hoa)'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sao bạn tốn nhiều thời gian thế?',answer:'你怎么花了那么长时间？',answerPy:'Nǐ zěnme huāle nàme cháng shíjiān?',
      note:'怎么 hỏi nguyên nhân, thái độ ngạc nhiên.'},
     {promptLang:'vi',prompt:'Nếu bạn không tốn tiền thì có thể mua thứ khác.',answer:'如果你不花钱，就可以买其他东西。',answerPy:'Rúguǒ nǐ bù huā qián, jiù kěyǐ mǎi qítā dōngxi.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 其他 đã học trong bài này).'},
   ]},

  {n:15,zh:'极(了)',py:'jí (le)',pos:'Phó từ',vn:'hết sức, cực kỳ',em:'💯',lesson:3,
   explain:['Đứng sau tính từ/động từ tâm lý để diễn tả mức độ cao nhất.'],
   usage:'[Adj/động từ tâm lý] + 极了.',
   collo:['满意极了','可爱极了','好极了'],
   ex_zh:'他满意极了。',ex_py:'Tā mǎnyì jí le.',ex_vn:'Cậu ấy hài lòng lắm.',
   exList:[
     {zh:'不用花钱，还有新衣服穿，他满意极了。',py:'Búyòng huā qián, hái yǒu xīn yīfu chuān, tā mǎnyì jí le.',vn:'Không tốn tiền mà lại có áo mới mặc, cậu ấy hài lòng lắm.'},
     {zh:'我的小狗可爱极了。',py:'Wǒ de xiǎogǒu kě\'ài jí le.',vn:'Con chó nhỏ của tôi đáng yêu lắm.'},
     {zh:'这儿的夏天热极了，你不觉得吗？',py:'Zhèr de xiàtiān rè jí le, nǐ bù juéde ma?',vn:'Mùa hè ở đây nóng lắm, bạn không thấy vậy sao?'},
   ],
   hanzi:[
     {c:'极',p:'jí',type:'左右结构 · Trái-phải',st:7,ord:'木 trái → 及 phải',rad:'木 (mộc – gỗ)',mean:'cực điểm, hết sức',
      tip:'木(cây, xà nhà) + 及(đạt tới) → xà nhà ĐẠT TỚI điểm CAO NHẤT của mái = CỰC ĐIỂM, HẾT SỨC.',
      cf:'级 (jí – "cấp bậc", có bộ 纟")',w:'极了 / 积极'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bia ở đây ngon lắm.',answer:'这儿的啤酒好喝极了。',answerPy:'Zhèr de píjiǔ hǎohē jí le.',
      note:'Adj + 极了 diễn tả mức độ cao nhất (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Hôm nay thời tiết lạnh lắm.',answer:'今天天气冷极了。',answerPy:'Jīntiān tiānqì lěng jí le.',
      note:'Adj + 极了 diễn tả mức độ cao nhất.'},
   ]},

  {n:16,zh:'节日',py:'jiérì',pos:'Danh từ',vn:'ngày lễ',em:'🎉',lesson:4,
   explain:['Ngày đặc biệt được tổ chức để kỷ niệm, ăn mừng.'],
   usage:'Danh từ; đi cùng tính từ 重要: 重要的节日.',
   collo:['重要的节日','过节日','啤酒节'],
   ex_zh:'啤酒节也是这里很重要的一个节日。',ex_py:'Píjiǔ jié yě shì zhèli hěn zhòngyào de yí ge jiérì.',ex_vn:'Lễ hội bia cũng là một ngày lễ rất quan trọng ở đây.',
   exList:[
     {zh:'除了春节、中秋节以外，啤酒节也是这里很重要的一个节日。',py:'Chúle Chūnjié, Zhōngqiū jié yǐwài, píjiǔ jié yě shì zhèli hěn zhòngyào de yí ge jiérì.',vn:'Ngoài Tết Nguyên đán, Tết Trung thu ra, lễ hội bia cũng là một ngày lễ rất quan trọng ở đây.'},
     {zh:'今天是中秋节，我们一起去看个电影吧。',py:'Jīntiān shì Zhōngqiū jié, wǒmen yìqǐ qù kàn ge diànyǐng ba.',vn:'Hôm nay là Tết Trung thu, chúng ta cùng đi xem phim đi.'},
     {zh:'春节是中国最重要的节日。',py:'Chūnjié shì Zhōngguó zuì zhòngyào de jiérì.',vn:'Tết Nguyên đán là ngày lễ quan trọng nhất của Trung Quốc.'},
   ],
   hanzi:[
     {c:'节',p:'jié',type:'上下结构 · Trên-dưới',st:5,ord:'⺮ trên → 卩 dưới (giản thể)',rad:'⺮ (trúc – tre)',mean:'đốt tre, ngày lễ',
      tip:'⺮(tre) + 卩(đốt, khớp) → ĐỐT TRE là điểm chia đoạn; mở rộng nghĩa NGÀY LỄ chia thời gian trong năm.',
      cf:'即 (jí – "ngay lập tức", có 艮 thay vì ⺮")',w:'节日 / 春节 / 节目'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tết Trung thu là ngày lễ tôi thích nhất.',answer:'中秋节是我最喜欢的节日。',answerPy:'Zhōngqiū jié shì wǒ zuì xǐhuan de jiérì.',
      note:'最 + Adj diễn tả mức độ cao nhất tuyệt đối.'},
     {promptLang:'vi',prompt:'Ngoài Tết Nguyên đán ra, tôi còn thích Tết Trung thu.',answer:'除了春节以外，我还喜欢中秋节。',answerPy:'Chúle Chūnjié yǐwài, wǒ hái xǐhuan Zhōngqiū jié.',
      note:'除了……还…… diễn tả bổ sung thêm điều khác.'},
   ]},

  {n:17,zh:'举行',py:'jǔxíng',pos:'Động từ',vn:'tổ chức (hội họp, thi đấu...)',em:'🎪',lesson:4,
   explain:['Thực hiện một sự kiện, hoạt động có quy mô.'],
   usage:'Động từ, mang tân ngữ là danh từ chỉ sự kiện: 举行比赛, 举行节日.',
   collo:['举行比赛','举行啤酒节','举行会议'],
   ex_zh:'这个地方每年夏天都要举行一次啤酒节。',ex_py:'Zhège dìfang měi nián xiàtiān dōu yào jǔxíng yí cì píjiǔ jié.',ex_vn:'Nơi này mỗi năm vào mùa hè đều tổ chức một lần lễ hội bia.',
   exList:[
     {zh:'这个地方每年夏天都要举行一次啤酒节。',py:'Zhège dìfang měi nián xiàtiān dōu yào jǔxíng yí cì píjiǔ jié.',vn:'Nơi này mỗi năm vào mùa hè đều tổ chức một lần lễ hội bia.'},
     {zh:'学校每年都举行一次运动会。',py:'Xuéxiào měi nián dōu jǔxíng yí cì yùndònghuì.',vn:'Trường học mỗi năm đều tổ chức một lần hội thao.'},
     {zh:'比赛马上就要开始了。',py:'Bǐsài mǎshàng jiù yào kāishǐ le.',vn:'Cuộc thi sắp bắt đầu rồi.'},
   ],
   hanzi:[
     {c:'举',p:'jǔ',type:'上下结构 · Trên-dưới',st:9,ord:'⺍ trên → 与 dưới (giản thể)',rad:'丶 (điểm)',mean:'nâng lên, tổ chức',
      tip:'Hình ảnh hai tay cùng NÂNG một vật lên cao → NÂNG LÊN; mở rộng nghĩa TỔ CHỨC (dựng nên sự kiện).',
      cf:'兴 (xīng – "hưng thịnh", hình dáng gần giống")',w:'举行 / 举手'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty mỗi năm đều tổ chức một buổi tiệc năm mới.',answer:'公司每年都举行一次新年晚会。',answerPy:'Gōngsī měi nián dōu jǔxíng yí cì xīnnián wǎnhuì.',
      note:'每年都 diễn tả tính lặp lại hàng năm.'},
     {promptLang:'vi',prompt:'Nếu trường tổ chức thi đấu thì tôi nhất định tham gia.',answer:'如果学校举行比赛，我就一定参加。',answerPy:'Rúguǒ xuéxiào jǔxíng bǐsài, wǒ jiù yídìng cānjiā.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:18,zh:'世界',py:'shìjiè',pos:'Danh từ',vn:'thế giới',em:'🌍',lesson:4,
   explain:['Toàn bộ trái đất và mọi quốc gia, con người trên đó.'],
   usage:'Danh từ; đi cùng 上: 世界上.',
   collo:['世界上','了解世界','世界各地'],
   ex_zh:'你可以喝到世界上不同地方的啤酒。',ex_py:'Nǐ kěyǐ hēdào shìjiè shang bùtóng dìfang de píjiǔ.',ex_vn:'Bạn có thể uống được bia từ nhiều nơi khác nhau trên thế giới.',
   exList:[
     {zh:'在啤酒节上，你可以喝到世界上不同地方的啤酒。',py:'Zài píjiǔ jié shang, nǐ kěyǐ hēdào shìjiè shang bùtóng dìfang de píjiǔ.',vn:'Tại lễ hội bia, bạn có thể uống được bia từ nhiều nơi khác nhau trên thế giới.'},
     {zh:'你想不想了解世界各个地方的啤酒文化？',py:'Nǐ xiǎng bu xiǎng liǎojiě shìjiè gège dìfang de píjiǔ wénhuà?',vn:'Bạn có muốn tìm hiểu văn hóa bia của các nơi trên thế giới không?'},
     {zh:'这是一个美丽的世界。',py:'Zhè shì yí ge měilì de shìjiè.',vn:'Đây là một thế giới xinh đẹp.'},
   ],
   hanzi:[
     {c:'界',p:'jiè',type:'上下结构 · Trên-dưới',st:9,ord:'田 trên → 介 dưới',rad:'田 (điền)',mean:'ranh giới, giới hạn',
      tip:'田(ruộng) + 介(ở giữa, phân chia) → đường phân chia GIỮA các thửa RUỘNG = RANH GIỚI; 世(đời)+界(ranh giới) = THẾ GIỚI.',
      cf:'介 (jiè – "giới thiệu", không có bộ 田")',w:'世界 / 世界上'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đây là một thế giới thú vị.',answer:'这是一个有意思的世界。',answerPy:'Zhè shì yí ge yǒuyìsi de shìjiè.',
      note:'一个 + Adj + N cấu trúc miêu tả.'},
     {promptLang:'vi',prompt:'Nếu bạn muốn hiểu thế giới thì nên đi du lịch nhiều hơn.',answer:'如果你想了解世界，就应该多去旅游。',answerPy:'Rúguǒ nǐ xiǎng liǎojiě shìjiè, jiù yīnggāi duō qù lǚyóu.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 应该 đã học ở Bài 13).'},
   ]},

  {n:19,zh:'街道',py:'jiēdào',pos:'Danh từ',vn:'đường, đường phố',em:'🛣️',lesson:4,
   explain:['Con đường trong khu vực đô thị, có nhà cửa hai bên.'],
   usage:'Danh từ; đi cùng 两边: 街道两边.',
   collo:['街道两边','干净的街道','那条街道'],
   ex_zh:'你还可以在街道两边看到世界上不同地方的歌舞。',ex_py:'Nǐ hái kěyǐ zài jiēdào liǎng biān kàndào shìjiè shang bùtóng dìfang de gēwǔ.',ex_vn:'Bạn còn có thể thấy các điệu múa hát từ nhiều nơi khác nhau trên thế giới ở hai bên đường phố.',
   exList:[
     {zh:'除了喝啤酒，你还可以在街道两边看到世界上不同地方的歌舞。',py:'Chúle hē píjiǔ, nǐ hái kěyǐ zài jiēdào liǎng biān kàndào shìjiè shang bùtóng dìfang de gēwǔ.',vn:'Ngoài uống bia ra, bạn còn có thể thấy các điệu múa hát từ nhiều nơi khác nhau trên thế giới ở hai bên đường phố.'},
     {zh:'那儿的街道除了很干净以外，也很安静。',py:'Nàr de jiēdào chúle hěn gānjìng yǐwài, yě hěn ānjìng.',vn:'Đường phố ở đó ngoài rất sạch sẽ ra, cũng rất yên tĩnh.'},
     {zh:'我们新买的房子就在刚才过去的那条街上。',py:'Wǒmen xīn mǎi de fángzi jiù zài gāngcái guòqu de nà tiáo jiē shang.',vn:'Căn nhà chúng tôi mới mua chính là ở con đường vừa đi qua đó.'},
   ],
   hanzi:[
     {c:'街',p:'jiē',type:'左中右结构 · Trái-giữa-phải',st:12,ord:'彳 trái → 圭 giữa → 亍 phải',rad:'行 (hành)',mean:'phố, đường',
      tip:'彳(bước chân trái) + 圭(đất bằng) + 亍(bước chân phải) → con đường rộng để mọi người ĐI LẠI = PHỐ, ĐƯỜNG.',
      cf:'衔 (xián – "ngậm", có 金 thay vì 圭")',w:'街道 / 上街'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà anh ấy chính là ở con đường phía trước đó.',answer:'他家就在前面那条街道上。',answerPy:'Tā jiā jiù zài qiánmiàn nà tiáo jiēdào shang.',
      note:'条 là lượng từ dùng cho đường phố.'},
     {promptLang:'vi',prompt:'Nếu đường phố sạch sẽ và yên tĩnh thì tôi rất thích sống ở đó.',answer:'如果街道又干净又安静，我就很喜欢住在那儿。',answerPy:'Rúguǒ jiēdào yòu gānjìng yòu ānjìng, wǒ jiù hěn xǐhuan zhù zài nàr.',
      note:'又……又…… diễn tả hai đặc điểm cùng tồn tại.'},
   ]},

  {n:20,zh:'各',py:'gè',pos:'Đại từ',vn:'mỗi',em:'🔢',lesson:4,
   explain:['Chỉ từng cái một trong một tập hợp, không sót cái nào.'],
   usage:'各 + [lượng từ] + N: 各个地方, 各种.',
   collo:['各个地方','各种','世界各地'],
   ex_zh:'你想不想了解世界各个地方的啤酒文化？',ex_py:'Nǐ xiǎng bu xiǎng liǎojiě shìjiè gège dìfang de píjiǔ wénhuà?',ex_vn:'Bạn có muốn tìm hiểu văn hóa bia của các nơi trên thế giới không?',
   exList:[
     {zh:'你想不想了解世界各个地方的啤酒文化？',py:'Nǐ xiǎng bu xiǎng liǎojiě shìjiè gège dìfang de píjiǔ wénhuà?',vn:'Bạn có muốn tìm hiểu văn hóa bia của các nơi trên thế giới không?'},
     {zh:'各个国家的文化都不一样。',py:'Gège guójiā de wénhuà dōu bù yíyàng.',vn:'Văn hóa của mỗi quốc gia đều khác nhau.'},
     {zh:'来这里的啤酒节看看吧。',py:'Lái zhèli de píjiǔ jié kànkan ba.',vn:'Hãy đến lễ hội bia ở đây xem thử nhé.'},
   ],
   hanzi:[
     {c:'各',p:'gè',type:'上下结构 · Trên-dưới',st:6,ord:'夂 trên → 口 dưới',rad:'口 (khẩu)',mean:'mỗi',
      tip:'夂(bước chân đi đến) + 口(miệng, cửa vào) → mỗi người đi đến MỖI cửa riêng = MỖI, TỪNG.',
      cf:'名 (míng – "tên", có 夕 thay vì 夂")',w:'各 / 各种 / 各个'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thời tiết của mỗi mùa đều khác nhau.',answer:'各个季节的天气都不一样。',answerPy:'Gège jìjié de tiānqì dōu bù yíyàng.',
      note:'各个 + N + 都 diễn tả từng cái riêng biệt.'},
     {promptLang:'vi',prompt:'Nếu bạn muốn hiểu văn hóa các nước thì nên đi du lịch nhiều nơi.',answer:'如果你想了解各国文化，就应该多去几个地方旅游。',answerPy:'Rúguǒ nǐ xiǎng liǎojiě gè guó wénhuà, jiù yīnggāi duō qù jǐ ge dìfang lǚyóu.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:21,zh:'文化',py:'wénhuà',pos:'Danh từ',vn:'văn hóa',em:'🏛️',lesson:4,
   explain:['Toàn bộ giá trị vật chất, tinh thần do con người tạo ra trong lịch sử.'],
   usage:'Danh từ; đi cùng động từ 了解: 了解文化.',
   collo:['了解文化','啤酒文化','中国文化'],
   ex_zh:'你想不想了解世界各个地方的啤酒文化？',ex_py:'Nǐ xiǎng bu xiǎng liǎojiě shìjiè gège dìfang de píjiǔ wénhuà?',ex_vn:'Bạn có muốn tìm hiểu văn hóa bia của các nơi trên thế giới không?',
   exList:[
     {zh:'你想不想了解世界各个地方的啤酒文化？',py:'Nǐ xiǎng bu xiǎng liǎojiě shìjiè gège dìfang de píjiǔ wénhuà?',vn:'Bạn có muốn tìm hiểu văn hóa bia của các nơi trên thế giới không?'},
     {zh:'各个国家的文化都不一样。',py:'Gège guójiā de wénhuà dōu bù yíyàng.',vn:'Văn hóa của mỗi quốc gia đều khác nhau.'},
     {zh:'我对中国文化很感兴趣。',py:'Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.',vn:'Tôi rất hứng thú với văn hóa Trung Quốc.'},
   ],
   hanzi:[
     {c:'化',p:'huà',type:'左右结构 · Trái-phải',st:4,ord:'亻 trái → 匕 phải',rad:'亻 (nhân – người)',mean:'biến đổi',
      tip:'亻(người đứng) + 匕(người nằm, đảo ngược) → hình ảnh người BIẾN ĐỔI tư thế = BIẾN ĐỔI; 文(văn tự)+化(biến đổi) = VĂN HÓA giáo hoá con người.',
      cf:'花 (huā – "hoa", có bộ 艹")',w:'文化 / 变化'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi rất hứng thú với văn hóa lễ hội bia.',answer:'我对啤酒节的文化很感兴趣。',answerPy:'Wǒ duì píjiǔ jié de wénhuà hěn gǎn xìngqù.',
      note:'对……感兴趣 diễn tả sự hứng thú.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn đến lễ hội bia thì có thể hiểu văn hóa ở đây.',answer:'只要你来啤酒节，就可以了解这里的文化。',answerPy:'Zhǐyào nǐ lái píjiǔ jié, jiù kěyǐ liǎojiě zhèli de wénhuà.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 节日 đã học trong bài này).'},
   ]},
];

const wuData = [
  {img:'🎓',label:'留学',py:'liú xué',letter:'A'},
  {img:'📰',label:'新闻',py:'xīnwén',letter:'B'},
  {img:'🌐',label:'上网',py:'shàng wǎng',letter:'C'},
  {img:'🛣️',label:'街道',py:'jiēdào',letter:'D'},
  {img:'🌍',label:'世界',py:'shìjiè',letter:'E'},
  {img:'🎉',label:'节日',py:'jiérì',letter:'F'},
];

var dialogData = [
  {scene:'在办公室 · Trong văn phòng',
   preQuiz:[
     {q:'大山来中国留学多久了？',opts:['两年','一年','三年'],ans:0},
     {q:'老师觉得大山的作业写得怎么样？',opts:['除了一个句子不清楚，其他都没问题','很差','完全不对'],ans:0},
     {q:'以后有不明白的地方，大山可以怎么做？',opts:['打电话或发电子邮件','来办公室','写信'],ans:0},
   ],
   lines:[
     {sp:0,zh:'老师，我来中国留学两年了，但是我的汉语水平提高得一点儿也不快啊。',py:'Lǎoshī, wǒ lái Zhōngguó liú xué liǎng nián le, dànshì wǒ de Hànyǔ shuǐpíng tígāo de yìdiǎnr yě bú kuài a.',vn:'Thầy ơi, em đến Trung Quốc du học được hai năm rồi, nhưng trình độ tiếng Trung của em tiến bộ chẳng nhanh chút nào cả.'},
     {sp:1,zh:'你每天认真学习，做练习、完成作业，一直不错啊。',py:'Nǐ měi tiān rènzhēn xuéxí, zuò liànxí, wán chéng zuòyè, yìzhí búcuò a.',vn:'Em ngày nào cũng học chăm chỉ, làm bài tập, hoàn thành bài về nhà, vẫn tốt mà.'},
     {sp:0,zh:'这是我昨天的作业，您帮我看看对不对。',py:'Zhè shì wǒ zuótiān de zuòyè, nín bāng wǒ kànkan duì bu duì.',vn:'Đây là bài tập hôm qua của em, thầy xem giúp em đúng hay sai.'},
     {sp:1,zh:'写得不错，除了这个句子意思有些不清楚外，其他都没什么问题。',py:'Xiě de búcuò, chúle zhège jùzi yìsi yǒuxiē bù qīngchu wài, qítā dōu méi shénme wèntí.',vn:'Viết khá tốt, ngoài câu này ý nghĩa hơi không rõ ràng ra, còn lại đều không có vấn đề gì.'},
     {sp:0,zh:'谢谢老师！',py:'Xièxie lǎoshī!',vn:'Em cảm ơn thầy!'},
     {sp:1,zh:'以后有什么不明白的地方，可以给我打电话或者发电子邮件。',py:'Yǐhòu yǒu shénme bù míngbai de dìfang, kěyǐ gěi wǒ dǎ diànhuà huòzhě fā diànzǐ yóujiàn.',vn:'Sau này có chỗ nào không hiểu, em có thể gọi điện hoặc gửi email cho thầy.'},
   ]},
  {scene:'在教室 · Trong lớp học',
   preQuiz:[
     {q:'谁还没来上课？',opts:['小云','大山','老师'],ans:0},
     {q:'小云为什么还没来？',opts:['她在路上呢','她生病了','她忘记了'],ans:0},
     {q:'学生们对今天的比赛有信心吗？',opts:['一定能拿第一','没有信心','不知道'],ans:0},
   ],
   lines:[
     {sp:0,zh:'老师，除了小云，其他人都来了。',py:'Lǎoshī, chúle Xiǎoyún, qítā rén dōu lái le.',vn:'Thầy ơi, ngoài bạn Vân ra, những người khác đều đến rồi.'},
     {sp:1,zh:'比赛马上就要开始了，小云怎么还没来？',py:'Bǐsài mǎshàng jiù yào kāishǐ le, Xiǎoyún zěnme hái méi lái?',vn:'Cuộc thi sắp bắt đầu rồi, sao bạn Vân vẫn chưa đến?'},
     {sp:0,zh:'刚才给她打电话了，她在路上呢。',py:'Gāngcái gěi tā dǎ diànhuà le, tā zài lùshang ne.',vn:'Vừa nãy gọi điện cho bạn ấy rồi, bạn ấy đang trên đường đến.'},
     {sp:1,zh:'不等她了，我先给大家讲讲这次比赛的要求和一些需要注意的地方。',py:'Bù děng tā le, wǒ xiān gěi dàjiā jiǎngjiang zhè cì bǐsài de yāoqiú hé yìxiē xūyào zhù yì de dìfang.',vn:'Không đợi bạn ấy nữa, thầy nói trước cho các em về yêu cầu của cuộc thi lần này và một số điều cần chú ý.'},
     {sp:0,zh:'老师，您放心，今天的比赛我们一定能拿第一。',py:'Lǎoshī, nín fàngxīn, jīntiān de bǐsài wǒmen yídìng néng ná dì yī.',vn:'Thầy ơi, thầy yên tâm, cuộc thi hôm nay chúng em chắc chắn giành được giải nhất.'},
   ]},
  {scene:'在休息室 · Trong phòng giải lao',
   preQuiz:[
     {q:'除了看新闻，人们在网上还能做什么？',opts:['听歌、看电影、买东西','打篮球','做饭'],ans:0},
     {q:'小刚从网上买的衣服后来怎么样了？',opts:['给弟弟了','退货了','自己穿了'],ans:0},
     {q:'小刚弟弟满意吗？',opts:['满意极了','不满意','不知道'],ans:0},
   ],
   lines:[
     {sp:1,zh:'现在用电脑上网真方便啊！',py:'Xiànzài yòng diànnǎo shàng wǎng zhēn fāngbiàn a!',vn:'Bây giờ dùng máy tính lên mạng tiện thật đấy!'},
     {sp:0,zh:'是啊，除了看新闻，人们还可以在网上听歌、看电影、买东西。',py:'Shì a, chúle kàn xīnwén, rénmen hái kěyǐ zài wǎngshang tīng gē, kàn diànyǐng, mǎi dōngxi.',vn:'Đúng vậy, ngoài xem tin tức ra, mọi người còn có thể nghe nhạc, xem phim, mua đồ trên mạng.'},
     {sp:1,zh:'对了，你从网上买的那件衣服呢？怎么没见你穿？',py:'Duìle, nǐ cóng wǎngshang mǎi de nà jiàn yīfu ne? Zěnme méi jiàn nǐ chuān?',vn:'À đúng rồi, cái áo bạn mua trên mạng đâu rồi? Sao không thấy bạn mặc?'},
     {sp:0,zh:'那件衣服我穿着有点儿小，给我弟弟了。',py:'Nà jiàn yīfu wǒ chuānzhe yǒudiǎnr xiǎo, gěi wǒ dìdi le.',vn:'Cái áo đó tôi mặc hơi chật, cho em trai tôi rồi.'},
     {sp:1,zh:'他满意吗？',py:'Tā mǎnyì ma?',vn:'Cậu ấy có hài lòng không?'},
     {sp:0,zh:'不用花钱，还有新衣服穿，他满意极了。',py:'Búyòng huā qián, hái yǒu xīn yīfu chuān, tā mǎnyì jí le.',vn:'Không tốn tiền mà lại có áo mới mặc, cậu ấy hài lòng lắm.'},
   ]},
  {scene:'độc bạch · Tự thuật (giới thiệu lễ hội bia)',
   preQuiz:[
     {q:'啤酒节是什么时候举行？',opts:['每年夏天','每年冬天','每个月'],ans:0},
     {q:'在啤酒节上可以做什么？',opts:['喝到世界各地的啤酒，看歌舞','买衣服','看电影'],ans:0},
     {q:'除了春节、中秋节以外，还有哪个重要节日？',opts:['啤酒节','国庆节','劳动节'],ans:0},
   ],
   lines:[
     {sp:0,zh:'除了春节、中秋节以外，啤酒节也是这里很重要的一个节日。',py:'Chúle Chūnjié, Zhōngqiū jié yǐwài, píjiǔ jié yě shì zhèli hěn zhòngyào de yí ge jiérì.',vn:'Ngoài Tết Nguyên đán, Tết Trung thu ra, lễ hội bia cũng là một ngày lễ rất quan trọng ở đây.'},
     {sp:0,zh:'这个地方每年夏天都要举行一次啤酒节。在啤酒节上，你可以喝到世界上不同地方的啤酒。',py:'Zhège dìfang měi nián xiàtiān dōu yào jǔxíng yí cì píjiǔ jié. Zài píjiǔ jié shang, nǐ kěyǐ hēdào shìjiè shang bùtóng dìfang de píjiǔ.',vn:'Nơi này mỗi năm vào mùa hè đều tổ chức một lần lễ hội bia. Tại lễ hội bia, bạn có thể uống được bia từ nhiều nơi khác nhau trên thế giới.'},
     {sp:0,zh:'除了喝啤酒，你还可以在街道两边看到世界上不同地方的歌舞。',py:'Chúle hē píjiǔ, nǐ hái kěyǐ zài jiēdào liǎng biān kàndào shìjiè shang bùtóng dìfang de gēwǔ.',vn:'Ngoài uống bia ra, bạn còn có thể thấy các điệu múa hát từ nhiều nơi khác nhau trên thế giới ở hai bên đường phố.'},
     {sp:0,zh:'你想不想了解世界各个地方的啤酒文化？来这里的啤酒节看看吧。',py:'Nǐ xiǎng bu xiǎng liǎojiě shìjiè gège dìfang de píjiǔ wénhuà? Lái zhèli de píjiǔ jié kànkan ba.',vn:'Bạn có muốn tìm hiểu văn hóa bia của các nơi trên thế giới không? Hãy đến lễ hội bia ở đây xem thử nhé.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'留学',right:'两年'},
  {left:'提高',right:'水平'},
  {left:'完成',right:'作业'},
  {left:'发',right:'电子邮件'},
  {left:'上',right:'网'},
  {left:'花',right:'钱'},
  {left:'举行',right:'啤酒节'},
  {left:'除了这个句子不清楚外，',right:'其他都没什么问题。'},
  {left:'虽然他来中国留学两年了，',right:'但是水平提高得不快。'},
  {left:'如果你有什么不明白的地方，',right:'就可以给我打电话。'},
  {left:'只要你努力练习，',right:'就能越写越漂亮。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我来中国',blank:'留学',post:'两年了。',hint:'(du học)',ans:'留学'},
  {pre:'我的汉语',blank:'水平',post:'提高得一点儿也不快。',hint:'(trình độ)',ans:'水平'},
  {pre:'汉语水平',blank:'提高',post:'得一点儿也不快。',hint:'(nâng cao, tiến bộ)',ans:'提高'},
  {pre:'每天做',blank:'练习',post:'、完成作业。',hint:'(bài tập)',ans:'练习'},
  {pre:'他认真',blank:'完成',post:'了这次的作业。',hint:'(hoàn thành)',ans:'完成'},
  {pre:'这个',blank:'句子',post:'意思有些不清楚。',hint:'(câu)',ans:'句子'},
  {pre:'',blank:'其他',post:'都没什么问题。',hint:'(cái khác)',ans:'其他'},
  {pre:'可以给我打电话或者',blank:'发',post:'电子邮件。',hint:'(gửi, gửi đi)',ans:'发'},
  {pre:'我先给大家讲讲这次比赛的',blank:'要求',post:'。',hint:'(yêu cầu)',ans:'要求'},
  {pre:'一些需要',blank:'注意',post:'的地方。',hint:'(chú ý)',ans:'注意'},
  {pre:'在家用手机',blank:'上网',post:'也很方便。',hint:'(lên mạng)',ans:'上网'},
  {pre:'',blank:'除了',post:'看新闻，人们还可以在网上听歌。',hint:'(ngoài...ra)',ans:'除了'},
  {pre:'他每天都看',blank:'新闻',post:'，了解世界大事。',hint:'(tin tức)',ans:'新闻'},
  {pre:'不用',blank:'花',post:'钱，还有新衣服穿。',hint:'(tốn, tiêu tốn)',ans:'花'},
  {pre:'他满意',blank:'极了',post:'。',hint:'(hết sức, cực kỳ)',ans:'极了'},
  {pre:'啤酒节也是这里很重要的一个',blank:'节日',post:'。',hint:'(ngày lễ)',ans:'节日'},
  {pre:'每年夏天都要',blank:'举行',post:'一次啤酒节。',hint:'(tổ chức)',ans:'举行'},
  {pre:'你可以喝到',blank:'世界',post:'上不同地方的啤酒。',hint:'(thế giới)',ans:'世界'},
  {pre:'你还可以在',blank:'街道',post:'两边看到歌舞。',hint:'(đường, đường phố)',ans:'街道'},
  {pre:'世界',blank:'各',post:'个地方的啤酒文化。',hint:'(mỗi)',ans:'各'},
  {pre:'了解世界各个地方的啤酒',blank:'文化',post:'。',hint:'(văn hóa)',ans:'文化'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','每天','认真','学习','，','做','练习','、','完成','作业','。'],ans:'你每天认真学习，做练习、完成作业。',audio:'你每天认真学习，做练习、完成作业。'},
  {words:['除了','这次','的','练习','有点儿','难','以外','，','其他','都','没','什么','问题','。'],ans:'除了这次的练习有点儿难以外，其他都没什么问题。',audio:'除了这次的练习有点儿难以外，其他都没什么问题。'},
  {words:['在','图书馆','用','电脑','上网','很','方便','。'],ans:'在图书馆用电脑上网很方便。',audio:'在图书馆用电脑上网很方便。'},
  {words:['这个','菜','好吃','极了','。'],ans:'这个菜好吃极了。',audio:'这个菜好吃极了。'},
  {words:['虽然','妹妹','每天','认真','做','练习','，','但是','句子','写','得','还','不','够','好','。'],ans:'虽然妹妹每天认真做练习，但是句子写得还不够好。',audio:'虽然妹妹每天认真做练习，但是句子写得还不够好。'},
  {words:['如果','你','有','什么','不明白','的','地方','，','就','可以','给','我','打电话','。'],ans:'如果你有什么不明白的地方，就可以给我打电话。',audio:'如果你有什么不明白的地方，就可以给我打电话。'},
  {words:['只要','你','努力','练习','，','就','能','越','写','越','漂亮','。'],ans:'只要你努力练习，就能越写越漂亮。',audio:'只要你努力练习，就能越写越漂亮。'},
  {words:['除了','国庆节','、','劳动节','以外','，','元旦','也','是','这里','很','重要','的','一个','节日','。'],ans:'除了国庆节、劳动节以外，元旦也是这里很重要的一个节日。',audio:'除了国庆节、劳动节以外，元旦也是这里很重要的一个节日。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'除了这个汉字，别的汉字我不都认识。',
   opts:['除了这个汉字以外，别的汉字我都认识。','除了这个汉字，别的汉字我不都认识。','除了这个汉字以外，别的汉字我都不认识。','我除了这个汉字以外都认识别的汉字不。'],ans:0,
   exp:'Cấu trúc 除了……以外，都…… không đi cùng phủ định 不都; phải dùng 都 khẳng định.'},
  {wrong:'这次的比赛极了有意思。',
   opts:['这次的比赛有意思极了。','这次的比赛极了有意思。','极了这次的比赛有意思。','这次极了的比赛有意思。'],ans:0,
   exp:'极了 phải đứng SAU tính từ/động từ tâm lý (有意思), không đặt trước.'},
  {wrong:'除了老师其他学生进教室了都。',
   opts:['除了老师，其他学生都进教室了。','除了老师其他学生进教室了都。','除了老师都其他学生进教室了。','其他学生除了老师进教室了都。'],ans:0,
   exp:'都 phải đứng NGAY TRƯỚC động từ (进教室了), không đặt cuối câu.'},
  {wrong:'你写得很好，问题没什么。',
   opts:['你写得很好，没什么问题。','你写得很好，问题没什么。','你写得很好，什么没问题。','你写得很好，没问题什么。'],ans:0,
   exp:'什么 làm đại từ chỉ thị phải đứng TRƯỚC danh từ (问题), theo cấu trúc 没+什么+danh từ.'},
  {wrong:'除了游泳，她还爬山喜欢以外。',
   opts:['除了游泳以外，她还喜欢爬山。','除了游泳，她还爬山喜欢以外。','她除了游泳以外还爬山喜欢。','除了游泳以外还喜欢，她爬山。'],ans:0,
   exp:'以外 phải đứng NGAY SAU phần bị loại trừ (游泳); động từ+tân ngữ (喜欢爬山) không được đảo.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'老师觉得大山的作业写得怎么样？',
     q_vn:'Thầy giáo thấy bài tập của Đại Sơn viết thế nào?',
     hint:'除了一个句子意思不清楚外，其他都没问题',
     sample:'老师觉得大山写得不错，除了这个句子意思有些不清楚外，其他都没什么问题。',
     sample_vn:'Thầy giáo thấy Đại Sơn viết khá tốt, ngoài câu này ý nghĩa hơi không rõ ràng ra, còn lại đều không có vấn đề gì.',
     note:'除了……都…… diễn tả loại trừ một phần (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'小云为什么还没来上课？',
     q_vn:'Vì sao bạn Vân vẫn chưa đến lớp?',
     hint:'刚打电话了，她在路上呢',
     sample:'小云还没来，因为她在路上呢，刚才有人给她打电话了。',
     sample_vn:'Vân vẫn chưa đến, vì bạn ấy đang trên đường, vừa nãy có người gọi điện cho bạn ấy rồi.',
     note:'在路上呢 diễn tả hành động đang diễn ra.'},
    {q_zh:'小刚从网上买的衣服后来怎么样了？',
     q_vn:'Cái áo Tiểu Cương mua trên mạng sau đó thế nào?',
     hint:'穿着有点儿小，给弟弟了，弟弟满意极了',
     sample:'小刚从网上买的衣服穿着有点儿小，就给弟弟了，弟弟不用花钱还有新衣服穿，满意极了。',
     sample_vn:'Cái áo Tiểu Cương mua trên mạng mặc hơi chật, nên cho em trai rồi, em trai không tốn tiền mà lại có áo mới mặc, hài lòng lắm.',
     note:'极了 diễn tả mức độ cực điểm (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'在啤酒节上可以做什么？',
     q_vn:'Tại lễ hội bia có thể làm gì?',
     hint:'喝到世界各地的啤酒，看到不同地方的歌舞',
     sample:'在啤酒节上，你可以喝到世界上不同地方的啤酒，还可以在街道两边看到世界上不同地方的歌舞。',
     sample_vn:'Tại lễ hội bia, bạn có thể uống được bia từ nhiều nơi khác nhau trên thế giới, còn có thể thấy các điệu múa hát từ nhiều nơi khác nhau trên thế giới ở hai bên đường phố.',
     note:'除了……还可以…… diễn tả bổ sung thêm điều khác.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Anh trai tôi đi Hàn Quốc du học ba năm rồi.', zh:'我哥哥去韩国留学三年了。', py:'Wǒ gēge qù Hánguó liú xué sān nián le.'},
  {vi:'Ngoài câu này ra, còn lại đều không có vấn đề gì.', zh:'除了这个句子以外，其他都没什么问题。', py:'Chúle zhège jùzi yǐwài, qítā dōu méi shénme wèntí.'},
  {vi:'Ngoài mì ra, các món khác cô ấy đều không thích.', zh:'除了面条以外，其他的菜她都不喜欢。', py:'Chúle miàntiáo yǐwài, qítā de cài tā dōu bù xǐhuan.'},
  {vi:'Anh ấy tối nào cũng dùng điện thoại lên mạng trò chuyện.', zh:'他每天晚上都用手机上网聊天。', py:'Tā měi tiān wǎnshang dōu yòng shǒujī shàng wǎng liáotiān.'},
  {vi:'Bức tranh này đẹp lắm.', zh:'这张画漂亮极了。', py:'Zhè zhāng huà piàoliang jí le.'},
  {vi:'Trường chúng tôi mỗi năm mùa thu đều tổ chức một lần hội sách.', zh:'我们学校每年秋天都要举行一次读书节。', py:'Wǒmen xuéxiào měi nián qiūtiān dōu yào jǔxíng yí cì dúshū jié.'},
  {vi:'Ở đây bạn có thể nếm được món ăn từ nhiều nơi khác nhau trên thế giới.', zh:'在这里你可以吃到世界上不同地方的美食。', py:'Zài zhèli nǐ kěyǐ chīdào shìjiè shang bùtóng dìfang de měishí.'},
  {vi:'Bạn có muốn tìm hiểu văn hóa ẩm thực của các nước trên thế giới không?', zh:'你想不想了解世界各个国家的饮食文化？', py:'Nǐ xiǎng bu xiǎng liǎojiě shìjiè gège guójiā de yǐnshí wénhuà?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tuy anh ấy đã hoàn thành bài tập nhưng vẫn còn vài câu chưa rõ nghĩa.', zh:'虽然他完成了作业，但是还有几个句子意思不清楚。', py:'Suīrán tā wánchéngle zuòyè, dànshì hái yǒu jǐ ge jùzi yìsi bù qīngchu.'},
  {vi:'Nếu bạn có việc gấp thì có thể gọi điện cho tôi bất cứ lúc nào.', zh:'如果你有急事，随时都可以给我打电话。', py:'Rúguǒ nǐ yǒu jíshì, suíshí dōu kěyǐ gěi wǒ dǎ diànhuà.'},
  {vi:'Chỉ cần bạn nghe nhiều nói nhiều thì có thể nâng cao trình độ nghe.', zh:'只要你多听多说，就能提高听力水平。', py:'Zhǐyào nǐ duō tīng duō shuō, jiù néng tígāo tīnglì shuǐpíng.'},
  {vi:'Ngoài chơi bóng rổ ra, anh ấy còn thích chạy bộ.', zh:'除了打篮球以外，他还喜欢跑步。', py:'Chúle dǎ lánqiú yǐwài, tā hái xǐhuan pǎobù.'},
  {vi:'Ngoài tiếng Việt ra, tôi còn biết nói tiếng Nhật.', zh:'除了越南语以外，我还会说日语。', py:'Chúle Yuènányǔ yǐwài, wǒ hái huì shuō Rìyǔ.'},
  {vi:'Con mèo nhỏ của tôi thông minh lắm.', zh:'我的小猫聪明极了。', py:'Wǒ de xiǎomāo cōngming jí le.'},
  {vi:'Câu hỏi này khó lắm.', zh:'这道题难极了。', py:'Zhè dào tí nán jí le.'},
  {vi:'Chiếc áo đó tôi thích lắm.', zh:'那件衣服我喜欢极了。', py:'Nà jiàn yīfu wǒ xǐhuan jí le.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 15)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-15/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'男1', pre:'', blank:'你现在打篮球的水平越来越高了', post:'。',
       py:'Nǐ xiànzài dǎ lánqiú de shuǐpíng yuè lái yuè gāo le.', vn:'Trình độ chơi bóng rổ của bạn bây giờ ngày càng cao rồi.'},
      {speaker:'男2', pre:'', blank:'我觉得没什么提高，还跟以前一样', post:'。',
       py:'Wǒ juéde méi shénme tígāo, hái gēn yǐqián yíyàng.', vn:'Tôi thấy không tiến bộ gì cả, vẫn giống như trước đây.'},
    ]},
    {num:2, lines:[
      {speaker:'男', pre:'', blank:'你要发电子邮件吗？我去把电脑打开', post:'。',
       py:'Nǐ yào fā diànzǐ yóujiàn ma? Wǒ qù bǎ diànnǎo dǎkāi.', vn:'Bạn cần gửi email à? Tôi bật máy tính lên đây.'},
      {speaker:'女', pre:'不用，', blank:'我的手机能上网，用手机也能发', post:'。',
       py:'Búyòng, wǒ de shǒujī néng shàng wǎng, yòng shǒujī yě néng fā.', vn:'Không cần, điện thoại tôi lên mạng được, dùng điện thoại cũng gửi được.'},
    ]},
    {num:3, lines:[
      {speaker:'男1', pre:'', blank:'你们这儿除了鱼以外，还有什么好吃的吗', post:'？',
       py:'Nǐmen zhèr chúle yú yǐwài, hái yǒu shénme hǎochī de ma?', vn:'Chỗ các bạn ngoài cá ra, còn món gì ngon không?'},
      {speaker:'男2', pre:'', blank:'今天的羊肉也很新鲜，您要不要来一个', post:'？',
       py:'Jīntiān de yángròu yě hěn xīnxiān, nín yào bu yào lái yí ge?', vn:'Hôm nay thịt cừu cũng rất tươi, anh có muốn dùng một phần không?'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'', blank:'这个月你怎么花了这么多钱', post:'？',
       py:'Zhège yuè nǐ zěnme huāle zhème duō qián?', vn:'Tháng này sao bạn tiêu nhiều tiền thế?'},
      {speaker:'女', pre:'', blank:'我记得我只买了几件衣服，其他也没买什么啊', post:'。',
       py:'Wǒ jìde wǒ zhǐ mǎile jǐ jiàn yīfu, qítā yě méi mǎi shénme a.', vn:'Tôi nhớ tôi chỉ mua vài cái áo, cái khác cũng chẳng mua gì đâu.'},
    ]},
    {num:5, lines:[
      {speaker:'男', pre:'', blank:'看什么呢？今天报纸上有什么新闻吗', post:'？',
       py:'Kàn shénme ne? Jīntiān bàozhǐ shang yǒu shénme xīnwén ma?', vn:'Xem gì thế? Hôm nay báo có tin tức gì không?'},
      {speaker:'女', pre:'', blank:'我没看新闻，我看看今天天气怎么样', post:'。',
       py:'Wǒ méi kàn xīnwén, wǒ kànkan jīntiān tiānqì zěnme yàng.', vn:'Tôi không xem tin tức, tôi xem thử hôm nay thời tiết thế nào.'},
    ]},
    {num:6, lines:[
      {pre:'叔叔让我花时间认真地读一读这本书，他说书里的故事对他的影响很大。', blank:'他希望我也能从书中学到一些东西', post:'。',
       py:'Shūshu ràng wǒ huā shíjiān rènzhēn de dú yi dú zhè běn shū, tā shuō shū li de gùshi duì tā de yǐngxiǎng hěn dà. Tā xīwàng wǒ yě néng cóng shū zhōng xuédào yìxiē dōngxi.', vn:'Chú bảo tôi dành thời gian đọc kỹ quyển sách này, chú nói câu chuyện trong sách ảnh hưởng đến chú rất lớn. Chú mong tôi cũng học được điều gì đó từ sách.'},
    ]},
    {num:7, lines:[
      {pre:'每天晚上的这个时间，电视上除了新闻以外，没什么其他节目，', blank:'所以弟弟只好上网看自己喜欢的电视节目', post:'。',
       py:'Měi tiān wǎnshang de zhège shíjiān, diànshì shang chúle xīnwén yǐwài, méi shénme qítā jiémù, suǒyǐ dìdi zhǐhǎo shàng wǎng kàn zìjǐ xǐhuan de diànshì jiémù.', vn:'Mỗi tối vào giờ này, tivi ngoài tin tức ra, không có chương trình nào khác, nên em trai đành lên mạng xem chương trình tivi mình thích.'},
    ]},
    {num:8, lines:[
      {pre:'女儿在国外留学三年了，除了每天上课学习以外，', blank:'课后还要去饭馆帮忙洗盘子', post:'。',
       py:'Nǚ\'ér zài guówài liú xué sān nián le, chúle měi tiān shàngkè xuéxí yǐwài, kèhòu hái yào qù fànguǎn bāngmáng xǐ pánzi.', vn:'Con gái đi du học nước ngoài được ba năm rồi, ngoài mỗi ngày lên lớp học ra, sau giờ học còn phải đến nhà hàng phụ rửa bát.'},
      {pre:'虽然每个月我们都给她不少钱，', blank:'但是她说花自己的钱更舒服', post:'。',
       py:'Suīrán měi ge yuè wǒmen dōu gěi tā bù shǎo qián, dànshì tā shuō huā zìjǐ de qián gèng shūfu.', vn:'Tuy mỗi tháng chúng tôi đều cho con không ít tiền, nhưng con nói tiêu tiền tự kiếm được thoải mái hơn.'},
    ]},
    {num:9, lines:[
      {pre:'老方每天都坐在办公室中间的那把椅子上，边看报纸边喝茶，', blank:'报纸上有什么有意思的新闻，他都读给我们听', post:'。',
       py:'Lǎo Fāng měi tiān dōu zuò zài bàngōngshì zhōngjiān de nà bǎ yǐzi shang, biān kàn bàozhǐ biān hē chá, bàozhǐ shang yǒu shénme yǒuyìsi de xīnwén, tā dōu dú gěi wǒmen tīng.', vn:'Lão Phương ngày nào cũng ngồi trên cái ghế giữa văn phòng, vừa đọc báo vừa uống trà, báo có tin tức gì thú vị, ông ấy đều đọc cho chúng tôi nghe.'},
    ]},
    {num:10, lines:[
      {pre:'这个短期班下周日就要结束了，以后我们不能像现在这样经常见面了，', blank:'有什么事情可以给我打电话或者发电子邮件', post:'。',
       py:'Zhège duǎnqībān xià zhōurì jiù yào jiéshù le, yǐhòu wǒmen bù néng xiàng xiànzài zhèyàng jīngcháng jiànmiàn le, yǒu shénme shìqing kěyǐ gěi wǒ dǎ diànhuà huòzhě fā diànzǐ yóujiàn.', vn:'Lớp học ngắn hạn này tuần sau chủ nhật là kết thúc rồi, sau này chúng ta không thể thường xuyên gặp nhau như bây giờ nữa, có việc gì có thể gọi điện hoặc gửi email cho tôi.'},
    ]},
  ],
  mc: [
    {num:11, options:['环境不好','商店很远','夏天很热'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'你在这个地方生活了二十年，对这儿很了解了吧', post:'？', py:'Nǐ zài zhège dìfang shēnghuóle èrshí nián, duì zhèr hěn liǎojiě le ba?', vn:'Bạn sống ở nơi này hai mươi năm rồi, chắc hiểu rõ nơi đây lắm nhỉ?'},
       {speaker:'女', pre:'对，', blank:'这个地方除了夏天太热以外，其他都很好。环境不错，买东西也方便', post:'。', py:'Duì, zhège dìfang chúle xiàtiān tài rè yǐwài, qítā dōu hěn hǎo. Huánjìng búcuò, mǎi dōngxi yě fāngbiàn.', vn:'Đúng vậy, nơi này ngoài mùa hè quá nóng ra, còn lại đều tốt. Môi trường không tệ, mua đồ cũng tiện.'},
     ],
     explain:'男：你在这个地方生活了二十年，对这儿很了解了吧？女：对，这个地方除了夏天太热以外，其他都很好。环境不错，买东西也方便。问：女的觉得这个地方怎么样？ → 夏天很热。'},
    {num:12, options:['裤子','裙子','衬衫'], ans:0,
     lines:[
       {speaker:'女', pre:'', blank:'除了这条裤子以外，还有什么要洗的吗', post:'？', py:'Chúle zhè tiáo kùzi yǐwài, hái yǒu shénme yào xǐ de ma?', vn:'Ngoài cái quần này ra, còn gì cần giặt không?'},
       {speaker:'男', pre:'', blank:'那条裤子是干净的，不用洗，你把那两件衬衫洗了吧', post:'。', py:'Nà tiáo kùzi shì gānjìng de, búyòng xǐ, nǐ bǎ nà liǎng jiàn chènshān xǐ le ba.', vn:'Cái quần đó sạch rồi, không cần giặt, bạn giặt hai cái áo sơ mi đó đi.'},
     ],
     explain:'女：除了这条裤子以外，还有什么要洗的吗？男：那条裤子是干净的，不用洗，你把那两件衬衫洗了吧。问：男的不让洗什么？ → 裤子。'},
    {num:13, options:['有电梯的','没电梯的','安静的'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'除了安静以外，您对房子还有什么要求吗？有电梯的还是没电梯的', post:'？', py:'Chúle ānjìng yǐwài, nín duì fángzi hái yǒu shénme yāoqiú ma? Yǒu diàntī de háishi méi diàntī de?', vn:'Ngoài yên tĩnh ra, anh còn có yêu cầu gì về căn nhà không? Có thang máy hay không có thang máy?'},
       {speaker:'女', pre:'', blank:'我只有这一个要求，你们有这样的房子吗', post:'？', py:'Wǒ zhǐyǒu zhè yí ge yāoqiú, nǐmen yǒu zhèyàng de fángzi ma?', vn:'Tôi chỉ có mỗi một yêu cầu này thôi, các anh có nhà như vậy không?'},
     ],
     explain:'男：除了安静以外，您对房子还有什么要求吗？有电梯的还是没电梯的？女：我只有这一个要求，你们有这样的房子吗？问：女的想要什么样的房子？ → 安静的。'},
    {num:14, options:['不认真','特别漂亮','特别慢'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'你的字写得漂亮极了，你是怎么写的？能教教我吗', post:'？', py:'Nǐ de zì xiě de piàoliang jí le, nǐ shì zěnme xiě de? Néng jiāojiao wǒ ma?', vn:'Chữ bạn viết đẹp lắm, bạn viết thế nào vậy? Dạy tôi được không?'},
       {speaker:'女', pre:'', blank:'开始的时候除了认真学，慢慢写以外，还要努力练习，这样才能越写越快，越写越漂亮', post:'。', py:'Kāishǐ de shíhou chúle rènzhēn xué, mànman xiě yǐwài, hái yào nǔlì liànxí, zhèyàng cái néng yuè xiě yuè kuài, yuè xiě yuè piàoliang.', vn:'Lúc đầu ngoài học nghiêm túc, viết chậm rãi ra, còn phải nỗ lực luyện tập, như vậy mới viết ngày càng nhanh, ngày càng đẹp.'},
     ],
     explain:'男：你的字写得漂亮极了，你是怎么写的？能教教我吗？女：开始的时候除了认真学，慢慢写以外，还要努力练习，这样才能越写越快，越写越漂亮。问：女的写字写得怎么样？ → 特别漂亮。'},
    {num:15, options:['男的','自己','穿得漂亮的人'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'你今天穿得这么漂亮，要见什么重要的人吗', post:'？', py:'Nǐ jīntiān chuān de zhème piàoliang, yào jiàn shénme zhòngyào de rén ma?', vn:'Hôm nay bạn ăn mặc đẹp thế, định gặp người quan trọng nào à?'},
       {speaker:'女', pre:'', blank:'除了你以外，还有更重要的人吗？今天是中秋节，我们一起去看个电影吧', post:'。', py:'Chúle nǐ yǐwài, hái yǒu gèng zhòngyào de rén ma? Jīntiān shì Zhōngqiū jié, wǒmen yìqǐ qù kàn ge diànyǐng ba.', vn:'Ngoài anh ra, còn ai quan trọng hơn nữa chứ? Hôm nay là Tết Trung thu, chúng ta cùng đi xem phim đi.'},
     ],
     explain:'男：你今天穿得这么漂亮，要见什么重要的人吗？女：除了你以外，还有更重要的人吗？今天是中秋节，我们一起去看个电影吧。问：女的觉得谁是最重要的人？ → 男的。'},
    {num:16, options:['喜欢夏天','不喜欢热','四个季节都喜欢'], ans:1,
     lines:[
       {speaker:'女', pre:'大明，', blank:'一年四季，你最喜欢哪个季节', post:'？', py:'Dàmíng, yì nián sì jì, nǐ zuì xǐhuan nǎge jìjié?', vn:'Đại Minh, một năm bốn mùa, bạn thích mùa nào nhất?'},
       {speaker:'男', pre:'我啊，', blank:'除了夏天以外，我都喜欢', post:'。', py:'Wǒ a, chúle xiàtiān yǐwài, wǒ dōu xǐhuan.', vn:'Tôi á, ngoài mùa hè ra, tôi đều thích.'},
       {speaker:'女', pre:'', blank:'能告诉我为什么吗', post:'？', py:'Néng gàosu wǒ wèishénme ma?', vn:'Có thể nói cho tôi biết tại sao không?'},
       {speaker:'男', pre:'', blank:'我怕热啊，这儿的夏天热极了，你不觉得吗', post:'？', py:'Wǒ pà rè a, zhèr de xiàtiān rè jí le, nǐ bù juéde ma?', vn:'Tôi sợ nóng mà, mùa hè ở đây nóng lắm, bạn không thấy vậy sao?'},
     ],
     explain:'女：大明，一年四季，你最喜欢哪个季节？男：我啊，除了夏天以外，我都喜欢。女：能告诉我为什么吗？男：我怕热啊，这儿的夏天热极了，你不觉得吗？问：关于男的，可以知道什么？ → 不喜欢热。'},
    {num:17, options:['环境不错','不太安静','不太干净'], ans:0,
     lines:[
       {speaker:'女', pre:'', blank:'我们新买的房子就在刚才过去的那条街上', post:'。', py:'Wǒmen xīn mǎi de fángzi jiù zài gāngcái guòqu de nà tiáo jiē shang.', vn:'Căn nhà chúng tôi mới mua chính là ở con đường vừa đi qua đó.'},
       {speaker:'男', pre:'', blank:'是吗？我看环境很好', post:'。', py:'Shì ma? Wǒ kàn huánjìng hěn hǎo.', vn:'Vậy à? Tôi thấy môi trường tốt lắm.'},
       {speaker:'女', pre:'没错，', blank:'那儿的街道除了很干净以外，也很安静，附近还有个花园', post:'。', py:'Méi cuò, nàr de jiēdào chúle hěn gānjìng yǐwài, yě hěn ānjìng, fùjìn hái yǒu ge huāyuán.', vn:'Đúng vậy, đường phố ở đó ngoài rất sạch sẽ ra, cũng rất yên tĩnh, gần đó còn có một vườn hoa.'},
       {speaker:'男', pre:'有树有草，好极了！', blank:'真想快点儿搬过去', post:'。', py:'Yǒu shù yǒu cǎo, hǎo jí le! Zhēn xiǎng kuài diǎnr bān guoqu.', vn:'Có cây có cỏ, tốt quá! Thật muốn dọn đến sớm.'},
     ],
     explain:'女：我们新买的房子就在刚才过去的那条街上。男：是吗？我看环境很好。女：没错，那儿的街道除了很干净以外，也很安静，附近还有个花园。男：有树有草，好极了！真想快点儿搬过去。问：关于那个房子，可以知道什么？ → 环境不错。'},
    {num:18, options:['颜色不好','不便宜','太大了'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'这条裙子不大不小，真不错', post:'。', py:'Zhè tiáo qúnzi bú dà bù xiǎo, zhēn búcuò.', vn:'Cái váy này không to không nhỏ, đẹp thật.'},
       {speaker:'女', pre:'', blank:'颜色也好看，我穿着它去参加朋友的生日晚会，一定漂亮极了', post:'。', py:'Yánsè yě hǎokàn, wǒ chuānzhe tā qù cānjiā péngyou de shēngrì wǎnhuì, yídìng piàoliang jí le.', vn:'Màu sắc cũng đẹp, tôi mặc nó đi dự tiệc sinh nhật bạn, chắc chắn đẹp lắm.'},
       {speaker:'男', pre:'', blank:'那你为什么不买？有什么不满意吗', post:'？', py:'Nà nǐ wèishénme bù mǎi? Yǒu shénme bù mǎnyì ma?', vn:'Vậy sao bạn không mua? Có gì không hài lòng à?'},
       {speaker:'女', pre:'', blank:'除了太贵以外，没什么不满意的', post:'。', py:'Chúle tài guì yǐwài, méi shénme bù mǎnyì de.', vn:'Ngoài quá đắt ra, không có gì không hài lòng cả.'},
     ],
     explain:'男：这条裙子不大不小，真不错。女：颜色也好看，我穿着它去参加朋友的生日晚会，一定漂亮极了。男：那你为什么不买？有什么不满意吗？女：除了太贵以外，没什么不满意的。问：女的觉得这件衣服怎么样？ → 不便宜。'},
    {num:19, options:['不能打电话','没有声音','不能上网'], ans:2,
     lines:[
       {speaker:'女', pre:'您好，', blank:'我的手机从前天开始就不能上网了，您帮我看看吧', post:'。', py:'Nín hǎo, wǒ de shǒujī cóng qiántiān kāishǐ jiù bù néng shàng wǎng le, nín bāng wǒ kànkan ba.', vn:'Chào anh, điện thoại tôi từ hôm kia không lên mạng được nữa, anh xem giúp tôi với.'},
       {speaker:'男', pre:'', blank:'除了上不去网以外，还有什么其他问题吗', post:'？', py:'Chúle shàng bú qù wǎng yǐwài, hái yǒu shénme qítā wèntí ma?', vn:'Ngoài không lên mạng được ra, còn vấn đề gì khác không?'},
       {speaker:'女', pre:'', blank:'打电话的时候声音特别小，经常听不清楚', post:'。', py:'Dǎ diànhuà de shíhou shēngyīn tèbié xiǎo, jīngcháng tīng bu qīngchu.', vn:'Lúc gọi điện âm thanh rất nhỏ, thường nghe không rõ.'},
       {speaker:'男', pre:'', blank:'您别着急，我马上帮您看看', post:'。', py:'Nín bié zháojí, wǒ mǎshàng bāng nín kànkan.', vn:'Chị đừng lo, tôi xem giúp chị ngay đây.'},
     ],
     explain:'女：您好，我的手机从前天开始就不能上网了，您帮我看看吧。男：除了上不去网以外，还有什么其他问题吗？女：打电话的时候声音特别小，经常听不清楚。男：您别着急，我马上帮您看看。问：女的的手机有什么问题？ → 不能上网。'},
    {num:20, options:['喝水','上网','打电话'], ans:0,
     lines:[
       {speaker:'男', pre:'您好，', blank:'我在这儿只住了一个星期，怎么这么贵', post:'？', py:'Nín hǎo, wǒ zài zhèr zhǐ zhùle yí ge xīngqī, zěnme zhème guì?', vn:'Chào chị, tôi ở đây chỉ có một tuần, sao đắt thế?'},
       {speaker:'女', pre:'对不起，', blank:'我们宾馆除了水以外，房间里其他吃的、喝的都是要花钱的', post:'。', py:'Duìbuqǐ, wǒmen bīnguǎn chúle shuǐ yǐwài, fángjiān li qítā chī de, hē de dōu shì yào huā qián de.', vn:'Xin lỗi anh, khách sạn chúng tôi ngoài nước ra, đồ ăn đồ uống khác trong phòng đều phải trả tiền.'},
       {speaker:'男', pre:'', blank:'上网和打电话也要自己花钱吗', post:'？', py:'Shàng wǎng hé dǎ diànhuà yě yào zìjǐ huā qián ma?', vn:'Lên mạng và gọi điện cũng phải tự trả tiền à?'},
       {speaker:'女', pre:'对，', blank:'上网每个小时5块，打电话一分钟也是5块', post:'。', py:'Duì, shàng wǎng měi ge xiǎoshí wǔ kuài, dǎ diànhuà yì fēnzhōng yě shì wǔ kuài.', vn:'Đúng vậy, lên mạng mỗi giờ 5 đồng, gọi điện mỗi phút cũng 5 đồng.'},
     ],
     explain:'男：您好，我在这儿只住了一个星期，怎么这么贵？女：对不起，我们宾馆除了水以外，房间里其他吃的、喝的都是要花钱的。男：上网和打电话也要自己花钱吗？女：对，上网每个小时5块，打电话一分钟也是5块。问：在这个宾馆里做什么不用花钱？ → 喝水。'},
  ],
};
