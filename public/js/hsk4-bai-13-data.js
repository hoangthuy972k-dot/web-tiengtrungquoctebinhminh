// ══════════════════════════════════════════
// DATA — HSK4 Bài 13: 喝着茶看京剧 (Uống trà trong lúc xem Kinh kịch)
// Nguồn: HSK标准教程4下 (Giáo trình chuẩn HSK 4 Tập 2 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'京剧',py:'jīngjù',pos:'Danh từ',vn:'Kinh kịch',em:'🎭',lesson:1,
   explain:['Loại hình sân khấu truyền thống nổi tiếng của Trung Quốc, kết hợp hát, nói, diễn, võ.'],
   usage:'唱京剧, 看京剧, 京剧演员.',
   collo:['京剧唱得真专业','听京剧','京剧演员'],
   ex_zh:'小夏，你爷爷京剧唱得真专业，我还以为他是京剧演员呢。',ex_py:'Xiǎo Xià, nǐ yéye jīngjù chàng de zhēn zhuānyè, wǒ hái yǐwéi tā shì jīngjù yǎnyuán ne.',ex_vn:'Tiểu Hạ, ông bạn hát Kinh kịch chuyên nghiệp thật, tôi còn tưởng ông là diễn viên Kinh kịch.',
   exList:[
     {zh:'小夏，你爷爷京剧唱得真专业，我还以为他是京剧演员呢。',py:'Xiǎo Xià, nǐ yéye jīngjù chàng de zhēn zhuānyè, wǒ hái yǐwéi tā shì jīngjù yǎnyuán ne.',vn:'Tiểu Hạ, ông bạn hát Kinh kịch chuyên nghiệp thật, tôi còn tưởng ông là diễn viên Kinh kịch.'},
     {zh:'真没想到你一个来自美国的外国留学生，能把京剧唱得这么好。',py:'Zhēn méi xiǎngdào nǐ yí ge láizì Měiguó de wàiguó liúxuéshēng, néng bǎ jīngjù chàng de zhème hǎo.',vn:'Thật không ngờ một du học sinh đến từ Mỹ như bạn, lại hát Kinh kịch hay như vậy.'},
     {zh:'随着社会的发展，京剧也在改变，以适应不同年龄观众的需要。',py:'Suízhe shèhuì de fāzhǎn, jīngjù yě zài gǎibiàn, yǐ shìyìng bù tóng niánlíng guānzhòng de xūyào.',vn:'Cùng với sự phát triển của xã hội, Kinh kịch cũng đang thay đổi để thích ứng nhu cầu khán giả ở các độ tuổi khác nhau.'},
   ],
   hanzi:[
     {c:'剧',p:'jù',type:'左右结构 · Trái-phải (giản thể)',st:10,ord:'居 trái → 刂 phải',rad:'刂 (đao)',mean:'kịch',
      tip:'Bộ đao 刂 + 居(biểu âm) → nghĩa gốc là DỮ DỘI, sau chỉ KỊCH (diễn mạnh mẽ), kết hợp 京(Bắc Kinh) thành 京剧 = KINH KỊCH.',
      cf:'据 (jù – "căn cứ", bộ 扌)',w:'京剧 / 电视剧 / 剧场'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông bạn hát Kinh kịch chuyên nghiệp thật, tôi còn tưởng ông là diễn viên Kinh kịch.',answer:'你爷爷京剧唱得真专业，我还以为他是京剧演员呢。',answerPy:'Nǐ yéye jīngjù chàng de zhēn zhuānyè, wǒ hái yǐwéi tā shì jīngjù yǎnyuán ne.',
      note:'以为 ôn lại ngữ pháp Bài 4.'},
     {promptLang:'vi',prompt:'Bạn giỏi thật! Ngay cả Kinh kịch mà nhiều người Trung Quốc nghe không hiểu bạn cũng học được.',answer:'你真厉害！竟然连很多中国人都听不懂的京剧也能学会。',answerPy:'Nǐ zhēn lìhai! Jìngrán lián hěn duō Zhōngguó rén dōu tīngbudǒng de jīngjù yě néng xuéhuì.',
      note:'竟然 (Bài 6) + 连……也 (Bài 11) + 厉害 (Bài 11).'},
   ]},

  {n:2,zh:'演员',py:'yǎnyuán',pos:'Danh từ',vn:'diễn viên',em:'🎬',lesson:1,
   explain:['Người biểu diễn trong phim, kịch, sân khấu.'],
   usage:'京剧演员, 专业的演员, 当演员.',
   collo:['京剧演员','专业的演员','有名的演员'],
   ex_zh:'对啊，他本来就是京剧演员，年轻时在我们那儿很有名。',ex_py:'Duì a, tā běnlái jiù shì jīngjù yǎnyuán, niánqīng shí zài wǒmen nàr hěn yǒumíng.',ex_vn:'Đúng vậy, ông vốn là diễn viên Kinh kịch, thời trẻ rất nổi tiếng ở chỗ chúng tôi.',
   exList:[
     {zh:'对啊，他本来就是京剧演员，年轻时在我们那儿很有名。',py:'Duì a, tā běnlái jiù shì jīngjù yǎnyuán, niánqīng shí zài wǒmen nàr hěn yǒumíng.',vn:'Đúng vậy, ông vốn là diễn viên Kinh kịch, thời trẻ rất nổi tiếng ở chỗ chúng tôi.'},
     {zh:'他们很喜欢唱京剧，虽然不是专业的演员，不过，他们唱得不错。',py:'Tāmen hěn xǐhuan chàng jīngjù, suīrán bú shì zhuānyè de yǎnyuán, búguò, tāmen chàng de búcuò.',vn:'Họ rất thích hát Kinh kịch, tuy không phải diễn viên chuyên nghiệp, nhưng họ hát khá hay.'},
     {zh:'这位演员的表演非常精彩，观众都站起来鼓掌。',py:'Zhè wèi yǎnyuán de biǎoyǎn fēicháng jīngcǎi, guānzhòng dōu zhàn qilai gǔzhǎng.',vn:'Màn biểu diễn của diễn viên này rất đặc sắc, khán giả đều đứng dậy vỗ tay.'},
   ],
   hanzi:[
     {c:'演',p:'yǎn',type:'左右结构 · Trái-phải',st:14,ord:'氵 (thủy) trái → 寅 phải',rad:'氵 (thủy)',mean:'diễn',
      tip:'Bộ nước 氵 (chảy dài, triển khai) + 寅 → TRIỂN KHAI, DIỄN, kết hợp 员(người) thành 演员 = DIỄN VIÊN.',
      cf:'寅 (yín – chi Dần)',w:'演员 / 演出 / 表演'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông vốn là diễn viên Kinh kịch, thời trẻ rất nổi tiếng, được khán giả vô cùng yêu thích.',answer:'他本来就是京剧演员，年轻时很有名，深受观众的喜爱。',answerPy:'Tā běnlái jiù shì jīngjù yǎnyuán, niánqīng shí hěn yǒumíng, shēn shòu guānzhòng de xǐ\'ài.',
      note:'本来 ôn lại ngữ pháp Bài 3.'},
     {promptLang:'vi',prompt:'Tuy không phải diễn viên chuyên nghiệp, nhưng họ hát khá hay, nghe rất có hồn.',answer:'虽然不是专业的演员，不过他们唱得不错，听起来很有味道。',answerPy:'Suīrán bú shì zhuānyè de yǎnyuán, búguò tāmen chàng de búcuò, tīng qilai hěn yǒu wèidào.',
      note:'不过 ôn lại ngữ pháp Bài 10.'},
   ]},

  {n:3,zh:'观众',py:'guānzhòng',pos:'Danh từ',vn:'khán giả',em:'👥',lesson:1,
   explain:['Người xem biểu diễn, phim, thi đấu.'],
   usage:'深受观众的喜爱, 吸引观众, 不同年龄的观众.',
   collo:['深受观众们的喜爱','吸引了不少观众','不同年龄的观众'],
   ex_zh:'年轻时在我们那儿很有名，深受观众们的喜爱。',ex_py:'Niánqīng shí zài wǒmen nàr hěn yǒumíng, shēn shòu guānzhòngmen de xǐ\'ài.',ex_vn:'Thời trẻ rất nổi tiếng ở chỗ chúng tôi, được khán giả vô cùng yêu thích.',
   exList:[
     {zh:'年轻时在我们那儿很有名，深受观众们的喜爱。',py:'Niánqīng shí zài wǒmen nàr hěn yǒumíng, shēn shòu guānzhòngmen de xǐ\'ài.',vn:'Thời trẻ rất nổi tiếng ở chỗ chúng tôi, được khán giả vô cùng yêu thích.'},
     {zh:'这次演出举办得非常成功，吸引了不少当地的观众。',py:'Zhè cì yǎnchū jǔbàn de fēicháng chénggōng, xīyǐnle bùshǎo dāngdì de guānzhòng.',vn:'Buổi biểu diễn lần này tổ chức rất thành công, thu hút không ít khán giả địa phương.'},
     {zh:'随着社会的发展，京剧也在改变，以适应不同年龄观众的需要。',py:'Suízhe shèhuì de fāzhǎn, jīngjù yě zài gǎibiàn, yǐ shìyìng bù tóng niánlíng guānzhòng de xūyào.',vn:'Cùng với sự phát triển của xã hội, Kinh kịch cũng đang thay đổi để thích ứng nhu cầu khán giả các độ tuổi.'},
   ],
   hanzi:[
     {c:'众',p:'zhòng',type:'品字结构 · Ba chữ 人',st:6,ord:'人 trên → 人人 dưới',rad:'人 (nhân)',mean:'đông người',
      tip:'Chữ hội ý ba người 人 → ĐÔNG NGƯỜI, kết hợp 观(xem) thành 观众 = KHÁN GIẢ.',
      cf:'从 (cóng – hai chữ 人)',w:'观众 / 大众 / 群众'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Buổi biểu diễn lần này tổ chức rất thành công, thu hút không ít khán giả địa phương.',answer:'这次演出举办得非常成功，吸引了不少当地的观众。',answerPy:'Zhè cì yǎnchū jǔbàn de fēicháng chénggōng, xīyǐnle bùshǎo dāngdì de guānzhòng.',
      note:'练习2 SGK (2); 吸引 ôn lại Bài 6.'},
     {promptLang:'vi',prompt:'Kinh kịch cũng đang thay đổi để thích ứng nhu cầu của khán giả ở các độ tuổi khác nhau.',answer:'京剧也在改变，以适应不同年龄观众的需要。',answerPy:'Jīngjù yě zài gǎibiàn, yǐ shìyìng bù tóng niánlíng guānzhòng de xūyào.',
      note:'适应 ôn lại từ vựng Bài 8.'},
   ]},

  {n:4,zh:'厚',py:'hòu',pos:'Tính từ',vn:'dày; sâu nặng (tình cảm)',em:'📚',lesson:1,
   explain:['1. Dày (đối lập 薄).','2. Sâu đậm (tình cảm): 深厚的感情.'],
   usage:'这本书很厚; 深厚的感情; 厚厚的.',
   collo:['很深厚的感情','这本小说这么厚','厚衣服'],
   ex_zh:'你爷爷一定对京剧有着很深厚的感情。',ex_py:'Nǐ yéye yídìng duì jīngjù yǒuzhe hěn shēnhòu de gǎnqíng.',ex_vn:'Ông bạn chắc chắn có tình cảm rất sâu đậm với Kinh kịch.',
   exList:[
     {zh:'你爷爷一定对京剧有着很深厚的感情。',py:'Nǐ yéye yídìng duì jīngjù yǒuzhe hěn shēnhòu de gǎnqíng.',vn:'Ông bạn chắc chắn có tình cảm rất sâu đậm với Kinh kịch.'},
     {zh:'这本小说这么厚，什么时候才能看完啊？',py:'Zhè běn xiǎoshuō zhème hòu, shénme shíhou cái néng kànwán a?',vn:'Quyển tiểu thuyết này dày thế, bao giờ mới đọc xong đây?'},
     {zh:'天冷了，出门要穿厚一点儿的衣服。',py:'Tiān lěng le, chūmén yào chuān hòu yìdiǎnr de yīfu.',vn:'Trời lạnh rồi, ra ngoài phải mặc áo dày một chút.'},
   ],
   hanzi:[
     {c:'厚',p:'hòu',type:'半包围结构 · Bán bao vây',st:9,ord:'厂 bao → 日+子 trong',rad:'厂 (hán – vách núi)',mean:'dày',
      tip:'Vách núi 厂 chồng nhiều lớp đất → DÀY, mở rộng thành SÂU NẶNG (tình cảm).',
      cf:'原 (yuán – "nguyên", cũng bộ 厂)',w:'厚 / 深厚 / 厚道'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quyển tiểu thuyết này dày thế, bao giờ mới đọc xong đây? — Mỗi tối đọc mười mấy trang, khoảng một tháng là đọc xong.',answer:'这本小说这么厚，什么时候才能看完啊？——每天晚上看十几页，差不多一个月就可以看完。',answerPy:'Zhè běn xiǎoshuō zhème hòu, shénme shíhou cái néng kànwán a? — Měi tiān wǎnshang kàn shí jǐ yè, chàbuduō yí ge yuè jiù kěyǐ kànwán.',
      note:'练习2 SGK (6); 页 (Bài 11) + 差不多 (Bài 2).'},
     {promptLang:'vi',prompt:'Ông chắc chắn có tình cảm rất sâu đậm với Kinh kịch, vì ông đã hát hơn 60 năm.',answer:'他一定对京剧有着很深厚的感情，因为他已经唱了60多年了。',answerPy:'Tā yídìng duì jīngjù yǒuzhe hěn shēnhòu de gǎnqíng, yīnwèi tā yǐjīng chàngle liùshí duō nián le.',
      note:'有着 — 着 chỉ trạng thái kéo dài.'},
   ]},

  {n:5,zh:'演出',py:'yǎnchū',pos:'Động từ/Danh từ',vn:'biểu diễn; buổi biểu diễn',em:'🎪',lesson:1,
   explain:['Biểu diễn trước khán giả; hoặc buổi biểu diễn.'],
   usage:'上台演出; 看他的演出; 演出很成功.',
   collo:['上台演出','看他的演出','这次演出举办得很成功'],
   ex_zh:'他8岁就开始上台演出，到现在大概唱了60多年了。',ex_py:'Tā bā suì jiù kāishǐ shàng tái yǎnchū, dào xiànzài dàgài chàngle liùshí duō nián le.',ex_vn:'Ông 8 tuổi đã bắt đầu lên sân khấu biểu diễn, đến nay đại khái đã hát hơn 60 năm.',
   exList:[
     {zh:'他8岁就开始上台演出，到现在大概唱了60多年了。',py:'Tā bā suì jiù kāishǐ shàng tái yǎnchū, dào xiànzài dàgài chàngle liùshí duō nián le.',vn:'Ông 8 tuổi đã bắt đầu lên sân khấu biểu diễn, đến nay đại khái đã hát hơn 60 năm.'},
     {zh:'我小时候经常去看他的演出。',py:'Wǒ xiǎoshíhou jīngcháng qù kàn tā de yǎnchū.',vn:'Hồi nhỏ tôi thường đi xem ông biểu diễn.'},
     {zh:'这次演出举办得非常成功，吸引了不少当地的观众。',py:'Zhè cì yǎnchū jǔbàn de fēicháng chénggōng, xīyǐnle bùshǎo dāngdì de guānzhòng.',vn:'Buổi biểu diễn lần này tổ chức rất thành công, thu hút không ít khán giả địa phương.'},
   ],
   hanzi:[
     {c:'出',p:'chū',type:'独体字 · Chữ đơn',st:5,ord:'凵 → 凵 chồng',rad:'凵 (khảm)',mean:'ra',
      tip:'Chữ tượng hình bàn chân bước RA khỏi hang → RA, kết hợp 演 thành 演出 = DIỄN RA trước khán giả.',
      cf:'山 (shān – "núi", tự dạng gần giống)',w:'演出 / 出来 / 出发'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông 8 tuổi đã bắt đầu lên sân khấu biểu diễn, đến nay đại khái đã hát hơn 60 năm.',answer:'他8岁就开始上台演出，到现在大概唱了60多年了。',answerPy:'Tā bā suì jiù kāishǐ shàng tái yǎnchū, dào xiànzài dàgài chàngle liùshí duō nián le.',
      note:'大概 — ngữ pháp của bài; 就 chỉ sớm.'},
     {promptLang:'vi',prompt:'Hồi nhỏ tôi thường đi xem ông biểu diễn, ông còn kể cho tôi nhiều câu chuyện lịch sử.',answer:'我小时候经常去看他的演出，他还给我讲很多历史故事。',answerPy:'Wǒ xiǎoshíhou jīngcháng qù kàn tā de yǎnchū, tā hái gěi wǒ jiǎng hěn duō lìshǐ gùshi.',
      note:'给……讲 — kể cho ai.'},
   ]},

  {n:6,zh:'大概',py:'dàgài',pos:'Phó từ/Tính từ',vn:'khoảng chừng, có lẽ; đại khái',em:'🤔',lesson:1,
   explain:['1. (Phó từ) Ước lượng gần đúng về số lượng/thời gian; hoặc suy đoán tình huống với khả năng cao.','2. (Tính từ) Không chính xác lắm, chung chung: 大概的想法/内容.'],
   usage:'大概 + số lượng; 大概 + mệnh đề; 大概的 + danh từ.',
   collo:['大概唱了60多年','大概会同意','大概的想法'],
   ex_zh:'他8岁就开始上台演出，到现在大概唱了60多年了。',ex_py:'Tā bā suì jiù kāishǐ shàng tái yǎnchū, dào xiànzài dàgài chàngle liùshí duō nián le.',ex_vn:'Ông 8 tuổi đã bắt đầu lên sân khấu biểu diễn, đến nay đại khái đã hát hơn 60 năm.',
   exList:[
     {zh:'他8岁就开始上台演出，到现在大概唱了60多年了。',py:'Tā bā suì jiù kāishǐ shàng tái yǎnchū, dào xiànzài dàgài chàngle liùshí duō nián le.',vn:'Ông 8 tuổi đã bắt đầu lên sân khấu biểu diễn, đến nay đại khái đã hát hơn 60 năm.'},
     {zh:'你的这个关于举办传统文化节活动的计划，我想校长大概会同意。',py:'Nǐ de zhège guānyú jǔbàn chuántǒng wénhuà jié huódòng de jìhuà, wǒ xiǎng xiàozhǎng dàgài huì tóngyì.',vn:'Kế hoạch tổ chức lễ hội văn hóa truyền thống này của bạn, tôi nghĩ hiệu trưởng có lẽ sẽ đồng ý.'},
     {zh:'不管做什么事情，最好提前做计划，不用安排得特别详细，但必须有一个大概的想法。',py:'Bùguǎn zuò shénme shìqing, zuìhǎo tíqián zuò jìhuà, bú yòng ānpái de tèbié xiángxì, dàn bìxū yǒu yí ge dàgài de xiǎngfǎ.',vn:'Bất kể làm việc gì, tốt nhất lập kế hoạch trước, không cần sắp xếp quá chi tiết, nhưng phải có một ý tưởng đại khái.'},
   ],
   hanzi:[
     {c:'概',p:'gài',type:'左右结构 · Trái-phải',st:13,ord:'木 (mộc) trái → 既 phải',rad:'木 (mộc)',mean:'gạt bằng, đại khái',
      tip:'Nghĩa gốc là thanh gỗ 木 GẠT BẰNG miệng đấu → mở rộng thành ĐẠI KHÁI, KHÁI QUÁT.',
      cf:'既 (jì – "đã", phần bên phải)',w:'大概 / 概念 / 大概的'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch tổ chức lễ hội văn hóa này, tôi nghĩ hiệu trưởng có lẽ sẽ đồng ý.',answer:'这个举办文化节活动的计划，我想校长大概会同意。',answerPy:'Zhège jǔbàn wénhuà jié huódòng de jìhuà, wǒ xiǎng xiàozhǎng dàgài huì tóngyì.',
      note:'大概 phỏng đoán (khả năng cao) — ngữ pháp của bài.'},
     {promptLang:'vi',prompt:'Không cần sắp xếp quá chi tiết, nhưng phải có một ý tưởng đại khái.',answer:'不用安排得特别详细，但必须有一个大概的想法。',answerPy:'Bú yòng ānpái de tèbié xiángxì, dàn bìxū yǒu yí ge dàgài de xiǎngfǎ.',
      note:'大概的 (tính từ) + 详细 (Bài 12).'},
   ]},

  {n:7,zh:'来自',py:'láizì',pos:'Động từ',vn:'đến từ',em:'🌍',lesson:2,
   explain:['Xuất phát từ (nơi chốn, nguồn gốc).'],
   usage:'来自 + nơi: 来自美国, 来自不同的国家.',
   collo:['来自美国的留学生','来自不同的国家','来自生活'],
   ex_zh:'真没想到你一个来自美国的外国留学生，能把京剧唱得这么好。',ex_py:'Zhēn méi xiǎngdào nǐ yí ge láizì Měiguó de wàiguó liúxuéshēng, néng bǎ jīngjù chàng de zhème hǎo.',ex_vn:'Thật không ngờ một du học sinh đến từ Mỹ như bạn, lại hát Kinh kịch hay như vậy.',
   exList:[
     {zh:'真没想到你一个来自美国的外国留学生，能把京剧唱得这么好。',py:'Zhēn méi xiǎngdào nǐ yí ge láizì Měiguó de wàiguó liúxuéshēng, néng bǎ jīngjù chàng de zhème hǎo.',vn:'Thật không ngờ một du học sinh đến từ Mỹ như bạn, lại hát Kinh kịch hay như vậy.'},
     {zh:'我们班的同学来自十几个不同的国家。',py:'Wǒmen bān de tóngxué láizì shí jǐ ge bù tóng de guójiā.',vn:'Các bạn lớp tôi đến từ hơn mười quốc gia khác nhau.'},
     {zh:'很多问题的答案都来自生活。',py:'Hěn duō wèntí de dá\'àn dōu láizì shēnghuó.',vn:'Đáp án của nhiều vấn đề đều đến từ cuộc sống.'},
   ],
   hanzi:[
     {c:'自',p:'zì',type:'独体字 · Chữ đơn',st:6,ord:'丿 → 目',rad:'自 (tự)',mean:'tự, từ',
      tip:'Chữ tượng hình cái MŨI (chỉ vào mình) → TỰ, mở rộng thành TỪ (nguồn gốc), kết hợp 来 thành 来自 = ĐẾN TỪ.',
      cf:'目 (mù – "mắt", thiếu nét phẩy trên)',w:'来自 / 自己 / 自然'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thật không ngờ một du học sinh đến từ Mỹ, lại hát Kinh kịch hay như vậy.',answer:'真没想到一个来自美国的留学生，能把京剧唱得这么好。',answerPy:'Zhēn méi xiǎngdào yí ge láizì Měiguó de liúxuéshēng, néng bǎ jīngjù chàng de zhème hǎo.',
      note:'Câu chữ 把 + bổ ngữ trạng thái.'},
     {promptLang:'vi',prompt:'Lễ hội văn hóa giúp học sinh đến từ các nước hiểu Trung Quốc hơn.',answer:'文化节活动能让来自各国的学生更好地了解中国。',answerPy:'Wénhuà jié huódòng néng ràng láizì gè guó de xuésheng gèng hǎo de liǎojiě Zhōngguó.',
      note:'让 ôn lại Bài 8.'},
   ]},

  {n:8,zh:'遍',py:'biàn',pos:'Lượng từ',vn:'lần, lượt (từ đầu đến cuối)',em:'🔁',lesson:2,
   explain:['Lượng từ động lượng, chỉ một hành động trọn vẹn từ đầu đến cuối.'],
   usage:'V + 一遍/几遍: 练习一遍, 检查一遍, 一遍一遍地.',
   collo:['一遍一遍地练习','再检查一遍','看了好几遍'],
   ex_zh:'我常常跟着电视学唱京剧，然后一遍一遍地练习。',ex_py:'Wǒ chángcháng gēnzhe diànshì xué chàng jīngjù, ránhòu yí biàn yí biàn de liànxí.',ex_vn:'Tôi thường học hát Kinh kịch theo TV, rồi luyện đi luyện lại từng lượt.',
   exList:[
     {zh:'我常常跟着电视学唱京剧，然后一遍一遍地练习。',py:'Wǒ chángcháng gēnzhe diànshì xué chàng jīngjù, ránhòu yí biàn yí biàn de liànxí.',vn:'Tôi thường học hát Kinh kịch theo TV, rồi luyện đi luyện lại từng lượt.'},
     {zh:'材料整理好了没？——差不多了，我再检查一遍就给您送过去。',py:'Cáiliào zhěnglǐ hǎo le méi? — Chàbuduō le, wǒ zài jiǎnchá yí biàn jiù gěi nín sòng guòqu.',vn:'Tài liệu sắp xếp xong chưa? — Gần xong rồi, tôi kiểm tra lại một lượt nữa rồi gửi cho ngài.'},
     {zh:'这篇文章我看了好几遍才看懂。',py:'Zhè piān wénzhāng wǒ kànle hǎojǐ biàn cái kàndǒng.',vn:'Bài văn này tôi đọc mấy lượt mới hiểu.'},
   ],
   hanzi:[
     {c:'遍',p:'biàn',type:'半包围结构 · Bán bao vây',st:12,ord:'扁 trong → 辶 bao',rad:'辶 (sước – đi)',mean:'khắp, lượt',
      tip:'Bộ đi 辶 + 扁 → ĐI KHẮP từ đầu đến cuối → LƯỢT (trọn vẹn).',
      cf:'篇 (piān – "bài", bộ 竹)',w:'遍 / 一遍 / 普遍'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tài liệu gần xong rồi, tôi kiểm tra lại một lượt nữa rồi gửi cho ngài.',answer:'材料差不多了，我再检查一遍就给您送过去。',answerPy:'Cáiliào chàbuduō le, wǒ zài jiǎnchá yí biàn jiù gěi nín sòng guòqu.',
      note:'练习2 SGK (8); 材料 (Bài 4).'},
     {promptLang:'vi',prompt:'Tôi thường học hát theo TV, rồi luyện đi luyện lại từng lượt, thỉnh thoảng hát vài câu với người Trung Quốc.',answer:'我常常跟着电视学唱，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。',answerPy:'Wǒ chángcháng gēnzhe diànshì xué chàng, ránhòu yí biàn yí biàn de liànxí, ǒu\'ěr gēn Zhōngguó rén yìqǐ chàngshang jǐ jù.',
      note:'偶尔 — ngữ pháp của bài.'},
   ]},

  {n:9,zh:'偶尔',py:'ǒu\'ěr',pos:'Phó từ',vn:'thỉnh thoảng',em:'🕰️',lesson:2,
   explain:['Tình huống xảy ra với tần suất rất thấp.'],
   usage:'偶尔 + động từ: 偶尔跟……一起, 偶尔加班.',
   collo:['偶尔跟中国人一起唱','偶尔加班','偶尔也会出现'],
   ex_zh:'我常常跟着电视学唱京剧，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。',ex_py:'Wǒ chángcháng gēnzhe diànshì xué chàng jīngjù, ránhòu yí biàn yí biàn de liànxí, ǒu\'ěr gēn Zhōngguó rén yìqǐ chàngshang jǐ jù.',ex_vn:'Tôi thường học hát Kinh kịch theo TV, rồi luyện đi luyện lại, thỉnh thoảng hát vài câu với người Trung Quốc.',
   exList:[
     {zh:'我常常跟着电视学唱京剧，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。',py:'Wǒ chángcháng gēnzhe diànshì xué chàng jīngjù, ránhòu yí biàn yí biàn de liànxí, ǒu\'ěr gēn Zhōngguó rén yìqǐ chàngshang jǐ jù.',vn:'Tôi thường học hát Kinh kịch theo TV, rồi luyện đi luyện lại, thỉnh thoảng hát vài câu với người Trung Quốc.'},
     {zh:'我们调查的近7000名上班族中，有64%的人经常加班，28%偶尔加班。',py:'Wǒmen diàochá de jìn qīqiān míng shàngbānzú zhōng, yǒu bǎifēnzhī liùshísì de rén jīngcháng jiābān, bǎifēnzhī èrshíbā ǒu\'ěr jiābān.',vn:'Trong gần 7000 người đi làm được khảo sát, 64% thường xuyên tăng ca, 28% thỉnh thoảng tăng ca.'},
     {zh:'三叶草的叶子一般为三个，但偶尔也会出现四个叶子的。',py:'Sānyècǎo de yèzi yìbān wéi sān ge, dàn ǒu\'ěr yě huì chūxiàn sì ge yèzi de.',vn:'Cỏ ba lá thường có ba lá, nhưng thỉnh thoảng cũng xuất hiện loại bốn lá.'},
   ],
   hanzi:[
     {c:'偶',p:'ǒu',type:'左右结构 · Trái-phải',st:11,ord:'亻 (nhân) trái → 禺 phải',rad:'亻 (nhân)',mean:'ngẫu nhiên, tượng gỗ',
      tip:'Bộ người 亻 + 禺 → nghĩa gốc là TƯỢNG NGƯỜI, mượn nghĩa NGẪU NHIÊN, kết hợp 尔 thành 偶尔 = THỈNH THOẢNG.',
      cf:'遇 (yù – "gặp", bộ 辶)',w:'偶尔 / 偶然 / 偶像'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để giảm cân, tôi hầu như tối nào cũng kiên trì chạy bộ, thỉnh thoảng mới nghỉ một buổi.',answer:'为了减肥，我几乎每天晚上都坚持跑步，偶尔才休息一次。',answerPy:'Wèile jiǎnféi, wǒ jīhū měi tiān wǎnshang dōu jiānchí pǎobù, ǒu\'ěr cái xiūxi yí cì.',
      note:'Bài luyện tập SGK (1); 几乎 (Bài 2) + 坚持 (Bài 9).'},
     {promptLang:'vi',prompt:'Cô ấy và chồng rất ít ăn ở nhà, cuối tuần đi nhà hàng, thỉnh thoảng mới tự nấu.',answer:'她和丈夫很少在家吃饭，周末去饭馆儿吃，偶尔才自己做饭。',answerPy:'Tā hé zhàngfu hěn shǎo zài jiā chī fàn, zhōumò qù fànguǎnr chī, ǒu\'ěr cái zìjǐ zuò fàn.',
      note:'Bài luyện tập SGK (3).'},
   ]},

  {n:10,zh:'吃惊',py:'chī jīng',pos:'Động từ',vn:'kinh ngạc',em:'😲',lesson:2,
   explain:['Ngạc nhiên, giật mình vì điều bất ngờ (động từ li hợp).'],
   usage:'别吃惊; 大吃一惊; 让人吃惊.',
   collo:['别吃惊','大吃一惊','让人吃惊的消息'],
   ex_zh:'别吃惊，因为我以前学习过音乐，有一些音乐基础。',ex_py:'Bié chī jīng, yīnwèi wǒ yǐqián xuéxíguo yīnyuè, yǒu yìxiē yīnyuè jīchǔ.',ex_vn:'Đừng ngạc nhiên, vì trước đây tôi từng học âm nhạc, có chút nền tảng âm nhạc.',
   exList:[
     {zh:'别吃惊，因为我以前学习过音乐，有一些音乐基础。',py:'Bié chī jīng, yīnwèi wǒ yǐqián xuéxíguo yīnyuè, yǒu yìxiē yīnyuè jīchǔ.',vn:'Đừng ngạc nhiên, vì trước đây tôi từng học âm nhạc, có chút nền tảng âm nhạc.'},
     {zh:'听到这个消息，大家都大吃一惊。',py:'Tīngdào zhège xiāoxi, dàjiā dōu dà chī yì jīng.',vn:'Nghe tin này, mọi người đều vô cùng kinh ngạc.'},
     {zh:'他竟然会唱京剧，真让人吃惊。',py:'Tā jìngrán huì chàng jīngjù, zhēn ràng rén chī jīng.',vn:'Anh ấy lại biết hát Kinh kịch, thật khiến người ta kinh ngạc.'},
   ],
   hanzi:[
     {c:'惊',p:'jīng',type:'左右结构 · Trái-phải (giản thể)',st:11,ord:'忄 (tâm) trái → 京 phải',rad:'忄 (tâm)',mean:'kinh sợ',
      tip:'Bộ tim 忄 + 京(biểu âm) → tim GIẬT MÌNH, kết hợp 吃 thành 吃惊 = KINH NGẠC.',
      cf:'京 (jīng – "kinh đô", phần bên phải)',w:'吃惊 / 惊喜 / 吃了一惊'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy lại biết hát Kinh kịch, thật khiến người ta kinh ngạc.',answer:'他竟然会唱京剧，真让人吃惊。',answerPy:'Tā jìngrán huì chàng jīngjù, zhēn ràng rén chī jīng.',
      note:'竟然 (Bài 6) + 让 (Bài 8).'},
     {promptLang:'vi',prompt:'Đừng ngạc nhiên, vì trước đây tôi từng học âm nhạc, có chút nền tảng.',answer:'别吃惊，因为我以前学习过音乐，有一些基础。',answerPy:'Bié chī jīng, yīnwèi wǒ yǐqián xuéxíguo yīnyuè, yǒu yìxiē jīchǔ.',
      note:'基础 — từ mới của bài; 过 chỉ kinh nghiệm.'},
   ]},

  {n:11,zh:'基础',py:'jīchǔ',pos:'Danh từ',vn:'nền tảng, căn bản',em:'🧱',lesson:2,
   explain:['Cái gốc, phần cơ sở để phát triển lên.'],
   usage:'有……基础; 打好基础; 基础知识.',
   collo:['有一些音乐基础','打好基础','基础知识'],
   ex_zh:'因为我以前学习过音乐，有一些音乐基础，又对京剧这种表演艺术非常感兴趣。',ex_py:'Yīnwèi wǒ yǐqián xuéxíguo yīnyuè, yǒu yìxiē yīnyuè jīchǔ, yòu duì jīngjù zhè zhǒng biǎoyǎn yìshù fēicháng gǎn xìngqù.',ex_vn:'Vì trước đây tôi từng học âm nhạc, có chút nền tảng âm nhạc, lại rất hứng thú với nghệ thuật biểu diễn Kinh kịch.',
   exList:[
     {zh:'因为我以前学习过音乐，有一些音乐基础，又对京剧这种表演艺术非常感兴趣。',py:'Yīnwèi wǒ yǐqián xuéxíguo yīnyuè, yǒu yìxiē yīnyuè jīchǔ, yòu duì jīngjù zhè zhǒng biǎoyǎn yìshù fēicháng gǎn xìngqù.',vn:'Vì trước đây tôi từng học âm nhạc, có chút nền tảng âm nhạc, lại rất hứng thú với nghệ thuật biểu diễn Kinh kịch.'},
     {zh:'你学得可真快！——我小时候学过两年的舞，有点儿基础。',py:'Nǐ xué de kě zhēn kuài! — Wǒ xiǎoshíhou xuéguo liǎng nián de wǔ, yǒudiǎnr jīchǔ.',vn:'Bạn học nhanh thật! — Hồi nhỏ tôi học hai năm múa, có chút nền tảng.'},
     {zh:'学语言首先要打好语法和词汇的基础。',py:'Xué yǔyán shǒuxiān yào dǎhǎo yǔfǎ hé cíhuì de jīchǔ.',vn:'Học ngôn ngữ trước tiên phải xây nền tảng ngữ pháp và từ vựng cho tốt.'},
   ],
   hanzi:[
     {c:'础',p:'chǔ',type:'左右结构 · Trái-phải (giản thể)',st:10,ord:'石 (thạch) trái → 出 phải',rad:'石 (thạch – đá)',mean:'đá tảng kê cột',
      tip:'Bộ đá 石 + 出 → ĐÁ TẢNG kê chân cột, kết hợp 基(nền) thành 基础 = NỀN TẢNG.',
      cf:'出 (chū – "ra", phần bên phải)',w:'基础 / 基本 / 基础知识'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn học nhanh thật! — Hồi nhỏ tôi học hai năm múa, có chút nền tảng.',answer:'你学得可真快！——我小时候学过两年的舞，有点儿基础。',answerPy:'Nǐ xué de kě zhēn kuài! — Wǒ xiǎoshíhou xuéguo liǎng nián de wǔ, yǒudiǎnr jīchǔ.',
      note:'练习2 SGK (7).'},
     {promptLang:'vi',prompt:'Học ngôn ngữ trước tiên phải xây nền tảng ngữ pháp cho tốt, nếu không càng học càng khó.',answer:'学语言首先要打好语法的基础，否则越学越难。',answerPy:'Xué yǔyán shǒuxiān yào dǎhǎo yǔfǎ de jīchǔ, fǒuzé yuè xué yuè nán.',
      note:'首先 (Bài 3) + 否则 (Bài 11) + 语法 (Bài 11).'},
   ]},

  {n:12,zh:'表演',py:'biǎoyǎn',pos:'Động từ/Danh từ',vn:'biểu diễn, trình diễn',em:'🎤',lesson:2,
   explain:['Diễn (kịch, múa, võ…) trước người xem; hoặc màn trình diễn.'],
   usage:'表演艺术; 表演中国功夫; 精彩的表演.',
   collo:['京剧这种表演艺术','表演的中国功夫','精彩的表演'],
   ex_zh:'又对京剧这种表演艺术非常感兴趣，所以能比较容易地学会它的唱法。',ex_py:'Yòu duì jīngjù zhè zhǒng biǎoyǎn yìshù fēicháng gǎn xìngqù, suǒyǐ néng bǐjiào róngyì de xuéhuì tā de chàngfǎ.',ex_vn:'Lại rất hứng thú với nghệ thuật biểu diễn Kinh kịch, nên có thể học cách hát khá dễ dàng.',
   exList:[
     {zh:'又对京剧这种表演艺术非常感兴趣，所以能比较容易地学会它的唱法。',py:'Yòu duì jīngjù zhè zhǒng biǎoyǎn yìshù fēicháng gǎn xìngqù, suǒyǐ néng bǐjiào róngyì de xuéhuì tā de chàngfǎ.',vn:'Lại rất hứng thú với nghệ thuật biểu diễn Kinh kịch, nên có thể học cách hát khá dễ dàng.'},
     {zh:'今天的晚会太精彩了，特别是那些外国留学生表演的中国功夫，动作既标准又好看，非常棒。',py:'Jīntiān de wǎnhuì tài jīngcǎi le, tèbié shì nàxiē wàiguó liúxuéshēng biǎoyǎn de Zhōngguó gōngfu, dòngzuò jì biāozhǔn yòu hǎokàn, fēicháng bàng.',vn:'Dạ hội hôm nay quá đặc sắc, đặc biệt là màn Kung Fu Trung Quốc do các du học sinh nước ngoài biểu diễn, động tác vừa chuẩn vừa đẹp, rất tuyệt.'},
     {zh:'孩子们的表演虽然不专业，但是很可爱。',py:'Háizimen de biǎoyǎn suīrán bù zhuānyè, dànshì hěn kě\'ài.',vn:'Màn biểu diễn của các bé tuy không chuyên nghiệp, nhưng rất đáng yêu.'},
   ],
   hanzi:[
     {c:'表',p:'biǎo',type:'上下结构 · Trên-dưới',st:8,ord:'龶 trên → 𧘇 dưới',rad:'衣 (y – áo)',mean:'bề ngoài, biểu lộ',
      tip:'Nghĩa gốc là áo mặc bên NGOÀI → BIỂU LỘ ra ngoài, kết hợp 演 thành 表演 = BIỂU DIỄN (ôn lại 表示 Bài 11).',
      cf:'同字词: 表示 / 表演 / 手表',w:'表演 / 表示 / 表格'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đặc biệt là màn Kung Fu Trung Quốc do các du học sinh biểu diễn, động tác vừa chuẩn vừa đẹp.',answer:'特别是那些外国留学生表演的中国功夫，动作既标准又好看。',answerPy:'Tèbié shì nàxiē wàiguó liúxuéshēng biǎoyǎn de Zhōngguó gōngfu, dòngzuò jì biāozhǔn yòu hǎokàn.',
      note:'练习2 SGK (1); 既……又 ôn lại Bài 7.'},
     {promptLang:'vi',prompt:'Tôi rất hứng thú với nghệ thuật biểu diễn Kinh kịch, nên học cách hát khá dễ.',answer:'我对京剧这种表演艺术很感兴趣，所以比较容易学会它的唱法。',answerPy:'Wǒ duì jīngjù zhè zhǒng biǎoyǎn yìshù hěn gǎn xìngqù, suǒyǐ bǐjiào róngyì xuéhuì tā de chàngfǎ.',
      note:'对……感兴趣 — ôn lại.'},
   ]},

  {n:13,zh:'正常',py:'zhèngcháng',pos:'Tính từ',vn:'bình thường, thông thường',em:'✅',lesson:3,
   explain:['Phù hợp với quy luật/tình trạng thông thường, không bất thường.'],
   usage:'正常交流; 很正常; 不正常.',
   collo:['正常交流','很正常','身体正常'],
   ex_zh:'因为外国留学生不了解中国文化，有时候会影响他们和中国人之间的正常交流。',ex_py:'Yīnwèi wàiguó liúxuéshēng bù liǎojiě Zhōngguó wénhuà, yǒushíhou huì yǐngxiǎng tāmen hé Zhōngguó rén zhījiān de zhèngcháng jiāoliú.',ex_vn:'Vì du học sinh nước ngoài không hiểu văn hóa Trung Quốc, có lúc sẽ ảnh hưởng đến giao lưu bình thường giữa họ và người Trung Quốc.',
   exList:[
     {zh:'因为外国留学生不了解中国文化，有时候会影响他们和中国人之间的正常交流。',py:'Yīnwèi wàiguó liúxuéshēng bù liǎojiě Zhōngguó wénhuà, yǒushíhou huì yǐngxiǎng tāmen hé Zhōngguó rén zhījiān de zhèngcháng jiāoliú.',vn:'Vì du học sinh nước ngoài không hiểu văn hóa Trung Quốc, có lúc sẽ ảnh hưởng đến giao lưu bình thường giữa họ và người Trung Quốc.'},
     {zh:'刚到一个新环境，觉得不习惯是很正常的。',py:'Gāng dào yí ge xīn huánjìng, juéde bù xíguàn shì hěn zhèngcháng de.',vn:'Mới đến một môi trường mới, cảm thấy không quen là rất bình thường.'},
     {zh:'医生说他的身体一切正常。',py:'Yīshēng shuō tā de shēntǐ yíqiè zhèngcháng.',vn:'Bác sĩ nói cơ thể anh ấy mọi thứ đều bình thường.'},
   ],
   hanzi:[
     {c:'常',p:'cháng',type:'上下结构 · Trên-dưới',st:11,ord:'尚 trên → 巾 dưới',rad:'巾 (cân – khăn)',mean:'thường',
      tip:'Bộ khăn 巾 + 尚 → nghĩa gốc là tấm vải dài, mượn nghĩa THƯỜNG XUYÊN, kết hợp 正 thành 正常 = BÌNH THƯỜNG.',
      cf:'党 (dǎng – "đảng", phần trên giống)',w:'正常 / 经常 / 常见'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mới đến một môi trường mới, cảm thấy không quen là rất bình thường.',answer:'刚到一个新环境，觉得不习惯是很正常的。',answerPy:'Gāng dào yí ge xīn huánjìng, juéde bù xíguàn shì hěn zhèngcháng de.',
      note:'刚 (Bài 1) + 环境 (Bài 8).'},
     {promptLang:'vi',prompt:'Không hiểu văn hóa có lúc ảnh hưởng đến giao lưu bình thường, thậm chí gây ra hiểu lầm.',answer:'不了解文化有时候会影响正常交流，甚至引起误会。',answerPy:'Bù liǎojiě wénhuà yǒushíhou huì yǐngxiǎng zhèngcháng jiāoliú, shènzhì yǐnqǐ wùhuì.',
      note:'甚至 (Bài 4) + 引起/误会 (Bài 12).'},
   ]},

  {n:14,zh:'申请',py:'shēnqǐng',pos:'Động từ',vn:'xin, đăng ký (chính thức)',em:'📝',lesson:3,
   explain:['Đề nghị chính thức với cấp trên/cơ quan để được chấp thuận.'],
   usage:'申请举办活动; 申请去国外留学; 申请学校.',
   collo:['申请举办一次活动','申请去国外留学','申请国外学校'],
   ex_zh:'所以我们想申请举办一次中国传统文化节活动。',ex_py:'Suǒyǐ wǒmen xiǎng shēnqǐng jǔbàn yí cì Zhōngguó chuántǒng wénhuà jié huódòng.',ex_vn:'Vì vậy chúng tôi muốn xin tổ chức một lễ hội văn hóa truyền thống Trung Quốc.',
   exList:[
     {zh:'所以我们想申请举办一次中国传统文化节活动。',py:'Suǒyǐ wǒmen xiǎng shēnqǐng jǔbàn yí cì Zhōngguó chuántǒng wénhuà jié huódòng.',vn:'Vì vậy chúng tôi muốn xin tổ chức một lễ hội văn hóa truyền thống Trung Quốc.'},
     {zh:'听说你要申请去国外留学，准备得怎么样了？',py:'Tīngshuō nǐ yào shēnqǐng qù guówài liúxué, zhǔnbèi de zěnmeyàng le?',vn:'Nghe nói bạn định xin đi du học nước ngoài, chuẩn bị đến đâu rồi?'},
     {zh:'接受调查的学生中，只有大约20%的人开始申请国外学校。',py:'Jiēshòu diàochá de xuésheng zhōng, zhǐyǒu dàyuē bǎifēnzhī èrshí de rén kāishǐ shēnqǐng guówài xuéxiào.',vn:'Trong số học sinh được khảo sát, chỉ khoảng 20% bắt đầu nộp đơn xin trường nước ngoài.'},
   ],
   hanzi:[
     {c:'申',p:'shēn',type:'独体字 · Chữ đơn',st:5,ord:'日 → 丨 xuyên',rad:'田 (điền)',mean:'trình bày',
      tip:'Chữ tượng hình tia chớp → mở rộng thành TRÌNH BÀY RÕ, kết hợp 请 thành 申请 = XIN (chính thức).',
      cf:'甲 (jiǎ), 由 (yóu) — cùng dạng 田 + nét dọc',w:'申请 / 申请书 / 申请人'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói bạn định xin đi du học nước ngoài, chuẩn bị đến đâu rồi? — Đang tiến hành, tài liệu sắp chuẩn bị xong.',answer:'听说你要申请去国外留学，准备得怎么样了？——正在进行，材料差不多准备好了。',answerPy:'Tīngshuō nǐ yào shēnqǐng qù guówài liúxué, zhǔnbèi de zěnmeyàng le? — Zhèngzài jìnxíng, cáiliào chàbuduō zhǔnbèi hǎo le.',
      note:'Bài luyện tập 进行 SGK (2).'},
     {promptLang:'vi',prompt:'Chúng tôi muốn xin tổ chức lễ hội văn hóa, để học sinh các nước hiểu Trung Quốc hơn.',answer:'我们想申请举办文化节活动，让各国学生更好地了解中国。',answerPy:'Wǒmen xiǎng shēnqǐng jǔbàn wénhuà jié huódòng, ràng gè guó xuésheng gèng hǎo de liǎojiě Zhōngguó.',
      note:'举办 (Bài 6) + 让 (Bài 8).'},
   ]},

  {n:15,zh:'有趣',py:'yǒuqù',pos:'Tính từ',vn:'thú vị, lý thú',em:'😄',lesson:3,
   explain:['Gây hứng thú, hấp dẫn.'],
   usage:'办得非常有趣; 有趣的故事; 很有趣.',
   collo:['办得非常有趣','有趣的故事','觉得很有趣'],
   ex_zh:'上次的春游活动你们办得非常有趣，大家都玩儿得很开心。',ex_py:'Shàng cì de chūnyóu huódòng nǐmen bàn de fēicháng yǒuqù, dàjiā dōu wánr de hěn kāixīn.',ex_vn:'Hoạt động dã ngoại mùa xuân lần trước các bạn tổ chức rất thú vị, mọi người đều chơi rất vui.',
   exList:[
     {zh:'上次的春游活动你们办得非常有趣，大家都玩儿得很开心。',py:'Shàng cì de chūnyóu huódòng nǐmen bàn de fēicháng yǒuqù, dàjiā dōu wánr de hěn kāixīn.',vn:'Hoạt động dã ngoại mùa xuân lần trước các bạn tổ chức rất thú vị, mọi người đều chơi rất vui.'},
     {zh:'京剧里的历史故事很有趣，让我学到了很多知识。',py:'Jīngjù li de lìshǐ gùshi hěn yǒuqù, ràng wǒ xuédàole hěn duō zhīshi.',vn:'Những câu chuyện lịch sử trong Kinh kịch rất thú vị, giúp tôi học được nhiều kiến thức.'},
     {zh:'这位老师讲课既有趣又容易懂。',py:'Zhè wèi lǎoshī jiǎngkè jì yǒuqù yòu róngyì dǒng.',vn:'Thầy giáo này giảng bài vừa thú vị vừa dễ hiểu.'},
   ],
   hanzi:[
     {c:'趣',p:'qù',type:'半包围结构 · Bán bao vây',st:15,ord:'走 bao → 取 trong',rad:'走 (tẩu – đi)',mean:'thú vị',
      tip:'Bộ đi 走 + 取(lấy) → chạy đến LẤY (điều mình thích) → HỨNG THÚ, kết hợp 有 thành 有趣 = THÚ VỊ.',
      cf:'取 (qǔ – "lấy", phần trong)',w:'有趣 / 兴趣 / 有意思'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoạt động dã ngoại lần trước các bạn tổ chức rất thú vị, mọi người chơi rất vui.',answer:'上次的春游活动你们办得非常有趣，大家都玩儿得很开心。',answerPy:'Shàng cì de chūnyóu huódòng nǐmen bàn de fēicháng yǒuqù, dàjiā dōu wánr de hěn kāixīn.',
      note:'办得……有趣 — bổ ngữ trạng thái.'},
     {promptLang:'vi',prompt:'Thầy giáo này giảng bài vừa thú vị vừa dễ hiểu, vì vậy rất được học sinh yêu thích.',answer:'这位老师讲课既有趣又容易懂，因此很受学生欢迎。',answerPy:'Zhè wèi lǎoshī jiǎngkè jì yǒuqù yòu róngyì dǒng, yīncǐ hěn shòu xuésheng huānyíng.',
      note:'既……又 (Bài 7) + 因此 (Bài 8).'},
   ]},

  {n:16,zh:'开心',py:'kāixīn',pos:'Tính từ',vn:'vui vẻ',em:'😊',lesson:3,
   explain:['Tâm trạng vui vẻ, thoải mái.'],
   usage:'玩儿得很开心; 很开心; 开心地笑.',
   collo:['玩儿得很开心','过得很开心','开心地笑'],
   ex_zh:'大家都玩儿得很开心，这次活动继续由你负责，相信也一定会很成功。',ex_py:'Dàjiā dōu wánr de hěn kāixīn, zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yě yídìng huì hěn chénggōng.',ex_vn:'Mọi người đều chơi rất vui, hoạt động lần này tiếp tục do bạn phụ trách, tin rằng cũng nhất định sẽ rất thành công.',
   exList:[
     {zh:'大家都玩儿得很开心，这次活动继续由你负责，相信也一定会很成功。',py:'Dàjiā dōu wánr de hěn kāixīn, zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yě yídìng huì hěn chénggōng.',vn:'Mọi người đều chơi rất vui, hoạt động lần này tiếp tục do bạn phụ trách, tin rằng cũng nhất định sẽ rất thành công.'},
     {zh:'看到孩子们开心地笑，父母也觉得很幸福。',py:'Kàndào háizimen kāixīn de xiào, fùmǔ yě juéde hěn xìngfú.',vn:'Thấy bọn trẻ cười vui vẻ, bố mẹ cũng thấy rất hạnh phúc.'},
     {zh:'和朋友一起喝茶聊天儿，是一件很开心的事。',py:'Hé péngyou yìqǐ hē chá liáo tiānr, shì yí jiàn hěn kāixīn de shì.',vn:'Cùng bạn bè uống trà trò chuyện là một việc rất vui.'},
   ],
   hanzi:[
     {c:'心',p:'xīn',type:'独体字 · Chữ đơn',st:4,ord:'丶 → 乚 → 丶 → 丶',rad:'心 (tâm)',mean:'tim, lòng',
      tip:'Chữ tượng hình quả TIM → LÒNG, kết hợp 开(mở) thành 开心 = MỞ LÒNG → VUI VẺ.',
      cf:'必 (bì – "ắt", thêm một nét)',w:'开心 / 心情 / 用心'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thấy bọn trẻ cười vui vẻ, bố mẹ cũng thấy rất hạnh phúc.',answer:'看到孩子们开心地笑，父母也觉得很幸福。',answerPy:'Kàndào háizimen kāixīn de xiào, fùmǔ yě juéde hěn xìngfú.',
      note:'幸福 ôn lại chủ đề Bài 10.'},
     {promptLang:'vi',prompt:'Hoạt động lần này tiếp tục do bạn phụ trách, tin rằng nhất định sẽ thành công.',answer:'这次活动继续由你负责，相信一定会很成功。',answerPy:'Zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yídìng huì hěn chénggōng.',
      note:'由 — ngữ pháp của bài; 负责 (Bài 4).'},
   ]},

  {n:17,zh:'继续',py:'jìxù',pos:'Động từ',vn:'tiếp tục',em:'▶️',lesson:3,
   explain:['Tiếp diễn hoạt động đang làm, không dừng lại.'],
   usage:'继续 + động từ: 继续进行, 继续由你负责, 继续读书.',
   collo:['继续由你负责','会议继续进行','继续留在北京'],
   ex_zh:'这次活动继续由你负责，相信也一定会很成功。',ex_py:'Zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yě yídìng huì hěn chénggōng.',ex_vn:'Hoạt động lần này tiếp tục do bạn phụ trách, tin rằng cũng nhất định sẽ rất thành công.',
   exList:[
     {zh:'这次活动继续由你负责，相信也一定会很成功。',py:'Zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yě yídìng huì hěn chénggōng.',vn:'Hoạt động lần này tiếp tục do bạn phụ trách, tin rằng cũng nhất định sẽ rất thành công.'},
     {zh:'大家请注意，现在休息十五分钟，十点半会议继续进行。',py:'Dàjiā qǐng zhùyì, xiànzài xiūxi shíwǔ fēnzhōng, shí diǎn bàn huìyì jìxù jìnxíng.',vn:'Mọi người chú ý, bây giờ nghỉ 15 phút, 10 giờ rưỡi hội nghị tiếp tục.'},
     {zh:'你想好了没？是继续读书还是参加工作？',py:'Nǐ xiǎnghǎo le méi? Shì jìxù dú shū háishi cānjiā gōngzuò?',vn:'Bạn nghĩ kỹ chưa? Tiếp tục học hay đi làm?'},
   ],
   hanzi:[
     {c:'续',p:'xù',type:'左右结构 · Trái-phải (giản thể)',st:11,ord:'纟 (mịch) trái → 卖 phải',rad:'纟 (mịch – sợi tơ)',mean:'nối tiếp',
      tip:'Bộ sợi 纟 (nối sợi tơ) + 卖 → NỐI TIẾP, kết hợp 继 thành 继续 = TIẾP TỤC.',
      cf:'读 (dú – "đọc", bộ 讠 + 卖)',w:'继续 / 连续 / 手续'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn nghĩ kỹ chưa? Tiếp tục học hay đi làm? — Tôi định đi làm hai năm trước, rồi mới thi cao học.',answer:'你想好了没？是继续读书还是参加工作？——我想先工作两年，然后再考研究生。',answerPy:'Nǐ xiǎnghǎo le méi? Shì jìxù dú shū háishi cānjiā gōngzuò? — Wǒ xiǎng xiān gōngzuò liǎng nián, ránhòu zài kǎo yánjiūshēng.',
      note:'练习2 SGK (9); 先……然后再 (Bài 3).'},
     {promptLang:'vi',prompt:'Tôi đã bàn với bố mẹ, cuối cùng vẫn quyết định tiếp tục ở lại Bắc Kinh.',answer:'我和父母商量过了，最后还是决定继续留在北京。',answerPy:'Wǒ hé fùmǔ shāngliangguo le, zuìhòu háishi juédìng jìxù liú zài Běijīng.',
      note:'商量 ôn lại từ vựng Bài 12.'},
   ]},

  {n:18,zh:'由',py:'yóu',pos:'Giới từ',vn:'do (ai phụ trách/thực hiện)',em:'👤',lesson:3,
   explain:['Giới từ dẫn ra người chịu trách nhiệm/thực hiện việc gì.'],
   usage:'由 + người + 负责/翻译/组织.',
   collo:['由你负责','由王大夫负责','由林语堂先生翻译'],
   ex_zh:'这次活动继续由你负责，相信也一定会很成功。',ex_py:'Zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yě yídìng huì hěn chénggōng.',ex_vn:'Hoạt động lần này tiếp tục do bạn phụ trách, tin rằng cũng nhất định sẽ rất thành công.',
   exList:[
     {zh:'这次活动继续由你负责，相信也一定会很成功。',py:'Zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yě yídìng huì hěn chénggōng.',vn:'Hoạt động lần này tiếp tục do bạn phụ trách, tin rằng cũng nhất định sẽ rất thành công.'},
     {zh:'按照规定，这件事情应该由王大夫负责。',py:'Ànzhào guīdìng, zhè jiàn shìqing yīnggāi yóu Wáng dàifu fùzé.',vn:'Theo quy định, việc này nên do bác sĩ Vương phụ trách.'},
     {zh:'"幽默"这个词最早是由林语堂先生翻译过来的。',py:'"Yōumò" zhège cí zuì zǎo shì yóu Lín Yǔtáng xiānsheng fānyì guòlai de.',vn:'Từ "幽默" (hài hước) sớm nhất là do ông Lâm Ngữ Đường dịch sang.'},
   ],
   hanzi:[
     {c:'由',p:'yóu',type:'独体字 · Chữ đơn',st:5,ord:'nét liền',rad:'田 (điền)',mean:'do, từ',
      tip:'Chữ tượng hình quả trên cành → NGUỒN GỐC, TỪ ĐÂU → giới từ DO (ôn lại 由于 Bài 10).',
      cf:'甲 (jiǎ), 申 (shēn) — cùng dạng',w:'由 / 由于 / 理由'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Theo quy định, việc này nên do bác sĩ Vương phụ trách.',answer:'按照规定，这件事情应该由王大夫负责。',answerPy:'Ànzhào guīdìng, zhè jiàn shìqing yīnggāi yóu Wáng dàifu fùzé.',
      note:'按照 (Bài 4) + 规定 (Bài 12).'},
     {promptLang:'vi',prompt:'Việc này chẳng phải giám đốc Mã chuyên phụ trách sao? — Anh ấy đã rời công ty, hiện do giám đốc Vương phụ trách.',answer:'这件事不是马经理专门负责吗？——他已经离开公司了，现在由王经理负责。',answerPy:'Zhè jiàn shì bú shì Mǎ jīnglǐ zhuānmén fùzé ma? — Tā yǐjīng líkāi gōngsī le, xiànzài yóu Wáng jīnglǐ fùzé.',
      note:'Bài luyện tập SGK (1); 专门 (Bài 9).'},
   ]},

  {n:19,zh:'讨论',py:'tǎolùn',pos:'Động từ',vn:'thảo luận, bàn bạc',em:'💬',lesson:3,
   explain:['Trao đổi ý kiến để làm rõ vấn đề.'],
   usage:'开会讨论; 讨论问题; 讨论一下.',
   collo:['开会讨论','讨论这个问题','跟大家讨论'],
   ex_zh:'我们回去就开会讨论，星期五之前把详细的计划书发给您。',ex_py:'Wǒmen huíqu jiù kāi huì tǎolùn, xīngqīwǔ zhīqián bǎ xiángxì de jìhuàshū fāgěi nín.',ex_vn:'Chúng tôi về sẽ họp thảo luận ngay, trước thứ Sáu gửi bản kế hoạch chi tiết cho ngài.',
   exList:[
     {zh:'我们回去就开会讨论，星期五之前把详细的计划书发给您。',py:'Wǒmen huíqu jiù kāi huì tǎolùn, xīngqīwǔ zhīqián bǎ xiángxì de jìhuàshū fāgěi nín.',vn:'Chúng tôi về sẽ họp thảo luận ngay, trước thứ Sáu gửi bản kế hoạch chi tiết cho ngài.'},
     {zh:'这个问题我们已经讨论过好几遍了。',py:'Zhège wèntí wǒmen yǐjīng tǎolùnguo hǎojǐ biàn le.',vn:'Vấn đề này chúng tôi đã thảo luận mấy lượt rồi.'},
     {zh:'大家正在讨论文化节的节目安排。',py:'Dàjiā zhèngzài tǎolùn wénhuà jié de jiémù ānpái.',vn:'Mọi người đang thảo luận sắp xếp tiết mục của lễ hội văn hóa.'},
   ],
   hanzi:[
     {c:'讨',p:'tǎo',type:'左右结构 · Trái-phải (giản thể)',st:5,ord:'讠 (ngôn) trái → 寸 phải',rad:'讠 (ngôn)',mean:'bàn, đòi',
      tip:'Bộ lời nói 讠 + 寸(tấc, quy tắc) → BÀN theo lý lẽ, kết hợp 论 thành 讨论 = THẢO LUẬN (ôn lại 无论 Bài 11).',
      cf:'付 (fù – "trả", bộ 亻)',w:'讨论 / 讨厌 / 无论'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng tôi về sẽ họp thảo luận ngay, trước thứ Sáu gửi bản kế hoạch chi tiết cho ngài.',answer:'我们回去就开会讨论，星期五之前把详细的计划书发给您。',answerPy:'Wǒmen huíqu jiù kāi huì tǎolùn, xīngqīwǔ zhīqián bǎ xiángxì de jìhuàshū fāgěi nín.',
      note:'之前 (Bài 11) + 详细 (Bài 12) + câu chữ 把.'},
     {promptLang:'vi',prompt:'Vấn đề này chúng tôi đã thảo luận mấy lượt rồi, nhưng vẫn chưa đạt được kết quả tốt nhất.',answer:'这个问题我们已经讨论过好几遍了，可是还没达到最好的效果。',answerPy:'Zhège wèntí wǒmen yǐjīng tǎolùnguo hǎojǐ biàn le, kěshì hái méi dádào zuì hǎo de xiàoguǒ.',
      note:'遍 (từ mới) + 达到 (Bài 12) + 可是 (Bài 9).'},
   ]},

  {n:20,zh:'大约',py:'dàyuē',pos:'Phó từ',vn:'khoảng chừng, ước chừng',em:'≈',lesson:4,
   explain:['Ước lượng gần đúng về số lượng/thời gian (tương tự 大概 nghĩa 1).'],
   usage:'大约 + số lượng: 大约3000多年, 大约20%.',
   collo:['大约已经有3000多年','大约20%的人','大约半个小时'],
   ex_zh:'筷子在中国大约已经有3000多年的历史了。',ex_py:'Kuàizi zài Zhōngguó dàyuē yǐjīng yǒu sānqiān duō nián de lìshǐ le.',ex_vn:'Đũa ở Trung Quốc đã có lịch sử khoảng hơn 3000 năm.',
   exList:[
     {zh:'筷子在中国大约已经有3000多年的历史了。',py:'Kuàizi zài Zhōngguó dàyuē yǐjīng yǒu sānqiān duō nián de lìshǐ le.',vn:'Đũa ở Trung Quốc đã có lịch sử khoảng hơn 3000 năm.'},
     {zh:'接受调查的学生中，只有大约20%的人开始申请国外学校。',py:'Jiēshòu diàochá de xuésheng zhōng, zhǐyǒu dàyuē bǎifēnzhī èrshí de rén kāishǐ shēnqǐng guówài xuéxiào.',vn:'Trong số học sinh được khảo sát, chỉ khoảng 20% bắt đầu nộp đơn xin trường nước ngoài.'},
     {zh:'从这儿到机场大约要半个小时。',py:'Cóng zhèr dào jīchǎng dàyuē yào bàn ge xiǎoshí.',vn:'Từ đây đến sân bay khoảng nửa tiếng.'},
   ],
   hanzi:[
     {c:'约',p:'yuē',type:'左右结构 · Trái-phải (giản thể)',st:6,ord:'纟 (mịch) trái → 勺 phải',rad:'纟 (mịch)',mean:'ước, hẹn',
      tip:'Bộ sợi 纟 + 勺 → BUỘC, HẸN ƯỚC, kết hợp 大 thành 大约 = ƯỚC CHỪNG (ôn lại 节约 Bài 12).',
      cf:'同字词: 约会 / 节约 / 大约',w:'大约 / 约会 / 节约'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đũa ở Trung Quốc đã có lịch sử khoảng hơn 3000 năm.',answer:'筷子在中国大约已经有3000多年的历史了。',answerPy:'Kuàizi zài Zhōngguó dàyuē yǐjīng yǒu sānqiān duō nián de lìshǐ le.',
      note:'大约 + số lượng — ước chừng.'},
     {promptLang:'vi',prompt:'Hơn 80% người hy vọng được du học, nhưng trong đó chỉ khoảng 20% bắt đầu nộp đơn.',answer:'超过80%的人希望能出国留学，但这其中只有大约20%的人开始申请。',answerPy:'Chāoguò bǎifēnzhī bāshí de rén xīwàng néng chūguó liúxué, dàn zhè qízhōng zhǐyǒu dàyuē bǎifēnzhī èrshí de rén kāishǐ shēnqǐng.',
      note:'其中 (Bài 6) + 百分之 (Bài 6) + 申请 (từ mới).'},
   ]},

  {n:21,zh:'餐厅',py:'cāntīng',pos:'Danh từ',vn:'nhà hàng',em:'🍽️',lesson:4,
   explain:['Nơi phục vụ ăn uống.'],
   usage:'中国餐厅; 在餐厅吃饭; 一家餐厅.',
   collo:['国外的中国餐厅','在餐厅吃饭','一家餐厅'],
   ex_zh:'国外的一些中国餐厅在放筷子的纸袋上会提供使用筷子的详细说明。',ex_py:'Guówài de yìxiē Zhōngguó cāntīng zài fàng kuàizi de zhǐdài shang huì tígōng shǐyòng kuàizi de xiángxì shuōmíng.',ex_vn:'Một số nhà hàng Trung Quốc ở nước ngoài in hướng dẫn chi tiết cách dùng đũa trên túi giấy đựng đũa.',
   exList:[
     {zh:'国外的一些中国餐厅在放筷子的纸袋上会提供使用筷子的详细说明。',py:'Guówài de yìxiē Zhōngguó cāntīng zài fàng kuàizi de zhǐdài shang huì tígōng shǐyòng kuàizi de xiángxì shuōmíng.',vn:'Một số nhà hàng Trung Quốc ở nước ngoài in hướng dẫn chi tiết cách dùng đũa trên túi giấy đựng đũa.'},
     {zh:'这家餐厅的菜又便宜又好吃，天天都有很多人。',py:'Zhè jiā cāntīng de cài yòu piányi yòu hǎochī, tiāntiān dōu yǒu hěn duō rén.',vn:'Món ăn nhà hàng này vừa rẻ vừa ngon, ngày nào cũng đông người.'},
     {zh:'我们在学校附近的餐厅商量了活动的计划。',py:'Wǒmen zài xuéxiào fùjìn de cāntīng shāngliangle huódòng de jìhuà.',vn:'Chúng tôi bàn kế hoạch hoạt động ở nhà hàng gần trường.'},
   ],
   hanzi:[
     {c:'餐',p:'cān',type:'上下结构 · Trên-dưới',st:16,ord:'歺+又 trên → 食 dưới',rad:'食 (thực – ăn)',mean:'bữa ăn',
      tip:'Bộ ăn 食 ở dưới + phần trên biểu âm → BỮA ĂN, kết hợp 厅(sảnh) thành 餐厅 = NHÀ HÀNG (ôn lại 客厅 Bài 11).',
      cf:'同字词: 客厅 / 餐厅 / 大厅',w:'餐厅 / 早餐 / 西餐'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món ăn nhà hàng này vừa rẻ vừa ngon, ngày nào cũng đông người.',answer:'这家餐厅的菜又便宜又好吃，天天都有很多人。',answerPy:'Zhè jiā cāntīng de cài yòu piányi yòu hǎochī, tiāntiān dōu yǒu hěn duō rén.',
      note:'又……又 + 天天 (lặp danh từ, Bài 12).'},
     {promptLang:'vi',prompt:'Một số nhà hàng Trung Quốc ở nước ngoài cung cấp hướng dẫn chi tiết cách dùng đũa.',answer:'国外的一些中国餐厅会提供使用筷子的详细说明。',answerPy:'Guówài de yìxiē Zhōngguó cāntīng huì tígōng shǐyòng kuàizi de xiángxì shuōmíng.',
      note:'提供 (Bài 8) + 使用/详细 (Bài 12).'},
   ]},

  {n:22,zh:'纸袋',py:'zhǐdài',pos:'Danh từ',vn:'túi giấy',em:'🛍️',lesson:4,
   explain:['Túi làm bằng giấy; 袋(子) = túi nói chung.'],
   usage:'放筷子的纸袋; 一个纸袋; 袋子.',
   collo:['放筷子的纸袋','一个纸袋','塑料袋'],
   ex_zh:'在放筷子的纸袋上会提供使用筷子的详细说明。',ex_py:'Zài fàng kuàizi de zhǐdài shang huì tígōng shǐyòng kuàizi de xiángxì shuōmíng.',ex_vn:'Trên túi giấy đựng đũa có in hướng dẫn chi tiết cách dùng đũa.',
   exList:[
     {zh:'在放筷子的纸袋上会提供使用筷子的详细说明。',py:'Zài fàng kuàizi de zhǐdài shang huì tígōng shǐyòng kuàizi de xiángxì shuōmíng.',vn:'Trên túi giấy đựng đũa có in hướng dẫn chi tiết cách dùng đũa.'},
     {zh:'为了保护环境，超市现在都用纸袋，不用塑料袋了。',py:'Wèile bǎohù huánjìng, chāoshì xiànzài dōu yòng zhǐdài, bú yòng sùliàodài le.',vn:'Để bảo vệ môi trường, siêu thị bây giờ đều dùng túi giấy, không dùng túi ni lông nữa.'},
     {zh:'请把这些东西放进袋子里。',py:'Qǐng bǎ zhèxiē dōngxi fàngjìn dàizi li.',vn:'Xin hãy cho những thứ này vào túi.'},
   ],
   hanzi:[
     {c:'袋',p:'dài',type:'上下结构 · Trên-dưới',st:11,ord:'代 trên → 衣 dưới',rad:'衣 (y – áo, vải)',mean:'túi',
      tip:'Bộ vải 衣 + 代(biểu âm) → TÚI (làm bằng vải/giấy).',
      cf:'代 (dài – "thay", phần trên)',w:'纸袋 / 袋子 / 口袋'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để bảo vệ môi trường, siêu thị bây giờ đều dùng túi giấy.',answer:'为了保护环境，超市现在都用纸袋。',answerPy:'Wèile bǎohù huánjìng, chāoshì xiànzài dōu yòng zhǐdài.',
      note:'保护 ôn lại từ vựng Bài 12.'},
     {promptLang:'vi',prompt:'Xin hãy cho những thứ này vào túi.',answer:'请把这些东西放进袋子里。',answerPy:'Qǐng bǎ zhèxiē dōngxi fàngjìn dàizi li.',
      note:'Câu chữ 把 + 放进.'},
   ]},

  {n:23,zh:'互联网',py:'hùliánwǎng',pos:'Danh từ',vn:'mạng Internet',em:'🌐',lesson:4,
   explain:['Mạng máy tính toàn cầu.'],
   usage:'在互联网上; 通过互联网; 互联网的发展.',
   collo:['在互联网上进行调查','通过互联网','互联网的发展'],
   ex_zh:'有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子的方法是错误的。',ex_py:'Yǒu rén zài hùliánwǎng shang zhuānmén jìnxíngguo diàochá, jiéguǒ fāxiàn měi liù ge Zhōngguó rén zhōng jiù yǒu yí ge shǐyòng kuàizi de fāngfǎ shì cuòwù de.',ex_vn:'Có người đã tiến hành khảo sát chuyên biệt trên Internet, kết quả phát hiện cứ sáu người Trung Quốc thì có một người dùng đũa sai cách.',
   exList:[
     {zh:'有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子的方法是错误的。',py:'Yǒu rén zài hùliánwǎng shang zhuānmén jìnxíngguo diàochá, jiéguǒ fāxiàn měi liù ge Zhōngguó rén zhōng jiù yǒu yí ge shǐyòng kuàizi de fāngfǎ shì cuòwù de.',vn:'Có người đã tiến hành khảo sát chuyên biệt trên Internet, kết quả phát hiện cứ sáu người Trung Quốc thì có một người dùng đũa sai cách.'},
     {zh:'随着互联网的发展，越来越多的人喜欢在网上写日记。',py:'Suízhe hùliánwǎng de fāzhǎn, yuè lái yuè duō de rén xǐhuan zài wǎngshàng xiě rìjì.',vn:'Cùng với sự phát triển của Internet, ngày càng nhiều người thích viết nhật ký trên mạng.'},
     {zh:'通过互联网，我们可以很快地找到需要的信息。',py:'Tōngguò hùliánwǎng, wǒmen kěyǐ hěn kuài de zhǎodào xūyào de xìnxī.',vn:'Thông qua Internet, chúng ta có thể nhanh chóng tìm được thông tin cần thiết.'},
   ],
   hanzi:[
     {c:'联',p:'lián',type:'左右结构 · Trái-phải (giản thể)',st:12,ord:'耳 (nhĩ) trái → 关 phải',rad:'耳 (nhĩ – tai)',mean:'liên kết',
      tip:'Bộ tai 耳 + 关 → NỐI LIỀN, kết hợp 互(lẫn nhau) + 网(mạng) thành 互联网 = INTERNET.',
      cf:'耶 (yē – bộ 耳 + 阝)',w:'互联网 / 联系 / 联合'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cùng với sự phát triển của Internet, ngày càng nhiều người thích viết nhật ký trên mạng.',answer:'随着互联网的发展，越来越多的人喜欢在网上写日记。',answerPy:'Suízhe hùliánwǎng de fāzhǎn, yuè lái yuè duō de rén xǐhuan zài wǎngshàng xiě rìjì.',
      note:'Bài luyện tập 随着 SGK (1); 发展 (Bài 10).'},
     {promptLang:'vi',prompt:'Thông qua Internet, chúng ta có thể nhanh chóng tìm được thông tin cần thiết.',answer:'通过互联网，我们可以很快地找到需要的信息。',answerPy:'Tōngguò hùliánwǎng, wǒmen kěyǐ hěn kuài de zhǎodào xūyào de xìnxī.',
      note:'通过 ôn lại ngữ pháp Bài 9.'},
   ]},

  {n:24,zh:'进行',py:'jìnxíng',pos:'Động từ',vn:'tiến hành, thực hiện',em:'⚙️',lesson:4,
   explain:['Thực hiện hoạt động/công việc nào đó; thường đứng trước động từ hai âm tiết mang tính chính thức (调查, 讨论, 交流…).'],
   usage:'进行 + 调查/讨论/交流/研究; 会议继续进行.',
   collo:['进行过调查','继续进行','进行交流'],
   ex_zh:'有人在互联网上专门进行过调查。',ex_py:'Yǒu rén zài hùliánwǎng shang zhuānmén jìnxíngguo diàochá.',ex_vn:'Có người đã tiến hành khảo sát chuyên biệt trên Internet.',
   exList:[
     {zh:'有人在互联网上专门进行过调查。',py:'Yǒu rén zài hùliánwǎng shang zhuānmén jìnxíngguo diàochá.',vn:'Có người đã tiến hành khảo sát chuyên biệt trên Internet.'},
     {zh:'大家请注意，现在休息十五分钟，十点半会议继续进行。',py:'Dàjiā qǐng zhùyì, xiànzài xiūxi shíwǔ fēnzhōng, shí diǎn bàn huìyì jìxù jìnxíng.',vn:'Mọi người chú ý, bây giờ nghỉ 15 phút, 10 giờ rưỡi hội nghị tiếp tục.'},
     {zh:'成功的语言学习者，在学习方面往往都是积极主动的，他们会主动与他人进行交流。',py:'Chénggōng de yǔyán xuéxízhě, zài xuéxí fāngmiàn wǎngwǎng dōu shì jījí zhǔdòng de, tāmen huì zhǔdòng yǔ tārén jìnxíng jiāoliú.',vn:'Người học ngôn ngữ thành công, về mặt học tập thường đều tích cực chủ động, họ sẽ chủ động giao lưu với người khác.'},
   ],
   hanzi:[
     {c:'进',p:'jìn',type:'半包围结构 · Bán bao vây (giản thể)',st:7,ord:'井 trong → 辶 bao',rad:'辶 (sước – đi)',mean:'tiến, vào',
      tip:'Bộ đi 辶 + 井 → ĐI VÀO, TIẾN, kết hợp 行(làm) thành 进行 = TIẾN HÀNH.',
      cf:'近 (jìn – "gần", cũng bộ 辶)',w:'进行 / 进步 / 进入'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã 6 giờ rồi, sao hội nghị vẫn chưa kết thúc? — Vẫn đang tiến hành, có lẽ còn nửa tiếng nữa.',answer:'都六点了，会议怎么还没结束？——还在进行，大概还要半个小时。',answerPy:'Dōu liù diǎn le, huìyì zěnme hái méi jiéshù? — Hái zài jìnxíng, dàgài hái yào bàn ge xiǎoshí.',
      note:'Bài luyện tập SGK (1); 大概 (ngữ pháp của bài).'},
     {promptLang:'vi',prompt:'Người học ngôn ngữ thành công thường chủ động giao lưu với người khác, hơn nữa nhờ người khác sửa lỗi.',answer:'成功的语言学习者往往会主动与他人进行交流，并且请别人帮助他们改错。',answerPy:'Chénggōng de yǔyán xuéxízhě wǎngwǎng huì zhǔdòng yǔ tārén jìnxíng jiāoliú, bìngqiě qǐng biérén bāngzhù tāmen gǎicuò.',
      note:'往往 (Bài 8) + 并且 (Bài 12).'},
   ]},

  {n:25,zh:'错误',py:'cuòwù',pos:'Tính từ/Danh từ',vn:'sai; sai lầm',em:'❌',lesson:4,
   explain:['Không đúng; hoặc lỗi sai.'],
   usage:'方法是错误的; 错误的选择; 犯错误.',
   collo:['使用筷子的方法是错误的','错误的选择','改正错误'],
   ex_zh:'结果发现每六个中国人中就有一个使用筷子的方法是错误的。',ex_py:'Jiéguǒ fāxiàn měi liù ge Zhōngguó rén zhōng jiù yǒu yí ge shǐyòng kuàizi de fāngfǎ shì cuòwù de.',ex_vn:'Kết quả phát hiện cứ sáu người Trung Quốc thì có một người dùng đũa sai cách.',
   exList:[
     {zh:'结果发现每六个中国人中就有一个使用筷子的方法是错误的。',py:'Jiéguǒ fāxiàn měi liù ge Zhōngguó rén zhōng jiù yǒu yí ge shǐyòng kuàizi de fāngfǎ shì cuòwù de.',vn:'Kết quả phát hiện cứ sáu người Trung Quốc thì có một người dùng đũa sai cách.'},
     {zh:'一个错误的选择可能让你失去很多机会。',py:'Yí ge cuòwù de xuǎnzé kěnéng ràng nǐ shīqù hěn duō jīhuì.',vn:'Một lựa chọn sai lầm có thể khiến bạn mất nhiều cơ hội.'},
     {zh:'人人都会犯错误，关键是要及时改正。',py:'Rénrén dōu huì fàn cuòwù, guānjiàn shì yào jíshí gǎizhèng.',vn:'Ai cũng có thể mắc sai lầm, quan trọng là phải kịp thời sửa.'},
   ],
   hanzi:[
     {c:'错',p:'cuò',type:'左右结构 · Trái-phải (giản thể)',st:13,ord:'钅(kim) trái → 昔 phải',rad:'钅 (kim)',mean:'sai, lẫn',
      tip:'Bộ kim 钅 + 昔 → nghĩa gốc là mạ vàng đan xen, mượn nghĩa LẪN LỘN → SAI, kết hợp 误 thành 错误 = SAI LẦM (ôn lại 误会 Bài 12).',
      cf:'借 (jiè – "mượn", bộ 亻 + 昔)',w:'错误 / 错 / 误会'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ai cũng có thể mắc sai lầm, quan trọng là phải kịp thời sửa.',answer:'人人都会犯错误，关键是要及时改正。',answerPy:'Rénrén dōu huì fàn cuòwù, guānjiàn shì yào jíshí gǎizhèng.',
      note:'人人 (Bài 12) + 关键 (Bài 10).'},
     {promptLang:'vi',prompt:'Nếu bạn cho rằng mỗi người Trung Quốc đều dùng đũa đúng cách, thì sai rồi.',answer:'如果你认为每个中国人都会正确使用筷子，那就错了。',answerPy:'Rúguǒ nǐ rènwéi měi ge Zhōngguó rén dōu huì zhèngquè shǐyòng kuàizi, nà jiù cuò le.',
      note:'正确 (Bài 9) + 使用 (Bài 12).'},
   ]},

  {n:26,zh:'随着',py:'suízhe',pos:'Giới từ',vn:'cùng với, theo (sự thay đổi của…)',em:'📈',lesson:5,
   explain:['Chỉ một sự việc là điều kiện để sự việc khác xảy ra; sau 随着 thường là động từ hai âm tiết có bổ nghĩa (……的发展/增长/加深).'],
   usage:'随着 + ……的发展/加深/增长，……',
   collo:['随着社会的发展','随着人们对茶的认识的加深','随着年龄的增长'],
   ex_zh:'后来，随着人们对茶的认识的加深，慢慢开始把它当作解渴的饮料。',ex_py:'Hòulái, suízhe rénmen duì chá de rènshi de jiāshēn, mànmàn kāishǐ bǎ tā dàngzuò jiě kě de yǐnliào.',ex_vn:'Sau này, cùng với nhận thức về trà ngày càng sâu, người ta dần bắt đầu coi nó là thức uống giải khát.',
   exList:[
     {zh:'后来，随着人们对茶的认识的加深，慢慢开始把它当作解渴的饮料。',py:'Hòulái, suízhe rénmen duì chá de rènshi de jiāshēn, mànmàn kāishǐ bǎ tā dàngzuò jiě kě de yǐnliào.',vn:'Sau này, cùng với nhận thức về trà ngày càng sâu, người ta dần bắt đầu coi nó là thức uống giải khát.'},
     {zh:'随着社会的发展，京剧也在改变，以适应不同年龄观众的需要。',py:'Suízhe shèhuì de fāzhǎn, jīngjù yě zài gǎibiàn, yǐ shìyìng bù tóng niánlíng guānzhòng de xūyào.',vn:'Cùng với sự phát triển của xã hội, Kinh kịch cũng đang thay đổi để thích ứng nhu cầu khán giả các độ tuổi.'},
     {zh:'随着年龄的增长，他们会发现生活总是在不停地变化。',py:'Suízhe niánlíng de zēngzhǎng, tāmen huì fāxiàn shēnghuó zǒngshì zài bù tíng de biànhuà.',vn:'Cùng với tuổi tác tăng lên, họ sẽ phát hiện cuộc sống luôn không ngừng thay đổi.'},
   ],
   hanzi:[
     {c:'随',p:'suí',type:'左右结构 · Trái-phải (giản thể)',st:11,ord:'阝 trái → 有+辶 phải',rad:'阝 (phụ – gò đất)',mean:'theo',
      tip:'Bộ 阝 + 辶(đi) → ĐI THEO, kết hợp 着 thành 随着 = CÙNG VỚI, THEO (ôn lại 随便 Bài 9).',
      cf:'堕 (duò – "rơi", bộ 土)',w:'随着 / 随便 / 随时'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cùng với sự phát triển của xã hội, tiêu chuẩn về cái đẹp luôn thay đổi: xưa lấy béo làm đẹp, nay lấy gầy làm đẹp.',answer:'随着社会的发展，美的标准一直在变。过去人们以胖为美，现在的人以瘦为美。',answerPy:'Suízhe shèhuì de fāzhǎn, měi de biāozhǔn yìzhí zài biàn. Guòqù rénmen yǐ pàng wéi měi, xiànzài de rén yǐ shòu wéi měi.',
      note:'Bài luyện tập SGK (2); 标准 (Bài 10).'},
     {promptLang:'vi',prompt:'Hồi nhỏ chúng ta thường có nhiều lý tưởng lãng mạn, nhưng cùng với tuổi tác tăng lên, những giấc mơ ấy dần rời xa.',answer:'小时候我们往往会有许多浪漫的理想，但是随着年龄的增长，那些梦慢慢地离我们远去了。',answerPy:'Xiǎoshíhou wǒmen wǎngwǎng huì yǒu xǔduō làngmàn de lǐxiǎng, dànshì suízhe niánlíng de zēngzhǎng, nàxiē mèng mànmàn de lí wǒmen yuǎnqù le.',
      note:'Bài luyện tập SGK (3); 往往 (Bài 8), 理想 (Bài 9).'},
   ]},

  {n:27,zh:'十分',py:'shífēn',pos:'Phó từ',vn:'rất, vô cùng',em:'💯',lesson:5,
   explain:['Mức độ cao, tương đương 非常.'],
   usage:'十分 + tính từ: 十分普遍, 十分重要, 十分满意.',
   collo:['十分普遍','十分重要','十分满意'],
   ex_zh:'在中国，喝茶是一种十分普遍的生活习惯。',ex_py:'Zài Zhōngguó, hē chá shì yì zhǒng shífēn pǔbiàn de shēnghuó xíguàn.',ex_vn:'Ở Trung Quốc, uống trà là một thói quen sinh hoạt vô cùng phổ biến.',
   exList:[
     {zh:'在中国，喝茶是一种十分普遍的生活习惯。',py:'Zài Zhōngguó, hē chá shì yì zhǒng shífēn pǔbiàn de shēnghuó xíguàn.',vn:'Ở Trung Quốc, uống trà là một thói quen sinh hoạt vô cùng phổ biến.'},
     {zh:'对于这次调查计划，经理十分满意。',py:'Duìyú zhè cì diàochá jìhuà, jīnglǐ shífēn mǎnyì.',vn:'Đối với kế hoạch khảo sát lần này, giám đốc vô cùng hài lòng.'},
     {zh:'养成阅读的习惯十分重要。',py:'Yǎngchéng yuèdú de xíguàn shífēn zhòngyào.',vn:'Hình thành thói quen đọc sách vô cùng quan trọng.'},
   ],
   hanzi:[
     {c:'分',p:'fēn',type:'上下结构 · Trên-dưới',st:4,ord:'八 trên → 刀 dưới',rad:'刀 (đao)',mean:'chia, phần',
      tip:'Chữ hội ý dao 刀 CHIA đôi 八 → PHẦN; 十分 = mười phần (trọn vẹn) → RẤT.',
      cf:'公 (gōng – "công", tự dạng gần giống)',w:'十分 / 分钟 / 部分'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với kế hoạch khảo sát lần này, giám đốc vô cùng hài lòng.',answer:'对于这次调查计划，经理十分满意。',answerPy:'Duìyú zhè cì diàochá jìhuà, jīnglǐ shífēn mǎnyì.',
      note:'对于 ôn lại ngữ pháp Bài 12.'},
     {promptLang:'vi',prompt:'Hình thành thói quen đọc sách vô cùng quan trọng đối với việc học.',answer:'养成阅读的习惯对学习十分重要。',answerPy:'Yǎngchéng yuèdú de xíguàn duì xuéxí shífēn zhòngyào.',
      note:'养成/阅读 ôn lại từ vựng Bài 11.'},
   ]},

  {n:28,zh:'普遍',py:'pǔbiàn',pos:'Tính từ',vn:'phổ biến',em:'🌏',lesson:5,
   explain:['Tồn tại rộng rãi, ở đâu cũng có.'],
   usage:'十分普遍的习惯; 越来越普遍; 普遍现象.',
   collo:['十分普遍的生活习惯','越来越普遍','普遍的现象'],
   ex_zh:'在中国，喝茶是一种十分普遍的生活习惯。',ex_py:'Zài Zhōngguó, hē chá shì yì zhǒng shífēn pǔbiàn de shēnghuó xíguàn.',ex_vn:'Ở Trung Quốc, uống trà là một thói quen sinh hoạt vô cùng phổ biến.',
   exList:[
     {zh:'在中国，喝茶是一种十分普遍的生活习惯。',py:'Zài Zhōngguó, hē chá shì yì zhǒng shífēn pǔbiàn de shēnghuó xíguàn.',vn:'Ở Trung Quốc, uống trà là một thói quen sinh hoạt vô cùng phổ biến.'},
     {zh:'很多大学生毕业后，选择的第一个职业，往往和自己的专业没什么关系，这种情况现在越来越普遍。',py:'Hěn duō dàxuéshēng bìyè hòu, xuǎnzé de dì-yī ge zhíyè, wǎngwǎng hé zìjǐ de zhuānyè méi shénme guānxi, zhè zhǒng qíngkuàng xiànzài yuè lái yuè pǔbiàn.',vn:'Nhiều sinh viên sau khi tốt nghiệp, nghề đầu tiên chọn thường không liên quan đến chuyên ngành, tình trạng này ngày càng phổ biến.'},
     {zh:'用手机付钱在中国已经非常普遍了。',py:'Yòng shǒujī fù qián zài Zhōngguó yǐjīng fēicháng pǔbiàn le.',vn:'Dùng điện thoại thanh toán ở Trung Quốc đã rất phổ biến.'},
   ],
   hanzi:[
     {c:'普',p:'pǔ',type:'上下结构 · Trên-dưới',st:12,ord:'並 trên → 日 dưới',rad:'日 (nhật)',mean:'rộng khắp',
      tip:'Mặt trời 日 chiếu KHẮP nơi → RỘNG KHẮP, kết hợp 遍(khắp) thành 普遍 = PHỔ BIẾN.',
      cf:'谱 (pǔ – "phổ, bản nhạc", bộ 讠)',w:'普遍 / 普通 / 普通话'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghề đầu tiên sinh viên chọn thường không liên quan đến chuyên ngành, tình trạng này ngày càng phổ biến.',answer:'大学生选择的第一个职业往往和自己的专业没什么关系，这种情况现在越来越普遍。',answerPy:'Dàxuéshēng xuǎnzé de dì-yī ge zhíyè wǎngwǎng hé zìjǐ de zhuānyè méi shénme guānxi, zhè zhǒng qíngkuàng xiànzài yuè lái yuè pǔbiàn.',
      note:'练习2 SGK (5); 往往 (Bài 8), 职业 (Bài 10).'},
     {promptLang:'vi',prompt:'Dùng điện thoại thanh toán ở Trung Quốc đã rất phổ biến.',answer:'用手机付钱在中国已经非常普遍了。',answerPy:'Yòng shǒujī fù qián zài Zhōngguó yǐjīng fēicháng pǔbiàn le.',
      note:'已经……了 chỉ sự thay đổi.'},
   ]},

  {n:29,zh:'部分',py:'bùfen',pos:'Danh từ',vn:'phần, bộ phận',em:'🧩',lesson:5,
   explain:['Một phần của toàn thể.'],
   usage:'不可缺少的一部分; 前一部分; 大部分.',
   collo:['生活中不可缺少的一部分','前一部分','大部分人'],
   ex_zh:'对很多中国人来说，喝茶已成为他们生活中不可缺少的一部分。',ex_py:'Duì hěn duō Zhōngguó rén lái shuō, hē chá yǐ chéngwéi tāmen shēnghuó zhōng bù kě quēshǎo de yí bùfen.',ex_vn:'Đối với nhiều người Trung Quốc, uống trà đã trở thành một phần không thể thiếu trong cuộc sống.',
   exList:[
     {zh:'对很多中国人来说，喝茶已成为他们生活中不可缺少的一部分。',py:'Duì hěn duō Zhōngguó rén lái shuō, hē chá yǐ chéngwéi tāmen shēnghuó zhōng bù kě quēshǎo de yí bùfen.',vn:'Đối với nhiều người Trung Quốc, uống trà đã trở thành một phần không thể thiếu trong cuộc sống.'},
     {zh:'这篇文章是介绍京剧的，前一部分介绍京剧的发展历史，第二部分主要谈京剧的发展方向。',py:'Zhè piān wénzhāng shì jièshào jīngjù de, qián yí bùfen jièshào jīngjù de fāzhǎn lìshǐ, dì-èr bùfen zhǔyào tán jīngjù de fāzhǎn fāngxiàng.',vn:'Bài văn này giới thiệu Kinh kịch, phần đầu giới thiệu lịch sử phát triển, phần hai chủ yếu bàn về hướng phát triển của Kinh kịch.'},
     {zh:'大部分学生都希望有机会出国留学。',py:'Dà bùfen xuésheng dōu xīwàng yǒu jīhuì chūguó liúxué.',vn:'Phần lớn học sinh đều hy vọng có cơ hội du học.'},
   ],
   hanzi:[
     {c:'部',p:'bù',type:'左右结构 · Trái-phải',st:10,ord:'咅 trái → 阝 phải',rad:'阝 (ấp – vùng)',mean:'bộ, phần',
      tip:'Bộ 阝(vùng đất) + 咅 → nghĩa gốc là VÙNG, mở rộng thành BỘ PHẬN, kết hợp 分 thành 部分 = PHẦN.',
      cf:'陪 (péi – "cùng", bộ 阝 bên trái)',w:'部分 / 全部 / 大部分'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với nhiều người Trung Quốc, uống trà đã trở thành một phần không thể thiếu trong cuộc sống.',answer:'对很多中国人来说，喝茶已成为他们生活中不可缺少的一部分。',answerPy:'Duì hěn duō Zhōngguó rén lái shuō, hē chá yǐ chéngwéi tāmen shēnghuó zhōng bù kě quēshǎo de yí bùfen.',
      note:'对……来说 (Bài 5) + 缺少 (Bài 8) + 成为 (Bài 8).'},
     {promptLang:'vi',prompt:'Bài văn này giới thiệu Kinh kịch, phần đầu do tôi viết, phần hai do bạn tôi viết.',answer:'这篇文章是介绍京剧的，前一部分由我写，第二部分由我朋友写。',answerPy:'Zhè piān wénzhāng shì jièshào jīngjù de, qián yí bùfen yóu wǒ xiě, dì-èr bùfen yóu wǒ péngyou xiě.',
      note:'Bài luyện tập 由 SGK (2); 文章 (Bài 11).'},
   ]},

  {n:30,zh:'稍微',py:'shāowēi',pos:'Phó từ',vn:'hơi, một chút',em:'🤏',lesson:5,
   explain:['Mức độ nhẹ, số lượng ít.'],
   usage:'稍微 + 有点儿/一点儿: 稍微有点儿苦, 稍微休息一下.',
   collo:['稍微有点儿苦','稍微休息一下','稍微等一会儿'],
   ex_zh:'比如广东省的人爱喝的"凉茶"，它的味道稍微有点儿苦，其实是一种用中药做成的饮料。',ex_py:'Bǐrú Guǎngdōng Shěng de rén ài hē de "liángchá", tā de wèidào shāowēi yǒudiǎnr kǔ, qíshí shì yì zhǒng yòng zhōngyào zuòchéng de yǐnliào.',ex_vn:'Ví dụ "trà mát" người Quảng Đông thích uống, vị hơi đắng một chút, thực ra là thức uống làm từ thuốc bắc.',
   exList:[
     {zh:'比如广东省的人爱喝的"凉茶"，它的味道稍微有点儿苦，其实是一种用中药做成的饮料。',py:'Bǐrú Guǎngdōng Shěng de rén ài hē de "liángchá", tā de wèidào shāowēi yǒudiǎnr kǔ, qíshí shì yì zhǒng yòng zhōngyào zuòchéng de yǐnliào.',vn:'Ví dụ "trà mát" người Quảng Đông thích uống, vị hơi đắng một chút, thực ra là thức uống làm từ thuốc bắc.'},
     {zh:'孙小姐，我们大概什么时候出发？——大家先回房间稍微休息一下，半个小时后我们楼下集合。',py:'Sūn xiǎojiě, wǒmen dàgài shénme shíhou chūfā? — Dàjiā xiān huí fángjiān shāowēi xiūxi yíxià, bàn ge xiǎoshí hòu wǒmen lóuxià jíhé.',vn:'Cô Tôn, khoảng khi nào chúng ta xuất phát? — Mọi người về phòng nghỉ một chút, nửa tiếng sau tập trung dưới lầu.'},
     {zh:'这道题稍微有点儿难，你再仔细想想。',py:'Zhè dào tí shāowēi yǒudiǎnr nán, nǐ zài zǐxì xiǎngxiang.',vn:'Câu này hơi khó một chút, bạn nghĩ kỹ lại xem.'},
   ],
   hanzi:[
     {c:'微',p:'wēi',type:'左中右结构 · Trái-giữa-phải',st:13,ord:'彳 trái → 山+一+几 giữa → 攵 phải',rad:'彳 (xích – bước nhỏ)',mean:'nhỏ, ít',
      tip:'Bộ bước nhỏ 彳 → NHỎ BÉ, kết hợp 稍(hơi) thành 稍微 = HƠI, MỘT CHÚT.',
      cf:'徽 (huī – "huy hiệu")',w:'稍微 / 微笑 / 微信'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mọi người về phòng nghỉ một chút, nửa tiếng sau tập trung dưới lầu.',answer:'大家先回房间稍微休息一下，半个小时后我们楼下集合。',answerPy:'Dàjiā xiān huí fángjiān shāowēi xiūxi yíxià, bàn ge xiǎoshí hòu wǒmen lóuxià jíhé.',
      note:'练习2 SGK (10).'},
     {promptLang:'vi',prompt:'Câu này hơi khó một chút, bạn nghĩ kỹ lại xem.',answer:'这道题稍微有点儿难，你再仔细想想。',answerPy:'Zhè dào tí shāowēi yǒudiǎnr nán, nǐ zài zǐxì xiǎngxiang.',
      note:'仔细 ôn lại từ vựng Bài 12.'},
   ]},

  {n:31,zh:'苦',py:'kǔ',pos:'Tính từ',vn:'đắng; khổ',em:'☕',lesson:5,
   explain:['1. Vị đắng.','2. Khổ cực (辛苦, 吃苦).'],
   usage:'味道有点儿苦; 苦药; 很苦.',
   collo:['味道稍微有点儿苦','凉茶虽然味道苦','良药苦口'],
   ex_zh:'它的味道稍微有点儿苦，其实是一种用中药做成的饮料。',ex_py:'Tā de wèidào shāowēi yǒudiǎnr kǔ, qíshí shì yì zhǒng yòng zhōngyào zuòchéng de yǐnliào.',ex_vn:'Vị của nó hơi đắng một chút, thực ra là thức uống làm từ thuốc bắc.',
   exList:[
     {zh:'它的味道稍微有点儿苦，其实是一种用中药做成的饮料。',py:'Tā de wèidào shāowēi yǒudiǎnr kǔ, qíshí shì yì zhǒng yòng zhōngyào zuòchéng de yǐnliào.',vn:'Vị của nó hơi đắng một chút, thực ra là thức uống làm từ thuốc bắc.'},
     {zh:'凉茶虽然味道苦，但对身体很有好处。',py:'Liángchá suīrán wèidào kǔ, dàn duì shēntǐ hěn yǒu hǎochù.',vn:'Trà mát tuy vị đắng, nhưng rất tốt cho sức khỏe.'},
     {zh:'这种咖啡不加糖的话有点儿苦。',py:'Zhè zhǒng kāfēi bù jiā táng de huà yǒudiǎnr kǔ.',vn:'Loại cà phê này nếu không thêm đường thì hơi đắng.'},
   ],
   hanzi:[
     {c:'苦',p:'kǔ',type:'上下结构 · Trên-dưới',st:8,ord:'艹 (thảo) trên → 古 dưới',rad:'艹 (thảo – cỏ)',mean:'đắng, khổ',
      tip:'Bộ cỏ 艹 + 古 → loại cỏ ĐẮNG (khổ sâm), mở rộng thành KHỔ CỰC (辛苦 Bài 9).',
      cf:'古 (gǔ – "cổ", phần dưới)',w:'苦 / 辛苦 / 吃苦'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trà mát tuy vị đắng, nhưng rất tốt cho sức khỏe. Ngoài ra, uống nóng hiệu quả cũng rất tốt.',answer:'凉茶虽然味道苦，但对身体很有好处。另外，凉茶热着喝效果也很不错。',answerPy:'Liángchá suīrán wèidào kǔ, dàn duì shēntǐ hěn yǒu hǎochù. Lìngwài, liángchá rèzhe hē xiàoguǒ yě hěn búcuò.',
      note:'练习2 SGK (3); 另外 (Bài 3), 好处 (Bài 6).'},
     {promptLang:'vi',prompt:'Loại cà phê này nếu không thêm đường thì hơi đắng.',answer:'这种咖啡不加糖的话有点儿苦。',answerPy:'Zhè zhǒng kāfēi bù jiā táng de huà yǒudiǎnr kǔ.',
      note:'糖 ôn lại từ vựng Bài 10.'},
   ]},

  {n:32,zh:'省',py:'shěng',pos:'Danh từ',vn:'tỉnh',em:'🗺️',lesson:5,
   explain:['Đơn vị hành chính cấp cao nhất dưới quốc gia ở Trung Quốc.'],
   usage:'广东省; 一个省; 省会.',
   collo:['广东省','这个省','省会城市'],
   ex_zh:'比如广东省的人爱喝的"凉茶"，其实是一种用中药做成的饮料。',ex_py:'Bǐrú Guǎngdōng Shěng de rén ài hē de "liángchá", qíshí shì yì zhǒng yòng zhōngyào zuòchéng de yǐnliào.',ex_vn:'Ví dụ "trà mát" người tỉnh Quảng Đông thích uống, thực ra là thức uống làm từ thuốc bắc.',
   exList:[
     {zh:'比如广东省的人爱喝的"凉茶"，其实是一种用中药做成的饮料。',py:'Bǐrú Guǎngdōng Shěng de rén ài hē de "liángchá", qíshí shì yì zhǒng yòng zhōngyào zuòchéng de yǐnliào.',vn:'Ví dụ "trà mát" người tỉnh Quảng Đông thích uống, thực ra là thức uống làm từ thuốc bắc.'},
     {zh:'中国有很多省，每个省都有自己的特点。',py:'Zhōngguó yǒu hěn duō shěng, měi ge shěng dōu yǒu zìjǐ de tèdiǎn.',vn:'Trung Quốc có nhiều tỉnh, mỗi tỉnh đều có đặc điểm riêng.'},
     {zh:'他来自云南省，那儿的茶很有名。',py:'Tā láizì Yúnnán Shěng, nàr de chá hěn yǒumíng.',vn:'Anh ấy đến từ tỉnh Vân Nam, trà ở đó rất nổi tiếng.'},
   ],
   hanzi:[
     {c:'省',p:'shěng',type:'上下结构 · Trên-dưới',st:9,ord:'少 trên → 目 dưới',rad:'目 (mục – mắt)',mean:'tỉnh; tiết kiệm',
      tip:'Chữ hội ý mắt 目 nhìn KỸ (少) → xem xét; mượn chỉ đơn vị hành chính TỈNH. Đọc "xǐng" khi nghĩa là "tỉnh ngộ".',
      cf:'少 (shǎo – "ít", phần trên)',w:'省 / 广东省 / 省钱'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trung Quốc có nhiều tỉnh, mỗi tỉnh đều có đặc điểm riêng.',answer:'中国有很多省，每个省都有自己的特点。',answerPy:'Zhōngguó yǒu hěn duō shěng, měi ge shěng dōu yǒu zìjǐ de tèdiǎn.',
      note:'特点 ôn lại từ vựng Bài 8.'},
     {promptLang:'vi',prompt:'Anh ấy đến từ tỉnh Vân Nam, trà ở đó rất nổi tiếng.',answer:'他来自云南省，那儿的茶很有名。',answerPy:'Tā láizì Yúnnán Shěng, nàr de chá hěn yǒumíng.',
      note:'来自 — từ mới của bài.'},
   ]},

  {n:33,zh:'广东省',py:'Guǎngdōng Shěng',pos:'Danh từ riêng',vn:'tỉnh Quảng Đông (Trung Quốc)',em:'📍',lesson:5,
   explain:['Tỉnh ở miền nam Trung Quốc, nổi tiếng với "凉茶" (trà mát) và ẩm thực Quảng Đông.'],
   usage:'Danh từ riêng chỉ địa danh.',
   collo:['广东省的人','广东省的凉茶'],
   ex_zh:'比如广东省的人爱喝的"凉茶"，它的味道稍微有点儿苦。',ex_py:'Bǐrú Guǎngdōng Shěng de rén ài hē de "liángchá", tā de wèidào shāowēi yǒudiǎnr kǔ.',ex_vn:'Ví dụ "trà mát" người tỉnh Quảng Đông thích uống, vị hơi đắng một chút.',
   exList:[
     {zh:'比如广东省的人爱喝的"凉茶"，它的味道稍微有点儿苦。',py:'Bǐrú Guǎngdōng Shěng de rén ài hē de "liángchá", tā de wèidào shāowēi yǒudiǎnr kǔ.',vn:'Ví dụ "trà mát" người tỉnh Quảng Đông thích uống, vị hơi đắng một chút.'},
   ]},
];

