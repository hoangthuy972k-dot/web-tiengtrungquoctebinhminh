// ══════════════════════════════════════════
// DATA — HSK3 Bài 1: 周末你有什么打算？(Cuối tuần bạn có kế hoạch gì?)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'周末',py:'zhōumò',pos:'Danh từ',vn:'cuối tuần',em:'📅',lesson:1,
   explain:['Hai ngày thứ Bảy và Chủ nhật, khoảng thời gian nghỉ ngơi sau một tuần làm việc/học tập.'],
   usage:'Danh từ chỉ thời gian; thường đứng ĐẦU CÂU hoặc ngay SAU chủ ngữ làm trạng ngữ: 周末 + Chủ ngữ + Vị ngữ.',
   collo:['周末愉快','这个周末','周末计划'],
   ex_zh:'周末你有什么打算？',ex_py:'Zhōumò nǐ yǒu shénme dǎsuàn?',ex_vn:'Cuối tuần bạn có kế hoạch gì?',
   exList:[
     {zh:'周末你有什么打算？',py:'Zhōumò nǐ yǒu shénme dǎsuàn?',vn:'Cuối tuần bạn có kế hoạch gì?'},
     {zh:'这个周末我要去旅游。',py:'Zhège zhōumò wǒ yào qù lǚyóu.',vn:'Cuối tuần này tôi định đi du lịch.'},
     {zh:'周末愉快！',py:'Zhōumò yúkuài!',vn:'Chúc cuối tuần vui vẻ!'},
   ],
   hanzi:[
     {c:'末',p:'mò',type:'独体字 · Chữ đơn (chỉ sự)',st:5,ord:'木 (mộc) + nét ngang trên cùng',rad:'木 (mộc – cây)',mean:'ngọn, cuối, phần cuối',
      tip:'Chữ 木(cây) thêm một nét ngang ở ngọn để chỉ ĐẦU NGỌN cây → nghĩa mở rộng "phần CUỐI" của một khoảng thời gian.',
      cf:'未 (wèi – "chưa", nét ngang ngắn hơn ở trên)',w:'周末 / 月末 / 期末'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì cuối tuần này tôi rảnh nên tôi định đi thăm bạn.',answer:'因为这个周末我有空，所以我打算去看朋友。',answerPy:'Yīnwèi zhège zhōumò wǒ yǒu kòng, suǒyǐ wǒ dǎsuàn qù kàn péngyou.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu cuối tuần trời đẹp thì chúng ta đi leo núi nhé.',answer:'如果周末天气好，我们就去爬山吧。',answerPy:'Rúguǒ zhōumò tiānqì hǎo, wǒmen jiù qù páshān ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:2,zh:'打算',py:'dǎsuàn',pos:'Danh từ/Động từ',vn:'kế hoạch; dự định',em:'📝',lesson:1,
   explain:['1. (Danh từ) Kế hoạch, ý định đã nghĩ đến cho việc gì đó.','2. (Động từ) Có ý định làm gì, dự định làm gì.'],
   usage:'Khi làm động từ: 打算 + Động từ khác (打算去旅游); khi làm danh từ: 有/没有 + 打算 (有什么打算).',
   collo:['有什么打算','打算去旅游','早就打算好了'],
   ex_zh:'我早就想好了。',ex_py:'Wǒ zǎo jiù xiǎnghǎo le.',ex_vn:'Tôi đã nghĩ xong từ lâu rồi.',
   exList:[
     {zh:'周末你有什么打算？',py:'Zhōumò nǐ yǒu shénme dǎsuàn?',vn:'Cuối tuần bạn có kế hoạch gì?'},
     {zh:'下个月我打算去旅游。',py:'Xià ge yuè wǒ dǎsuàn qù lǚyóu.',vn:'Tháng sau tôi định đi du lịch.'},
     {zh:'你打算什么时候搬？',py:'Nǐ dǎsuàn shénme shíhou bān?',vn:'Bạn định khi nào chuyển nhà?'},
   ],
   hanzi:[
     {c:'算',p:'suàn',type:'上下结构 · Trên-dưới',st:14,ord:'竹 (trúc) trên → 目+廾 dưới',rad:'竹 (trúc – tre)',mean:'tính toán',
      tip:'Bộ tre 竹 (dụng cụ tính toán cổ, như bàn tính) → nghĩa TÍNH TOÁN, mở rộng thành "dự tính, dự định".',
      cf:'笔 (bǐ – "bút", cũng có bộ 竹")',w:'打算 / 计算 / 算了'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy tôi đã có kế hoạch nhưng vẫn muốn nghe ý kiến của bạn.',answer:'虽然我已经有打算了，但是还想听听你的意见。',answerPy:'Suīrán wǒ yǐjīng yǒu dǎsuàn le, dànshì hái xiǎng tīngting nǐ de yìjiàn.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
     {promptLang:'vi',prompt:'Nếu bạn chưa có kế hoạch gì thì cùng đi xem phim với tôi đi.',answer:'如果你还没有什么打算，就跟我一起去看电影吧。',answerPy:'Rúguǒ nǐ hái méiyǒu shénme dǎsuàn, jiù gēn wǒ yìqǐ qù kàn diànyǐng ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:3,zh:'啊',py:'a',pos:'Trợ từ',vn:'à, đấy, nhé (trợ từ cuối câu)',em:'💬',lesson:1,
   explain:['Trợ từ ngữ khí đứng cuối câu, dùng để khẳng định, xác nhận hoặc biện minh cho điều vừa nói, giúp lời nói mềm mại, tự nhiên hơn.'],
   usage:'Đứng ở CUỐI CÂU trần thuật hoặc câu hỏi: [câu] + 啊. Không mang nghĩa từ vựng riêng, chỉ thêm sắc thái ngữ khí.',
   collo:['是啊','好啊','是啊，我已经……'],
   ex_zh:'是啊，我已经找好饭馆儿了。',ex_py:'Shì a, wǒ yǐjīng zhǎohǎo fànguǎnr le.',ex_vn:'Đúng vậy đấy, anh đã tìm sẵn quán ăn rồi.',
   exList:[
     {zh:'是啊，我已经找好饭馆儿了。',py:'Shì a, wǒ yǐjīng zhǎohǎo fànguǎnr le.',vn:'Đúng vậy đấy, anh đã tìm sẵn quán ăn rồi.'},
     {zh:'南方啊，我们去年就是这个时候去的。',py:'Nánfāng a, wǒmen qùnián jiù shì zhège shíhou qù de.',vn:'Miền Nam đấy, năm ngoái chúng tôi cũng đi vào lúc này.'},
     {zh:'今天的面包真便宜，是啊，那我们多买几个吧！',py:'Jīntiān de miànbāo zhēn piányi, shì a, nà wǒmen duō mǎi jǐ ge ba!',vn:'Bánh mì hôm nay rẻ thật, đúng đấy, vậy chúng ta mua thêm vài cái đi!'},
   ],
   hanzi:[
     {c:'啊',p:'a',type:'左右结构 · Trái-phải',st:10,ord:'口 (khẩu) trái → 阿 (a) phải',rad:'口 (khẩu – miệng)',mean:'trợ từ ngữ khí',
      tip:'Bộ miệng 口 (âm thanh phát ra) + 阿(âm "a") → chữ chuyên dùng ghi lại tiếng thốt "à" cuối câu.',
      cf:'阿 (ā – dùng trong tên riêng, không có bộ 口")',w:'是啊 / 好啊 / 对啊'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đúng đấy, tôi cũng nghĩ kế hoạch này rất hay.',answer:'是啊，我也觉得这个打算很好。',answerPy:'Shì a, wǒ yě juéde zhège dǎsuàn hěn hǎo.',
      note:'是啊 dùng để xác nhận, đồng tình với điều vừa nghe.'},
     {promptLang:'vi',prompt:'Được đấy, chúng ta cuối tuần này đi chơi cùng nhau nhé.',answer:'好啊，我们这个周末一起去玩儿吧。',answerPy:'Hǎo a, wǒmen zhège zhōumò yìqǐ qù wánr ba.',
      note:'好啊 = đồng ý một cách vui vẻ, tự nhiên.'},
   ]},

  {n:4,zh:'跟',py:'gēn',pos:'Giới từ',vn:'cùng, với',em:'🤝',lesson:1,
   explain:['Giới từ chỉ đối tượng cùng tham gia một hành động với chủ ngữ.'],
   usage:'Đứng TRƯỚC đối tượng, tạo thành cụm giới từ làm trạng ngữ: 跟 + [người] + Động từ (跟你去, 跟我一起玩儿).',
   collo:['跟你去','跟我一起','跟朋友聊天'],
   ex_zh:'我还没想好要不要跟你去呢。',ex_py:'Wǒ hái méi xiǎnghǎo yào bu yào gēn nǐ qù ne.',ex_vn:'Tôi vẫn chưa nghĩ xong có nên đi cùng bạn hay không.',
   exList:[
     {zh:'我还没想好要不要跟你去呢。',py:'Wǒ hái méi xiǎnghǎo yào bu yào gēn nǐ qù ne.',vn:'Tôi vẫn chưa nghĩ xong có nên đi cùng bạn hay không.'},
     {zh:'你能跟我一起去吗？',py:'Nǐ néng gēn wǒ yìqǐ qù ma?',vn:'Bạn có thể đi cùng tôi không?'},
     {zh:'我喜欢跟朋友聊天。',py:'Wǒ xǐhuan gēn péngyou liáotiān.',vn:'Tôi thích trò chuyện cùng bạn bè.'},
   ],
   hanzi:[
     {c:'跟',p:'gēn',type:'左右结构 · Trái-phải',st:13,ord:'足 (túc) trái → 艮 (cấn) phải',rad:'足 (túc – chân)',mean:'theo, đi cùng',
      tip:'Bộ chân 足 (bước đi) + 艮(dừng lại, đối diện) → BƯỚC THEO SÁT ai đó = ĐI CÙNG.',
      cf:'很 (hěn – "rất", cũng có 艮")',w:'跟你 / 跟着 / 跟他学'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn đi cùng tôi thì tôi sẽ không sợ lạc đường.',answer:'只要你跟我一起去，我就不怕迷路。',answerPy:'Zhǐyào nǐ gēn wǒ yìqǐ qù, wǒ jiù bú pà mílù.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
     {promptLang:'vi',prompt:'Vì em gái muốn đi cùng nên tôi phải đợi thêm một lúc.',answer:'因为妹妹想跟着去，所以我得再等一会儿。',answerPy:'Yīnwèi mèimei xiǎng gēnzhe qù, suǒyǐ wǒ děi zài děng yíhuìr.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:5,zh:'一直',py:'yìzhí',pos:'Phó từ',vn:'suốt, liên tục',em:'➡️',lesson:2,
   explain:['Diễn tả một hành động hoặc trạng thái kéo dài không ngừng, không thay đổi.'],
   usage:'Phó từ, đứng TRƯỚC động từ/tính từ mà nó bổ nghĩa: 一直 + V/Adj (一直玩儿, 一直想).',
   collo:['一直玩儿','一直想去','一直没有'],
   ex_zh:'你一直玩儿电脑游戏，作业写完了吗？',ex_py:'Nǐ yìzhí wánr diànnǎo yóuxì, zuòyè xiěwán le ma?',ex_vn:'Con chơi game máy tính suốt vậy, bài tập làm xong chưa?',
   exList:[
     {zh:'你一直玩儿电脑游戏，作业写完了吗？',py:'Nǐ yìzhí wánr diànnǎo yóuxì, zuòyè xiěwán le ma?',vn:'Con chơi game máy tính suốt vậy, bài tập làm xong chưa?'},
     {zh:'南方我一直想去看看。',py:'Nánfāng wǒ yìzhí xiǎng qù kànkan.',vn:'Miền Nam tôi vẫn luôn muốn đi xem thử.'},
     {zh:'他一直在办公室工作。',py:'Tā yìzhí zài bàngōngshì gōngzuò.',vn:'Anh ấy làm việc suốt trong văn phòng.'},
   ],
   hanzi:[
     {c:'直',p:'zhí',type:'独体字 · Chữ đơn (chỉ sự)',st:8,ord:'十+目 trên → 一 dưới',rad:'目 (mục – mắt)',mean:'thẳng, liên tục',
      tip:'Mắt 目 nhìn thẳng theo một đường thẳng 一 không lệch hướng → nghĩa THẲNG, mở rộng thành LIÊN TỤC không đổi.',
      cf:'真 (zhēn – "thật", hình gần giống")',w:'一直 / 直接 / 直走'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì trời mưa suốt nên chúng tôi không thể đi leo núi được.',answer:'因为雨一直下，所以我们没能去爬山。',answerPy:'Yīnwèi yǔ yìzhí xià, suǒyǐ wǒmen méi néng qù páshān.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Tuy đã ôn tập liên tục nhưng cô ấy vẫn thấy lo lắng.',answer:'虽然她一直在复习，但是还是觉得着急。',answerPy:'Suīrán tā yìzhí zài fùxí, dànshì háishi juéde zháojí.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:6,zh:'游戏',py:'yóuxì',pos:'Danh từ',vn:'trò chơi',em:'🎮',lesson:2,
   explain:['Hoạt động giải trí, thường chỉ trò chơi điện tử/máy tính trong ngữ cảnh hiện đại.'],
   usage:'Danh từ; thường kết hợp với động từ 玩儿 (chơi): 玩儿 + 游戏.',
   collo:['玩儿游戏','电脑游戏','手机游戏'],
   ex_zh:'你一直玩儿电脑游戏，作业写完了吗？',ex_py:'Nǐ yìzhí wánr diànnǎo yóuxì, zuòyè xiěwán le ma?',ex_vn:'Con chơi game máy tính suốt vậy, bài tập làm xong chưa?',
   exList:[
     {zh:'你一直玩儿电脑游戏，作业写完了吗？',py:'Nǐ yìzhí wánr diànnǎo yóuxì, zuòyè xiěwán le ma?',vn:'Con chơi game máy tính suốt vậy, bài tập làm xong chưa?'},
     {zh:'那也不能一直玩儿啊。',py:'Nà yě bù néng yìzhí wánr a.',vn:'Vậy cũng không thể chơi mãi được.'},
     {zh:'弟弟很喜欢玩儿手机游戏。',py:'Dìdi hěn xǐhuan wánr shǒujī yóuxì.',vn:'Em trai rất thích chơi game trên điện thoại.'},
   ],
   hanzi:[
     {c:'戏',p:'xì',type:'左右结构 · Trái-phải',st:6,ord:'又 (hựu) trái → 戈 (qua) phải',rad:'戈 (qua – vũ khí)',mean:'trò chơi; tuồng, kịch',
      tip:'又(tay) cầm 戈(vũ khí đồ chơi) → diễn tả các trò TRÒ CHƠI, DIỄN KỊCH thời cổ.',
      cf:'哉 (zāi – trợ từ cổ, cũng có 戈")',w:'游戏 / 做游戏 / 电脑游戏'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bạn làm xong bài tập thì có thể chơi game một lúc.',answer:'如果你写完了作业，就可以玩儿一会儿游戏。',answerPy:'Rúguǒ nǐ xiěwánle zuòyè, jiù kěyǐ wánr yíhuìr yóuxì.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
     {promptLang:'vi',prompt:'Chỉ cần đừng chơi game quá nhiều thì mẹ sẽ không lo lắng.',answer:'只要你别玩儿太多游戏，妈妈就不会着急。',answerPy:'Zhǐyào nǐ bié wánr tài duō yóuxì, māma jiù bú huì zháojí.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:7,zh:'作业',py:'zuòyè',pos:'Danh từ',vn:'bài tập về nhà',em:'📓',lesson:2,
   explain:['Bài tập giáo viên giao cho học sinh làm ở nhà.'],
   usage:'Danh từ; thường kết hợp với động từ 写 (viết/làm) hoặc 做 (làm): 写作业, 做作业.',
   collo:['写作业','做作业','作业写完了'],
   ex_zh:'作业写完了吗？',ex_py:'Zuòyè xiěwán le ma?',ex_vn:'Bài tập làm xong chưa?',
   exList:[
     {zh:'作业写完了吗？',py:'Zuòyè xiěwán le ma?',vn:'Bài tập làm xong chưa?'},
     {zh:'都写完了。',py:'Dōu xiěwán le.',vn:'Đều làm xong hết rồi.'},
     {zh:'我不能跟你出去玩儿，明天的汉语课我还没做作业。',py:'Wǒ bù néng gēn nǐ chūqu wánr, míngtiān de Hànyǔ kè wǒ hái méi zuò zuòyè.',vn:'Tôi không thể đi chơi cùng bạn, bài tập cho tiết tiếng Trung ngày mai tôi vẫn chưa làm.'},
   ],
   hanzi:[
     {c:'业',p:'yè',type:'独体字 · Chữ đơn (giản thể)',st:5,ord:'nét liền',rad:'一 (nhất)',mean:'nghề nghiệp; công việc',
      tip:'Chữ giản thể mô phỏng hình cái giá gỗ để treo chuông khánh thời cổ, nơi thực hiện công việc → mở rộng thành CÔNG VIỆC, BÀI VỞ.',
      cf:'亚 (yà – "châu Á", hình dáng gần giống")',w:'作业 / 工作 / 毕业'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì bài tập còn nhiều nên tôi không có thời gian chơi game.',answer:'因为作业还很多，所以我没有时间玩儿游戏。',answerPy:'Yīnwèi zuòyè hái hěn duō, suǒyǐ wǒ méiyǒu shíjiān wánr yóuxì.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn làm xong bài tập sớm thì có thể đi ngủ sớm.',answer:'如果你早点儿写完作业，就可以早点儿睡觉。',answerPy:'Rúguǒ nǐ zǎo diǎnr xiěwán zuòyè, jiù kěyǐ zǎo diǎnr shuìjiào.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:8,zh:'着急',py:'zháojí',pos:'Tính từ',vn:'lo lắng, sốt ruột',em:'😟',lesson:2,
   explain:['Cảm giác không yên tâm, muốn giải quyết ngay một việc gì đó gấp gáp.'],
   usage:'Tính từ, làm vị ngữ với 很/别/一点儿也不: 很着急, 别着急 (đừng lo), 一点儿也不着急 (không lo chút nào).',
   collo:['别着急','很着急','一点儿也不着急'],
   ex_zh:'你怎么一点儿也不着急？',ex_py:'Nǐ zěnme yìdiǎnr yě bù zháojí?',ex_vn:'Sao con không lo lắng chút nào vậy?',
   exList:[
     {zh:'你怎么一点儿也不着急？',py:'Nǐ zěnme yìdiǎnr yě bù zháojí?',vn:'Sao con không lo lắng chút nào vậy?'},
     {zh:'别着急，慢慢来。',py:'Bié zháojí, mànman lái.',vn:'Đừng lo, từ từ làm.'},
     {zh:'考试快到了，他很着急。',py:'Kǎoshì kuài dào le, tā hěn zháojí.',vn:'Kỳ thi sắp đến rồi, anh ấy rất lo lắng.'},
   ],
   hanzi:[
     {c:'急',p:'jí',type:'上下结构 · Trên-dưới',st:9,ord:'刍+勹 trên → 心 dưới',rad:'心 (tâm – trái tim)',mean:'gấp, vội, lo lắng',
      tip:'Bộ tâm 心 (trong lòng) ở dưới, phần trên mô phỏng trạng thái GẤP GÁP → trong lòng nôn nóng, VỘI VÃ.',
      cf:'忽 (hū – "bỗng nhiên", cũng có bộ 心")',w:'着急 / 急事 / 急忙'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì bài tập chưa làm xong nên cậu bé rất lo lắng.',answer:'因为作业还没写完，所以孩子很着急。',answerPy:'Yīnwèi zuòyè hái méi xiěwán, suǒyǐ háizi hěn zháojí.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn ôn tập sớm thì sẽ không phải lo lắng nữa.',answer:'只要你早点儿复习，就不用着急了。',answerPy:'Zhǐyào nǐ zǎo diǎnr fùxí, jiù búyòng zháojí le.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:9,zh:'复习',py:'fùxí',pos:'Động từ',vn:'ôn tập',em:'📖',lesson:2,
   explain:['Xem lại, học lại những kiến thức đã học để ghi nhớ kỹ hơn.'],
   usage:'Động từ, có thể theo sau bởi tân ngữ (复习课文) hoặc kết quả bổ ngữ 好 (复习好了 = ôn xong và tốt).',
   collo:['复习好了','复习课文','早就复习了'],
   ex_zh:'我早就复习好了。',ex_py:'Wǒ zǎo jiù fùxí hǎo le.',ex_vn:'Con đã ôn xong từ lâu rồi.',
   exList:[
     {zh:'我早就复习好了。',py:'Wǒ zǎo jiù fùxí hǎo le.',vn:'Con đã ôn xong từ lâu rồi.'},
     {zh:'明天不是有考试吗？',py:'Míngtiān bú shì yǒu kǎoshì ma?',vn:'Ngày mai chẳng phải có thi sao?'},
     {zh:'考试快到了，你复习得怎么样？',py:'Kǎoshì kuài dào le, nǐ fùxí de zěnmeyàng?',vn:'Kỳ thi sắp đến rồi, bạn ôn tập thế nào rồi?'},
   ],
   hanzi:[
     {c:'习',p:'xí',type:'独体字 · Chữ đơn (giản thể)',st:3,ord:'nét liền',rad:'乙 (ất)',mean:'học tập, luyện tập',
      tip:'Chữ giản thể tượng hình cánh chim non tập bay lặp đi lặp lại → nghĩa LUYỆN TẬP, ÔN LẠI nhiều lần.',
      cf:'刁 (diāo – "xảo trá", hình gần giống")',w:'复习 / 学习 / 习惯'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì tôi đã ôn tập kỹ nên không còn lo lắng về kỳ thi nữa.',answer:'因为我已经复习好了，所以不再担心考试了。',answerPy:'Yīnwèi wǒ yǐjīng fùxí hǎo le, suǒyǐ bú zài dānxīn kǎoshì le.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn chưa ôn tập xong thì đừng đi chơi game nữa.',answer:'如果你还没复习好，就别去玩儿游戏了。',answerPy:'Rúguǒ nǐ hái méi fùxí hǎo, jiù bié qù wánr yóuxì le.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:10,zh:'南方',py:'nánfāng',pos:'Danh từ',vn:'phía nam, miền Nam',em:'🧭',lesson:3,
   explain:['Khu vực phía nam của một quốc gia/vùng đất, thường được nói tắt là 南.'],
   usage:'Danh từ chỉ phương hướng/khu vực; đối lập với 北方 (miền Bắc). Có thể dùng 南 độc lập hoặc 南方 đầy đủ.',
   collo:['去南方','南方人','南方天气'],
   ex_zh:'南方啊，我们去年就是这个时候去的。',ex_py:'Nánfāng a, wǒmen qùnián jiù shì zhège shíhou qù de.',ex_vn:'Miền Nam đấy, năm ngoái chúng tôi cũng đi vào lúc này.',
   exList:[
     {zh:'南方啊，我们去年就是这个时候去的。',py:'Nánfāng a, wǒmen qùnián jiù shì zhège shíhou qù de.',vn:'Miền Nam đấy, năm ngoái chúng tôi cũng đi vào lúc này.'},
     {zh:'南方太热了，北方好一些，不冷也不热。',py:'Nánfāng tài rè le, běifāng hǎo yìxiē, bù lěng yě bú rè.',vn:'Miền Nam nóng quá, miền Bắc dễ chịu hơn, không lạnh cũng không nóng.'},
     {zh:'南方我一直想去看看。',py:'Nánfāng wǒ yìzhí xiǎng qù kànkan.',vn:'Miền Nam tôi vẫn luôn muốn đi xem thử.'},
   ],
   hanzi:[
     {c:'南',p:'nán',type:'独体字 · Chữ đơn (chỉ sự)',st:9,ord:'nét liền',rad:'十 (thập)',mean:'phía nam',
      tip:'Chữ cổ vốn mô phỏng hình một loại nhạc cụ treo hướng về phía có ánh nắng ấm → PHƯƠNG NAM (hướng mặt trời, ấm áp).',
      cf:'击 (jī – "đánh", không liên quan nghĩa")',w:'南方 / 南边 / 东南'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì miền Nam nóng quá nên chúng tôi quyết định đi miền Bắc.',answer:'因为南方太热了，所以我们决定去北方。',answerPy:'Yīnwèi nánfāng tài rè le, suǒyǐ wǒmen juédìng qù běifāng.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Tuy miền Nam nóng nhưng tôi vẫn rất thích đi du lịch ở đó.',answer:'虽然南方很热，但是我还是很喜欢去那儿旅游。',answerPy:'Suīrán nánfāng hěn rè, dànshì wǒ háishi hěn xǐhuan qù nàr lǚyóu.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:11,zh:'北方',py:'běifāng',pos:'Danh từ',vn:'phía bắc, miền Bắc',em:'🧭',lesson:3,
   explain:['Khu vực phía bắc của một quốc gia/vùng đất, đối lập với 南方 (miền Nam).'],
   usage:'Danh từ chỉ phương hướng/khu vực, cách dùng tương tự 南方.',
   collo:['北方人','北方好一些','去北方'],
   ex_zh:'南方太热了，北方好一些，不冷也不热。',ex_py:'Nánfāng tài rè le, běifāng hǎo yìxiē, bù lěng yě bú rè.',ex_vn:'Miền Nam nóng quá, miền Bắc dễ chịu hơn, không lạnh cũng không nóng.',
   exList:[
     {zh:'南方太热了，北方好一些，不冷也不热。',py:'Nánfāng tài rè le, běifāng hǎo yìxiē, bù lěng yě bú rè.',vn:'Miền Nam nóng quá, miền Bắc dễ chịu hơn, không lạnh cũng không nóng.'},
     {zh:'我是北方人。',py:'Wǒ shì běifāngrén.',vn:'Tôi là người miền Bắc.'},
     {zh:'冬天北方很冷。',py:'Dōngtiān běifāng hěn lěng.',vn:'Mùa đông miền Bắc rất lạnh.'},
   ],
   hanzi:[
     {c:'北',p:'běi',type:'左右结构 · Trái-phải',st:5,ord:'两个"匕" đối lưng nhau',rad:'匕 (chuỷ)',mean:'phía bắc',
      tip:'Hình vẽ cổ hai người quay lưng vào nhau → hướng NGƯỢC với hướng mặt trời (nam) = PHƯƠNG BẮC.',
      cf:'比 (bǐ – "so sánh", hình gần giống nhưng quay cùng chiều")',w:'北方 / 北边 / 东北'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mùa đông đến thì miền Bắc sẽ rất lạnh.',answer:'只要冬天一到，北方就会很冷。',answerPy:'Zhǐyào dōngtiān yí dào, běifāng jiù huì hěn lěng.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
     {promptLang:'vi',prompt:'Vì miền Bắc không nóng cũng không lạnh nên nhiều người thích sống ở đó.',answer:'因为北方不冷也不热，所以很多人喜欢住在那儿。',answerPy:'Yīnwèi běifāng bù lěng yě bú rè, suǒyǐ hěn duō rén xǐhuan zhù zài nàr.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:12,zh:'面包',py:'miànbāo',pos:'Danh từ',vn:'bánh mì',em:'🍞',lesson:4,
   explain:['Loại thực phẩm làm từ bột mì nướng lên, dùng để ăn sáng hoặc ăn nhẹ.'],
   usage:'Danh từ; lượng từ đi kèm là 个 hoặc 块: 一个面包, 一块面包.',
   collo:['买面包','一个面包','面包便宜'],
   ex_zh:'今天的面包真便宜。',ex_py:'Jīntiān de miànbāo zhēn piányi.',ex_vn:'Bánh mì hôm nay rẻ thật.',
   exList:[
     {zh:'今天的面包真便宜。',py:'Jīntiān de miànbāo zhēn piányi.',vn:'Bánh mì hôm nay rẻ thật.'},
     {zh:'是啊，那我们多买几个吧！',py:'Shì a, nà wǒmen duō mǎi jǐ ge ba!',vn:'Đúng đấy, vậy chúng ta mua thêm vài cái đi!'},
     {zh:'水果、面包、茶都准备好了，我们还带什么？',py:'Shuǐguǒ, miànbāo, chá dōu zhǔnbèi hǎo le, wǒmen hái dài shénme?',vn:'Trái cây, bánh mì, trà đều chuẩn bị xong rồi, chúng ta còn mang gì nữa?'},
   ],
   hanzi:[
     {c:'包',p:'bāo',type:'半包围结构 · Bán bao vây',st:5,ord:'勹 bao ngoài → 巳 trong',rad:'勹 (bao – bao bọc)',mean:'gói, bọc; bánh bao/bánh mì',
      tip:'Bộ 勹(bao bọc) ôm lấy phần trong → hình ảnh vật gì đó được BỌC LẠI, mở rộng thành các loại bánh có lớp vỏ bọc.',
      cf:'色 (sè – "màu sắc", không liên quan")',w:'面包 / 书包 / 面包车'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì bánh mì ở cửa hàng này rất ngon nên tôi thường xuyên mua.',answer:'因为这家店的面包很好吃，所以我常常买。',answerPy:'Yīnwèi zhè jiā diàn de miànbāo hěn hǎochī, suǒyǐ wǒ chángcháng mǎi.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bánh mì hết rồi thì chúng ta mua trái cây thay thế vậy.',answer:'如果面包卖完了，我们就买水果代替吧。',answerPy:'Rúguǒ miànbāo màiwán le, wǒmen jiù mǎi shuǐguǒ dàitì ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:13,zh:'带',py:'dài',pos:'Động từ',vn:'mang theo',em:'🎒',lesson:4,
   explain:['Cầm, đem theo một vật gì đó khi di chuyển từ nơi này đến nơi khác.'],
   usage:'Động từ, theo sau là tân ngữ chỉ vật được mang theo: 带 + [vật] (带地图, 带钱).',
   collo:['带地图','带钱','多带几件'],
   ex_zh:'再多带几件衣服吧。',ex_py:'Zài duō dài jǐ jiàn yīfu ba.',ex_vn:'Mang thêm vài bộ quần áo nữa đi.',
   exList:[
     {zh:'再多带几件衣服吧。',py:'Zài duō dài jǐ jiàn yīfu ba.',vn:'Mang thêm vài bộ quần áo nữa đi.'},
     {zh:'手机、电脑、地图，一个也不能少。',py:'Shǒujī, diànnǎo, dìtú, yí ge yě bù néng shǎo.',vn:'Điện thoại, máy tính, bản đồ, một cái cũng không thể thiếu.'},
     {zh:'我没带地图，我们问问那边的游客吧。',py:'Wǒ méi dài dìtú, wǒmen wènwen nàbiān de yóukè ba.',vn:'Tôi không mang bản đồ, chúng ta hỏi thử du khách đằng kia đi.'},
   ],
   hanzi:[
     {c:'带',p:'dài',type:'独体字 · Chữ đơn (tượng hình)',st:9,ord:'nét liền, hình dây lưng',rad:'巾 (cân – khăn, vải)',mean:'mang, đeo; dải, đai',
      tip:'Chữ tượng hình mô phỏng chiếc DÂY LƯNG/dải vải đeo quanh người → mở rộng thành động từ MANG THEO.',
      cf:'常 (cháng – "thường xuyên", không liên quan")',w:'带东西 / 带钱 / 带路'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì trời sắp mưa nên bạn nhớ mang theo ô nhé.',answer:'因为要下雨了，所以你记得带把伞。',answerPy:'Yīnwèi yào xiàyǔ le, suǒyǐ nǐ jìde dài bǎ sǎn.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn không mang theo tiền thì tôi cho bạn mượn.',answer:'如果你没带钱，我就借给你吧。',answerPy:'Rúguǒ nǐ méi dài qián, wǒ jiù jiè gěi nǐ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:14,zh:'地图',py:'dìtú',pos:'Danh từ',vn:'bản đồ',em:'🗺️',lesson:4,
   explain:['Bản vẽ thể hiện vị trí địa lý, đường xá, khu vực... dùng để tìm đường.'],
   usage:'Danh từ; lượng từ đi kèm là 张 (tấm): 一张地图.',
   collo:['一张地图','带地图','看地图'],
   ex_zh:'手机、电脑、地图，一个也不能少。',ex_py:'Shǒujī, diànnǎo, dìtú, yí ge yě bù néng shǎo.',ex_vn:'Điện thoại, máy tính, bản đồ, một cái cũng không thể thiếu.',
   exList:[
     {zh:'手机、电脑、地图，一个也不能少。',py:'Shǒujī, diànnǎo, dìtú, yí ge yě bù néng shǎo.',vn:'Điện thoại, máy tính, bản đồ, một cái cũng không thể thiếu.'},
     {zh:'别着急，车上有电子地图。',py:'Bié zháojí, chē shang yǒu diànzǐ dìtú.',vn:'Đừng lo, trên xe có bản đồ điện tử.'},
     {zh:'不用，我就是地图，你问我吧。',py:'Búyòng, wǒ jiù shì dìtú, nǐ wèn wǒ ba.',vn:'Không cần đâu, tôi chính là bản đồ, bạn cứ hỏi tôi đi.'},
   ],
   hanzi:[
     {c:'图',p:'tú',type:'半包围结构 · Bán bao vây (giản thể)',st:8,ord:'囗 bao ngoài → 冬 (biến thể) trong',rad:'囗 (vi – bao quanh)',mean:'hình vẽ, bản đồ',
      tip:'Bộ 囗(khung bao quanh, như đường biên giới) chứa hình vẽ bên trong → BẢN ĐỒ, HÌNH VẼ khu vực.',
      cf:'因 (yīn – "nguyên nhân", cũng có 囗")',w:'地图 / 图书馆 / 画图'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì không mang bản đồ nên chúng tôi đã đi lạc đường.',answer:'因为没带地图，所以我们走错路了。',answerPy:'Yīnwèi méi dài dìtú, suǒyǐ wǒmen zǒucuò lù le.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn không rành đường thì hãy mang theo bản đồ điện tử.',answer:'如果你不认识路，就带上电子地图吧。',answerPy:'Rúguǒ nǐ bú rènshi lù, jiù dàishang diànzǐ dìtú ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:15,zh:'搬',py:'bān',pos:'Động từ',vn:'dọn, dời, chuyển (nhà/đồ)',em:'📦',lesson:4,
   explain:['Di chuyển một vật (thường nặng/cồng kềnh) hoặc chuyển nơi ở từ chỗ này sang chỗ khác.'],
   usage:'Động từ, có thể đi với tân ngữ 家 (搬家 = chuyển nhà) hoặc vật cụ thể (搬东西 = khuân đồ).',
   collo:['搬家','搬东西','不是搬家'],
   ex_zh:'我们是去旅游，不是搬家，还是少带一些吧。',ex_py:'Wǒmen shì qù lǚyóu, bú shì bān jiā, háishi shǎo dài yìxiē ba.',ex_vn:'Chúng ta là đi du lịch, không phải chuyển nhà, thôi mang ít thôi.',
   exList:[
     {zh:'我们是去旅游，不是搬家，还是少带一些吧。',py:'Wǒmen shì qù lǚyóu, bú shì bān jiā, háishi shǎo dài yìxiē ba.',vn:'Chúng ta là đi du lịch, không phải chuyển nhà, thôi mang ít thôi.'},
     {zh:'请问您打算什么时候搬？',py:'Qǐngwèn nín dǎsuàn shénme shíhou bān?',vn:'Xin hỏi anh định khi nào chuyển nhà?'},
     {zh:'这么多东西，你怎么一个人搬？',py:'Zhème duō dōngxi, nǐ zěnme yí ge rén bān?',vn:'Nhiều đồ vậy, sao bạn khuân một mình được?'},
   ],
   hanzi:[
     {c:'搬',p:'bān',type:'左右结构 · Trái-phải',st:13,ord:'扌 (thủ) trái → 般 (bàn) phải',rad:'扌 (thủ – bàn tay)',mean:'khuân, dời, chuyển',
      tip:'Bộ tay 扌 + 般(loại, kiểu — vốn chỉ thuyền) → dùng TAY di chuyển đồ vật từ nơi này sang nơi khác.',
      cf:'船 (chuán – "thuyền", cũng chứa 舟 gần 般")',w:'搬家 / 搬东西 / 搬走'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì nhà mới gần công ty hơn nên tuần sau chúng tôi sẽ chuyển nhà.',answer:'因为新家离公司更近，所以我们下周要搬家。',answerPy:'Yīnwèi xīn jiā lí gōngsī gèng jìn, suǒyǐ wǒmen xià zhōu yào bān jiā.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn giúp tôi khuân đồ thì tôi sẽ mời bạn ăn cơm.',answer:'只要你帮我搬东西，我就请你吃饭。',answerPy:'Zhǐyào nǐ bāng wǒ bān dōngxi, wǒ jiù qǐng nǐ chīfàn.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:16,zh:'小丽',py:'Xiǎolì',pos:'Danh từ riêng',vn:'chị Lệ (tên người)',em:'👧',lesson:1,
   explain:['Tên riêng của một nhân vật nữ trong bài hội thoại (nhân vật xuất hiện xuyên suốt các bài tiếp theo).'],
   usage:'Danh từ riêng chỉ tên người, dùng làm chủ ngữ hoặc tân ngữ trong câu như một danh từ bình thường.',
   collo:['小丽说','跟小丽一起','小丽的打算'],
   ex_zh:'小丽还没想好要不要跟你去呢。',ex_py:'Xiǎolì hái méi xiǎnghǎo yào bu yào gēn nǐ qù ne.',ex_vn:'Chị Lệ vẫn chưa nghĩ xong có nên đi cùng bạn hay không.',
   exList:[
     {zh:'小丽还没想好要不要跟你去呢。',py:'Xiǎolì hái méi xiǎnghǎo yào bu yào gēn nǐ qù ne.',vn:'Chị Lệ vẫn chưa nghĩ xong có nên đi cùng bạn hay không.'},
     {zh:'小丽，周末你有什么打算？',py:'Xiǎolì, zhōumò nǐ yǒu shénme dǎsuàn?',vn:'Chị Lệ ơi, cuối tuần chị có kế hoạch gì không?'},
   ]},

  {n:17,zh:'小刚',py:'Xiǎogāng',pos:'Danh từ riêng',vn:'anh Cương (tên người)',em:'🧑',lesson:1,
   explain:['Tên riêng của một nhân vật nam trong bài hội thoại (nhân vật xuất hiện xuyên suốt các bài tiếp theo).'],
   usage:'Danh từ riêng chỉ tên người, dùng làm chủ ngữ hoặc tân ngữ trong câu như một danh từ bình thường.',
   collo:['小刚说','跟小刚一起','小刚的打算'],
   ex_zh:'小刚早就想好了。',ex_py:'Xiǎogāng zǎo jiù xiǎnghǎo le.',ex_vn:'Anh Cương đã nghĩ xong từ lâu rồi.',
   exList:[
     {zh:'小刚早就想好了。',py:'Xiǎogāng zǎo jiù xiǎnghǎo le.',vn:'Anh Cương đã nghĩ xong từ lâu rồi.'},
     {zh:'小刚，我们还带什么？',py:'Xiǎogāng, wǒmen hái dài shénme?',vn:'Anh Cương ơi, chúng ta còn mang gì nữa?'},
   ]},
];

const wuData = [
  {img:'📅',label:'周末',py:'zhōumò',letter:'A'},
  {img:'🎮',label:'游戏',py:'yóuxì',letter:'B'},
  {img:'📓',label:'作业',py:'zuòyè',letter:'C'},
  {img:'🍞',label:'面包',py:'miànbāo',letter:'D'},
  {img:'🗺️',label:'地图',py:'dìtú',letter:'E'},
  {img:'📦',label:'搬',py:'bān',letter:'F'},
];

var dialogData = [
  {scene:'谈周末的打算 · Nói về kế hoạch cuối tuần',
   preQuiz:[
     {q:'小刚周末打算做什么？',opts:['请小丽吃饭、看电影、喝咖啡','去旅游','搬家'],ans:0},
     {q:'小刚已经准备好了吗？',opts:['已经找好饭馆儿、买好电影票了','还没准备','忘记准备了'],ans:0},
     {q:'小丽答应跟小刚去了吗？',opts:['还没想好','答应了','拒绝了'],ans:0},
   ],
   lines:[
     {sp:1,zh:'周末你有什么打算？',py:'Zhōumò nǐ yǒu shénme dǎsuàn?',vn:'Cuối tuần bạn có kế hoạch gì?'},
     {sp:0,zh:'我早就想好了，请你吃饭、看电影、喝咖啡。',py:'Wǒ zǎo jiù xiǎnghǎo le, qǐng nǐ chī fàn, kàn diànyǐng, hē kāfēi.',vn:'Tôi đã nghĩ xong từ lâu rồi, mời bạn ăn cơm, xem phim, uống cà phê.'},
     {sp:1,zh:'请我？',py:'Qǐng wǒ?',vn:'Mời tôi à?'},
     {sp:0,zh:'是啊，我已经找好饭馆儿了，电影票也买好了。',py:'Shì a, wǒ yǐjīng zhǎohǎo fànguǎnr le, diànyǐngpiào yě mǎihǎo le.',vn:'Đúng vậy đấy, tôi đã tìm sẵn quán ăn rồi, vé xem phim cũng mua xong rồi.'},
     {sp:1,zh:'我还没想好要不要跟你去呢。',py:'Wǒ hái méi xiǎnghǎo yào bu yào gēn nǐ qù ne.',vn:'Tôi vẫn chưa nghĩ xong có nên đi cùng bạn hay không.'},
   ]},
  {scene:'在家 · Ở nhà',
   preQuiz:[
     {q:'儿子一直在做什么？',opts:['玩儿电脑游戏','写作业','看电视'],ans:0},
     {q:'儿子的作业写完了吗？',opts:['都写完了','还没写完','忘记写了'],ans:0},
     {q:'妈妈为什么问儿子？',opts:['明天有考试','儿子生病了','要出门了'],ans:0},
   ],
   lines:[
     {sp:1,zh:'你一直玩儿电脑游戏，作业写完了吗？',py:'Nǐ yìzhí wánr diànnǎo yóuxì, zuòyè xiěwán le ma?',vn:'Con chơi game máy tính suốt vậy, bài tập làm xong chưa?'},
     {sp:0,zh:'都写完了。',py:'Dōu xiěwán le.',vn:'Đều làm xong hết rồi.'},
     {sp:1,zh:'明天不是有考试吗？你怎么一点儿也不着急？',py:'Míngtiān bú shì yǒu kǎoshì ma? Nǐ zěnme yìdiǎnr yě bù zháojí?',vn:'Ngày mai chẳng phải có thi sao? Sao con không lo lắng chút nào vậy?'},
     {sp:0,zh:'我早就复习好了。',py:'Wǒ zǎo jiù fùxí hǎo le.',vn:'Con đã ôn xong từ lâu rồi.'},
     {sp:1,zh:'那也不能一直玩儿啊。',py:'Nà yě bù néng yìzhí wánr a.',vn:'Vậy cũng không thể chơi mãi được.'},
   ]},
  {scene:'聊旅游计划 · Nói về kế hoạch đi du lịch',
   preQuiz:[
     {q:'小丽下个月打算做什么？',opts:['去旅游','搬家','考试'],ans:0},
     {q:'小丽觉得哪儿最好玩儿？',opts:['南方','北方','没有想好'],ans:0},
     {q:'小刚觉得北方怎么样？',opts:['不冷也不热，好一些','太冷了','跟南方一样热'],ans:0},
   ],
   lines:[
     {sp:1,zh:'下个月我去旅游，你能跟我一起去吗？',py:'Xià ge yuè wǒ qù lǚyóu, nǐ néng gēn wǒ yìqǐ qù ma?',vn:'Tháng sau tôi đi du lịch, bạn có thể đi cùng tôi không?'},
     {sp:0,zh:'我还没想好呢。你觉得哪儿最好玩儿？',py:'Wǒ hái méi xiǎnghǎo ne. Nǐ juéde nǎr zuì hǎowánr?',vn:'Tôi vẫn chưa nghĩ xong. Bạn thấy đâu vui nhất?'},
     {sp:1,zh:'南方啊，我们去年就是这个时候去的。',py:'Nánfāng a, wǒmen qùnián jiù shì zhège shíhou qù de.',vn:'Miền Nam đấy, năm ngoái chúng tôi cũng đi vào lúc này.'},
     {sp:0,zh:'南方太热了，北方好一些，不冷也不热。',py:'Nánfāng tài rè le, běifāng hǎo yìxiē, bù lěng yě bú rè.',vn:'Miền Nam nóng quá, miền Bắc dễ chịu hơn, không lạnh cũng không nóng.'},
   ]},
  {scene:'准备去旅游 · Chuẩn bị đi du lịch',
   preQuiz:[
     {q:'水果、面包、茶怎么样了？',opts:['都准备好了','还没准备','忘记准备了'],ans:0},
     {q:'小丽说什么东西一个也不能少？',opts:['手机、电脑、地图','衣服、鞋子','钱、护照'],ans:0},
     {q:'小刚最后建议怎么做？',opts:['少带一些衣服','多带一些衣服','不带衣服'],ans:0},
   ],
   lines:[
     {sp:0,zh:'水果、面包、茶都准备好了，我们还带什么？',py:'Shuǐguǒ, miànbāo, chá dōu zhǔnbèi hǎo le, wǒmen hái dài shénme?',vn:'Trái cây, bánh mì, trà đều chuẩn bị xong rồi, chúng ta còn mang gì nữa?'},
     {sp:1,zh:'手机、电脑、地图，一个也不能少。',py:'Shǒujī, diànnǎo, dìtú, yí ge yě bù néng shǎo.',vn:'Điện thoại, máy tính, bản đồ, một cái cũng không thể thiếu.'},
     {sp:0,zh:'这些我昨天下午就准备好了。',py:'Zhèxiē wǒ zuótiān xiàwǔ jiù zhǔnbèi hǎo le.',vn:'Những thứ này chiều hôm qua tôi đã chuẩn bị xong rồi.'},
     {sp:1,zh:'再多带几件衣服吧。',py:'Zài duō dài jǐ jiàn yīfu ba.',vn:'Mang thêm vài bộ quần áo nữa đi.'},
     {sp:0,zh:'我们是去旅游，不是搬家，还是少带一些吧。',py:'Wǒmen shì qù lǚyóu, bú shì bān jiā, háishi shǎo dài yìxiē ba.',vn:'Chúng ta là đi du lịch, không phải chuyển nhà, thôi mang ít thôi.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'写',right:'作业'},
  {left:'玩儿',right:'游戏'},
  {left:'一张',right:'地图'},
  {left:'一个',right:'面包'},
  {left:'很',right:'着急'},
  {left:'去',right:'南方'},
  {left:'因为作业还没写完，',right:'所以他很着急。'},
  {left:'虽然南方很热，',right:'但是我还是想去。'},
  {left:'如果你没带地图，',right:'就用手机看吧。'},
  {left:'只要你早点儿复习，',right:'就不用着急了。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'这个',blank:'周末',post:'我要去旅游。',hint:'(cuối tuần)',ans:'周末'},
  {pre:'你周末有什么',blank:'打算',post:'？',hint:'(kế hoạch, dự định)',ans:'打算'},
  {pre:'好',blank:'啊',post:'，我们一起去吧。',hint:'(trợ từ ngữ khí)',ans:'啊'},
  {pre:'你能',blank:'跟',post:'我一起去吗？',hint:'(cùng, với)',ans:'跟'},
  {pre:'他',blank:'一直',post:'在办公室工作。',hint:'(suốt, liên tục)',ans:'一直'},
  {pre:'弟弟很喜欢玩儿手机',blank:'游戏',post:'。',hint:'(trò chơi)',ans:'游戏'},
  {pre:'老师，今天的',blank:'作业',post:'是什么？',hint:'(bài tập về nhà)',ans:'作业'},
  {pre:'考试快到了，你别',blank:'着急',post:'。',hint:'(lo lắng)',ans:'着急'},
  {pre:'你',blank:'复习',post:'得怎么样了？',hint:'(ôn tập)',ans:'复习'},
  {pre:'冬天',blank:'南方',post:'不太冷。',hint:'(miền Nam)',ans:'南方'},
  {pre:'我是',blank:'北方',post:'人。',hint:'(miền Bắc)',ans:'北方'},
  {pre:'这家店的',blank:'面包',post:'很好吃。',hint:'(bánh mì)',ans:'面包'},
  {pre:'出门前记得',blank:'带',post:'伞。',hint:'(mang theo)',ans:'带'},
  {pre:'我没带',blank:'地图',post:'，我们问问路吧。',hint:'(bản đồ)',ans:'地图'},
  {pre:'下个月我们要',blank:'搬',post:'家了。',hint:'(dọn, chuyển)',ans:'搬'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['因为','作业','还','没','写完','，','所以','他','很','着急','。'],ans:'因为作业还没写完，所以他很着急。',audio:'因为作业还没写完，所以他很着急。'},
  {words:['虽然','南方','很','热','，','但是','我','还是','想','去','。'],ans:'虽然南方很热，但是我还是想去。',audio:'虽然南方很热，但是我还是想去。'},
  {words:['如果','你','没','带','地图','，','就','用','手机','看','吧','。'],ans:'如果你没带地图，就用手机看吧。',audio:'如果你没带地图，就用手机看吧。'},
  {words:['只要','你','早点儿','复习','，','就','不用','着急','了','。'],ans:'只要你早点儿复习，就不用着急了。',audio:'只要你早点儿复习，就不用着急了。'},
  {words:['他','早','就','把','作业','写','好','了','。'],ans:'他早就把作业写好了。',audio:'他早就把作业写好了。'},
  {words:['这','是','我','昨天','下午','准备','好','的','。'],ans:'这是我昨天下午准备好的。',audio:'这是我昨天下午准备好的。'},
  {words:['手机','、','电脑','、','地图','，','一','个','也','不','能','少','。'],ans:'手机、电脑、地图，一个也不能少。',audio:'手机、电脑、地图，一个也不能少。'},
  {words:['我们','是','去','旅游','，','不','是','搬家','。'],ans:'我们是去旅游，不是搬家。',audio:'我们是去旅游，不是搬家。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我想好早就了。',
   opts:['我早就想好了。','我想好早就了。','早就我想好了。','我想早就好了。'],ans:0,
   exp:'Bổ ngữ kết quả 好 phải đứng NGAY SAU động từ 想: 想 + 好, phó từ thời gian 早就 đứng đầu câu (trước động từ), không chen vào giữa động từ và bổ ngữ.'},
  {wrong:'我一个苹果不想吃也。',
   opts:['我一个苹果也不想吃。','我一个苹果不想吃也。','一个苹果我也不想吃了。','我不想也一个苹果吃。'],ans:0,
   exp:'Cấu trúc phủ định hoàn toàn "一 + lượng từ + danh từ + 也/都 + 不/没 + động từ": 也 phải đứng NGAY TRƯỚC phủ định 不, không đặt ở cuối câu.'},
  {wrong:'他一点儿也着急不。',
   opts:['他一点儿也不着急。','他一点儿也着急不。','他也一点儿不着急。','一点儿他也不着急。'],ans:0,
   exp:'Cấu trúc "一点儿也/都 + 不/没 + tính từ": 不 phải đứng NGAY TRƯỚC tính từ 着急, không đặt sau nó.'},
  {wrong:'那不能一直也玩儿啊。',
   opts:['那也不能一直玩儿啊。','那不能一直也玩儿啊。','那一直也不能玩儿啊。','那不能也一直玩儿啊。'],ans:0,
   exp:'也 (cũng) phải đứng NGAY SAU liên từ 那 và TRƯỚC động từ năng nguyện 能: 那 + 也 + 不能 + 一直玩儿.'},
  {wrong:'你跟去我一起吗？',
   opts:['你能跟我一起去吗？','你跟去我一起吗？','你去跟我一起吗？','你一起跟我去吗？'],ans:0,
   exp:'Cụm giới từ "跟 + người" phải đứng TRƯỚC động từ chính 去, không tách rời 跟 và 去 ra hai phía của đối tượng.'},
  {wrong:'我们少带还是一些吧。',
   opts:['我们还是少带一些吧。','我们少带还是一些吧。','还是我们少带一些吧。','我们少还是带一些吧。'],ans:0,
   exp:'连词 "还是" (thôi thì, hay là) khi dùng để đề nghị phải đứng NGAY SAU chủ ngữ, TRƯỚC động từ: 我们 + 还是 + 少带一些吧.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'小刚周末打算做什么？',
     q_vn:'Anh Cương cuối tuần định làm gì?',
     hint:'请小丽吃饭、看电影、喝咖啡',
     sample:'小刚打算请小丽吃饭、看电影、喝咖啡。',
     sample_vn:'Anh Cương định mời chị Lệ ăn cơm, xem phim, uống cà phê.',
     note:'打算 + V = dự định làm gì.'},
    {q_zh:'儿子的作业写完了吗？他着急吗？',
     q_vn:'Bài tập của con trai làm xong chưa? Cậu ấy có lo lắng không?',
     hint:'都写完了，一点儿也不着急',
     sample:'儿子的作业都写完了，他一点儿也不着急。',
     sample_vn:'Bài tập của con trai đã làm xong hết rồi, cậu ấy không lo lắng chút nào.',
     note:'一点儿也不 + tính từ = hoàn toàn không.'},
    {q_zh:'小丽觉得去南方还是去北方好？为什么？',
     q_vn:'Chị Lệ thấy đi miền Nam hay miền Bắc tốt hơn? Vì sao?',
     hint:'北方好一些，因为不冷也不热',
     sample:'小刚觉得北方好一些，因为北方不冷也不热。',
     sample_vn:'Anh Cương thấy miền Bắc tốt hơn, vì miền Bắc không lạnh cũng không nóng.',
     note:'不冷也不热 = không lạnh cũng không nóng, cấu trúc song song phủ định.'},
    {q_zh:'他们准备去旅游需要带什么？',
     q_vn:'Họ chuẩn bị đi du lịch cần mang theo gì?',
     hint:'水果、面包、茶，还有手机、电脑、地图',
     sample:'他们需要带水果、面包、茶，还有手机、电脑、地图。',
     sample_vn:'Họ cần mang trái cây, bánh mì, trà, còn có điện thoại, máy tính, bản đồ.',
     note:'还有 dùng để liệt kê thêm các vật khác.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Vì cuối tuần này tôi có việc nên không thể đi du lịch với bạn được.', zh:'因为这个周末我有事，所以不能跟你去旅游。', py:'Yīnwèi zhège zhōumò wǒ yǒu shì, suǒyǐ bù néng gēn nǐ qù lǚyóu.'},
  {vi:'Tuy tôi đã ôn tập xong nhưng vẫn cảm thấy hơi lo lắng.', zh:'虽然我已经复习好了，但是还是觉得有点儿着急。', py:'Suīrán wǒ yǐjīng fùxí hǎo le, dànshì háishi juéde yǒudiǎnr zháojí.'},
  {vi:'Nếu bạn không mang theo bản đồ thì chúng ta sẽ dễ đi lạc đường.', zh:'如果你不带地图，我们就容易走错路。', py:'Rúguǒ nǐ bú dài dìtú, wǒmen jiù róngyì zǒucuò lù.'},
  {vi:'Chỉ cần bạn làm xong bài tập thì có thể chơi game một lúc.', zh:'只要你写完作业，就可以玩儿一会儿游戏。', py:'Zhǐyào nǐ xiěwán zuòyè, jiù kěyǐ wánr yíhuìr yóuxì.'},
  {vi:'Anh ấy vừa chuyển nhà vừa gọi điện hỏi thăm bạn bè.', zh:'他一边搬家，一边打电话问朋友。', py:'Tā yìbiān bān jiā, yìbiān dǎ diànhuà wèn péngyou.'},
  {vi:'Trên bàn học của tôi luôn để một tấm bản đồ Trung Quốc.', zh:'我的书桌上总是放着一张中国地图。', py:'Wǒ de shūzhuō shang zǒngshì fàngzhe yì zhāng Zhōngguó dìtú.'},
  {vi:'Bạn đi miền Nam hay miền Bắc đều được, tôi đều rất thích.', zh:'你去南方或者北方都可以，我都很喜欢。', py:'Nǐ qù nánfāng huòzhě běifāng dōu kěyǐ, wǒ dōu hěn xǐhuan.'},
  {vi:'Vì bánh mì ở tiệm đó chỉ còn một cái nên tôi mua ngay.', zh:'因为那家店的面包只剩一个了，所以我马上买了。', py:'Yīnwèi nà jiā diàn de miànbāo zhǐ shèng yí ge le, suǒyǐ wǒ mǎshàng mǎi le.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Tuy trò chơi này thú vị nhưng tôi không có nhiều thời gian để chơi.', zh:'虽然这个游戏很有意思，但是我没有很多时间玩儿。', py:'Suīrán zhège yóuxì hěn yǒu yìsi, dànshì wǒ méiyǒu hěn duō shíjiān wánr.'},
  {vi:'Nếu bạn chưa nghĩ xong kế hoạch thì đừng vội quyết định.', zh:'如果你还没想好打算，就别着急决定。', py:'Rúguǒ nǐ hái méi xiǎnghǎo dǎsuàn, jiù bié zháojí juédìng.'},
  {vi:'Trong túi tôi để rất nhiều đồ, một tấm bản đồ cũng có.', zh:'我包里放着很多东西，一张地图也有。', py:'Wǒ bāo lǐ fàngzhe hěn duō dōngxi, yì zhāng dìtú yě yǒu.'},
  {vi:'Chỉ cần bố mẹ đồng ý thì tôi cuối tuần này sẽ đi chơi xa.', zh:'只要爸爸妈妈同意，我这个周末就去远一点儿的地方玩儿。', py:'Zhǐyào bàba māma tóngyì, wǒ zhège zhōumò jiù qù yuǎn yìdiǎnr de dìfang wánr.'},
  {vi:'Chị ấy vừa ôn tập vừa nghe nhạc, cảm thấy rất thoải mái.', zh:'她一边复习，一边听音乐，觉得很舒服。', py:'Tā yìbiān fùxí, yìbiān tīng yīnyuè, juéde hěn shūfu.'},
  {vi:'Vì phải chuyển nhà gấp nên cả nhà đều rất bận rộn mấy ngày nay.', zh:'因为要赶着搬家，所以全家这几天都很忙。', py:'Yīnwèi yào gǎnzhe bān jiā, suǒyǐ quánjiā zhè jǐ tiān dōu hěn máng.'},
  {vi:'Nếu bạn cảm thấy lo lắng thì cứ nói với tôi, đừng giữ trong lòng.', zh:'如果你觉得着急，就跟我说，别放在心里。', py:'Rúguǒ nǐ juéde zháojí, jiù gēn wǒ shuō, bié fàng zài xīnlǐ.'},
  {vi:'Cậu ấy thích ăn bánh mì vào buổi sáng, hầu như ngày nào cũng mua.', zh:'他早上喜欢吃面包，几乎每天都买。', py:'Tā zǎoshang xǐhuan chī miànbāo, jīhū měitiān dōu mǎi.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 1)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm
//    nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-1/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'男', pre:'你怎么又', blank:'不高兴了', post:'？',
       py:'Nǐ zěnme yòu bù gāoxìng le?', vn:'Sao bạn lại không vui vậy nữa?'},
      {speaker:'女', pre:'你工作一直忙，', blank:'一次电影都没跟我一起看过', post:'。',
       py:'Nǐ gōngzuò yìzhí máng, yí cì diànyǐng dōu méi gēn wǒ yìqǐ kànguo.', vn:'Anh làm việc bận suốt, một lần phim cũng chưa từng xem cùng em.'},
    ]},
    {num:2, lines:[
      {speaker:'男', pre:'喂，您好，', blank:'请问是搬家公司吗', post:'？我们要搬家。',
       py:'Wéi, nín hǎo, qǐngwèn shì bān jiā gōngsī ma? Wǒmen yào bān jiā.', vn:'Alô, xin chào, cho hỏi đây có phải công ty chuyển nhà không? Chúng tôi cần chuyển nhà.'},
      {speaker:'女', pre:'请问您', blank:'打算什么时候搬', post:'？',
       py:'Qǐngwèn nín dǎsuàn shénme shíhou bān?', vn:'Xin hỏi anh định khi nào chuyển nhà?'},
    ]},
    {num:3, lines:[
      {speaker:'男', pre:'爸、妈，今天我给你们做晚饭，', blank:'你们打算吃什么', post:'？',
       py:'Bà, mā, jīntiān wǒ gěi nǐmen zuò wǎnfàn, nǐmen dǎsuàn chī shénme?', vn:'Bố, mẹ, hôm nay con nấu cơm tối cho bố mẹ, bố mẹ định ăn gì?'},
      {speaker:'女', pre:'真的啊？那我们', blank:'吃点儿牛肉吧', post:'。',
       py:'Zhēn de a? Nà wǒmen chī diǎnr niúròu ba.', vn:'Thật à? Vậy chúng ta ăn chút thịt bò đi.'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'今天的面包', blank:'真便宜', post:'。',
       py:'Jīntiān de miànbāo zhēn piányi.', vn:'Bánh mì hôm nay rẻ thật.'},
      {speaker:'女', pre:'是啊，那我们', blank:'多买几个吧', post:'！',
       py:'Shì a, nà wǒmen duō mǎi jǐ ge ba!', vn:'Đúng đấy, vậy chúng ta mua thêm vài cái đi!'},
    ]},
    {num:5, lines:[
      {speaker:'女', pre:'这是哪儿啊？你开错了吧？', blank:'我们怎么回家啊', post:'？',
       py:'Zhè shì nǎr a? Nǐ kāicuò le ba? Wǒmen zěnme huí jiā a?', vn:'Đây là đâu vậy? Bạn lái nhầm đường rồi phải không? Chúng ta về nhà kiểu gì đây?'},
      {speaker:'男', pre:'别着急，', blank:'车上有电子地图', post:'。',
       py:'Bié zháojí, chē shang yǒu diànzǐ dìtú.', vn:'Đừng lo, trên xe có bản đồ điện tử.'},
    ]},
    {num:6, lines:[
      {pre:'这个电影一点儿意思也没有，', blank:'我们看书吧', post:'。',
       py:'Zhège diànyǐng yìdiǎnr yìsi yě méiyǒu, wǒmen kàn shū ba.', vn:'Bộ phim này chẳng thú vị chút nào, chúng ta đọc sách đi.'},
    ]},
    {num:7, lines:[
      {pre:'你怎么还没准备好？', blank:'快点儿吧，没时间了', post:'。',
       py:'Nǐ zěnme hái méi zhǔnbèi hǎo? Kuài diǎnr ba, méi shíjiān le.', vn:'Sao bạn vẫn chưa chuẩn bị xong? Mau lên đi, hết thời gian rồi.'},
    ]},
    {num:8, lines:[
      {pre:'明天的考试我都复习好了，', blank:'没问题', post:'。',
       py:'Míngtiān de kǎoshì wǒ dōu fùxí hǎo le, méi wèntí.', vn:'Kỳ thi ngày mai tôi đã ôn tập xong hết rồi, không thành vấn đề.'},
    ]},
    {num:9, lines:[
      {pre:'去南方旅游？去北方旅游？', blank:'去哪儿旅游好呢', post:'？',
       py:'Qù nánfāng lǚyóu? Qù běifāng lǚyóu? Qù nǎr lǚyóu hǎo ne?', vn:'Đi du lịch miền Nam? Đi du lịch miền Bắc? Đi đâu du lịch thì tốt nhỉ?'},
    ]},
    {num:10, lines:[
      {pre:'家里一个鸡蛋也没有，', blank:'明天早上吃什么啊', post:'？',
       py:'Jiā lǐ yí ge jīdàn yě méiyǒu, míngtiān zǎoshang chī shénme a?', vn:'Trong nhà một quả trứng cũng không có, sáng mai ăn gì đây?'},
    ]},
  ],
  mc: [
    {num:11, options:['送朋友','送衣服','去外边'], ans:0,
     lines:[
       {speaker:'男', pre:'你们等一下，我穿好衣服，', blank:'送送你们', post:'。', py:'Nǐmen děng yíxià, wǒ chuānhǎo yīfu, sòngsong nǐmen.', vn:'Các bạn đợi chút, tôi mặc xong quần áo rồi tiễn các bạn.'},
       {speaker:'女', pre:'你太客气了，外边冷，', blank:'别送了', post:'。', py:'Nǐ tài kèqi le, wàibian lěng, bié sòng le.', vn:'Bạn khách sáo quá, bên ngoài lạnh, đừng tiễn nữa.'},
     ],
     explain:'男：你们等一下，我穿好衣服，送送你们。女：你太客气了，外边冷，别送了。问：男的打算做什么？ → 送朋友。'},
    {num:12, options:['去过一次南方','上个月去了南方','很想去南方'], ans:2,
     lines:[
       {speaker:'男', pre:'下个月我们去南方旅游，', blank:'怎么样', post:'？', py:'Xià ge yuè wǒmen qù nánfāng lǚyóu, zěnmeyàng?', vn:'Tháng sau chúng ta đi du lịch miền Nam, thế nào?'},
       {speaker:'女', pre:'南方我还', blank:'一次都没去过呢', post:'，一直想去看看。', py:'Nánfāng wǒ hái yí cì dōu méi qùguo ne, yìzhí xiǎng qù kànkan.', vn:'Miền Nam tôi vẫn chưa đi lần nào cả, vẫn luôn muốn đi xem thử.'},
     ],
     explain:'男：下个月我们去南方旅游，怎么样？女：南方我还一次都没去过呢，一直想去看看。问：关于女的，可以知道什么？ → 很想去南方。'},
    {num:13, options:['买东西','搬东西','找儿子'], ans:1,
     lines:[
       {speaker:'女', pre:'大雨，你快来', blank:'帮我一下', post:'。', py:'Dàyǔ, nǐ kuài lái bāng wǒ yíxià.', vn:'Đại Vũ, bạn mau lại đây giúp tôi một chút.'},
       {speaker:'男', pre:'这么多东西，你怎么一个人搬？', blank:'你儿子去哪儿了', post:'？', py:'Zhème duō dōngxi, nǐ zěnme yí ge rén bān? Nǐ érzi qù nǎr le?', vn:'Nhiều đồ vậy, sao bạn khuân một mình được? Con trai bạn đi đâu rồi?'},
     ],
     explain:'女：大雨，你快来帮我一下。男：这么多东西，你怎么一个人搬？你儿子去哪儿了？问：女的请男的做什么？ → 搬东西。'},
    {num:14, options:['票卖完了','没有好看的电影','没带钱'], ans:1,
     lines:[
       {speaker:'男', pre:'别买票了，', blank:'一个好看的电影都没有', post:'。', py:'Bié mǎi piào le, yí ge hǎokàn de diànyǐng dōu méiyǒu.', vn:'Đừng mua vé nữa, một phim hay cũng không có.'},
       {speaker:'女', pre:'那', blank:'看看明天的吧', post:'。', py:'Nà kànkan míngtiān de ba.', vn:'Vậy xem phim của ngày mai vậy.'},
     ],
     explain:'男：别买票了，一个好看的电影都没有。女：那看看明天的吧。问：他们为什么没买票？ → 没有好看的电影。'},
    {num:15, options:['他带地图了','他没带地图','他知道这是哪儿'], ans:2,
     lines:[
       {speaker:'女', pre:'这是哪儿啊？我没带地图，', blank:'我们问问那边的游客吧', post:'。', py:'Zhè shì nǎr a? Wǒ méi dài dìtú, wǒmen wènwen nàbiān de yóukè ba.', vn:'Đây là đâu vậy? Tôi không mang bản đồ, chúng ta hỏi thử du khách đằng kia đi.'},
       {speaker:'男', pre:'不用，', blank:'我就是地图', post:'，你问我吧。', py:'Búyòng, wǒ jiù shì dìtú, nǐ wèn wǒ ba.', vn:'Không cần đâu, tôi chính là bản đồ, bạn cứ hỏi tôi đi.'},
     ],
     explain:'女：这是哪儿啊？我没带地图，我们问问那边的游客吧。男：不用，我就是地图，你问我吧。问：男的是什么意思？ → 他知道这是哪儿。'},
    {num:16, options:['公司南边','医院北边','医院北门'], ans:1,
     lines:[
       {speaker:'女', pre:'小周，', blank:'你们搬家了', post:'？', py:'Xiǎo Zhōu, nǐmen bān jiā le?', vn:'Tiểu Chu, các bạn chuyển nhà rồi à?'},
       {speaker:'男', pre:'是啊，', blank:'从公司南边搬到了医院北边', post:'。', py:'Shì a, cóng gōngsī nánbian bāndàole yīyuàn běibian.', vn:'Đúng vậy, chuyển từ phía nam công ty đến phía bắc bệnh viện.'},
       {speaker:'女', pre:'是吗？', blank:'那你们离白雪家很近吧', post:'。', py:'Shì ma? Nà nǐmen lí Báixuě jiā hěn jìn ba.', vn:'Vậy à? Vậy các bạn ở gần nhà Bạch Tuyết nhỉ.'},
       {speaker:'男', pre:'对，', blank:'他们家搬到了医院南边', post:'。', py:'Duì, tāmen jiā bāndàole yīyuàn nánbian.', vn:'Đúng, nhà họ chuyển đến phía nam bệnh viện rồi.'},
     ],
     explain:'女：小周，你们搬家了？男：是啊，从公司南边搬到了医院北边。女：是吗？那你们离白雪家很近吧。男：对，他们家搬到了医院南边。问：现在小周家在哪儿？ → 医院北边。'},
    {num:17, options:['谢谢','漂亮','还没有名字'], ans:2,
     lines:[
       {speaker:'男', pre:'这是你的小猫吗？', blank:'真漂亮', post:'！', py:'Zhè shì nǐ de xiǎomāo ma? Zhēn piàoliang!', vn:'Đây là mèo con của bạn à? Đẹp thật đấy!'},
       {speaker:'女', pre:'', blank:'谢谢', post:'。', py:'Xièxie.', vn:'Cảm ơn.'},
       {speaker:'男', pre:'它叫', blank:'什么名字', post:'？', py:'Tā jiào shénme míngzi?', vn:'Nó tên gì?'},
       {speaker:'女', pre:'我还没想好', blank:'叫它什么呢', post:'。', py:'Wǒ hái méi xiǎnghǎo jiào tā shénme ne.', vn:'Tôi vẫn chưa nghĩ xong nên đặt tên gì cho nó.'},
     ],
     explain:'男：这是你的小猫吗？真漂亮！女：谢谢。男：它叫什么名字？女：我还没想好叫它什么呢。问：女的的猫叫什么？ → 还没有名字。'},
    {num:18, options:['没去过那个饭馆','晚上没有时间','要请男的吃饭'], ans:0,
     lines:[
       {speaker:'男', pre:'你帮了我这么多，', blank:'谢谢你', post:'。', py:'Nǐ bāngle wǒ zhème duō, xièxie nǐ.', vn:'Bạn giúp tôi nhiều như vậy, cảm ơn bạn.'},
       {speaker:'男', pre:'晚上我请你吃饭，就去', blank:'公司南边的那家饭馆', post:'。', py:'Wǎnshang wǒ qǐng nǐ chīfàn, jiù qù gōngsī nánbian de nà jiā fànguǎn.', vn:'Tối nay tôi mời bạn ăn cơm, đến quán ăn ở phía nam công ty đó nhé.'},
       {speaker:'女', pre:'好啊，我还', blank:'一次都没去过呢', post:'。', py:'Hǎo a, wǒ hái yí cì dōu méi qùguo ne.', vn:'Được đấy, tôi vẫn chưa đi lần nào cả.'},
     ],
     explain:'男：你帮了我这么多，谢谢你。女：不客气。男：晚上我请你吃饭，就去公司南边的那家饭馆。女：好啊，我还一次都没去过呢。问：关于女的，可以知道什么？ → 没去过那个饭馆。'},
    {num:19, options:['考得不好','没带手表','还没复习'], ans:2,
     lines:[
       {speaker:'男', pre:'你怎么了？', blank:'一天都不高兴', post:'。', py:'Nǐ zěnme le? Yì tiān dōu bù gāoxìng.', vn:'Bạn sao vậy? Cả ngày đều không vui.'},
       {speaker:'女', pre:'明天就要考试了，', blank:'我一点儿都没复习呢', post:'。', py:'Míngtiān jiù yào kǎoshì le, wǒ yìdiǎnr dōu méi fùxí ne.', vn:'Mai là thi rồi, tôi vẫn chưa ôn tập chút nào cả.'},
       {speaker:'男', pre:'别着急，你学得好，', blank:'考试没问题', post:'。', py:'Bié zháojí, nǐ xué de hǎo, kǎoshì méi wèntí.', vn:'Đừng lo, bạn học tốt mà, thi không thành vấn đề đâu.'},
     ],
     explain:'男：你怎么了？一天都不高兴。女：明天就要考试了，我一点儿都没复习呢。男：别着急，你学得好，考试没问题。女：希望这次能考好。问：关于女的，可以知道什么？ → 还没复习。'},
    {num:20, options:['爱买书','爱看书','读了一本书'], ans:0,
     lines:[
       {speaker:'女', pre:'你桌子上有', blank:'那么多书啊', post:'？', py:'Nǐ zhuōzi shang yǒu nàme duō shū a?', vn:'Trên bàn bạn có nhiều sách vậy à?'},
       {speaker:'男', pre:'对，都是', blank:'我买的', post:'。', py:'Duì, dōu shì wǒ mǎi de.', vn:'Đúng, đều là tôi mua đấy.'},
       {speaker:'女', pre:'你真爱读书。哪本最有意思？', blank:'给我介绍一下吧', post:'。', py:'Nǐ zhēn ài dúshū. Nǎ běn zuì yǒu yìsi? Gěi wǒ jièshào yíxià ba.', vn:'Bạn thật thích đọc sách. Cuốn nào thú vị nhất? Giới thiệu cho tôi với.'},
       {speaker:'男', pre:'我爱买书，但是这些书我', blank:'一本都没读过', post:'。', py:'Wǒ ài mǎi shū, dànshì zhèxiē shū wǒ yì běn dōu méi dúguo.', vn:'Tôi thích mua sách, nhưng những cuốn sách này tôi chưa đọc cuốn nào cả.'},
     ],
     explain:'女：你桌子上有那么多书啊？男：对，都是我买的。女：你真爱读书。哪本最有意思？给我介绍一下吧。男：我爱买书，但是这些书我一本都没读过。问：关于男的，可以知道什么？ → 爱买书。'},
  ],
};
