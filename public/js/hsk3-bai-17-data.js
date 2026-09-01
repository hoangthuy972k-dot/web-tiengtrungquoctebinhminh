// ══════════════════════════════════════════
// DATA — HSK3 Bài 17: 谁都有办法看好你的"病" (Ai cũng có cách chữa khỏi "bệnh" của em)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'请假',py:'qǐng jià',pos:'Động từ',vn:'xin nghỉ phép',em:'📝',lesson:1,
   explain:['Xin phép nghỉ, không đi làm hoặc đi học trong một khoảng thời gian.'],
   usage:'Động từ ly hợp: 请 + 假; đi cùng số ngày: 请几天假.',
   collo:['请几天假','请病假','请事假'],
   ex_zh:'下个星期我可以请几天假吗？',ex_py:'Xià ge xīngqī wǒ kěyǐ qǐng jǐ tiān jià ma?',ex_vn:'Tuần sau em xin nghỉ mấy ngày được không ạ?',
   exList:[
     {zh:'周经理，下个星期我可以请几天假吗？',py:'Zhōu jīnglǐ, xià ge xīngqī wǒ kěyǐ qǐng jǐ tiān jià ma?',vn:'Giám đốc Chu, tuần sau em xin nghỉ mấy ngày được không ạ?'},
     {zh:'老师，我可以请几天假吗？',py:'Lǎoshī, wǒ kěyǐ qǐng jǐ tiān jià ma?',vn:'Thầy ơi, em xin nghỉ mấy ngày được không ạ?'},
     {zh:'这个月你已经请了两个星期假了，不能再请了。',py:'Zhège yuè nǐ yǐjīng qǐngle liǎng ge xīngqī jià le, bù néng zài qǐng le.',vn:'Tháng này bạn đã xin nghỉ hai tuần rồi, không thể xin nữa đâu.'},
   ],
   hanzi:[
     {c:'假',p:'jià',type:'左右结构 · Trái-phải',st:11,ord:'亻 trái → 段 phải (giản thể)',rad:'亻 (nhân – người)',mean:'kỳ nghỉ; giả',
      tip:'亻(người) + 段(một đoạn, thời gian) → khoảng thời gian NGƯỜI được nghỉ; khi đọc jiǎ nghĩa là GIẢ, KHÔNG THẬT.',
      cf:'暇 (xiá – "rảnh rỗi", có bộ 日")',w:'请假 / 假期'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tháng này bạn đã xin nghỉ hai tuần rồi, không thể xin nữa đâu.',answer:'这个月你已经请了两个星期假了，不能再请了。',answerPy:'Zhège yuè nǐ yǐjīng qǐngle liǎng ge xīngqī jià le, bù néng zài qǐng le.',
      note:'已经……了 diễn tả hành động đã hoàn tất.'},
     {promptLang:'vi',prompt:'Nếu bạn không khỏe thì cứ xin nghỉ đi.',answer:'如果你不舒服，就请假吧。',answerPy:'Rúguǒ nǐ bù shūfu, jiù qǐngjià ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại đã học ở Bài 16).'},
   ]},

  {n:2,zh:'一共',py:'yígòng',pos:'Phó từ',vn:'tổng cộng',em:'🔢',lesson:1,
   explain:['Diễn tả tổng số lượng khi cộng gộp lại.'],
   usage:'Phó từ, đứng trước động từ hoặc số lượng: 一共 + [số lượng/động từ].',
   collo:['一共想请几天','一共21个学生','一共写100个'],
   ex_zh:'你一共想请几天假？',ex_py:'Nǐ yígòng xiǎng qǐng jǐ tiān jià?',ex_vn:'Em muốn xin nghỉ tổng cộng mấy ngày?',
   exList:[
     {zh:'你一共想请几天假？',py:'Nǐ yígòng xiǎng qǐng jǐ tiān jià?',vn:'Em muốn xin nghỉ tổng cộng mấy ngày?'},
     {zh:'这个学期我们班新来了2个同学，一共21个学生。',py:'Zhège xuéqī wǒmen bān xīn láile liǎng ge tóngxué, yígòng èrshíyī ge xuésheng.',vn:'Học kỳ này lớp chúng tôi có thêm 2 bạn mới, tổng cộng 21 học sinh.'},
     {zh:'比赛是根据要求写汉字，一共写100个。',py:'Bǐsài shì gēnjù yāoqiú xiě hànzì, yígòng xiě yìbǎi ge.',vn:'Cuộc thi là viết chữ Hán theo yêu cầu, tổng cộng viết 100 chữ.'},
   ],
   hanzi:[
     {c:'共',p:'gòng',type:'上下结构 · Trên-dưới',st:6,ord:'廿 trên → 八 dưới',rad:'八 (bát)',mean:'cùng, chung',
      tip:'廿(hai mươi, số nhiều) + 八(chia ra) → nhiều người CÙNG CHUNG một việc; 一(một)+共(chung) = TỔNG CỘNG.',
      cf:'具 (jù – "dụng cụ", có 目 thay vì 廿")',w:'一共 / 共同'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học kỳ này lớp chúng tôi có thêm 2 bạn mới, tổng cộng 21 học sinh.',answer:'这个学期我们班新来了2个同学，一共21个学生。',answerPy:'Zhège xuéqī wǒmen bān xīn láile liǎng ge tóngxué, yígòng èrshíyī ge xuésheng.',
      note:'一共 + số lượng diễn tả tổng số.'},
     {promptLang:'vi',prompt:'Nếu tổng cộng có 21 học sinh thì phòng học đủ chỗ không?',answer:'如果一共有21个学生，教室就够坐吗？',answerPy:'Rúguǒ yígòng yǒu èrshíyī ge xuésheng, jiàoshì jiù gòu zuò ma?',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:3,zh:'邻居',py:'línjū',pos:'Danh từ',vn:'láng giềng',em:'🏘️',lesson:2,
   explain:['Người sống gần nhà, cùng khu vực.'],
   usage:'Danh từ; đi cùng động từ 是: 是邻居.',
   collo:['是邻居','新邻居','过去是邻居'],
   ex_zh:'我们过去是邻居，后来是大学同学。',ex_py:'Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué.',ex_vn:'Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học.',
   exList:[
     {zh:'我们过去是邻居，后来是大学同学，关系一直很不错。',py:'Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué, guānxi yìzhí hěn búcuò.',vn:'Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học, quan hệ luôn rất tốt.'},
     {zh:'我们是你们的新邻居，昨天刚搬过来。',py:'Wǒmen shì nǐmen de xīn línjū, zuótiān gāng bān guolai.',vn:'Chúng tôi là hàng xóm mới của các bạn, hôm qua vừa chuyển đến.'},
     {zh:'我们在这儿住了五年了，对这儿很了解。',py:'Wǒmen zài zhèr zhùle wǔ nián le, duì zhèr hěn liǎojiě.',vn:'Chúng tôi sống ở đây năm năm rồi, rất hiểu rõ nơi này.'},
   ],
   hanzi:[
     {c:'邻',p:'lín',type:'左右结构 · Trái-phải',st:7,ord:'令 trái → 阝 phải (giản thể)',rad:'阝 (ấp – khu dân cư)',mean:'láng giềng',
      tip:'令(ra lệnh, gần gũi) + 阝(khu dân cư) → những nhà gần nhau trong cùng khu = LÁNG GIỀNG.',
      cf:'冷 (lěng – "lạnh", có bộ 冫")',w:'邻居 / 邻近'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng tôi là hàng xóm mới của các bạn, hôm qua vừa chuyển đến.',answer:'我们是你们的新邻居，昨天刚搬过来。',answerPy:'Wǒmen shì nǐmen de xīn línjū, zuótiān gāng bān guolai.',
      note:'刚 + V diễn tả hành động vừa mới xảy ra.'},
     {promptLang:'vi',prompt:'Nếu bạn có vấn đề gì thì có thể đến hỏi hàng xóm.',answer:'如果你有什么问题，就可以来问邻居。',answerPy:'Rúguǒ nǐ yǒu shénme wèntí, jiù kěyǐ lái wèn línjū.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:4,zh:'后来',py:'hòulái',pos:'Danh từ',vn:'sau này, sau đó',em:'⏭️',lesson:2,
   explain:['Chỉ khoảng thời gian tiếp theo sau một sự việc đã xảy ra.'],
   usage:'Danh từ chỉ thời gian, thường đứng đầu câu hoặc sau chủ ngữ.',
   collo:['后来是','后来发现','后来儿子生病了'],
   ex_zh:'我们过去是邻居，后来是大学同学。',ex_py:'Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué.',ex_vn:'Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học.',
   exList:[
     {zh:'我们过去是邻居，后来是大学同学，关系一直很不错。',py:'Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué, guānxi yìzhí hěn búcuò.',vn:'Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học, quan hệ luôn rất tốt.'},
     {zh:'后来发现没带钱包，只好都放回去了。',py:'Hòulái fāxiàn méi dài qiánbāo, zhǐhǎo dōu fàng huiqu le.',vn:'Sau đó phát hiện không mang ví tiền, đành phải để lại hết.'},
     {zh:'后来儿子生病了，为了照顾他，哪儿都没去。',py:'Hòulái érzi shēngbìng le, wèile zhàogù tā, nǎr dōu méi qù.',vn:'Sau đó con trai bị bệnh, để chăm sóc con, chẳng đi đâu cả.'},
   ],
   hanzi:[
     {c:'后',p:'hòu',type:'半包围结构 · Bán bao vây',st:6,ord:'尸 ngoài → 口 trong (giản thể)',rad:'尸 (thi)',mean:'sau, phía sau',
      tip:'Chữ giản thể mô phỏng hình người bước CHẬM lại phía SAU đoàn người → SAU, PHÍA SAU; 后(sau)+来(đến) = SAU NÀY.',
      cf:'厚 (hòu – "dày", có 厂 thay vì 尸")',w:'后来 / 以后 / 后边'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau đó con trai bị bệnh, để chăm sóc con, chẳng đi đâu cả.',answer:'后来儿子生病了，为了照顾他，哪儿都没去。',answerPy:'Hòulái érzi shēngbìng le, wèile zhàogù tā, nǎr dōu méi qù.',
      note:'哪儿都 + phủ định diễn tả toàn bộ không ngoại lệ (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu sau này bạn hiểu rõ hơn thì hãy nói cho tôi biết.',answer:'如果后来你更了解了，就告诉我吧。',answerPy:'Rúguǒ hòulái nǐ gèng liǎojiě le, jiù gàosu wǒ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:5,zh:'爱好',py:'àihào',pos:'Danh từ',vn:'sở thích',em:'❤️',lesson:2,
   explain:['Điều mà một người thích làm, quan tâm thường xuyên.'],
   usage:'Danh từ; đi cùng động từ 有: 有很多爱好.',
   collo:['很多爱好','我的爱好','有兴趣的爱好'],
   ex_zh:'他有很多爱好，什么都会。',ex_py:'Tā yǒu hěn duō àihào, shénme dōu huì.',ex_vn:'Anh ấy có nhiều sở thích, cái gì cũng biết.',
   exList:[
     {zh:'他有很多爱好，唱歌、画画儿、踢足球，什么都会。',py:'Tā yǒu hěn duō àihào, chànggē, huà huàr, tī zúqiú, shénme dōu huì.',vn:'Anh ấy có nhiều sở thích, hát, vẽ tranh, đá bóng, cái gì cũng biết.'},
     {zh:'我的爱好是游泳。',py:'Wǒ de àihào shì yóuyǒng.',vn:'Sở thích của tôi là bơi lội.'},
     {zh:'我的爱好跟你的不一样，我更喜欢游泳。',py:'Wǒ de àihào gēn nǐ de bù yíyàng, wǒ gèng xǐhuan yóuyǒng.',vn:'Sở thích của tôi khác với của bạn, tôi thích bơi lội hơn.'},
   ],
   hanzi:[
     {c:'好',p:'hào',type:'左右结构 · Trái-phải',st:6,ord:'女 trái → 子 phải',rad:'女 (nữ)',mean:'thích; tốt (đa âm)',
      tip:'女(nữ) + 子(con cái) → mẹ ôm con thể hiện tình yêu THÍCH THÚ; khi đọc hǎo nghĩa là TỐT, khi đọc hào nghĩa là THÍCH.',
      cf:'子 (zǐ – "con", không có bộ 女")',w:'爱好 / 好奇'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sở thích của tôi khác với của bạn, tôi thích bơi lội hơn.',answer:'我的爱好跟你的不一样，我更喜欢游泳。',answerPy:'Wǒ de àihào gēn nǐ de bù yíyàng, wǒ gèng xǐhuan yóuyǒng.',
      note:'跟……不一样 diễn tả sự khác biệt.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn có sở thích chung thì các bạn sẽ trở thành bạn tốt.',answer:'只要你们有共同的爱好，就会成为好朋友。',answerPy:'Zhǐyào nǐmen yǒu gòngtóng de àihào, jiù huì chéngwéi hǎo péngyou.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:6,zh:'办法',py:'bànfǎ',pos:'Danh từ',vn:'cách, biện pháp',em:'💡',lesson:3,
   explain:['Cách thức, phương pháp để giải quyết một việc.'],
   usage:'Danh từ; đi cùng động từ 有/想: 有办法, 想办法.',
   collo:['有办法','想办法','没办法'],
   ex_zh:'谁都有办法看好你的"病"。',ex_py:'Shéi dōu yǒu bànfǎ kànhǎo nǐ de "bìng".',ex_vn:'Ai cũng có cách chữa khỏi "bệnh" của em.',
   exList:[
     {zh:'不用去医院，谁都有办法看好你的"病"。',py:'Búyòng qù yīyuàn, shéi dōu yǒu bànfǎ kànhǎo nǐ de "bìng".',vn:'Không cần đi bệnh viện đâu, ai cũng có cách chữa khỏi "bệnh" của em.'},
     {zh:'有些事情必须要自己来做选择和决定，不能什么都请别人帮忙。',py:'Yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng, bù néng shénme dōu qǐng biéren bāngmáng.',vn:'Có những việc phải tự mình lựa chọn và quyết định, không thể việc gì cũng nhờ người khác giúp.'},
     {zh:'没办法，为了瘦一点儿，我必须少吃。',py:'Méi bànfǎ, wèile shòu yìdiǎnr, wǒ bìxū shǎo chī.',vn:'Không còn cách nào khác, để gầy đi một chút, tôi phải ăn ít lại.'},
   ],
   hanzi:[
     {c:'法',p:'fǎ',type:'左右结构 · Trái-phải',st:8,ord:'氵 trái → 去 phải',rad:'氵 (thuỷ – nước)',mean:'phương pháp, luật',
      tip:'氵(nước, công bằng như mặt nước) + 去(đi qua) → quy tắc PHÁP LUẬT áp dụng công bằng; 办(làm)+法(phương pháp) = CÁCH LÀM.',
      cf:'去 (qù – "đi", không có bộ 氵")',w:'办法 / 法律'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không còn cách nào khác, để gầy đi một chút, tôi phải ăn ít lại.',answer:'没办法，为了瘦一点儿，我必须少吃。',answerPy:'Méi bànfǎ, wèile shòu yìdiǎnr, wǒ bìxū shǎo chī.',
      note:'为了 diễn tả mục đích (sẽ học ngay bên dưới trong bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn có cách hay thì hãy nói cho tôi biết.',answer:'如果你有好办法，就告诉我吧。',answerPy:'Rúguǒ nǐ yǒu hǎo bànfǎ, jiù gàosu wǒ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:7,zh:'饱',py:'bǎo',pos:'Tính từ',vn:'no',em:'🍚',lesson:3,
   explain:['Trạng thái ăn đủ, không còn đói.'],
   usage:'Tính từ, làm bổ ngữ sau động từ 吃: 吃饱了.',
   collo:['吃饱','吃不饱','吃饱了就睡'],
   ex_zh:'你吃饱了就睡。',ex_py:'Nǐ chībǎole jiù shuì.',ex_vn:'Em ăn no là ngủ.',
   exList:[
     {zh:'谁都知道运动对身体好。但是你吃饱了就睡。',py:'Shéi dōu zhīdào yùndòng duì shēntǐ hǎo. Dànshì nǐ chībǎole jiù shuì.',vn:'Ai cũng biết vận động tốt cho sức khỏe. Nhưng em ăn no là ngủ.'},
     {zh:'你的早饭只有一杯咖啡和一小块蛋糕，吃不饱。',py:'Nǐ de zǎofàn zhǐyǒu yì bēi kāfēi hé yì xiǎo kuài dàngāo, chī bu bǎo.',vn:'Bữa sáng của bạn chỉ có một cốc cà phê và một miếng bánh nhỏ, ăn không no đâu.'},
     {zh:'我吃饱了，谢谢。',py:'Wǒ chībǎo le, xièxie.',vn:'Tôi ăn no rồi, cảm ơn.'},
   ],
   hanzi:[
     {c:'饱',p:'bǎo',type:'左右结构 · Trái-phải',st:8,ord:'饣 trái → 包 phải',rad:'饣 (thực – ăn)',mean:'no',
      tip:'饣(ăn) + 包(gói tròn, đầy) → ăn đến khi bụng ĐẦY, TRÒN như cái gói = NO.',
      cf:'抱 (bào – "ôm", có bộ 扌")',w:'吃饱 / 饱了'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bữa sáng của bạn chỉ có một cốc cà phê và một miếng bánh nhỏ, ăn không no đâu.',answer:'你的早饭只有一杯咖啡和一小块蛋糕，吃不饱。',answerPy:'Nǐ de zǎofàn zhǐyǒu yì bēi kāfēi hé yì xiǎo kuài dàngāo, chī bu bǎo.',
      note:'吃不饱 diễn tả khả năng phủ định (không thể no).'},
     {promptLang:'vi',prompt:'Nếu bạn ăn no rồi thì đừng đi ngủ ngay.',answer:'如果你吃饱了，就别马上去睡觉。',answerPy:'Rúguǒ nǐ chībǎo le, jiù bié mǎshàng qù shuìjiào.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:8,zh:'为了',py:'wèile',pos:'Giới từ',vn:'để, vì',em:'🎯',lesson:3,
   explain:['Nêu mục đích của một hành động.'],
   usage:'为了 + [mục đích]，[hành động].',
   collo:['为了健康','为了瘦一点儿','为了照顾他'],
   ex_zh:'为了健康，我真应该多锻炼锻炼了。',ex_py:'Wèile jiànkāng, wǒ zhēn yīnggāi duō duànliàn duànliàn le.',ex_vn:'Vì sức khỏe, em thật sự nên tập luyện nhiều hơn.',
   exList:[
     {zh:'为了健康，我真应该多锻炼锻炼了。',py:'Wèile jiànkāng, wǒ zhēn yīnggāi duō duànliàn duànliàn le.',vn:'Vì sức khỏe, em thật sự nên tập luyện nhiều hơn.'},
     {zh:'没办法，为了瘦一点儿，我必须少吃。',py:'Méi bànfǎ, wèile shòu yìdiǎnr, wǒ bìxū shǎo chī.',vn:'Không còn cách nào khác, để gầy đi một chút, tôi phải ăn ít lại.'},
     {zh:'为了照顾他，哪儿都没去。',py:'Wèile zhàogù tā, nǎr dōu méi qù.',vn:'Để chăm sóc con, chẳng đi đâu cả.'},
   ],
   hanzi:[
     {c:'为',p:'wèi',type:'独体字 · Chữ đơn (giản thể)',st:4,ord:'nét liền',rad:'丶 (chủ)',mean:'vì, để',
      tip:'Chữ giản thể đơn giản hóa từ hình bàn tay LÀM VIỆC gì đó → mở rộng nghĩa "làm VÌ mục đích" = VÌ, ĐỂ.',
      cf:'办 (bàn – "làm", có 力 thay vì 丶")',w:'为了 / 因为'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để chăm sóc con, chẳng đi đâu cả.',answer:'为了照顾他，哪儿都没去。',answerPy:'Wèile zhàogù tā, nǎr dōu méi qù.',
      note:'为了 nêu mục đích, đứng đầu câu.'},
     {promptLang:'vi',prompt:'Vì muốn nâng cao trình độ tiếng Trung, tôi quyết định mỗi ngày đọc sách.',answer:'为了提高汉语水平，我决定每天看书。',answerPy:'Wèile tígāo Hànyǔ shuǐpíng, wǒ juédìng měitiān kàn shū.',
      note:'为了 + mục đích, 决定 + hành động (ôn lại 提高/水平 đã học ở Bài 15).'},
   ]},

  {n:9,zh:'决定',py:'juédìng',pos:'Động từ',vn:'quyết định',em:'✅',lesson:3,
   explain:['Đưa ra lựa chọn cuối cùng sau khi suy nghĩ.'],
   usage:'Động từ, mang tân ngữ là mệnh đề: 决定 + [việc].',
   collo:['决定每天','做决定','自己决定'],
   ex_zh:'从明天起，我决定每天去长跑。',ex_py:'Cóng míngtiān qǐ, wǒ juédìng měitiān qù chángpǎo.',ex_vn:'Từ ngày mai, em quyết định mỗi ngày đi chạy bộ đường dài.',
   exList:[
     {zh:'为了健康，我真应该多锻炼锻炼了。从明天起，我决定每天去长跑。',py:'Wèile jiànkāng, wǒ zhēn yīnggāi duō duànliàn duànliàn le. Cóng míngtiān qǐ, wǒ juédìng měitiān qù chángpǎo.',vn:'Vì sức khỏe, em thật sự nên tập luyện nhiều hơn. Từ ngày mai, em quyết định mỗi ngày đi chạy bộ đường dài.'},
     {zh:'有些事情必须要自己来做选择和决定。',py:'Yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng.',vn:'Có những việc phải tự mình lựa chọn và quyết định.'},
     {zh:'我还没决定呢。',py:'Wǒ hái méi juédìng ne.',vn:'Tôi vẫn chưa quyết định đâu.'},
   ],
   hanzi:[
     {c:'定',p:'dìng',type:'上下结构 · Trên-dưới',st:8,ord:'宀 trên → 定 dưới',rad:'宀 (miên – mái nhà)',mean:'quyết định, ổn định',
      tip:'宀(mái nhà) + 疋(bàn chân đứng vững) → đứng vững dưới MÁI NHÀ, không lung lay = ỔN ĐỊNH, mở rộng QUYẾT ĐỊNH.',
      cf:'空 (kōng – "trống rỗng", có 工 thay vì 疋")',w:'决定 / 一定 / 定'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi vẫn chưa quyết định đâu.',answer:'我还没决定呢。',answerPy:'Wǒ hái méi juédìng ne.',
      note:'还没……呢 diễn tả hành động chưa xảy ra.'},
     {promptLang:'vi',prompt:'Nếu bạn quyết định đi thì tôi sẽ đi cùng bạn.',answer:'如果你决定去，我就跟你一起去。',answerPy:'Rúguǒ nǐ juédìng qù, wǒ jiù gēn nǐ yìqǐ qù.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:10,zh:'选择',py:'xuǎnzé',pos:'Động từ',vn:'lựa chọn',em:'☑️',lesson:4,
   explain:['Chọn ra một trong nhiều khả năng.'],
   usage:'Động từ, mang tân ngữ: 选择 + [đối tượng].',
   collo:['选择时间','选择地点','做选择'],
   ex_zh:'第一，要选择"对"的时间。',ex_py:'Dì yī, yào xuǎnzé "duì" de shíjiān.',ex_vn:'Thứ nhất, phải chọn thời gian "đúng".',
   exList:[
     {zh:'第一，要选择"对"的时间。',py:'Dì yī, yào xuǎnzé "duì" de shíjiān.',vn:'Thứ nhất, phải chọn thời gian "đúng".'},
     {zh:'第二，要选择"对"的地点。',py:'Dì èr, yào xuǎnzé "duì" de dìdiǎn.',vn:'Thứ hai, phải chọn địa điểm "đúng".'},
     {zh:'有些事情必须要自己来做选择和决定。',py:'Yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng.',vn:'Có những việc phải tự mình lựa chọn và quyết định.'},
   ],
   hanzi:[
     {c:'选',p:'xuǎn',type:'半包围结构 · Bán bao vây',st:9,ord:'辶 ngoài → 先 trong',rad:'辶 (sước – đi)',mean:'lựa chọn',
      tip:'辶(đi) + 先(trước tiên) → đi TRƯỚC để CHỌN LỰA cái tốt nhất = LỰA CHỌN.',
      cf:'洗 (xǐ – "rửa", có bộ 氵")',w:'选择 / 选举'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thứ hai, phải chọn địa điểm "đúng".',answer:'第二，要选择"对"的地点。',answerPy:'Dì èr, yào xuǎnzé "duì" de dìdiǎn.',
      note:'第二 dùng để liệt kê thứ tự.'},
     {promptLang:'vi',prompt:'Nếu bạn không biết chọn cái nào thì hỏi tôi đi.',answer:'如果你不知道选择哪个，就问我吧。',answerPy:'Rúguǒ nǐ bù zhīdào xuǎnzé nǎge, jiù wèn wǒ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:11,zh:'冬(天)',py:'dōng(tiān)',pos:'Danh từ',vn:'(mùa) đông',em:'❄️',lesson:4,
   explain:['Mùa lạnh nhất trong năm.'],
   usage:'Danh từ chỉ mùa; đi cùng động từ 要: 冬天要再晚一些.',
   collo:['冬天','今年冬天','冬天特别长'],
   ex_zh:'冬天要再晚一些。',ex_py:'Dōngtiān yào zài wǎn yìxiē.',ex_vn:'Mùa đông thì phải muộn hơn một chút.',
   exList:[
     {zh:'一般来说，早上9点是最好的时间，冬天要再晚一些。',py:'Yìbān lái shuō, zǎoshang jiǔ diǎn shì zuì hǎo de shíjiān, dōngtiān yào zài wǎn yìxiē.',vn:'Nói chung, 9 giờ sáng là thời gian tốt nhất, mùa đông thì phải muộn hơn một chút.'},
     {zh:'雪下得真大，谁都没想到今年冬天能下这么大的雪。',py:'Xuě xià de zhēn dà, shéi dōu méi xiǎngdào jīnnián dōngtiān néng xià zhème dà de xuě.',vn:'Tuyết rơi to thật, ai cũng không ngờ mùa đông năm nay lại có tuyết to thế.'},
     {zh:'冬天特别长，从11月到第二年3月都比较冷。',py:'Dōngtiān tèbié cháng, cóng shíyī yuè dào dì-èr nián sān yuè dōu bǐjiào lěng.',vn:'Mùa đông đặc biệt dài, từ tháng 11 đến tháng 3 năm sau đều khá lạnh.'},
   ],
   hanzi:[
     {c:'冬',p:'dōng',type:'独体字 · Chữ đơn (tượng hình)',st:5,ord:'nét liền',rad:'冫 (băng – nước đá)',mean:'mùa đông',
      tip:'冫(băng giá) + 夂(bước chân chậm chạp vì lạnh) → mùa lạnh khiến bước đi CHẬM CHẠP = MÙA ĐÔNG.',
      cf:'各 (gè – "mỗi", hình dáng phần trên gần giống")',w:'冬天 / 冬季'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mùa đông đặc biệt dài, từ tháng 11 đến tháng 3 năm sau đều khá lạnh.',answer:'冬天特别长，从11月到第二年3月都比较冷。',answerPy:'Dōngtiān tèbié cháng, cóng shíyī yuè dào dì-èr nián sān yuè dōu bǐjiào lěng.',
      note:'从……到…… diễn tả khoảng thời gian.'},
     {promptLang:'vi',prompt:'Nếu mùa đông ở đây quá lạnh thì tôi sẽ không quen được.',answer:'如果这里的冬天太冷，我就不会习惯。',answerPy:'Rúguǒ zhèli de dōngtiān tài lěng, wǒ jiù bú huì xíguàn.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:12,zh:'必须',py:'bìxū',pos:'Phó từ',vn:'cần phải',em:'❗',lesson:4,
   explain:['Diễn tả sự bắt buộc, không thể thiếu.'],
   usage:'Phó từ, đứng trước động từ: 必须 + V.',
   collo:['必须要','必须少吃','必须根据'],
   ex_zh:'第三，必须要根据自己的健康情况运动。',ex_py:'Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.',ex_vn:'Thứ ba, phải vận động dựa theo tình trạng sức khỏe của bản thân.',
   exList:[
     {zh:'第三，必须要根据自己的健康情况运动。',py:'Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.',vn:'Thứ ba, phải vận động dựa theo tình trạng sức khỏe của bản thân.'},
     {zh:'没办法，为了瘦一点儿，我必须少吃。',py:'Méi bànfǎ, wèile shòu yìdiǎnr, wǒ bìxū shǎo chī.',vn:'Không còn cách nào khác, để gầy đi một chút, tôi phải ăn ít lại.'},
     {zh:'有些事情必须要自己来做选择和决定。',py:'Yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng.',vn:'Có những việc phải tự mình lựa chọn và quyết định.'},
   ],
   hanzi:[
     {c:'须',p:'xū',type:'左右结构 · Trái-phải',st:9,ord:'彡 trái → 页 phải',rad:'页 (hiệt – đầu)',mean:'cần phải; râu',
      tip:'彡(sợi lông) + 页(đầu, mặt) → sợi lông mọc trên MẶT = RÂU; mở rộng nghĩa "điều tất yếu phải có" = CẦN PHẢI.',
      cf:'颈 (jǐng – "cổ", có 圣 thay vì 彡")',w:'必须 / 须要'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có những việc phải tự mình lựa chọn và quyết định.',answer:'有些事情必须要自己来做选择和决定。',answerPy:'Yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng.',
      note:'必须要 diễn tả sự bắt buộc (ôn lại 选择/决定 đã học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn muốn khỏe mạnh thì phải tập thể dục thường xuyên.',answer:'如果你想健康，就必须经常锻炼。',answerPy:'Rúguǒ nǐ xiǎng jiànkāng, jiù bìxū jīngcháng duànliàn.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:13,zh:'根据',py:'gēnjù',pos:'Giới từ',vn:'căn cứ vào, dựa vào',em:'📊',lesson:4,
   explain:['Nêu cơ sở, căn cứ để làm một việc gì đó.'],
   usage:'根据 + [căn cứ]，[hành động].',
   collo:['根据情况','根据要求','根据自己的健康'],
   ex_zh:'必须要根据自己的健康情况运动。',ex_py:'Bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.',ex_vn:'Phải vận động dựa theo tình trạng sức khỏe của bản thân.',
   exList:[
     {zh:'第三，必须要根据自己的健康情况运动。',py:'Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.',vn:'Thứ ba, phải vận động dựa theo tình trạng sức khỏe của bản thân.'},
     {zh:'比赛是根据要求写汉字。',py:'Bǐsài shì gēnjù yāoqiú xiě hànzì.',vn:'Cuộc thi là viết chữ Hán theo yêu cầu.'},
     {zh:'请根据自己的情况选择。',py:'Qǐng gēnjù zìjǐ de qíngkuàng xuǎnzé.',vn:'Xin hãy chọn dựa theo tình trạng của bản thân.'},
   ],
   hanzi:[
     {c:'据',p:'jù',type:'左右结构 · Trái-phải',st:8,ord:'扌 trái → 居 phải',rad:'扌 (thủ – tay)',mean:'căn cứ, dựa vào',
      tip:'扌(tay) + 居(ở, dựa vào) → dùng TAY nắm giữ làm chỗ DỰA VÀO = CĂN CỨ.',
      cf:'居 (jū – "ở", không có bộ 扌")',w:'根据 / 数据'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xin hãy chọn dựa theo tình trạng của bản thân.',answer:'请根据自己的情况选择。',answerPy:'Qǐng gēnjù zìjǐ de qíngkuàng xuǎnzé.',
      note:'根据 + căn cứ, mệnh đề sau nêu hành động (ôn lại 选择/情况 sẽ học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn dựa theo yêu cầu để làm thì sẽ không sai.',answer:'如果你根据要求做，就不会错。',answerPy:'Rúguǒ nǐ gēnjù yāoqiú zuò, jiù bú huì cuò.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:14,zh:'情况',py:'qíngkuàng',pos:'Danh từ',vn:'tình hình, tình trạng',em:'📋',lesson:4,
   explain:['Trạng thái, hoàn cảnh của một sự việc tại một thời điểm.'],
   usage:'Danh từ; đi cùng tính từ sở hữu: 健康情况.',
   collo:['健康情况','根据情况','生活情况'],
   ex_zh:'必须要根据自己的健康情况运动。',ex_py:'Bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.',ex_vn:'Phải vận động dựa theo tình trạng sức khỏe của bản thân.',
   exList:[
     {zh:'第三，必须要根据自己的健康情况运动。',py:'Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.',vn:'Thứ ba, phải vận động dựa theo tình trạng sức khỏe của bản thân.'},
     {zh:'你在国外留学这几年怎么样？那里的生活情况习惯了吗？',py:'Nǐ zài guówài liú xué zhè jǐ nián zěnme yàng? Nàli de shēnghuó qíngkuàng xíguàn le ma?',vn:'Mấy năm du học nước ngoài của bạn thế nào? Tình hình sinh hoạt ở đó quen chưa?'},
     {zh:'请了解一下这个地方的情况。',py:'Qǐng liǎojiě yíxià zhège dìfang de qíngkuàng.',vn:'Xin hãy tìm hiểu tình hình của nơi này.'},
   ],
   hanzi:[
     {c:'况',p:'kuàng',type:'左右结构 · Trái-phải',st:7,ord:'冫 trái → 兄 phải',rad:'冫 (băng – nước đá)',mean:'tình huống',
      tip:'冫(nước) + 兄(anh trai, so sánh) → so sánh dòng nước chảy để biết TÌNH HÌNH; 情(cảm xúc)+况(tình huống) = TÌNH TRẠNG.',
      cf:'兄 (xiōng – "anh trai", không có bộ 冫")',w:'情况 / 何况'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xin hãy tìm hiểu tình hình của nơi này.',answer:'请了解一下这个地方的情况。',answerPy:'Qǐng liǎojiě yíxià zhège dìfang de qíngkuàng.',
      note:'了解 + tân ngữ diễn tả tìm hiểu (ôn lại đã học ở Bài 15).'},
     {promptLang:'vi',prompt:'Chỉ cần bạn dựa theo tình hình sức khỏe để vận động thì cơ thể sẽ khỏe hơn.',answer:'只要你根据健康情况运动，身体就会更健康。',answerPy:'Zhǐyào nǐ gēnjù jiànkāng qíngkuàng yùndòng, shēntǐ jiù huì gèng jiànkāng.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:15,zh:'口',py:'kǒu',pos:'Danh từ',vn:'miệng',em:'👄',lesson:4,
   explain:['Bộ phận trên cơ thể dùng để ăn, nói.'],
   usage:'Danh từ; thường ghép với tính từ: 口渴.',
   collo:['口渴','刚运动完口渴','一口'],
   ex_zh:'还要记得刚运动完口渴的时候，不要马上喝水。',ex_py:'Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.',ex_vn:'Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay.',
   exList:[
     {zh:'还要记得刚运动完口渴的时候，不要马上喝水。',py:'Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.',vn:'Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay.'},
     {zh:'你先喝一口水吧。',py:'Nǐ xiān hē yì kǒu shuǐ ba.',vn:'Bạn uống một ngụm nước trước đã.'},
     {zh:'这个人的口很大。',py:'Zhège rén de kǒu hěn dà.',vn:'Miệng người này to lắm.'},
   ],
   hanzi:[
     {c:'口',p:'kǒu',type:'独体字 · Chữ đơn (tượng hình)',st:3,ord:'nét liền',rad:'口 (khẩu)',mean:'miệng',
      tip:'Chữ tượng hình mô phỏng hình dạng cái MIỆNG đang mở → MIỆNG.',
      cf:'囗 (wéi – "bao vây", chữ tương tự nhưng nghĩa khác")',w:'口 / 口渴 / 人口'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn uống một ngụm nước trước đã.',answer:'你先喝一口水吧。',answerPy:'Nǐ xiān hē yì kǒu shuǐ ba.',
      note:'口 làm lượng từ chỉ một ngụm.'},
     {promptLang:'vi',prompt:'Nếu miệng bạn khát thì uống chút nước đi.',answer:'如果你口渴了，就喝点儿水吧。',answerPy:'Rúguǒ nǐ kǒu kě le, jiù hē diǎnr shuǐ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:16,zh:'渴',py:'kě',pos:'Tính từ',vn:'khát',em:'🥤',lesson:4,
   explain:['Trạng thái muốn uống nước do thiếu nước.'],
   usage:'Tính từ; thường ghép với 口: 口渴, hoặc đứng độc lập: 渴了.',
   collo:['口渴','渴了','很渴'],
   ex_zh:'还要记得刚运动完口渴的时候，不要马上喝水。',ex_py:'Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.',ex_vn:'Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay.',
   exList:[
     {zh:'还要记得刚运动完口渴的时候，不要马上喝水。',py:'Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.',vn:'Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay.'},
     {zh:'玩儿了这么长时间，渴了吧？',py:'Wánrle zhème cháng shíjiān, kě le ba?',vn:'Chơi lâu thế này, khát rồi phải không?'},
     {zh:'我不渴，你喝吧。',py:'Wǒ bù kě, nǐ hē ba.',vn:'Tôi không khát, bạn uống đi.'},
   ],
   hanzi:[
     {c:'渴',p:'kě',type:'左右结构 · Trái-phải',st:12,ord:'氵 trái → 曷 phải',rad:'氵 (thuỷ – nước)',mean:'khát',
      tip:'氵(nước) + 曷(cầu xin, mong muốn) → mong muốn có NƯỚC uống = KHÁT.',
      cf:'喝 (hē – "uống", có bộ 口")',w:'口渴 / 渴了'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chơi lâu thế này, khát rồi phải không?',answer:'玩儿了这么长时间，渴了吧？',answerPy:'Wánrle zhème cháng shíjiān, kě le ba?',
      note:'……了吧 diễn tả sự phỏng đoán.'},
     {promptLang:'vi',prompt:'Nếu bạn khát thì uống chút nước đi.',answer:'如果你渴了，就喝点儿水吧。',answerPy:'Rúguǒ nǐ kě le, jiù hē diǎnr shuǐ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},
];

const wuData = [
  {img:'🏘️',label:'邻居',py:'línjū',letter:'A'},
  {img:'❤️',label:'爱好',py:'àihào',letter:'B'},
  {img:'☑️',label:'选择',py:'xuǎnzé',letter:'C'},
  {img:'🍚',label:'饱',py:'bǎo',letter:'D'},
  {img:'🥤',label:'渴',py:'kě',letter:'E'},
  {img:'❄️',label:'冬天',py:'dōngtiān',letter:'F'},
];

var dialogData = [
  {scene:'在公司 · Trong công ty (xin nghỉ phép)',
   preQuiz:[
     {q:'小丽xin nghỉ vì lý do gì?',opts:['một người bạn cũ kết hôn','đi du lịch','bị bệnh'],ans:0},
     {q:'小丽muốn xin nghỉ tổng cộng mấy ngày?',opts:['三天','一天','一个星期'],ans:0},
     {q:'小丽bao lâu không gặp bạn cũ?',opts:['两年','一年','三年'],ans:0},
   ],
   lines:[
     {sp:0,zh:'周经理，下个星期我可以请几天假吗？',py:'Zhōu jīnglǐ, xià ge xīngqī wǒ kěyǐ qǐng jǐ tiān jià ma?',vn:'Giám đốc Chu, tuần sau em xin nghỉ mấy ngày được không ạ?'},
     {sp:1,zh:'你有什么事？',py:'Nǐ yǒu shénme shì?',vn:'Em có việc gì vậy?'},
     {sp:0,zh:'我的一个老朋友结婚，我跟他两年没见了。',py:'Wǒ de yí ge lǎo péngyou jié hūn, wǒ gēn tā liǎng nián méi jiàn le.',vn:'Một người bạn cũ của em kết hôn, em với anh ấy hai năm không gặp rồi.'},
     {sp:1,zh:'你一共想请几天假？',py:'Nǐ yígòng xiǎng qǐng jǐ tiān jià?',vn:'Em muốn xin nghỉ tổng cộng mấy ngày?'},
     {sp:0,zh:'三天。',py:'Sān tiān.',vn:'Ba ngày ạ.'},
   ]},
  {scene:'在公司 · Trong công ty (nói về chồng)',
   preQuiz:[
     {q:'小丽và người đàn ông đó quen nhau từ đâu?',opts:['hàng xóm, sau đó bạn học đại học','công ty','trường tiểu học'],ans:0},
     {q:'anh ấy có sở thích gì?',opts:['hát, vẽ tranh, đá bóng','đọc sách','nấu ăn'],ans:0},
     {q:'người đàn ông đó thực ra là ai?',opts:['chồng của Tiểu Lệ','đồng nghiệp','anh trai'],ans:0},
   ],
   lines:[
     {sp:1,zh:'小丽，那个高高的男人是你们公司的吗？你对他了解吗？',py:'Xiǎolì, nàge gāogāo de nánrén shì nǐmen gōngsī de ma? Nǐ duì tā liǎojiě ma?',vn:'Tiểu Lệ, người đàn ông cao cao đó là người công ty bạn à? Bạn hiểu rõ anh ấy không?'},
     {sp:0,zh:'我们过去是邻居，后来是大学同学，关系一直很不错。',py:'Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué, guānxi yìzhí hěn búcuò.',vn:'Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học, quan hệ luôn rất tốt.'},
     {sp:1,zh:'他一般喜欢做什么？',py:'Tā yìbān xǐhuan zuò shénme?',vn:'Anh ấy thường thích làm gì?'},
     {sp:0,zh:'他有很多爱好，唱歌、画画儿、踢足球，什么都会。',py:'Tā yǒu hěn duō àihào, chànggē, huà huàr, tī zúqiú, shénme dōu huì.',vn:'Anh ấy có nhiều sở thích, hát, vẽ tranh, đá bóng, cái gì cũng biết.'},
     {sp:1,zh:'真的？那你介绍我们认识认识吧。',py:'Zhēn de? Nà nǐ jièshào wǒmen rènshi rènshi ba.',vn:'Thật á? Vậy bạn giới thiệu chúng tôi làm quen đi.'},
     {sp:0,zh:'不行，现在他是我丈夫。',py:'Bù xíng, xiànzài tā shì wǒ zhàngfu.',vn:'Không được đâu, bây giờ anh ấy là chồng tôi rồi.'},
   ]},
  {scene:'在家 · Ở nhà (bàn về vận động)',
   preQuiz:[
     {q:'周太太gần đây thấy thế nào?',opts:['chỗ nào cũng khó chịu','rất khỏe','rất vui'],ans:0},
     {q:'周太太bao lâu không vận động?',opts:['三年','一年','一个月'],ans:0},
     {q:'周太太quyết định làm gì từ ngày mai?',opts:['mỗi ngày chạy bộ đường dài','ăn kiêng','đi ngủ sớm'],ans:0},
   ],
   lines:[
     {sp:1,zh:'最近我觉得哪儿都不舒服，你带我去医院检查检查吧。',py:'Zuìjìn wǒ juéde nǎr dōu bù shūfu, nǐ dài wǒ qù yīyuàn jiǎnchá jiǎncha ba.',vn:'Gần đây em thấy chỗ nào cũng khó chịu, anh đưa em đi bệnh viện khám thử đi.'},
     {sp:0,zh:'不用去医院，谁都有办法看好你的"病"。我问你，你多久没运动了？',py:'Búyòng qù yīyuàn, shéi dōu yǒu bànfǎ kànhǎo nǐ de "bìng". Wǒ wèn nǐ, nǐ duō jiǔ méi yùndòng le?',vn:'Không cần đi bệnh viện đâu, ai cũng có cách chữa khỏi "bệnh" của em. Anh hỏi em, em bao lâu không vận động rồi?'},
     {sp:1,zh:'我三年没运动了。',py:'Wǒ sān nián méi yùndòng le.',vn:'Em ba năm không vận động rồi.'},
     {sp:0,zh:'谁都知道运动对身体好。但是你吃饱了就睡。',py:'Shéi dōu zhīdào yùndòng duì shēntǐ hǎo. Dànshì nǐ chībǎole jiù shuì.',vn:'Ai cũng biết vận động tốt cho sức khỏe. Nhưng em ăn no là ngủ.'},
     {sp:1,zh:'为了健康，我真应该多锻炼锻炼了。从明天起，我决定每天去长跑。',py:'Wèile jiànkāng, wǒ zhēn yīnggāi duō duànliàn duànliàn le. Cóng míngtiān qǐ, wǒ juédìng měitiān qù chángpǎo.',vn:'Vì sức khỏe, em thật sự nên tập luyện nhiều hơn. Từ ngày mai, em quyết định mỗi ngày đi chạy bộ đường dài.'},
   ]},
  {scene:'độc bạch · Tự thuật (cách vận động đúng)',
   preQuiz:[
     {q:'nên chọn thời gian nào để vận động?',opts:['9 giờ sáng, mùa đông muộn hơn','buổi tối','giữa trưa'],ans:0},
     {q:'nên chọn địa điểm nào?',opts:['công viên, trên núi, bể bơi','trong phòng ngủ','siêu thị'],ans:0},
     {q:'sau khi vận động khát nước thì nên làm gì?',opts:['không uống nước ngay','uống thật nhiều nước ngay','ăn đồ ngọt'],ans:0},
   ],
   lines:[
     {sp:0,zh:'"运动很重要"这句话谁都懂。但是你知道怎么运动吗？第一，要选择"对"的时间。',py:'"Yùndòng hěn zhòngyào" zhè jù huà shéi dōu dǒng. Dànshì nǐ zhīdào zěnme yùndòng ma? Dì yī, yào xuǎnzé "duì" de shíjiān.',vn:'Câu "vận động rất quan trọng" ai cũng hiểu. Nhưng bạn có biết vận động thế nào không? Thứ nhất, phải chọn thời gian "đúng".'},
     {sp:0,zh:'一般来说，早上9点是最好的时间，冬天要再晚一些。',py:'Yìbān lái shuō, zǎoshang jiǔ diǎn shì zuì hǎo de shíjiān, dōngtiān yào zài wǎn yìxiē.',vn:'Nói chung, 9 giờ sáng là thời gian tốt nhất, mùa đông thì phải muộn hơn một chút.'},
     {sp:0,zh:'第二，要选择"对"的地点，公园、山上、游泳馆，这些地方都可以运动。',py:'Dì èr, yào xuǎnzé "duì" de dìdiǎn, gōngyuán, shānshang, yóuyǒngguǎn, zhèxiē dìfang dōu kěyǐ yùndòng.',vn:'Thứ hai, phải chọn địa điểm "đúng", công viên, trên núi, bể bơi, những nơi này đều có thể vận động.'},
     {sp:0,zh:'第三，必须要根据自己的健康情况运动。如果你很久没爬山或者游泳了，运动一会儿就一定要休息休息。',py:'Dì sān, bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng. Rúguǒ nǐ hěn jiǔ méi pá shān huòzhě yóu yǒng le, yùndòng yíhuìr jiù yídìng yào xiūxi xiūxi.',vn:'Thứ ba, phải vận động dựa theo tình trạng sức khỏe của bản thân. Nếu bạn lâu rồi không leo núi hoặc bơi lội, vận động một lát là phải nghỉ ngơi ngay.'},
     {sp:0,zh:'还要记得刚运动完口渴的时候，不要马上喝水。',py:'Hái yào jìde gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.',vn:'Còn phải nhớ lúc vừa vận động xong khát nước, đừng uống nước ngay.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'请',right:'假'},
  {left:'一共',right:'三天'},
  {left:'过去是',right:'邻居'},
  {left:'很多',right:'爱好'},
  {left:'有',right:'办法'},
  {left:'为了',right:'健康'},
  {left:'决定',right:'每天长跑'},
  {left:'谁都喜欢',right:'小丽。'},
  {left:'虽然他有很多爱好，',right:'但是现在没时间玩儿了。'},
  {left:'如果你渴了，',right:'就喝点儿水吧。'},
  {left:'只要你根据情况运动，',right:'身体就会更健康。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'下个星期我可以',blank:'请假',post:'吗？',hint:'(xin nghỉ phép)',ans:'请假'},
  {pre:'你',blank:'一共',post:'想请几天假？',hint:'(tổng cộng)',ans:'一共'},
  {pre:'我们过去是',blank:'邻居',post:'。',hint:'(láng giềng)',ans:'邻居'},
  {pre:'',blank:'后来',post:'是大学同学。',hint:'(sau này, sau đó)',ans:'后来'},
  {pre:'他有很多',blank:'爱好',post:'。',hint:'(sở thích)',ans:'爱好'},
  {pre:'谁都有',blank:'办法',post:'看好你的"病"。',hint:'(cách, biện pháp)',ans:'办法'},
  {pre:'你吃',blank:'饱',post:'了就睡。',hint:'(no)',ans:'饱'},
  {pre:'',blank:'为了',post:'健康，我真应该多锻炼锻炼了。',hint:'(để, vì)',ans:'为了'},
  {pre:'我',blank:'决定',post:'每天去长跑。',hint:'(quyết định)',ans:'决定'},
  {pre:'要',blank:'选择',post:'"对"的时间。',hint:'(lựa chọn)',ans:'选择'},
  {pre:'',blank:'冬天',post:'要再晚一些。',hint:'(mùa đông)',ans:'冬天'},
  {pre:'',blank:'必须',post:'要根据自己的健康情况运动。',hint:'(cần phải)',ans:'必须'},
  {pre:'必须要',blank:'根据',post:'自己的健康情况运动。',hint:'(căn cứ vào, dựa vào)',ans:'根据'},
  {pre:'必须要根据自己的健康',blank:'情况',post:'运动。',hint:'(tình hình, tình trạng)',ans:'情况'},
  {pre:'记得刚运动完',blank:'口',post:'渴的时候。',hint:'(miệng)',ans:'口'},
  {pre:'记得刚运动完口',blank:'渴',post:'的时候，不要马上喝水。',hint:'(khát)',ans:'渴'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','的','一个','老','朋友','结婚','，','我','跟','他','两年','没','见','了','。'],ans:'我的一个老朋友结婚，我跟他两年没见了。',audio:'我的一个老朋友结婚，我跟他两年没见了。'},
  {words:['谁','都','有','办法','看好','你','的','"病"','。'],ans:'谁都有办法看好你的"病"。',audio:'谁都有办法看好你的"病"。'},
  {words:['他','有','很多','爱好','，','什么','都','会','。'],ans:'他有很多爱好，什么都会。',audio:'他有很多爱好，什么都会。'},
  {words:['为了','健康','，','我','真','应该','多','锻炼锻炼','了','。'],ans:'为了健康，我真应该多锻炼锻炼了。',audio:'为了健康，我真应该多锻炼锻炼了。'},
  {words:['谁','都','喜欢','小丽','。'],ans:'谁都喜欢小丽。',audio:'谁都喜欢小丽。'},
  {words:['虽然','他','有','很多','爱好','，','但是','现在','没','时间','玩儿','了','。'],ans:'虽然他有很多爱好，但是现在没时间玩儿了。',audio:'虽然他有很多爱好，但是现在没时间玩儿了。'},
  {words:['如果','你','渴','了','，','就','喝','点儿','水','吧','。'],ans:'如果你渴了，就喝点儿水吧。',audio:'如果你渴了，就喝点儿水吧。'},
  {words:['必须','要','根据','自己','的','健康','情况','运动','。'],ans:'必须要根据自己的健康情况运动。',audio:'必须要根据自己的健康情况运动。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'你介绍认识认识我们吧。',
   opts:['你介绍我们认识认识吧。','你介绍认识认识我们吧。','你认识认识我们介绍吧。','你我们介绍认识认识吧。'],ans:0,
   exp:'Tân ngữ (我们) phải đặt TRƯỚC động từ lặp (认识认识), không chen vào giữa.'},
  {wrong:'我真应该多锻炼了锻炼。',
   opts:['我真应该多锻炼锻炼了。','我真应该多锻炼了锻炼。','我真应该多了锻炼锻炼。','我真应该锻炼多锻炼了。'],ans:0,
   exp:'了 phải đặt SAU CẢ CỤM động từ lặp (锻炼锻炼), không chen vào giữa hai âm tiết lặp.'},
  {wrong:'谁小丽都喜欢。',
   opts:['谁都喜欢小丽。','谁小丽都喜欢。','小丽谁都喜欢。','谁都小丽喜欢。'],ans:0,
   exp:'都 phải đứng NGAY SAU đại từ nghi vấn (谁), trước động từ, không tách rời cấu trúc.'},
  {wrong:'我们去公园都怎么可以。',
   opts:['我们怎么去公园都可以。','我们去公园都怎么可以。','我们怎么都去公园可以。','我们都怎么去公园可以。'],ans:0,
   exp:'怎么 phải đứng TRƯỚC động từ (去), 都 đứng SAU cụm động từ, không đảo lộn thứ tự.'},
  {wrong:'最近我觉得都哪儿不舒服。',
   opts:['最近我觉得哪儿都不舒服。','最近我觉得都哪儿不舒服。','最近我都觉得哪儿不舒服。','最近哪儿我觉得都不舒服。'],ans:0,
   exp:'都 phải đứng SAU đại từ nghi vấn (哪儿), không đứng trước.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'小丽为什么要请假？',
     q_vn:'Vì sao Tiểu Lệ xin nghỉ phép?',
     hint:'老朋友结婚，两年没见了',
     sample:'小丽要请假，因为她的一个老朋友结婚，她跟他两年没见了。',
     sample_vn:'Tiểu Lệ xin nghỉ phép, vì một người bạn cũ của cô kết hôn, cô với anh ấy hai năm không gặp rồi.',
     note:'一共 diễn tả tổng số (điểm từ vựng trọng tâm bài này).'},
    {q_zh:'小丽和那个高高的男人是什么关系？',
     q_vn:'Tiểu Lệ và người đàn ông cao cao đó có quan hệ gì?',
     hint:'过去是邻居，后来是大学同学，现在是丈夫',
     sample:'他们过去是邻居，后来是大学同学，关系一直很不错，现在他是小丽的丈夫。',
     sample_vn:'Trước đây họ là hàng xóm, sau đó là bạn học đại học, quan hệ luôn rất tốt, bây giờ anh ấy là chồng của Tiểu Lệ.',
     note:'后来 diễn tả trình tự thời gian tiếp theo.'},
    {q_zh:'周太太为什么觉得不舒服？周明怎么回答？',
     q_vn:'Vì sao bà Chu thấy khó chịu? Ông Chu trả lời thế nào?',
     hint:'三年没运动了，谁都知道运动对身体好',
     sample:'周太太三年没运动了，周明说谁都知道运动对身体好，她应该多锻炼锻炼。',
     sample_vn:'Bà Chu ba năm không vận động rồi, ông Chu nói ai cũng biết vận động tốt cho sức khỏe, bà nên tập luyện nhiều hơn.',
     note:'谁都 + động từ diễn tả toàn bộ không ngoại lệ (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'怎样才是正确的运动方法？',
     q_vn:'Thế nào mới là phương pháp vận động đúng đắn?',
     hint:'选择对的时间和地点，根据健康情况，运动后不要马上喝水',
     sample:'要选择"对"的时间和地点，还必须要根据自己的健康情况运动，刚运动完口渴的时候，不要马上喝水。',
     sample_vn:'Phải chọn thời gian và địa điểm "đúng", còn phải vận động dựa theo tình trạng sức khỏe của bản thân, lúc vừa vận động xong khát nước thì đừng uống nước ngay.',
     note:'必须要 diễn tả sự cần thiết.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tuần sau em xin nghỉ mấy ngày được không ạ?', zh:'下个星期我可以请几天假吗？', py:'Xià ge xīngqī wǒ kěyǐ qǐng jǐ tiān jià ma?'},
  {vi:'Em muốn xin nghỉ tổng cộng mấy ngày?', zh:'你一共想请几天假？', py:'Nǐ yígòng xiǎng qǐng jǐ tiān jià?'},
  {vi:'Trước đây chúng tôi là hàng xóm, sau đó là bạn học đại học.', zh:'我们过去是邻居，后来是大学同学。', py:'Wǒmen guòqù shì línjū, hòulái shì dàxué tóngxué.'},
  {vi:'Ai cũng có cách chữa khỏi "bệnh" của em.', zh:'谁都有办法看好你的"病"。', py:'Shéi dōu yǒu bànfǎ kànhǎo nǐ de "bìng".'},
  {vi:'Vì sức khỏe, em thật sự nên tập luyện nhiều hơn.', zh:'为了健康，我真应该多锻炼锻炼了。', py:'Wèile jiànkāng, wǒ zhēn yīnggāi duō duànliàn duànliàn le.'},
  {vi:'Phải chọn thời gian "đúng".', zh:'要选择"对"的时间。', py:'Yào xuǎnzé "duì" de shíjiān.'},
  {vi:'Phải vận động dựa theo tình trạng sức khỏe của bản thân.', zh:'必须要根据自己的健康情况运动。', py:'Bìxū yào gēnjù zìjǐ de jiànkāng qíngkuàng yùndòng.'},
  {vi:'Lúc vừa vận động xong khát nước, đừng uống nước ngay.', zh:'刚运动完口渴的时候，不要马上喝水。', py:'Gāng yùndòng wán kǒu kě de shíhou, búyào mǎshàng hē shuǐ.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Ai cũng thích Tiểu Lệ.', zh:'谁都喜欢小丽。', py:'Shéi dōu xǐhuan Xiǎolì.'},
  {vi:'Tiểu Cương cái gì cũng thích ăn.', zh:'小刚什么都喜欢吃。', py:'Xiǎogāng shénme dōu xǐhuan chī.'},
  {vi:'Chúng ta đi công viên thế nào cũng được.', zh:'我们怎么去公园都可以。', py:'Wǒmen zěnme qù gōngyuán dōu kěyǐ.'},
  {vi:'Gần đây tôi thấy chỗ nào cũng khó chịu.', zh:'最近我觉得哪儿都不舒服。', py:'Zuìjìn wǒ juéde nǎr dōu bù shūfu.'},
  {vi:'Bạn giới thiệu chúng tôi làm quen đi.', zh:'你介绍我们认识认识吧。', py:'Nǐ jièshào wǒmen rènshi rènshi ba.'},
  {vi:'Anh ấy mới đến, lúc nào rảnh bạn giúp đỡ anh ấy chút đi.', zh:'他是新来的，有时间你帮助帮助他吧。', py:'Tā shì xīn lái de, yǒu shíjiān nǐ bāngzhu bāngzhu tā ba.'},
  {vi:'Chỉ cần bạn vận động dựa theo tình trạng sức khỏe thì cơ thể sẽ khỏe hơn.', zh:'只要你根据情况运动，身体就会更健康。', py:'Zhǐyào nǐ gēnjù qíngkuàng yùndòng, shēntǐ jiù huì gèng jiànkāng.'},
  {vi:'Nếu bạn khát thì uống chút nước đi.', zh:'如果你渴了，就喝点儿水吧。', py:'Rúguǒ nǐ kě le, jiù hē diǎnr shuǐ ba.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 17)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-17/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女', pre:'', blank:'你的早饭只有一杯咖啡和一小块蛋糕，吃不饱。要不要再来一个鸡蛋或者水果', post:'？',
       py:'Nǐ de zǎofàn zhǐyǒu yì bēi kāfēi hé yì xiǎo kuài dàngāo, chī bu bǎo. Yào bu yào zài lái yí ge jīdàn huòzhě shuǐguǒ?', vn:'Bữa sáng của bạn chỉ có một cốc cà phê và một miếng bánh nhỏ, ăn không no đâu. Có muốn ăn thêm quả trứng hoặc trái cây không?'},
      {speaker:'男', pre:'', blank:'没办法，为了瘦一点儿，我必须少吃', post:'。',
       py:'Méi bànfǎ, wèile shòu yìdiǎnr, wǒ bìxū shǎo chī.', vn:'Không còn cách nào khác, để gầy đi một chút, tôi phải ăn ít lại.'},
    ]},
    {num:2, lines:[
      {speaker:'男', pre:'', blank:'雪下得真大，谁都没想到今年冬天能下这么大的雪', post:'。',
       py:'Xuě xià de zhēn dà, shéi dōu méi xiǎngdào jīnnián dōngtiān néng xià zhème dà de xuě.', vn:'Tuyết rơi to thật, ai cũng không ngờ mùa đông năm nay lại có tuyết to thế.'},
      {speaker:'女', pre:'是啊，', blank:'你看孩子们玩儿得多高兴', post:'。',
       py:'Shì a, nǐ kàn háizimen wánr de duō gāoxìng.', vn:'Đúng vậy, bạn xem bọn trẻ chơi vui biết bao.'},
    ]},
    {num:3, lines:[
      {speaker:'男1', pre:'经理，', blank:'下个星期我想请三天假，可以吗', post:'？',
       py:'Jīnglǐ, xià ge xīngqī wǒ xiǎng qǐng sān tiān jià, kěyǐ ma?', vn:'Giám đốc, tuần sau tôi muốn xin nghỉ ba ngày, được không ạ?'},
      {speaker:'男2', pre:'', blank:'这个月你已经请了两个星期假了，不能再请了', post:'。',
       py:'Zhège yuè nǐ yǐjīng qǐngle liǎng ge xīngqī jià le, bù néng zài qǐng le.', vn:'Tháng này bạn đã xin nghỉ hai tuần rồi, không thể xin nữa đâu.'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'你们好，', blank:'我是你们的新邻居，昨天刚搬过来。这是我妻子', post:'。',
       py:'Nǐmen hǎo, wǒ shì nǐmen de xīn línjū, zuótiān gāng bān guolai. Zhè shì wǒ qīzi.', vn:'Chào các bạn, tôi là hàng xóm mới của các bạn, hôm qua vừa chuyển đến. Đây là vợ tôi.'},
      {speaker:'女', pre:'欢迎你们！这是我丈夫。', blank:'我们在这儿住了五年了，对这儿很了解，以后有什么问题都可以来找我们', post:'。',
       py:'Huānyíng nǐmen! Zhè shì wǒ zhàngfu. Wǒmen zài zhèr zhùle wǔ nián le, duì zhèr hěn liǎojiě, yǐhòu yǒu shénme wèntí dōu kěyǐ lái zhǎo wǒmen.', vn:'Chào mừng các bạn! Đây là chồng tôi. Chúng tôi sống ở đây năm năm rồi, rất hiểu rõ nơi này, sau này có vấn đề gì đều có thể đến tìm chúng tôi.'},
    ]},
    {num:5, lines:[
      {speaker:'女', pre:'', blank:'玩儿了这么长时间，渴了吧？快坐下来休息休息，你想喝点儿什么', post:'？',
       py:'Wánrle zhème cháng shíjiān, kě le ba? Kuài zuò xialai xiūxi xiūxi, nǐ xiǎng hē diǎnr shénme?', vn:'Chơi lâu thế này, khát rồi phải không? Mau ngồi xuống nghỉ ngơi, bạn muốn uống gì?'},
      {speaker:'男', pre:'喝什么都行，', blank:'先来杯冰水，然后再看看这儿有什么好喝的饮料', post:'。',
       py:'Hē shénme dōu xíng, xiān lái bēi bīngshuǐ, ránhòu zài kànkan zhèr yǒu shénme hǎohē de yǐnliào.', vn:'Uống gì cũng được, trước tiên cho một ly nước đá, sau đó xem thử ở đây có đồ uống gì ngon.'},
    ]},
    {num:6, lines:[
      {pre:'明天早上请大家8点以前到公司会议室，做好开会的准备。', blank:'明天的会议非常重要，谁都不能迟到，也不能请假', post:'。',
       py:'Míngtiān zǎoshang qǐng dàjiā bā diǎn yǐqián dào gōngsī huìyìshì, zuòhǎo kāihuì de zhǔnbèi. Míngtiān de huìyì fēicháng zhòngyào, shéi dōu bù néng chídào, yě bù néng qǐngjià.', vn:'Sáng mai mời mọi người đến phòng họp công ty trước 8 giờ, chuẩn bị sẵn sàng họp. Cuộc họp ngày mai rất quan trọng, ai cũng không được đến muộn, cũng không được xin nghỉ.'},
    ]},
    {num:7, lines:[
      {pre:'为了方便大家，楼下新开了一家药店，24小时不休息，', blank:'什么时候去都能买到药，几点去都有人工作', post:'。',
       py:'Wèile fāngbiàn dàjiā, lóuxià xīn kāile yì jiā yàodiàn, èrshísì xiǎoshí bù xiūxi, shénme shíhou qù dōu néng mǎidào yào, jǐ diǎn qù dōu yǒu rén gōngzuò.', vn:'Để tiện cho mọi người, dưới lầu mới mở một tiệm thuốc, mở cửa 24 tiếng không nghỉ, lúc nào đến cũng mua được thuốc, giờ nào đến cũng có người làm việc.'},
    ]},
    {num:8, lines:[
      {pre:'我们在生活中遇到问题时，不能什么事情都请别人帮忙，', blank:'因为有些事情必须要自己来做选择和决定', post:'。',
       py:'Wǒmen zài shēnghuó zhōng yùdào wèntí shí, bù néng shénme shìqing dōu qǐng biéren bāngmáng, yīnwèi yǒuxiē shìqing bìxū yào zìjǐ lái zuò xuǎnzé hé juédìng.', vn:'Khi gặp vấn đề trong cuộc sống, chúng ta không thể việc gì cũng nhờ người khác giúp, vì có những việc phải tự mình lựa chọn và quyết định.'},
    ]},
    {num:9, lines:[
      {pre:'学校这个学期要举行一次汉字比赛，比赛是根据要求写汉字，一共写100个，', blank:'谁有兴趣都可以参加', post:'。',
       py:'Xuéxiào zhège xuéqī yào jǔxíng yí cì hànzì bǐsài, bǐsài shì gēnjù yāoqiú xiě hànzì, yígòng xiě yìbǎi ge, shéi yǒu xìngqù dōu kěyǐ cānjiā.', vn:'Học kỳ này trường tổ chức một cuộc thi viết chữ Hán, thi viết chữ Hán theo yêu cầu, tổng cộng viết 100 chữ, ai có hứng thú đều có thể tham gia.'},
    ]},
    {num:10, lines:[
      {pre:'大家好，这个学期我们班新来了2个同学，一共21个学生。', blank:'现在，请新同学给大家介绍介绍自己，大家欢迎', post:'。',
       py:'Dàjiā hǎo, zhège xuéqī wǒmen bān xīn láile liǎng ge tóngxué, yígòng èrshíyī ge xuésheng. Xiànzài, qǐng xīn tóngxué gěi dàjiā jièshào jièshào zìjǐ, dàjiā huānyíng.', vn:'Chào mọi người, học kỳ này lớp chúng ta có thêm 2 bạn mới, tổng cộng 21 học sinh. Bây giờ, mời các bạn mới giới thiệu bản thân với mọi người, mọi người hoan nghênh nào.'},
    ]},
  ],
  mc: [
    {num:11, options:['两瓶牛奶','一条鱼','什么都没买'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'你不是去超市吗？怎么什么都没买', post:'？', py:'Nǐ bú shì qù chāoshì ma? Zěnme shénme dōu méi mǎi?', vn:'Bạn không phải đi siêu thị à? Sao chẳng mua gì cả?'},
       {speaker:'女', pre:'', blank:'我在超市里拿了两瓶牛奶，三个面包，还拿了条鱼。后来发现没带钱包，只好都放回去了', post:'。', py:'Wǒ zài chāoshì li nále liǎng píng niúnǎi, sān ge miànbāo, hái nále tiáo yú. Hòulái fāxiàn méi dài qiánbāo, zhǐhǎo dōu fàng huiqu le.', vn:'Tôi trong siêu thị lấy hai chai sữa, ba ổ bánh mì, còn lấy một con cá. Sau đó phát hiện không mang ví tiền, đành phải để lại hết.'},
     ],
     explain:'男：你不是去超市吗？怎么什么都没买？女：我在超市里拿了两瓶牛奶，三个面包，还拿了条鱼。后来发现没带钱包，只好都放回去了。问：女的买什么回来了？ → 什么都没买。'},
    {num:12, options:['口渴','什么都不想喝','不想喝冰水'], ans:0,
     lines:[
       {speaker:'女', pre:'', blank:'走了这么长时间，渴了吧？快坐下来休息休息，你想喝点儿什么', post:'？', py:'Zǒule zhème cháng shíjiān, kě le ba? Kuài zuò xialai xiūxi xiūxi, nǐ xiǎng hē diǎnr shénme?', vn:'Đi bộ lâu thế này, khát rồi phải không? Mau ngồi xuống nghỉ ngơi, bạn muốn uống gì?'},
       {speaker:'男', pre:'喝什么都行，', blank:'先来杯冰水，然后再看看这儿有什么好喝的饮料', post:'。', py:'Hē shénme dōu xíng, xiān lái bēi bīngshuǐ, ránhòu zài kànkan zhèr yǒu shénme hǎohē de yǐnliào.', vn:'Uống gì cũng được, trước tiên cho một ly nước đá, sau đó xem thử ở đây có đồ uống gì ngon.'},
     ],
     explain:'女：走了这么长时间，渴了吧？快坐下来休息休息，你想喝点儿什么？男：喝什么都行，先来杯冰水，然后再看看这儿有什么好喝的饮料。问：关于男的，可以知道什么？ → 口渴。'},
    {num:13, options:['国外','很多城市','什么地方都没去'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'听说你和丈夫去旅游了？去了哪些地方？怎么样', post:'？', py:'Tīngshuō nǐ hé zhàngfu qù lǚyóu le? Qùle nǎxiē dìfang? Zěnme yàng?', vn:'Nghe nói bạn và chồng đi du lịch à? Đi những nơi nào? Thế nào?'},
       {speaker:'女', pre:'我们打算坐飞机去国外，找个安静的城市，好好休息休息，', blank:'后来儿子生病了，为了照顾他，哪儿都没去', post:'。', py:'Wǒmen dǎsuàn zuò fēijī qù guówài, zhǎo ge ānjìng de chéngshì, hǎohāo xiūxi xiūxi, hòulái érzi shēngbìng le, wèile zhàogù tā, nǎr dōu méi qù.', vn:'Chúng tôi định đi máy bay ra nước ngoài, tìm một thành phố yên tĩnh, nghỉ ngơi thật tốt, sau đó con trai bị bệnh, để chăm sóc con, chẳng đi đâu cả.'},
     ],
     explain:'男：听说你和丈夫去旅游了？去了哪些地方？怎么样？女：我们打算坐飞机去国外，找个安静的城市，好好休息休息，后来儿子生病了，为了照顾他，哪儿都没去。问：女的去哪儿旅游了？ → 什么地方都没去。'},
    {num:14, options:['觉得考试不容易','写得很慢','题都检查过了'], ans:2,
     lines:[
       {speaker:'女', pre:'冬冬，', blank:'你怎么这么快就考完了？做完题应该检查检查，看看有没有写错的字', post:'。', py:'Dōngdōng, nǐ zěnme zhème kuài jiù kǎowán le? Zuòwán tí yīnggāi jiǎnchá jiǎncha, kànkan yǒu méiyǒu xiěcuò de zì.', vn:'Đông Đông, sao con thi xong nhanh thế? Làm xong đề phải kiểm tra lại chứ, xem có chữ nào viết sai không.'},
       {speaker:'男', pre:'', blank:'我已经检查过了，今天的考试题特别简单，所以很快就做完了', post:'。', py:'Wǒ yǐjīng jiǎncháguo le, jīntiān de kǎoshì tí tèbié jiǎndān, suǒyǐ hěn kuài jiù zuòwán le.', vn:'Con đã kiểm tra rồi ạ, đề thi hôm nay đặc biệt đơn giản, nên làm xong rất nhanh.'},
     ],
     explain:'女：冬冬，你怎么这么快就考完了？做完题应该检查检查，看看有没有写错的字。男：我已经检查过了，今天的考试题特别简单，所以很快就做完了。问：关于冬冬，可以知道什么？ → 题都检查过了。'},
    {num:15, options:['经理和秘书','医生和病人','丈夫和妻子'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'我昨天跑完步以后就一直腿疼，请您帮我检查检查，看看用不用吃点儿药', post:'。', py:'Wǒ zuótiān pǎowán bù yǐhòu jiù yìzhí tuǐ téng, qǐng nín bāng wǒ jiǎnchá jiǎncha, kànkan yòng bu yòng chī diǎnr yào.', vn:'Hôm qua tôi chạy bộ xong là cứ đau chân mãi, mời chị khám thử giúp tôi, xem có cần uống thuốc gì không.'},
       {speaker:'女', pre:'', blank:'你太久没运动了，所以腿疼。以后多出去运动运动，不用吃药', post:'。', py:'Nǐ tài jiǔ méi yùndòng le, suǒyǐ tuǐ téng. Yǐhòu duō chūqu yùndòng yùndòng, búyòng chī yào.', vn:'Bạn lâu quá không vận động rồi, nên mới đau chân. Sau này ra ngoài vận động nhiều hơn đi, không cần uống thuốc.'},
     ],
     explain:'男：我昨天跑完步以后就一直腿疼，请您帮我检查检查，看看用不用吃点儿药。女：你太久没运动了，所以腿疼。以后多出去运动运动，不用吃药。问：他们可能是什么关系？ → 医生和病人。'},
    {num:16, options:['经常不来上课','什么都听得懂','没请过假'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'老师，我可以请几天假吗', post:'？', py:'Lǎoshī, wǒ kěyǐ qǐng jǐ tiān jià ma?', vn:'Thầy ơi, em xin nghỉ mấy ngày được không ạ?'},
       {speaker:'女', pre:'小雨，', blank:'你看看，这个学期你都请了几次假了', post:'？', py:'Xiǎoyǔ, nǐ kànkan, zhège xuéqī nǐ dōu qǐngle jǐ cì jià le?', vn:'Tiểu Vũ, em xem lại xem, học kỳ này em đã xin nghỉ mấy lần rồi?'},
       {speaker:'男', pre:'老师，对不起，', blank:'上个月是我妈妈来北京，我带她在中国旅游，然后是我姐姐来，前几天是我病了，下个星期我女朋友要来看我', post:'。', py:'Lǎoshī, duìbuqǐ, shàng ge yuè shì wǒ māma lái Běijīng, wǒ dài tā zài Zhōngguó lǚyóu, ránhòu shì wǒ jiějie lái, qián jǐ tiān shì wǒ bìng le, xià ge xīngqī wǒ nǚpéngyou yào lái kàn wǒ.', vn:'Thầy ơi, xin lỗi, tháng trước là mẹ em đến Bắc Kinh, em đưa mẹ đi du lịch Trung Quốc, sau đó là chị gái em đến, mấy hôm trước là em bị bệnh, tuần sau bạn gái em sẽ đến thăm em.'},
       {speaker:'女', pre:'小雨，', blank:'如果你再不来上课，就什么都听不懂了', post:'。', py:'Xiǎoyǔ, rúguǒ nǐ zài bù lái shàngkè, jiù shénme dōu tīng bu dǒng le.', vn:'Tiểu Vũ, nếu em cứ không đến lớp nữa thì sẽ chẳng nghe hiểu gì cả đâu.'},
     ],
     explain:'男：老师，我可以请几天假吗？女：小雨，你看看，这个学期你都请了几次假了？男：老师，对不起，上个月是我妈妈来北京，我带她在中国旅游，然后是我姐姐来，前几天是我病了，下个星期我女朋友要来看我。女：小雨，如果你再不来上课，就什么都听不懂了。问：关于男的，可以知道什么？ → 经常不来上课。'},
    {num:17, options:['天气很好','喜欢新闻','准备考试'], ans:2,
     lines:[
       {speaker:'女', pre:'', blank:'你在听新闻？太阳从西边出来了', post:'？', py:'Nǐ zài tīng xīnwén? Tàiyáng cóng xībian chūlai le?', vn:'Bạn đang nghe tin tức à? Mặt trời mọc từ hướng tây rồi à?'},
       {speaker:'男', pre:'', blank:'我对新闻没兴趣，主要是想提高提高我的汉语水平', post:'。', py:'Wǒ duì xīnwén méi xìngqù, zhǔyào shì xiǎng tígāo tígāo wǒ de Hànyǔ shuǐpíng.', vn:'Tôi không hứng thú với tin tức, chủ yếu là muốn nâng cao trình độ tiếng Trung của mình.'},
       {speaker:'女', pre:'', blank:'你一个学期都没认真学习了，现在才开始努力', post:'？', py:'Nǐ yí ge xuéqī dōu méi rènzhēn xuéxí le, xiànzài cái kāishǐ nǔlì?', vn:'Bạn cả học kỳ không học nghiêm túc, giờ mới bắt đầu cố gắng à?'},
       {speaker:'男', pre:'', blank:'明天就要考试了，我要复习复习', post:'。', py:'Míngtiān jiù yào kǎoshì le, wǒ yào fùxí fùxí.', vn:'Mai là thi rồi, tôi phải ôn tập chút.'},
     ],
     explain:'女：你在听新闻？太阳从西边出来了？男：我对新闻没兴趣，主要是想提高提高我的汉语水平。女：你一个学期都没认真学习了，现在才开始努力？男：明天就要考试了，我要复习复习。问：男的为什么听新闻？ → 准备考试。'},
    {num:18, options:['想去饭馆吃','不想吃牛肉','什么都喜欢吃'], ans:2,
     lines:[
       {speaker:'女', pre:'', blank:'我有点儿饿了，我们出去找个人少点儿的饭馆吃饭吧', post:'。', py:'Wǒ yǒudiǎnr è le, wǒmen chūqu zhǎo ge rén shǎo diǎnr de fànguǎn chī fàn ba.', vn:'Tôi hơi đói rồi, chúng ta ra ngoài tìm nhà hàng ít người ăn cơm đi.'},
       {speaker:'男', pre:'', blank:'这个时间，哪个饭馆人都多，我们在家吃吧，自己做', post:'。', py:'Zhège shíjiān, nǎge fànguǎn rén dōu duō, wǒmen zài jiā chī ba, zìjǐ zuò.', vn:'Giờ này, quán nào cũng đông người, chúng ta ăn ở nhà đi, tự nấu.'},
       {speaker:'女', pre:'好，家里有鱼，有鸡蛋，还有牛肉。', blank:'牛肉你想怎么吃？跟鸡蛋一起做还是跟别的菜一起做', post:'？', py:'Hǎo, jiā li yǒu yú, yǒu jīdàn, hái yǒu niúròu. Niúròu nǐ xiǎng zěnme chī? Gēn jīdàn yìqǐ zuò háishi gēn biéde cài yìqǐ zuò?', vn:'Được, nhà có cá, có trứng, còn có thịt bò. Thịt bò anh muốn ăn kiểu gì? Nấu cùng trứng hay nấu cùng món khác?'},
       {speaker:'男', pre:'', blank:'怎么做都行，我什么都爱吃。需要我帮忙吗', post:'？', py:'Zěnme zuò dōu xíng, wǒ shénme dōu ài chī. Xūyào wǒ bāngmáng ma?', vn:'Nấu kiểu gì cũng được, tôi cái gì cũng thích ăn. Cần tôi giúp không?'},
     ],
     explain:'女：我有点儿饿了，我们出去找个人少点儿的饭馆吃饭吧。男：这个时间，哪个饭馆人都多，我们在家吃吧，自己做。女：好，家里有鱼，有鸡蛋，还有牛肉。牛肉你想怎么吃？跟鸡蛋一起做还是跟别的菜一起做？男：怎么做都行，我什么都爱吃。需要我帮忙吗？问：关于男的，可以知道什么？ → 什么都喜欢吃。'},
    {num:19, options:['喜欢那里的冬天','不喜欢那里的学习环境','不习惯那里的天气'], ans:2,
     lines:[
       {speaker:'女', pre:'', blank:'你在国外留学这几年怎么样？那里的生活习惯了吗', post:'？', py:'Nǐ zài guówài liú xué zhè jǐ nián zěnme yàng? Nàli de shēnghuó xíguàn le ma?', vn:'Mấy năm du học nước ngoài của bạn thế nào? Cuộc sống ở đó quen chưa?'},
       {speaker:'男', pre:'那个地方的人很热情，学习环境也不错，学校里有两个图书馆。', blank:'但是天气我还不太习惯', post:'。', py:'Nàge dìfang de rén hěn rèqíng, xuéxí huánjìng yě búcuò, xuéxiào li yǒu liǎng ge túshūguǎn. Dànshì tiānqì wǒ hái bú tài xíguàn.', vn:'Người ở nơi đó rất nhiệt tình, môi trường học tập cũng không tệ, trường có hai thư viện. Nhưng thời tiết tôi vẫn chưa quen lắm.'},
       {speaker:'女', pre:'', blank:'怎么？那儿的天气跟我们这儿不一样吗', post:'？', py:'Zěnme? Nàr de tiānqì gēn wǒmen zhèr bù yíyàng ma?', vn:'Sao thế? Thời tiết ở đó khác chỗ chúng ta à?'},
       {speaker:'男', pre:'', blank:'冬天特别长，从11月到第二年3月都比较冷。下大雪的时候，哪儿都不能去，只能在房间里看书', post:'。', py:'Dōngtiān tèbié cháng, cóng shíyī yuè dào dì-èr nián sān yuè dōu bǐjiào lěng. Xià dàxuě de shíhou, nǎr dōu bù néng qù, zhǐ néng zài fángjiān li kàn shū.', vn:'Mùa đông đặc biệt dài, từ tháng 11 đến tháng 3 năm sau đều khá lạnh. Lúc tuyết rơi to, chẳng đi đâu được, chỉ có thể đọc sách trong phòng.'},
     ],
     explain:'女：你在国外留学这几年怎么样？那里的生活习惯了吗？男：那个地方的人很热情，学习环境也不错，学校里有两个图书馆。但是天气我还不太习惯。女：怎么？那儿的天气跟我们这儿不一样吗？男：冬天特别长，从11月到第二年3月都比较冷。下大雪的时候，哪儿都不能去，只能在房间里看书。问：关于男的，可以知道什么？ → 不习惯那里的天气。'},
    {num:20, options:['坐着上课','是老师','什么地方都想去'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'你在椅子上坐了一个多小时了，一句话都不说，怎么了', post:'？', py:'Nǐ zài yǐzi shang zuòle yí ge duō xiǎoshí le, yí jù huà dōu bù shuō, zěnme le?', vn:'Bạn ngồi trên ghế hơn một tiếng rồi, một câu cũng không nói, sao thế?'},
       {speaker:'女', pre:'', blank:'我上了一天课，给学生讲中国历史，现在什么都不想说', post:'。', py:'Wǒ shàngle yì tiān kè, gěi xuésheng jiǎng Zhōngguó lìshǐ, xiànzài shénme dōu bù xiǎng shuō.', vn:'Tôi dạy cả ngày, giảng lịch sử Trung Quốc cho học sinh, bây giờ chẳng muốn nói gì cả.'},
       {speaker:'男', pre:'', blank:'那你先休息休息，一会儿我带你出去吃饭', post:'。', py:'Nà nǐ xiān xiūxi xiūxi, yíhuìr wǒ dài nǐ chūqu chī fàn.', vn:'Vậy bạn nghỉ ngơi trước đi, lát nữa tôi đưa bạn ra ngoài ăn cơm.'},
       {speaker:'女', pre:'', blank:'我现在哪儿都不想去，就想在家睡觉。我们晚点儿再吃饭吧', post:'。', py:'Wǒ xiànzài nǎr dōu bù xiǎng qù, jiù xiǎng zài jiā shuìjiào. Wǒmen wǎn diǎnr zài chī fàn ba.', vn:'Bây giờ tôi chẳng muốn đi đâu cả, chỉ muốn ngủ ở nhà. Chúng ta ăn cơm muộn hơn chút đi.'},
     ],
     explain:'男：你在椅子上坐了一个多小时了，一句话都不说，怎么了？女：我上了一天课，给学生讲中国历史，现在什么都不想说。男：那你先休息休息，一会儿我带你出去吃饭。女：我现在哪儿都不想去，就想在家睡觉。我们晚点儿再吃饭吧。问：关于女的，可以知道什么？ → 是老师。'},
  ],
};