var wuData = [
  {img:'😲',label:'吃惊',py:'chī jīng',letter:'A'},
  {img:'😊',label:'开心',py:'kāixīn',letter:'B'},
  {img:'👥',label:'观众',py:'guānzhòng',letter:'C'},
  {img:'💬',label:'讨论',py:'tǎolùn',letter:'D'},
  {img:'🍽️',label:'餐厅',py:'cāntīng',letter:'E'},
  {img:'🌐',label:'互联网',py:'hùliánwǎng',letter:'F'},
];

var dialogData = [
  {scene:'课文1 · 小雨和小夏在聊小夏的爷爷表演京剧的情况',
   preQuiz:[{q:'小夏的爷爷唱京剧大概唱了多少年了？',opts:['30多年','60多年','8年'],ans:1}],
   lines:[
     {sp:0,zh:'小夏，你爷爷京剧唱得真专业，我还以为他是京剧演员呢。',py:'Xiǎo Xià, nǐ yéye jīngjù chàng de zhēn zhuānyè, wǒ hái yǐwéi tā shì jīngjù yǎnyuán ne.',vn:'Tiểu Hạ, ông bạn hát Kinh kịch chuyên nghiệp thật, tôi còn tưởng ông là diễn viên Kinh kịch.'},
     {sp:1,zh:'对啊，他本来就是京剧演员，年轻时在我们那儿很有名，深受观众们的喜爱。',py:'Duì a, tā běnlái jiù shì jīngjù yǎnyuán, niánqīng shí zài wǒmen nàr hěn yǒumíng, shēn shòu guānzhòngmen de xǐ\'ài.',vn:'Đúng vậy, ông vốn là diễn viên Kinh kịch, thời trẻ rất nổi tiếng ở chỗ chúng tôi, được khán giả vô cùng yêu thích.'},
     {sp:0,zh:'你爷爷一定对京剧有着很深厚的感情。',py:'Nǐ yéye yídìng duì jīngjù yǒuzhe hěn shēnhòu de gǎnqíng.',vn:'Ông bạn chắc chắn có tình cảm rất sâu đậm với Kinh kịch.'},
     {sp:1,zh:'是呀，他8岁就开始上台演出，到现在大概唱了60多年了，他对这门艺术的喜爱从来没有改变过。',py:'Shì ya, tā bā suì jiù kāishǐ shàng tái yǎnchū, dào xiànzài dàgài chàngle liùshí duō nián le, tā duì zhè mén yìshù de xǐ\'ài cónglái méiyǒu gǎibiànguo.',vn:'Đúng vậy, ông 8 tuổi đã bắt đầu lên sân khấu biểu diễn, đến nay đại khái đã hát hơn 60 năm, tình yêu của ông với môn nghệ thuật này chưa bao giờ thay đổi.'},
     {sp:0,zh:'这么说你喜欢听京剧也是受了你爷爷的影响？',py:'Zhème shuō nǐ xǐhuan tīng jīngjù yě shì shòule nǐ yéye de yǐngxiǎng?',vn:'Nói vậy bạn thích nghe Kinh kịch cũng là do ảnh hưởng của ông?'},
     {sp:1,zh:'我小时候经常去看他的演出。平时他还给我讲很多京剧里的历史故事，让我学到了很多知识。',py:'Wǒ xiǎoshíhou jīngcháng qù kàn tā de yǎnchū. Píngshí tā hái gěi wǒ jiǎng hěn duō jīngjù li de lìshǐ gùshi, ràng wǒ xuédàole hěn duō zhīshi.',vn:'Hồi nhỏ tôi thường đi xem ông biểu diễn. Bình thường ông còn kể cho tôi nhiều câu chuyện lịch sử trong Kinh kịch, giúp tôi học được nhiều kiến thức.'},
   ]},
  {scene:'课文2 · 小雨和马克在聊京剧',
   preQuiz:[{q:'马克为什么能比较容易地学会京剧的唱法？',opts:['因为他是中国人','因为他有音乐基础，又对京剧很感兴趣','因为他接受过专门教育'],ans:1}],
   lines:[
     {sp:0,zh:'真没想到你一个来自美国的外国留学生，能把京剧唱得这么好。',py:'Zhēn méi xiǎngdào nǐ yí ge láizì Měiguó de wàiguó liúxuéshēng, néng bǎ jīngjù chàng de zhème hǎo.',vn:'Thật không ngờ một du học sinh đến từ Mỹ như bạn, lại hát Kinh kịch hay như vậy.'},
     {sp:1,zh:'我常常跟着电视学唱京剧，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。',py:'Wǒ chángcháng gēnzhe diànshì xué chàng jīngjù, ránhòu yí biàn yí biàn de liànxí, ǒu\'ěr gēn Zhōngguó rén yìqǐ chàngshang jǐ jù.',vn:'Tôi thường học hát Kinh kịch theo TV, rồi luyện đi luyện lại, thỉnh thoảng hát vài câu với người Trung Quốc.'},
     {sp:0,zh:'难道你从来没接受过京剧方面的专门教育吗？',py:'Nándào nǐ cónglái méi jiēshòuguo jīngjù fāngmiàn de zhuānmén jiàoyù ma?',vn:'Chẳng lẽ bạn chưa từng được đào tạo chuyên môn về Kinh kịch sao?'},
     {sp:1,zh:'别吃惊，因为我以前学习过音乐，有一些音乐基础，又对京剧这种表演艺术非常感兴趣，所以能比较容易地学会它的唱法。',py:'Bié chī jīng, yīnwèi wǒ yǐqián xuéxíguo yīnyuè, yǒu yìxiē yīnyuè jīchǔ, yòu duì jīngjù zhè zhǒng biǎoyǎn yìshù fēicháng gǎn xìngqù, suǒyǐ néng bǐjiào róngyì de xuéhuì tā de chàngfǎ.',vn:'Đừng ngạc nhiên, vì trước đây tôi từng học âm nhạc, có chút nền tảng âm nhạc, lại rất hứng thú với nghệ thuật biểu diễn Kinh kịch, nên có thể học cách hát khá dễ dàng.'},
     {sp:0,zh:'你真厉害！竟然连很多中国人都听不懂的京剧也能学会。我还是比较喜欢听流行音乐。',py:'Nǐ zhēn lìhai! Jìngrán lián hěn duō Zhōngguó rén dōu tīngbudǒng de jīngjù yě néng xuéhuì. Wǒ háishi bǐjiào xǐhuan tīng liúxíng yīnyuè.',vn:'Bạn giỏi thật! Ngay cả Kinh kịch mà nhiều người Trung Quốc nghe không hiểu bạn cũng học được. Tôi vẫn thích nghe nhạc pop hơn.'},
     {sp:1,zh:'那是你不了解京剧的唱法。在音乐方面，京剧给了我很多新的想法。我还把京剧的一些特点增加到了自己的音乐中，达到了很好的效果。',py:'Nà shì nǐ bù liǎojiě jīngjù de chàngfǎ. Zài yīnyuè fāngmiàn, jīngjù gěile wǒ hěn duō xīn de xiǎngfǎ. Wǒ hái bǎ jīngjù de yìxiē tèdiǎn zēngjiā dàole zìjǐ de yīnyuè zhōng, dádàole hěn hǎo de xiàoguǒ.',vn:'Đó là vì bạn không hiểu cách hát của Kinh kịch. Về mặt âm nhạc, Kinh kịch cho tôi nhiều ý tưởng mới. Tôi còn đưa một số đặc điểm của Kinh kịch vào âm nhạc của mình, đạt hiệu quả rất tốt.'},
   ]},
  {scene:'课文3 · 李老师和校长在谈工作',
   preQuiz:[{q:'李老师为什么想申请举办中国传统文化节活动？',opts:['因为学生想放假','因为留学生不了解中国文化，会影响交流','因为校长要求的'],ans:1}],
   lines:[
     {sp:0,zh:'校长，因为外国留学生不了解中国文化，有时候会影响他们和中国人之间的正常交流，甚至还可能引起误会，带来麻烦，所以我们想申请举办一次中国传统文化节活动。',py:'Xiàozhǎng, yīnwèi wàiguó liúxuéshēng bù liǎojiě Zhōngguó wénhuà, yǒushíhou huì yǐngxiǎng tāmen hé Zhōngguó rén zhījiān de zhèngcháng jiāoliú, shènzhì hái kěnéng yǐnqǐ wùhuì, dàilái máfan, suǒyǐ wǒmen xiǎng shēnqǐng jǔbàn yí cì Zhōngguó chuántǒng wénhuà jié huódòng.',vn:'Thưa hiệu trưởng, vì du học sinh nước ngoài không hiểu văn hóa Trung Quốc, có lúc ảnh hưởng đến giao lưu bình thường với người Trung Quốc, thậm chí có thể gây hiểu lầm, mang lại phiền phức, nên chúng tôi muốn xin tổ chức một lễ hội văn hóa truyền thống Trung Quốc.'},
     {sp:1,zh:'你们的想法很好，举办文化节活动，一方面能让各国学生更好地了解中国，另一方面也能为学生们提供互相交流和学习的机会。',py:'Nǐmen de xiǎngfǎ hěn hǎo, jǔbàn wénhuà jié huódòng, yì fāngmiàn néng ràng gè guó xuésheng gèng hǎo de liǎojiě Zhōngguó, lìng yì fāngmiàn yě néng wèi xuéshengmen tígōng hùxiāng jiāoliú hé xuéxí de jīhuì.',vn:'Ý tưởng của các bạn rất hay, tổ chức lễ hội văn hóa, một mặt giúp học sinh các nước hiểu Trung Quốc hơn, mặt khác cũng tạo cơ hội cho học sinh giao lưu và học hỏi lẫn nhau.'},
     {sp:0,zh:'谢谢您的支持！',py:'Xièxie nín de zhīchí!',vn:'Cảm ơn sự ủng hộ của ngài!'},
     {sp:1,zh:'上次的春游活动你们办得非常有趣，大家都玩儿得很开心，这次活动继续由你负责，相信也一定会很成功。',py:'Shàng cì de chūnyóu huódòng nǐmen bàn de fēicháng yǒuqù, dàjiā dōu wánr de hěn kāixīn, zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yě yídìng huì hěn chénggōng.',vn:'Hoạt động dã ngoại mùa xuân lần trước các bạn tổ chức rất thú vị, mọi người đều chơi rất vui, hoạt động lần này tiếp tục do bạn phụ trách, tin rằng cũng nhất định sẽ rất thành công.'},
     {sp:0,zh:'我们回去就开会讨论，星期五之前把详细的计划书发给您。',py:'Wǒmen huíqu jiù kāi huì tǎolùn, xīngqīwǔ zhīqián bǎ xiángxì de jìhuàshū fāgěi nín.',vn:'Chúng tôi về sẽ họp thảo luận ngay, trước thứ Sáu gửi bản kế hoạch chi tiết cho ngài.'},
     {sp:1,zh:'好的，准备过程中有什么问题，你们可以直接来找我。',py:'Hǎo de, zhǔnbèi guòchéng zhōng yǒu shénme wèntí, nǐmen kěyǐ zhíjiē lái zhǎo wǒ.',vn:'Được, trong quá trình chuẩn bị có vấn đề gì, các bạn có thể trực tiếp đến tìm tôi.'},
   ]},
  {scene:'课文4 · Chuyện về đôi đũa',
   preQuiz:[{q:'theo khảo sát trên Internet, bao nhiêu người Trung Quốc dùng đũa sai cách?',opts:['cứ 6 người có 1 người','cứ 2 người có 1 người','hầu như không ai'],ans:0}],
   lines:[
     {sp:0,zh:'筷子在中国大约已经有3000多年的历史了。对外国人来说，使用筷子吃饭并不容易，所以，国外的一些中国餐厅在放筷子的纸袋上会提供使用筷子的详细说明。',py:'Kuàizi zài Zhōngguó dàyuē yǐjīng yǒu sānqiān duō nián de lìshǐ le. Duì wàiguó rén lái shuō, shǐyòng kuàizi chī fàn bìng bù róngyì, suǒyǐ, guówài de yìxiē Zhōngguó cāntīng zài fàng kuàizi de zhǐdài shang huì tígōng shǐyòng kuàizi de xiángxì shuōmíng.',vn:'Đũa ở Trung Quốc đã có lịch sử khoảng hơn 3000 năm. Đối với người nước ngoài, dùng đũa ăn cơm không hề dễ, vì vậy, một số nhà hàng Trung Quốc ở nước ngoài in hướng dẫn chi tiết cách dùng đũa trên túi giấy đựng đũa.'},
     {sp:0,zh:'不过，如果你认为每个中国人都会正确使用筷子，那就错了。有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子的方法是错误的。',py:'Búguò, rúguǒ nǐ rènwéi měi ge Zhōngguó rén dōu huì zhèngquè shǐyòng kuàizi, nà jiù cuò le. Yǒu rén zài hùliánwǎng shang zhuānmén jìnxíngguo diàochá, jiéguǒ fāxiàn měi liù ge Zhōngguó rén zhōng jiù yǒu yí ge shǐyòng kuàizi de fāngfǎ shì cuòwù de.',vn:'Nhưng, nếu bạn cho rằng mỗi người Trung Quốc đều dùng đũa đúng cách, thì sai rồi. Có người đã tiến hành khảo sát trên Internet, kết quả phát hiện cứ sáu người Trung Quốc thì có một người dùng đũa sai cách.'},
     {sp:0,zh:'如果你想正确使用筷子，那就好好练习吧。',py:'Rúguǒ nǐ xiǎng zhèngquè shǐyòng kuàizi, nà jiù hǎohāo liànxí ba.',vn:'Nếu bạn muốn dùng đũa đúng cách, thì hãy luyện tập cho tốt.'},
   ]},
  {scene:'课文5 · Văn hóa trà Trung Quốc',
   preQuiz:[{q:'thời kỳ đầu, trà được coi là gì?',opts:['thức uống giải khát','một loại thuốc','một loại thức ăn'],ans:1}],
   lines:[
     {sp:0,zh:'茶在中国有几千年的历史，是中国最常见的饮料。最早的时候，茶只是被当作一种药，而不是饮料。后来，随着人们对茶的认识的加深，慢慢开始把它当作解渴的饮料，这才慢慢有了中国的茶文化。',py:'Chá zài Zhōngguó yǒu jǐqiān nián de lìshǐ, shì Zhōngguó zuì chángjiàn de yǐnliào. Zuì zǎo de shíhou, chá zhǐshì bèi dàngzuò yì zhǒng yào, ér bú shì yǐnliào. Hòulái, suízhe rénmen duì chá de rènshi de jiāshēn, mànmàn kāishǐ bǎ tā dàngzuò jiě kě de yǐnliào, zhè cái mànmàn yǒule Zhōngguó de chá wénhuà.',vn:'Trà ở Trung Quốc có lịch sử mấy nghìn năm, là thức uống phổ biến nhất Trung Quốc. Thời kỳ đầu, trà chỉ được coi là một loại thuốc, chứ không phải thức uống. Sau này, cùng với nhận thức về trà ngày càng sâu, người ta dần coi nó là thức uống giải khát, từ đó mới dần có văn hóa trà Trung Quốc.'},
     {sp:0,zh:'在中国，喝茶是一种十分普遍的生活习惯。对很多中国人来说，喝茶已成为他们生活中不可缺少的一部分。',py:'Zài Zhōngguó, hē chá shì yì zhǒng shífēn pǔbiàn de shēnghuó xíguàn. Duì hěn duō Zhōngguó rén lái shuō, hē chá yǐ chéngwéi tāmen shēnghuó zhōng bù kě quēshǎo de yí bùfen.',vn:'Ở Trung Quốc, uống trà là một thói quen sinh hoạt vô cùng phổ biến. Đối với nhiều người Trung Quốc, uống trà đã trở thành một phần không thể thiếu trong cuộc sống.'},
     {sp:0,zh:'但是有的饮料虽然名字叫"茶"，却并不是真正的茶。比如广东省的人爱喝的"凉茶"，它的味道稍微有点儿苦，其实是一种用中药做成的饮料。',py:'Dànshì yǒude yǐnliào suīrán míngzi jiào "chá", què bìng bú shì zhēnzhèng de chá. Bǐrú Guǎngdōng Shěng de rén ài hē de "liángchá", tā de wèidào shāowēi yǒudiǎnr kǔ, qíshí shì yì zhǒng yòng zhōngyào zuòchéng de yǐnliào.',vn:'Nhưng có thức uống tuy tên gọi là "trà", lại không phải trà thực sự. Ví dụ "trà mát" người Quảng Đông thích uống, vị hơi đắng một chút, thực ra là thức uống làm từ thuốc bắc.'},
   ]},
];

