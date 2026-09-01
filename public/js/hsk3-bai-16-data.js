// ══════════════════════════════════════════
// DATA — HSK3 Bài 16: 我现在累得下了班就想睡觉 (Bây giờ tôi mệt đến nỗi chỉ muốn đi ngủ sau khi hết giờ làm việc)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'城市',py:'chéngshì',pos:'Danh từ',vn:'thành phố',em:'🏙️',lesson:1,
   explain:['Khu vực đô thị lớn, tập trung dân cư và cơ sở hạ tầng.'],
   usage:'Danh từ; đi cùng động từ 住/去: 住在城市, 去其他城市.',
   collo:['大城市','住在城市','其他城市'],
   ex_zh:'我不喜欢一直住在同一个城市。',ex_py:'Wǒ bù xǐhuan yìzhí zhù zài tóng yí ge chéngshì.',ex_vn:'Tôi không thích cứ sống mãi ở một thành phố.',
   exList:[
     {zh:'我不喜欢一直住在同一个城市，想去其他城市看一看。',py:'Wǒ bù xǐhuan yìzhí zhù zài tóng yí ge chéngshì, xiǎng qù qítā chéngshì kàn yi kàn.',vn:'Tôi không thích cứ sống mãi ở một thành phố, muốn đi các thành phố khác xem thử.'},
     {zh:'这个城市真不错，干净、安静、漂亮。',py:'Zhège chéngshì zhēn búcuò, gānjìng, ānjìng, piàoliang.',vn:'Thành phố này thật không tệ, sạch sẽ, yên tĩnh, đẹp đẽ.'},
     {zh:'你觉得哪个城市最好玩儿？',py:'Nǐ juéde nǎge chéngshì zuì hǎowánr?',vn:'Bạn thấy thành phố nào thú vị nhất?'},
   ],
   hanzi:[
     {c:'城',p:'chéng',type:'左右结构 · Trái-phải',st:9,ord:'土 trái → 成 phải',rad:'土 (thổ – đất)',mean:'thành phố, thành trì',
      tip:'土(đất) + 成(hoàn thành, xây nên) → khối đất được XÂY DỰNG hoàn chỉnh thành THÀNH TRÌ, THÀNH PHỐ.',
      cf:'诚 (chéng – "thành thật", có bộ 讠")',w:'城市 / 长城'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong những thành phố bạn từng đến, bạn thấy thành phố nào đẹp nhất?',answer:'在你去过的城市里，你觉得哪个城市最漂亮？',answerPy:'Zài nǐ qùguo de chéngshì lǐ, nǐ juéde nǎge chéngshì zuì piàoliang?',
      note:'哪个 + N hỏi lựa chọn.'},
     {promptLang:'vi',prompt:'Nếu bạn thích thành phố này thì chúng ta ở lại thêm vài ngày đi.',answer:'如果你喜欢这个城市，我们就多住几天吧。',answerPy:'Rúguǒ nǐ xǐhuan zhège chéngshì, wǒmen jiù duō zhù jǐ tiān ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả (điểm ngữ pháp trọng tâm bài này).'},
   ]},

  {n:2,zh:'如果',py:'rúguǒ',pos:'Liên từ',vn:'nếu',em:'🔀',lesson:1,
   explain:['Dùng để nêu một giả thiết, điều kiện.'],
   usage:'如果 + [giả thiết]，(chủ ngữ) + 就 + [kết quả].',
   collo:['如果……就……','如果有钱','如果不舒服'],
   ex_zh:'如果有钱，就去了。',ex_py:'Rúguǒ yǒu qián, jiù qù le.',ex_vn:'Nếu có tiền thì đã đi rồi.',
   exList:[
     {zh:'但是那时候没有钱，如果有钱，就去了。',py:'Dànshì nà shíhou méiyǒu qián, rúguǒ yǒu qián, jiù qù le.',vn:'Nhưng lúc đó không có tiền, nếu có tiền thì đã đi rồi.'},
     {zh:'如果不舒服，就去医院检查一下吧。',py:'Rúguǒ bù shūfu, jiù qù yīyuàn jiǎnchá yíxià ba.',vn:'Nếu khó chịu thì đi bệnh viện khám thử đi.'},
     {zh:'如果你太累了，就休息一会儿。',py:'Rúguǒ nǐ tài lèi le, jiù xiūxi yíhuìr.',vn:'Nếu bạn mệt quá thì nghỉ một lát đi.'},
   ],
   hanzi:[
     {c:'如',p:'rú',type:'左右结构 · Trái-phải',st:6,ord:'女 trái → 口 phải',rad:'女 (nữ)',mean:'như là, nếu',
      tip:'女(nữ) + 口(miệng, lời nói) → nghe LỜI người phụ nữ (thời xưa: mẹ) thì mọi việc NHƯ Ý; mở rộng nghĩa GIẢ THIẾT "nếu như".',
      cf:'知 (zhī – "biết", có bộ 矢")',w:'如果 / 比如'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bạn đói thì ăn chút gì trước đi.',answer:'如果你饿了，就先吃点儿东西吧。',answerPy:'Rúguǒ nǐ è le, jiù xiān chī diǎnr dōngxi ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Tuy bây giờ tiền không còn là vấn đề nhưng chủ yếu là không có thời gian.',answer:'虽然现在钱不是问题了，但是主要是没有时间。',answerPy:'Suīrán xiànzài qián bú shì wèntí le, dànshì zhǔyào shì méiyǒu shíjiān.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:3,zh:'认为',py:'rènwéi',pos:'Động từ',vn:'cho rằng',em:'💭',lesson:1,
   explain:['Diễn tả quan điểm, ý kiến cá nhân về một vấn đề.'],
   usage:'Động từ, mang tân ngữ là mệnh đề: 认为 + [ý kiến].',
   collo:['我认为','大家都认为','认为不可能'],
   ex_zh:'我认为现在您有时间也不会出去玩儿。',ex_py:'Wǒ rènwéi xiànzài nín yǒu shíjiān yě bú huì chūqu wánr.',ex_vn:'Cháu nghĩ bây giờ chú có thời gian cũng sẽ không đi chơi đâu.',
   exList:[
     {zh:'我认为现在您有时间也不会出去玩儿。',py:'Wǒ rènwéi xiànzài nín yǒu shíjiān yě bú huì chūqu wánr.',vn:'Cháu nghĩ bây giờ chú có thời gian cũng sẽ không đi chơi đâu.'},
     {zh:'她认为男的不可能去跑步。',py:'Tā rènwéi nán de bù kěnéng qù pǎobù.',vn:'Cô ấy cho rằng người đàn ông đó không thể đi chạy bộ được.'},
     {zh:'很多人都认为，人和人的关系冷冷的。',py:'Hěn duō rén dōu rènwéi, rén hé rén de guānxi lěnglěng de.',vn:'Nhiều người đều cho rằng, quan hệ giữa người với người lạnh nhạt.'},
   ],
   hanzi:[
     {c:'认',p:'rèn',type:'左右结构 · Trái-phải',st:4,ord:'讠 trái → 人 phải',rad:'讠 (ngôn – lời nói, giản thể)',mean:'nhận biết, thừa nhận',
      tip:'讠(lời nói) + 人(người) → dùng LỜI NÓI để nhận biết NGƯỜI khác = NHẬN RA, mở rộng nghĩa CHO RẰNG.',
      cf:'忍 (rěn – "nhẫn nhịn", có bộ 心")',w:'认为 / 认识 / 认真'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mọi người đều cho rằng kỳ thi lần này không khó.',answer:'大家都认为这次考试不难。',answerPy:'Dàjiā dōu rènwéi zhè cì kǎoshì bù nán.',
      note:'认为 + mệnh đề diễn tả quan điểm.'},
     {promptLang:'vi',prompt:'Nếu bạn cho rằng đúng thì cứ làm theo cách đó đi.',answer:'如果你认为对，就照那个办法做吧。',answerPy:'Rúguǒ nǐ rènwéi duì, jiù zhào nàge bànfǎ zuò ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:4,zh:'皮鞋',py:'píxié',pos:'Danh từ',vn:'giày da',em:'👞',lesson:2,
   explain:['Loại giày làm từ chất liệu da.'],
   usage:'Danh từ; đi cùng động từ 送/买: 送皮鞋.',
   collo:['小皮鞋','买皮鞋','一双皮鞋'],
   ex_zh:'你送的小皮鞋和小帽子真漂亮！',ex_py:'Nǐ sòng de xiǎo píxié hé xiǎo màozi zhēn piàoliang!',ex_vn:'Đôi giày da và cái mũ bạn tặng đẹp thật!',
   exList:[
     {zh:'谢谢你们来看我女儿。你送的小皮鞋和小帽子真漂亮！',py:'Xièxie nǐmen lái kàn wǒ nǚ\'ér. Nǐ sòng de xiǎo píxié hé xiǎo màozi zhēn piàoliang!',vn:'Cảm ơn các bạn đến thăm con gái mình. Đôi giày da và cái mũ bạn tặng đẹp thật!'},
     {zh:'每天都帮她把小皮鞋放好。',py:'Měi tiān dōu bāng tā bǎ xiǎo píxié fànghǎo.',vn:'Ngày nào cũng giúp cô bé xếp gọn đôi giày da nhỏ.'},
     {zh:'这双小皮鞋真好看，谁给你买的？',py:'Zhè shuāng xiǎo píxié zhēn hǎokàn, shéi gěi nǐ mǎi de?',vn:'Đôi giày da nhỏ này đẹp thật, ai mua cho bạn vậy?'},
   ],
   hanzi:[
     {c:'皮',p:'pí',type:'半包围结构 · Bán bao vây',st:5,ord:'nét liền',rad:'皮 (bì – da)',mean:'da',
      tip:'Chữ tượng hình mô phỏng bàn tay LỘT DA thú → DA; 皮(da)+鞋(giày) = GIÀY DA.',
      cf:'反 (fǎn – "trái lại", hình dáng gần giống")',w:'皮鞋 / 皮肤'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đôi giày da đen đó chắc mắc lắm nhỉ, bạn mua ở đâu vậy?',answer:'那双黑皮鞋很贵吧，你在哪儿买的？',answerPy:'Nà shuāng hēi píxié hěn guì ba, nǐ zài nǎr mǎi de?',
      note:'双 là lượng từ dùng cho giày.'},
     {promptLang:'vi',prompt:'Nếu bạn thích đôi giày da đó thì tôi mua tặng bạn.',answer:'如果你喜欢那双皮鞋，我就买给你。',answerPy:'Rúguǒ nǐ xǐhuan nà shuāng píxié, wǒ jiù mǎi gěi nǐ.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:5,zh:'帽子',py:'màozi',pos:'Danh từ',vn:'mũ, nón',em:'🎩',lesson:2,
   explain:['Vật đội trên đầu để che nắng, giữ ấm hoặc làm đẹp.'],
   usage:'Danh từ; đi cùng động từ 戴/送: 戴帽子.',
   collo:['小帽子','戴帽子','买帽子'],
   ex_zh:'你送的小皮鞋和小帽子真漂亮！',ex_py:'Nǐ sòng de xiǎo píxié hé xiǎo màozi zhēn piàoliang!',ex_vn:'Đôi giày da và cái mũ bạn tặng đẹp thật!',
   exList:[
     {zh:'谢谢你们来看我女儿。你送的小皮鞋和小帽子真漂亮！',py:'Xièxie nǐmen lái kàn wǒ nǚ\'ér. Nǐ sòng de xiǎo píxié hé xiǎo màozi zhēn piàoliang!',vn:'Cảm ơn các bạn đến thăm con gái mình. Đôi giày da và cái mũ bạn tặng đẹp thật!'},
     {zh:'外边冷极了，戴上帽子吧。',py:'Wàibian lěng jí le, dàishang màozi ba.',vn:'Bên ngoài lạnh lắm, đội mũ vào đi.'},
     {zh:'这顶帽子是谁的？',py:'Zhè dǐng màozi shì shéi de?',vn:'Cái mũ này của ai vậy?'},
   ],
   hanzi:[
     {c:'帽',p:'mào',type:'左右结构 · Trái-phải',st:12,ord:'巾 trái → 冒 phải',rad:'巾 (cân – khăn, vải)',mean:'mũ, nón',
      tip:'巾(vải, khăn) + 冒(che trên đầu) → tấm vải CHE lên đầu = MŨ, NÓN.',
      cf:'冒 (mào – "liều lĩnh", không có bộ 巾")',w:'帽子 / 戴帽子'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm nay nóng lắm, bạn đừng đội mũ nữa.',answer:'今天热极了，你别戴帽子了。',answerPy:'Jīntiān rè jí le, nǐ bié dài màozi le.',
      note:'冷极了 diễn tả mức độ cực điểm (ôn lại 极了 đã học ở Bài 15).'},
     {promptLang:'vi',prompt:'Nếu trời lạnh thì bạn nên đội mũ.',answer:'如果天气冷，你就应该戴帽子。',answerPy:'Rúguǒ tiānqì lěng, nǐ jiù yīnggāi dài màozi.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:6,zh:'长',py:'zhǎng',pos:'Động từ',vn:'trưởng thành, lớn lên',em:'📏',lesson:2,
   explain:['Phát triển về kích thước, tuổi tác theo thời gian.'],
   usage:'Động từ, thường đi cùng bổ ngữ trạng thái: 长得 + [tính từ].',
   collo:['长得可爱','长高了','长大了'],
   ex_zh:'你女儿长得白白的、胖胖的，真可爱！',ex_py:'Nǐ nǚ\'ér zhǎng de báibái de, pàngpàng de, zhēn kě\'ài!',ex_vn:'Con gái bạn trắng trắng, mũm mĩm, đáng yêu thật!',
   exList:[
     {zh:'别客气，你女儿长得白白的、胖胖的，真可爱！',py:'Bié kèqi, nǐ nǚ\'ér zhǎng de báibái de, pàngpàng de, zhēn kě\'ài!',vn:'Đừng khách sáo, con gái bạn trắng trắng, mũm mĩm, đáng yêu thật!'},
     {zh:'她鼻子小小的，头发黑黑的，长得像谁？',py:'Tā bízi xiǎoxiǎo de, tóufa hēihēi de, zhǎng de xiàng shéi?',vn:'Bé mũi nhỏ nhỏ, tóc đen đen, giống ai vậy?'},
     {zh:'乐乐，你长高了，也长胖了。',py:'Lèlè, nǐ zhǎnggāo le, yě zhǎngpàng le.',vn:'Lạc Lạc, con cao lên rồi, cũng mập lên rồi.'},
   ],
   hanzi:[
     {c:'长',p:'zhǎng',type:'独体字 · Chữ đơn (tượng hình, giản thể)',st:4,ord:'nét liền',rad:'长 (trường)',mean:'lớn lên; dài',
      tip:'Chữ tượng hình mô phỏng mái tóc DÀI theo thời gian → khi đọc zhǎng nghĩa là LỚN LÊN, TRƯỞNG THÀNH; khi đọc cháng nghĩa là DÀI.',
      cf:'张 (zhāng – "mở ra", có bộ 弓")',w:'长大 / 长得 / 校长'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con trai, mùa hè này con cao lên không ít đấy.',answer:'儿子，你这个暑假长高了不少。',answerPy:'Érzi, nǐ zhège shǔjià zhǎnggāo le bù shǎo.',
      note:'长 + bổ ngữ kết quả (高/胖) diễn tả sự phát triển.'},
     {promptLang:'vi',prompt:'Nếu con lớn lên, con sẽ hiểu bố mẹ hơn.',answer:'如果你长大了，就会更了解爸爸妈妈。',answerPy:'Rúguǒ nǐ zhǎngdà le, jiù huì gèng liǎojiě bàba māma.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 了解 đã học ở Bài 15).'},
   ]},

  {n:7,zh:'可爱',py:'kě\'ài',pos:'Tính từ',vn:'đáng yêu, dễ thương',em:'🥰',lesson:2,
   explain:['Có vẻ ngoài hoặc tính cách khiến người khác yêu thích.'],
   usage:'Tính từ, làm vị ngữ: 真可爱.',
   collo:['真可爱','可爱极了','长得可爱'],
   ex_zh:'你女儿长得白白的、胖胖的，真可爱！',ex_py:'Nǐ nǚ\'ér zhǎng de báibái de, pàngpàng de, zhēn kě\'ài!',ex_vn:'Con gái bạn trắng trắng, mũm mĩm, đáng yêu thật!',
   exList:[
     {zh:'别客气，你女儿长得白白的、胖胖的，真可爱！',py:'Bié kèqi, nǐ nǚ\'ér zhǎng de báibái de, pàngpàng de, zhēn kě\'ài!',vn:'Đừng khách sáo, con gái bạn trắng trắng, mũm mĩm, đáng yêu thật!'},
     {zh:'你家小狗小小的，长得真可爱！',py:'Nǐ jiā xiǎogǒu xiǎoxiǎo de, zhǎng de zhēn kě\'ài!',vn:'Con chó nhỏ nhà bạn nho nhỏ, trông đáng yêu thật!'},
     {zh:'那孩子特别可爱，出生时特别胖。',py:'Nà háizi tèbié kě\'ài, chūshēng shí tèbié pàng.',vn:'Đứa bé đó đặc biệt đáng yêu, lúc sinh ra rất mũm mĩm.'},
   ],
   hanzi:[
     {c:'爱',p:'ài',type:'上下结构 · Trên-dưới',st:10,ord:'⺈ trên → 友 dưới (giản thể)',rad:'爪 (trảo – móng vuốt)',mean:'yêu thương',
      tip:'⺈(bàn tay) + 友(bạn bè) → dùng TAY ôm ấp BẠN BÈ thân thiết = YÊU THƯƠNG; 可(có thể)+爱(yêu) = ĐÁNG YÊU.',
      cf:'受 (shòu – "nhận", hình dáng gần giống")',w:'可爱 / 爱好'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con mèo nhà hàng xóm mũm mĩm, trông thật đáng yêu!',answer:'邻居家的猫咪胖胖的，看起来真可爱！',answerPy:'Línjū jiā de māomī pàngpàng de, kàn qilai zhēn kě\'ài!',
      note:'小小的 = tính từ đơn âm tiết lặp lại (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu con mèo đó đáng yêu thì chúng ta mang về nhà đi.',answer:'如果那只猫可爱，我们就把它带回家吧。',answerPy:'Rúguǒ nà zhī māo kě\'ài, wǒmen jiù bǎ tā dài huí jiā ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:8,zh:'米',py:'mǐ',pos:'Danh từ',vn:'mét',em:'📐',lesson:2,
   explain:['Đơn vị đo chiều dài trong hệ mét.'],
   usage:'Danh từ đơn vị, đi sau con số: 一米, 快1米了.',
   collo:['1米','两米','一千米'],
   ex_zh:'快1米了，25公斤。',ex_py:'Kuài yì mǐ le, èrshíwǔ gōngjīn.',ex_vn:'Sắp được 1 mét rồi, nặng 25 cân.',
   exList:[
     {zh:'快1米了，25公斤。',py:'Kuài yì mǐ le, èrshíwǔ gōngjīn.',vn:'Sắp được 1 mét rồi, nặng 25 cân.'},
     {zh:'我打算每天去运动场跑两千米。',py:'Wǒ dǎsuàn měi tiān qù yùndòngchǎng pǎo liǎng qiān mǐ.',vn:'Tôi định mỗi ngày ra sân vận động chạy hai nghìn mét.'},
     {zh:'离这儿两百米就是学校。',py:'Lí zhèr liǎngbǎi mǐ jiùshì xuéxiào.',vn:'Cách đây hai trăm mét là trường học.'},
   ],
   hanzi:[
     {c:'米',p:'mǐ',type:'独体字 · Chữ đơn (tượng hình)',st:6,ord:'nét liền',rad:'米 (mễ – gạo)',mean:'gạo; mét',
      tip:'Chữ tượng hình mô phỏng các HẠT GẠO rơi vãi → GẠO; do phiên âm gần giống "mètre" nên mượn dùng làm đơn vị MÉT.',
      cf:'来 (lái – "đến", hình dáng gần giống")',w:'米 (mét) / 大米'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cách nhà tôi không xa, khoảng ba trăm mét là đến siêu thị.',answer:'离我家不远，大概三百米就是超市。',answerPy:'Lí wǒ jiā bù yuǎn, dàgài sānbǎi mǐ jiùshì chāoshì.',
      note:'离 diễn tả khoảng cách (ôn lại 学校 đã học ở Bài 13).'},
     {promptLang:'vi',prompt:'Nếu bạn chạy được hai nghìn mét thì sức khỏe sẽ tốt hơn.',answer:'如果你能跑两千米，身体就会更好。',answerPy:'Rúguǒ nǐ néng pǎo liǎng qiān mǐ, shēntǐ jiù huì gèng hǎo.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:9,zh:'公斤',py:'gōngjīn',pos:'Danh từ',vn:'kilôgram',em:'⚖️',lesson:2,
   explain:['Đơn vị đo khối lượng trong hệ mét.'],
   usage:'Danh từ đơn vị, đi sau con số: 25公斤.',
   collo:['25公斤','瘦得只有40公斤','四公斤'],
   ex_zh:'快1米了，25公斤。',ex_py:'Kuài yì mǐ le, èrshíwǔ gōngjīn.',ex_vn:'Sắp được 1 mét rồi, nặng 25 cân.',
   exList:[
     {zh:'快1米了，25公斤。',py:'Kuài yì mǐ le, èrshíwǔ gōngjīn.',vn:'Sắp được 1 mét rồi, nặng 25 cân.'},
     {zh:'那时候她很瘦，瘦得只有40公斤。',py:'Nà shíhou tā hěn shòu, shòu de zhǐyǒu sìshí gōngjīn.',vn:'Lúc đó cô ấy rất gầy, gầy đến mức chỉ có 40 cân.'},
     {zh:'那孩子出生时特别胖，四公斤呢。',py:'Nà háizi chūshēng shí tèbié pàng, sì gōngjīn ne.',vn:'Đứa bé đó lúc sinh ra rất mũm mĩm, tận bốn cân đấy.'},
   ],
   hanzi:[
     {c:'斤',p:'jīn',type:'独体字 · Chữ đơn (tượng hình)',st:4,ord:'nét liền',rad:'斤 (cân)',mean:'cân, rìu',
      tip:'Chữ tượng hình mô phỏng hình cái RÌU (dụng cụ cân đo thời xưa) → CÂN; 公(chung, tiêu chuẩn)+斤(cân) = KILÔGRAM.',
      cf:'斥 (chì – "quở trách", có nét chấm thêm")',w:'公斤 / 斤 (đơn vị cân cổ)'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bây giờ anh ấy béo lên rồi, béo đến mức đã tám mươi cân rồi.',answer:'现在他胖了，胖得已经有八十公斤了。',answerPy:'Xiànzài tā pàng le, pàng de yǐjīng yǒu bāshí gōngjīn le.',
      note:'瘦得 + cụm từ = bổ ngữ trạng thái phức tạp (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn ăn nhiều thì sẽ tăng thêm vài cân.',answer:'如果你多吃点儿，就会长几公斤。',answerPy:'Rúguǒ nǐ duō chī diǎnr, jiù huì zhǎng jǐ gōngjīn.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 长 vừa học trong bài này).'},
   ]},

  {n:10,zh:'鼻子',py:'bízi',pos:'Danh từ',vn:'mũi',em:'👃',lesson:2,
   explain:['Bộ phận trên khuôn mặt dùng để thở và ngửi.'],
   usage:'Danh từ; thường đi cùng tính từ lặp: 鼻子小小的.',
   collo:['鼻子小小的','高高的鼻子','鼻子像爸爸'],
   ex_zh:'你看她鼻子小小的，头发黑黑的。',ex_py:'Nǐ kàn tā bízi xiǎoxiǎo de, tóufa hēihēi de.',ex_vn:'Bạn xem bé mũi nhỏ nhỏ, tóc đen đen.',
   exList:[
     {zh:'你看她鼻子小小的，头发黑黑的，长得像谁？',py:'Nǐ kàn tā bízi xiǎoxiǎo de, tóufa hēihēi de, zhǎng de xiàng shéi?',vn:'Bạn xem bé mũi nhỏ nhỏ, tóc đen đen, giống ai vậy?'},
     {zh:'鼻子像爸爸，高高的。',py:'Bízi xiàng bàba, gāogāo de.',vn:'Mũi giống bố, cao cao.'},
     {zh:'他的鼻子长得很好看。',py:'Tā de bízi zhǎng de hěn hǎokàn.',vn:'Mũi của anh ấy trông rất đẹp.'},
   ],
   hanzi:[
     {c:'鼻',p:'bí',type:'上下结构 · Trên-dưới',st:14,ord:'自 trên → 畀 dưới',rad:'自 (tự – mũi)',mean:'mũi',
      tip:'自(hình cái mũi cổ) + 畀(cho, trao) → 自 vốn là hình MŨI, thêm 畀 làm rõ nghĩa = MŨI (bộ phận cơ thể).',
      cf:'自 (zì – "tự mình", chính là hình cái mũi ban đầu")',w:'鼻子 / 鼻音'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Miệng giống chị gái, nho nhỏ.',answer:'嘴巴像姐姐，小小的。',answerPy:'Zuǐba xiàng jiějie, xiǎoxiǎo de.',
      note:'高高的 = tính từ đơn âm tiết lặp lại (điểm ngữ pháp trọng tâm bài này).'},
     {promptLang:'vi',prompt:'Nếu mũi bé giống bố thì chắc chắn cao cao.',answer:'如果孩子的鼻子像爸爸，就一定是高高的。',answerPy:'Rúguǒ háizi de bízi xiàng bàba, jiù yídìng shì gāogāo de.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:11,zh:'头发',py:'tóufa',pos:'Danh từ',vn:'tóc',em:'💇',lesson:2,
   explain:['Sợi mọc trên đầu người.'],
   usage:'Danh từ; thường đi cùng tính từ lặp: 头发黑黑的.',
   collo:['头发黑黑的','长头发','头发长长的'],
   ex_zh:'你看她鼻子小小的，头发黑黑的。',ex_py:'Nǐ kàn tā bízi xiǎoxiǎo de, tóufa hēihēi de.',ex_vn:'Bạn xem bé mũi nhỏ nhỏ, tóc đen đen.',
   exList:[
     {zh:'你看她鼻子小小的，头发黑黑的，长得像谁？',py:'Nǐ kàn tā bízi xiǎoxiǎo de, tóufa hēihēi de, zhǎng de xiàng shéi?',vn:'Bạn xem bé mũi nhỏ nhỏ, tóc đen đen, giống ai vậy?'},
     {zh:'这个头发长长的是姐姐吧？',py:'Zhège tóufa chángcháng de shì jiějie ba?',vn:'Người tóc dài dài này là chị gái phải không?'},
     {zh:'她喜欢长头发，大女儿不喜欢。',py:'Tā xǐhuan cháng tóufa, dà nǚ\'ér bù xǐhuan.',vn:'Bé thích để tóc dài, con gái lớn thì không thích.'},
   ],
   hanzi:[
     {c:'发',p:'fà',type:'独体字 · Chữ đơn (giản thể, đa âm)',st:5,ord:'nét liền',rad:'又 (hựu)',mean:'tóc',
      tip:'Cùng chữ với 发(fā - phát ra), nhưng khi đọc fà nghĩa là TÓC — vì tóc cũng "mọc/phát ra" từ da đầu.',
      cf:'发 (fā – "gửi, phát ra", cùng chữ khác âm đọc")',w:'头发 / 白发'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người tóc ngắn ngắn đó là ai vậy?',answer:'那个头发短短的是谁啊？',answerPy:'Nàge tóufa duǎnduǎn de shì shéi a?',
      note:'长长的 = tính từ đơn âm tiết lặp lại.'},
     {promptLang:'vi',prompt:'Nếu tóc bạn dài thì trông sẽ đẹp hơn.',answer:'如果你的头发长长的，看起来就会更漂亮。',answerPy:'Rúguǒ nǐ de tóufa chángcháng de, kàn qilai jiù huì gèng piàoliang.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:12,zh:'检查',py:'jiǎnchá',pos:'Động từ',vn:'kiểm tra, khám',em:'🔍',lesson:3,
   explain:['Xem xét kỹ để phát hiện vấn đề.'],
   usage:'Động từ, mang tân ngữ: 检查牙, 检查身体.',
   collo:['去医院检查','检查一下','检查好几次'],
   ex_zh:'如果不舒服，就去医院检查一下吧。',ex_py:'Rúguǒ bù shūfu, jiù qù yīyuàn jiǎnchá yíxià ba.',ex_vn:'Nếu khó chịu thì đi bệnh viện khám thử đi.',
   exList:[
     {zh:'如果不舒服，就去医院检查一下吧。',py:'Rúguǒ bù shūfu, jiù qù yīyuàn jiǎnchá yíxià ba.',vn:'Nếu khó chịu thì đi bệnh viện khám thử đi.'},
     {zh:'检查好几次了，但是没什么用。',py:'Jiǎnchá hǎo jǐ cì le, dànshì méi shénme yòng.',vn:'Khám mấy lần rồi, nhưng chẳng có tác dụng gì.'},
     {zh:'只听你说不行，我需要检查一下才清楚。',py:'Zhǐ tīng nǐ shuō bù xíng, wǒ xūyào jiǎnchá yíxià cái qīngchu.',vn:'Chỉ nghe bạn nói không được đâu, tôi cần khám thử mới rõ được.'},
   ],
   hanzi:[
     {c:'检',p:'jiǎn',type:'左右结构 · Trái-phải',st:11,ord:'木 trái → 佥 phải (giản thể)',rad:'木 (mộc – gỗ)',mean:'kiểm tra',
      tip:'木(gỗ, thẻ tre ghi chép) + 佥(mọi người cùng xem) → mọi người cùng XEM XÉT thẻ ghi = KIỂM TRA.',
      cf:'验 (yàn – "kiểm nghiệm", có bộ 马")',w:'检查 / 检验'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Máy tính bị lỗi rồi, tôi phải tìm người kiểm tra thì mới dùng được.',answer:'电脑出问题了，我得找人检查一下才能用。',answerPy:'Diànnǎo chū wèntí le, wǒ děi zhǎo rén jiǎnchá yíxià cái néng yòng.',
      note:'才 diễn tả điều kiện cần (ôn lại đã học ở Bài 12).'},
     {promptLang:'vi',prompt:'Nếu ngày mai vẫn không khỏe thì đi khám bác sĩ đi.',answer:'如果明天还不好，就去检查一下医生吧。',answerPy:'Rúguǒ míngtiān hái bù hǎo, jiù qù jiǎnchá yíxià yīshēng ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:13,zh:'刷牙',py:'shuā yá',pos:'Động từ',vn:'chải răng',em:'🪥',lesson:3,
   explain:['Dùng bàn chải làm sạch răng.'],
   usage:'Động từ ly hợp: 刷 + 牙; thường đi cùng 好好儿: 好好儿刷牙.',
   collo:['好好儿刷牙','早上刷牙','刷牙、洗脸'],
   ex_zh:'每次医生都告诉我，回家好好儿刷牙。',ex_py:'Měi cì yīshēng dōu gàosu wǒ, huí jiā hǎohāor shuā yá.',ex_vn:'Lần nào bác sĩ cũng bảo tôi, về nhà đánh răng cho kỹ.',
   exList:[
     {zh:'每次医生都告诉我，回家好好儿刷牙。',py:'Měi cì yīshēng dōu gàosu wǒ, huí jiā hǎohāor shuā yá.',vn:'Lần nào bác sĩ cũng bảo tôi, về nhà đánh răng cho kỹ.'},
     {zh:'起床以后要先刷牙、洗脸。',py:'Qǐchuáng yǐhòu yào xiān shuā yá, xǐ liǎn.',vn:'Sau khi ngủ dậy phải đánh răng, rửa mặt trước.'},
     {zh:'孩子还不会自己刷牙。',py:'Háizi hái bú huì zìjǐ shuā yá.',vn:'Đứa bé vẫn chưa biết tự đánh răng.'},
   ],
   hanzi:[
     {c:'刷',p:'shuā',type:'左右结构 · Trái-phải',st:8,ord:'尸 trái → 刂 phải',rad:'刂 (đao – dao)',mean:'chải, cọ',
      tip:'尸(hình dáng vật thể) + 刂(công cụ) → dùng CÔNG CỤ (bàn chải) chà lên bề mặt = CHẢI, ĐÁNH (răng).',
      cf:'刻 (kè – "khắc", có 亥 thay vì 尸")',w:'刷牙 / 刷卡'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi ngủ phải đánh răng, thay đồ trước.',answer:'睡觉以前要先刷牙、脱衣服。',answerPy:'Shuìjiào yǐqián yào xiān shuā yá, tuō yīfu.',
      note:'先……要 diễn tả việc cần làm trước.'},
     {promptLang:'vi',prompt:'Nếu bạn đánh răng cẩn thận thì răng sẽ không đau nữa.',answer:'如果你好好儿刷牙，牙就不会疼了。',answerPy:'Rúguǒ nǐ hǎohāor shuā yá, yá jiù bú huì téng le.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:14,zh:'关系',py:'guānxi',pos:'Danh từ',vn:'quan hệ',em:'🤝',lesson:4,
   explain:['Mối liên hệ, tương tác giữa người với người hoặc sự vật.'],
   usage:'Danh từ; đi cùng động từ 变得: 关系变得更好.',
   collo:['人和人的关系','关系冷冷的','关系变得更好'],
   ex_zh:'很多人都觉得现在人和人的关系冷冷的。',ex_py:'Hěn duō rén dōu juéde xiànzài rén hé rén de guānxi lěnglěng de.',ex_vn:'Nhiều người cảm thấy quan hệ giữa người với người hiện nay lạnh nhạt.',
   exList:[
     {zh:'很多人都觉得现在人和人的关系冷冷的。',py:'Hěn duō rén dōu juéde xiànzài rén hé rén de guānxi lěnglěng de.',vn:'Nhiều người cảm thấy quan hệ giữa người với người hiện nay lạnh nhạt.'},
     {zh:'和别人的关系就会变得更好。',py:'Hé biéren de guānxi jiù huì biàn de gèng hǎo.',vn:'Quan hệ với người khác sẽ trở nên tốt hơn.'},
     {zh:'人和人的关系也不错，遇到问题时，别人都愿意帮助你。',py:'Rén hé rén de guānxi yě búcuò, yùdào wèntí shí, biéren dōu yuànyì bāngzhù nǐ.',vn:'Quan hệ giữa người với người cũng không tệ, khi gặp vấn đề, người khác đều sẵn lòng giúp bạn.'},
   ],
   hanzi:[
     {c:'系',p:'xì',type:'上下结构 · Trên-dưới',st:7,ord:'丿 trên → 糸 dưới (giản thể)',rad:'糸 (mịch – tơ)',mean:'liên hệ, buộc',
      tip:'丿(bàn tay) + 糸(sợi tơ) → dùng tay BUỘC các sợi tơ lại với nhau = LIÊN HỆ, mở rộng nghĩa QUAN HỆ.',
      cf:'系 (jì – "buộc chặt", cùng chữ khác nghĩa")',w:'关系 / 关心'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học cách giúp đỡ lẫn nhau thì quan hệ giữa mọi người sẽ trở nên tốt hơn.',answer:'学会互相帮助，大家的关系就会变得更好。',answerPy:'Xuéhuì hùxiāng bāngzhù, dàjiā de guānxi jiù huì biàn de gèng hǎo.',
      note:'变得更好 diễn tả sự thay đổi tích cực.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn cười nhiều với người khác thì người khác sẽ sẵn lòng giúp bạn.',answer:'只要你多对别人笑笑，别人就会愿意帮助你。',answerPy:'Zhǐyào nǐ duō duì biéren xiàoxiao, biéren jiù huì yuànyì bāngzhù nǐ.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 愿意 đã học ở Bài 13).'},
   ]},

  {n:15,zh:'别人',py:'biérén',pos:'Danh từ',vn:'người khác',em:'👥',lesson:4,
   explain:['Chỉ những người khác, không phải người nói.'],
   usage:'Danh từ, thường làm tân ngữ hoặc định ngữ: 对别人, 别人的.',
   collo:['对别人','别人的关系','跟别人见面'],
   ex_zh:'我们应该多对别人笑笑。',ex_py:'Wǒmen yīnggāi duō duì biéren xiàoxiao.',ex_vn:'Chúng ta nên cười nhiều hơn với người khác.',
   exList:[
     {zh:'忙得没时间跟别人见面。',py:'Máng de méi shíjiān gēn biéren jiànmiàn.',vn:'Bận đến mức không có thời gian gặp người khác.'},
     {zh:'其实，我们应该多对别人笑笑。',py:'Qíshí, wǒmen yīnggāi duō duì biéren xiàoxiao.',vn:'Thực ra, chúng ta nên cười nhiều hơn với người khác.'},
     {zh:'遇到问题时，别人都愿意帮助你。',py:'Yùdào wèntí shí, biéren dōu yuànyì bāngzhù nǐ.',vn:'Khi gặp vấn đề, người khác đều sẵn lòng giúp bạn.'},
   ],
   hanzi:[
     {c:'别',p:'bié',type:'左右结构 · Trái-phải',st:7,ord:'另 trái → 刂 phải',rad:'刂 (đao – dao)',mean:'khác, chia lìa',
      tip:'另(riêng biệt) + 刂(dao, cắt) → CẮT RIÊNG ra thành phần KHÁC; 别(khác)+人(người) = NGƯỜI KHÁC.',
      cf:'到 (dào – "đến", có 至 thay vì 另")',w:'别人 / 别的'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi gặp từ ngữ không hiểu, có thể hỏi người khác thử xem.',answer:'遇到不懂的词语时，可以问问别人。',answerPy:'Yùdào bù dǒng de cíyǔ shí, kěyǐ wènwen biéren.',
      note:'遇到 diễn tả tình cờ gặp phải (ôn lại đã học ở Bài 13).'},
     {promptLang:'vi',prompt:'Nếu bạn bận đến mức không gặp người khác thì quan hệ sẽ lạnh nhạt.',answer:'如果你忙得不跟别人见面，关系就会冷冷的。',answerPy:'Rúguǒ nǐ máng de bù gēn biéren jiànmiàn, guānxi jiù huì lěnglěng de.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:16,zh:'词语',py:'cíyǔ',pos:'Danh từ',vn:'từ ngữ',em:'📖',lesson:4,
   explain:['Từ và cụm từ trong ngôn ngữ.'],
   usage:'Danh từ; đi cùng động từ 用: 用词语.',
   collo:['用词语','这样的词语','写对词语'],
   ex_zh:'如果能多用一些"您好""谢谢"这样的词语。',ex_py:'Rúguǒ néng duō yòng yìxiē "nín hǎo" "xièxie" zhèyàng de cíyǔ.',ex_vn:'Nếu có thể dùng nhiều hơn những từ ngữ như "xin chào", "cảm ơn".',
   exList:[
     {zh:'说话时如果能多用一些"您好""谢谢"这样的词语，和别人的关系就会变得更好。',py:'Shuōhuà shí rúguǒ néng duō yòng yìxiē "nín hǎo" "xièxie" zhèyàng de cíyǔ, hé biéren de guānxi jiù huì biàn de gèng hǎo.',vn:'Khi nói chuyện nếu có thể dùng nhiều hơn những từ ngữ như "xin chào", "cảm ơn", thì quan hệ với người khác sẽ trở nên tốt hơn.'},
     {zh:'如果有人能把这个星期学的词语都写对，老师就送给他一件礼物。',py:'Rúguǒ yǒu rén néng bǎ zhège xīngqī xué de cíyǔ dōu xiěduì, lǎoshī jiù sòng gěi tā yí jiàn lǐwù.',vn:'Nếu có ai viết đúng hết những từ ngữ học trong tuần này, thầy giáo sẽ tặng người đó một món quà.'},
     {zh:'这些词语我都不认识。',py:'Zhèxiē cíyǔ wǒ dōu bú rènshi.',vn:'Những từ ngữ này tôi đều không biết.'},
   ],
   hanzi:[
     {c:'词',p:'cí',type:'左右结构 · Trái-phải',st:7,ord:'讠 trái → 司 phải',rad:'讠 (ngôn – lời nói)',mean:'từ ngữ',
      tip:'讠(lời nói) + 司(quản lý, chi phối) → LỜI NÓI được sắp xếp có ý nghĩa = TỪ NGỮ.',
      cf:'司 (sī – "quản lý", không có bộ 讠")',w:'词语 / 生词'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mấy câu này tôi đều không hiểu được.',answer:'这几个句子我都看不懂。',answerPy:'Zhè jǐ ge jùzi wǒ dōu kàn bu dǒng.',
      note:'都 + phủ định diễn tả toàn bộ đều không.'},
     {promptLang:'vi',prompt:'Nếu bạn học thuộc những từ ngữ này thì tiếng Trung sẽ tiến bộ nhanh.',answer:'如果你记住这些词语，汉语水平就会提高得很快。',answerPy:'Rúguǒ nǐ jìzhù zhèxiē cíyǔ, Hànyǔ shuǐpíng jiù huì tígāo de hěn kuài.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 水平/提高 đã học ở Bài 15).'},
   ]},
];

const wuData = [
  {img:'👞',label:'皮鞋',py:'píxié',letter:'A'},
  {img:'🏙️',label:'城市',py:'chéngshì',letter:'B'},
  {img:'🎩',label:'帽子',py:'màozi',letter:'C'},
  {img:'👃',label:'鼻子',py:'bízi',letter:'D'},
  {img:'🪥',label:'刷牙',py:'shuā yá',letter:'E'},
  {img:'💇',label:'头发',py:'tóufa',letter:'F'},
];

var dialogData = [
  {scene:'在公司 · Trong công ty (nói về ước mơ đi du lịch)',
   preQuiz:[
     {q:'小丽muốn gì?',opts:['đi các thành phố khác xem thử','chuyển nhà','đổi công việc'],ans:0},
     {q:'周明lúc trẻ tại sao không đi?',opts:['không có tiền','không có thời gian','không thích'],ans:0},
     {q:'周明bây giờ tại sao không đi?',opts:['không có thời gian, mệt quá','không có tiền','không thích'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我不喜欢一直住在同一个城市，想去其他城市看一看。',py:'Wǒ bù xǐhuan yìzhí zhù zài tóng yí ge chéngshì, xiǎng qù qítā chéngshì kàn yi kàn.',vn:'Tôi không thích cứ sống mãi ở một thành phố, muốn đi các thành phố khác xem thử.'},
     {sp:1,zh:'我年轻的时候也这么想，但是那时候没有钱，如果有钱，就去了。',py:'Wǒ niánqīng de shíhou yě zhème xiǎng, dànshì nà shíhou méiyǒu qián, rúguǒ yǒu qián, jiù qù le.',vn:'Lúc trẻ tôi cũng nghĩ vậy, nhưng lúc đó không có tiền, nếu có tiền thì đã đi rồi.'},
     {sp:0,zh:'那您现在为什么不去？',py:'Nà nín xiànzài wèi shénme bú qù?',vn:'Vậy bây giờ sao chú không đi?'},
     {sp:1,zh:'现在钱不是问题了，主要是没有时间。',py:'Xiànzài qián bú shì wèntí le, zhǔyào shì méiyǒu shíjiān.',vn:'Bây giờ tiền không còn là vấn đề nữa, chủ yếu là không có thời gian.'},
     {sp:0,zh:'我认为现在您有时间也不会出去玩儿。',py:'Wǒ rènwéi xiànzài nín yǒu shíjiān yě bú huì chūqu wánr.',vn:'Cháu nghĩ bây giờ chú có thời gian cũng sẽ không đi chơi đâu.'},
     {sp:1,zh:'你说得对，我现在累得下了班就想睡觉。',py:'Nǐ shuō de duì, wǒ xiànzài lèi de xiàle bān jiù xiǎng shuìjiào.',vn:'Cháu nói đúng đấy, bây giờ chú mệt đến mức hết giờ làm là chỉ muốn ngủ thôi.'},
   ]},
  {scene:'在同事家 · Tại nhà đồng nghiệp',
   preQuiz:[
     {q:'小丽tặng quà gì?',opts:['giày da và mũ nhỏ','đồ chơi','sách'],ans:0},
     {q:'con gái đồng nghiệp nặng bao nhiêu?',opts:['25公斤','20公斤','30公斤'],ans:0},
     {q:'con gái giống ai?',opts:['giống bố','giống mẹ','không giống ai'],ans:0},
   ],
   lines:[
     {sp:0,zh:'谢谢你们来看我女儿。你送的小皮鞋和小帽子真漂亮！',py:'Xièxie nǐmen lái kàn wǒ nǚ\'ér. Nǐ sòng de xiǎo píxié hé xiǎo màozi zhēn piàoliang!',vn:'Cảm ơn các bạn đến thăm con gái mình. Đôi giày da và cái mũ bạn tặng đẹp thật!'},
     {sp:1,zh:'别客气，你女儿长得白白的、胖胖的，真可爱！现在多高了？',py:'Bié kèqi, nǐ nǚ\'ér zhǎng de báibái de, pàngpàng de, zhēn kě\'ài! Xiànzài duō gāo le?',vn:'Đừng khách sáo, con gái bạn trắng trắng, mũm mĩm, đáng yêu thật! Bây giờ cao bao nhiêu rồi?'},
     {sp:0,zh:'快1米了，25公斤。',py:'Kuài yì mǐ le, èrshíwǔ gōngjīn.',vn:'Sắp được 1 mét rồi, nặng 25 cân.'},
     {sp:1,zh:'你看她鼻子小小的，头发黑黑的，长得像谁？',py:'Nǐ kàn tā bízi xiǎoxiǎo de, tóufa hēihēi de, zhǎng de xiàng shéi?',vn:'Bạn xem bé mũi nhỏ nhỏ, tóc đen đen, giống ai vậy?'},
     {sp:0,zh:'像她爸爸，刚出生时她爸爸高兴得一个晚上都没睡着。',py:'Xiàng tā bàba, gāng chūshēng shí tā bàba gāoxìng de yí ge wǎnshang dōu méi shuì zháo.',vn:'Giống bố nó, lúc mới sinh bố nó vui đến mức cả đêm không ngủ được.'},
   ]},
  {scene:'在公司 · Trong công ty (nói về đau răng)',
   preQuiz:[
     {q:'小刚哪里不舒服？',opts:['牙疼','头疼','肚子疼'],ans:0},
     {q:'小刚检查了几次？',opts:['好几次了','一次','没检查过'],ans:0},
     {q:'医生每次都告诉小刚做什么？',opts:['回家好好儿刷牙','吃药','多休息'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我的牙还是很疼。',py:'Wǒ de yá háishi hěn téng.',vn:'Răng tôi vẫn đau lắm.'},
     {sp:1,zh:'如果不舒服，就去医院检查一下吧。',py:'Rúguǒ bù shūfu, jiù qù yīyuàn jiǎnchá yíxià ba.',vn:'Nếu khó chịu thì đi bệnh viện khám thử đi.'},
     {sp:0,zh:'检查好几次了，但是没什么用。',py:'Jiǎnchá hǎo jǐ cì le, dànshì méi shénme yòng.',vn:'Khám mấy lần rồi, nhưng chẳng có tác dụng gì.'},
     {sp:1,zh:'大夫怎么说的？',py:'Dàifu zěnme shuō de?',vn:'Bác sĩ nói sao?'},
     {sp:0,zh:'每次医生都告诉我，回家好好儿刷牙。',py:'Měi cì yīshēng dōu gàosu wǒ, huí jiā hǎohāor shuā yá.',vn:'Lần nào bác sĩ cũng bảo tôi, về nhà đánh răng cho kỹ.'},
   ]},
  {scene:'độc bạch · Tự thuật (về mối quan hệ con người)',
   preQuiz:[
     {q:'nhiều người cảm thấy quan hệ giữa người với người hiện nay thế nào?',opts:['lạnh nhạt','rất tốt','không thay đổi'],ans:0},
     {q:'nguyên nhân có thể là gì?',opts:['công việc quá bận','thiếu tiền','ở xa nhau'],ans:0},
     {q:'làm sao để quan hệ tốt hơn?',opts:['cười nhiều, dùng từ ngữ lịch sự','tặng quà nhiều','gọi điện thường xuyên'],ans:0},
   ],
   lines:[
     {sp:0,zh:'很多人都觉得现在人和人的关系冷冷的，这可能是因为工作太忙，忙得没时间跟别人见面，累得不愿意和别人多说话。',py:'Hěn duō rén dōu juéde xiànzài rén hé rén de guānxi lěnglěng de, zhè kěnéng shì yīnwèi gōngzuò tài máng, máng de méi shíjiān gēn biéren jiànmiàn, lèi de bú yuànyì hé biéren duō shuōhuà.',vn:'Nhiều người cảm thấy quan hệ giữa người với người hiện nay lạnh nhạt, điều này có thể vì công việc quá bận, bận đến mức không có thời gian gặp người khác, mệt đến mức không muốn nói chuyện nhiều với người khác.'},
     {sp:0,zh:'其实，我们应该多对别人笑笑，说话时如果能多用一些"您好""谢谢"这样的词语，和别人的关系就会变得更好。',py:'Qíshí, wǒmen yīnggāi duō duì biéren xiàoxiao, shuōhuà shí rúguǒ néng duō yòng yìxiē "nín hǎo" "xièxie" zhèyàng de cíyǔ, hé biéren de guānxi jiù huì biàn de gèng hǎo.',vn:'Thực ra, chúng ta nên cười nhiều hơn với người khác, khi nói chuyện nếu có thể dùng nhiều hơn những từ ngữ như "xin chào", "cảm ơn", thì quan hệ với người khác sẽ trở nên tốt hơn.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'住',right:'城市'},
  {left:'送',right:'皮鞋和帽子'},
  {left:'长得',right:'可爱'},
  {left:'检查',right:'牙'},
  {left:'好好儿',right:'刷牙'},
  {left:'别人的',right:'关系'},
  {left:'用',right:'词语'},
  {left:'如果你太累了，',right:'就休息一会儿。'},
  {left:'虽然现在钱不是问题了，',right:'但是主要是没有时间。'},
  {left:'如果能多用礼貌词语，',right:'关系就会变得更好。'},
  {left:'只要你多对别人笑笑，',right:'别人就会愿意帮助你。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我不喜欢一直住在同一个',blank:'城市',post:'。',hint:'(thành phố)',ans:'城市'},
  {pre:'',blank:'如果',post:'有钱，就去了。',hint:'(nếu)',ans:'如果'},
  {pre:'虽然大家都说这个办法很好，但是我',blank:'认为',post:'还是有点儿问题。',hint:'(cho rằng)',ans:'认为'},
  {pre:'你送的小',blank:'皮鞋',post:'和小帽子真漂亮！',hint:'(giày da)',ans:'皮鞋'},
  {pre:'他生日的时候，我送了他一顶新',blank:'帽子',post:'。',hint:'(mũ, nón)',ans:'帽子'},
  {pre:'乐乐，你',blank:'长',post:'高了。',hint:'(trưởng thành, lớn lên)',ans:'长'},
  {pre:'你女儿长得白白的、胖胖的，真',blank:'可爱',post:'！',hint:'(đáng yêu)',ans:'可爱'},
  {pre:'这条河大概有五十',blank:'米',post:'宽。',hint:'(mét)',ans:'米'},
  {pre:'这个箱子太重了，差不多有三十',blank:'公斤',post:'。',hint:'(kilôgram)',ans:'公斤'},
  {pre:'她',blank:'鼻子',post:'小小的，头发黑黑的。',hint:'(mũi)',ans:'鼻子'},
  {pre:'奶奶年纪大了，',blank:'头发',post:'已经白白的了。',hint:'(tóc)',ans:'头发'},
  {pre:'虽然只是头疼，但奶奶还是决定去医院',blank:'检查',post:'一下。',hint:'(kiểm tra, khám)',ans:'检查'},
  {pre:'回家好好儿',blank:'刷牙',post:'。',hint:'(chải răng)',ans:'刷牙'},
  {pre:'虽然吵过架，但是他们的',blank:'关系',post:'还是很好。',hint:'(quan hệ)',ans:'关系'},
  {pre:'我们应该多对',blank:'别人',post:'笑笑。',hint:'(người khác)',ans:'别人'},
  {pre:'多用一些"您好""谢谢"这样的',blank:'词语',post:'。',hint:'(từ ngữ)',ans:'词语'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['虽然','这个','城市','很','方便','，','但是','我','还是','想','去','别的','地方','看看','。'],ans:'虽然这个城市很方便，但是我还是想去别的地方看看。',audio:'虽然这个城市很方便，但是我还是想去别的地方看看。'},
  {words:['如果','你','还是','不','舒服','，','就','去','药店','买','点儿','药','吃','吧','。'],ans:'如果你还是不舒服，就去药店买点儿药吃吧。',audio:'如果你还是不舒服，就去药店买点儿药吃吧。'},
  {words:['那个','小','男孩','长','得','瘦瘦','的','、','高高','的','，','很','帅气','。'],ans:'那个小男孩长得瘦瘦的、高高的，很帅气。',audio:'那个小男孩长得瘦瘦的、高高的，很帅气。'},
  {words:['我','现在','累','得','下','了','班','就','想','睡觉','。'],ans:'我现在累得下了班就想睡觉。',audio:'我现在累得下了班就想睡觉。'},
  {words:['如果','你','想','学好','汉语','，','就','应该','每天','多','说','多','练','。'],ans:'如果你想学好汉语，就应该每天多说多练。',audio:'如果你想学好汉语，就应该每天多说多练。'},
  {words:['虽然','工作','很','忙','，','但是','他','每天','都','回家','吃','晚饭','。'],ans:'虽然工作很忙，但是他每天都回家吃晚饭。',audio:'虽然工作很忙，但是他每天都回家吃晚饭。'},
  {words:['如果','能','多','用','一些','礼貌','的','词语','，','关系','就','会','变','得','更好','。'],ans:'如果能多用一些礼貌的词语，关系就会变得更好。',audio:'如果能多用一些礼貌的词语，关系就会变得更好。'},
  {words:['有的','人','觉得','住','在','大','城市','很','方便','，','有的','人','觉得','很','累','。'],ans:'有的人觉得住在大城市很方便，有的人觉得很累。',audio:'有的人觉得住在大城市很方便，有的人觉得很累。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'如果你喜欢，就我给你买。',
   opts:['如果你喜欢，我就给你买。','如果你喜欢，就我给你买。','我如果你喜欢，就给你买。','如果你喜欢我，就给你买。'],ans:0,
   exp:'Chủ ngữ của mệnh đề thứ hai (我) phải đặt TRƯỚC 就, không đặt sau.'},
  {wrong:'孩子们不想回家得玩儿。',
   opts:['孩子们玩儿得不想回家。','孩子们不想回家得玩儿。','孩子们得玩儿不想回家。','孩子们玩儿不想得回家。'],ans:0,
   exp:'Cấu trúc bổ ngữ trạng thái: động từ(玩儿)+得+cụm động từ(不想回家), không đảo ngược.'},
  {wrong:'弟弟跳了起来高兴得。',
   opts:['弟弟高兴得跳了起来。','弟弟跳了起来高兴得。','弟弟得高兴跳了起来。','弟弟高兴跳了得起来。'],ans:0,
   exp:'得 phải đứng NGAY SAU tính từ/động từ (高兴), rồi mới đến cụm động từ mô tả trạng thái.'},
  {wrong:'他鼻子小的小，长得像谁？',
   opts:['他鼻子小小的，长得像谁？','他鼻子小的小，长得像谁？','他鼻子的小小，长得像谁？','他鼻子小小，长得像谁的？'],ans:0,
   exp:'Tính từ đơn âm tiết lặp lại phải viết liền thành "AA的" (小小的), không tách rời.'},
  {wrong:'你女儿长得白、白的，胖胖的。',
   opts:['那个房间静静的，很舒服。','你女儿长得白、白的，胖胖的。','你女儿长得白白、的胖胖的。','你女儿白白的长得、胖胖的。'],ans:0,
   exp:'"AA的" viết liền không tách bằng dấu phẩy giữa hai âm tiết lặp.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'周明年轻的时候为什么没去其他城市？现在为什么也不去？',
     q_vn:'Vì sao lúc trẻ Chu Minh không đi các thành phố khác? Bây giờ vì sao cũng không đi?',
     hint:'那时候没钱，现在没时间，累得下了班就想睡觉',
     sample:'周明年轻的时候没有钱，所以没去。现在钱不是问题了，但是他累得下了班就想睡觉，所以也不去。',
     sample_vn:'Lúc trẻ Chu Minh không có tiền, nên không đi. Bây giờ tiền không còn là vấn đề nữa, nhưng anh ấy mệt đến mức hết giờ làm là chỉ muốn ngủ, nên cũng không đi.',
     note:'得 + cụm động từ diễn tả mức độ trạng thái (điểm ngữ pháp trọng tâm bài này).'},
    {q_zh:'同事的女儿长得像谁？为什么？',
     q_vn:'Con gái đồng nghiệp giống ai? Vì sao?',
     hint:'像爸爸，出生时爸爸高兴得一晚上没睡',
     sample:'同事的女儿长得像她爸爸，因为她出生的时候，爸爸高兴得一个晚上都没睡着。',
     sample_vn:'Con gái đồng nghiệp giống bố, vì lúc con mới sinh, bố vui đến mức cả đêm không ngủ được.',
     note:'高兴得 + cụm động từ diễn tả mức độ (ôn lại 关系 sẽ học ngay bên dưới trong bài này).'},
    {q_zh:'小刚的牙一直疼，医生每次都告诉他什么？',
     q_vn:'Răng Tiểu Cương cứ đau, bác sĩ lần nào cũng bảo cậu ấy gì?',
     hint:'回家好好儿刷牙',
     sample:'小刚的牙检查好几次了，但是没什么用，医生每次都告诉他，回家好好儿刷牙。',
     sample_vn:'Răng Tiểu Cương khám mấy lần rồi, nhưng chẳng có tác dụng gì, bác sĩ lần nào cũng bảo cậu ấy về nhà đánh răng cho kỹ.',
     note:'好几次了 diễn tả số lần nhiều.'},
    {q_zh:'怎么样才能让人和人的关系变得更好？',
     q_vn:'Làm thế nào để quan hệ giữa người với người trở nên tốt hơn?',
     hint:'多对别人笑笑，多用"您好""谢谢"这样的词语',
     sample:'如果我们能多对别人笑笑，说话时多用一些"您好""谢谢"这样的词语，和别人的关系就会变得更好。',
     sample_vn:'Nếu chúng ta có thể cười nhiều hơn với người khác, khi nói chuyện dùng nhiều hơn những từ ngữ như "xin chào", "cảm ơn", thì quan hệ với người khác sẽ trở nên tốt hơn.',
     note:'如果……就…… diễn tả giả thiết — kết quả (điểm ngữ pháp trọng tâm bài này).'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Nếu có cơ hội, tôi muốn đi thử vài thành phố khác.', zh:'如果有机会，我想去试试别的城市。', py:'Rúguǒ yǒu jīhuì, wǒ xiǎng qù shìshi bié de chéngshì.'},
  {vi:'Nếu trời mưa thì chúng ta ở nhà xem phim đi.', zh:'如果外边下雨，我们就在家看电影吧。', py:'Rúguǒ wàibian xià yǔ, wǒmen jiù zài jiā kàn diànyǐng ba.'},
  {vi:'Con trai bạn trông đen đen, cao cao, rất khỏe mạnh.', zh:'你儿子长得黑黑的、高高的，很健康。', py:'Nǐ érzi zhǎng de hēihēi de, gāogāo de, hěn jiànkāng.'},
  {vi:'Anh ấy mệt đến mức về nhà là ngủ luôn, cơm cũng không ăn.', zh:'他累得一回家就睡着了，饭也没吃。', py:'Tā lèi de yì huí jiā jiù shuì zháo le, fàn yě méi chī.'},
  {vi:'Mỗi lần bị cảm, mẹ đều bảo tôi uống nhiều nước nóng, nghỉ ngơi nhiều.', zh:'每次感冒，妈妈都让我多喝热水、多休息。', py:'Měi cì gǎnmào, māma dōu ràng wǒ duō hē rè shuǐ, duō xiūxi.'},
  {vi:'Nhiều bạn trẻ bây giờ thích vừa làm việc vừa đi du lịch.', zh:'现在很多年轻人喜欢一边工作一边旅游。', py:'Xiànzài hěn duō niánqīng rén xǐhuan yìbiān gōngzuò yìbiān lǚyóu.'},
  {vi:'Chúng ta nên thường xuyên dùng những từ ngữ lịch sự với người khác.', zh:'我们应该常常对别人说一些礼貌的词语。', py:'Wǒmen yīnggāi chángcháng duì biéren shuō yìxiē lǐmào de cíyǔ.'},
  {vi:'Nếu bạn thường xuyên liên lạc với bạn bè thì quan hệ sẽ ngày càng tốt hơn.', zh:'如果你常常跟朋友联系，关系就会越来越好。', py:'Rúguǒ nǐ chángcháng gēn péngyou liánxì, guānxi jiù huì yuèláiyuè hǎo.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Nếu con đường này không thông thì chúng ta đi đường khác đi.', zh:'如果这条路不通，我们就走别的路吧。', py:'Rúguǒ zhè tiáo lù bù tōng, wǒmen jiù zǒu bié de lù ba.'},
  {vi:'Tuy trời tối rồi nhưng cô ấy vẫn muốn ra ngoài đi dạo.', zh:'虽然天黑了，但是她还想出去散散步。', py:'Suīrán tiān hēi le, dànshì tā hái xiǎng chūqu sànsan bù.'},
  {vi:'Chỉ cần con chăm chỉ học tập thì thành tích sẽ ngày càng tốt hơn.', zh:'只要你努力学习，成绩就会越来越好。', py:'Zhǐyào nǐ nǔlì xuéxí, chéngjì jiù huì yuèláiyuè hǎo.'},
  {vi:'Anh ấy làm việc đến mức quên cả ăn cơm.', zh:'他工作得忘了吃饭。', py:'Tā gōngzuò de wàngle chī fàn.'},
  {vi:'Bà nội vui đến mức cười không ngừng.', zh:'奶奶高兴得笑个不停。', py:'Nǎinai gāoxìng de xiào ge bù tíng.'},
  {vi:'Hoa bạn tặng đỏ đỏ, tôi rất thích.', zh:'你送的花红红的，我很喜欢。', py:'Nǐ sòng de huā hónghóng de, wǒ hěn xǐhuan.'},
  {vi:'Mấy ngọn cỏ này xanh xanh, đẹp thật.', zh:'这些草绿绿的，真漂亮。', py:'Zhèxiē cǎo lǜlǜ de, zhēn piàoliang.'},
  {vi:'Cô ấy mắt to to, giống mẹ nhất.', zh:'她眼睛大大的，最像妈妈。', py:'Tā yǎnjing dàdà de, zuì xiàng māma.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 16)
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-16/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女', pre:'你好，', blank:'你有什么问题？哪儿不舒服', post:'？',
       py:'Nǐ hǎo, nǐ yǒu shénme wèntí? Nǎr bù shūfu?', vn:'Chào bạn, bạn có vấn đề gì vậy? Chỗ nào khó chịu?'},
      {speaker:'男', pre:'医生，', blank:'我最近一直头疼，疼得晚上睡不着觉。有什么药吗', post:'？',
       py:'Yīshēng, wǒ zuìjìn yìzhí tóuténg, téng de wǎnshang shuì bu zháo jiào. Yǒu shénme yào ma?', vn:'Bác sĩ ơi, gần đây tôi cứ đau đầu, đau đến mức tối không ngủ được. Có thuốc gì không ạ?'},
    ]},
    {num:2, lines:[
      {speaker:'女', pre:'常医生，', blank:'我的牙不疼了，应该没什么问题了吧', post:'？',
       py:'Cháng yīshēng, wǒ de yá bù téng le, yīnggāi méi shénme wèntí le ba?', vn:'Bác sĩ Thường ơi, răng tôi không đau nữa rồi, chắc không có vấn đề gì nữa nhỉ?'},
      {speaker:'男', pre:'', blank:'只听你说不行，我需要检查一下才清楚', post:'。',
       py:'Zhǐ tīng nǐ shuō bù xíng, wǒ xūyào jiǎnchá yíxià cái qīngchu.', vn:'Chỉ nghe bạn nói không được đâu, tôi cần khám thử mới rõ được.'},
    ]},
    {num:3, lines:[
      {speaker:'女', pre:'你看！那边真漂亮！', blank:'有山有水，有树有花，还有几个小房子，美得像画一样', post:'。',
       py:'Nǐ kàn! Nàbian zhēn piàoliang! Yǒu shān yǒu shuǐ, yǒu shù yǒu huā, hái yǒu jǐ ge xiǎo fángzi, měi de xiàng huà yíyàng.', vn:'Bạn xem! Chỗ đó đẹp thật! Có núi có nước, có cây có hoa, còn có mấy căn nhà nhỏ, đẹp như tranh vậy.'},
      {speaker:'男', pre:'', blank:'那还等什么？快过去看看吧', post:'。',
       py:'Nà hái děng shénme? Kuài guòqu kànkan ba.', vn:'Vậy còn chờ gì nữa? Mau qua xem thử đi.'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'', blank:'你的两个女儿长得真像！这个头发长长的是姐姐吧', post:'？',
       py:'Nǐ de liǎng ge nǚ\'ér zhǎng de zhēn xiàng! Zhège tóufa chángcháng de shì jiějie ba?', vn:'Hai đứa con gái bạn giống nhau thật! Đứa tóc dài dài này là chị gái phải không?'},
      {speaker:'女', pre:'', blank:'这是我二女儿，她喜欢长头发。大女儿不喜欢', post:'。',
       py:'Zhè shì wǒ èr nǚ\'ér, tā xǐhuan cháng tóufa. Dà nǚ\'ér bù xǐhuan.', vn:'Đây là con gái thứ hai của tôi, con bé thích để tóc dài. Con gái lớn thì không thích.'},
    ]},
    {num:5, lines:[
      {speaker:'男', pre:'', blank:'你家小狗小小的，长得真可爱', post:'！',
       py:'Nǐ jiā xiǎogǒu xiǎoxiǎo de, zhǎng de zhēn kě\'ài!', vn:'Con chó nhỏ nhà bạn nho nhỏ, trông đáng yêu thật!'},
      {speaker:'女', pre:'还很聪明呢。', blank:'它跟我女儿的关系特别好，每天都帮她把小皮鞋放好', post:'。',
       py:'Hái hěn cōngming ne. Tā gēn wǒ nǚ\'ér de guānxi tèbié hǎo, měi tiān dōu bāng tā bǎ xiǎo píxié fànghǎo.', vn:'Còn thông minh nữa. Nó với con gái tôi quan hệ rất tốt, ngày nào cũng giúp con bé xếp gọn đôi giày da nhỏ.'},
    ]},
    {num:6, lines:[
      {pre:'常月是我上大学时的好朋友。那时候她很瘦，瘦得只有40公斤。', blank:'听说她现在已经是三个孩子的妈妈了，不知道长胖一点儿没有', post:'。',
       py:'Cháng Yuè shì wǒ shàng dàxué shí de hǎo péngyou. Nà shíhou tā hěn shòu, shòu de zhǐyǒu sìshí gōngjīn. Tīngshuō tā xiànzài yǐjīng shì sān ge háizi de māma le, bù zhīdào zhǎngpàng yìdiǎnr méiyǒu.', vn:'Thường Nguyệt là bạn thân thời đại học của tôi. Lúc đó cô ấy rất gầy, gầy đến mức chỉ có 40 cân. Nghe nói bây giờ cô ấy đã là mẹ của ba đứa con rồi, không biết có mập lên chút nào không.'},
    ]},
    {num:7, lines:[
      {pre:'今天的会议就到这儿吧，大家对自己的工作都清楚了吗？', blank:'如果有什么不明白的地方，就去秘书办公室问小丽', post:'。',
       py:'Jīntiān de huìyì jiù dào zhèr ba, dàjiā duì zìjǐ de gōngzuò dōu qīngchu le ma? Rúguǒ yǒu shénme bù míngbai de dìfang, jiù qù mìshū bàngōngshì wèn Xiǎolì.', vn:'Cuộc họp hôm nay đến đây thôi, mọi người đều rõ công việc của mình chưa? Nếu có chỗ nào không hiểu, thì đến văn phòng thư ký hỏi Tiểu Lệ.'},
    ]},
    {num:8, lines:[
      {pre:'我女儿每天都说"从明天开始我每天跑五千米"，我和妻子很早就给她买好了运动服、运动鞋。', blank:'直到今天，鞋和衣服还都是新的', post:'。',
       py:'Wǒ nǚ\'ér měi tiān dōu shuō "cóng míngtiān kāishǐ wǒ měi tiān pǎo wǔqiān mǐ", wǒ hé qīzi hěn zǎo jiù gěi tā mǎihǎole yùndòngfú, yùndòngxié. Zhídào jīntiān, xié hé yīfu hái dōu shì xīn de.', vn:'Con gái tôi ngày nào cũng nói "từ mai con sẽ chạy năm nghìn mét mỗi ngày", vợ chồng tôi mua sẵn đồ thể thao, giày thể thao cho con từ sớm. Đến tận hôm nay, giày và quần áo vẫn còn mới nguyên.'},
    ]},
    {num:9, lines:[
      {pre:'赛前，我跟儿子说："如果你拿了第一，你要什么我就给你买什么。"', blank:'没想到儿子真的拿了第一，更没想到他的要求是让我在家休息一天', post:'。',
       py:'Sài qián, wǒ gēn érzi shuō: "Rúguǒ nǐ nále dì yī, nǐ yào shénme wǒ jiù gěi nǐ mǎi shénme." Méi xiǎngdào érzi zhēn de nále dì yī, gèng méi xiǎngdào tā de yāoqiú shì ràng wǒ zài jiā xiūxi yì tiān.', vn:'Trước cuộc thi, tôi nói với con trai: "Nếu con giành giải nhất, con muốn gì bố mua cái đó cho." Không ngờ con trai thật sự giành giải nhất, càng không ngờ yêu cầu của con là để bố nghỉ ở nhà một ngày.'},
    ]},
    {num:10, lines:[
      {pre:'每个星期五，我们班中文老师都带着同学们复习。', blank:'如果有人能把这个星期学的词语都写对，老师就送给他一件礼物', post:'。',
       py:'Měi ge xīngqīwǔ, wǒmen bān Zhōngwén lǎoshī dōu dàizhe tóngxuémen fùxí. Rúguǒ yǒu rén néng bǎ zhège xīngqī xué de cíyǔ dōu xiěduì, lǎoshī jiù sòng gěi tā yí jiàn lǐwù.', vn:'Thứ Sáu hàng tuần, thầy giáo tiếng Trung lớp tôi đều dẫn các bạn ôn tập. Nếu ai viết đúng hết những từ ngữ học trong tuần này, thầy sẽ tặng người đó một món quà.'},
    ]},
  ],
  mc: [
    {num:11, options:['眼睛红','打算去医院','买了一个红眼镜'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'最近你的眼睛一直红红的，我带你去医院检查一下吧', post:'。', py:'Zuìjìn nǐ de yǎnjing yìzhí hónghóng de, wǒ dài nǐ qù yīyuàn jiǎnchá yíxià ba.', vn:'Gần đây mắt bạn cứ đỏ đỏ, tôi đưa bạn đi bệnh viện khám thử đi.'},
       {speaker:'女', pre:'', blank:'我去过了，医生说没什么事，不用吃药，让我多休息', post:'。', py:'Wǒ qùguo le, yīshēng shuō méi shénme shì, búyòng chī yào, ràng wǒ duō xiūxi.', vn:'Tôi đi rồi, bác sĩ nói không sao, không cần uống thuốc, bảo tôi nghỉ ngơi nhiều.'},
     ],
     explain:'男：最近你的眼睛一直红红的，我带你去医院检查一下吧。女：我去过了，医生说没什么事，不用吃药，让我多休息。问：关于女的，可以知道什么？ → 眼睛红。'},
    {num:12, options:['明天天气好','太阳能从西边出来','认为男的不可能去跑步'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'我打算从明天开始，每天去运动场跑两千米', post:'。', py:'Wǒ dǎsuàn cóng míngtiān kāishǐ, měi tiān qù yùndòngchǎng pǎo liǎng qiān mǐ.', vn:'Tôi định từ mai bắt đầu, mỗi ngày ra sân vận động chạy hai nghìn mét.'},
       {speaker:'女', pre:'', blank:'真的吗？如果你能这么做，太阳就能从西边出来', post:'。', py:'Zhēn de ma? Rúguǒ nǐ néng zhème zuò, tàiyáng jiù néng cóng xībian chūlai.', vn:'Thật à? Nếu bạn làm được vậy thì mặt trời sẽ mọc từ hướng tây mất.'},
     ],
     explain:'男：我打算从明天开始，每天去运动场跑两千米。女：真的吗？如果你能这么做，太阳就能从西边出来。问：女的是什么意思？ → 认为男的不可能去跑步。'},
    {num:13, options:['女儿','妈妈','奶奶'], ans:2,
     lines:[
       {speaker:'女', pre:'乐乐，快让奶奶看看，你长高了，也长胖了。', blank:'这双小皮鞋真好看，谁给你买的', post:'？', py:'Lèlè, kuài ràng nǎinai kànkan, nǐ zhǎnggāo le, yě zhǎngpàng le. Zhè shuāng xiǎo píxié zhēn hǎokàn, shéi gěi nǐ mǎi de?', vn:'Lạc Lạc, mau để bà xem, con cao lên rồi, cũng mập lên rồi. Đôi giày da nhỏ này đẹp thật, ai mua cho con vậy?'},
       {speaker:'男', pre:'', blank:'是妈妈，她说如果我这次考试还拿第一，就再给我买一双', post:'。', py:'Shì māma, tā shuō rúguǒ wǒ zhè cì kǎoshì hái ná dì yī, jiù zài gěi wǒ mǎi yì shuāng.', vn:'Là mẹ mua đấy, mẹ nói nếu lần thi này con vẫn giành giải nhất thì mẹ sẽ mua thêm cho con một đôi nữa.'},
     ],
     explain:'女：乐乐，快让奶奶看看，你长高了，也长胖了。这双小皮鞋真好看，谁给你买的？男：是妈妈，她说如果我这次考试还拿第一，就再给我买一双。问：女的是男的的什么人？ → 奶奶。'},
    {num:14, options:['中午吃过药了','现在要去医院','现在能吃甜的'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'我觉得中午吃的药没什么用，牙还是很疼，不能吃甜的', post:'。', py:'Wǒ juéde zhōngwǔ chī de yào méi shénme yòng, yá háishi hěn téng, bù néng chī tián de.', vn:'Tôi thấy thuốc uống buổi trưa chẳng có tác dụng gì, răng vẫn đau lắm, không ăn được đồ ngọt.'},
       {speaker:'女', pre:'', blank:'等一晚上，如果明天还不好，就带你去医院检查一下，看看医生怎么说', post:'。', py:'Děng yì wǎnshang, rúguǒ míngtiān hái bù hǎo, jiù dài nǐ qù yīyuàn jiǎnchá yíxià, kànkan yīshēng zěnme shuō.', vn:'Đợi qua đêm nay, nếu mai vẫn không đỡ thì đưa bạn đi bệnh viện khám, xem bác sĩ nói sao.'},
     ],
     explain:'男：我觉得中午吃的药没什么用，牙还是很疼，不能吃甜的。女：等一晚上，如果明天还不好，就带你去医院检查一下，看看医生怎么说。问：关于男的，可以知道什么？ → 中午吃过药了。'},
    {num:15, options:['老高','高山','高静'], ans:2,
     lines:[
       {speaker:'女', pre:'', blank:'老高，你说我们给孩子起什么名字好', post:'？', py:'Lǎo Gāo, nǐ shuō wǒmen gěi háizi qǐ shénme míngzi hǎo?', vn:'Lão Cao ơi, anh nói xem đặt tên gì cho con mình đây?'},
       {speaker:'男', pre:'', blank:'如果是男孩儿，就叫高山，如果是女孩儿，就叫高静，怎么样', post:'？', py:'Rúguǒ shì nánháir, jiù jiào Gāo Shān, rúguǒ shì nǚháir, jiù jiào Gāo Jìng, zěnme yàng?', vn:'Nếu là con trai thì đặt là Cao Sơn, nếu là con gái thì đặt là Cao Tĩnh, thế nào?'},
     ],
     explain:'女：老高，你说我们给孩子起什么名字好？男：如果是男孩儿，就叫高山，如果是女孩儿，就叫高静，怎么样？问：男的打算给女儿起什么名字？ → 高静。'},
    {num:16, options:['一直工作','坐错车了','坐过站了'], ans:2,
     lines:[
       {speaker:'女', pre:'', blank:'你今天回来得有点儿晚啊', post:'。', py:'Nǐ jīntiān huílai de yǒudiǎnr wǎn a.', vn:'Hôm nay bạn về hơi muộn nhỉ.'},
       {speaker:'男', pre:'', blank:'今天不知道怎么了，特别累，回家的时候累得我在公共汽车上就睡着了', post:'。', py:'Jīntiān bù zhīdào zěnme le, tèbié lèi, huí jiā de shíhou lèi de wǒ zài gōnggòng qìchē shang jiù shuì zháo le.', vn:'Hôm nay không biết sao nữa, mệt quá, lúc về nhà mệt đến mức tôi ngủ luôn trên xe buýt.'},
       {speaker:'女', pre:'', blank:'我有时候也在车上睡一会儿', post:'。', py:'Wǒ yǒushíhou yě zài chē shang shuì yíhuìr.', vn:'Tôi thỉnh thoảng cũng ngủ một lát trên xe.'},
       {speaker:'男', pre:'', blank:'但是我坐过站了，只好下了车再往回坐', post:'。', py:'Dànshì wǒ zuò guò zhàn le, zhǐhǎo xiàle chē zài wǎng huí zuò.', vn:'Nhưng tôi ngồi quá trạm rồi, đành phải xuống xe rồi ngồi ngược lại.'},
     ],
     explain:'女：你今天回来得有点儿晚啊。男：今天不知道怎么了，特别累，回家的时候累得我在公共汽车上就睡着了。女：我有时候也在车上睡一会儿。男：但是我坐过站了，只好下了车再往回坐。问：男的为什么回来晚了？ → 坐过站了。'},
    {num:17, options:['不认识男的','变瘦了','没想到男的这么瘦'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'周新，好久不见！你还是那么年轻、漂亮', post:'。', py:'Zhōu Xīn, hǎojiǔ bú jiàn! Nǐ háishi nàme niánqīng, piàoliang.', vn:'Chu Tân, lâu rồi không gặp! Bạn vẫn trẻ và xinh đẹp như vậy.'},
       {speaker:'女', pre:'', blank:'对不起，请问您是——', post:'？', py:'Duìbuqǐ, qǐngwèn nín shì——?', vn:'Xin lỗi, xin hỏi anh là——?'},
       {speaker:'男', pre:'', blank:'我是常亮啊，你不认识我了', post:'？', py:'Wǒ shì Cháng Liàng a, nǐ bú rènshi wǒ le?', vn:'Tôi là Thường Lượng đây, bạn không nhận ra tôi nữa à?'},
       {speaker:'女', pre:'', blank:'常亮？你现在怎么变得这么瘦？瘦得我都不认识你了', post:'。', py:'Cháng Liàng? Nǐ xiànzài zěnme biàn de zhème shòu? Shòu de wǒ dōu bú rènshi nǐ le.', vn:'Thường Lượng? Sao bạn bây giờ gầy thế? Gầy đến mức tôi không nhận ra bạn nữa.'},
     ],
     explain:'男：周新，好久不见！你还是那么年轻、漂亮。女：对不起，请问您是——？男：我是常亮啊，你不认识我了？女：常亮？你现在怎么变得这么瘦？瘦得我都不认识你了。问：关于女的，可以知道什么？ → 没想到男的这么瘦。'},
    {num:18, options:['不太胖','大眼睛','小鼻子'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'听说上个月小白生了个儿子', post:'？', py:'Tīngshuō shàng ge yuè Xiǎobái shēngle ge érzi?', vn:'Nghe nói tháng trước Tiểu Bạch sinh con trai à?'},
       {speaker:'女', pre:'是啊，', blank:'那孩子特别可爱，出生时特别胖，四公斤呢，他们高兴得一晚上没睡', post:'。', py:'Shì a, nà háizi tèbié kě\'ài, chūshēng shí tèbié pàng, sì gōngjīn ne, tāmen gāoxìng de yì wǎnshang méi shuì.', vn:'Đúng vậy, đứa bé đó đặc biệt đáng yêu, lúc sinh ra rất mũm mĩm, tận bốn cân đấy, họ vui đến mức cả đêm không ngủ.'},
       {speaker:'男', pre:'孩子长得像谁？', blank:'像小白还是像她丈夫', post:'？', py:'Háizi zhǎng de xiàng shéi? Xiàng Xiǎobái háishi xiàng tā zhàngfu?', vn:'Đứa bé giống ai vậy? Giống Tiểu Bạch hay giống chồng cô ấy?'},
       {speaker:'女', pre:'', blank:'鼻子像爸爸，高高的，眼睛像妈妈，大大的，头发也像妈妈，黑黑的', post:'。', py:'Bízi xiàng bàba, gāogāo de, yǎnjing xiàng māma, dàdà de, tóufa yě xiàng māma, hēihēi de.', vn:'Mũi giống bố, cao cao, mắt giống mẹ, to to, tóc cũng giống mẹ, đen đen.'},
     ],
     explain:'男：听说上个月小白生了个儿子？女：是啊，那孩子特别可爱，出生时特别胖，四公斤呢，他们高兴得一晚上没睡。男：孩子长得像谁？像小白还是像她丈夫？女：鼻子像爸爸，高高的，眼睛像妈妈，大大的，头发也像妈妈，黑黑的。问：关于小白的孩子，可以知道什么？ → 大眼睛。'},
    {num:19, options:['热牛奶','冰可乐','热水'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'我睡不着，怎么办呢', post:'？', py:'Wǒ shuì bu zháo, zěnme bàn ne?', vn:'Tôi không ngủ được, làm sao đây?'},
       {speaker:'男', pre:'', blank:'喝杯热牛奶，能帮助你快点儿睡，也能睡得好', post:'。', py:'Hē bēi rè niúnǎi, néng bāngzhù nǐ kuài diǎnr shuì, yě néng shuì de hǎo.', vn:'Uống ly sữa nóng đi, có thể giúp bạn ngủ nhanh hơn, cũng ngủ ngon hơn.'},
       {speaker:'女', pre:'热牛奶？', blank:'我是热得睡不着，喝热的更睡不着了', post:'。', py:'Rè niúnǎi? Wǒ shì rè de shuì bu zháo, hē rè de gèng shuì bu zháo le.', vn:'Sữa nóng á? Tôi là nóng nên không ngủ được, uống đồ nóng càng không ngủ được nữa.'},
       {speaker:'男', pre:'', blank:'如果觉得太热，就喝杯冰可乐吧，甜甜的，很舒服', post:'。', py:'Rúguǒ juéde tài rè, jiù hē bēi bīng kělè ba, tiántián de, hěn shūfu.', vn:'Nếu thấy nóng quá thì uống ly cô-ca đá đi, ngọt ngọt, rất dễ chịu.'},
     ],
     explain:'女：我睡不着，怎么办呢？男：喝杯热牛奶，能帮助你快点儿睡，也能睡得好。女：热牛奶？我是热得睡不着，喝热的更睡不着了。男：如果觉得太热，就喝杯冰可乐吧，甜甜的，很舒服。问：女的喝什么比较好？ → 冰可乐。'},
    {num:20, options:['有地铁','人很好','不太安静'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'这个城市真不错，干净、安静、漂亮', post:'。', py:'Zhège chéngshì zhēn búcuò, gānjìng, ānjìng, piàoliang.', vn:'Thành phố này thật không tệ, sạch sẽ, yên tĩnh, đẹp đẽ.'},
       {speaker:'女', pre:'', blank:'超市、洗衣店、饭馆、咖啡店，都有，很方便', post:'。', py:'Chāoshì, xǐyīdiàn, fànguǎn, kāfēidiàn, dōu yǒu, hěn fāngbiàn.', vn:'Siêu thị, tiệm giặt, nhà hàng, quán cà phê, đều có, rất tiện.'},
       {speaker:'男', pre:'', blank:'人和人的关系也不错，遇到问题时，别人都愿意帮助你', post:'。', py:'Rén hé rén de guānxi yě búcuò, yùdào wèntí shí, biéren dōu yuànyì bāngzhù nǐ.', vn:'Quan hệ giữa người với người cũng không tệ, khi gặp vấn đề, người khác đều sẵn lòng giúp bạn.'},
       {speaker:'女', pre:'', blank:'如果这个地方有地铁，那就更好了', post:'。', py:'Rúguǒ zhège dìfang yǒu dìtiě, nà jiù gèng hǎo le.', vn:'Nếu nơi này có tàu điện ngầm nữa thì càng tốt.'},
     ],
     explain:'男：这个城市真不错，干净、安静、漂亮。女：超市、洗衣店、饭馆、咖啡店，都有，很方便。男：人和人的关系也不错，遇到问题时，别人都愿意帮助你。女：如果这个地方有地铁，那就更好了。问：关于这个城市，可以知道什么？ → 人很好。'},
  ],
};
