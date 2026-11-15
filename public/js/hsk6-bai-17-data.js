// ══════════════════════════════════════════
// DATA — HSK6 Bài 17: 小动物眼中的慢世界 (Thế giới chậm trong mắt động vật nhỏ)
// 第五单元 美丽家园 · Nguồn: HSK标准教程6上 (tr. 178–187)
// Bài khoá: 小动物眼中的慢世界 (845 chữ) — 改编自《南都周刊》文章《小生灵，慢世界》，作者：石悦
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'场面',py:'chǎngmiàn',pos:'Danh từ',vn:'cảnh, cảnh tượng (trong một hoàn cảnh nhất định)',hv:'trường diện',em:'🎬',lesson:1,
   explain:['Cảnh tượng diễn ra trong một hoàn cảnh cụ thể (một sự việc, một cuộc gặp, một buổi lễ…): 热闹的场面, 感人的场面.','Còn chỉ quy mô, sự phô trương bề ngoài: 讲场面 (thích phô trương), 场面很大; và cảnh trong phim, kịch: 战争场面.'],
   usage:'Adj + 的 + 场面 (热闹 / 感人 / 混乱); 见过……的场面; 场面 + 很大 / 很壮观. Câu mở đầu bài khoá: 你见过这样的场面吗？',
   collo:['热闹的场面','感人的场面','见过这样的场面','场面很壮观'],
   ex_zh:'你见过这样的场面吗？',ex_py:'Nǐ jiànguo zhèyàng de chǎngmiàn ma?',ex_vn:'Bạn đã từng thấy cảnh tượng như thế này chưa?',
   exList:[
     {zh:'你见过这样的场面吗？有人端来一个盛着菜的盘子，立刻飞来一只苍蝇。',py:'Nǐ jiànguo zhèyàng de chǎngmiàn ma? Yǒu rén duānlái yí ge chéngzhe cài de pánzi, lìkè fēilái yì zhī cāngying.',vn:'Bạn đã thấy cảnh này chưa? Có người bưng ra một đĩa đựng thức ăn, lập tức một con ruồi bay đến.'},
     {zh:'一家人终于团圆了，那感人的场面让在场的人都热泪盈眶。',py:'Yì jiā rén zhōngyú tuányuán le, nà gǎnrén de chǎngmiàn ràng zàichǎng de rén dōu rèlèi-yíngkuàng.',vn:'Cả nhà cuối cùng cũng đoàn tụ, cảnh tượng cảm động ấy khiến ai có mặt cũng rưng rưng nước mắt.'},
     {zh:'春节前的火车站人山人海，场面非常热闹。',py:'Chūnjié qián de huǒchēzhàn rénshān-rénhǎi, chǎngmiàn fēicháng rènao.',vn:'Ga tàu trước Tết người đông như kiến, cảnh tượng vô cùng náo nhiệt.'}
   ],
   colloFull:[
     {zh:'热闹的场面',py:'rènao de chǎngmiàn',vn:'cảnh tượng náo nhiệt'},
     {zh:'感人的场面',py:'gǎnrén de chǎngmiàn',vn:'cảnh tượng cảm động'},
     {zh:'见过这样的场面',py:'jiànguo zhèyàng de chǎngmiàn',vn:'từng thấy cảnh như thế'},
     {zh:'场面很壮观',py:'chǎngmiàn hěn zhuàngguān',vn:'cảnh tượng rất hùng vĩ'},
     {zh:'场面混乱',py:'chǎngmiàn hùnluàn',vn:'cảnh tượng hỗn loạn'}
   ],
   patterns:[
     {s:'Adj + 的 + 场面',m:'Cảnh tượng … (热闹 / 感人 / 混乱)'},
     {s:'见过 / 经历过 + ……的场面',m:'Từng thấy / từng trải qua cảnh …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lần đầu tiên thấy cảnh tượng lớn như vậy, cậu ấy căng thẳng đến mức không nói nên lời.',answer:'第一次见到这么大的场面，他紧张得说不出话来。',answerPy:'Dì-yī cì jiàndào zhème dà de chǎngmiàn, tā jǐnzhāng de shuō bu chū huà lái.',
      note:'Adj + 得 + bổ ngữ trình độ; 说不出话来 = bổ ngữ khả năng + xu hướng kép (ôn HSK 4–5).',pair:'V不出来'},
     {promptLang:'vi',prompt:'Chỉ cần nhớ lại cảnh tượng hôm ấy, lòng tôi lại khó mà bình tĩnh.',answer:'只要一想起那天的场面，我的心情就难以平静。',answerPy:'Zhǐyào yì xiǎngqǐ nà tiān de chǎngmiàn, wǒ de xīnqíng jiù nányǐ píngjìng.',
      note:'只要……就…… điều kiện đủ; 难以 + V hai âm tiết (ôn HSK 6 bài 14).',pair:'难以'}
   ]},

  {n:2,zh:'端',py:'duān',pos:'Động từ',vn:'bưng, mang (bằng tay, giữ cho ngang)',hv:'đoan',em:'🍽️',lesson:1,
   explain:['Dùng tay (thường hai tay) giữ vật cho ngang bằng rồi mang đi: 端菜, 端盘子, 端茶, 端水. Vật được bưng thường là đĩa, bát, khay có đồ bên trong.','Nghĩa mở rộng (khẩu ngữ): 端出来 = bày ra, đưa ra (端出问题); 端正 = ngay ngắn (từ khác).'],
   usage:'端 + đồ đựng / đồ ăn uống (菜 / 汤 / 盘子 / 茶); 端来 / 端上 / 端走 / 端进 (bổ ngữ xu hướng). Bài khoá: 有人端来一个盛着菜的盘子.',
   collo:['端菜','端来一个盘子','端茶倒水','端上桌'],
   ex_zh:'有人端来一个盛着菜的盘子，立刻飞来一只东张西望的苍蝇。',ex_py:'Yǒu rén duānlái yí ge chéngzhe cài de pánzi, lìkè fēilái yì zhī dōngzhāng-xīwàng de cāngying.',ex_vn:'Có người bưng ra một chiếc đĩa đựng thức ăn, lập tức một con ruồi nhìn ngang nhìn dọc bay tới.',
   exList:[
     {zh:'有人端来一个盛着菜的盘子，立刻飞来一只东张西望的苍蝇。',py:'Yǒu rén duānlái yí ge chéngzhe cài de pánzi, lìkè fēilái yì zhī dōngzhāng-xīwàng de cāngying.',vn:'Có người bưng ra một chiếc đĩa đựng thức ăn, lập tức một con ruồi nhìn ngang nhìn dọc bay tới.'},
     {zh:'妈妈把刚做好的鱼端上桌，大家就迫不及待地动筷子了。',py:'Māma bǎ gāng zuòhǎo de yú duānshang zhuō, dàjiā jiù pòbùjídài de dòng kuàizi le.',vn:'Mẹ vừa bưng món cá mới làm xong lên bàn, mọi người đã nóng lòng cầm đũa.'},
     {zh:'汤太烫了，你端的时候小心点儿，别洒了。',py:'Tāng tài tàng le, nǐ duān de shíhou xiǎoxīn diǎnr, bié sǎ le.',vn:'Canh nóng lắm, lúc bưng con cẩn thận, đừng làm đổ.'}
   ],
   colloFull:[
     {zh:'端菜',py:'duān cài',vn:'bưng thức ăn'},
     {zh:'端来一个盘子',py:'duānlái yí ge pánzi',vn:'bưng tới một cái đĩa'},
     {zh:'端茶倒水',py:'duān chá dào shuǐ',vn:'bưng trà rót nước (phục vụ, chăm sóc)'},
     {zh:'端上桌',py:'duānshang zhuō',vn:'bưng lên bàn'},
     {zh:'端着一碗汤',py:'duānzhe yì wǎn tāng',vn:'đang bưng một bát canh'}
   ],
   patterns:[
     {s:'端 + 来 / 上 / 走 / 进 + đồ vật',m:'Bưng (tới / lên / đi / vào) …'},
     {s:'把 + đồ ăn + 端 + 上桌 / 过来',m:'Bưng … lên bàn / lại đây'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người phục vụ vừa bưng món ăn lên, chúng tôi đã ăn sạch sành sanh.',answer:'服务员刚把菜端上来，我们就吃得干干净净。',answerPy:'Fúwùyuán gāng bǎ cài duān shànglái, wǒmen jiù chī de gāngānjìngjìng.',
      note:'刚……就…… hai việc nối nhau rất nhanh; câu 把 + bổ ngữ xu hướng 上来 (ôn HSK 4).',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Cậu ấy bưng một cốc trà nóng, đứng bên cửa sổ ngẩn người rất lâu.',answer:'他端着一杯热茶，在窗前站着发了半天呆。',answerPy:'Tā duānzhe yì bēi rè chá, zài chuāng qián zhànzhe fāle bàntiān dāi.',
      note:'V着 chỉ trạng thái kèm theo (端着……站着); 发呆 là từ li hợp: 发了半天呆 (ôn HSK 5).',pair:'V着'}
   ]},

  {n:3,zh:'盛',py:'chéng',pos:'Động từ',vn:'chứa, đựng; múc (thức ăn vào đồ đựng)',hv:'thịnh',em:'🥣',lesson:1,
   explain:['Cho thức ăn, đồ vật vào trong đồ đựng: 盛饭 (xới cơm), 盛汤 (múc canh); hoặc (đồ đựng) chứa được: 这个箱子盛得下.','Chú ý đa âm: đọc chéng là "đựng, xới"; đọc shèng là "thịnh" (thịnh vượng, long trọng): 盛开, 盛大, 茂盛.'],
   usage:'盛 + 饭 / 汤 / 菜; 盛着 + đồ ăn (định ngữ: 盛着菜的盘子); 盛得下 / 盛不下 (chứa được / không chứa nổi).',
   collo:['盛饭','盛汤','盛着菜的盘子','盛不下'],
   ex_zh:'有人端来一个盛着菜的盘子。',ex_py:'Yǒu rén duānlái yí ge chéngzhe cài de pánzi.',ex_vn:'Có người bưng tới một chiếc đĩa đựng thức ăn.',
   exList:[
     {zh:'有人端来一个盛着菜的盘子。',py:'Yǒu rén duānlái yí ge chéngzhe cài de pánzi.',vn:'Có người bưng tới một chiếc đĩa đựng thức ăn.'},
     {zh:'奶奶总是先给我们盛好饭，然后自己才吃。',py:'Nǎinai zǒngshì xiān gěi wǒmen chénghǎo fàn, ránhòu zìjǐ cái chī.',vn:'Bà lúc nào cũng xới cơm cho chúng tôi trước, rồi mình mới ăn.'},
     {zh:'这个碗太小了，盛不下这么多汤。',py:'Zhège wǎn tài xiǎo le, chéng bu xià zhème duō tāng.',vn:'Cái bát này nhỏ quá, không đựng nổi nhiều canh thế này.'}
   ],
   colloFull:[
     {zh:'盛饭',py:'chéng fàn',vn:'xới cơm'},
     {zh:'盛汤',py:'chéng tāng',vn:'múc canh'},
     {zh:'盛着菜的盘子',py:'chéngzhe cài de pánzi',vn:'chiếc đĩa đựng thức ăn'},
     {zh:'盛不下',py:'chéng bu xià',vn:'không đựng nổi'},
     {zh:'再盛一碗',py:'zài chéng yì wǎn',vn:'xới thêm một bát'}
   ],
   patterns:[
     {s:'给 + người + 盛 + 饭 / 汤',m:'Xới cơm / múc canh cho ai'},
     {s:'盛得下 / 盛不下',m:'Đựng được / không đựng nổi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cơm hôm nay ngon quá, con xin xới thêm một bát nữa.',answer:'今天的饭太好吃了，我再盛一碗。',answerPy:'Jīntiān de fàn tài hǎochī le, wǒ zài chéng yì wǎn.',
      note:'再 + V + số lượng: làm thêm lần nữa (việc chưa xảy ra); phân biệt với 又 (đã xảy ra) (ôn HSK 4).',pair:'再 / 又'},
     {promptLang:'vi',prompt:'Cái hộp này tuy trông nhỏ, nhưng đựng được rất nhiều đồ.',answer:'这个盒子虽然看上去很小，但是盛得下很多东西。',answerPy:'Zhège hézi suīrán kàn shàngqù hěn xiǎo, dànshì chéng de xià hěn duō dōngxi.',
      note:'Bổ ngữ khả năng V得下 / V不下 (chứa được / không chứa nổi); 看上去 = trông có vẻ (ôn HSK 4).',pair:'V得下 / V不下'}
   ]},

  {n:4,zh:'东张西望',py:'dōngzhāng-xīwàng',pos:'Thành ngữ',vn:'nhìn ngang nhìn dọc, nhìn quanh quất',hv:'đông trương tây vọng',em:'👀',lesson:1,
   explain:['Nhìn bên này, ngó bên kia, nhìn khắp xung quanh — thường vì tò mò, đang tìm cái gì, hoặc thấp thỏm không yên. 张 và 望 đều là "nhìn".','Là ví dụ của cấu trúc 东A西B (chú thích 1): A, B là hai từ gần nghĩa, cả cụm = "chỗ này … chỗ kia …". Có thể mang sắc thái chê (không tập trung) hoặc tả hành vi đáng ngờ.'],
   usage:'Làm vị ngữ (他在门口东张西望), định ngữ (东张西望的苍蝇), trạng ngữ (东张西望地找). Hay đi với 站在 / 在……东张西望, 显得.',
   collo:['东张西望的苍蝇','在门口东张西望','东张西望地找','上课东张西望'],
   ex_zh:'立刻飞来一只东张西望的苍蝇，企图落在盘子上。',ex_py:'Lìkè fēilái yì zhī dōngzhāng-xīwàng de cāngying, qǐtú luò zài pánzi shang.',ex_vn:'Lập tức một con ruồi nhìn ngang nhìn dọc bay tới, định đậu xuống đĩa.',
   exList:[
     {zh:'立刻飞来一只东张西望的苍蝇，企图落在盘子上。',py:'Lìkè fēilái yì zhī dōngzhāng-xīwàng de cāngying, qǐtú luò zài pánzi shang.',vn:'Lập tức một con ruồi nhìn ngang nhìn dọc bay tới, định đậu xuống đĩa.'},
     {zh:'那孩子像是找不到家了，站在路口，东张西望，显得有些着急。',py:'Nà háizi xiàng shì zhǎo bu dào jiā le, zhàn zài lùkǒu, dōngzhāng-xīwàng, xiǎnde yǒuxiē zháojí.',vn:'Đứa bé hình như không tìm được nhà, đứng ở ngã tư nhìn quanh quất, trông hơi sốt ruột.'},
     {zh:'上课的时候别东张西望，要专心听老师讲。',py:'Shàngkè de shíhou bié dōngzhāng-xīwàng, yào zhuānxīn tīng lǎoshī jiǎng.',vn:'Trong giờ học đừng nhìn ngang nhìn dọc, phải chuyên tâm nghe thầy cô giảng.'}
   ],
   colloFull:[
     {zh:'东张西望的苍蝇',py:'dōngzhāng-xīwàng de cāngying',vn:'con ruồi nhìn ngang nhìn dọc'},
     {zh:'在门口东张西望',py:'zài ménkǒu dōngzhāng-xīwàng',vn:'nhìn quanh quất ở cửa'},
     {zh:'东张西望地找',py:'dōngzhāng-xīwàng de zhǎo',vn:'ngó nghiêng tìm kiếm'},
     {zh:'上课东张西望',py:'shàngkè dōngzhāng-xīwàng',vn:'trong giờ học nhìn ngang nhìn dọc'},
     {zh:'站在路口东张西望',py:'zhàn zài lùkǒu dōngzhāng-xīwàng',vn:'đứng ở ngã tư nhìn quanh'}
   ],
   patterns:[
     {s:'在 + nơi chốn + 东张西望',m:'Nhìn quanh quất ở …'},
     {s:'东张西望 + 的 + N / 东张西望 + 地 + V',m:'Làm định ngữ / trạng ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một người lạ cứ nhìn ngang nhìn dọc ở cổng trường, bảo vệ lập tức đi tới hỏi.',answer:'一个陌生人一直在校门口东张西望，保安立刻走过去问他。',answerPy:'Yí ge mòshēngrén yìzhí zài xiào ménkǒu dōngzhāng-xīwàng, bǎo\'ān lìkè zǒu guòqù wèn tā.',
      note:'一直 + 在 + nơi chốn + V: hành động kéo dài; 走过去 bổ ngữ xu hướng kép (ôn HSK 4).',pair:'V过去'},
     {promptLang:'vi',prompt:'Thằng bé vừa vào trung tâm thương mại đã nhìn quanh quất, như thể cái gì cũng muốn mua.',answer:'那个男孩一进商场就东张西望，好像什么都想买。',answerPy:'Nàge nánhái yí jìn shāngchǎng jiù dōngzhāng-xīwàng, hǎoxiàng shénme dōu xiǎng mǎi.',
      note:'一……就…… (vừa… đã…); 什么都…… đại từ nghi vấn chỉ phiếm (ôn HSK 4).',pair:'一……就……'}
   ]},

  {n:5,zh:'企图',py:'qǐtú',pos:'Động từ',vn:'mưu tính, âm mưu, định (làm gì)',hv:'xí đồ',em:'🕵️',lesson:1,
   explain:['Động từ: có ý định, mưu tính làm việc gì — thường là việc XẤU, việc khó thành, hoặc cuối cùng không thành: 企图逃跑, 企图欺骗. Văn viết.','Danh từ: ý đồ, âm mưu: 他的企图被识破了 (ý đồ của hắn bị vạch trần). Bài khoá dùng vui cho con ruồi: 企图落在盘子上.'],
   usage:'企图 + V (逃跑 / 掩盖 / 欺骗 / 落在……); ……的企图 + 被识破 / 落空. Khác 打算 (trung tính) và 试图 (thử cố gắng, không mang nghĩa xấu).',
   collo:['企图逃跑','企图落在盘子上','企图被识破','企图掩盖'],
   ex_zh:'立刻飞来一只东张西望的苍蝇，企图落在盘子上。',ex_py:'Lìkè fēilái yì zhī dōngzhāng-xīwàng de cāngying, qǐtú luò zài pánzi shang.',ex_vn:'Lập tức một con ruồi nhìn ngang nhìn dọc bay tới, toan đậu xuống đĩa.',
   exList:[
     {zh:'立刻飞来一只东张西望的苍蝇，企图落在盘子上。',py:'Lìkè fēilái yì zhī dōngzhāng-xīwàng de cāngying, qǐtú luò zài pánzi shang.',vn:'Lập tức một con ruồi nhìn ngang nhìn dọc bay tới, toan đậu xuống đĩa.'},
     {zh:'他企图用谎言掩盖自己的错误，但他的计划被我识破了。',py:'Tā qǐtú yòng huǎngyán yǎngài zìjǐ de cuòwù, dàn tā de jìhuà bèi wǒ shípò le.',vn:'Hắn định dùng lời nói dối để che đậy sai lầm của mình, nhưng kế hoạch của hắn đã bị tôi vạch trần.'},
     {zh:'小偷企图从窗户逃跑，结果被警察抓住了。',py:'Xiǎotōu qǐtú cóng chuānghu táopǎo, jiéguǒ bèi jǐngchá zhuāzhù le.',vn:'Tên trộm toan trốn qua cửa sổ, kết quả bị cảnh sát tóm được.'}
   ],
   colloFull:[
     {zh:'企图逃跑',py:'qǐtú táopǎo',vn:'toan bỏ trốn'},
     {zh:'企图落在盘子上',py:'qǐtú luò zài pánzi shang',vn:'toan đậu xuống đĩa'},
     {zh:'企图被识破',py:'qǐtú bèi shípò',vn:'âm mưu bị vạch trần'},
     {zh:'企图掩盖',py:'qǐtú yǎngài',vn:'toan che đậy'},
     {zh:'企图欺骗',py:'qǐtú qīpiàn',vn:'mưu toan lừa gạt'}
   ],
   patterns:[
     {s:'企图 + V (việc xấu / khó thành)',m:'Toan, mưu toan làm …'},
     {s:'……的企图 + 被识破 / 落空',m:'Ý đồ của … bị vạch trần / thất bại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hắn toan lừa gạt khách hàng, may mà bị chúng tôi phát hiện kịp thời.',answer:'他企图欺骗顾客，幸亏被我们及时发现了。',answerPy:'Tā qǐtú qīpiàn gùkè, xìngkuī bèi wǒmen jíshí fāxiàn le.',
      note:'幸亏 = may mà (ôn HSK 5); câu bị động 被 + tác nhân + V + 了. 欺骗 ôn HSK 6 bài 3.',pair:'幸亏'},
     {promptLang:'vi',prompt:'Tuy anh ta toan che giấu sự thật, nhưng cuối cùng mọi người vẫn biết.',answer:'尽管他企图隐瞒真相，大家最后还是知道了。',answerPy:'Jǐnguǎn tā qǐtú yǐnmán zhēnxiàng, dàjiā zuìhòu háishi zhīdào le.',
      note:'尽管……还是…… nhượng bộ sự thật (ôn HSK 5); 隐瞒 ôn HSK 6 bài 2.',pair:'尽管……还是……'}
   ]},

  {n:6,zh:'动手',py:'dòng shǒu',pos:'Động từ (li hợp)',vn:'ra tay, bắt tay vào làm; giơ tay đánh',hv:'động thủ',em:'✋',lesson:1,
   explain:['Bắt đầu làm, bắt tay vào việc: 自己动手做饭, 动手能力 (khả năng thực hành). Cũng là "chạm tay vào": 展品请勿动手.','Giơ tay đánh người / ra tay: 有话好好说，别动手. Bài khoá: 人动手去打 = người giơ tay đập (ruồi).'],
   usage:'动手 + V (做 / 打 / 写); 自己动手; 动手能力; 别动手 (đừng đánh nhau). Là từ li hợp nhưng ít tách; phủ định 没动手 / 别动手.',
   collo:['自己动手','动手去打','动手能力','先动手'],
   ex_zh:'人动手去打，却总是打不中。',ex_py:'Rén dòng shǒu qù dǎ, què zǒngshì dǎ bu zhòng.',ex_vn:'Người giơ tay đập, nhưng lần nào cũng đập không trúng.',
   exList:[
     {zh:'人动手去打，却总是打不中。',py:'Rén dòng shǒu qù dǎ, què zǒngshì dǎ bu zhòng.',vn:'Người giơ tay đập, nhưng lần nào cũng đập không trúng.'},
     {zh:'周末我们自己动手包饺子，比在饭馆吃有意思多了。',py:'Zhōumò wǒmen zìjǐ dòng shǒu bāo jiǎozi, bǐ zài fànguǎn chī yǒu yìsi duō le.',vn:'Cuối tuần chúng tôi tự tay gói sủi cảo, thú vị hơn ăn ở quán nhiều.'},
     {zh:'有话好好说，千万别动手。',py:'Yǒu huà hǎohāo shuō, qiānwàn bié dòng shǒu.',vn:'Có gì thì nói tử tế với nhau, tuyệt đối đừng động tay động chân.'}
   ],
   colloFull:[
     {zh:'自己动手',py:'zìjǐ dòng shǒu',vn:'tự tay làm'},
     {zh:'动手去打',py:'dòng shǒu qù dǎ',vn:'giơ tay đánh / đập'},
     {zh:'动手能力',py:'dòngshǒu nénglì',vn:'khả năng thực hành'},
     {zh:'先动手',py:'xiān dòng shǒu',vn:'ra tay trước'},
     {zh:'动手做饭',py:'dòng shǒu zuò fàn',vn:'bắt tay vào nấu cơm'}
   ],
   patterns:[
     {s:'自己动手 + V',m:'Tự tay làm …'},
     {s:'别 / 不要 + 动手',m:'Đừng đánh nhau / đừng chạm vào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù là việc nhỏ, bạn cũng nên tự tay làm thử, chứ không phải chỉ đứng xem.',answer:'哪怕是小事，你也应该自己动手试试，而不是只在旁边看。',answerPy:'Nǎpà shì xiǎoshì, nǐ yě yīnggāi zìjǐ dòng shǒu shìshi, ér bú shì zhǐ zài pángbiān kàn.',
      note:'哪怕……也…… nhượng bộ giả thiết (ôn HSK 5); ……，而不是…… nhấn cái đúng, bác cái sai.',pair:'哪怕……也……'},
     {promptLang:'vi',prompt:'Hai người cãi nhau càng lúc càng to, suýt nữa thì đánh nhau.',answer:'两个人越吵越厉害，差点儿动起手来。',answerPy:'Liǎng ge rén yuè chǎo yuè lìhai, chàdiǎnr dòng qǐ shǒu lái.',
      note:'越……越…… (ôn HSK 4); từ li hợp + 起来 tách ra: 动起手来 (ôn HSK 6 bài 7 病句 发起怒来).',pair:'越……越……'}
   ]},

  {n:7,zh:'纳闷儿',py:'nà mènr',pos:'Động từ (li hợp)',vn:'thấy khó hiểu, bối rối, lấy làm lạ',hv:'nạp muộn (nhi)',em:'🤔',lesson:1,
   explain:['Trong lòng có điều nghi hoặc, không hiểu nổi (khẩu ngữ): 我很纳闷儿, 让人纳闷儿的是…….','Thường đứng trước một câu hỏi nêu điều mình không hiểu: 有人纳闷儿，猫为什么能……? Có thể tách: 纳了半天闷儿 (ít dùng).'],
   usage:'(很 / 真 / 有点儿) + 纳闷儿; 纳闷儿 + câu hỏi (为什么 / 怎么……); 让人纳闷儿的是……; 心里纳闷儿.',
   collo:['心里纳闷儿','让人纳闷儿','有人纳闷儿','感到纳闷儿'],
   ex_zh:'有人纳闷儿，猫为什么能快速跳跃起来，瞄准都不用，一下就能拍到苍蝇？',ex_py:'Yǒu rén nà mènr, māo wèi shénme néng kuàisù tiàoyuè qǐlái, miáozhǔn dōu bú yòng, yíxià jiù néng pāidào cāngying?',ex_vn:'Có người lấy làm lạ: tại sao mèo có thể nhảy vọt lên thật nhanh, chẳng cần nhắm, một phát đã vỗ trúng con ruồi?',
   exList:[
     {zh:'有人纳闷儿，猫为什么能快速跳跃起来，瞄准都不用，一下就能拍到苍蝇？',py:'Yǒu rén nà mènr, māo wèi shénme néng kuàisù tiàoyuè qǐlái, miáozhǔn dōu bú yòng, yíxià jiù néng pāidào cāngying?',vn:'Có người lấy làm lạ: tại sao mèo có thể nhảy vọt lên thật nhanh, chẳng cần nhắm, một phát đã vỗ trúng con ruồi?'},
     {zh:'听说有人找我，我很纳闷儿：谁会知道我住在这儿呢？',py:'Tīngshuō yǒu rén zhǎo wǒ, wǒ hěn nà mènr: shéi huì zhīdào wǒ zhù zài zhèr ne?',vn:'Nghe nói có người tìm tôi, tôi thấy khó hiểu lắm: ai lại biết tôi ở đây nhỉ?'},
     {zh:'让人纳闷儿的是，他平时成绩那么好，这次怎么没考好？',py:'Ràng rén nà mènr de shì, tā píngshí chéngjì nàme hǎo, zhè cì zěnme méi kǎohǎo?',vn:'Điều khiến người ta khó hiểu là, bình thường cậu ấy học giỏi thế, sao lần này lại thi không tốt?'}
   ],
   colloFull:[
     {zh:'心里纳闷儿',py:'xīnli nà mènr',vn:'trong lòng thấy khó hiểu'},
     {zh:'让人纳闷儿',py:'ràng rén nà mènr',vn:'khiến người ta khó hiểu'},
     {zh:'有人纳闷儿',py:'yǒu rén nà mènr',vn:'có người lấy làm lạ'},
     {zh:'感到纳闷儿',py:'gǎndào nà mènr',vn:'cảm thấy khó hiểu'},
     {zh:'越想越纳闷儿',py:'yuè xiǎng yuè nà mènr',vn:'càng nghĩ càng thấy lạ'}
   ],
   patterns:[
     {s:'（很）纳闷儿 + câu hỏi',m:'Thấy khó hiểu: tại sao / làm sao …?'},
     {s:'让人纳闷儿的是……',m:'Điều khiến người ta khó hiểu là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi rất lấy làm lạ, rõ ràng cậu ấy đã đồng ý rồi, sao bây giờ lại đổi ý?',answer:'我很纳闷儿，他明明已经答应了，怎么现在又改主意了？',answerPy:'Wǒ hěn nà mènr, tā míngmíng yǐjīng dāying le, zěnme xiànzài yòu gǎi zhǔyi le?',
      note:'明明 = rõ ràng (mà lại…), ôn HSK 6 bài 6; 又 chỉ việc lặp lại đã xảy ra.',pair:'明明'},
     {promptLang:'vi',prompt:'Chuyện này càng nghĩ tôi càng thấy khó hiểu, hay là cậu đi hỏi thầy đi.',answer:'这件事我越想越纳闷儿，不如你去问问老师吧。',answerPy:'Zhè jiàn shì wǒ yuè xiǎng yuè nà mènr, bùrú nǐ qù wènwen lǎoshī ba.',
      note:'越……越…… (ôn HSK 4); 不如 = chi bằng, hay là (ôn HSK 5).',pair:'不如'}
   ]},

  {n:8,zh:'跳跃',py:'tiàoyuè',pos:'Động từ',vn:'nhảy, nhảy vọt',hv:'khiêu dược',em:'🐈',lesson:1,
   explain:['Dùng sức chân bật người lên khỏi mặt đất hoặc bật qua chỗ khác: 快速跳跃, 跳跃运动. Văn viết hơn 跳.','Nghĩa bóng: (suy nghĩ, văn chương) nhảy cóc, không liền mạch: 思维很跳跃.'],
   usage:'跳跃 + 起来 / 过去; 快速 / 轻轻 + 跳跃; làm định ngữ: 跳跃能力, 跳跃动作. Bài khoá: 猫为什么能快速跳跃起来.',
   collo:['快速跳跃','跳跃起来','跳跃能力','跳跃运动'],
   ex_zh:'猫为什么能快速跳跃起来，瞄准都不用，一下就能拍到苍蝇？',ex_py:'Māo wèi shénme néng kuàisù tiàoyuè qǐlái, miáozhǔn dōu bú yòng, yíxià jiù néng pāidào cāngying?',ex_vn:'Tại sao mèo có thể nhảy vọt lên thật nhanh, chẳng cần nhắm, một phát đã vỗ trúng con ruồi?',
   exList:[
     {zh:'猫为什么能快速跳跃起来，瞄准都不用，一下就能拍到苍蝇？',py:'Māo wèi shénme néng kuàisù tiàoyuè qǐlái, miáozhǔn dōu bú yòng, yíxià jiù néng pāidào cāngying?',vn:'Tại sao mèo có thể nhảy vọt lên thật nhanh, chẳng cần nhắm, một phát đã vỗ trúng con ruồi?'},
     {zh:'松鼠在树枝之间跳跃，动作敏捷极了。',py:'Sōngshǔ zài shùzhī zhījiān tiàoyuè, dòngzuò mǐnjié jí le.',vn:'Con sóc nhảy giữa các cành cây, động tác nhanh nhẹn vô cùng.'},
     {zh:'他的思维很跳跃，一会儿说东，一会儿说西。',py:'Tā de sīwéi hěn tiàoyuè, yíhuìr shuō dōng, yíhuìr shuō xī.',vn:'Suy nghĩ của anh ấy rất nhảy cóc, lúc thì nói chuyện này, lúc lại nói chuyện kia.'}
   ],
   colloFull:[
     {zh:'快速跳跃',py:'kuàisù tiàoyuè',vn:'nhảy vọt nhanh'},
     {zh:'跳跃起来',py:'tiàoyuè qǐlái',vn:'nhảy bật lên'},
     {zh:'跳跃能力',py:'tiàoyuè nénglì',vn:'khả năng bật nhảy'},
     {zh:'跳跃运动',py:'tiàoyuè yùndòng',vn:'môn nhảy (thể thao)'},
     {zh:'在树枝间跳跃',py:'zài shùzhī jiān tiàoyuè',vn:'nhảy giữa các cành cây'}
   ],
   patterns:[
     {s:'（快速 / 轻轻）+ 跳跃 + 起来 / 过去',m:'Nhảy bật lên / nhảy qua'},
     {s:'思维 / 文章 + 很跳跃',m:'Suy nghĩ / bài văn nhảy cóc, thiếu mạch lạc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con mèo không những nhảy rất cao, mà còn chạy nhanh hơn chó.',answer:'这只猫不仅跳跃得很高，而且跑得比狗还快。',answerPy:'Zhè zhī māo bùjǐn tiàoyuè de hěn gāo, érqiě pǎo de bǐ gǒu hái kuài.',
      note:'不仅……而且…… tăng tiến; câu so sánh 比 + 还 + Adj (ôn HSK 4).',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Bài văn của em nhảy cóc quá, người đọc khó mà hiểu được.',answer:'你的文章太跳跃了，读者很难看懂。',answerPy:'Nǐ de wénzhāng tài tiàoyuè le, dúzhě hěn nán kàndǒng.',
      note:'太……了 nhận xét mức độ; 看懂 = bổ ngữ kết quả (ôn HSK 4).',pair:'V懂'}
   ]},

  {n:9,zh:'瞄准',py:'miáo zhǔn',pos:'Động từ',vn:'nhắm đúng, nhắm trúng (mục tiêu)',hv:'miêu chuẩn',em:'🎯',lesson:1,
   explain:['Nhìn kỹ và hướng (súng, tên, bóng…) cho trúng mục tiêu: 瞄准目标, 瞄准以后再开枪. 瞄 = nhắm, 准 = chuẩn, trúng.','Nghĩa bóng: nhắm vào, hướng tới (một thị trường, cơ hội): 瞄准年轻人市场.'],
   usage:'瞄准 + mục tiêu (目标 / 靶子 / 市场); 瞄准了再…; 不用瞄准 / 瞄准都不用 (bài khoá, 都 nhấn mạnh).',
   collo:['瞄准目标','瞄准都不用','瞄准市场','瞄准球门'],
   ex_zh:'猫为什么能快速跳跃起来，瞄准都不用，一下就能拍到苍蝇？',ex_py:'Māo wèi shénme néng kuàisù tiàoyuè qǐlái, miáozhǔn dōu bú yòng, yíxià jiù néng pāidào cāngying?',ex_vn:'Tại sao mèo nhảy vọt lên thật nhanh, nhắm cũng chẳng cần nhắm, một phát đã vỗ trúng con ruồi?',
   exList:[
     {zh:'猫为什么能快速跳跃起来，瞄准都不用，一下就能拍到苍蝇？',py:'Māo wèi shénme néng kuàisù tiàoyuè qǐlái, miáozhǔn dōu bú yòng, yíxià jiù néng pāidào cāngying?',vn:'Tại sao mèo nhảy vọt lên thật nhanh, nhắm cũng chẳng cần nhắm, một phát đã vỗ trúng con ruồi?'},
     {zh:'他瞄准球门，用力一脚，球进了！',py:'Tā miáozhǔn qiúmén, yònglì yì jiǎo, qiú jìn le!',vn:'Anh ấy nhắm chuẩn khung thành, sút mạnh một cú, bóng vào rồi!'},
     {zh:'这家公司把产品瞄准了年轻人市场。',py:'Zhè jiā gōngsī bǎ chǎnpǐn miáozhǔnle niánqīngrén shìchǎng.',vn:'Công ty này nhắm sản phẩm vào thị trường giới trẻ.'}
   ],
   colloFull:[
     {zh:'瞄准目标',py:'miáozhǔn mùbiāo',vn:'nhắm chuẩn mục tiêu'},
     {zh:'瞄准都不用',py:'miáozhǔn dōu bú yòng',vn:'nhắm cũng chẳng cần nhắm'},
     {zh:'瞄准市场',py:'miáozhǔn shìchǎng',vn:'nhắm vào thị trường'},
     {zh:'瞄准球门',py:'miáozhǔn qiúmén',vn:'nhắm vào khung thành'},
     {zh:'瞄准机会',py:'miáozhǔn jīhuì',vn:'nhắm đúng thời cơ'}
   ],
   patterns:[
     {s:'瞄准 + mục tiêu',m:'Nhắm trúng / nhắm vào …'},
     {s:'V 都不用 (瞄准都不用)',m:'… cũng chẳng cần … (nhấn mạnh sự dễ dàng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có nhắm đúng mục tiêu thì mới có thể bắn trúng.',answer:'只有瞄准了目标，才能打中。',answerPy:'Zhǐyǒu miáozhǔnle mùbiāo, cái néng dǎzhòng.',
      note:'只有……才…… điều kiện duy nhất (ôn HSK 4); 打中 = đánh / bắn trúng (中 zhòng, chú thích 2).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Anh ấy đã nhắm vào cơ hội này từ lâu, vì vậy chuẩn bị vô cùng đầy đủ.',answer:'他早就瞄准了这个机会，因此准备得非常充分。',answerPy:'Tā zǎojiù miáozhǔnle zhège jīhuì, yīncǐ zhǔnbèi de fēicháng chōngfèn.',
      note:'早就……了 = đã … từ lâu; 因此 nối kết quả (ôn HSK 4–5).',pair:'早就……了'}
   ]},

  {n:10,zh:'鸽子',py:'gēzi',pos:'Danh từ',vn:'chim bồ câu',hv:'cáp tử',em:'🕊️',lesson:1,
   explain:['Loài chim hiền lành, thường được nuôi, bay giỏi và nhớ đường về tổ; lượng từ 只: 一只鸽子. Bồ câu trắng (白鸽 / 和平鸽) là biểu tượng hòa bình.','Khẩu ngữ: 放鸽子 = cho leo cây, hứa rồi không đến (他又放我鸽子了).'],
   usage:'一只 / 一群 + 鸽子; 养 / 喂 + 鸽子; 鸽子 + 飞 / 落. Bài khoá: 如果你观察一下鸽子就会发现…….',
   collo:['一群鸽子','喂鸽子','和平鸽','放鸽子'],
   ex_zh:'如果你观察一下鸽子就会发现，当它的视线扫过周边时，它在微微颤抖。',ex_py:'Rúguǒ nǐ guānchá yíxià gēzi jiù huì fāxiàn, dāng tā de shìxiàn sǎoguo zhōubiān shí, tā zài wēiwēi chàndǒu.',ex_vn:'Nếu quan sát chim bồ câu, bạn sẽ phát hiện: khi ánh mắt nó lướt qua xung quanh, nó hơi run run.',
   exList:[
     {zh:'如果你观察一下鸽子就会发现，当它的视线扫过周边时，它在微微颤抖。',py:'Rúguǒ nǐ guānchá yíxià gēzi jiù huì fāxiàn, dāng tā de shìxiàn sǎoguo zhōubiān shí, tā zài wēiwēi chàndǒu.',vn:'Nếu quan sát chim bồ câu, bạn sẽ phát hiện: khi ánh mắt nó lướt qua xung quanh, nó hơi run run.'},
     {zh:'广场上有一群鸽子，孩子们正在喂它们。',py:'Guǎngchǎng shang yǒu yì qún gēzi, háizimen zhèngzài wèi tāmen.',vn:'Trên quảng trường có một đàn bồ câu, bọn trẻ đang cho chúng ăn.'},
     {zh:'说好一起去看电影，他又放我鸽子了。',py:'Shuōhǎo yìqǐ qù kàn diànyǐng, tā yòu fàng wǒ gēzi le.',vn:'Đã hẹn cùng đi xem phim, cậu ấy lại cho tôi leo cây rồi.'}
   ],
   colloFull:[
     {zh:'一群鸽子',py:'yì qún gēzi',vn:'một đàn bồ câu'},
     {zh:'喂鸽子',py:'wèi gēzi',vn:'cho bồ câu ăn'},
     {zh:'和平鸽',py:'hépínggē',vn:'chim bồ câu hòa bình'},
     {zh:'放鸽子',py:'fàng gēzi',vn:'cho leo cây, thất hẹn'},
     {zh:'养鸽子',py:'yǎng gēzi',vn:'nuôi chim bồ câu'}
   ],
   patterns:[
     {s:'一只 / 一群 + 鸽子',m:'Một con / một đàn bồ câu'},
     {s:'放 + người + 鸽子',m:'Cho ai leo cây (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói bồ câu dù bay xa bao nhiêu cũng tìm được đường về nhà.',answer:'听说鸽子无论飞多远，都能找到回家的路。',answerPy:'Tīngshuō gēzi wúlùn fēi duō yuǎn, dōu néng zhǎodào huí jiā de lù.',
      note:'无论……都…… điều kiện nào kết quả cũng không đổi (ôn HSK 4); 找到 bổ ngữ kết quả.',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Lần này cậu mà còn cho tớ leo cây nữa thì tớ không chơi với cậu nữa đâu.',answer:'这次你要是再放我鸽子，我就不跟你玩儿了。',answerPy:'Zhè cì nǐ yàoshi zài fàng wǒ gēzi, wǒ jiù bù gēn nǐ wánr le.',
      note:'要是……就…… giả thiết (ôn HSK 4); 再 dùng cho việc chưa xảy ra.',pair:'要是……就……'}
   ]},

  {n:11,zh:'视线',py:'shìxiàn',pos:'Danh từ',vn:'ánh mắt, tầm mắt, đường ngắm',hv:'thị tuyến',em:'👁️',lesson:1,
   explain:['Đường thẳng tưởng tượng từ mắt tới vật đang nhìn — tức là hướng nhìn, ánh mắt: 视线扫过, 挡住视线 (che tầm nhìn), 离开视线.','Nghĩa bóng: sự chú ý: 转移视线 (đánh lạc hướng sự chú ý).'],
   usage:'视线 + 扫过 / 落在 / 离开 / 模糊; 挡住 / 转移 / 吸引 + 视线; 在……的视线里 / 视线之外.',
   collo:['视线扫过周边','挡住视线','转移视线','吸引视线'],
   ex_zh:'当它的视线扫过周边时，它在微微颤抖。',ex_py:'Dāng tā de shìxiàn sǎoguo zhōubiān shí, tā zài wēiwēi chàndǒu.',ex_vn:'Khi ánh mắt nó lướt qua xung quanh, nó hơi run run.',
   exList:[
     {zh:'当它的视线扫过周边时，它在微微颤抖。',py:'Dāng tā de shìxiàn sǎoguo zhōubiān shí, tā zài wēiwēi chàndǒu.',vn:'Khi ánh mắt nó lướt qua xung quanh, nó hơi run run.'},
     {zh:'前面的人太高了，挡住了我的视线。',py:'Qiánmiàn de rén tài gāo le, dǎngzhùle wǒ de shìxiàn.',vn:'Người phía trước cao quá, che mất tầm nhìn của tôi.'},
     {zh:'他故意说别的事，想转移大家的视线。',py:'Tā gùyì shuō biéde shì, xiǎng zhuǎnyí dàjiā de shìxiàn.',vn:'Anh ta cố ý nói chuyện khác, muốn đánh lạc hướng sự chú ý của mọi người.'}
   ],
   colloFull:[
     {zh:'视线扫过周边',py:'shìxiàn sǎoguo zhōubiān',vn:'ánh mắt lướt qua xung quanh'},
     {zh:'挡住视线',py:'dǎngzhù shìxiàn',vn:'che khuất tầm nhìn'},
     {zh:'转移视线',py:'zhuǎnyí shìxiàn',vn:'đánh lạc hướng sự chú ý'},
     {zh:'吸引视线',py:'xīyǐn shìxiàn',vn:'thu hút ánh nhìn'},
     {zh:'离开视线',py:'líkāi shìxiàn',vn:'rời khỏi tầm mắt'}
   ],
   patterns:[
     {s:'视线 + 扫过 / 落在 + nơi chốn',m:'Ánh mắt lướt qua / dừng lại ở …'},
     {s:'挡住 / 转移 / 吸引 + ……的视线',m:'Che / đánh lạc / thu hút ánh nhìn của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở nơi đông người, đừng để trẻ con rời khỏi tầm mắt của mình.',answer:'在人多的地方，别让孩子离开自己的视线。',answerPy:'Zài rén duō de dìfang, bié ràng háizi líkāi zìjǐ de shìxiàn.',
      note:'Câu kiêm ngữ 让 + người + V (ôn HSK 4); 别 + 让 = đừng để ….',pair:'让 (kiêm ngữ)'},
     {promptLang:'vi',prompt:'Ánh mắt cô ấy vừa dừng lại ở bức tranh kia thì không rời đi được nữa.',answer:'她的视线一落在那幅画上，就再也离不开了。',answerPy:'Tā de shìxiàn yí luò zài nà fú huà shang, jiù zài yě lí bu kāi le.',
      note:'一……就……; 再也 + 不 / 没 = không bao giờ … nữa; bổ ngữ khả năng 离不开 (ôn HSK 5).',pair:'再也不……'}
   ]},

  {n:12,zh:'周边',py:'zhōubiān',pos:'Danh từ',vn:'xung quanh, vùng lân cận',hv:'chu biên',em:'🧭',lesson:1,
   explain:['Khu vực bao quanh một nơi, một vật: 学校周边, 城市周边, 周边环境. Gần nghĩa 周围 nhưng hơi văn viết, hay dùng cho địa lý, khu vực.','Còn dùng trong kinh doanh: 周边产品 (sản phẩm ăn theo, đồ lưu niệm của một bộ phim, trò chơi…).'],
   usage:'nơi chốn + 周边 (学校 / 城市 / 公园); 周边 + 环境 / 地区 / 国家 / 游; 扫过周边 (bài khoá).',
   collo:['学校周边','周边环境','周边地区','周边游'],
   ex_zh:'当它的视线扫过周边时，它在微微颤抖。',ex_py:'Dāng tā de shìxiàn sǎoguo zhōubiān shí, tā zài wēiwēi chàndǒu.',ex_vn:'Khi ánh mắt nó lướt qua xung quanh, nó hơi run run.',
   exList:[
     {zh:'当它的视线扫过周边时，它在微微颤抖。',py:'Dāng tā de shìxiàn sǎoguo zhōubiān shí, tā zài wēiwēi chàndǒu.',vn:'Khi ánh mắt nó lướt qua xung quanh, nó hơi run run.'},
     {zh:'为了孩子们的安全，学校周边不许开网吧。',py:'Wèile háizimen de ānquán, xuéxiào zhōubiān bù xǔ kāi wǎngbā.',vn:'Vì an toàn của học sinh, quanh trường học không được mở quán net.'},
     {zh:'假期不长，我们就在城市周边玩儿了两天。',py:'Jiàqī bù cháng, wǒmen jiù zài chéngshì zhōubiān wánrle liǎng tiān.',vn:'Kỳ nghỉ không dài, chúng tôi chỉ đi chơi quanh thành phố hai ngày.'}
   ],
   colloFull:[
     {zh:'学校周边',py:'xuéxiào zhōubiān',vn:'xung quanh trường học'},
     {zh:'周边环境',py:'zhōubiān huánjìng',vn:'môi trường xung quanh'},
     {zh:'周边地区',py:'zhōubiān dìqū',vn:'các vùng lân cận'},
     {zh:'周边游',py:'zhōubiān yóu',vn:'du lịch gần (quanh thành phố)'},
     {zh:'周边产品',py:'zhōubiān chǎnpǐn',vn:'sản phẩm ăn theo, đồ lưu niệm'}
   ],
   patterns:[
     {s:'nơi chốn + 周边',m:'Xung quanh …'},
     {s:'周边 + 环境 / 地区 / 国家',m:'Môi trường / khu vực / nước láng giềng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi mở tàu điện ngầm, giá nhà quanh ga tăng lên không ít.',answer:'自从通了地铁，车站周边的房价涨了不少。',answerPy:'Zìcóng tōngle dìtiě, chēzhàn zhōubiān de fángjià zhǎngle bù shǎo.',
      note:'自从…… = từ khi (mốc quá khứ, ôn HSK 4); V + 了 + 不少 chỉ mức độ.',pair:'自从'},
     {promptLang:'vi',prompt:'Trước khi thuê nhà, tốt nhất nên tìm hiểu kỹ môi trường xung quanh.',answer:'租房子以前，最好先把周边环境了解清楚。',answerPy:'Zū fángzi yǐqián, zuìhǎo xiān bǎ zhōubiān huánjìng liǎojiě qīngchu.',
      note:'最好 + V = tốt nhất nên; câu 把 + bổ ngữ kết quả 清楚 (ôn HSK 4).',pair:'把字句'}
   ]},

  {n:13,zh:'颤抖',py:'chàndǒu',pos:'Động từ',vn:'run, run rẩy',hv:'chiến đẩu',em:'🥶',lesson:1,
   explain:['Rung lên từng đợt ngắn, không tự chủ được — vì lạnh, sợ, xúc động, mệt: 浑身颤抖, 声音颤抖, 双手颤抖.','Văn viết hơn 发抖. Bài khoá: con bồ câu 微微颤抖 (hơi run) khi ánh mắt lướt qua xung quanh.'],
   usage:'(微微 / 不停地 / 浑身) + 颤抖; 声音 / 手 / 嘴唇 + 颤抖; 颤抖着 + V (颤抖着说).',
   collo:['微微颤抖','浑身颤抖','声音颤抖','颤抖着双手'],
   ex_zh:'当它的视线扫过周边时，它在微微颤抖，看上去好像体内有另外一个钟表。',ex_py:'Dāng tā de shìxiàn sǎoguo zhōubiān shí, tā zài wēiwēi chàndǒu, kàn shàngqù hǎoxiàng tǐ nèi yǒu lìngwài yí ge zhōngbiǎo.',ex_vn:'Khi ánh mắt nó lướt qua xung quanh, nó hơi run run, trông như trong người có một chiếc đồng hồ khác.',
   exList:[
     {zh:'当它的视线扫过周边时，它在微微颤抖，看上去好像体内有另外一个钟表。',py:'Dāng tā de shìxiàn sǎoguo zhōubiān shí, tā zài wēiwēi chàndǒu, kàn shàngqù hǎoxiàng tǐ nèi yǒu lìngwài yí ge zhōngbiǎo.',vn:'Khi ánh mắt nó lướt qua xung quanh, nó hơi run run, trông như trong người có một chiếc đồng hồ khác.'},
     {zh:'听到这个消息，她激动得声音都颤抖了。',py:'Tīngdào zhège xiāoxi, tā jīdòng de shēngyīn dōu chàndǒu le.',vn:'Nghe tin này, cô ấy xúc động đến mức giọng run run.'},
     {zh:'小狗被雨淋湿了，冷得浑身颤抖。',py:'Xiǎogǒu bèi yǔ línshī le, lěng de húnshēn chàndǒu.',vn:'Chú chó con bị mưa ướt sũng, lạnh đến run cả người.'}
   ],
   colloFull:[
     {zh:'微微颤抖',py:'wēiwēi chàndǒu',vn:'hơi run run'},
     {zh:'浑身颤抖',py:'húnshēn chàndǒu',vn:'run khắp người'},
     {zh:'声音颤抖',py:'shēngyīn chàndǒu',vn:'giọng run run'},
     {zh:'颤抖着双手',py:'chàndǒuzhe shuāngshǒu',vn:'hai tay run rẩy'},
     {zh:'冷得颤抖',py:'lěng de chàndǒu',vn:'lạnh đến run người'}
   ],
   patterns:[
     {s:'Adj + 得 + (浑身 / 声音) + 颤抖',m:'… đến mức run (lạnh / sợ / xúc động)'},
     {s:'颤抖着 + V',m:'Run run mà làm gì (颤抖着说 / 接过)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cụ già run run đôi tay đỡ lấy lá thư của con trai, mãi lâu không nói được lời nào.',answer:'老人颤抖着双手接过儿子的信，半天说不出话来。',answerPy:'Lǎorén chàndǒuzhe shuāngshǒu jiēguo érzi de xìn, bàntiān shuō bu chū huà lái.',
      note:'V1着 + V2: trạng thái kèm hành động; 说不出话来 bổ ngữ khả năng (ôn HSK 5).',pair:'V1着V2'},
     {promptLang:'vi',prompt:'Cậu ấy sợ đến nỗi run cả người, vậy mà vẫn kiên trì hát hết bài.',answer:'他害怕得浑身颤抖，却还是坚持把歌唱完了。',answerPy:'Tā hàipà de húnshēn chàndǒu, què háishi jiānchí bǎ gē chàngwán le.',
      note:'Adj + 得 + bổ ngữ trạng thái; 却还是 nêu sự trái ngược; câu 把 (ôn HSK 4–5).',pair:'却'}
   ]},

  {n:14,zh:'确切',py:'quèqiè',pos:'Tính từ',vn:'chuẩn xác, chính xác, xác thực',hv:'xác thiết',em:'📌',lesson:1,
   explain:['Chính xác, đáng tin, rõ ràng không mơ hồ: 确切的消息, 确切的时间, 确切的答案.','确切地说 = nói cho chính xác thì…, dùng để chỉnh lại / nói rõ hơn ý vừa nêu (bài khoá: 确切地说，在小动物看来……).'],
   usage:'确切的 + 消息 / 数字 / 时间 / 答案; 确切地 + 知道 / 说; 不太确切. Gần nghĩa 准确 (nhấn đúng với chuẩn), 确切 nhấn chắc chắn, không sai lệch.',
   collo:['确切地说','确切的消息','确切的时间','确切知道'],
   ex_zh:'确切地说，在小动物看来，人类反应迟钝、动作迟缓。',ex_py:'Quèqiè de shuō, zài xiǎo dòngwù kànlái, rénlèi fǎnyìng chídùn, dòngzuò chíhuǎn.',ex_vn:'Nói chính xác thì, trong mắt động vật nhỏ, con người phản ứng chậm chạp, động tác lề mề.',
   exList:[
     {zh:'确切地说，在小动物看来，人类反应迟钝、动作迟缓。',py:'Quèqiè de shuō, zài xiǎo dòngwù kànlái, rénlèi fǎnyìng chídùn, dòngzuò chíhuǎn.',vn:'Nói chính xác thì, trong mắt động vật nhỏ, con người phản ứng chậm chạp, động tác lề mề.'},
     {zh:'到现在还没有确切的消息，大家先别着急。',py:'Dào xiànzài hái méiyǒu quèqiè de xiāoxi, dàjiā xiān bié zháojí.',vn:'Đến giờ vẫn chưa có tin chính xác, mọi người đừng vội lo.'},
     {zh:'当确切知道没人注意时，小偷才动手。',py:'Dāng quèqiè zhīdào méi rén zhùyì shí, xiǎotōu cái dòng shǒu.',vn:'Khi biết chắc không ai để ý, tên trộm mới ra tay.'}
   ],
   colloFull:[
     {zh:'确切地说',py:'quèqiè de shuō',vn:'nói cho chính xác thì'},
     {zh:'确切的消息',py:'quèqiè de xiāoxi',vn:'tin tức chính xác'},
     {zh:'确切的时间',py:'quèqiè de shíjiān',vn:'thời gian chính xác'},
     {zh:'确切知道',py:'quèqiè zhīdào',vn:'biết chắc chắn'},
     {zh:'确切的数字',py:'quèqiè de shùzì',vn:'con số chính xác'}
   ],
   patterns:[
     {s:'确切地说，……',m:'Nói cho chính xác thì … (chỉnh / làm rõ ý)'},
     {s:'确切的 + 消息 / 时间 / 答案',m:'Tin / thời gian / đáp án chính xác'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đợi có thời gian chính xác rồi tôi sẽ báo cho mọi người.',answer:'等有了确切的时间，我再通知大家。',answerPy:'Děng yǒule quèqiè de shíjiān, wǒ zài tōngzhī dàjiā.',
      note:'等……再…… = đợi … rồi mới … (ôn HSK 4–5).',pair:'等……再……'},
     {promptLang:'vi',prompt:'Nói cho chính xác thì, không phải tôi không muốn đi, mà là không có thời gian.',answer:'确切地说，不是我不想去，而是没有时间。',answerPy:'Quèqiè de shuō, bú shì wǒ bù xiǎng qù, ér shì méiyǒu shíjiān.',
      note:'不是……而是…… phủ định A, khẳng định B (ôn HSK 4).',pair:'不是……而是……'}
   ]},

  {n:15,zh:'迟钝',py:'chídùn',pos:'Tính từ',vn:'chậm chạp, không nhạy bén (phản ứng, cảm giác, suy nghĩ)',hv:'trì độn',em:'🐢',lesson:1,
   explain:['(Cảm giác, suy nghĩ, phản ứng) chậm, không nhanh nhạy: 反应迟钝, 感觉迟钝, 头脑迟钝. Trái nghĩa: 灵敏, 敏锐, 敏捷.','So với 迟缓: 迟钝 nói về sự NHẠY BÉN của đầu óc / giác quan; 迟缓 nói về TỐC ĐỘ của hành động, tiến triển.'],
   usage:'反应 / 感觉 / 头脑 / 思维 + 迟钝; 变得迟钝; (有点儿) 迟钝. Bài khoá: 人类反应迟钝、动作迟缓.',
   collo:['反应迟钝','感觉迟钝','变得迟钝','头脑迟钝'],
   ex_zh:'在小动物看来，人类反应迟钝、动作迟缓。',ex_py:'Zài xiǎo dòngwù kànlái, rénlèi fǎnyìng chídùn, dòngzuò chíhuǎn.',ex_vn:'Trong mắt động vật nhỏ, con người phản ứng chậm chạp, động tác lề mề.',
   exList:[
     {zh:'在小动物看来，人类反应迟钝、动作迟缓。',py:'Zài xiǎo dòngwù kànlái, rénlèi fǎnyìng chídùn, dòngzuò chíhuǎn.',vn:'Trong mắt động vật nhỏ, con người phản ứng chậm chạp, động tác lề mề.'},
     {zh:'随着年龄的增长，人的反应会越来越迟钝。',py:'Suízhe niánlíng de zēngzhǎng, rén de fǎnyìng huì yuè lái yuè chídùn.',vn:'Tuổi càng cao, phản ứng của con người càng chậm.'},
     {zh:'熬了一夜，我的头脑变得很迟钝，什么都想不起来。',py:'Áole yí yè, wǒ de tóunǎo biàn de hěn chídùn, shénme dōu xiǎng bu qǐlái.',vn:'Thức trắng một đêm, đầu óc tôi trở nên đờ đẫn, chẳng nhớ ra được gì.'}
   ],
   colloFull:[
     {zh:'反应迟钝',py:'fǎnyìng chídùn',vn:'phản ứng chậm'},
     {zh:'感觉迟钝',py:'gǎnjué chídùn',vn:'cảm giác kém nhạy'},
     {zh:'变得迟钝',py:'biàn de chídùn',vn:'trở nên chậm chạp'},
     {zh:'头脑迟钝',py:'tóunǎo chídùn',vn:'đầu óc chậm chạp'},
     {zh:'思维迟钝',py:'sīwéi chídùn',vn:'tư duy chậm'}
   ],
   patterns:[
     {s:'反应 / 感觉 / 头脑 + 迟钝',m:'Phản ứng / cảm giác / đầu óc chậm chạp'},
     {s:'变得 + 迟钝',m:'Trở nên kém nhạy bén'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thiếu ngủ lâu ngày không những làm hại sức khỏe, mà còn khiến người ta phản ứng chậm chạp.',answer:'长期缺少睡眠不但伤害身体，而且会让人反应迟钝。',answerPy:'Chángqī quēshǎo shuìmián búdàn shānghài shēntǐ, érqiě huì ràng rén fǎnyìng chídùn.',
      note:'不但……而且…… tăng tiến; 让 + người + tình trạng (ôn HSK 4).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Tôi không phải là không để ý, chỉ là trong chuyện tình cảm tôi hơi chậm hiểu.',answer:'我并不是不在意，只是在感情方面有点儿迟钝。',answerPy:'Wǒ bìng bú shì bú zàiyì, zhǐshì zài gǎnqíng fāngmiàn yǒudiǎnr chídùn.',
      note:'并不是……只是…… phủ định cách hiểu sai rồi giải thích; 在意 ôn HSK 6 bài 14.',pair:'并不是……只是……'}
   ]},

  {n:16,zh:'迟缓',py:'chíhuǎn',pos:'Tính từ',vn:'chậm chạp, rề rà, lờ đờ',hv:'trì hoãn',em:'🦥',lesson:1,
   explain:['(Hành động, tốc độ, tiến triển) chậm, không nhanh: 动作迟缓, 行动迟缓, 进展迟缓, 发展迟缓.','Chú ý: âm Hán–Việt "trì hoãn" nhưng KHÔNG có nghĩa "hoãn lại" (hoãn lại = 推迟 / 延期). 迟缓 chỉ là chậm.'],
   usage:'动作 / 行动 / 步伐 / 进展 / 发展 + 迟缓; 越来越迟缓; 显得迟缓. Bài khoá: 人类反应迟钝、动作迟缓.',
   collo:['动作迟缓','行动迟缓','进展迟缓','步伐迟缓'],
   ex_zh:'确切地说，在小动物看来，人类反应迟钝、动作迟缓。',ex_py:'Quèqiè de shuō, zài xiǎo dòngwù kànlái, rénlèi fǎnyìng chídùn, dòngzuò chíhuǎn.',ex_vn:'Nói chính xác thì, trong mắt động vật nhỏ, con người phản ứng chậm, động tác rề rà.',
   exList:[
     {zh:'确切地说，在小动物看来，人类反应迟钝、动作迟缓。',py:'Quèqiè de shuō, zài xiǎo dòngwù kànlái, rénlèi fǎnyìng chídùn, dòngzuò chíhuǎn.',vn:'Nói chính xác thì, trong mắt động vật nhỏ, con người phản ứng chậm, động tác rề rà.'},
     {zh:'爷爷年纪大了，行动越来越迟缓。',py:'Yéye niánjì dà le, xíngdòng yuè lái yuè chíhuǎn.',vn:'Ông nội tuổi đã cao, đi lại ngày càng chậm chạp.'},
     {zh:'由于资金不足，这个项目进展迟缓。',py:'Yóuyú zījīn bùzú, zhège xiàngmù jìnzhǎn chíhuǎn.',vn:'Do thiếu vốn, dự án này tiến triển chậm chạp.'}
   ],
   colloFull:[
     {zh:'动作迟缓',py:'dòngzuò chíhuǎn',vn:'động tác chậm chạp'},
     {zh:'行动迟缓',py:'xíngdòng chíhuǎn',vn:'đi lại chậm chạp'},
     {zh:'进展迟缓',py:'jìnzhǎn chíhuǎn',vn:'tiến triển chậm'},
     {zh:'步伐迟缓',py:'bùfá chíhuǎn',vn:'bước đi chậm chạp'},
     {zh:'发展迟缓',py:'fāzhǎn chíhuǎn',vn:'phát triển chậm'}
   ],
   patterns:[
     {s:'动作 / 行动 / 进展 + 迟缓',m:'Động tác / đi lại / tiến triển chậm'},
     {s:'越来越 + 迟缓',m:'Ngày càng chậm chạp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy động tác của ông cụ chậm chạp, nhưng đầu óc vẫn còn rất minh mẫn.',answer:'老人虽然动作迟缓，但头脑还很清醒。',answerPy:'Lǎorén suīrán dòngzuò chíhuǎn, dàn tóunǎo hái hěn qīngxǐng.',
      note:'虽然……但…… nhượng bộ; 清醒 ôn HSK 6 bài 8, 头脑 ôn bài 14.',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Do thời tiết xấu, công việc cứu hộ tiến triển rất chậm.',answer:'由于天气恶劣，救援工作进展得十分迟缓。',answerPy:'Yóuyú tiānqì èliè, jiùyuán gōngzuò jìnzhǎn de shífēn chíhuǎn.',
      note:'由于 nêu nguyên nhân (văn viết); V + 得 + bổ ngữ trình độ (ôn HSK 4–5).',pair:'由于'}
   ]},

  {n:17,zh:'庞大',py:'pángdà',pos:'Tính từ',vn:'khổng lồ, to lớn, đồ sộ',hv:'bàng đại',em:'🐘',lesson:1,
   explain:['(Hình thể, tổ chức, số lượng) rất lớn — thường lớn quá mức, cồng kềnh: 庞大的身体, 庞大的机构, 数量庞大, 开支庞大.','Hay mang sắc thái "lớn đến mức nặng nề, khó điều khiển"; bài khoá: 庞大、笨拙的大象.'],
   usage:'庞大的 + 身体 / 机构 / 队伍 / 计划 / 数字; 规模 / 数量 / 开支 + 庞大. Không dùng cho người cao lớn thường ngày (dùng 高大).',
   collo:['庞大的大象','庞大的机构','数量庞大','规模庞大'],
   ex_zh:'它们看人类，就像人类看庞大、笨拙的大象。',ex_py:'Tāmen kàn rénlèi, jiù xiàng rénlèi kàn pángdà, bènzhuō de dàxiàng.',ex_vn:'Chúng nhìn con người cũng giống như con người nhìn những con voi to lớn, vụng về.',
   exList:[
     {zh:'它们看人类，就像人类看庞大、笨拙的大象。',py:'Tāmen kàn rénlèi, jiù xiàng rénlèi kàn pángdà, bènzhuō de dàxiàng.',vn:'Chúng nhìn con người cũng giống như con người nhìn những con voi to lớn, vụng về.'},
     {zh:'这家公司机构庞大，办一件小事也要好几个部门签字。',py:'Zhè jiā gōngsī jīgòu pángdà, bàn yí jiàn xiǎoshì yě yào hǎo jǐ ge bùmén qiānzì.',vn:'Công ty này bộ máy cồng kềnh, làm một việc nhỏ cũng cần mấy phòng ban ký.'},
     {zh:'每年春节回家的人数量庞大，交通压力非常大。',py:'Měi nián Chūnjié huí jiā de rén shùliàng pángdà, jiāotōng yālì fēicháng dà.',vn:'Mỗi năm số người về quê ăn Tết cực kỳ đông, áp lực giao thông rất lớn.'}
   ],
   colloFull:[
     {zh:'庞大的大象',py:'pángdà de dàxiàng',vn:'con voi khổng lồ'},
     {zh:'庞大的机构',py:'pángdà de jīgòu',vn:'bộ máy cồng kềnh'},
     {zh:'数量庞大',py:'shùliàng pángdà',vn:'số lượng khổng lồ'},
     {zh:'规模庞大',py:'guīmó pángdà',vn:'quy mô đồ sộ'},
     {zh:'开支庞大',py:'kāizhī pángdà',vn:'chi tiêu khổng lồ'}
   ],
   patterns:[
     {s:'庞大的 + N',m:'… khổng lồ, đồ sộ'},
     {s:'数量 / 规模 / 开支 + 庞大',m:'Số lượng / quy mô / chi tiêu rất lớn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch này quy mô đồ sộ quá, chỉ dựa vào mấy người chúng ta thì căn bản không hoàn thành nổi.',answer:'这个计划规模太庞大了，光靠我们几个人根本完成不了。',answerPy:'Zhège jìhuà guīmó tài pángdà le, guāng kào wǒmen jǐ ge rén gēnběn wánchéng bu liǎo.',
      note:'光靠…… = chỉ dựa vào; 根本 + phủ định; bổ ngữ khả năng V不了 (ôn HSK 5).',pair:'V不了'},
     {promptLang:'vi',prompt:'Dù có khổng lồ đến đâu, loài voi cũng chẳng làm gì được đàn kiến nhỏ bé.',answer:'大象无论多么庞大，也拿小小的蚂蚁没办法。',answerPy:'Dàxiàng wúlùn duōme pángdà, yě ná xiǎoxiǎo de mǎyǐ méi bànfǎ.',
      note:'无论多么……也…… (ôn HSK 5); 拿……没办法 = chịu thua, bó tay với ….',pair:'无论……也……'}
   ]},

  {n:18,zh:'笨拙',py:'bènzhuō',pos:'Tính từ',vn:'vụng về, lóng ngóng, nặng nề',hv:'bổn chuyết',em:'🐻',lesson:1,
   explain:['(Động tác, cử chỉ, cách làm) không khéo, không linh hoạt: 动作笨拙, 笨拙的样子, 笨拙地 + V.','Văn viết hơn 笨; 笨 thường chê trí tuệ (ngốc), còn 笨拙 chủ yếu nói động tác, kỹ năng vụng về. Trái nghĩa: 灵巧, 敏捷.'],
   usage:'动作 / 样子 / 身体 + 笨拙; 笨拙地 + V (走 / 学 / 模仿); 显得笨拙.',
   collo:['动作笨拙','笨拙的大象','笨拙地走','显得笨拙'],
   ex_zh:'它们看人类，就像人类看庞大、笨拙的大象。',ex_py:'Tāmen kàn rénlèi, jiù xiàng rénlèi kàn pángdà, bènzhuō de dàxiàng.',ex_vn:'Chúng nhìn con người cũng như con người nhìn những con voi khổng lồ, vụng về.',
   exList:[
     {zh:'它们看人类，就像人类看庞大、笨拙的大象。',py:'Tāmen kàn rénlèi, jiù xiàng rénlèi kàn pángdà, bènzhuō de dàxiàng.',vn:'Chúng nhìn con người cũng như con người nhìn những con voi khổng lồ, vụng về.'},
     {zh:'小企鹅笨拙地走着，样子可爱极了。',py:'Xiǎo qǐ\'é bènzhuō de zǒuzhe, yàngzi kě\'ài jí le.',vn:'Chú chim cánh cụt con lạch bạch bước đi, trông đáng yêu vô cùng.'},
     {zh:'他第一次包饺子，动作显得有些笨拙。',py:'Tā dì-yī cì bāo jiǎozi, dòngzuò xiǎnde yǒuxiē bènzhuō.',vn:'Lần đầu gói sủi cảo, động tác của cậu ấy trông hơi lóng ngóng.'}
   ],
   colloFull:[
     {zh:'动作笨拙',py:'dòngzuò bènzhuō',vn:'động tác vụng về'},
     {zh:'笨拙的大象',py:'bènzhuō de dàxiàng',vn:'con voi nặng nề vụng về'},
     {zh:'笨拙地走',py:'bènzhuō de zǒu',vn:'đi lạch bạch, lóng ngóng'},
     {zh:'显得笨拙',py:'xiǎnde bènzhuō',vn:'trông vụng về'},
     {zh:'笨拙的样子',py:'bènzhuō de yàngzi',vn:'dáng vẻ lóng ngóng'}
   ],
   patterns:[
     {s:'动作 / 样子 + 笨拙',m:'Động tác / dáng vẻ vụng về'},
     {s:'笨拙地 + V',m:'Làm … một cách vụng về'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy động tác của cậu ấy hơi vụng về, nhưng rất chăm chỉ, chẳng mấy chốc đã học được.',answer:'他的动作虽然有些笨拙，但他很勤奋，不久就学会了。',answerPy:'Tā de dòngzuò suīrán yǒuxiē bènzhuō, dàn tā hěn qínfèn, bùjiǔ jiù xuéhuì le.',
      note:'虽然……但……; 不久就…… = chẳng bao lâu đã (ôn HSK 4–5).',pair:'不久就……'},
     {promptLang:'vi',prompt:'Nhìn con gấu lóng ngóng trèo cây, lũ trẻ cười ngặt nghẽo.',answer:'看着那只熊笨拙地爬树，孩子们笑得前仰后合。',answerPy:'Kànzhe nà zhī xióng bènzhuō de pá shù, háizimen xiào de qiányǎng-hòuhé.',
      note:'看着…… (V着 làm trạng ngữ); V + 得 + thành ngữ chỉ mức độ (ôn HSK 5).',pair:'V得 + bổ ngữ trạng thái'}
   ]},

  {n:19,zh:'比方',py:'bǐfang',pos:'Động từ',vn:'ví dụ như, chẳng hạn như; so sánh ví von',hv:'tỷ phương',em:'💡',lesson:1,
   explain:['比方说 = 比如说 / 例如: nêu ví dụ để giải thích một điều khó hiểu (khẩu ngữ): 比方说，当一个间隔频率较低的光刺激我们的眼睛时…….','Danh từ / động từ: sự so sánh, ví von: 打个比方 (lấy một ví dụ so sánh), 用……比方…….'],
   usage:'比方说，……; 打个比方; 比方 + (说) + ví dụ (等等). Vị trí: đầu câu hoặc trước các ví dụ liệt kê.',
   collo:['比方说','打个比方','比方说……等等','举个比方'],
   ex_zh:'比方说，当一个间隔频率较低的光刺激我们的眼睛时，我们看到的是一明一暗的闪烁。',ex_py:'Bǐfang shuō, dāng yí ge jiàngé pínlǜ jiào dī de guāng cìjī wǒmen de yǎnjing shí, wǒmen kàndào de shì yì míng yí àn de shǎnshuò.',ex_vn:'Chẳng hạn, khi một nguồn sáng có tần số ngắt quãng khá thấp kích thích mắt chúng ta, cái ta nhìn thấy là sự nhấp nháy lúc sáng lúc tối.',
   exList:[
     {zh:'比方说，当一个间隔频率较低的光刺激我们的眼睛时，我们看到的是一明一暗的闪烁。',py:'Bǐfang shuō, dāng yí ge jiàngé pínlǜ jiào dī de guāng cìjī wǒmen de yǎnjing shí, wǒmen kàndào de shì yì míng yí àn de shǎnshuò.',vn:'Chẳng hạn, khi một nguồn sáng có tần số ngắt quãng khá thấp kích thích mắt chúng ta, cái ta nhìn thấy là sự nhấp nháy lúc sáng lúc tối.'},
     {zh:'我非常喜欢运动，比方说游泳、打篮球、爬山等等。',py:'Wǒ fēicháng xǐhuan yùndòng, bǐfang shuō yóuyǒng, dǎ lánqiú, pá shān děngděng.',vn:'Tôi rất thích thể thao, chẳng hạn như bơi lội, chơi bóng rổ, leo núi v.v.'},
     {zh:'打个比方吧，学外语就像爬山，越往上越难，可是风景也越好。',py:'Dǎ ge bǐfang ba, xué wàiyǔ jiù xiàng pá shān, yuè wǎng shàng yuè nán, kěshì fēngjǐng yě yuè hǎo.',vn:'Lấy một ví dụ nhé: học ngoại ngữ giống như leo núi, càng lên cao càng khó, nhưng cảnh cũng càng đẹp.'}
   ],
   colloFull:[
     {zh:'比方说',py:'bǐfang shuō',vn:'chẳng hạn như, ví dụ'},
     {zh:'打个比方',py:'dǎ ge bǐfang',vn:'lấy một ví dụ so sánh'},
     {zh:'比方说……等等',py:'bǐfang shuō…… děngděng',vn:'chẳng hạn … v.v.'},
     {zh:'举个比方',py:'jǔ ge bǐfang',vn:'nêu một ví dụ'},
     {zh:'用……作比方',py:'yòng…… zuò bǐfang',vn:'lấy … làm ví von'}
   ],
   patterns:[
     {s:'……，比方说 A、B、C 等等',m:'…, chẳng hạn như A, B, C v.v.'},
     {s:'打个比方，A 就像 B',m:'Lấy ví dụ: A giống như B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở thành phố này có nhiều món ngon lắm, chẳng hạn như bún chả, phở v.v.',answer:'这个城市有很多好吃的东西，比方说烤肉米线、牛肉粉等等。',answerPy:'Zhège chéngshì yǒu hěn duō hǎochī de dōngxi, bǐfang shuō kǎoròu mǐxiàn, niúròufěn děngděng.',
      note:'比方说 + liệt kê + 等等 (ôn HSK 4 比如 / 例如).',pair:'比如 / 比方说'},
     {promptLang:'vi',prompt:'Lấy một ví dụ, thời gian giống như nước trong miếng bọt biển, chỉ cần chịu vắt thì luôn có.',answer:'打个比方，时间就像海绵里的水，只要愿意挤，总还是有的。',answerPy:'Dǎ ge bǐfang, shíjiān jiù xiàng hǎimián li de shuǐ, zhǐyào yuànyì jǐ, zǒng háishi yǒu de.',
      note:'A 就像 B (so sánh); 只要……总…… điều kiện đủ (ôn HSK 4).',pair:'只要……就 / 总……'}
   ]},

  {n:20,zh:'间隔',py:'jiàngé',pos:'Động từ',vn:'cách nhau, gián đoạn; khoảng cách (thời gian / không gian)',hv:'gian cách',em:'⏱️',lesson:1,
   explain:['Động từ: (hai sự việc, hai vật) cách nhau một khoảng thời gian / không gian: 两次考试间隔一个月, 每间隔五米种一棵树.','Danh từ: khoảng cách, khoảng ngắt: 间隔的缩短, 时间间隔. Chú ý 间 đọc jiàn (thanh 4), không phải jiān.'],
   usage:'A 和 B 间隔 + thời gian / khoảng cách; 每间隔……; 间隔 + 时间 / 频率 / 距离; ……间隔的缩短 / 延长.',
   collo:['间隔频率','时间间隔','间隔的缩短','每间隔五米'],
   ex_zh:'随着光刺激间隔的缩短，我们的视力感到的就会是一个连续的光。',ex_py:'Suízhe guāng cìjī jiàngé de suōduǎn, wǒmen de shìlì gǎndào de jiù huì shì yí ge liánxù de guāng.',ex_vn:'Khi khoảng ngắt giữa các lần kích thích ánh sáng ngắn lại, thị lực của ta sẽ cảm nhận thành một luồng sáng liên tục.',
   exList:[
     {zh:'随着光刺激间隔的缩短，我们的视力感到的就会是一个连续的光。',py:'Suízhe guāng cìjī jiàngé de suōduǎn, wǒmen de shìlì gǎndào de jiù huì shì yí ge liánxù de guāng.',vn:'Khi khoảng ngắt giữa các lần kích thích ánh sáng ngắn lại, thị lực của ta sẽ cảm nhận thành một luồng sáng liên tục.'},
     {zh:'这种药每天吃两次，中间要间隔六个小时以上。',py:'Zhè zhǒng yào měi tiān chī liǎng cì, zhōngjiān yào jiàngé liù ge xiǎoshí yǐshàng.',vn:'Thuốc này mỗi ngày uống hai lần, giữa hai lần phải cách nhau trên sáu tiếng.'},
     {zh:'马路两边每间隔十米就种着一棵树。',py:'Mǎlù liǎngbiān měi jiàngé shí mǐ jiù zhòngzhe yì kē shù.',vn:'Hai bên đường cứ cách mười mét lại trồng một cây.'}
   ],
   colloFull:[
     {zh:'间隔频率',py:'jiàngé pínlǜ',vn:'tần số ngắt quãng'},
     {zh:'时间间隔',py:'shíjiān jiàngé',vn:'khoảng cách thời gian'},
     {zh:'间隔的缩短',py:'jiàngé de suōduǎn',vn:'sự rút ngắn khoảng cách'},
     {zh:'每间隔五米',py:'měi jiàngé wǔ mǐ',vn:'cứ cách năm mét'},
     {zh:'间隔一个月',py:'jiàngé yí ge yuè',vn:'cách nhau một tháng'}
   ],
   patterns:[
     {s:'A 和 B + 间隔 + thời gian / khoảng cách',m:'A và B cách nhau …'},
     {s:'每间隔…… + 就……',m:'Cứ cách … lại …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai kỳ thi cách nhau chưa đầy một tháng, vì vậy thời gian ôn tập rất gấp.',answer:'两次考试间隔不到一个月，因此复习的时间很紧张。',answerPy:'Liǎng cì kǎoshì jiàngé bú dào yí ge yuè, yīncǐ fùxí de shíjiān hěn jǐnzhāng.',
      note:'不到 + số lượng = chưa đến; 因此 nối kết quả (ôn HSK 4).',pair:'因此'},
     {promptLang:'vi',prompt:'Xe buýt tuyến này cứ cách mười phút lại có một chuyến, rất tiện.',answer:'这路公交车每间隔十分钟就有一班，非常方便。',answerPy:'Zhè lù gōngjiāochē měi jiàngé shí fēnzhōng jiù yǒu yì bān, fēicháng fāngbiàn.',
      note:'每……就…… diễn tả quy luật lặp lại (ôn HSK 4).',pair:'每……就……'}
   ]},

  {n:21,zh:'闪烁',py:'shǎnshuò',pos:'Động từ',vn:'lấp lánh, lập lòe, nhấp nháy',hv:'thiểm thước',em:'✨',lesson:1,
   explain:['(Ánh sáng) lúc sáng lúc tối, chập chờn không ổn định: 星星闪烁, 灯光闪烁, 一明一暗的闪烁.','Nghĩa bóng: (lời nói) úp mở, không rõ ràng: 闪烁其词 (nói úp úp mở mở).'],
   usage:'星星 / 灯光 / 霓虹灯 / 泪光 + 闪烁; 闪烁着 + ánh sáng; 一明一暗的闪烁 (danh từ hoá); 闪烁其词.',
   collo:['星星闪烁','灯光闪烁','一明一暗的闪烁','闪烁其词'],
   ex_zh:'当一个间隔频率较低的光刺激我们的眼睛时，我们看到的是一明一暗的闪烁。',ex_py:'Dāng yí ge jiàngé pínlǜ jiào dī de guāng cìjī wǒmen de yǎnjing shí, wǒmen kàndào de shì yì míng yí àn de shǎnshuò.',ex_vn:'Khi một nguồn sáng có tần số ngắt quãng khá thấp kích thích mắt, cái ta thấy là sự nhấp nháy lúc sáng lúc tối.',
   exList:[
     {zh:'当一个间隔频率较低的光刺激我们的眼睛时，我们看到的是一明一暗的闪烁。',py:'Dāng yí ge jiàngé pínlǜ jiào dī de guāng cìjī wǒmen de yǎnjing shí, wǒmen kàndào de shì yì míng yí àn de shǎnshuò.',vn:'Khi một nguồn sáng có tần số ngắt quãng khá thấp kích thích mắt, cái ta thấy là sự nhấp nháy lúc sáng lúc tối.'},
     {zh:'夜空中星星闪烁，像无数双眼睛在眨呀眨。',py:'Yèkōng zhōng xīngxing shǎnshuò, xiàng wúshù shuāng yǎnjing zài zhǎ ya zhǎ.',vn:'Trên bầu trời đêm sao lấp lánh, như vô số đôi mắt đang chớp chớp.'},
     {zh:'问他去哪儿了，他闪烁其词，不肯说实话。',py:'Wèn tā qù nǎr le, tā shǎnshuò-qící, bù kěn shuō shíhuà.',vn:'Hỏi cậu ta đã đi đâu, cậu ta cứ úp úp mở mở, không chịu nói thật.'}
   ],
   colloFull:[
     {zh:'星星闪烁',py:'xīngxing shǎnshuò',vn:'sao lấp lánh'},
     {zh:'灯光闪烁',py:'dēngguāng shǎnshuò',vn:'ánh đèn nhấp nháy'},
     {zh:'一明一暗的闪烁',py:'yì míng yí àn de shǎnshuò',vn:'nhấp nháy lúc sáng lúc tối'},
     {zh:'闪烁其词',py:'shǎnshuò-qící',vn:'nói úp úp mở mở'},
     {zh:'闪烁着泪光',py:'shǎnshuòzhe lèiguāng',vn:'long lanh ánh lệ'}
   ],
   patterns:[
     {s:'ánh sáng + 闪烁 / 闪烁着 + ánh sáng',m:'… lấp lánh, nhấp nháy'},
     {s:'一明一暗的闪烁',m:'Sự nhấp nháy lúc sáng lúc tối'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đêm đến, đèn neon cả con phố nhấp nháy, náo nhiệt vô cùng.',answer:'到了晚上，整条街的霓虹灯都在闪烁，热闹极了。',answerPy:'Dàole wǎnshang, zhěng tiáo jiē de níhóngdēng dōu zài shǎnshuò, rènao jí le.',
      note:'在 + V: đang diễn ra; Adj + 极了 (ôn HSK 3–4).',pair:'Adj + 极了'},
     {promptLang:'vi',prompt:'Nhắc đến mẹ, trong mắt cậu ấy long lanh ánh lệ.',answer:'一提起妈妈，他的眼里就闪烁着泪光。',answerPy:'Yì tíqǐ māma, tā de yǎn li jiù shǎnshuòzhe lèiguāng.',
      note:'一……就……; V着 chỉ trạng thái kéo dài (ôn HSK 4).',pair:'一……就……'}
   ]},

  {n:22,zh:'视力',py:'shìlì',pos:'Danh từ',vn:'thị lực, sức nhìn',hv:'thị lực',em:'👓',lesson:1,
   explain:['Khả năng nhìn rõ vật của mắt: 视力很好, 视力下降, 检查视力, 保护视力.','Trùng khít với Hán–Việt "thị lực"; bài khoá dùng rộng hơn: 我们的视力感到的就会是一个连续的光 (thị giác cảm nhận).'],
   usage:'视力 + 好 / 差 / 下降 / 模糊 / 恢复; 保护 / 检查 / 影响 + 视力; 视力 + 1.0 / 5.0 (số đo).',
   collo:['视力下降','保护视力','检查视力','视力很好'],
   ex_zh:'随着光刺激间隔的缩短，我们的视力感到的就会是一个连续的光。',ex_py:'Suízhe guāng cìjī jiàngé de suōduǎn, wǒmen de shìlì gǎndào de jiù huì shì yí ge liánxù de guāng.',ex_vn:'Khi khoảng ngắt giữa các lần kích thích ánh sáng ngắn lại, thị giác ta sẽ cảm nhận thành một luồng sáng liên tục.',
   exList:[
     {zh:'随着光刺激间隔的缩短，我们的视力感到的就会是一个连续的光。',py:'Suízhe guāng cìjī jiàngé de suōduǎn, wǒmen de shìlì gǎndào de jiù huì shì yí ge liánxù de guāng.',vn:'Khi khoảng ngắt giữa các lần kích thích ánh sáng ngắn lại, thị giác ta sẽ cảm nhận thành một luồng sáng liên tục.'},
     {zh:'整天看手机，视力下降得很厉害。',py:'Zhěngtiān kàn shǒujī, shìlì xiàjiàng de hěn lìhai.',vn:'Suốt ngày xem điện thoại, thị lực giảm sút nghiêm trọng.'},
     {zh:'老鹰的视力非常好，能从高空看清地上的小动物。',py:'Lǎoyīng de shìlì fēicháng hǎo, néng cóng gāokōng kànqīng dì shang de xiǎo dòngwù.',vn:'Thị lực của đại bàng cực tốt, có thể từ trên cao nhìn rõ động vật nhỏ dưới mặt đất.'}
   ],
   colloFull:[
     {zh:'视力下降',py:'shìlì xiàjiàng',vn:'thị lực giảm sút'},
     {zh:'保护视力',py:'bǎohù shìlì',vn:'bảo vệ thị lực'},
     {zh:'检查视力',py:'jiǎnchá shìlì',vn:'kiểm tra thị lực'},
     {zh:'视力很好',py:'shìlì hěn hǎo',vn:'thị lực rất tốt'},
     {zh:'视力模糊',py:'shìlì móhu',vn:'mắt nhìn mờ'}
   ],
   patterns:[
     {s:'视力 + 下降 / 模糊 / 恢复',m:'Thị lực giảm / mờ / hồi phục'},
     {s:'保护 / 检查 / 影响 + 视力',m:'Bảo vệ / kiểm tra / ảnh hưởng thị lực'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để bảo vệ thị lực, cứ học bốn mươi phút thì nên nhìn ra xa một lúc.',answer:'为了保护视力，每学习四十分钟就应该往远处看一会儿。',answerPy:'Wèile bǎohù shìlì, měi xuéxí sìshí fēnzhōng jiù yīnggāi wǎng yuǎnchù kàn yíhuìr.',
      note:'为了 + mục đích; 每……就…… (ôn HSK 4).',pair:'为了'},
     {promptLang:'vi',prompt:'Nếu không chú ý nghỉ ngơi, thị lực của em sẽ ngày càng kém.',answer:'如果不注意休息，你的视力会越来越差。',answerPy:'Rúguǒ bú zhùyì xiūxi, nǐ de shìlì huì yuè lái yuè chà.',
      note:'如果……会…… giả thiết; 越来越 + Adj (ôn HSK 3–4).',pair:'越来越'}
   ]},

  {n:23,zh:'姑且',py:'gūqiě',pos:'Phó từ',vn:'tạm thời, tạm (cứ … đã)',hv:'cô thả',em:'⏳',lesson:1,
   explain:['Biểu thị trong tình huống bất đắc dĩ thì TẠM THỜI làm như vậy, sau sẽ tính cách khác; mang ý miễn cưỡng, nhượng bộ (chú thích 3).','Đứng trước động từ, hay đi với 先 / 吧: 你姑且先答应下来; 姑且不论 / 姑且不说 = tạm chưa bàn đến.'],
   usage:'姑且 + (先) + V (+ 吧); ……姑且不论, ……; A 姑且 + V + 着, 以后再…….',
   collo:['姑且换一个称呼','姑且先答应下来','姑且不论','姑且听听'],
   ex_zh:'狗，哦，我们姑且换一个文雅的称呼吧，犬的CFF为80HZ。',ex_py:'Gǒu, ò, wǒmen gūqiě huàn yí ge wényǎ de chēnghu ba, quǎn de CFF wéi bāshí HZ.',ex_vn:'Chó — ồ, chúng ta tạm đổi sang một cách gọi văn nhã vậy — CFF của "khuyển" là 80 Hz.',
   exList:[
     {zh:'狗，哦，我们姑且换一个文雅的称呼吧，犬的CFF为80HZ。',py:'Gǒu, ò, wǒmen gūqiě huàn yí ge wényǎ de chēnghu ba, quǎn de CFF wéi bāshí HZ.',vn:'Chó — ồ, chúng ta tạm đổi sang một cách gọi văn nhã vậy — CFF của "khuyển" là 80 Hz.'},
     {zh:'这件事，你姑且先答应下来，然后再慢慢想办法。',py:'Zhè jiàn shì, nǐ gūqiě xiān dāying xiàlái, ránhòu zài mànmàn xiǎng bànfǎ.',vn:'Việc này, cậu cứ tạm nhận lời đã, rồi từ từ nghĩ cách.'},
     {zh:'他的看法是否正确姑且不论，但有一点可以肯定：腐败不得人心。',py:'Tā de kànfǎ shìfǒu zhèngquè gūqiě bú lùn, dàn yǒu yì diǎn kěyǐ kěndìng: fǔbài bù dé rénxīn.',vn:'Quan điểm của ông ấy đúng hay không tạm chưa bàn, nhưng có một điều chắc chắn: tham nhũng không được lòng dân.'}
   ],
   colloFull:[
     {zh:'姑且换一个称呼',py:'gūqiě huàn yí ge chēnghu',vn:'tạm đổi một cách gọi'},
     {zh:'姑且先答应下来',py:'gūqiě xiān dāying xiàlái',vn:'cứ tạm nhận lời đã'},
     {zh:'姑且不论',py:'gūqiě bú lùn',vn:'tạm chưa bàn đến'},
     {zh:'姑且听听',py:'gūqiě tīngting',vn:'cứ tạm nghe vậy'},
     {zh:'姑且这么办',py:'gūqiě zhème bàn',vn:'tạm làm như thế đã'}
   ],
   patterns:[
     {s:'姑且 + (先) + V (+ 吧)，以后再……',m:'Cứ tạm … đã, sau hẵng …'},
     {s:'A 姑且不论，……',m:'A tạm chưa bàn, (nhưng) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chưa tìm được nhà phù hợp, mình cứ tạm ở nhà bạn vài hôm đã.',answer:'还没找到合适的房子，我姑且在朋友家住几天吧。',answerPy:'Hái méi zhǎodào héshì de fángzi, wǒ gūqiě zài péngyou jiā zhù jǐ tiān ba.',
      note:'还没 + V: chưa …; 姑且 + V + 吧 tạm thời chấp nhận (gần nghĩa 将就 bài 14).',pair:'还没……'},
     {promptLang:'vi',prompt:'Chuyện đúng sai tạm chưa bàn, cậu đánh người trước là không đúng.',answer:'谁对谁错姑且不论，你先动手打人就是不对。',answerPy:'Shéi duì shéi cuò gūqiě bú lùn, nǐ xiān dòng shǒu dǎ rén jiù shì bú duì.',
      note:'谁……谁…… đại từ nghi vấn hô ứng; 就是 nhấn mạnh khẳng định (ôn HSK 5).',pair:'就是 (nhấn mạnh)'}
   ]},

  {n:24,zh:'文雅',py:'wényǎ',pos:'Tính từ',vn:'nho nhã, lịch sự, văn vẻ',hv:'văn nhã',em:'🎩',lesson:1,
   explain:['(Lời nói, cử chỉ, cách gọi) lịch sự, có văn hóa, không thô tục: 说话文雅, 举止文雅, 文雅的称呼. Trái nghĩa: 粗俗, 粗鲁.','Bài khoá dùng hài hước: gọi 狗 (chó) là 犬 (khuyển) cho "văn nhã" hơn.'],
   usage:'说话 / 举止 / 谈吐 + 文雅; 文雅的 + 称呼 / 名字 / 说法; 显得很文雅.',
   collo:['文雅的称呼','举止文雅','说话文雅','谈吐文雅'],
   ex_zh:'狗，哦，我们姑且换一个文雅的称呼吧，犬的CFF为80HZ。',ex_py:'Gǒu, ò, wǒmen gūqiě huàn yí ge wényǎ de chēnghu ba, quǎn de CFF wéi bāshí HZ.',ex_vn:'Chó — ồ, chúng ta tạm đổi sang một cách gọi văn nhã vậy — CFF của "khuyển" là 80 Hz.',
   exList:[
     {zh:'狗，哦，我们姑且换一个文雅的称呼吧，犬的CFF为80HZ。',py:'Gǒu, ò, wǒmen gūqiě huàn yí ge wényǎ de chēnghu ba, quǎn de CFF wéi bāshí HZ.',vn:'Chó — ồ, chúng ta tạm đổi sang một cách gọi văn nhã vậy — CFF của "khuyển" là 80 Hz.'},
     {zh:'她举止文雅，说话温和，大家都很喜欢她。',py:'Tā jǔzhǐ wényǎ, shuōhuà wēnhé, dàjiā dōu hěn xǐhuan tā.',vn:'Cô ấy cử chỉ nho nhã, ăn nói nhẹ nhàng, ai cũng quý.'},
     {zh:'“去洗手间”比“去厕所”说得更文雅一些。',py:'“Qù xǐshǒujiān” bǐ “qù cèsuǒ” shuō de gèng wényǎ yìxiē.',vn:'Nói "đi nhà vệ sinh (洗手间)" lịch sự hơn "đi toilet (厕所)" một chút.'}
   ],
   colloFull:[
     {zh:'文雅的称呼',py:'wényǎ de chēnghu',vn:'cách gọi văn nhã'},
     {zh:'举止文雅',py:'jǔzhǐ wényǎ',vn:'cử chỉ nho nhã'},
     {zh:'说话文雅',py:'shuōhuà wényǎ',vn:'ăn nói lịch sự'},
     {zh:'谈吐文雅',py:'tántǔ wényǎ',vn:'lời lẽ nho nhã'},
     {zh:'文雅的说法',py:'wényǎ de shuōfǎ',vn:'cách nói lịch sự'}
   ],
   patterns:[
     {s:'举止 / 说话 / 谈吐 + 文雅',m:'Cử chỉ / ăn nói / lời lẽ nho nhã'},
     {s:'A 比 B + 更文雅',m:'A lịch sự hơn B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy trông nho nhã như vậy, không ngờ lại nói ra những lời thô tục đến thế.',answer:'他看起来那么文雅，没想到竟然说出这么粗俗的话。',answerPy:'Tā kàn qǐlái nàme wényǎ, méi xiǎngdào jìngrán shuō chū zhème cūsú de huà.',
      note:'没想到……竟然…… = không ngờ … lại (ôn HSK 5); 看起来 = trông có vẻ.',pair:'竟然'},
     {promptLang:'vi',prompt:'Viết bài văn thì nên dùng những từ nho nhã một chút, đừng quá khẩu ngữ.',answer:'写文章的时候，最好用文雅一点儿的词，别太口语化。',answerPy:'Xiě wénzhāng de shíhou, zuìhǎo yòng wényǎ yìdiǎnr de cí, bié tài kǒuyǔhuà.',
      note:'Adj + 一点儿 + 的 + N (so sánh ngầm); 最好 = tốt nhất nên (ôn HSK 4).',pair:'Adj + 一点儿'}
   ]},

  {n:25,zh:'犬',py:'quǎn',pos:'Danh từ',vn:'chó (khuyển)',hv:'khuyển',em:'🐕',lesson:1,
   explain:['Cách gọi con chó trong văn viết, khoa học, văn trang trọng: 警犬 (chó nghiệp vụ), 导盲犬 (chó dẫn đường cho người mù), 犬类.','Khẩu ngữ thường dùng 狗; 犬 ít đứng một mình trong khẩu ngữ. Bộ thủ 犭 (khuyển) trong 猫, 狗, 猪, 狼… đều liên quan đến 犬.'],
   usage:'警犬 / 导盲犬 / 牧羊犬 / 犬类; văn viết: 犬的CFF为80HZ. Không nói 一只犬 trong khẩu ngữ (nói 一只狗 / 一条狗).',
   collo:['警犬','导盲犬','犬的眼里','犬类'],
   ex_zh:'在犬的眼里，电视画面不是连续的，而是一系列静止图像的迅速变换。',ex_py:'Zài quǎn de yǎn li, diànshì huàmiàn bú shì liánxù de, ér shì yí xìliè jìngzhǐ túxiàng de xùnsù biànhuàn.',ex_vn:'Trong mắt loài chó, hình ảnh ti vi không liên tục, mà là một loạt ảnh tĩnh thay đổi rất nhanh.',
   exList:[
     {zh:'在犬的眼里，电视画面不是连续的，而是一系列静止图像的迅速变换。',py:'Zài quǎn de yǎn li, diànshì huàmiàn bú shì liánxù de, ér shì yí xìliè jìngzhǐ túxiàng de xùnsù biànhuàn.',vn:'Trong mắt loài chó, hình ảnh ti vi không liên tục, mà là một loạt ảnh tĩnh thay đổi rất nhanh.'},
     {zh:'警犬的嗅觉非常灵敏，能帮助警察找到很多线索。',py:'Jǐngquǎn de xiùjué fēicháng língmǐn, néng bāngzhù jǐngchá zhǎodào hěn duō xiànsuǒ.',vn:'Khứu giác của chó nghiệp vụ cực kỳ nhạy, có thể giúp cảnh sát tìm ra nhiều manh mối.'},
     {zh:'有了导盲犬，盲人出门方便多了。',py:'Yǒule dǎomángquǎn, mángrén chūmén fāngbiàn duō le.',vn:'Có chó dẫn đường, người mù ra ngoài thuận tiện hơn nhiều.'}
   ],
   colloFull:[
     {zh:'警犬',py:'jǐngquǎn',vn:'chó nghiệp vụ'},
     {zh:'导盲犬',py:'dǎomángquǎn',vn:'chó dẫn đường cho người mù'},
     {zh:'犬的眼里',py:'quǎn de yǎn li',vn:'trong mắt loài chó'},
     {zh:'犬类',py:'quǎnlèi',vn:'loài chó'},
     {zh:'牧羊犬',py:'mùyángquǎn',vn:'chó chăn cừu'}
   ],
   patterns:[
     {s:'N + 犬 (警 / 导盲 / 牧羊)',m:'Chó … (theo chức năng)'},
     {s:'犬 (văn viết) — 狗 (khẩu ngữ)',m:'Cùng chỉ con chó, khác sắc thái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chó nghiệp vụ không chỉ thông minh, mà còn rất trung thành với người huấn luyện.',answer:'警犬不但聪明，而且对训练它的人非常忠诚。',answerPy:'Jǐngquǎn búdàn cōngming, érqiě duì xùnliàn tā de rén fēicháng zhōngchéng.',
      note:'不但……而且……; 对 + người + Adj (ôn HSK 4).',pair:'对……'},
     {promptLang:'vi',prompt:'Nghe nói trong mắt chó, thế giới không nhiều màu sắc như trong mắt người.',answer:'听说在犬的眼里，世界并不像人眼中那么丰富多彩。',answerPy:'Tīngshuō zài quǎn de yǎn li, shìjiè bìng bú xiàng rényǎn zhōng nàme fēngfù duōcǎi.',
      note:'在……眼里 = trong mắt …; A 不像 B 那么 + Adj (so sánh kém, ôn HSK 4).',pair:'A不像B那么……'}
   ]},

  {n:26,zh:'系列',py:'xìliè',pos:'Danh từ',vn:'loạt, dãy, chuỗi',hv:'hệ liệt',em:'🎞️',lesson:1,
   explain:['Một chuỗi sự vật / sự việc cùng loại, có liên quan với nhau: 一系列问题 (hàng loạt vấn đề), 一系列措施, 系列产品, 系列丛书.','Thường dùng trong cụm 一系列 + N (không có lượng từ chen giữa): 一系列静止图像.'],
   usage:'一系列 + N (问题 / 措施 / 活动 / 变化); 系列 + 产品 / 电影 / 讲座 / 丛书; ……系列.',
   collo:['一系列静止图像','一系列措施','系列产品','系列讲座'],
   ex_zh:'在犬的眼里，电视画面不是连续的，而是一系列静止图像的迅速变换。',ex_py:'Zài quǎn de yǎn li, diànshì huàmiàn bú shì liánxù de, ér shì yí xìliè jìngzhǐ túxiàng de xùnsù biànhuàn.',ex_vn:'Trong mắt loài chó, hình ảnh ti vi không liên tục, mà là một loạt ảnh tĩnh thay đổi rất nhanh.',
   exList:[
     {zh:'在犬的眼里，电视画面不是连续的，而是一系列静止图像的迅速变换。',py:'Zài quǎn de yǎn li, diànshì huàmiàn bú shì liánxù de, ér shì yí xìliè jìngzhǐ túxiàng de xùnsù biànhuàn.',vn:'Trong mắt loài chó, hình ảnh ti vi không liên tục, mà là một loạt ảnh tĩnh thay đổi rất nhanh.'},
     {zh:'为了保护环境，政府采取了一系列措施。',py:'Wèile bǎohù huánjìng, zhèngfǔ cǎiqǔle yí xìliè cuòshī.',vn:'Để bảo vệ môi trường, chính phủ đã áp dụng hàng loạt biện pháp.'},
     {zh:'这个系列的电影我从第一部看到了最后一部。',py:'Zhège xìliè de diànyǐng wǒ cóng dì-yī bù kàndàole zuìhòu yí bù.',vn:'Loạt phim này tôi đã xem từ phần đầu đến phần cuối.'}
   ],
   colloFull:[
     {zh:'一系列静止图像',py:'yí xìliè jìngzhǐ túxiàng',vn:'một loạt ảnh tĩnh'},
     {zh:'一系列措施',py:'yí xìliè cuòshī',vn:'hàng loạt biện pháp'},
     {zh:'系列产品',py:'xìliè chǎnpǐn',vn:'dòng sản phẩm'},
     {zh:'系列讲座',py:'xìliè jiǎngzuò',vn:'chuỗi bài giảng'},
     {zh:'一系列问题',py:'yí xìliè wèntí',vn:'hàng loạt vấn đề'}
   ],
   patterns:[
     {s:'一系列 + N',m:'Hàng loạt, một chuỗi …'},
     {s:'系列 + 产品 / 电影 / 讲座',m:'Dòng / loạt / chuỗi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi dời lên thành phố, cậu ấy gặp phải hàng loạt vấn đề, may mà bạn bè luôn giúp đỡ.',answer:'搬到城市以后，他遇到了一系列问题，幸亏朋友们一直帮助他。',answerPy:'Bāndào chéngshì yǐhòu, tā yùdàole yí xìliè wèntí, xìngkuī péngyoumen yìzhí bāngzhù tā.',
      note:'幸亏 = may mà (ôn HSK 5); V到 bổ ngữ kết quả.',pair:'幸亏'},
     {promptLang:'vi',prompt:'Sở dĩ công ty lỗ là vì đã đưa ra hàng loạt quyết định sai lầm.',answer:'公司之所以亏损，是因为做出了一系列错误的决策。',answerPy:'Gōngsī zhīsuǒyǐ kuīsǔn, shì yīnwèi zuòchūle yí xìliè cuòwù de juécè.',
      note:'之所以……是因为…… nêu kết quả trước, nguyên nhân sau (ôn HSK 5); 亏损, 决策 ôn HSK 6 bài 7.',pair:'之所以……是因为……'}
   ]},

  {n:27,zh:'推论',py:'tuīlùn',pos:'Động từ',vn:'suy luận, suy ra',hv:'suy luận',em:'🧠',lesson:1,
   explain:['Động từ: từ những điều đã biết suy ra kết luận mới: 有科学家推论，……; 由此推论…….','Danh từ: kết luận suy ra được, giả thuyết: 这一推论, 论证推论, 推论是否正确. Gần nghĩa 推测 (phỏng đoán, bài 8) nhưng 推论 có tính logic, lập luận chặt hơn.'],
   usage:'有人 / 科学家 + 推论，……; 由此 / 据此 + 推论; 这一推论 + 得到证实 / 被证明; 论证……推论.',
   collo:['有科学家推论','这一推论','由此推论','推论是否正确'],
   ex_zh:'有科学家推论，物种的CFF与其本身的体重和新陈代谢速率有关。',ex_py:'Yǒu kēxuéjiā tuīlùn, wùzhǒng de CFF yǔ qí běnshēn de tǐzhòng hé xīnchén-dàixiè sùlǜ yǒuguān.',ex_vn:'Có nhà khoa học suy luận rằng CFF của một loài có liên quan đến cân nặng và tốc độ trao đổi chất của chính loài đó.',
   exList:[
     {zh:'有科学家推论，物种的CFF与其本身的体重和新陈代谢速率有关。',py:'Yǒu kēxuéjiā tuīlùn, wùzhǒng de CFF yǔ qí běnshēn de tǐzhòng hé xīnchén-dàixiè sùlǜ yǒuguān.',vn:'Có nhà khoa học suy luận rằng CFF của một loài có liên quan đến cân nặng và tốc độ trao đổi chất của chính loài đó.'},
     {zh:'在论证这一推论时，科学家筛选出34种动物。',py:'Zài lùnzhèng zhè yī tuīlùn shí, kēxuéjiā shāixuǎn chū sānshísì zhǒng dòngwù.',vn:'Khi chứng minh suy luận này, các nhà khoa học đã chọn lọc ra 34 loài động vật.'},
     {zh:'地上全湿了，由此可以推论，昨天夜里下过雨。',py:'Dì shang quán shī le, yóucǐ kěyǐ tuīlùn, zuótiān yèli xiàguo yǔ.',vn:'Mặt đất ướt hết rồi, từ đó có thể suy ra đêm qua trời đã mưa.'}
   ],
   colloFull:[
     {zh:'有科学家推论',py:'yǒu kēxuéjiā tuīlùn',vn:'có nhà khoa học suy luận'},
     {zh:'这一推论',py:'zhè yī tuīlùn',vn:'suy luận này'},
     {zh:'由此推论',py:'yóucǐ tuīlùn',vn:'từ đó suy ra'},
     {zh:'推论是否正确',py:'tuīlùn shìfǒu zhèngquè',vn:'suy luận có đúng hay không'},
     {zh:'合理的推论',py:'hélǐ de tuīlùn',vn:'suy luận hợp lý'}
   ],
   patterns:[
     {s:'（有人）推论，+ mệnh đề',m:'(Có người) suy luận rằng …'},
     {s:'由此 / 据此 + (可以) 推论……',m:'Từ đó (có thể) suy ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ dựa vào một ví dụ thì không thể suy ra kết luận như vậy.',answer:'仅凭一个例子，是不能推论出这样的结论的。',answerPy:'Jǐn píng yí ge lìzi, shì bù néng tuīlùn chū zhèyàng de jiélùn de.',
      note:'仅凭 = chỉ dựa vào (văn viết); 是……的 nhấn mạnh thái độ khẳng định (ôn HSK 4–5).',pair:'是……的'},
     {promptLang:'vi',prompt:'Suy luận này tuy nghe rất hợp lý, nhưng vẫn cần thí nghiệm để chứng minh.',answer:'这一推论听起来虽然很合理，但是还需要用实验来证明。',answerPy:'Zhè yī tuīlùn tīng qǐlái suīrán hěn hélǐ, dànshì hái xūyào yòng shíyàn lái zhèngmíng.',
      note:'听起来 = nghe có vẻ; 用……来 + V (dùng … để …) (ôn HSK 4–5).',pair:'用……来……'}
   ]},

  {n:28,zh:'本身',py:'běnshēn',pos:'Danh từ',vn:'bản thân, tự thân (người / sự vật đó)',hv:'bản thân',em:'🪞',lesson:1,
   explain:['Chính người / sự vật ấy, để phân biệt với những thứ bên ngoài, liên quan: 问题本身, 事情本身, 它本身的体重.','Đứng ngay sau danh từ / đại từ được nhấn mạnh (N + 本身); văn viết thường dùng 其本身 (= 它自己的). Khác 自己: 本身 dùng cả cho vật, việc; 自己 thiên về người.'],
   usage:'N / 其 + 本身 (+ 的 + N); 本身 + 就 + ……(bản thân nó vốn đã …); ……本身并不重要.',
   collo:['其本身的体重','事情本身','问题本身','本身就很难'],
   ex_zh:'有科学家推论，物种的CFF与其本身的体重和新陈代谢速率有关。',ex_py:'Yǒu kēxuéjiā tuīlùn, wùzhǒng de CFF yǔ qí běnshēn de tǐzhòng hé xīnchén-dàixiè sùlǜ yǒuguān.',ex_vn:'Có nhà khoa học suy luận rằng CFF của một loài có liên quan đến cân nặng và tốc độ trao đổi chất của bản thân loài đó.',
   exList:[
     {zh:'有科学家推论，物种的CFF与其本身的体重和新陈代谢速率有关。',py:'Yǒu kēxuéjiā tuīlùn, wùzhǒng de CFF yǔ qí běnshēn de tǐzhòng hé xīnchén-dàixiè sùlǜ yǒuguān.',vn:'Có nhà khoa học suy luận rằng CFF của một loài có liên quan đến cân nặng và tốc độ trao đổi chất của bản thân loài đó.'},
     {zh:'比赛结果本身并不重要，重要的是我们从中学到了什么。',py:'Bǐsài jiéguǒ běnshēn bìng bú zhòngyào, zhòngyào de shì wǒmen cóng zhōng xuédàole shénme.',vn:'Bản thân kết quả trận đấu không quan trọng, quan trọng là chúng ta học được gì từ đó.'},
     {zh:'学外语本身就不容易，何况你每天只学半个小时。',py:'Xué wàiyǔ běnshēn jiù bù róngyì, hékuàng nǐ měi tiān zhǐ xué bàn ge xiǎoshí.',vn:'Bản thân việc học ngoại ngữ đã chẳng dễ, huống hồ mỗi ngày em chỉ học nửa tiếng.'}
   ],
   colloFull:[
     {zh:'其本身的体重',py:'qí běnshēn de tǐzhòng',vn:'cân nặng của bản thân nó'},
     {zh:'事情本身',py:'shìqing běnshēn',vn:'bản thân sự việc'},
     {zh:'问题本身',py:'wèntí běnshēn',vn:'bản thân vấn đề'},
     {zh:'本身就很难',py:'běnshēn jiù hěn nán',vn:'bản thân nó vốn đã khó'},
     {zh:'我们本身的新陈代谢',py:'wǒmen běnshēn de xīnchén-dàixiè',vn:'sự trao đổi chất của chính chúng ta'}
   ],
   patterns:[
     {s:'N + 本身 + (就) + ……',m:'Bản thân … (vốn đã) …'},
     {s:'A 本身并不……，重要的是……',m:'Bản thân A không …, quan trọng là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bản thân chiếc điện thoại không có lỗi, lỗi ở chỗ chúng ta dùng nó quá lâu.',answer:'手机本身没有错，错在我们用得太久了。',answerPy:'Shǒujī běnshēn méiyǒu cuò, cuò zài wǒmen yòng de tài jiǔ le.',
      note:'错在…… = cái sai nằm ở …; V + 得 + 太…… 了 bổ ngữ trình độ (ôn HSK 4).',pair:'V得……'},
     {promptLang:'vi',prompt:'Bản thân bài toán này vốn đã rất khó, huống hồ thời gian lại ít như vậy.',answer:'这道题本身就很难，何况时间又这么少。',answerPy:'Zhè dào tí běnshēn jiù hěn nán, hékuàng shíjiān yòu zhème shǎo.',
      note:'何况 = huống hồ, đưa thêm lý do mạnh hơn (ôn HSK 5).',pair:'何况'}
   ]},

  {n:29,zh:'新陈代谢',py:'xīnchén-dàixiè',pos:'Thành ngữ',vn:'sự trao đổi chất; cái mới thay cái cũ',hv:'tân trần đại tạ',em:'🔄',lesson:1,
   explain:['Sinh học: quá trình cơ thể sống hấp thụ chất mới, thải chất cũ — sự trao đổi chất: 新陈代谢速率, 新陈代谢变慢.','Nghĩa rộng: cái mới thay thế cái cũ (新 = mới, 陈 = cũ, 代 = thay, 谢 = tàn): 自然界的新陈代谢. Có thể nói tắt 代谢 (代谢速率).'],
   usage:'新陈代谢 + 速率 / 速度 + 快 / 慢 / 高; 促进 / 加快 + 新陈代谢; 代谢 (dạng rút gọn): 代谢速率.',
   collo:['新陈代谢速率','新陈代谢变慢','促进新陈代谢','代谢速率'],
   ex_zh:'新陈代谢速率越高，说明传递过程有更充足的能量支持。',ex_py:'Xīnchén-dàixiè sùlǜ yuè gāo, shuōmíng chuándì guòchéng yǒu gèng chōngzú de néngliàng zhīchí.',ex_vn:'Tốc độ trao đổi chất càng cao, chứng tỏ quá trình truyền tín hiệu được năng lượng hỗ trợ càng dồi dào.',
   exList:[
     {zh:'新陈代谢速率越高，说明传递过程有更充足的能量支持。',py:'Xīnchén-dàixiè sùlǜ yuè gāo, shuōmíng chuándì guòchéng yǒu gèng chōngzú de néngliàng zhīchí.',vn:'Tốc độ trao đổi chất càng cao, chứng tỏ quá trình truyền tín hiệu được năng lượng hỗ trợ càng dồi dào.'},
     {zh:'随着年龄的增长，我们本身的新陈代谢也逐渐变慢。',py:'Suízhe niánlíng de zēngzhǎng, wǒmen běnshēn de xīnchén-dàixiè yě zhújiàn biàn màn.',vn:'Tuổi càng tăng, sự trao đổi chất của chính chúng ta cũng dần chậm lại.'},
     {zh:'多喝水、多运动可以促进新陈代谢。',py:'Duō hē shuǐ, duō yùndòng kěyǐ cùjìn xīnchén-dàixiè.',vn:'Uống nhiều nước, vận động nhiều có thể thúc đẩy trao đổi chất.'}
   ],
   colloFull:[
     {zh:'新陈代谢速率',py:'xīnchén-dàixiè sùlǜ',vn:'tốc độ trao đổi chất'},
     {zh:'新陈代谢变慢',py:'xīnchén-dàixiè biàn màn',vn:'trao đổi chất chậm lại'},
     {zh:'促进新陈代谢',py:'cùjìn xīnchén-dàixiè',vn:'thúc đẩy trao đổi chất'},
     {zh:'代谢速率',py:'dàixiè sùlǜ',vn:'tốc độ trao đổi chất (nói tắt)'},
     {zh:'自然界的新陈代谢',py:'zìránjiè de xīnchén-dàixiè',vn:'quy luật cái mới thay cái cũ của tự nhiên'}
   ],
   patterns:[
     {s:'新陈代谢 + 速率 / 速度 + 快 / 慢',m:'Tốc độ trao đổi chất nhanh / chậm'},
     {s:'促进 / 加快 + 新陈代谢',m:'Thúc đẩy trao đổi chất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trẻ em trao đổi chất nhanh, vì vậy ăn nhiều mà vẫn không béo.',answer:'小孩子新陈代谢快，所以吃得多也不胖。',answerPy:'Xiǎoháizi xīnchén-dàixiè kuài, suǒyǐ chī de duō yě bú pàng.',
      note:'Câu chủ vị làm vị ngữ (小孩子 + 新陈代谢快); ……也不…… = dù … cũng không (ôn HSK 4).',pair:'也 (nhượng bộ)'},
     {promptLang:'vi',prompt:'Người ta nói ngủ đủ giấc có thể thúc đẩy trao đổi chất, có lợi cho sức khỏe.',answer:'据说睡眠充足能促进新陈代谢，对身体有好处。',answerPy:'Jùshuō shuìmián chōngzú néng cùjìn xīnchén-dàixiè, duì shēntǐ yǒu hǎochu.',
      note:'据说 = nghe nói, theo người ta nói; 对……有好处 (ôn HSK 4).',pair:'对……有好处'}
   ]},

  {n:30,zh:'能量',py:'néngliàng',pos:'Danh từ',vn:'năng lượng',hv:'năng lượng',em:'⚡',lesson:1,
   explain:['Vật lý: năng lực sinh công của vật chất (nhiệt năng, điện năng…): 太阳能量, 消耗能量, 储存能量.','Nghĩa bóng: sức lực, sức ảnh hưởng tích cực: 正能量 (năng lượng tích cực), 他身上有很大的能量.'],
   usage:'消耗 / 补充 / 储存 / 提供 + 能量; 能量 + 支持 / 来源; 正能量. Bài khoá: 传递过程有更充足的能量支持.',
   collo:['能量支持','消耗能量','补充能量','正能量'],
   ex_zh:'新陈代谢速率越高，说明传递过程有更充足的能量支持。',ex_py:'Xīnchén-dàixiè sùlǜ yuè gāo, shuōmíng chuándì guòchéng yǒu gèng chōngzú de néngliàng zhīchí.',ex_vn:'Tốc độ trao đổi chất càng cao, chứng tỏ quá trình truyền dẫn có năng lượng hỗ trợ càng dồi dào.',
   exList:[
     {zh:'新陈代谢速率越高，说明传递过程有更充足的能量支持。',py:'Xīnchén-dàixiè sùlǜ yuè gāo, shuōmíng chuándì guòchéng yǒu gèng chōngzú de néngliàng zhīchí.',vn:'Tốc độ trao đổi chất càng cao, chứng tỏ quá trình truyền dẫn có năng lượng hỗ trợ càng dồi dào.'},
     {zh:'跑完步以后要及时补充能量，吃点儿香蕉就不错。',py:'Pǎowán bù yǐhòu yào jíshí bǔchōng néngliàng, chī diǎnr xiāngjiāo jiù búcuò.',vn:'Chạy bộ xong nên kịp thời bổ sung năng lượng, ăn chút chuối là được.'},
     {zh:'这个视频充满正能量，看完让人很受鼓舞。',py:'Zhège shìpín chōngmǎn zhèngnéngliàng, kànwán ràng rén hěn shòu gǔwǔ.',vn:'Video này tràn đầy năng lượng tích cực, xem xong thấy rất được cổ vũ.'}
   ],
   colloFull:[
     {zh:'能量支持',py:'néngliàng zhīchí',vn:'sự hỗ trợ về năng lượng'},
     {zh:'消耗能量',py:'xiāohào néngliàng',vn:'tiêu hao năng lượng'},
     {zh:'补充能量',py:'bǔchōng néngliàng',vn:'bổ sung năng lượng'},
     {zh:'正能量',py:'zhèngnéngliàng',vn:'năng lượng tích cực'},
     {zh:'储存能量',py:'chǔcún néngliàng',vn:'tích trữ năng lượng'}
   ],
   patterns:[
     {s:'消耗 / 补充 / 储存 + 能量',m:'Tiêu hao / bổ sung / tích trữ năng lượng'},
     {s:'充满 + 正能量',m:'Tràn đầy năng lượng tích cực'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ não tuy nhỏ, nhưng lại tiêu hao rất nhiều năng lượng của cơ thể.',answer:'大脑虽然不大，却消耗了身体很多的能量。',answerPy:'Dànǎo suīrán bú dà, què xiāohàole shēntǐ hěn duō de néngliàng.',
      note:'虽然……却…… (却 đứng sau chủ ngữ); 消耗 ôn HSK 6 bài 9.',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Chỉ cần có đủ năng lượng, loài chim này có thể bay liên tục mấy ngày liền.',answer:'只要有足够的能量，这种鸟就能连续飞好几天。',answerPy:'Zhǐyào yǒu zúgòu de néngliàng, zhè zhǒng niǎo jiù néng liánxù fēi hǎo jǐ tiān.',
      note:'只要……就……; 好几 + lượng từ = nhiều (ôn HSK 4).',pair:'只要……就……'}
   ]},

  {n:31,zh:'论证',py:'lùnzhèng',pos:'Động từ',vn:'trình bày và chứng minh, lập luận chứng minh',hv:'luận chứng',em:'📊',lesson:1,
   explain:['Dùng lý lẽ, số liệu, thí nghiệm để chứng minh một quan điểm / giả thuyết là đúng: 论证这一推论, 论证观点, 科学论证.','Danh từ: sự luận chứng, lập luận: 充分的论证. Trong kỹ thuật: 可行性论证 (luận chứng tính khả thi của dự án).'],
   usage:'论证 + 推论 / 观点 / 结论 / 可行性; 经过 / 进行 + 论证; 反复论证.',
   collo:['论证这一推论','论证观点','反复论证','可行性论证'],
   ex_zh:'在论证这一推论时，科学家筛选出34种动物。',ex_py:'Zài lùnzhèng zhè yī tuīlùn shí, kēxuéjiā shāixuǎn chū sānshísì zhǒng dòngwù.',ex_vn:'Khi chứng minh suy luận này, các nhà khoa học đã chọn lọc ra 34 loài động vật.',
   exList:[
     {zh:'在论证这一推论时，科学家筛选出34种动物。',py:'Zài lùnzhèng zhè yī tuīlùn shí, kēxuéjiā shāixuǎn chū sānshísì zhǒng dòngwù.',vn:'Khi chứng minh suy luận này, các nhà khoa học đã chọn lọc ra 34 loài động vật.'},
     {zh:'写议论文时，要用事实来论证自己的观点。',py:'Xiě yìlùnwén shí, yào yòng shìshí lái lùnzhèng zìjǐ de guāndiǎn.',vn:'Khi viết văn nghị luận, cần dùng sự thật để chứng minh quan điểm của mình.'},
     {zh:'这个建桥计划经过了专家的反复论证。',py:'Zhège jiàn qiáo jìhuà jīngguòle zhuānjiā de fǎnfù lùnzhèng.',vn:'Kế hoạch xây cầu này đã qua nhiều lần thẩm định luận chứng của chuyên gia.'}
   ],
   colloFull:[
     {zh:'论证这一推论',py:'lùnzhèng zhè yī tuīlùn',vn:'chứng minh suy luận này'},
     {zh:'论证观点',py:'lùnzhèng guāndiǎn',vn:'chứng minh quan điểm'},
     {zh:'反复论证',py:'fǎnfù lùnzhèng',vn:'luận chứng nhiều lần'},
     {zh:'可行性论证',py:'kěxíngxìng lùnzhèng',vn:'luận chứng tính khả thi'},
     {zh:'科学论证',py:'kēxué lùnzhèng',vn:'luận chứng khoa học'}
   ],
   patterns:[
     {s:'用 + bằng chứng + 来论证 + quan điểm',m:'Dùng … để chứng minh …'},
     {s:'经过 + (反复) + 论证',m:'Qua (nhiều lần) luận chứng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn thuyết phục người khác, trước hết phải dùng những ví dụ đáng tin để chứng minh quan điểm.',answer:'要想说服别人，首先得用可靠的例子来论证自己的观点。',answerPy:'Yào xiǎng shuōfú biérén, shǒuxiān děi yòng kěkào de lìzi lái lùnzhèng zìjǐ de guāndiǎn.',
      note:'要想……首先得…… = muốn … thì trước hết phải …; 得 đọc děi (ôn HSK 4–5).',pair:'要想……首先得……'},
     {promptLang:'vi',prompt:'Kết luận này đã được chứng minh đầy đủ, vì vậy mọi người không cần nghi ngờ.',answer:'这个结论已经得到了充分的论证，因此大家不必怀疑。',answerPy:'Zhège jiélùn yǐjīng dédàole chōngfèn de lùnzhèng, yīncǐ dàjiā búbì huáiyí.',
      note:'得到 + danh từ động từ hoá (得到论证 / 证实); 不必 = không cần (ôn HSK 5).',pair:'不必'}
   ]},

  {n:32,zh:'筛选',py:'shāixuǎn',pos:'Động từ',vn:'chọn lọc, sàng lọc',hv:'si tuyển',em:'🔍',lesson:1,
   explain:['Nghĩa gốc: dùng cái sàng (筛子) để lọc. Nghĩa thường dùng: lựa chọn kỹ càng những cái phù hợp từ một số lượng lớn: 筛选出34种动物, 筛选人才, 筛选信息.','Hay đi với bổ ngữ 出 (筛选出) và phạm vi 从……中: 从一千份简历中筛选出十份.'],
   usage:'从……中 + 筛选(出) + đối tượng; 筛选 + 人才 / 资料 / 信息 / 数据; 经过层层筛选.',
   collo:['筛选出34种动物','筛选信息','层层筛选','筛选人才'],
   ex_zh:'在论证这一推论时，科学家筛选出34种动物，把它们的典型体重、代谢速率和CFF标记在同一张图表中。',ex_py:'Zài lùnzhèng zhè yī tuīlùn shí, kēxuéjiā shāixuǎn chū sānshísì zhǒng dòngwù, bǎ tāmen de diǎnxíng tǐzhòng, dàixiè sùlǜ hé CFF biāojì zài tóng yì zhāng túbiǎo zhōng.',ex_vn:'Khi chứng minh suy luận này, các nhà khoa học chọn lọc ra 34 loài động vật, đánh dấu cân nặng điển hình, tốc độ trao đổi chất và CFF của chúng trên cùng một biểu đồ.',
   exList:[
     {zh:'在论证这一推论时，科学家筛选出34种动物，把它们的典型体重、代谢速率和CFF标记在同一张图表中。',py:'Zài lùnzhèng zhè yī tuīlùn shí, kēxuéjiā shāixuǎn chū sānshísì zhǒng dòngwù, bǎ tāmen de diǎnxíng tǐzhòng, dàixiè sùlǜ hé CFF biāojì zài tóng yì zhāng túbiǎo zhōng.',vn:'Khi chứng minh suy luận này, các nhà khoa học chọn lọc ra 34 loài động vật, đánh dấu cân nặng điển hình, tốc độ trao đổi chất và CFF của chúng trên cùng một biểu đồ.'},
     {zh:'网上的信息真假难辨，我们要学会筛选。',py:'Wǎngshang de xìnxī zhēnjiǎ nán biàn, wǒmen yào xuéhuì shāixuǎn.',vn:'Thông tin trên mạng thật giả khó phân biệt, chúng ta phải học cách sàng lọc.'},
     {zh:'经过层层筛选，他终于进入了国家队。',py:'Jīngguò céngcéng shāixuǎn, tā zhōngyú jìnrùle guójiāduì.',vn:'Qua nhiều vòng tuyển chọn, cuối cùng anh ấy đã vào đội tuyển quốc gia.'}
   ],
   colloFull:[
     {zh:'筛选出34种动物',py:'shāixuǎn chū sānshísì zhǒng dòngwù',vn:'chọn lọc ra 34 loài động vật'},
     {zh:'筛选信息',py:'shāixuǎn xìnxī',vn:'sàng lọc thông tin'},
     {zh:'层层筛选',py:'céngcéng shāixuǎn',vn:'tuyển chọn qua nhiều vòng'},
     {zh:'筛选人才',py:'shāixuǎn réncái',vn:'tuyển chọn nhân tài'},
     {zh:'从中筛选',py:'cóng zhōng shāixuǎn',vn:'chọn lọc từ trong đó'}
   ],
   patterns:[
     {s:'从……中 + 筛选出 + đối tượng',m:'Chọn lọc … ra từ …'},
     {s:'经过 + 层层 / 严格 + 筛选',m:'Qua nhiều vòng / nghiêm ngặt tuyển chọn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty đã chọn ra năm người từ hơn ba trăm hồ sơ để phỏng vấn.',answer:'公司从三百多份简历中筛选出五个人来面试。',answerPy:'Gōngsī cóng sānbǎi duō fèn jiǎnlì zhōng shāixuǎn chū wǔ ge rén lái miànshì.',
      note:'从……中 + V出; 来 + V chỉ mục đích (ôn HSK 4–5).',pair:'从……中'},
     {promptLang:'vi',prompt:'Nếu không biết sàng lọc thông tin, chúng ta rất dễ bị tin giả lừa.',answer:'如果不懂得筛选信息，我们很容易被假消息欺骗。',answerPy:'Rúguǒ bù dǒngde shāixuǎn xìnxī, wǒmen hěn róngyì bèi jiǎ xiāoxi qīpiàn.',
      note:'Câu bị động 被 + tác nhân + V; 欺骗 ôn HSK 6 bài 3.',pair:'被字句'}
   ]},

  {n:33,zh:'标记',py:'biāojì',pos:'Động từ',vn:'đánh dấu, ghi dấu; ký hiệu',hv:'tiêu ký',em:'🖍️',lesson:1,
   explain:['Động từ: dùng ký hiệu, màu sắc… để đánh dấu cho dễ nhận biết: 把重点标记出来, 标记在图表中.','Danh từ: dấu hiệu, ký hiệu: 做个标记, 红色标记. Gần nghĩa 记号 (khẩu ngữ).'],
   usage:'把……标记 + 在…… / 出来; 用 + màu / ký hiệu + 标记; 做 + 标记. Bài khoá: 把……CFF标记在同一张图表中.',
   collo:['标记在图表中','做个标记','用红笔标记','标记出来'],
   ex_zh:'科学家把它们的典型体重、代谢速率和CFF标记在同一张图表中。',ex_py:'Kēxuéjiā bǎ tāmen de diǎnxíng tǐzhòng, dàixiè sùlǜ hé CFF biāojì zài tóng yì zhāng túbiǎo zhōng.',ex_vn:'Các nhà khoa học đánh dấu cân nặng điển hình, tốc độ trao đổi chất và CFF của chúng trên cùng một biểu đồ.',
   exList:[
     {zh:'科学家把它们的典型体重、代谢速率和CFF标记在同一张图表中。',py:'Kēxuéjiā bǎ tāmen de diǎnxíng tǐzhòng, dàixiè sùlǜ hé CFF biāojì zài tóng yì zhāng túbiǎo zhōng.',vn:'Các nhà khoa học đánh dấu cân nặng điển hình, tốc độ trao đổi chất và CFF của chúng trên cùng một biểu đồ.'},
     {zh:'我把不认识的生词都用红笔标记了出来。',py:'Wǒ bǎ bú rènshi de shēngcí dōu yòng hóngbǐ biāojìle chūlái.',vn:'Tôi đã dùng bút đỏ đánh dấu tất cả những từ mới không biết.'},
     {zh:'为了不迷路，我们在树上做了标记。',py:'Wèile bù mílù, wǒmen zài shù shang zuòle biāojì.',vn:'Để khỏi lạc đường, chúng tôi đã đánh dấu trên cây.'}
   ],
   colloFull:[
     {zh:'标记在图表中',py:'biāojì zài túbiǎo zhōng',vn:'đánh dấu trên biểu đồ'},
     {zh:'做个标记',py:'zuò ge biāojì',vn:'đánh một dấu'},
     {zh:'用红笔标记',py:'yòng hóngbǐ biāojì',vn:'đánh dấu bằng bút đỏ'},
     {zh:'标记出来',py:'biāojì chūlái',vn:'đánh dấu ra'},
     {zh:'特殊标记',py:'tèshū biāojì',vn:'ký hiệu đặc biệt'}
   ],
   patterns:[
     {s:'把 + N + 标记 + 在…… / 出来',m:'Đánh dấu … ở … / ra'},
     {s:'在……上 + 做 + 标记',m:'Đánh dấu lên …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo bảo chúng tôi đánh dấu những câu quan trọng, để khi ôn tập khỏi bỏ sót.',answer:'老师让我们把重要的句子标记出来，免得复习的时候漏掉。',answerPy:'Lǎoshī ràng wǒmen bǎ zhòngyào de jùzi biāojì chūlái, miǎnde fùxí de shíhou lòudiào.',
      note:'免得 + điều muốn tránh (ôn HSK 6 bài 14); câu 把 + bổ ngữ xu hướng 出来.',pair:'免得'},
     {promptLang:'vi',prompt:'Trên bản đồ, những nơi bạn từng đến đều được đánh dấu màu đỏ.',answer:'在地图上，你去过的地方都用红色标记了。',answerPy:'Zài dìtú shang, nǐ qùguo de dìfang dōu yòng hóngsè biāojì le.',
      note:'Câu bị động ý nghĩa (không cần 被); V过 + 的 làm định ngữ (ôn HSK 4).',pair:'被动 (ý nghĩa)'}
   ]},

  {n:34,zh:'名次',py:'míngcì',pos:'Danh từ',vn:'thứ hạng, thứ bậc',hv:'danh thứ',em:'🏅',lesson:1,
   explain:['Vị trí thứ tự của tên người / đơn vị trong một danh sách xếp hạng (thi đấu, thi cử, bình chọn): 名次靠前, 取得好名次, 排名次.','Hay đi với 靠前 / 靠后 (đứng đầu / đứng cuối), 提高 / 下降; bài khoá: CFF值名次最靠前的是松鼠.'],
   usage:'名次 + 靠前 / 靠后 / 上升 / 下降; 取得 / 获得 + 好名次; 排 + 名次; 不在乎名次.',
   collo:['名次最靠前','取得好名次','名次下降','排名次'],
   ex_zh:'在科学家的研究中，CFF值名次最靠前的是松鼠。',ex_py:'Zài kēxuéjiā de yánjiū zhōng, CFF zhí míngcì zuì kàoqián de shì sōngshǔ.',ex_vn:'Trong nghiên cứu của các nhà khoa học, loài đứng đầu bảng xếp hạng về trị số CFF là con sóc.',
   exList:[
     {zh:'在科学家的研究中，CFF值名次最靠前的是松鼠。',py:'Zài kēxuéjiā de yánjiū zhōng, CFF zhí míngcì zuì kàoqián de shì sōngshǔ.',vn:'Trong nghiên cứu của các nhà khoa học, loài đứng đầu bảng xếp hạng về trị số CFF là con sóc.'},
     {zh:'这次比赛，我们班取得了第二名的好名次。',py:'Zhè cì bǐsài, wǒmen bān qǔdéle dì-èr míng de hǎo míngcì.',vn:'Cuộc thi lần này, lớp chúng tôi giành được thứ hạng tốt là giải nhì.'},
     {zh:'参加比赛最重要的是学到东西，名次并不重要。',py:'Cānjiā bǐsài zuì zhòngyào de shì xuédào dōngxi, míngcì bìng bú zhòngyào.',vn:'Tham gia cuộc thi quan trọng nhất là học được điều gì đó, thứ hạng không quan trọng.'}
   ],
   colloFull:[
     {zh:'名次最靠前',py:'míngcì zuì kàoqián',vn:'thứ hạng cao nhất'},
     {zh:'取得好名次',py:'qǔdé hǎo míngcì',vn:'giành thứ hạng tốt'},
     {zh:'名次下降',py:'míngcì xiàjiàng',vn:'thứ hạng tụt xuống'},
     {zh:'排名次',py:'pái míngcì',vn:'xếp hạng'},
     {zh:'不在乎名次',py:'bú zàihu míngcì',vn:'không quan tâm thứ hạng'}
   ],
   patterns:[
     {s:'名次 + 靠前 / 靠后',m:'Thứ hạng cao / thấp'},
     {s:'取得 / 获得 + ……的名次',m:'Giành được thứ hạng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy lần này thứ hạng không cao, nhưng cậu ấy đã tiến bộ hơn lần trước nhiều.',answer:'这次虽然名次不高，但是他比上次进步多了。',answerPy:'Zhè cì suīrán míngcì bù gāo, dànshì tā bǐ shàng cì jìnbù duō le.',
      note:'A 比 B + Adj/V + 多了 (so sánh mức độ, ôn HSK 4).',pair:'比……多了'},
     {promptLang:'vi',prompt:'Bố mẹ không nên chỉ nhìn thứ hạng của con, mà nên quan tâm nhiều hơn đến quá trình học.',answer:'父母不应该只看孩子的名次，而应该多关心学习的过程。',answerPy:'Fùmǔ bù yīnggāi zhǐ kàn háizi de míngcì, ér yīnggāi duō guānxīn xuéxí de guòchéng.',
      note:'不应该……，而应该…… đối lập (ôn HSK 4–5).',pair:'……，而……'}
   ]},

  {n:35,zh:'感慨',py:'gǎnkǎi',pos:'Động từ',vn:'cảm khái, cảm thán, xúc động thở dài',hv:'cảm khái',em:'😮‍💨',lesson:1,
   explain:['Trong lòng xúc động vì cảm nhận sâu sắc về một điều gì (thường là thay đổi, thời gian trôi qua, số phận…), rồi thốt lên hoặc thở dài: 感慨万分, 不禁感慨.','Danh từ: nỗi cảm khái, lời cảm thán: 发出这样的感慨 (bài khoá).'],
   usage:'（不禁 / 深有）+ 感慨; 感慨 + 万分 / 地说; 发出……的感慨; 看到 / 想起…… + 感慨…….',
   collo:['发出感慨','感慨万分','不禁感慨','深有感慨'],
   ex_zh:'我们也许曾经发出过这样的感慨：看似渺小的苍蝇既然能躲过人类的攻击，势必有其过人之处。',ex_py:'Wǒmen yěxǔ céngjīng fāchūguo zhèyàng de gǎnkǎi: kànsì miǎoxiǎo de cāngying jìrán néng duǒguo rénlèi de gōngjī, shìbì yǒu qí guòrén zhī chù.',ex_vn:'Có lẽ chúng ta từng thốt lên cảm thán thế này: con ruồi trông nhỏ bé đã có thể né được đòn tấn công của con người, ắt hẳn phải có chỗ hơn người.',
   exList:[
     {zh:'我们也许曾经发出过这样的感慨：看似渺小的苍蝇既然能躲过人类的攻击，势必有其过人之处。',py:'Wǒmen yěxǔ céngjīng fāchūguo zhèyàng de gǎnkǎi: kànsì miǎoxiǎo de cāngying jìrán néng duǒguo rénlèi de gōngjī, shìbì yǒu qí guòrén zhī chù.',vn:'Có lẽ chúng ta từng thốt lên cảm thán thế này: con ruồi trông nhỏ bé đã có thể né được đòn tấn công của con người, ắt hẳn phải có chỗ hơn người.'},
     {zh:'看到家乡的巨大变化，爷爷感慨万分。',py:'Kàndào jiāxiāng de jùdà biànhuà, yéye gǎnkǎi wànfēn.',vn:'Thấy quê hương thay đổi lớn lao, ông nội xúc động vô cùng.'},
     {zh:'翻着小时候的照片，妈妈不禁感慨：时间过得真快啊！',py:'Fānzhe xiǎoshíhou de zhàopiàn, māma bùjīn gǎnkǎi: shíjiān guò de zhēn kuài a!',vn:'Lật xem những tấm ảnh hồi nhỏ, mẹ không khỏi cảm thán: thời gian trôi nhanh quá!'}
   ],
   colloFull:[
     {zh:'发出感慨',py:'fāchū gǎnkǎi',vn:'thốt lên lời cảm thán'},
     {zh:'感慨万分',py:'gǎnkǎi wànfēn',vn:'vô cùng xúc động, cảm khái'},
     {zh:'不禁感慨',py:'bùjīn gǎnkǎi',vn:'không khỏi cảm thán'},
     {zh:'深有感慨',py:'shēn yǒu gǎnkǎi',vn:'rất nhiều cảm xúc'},
     {zh:'感慨地说',py:'gǎnkǎi de shuō',vn:'bùi ngùi nói'}
   ],
   patterns:[
     {s:'看到 / 想起…… + (不禁) + 感慨……',m:'Thấy / nhớ … mà (không khỏi) cảm thán …'},
     {s:'发出 + ……的感慨',m:'Thốt lên lời cảm thán …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai mươi năm sau gặp lại các bạn học cũ, mọi người đều không khỏi cảm thán mãi.',answer:'二十年后再见到老同学，大家都不由得感慨万分。',answerPy:'Èrshí nián hòu zài jiàndào lǎo tóngxué, dàjiā dōu bùyóude gǎnkǎi wànfēn.',
      note:'不由得 = không kìm được, bất giác (ôn HSK 6 bài 2).',pair:'不由得'},
     {promptLang:'vi',prompt:'Nhìn thấy thành phố ngày càng phồn hoa, ông cụ bùi ngùi nói: "Trước đây ở đây toàn là ruộng."',answer:'看到城市越来越繁华，老人感慨地说：“以前这儿全是农田。”',answerPy:'Kàndào chéngshì yuè lái yuè fánhuá, lǎorén gǎnkǎi de shuō: “Yǐqián zhèr quán shì nóngtián.”',
      note:'Adj/V + 地 + V làm trạng ngữ; 繁华 ôn HSK 6 bài 13.',pair:'……地 + V'}
   ]},

  {n:36,zh:'渺小',py:'miǎoxiǎo',pos:'Tính từ',vn:'nhỏ bé, bé nhỏ, nhỏ nhoi',hv:'miểu tiểu',em:'🐜',lesson:1,
   explain:['Rất nhỏ bé, không đáng kể — thường khi so với cái vô cùng lớn (vũ trụ, thiên nhiên, lịch sử): 渺小的人类, 感到自己很渺小.','Trái nghĩa: 伟大 (vĩ đại), 庞大. 渺小 mang sắc thái văn chương, có khi hàm ý khiêm tốn hoặc chê "tầm thường".'],
   usage:'渺小的 + N (人类 / 个人 / 苍蝇); 显得 / 感到 + 渺小; 在……面前 + 显得渺小; 看似渺小.',
   collo:['看似渺小','渺小的人类','显得渺小','感到自己很渺小'],
   ex_zh:'看似渺小的苍蝇既然能躲过人类的攻击，势必有其过人之处。',ex_py:'Kànsì miǎoxiǎo de cāngying jìrán néng duǒguo rénlèi de gōngjī, shìbì yǒu qí guòrén zhī chù.',ex_vn:'Con ruồi trông nhỏ bé đã có thể né được đòn tấn công của con người, ắt hẳn phải có chỗ hơn người.',
   exList:[
     {zh:'看似渺小的苍蝇既然能躲过人类的攻击，势必有其过人之处。',py:'Kànsì miǎoxiǎo de cāngying jìrán néng duǒguo rénlèi de gōngjī, shìbì yǒu qí guòrén zhī chù.',vn:'Con ruồi trông nhỏ bé đã có thể né được đòn tấn công của con người, ắt hẳn phải có chỗ hơn người.'},
     {zh:'站在大海边，我忽然觉得自己很渺小。',py:'Zhàn zài dàhǎi biān, wǒ hūrán juéde zìjǐ hěn miǎoxiǎo.',vn:'Đứng bên bờ biển lớn, tôi bỗng thấy mình thật nhỏ bé.'},
     {zh:'在大自然面前，人类的力量显得非常渺小。',py:'Zài dàzìrán miànqián, rénlèi de lìliang xiǎnde fēicháng miǎoxiǎo.',vn:'Trước thiên nhiên, sức mạnh của con người trở nên vô cùng nhỏ bé.'}
   ],
   colloFull:[
     {zh:'看似渺小',py:'kànsì miǎoxiǎo',vn:'trông có vẻ nhỏ bé'},
     {zh:'渺小的人类',py:'miǎoxiǎo de rénlèi',vn:'con người nhỏ bé'},
     {zh:'显得渺小',py:'xiǎnde miǎoxiǎo',vn:'trở nên nhỏ bé'},
     {zh:'感到自己很渺小',py:'gǎndào zìjǐ hěn miǎoxiǎo',vn:'thấy mình thật nhỏ bé'},
     {zh:'渺小的个人',py:'miǎoxiǎo de gèrén',vn:'cá nhân nhỏ bé'}
   ],
   patterns:[
     {s:'在……面前，A + 显得 + 渺小',m:'Trước …, A trở nên nhỏ bé'},
     {s:'看似渺小的 + N',m:'… trông có vẻ nhỏ bé'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng xem thường những việc tưởng chừng nhỏ bé, chính chúng mới có thể thay đổi thế giới.',answer:'别小看那些看似渺小的事，正是它们才能改变世界。',answerPy:'Bié xiǎokàn nàxiē kànsì miǎoxiǎo de shì, zhèng shì tāmen cái néng gǎibiàn shìjiè.',
      note:'正是……才…… nhấn mạnh chính cái đó mới … (ôn HSK 5); 看似 = trông như.',pair:'正是……才……'},
     {promptLang:'vi',prompt:'Con người tuy nhỏ bé, nhưng chỉ cần đoàn kết lại thì có thể làm được những việc vĩ đại.',answer:'人虽然渺小，但只要团结起来，就能做成伟大的事。',answerPy:'Rén suīrán miǎoxiǎo, dàn zhǐyào tuánjié qǐlái, jiù néng zuòchéng wěidà de shì.',
      note:'虽然……但……; 只要……就……; V起来 chỉ bắt đầu và tiếp diễn (ôn HSK 4–5).',pair:'V起来'}
   ]},

  {n:37,zh:'攻击',py:'gōngjī',pos:'Động từ',vn:'tấn công, công kích',hv:'công kích',em:'⚔️',lesson:1,
   explain:['Dùng vũ lực / sức mạnh tấn công đối phương: 攻击敌人, 受到攻击, 躲过人类的攻击 (danh từ). Dùng cho người, động vật, mạng máy tính (网络攻击).','Nghĩa bóng: dùng lời lẽ công kích, bôi nhọ: 人身攻击 (công kích cá nhân), 攻击别人的缺点.'],
   usage:'攻击 + đối tượng; 受到 / 躲过 / 发动 + 攻击; 人身攻击; 网络攻击; 有攻击性.',
   collo:['躲过人类的攻击','受到攻击','人身攻击','网络攻击'],
   ex_zh:'看似渺小的苍蝇既然能躲过人类的攻击，势必有其过人之处。',ex_py:'Kànsì miǎoxiǎo de cāngying jìrán néng duǒguo rénlèi de gōngjī, shìbì yǒu qí guòrén zhī chù.',ex_vn:'Con ruồi trông nhỏ bé đã có thể né được đòn tấn công của con người, ắt hẳn phải có chỗ hơn người.',
   exList:[
     {zh:'看似渺小的苍蝇既然能躲过人类的攻击，势必有其过人之处。',py:'Kànsì miǎoxiǎo de cāngying jìrán néng duǒguo rénlèi de gōngjī, shìbì yǒu qí guòrén zhī chù.',vn:'Con ruồi trông nhỏ bé đã có thể né được đòn tấn công của con người, ắt hẳn phải có chỗ hơn người.'},
     {zh:'一般来说，野生动物不会主动攻击人，除非它们感到危险。',py:'Yìbān lái shuō, yěshēng dòngwù bú huì zhǔdòng gōngjī rén, chúfēi tāmen gǎndào wēixiǎn.',vn:'Nói chung, động vật hoang dã sẽ không chủ động tấn công người, trừ khi chúng cảm thấy nguy hiểm.'},
     {zh:'讨论问题可以，但不要进行人身攻击。',py:'Tǎolùn wèntí kěyǐ, dàn bú yào jìnxíng rénshēn gōngjī.',vn:'Thảo luận vấn đề thì được, nhưng đừng công kích cá nhân.'}
   ],
   colloFull:[
     {zh:'躲过人类的攻击',py:'duǒguo rénlèi de gōngjī',vn:'né được đòn tấn công của con người'},
     {zh:'受到攻击',py:'shòudào gōngjī',vn:'bị tấn công'},
     {zh:'人身攻击',py:'rénshēn gōngjī',vn:'công kích cá nhân'},
     {zh:'网络攻击',py:'wǎngluò gōngjī',vn:'tấn công mạng'},
     {zh:'主动攻击',py:'zhǔdòng gōngjī',vn:'chủ động tấn công'}
   ],
   patterns:[
     {s:'攻击 + đối tượng',m:'Tấn công …'},
     {s:'受到 / 躲过 + (……的) + 攻击',m:'Bị / né được đòn tấn công (của …)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trang web của trường bị tấn công mạng, vì vậy mấy hôm nay không vào được.',answer:'学校的网站受到了网络攻击，因此这几天上不去。',answerPy:'Xuéxiào de wǎngzhàn shòudàole wǎngluò gōngjī, yīncǐ zhè jǐ tiān shàng bu qù.',
      note:'受到 + danh từ (bị động bằng từ vựng); bổ ngữ khả năng 上不去 (ôn HSK 5).',pair:'受到……'},
     {promptLang:'vi',prompt:'Trừ khi bị chọc giận, nếu không loài chó này sẽ không tấn công người.',answer:'除非被惹怒了，否则这种狗不会攻击人。',answerPy:'Chúfēi bèi rěnù le, fǒuzé zhè zhǒng gǒu bú huì gōngjī rén.',
      note:'除非……，否则…… = trừ phi …, nếu không thì … (ôn HSK 5).',pair:'除非……否则……'}
   ]},

  {n:38,zh:'势必',py:'shìbì',pos:'Phó từ',vn:'tất phải, ắt phải, ắt sẽ',hv:'thế tất',em:'⚠️',lesson:1,
   explain:['Căn cứ vào xu thế phát triển của sự việc mà suy đoán NHẤT ĐỊNH sẽ dẫn tới kết quả nào đó; kết quả thường là BẤT LỢI: 势必影响…, 势必导致…. Văn viết.','Phân biệt với 一定 (词语辨析): 一定 không nhất thiết kết quả xấu, còn diễn tả quyết tâm (一定要…) và làm tính từ (一定的时间); 势必 không có hai cách dùng này.'],
   usage:'(条件 / 原因)，势必 + (会) + V (影响 / 导致 / 造成 / 引起……); 势必有其过人之处 (bài khoá). Không dùng 势必 + 要 để bày tỏ quyết tâm.',
   collo:['势必影响','势必导致','势必有其过人之处','势必会造成'],
   ex_zh:'看似渺小的苍蝇既然能躲过人类的攻击，势必有其过人之处。',ex_py:'Kànsì miǎoxiǎo de cāngying jìrán néng duǒguo rénlèi de gōngjī, shìbì yǒu qí guòrén zhī chù.',ex_vn:'Con ruồi trông nhỏ bé đã có thể né được đòn tấn công của con người, ắt hẳn phải có chỗ hơn người.',
   exList:[
     {zh:'看似渺小的苍蝇既然能躲过人类的攻击，势必有其过人之处。',py:'Kànsì miǎoxiǎo de cāngying jìrán néng duǒguo rénlèi de gōngjī, shìbì yǒu qí guòrén zhī chù.',vn:'Con ruồi trông nhỏ bé đã có thể né được đòn tấn công của con người, ắt hẳn phải có chỗ hơn người.'},
     {zh:'人口过度增长势必影响经济水平的提高。',py:'Rénkǒu guòdù zēngzhǎng shìbì yǐngxiǎng jīngjì shuǐpíng de tígāo.',vn:'Dân số tăng quá mức ắt sẽ ảnh hưởng đến việc nâng cao trình độ kinh tế.'},
     {zh:'人人都不遵守交通规则，势必会导致交通混乱。',py:'Rénrén dōu bù zūnshǒu jiāotōng guīzé, shìbì huì dǎozhì jiāotōng hùnluàn.',vn:'Ai cũng không tuân thủ luật giao thông thì tất yếu sẽ dẫn tới giao thông hỗn loạn.'}
   ],
   colloFull:[
     {zh:'势必影响',py:'shìbì yǐngxiǎng',vn:'ắt sẽ ảnh hưởng'},
     {zh:'势必导致',py:'shìbì dǎozhì',vn:'tất sẽ dẫn đến'},
     {zh:'势必有其过人之处',py:'shìbì yǒu qí guòrén zhī chù',vn:'ắt hẳn có chỗ hơn người'},
     {zh:'势必会造成',py:'shìbì huì zàochéng',vn:'ắt sẽ gây ra'},
     {zh:'势必引起',py:'shìbì yǐnqǐ',vn:'ắt sẽ gây nên'}
   ],
   patterns:[
     {s:'(điều kiện / nguyên nhân)，势必 + (会) + V',m:'…, ắt sẽ … (kết quả thường bất lợi)'},
     {s:'既然……，势必……',m:'Đã … thì ắt hẳn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không bảo vệ môi trường, sớm muộn gì cũng sẽ ảnh hưởng đến sức khỏe của chính chúng ta.',answer:'如果不保护环境，迟早势必会影响我们自己的健康。',answerPy:'Rúguǒ bù bǎohù huánjìng, chízǎo shìbì huì yǐngxiǎng wǒmen zìjǐ de jiànkāng.',
      note:'如果……，势必…… giả thiết + kết quả bất lợi tất yếu; 迟早 = sớm muộn (ôn HSK 5).',pair:'如果……就 / 势必……'},
     {promptLang:'vi',prompt:'Thức khuya liên tục lâu ngày, không những học không tốt mà còn ắt sẽ làm hại sức khỏe.',answer:'长期熬夜，不但学不好，而且势必会伤害身体。',answerPy:'Chángqī áoyè, búdàn xué bu hǎo, érqiě shìbì huì shānghài shēntǐ.',
      note:'不但……而且……; 熬夜 ôn HSK 6 bài 2 (熬).',pair:'不但……而且……'}
   ]},

  {n:39,zh:'博大精深',py:'bódà-jīngshēn',pos:'Thành ngữ',vn:'uyên thâm, uyên bác; rộng lớn và sâu sắc',hv:'bác đại tinh thâm',em:'📚',lesson:1,
   explain:['(Tư tưởng, học vấn, văn hóa) vừa rộng lớn (博大) vừa tinh tế sâu sắc (精深): 中国文化博大精深, 博大精深的思想.','Thường dùng để ca ngợi một nền văn hóa, một học thuyết, một bộ môn; không dùng cho người cụ thể trong khẩu ngữ (người thì nói 学问渊博).'],
   usage:'文化 / 思想 / 学问 / 艺术 + 博大精深; 博大精深的 + N. Bài khoá: 它们没有博大精深的思想.',
   collo:['博大精深的思想','中国文化博大精深','博大精深的学问','博大精深的艺术'],
   ex_zh:'确实，它们没有博大精深的思想，不能进行深奥的思考。',ex_py:'Quèshí, tāmen méiyǒu bódà-jīngshēn de sīxiǎng, bù néng jìnxíng shēn\'ào de sīkǎo.',ex_vn:'Đúng vậy, chúng không có tư tưởng uyên thâm, không thể suy nghĩ sâu xa.',
   exList:[
     {zh:'确实，它们没有博大精深的思想，不能进行深奥的思考。',py:'Quèshí, tāmen méiyǒu bódà-jīngshēn de sīxiǎng, bù néng jìnxíng shēn\'ào de sīkǎo.',vn:'Đúng vậy, chúng không có tư tưởng uyên thâm, không thể suy nghĩ sâu xa.'},
     {zh:'中国文化博大精深，学一辈子也学不完。',py:'Zhōngguó wénhuà bódà-jīngshēn, xué yíbèizi yě xué bu wán.',vn:'Văn hóa Trung Quốc rộng lớn sâu sắc, học cả đời cũng không hết.'},
     {zh:'中医博大精深，吸引了很多外国人来学习。',py:'Zhōngyī bódà-jīngshēn, xīyǐnle hěn duō wàiguórén lái xuéxí.',vn:'Đông y uyên thâm, đã thu hút rất nhiều người nước ngoài đến học.'}
   ],
   colloFull:[
     {zh:'博大精深的思想',py:'bódà-jīngshēn de sīxiǎng',vn:'tư tưởng uyên thâm'},
     {zh:'中国文化博大精深',py:'Zhōngguó wénhuà bódà-jīngshēn',vn:'văn hóa Trung Quốc rộng lớn sâu sắc'},
     {zh:'博大精深的学问',py:'bódà-jīngshēn de xuéwen',vn:'học vấn uyên bác'},
     {zh:'博大精深的艺术',py:'bódà-jīngshēn de yìshù',vn:'nghệ thuật uyên thâm'},
     {zh:'汉字博大精深',py:'Hànzì bódà-jīngshēn',vn:'chữ Hán uyên thâm'}
   ],
   patterns:[
     {s:'文化 / 思想 / 学问 + 博大精深',m:'… rộng lớn và sâu sắc'},
     {s:'博大精深的 + N',m:'… uyên thâm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Càng học tiếng Trung, tôi càng cảm thấy văn hóa Trung Quốc uyên thâm.',answer:'汉语学得越久，我越觉得中国文化博大精深。',answerPy:'Hànyǔ xué de yuè jiǔ, wǒ yuè juéde Zhōngguó wénhuà bódà-jīngshēn.',
      note:'越……越…… (hai chủ ngữ khác nhau vẫn được); V得越…… (ôn HSK 4–5).',pair:'越……越……'},
     {promptLang:'vi',prompt:'Thư pháp uyên thâm như vậy, chỉ học vài tháng thì làm sao học tốt được?',answer:'书法这么博大精深，只学几个月怎么可能学好呢？',answerPy:'Shūfǎ zhème bódà-jīngshēn, zhǐ xué jǐ ge yuè zěnme kěnéng xuéhǎo ne?',
      note:'怎么可能……呢？ câu hỏi tu từ = không thể nào (ôn HSK 5).',pair:'反问句'}
   ]},

  {n:40,zh:'深奥',py:'shēn\'ào',pos:'Tính từ',vn:'sâu xa, sâu sắc, huyền bí, khó hiểu',hv:'thâm áo',em:'🌀',lesson:1,
   explain:['(Đạo lý, kiến thức, nội dung) sâu xa, khó hiểu, người thường khó nắm được: 深奥的道理, 深奥的问题, 内容太深奥.','Trái nghĩa: 浅显, 通俗 (dễ hiểu). Chú ý pinyin shēn\'ào có dấu cách âm \'.'],
   usage:'深奥的 + 道理 / 知识 / 理论 / 思考; 内容 / 问题 + (太 / 很) + 深奥; 把深奥的……讲得通俗易懂.',
   collo:['深奥的思考','深奥的道理','内容深奥','深奥的理论'],
   ex_zh:'它们没有博大精深的思想，不能进行深奥的思考，对强大的对手无能为力。',ex_py:'Tāmen méiyǒu bódà-jīngshēn de sīxiǎng, bù néng jìnxíng shēn\'ào de sīkǎo, duì qiángdà de duìshǒu wúnéngwéilì.',ex_vn:'Chúng không có tư tưởng uyên thâm, không thể suy nghĩ sâu xa, bất lực trước đối thủ mạnh.',
   exList:[
     {zh:'它们没有博大精深的思想，不能进行深奥的思考，对强大的对手无能为力。',py:'Tāmen méiyǒu bódà-jīngshēn de sīxiǎng, bù néng jìnxíng shēn\'ào de sīkǎo, duì qiángdà de duìshǒu wúnéngwéilì.',vn:'Chúng không có tư tưởng uyên thâm, không thể suy nghĩ sâu xa, bất lực trước đối thủ mạnh.'},
     {zh:'这本书的内容太深奥了，我看了好几遍都没看懂。',py:'Zhè běn shū de nèiróng tài shēn\'ào le, wǒ kànle hǎo jǐ biàn dōu méi kàndǒng.',vn:'Nội dung cuốn sách này sâu xa quá, tôi đọc mấy lần vẫn chưa hiểu.'},
     {zh:'好老师能把深奥的道理讲得通俗易懂。',py:'Hǎo lǎoshī néng bǎ shēn\'ào de dàolǐ jiǎng de tōngsú yìdǒng.',vn:'Thầy giỏi có thể giảng những đạo lý sâu xa một cách dễ hiểu.'}
   ],
   colloFull:[
     {zh:'深奥的思考',py:'shēn\'ào de sīkǎo',vn:'suy nghĩ sâu xa'},
     {zh:'深奥的道理',py:'shēn\'ào de dàolǐ',vn:'đạo lý sâu xa'},
     {zh:'内容深奥',py:'nèiróng shēn\'ào',vn:'nội dung khó hiểu'},
     {zh:'深奥的理论',py:'shēn\'ào de lǐlùn',vn:'lý thuyết cao siêu'},
     {zh:'深奥的问题',py:'shēn\'ào de wèntí',vn:'vấn đề sâu xa'}
   ],
   patterns:[
     {s:'深奥的 + 道理 / 知识 / 理论',m:'Đạo lý / kiến thức / lý thuyết sâu xa'},
     {s:'把深奥的…… + 讲得通俗易懂',m:'Giảng … sâu xa thành dễ hiểu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vấn đề này tuy nghe có vẻ sâu xa, nhưng thật ra đạo lý rất đơn giản.',answer:'这个问题听起来很深奥，其实道理很简单。',answerPy:'Zhège wèntí tīng qǐlái hěn shēn\'ào, qíshí dàolǐ hěn jiǎndān.',
      note:'听起来…… 其实…… = nghe thì … nhưng thật ra … (ôn HSK 4).',pair:'其实'},
     {promptLang:'vi',prompt:'Kiến thức sâu xa đến mấy, chỉ cần chịu khó suy nghĩ thì rồi cũng hiểu được.',answer:'再深奥的知识，只要肯动脑筋，也总能弄懂。',answerPy:'Zài shēn\'ào de zhīshi, zhǐyào kěn dòng nǎojīn, yě zǒng néng nòngdǒng.',
      note:'再 + Adj + 的 + N，也…… = dù … đến mấy cũng … (ôn HSK 5).',pair:'再……也……'}
   ]},

  {n:41,zh:'无能为力',py:'wúnéngwéilì',pos:'Thành ngữ',vn:'bất lực, không có sức làm gì, đành chịu',hv:'vô năng vi lực',em:'😞',lesson:1,
   explain:['Không có khả năng, không đủ sức làm gì / giúp gì; đành bó tay: 对这件事我无能为力.','Hay đi với 对 / 对于 + đối tượng + 无能为力; không mang tân ngữ trực tiếp phía sau (không nói 无能为力这件事).'],
   usage:'对 + N + 无能为力; 感到 / 实在 + 无能为力; ……却无能为力 (vế sau). Bài khoá: 对强大的对手无能为力.',
   collo:['对强大的对手无能为力','感到无能为力','实在无能为力','却无能为力'],
   ex_zh:'它们对强大的对手无能为力，但对外部环境能迅速做出判断。',ex_py:'Tāmen duì qiángdà de duìshǒu wúnéngwéilì, dàn duì wàibù huánjìng néng xùnsù zuòchū pànduàn.',ex_vn:'Chúng bất lực trước đối thủ mạnh, nhưng có thể phán đoán rất nhanh về môi trường bên ngoài.',
   exList:[
     {zh:'它们对强大的对手无能为力，但对外部环境能迅速做出判断。',py:'Tāmen duì qiángdà de duìshǒu wúnéngwéilì, dàn duì wàibù huánjìng néng xùnsù zuòchū pànduàn.',vn:'Chúng bất lực trước đối thủ mạnh, nhưng có thể phán đoán rất nhanh về môi trường bên ngoài.'},
     {zh:'年轻时轻而易举就能做到的动作，到了老年却无能为力了。',py:'Niánqīng shí qīng\'éryìjǔ jiù néng zuòdào de dòngzuò, dàole lǎonián què wúnéngwéilì le.',vn:'Những động tác lúc trẻ làm được dễ như trở bàn tay, về già lại đành bất lực.'},
     {zh:'这件事我真的无能为力，你还是去找别人帮忙吧。',py:'Zhè jiàn shì wǒ zhēn de wúnéngwéilì, nǐ háishi qù zhǎo biérén bāngmáng ba.',vn:'Việc này tôi thật sự bất lực, cậu vẫn nên đi nhờ người khác giúp.'}
   ],
   colloFull:[
     {zh:'对强大的对手无能为力',py:'duì qiángdà de duìshǒu wúnéngwéilì',vn:'bất lực trước đối thủ mạnh'},
     {zh:'感到无能为力',py:'gǎndào wúnéngwéilì',vn:'cảm thấy bất lực'},
     {zh:'实在无能为力',py:'shízài wúnéngwéilì',vn:'thật sự bất lực'},
     {zh:'却无能为力',py:'què wúnéngwéilì',vn:'vậy mà đành chịu'},
     {zh:'对此无能为力',py:'duì cǐ wúnéngwéilì',vn:'bất lực với việc này'}
   ],
   patterns:[
     {s:'对 + N + 无能为力',m:'Bất lực trước / với …'},
     {s:'……，却无能为力',m:'…, vậy mà đành bó tay'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhìn con vật nhỏ bị thương mà bác sĩ cũng đành bất lực, cả nhà đều buồn lắm.',answer:'看着受伤的小动物，连医生也无能为力，全家人都难过极了。',answerPy:'Kànzhe shòushāng de xiǎo dòngwù, lián yīshēng yě wúnéngwéilì, quán jiā rén dōu nánguò jí le.',
      note:'连……也…… nhấn mạnh mức độ (ôn HSK 4–5); Adj + 极了.',pair:'连……也……'},
     {promptLang:'vi',prompt:'Tuy tôi rất muốn giúp cậu, nhưng chuyện này tôi thật sự đành chịu.',answer:'尽管我很想帮你，可是这件事我实在无能为力。',answerPy:'Jǐnguǎn wǒ hěn xiǎng bāng nǐ, kěshì zhè jiàn shì wǒ shízài wúnéngwéilì.',
      note:'尽管……可是…… nhượng bộ sự thật (ôn HSK 5); 实在 = thật sự.',pair:'尽管……可是……'}
   ]},

  {n:42,zh:'实惠',py:'shíhuì',pos:'Tính từ',vn:'thực dụng, có ích, thiết thực; lợi ích thực tế',hv:'thực huệ',em:'💰',lesson:1,
   explain:['Tính từ: có lợi ích thực tế, đáng đồng tiền, dùng được việc: 价格实惠, 经济实惠, 这一优势真的实惠极了.','Danh từ: lợi ích thiết thực: 让老百姓得到实惠 (để người dân được hưởng lợi thật sự).'],
   usage:'(价格 / 饭菜 / 东西) + 实惠; 经济实惠; 实惠极了; 得到 / 带来 + 实惠. Khẩu ngữ hay nói 又便宜又实惠.',
   collo:['实惠极了','经济实惠','价格实惠','得到实惠'],
   ex_zh:'但对外部环境能迅速做出判断，使它们有了更多的生存机会，这一优势真的实惠极了。',ex_py:'Dàn duì wàibù huánjìng néng xùnsù zuòchū pànduàn, shǐ tāmen yǒule gèng duō de shēngcún jīhuì, zhè yī yōushì zhēn de shíhuì jí le.',ex_vn:'Nhưng chúng có thể phán đoán thật nhanh về môi trường bên ngoài, khiến chúng có thêm nhiều cơ hội sống sót — ưu thế này quả thật vô cùng thiết thực.',
   exList:[
     {zh:'但对外部环境能迅速做出判断，使它们有了更多的生存机会，这一优势真的实惠极了。',py:'Dàn duì wàibù huánjìng néng xùnsù zuòchū pànduàn, shǐ tāmen yǒule gèng duō de shēngcún jīhuì, zhè yī yōushì zhēn de shíhuì jí le.',vn:'Nhưng chúng có thể phán đoán thật nhanh về môi trường bên ngoài, khiến chúng có thêm nhiều cơ hội sống sót — ưu thế này quả thật vô cùng thiết thực.'},
     {zh:'学校门口那家小饭馆又好吃又实惠，学生们都爱去。',py:'Xuéxiào ménkǒu nà jiā xiǎo fànguǎn yòu hǎochī yòu shíhuì, xuéshengmen dōu ài qù.',vn:'Quán ăn nhỏ trước cổng trường vừa ngon vừa rẻ, học sinh ai cũng thích đến.'},
     {zh:'新政策让农民得到了实实在在的实惠。',py:'Xīn zhèngcè ràng nóngmín dédàole shíshízàizài de shíhuì.',vn:'Chính sách mới giúp nông dân nhận được lợi ích thiết thực.'}
   ],
   colloFull:[
     {zh:'实惠极了',py:'shíhuì jí le',vn:'vô cùng thiết thực / hời'},
     {zh:'经济实惠',py:'jīngjì shíhuì',vn:'kinh tế, đáng đồng tiền'},
     {zh:'价格实惠',py:'jiàgé shíhuì',vn:'giá cả phải chăng'},
     {zh:'得到实惠',py:'dédào shíhuì',vn:'được hưởng lợi thực tế'},
     {zh:'又便宜又实惠',py:'yòu piányi yòu shíhuì',vn:'vừa rẻ vừa được việc'}
   ],
   patterns:[
     {s:'N + 又……又实惠 / 经济实惠',m:'… vừa … vừa đáng tiền'},
     {s:'让 / 使 + người + 得到实惠',m:'Làm cho ai được lợi thực tế'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc xe đạp này tuy không đẹp lắm, nhưng bền và giá phải chăng, rất đáng mua.',answer:'这辆自行车虽然不太好看，但是结实，价格也实惠，很值得买。',answerPy:'Zhè liàng zìxíngchē suīrán bú tài hǎokàn, dànshì jiēshi, jiàgé yě shíhuì, hěn zhíde mǎi.',
      note:'值得 + V = đáng … (ôn HSK 4); 虽然……但是…….',pair:'值得'},
     {promptLang:'vi',prompt:'So với đồ đắt tiền, bà nội thích đồ rẻ mà dùng được việc hơn.',answer:'和贵的东西相比，奶奶更喜欢便宜实惠的东西。',answerPy:'Hé guì de dōngxi xiāngbǐ, nǎinai gèng xǐhuan piányi shíhuì de dōngxi.',
      note:'和……相比 (ôn HSK 6 bài 13); 更 + V tâm lý.',pair:'和……相比'}
   ]},

  {n:43,zh:'个体',py:'gètǐ',pos:'Danh từ',vn:'cá thể',hv:'cá thể',em:'🧍',lesson:1,
   explain:['Một con người hoặc một sinh vật riêng lẻ, độc lập (đối lập với 群体 / 集体 = quần thể, tập thể): 成年个体, 每个个体都不同.','Còn chỉ kinh doanh cá thể, tư nhân nhỏ: 个体户 (hộ kinh doanh cá thể), 个体经济.'],
   usage:'成年 / 年轻 + 个体; 每个个体; 个体差异 (khác biệt cá thể); 个体户. Bài khoá: 比成年个体更为好动和焦急.',
   collo:['成年个体','个体差异','个体户','每个个体'],
   ex_zh:'小猫小狗甚至小孩儿，总显得比成年个体更为好动和焦急。',ex_py:'Xiǎo māo xiǎo gǒu shènzhì xiǎoháir, zǒng xiǎnde bǐ chéngnián gètǐ gèng wéi hàodòng hé jiāojí.',ex_vn:'Mèo con, chó con thậm chí trẻ nhỏ luôn tỏ ra hiếu động và nôn nóng hơn các cá thể trưởng thành.',
   exList:[
     {zh:'小猫小狗甚至小孩儿，总显得比成年个体更为好动和焦急。',py:'Xiǎo māo xiǎo gǒu shènzhì xiǎoháir, zǒng xiǎnde bǐ chéngnián gètǐ gèng wéi hàodòng hé jiāojí.',vn:'Mèo con, chó con thậm chí trẻ nhỏ luôn tỏ ra hiếu động và nôn nóng hơn các cá thể trưởng thành.'},
     {zh:'每个人都是独立的个体，没有必要和别人比来比去。',py:'Měi ge rén dōu shì dúlì de gètǐ, méiyǒu bìyào hé biérén bǐ lái bǐ qù.',vn:'Mỗi người đều là một cá thể độc lập, không cần phải so bì với người khác.'},
     {zh:'他爸爸是个体户，在市场上开了一家小店。',py:'Tā bàba shì gètǐhù, zài shìchǎng shang kāile yì jiā xiǎo diàn.',vn:'Bố cậu ấy là hộ kinh doanh cá thể, mở một cửa hàng nhỏ ở chợ.'}
   ],
   colloFull:[
     {zh:'成年个体',py:'chéngnián gètǐ',vn:'cá thể trưởng thành'},
     {zh:'个体差异',py:'gètǐ chāyì',vn:'khác biệt cá thể'},
     {zh:'个体户',py:'gètǐhù',vn:'hộ kinh doanh cá thể'},
     {zh:'每个个体',py:'měi ge gètǐ',vn:'mỗi cá thể'},
     {zh:'独立的个体',py:'dúlì de gètǐ',vn:'cá thể độc lập'}
   ],
   patterns:[
     {s:'成年 / 独立的 + 个体',m:'Cá thể trưởng thành / độc lập'},
     {s:'个体 — 群体 / 集体',m:'Cá thể — quần thể / tập thể'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cùng là một loại thuốc, nhưng do khác biệt cá thể, hiệu quả với mỗi người không giống nhau.',answer:'同样一种药，由于个体差异，对每个人的效果都不一样。',answerPy:'Tóngyàng yì zhǒng yào, yóuyú gètǐ chāyì, duì měi ge rén de xiàoguǒ dōu bù yíyàng.',
      note:'由于 nêu nguyên nhân; 对……的效果 (ôn HSK 4–5).',pair:'由于'},
     {promptLang:'vi',prompt:'Tập thể mạnh hay không, suy cho cùng quyết định bởi từng cá thể trong đó.',answer:'一个集体强不强，归根到底是由其中的每个个体决定的。',answerPy:'Yí ge jítǐ qiáng bu qiáng, guīgēn dàodǐ shì yóu qízhōng de měi ge gètǐ juédìng de.',
      note:'是由……决定的 = do … quyết định (ôn HSK 5); câu hỏi chính phản 强不强 làm chủ ngữ.',pair:'由……决定'}
   ]},

  {n:44,zh:'焦急',py:'jiāojí',pos:'Tính từ',vn:'nôn nóng, lo lắng, sốt ruột',hv:'tiêu cấp',em:'😰',lesson:1,
   explain:['Trong lòng rất lo và sốt ruột (như bị lửa đốt: 焦 = cháy): 焦急地等待, 焦急的心情, 显得很焦急.','Văn viết hơn 着急; 着急 dùng nhiều trong khẩu ngữ và có thể nói 别着急, còn 焦急 ít dùng trong câu mệnh lệnh.'],
   usage:'焦急地 + 等待 / 寻找 / 问; 焦急的 + 心情 / 目光 / 样子; 显得 / 感到 + 焦急. Bài khoá: 更为好动和焦急.',
   collo:['焦急地等待','焦急的心情','显得焦急','好动和焦急'],
   ex_zh:'小猫小狗甚至小孩儿，总显得比成年个体更为好动和焦急，其实对于他们，这只是个悠闲的速度。',ex_py:'Xiǎo māo xiǎo gǒu shènzhì xiǎoháir, zǒng xiǎnde bǐ chéngnián gètǐ gèng wéi hàodòng hé jiāojí, qíshí duìyú tāmen, zhè zhǐ shì ge yōuxián de sùdù.',ex_vn:'Mèo con, chó con thậm chí trẻ nhỏ luôn tỏ ra hiếu động và nôn nóng hơn các cá thể trưởng thành, thật ra với chúng, đó chỉ là một tốc độ thong thả.',
   exList:[
     {zh:'小猫小狗甚至小孩儿，总显得比成年个体更为好动和焦急，其实对于他们，这只是个悠闲的速度。',py:'Xiǎo māo xiǎo gǒu shènzhì xiǎoháir, zǒng xiǎnde bǐ chéngnián gètǐ gèng wéi hàodòng hé jiāojí, qíshí duìyú tāmen, zhè zhǐ shì ge yōuxián de sùdù.',vn:'Mèo con, chó con thậm chí trẻ nhỏ luôn tỏ ra hiếu động và nôn nóng hơn các cá thể trưởng thành, thật ra với chúng, đó chỉ là một tốc độ thong thả.'},
     {zh:'手术还没结束，家人都在门外焦急地等待着。',py:'Shǒushù hái méi jiéshù, jiārén dōu zài mén wài jiāojí de děngdàizhe.',vn:'Ca mổ chưa kết thúc, người nhà đều sốt ruột chờ đợi ngoài cửa.'},
     {zh:'看到孩子平安回来，妈妈焦急的心情才平静下来。',py:'Kàndào háizi píng\'ān huílái, māma jiāojí de xīnqíng cái píngjìng xiàlái.',vn:'Thấy con bình an trở về, nỗi lo lắng sốt ruột của mẹ mới lắng xuống.'}
   ],
   colloFull:[
     {zh:'焦急地等待',py:'jiāojí de děngdài',vn:'sốt ruột chờ đợi'},
     {zh:'焦急的心情',py:'jiāojí de xīnqíng',vn:'tâm trạng sốt ruột'},
     {zh:'显得焦急',py:'xiǎnde jiāojí',vn:'tỏ ra lo lắng'},
     {zh:'好动和焦急',py:'hàodòng hé jiāojí',vn:'hiếu động và nôn nóng'},
     {zh:'焦急万分',py:'jiāojí wànfēn',vn:'lo cuống cuồng'}
   ],
   patterns:[
     {s:'焦急地 + V (等待 / 寻找 / 问)',m:'Sốt ruột mà …'},
     {s:'焦急的 + 心情 / 目光 / 样子',m:'Tâm trạng / ánh mắt / dáng vẻ sốt ruột'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sắp đến giờ thi rồi mà cậu ấy vẫn chưa đến, cả lớp đều sốt ruột vô cùng.',answer:'眼看就要考试了，他还没来，全班同学都焦急万分。',answerPy:'Yǎnkàn jiù yào kǎoshì le, tā hái méi lái, quán bān tóngxué dōu jiāojí wànfēn.',
      note:'眼看就要……了 = sắp …, ngay trước mắt (ôn HSK 5).',pair:'就要……了'},
     {promptLang:'vi',prompt:'Sở dĩ trẻ con trông nôn nóng, là vì chúng xử lý thông tin nhanh hơn người lớn.',answer:'孩子之所以显得焦急，是因为他们处理信息比大人快。',answerPy:'Háizi zhīsuǒyǐ xiǎnde jiāojí, shì yīnwèi tāmen chǔlǐ xìnxī bǐ dàrén kuài.',
      note:'之所以……是因为…… (ôn HSK 5); câu so sánh 比.',pair:'之所以……是因为……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 179–180), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 小动物眼中的慢世界',
   preQuiz:[
     {q:'人动手去打苍蝇，结果怎么样？',opts:['一下就打中了','总是打不中','苍蝇飞走了再也没回来'],ans:1},
     {q:'猫是怎么拍到苍蝇的？',opts:['快速跳跃起来，一下就拍到','先瞄准很久再拍','等苍蝇落在盘子上再拍'],ans:0},
     {q:'在苍蝇眼里，人类快速的一拍是什么？',opts:['闪电','很可怕的攻击','只是个慢动作而已'],ans:2},
     {q:'昆虫一秒钟之内接收的信息量怎么样？',opts:['比人类多得多','比人类少得多','跟人类差不多'],ans:0},
     {q:'观察鸽子会发现什么？',opts:['它的视线总是不动','视线扫过周边时，它在微微颤抖','它比人类反应迟钝'],ans:1},
     {q:'在小动物看来，人类是什么样的？',opts:['又聪明又敏捷','跟它们一样快','反应迟钝、动作迟缓'],ans:2},
     {q:'科研人员用什么办法量化视觉感知？',opts:['测量体重的办法','临界闪光频率的办法','观察鸽子的办法'],ans:1},
     {q:'CFF值反映的是什么？',opts:['眼睛处理光线的速度','动物的体重','光的颜色'],ans:0},
     {q:'哪一个的CFF值最高？',opts:['人眼','犬','苍蝇'],ans:2},
     {q:'科学家推论，物种的CFF与什么有关？',opts:['与它生活的地方有关','与本身的体重和新陈代谢速率有关','与它的年龄有关'],ans:1},
     {q:'在科学家的研究中，CFF值名次最靠前的是什么动物？',opts:['松鼠','苍蝇','鸽子'],ans:0},
     {q:'小猫小狗甚至小孩儿为什么总显得很好动、很焦急？',opts:['因为他们不听话','因为他们身体不好','因为他们处理信息的速度快，这对他们只是悠闲的速度'],ans:2}
   ],
   lines:[
    {sp:0,zh:'你见过这样的场面吗？有人端来一个盛着菜的盘子，立刻飞来一只东张西望的苍蝇，企图落在盘子上，人动手去打，却总是打不中。有人纳闷儿，猫为什么能快速跳跃起来，瞄准都不用，一下就能拍到苍蝇？科学家这样解释：在苍蝇眼里，人类自认为闪电般快速的一拍，只是个慢动作而已。',
     py:'Nǐ jiànguo zhèyàng de chǎngmiàn ma? Yǒu rén duānlái yí ge chéngzhe cài de pánzi, lìkè fēilái yì zhī dōngzhāng-xīwàng de cāngying, qǐtú luò zài pánzi shang, rén dòng shǒu qù dǎ, què zǒngshì dǎ bu zhòng. Yǒu rén nà mènr, māo wèi shénme néng kuàisù tiàoyuè qǐlái, miáozhǔn dōu bú yòng, yíxià jiù néng pāidào cāngying? Kēxuéjiā zhèyàng jiěshì: zài cāngying yǎn li, rénlèi zì rènwéi shǎndiàn bān kuàisù de yì pāi, zhǐ shì ge màn dòngzuò éryǐ.',
     vn:'Bạn đã từng thấy cảnh tượng như thế này chưa? Có người bưng ra một chiếc đĩa đựng thức ăn, lập tức một con ruồi nhìn ngang nhìn dọc bay tới, toan đậu xuống đĩa; người ta giơ tay đập, nhưng lần nào cũng đập không trúng. Có người lấy làm lạ: tại sao con mèo có thể nhảy vọt lên thật nhanh, chẳng cần nhắm, một phát đã vỗ trúng con ruồi? Các nhà khoa học giải thích thế này: trong mắt con ruồi, cú đập mà con người tự cho là nhanh như chớp, chẳng qua chỉ là một động tác chậm mà thôi.'},
    {sp:0,zh:'有研究表明，昆虫这样的小动物，一秒钟之内接收的信息量，比人类等体型大的生物多得多。如果你观察一下鸽子就会发现，当它的视线扫过周边时，它在微微颤抖，看上去好像体内有另外一个钟表，走得比我们快好几倍。确切地说，在小动物看来，人类反应迟钝、动作迟缓，它们看人类，就像人类看庞大、笨拙的大象。',
     py:'Yǒu yánjiū biǎomíng, kūnchóng zhèyàng de xiǎo dòngwù, yì miǎozhōng zhī nèi jiēshōu de xìnxīliàng, bǐ rénlèi děng tǐxíng dà de shēngwù duō de duō. Rúguǒ nǐ guānchá yíxià gēzi jiù huì fāxiàn, dāng tā de shìxiàn sǎoguo zhōubiān shí, tā zài wēiwēi chàndǒu, kàn shàngqù hǎoxiàng tǐ nèi yǒu lìngwài yí ge zhōngbiǎo, zǒu de bǐ wǒmen kuài hǎo jǐ bèi. Quèqiè de shuō, zài xiǎo dòngwù kànlái, rénlèi fǎnyìng chídùn, dòngzuò chíhuǎn, tāmen kàn rénlèi, jiù xiàng rénlèi kàn pángdà, bènzhuō de dàxiàng.',
     vn:'Có nghiên cứu cho thấy, những động vật nhỏ như côn trùng, lượng thông tin tiếp nhận trong vòng một giây nhiều hơn rất nhiều so với những sinh vật có thân hình lớn như con người. Nếu bạn quan sát chim bồ câu sẽ phát hiện: khi ánh mắt nó lướt qua xung quanh, nó hơi run run, trông như trong người nó có một chiếc đồng hồ khác, chạy nhanh hơn của chúng ta gấp mấy lần. Nói chính xác thì, trong mắt động vật nhỏ, con người phản ứng chậm chạp, động tác rề rà; chúng nhìn con người cũng giống như con người nhìn những con voi khổng lồ, vụng về.'},
    {sp:0,zh:'为了量化这种看不见、摸不着的视觉感知，科研人员采用了临界闪光频率的办法。“临界闪光频率”简称“CFF (Critical Flicker Frequency)”，比方说，当一个间隔频率较低的光刺激我们的眼睛时，我们看到的是一明一暗的闪烁，随着光刺激间隔的缩短，我们的视力感到的就会是一个连续的光。CFF值反映的就是眼睛处理光线的速度。处理速度越快，CFF值就越高。',
     py:'Wèile liànghuà zhè zhǒng kàn bu jiàn, mō bu zháo de shìjué gǎnzhī, kēyán rényuán cǎiyòngle línjiè shǎnguāng pínlǜ de bànfǎ. “Línjiè shǎnguāng pínlǜ” jiǎnchēng “CFF (Critical Flicker Frequency)”, bǐfang shuō, dāng yí ge jiàngé pínlǜ jiào dī de guāng cìjī wǒmen de yǎnjing shí, wǒmen kàndào de shì yì míng yí àn de shǎnshuò, suízhe guāng cìjī jiàngé de suōduǎn, wǒmen de shìlì gǎndào de jiù huì shì yí ge liánxù de guāng. CFF zhí fǎnyìng de jiù shì yǎnjing chǔlǐ guāngxiàn de sùdù. Chǔlǐ sùdù yuè kuài, CFF zhí jiù yuè gāo.',
     vn:'Để lượng hóa loại cảm nhận thị giác không nhìn thấy, không sờ được này, các nhà nghiên cứu đã dùng phương pháp "tần số nhấp nháy tới hạn". "Tần số nhấp nháy tới hạn" gọi tắt là "CFF (Critical Flicker Frequency)". Chẳng hạn, khi một nguồn sáng có tần số ngắt quãng khá thấp kích thích mắt chúng ta, cái ta nhìn thấy là sự nhấp nháy lúc sáng lúc tối; khi khoảng ngắt giữa các lần kích thích ánh sáng ngắn dần lại, thị giác của ta sẽ cảm nhận thành một luồng sáng liên tục. Trị số CFF phản ánh chính là tốc độ mắt xử lý ánh sáng. Tốc độ xử lý càng nhanh, trị số CFF càng cao.'},
    {sp:0,zh:'人眼的CFF为60HZ左右，狗，哦，我们姑且换一个文雅的称呼吧，犬的CFF为80HZ。在犬的眼里，电视画面不是连续的，而是一系列静止图像的迅速变换。苍蝇的CFF高达250HZ，对视觉刺激的反应速度是人眼的4倍。',
     py:'Rényǎn de CFF wéi liùshí HZ zuǒyòu, gǒu, ò, wǒmen gūqiě huàn yí ge wényǎ de chēnghu ba, quǎn de CFF wéi bāshí HZ. Zài quǎn de yǎn li, diànshì huàmiàn bú shì liánxù de, ér shì yí xìliè jìngzhǐ túxiàng de xùnsù biànhuàn. Cāngying de CFF gāodá èrbǎi wǔshí HZ, duì shìjué cìjī de fǎnyìng sùdù shì rényǎn de sì bèi.',
     vn:'CFF của mắt người khoảng 60 Hz; chó — ồ, chúng ta tạm đổi sang một cách gọi văn nhã vậy — CFF của "khuyển" là 80 Hz. Trong mắt loài chó, hình ảnh ti vi không liên tục, mà là một loạt hình ảnh tĩnh thay đổi nhanh chóng. CFF của ruồi cao tới 250 Hz, tốc độ phản ứng với kích thích thị giác gấp 4 lần mắt người. (Chú thích của sách: HZ — héc (赫兹 hèzī), đơn vị tần số, tức số lần lặp lại mỗi giây.)'},
    {sp:0,zh:'有科学家推论，物种的CFF与其本身的体重和新陈代谢速率有关。体型越小，信号传达到大脑所需时间越短；新陈代谢速率越高，说明传递过程有更充足的能量支持。在论证这一推论时，科学家筛选出34种动物，把它们的典型体重、代谢速率和CFF标记在同一张图表中，变量显示出了显著的相关性。在科学家的研究中，CFF值名次最靠前的是松鼠。',
     py:'Yǒu kēxuéjiā tuīlùn, wùzhǒng de CFF yǔ qí běnshēn de tǐzhòng hé xīnchén-dàixiè sùlǜ yǒuguān. Tǐxíng yuè xiǎo, xìnhào chuándá dào dànǎo suǒ xū shíjiān yuè duǎn; xīnchén-dàixiè sùlǜ yuè gāo, shuōmíng chuándì guòchéng yǒu gèng chōngzú de néngliàng zhīchí. Zài lùnzhèng zhè yī tuīlùn shí, kēxuéjiā shāixuǎn chū sānshísì zhǒng dòngwù, bǎ tāmen de diǎnxíng tǐzhòng, dàixiè sùlǜ hé CFF biāojì zài tóng yì zhāng túbiǎo zhōng, biànliàng xiǎnshì chūle xiǎnzhù de xiāngguānxìng. Zài kēxuéjiā de yánjiū zhōng, CFF zhí míngcì zuì kàoqián de shì sōngshǔ.',
     vn:'Có nhà khoa học suy luận rằng CFF của một loài có liên quan đến cân nặng và tốc độ trao đổi chất của bản thân loài đó. Thân hình càng nhỏ, thời gian cần để tín hiệu truyền đến não càng ngắn; tốc độ trao đổi chất càng cao chứng tỏ quá trình truyền dẫn có năng lượng hỗ trợ càng dồi dào. Khi chứng minh suy luận này, các nhà khoa học đã chọn lọc ra 34 loài động vật, đánh dấu cân nặng điển hình, tốc độ trao đổi chất và CFF của chúng trên cùng một biểu đồ; các biến số cho thấy sự tương quan rõ rệt. Trong nghiên cứu của các nhà khoa học, loài đứng đầu về trị số CFF là con sóc.'},
    {sp:0,zh:'我们也许曾经发出过这样的感慨：看似渺小的苍蝇既然能躲过人类的攻击，势必有其过人之处。确实，它们没有博大精深的思想，不能进行深奥的思考，对强大的对手无能为力，但对外部环境能迅速做出判断，使它们有了更多的生存机会，这一优势真的实惠极了。',
     py:'Wǒmen yěxǔ céngjīng fāchūguo zhèyàng de gǎnkǎi: kànsì miǎoxiǎo de cāngying jìrán néng duǒguo rénlèi de gōngjī, shìbì yǒu qí guòrén zhī chù. Quèshí, tāmen méiyǒu bódà-jīngshēn de sīxiǎng, bù néng jìnxíng shēn\'ào de sīkǎo, duì qiángdà de duìshǒu wúnéngwéilì, dàn duì wàibù huánjìng néng xùnsù zuòchū pànduàn, shǐ tāmen yǒule gèng duō de shēngcún jīhuì, zhè yī yōushì zhēn de shíhuì jí le.',
     vn:'Có lẽ chúng ta từng thốt lên cảm thán thế này: con ruồi trông nhỏ bé đã có thể né được đòn tấn công của con người thì ắt hẳn phải có chỗ hơn người. Đúng vậy, chúng không có tư tưởng uyên thâm, không thể suy nghĩ sâu xa, bất lực trước đối thủ mạnh, nhưng lại có thể phán đoán nhanh chóng về môi trường bên ngoài, giúp chúng có thêm nhiều cơ hội sống sót — ưu thế này quả thật vô cùng thiết thực.'},
    {sp:0,zh:'信息处理速度上的差别，也是小动物看上去更敏捷的原因。小猫小狗甚至小孩儿，总显得比成年个体更为好动和焦急，其实对于他们，这只是个悠闲的速度。',
     py:'Xìnxī chǔlǐ sùdù shang de chābié, yě shì xiǎo dòngwù kàn shàngqù gèng mǐnjié de yuányīn. Xiǎo māo xiǎo gǒu shènzhì xiǎoháir, zǒng xiǎnde bǐ chéngnián gètǐ gèng wéi hàodòng hé jiāojí, qíshí duìyú tāmen, zhè zhǐ shì ge yōuxián de sùdù.',
     vn:'Sự khác biệt về tốc độ xử lý thông tin cũng là lý do khiến động vật nhỏ trông nhanh nhẹn hơn. Mèo con, chó con, thậm chí trẻ nhỏ, luôn tỏ ra hiếu động và nôn nóng hơn các cá thể trưởng thành; thật ra đối với chúng, đó chỉ là một tốc độ thong thả mà thôi.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 势必—一定 lấy từ sách (tr. 182–183, 做一做: 选择填空); 迟钝—迟缓, 企图—试图 soạn thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'势必 — 一定',
   same:'Khi làm phó từ, đều có nghĩa "tất nhiên sẽ như thế" (必然会怎样).',
   sameEx:{zh:'经常不来上课，势必／一定会影响考试成绩。',vn:'Thường xuyên nghỉ học thì chắc chắn sẽ ảnh hưởng đến kết quả thi.'},
   items:[
     {word:'势必',points:[
       'Căn cứ vào XU THẾ phát triển của sự việc mà suy đoán nhất định sẽ xảy ra kết quả nào đó — kết quả phần nhiều là BẤT LỢI.',
       'Chỉ là phó từ; KHÔNG diễn tả quyết tâm (không nói 你势必要……).',
       'Không làm tính từ (không nói 势必的时间). Văn viết.'
     ],ex:[{zh:'人口过度增长势必影响经济水平的提高。',vn:'Dân số tăng quá mức ắt sẽ ảnh hưởng đến việc nâng cao trình độ kinh tế.'}]},
     {word:'一定',points:[
       'Biểu thị suy đoán, nhưng kết quả KHÔNG nhất thiết là bất lợi (他是健身教练，身材一定很好).',
       'Biểu thị THÁI ĐỘ KIÊN QUYẾT, thường đứng trước động từ hoặc trợ động từ 要 / 得: 一定得努力.',
       'Còn làm TÍNH TỪ: "quy định, xác định" hoặc "cố định không đổi, tất nhiên": 一定的程序, 一定的关系.'
     ],ex:[{zh:'要想学好汉语，一定得努力。',vn:'Muốn học giỏi tiếng Trung thì nhất định phải cố gắng.'}]}
   ],
   quiz:[
     {sentence:'明天的比赛你＿＿要来给我们加油啊！',options:['势必','一定'],answer:1,
      why:'Lời dặn, thể hiện thái độ kiên quyết + 要 → chỉ 一定.'},
     {sentence:'长期缺少运动，＿＿会影响身体健康。',options:['势必','一定'],answer:0,both:true,
      why:'Suy đoán kết quả bất lợi theo xu thế → cả hai đều được; 势必 hợp văn viết hơn.'},
     {sentence:'学外语需要＿＿的方法，不能只靠死记硬背。',options:['势必','一定'],answer:1,
      why:'Làm định ngữ (tính từ: phương pháp nhất định) → chỉ 一定.'},
     {sentence:'他笑得这么开心，＿＿是考得不错。',options:['势必','一定'],answer:1,
      why:'Suy đoán một kết quả TỐT → 一定; 势必 thường dẫn tới kết quả bất lợi.'}
   ],
   sgk:{
     chung:{t:'做副词时，都有“必然会怎样”的意思。',vn:'Khi làm phó từ, đều có nghĩa "tất nhiên sẽ như thế".',vd:'经常不来上课，势必／一定会影响考试成绩。',vdVn:'Thường xuyên nghỉ học thì chắc chắn sẽ ảnh hưởng đến kết quả thi.'},
     khac:[
       {a:{t:'表示根据事情的发展，推测一定会产生某种结果，结果多是不利的。',vn:'Biểu thị căn cứ vào sự phát triển của sự việc, suy đoán nhất định sẽ sinh ra kết quả nào đó, kết quả phần nhiều là bất lợi.',vd:'人口过度增长势必影响经济水平的提高。',vdVn:'Dân số tăng quá mức ắt sẽ ảnh hưởng đến việc nâng cao trình độ kinh tế.'},
        b:{t:'表示推测，但推测结果不一定是不利的。',vn:'Biểu thị suy đoán, nhưng kết quả suy đoán không nhất thiết là bất lợi.',vd:'他是健身教练，身材一定很好。',vdVn:'Anh ấy là huấn luyện viên thể hình, dáng người chắc chắn rất đẹp.'}},
       {a:{t:'没有右边这个用法。',vn:'Không có cách dùng như bên phải.',vd:''},
        b:{t:'表示态度坚决，常用在动词或助动词“要”“得”前边。',vn:'Biểu thị thái độ kiên quyết, thường dùng trước động từ hoặc trợ động từ "要", "得".',vd:'要想学好汉语，一定得努力。',vdVn:'Muốn học giỏi tiếng Trung thì nhất định phải cố gắng.'}},
       {a:{t:'没有右边这个用法。',vn:'Không có cách dùng như bên phải.',vd:''},
        b:{t:'也可以做形容词，意思是“规定的、确定的”或“固定不变的、必然的”。',vn:'Cũng có thể làm tính từ, nghĩa là "quy định, xác định" hoặc "cố định không đổi, tất nhiên".',vd:'要按一定的程序进行操作。文章的难易跟篇幅的长短并没有一定的关系。',vdVn:'Phải thao tác theo quy trình nhất định. Độ khó dễ của bài văn không có quan hệ tất yếu với độ dài ngắn.'}}
     ],
     deLam:'选择“势必”或“一定”填空 — Tích vào từ điền được (có câu điền được cả hai)',
     lamThu:[
       {s:'人人都不遵守交通规则，＿＿会导致交通混乱。',dap:[true,true],
        giai:'Suy đoán theo xu thế, kết quả bất lợi (交通混乱) → dùng được cả 势必 lẫn 一定 (đáp án sách: 势必／一定).'},
       {s:'这件事就交给你了，你＿＿要把它办好。',dap:[false,true],
        giai:'Thể hiện yêu cầu, thái độ kiên quyết, đứng trước 要 → chỉ 一定.'},
       {s:'他学习这么好，＿＿能考上名牌大学。',dap:[false,true],
        giai:'Suy đoán kết quả TỐT (考上名牌大学) → 一定; 势必 thường chỉ kết quả bất lợi.'},
       {s:'他没日没夜地工作，吃饭睡觉都没有＿＿的时间。',dap:[false,true],
        giai:'Làm định ngữ (……的时间 = thời gian cố định) → 一定 dùng như tính từ; 势必 không làm tính từ.'}
     ]
   }},

  {pair:'迟钝 — 迟缓',
   same:'Đều là tính từ, đều có nghĩa "chậm", trái nghĩa với nhanh nhẹn; bài khoá dùng cả hai: 人类反应迟钝、动作迟缓.',
   sameEx:{zh:'年纪大了，他的反应越来越迟钝，动作也越来越迟缓。',vn:'Tuổi cao rồi, phản ứng của ông ngày càng chậm, động tác cũng ngày càng chậm chạp.'},
   items:[
     {word:'迟钝',points:[
       'Nói về độ NHẠY BÉN của cảm giác, suy nghĩ, phản ứng (không nhanh nhạy).',
       'Hay đi với 反应 / 感觉 / 头脑 / 思维 / 神经.',
       'Trái nghĩa: 灵敏, 敏锐.'
     ],ex:[{zh:'熬夜以后，我的头脑变得很迟钝。',vn:'Sau khi thức khuya, đầu óc tôi trở nên đờ đẫn.'}]},
     {word:'迟缓',points:[
       'Nói về TỐC ĐỘ của hành động, bước đi, sự tiến triển (chậm, rề rà).',
       'Hay đi với 动作 / 行动 / 步伐 / 进展 / 发展.',
       'Không có nghĩa "hoãn lại" (hoãn = 推迟).'
     ],ex:[{zh:'由于资金不足，工程进展迟缓。',vn:'Do thiếu vốn, công trình tiến triển chậm chạp.'}]}
   ],
   quiz:[
     {sentence:'他对别人的情绪变化很＿＿，常常说错话。',options:['迟钝','迟缓'],answer:0,
      why:'Nói về độ nhạy cảm (cảm nhận cảm xúc người khác) → 迟钝.'},
     {sentence:'由于资金不足，工程进展＿＿。',options:['迟钝','迟缓'],answer:1,
      why:'Tốc độ tiến triển của công việc → 迟缓.'},
     {sentence:'爷爷生病以后，行动越来越＿＿。',options:['迟钝','迟缓'],answer:1,
      why:'行动 (đi lại, cử động) nói về tốc độ → 迟缓.'},
     {sentence:'熬了一夜，我的头脑变得很＿＿。',options:['迟钝','迟缓'],answer:0,
      why:'头脑 (đầu óc) nói về độ nhạy bén → 迟钝.'}
   ]},

  {pair:'企图 — 试图',
   same:'Đều là động từ, đều đứng trước động từ khác, biểu thị có ý định làm một việc (thường chưa thành / khó thành).',
   sameEx:{zh:'他企图／试图逃跑，但很快就被抓住了。',vn:'Hắn toan bỏ trốn, nhưng rất nhanh đã bị bắt.'},
   items:[
     {word:'企图',points:[
       'Thường mang nghĩa XẤU: mưu toan, âm mưu làm việc không chính đáng (逃跑, 欺骗, 掩盖…).',
       'Còn là DANH TỪ: ý đồ, âm mưu (他的企图被识破了).',
       'Bài khoá dùng hài hước cho con ruồi: 企图落在盘子上.'
     ],ex:[{zh:'小偷企图从窗户逃跑。',vn:'Tên trộm toan trốn qua cửa sổ.'}]},
     {word:'试图',points:[
       'Trung tính: thử, cố gắng tìm cách làm gì (试 = thử) — có thể là việc tốt.',
       'Chỉ là động từ, không làm danh từ.',
       'Hay đi với 说服 / 解释 / 改变 / 解决.'
     ],ex:[{zh:'我试图说服他，可他就是不听。',vn:'Tôi đã cố thuyết phục anh ấy, nhưng anh ấy nhất định không nghe.'}]}
   ],
   quiz:[
     {sentence:'科学家们＿＿找到一种治疗这种病的新方法。',options:['企图','试图'],answer:1,
      why:'Việc tốt, nỗ lực thử làm → 试图; 企图 thường mang nghĩa xấu.'},
     {sentence:'他的＿＿被警察识破了。',options:['企图','试图'],answer:0,
      why:'Làm danh từ (ý đồ) → chỉ 企图.'},
     {sentence:'骗子＿＿用假身份骗取老人的钱。',options:['企图','试图'],answer:0,
      why:'Âm mưu làm việc xấu (lừa tiền người già) → 企图 tự nhiên nhất.'},
     {sentence:'她＿＿向大家解释，可是没有人愿意听。',options:['企图','试图'],answer:1,
      why:'Cố gắng giải thích — việc chính đáng → 试图.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'视力',hv:'thị lực',vn:'thị lực',note:'Trùng khít: 视力下降 = thị lực giảm sút.'},
    {zh:'能量',hv:'năng lượng',vn:'năng lượng',note:'Trùng khít; 正能量 = năng lượng tích cực.'},
    {zh:'攻击',hv:'công kích',vn:'tấn công, công kích',note:'Trùng khít: 人身攻击 = công kích cá nhân.'},
    {zh:'推论',hv:'suy luận',vn:'suy luận',note:'Trùng khít (cả động từ lẫn danh từ).'},
    {zh:'论证',hv:'luận chứng',vn:'luận chứng, chứng minh',note:'Trùng khít: 可行性论证 = luận chứng tính khả thi.'},
    {zh:'本身',hv:'bản thân',vn:'bản thân',note:'Trùng khít, nhưng tiếng Trung dùng cả cho sự vật: 问题本身 = bản thân vấn đề.'},
    {zh:'个体',hv:'cá thể',vn:'cá thể',note:'Trùng khít; 个体户 = hộ kinh doanh cá thể.'},
    {zh:'感慨',hv:'cảm khái',vn:'cảm khái, cảm thán',note:'Trùng khít, sắc thái văn chương như tiếng Việt.'},
    {zh:'文雅',hv:'văn nhã',vn:'nho nhã, văn nhã',note:'Trùng khít.'},
    {zh:'犬',hv:'khuyển',vn:'chó',note:'Như tiếng Việt: "khuyển" là từ văn viết, nói thường thì là "chó" (狗).'},
    {zh:'视线',hv:'thị tuyến',vn:'ánh mắt, tầm nhìn',note:'"Thị" = nhìn, "tuyến" = đường → đường nhìn; tiếng Việt nói "tầm mắt".'}
  ],
  idiom:[
    {zh:'东张西望',hv:'đông trương tây vọng',vn:'nhìn ngang nhìn dọc',note:'"Trương", "vọng" đều là nhìn → nhìn phía đông, ngó phía tây. Mẫu 东A西B: 东拉西扯, 东躲西藏.'},
    {zh:'博大精深',hv:'bác đại tinh thâm',vn:'uyên thâm, rộng lớn sâu sắc',note:'"Bác đại" = rộng lớn, "tinh thâm" = tinh tế sâu sắc.'},
    {zh:'无能为力',hv:'vô năng vi lực',vn:'bất lực, đành chịu',note:'Không có khả năng dốc sức → tiếng Việt có sẵn "bất lực".'},
    {zh:'新陈代谢',hv:'tân trần đại tạ',vn:'trao đổi chất; cái mới thay cái cũ',note:'"Tân" = mới, "trần" = cũ, "đại" = thay, "tạ" = tàn → cái mới thay thế cái cũ.'}
  ],
  trap:[
    {zh:'迟缓',hv:'trì hoãn',vn:'chậm chạp, rề rà',
     warn:'BẪY: "trì hoãn" tiếng Việt là hoãn lại, kéo dài (= 推迟 / 拖延). 迟缓 tiếng Trung chỉ là CHẬM (动作迟缓 = động tác chậm chạp).'},
    {zh:'迟钝',hv:'trì độn',vn:'chậm chạp, kém nhạy',
     warn:'"Trì độn" tiếng Việt hơi nặng, gần như chê "đần độn". 迟钝 chủ yếu là phản ứng / cảm giác CHẬM (反应迟钝), không nhất thiết là ngu.'},
    {zh:'名次',hv:'danh thứ',vn:'thứ hạng',
     warn:'Không nhầm với "danh từ" (名词 míngcí). 名次 = thứ hạng trong bảng xếp hạng (名次靠前).'},
    {zh:'实惠',hv:'thực huệ',vn:'thiết thực, đáng tiền; lợi ích thực tế',
     warn:'Không có từ "thực huệ" trong tiếng Việt. 实惠 hay dùng khi mua bán: 价格实惠 = giá phải chăng, 又便宜又实惠.'},
    {zh:'企图',hv:'xí đồ',vn:'mưu toan, âm mưu',
     warn:'Không liên quan "xí nghiệp" (企业). 企图 thường mang nghĩa XẤU: toan làm điều không chính đáng.'},
    {zh:'场面',hv:'trường diện',vn:'cảnh tượng',
     warn:'Không dịch "trường diện"; 场面 = cảnh tượng, quang cảnh (热闹的场面), còn có nghĩa sự phô trương (讲场面).'},
    {zh:'焦急',hv:'tiêu cấp',vn:'sốt ruột, lo lắng',
     warn:'"Tiêu" = cháy (như 焦点 tiêu điểm) → lòng như lửa đốt. Không dịch từng chữ; dùng "sốt ruột, nóng lòng".'},
    {zh:'标记',hv:'tiêu ký',vn:'đánh dấu; ký hiệu',
     warn:'Không có "tiêu ký" trong tiếng Việt. 标记 = đánh dấu (用红笔标记) / ký hiệu (做个标记).'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'瞄准',right:'目标'},
  {left:'挡住了',right:'视线'},
  {left:'反应',right:'迟钝'},
  {left:'博大精深的',right:'中国文化'},
  {left:'价格',right:'实惠'},
  {left:'焦急地',right:'等待'},
  {left:'补充',right:'能量'},
  {left:'采取一系列',right:'措施'},
  {left:'用红笔',right:'标记'},
  {left:'发出',right:'感慨'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — câu mới (không chép bài khoá / SGK), mỗi câu một tình huống; ôn xoáy ốc từ + ngữ pháp các bài trước
// ══════════════════════════════════════════
var fillData = [
  {pre:'比赛结束的那一刻，球迷们冲进球场又哭又笑，那个',blank:'场面',post:'我到现在都忘不了。',hint:'(cảnh tượng)',ans:'场面',exp:'场面 = cảnh tượng diễn ra trong một hoàn cảnh cụ thể (那个场面 / 热闹的场面), không phải "phong cảnh" (风景).'},
  {pre:'妈妈给每个人都',blank:'盛',post:'了一大碗汤，叫我们趁热喝。',hint:'(múc)',ans:'盛',exp:'盛 đọc chéng khi là động từ: múc / xới thức ăn vào bát (盛饭, 盛汤); đọc shèng là "thịnh" (nhiều, đầy đủ) — nghĩa khác hẳn.'},
  {pre:'平时他每天都第一个到办公室，今天十点了还没来，大家心里都很',blank:'纳闷儿',post:'。',hint:'(thấy lạ, khó hiểu)',ans:'纳闷儿',exp:'纳闷儿 = thấy lạ, không hiểu vì sao (khẩu ngữ, có 儿); hay đi với 心里 / 很 / 感到.'},
  {pre:'广场上的',blank:'鸽子',post:'一点儿也不怕人，常常飞到游客手上吃东西。',hint:'(chim bồ câu)',ans:'鸽子',exp:'鸽子 = chim bồ câu, lượng từ 只 / 群 (一群鸽子).'},
  {pre:'地铁站修好以后，车站',blank:'周边',post:'的房子一下子贵了不少。',hint:'(vùng xung quanh)',ans:'周边',exp:'Danh từ chỉ nơi + 周边 = khu vực quanh đó (车站周边, 学校周边); làm định ngữ: 周边的房子.'},
  {pre:'第一次上台讲话，他紧张得双手不停地',blank:'颤抖',post:'。',hint:'(run rẩy)',ans:'颤抖',exp:'颤抖 = run (tay, giọng, người) vì sợ, lạnh hay xúc động; 紧张得 + kết quả 颤抖.'},
  {pre:'地铁的发车',blank:'间隔',post:'是五分钟，错过一趟也不用等太久。',hint:'(khoảng cách thời gian)',ans:'间隔',exp:'间隔 làm danh từ = khoảng cách giữa hai lần (发车间隔 = khoảng cách giữa hai chuyến xe).'},
  {pre:'你的',blank:'推论',post:'听起来有道理，可是缺少证据，大家很难相信。',hint:'(lời suy luận)',ans:'推论',exp:'推论 làm danh từ = điều suy ra từ dữ kiện; cần 证据 để chứng minh.'},
  {pre:'这份工作',blank:'本身',post:'并不难，难的是每天都得早上五点起床。',hint:'(tự bản thân)',ans:'本身',exp:'Danh từ + 本身 = bản thân sự việc đó, đối lập với điều đi kèm (难的是……).'},
  {pre:'这次比赛他虽然没拿到好',blank:'名次',post:'，但坚持跑到了终点，已经很了不起了。',hint:'(thứ hạng)',ans:'名次',exp:'名次 = thứ hạng trong thi đấu, xếp hạng (拿到好名次, 名次靠前).'},
  {pre:'站在高高的山顶上，看着脚下的云，我第一次觉得自己那么',blank:'渺小',post:'。',hint:'(nhỏ bé)',ans:'渺小',exp:'渺小 = nhỏ bé (khi so với cái lớn lao như thiên nhiên), mang cảm xúc; không dùng cho đồ vật nhỏ (东西很小).'},
  {pre:'每个孩子都是不同的',blank:'个体',post:'，父母不应该总拿自己的孩子跟别人比。',hint:'(cá thể)',ans:'个体',exp:'个体 = từng cá thể riêng biệt; ý câu: mỗi đứa trẻ là một người riêng, không so sánh được.'},
  {pre:'他平时说话很',blank:'文雅',post:'，可一着急，什么难听的话都说出来了。',hint:'(nho nhã, lịch sự)',ans:'文雅',exp:'文雅 = nho nhã, lịch sự (lời nói, cử chỉ), đối lập với 难听的话 ở vế sau.'},
  {pre:'爷爷讲道理时喜欢打',blank:'比方',post:'，再难懂的事让他一说，我们都明白了。',hint:'(ví von, so sánh)',ans:'比方',exp:'打比方 = đưa ra hình ảnh so sánh cho dễ hiểu; 比方 còn dùng trong 比方说 = chẳng hạn như.'},
  {pre:'几只松鼠在树上不停地',blank:'跳跃',post:'，一会儿就不见了。',hint:'(nhảy nhót)',ans:'跳跃',exp:'跳跃 = nhảy, nhảy vọt (hai âm tiết, thiên về văn viết); có 不停地 phía trước nên dùng động từ hai âm tiết.'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — câu mới, chỉ một trật tự đúng
// ══════════════════════════════════════════
var sortData = [
  {words:['他','第一次','就','猜中了','正确答案','。'],ans:'他第一次就猜中了正确答案。',audio:'他第一次就猜中了正确答案。'},
  {words:['猫','悄悄地','瞄准了','那只','老鼠','。'],ans:'猫悄悄地瞄准了那只老鼠。',audio:'猫悄悄地瞄准了那只老鼠。'},
  {words:['我们','姑且','把这个问题','放一放','吧','。'],ans:'我们姑且把这个问题放一放吧。',audio:'我们姑且把这个问题放一放吧。'},
  {words:['服务员','把汤','端到了','我们的','桌子上','。'],ans:'服务员把汤端到了我们的桌子上。',audio:'服务员把汤端到了我们的桌子上。'},
  {words:['前面的','大树','挡住了','我的','视线','。'],ans:'前面的大树挡住了我的视线。',audio:'前面的大树挡住了我的视线。'},
  {words:['请','把','重要的地方','标记','出来','。'],ans:'请把重要的地方标记出来。',audio:'请把重要的地方标记出来。'},
  {words:['他们俩','东一句西一句地','聊了','一个晚上','。'],ans:'他们俩东一句西一句地聊了一个晚上。',audio:'他们俩东一句西一句地聊了一个晚上。'},
  {words:['那个','场面','让','在场的人','都','感动','了','。'],ans:'那个场面让在场的人都感动了。',audio:'那个场面让在场的人都感动了。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'在考场上，他一直____，被老师提醒了好几次。',opts:['东张西望','一动不动','无精打采','滔滔不绝'],ans:0,exp:'Nhìn ngang ngó dọc trong phòng thi nên bị nhắc → 东张西望. 一动不动 là ngồi im; 无精打采 (bài 2) là uể oải; 滔滔不绝 (bài 1) là nói không dứt — không phải lý do bị nhắc trong giờ thi.'},
  {wrong:'偷了东西以后，他____了好几个月，最后还是被警察抓到了。',opts:['东躲西藏','走来走去','一五一十','鸦雀无声'],ans:0,exp:'Trốn chỗ này chỗ kia để khỏi bị bắt → 东躲西藏 (东A西B, A và B gần nghĩa). 走来走去 chỉ đi qua đi lại; 一五一十 là kể đầu đuôi; 鸦雀无声 (bài 1) tả không gian im phăng phắc.'},
  {wrong:'虽然贵了点儿，可她一眼就____了这双鞋，非买不可。',opts:['看中','看重','看好','看见'],ans:0,exp:'看中 (zhòng) = ưng, vừa ý chọn lấy. 看重 là coi trọng (看重友谊); 看好 là tin sẽ thành công (看好这支球队); 看见 chỉ là nhìn thấy, không giải thích được 非买不可.'},
  {wrong:'我让大家猜我的年龄，大家猜了好几次都没猜____。',opts:['中','好','完','开'],ans:0,exp:'猜中 = đoán trúng (V + 中 chỉ kết quả trúng đích). 猜好 / 猜完 / 猜开 không phải bổ ngữ kết quả hợp nghĩa với "đoán".'},
  {wrong:'雨一时半会儿停不了，我们____在这家小店里坐坐，等雨小了再走。',opts:['姑且','势必','何必','务必'],ans:0,exp:'Giải pháp tạm thời "cứ… đã, rồi tính sau" → 姑且 + V. 势必 là ắt sẽ; 何必 là cần gì phải; 务必 (bài 12) là nhất thiết phải — không hợp với 等雨小了再走.'},
  {wrong:'这个办法到底好不好____不论，至少我们应该先试一试。',opts:['姑且','暂时','何况','未免'],ans:0,exp:'Cụm cố định A + 姑且不论 = tạm chưa bàn đến A. 暂时 cũng nghĩa "tạm thời" nhưng không đi với 不论 — lỗi dịch từng chữ hay gặp; 何况 là huống hồ; 未免 (bài 4) là có phần hơi.'},
  {wrong:'小偷____从窗户进去，没想到窗户是从里面锁上的。',opts:['企图','动手','瞄准','纳闷儿'],ans:0,exp:'Toan tính làm việc xấu → 企图 + V (sắc thái chê). 动手 không mang cụm động từ phía sau như vậy; 瞄准 cần tân ngữ là mục tiêu; 纳闷儿 là thấy khó hiểu.'},
  {wrong:'爷爷八十多岁了，走路虽然有点儿____，耳朵却很好。',opts:['迟缓','迟钝','深奥','渺小'],ans:0,exp:'Tốc độ đi lại, động tác chậm → 迟缓. 迟钝 nói độ nhạy của phản ứng, đầu óc, cảm giác (反应迟钝); 深奥 là sâu xa khó hiểu; 渺小 là nhỏ bé.'},
  {wrong:'他对别人的情绪很____，女朋友生气了好几天，他都没看出来。',opts:['迟钝','迟缓','文雅','确切'],ans:0,exp:'Không nhạy với cảm xúc người khác → 迟钝. 迟缓 chỉ tốc độ động tác, tiến độ; 文雅 là nho nhã; 确切 là chính xác.'},
  {wrong:'大家都这样乱扔东西，周边的环境____会越来越差。',opts:['势必','务必','未必','何必'],ans:0,exp:'Suy ra kết quả xấu tất yếu theo xu thế → 势必 (会). 务必 dùng để yêu cầu (务必注意); 未必 là chưa chắc — trái logic câu; 何必 là cần gì phải.'},
  {wrong:'这位教授讲课从来不讲____的大道理，总是用生活中的小事来说明。',opts:['深奥','庞大','实惠','笨拙'],ans:0,exp:'Đạo lý khó hiểu, cao siêu → 深奥, đối lập với việc dùng chuyện đời thường để giải thích. 庞大 là đồ sộ (thể tích, quy mô); 实惠 là thiết thực; 笨拙 là vụng về.'},
  {wrong:'这家超市的东西包装虽然一般，但又便宜又好用，非常____。',opts:['实惠','实际','实现','实行'],ans:0,exp:'Rẻ mà dùng bền, đáng tiền → 实惠. 实际 là thực tế; 实现 là thực hiện (目标); 实行 (bài 1) là thi hành (规定) — chung chữ đầu nhưng khác nghĩa.'},
  {wrong:'孩子放学两个小时了还没到家，妈妈____地在门口走来走去。',opts:['焦急','急忙','紧急','赶紧'],ans:0,exp:'Tâm trạng sốt ruột, lo lắng → 焦急地 + V. 急忙 là vội vàng làm ngay một việc (急忙跑出去), không tả việc đi qua đi lại chờ đợi; 紧急 tả tình huống khẩn cấp (紧急情况); 赶紧 là phó từ "mau chóng", không đi với 地 để tả tâm trạng.'},
  {wrong:'这种鸟平时很安静，可如果有人走近它的孩子，它就会主动____人。',opts:['攻击','进攻','打架','动手'],ans:0,exp:'攻击 + người / con vật = tấn công. 进攻 dùng cho quân đội, đội bóng (进攻对方); 打架 và 动手 (đánh nhau, ra tay) không mang tân ngữ 人 trực tiếp.'},
  {wrong:'网上的信息太多了，我们要学会____，不能什么都相信。',opts:['筛选','选中','标记','论证'],ans:0,exp:'Sàng lọc, chọn ra cái đáng tin trong nhiều thứ → 筛选. 选中 là đã chọn trúng một cái (cần tân ngữ); 标记 là đánh dấu; 论证 là lập luận chứng minh.'},
  {wrong:'我们班有三十个人，____地说，是二十九个，小王上个月转学了。',opts:['确切','确实','肯定','正确'],ans:0,exp:'确切地说 = nói cho chính xác thì, dùng để sửa lại con số vừa nêu. 确实 là quả thật; 肯定地说 là nói chắc chắn; 正确 là đúng — đều không có chức năng "chỉnh lại cho chính xác".'},
  {wrong:'医生说病人送来得太晚了，他们也____。',opts:['无能为力','一举两得','名副其实','不知不觉'],ans:0,exp:'Bất lực, không làm gì được nữa → 无能为力 (đứng cuối câu, không mang tân ngữ). Ba thành ngữ kia không nói về khả năng cứu chữa.'}
];

// ══════════════════════════════════════════
// DỊCH Việt → Trung — câu mới, dùng từ của bài + ôn ngữ pháp các bài trước
// ══════════════════════════════════════════
var translateData = [
  {vi:'Máy tính của em vẫn chưa sửa xong, cứ tạm dùng máy của chị mà làm bài tập đã, kẻo nộp bài muộn.',zh:'你的电脑还没修好，姑且拿我的写作业吧，免得作业交晚了。',py:'Nǐ de diànnǎo hái méi xiūhǎo, gūqiě ná wǒ de xiě zuòyè ba, miǎnde zuòyè jiāo wǎn le.',goiY:['姑且……吧','免得'],giai:'姑且 + V + 吧 = cứ tạm… đã (giải pháp tạm thời); 免得 (ôn bài 14) đứng đầu vế sau nêu điều muốn tránh.'},
  {vi:'Lần đầu đến Bắc Kinh, vừa ra khỏi ga tàu cậu ấy đã nhìn ngang ngó dọc, nhìn gì cũng thấy mới lạ.',zh:'第一次来北京，他一出火车站就东张西望，看什么都觉得新鲜。',py:'Dì-yī cì lái Běijīng, tā yì chū huǒchēzhàn jiù dōngzhāng-xīwàng, kàn shénme dōu juéde xīnxiān.',goiY:['一……就……','东张西望','V + 什么都……'],giai:'"Nhìn ngang ngó dọc" = 东张西望 (东A西B, hai động từ gần nghĩa); 看什么都 = nhìn gì cũng.'},
  {vi:'Rõ ràng tôi chưa nói gì cả, vậy mà mẹ chỉ nhìn một cái đã đoán trúng tâm sự của tôi.',zh:'我明明什么都没说，妈妈却一眼就猜中了我的心事。',py:'Wǒ míngmíng shénme dōu méi shuō, māma què yì yǎn jiù cāizhòngle wǒ de xīnshì.',goiY:['明明……却……','一眼就','猜中'],giai:'明明 (ôn bài 6) + 却 nêu sự trái ngược; 猜中 (zhòng) = đoán trúng; 一眼就 = chỉ nhìn một cái đã.'},
  {vi:'Nếu trẻ con dựa dẫm quá nhiều vào điện thoại, thị lực ắt sẽ bị ảnh hưởng.',zh:'如果孩子过于依赖手机，视力势必会受到影响。',py:'Rúguǒ háizi guòyú yīlài shǒujī, shìlì shìbì huì shòudào yǐngxiǎng.',goiY:['过于','势必','视力'],giai:'过于 (ôn bài 3) + V/Adj = quá mức; 势必 (会) nêu kết quả xấu tất yếu; "bị ảnh hưởng" = 受到影响.'},
  {vi:'Phản ứng chậm không có nghĩa là không thông minh, có lẽ cậu ấy chỉ là nghĩ kỹ hơn người khác mà thôi.',zh:'反应迟钝并不等于不聪明，也许他只是比别人想得更仔细而已。',py:'Fǎnyìng chídùn bìng bù děngyú bù cōngming, yěxǔ tā zhǐ shì bǐ biérén xiǎng de gèng zǐxì éryǐ.',goiY:['迟钝','并不等于','只是……而已'],giai:'Phản ứng chậm = 反应迟钝 (không dùng 迟缓 cho 反应); 只是……而已 (ôn bài 5) = chỉ là… mà thôi.'},
  {vi:'Để chứng minh quan điểm này, các nhà khoa học đã làm một loạt thí nghiệm, kết quả đều cho thấy họ đúng.',zh:'为了论证这个观点，科学家们做了一系列实验，结果都证明他们是对的。',py:'Wèile lùnzhèng zhège guāndiǎn, kēxuéjiāmen zuòle yí xìliè shíyàn, jiéguǒ dōu zhèngmíng tāmen shì duì de.',goiY:['论证','一系列','证明'],giai:'论证 + 观点 = lập luận chứng minh một quan điểm; 一系列 + danh từ = một loạt (一 đọc yí trước 系 thanh 4).'}
];

// ══════════════════════════════════════════
// Dịch Trung → Việt — câu mới, không trùng chiều trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vị giáo sư già này có thể giảng những đạo lý sâu xa một cách rất đơn giản, nên sinh viên ai cũng thích nghe ông giảng.',zh:'这位老教授能把深奥的道理讲得很简单，学生们都爱听他的课。',py:'Zhè wèi lǎo jiàoshòu néng bǎ shēn\'ào de dàolǐ jiǎng de hěn jiǎndān, xuéshengmen dōu ài tīng tā de kè.',goiY:['深奥 = sâu xa, khó hiểu','把……讲得很简单 = giảng… cho thật dễ hiểu'],giai:'Câu 把 + V得 + kết quả: dịch thành "giảng… một cách rất đơn giản / cho dễ hiểu".'},
  {vi:'Đứng bên bờ biển, người ta không khỏi cảm thán: so với thiên nhiên, bản thân mình nhỏ bé biết bao.',zh:'站在大海边，人们不禁感慨：和大自然相比，自己是多么渺小。',py:'Zhàn zài dàhǎi biān, rénmen bùjīn gǎnkǎi: hé dàzìrán xiāngbǐ, zìjǐ shì duōme miǎoxiǎo.',goiY:['不禁 = không khỏi','感慨 = cảm thán','和……相比 = so với…','渺小 = nhỏ bé'],giai:'Ôn 不禁 (bài 15) và 和……相比 (bài 13); 是多么 + Adj = … biết bao.'},
  {vi:'Món ăn ở quán này không những đáng đồng tiền mà thái độ phục vụ cũng tốt, thảo nào cuối tuần nào cũng phải xếp hàng dài.',zh:'这家饭馆的菜不但实惠，而且服务员态度也好，难怪每到周末都要排长队。',py:'Zhè jiā fànguǎn de cài búdàn shíhuì, érqiě fúwùyuán tàidu yě hǎo, nánguài měi dào zhōumò dōu yào pái cháng duì.',goiY:['实惠 = đáng tiền, thiết thực','难怪 = thảo nào','排长队 = xếp hàng dài'],giai:'实惠 khi nói về đồ ăn, hàng hoá dịch "đáng đồng tiền / rẻ mà ngon", không dịch "thực huệ".'},
  {vi:'Người trao đổi chất nhanh thì ăn nhiều đến mấy cũng khó béo, vì cơ thể tiêu hao nhiều năng lượng.',zh:'新陈代谢快的人吃得再多也不容易胖，因为身体消耗的能量多。',py:'Xīnchén-dàixiè kuài de rén chī de zài duō yě bù róngyì pàng, yīnwèi shēntǐ xiāohào de néngliàng duō.',goiY:['新陈代谢 = trao đổi chất','再……也…… = … đến mấy cũng…','消耗能量 = tiêu hao năng lượng'],giai:'V得再 + Adj + 也…… = dù… đến mấy cũng…; định ngữ dài 新陈代谢快的人 → "người trao đổi chất nhanh".'},
  {vi:'Voi tuy thân hình khổng lồ nhưng động tác lại chẳng hề vụng về, lúc qua sông chúng còn biết giúp đỡ lẫn nhau.',zh:'大象虽然体型庞大，动作却并不笨拙，过河的时候还会互相帮助。',py:'Dàxiàng suīrán tǐxíng pángdà, dòngzuò què bìng bú bènzhuō, guò hé de shíhou hái huì hùxiāng bāngzhù.',goiY:['体型庞大 = thân hình khổng lồ','并不笨拙 = chẳng hề vụng về'],giai:'虽然……却并不…… = tuy… nhưng chẳng hề…; 并 nhấn mạnh phủ định một suy nghĩ thông thường.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 185): 缩写课文 400 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:400,
  de:'这篇课文讲了一个很有趣的自然现象，为什么人类打苍蝇很难，小猫却很容易就能抓到苍蝇？这主要是由于一个CFF值在起作用。请参考练习5，把课文缩写成400字左右的短文。',
  prompt:'Bài khoá kể về một hiện tượng tự nhiên rất thú vị: vì sao con người đập ruồi rất khó, còn mèo con lại dễ dàng bắt được ruồi? Chủ yếu là do trị số CFF phát huy tác dụng. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành một đoạn văn khoảng 400 chữ.',
  dan:[
    {hoi:'在打苍蝇方面，人和猫有什么不同？为什么？',goiY:'人：动手、打不中　猫：一下子拍到　在苍蝇眼里、慢动作'},
    {hoi:'昆虫等小动物在接收信息方面跟人类有什么不同？',goiY:'小动物：接收的信息量……，比如鸽子……　人类：反应……、动作……'},
    {hoi:'什么是CFF？',goiY:'视觉感知、光刺激、闪烁、连续的光、处理光线的速度'},
    {hoi:'人和狗等动物的CFF有何不同？',goiY:'CFF值：人、犬、苍蝇'},
    {hoi:'CFF与什么有关？',goiY:'体重、新陈代谢'},
    {hoi:'苍蝇为什么能躲过人类的攻击？',goiY:'对……做出判断，使……有了生存机会'},
    {hoi:'为什么小动物看上去更敏捷？',goiY:'信息处理速度'}
  ],
  tuNen:['东张西望','企图','纳闷儿','迟钝','迟缓','姑且','筛选','新陈代谢','势必','无能为力'],
  cauTruc:[
    {ten:'你见过……吗？……', nhan:'你见过', vd:'你见过这样的场面吗？人动手去打苍蝇，却总是打不中。', khi:'MỞ ĐẦU bằng câu hỏi gợi tình huống quen thuộc, dẫn vào hiện tượng (dòng 1 bảng 练习5).'},
    {ten:'A……，B却……', nhan:'却', vd:'人动手去打，却总是打不中；猫却一下子就能拍到苍蝇。', khi:'Đối chiếu người và mèo — hai kết quả trái ngược.'},
    {ten:'在……看来，……就像……', nhan:'在……看来', vd:'在小动物看来，人类反应迟钝、动作迟缓，就像笨拙的大象。', khi:'Đổi góc nhìn sang động vật nhỏ, dùng so sánh cho sinh động (dòng 2).'},
    {ten:'……简称……，……反映的是……', nhan:'反映的是', vd:'“临界闪光频率”简称CFF，CFF值反映的是眼睛处理光线的速度。', khi:'GIẢI THÍCH khái niệm khoa học ngắn gọn (dòng 3).'},
    {ten:'A 为……，B 为……，而 C 高达……', nhan:'高达', vd:'人眼的CFF为60HZ，犬为80HZ，而苍蝇高达250HZ。', khi:'So sánh số liệu, nhấn con số lớn nhất bằng 高达 (dòng 4).'},
    {ten:'……与……有关：越……，越……', nhan:'与……有关', vd:'CFF与体重和新陈代谢有关：体型越小，CFF值越高。', khi:'Nêu quan hệ nhân quả / tương quan (dòng 5).'},
    {ten:'虽然……，却……，因此……', nhan:'因此', vd:'苍蝇虽然渺小，却能迅速做出判断，因此有了更多的生存机会。', khi:'KẾT: lý giải ưu thế của động vật nhỏ (dòng 6 – 7).'}
  ],
  checklist:[
    'Bài tóm tắt có đi đủ 7 ý theo bảng bài tập 5 (người và mèo đập ruồi → lượng thông tin → CFF là gì → CFF của người / chó / ruồi → CFF liên quan gì → vì sao ruồi né được → vì sao động vật nhỏ nhanh nhẹn) chưa?',
    'Có giải thích được khái niệm CFF bằng lời đơn giản (nhấp nháy → ánh sáng liên tục, tốc độ xử lý ánh sáng) chưa?',
    'Có dùng đúng số liệu 60HZ / 80HZ / 250HZ và kết luận "gấp 4 lần mắt người" chưa?',
    'Đã dùng được ít nhất 6 từ / cấu trúc của bài (东张西望, 企图, 纳闷儿, 迟钝, 迟缓, 筛选, 新陈代谢, 势必, 无能为力, 姑且…) chưa?',
    'Bài dài khoảng 400 chữ Hán (350–450), viết bằng lời của mình, không chép nguyên bài khoá chưa?'
  ],
  model:{
    zh:'你见过这样的场面吗？有人端来一个装着菜的盘子，一只东张西望的苍蝇立刻飞过来，企图落在上面。人动手去打，却总是打不中；猫却能快速跳起来，一下子就拍到苍蝇。很多人对此感到纳闷儿。科学家解释说，在苍蝇眼里，人类快速的一拍只是个慢动作而已。研究表明，昆虫等小动物一秒钟之内接收的信息量比人类多得多。比如鸽子，当它的视线扫过周边时，身体在微微颤抖，好像体内有一个走得更快的钟表。在小动物看来，人类反应迟钝、动作迟缓，就像庞大、笨拙的大象。为了量化这种视觉感知，科研人员采用了“临界闪光频率”，简称CFF。光刺激的间隔频率较低时，我们看到的是一明一暗的闪烁；间隔缩短以后，我们感到的就是连续的光。CFF值反映的是眼睛处理光线的速度，速度越快，CFF值越高。人眼的CFF大约是60HZ，犬为80HZ，而苍蝇高达250HZ，是人眼的4倍。科学家推论，CFF与动物本身的体重和新陈代谢速率有关：体型越小，新陈代谢越快，CFF值就越高。他们筛选出34种动物进行论证，结果显示二者有显著的相关性。苍蝇看似渺小，却势必有其过人之处。它们对强大的对手无能为力，但能迅速对外部环境做出判断，因此有了更多的生存机会。同样，信息处理速度上的差别，也让小动物看上去更敏捷。我们姑且可以说，在它们眼中，这是一个慢世界。',
    py:'Nǐ jiànguo zhèyàng de chǎngmiàn ma? Yǒu rén duānlái yí ge zhuāngzhe cài de pánzi, yì zhī dōngzhāng-xīwàng de cāngying lìkè fēi guòlái, qǐtú luò zài shàngmian. Rén dòng shǒu qù dǎ, què zǒngshì dǎ bu zhòng; māo què néng kuàisù tiào qǐlái, yíxiàzi jiù pāidào cāngying. Hěn duō rén duì cǐ gǎndào nà mènr. Kēxuéjiā jiěshì shuō, zài cāngying yǎn li, rénlèi kuàisù de yì pāi zhǐ shì ge màn dòngzuò éryǐ. Yánjiū biǎomíng, kūnchóng děng xiǎo dòngwù yì miǎozhōng zhī nèi jiēshōu de xìnxīliàng bǐ rénlèi duō de duō. Bǐrú gēzi, dāng tā de shìxiàn sǎoguo zhōubiān shí, shēntǐ zài wēiwēi chàndǒu, hǎoxiàng tǐ nèi yǒu yí ge zǒu de gèng kuài de zhōngbiǎo. Zài xiǎo dòngwù kànlái, rénlèi fǎnyìng chídùn, dòngzuò chíhuǎn, jiù xiàng pángdà, bènzhuō de dàxiàng. Wèile liànghuà zhè zhǒng shìjué gǎnzhī, kēyán rényuán cǎiyòngle “línjiè shǎnguāng pínlǜ”, jiǎnchēng CFF. Guāng cìjī de jiàngé pínlǜ jiào dī shí, wǒmen kàndào de shì yì míng yí àn de shǎnshuò; jiàngé suōduǎn yǐhòu, wǒmen gǎndào de jiù shì liánxù de guāng. CFF zhí fǎnyìng de shì yǎnjing chǔlǐ guāngxiàn de sùdù, sùdù yuè kuài, CFF zhí yuè gāo. Rényǎn de CFF dàyuē shì liùshí HZ, quǎn wéi bāshí HZ, ér cāngying gāodá èrbǎi wǔshí HZ, shì rényǎn de sì bèi. Kēxuéjiā tuīlùn, CFF yǔ dòngwù běnshēn de tǐzhòng hé xīnchén-dàixiè sùlǜ yǒuguān: tǐxíng yuè xiǎo, xīnchén-dàixiè yuè kuài, CFF zhí jiù yuè gāo. Tāmen shāixuǎn chū sānshísì zhǒng dòngwù jìnxíng lùnzhèng, jiéguǒ xiǎnshì èr zhě yǒu xiǎnzhù de xiāngguānxìng. Cāngying kànsì miǎoxiǎo, què shìbì yǒu qí guòrén zhī chù. Tāmen duì qiángdà de duìshǒu wúnéngwéilì, dàn néng xùnsù duì wàibù huánjìng zuòchū pànduàn, yīncǐ yǒule gèng duō de shēngcún jīhuì. Tóngyàng, xìnxī chǔlǐ sùdù shang de chābié, yě ràng xiǎo dòngwù kàn shàngqù gèng mǐnjié. Wǒmen gūqiě kěyǐ shuō, zài tāmen yǎn zhōng, zhè shì yí ge màn shìjiè.',
    vn:'Bạn đã từng thấy cảnh này chưa? Có người bưng ra một đĩa thức ăn, lập tức một con ruồi nhìn ngang nhìn dọc bay tới, toan đậu xuống đĩa. Người ta giơ tay đập nhưng lần nào cũng không trúng; con mèo thì lại nhảy vọt lên thật nhanh, một phát đã vỗ trúng con ruồi. Nhiều người lấy làm lạ về chuyện này. Các nhà khoa học giải thích rằng, trong mắt con ruồi, cú đập nhanh của con người chẳng qua chỉ là một động tác chậm mà thôi. Nghiên cứu cho thấy lượng thông tin mà côn trùng và các động vật nhỏ tiếp nhận trong một giây nhiều hơn con người rất nhiều. Chẳng hạn chim bồ câu: khi ánh mắt nó lướt qua xung quanh, thân mình hơi run run, như thể trong người có một chiếc đồng hồ chạy nhanh hơn. Trong mắt động vật nhỏ, con người phản ứng chậm chạp, động tác rề rà, giống như những con voi khổng lồ vụng về. Để lượng hoá loại cảm nhận thị giác này, các nhà nghiên cứu đã dùng "tần số nhấp nháy tới hạn", gọi tắt là CFF. Khi ánh sáng kích thích có tần số ngắt quãng thấp, ta thấy ánh sáng nhấp nháy lúc sáng lúc tối; khi khoảng ngắt ngắn lại, ta sẽ cảm nhận thành một luồng sáng liên tục. Trị số CFF phản ánh tốc độ mắt xử lý ánh sáng — tốc độ càng nhanh, CFF càng cao. CFF của mắt người khoảng 60 Hz, của chó là 80 Hz, còn của ruồi cao tới 250 Hz, gấp 4 lần mắt người. Các nhà khoa học suy luận rằng CFF liên quan đến cân nặng và tốc độ trao đổi chất của bản thân loài vật: thân hình càng nhỏ, trao đổi chất càng nhanh thì CFF càng cao. Họ đã chọn lọc 34 loài động vật để chứng minh, kết quả cho thấy hai yếu tố này tương quan rõ rệt. Con ruồi trông nhỏ bé nhưng ắt hẳn phải có chỗ hơn người. Chúng bất lực trước đối thủ mạnh, nhưng có thể phán đoán nhanh về môi trường bên ngoài, nhờ vậy có thêm nhiều cơ hội sống sót. Cũng vậy, sự khác biệt về tốc độ xử lý thông tin khiến động vật nhỏ trông nhanh nhẹn hơn. Tạm có thể nói rằng, trong mắt chúng, đây là một thế giới chậm.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng — bấm loa nghe câu hỏi, nhìn gợi ý bên phải, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 动手 · 纳闷儿 · 迟钝 · 迟缓 · 闪烁 · 姑且 · 新陈代谢 · 势必 · 无能为力.',
  questions:[
    {q_zh:'在打苍蝇方面，人和猫有什么不同？为什么？',
     q_vn:'Trong việc đập ruồi, người và mèo khác nhau thế nào? Vì sao?',
     hint:'人：动手、打不中　猫：一下子拍到　在苍蝇眼里、慢动作',
     sample:'人动手去打苍蝇，却总是打不中；猫却能快速跳跃起来，一下子就拍到苍蝇。这是因为在苍蝇眼里，人类自认为很快的一拍只是个慢动作而已。',
     sample_vn:'Người giơ tay đập ruồi nhưng lần nào cũng trượt; mèo thì nhảy vọt lên thật nhanh, một phát đã vỗ trúng. Đó là vì trong mắt con ruồi, cú đập mà con người tưởng là rất nhanh chẳng qua chỉ là một động tác chậm.',
     note:'Đối chiếu bằng A……，B却……; nêu lý do bằng 这是因为…… và 只是……而已.'},
    {q_zh:'昆虫等小动物在接收信息方面跟人类有什么不同？',
     q_vn:'Côn trùng và các động vật nhỏ khác con người thế nào trong việc tiếp nhận thông tin?',
     hint:'小动物：接收的信息量……，比如鸽子……　人类：反应……、动作……',
     sample:'小动物一秒钟之内接收的信息量比人类多得多。比如鸽子，它的视线扫过周边时，会微微颤抖，好像体内有一个走得更快的钟表。在小动物看来，人类反应迟钝、动作迟缓，就像笨拙的大象。',
     sample_vn:'Động vật nhỏ tiếp nhận lượng thông tin trong một giây nhiều hơn con người rất nhiều. Chẳng hạn chim bồ câu, khi ánh mắt lướt qua xung quanh, nó hơi run run, như thể trong người có chiếc đồng hồ chạy nhanh hơn. Trong mắt động vật nhỏ, con người phản ứng chậm, động tác rề rà, như những con voi vụng về.',
     note:'比……多得多 (so sánh mức độ lớn); 比如 dẫn ví dụ; 在……看来 đổi góc nhìn; phân biệt 反应迟钝 / 动作迟缓.'},
    {q_zh:'什么是CFF？',
     q_vn:'CFF là gì?',
     hint:'视觉感知、光刺激、闪烁、连续的光、处理光线的速度',
     sample:'CFF就是“临界闪光频率”，是用来量化视觉感知的办法。比方说，光刺激的间隔频率低时，我们看到的是一明一暗的闪烁；间隔缩短以后，看到的就是连续的光。CFF值反映的就是眼睛处理光线的速度。',
     sample_vn:'CFF chính là "tần số nhấp nháy tới hạn", một phương pháp để lượng hóa cảm nhận thị giác. Chẳng hạn, khi ánh sáng kích thích có tần số ngắt quãng thấp, ta thấy ánh sáng nhấp nháy lúc sáng lúc tối; khi khoảng ngắt ngắn lại, ta thấy luồng sáng liên tục. Trị số CFF phản ánh chính tốc độ mắt xử lý ánh sáng.',
     note:'Định nghĩa bằng ……就是……; minh họa bằng 比方说; kết bằng ……反映的就是…….'},
    {q_zh:'人和狗等动物的CFF有何不同？',
     q_vn:'CFF của người và của chó cùng các động vật khác khác nhau thế nào?',
     hint:'CFF值：人、犬、苍蝇',
     sample:'人眼的CFF在60HZ左右；狗，我们姑且文雅地叫它“犬”，CFF是80HZ，所以在犬的眼里，电视画面是一系列静止的图像；苍蝇的CFF高达250HZ，反应速度是人眼的4倍。',
     sample_vn:'CFF của mắt người khoảng 60 Hz; chó — ta tạm gọi văn nhã là "khuyển" — CFF là 80 Hz, nên trong mắt chó hình ảnh ti vi là một loạt ảnh tĩnh; CFF của ruồi cao tới 250 Hz, tốc độ phản ứng gấp 4 lần mắt người.',
     note:'Liệt kê ba con số theo thứ tự tăng dần; 高达 nhấn mạnh con số lớn; có thể lồng 姑且 cho vui như bài khoá.'},
    {q_zh:'CFF与什么有关？',
     q_vn:'CFF liên quan đến điều gì?',
     hint:'体重、新陈代谢',
     sample:'科学家推论，CFF与动物本身的体重和新陈代谢速率有关。体型越小，信号传到大脑的时间越短；新陈代谢越快，能量支持越充足。科学家筛选出34种动物进行论证，发现它们有显著的相关性。',
     sample_vn:'Các nhà khoa học suy luận rằng CFF liên quan đến cân nặng và tốc độ trao đổi chất của bản thân con vật. Thân hình càng nhỏ, tín hiệu truyền lên não càng nhanh; trao đổi chất càng nhanh, năng lượng hỗ trợ càng dồi dào. Họ đã chọn lọc 34 loài động vật để chứng minh và phát hiện có sự tương quan rõ rệt.',
     note:'A 与 B 有关; hai cặp 越……越…… song song; 筛选出……进行论证.'},
    {q_zh:'苍蝇为什么能躲过人类的攻击？',
     q_vn:'Vì sao con ruồi có thể né được đòn tấn công của con người?',
     hint:'对……做出判断，使……有了生存机会',
     sample:'苍蝇看似渺小，却势必有其过人之处。虽然它们对强大的对手无能为力，但能迅速对外部环境做出判断，使它们有了更多的生存机会。',
     sample_vn:'Con ruồi trông nhỏ bé nhưng ắt hẳn có chỗ hơn người. Tuy chúng bất lực trước đối thủ mạnh, nhưng có thể phán đoán rất nhanh về môi trường bên ngoài, giúp chúng có thêm nhiều cơ hội sống sót.',
     note:'Dùng đúng khung gợi ý 对……做出判断，使……有了……; 虽然……但…… thừa nhận điểm yếu rồi nêu điểm mạnh.'},
    {q_zh:'为什么小动物看上去更敏捷？',
     q_vn:'Vì sao động vật nhỏ trông nhanh nhẹn hơn?',
     hint:'信息处理速度',
     sample:'因为小动物处理信息的速度比我们快。小猫小狗甚至小孩儿，总显得比成年个体更好动、更焦急，其实对于他们来说，这只是个悠闲的速度。',
     sample_vn:'Vì động vật nhỏ xử lý thông tin nhanh hơn chúng ta. Mèo con, chó con, thậm chí trẻ nhỏ luôn tỏ ra hiếu động và nôn nóng hơn cá thể trưởng thành, thật ra với chúng đó chỉ là một tốc độ thong thả.',
     note:'显得比……更…… (so sánh vẻ bề ngoài); 其实 lật lại cách hiểu thông thường.'}
  ]
};

// ══════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — câu tự soạn (sách HSK 6 không có sách bài tập nghe), mỗi câu một tình huống mới
// ══════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Tự soạn theo dạng đề HSK 6 · chủ đề bài 17',
  items: [
    {
      n: 1,
      lines: [
        {sp:'女',zh:'你看远处，有个灯一直在闪烁。'},
        {sp:'男',zh:'那是机场的灯，是给飞机指方向的。'}
      ],
      q: '远处闪烁的是什么？',
      qvn: 'Thứ nhấp nháy ở đằng xa là gì?',
      opts: ['天上的星星','汽车的灯','机场的灯','对面楼里的灯'],
      ans: 2,
      why: 'Người đàn ông nói 那是机场的灯 = đó là đèn sân bay, dùng để chỉ hướng cho máy bay.',
      words: ['闪烁']
    },
    {
      n: 2,
      lines: [
        {sp:'男',zh:'你最近怎么老戴着眼镜？'},
        {sp:'女',zh:'别提了，天天对着电脑，视力差了很多。'}
      ],
      q: '女的为什么戴眼镜？',
      qvn: 'Vì sao người phụ nữ đeo kính?',
      opts: ['视力变差了','觉得戴眼镜好看','眼睛受伤了','外面太阳太大'],
      ans: 0,
      why: '天天对着电脑，视力差了很多 → ngày nào cũng nhìn máy tính nên thị lực kém đi.',
      words: ['视力']
    },
    {
      n: 3,
      lines: [
        {sp:'女',zh:'经理刚才说的你听懂了吗？'},
        {sp:'男',zh:'没有，他东一句西一句的，讲了半个小时也没说到重点。'}
      ],
      q: '男的觉得经理讲得怎么样？',
      qvn: 'Người đàn ông thấy giám đốc nói thế nào?',
      opts: ['很有道理','时间太短','很幽默','没有重点'],
      ans: 3,
      why: '东一句西一句 = nói câu này câu kia, không mạch lạc; 也没说到重点 → không có trọng tâm.',
      words: ['东一句西一句']
    },
    {
      n: 4,
      lines: [
        {sp:'男',zh:'这台旧电脑太慢了，要不要换台新的？'},
        {sp:'女',zh:'下个月才发工资，姑且再用一个月吧。'}
      ],
      q: '女的是什么意思？',
      qvn: 'Ý người phụ nữ là gì?',
      opts: ['马上换一台新的','旧电脑其实很快','先用着旧电脑','把旧电脑卖掉'],
      ans: 2,
      why: '姑且再用一个月 = cứ tạm dùng thêm một tháng đã (đợi có lương mới mua).',
      words: ['姑且']
    },
    {
      n: 5,
      lines: [
        {sp:'男',zh:'听说你的设计被公司选中了？'},
        {sp:'女',zh:'是啊，下个月就要开始生产了，我到现在都不敢相信。'}
      ],
      q: '关于女的，可以知道什么？',
      qvn: 'Có thể biết gì về người phụ nữ?',
      opts: ['她的设计被选中了','她要换工作了','她的设计没通过','她下个月去旅行'],
      ans: 0,
      why: '被公司选中了 = được công ty chọn (选中 zhòng), tháng sau đưa vào sản xuất.',
      words: ['选中']
    },
    {
      n: 6,
      lines: [
        {sp:'女',zh:'这一桌菜都是你自己做的？'},
        {sp:'男',zh:'是啊，以前都是我妈动手，这次我自己做了才知道她每天有多辛苦。'}
      ],
      q: '男的现在明白了什么？',
      qvn: 'Bây giờ người đàn ông hiểu ra điều gì?',
      opts: ['做菜其实很容易','饭馆的菜更好吃','自己很会做菜','妈妈做饭很辛苦'],
      ans: 3,
      why: '自己做了才知道她每天有多辛苦 → tự làm mới biết mẹ vất vả thế nào. 动手 ở đây = tự tay làm.',
      words: ['动手']
    },
    {
      n: 7,
      lines: [
        {sp:'男',zh:'你学了五年汉语，现在应该没什么难的了吧？'},
        {sp:'女',zh:'哪儿啊，汉语博大精深，我越学越觉得自己知道得少。'}
      ],
      q: '女的是什么意思？',
      qvn: 'Ý người phụ nữ là gì?',
      opts: ['汉语已经学好了','还有很多要学','不想再学了','中国文化很简单'],
      ans: 1,
      why: '哪儿啊 = đâu có; 博大精深, 越学越觉得自己知道得少 → còn rất nhiều thứ phải học.',
      words: ['博大精深']
    }
  ]
};

// ══════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Em trai than phiền vì đập mãi không trúng con ruồi trong bếp.',a:{sp:'Em trai',zh:'这只苍蝇太气人了，我打了十几次都没打中！',vn:'Con ruồi này tức thật, em đập mười mấy lần mà chẳng trúng!'},need:['Dùng 在……眼里 và 迟缓','Giải thích lý do một cách khoa học'],sample:'别白费力气了。在苍蝇眼里，你的动作太迟缓了，就像慢动作一样，它当然躲得过去。',samplePy:'Bié báifèi lìqi le. Zài cāngying yǎn li, nǐ de dòngzuò tài chíhuǎn le, jiù xiàng màn dòngzuò yíyàng, tā dāngrán duǒ de guòqù.',sampleVn:'Đừng phí sức nữa. Trong mắt con ruồi, động tác của em chậm quá, cứ như quay chậm vậy, nó né được là phải rồi.',tip:'在……眼里 = trong mắt …; 迟缓 dùng cho động tác; bổ ngữ khả năng 躲得过去 = né được.'},
    {scene:'Bạn cùng lớp hỏi vì sao em đọc mãi một cuốn sách khoa học mà vẫn chưa xong.',a:{sp:'Bạn',zh:'那本书你看了一个月了，怎么还没看完？',vn:'Cuốn sách đó cậu đọc một tháng rồi, sao vẫn chưa xong?'},need:['Dùng 深奥','Dùng 姑且 để nói kế hoạch tạm thời'],sample:'内容太深奥了，很多地方我都看不懂。我姑且先把前面的部分看懂，别的以后再说吧。',samplePy:'Nèiróng tài shēn\'ào le, hěn duō dìfang wǒ dōu kàn bu dǒng. Wǒ gūqiě xiān bǎ qiánmiàn de bùfen kàndǒng, biéde yǐhòu zài shuō ba.',sampleVn:'Nội dung sâu quá, nhiều chỗ tớ đọc không hiểu. Tớ cứ tạm đọc hiểu phần đầu đã, phần còn lại tính sau.',tip:'姑且 + 先 + V，……以后再说 = tạm … đã, sau hẵng tính; 太……了 + 看不懂 nêu lý do.'},
    {scene:'Mẹ lo lắng vì em nhận lời làm lớp trưởng khi sắp thi.',a:{sp:'Mẹ',zh:'马上要考试了，你还当班长，事情那么多，不会影响学习吗？',vn:'Sắp thi rồi mà con còn làm lớp trưởng, việc nhiều thế, không ảnh hưởng học hành à?'},need:['Dùng 势必 hoặc 一定 (đúng cách dùng)','Trấn an mẹ'],sample:'妈，您别担心。我知道时间安排不好势必会影响学习，所以我一定会把时间安排好的。',samplePy:'Mā, nín bié dānxīn. Wǒ zhīdào shíjiān ānpái bù hǎo shìbì huì yǐngxiǎng xuéxí, suǒyǐ wǒ yídìng huì bǎ shíjiān ānpái hǎo de.',sampleVn:'Mẹ đừng lo ạ. Con biết sắp xếp thời gian không tốt thì chắc chắn sẽ ảnh hưởng việc học, nên con nhất định sẽ sắp xếp thời gian cho tốt.',tip:'势必 cho kết quả BẤT LỢI tất yếu; 一定 để bày tỏ quyết tâm (一定会 / 一定要) — 势必 không dùng như vậy.'},
    {scene:'Một bạn nhờ em giúp sửa máy tính, nhưng em hoàn toàn không biết sửa.',a:{sp:'Bạn',zh:'我的电脑突然开不了机了，你帮我看一下好吗？',vn:'Máy tính của tớ tự nhiên không bật được, cậu xem giúp tớ một chút được không?'},need:['Dùng 无能为力','Gợi ý một cách khác'],sample:'实在不好意思，修电脑这种事我无能为力。你不如去问问小李，他对电脑很在行。',samplePy:'Shízài bù hǎoyìsi, xiū diànnǎo zhè zhǒng shì wǒ wúnéngwéilì. Nǐ bùrú qù wènwen Xiǎo Lǐ, tā duì diànnǎo hěn zàiháng.',sampleVn:'Thật ngại quá, chuyện sửa máy tính thì tớ bó tay. Cậu hay là đi hỏi Tiểu Lý xem, cậu ấy rất rành máy tính.',tip:'……这种事我实在无能为力 (无能为力 đứng cuối, không mang tân ngữ); 不如 + gợi ý khác.'},
    {scene:'Ông nội xem lại ảnh cũ của làng, hỏi em có nhận ra không.',a:{sp:'Ông nội',zh:'你看，这是三十年前我们村的照片，你还能认出来吗？',vn:'Cháu xem, đây là ảnh làng mình ba mươi năm trước, cháu còn nhận ra không?'},need:['Dùng 感慨','Nói về sự thay đổi'],sample:'几乎认不出来了！只有村口那棵大树还是老样子。看到这么大的变化，我心里也很感慨。',samplePy:'Jīhū rèn bu chūlái le! Zhǐyǒu cūnkǒu nà kē dà shù háishi lǎo yàngzi. Kàndào zhème dà de biànhuà, wǒ xīnli yě hěn gǎnkǎi.',sampleVn:'Gần như không nhận ra nữa ạ! Chỉ có cây to ở đầu làng là vẫn như cũ. Thấy thay đổi lớn thế này, cháu cũng thấy bồi hồi lắm.',tip:'看到 + sự thay đổi，(心里) 很感慨 = bồi hồi, xúc động; 认不出来 = không nhận ra nổi.'}
  ]
};

// ══════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em viết báo cáo thí nghiệm môn Sinh học.',a:'实验结果显示，体型越小的动物，反应速度越快。',b:'我们发现小动物反应可快了，比大动物快多了！',better:'a',why:'Báo cáo khoa học cần giọng khách quan, từ văn viết: 结果显示, 体型, 越……越…… thành mệnh đề khái quát. Câu b (可快了, 快多了) là khẩu ngữ khi kể chuyện.'},
    {scene:'Em kể với bạn thân chuyện đập ruồi hôm qua.',a:'昨天本人多次拍打苍蝇，都没有成功。',b:'昨天我拍了半天苍蝇，一次也没拍着，气死我了！',better:'b',why:'Kể chuyện với bạn dùng khẩu ngữ tự nhiên (拍了半天, 没拍着, 气死我了); câu a (本人, 多次拍打) giống biên bản, nghe buồn cười.'},
    {scene:'Thầy giáo viết nhận xét vào bài luận của em.',a:'你这篇文章写得太乱了，想到哪儿写到哪儿，看不懂。',b:'文章论证不够充分，前后缺少联系，建议调整一下结构。',better:'b',why:'Lời phê bài nên dùng từ chuẩn (论证, 结构, 建议) và giọng xây dựng; câu a đúng ý nhưng nghe như chê bai.'},
    {scene:'Biển báo dựng ở cổng công viên.',a:'本公园禁止携带犬只进入。',b:'别把狗带进公园来啊！',better:'a',why:'Biển báo dùng văn viết: 本公园, 禁止, 携带, 犬只 — 犬 là cách gọi văn vẻ của 狗. Câu b là lời nhắc miệng.'},
    {scene:'Người dẫn chương trình giới thiệu một bộ phim tài liệu về văn hoá Trung Hoa.',a:'中国文化东西特别多，这个片子带你看看以前的事儿。',b:'中国文化博大精深，这部纪录片将带您走进五千年的历史长河。',better:'b',why:'Lời dẫn trên truyền hình cần trang trọng, giàu hình ảnh: 博大精深, 将带您走进, 历史长河. Câu a (东西特别多, 片子, 事儿) quá khẩu ngữ.'},
    {scene:'Bạn nhờ em giúp một việc em không làm được, em từ chối qua tin nhắn.',a:'不好意思啊，这事儿我真帮不上忙，你再问问别人吧！',b:'鉴于本人能力有限，对此事无能为力，请您原谅。',better:'a',why:'Nhắn tin với bạn nên dùng khẩu ngữ gần gũi (帮不上忙, 这事儿); câu b (鉴于, 本人, 对此事) giống văn bản hành chính, nghe xa cách.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'在打苍蝇方面，人和猫有什么不同？为什么？', cue:'人：动手、打不中　猫：一下子拍到　在苍蝇眼里、慢动作', words:['场面','端','盛','东张西望','企图','动手','纳闷儿','跳跃','瞄准']},
    {step:'昆虫等小动物在接收信息方面跟人类有什么不同？', cue:'小动物：接收的信息量……，比如鸽子……　人类：反应……、动作……', words:['鸽子','视线','周边','颤抖','确切','迟钝','迟缓','庞大','笨拙']},
    {step:'什么是CFF？', cue:'视觉感知、光刺激、闪烁、连续的光、处理光线的速度', words:['比方','间隔','闪烁','视力']},
    {step:'人和狗等动物的CFF有何不同？', cue:'CFF值：人、犬、苍蝇', words:['姑且','文雅','犬','系列']},
    {step:'CFF与什么有关？', cue:'体重、新陈代谢', words:['推论','本身','新陈代谢','能量','论证','筛选','标记','名次']},
    {step:'苍蝇为什么能躲过人类的攻击？', cue:'对……做出判断，使……有了生存机会', words:['感慨','渺小','攻击','势必','博大精深','深奥','无能为力','实惠']},
    {step:'为什么小动物看上去更敏捷？', cue:'信息处理速度', words:['个体','焦急']}
  ],
  checklist: [
    'Kể đủ 7 ý theo đúng thứ tự bảng chưa (người và mèo đập ruồi → lượng thông tin → CFF là gì → CFF của người / chó / ruồi → CFF liên quan gì → vì sao ruồi né được → vì sao động vật nhỏ nhanh nhẹn)?',
    'Ý 1 có đối chiếu được người (动手、打不中) và mèo (一下子拍到) rồi nêu lý do "trong mắt ruồi là động tác chậm" không?',
    'Ý 3 – 4 có giải thích CFF bằng lời đơn giản và nói đúng ba con số 60 / 80 / 250HZ không?',
    'Ý 6 có dùng được khung 对……做出判断，使……有了生存机会 và từ 势必, 无能为力 không?',
    'Có kể bằng LỜI MÌNH (câu ngắn, rõ ý), phân biệt đúng 反应迟钝 và 动作迟缓 không?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 181–187) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空（注释1 · 练一练）', vn:'Chọn từ thích hợp điền vào chỗ trống (Chú thích 1 · Luyện tập) — đáp án theo sách', tu:['东拉西扯','东张西望','东躲西藏'],
   cau:[
     {s:'那孩子像是找不到家了，站在路口，＿＿，显得有些着急。', dap:['东张西望']},
     {s:'黑猫被打败了，被大黄猫追得＿＿，跳上跳下。', dap:['东躲西藏']},
     {s:'坐在火车上，大家都没事，便天南海北、＿＿地闲聊起来。', dap:['东拉西扯']}
   ]},

  {kieu:'gx', de:'用带“中”的词语完成句子（注释2 · 练一练）', vn:'Dùng từ có chữ 中 (zhòng) hoàn thành câu (Chú thích 2 · Luyện tập). Sách không in đáp án — dưới đây là đáp án gợi ý.',
   cau:[
     {s:'他的腿被＿＿了，走不了了。', tu:'打中', dap:'他的腿被打中了，走不了了。',
      giai:'中 (zhòng) = trúng: 打中 / 击中 (bị đánh / bắn trúng). Câu bị động 被 + V中 + 了.'},
     {s:'六几年我自学英语，＿＿一套英国Longman出版社的《基础英语》，这套书两册是外文原版，两册是国内出的影印版，我就是靠这套书学会了英语。', tu:'选中', dap:'六几年我自学英语，选中一套英国Longman出版社的《基础英语》，这套书两册是外文原版，两册是国内出的影印版，我就是靠这套书学会了英语。',
      giai:'选中 = chọn trúng, chọn được (cái vừa ý) — 中 nghĩa "đúng vào, hợp". Cũng có thể dùng 看中.'},
     {s:'那是我第一次自己做主买衣服，妈妈陪我左看右看，最后我＿＿的竟然是一件白衬衫。', tu:'看中', dap:'那是我第一次自己做主买衣服，妈妈陪我左看右看，最后我看中的竟然是一件白衬衫。',
      giai:'看中 = ưng ý, vừa mắt (xem và chọn trúng). 左看右看 cũng là một dạng giống 东A西B (chỗ này … chỗ kia …); 做主 ôn bài 7.'}
   ]},

  {kieu:'vitri', de:'为括号里的内容选择适当的位置（注释3 · 练一练）', vn:'Chọn vị trí thích hợp cho phần trong ngoặc (Chú thích 3 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'A最后怎么处理，B等我了解了解情况再说C。', tu:'这件事姑且先这么办，', ans:'A',
      giai:'Trước hết tạm làm thế đã (姑且先这么办), rồi mới nói chuyện xử lý cuối cùng → đặt ở đầu câu (A): 这件事姑且先这么办，最后怎么处理，等我了解了解情况再说。'},
     {s:'A说的随便说说，B都不必认真C。', tu:'听的姑且听听，', ans:'B',
      giai:'Hai vế song song 说的随便说说，听的姑且听听 (người nói cứ nói, người nghe cứ tạm nghe) → đặt sau vế 说的…… (B), rồi mới đến kết luận 都不必认真.'},
     {s:'A但有一点可以肯定：B腐败不得人心C。', tu:'他的看法是否正确姑且不论，', ans:'A',
      giai:'……姑且不论，但…… = tạm chưa bàn …, nhưng … → đặt trước 但 (A): 他的看法是否正确姑且不论，但有一点可以肯定：腐败不得人心。'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'跳跃', chu:'跳', ds:['跳舞','跳高','跳远','跳水']},
   cau:[
     {tu:'瞄准', chu:'准', dap:['精准','准确','准备','准时'], them:['对准','标准','水准','准星','准头','精准度'],
      giai:'准 trong 瞄准 = trúng, đúng (精准, 准确, 对准 = nhắm đúng vào). Đáp án sách mở rộng cả 准备 (chuẩn bị), 准时 (đúng giờ).'},
     {tu:'视线', chu:'线', dap:['电线','毛线','线路','线条'], them:['光线','路线','直线','曲线','界线','防线'],
      giai:'线 = sợi, đường (dây điện 电线, sợi len 毛线, đường nét 线条); 视线 = đường nhìn, 光线 = tia sáng.'},
     {tu:'周边', chu:'周', dap:['周围','周密','周期','周全'], them:['四周','周游','周到','圆周','周长','周折'],
      giai:'周 = xung quanh, vòng quanh (周围, 四周, 周游); mở rộng thành "chu đáo, đầy đủ" (周密, 周全, 周到) và "một vòng, chu kỳ" (周期).'},
     {tu:'迟钝', chu:'迟', dap:['迟缓','迟到','推迟','延迟'], them:['迟早','迟疑','迟迟','姗姗来迟','迟暮'],
      giai:'迟 = chậm, muộn (迟到 = đến muộn, 推迟 / 延迟 = hoãn lại, 迟缓 = chậm chạp). 迟疑 = chần chừ (ôn bài 3).'}
   ]},

  {kieu:'gx', de:'用所给词语完成句子', vn:'Dùng từ cho sẵn hoàn thành câu (sách không in đáp án — đây là câu gợi ý)',
   cau:[
     {s:'他＿＿，但他的计划被我识破了。', tu:'企图', dap:'他企图用谎言骗我，但他的计划被我识破了。',
      giai:'企图 + V (việc xấu); vế sau "kế hoạch bị vạch trần" cho thấy ý đồ không thành — đúng sắc thái của 企图.'},
     {s:'听说有人找我，＿＿？', tu:'纳闷儿', dap:'听说有人找我，我心里很纳闷儿：会是谁呢？',
      giai:'纳闷儿 + câu hỏi nêu điều khó hiểu; câu gốc kết thúc bằng dấu hỏi nên vế sau là câu hỏi.'},
     {s:'我非常喜欢运动，＿＿等等。', tu:'比方说', dap:'我非常喜欢运动，比方说游泳、打篮球、爬山等等。',
      giai:'比方说 + liệt kê ví dụ + 等等.'},
     {s:'如果你想洗衣服，我这里有台旧洗衣机，你＿＿。', tu:'姑且', dap:'如果你想洗衣服，我这里有台旧洗衣机，你姑且先用着吧。',
      giai:'Máy giặt cũ — không tốt lắm nhưng tạm dùng được → 姑且 + 先 + V + 着吧 (sắc thái miễn cưỡng, tạm thời).'},
     {s:'不好好发展经济，＿＿。', tu:'势必', dap:'不好好发展经济，势必会影响人民生活水平的提高。',
      giai:'Điều kiện xấu → 势必 + 会 + kết quả bất lợi (影响……提高).'},
     {s:'看到家乡的巨大变化，＿＿。', tu:'感慨', dap:'看到家乡的巨大变化，爷爷不禁感慨万分。',
      giai:'看到…… + 感慨: xúc động trước sự thay đổi; 不禁 / 不由得 (ôn bài 2) + 感慨万分.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['东张西望','确切','周边','企图','动手'],
   cau:[
     {s:'小偷在＿＿偷东西时，总是先＿＿，看看＿＿有没有人注意自己，当＿＿知道没人注意时，他们再＿＿偷。如果在公共场合看到这样可疑的人，一定要多加小心，注意保管好自己的财物。',
      dap:['企图','东张西望','周边','确切','动手']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['无能为力','本身','迟钝','迟缓','新陈代谢'],
   cau:[
     {s:'人类跟其他动物一样，随着年龄的增长，反应越来越＿＿，行动越来越＿＿。同样的，我们＿＿的＿＿也逐渐变慢。年轻时，你轻而易举就能做到的动作，到了老年却＿＿了。',
      dap:['迟钝','迟缓','本身','新陈代谢','无能为力']}
   ]},

  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu (phần gạch chân trong 【】; sách không có đáp án cố định — đây là câu gợi ý)',
   cau:[
     {mau:'有科学家推论，物种的CFF【与】其本身的体重和新陈代谢速率【有关】。体型【越】小，信号传达到大脑所需时间【越】短；新陈代谢速率越高，【说明】传递过程有更充足的能量支持。',
      khung:'有科学家推论，身高与＿＿有关。父母的＿＿越＿＿，孩子的＿＿越＿＿，这说明＿＿是会遗传的。',
      dap:['遗传','个子','高','个子','高','身高'],
      giai:'A 与 B 有关 (A liên quan đến B); 越……越…… nêu quan hệ tương quan; ……，这说明…… rút ra kết luận từ hiện tượng.'},
     {mau:'【虽然】它们没有博大精深的思想，【不能】进行深奥的思考，【对】强大的对手【无能为力】，【但】对外部环境能迅速做出判断，【使】它们【有了】更多的生存机会，这一优势真的实惠极了。',
      khung:'虽然他没有＿＿，不能＿＿，对＿＿无能为力，但＿＿，使＿＿有了＿＿。',
      dap:['很高的学历','找到收入很高的工作','家里的经济困难','他靠自己的努力开了一家小饭馆','全家人','稳定的生活'],
      giai:'虽然……（điểm yếu），对……无能为力，但……（điểm mạnh），使……有了…… (kết quả tốt): thừa nhận hạn chế rồi chuyển sang ưu thế.'}
   ]},

  {kieu:'bc', de:'病句类型：句式杂糅 · 例句', vn:'Loại câu sai: câu pha trộn hai kiểu câu (句式杂糅) — các câu ví dụ trong sách (tr. 185–186), kèm phân tích của sách. Tìm chỗ sai rồi sửa.',
   cau:[
     {s:'我发觉，为什么只要你用功成绩就能提高了？', sai:'为什么只要你用功成绩就能提高了？', loai:'语气混杂',
      dap:'我发觉只要你用功成绩就能提高。',
      giai:'Tân ngữ của 发觉 phải là câu trần thuật, nhưng lại dùng giọng nghi vấn (为什么……？) — trộn hai ngữ khí vào nhau. Bỏ 为什么 và dấu hỏi.'},
     {s:'做了演员以后，她一方面努力提高自己的专业水平，一方面努力提高自己的文化修养也是很重要的。', sai:'也是很重要的', loai:'句式套用',
      dap:'做了演员以后，她一方面努力提高自己的专业水平，一方面努力提高自己的文化修养。',
      giai:'Câu "她一方面……，一方面……" đã hoàn chỉnh, lại bị dùng làm chủ ngữ cho 也是很重要的 → thừa. Bỏ 也是很重要的.'},
     {s:'展览分为地震突袭、抗震救灾、灾后重建、美好家园四部分组成，充分显示了灾区人民不怕困难、自强不息的精神。', sai:'分为地震突袭、抗震救灾、灾后重建、美好家园四部分组成', loai:'结构混用',
      dap:'展览分为地震突袭、抗震救灾、灾后重建、美好家园四部分，充分显示了灾区人民不怕困难、自强不息的精神。',
      giai:'Trộn "分为……部分" với "由……组成". Chọn một: 分为……四部分 hoặc 由……四部分组成 (展览由地震突袭、……四部分组成).'},
     {s:'《消费者权益保护法》深受广大消费者所欢迎，因为它使消费者的权益得到最大限度的保护。', sai:'深受广大消费者所欢迎', loai:'结构混用',
      dap:'《消费者权益保护法》深受广大消费者欢迎，因为它使消费者的权益得到最大限度的保护。',
      giai:'Trộn "受……（的）欢迎" với cấu trúc bị động văn viết "为……所 + V". Sửa: 深受广大消费者欢迎 hoặc 为广大消费者所欢迎.'},
     {s:'花生在潮湿条件下储存，会生长黄曲霉素，黄曲霉素能够使人致癌。', sai:'使人致癌', loai:'兼语句混用',
      dap:'花生在潮湿条件下储存，会生长黄曲霉素，黄曲霉素能够致癌。',
      giai:'"黄曲霉素能够致癌" đã trọn nghĩa (致 = gây ra), lại trộn với câu kiêm ngữ 使人…… → bỏ 使人.'}
   ]},

  {kieu:'bc', de:'指出下列句子的错误，并提出修改建议（扩展1 · 练一练）', vn:'Chỉ ra lỗi sai trong các câu dưới đây và đề xuất cách sửa (Mở rộng 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'这次参加比赛的，除了本校的学生，还有来自各国的留学生也参加了比赛。', sai:'也参加了比赛', loai:'句式杂糅',
      dap:'这次参加比赛的，除了本校的学生，还有来自各国的留学生。',
      giai:'Chủ ngữ 这次参加比赛的 + 还有…… đã đủ ý, lại thêm 也参加了比赛 (của kiểu câu 除了……，……也……) → trộn hai kiểu câu. Bỏ 也参加了比赛.'},
     {s:'即使我所做的哪怕只给大家带来一点点的快乐，我也会很高兴。', sai:'即使', loai:'句式杂糅',
      dap:'我所做的哪怕只给大家带来一点点的快乐，我也会很高兴。',
      giai:'即使 và 哪怕 cùng nghĩa "cho dù", dùng cả hai là trộn hai cách nói. Giữ một từ (đáp án sách bỏ 即使).'},
     {s:'父亲一直想让儿子学门手艺，他认为只要身怀绝技，一辈子才有了铁饭碗。', sai:'只要', loai:'关联词语误用',
      dap:'父亲一直想让儿子学门手艺，他认为只有身怀绝技，一辈子才有了铁饭碗。',
      giai:'只要 đi với 就, 只有 đi với 才. Vế sau dùng 才 → phải đổi 只要 thành 只有 (điều kiện duy nhất).'},
     {s:'她为人的正直、诚恳，做事的严谨、认真，在我心里给我留下了深刻的印象。', sai:'在我心里给我留下了', loai:'句式杂糅',
      dap:'她为人的正直、诚恳，做事的严谨、认真，在我心里留下了深刻的印象。',
      giai:'Trộn "在我心里留下……" với "给我留下……". Giữ một cách: 在我心里留下了深刻的印象 hoặc 给我留下了深刻的印象 (sách chấp nhận cả hai).'},
     {s:'钱虽然不多，却是我用汗水换来的，拿在手里似乎比从父母那里得到的重得多了。', sai:'重得多了', loai:'句式杂糅',
      dap:'钱虽然不多，却是我用汗水换来的，拿在手里似乎比从父母那里得到的重得多。',
      giai:'Trộn "Adj + 得多" với "Adj + 多了" (cả hai đều là bổ ngữ mức độ trong câu so sánh). Chỉ dùng một: 重得多 (hoặc 重多了).'}
   ]}
];