var matchData = [
  {left:'深厚',right:'深厚的感情'},
  {left:'上台',right:'上台演出'},
  {left:'一遍一遍',right:'一遍一遍地练习'},
  {left:'音乐',right:'有一些音乐基础'},
  {left:'申请',right:'申请举办活动'},
  {left:'由',right:'继续由你负责'},
  {left:'进行',right:'进行过调查'},
  {left:'十分',right:'十分普遍'},
  {left:'不可缺少',right:'不可缺少的一部分'},
  {left:'稍微',right:'稍微有点儿苦'},
];

var fillData = [
  {pre:'你爷爷京剧唱得真专业，我还以为他是京剧',blank:'',post:'呢。',hint:'yǎnyuán',ans:'演员'},
  {pre:'年轻时在我们那儿很有名，深受',blank:'',post:'们的喜爱。',hint:'guānzhòng',ans:'观众'},
  {pre:'你爷爷一定对京剧有着很深',blank:'',post:'的感情。',hint:'hòu',ans:'厚'},
  {pre:'他8岁就开始上台演出，到现在',blank:'',post:'唱了60多年了。',hint:'dàgài',ans:'大概'},
  {pre:'真没想到你一个',blank:'',post:'美国的外国留学生，能把京剧唱得这么好。',hint:'láizì',ans:'来自'},
  {pre:'我常常跟着电视学唱京剧，然后一',blank:'',post:'一遍地练习。',hint:'biàn',ans:'遍'},
  {pre:'别',blank:'',post:'，因为我以前学习过音乐，有一些音乐基础。',hint:'chī jīng',ans:'吃惊'},
  {pre:'有时候会影响他们和中国人之间的',blank:'',post:'交流。',hint:'zhèngcháng',ans:'正常'},
  {pre:'所以我们想',blank:'',post:'举办一次中国传统文化节活动。',hint:'shēnqǐng',ans:'申请'},
  {pre:'这次活动',blank:'',post:'由你负责，相信也一定会很成功。',hint:'jìxù',ans:'继续'},
  {pre:'我们回去就开会',blank:'',post:'，星期五之前把详细的计划书发给您。',hint:'tǎolùn',ans:'讨论'},
  {pre:'筷子在中国',blank:'',post:'已经有3000多年的历史了。',hint:'dàyuē',ans:'大约'},
  {pre:'有人在',blank:'',post:'上专门进行过调查。',hint:'hùliánwǎng',ans:'互联网'},
  {pre:'',blank:'',post:'人们对茶的认识的加深，慢慢开始把它当作解渴的饮料。',hint:'suízhe',ans:'随着'},
  {pre:'它的味道',blank:'',post:'有点儿苦，其实是一种用中药做成的饮料。',hint:'shāowēi',ans:'稍微'},
];

