// ══════════════════════════════════════════
// DATA — HSK6 Bài 18: 神奇的丝瓜 (Quả mướp thần kỳ)
// 第五单元 美丽家园 · Nguồn: HSK标准教程6上 (tr. 188–196)
// Bài khoá: 神奇的丝瓜 (846 chữ) — 改编自季羡林同名文章
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'神奇',py:'shénqí',pos:'Tính từ',vn:'thần kỳ, kỳ diệu',hv:'thần kỳ',em:'✨',lesson:1,
   explain:['Tính từ: hết sức lạ lùng, kỳ diệu đến mức khó giải thích: 神奇的丝瓜, 神奇的力量, 大自然真神奇.','Sắc thái khen, thích thú — mạnh hơn 奇怪 (lạ, khó hiểu, có khi mang ý chê).'],
   usage:'神奇 + 的 + N (丝瓜 / 力量 / 效果); 十分 / 非常 / 真 + 神奇; hay đứng cuối câu cảm thán: 真是太神奇了!',
   collo:['神奇的丝瓜','神奇的力量','十分神奇','大自然的神奇'],
   ex_zh:'丝瓜好像有思想、有行动，真是太神奇了。',ex_py:'Sīguā hǎoxiàng yǒu sīxiǎng, yǒu xíngdòng, zhēn shì tài shénqí le.',ex_vn:'Cây mướp dường như biết suy nghĩ, biết hành động, thật là quá kỳ diệu.',
   exList:[
     {zh:'丝瓜好像有思想、有行动，真是太神奇了。',py:'Sīguā hǎoxiàng yǒu sīxiǎng, yǒu xíngdòng, zhēn shì tài shénqí le.',vn:'Cây mướp dường như biết suy nghĩ, biết hành động, thật là quá kỳ diệu.'},
     {zh:'一粒小小的种子能长成一棵大树，大自然真神奇！',py:'Yí lì xiǎoxiǎo de zhǒngzi néng zhǎngchéng yì kē dà shù, dàzìrán zhēn shénqí!',vn:'Một hạt giống bé xíu có thể mọc thành một cây to, thiên nhiên thật kỳ diệu!'},
     {zh:'这种草药效果十分神奇，奶奶喝了两天，咳嗽就好了。',py:'Zhè zhǒng cǎoyào xiàoguǒ shífēn shénqí, nǎinai hēle liǎng tiān, késou jiù hǎo le.',vn:'Loại thảo dược này hiệu quả vô cùng thần kỳ, bà uống có hai ngày là khỏi ho.'}
   ],
   colloFull:[
     {zh:'神奇的丝瓜',py:'shénqí de sīguā',vn:'quả mướp thần kỳ'},
     {zh:'神奇的力量',py:'shénqí de lìliang',vn:'sức mạnh kỳ diệu'},
     {zh:'十分神奇',py:'shífēn shénqí',vn:'vô cùng kỳ diệu'},
     {zh:'大自然的神奇',py:'dàzìrán de shénqí',vn:'sự kỳ diệu của thiên nhiên'},
     {zh:'神奇的效果',py:'shénqí de xiàoguǒ',vn:'hiệu quả thần kỳ'}
   ],
   patterns:[
     {s:'神奇 + 的 + N',m:'… thần kỳ, kỳ diệu'},
     {s:'(真 / 太) + 神奇 (+ 了)',m:'Cảm thán: thật kỳ diệu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sức sống của cây cỏ khiến người ta khó mà tưởng tượng nổi, thật là thần kỳ.',answer:'植物的生命力令人难以想象，真是神奇。',answerPy:'Zhíwù de shēngmìnglì lìng rén nányǐ xiǎngxiàng, zhēn shì shénqí.',
      note:'令人 + 难以 + V hai âm tiết = khiến người ta khó mà… (ôn HSK 6 bài 14).',pair:'难以'},
     {promptLang:'vi',prompt:'Chuyện này tôi càng nghĩ càng thấy thần kỳ.',answer:'这件事我越想越觉得神奇。',answerPy:'Zhè jiàn shì wǒ yuè xiǎng yuè juéde shénqí.',
      note:'越……越…… = càng… càng… (ôn HSK 4); tân ngữ 这件事 đưa lên đầu câu làm chủ đề.',pair:'越……越……'}
   ]},

  {n:2,zh:'丝瓜',py:'sīguā',pos:'Danh từ',vn:'(quả / cây) mướp',hv:'ti qua',em:'🥒',lesson:1,
   explain:['Danh từ: cây mướp — loại dây leo, quả dài, xanh, ăn được; quả già có xơ (丝 = sợi tơ, xơ) nên gọi là 丝瓜.','Từ có dấu * trong sách: từ ngoài đề cương HSK, chỉ cần hiểu. Các bộ phận: 瓜茎 (thân dây), 瓜叶 (lá), 花瓣 (cánh hoa).'],
   usage:'Lượng từ: 一棵丝瓜 (cây), 一根 / 一个丝瓜 (quả), 几粒丝瓜种子 (hạt). 种丝瓜, 丝瓜汤, 丝瓜炒鸡蛋.',
   collo:['种丝瓜','丝瓜种子','丝瓜汤','一棵丝瓜'],
   ex_zh:'孩子们在楼旁空地上种了几粒丝瓜种子。',ex_py:'Háizimen zài lóu páng kòngdì shang zhòngle jǐ lì sīguā zhǒngzi.',ex_vn:'Bọn trẻ gieo mấy hạt mướp trên khoảnh đất trống cạnh tòa nhà.',
   exList:[
     {zh:'孩子们在楼旁空地上种了几粒丝瓜种子。',py:'Háizimen zài lóu páng kòngdì shang zhòngle jǐ lì sīguā zhǒngzi.',vn:'Bọn trẻ gieo mấy hạt mướp trên khoảnh đất trống cạnh tòa nhà.'},
     {zh:'夏天喝一碗丝瓜汤，又清淡又解暑。',py:'Xiàtiān hē yì wǎn sīguā tāng, yòu qīngdàn yòu jiěshǔ.',vn:'Mùa hè uống một bát canh mướp, vừa thanh đạm vừa giải nhiệt.'},
     {zh:'我不解归不解，每天还是要去看看那几棵丝瓜。',py:'Wǒ bùjiě guī bùjiě, měi tiān háishi yào qù kànkan nà jǐ kē sīguā.',vn:'Tôi khó hiểu thì khó hiểu, nhưng ngày nào cũng vẫn phải ra xem mấy cây mướp ấy.'}
   ],
   colloFull:[
     {zh:'种丝瓜',py:'zhòng sīguā',vn:'trồng mướp'},
     {zh:'丝瓜种子',py:'sīguā zhǒngzi',vn:'hạt giống mướp'},
     {zh:'丝瓜汤',py:'sīguā tāng',vn:'canh mướp'},
     {zh:'一棵丝瓜',py:'yì kē sīguā',vn:'một cây mướp'},
     {zh:'丝瓜花',py:'sīguā huā',vn:'hoa mướp'}
   ],
   patterns:[
     {s:'种 + 丝瓜 / 几粒丝瓜种子',m:'Trồng mướp / gieo mấy hạt mướp'},
     {s:'丝瓜 + 爬上 / 开花 / 长大',m:'Cây mướp leo lên / ra hoa / lớn lên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hạt mướp vừa gieo xuống chưa được mấy ngày đã nảy mầm rồi.',answer:'丝瓜种子刚种下没几天就发芽了。',answerPy:'Sīguā zhǒngzi gāng zhòngxià méi jǐ tiān jiù fāyá le.',
      note:'刚……没几天就…… = vừa… chưa được mấy ngày đã… (ôn HSK 4 刚……就……).',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Nếu là tôi, tôi thà trồng mướp chứ không trồng hoa.',answer:'要是我，宁愿种丝瓜，也不种花。',answerPy:'Yàoshi wǒ, nìngyuàn zhòng sīguā, yě bù zhòng huā.',
      note:'宁愿……也不…… = thà… chứ không… (điểm ngữ pháp 2 của bài).',pair:'宁愿……也不……'}
   ]},

  {n:3,zh:'随即',py:'suíjí',pos:'Phó từ',vn:'lập tức, ngay sau đó',hv:'tùy tức',em:'⚡',lesson:1,
   explain:['Phó từ: biểu thị việc thứ hai xảy ra NGAY SAU việc thứ nhất, nối tiếp liền (紧跟着就发生).','Văn viết; đứng trước động từ ở VẾ SAU: 开出一个小花园，随即种上了……; gần nghĩa 立即, 马上 nhưng nhấn "nối tiếp ngay".'],
   usage:'Việc 1，随即 + V (việc 2). Không đứng đầu câu độc lập, không dùng cho tương lai xa. Hay đi với 便 / 就 bị lược: 他答应了一声，随即把东西递给我.',
   collo:['随即种上','随即开始','随即离开','随即产生'],
   ex_zh:'孩子们开出一个小小的花园，随即种上了一棵树、几株花和几粒丝瓜种子。',ex_py:'Háizimen kāichū yí ge xiǎoxiǎo de huāyuán, suíjí zhòngshangle yì kē shù, jǐ zhū huā hé jǐ lì sīguā zhǒngzi.',ex_vn:'Bọn trẻ vỡ ra một khu vườn nho nhỏ, ngay sau đó trồng lên một cái cây, mấy khóm hoa và gieo mấy hạt mướp.',
   exList:[
     {zh:'孩子们开出一个小小的花园，随即种上了一棵树、几株花和几粒丝瓜种子。',py:'Háizimen kāichū yí ge xiǎoxiǎo de huāyuán, suíjí zhòngshangle yì kē shù, jǐ zhū huā hé jǐ lì sīguā zhǒngzi.',vn:'Bọn trẻ vỡ ra một khu vườn nho nhỏ, ngay sau đó trồng lên một cái cây, mấy khóm hoa và gieo mấy hạt mướp.'},
     {zh:'他答应了一声，随即把手里的东西递给我。',py:'Tā dāyingle yì shēng, suíjí bǎ shǒu li de dōngxi dì gěi wǒ.',vn:'Anh ấy "ừ" một tiếng, rồi lập tức đưa đồ trong tay cho tôi.'},
     {zh:'大家一致看好这个产品，总经理随即开始制定市场开拓方案。',py:'Dàjiā yízhì kànhǎo zhège chǎnpǐn, zǒngjīnglǐ suíjí kāishǐ zhìdìng shìchǎng kāituò fāng\'àn.',vn:'Mọi người đều đánh giá cao sản phẩm này, tổng giám đốc lập tức bắt tay xây dựng phương án mở rộng thị trường.'}
   ],
   colloFull:[
     {zh:'随即种上',py:'suíjí zhòngshang',vn:'ngay sau đó trồng lên'},
     {zh:'随即开始',py:'suíjí kāishǐ',vn:'lập tức bắt đầu'},
     {zh:'随即离开',py:'suíjí líkāi',vn:'rời đi ngay sau đó'},
     {zh:'随即产生',py:'suíjí chǎnshēng',vn:'lập tức nảy sinh'},
     {zh:'随即动身',py:'suíjí dòngshēn',vn:'lên đường ngay sau đó'}
   ],
   patterns:[
     {s:'Việc 1，随即 + V',m:'…, ngay sau đó (liền) …'},
     {s:'S + V1 + 了……，随即 + V2',m:'Làm xong V1 thì lập tức V2'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe xong tin ấy, cô ấy ngẩn ra một lúc, rồi lập tức bật khóc.',answer:'听到那个消息，她愣了一会儿，随即哭了起来。',answerPy:'Tīngdào nàge xiāoxi, tā lèngle yíhuìr, suíjí kūle qǐlái.',
      note:'随即 đứng trước động từ vế sau; V + 起来 chỉ bắt đầu (ôn HSK 4).',pair:'V + 起来'},
     {promptLang:'vi',prompt:'Anh ấy vừa đặt đồ xuống đã lập tức quay người đi mất, chẳng kịp nói một câu.',answer:'他放下东西，随即转身离去，连一句话都没来得及说。',answerPy:'Tā fàngxià dōngxi, suíjí zhuǎnshēn líqù, lián yí jù huà dōu méi láidejí shuō.',
      note:'连……都…… nhấn mạnh (ôn HSK 4); 来得及 / 没来得及 = kịp / không kịp.',pair:'连……都……'}
   ]},

  {n:4,zh:'株',py:'zhū',pos:'Lượng từ',vn:'cây, gốc, khóm (lượng từ chỉ cây cối)',hv:'chu',em:'🌷',lesson:1,
   explain:['Lượng từ dùng cho cây cối, hoa cỏ (có gốc, có rễ): 一株花, 几株树苗, 两株玫瑰.','Văn viết hơn 棵; 棵 dùng rộng rãi trong khẩu ngữ. Danh từ 株 còn chỉ gốc cây (守株待兔 = ôm cây đợi thỏ).'],
   usage:'Số từ + 株 + 花 / 草 / 树 / 苗. Hay gặp trong văn miêu tả: 几株花, 一株小草. Khẩu ngữ thường thay bằng 棵.',
   collo:['几株花','一株小草','两株树苗','一株玫瑰'],
   ex_zh:'院子里种了几株花，春天一到，开得十分热闹。',ex_py:'Yuànzi li zhòngle jǐ zhū huā, chūntiān yí dào, kāi de shífēn rènao.',ex_vn:'Trong sân trồng mấy khóm hoa, xuân vừa đến là nở rộ rực rỡ.',
   exList:[
     {zh:'院子里种了几株花，春天一到，开得十分热闹。',py:'Yuànzi li zhòngle jǐ zhū huā, chūntiān yí dào, kāi de shífēn rènao.',vn:'Trong sân trồng mấy khóm hoa, xuân vừa đến là nở rộ rực rỡ.'},
     {zh:'石头缝里长出了一株小草，显得生机勃勃。',py:'Shítou fèng li zhǎngchūle yì zhū xiǎo cǎo, xiǎnde shēngjī bóbó.',vn:'Trong khe đá mọc lên một khóm cỏ nhỏ, trông tràn đầy sức sống.'},
     {zh:'这两株树苗是我们班同学亲手种的。',py:'Zhè liǎng zhū shùmiáo shì wǒmen bān tóngxué qīnshǒu zhòng de.',vn:'Hai cây giống này do các bạn lớp mình tự tay trồng.'}
   ],
   colloFull:[
     {zh:'几株花',py:'jǐ zhū huā',vn:'mấy khóm hoa'},
     {zh:'一株小草',py:'yì zhū xiǎo cǎo',vn:'một khóm cỏ nhỏ'},
     {zh:'两株树苗',py:'liǎng zhū shùmiáo',vn:'hai cây giống'},
     {zh:'一株玫瑰',py:'yì zhū méigui',vn:'một gốc hoa hồng'},
     {zh:'守株待兔',py:'shǒuzhū-dàitù',vn:'ôm cây đợi thỏ'}
   ],
   patterns:[
     {s:'Số từ + 株 + 花 / 草 / 树',m:'… khóm hoa / cây'},
     {s:'一株株 + N',m:'Từng khóm, từng cây một (lặp số lượng từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên núi mọc từng cây tùng một, cây nào cũng thẳng tắp.',answer:'山上长着一株株松树，棵棵都很挺拔。',answerPy:'Shān shang zhǎngzhe yì zhūzhū sōngshù, kēkē dōu hěn tǐngbá.',
      note:'一株株 = lặp số lượng từ miêu tả nhiều cá thể (ôn HSK 6 bài 14 一拨拨); 棵棵 = mỗi cây.',pair:'数量短语的重叠'},
     {promptLang:'vi',prompt:'Mẹ đặt hai chậu hoa trên bệ cửa sổ để tô điểm cho căn phòng.',answer:'妈妈在窗台上摆了两株花，用来点缀房间。',answerPy:'Māma zài chuāngtái shang bǎile liǎng zhū huā, yòng lái diǎnzhuì fángjiān.',
      note:'用来 + V = dùng để… (ôn HSK 5); 点缀 là từ mới cùng bài.',pair:'用来……'}
   ]},

  {n:5,zh:'粒',py:'lì',pos:'Lượng từ',vn:'hạt, viên',hv:'lạp',em:'🌰',lesson:1,
   explain:['Lượng từ cho vật nhỏ, tròn như hạt: 一粒种子, 几粒米, 一粒药, 一粒沙子.','Danh từ: hạt (米粒, 颗粒 = hạt, hột); 颗 cũng dùng cho vật tròn nhưng thường to hơn (一颗心, 一颗星星).'],
   usage:'Số từ + 粒 + 种子 / 米 / 药 / 沙子 / 扣子. Thành ngữ: 粒粒皆辛苦 (hạt nào cũng là mồ hôi nước mắt).',
   collo:['几粒种子','一粒米','一粒药','粒粒皆辛苦'],
   ex_zh:'谁知盘中餐，粒粒皆辛苦。',ex_py:'Shéi zhī pán zhōng cān, lìlì jiē xīnkǔ.',ex_vn:'Ai hay bát cơm trên mâm, hạt nào cũng là bao vất vả.',
   exList:[
     {zh:'谁知盘中餐，粒粒皆辛苦。',py:'Shéi zhī pán zhōng cān, lìlì jiē xīnkǔ.',vn:'Ai hay bát cơm trên mâm, hạt nào cũng là bao vất vả.'},
     {zh:'他在花盆里种下了三粒丝瓜种子，每天都去看一看。',py:'Tā zài huāpén li zhòngxiàle sān lì sīguā zhǒngzi, měi tiān dōu qù kàn yi kàn.',vn:'Cậu ấy gieo ba hạt mướp vào chậu hoa, ngày nào cũng ra ngó một cái.'},
     {zh:'医生让我每天饭后吃两粒药。',py:'Yīshēng ràng wǒ měi tiān fàn hòu chī liǎng lì yào.',vn:'Bác sĩ bảo tôi mỗi ngày uống hai viên thuốc sau bữa ăn.'}
   ],
   colloFull:[
     {zh:'几粒种子',py:'jǐ lì zhǒngzi',vn:'mấy hạt giống'},
     {zh:'一粒米',py:'yí lì mǐ',vn:'một hạt gạo'},
     {zh:'一粒药',py:'yí lì yào',vn:'một viên thuốc'},
     {zh:'粒粒皆辛苦',py:'lìlì jiē xīnkǔ',vn:'hạt nào cũng là mồ hôi công sức'},
     {zh:'一粒沙子',py:'yí lì shāzi',vn:'một hạt cát'}
   ],
   patterns:[
     {s:'Số từ + 粒 + 种子 / 米 / 药',m:'… hạt / viên …'},
     {s:'粒粒 + 都 / 皆 + …',m:'Hạt nào cũng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần có nước và ánh nắng, mấy hạt giống này sẽ nhanh chóng nảy mầm.',answer:'只要有水和阳光，这几粒种子很快就会发芽。',answerPy:'Zhǐyào yǒu shuǐ hé yángguāng, zhè jǐ lì zhǒngzi hěn kuài jiù huì fāyá.',
      note:'只要……就…… = chỉ cần… thì… (ôn HSK 4).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Bà nói từng hạt gạo đều không dễ gì có được, vì thế ăn cơm không được bỏ thừa.',answer:'奶奶说每一粒米都来之不易，因此吃饭不能剩。',answerPy:'Nǎinai shuō měi yí lì mǐ dōu láizhī-búyì, yīncǐ chīfàn bù néng shèng.',
      note:'来之不易 = có được chẳng dễ dàng; 因此 nối kết quả, văn viết hơn 所以.',pair:'因此'}
   ]},

  {n:6,zh:'土壤',py:'tǔrǎng',pos:'Danh từ',vn:'đất, thổ nhưỡng',hv:'thổ nhưỡng',em:'🟫',lesson:1,
   explain:['Danh từ: lớp đất trên bề mặt trái đất, nơi cây cối mọc: 土壤肥沃, 土壤污染.','Nghĩa bóng: môi trường, điều kiện để một điều gì nảy sinh, phát triển (创新的土壤).'],
   usage:'土壤 + 肥沃 / 贫瘠 / 湿润; 改良 / 保护 + 土壤; 土壤污染. Trang trọng hơn 土 (đất) trong khẩu ngữ.',
   collo:['土壤肥沃','改良土壤','土壤污染','适合……的土壤'],
   ex_zh:'土壤不是很肥沃，但有水的滋润，阳光的照耀，没几天，丝瓜就从土里冒了出来。',ex_py:'Tǔrǎng bú shì hěn féiwò, dàn yǒu shuǐ de zīrùn, yángguāng de zhàoyào, méi jǐ tiān, sīguā jiù cóng tǔ li màole chūlái.',ex_vn:'Đất không màu mỡ lắm, nhưng có nước tưới tắm, ánh nắng chiếu rọi, chưa được mấy ngày cây mướp đã nhú lên khỏi mặt đất.',
   exList:[
     {zh:'土壤不是很肥沃，但有水的滋润，阳光的照耀，没几天，丝瓜就从土里冒了出来。',py:'Tǔrǎng bú shì hěn féiwò, dàn yǒu shuǐ de zīrùn, yángguāng de zhàoyào, méi jǐ tiān, sīguā jiù cóng tǔ li màole chūlái.',vn:'Đất không màu mỡ lắm, nhưng có nước tưới tắm, ánh nắng chiếu rọi, chưa được mấy ngày cây mướp đã nhú lên khỏi mặt đất.'},
     {zh:'化肥用得太多，会致使土壤越来越差。',py:'Huàféi yòng de tài duō, huì zhìshǐ tǔrǎng yuè lái yuè chà.',vn:'Dùng phân hóa học quá nhiều sẽ khiến đất ngày càng xấu đi.'},
     {zh:'这里的土壤和气候都很适合种植茶叶。',py:'Zhèlǐ de tǔrǎng hé qìhòu dōu hěn shìhé zhòngzhí cháyè.',vn:'Đất đai và khí hậu ở đây đều rất thích hợp trồng chè.'}
   ],
   colloFull:[
     {zh:'土壤肥沃',py:'tǔrǎng féiwò',vn:'đất đai màu mỡ'},
     {zh:'改良土壤',py:'gǎiliáng tǔrǎng',vn:'cải tạo đất'},
     {zh:'土壤污染',py:'tǔrǎng wūrǎn',vn:'ô nhiễm đất'},
     {zh:'适合……的土壤',py:'shìhé……de tǔrǎng',vn:'loại đất thích hợp cho…'},
     {zh:'湿润的土壤',py:'shīrùn de tǔrǎng',vn:'đất ẩm'}
   ],
   patterns:[
     {s:'土壤 + 肥沃 / 贫瘠 / 湿润',m:'Đất màu mỡ / cằn cỗi / ẩm'},
     {s:'……是……成长的土壤',m:'… là mảnh đất (môi trường) cho … phát triển'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đất ở vùng này tuy không màu mỡ lắm, nhưng người dân đã trồng rau rất giỏi.',answer:'这一带的土壤虽然不太肥沃，但是村民们菜种得非常好。',answerPy:'Zhè yídài de tǔrǎng suīrán bú tài féiwò, dànshì cūnmínmen cài zhòng de fēicháng hǎo.',
      note:'虽然……但是…… (ôn HSK 4); bổ ngữ trạng thái: 菜种得很好.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Một môi trường thoải mái là mảnh đất tốt nhất cho sáng tạo.',answer:'宽松的环境是创新最好的土壤。',answerPy:'Kuānsōng de huánjìng shì chuàngxīn zuì hǎo de tǔrǎng.',
      note:'土壤 nghĩa bóng = môi trường nuôi dưỡng; 创新 ôn HSK 6 bài 10.',pair:'是……的……'}
   ]},

  {n:7,zh:'肥沃',py:'féiwò',pos:'Tính từ',vn:'màu mỡ, phì nhiêu',hv:'phì ốc',em:'🌾',lesson:1,
   explain:['Tính từ: (đất) chứa nhiều chất dinh dưỡng, nước, thích hợp cho cây trồng.','Chỉ dùng cho đất đai (土地, 土壤, 田地); trái nghĩa: 贫瘠 (cằn cỗi).'],
   usage:'土地 / 土壤 + 肥沃; 肥沃的 + 土地 / 平原 / 田野. Không dùng cho người hay động vật (người béo là 胖, thịt béo là 肥).',
   collo:['肥沃的土地','土壤肥沃','肥沃的平原','变得肥沃'],
   ex_zh:'只要有肥沃的土壤，种子很快就能发芽开花。',ex_py:'Zhǐyào yǒu féiwò de tǔrǎng, zhǒngzi hěn kuài jiù néng fāyá kāihuā.',ex_vn:'Chỉ cần có đất màu mỡ, hạt giống sẽ nhanh chóng nảy mầm ra hoa.',
   exList:[
     {zh:'只要有肥沃的土壤，种子很快就能发芽开花。',py:'Zhǐyào yǒu féiwò de tǔrǎng, zhǒngzi hěn kuài jiù néng fāyá kāihuā.',vn:'Chỉ cần có đất màu mỡ, hạt giống sẽ nhanh chóng nảy mầm ra hoa.'},
     {zh:'湄公河三角洲土地肥沃，是越南重要的粮食产区。',py:'Méigōng Hé sānjiǎozhōu tǔdì féiwò, shì Yuènán zhòngyào de liángshi chǎnqū.',vn:'Đồng bằng sông Cửu Long đất đai màu mỡ, là vựa lúa quan trọng của Việt Nam.'},
     {zh:'经过几年的精心改良，这片沙地变得肥沃起来了。',py:'Jīngguò jǐ nián de jīngxīn gǎiliáng, zhè piàn shādì biàn de féiwò qǐlái le.',vn:'Sau mấy năm cải tạo công phu, vùng đất cát này đã trở nên màu mỡ.'}
   ],
   colloFull:[
     {zh:'肥沃的土地',py:'féiwò de tǔdì',vn:'đất đai màu mỡ'},
     {zh:'土壤肥沃',py:'tǔrǎng féiwò',vn:'đất màu mỡ'},
     {zh:'肥沃的平原',py:'féiwò de píngyuán',vn:'đồng bằng phì nhiêu'},
     {zh:'变得肥沃',py:'biàn de féiwò',vn:'trở nên màu mỡ'},
     {zh:'肥沃的田野',py:'féiwò de tiányě',vn:'đồng ruộng màu mỡ'}
   ],
   patterns:[
     {s:'土地 / 土壤 + (很) 肥沃',m:'Đất đai màu mỡ'},
     {s:'肥沃的 + 土地 / 平原',m:'Vùng đất / đồng bằng màu mỡ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đất ở đây màu mỡ đến mức cắm cây gậy xuống cũng mọc được.',answer:'这里的土地肥沃得连插根棍子都能长出来。',answerPy:'Zhèlǐ de tǔdì féiwò de lián chā gēn gùnzi dōu néng zhǎng chūlái.',
      note:'Adj + 得 + 连……都…… = … đến mức ngay cả… cũng… (ôn HSK 5).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Nhờ có sông lớn chảy qua, đồng bằng này mới trở nên màu mỡ như vậy.',answer:'由于有大河流过，这片平原才变得这么肥沃。',answerPy:'Yóuyú yǒu dà hé liúguò, zhè piàn píngyuán cái biàn de zhème féiwò.',
      note:'由于……，……才…… = do… nên mới… (ôn HSK 4–5).',pair:'由于'}
   ]},

  {n:8,zh:'滋润',py:'zīrùn',pos:'Động từ',vn:'làm ẩm, tưới tắm, nuôi dưỡng',hv:'tư nhuận',em:'💧',lesson:1,
   explain:['Động từ: cung cấp nước, độ ẩm cho vật khác (雨水滋润大地, 滋润皮肤).','Nghĩa bóng: nuôi dưỡng tâm hồn (音乐滋润心灵). Tính từ (khẩu ngữ): sung túc, dễ chịu — 日子过得挺滋润.'],
   usage:'滋润 + 大地 / 土地 / 皮肤 / 心灵; 水 / 雨水的滋润 (danh từ hóa); 日子过得很滋润.',
   collo:['水的滋润','滋润大地','滋润皮肤','滋润心灵'],
   ex_zh:'春雨滋润着大地，田野里一片生机。',ex_py:'Chūnyǔ zīrùnzhe dàdì, tiányě li yí piàn shēngjī.',ex_vn:'Mưa xuân tưới tắm mặt đất, đồng ruộng tràn trề sức sống.',
   exList:[
     {zh:'春雨滋润着大地，田野里一片生机。',py:'Chūnyǔ zīrùnzhe dàdì, tiányě li yí piàn shēngjī.',vn:'Mưa xuân tưới tắm mặt đất, đồng ruộng tràn trề sức sống.'},
     {zh:'没有水的滋润，再好的种子也长不出来。',py:'Méiyǒu shuǐ de zīrùn, zài hǎo de zhǒngzi yě zhǎng bu chūlái.',vn:'Không có nước tưới tắm, hạt giống tốt đến đâu cũng không mọc lên được.'},
     {zh:'好书就像雨水，默默地滋润着我们的心灵。',py:'Hǎo shū jiù xiàng yǔshuǐ, mòmò de zīrùnzhe wǒmen de xīnlíng.',vn:'Sách hay giống như nước mưa, lặng lẽ nuôi dưỡng tâm hồn chúng ta.'}
   ],
   colloFull:[
     {zh:'水的滋润',py:'shuǐ de zīrùn',vn:'sự tưới tắm của nước'},
     {zh:'滋润大地',py:'zīrùn dàdì',vn:'tưới tắm mặt đất'},
     {zh:'滋润皮肤',py:'zīrùn pífū',vn:'dưỡng ẩm cho da'},
     {zh:'滋润心灵',py:'zīrùn xīnlíng',vn:'nuôi dưỡng tâm hồn'},
     {zh:'日子过得很滋润',py:'rìzi guò de hěn zīrùn',vn:'cuộc sống khá sung túc, dễ chịu'}
   ],
   patterns:[
     {s:'N (雨水 / 音乐) + 滋润 + N',m:'… tưới tắm / nuôi dưỡng …'},
     {s:'有 / 没有 + ……的滋润',m:'Có / không có sự nuôi dưỡng của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không có sự nuôi dưỡng của tình yêu thương, trẻ con khó mà trưởng thành khỏe mạnh.',answer:'如果没有爱的滋润，孩子难以健康地成长。',answerPy:'Rúguǒ méiyǒu ài de zīrùn, háizi nányǐ jiànkāng de chéngzhǎng.',
      note:'难以 + V hai âm tiết (ôn HSK 6 bài 14); 地 nối trạng ngữ với động từ.',pair:'难以'},
     {promptLang:'vi',prompt:'Từ khi mở cửa hàng nhỏ, cuộc sống nhà cô ấy ngày càng sung túc.',answer:'自从开了个小店，她家的日子过得越来越滋润了。',answerPy:'Zìcóng kāile ge xiǎo diàn, tā jiā de rìzi guò de yuè lái yuè zīrùn le.',
      note:'自从……(以后) = từ khi…; 越来越 + Adj (ôn HSK 3–4).',pair:'自从'}
   ]},

  {n:9,zh:'照耀',py:'zhàoyào',pos:'Động từ',vn:'chiếu rọi, soi sáng',hv:'chiếu diệu',em:'☀️',lesson:1,
   explain:['Động từ: (ánh sáng mạnh) chiếu sáng rực rỡ khắp nơi: 阳光照耀着大地.','Văn viết, sắc thái trang trọng, hay dùng với 阳光, 太阳, 月光, 灯光; nghĩa bóng: soi đường (照耀着前进的道路).'],
   usage:'阳光 / 太阳 / 月光 + 照耀 (+ 着) + N; 在……的照耀下; ……的照耀 (danh từ hóa: 阳光的照耀).',
   collo:['阳光的照耀','照耀着大地','在阳光的照耀下','照耀前程'],
   ex_zh:'在阳光的照耀下，湖面闪闪发光。',ex_py:'Zài yángguāng de zhàoyào xià, húmiàn shǎnshǎn fāguāng.',ex_vn:'Dưới ánh nắng chiếu rọi, mặt hồ lấp lánh.',
   exList:[
     {zh:'在阳光的照耀下，湖面闪闪发光。',py:'Zài yángguāng de zhàoyào xià, húmiàn shǎnshǎn fāguāng.',vn:'Dưới ánh nắng chiếu rọi, mặt hồ lấp lánh.'},
     {zh:'清晨，第一缕阳光照耀着宁静的小村庄。',py:'Qīngchén, dì-yī lǚ yángguāng zhàoyàozhe níngjìng de xiǎo cūnzhuāng.',vn:'Sáng sớm, tia nắng đầu tiên soi rọi ngôi làng nhỏ yên bình.'},
     {zh:'有水的滋润和阳光的照耀，丝瓜长得飞快。',py:'Yǒu shuǐ de zīrùn hé yángguāng de zhàoyào, sīguā zhǎng de fēikuài.',vn:'Có nước tưới tắm và nắng chiếu rọi, cây mướp lớn nhanh như thổi.'}
   ],
   colloFull:[
     {zh:'阳光的照耀',py:'yángguāng de zhàoyào',vn:'ánh nắng chiếu rọi'},
     {zh:'照耀着大地',py:'zhàoyàozhe dàdì',vn:'chiếu rọi mặt đất'},
     {zh:'在阳光的照耀下',py:'zài yángguāng de zhàoyào xià',vn:'dưới ánh nắng chiếu rọi'},
     {zh:'月光照耀',py:'yuèguāng zhàoyào',vn:'ánh trăng soi sáng'},
     {zh:'照耀前程',py:'zhàoyào qiánchéng',vn:'soi sáng tiền đồ'}
   ],
   patterns:[
     {s:'阳光 / 月光 + 照耀着 + N',m:'Ánh nắng / ánh trăng chiếu rọi …'},
     {s:'在……的照耀下，……',m:'Dưới sự chiếu rọi của …, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dưới ánh trăng chiếu rọi, cả thị trấn nhỏ trở nên đặc biệt yên tĩnh.',answer:'在月光的照耀下，整个小镇显得格外安静。',answerPy:'Zài yuèguāng de zhàoyào xià, zhěnggè xiǎozhèn xiǎnde géwài ānjìng.',
      note:'在……下 chỉ điều kiện / hoàn cảnh; 显得 + Adj = trông có vẻ (ôn HSK 5).',pair:'在……下'},
     {promptLang:'vi',prompt:'Ánh nắng chiếu vào phòng, khiến mọi người thấy tâm trạng vui vẻ hẳn lên.',answer:'阳光照耀进房间，使得大家的心情都愉快起来。',answerPy:'Yángguāng zhàoyào jìn fángjiān, shǐde dàjiā de xīnqíng dōu yúkuài qǐlái.',
      note:'使得 + người + Adj = khiến… (cấu trúc trong bài khoá: 使得瓜茎挺拔); Adj + 起来 = bắt đầu trở nên.',pair:'使得'}
   ]},

  {n:10,zh:'惊讶',py:'jīngyà',pos:'Tính từ',vn:'kinh ngạc, ngạc nhiên',hv:'kinh nhạ',em:'😲',lesson:1,
   explain:['Tính từ: cảm thấy rất lạ, ngạc nhiên trước điều ngoài dự đoán.','Gần nghĩa 惊奇 (bài 14) — 惊讶 nhấn "bất ngờ, không ngờ tới" (có khi kèm nghi ngờ); 惊奇 nhấn "thấy lạ mà thích thú".'],
   usage:'感到 / 十分 + 惊讶; 惊讶地 + 发现 / 问 / 看着; 令人 / 让人惊讶; 对……感到惊讶.',
   collo:['惊讶地发现','感到惊讶','令人惊讶','惊讶的表情'],
   ex_zh:'接着我惊讶地发现，它好像每时每刻都在长大。',ex_py:'Jiēzhe wǒ jīngyà de fāxiàn, tā hǎoxiàng měi shí měi kè dōu zài zhǎngdà.',ex_vn:'Tiếp đó tôi kinh ngạc phát hiện ra nó dường như lúc nào cũng đang lớn lên.',
   exList:[
     {zh:'接着我惊讶地发现，它好像每时每刻都在长大。',py:'Jiēzhe wǒ jīngyà de fāxiàn, tā hǎoxiàng měi shí měi kè dōu zài zhǎngdà.',vn:'Tiếp đó tôi kinh ngạc phát hiện ra nó dường như lúc nào cũng đang lớn lên.'},
     {zh:'听说他放弃了出国留学的机会，大家都感到很惊讶。',py:'Tīngshuō tā fàngqìle chūguó liúxué de jīhuì, dàjiā dōu gǎndào hěn jīngyà.',vn:'Nghe nói cậu ấy từ bỏ cơ hội du học, mọi người đều rất ngạc nhiên.'},
     {zh:'看到我满分的试卷，妈妈露出了惊讶的表情。',py:'Kàndào wǒ mǎnfēn de shìjuàn, māma lùchūle jīngyà de biǎoqíng.',vn:'Thấy bài thi điểm tuyệt đối của tôi, mẹ lộ vẻ ngạc nhiên.'}
   ],
   colloFull:[
     {zh:'惊讶地发现',py:'jīngyà de fāxiàn',vn:'kinh ngạc phát hiện'},
     {zh:'感到惊讶',py:'gǎndào jīngyà',vn:'cảm thấy ngạc nhiên'},
     {zh:'令人惊讶',py:'lìng rén jīngyà',vn:'khiến người ta kinh ngạc'},
     {zh:'惊讶的表情',py:'jīngyà de biǎoqíng',vn:'vẻ mặt ngạc nhiên'},
     {zh:'十分惊讶',py:'shífēn jīngyà',vn:'vô cùng kinh ngạc'}
   ],
   patterns:[
     {s:'惊讶地 + 发现 / 问 / 看着',m:'Kinh ngạc (mà) phát hiện / hỏi / nhìn'},
     {s:'对…… + 感到惊讶',m:'Cảm thấy ngạc nhiên về …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi cứ tưởng anh ấy sẽ tức giận, không ngờ anh ấy lại cười, khiến tôi rất ngạc nhiên.',answer:'我还以为他会生气，没想到他却笑了，这让我十分惊讶。',answerPy:'Wǒ hái yǐwéi tā huì shēngqì, méi xiǎngdào tā què xiào le, zhè ràng wǒ shífēn jīngyà.',
      note:'还以为…… = cứ tưởng (hóa ra không phải); 没想到……却…… = không ngờ… lại… (ôn HSK 4–5).',pair:'以为'},
     {promptLang:'vi',prompt:'Về đến quê, tôi kinh ngạc phát hiện con đường đất ngày xưa đã thành đường xi-măng.',answer:'回到老家，我惊讶地发现，昔日的土路已经变成了水泥路。',answerPy:'Huídào lǎojiā, wǒ jīngyà de fāxiàn, xīrì de tǔlù yǐjīng biànchéngle shuǐnílù.',
      note:'惊讶地 + 发现 (có 地); 昔日 = ngày xưa (ôn HSK 6 bài 7); 水泥 là từ mới cùng bài.',pair:'V + 成'}
   ]},

  {n:11,zh:'愣',py:'lèng',pos:'Phó từ',vn:'cứ, khăng khăng, cứ nhất định (trái lẽ thường)',hv:'lăng',em:'😤',lesson:1,
   explain:['Phó từ (khẩu ngữ): cứ, nhất định, bất chấp — làm việc trái với lẽ thường hoặc ngoài dự đoán; thường nói 愣是.','Động từ: ngẩn ra, sững sờ (听了这话，他愣了一下). Tính từ: lỗ mãng, liều (愣头愣脑).'],
   usage:'愣 / 愣是 + V (thường có ý bất ngờ, trái ý người nói): 愣是编出……, 愣是不听, 愣是卖不动. Động từ: 愣住了, 愣了半天.',
   collo:['愣是不听','愣是编出','愣了一下','愣住了'],
   ex_zh:'古人是怎么想的，愣是编出个拔苗助长的故事来？',ex_py:'Gǔrén shì zěnme xiǎng de, lèng shì biānchū ge bámiáo-zhùzhǎng de gùshi lái?',ex_vn:'Người xưa nghĩ thế nào mà lại cứ bịa ra câu chuyện kéo mạ cho mau lớn chứ?',
   exList:[
     {zh:'古人是怎么想的，愣是编出个拔苗助长的故事来？',py:'Gǔrén shì zěnme xiǎng de, lèng shì biānchū ge bámiáo-zhùzhǎng de gùshi lái?',vn:'Người xưa nghĩ thế nào mà lại cứ bịa ra câu chuyện kéo mạ cho mau lớn chứ?'},
     {zh:'这种产品一再降价，可愣是卖不动，让人觉得不可思议。',py:'Zhè zhǒng chǎnpǐn yízài jiàngjià, kě lèng shì mài bu dòng, ràng rén juéde bùkě-sīyì.',vn:'Sản phẩm này hạ giá hết lần này đến lần khác mà cứ bán không chạy, khiến người ta thấy khó hiểu.'},
     {zh:'听到这个消息，他愣了半天，一句话也说不出来。',py:'Tīngdào zhège xiāoxi, tā lèngle bàntiān, yí jù huà yě shuō bu chūlái.',vn:'Nghe tin này, anh ấy ngẩn người hồi lâu, không nói nổi một lời.'}
   ],
   colloFull:[
     {zh:'愣是不听',py:'lèng shì bù tīng',vn:'cứ nhất định không nghe'},
     {zh:'愣是编出',py:'lèng shì biānchū',vn:'cứ bịa ra cho bằng được'},
     {zh:'愣是卖不动',py:'lèng shì mài bu dòng',vn:'cứ bán không chạy'},
     {zh:'愣了一下',py:'lèngle yíxià',vn:'sững người một chút'},
     {zh:'愣住了',py:'lèngzhù le',vn:'sững sờ, đờ ra'}
   ],
   patterns:[
     {s:'……，(可) 愣是 + V',m:'…, vậy mà cứ nhất định … (trái lẽ thường)'},
     {s:'S + 愣了 + 一下 / 半天',m:'… ngẩn ra một lúc / hồi lâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mọi người khuyên nó đừng thức khuya, vậy mà nó cứ không nghe.',answer:'大家都劝他别熬夜，他愣是不听。',answerPy:'Dàjiā dōu quàn tā bié áoyè, tā lèng shì bù tīng.',
      note:'愣是 + V: làm trái lời khuyên / lẽ thường; 熬夜 = thức khuya (熬 ôn HSK 6 bài 2).',pair:'劝……别……'},
     {promptLang:'vi',prompt:'Đề này rõ ràng không khó, thế mà tôi nghĩ nửa tiếng đồng hồ cứ không nghĩ ra.',answer:'这道题明明不难，我愣是想了半个小时也没想出来。',answerPy:'Zhè dào tí míngmíng bù nán, wǒ lèng shì xiǎngle bàn ge xiǎoshí yě méi xiǎng chūlái.',
      note:'明明 = rõ ràng (ôn HSK 6 bài 6); V + 出来 bổ ngữ xu hướng nghĩa bóng.',pair:'明明'}
   ]},

  {n:12,zh:'拔苗助长',py:'bámiáo-zhùzhǎng',pos:'Thành ngữ',vn:'kéo mạ cho mau lớn; nóng vội hỏng việc, đốt cháy giai đoạn',hv:'bạt miêu trợ trưởng',em:'🌱',lesson:1,
   explain:['Thành ngữ: người nước Tống sốt ruột thấy lúa lớn chậm, bèn nhổ cây mạ lên một chút cho "cao" hơn, kết quả mạ chết hết.','Nghĩa bóng: làm trái quy luật tự nhiên, nóng vội muốn nhanh nhưng lại hỏng việc. Cũng viết 揠苗助长.'],
   usage:'Làm vị ngữ / tân ngữ: 这是拔苗助长; 别拔苗助长; ……无异于拔苗助长. Hay dùng khi bàn về giáo dục con cái, học tập.',
   collo:['拔苗助长的故事','不能拔苗助长','无异于拔苗助长','拔苗助长的做法'],
   ex_zh:'让孩子三岁就学那么多东西，简直是拔苗助长。',ex_py:'Ràng háizi sān suì jiù xué nàme duō dōngxi, jiǎnzhí shì bámiáo-zhùzhǎng.',ex_vn:'Bắt trẻ mới ba tuổi đã học nhiều thứ như thế, quả thật là kéo mạ cho mau lớn.',
   exList:[
     {zh:'让孩子三岁就学那么多东西，简直是拔苗助长。',py:'Ràng háizi sān suì jiù xué nàme duō dōngxi, jiǎnzhí shì bámiáo-zhùzhǎng.',vn:'Bắt trẻ mới ba tuổi đã học nhiều thứ như thế, quả thật là kéo mạ cho mau lớn.'},
     {zh:'学习要循序渐进，拔苗助长只会适得其反。',py:'Xuéxí yào xúnxù-jiànjìn, bámiáo-zhùzhǎng zhǐ huì shìdé-qífǎn.',vn:'Học tập phải từ từ từng bước, nóng vội đốt cháy giai đoạn chỉ phản tác dụng.'},
     {zh:'看着丝瓜长得这么快，我不明白古人为什么要编出拔苗助长的故事。',py:'Kànzhe sīguā zhǎng de zhème kuài, wǒ bù míngbai gǔrén wèi shénme yào biānchū bámiáo-zhùzhǎng de gùshi.',vn:'Nhìn cây mướp lớn nhanh như vậy, tôi không hiểu sao người xưa lại bịa ra chuyện kéo mạ cho mau lớn.'}
   ],
   colloFull:[
     {zh:'拔苗助长的故事',py:'bámiáo-zhùzhǎng de gùshi',vn:'câu chuyện kéo mạ cho mau lớn'},
     {zh:'不能拔苗助长',py:'bù néng bámiáo-zhùzhǎng',vn:'không được nóng vội đốt cháy giai đoạn'},
     {zh:'无异于拔苗助长',py:'wúyìyú bámiáo-zhùzhǎng',vn:'chẳng khác nào kéo mạ cho mau lớn'},
     {zh:'拔苗助长的做法',py:'bámiáo-zhùzhǎng de zuòfǎ',vn:'cách làm nóng vội, trái quy luật'},
     {zh:'简直是拔苗助长',py:'jiǎnzhí shì bámiáo-zhùzhǎng',vn:'quả thật là đốt cháy giai đoạn'}
   ],
   patterns:[
     {s:'(这 / ……) + 是 / 无异于 + 拔苗助长',m:'(Việc này) là / chẳng khác nào kéo mạ cho mau lớn'},
     {s:'不能 / 别 + 拔苗助长',m:'Đừng nóng vội làm trái quy luật'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cha mẹ nào cũng mong con thành tài, nhưng tuyệt đối không được nóng vội đốt cháy giai đoạn.',answer:'父母虽然都望子成龙，但千万不能拔苗助长。',answerPy:'Fùmǔ suīrán dōu wàngzǐ-chénglóng, dàn qiānwàn bù néng bámiáo-zhùzhǎng.',
      note:'望子成龙 = mong con thành tài; 千万 + 不能 / 别 = tuyệt đối đừng (ôn HSK 4).',pair:'千万'},
     {promptLang:'vi',prompt:'Ép học sinh ngày nào cũng học đến nửa đêm, chẳng khác nào kéo mạ cho mau lớn.',answer:'逼学生每天学到半夜，无异于拔苗助长。',answerPy:'Bī xuésheng měi tiān xuédào bànyè, wúyìyú bámiáo-zhùzhǎng.',
      note:'无异于 = chẳng khác gì (văn viết); V + 到 + thời điểm (ôn HSK 3–4).',pair:'无异于'}
   ]},

  {n:13,zh:'宁愿',py:'nìngyuàn',pos:'Phó từ',vn:'thà rằng, thà',hv:'ninh nguyện',em:'⚖️',lesson:1,
   explain:['Phó từ: dùng trong câu ghép LỰA CHỌN — sau khi cân nhắc lợi hại được mất, chọn lấy một cách làm (dù cách đó có thiệt thòi).','Khung thường gặp: 宁愿……也要…… (thà… cũng phải…) / 宁愿……也不…… (thà… chứ không…). Cũng nói 宁可, 宁肯.'],
   usage:'S + 宁愿 + phương án chọn (+ 也要 / 也不 + ……). 宁 ở đây đọc nìng (thanh 4), không đọc níng như 安宁.',
   collo:['宁愿……也不……','宁愿……也要……','宁愿吃苦','宁愿多花钱'],
   ex_zh:'咱们宁愿多花点儿钱，也要买个质量好的。',ex_py:'Zánmen nìngyuàn duō huā diǎnr qián, yě yào mǎi ge zhìliàng hǎo de.',ex_vn:'Chúng mình thà tốn thêm chút tiền, cũng phải mua cái chất lượng tốt.',
   exList:[
     {zh:'咱们宁愿多花点儿钱，也要买个质量好的。',py:'Zánmen nìngyuàn duō huā diǎnr qián, yě yào mǎi ge zhìliàng hǎo de.',vn:'Chúng mình thà tốn thêm chút tiền, cũng phải mua cái chất lượng tốt.'},
     {zh:'他就是这样，宁愿吃苦受累，也决不求人。',py:'Tā jiù shì zhèyàng, nìngyuàn chīkǔ shòulèi, yě jué bù qiú rén.',vn:'Anh ấy là vậy đó, thà chịu khổ chịu mệt chứ nhất quyết không cầu cạnh ai.'},
     {zh:'要是我，宁愿用别的比喻。',py:'Yàoshi wǒ, nìngyuàn yòng biéde bǐyù.',vn:'Nếu là tôi, tôi thà dùng một phép so sánh khác.'}
   ],
   colloFull:[
     {zh:'宁愿……也不……',py:'nìngyuàn……yě bù……',vn:'thà… chứ không…'},
     {zh:'宁愿……也要……',py:'nìngyuàn……yě yào……',vn:'thà… cũng phải…'},
     {zh:'宁愿吃苦',py:'nìngyuàn chīkǔ',vn:'thà chịu khổ'},
     {zh:'宁愿多花钱',py:'nìngyuàn duō huā qián',vn:'thà tốn thêm tiền'},
     {zh:'宁愿自己累一点儿',py:'nìngyuàn zìjǐ lèi yìdiǎnr',vn:'thà mình vất vả một chút'}
   ],
   patterns:[
     {s:'宁愿 + A，也不 + B',m:'Thà A chứ không B (loại bỏ B)'},
     {s:'宁愿 + A，也要 + B',m:'Thà chịu A cũng phải đạt được B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi thà đi bộ nửa tiếng, cũng không muốn chen chúc trên xe buýt.',answer:'我宁愿走半个小时路，也不想挤公共汽车。',answerPy:'Wǒ nìngyuàn zǒu bàn ge xiǎoshí lù, yě bù xiǎng jǐ gōnggòng qìchē.',
      note:'宁愿……也不…… (điểm ngữ pháp 2); tân ngữ chỉ thời lượng: 走半个小时路 (ôn HSK 4).',pair:'宁愿……也不……'},
     {promptLang:'vi',prompt:'Cậu ấy thà ngủ ít một chút, cũng phải viết xong bài văn tối nay.',answer:'他宁愿少睡会儿觉，也要今晚把作文写完。',answerPy:'Tā nìngyuàn shǎo shuì huìr jiào, yě yào jīnwǎn bǎ zuòwén xiěwán.',
      note:'宁愿……也要……; câu 把 + bổ ngữ kết quả 写完 (ôn HSK 4) — theo 练一练 (3) của sách.',pair:'把字句'}
   ]},

  {n:14,zh:'疲倦',py:'píjuàn',pos:'Tính từ',vn:'mệt mỏi, mệt lử',hv:'bì quyện',em:'😩',lesson:1,
   explain:['Tính từ: mệt mỏi, uể oải, muốn nghỉ ngơi hoặc buồn ngủ.','Gần nghĩa 疲惫 (bài 14) — 疲惫 mức độ nặng hơn (mệt rã rời, kiệt sức); 疲倦 thiên về uể oải, buồn ngủ; 疲劳 hay dùng cho cơ thể, thị lực (视觉疲劳).'],
   usage:'感到 / 显得 + 疲倦; 满脸疲倦; 疲倦的 + 样子 / 身体; 工作疲倦了. Không dùng 疲倦 làm động từ có tân ngữ.',
   collo:['满脸疲倦','感到疲倦','工作疲倦了','疲倦的样子'],
   ex_zh:'我每天工作疲倦了，都要去看看那几棵丝瓜。',ex_py:'Wǒ měi tiān gōngzuò píjuàn le, dōu yào qù kànkan nà jǐ kē sīguā.',ex_vn:'Ngày nào làm việc mệt rồi, tôi cũng đều ra ngắm mấy cây mướp ấy.',
   exList:[
     {zh:'我每天工作疲倦了，都要去看看那几棵丝瓜。',py:'Wǒ měi tiān gōngzuò píjuàn le, dōu yào qù kànkan nà jǐ kē sīguā.',vn:'Ngày nào làm việc mệt rồi, tôi cũng đều ra ngắm mấy cây mướp ấy.'},
     {zh:'放学后，我看到了满脸疲倦的妈妈。',py:'Fàngxué hòu, wǒ kàndàole mǎn liǎn píjuàn de māma.',vn:'Tan học, tôi thấy mẹ mặt mũi đầy vẻ mệt mỏi.'},
     {zh:'连续复习了三个小时，他终于感到有些疲倦了。',py:'Liánxù fùxíle sān ge xiǎoshí, tā zhōngyú gǎndào yǒuxiē píjuàn le.',vn:'Ôn liền ba tiếng đồng hồ, cuối cùng cậu ấy cũng thấy hơi mệt.'}
   ],
   colloFull:[
     {zh:'满脸疲倦',py:'mǎn liǎn píjuàn',vn:'mặt đầy vẻ mệt mỏi'},
     {zh:'感到疲倦',py:'gǎndào píjuàn',vn:'cảm thấy mệt mỏi'},
     {zh:'工作疲倦了',py:'gōngzuò píjuàn le',vn:'làm việc mệt rồi'},
     {zh:'疲倦的样子',py:'píjuàn de yàngzi',vn:'dáng vẻ mệt mỏi'},
     {zh:'毫无倦意',py:'háo wú juànyì',vn:'không chút mệt mỏi'}
   ],
   patterns:[
     {s:'(工作 / 学习) + 疲倦了',m:'(Làm việc / học) mệt rồi'},
     {s:'满脸 + 疲倦 / 疲倦的 + N',m:'Mặt đầy mệt mỏi / … mệt mỏi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù đã rất mệt, bà vẫn kiên trì chăm sóc ông suốt đêm.',answer:'尽管已经很疲倦了，奶奶仍旧坚持照顾了爷爷一整夜。',answerPy:'Jǐnguǎn yǐjīng hěn píjuàn le, nǎinai réngjiù jiānchí zhàogùle yéye yì zhěng yè.',
      note:'尽管……仍旧…… = mặc dù… vẫn… (仍旧 ôn HSK 6 bài 3).',pair:'尽管……仍旧……'},
     {promptLang:'vi',prompt:'Hễ thấy mệt là tôi lại ra ban công ngắm hoa một lúc.',answer:'我一感到疲倦，就到阳台上看一会儿花。',answerPy:'Wǒ yì gǎndào píjuàn, jiù dào yángtái shang kàn yíhuìr huā.',
      note:'一……就…… = hễ… là… (ôn HSK 4); 一会儿 đứng sau động từ chỉ thời lượng.',pair:'一……就……'}
   ]},

  {n:15,zh:'茎',py:'jīng',pos:'Danh từ',vn:'thân cây, cọng, cuống',hv:'hành',em:'🌿',lesson:1,
   explain:['Danh từ: thân cây (bộ phận nối rễ với lá, hoa; dẫn nước và chất dinh dưỡng): 瓜茎, 花茎, 根茎.','Hay dùng cho thân cỏ, thân dây leo (mảnh); thân cây gỗ lớn thường gọi 树干.'],
   usage:'瓜茎 / 花茎 / 根茎; 一根茎; 茎 + 细 / 粗 / 挺拔. Lượng từ: 根, 条.',
   collo:['瓜茎','一根细细的茎','根茎','茎叶'],
   ex_zh:'那一根细细的茎怎么承担得住呢？',ex_py:'Nà yì gēn xìxì de jīng zěnme chéngdān de zhù ne?',ex_vn:'Cái cọng mảnh mai ấy làm sao chịu nổi đây?',
   exList:[
     {zh:'那一根细细的茎怎么承担得住呢？',py:'Nà yì gēn xìxì de jīng zěnme chéngdān de zhù ne?',vn:'Cái cọng mảnh mai ấy làm sao chịu nổi đây?'},
     {zh:'瓜茎只有细绳一般粗，却能输送足够的水分和养料。',py:'Guājīng zhǐyǒu xì shéng yìbān cū, què néng shūsòng zúgòu de shuǐfèn hé yǎngliào.',vn:'Thân dây mướp chỉ to bằng sợi dây mảnh, vậy mà lại chuyển được đủ nước và chất dinh dưỡng.'},
     {zh:'这种植物的茎可以用来做药。',py:'Zhè zhǒng zhíwù de jīng kěyǐ yòng lái zuò yào.',vn:'Thân của loài cây này có thể dùng làm thuốc.'}
   ],
   colloFull:[
     {zh:'瓜茎',py:'guājīng',vn:'thân dây mướp / dưa'},
     {zh:'一根细细的茎',py:'yì gēn xìxì de jīng',vn:'một cọng mảnh mai'},
     {zh:'根茎',py:'gēnjīng',vn:'thân rễ, củ'},
     {zh:'茎叶',py:'jīngyè',vn:'thân và lá'},
     {zh:'花茎',py:'huājīng',vn:'cuống hoa'}
   ],
   patterns:[
     {s:'瓜 / 花 + 茎',m:'Thân dây / cuống hoa'},
     {s:'茎 + 只有……一般粗',m:'Thân chỉ to bằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thân cây tuy rất mảnh, nhưng lại đỡ được một quả mướp nặng mấy cân.',answer:'茎虽然很细，却能托住一个好几斤重的丝瓜。',answerPy:'Jīng suīrán hěn xì, què néng tuōzhù yí ge hǎo jǐ jīn zhòng de sīguā.',
      note:'虽然……却…… (却 đứng sau chủ ngữ, trước động từ — ôn HSK 5); 好几 = khá nhiều.',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Lá của loài cây này có thể ăn, thân thì dùng làm thuốc được.',answer:'这种植物的叶子可以吃，茎则可以做药。',answerPy:'Zhè zhǒng zhíwù de yèzi kěyǐ chī, jīng zé kěyǐ zuò yào.',
      note:'A……，B 则…… = còn B thì… (đối chiếu, ôn HSK 5).',pair:'则'}
   ]},

  {n:16,zh:'幢',py:'zhuàng',pos:'Lượng từ',vn:'tòa, ngôi, căn (dùng cho nhà cửa)',hv:'tràng',em:'🏢',lesson:1,
   explain:['Lượng từ dùng cho nhà cửa, tòa nhà: 一幢楼, 两幢别墅, 这幢房子.','Gần nghĩa 栋 (HSK 6 bài 5) — hai từ dùng thay nhau được; 座 cũng dùng cho nhà, nhưng rộng hơn (núi, cầu, thành phố).'],
   usage:'Số từ / 这 / 那 + 幢 + 楼 / 房子 / 大厦 / 别墅. Văn viết hơn 座, hay gặp trong văn miêu tả.',
   collo:['这幢楼','一幢别墅','几幢大楼','一幢幢高楼'],
   ex_zh:'转眼间，瓜茎已经爬上了我们这幢楼陡峭的楼墙。',ex_py:'Zhuǎnyǎn jiān, guājīng yǐjīng páshangle wǒmen zhè zhuàng lóu dǒuqiào de lóuqiáng.',ex_vn:'Chớp mắt một cái, thân dây mướp đã leo lên bức tường dốc đứng của tòa nhà chúng tôi.',
   exList:[
     {zh:'转眼间，瓜茎已经爬上了我们这幢楼陡峭的楼墙。',py:'Zhuǎnyǎn jiān, guājīng yǐjīng páshangle wǒmen zhè zhuàng lóu dǒuqiào de lóuqiáng.',vn:'Chớp mắt một cái, thân dây mướp đã leo lên bức tường dốc đứng của tòa nhà chúng tôi.'},
     {zh:'短短几年，这里建起了一幢幢高楼。',py:'Duǎnduǎn jǐ nián, zhèlǐ jiànqǐle yí zhuàngzhuàng gāolóu.',vn:'Chỉ trong mấy năm ngắn ngủi, nơi đây mọc lên hết tòa cao ốc này đến tòa cao ốc khác.'},
     {zh:'那幢红色的小楼就是我们的图书馆。',py:'Nà zhuàng hóngsè de xiǎo lóu jiù shì wǒmen de túshūguǎn.',vn:'Tòa nhà nhỏ màu đỏ kia chính là thư viện của chúng tôi.'}
   ],
   colloFull:[
     {zh:'这幢楼',py:'zhè zhuàng lóu',vn:'tòa nhà này'},
     {zh:'一幢别墅',py:'yí zhuàng biéshù',vn:'một căn biệt thự'},
     {zh:'几幢大楼',py:'jǐ zhuàng dàlóu',vn:'mấy tòa nhà lớn'},
     {zh:'一幢幢高楼',py:'yí zhuàngzhuàng gāolóu',vn:'từng tòa cao ốc'},
     {zh:'一幢老房子',py:'yí zhuàng lǎo fángzi',vn:'một ngôi nhà cũ'}
   ],
   patterns:[
     {s:'Số từ / 这 / 那 + 幢 + 楼 / 房子',m:'… tòa nhà / ngôi nhà'},
     {s:'一幢幢 + N',m:'Hết tòa này đến tòa khác'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tòa nhà cũ này đã được xây từ bốn mươi năm trước, vậy mà đến giờ vẫn rất kiên cố.',answer:'这幢老楼四十年前就修建好了，至今仍然很坚固。',answerPy:'Zhè zhuàng lǎo lóu sìshí nián qián jiù xiūjiàn hǎo le, zhìjīn réngrán hěn jiāngù.',
      note:'就 nhấn thời điểm sớm (ôn HSK 4); 至今仍然 = đến nay vẫn; 修建 là từ mới cùng bài.',pair:'就'},
     {promptLang:'vi',prompt:'Nhà tôi ở tầng ba của tòa nhà đó, ngoài cửa sổ có một giàn mướp.',answer:'我家住在那幢楼的三楼，窗外有一架丝瓜。',answerPy:'Wǒ jiā zhù zài nà zhuàng lóu de sān lóu, chuāng wài yǒu yí jià sīguā.',
      note:'V + 在 + nơi chốn (ôn HSK 3); 一架丝瓜 = một giàn mướp.',pair:'V + 在'}
   ]},

  {n:17,zh:'陡峭',py:'dǒuqiào',pos:'Tính từ',vn:'dốc đứng, cheo leo',hv:'đẩu tiễu',em:'🧗',lesson:1,
   explain:['Tính từ: (núi, vách, đường, tường) có độ dốc rất lớn, gần như thẳng đứng.','Thường miêu tả núi đá, vách núi: 陡峭的山坡, 山势陡峭; trong bài khoá dùng hình ảnh hóa cho bức tường nhà cao (陡峭的楼墙).'],
   usage:'陡峭的 + 山 / 山坡 / 悬崖 / 石阶; 山势 + 陡峭. Không dùng cho giá cả tăng nhanh (dùng 陡 / 猛涨).',
   collo:['陡峭的山坡','山势陡峭','陡峭的楼墙','陡峭的悬崖'],
   ex_zh:'这条山路又窄又陡峭，大家一定要留神。',ex_py:'Zhè tiáo shānlù yòu zhǎi yòu dǒuqiào, dàjiā yídìng yào liúshén.',ex_vn:'Con đường núi này vừa hẹp vừa dốc đứng, mọi người nhất định phải cẩn thận.',
   exList:[
     {zh:'这条山路又窄又陡峭，大家一定要留神。',py:'Zhè tiáo shānlù yòu zhǎi yòu dǒuqiào, dàjiā yídìng yào liúshén.',vn:'Con đường núi này vừa hẹp vừa dốc đứng, mọi người nhất định phải cẩn thận.'},
     {zh:'瓜茎顺着陡峭的楼墙，一直爬到了三楼。',py:'Guājīng shùnzhe dǒuqiào de lóuqiáng, yìzhí pádàole sān lóu.',vn:'Thân dây mướp men theo bức tường dốc đứng, bò thẳng lên tận tầng ba.'},
     {zh:'山势陡峭，登山的人只好小心翼翼地往上爬。',py:'Shānshì dǒuqiào, dēngshān de rén zhǐhǎo xiǎoxīn-yìyì de wǎng shàng pá.',vn:'Thế núi cheo leo, người leo núi đành phải thận trọng từng chút mà trèo lên.'}
   ],
   colloFull:[
     {zh:'陡峭的山坡',py:'dǒuqiào de shānpō',vn:'sườn núi dốc đứng'},
     {zh:'山势陡峭',py:'shānshì dǒuqiào',vn:'thế núi cheo leo'},
     {zh:'陡峭的楼墙',py:'dǒuqiào de lóuqiáng',vn:'bức tường nhà dựng đứng'},
     {zh:'陡峭的悬崖',py:'dǒuqiào de xuányá',vn:'vách núi dựng đứng'},
     {zh:'陡峭的石阶',py:'dǒuqiào de shíjiē',vn:'bậc đá dốc đứng'}
   ],
   patterns:[
     {s:'陡峭的 + 山坡 / 悬崖 / 墙',m:'… dốc đứng'},
     {s:'(山势 / 山路) + 很 / 十分 + 陡峭',m:'(Thế núi / đường núi) rất dốc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vách núi dốc đứng như vậy mà anh ấy vẫn leo lên được, thật khiến người ta khâm phục.',answer:'这么陡峭的悬崖他都能爬上去，真让人佩服。',answerPy:'Zhème dǒuqiào de xuányá tā dōu néng pá shàngqù, zhēn ràng rén pèifú.',
      note:'Tân ngữ đưa lên trước + 都 nhấn mạnh (ôn HSK 4); bổ ngữ xu hướng kép 爬上去.',pair:'V + 上去'},
     {promptLang:'vi',prompt:'Đường núi quá dốc, chúng tôi đành phải đi xuống từng bước một.',answer:'山路太陡峭了，我们只好一步一步地往下走。',answerPy:'Shānlù tài dǒuqiào le, wǒmen zhǐhǎo yí bù yí bù de wǎng xià zǒu.',
      note:'只好 = đành phải (ôn HSK 4); 一步一步地 = từng bước một (lặp số lượng từ).',pair:'只好'}
   ]},

  {n:18,zh:'挺拔',py:'tǐngbá',pos:'Tính từ',vn:'thẳng tắp, cao vút; mạnh mẽ',hv:'đĩnh bạt',em:'🌲',lesson:1,
   explain:['Tính từ: thẳng và cao vươn lên (cây, núi, dáng người): 挺拔的白杨, 身材挺拔.','Nghĩa bóng: (nét chữ, phong thái) mạnh mẽ, cứng cỏi: 笔力挺拔.'],
   usage:'挺拔的 + 树 / 松树 / 身材; N + 挺拔; 高大挺拔. Mang sắc thái khen, văn miêu tả.',
   collo:['高大挺拔','挺拔的松树','身材挺拔','瓜茎挺拔'],
   ex_zh:'瓜茎输送足够的水分和养料，使得瓜茎挺拔，叶子茂盛。',ex_py:'Guājīng shūsòng zúgòu de shuǐfèn hé yǎngliào, shǐde guājīng tǐngbá, yèzi màoshèng.',ex_vn:'Thân dây chuyển đủ nước và chất dinh dưỡng, khiến dây mướp vươn thẳng, lá cành xanh tốt.',
   exList:[
     {zh:'瓜茎输送足够的水分和养料，使得瓜茎挺拔，叶子茂盛。',py:'Guājīng shūsòng zúgòu de shuǐfèn hé yǎngliào, shǐde guājīng tǐngbá, yèzi màoshèng.',vn:'Thân dây chuyển đủ nước và chất dinh dưỡng, khiến dây mướp vươn thẳng, lá cành xanh tốt.'},
     {zh:'路两旁是一排排高大挺拔的白杨树。',py:'Lù liǎng páng shì yì páipái gāodà tǐngbá de báiyángshù.',vn:'Hai bên đường là từng hàng bạch dương cao lớn thẳng tắp.'},
     {zh:'他身材挺拔，穿上军装显得特别精神。',py:'Tā shēncái tǐngbá, chuānshang jūnzhuāng xiǎnde tèbié jīngshen.',vn:'Anh ấy dáng người cao thẳng, mặc quân phục vào trông đặc biệt khỏe khoắn.'}
   ],
   colloFull:[
     {zh:'高大挺拔',py:'gāodà tǐngbá',vn:'cao lớn thẳng tắp'},
     {zh:'挺拔的松树',py:'tǐngbá de sōngshù',vn:'cây tùng thẳng tắp'},
     {zh:'身材挺拔',py:'shēncái tǐngbá',vn:'dáng người cao thẳng'},
     {zh:'瓜茎挺拔',py:'guājīng tǐngbá',vn:'thân dây mướp vươn thẳng'},
     {zh:'挺拔的山峰',py:'tǐngbá de shānfēng',vn:'ngọn núi sừng sững'}
   ],
   patterns:[
     {s:'高大 + 挺拔',m:'Cao lớn thẳng tắp'},
     {s:'挺拔的 + 树 / 身材 / 山峰',m:'… thẳng tắp, sừng sững'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cây tùng trên đỉnh núi tuy mọc trong khe đá, nhưng vẫn cao thẳng như thường.',answer:'山顶的松树虽然长在石缝里，却照样长得很挺拔。',answerPy:'Shāndǐng de sōngshù suīrán zhǎng zài shí fèng li, què zhàoyàng zhǎng de hěn tǐngbá.',
      note:'照样 = vẫn cứ như thường (ôn HSK 6 bài 10); 虽然……却…….',pair:'照样'},
     {promptLang:'vi',prompt:'Ông nội đã tám mươi tuổi rồi, vậy mà lưng vẫn thẳng như cây tùng.',answer:'爷爷已经八十岁了，腰板却还像松树一样挺拔。',answerPy:'Yéye yǐjīng bāshí suì le, yāobǎn què hái xiàng sōngshù yíyàng tǐngbá.',
      note:'A 像 B 一样 + Adj = A … như B (ôn HSK 3–4).',pair:'像……一样'}
   ]},

  {n:19,zh:'茂盛',py:'màoshèng',pos:'Tính từ',vn:'xanh tốt, sum suê, um tùm',hv:'mậu thịnh',em:'🌳',lesson:1,
   explain:['Tính từ: (cây cỏ) mọc nhiều, xanh tươi, rậm rạp: 树木茂盛, 茂盛的草地.','Chủ yếu dùng cho thực vật; nói người / việc làm ăn phát đạt thì dùng 兴旺, 兴盛.'],
   usage:'树木 / 叶子 / 庄稼 / 草 + 茂盛; 茂盛的 + 树林 / 草地; 长得很茂盛.',
   collo:['叶子茂盛','长得很茂盛','茂盛的树林','枝叶茂盛'],
   ex_zh:'院子里的丝瓜长得十分茂盛，把半面墙都覆盖了。',ex_py:'Yuànzi li de sīguā zhǎng de shífēn màoshèng, bǎ bàn miàn qiáng dōu fùgài le.',ex_vn:'Giàn mướp trong sân mọc rất sum suê, phủ kín cả nửa bức tường.',
   exList:[
     {zh:'院子里的丝瓜长得十分茂盛，把半面墙都覆盖了。',py:'Yuànzi li de sīguā zhǎng de shífēn màoshèng, bǎ bàn miàn qiáng dōu fùgài le.',vn:'Giàn mướp trong sân mọc rất sum suê, phủ kín cả nửa bức tường.'},
     {zh:'下了几场雨，山上的草木更加茂盛了。',py:'Xiàle jǐ cháng yǔ, shān shang de cǎomù gèngjiā màoshèng le.',vn:'Mưa mấy trận, cây cỏ trên núi càng thêm xanh tốt.'},
     {zh:'那棵老树枝叶茂盛，夏天我们常在树下乘凉。',py:'Nà kē lǎo shù zhīyè màoshèng, xiàtiān wǒmen cháng zài shù xià chéngliáng.',vn:'Cây cổ thụ ấy cành lá sum suê, mùa hè chúng tôi hay ngồi hóng mát dưới gốc.'}
   ],
   colloFull:[
     {zh:'叶子茂盛',py:'yèzi màoshèng',vn:'lá xanh tốt'},
     {zh:'长得很茂盛',py:'zhǎng de hěn màoshèng',vn:'mọc rất sum suê'},
     {zh:'茂盛的树林',py:'màoshèng de shùlín',vn:'khu rừng rậm rạp'},
     {zh:'枝叶茂盛',py:'zhīyè màoshèng',vn:'cành lá sum suê'},
     {zh:'庄稼茂盛',py:'zhuāngjia màoshèng',vn:'mùa màng tốt tươi'}
   ],
   patterns:[
     {s:'N (树 / 叶子 / 草) + 茂盛',m:'… xanh tốt, sum suê'},
     {s:'V + 得 + (十分) 茂盛',m:'Mọc / lớn … rất sum suê'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần chăm sóc tỉ mỉ, cây trong chậu cũng có thể mọc sum suê như thế.',answer:'只要精心照顾，花盆里的植物也能长得这么茂盛。',answerPy:'Zhǐyào jīngxīn zhàogù, huāpén li de zhíwù yě néng zhǎng de zhème màoshèng.',
      note:'精心 = tỉ mỉ, dốc lòng (ôn HSK 6 bài 10); 只要……也能…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Khu rừng ấy cây cối rậm rạp đến mức ánh nắng cũng khó chiếu vào được.',answer:'那片树林茂盛得连阳光都很难照进去。',answerPy:'Nà piàn shùlín màoshèng de lián yángguāng dōu hěn nán zhào jìnqù.',
      note:'Adj + 得 + 连……都…… = … đến mức ngay cả… cũng….',pair:'连……都……'}
   ]},

  {n:20,zh:'覆盖',py:'fùgài',pos:'Động từ',vn:'che phủ, bao phủ',hv:'phúc cái',em:'🏔️',lesson:1,
   explain:['Động từ: che lên trên, phủ kín bề mặt: 白雪覆盖着大地, 覆盖在墙面上.','Nghĩa mở rộng: (mạng lưới, dịch vụ) phủ sóng, bao trùm một phạm vi: 网络覆盖全市, 覆盖面.'],
   usage:'A + 覆盖 (着) + B; 覆盖在 + nơi chốn + 上; 被……覆盖; 覆盖率 / 覆盖面. Văn viết.',
   collo:['覆盖在墙面上','白雪覆盖','网络覆盖','被……覆盖'],
   ex_zh:'那覆盖在水泥墙面上的一片浓绿显得朝气蓬勃。',ex_py:'Nà fùgài zài shuǐní qiángmiàn shang de yí piàn nónglǜ xiǎnde zhāoqì-péngbó.',ex_vn:'Mảng xanh đậm phủ trên mặt tường xi-măng ấy trông tràn đầy sức sống.',
   exList:[
     {zh:'那覆盖在水泥墙面上的一片浓绿显得朝气蓬勃。',py:'Nà fùgài zài shuǐní qiángmiàn shang de yí piàn nónglǜ xiǎnde zhāoqì-péngbó.',vn:'Mảng xanh đậm phủ trên mặt tường xi-măng ấy trông tràn đầy sức sống.'},
     {zh:'一夜大雪，整个村子都被白雪覆盖了。',py:'Yí yè dàxuě, zhěnggè cūnzi dōu bèi báixuě fùgài le.',vn:'Tuyết rơi dày suốt đêm, cả ngôi làng bị tuyết trắng phủ kín.'},
     {zh:'现在无线网络已经覆盖了整个校园。',py:'Xiànzài wúxiàn wǎngluò yǐjīng fùgàile zhěnggè xiàoyuán.',vn:'Bây giờ mạng không dây đã phủ sóng toàn bộ khuôn viên trường.'}
   ],
   colloFull:[
     {zh:'覆盖在墙面上',py:'fùgài zài qiángmiàn shang',vn:'phủ trên mặt tường'},
     {zh:'白雪覆盖',py:'báixuě fùgài',vn:'tuyết trắng bao phủ'},
     {zh:'网络覆盖',py:'wǎngluò fùgài',vn:'mạng phủ sóng'},
     {zh:'被……覆盖',py:'bèi……fùgài',vn:'bị … che phủ'},
     {zh:'森林覆盖率',py:'sēnlín fùgàilǜ',vn:'tỷ lệ che phủ rừng'}
   ],
   patterns:[
     {s:'A + 覆盖 (着) + B',m:'A che phủ B'},
     {s:'B + 被 + A + 覆盖 (了)',m:'B bị A phủ kín'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ nhiều năm trồng cây, tỷ lệ che phủ rừng của vùng này ngày càng cao.',answer:'经过多年的植树造林，这个地区的森林覆盖率日益提高。',answerPy:'Jīngguò duō nián de zhíshù zàolín, zhège dìqū de sēnlín fùgàilǜ rìyì tígāo.',
      note:'经过…… = qua, trải qua (ôn HSK 4); 日益 + V = ngày càng (ôn HSK 6 bài 7).',pair:'日益'},
     {promptLang:'vi',prompt:'Lá mướp phủ kín cửa sổ, đến nỗi trong phòng trở nên mát mẻ hẳn.',answer:'丝瓜叶把窗户都覆盖了，以致屋里变得凉快多了。',answerPy:'Sīguā yè bǎ chuānghu dōu fùgài le, yǐzhì wū li biàn de liángkuai duō le.',
      note:'以致 = đến nỗi (ôn HSK 6 bài 7) — ở đây kết quả trung tính; câu 把 với 覆盖.',pair:'以致'}
   ]},

  {n:21,zh:'水泥',py:'shuǐní',pos:'Danh từ',vn:'xi-măng',hv:'thủy nê',em:'🧱',lesson:1,
   explain:['Danh từ: xi-măng — vật liệu xây dựng dạng bột, trộn với nước, cát, đá thì đông cứng.','Làm định ngữ trực tiếp: 水泥墙, 水泥路, 水泥地; nghĩa bóng: 水泥森林 = "rừng bê tông" (thành phố toàn nhà cao tầng).'],
   usage:'一袋水泥; 水泥 + 墙 / 路 / 地 / 厂; 用水泥修建…….',
   collo:['水泥墙面','水泥路','一袋水泥','水泥森林'],
   ex_zh:'以前村里都是土路，现在全修成了水泥路。',ex_py:'Yǐqián cūn li dōu shì tǔlù, xiànzài quán xiūchéngle shuǐnílù.',ex_vn:'Trước kia trong làng toàn đường đất, giờ đều đã làm thành đường xi-măng.',
   exList:[
     {zh:'以前村里都是土路，现在全修成了水泥路。',py:'Yǐqián cūn li dōu shì tǔlù, xiànzài quán xiūchéngle shuǐnílù.',vn:'Trước kia trong làng toàn đường đất, giờ đều đã làm thành đường xi-măng.'},
     {zh:'绿色的丝瓜叶覆盖了灰色的水泥墙面。',py:'Lǜsè de sīguā yè fùgàile huīsè de shuǐní qiángmiàn.',vn:'Lá mướp xanh phủ kín mặt tường xi-măng xám.'},
     {zh:'住在城市的水泥森林里，人们越来越向往大自然。',py:'Zhù zài chéngshì de shuǐní sēnlín li, rénmen yuè lái yuè xiàngwǎng dàzìrán.',vn:'Sống giữa "rừng bê tông" thành phố, con người ngày càng khao khát thiên nhiên.'}
   ],
   colloFull:[
     {zh:'水泥墙面',py:'shuǐní qiángmiàn',vn:'mặt tường xi-măng'},
     {zh:'水泥路',py:'shuǐnílù',vn:'đường xi-măng, đường bê tông'},
     {zh:'一袋水泥',py:'yí dài shuǐní',vn:'một bao xi-măng'},
     {zh:'水泥森林',py:'shuǐní sēnlín',vn:'rừng bê tông'},
     {zh:'水泥地',py:'shuǐnídì',vn:'nền xi-măng'}
   ],
   patterns:[
     {s:'水泥 + 墙 / 路 / 地',m:'Tường / đường / nền xi-măng'},
     {s:'用水泥 + 修建 / 铺 + ……',m:'Dùng xi-măng xây / lát …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù sống giữa rừng bê tông, cô ấy vẫn trồng đầy hoa cỏ trên ban công.',answer:'即使住在水泥森林里，她也在阳台上种满了花草。',answerPy:'Jíshǐ zhù zài shuǐní sēnlín li, tā yě zài yángtái shang zhòngmǎnle huācǎo.',
      note:'即使……也…… = cho dù… cũng… (ôn HSK 5); V + 满 bổ ngữ kết quả.',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Trên mặt đường xi-măng vậy mà lại mọc lên một khóm hoa nhỏ.',answer:'水泥路面上居然长出了一株小花。',answerPy:'Shuǐní lùmiàn shang jūrán zhǎngchūle yì zhū xiǎo huā.',
      note:'居然 = vậy mà, không ngờ (ôn HSK 5); câu tồn hiện: nơi chốn + V出 + N.',pair:'居然'}
   ]},

  {n:22,zh:'朝气蓬勃',py:'zhāoqì-péngbó',pos:'Thành ngữ',vn:'tràn đầy sức sống, tràn trề nhựa sống',hv:'triêu khí bồng bột',em:'🌅',lesson:1,
   explain:['Thành ngữ: 朝气 = khí buổi sớm (tươi mới, hăng hái), 蓬勃 = mạnh mẽ, dồi dào → tràn đầy sức sống, hăng hái vươn lên.','Hay miêu tả người trẻ, tập thể, cảnh vật đang phát triển. 朝 đọc zhāo (buổi sáng), không đọc cháo.'],
   usage:'Làm vị ngữ / định ngữ: 年轻人朝气蓬勃; 朝气蓬勃的 + 青年 / 景象; 显得朝气蓬勃.',
   collo:['朝气蓬勃的青年','显得朝气蓬勃','朝气蓬勃的景象','充满朝气'],
   ex_zh:'开学第一天，校园里到处都是朝气蓬勃的年轻人。',ex_py:'Kāixué dì-yī tiān, xiàoyuán li dàochù dōu shì zhāoqì-péngbó de niánqīngrén.',ex_vn:'Ngày khai giảng đầu tiên, khắp sân trường toàn là những người trẻ tràn đầy sức sống.',
   exList:[
     {zh:'开学第一天，校园里到处都是朝气蓬勃的年轻人。',py:'Kāixué dì-yī tiān, xiàoyuán li dàochù dōu shì zhāoqì-péngbó de niánqīngrén.',vn:'Ngày khai giảng đầu tiên, khắp sân trường toàn là những người trẻ tràn đầy sức sống.'},
     {zh:'那覆盖在水泥墙面上的一片浓绿显得朝气蓬勃，充满了生机与活力。',py:'Nà fùgài zài shuǐní qiángmiàn shang de yí piàn nónglǜ xiǎnde zhāoqì-péngbó, chōngmǎnle shēngjī yǔ huólì.',vn:'Mảng xanh đậm phủ trên mặt tường xi-măng ấy trông tràn trề nhựa sống, đầy sinh khí và sức sống.'},
     {zh:'春天来了，到处是一片朝气蓬勃的景象。',py:'Chūntiān lái le, dàochù shì yí piàn zhāoqì-péngbó de jǐngxiàng.',vn:'Mùa xuân đến rồi, khắp nơi là cảnh tượng tràn trề sức sống.'}
   ],
   colloFull:[
     {zh:'朝气蓬勃的青年',py:'zhāoqì-péngbó de qīngnián',vn:'thanh niên tràn đầy sức sống'},
     {zh:'显得朝气蓬勃',py:'xiǎnde zhāoqì-péngbó',vn:'trông tràn trề nhựa sống'},
     {zh:'朝气蓬勃的景象',py:'zhāoqì-péngbó de jǐngxiàng',vn:'cảnh tượng tràn đầy sức sống'},
     {zh:'充满朝气',py:'chōngmǎn zhāoqì',vn:'đầy sức trẻ'},
     {zh:'朝气蓬勃的团队',py:'zhāoqì-péngbó de tuánduì',vn:'đội ngũ trẻ trung năng động'}
   ],
   patterns:[
     {s:'N + (显得) + 朝气蓬勃',m:'… (trông) tràn đầy sức sống'},
     {s:'朝气蓬勃的 + N',m:'… tràn trề nhựa sống'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi các bạn trẻ đến, ngôi làng già cỗi này bỗng trở nên tràn đầy sức sống.',answer:'自从年轻人来了以后，这个古老的村子顿时变得朝气蓬勃。',answerPy:'Zìcóng niánqīngrén láile yǐhòu, zhège gǔlǎo de cūnzi dùnshí biàn de zhāoqì-péngbó.',
      note:'顿时 = bỗng chốc, ngay lập tức (ôn HSK 6 bài 2); 变得 + thành ngữ.',pair:'顿时'},
     {promptLang:'vi',prompt:'Nhìn những gương mặt trẻ trung tràn đầy sức sống ấy, thầy giáo không khỏi mỉm cười.',answer:'看着那一张张朝气蓬勃的脸，老师不由得笑了。',answerPy:'Kànzhe nà yì zhāngzhāng zhāoqì-péngbó de liǎn, lǎoshī bùyóude xiào le.',
      note:'不由得 = không kìm được (ôn HSK 6 bài 2); 一张张 lặp số lượng từ.',pair:'不由得'}
   ]},

  {n:23,zh:'生机',py:'shēngjī',pos:'Danh từ',vn:'sức sống, sinh khí; cơ hội sống',hv:'sinh cơ',em:'🌱',lesson:1,
   explain:['Danh từ: ① sức sống, sinh khí (của cây cỏ, cảnh vật): 充满生机, 生机勃勃. ② cơ hội sống còn: 一线生机 (một tia hy vọng sống).','Hay đi cặp 生机与活力 (sức sống và sinh lực).'],
   usage:'充满 / 恢复 / 失去 + 生机; 生机 + 勃勃 / 盎然; 一片生机; 一线生机.',
   collo:['充满生机','生机勃勃','一线生机','生机与活力'],
   ex_zh:'那一片浓绿充满了生机与活力。',ex_py:'Nà yí piàn nónglǜ chōngmǎnle shēngjī yǔ huólì.',ex_vn:'Mảng xanh đậm ấy tràn đầy sinh khí và sức sống.',
   exList:[
     {zh:'那一片浓绿充满了生机与活力。',py:'Nà yí piàn nónglǜ chōngmǎnle shēngjī yǔ huólì.',vn:'Mảng xanh đậm ấy tràn đầy sinh khí và sức sống.'},
     {zh:'一场春雨过后，干枯的草地又恢复了生机。',py:'Yì cháng chūnyǔ guòhòu, gānkū de cǎodì yòu huīfùle shēngjī.',vn:'Sau một trận mưa xuân, bãi cỏ khô héo lại hồi sinh.'},
     {zh:'只要还有一线生机，医生就不会放弃。',py:'Zhǐyào hái yǒu yí xiàn shēngjī, yīshēng jiù bú huì fàngqì.',vn:'Chỉ cần còn một tia hy vọng sống, bác sĩ sẽ không bỏ cuộc.'}
   ],
   colloFull:[
     {zh:'充满生机',py:'chōngmǎn shēngjī',vn:'tràn đầy sức sống'},
     {zh:'生机勃勃',py:'shēngjī bóbó',vn:'tràn trề sức sống'},
     {zh:'一线生机',py:'yí xiàn shēngjī',vn:'một tia hy vọng sống'},
     {zh:'生机与活力',py:'shēngjī yǔ huólì',vn:'sinh khí và sức sống'},
     {zh:'恢复生机',py:'huīfù shēngjī',vn:'hồi sinh, lấy lại sức sống'}
   ],
   patterns:[
     {s:'充满 / 恢复 / 失去 + 生机',m:'Tràn đầy / lấy lại / mất đi sức sống'},
     {s:'一片生机 / 生机勃勃',m:'Cảnh tượng tràn trề sức sống'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có thêm mấy chậu cây xanh, cả lớp học lập tức tràn đầy sức sống.',answer:'多了几盆绿植，整个教室顿时充满了生机。',answerPy:'Duōle jǐ pén lǜzhí, zhěnggè jiàoshì dùnshí chōngmǎnle shēngjī.',
      note:'多了 + số lượng + N = có thêm…; 顿时 (ôn HSK 6 bài 2).',pair:'顿时'},
     {promptLang:'vi',prompt:'Dù chỉ còn một tia hy vọng sống, chúng ta cũng phải dốc toàn lực.',answer:'哪怕只有一线生机，我们也要全力以赴。',answerPy:'Nǎpà zhǐyǒu yí xiàn shēngjī, wǒmen yě yào quánlì-yǐfù.',
      note:'哪怕……也…… = cho dù… cũng… (ôn HSK 5); 全力以赴 ôn HSK 6 bài 6.',pair:'哪怕……也……'}
   ]},

  {n:24,zh:'花瓣',py:'huābàn',pos:'Danh từ',vn:'cánh hoa',hv:'hoa biện',em:'🌸',lesson:1,
   explain:['Danh từ: cánh hoa — từng mảnh tạo nên tràng hoa.','瓣 là lượng từ / danh từ chỉ múi, mảnh, cánh: 一瓣橘子 (một múi quýt), 蒜瓣 (tép tỏi).'],
   usage:'一片花瓣; 花瓣 + 飘落 / 掉 / 张开; 黄色的 / 粉红的 + 花瓣.',
   collo:['黄色的花瓣','一片花瓣','花瓣飘落','五片花瓣'],
   ex_zh:'黄色的花瓣点缀在绿叶之间，颜色协调，柔和精致。',ex_py:'Huángsè de huābàn diǎnzhuì zài lǜyè zhījiān, yánsè xiétiáo, róuhé jīngzhì.',ex_vn:'Những cánh hoa vàng điểm xuyết giữa lá xanh, màu sắc hài hòa, dịu dàng tinh tế.',
   exList:[
     {zh:'黄色的花瓣点缀在绿叶之间，颜色协调，柔和精致。',py:'Huángsè de huābàn diǎnzhuì zài lǜyè zhījiān, yánsè xiétiáo, róuhé jīngzhì.',vn:'Những cánh hoa vàng điểm xuyết giữa lá xanh, màu sắc hài hòa, dịu dàng tinh tế.'},
     {zh:'一阵风吹过，粉红色的花瓣纷纷飘落。',py:'Yí zhèn fēng chuīguò, fěnhóngsè de huābàn fēnfēn piāoluò.',vn:'Một cơn gió thổi qua, cánh hoa hồng phấn lả tả rơi xuống.'},
     {zh:'她把一片花瓣夹在书里，作为这次旅行的纪念。',py:'Tā bǎ yí piàn huābàn jiā zài shū li, zuòwéi zhè cì lǚxíng de jìniàn.',vn:'Cô ấy kẹp một cánh hoa vào trong sách, làm kỷ niệm cho chuyến đi này.'}
   ],
   colloFull:[
     {zh:'黄色的花瓣',py:'huángsè de huābàn',vn:'cánh hoa vàng'},
     {zh:'一片花瓣',py:'yí piàn huābàn',vn:'một cánh hoa'},
     {zh:'花瓣飘落',py:'huābàn piāoluò',vn:'cánh hoa bay rơi'},
     {zh:'五片花瓣',py:'wǔ piàn huābàn',vn:'năm cánh hoa'},
     {zh:'玫瑰花瓣',py:'méigui huābàn',vn:'cánh hoa hồng'}
   ],
   patterns:[
     {s:'Số từ + 片 + 花瓣',m:'… cánh hoa'},
     {s:'花瓣 + 飘落 / 张开 / 点缀在……',m:'Cánh hoa rơi / xòe ra / điểm xuyết ở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoa mướp có năm cánh, màu vàng tươi, trông rất đẹp mắt.',answer:'丝瓜花有五片花瓣，颜色鲜黄，看起来很漂亮。',answerPy:'Sīguā huā yǒu wǔ piàn huābàn, yánsè xiānhuáng, kàn qǐlái hěn piàoliang.',
      note:'看起来 + Adj = trông có vẻ (ôn HSK 4); lượng từ 片 cho cánh hoa.',pair:'看起来'},
     {promptLang:'vi',prompt:'Gió vừa thổi, cánh hoa đã rơi đầy mặt đất.',answer:'风一吹，花瓣就落了一地。',answerPy:'Fēng yì chuī, huābàn jiù luòle yí dì.',
      note:'一……就…… (ôn HSK 4); 落了一地 = rơi đầy đất (一 + N chỉ "khắp, đầy").',pair:'一……就……'}
   ]},

  {n:25,zh:'点缀',py:'diǎnzhuì',pos:'Động từ',vn:'tô điểm, điểm xuyết',hv:'điểm xuyết',em:'🎀',lesson:1,
   explain:['Động từ: thêm vào một ít thứ (thường nhỏ, đẹp) để làm cho vật chính thêm đẹp: 花瓣点缀在绿叶之间.','Nghĩa phụ: chỉ để làm cảnh, cho có (không có tác dụng thật): 只是点缀而已.'],
   usage:'A + 点缀在 + B + 之间 / 上; 用 A 点缀 B; 点缀 + 房间 / 生活; 只是个点缀.',
   collo:['点缀在绿叶之间','点缀房间','用鲜花点缀','只是点缀'],
   ex_zh:'红色的花瓣点缀在绿叶之间，让人看了心情愉快。',ex_py:'Hóngsè de huābàn diǎnzhuì zài lǜyè zhījiān, ràng rén kànle xīnqíng yúkuài.',ex_vn:'Những cánh hoa đỏ điểm xuyết giữa lá xanh, khiến người ta nhìn mà thấy vui vẻ.',
   exList:[
     {zh:'红色的花瓣点缀在绿叶之间，让人看了心情愉快。',py:'Hóngsè de huābàn diǎnzhuì zài lǜyè zhījiān, ràng rén kànle xīnqíng yúkuài.',vn:'Những cánh hoa đỏ điểm xuyết giữa lá xanh, khiến người ta nhìn mà thấy vui vẻ.'},
     {zh:'过年的时候，妈妈用红灯笼把家里点缀得十分喜庆。',py:'Guònián de shíhou, māma yòng hóng dēnglong bǎ jiā li diǎnzhuì de shífēn xǐqìng.',vn:'Dịp Tết, mẹ dùng đèn lồng đỏ trang trí trong nhà trông rất rộn ràng.'},
     {zh:'蓝天上点缀着几朵白云，像一幅画一样。',py:'Lántiān shang diǎnzhuìzhe jǐ duǒ báiyún, xiàng yì fú huà yíyàng.',vn:'Trên nền trời xanh điểm xuyết vài áng mây trắng, đẹp như một bức tranh.'}
   ],
   colloFull:[
     {zh:'点缀在绿叶之间',py:'diǎnzhuì zài lǜyè zhījiān',vn:'điểm xuyết giữa lá xanh'},
     {zh:'点缀房间',py:'diǎnzhuì fángjiān',vn:'tô điểm căn phòng'},
     {zh:'用鲜花点缀',py:'yòng xiānhuā diǎnzhuì',vn:'dùng hoa tươi tô điểm'},
     {zh:'只是点缀',py:'zhǐ shì diǎnzhuì',vn:'chỉ để làm cảnh'},
     {zh:'点缀着几朵白云',py:'diǎnzhuìzhe jǐ duǒ báiyún',vn:'điểm vài áng mây trắng'}
   ],
   patterns:[
     {s:'A + 点缀在 + B + 之间 / 上',m:'A điểm xuyết giữa / trên B'},
     {s:'用 A + 把 B + 点缀得 + Adj',m:'Dùng A tô điểm B cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn phòng tuy không lớn, nhưng được mấy chậu hoa tô điểm nên trông rất ấm cúng.',answer:'房间虽然不大，但是被几盆花点缀得很温馨。',answerPy:'Fángjiān suīrán bú dà, dànshì bèi jǐ pén huā diǎnzhuì de hěn wēnxīn.',
      note:'Câu bị động 被 + bổ ngữ trạng thái (ôn HSK 4); 温馨 = ấm cúng.',pair:'被字句'},
     {promptLang:'vi',prompt:'Mấy bông hoa trên bàn chẳng qua chỉ để làm cảnh mà thôi.',answer:'桌上的几朵花无非是个点缀而已。',answerPy:'Zhuō shang de jǐ duǒ huā wúfēi shì ge diǎnzhuì éryǐ.',
      note:'无非……而已 = chẳng qua chỉ là… mà thôi (ôn HSK 6 bài 5).',pair:'无非……而已'}
   ]},

  {n:26,zh:'协调',py:'xiétiáo',pos:'Tính từ',vn:'hài hòa, nhịp nhàng; phối hợp, điều phối',hv:'hiệp điều',em:'🎨',lesson:1,
   explain:['Tính từ: các bộ phận phối hợp ăn ý, cân đối, hài hòa: 颜色协调, 动作协调.','Động từ: điều phối, dàn xếp cho các bên phối hợp nhịp nhàng: 协调各部门的工作, 协调关系. 调 đọc tiáo.'],
   usage:'颜色 / 动作 / 比例 + (很) 协调; 不协调; 协调 + 工作 / 关系 / 矛盾; 由……负责协调.',
   collo:['颜色协调','动作协调','协调工作','不太协调'],
   ex_zh:'黄色的花瓣点缀在绿叶之间，颜色协调，柔和精致。',ex_py:'Huángsè de huābàn diǎnzhuì zài lǜyè zhījiān, yánsè xiétiáo, róuhé jīngzhì.',ex_vn:'Những cánh hoa vàng điểm xuyết giữa lá xanh, màu sắc hài hòa, dịu dàng tinh tế.',
   exList:[
     {zh:'黄色的花瓣点缀在绿叶之间，颜色协调，柔和精致。',py:'Huángsè de huābàn diǎnzhuì zài lǜyè zhījiān, yánsè xiétiáo, róuhé jīngzhì.',vn:'Những cánh hoa vàng điểm xuyết giữa lá xanh, màu sắc hài hòa, dịu dàng tinh tế.'},
     {zh:'这件上衣和裤子的颜色不太协调，换一条吧。',py:'Zhè jiàn shàngyī hé kùzi de yánsè bú tài xiétiáo, huàn yì tiáo ba.',vn:'Màu áo này với quần không hợp lắm, đổi cái quần khác đi.'},
     {zh:'班长负责协调各小组的工作。',py:'Bānzhǎng fùzé xiétiáo gè xiǎozǔ de gōngzuò.',vn:'Lớp trưởng phụ trách điều phối công việc của các nhóm.'}
   ],
   colloFull:[
     {zh:'颜色协调',py:'yánsè xiétiáo',vn:'màu sắc hài hòa'},
     {zh:'动作协调',py:'dòngzuò xiétiáo',vn:'động tác nhịp nhàng'},
     {zh:'协调工作',py:'xiétiáo gōngzuò',vn:'điều phối công việc'},
     {zh:'不太协调',py:'bú tài xiétiáo',vn:'không hài hòa lắm'},
     {zh:'协调关系',py:'xiétiáo guānxi',vn:'điều hòa các mối quan hệ'}
   ],
   patterns:[
     {s:'N (颜色 / 动作) + 协调',m:'… hài hòa, nhịp nhàng'},
     {s:'协调 + N (工作 / 关系 / 矛盾)',m:'Điều phối, dàn xếp …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn nhảy đẹp, trước hết động tác tay chân phải nhịp nhàng.',answer:'要想跳好舞，首先手脚的动作要协调。',answerPy:'Yào xiǎng tiàohǎo wǔ, shǒuxiān shǒujiǎo de dòngzuò yào xiétiáo.',
      note:'要想……，首先…… = muốn… thì trước hết… (ôn HSK 5).',pair:'要想……首先……'},
     {promptLang:'vi',prompt:'Mâu thuẫn giữa hai bên do thầy chủ nhiệm đứng ra dàn xếp.',answer:'双方之间的矛盾由班主任出面协调。',answerPy:'Shuāngfāng zhījiān de máodùn yóu bānzhǔrèn chūmiàn xiétiáo.',
      note:'由 + người + V = do ai làm (ôn HSK 5).',pair:'由'}
   ]},

  {n:27,zh:'柔和',py:'róuhé',pos:'Tính từ',vn:'dịu dàng, êm dịu, nhẹ nhàng',hv:'nhu hòa',em:'🕯️',lesson:1,
   explain:['Tính từ: mềm mại, dịu, không gây cảm giác mạnh — dùng cho ánh sáng, màu sắc, âm thanh, giọng nói, đường nét, tính cách.','Trái nghĩa: 刺眼 (chói mắt), 生硬 (cứng nhắc), 强烈 (mạnh).'],
   usage:'光线 / 颜色 / 声音 / 语气 + 柔和; 柔和的 + 灯光 / 音乐; 变得柔和.',
   collo:['柔和的灯光','颜色柔和','语气柔和','柔和的音乐'],
   ex_zh:'房间里的灯光很柔和，让人感到很放松。',ex_py:'Fángjiān li de dēngguāng hěn róuhé, ràng rén gǎndào hěn fàngsōng.',ex_vn:'Ánh đèn trong phòng rất dịu, khiến người ta thấy thư thái.',
   exList:[
     {zh:'房间里的灯光很柔和，让人感到很放松。',py:'Fángjiān li de dēngguāng hěn róuhé, ràng rén gǎndào hěn fàngsōng.',vn:'Ánh đèn trong phòng rất dịu, khiến người ta thấy thư thái.'},
     {zh:'傍晚的阳光变得柔和起来，我们出去散散步吧。',py:'Bàngwǎn de yángguāng biàn de róuhé qǐlái, wǒmen chūqù sànsan bù ba.',vn:'Nắng chiều đã dịu đi, chúng mình ra ngoài đi dạo chút đi.'},
     {zh:'老师的语气很柔和，一点儿也不严厉。',py:'Lǎoshī de yǔqì hěn róuhé, yìdiǎnr yě bù yánlì.',vn:'Giọng cô giáo rất nhẹ nhàng, chẳng nghiêm khắc chút nào.'}
   ],
   colloFull:[
     {zh:'柔和的灯光',py:'róuhé de dēngguāng',vn:'ánh đèn dịu nhẹ'},
     {zh:'颜色柔和',py:'yánsè róuhé',vn:'màu sắc dịu'},
     {zh:'语气柔和',py:'yǔqì róuhé',vn:'giọng điệu nhẹ nhàng'},
     {zh:'柔和的音乐',py:'róuhé de yīnyuè',vn:'bản nhạc êm dịu'},
     {zh:'线条柔和',py:'xiàntiáo róuhé',vn:'đường nét mềm mại'}
   ],
   patterns:[
     {s:'N (光线 / 声音 / 语气) + 柔和',m:'… dịu dàng, êm dịu'},
     {s:'变得 + 柔和 (起来)',m:'Trở nên dịu đi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ nói năng luôn nhẹ nhàng, chưa từng lớn tiếng với chúng tôi.',answer:'妈妈说话一向很柔和，从来没对我们大声嚷过。',answerPy:'Māma shuōhuà yíxiàng hěn róuhé, cónglái méi duì wǒmen dàshēng rǎngguo.',
      note:'一向 = xưa nay (ôn HSK 6 bài 13); 嚷 ôn HSK 6 bài 1; 从来没 + V过.',pair:'一向'},
     {promptLang:'vi',prompt:'Hôm nay trời nhiều mây, ánh nắng không chói mà rất dịu.',answer:'今天多云，阳光不刺眼，而是很柔和。',answerPy:'Jīntiān duō yún, yángguāng bú cìyǎn, ér shì hěn róuhé.',
      note:'不是 / 不……，而是…… = không… mà là… (ôn HSK 5).',pair:'不……而是……'}
   ]},

  {n:28,zh:'分量',py:'fènliàng',pos:'Danh từ',vn:'trọng lượng, sức nặng; tầm quan trọng',hv:'phân lượng',em:'⚖️',lesson:1,
   explain:['Danh từ: trọng lượng, độ nặng của vật (分量很重, 分量不足 = thiếu cân). 分 đọc fèn.','Nghĩa bóng: sức nặng, tầm quan trọng của lời nói, con người (他的话很有分量).'],
   usage:'……的分量; 分量 + 重 / 轻 / 足 / 不够; 有分量; 禁不住 / 承担不起 + ……的分量.',
   collo:['瓜的分量','分量很重','很有分量','分量不足'],
   ex_zh:'瓜越长越长，分量也越来越重。',ex_py:'Guā yuè zhǎng yuè cháng, fènliàng yě yuè lái yuè zhòng.',ex_vn:'Quả mướp càng lớn càng dài, trọng lượng cũng ngày một nặng thêm.',
   exList:[
     {zh:'瓜越长越长，分量也越来越重。',py:'Guā yuè zhǎng yuè cháng, fènliàng yě yuè lái yuè zhòng.',vn:'Quả mướp càng lớn càng dài, trọng lượng cũng ngày một nặng thêm.'},
     {zh:'这家饭馆的菜不但好吃，而且分量很足。',py:'Zhè jiā fànguǎn de cài búdàn hǎochī, érqiě fènliàng hěn zú.',vn:'Món ăn quán này không những ngon mà suất còn rất đầy đặn.'},
     {zh:'爷爷的话在我们家很有分量，大家都听他的。',py:'Yéye de huà zài wǒmen jiā hěn yǒu fènliàng, dàjiā dōu tīng tā de.',vn:'Lời ông nội trong nhà tôi rất có trọng lượng, ai cũng nghe theo ông.'}
   ],
   colloFull:[
     {zh:'瓜的分量',py:'guā de fènliàng',vn:'trọng lượng của quả'},
     {zh:'分量很重',py:'fènliàng hěn zhòng',vn:'rất nặng'},
     {zh:'很有分量',py:'hěn yǒu fènliàng',vn:'rất có trọng lượng'},
     {zh:'分量不足',py:'fènliàng bù zú',vn:'thiếu cân, không đủ lượng'},
     {zh:'禁不住……的分量',py:'jīn bu zhù……de fènliàng',vn:'không chịu nổi sức nặng của …'}
   ],
   patterns:[
     {s:'……的分量 + 重 / 轻 / 足',m:'Trọng lượng của … nặng / nhẹ / đủ'},
     {s:'(说话) + 有 / 没有 + 分量',m:'(Lời nói) có / không có trọng lượng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy anh ấy ít nói, nhưng mỗi câu anh nói ra đều rất có trọng lượng.',answer:'他虽然话不多，但说出的每一句都很有分量。',answerPy:'Tā suīrán huà bù duō, dàn shuōchū de měi yí jù dōu hěn yǒu fènliàng.',
      note:'每一 + LT + 都…… = mỗi… đều… (ôn HSK 3–4); 分量 nghĩa bóng.',pair:'每……都……'},
     {promptLang:'vi',prompt:'Cái cọng mảnh như vậy làm sao chịu nổi sức nặng của hai quả mướp to?',answer:'这么细的茎怎么禁得住两个大瓜的分量呢？',answerPy:'Zhème xì de jīng zěnme jīn de zhù liǎng ge dà guā de fènliàng ne?',
      note:'禁得住 / 禁不住 = chịu nổi / không chịu nổi (bổ ngữ khả năng, ôn HSK 5); 禁 đọc jīn.',pair:'补语 khả năng'}
   ]},

  {n:29,zh:'悬挂',py:'xuánguà',pos:'Động từ',vn:'treo, treo lơ lửng',hv:'huyền quải',em:'🏮',lesson:1,
   explain:['Động từ: treo lơ lửng trên cao, không có gì đỡ bên dưới: 悬挂在空中.','Văn viết, trang trọng hơn 挂; hay dùng cho cờ, đèn lồng, biển hiệu, tranh: 悬挂国旗.'],
   usage:'悬挂在 + nơi chốn / 空中; 悬挂 + 国旗 / 灯笼 / 标语; nơi chốn + 悬挂着 + N.',
   collo:['悬挂在空中','悬挂国旗','悬挂着灯笼','高高悬挂'],
   ex_zh:'它悬挂在空中，细细的瓜茎好像负担不起瓜的重量。',ex_py:'Tā xuánguà zài kōngzhōng, xìxì de guājīng hǎoxiàng fùdān bu qǐ guā de zhòngliàng.',ex_vn:'Nó treo lơ lửng giữa không trung, thân dây mảnh mai dường như không gánh nổi sức nặng của quả.',
   exList:[
     {zh:'它悬挂在空中，细细的瓜茎好像负担不起瓜的重量。',py:'Tā xuánguà zài kōngzhōng, xìxì de guājīng hǎoxiàng fùdān bu qǐ guā de zhòngliàng.',vn:'Nó treo lơ lửng giữa không trung, thân dây mảnh mai dường như không gánh nổi sức nặng của quả.'},
     {zh:'节日期间，街道两旁悬挂着一排排红灯笼。',py:'Jiérì qījiān, jiēdào liǎng páng xuánguàzhe yì páipái hóng dēnglong.',vn:'Trong dịp lễ, hai bên đường treo hàng hàng đèn lồng đỏ.'},
     {zh:'一轮明月高高地悬挂在夜空中。',py:'Yì lún míngyuè gāogāo de xuánguà zài yèkōng zhōng.',vn:'Vầng trăng sáng treo cao trên bầu trời đêm.'}
   ],
   colloFull:[
     {zh:'悬挂在空中',py:'xuánguà zài kōngzhōng',vn:'treo lơ lửng giữa không trung'},
     {zh:'悬挂国旗',py:'xuánguà guóqí',vn:'treo quốc kỳ'},
     {zh:'悬挂着灯笼',py:'xuánguàzhe dēnglong',vn:'treo đèn lồng'},
     {zh:'高高悬挂',py:'gāogāo xuánguà',vn:'treo cao'},
     {zh:'悬挂标语',py:'xuánguà biāoyǔ',vn:'treo khẩu hiệu'}
   ],
   patterns:[
     {s:'N + 悬挂在 + nơi chốn',m:'… treo ở …'},
     {s:'Nơi chốn + 悬挂着 + N',m:'Ở … có treo …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngày Quốc khánh, nhà nào cũng treo quốc kỳ trước cửa.',answer:'国庆节那天，家家户户门前都悬挂着国旗。',answerPy:'Guóqìngjié nà tiān, jiājiā-hùhù mén qián dōu xuánguàzhe guóqí.',
      note:'家家户户 = nhà nhà; câu tồn hiện: nơi chốn + V着 + N (ôn HSK 4).',pair:'存现句'},
     {promptLang:'vi',prompt:'Nhìn quả mướp treo lơ lửng giữa không trung, lòng tôi cũng nặng trĩu theo.',answer:'看着悬挂在空中的丝瓜，我的心也跟着沉重起来。',answerPy:'Kànzhe xuánguà zài kōngzhōng de sīguā, wǒ de xīn yě gēnzhe chénzhòng qǐlái.',
      note:'V着 + tân ngữ, câu chính… (hai hành động song song); Adj + 起来 = bắt đầu trở nên.',pair:'Adj + 起来'}
   ]},

  {n:30,zh:'负担',py:'fùdān',pos:'Động từ',vn:'gánh vác, chịu, đảm nhận',hv:'phụ đảm',em:'🏋️',lesson:1,
   explain:['Động từ: gánh, chịu (trách nhiệm, công việc, chi phí): 负担学费, 负担不起. Hay dùng dạng bổ ngữ khả năng 负担得起 / 负担不起.','Danh từ: gánh nặng (tinh thần / kinh tế): 减轻负担, 思想负担, 家庭负担很重.'],
   usage:'负担 + 费用 / 学费 / 责任; 负担得起 / 负担不起; 减轻 / 加重 + 负担; 成为……的负担.',
   collo:['负担不起','负担学费','减轻负担','心理负担'],
   ex_zh:'由于负担不起学费，孩子只好退学去打工。',ex_py:'Yóuyú fùdān bu qǐ xuéfèi, háizi zhǐhǎo tuìxué qù dǎgōng.',ex_vn:'Vì không kham nổi học phí, đứa trẻ đành phải bỏ học đi làm thuê.',
   exList:[
     {zh:'由于负担不起学费，孩子只好退学去打工。',py:'Yóuyú fùdān bu qǐ xuéfèi, háizi zhǐhǎo tuìxué qù dǎgōng.',vn:'Vì không kham nổi học phí, đứa trẻ đành phải bỏ học đi làm thuê.'},
     {zh:'细细的瓜茎好像负担不起瓜的重量，时刻都要坠落下来。',py:'Xìxì de guājīng hǎoxiàng fùdān bu qǐ guā de zhòngliàng, shíkè dōu yào zhuìluò xiàlái.',vn:'Thân dây mảnh mai dường như không gánh nổi sức nặng của quả, lúc nào cũng như sắp rơi xuống.'},
     {zh:'为了减轻父母的负担，他暑假去做了兼职。',py:'Wèile jiǎnqīng fùmǔ de fùdān, tā shǔjià qù zuòle jiānzhí.',vn:'Để giảm gánh nặng cho bố mẹ, kỳ nghỉ hè cậu ấy đi làm thêm.'}
   ],
   colloFull:[
     {zh:'负担不起',py:'fùdān bu qǐ',vn:'không kham nổi'},
     {zh:'负担学费',py:'fùdān xuéfèi',vn:'chi trả học phí'},
     {zh:'减轻负担',py:'jiǎnqīng fùdān',vn:'giảm gánh nặng'},
     {zh:'心理负担',py:'xīnlǐ fùdān',vn:'gánh nặng tâm lý'},
     {zh:'家庭负担很重',py:'jiātíng fùdān hěn zhòng',vn:'gánh nặng gia đình rất lớn'}
   ],
   patterns:[
     {s:'负担得起 / 负担不起 + N',m:'Kham nổi / không kham nổi …'},
     {s:'减轻 / 加重 + ……的负担',m:'Giảm / tăng gánh nặng của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn nhà này đắt như vậy, một nhân viên bình thường như tôi làm sao kham nổi?',answer:'这套房子这么贵，我一个普通职员怎么负担得起？',answerPy:'Zhè tào fángzi zhème guì, wǒ yí ge pǔtōng zhíyuán zěnme fùdān de qǐ?',
      note:'Câu hỏi tu từ 怎么 + V得起? = làm sao mà… nổi (ý: không thể).',pair:'反问句'},
     {promptLang:'vi',prompt:'Đừng để con cái trở thành gánh nặng tâm lý của mình, cũng đừng để mình thành gánh nặng của con.',answer:'别让孩子成为自己的心理负担，也别让自己成为孩子的负担。',answerPy:'Bié ràng háizi chéngwéi zìjǐ de xīnlǐ fùdān, yě bié ràng zìjǐ chéngwéi háizi de fùdān.',
      note:'让 + người + 成为…… (câu kiêm ngữ, ôn HSK 4).',pair:'让'}
   ]},

  {n:31,zh:'坠',py:'zhuì',pos:'Động từ',vn:'rơi, rớt (từ trên cao xuống); trĩu xuống',hv:'trụy',em:'⬇️',lesson:1,
   explain:['Động từ: rơi xuống từ trên cao: 坠落, 坠地, 飞机坠毁. Văn viết hơn 掉.','Còn nghĩa: (vật nặng) kéo trĩu xuống: 果子把树枝坠弯了. Danh từ: vật treo lủng lẳng (耳坠 = khuyên tai).'],
   usage:'坠落 / 坠下来 / 坠地; 坠 + 入 (坠入爱河 = rơi vào lưới tình); 把……坠弯了.',
   collo:['坠落下来','坠落到地上','坠入爱河','坠弯了树枝'],
   ex_zh:'总有一天，瓜茎会禁不住瓜的分量，连同上面的两个大瓜一起坠落到地上。',ex_py:'Zǒng yǒu yì tiān, guājīng huì jīn bu zhù guā de fènliàng, liántóng shàngmiàn de liǎng ge dà guā yìqǐ zhuìluò dào dì shang.',ex_vn:'Rồi sẽ có một ngày thân dây không chịu nổi sức nặng của quả, kéo theo cả hai quả to phía trên cùng rơi xuống đất.',
   exList:[
     {zh:'总有一天，瓜茎会禁不住瓜的分量，连同上面的两个大瓜一起坠落到地上。',py:'Zǒng yǒu yì tiān, guājīng huì jīn bu zhù guā de fènliàng, liántóng shàngmiàn de liǎng ge dà guā yìqǐ zhuìluò dào dì shang.',vn:'Rồi sẽ có một ngày thân dây không chịu nổi sức nặng của quả, kéo theo cả hai quả to phía trên cùng rơi xuống đất.'},
     {zh:'树上的苹果太多了，把树枝都坠弯了。',py:'Shù shang de píngguǒ tài duō le, bǎ shùzhī dōu zhuìwān le.',vn:'Táo trên cây nhiều quá, làm cành cây trĩu cong cả xuống.'},
     {zh:'一颗流星从夜空中坠落下来。',py:'Yì kē liúxīng cóng yèkōng zhōng zhuìluò xiàlái.',vn:'Một ngôi sao băng rơi xuống từ bầu trời đêm.'}
   ],
   colloFull:[
     {zh:'坠落下来',py:'zhuìluò xiàlái',vn:'rơi xuống'},
     {zh:'坠落到地上',py:'zhuìluò dào dì shang',vn:'rơi xuống đất'},
     {zh:'坠入爱河',py:'zhuìrù àihé',vn:'rơi vào lưới tình'},
     {zh:'坠弯了树枝',py:'zhuìwānle shùzhī',vn:'làm trĩu cong cành cây'},
     {zh:'飞机坠毁',py:'fēijī zhuìhuǐ',vn:'máy bay rơi'}
   ],
   patterns:[
     {s:'N + 坠落 (下来 / 到……)',m:'… rơi xuống (…)'},
     {s:'把 + N + 坠 + 弯 / 断',m:'Kéo trĩu làm cong / gãy …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi cứ lo quả mướp đó sẽ rơi xuống, không ngờ nó lại nằm yên trên bệ cửa sổ.',answer:'我一直担心那个瓜会坠落下来，不料它却安安稳稳地躺在了窗台上。',answerPy:'Wǒ yìzhí dānxīn nàge guā huì zhuìluò xiàlái, búliào tā què ān\'ānwěnwěn de tǎng zài le chuāngtái shang.',
      note:'不料 = không ngờ (ôn HSK 6 bài 4); lặp tính từ AABB 安安稳稳 làm trạng ngữ.',pair:'不料'},
     {promptLang:'vi',prompt:'Mùa thu đến, những chùm quả trĩu nặng làm cong cả cành cây.',answer:'秋天到了，一串串果子把树枝坠得弯弯的。',answerPy:'Qiūtiān dào le, yí chuànchuàn guǒzi bǎ shùzhī zhuì de wānwān de.',
      note:'把 + N + V + 得 + bổ ngữ trạng thái; 一串串 lặp số lượng từ (ôn bài 14).',pair:'把字句'}
   ]},

  {n:32,zh:'沉重',py:'chénzhòng',pos:'Tính từ',vn:'nặng nề, nặng trĩu',hv:'trầm trọng',em:'😔',lesson:1,
   explain:['Tính từ: rất nặng (vật): 沉重的行李; nghĩa bóng: (tâm trạng, gánh nặng, cái giá) nặng nề, nặng trĩu: 心情沉重, 沉重的打击.','BẪY Hán–Việt: "trầm trọng" tiếng Việt = rất nghiêm trọng (bệnh trầm trọng → 严重); 沉重 tiếng Trung = NẶNG NỀ.'],
   usage:'心情 / 脚步 / 负担 + 沉重; 沉重的 + 打击 / 代价 / 心情; 变得沉重起来.',
   collo:['心情沉重','沉重的打击','沉重的负担','脚步沉重'],
   ex_zh:'我的心也变得沉重起来。',ex_py:'Wǒ de xīn yě biàn de chénzhòng qǐlái.',ex_vn:'Lòng tôi cũng trở nên nặng trĩu.',
   exList:[
     {zh:'我的心也变得沉重起来。',py:'Wǒ de xīn yě biàn de chénzhòng qǐlái.',vn:'Lòng tôi cũng trở nên nặng trĩu.'},
     {zh:'听到这个消息，我的心沉重起来。',py:'Tīngdào zhège xiāoxi, wǒ de xīn chénzhòng qǐlái.',vn:'Nghe tin này, lòng tôi nặng trĩu.'},
     {zh:'考试失败对他来说是一个沉重的打击。',py:'Kǎoshì shībài duì tā lái shuō shì yí ge chénzhòng de dǎjī.',vn:'Thi trượt đối với cậu ấy là một đòn giáng nặng nề.'}
   ],
   colloFull:[
     {zh:'心情沉重',py:'xīnqíng chénzhòng',vn:'tâm trạng nặng nề'},
     {zh:'沉重的打击',py:'chénzhòng de dǎjī',vn:'đòn giáng nặng nề'},
     {zh:'沉重的负担',py:'chénzhòng de fùdān',vn:'gánh nặng nặng nề'},
     {zh:'脚步沉重',py:'jiǎobù chénzhòng',vn:'bước chân nặng nề'},
     {zh:'沉重的代价',py:'chénzhòng de dàijià',vn:'cái giá đắt'}
   ],
   patterns:[
     {s:'(心情 / 脚步) + 沉重 (起来)',m:'(Tâm trạng / bước chân) nặng nề (dần)'},
     {s:'沉重的 + 打击 / 负担 / 代价',m:'Đòn / gánh / cái giá nặng nề'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhìn bảng điểm, cậu ấy lê bước chân nặng nề về nhà.',answer:'看着成绩单，他迈着沉重的脚步回了家。',answerPy:'Kànzhe chéngjìdān, tā màizhe chénzhòng de jiǎobù huíle jiā.',
      note:'V1着 + V2: hành động kèm theo (迈着脚步回家) (ôn HSK 4).',pair:'V1着V2'},
     {promptLang:'vi',prompt:'Vì mải chơi mà bỏ bê việc học, cậu ấy đã phải trả một cái giá đắt.',answer:'由于贪玩耽误了学习，他付出了沉重的代价。',answerPy:'Yóuyú tānwán dānwule xuéxí, tā fùchūle chénzhòng de dàijià.',
      note:'由于…… nêu nguyên nhân (ôn HSK 4); 付出代价 = trả giá.',pair:'由于'}
   ]},

  {n:33,zh:'节制',py:'jiézhì',pos:'Động từ',vn:'hạn chế, tiết chế, có chừng mực',hv:'tiết chế',em:'🚦',lesson:1,
   explain:['Động từ: hạn chế, khống chế cho vừa phải, không để quá mức: 节制饮食, 节制自己.','Danh từ / tính từ: sự chừng mực — 有节制 (có chừng mực), 没有节制, 无节制地 (một cách vô độ).'],
   usage:'节制 + 饮食 / 欲望 / 自己; 有 / 没有 + 节制; 无节制地 + V.',
   collo:['很有节制','节制饮食','无节制地','加以节制'],
   ex_zh:'最初长出来的瓜好像很有节制，长到一定程度就不长了。',ex_py:'Zuìchū zhǎng chūlái de guā hǎoxiàng hěn yǒu jiézhì, zhǎngdào yídìng chéngdù jiù bù zhǎng le.',ex_vn:'Quả mọc ra đầu tiên dường như rất biết chừng mực, lớn đến một mức nhất định thì thôi không lớn nữa.',
   exList:[
     {zh:'最初长出来的瓜好像很有节制，长到一定程度就不长了。',py:'Zuìchū zhǎng chūlái de guā hǎoxiàng hěn yǒu jiézhì, zhǎngdào yídìng chéngdù jiù bù zhǎng le.',vn:'Quả mọc ra đầu tiên dường như rất biết chừng mực, lớn đến một mức nhất định thì thôi không lớn nữa.'},
     {zh:'医生说他的病跟饮食没有节制有关系。',py:'Yīshēng shuō tā de bìng gēn yǐnshí méiyǒu jiézhì yǒu guānxi.',vn:'Bác sĩ nói bệnh của ông ấy có liên quan đến việc ăn uống không có chừng mực.'},
     {zh:'玩游戏要有节制，不能影响学习和休息。',py:'Wán yóuxì yào yǒu jiézhì, bù néng yǐngxiǎng xuéxí hé xiūxi.',vn:'Chơi game phải có chừng mực, không được ảnh hưởng đến học tập và nghỉ ngơi.'}
   ],
   colloFull:[
     {zh:'很有节制',py:'hěn yǒu jiézhì',vn:'rất có chừng mực'},
     {zh:'节制饮食',py:'jiézhì yǐnshí',vn:'tiết chế ăn uống'},
     {zh:'无节制地',py:'wú jiézhì de',vn:'một cách vô độ'},
     {zh:'加以节制',py:'jiāyǐ jiézhì',vn:'hạn chế lại'},
     {zh:'节制自己',py:'jiézhì zìjǐ',vn:'tự kiềm chế'}
   ],
   patterns:[
     {s:'(V) + 要 + 有节制',m:'(Làm gì) phải có chừng mực'},
     {s:'节制 + 饮食 / 欲望 / 自己',m:'Tiết chế ăn uống / ham muốn / bản thân'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu tiêu tiền không có chừng mực, dù thu nhập cao đến mấy cũng không đủ dùng.',answer:'花钱如果没有节制，收入再高也不够用。',answerPy:'Huā qián rúguǒ méiyǒu jiézhì, shōurù zài gāo yě bú gòu yòng.',
      note:'再 + Adj + 也…… = dù… đến mấy cũng… (ôn HSK 5).',pair:'再……也……'},
     {promptLang:'vi',prompt:'Con người khai thác tài nguyên thiên nhiên một cách vô độ, dẫn đến môi trường ngày càng xấu đi.',answer:'人类无节制地开发自然资源，致使环境日益恶化。',answerPy:'Rénlèi wú jiézhì de kāifā zìrán zīyuán, zhìshǐ huánjìng rìyì èhuà.',
      note:'致使 + kết quả xấu (ôn HSK 6 bài 7); 日益恶化 = ngày càng xấu đi.',pair:'致使'}
   ]},

  {n:34,zh:'辫子',py:'biànzi',pos:'Danh từ',vn:'bím tóc, đuôi sam',hv:'biện tử',em:'👧',lesson:1,
   explain:['Danh từ: bím tóc — tóc tết thành dải: 梳辫子, 扎辫子, 两条辫子.','Nghĩa bóng (khẩu ngữ): 抓辫子 = nắm thóp, bắt lỗi người khác.'],
   usage:'一条 / 两根 + 辫子; 梳 / 扎 / 编 + 辫子; 小姑娘的辫子; 抓 (住) + ……的辫子.',
   collo:['梳辫子','两条辫子','小姑娘的辫子','抓辫子'],
   ex_zh:'这两个瓜开始只有小姑娘的辫子一般粗细。',ex_py:'Zhè liǎng ge guā kāishǐ zhǐyǒu xiǎo gūniang de biànzi yìbān cūxì.',ex_vn:'Hai quả này lúc đầu chỉ to bằng bím tóc của cô bé.',
   exList:[
     {zh:'这两个瓜开始只有小姑娘的辫子一般粗细。',py:'Zhè liǎng ge guā kāishǐ zhǐyǒu xiǎo gūniang de biànzi yìbān cūxì.',vn:'Hai quả này lúc đầu chỉ to bằng bím tóc của cô bé.'},
     {zh:'每天早上，妈妈都给妹妹梳两条小辫子。',py:'Měi tiān zǎoshang, māma dōu gěi mèimei shū liǎng tiáo xiǎo biànzi.',vn:'Sáng nào mẹ cũng tết cho em gái hai bím tóc nhỏ.'},
     {zh:'他说话很小心，生怕被人抓住辫子。',py:'Tā shuōhuà hěn xiǎoxīn, shēngpà bèi rén zhuāzhù biànzi.',vn:'Anh ta ăn nói rất cẩn thận, chỉ sợ bị người khác nắm thóp.'}
   ],
   colloFull:[
     {zh:'梳辫子',py:'shū biànzi',vn:'tết tóc'},
     {zh:'两条辫子',py:'liǎng tiáo biànzi',vn:'hai bím tóc'},
     {zh:'小姑娘的辫子',py:'xiǎo gūniang de biànzi',vn:'bím tóc của cô bé'},
     {zh:'抓辫子',py:'zhuā biànzi',vn:'nắm thóp, bắt lỗi'},
     {zh:'长长的辫子',py:'chángcháng de biànzi',vn:'bím tóc dài'}
   ],
   patterns:[
     {s:'梳 / 扎 + (一条 / 两条) + 辫子',m:'Tết … bím tóc'},
     {s:'A + 只有 + B + 一般粗细',m:'A chỉ to cỡ B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ chị tôi để một bím tóc dài, đến nay nghĩ lại vẫn thấy rất đẹp.',answer:'姐姐小时候留着一条长辫子，至今想起来还觉得很美。',answerPy:'Jiějie xiǎoshíhou liúzhe yì tiáo cháng biànzi, zhìjīn xiǎng qǐlái hái juéde hěn měi.',
      note:'V + 起来 = khi (bắt đầu) làm gì (想起来); 至今 = đến nay (ôn HSK 5).',pair:'V + 起来'},
     {promptLang:'vi',prompt:'Quả mướp non ban đầu chỉ to bằng bím tóc, chẳng bao lâu đã to như cánh tay.',answer:'小丝瓜开始只有辫子一般粗，不久就长得如臂膀一般粗了。',answerPy:'Xiǎo sīguā kāishǐ zhǐyǒu biànzi yìbān cū, bùjiǔ jiù zhǎng de rú bìbǎng yìbān cū le.',
      note:'A 有 B 一般 + Adj / 如 B 一般 + Adj = A … bằng / như B (so sánh ngang bằng, văn viết).',pair:'……一般 + Adj'}
   ]},

  {n:35,zh:'臂',py:'bì',pos:'Danh từ',vn:'cánh tay',hv:'tý',em:'💪',lesson:1,
   explain:['Danh từ: cánh tay (phần từ vai đến cổ tay): 手臂, 臂膀, 双臂. Ít đứng một mình, thường ở dạng từ ghép.','Nghĩa bóng: người giúp đỡ đắc lực (左膀右臂 = cánh tay phải); 一臂之力 = một tay giúp sức.'],
   usage:'手臂 / 臂膀 / 双臂 / 左臂; 张开双臂; 助……一臂之力; 左膀右臂.',
   collo:['小孩臂膀','张开双臂','一臂之力','左膀右臂'],
   ex_zh:'不久就长得如小孩臂膀一般粗了。',ex_py:'Bùjiǔ jiù zhǎng de rú xiǎohái bìbǎng yìbān cū le.',ex_vn:'Chẳng bao lâu đã lớn to như cánh tay đứa trẻ.',
   exList:[
     {zh:'不久就长得如小孩臂膀一般粗了。',py:'Bùjiǔ jiù zhǎng de rú xiǎohái bìbǎng yìbān cū le.',vn:'Chẳng bao lâu đã lớn to như cánh tay đứa trẻ.'},
     {zh:'看到女儿回来，妈妈张开双臂迎了上去。',py:'Kàndào nǚ\'ér huílái, māma zhāngkāi shuāng bì yíngle shàngqù.',vn:'Thấy con gái về, mẹ dang rộng hai tay đón lấy.'},
     {zh:'你有什么困难尽管说，我一定助你一臂之力。',py:'Nǐ yǒu shénme kùnnan jǐnguǎn shuō, wǒ yídìng zhù nǐ yí bì zhī lì.',vn:'Cậu có khó khăn gì cứ nói, tớ nhất định giúp cậu một tay.'}
   ],
   colloFull:[
     {zh:'小孩臂膀',py:'xiǎohái bìbǎng',vn:'cánh tay trẻ con'},
     {zh:'张开双臂',py:'zhāngkāi shuāng bì',vn:'dang rộng hai tay'},
     {zh:'一臂之力',py:'yí bì zhī lì',vn:'một tay giúp sức'},
     {zh:'左膀右臂',py:'zuǒbǎng-yòubì',vn:'cánh tay phải (người trợ thủ đắc lực)'},
     {zh:'手臂受伤',py:'shǒubì shòushāng',vn:'bị thương ở tay'}
   ],
   patterns:[
     {s:'张开 / 伸出 + 双臂 / 手臂',m:'Dang / đưa cánh tay ra'},
     {s:'助 + 人 + 一臂之力',m:'Giúp ai một tay'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy là cánh tay phải của giám đốc, việc gì cũng giao cho anh ấy làm.',answer:'他是经理的左膀右臂，什么事都交给他去做。',answerPy:'Tā shì jīnglǐ de zuǒbǎng-yòubì, shénme shì dōu jiāo gěi tā qù zuò.',
      note:'什么 + N + 都…… = bất cứ… đều… (đại từ nghi vấn phiếm chỉ, ôn HSK 4).',pair:'什么……都……'},
     {promptLang:'vi',prompt:'Nếu cần giúp đỡ thì cứ nói, tôi sẵn lòng giúp một tay.',answer:'要是需要帮忙，你尽管开口，我愿意助你一臂之力。',answerPy:'Yàoshi xūyào bāngmáng, nǐ jǐnguǎn kāikǒu, wǒ yuànyì zhù nǐ yí bì zhī lì.',
      note:'尽管 + V = cứ việc (phó từ, ôn HSK 5).',pair:'尽管'}
   ]},

  {n:36,zh:'呵',py:'hē',pos:'Thán từ',vn:'a, ô, ồ, úi chà (tỏ ý kinh ngạc)',hv:'ha',em:'😮',lesson:1,
   explain:['Thán từ: biểu thị sự ngạc nhiên, kinh ngạc (đọc hē): 呵，这么大!','Còn đọc hē trong 呵护 (che chở), 呵斥 (quát mắng); 呵呵 (hēhē) = tiếng cười khà khà.'],
   usage:'Đứng đầu câu, tách bằng dấu phẩy: 呵，……! Thường đi với câu cảm thán, số lượng / mức độ ngoài dự đoán.',
   collo:['呵，真大','呵呵地笑','呵护','呵，原来是你'],
   ex_zh:'呵，这两个瓜加起来恐怕有五六斤了。',ex_py:'Hē, zhè liǎng ge guā jiā qǐlái kǒngpà yǒu wǔ-liù jīn le.',ex_vn:'Úi chà, hai quả này cộng lại chắc phải năm, sáu cân rồi.',
   exList:[
     {zh:'呵，这两个瓜加起来恐怕有五六斤了。',py:'Hē, zhè liǎng ge guā jiā qǐlái kǒngpà yǒu wǔ-liù jīn le.',vn:'Úi chà, hai quả này cộng lại chắc phải năm, sáu cân rồi.'},
     {zh:'呵，才一个星期不见，你又长高了！',py:'Hē, cái yí ge xīngqī bú jiàn, nǐ yòu zhǎnggāo le!',vn:'Ô, mới một tuần không gặp mà cháu đã cao thêm rồi!'},
     {zh:'爷爷看着满院子的丝瓜，呵呵地笑了。',py:'Yéye kànzhe mǎn yuànzi de sīguā, hēhē de xiào le.',vn:'Ông nhìn khắp sân đầy mướp, cười khà khà.'}
   ],
   colloFull:[
     {zh:'呵，真大',py:'hē, zhēn dà',vn:'úi chà, to thật'},
     {zh:'呵呵地笑',py:'hēhē de xiào',vn:'cười khà khà'},
     {zh:'呵护',py:'hēhù',vn:'che chở, nâng niu'},
     {zh:'呵，原来是你',py:'hē, yuánlái shì nǐ',vn:'ồ, hóa ra là cậu'},
     {zh:'精心呵护',py:'jīngxīn hēhù',vn:'chăm chút nâng niu'}
   ],
   patterns:[
     {s:'呵，+ câu cảm thán',m:'Úi chà / ô, … (ngạc nhiên)'},
     {s:'呵呵 (地) + 笑',m:'Cười khà khà'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ồ, hóa ra quả mướp ấy đã tự tìm được chỗ đặt mình rồi!',answer:'呵，原来那个丝瓜自己找到了落脚的地方！',answerPy:'Hē, yuánlái nàge sīguā zìjǐ zhǎodàole luòjiǎo de dìfang!',
      note:'原来 = hóa ra (phát hiện sự thật, ôn HSK 4); 落脚 = đặt chân, chỗ dừng.',pair:'原来'},
     {promptLang:'vi',prompt:'Úi chà, nhiều sách thế này, e rằng cả tháng cũng đọc không hết.',answer:'呵，这么多书，恐怕一个月也看不完。',answerPy:'Hē, zhème duō shū, kǒngpà yí ge yuè yě kàn bu wán.',
      note:'恐怕 = e rằng, chắc (ôn HSK 4); bổ ngữ khả năng 看不完.',pair:'恐怕'}
   ]},

  {n:37,zh:'与日俱增',py:'yǔrì-jùzēng',pos:'Thành ngữ',vn:'tăng lên từng ngày, ngày càng tăng',hv:'dữ nhật câu tăng',em:'📈',lesson:1,
   explain:['Thành ngữ: 与 = cùng với, 日 = ngày, 俱 = đều, cùng → cùng với ngày tháng mà không ngừng tăng lên.','Thường làm vị ngữ ở cuối câu; chủ ngữ là thứ trừu tượng: 担心, 思念, 感情, 压力, 人数.'],
   usage:'N (担心 / 思念 / 压力 / 感情) + 与日俱增. Không thêm 很 / 越来越 trước (vì bản thân đã có nghĩa "ngày càng").',
   collo:['担心与日俱增','思念与日俱增','压力与日俱增','与日俱增的感情'],
   ex_zh:'那一根细细的茎怎么承担得住呢？我的担心与日俱增。',ex_py:'Nà yì gēn xìxì de jīng zěnme chéngdān de zhù ne? Wǒ de dānxīn yǔrì-jùzēng.',ex_vn:'Cái cọng mảnh mai ấy làm sao chịu nổi đây? Nỗi lo của tôi mỗi ngày một tăng.',
   exList:[
     {zh:'那一根细细的茎怎么承担得住呢？我的担心与日俱增。',py:'Nà yì gēn xìxì de jīng zěnme chéngdān de zhù ne? Wǒ de dānxīn yǔrì-jùzēng.',vn:'Cái cọng mảnh mai ấy làm sao chịu nổi đây? Nỗi lo của tôi mỗi ngày một tăng.'},
     {zh:'离开家乡越久，对父母的思念与日俱增。',py:'Líkāi jiāxiāng yuè jiǔ, duì fùmǔ de sīniàn yǔrì-jùzēng.',vn:'Xa quê càng lâu, nỗi nhớ bố mẹ càng tăng lên từng ngày.'},
     {zh:'高考临近，同学们的压力与日俱增。',py:'Gāokǎo línjìn, tóngxuémen de yālì yǔrì-jùzēng.',vn:'Kỳ thi đại học đến gần, áp lực của các bạn học sinh ngày một tăng.'}
   ],
   colloFull:[
     {zh:'担心与日俱增',py:'dānxīn yǔrì-jùzēng',vn:'nỗi lo ngày một tăng'},
     {zh:'思念与日俱增',py:'sīniàn yǔrì-jùzēng',vn:'nỗi nhớ tăng lên từng ngày'},
     {zh:'压力与日俱增',py:'yālì yǔrì-jùzēng',vn:'áp lực ngày càng lớn'},
     {zh:'与日俱增的感情',py:'yǔrì-jùzēng de gǎnqíng',vn:'tình cảm ngày càng sâu đậm'},
     {zh:'人数与日俱增',py:'rénshù yǔrì-jùzēng',vn:'số người ngày một đông'}
   ],
   patterns:[
     {s:'N (trừu tượng) + 与日俱增',m:'… tăng lên từng ngày'},
     {s:'与日俱增的 + N',m:'… ngày một lớn / sâu đậm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi bắt đầu tự trồng rau, niềm hứng thú của tôi với thực vật ngày một tăng.',answer:'自从开始自己种菜，我对植物的兴趣与日俱增。',answerPy:'Zìcóng kāishǐ zìjǐ zhòng cài, wǒ duì zhíwù de xìngqù yǔrì-jùzēng.',
      note:'对……的兴趣 = hứng thú với…; 与日俱增 không thêm 越来越 phía trước.',pair:'对……'},
     {promptLang:'vi',prompt:'Tình bạn của hai người ngày càng sâu đậm, đến nỗi chẳng giấu nhau điều gì.',answer:'两个人的友谊与日俱增，以至于什么话都愿意跟对方说。',answerPy:'Liǎng ge rén de yǒuyì yǔrì-jùzēng, yǐzhìyú shénme huà dōu yuànyì gēn duìfāng shuō.',
      note:'以至于 = đến mức, đến nỗi (ôn HSK 6 bài 10 以至).',pair:'以至'}
   ]},

  {n:38,zh:'梢',py:'shāo',pos:'Danh từ',vn:'ngọn (cây), đầu mút, đuôi',hv:'sao',em:'🌿',lesson:1,
   explain:['Danh từ: phần đầu mút, phần ngọn thon nhỏ của vật dài: 树梢 (ngọn cây), 末梢 (đầu mút), 眉梢 (đuôi lông mày), 发梢 (ngọn tóc).','末梢 còn dùng nghĩa bóng: cuối, tận cùng (神经末梢 = đầu mút thần kinh).'],
   usage:'树梢 / 末梢 / 眉梢 / 发梢; ……末梢上; 喜上眉梢 = vui hiện lên nét mặt.',
   collo:['瓜茎末梢','树梢','喜上眉梢','发梢'],
   ex_zh:'那两个大瓜下面的瓜茎末梢上，又长出来一个瓜。',ex_py:'Nà liǎng ge dà guā xiàmiàn de guājīng mòshāo shang, yòu zhǎng chūlái yí ge guā.',ex_vn:'Trên đầu mút thân dây phía dưới hai quả to ấy, lại mọc ra thêm một quả.',
   exList:[
     {zh:'那两个大瓜下面的瓜茎末梢上，又长出来一个瓜。',py:'Nà liǎng ge dà guā xiàmiàn de guājīng mòshāo shang, yòu zhǎng chūlái yí ge guā.',vn:'Trên đầu mút thân dây phía dưới hai quả to ấy, lại mọc ra thêm một quả.'},
     {zh:'一只小鸟站在树梢上，唱个不停。',py:'Yì zhī xiǎo niǎo zhàn zài shùshāo shang, chàng ge bù tíng.',vn:'Một chú chim nhỏ đậu trên ngọn cây, hót mãi không thôi.'},
     {zh:'听说自己考上了大学，他喜上眉梢。',py:'Tīngshuō zìjǐ kǎoshangle dàxué, tā xǐshàng-méishāo.',vn:'Nghe tin mình đỗ đại học, niềm vui hiện rõ trên nét mặt cậu ấy.'}
   ],
   colloFull:[
     {zh:'瓜茎末梢',py:'guājīng mòshāo',vn:'đầu mút thân dây mướp'},
     {zh:'树梢',py:'shùshāo',vn:'ngọn cây'},
     {zh:'喜上眉梢',py:'xǐshàng-méishāo',vn:'vui hiện lên nét mặt'},
     {zh:'发梢',py:'fàshāo',vn:'ngọn tóc'},
     {zh:'神经末梢',py:'shénjīng mòshāo',vn:'đầu mút thần kinh'}
   ],
   patterns:[
     {s:'N + 梢 / 末梢 (+ 上)',m:'(Trên) ngọn, đầu mút của …'},
     {s:'喜上眉梢',m:'Niềm vui hiện rõ trên mặt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mặt trời đã lên đến ngọn cây rồi mà nó vẫn còn đang ngủ.',answer:'太阳都升到树梢上了，他还在睡觉。',answerPy:'Tàiyáng dōu shēngdào shùshāo shang le, tā hái zài shuìjiào.',
      note:'都……了，还…… = đã… rồi mà vẫn… (ôn HSK 4).',pair:'都……了'},
     {promptLang:'vi',prompt:'Cậu ấy vừa nhận được thư báo trúng tuyển, lập tức vui mừng ra mặt.',answer:'他一收到录取通知书，随即喜上眉梢。',answerPy:'Tā yì shōudào lùqǔ tōngzhīshū, suíjí xǐshàng-méishāo.',
      note:'随即 = ngay sau đó (điểm ngữ pháp 1 của bài).',pair:'随即'}
   ]},

  {n:39,zh:'垂直',py:'chuízhí',pos:'Động từ',vn:'thẳng đứng, vuông góc',hv:'thùy trực',em:'📐',lesson:1,
   explain:['Động từ: (hai đường thẳng, mặt phẳng) cắt nhau thành góc vuông: A 与 B 垂直.','Thường dùng làm trạng ngữ / định ngữ chỉ hướng thẳng đứng từ trên xuống: 垂直地吊着, 垂直下降, 垂直的墙壁.'],
   usage:'A + 与 / 和 + B + 垂直; 垂直地 + V (吊 / 落下 / 上升); 垂直 + 于…… (văn viết).',
   collo:['垂直地吊着','与地面垂直','垂直下降','垂直于'],
   ex_zh:'又长出来一个瓜，垂直地吊在那里，在风中晃来晃去。',ex_py:'Yòu zhǎng chūlái yí ge guā, chuízhí de diào zài nàlǐ, zài fēng zhōng huàng lái huàng qù.',ex_vn:'Lại mọc ra một quả nữa, treo thẳng đứng ở đó, đung đưa qua lại trong gió.',
   exList:[
     {zh:'又长出来一个瓜，垂直地吊在那里，在风中晃来晃去。',py:'Yòu zhǎng chūlái yí ge guā, chuízhí de diào zài nàlǐ, zài fēng zhōng huàng lái huàng qù.',vn:'Lại mọc ra một quả nữa, treo thẳng đứng ở đó, đung đưa qua lại trong gió.'},
     {zh:'画这条线的时候，要让它和底边垂直。',py:'Huà zhè tiáo xiàn de shíhou, yào ràng tā hé dǐbiān chuízhí.',vn:'Khi vẽ đường này, phải để nó vuông góc với cạnh đáy.'},
     {zh:'这种直升机可以垂直起飞和降落。',py:'Zhè zhǒng zhíshēngjī kěyǐ chuízhí qǐfēi hé jiàngluò.',vn:'Loại trực thăng này có thể cất cánh và hạ cánh thẳng đứng.'}
   ],
   colloFull:[
     {zh:'垂直地吊着',py:'chuízhí de diàozhe',vn:'treo thẳng đứng'},
     {zh:'与地面垂直',py:'yǔ dìmiàn chuízhí',vn:'vuông góc với mặt đất'},
     {zh:'垂直下降',py:'chuízhí xiàjiàng',vn:'rơi thẳng xuống'},
     {zh:'垂直于',py:'chuízhí yú',vn:'vuông góc với'},
     {zh:'垂直起飞',py:'chuízhí qǐfēi',vn:'cất cánh thẳng đứng'}
   ],
   patterns:[
     {s:'A + 与 / 和 + B + 垂直',m:'A vuông góc với B'},
     {s:'垂直地 + V',m:'(Làm gì) theo phương thẳng đứng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cột cờ phải dựng vuông góc với mặt đất, nếu không trông sẽ rất khó coi.',answer:'旗杆要跟地面垂直，否则看起来很难看。',answerPy:'Qígān yào gēn dìmiàn chuízhí, fǒuzé kàn qǐlái hěn nánkàn.',
      note:'否则 = nếu không thì (ôn HSK 5).',pair:'否则'},
     {promptLang:'vi',prompt:'Quả mướp treo thẳng đứng dưới giàn, trông như có thể rơi xuống bất cứ lúc nào.',answer:'丝瓜垂直地吊在架子下，好像随时都会坠落下来。',answerPy:'Sīguā chuízhí de diào zài jiàzi xià, hǎoxiàng suíshí dōu huì zhuìluò xiàlái.',
      note:'好像……似的 / 好像 + 随时都会…… = dường như bất cứ lúc nào cũng… (ôn HSK 4–5).',pair:'好像'}
   ]},

  {n:40,zh:'吊',py:'diào',pos:'Động từ',vn:'treo, móc; kéo lên (bằng dây)',hv:'điếu',em:'🪝',lesson:1,
   explain:['Động từ: treo lơ lửng (thường bằng dây, đầu trên buộc cố định): 吊在那里, 吊灯. Khẩu ngữ hơn 悬挂.','Còn nghĩa: dùng dây kéo lên / thả xuống (吊上来); 吊胃口 = khơi gợi tò mò, "câu" sự chú ý.'],
   usage:'N + 吊在 + nơi chốn; nơi chốn + 吊着 + N; 吊灯, 吊床, 吊桥; 吊 + 人的胃口.',
   collo:['吊在那里','吊着一盏灯','吊胃口','吊床'],
   ex_zh:'天花板上吊着一盏漂亮的灯。',ex_py:'Tiānhuābǎn shang diàozhe yì zhǎn piàoliang de dēng.',ex_vn:'Trên trần nhà treo một ngọn đèn rất đẹp.',
   exList:[
     {zh:'天花板上吊着一盏漂亮的灯。',py:'Tiānhuābǎn shang diàozhe yì zhǎn piàoliang de dēng.',vn:'Trên trần nhà treo một ngọn đèn rất đẹp.'},
     {zh:'那个瓜垂直地吊在那里，下面也是空的。',py:'Nàge guā chuízhí de diào zài nàlǐ, xiàmiàn yě shì kōng de.',vn:'Quả mướp đó treo thẳng đứng ở đấy, bên dưới cũng trống không.'},
     {zh:'你快说结果吧，别再吊大家的胃口了。',py:'Nǐ kuài shuō jiéguǒ ba, bié zài diào dàjiā de wèikǒu le.',vn:'Cậu nói nhanh kết quả đi, đừng bắt mọi người chờ nữa.'}
   ],
   colloFull:[
     {zh:'吊在那里',py:'diào zài nàlǐ',vn:'treo ở đó'},
     {zh:'吊着一盏灯',py:'diàozhe yì zhǎn dēng',vn:'treo một ngọn đèn'},
     {zh:'吊胃口',py:'diào wèikǒu',vn:'khơi gợi tò mò, "câu" sự chờ đợi'},
     {zh:'吊床',py:'diàochuáng',vn:'võng'},
     {zh:'吊起来',py:'diào qǐlái',vn:'treo lên, kéo lên'}
   ],
   patterns:[
     {s:'N + 吊在 + nơi chốn',m:'… treo ở …'},
     {s:'Nơi chốn + 吊着 + N',m:'Ở … có treo …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy mắc võng giữa hai cái cây, nằm lên đó ngủ trưa.',answer:'他把吊床挂在两棵树之间，躺在上面睡午觉。',answerPy:'Tā bǎ diàochuáng guà zài liǎng kē shù zhījiān, tǎng zài shàngmiàn shuì wǔjiào.',
      note:'把 + N + V + 在 + nơi chốn (ôn HSK 4).',pair:'把……V在……'},
     {promptLang:'vi',prompt:'Bộ phim này cố ý gợi tò mò khán giả, đến tập cuối mới nói ra sự thật.',answer:'这部电视剧故意吊观众的胃口，到最后一集才说出真相。',answerPy:'Zhè bù diànshìjù gùyì diào guānzhòng de wèikǒu, dào zuìhòu yì jí cái shuōchū zhēnxiàng.',
      note:'到……才…… = đến… mới… (ôn HSK 4).',pair:'才'}
   ]},

  {n:41,zh:'晃',py:'huàng',pos:'Động từ',vn:'lắc lư, đung đưa, chao đảo',hv:'hoảng',em:'🍃',lesson:1,
   explain:['Động từ (đọc huàng): lắc qua lắc lại, đung đưa: 在风中晃来晃去, 晃了晃头. Thường dùng dạng 晃来晃去, 摇晃.','Đọc huǎng: lóa (mắt), vụt qua (一晃就过去了 = thoáng cái đã qua).'],
   usage:'V + 来 + V + 去: 晃来晃去; 晃了晃 + bộ phận cơ thể; 摇晃; 一晃 (huǎng) + thời gian = thoáng chốc.',
   collo:['晃来晃去','摇晃','晃了晃头','一晃'],
   ex_zh:'瓜垂直地吊在那里，在风中晃来晃去。',ex_py:'Guā chuízhí de diào zài nàlǐ, zài fēng zhōng huàng lái huàng qù.',ex_vn:'Quả mướp treo thẳng đứng ở đó, đung đưa qua lại trong gió.',
   exList:[
     {zh:'瓜垂直地吊在那里，在风中晃来晃去。',py:'Guā chuízhí de diào zài nàlǐ, zài fēng zhōng huàng lái huàng qù.',vn:'Quả mướp treo thẳng đứng ở đó, đung đưa qua lại trong gió.'},
     {zh:'船晃得很厉害，好几个人都晕船了。',py:'Chuán huàng de hěn lìhai, hǎo jǐ ge rén dōu yùnchuán le.',vn:'Thuyền chao đảo dữ dội, mấy người liền bị say sóng.'},
     {zh:'别在我面前晃来晃去的，我正在复习呢。',py:'Bié zài wǒ miànqián huàng lái huàng qù de, wǒ zhèngzài fùxí ne.',vn:'Đừng lượn qua lượn lại trước mặt tớ nữa, tớ đang ôn bài mà.'}
   ],
   colloFull:[
     {zh:'晃来晃去',py:'huàng lái huàng qù',vn:'đung đưa qua lại'},
     {zh:'摇晃',py:'yáohuàng',vn:'lắc lư, chao đảo'},
     {zh:'晃了晃头',py:'huàngle huàng tóu',vn:'lắc lắc đầu'},
     {zh:'一晃',py:'yìhuǎng',vn:'thoáng một cái'},
     {zh:'在风中晃动',py:'zài fēng zhōng huàngdòng',vn:'lay động trong gió'}
   ],
   patterns:[
     {s:'V来V去: 晃来晃去',m:'Đung đưa, lượn qua lượn lại'},
     {s:'一晃 (huǎng) + thời gian + 就过去了',m:'Thoáng cái … đã trôi qua'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thoáng cái đã ba năm trôi qua, chúng ta sắp tốt nghiệp rồi.',answer:'一晃三年就过去了，我们快要毕业了。',answerPy:'Yìhuǎng sān nián jiù guòqù le, wǒmen kuàiyào bìyè le.',
      note:'一晃 đọc yìhuǎng; 快要……了 = sắp… rồi (ôn HSK 3).',pair:'快要……了'},
     {promptLang:'vi',prompt:'Gió thổi mạnh quá, mấy chậu hoa trên bệ cửa sổ bị thổi lắc lư.',answer:'风太大了，窗台上的几盆花被吹得晃来晃去。',answerPy:'Fēng tài dà le, chuāngtái shang de jǐ pén huā bèi chuī de huàng lái huàng qù.',
      note:'被 + V + 得 + bổ ngữ trạng thái (ôn HSK 4); V来V去.',pair:'V来V去'}
   ]},

  {n:42,zh:'断定',py:'duàndìng',pos:'Động từ',vn:'khẳng định, kết luận, nhận định chắc chắn',hv:'đoán định',em:'🔍',lesson:1,
   explain:['Động từ: sau khi suy xét, đưa ra kết luận chắc chắn (thường có tân ngữ là một mệnh đề): 我断定：……; 断定他是……','Mức độ chắc chắn cao hơn 认为, 判断; kết luận có thể sai (如 bài khoá: 我断定……, nhưng rồi lại thấy kỳ tích).'],
   usage:'断定 + mệnh đề; 可以 / 无法 + 断定; 被断定为……; 很难断定.',
   collo:['我断定','无法断定','很难断定','断定……是……'],
   ex_zh:'我断定：这个瓜上面够不到窗台，下面也是空的，总有一天会坠落下来。',ex_py:'Wǒ duàndìng: zhège guā shàngmiàn gòu bu dào chuāngtái, xiàmiàn yě shì kōng de, zǒng yǒu yì tiān huì zhuìluò xiàlái.',ex_vn:'Tôi quả quyết: quả này bên trên không với tới bệ cửa sổ, bên dưới cũng trống không, rồi sẽ có ngày rơi xuống.',
   exList:[
     {zh:'我断定：这个瓜上面够不到窗台，下面也是空的，总有一天会坠落下来。',py:'Wǒ duàndìng: zhège guā shàngmiàn gòu bu dào chuāngtái, xiàmiàn yě shì kōng de, zǒng yǒu yì tiān huì zhuìluò xiàlái.',vn:'Tôi quả quyết: quả này bên trên không với tới bệ cửa sổ, bên dưới cũng trống không, rồi sẽ có ngày rơi xuống.'},
     {zh:'我断定这件事肯定是他干的，因为别人没有这个机会。',py:'Wǒ duàndìng zhè jiàn shì kěndìng shì tā gàn de, yīnwèi biérén méiyǒu zhège jīhuì.',vn:'Tôi dám chắc việc này là do anh ta làm, vì người khác không có cơ hội đó.'},
     {zh:'只凭一张照片，还很难断定他就是那个人。',py:'Zhǐ píng yì zhāng zhàopiàn, hái hěn nán duàndìng tā jiù shì nàge rén.',vn:'Chỉ dựa vào một tấm ảnh thì vẫn rất khó khẳng định anh ta chính là người đó.'}
   ],
   colloFull:[
     {zh:'我断定',py:'wǒ duàndìng',vn:'tôi quả quyết'},
     {zh:'无法断定',py:'wúfǎ duàndìng',vn:'không thể khẳng định'},
     {zh:'很难断定',py:'hěn nán duàndìng',vn:'rất khó kết luận'},
     {zh:'断定……是……',py:'duàndìng……shì……',vn:'khẳng định … là …'},
     {zh:'可以断定',py:'kěyǐ duàndìng',vn:'có thể khẳng định'}
   ],
   patterns:[
     {s:'S + 断定 + mệnh đề',m:'… quả quyết rằng …'},
     {s:'(还) 很难 / 无法 + 断定……',m:'(Vẫn) khó / không thể khẳng định …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn cứ vào dấu chân trên tuyết, có thể khẳng định con gấu vừa mới đi qua đây.',answer:'根据雪地上的脚印，可以断定那只熊刚从这里经过。',answerPy:'Gēnjù xuědì shang de jiǎoyìn, kěyǐ duàndìng nà zhī xióng gāng cóng zhèlǐ jīngguò.',
      note:'根据…… = căn cứ vào… (ôn HSK 4); 从 + nơi + 经过.',pair:'根据'},
     {promptLang:'vi',prompt:'Chưa hiểu rõ tình hình, đừng vội kết luận ai đúng ai sai.',answer:'还没了解清楚情况，先别急着断定谁对谁错。',answerPy:'Hái méi liǎojiě qīngchu qíngkuàng, xiān bié jízhe duàndìng shéi duì shéi cuò.',
      note:'急着 + V = vội làm gì; 谁对谁错 đại từ nghi vấn dùng phiếm chỉ.',pair:'别……'}
   ]},

  {n:43,zh:'连同',py:'liántóng',pos:'Liên từ',vn:'kể cả, cùng với, gồm cả',hv:'liên đồng',em:'🔗',lesson:1,
   explain:['Liên từ: nghĩa "连、和" — nối HAI DANH TỪ, biểu thị A cùng với B (tính cả B vào): 货物连同清单, 上衣连同裤子.','Thường có 一起 / 一并 ở phía sau động từ: A 连同 B 一起 / 一并 + V. Khác 一起 (phó từ, đứng trước động từ).'],
   usage:'(把) A + 连同 + B + 一起 / 一并 + V. Văn viết. Không dùng 连同 trực tiếp trước động từ.',
   collo:['连同……一起','连同……一并','连同利息','连同清单'],
   ex_zh:'瓜茎会禁不住瓜的分量，连同上面的两个大瓜一起坠落到地上。',ex_py:'Guājīng huì jīn bu zhù guā de fènliàng, liántóng shàngmiàn de liǎng ge dà guā yìqǐ zhuìluò dào dì shang.',ex_vn:'Thân dây sẽ không chịu nổi sức nặng của quả, kéo theo cả hai quả to bên trên cùng rơi xuống đất.',
   exList:[
     {zh:'瓜茎会禁不住瓜的分量，连同上面的两个大瓜一起坠落到地上。',py:'Guājīng huì jīn bu zhù guā de fènliàng, liántóng shàngmiàn de liǎng ge dà guā yìqǐ zhuìluò dào dì shang.',vn:'Thân dây sẽ không chịu nổi sức nặng của quả, kéo theo cả hai quả to bên trên cùng rơi xuống đất.'},
     {zh:'货物连同清单一并送过去。',py:'Huòwù liántóng qīngdān yíbìng sòng guòqù.',vn:'Hàng hóa cùng với phiếu kê gửi qua luôn một thể.'},
     {zh:'到期后，请把借款连同利息一并还给我。',py:'Dào qī hòu, qǐng bǎ jièkuǎn liántóng lìxī yíbìng huán gěi wǒ.',vn:'Đến hạn, xin hãy trả tôi khoản vay cùng với tiền lãi luôn một thể.'}
   ],
   colloFull:[
     {zh:'连同……一起',py:'liántóng……yìqǐ',vn:'cùng với … (tất cả)'},
     {zh:'连同……一并',py:'liántóng……yíbìng',vn:'gồm cả … luôn một thể'},
     {zh:'连同利息',py:'liántóng lìxī',vn:'kể cả tiền lãi'},
     {zh:'连同清单',py:'liántóng qīngdān',vn:'kèm theo phiếu kê'},
     {zh:'连同行李',py:'liántóng xíngli',vn:'cả hành lý'}
   ],
   patterns:[
     {s:'A + 连同 + B + 一起 / 一并 + V',m:'A cùng với B (tất cả) …'},
     {s:'把 + A + 连同 + B + 一起 + V',m:'Đem A kèm cả B …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đánh rơi ví, tiền cùng với giấy tờ đều mất hết.',answer:'他把钱包弄丢了，钱连同证件都丢了。',answerPy:'Tā bǎ qiánbāo nòngdiū le, qián liántóng zhèngjiàn dōu diū le.',
      note:'连同 nối hai danh từ (钱 + 证件); 弄丢 = làm mất (ôn HSK 5).',pair:'把字句'},
     {promptLang:'vi',prompt:'Xin hãy nộp bài luận cùng với bản dịch luôn một thể trước thứ Sáu.',answer:'请在周五以前把论文连同译文一并交上来。',answerPy:'Qǐng zài zhōuwǔ yǐqián bǎ lùnwén liántóng yìwén yíbìng jiāo shànglái.',
      note:'在……以前 = trước…; 一并 = gộp luôn một thể (văn viết).',pair:'在……以前'}
   ]},

  {n:44,zh:'凹凸',py:'āotū',pos:'Tính từ',vn:'lồi lõm, gồ ghề',hv:'ao đột',em:'🪨',lesson:1,
   explain:['Tính từ: chỗ lõm xuống (凹 āo) và chỗ lồi lên (凸 tū) — bề mặt không phẳng. Thường dùng trong cụm 凹凸不平.','Hai chữ tượng hình: 凹 hình cái trũng, 凸 hình cái gồ lên — rất dễ nhớ.'],
   usage:'凹凸不平的 + 路 / 台子 / 地面; 表面 + 凹凸不平. Ít dùng đơn độc 凹凸 làm vị ngữ.',
   collo:['凹凸不平','凹凸不平的台子','凹凸不平的路','表面凹凸'],
   ex_zh:'那个瓜已经躺在了一个凹凸不平的台子上。',ex_py:'Nàge guā yǐjīng tǎng zài le yí ge āotū bù píng de táizi shang.',ex_vn:'Quả mướp ấy đã nằm trên một cái bệ gồ ghề.',
   exList:[
     {zh:'那个瓜已经躺在了一个凹凸不平的台子上。',py:'Nàge guā yǐjīng tǎng zài le yí ge āotū bù píng de táizi shang.',vn:'Quả mướp ấy đã nằm trên một cái bệ gồ ghề.'},
     {zh:'这条山路凹凸不平，骑车的时候要特别小心。',py:'Zhè tiáo shānlù āotū bù píng, qí chē de shíhou yào tèbié xiǎoxīn.',vn:'Con đường núi này lồi lõm gồ ghề, lúc đi xe đạp phải đặc biệt cẩn thận.'},
     {zh:'这种纸表面凹凸不平，摸起来很特别。',py:'Zhè zhǒng zhǐ biǎomiàn āotū bù píng, mō qǐlái hěn tèbié.',vn:'Loại giấy này bề mặt sần sùi, sờ vào rất lạ tay.'}
   ],
   colloFull:[
     {zh:'凹凸不平',py:'āotū bù píng',vn:'lồi lõm, gồ ghề'},
     {zh:'凹凸不平的台子',py:'āotū bù píng de táizi',vn:'cái bệ gồ ghề'},
     {zh:'凹凸不平的路',py:'āotū bù píng de lù',vn:'con đường gồ ghề'},
     {zh:'表面凹凸',py:'biǎomiàn āotū',vn:'bề mặt lồi lõm'},
     {zh:'地面凹凸不平',py:'dìmiàn āotū bù píng',vn:'mặt đất mấp mô'}
   ],
   patterns:[
     {s:'N + 凹凸不平',m:'… gồ ghề, lồi lõm'},
     {s:'凹凸不平的 + N',m:'… mấp mô'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đường làng trước kia gồ ghề, trời mưa một cái là lầy lội khó đi.',answer:'以前村里的路凹凸不平，一下雨就泥泞难走。',answerPy:'Yǐqián cūn li de lù āotū bù píng, yí xià yǔ jiù nínìng nán zǒu.',
      note:'一……就…… (ôn HSK 4); 泥泞 = lầy lội.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy mặt đất lồi lõm, bọn trẻ vẫn chơi đá bóng say sưa.',answer:'虽然地面凹凸不平，孩子们还是踢球踢得津津有味。',answerPy:'Suīrán dìmiàn āotū bù píng, háizimen háishi tī qiú tī de jīnjīn-yǒuwèi.',
      note:'V + O + V + 得 + bổ ngữ (lặp động từ); 津津有味 ôn HSK 6 bài 5.',pair:'重复动词'}
   ]},

  {n:45,zh:'修建',py:'xiūjiàn',pos:'Động từ',vn:'xây dựng, xây cất, thi công',hv:'tu kiến',em:'🏗️',lesson:1,
   explain:['Động từ: xây dựng (công trình: đường, cầu, nhà, đập…): 修建公路, 修建大桥.','Gần nghĩa 建造, 建设; 修建 nhấn việc thi công công trình cụ thể; 建设 dùng rộng hơn (建设国家).'],
   usage:'修建 + 公路 / 铁路 / 桥 / 水库 / 房子; ……是……时修建的; 正在修建中.',
   collo:['修建公路','修建大桥','……时修建的','正在修建'],
   ex_zh:'那个台子是加固墙体时修建的。',ex_py:'Nàge táizi shì jiāgù qiángtǐ shí xiūjiàn de.',ex_vn:'Cái bệ đó được xây khi gia cố tường nhà.',
   exList:[
     {zh:'那个台子是加固墙体时修建的。',py:'Nàge táizi shì jiāgù qiángtǐ shí xiūjiàn de.',vn:'Cái bệ đó được xây khi gia cố tường nhà.'},
     {zh:'为了方便村民出行，政府在河上修建了一座大桥。',py:'Wèile fāngbiàn cūnmín chūxíng, zhèngfǔ zài hé shang xiūjiànle yí zuò dà qiáo.',vn:'Để người dân đi lại thuận tiện, chính quyền đã xây một cây cầu lớn bắc qua sông.'},
     {zh:'这条铁路正在修建中，预计明年通车。',py:'Zhè tiáo tiělù zhèngzài xiūjiàn zhōng, yùjì míngnián tōngchē.',vn:'Tuyến đường sắt này đang được thi công, dự kiến năm sau thông xe.'}
   ],
   colloFull:[
     {zh:'修建公路',py:'xiūjiàn gōnglù',vn:'xây dựng đường cái'},
     {zh:'修建大桥',py:'xiūjiàn dà qiáo',vn:'xây cầu lớn'},
     {zh:'……时修建的',py:'……shí xiūjiàn de',vn:'được xây khi …'},
     {zh:'正在修建',py:'zhèngzài xiūjiàn',vn:'đang thi công'},
     {zh:'修建水库',py:'xiūjiàn shuǐkù',vn:'xây hồ chứa nước'}
   ],
   patterns:[
     {s:'修建 + công trình',m:'Xây dựng …'},
     {s:'N + 是 + (thời gian / người) + 修建的',m:'… được xây vào lúc / bởi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cây cầu cổ này được xây từ hơn năm trăm năm trước, đến nay vẫn dùng được.',answer:'这座古桥是五百多年前修建的，至今还能使用。',answerPy:'Zhè zuò gǔ qiáo shì wǔbǎi duō nián qián xiūjiàn de, zhìjīn hái néng shǐyòng.',
      note:'是……的 nhấn mạnh thời gian của việc đã xảy ra (ôn HSK 3–4).',pair:'是……的'},
     {promptLang:'vi',prompt:'Nếu không xây hồ chứa nước này, mùa hạn nông dân sẽ không có nước tưới ruộng.',answer:'倘若不修建这座水库，旱季时农民就没有水浇地了。',answerPy:'Tǎngruò bù xiūjiàn zhè zuò shuǐkù, hànjì shí nóngmín jiù méiyǒu shuǐ jiāo dì le.',
      note:'倘若 = nếu như (văn viết, ôn HSK 6 bài 4).',pair:'倘若'}
   ]},

  {n:46,zh:'不可思议',py:'bùkě-sīyì',pos:'Thành ngữ',vn:'không thể tưởng tượng nổi, khó mà giải thích được',hv:'bất khả tư nghị',em:'🤯',lesson:1,
   explain:['Thành ngữ (gốc Phật giáo): 思议 = suy nghĩ, bàn luận → không thể nghĩ bàn, không thể hiểu nổi.','Nay chỉ sự việc lạ lùng, ngoài sức tưởng tượng; làm vị ngữ, định ngữ; hay đi với 真是, 简直, 令人 / 让人觉得.'],
   usage:'(真是 / 简直) + 不可思议; 令人 / 让人觉得 + 不可思议; 不可思议的 + 事 / 现象.',
   collo:['真是不可思议','不可思议的事','让人觉得不可思议','简直不可思议'],
   ex_zh:'真是不可思议！我徘徊在丝瓜下面，觉得丝瓜有思想。',ex_py:'Zhēn shì bùkě-sīyì! Wǒ páihuái zài sīguā xiàmiàn, juéde sīguā yǒu sīxiǎng.',ex_vn:'Thật không thể tưởng tượng nổi! Tôi đi đi lại lại dưới giàn mướp, cảm thấy cây mướp biết suy nghĩ.',
   exList:[
     {zh:'真是不可思议！我徘徊在丝瓜下面，觉得丝瓜有思想。',py:'Zhēn shì bùkě-sīyì! Wǒ páihuái zài sīguā xiàmiàn, juéde sīguā yǒu sīxiǎng.',vn:'Thật không thể tưởng tượng nổi! Tôi đi đi lại lại dưới giàn mướp, cảm thấy cây mướp biết suy nghĩ.'},
     {zh:'这种产品一再降价，可愣是卖不动，让人觉得不可思议。',py:'Zhè zhǒng chǎnpǐn yízài jiàngjià, kě lèng shì mài bu dòng, ràng rén juéde bùkě-sīyì.',vn:'Sản phẩm này hạ giá hết lần này đến lần khác mà cứ bán không chạy, khiến người ta thấy khó hiểu.'},
     {zh:'一个十岁的孩子能解出这道题，简直不可思议。',py:'Yí ge shí suì de háizi néng jiěchū zhè dào tí, jiǎnzhí bùkě-sīyì.',vn:'Một đứa trẻ mười tuổi mà giải được bài này, quả thực không thể tin nổi.'}
   ],
   colloFull:[
     {zh:'真是不可思议',py:'zhēn shì bùkě-sīyì',vn:'thật không thể tưởng tượng nổi'},
     {zh:'不可思议的事',py:'bùkě-sīyì de shì',vn:'chuyện khó tin'},
     {zh:'让人觉得不可思议',py:'ràng rén juéde bùkě-sīyì',vn:'khiến người ta thấy khó hiểu'},
     {zh:'简直不可思议',py:'jiǎnzhí bùkě-sīyì',vn:'quả thực khó tin'},
     {zh:'不可思议的现象',py:'bùkě-sīyì de xiànxiàng',vn:'hiện tượng kỳ lạ'}
   ],
   patterns:[
     {s:'(真是 / 简直) + 不可思议',m:'Thật / quả thực không thể tưởng tượng nổi'},
     {s:'让人 / 令人 + 觉得 + 不可思议',m:'Khiến người ta thấy khó hiểu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cây mướp này vậy mà lại tự tìm được chỗ đỡ quả, thật là khó tin.',answer:'这棵丝瓜居然自己找到了承担重量的地方，真是不可思议。',answerPy:'Zhè kē sīguā jūrán zìjǐ zhǎodàole chéngdān zhòngliàng de dìfang, zhēn shì bùkě-sīyì.',
      note:'居然 = vậy mà (ôn HSK 5); 不可思议 làm vị ngữ sau 真是.',pair:'居然'},
     {promptLang:'vi',prompt:'Chỉ trong vòng mười năm mà thị trấn nhỏ đã thay da đổi thịt, điều này ngày xưa quả thực không thể tưởng tượng.',answer:'短短十年，小镇就发生了翻天覆地的变化，这在过去简直不可思议。',answerPy:'Duǎnduǎn shí nián, xiǎozhèn jiù fāshēngle fāntiān-fùdì de biànhuà, zhè zài guòqù jiǎnzhí bùkě-sīyì.',
      note:'翻天覆地 ôn HSK 6 bài 8; 就 nhấn thời gian ngắn.',pair:'就'}
   ]},

  {n:47,zh:'徘徊',py:'páihuái',pos:'Động từ',vn:'đi đi lại lại, loanh quanh; do dự, lưỡng lự',hv:'bồi hồi',em:'🚶',lesson:1,
   explain:['Động từ: đi qua đi lại mãi quanh một chỗ: 徘徊在丝瓜下面, 在门口徘徊.','Nghĩa bóng: do dự, lưỡng lự không quyết (徘徊不定); (số liệu) dao động quanh một mức (徘徊在……左右). BẪY: "bồi hồi" tiếng Việt là xao xuyến trong lòng, còn 徘徊 là ĐI ĐI LẠI LẠI / do dự.'],
   usage:'(在 + nơi chốn) + 徘徊 / 徘徊在 + nơi chốn; 徘徊不前 / 徘徊不定; 徘徊在 + số + 左右.',
   collo:['徘徊在丝瓜下面','在门口徘徊','徘徊不定','徘徊在……左右'],
   ex_zh:'我徘徊在丝瓜下面，我觉得丝瓜有思想，能考虑问题。',ex_py:'Wǒ páihuái zài sīguā xiàmiàn, wǒ juéde sīguā yǒu sīxiǎng, néng kǎolǜ wèntí.',ex_vn:'Tôi đi đi lại lại dưới giàn mướp, tôi cảm thấy cây mướp có tư duy, biết suy xét vấn đề.',
   exList:[
     {zh:'我徘徊在丝瓜下面，我觉得丝瓜有思想，能考虑问题。',py:'Wǒ páihuái zài sīguā xiàmiàn, wǒ juéde sīguā yǒu sīxiǎng, néng kǎolǜ wèntí.',vn:'Tôi đi đi lại lại dưới giàn mướp, tôi cảm thấy cây mướp có tư duy, biết suy xét vấn đề.'},
     {zh:'他在老师办公室门口徘徊了半天，始终没敢进去。',py:'Tā zài lǎoshī bàngōngshì ménkǒu páihuáile bàntiān, shǐzhōng méi gǎn jìnqù.',vn:'Cậu ấy lượn qua lượn lại trước cửa phòng giáo viên hồi lâu, rốt cuộc vẫn không dám vào.'},
     {zh:'最近几天，气温一直徘徊在三十度左右。',py:'Zuìjìn jǐ tiān, qìwēn yìzhí páihuái zài sānshí dù zuǒyòu.',vn:'Mấy ngày gần đây, nhiệt độ cứ dao động quanh mức ba mươi độ.'}
   ],
   colloFull:[
     {zh:'徘徊在丝瓜下面',py:'páihuái zài sīguā xiàmiàn',vn:'đi đi lại lại dưới giàn mướp'},
     {zh:'在门口徘徊',py:'zài ménkǒu páihuái',vn:'lượn qua lượn lại trước cửa'},
     {zh:'徘徊不定',py:'páihuái bú dìng',vn:'lưỡng lự không quyết'},
     {zh:'徘徊在……左右',py:'páihuái zài……zuǒyòu',vn:'dao động quanh mức …'},
     {zh:'徘徊不前',py:'páihuái bù qián',vn:'giậm chân tại chỗ'}
   ],
   patterns:[
     {s:'S + 徘徊在 + nơi chốn',m:'… đi đi lại lại ở …'},
     {s:'(số liệu) + 徘徊在 + số + 左右',m:'… dao động quanh mức …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thành tích của cậu ấy mãi dao động quanh mức trung bình, cần tìm ra nguyên nhân.',answer:'他的成绩一直徘徊在中等水平，得找找原因了。',answerPy:'Tā de chéngjì yìzhí páihuái zài zhōngděng shuǐpíng, děi zhǎozhao yuányīn le.',
      note:'得 (děi) + V = phải; lặp động từ 找找 làm nhẹ giọng (ôn HSK 3–4).',pair:'得 děi'},
     {promptLang:'vi',prompt:'Cô ấy lưỡng lự giữa hai trường đại học, mãi không quyết được.',answer:'她在两所大学之间徘徊不定，迟迟做不了决定。',answerPy:'Tā zài liǎng suǒ dàxué zhījiān páihuái bú dìng, chíchí zuò bu liǎo juédìng.',
      note:'迟迟 = chần chừ mãi; 做不了决定 bổ ngữ khả năng (ôn HSK 5).',pair:'V不了'}
   ]},

  {n:48,zh:'一如既往',py:'yìrú-jìwǎng',pos:'Thành ngữ',vn:'trước sau như một, vẫn như xưa',hv:'nhất như ký vãng',em:'🔁',lesson:1,
   explain:['Thành ngữ: 一 = hoàn toàn, 如 = như, 既往 = trước đây → hoàn toàn giống như trước kia, không có gì thay đổi.','Thường làm trạng ngữ với 地: 一如既往地 + V (支持 / 关心 / 努力); sắc thái trang trọng, hay dùng trong lời cảm ơn, lời hứa.'],
   usage:'一如既往地 + V; 会 / 将 + 一如既往地……; 希望……一如既往…….',
   collo:['一如既往地支持','一如既往地关心','一如既往地努力','一如既往地含笑'],
   ex_zh:'我想了又想，越想越糊涂，而丝瓜却一如既往地含笑面对秋阳。',ex_py:'Wǒ xiǎngle yòu xiǎng, yuè xiǎng yuè hútu, ér sīguā què yìrú-jìwǎng de hánxiào miànduì qiūyáng.',ex_vn:'Tôi nghĩ đi nghĩ lại, càng nghĩ càng mù mờ, còn cây mướp thì vẫn như ngày nào, mỉm cười đón nắng thu.',
   exList:[
     {zh:'我想了又想，越想越糊涂，而丝瓜却一如既往地含笑面对秋阳。',py:'Wǒ xiǎngle yòu xiǎng, yuè xiǎng yuè hútu, ér sīguā què yìrú-jìwǎng de hánxiào miànduì qiūyáng.',vn:'Tôi nghĩ đi nghĩ lại, càng nghĩ càng mù mờ, còn cây mướp thì vẫn như ngày nào, mỉm cười đón nắng thu.'},
     {zh:'希望你一如既往地关心支持我们。',py:'Xīwàng nǐ yìrú-jìwǎng de guānxīn zhīchí wǒmen.',vn:'Mong bạn vẫn luôn quan tâm, ủng hộ chúng tôi như trước.'},
     {zh:'不管遇到什么困难，我们都会一如既往地努力下去。',py:'Bùguǎn yùdào shénme kùnnan, wǒmen dōu huì yìrú-jìwǎng de nǔlì xiàqù.',vn:'Dù gặp khó khăn gì, chúng tôi vẫn sẽ tiếp tục nỗ lực như trước sau như một.'}
   ],
   colloFull:[
     {zh:'一如既往地支持',py:'yìrú-jìwǎng de zhīchí',vn:'vẫn ủng hộ như trước'},
     {zh:'一如既往地关心',py:'yìrú-jìwǎng de guānxīn',vn:'vẫn quan tâm như xưa'},
     {zh:'一如既往地努力',py:'yìrú-jìwǎng de nǔlì',vn:'vẫn nỗ lực như trước'},
     {zh:'一如既往地含笑',py:'yìrú-jìwǎng de hánxiào',vn:'vẫn mỉm cười như ngày nào'},
     {zh:'一如既往地热情',py:'yìrú-jìwǎng de rèqíng',vn:'vẫn nhiệt tình như xưa'}
   ],
   patterns:[
     {s:'一如既往地 + V',m:'Vẫn … như trước sau như một'},
     {s:'希望 / 会 + 一如既往地 + V',m:'Mong / sẽ vẫn … như trước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù đã lên đại học, cô ấy vẫn như xưa, cuối tuần nào cũng về thăm ông bà.',answer:'虽然上了大学，她却一如既往地每个周末都回家看望爷爷奶奶。',answerPy:'Suīrán shàngle dàxué, tā què yìrú-jìwǎng de měi ge zhōumò dōu huí jiā kànwàng yéye nǎinai.',
      note:'虽然……却……; 一如既往地 làm trạng ngữ (có 地).',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Xin cảm ơn mọi người trong năm qua đã ủng hộ, mong rằng năm tới mọi người vẫn tiếp tục ủng hộ như trước.',answer:'感谢大家一年来的支持，希望明年大家一如既往地支持我们。',answerPy:'Gǎnxiè dàjiā yì nián lái de zhīchí, xīwàng míngnián dàjiā yìrú-jìwǎng de zhīchí wǒmen.',
      note:'Lời cảm ơn trang trọng; thời gian + 来 = trong suốt… qua (一年来).',pair:'……来'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 189–191), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 神奇的丝瓜',
   preQuiz:[
     {q:'孩子们在楼旁空地上种了什么？',opts:['一棵树、几株花和几粒丝瓜种子','很多丝瓜和西红柿','一大片草地'],ans:0},
     {q:'楼旁空地的土壤怎么样？',opts:['非常肥沃','不是很肥沃','根本没有土壤'],ans:1},
     {q:'丝瓜从土里冒出来以后，“我”惊讶地发现了什么？',opts:['丝瓜长得很慢','丝瓜被人拔了','丝瓜好像每时每刻都在长大'],ans:2},
     {q:'看着丝瓜，“我”心中对什么感到不解？',opts:['古人为什么编出拔苗助长的故事','丝瓜为什么不开花','孩子们为什么种丝瓜'],ans:0},
     {q:'“我”一般什么时候去看丝瓜？',opts:['每天上班以前','每天工作疲倦了的时候','每个周末'],ans:1},
     {q:'瓜茎顺着楼墙最后爬到了几楼？',opts:['一楼','二楼','三楼'],ans:2},
     {q:'丝瓜开的花是什么颜色的？',opts:['红色的','黄色的','白色的'],ans:1},
     {q:'瓜越长越大，“我”的心为什么变得沉重起来？',opts:['担心瓜茎负担不起瓜的重量','担心别人摘走丝瓜','担心丝瓜不好吃'],ans:0},
     {q:'最初长出来的那个瓜怎么样？',opts:['一直在长','长到一定程度就不长了','很快掉到了地上'],ans:1},
     {q:'三楼那家窗外的两个瓜后来怎么样了？',opts:['坠落到了地上','被那家人摘走了','弯了起来，躺在了窗台上'],ans:2},
     {q:'最下面那个瓜最后在哪儿？',opts:['躺在一个凹凸不平的台子上','掉在了地上','还垂直地吊在空中'],ans:0},
     {q:'看到这一切，“我”觉得丝瓜怎么样？',opts:['很普通，没什么特别','长得太慢了','好像有思想，还有行动'],ans:2}
   ],
   lines:[
    {sp:0,zh:'春天，孩子们在楼旁空地上开出一个小小的花园，随即种上了一棵树、几株花和几粒丝瓜种子。土壤不是很肥沃，但有水的滋润，阳光的照耀，没几天，丝瓜就从土里冒了出来，接着我惊讶地发现，它好像每时每刻都在长大。看着丝瓜，我心中难免不解：古人是怎么想的，愣是编出个拔苗助长的故事来？要是我，宁愿用别的比喻。',
     py:'Chūntiān, háizimen zài lóu páng kòngdì shang kāichū yí ge xiǎoxiǎo de huāyuán, suíjí zhòngshangle yì kē shù, jǐ zhū huā hé jǐ lì sīguā zhǒngzi. Tǔrǎng bú shì hěn féiwò, dàn yǒu shuǐ de zīrùn, yángguāng de zhàoyào, méi jǐ tiān, sīguā jiù cóng tǔ li màole chūlái, jiēzhe wǒ jīngyà de fāxiàn, tā hǎoxiàng měi shí měi kè dōu zài zhǎngdà. Kànzhe sīguā, wǒ xīn zhōng nánmiǎn bùjiě: gǔrén shì zěnme xiǎng de, lèng shì biānchū ge bámiáo-zhùzhǎng de gùshi lái? Yàoshi wǒ, nìngyuàn yòng biéde bǐyù.',
     vn:'Mùa xuân, bọn trẻ vỡ ra một khu vườn nho nhỏ trên khoảnh đất trống cạnh tòa nhà, rồi ngay sau đó trồng lên một cái cây, mấy khóm hoa và gieo mấy hạt mướp. Đất không màu mỡ lắm, nhưng có nước tưới tắm, có nắng chiếu rọi, chưa được mấy ngày cây mướp đã nhú lên khỏi mặt đất, tiếp đó tôi kinh ngạc phát hiện ra, nó dường như lúc nào cũng đang lớn lên. Nhìn cây mướp, trong lòng tôi không khỏi thắc mắc: người xưa nghĩ thế nào mà lại cứ bịa ra câu chuyện "kéo mạ cho mau lớn" nhỉ? Nếu là tôi, tôi thà dùng một phép so sánh khác.'},
    {sp:0,zh:'不解归不解，我每天工作疲倦了，都要去看看那几棵丝瓜。丝瓜长得很快，转眼间，瓜茎已经爬上了我们这幢楼陡峭的楼墙。接着，它从一楼爬上了二楼，又从二楼爬上了三楼。瓜茎只有细绳一般粗，却能输送足够的水分和养料，使得瓜茎挺拔，叶子茂盛。那覆盖在水泥墙面上的一片浓绿显得朝气蓬勃，充满了生机与活力。',
     py:'Bùjiě guī bùjiě, wǒ měi tiān gōngzuò píjuàn le, dōu yào qù kànkan nà jǐ kē sīguā. Sīguā zhǎng de hěn kuài, zhuǎnyǎn jiān, guājīng yǐjīng páshangle wǒmen zhè zhuàng lóu dǒuqiào de lóuqiáng. Jiēzhe, tā cóng yī lóu páshangle èr lóu, yòu cóng èr lóu páshangle sān lóu. Guājīng zhǐyǒu xì shéng yìbān cū, què néng shūsòng zúgòu de shuǐfèn hé yǎngliào, shǐde guājīng tǐngbá, yèzi màoshèng. Nà fùgài zài shuǐní qiángmiàn shang de yí piàn nónglǜ xiǎnde zhāoqì-péngbó, chōngmǎnle shēngjī yǔ huólì.',
     vn:'Thắc mắc thì thắc mắc, ngày nào làm việc mệt rồi tôi cũng đều ra ngắm mấy cây mướp ấy. Cây mướp lớn rất nhanh, chớp mắt một cái, thân dây đã leo lên bức tường dựng đứng của tòa nhà chúng tôi. Tiếp đó, nó bò từ tầng một lên tầng hai, rồi lại từ tầng hai lên tầng ba. Thân dây mướp chỉ to bằng sợi dây mảnh, vậy mà lại chuyển được đủ nước và chất dinh dưỡng, khiến dây mướp vươn thẳng, lá xanh tốt. Mảng xanh đậm phủ trên mặt tường xi-măng ấy trông tràn trề nhựa sống, đầy sinh khí và sức sống.'},
    {sp:0,zh:'又过了几天，丝瓜开花了，黄色的花瓣点缀在绿叶之间，颜色协调，柔和精致。再过几天，黄花变成了小小的丝瓜。瓜越长越长，分量也越来越重。它悬挂在空中，细细的瓜茎好像负担不起瓜的重量，时刻都要坠落下来，我的心也变得沉重起来。不久就证明，我的担心是多余的。最初长出来的瓜好像很有节制，长到一定程度就不长了，而三楼那家的窗外，又长出来两个瓜。这两个瓜开始只有小姑娘的辫子一般粗细，不久就长得如小孩臂膀一般粗了。呵，这两个瓜加起来恐怕有五六斤了，那一根细细的茎怎么承担得住呢？我的担心与日俱增。没过几天，我发现我又错了，两个瓜不知什么时候弯了起来，舒舒服服地躺在了那家的窗台上。没几天，那两个大瓜下面的瓜茎末梢上，又长出来一个瓜，垂直地吊在那里，在风中晃来晃去。我断定：这个瓜上面够不到窗台，下面也是空的，总有一天，瓜茎会禁不住瓜的分量，连同上面的两个大瓜一起坠落到地上。这天一早，我却看到了奇迹，那个我断定会坠落下来的瓜，已经躺在了一个凹凸不平的台子上，那个台子是加固墙体时修建的。',
     py:'Yòu guòle jǐ tiān, sīguā kāihuā le, huángsè de huābàn diǎnzhuì zài lǜyè zhījiān, yánsè xiétiáo, róuhé jīngzhì. Zài guò jǐ tiān, huánghuā biànchéngle xiǎoxiǎo de sīguā. Guā yuè zhǎng yuè cháng, fènliàng yě yuè lái yuè zhòng. Tā xuánguà zài kōngzhōng, xìxì de guājīng hǎoxiàng fùdān bu qǐ guā de zhòngliàng, shíkè dōu yào zhuìluò xiàlái, wǒ de xīn yě biàn de chénzhòng qǐlái. Bùjiǔ jiù zhèngmíng, wǒ de dānxīn shì duōyú de. Zuìchū zhǎng chūlái de guā hǎoxiàng hěn yǒu jiézhì, zhǎngdào yídìng chéngdù jiù bù zhǎng le, ér sān lóu nà jiā de chuāng wài, yòu zhǎng chūlái liǎng ge guā. Zhè liǎng ge guā kāishǐ zhǐyǒu xiǎo gūniang de biànzi yìbān cūxì, bùjiǔ jiù zhǎng de rú xiǎohái bìbǎng yìbān cū le. Hē, zhè liǎng ge guā jiā qǐlái kǒngpà yǒu wǔ-liù jīn le, nà yì gēn xìxì de jīng zěnme chéngdān de zhù ne? Wǒ de dānxīn yǔrì-jùzēng. Méi guò jǐ tiān, wǒ fāxiàn wǒ yòu cuò le, liǎng ge guā bù zhī shénme shíhou wānle qǐlái, shūshūfúfú de tǎng zài le nà jiā de chuāngtái shang. Méi jǐ tiān, nà liǎng ge dà guā xiàmiàn de guājīng mòshāo shang, yòu zhǎng chūlái yí ge guā, chuízhí de diào zài nàlǐ, zài fēng zhōng huàng lái huàng qù. Wǒ duàndìng: zhège guā shàngmiàn gòu bu dào chuāngtái, xiàmiàn yě shì kōng de, zǒng yǒu yì tiān, guājīng huì jīn bu zhù guā de fènliàng, liántóng shàngmiàn de liǎng ge dà guā yìqǐ zhuìluò dào dì shang. Zhè tiān yìzǎo, wǒ què kàndàole qíjì, nàge wǒ duàndìng huì zhuìluò xiàlái de guā, yǐjīng tǎng zài le yí ge āotū bù píng de táizi shang, nàge táizi shì jiāgù qiángtǐ shí xiūjiàn de.',
     vn:'Lại qua mấy ngày, cây mướp ra hoa, những cánh hoa vàng điểm xuyết giữa lá xanh, màu sắc hài hòa, dịu dàng tinh tế. Qua mấy ngày nữa, hoa vàng đã thành những quả mướp nho nhỏ. Quả càng lớn càng dài, trọng lượng cũng ngày một nặng. Nó treo lơ lửng giữa không trung, thân dây mảnh mai dường như không gánh nổi sức nặng của quả, lúc nào cũng như sắp rơi xuống, lòng tôi cũng trở nên nặng trĩu. Chẳng bao lâu đã chứng minh nỗi lo của tôi là thừa. Quả mọc ra đầu tiên dường như rất biết chừng mực, lớn đến một mức nhất định thì thôi không lớn nữa, còn ngoài cửa sổ nhà tầng ba lại mọc ra hai quả. Hai quả này lúc đầu chỉ to bằng bím tóc của cô bé, chẳng bao lâu đã lớn to như cánh tay đứa trẻ. Úi chà, hai quả này cộng lại chắc phải năm sáu cân rồi, cái cọng mảnh mai ấy làm sao chịu nổi đây? Nỗi lo của tôi mỗi ngày một tăng. Chưa được mấy ngày, tôi phát hiện mình lại sai rồi, chẳng biết từ lúc nào hai quả đã cong lên, nằm thoải mái trên bệ cửa sổ nhà ấy. Mấy hôm sau, trên đầu mút thân dây phía dưới hai quả to ấy lại mọc ra một quả nữa, treo thẳng đứng ở đó, đung đưa qua lại trong gió. Tôi quả quyết: quả này bên trên không với tới bệ cửa sổ, bên dưới cũng trống không, rồi sẽ có một ngày thân dây không chịu nổi sức nặng của quả, kéo theo cả hai quả to bên trên cùng rơi xuống đất. Sáng sớm hôm ấy, tôi lại được chứng kiến một kỳ tích: quả mướp mà tôi quả quyết sẽ rơi xuống ấy đã nằm trên một cái bệ gồ ghề, cái bệ đó được xây khi gia cố tường nhà.'},
    {sp:0,zh:'真是不可思议！我徘徊在丝瓜下面，我觉得丝瓜有思想，能考虑问题，而且还有行动。它能让大瓜停止生长；它能给瓜找到承担重量的地方。如果真是这样，丝瓜用什么来思考呢？丝瓜靠什么来指导自己的行动呢？我想了又想，越想越糊涂，而丝瓜却一如既往地含笑面对秋阳。',
     py:'Zhēn shì bùkě-sīyì! Wǒ páihuái zài sīguā xiàmiàn, wǒ juéde sīguā yǒu sīxiǎng, néng kǎolǜ wèntí, érqiě hái yǒu xíngdòng. Tā néng ràng dà guā tíngzhǐ shēngzhǎng; tā néng gěi guā zhǎodào chéngdān zhòngliàng de dìfang. Rúguǒ zhēn shì zhèyàng, sīguā yòng shénme lái sīkǎo ne? Sīguā kào shénme lái zhǐdǎo zìjǐ de xíngdòng ne? Wǒ xiǎngle yòu xiǎng, yuè xiǎng yuè hútu, ér sīguā què yìrú-jìwǎng de hánxiào miànduì qiūyáng.',
     vn:'Thật không thể tưởng tượng nổi! Tôi đi đi lại lại dưới giàn mướp, tôi cảm thấy cây mướp có tư duy, biết suy xét vấn đề, hơn nữa còn biết hành động. Nó có thể khiến quả to ngừng lớn; nó có thể tìm cho quả một chỗ đỡ sức nặng. Nếu quả thật là như vậy, thì cây mướp dùng cái gì để suy nghĩ? Cây mướp dựa vào đâu để chỉ dẫn hành động của mình? Tôi nghĩ đi nghĩ lại, càng nghĩ càng mù mờ, còn cây mướp thì vẫn như ngày nào, mỉm cười đón nắng thu.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 连同—一起 lấy từ sách (tr. 193, 做一做: 选择“连同”或“一起”填空); 惊讶—惊奇, 负担—承担 soạn thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'连同 — 一起',
   same:'Đều có nghĩa "A và B cùng nhau", nhưng 连同 là LIÊN TỪ, 一起 là PHÓ TỪ — KHÔNG thay thế cho nhau được. Hai từ lại hay xuất hiện chung một câu: A 连同 B 一起 + V.',
   sameEx:{zh:'他把上衣连同裤子一起洗了。',vn:'Anh ấy giặt áo cùng với quần luôn một lượt.'},
   items:[
     {word:'连同',points:[
       'Liên từ, nghĩa "连、和" (cùng với, kể cả) — đứng GIỮA HAI DANH TỪ.',
       'Phía sau hay có 一起 / 一并 + V: 货物连同清单一并送过去.',
       'Văn viết; không đứng ngay trước động từ.'
     ],ex:[{zh:'货物连同清单一并送过去。',vn:'Hàng hóa cùng với phiếu kê gửi qua luôn một thể.'}]},
     {word:'一起',points:[
       'Phó từ, đứng TRƯỚC ĐỘNG TỪ: 一起去, 一起住, 一起带给他.',
       'Hay đi với 跟 / 和 / 把 A 和 B……: 我跟他一起去; 把 A 和 B 一起 + V.',
       'Còn là danh từ "cùng một chỗ": 住在一起, 在一起.'
     ],ex:[{zh:'明天你把作业和考试成绩一起带给他吧。',vn:'Mai cậu mang bài tập và điểm thi cho bạn ấy luôn nhé.'}]}
   ],
   quiz:[
     {sentence:'周末我们＿＿去爬山吧。',options:['连同','一起'],answer:1,
      why:'Đứng trước động từ 去 → phó từ 一起.'},
     {sentence:'他把手机＿＿充电器都借给了我。',options:['连同','一起'],answer:0,
      why:'Nối hai danh từ 手机 và 充电器 → liên từ 连同.'},
     {sentence:'小偷把钱包＿＿里面的证件都偷走了。',options:['连同','一起'],answer:0,
      why:'Giữa hai danh từ (钱包 — 证件) → 连同 (kể cả).'},
     {sentence:'我们一家人每天晚上都＿＿吃饭。',options:['连同','一起'],answer:1,
      why:'Trước động từ 吃饭 → 一起.'}
   ],
   sgk:{
     chung:{t:'都有A和B一同的意思，但“连同”是连词，“一起”是副词，不能换用。',vn:'Đều có nghĩa A và B cùng nhau, nhưng "连同" là liên từ, "一起" là phó từ, không thể thay thế cho nhau.',vd:'',vdVn:''},
     khac:[
       {a:{t:'连词，“连、和”的意思。常用于两个名词之间。',vn:'Liên từ, nghĩa "连、和" (cùng với, kể cả). Thường dùng giữa hai danh từ.',vd:'货物连同清单一并送过去。',vdVn:'Hàng hóa cùng với phiếu kê gửi qua luôn một thể.'},
        b:{t:'副词，用于动词前边。',vn:'Phó từ, dùng trước động từ.',vd:'明天你把作业和考试成绩一起带给他吧。',vdVn:'Mai cậu mang bài tập và điểm thi cho bạn ấy luôn nhé.'}}
     ],
     lamThu:[
       {s:'他把上衣＿＿裤子都弄脏了。',dap:[true,false],
        giai:'Chỗ trống nằm giữa hai danh từ 上衣 và 裤子 → liên từ 连同 (áo cùng với quần đều bẩn).'},
       {s:'下个星期小王去上海出差，你跟他＿＿去吧。',dap:[false,true],
        giai:'Chỗ trống đứng trước động từ 去, có 跟他 → phó từ 一起.'},
       {s:'我跟朋友＿＿住在一所离学校很近的公寓里。',dap:[false,true],
        giai:'Trước động từ 住, có 跟朋友 → 一起.'},
       {s:'到期后，请把借款＿＿利息一并还给我。',dap:[true,false],
        giai:'Giữa hai danh từ 借款 và 利息, phía sau có 一并 → 连同.'}
     ]
   }},

  {pair:'惊讶 — 惊奇',
   same:'Đều là tính từ, đều chỉ cảm giác ngạc nhiên trước điều ngoài dự đoán; đều làm trạng ngữ với 地 (惊讶地 / 惊奇地发现).',
   sameEx:{zh:'到了那里，他们惊讶／惊奇地发现，一切都变了。',vn:'Đến nơi, họ ngạc nhiên phát hiện mọi thứ đều đã thay đổi.'},
   items:[
     {word:'惊讶',points:[
       'Nhấn "KHÔNG NGỜ TỚI", bất ngờ — có khi kèm nghi ngờ, khó tin.',
       'Hay dùng khi nghe một tin, thấy một hành động bất ngờ của người khác: 听说……，大家都很惊讶.',
       'Hay đi với 感到 / 令人 / 露出……的表情.'
     ],ex:[{zh:'听说他辞职了，同事们都感到很惊讶。',vn:'Nghe nói anh ấy nghỉ việc, đồng nghiệp ai cũng rất bất ngờ.'}]},
     {word:'惊奇',points:[
       'Nhấn "THẤY LẠ" mà thích thú, tò mò (奇 = lạ, kỳ) — thường trước sự vật, hiện tượng mới lạ.',
       'Sắc thái tích cực hơn: 惊奇地发现 điều thú vị, 令人惊奇的变化.',
       'Ôn HSK 6 bài 14: 他们惊奇地发现……'
     ],ex:[{zh:'孩子们惊奇地看着这只会说话的鹦鹉。',vn:'Bọn trẻ tò mò thích thú nhìn con vẹt biết nói.'}]}
   ],
   quiz:[
     {sentence:'他平时那么节约，这次却花五千块买了双鞋，我很＿＿。',options:['惊讶','惊奇'],answer:0,
      why:'Hành động bất ngờ, khó tin của người khác → 惊讶.'},
     {sentence:'第一次看到大海，孩子们＿＿地睁大了眼睛。',options:['惊讶','惊奇'],answer:1,
      why:'Thấy sự vật mới lạ, thích thú, tò mò → 惊奇.'},
     {sentence:'接着我＿＿地发现，丝瓜好像每时每刻都在长大。',options:['惊讶','惊奇'],answer:0,both:true,
      why:'Câu bài khoá dùng 惊讶; ở đây 惊奇 cũng được (cả hai đều làm trạng ngữ cho 发现).'},
     {sentence:'听到这个消息，她露出了＿＿的表情，好像不太相信。',options:['惊讶','惊奇'],answer:0,
      why:'Kèm nghi ngờ, khó tin (好像不太相信) → 惊讶.'}
   ]},

  {pair:'负担 — 承担',
   same:'Đều là động từ, đều có nghĩa gánh chịu (trách nhiệm, chi phí, công việc…): 负担／承担费用.',
   sameEx:{zh:'这次活动的费用由学校负担／承担。',vn:'Chi phí hoạt động lần này do nhà trường chịu.'},
   items:[
     {word:'负担',points:[
       'Nhấn khả năng CHỊU NỔI hay không — hay dùng dạng 负担得起 / 负担不起.',
       'Còn là DANH TỪ: gánh nặng — 减轻负担, 思想负担, 家庭负担很重.',
       'Tân ngữ hay là tiền bạc, chi phí: 负担学费, 负担生活费.'
     ],ex:[{zh:'由于负担不起学费，孩子只好退学去打工。',vn:'Vì không kham nổi học phí, đứa trẻ đành bỏ học đi làm thuê.'}]},
     {word:'承担',points:[
       'Nhấn việc NHẬN LẤY, đảm đương (trách nhiệm, nhiệm vụ, hậu quả, rủi ro).',
       'Chỉ là động từ; không có nghĩa danh từ "gánh nặng".',
       'Hay đi với 责任 / 后果 / 任务 / 风险 / 重量: 承担责任, 承担重量.'
     ],ex:[{zh:'它能给瓜找到承担重量的地方。',vn:'Nó có thể tìm cho quả một chỗ đỡ sức nặng.'}]}
   ],
   quiz:[
     {sentence:'这件事是我做错了，我愿意＿＿全部责任。',options:['负担','承担'],answer:1,
      why:'承担责任 là cụm cố định (nhận trách nhiệm).'},
     {sentence:'为了减轻父母的＿＿，他暑假去打工了。',options:['负担','承担'],answer:0,
      why:'Làm danh từ "gánh nặng" → chỉ 负担.'},
     {sentence:'房子这么贵，普通家庭根本＿＿不起。',options:['负担','承担'],answer:0,
      why:'Dạng bổ ngữ khả năng về chi phí: 负担不起.'},
     {sentence:'这次比赛的全部费用由赞助商＿＿。',options:['负担','承担'],answer:1,both:true,
      why:'Chịu chi phí — cả hai đều dùng được (câu mẫu phần giống nhau).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'神奇',hv:'thần kỳ',vn:'thần kỳ, kỳ diệu',note:'Trùng khít: 神奇的丝瓜 = quả mướp thần kỳ.'},
    {zh:'土壤',hv:'thổ nhưỡng',vn:'đất, thổ nhưỡng',note:'Trùng khít, nhưng "thổ nhưỡng" trong tiếng Việt mang sắc thái khoa học; khẩu ngữ nói "đất".'},
    {zh:'节制',hv:'tiết chế',vn:'tiết chế, có chừng mực',note:'Trùng khít: 节制饮食 = tiết chế ăn uống.'},
    {zh:'点缀',hv:'điểm xuyết',vn:'điểm xuyết, tô điểm',note:'Trùng khít: 花瓣点缀在绿叶之间 = cánh hoa điểm xuyết giữa lá xanh.'},
    {zh:'断定',hv:'đoán định',vn:'khẳng định, kết luận',note:'Tiếng Việt có "đoán định" nhưng 断定 chắc chắn hơn — dịch "quả quyết, khẳng định".'},
    {zh:'柔和',hv:'nhu hòa',vn:'dịu dàng, êm dịu',note:'"Nhu hòa" = mềm mỏng, ôn hòa — gần khớp; 柔和的灯光 dịch "ánh đèn dịu nhẹ".'},
    {zh:'挺拔',hv:'đĩnh bạt',vn:'thẳng tắp, cao vút',note:'Tiếng Việt dùng "đĩnh bạt" cho nét chữ, phong thái; cây cối thì dịch "thẳng tắp, sừng sững".'},
    {zh:'惊讶',hv:'kinh nhạ',vn:'kinh ngạc',note:'讶 (nhạ) gần âm với "ngạc" → nhớ theo "kinh ngạc".'},
    {zh:'生机',hv:'sinh cơ',vn:'sức sống, sinh khí',note:'Nhớ theo "sinh khí": 充满生机 = tràn đầy sinh khí.'}
  ],
  idiom:[
    {zh:'拔苗助长',hv:'bạt miêu trợ trưởng',vn:'kéo mạ cho mau lớn; nóng vội hỏng việc',note:'"Bạt" = nhổ, "miêu" = mạ, "trợ trưởng" = giúp lớn → tương đương "đốt cháy giai đoạn".'},
    {zh:'朝气蓬勃',hv:'triêu khí bồng bột',vn:'tràn đầy sức sống',note:'CẨN THẬN: "bồng bột" tiếng Việt = hăng hái thiếu suy nghĩ (nghĩa xấu); 蓬勃 tiếng Trung = dồi dào, mạnh mẽ (nghĩa tốt). "Triêu" = buổi sáng.'},
    {zh:'与日俱增',hv:'dữ nhật câu tăng',vn:'tăng lên từng ngày',note:'"Dữ" = cùng với, "nhật" = ngày, "câu" = đều → cùng ngày tháng mà tăng.'},
    {zh:'不可思议',hv:'bất khả tư nghị',vn:'không thể tưởng tượng nổi',note:'Tiếng Việt cũng dùng "bất khả tư nghị" (văn Phật giáo, văn chương).'},
    {zh:'一如既往',hv:'nhất như ký vãng',vn:'trước sau như một',note:'"Như" = giống, "ký vãng" = đã qua → giống hệt như trước đây.'}
  ],
  trap:[
    {zh:'沉重',hv:'trầm trọng',vn:'nặng nề, nặng trĩu',
     warn:'BẪY: "trầm trọng" tiếng Việt = rất nghiêm trọng (bệnh trầm trọng → 严重). 沉重 tiếng Trung = NẶNG: 心情沉重 = lòng nặng trĩu, 沉重的打击 = đòn nặng nề.'},
    {zh:'徘徊',hv:'bồi hồi',vn:'đi đi lại lại; do dự',
     warn:'BẪY: "bồi hồi" tiếng Việt = xao xuyến trong lòng. 徘徊 tiếng Trung là ĐI ĐI LẠI LẠI một chỗ (徘徊在丝瓜下面), hoặc do dự, dao động (徘徊在30度左右).'},
    {zh:'修建',hv:'tu kiến',vn:'xây dựng (công trình)',
     warn:'Đừng nhầm với "tu sửa / tu bổ" (修理, 修缮). 修建 là XÂY MỚI: 修建大桥 = xây cầu.'},
    {zh:'分量',hv:'phân lượng',vn:'trọng lượng; sức nặng (lời nói)',
     warn:'Không dịch "phân lượng / liều lượng". 分量 đọc fènliàng = độ nặng: 瓜的分量; nghĩa bóng 说话有分量 = lời nói có trọng lượng.'},
    {zh:'协调',hv:'hiệp điều',vn:'hài hòa; điều phối',
     warn:'Tiếng Việt không có "hiệp điều". Tính từ dịch "hài hòa" (颜色协调), động từ dịch "điều phối" (协调工作). 调 đọc tiáo.'},
    {zh:'负担',hv:'phụ đảm',vn:'gánh vác; gánh nặng',
     warn:'Không có "phụ đảm" trong tiếng Việt. Nhớ: 负 = mang, vác trên lưng; 担 = gánh → "gánh vác". Danh từ: gánh nặng.'},
    {zh:'悬挂',hv:'huyền quải',vn:'treo lơ lửng',
     warn:'"Huyền" (悬) = treo lơ lửng — như "huyền không" (lơ lửng giữa trời); "quải" = treo. Dịch đơn giản "treo".'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'开出',right:'一个小小的花园'},
  {left:'几粒',right:'丝瓜种子'},
  {left:'水的',right:'滋润'},
  {left:'阳光的',right:'照耀'},
  {left:'惊讶地',right:'发现'},
  {left:'编出',right:'拔苗助长的故事'},
  {left:'每天工作',right:'疲倦了'},
  {left:'陡峭的',right:'楼墙'},
  {left:'输送',right:'水分和养料'},
  {left:'瓜茎',right:'挺拔'},
  {left:'叶子',right:'茂盛'},
  {left:'水泥',right:'墙面'},
  {left:'充满了',right:'生机与活力'},
  {left:'颜色',right:'协调'},
  {left:'悬挂',right:'在空中'},
  {left:'负担不起',right:'瓜的重量'},
  {left:'心也变得',right:'沉重起来'},
  {left:'我的担心',right:'与日俱增'},
  {left:'垂直地',right:'吊在那里'},
  {left:'在风中',right:'晃来晃去'},
  {left:'凹凸不平的',right:'台子'},
  {left:'加固墙体时',right:'修建的'},
  {left:'含笑',right:'面对秋阳'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài một câu
// ══════════════════════════════════════════
var fillData = [
  {pre:'一粒小小的种子能长成参天大树，大自然真是太',blank:'神奇',post:'了！',hint:'(kỳ diệu)',ans:'神奇'},
  {pre:'夏天喝一碗',blank:'丝瓜',post:'汤，又清淡又解暑。',hint:'(mướp)',ans:'丝瓜'},
  {pre:'他答应了一声，',blank:'随即',post:'把手里的东西递给我。',hint:'(ngay sau đó)',ans:'随即'},
  {pre:'石头缝里长出了一',blank:'株',post:'小草，显得生机勃勃。',hint:'(lượng từ: khóm, cây)',ans:'株'},
  {pre:'医生让我每天饭后吃两',blank:'粒',post:'药。',hint:'(viên)',ans:'粒'},
  {pre:'化肥用得太多，会致使',blank:'土壤',post:'越来越差。',hint:'(đất)',ans:'土壤'},
  {pre:'湄公河三角洲土地',blank:'肥沃',post:'，是越南重要的粮食产区。',hint:'(màu mỡ)',ans:'肥沃'},
  {pre:'春雨',blank:'滋润',post:'着大地，田野里一片生机。',hint:'(tưới tắm)',ans:'滋润'},
  {pre:'清晨，第一缕阳光',blank:'照耀',post:'着宁静的小村庄。',hint:'(chiếu rọi)',ans:'照耀'},
  {pre:'听说他放弃了留学的机会，大家都感到很',blank:'惊讶',post:'。',hint:'(bất ngờ, ngạc nhiên)',ans:'惊讶'},
  {pre:'大家都劝他别熬夜，他',blank:'愣',post:'是不听。',hint:'(cứ, khăng khăng)',ans:'愣'},
  {pre:'让三岁的孩子每天学五个小时，简直是',blank:'拔苗助长',post:'。',hint:'(nóng vội hỏng việc)',ans:'拔苗助长'},
  {pre:'他就是这样，',blank:'宁愿',post:'吃苦受累，也决不求人。',hint:'(thà)',ans:'宁愿'},
  {pre:'放学后，我看到了满脸',blank:'疲倦',post:'的妈妈。',hint:'(mệt mỏi)',ans:'疲倦'},
  {pre:'那一根细细的',blank:'茎',post:'怎么承担得住两个大瓜呢？',hint:'(cọng, thân dây)',ans:'茎'},
  {pre:'那',blank:'幢',post:'红色的小楼就是我们的图书馆。',hint:'(lượng từ: tòa)',ans:'幢'},
  {pre:'这条山路又窄又',blank:'陡峭',post:'，大家一定要留神。',hint:'(dốc đứng)',ans:'陡峭'},
  {pre:'路两旁是一排排高大',blank:'挺拔',post:'的白杨树。',hint:'(thẳng tắp)',ans:'挺拔'},
  {pre:'下了几场雨，山上的草木更加',blank:'茂盛',post:'了。',hint:'(xanh tốt)',ans:'茂盛'},
  {pre:'现在无线网络已经',blank:'覆盖',post:'了整个校园。',hint:'(phủ sóng)',ans:'覆盖'},
  {pre:'以前村里都是土路，现在全修成了',blank:'水泥',post:'路。',hint:'(xi-măng)',ans:'水泥'},
  {pre:'开学第一天，校园里到处都是',blank:'朝气蓬勃',post:'的年轻人。',hint:'(tràn đầy sức sống)',ans:'朝气蓬勃'},
  {pre:'一场春雨过后，干枯的草地又恢复了',blank:'生机',post:'。',hint:'(sức sống)',ans:'生机'},
  {pre:'一阵风吹过，粉红色的',blank:'花瓣',post:'纷纷飘落。',hint:'(cánh hoa)',ans:'花瓣'},
  {pre:'蓝天上',blank:'点缀',post:'着几朵白云，像一幅画一样。',hint:'(điểm xuyết)',ans:'点缀'},
  {pre:'这件上衣和裤子的颜色不太',blank:'协调',post:'，换一条吧。',hint:'(hài hòa)',ans:'协调'},
  {pre:'房间里的灯光很',blank:'柔和',post:'，让人感到很放松。',hint:'(dịu nhẹ)',ans:'柔和'},
  {pre:'这家饭馆的菜不但好吃，而且',blank:'分量',post:'很足。',hint:'(suất, lượng)',ans:'分量'},
  {pre:'节日期间，街道两旁',blank:'悬挂',post:'着一排排红灯笼。',hint:'(treo)',ans:'悬挂'},
  {pre:'为了减轻父母的',blank:'负担',post:'，他暑假去做了兼职。',hint:'(gánh nặng)',ans:'负担'},
  {pre:'树上的苹果太多了，把树枝都',blank:'坠',post:'弯了。',hint:'(làm trĩu xuống)',ans:'坠'},
  {pre:'考试失败对他来说是一个',blank:'沉重',post:'的打击。',hint:'(nặng nề)',ans:'沉重'},
  {pre:'玩游戏要有',blank:'节制',post:'，不能影响学习和休息。',hint:'(chừng mực)',ans:'节制'},
  {pre:'每天早上，妈妈都给妹妹梳两条小',blank:'辫子',post:'。',hint:'(bím tóc)',ans:'辫子'},
  {pre:'你有什么困难尽管说，我一定助你一',blank:'臂',post:'之力。',hint:'(cánh tay)',ans:'臂'},
  {pre:'',blank:'呵',post:'，才一个星期不见，你又长高了！',hint:'(thán từ: ô, úi chà)',ans:'呵'},
  {pre:'离开家乡越久，对父母的思念',blank:'与日俱增',post:'。',hint:'(tăng lên từng ngày)',ans:'与日俱增'},
  {pre:'一只小鸟站在树',blank:'梢',post:'上，唱个不停。',hint:'(ngọn)',ans:'梢'},
  {pre:'这种直升机可以',blank:'垂直',post:'起飞和降落。',hint:'(thẳng đứng)',ans:'垂直'},
  {pre:'天花板上',blank:'吊',post:'着一盏漂亮的灯。',hint:'(treo)',ans:'吊'},
  {pre:'船',blank:'晃',post:'得很厉害，好几个人都晕船了。',hint:'(chao đảo)',ans:'晃'},
  {pre:'只凭一张照片，还很难',blank:'断定',post:'他就是那个人。',hint:'(khẳng định)',ans:'断定'},
  {pre:'货物',blank:'连同',post:'清单一并送过去。',hint:'(cùng với, kể cả)',ans:'连同'},
  {pre:'这条山路',blank:'凹凸',post:'不平，骑车的时候要特别小心。',hint:'(lồi lõm)',ans:'凹凸'},
  {pre:'为了方便村民出行，政府在河上',blank:'修建',post:'了一座大桥。',hint:'(xây dựng)',ans:'修建'},
  {pre:'一个十岁的孩子能解出这道题，简直',blank:'不可思议',post:'。',hint:'(khó tin nổi)',ans:'不可思议'},
  {pre:'最近几天，气温一直',blank:'徘徊',post:'在三十度左右。',hint:'(dao động quanh)',ans:'徘徊'},
  {pre:'不管遇到什么困难，我们都会',blank:'一如既往',post:'地努力下去。',hint:'(trước sau như một)',ans:'一如既往'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (随即 · 宁愿 · A归A) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['他','答应了','一声','，','随即','把东西','递给了','我','。'],ans:'他答应了一声，随即把东西递给了我。',audio:'他答应了一声，随即把东西递给了我。'},
  {words:['孩子们','开出','一个小花园','，','随即','种上了','几粒','丝瓜种子','。'],ans:'孩子们开出一个小花园，随即种上了几粒丝瓜种子。',audio:'孩子们开出一个小花园，随即种上了几粒丝瓜种子。'},
  {words:['大家','一致看好','这个产品','，','总经理','随即','开始','制定方案','。'],ans:'大家一致看好这个产品，总经理随即开始制定方案。',audio:'大家一致看好这个产品，总经理随即开始制定方案。'},
  {words:['咱们','宁愿','多花点儿钱','，','也要','买个','质量好的','。'],ans:'咱们宁愿多花点儿钱，也要买个质量好的。',audio:'咱们宁愿多花点儿钱，也要买个质量好的。'},
  {words:['他','宁愿','吃苦受累','，','也','决不','求人','。'],ans:'他宁愿吃苦受累，也决不求人。',audio:'他宁愿吃苦受累，也决不求人。'},
  {words:['我','宁愿','走路','去学校','，','也不','挤','公共汽车','。'],ans:'我宁愿走路去学校，也不挤公共汽车。',audio:'我宁愿走路去学校，也不挤公共汽车。'},
  {words:['不解','归','不解','，','我','每天','都要去','看看','那几棵丝瓜','。'],ans:'不解归不解，我每天都要去看看那几棵丝瓜。',audio:'不解归不解，我每天都要去看看那几棵丝瓜。'},
  {words:['开玩笑','归','开玩笑','，','但','千万','别','过了头','。'],ans:'开玩笑归开玩笑，但千万别过了头。',audio:'开玩笑归开玩笑，但千万别过了头。'},
  {words:['生气','归','生气','，','我','还是','会','帮你的','。'],ans:'生气归生气，我还是会帮你的。',audio:'生气归生气，我还是会帮你的。'},
  {words:['瓜茎','只有','细绳','一般','粗','。'],ans:'瓜茎只有细绳一般粗。',audio:'瓜茎只有细绳一般粗。'},
  {words:['我','对丝瓜的','担心','与日俱增','。'],ans:'我对丝瓜的担心与日俱增。',audio:'我对丝瓜的担心与日俱增。'},
  {words:['那个台子','是','加固墙体时','修建的','。'],ans:'那个台子是加固墙体时修建的。',audio:'那个台子是加固墙体时修建的。'},
  {words:['丝瓜','却','一如既往地','含笑','面对','秋阳','。'],ans:'丝瓜却一如既往地含笑面对秋阳。',audio:'丝瓜却一如既往地含笑面对秋阳。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'他把上衣____裤子都弄脏了。',opts:['连同','一起','随即','宁愿'],ans:0,
   exp:'Giữa hai danh từ 上衣 — 裤子 → liên từ 连同 (做一做 ①). 一起 là phó từ, phải đứng trước động từ.'},
  {wrong:'我跟朋友____住在一所离学校很近的公寓里。',opts:['连同','随即','一起','一如既往'],ans:2,
   exp:'Trước động từ 住, có 跟朋友 → phó từ 一起 (做一做 ③). 连同 chỉ nối hai danh từ.'},
  {wrong:'缺乏父母之爱的孩子，不安全感也会____产生。',opts:['宁愿','一如既往','连同','随即'],ans:3,
   exp:'Việc thứ hai xảy ra ngay sau → 随即 + V (ví dụ của sách). 宁愿 dùng trong câu lựa chọn; 连同 nối danh từ.'},
  {wrong:'我____一辈子不结婚，也不嫁给他。',opts:['随即','宁愿','愣','连同'],ans:1,
   exp:'Khung lựa chọn ……，也不…… → 宁愿 (thà… chứ không…) (练习2 ③).'},
  {wrong:'这种产品一再降价，可____是卖不动，让人觉得不可思议。',opts:['随即','宁愿','愣','断定'],ans:2,
   exp:'愣是 + V: cứ nhất định… (trái với lẽ thường) (练习2 ②). Chữ 是 phía sau là dấu hiệu.'},
  {wrong:'看到我满分的试卷，妈妈露出了____的表情。',opts:['惊讶','沉重','疲倦','挺拔'],ans:0,
   exp:'Điểm tuyệt đối là điều bất ngờ → vẻ mặt ngạc nhiên: 惊讶的表情. 沉重 là nặng nề; 疲倦 là mệt; 挺拔 là thẳng tắp.'},
  {wrong:'这么细的茎，怎么____得起两个大瓜的重量呢？',opts:['覆盖','点缀','修建','负担'],ans:3,
   exp:'负担得起 / 负担不起 = gánh nổi / không gánh nổi. 覆盖 là che phủ; 点缀 là tô điểm; 修建 là xây dựng.'},
  {wrong:'高考越来越近了，我的担心____。',opts:['一如既往','与日俱增','朝气蓬勃','不可思议'],ans:1,
   exp:'Nỗi lo tăng lên từng ngày → 与日俱增 (làm vị ngữ cuối câu). 一如既往 là trước sau như một (không đổi).'},
  {wrong:'希望大家____地支持我们的工作。',opts:['一如既往','与日俱增','拔苗助长','不可思议'],ans:0,
   exp:'一如既往地 + V = vẫn … như trước (练习2 ⑥). Các thành ngữ khác không làm trạng ngữ cho 支持 được.'},
  {wrong:'那覆盖在墙面上的一片浓绿显得____，充满了活力。',opts:['与日俱增','一如既往','朝气蓬勃','拔苗助长'],ans:2,
   exp:'显得 + 朝气蓬勃 = trông tràn trề sức sống, hợp với 充满了活力.'},
  {wrong:'学习要循序渐进，____只会适得其反。',opts:['一如既往','拔苗助长','与日俱增','朝气蓬勃'],ans:1,
   exp:'Trái với "tuần tự từng bước" là nóng vội đốt cháy giai đoạn → 拔苗助长.'},
  {wrong:'黄色的花瓣____在绿叶之间，颜色协调，柔和精致。',opts:['覆盖','悬挂','徘徊','点缀'],ans:3,
   exp:'Vật nhỏ, đẹp làm đẹp thêm vật chính → 点缀在……之间. 覆盖 là phủ kín cả; 悬挂 là treo; 徘徊 là đi đi lại lại.'},
  {wrong:'一夜大雪，厚厚的白雪____了整个山谷。',opts:['点缀','吊','覆盖','滋润'],ans:2,
   exp:'Tuyết dày phủ kín toàn bộ → 覆盖. 点缀 chỉ một ít điểm xuyết; 吊 là treo; 滋润 là làm ẩm.'},
  {wrong:'他在老师办公室门口____了半天，始终没敢进去。',opts:['徘徊','晃','坠','照耀'],ans:0,
   exp:'Đi qua đi lại vì do dự → 徘徊. 晃 là lắc lư (vật); 坠 là rơi; 照耀 là chiếu sáng.'},
  {wrong:'听到这个不幸的消息，大家的心情都十分____。',opts:['肥沃','柔和','挺拔','沉重'],ans:3,
   exp:'心情沉重 = lòng nặng trĩu. 肥沃 chỉ đất; 柔和 là dịu dàng; 挺拔 là thẳng tắp.'},
  {wrong:'这里的土地____，种什么长什么。',opts:['茂盛','肥沃','挺拔','陡峭'],ans:1,
   exp:'Đất đai → 肥沃 (màu mỡ). 茂盛 dùng cho cây cỏ, không dùng cho đất.'},
  {wrong:'院子里的树长得十分____，夏天可以在树下乘凉。',opts:['肥沃','陡峭','茂盛','凹凸'],ans:2,
   exp:'Cây cối xanh tốt, sum suê → 茂盛. 肥沃 chỉ dùng cho đất; 陡峭 là dốc; 凹凸 là lồi lõm.'},
  {wrong:'根据现场留下的脚印，警察____小偷是从窗户进来的。',opts:['断定','决定','协调','节制'],ans:0,
   exp:'Suy xét chứng cứ rồi kết luận chắc chắn → 断定 + mệnh đề. 决定 là quyết định (làm gì), không dùng để kết luận sự thật.'},
  {wrong:'吃东西要有____，不能想吃多少就吃多少。',opts:['协调','节制','生机','分量'],ans:1,
   exp:'有节制 = có chừng mực. 协调 là hài hòa; 生机 là sức sống; 分量 là trọng lượng.'},
  {wrong:'运动会由体育老师负责____各班的工作。',opts:['节制','断定','负担','协调'],ans:3,
   exp:'协调 + 工作 = điều phối công việc giữa các bên. 节制 là hạn chế; 负担 là gánh chịu.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 18 + ôn từ HSK 6 bài 1–17 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cô giáo bước vào lớp, rồi ngay sau đó công bố một tin khiến mọi người kinh ngạc.',zh:'老师走进教室，随即宣布了一个令人惊讶的消息。',py:'Lǎoshī zǒujìn jiàoshì, suíjí xuānbùle yí ge lìng rén jīngyà de xiāoxi.',goiY:['随即','惊讶'],giai:'随即 = ngay sau đó, đứng trước động từ của vế SAU (không đặt đầu câu độc lập); "khiến mọi người kinh ngạc" = 令人惊讶 làm định ngữ, cần 的.'},
  {vi:'Cuối tuần tôi thà ở nhà cùng bà trồng mướp, chứ không muốn đi dạo trung tâm thương mại.',zh:'周末我宁愿在家陪奶奶种丝瓜，也不想去商场逛街。',py:'Zhōumò wǒ nìngyuàn zài jiā péi nǎinai zhòng sīguā, yě bù xiǎng qù shāngchǎng guàngjiē.',goiY:['宁愿……也不……','丝瓜'],giai:'"Thà A chứ không B" = 宁愿 A，也不 B — 也 bắt buộc có ở vế sau; không dịch "thà" bằng 宁静 hay 愿意.'},
  {vi:'Vất vả thì vất vả thật, nhưng nhìn mấy khóm hoa mình trồng xanh tốt như vậy, trong lòng cậu ấy vẫn rất mãn nguyện.',zh:'辛苦归辛苦，看到自己种的几株花长得那么茂盛，他心里还是很欣慰。',py:'Xīnkǔ guī xīnkǔ, kàndào zìjǐ zhòng de jǐ zhū huā zhǎng de nàme màoshèng, tā xīnli háishi hěn xīnwèi.',goiY:['辛苦归辛苦','株','茂盛'],giai:'"A thì A thật, nhưng…" = A归A，…还是…… (nhượng bộ rồi chuyển ý); 欣慰 ôn HSK 6 bài 2.'},
  {vi:'Dù lần vấp ngã này là một đòn nặng nề với cô ấy, nhưng cô ấy vẫn chăm chỉ luyện tập như trước sau như một.',zh:'尽管这次挫折对她是一个沉重的打击，她却一如既往地刻苦训练。',py:'Jǐnguǎn zhè cì cuòzhé duì tā shì yí ge chénzhòng de dǎjī, tā què yìrú-jìwǎng de kèkǔ xùnliàn.',goiY:['尽管……却……','沉重','一如既往'],giai:'"Đòn nặng nề" = 沉重的打击, KHÔNG dịch "trầm trọng" thành 沉重 theo nghĩa tiếng Việt; 一如既往地 làm trạng ngữ, có 地. 挫折 ôn bài 7.'},
  {vi:'Kỳ thi đại học càng đến gần, áp lực của các bạn tăng lên từng ngày, chẳng trách dạo này ai trông cũng mệt mỏi.',zh:'高考越来越近，同学们的压力与日俱增，难怪最近大家都显得很疲倦。',py:'Gāokǎo yuè lái yuè jìn, tóngxuémen de yālì yǔrì-jùzēng, nánguài zuìjìn dàjiā dōu xiǎnde hěn píjuàn.',goiY:['与日俱增','难怪','疲倦'],giai:'与日俱增 đã có nghĩa "ngày càng tăng" → không thêm 越来越 trước nó; 难怪 đứng đầu vế sau, nêu điều nay đã hiểu nguyên nhân.'},
  {vi:'Nếu chơi điện thoại không có chừng mực, không những ảnh hưởng đến việc học mà còn tạo thêm gánh nặng tâm lý cho bố mẹ.',zh:'倘若玩手机没有节制，不但会影响学习，而且会给父母增加心理负担。',py:'Tǎngruò wán shǒujī méiyǒu jiézhì, búdàn huì yǐngxiǎng xuéxí, érqiě huì gěi fùmǔ zēngjiā xīnlǐ fùdān.',goiY:['倘若','节制','不但……而且……','负担'],giai:'倘若 (ôn bài 4) = nếu như, văn viết hơn 如果; 负担 ở đây là DANH TỪ "gánh nặng" (không thay bằng 承担).'},
  {vi:'Tôi vốn quả quyết cậu ấy sẽ không đến dự thi, không ngờ cậu ấy không những đến mà còn giành giải nhất, thật không thể tưởng tượng nổi.',zh:'我原本断定他不会来参加比赛，不料他不仅来了，还得了第一名，真是不可思议。',py:'Wǒ yuánběn duàndìng tā bú huì lái cānjiā bǐsài, búliào tā bùjǐn lái le, hái déle dì-yī míng, zhēn shì bùkě-sīyì.',goiY:['断定','不料','不仅……还……','不可思议'],giai:'不料 (ôn bài 4) = không ngờ, đứng đầu vế nêu kết quả trái dự đoán; 断定 + mệnh đề (không cần 说).'},
  {vi:'Thay vì suốt ngày ở trong phòng chơi điện thoại, chi bằng ra ban công gieo vài hạt mướp, ngắm chúng từng ngày lớn lên xanh tốt.',zh:'与其整天待在屋里玩手机，不如去阳台上种几粒丝瓜种子，看着它们一天天长得茂盛起来。',py:'Yǔqí zhěngtiān dāi zài wū li wán shǒujī, bùrú qù yángtái shang zhòng jǐ lì sīguā zhǒngzi, kànzhe tāmen yìtiāntiān zhǎng de màoshèng qǐlái.',goiY:['与其……不如……','粒','茂盛'],giai:'与其 A 不如 B = thay vì A, chi bằng B (chọn B); "vài hạt" = 几粒, lượng từ 粒 cho hạt giống.'},
  {vi:'Cậu ấy lượn đi lượn lại trước cửa phòng thi rất lâu, thà bỏ lỡ cơ hội này, chứ không muốn tham gia kỳ thi một cách qua loa khi chưa chuẩn bị xong.',zh:'他在考场门口徘徊了很久，宁愿放弃这次机会，也不愿意在没准备好的情况下草率地参加考试。',py:'Tā zài kǎochǎng ménkǒu páihuáile hěn jiǔ, nìngyuàn fàngqì zhè cì jīhuì, yě bú yuànyì zài méi zhǔnbèi hǎo de qíngkuàng xià cǎoshuài de cānjiā kǎoshì.',goiY:['徘徊','宁愿……也不……','草率'],giai:'徘徊 = đi đi lại lại (vì do dự), KHÔNG phải "bồi hồi"; 在……的情况下 = trong tình huống…; 草率 ôn bài 4.'},
  {vi:'Không vui thì không vui, nhưng đã mọi người bầu cậu ấy làm lớp trưởng, chúng ta nên vẫn như trước phối hợp tốt công việc các nhóm, kẻo ảnh hưởng tiến độ cả lớp.',zh:'不满归不满，既然大家选了他当班长，我们就应该一如既往地协调好各组的工作，免得影响全班的进度。',py:'Bùmǎn guī bùmǎn, jìrán dàjiā xuǎnle tā dāng bānzhǎng, wǒmen jiù yīnggāi yìrú-jìwǎng de xiétiáo hǎo gè zǔ de gōngzuò, miǎnde yǐngxiǎng quán bān de jìndù.',goiY:['不满归不满','既然……就……','协调','免得'],giai:'Ba vế: nhượng bộ (A归A) → lý do (既然……就) → mục đích tránh (免得, ôn bài 14). 协调 là động từ "điều phối", đọc xiétiáo.'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Bọn trẻ vỡ ra một khu vườn nhỏ, ngay sau đó trồng mấy khóm hoa và gieo mấy hạt mướp.',zh:'孩子们开出一个小花园，随即种上了几株花和几粒丝瓜种子。',py:'Háizimen kāichū yí ge xiǎo huāyuán, suíjí zhòngshangle jǐ zhū huā hé jǐ lì sīguā zhǒngzi.',goiY:['随即 = ngay sau đó','株 = khóm, cây','粒 = hạt'],giai:'随即 nối hai hành động liền nhau — dịch "ngay sau đó / rồi liền"; 株 và 粒 là lượng từ, dịch theo vật: "khóm hoa", "hạt giống".'},
  {vi:'Đất tuy không màu mỡ lắm, nhưng có nước tưới tắm và nắng chiếu rọi, cây mướp chẳng mấy chốc đã nhú lên.',zh:'土壤虽然不太肥沃，但是有水的滋润和阳光的照耀，丝瓜很快就冒了出来。',py:'Tǔrǎng suīrán bú tài féiwò, dànshì yǒu shuǐ de zīrùn hé yángguāng de zhàoyào, sīguā hěn kuài jiù màole chūlái.',goiY:['肥沃 = màu mỡ','滋润 = tưới tắm','照耀 = chiếu rọi'],giai:'水的滋润, 阳光的照耀 là động từ danh hóa — dịch thành cụm động từ tiếng Việt ("có nước tưới tắm") cho tự nhiên, đừng dịch "sự tưới tắm của nước".'},
  {vi:'Người xưa cứ nhất định bịa ra chuyện "kéo mạ cho mau lớn", thật có phần quá lời; nếu là tôi, tôi thà dùng một phép so sánh khác.',zh:'古人愣是编出了拔苗助长的故事，未免太夸张了；要是我，宁愿用别的比喻。',py:'Gǔrén lèng shì biānchūle bámiáo-zhùzhǎng de gùshi, wèimiǎn tài kuāzhāng le; yàoshi wǒ, nìngyuàn yòng biéde bǐyù.',goiY:['愣是 = cứ nhất định','未免 = có phần hơi','宁愿 = thà'],giai:'愣是 mang ý "làm trái lẽ thường" — dịch "cứ nhất định / lại cứ"; 未免 (ôn bài 4) dịch "có phần / hơi… quá".'},
  {vi:'Khó hiểu thì khó hiểu, nhưng ngày nào làm việc mệt rồi, tác giả cũng đều ra ngắm mấy cây mướp ấy.',zh:'不解归不解，作者每天工作疲倦了，都要去看看那几棵丝瓜。',py:'Bùjiě guī bùjiě, zuòzhě měi tiān gōngzuò píjuàn le, dōu yào qù kànkan nà jǐ kē sīguā.',goiY:['不解归不解 = khó hiểu thì khó hiểu','疲倦 = mệt mỏi'],giai:'A归A dịch "A thì A (thật), nhưng…" — phải thêm "nhưng" ở vế sau dù câu Trung không có 但是.'},
  {vi:'Thân dây mướp chỉ to bằng sợi dây mảnh, vậy mà chuyển được đủ chất dinh dưỡng, khiến dây vươn thẳng, lá xanh tốt.',zh:'瓜茎只有细绳一般粗，却能输送足够的养料，使得瓜茎挺拔，叶子茂盛。',py:'Guājīng zhǐyǒu xì shéng yìbān cū, què néng shūsòng zúgòu de yǎngliào, shǐde guājīng tǐngbá, yèzi màoshèng.',goiY:['茎 = thân dây','挺拔 = vươn thẳng','茂盛 = xanh tốt'],giai:'只有……一般粗 = chỉ to bằng…; 却 dịch "vậy mà" để thấy sự trái ngược; 使得 = khiến cho.'},
  {vi:'Mảng xanh đậm phủ trên mặt tường xi-măng ấy trông tràn trề nhựa sống, đầy sinh khí.',zh:'那覆盖在水泥墙面上的一片浓绿，显得朝气蓬勃，充满了生机。',py:'Nà fùgài zài shuǐní qiángmiàn shang de yí piàn nónglǜ, xiǎnde zhāoqì-péngbó, chōngmǎnle shēngjī.',goiY:['覆盖 = phủ','朝气蓬勃 = tràn trề nhựa sống','生机 = sinh khí'],giai:'Định ngữ dài 覆盖在水泥墙面上的 đặt SAU danh từ khi dịch ("mảng xanh phủ trên tường…"); 朝气蓬勃 không dịch "bồng bột".'},
  {vi:'Quả càng lớn càng nặng, thân dây mảnh mai dường như không gánh nổi sức nặng của nó, lòng tác giả cũng bất giác nặng trĩu theo.',zh:'瓜越长越大，细细的瓜茎好像负担不起它的分量，作者的心也不由得沉重起来。',py:'Guā yuè zhǎng yuè dà, xìxì de guājīng hǎoxiàng fùdān bu qǐ tā de fènliàng, zuòzhě de xīn yě bùyóude chénzhòng qǐlái.',goiY:['负担不起 = không gánh nổi','分量 = sức nặng','沉重 = nặng trĩu'],giai:'沉重 = nặng nề (KHÔNG phải "trầm trọng"); 不由得 (ôn bài 2) = bất giác, không kìm được.'},
  {vi:'Quả đầu tiên rất biết chừng mực, còn hai quả ngoài cửa sổ tầng ba lại càng lớn càng to, nỗi lo của tác giả mỗi ngày một tăng.',zh:'最初的瓜很有节制，而三楼窗外的两个瓜却越长越粗，作者的担心与日俱增。',py:'Zuìchū de guā hěn yǒu jiézhì, ér sān lóu chuāng wài de liǎng ge guā què yuè zhǎng yuè cū, zuòzhě de dānxīn yǔrì-jùzēng.',goiY:['节制 = chừng mực','而……却…… = còn… thì lại…','与日俱增 = tăng từng ngày'],giai:'而 nối hai vế đối lập; 很有节制 là nhân hóa quả mướp → "rất biết chừng mực".'},
  {vi:'Tác giả quả quyết quả mướp treo thẳng đứng giữa không trung sớm muộn cũng sẽ rơi, không ngờ nó lại nằm trên một cái bệ gồ ghề.',zh:'作者断定那个垂直地吊在空中的瓜迟早会坠落，不料它却躺在了一个凹凸不平的台子上。',py:'Zuòzhě duàndìng nàge chuízhí de diào zài kōngzhōng de guā chízǎo huì zhuìluò, búliào tā què tǎng zài le yí ge āotū bù píng de táizi shang.',goiY:['断定 = quả quyết','垂直 = thẳng đứng','坠落 = rơi xuống','不料 = không ngờ'],giai:'Chủ ngữ của 断定 là cả mệnh đề dài 那个……的瓜迟早会坠落 — dịch trọn cụm rồi mới nối vế 不料 (ôn bài 4).'},
  {vi:'Tác giả đi đi lại lại dưới giàn mướp, càng nghĩ càng thấy khó tin, còn cây mướp thì vẫn như ngày nào mỉm cười đón nắng thu, như thể chưa từng có chuyện gì xảy ra.',zh:'作者徘徊在丝瓜下面，越想越觉得不可思议，丝瓜却一如既往地含笑面对秋阳，仿佛什么也没发生过。',py:'Zuòzhě páihuái zài sīguā xiàmiàn, yuè xiǎng yuè juéde bùkě-sīyì, sīguā què yìrú-jìwǎng de hánxiào miànduì qiūyáng, fǎngfú shénme yě méi fāshēngguo.',goiY:['徘徊 = đi đi lại lại','不可思议 = khó tin','一如既往 = vẫn như ngày nào','仿佛 = như thể'],giai:'徘徊 là động tác đi lại, không dịch "bồi hồi"; 一如既往 dịch linh hoạt "vẫn như ngày nào" cho hợp văn miêu tả.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 195): viết văn 400 chữ theo đề "我养过的……"
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:400,
  de:'你自己养过花或别的植物吗？请根据自己的经历描述一种植物生长的过程，比如植物的生长环境、生长过程（种下种子、发芽、开花、结果）、植物带给你的感受或启发等。请以“我养过的……”为题，字数不少于400字。',
  prompt:'Em đã từng tự trồng hoa hoặc một loài cây nào khác chưa? Hãy dựa vào trải nghiệm của bản thân, miêu tả quá trình sinh trưởng của một loài cây, ví dụ: môi trường sinh trưởng, quá trình sinh trưởng (gieo hạt, nảy mầm, ra hoa, kết trái), những cảm nhận hay gợi mở mà cây mang lại cho em… Hãy lấy "我养过的……" (…mà tôi từng trồng) làm nhan đề, viết không dưới 400 chữ.',
  dan:[
    {hoi:'你养过什么植物？（以“我养过的……”为题）',goiY:'①题目：我养过的…… ②什么时候、在哪儿开始养？随即种下了……'},
    {hoi:'这种植物的生长环境怎么样？',goiY:'土壤、水、阳光……（参考练习5：土壤不是很肥沃，但有水的滋润，阳光的照耀）'},
    {hoi:'它的生长过程是怎样的？',goiY:'①种下种子 ②发芽 ③开花 ④结果'},
    {hoi:'这种植物带给你什么感受或启发？',goiY:'①养的时候我担心……，没想到…… ②通过养……，我明白了……'}
  ],
  tuNen:['随即','宁愿','A归A','土壤','滋润','照耀','茂盛','点缀','与日俱增','不可思议'],
  cauTruc:[
    {ten:'以“我养过的……”为题', nhan:'Nhan đề', vd:'（题目：我养过的番茄）', khi:'Ghi đúng nhan đề đề bài yêu cầu ở dòng đầu.'},
    {ten:'……时，我……，随即种下了……', nhan:'Mở bài · 随即', vd:'我在阳台上摆了三个花盆，随即种下了几粒种子。', khi:'Nêu thời gian, nơi trồng, loại cây — dùng điểm ngữ pháp 随即 (dòng 1 dàn ý).'},
    {ten:'……虽然不……，但有……的滋润，……的照耀', nhan:'Môi trường', vd:'阳台上的土壤不是很肥沃，但有水的滋润，阳光的照耀，……', khi:'Tả môi trường sinh trưởng: đất, nước, nắng (dòng 2).'},
    {ten:'没几天，……；转眼间，……；又过了几天，……', nhan:'Trình tự thời gian', vd:'没几天，小芽就冒了出来；转眼间，茎已经长到半米高；又过了几天，它开花了。', khi:'Kể quá trình gieo hạt → nảy mầm → ra hoa → kết trái (dòng 3).'},
    {ten:'A归A，……还是……', nhan:'A归A', vd:'担心归担心，我还是每天放学后都去给它浇水。', khi:'Nêu nỗi lo mà vẫn kiên trì chăm sóc — điểm ngữ pháp 3.'},
    {ten:'我断定……，没想到……，真是不可思议', nhan:'Điểm nhấn bất ngờ', vd:'我断定细茎会被吹断，没想到第二天它依然好好地站在那里，真是不可思议！', khi:'Tạo một chi tiết bất ngờ như quả mướp trong bài khoá.'},
    {ten:'通过……，我明白了……；宁愿……，也不……', nhan:'Kết bài · 宁愿', vd:'通过养番茄，我明白了成长需要耐心，我宁愿慢慢地等，也不愿意拔苗助长。', khi:'Nêu cảm nhận, gợi mở (dòng 4) — dùng điểm ngữ pháp 宁愿.'}
  ],
  checklist:[
    'Đã ghi nhan đề theo mẫu "我养过的……" và viết đủ ít nhất 400 chữ Hán chưa (không đếm dấu câu)?',
    'Có đủ 4 ý của đề: loại cây và lúc bắt đầu trồng — môi trường sinh trưởng — quá trình (gieo hạt, nảy mầm, ra hoa, kết trái) — cảm nhận / gợi mở chưa?',
    'Đã dùng đủ 3 điểm ngữ pháp của bài (随即, 宁愿……也不/也要……, A归A) chưa?',
    'Đã dùng ít nhất 6 từ mới của bài (土壤, 滋润, 照耀, 茂盛, 点缀, 与日俱增, 断定, 不可思议…) chưa?',
    'Có kể trải nghiệm THẬT, cụ thể (thời gian, chi tiết, cảm xúc) và có từ nối thời gian (没几天, 转眼间, 又过了几天, 不久) cho mạch lạc chưa?'
  ],
  model:{
    zh:'（题目：我养过的番茄）去年春天，爷爷送给我一小包番茄种子。我在阳台上摆了三个花盆，随即种下了几粒种子。阳台上的土壤不是很肥沃，但有水的滋润，阳光的照耀，没几天，嫩绿的小芽就从土里冒了出来。我惊讶地发现，它们好像每时每刻都在长大。转眼间，番茄苗已经长到了半米高，茎越来越挺拔，叶子也十分茂盛。又过了几天，番茄开花了，一朵朵黄色的小花点缀在绿叶之间，颜色协调，好看极了。不久，小花变成了一个个青色的小果子。果子越长越大，分量也越来越重，把细细的茎坠得弯弯的。我担心茎负担不起果子的重量，心里的担心与日俱增。妈妈笑着对我说：“植物有植物的办法，你别着急。”担心归担心，我还是每天放学后都去看看它们，给它们浇水。有一天晚上刮起了大风，我断定那几根细茎一定会被吹断。没想到第二天一早，番茄苗依然好好地站在那里，青色的果子也开始变红了，真是不可思议！一个月以后，我们全家吃上了我亲手种的番茄，那酸酸甜甜的味道，我至今难以忘怀。通过养番茄，我明白了一个道理：植物的成长需要时间，人的成长也是一样。我宁愿耐心地慢慢等，也不愿意拔苗助长。以后，我还会一如既往地种下去。',
    py:'(Tímù: Wǒ yǎngguo de fānqié) Qùnián chūntiān, yéye sòng gěi wǒ yì xiǎo bāo fānqié zhǒngzi. Wǒ zài yángtái shang bǎile sān ge huāpén, suíjí zhòngxiàle jǐ lì zhǒngzi. Yángtái shang de tǔrǎng bú shì hěn féiwò, dàn yǒu shuǐ de zīrùn, yángguāng de zhàoyào, méi jǐ tiān, nènlǜ de xiǎo yá jiù cóng tǔ li màole chūlái. Wǒ jīngyà de fāxiàn, tāmen hǎoxiàng měi shí měi kè dōu zài zhǎngdà. Zhuǎnyǎn jiān, fānqié miáo yǐjīng zhǎngdàole bàn mǐ gāo, jīng yuè lái yuè tǐngbá, yèzi yě shífēn màoshèng. Yòu guòle jǐ tiān, fānqié kāihuā le, yì duǒduǒ huángsè de xiǎo huā diǎnzhuì zài lǜyè zhījiān, yánsè xiétiáo, hǎokàn jí le. Bùjiǔ, xiǎo huā biànchéngle yí gègè qīngsè de xiǎo guǒzi. Guǒzi yuè zhǎng yuè dà, fènliàng yě yuè lái yuè zhòng, bǎ xìxì de jīng zhuì de wānwān de. Wǒ dānxīn jīng fùdān bu qǐ guǒzi de zhòngliàng, xīnli de dānxīn yǔrì-jùzēng. Māma xiàozhe duì wǒ shuō: "Zhíwù yǒu zhíwù de bànfǎ, nǐ bié zháojí." Dānxīn guī dānxīn, wǒ háishi měi tiān fàngxué hòu dōu qù kànkan tāmen, gěi tāmen jiāo shuǐ. Yǒu yì tiān wǎnshang guāqǐle dà fēng, wǒ duàndìng nà jǐ gēn xì jīng yídìng huì bèi chuīduàn. Méi xiǎngdào dì-èr tiān yìzǎo, fānqié miáo yīrán hǎohǎo de zhàn zài nàlǐ, qīngsè de guǒzi yě kāishǐ biàn hóng le, zhēn shì bùkě-sīyì! Yí ge yuè yǐhòu, wǒmen quán jiā chīshangle wǒ qīnshǒu zhòng de fānqié, nà suānsuān-tiántián de wèidao, wǒ zhìjīn nányǐ wànghuái. Tōngguò yǎng fānqié, wǒ míngbaile yí ge dàoli: zhíwù de chéngzhǎng xūyào shíjiān, rén de chéngzhǎng yě shì yíyàng. Wǒ nìngyuàn nàixīn de mànmàn děng, yě bú yuànyì bámiáo-zhùzhǎng. Yǐhòu, wǒ hái huì yìrú-jìwǎng de zhòng xiàqù.',
    vn:'(Nhan đề: Cây cà chua tôi từng trồng) Mùa xuân năm ngoái, ông tặng tôi một gói nhỏ hạt giống cà chua. Tôi bày ba chậu hoa trên ban công, rồi liền gieo mấy hạt xuống. Đất trên ban công không màu mỡ lắm, nhưng có nước tưới tắm, có nắng chiếu rọi, chưa được mấy ngày, những mầm non xanh mơn mởn đã nhú lên khỏi đất. Tôi kinh ngạc phát hiện ra, chúng dường như lúc nào cũng đang lớn. Chớp mắt một cái, cây cà chua đã cao nửa mét, thân ngày càng thẳng, lá cũng rất xanh tốt. Lại qua mấy hôm, cà chua ra hoa, từng bông hoa nhỏ màu vàng điểm xuyết giữa lá xanh, màu sắc hài hòa, đẹp vô cùng. Không lâu sau, hoa nhỏ đã thành từng quả con màu xanh. Quả càng lớn càng to, càng ngày càng nặng, kéo thân cây mảnh mai trĩu cong xuống. Tôi lo thân cây không gánh nổi sức nặng của quả, nỗi lo trong lòng mỗi ngày một tăng. Mẹ cười bảo tôi: "Cây cối có cách của cây cối, con đừng sốt ruột." Lo thì lo, nhưng ngày nào tan học tôi cũng ra ngắm chúng, tưới nước cho chúng. Có một tối nổi gió to, tôi quả quyết mấy thân cây mảnh ấy nhất định sẽ bị thổi gãy. Không ngờ sáng sớm hôm sau, cây cà chua vẫn đứng vững vàng ở đó, những quả xanh cũng bắt đầu chuyển đỏ, thật không thể tưởng tượng nổi! Một tháng sau, cả nhà tôi được ăn cà chua do chính tay tôi trồng, cái vị chua chua ngọt ngọt ấy đến giờ tôi vẫn khó mà quên được. Qua việc trồng cà chua, tôi hiểu ra một đạo lý: cây cối lớn lên cần có thời gian, con người trưởng thành cũng vậy. Tôi thà kiên nhẫn chờ đợi từ từ, chứ không muốn "kéo mạ cho mau lớn". Sau này, tôi vẫn sẽ tiếp tục trồng như trước sau như một.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng — bấm loa nghe câu hỏi, nhìn gợi ý bên phải, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 土壤 · 滋润 · 照耀 · 茂盛 · 悬挂 · 负担 · 与日俱增 · 断定 · 不可思议 · 一如既往.',
  questions:[
    {q_zh:'描述一下丝瓜生长的环境。',
     q_vn:'Hãy miêu tả môi trường sinh trưởng của cây mướp.',
     hint:'土壤、水、阳光',
     sample:'春天，孩子们在楼旁空地上开出一个小花园，随即种下了几粒丝瓜种子。那里的土壤不是很肥沃，但有水的滋润，阳光的照耀，所以没几天，丝瓜就从土里冒了出来。',
     sample_vn:'Mùa xuân, bọn trẻ vỡ một khu vườn nhỏ trên khoảnh đất trống cạnh tòa nhà, rồi liền gieo mấy hạt mướp. Đất ở đó không màu mỡ lắm, nhưng có nước tưới tắm, có nắng chiếu rọi, nên chưa được mấy ngày cây mướp đã nhú lên khỏi đất.',
     note:'Đi đủ ba gợi ý 土壤 → 水 → 阳光; khung 虽然 / 不是很……，但有……的滋润，……的照耀 rất gọn.'},
    {q_zh:'说一说丝瓜生长的过程。',
     q_vn:'Hãy kể quá trình sinh trưởng của cây mướp.',
     hint:'①种子→从土里冒出来 ②瓜茎爬楼 ③开花→丝瓜→最初的瓜→后来的两个瓜→最下面的瓜',
     sample:'种子种下没几天，丝瓜就从土里冒了出来。它长得很快，转眼间，瓜茎就从一楼爬上了二楼，又从二楼爬上了三楼。又过了几天，丝瓜开了黄花，黄花变成了小丝瓜。先是长出了最初的一个瓜，后来三楼窗外又长出了两个瓜，最后，两个大瓜下面的瓜茎末梢上又长出来一个瓜。',
     sample_vn:'Hạt gieo xuống chưa được mấy ngày, cây mướp đã nhú lên. Nó lớn rất nhanh, chớp mắt một cái, thân dây đã bò từ tầng một lên tầng hai, rồi từ tầng hai lên tầng ba. Qua mấy hôm, cây ra hoa vàng, hoa vàng thành quả mướp nhỏ. Đầu tiên mọc ra quả thứ nhất, sau đó ngoài cửa sổ tầng ba lại mọc thêm hai quả, cuối cùng, trên đầu mút thân dây phía dưới hai quả to lại mọc thêm một quả nữa.',
     note:'Kể theo đúng chuỗi mũi tên của gợi ý; dùng từ nối thời gian 没几天 → 转眼间 → 又过了几天 → 先是……后来……最后…….'},
    {q_zh:'描述一下“我”对丝瓜担心的过程。',
     q_vn:'Hãy miêu tả quá trình lo lắng của "tôi" đối với cây mướp.',
     hint:'①最初长出来的瓜： ②三楼那家窗外的两个瓜： ③两个大瓜瓜茎末梢上长出来的瓜：',
     sample:'最初长出来的瓜悬挂在空中，我担心细细的瓜茎负担不起它的重量，可是它很有节制，长到一定程度就不长了。三楼窗外的两个瓜越长越粗，我的担心与日俱增，没想到它们弯了起来，躺在了窗台上。最下面的瓜垂直地吊在空中，我断定它会坠落下来，可它却躺在了一个凹凸不平的台子上。',
     sample_vn:'Quả đầu tiên treo lơ lửng giữa không trung, tôi lo thân dây mảnh không gánh nổi sức nặng của nó, nhưng nó rất biết chừng mực, lớn đến một mức thì thôi không lớn nữa. Hai quả ngoài cửa sổ tầng ba càng lớn càng to, nỗi lo của tôi mỗi ngày một tăng, không ngờ chúng cong lên, nằm trên bệ cửa sổ. Quả dưới cùng treo thẳng đứng giữa không trung, tôi quả quyết nó sẽ rơi xuống, vậy mà nó lại nằm trên một cái bệ gồ ghề.',
     note:'Mỗi quả một câu theo khung "lo lắng → nhưng kết quả bất ngờ": 我担心……，可是…… / 没想到…… / 我断定……，可它却…….'},
    {q_zh:'丝瓜给“我”什么感觉？',
     q_vn:'Cây mướp mang lại cho "tôi" cảm giác gì?',
     hint:'①有思想、有行动 ②靠什么……',
     sample:'真是不可思议！我觉得丝瓜好像有思想，能考虑问题，还有行动：它能让大瓜停止生长，还能给瓜找到承担重量的地方。可是丝瓜靠什么来思考，靠什么来指导自己的行动呢？我越想越糊涂，而丝瓜却一如既往地含笑面对秋阳。',
     sample_vn:'Thật không thể tưởng tượng nổi! Tôi cảm thấy cây mướp dường như có tư duy, biết suy xét vấn đề, lại còn biết hành động: nó có thể khiến quả to ngừng lớn, còn tìm được chỗ đỡ sức nặng cho quả. Nhưng cây mướp dựa vào đâu để suy nghĩ, dựa vào đâu để chỉ dẫn hành động của mình? Tôi càng nghĩ càng mù mờ, còn cây mướp thì vẫn như ngày nào mỉm cười đón nắng thu.',
     note:'Mở bằng câu cảm thán 真是不可思议!; nêu hai "hành động" của mướp; kết bằng câu hỏi 靠什么…… và hình ảnh 一如既往地含笑面对秋阳.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 18.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 18',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你阳台上种的是什么？长得这么茂盛！'},
            {sp:'男',zh:'是丝瓜。土壤其实不怎么肥沃，可阳台上阳光充足，我又天天浇水，所以长得特别快。'}],
     q:'丝瓜为什么长得这么快？',qvn:'Vì sao cây mướp lớn nhanh như vậy?',
     opts:['土壤非常肥沃','用了很多化肥','阳光充足，天天浇水','有专人照顾'],ans:2,
     why:'Người đàn ông nói 土壤其实不怎么肥沃 (đất không màu mỡ lắm) — loại A; lý do là 阳光充足，我又天天浇水.',
     words:['茂盛','丝瓜','土壤','肥沃']},

    {n:2,
     lines:[{sp:'男',zh:'小王，听说你宁愿每天骑一个小时自行车，也不坐地铁？'},
            {sp:'女',zh:'是啊，早上地铁太挤了，骑车还能顺便锻炼身体。'}],
     q:'女的为什么不坐地铁？',qvn:'Vì sao người phụ nữ không đi tàu điện ngầm?',
     opts:['地铁太挤','地铁太贵','地铁站太远','她不会坐地铁'],ans:0,
     why:'早上地铁太挤了 là lý do chính; 顺便锻炼身体 chỉ là lợi ích thêm.',
     words:['宁愿']},

    {n:3,
     lines:[{sp:'女',zh:'你怎么满脸疲倦？昨晚又熬夜了？'},
            {sp:'男',zh:'累归累，作业总算都写完了，今晚可以好好睡一觉了。'}],
     q:'关于男的，可以知道什么？',qvn:'Về người đàn ông, có thể biết điều gì?',
     opts:['作业还没写完','身体不舒服','明天要考试','很累，但作业写完了'],ans:3,
     why:'累归累 = mệt thì mệt, 作业总算都写完了 = cuối cùng cũng làm xong bài tập. A归A nhượng bộ rồi chuyển ý.',
     words:['疲倦']},

    {n:4,
     lines:[{sp:'男',zh:'楼下窗户外面那个台子是什么时候修建的？'},
            {sp:'女',zh:'前几年加固墙体的时候修的，现在正好可以放几盆花。'}],
     q:'那个台子现在有什么用？',qvn:'Cái bệ đó bây giờ dùng để làm gì?',
     opts:['加固墙体','放花盆','晒衣服','给孩子们玩儿'],ans:1,
     why:'加固墙体 là lý do xây (trước kia); 现在正好可以放几盆花 là công dụng hiện nay — câu hỏi hỏi 现在.',
     words:['修建']},

    {n:5,
     lines:[{sp:'女',zh:'王老师一走进教室，就宣布下周要期中考试。'},
            {sp:'男',zh:'是吗？大家一定很惊讶吧？'},
            {sp:'女',zh:'可不是，教室里随即就议论开了。'}],
     q:'听到消息后，同学们怎么样？',qvn:'Nghe tin xong, các bạn học sinh thế nào?',
     opts:['都很高兴','马上议论起来','一句话也不说','去找王老师'],ans:1,
     why:'随即就议论开了 = ngay lập tức bàn tán xôn xao (V + 开了 = bắt đầu và lan ra).',
     words:['惊讶','随即']},

    {n:6,
     lines:[{sp:'男',zh:'这盆花的花瓣怎么掉了这么多？'},
            {sp:'女',zh:'前几天刮大风，花盆在窗台上一直晃来晃去，我断定就是那时候掉的。'}],
     q:'女的认为花瓣为什么掉了？',qvn:'Người phụ nữ cho rằng vì sao cánh hoa rụng?',
     opts:['浇水太多','阳光太强','被猫碰掉了','被大风吹得晃来晃去'],ans:3,
     why:'刮大风，花盆一直晃来晃去，我断定就是那时候掉的 → do gió to làm chậu lắc lư.',
     words:['花瓣','晃','断定']},

    {n:7,
     lines:[{sp:'女',zh:'你借我的那本小说，记得连同那本词典一起还给我啊。'},
            {sp:'男',zh:'放心吧，我明天一并带过来。'}],
     q:'女的让男的做什么？',qvn:'Người phụ nữ bảo người đàn ông làm gì?',
     opts:['把小说和词典一起还回来','帮她买一本词典','帮她借一本小说','明天陪她去图书馆'],ans:0,
     why:'连同那本词典一起还给我 = trả cả cuốn từ điển cùng lúc; 一并 = gộp luôn một thể.',
     words:['连同']},

    {n:8,
     lines:[{sp:'男',zh:'我奶奶七十多岁了，每天还要在小院里种菜。有人劝她：“您年纪大了，别那么辛苦了。”她却说：“我宁愿累一点儿，也不愿意整天闲着。”奶奶种的丝瓜长得特别茂盛。有一次，一个大瓜悬挂在墙外，我断定它迟早会掉下来，没想到奶奶早就在下面放了一个旧木箱，大瓜正好躺在上面。原来，奶奶比丝瓜还“有思想”呢。'}],
     q:'那个大瓜为什么没有掉下来？',qvn:'Vì sao quả mướp to ấy không rơi xuống?',
     opts:['瓜长得不大','瓜茎非常粗','下面有奶奶放的木箱','“我”把它摘了下来'],ans:2,
     why:'奶奶早就在下面放了一个旧木箱，大瓜正好躺在上面 — câu then chốt ở gần cuối; "我断定它会掉下来" chỉ là dự đoán sai.',
     words:['宁愿','丝瓜','茂盛','悬挂','断定']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG GIAO TIẾP
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng lớp rủ em đi xe buýt tới trường cho đỡ mệt, nhưng xe buýt giờ cao điểm hay tắc đường.',
     a:{sp:'Bạn',zh:'明天咱们坐公共汽车去学校吧，骑车太累了。',vn:'Mai mình đi xe buýt đến trường đi, đạp xe mệt lắm.'},
     need:['Dùng 宁愿……也不……','Nêu lý do lựa chọn'],
     sample:'早上公共汽车老堵车，我宁愿骑车累一点儿，也不想迟到。',
     samplePy:'Zǎoshang gōnggòng qìchē lǎo dǔchē, wǒ nìngyuàn qí chē lèi yìdiǎnr, yě bù xiǎng chídào.',
     sampleVn:'Buổi sáng xe buýt hay tắc lắm, tớ thà đạp xe mệt một chút chứ không muốn đi muộn.',
     tip:'宁愿 + phương án chấp nhận thiệt (累一点儿)，也不 + điều muốn tránh (迟到); vế đầu nêu lý do.'},

    {scene:'Mẹ phàn nàn em trồng quá nhiều chậu cây ngoài ban công, chật hết chỗ phơi đồ.',
     a:{sp:'Mẹ',zh:'阳台上摆了这么多花盆，衣服都没地方晒了！',vn:'Ban công bày nhiều chậu cây thế này, quần áo chẳng còn chỗ phơi nữa!'},
     need:['Dùng A归A','Đưa ra cách giải quyết'],
     sample:'多归多，这些花可都是我精心种的。我把花盆挪到墙角去，给您腾出晒衣服的地方。',
     samplePy:'Duō guī duō, zhèxiē huā kě dōu shì wǒ jīngxīn zhòng de. Wǒ bǎ huāpén nuódào qiángjiǎo qù, gěi nín téngchū shài yīfu de dìfang.',
     sampleVn:'Nhiều thì nhiều thật, nhưng mấy chậu hoa này đều do con dày công trồng mà. Con dời chậu vào góc tường, dọn chỗ phơi đồ cho mẹ nhé.',
     tip:'A归A lặp lại đúng từ người kia vừa nói (多); vế sau nêu ý chuyển hướng. 精心 ôn bài 10.'},

    {scene:'Em trai hỏi vì sao cây mướp em trồng có quả nằm gọn trên bệ cửa sổ mà không rơi.',
     a:{sp:'Em trai',zh:'哥，那个大丝瓜怎么没掉下来？',vn:'Anh ơi, quả mướp to kia sao không rơi xuống ạ?'},
     need:['Dùng 断定 hoặc 不可思议','Kể lại chuyện bất ngờ'],
     sample:'我本来断定它会坠落下来，没想到它自己弯了起来，躺在了窗台上，真是不可思议！',
     samplePy:'Wǒ běnlái duàndìng tā huì zhuìluò xiàlái, méi xiǎngdào tā zìjǐ wānle qǐlái, tǎng zài le chuāngtái shang, zhēn shì bùkě-sīyì!',
     sampleVn:'Lúc đầu anh quả quyết nó sẽ rơi xuống, không ngờ nó tự cong lên nằm trên bệ cửa sổ, thật không thể tưởng tượng nổi!',
     tip:'本来断定……，没想到…… tạo sự đối lập giữa dự đoán và thực tế; 不可思议 đặt cuối câu cảm thán.'},

    {scene:'Cô giáo chủ nhiệm cảm ơn cả lớp sau đợt trồng cây, mong mọi người tiếp tục chăm sóc vườn trường.',
     a:{sp:'Cô chủ nhiệm',zh:'这学期大家把学校的小花园照顾得很好，老师特别感谢你们。',vn:'Học kỳ này các em chăm sóc vườn hoa nhỏ của trường rất tốt, cô đặc biệt cảm ơn các em.'},
     need:['Dùng 一如既往','Hứa hẹn với cô'],
     sample:'谢谢老师！下学期我们也会一如既往地给花浇水，让小花园更茂盛。',
     samplePy:'Xièxie lǎoshī! Xià xuéqī wǒmen yě huì yìrú-jìwǎng de gěi huā jiāo shuǐ, ràng xiǎo huāyuán gèng màoshèng.',
     sampleVn:'Cảm ơn cô ạ! Học kỳ sau chúng em vẫn sẽ tưới hoa như trước, để khu vườn nhỏ càng xanh tốt hơn.',
     tip:'一如既往地 + V (có 地), hợp với lời hứa trang trọng; 让 + N + Adj = làm cho … thêm ….'},

    {scene:'Bạn hỏi em có sợ không khi tối qua gió bão làm giàn mướp nhà em lắc lư dữ dội.',
     a:{sp:'Bạn',zh:'昨晚风那么大，你家的丝瓜架没事吧？',vn:'Tối qua gió to thế, giàn mướp nhà cậu không sao chứ?'},
     need:['Dùng 晃 hoặc 与日俱增','Tả tâm trạng lo lắng rồi kết quả'],
     sample:'别提了，整个架子晃来晃去，我担心得一夜没睡好。还好今天一早去看，丝瓜一个也没掉。',
     samplePy:'Bié tí le, zhěnggè jiàzi huàng lái huàng qù, wǒ dānxīn de yí yè méi shuìhǎo. Háihǎo jīntiān yìzǎo qù kàn, sīguā yí ge yě méi diào.',
     sampleVn:'Đừng nhắc nữa, cả giàn lắc lư dữ dội, tớ lo đến mức cả đêm ngủ không ngon. May mà sáng nay ra xem, chẳng quả nào rơi cả.',
     tip:'V来V去 (晃来晃去) tả chuyển động liên tục; 一 + LT + 也没…… = không … nào cả.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em viết bài văn miêu tả vườn hoa trường vào mùa xuân.',
     a:'春天到了，花坛里的花儿开了，红红的花瓣点缀在绿叶之间，整个校园显得朝气蓬勃。',b:'春天了，花坛里的花都开了，红的绿的，看着挺好看的。',better:'a',
     why:'Văn miêu tả cần hình ảnh và từ ngữ văn viết: 点缀在……之间, 朝气蓬勃. Câu b (挺好看的, 红的绿的) là lời nói miệng, nhạt.'},

    {scene:'Em nhắn tin cho bạn thân rủ đi xem vườn mướp nhà bà.',
     a:'诚邀您于本周六莅临寒舍，参观家中丝瓜种植园。',b:'周六来我奶奶家看丝瓜吧，长得可好了，还能摘几个回去！',better:'b',
     why:'Nhắn tin bạn thân dùng khẩu ngữ tự nhiên (可好了, 摘几个回去). Câu a (诚邀, 莅临寒舍) là giọng thiệp mời trang trọng, rất lạ khi nói với bạn.'},

    {scene:'Em viết báo cáo môn Sinh học về cây mướp.',
     a:'丝瓜的茎很细，却能把水分和养料输送到叶片，使得植株生长茂盛。',b:'丝瓜那根藤细得跟绳子似的，可水啊什么的照样能送上去，所以长得老好了。',better:'a',
     why:'Báo cáo khoa học cần thuật ngữ chính xác: 茎, 输送, 养料, 植株. Câu b (跟绳子似的, 什么的, 老好了) là khẩu ngữ.'},

    {scene:'Bạn cùng phòng sốt ruột vì hạt giống mới gieo hai hôm chưa nảy mầm, muốn tưới thật nhiều.',
     a:'别急，种子发芽得有个过程，你浇那么多水，就成拔苗助长了。',b:'根据植物生长规律，建议你遵循自然，切勿采取拔苗助长式的做法。',better:'a',
     why:'Khuyên bạn cùng phòng nên dùng lời thân mật, dễ nghe (别急, 得有个过程). Câu b (根据……规律, 建议, 切勿) như văn bản hướng dẫn, quá cứng.'},

    {scene:'Lớp trưởng phát biểu trong lễ tổng kết, cảm ơn thầy cô.',
     a:'老师们，谢谢啊，以后还得靠你们多帮帮我们哈！',b:'衷心感谢各位老师一年来的辛勤付出，希望老师们一如既往地关心和支持我们。',better:'b',
     why:'Phát biểu trong lễ tổng kết cần trang trọng: 衷心感谢, 辛勤付出, 一如既往地关心和支持. Câu a (谢谢啊, 哈) quá suồng sã.'},

    {scene:'Em kể với bố mẹ trong bữa cơm chuyện quả mướp không rơi.',
     a:'爸，您猜怎么着？那个我以为肯定要掉的瓜，愣是自己躺到台子上去了！',b:'经观察可以断定，该丝瓜借助墙体加固时修建的平台，成功避免了坠落。',better:'a',
     why:'Kể chuyện trong bữa cơm dùng khẩu ngữ sinh động (您猜怎么着, 愣是). Câu b (经观察, 该丝瓜, 借助) là giọng báo cáo, không hợp không khí gia đình.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'描述一下丝瓜生长的环境。', cue:'土壤、水、阳光', words:['随即','株','粒','丝瓜','土壤','肥沃','滋润','照耀']},
    {step:'说一说丝瓜生长的过程。', cue:'①种子→从土里冒出来 ②瓜茎爬楼 ③开花→丝瓜→最初的瓜→后来的两个瓜→最下面的瓜', words:['惊讶','茎','幢','陡峭','挺拔','茂盛','覆盖','水泥','朝气蓬勃','生机','花瓣','点缀','协调','柔和']},
    {step:'描述一下“我”对丝瓜担心的过程。', cue:'①最初长出来的瓜： ②三楼那家窗外的两个瓜： ③两个大瓜瓜茎末梢上长出来的瓜：', words:['分量','悬挂','负担','坠','沉重','节制','辫子','臂','呵','与日俱增','梢','垂直','吊','晃','断定','连同','凹凸','修建']},
    {step:'丝瓜给“我”什么感觉？', cue:'①有思想、有行动 ②靠什么……', words:['神奇','不可思议','徘徊','一如既往','愣','拔苗助长','宁愿','疲倦']}
  ],
  checklist: [
    'Kể đủ 4 ý theo đúng thứ tự bảng chưa (môi trường → quá trình sinh trưởng → quá trình lo lắng → cảm nhận về cây mướp)?',
    'Ý 2 có kể đúng chuỗi: hạt → nhú lên → bò lên tầng ba → ra hoa → quả đầu tiên → hai quả tầng ba → quả dưới cùng không?',
    'Ý 3 có nêu được mỗi quả một lần lo lắng và một kết quả bất ngờ (有节制 / 躺在窗台上 / 躺在台子上) không?',
    'Có dùng được các từ 与日俱增, 断定, 坠落, 不可思议, 一如既往 không?',
    'Có kể bằng LỜI MÌNH (câu ngắn, rõ ý), kết lại bằng câu hỏi "丝瓜靠什么来思考" và hình ảnh 含笑面对秋阳 không?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 191–196) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'vitri', de:'为“随即”选择适当的位置（注释1 · 练一练）', vn:'Chọn vị trí thích hợp cho 随即 (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'他答应A了B一声，C把手里的东西D递给我。', tu:'随即', ans:'C',
      giai:'随即 đứng đầu vế SAU, trước cụm 把 + động từ: 他答应了一声，随即把手里的东西递给我 — "ừ" một tiếng rồi liền đưa đồ.'},
     {s:'他匆匆进了屋，A说完必要的话之后B转身离去，C根本不顾及对方究竟D听懂了多少。', tu:'随即', ans:'B',
      giai:'Hai hành động nối liền: nói xong → ngay sau đó quay người đi: ……之后随即转身离去. 随即 đứng trước động từ 转身.'},
     {s:'我亲眼看到，A一只鸟死了，另外B几只衔着那只死鸟飞到附近一个池塘的上空，将它C扔进池塘，D又飞回原地。鸟中的首领哀叫了一阵后，带着队伍在池塘上空盘旋几圈，然后边叫边飞向远处。', tu:'随即', ans:'D',
      giai:'Ném xác chim xuống ao → NGAY SAU ĐÓ bay về chỗ cũ: 将它扔进池塘，随即又飞回原地. 随即 đứng trước phó từ 又 và động từ.'}
   ]},

  {kieu:'gx', de:'用带“宁愿”的句子回答问题（注释2 · 练一练）', vn:'Dùng câu có 宁愿 để trả lời câu hỏi (Chú thích 2 · Luyện tập). Sách không in đáp án — dưới đây là đáp án gợi ý.',
   cau:[
     {s:'一个房子条件不错，但到学校需要一个小时；另一个房子条件差些，但五分钟就能走到学校。你选择哪个房子？', tu:'宁愿', dap:'我宁愿住条件差些的房子，也不想每天花一个小时去学校。',
      giai:'Cân nhắc được – mất rồi chọn: 宁愿 + phương án chấp nhận (条件差些)，也不 + điều muốn tránh (花一个小时). Cũng có thể trả lời theo hướng ngược lại.'},
     {s:'坐公共汽车比较舒服，但是路上会堵车，时间没有保证；坐地铁很挤，但是时间有保证。你怎么去？', tu:'宁愿', dap:'我宁愿坐地铁挤一点儿，也不愿意坐公共汽车迟到。',
      giai:'宁愿……也不愿意……: chấp nhận chen chúc để khỏi muộn. Có thể nói: 我宁愿……，也要准时到.'},
     {s:'少睡会儿觉，把作文写完；该睡觉就睡觉，作文不写了。你会怎样？', tu:'宁愿', dap:'我宁愿少睡会儿觉，也要把作文写完。',
      giai:'宁愿……也要……: chịu thiệt (少睡) để đạt được mục đích (写完作文). Câu 把 + bổ ngữ kết quả 写完.'}
   ]},

  {kieu:'gx', de:'完成句子（注释3 · A归A · 练一练）', vn:'Hoàn thành câu với cấu trúc A归A (Chú thích 3 · Luyện tập). Sách không in đáp án — dưới đây là đáp án gợi ý.',
   cau:[
     {s:'咱们好归好，你要是做事不公平＿＿。', tu:'好归好', dap:'咱们好归好，你要是做事不公平，我照样会批评你。',
      giai:'好归好 = thân thì thân (nhượng bộ), vế sau chuyển ý: vẫn phê bình như thường. 照样 ôn bài 10.'},
     {s:'生气归生气，你＿＿，我还是会帮你的。', tu:'生气归生气', dap:'生气归生气，你要是真遇到了困难，我还是会帮你的。',
      giai:'Chỗ trống là điều kiện (要是……); 还是 ở vế cuối thể hiện sự chuyển ý "dù giận vẫn giúp".'},
     {s:'喜欢归喜欢，价格那么贵，他还是决定＿＿。', tu:'喜欢归喜欢', dap:'喜欢归喜欢，价格那么贵，他还是决定不买了。',
      giai:'Thích thì thích, nhưng giá đắt → quyết định không mua. Vế sau trái với vế A归A.'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'负担', chu:'担', ds:['承担','担任','担当','分担']},
   cau:[
     {tu:'随即', chu:'即', dap:['即将','即刻','即时','立即'], them:['当即','旋即','即日','即兴','即席'],
      giai:'即 = ngay, lập tức, liền (随即 = liền sau đó; 立即 = lập tức; 即将 = sắp sửa; 当即 = ngay tại chỗ).'},
     {tu:'照耀', chu:'照', dap:['照射','照亮','照明','光照'], them:['日照','普照','映照','夕照','返照'],
      giai:'照 = (ánh sáng) chiếu, rọi (照射 = chiếu xạ; 照亮 = chiếu sáng; 日照 = ánh nắng mặt trời chiếu; 普照 = chiếu khắp).'},
     {tu:'疲倦', chu:'疲', dap:['疲惫','疲劳','疲软','疲乏'], them:['疲累','疲困','筋疲力尽','精疲力竭','乐此不疲'],
      giai:'疲 = mệt mỏi, kiệt sức (疲惫 = mệt rã rời, ôn bài 14; 疲劳 = mệt mỏi; 筋疲力尽 = kiệt sức).'},
     {tu:'协调', chu:'调', dap:['调理','调味','调整','调节'], them:['调和','调解','调配','调控','空调','失调'],
      giai:'调 (tiáo) = điều hòa, điều chỉnh cho vừa (调整 = điều chỉnh; 调节 = điều tiết; 调和 = điều hòa, ôn bài 10). Chú ý: 调 đọc diào là "điều động" (调动) — khác nghĩa.'}
   ]},

  {kieu:'gx', de:'用所给词语改写句子', vn:'Dùng từ cho sẵn viết lại câu (đáp án theo sách)', dapSgk:true,
   cau:[
     {s:'时间紧迫，你们先走，然后我马上动身。', tu:'随即', dap:'时间紧迫，你们先走，我随即动身。',
      giai:'然后……马上 (sau đó lập tức) → 随即: một phó từ gói cả nghĩa "ngay sau đó", đứng trước động từ 动身.'},
     {s:'这种产品一再降价，可就是卖不动，让人觉得不可思议。', tu:'愣', dap:'这种产品一再降价，可愣是卖不动，让人觉得不可思议。',
      giai:'就是 (cứ, nhất định) → 愣是: khẩu ngữ, nhấn kết quả trái với lẽ thường (giảm giá mà vẫn không bán được).'},
     {s:'让我嫁给他，还不如让我一辈子不结婚。', tu:'宁愿', dap:'我宁愿一辈子不结婚，也不嫁给他。',
      giai:'还不如 (thà còn hơn) → 宁愿……也不……: đưa phương án được chọn (不结婚) lên sau 宁愿, phương án bị loại (嫁给他) ra sau 也不.'},
     {s:'我敢说这件事肯定是他干的，因为别人没有这个机会。', tu:'断定', dap:'我断定这件事肯定是他干的，因为别人没有这个机会。',
      giai:'敢说 (dám nói) → 断定: kết luận chắc chắn sau khi suy xét; tân ngữ là cả mệnh đề.'},
     {s:'妈妈把午饭和课本一起放进我的书包里了。', tu:'连同', dap:'妈妈把午饭连同课本一起放进我的书包里了。',
      giai:'和 → 连同: liên từ nối hai danh từ (午饭 — 课本), 一起 vẫn giữ trước động từ.'},
     {s:'希望你像以前一样继续关心支持我们。', tu:'一如既往', dap:'希望你一如既往地关心支持我们。',
      giai:'像以前一样继续 → 一如既往地: thành ngữ làm trạng ngữ (có 地), không cần 继续 nữa.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['土壤','照耀','花瓣','粒','滋润'],
   cau:[
     {s:'找个空闲时间，找一块空地，种上几＿＿种子。只要有肥沃的＿＿，水的＿＿，阳光的＿＿，很快就能发芽开花了。红色的＿＿点缀在绿叶之间，让人看了心情愉快。',
      dap:['粒','土壤','滋润','照耀','花瓣']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['断定','负担','与日俱增','惊讶','疲倦'],
   cau:[
     {s:'这个孩子已经连续十几天没来上课了，我的担心＿＿，＿＿他一定是出什么事了。放学后，我来到男孩儿的家，看到了满脸＿＿的妈妈，她刚看到我时，很＿＿，随即抱歉地说：“最近孩子的父亲因为交通事故去世了，由于＿＿不起学费，孩子只好退学去打工。”听到这个消息，我的心沉重起来，真希望大家都能伸出温暖的手帮助这个孩子渡过难关。',
      dap:['与日俱增','断定','疲倦','惊讶','负担']}
   ]},

  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu (phần gạch chân trong 【】; sách không có đáp án cố định — đây là câu gợi ý)',
   cau:[
     {mau:'【我心中难免】不解：古人【是怎么想的】，【愣是】编出个拔苗助长的故事来？【要是我】，【宁愿】用别的比喻。【不解归不解】，我每天工作疲倦了，都要去看看那几棵丝瓜。',
      khung:'我心中难免生气：妈妈是怎么想的，愣是不让我＿＿，要是我，宁愿＿＿。生气归生气，我还是＿＿。',
      dap:['在阳台上种几盆花','多花点儿时间打扫阳台，也要让孩子种点儿自己喜欢的东西','每天帮妈妈把阳台打扫得干干净净'],
      giai:'心中难免 + cảm xúc (khó tránh khỏi…); ……是怎么想的，愣是…… = nghĩ gì mà cứ nhất định… (thắc mắc, bực bội); 要是我，宁愿…… = nếu là tôi thì thà…; A归A，……还是…… = A thì A, nhưng vẫn….'},
     {mau:'丝瓜【长得很快】，【转眼间】，瓜茎【已经】爬上了我们这幢楼陡峭的楼墙。【接着】，它从一楼爬上了二楼，又从二楼爬上了三楼。瓜茎【只有】细绳一般粗，【却】能输送足够的水分和养料，【使得】瓜茎挺拔，叶子茂盛。',
      khung:'孩子长得很快，转眼间，他已经＿＿，接着，他又＿＿。虽然他只有＿＿，却能＿＿，使得＿＿。',
      dap:['上小学了','从一年级升到了三年级','八九岁','把自己的事情安排得井井有条','爸爸妈妈省了不少心'],
      giai:'转眼间……已经…… nhấn thời gian trôi nhanh; 接着……又…… kể sự việc nối tiếp; 只有……，却能……，使得…… = chỉ… vậy mà lại…, khiến cho… (đối lập rồi nêu kết quả).'}
   ]}
];
