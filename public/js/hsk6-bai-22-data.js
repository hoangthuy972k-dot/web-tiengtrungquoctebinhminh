// ══════════════════════════════════════════
// DATA — HSK6 Bài 22: 2050年的汽车什么样？ (Xe hơi năm 2050 sẽ như thế nào?)
// 第六单元 趣味世界 · Nguồn: HSK标准教程6下 (tr. 23–32)
// Bài khoá: 2050年的汽车什么样 (986 chữ) — 改编自《参考消息》同名文章
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'堵塞',py:'dǔsè',pos:'Động từ',vn:'tắc nghẽn, ngăn chặn',hv:'đổ tắc',em:'🚗',lesson:1,
   explain:['Động từ: (đường, ống, lối đi…) bị vật gì chặn lại, không thông: 交通堵塞, 下水道堵塞了.','塞 ở đây đọc sè (văn viết); khẩu ngữ "nhét" đọc sāi (塞车 sāichē = tắc xe). Từ khẩu ngữ tương đương: 堵车, 堵.'],
   usage:'交通 / 道路 / 管道 + 堵塞; 造成 / 缓解 + 堵塞; dùng như danh từ: 交通堵塞 (sự tắc nghẽn giao thông).',
   collo:['交通堵塞','道路堵塞','造成堵塞','缓解交通堵塞'],
   ex_zh:'每次遇到交通堵塞，人们就会想：汽车要是也有双翼就好了。',ex_py:'Měi cì yùdào jiāotōng dǔsè, rénmen jiù huì xiǎng: qìchē yàoshi yě yǒu shuāng yì jiù hǎo le.',ex_vn:'Mỗi lần gặp cảnh tắc đường, người ta lại nghĩ: giá mà ô tô cũng có đôi cánh thì hay biết mấy.',
   exList:[
     {zh:'每次遇到交通堵塞，人们就会想：汽车要是也有双翼就好了。',py:'Měi cì yùdào jiāotōng dǔsè, rénmen jiù huì xiǎng: qìchē yàoshi yě yǒu shuāng yì jiù hǎo le.',vn:'Mỗi lần gặp cảnh tắc đường, người ta lại nghĩ: giá mà ô tô cũng có đôi cánh thì hay biết mấy.'},
     {zh:'一场大雪过后，进城的道路严重堵塞，不少车辆只好绕道。',py:'Yì cháng dà xuě guòhòu, jìn chéng de dàolù yánzhòng dǔsè, bù shǎo chēliàng zhǐhǎo ràodào.',vn:'Sau một trận tuyết lớn, đường vào thành phố tắc nghẽn nghiêm trọng, không ít xe đành phải đi đường vòng.'},
     {zh:'厨房的下水道又堵塞了，你赶紧找人来修一下吧。',py:'Chúfáng de xiàshuǐdào yòu dǔsè le, nǐ gǎnjǐn zhǎo rén lái xiū yíxià ba.',vn:'Cống thoát nước trong bếp lại tắc rồi, anh mau gọi người đến sửa đi.'}
   ],
   colloFull:[
     {zh:'交通堵塞',py:'jiāotōng dǔsè',vn:'tắc nghẽn giao thông'},
     {zh:'道路堵塞',py:'dàolù dǔsè',vn:'đường sá tắc nghẽn'},
     {zh:'造成堵塞',py:'zàochéng dǔsè',vn:'gây ra tắc nghẽn'},
     {zh:'缓解交通堵塞',py:'huǎnjiě jiāotōng dǔsè',vn:'giảm bớt tắc đường'},
     {zh:'管道堵塞',py:'guǎndào dǔsè',vn:'đường ống bị tắc'}
   ],
   patterns:[
     {s:'N (交通 / 道路 / 管道) + 堵塞',m:'… bị tắc nghẽn'},
     {s:'造成 / 缓解 + (交通)堵塞',m:'Gây ra / giảm bớt tắc nghẽn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giờ cao điểm, đường ở trung tâm thành phố hầu như ngày nào cũng tắc.',answer:'高峰时间，市中心的道路几乎天天堵塞。',answerPy:'Gāofēng shíjiān, shì zhōngxīn de dàolù jīhū tiāntiān dǔsè.',
      note:'几乎 = hầu như (ôn HSK 4); 高峰 ôn HSK 6 bài 14.',pair:'几乎'},
     {promptLang:'vi',prompt:'Vì tai nạn giao thông gây tắc đường, tôi đến muộn nửa tiếng.',answer:'由于交通事故造成了堵塞，我迟到了半个小时。',answerPy:'Yóuyú jiāotōng shìgù zàochéngle dǔsè, wǒ chídàole bàn ge xiǎoshí.',
      note:'由于……，…… = do… nên… (ôn HSK 4); 造成 + kết quả xấu.',pair:'由于'}
   ]},

  {n:2,zh:'滞留',py:'zhìliú',pos:'Động từ',vn:'ngưng lại, dừng lại (bị kẹt lại)',hv:'trệ lưu',em:'⏳',lesson:1,
   explain:['Động từ: (người, vật) bị kẹt lại, dừng lại ở một nơi không đi tiếp được — thường do nguyên nhân khách quan (thời tiết, tắc đường, chuyến bay bị hủy).','Văn viết, hay gặp trong tin tức: 旅客滞留机场. Khác 停留 (dừng lại chủ động, tạm ở một thời gian).'],
   usage:'S + 滞留 + 在 + nơi chốn; nơi chốn + 滞留了 + 大量 / 大批 + 旅客; 滞留 + thời gian.',
   collo:['滞留在路上','滞留机场','大量旅客滞留','滞留时间'],
   ex_zh:'那些滞留在路上的人们，被堵车折磨得心烦意乱。',ex_py:'Nàxiē zhìliú zài lù shang de rénmen, bèi dǔchē zhémó de xīnfán-yìluàn.',ex_vn:'Những người bị kẹt lại trên đường ấy bị cảnh tắc xe hành hạ đến bực bội rối bời.',
   exList:[
     {zh:'那些滞留在路上的人们，被堵车折磨得心烦意乱。',py:'Nàxiē zhìliú zài lù shang de rénmen, bèi dǔchē zhémó de xīnfán-yìluàn.',vn:'Những người bị kẹt lại trên đường ấy bị cảnh tắc xe hành hạ đến bực bội rối bời.'},
     {zh:'因为恶劣的天气，机场滞留了大量旅客。',py:'Yīnwèi èliè de tiānqì, jīchǎng zhìliúle dàliàng lǚkè.',vn:'Vì thời tiết xấu, rất nhiều hành khách bị kẹt lại ở sân bay.'},
     {zh:'台风过后，仍有几百名游客滞留在岛上，等待救援。',py:'Táifēng guòhòu, réng yǒu jǐ bǎi míng yóukè zhìliú zài dǎo shang, děngdài jiùyuán.',vn:'Sau cơn bão, vẫn còn vài trăm du khách bị mắc kẹt trên đảo chờ cứu hộ.'}
   ],
   colloFull:[
     {zh:'滞留在路上',py:'zhìliú zài lù shang',vn:'bị kẹt lại trên đường'},
     {zh:'滞留机场',py:'zhìliú jīchǎng',vn:'bị kẹt ở sân bay'},
     {zh:'大量旅客滞留',py:'dàliàng lǚkè zhìliú',vn:'nhiều hành khách bị kẹt lại'},
     {zh:'滞留时间',py:'zhìliú shíjiān',vn:'thời gian lưu lại'},
     {zh:'滞留海外',py:'zhìliú hǎiwài',vn:'bị kẹt lại ở nước ngoài'}
   ],
   patterns:[
     {s:'S + 滞留 + 在 + nơi chốn',m:'… bị kẹt lại ở …'},
     {s:'nơi chốn + 滞留了 + 大量 + N',m:'Ở … có rất nhiều … bị kẹt lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì chuyến bay bị hủy, cô ấy bị kẹt lại ở Thượng Hải ba ngày.',answer:'由于航班被取消，她在上海滞留了三天。',answerPy:'Yóuyú hángbān bèi qǔxiāo, tā zài Shànghǎi zhìliúle sān tiān.',
      note:'Câu bị động 被 (ôn HSK 4); thời lượng 三天 đặt sau 滞留了.',pair:'被'},
     {promptLang:'vi',prompt:'Tuyết lớn khiến hàng nghìn hành khách bị kẹt lại ở nhà ga.',answer:'大雪致使上千名旅客滞留在火车站。',answerPy:'Dà xuě zhìshǐ shàng qiān míng lǚkè zhìliú zài huǒchēzhàn.',
      note:'致使 = khiến cho (kết quả xấu) — ôn HSK 6 bài 7.',pair:'致使'}
   ]},

  {n:3,zh:'折磨',py:'zhémó',pos:'Động từ',vn:'giày vò, hành hạ',hv:'chiết ma',em:'😣',lesson:1,
   explain:['Động từ: làm cho người khác (hoặc chính mình) chịu đau khổ về thể xác hay tinh thần kéo dài: 被病痛折磨, 折磨人.','Cũng làm danh từ: sự giày vò — 受尽折磨, 一种折磨. 折 đọc zhé, 磨 đọc mó.'],
   usage:'A + 折磨 + B; B + 被 + A + 折磨得 + trạng thái; 受(尽)折磨; 对……来说是一种折磨.',
   collo:['被堵车折磨','折磨人','受尽折磨','一种折磨'],
   ex_zh:'人们被堵车折磨得心烦意乱。',ex_py:'Rénmen bèi dǔchē zhémó de xīnfán-yìluàn.',ex_vn:'Người ta bị cảnh tắc đường giày vò đến bực bội rối bời.',
   exList:[
     {zh:'人们被堵车折磨得心烦意乱。',py:'Rénmen bèi dǔchē zhémó de xīnfán-yìluàn.',vn:'Người ta bị cảnh tắc đường giày vò đến bực bội rối bời.'},
     {zh:'这种病折磨了他好几年，最近才慢慢好起来。',py:'Zhè zhǒng bìng zhémóle tā hǎo jǐ nián, zuìjìn cái mànmàn hǎo qǐlái.',vn:'Căn bệnh này hành hạ anh ấy mấy năm liền, gần đây mới dần khá lên.'},
     {zh:'等待考试成绩的那几天，对我来说简直是一种折磨。',py:'Děngdài kǎoshì chéngjì de nà jǐ tiān, duì wǒ lái shuō jiǎnzhí shì yì zhǒng zhémó.',vn:'Mấy ngày chờ điểm thi ấy, với tôi quả thực là một sự giày vò.'}
   ],
   colloFull:[
     {zh:'被堵车折磨',py:'bèi dǔchē zhémó',vn:'bị cảnh tắc đường hành hạ'},
     {zh:'折磨人',py:'zhémó rén',vn:'hành hạ người'},
     {zh:'受尽折磨',py:'shòujìn zhémó',vn:'chịu đủ mọi giày vò'},
     {zh:'一种折磨',py:'yì zhǒng zhémó',vn:'một sự giày vò'},
     {zh:'病痛的折磨',py:'bìngtòng de zhémó',vn:'sự hành hạ của bệnh tật'}
   ],
   patterns:[
     {s:'A + 折磨 + B',m:'A hành hạ, giày vò B'},
     {s:'B + 被 + A + 折磨得 + trạng thái',m:'B bị A giày vò đến mức …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy bị chứng mất ngủ hành hạ đến mức không còn chút sức lực nào.',answer:'他被失眠折磨得一点儿力气也没有了。',answerPy:'Tā bèi shīmián zhémó de yìdiǎnr lìqi yě méiyǒu le.',
      note:'被……V得…… + 一点儿……也没有 (ôn HSK 4).',pair:'一点儿……也……'},
     {promptLang:'vi',prompt:'Đừng tự hành hạ mình nữa, chuyện đã qua thì cho qua đi.',answer:'别再折磨自己了，过去的事就让它过去吧。',answerPy:'Bié zài zhémó zìjǐ le, guòqù de shì jiù ràng tā guòqù ba.',
      note:'别再……了 = đừng … nữa; 让它过去吧 = cho nó qua đi.',pair:'别……了'}
   ]},

  {n:4,zh:'翼',py:'yì',pos:'Danh từ',vn:'cánh, cánh chim',hv:'dực',em:'🪽',lesson:1,
   explain:['Danh từ (văn viết): cánh (chim, côn trùng, máy bay): 双翼, 机翼, 羽翼. Khẩu ngữ dùng 翅膀.','Hay gặp trong từ ghép / thành ngữ: 如虎添翼 (như hổ thêm cánh), 不翼而飞 (không cánh mà bay = biến mất). Ôn: 小心翼翼 (bài 3).'],
   usage:'双翼 / 机翼 / 羽翼; 如虎添翼; 不翼而飞.',
   collo:['双翼','机翼','如虎添翼','不翼而飞'],
   ex_zh:'汽车要是也有双翼，能飞起来就好了。',ex_py:'Qìchē yàoshi yě yǒu shuāng yì, néng fēi qǐlái jiù hǎo le.',ex_vn:'Giá mà ô tô cũng có đôi cánh, bay lên được thì hay biết mấy.',
   exList:[
     {zh:'汽车要是也有双翼，能飞起来就好了。',py:'Qìchē yàoshi yě yǒu shuāng yì, néng fēi qǐlái jiù hǎo le.',vn:'Giá mà ô tô cũng có đôi cánh, bay lên được thì hay biết mấy.'},
     {zh:'有了这台新电脑，他写论文如虎添翼，效率高多了。',py:'Yǒule zhè tái xīn diànnǎo, tā xiě lùnwén rúhǔ-tiānyì, xiàolǜ gāo duō le.',vn:'Có chiếc máy tính mới này, anh ấy viết luận văn như hổ thêm cánh, năng suất cao hơn hẳn.'},
     {zh:'我放在桌上的手机竟然不翼而飞了。',py:'Wǒ fàng zài zhuō shang de shǒujī jìngrán bú yì ér fēi le.',vn:'Chiếc điện thoại tôi để trên bàn thế mà không cánh mà bay.'}
   ],
   colloFull:[
     {zh:'双翼',py:'shuāng yì',vn:'đôi cánh'},
     {zh:'机翼',py:'jīyì',vn:'cánh máy bay'},
     {zh:'如虎添翼',py:'rúhǔ-tiānyì',vn:'như hổ thêm cánh'},
     {zh:'不翼而飞',py:'bú yì ér fēi',vn:'không cánh mà bay, biến mất'},
     {zh:'羽翼',py:'yǔyì',vn:'lông cánh; (bóng) thế lực che chở'}
   ],
   patterns:[
     {s:'双翼 / 机翼',m:'Đôi cánh / cánh máy bay'},
     {s:'如虎添翼 / 不翼而飞',m:'Thành ngữ có chữ 翼'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu con người cũng có đôi cánh thì có thể bay đến bất cứ nơi nào.',answer:'人要是也有双翼，就能飞到任何地方去。',answerPy:'Rén yàoshi yě yǒu shuāng yì, jiù néng fēidào rènhé dìfang qù.',
      note:'要是……就…… (ôn HSK 4); 任何 = bất kỳ.',pair:'要是……就……'},
     {promptLang:'vi',prompt:'Có sự giúp đỡ của thầy, việc học của em như hổ thêm cánh.',answer:'有了老师的帮助，我的学习如虎添翼。',answerPy:'Yǒule lǎoshī de bāngzhù, wǒ de xuéxí rúhǔ-tiānyì.',
      note:'有了……，…… = có … rồi thì …; 如虎添翼 làm vị ngữ.',pair:'有了'}
   ]},

  {n:5,zh:'担保',py:'dānbǎo',pos:'Động từ',vn:'bảo đảm, cam đoan',hv:'đảm bảo',em:'🤝',lesson:1,
   explain:['Động từ: nhận trách nhiệm, cam đoan chắc chắn không có vấn đề / nhất định làm được: 我敢担保.','Theo sách: sau 担保 KHÔNG đi với danh từ (×担保产品质量), chỉ đi với động từ hoặc mệnh đề; 担保 không làm danh từ. Nghĩa pháp lý: bảo lãnh (担保人 = người bảo lãnh).'],
   usage:'(敢 / 能) 担保 + mệnh đề; 别的不敢担保，……; 替 / 为 + người + 担保 (bảo lãnh); 担保人.',
   collo:['敢担保','不敢担保','替他担保','担保人'],
   ex_zh:'别的不敢担保，以下四点大体为我们勾画出了2050年汽车的轮廓。',ex_py:'Biéde bù gǎn dānbǎo, yǐxià sì diǎn dàtǐ wèi wǒmen gōuhuà chūle èr líng wǔ líng nián qìchē de lúnkuò.',ex_vn:'Những điều khác thì không dám chắc, nhưng bốn điểm dưới đây về cơ bản đã phác họa cho chúng ta hình dáng ô tô năm 2050.',
   exList:[
     {zh:'别的不敢担保，以下四点大体为我们勾画出了2050年汽车的轮廓。',py:'Biéde bù gǎn dānbǎo, yǐxià sì diǎn dàtǐ wèi wǒmen gōuhuà chūle èr líng wǔ líng nián qìchē de lúnkuò.',vn:'Những điều khác thì không dám chắc, nhưng bốn điểm dưới đây về cơ bản đã phác họa cho chúng ta hình dáng ô tô năm 2050.'},
     {zh:'出不了事，我敢担保。',py:'Chū bu liǎo shì, wǒ gǎn dānbǎo.',vn:'Không xảy ra chuyện gì đâu, tôi dám cam đoan.'},
     {zh:'我敢担保，这批产品的质量没有问题。',py:'Wǒ gǎn dānbǎo, zhè pī chǎnpǐn de zhìliàng méiyǒu wèntí.',vn:'Tôi dám đảm bảo chất lượng lô hàng này không có vấn đề gì.'}
   ],
   colloFull:[
     {zh:'敢担保',py:'gǎn dānbǎo',vn:'dám cam đoan'},
     {zh:'不敢担保',py:'bù gǎn dānbǎo',vn:'không dám chắc'},
     {zh:'替他担保',py:'tì tā dānbǎo',vn:'bảo lãnh cho anh ấy'},
     {zh:'担保人',py:'dānbǎorén',vn:'người bảo lãnh'},
     {zh:'担保贷款',py:'dānbǎo dàikuǎn',vn:'bảo lãnh khoản vay'}
   ],
   patterns:[
     {s:'(敢) 担保 + mệnh đề',m:'Cam đoan rằng …'},
     {s:'别的不敢担保，(但)……',m:'Điều khác không dám chắc, nhưng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần cậu làm theo cách này, tớ dám cam đoan sẽ không có vấn đề gì.',answer:'只要你按这个方法做，我敢担保不会出问题。',answerPy:'Zhǐyào nǐ àn zhège fāngfǎ zuò, wǒ gǎn dānbǎo bú huì chū wèntí.',
      note:'只要…… = chỉ cần … (ôn HSK 4); 担保 + mệnh đề (không + danh từ).',pair:'只要'},
     {promptLang:'vi',prompt:'Những cái khác tôi không dám chắc, nhưng món ăn nhà hàng này chắc chắn ngon.',answer:'别的我不敢担保，不过这家饭馆的菜肯定好吃。',answerPy:'Biéde wǒ bù gǎn dānbǎo, búguò zhè jiā fànguǎn de cài kěndìng hǎochī.',
      note:'不过 = nhưng (ôn HSK 4); tân ngữ 别的 đưa lên đầu làm chủ đề.',pair:'不过'}
   ]},

  {n:6,zh:'大体',py:'dàtǐ',pos:'Phó từ',vn:'đại thể, đại khái, trên cơ bản',hv:'đại thể',em:'🗺️',lesson:1,
   explain:['Phó từ: xét trên những mặt chủ yếu, về cơ bản (không đi vào chi tiết): 大体相同, 大体了解.','Còn làm danh từ: 识大体 = hiểu đại cục, biết điều. Gần nghĩa 大致, 基本上.'],
   usage:'大体 + V / Adj (相同, 一致, 了解, 完成); 大体上 + mệnh đề; 识大体.',
   collo:['大体相同','大体了解','大体上','识大体'],
   ex_zh:'以下四点大体为我们勾画出了2050年汽车的轮廓。',ex_py:'Yǐxià sì diǎn dàtǐ wèi wǒmen gōuhuà chūle èr líng wǔ líng nián qìchē de lúnkuò.',ex_vn:'Bốn điểm dưới đây về cơ bản đã phác họa cho chúng ta hình dáng ô tô năm 2050.',
   exList:[
     {zh:'以下四点大体为我们勾画出了2050年汽车的轮廓。',py:'Yǐxià sì diǎn dàtǐ wèi wǒmen gōuhuà chūle èr líng wǔ líng nián qìchē de lúnkuò.',vn:'Bốn điểm dưới đây về cơ bản đã phác họa cho chúng ta hình dáng ô tô năm 2050.'},
     {zh:'对于这个高精尖的专业，我只大体了解了一下。',py:'Duìyú zhège gāo-jīng-jiān de zhuānyè, wǒ zhǐ dàtǐ liǎojiěle yíxià.',vn:'Đối với ngành học cao cấp, tinh vi này, tôi chỉ tìm hiểu sơ qua đại khái.'},
     {zh:'两个人的看法大体相同，只是在细节上有些差别。',py:'Liǎng ge rén de kànfǎ dàtǐ xiāngtóng, zhǐshì zài xìjié shang yǒuxiē chābié.',vn:'Quan điểm của hai người về cơ bản giống nhau, chỉ khác đôi chút ở chi tiết.'}
   ],
   colloFull:[
     {zh:'大体相同',py:'dàtǐ xiāngtóng',vn:'về cơ bản giống nhau'},
     {zh:'大体了解',py:'dàtǐ liǎojiě',vn:'hiểu đại khái'},
     {zh:'大体上',py:'dàtǐ shang',vn:'nhìn chung, trên đại thể'},
     {zh:'识大体',py:'shí dàtǐ',vn:'hiểu đại cục, biết điều'},
     {zh:'大体完成',py:'dàtǐ wánchéng',vn:'cơ bản hoàn thành'}
   ],
   patterns:[
     {s:'大体 + V / Adj',m:'Về cơ bản …, đại khái …'},
     {s:'大体上 + mệnh đề',m:'Nhìn chung, trên đại thể …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công việc tuần này về cơ bản đã xong, phần còn lại thứ Hai tuần sau làm tiếp.',answer:'这周的工作大体完成了，剩下的下周一再做。',answerPy:'Zhè zhōu de gōngzuò dàtǐ wánchéng le, shèngxià de xià zhōuyī zài zuò.',
      note:'剩下的 = phần còn lại; 再 = rồi hãy (việc tương lai, ôn HSK 4).',pair:'再'},
     {promptLang:'vi',prompt:'Nhìn chung kế hoạch này khả thi, chỉ là chi phí hơi cao một chút.',answer:'这个计划大体上是可行的，只是成本稍微高了一点儿。',answerPy:'Zhège jìhuà dàtǐ shang shì kěxíng de, zhǐshì chéngběn shāowēi gāole yìdiǎnr.',
      note:'只是 = chỉ có điều; 稍微 + Adj + 一点儿 (ôn HSK 4); 成本 ôn bài 7.',pair:'稍微'}
   ]},

  {n:7,zh:'勾画',py:'gōuhuà',pos:'Động từ',vn:'phác họa, vạch ra, phác thảo',hv:'câu họa',em:'✏️',lesson:1,
   explain:['Động từ: vẽ ra những nét chính / dùng lời văn miêu tả khái quát: 勾画轮廓, 勾画蓝图.','Từ có dấu * trong sách: ngoài đề cương HSK, chỉ cần hiểu. Gần nghĩa 描绘 (ôn HSK 6 bài 12) nhưng 勾画 thiên về nét phác, khái quát.'],
   usage:'勾画(出) + 轮廓 / 蓝图 / 未来; 为 + người + 勾画出 + …….',
   collo:['勾画出轮廓','勾画蓝图','勾画未来','简单勾画'],
   ex_zh:'这位设计师用几笔就勾画出了一座大楼的轮廓。',ex_py:'Zhè wèi shèjìshī yòng jǐ bǐ jiù gōuhuà chūle yí zuò dàlóu de lúnkuò.',ex_vn:'Nhà thiết kế này chỉ dùng vài nét đã phác họa ra đường nét của cả một tòa nhà.',
   exList:[
     {zh:'这位设计师用几笔就勾画出了一座大楼的轮廓。',py:'Zhè wèi shèjìshī yòng jǐ bǐ jiù gōuhuà chūle yí zuò dàlóu de lúnkuò.',vn:'Nhà thiết kế này chỉ dùng vài nét đã phác họa ra đường nét của cả một tòa nhà.'},
     {zh:'以下四点大体为我们勾画出了2050年汽车的轮廓。',py:'Yǐxià sì diǎn dàtǐ wèi wǒmen gōuhuà chūle èr líng wǔ líng nián qìchē de lúnkuò.',vn:'Bốn điểm dưới đây về cơ bản đã phác họa cho chúng ta hình dáng ô tô năm 2050.'},
     {zh:'在毕业典礼上，校长为我们勾画了学校未来十年发展的蓝图。',py:'Zài bìyè diǎnlǐ shang, xiàozhǎng wèi wǒmen gōuhuàle xuéxiào wèilái shí nián fāzhǎn de lántú.',vn:'Tại lễ tốt nghiệp, thầy hiệu trưởng đã vạch ra cho chúng tôi bức tranh phát triển của trường trong mười năm tới.'}
   ],
   colloFull:[
     {zh:'勾画出轮廓',py:'gōuhuà chū lúnkuò',vn:'phác họa ra đường nét'},
     {zh:'勾画蓝图',py:'gōuhuà lántú',vn:'vạch ra bức tranh tương lai'},
     {zh:'勾画未来',py:'gōuhuà wèilái',vn:'phác họa tương lai'},
     {zh:'简单勾画',py:'jiǎndān gōuhuà',vn:'phác họa sơ lược'},
     {zh:'勾画出形象',py:'gōuhuà chū xíngxiàng',vn:'phác họa ra hình tượng'}
   ],
   patterns:[
     {s:'勾画(出) + 轮廓 / 蓝图',m:'Phác họa ra đường nét / bức tranh'},
     {s:'为 + người + 勾画(出)了 + ……',m:'Phác họa cho ai …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ bằng vài câu, tác giả đã phác họa ra hình ảnh một ông lão tốt bụng.',answer:'作者只用几句话，就勾画出了一个善良老人的形象。',answerPy:'Zuòzhě zhǐ yòng jǐ jù huà, jiù gōuhuà chūle yí ge shànliáng lǎorén de xíngxiàng.',
      note:'只……就…… = chỉ … là đã …; 形象 = hình tượng.',pair:'只……就……'},
     {promptLang:'vi',prompt:'Trước khi viết bài văn, em nên phác thảo đại khái dàn ý trước đã.',answer:'写作文之前，你最好先大体勾画一下提纲。',answerPy:'Xiě zuòwén zhīqián, nǐ zuìhǎo xiān dàtǐ gōuhuà yíxià tígāng.',
      note:'最好 = tốt nhất nên (ôn HSK 4); 大体 + V (từ cùng bài).',pair:'最好'}
   ]},

  {n:8,zh:'轮廓',py:'lúnkuò',pos:'Danh từ',vn:'hình dáng, đường nét, nét khái quát',hv:'luân khuếch',em:'🖼️',lesson:1,
   explain:['Danh từ: đường viền bao quanh bên ngoài của sự vật: 人脸的轮廓, 山的轮廓.','Nghĩa bóng: tình hình khái quát, nét phác chung của một sự việc: 事情的轮廓, 2050年汽车的轮廓.'],
   usage:'N + 的 + 轮廓; 勾画 / 看出 / 有了 + 轮廓; 轮廓 + 清晰 / 模糊.',
   collo:['汽车的轮廓','勾画轮廓','轮廓清晰','大致的轮廓'],
   ex_zh:'以下四点为我们勾画出了2050年汽车的轮廓。',ex_py:'Yǐxià sì diǎn wèi wǒmen gōuhuà chūle èr líng wǔ líng nián qìchē de lúnkuò.',ex_vn:'Bốn điểm dưới đây phác họa cho chúng ta hình dáng ô tô năm 2050.',
   exList:[
     {zh:'以下四点为我们勾画出了2050年汽车的轮廓。',py:'Yǐxià sì diǎn wèi wǒmen gōuhuà chūle èr líng wǔ líng nián qìchē de lúnkuò.',vn:'Bốn điểm dưới đây phác họa cho chúng ta hình dáng ô tô năm 2050.'},
     {zh:'雾渐渐散了，远处大山的轮廓越来越清晰。',py:'Wù jiànjiàn sàn le, yuǎnchù dàshān de lúnkuò yuè lái yuè qīngxī.',vn:'Sương dần tan, đường nét của dãy núi đằng xa ngày càng rõ.'},
     {zh:'经过一周的调查，事情的轮廓已经大体清楚了。',py:'Jīngguò yì zhōu de diàochá, shìqing de lúnkuò yǐjīng dàtǐ qīngchu le.',vn:'Sau một tuần điều tra, hình thù sự việc về cơ bản đã rõ.'}
   ],
   colloFull:[
     {zh:'汽车的轮廓',py:'qìchē de lúnkuò',vn:'hình dáng chiếc ô tô'},
     {zh:'勾画轮廓',py:'gōuhuà lúnkuò',vn:'phác họa đường nét'},
     {zh:'轮廓清晰',py:'lúnkuò qīngxī',vn:'đường nét rõ ràng'},
     {zh:'大致的轮廓',py:'dàzhì de lúnkuò',vn:'nét khái quát'},
     {zh:'脸部轮廓',py:'liǎnbù lúnkuò',vn:'đường nét khuôn mặt'}
   ],
   patterns:[
     {s:'N + 的 + 轮廓',m:'Đường nét / hình dáng của …'},
     {s:'轮廓 + 清晰 / 模糊',m:'Đường nét rõ / mờ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong bóng tối, tôi chỉ nhìn thấy được dáng người của anh ấy.',answer:'在黑暗中，我只能看到他的轮廓。',answerPy:'Zài hēi\'àn zhōng, wǒ zhǐ néng kàndào tā de lúnkuò.',
      note:'在……中 = trong …; 只能 = chỉ có thể.',pair:'在……中'},
     {promptLang:'vi',prompt:'Tuy chưa có chi tiết, nhưng nét khái quát của kế hoạch đã có rồi.',answer:'虽然还没有细节，但是计划的轮廓已经有了。',answerPy:'Suīrán hái méiyǒu xìjié, dànshì jìhuà de lúnkuò yǐjīng yǒu le.',
      note:'虽然……但是…… (ôn HSK 4).',pair:'虽然……但是……'}
   ]},

  {n:9,zh:'指责',py:'zhǐzé',pos:'Động từ',vn:'chỉ trích, trách móc',hv:'chỉ trách',em:'👉',lesson:1,
   explain:['Động từ: chỉ ra lỗi sai của người / việc và trách móc, phê phán: 受到指责, 互相指责.','Sắc thái nặng hơn 批评 (phê bình) — thường mang ý không bằng lòng, đổ lỗi. Cũng dùng như danh từ: 这样的指责.'],
   usage:'A + 指责 + B (+ mệnh đề); 受到 / 遭到 + (……的) 指责; 互相指责; 这样的指责.',
   collo:['受到指责','互相指责','这样的指责','公开指责'],
   ex_zh:'我们常常听到这样的指责：空气质量在下降，石油资源日益紧缺。',ex_py:'Wǒmen chángcháng tīngdào zhèyàng de zhǐzé: kōngqì zhìliàng zài xiàjiàng, shíyóu zīyuán rìyì jǐnquē.',ex_vn:'Chúng ta thường nghe những lời chỉ trích thế này: chất lượng không khí đang đi xuống, nguồn dầu mỏ ngày càng khan hiếm.',
   exList:[
     {zh:'我们常常听到这样的指责：空气质量在下降，石油资源日益紧缺。',py:'Wǒmen chángcháng tīngdào zhèyàng de zhǐzé: kōngqì zhìliàng zài xiàjiàng, shíyóu zīyuán rìyì jǐnquē.',vn:'Chúng ta thường nghe những lời chỉ trích thế này: chất lượng không khí đang đi xuống, nguồn dầu mỏ ngày càng khan hiếm.'},
     {zh:'出了问题，两个部门互相指责，谁也不愿意承担责任。',py:'Chūle wèntí, liǎng ge bùmén hùxiāng zhǐzé, shéi yě bú yuànyì chéngdān zérèn.',vn:'Có chuyện xảy ra, hai phòng ban đổ lỗi cho nhau, không ai chịu nhận trách nhiệm.'},
     {zh:'他因为经常迟到，受到了经理的指责。',py:'Tā yīnwèi jīngcháng chídào, shòudàole jīnglǐ de zhǐzé.',vn:'Vì hay đi muộn, anh ấy bị giám đốc trách móc.'}
   ],
   colloFull:[
     {zh:'受到指责',py:'shòudào zhǐzé',vn:'bị chỉ trích'},
     {zh:'互相指责',py:'hùxiāng zhǐzé',vn:'chỉ trích lẫn nhau, đổ lỗi cho nhau'},
     {zh:'这样的指责',py:'zhèyàng de zhǐzé',vn:'lời chỉ trích như thế'},
     {zh:'公开指责',py:'gōngkāi zhǐzé',vn:'công khai chỉ trích'},
     {zh:'严厉指责',py:'yánlì zhǐzé',vn:'chỉ trích gay gắt'}
   ],
   patterns:[
     {s:'A + 指责 + B + mệnh đề',m:'A trách B (vì) …'},
     {s:'受到 / 遭到 + ……的指责',m:'Bị … chỉ trích'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gặp chuyện thì đừng vội trách người khác, trước hết hãy nghĩ xem lỗi của mình ở đâu.',answer:'遇到问题别急着指责别人，先想想自己的原因。',answerPy:'Yùdào wèntí bié jízhe zhǐzé biérén, xiān xiǎngxiang zìjǐ de yuányīn.',
      note:'别急着 + V = đừng vội …; 先 + V = trước hết ….',pair:'先'},
     {promptLang:'vi',prompt:'Cách làm của nhà máy này đã bị người dân xung quanh chỉ trích gay gắt.',answer:'这家工厂的做法遭到了周边居民的严厉指责。',answerPy:'Zhè jiā gōngchǎng de zuòfǎ zāodàole zhōubiān jūmín de yánlì zhǐzé.',
      note:'遭到 + điều không may (ôn HSK 5); 周边 ôn HSK 6 bài 17, 严厉 bài 1.',pair:'遭到'}
   ]},

  {n:10,zh:'融化',py:'rónghuà',pos:'Động từ',vn:'tan ra, chảy ra',hv:'dung hóa',em:'🧊',lesson:1,
   explain:['Động từ: (băng, tuyết) do nóng mà tan thành nước: 冰雪融化, 冰川在融化.','Phân biệt: 溶化 = hòa tan trong nước (đường, muối), 熔化 = nung chảy (kim loại). Nghĩa bóng: 心都融化了 (trái tim như tan chảy).'],
   usage:'冰 / 雪 / 冰川 + 融化; 开始 / 正在 + 融化; 融化成 + 水.',
   collo:['冰川在融化','冰雪融化','慢慢融化','融化成水'],
   ex_zh:'北极冰川在融化，空气质量在下降。',ex_py:'Běijí bīngchuān zài rónghuà, kōngqì zhìliàng zài xiàjiàng.',ex_vn:'Sông băng Bắc Cực đang tan, chất lượng không khí đang đi xuống.',
   exList:[
     {zh:'北极冰川在融化，空气质量在下降。',py:'Běijí bīngchuān zài rónghuà, kōngqì zhìliàng zài xiàjiàng.',vn:'Sông băng Bắc Cực đang tan, chất lượng không khí đang đi xuống.'},
     {zh:'春天来了，河面上的冰慢慢融化了。',py:'Chūntiān lái le, hémiàn shang de bīng mànmàn rónghuà le.',vn:'Mùa xuân đến, băng trên mặt sông dần dần tan ra.'},
     {zh:'冰淇淋放在太阳下，没几分钟就融化了。',py:'Bīngqílín fàng zài tàiyáng xià, méi jǐ fēnzhōng jiù rónghuà le.',vn:'Kem để dưới nắng, chưa được mấy phút đã chảy hết.'}
   ],
   colloFull:[
     {zh:'冰川在融化',py:'bīngchuān zài rónghuà',vn:'sông băng đang tan'},
     {zh:'冰雪融化',py:'bīngxuě rónghuà',vn:'băng tuyết tan'},
     {zh:'慢慢融化',py:'mànmàn rónghuà',vn:'tan dần'},
     {zh:'融化成水',py:'rónghuà chéng shuǐ',vn:'tan thành nước'},
     {zh:'开始融化',py:'kāishǐ rónghuà',vn:'bắt đầu tan'}
   ],
   patterns:[
     {s:'冰 / 雪 / 冰川 + 融化',m:'Băng / tuyết / sông băng tan'},
     {s:'融化成 + N',m:'Tan thành …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Do khí hậu nóng lên, băng ở Bắc Cực tan ngày càng nhanh.',answer:'由于气候变暖，北极的冰融化得越来越快。',answerPy:'Yóuyú qìhòu biàn nuǎn, Běijí de bīng rónghuà de yuè lái yuè kuài.',
      note:'Bổ ngữ trạng thái V + 得 + 越来越 + Adj (ôn HSK 3–4); 北极 ôn HSK 6 bài 14.',pair:'越来越'},
     {promptLang:'vi',prompt:'Nụ cười của em bé khiến trái tim mọi người như tan chảy.',answer:'孩子的笑容让大家的心都融化了。',answerPy:'Háizi de xiàoróng ràng dàjiā de xīn dōu rónghuà le.',
      note:'让 + người + V (câu kiêm ngữ, ôn HSK 4) — 融化 dùng nghĩa bóng.',pair:'让'}
   ]},

  {n:11,zh:'石油',py:'shíyóu',pos:'Danh từ',vn:'dầu mỏ, dầu thô',hv:'thạch du',em:'🛢️',lesson:1,
   explain:['Danh từ: dầu mỏ khai thác từ lòng đất, từ đó lọc ra 汽油 (xăng), 柴油 (dầu diesel)…','Là tài nguyên không tái tạo: 石油资源, 石油价格, 开采石油, 石油工业.'],
   usage:'石油 + 资源 / 价格 / 工业; 开采 / 进口 / 出口 + 石油; 石油紧缺.',
   collo:['石油资源','石油价格','开采石油','石油紧缺'],
   ex_zh:'石油资源日益紧缺。',ex_py:'Shíyóu zīyuán rìyì jǐnquē.',ex_vn:'Nguồn tài nguyên dầu mỏ ngày càng khan hiếm.',
   exList:[
     {zh:'石油资源日益紧缺。',py:'Shíyóu zīyuán rìyì jǐnquē.',vn:'Nguồn tài nguyên dầu mỏ ngày càng khan hiếm.'},
     {zh:'国际石油价格上涨，国内的汽油也跟着涨价了。',py:'Guójì shíyóu jiàgé shàngzhǎng, guónèi de qìyóu yě gēnzhe zhǎngjià le.',vn:'Giá dầu mỏ quốc tế tăng, xăng trong nước cũng tăng giá theo.'},
     {zh:'越南南部海域蕴藏着丰富的石油资源。',py:'Yuènán nánbù hǎiyù yùncángzhe fēngfù de shíyóu zīyuán.',vn:'Vùng biển phía nam Việt Nam có trữ lượng dầu mỏ phong phú.'}
   ],
   colloFull:[
     {zh:'石油资源',py:'shíyóu zīyuán',vn:'tài nguyên dầu mỏ'},
     {zh:'石油价格',py:'shíyóu jiàgé',vn:'giá dầu mỏ'},
     {zh:'开采石油',py:'kāicǎi shíyóu',vn:'khai thác dầu mỏ'},
     {zh:'石油紧缺',py:'shíyóu jǐnquē',vn:'dầu mỏ khan hiếm'},
     {zh:'石油工业',py:'shíyóu gōngyè',vn:'công nghiệp dầu khí'}
   ],
   patterns:[
     {s:'石油 + 资源 / 价格',m:'Tài nguyên / giá dầu mỏ'},
     {s:'开采 / 进口 + 石油',m:'Khai thác / nhập khẩu dầu mỏ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dầu mỏ là tài nguyên không thể tái tạo, dùng hết là không còn nữa.',answer:'石油是不可再生的资源，用完了就没有了。',answerPy:'Shíyóu shì bù kě zàishēng de zīyuán, yòngwánle jiù méiyǒu le.',
      note:'V + 了 + 就…… = hễ … xong là …; 不可再生 = không tái tạo được.',pair:'……了就……'},
     {promptLang:'vi',prompt:'Giá dầu mỏ hễ tăng thì chi phí đi lại của mọi người cũng tăng theo.',answer:'石油价格一上涨，大家的出行成本也就跟着提高了。',answerPy:'Shíyóu jiàgé yí shàngzhǎng, dàjiā de chūxíng chéngběn yě jiù gēnzhe tígāo le.',
      note:'一……就…… (ôn HSK 4); 成本 ôn HSK 6 bài 7.',pair:'一……就……'}
   ]},

  {n:12,zh:'事故',py:'shìgù',pos:'Danh từ',vn:'tai nạn, sự cố',hv:'sự cố',em:'🚨',lesson:1,
   explain:['Danh từ: tai nạn, sự cố bất ngờ gây thiệt hại về người hoặc của: 交通事故, 安全事故.','Đừng nhầm với 故事 gùshi (câu chuyện) — đảo thứ tự chữ! 事故 hay đi với 发生 / 出 / 造成 / 避免; lượng từ 起.'],
   usage:'发生 / 出 + (一起) 事故; 交通 / 安全 + 事故; 事故 + 原因 / 现场; 死于 + 事故.',
   collo:['交通事故','发生事故','避免事故','事故现场'],
   ex_zh:'每年全球一百多万人死于交通事故。',ex_py:'Měi nián quánqiú yìbǎi duō wàn rén sǐ yú jiāotōng shìgù.',ex_vn:'Mỗi năm trên toàn cầu có hơn một triệu người chết vì tai nạn giao thông.',
   exList:[
     {zh:'每年全球一百多万人死于交通事故。',py:'Měi nián quánqiú yìbǎi duō wàn rén sǐ yú jiāotōng shìgù.',vn:'Mỗi năm trên toàn cầu có hơn một triệu người chết vì tai nạn giao thông.'},
     {zh:'昨天高速路上发生了一起严重的事故，好在没有人受伤。',py:'Zuótiān gāosùlù shang fāshēngle yì qǐ yánzhòng de shìgù, hǎozài méiyǒu rén shòushāng.',vn:'Hôm qua trên đường cao tốc xảy ra một vụ tai nạn nghiêm trọng, may mà không ai bị thương.'},
     {zh:'警察正在调查这起事故的原因。',py:'Jǐngchá zhèngzài diàochá zhè qǐ shìgù de yuányīn.',vn:'Cảnh sát đang điều tra nguyên nhân vụ tai nạn này.'}
   ],
   colloFull:[
     {zh:'交通事故',py:'jiāotōng shìgù',vn:'tai nạn giao thông'},
     {zh:'发生事故',py:'fāshēng shìgù',vn:'xảy ra tai nạn'},
     {zh:'避免事故',py:'bìmiǎn shìgù',vn:'tránh tai nạn'},
     {zh:'事故现场',py:'shìgù xiànchǎng',vn:'hiện trường vụ tai nạn'},
     {zh:'一起事故',py:'yì qǐ shìgù',vn:'một vụ tai nạn'}
   ],
   patterns:[
     {s:'发生 / 出 + (一起) 事故',m:'Xảy ra (một vụ) tai nạn'},
     {s:'死于 + 事故',m:'Chết vì tai nạn (văn viết, 于 = vì — ôn bài 7)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lái xe khi mệt mỏi rất dễ gây ra tai nạn giao thông.',answer:'疲劳驾驶很容易造成交通事故。',answerPy:'Píláo jiàshǐ hěn róngyì zàochéng jiāotōng shìgù.',
      note:'造成 + hậu quả xấu (ôn HSK 5); 疲劳驾驶 = lái xe khi mệt.',pair:'造成'},
     {promptLang:'vi',prompt:'Để tránh tai nạn, tài xế tuyệt đối không được uống rượu.',answer:'为了避免事故，司机千万不能喝酒。',answerPy:'Wèile bìmiǎn shìgù, sījī qiānwàn bù néng hē jiǔ.',
      note:'为了…… (mục đích); 千万 + 不能 = tuyệt đối không được (ôn HSK 4).',pair:'千万'}
   ]},

  {n:13,zh:'割',py:'gē',pos:'Động từ',vn:'cắt, bỏ',hv:'cát',em:'✂️',lesson:1,
   explain:['Động từ: dùng dao, liềm cắt đứt: 割草, 割麦子, 手被割破了.','Nghĩa bóng: từ bỏ, tách rời — thành ngữ 忍痛割爱 (đành đau lòng từ bỏ thứ mình yêu thích) trong bài; 分割 (chia cắt), 不可分割 (không thể tách rời).'],
   usage:'割 + 草 / 麦子 / 肉; 手被……割破了; 忍痛割爱; 不可分割.',
   collo:['割草','忍痛割爱','割破','不可分割'],
   ex_zh:'鉴于以上劣迹，人类会不会忍痛割爱？',ex_py:'Jiànyú yǐshàng lièjì, rénlèi huì bu huì rěntòng-gē\'ài?',ex_vn:'Xét những "tội trạng" trên, liệu loài người có đành đau lòng từ bỏ ô tô hay không?',
   exList:[
     {zh:'鉴于以上劣迹，人类会不会忍痛割爱？',py:'Jiànyú yǐshàng lièjì, rénlèi huì bu huì rěntòng-gē\'ài?',vn:'Xét những "tội trạng" trên, liệu loài người có đành đau lòng từ bỏ ô tô hay không?'},
     {zh:'周末爸爸在院子里割草，我在旁边帮忙。',py:'Zhōumò bàba zài yuànzi li gē cǎo, wǒ zài pángbiān bāngmáng.',vn:'Cuối tuần bố cắt cỏ trong sân, tôi đứng bên cạnh phụ.'},
     {zh:'切菜的时候不小心，手被刀割破了。',py:'Qiē cài de shíhou bù xiǎoxīn, shǒu bèi dāo gēpò le.',vn:'Lúc thái rau không cẩn thận, tay bị dao cứa rách.'}
   ],
   colloFull:[
     {zh:'割草',py:'gē cǎo',vn:'cắt cỏ'},
     {zh:'忍痛割爱',py:'rěntòng-gē\'ài',vn:'đành đau lòng từ bỏ thứ mình yêu quý'},
     {zh:'割破',py:'gēpò',vn:'cứa rách'},
     {zh:'不可分割',py:'bù kě fēngē',vn:'không thể tách rời'},
     {zh:'割麦子',py:'gē màizi',vn:'gặt lúa mì'}
   ],
   patterns:[
     {s:'割 + N (草 / 麦子)',m:'Cắt, gặt …'},
     {s:'忍痛割爱',m:'Đành lòng từ bỏ thứ mình yêu quý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phòng quá nhỏ, tôi đành đau lòng bỏ bớt mấy cuốn sách cũ.',answer:'房间太小了，我只好忍痛割爱，扔掉了几本旧书。',answerPy:'Fángjiān tài xiǎo le, wǒ zhǐhǎo rěntòng-gē\'ài, rēngdiàole jǐ běn jiù shū.',
      note:'只好 = đành phải (ôn HSK 4); 忍痛割爱 làm vị ngữ.',pair:'只好'},
     {promptLang:'vi',prompt:'Văn hóa và ngôn ngữ là không thể tách rời.',answer:'文化和语言是不可分割的。',answerPy:'Wénhuà hé yǔyán shì bù kě fēngē de.',
      note:'是……的 nhấn mạnh tính chất (ôn HSK 4).',pair:'是……的'}
   ]},

  {n:14,zh:'优胜劣汰',py:'yōushèng-liètài',pos:'Thành ngữ',vn:'mạnh thắng yếu thua, cá thể thích nghi sẽ tồn tại',hv:'ưu thắng liệt thải',em:'🏆',lesson:1,
   explain:['Thành ngữ: 优 = tốt, mạnh; 胜 = thắng, tồn tại; 劣 = kém; 汰 = bị loại bỏ → cái tốt thì tồn tại, cái kém thì bị đào thải (vốn là quy luật chọn lọc tự nhiên).','Dùng cho cạnh tranh thị trường, học tập, sinh vật…: 优胜劣汰的原则 / 规律 / 竞争. Ôn 淘汰 (bài 12).'],
   usage:'优胜劣汰 + 的 + 原则 / 规律 / 机制; 根据 / 遵循 + 优胜劣汰的原则; 实行优胜劣汰.',
   collo:['优胜劣汰的原则','优胜劣汰的规律','实行优胜劣汰','市场的优胜劣汰'],
   ex_zh:'根据优胜劣汰的原则，汽车会不会被取代？',ex_py:'Gēnjù yōushèng-liètài de yuánzé, qìchē huì bu huì bèi qǔdài?',ex_vn:'Theo nguyên tắc mạnh thắng yếu thua, liệu ô tô có bị thay thế không?',
   exList:[
     {zh:'根据优胜劣汰的原则，汽车会不会被取代？',py:'Gēnjù yōushèng-liètài de yuánzé, qìchē huì bu huì bèi qǔdài?',vn:'Theo nguyên tắc mạnh thắng yếu thua, liệu ô tô có bị thay thế không?'},
     {zh:'市场竞争优胜劣汰，质量差的产品迟早会被淘汰。',py:'Shìchǎng jìngzhēng yōushèng-liètài, zhìliàng chà de chǎnpǐn chízǎo huì bèi táotài.',vn:'Cạnh tranh thị trường là mạnh được yếu thua, sản phẩm kém chất lượng sớm muộn cũng bị đào thải.'},
     {zh:'这家公司实行优胜劣汰的考核制度，员工压力很大。',py:'Zhè jiā gōngsī shíxíng yōushèng-liètài de kǎohé zhìdù, yuángōng yālì hěn dà.',vn:'Công ty này áp dụng chế độ đánh giá sàng lọc "giỏi ở lại, kém ra đi", áp lực của nhân viên rất lớn.'}
   ],
   colloFull:[
     {zh:'优胜劣汰的原则',py:'yōushèng-liètài de yuánzé',vn:'nguyên tắc mạnh thắng yếu thua'},
     {zh:'优胜劣汰的规律',py:'yōushèng-liètài de guīlǜ',vn:'quy luật đào thải'},
     {zh:'实行优胜劣汰',py:'shíxíng yōushèng-liètài',vn:'áp dụng cơ chế sàng lọc'},
     {zh:'市场的优胜劣汰',py:'shìchǎng de yōushèng-liètài',vn:'sự sàng lọc của thị trường'},
     {zh:'自然界的优胜劣汰',py:'zìránjiè de yōushèng-liètài',vn:'chọn lọc tự nhiên'}
   ],
   patterns:[
     {s:'根据 / 遵循 + 优胜劣汰的原则',m:'Theo nguyên tắc mạnh thắng yếu thua'},
     {s:'N (竞争 / 市场) + 优胜劣汰',m:'… là cuộc sàng lọc: mạnh ở lại, yếu bị loại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong giới tự nhiên, quy luật mạnh thắng yếu thua có ở khắp nơi.',answer:'在自然界中，优胜劣汰的规律无处不在。',answerPy:'Zài zìránjiè zhōng, yōushèng-liètài de guīlǜ wúchù-búzài.',
      note:'在……中 = trong …; 无处不在 = có ở khắp nơi.',pair:'在……中'},
     {promptLang:'vi',prompt:'Trong cuộc cạnh tranh mạnh thắng yếu thua, người không kiên trì học tập sớm muộn cũng bị đào thải.',answer:'在优胜劣汰的竞争中，不坚持学习的人迟早会被淘汰。',answerPy:'Zài yōushèng-liètài de jìngzhēng zhōng, bù jiānchí xuéxí de rén chízǎo huì bèi táotài.',
      note:'迟早 = sớm muộn (ôn HSK 5); 被淘汰 (淘汰 ôn HSK 6 bài 12).',pair:'迟早'}
   ]},

  {n:15,zh:'皆',py:'jiē',pos:'Phó từ',vn:'đều, cũng',hv:'giai',em:'🌐',lesson:1,
   explain:['Phó từ (văn viết, gốc Hán cổ): đều, tất cả = 都: 一切皆有可能, 人人皆知.','Hay gặp trong thành ngữ: 皆大欢喜 (ai nấy đều vui), 比比皆是 (đâu đâu cũng có). Khẩu ngữ dùng 都.'],
   usage:'S + 皆 + V / Adj (= 都); 一切皆有可能; 人人皆知; 皆大欢喜; 比比皆是.',
   collo:['一切皆有可能','人人皆知','皆大欢喜','比比皆是'],
   ex_zh:'一切皆有可能。',ex_py:'Yíqiè jiē yǒu kěnéng.',ex_vn:'Mọi thứ đều có thể xảy ra.',
   exList:[
     {zh:'一切皆有可能。',py:'Yíqiè jiē yǒu kěnéng.',vn:'Mọi thứ đều có thể xảy ra.'},
     {zh:'这件事在我们村里人人皆知。',py:'Zhè jiàn shì zài wǒmen cūn li rénrén jiē zhī.',vn:'Chuyện này trong làng chúng tôi ai ai cũng biết.'},
     {zh:'问题终于解决了，双方都很满意，真是皆大欢喜。',py:'Wèntí zhōngyú jiějué le, shuāngfāng dōu hěn mǎnyì, zhēn shì jiēdà-huānxǐ.',vn:'Vấn đề cuối cùng đã được giải quyết, cả hai bên đều hài lòng, đúng là ai nấy đều vui.'}
   ],
   colloFull:[
     {zh:'一切皆有可能',py:'yíqiè jiē yǒu kěnéng',vn:'mọi thứ đều có thể'},
     {zh:'人人皆知',py:'rénrén jiē zhī',vn:'ai ai cũng biết'},
     {zh:'皆大欢喜',py:'jiēdà-huānxǐ',vn:'ai nấy đều vui'},
     {zh:'比比皆是',py:'bǐbǐ-jiēshì',vn:'đâu đâu cũng có'},
     {zh:'四海皆兄弟',py:'sìhǎi jiē xiōngdì',vn:'bốn biển đều là anh em'}
   ],
   patterns:[
     {s:'S + 皆 + V / Adj',m:'… đều … (dạng văn viết của 都)'},
     {s:'皆大欢喜 / 比比皆是',m:'Thành ngữ có chữ 皆'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần chịu nỗ lực, mọi thứ đều có thể.',answer:'只要肯努力，一切皆有可能。',answerPy:'Zhǐyào kěn nǔlì, yíqiè jiē yǒu kěnéng.',
      note:'只要…… (ôn HSK 4); 肯 = chịu, sẵn lòng.',pair:'只要'},
     {promptLang:'vi',prompt:'Trên phố, những quán trà sữa như thế này đâu đâu cũng có.',answer:'街上这样的奶茶店比比皆是。',answerPy:'Jiē shang zhèyàng de nǎichá diàn bǐbǐ-jiēshì.',
      note:'这样的 + N = N như thế này; 比比皆是 làm vị ngữ, đứng cuối câu.',pair:'这样的'}
   ]},

  {n:16,zh:'明智',py:'míngzhì',pos:'Tính từ',vn:'sáng suốt, khôn khéo',hv:'minh trí',em:'💡',lesson:1,
   explain:['Tính từ: suy xét sáng suốt, có lý trí, nhìn xa trông rộng: 明智的选择, 明智之举.','Hay đi với 选择 / 决定 / 做法; 明智之举 (văn viết) = một việc làm sáng suốt. Ôn: 英明 (bài 7) thường dùng khen lãnh đạo; 明智 dùng rộng hơn.'],
   usage:'明智的 + 选择 / 决定 / 做法; 明智之举; 不太明智; (做得) 很明智.',
   collo:['明智的选择','明智之举','明智的决定','不太明智'],
   ex_zh:'动不动就要将其淘汰，似乎不是明智之举。',ex_py:'Dòngbudòng jiù yào jiāng qí táotài, sìhū bú shì míngzhì zhī jǔ.',ex_vn:'Hơi một chút là muốn loại bỏ nó, e rằng không phải một việc làm sáng suốt.',
   exList:[
     {zh:'动不动就要将其淘汰，似乎不是明智之举。',py:'Dòngbudòng jiù yào jiāng qí táotài, sìhū bú shì míngzhì zhī jǔ.',vn:'Hơi một chút là muốn loại bỏ nó, e rằng không phải một việc làm sáng suốt.'},
     {zh:'在这种情况下放弃，也许是最明智的选择。',py:'Zài zhè zhǒng qíngkuàng xià fàngqì, yěxǔ shì zuì míngzhì de xuǎnzé.',vn:'Trong tình huống này, từ bỏ có lẽ là lựa chọn sáng suốt nhất.'},
     {zh:'吵架的时候先冷静下来，是一种明智的做法。',py:'Chǎojià de shíhou xiān lěngjìng xiàlái, shì yì zhǒng míngzhì de zuòfǎ.',vn:'Khi cãi nhau, bình tĩnh lại trước là một cách làm sáng suốt.'}
   ],
   colloFull:[
     {zh:'明智的选择',py:'míngzhì de xuǎnzé',vn:'lựa chọn sáng suốt'},
     {zh:'明智之举',py:'míngzhì zhī jǔ',vn:'việc làm sáng suốt'},
     {zh:'明智的决定',py:'míngzhì de juédìng',vn:'quyết định sáng suốt'},
     {zh:'不太明智',py:'bú tài míngzhì',vn:'không sáng suốt lắm'},
     {zh:'明智的做法',py:'míngzhì de zuòfǎ',vn:'cách làm khôn ngoan'}
   ],
   patterns:[
     {s:'明智的 + 选择 / 决定',m:'Lựa chọn / quyết định sáng suốt'},
     {s:'……(似乎)不是明智之举',m:'… (e rằng) không phải việc làm sáng suốt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vay tiền để mua điện thoại đắt tiền, e rằng không phải việc làm sáng suốt.',answer:'借钱买昂贵的手机，似乎不是明智之举。',answerPy:'Jiè qián mǎi ángguì de shǒujī, sìhū bú shì míngzhì zhī jǔ.',
      note:'似乎 = dường như (nói giảm nhẹ, ôn HSK 5); 昂贵 cùng bài.',pair:'似乎'},
     {promptLang:'vi',prompt:'Thực tế đã chứng minh, chọn học ngành này là một quyết định sáng suốt.',answer:'事实证明，选择学这个专业是一个明智的决定。',answerPy:'Shìshí zhèngmíng, xuǎnzé xué zhège zhuānyè shì yí ge míngzhì de juédìng.',
      note:'事实证明 = thực tế đã chứng minh (ôn HSK 5).',pair:'事实证明'}
   ]},

  {n:17,zh:'出路',py:'chūlù',pos:'Danh từ',vn:'lối ra, lối thoát',hv:'xuất lộ',em:'🚪',lesson:1,
   explain:['Danh từ: nghĩa gốc là con đường đi ra ngoài; nghĩa thường dùng: lối thoát, hướng giải quyết, con đường phát triển: 根本出路, 找出路.','Hay đi với 找 / 寻找 / 有 / 没有; 唯一的出路 = lối thoát duy nhất.'],
   usage:'(根本 / 唯一的) 出路 + 是 / 在于……; 找 / 寻找 + 出路; 没有出路.',
   collo:['根本出路','唯一的出路','寻找出路','没有出路'],
   ex_zh:'根本出路还是要在清洁环保、规范驾车出行上下功夫。',ex_py:'Gēnběn chūlù háishi yào zài qīngjié huánbǎo, guīfàn jiàchē chūxíng shang xià gōngfu.',ex_vn:'Lối thoát căn bản vẫn là phải dồn công sức vào việc sạch sẽ, thân thiện với môi trường và lái xe đi lại đúng quy tắc.',
   exList:[
     {zh:'根本出路还是要在清洁环保、规范驾车出行上下功夫。',py:'Gēnběn chūlù háishi yào zài qīngjié huánbǎo, guīfàn jiàchē chūxíng shang xià gōngfu.',vn:'Lối thoát căn bản vẫn là phải dồn công sức vào việc sạch sẽ, thân thiện với môi trường và lái xe đi lại đúng quy tắc.'},
     {zh:'对于这个贫困的小山村来说，发展旅游业也许是唯一的出路。',py:'Duìyú zhège pínkùn de xiǎo shāncūn lái shuō, fāzhǎn lǚyóuyè yěxǔ shì wéiyī de chūlù.',vn:'Đối với ngôi làng núi nghèo này, phát triển du lịch có lẽ là lối thoát duy nhất.'},
     {zh:'公司连续亏损，老板正在四处寻找出路。',py:'Gōngsī liánxù kuīsǔn, lǎobǎn zhèngzài sìchù xúnzhǎo chūlù.',vn:'Công ty thua lỗ liên tiếp, ông chủ đang tìm lối thoát khắp nơi.'}
   ],
   colloFull:[
     {zh:'根本出路',py:'gēnběn chūlù',vn:'lối thoát căn bản'},
     {zh:'唯一的出路',py:'wéiyī de chūlù',vn:'lối thoát duy nhất'},
     {zh:'寻找出路',py:'xúnzhǎo chūlù',vn:'tìm lối thoát'},
     {zh:'没有出路',py:'méiyǒu chūlù',vn:'không có lối thoát'},
     {zh:'找到出路',py:'zhǎodào chūlù',vn:'tìm ra hướng đi'}
   ],
   patterns:[
     {s:'……的(根本)出路 + 是 / 在于 + ……',m:'Lối thoát (căn bản) của … là …'},
     {s:'寻找 / 找到 + 出路',m:'Tìm / tìm ra lối thoát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn giải quyết tắc đường, lối thoát căn bản nằm ở việc phát triển giao thông công cộng.',answer:'要解决交通堵塞，根本出路在于发展公共交通。',answerPy:'Yào jiějué jiāotōng dǔsè, gēnběn chūlù zàiyú fāzhǎn gōnggòng jiāotōng.',
      note:'在于 = nằm ở (ôn HSK 5).',pair:'在于'},
     {promptLang:'vi',prompt:'Đừng nản lòng, nghĩ thêm cách đi, nhất định sẽ tìm ra lối thoát.',answer:'别灰心，多想想办法，一定能找到出路的。',answerPy:'Bié huīxīn, duō xiǎngxiang bànfǎ, yídìng néng zhǎodào chūlù de.',
      note:'灰心 = nản lòng (HSK 5); 一定……的 nhấn mạnh sự khẳng định.',pair:'一定'}
   ]},

  {n:18,zh:'规范',py:'guīfàn',pos:'Tính từ',vn:'hợp quy tắc, hợp quy phạm, đúng chuẩn',hv:'quy phạm',em:'📏',lesson:1,
   explain:['Tính từ: đúng quy định, đúng chuẩn mực: 规范驾车 (lái xe đúng quy tắc), 发音很规范, 规范操作.','Còn là danh từ (quy phạm, chuẩn mực: 行为规范, 语言规范) và động từ (chấn chỉnh cho đúng chuẩn: 规范市场秩序).'],
   usage:'规范 + V (驾车 / 操作 / 使用); 很 / 不 + 规范; 行为规范 (danh từ); 规范 + N (động từ).',
   collo:['规范驾车','规范操作','不太规范','行为规范'],
   ex_zh:'每位司机规范操作也是非常重要的。',ex_py:'Měi wèi sījī guīfàn cāozuò yě shì fēicháng zhòngyào de.',ex_vn:'Việc mỗi tài xế thao tác đúng quy tắc cũng vô cùng quan trọng.',
   exList:[
     {zh:'每位司机规范操作也是非常重要的。',py:'Měi wèi sījī guīfàn cāozuò yě shì fēicháng zhòngyào de.',vn:'Việc mỗi tài xế thao tác đúng quy tắc cũng vô cùng quan trọng.'},
     {zh:'他的普通话发音很规范，像播音员一样。',py:'Tā de pǔtōnghuà fāyīn hěn guīfàn, xiàng bōyīnyuán yíyàng.',vn:'Phát âm tiếng phổ thông của anh ấy rất chuẩn, giống như phát thanh viên.'},
     {zh:'学生应该遵守学校的行为规范。',py:'Xuésheng yīnggāi zūnshǒu xuéxiào de xíngwéi guīfàn.',vn:'Học sinh nên tuân thủ quy tắc ứng xử của nhà trường.'}
   ],
   colloFull:[
     {zh:'规范驾车',py:'guīfàn jiàchē',vn:'lái xe đúng quy tắc'},
     {zh:'规范操作',py:'guīfàn cāozuò',vn:'thao tác đúng quy trình'},
     {zh:'不太规范',py:'bú tài guīfàn',vn:'không đúng chuẩn lắm'},
     {zh:'行为规范',py:'xíngwéi guīfàn',vn:'quy tắc ứng xử'},
     {zh:'规范汉字',py:'guīfàn Hànzì',vn:'chữ Hán chuẩn'}
   ],
   patterns:[
     {s:'规范 + V (驾车 / 操作)',m:'… đúng quy tắc, đúng quy trình'},
     {s:'(很 / 不太) 规范',m:'(Rất / không) đúng chuẩn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chữ em viết không chuẩn lắm, nhiều nét bị viết sai.',answer:'你写的字不太规范，很多笔画都写错了。',answerPy:'Nǐ xiě de zì bú tài guīfàn, hěn duō bǐhuà dōu xiěcuò le.',
      note:'Bổ ngữ kết quả 写错 (ôn HSK 3–4).',pair:'写错'},
     {promptLang:'vi',prompt:'Chỉ cần mọi người đều thao tác đúng quy trình thì có thể tránh được tai nạn.',answer:'只要大家都规范操作，就能避免事故。',answerPy:'Zhǐyào dàjiā dōu guīfàn cāozuò, jiù néng bìmiǎn shìgù.',
      note:'只要……就…… (ôn HSK 4); 事故 cùng bài.',pair:'只要……就……'}
   ]},

  {n:19,zh:'谋求',py:'móuqiú',pos:'Động từ',vn:'tìm kiếm, mưu cầu',hv:'mưu cầu',em:'🎯',lesson:1,
   explain:['Động từ (văn viết): tìm cách để đạt được (một mục tiêu lớn, trừu tượng): 谋求发展, 谋求合作, 谋求幸福.','Tân ngữ thường là danh từ trừu tượng: 发展 / 合作 / 利益 / 和平 / 能源. Khác 追求 (theo đuổi lý tưởng, tình yêu).'],
   usage:'谋求 + 发展 / 合作 / 利益 / 和平; 为 + người + 谋求 + …….',
   collo:['谋求发展','谋求合作','谋求利益','谋求更清洁的能源'],
   ex_zh:'谋求这一交通工具的清洁、安全，是2050年对汽车最起码的要求。',ex_py:'Móuqiú zhè yì jiāotōng gōngjù de qīngjié, ānquán, shì èr líng wǔ líng nián duì qìchē zuì qǐmǎ de yāoqiú.',ex_vn:'Tìm cách để phương tiện giao thông này sạch sẽ và an toàn là yêu cầu tối thiểu đối với ô tô năm 2050.',
   exList:[
     {zh:'谋求这一交通工具的清洁、安全，是2050年对汽车最起码的要求。',py:'Móuqiú zhè yì jiāotōng gōngjù de qīngjié, ānquán, shì èr líng wǔ líng nián duì qìchē zuì qǐmǎ de yāoqiú.',vn:'Tìm cách để phương tiện giao thông này sạch sẽ và an toàn là yêu cầu tối thiểu đối với ô tô năm 2050.'},
     {zh:'人类已开始谋求更清洁、环保的能源。',py:'Rénlèi yǐ kāishǐ móuqiú gèng qīngjié, huánbǎo de néngyuán.',vn:'Loài người đã bắt đầu tìm kiếm những nguồn năng lượng sạch và thân thiện với môi trường hơn.'},
     {zh:'两家公司希望在新能源领域谋求合作。',py:'Liǎng jiā gōngsī xīwàng zài xīn néngyuán lǐngyù móuqiú hézuò.',vn:'Hai công ty mong muốn tìm kiếm cơ hội hợp tác trong lĩnh vực năng lượng mới.'}
   ],
   colloFull:[
     {zh:'谋求发展',py:'móuqiú fāzhǎn',vn:'tìm kiếm sự phát triển'},
     {zh:'谋求合作',py:'móuqiú hézuò',vn:'tìm kiếm hợp tác'},
     {zh:'谋求利益',py:'móuqiú lìyì',vn:'mưu cầu lợi ích'},
     {zh:'谋求更清洁的能源',py:'móuqiú gèng qīngjié de néngyuán',vn:'tìm nguồn năng lượng sạch hơn'},
     {zh:'谋求和平',py:'móuqiú hépíng',vn:'tìm kiếm hòa bình'}
   ],
   patterns:[
     {s:'谋求 + N trừu tượng (发展 / 合作)',m:'Tìm cách đạt được …'},
     {s:'为 + người + 谋求 + 利益 / 幸福',m:'Mưu cầu … cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhiều thanh niên rời quê lên thành phố tìm kiếm sự phát triển.',answer:'很多年轻人离开家乡，到城市谋求发展。',answerPy:'Hěn duō niánqīngrén líkāi jiāxiāng, dào chéngshì móuqiú fāzhǎn.',
      note:'Chuỗi động từ liên tiếp: 离开……，到 + nơi chốn + V (ôn HSK 4).',pair:'到……V'},
     {promptLang:'vi',prompt:'Một doanh nghiệp tốt không chỉ mưu cầu lợi ích cho mình mà còn phải có trách nhiệm với xã hội.',answer:'一家好企业不仅要为自己谋求利益，还要对社会负责。',answerPy:'Yì jiā hǎo qǐyè bùjǐn yào wèi zìjǐ móuqiú lìyì, hái yào duì shèhuì fùzé.',
      note:'不仅……还…… (ôn HSK 4–5); 对……负责 = chịu trách nhiệm với ….',pair:'不仅……还……'}
   ]},

  {n:20,zh:'干预',py:'gānyù',pos:'Động từ',vn:'can thiệp',hv:'can dự',em:'✋',lesson:1,
   explain:['Động từ: xen vào, can thiệp vào việc của người khác hoặc vào một quá trình: 无人干预 (không có người can thiệp), 干预别人的私事.','Gần nghĩa 干涉 (can thiệp, thường mang nghĩa xấu, ép buộc); 干预 trung tính hơn, hay dùng trong văn bản chính thức: 政府干预市场.'],
   usage:'干预 + N (私事 / 市场 / 选择); 无人干预; 进行干预; 过多干预.',
   collo:['无人干预','干预市场','过多干预','进行干预'],
   ex_zh:'2050年，无人干预，能够自动在平坦的高速路上奔驰的车辆将会走进家庭。',ex_py:'Èr líng wǔ líng nián, wú rén gānyù, nénggòu zìdòng zài píngtǎn de gāosùlù shang bēnchí de chēliàng jiāng huì zǒujìn jiātíng.',ex_vn:'Năm 2050, những chiếc xe không cần người can thiệp, có thể tự động lao vun vút trên đường cao tốc bằng phẳng sẽ đi vào từng gia đình.',
   exList:[
     {zh:'2050年，无人干预，能够自动在平坦的高速路上奔驰的车辆将会走进家庭。',py:'Èr líng wǔ líng nián, wú rén gānyù, nénggòu zìdòng zài píngtǎn de gāosùlù shang bēnchí de chēliàng jiāng huì zǒujìn jiātíng.',vn:'Năm 2050, những chiếc xe không cần người can thiệp, có thể tự động lao vun vút trên đường cao tốc bằng phẳng sẽ đi vào từng gia đình.'},
     {zh:'孩子长大了，父母不应该过多干预他们的选择。',py:'Háizi zhǎngdà le, fùmǔ bù yīnggāi guò duō gānyù tāmen de xuǎnzé.',vn:'Con cái lớn rồi, cha mẹ không nên can thiệp quá nhiều vào lựa chọn của chúng.'},
     {zh:'房价上涨太快，政府决定进行干预。',py:'Fángjià shàngzhǎng tài kuài, zhèngfǔ juédìng jìnxíng gānyù.',vn:'Giá nhà tăng quá nhanh, chính phủ quyết định can thiệp.'}
   ],
   colloFull:[
     {zh:'无人干预',py:'wú rén gānyù',vn:'không có người can thiệp'},
     {zh:'干预市场',py:'gānyù shìchǎng',vn:'can thiệp thị trường'},
     {zh:'过多干预',py:'guò duō gānyù',vn:'can thiệp quá nhiều'},
     {zh:'进行干预',py:'jìnxíng gānyù',vn:'tiến hành can thiệp'},
     {zh:'干预私事',py:'gānyù sīshì',vn:'xen vào chuyện riêng'}
   ],
   patterns:[
     {s:'干预 + N',m:'Can thiệp vào …'},
     {s:'无人干预 / 进行干预',m:'Không người can thiệp / tiến hành can thiệp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đây là chuyện riêng của tôi, xin anh đừng can thiệp.',answer:'这是我个人的私事，请你不要干预。',answerPy:'Zhè shì wǒ gèrén de sīshì, qǐng nǐ bú yào gānyù.',
      note:'请 + 不要 + V = xin đừng … (cách nói lịch sự, ôn HSK 3–4).',pair:'请不要'},
     {promptLang:'vi',prompt:'Dù là bố mẹ cũng không nên can thiệp quá nhiều vào cuộc sống của con cái.',answer:'即便是父母，也不应该过多干预孩子的生活。',answerPy:'Jíbiàn shì fùmǔ, yě bù yīnggāi guò duō gānyù háizi de shēnghuó.',
      note:'即便……也…… = dù cho … cũng … (ôn HSK 6 bài 10).',pair:'即便……也……'}
   ]},

  {n:21,zh:'平坦',py:'píngtǎn',pos:'Tính từ',vn:'bằng phẳng',hv:'bình thản',em:'🛣️',lesson:1,
   explain:['Tính từ: (mặt đất, đường) không lồi lõm, không có dốc cao: 平坦的高速路, 地势平坦.','Nghĩa bóng: suôn sẻ — 人生的道路并不平坦. BẪY: "bình thản" tiếng Việt = điềm tĩnh (平静); 平坦 chỉ mặt đất phẳng. Trái nghĩa: 凹凸不平 (bài 18), 陡峭.'],
   usage:'平坦的 + 道路 / 马路 / 草地; 地势 / 路面 + 平坦; ……并不平坦.',
   collo:['平坦的高速路','地势平坦','路面平坦','并不平坦'],
   ex_zh:'能够自动在平坦的高速路上奔驰的车辆将会走进家庭。',ex_py:'Nénggòu zìdòng zài píngtǎn de gāosùlù shang bēnchí de chēliàng jiāng huì zǒujìn jiātíng.',ex_vn:'Những chiếc xe có thể tự động lao vun vút trên đường cao tốc bằng phẳng sẽ đi vào các gia đình.',
   exList:[
     {zh:'能够自动在平坦的高速路上奔驰的车辆将会走进家庭。',py:'Nénggòu zìdòng zài píngtǎn de gāosùlù shang bēnchí de chēliàng jiāng huì zǒujìn jiātíng.',vn:'Những chiếc xe có thể tự động lao vun vút trên đường cao tốc bằng phẳng sẽ đi vào các gia đình.'},
     {zh:'这里地势平坦，土地肥沃，非常适合种植水稻。',py:'Zhèlǐ dìshì píngtǎn, tǔdì féiwò, fēicháng shìhé zhòngzhí shuǐdào.',vn:'Nơi đây địa hình bằng phẳng, đất đai màu mỡ, rất thích hợp trồng lúa nước.'},
     {zh:'人生的道路并不总是平坦的，难免会遇到挫折。',py:'Rénshēng de dàolù bìng bù zǒngshì píngtǎn de, nánmiǎn huì yùdào cuòzhé.',vn:'Đường đời không phải lúc nào cũng bằng phẳng, khó tránh khỏi gặp trắc trở.'}
   ],
   colloFull:[
     {zh:'平坦的高速路',py:'píngtǎn de gāosùlù',vn:'đường cao tốc bằng phẳng'},
     {zh:'地势平坦',py:'dìshì píngtǎn',vn:'địa hình bằng phẳng'},
     {zh:'路面平坦',py:'lùmiàn píngtǎn',vn:'mặt đường phẳng'},
     {zh:'并不平坦',py:'bìng bù píngtǎn',vn:'chẳng hề bằng phẳng'},
     {zh:'平坦的草地',py:'píngtǎn de cǎodì',vn:'bãi cỏ bằng phẳng'}
   ],
   patterns:[
     {s:'平坦的 + 道路 / 草地',m:'Con đường / bãi cỏ bằng phẳng'},
     {s:'(人生的道路) 并不平坦',m:'(Đường đời) chẳng hề suôn sẻ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con đường núi này trước kia gồ ghề, bây giờ đã được sửa rất bằng phẳng rồi.',answer:'这条山路以前凹凸不平，现在已经修得很平坦了。',answerPy:'Zhè tiáo shānlù yǐqián āotū bù píng, xiànzài yǐjīng xiū de hěn píngtǎn le.',
      note:'Đối lập 以前……现在……; 凹凸不平 ôn HSK 6 bài 18.',pair:'以前……现在……'},
     {promptLang:'vi',prompt:'Dù con đường phía trước không bằng phẳng, chúng tôi cũng sẽ tiếp tục đi.',answer:'即使前面的路并不平坦，我们也会继续走下去。',answerPy:'Jíshǐ qiánmiàn de lù bìng bù píngtǎn, wǒmen yě huì jìxù zǒu xiàqù.',
      note:'即使……也…… (ôn HSK 5); V + 下去 = tiếp tục.',pair:'即使……也……'}
   ]},

  {n:22,zh:'奔驰',py:'bēnchí',pos:'Động từ',vn:'chạy băng băng, lao nhanh',hv:'bôn trì',em:'🏎️',lesson:1,
   explain:['Động từ (văn viết): (xe, ngựa) chạy rất nhanh: 汽车在高速路上奔驰, 骏马奔驰.','Cũng là tên tiếng Trung của hãng xe Mercedes-Benz (奔驰). Gần nghĩa 飞驰; khẩu ngữ nói 飞快地跑.'],
   usage:'(车 / 马) + 在 + nơi chốn + 奔驰; 高速奔驰的 + N; 奔驰而过.',
   collo:['在高速路上奔驰','高速奔驰','奔驰而过','骏马奔驰'],
   ex_zh:'高速奔驰的汽车拉近了我们的距离。',ex_py:'Gāosù bēnchí de qìchē lājìnle wǒmen de jùlí.',ex_vn:'Những chiếc ô tô lao vun vút đã rút ngắn khoảng cách giữa chúng ta.',
   exList:[
     {zh:'高速奔驰的汽车拉近了我们的距离。',py:'Gāosù bēnchí de qìchē lājìnle wǒmen de jùlí.',vn:'Những chiếc ô tô lao vun vút đã rút ngắn khoảng cách giữa chúng ta.'},
     {zh:'一列火车从我们身边奔驰而过。',py:'Yí liè huǒchē cóng wǒmen shēnbiān bēnchí ér guò.',vn:'Một đoàn tàu lao vút qua bên cạnh chúng tôi.'},
     {zh:'辽阔的草原上，几匹骏马正在自由地奔驰。',py:'Liáokuò de cǎoyuán shang, jǐ pǐ jùnmǎ zhèngzài zìyóu de bēnchí.',vn:'Trên thảo nguyên bao la, mấy con tuấn mã đang tự do phi nước đại.'}
   ],
   colloFull:[
     {zh:'在高速路上奔驰',py:'zài gāosùlù shang bēnchí',vn:'lao vun vút trên đường cao tốc'},
     {zh:'高速奔驰',py:'gāosù bēnchí',vn:'lao đi với tốc độ cao'},
     {zh:'奔驰而过',py:'bēnchí ér guò',vn:'lao vụt qua'},
     {zh:'骏马奔驰',py:'jùnmǎ bēnchí',vn:'tuấn mã phi nước đại'},
     {zh:'在草原上奔驰',py:'zài cǎoyuán shang bēnchí',vn:'phi trên thảo nguyên'}
   ],
   patterns:[
     {s:'N + 在 + nơi chốn + 奔驰',m:'… lao nhanh trên / ở …'},
     {s:'奔驰而过',m:'Lao vụt qua'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc xe điện lao vun vút trên con đường bằng phẳng, hầu như không có tiếng động.',answer:'电动汽车在平坦的路上奔驰，几乎没有声音。',answerPy:'Diàndòng qìchē zài píngtǎn de lù shang bēnchí, jīhū méiyǒu shēngyīn.',
      note:'在 + nơi chốn + V; 几乎 = hầu như (ôn HSK 4).',pair:'几乎'},
     {promptLang:'vi',prompt:'Nhìn những chiếc xe lao vụt qua ngoài cửa sổ, cậu bé bất giác reo lên.',answer:'看着窗外奔驰而过的汽车，小男孩不由得叫了起来。',answerPy:'Kànzhe chuāng wài bēnchí ér guò de qìchē, xiǎo nánhái bùyóude jiàole qǐlái.',
      note:'不由得 = bất giác (ôn HSK 6 bài 2); V + 了起来 = bắt đầu ….',pair:'不由得'}
   ]},

  {n:23,zh:'试图',py:'shìtú',pos:'Động từ',vn:'thử, định, cố',hv:'thí đồ',em:'🧪',lesson:1,
   explain:['Động từ (văn viết): có ý định, cố thử làm (thường là việc khó, kết quả chưa chắc): 试图说服他, 试图实现.','Luôn đi với một động từ phía sau (试图 + V), không đi với danh từ. Gần nghĩa 企图 (bài 17), nhưng 企图 hay mang nghĩa xấu (âm mưu).'],
   usage:'试图 + V (说服 / 解释 / 改变 / 实现 / 安慰); 曾经 / 一直 + 试图…….',
   collo:['试图实现','试图说服','试图安慰','试图改变'],
   ex_zh:'欧洲正试图实现由一名职业司机驾车引导一长串汽车前行。',ex_py:'Ōuzhōu zhèng shìtú shíxiàn yóu yì míng zhíyè sījī jiàchē yǐndǎo yì cháng chuàn qìchē qiánxíng.',ex_vn:'Châu Âu đang thử hiện thực hóa việc để một tài xế chuyên nghiệp lái xe dẫn một đoàn dài ô tô tiến lên.',
   exList:[
     {zh:'欧洲正试图实现由一名职业司机驾车引导一长串汽车前行。',py:'Ōuzhōu zhèng shìtú shíxiàn yóu yì míng zhíyè sījī jiàchē yǐndǎo yì cháng chuàn qìchē qiánxíng.',vn:'Châu Âu đang thử hiện thực hóa việc để một tài xế chuyên nghiệp lái xe dẫn một đoàn dài ô tô tiến lên.'},
     {zh:'看到她伤心欲绝的样子，我试图安慰她几句。',py:'Kàndào tā shāngxīn-yùjué de yàngzi, wǒ shìtú ānwèi tā jǐ jù.',vn:'Thấy dáng vẻ đau đớn tột cùng của cô ấy, tôi định an ủi vài câu.'},
     {zh:'他一直试图改变父亲的想法，可是没有成功。',py:'Tā yìzhí shìtú gǎibiàn fùqīn de xiǎngfǎ, kěshì méiyǒu chénggōng.',vn:'Anh ấy luôn cố thay đổi suy nghĩ của bố, nhưng không thành công.'}
   ],
   colloFull:[
     {zh:'试图实现',py:'shìtú shíxiàn',vn:'thử hiện thực hóa'},
     {zh:'试图说服',py:'shìtú shuōfú',vn:'cố thuyết phục'},
     {zh:'试图安慰',py:'shìtú ānwèi',vn:'định an ủi'},
     {zh:'试图改变',py:'shìtú gǎibiàn',vn:'cố thay đổi'},
     {zh:'试图解释',py:'shìtú jiěshì',vn:'cố giải thích'}
   ],
   patterns:[
     {s:'S + 试图 + V',m:'S cố / định làm …'},
     {s:'(曾经 / 一直) 试图……，可是……',m:'(Đã từng / luôn) cố …, nhưng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy từng thử giải thích với cô giáo, nhưng cô hoàn toàn không nghe.',answer:'他曾经试图向老师解释，可是老师根本不听。',answerPy:'Tā céngjīng shìtú xiàng lǎoshī jiěshì, kěshì lǎoshī gēnběn bù tīng.',
      note:'向 + người + 解释 (ôn HSK 4); 根本 + 不 = hoàn toàn không.',pair:'根本'},
     {promptLang:'vi',prompt:'Các nhà khoa học đang cố tìm ra một nguồn năng lượng mới vừa rẻ vừa sạch.',answer:'科学家们正试图找到一种既便宜又清洁的新能源。',answerPy:'Kēxuéjiāmen zhèng shìtú zhǎodào yì zhǒng jì piányi yòu qīngjié de xīn néngyuán.',
      note:'既……又…… (ôn HSK 4); 正 + V = đang.',pair:'既……又……'}
   ]},

  {n:24,zh:'引导',py:'yǐndǎo',pos:'Động từ',vn:'dẫn đường, dẫn dắt',hv:'dẫn đạo',em:'🧭',lesson:1,
   explain:['Động từ: đi trước dẫn đường (引导车辆, 引导客人入座); nghĩa bóng: hướng dẫn, định hướng (引导孩子, 正确引导).','Ôn chữ 导 = dẫn (导航, 向导 — bài 13; 热身 2 của bài: 引导、指导、领导、向导……). 引导 nhấn "dẫn đi theo hướng đúng", 指导 nhấn "chỉ bảo cách làm".'],
   usage:'引导 + người / xe + V; 正确 / 积极 + 引导; 在……的引导下.',
   collo:['引导车辆','引导孩子','正确引导','在老师的引导下'],
   ex_zh:'被引导车辆上的驾驶者可以工作，也可以休息。',ex_py:'Bèi yǐndǎo chēliàng shang de jiàshǐzhě kěyǐ gōngzuò, yě kěyǐ xiūxi.',ex_vn:'Người lái trên những chiếc xe được dẫn đường có thể làm việc, cũng có thể nghỉ ngơi.',
   exList:[
     {zh:'被引导车辆上的驾驶者可以工作，也可以休息。',py:'Bèi yǐndǎo chēliàng shang de jiàshǐzhě kěyǐ gōngzuò, yě kěyǐ xiūxi.',vn:'Người lái trên những chiếc xe được dẫn đường có thể làm việc, cũng có thể nghỉ ngơi.'},
     {zh:'父母应该正确引导孩子使用手机，而不是简单地禁止。',py:'Fùmǔ yīnggāi zhèngquè yǐndǎo háizi shǐyòng shǒujī, ér bú shì jiǎndān de jìnzhǐ.',vn:'Cha mẹ nên hướng dẫn con dùng điện thoại đúng cách, chứ không phải cấm đoán đơn giản.'},
     {zh:'在老师的引导下，同学们很快找到了问题的答案。',py:'Zài lǎoshī de yǐndǎo xià, tóngxuémen hěn kuài zhǎodàole wèntí de dá\'àn.',vn:'Dưới sự dẫn dắt của thầy, các bạn nhanh chóng tìm ra đáp án của vấn đề.'}
   ],
   colloFull:[
     {zh:'引导车辆',py:'yǐndǎo chēliàng',vn:'dẫn đường cho xe'},
     {zh:'引导孩子',py:'yǐndǎo háizi',vn:'hướng dẫn trẻ'},
     {zh:'正确引导',py:'zhèngquè yǐndǎo',vn:'định hướng đúng đắn'},
     {zh:'在老师的引导下',py:'zài lǎoshī de yǐndǎo xià',vn:'dưới sự dẫn dắt của thầy cô'},
     {zh:'引导客人入座',py:'yǐndǎo kèrén rùzuò',vn:'dẫn khách vào chỗ'}
   ],
   patterns:[
     {s:'引导 + người + V',m:'Dẫn dắt / hướng dẫn ai làm …'},
     {s:'在 + ……的引导下，……',m:'Dưới sự dẫn dắt của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhân viên phục vụ nhiệt tình dẫn chúng tôi đến chỗ ngồi.',answer:'服务员很热情地把我们引导到座位上。',answerPy:'Fúwùyuán hěn rèqíng de bǎ wǒmen yǐndǎo dào zuòwèi shang.',
      note:'Câu 把 + V + 到 + nơi chốn (ôn HSK 4); Adj + 地 + V.',pair:'把……V到……'},
     {promptLang:'vi',prompt:'Dưới sự hướng dẫn của hướng dẫn viên, chúng tôi đã tham quan toàn bộ bảo tàng.',answer:'在导游的引导下，我们参观了整个博物馆。',answerPy:'Zài dǎoyóu de yǐndǎo xià, wǒmen cānguānle zhěnggè bówùguǎn.',
      note:'在……下 = dưới (sự) … (ôn HSK 5).',pair:'在……下'}
   ]},

  {n:25,zh:'串',py:'chuàn',pos:'Lượng từ',vn:'chuỗi, xâu, đoàn, loạt',hv:'xuyến',em:'📿',lesson:1,
   explain:['Lượng từ: dùng cho những vật nối nhau thành chuỗi: 一串钥匙, 一串葡萄, 一长串汽车 (một đoàn dài xe).','Cũng là động từ: xâu lại (串珠子), sang nhà nhau chơi (串门儿). Đừng nhầm với 窜 (chạy trốn, bài 4).'],
   usage:'一 + 串 + 钥匙 / 葡萄 / 珍珠 / 数字; 一长串 + N; 串门儿.',
   collo:['一长串汽车','一串钥匙','一串葡萄','一串数字'],
   ex_zh:'由一名职业司机驾车引导一长串汽车前行。',ex_py:'Yóu yì míng zhíyè sījī jiàchē yǐndǎo yì cháng chuàn qìchē qiánxíng.',ex_vn:'Do một tài xế chuyên nghiệp lái xe dẫn một đoàn dài ô tô tiến lên phía trước.',
   exList:[
     {zh:'由一名职业司机驾车引导一长串汽车前行。',py:'Yóu yì míng zhíyè sījī jiàchē yǐndǎo yì cháng chuàn qìchē qiánxíng.',vn:'Do một tài xế chuyên nghiệp lái xe dẫn một đoàn dài ô tô tiến lên phía trước.'},
     {zh:'我出门的时候，把那串钥匙忘在家里了。',py:'Wǒ chūmén de shíhou, bǎ nà chuàn yàoshi wàng zài jiā li le.',vn:'Lúc ra khỏi nhà, tôi để quên chùm chìa khóa ấy ở nhà.'},
     {zh:'邻居送来了一大串葡萄，又大又甜。',py:'Línjū sònglái le yí dà chuàn pútao, yòu dà yòu tián.',vn:'Hàng xóm mang sang một chùm nho to, quả vừa to vừa ngọt.'}
   ],
   colloFull:[
     {zh:'一长串汽车',py:'yì cháng chuàn qìchē',vn:'một đoàn dài ô tô'},
     {zh:'一串钥匙',py:'yí chuàn yàoshi',vn:'một chùm chìa khóa'},
     {zh:'一串葡萄',py:'yí chuàn pútao',vn:'một chùm nho'},
     {zh:'一串数字',py:'yí chuàn shùzì',vn:'một dãy số'},
     {zh:'串门儿',py:'chuànménr',vn:'sang nhà hàng xóm chơi'}
   ],
   patterns:[
     {s:'一 + 串 + N',m:'Một chuỗi / chùm / xâu …'},
     {s:'一长串 + N',m:'Một chuỗi dài …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đọc một dãy số dài, tôi hoàn toàn không nhớ nổi.',answer:'他念了一长串数字，我根本记不住。',answerPy:'Tā niànle yì cháng chuàn shùzì, wǒ gēnběn jì bu zhù.',
      note:'Bổ ngữ khả năng 记不住 (ôn HSK 4).',pair:'记不住'},
     {promptLang:'vi',prompt:'Hồi nhỏ, tôi hay theo bà sang nhà hàng xóm chơi.',answer:'小时候，我常常跟着奶奶去邻居家串门儿。',answerPy:'Xiǎoshíhou, wǒ chángcháng gēnzhe nǎinai qù línjū jiā chuànménr.',
      note:'跟着 + người + V = đi theo ai làm ….',pair:'跟着'}
   ]},

  {n:26,zh:'珍珠',py:'zhēnzhū',pos:'Danh từ',vn:'hạt trân châu, ngọc trai',hv:'trân châu',em:'🦪',lesson:1,
   explain:['Danh từ: ngọc trai, hạt trân châu (hình thành trong con trai, sò): 珍珠项链 (vòng cổ ngọc trai).','Dùng ví von những vật tròn, sáng, quý: 像一条线上的珍珠 (như những hạt ngọc xâu trên một sợi chỉ). 珍 = quý (ôn 珍稀, bài 15).'],
   usage:'一颗 / 一串 + 珍珠; 珍珠 + 项链 / 耳环; 像珍珠一样…….',
   collo:['一串珍珠','珍珠项链','一条线上的珍珠','像珍珠一样'],
   ex_zh:'它们像是一条线上的珍珠，在路上移动。',ex_py:'Tāmen xiàng shì yì tiáo xiàn shang de zhēnzhū, zài lù shang yídòng.',ex_vn:'Chúng giống như những hạt ngọc trai xâu trên một sợi chỉ, di chuyển trên đường.',
   exList:[
     {zh:'它们像是一条线上的珍珠，在路上移动。',py:'Tāmen xiàng shì yì tiáo xiàn shang de zhēnzhū, zài lù shang yídòng.',vn:'Chúng giống như những hạt ngọc trai xâu trên một sợi chỉ, di chuyển trên đường.'},
     {zh:'妈妈生日那天，爸爸送给她一条珍珠项链。',py:'Māma shēngrì nà tiān, bàba sòng gěi tā yì tiáo zhēnzhū xiàngliàn.',vn:'Hôm sinh nhật mẹ, bố tặng mẹ một chiếc vòng cổ ngọc trai.'},
     {zh:'清晨，草叶上的露珠像珍珠一样闪闪发光。',py:'Qīngchén, cǎoyè shang de lùzhū xiàng zhēnzhū yíyàng shǎnshǎn fāguāng.',vn:'Sáng sớm, những giọt sương trên lá cỏ lấp lánh như hạt ngọc trai.'}
   ],
   colloFull:[
     {zh:'一串珍珠',py:'yí chuàn zhēnzhū',vn:'một chuỗi ngọc trai'},
     {zh:'珍珠项链',py:'zhēnzhū xiàngliàn',vn:'vòng cổ ngọc trai'},
     {zh:'一条线上的珍珠',py:'yì tiáo xiàn shang de zhēnzhū',vn:'những hạt ngọc xâu trên một sợi chỉ'},
     {zh:'像珍珠一样',py:'xiàng zhēnzhū yíyàng',vn:'như ngọc trai'},
     {zh:'一颗珍珠',py:'yì kē zhēnzhū',vn:'một viên ngọc trai'}
   ],
   patterns:[
     {s:'一颗 / 一串 + 珍珠',m:'Một viên / một chuỗi ngọc trai'},
     {s:'A + 像 + 珍珠一样 + Adj',m:'A … như ngọc trai (so sánh)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những ngọn đèn đường dọc bờ sông giống như một chuỗi ngọc trai.',answer:'河边的路灯像一串珍珠一样。',answerPy:'Hébiān de lùdēng xiàng yí chuàn zhēnzhū yíyàng.',
      note:'A 像 B 一样 (so sánh, ôn HSK 3–4).',pair:'像……一样'},
     {promptLang:'vi',prompt:'Chiếc vòng ngọc trai này tuy không đắt nhưng rất có ý nghĩa với tôi.',answer:'这条珍珠项链虽然不贵，但是对我来说很有意义。',answerPy:'Zhè tiáo zhēnzhū xiàngliàn suīrán bú guì, dànshì duì wǒ lái shuō hěn yǒu yìyì.',
      note:'对……来说 = đối với … (ôn HSK 4).',pair:'对……来说'}
   ]},

  {n:27,zh:'效益',py:'xiàoyì',pos:'Danh từ',vn:'hiệu quả, lợi ích thu được',hv:'hiệu ích',em:'📈',lesson:1,
   explain:['Danh từ: hiệu quả và lợi ích thu được (thường về kinh tế, xã hội): 经济效益, 工作效益, 社会效益.','Phân biệt: 效率 = hiệu suất (nhanh / chậm); 效果 = kết quả, tác dụng; 效益 nhấn lợi ích thu về. Nói công ty "làm ăn tốt": 效益好.'],
   usage:'经济 / 社会 / 工作 + 效益; 效益 + 好 / 差 / 提高; 讲究效益.',
   collo:['工作效益','经济效益','社会效益','效益提高'],
   ex_zh:'职业司机的工作效益也将大大提高。',ex_py:'Zhíyè sījī de gōngzuò xiàoyì yě jiāng dàdà tígāo.',ex_vn:'Hiệu quả công việc của tài xế chuyên nghiệp cũng sẽ được nâng cao rất nhiều.',
   exList:[
     {zh:'职业司机的工作效益也将大大提高。',py:'Zhíyè sījī de gōngzuò xiàoyì yě jiāng dàdà tígāo.',vn:'Hiệu quả công việc của tài xế chuyên nghiệp cũng sẽ được nâng cao rất nhiều.'},
     {zh:'这家工厂今年效益不错，工人们都拿到了奖金。',py:'Zhè jiā gōngchǎng jīnnián xiàoyì búcuò, gōngrénmen dōu nádàole jiǎngjīn.',vn:'Năm nay nhà máy này làm ăn có hiệu quả, công nhân đều nhận được tiền thưởng.'},
     {zh:'这个项目既有经济效益，又有社会效益。',py:'Zhège xiàngmù jì yǒu jīngjì xiàoyì, yòu yǒu shèhuì xiàoyì.',vn:'Dự án này vừa có hiệu quả kinh tế, vừa có hiệu quả xã hội.'}
   ],
   colloFull:[
     {zh:'工作效益',py:'gōngzuò xiàoyì',vn:'hiệu quả công việc'},
     {zh:'经济效益',py:'jīngjì xiàoyì',vn:'hiệu quả kinh tế'},
     {zh:'社会效益',py:'shèhuì xiàoyì',vn:'hiệu quả xã hội'},
     {zh:'效益提高',py:'xiàoyì tígāo',vn:'hiệu quả được nâng cao'},
     {zh:'效益不好',py:'xiàoyì bù hǎo',vn:'làm ăn kém hiệu quả'}
   ],
   patterns:[
     {s:'经济 / 社会 / 工作 + 效益',m:'Hiệu quả kinh tế / xã hội / công việc'},
     {s:'(公司 / 工厂) + 效益 + 好 / 差',m:'(Công ty / nhà máy) làm ăn hiệu quả / kém'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì công ty làm ăn kém hiệu quả, không ít nhân viên đã bị cắt giảm.',answer:'由于公司效益不好，不少员工被裁员了。',answerPy:'Yóuyú gōngsī xiàoyì bù hǎo, bù shǎo yuángōng bèi cáiyuán le.',
      note:'由于…… (ôn HSK 4); 裁员 ôn HSK 6 bài 7.',pair:'由于'},
     {promptLang:'vi',prompt:'Làm việc không thể chỉ nhìn vào hiệu quả kinh tế, còn phải xem hiệu quả xã hội.',answer:'做事不能只看经济效益，还要看社会效益。',answerPy:'Zuò shì bù néng zhǐ kàn jīngjì xiàoyì, hái yào kàn shèhuì xiàoyì.',
      note:'不能只……，还要…… = không thể chỉ …, còn phải ….',pair:'不能只……还要……'}
   ]},

  {n:28,zh:'抵达',py:'dǐdá',pos:'Động từ',vn:'đến, tới',hv:'để đạt',em:'🏁',lesson:1,
   explain:['Động từ (văn viết): đến nơi, tới đích: 抵达终点, 抵达北京, 顺利抵达.','Trang trọng hơn 到达 / 到; hay dùng trong tin tức, thông báo sân bay: 航班已抵达. Chữ 抵 ở đây = tới (khác 抵抗 = chống lại, bài 4).'],
   usage:'抵达 + nơi chốn (终点 / 机场 / 目的地); 顺利 / 安全 + 抵达; 将于 + thời gian + 抵达.',
   collo:['抵达终点','抵达目的地','顺利抵达','安全抵达'],
   ex_zh:'汽车抵达终点后，车上配备的高科技系统能使车辆自动停泊入位。',ex_py:'Qìchē dǐdá zhōngdiǎn hòu, chē shang pèibèi de gāo kējì xìtǒng néng shǐ chēliàng zìdòng tíngbó rùwèi.',ex_vn:'Sau khi ô tô tới điểm cuối, hệ thống công nghệ cao trang bị trên xe có thể giúp xe tự động đỗ vào chỗ.',
   exList:[
     {zh:'汽车抵达终点后，车上配备的高科技系统能使车辆自动停泊入位。',py:'Qìchē dǐdá zhōngdiǎn hòu, chē shang pèibèi de gāo kējì xìtǒng néng shǐ chēliàng zìdòng tíngbó rùwèi.',vn:'Sau khi ô tô tới điểm cuối, hệ thống công nghệ cao trang bị trên xe có thể giúp xe tự động đỗ vào chỗ.'},
     {zh:'经过十几个小时的漫长飞行，我们终于抵达了目的地。',py:'Jīngguò shí jǐ ge xiǎoshí de màncháng fēixíng, wǒmen zhōngyú dǐdále mùdìdì.',vn:'Sau hơn mười tiếng bay dài dằng dặc, cuối cùng chúng tôi cũng tới nơi.'},
     {zh:'代表团将于明天上午抵达河内。',py:'Dàibiǎotuán jiāng yú míngtiān shàngwǔ dǐdá Hénèi.',vn:'Đoàn đại biểu sẽ đến Hà Nội vào sáng mai.'}
   ],
   colloFull:[
     {zh:'抵达终点',py:'dǐdá zhōngdiǎn',vn:'tới điểm cuối'},
     {zh:'抵达目的地',py:'dǐdá mùdìdì',vn:'tới nơi cần đến'},
     {zh:'顺利抵达',py:'shùnlì dǐdá',vn:'đến nơi thuận lợi'},
     {zh:'安全抵达',py:'ānquán dǐdá',vn:'đến nơi an toàn'},
     {zh:'抵达机场',py:'dǐdá jīchǎng',vn:'đến sân bay'}
   ],
   patterns:[
     {s:'抵达 + nơi chốn',m:'Đến …, tới … (trang trọng)'},
     {s:'将于 + thời gian + 抵达 + nơi chốn',m:'Sẽ đến … vào lúc … (văn thông báo)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Máy bay đã hạ cánh an toàn rồi, mau báo cho bố mẹ biết con đã đến nơi bình an.',answer:'飞机已经安全降落了，快告诉爸妈你已经平安抵达了。',answerPy:'Fēijī yǐjīng ānquán jiàngluò le, kuài gàosu bà-mā nǐ yǐjīng píng\'ān dǐdá le.',
      note:'已经……了 (ôn HSK 3–4); 平安 / 安全 + 抵达.',pair:'已经……了'},
     {promptLang:'vi',prompt:'Dù đường có tắc đến đâu, chúng tôi cũng phải đến nơi trước 8 giờ.',answer:'不管路上多堵，我们都得在八点以前抵达。',answerPy:'Bùguǎn lù shang duō dǔ, wǒmen dōu děi zài bā diǎn yǐqián dǐdá.',
      note:'不管……都…… (ôn HSK 4); 得 děi = phải.',pair:'不管……都……'}
   ]},

  {n:29,zh:'终点',py:'zhōngdiǎn',pos:'Danh từ',vn:'điểm cuối cùng, nơi đến',hv:'chung điểm',em:'🎌',lesson:1,
   explain:['Danh từ: điểm kết thúc của một hành trình, chặng đua: 终点站 (bến cuối), 到达终点, 冲过终点 (lao qua vạch đích).','Trái nghĩa: 起点 (điểm xuất phát). Nghĩa bóng: 人生的终点 (điểm cuối đời người).'],
   usage:'抵达 / 到达 / 冲过 + 终点; 终点站; 从起点到终点.',
   collo:['抵达终点','终点站','冲过终点','从起点到终点'],
   ex_zh:'汽车抵达终点后，能自动停泊入位。',ex_py:'Qìchē dǐdá zhōngdiǎn hòu, néng zìdòng tíngbó rùwèi.',ex_vn:'Sau khi ô tô tới điểm cuối, nó có thể tự động đỗ vào chỗ.',
   exList:[
     {zh:'汽车抵达终点后，能自动停泊入位。',py:'Qìchē dǐdá zhōngdiǎn hòu, néng zìdòng tíngbó rùwèi.',vn:'Sau khi ô tô tới điểm cuối, nó có thể tự động đỗ vào chỗ.'},
     {zh:'这趟公交车的终点站是火车站。',py:'Zhè tàng gōngjiāochē de zhōngdiǎnzhàn shì huǒchēzhàn.',vn:'Bến cuối của chuyến xe buýt này là ga tàu.'},
     {zh:'他咬紧牙关，第一个冲过了终点。',py:'Tā yǎojǐn yáguān, dì-yī ge chōngguòle zhōngdiǎn.',vn:'Anh ấy nghiến chặt răng, là người đầu tiên lao qua vạch đích.'}
   ],
   colloFull:[
     {zh:'抵达终点',py:'dǐdá zhōngdiǎn',vn:'tới điểm cuối'},
     {zh:'终点站',py:'zhōngdiǎnzhàn',vn:'bến cuối'},
     {zh:'冲过终点',py:'chōngguò zhōngdiǎn',vn:'lao qua vạch đích'},
     {zh:'从起点到终点',py:'cóng qǐdiǎn dào zhōngdiǎn',vn:'từ điểm xuất phát đến đích'},
     {zh:'到达终点',py:'dàodá zhōngdiǎn',vn:'về đích'}
   ],
   patterns:[
     {s:'抵达 / 冲过 + 终点',m:'Tới / lao qua đích'},
     {s:'从起点到终点',m:'Từ điểm xuất phát đến điểm cuối'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy không giành được thứ hạng, nhưng cô ấy vẫn kiên trì chạy về đích.',answer:'虽然没有拿到名次，但是她还是坚持跑到了终点。',answerPy:'Suīrán méiyǒu nádào míngcì, dànshì tā háishi jiānchí pǎodàole zhōngdiǎn.',
      note:'虽然……但是…… (ôn HSK 4); 名次 ôn HSK 6 bài 17.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Xe buýt hễ đến bến cuối là tài xế lại nhắc hành khách mang theo đồ đạc của mình.',answer:'公交车一到终点站，司机就提醒乘客带好自己的东西。',answerPy:'Gōngjiāochē yí dào zhōngdiǎnzhàn, sījī jiù tíxǐng chéngkè dàihǎo zìjǐ de dōngxi.',
      note:'一……就…… (ôn HSK 4); 提醒 + người + V.',pair:'一……就……'}
   ]},

  {n:30,zh:'配备',py:'pèibèi',pos:'Động từ',vn:'trang bị',hv:'phối bị',em:'🧰',lesson:1,
   explain:['Động từ: phân phối, lắp đặt đầy đủ (người, thiết bị, vật dụng) theo nhu cầu: 配备设备, 配备人员.','Hay dùng dạng 为 / 给 + A + 配备 + B; hoặc làm định ngữ: 车上配备的系统 (hệ thống được trang bị trên xe). Cũng là danh từ: 现代化的配备.'],
   usage:'为 / 给 + N + 配备 + 设备 / 人员; ……上配备的 + N; 配备齐全.',
   collo:['配备设备','配备人员','车上配备的系统','配备齐全'],
   ex_zh:'车上配备的高科技系统能使车辆自动停泊入位。',ex_py:'Chē shang pèibèi de gāo kējì xìtǒng néng shǐ chēliàng zìdòng tíngbó rùwèi.',ex_vn:'Hệ thống công nghệ cao được trang bị trên xe có thể giúp xe tự động đỗ vào chỗ.',
   exList:[
     {zh:'车上配备的高科技系统能使车辆自动停泊入位。',py:'Chē shang pèibèi de gāo kējì xìtǒng néng shǐ chēliàng zìdòng tíngbó rùwèi.',vn:'Hệ thống công nghệ cao được trang bị trên xe có thể giúp xe tự động đỗ vào chỗ.'},
     {zh:'为了提高工作效率，公司为员工配备了最新的办公设备。',py:'Wèile tígāo gōngzuò xiàolǜ, gōngsī wèi yuángōng pèibèile zuì xīn de bàngōng shèbèi.',vn:'Để nâng cao năng suất làm việc, công ty đã trang bị cho nhân viên thiết bị văn phòng mới nhất.'},
     {zh:'每间教室都配备了空调和投影仪。',py:'Měi jiān jiàoshì dōu pèibèile kōngtiáo hé tóuyǐngyí.',vn:'Phòng học nào cũng được trang bị điều hòa và máy chiếu.'}
   ],
   colloFull:[
     {zh:'配备设备',py:'pèibèi shèbèi',vn:'trang bị thiết bị'},
     {zh:'配备人员',py:'pèibèi rényuán',vn:'bố trí nhân sự'},
     {zh:'车上配备的系统',py:'chē shang pèibèi de xìtǒng',vn:'hệ thống được trang bị trên xe'},
     {zh:'配备齐全',py:'pèibèi qíquán',vn:'trang bị đầy đủ'},
     {zh:'为员工配备电脑',py:'wèi yuángōng pèibèi diànnǎo',vn:'trang bị máy tính cho nhân viên'}
   ],
   patterns:[
     {s:'为 / 给 + A + 配备 + B',m:'Trang bị B cho A'},
     {s:'……上配备的 + N',m:'N được trang bị trên …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ký túc xá mới được trang bị đầy đủ, cái gì cũng có.',answer:'新宿舍配备齐全，什么都有。',answerPy:'Xīn sùshè pèibèi qíquán, shénme dōu yǒu.',
      note:'Đại từ nghi vấn dùng phiếm chỉ: 什么都…… (ôn HSK 4).',pair:'什么都'},
     {promptLang:'vi',prompt:'Nhà trường đã bố trí cho mỗi lớp một giáo viên tâm lý.',answer:'学校给每个班都配备了一名心理老师。',answerPy:'Xuéxiào gěi měi ge bān dōu pèibèile yì míng xīnlǐ lǎoshī.',
      note:'给 + A + 配备 + B; 每……都…… (ôn HSK 3–4).',pair:'每……都……'}
   ]},

  {n:31,zh:'停泊',py:'tíngbó',pos:'Động từ',vn:'đỗ, cập bến, neo đậu',hv:'đình bạc',em:'⚓',lesson:1,
   explain:['Động từ: (tàu thuyền) dừng lại, neo đậu ở bến: 船停泊在港口. Trong bài dùng mở rộng cho ô tô: 停泊入位 (đỗ vào vị trí).','泊 ở đây đọc bó (neo thuyền), khác 泊 pō trong 湖泊 (hồ — ôn bài 10). Nói về xe trong khẩu ngữ dùng 停车.'],
   usage:'N (船 / 车) + 停泊 + 在 + nơi chốn; nơi chốn + 停泊着 + N; 停泊入位.',
   collo:['停泊在港口','停泊入位','船只停泊','停泊的船'],
   ex_zh:'高科技系统能使车辆自动停泊入位。',ex_py:'Gāo kējì xìtǒng néng shǐ chēliàng zìdòng tíngbó rùwèi.',ex_vn:'Hệ thống công nghệ cao có thể giúp xe tự động đỗ vào vị trí.',
   exList:[
     {zh:'高科技系统能使车辆自动停泊入位。',py:'Gāo kējì xìtǒng néng shǐ chēliàng zìdòng tíngbó rùwèi.',vn:'Hệ thống công nghệ cao có thể giúp xe tự động đỗ vào vị trí.'},
     {zh:'港口里停泊着几十艘大大小小的船。',py:'Gǎngkǒu li tíngbózhe jǐ shí sōu dàdàxiǎoxiǎo de chuán.',vn:'Trong cảng neo đậu mấy chục chiếc tàu thuyền lớn nhỏ.'},
     {zh:'台风来临之前，渔船都回到码头停泊了。',py:'Táifēng láilín zhīqián, yúchuán dōu huídào mǎtóu tíngbó le.',vn:'Trước khi bão đến, tàu cá đều đã về bến neo đậu.'}
   ],
   colloFull:[
     {zh:'停泊在港口',py:'tíngbó zài gǎngkǒu',vn:'neo đậu ở cảng'},
     {zh:'停泊入位',py:'tíngbó rùwèi',vn:'đỗ vào vị trí'},
     {zh:'船只停泊',py:'chuánzhī tíngbó',vn:'tàu thuyền neo đậu'},
     {zh:'停泊的船',py:'tíngbó de chuán',vn:'con thuyền đang neo'},
     {zh:'停泊在码头',py:'tíngbó zài mǎtóu',vn:'cập ở bến'}
   ],
   patterns:[
     {s:'N + 停泊 + 在 + nơi chốn',m:'… neo đậu / đỗ ở …'},
     {s:'nơi chốn + 停泊着 + N',m:'Ở … có … đang neo đậu (câu tồn hiện)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bên bờ sông neo đậu mấy chiếc thuyền nhỏ.',answer:'河边停泊着几条小船。',answerPy:'Hébiān tíngbózhe jǐ tiáo xiǎo chuán.',
      note:'Câu tồn hiện: nơi chốn + V着 + N (ôn HSK 4).',pair:'V着 (tồn hiện)'},
     {promptLang:'vi',prompt:'Sau khi tàu cập cảng, hành khách lần lượt xuống tàu.',answer:'轮船在港口停泊以后，乘客们陆续下了船。',answerPy:'Lúnchuán zài gǎngkǒu tíngbó yǐhòu, chéngkèmen lùxù xiàle chuán.',
      note:'陆续 = lần lượt (HSK 5); ……以后.',pair:'陆续'}
   ]},

  {n:32,zh:'力求',py:'lìqiú',pos:'Động từ',vn:'cố gắng đạt tới, làm hết sức mình',hv:'lực cầu',em:'💪',lesson:1,
   explain:['Động từ: dốc sức, cố gắng hết mức để đạt được một yêu cầu cao: 力求完美, 力求准确.','Phía sau là động từ / tính từ chỉ mục tiêu (做到, 达到, 实现, 完美, 准确, 简洁). Văn viết, gần 尽力.'],
   usage:'力求 + V / Adj (完美 / 准确 / 做到 / 达到 / 实现); ……，力求 + 达到 + ……效果.',
   collo:['力求完美','力求准确','力求实现','力求达到最好的效果'],
   ex_zh:'这就是人类力求实现的汽车自动行驶。',ex_py:'Zhè jiù shì rénlèi lìqiú shíxiàn de qìchē zìdòng xíngshǐ.',ex_vn:'Đó chính là việc ô tô tự lái mà loài người đang dốc sức hiện thực hóa.',
   exList:[
     {zh:'这就是人类力求实现的汽车自动行驶。',py:'Zhè jiù shì rénlèi lìqiú shíxiàn de qìchē zìdòng xíngshǐ.',vn:'Đó chính là việc ô tô tự lái mà loài người đang dốc sức hiện thực hóa.'},
     {zh:'演出前我们认真排练，力求达到最好的演出效果。',py:'Yǎnchū qián wǒmen rènzhēn páiliàn, lìqiú dádào zuì hǎo de yǎnchū xiàoguǒ.',vn:'Trước buổi diễn, chúng tôi tập luyện nghiêm túc, cố gắng đạt hiệu quả biểu diễn tốt nhất.'},
     {zh:'翻译的时候要力求准确，不能随意增减内容。',py:'Fānyì de shíhou yào lìqiú zhǔnquè, bù néng suíyì zēngjiǎn nèiróng.',vn:'Khi dịch phải cố gắng chính xác, không được tùy tiện thêm bớt nội dung.'}
   ],
   colloFull:[
     {zh:'力求完美',py:'lìqiú wánměi',vn:'cố gắng hoàn hảo'},
     {zh:'力求准确',py:'lìqiú zhǔnquè',vn:'cố gắng chính xác'},
     {zh:'力求实现',py:'lìqiú shíxiàn',vn:'dốc sức thực hiện'},
     {zh:'力求达到最好的效果',py:'lìqiú dádào zuì hǎo de xiàoguǒ',vn:'cố đạt hiệu quả tốt nhất'},
     {zh:'力求简洁',py:'lìqiú jiǎnjié',vn:'cố gắng ngắn gọn'}
   ],
   patterns:[
     {s:'力求 + Adj (完美 / 准确)',m:'Cố gắng hết sức để …'},
     {s:'……，力求 + 达到 / 做到 + ……',m:'…, nhằm đạt được … (vế sau nêu mục tiêu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy làm việc gì cũng cố đạt tới hoàn hảo, nên thường xuyên thức khuya.',answer:'他做什么事都力求完美，所以经常熬夜。',answerPy:'Tā zuò shénme shì dōu lìqiú wánměi, suǒyǐ jīngcháng áoyè.',
      note:'什么……都…… (ôn HSK 4); 熬夜 (熬 ôn HSK 6 bài 2).',pair:'所以'},
     {promptLang:'vi',prompt:'Bài viết phải cố gắng ngắn gọn, rõ ràng, để người đọc vừa đọc là hiểu.',answer:'文章要力求简洁明了，让读者一看就懂。',answerPy:'Wénzhāng yào lìqiú jiǎnjié míngliǎo, ràng dúzhě yí kàn jiù dǒng.',
      note:'一……就…… (ôn HSK 4); 简洁 = ngắn gọn (扩展 bài này: 啰唆 — 简洁).',pair:'一……就……'}
   ]},

  {n:33,zh:'丙',py:'bǐng',pos:'Danh từ',vn:'thứ ba, Bính',hv:'bính',em:'3️⃣',lesson:1,
   explain:['Danh từ: can thứ ba trong Thiên can (甲乙丙丁…), dùng đánh số thứ tự = thứ ba (tương đương "C", "3"): 丙 融合数字生活方式.','Trong can chi đọc Hán Việt là "Bính": 丙午年 (năm Bính Ngọ). Cũng dùng xếp loại: 丙级, 丙等 (hạng ba). Xem Chú thích 2: 甲乙丙丁…….'],
   usage:'甲、乙、丙、丁……; 丙级 / 丙等 (hạng ba); 丙 + địa chi (丙午, 丙申) = năm Bính ….',
   collo:['甲乙丙丁','丙级','丙等','丙午年'],
   ex_zh:'文章分为甲、乙、丙、丁四个部分，丙部分讲的是数字生活方式。',ex_py:'Wénzhāng fēnwéi jiǎ, yǐ, bǐng, dīng sì ge bùfen, bǐng bùfen jiǎng de shì shùzì shēnghuó fāngshì.',ex_vn:'Bài viết chia làm bốn phần Giáp, Ất, Bính, Đinh; phần Bính (thứ ba) nói về lối sống số.',
   exList:[
     {zh:'文章分为甲、乙、丙、丁四个部分，丙部分讲的是数字生活方式。',py:'Wénzhāng fēnwéi jiǎ, yǐ, bǐng, dīng sì ge bùfen, bǐng bùfen jiǎng de shì shùzì shēnghuó fāngshì.',vn:'Bài viết chia làm bốn phần Giáp, Ất, Bính, Đinh; phần Bính (thứ ba) nói về lối sống số.'},
     {zh:'这次考试他的成绩只是丙等，他很不满意。',py:'Zhè cì kǎoshì tā de chéngjì zhǐshì bǐngděng, tā hěn bù mǎnyì.',vn:'Kỳ thi lần này thành tích của cậu ấy chỉ xếp loại ba, cậu ấy rất không hài lòng.'},
     {zh:'2026年是农历丙午年，也就是马年。',py:'Èr líng èr liù nián shì nónglì bǐngwǔ nián, yě jiù shì mǎ nián.',vn:'Năm 2026 là năm Bính Ngọ theo âm lịch, tức là năm con ngựa.'}
   ],
   colloFull:[
     {zh:'甲乙丙丁',py:'jiǎ yǐ bǐng dīng',vn:'Giáp Ất Bính Đinh (thứ tự 1–2–3–4)'},
     {zh:'丙级',py:'bǐngjí',vn:'hạng ba, cấp C'},
     {zh:'丙等',py:'bǐngděng',vn:'loại ba'},
     {zh:'丙午年',py:'bǐngwǔ nián',vn:'năm Bính Ngọ'},
     {zh:'丙方',py:'bǐngfāng',vn:'bên thứ ba (bên C) trong hợp đồng'}
   ],
   patterns:[
     {s:'甲、乙、丙……',m:'Thứ nhất, thứ hai, thứ ba … (đánh số thứ tự)'},
     {s:'丙 + địa chi (午 / 申…) + 年',m:'Năm Bính … (can chi)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bản hợp đồng này có ba bên: bên A, bên B và bên C.',answer:'这份合同有三方：甲方、乙方和丙方。',answerPy:'Zhè fèn hétong yǒu sān fāng: jiǎfāng, yǐfāng hé bǐngfāng.',
      note:'甲方 / 乙方 / 丙方 = bên A / B / C trong hợp đồng; lượng từ 份 (ôn HSK 4).',pair:'份'},
     {promptLang:'vi',prompt:'Trong ba phương án Giáp, Ất, Bính, tôi thấy phương án Bính khả thi nhất.',answer:'在甲、乙、丙三个方案中，我觉得丙方案最可行。',answerPy:'Zài jiǎ, yǐ, bǐng sān ge fāng\'àn zhōng, wǒ juéde bǐng fāng\'àn zuì kěxíng.',
      note:'在……中 = trong số …; 最 + Adj.',pair:'在……中'}
   ]},

  {n:34,zh:'融合',py:'rónghé',pos:'Động từ',vn:'hợp nhất, hòa nhập, hội nhập',hv:'dung hợp',em:'🔗',lesson:1,
   explain:['Động từ: những thứ khác nhau hòa vào nhau thành một thể thống nhất: 融合数字生活方式, 文化融合; 融为一体 = hòa làm một (trong bài).','Từ có dấu * trong sách: ngoài đề cương HSK, chỉ cần hiểu. Phân biệt 融化 (tan chảy) — cùng chữ 融 nhưng khác nghĩa.'],
   usage:'融合 + N; A 与 B + 融合 (在一起); 融为一体; 文化 / 民族 + 融合.',
   collo:['融合数字生活方式','文化融合','融为一体','相互融合'],
   ex_zh:'数字生活方式将完全与汽车融为一体。',ex_py:'Shùzì shēnghuó fāngshì jiāng wánquán yǔ qìchē róng wéi yìtǐ.',ex_vn:'Lối sống số sẽ hoàn toàn hòa làm một với ô tô.',
   exList:[
     {zh:'数字生活方式将完全与汽车融为一体。',py:'Shùzì shēnghuó fāngshì jiāng wánquán yǔ qìchē róng wéi yìtǐ.',vn:'Lối sống số sẽ hoàn toàn hòa làm một với ô tô.'},
     {zh:'这座城市的建筑融合了东方和西方的风格。',py:'Zhè zuò chéngshì de jiànzhù rónghéle dōngfāng hé xīfāng de fēnggé.',vn:'Kiến trúc của thành phố này hòa quyện phong cách phương Đông và phương Tây.'},
     {zh:'越南菜融合了多种饮食文化，味道很丰富。',py:'Yuènán cài rónghéle duō zhǒng yǐnshí wénhuà, wèidao hěn fēngfù.',vn:'Món ăn Việt Nam kết hợp nhiều nền văn hóa ẩm thực, hương vị rất phong phú.'}
   ],
   colloFull:[
     {zh:'融合数字生活方式',py:'rónghé shùzì shēnghuó fāngshì',vn:'hòa nhập lối sống số'},
     {zh:'文化融合',py:'wénhuà rónghé',vn:'giao thoa văn hóa'},
     {zh:'融为一体',py:'róng wéi yìtǐ',vn:'hòa làm một'},
     {zh:'相互融合',py:'xiānghù rónghé',vn:'hòa quyện vào nhau'},
     {zh:'民族融合',py:'mínzú rónghé',vn:'hòa hợp dân tộc'}
   ],
   patterns:[
     {s:'A + 融合了 + B 和 C',m:'A kết hợp / hòa quyện B và C'},
     {s:'A + 与 + B + 融为一体',m:'A hòa làm một với B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài hát này hòa quyện âm nhạc truyền thống và âm nhạc hiện đại, rất được giới trẻ yêu thích.',answer:'这首歌融合了传统音乐和现代音乐，很受年轻人欢迎。',answerPy:'Zhè shǒu gē rónghéle chuántǒng yīnyuè hé xiàndài yīnyuè, hěn shòu niánqīngrén huānyíng.',
      note:'受 + người + 欢迎 = được … yêu thích (ôn HSK 4).',pair:'受……欢迎'},
     {promptLang:'vi',prompt:'Ngôi nhà nhỏ ấy dường như hòa làm một với núi rừng xung quanh.',answer:'那座小房子仿佛与周围的山林融为一体。',answerPy:'Nà zuò xiǎo fángzi fǎngfú yǔ zhōuwéi de shānlín róng wéi yìtǐ.',
      note:'仿佛 = dường như (HSK 5); 与……融为一体.',pair:'仿佛'}
   ]},

  {n:35,zh:'引擎',py:'yǐnqíng',pos:'Danh từ',vn:'máy, động cơ',hv:'dẫn kình',em:'⚙️',lesson:1,
   explain:['Danh từ: động cơ (phiên âm từ tiếng Anh "engine"): 汽车引擎, 发动引擎. Gần nghĩa 发动机.','Nghĩa mở rộng: 搜索引擎 = công cụ tìm kiếm (search engine); nghĩa bóng: động lực thúc đẩy — 经济增长的引擎.'],
   usage:'汽车 / 飞机 + 引擎; 发动 / 关掉 + 引擎; 搜索引擎; ……的引擎 (động lực).',
   collo:['搜索引擎','汽车引擎','发动引擎','增长的引擎'],
   ex_zh:'某家著名的搜索引擎公司意识到，为个人驾驶提供服务蕴藏着巨大的商机。',ex_py:'Mǒu jiā zhùmíng de sōusuǒ yǐnqíng gōngsī yìshí dào, wèi gèrén jiàshǐ tígōng fúwù yùncángzhe jùdà de shāngjī.',ex_vn:'Một công ty công cụ tìm kiếm nổi tiếng nọ nhận ra rằng cung cấp dịch vụ cho việc lái xe cá nhân ẩn chứa cơ hội kinh doanh rất lớn.',
   exList:[
     {zh:'某家著名的搜索引擎公司意识到，为个人驾驶提供服务蕴藏着巨大的商机。',py:'Mǒu jiā zhùmíng de sōusuǒ yǐnqíng gōngsī yìshí dào, wèi gèrén jiàshǐ tígōng fúwù yùncángzhe jùdà de shāngjī.',vn:'Một công ty công cụ tìm kiếm nổi tiếng nọ nhận ra rằng cung cấp dịch vụ cho việc lái xe cá nhân ẩn chứa cơ hội kinh doanh rất lớn.'},
     {zh:'司机发动了引擎，车子慢慢开出了停车场。',py:'Sījī fādòngle yǐnqíng, chēzi mànmàn kāichūle tíngchēchǎng.',vn:'Tài xế nổ máy, chiếc xe từ từ chạy ra khỏi bãi đỗ.'},
     {zh:'遇到不懂的词，我习惯先用搜索引擎查一下。',py:'Yùdào bù dǒng de cí, wǒ xíguàn xiān yòng sōusuǒ yǐnqíng chá yíxià.',vn:'Gặp từ không hiểu, tôi quen dùng công cụ tìm kiếm tra trước.'}
   ],
   colloFull:[
     {zh:'搜索引擎',py:'sōusuǒ yǐnqíng',vn:'công cụ tìm kiếm'},
     {zh:'汽车引擎',py:'qìchē yǐnqíng',vn:'động cơ ô tô'},
     {zh:'发动引擎',py:'fādòng yǐnqíng',vn:'nổ máy'},
     {zh:'增长的引擎',py:'zēngzhǎng de yǐnqíng',vn:'động lực tăng trưởng'},
     {zh:'关掉引擎',py:'guāndiào yǐnqíng',vn:'tắt máy'}
   ],
   patterns:[
     {s:'发动 / 关掉 + 引擎',m:'Nổ máy / tắt máy'},
     {s:'搜索引擎',m:'Công cụ tìm kiếm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dừng xe chờ người thì tốt nhất nên tắt máy, vừa tiết kiệm xăng vừa bảo vệ môi trường.',answer:'停车等人的时候最好关掉引擎，既省油又环保。',answerPy:'Tíngchē děng rén de shíhou zuìhǎo guāndiào yǐnqíng, jì shěng yóu yòu huánbǎo.',
      note:'最好 (ôn HSK 4); 既……又…….',pair:'既……又……'},
     {promptLang:'vi',prompt:'Ngành du lịch đã trở thành động lực tăng trưởng kinh tế của thành phố này.',answer:'旅游业已经成为这座城市经济增长的引擎。',answerPy:'Lǚyóuyè yǐjīng chéngwéi zhè zuò chéngshì jīngjì zēngzhǎng de yǐnqíng.',
      note:'成为 + N = trở thành (ôn HSK 4–5).',pair:'成为'}
   ]},

  {n:36,zh:'行列',py:'hángliè',pos:'Danh từ',vn:'hàng ngũ, đội ngũ',hv:'hàng liệt',em:'👥',lesson:1,
   explain:['Danh từ: hàng lối (người, vật xếp thành hàng); nghĩa bóng hay dùng: hàng ngũ, đội ngũ những người / tổ chức cùng làm một việc: 加入……的行列.','行 đọc háng (hàng lối), không đọc xíng. Cụm cố định: 加入(到) / 进入 + ……的行列.'],
   usage:'加入(到) + ……的行列; 进入 + ……的行列; 行列 + 整齐.',
   collo:['加入研发的行列','加入到……的行列','进入先进行列','志愿者的行列'],
   ex_zh:'他们迫不及待地加入到汽车研发的行列。',ex_py:'Tāmen pòbùjídài de jiārù dào qìchē yánfā de hángliè.',ex_vn:'Họ nóng lòng gia nhập hàng ngũ nghiên cứu phát triển ô tô.',
   exList:[
     {zh:'他们迫不及待地加入到汽车研发的行列。',py:'Tāmen pòbùjídài de jiārù dào qìchē yánfā de hángliè.',vn:'Họ nóng lòng gia nhập hàng ngũ nghiên cứu phát triển ô tô.'},
     {zh:'越来越多的大学生加入了志愿者的行列。',py:'Yuè lái yuè duō de dàxuéshēng jiārùle zhìyuànzhě de hángliè.',vn:'Ngày càng nhiều sinh viên gia nhập đội ngũ tình nguyện viên.'},
     {zh:'经过十年的努力，这所学校已经进入了全国名校的行列。',py:'Jīngguò shí nián de nǔlì, zhè suǒ xuéxiào yǐjīng jìnrùle quánguó míngxiào de hángliè.',vn:'Sau mười năm nỗ lực, ngôi trường này đã lọt vào hàng ngũ các trường danh tiếng toàn quốc.'}
   ],
   colloFull:[
     {zh:'加入研发的行列',py:'jiārù yánfā de hángliè',vn:'gia nhập hàng ngũ nghiên cứu phát triển'},
     {zh:'加入到……的行列',py:'jiārù dào …… de hángliè',vn:'gia nhập đội ngũ …'},
     {zh:'进入先进行列',py:'jìnrù xiānjìn hángliè',vn:'lọt vào hàng tiên tiến'},
     {zh:'志愿者的行列',py:'zhìyuànzhě de hángliè',vn:'đội ngũ tình nguyện viên'},
     {zh:'行列整齐',py:'hángliè zhěngqí',vn:'hàng lối ngay ngắn'}
   ],
   patterns:[
     {s:'加入(到) + ……的行列',m:'Gia nhập hàng ngũ / đội ngũ …'},
     {s:'进入 + ……的行列',m:'Lọt vào hàng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi tốt nghiệp, cô ấy gia nhập đội ngũ giáo viên vùng núi.',answer:'毕业以后，她加入了山区教师的行列。',answerPy:'Bìyè yǐhòu, tā jiārùle shānqū jiàoshī de hángliè.',
      note:'……以后 (ôn HSK 3); 加入 + ……的行列.',pair:'以后'},
     {promptLang:'vi',prompt:'Thấy mọi người đều bắt đầu chạy bộ, anh ấy cũng không kìm được mà gia nhập đội ngũ chạy bộ.',answer:'看到大家都开始跑步，他也忍不住加入了跑步者的行列。',answerPy:'Kàndào dàjiā dōu kāishǐ pǎobù, tā yě rěn bu zhù jiārùle pǎobùzhě de hángliè.',
      note:'忍不住 = không kìm được (ôn HSK 5).',pair:'忍不住'}
   ]},

  {n:37,zh:'潮流',py:'cháoliú',pos:'Danh từ',vn:'trào lưu, xu hướng',hv:'triều lưu',em:'🌊',lesson:1,
   explain:['Danh từ: nghĩa gốc là dòng thủy triều; nghĩa thường dùng: xu thế phát triển của xã hội, trào lưu thời thượng: 时代潮流, 时尚潮流.','Hay đi với 跟上 / 顺应 / 赶 / 引领 + 潮流; 无法阻挡的潮流 = xu thế không gì cản nổi.'],
   usage:'(无法阻挡的 / 时代的) 潮流; 跟上 / 顺应 / 引领 + 潮流; 赶潮流 (chạy theo mốt).',
   collo:['无法阻挡的潮流','时代潮流','跟上潮流','赶潮流'],
   ex_zh:'车企与电脑公司合作几乎成了无法阻挡的潮流。',ex_py:'Chēqǐ yǔ diànnǎo gōngsī hézuò jīhū chéngle wúfǎ zǔdǎng de cháoliú.',ex_vn:'Việc hãng xe hợp tác với công ty máy tính gần như đã thành một xu thế không thể ngăn cản.',
   exList:[
     {zh:'车企与电脑公司合作几乎成了无法阻挡的潮流。',py:'Chēqǐ yǔ diànnǎo gōngsī hézuò jīhū chéngle wúfǎ zǔdǎng de cháoliú.',vn:'Việc hãng xe hợp tác với công ty máy tính gần như đã thành một xu thế không thể ngăn cản.'},
     {zh:'网上购物已经成为一种潮流。',py:'Wǎngshang gòuwù yǐjīng chéngwéi yì zhǒng cháoliú.',vn:'Mua sắm trực tuyến đã trở thành một trào lưu.'},
     {zh:'她不喜欢赶潮流，衣服只要舒服就行。',py:'Tā bù xǐhuan gǎn cháoliú, yīfu zhǐyào shūfu jiù xíng.',vn:'Cô ấy không thích chạy theo mốt, quần áo chỉ cần thoải mái là được.'}
   ],
   colloFull:[
     {zh:'无法阻挡的潮流',py:'wúfǎ zǔdǎng de cháoliú',vn:'xu thế không thể ngăn cản'},
     {zh:'时代潮流',py:'shídài cháoliú',vn:'trào lưu thời đại'},
     {zh:'跟上潮流',py:'gēnshang cháoliú',vn:'theo kịp xu hướng'},
     {zh:'赶潮流',py:'gǎn cháoliú',vn:'chạy theo mốt'},
     {zh:'引领潮流',py:'yǐnlǐng cháoliú',vn:'dẫn đầu xu hướng'}
   ],
   patterns:[
     {s:'……成了 / 成为 + (一种) 潮流',m:'… đã thành một trào lưu'},
     {s:'跟上 / 顺应 / 引领 + 潮流',m:'Theo kịp / thuận theo / dẫn đầu xu hướng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không theo kịp xu hướng thời đại, doanh nghiệp rất dễ bị đào thải.',answer:'如果跟不上时代潮流，企业很容易被淘汰。',answerPy:'Rúguǒ gēn bu shàng shídài cháoliú, qǐyè hěn róngyì bèi táotài.',
      note:'Bổ ngữ khả năng 跟不上 (ôn HSK 4–5); 淘汰 ôn HSK 6 bài 12.',pair:'跟不上'},
     {promptLang:'vi',prompt:'Ông tôi hơn 70 tuổi rồi mà vẫn theo trào lưu học dùng điện thoại thông minh.',answer:'我爷爷七十多岁了，还赶潮流学用智能手机。',answerPy:'Wǒ yéye qīshí duō suì le, hái gǎn cháoliú xué yòng zhìnéng shǒujī.',
      note:'还 = vẫn còn (hàm ý ngạc nhiên); 智能 ôn HSK 6 bài 9.',pair:'还'}
   ]},

  {n:38,zh:'助理',py:'zhùlǐ',pos:'Danh từ',vn:'trợ lý',hv:'trợ lý',em:'🤖',lesson:1,
   explain:['Danh từ: người giúp việc chính cho một người phụ trách (trợ lý giám đốc, trợ lý nghiên cứu): 经理助理, 私人助理.','Trong bài: 虚拟个人助理 = trợ lý cá nhân ảo (phần mềm). Gần nghĩa 助手 (bài 3) — 助手 rộng hơn, không phải chức danh.'],
   usage:'经理 / 总裁 + 助理; 私人 / 个人 + 助理; 虚拟助理; 当 / 做 + 助理.',
   collo:['虚拟个人助理','经理助理','私人助理','当助理'],
   ex_zh:'创造虚拟个人助理，为汽车用户提供路线、交通信息和日程安排等方面的帮助。',ex_py:'Chuàngzào xūnǐ gèrén zhùlǐ, wèi qìchē yònghù tígōng lùxiàn, jiāotōng xìnxī hé rìchéng ānpái děng fāngmiàn de bāngzhù.',ex_vn:'Tạo ra trợ lý cá nhân ảo, hỗ trợ người dùng ô tô về lộ trình, thông tin giao thông, sắp xếp lịch trình….',
   exList:[
     {zh:'创造虚拟个人助理，为汽车用户提供路线、交通信息和日程安排等方面的帮助。',py:'Chuàngzào xūnǐ gèrén zhùlǐ, wèi qìchē yònghù tígōng lùxiàn, jiāotōng xìnxī hé rìchéng ānpái děng fāngmiàn de bāngzhù.',vn:'Tạo ra trợ lý cá nhân ảo, hỗ trợ người dùng ô tô về lộ trình, thông tin giao thông, sắp xếp lịch trình….'},
     {zh:'她大学毕业后在一家公司当经理助理。',py:'Tā dàxué bìyè hòu zài yì jiā gōngsī dāng jīnglǐ zhùlǐ.',vn:'Sau khi tốt nghiệp đại học, cô ấy làm trợ lý giám đốc ở một công ty.'},
     {zh:'有事你可以先联系我的助理，她会安排时间。',py:'Yǒu shì nǐ kěyǐ xiān liánxì wǒ de zhùlǐ, tā huì ānpái shíjiān.',vn:'Có việc gì anh có thể liên hệ trợ lý của tôi trước, cô ấy sẽ sắp xếp thời gian.'}
   ],
   colloFull:[
     {zh:'虚拟个人助理',py:'xūnǐ gèrén zhùlǐ',vn:'trợ lý cá nhân ảo'},
     {zh:'经理助理',py:'jīnglǐ zhùlǐ',vn:'trợ lý giám đốc'},
     {zh:'私人助理',py:'sīrén zhùlǐ',vn:'trợ lý riêng'},
     {zh:'当助理',py:'dāng zhùlǐ',vn:'làm trợ lý'},
     {zh:'研究助理',py:'yánjiū zhùlǐ',vn:'trợ lý nghiên cứu'}
   ],
   patterns:[
     {s:'N (chức vụ) + 助理',m:'Trợ lý của …'},
     {s:'当 / 做 + 助理',m:'Làm trợ lý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trợ lý ảo trong điện thoại có thể nhắc tôi mỗi ngày phải làm những việc gì.',answer:'手机里的虚拟助理可以提醒我每天要做哪些事情。',answerPy:'Shǒujī li de xūnǐ zhùlǐ kěyǐ tíxǐng wǒ měi tiān yào zuò nǎxiē shìqing.',
      note:'提醒 + người + V (câu kiêm ngữ, ôn HSK 4).',pair:'提醒'},
     {promptLang:'vi',prompt:'Tuy chỉ là trợ lý, nhưng anh ấy làm việc còn chăm chỉ hơn cả giám đốc.',answer:'虽然只是个助理，他工作起来却比经理还认真。',answerPy:'Suīrán zhǐshì ge zhùlǐ, tā gōngzuò qǐlái què bǐ jīnglǐ hái rènzhēn.',
      note:'A 比 B 还 + Adj (ôn HSK 4); V + 起来 = khi làm ….',pair:'比……还……'}
   ]},

  {n:39,zh:'锦上添花',py:'jǐnshàng-tiānhuā',pos:'Thành ngữ',vn:'thêu hoa trên gấm, đã hay lại càng hay',hv:'cẩm thượng thiêm hoa',em:'🌸',lesson:1,
   explain:['Thành ngữ: 锦 = gấm; trên tấm gấm vốn đã đẹp lại thêu thêm hoa → đã tốt lại càng tốt hơn, chỉ là thêm phần hoàn mỹ.','Trong bài: 是必然的服务，而非锦上添花 = là dịch vụ tất yếu, chứ không phải thứ "thêm cho đẹp". Thành ngữ đối lập: 雪中送炭 (đưa than ngày tuyết = giúp lúc hoạn nạn).'],
   usage:'A 是 / 对……来说是 + 锦上添花; ……，而非锦上添花; 更是锦上添花.',
   collo:['而非锦上添花','锦上添花的作用','只是锦上添花','锦上添花与雪中送炭'],
   ex_zh:'在2050年将会是必然的服务，而非锦上添花。',ex_py:'Zài èr líng wǔ líng nián jiāng huì shì bìrán de fúwù, ér fēi jǐnshàng-tiānhuā.',ex_vn:'Vào năm 2050, đó sẽ là một dịch vụ tất yếu, chứ không chỉ là thứ thêu hoa trên gấm.',
   exList:[
     {zh:'在2050年将会是必然的服务，而非锦上添花。',py:'Zài èr líng wǔ líng nián jiāng huì shì bìrán de fúwù, ér fēi jǐnshàng-tiānhuā.',vn:'Vào năm 2050, đó sẽ là một dịch vụ tất yếu, chứ không chỉ là thứ thêu hoa trên gấm.'},
     {zh:'这件衣服已经很漂亮了，再配一条丝巾更是锦上添花。',py:'Zhè jiàn yīfu yǐjīng hěn piàoliang le, zài pèi yì tiáo sījīn gèng shì jǐnshàng-tiānhuā.',vn:'Bộ quần áo này đã rất đẹp rồi, phối thêm chiếc khăn lụa nữa lại càng đẹp hơn.'},
     {zh:'朋友有困难时，雪中送炭比锦上添花更难得。',py:'Péngyou yǒu kùnnan shí, xuězhōng-sòngtàn bǐ jǐnshàng-tiānhuā gèng nándé.',vn:'Khi bạn bè gặp khó khăn, giúp lúc hoạn nạn còn quý hơn thêu hoa trên gấm.'}
   ],
   colloFull:[
     {zh:'而非锦上添花',py:'ér fēi jǐnshàng-tiānhuā',vn:'chứ không phải thêu hoa trên gấm'},
     {zh:'锦上添花的作用',py:'jǐnshàng-tiānhuā de zuòyòng',vn:'tác dụng làm đẹp thêm'},
     {zh:'只是锦上添花',py:'zhǐshì jǐnshàng-tiānhuā',vn:'chỉ là để thêm phần đẹp'},
     {zh:'锦上添花与雪中送炭',py:'jǐnshàng-tiānhuā yǔ xuězhōng-sòngtàn',vn:'thêu hoa trên gấm và đưa than ngày tuyết'},
     {zh:'更是锦上添花',py:'gèng shì jǐnshàng-tiānhuā',vn:'lại càng hay hơn'}
   ],
   patterns:[
     {s:'A 是 B，而非锦上添花',m:'A là B (tất yếu), chứ không phải để làm đẹp thêm'},
     {s:'(再 + V) 更是锦上添花',m:'(Thêm …) lại càng hay hơn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món ăn đã rất ngon rồi, nếu gọi thêm chút rượu vang nữa thì lại càng tuyệt.',answer:'菜已经很好吃了，要是再来点儿葡萄酒，那就更是锦上添花了。',answerPy:'Cài yǐjīng hěn hǎochī le, yàoshi zài lái diǎnr pútaojiǔ, nà jiù gèng shì jǐnshàng-tiānhuā le.',
      note:'要是……(那)就…… (ôn HSK 4); 来 + 点儿 + N = gọi thêm ….',pair:'要是……就……'},
     {promptLang:'vi',prompt:'Đối với người nghèo, điều họ cần là giúp đỡ lúc khó khăn, chứ không phải thêu hoa trên gấm.',answer:'对穷人来说，他们需要的是雪中送炭，而不是锦上添花。',answerPy:'Duì qióngrén lái shuō, tāmen xūyào de shì xuězhōng-sòngtàn, ér bú shì jǐnshàng-tiānhuā.',
      note:'……是 A，而不是 B = là A, chứ không phải B (ôn HSK 5).',pair:'而不是'}
   ]},

  {n:40,zh:'保障',py:'bǎozhàng',pos:'Động từ',vn:'bảo đảm, bảo vệ',hv:'bảo chướng',em:'🛡️',lesson:1,
   explain:['Động từ: bảo vệ, bảo đảm (quyền lợi, an toàn, cuộc sống…) không bị xâm hại: 保障安全, 保障权益, 保障出行顺利.','Còn là danh từ: sự bảo đảm — 为……提供保障, 生活有保障. Phân biệt: 保证 = cam đoan / bảo đảm đạt yêu cầu; 保障 nhấn "che chắn, bảo vệ".'],
   usage:'保障 + 安全 / 权益 / 供应 / 出行顺利; 为 + N + 提供保障; ……有保障.',
   collo:['提供保障','保障安全','保障出行顺利','生活有保障'],
   ex_zh:'数字生活方式将为汽车的方便、安全使用提供保障。',ex_py:'Shùzì shēnghuó fāngshì jiāng wèi qìchē de fāngbiàn, ānquán shǐyòng tígōng bǎozhàng.',ex_vn:'Lối sống số sẽ mang lại sự bảo đảm cho việc sử dụng ô tô thuận tiện và an toàn.',
   exList:[
     {zh:'数字生活方式将为汽车的方便、安全使用提供保障。',py:'Shùzì shēnghuó fāngshì jiāng wèi qìchē de fāngbiàn, ānquán shǐyòng tígōng bǎozhàng.',vn:'Lối sống số sẽ mang lại sự bảo đảm cho việc sử dụng ô tô thuận tiện và an toàn.'},
     {zh:'保障出行顺利通畅，除了加快道路建设以外，每位司机规范操作也非常重要。',py:'Bǎozhàng chūxíng shùnlì tōngchàng, chúle jiākuài dàolù jiànshè yǐwài, měi wèi sījī guīfàn cāozuò yě fēicháng zhòngyào.',vn:'Để bảo đảm đi lại suôn sẻ thông suốt, ngoài việc đẩy nhanh xây dựng đường sá, việc mỗi tài xế thao tác đúng quy tắc cũng rất quan trọng.'},
     {zh:'有了这份工作，一家人的生活总算有了保障。',py:'Yǒule zhè fèn gōngzuò, yì jiā rén de shēnghuó zǒngsuàn yǒule bǎozhàng.',vn:'Có công việc này, cuộc sống cả nhà cuối cùng cũng được bảo đảm.'}
   ],
   colloFull:[
     {zh:'提供保障',py:'tígōng bǎozhàng',vn:'mang lại sự bảo đảm'},
     {zh:'保障安全',py:'bǎozhàng ānquán',vn:'bảo đảm an toàn'},
     {zh:'保障出行顺利',py:'bǎozhàng chūxíng shùnlì',vn:'bảo đảm đi lại suôn sẻ'},
     {zh:'生活有保障',py:'shēnghuó yǒu bǎozhàng',vn:'cuộc sống được bảo đảm'},
     {zh:'保障权益',py:'bǎozhàng quányì',vn:'bảo vệ quyền lợi'}
   ],
   patterns:[
     {s:'保障 + N (安全 / 权益)',m:'Bảo đảm, bảo vệ …'},
     {s:'为 + N + 提供保障',m:'Mang lại sự bảo đảm cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Pháp luật phải bảo vệ quyền lợi hợp pháp của mỗi công dân.',answer:'法律要保障每个公民的合法权益。',answerPy:'Fǎlǜ yào bǎozhàng měi ge gōngmín de héfǎ quányì.',
      note:'要 = phải (nêu yêu cầu, ôn HSK 3); 每个 + N.',pair:'要'},
     {promptLang:'vi',prompt:'Chỉ khi có sức khỏe tốt thì việc học mới được bảo đảm.',answer:'只有身体好，学习才有保障。',answerPy:'Zhǐyǒu shēntǐ hǎo, xuéxí cái yǒu bǎozhàng.',
      note:'只有……才…… (ôn HSK 4).',pair:'只有……才……'}
   ]},

  {n:41,zh:'丁',py:'dīng',pos:'Danh từ',vn:'người thứ tư, vật thứ tư; Đinh',hv:'đinh',em:'4️⃣',lesson:1,
   explain:['Danh từ: can thứ tư trong Thiên can (甲乙丙丁), dùng đánh số thứ tự = thứ tư: 丁 长途行车仍靠汽油. Can chi: 丁酉年 (năm Đinh Dậu).','Nghĩa khác thường gặp: miếng thái hạt lựu (鸡丁, 肉丁); nhân khẩu (人丁); họ Đinh (丁先生). Xem Chú thích 2: 甲乙丙丁…….'],
   usage:'甲、乙、丙、丁; 丁等 (loại tư); N + 丁 (鸡丁 = gà thái hạt lựu); 切成丁.',
   collo:['甲乙丙丁','丁等','鸡丁','丁酉年'],
   ex_zh:'甲乙丙丁四人的车分别为白色、银色、蓝色和红色。',ex_py:'Jiǎ yǐ bǐng dīng sì rén de chē fēnbié wéi báisè, yínsè, lánsè hé hóngsè.',ex_vn:'Xe của bốn người Giáp, Ất, Bính, Đinh gồm các màu trắng, bạc, xanh lam và đỏ (mỗi người một màu).',
   exList:[
     {zh:'甲乙丙丁四人的车分别为白色、银色、蓝色和红色。',py:'Jiǎ yǐ bǐng dīng sì rén de chē fēnbié wéi báisè, yínsè, lánsè hé hóngsè.',vn:'Xe của bốn người Giáp, Ất, Bính, Đinh gồm các màu trắng, bạc, xanh lam và đỏ (mỗi người một màu).'},
     {zh:'宫保鸡丁是一道很有名的四川菜。',py:'Gōngbǎo jīdīng shì yí dào hěn yǒumíng de Sìchuān cài.',vn:'Gà xào Cung Bảo (gà thái hạt lựu) là một món Tứ Xuyên rất nổi tiếng.'},
     {zh:'把土豆切成小丁，和肉一起炒。',py:'Bǎ tǔdòu qiēchéng xiǎo dīng, hé ròu yìqǐ chǎo.',vn:'Thái khoai tây thành hạt lựu nhỏ, xào cùng với thịt.'}
   ],
   colloFull:[
     {zh:'甲乙丙丁',py:'jiǎ yǐ bǐng dīng',vn:'Giáp Ất Bính Đinh (thứ tự 1–2–3–4)'},
     {zh:'丁等',py:'dīngděng',vn:'loại tư'},
     {zh:'鸡丁',py:'jīdīng',vn:'thịt gà thái hạt lựu'},
     {zh:'丁酉年',py:'dīngyǒu nián',vn:'năm Đinh Dậu'},
     {zh:'切成丁',py:'qiēchéng dīng',vn:'thái hạt lựu'}
   ],
   patterns:[
     {s:'甲、乙、丙、丁',m:'Thứ nhất – hai – ba – tư'},
     {s:'N + 丁 (鸡丁 / 肉丁)',m:'… thái hạt lựu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tổ Đinh là tổ cuối cùng, chiều mai mới báo cáo.',answer:'丁组是最后一个组，明天下午才汇报。',answerPy:'Dīng zǔ shì zuìhòu yí ge zǔ, míngtiān xiàwǔ cái huìbào.',
      note:'才 = mới (muộn hơn dự kiến, ôn HSK 4); 最后 + 一 + LT + N.',pair:'才'},
     {promptLang:'vi',prompt:'Mẹ thái cà rốt thành hạt lựu, sau đó cho vào cơm rang.',answer:'妈妈把胡萝卜切成丁，然后放进炒饭里。',answerPy:'Māma bǎ húluóbo qiēchéng dīng, ránhòu fàngjìn chǎofàn li.',
      note:'Câu 把 + V成 + N (ôn HSK 4); 然后 = sau đó.',pair:'把……V成……'}
   ]},

  {n:42,zh:'柴油',py:'cháiyóu',pos:'Danh từ',vn:'dầu diesel',hv:'sài du',em:'⛽',lesson:1,
   explain:['Danh từ: dầu diesel — nhiên liệu lọc từ dầu mỏ, dùng cho xe tải, máy kéo, tàu thuyền… (柴油车, 柴油机).','Nhóm từ có chữ 油 (热身 2): 石油, 汽油, 柴油, 花生油, 加油…. 柴 = củi.'],
   usage:'汽油和柴油; 柴油车 / 柴油机; 用 / 烧 + 柴油; 柴油价格.',
   collo:['汽油和柴油','柴油车','柴油机','柴油价格'],
   ex_zh:'2050年的汽车动力是什么？还是依然用汽油和柴油？',ex_py:'Èr líng wǔ líng nián de qìchē dònglì shì shénme? Háishi yīrán yòng qìyóu hé cháiyóu?',ex_vn:'Động lực của ô tô năm 2050 là gì? Hay là vẫn dùng xăng và dầu diesel?',
   exList:[
     {zh:'2050年的汽车动力是什么？还是依然用汽油和柴油？',py:'Èr líng wǔ líng nián de qìchē dònglì shì shénme? Háishi yīrán yòng qìyóu hé cháiyóu?',vn:'Động lực của ô tô năm 2050 là gì? Hay là vẫn dùng xăng và dầu diesel?'},
     {zh:'大货车一般都用柴油，而小汽车多用汽油。',py:'Dà huòchē yìbān dōu yòng cháiyóu, ér xiǎo qìchē duō yòng qìyóu.',vn:'Xe tải lớn thường dùng dầu diesel, còn xe con phần nhiều dùng xăng.'},
     {zh:'柴油车排放的废气污染比较严重。',py:'Cháiyóuchē páifàng de fèiqì wūrǎn bǐjiào yánzhòng.',vn:'Khí thải do xe chạy dầu diesel thải ra gây ô nhiễm khá nghiêm trọng.'}
   ],
   colloFull:[
     {zh:'汽油和柴油',py:'qìyóu hé cháiyóu',vn:'xăng và dầu diesel'},
     {zh:'柴油车',py:'cháiyóuchē',vn:'xe chạy dầu diesel'},
     {zh:'柴油机',py:'cháiyóujī',vn:'động cơ diesel'},
     {zh:'柴油价格',py:'cháiyóu jiàgé',vn:'giá dầu diesel'},
     {zh:'加柴油',py:'jiā cháiyóu',vn:'đổ dầu diesel'}
   ],
   patterns:[
     {s:'用 / 烧 + 柴油',m:'Dùng / chạy bằng dầu diesel'},
     {s:'柴油 + 车 / 机',m:'Xe / máy chạy dầu diesel'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc xe này chạy dầu diesel, anh đừng có đổ nhầm thành xăng đấy.',answer:'这辆车烧柴油，你可别加成汽油了。',answerPy:'Zhè liàng chē shāo cháiyóu, nǐ kě bié jiāchéng qìyóu le.',
      note:'可别……了 = đừng có … đấy (nhắc nhở); V + 成 (ôn HSK 4).',pair:'可别'},
     {promptLang:'vi',prompt:'Vì giá dầu diesel tăng, phí vận chuyển cũng tăng theo.',answer:'由于柴油涨价，运费也跟着涨了。',answerPy:'Yóuyú cháiyóu zhǎngjià, yùnfèi yě gēnzhe zhǎng le.',
      note:'跟着 + V = … theo (ôn HSK 4).',pair:'跟着'}
   ]},

  {n:43,zh:'遏制',py:'èzhì',pos:'Động từ',vn:'ngăn chặn, kiềm chế',hv:'át chế',em:'🚫',lesson:1,
   explain:['Động từ (văn viết): dùng sức kìm hãm, ngăn chặn không cho phát triển / lan rộng: 遏制汽油的使用, 遏制疾病蔓延.','Tân ngữ thường là điều tiêu cực hoặc cần hạn chế: 污染, 犯罪, 势头, 怒火. Gần nghĩa 抑制, 控制; mạnh hơn 限制.'],
   usage:'遏制 + N (使用 / 污染 / 蔓延 / 势头); 有效 / 及时 + 遏制; 得到遏制.',
   collo:['遏制汽油的使用','有效遏制','遏制污染','得到遏制'],
   ex_zh:'清洁能源的开发就是要遏制汽油、柴油的使用。',ex_py:'Qīngjié néngyuán de kāifā jiù shì yào èzhì qìyóu, cháiyóu de shǐyòng.',ex_vn:'Việc khai thác năng lượng sạch chính là để kiềm chế việc sử dụng xăng và dầu diesel.',
   exList:[
     {zh:'清洁能源的开发就是要遏制汽油、柴油的使用。',py:'Qīngjié néngyuán de kāifā jiù shì yào èzhì qìyóu, cháiyóu de shǐyòng.',vn:'Việc khai thác năng lượng sạch chính là để kiềm chế việc sử dụng xăng và dầu diesel.'},
     {zh:'政府采取了一系列措施，有效遏制了疾病的蔓延。',py:'Zhèngfǔ cǎiqǔle yíxìliè cuòshī, yǒuxiào èzhìle jíbìng de mànyán.',vn:'Chính phủ đã áp dụng một loạt biện pháp, ngăn chặn hiệu quả sự lây lan của dịch bệnh.'},
     {zh:'他努力遏制住心中的怒火，没有当场发脾气。',py:'Tā nǔlì èzhì zhù xīn zhōng de nùhuǒ, méiyǒu dāngchǎng fā píqi.',vn:'Anh ấy cố kìm cơn giận trong lòng, không nổi nóng ngay tại chỗ.'}
   ],
   colloFull:[
     {zh:'遏制汽油的使用',py:'èzhì qìyóu de shǐyòng',vn:'kiềm chế việc dùng xăng'},
     {zh:'有效遏制',py:'yǒuxiào èzhì',vn:'ngăn chặn hiệu quả'},
     {zh:'遏制污染',py:'èzhì wūrǎn',vn:'ngăn chặn ô nhiễm'},
     {zh:'得到遏制',py:'dédào èzhì',vn:'được kiềm chế'},
     {zh:'遏制势头',py:'èzhì shìtóu',vn:'chặn đà (phát triển xấu)'}
   ],
   patterns:[
     {s:'遏制 + N (使用 / 污染 / 蔓延)',m:'Ngăn chặn, kiềm chế …'},
     {s:'N + 得到(了)有效遏制',m:'… đã được kiềm chế hiệu quả'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không kịp thời ngăn chặn ô nhiễm, hậu quả sẽ vô cùng nghiêm trọng.',answer:'如果不及时遏制污染，后果将会非常严重。',answerPy:'Rúguǒ bù jíshí èzhì wūrǎn, hòuguǒ jiāng huì fēicháng yánzhòng.',
      note:'如果……，…… (ôn HSK 3–4); 将会 = sẽ (văn viết).',pair:'如果'},
     {promptLang:'vi',prompt:'Nhờ sự nỗ lực của mọi người, hiện tượng lãng phí trong trường đã được kiềm chế.',answer:'在大家的努力下，学校里的浪费现象得到了遏制。',answerPy:'Zài dàjiā de nǔlì xià, xuéxiào li de làngfèi xiànxiàng dédàole èzhì.',
      note:'在……下 (ôn HSK 5); 得到 + động từ hai âm tiết (得到遏制 / 得到解决).',pair:'在……下'}
   ]},

  {n:44,zh:'比重',py:'bǐzhòng',pos:'Danh từ',vn:'tỷ lệ, tỷ trọng',hv:'tỷ trọng',em:'📊',lesson:1,
   explain:['Danh từ: tỷ trọng — phần mà một bộ phận chiếm trong tổng thể: 电动汽车的比重, 所占的比重.','Nghĩa vật lý: tỷ trọng (khối lượng riêng). Hay đi với 占 / 提高 / 下降 / 增加 / 加大.'],
   usage:'A + 在 B 中 + 所占的比重; 比重 + 提高 / 增加 / 下降; 加大 + ……的比重.',
   collo:['电动汽车的比重','比重提高','所占比重','加大比重'],
   ex_zh:'作为日常交通工具，电动汽车的比重一定会提高。',ex_py:'Zuòwéi rìcháng jiāotōng gōngjù, diàndòng qìchē de bǐzhòng yídìng huì tígāo.',ex_vn:'Là phương tiện giao thông hằng ngày, tỷ trọng của ô tô điện chắc chắn sẽ tăng lên.',
   exList:[
     {zh:'作为日常交通工具，电动汽车的比重一定会提高。',py:'Zuòwéi rìcháng jiāotōng gōngjù, diàndòng qìchē de bǐzhòng yídìng huì tígāo.',vn:'Là phương tiện giao thông hằng ngày, tỷ trọng của ô tô điện chắc chắn sẽ tăng lên.'},
     {zh:'近年来，服务业在经济中所占的比重越来越大。',py:'Jìnnián lái, fúwùyè zài jīngjì zhōng suǒ zhàn de bǐzhòng yuè lái yuè dà.',vn:'Những năm gần đây, tỷ trọng của ngành dịch vụ trong nền kinh tế ngày càng lớn.'},
     {zh:'期末考试的成绩占总成绩的比重是百分之六十。',py:'Qīmò kǎoshì de chéngjì zhàn zǒng chéngjì de bǐzhòng shì bǎi fēn zhī liùshí.',vn:'Điểm thi cuối kỳ chiếm tỷ trọng 60% tổng điểm.'}
   ],
   colloFull:[
     {zh:'电动汽车的比重',py:'diàndòng qìchē de bǐzhòng',vn:'tỷ trọng ô tô điện'},
     {zh:'比重提高',py:'bǐzhòng tígāo',vn:'tỷ trọng tăng lên'},
     {zh:'所占比重',py:'suǒ zhàn bǐzhòng',vn:'tỷ trọng chiếm giữ'},
     {zh:'加大比重',py:'jiādà bǐzhòng',vn:'tăng tỷ trọng'},
     {zh:'比重下降',py:'bǐzhòng xiàjiàng',vn:'tỷ trọng giảm'}
   ],
   patterns:[
     {s:'A + 在 B 中所占的比重',m:'Tỷ trọng mà A chiếm trong B'},
     {s:'……的比重 + 提高 / 下降',m:'Tỷ trọng của … tăng / giảm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tỷ trọng người cao tuổi trong dân số ngày càng cao.',answer:'老年人在人口中所占的比重越来越高。',answerPy:'Lǎoniánrén zài rénkǒu zhōng suǒ zhàn de bǐzhòng yuè lái yuè gāo.',
      note:'所 + V + 的 + N (ôn HSK 5); 越来越 + Adj.',pair:'所……的'},
     {promptLang:'vi',prompt:'Trong bữa ăn nên tăng tỷ trọng rau xanh, ăn ít đồ dầu mỡ.',answer:'饮食中应该加大蔬菜的比重，少吃油腻的东西。',answerPy:'Yǐnshí zhōng yīnggāi jiādà shūcài de bǐzhòng, shǎo chī yóunì de dōngxi.',
      note:'少 + V = ăn / làm ít đi (ôn HSK 4); 饮食 ôn HSK 6 bài 10.',pair:'少 + V'}
   ]},

  {n:45,zh:'昂贵',py:'ángguì',pos:'Tính từ',vn:'đắt đỏ',hv:'ngang quý',em:'💰',lesson:1,
   explain:['Tính từ (văn viết): giá rất cao, rất đắt: 价格昂贵, 昂贵的礼物, 造价昂贵.','Mạnh và trang trọng hơn 贵; nghĩa bóng: 付出昂贵的代价 (trả giá đắt). Trái nghĩa: 低廉, 便宜.'],
   usage:'(价格 / 造价 / 费用) + 昂贵; 昂贵的 + N; 付出昂贵的代价.',
   collo:['造价昂贵','价格昂贵','昂贵的礼物','昂贵的代价'],
   ex_zh:'电池可能很重，造价可能很昂贵，充电的时间可能很长。',ex_py:'Diànchí kěnéng hěn zhòng, zàojià kěnéng hěn ángguì, chōngdiàn de shíjiān kěnéng hěn cháng.',ex_vn:'Pin có thể rất nặng, giá thành có thể rất đắt, thời gian sạc có thể rất lâu.',
   exList:[
     {zh:'电池可能很重，造价可能很昂贵，充电的时间可能很长。',py:'Diànchí kěnéng hěn zhòng, zàojià kěnéng hěn ángguì, chōngdiàn de shíjiān kěnéng hěn cháng.',vn:'Pin có thể rất nặng, giá thành có thể rất đắt, thời gian sạc có thể rất lâu.'},
     {zh:'这块手表虽然价格昂贵，但是质量确实很好。',py:'Zhè kuài shǒubiǎo suīrán jiàgé ángguì, dànshì zhìliàng quèshí hěn hǎo.',vn:'Chiếc đồng hồ này tuy giá đắt nhưng chất lượng quả thực rất tốt.'},
     {zh:'为了一时的方便，我们却付出了昂贵的代价。',py:'Wèile yìshí de fāngbiàn, wǒmen què fùchūle ángguì de dàijià.',vn:'Vì sự tiện lợi nhất thời, chúng ta lại phải trả một cái giá rất đắt.'}
   ],
   colloFull:[
     {zh:'造价昂贵',py:'zàojià ángguì',vn:'giá thành đắt'},
     {zh:'价格昂贵',py:'jiàgé ángguì',vn:'giá cả đắt đỏ'},
     {zh:'昂贵的礼物',py:'ángguì de lǐwù',vn:'món quà đắt tiền'},
     {zh:'昂贵的代价',py:'ángguì de dàijià',vn:'cái giá đắt'},
     {zh:'费用昂贵',py:'fèiyòng ángguì',vn:'chi phí cao'}
   ],
   patterns:[
     {s:'N (价格 / 造价) + 昂贵',m:'… rất đắt đỏ'},
     {s:'付出(了)昂贵的代价',m:'Trả giá đắt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học phí trường tư đắt đỏ, đâu phải gia đình nào cũng kham nổi.',answer:'私立学校学费昂贵，并不是每个家庭都负担得起。',answerPy:'Sīlì xuéxiào xuéfèi ángguì, bìng bú shì měi ge jiātíng dōu fùdān de qǐ.',
      note:'并不是 = đâu phải (ôn HSK 5); 负担得起 ôn HSK 6 bài 18.',pair:'并不是'},
     {promptLang:'vi',prompt:'Món quà đắt tiền chưa chắc đã khiến người ta cảm động nhất.',answer:'昂贵的礼物不一定最让人感动。',answerPy:'Ángguì de lǐwù bù yídìng zuì ràng rén gǎndòng.',
      note:'不一定 = chưa chắc (ôn HSK 4).',pair:'不一定'}
   ]},

  {n:46,zh:'阻碍',py:'zǔ\'ài',pos:'Động từ',vn:'ngăn cản, cản trở',hv:'trở ngại',em:'🧱',lesson:1,
   explain:['Động từ: làm cho không thông, không tiến lên / phát triển được: 阻碍交通, 阻碍发展, 阻碍人们选择…….','Cũng là danh từ: sự cản trở (遇到阻碍). Phân biệt 障碍 (bài 12): chủ yếu là danh từ "chướng ngại"; 阻碍 chủ yếu là động từ.'],
   usage:'阻碍 + N (交通 / 发展 / 进步); 成为阻碍……的 + 理由 / 因素; 受到阻碍.',
   collo:['阻碍交通','阻碍发展','成为阻碍','受到阻碍'],
   ex_zh:'这些都可能成为阻碍人们选择电动汽车的理由。',ex_py:'Zhèxiē dōu kěnéng chéngwéi zǔ\'ài rénmen xuǎnzé diàndòng qìchē de lǐyóu.',ex_vn:'Những điều này đều có thể trở thành lý do cản trở người ta chọn ô tô điện.',
   exList:[
     {zh:'这些都可能成为阻碍人们选择电动汽车的理由。',py:'Zhèxiē dōu kěnéng chéngwéi zǔ\'ài rénmen xuǎnzé diàndòng qìchē de lǐyóu.',vn:'Những điều này đều có thể trở thành lý do cản trở người ta chọn ô tô điện.'},
     {zh:'路边乱停的车严重阻碍了交通。',py:'Lùbiān luàn tíng de chē yánzhòng zǔ\'àile jiāotōng.',vn:'Những chiếc xe đỗ bừa bãi ven đường cản trở giao thông nghiêm trọng.'},
     {zh:'保守的思想会阻碍一个国家的发展。',py:'Bǎoshǒu de sīxiǎng huì zǔ\'ài yí ge guójiā de fāzhǎn.',vn:'Tư tưởng bảo thủ sẽ cản trở sự phát triển của một quốc gia.'}
   ],
   colloFull:[
     {zh:'阻碍交通',py:'zǔ\'ài jiāotōng',vn:'cản trở giao thông'},
     {zh:'阻碍发展',py:'zǔ\'ài fāzhǎn',vn:'cản trở sự phát triển'},
     {zh:'成为阻碍',py:'chéngwéi zǔ\'ài',vn:'trở thành trở ngại'},
     {zh:'受到阻碍',py:'shòudào zǔ\'ài',vn:'bị cản trở'},
     {zh:'阻碍进步',py:'zǔ\'ài jìnbù',vn:'cản trở tiến bộ'}
   ],
   patterns:[
     {s:'阻碍 + N (交通 / 发展)',m:'Cản trở …'},
     {s:'成为阻碍 + ……的 + 理由 / 因素',m:'Trở thành lý do / yếu tố cản trở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nỗi sợ thất bại thường cản trở chúng ta thử những điều mới.',answer:'害怕失败常常会阻碍我们尝试新事物。',answerPy:'Hàipà shībài chángcháng huì zǔ\'ài wǒmen chángshì xīn shìwù.',
      note:'Cụm động từ làm chủ ngữ (害怕失败); 尝试 ôn HSK 6 bài 4.',pair:'常常会'},
     {promptLang:'vi',prompt:'Dù gặp bao nhiêu cản trở, anh ấy cũng không từ bỏ ước mơ của mình.',answer:'无论遇到多少阻碍，他都没有放弃自己的梦想。',answerPy:'Wúlùn yùdào duōshao zǔ\'ài, tā dōu méiyǒu fàngqì zìjǐ de mèngxiǎng.',
      note:'无论……都…… (ôn HSK 4–5); 阻碍 dùng như danh từ.',pair:'无论……都……'}
   ]},

  {n:47,zh:'排除',py:'páichú',pos:'Động từ',vn:'loại trừ, loại bỏ',hv:'bài trừ',em:'🗑️',lesson:1,
   explain:['Động từ: gạt bỏ, loại ra (khó khăn, trở ngại, sự cố, khả năng…): 排除困难, 排除故障, 排除干扰.','不排除 + (……的)可能 / mệnh đề = không loại trừ (khả năng) …, tức là vẫn có thể xảy ra: 不排除长距离行车还用汽油. Chú ý: "bài trừ" tiếng Việt thiên về chống đối (排斥, bài 10), còn 排除 là loại ra.'],
   usage:'排除 + 困难 / 障碍 / 故障 / 干扰 / 可能; 不排除 + (……的)可能 / mệnh đề.',
   collo:['不排除','排除困难','排除故障','排除干扰'],
   ex_zh:'不排除长距离行车还用汽油或柴油。',ex_py:'Bù páichú cháng jùlí xíngchē hái yòng qìyóu huò cháiyóu.',ex_vn:'Không loại trừ khả năng đi đường dài vẫn dùng xăng hoặc dầu diesel.',
   exList:[
     {zh:'不排除长距离行车还用汽油或柴油。',py:'Bù páichú cháng jùlí xíngchē hái yòng qìyóu huò cháiyóu.',vn:'Không loại trừ khả năng đi đường dài vẫn dùng xăng hoặc dầu diesel.'},
     {zh:'经过检查，医生排除了他得重病的可能。',py:'Jīngguò jiǎnchá, yīshēng páichúle tā dé zhòngbìng de kěnéng.',vn:'Sau khi kiểm tra, bác sĩ đã loại trừ khả năng anh ấy mắc bệnh nặng.'},
     {zh:'工程师们花了三个小时，终于排除了机器的故障。',py:'Gōngchéngshīmen huāle sān ge xiǎoshí, zhōngyú páichúle jīqì de gùzhàng.',vn:'Các kỹ sư mất ba tiếng đồng hồ, cuối cùng đã khắc phục được sự cố của máy.'}
   ],
   colloFull:[
     {zh:'不排除',py:'bù páichú',vn:'không loại trừ'},
     {zh:'排除困难',py:'páichú kùnnan',vn:'vượt qua khó khăn'},
     {zh:'排除故障',py:'páichú gùzhàng',vn:'khắc phục sự cố'},
     {zh:'排除干扰',py:'páichú gānrǎo',vn:'loại bỏ sự quấy nhiễu'},
     {zh:'排除可能',py:'páichú kěnéng',vn:'loại trừ khả năng'}
   ],
   patterns:[
     {s:'不排除 + (……的)可能 / mệnh đề',m:'Không loại trừ (khả năng) …'},
     {s:'排除 + 困难 / 故障 / 干扰',m:'Vượt qua / khắc phục / loại bỏ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cảnh sát không loại trừ khả năng vụ án này do người quen gây ra.',answer:'警方不排除这起案件是熟人干的可能。',answerPy:'Jǐngfāng bù páichú zhè qǐ ànjiàn shì shúrén gàn de kěnéng.',
      note:'不排除……的可能; 案件 ôn HSK 6 bài 9.',pair:'不排除'},
     {promptLang:'vi',prompt:'Chỉ cần mọi người đồng lòng, không có khó khăn nào là không vượt qua được.',answer:'只要大家齐心协力，就没有排除不了的困难。',answerPy:'Zhǐyào dàjiā qíxīn-xiélì, jiù méiyǒu páichú bu liǎo de kùnnan.',
      note:'只要……就…… (ôn HSK 4); bổ ngữ khả năng V不了.',pair:'只要……就……'}
   ]},

  {n:48,zh:'确保',py:'quèbǎo',pos:'Động từ',vn:'bảo đảm (chắc chắn)',hv:'xác bảo',em:'✅',lesson:1,
   explain:['Động từ: bảo đảm chắc chắn (thực hiện được, không có sai sót): 确保安全, 确保质量, 确保按时完成.','Sau 确保 có thể là danh từ, động từ hoặc mệnh đề: 确保减少污染. 确 = chắc chắn. Nhóm từ có chữ 保 (练习 1): 担保, 保证, 保险, 确保, 准保.'],
   usage:'确保 + N (安全 / 质量) / V / mệnh đề; 为了确保……; 必须确保…….',
   collo:['确保安全','确保质量','确保减少污染','确保按时完成'],
   ex_zh:'为了确保减少污染，燃料的使用效率必须提高。',ex_py:'Wèile quèbǎo jiǎnshǎo wūrǎn, ránliào de shǐyòng xiàolǜ bìxū tígāo.',ex_vn:'Để bảo đảm giảm ô nhiễm, hiệu suất sử dụng nhiên liệu phải được nâng cao.',
   exList:[
     {zh:'为了确保减少污染，燃料的使用效率必须提高。',py:'Wèile quèbǎo jiǎnshǎo wūrǎn, ránliào de shǐyòng xiàolǜ bìxū tígāo.',vn:'Để bảo đảm giảm ô nhiễm, hiệu suất sử dụng nhiên liệu phải được nâng cao.'},
     {zh:'出发前一定要检查好车辆，确保行车安全。',py:'Chūfā qián yídìng yào jiǎnchá hǎo chēliàng, quèbǎo xíngchē ānquán.',vn:'Trước khi xuất phát nhất định phải kiểm tra kỹ xe, để bảo đảm an toàn khi chạy.'},
     {zh:'我们会加班加点，确保按时完成任务。',py:'Wǒmen huì jiābān-jiādiǎn, quèbǎo ànshí wánchéng rènwu.',vn:'Chúng tôi sẽ tăng ca, bảo đảm hoàn thành nhiệm vụ đúng hạn.'}
   ],
   colloFull:[
     {zh:'确保安全',py:'quèbǎo ānquán',vn:'bảo đảm an toàn'},
     {zh:'确保质量',py:'quèbǎo zhìliàng',vn:'bảo đảm chất lượng'},
     {zh:'确保减少污染',py:'quèbǎo jiǎnshǎo wūrǎn',vn:'bảo đảm giảm ô nhiễm'},
     {zh:'确保按时完成',py:'quèbǎo ànshí wánchéng',vn:'bảo đảm hoàn thành đúng hạn'},
     {zh:'确保万无一失',py:'quèbǎo wànwú-yìshī',vn:'bảo đảm không một sơ suất'}
   ],
   patterns:[
     {s:'确保 + N / V / mệnh đề',m:'Bảo đảm chắc chắn …'},
     {s:'为了确保……，……必须……',m:'Để bảo đảm …, … phải …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi nộp bài, em nên kiểm tra lại một lượt, bảo đảm không có chỗ sai.',answer:'交作业以前，你最好再检查一遍，确保没有错误。',answerPy:'Jiāo zuòyè yǐqián, nǐ zuìhǎo zài jiǎnchá yí biàn, quèbǎo méiyǒu cuòwù.',
      note:'再 + V + 一遍 = làm lại một lượt; 确保 + mệnh đề.',pair:'再……一遍'},
     {promptLang:'vi',prompt:'Để bảo đảm an toàn cho hành khách, tài xế không được dùng điện thoại khi lái xe.',answer:'为了确保乘客的安全，司机开车时不能使用手机。',answerPy:'Wèile quèbǎo chéngkè de ānquán, sījī kāichē shí bù néng shǐyòng shǒujī.',
      note:'为了…… (mục đích); ……时 = khi ….',pair:'为了'}
   ]},

  {n:49,zh:'排放',py:'páifàng',pos:'Động từ',vn:'đổ ra, thải ra',hv:'bài phóng',em:'💨',lesson:1,
   explain:['Động từ: thải (khí thải, nước thải, chất bẩn) ra môi trường: 排放废气, 排放污水.','Hay dùng như danh từ: 废气的排放, 减少排放, 碳排放 (phát thải carbon). Ôn: 释放 (bài 14) = giải phóng, thả ra.'],
   usage:'排放 + 废气 / 污水 / 二氧化碳; ……的排放 + 减少 / 增加; 碳排放.',
   collo:['废气的排放','排放废气','排放污水','减少排放'],
   ex_zh:'燃料的使用效率必须提高，废气的排放必须减少。',ex_py:'Ránliào de shǐyòng xiàolǜ bìxū tígāo, fèiqì de páifàng bìxū jiǎnshǎo.',ex_vn:'Hiệu suất sử dụng nhiên liệu phải được nâng cao, lượng khí thải phải được giảm bớt.',
   exList:[
     {zh:'燃料的使用效率必须提高，废气的排放必须减少。',py:'Ránliào de shǐyòng xiàolǜ bìxū tígāo, fèiqì de páifàng bìxū jiǎnshǎo.',vn:'Hiệu suất sử dụng nhiên liệu phải được nâng cao, lượng khí thải phải được giảm bớt.'},
     {zh:'这家工厂把污水直接排放到河里，受到了处罚。',py:'Zhè jiā gōngchǎng bǎ wūshuǐ zhíjiē páifàng dào hé li, shòudàole chǔfá.',vn:'Nhà máy này xả thẳng nước thải ra sông nên đã bị xử phạt.'},
     {zh:'多骑自行车，少开车，可以减少二氧化碳的排放。',py:'Duō qí zìxíngchē, shǎo kāichē, kěyǐ jiǎnshǎo èryǎnghuàtàn de páifàng.',vn:'Đi xe đạp nhiều hơn, lái ô tô ít đi có thể giảm lượng khí CO₂ thải ra.'}
   ],
   colloFull:[
     {zh:'废气的排放',py:'fèiqì de páifàng',vn:'việc thải khí thải'},
     {zh:'排放废气',py:'páifàng fèiqì',vn:'thải khí thải'},
     {zh:'排放污水',py:'páifàng wūshuǐ',vn:'xả nước thải'},
     {zh:'减少排放',py:'jiǎnshǎo páifàng',vn:'giảm phát thải'},
     {zh:'碳排放',py:'tàn páifàng',vn:'phát thải carbon'}
   ],
   patterns:[
     {s:'排放 + 废气 / 污水',m:'Thải ra khí thải / nước thải'},
     {s:'减少 + ……的排放',m:'Giảm lượng … thải ra'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để bảo vệ môi trường, nhà máy không được tùy tiện xả nước thải.',answer:'为了保护环境，工厂不能随意排放污水。',answerPy:'Wèile bǎohù huánjìng, gōngchǎng bù néng suíyì páifàng wūshuǐ.',
      note:'随意 = tùy tiện (ôn HSK 6 bài 5).',pair:'为了'},
     {promptLang:'vi',prompt:'Ô tô điện hầu như không thải ra khí thải, vì vậy thân thiện với môi trường hơn.',answer:'电动汽车几乎不排放废气，因此更加环保。',answerPy:'Diàndòng qìchē jīhū bù páifàng fèiqì, yīncǐ gèngjiā huánbǎo.',
      note:'因此 = vì vậy (ôn HSK 4–5); 更加 + Adj.',pair:'因此'}
   ]},

  {n:50,zh:'代价',py:'dàijià',pos:'Danh từ',vn:'giá phải trả, chi phí',hv:'đại giá',em:'⚖️',lesson:1,
   explain:['Danh từ: cái giá phải trả — tiền của, sức lực, sự hy sinh bỏ ra để đạt được điều gì (hoặc hậu quả phải gánh): 付出代价, 巨大的代价.','Hay đi với 付出 / 以……为代价 / 不惜一切代价. Ôn cấu trúc 以……为…… (bài 11).'],
   usage:'付出 + (巨大的 / 沉重的) 代价; 以 + N + 为代价; 不惜一切代价.',
   collo:['付出代价','巨大的代价','以……为代价','不惜一切代价'],
   ex_zh:'人类也为此付出了巨大的代价。',ex_py:'Rénlèi yě wèi cǐ fùchūle jùdà de dàijià.',ex_vn:'Loài người cũng vì thế mà phải trả một cái giá rất lớn.',
   exList:[
     {zh:'人类也为此付出了巨大的代价。',py:'Rénlèi yě wèi cǐ fùchūle jùdà de dàijià.',vn:'Loài người cũng vì thế mà phải trả một cái giá rất lớn.'},
     {zh:'经济发展不能以破坏环境为代价。',py:'Jīngjì fāzhǎn bù néng yǐ pòhuài huánjìng wéi dàijià.',vn:'Phát triển kinh tế không được đánh đổi bằng việc phá hoại môi trường.'},
     {zh:'为了救出孩子，医生们不惜一切代价。',py:'Wèile jiùchū háizi, yīshēngmen bùxī yíqiè dàijià.',vn:'Để cứu đứa trẻ, các bác sĩ bất chấp mọi giá.'}
   ],
   colloFull:[
     {zh:'付出代价',py:'fùchū dàijià',vn:'trả giá'},
     {zh:'巨大的代价',py:'jùdà de dàijià',vn:'cái giá rất lớn'},
     {zh:'以……为代价',py:'yǐ …… wéi dàijià',vn:'đánh đổi bằng …'},
     {zh:'不惜一切代价',py:'bùxī yíqiè dàijià',vn:'bằng mọi giá'},
     {zh:'沉重的代价',py:'chénzhòng de dàijià',vn:'cái giá nặng nề'}
   ],
   patterns:[
     {s:'为 + N + 付出(了) + ……的代价',m:'Trả giá … vì …'},
     {s:'以 + A + 为代价',m:'Đánh đổi bằng A'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thành công nào cũng phải trả giá, không có con đường tắt nào để đi.',answer:'任何成功都要付出代价，没有捷径可走。',answerPy:'Rènhé chénggōng dōu yào fùchū dàijià, méiyǒu jiéjìng kě zǒu.',
      note:'任何……都…… (ôn HSK 4–5).',pair:'任何……都……'},
     {promptLang:'vi',prompt:'Không được lấy sức khỏe làm cái giá để đổi lấy thành tích.',answer:'不能以牺牲健康为代价来换取成绩。',answerPy:'Bù néng yǐ xīshēng jiànkāng wéi dàijià lái huànqǔ chéngjì.',
      note:'以……为代价 (以……为…… ôn HSK 6 bài 11); 来 + V nối mục đích.',pair:'以……为……'}
   ]},

  {n:51,zh:'伴侣',py:'bànlǚ',pos:'Danh từ',vn:'bạn đồng hành, bạn đời',hv:'bạn lữ',em:'💑',lesson:1,
   explain:['Danh từ: người cùng sống, cùng làm việc, cùng đi lâu dài; hay dùng chỉ vợ / chồng: 生活伴侣, 终身伴侣.','Nghĩa ví von: thứ gắn bó không thể thiếu: 汽车是我们生活中不可缺少的伴侣. Ôn: 伴随 (bài 7), 配偶 (bài 12).'],
   usage:'生活 / 终身 / 人生 + 伴侣; 不可缺少的伴侣; 成为……的伴侣.',
   collo:['不可缺少的伴侣','生活伴侣','终身伴侣','好伴侣'],
   ex_zh:'如果汽车还是我们生活中不可缺少的伴侣，它必须是清洁的、安全的。',ex_py:'Rúguǒ qìchē háishi wǒmen shēnghuó zhōng bù kě quēshǎo de bànlǚ, tā bìxū shì qīngjié de, ānquán de.',ex_vn:'Nếu ô tô vẫn là người bạn đồng hành không thể thiếu trong cuộc sống của chúng ta, thì nó phải sạch và an toàn.',
   exList:[
     {zh:'如果汽车还是我们生活中不可缺少的伴侣，它必须是清洁的、安全的。',py:'Rúguǒ qìchē háishi wǒmen shēnghuó zhōng bù kě quēshǎo de bànlǚ, tā bìxū shì qīngjié de, ānquán de.',vn:'Nếu ô tô vẫn là người bạn đồng hành không thể thiếu trong cuộc sống của chúng ta, thì nó phải sạch và an toàn.'},
     {zh:'书是我最好的伴侣，陪我度过了许多孤独的夜晚。',py:'Shū shì wǒ zuì hǎo de bànlǚ, péi wǒ dùguòle xǔduō gūdú de yèwǎn.',vn:'Sách là người bạn đồng hành tốt nhất của tôi, đã cùng tôi qua bao đêm cô đơn.'},
     {zh:'他们俩结婚五十年了，是彼此的终身伴侣。',py:'Tāmen liǎ jiéhūn wǔshí nián le, shì bǐcǐ de zhōngshēn bànlǚ.',vn:'Hai ông bà kết hôn đã năm mươi năm, là bạn đời trọn đời của nhau.'}
   ],
   colloFull:[
     {zh:'不可缺少的伴侣',py:'bù kě quēshǎo de bànlǚ',vn:'người bạn không thể thiếu'},
     {zh:'生活伴侣',py:'shēnghuó bànlǚ',vn:'bạn đời'},
     {zh:'终身伴侣',py:'zhōngshēn bànlǚ',vn:'bạn đời trọn đời'},
     {zh:'好伴侣',py:'hǎo bànlǚ',vn:'người bạn đồng hành tốt'},
     {zh:'旅行伴侣',py:'lǚxíng bànlǚ',vn:'bạn đồng hành khi du lịch'}
   ],
   patterns:[
     {s:'A 是 B 不可缺少的伴侣',m:'A là người bạn không thể thiếu của B'},
     {s:'生活 / 终身 + 伴侣',m:'Bạn đời'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với nhiều người trẻ, điện thoại đã trở thành người bạn không thể thiếu.',answer:'对很多年轻人来说，手机已经成了不可缺少的伴侣。',answerPy:'Duì hěn duō niánqīngrén lái shuō, shǒujī yǐjīng chéngle bù kě quēshǎo de bànlǚ.',
      note:'对……来说 (ôn HSK 4).',pair:'对……来说'},
     {promptLang:'vi',prompt:'Chọn bạn đời thì tính cách hợp nhau quan trọng hơn ngoại hình.',answer:'选择生活伴侣，性格合得来比外表更重要。',answerPy:'Xuǎnzé shēnghuó bànlǚ, xìnggé hé de lái bǐ wàibiǎo gèng zhòngyào.',
      note:'A 比 B 更 + Adj (ôn HSK 4); 合得来 = hợp nhau.',pair:'比……更……'}
   ]},

  {n:52,zh:'支柱',py:'zhīzhù',pos:'Danh từ',vn:'chỗ dựa chính, trụ cột',hv:'chi trụ',em:'🏛️',lesson:1,
   explain:['Danh từ: nghĩa gốc là cây cột chống đỡ; nghĩa bóng: lực lượng nòng cốt, chỗ dựa chính: 支柱产业, 家庭的支柱, 精神支柱.','支柱产业 = ngành công nghiệp trụ cột của nền kinh tế. Ôn: 支撑 (bài 16), 骨干 (bài 3), 产业 (bài 13).'],
   usage:'支柱产业; 家庭 / 经济 + 支柱; 精神支柱; 扮演 + 支柱(产业)的角色.',
   collo:['支柱产业','家庭的支柱','精神支柱','经济支柱'],
   ex_zh:'它在我们的经济生活中还扮演支柱产业的角色。',ex_py:'Tā zài wǒmen de jīngjì shēnghuó zhōng hái bànyǎn zhīzhù chǎnyè de juésè.',ex_vn:'Nó còn đóng vai trò ngành công nghiệp trụ cột trong đời sống kinh tế của chúng ta.',
   exList:[
     {zh:'它在我们的经济生活中还扮演支柱产业的角色。',py:'Tā zài wǒmen de jīngjì shēnghuó zhōng hái bànyǎn zhīzhù chǎnyè de juésè.',vn:'Nó còn đóng vai trò ngành công nghiệp trụ cột trong đời sống kinh tế của chúng ta.'},
     {zh:'爸爸去世以后，哥哥成了家里的支柱。',py:'Bàba qùshì yǐhòu, gēge chéngle jiā li de zhīzhù.',vn:'Sau khi bố mất, anh trai trở thành trụ cột trong nhà.'},
     {zh:'在最困难的时候，母亲的鼓励是我的精神支柱。',py:'Zài zuì kùnnan de shíhou, mǔqīn de gǔlì shì wǒ de jīngshén zhīzhù.',vn:'Những lúc khó khăn nhất, lời động viên của mẹ là chỗ dựa tinh thần của tôi.'}
   ],
   colloFull:[
     {zh:'支柱产业',py:'zhīzhù chǎnyè',vn:'ngành trụ cột'},
     {zh:'家庭的支柱',py:'jiātíng de zhīzhù',vn:'trụ cột gia đình'},
     {zh:'精神支柱',py:'jīngshén zhīzhù',vn:'chỗ dựa tinh thần'},
     {zh:'经济支柱',py:'jīngjì zhīzhù',vn:'trụ cột kinh tế'},
     {zh:'扮演支柱的角色',py:'bànyǎn zhīzhù de juésè',vn:'đóng vai trò trụ cột'}
   ],
   patterns:[
     {s:'扮演 / 成为 + 支柱(产业)的角色',m:'Đóng vai trò trụ cột'},
     {s:'A 是 B 的(精神)支柱',m:'A là chỗ dựa (tinh thần) của B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Du lịch luôn là ngành trụ cột của hòn đảo này, thu hút rất nhiều du khách.',answer:'旅游业一直是这个岛的支柱产业，吸引了大量游客。',answerPy:'Lǚyóuyè yìzhí shì zhège dǎo de zhīzhù chǎnyè, xīyǐnle dàliàng yóukè.',
      note:'一直 = luôn luôn (ôn HSK 3–4); 产业 ôn HSK 6 bài 13.',pair:'一直'},
     {promptLang:'vi',prompt:'Dù cuộc sống khó khăn đến đâu, gia đình mãi mãi là chỗ dựa tinh thần của tôi.',answer:'不管生活多么艰难，家永远是我的精神支柱。',answerPy:'Bùguǎn shēnghuó duōme jiānnán, jiā yǒngyuǎn shì wǒ de jīngshén zhīzhù.',
      note:'不管……多么…… (ôn HSK 4); 永远 = mãi mãi.',pair:'不管……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 24–26), mỗi đoạn văn một dòng; tiêu đề nhỏ 甲乙丙丁 để riêng một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 2050年的汽车什么样',
   preQuiz:[
     {q:'遇到交通堵塞时，人们会怎么想？',opts:['汽车要是能飞起来就好了','应该多修几条路','不如走路去上班'],ans:0},
     {q:'课文用几点为我们勾画出2050年汽车的轮廓？',opts:['三点','四点','五点'],ans:1},
     {q:'下面哪一项不属于人们对汽车的指责？',opts:['北极冰川在融化','石油资源日益紧缺','汽车的价格越来越贵'],ans:2},
     {q:'作者认为，动不动就要将汽车淘汰怎么样？',opts:['是最好的办法','似乎不是明智之举','完全没有必要讨论'],ans:1},
     {q:'2050年对汽车最起码的要求是什么？',opts:['清洁、安全','速度更快','价格便宜'],ans:0},
     {q:'欧洲正试图实现什么？',opts:['让汽车在水上行驶','让所有汽车都用电','由一名职业司机驾车引导一长串汽车前行'],ans:2},
     {q:'课文把一长串被引导的汽车比作什么？',opts:['一群飞鸟','一条河','一条线上的珍珠'],ans:2},
     {q:'汽车抵达终点后会怎么样？',opts:['需要司机自己找车位','能自动停泊入位','会自动开回家'],ans:1},
     {q:'搜索引擎公司为什么加入汽车研发的行列？',opts:['他们意识到其中蕴藏着巨大的商机','政府要求他们这样做','他们想生产电脑'],ans:0},
     {q:'在2050年，虚拟个人助理将会是什么样的服务？',opts:['必然的服务','锦上添花的服务','很少有人用的服务'],ans:0},
     {q:'为什么长距离行车可能还用汽油或柴油？',opts:['汽油比电便宜','电动汽车的电池重、造价高、充电时间长','电动汽车跑不快'],ans:1},
     {q:'作者认为2050年的汽车必须符合什么原则？',opts:['优胜劣汰的原则','越快越好的原则','可持续发展的原则'],ans:2}
   ],
   lines:[
    {sp:0,zh:'每次遇到交通堵塞，那些滞留在路上，被堵车折磨得心烦意乱的人们就会想：汽车要是也有双翼，能飞起来就好了。人们的期盼，有可能变为现实吗？2050年，汽车会是什么样？别的不敢担保，以下四点大体为我们勾画出了2050年汽车的轮廓。',
     py:'Měi cì yùdào jiāotōng dǔsè, nàxiē zhìliú zài lù shang, bèi dǔchē zhémó de xīnfán-yìluàn de rénmen jiù huì xiǎng: qìchē yàoshi yě yǒu shuāng yì, néng fēi qǐlái jiù hǎo le. Rénmen de qīpàn, yǒu kěnéng biànwéi xiànshí ma? Èr líng wǔ líng nián, qìchē huì shì shénme yàng? Biéde bù gǎn dānbǎo, yǐxià sì diǎn dàtǐ wèi wǒmen gōuhuà chūle èr líng wǔ líng nián qìchē de lúnkuò.',
     vn:'Mỗi lần gặp cảnh tắc đường, những người bị kẹt lại trên đường, bị nạn tắc xe hành hạ đến bực bội rối bời lại nghĩ: giá mà ô tô cũng có đôi cánh, bay lên được thì hay biết mấy. Niềm mong mỏi ấy của con người liệu có thể trở thành hiện thực không? Năm 2050, ô tô sẽ trông như thế nào? Những điều khác thì không dám chắc, nhưng bốn điểm dưới đây về cơ bản đã phác họa cho chúng ta hình dáng của ô tô năm 2050.'},
    {sp:0,zh:'甲　更加清洁、安全',py:'Jiǎ　Gèngjiā qīngjié, ānquán',vn:'Một (Giáp): Sạch hơn, an toàn hơn'},
    {sp:0,zh:'我们首先要问的是，2050年汽车还会存在吗？我们常常听到这样的指责：北极冰川在融化；空气质量在下降；石油资源日益紧缺；每年全球一百多万人死于交通事故，都是汽车惹的祸。鉴于以上劣迹，人类会不会忍痛割爱？根据优胜劣汰的原则，汽车会不会被取代？一切皆有可能，但作为一种将人解放出来的灵活的交通工具，动不动就要将其淘汰，似乎不是明智之举，根本出路还是要在清洁环保、规范驾车出行上下功夫。谋求这一交通工具的清洁、安全，是2050年对汽车最起码的要求。',
     py:'Wǒmen shǒuxiān yào wèn de shì, èr líng wǔ líng nián qìchē hái huì cúnzài ma? Wǒmen chángcháng tīngdào zhèyàng de zhǐzé: Běijí bīngchuān zài rónghuà; kōngqì zhìliàng zài xiàjiàng; shíyóu zīyuán rìyì jǐnquē; měi nián quánqiú yìbǎi duō wàn rén sǐ yú jiāotōng shìgù, dōu shì qìchē rě de huò. Jiànyú yǐshàng lièjì, rénlèi huì bu huì rěntòng-gē\'ài? Gēnjù yōushèng-liètài de yuánzé, qìchē huì bu huì bèi qǔdài? Yíqiè jiē yǒu kěnéng, dàn zuòwéi yì zhǒng jiāng rén jiěfàng chūlái de línghuó de jiāotōng gōngjù, dòngbudòng jiù yào jiāng qí táotài, sìhū bú shì míngzhì zhī jǔ, gēnběn chūlù háishi yào zài qīngjié huánbǎo, guīfàn jiàchē chūxíng shang xià gōngfu. Móuqiú zhè yì jiāotōng gōngjù de qīngjié, ānquán, shì èr líng wǔ líng nián duì qìchē zuì qǐmǎ de yāoqiú.',
     vn:'Điều đầu tiên chúng ta phải hỏi là: năm 2050 ô tô còn tồn tại nữa không? Chúng ta thường nghe những lời chỉ trích thế này: sông băng Bắc Cực đang tan; chất lượng không khí đang đi xuống; nguồn dầu mỏ ngày càng khan hiếm; mỗi năm trên toàn cầu hơn một triệu người chết vì tai nạn giao thông — tất cả đều là tai họa do ô tô gây ra. Xét những "tội trạng" trên, liệu loài người có đành đau lòng từ bỏ nó? Theo nguyên tắc mạnh được yếu thua, liệu ô tô có bị thay thế? Mọi thứ đều có thể xảy ra, nhưng là một phương tiện giao thông linh hoạt đã giải phóng con người, hơi một chút đã đòi loại bỏ nó thì e rằng không phải việc làm sáng suốt; lối thoát căn bản vẫn là phải dồn công sức vào việc làm cho nó sạch, thân thiện với môi trường, và vào việc lái xe đi lại đúng quy tắc. Làm cho phương tiện giao thông này sạch sẽ, an toàn là yêu cầu tối thiểu đối với ô tô năm 2050.'},
    {sp:0,zh:'乙　能自动行驶',py:'Yǐ　Néng zìdòng xíngshǐ',vn:'Hai (Ất): Có thể tự lái'},
    {sp:0,zh:'2050年，无人干预，能够自动在平坦的高速路上奔驰的车辆将会走进家庭。欧洲正试图实现由一名职业司机驾车引导一长串汽车前行，它们像是一条线上的珍珠，在路上移动。被引导车辆上的驾驶者可以工作，也可以休息，职业司机的工作效益也将大大提高。汽车抵达终点后，车上配备的高科技系统能使车辆自动停泊入位。这就是人类力求实现的汽车自动行驶。',
     py:'Èr líng wǔ líng nián, wú rén gānyù, nénggòu zìdòng zài píngtǎn de gāosùlù shang bēnchí de chēliàng jiāng huì zǒujìn jiātíng. Ōuzhōu zhèng shìtú shíxiàn yóu yì míng zhíyè sījī jiàchē yǐndǎo yì cháng chuàn qìchē qiánxíng, tāmen xiàng shì yì tiáo xiàn shang de zhēnzhū, zài lù shang yídòng. Bèi yǐndǎo chēliàng shang de jiàshǐzhě kěyǐ gōngzuò, yě kěyǐ xiūxi, zhíyè sījī de gōngzuò xiàoyì yě jiāng dàdà tígāo. Qìchē dǐdá zhōngdiǎn hòu, chē shang pèibèi de gāo kējì xìtǒng néng shǐ chēliàng zìdòng tíngbó rùwèi. Zhè jiù shì rénlèi lìqiú shíxiàn de qìchē zìdòng xíngshǐ.',
     vn:'Năm 2050, những chiếc xe không cần người can thiệp, có thể tự động lao vun vút trên đường cao tốc bằng phẳng sẽ đi vào từng gia đình. Châu Âu đang thử hiện thực hóa việc để một tài xế chuyên nghiệp lái xe dẫn đầu cả một đoàn dài ô tô tiến lên; chúng giống như những hạt ngọc trai xâu trên một sợi chỉ, di chuyển trên đường. Người ngồi lái trên những chiếc xe được dẫn đường có thể làm việc, cũng có thể nghỉ ngơi, hiệu quả công việc của tài xế chuyên nghiệp cũng sẽ tăng lên rất nhiều. Sau khi ô tô tới điểm cuối, hệ thống công nghệ cao trang bị trên xe có thể giúp xe tự động đỗ vào chỗ. Đó chính là việc ô tô tự lái mà loài người đang dốc sức hiện thực hóa.'},
    {sp:0,zh:'丙　融合数字生活方式',py:'Bǐng　Rónghé shùzì shēnghuó fāngshì',vn:'Ba (Bính): Hòa nhập lối sống số'},
    {sp:0,zh:'某家著名的搜索引擎公司意识到，为个人驾驶提供服务蕴藏着巨大的商机，于是，他们迫不及待地加入到汽车研发的行列，车企与电脑公司合作几乎成了无法阻挡的潮流。创造虚拟个人助理，为汽车用户提供路线、交通信息和日程安排等方面的帮助，在2050年将会是必然的服务，而非锦上添花。数字生活方式将完全与汽车融为一体，为汽车的方便、安全使用提供保障。',
     py:'Mǒu jiā zhùmíng de sōusuǒ yǐnqíng gōngsī yìshí dào, wèi gèrén jiàshǐ tígōng fúwù yùncángzhe jùdà de shāngjī, yúshì, tāmen pòbùjídài de jiārù dào qìchē yánfā de hángliè, chēqǐ yǔ diànnǎo gōngsī hézuò jīhū chéngle wúfǎ zǔdǎng de cháoliú. Chuàngzào xūnǐ gèrén zhùlǐ, wèi qìchē yònghù tígōng lùxiàn, jiāotōng xìnxī hé rìchéng ānpái děng fāngmiàn de bāngzhù, zài èr líng wǔ líng nián jiāng huì shì bìrán de fúwù, ér fēi jǐnshàng-tiānhuā. Shùzì shēnghuó fāngshì jiāng wánquán yǔ qìchē róng wéi yìtǐ, wèi qìchē de fāngbiàn, ānquán shǐyòng tígōng bǎozhàng.',
     vn:'Một công ty công cụ tìm kiếm nổi tiếng nọ nhận ra rằng việc cung cấp dịch vụ cho người lái xe cá nhân ẩn chứa cơ hội kinh doanh rất lớn, vì thế họ nóng lòng gia nhập hàng ngũ nghiên cứu phát triển ô tô; việc hãng xe hợp tác với công ty máy tính gần như đã thành một xu thế không thể ngăn cản. Tạo ra trợ lý cá nhân ảo, hỗ trợ người dùng ô tô về lộ trình, thông tin giao thông, sắp xếp lịch trình… vào năm 2050 sẽ là một dịch vụ tất yếu, chứ không chỉ là thứ thêu hoa trên gấm. Lối sống số sẽ hoàn toàn hòa làm một với ô tô, bảo đảm cho việc sử dụng ô tô thuận tiện và an toàn.'},
    {sp:0,zh:'丁　长途行车仍靠汽油',py:'Dīng　Chángtú xíngchē réng kào qìyóu',vn:'Bốn (Đinh): Đi đường dài vẫn dựa vào xăng'},
    {sp:0,zh:'2050年的汽车动力是什么？电力？风力？还是依然用汽油和柴油？有人会说，清洁能源的开发就是要遏制汽油、柴油的使用。没错，作为日常交通工具，电动汽车的比重一定会提高，可是跑长途呢？电动汽车也许能承受超远距离行驶，但电池可能很重，造价可能很昂贵，充电的时间可能很长，这些都可能成为阻碍人们选择电动汽车的理由，所以，不排除长距离行车还用汽油或柴油，因此为了确保减少污染，燃料的使用效率必须提高，废气的排放必须减少。',
     py:'Èr líng wǔ líng nián de qìchē dònglì shì shénme? Diànlì? Fēnglì? Háishi yīrán yòng qìyóu hé cháiyóu? Yǒu rén huì shuō, qīngjié néngyuán de kāifā jiù shì yào èzhì qìyóu, cháiyóu de shǐyòng. Méi cuò, zuòwéi rìcháng jiāotōng gōngjù, diàndòng qìchē de bǐzhòng yídìng huì tígāo, kěshì pǎo chángtú ne? Diàndòng qìchē yěxǔ néng chéngshòu chāo yuǎn jùlí xíngshǐ, dàn diànchí kěnéng hěn zhòng, zàojià kěnéng hěn ángguì, chōngdiàn de shíjiān kěnéng hěn cháng, zhèxiē dōu kěnéng chéngwéi zǔ\'ài rénmen xuǎnzé diàndòng qìchē de lǐyóu, suǒyǐ, bù páichú cháng jùlí xíngchē hái yòng qìyóu huò cháiyóu, yīncǐ wèile quèbǎo jiǎnshǎo wūrǎn, ránliào de shǐyòng xiàolǜ bìxū tígāo, fèiqì de páifàng bìxū jiǎnshǎo.',
     vn:'Động lực của ô tô năm 2050 là gì? Điện? Sức gió? Hay vẫn dùng xăng và dầu diesel? Có người sẽ nói, phát triển năng lượng sạch chính là để kiềm chế việc sử dụng xăng và dầu diesel. Không sai, là phương tiện giao thông hằng ngày, tỷ trọng ô tô điện chắc chắn sẽ tăng, nhưng còn chạy đường dài thì sao? Ô tô điện có lẽ chịu được những chặng đường siêu xa, nhưng pin có thể rất nặng, giá thành có thể rất đắt, thời gian sạc có thể rất lâu — những điều này đều có thể trở thành lý do cản trở người ta chọn ô tô điện. Vì thế, không loại trừ khả năng đi đường dài vẫn dùng xăng hoặc dầu diesel; do đó, để bảo đảm giảm ô nhiễm, hiệu suất sử dụng nhiên liệu phải được nâng cao, lượng khí thải phải được giảm bớt.'},
    {sp:0,zh:'长久以来，汽车作为人类重要的交通工具与我们相伴相随，人类也为此付出了巨大的代价。2050年，如果汽车还是我们生活中不可缺少的伴侣，它在我们的经济生活中还扮演支柱产业的角色，它必须是清洁的、安全的，它必须符合可持续发展的原则。',
     py:'Chángjiǔ yǐlái, qìchē zuòwéi rénlèi zhòngyào de jiāotōng gōngjù yǔ wǒmen xiāngbàn-xiāngsuí, rénlèi yě wèi cǐ fùchūle jùdà de dàijià. Èr líng wǔ líng nián, rúguǒ qìchē háishi wǒmen shēnghuó zhōng bù kě quēshǎo de bànlǚ, tā zài wǒmen de jīngjì shēnghuó zhōng hái bànyǎn zhīzhù chǎnyè de juésè, tā bìxū shì qīngjié de, ānquán de, tā bìxū fúhé kě chíxù fāzhǎn de yuánzé.',
     vn:'Từ lâu nay, ô tô với tư cách là phương tiện giao thông quan trọng của loài người đã luôn gắn bó bên chúng ta, và loài người cũng vì thế mà trả một cái giá rất lớn. Năm 2050, nếu ô tô vẫn là người bạn đồng hành không thể thiếu trong cuộc sống, vẫn đóng vai trò ngành công nghiệp trụ cột trong đời sống kinh tế của chúng ta, thì nó nhất định phải sạch, phải an toàn, phải phù hợp với nguyên tắc phát triển bền vững.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 担保—保证 lấy từ sách (tr. 27–28, 做一做: 判断正误); 确保—保障, 阻碍—障碍 soạn thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'担保 — 保证',
   same:'Đều là động từ, đều có nghĩa nhận trách nhiệm, khẳng định chắc chắn không xảy ra vấn đề hoặc nhất định làm được; đều đi được với mệnh đề: 我敢担保 / 保证…….',
   sameEx:{zh:'出不了事，我敢担保／保证。',vn:'Không xảy ra chuyện gì đâu, tôi dám cam đoan.'},
   items:[
     {word:'担保',points:[
       'Phía sau KHÔNG đi với danh từ, chỉ đi với động từ hoặc mệnh đề: ×担保产品质量 → 我敢担保，产品质量没有问题.',
       'KHÔNG có từ tính danh từ (không nói ×……的担保 theo nghĩa "sự bảo đảm").',
       'Nghĩa pháp lý: bảo lãnh — 为他担保, 担保人.'
     ],ex:[{zh:'我敢担保，产品质量没有问题。',vn:'Tôi dám cam đoan chất lượng sản phẩm không có vấn đề gì.'}]},
     {word:'保证',points:[
       'Phía sau đi được với DANH TỪ, nghĩa là bảo đảm đạt yêu cầu, tiêu chuẩn đã định, không giảm bớt chút nào: 保证产品质量, 保证时间.',
       'Còn là DANH TỪ: thứ làm bảo đảm — 安定团结是我们取得胜利的保证.',
       'Hay dùng trong lời hứa, cam kết: 保证完成任务, 我保证下次不迟到.'
     ],ex:[{zh:'我们要保证产品质量。',vn:'Chúng ta phải bảo đảm chất lượng sản phẩm.'},
          {zh:'安定团结是我们取得胜利的保证。',vn:'Ổn định đoàn kết là sự bảo đảm để chúng ta giành thắng lợi.'}]}
   ],
   quiz:[
     {sentence:'我们要＿＿产品质量，不能让顾客失望。',options:['担保','保证'],answer:1,
      why:'Sau là danh từ 产品质量 → chỉ 保证 (câu ×担保产品质量 là ví dụ sai trong sách).'},
     {sentence:'良好的睡眠是提高学习效率的＿＿。',options:['担保','保证'],answer:1,
      why:'Cần DANH TỪ "sự bảo đảm" (的 + ＿＿) → 保证; 担保 không có từ tính danh từ.'},
     {sentence:'他向银行申请贷款，需要有人为他＿＿。',options:['担保','保证'],answer:0,
      why:'Nghĩa pháp lý "bảo lãnh" (为 + người + 担保) → 担保.'},
     {sentence:'我敢＿＿，这件事交给他一定能办成。',options:['担保','保证'],answer:0,both:true,
      why:'Sau là mệnh đề → cả hai đều dùng được (phần giống nhau trong sách: 我敢担保／保证).'}
   ],
   sgk:{
     chung:{t:'表示负责，肯定不出问题或一定办到。',vn:'Biểu thị nhận trách nhiệm, khẳng định chắc chắn không xảy ra vấn đề hoặc nhất định làm được.',vd:'出不了事，我敢担保／保证。',vdVn:'Không xảy ra chuyện gì đâu, tôi dám cam đoan.'},
     khac:[
       {a:{t:'后边不能跟名词，只能跟动词或小句。',vn:'Phía sau không thể đi với danh từ, chỉ có thể đi với động từ hoặc mệnh đề.',vd:'① 我们要担保产品质量。（×）　② 我敢担保，产品质量没有问题。（√）',vdVn:'① Câu sai: 担保 không đi với danh từ 产品质量.　② Tôi dám cam đoan chất lượng sản phẩm không có vấn đề gì. (đúng)'},
        b:{t:'后边可以跟名词，表示确保既定的要求和标准，不打折扣。',vn:'Phía sau có thể đi với danh từ, biểu thị bảo đảm đạt yêu cầu và tiêu chuẩn đã định, không giảm bớt chút nào.',vd:'我们要保证产品质量。',vdVn:'Chúng ta phải bảo đảm chất lượng sản phẩm.'}},
       {a:{t:'没有名词词性。',vn:'Không có từ tính danh từ.',vd:'',vdVn:''},
        b:{t:'名词，作为担保的事物。',vn:'Là danh từ: thứ làm vật bảo đảm, sự bảo đảm.',vd:'安定团结是我们取得胜利的保证。',vdVn:'Ổn định đoàn kết là sự bảo đảm để chúng ta giành thắng lợi.'}}
     ],
     deLam:'判断正误 — Tích vào cột đúng (√) hay sai (×) cho từng câu',
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'他的能力很强，这件棘手的事情交给他办，保证错不了。',dap:[true,false],
        giai:'ĐÚNG. 保证 + mệnh đề 错不了 (chắc chắn không sai được) — 保证 đi được với mệnh đề.'},
       {s:'由于任务异常繁重，请给他们担保科研时间。',dap:[false,true],
        giai:'SAI. Phía sau là danh từ 科研时间 → không dùng 担保; phải nói 请给他们保证科研时间 (bảo đảm thời gian nghiên cứu cho họ). 异常 ôn bài 1.'},
       {s:'反复练习和精益求精是取得成功的担保。',dap:[false,true],
        giai:'SAI. Chỗ này cần DANH TỪ "sự bảo đảm" (……的 + N) mà 担保 không có từ tính danh từ → sửa: ……是取得成功的保证.'},
       {s:'他语气坚定地对将军说：“保证圆满完成任务！”',dap:[true,false],
        giai:'ĐÚNG. 保证 + 圆满完成任务 (cụm động từ) — lời cam kết quen thuộc: 保证完成任务!'}
     ]
   }},

  {pair:'确保 — 保障',
   same:'Đều là động từ, đều có nghĩa "bảo đảm" (an toàn, thuận lợi…): 确保／保障行车安全.',
   sameEx:{zh:'出发前要检查车辆，确保／保障行车安全。',vn:'Trước khi xuất phát phải kiểm tra xe để bảo đảm an toàn khi chạy.'},
   items:[
     {word:'确保',points:[
       'Nhấn "chắc chắn làm được, không sai sót" (确 = chắc chắn) — hướng tới một kết quả cụ thể.',
       'Sau 确保 thường là động từ / mệnh đề: 确保减少污染, 确保按时完成, 确保没有错误.',
       'Chỉ là động từ, không làm danh từ.'
     ],ex:[{zh:'为了确保减少污染，燃料的使用效率必须提高。',vn:'Để bảo đảm giảm ô nhiễm, hiệu suất sử dụng nhiên liệu phải được nâng cao.'}]},
     {word:'保障',points:[
       'Nhấn "bảo vệ, che chắn" để không bị xâm hại — tân ngữ là quyền lợi, an toàn, cuộc sống: 保障权益, 保障生活.',
       'Còn là DANH TỪ: sự bảo đảm — 提供保障, 生活有保障, 社会保障.',
       'Thiên về lâu dài, mang tính chế độ, pháp luật.'
     ],ex:[{zh:'数字生活方式将为汽车的方便、安全使用提供保障。',vn:'Lối sống số sẽ mang lại sự bảo đảm cho việc dùng ô tô thuận tiện, an toàn.'}]}
   ],
   quiz:[
     {sentence:'法律要＿＿公民的合法权益。',options:['确保','保障'],answer:1,
      why:'Bảo vệ quyền lợi (权益) khỏi bị xâm hại, mang tính pháp luật → 保障权益.'},
     {sentence:'请大家交卷前再检查一遍，＿＿没有错误。',options:['确保','保障'],answer:0,
      why:'Sau là mệnh đề 没有错误 — chắc chắn đạt một kết quả cụ thể → 确保.'},
     {sentence:'有了这份工作，他的生活总算有了＿＿。',options:['确保','保障'],answer:1,
      why:'Làm danh từ sau 有了 → chỉ 保障.'},
     {sentence:'我们一定加班加点，＿＿按时完成任务。',options:['确保','保障'],answer:0,
      why:'确保 + 按时完成 (cụm động từ, kết quả cụ thể); 保障 không đi với 按时完成.'}
   ]},

  {pair:'阻碍 — 障碍',
   same:'Đều liên quan tới "cản trở, gây khó khăn"; đều dùng được làm danh từ sau 遇到: 遇到阻碍／障碍.',
   sameEx:{zh:'改革的道路上会遇到不少阻碍／障碍。',vn:'Trên con đường cải cách sẽ gặp không ít trở ngại.'},
   items:[
     {word:'阻碍',points:[
       'Chủ yếu là ĐỘNG TỪ: 阻碍 + tân ngữ (交通 / 发展 / 人们选择……).',
       'Nhấn hành động ngăn cản một quá trình đang diễn ra.',
       'Làm danh từ ít hơn: 遇到阻碍, 受到阻碍.'
     ],ex:[{zh:'这些都可能成为阻碍人们选择电动汽车的理由。',vn:'Những điều này đều có thể trở thành lý do cản trở người ta chọn ô tô điện.'}]},
     {word:'障碍',points:[
       'Chủ yếu là DANH TỪ: vật cản, chướng ngại — 障碍物, 语言障碍, 心理障碍 (ôn HSK 6 bài 12).',
       'Hay đi với 克服 / 扫除 / 排除 / 造成 / 成为 + 障碍.',
       'Ít dùng làm động từ mang tân ngữ.'
     ],ex:[{zh:'刚到国外时，语言障碍让他很苦恼。',vn:'Mới ra nước ngoài, rào cản ngôn ngữ khiến anh ấy rất khổ sở.'}]}
   ],
   quiz:[
     {sentence:'路边乱停的车严重＿＿了交通。',options:['阻碍','障碍'],answer:0,
      why:'Có tân ngữ 交通 → động từ 阻碍.'},
     {sentence:'他花了一年时间才克服了语言＿＿。',options:['阻碍','障碍'],answer:1,
      why:'语言障碍 là cụm cố định; 克服 + 障碍 (danh từ).'},
     {sentence:'比赛中，运动员要跳过一个个＿＿物。',options:['阻碍','障碍'],answer:1,
      why:'障碍物 = vật chướng ngại, từ ghép cố định.'},
     {sentence:'保守的思想会＿＿社会的发展。',options:['阻碍','障碍'],answer:0,
      why:'Động từ + tân ngữ 发展 → 阻碍.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'担保',hv:'đảm bảo',vn:'cam đoan, bảo đảm',note:'Trùng âm với "đảm bảo" tiếng Việt, nhưng nhớ: 担保 KHÔNG đi với danh từ (×担保质量) — tiếng Việt thì "đảm bảo chất lượng" nói được.'},
    {zh:'大体',hv:'đại thể',vn:'về cơ bản, đại khái',note:'Trùng khít: 大体相同 = về đại thể giống nhau.'},
    {zh:'规范',hv:'quy phạm',vn:'đúng quy tắc, chuẩn mực',note:'"Quy phạm" tiếng Việt là danh từ (quy phạm pháp luật); 规范 còn là tính từ: 发音很规范 = phát âm rất chuẩn.'},
    {zh:'谋求',hv:'mưu cầu',vn:'tìm kiếm, mưu cầu',note:'Trùng khít: 谋求幸福 = mưu cầu hạnh phúc.'},
    {zh:'珍珠',hv:'trân châu',vn:'ngọc trai',note:'Trùng khít: "trân châu" = ngọc trai (trà sữa trân châu cũng từ đây).'},
    {zh:'助理',hv:'trợ lý',vn:'trợ lý',note:'Trùng khít: 经理助理 = trợ lý giám đốc.'},
    {zh:'比重',hv:'tỷ trọng',vn:'tỷ trọng',note:'Trùng khít: 所占比重 = tỷ trọng chiếm giữ.'},
    {zh:'潮流',hv:'triều lưu',vn:'trào lưu, xu hướng',note:'"Triều lưu" → tiếng Việt quen đọc "trào lưu".'},
    {zh:'融合',hv:'dung hợp',vn:'hòa hợp, kết hợp',note:'Tiếng Việt có "dung hợp" (văn viết); thường dịch "hòa quyện, kết hợp, hòa làm một".'},
    {zh:'效益',hv:'hiệu ích',vn:'hiệu quả, lợi ích',note:'"Hiệu ích" ít dùng; dịch "hiệu quả (kinh tế)". Khác 效率 (hiệu suất).'}
  ],
  idiom:[
    {zh:'优胜劣汰',hv:'ưu thắng liệt thải',vn:'mạnh thắng yếu thua, tốt còn kém mất',note:'"Ưu" = tốt, "thắng" = thắng, "liệt" = kém, "thải" = bị loại → quy luật chọn lọc (thải như "đào thải").'},
    {zh:'锦上添花',hv:'cẩm thượng thiêm hoa',vn:'thêu hoa trên gấm',note:'Tiếng Việt có sẵn thành ngữ "dệt hoa trên gấm / thêu hoa trên gấm" — đã đẹp càng thêm đẹp.'},
    {zh:'忍痛割爱',hv:'nhẫn thống cát ái',vn:'đành đau lòng từ bỏ thứ mình yêu',note:'"Nhẫn thống" = nén đau, "cát ái" = cắt bỏ điều yêu thích (割 = cắt).'},
    {zh:'心烦意乱',hv:'tâm phiền ý loạn',vn:'bực bội rối bời',note:'"Tâm phiền ý loạn" — lòng phiền muộn, ý nghĩ rối loạn.'},
    {zh:'明智之举',hv:'minh trí chi cử',vn:'việc làm sáng suốt',note:'"Cử" = hành động, việc làm (như "cử chỉ"); 之 = 的.'}
  ],
  trap:[
    {zh:'事故',hv:'sự cố',vn:'tai nạn',
     warn:'BẪY: "sự cố" tiếng Việt là trục trặc nhỏ (sự cố kỹ thuật → 故障). 事故 tiếng Trung là TAI NẠN có thiệt hại: 交通事故 = tai nạn giao thông, không dịch "sự cố giao thông".'},
    {zh:'干预',hv:'can dự',vn:'can thiệp',
     warn:'BẪY: "can dự" tiếng Việt = dính líu, có liên quan. 干预 tiếng Trung = CAN THIỆP chủ động: 无人干预 = không có người can thiệp.'},
    {zh:'平坦',hv:'bình thản',vn:'bằng phẳng',
     warn:'BẪY: "bình thản" tiếng Việt = điềm tĩnh (平静, 淡定). 平坦 tiếng Trung chỉ mặt đất BẰNG PHẲNG: 平坦的高速路.'},
    {zh:'代价',hv:'đại giá',vn:'cái giá phải trả',
     warn:'Không có "đại giá" trong tiếng Việt (đừng nhầm "đại giá" = giá lớn). 代 = thay thế → 代价 = thứ phải bỏ ra để đổi lấy: 付出代价 = trả giá.'},
    {zh:'排除',hv:'bài trừ',vn:'loại trừ, loại bỏ',
     warn:'"Bài trừ" tiếng Việt thiên về chống đối, diệt bỏ (bài trừ mê tín). 排除 thường là LOẠI RA: 不排除……的可能 = không loại trừ khả năng…; 排除故障 = khắc phục sự cố.'},
    {zh:'抵达',hv:'để đạt',vn:'đến, tới',
     warn:'Không phải "đạt được". 抵达 = ĐẾN NƠI (抵 = tới, 达 = đến): 抵达终点 = tới điểm cuối.'},
    {zh:'伴侣',hv:'bạn lữ',vn:'bạn đồng hành, bạn đời',
     warn:'"Bạn lữ" nghe như "bạn du lịch"; 伴侣 thường chỉ BẠN ĐỜI (vợ / chồng): 终身伴侣; nghĩa ví von: thứ gắn bó không thể thiếu.'},
    {zh:'昂贵',hv:'ngang quý',vn:'đắt đỏ',
     warn:'"Ngang" (昂) = ngẩng cao (hiên ngang) → giá "ngẩng cao" = ĐẮT. Không liên quan "cao quý".'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'遇到交通',right:'堵塞'},
  {left:'被堵车',right:'折磨得心烦意乱'},
  {left:'汽车要是也有',right:'双翼'},
  {left:'别的不敢',right:'担保'},
  {left:'勾画出',right:'汽车的轮廓'},
  {left:'北极冰川',right:'在融化'},
  {left:'石油资源',right:'日益紧缺'},
  {left:'死于',right:'交通事故'},
  {left:'人类会不会',right:'忍痛割爱'},
  {left:'根据',right:'优胜劣汰的原则'},
  {left:'一切',right:'皆有可能'},
  {left:'似乎不是',right:'明智之举'},
  {left:'无人',right:'干预'},
  {left:'在平坦的高速路上',right:'奔驰'},
  {left:'像是一条线上的',right:'珍珠'},
  {left:'车辆自动',right:'停泊入位'},
  {left:'加入到汽车研发的',right:'行列'},
  {left:'无法阻挡的',right:'潮流'},
  {left:'创造虚拟个人',right:'助理'},
  {left:'必然的服务，而非',right:'锦上添花'},
  {left:'为安全使用',right:'提供保障'},
  {left:'电动汽车的',right:'比重'},
  {left:'废气的',right:'排放'},
  {left:'付出了巨大的',right:'代价'},
  {left:'扮演支柱产业的',right:'角色'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài một câu
// ══════════════════════════════════════════
var fillData = [
  {pre:'一场事故造成了高速路上的交通',blank:'堵塞',post:'，几千辆车排起了长队。',hint:'(tắc nghẽn)',ans:'堵塞'},
  {pre:'因为大雾，几百名旅客',blank:'滞留',post:'在机场，无法按时起飞。',hint:'(bị kẹt lại)',ans:'滞留'},
  {pre:'牙疼了一整夜，把我',blank:'折磨',post:'得一点儿也睡不着。',hint:'(hành hạ)',ans:'折磨'},
  {pre:'有了这位得力助手，他的公司如虎添',blank:'翼',post:'，发展得更快了。',hint:'(cánh)',ans:'翼'},
  {pre:'这件事交给我，我敢',blank:'担保',post:'不会出任何问题。',hint:'(cam đoan)',ans:'担保'},
  {pre:'两个方案',blank:'大体',post:'相同，只在细节上有些区别。',hint:'(về cơ bản)',ans:'大体'},
  {pre:'老师只用几句话，就',blank:'勾画',post:'出了故事的主要内容。',hint:'(phác họa)',ans:'勾画'},
  {pre:'天快黑了，远处的山只剩下一个模糊的',blank:'轮廓',post:'。',hint:'(đường nét)',ans:'轮廓'},
  {pre:'出了问题不要互相',blank:'指责',post:'，应该一起想办法解决。',hint:'(chỉ trích, đổ lỗi)',ans:'指责'},
  {pre:'太阳一出来，屋顶上的雪就开始',blank:'融化',post:'了。',hint:'(tan)',ans:'融化'},
  {pre:'这个国家的经济主要依靠出口',blank:'石油',post:'。',hint:'(dầu mỏ)',ans:'石油'},
  {pre:'司机酒后开车，结果发生了严重的交通',blank:'事故',post:'。',hint:'(tai nạn)',ans:'事故'},
  {pre:'农民们正在田里',blank:'割',post:'麦子，个个满头大汗。',hint:'(gặt, cắt)',ans:'割'},
  {pre:'市场竞争讲究',blank:'优胜劣汰',post:'，质量差的产品迟早会被淘汰。',hint:'(mạnh thắng yếu thua)',ans:'优胜劣汰'},
  {pre:'只要功夫深，一切',blank:'皆',post:'有可能。',hint:'(đều)',ans:'皆'},
  {pre:'在气头上作决定，往往不是',blank:'明智',post:'之举。',hint:'(sáng suốt)',ans:'明智'},
  {pre:'对这个小山村来说，发展旅游业是唯一的',blank:'出路',post:'。',hint:'(lối thoát)',ans:'出路'},
  {pre:'学开车的时候一定要',blank:'规范',post:'操作，不能养成坏习惯。',hint:'(đúng quy tắc)',ans:'规范'},
  {pre:'两家公司都希望通过合作',blank:'谋求',post:'更大的发展。',hint:'(tìm kiếm)',ans:'谋求'},
  {pre:'孩子的兴趣爱好，父母不应该过多',blank:'干预',post:'。',hint:'(can thiệp)',ans:'干预'},
  {pre:'以前这里是一条土路，现在变成了宽阔',blank:'平坦',post:'的马路。',hint:'(bằng phẳng)',ans:'平坦'},
  {pre:'一匹骏马在辽阔的草原上自由地',blank:'奔驰',post:'。',hint:'(phi nước đại)',ans:'奔驰'},
  {pre:'我',blank:'试图',post:'说服他，可他根本听不进去。',hint:'(cố, định)',ans:'试图'},
  {pre:'家长要正确',blank:'引导',post:'孩子合理使用手机。',hint:'(hướng dẫn)',ans:'引导'},
  {pre:'妈妈从超市买回来一',blank:'串',post:'葡萄。',hint:'(chùm)',ans:'串'},
  {pre:'这条',blank:'珍珠',post:'项链是奶奶留给我的。',hint:'(ngọc trai)',ans:'珍珠'},
  {pre:'这家工厂管理得好，经济',blank:'效益',post:'一年比一年高。',hint:'(hiệu quả)',ans:'效益'},
  {pre:'航班将于晚上九点',blank:'抵达',post:'上海。',hint:'(đến)',ans:'抵达'},
  {pre:'经过两个小时的比赛，他第一个跑到了',blank:'终点',post:'。',hint:'(đích)',ans:'终点'},
  {pre:'新教室都',blank:'配备',post:'了电脑和投影仪。',hint:'(trang bị)',ans:'配备'},
  {pre:'港口里',blank:'停泊',post:'着许多大船。',hint:'(neo đậu)',ans:'停泊'},
  {pre:'这篇文章我改了三遍，',blank:'力求',post:'做到简洁明了。',hint:'(cố gắng hết sức)',ans:'力求'},
  {pre:'甲、乙、',blank:'丙',post:'三个队中，乙队的成绩最好。',hint:'(thứ ba)',ans:'丙'},
  {pre:'这首歌',blank:'融合',post:'了民族音乐和流行音乐的特点。',hint:'(kết hợp)',ans:'融合'},
  {pre:'遇到问题，我习惯先用搜索',blank:'引擎',post:'查一查。',hint:'(công cụ tìm kiếm)',ans:'引擎'},
  {pre:'越来越多的年轻人加入了志愿者的',blank:'行列',post:'。',hint:'(đội ngũ)',ans:'行列'},
  {pre:'她穿衣服从来不赶',blank:'潮流',post:'，只追求舒服。',hint:'(mốt, trào lưu)',ans:'潮流'},
  {pre:'王总的',blank:'助理',post:'已经帮他订好了机票。',hint:'(trợ lý)',ans:'助理'},
  {pre:'这件礼服已经很漂亮了，再戴上这条项链，真是',blank:'锦上添花',post:'。',hint:'(đã đẹp càng đẹp)',ans:'锦上添花'},
  {pre:'这项政策为老年人的生活提供了',blank:'保障',post:'。',hint:'(sự bảo đảm)',ans:'保障'},
  {pre:'把鸡肉切成小',blank:'丁',post:'，再和花生一起炒。',hint:'(hạt lựu)',ans:'丁'},
  {pre:'这辆大卡车烧的是',blank:'柴油',post:'，不是汽油。',hint:'(dầu diesel)',ans:'柴油'},
  {pre:'政府采取措施，有效',blank:'遏制',post:'了房价过快上涨。',hint:'(kiềm chế)',ans:'遏制'},
  {pre:'近年来，网上购物在消费中所占的',blank:'比重',post:'越来越大。',hint:'(tỷ trọng)',ans:'比重'},
  {pre:'这里的房价十分',blank:'昂贵',post:'，普通人很难买得起。',hint:'(đắt đỏ)',ans:'昂贵'},
  {pre:'害怕失败会',blank:'阻碍',post:'我们进步。',hint:'(cản trở)',ans:'阻碍'},
  {pre:'工程师很快就',blank:'排除',post:'了电脑的故障。',hint:'(khắc phục, loại bỏ)',ans:'排除'},
  {pre:'出门前请关好门窗，',blank:'确保',post:'家里的安全。',hint:'(bảo đảm)',ans:'确保'},
  {pre:'这家工厂因为违法',blank:'排放',post:'污水而被罚款。',hint:'(xả, thải ra)',ans:'排放'},
  {pre:'为了一时的快乐，他付出了沉重的',blank:'代价',post:'。',hint:'(cái giá)',ans:'代价'},
  {pre:'她和丈夫是大学同学，也是一生的',blank:'伴侣',post:'。',hint:'(bạn đời)',ans:'伴侣'},
  {pre:'父亲生病以后，大哥成了家里的',blank:'支柱',post:'。',hint:'(trụ cột)',ans:'支柱'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (动不动 · 甲乙丙丁……) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['他','最近','压力很大','，','动不动','就','发脾气','。'],ans:'他最近压力很大，动不动就发脾气。',audio:'他最近压力很大，动不动就发脾气。'},
  {words:['这台','旧电脑','动不动','就','死机','，','该换了','。'],ans:'这台旧电脑动不动就死机，该换了。',audio:'这台旧电脑动不动就死机，该换了。'},
  {words:['父母','不要','动不动','就','训斥','孩子','。'],ans:'父母不要动不动就训斥孩子。',audio:'父母不要动不动就训斥孩子。'},
  {words:['她','身体','很弱','，','动不动','就','感冒','。'],ans:'她身体很弱，动不动就感冒。',audio:'她身体很弱，动不动就感冒。'},
  {words:['这篇文章','分为','甲、乙、丙','三个部分','。'],ans:'这篇文章分为甲、乙、丙三个部分。',audio:'这篇文章分为甲、乙、丙三个部分。'},
  {words:['甲午战争','发生','在','1894年','。'],ans:'甲午战争发生在1894年。',audio:'甲午战争发生在1894年。'},
  {words:['2015年','是','农历','乙未年','。'],ans:'2015年是农历乙未年。',audio:'2015年是农历乙未年。'},
  {words:['别的','不敢','担保','，','以下四点','大体','勾画出了','汽车的轮廓','。'],ans:'别的不敢担保，以下四点大体勾画出了汽车的轮廓。',audio:'别的不敢担保，以下四点大体勾画出了汽车的轮廓。'},
  {words:['根据','优胜劣汰的','原则','，','汽车','会不会','被取代','？'],ans:'根据优胜劣汰的原则，汽车会不会被取代？',audio:'根据优胜劣汰的原则，汽车会不会被取代？'},
  {words:['车企','与','电脑公司','合作','成了','无法阻挡的','潮流','。'],ans:'车企与电脑公司合作成了无法阻挡的潮流。',audio:'车企与电脑公司合作成了无法阻挡的潮流。'},
  {words:['虚拟个人助理','将会是','必然的服务','，','而非','锦上添花','。'],ans:'虚拟个人助理将会是必然的服务，而非锦上添花。',audio:'虚拟个人助理将会是必然的服务，而非锦上添花。'},
  {words:['汽车','抵达','终点后','能','自动','停泊入位','。'],ans:'汽车抵达终点后能自动停泊入位。',audio:'汽车抵达终点后能自动停泊入位。'},
  {words:['为了','确保','减少污染','，','废气的排放','必须','减少','。'],ans:'为了确保减少污染，废气的排放必须减少。',audio:'为了确保减少污染，废气的排放必须减少。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'我们要____产品质量，不能让顾客失望。',opts:['担保','保证','指责','排除'],ans:1,
   exp:'Sau là danh từ 产品质量 → 保证 (sách: ×担保产品质量). 担保 chỉ đi với động từ / mệnh đề.'},
  {wrong:'出不了事，我敢____。',opts:['担保','排放','阻碍','谋求'],ans:0,
   exp:'我敢担保 = tôi dám cam đoan (câu mẫu phần giống nhau của 担保—保证). Các từ khác không hợp nghĩa.'},
  {wrong:'良好的休息是提高学习效率的____。',opts:['担保','干预','保证','引导'],ans:2,
   exp:'Cần DANH TỪ "sự bảo đảm" → 保证; 担保 không có từ tính danh từ (做一做 ③).'},
  {wrong:'他最近压力很大，____就发脾气。',opts:['动不动','大体','力求','皆'],ans:0,
   exp:'动不动就 + V = hơi một chút là … (việc không mong muốn) — Chú thích 1.'},
  {wrong:'这个方案____可行，只是有些细节还要修改。',opts:['皆','动不动','大体','力求'],ans:2,
   exp:'大体 = về cơ bản; vế sau 只是……细节 cho thấy "đại thể được, chi tiết còn phải sửa".'},
  {wrong:'大雪严重____了交通，很多车辆滞留在高速路上。',opts:['阻碍','障碍','保障','配备'],ans:0,
   exp:'Có tân ngữ 交通 → động từ 阻碍. 障碍 chủ yếu là danh từ (chướng ngại).'},
  {wrong:'他花了一年时间，终于克服了语言____。',opts:['阻碍','保障','效益','障碍'],ans:3,
   exp:'克服 + 语言障碍 (rào cản ngôn ngữ) — cụm cố định; 阻碍 chủ yếu là động từ.'},
  {wrong:'法律要____每个公民的合法权益。',opts:['确保','保障','担保','排除'],ans:1,
   exp:'保障 + 权益 = bảo vệ quyền lợi (mang tính pháp luật, lâu dài). 担保 không đi với danh từ.'},
  {wrong:'交卷以前再检查一遍，____没有错误。',opts:['保障','谋求','确保','干预'],ans:2,
   exp:'确保 + mệnh đề 没有错误 = bảo đảm chắc chắn không sai. 谋求 cần tân ngữ trừu tượng (发展 / 合作).'},
  {wrong:'为了减少污染，工厂必须减少废气的____。',opts:['排除','排放','比重','代价'],ans:1,
   exp:'废气的排放 = lượng khí thải ra. 排除 là loại trừ (khó khăn, khả năng).'},
  {wrong:'医生通过检查，____了他得重病的可能。',opts:['排放','阻碍','遏制','排除'],ans:3,
   exp:'排除 + ……的可能 = loại trừ khả năng …. 排放 dùng cho khí thải, nước thải.'},
  {wrong:'在我们的饮食中，蔬菜所占的____应该大一些。',opts:['比重','代价','效益','轮廓'],ans:0,
   exp:'所占的比重 = tỷ trọng chiếm giữ. 代价 là cái giá; 效益 là hiệu quả; 轮廓 là đường nét.'},
  {wrong:'经济发展不能以破坏环境为____。',opts:['效益','比重','代价','潮流'],ans:2,
   exp:'以……为代价 = đánh đổi bằng … (以……为…… ôn bài 11).'},
  {wrong:'电动汽车的造价太____，很多家庭买不起。',opts:['平坦','明智','规范','昂贵'],ans:3,
   exp:'造价昂贵 = giá thành đắt; hợp với 买不起. 平坦 là bằng phẳng (không phải "bình thản").'},
  {wrong:'很多年轻人离开家乡，到大城市____发展。',opts:['谋求','试图','力求','干预'],ans:0,
   exp:'谋求 + 发展 (tân ngữ danh từ trừu tượng). 试图 / 力求 phải đi với động từ / tính từ phía sau.'},
  {wrong:'他____说服父亲，可是父亲根本不听。',opts:['谋求','试图','遏制','配备'],ans:1,
   exp:'试图 + V (说服) = cố thử làm; vế sau 可是……不听 cho thấy không thành công.'},
  {wrong:'政府采取了有力措施，____了疾病的蔓延。',opts:['融化','抵达','遏制','引导'],ans:2,
   exp:'遏制 + 蔓延 = ngăn chặn sự lây lan. 融化 là tan chảy; 抵达 là đến nơi; 引导 là dẫn dắt.'},
  {wrong:'由于经营不善，这家公司的经济____越来越差。',opts:['终点','行列','助理','效益'],ans:3,
   exp:'经济效益 = hiệu quả kinh tế (làm ăn). Các từ khác không đi với 经济 và 差.'},
  {wrong:'他做事总是____完美，每个细节都不放过。',opts:['谋求','试图','排除','力求'],ans:3,
   exp:'力求 + 完美 (tính từ chỉ mục tiêu) = cố gắng đạt tới hoàn hảo. 谋求 cần danh từ; 试图 cần động từ.'},
  {wrong:'经过几十年的发展，这个国家已经进入了发达国家的____。',opts:['潮流','行列','伴侣','支柱'],ans:1,
   exp:'进入 + ……的行列 = lọt vào hàng ngũ …. 潮流 là xu hướng; 支柱 là trụ cột.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 22 + ôn từ HSK 6 bài 1–18 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hơi một chút là cô ấy lại chỉ trích bạn cùng lớp trước mặt mọi người, làm vậy thì có phần quá thiếu sáng suốt.',zh:'她动不动就当众指责同学，这样做未免太不明智了。',py:'Tā dòngbudòng jiù dāngzhòng zhǐzé tóngxué, zhèyàng zuò wèimiǎn tài bù míngzhì le.',goiY:['动不动就','指责','未免','明智'],giai:'动不动就 + V (Chú thích 1): hơi một chút là … (việc không mong muốn), đứng sau chủ ngữ; 未免太……了 (ôn bài 4) = có phần quá … — lời phê bình nhẹ. Đừng dịch "hơi một chút" thành 一点儿.'},
  {vi:'Chiếc điện thoại này đắt thì đắt thật, nhưng camera được trang bị trên nó quả thực thuộc loại hàng đầu.',zh:'这款手机固然昂贵，可它配备的摄像头确实一流。',py:'Zhè kuǎn shǒujī gùrán ángguì, kě tā pèibèi de shèxiàngtóu quèshí yīliú.',goiY:['固然……可……','昂贵','配备'],giai:'固然 (ôn bài 5) thừa nhận một sự thật, vế sau 可 / 但 chuyển ý; "camera được trang bị trên nó" → 它配备的摄像头 (định ngữ đặt TRƯỚC danh từ). 一流 ôn bài 3.'},
  {vi:'Tài xế nhất thiết phải lái xe đúng quy tắc, nếu không thì rất dễ xảy ra tai nạn giao thông.',zh:'司机务必规范驾车，否则很容易发生交通事故。',py:'Sījī wùbì guīfàn jiàchē, fǒuzé hěn róngyì fāshēng jiāotōng shìgù.',goiY:['务必','否则','规范','事故'],giai:'务必 (ôn bài 12) = nhất thiết phải; 否则 đứng đầu vế sau nêu hậu quả. "Tai nạn giao thông" là 交通事故 — không dịch thành "sự cố" (故障).'},
  {vi:'Để bảo đảm đến trường đúng giờ, ngày nào tôi cũng ra khỏi nhà trước 6 giờ, vì giờ cao điểm đường tắc kinh khủng.',zh:'为了确保按时抵达学校，我每天六点以前就出门，因为高峰时间路上堵得厉害。',py:'Wèile quèbǎo ànshí dǐdá xuéxiào, wǒ měi tiān liù diǎn yǐqián jiù chūmén, yīnwèi gāofēng shíjiān lù shang dǔ de lìhai.',goiY:['为了','确保','抵达','高峰'],giai:'为了 + mục đích đặt đầu câu, 因为 + lý do đặt cuối (bổ sung); 就 nhấn "sớm". 确保 + cụm động từ; 高峰 ôn bài 14.'},
  {vi:'Trong ba phương án Giáp, Ất, Bính mà lớp đưa ra, cô giáo cho rằng phương án Bính tuy tốn thời gian nhất nhưng lại là lựa chọn sáng suốt nhất.',zh:'在班里提出的甲、乙、丙三个方案中，老师认为丙方案虽然最费时间，却是最明智的选择。',py:'Zài bān li tíchū de jiǎ, yǐ, bǐng sān ge fāng\'àn zhōng, lǎoshī rènwéi bǐng fāng\'àn suīrán zuì fèi shíjiān, què shì zuì míngzhì de xuǎnzé.',goiY:['甲、乙、丙','虽然……却……','明智'],giai:'甲、乙、丙 dùng để đánh số thứ tự (Chú thích 2) — giữ nguyên "Giáp, Ất, Bính" hoặc dịch "thứ nhất, thứ hai, thứ ba"; 却 đứng sau chủ ngữ, trước vị ngữ (không đặt đầu vế như 但是).'},
  {vi:'Nếu cha mẹ hơi một chút là can thiệp vào lựa chọn của con, thì không những không giúp được con mà trái lại còn có thể cản trở con trưởng thành.',zh:'如果父母动不动就干预孩子的选择，不但帮不了孩子，反而可能阻碍他们的成长。',py:'Rúguǒ fùmǔ dòngbudòng jiù gānyù háizi de xuǎnzé, búdàn bāng bu liǎo háizi, fǎn\'ér kěnéng zǔ\'ài tāmen de chéngzhǎng.',goiY:['动不动就','干预','不但……反而……','阻碍'],giai:'不但 + (phủ định)……，反而…… = không những không … mà trái lại … (kết quả ngược mong đợi); 干预 = can thiệp — không dịch theo âm "can dự".'},
  {vi:'Dù học phí lớp học thêm rất đắt, bố mẹ vốn tính toán chi li của tôi vẫn cố hết sức tạo cho tôi điều kiện học tập tốt nhất.',zh:'尽管补习班的学费十分昂贵，精打细算的爸妈还是力求为我提供最好的学习条件。',py:'Jǐnguǎn bǔxíbān de xuéfèi shífēn ángguì, jīngdǎ-xìsuàn de bà-mā háishi lìqiú wèi wǒ tígōng zuì hǎo de xuéxí tiáojiàn.',goiY:['尽管……还是……','昂贵','力求','精打细算'],giai:'尽管 + sự thật, (S) 还是 + V = dù … vẫn …; 力求 + V = dốc sức để …; 精打细算 (ôn bài 14) làm định ngữ cho 爸妈.'},
  {vi:'Thay vì hơi một chút lại trách người khác, chẳng bằng trước hết hãy nghĩ về vấn đề của chính mình, đó mới là lối thoát căn bản để giải quyết mâu thuẫn.',zh:'与其动不动就指责别人，不如先想想自己的问题，这才是解决矛盾的根本出路。',py:'Yǔqí dòngbudòng jiù zhǐzé biérén, bùrú xiān xiǎngxiang zìjǐ de wèntí, zhè cái shì jiějué máodùn de gēnběn chūlù.',goiY:['与其……不如……','动不动就','出路'],giai:'与其 A 不如 B = thay vì A chẳng bằng B (chọn B); vế ba 这才是…… tổng kết — 才 nhấn "mới chính là". 根本出路 = lối thoát căn bản.'},
  {vi:'Hợp đồng quy định, một khi bên B không thể đến nơi đúng hạn, bên A có quyền hủy hợp đồng, mọi tổn thất đều do bên B gánh chịu.',zh:'合同规定，一旦乙方不能按时抵达，甲方就有权取消合同，一切损失皆由乙方承担。',py:'Hétong guīdìng, yídàn yǐfāng bù néng ànshí dǐdá, jiǎfāng jiù yǒu quán qǔxiāo hétong, yíqiè sǔnshī jiē yóu yǐfāng chéngdān.',goiY:['一旦……就……','甲方','乙方','皆'],giai:'甲方 / 乙方 = bên A / bên B trong hợp đồng (甲乙丙丁 dùng để đánh số); 一旦……就…… = một khi … thì …; 皆 = 都 (văn viết, hợp với giọng hợp đồng).'},
  {vi:'Ô tô điện tuy có thể giảm lượng khí thải, nhưng nếu giá cứ đắt như vậy mãi thì tỷ trọng của nó khó mà tăng nhanh được.',zh:'电动汽车虽然能减少废气排放，但如果价格一直这么昂贵，它的比重就很难迅速提高。',py:'Diàndòng qìchē suīrán néng jiǎnshǎo fèiqì páifàng, dàn rúguǒ jiàgé yìzhí zhème ángguì, tā de bǐzhòng jiù hěn nán xùnsù tígāo.',goiY:['虽然……但……','如果……就……','排放','比重'],giai:'Câu ghép lồng: 虽然……但 (chuyển ý) chứa bên trong một câu giả thiết 如果……就……; 就 đặt sau chủ ngữ 它的比重. 昂贵 trang trọng hơn 贵.'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Mỗi lần gặp tắc đường, những người bị kẹt lại trên đường đều bực bội rối bời.',zh:'每次遇到交通堵塞，那些滞留在路上的人们都会心烦意乱。',py:'Měi cì yùdào jiāotōng dǔsè, nàxiē zhìliú zài lù shang de rénmen dōu huì xīnfán-yìluàn.',goiY:['堵塞 = tắc nghẽn','滞留 = bị kẹt lại','心烦意乱 = bực bội rối bời'],giai:'每次……都…… = mỗi lần … đều …; định ngữ dài 滞留在路上的 khi dịch đặt SAU danh từ: "những người bị kẹt lại trên đường".'},
  {vi:'Tác giả tuy không dám cam đoan mọi điều, nhưng vẫn dùng bốn điểm để phác họa đại thể hình dáng của ô tô tương lai.',zh:'作者虽然不敢担保一切，但还是用四点大体勾画出了未来汽车的轮廓。',py:'Zuòzhě suīrán bù gǎn dānbǎo yíqiè, dàn háishi yòng sì diǎn dàtǐ gōuhuà chūle wèilái qìchē de lúnkuò.',goiY:['担保 = cam đoan','大体 = về cơ bản, đại thể','勾画 = phác họa','轮廓 = hình dáng'],giai:'虽然……但还是…… = tuy … nhưng vẫn …; 大体 là phó từ bổ nghĩa cho 勾画 — dịch "phác họa đại thể / sơ bộ phác họa".'},
  {vi:'Công ty công cụ tìm kiếm nhận ra cơ hội kinh doanh trong đó, thế là nóng lòng gia nhập hàng ngũ nghiên cứu phát triển ô tô.',zh:'搜索引擎公司意识到其中的商机，于是迫不及待地加入了汽车研发的行列。',py:'Sōusuǒ yǐnqíng gōngsī yìshí dào qízhōng de shāngjī, yúshì pòbùjídài de jiārùle qìchē yánfā de hángliè.',goiY:['搜索引擎 = công cụ tìm kiếm','于是 = thế là','迫不及待 = nóng lòng','行列 = hàng ngũ'],giai:'于是 nối hành động tiếp theo do vế trước dẫn tới; 迫不及待 (ôn bài 5) dịch "nóng lòng, không chờ nổi"; 加入……的行列 = gia nhập đội ngũ ….'},
  {vi:'Những chiếc xe không cần người can thiệp có thể tự động lao vun vút trên đường cao tốc bằng phẳng, người lái có thể làm việc, cũng có thể nghỉ ngơi.',zh:'无人干预的汽车能在平坦的高速路上自动奔驰，驾驶者可以工作，也可以休息。',py:'Wú rén gānyù de qìchē néng zài píngtǎn de gāosùlù shang zìdòng bēnchí, jiàshǐzhě kěyǐ gōngzuò, yě kěyǐ xiūxi.',goiY:['干预 = can thiệp','平坦 = bằng phẳng','奔驰 = lao vun vút'],giai:'可以……，也可以…… = có thể …, cũng có thể … (liệt kê lựa chọn); 平坦 là "bằng phẳng", đừng nhầm với "bình thản"; 无人干预 = không có người can thiệp.'},
  {vi:'Châu Âu đang thử để một tài xế chuyên nghiệp dẫn đầu cả một đoàn dài ô tô tiến lên, nhờ đó nâng cao đáng kể hiệu quả công việc.',zh:'欧洲试图让一名职业司机引导一长串汽车前行，从而大大提高工作效益。',py:'Ōuzhōu shìtú ràng yì míng zhíyè sījī yǐndǎo yì cháng chuàn qìchē qiánxíng, cóng\'ér dàdà tígāo gōngzuò xiàoyì.',goiY:['试图 = thử, cố','引导 = dẫn đường','从而 = nhờ đó mà','效益 = hiệu quả'],giai:'从而 nối kết quả đạt được nhờ vế trước — dịch "nhờ đó, từ đó"; 一长串汽车 = một đoàn dài ô tô (串 là lượng từ).'},
  {vi:'Mọi thứ đều có thể xảy ra, nhưng xét tới sự linh hoạt, tiện lợi của ô tô, hơi một chút đã loại bỏ nó thì e rằng chẳng sáng suốt chút nào.',zh:'一切皆有可能，但鉴于汽车的灵活方便，动不动就将其淘汰似乎并不明智。',py:'Yíqiè jiē yǒu kěnéng, dàn jiànyú qìchē de línghuó fāngbiàn, dòngbudòng jiù jiāng qí táotài sìhū bìng bù míngzhì.',goiY:['皆 = đều','鉴于 = xét thấy','动不动就 = hơi một chút là','明智 = sáng suốt'],giai:'鉴于 (ôn bài 12) nêu căn cứ để đánh giá; 将其淘汰 = 把它淘汰 (văn viết); 似乎并不…… là cách nói giảm — dịch "e rằng chẳng …".'},
  {vi:'Trợ lý cá nhân ảo sẽ là một dịch vụ tất yếu chứ không phải thứ thêu hoa trên gấm, nó sẽ mang lại sự bảo đảm cho việc lái xe an toàn.',zh:'虚拟个人助理将是必然的服务，而非锦上添花，它将为安全驾驶提供保障。',py:'Xūnǐ gèrén zhùlǐ jiāng shì bìrán de fúwù, ér fēi jǐnshàng-tiānhuā, tā jiāng wèi ānquán jiàshǐ tígōng bǎozhàng.',goiY:['助理 = trợ lý','而非 = chứ không phải','锦上添花 = thêu hoa trên gấm','保障 = sự bảo đảm'],giai:'是 A，而非 B = là A chứ không phải B (而非 = 而不是, văn viết); 为……提供保障 dịch "mang lại sự bảo đảm cho …", không dịch từng chữ "cung cấp bảo đảm".'},
  {vi:'Dù việc phát triển năng lượng sạch là để kiềm chế việc dùng xăng, nhưng hiện nay tỷ trọng ô tô điện vẫn chưa cao lắm.',zh:'尽管清洁能源的开发是为了遏制汽油的使用，但电动汽车目前的比重还不太高。',py:'Jǐnguǎn qīngjié néngyuán de kāifā shì wèile èzhì qìyóu de shǐyòng, dàn diàndòng qìchē mùqián de bǐzhòng hái bú tài gāo.',goiY:['尽管……但…… = dù … nhưng …','遏制 = kiềm chế','比重 = tỷ trọng'],giai:'尽管……但…… nêu sự thật rồi chuyển ý; 是为了 + mục đích = là để …; 开发 ở đây dịch "phát triển, khai thác".'},
  {vi:'Do pin nặng nề, giá thành đắt đỏ, không loại trừ khả năng đi đường dài vẫn phải dựa vào xăng, vì vậy nhất định phải bảo đảm giảm lượng khí thải.',zh:'由于电池沉重、造价昂贵，不排除长途行车仍要靠汽油，因此必须确保减少废气排放。',py:'Yóuyú diànchí chénzhòng, zàojià ángguì, bù páichú chángtú xíngchē réng yào kào qìyóu, yīncǐ bìxū quèbǎo jiǎnshǎo fèiqì páifàng.',goiY:['由于……因此…… = do … nên …','不排除 = không loại trừ','确保 = bảo đảm','排放 = thải ra'],giai:'Chuỗi nhân quả qua ba vế: 由于 (nguyên nhân) → 不排除…… (khả năng) → 因此 (kết luận); 不排除 + mệnh đề — thêm "khả năng" khi dịch cho tự nhiên; 沉重 ôn bài 18.'},
  {vi:'Ô tô luôn gắn bó với loài người, và loài người vì thế đã phải trả một cái giá rất lớn; nếu nó vẫn là người bạn đồng hành không thể thiếu, thì nhất định phải sạch hơn, an toàn hơn.',zh:'汽车与人类相伴相随，人类为此付出了巨大的代价；如果它仍是不可缺少的伴侣，就必须更加清洁、安全。',py:'Qìchē yǔ rénlèi xiāngbàn-xiāngsuí, rénlèi wèi cǐ fùchūle jùdà de dàijià; rúguǒ tā réng shì bù kě quēshǎo de bànlǚ, jiù bìxū gèngjiā qīngjié, ānquán.',goiY:['代价 = cái giá phải trả','伴侣 = bạn đồng hành','如果……就…… = nếu … thì …'],giai:'Dấu ； tách hai ý lớn: sự thật (đã trả giá) và điều kiện (如果……就……); 为此 = vì điều đó; 伴侣 ở đây là ẩn dụ — dịch "người bạn đồng hành", không dịch "bạn đời".'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 31): 缩写课文 350字左右
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:350,
  de:'这篇课文给我们描述了2050年的汽车是什么样子的。2050年的汽车将会更加清洁、安全；实现自动行驶；融合数字生活方式，为汽车用户提供全方位服务；电动汽车的数量将会增加，汽油、柴油等燃料仍会继续使用，但使用效率将会提高。请参考练习5，把课文缩写成350字左右的短文。',
  prompt:'Bài khoá miêu tả cho chúng ta ô tô năm 2050 sẽ như thế nào. Ô tô năm 2050 sẽ sạch hơn, an toàn hơn; tự lái được; hòa nhập lối sống số, cung cấp dịch vụ toàn diện cho người dùng ô tô; số lượng ô tô điện sẽ tăng, xăng, dầu diesel và các nhiên liệu khác vẫn tiếp tục được dùng nhưng hiệu suất sử dụng sẽ được nâng cao. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành đoạn văn khoảng 350 chữ.',
  dan:[
    {hoi:'2050年的汽车是什么样子的？——清洁、安全',goiY:'①当前汽车的劣迹 ②根本出路'},
    {hoi:'2050年的汽车是什么样子的？——自动行驶',goiY:'①职业司机引导 ②自动停泊入位'},
    {hoi:'2050年的汽车是什么样子的？——融合数字生活方式',goiY:'①车企与搜索引擎公司合作 ②创造虚拟个人助理'},
    {hoi:'2050年的汽车是什么样子的？——燃料的使用',goiY:'①电动汽车的优缺点 ②汽油、柴油车的使用'}
  ],
  tuNen:['动不动','担保','大体','勾画','轮廓','指责','试图','锦上添花','比重','排除'],
  cauTruc:[
    {ten:'每次……，……就会想：要是……就好了', nhan:'Mở bài', vd:'每次遇到交通堵塞，人们就会想：汽车要是能飞起来就好了。', khi:'Mở bằng tình huống quen thuộc, dẫn vào câu hỏi "2050年的汽车会是什么样".'},
    {ten:'别的不敢担保，以下四点大体……', nhan:'Câu dẫn · 担保 / 大体', vd:'别的不敢担保，以下四点大体为我们勾画出了2050年汽车的轮廓。', khi:'Giới thiệu bố cục bốn phần trước khi đi vào từng phần.'},
    {ten:'甲、……　乙、……　丙、……　丁、……', nhan:'Đánh số 甲乙丙丁', vd:'甲、更加清洁、安全。乙、能自动行驶。', khi:'Dùng Chú thích 2 để chia bốn phần đúng theo bốn dòng bảng 练习5.'},
    {ten:'人们常常指责……，但……动不动就……并不明智，根本出路是……', nhan:'Phần 甲 · 动不动', vd:'动不动就将其淘汰并不明智，根本出路是让汽车更清洁、环保。', khi:'Nêu "tội trạng" của ô tô rồi nêu lối thoát (dòng 1 bảng).'},
    {ten:'……是必然的服务，而非锦上添花', nhan:'Phần 丙', vd:'虚拟个人助理是必然的服务，而非锦上添花。', khi:'Nhấn mạnh tính tất yếu của dịch vụ số (dòng 3 bảng).'},
    {ten:'……，但是……，所以不排除……；因此，必须……', nhan:'Phần 丁 · nhân quả', vd:'电池重、造价昂贵，所以不排除长途行车还用汽油。', khi:'Nêu ưu – nhược điểm của ô tô điện rồi rút ra kết luận (dòng 4 bảng).'},
    {ten:'总之，如果……，就必须……', nhan:'Kết bài', vd:'总之，如果汽车仍是我们不可缺少的伴侣，它就必须清洁、安全。', khi:'Tóm lại yêu cầu chung: sạch, an toàn, phát triển bền vững.'}
  ],
  checklist:[
    'Đã viết khoảng 350 chữ Hán chưa (280–470 chữ là đạt; không đếm dấu câu)?',
    'Có đủ bốn phần theo bảng 练习5 và theo đúng thứ tự 甲 (sạch, an toàn) → 乙 (tự lái) → 丙 (lối sống số) → 丁 (nhiên liệu) chưa?',
    'Mỗi phần đã có đủ hai gợi ý ①② của bảng chưa (vd phần 甲: "tội trạng" hiện nay + lối thoát căn bản)?',
    'Đã dùng 动不动 và cách đánh số 甲乙丙丁 (hai điểm ngữ pháp của bài) chưa?',
    'Đã dùng ít nhất 6 từ mới (担保, 大体, 勾画, 轮廓, 指责, 试图, 锦上添花, 比重, 排除…), viết bằng lời của mình — không chép nguyên câu dài của bài khoá — chưa?'
  ],
  model:{
    zh:'（题目：2050年的汽车）每次遇到交通堵塞，被堵车折磨得心烦意乱的人们都希望汽车能飞起来。2050年的汽车会是什么样呢？别的不敢担保，以下四点大体为我们勾画出了它的轮廓。甲、更加清洁、安全。现在人们常常指责汽车：它让空气质量下降，石油资源日益紧缺，每年还有一百多万人死于交通事故。但是汽车是灵活方便的交通工具，动不动就将其淘汰并不明智，根本出路是让汽车更清洁、环保，让司机规范驾车。乙、能自动行驶。欧洲正试图由一名职业司机引导一长串汽车前行，被引导车辆上的人可以工作，也可以休息。汽车抵达终点后，还能自动停泊入位。丙、融合数字生活方式。车企与搜索引擎公司、电脑公司合作已经成为潮流。虚拟个人助理将为用户提供路线、交通信息和日程安排等帮助，这是必然的服务，而非锦上添花。丁、长途行车仍靠汽油。电动汽车的比重一定会提高，但是它的电池重、造价昂贵、充电时间长，所以不排除长途行车还用汽油或柴油。因此，必须提高燃料的使用效率，减少废气排放。总之，如果汽车仍是我们不可缺少的伴侣，它就必须清洁、安全，符合可持续发展的原则。',
    py:'(Tímù: Èr líng wǔ líng nián de qìchē) Měi cì yùdào jiāotōng dǔsè, bèi dǔchē zhémó de xīnfán-yìluàn de rénmen dōu xīwàng qìchē néng fēi qǐlái. Èr líng wǔ líng nián de qìchē huì shì shénme yàng ne? Biéde bù gǎn dānbǎo, yǐxià sì diǎn dàtǐ wèi wǒmen gōuhuà chūle tā de lúnkuò. Jiǎ, gèngjiā qīngjié, ānquán. Xiànzài rénmen chángcháng zhǐzé qìchē: tā ràng kōngqì zhìliàng xiàjiàng, shíyóu zīyuán rìyì jǐnquē, měi nián hái yǒu yìbǎi duō wàn rén sǐ yú jiāotōng shìgù. Dànshì qìchē shì línghuó fāngbiàn de jiāotōng gōngjù, dòngbudòng jiù jiāng qí táotài bìng bù míngzhì, gēnběn chūlù shì ràng qìchē gèng qīngjié, huánbǎo, ràng sījī guīfàn jiàchē. Yǐ, néng zìdòng xíngshǐ. Ōuzhōu zhèng shìtú yóu yì míng zhíyè sījī yǐndǎo yì cháng chuàn qìchē qiánxíng, bèi yǐndǎo chēliàng shang de rén kěyǐ gōngzuò, yě kěyǐ xiūxi. Qìchē dǐdá zhōngdiǎn hòu, hái néng zìdòng tíngbó rùwèi. Bǐng, rónghé shùzì shēnghuó fāngshì. Chēqǐ yǔ sōusuǒ yǐnqíng gōngsī, diànnǎo gōngsī hézuò yǐjīng chéngwéi cháoliú. Xūnǐ gèrén zhùlǐ jiāng wèi yònghù tígōng lùxiàn, jiāotōng xìnxī hé rìchéng ānpái děng bāngzhù, zhè shì bìrán de fúwù, ér fēi jǐnshàng-tiānhuā. Dīng, chángtú xíngchē réng kào qìyóu. Diàndòng qìchē de bǐzhòng yídìng huì tígāo, dànshì tā de diànchí zhòng, zàojià ángguì, chōngdiàn shíjiān cháng, suǒyǐ bù páichú chángtú xíngchē hái yòng qìyóu huò cháiyóu. Yīncǐ, bìxū tígāo ránliào de shǐyòng xiàolǜ, jiǎnshǎo fèiqì páifàng. Zǒngzhī, rúguǒ qìchē réng shì wǒmen bù kě quēshǎo de bànlǚ, tā jiù bìxū qīngjié, ānquán, fúhé kě chíxù fāzhǎn de yuánzé.',
    vn:'(Nhan đề: Ô tô năm 2050) Mỗi lần gặp tắc đường, những người bị cảnh tắc xe hành hạ đến bực bội rối bời đều mong ô tô có thể bay lên. Ô tô năm 2050 sẽ như thế nào? Những điều khác thì không dám chắc, nhưng bốn điểm dưới đây về cơ bản đã phác họa cho chúng ta hình dáng của nó. Một, sạch hơn, an toàn hơn. Hiện nay người ta thường chỉ trích ô tô: nó làm chất lượng không khí đi xuống, nguồn dầu mỏ ngày càng khan hiếm, mỗi năm còn có hơn một triệu người chết vì tai nạn giao thông. Nhưng ô tô là phương tiện giao thông linh hoạt, tiện lợi, hơi một chút đã loại bỏ nó thì không sáng suốt; lối thoát căn bản là làm cho ô tô sạch hơn, thân thiện với môi trường hơn và để tài xế lái xe đúng quy tắc. Hai, có thể tự lái. Châu Âu đang thử để một tài xế chuyên nghiệp dẫn đầu cả một đoàn dài ô tô tiến lên, người ngồi trên các xe được dẫn đường có thể làm việc, cũng có thể nghỉ ngơi. Ô tô tới điểm cuối còn có thể tự động đỗ vào chỗ. Ba, hòa nhập lối sống số. Hãng xe hợp tác với các công ty công cụ tìm kiếm, công ty máy tính đã trở thành xu thế. Trợ lý cá nhân ảo sẽ hỗ trợ người dùng về lộ trình, thông tin giao thông, sắp xếp lịch trình…; đó là dịch vụ tất yếu chứ không phải thêu hoa trên gấm. Bốn, đi đường dài vẫn dựa vào xăng. Tỷ trọng ô tô điện chắc chắn sẽ tăng, nhưng pin của nó nặng, giá thành đắt, thời gian sạc lâu, nên không loại trừ khả năng đi đường dài vẫn dùng xăng hoặc dầu diesel. Vì vậy phải nâng cao hiệu suất sử dụng nhiên liệu, giảm lượng khí thải. Tóm lại, nếu ô tô vẫn là người bạn đồng hành không thể thiếu của chúng ta, thì nó phải sạch, an toàn và phù hợp với nguyên tắc phát triển bền vững.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Bảng có một câu hỏi lớn <b>2050年的汽车是什么样子的？</b> chia thành bốn dòng (清洁、安全 · 自动行驶 · 融合数字生活方式 · 燃料的使用). Mỗi câu dưới đây là một dòng — bấm loa nghe câu hỏi, nhìn gợi ý, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 指责 · 明智 · 出路 · 试图 · 引导 · 抵达 · 潮流 · 锦上添花 · 比重 · 昂贵 · 排除 · 确保.',
  questions:[
    {q_zh:'2050年的汽车是什么样子的？（清洁、安全）',
     q_vn:'Ô tô năm 2050 trông như thế nào? (Sạch, an toàn)',
     hint:'①当前汽车的劣迹 ②根本出路',
     sample:'2050年的汽车会更加清洁、安全。现在人们常常指责汽车：北极冰川在融化，空气质量在下降，石油资源日益紧缺，每年还有一百多万人死于交通事故。不过，汽车是一种灵活的交通工具，动不动就将其淘汰并不明智，根本出路是让汽车更清洁、环保，让司机规范驾车。',
     sample_vn:'Ô tô năm 2050 sẽ sạch hơn, an toàn hơn. Hiện nay người ta thường chỉ trích ô tô: sông băng Bắc Cực đang tan, chất lượng không khí đang đi xuống, nguồn dầu mỏ ngày càng khan hiếm, mỗi năm còn hơn một triệu người chết vì tai nạn giao thông. Tuy vậy, ô tô là một phương tiện giao thông linh hoạt, hơi một chút đã loại bỏ nó thì không sáng suốt; lối thoát căn bản là làm cho ô tô sạch hơn, thân thiện với môi trường hơn và để tài xế lái xe đúng quy tắc.',
     note:'Gợi ý ① = "tội trạng": liệt kê 3–4 ý ngắn song song (……在……；……在……); gợi ý ② mở bằng 不过 / 但是 rồi dùng 动不动就…… + 根本出路是…….'},
    {q_zh:'2050年的汽车是什么样子的？（自动行驶）',
     q_vn:'Ô tô năm 2050 trông như thế nào? (Tự lái)',
     hint:'①职业司机引导 ②自动停泊入位',
     sample:'2050年的汽车能自动行驶。欧洲正试图由一名职业司机驾车引导一长串汽车前行，它们就像一条线上的珍珠。被引导车辆上的人可以工作，也可以休息。汽车抵达终点后，车上配备的高科技系统还能让车辆自动停泊入位。',
     sample_vn:'Ô tô năm 2050 có thể tự lái. Châu Âu đang thử để một tài xế chuyên nghiệp lái xe dẫn đầu cả một đoàn dài ô tô tiến lên, chúng giống như những hạt ngọc xâu trên một sợi chỉ. Người ngồi trên những chiếc xe được dẫn đường có thể làm việc, cũng có thể nghỉ ngơi. Ô tô tới điểm cuối rồi, hệ thống công nghệ cao trang bị trên xe còn giúp xe tự động đỗ vào chỗ.',
     note:'Dùng 试图 + 由……引导…… cho gợi ý ①, hình ảnh so sánh 像一条线上的珍珠; gợi ý ② dùng 抵达终点后，……还能…….'},
    {q_zh:'2050年的汽车是什么样子的？（融合数字生活方式）',
     q_vn:'Ô tô năm 2050 trông như thế nào? (Hòa nhập lối sống số)',
     hint:'①车企与搜索引擎公司合作 ②创造虚拟个人助理',
     sample:'一家著名的搜索引擎公司发现为个人驾驶提供服务有巨大的商机，就迫不及待地加入了汽车研发的行列，车企与电脑公司合作成了无法阻挡的潮流。他们创造虚拟个人助理，为用户提供路线、交通信息和日程安排等方面的帮助，这在2050年将是必然的服务，而非锦上添花。',
     sample_vn:'Một công ty công cụ tìm kiếm nổi tiếng nhận ra việc cung cấp dịch vụ cho người lái xe cá nhân có cơ hội kinh doanh rất lớn, liền nóng lòng gia nhập hàng ngũ nghiên cứu phát triển ô tô; hãng xe hợp tác với công ty máy tính đã thành một xu thế không thể ngăn cản. Họ tạo ra trợ lý cá nhân ảo, hỗ trợ người dùng về lộ trình, thông tin giao thông, sắp xếp lịch trình…; vào năm 2050 đó sẽ là dịch vụ tất yếu, chứ không phải thêu hoa trên gấm.',
     note:'Nối nhân quả bằng ……，就 / 于是……; kết bằng cấu trúc đối lập 是 A，而非 B (而非锦上添花).'},
    {q_zh:'2050年的汽车是什么样子的？（燃料的使用）',
     q_vn:'Ô tô năm 2050 trông như thế nào? (Việc sử dụng nhiên liệu)',
     hint:'①电动汽车的优缺点 ②汽油、柴油车的使用',
     sample:'电动汽车很清洁，作为日常交通工具，它的比重一定会提高。可是它的电池很重，造价昂贵，充电时间也长，跑长途不太方便。所以不排除长途行车还用汽油或柴油，但必须确保提高燃料的使用效率，减少废气的排放。',
     sample_vn:'Ô tô điện rất sạch; là phương tiện đi lại hằng ngày, tỷ trọng của nó chắc chắn sẽ tăng. Nhưng pin của nó rất nặng, giá thành đắt, thời gian sạc cũng lâu, chạy đường dài không tiện lắm. Vì thế không loại trừ khả năng đi đường dài vẫn dùng xăng hoặc dầu diesel, nhưng nhất định phải bảo đảm nâng cao hiệu suất sử dụng nhiên liệu, giảm lượng khí thải.',
     note:'Ưu điểm → 可是 + nhược điểm (liệt kê ba ý) → 所以不排除…… → 但必须确保……; nhớ 比重, 昂贵, 排除, 确保, 排放.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 22.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 22',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你今天怎么又迟到了？'},
            {sp:'男',zh:'别提了，路上发生了一起交通事故，整条路都堵塞了，我在车上滞留了一个多小时。'}],
     q:'男的为什么迟到？',qvn:'Vì sao người đàn ông đến muộn?',
     opts:['起床太晚了','车坏在半路上','路上发生事故，交通堵塞','走错了路'],ans:2,
     why:'路上发生了一起交通事故，整条路都堵塞了 — lý do nằm ngay sau 别提了. 滞留了一个多小时 = bị kẹt hơn một tiếng.',
     words:['事故','堵塞','滞留']},

    {n:2,
     lines:[{sp:'男',zh:'这款电动汽车看起来不错，就是太贵了。'},
            {sp:'女',zh:'价格是昂贵了点儿，不过它配备了自动停车系统，停车的时候方便多了。'}],
     q:'女的认为这款车有什么优点？',qvn:'Người phụ nữ cho rằng chiếc xe này có ưu điểm gì?',
     opts:['配备了自动停车系统','价格很便宜','充电时间很短','跑得特别快'],ans:0,
     why:'不过 chuyển sang ưu điểm: 它配备了自动停车系统. Giá thì "昂贵了点儿" (hơi đắt) — loại B.',
     words:['昂贵','配备']},

    {n:3,
     lines:[{sp:'女',zh:'听说你们公司最近要实行优胜劣汰的考核制度？'},
            {sp:'男',zh:'是啊，大家压力都很大，我现在每天都力求把工作做到最好。'}],
     q:'关于男的，可以知道什么？',qvn:'Về người đàn ông, có thể biết điều gì?',
     opts:['打算换工作','已经被公司淘汰了','对考核制度很满意','工作压力大，很努力'],ans:3,
     why:'大家压力都很大 + 每天都力求把工作做到最好 → áp lực lớn và rất cố gắng. Không có thông tin về đổi việc hay hài lòng.',
     words:['优胜劣汰','力求']},

    {n:4,
     lines:[{sp:'男',zh:'小李，你儿子怎么动不动就哭啊？'},
            {sp:'女',zh:'他刚上幼儿园，还不习惯。我也试图跟他讲道理，可他根本听不进去。'}],
     q:'女的的儿子怎么了？',qvn:'Con trai của người phụ nữ làm sao?',
     opts:['身体不好','常常哭','不愿意吃饭','不喜欢老师'],ans:1,
     why:'动不动就哭 = hơi một chút là khóc → hay khóc. Nguyên nhân: 刚上幼儿园，还不习惯.',
     words:['动不动','试图']},

    {n:5,
     lines:[{sp:'女',zh:'这次去北京出差，你们几点抵达？'},
            {sp:'男',zh:'本来下午三点就到，可是航班因为大雾推迟了，估计要晚上八点左右才能到。'}],
     q:'男的现在估计几点能到北京？',qvn:'Người đàn ông hiện ước tính mấy giờ đến Bắc Kinh?',
     opts:['下午三点','晚上八点左右','早上八点','明天上午'],ans:1,
     why:'本来 (vốn dĩ) 三点 là kế hoạch cũ; 可是……推迟了，估计要晚上八点左右才能到 là thông tin mới.',
     words:['抵达']},

    {n:6,
     lines:[{sp:'男',zh:'这份合同里的甲方、乙方分别是谁？'},
            {sp:'女',zh:'甲方是我们公司，乙方是那家汽车公司。按照合同，所有的运输费用皆由乙方承担。'}],
     q:'运输费用由谁承担？',qvn:'Chi phí vận chuyển do ai chịu?',
     opts:['女的自己','甲方','双方各一半','那家汽车公司'],ans:3,
     why:'皆由乙方承担 (皆 = 都) và 乙方是那家汽车公司 → do công ty ô tô chịu. 甲方 là công ty của người nói.',
     words:['皆']},

    {n:7,
     lines:[{sp:'女',zh:'你觉得手机里的虚拟助理有用吗？'},
            {sp:'男',zh:'太有用了！它每天提醒我日程安排，还能告诉我哪条路堵车。对我来说，它是必需品，而不是锦上添花。'}],
     q:'男的对虚拟助理有什么看法？',qvn:'Người đàn ông có quan điểm gì về trợ lý ảo?',
     opts:['非常有用，是必需品','只是锦上添花','经常出错','用起来太麻烦'],ans:0,
     why:'太有用了 + 它是必需品，而不是锦上添花 — "而不是锦上添花" phủ định phương án B.',
     words:['助理','锦上添花']},

    {n:8,
     lines:[{sp:'男',zh:'很多人认为，将来所有的汽车都会是电动汽车。电动汽车没有废气排放，确实更环保，它在汽车中所占的比重也一定会越来越大。不过，目前电动汽车的电池造价昂贵，充电时间也比较长，这些都阻碍了人们购买。所以专家认为，在相当长的一段时间里，还不能排除汽油车和柴油车继续存在的可能，关键是要提高燃料的使用效率。'}],
     q:'专家认为今后一段时间会怎么样？',qvn:'Chuyên gia cho rằng trong một thời gian tới sẽ thế nào?',
     opts:['所有汽车都变成电动汽车','电动汽车会被淘汰','汽油车、柴油车还会继续存在','人们不再买汽车了'],ans:2,
     why:'还不能排除汽油车和柴油车继续存在的可能 → xe xăng, xe dầu vẫn còn tồn tại. "所有汽车都会是电动汽车" chỉ là ý kiến của "很多人", bị 不过 phủ định.',
     words:['排放','比重','昂贵','阻碍','排除','柴油']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG GIAO TIẾP
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn thân than phiền em trai dạo này rất hay nổi cáu.',
     a:{sp:'Bạn',zh:'我弟弟最近脾气特别大，我说一句他就生气。',vn:'Em trai tớ dạo này nóng tính lắm, tớ nói một câu là nó giận.'},
     need:['Dùng 动不动','Đưa ra lời khuyên'],
     sample:'他动不动就生气，可能是学习压力太大了。你不妨找个时间跟他好好聊聊。',
     samplePy:'Tā dòngbudòng jiù shēngqì, kěnéng shì xuéxí yālì tài dà le. Nǐ bùfáng zhǎo ge shíjiān gēn tā hǎohāo liáoliao.',
     sampleVn:'Em ấy hơi một chút là giận, có lẽ do áp lực học tập quá lớn. Cậu thử tìm lúc nào đó nói chuyện tử tế với em ấy xem.',
     tip:'动不动就 + V (việc không mong muốn); 不妨 = thử … xem (ôn bài 12) — lời khuyên nhẹ nhàng.'},

    {scene:'Bố hỏi ý kiến em: nhà mình đổi xe thì nên mua xe điện hay xe chạy xăng.',
     a:{sp:'Bố',zh:'咱们家换车，买电动汽车还是汽油车好？',vn:'Nhà mình đổi xe, mua xe điện hay xe xăng thì hơn hả con?'},
     need:['Dùng 虽然……但是……','Dùng ít nhất 2 từ: 昂贵 / 排放 / 比重 / 确保'],
     sample:'电动汽车虽然价格昂贵一点儿，但是没有废气排放，更环保。咱们平时只在市里开，我觉得买电动汽车比较好。',
     samplePy:'Diàndòng qìchē suīrán jiàgé ángguì yìdiǎnr, dànshì méiyǒu fèiqì páifàng, gèng huánbǎo. Zánmen píngshí zhǐ zài shì li kāi, wǒ juéde mǎi diàndòng qìchē bǐjiào hǎo.',
     sampleVn:'Xe điện tuy giá đắt hơn một chút, nhưng không thải khí thải, thân thiện môi trường hơn. Nhà mình bình thường chỉ chạy trong thành phố, con nghĩ mua xe điện thì hơn.',
     tip:'Nêu nhược điểm bằng 虽然, ưu điểm bằng 但是, rồi kết luận bằng 我觉得…….'},

    {scene:'Lớp trưởng hỏi phần chuẩn bị tiết mục cho buổi sinh hoạt lớp em phụ trách đã ổn chưa.',
     a:{sp:'Lớp trưởng',zh:'周六的班会活动，你那边准备得怎么样了？没问题吧？',vn:'Buổi sinh hoạt lớp thứ Bảy, bên cậu chuẩn bị thế nào rồi? Không có vấn đề gì chứ?'},
     need:['Dùng 担保 (đúng cách: + mệnh đề)','Nói rõ đã làm những gì'],
     sample:'放心吧，节目都排练好了，音响也检查过了，我敢担保不会出问题。',
     samplePy:'Fàngxīn ba, jiémù dōu páiliàn hǎo le, yīnxiǎng yě jiǎnchá guo le, wǒ gǎn dānbǎo bú huì chū wèntí.',
     sampleVn:'Yên tâm đi, tiết mục tập xong hết rồi, loa đài cũng kiểm tra rồi, tớ dám cam đoan không có vấn đề gì.',
     tip:'我敢担保 + mệnh đề (担保 không đi với danh từ); muốn đi với danh từ thì dùng 保证: 保证质量.'},

    {scene:'Thầy giáo hỏi bài thuyết trình về giao thông của nhóm em định chia làm mấy phần.',
     a:{sp:'Thầy giáo',zh:'你们小组的报告打算分成几个部分？',vn:'Bài báo cáo của nhóm em định chia làm mấy phần?'},
     need:['Dùng 甲、乙、丙 để đánh số','Nêu nội dung từng phần'],
     sample:'我们打算分成三个部分：甲，介绍现在的交通问题；乙，分析原因；丙，谈谈未来的汽车。',
     samplePy:'Wǒmen dǎsuan fēnchéng sān ge bùfen: jiǎ, jièshào xiànzài de jiāotōng wèntí; yǐ, fēnxī yuányīn; bǐng, tántan wèilái de qìchē.',
     sampleVn:'Chúng em định chia làm ba phần: phần một giới thiệu vấn đề giao thông hiện nay; phần hai phân tích nguyên nhân; phần ba bàn về ô tô tương lai.',
     tip:'甲、乙、丙 dùng như "thứ nhất, thứ hai, thứ ba" (Chú thích 2); giữa các phần dùng dấu ；.'},

    {scene:'Trong giờ thảo luận, một bạn nói nên dứt khoát bỏ hẳn ô tô vì ô nhiễm quá nặng.',
     a:{sp:'Bạn',zh:'汽车污染这么严重，干脆把汽车都淘汰掉算了！',vn:'Ô tô gây ô nhiễm nghiêm trọng thế, dứt khoát loại bỏ hết ô tô cho xong!'},
     need:['Dùng 明智 hoặc 出路','Phản bác một cách lịch sự'],
     sample:'汽车毕竟给生活带来了很多方便，一下子全部淘汰似乎不太明智。我觉得根本出路是开发清洁能源。',
     samplePy:'Qìchē bìjìng gěi shēnghuó dàiláile hěn duō fāngbiàn, yíxiàzi quánbù táotài sìhū bú tài míngzhì. Wǒ juéde gēnběn chūlù shì kāifā qīngjié néngyuán.',
     sampleVn:'Ô tô dù sao cũng mang lại rất nhiều tiện lợi cho cuộc sống, loại bỏ hết một lúc e rằng không sáng suốt lắm. Tớ nghĩ lối thoát căn bản là phát triển năng lượng sạch.',
     tip:'毕竟 = dù sao thì (HSK 5); 似乎不太明智 là cách phản bác mềm mỏng; 根本出路是…… nêu giải pháp.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em viết báo cáo khoa học về ô tô điện.',
     a:'电动汽车造价昂贵、充电时间长，这在一定程度上阻碍了其推广。',b:'电动车太贵了，充个电还得等半天，所以好多人都不想买。',better:'a',
     why:'Báo cáo cần văn viết: 造价昂贵, 在一定程度上, 阻碍了其推广. Câu b (太贵了, 等半天, 好多人) là khẩu ngữ.'},

    {scene:'Em nhắn tin cho bạn thân báo mình bị kẹt xe, sẽ đến muộn buổi hẹn ăn tối.',
     a:'由于交通堵塞，本人将滞留途中，预计晚到三十分钟，敬请谅解。',b:'堵死了！我还在路上呢，估计得晚半小时，你们先吃吧！',better:'b',
     why:'Nhắn tin bạn thân dùng khẩu ngữ tự nhiên (堵死了, 你们先吃吧). Câu a (本人, 滞留途中, 敬请谅解) là giọng thông báo công văn, rất lạ.'},

    {scene:'Phát thanh viên sân bay thông báo chuyến bay bị hoãn.',
     a:'各位旅客请注意，由于天气原因，飞往上海的航班将推迟抵达，请您耐心等候。',b:'大家听着啊，去上海的飞机晚点了，等着吧。',better:'a',
     why:'Thông báo công cộng cần trang trọng, lịch sự: 各位旅客请注意, 将推迟抵达, 请您耐心等候. Câu b cộc lốc, thiếu lịch sự.'},

    {scene:'Bố mẹ lo lắng khi em bắt đầu tự đạp xe đi học đường xa, em trấn an bố mẹ.',
     a:'爸，您就放心吧，我骑车特别规矩，保证出不了事。',b:'本人驾驶技术规范，可确保行车安全，请家长放心。',better:'a',
     why:'Nói với bố mẹ cần thân mật (您就放心吧, 特别规矩, 保证出不了事). Câu b giống bản cam kết viết gửi nhà trường.'},

    {scene:'Em viết bài văn nghị luận về giải pháp cho vấn đề giao thông đô thị.',
     a:'面对日益严重的交通问题，根本出路在于发展公共交通，而非一味增加私家车。',b:'路上车太多了，我看啊，还是多坐公交车好，别老开自己的车。',better:'a',
     why:'Văn nghị luận cần từ ngữ văn viết và lập luận rõ: 日益, 根本出路在于, 而非一味……. Câu b (我看啊, 别老……) là lời nói miệng.'},

    {scene:'Em hỏi mượn cục sạc của bạn cùng bàn.',
     a:'你那个充电器借我用一下呗，我手机快没电了。',b:'鉴于本人手机电量不足，恳请借用阁下的充电设备。',better:'a',
     why:'Hỏi mượn đồ bạn cùng bàn dùng khẩu ngữ (借我用一下呗). Câu b (鉴于, 本人, 恳请, 阁下) quá trang trọng, nghe như đùa.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Câu hỏi lớn là <b>2050年的汽车是什么样子的？</b>; nhìn từng dòng (phương diện + gợi ý), bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'2050年的汽车是什么样子的？（清洁、安全）', cue:'①当前汽车的劣迹 ②根本出路', words:['堵塞','滞留','折磨','翼','担保','大体','勾画','轮廓','指责','融化','石油','事故','割','优胜劣汰','皆','明智','出路','规范','谋求']},
    {step:'2050年的汽车是什么样子的？（自动行驶）', cue:'①职业司机引导 ②自动停泊入位', words:['干预','平坦','奔驰','试图','引导','串','珍珠','效益','抵达','终点','配备','停泊','力求']},
    {step:'2050年的汽车是什么样子的？（融合数字生活方式）', cue:'①车企与搜索引擎公司合作 ②创造虚拟个人助理', words:['丙','融合','引擎','行列','潮流','助理','锦上添花','保障']},
    {step:'2050年的汽车是什么样子的？（燃料的使用）', cue:'①电动汽车的优缺点 ②汽油、柴油车的使用', words:['丁','柴油','遏制','比重','昂贵','阻碍','排除','确保','排放','代价','伴侣','支柱']}
  ],
  checklist: [
    'Có mở bài bằng tình huống tắc đường và câu dẫn "别的不敢担保，以下四点……" không?',
    'Kể đủ bốn phần theo đúng thứ tự bảng (清洁、安全 → 自动行驶 → 融合数字生活方式 → 燃料的使用) và có đánh số 甲、乙、丙、丁 không?',
    'Mỗi phần đã nói đủ hai gợi ý ①② chưa (vd phần 丁: ưu – nhược điểm của ô tô điện + vì sao xe xăng, dầu vẫn còn dùng)?',
    'Có dùng được các từ 指责, 动不动, 明智, 试图, 抵达, 锦上添花, 比重, 排除, 确保 không?',
    'Có kể bằng LỜI MÌNH (câu ngắn, rõ ý) và kết lại bằng yêu cầu chung: 清洁、安全、符合可持续发展的原则 không?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 26–32) — đáp án theo đáp án sách
// Gồm cả 篇章修辞 (词汇衔接 · 练一练) của quyển 下
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', de:'用“动不动”完成句子（注释1 · 练一练）', vn:'Dùng 动不动 hoàn thành câu (Chú thích 1 · Luyện tập) — đáp án theo sách', dapSgk:true,
   cau:[
     {s:'他身体很弱，＿＿。', tu:'动不动', dap:'他身体很弱，动不动就生病。',
      giai:'Thể trạng yếu → hơi một chút là ốm. 动不动就 + V chỉ việc rất dễ xảy ra và không mong muốn.'},
     {s:'你的电脑该换了，＿＿，多耽误事啊。', tu:'动不动', dap:'你的电脑该换了，动不动就死机，多耽误事啊。',
      giai:'死机 = treo máy; 多……啊 = thật là … (cảm thán). 动不动就 đứng đầu vế, lược chủ ngữ 电脑.'},
     {s:'对孩子要耐心，＿＿。', tu:'动不动', dap:'对孩子要耐心，不要动不动就训斥。',
      giai:'Lời khuyên: 不要动不动就 + V = đừng hơi một chút là … (训斥 = mắng mỏ). Từ phủ định đặt TRƯỚC 动不动.'}
   ]},

  {kieu:'ab', de:'下列哪句中的“甲乙丙丁……”和上面讲的意思不同（注释2 · 练一练）', vn:'Câu nào dưới đây có 甲乙丙丁… mang nghĩa KHÁC với hai cách dùng vừa học (đánh số thứ tự · can chi)? — đáp án theo sách',
   cau:[
     {s:'下列哪句中的“甲乙丙丁……”和上面讲的意思不同？', opts:['她姓甲，叫甲吉。','他叫李甲申，肯定是1944年出生的，那一年是甲申年。','这篇文章分为甲、乙、丙三部分，我最喜欢的是第三部分。'], ans:0,
      giai:'Câu (1): 甲 là HỌ và TÊN người (姓甲, 叫甲吉) — không phải đánh số hay can chi → khác nghĩa (đáp án sách: (1) 不一样). Câu (2): 甲申 là can chi (1944 là năm Giáp Thân); câu (3): 甲、乙、丙 đánh số thứ tự các phần.'}
   ]},

  {kieu:'ab', de:'注释2 例（2）：假如丁说的是实话，那么以下说法正确的是', vn:'Câu đố ở ví dụ (2) của Chú thích 2 — bốn người Giáp, Ất, Bính, Đinh, mỗi người một chiếc xe màu trắng / bạc / xanh lam / đỏ. Sách không in đáp án; lời giải ở dưới.',
   cau:[
     {s:'甲乙丙丁四人的车分别为白色、银色、蓝色和红色。在问到他们各自车的颜色时，甲说：“乙的车不是白色。”乙说：“丙的车是红色的。”丙说：“丁的车不是蓝色的。”丁说：“甲、乙、丙三人中有一个人的车是红色的，而且只有这个人说的是实话。”假如丁说的是实话，那么以下说法正确的是：',
      opts:['甲的车是白色的，乙的车是银色的','乙的车是蓝色的，丙的车是红色的','丙的车是白色的，丁的车是蓝色的','丙的车是银色的，甲的车是红色的'], ans:2,
      giai:'Thử xem ai có xe đỏ: nếu Ất đỏ (nói thật) thì câu "Bính đỏ" sai với chính nó — mâu thuẫn; nếu Bính đỏ thì câu của Ất ("Bính đỏ") cũng đúng → hai người nói thật — mâu thuẫn. Vậy Giáp đỏ và nói thật: Ất không trắng. Bính nói sai → xe Đinh màu xanh lam. Còn trắng, bạc cho Ất, Bính mà Ất không trắng → Ất bạc, Bính trắng. Chọn C: 丙白、丁蓝.'}
   ]},

  {kieu:'ab', de:'根据词汇语义上的联系，把下列6个小句组合成3个连贯的语段（篇章修辞 · 词汇衔接 · 练一练）', vn:'Phần 篇章修辞 (Tu từ văn bản) · Liên kết từ vựng: dựa vào mối liên hệ ngữ nghĩa giữa các từ, ghép 6 câu nhỏ A–F thành 3 đoạn văn liền mạch. Mỗi câu hỏi cho sẵn câu đứng đầu đoạn — chọn câu đi tiếp theo. Đáp án sách: (1) A E　(2) B F　(3) C D',
   cau:[
     {s:'A　下了火车，我做的第一件事就是买一份当地的报纸，迫不及待地在路边翻看起来 → ？',
      opts:['几只洋葱，几片肉，一把粉丝，一会儿就变出一个菜来，我很欣赏这种艺术（D）','翻着翻着，竟然发现满满一版的招聘启事，我高兴得眉飞色舞（E）','十年来我的一个突出感觉就是我的妻子从来不认错（F）'], ans:1,
      giai:'报纸 — 翻看 — 翻着翻着 — 一版 (một trang báo) — 招聘启事: các từ cùng trường nghĩa "báo chí, đọc báo" nối A với E. Đáp án sách: A E.'},
     {s:'B　我们结婚十年了，大女儿七岁，小女儿四岁 → ？',
      opts:['几只洋葱，几片肉，一把粉丝，一会儿就变出一个菜来，我很欣赏这种艺术（D）','翻着翻着，竟然发现满满一版的招聘启事，我高兴得眉飞色舞（E）','十年来我的一个突出感觉就是我的妻子从来不认错（F）'], ans:2,
      giai:'结婚十年 — 十年来 — 妻子: cùng trường nghĩa "hôn nhân, gia đình" và lặp lại mốc thời gian 十年 nối B với F. Đáp án sách: B F.'},
     {s:'C　我一向对做家事十分痛恨，但对做菜却是十分有兴趣 → ？',
      opts:['几只洋葱，几片肉，一把粉丝，一会儿就变出一个菜来，我很欣赏这种艺术（D）','翻着翻着，竟然发现满满一版的招聘启事，我高兴得眉飞色舞（E）','十年来我的一个突出感觉就是我的妻子从来不认错（F）'], ans:0,
      giai:'做菜 — 洋葱、肉、粉丝 — 变出一个菜来: cùng trường nghĩa "nấu ăn" nối C với D. Đáp án sách: C D.'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'担保', chu:'保', ds:['保证','保险','确保','准保']},
   cau:[
     {tu:'指责', chu:'责', dap:['责怪','责任','苛责','负责'], them:['责备','斥责','谴责','自责','责骂','问责'],
      giai:'责 trong 指责 = trách móc, chê trách (责怪, 苛责, 责备, 斥责, 谴责). Sách còn chấp nhận 责任, 负责 — ở đó 责 = trách nhiệm (nghĩa gần, cùng gốc "điều phải gánh").'},
     {tu:'平坦', chu:'平', dap:['平静','平缓','平淡','和平'], them:['平稳','平整','平地','平原','平滑','平面'],
      giai:'平 = bằng phẳng, êm, không gợn (平缓 = thoai thoải, 平静 = yên ả, 平稳 = êm ổn, 平原 = đồng bằng).'},
     {tu:'抵达', chu:'达', dap:['达到','到达','送达','通达'], them:['直达','传达','转达','下达','长达','表达'],
      giai:'达 = đến, tới, thông tới (直达 = đi thẳng tới, 转达 = chuyển lời tới, 长达 = kéo dài tới). Khác 发达 (phát triển).'},
     {tu:'停泊', chu:'停', dap:['停车','停顿','暂停','停止'], them:['停留','停靠','停工','停电','停课','停业'],
      giai:'停 = dừng, ngừng lại (停靠 = cập bến, dừng đỗ; 停留 = dừng lại; 停电 = mất điện).'}
   ]},

  {kieu:'gx', de:'用所给词语完成句子', vn:'Dùng từ cho sẵn hoàn thành câu (đáp án theo sách)', dapSgk:true,
   cau:[
     {s:'因为恶劣的天气，机场＿＿。', tu:'滞留', dap:'因为恶劣的天气，机场滞留了大量旅客。',
      giai:'nơi chốn + 滞留了 + 大量 + N (câu tồn hiện): ở sân bay có rất nhiều hành khách bị kẹt lại.'},
     {s:'对于这个高精尖的专业，我＿＿。', tu:'大体', dap:'对于这个高精尖的专业，我只大体了解了一下。',
      giai:'只 + 大体 + V + 了一下: chỉ tìm hiểu sơ qua, đại khái — hợp với một ngành "cao, tinh, mũi nhọn" khó hiểu sâu.'},
     {s:'看到她伤心欲绝的样子，我＿＿。', tu:'试图', dap:'看到她伤心欲绝的样子，我试图安慰她。',
      giai:'试图 + V (安慰): cố thử an ủi (sách ghi: 我试图安慰). 伤心欲绝 = đau lòng tột cùng.'},
     {s:'经过十几个小时的漫长飞行，＿＿。', tu:'抵达', dap:'经过十几个小时的漫长飞行，我们终于抵达了目的地。',
      giai:'抵达 + nơi chốn; 终于 hợp với 漫长飞行 (漫长 ôn bài 2).'},
     {s:'为了提高工作效率，公司＿＿。', tu:'配备', dap:'为了提高工作效率，公司为员工配备了最新的办公设备。',
      giai:'为 + A + 配备 + B = trang bị B cho A.'},
     {s:'演出前我们认真排练，＿＿。', tu:'力求', dap:'演出前我们认真排练，力求达到最好的演出效果。',
      giai:'力求 + 达到……效果: vế sau nêu mục tiêu cố hết sức đạt tới.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['保障','折磨','规范','堵塞','指责'],
   cau:[
     {s:'谁出行时没遇到过交通＿＿呢？经常被堵车＿＿的你，是否也＿＿过日益糟糕的交通状况？其实，＿＿出行顺利通畅，除了加快道路建设以外，每位司机＿＿操作也是非常重要的。',
      dap:['堵塞','折磨','指责','保障','规范']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['石油','奔驰','事故','谋求','代价'],
   cau:[
     {s:'汽车的出现，大大改变了我们的生活，一方面，高速＿＿的汽车拉近了我们的距离，提高了工作效率。可另一方面，人类也付出了巨大的＿＿，空气质量下降，＿＿资源日益减少，越来越多的人死于交通＿＿……因此，人类已开始＿＿更清洁、环保的能源。',
      dap:['奔驰','代价','石油','事故','谋求']}
   ]},

  {kieu:'sx', de:'根据词汇语义上的联系，给下列句子排列顺序', vn:'Dựa vào mối liên hệ ngữ nghĩa giữa các từ, sắp xếp các câu theo thứ tự đúng',
   cau:[
     {manh:[{k:'A',s:'是爸爸一手把我抚养大的'},{k:'B',s:'我很不忍心'},{k:'C',s:'我从小就没有了妈妈'},{k:'D',s:'又要离开他'},{k:'E',s:'好不容易等我长大了'}],
      dap:['C','A','E','D','B'],
      giai:'没有了妈妈 → 爸爸一手抚养大 → 好不容易长大了 → 又要离开他 → 很不忍心: chuỗi thời gian và các từ cùng trường nghĩa "cha – con, nuôi lớn – rời xa"; 他 ở D chỉ 爸爸 nên D phải đứng sau A. Đáp án sách: C A E D B.'},
     {manh:[{k:'A',s:'你看那些在海边争食的鸟儿'},{k:'B',s:'而海鸥总显得非常笨拙'},{k:'C',s:'然而，真正能飞越大海的还是它们'},{k:'D',s:'当海浪打来的时候'},{k:'E',s:'它们从沙滩飞入天空总要很长时间'},{k:'F',s:'小灰雀总能迅速起飞'},{k:'G',s:'它们拍打两三下翅膀就升入了天空'}],
      dap:['A','D','F','G','B','E','C'],
      giai:'A mở đoạn (你看……鸟儿) → D nêu tình huống (当海浪打来的时候) → F, G nói về 小灰雀 (迅速起飞 — 两三下就升入天空) → B, E đối lập về 海鸥 (笨拙 — 总要很长时间) → C kết bằng 然而 lật lại vấn đề (它们 = 海鸥). Lưu ý: đáp án in trong sách giải (C A F E B D G) dùng thứ tự chữ cái khác với bản sách này; xếp theo nội dung thì đều ra cùng một đoạn văn như trên.'}
   ]},

  {kieu:'kho', de:'熟悉下列反义词（扩展 · 词汇）', vn:'Mở rộng · Từ vựng (1): các cặp từ trái nghĩa. Sách chỉ cho các cặp để làm quen — ở đây chuyển thành bài nối: chọn từ trái nghĩa cho mỗi từ (đáp án theo các cặp trong sách)', tu:['随和','枯瘦','文雅','简洁','昏迷','尊敬','文明','愚笨'],
   cau:[
     {s:'苏醒（tỉnh lại） ↔ ＿＿', dap:['昏迷']},
     {s:'粗鲁（thô lỗ） ↔ ＿＿', dap:['文雅']},
     {s:'野蛮（dã man） ↔ ＿＿', dap:['文明']},
     {s:'丰满（đầy đặn） ↔ ＿＿', dap:['枯瘦']},
     {s:'歧视（kỳ thị） ↔ ＿＿', dap:['尊敬']},
     {s:'机智（nhanh trí） ↔ ＿＿', dap:['愚笨']},
     {s:'啰唆（dài dòng） ↔ ＿＿', dap:['简洁']},
     {s:'固执（cố chấp） ↔ ＿＿', dap:['随和']}
   ]},

  {kieu:'kho', de:'熟悉下列词语搭配（扩展 · 词汇）', vn:'Mở rộng · Từ vựng (2): các cụm từ cố định. Sách chỉ cho bảng từ – cụm từ – câu ví dụ để làm quen — ở đây chuyển thành bài điền: điền từ vào câu ví dụ của sách',
   tu:['剥削','格局','掠夺','提拔','调解','侮辱','谣言','征收'],
   cau:[
     {s:'＿＿阶级利用他们占有的生产资料＿＿其他阶级的劳动。', dap:['剥削','剥削']},
     {s:'经济迅速发展，不断打破旧＿＿，形成新＿＿。', dap:['格局','格局']},
     {s:'他们在该地区大肆＿＿资源，造成当地人民生活困苦。', dap:['掠夺']},
     {s:'＿＿干部之前一定要经过严格的考察。', dap:['提拔']},
     {s:'这是一家专门帮人＿＿矛盾和纠纷的机构。', dap:['调解']},
     {s:'这种＿＿他人人格的做法是极不道德的。', dap:['侮辱']},
     {s:'请不要到处传播这种没有事实根据的＿＿。', dap:['谣言']},
     {s:'国家对公民＿＿个人所得税，公民应该依法纳税。', dap:['征收']}
   ]}
];