var sortData = [
  {words:['你','爷爷','京剧','唱','得','真','专业'],ans:'你爷爷京剧唱得真专业',audio:'/audio/hsk4-bai-13/sort-1.mp3'},
  {words:['他','8岁','就','开始','上台','演出'],ans:'他8岁就开始上台演出',audio:'/audio/hsk4-bai-13/sort-2.mp3'},
  {words:['真','没想到','你','能','把','京剧','唱','得','这么','好'],ans:'真没想到你能把京剧唱得这么好',audio:'/audio/hsk4-bai-13/sort-3.mp3'},
  {words:['难道','你','从来','没','接受','过','京剧','方面','的','专门','教育','吗','？'],ans:'难道你从来没接受过京剧方面的专门教育吗？',audio:'/audio/hsk4-bai-13/sort-4.mp3'},
  {words:['这次','活动','继续','由','你','负责'],ans:'这次活动继续由你负责',audio:'/audio/hsk4-bai-13/sort-5.mp3'},
  {words:['有人','在','互联网','上','专门','进行','过','调查'],ans:'有人在互联网上专门进行过调查',audio:'/audio/hsk4-bai-13/sort-6.mp3'},
  {words:['喝茶','是','一种','十分','普遍','的','生活','习惯'],ans:'喝茶是一种十分普遍的生活习惯',audio:'/audio/hsk4-bai-13/sort-7.mp3'},
  {words:['随着','社会','的','发展','，','京剧','也','在','改变'],ans:'随着社会的发展，京剧也在改变',audio:'/audio/hsk4-bai-13/sort-8.mp3'},
];

var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'今天的晚会太精彩了，特别是那些外国留学生____的中国功夫，动作既标准又好看，非常棒。',
   opts:['演员','表演','普遍','苦'],ans:1,
   exp:'表演 (biểu diễn) — động từ: 留学生表演的中国功夫. Câu có 精彩 (Bài 11), 既……又 (Bài 7). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'这次____举办得非常成功，吸引了不少当地的观众。',
   opts:['演出','演员','表演','普遍'],ans:0,
   exp:'演出 (buổi biểu diễn) — danh từ làm chủ ngữ: 这次演出举办得很成功. Câu có 吸引 (Bài 6). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'凉茶虽然味道____，但对身体很有好处。另外，凉茶热着喝效果也很不错。',
   opts:['演出','表演','普遍','苦'],ans:3,
   exp:'苦 (đắng) — 味道苦. Câu có 另外 (Bài 3), 好处 (Bài 6), 效果 (Bài 9). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'每天晚上，公园里都有一群老人在唱京剧。他们很喜欢唱京剧，虽然不是专业的____，不过，他们唱得不错，听起来很有味道。',
   opts:['演出','演员','表演','苦'],ans:1,
   exp:'演员 (diễn viên) — 专业的演员. Câu có 不过 (Bài 10). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'很多大学生毕业后，选择的第一个职业，往往和自己的专业没什么关系，这种情况现在越来越____。',
   opts:['演出','演员','普遍','苦'],ans:2,
   exp:'普遍 (phổ biến) — 越来越普遍. Câu có 往往 (Bài 8), 职业 (Bài 10). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：这本小说这么____，什么时候才能看完啊？B：每天晚上看十几页，差不多一个月就可以看完。',
   opts:['稍微','厚','遍','继续'],ans:1,
   exp:'厚 (dày) — 这本小说这么厚. Câu có 页 (Bài 11), 差不多 (Bài 2). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：你学得可真快！B：我小时候学过两年的舞，有点儿____。',
   opts:['稍微','基础','厚','继续'],ans:1,
   exp:'基础 (nền tảng) — 有点儿基础. Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：材料整理好了没？B：差不多了，我再检查一____就给您送过去。',
   opts:['稍微','基础','厚','遍'],ans:3,
   exp:'遍 (lượt) — lượng từ động lượng: 检查一遍. Câu có 材料 (Bài 4). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：你想好了没？是____读书还是参加工作？B：我考虑过了，我想先工作两年，然后再考研究生。',
   opts:['基础','厚','遍','继续'],ans:3,
   exp:'继续 (tiếp tục) — 继续读书. Câu có 先……然后再 (Bài 3). Các từ còn lại không phù hợp nghĩa.'},
  {wrong:'A：孙小姐，我们大概什么时候出发？B：大家先回房间____休息一下，半个小时后我们楼下集合。',
   opts:['稍微','基础','遍','继续'],ans:0,
   exp:'稍微 (một chút) — 稍微休息一下. Câu có 大概 (ngữ pháp của bài). Các từ còn lại không phù hợp nghĩa.'},
];

var speakingData = {
  intro:'Hãy dùng từ vựng và ngữ pháp của Bài 13 (kết hợp ngữ pháp các bài trước) để trả lời các câu hỏi sau về Kinh kịch, văn hóa và trà.',
  questions:[
    {q_zh:'你看过京剧吗？你觉得京剧怎么样？',q_vn:'Bạn đã xem Kinh kịch chưa? Bạn thấy Kinh kịch thế nào?',
     hint:'大概……；虽然……却……',
     sample:'我大概看过一两次。虽然听不太懂，却觉得演员的表演很精彩，衣服也很漂亮。',sample_vn:'Tôi đại khái xem một hai lần. Tuy nghe không hiểu lắm, nhưng thấy diễn viên biểu diễn rất đặc sắc, trang phục cũng rất đẹp.',
     note:'大概 (bài mới) + 却 (Bài 2) + 精彩 (Bài 11).'},
    {q_zh:'你偶尔会做什么和平时不一样的事情？',q_vn:'Thỉnh thoảng bạn làm việc gì khác với ngày thường?',
     hint:'平时……，偶尔……',
     sample:'我平时上班很忙，很少运动，偶尔周末会约朋友一起去爬山，稍微放松一下。',sample_vn:'Ngày thường tôi đi làm rất bận, ít vận động, thỉnh thoảng cuối tuần hẹn bạn đi leo núi, thư giãn một chút.',
     note:'偶尔/稍微 (bài mới) + 放松 (Bài 9).'},
    {q_zh:'在你们学校或公司，活动一般由谁负责？',q_vn:'Ở trường hay công ty bạn, hoạt động thường do ai phụ trách?',
     hint:'由……负责，并且……',
     sample:'活动一般由班长负责，并且大家会开会讨论，然后把详细的计划发给老师。',sample_vn:'Hoạt động thường do lớp trưởng phụ trách, hơn nữa mọi người sẽ họp thảo luận, rồi gửi kế hoạch chi tiết cho thầy.',
     note:'由/讨论 (bài mới) + 并且/详细 (Bài 12).'},
    {q_zh:'你会用筷子吗？对外国人来说，使用筷子难不难？',q_vn:'Bạn biết dùng đũa không? Đối với người nước ngoài, dùng đũa có khó không?',
     hint:'对……来说，……并不容易；只要……就……',
     sample:'我会用。对外国人来说，使用筷子并不容易，不过只要多练习，就一定能学会。',sample_vn:'Tôi biết dùng. Đối với người nước ngoài, dùng đũa không hề dễ, nhưng chỉ cần luyện nhiều là chắc chắn học được.',
     note:'对……来说 (Bài 5) + 并 (Bài 4) + 只要……就 (Bài 8).'},
    {q_zh:'随着社会的发展，你们国家的生活习惯有什么变化？',q_vn:'Cùng với sự phát triển của xã hội, thói quen sinh hoạt ở nước bạn có thay đổi gì?',
     hint:'随着……的发展，越来越……',
     sample:'随着互联网的发展，越来越多的人在网上购物，用手机付钱也已经十分普遍了。',sample_vn:'Cùng với sự phát triển của Internet, ngày càng nhiều người mua sắm online, thanh toán bằng điện thoại cũng đã rất phổ biến.',
     note:'随着/互联网/十分/普遍 (bài mới) + 购物 (Bài 5).'},
  ]
};

var translateData = [
  {vi:'Ông bạn hát Kinh kịch chuyên nghiệp thật, tôi còn tưởng ông là diễn viên Kinh kịch.',zh:'你爷爷京剧唱得真专业，我还以为他是京剧演员呢。',py:'Nǐ yéye jīngjù chàng de zhēn zhuānyè, wǒ hái yǐwéi tā shì jīngjù yǎnyuán ne.'},
  {vi:'Ông 8 tuổi đã bắt đầu lên sân khấu biểu diễn, đến nay đại khái đã hát hơn 60 năm.',zh:'他8岁就开始上台演出，到现在大概唱了60多年了。',py:'Tā bā suì jiù kāishǐ shàng tái yǎnchū, dào xiànzài dàgài chàngle liùshí duō nián le.'},
  {vi:'Tôi thường học hát Kinh kịch theo TV, rồi luyện đi luyện lại, thỉnh thoảng hát vài câu với người Trung Quốc.',zh:'我常常跟着电视学唱京剧，然后一遍一遍地练习，偶尔跟中国人一起唱上几句。',py:'Wǒ chángcháng gēnzhe diànshì xué chàng jīngjù, ránhòu yí biàn yí biàn de liànxí, ǒu\'ěr gēn Zhōngguó rén yìqǐ chàngshang jǐ jù.'},
  {vi:'Chẳng lẽ bạn chưa từng được đào tạo chuyên môn về Kinh kịch sao?',zh:'难道你从来没接受过京剧方面的专门教育吗？',py:'Nándào nǐ cónglái méi jiēshòuguo jīngjù fāngmiàn de zhuānmén jiàoyù ma?'},
  {vi:'Hoạt động lần này tiếp tục do bạn phụ trách, tin rằng cũng nhất định sẽ rất thành công.',zh:'这次活动继续由你负责，相信也一定会很成功。',py:'Zhè cì huódòng jìxù yóu nǐ fùzé, xiāngxìn yě yídìng huì hěn chénggōng.'},
  {vi:'Có người đã tiến hành khảo sát trên Internet, kết quả phát hiện cứ sáu người Trung Quốc thì có một người dùng đũa sai cách.',zh:'有人在互联网上专门进行过调查，结果发现每六个中国人中就有一个使用筷子的方法是错误的。',py:'Yǒu rén zài hùliánwǎng shang zhuānmén jìnxíngguo diàochá, jiéguǒ fāxiàn měi liù ge Zhōngguó rén zhōng jiù yǒu yí ge shǐyòng kuàizi de fāngfǎ shì cuòwù de.'},
  {vi:'Ở Trung Quốc, uống trà là một thói quen sinh hoạt vô cùng phổ biến.',zh:'在中国，喝茶是一种十分普遍的生活习惯。',py:'Zài Zhōngguó, hē chá shì yì zhǒng shífēn pǔbiàn de shēnghuó xíguàn.'},
  {vi:'Cùng với nhận thức về trà ngày càng sâu, người ta dần bắt đầu coi nó là thức uống giải khát.',zh:'随着人们对茶的认识的加深，慢慢开始把它当作解渴的饮料。',py:'Suízhe rénmen duì chá de rènshi de jiāshēn, mànmàn kāishǐ bǎ tā dàngzuò jiě kě de yǐnliào.'},
];
var translateDataRev = [
  {vi:'Ông vốn là diễn viên Kinh kịch, thời trẻ rất nổi tiếng, được khán giả vô cùng yêu thích.',zh:'他本来就是京剧演员，年轻时很有名，深受观众们的喜爱。',py:'Tā běnlái jiù shì jīngjù yǎnyuán, niánqīng shí hěn yǒumíng, shēn shòu guānzhòngmen de xǐ\'ài.'},
  {vi:'Đừng ngạc nhiên, vì trước đây tôi từng học âm nhạc, có chút nền tảng âm nhạc.',zh:'别吃惊，因为我以前学习过音乐，有一些音乐基础。',py:'Bié chī jīng, yīnwèi wǒ yǐqián xuéxíguo yīnyuè, yǒu yìxiē yīnyuè jīchǔ.'},
  {vi:'Bạn giỏi thật! Ngay cả Kinh kịch mà nhiều người Trung Quốc nghe không hiểu bạn cũng học được.',zh:'你真厉害！竟然连很多中国人都听不懂的京剧也能学会。',py:'Nǐ zhēn lìhai! Jìngrán lián hěn duō Zhōngguó rén dōu tīngbudǒng de jīngjù yě néng xuéhuì.'},
  {vi:'Không hiểu văn hóa Trung Quốc có lúc ảnh hưởng đến giao lưu bình thường, thậm chí có thể gây hiểu lầm.',zh:'不了解中国文化，有时候会影响正常交流，甚至还可能引起误会。',py:'Bù liǎojiě Zhōngguó wénhuà, yǒushíhou huì yǐngxiǎng zhèngcháng jiāoliú, shènzhì hái kěnéng yǐnqǐ wùhuì.'},
  {vi:'Chúng tôi về sẽ họp thảo luận ngay, trước thứ Sáu gửi bản kế hoạch chi tiết cho ngài.',zh:'我们回去就开会讨论，星期五之前把详细的计划书发给您。',py:'Wǒmen huíqu jiù kāi huì tǎolùn, xīngqīwǔ zhīqián bǎ xiángxì de jìhuàshū fāgěi nín.'},
  {vi:'Đũa ở Trung Quốc đã có lịch sử khoảng hơn 3000 năm.',zh:'筷子在中国大约已经有3000多年的历史了。',py:'Kuàizi zài Zhōngguó dàyuē yǐjīng yǒu sānqiān duō nián de lìshǐ le.'},
  {vi:'Đối với nhiều người Trung Quốc, uống trà đã trở thành một phần không thể thiếu trong cuộc sống.',zh:'对很多中国人来说，喝茶已成为他们生活中不可缺少的一部分。',py:'Duì hěn duō Zhōngguó rén lái shuō, hē chá yǐ chéngwéi tāmen shēnghuó zhōng bù kě quēshǎo de yí bùfen.'},
  {vi:'"Trà mát" của tỉnh Quảng Đông vị hơi đắng, thực ra là thức uống làm từ thuốc bắc.',zh:'广东省的"凉茶"味道稍微有点儿苦，其实是一种用中药做成的饮料。',py:'Guǎngdōng Shěng de "liángchá" wèidào shāowēi yǒudiǎnr kǔ, qíshí shì yì zhǒng yòng zhōngyào zuòchéng de yǐnliào.'},
];

var listenData = {
  type: 'workbook',
  audioParts: [
    { src: '/audio/hsk4-bai-13/listen-1.mp3', from: 1, to: 5 },
    { src: '/audio/hsk4-bai-13/listen-2.mp3', from: 6, to: 12 },
    { src: '/audio/hsk4-bai-13/listen-3.mp3', from: 13, to: 22 }
  ],
  dictation: [
    {num:1, stmt:'演出已经结束了。', judge:false, lines:[
      {pre:'虽然演出八点才开始，', blank:'但是差一刻八点观众就不能进场了', post:'，我们还是早点儿去吧。',
       py:'Suīrán yǎnchū bā diǎn cái kāishǐ, dànshì chà yí kè bā diǎn guānzhòng jiù bù néng jìnchǎng le, wǒmen háishi zǎo diǎnr qù ba.',
       vn:'Tuy buổi diễn tám giờ mới bắt đầu, nhưng tám giờ kém mười lăm khán giả đã không được vào nữa, chúng ta vẫn nên đi sớm một chút.'}]},
    {num:2, stmt:'他介绍得很详细。', judge:false, lines:[
      {pre:'由于时间关系，这份材料我就不向大家详细介绍了，', blank:'我只对其中重要的部分简单说明一下', post:'。有什么问题，大家一会儿可以讨论。',
       py:'Yóuyú shíjiān guānxi, zhè fèn cáiliào wǒ jiù bú xiàng dàjiā xiángxì jièshào le, wǒ zhǐ duì qízhōng zhòngyào de bùfen jiǎndān shuōmíng yíxià. Yǒu shénme wèntí, dàjiā yíhuìr kěyǐ tǎolùn.',
       vn:'Vì lý do thời gian, tài liệu này tôi sẽ không giới thiệu chi tiết với mọi người, tôi chỉ giải thích ngắn gọn những phần quan trọng. Có vấn đề gì, lát nữa mọi người có thể thảo luận.'}]},
    {num:3, stmt:'他们决定不去植物园了。', judge:true, lines:[
      {pre:'我问过大家了，', blank:'三分之二的同学都去过植物园', post:'，所以这次春游得换个地方了。咱们明天开个班会商量一下去哪儿玩儿吧。',
       py:'Wǒ wènguo dàjiā le, sān fēn zhī èr de tóngxué dōu qùguo zhíwùyuán, suǒyǐ zhè cì chūnyóu děi huàn ge dìfang le. Zánmen míngtiān kāi ge bānhuì shāngliang yíxià qù nǎr wánr ba.',
       vn:'Tôi đã hỏi mọi người rồi, hai phần ba bạn trong lớp đều từng đi vườn thực vật, nên chuyến dã ngoại xuân này phải đổi chỗ. Mai chúng ta họp lớp bàn xem đi đâu chơi nhé.'}]},
    {num:4, stmt:'应该总结过去的经验。', judge:true, lines:[
      {pre:'回忆过去，有苦也有甜，有伤心、难过，也有幸福、愉快，有很多故事让人难以忘记，', blank:'有很多经验值得我们总结', post:'。',
       py:'Huíyì guòqù, yǒu kǔ yě yǒu tián, yǒu shāngxīn, nánguò, yě yǒu xìngfú, yúkuài, yǒu hěn duō gùshi ràng rén nányǐ wàngjì, yǒu hěn duō jīngyàn zhídé wǒmen zǒngjié.',
       vn:'Nhớ lại quá khứ, có đắng có ngọt, có đau lòng, buồn bã, cũng có hạnh phúc, vui vẻ, có nhiều câu chuyện khó quên, có nhiều kinh nghiệm đáng để chúng ta đúc kết.'}]},
    {num:5, stmt:'现在是十点一刻。', judge:true, lines:[
      {pre:'大家请注意，现在休息十五分钟，', blank:'十点半会议继续进行', post:'。我们为大家准备了饮料和蛋糕，就在门口的桌子上。',
       py:'Dàjiā qǐng zhùyì, xiànzài xiūxi shíwǔ fēnzhōng, shí diǎn bàn huìyì jìxù jìnxíng. Wǒmen wèi dàjiā zhǔnbèile yǐnliào hé dàngāo, jiù zài ménkǒu de zhuōzi shang.',
       vn:'Mọi người chú ý, bây giờ nghỉ mười lăm phút, mười giờ rưỡi hội nghị tiếp tục. Chúng tôi đã chuẩn bị đồ uống và bánh ngọt, ở ngay trên bàn cạnh cửa.'}]}
  ],
  mc: [
    {num:6, options:['值得去看','没有观众','没什么意思','越来越有趣'], ans:2, q:'关于那个电视节目，可以知道什么？',
     lines:[
       {speaker:'男', pre:'我觉得', blank:'这个节目越来越无聊了', post:'。', py:'Wǒ juéde zhège jiémù yuè lái yuè wúliáo le.', vn:'Tôi thấy chương trình này ngày càng nhạt.'},
       {speaker:'女', pre:'是啊，前几期还可以，', blank:'现在看的人也越来越少了', post:'。', py:'Shì a, qián jǐ qī hái kěyǐ, xiànzài kàn de rén yě yuè lái yuè shǎo le.', vn:'Ừ, mấy số đầu còn được, giờ người xem cũng ngày càng ít.'}
     ],
     explain:'问：关于那个电视节目，可以知道什么？ "越来越无聊了" → C 没什么意思. B sai vì người xem ít đi chứ không phải không có.'},
    {num:7, options:['饿了','感冒了','害怕了','去医院了'], ans:1, q:'女的怎么了？',
     lines:[
       {speaker:'男', pre:'怎么了？身体不舒服吗？', blank:'去医院看看吧', post:'。', py:'Zěnme le? Shēntǐ bù shūfu ma? Qù yīyuàn kànkan ba.', vn:'Sao thế? Không khoẻ à? Đi bệnh viện khám đi.'},
       {speaker:'女', pre:'', blank:'我只是感冒，头稍微有点儿疼', post:'，不严重，休息休息就好了。', py:'Wǒ zhǐshì gǎnmào, tóu shāowēi yǒudiǎnr téng, bù yánzhòng, xiūxi xiūxi jiù hǎo le.', vn:'Tôi chỉ bị cảm, đầu hơi đau chút, không nghiêm trọng, nghỉ ngơi là khỏi.'}
     ],
     explain:'问：女的怎么了？ "我只是感冒" → B 感冒了. D sai vì cô ấy không đi viện.'},
    {num:8, options:['很无聊','很有趣','很有名','很流行'], ans:1, q:'女的觉得那本小说怎么样？',
     lines:[
       {speaker:'男', pre:'这本小说有四百多页，', blank:'你竟然一天就看完了', post:'？', py:'Zhè běn xiǎoshuō yǒu sìbǎi duō yè, nǐ jìngrán yì tiān jiù kànwán le?', vn:'Cuốn tiểu thuyết này hơn bốn trăm trang, cậu thế mà một ngày đọc xong?'},
       {speaker:'女', pre:'这书虽然厚，', blank:'但写得很有趣', post:'，所以看起来很快。', py:'Zhè shū suīrán hòu, dàn xiě de hěn yǒuqù, suǒyǐ kàn qilai hěn kuài.', vn:'Sách tuy dày nhưng viết rất thú vị nên đọc rất nhanh.'}
     ],
     explain:'问：女的觉得那本小说怎么样？ "写得很有趣" → B 很有趣.'},
    {num:9, options:['明天','下周日','过完生日','现在'], ans:1, q:'他们准备什么时候告诉他好消息？',
     lines:[
       {speaker:'男', pre:'下个礼拜天是他的生日，', blank:'那时候再把这个好消息告诉他不是更好', post:'？', py:'Xià ge lǐbàitiān shì tā de shēngrì, nà shíhou zài bǎ zhège hǎo xiāoxi gàosu tā bú shì gèng hǎo?', vn:'Chủ nhật tuần sau là sinh nhật cậu ấy, lúc đó mới báo tin vui này chẳng phải tốt hơn sao?'},
       {speaker:'女', pre:'好主意，', blank:'到时他知道了肯定特别开心', post:'。', py:'Hǎo zhǔyi, dào shí tā zhīdào le kěndìng tèbié kāixīn.', vn:'Ý hay, lúc đó cậu ấy biết chắc chắn vui lắm.'}
     ],
     explain:'问：他们准备什么时候告诉他好消息？ "下个礼拜天…那时候再…告诉他" → B 下周日 (礼拜天 = 周日).'},
    {num:10, options:['时间','地方','演员','节目'], ans:2, q:'关于这次活动，女的想知道什么？',
     lines:[
       {speaker:'女', pre:'听说这次公司举办的活动会邀请许多著名的演员来表演，是真的吗？', blank:'都有谁呢', post:'？', py:'Tīngshuō zhè cì gōngsī jǔbàn de huódòng huì yāoqǐng xǔduō zhùmíng de yǎnyuán lái biǎoyǎn, shì zhēn de ma? Dōu yǒu shéi ne?', vn:'Nghe nói hoạt động công ty tổ chức lần này sẽ mời nhiều diễn viên nổi tiếng đến biểu diễn, thật không? Có những ai vậy?'},
       {speaker:'男', pre:'我只知道下周还是在会议中心举行，', blank:'这次活动是小张负责的', post:'，你可以去问问他。', py:'Wǒ zhǐ zhīdào xià zhōu háishi zài huìyì zhōngxīn jǔxíng, zhè cì huódòng shì Xiǎo Zhāng fùzé de, nǐ kěyǐ qù wènwen tā.', vn:'Tôi chỉ biết tuần sau vẫn tổ chức ở trung tâm hội nghị, hoạt động này do Tiểu Trương phụ trách, cô có thể hỏi cậu ấy.'}
     ],
     explain:'问：关于这次活动，女的想知道什么？ "演员…都有谁呢" → C 演员. Thời gian và địa điểm là do người nam nói.'},
    {num:11, options:['孙叔叔','邻居','王阿姨','李大夫'], ans:0, q:'他们要去谁家做客？',
     lines:[
       {speaker:'男', pre:'', blank:'孙叔叔邀请我们去他家做客', post:'，我们带点儿什么礼物好呢？', py:'Sūn shūshu yāoqǐng wǒmen qù tā jiā zuòkè, wǒmen dài diǎnr shénme lǐwù hǎo ne?', vn:'Chú Tôn mời chúng ta đến nhà chơi, mình mang quà gì thì hay?'},
       {speaker:'女', pre:'我记得他和邻居王阿姨、李大夫一样，', blank:'最爱喝茶了', post:'，我们去买点儿绿茶吧。', py:'Wǒ jìde tā hé línjū Wáng āyí, Lǐ dàifu yíyàng, zuì ài hē chá le, wǒmen qù mǎi diǎnr lǜchá ba.', vn:'Em nhớ chú ấy cũng giống hàng xóm dì Vương, bác sĩ Lý, thích uống trà nhất, mình đi mua ít trà xanh đi.'}
     ],
     explain:'问：他们要去谁家做客？ "孙叔叔邀请我们去他家做客" → A. 王阿姨, 李大夫 chỉ được nhắc để so sánh sở thích.'},
    {num:12, options:['正在开会','来自上海','比较满意','还在旅游'], ans:2, q:'根据对话，男的怎么样？',
     lines:[
       {speaker:'女', pre:'王校长，', blank:'这次去上海开会一切都顺利吧', post:'？', py:'Wáng xiàozhǎng, zhè cì qù Shànghǎi kāihuì yíqiè dōu shùnlì ba?', vn:'Hiệu trưởng Vương, lần này đi Thượng Hải họp mọi việc thuận lợi chứ ạ?'},
       {speaker:'男', pre:'会议进行得很顺利，来自全国各地的人特别多，', blank:'但安排得很好', post:'，这次我还顺便在上海玩儿了两天。', py:'Huìyì jìnxíng de hěn shùnlì, láizì quánguó gèdì de rén tèbié duō, dàn ānpái de hěn hǎo, zhè cì wǒ hái shùnbiàn zài Shànghǎi wánr le liǎng tiān.', vn:'Hội nghị diễn ra rất thuận lợi, người từ khắp cả nước rất đông, nhưng sắp xếp rất tốt, lần này tôi còn tiện thể chơi ở Thượng Hải hai ngày.'}
     ],
     explain:'问：根据对话，男的怎么样？ "很顺利…安排得很好…还顺便玩儿了两天" → hài lòng, đáp án C 比较满意. Ông ấy đã về nên A, D sai.'},
    {num:13, options:['宾馆','公司','教室','公园'], ans:0, q:'他们现在最可能在哪儿？',
     lines:[
       {speaker:'女', pre:'先生，给您，', blank:'您的房间在六零二', post:'。', py:'Xiānsheng, gěi nín, nín de fángjiān zài liù líng èr.', vn:'Thưa ông, của ông đây, phòng ông ở 602.'},
       {speaker:'男', pre:'谢谢。', blank:'请问附近有银行吗', post:'？', py:'Xièxie. Qǐngwèn fùjìn yǒu yínháng ma?', vn:'Cảm ơn. Xin hỏi gần đây có ngân hàng không?'},
       {speaker:'女', pre:'有一个银行，', blank:'您出门向右走大约五百米就能看到', post:'，就在路北边。', py:'Yǒu yí ge yínháng, nín chūmén xiàng yòu zǒu dàyuē wǔbǎi mǐ jiù néng kàndào, jiù zài lù běibian.', vn:'Có một ngân hàng, ông ra cửa rẽ phải đi khoảng năm trăm mét là thấy, ngay phía bắc đường.'},
       {speaker:'男', pre:'好，', blank:'谢谢你', post:'。', py:'Hǎo, xièxie nǐ.', vn:'Được, cảm ơn cô.'}
     ],
     explain:'问：他们现在最可能在哪儿？ "您的房间在六零二" → khách sạn, đáp án A 宾馆.'},
    {num:14, options:['心情','计划','演出','演员'], ans:2, q:'他们在谈什么？',
     lines:[
       {speaker:'女', pre:'', blank:'你们的表演精彩极了', post:'！', py:'Nǐmen de biǎoyǎn jīngcǎi jí le!', vn:'Màn biểu diễn của các bạn đặc sắc quá!'},
       {speaker:'男', pre:'真的吗？', blank:'当时我们别提多紧张了', post:'。', py:'Zhēn de ma? Dāngshí wǒmen biétí duō jǐnzhāng le.', vn:'Thật sao? Lúc đó chúng tôi căng thẳng khỏi phải nói.'},
       {speaker:'女', pre:'你们表演完', blank:'很多观众都高兴地站起来为你们叫好', post:'呢。', py:'Nǐmen biǎoyǎn wán hěn duō guānzhòng dōu gāoxìng de zhàn qilai wèi nǐmen jiàohǎo ne.', vn:'Các bạn diễn xong, nhiều khán giả đứng dậy hoan hô đấy.'},
       {speaker:'男', pre:'', blank:'谢谢您的支持', post:'。', py:'Xièxie nín de zhīchí.', vn:'Cảm ơn sự ủng hộ của cô.'}
     ],
     explain:'问：他们在谈什么？ Cả đoạn nói về 表演 → C 演出.'},
    {num:15, options:['生病了','不常运动','想喝水','力气不大'], ans:1, q:'关于男的，下列哪个正确？',
     lines:[
       {speaker:'男', pre:'咱们在这儿稍微休息一下吧，', blank:'我没力气爬了', post:'。', py:'Zánmen zài zhèr shāowēi xiūxi yíxià ba, wǒ méi lìqi pá le.', vn:'Mình nghỉ ở đây một chút đi, anh hết sức leo rồi.'},
       {speaker:'女', pre:'一看就知道', blank:'你不经常锻炼', post:'。', py:'Yí kàn jiù zhīdào nǐ bù jīngcháng duànliàn.', vn:'Nhìn là biết anh không thường xuyên tập luyện.'},
       {speaker:'男', pre:'是啊，', blank:'我好久没运动了', post:'。', py:'Shì a, wǒ hǎojiǔ méi yùndòng le.', vn:'Ừ, anh lâu rồi không vận động.'},
       {speaker:'女', pre:'那你先坐会儿，', blank:'我去那边买两瓶水', post:'。', py:'Nà nǐ xiān zuò huìr, wǒ qù nàbiān mǎi liǎng píng shuǐ.', vn:'Vậy anh ngồi một lát, em qua bên kia mua hai chai nước.'}
     ],
     explain:'问：关于男的，下列哪个正确？ "我好久没运动了" → B 不常运动. 没力气爬 là do mệt, không phải bệnh.'},
    {num:16, options:['听音乐会','看京剧','去交流处','看王老师'], ans:0, q:'他们准备安排学生做什么？',
     lines:[
       {speaker:'男', pre:'这次一共有', blank:'多少个学生去听音乐会', post:'？', py:'Zhè cì yígòng yǒu duōshao ge xuésheng qù tīng yīnyuèhuì?', vn:'Lần này tổng cộng có bao nhiêu sinh viên đi nghe hoà nhạc?'},
       {speaker:'女', pre:'和上次看京剧的人差不多，', blank:'大约二十个', post:'。', py:'Hé shàng cì kàn jīngjù de rén chàbuduō, dàyuē èrshí ge.', vn:'Cũng như lần xem Kinh kịch trước, khoảng hai mươi người.'},
       {speaker:'男', pre:'好的，', blank:'这次谁跟着去', post:'？', py:'Hǎo de, zhè cì shéi gēnzhe qù?', vn:'Được, lần này ai đi cùng?'},
       {speaker:'女', pre:'', blank:'我和国际交流处的王老师一块儿去', post:'。', py:'Wǒ hé guójì jiāoliúchù de Wáng lǎoshī yíkuàir qù.', vn:'Tôi đi cùng thầy Vương ở phòng giao lưu quốc tế.'}
     ],
     explain:'问：他们准备安排学生做什么？ "学生去听音乐会" → A. 看京剧 là lần trước.'},
    {num:17, options:['图书馆里','地铁站口','图书馆门口','地铁上'], ans:1, q:'他们在哪儿见面？',
     lines:[
       {speaker:'女', pre:'喂，我到国家图书馆了，', blank:'你在哪儿', post:'？', py:'Wèi, wǒ dào Guójiā Túshūguǎn le, nǐ zài nǎr?', vn:'Alô, tôi đến Thư viện Quốc gia rồi, cậu ở đâu?'},
       {speaker:'男', pre:'我还在地铁里，', blank:'大概十分钟就到了', post:'。', py:'Wǒ hái zài dìtiě li, dàgài shí fēnzhōng jiù dào le.', vn:'Tôi vẫn ở trên tàu điện ngầm, khoảng mười phút nữa đến.'},
       {speaker:'女', pre:'好，', blank:'你到了就从西北口出来吧', post:'，我在那儿等你。', py:'Hǎo, nǐ dào le jiù cóng xīběi kǒu chūlai ba, wǒ zài nàr děng nǐ.', vn:'Được, cậu đến thì ra cửa tây bắc nhé, tôi đợi ở đó.'},
       {speaker:'男', pre:'好的，', blank:'一会儿见', post:'。', py:'Hǎo de, yíhuìr jiàn.', vn:'Được, lát gặp.'}
     ],
     explain:'问：他们在哪儿见面？ "从西北口出来吧，我在那儿等你" → cửa ga tàu điện ngầm, đáp án B 地铁站口.'},
    {num:18, options:['爱喝茶','喜欢京剧','会唱京剧','是中国人'], ans:3, q:'关于男的，下列哪个不正确？',
     lines:[
       {speaker:'女', pre:'你对', blank:'我们国家的文化了解多少', post:'？', py:'Nǐ duì wǒmen guójiā de wénhuà liǎojiě duōshao?', vn:'Bạn hiểu văn hoá đất nước chúng tôi được bao nhiêu?'},
       {speaker:'男', pre:'我喜欢喝中国茶，还爱听京剧，', blank:'我觉得京剧很有特点', post:'。', py:'Wǒ xǐhuan hē Zhōngguó chá, hái ài tīng jīngjù, wǒ juéde jīngjù hěn yǒu tèdiǎn.', vn:'Tôi thích uống trà Trung Quốc, còn thích nghe Kinh kịch, tôi thấy Kinh kịch rất đặc sắc.'},
       {speaker:'女', pre:'', blank:'你还喜欢京剧啊', post:'？', py:'Nǐ hái xǐhuan jīngjù a?', vn:'Bạn còn thích Kinh kịch à?'},
       {speaker:'男', pre:'你不相信吗？我不仅喜欢，', blank:'还能唱上几句', post:'呢。', py:'Nǐ bù xiāngxìn ma? Wǒ bùjǐn xǐhuan, hái néng chàngshàng jǐ jù ne.', vn:'Bạn không tin à? Tôi không chỉ thích mà còn hát được vài câu đấy.'}
     ],
     explain:'问：关于男的，下列哪个不正确？ "你对我们国家的文化了解多少" cho thấy người nam là người nước ngoài → D 是中国人 không đúng. Chú ý câu hỏi phủ định.'},
    {num:19, options:['高兴','新鲜','感动','无聊'], ans:1, q:'看到筷子的使用说明，说话人感觉怎么样？',
     lines:[
       {speaker:'旁白', pre:'我在国外留学时，有一次在一家中国饭馆儿吃饭，', blank:'看到放筷子的纸袋上提供了使用筷子的详细说明', post:'。', py:'Wǒ zài guówài liúxué shí, yǒu yí cì zài yì jiā Zhōngguó fànguǎnr chīfàn, kàndào fàng kuàizi de zhǐdài shang tígōngle shǐyòng kuàizi de xiángxì shuōmíng.', vn:'Khi tôi du học nước ngoài, có lần ăn ở một quán ăn Trung Quốc, thấy trên túi giấy đựng đũa có hướng dẫn chi tiết cách dùng đũa.'},
       {speaker:'旁白', pre:'头一次看见关于筷子的使用说明，', blank:'让我觉得非常新鲜', post:'。因为对中国人来说，使用筷子实在是再熟悉不过的事了。', py:'Tóu yí cì kànjiàn guānyú kuàizi de shǐyòng shuōmíng, ràng wǒ juéde fēicháng xīnxiān. Yīnwèi duì Zhōngguórén lái shuō, shǐyòng kuàizi shízài shì zài shúxi búguò de shì le.', vn:'Lần đầu thấy hướng dẫn sử dụng đũa khiến tôi thấy rất mới lạ. Vì với người Trung Quốc, dùng đũa thật sự là việc quá đỗi quen thuộc.'}
     ],
     explain:'问：看到筷子的使用说明，说话人感觉怎么样？ "让我觉得非常新鲜" → B 新鲜.'},
    {num:20, options:['在饭馆儿工作','是中国人','不会用筷子','看不懂说明'], ans:1, q:'关于说话人，可以知道什么？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）', blank:'因为对中国人来说，使用筷子实在是再熟悉不过的事了', post:'。', py:'(Tóng yí duàn huà) Yīnwèi duì Zhōngguórén lái shuō, shǐyòng kuàizi shízài shì zài shúxi búguò de shì le.', vn:'(Cùng đoạn văn) Vì với người Trung Quốc, dùng đũa thật sự là việc quá đỗi quen thuộc.'}
     ],
     explain:'问：关于说话人，可以知道什么？ Người nói thấy lạ vì "对中国人来说…再熟悉不过" → người nói là người Trung Quốc, đáp án B.'},
    {num:21, options:['应该长远考虑','要做详细计划','总在不停变化','不会顺利进行'], ans:2, q:'长大以后，人们会发现生活怎么样？',
     lines:[
       {speaker:'旁白', pre:'有些人喜欢为自己的生活做长远的计划。但是，随着一天一天地长大，', blank:'我们会发现生活总是在不停地变化', post:'，生活往往不会按照定好的计划来进行。', py:'Yǒuxiē rén xǐhuan wèi zìjǐ de shēnghuó zuò chángyuǎn de jìhuà. Dànshì, suízhe yì tiān yì tiān de zhǎngdà, wǒmen huì fāxiàn shēnghuó zǒngshì zài bù tíng de biànhuà, shēnghuó wǎngwǎng bú huì ànzhào dìnghǎo de jìhuà lái jìnxíng.', vn:'Có người thích lập kế hoạch dài hạn cho cuộc sống. Nhưng khi lớn lên từng ngày, chúng ta sẽ thấy cuộc sống luôn không ngừng thay đổi, thường không diễn ra theo kế hoạch đã định.'},
       {speaker:'旁白', pre:'因此，光有计划还不够，', blank:'还需要我们能及时地做出改变', post:'。只有这样，才能更好地适应生活。', py:'Yīncǐ, guāng yǒu jìhuà hái bú gòu, hái xūyào wǒmen néng jíshí de zuòchū gǎibiàn. Zhǐyǒu zhèyàng, cái néng gèng hǎo de shìyìng shēnghuó.', vn:'Vì vậy, chỉ có kế hoạch thôi chưa đủ, còn cần chúng ta kịp thời thay đổi. Chỉ như vậy mới thích ứng tốt hơn với cuộc sống.'}
     ],
     explain:'问：长大以后，人们会发现生活怎么样？ "生活总是在不停地变化" → C 总在不停变化.'},
    {num:22, options:['坚持以前的看法','回忆原来的事情','做出长远计划','改变旧的计划'], ans:3, q:'怎样才能更好地适应生活？',
     lines:[
       {speaker:'旁白', pre:'（同一段话）光有计划还不够，', blank:'还需要我们能及时地做出改变', post:'。只有这样，才能更好地适应生活。', py:'(Tóng yí duàn huà) Guāng yǒu jìhuà hái bú gòu, hái xūyào wǒmen néng jíshí de zuòchū gǎibiàn. Zhǐyǒu zhèyàng, cái néng gèng hǎo de shìyìng shēnghuó.', vn:'(Cùng đoạn văn) Chỉ có kế hoạch thôi chưa đủ, còn cần chúng ta kịp thời thay đổi. Chỉ như vậy mới thích ứng tốt hơn với cuộc sống.'}
     ],
     explain:'问：怎样才能更好地适应生活？ "及时地做出改变" → D 改变旧的计划. C sai vì đoạn nói chỉ có kế hoạch là chưa đủ.'}
  ]
};
