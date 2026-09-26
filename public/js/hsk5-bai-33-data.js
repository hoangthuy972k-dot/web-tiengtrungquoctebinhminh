// ══════════════════════════════════════════
// DATA — HSK5 Bài 33: 以堵治堵——缓解交通有妙招 (Dùng tắc trị tắc — tuyệt chiêu giảm tải giao thông)
// Unit 11 观察社会 · Nguồn: HSK标准教程5下 (tr. 130–137) + 练习册 bài 33
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'缓解',py:'huǎnjiě',pos:'Động từ',vn:'làm dịu, giảm bớt, xoa dịu',hv:'hoãn giải',em:'🚦',lesson:1,
   explain:['Làm cho tình trạng căng thẳng, nghiêm trọng dịu bớt đi: 缓 = chậm lại, hoà hoãn; 解 = cởi, gỡ.','Tân ngữ thường là thứ gây khó chịu: 压力, 病情, 疼痛, (紧张)情绪, 交通, 气氛 (bảng 搭配 của sách).'],
   usage:'缓解 + 压力 / 疼痛 / 交通拥堵; bị động: 得到(了)缓解, 大为缓解. Chỉ làm DỊU BỚT, không giải quyết dứt điểm — "giải quyết vấn đề" phải nói 解决问题, không nói ✗ 缓解问题.',
   collo:['缓解压力','缓解交通','缓解疼痛','得到缓解'],
   ex_zh:'这样一来，道路拥堵大为缓解。',ex_py:'Zhèyàng yì lái, dàolù yōngdǔ dà wéi huǎnjiě.',ex_vn:'Như vậy, tình trạng ùn tắc đường sá đã giảm đi rất nhiều.',
   exList:[
     {zh:'这样一来，道路拥堵大为缓解。',py:'Zhèyàng yì lái, dàolù yōngdǔ dà wéi huǎnjiě.',vn:'Như vậy, tình trạng ùn tắc đường sá đã giảm đi rất nhiều.'},
     {zh:'道路修通后，灾民饮水困难的问题得到了缓解。',py:'Dàolù xiūtōng hòu, zāimín yǐnshuǐ kùnnan de wèntí dédàole huǎnjiě.',vn:'Sau khi đường được sửa thông, khó khăn về nước uống của người dân vùng thiên tai đã được giảm bớt.'},
     {zh:'考试前听听音乐，可以缓解紧张的情绪。',py:'Kǎoshì qián tīngting yīnyuè, kěyǐ huǎnjiě jǐnzhāng de qíngxù.',vn:'Nghe nhạc một chút trước giờ thi có thể làm dịu cảm giác căng thẳng.'}
   ],
   colloFull:[
     {zh:'缓解压力',py:'huǎnjiě yālì',vn:'giảm áp lực'},
     {zh:'缓解交通',py:'huǎnjiě jiāotōng',vn:'giảm tải giao thông'},
     {zh:'缓解疼痛',py:'huǎnjiě téngtòng',vn:'giảm đau'},
     {zh:'得到缓解',py:'dédào huǎnjiě',vn:'được giảm bớt'},
     {zh:'缓解紧张情绪',py:'huǎnjiě jǐnzhāng qíngxù',vn:'làm dịu cảm xúc căng thẳng'}
   ],
   patterns:[
     {s:'缓解 + 压力 / 疼痛 / 交通 / 紧张情绪',m:'Làm dịu bớt điều gây khó chịu'},
     {s:'…… + 得到了缓解 / 大为缓解',m:'(Tình trạng) đã được giảm bớt / giảm đi rất nhiều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mỗi ngày vận động nửa tiếng là có thể giảm bớt áp lực học tập.',answer:'只要每天运动半个小时，就能缓解学习压力。',answerPy:'Zhǐyào měi tiān yùndòng bàn ge xiǎoshí, jiù néng huǎnjiě xuéxí yālì.',
      note:'缓解 + 压力. 只要……就……: chỉ cần … là ….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tắc đường chẳng những không giảm bớt, mà còn ngày càng nghiêm trọng.',answer:'堵车不但没有缓解，反而越来越严重了。',answerPy:'Dǔchē búdàn méiyǒu huǎnjiě, fǎn\'ér yuè lái yuè yánzhòng le.',
      note:'不但没有……反而…… (bài 26); 越来越 + tính từ.',pair:'越来越'}
   ]},

  {n:2,zh:'招',py:'zhāo(r)',pos:'Danh từ',vn:'chiêu, biện pháp, cách',hv:'chiêu',em:'💡',lesson:1,
   explain:['Nghĩa gốc: đòn, thế võ (一招一式). Nghĩa mở rộng: mẹo, cách, biện pháp để giải quyết việc gì. Khẩu ngữ hay nói 招儿.','妙招 = chiêu hay, cách khéo (tên bài: 缓解交通有妙招); 绝招 = tuyệt chiêu; 没招了 = hết cách rồi.'],
   usage:'有妙招 / 想个招儿 / 出一招 / 这一招 / 没招儿了. Lượng từ đi kèm là 个 hoặc chính 招 (一招).',
   collo:['妙招','想个招儿','这一招','没招了'],
   ex_zh:'以堵治堵——缓解交通有妙招。',ex_py:'Yǐ dǔ zhì dǔ——huǎnjiě jiāotōng yǒu miàozhāo.',ex_vn:'Dùng tắc trị tắc — tuyệt chiêu giảm tải giao thông.',
   exList:[
     {zh:'以堵治堵——缓解交通有妙招。',py:'Yǐ dǔ zhì dǔ——huǎnjiě jiāotōng yǒu miàozhāo.',vn:'Dùng tắc trị tắc — tuyệt chiêu giảm tải giao thông.'},
     {zh:'弟弟总是不肯早睡，妈妈想了个招儿：睡前给他讲故事。',py:'Dìdi zǒngshì bù kěn zǎo shuì, māma xiǎngle ge zhāor: shuì qián gěi tā jiǎng gùshi.',vn:'Em trai cứ không chịu ngủ sớm, mẹ nghĩ ra một chiêu: kể chuyện cho nó trước khi ngủ.'},
     {zh:'这一招真管用，同学们上课再也不玩手机了。',py:'Zhè yì zhāo zhēn guǎnyòng, tóngxuémen shàngkè zài yě bù wán shǒujī le.',vn:'Chiêu này hiệu quả thật, các bạn trong giờ học không còn chơi điện thoại nữa.'}
   ],
   colloFull:[
     {zh:'妙招',py:'miàozhāo',vn:'chiêu hay, cách khéo'},
     {zh:'想个招儿',py:'xiǎng ge zhāor',vn:'nghĩ ra một cách'},
     {zh:'这一招',py:'zhè yì zhāo',vn:'chiêu này'},
     {zh:'没招了',py:'méi zhāo le',vn:'hết cách rồi'},
     {zh:'绝招',py:'juézhāo',vn:'tuyệt chiêu'}
   ],
   patterns:[
     {s:'（做某事）有妙招',m:'Có cách hay để làm việc gì'},
     {s:'想个招儿 / 出个招儿 + (帮……)',m:'Nghĩ ra, bày ra một cách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi hết cách rồi, cậu nghĩ giúp tôi một chiêu đi, chỉ cần hiệu quả là được.',answer:'我没招了，你帮我想个招儿吧，只要管用就行。',answerPy:'Wǒ méi zhāo le, nǐ bāng wǒ xiǎng ge zhāor ba, zhǐyào guǎnyòng jiù xíng.',
      note:'没招了 = hết cách; 想个招儿 = nghĩ ra một cách (khẩu ngữ).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Chiêu này đã được cô giáo dùng mấy năm rồi, lần nào cũng hiệu quả.',answer:'这一招已经被老师用了好几年了，每次都很管用。',answerPy:'Zhè yì zhāo yǐjīng bèi lǎoshī yòngle hǎo jǐ nián le, měi cì dōu hěn guǎnyòng.',
      note:'Câu 被: chủ thể chịu tác động (这一招) đứng đầu.',pair:'被'}
   ]},

  {n:3,zh:'繁荣',py:'fánróng',pos:'Tính từ',vn:'phồn thịnh, phồn vinh, thịnh vượng',hv:'phồn vinh',em:'🏙️',lesson:1,
   explain:['Tả kinh tế, văn hoá, xã hội, thành phố… phát triển mạnh, sôi động, thịnh vượng.','Cũng làm động từ: làm cho phồn vinh — 繁荣经济, 繁荣市场.'],
   usage:'繁荣的 + 国家 / 城市 / 经济 / 时代 / 市场 / 景象 (bảng 搭配 của sách); 经济繁荣; 繁荣昌盛. Không dùng để tả một người giàu (người giàu nói 富有 / 有钱).',
   collo:['经济繁荣','繁荣的城市','繁荣的市场','繁荣的景象'],
   ex_zh:'城市汽车的数量迅速增长，最初还被视为是社会发展、经济繁荣的体现。',ex_py:'Chéngshì qìchē de shùliàng xùnsù zēngzhǎng, zuìchū hái bèi shìwéi shì shèhuì fāzhǎn, jīngjì fánróng de tǐxiàn.',ex_vn:'Số lượng ô tô trong thành phố tăng nhanh, ban đầu còn được coi là biểu hiện của xã hội phát triển, kinh tế phồn thịnh.',
   exList:[
     {zh:'城市汽车的数量迅速增长，最初还被视为是社会发展、经济繁荣的体现。',py:'Chéngshì qìchē de shùliàng xùnsù zēngzhǎng, zuìchū hái bèi shìwéi shì shèhuì fāzhǎn, jīngjì fánróng de tǐxiàn.',vn:'Số lượng ô tô trong thành phố tăng nhanh, ban đầu còn được coi là biểu hiện của xã hội phát triển, kinh tế phồn thịnh.'},
     {zh:'不公平竞争使这里繁荣的商业遭到了破坏。',py:'Bù gōngpíng jìngzhēng shǐ zhèli fánróng de shāngyè zāodàole pòhuài.',vn:'Cạnh tranh không lành mạnh đã khiến nền thương mại phồn thịnh ở đây bị phá hoại.'},
     {zh:'三十年前这里还是一个小渔村，现在已经变成了一个繁荣的城市。',py:'Sānshí nián qián zhèli hái shì yí ge xiǎo yúcūn, xiànzài yǐjīng biànchéngle yí ge fánróng de chéngshì.',vn:'Ba mươi năm trước nơi này vẫn là một làng chài nhỏ, bây giờ đã thành một thành phố thịnh vượng.'}
   ],
   colloFull:[
     {zh:'经济繁荣',py:'jīngjì fánróng',vn:'kinh tế phồn thịnh'},
     {zh:'繁荣的城市',py:'fánróng de chéngshì',vn:'thành phố thịnh vượng'},
     {zh:'繁荣的市场',py:'fánróng de shìchǎng',vn:'thị trường sôi động'},
     {zh:'繁荣的景象',py:'fánróng de jǐngxiàng',vn:'cảnh tượng phồn vinh'},
     {zh:'繁荣的时代',py:'fánróng de shídài',vn:'thời đại hưng thịnh'}
   ],
   patterns:[
     {s:'繁荣的 + 国家 / 城市 / 经济 / 市场',m:'Làm định ngữ trước danh từ'},
     {s:'经济 / 市场 / 文化 + 繁荣',m:'Làm vị ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thành phố này càng ngày càng phồn thịnh.',answer:'这座城市越来越繁荣了。',answerPy:'Zhè zuò chéngshì yuè lái yuè fánróng le.',
      note:'Lượng từ của 城市 là 座. 越来越 + tính từ + 了.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy kinh tế phồn thịnh, nhưng giao thông lại ngày càng đông nghịt.',answer:'虽然经济繁荣了，但是交通却越来越拥挤。',answerPy:'Suīrán jīngjì fánróng le, dànshì jiāotōng què yuè lái yuè yōngjǐ.',
      note:'Ôn 拥挤 (số 5). 却 nhấn mạnh sự trái ngược.',pair:'虽然……但是……'}
   ]},

  {n:4,zh:'体现',py:'tǐxiàn',pos:'Động từ',vn:'thể hiện, phản ánh',hv:'thể hiện',em:'🪞',lesson:1,
   explain:['Một hiện tượng, tính chất, tư tưởng, tinh thần… được thể hiện cụ thể QUA một người hay sự vật nào đó.','Cũng dùng như danh từ trong kết cấu ……的体现 (biểu hiện của …): 经济繁荣的体现. Phân biệt với 表现 xem phần 词语辨析.'],
   usage:'体现(出) + 精神 / 特点 / 价值 / 思想; A 在 B 上体现得……; 是……的体现. Không nói ✗ 体现自己 (khoe bản thân phải dùng 表现自己).',
   collo:['体现精神','体现价值','……的体现','体现出特点'],
   ex_zh:'不同文化的差异在语言特别是词语上体现得最突出。',ex_py:'Bùtóng wénhuà de chāyì zài yǔyán tèbié shì cíyǔ shang tǐxiàn de zuì tūchū.',ex_vn:'Sự khác biệt giữa các nền văn hoá thể hiện rõ nhất ở ngôn ngữ, đặc biệt là ở từ ngữ.',
   exList:[
     {zh:'不同文化的差异在语言特别是词语上体现得最突出。',py:'Bùtóng wénhuà de chāyì zài yǔyán tèbié shì cíyǔ shang tǐxiàn de zuì tūchū.',vn:'Sự khác biệt giữa các nền văn hoá thể hiện rõ nhất ở ngôn ngữ, đặc biệt là ở từ ngữ.'},
     {zh:'人生的价值不体现在你口袋里有多少钱，而在于你为社会做出了多少贡献。',py:'Rénshēng de jiàzhí bù tǐxiàn zài nǐ kǒudai li yǒu duōshao qián, ér zàiyú nǐ wèi shèhuì zuòchūle duōshao gòngxiàn.',vn:'Giá trị cuộc đời không thể hiện ở chỗ trong túi bạn có bao nhiêu tiền, mà ở chỗ bạn đã cống hiến bao nhiêu cho xã hội.'},
     {zh:'这次比赛充分体现了我们班的团队精神。',py:'Zhè cì bǐsài chōngfèn tǐxiànle wǒmen bān de tuánduì jīngshén.',vn:'Cuộc thi lần này đã thể hiện đầy đủ tinh thần đồng đội của lớp chúng tôi.'}
   ],
   colloFull:[
     {zh:'体现精神',py:'tǐxiàn jīngshén',vn:'thể hiện tinh thần'},
     {zh:'体现价值',py:'tǐxiàn jiàzhí',vn:'thể hiện giá trị'},
     {zh:'……的体现',py:'…… de tǐxiàn',vn:'biểu hiện của …'},
     {zh:'体现出特点',py:'tǐxiàn chū tèdiǎn',vn:'thể hiện ra đặc điểm'},
     {zh:'充分体现',py:'chōngfèn tǐxiàn',vn:'thể hiện đầy đủ'}
   ],
   patterns:[
     {s:'A + 体现(了 / 出) + 精神 / 特点 / 价值',m:'A thể hiện (điều trừu tượng)'},
     {s:'A + 是 + B + 的体现',m:'A là biểu hiện của B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món quà nhỏ này đã thể hiện hết tình cảm của các bạn học sinh đối với cô giáo.',answer:'这个小礼物把同学们对老师的感情都体现出来了。',answerPy:'Zhège xiǎo lǐwù bǎ tóngxuémen duì lǎoshī de gǎnqíng dōu tǐxiàn chūlai le.',
      note:'把 + tân ngữ trừu tượng (感情) + 体现出来.',pair:'把'},
     {promptLang:'vi',prompt:'Tinh thần giúp đỡ người khác này không chỉ thể hiện ở trường học, mà cũng thể hiện ở gia đình.',answer:'这种帮助别人的精神不仅体现在学校里，也体现在家里。',answerPy:'Zhè zhǒng bāngzhù biérén de jīngshén bùjǐn tǐxiàn zài xuéxiào li, yě tǐxiàn zài jiā li.',
      note:'体现在 + nơi / phương diện.',pair:'不仅……也……'}
   ]},

  {n:5,zh:'拥挤',py:'yōngjǐ',pos:'Tính từ',vn:'đông nghịt, chật chội, chen chúc',hv:'ủng tễ',em:'🚗',lesson:1,
   explain:['Người hoặc xe tập trung quá đông ở một nơi, chật ních, chen chúc.','Cũng làm động từ: chen lấn — 请不要拥挤 (xin đừng chen lấn).'],
   usage:'交通 / 道路 / 车厢 / 住房 / 城市 / 车站 + 拥挤 (bảng 搭配 của sách); 拥挤的公交车; 变得很拥挤. 拥堵 = 拥挤 + 堵塞 (ùn tắc) — chỉ dùng cho giao thông.',
   collo:['交通拥挤','车厢拥挤','拥挤的车站','请勿拥挤'],
   ex_zh:'随着车流量的增加，道路变得格外拥挤。',ex_py:'Suízhe chēliúliàng de zēngjiā, dàolù biàn de géwài yōngjǐ.',ex_vn:'Cùng với sự gia tăng lưu lượng xe, đường sá trở nên đông nghịt khác thường.',
   exList:[
     {zh:'随着车流量的增加，道路变得格外拥挤。',py:'Suízhe chēliúliàng de zēngjiā, dàolù biàn de géwài yōngjǐ.',vn:'Cùng với sự gia tăng lưu lượng xe, đường sá trở nên đông nghịt khác thường.'},
     {zh:'每当体育馆有比赛举行，周围的交通就会出现拥挤情况。',py:'Měi dāng tǐyùguǎn yǒu bǐsài jǔxíng, zhōuwéi de jiāotōng jiù huì chūxiàn yōngjǐ qíngkuàng.',vn:'Mỗi khi nhà thi đấu có trận đấu, giao thông xung quanh lại xảy ra tình trạng đông nghịt.'},
     {zh:'放学时校门口特别拥挤，请大家排队出去。',py:'Fàngxué shí xiào ménkǒu tèbié yōngjǐ, qǐng dàjiā páiduì chūqu.',vn:'Giờ tan học cổng trường rất chen chúc, mọi người xếp hàng đi ra nhé.'}
   ],
   colloFull:[
     {zh:'交通拥挤',py:'jiāotōng yōngjǐ',vn:'giao thông đông nghịt'},
     {zh:'车厢拥挤',py:'chēxiāng yōngjǐ',vn:'toa xe chật ních'},
     {zh:'拥挤的车站',py:'yōngjǐ de chēzhàn',vn:'nhà ga đông đúc'},
     {zh:'请勿拥挤',py:'qǐng wù yōngjǐ',vn:'xin đừng chen lấn'},
     {zh:'住房拥挤',py:'zhùfáng yōngjǐ',vn:'nhà ở chật chội'}
   ],
   patterns:[
     {s:'交通 / 道路 / 车厢 + (很 / 格外) + 拥挤',m:'(Nơi nào) đông nghịt'},
     {s:'变得 + 更加 / 格外 + 拥挤',m:'Trở nên đông nghịt hơn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa đến giờ cao điểm là tàu điện ngầm đông nghịt.',answer:'一到高峰时间，地铁就非常拥挤。',answerPy:'Yí dào gāofēng shíjiān, dìtiě jiù fēicháng yōngjǐ.',
      note:'一……就……: hễ … là ….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Xe buýt quá đông, ví của tôi bị người ta lấy trộm mất rồi.',answer:'公交车上太拥挤了，我的钱包被人偷走了。',answerPy:'Gōngjiāochē shang tài yōngjǐ le, wǒ de qiánbāo bèi rén tōuzǒu le.',
      note:'Câu 被 kể việc không may.',pair:'被'}
   ]},

  {n:6,zh:'家常',py:'jiācháng',pos:'Danh từ',vn:'chuyện thường ngày trong nhà',hv:'gia thường',em:'🍚',lesson:1,
   explain:['Những việc thường ngày trong gia đình. Hay gặp trong các cụm cố định: 家常菜 (món ăn gia đình), 拉家常 (tán chuyện nhà), 家常便饭.','家常便饭 (thành ngữ): cơm nhà bình thường → nghĩa bóng: chuyện thường ngày, "chuyện cơm bữa".'],
   usage:'……成了家常便饭 = … đã thành chuyện cơm bữa; 做几个家常菜; 跟邻居拉家常. Ít dùng đứng một mình.',
   collo:['家常便饭','家常菜','拉家常'],
   ex_zh:'堵车在大城市中已经成了家常便饭。',ex_py:'Dǔchē zài dà chéngshì zhōng yǐjīng chéngle jiācháng biànfàn.',ex_vn:'Tắc đường ở các thành phố lớn đã thành chuyện cơm bữa.',
   exList:[
     {zh:'堵车在大城市中已经成了家常便饭。',py:'Dǔchē zài dà chéngshì zhōng yǐjīng chéngle jiācháng biànfàn.',vn:'Tắc đường ở các thành phố lớn đã thành chuyện cơm bữa.'},
     {zh:'高三的时候，熬夜复习对我来说是家常便饭。',py:'Gāosān de shíhou, áoyè fùxí duì wǒ lái shuō shì jiācháng biànfàn.',vn:'Hồi lớp 12, thức khuya ôn bài đối với tôi là chuyện cơm bữa.'},
     {zh:'周末奶奶常做几个家常菜，一家人一边吃一边拉家常。',py:'Zhōumò nǎinai cháng zuò jǐ ge jiāchángcài, yì jiā rén yìbiān chī yìbiān lā jiācháng.',vn:'Cuối tuần bà hay nấu mấy món cơm nhà, cả nhà vừa ăn vừa tán chuyện.'}
   ],
   colloFull:[
     {zh:'家常便饭',py:'jiācháng biànfàn',vn:'chuyện cơm bữa'},
     {zh:'家常菜',py:'jiāchángcài',vn:'món ăn gia đình'},
     {zh:'拉家常',py:'lā jiācháng',vn:'tán chuyện nhà'},
     {zh:'成了家常便饭',py:'chéngle jiācháng biànfàn',vn:'đã thành chuyện thường ngày'}
   ],
   patterns:[
     {s:'A + 对(某人)来说 + 是 / 成了 + 家常便饭',m:'A là chuyện cơm bữa (với ai)'},
     {s:'跟 + người + 拉家常',m:'Tán chuyện nhà với ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở thành phố này, ngày mưa tắc đường ngày càng thường gặp, đã thành chuyện cơm bữa.',answer:'在这个城市，下雨天堵车越来越常见，已经成了家常便饭。',answerPy:'Zài zhège chéngshì, xià yǔ tiān dǔchē yuè lái yuè chángjiàn, yǐjīng chéngle jiācháng biànfàn.',
      note:'成了家常便饭 — cụm cố định.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ ăn món cơm nhà Trung Quốc chính gốc.',answer:'我从来没吃过地道的中国家常菜。',answerPy:'Wǒ cónglái méi chīguo dìdao de Zhōngguó jiāchángcài.',
      note:'家常菜 = món ăn gia đình.',pair:'从来没……过'}
   ]},

  {n:7,zh:'面积',py:'miànjī',pos:'Danh từ',vn:'diện tích',hv:'diện tích',em:'📐',lesson:1,
   explain:['Độ lớn của một bề mặt: 房子的面积, 国土面积.','单位面积 = trên một đơn vị diện tích (thuật ngữ trong bài).'],
   usage:'面积 + (很)大 / 小; 面积是 / 有 + số + 平方米; 占地面积 = diện tích chiếm đất. Không nói ✗ 面积很多.',
   collo:['面积很大','单位面积','占地面积','房子的面积'],
   ex_zh:'解决交通拥堵的问题就要减少单位面积道路内的汽车数量。',ex_py:'Jiějué jiāotōng yōngdǔ de wèntí jiù yào jiǎnshǎo dānwèi miànjī dàolù nèi de qìchē shùliàng.',ex_vn:'Muốn giải quyết vấn đề ùn tắc giao thông thì phải giảm số ô tô trên một đơn vị diện tích đường.',
   exList:[
     {zh:'解决交通拥堵的问题就要减少单位面积道路内的汽车数量。',py:'Jiějué jiāotōng yōngdǔ de wèntí jiù yào jiǎnshǎo dānwèi miànjī dàolù nèi de qìchē shùliàng.',vn:'Muốn giải quyết vấn đề ùn tắc giao thông thì phải giảm số ô tô trên một đơn vị diện tích đường.'},
     {zh:'面积的增加并未使道路空出空间来。',py:'Miànjī de zēngjiā bìng wèi shǐ dàolù kòngchū kōngjiān lai.',vn:'Diện tích tăng lên cũng không làm đường trống ra thêm chỗ.'},
     {zh:'我们学校的图书馆面积不大，但是书很多。',py:'Wǒmen xuéxiào de túshūguǎn miànjī bú dà, dànshì shū hěn duō.',vn:'Thư viện trường tôi diện tích không lớn, nhưng rất nhiều sách.'}
   ],
   colloFull:[
     {zh:'面积很大',py:'miànjī hěn dà',vn:'diện tích rất lớn'},
     {zh:'单位面积',py:'dānwèi miànjī',vn:'đơn vị diện tích'},
     {zh:'占地面积',py:'zhàndì miànjī',vn:'diện tích chiếm đất'},
     {zh:'房子的面积',py:'fángzi de miànjī',vn:'diện tích căn nhà'},
     {zh:'国土面积',py:'guótǔ miànjī',vn:'diện tích lãnh thổ'}
   ],
   patterns:[
     {s:'N + 的面积 + 是 / 有 + số + 平方米',m:'Diện tích của … là … m²'},
     {s:'N + 面积 + 大 / 小',m:'(Cái gì) diện tích lớn / nhỏ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn hộ này là mua năm ngoái, diện tích 80 mét vuông.',answer:'这套房子是去年买的，面积是八十平方米。',answerPy:'Zhè tào fángzi shì qùnián mǎi de, miànjī shì bāshí píngfāngmǐ.',
      note:'Lượng từ căn hộ: 套. Không nói ✗ 面积很多.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tuy diện tích Việt Nam không lớn lắm, nhưng dân số rất đông.',answer:'虽然越南的面积不太大，但是人口很多。',answerPy:'Suīrán Yuènán de miànjī bú tài dà, dànshì rénkǒu hěn duō.',
      note:'面积 đi với 大 / 小; 人口 đi với 多 / 少.',pair:'虽然……但是……'}
   ]},

  {n:8,zh:'宽',py:'kuān',pos:'Tính từ',vn:'rộng',hv:'khoan',em:'↔️',lesson:1,
   explain:['Rộng (theo chiều ngang), trái nghĩa 窄 (hẹp): 马路很宽.','加宽 = làm rộng thêm, nới rộng: 加宽道路. Nghĩa bóng: 心宽 (rộng lượng), 宽松 (thoải mái).'],
   usage:'宽 tả chiều ngang của đường, sông, bàn…; diện tích lớn thì nói 大 (房间很大, không nói ✗ 房间很宽 khi muốn nói phòng to). 有……米宽 = rộng … mét.',
   collo:['加宽道路','马路很宽','又宽又长','宽阔'],
   ex_zh:'新建或加宽道路被公认为最基本的方法。',ex_py:'Xīnjiàn huò jiākuān dàolù bèi gōngrèn wéi zuì jīběn de fāngfǎ.',ex_vn:'Xây mới hoặc mở rộng đường được mọi người công nhận là cách cơ bản nhất.',
   exList:[
     {zh:'新建或加宽道路被公认为最基本的方法。',py:'Xīnjiàn huò jiākuān dàolù bèi gōngrèn wéi zuì jīběn de fāngfǎ.',vn:'Xây mới hoặc mở rộng đường được mọi người công nhận là cách cơ bản nhất.'},
     {zh:'这条河有两百多米宽。',py:'Zhè tiáo hé yǒu liǎngbǎi duō mǐ kuān.',vn:'Con sông này rộng hơn hai trăm mét.'},
     {zh:'我家门口的马路又宽又直，可车还是越来越多。',py:'Wǒ jiā ménkǒu de mǎlù yòu kuān yòu zhí, kě chē háishi yuè lái yuè duō.',vn:'Con đường trước nhà tôi vừa rộng vừa thẳng, thế mà xe vẫn ngày càng nhiều.'}
   ],
   colloFull:[
     {zh:'加宽道路',py:'jiākuān dàolù',vn:'nới rộng đường'},
     {zh:'马路很宽',py:'mǎlù hěn kuān',vn:'đường rất rộng'},
     {zh:'又宽又长',py:'yòu kuān yòu cháng',vn:'vừa rộng vừa dài'},
     {zh:'宽阔',py:'kuānkuò',vn:'rộng rãi, bao la'},
     {zh:'有十米宽',py:'yǒu shí mǐ kuān',vn:'rộng mười mét'}
   ],
   patterns:[
     {s:'N + 有 + số + 米 + 宽',m:'(Cái gì) rộng … mét'},
     {s:'加宽 + N (道路 / 马路)',m:'Làm rộng thêm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con đường này đã được nới rộng, không còn tắc như trước nữa.',answer:'这条路已经被加宽了，不像以前那么堵了。',answerPy:'Zhè tiáo lù yǐjīng bèi jiākuān le, bú xiàng yǐqián nàme dǔ le.',
      note:'加宽 = nới rộng. Câu 被 không cần nêu người làm.',pair:'被'},
     {promptLang:'vi',prompt:'Đường càng rộng, xe lại càng nhiều.',answer:'马路越来越宽，车也越来越多。',answerPy:'Mǎlù yuè lái yuè kuān, chē yě yuè lái yuè duō.',
      note:'Hai vế song song với 越来越.',pair:'越来越'}
   ]},

  {n:9,zh:'主观',py:'zhǔguān',pos:'Tính từ',vn:'chủ quan',hv:'chủ quan',em:'🤔',lesson:1,
   explain:['Xuất phát từ suy nghĩ, cảm nhận riêng của mình, không dựa trên thực tế; trái nghĩa 客观 (khách quan).','Trong bài: 美好的主观愿望 = mong muốn chủ quan tốt đẹp (nhưng thực tế không như vậy).'],
   usage:'主观的 + 愿望 / 意见 / 办法 / 因素 / 态度 / 判断 / 喜好 / 想象 (bảng 搭配 của sách); 太主观了. Chú ý: tiếng Việt "chủ quan" còn nghĩa là "coi thường, lơ là" (đừng chủ quan!) — tiếng Trung KHÔNG có nghĩa này, phải nói 大意 / 粗心.',
   collo:['主观愿望','主观判断','主观因素','太主观了'],
   ex_zh:'但事实证明这只是我们美好的主观愿望。',ex_py:'Dàn shìshí zhèngmíng zhè zhǐ shì wǒmen měihǎo de zhǔguān yuànwàng.',ex_vn:'Nhưng thực tế đã chứng minh đây chỉ là mong muốn chủ quan tốt đẹp của chúng ta.',
   exList:[
     {zh:'但事实证明这只是我们美好的主观愿望。',py:'Dàn shìshí zhèngmíng zhè zhǐ shì wǒmen měihǎo de zhǔguān yuànwàng.',vn:'Nhưng thực tế đã chứng minh đây chỉ là mong muốn chủ quan tốt đẹp của chúng ta.'},
     {zh:'你的看法太主观了，应该多听听别人的意见。',py:'Nǐ de kànfǎ tài zhǔguān le, yīnggāi duō tīngting biérén de yìjiàn.',vn:'Cách nhìn của cậu chủ quan quá, nên nghe thêm ý kiến người khác.'},
     {zh:'考试没考好，有主观因素，也有客观因素。',py:'Kǎoshì méi kǎohǎo, yǒu zhǔguān yīnsù, yě yǒu kèguān yīnsù.',vn:'Thi không tốt có nguyên nhân chủ quan, cũng có nguyên nhân khách quan.'}
   ],
   colloFull:[
     {zh:'主观愿望',py:'zhǔguān yuànwàng',vn:'mong muốn chủ quan'},
     {zh:'主观判断',py:'zhǔguān pànduàn',vn:'phán đoán chủ quan'},
     {zh:'主观因素',py:'zhǔguān yīnsù',vn:'yếu tố chủ quan'},
     {zh:'太主观了',py:'tài zhǔguān le',vn:'chủ quan quá'},
     {zh:'主观的想象',py:'zhǔguān de xiǎngxiàng',vn:'sự tưởng tượng chủ quan'}
   ],
   patterns:[
     {s:'主观的 + 愿望 / 判断 / 因素 / 态度',m:'Định ngữ chỉ tính chủ quan'},
     {s:'（看法 / 判断）+ 太主观了',m:'Chê một nhận định thiếu khách quan'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta không chỉ cần phán đoán chủ quan, mà cũng phải xem số liệu khách quan.',answer:'我们不仅要有主观判断，也要看客观数据。',answerPy:'Wǒmen bùjǐn yào yǒu zhǔguān pànduàn, yě yào kàn kèguān shùjù.',
      note:'主观判断 — cụm trong bảng 搭配.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Ý kiến của cậu ấy bị mọi người cho là quá chủ quan.',answer:'他的意见被大家认为太主观了。',answerPy:'Tā de yìjiàn bèi dàjiā rènwéi tài zhǔguān le.',
      note:'被 + người + 认为 + đánh giá.',pair:'被'}
   ]},

  {n:10,zh:'扩大',py:'kuòdà',pos:'Động từ',vn:'mở rộng, nới rộng, tăng thêm',hv:'khuếch đại',em:'🔍',lesson:1,
   explain:['Làm cho phạm vi, quy mô lớn thêm. Sách ghi 扩(大): 扩 đứng một mình cũng là "mở rộng" trong từ ghép — 扩建 (xây mở rộng), 扩展, 扩招.','Tân ngữ: 范围, 影响, 规模, 面积, 市场… (bài tập 3 của sách: 扩大影响).'],
   usage:'扩大 + 影响 / 范围 / 规模 / 面积 / 市场; 不断扩大. Chú ý: "khuếch đại" tiếng Việt thường là phóng to âm thanh / phóng đại sự thật; 扩大 chỉ là MỞ RỘNG.',
   collo:['扩大影响','扩大范围','扩大规模','道路扩建'],
   ex_zh:'道路扩建的速度远远跟不上车流量增加的速度。',ex_py:'Dàolù kuòjiàn de sùdù yuǎnyuǎn gēn bu shàng chēliúliàng zēngjiā de sùdù.',ex_vn:'Tốc độ mở rộng đường còn lâu mới theo kịp tốc độ tăng lưu lượng xe.',
   exList:[
     {zh:'道路扩建的速度远远跟不上车流量增加的速度。',py:'Dàolù kuòjiàn de sùdù yuǎnyuǎn gēn bu shàng chēliúliàng zēngjiā de sùdù.',vn:'Tốc độ mở rộng đường còn lâu mới theo kịp tốc độ tăng lưu lượng xe.'},
     {zh:'这次活动扩大了汉语在我们学校的影响。',py:'Zhè cì huódòng kuòdàle Hànyǔ zài wǒmen xuéxiào de yǐngxiǎng.',vn:'Hoạt động lần này đã mở rộng ảnh hưởng của tiếng Trung trong trường chúng tôi.'},
     {zh:'公司打算明年扩大生产规模。',py:'Gōngsī dǎsuan míngnián kuòdà shēngchǎn guīmó.',vn:'Công ty dự định sang năm mở rộng quy mô sản xuất.'}
   ],
   colloFull:[
     {zh:'扩大影响',py:'kuòdà yǐngxiǎng',vn:'mở rộng ảnh hưởng'},
     {zh:'扩大范围',py:'kuòdà fànwéi',vn:'mở rộng phạm vi'},
     {zh:'扩大规模',py:'kuòdà guīmó',vn:'mở rộng quy mô'},
     {zh:'道路扩建',py:'dàolù kuòjiàn',vn:'mở rộng (xây thêm) đường'},
     {zh:'不断扩大',py:'búduàn kuòdà',vn:'không ngừng mở rộng'}
   ],
   patterns:[
     {s:'扩大 + 影响 / 范围 / 规模 / 市场',m:'Mở rộng cái gì (trừu tượng hoặc quy mô)'},
     {s:'扩 + V (扩建 / 扩展 / 扩招)',m:'扩 đứng đầu từ ghép, nghĩa "mở rộng"'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mở rộng phạm vi tìm kiếm là sẽ tìm được.',answer:'只要扩大寻找的范围，就能找到。',answerPy:'Zhǐyào kuòdà xúnzhǎo de fànwéi, jiù néng zhǎodào.',
      note:'扩大 + 范围 (ôn 范围 bài 28).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Ảnh hưởng của cuộc thi này ngày càng mở rộng.',answer:'这个比赛的影响越来越大了。',answerPy:'Zhège bǐsài de yǐngxiǎng yuè lái yuè dà le.',
      note:'Khi 影响 làm chủ ngữ, dùng tính từ 大: 影响越来越大; khi làm tân ngữ mới dùng 扩大影响.',pair:'越来越'}
   ]},

  {n:11,zh:'根治',py:'gēnzhì',pos:'Động từ',vn:'trị tận gốc, chữa dứt điểm',hv:'căn trị',em:'🌱',lesson:1,
   explain:['根 = gốc rễ, 治 = trị. Giải quyết triệt để từ gốc một căn bệnh hoặc một vấn đề, để nó không tái phát.','Khác 缓解 (chỉ làm dịu bớt): 缓解交通 là giảm tải, 根治交通拥堵 là chấm dứt ùn tắc tận gốc.'],
   usage:'根治 + 疾病 / 问题 / 拥堵 / 污染; 得到根治; 很难根治. Hay dùng trong câu hỏi 如何根治……? và câu phủ định 无法根治.',
   collo:['根治拥堵','根治疾病','很难根治','彻底根治'],
   ex_zh:'那么，如何根治交通拥堵呢？',ex_py:'Nàme, rúhé gēnzhì jiāotōng yōngdǔ ne?',ex_vn:'Vậy, làm thế nào để trị tận gốc ùn tắc giao thông?',
   exList:[
     {zh:'那么，如何根治交通拥堵呢？',py:'Nàme, rúhé gēnzhì jiāotōng yōngdǔ ne?',vn:'Vậy, làm thế nào để trị tận gốc ùn tắc giao thông?'},
     {zh:'这种病现在还无法根治，只能靠药物缓解。',py:'Zhè zhǒng bìng xiànzài hái wúfǎ gēnzhì, zhǐ néng kào yàowù huǎnjiě.',vn:'Bệnh này hiện vẫn chưa thể chữa dứt điểm, chỉ có thể dựa vào thuốc để giảm nhẹ.'},
     {zh:'要根治河水污染，必须先关掉那些工厂。',py:'Yào gēnzhì héshuǐ wūrǎn, bìxū xiān guāndiào nàxiē gōngchǎng.',vn:'Muốn trị tận gốc ô nhiễm nước sông thì trước hết phải đóng cửa những nhà máy đó.'}
   ],
   colloFull:[
     {zh:'根治拥堵',py:'gēnzhì yōngdǔ',vn:'trị tận gốc ùn tắc'},
     {zh:'根治疾病',py:'gēnzhì jíbìng',vn:'chữa dứt bệnh'},
     {zh:'很难根治',py:'hěn nán gēnzhì',vn:'rất khó trị tận gốc'},
     {zh:'彻底根治',py:'chèdǐ gēnzhì',vn:'trị dứt điểm hoàn toàn'},
     {zh:'无法根治',py:'wúfǎ gēnzhì',vn:'không thể trị tận gốc'}
   ],
   patterns:[
     {s:'如何 / 怎样 + 根治 + 问题？',m:'Hỏi cách giải quyết tận gốc'},
     {s:'无法 / 很难 + 根治，只能 + 缓解',m:'Không trị tận gốc được, chỉ làm dịu bớt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ mở rộng đường thì không thể trị tận gốc ùn tắc giao thông.',answer:'只靠扩大道路是不能根治交通拥堵的。',answerPy:'Zhǐ kào kuòdà dàolù shì bù néng gēnzhì jiāotōng yōngdǔ de.',
      note:'是……的 ở đây nhấn mạnh sự khẳng định. Ôn 扩大 (số 10).',pair:'是……的'},
     {promptLang:'vi',prompt:'Căn bệnh này tuy khó chữa dứt, nhưng có thể giảm nhẹ.',answer:'这种病虽然很难根治，但是可以缓解。',answerPy:'Zhè zhǒng bìng suīrán hěn nán gēnzhì, dànshì kěyǐ huǎnjiě.',
      note:'根治 (tận gốc) ≠ 缓解 (dịu bớt).',pair:'虽然……但是……'}
   ]},

  {n:12,zh:'不妨',py:'bùfáng',pos:'Phó từ',vn:'đừng ngại, cứ thử, không sao (mà) …',hv:'bất phương',em:'👍',lesson:1,
   explain:['Dùng để GỢI Ý nhẹ nhàng: làm như vậy cũng không hại gì, cứ thử xem. 妨 = cản trở, 不妨 = không cản trở gì.','Đứng trước động từ; động từ sau thường lặp lại hoặc có 一下 / 试试: 不妨听听, 不妨试一试.'],
   usage:'S + 不妨 + V(V) / V一下: 你不妨问问老师. Giọng khuyên nhủ lịch sự, mềm hơn 应该. Không dùng cho việc đã xảy ra.',
   collo:['不妨试试','不妨听听','不妨问一下','你不妨……'],
   ex_zh:'这里我们不妨听听佩·詹森的故事。',ex_py:'Zhèli wǒmen bùfáng tīngting Pèi Zhānsēn de gùshi.',ex_vn:'Ở đây chúng ta thử nghe câu chuyện của Pay Jensen xem.',
   exList:[
     {zh:'这里我们不妨听听佩·詹森的故事。',py:'Zhèli wǒmen bùfáng tīngting Pèi Zhānsēn de gùshi.',vn:'Ở đây chúng ta thử nghe câu chuyện của Pay Jensen xem.'},
     {zh:'这道题你要是不会做，不妨去问问老师。',py:'Zhè dào tí nǐ yàoshi bú huì zuò, bùfáng qù wènwen lǎoshī.',vn:'Bài này nếu cậu không làm được thì cứ đi hỏi thầy cô xem.'},
     {zh:'坐公交车上学也挺方便的，你不妨试一试。',py:'Zuò gōngjiāochē shàngxué yě tǐng fāngbiàn de, nǐ bùfáng shì yi shì.',vn:'Đi xe buýt đến trường cũng tiện lắm, cậu cứ thử một lần xem.'}
   ],
   colloFull:[
     {zh:'不妨试试',py:'bùfáng shìshi',vn:'cứ thử xem'},
     {zh:'不妨听听',py:'bùfáng tīngting',vn:'thử nghe xem'},
     {zh:'不妨问一下',py:'bùfáng wèn yíxià',vn:'cứ hỏi thử một chút'},
     {zh:'你不妨……',py:'nǐ bùfáng……',vn:'bạn cứ thử …'},
     {zh:'不妨换个角度',py:'bùfáng huàn ge jiǎodù',vn:'thử đổi góc nhìn xem'}
   ],
   patterns:[
     {s:'S + 不妨 + VV / V一下 / 试试',m:'Gợi ý nhẹ nhàng: cứ thử làm'},
     {s:'要是……，不妨……',m:'Nếu … thì cứ thử …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần cậu thấy áp lực lớn là cứ thử ra ngoài chạy bộ xem.',answer:'只要你觉得压力大，就不妨出去跑跑步。',answerPy:'Zhǐyào nǐ juéde yālì dà, jiù bùfáng chūqu pǎopao bù.',
      note:'不妨 + động từ lặp (跑跑步).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Cậu chưa bao giờ đi tàu điện ngầm ở đây à? Cứ thử một lần đi.',answer:'你从来没坐过这里的地铁吗？不妨试一次吧。',answerPy:'Nǐ cónglái méi zuòguo zhèli de dìtiě ma? Bùfáng shì yí cì ba.',
      note:'不妨 + V + 一次 = cứ thử một lần.',pair:'从来没……过'}
   ]},

  {n:13,zh:'展开',py:'zhǎnkāi',pos:'Động từ',vn:'triển khai, tiến hành; mở ra, trải ra',hv:'triển khai',em:'📂',lesson:1,
   explain:['Tiến hành một hoạt động trên quy mô lớn: 展开调查, 展开讨论, 展开竞争, 展开辩论 (bài tập 3 của sách).','Nghĩa gốc: mở ra, trải ra — 展开地图, 展开翅膀 (dang cánh).'],
   usage:'展开 + 调查 / 讨论 / 竞争 / 辩论 / 活动; 在……方面展开竞争. Tân ngữ thường là danh từ hai âm tiết chỉ hoạt động.',
   collo:['展开调查','展开讨论','展开竞争','展开辩论'],
   ex_zh:'于是，他开始展开调查，研究收集上来的数据。',ex_py:'Yúshì, tā kāishǐ zhǎnkāi diàochá, yánjiū shōují shànglai de shùjù.',ex_vn:'Thế là anh bắt đầu tiến hành điều tra, nghiên cứu các số liệu thu thập được.',
   exList:[
     {zh:'于是，他开始展开调查，研究收集上来的数据。',py:'Yúshì, tā kāishǐ zhǎnkāi diàochá, yánjiū shōují shànglai de shùjù.',vn:'Thế là anh bắt đầu tiến hành điều tra, nghiên cứu các số liệu thu thập được.'},
     {zh:'为了赢得顾客，双方一定会在服务方面展开竞争。',py:'Wèile yíngdé gùkè, shuāngfāng yídìng huì zài fúwù fāngmiàn zhǎnkāi jìngzhēng.',vn:'Để giành được khách hàng, hai bên chắc chắn sẽ triển khai cạnh tranh về mặt dịch vụ.'},
     {zh:'关于要不要穿校服，同学们展开了热烈的讨论。',py:'Guānyú yào bu yào chuān xiàofú, tóngxuémen zhǎnkāile rèliè de tǎolùn.',vn:'Về chuyện có nên mặc đồng phục hay không, các bạn đã tiến hành một cuộc thảo luận sôi nổi.'}
   ],
   colloFull:[
     {zh:'展开调查',py:'zhǎnkāi diàochá',vn:'tiến hành điều tra'},
     {zh:'展开讨论',py:'zhǎnkāi tǎolùn',vn:'tiến hành thảo luận'},
     {zh:'展开竞争',py:'zhǎnkāi jìngzhēng',vn:'triển khai cạnh tranh'},
     {zh:'展开辩论',py:'zhǎnkāi biànlùn',vn:'tiến hành tranh luận'},
     {zh:'展开地图',py:'zhǎnkāi dìtú',vn:'mở bản đồ ra'}
   ],
   patterns:[
     {s:'（在……方面）+ 展开 + 竞争 / 讨论 / 调查',m:'Tiến hành một hoạt động quy mô'},
     {s:'展开了 + 热烈的 + 讨论 / 辩论',m:'Đã diễn ra cuộc thảo luận sôi nổi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nghe thấy vấn đề này, cả lớp liền triển khai thảo luận.',answer:'一听到这个问题，全班就展开了讨论。',answerPy:'Yì tīngdào zhège wèntí, quán bān jiù zhǎnkāile tǎolùn.',
      note:'展开 + 讨论.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cuộc điều tra này là do nhà trường tiến hành.',answer:'这次调查是由学校展开的。',answerPy:'Zhè cì diàochá shì yóu xuéxiào zhǎnkāi de.',
      note:'是 + 由 + chủ thể + V + 的 nhấn mạnh người thực hiện.',pair:'是……的'}
   ]},

  {n:14,zh:'归纳',py:'guīnà',pos:'Động từ',vn:'tổng kết, tóm tắt, quy nạp',hv:'quy nạp',em:'🗂️',lesson:1,
   explain:['Từ nhiều sự việc, tài liệu cụ thể, rút ra điểm chung, kết luận hoặc ý chính.','Tân ngữ: 特点, 观点, 大意, 规律, 问题 (bài tập 3 của sách: 归纳观点).'],
   usage:'归纳 + 特点 / 大意 / 观点 / 规律; 把……归纳一下; 归纳起来. Thường dùng trong học tập: 归纳课文大意.',
   collo:['归纳特点','归纳大意','归纳观点','归纳起来'],
   ex_zh:'他研究收集上来的数据，归纳问题特点，并虚心咨询了有关专家。',ex_py:'Tā yánjiū shōují shànglai de shùjù, guīnà wèntí tèdiǎn, bìng xūxīn zīxúnle yǒuguān zhuānjiā.',ex_vn:'Anh nghiên cứu số liệu thu thập được, tổng kết đặc điểm của vấn đề, và khiêm tốn hỏi ý kiến các chuyên gia liên quan.',
   exList:[
     {zh:'他研究收集上来的数据，归纳问题特点，并虚心咨询了有关专家。',py:'Tā yánjiū shōují shànglai de shùjù, guīnà wèntí tèdiǎn, bìng xūxīn zīxúnle yǒuguān zhuānjiā.',vn:'Anh nghiên cứu số liệu thu thập được, tổng kết đặc điểm của vấn đề, và khiêm tốn hỏi ý kiến các chuyên gia liên quan.'},
     {zh:'请把这篇文章的大意归纳一下。',py:'Qǐng bǎ zhè piān wénzhāng de dàyì guīnà yíxià.',vn:'Hãy tóm tắt ý chính của bài văn này.'},
     {zh:'老师让我们把这几课的语法归纳起来，做成一张表。',py:'Lǎoshī ràng wǒmen bǎ zhè jǐ kè de yǔfǎ guīnà qǐlai, zuòchéng yì zhāng biǎo.',vn:'Thầy bảo chúng tôi tổng kết ngữ pháp mấy bài này lại, làm thành một cái bảng.'}
   ],
   colloFull:[
     {zh:'归纳特点',py:'guīnà tèdiǎn',vn:'tổng kết đặc điểm'},
     {zh:'归纳大意',py:'guīnà dàyì',vn:'tóm tắt ý chính'},
     {zh:'归纳观点',py:'guīnà guāndiǎn',vn:'tổng hợp quan điểm'},
     {zh:'归纳起来',py:'guīnà qǐlai',vn:'tổng kết lại'},
     {zh:'归纳规律',py:'guīnà guīlǜ',vn:'rút ra quy luật'}
   ],
   patterns:[
     {s:'把 + N + 归纳一下 / 归纳起来',m:'Tổng kết, tóm tắt cái gì'},
     {s:'归纳起来，……',m:'Tổng kết lại thì … (mở đầu câu kết luận)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em hãy tóm tắt ý chính của đoạn văn này.',answer:'请你把这段话的大意归纳一下。',answerPy:'Qǐng nǐ bǎ zhè duàn huà de dàyì guīnà yíxià.',
      note:'把 + 大意 + 归纳一下 (câu 29 sách bài tập).',pair:'把'},
     {promptLang:'vi',prompt:'Tổng kết lại, quan điểm của mọi người không chỉ khác nhau mà cũng đều có lý.',answer:'归纳起来，大家的观点不仅不同，也都有道理。',answerPy:'Guīnà qǐlai, dàjiā de guāndiǎn bùjǐn bùtóng, yě dōu yǒu dàolǐ.',
      note:'归纳起来 mở đầu câu kết luận.',pair:'不仅……也……'}
   ]},

  {n:15,zh:'虚心',py:'xūxīn',pos:'Tính từ',vn:'khiêm tốn, khiêm tốn tiếp thu',hv:'hư tâm',em:'🙇',lesson:1,
   explain:['Không tự mãn, sẵn lòng nghe và tiếp thu ý kiến của người khác (心 để "trống" → còn chỗ để học).','Hay làm trạng ngữ trước động từ: 虚心(地) + 请教 / 学习 / 咨询 / 接受批评 / 吸取教训 (bảng 搭配 của sách). Phân biệt với 谦虚 xem phần 词语辨析.'],
   usage:'虚心(地) + 请教 / 学习 / 听取 / 接受; 虚心使人进步. Nhấn mạnh THÁI ĐỘ TIẾP THU; không dùng để tả cách nói khiêm nhường về bản thân (việc đó là 谦虚).',
   collo:['虚心请教','虚心学习','虚心接受批评','虚心咨询'],
   ex_zh:'他归纳问题特点，并虚心咨询了有关专家。',ex_py:'Tā guīnà wèntí tèdiǎn, bìng xūxīn zīxúnle yǒuguān zhuānjiā.',ex_vn:'Anh tổng kết đặc điểm của vấn đề, và khiêm tốn hỏi ý kiến các chuyên gia liên quan.',
   exList:[
     {zh:'他归纳问题特点，并虚心咨询了有关专家。',py:'Tā guīnà wèntí tèdiǎn, bìng xūxīn zīxúnle yǒuguān zhuānjiā.',vn:'Anh tổng kết đặc điểm của vấn đề, và khiêm tốn hỏi ý kiến các chuyên gia liên quan.'},
     {zh:'一个好的领导能虚心听取不同的意见。',py:'Yí ge hǎo de lǐngdǎo néng xūxīn tīngqǔ bùtóng de yìjiàn.',vn:'Một người lãnh đạo giỏi có thể khiêm tốn lắng nghe những ý kiến khác nhau.'},
     {zh:'成绩好的同学也应该虚心向别人学习。',py:'Chéngjì hǎo de tóngxué yě yīnggāi xūxīn xiàng biérén xuéxí.',vn:'Bạn học giỏi cũng nên khiêm tốn học hỏi người khác.'}
   ],
   colloFull:[
     {zh:'虚心请教',py:'xūxīn qǐngjiào',vn:'khiêm tốn thỉnh giáo'},
     {zh:'虚心学习',py:'xūxīn xuéxí',vn:'khiêm tốn học hỏi'},
     {zh:'虚心接受批评',py:'xūxīn jiēshòu pīpíng',vn:'khiêm tốn nhận phê bình'},
     {zh:'虚心咨询',py:'xūxīn zīxún',vn:'khiêm tốn hỏi ý kiến'},
     {zh:'虚心吸取教训',py:'xūxīn xīqǔ jiàoxun',vn:'khiêm tốn rút kinh nghiệm'}
   ],
   patterns:[
     {s:'虚心(地) + 请教 / 学习 / 听取 / 接受',m:'Làm trạng ngữ: khiêm tốn làm gì'},
     {s:'虚心 + 向 + người + 学习 / 请教',m:'Khiêm tốn học hỏi ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bị thầy phê bình, cậu ấy không những không giận mà còn khiêm tốn tiếp thu.',answer:'被老师批评以后，他不但没生气，还虚心地接受了。',answerPy:'Bèi lǎoshī pīpíng yǐhòu, tā búdàn méi shēngqì, hái xūxīn de jiēshòu le.',
      note:'虚心地 + 接受. Vế đầu là câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần khiêm tốn học hỏi người khác thì sẽ tiến bộ.',answer:'只要虚心向别人学习，就会进步。',answerPy:'Zhǐyào xūxīn xiàng biérén xuéxí, jiù huì jìnbù.',
      note:'虚心 + 向 + người + 学习.',pair:'只要……就……'}
   ]},

  {n:16,zh:'咨询',py:'zīxún',pos:'Động từ',vn:'tư vấn, hỏi ý kiến',hv:'tư tuân',em:'💬',lesson:1,
   explain:['Hỏi ý kiến người có chuyên môn (bác sĩ, luật sư, chuyên gia, nhân viên bán hàng…) để được tư vấn.','咨询 cũng làm định ngữ / danh từ: 咨询服务, 咨询公司, 咨询台 (quầy tư vấn).'],
   usage:'咨询 + người có chuyên môn: 咨询专家 / 医生 / 律师; 向……咨询……; 咨询过了. Hỏi đường, hỏi giờ thông thường dùng 问, không dùng 咨询.',
   collo:['咨询专家','向医生咨询','咨询服务','咨询台'],
   ex_zh:'手术有风险，小明父母咨询了许多专家后，还是决定做。',ex_py:'Shǒushù yǒu fēngxiǎn, Xiǎomíng fùmǔ zīxúnle xǔduō zhuānjiā hòu, háishi juédìng zuò.',ex_vn:'Phẫu thuật có rủi ro, bố mẹ Tiểu Minh sau khi hỏi ý kiến nhiều chuyên gia vẫn quyết định làm.',
   exList:[
     {zh:'手术有风险，小明父母咨询了许多专家后，还是决定做。',py:'Shǒushù yǒu fēngxiǎn, Xiǎomíng fùmǔ zīxúnle xǔduō zhuānjiā hòu, háishi juédìng zuò.',vn:'Phẫu thuật có rủi ro, bố mẹ Tiểu Minh sau khi hỏi ý kiến nhiều chuyên gia vẫn quyết định làm.'},
     {zh:'你跟卖电视的售货员咨询了吗？',py:'Nǐ gēn mài diànshì de shòuhuòyuán zīxúnle ma?',vn:'Anh đã hỏi nhân viên bán tivi chưa?'},
     {zh:'选专业以前，最好向老师和学长咨询一下。',py:'Xuǎn zhuānyè yǐqián, zuìhǎo xiàng lǎoshī hé xuézhǎng zīxún yíxià.',vn:'Trước khi chọn ngành, tốt nhất nên hỏi ý kiến thầy cô và các anh chị khoá trên.'}
   ],
   colloFull:[
     {zh:'咨询专家',py:'zīxún zhuānjiā',vn:'hỏi ý kiến chuyên gia'},
     {zh:'向医生咨询',py:'xiàng yīshēng zīxún',vn:'hỏi ý kiến bác sĩ'},
     {zh:'咨询服务',py:'zīxún fúwù',vn:'dịch vụ tư vấn'},
     {zh:'咨询台',py:'zīxúntái',vn:'quầy tư vấn'},
     {zh:'电话咨询',py:'diànhuà zīxún',vn:'tư vấn qua điện thoại'}
   ],
   patterns:[
     {s:'咨询 + người (专家 / 医生 / 律师)',m:'Hỏi ý kiến ai'},
     {s:'向 / 跟 + người + 咨询 + (việc)',m:'Hỏi ai về việc gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ có vấn đề về pháp luật là cậu nên hỏi ý kiến luật sư.',answer:'一有法律问题，你就应该向律师咨询一下。',answerPy:'Yì yǒu fǎlǜ wèntí, nǐ jiù yīnggāi xiàng lǜshī zīxún yíxià.',
      note:'向 + người + 咨询一下.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chuyện du học, tôi đã hỏi ý kiến thầy giáo rồi.',answer:'留学的事，我是向老师咨询过的。',answerPy:'Liúxué de shì, wǒ shì xiàng lǎoshī zīxúnguo de.',
      note:'是……的 nhấn mạnh người được hỏi.',pair:'是……的'}
   ]},

  {n:17,zh:'中旬',py:'zhōngxún',pos:'Danh từ',vn:'trung tuần (ngày 11–20 trong tháng)',hv:'trung tuần',em:'📅',lesson:1,
   explain:['旬 = khoảng 10 ngày. Một tháng chia 3 旬: 上旬 (1–10), 中旬 (11–20), 下旬 (21–cuối tháng).','Đứng sau tên tháng: 九月中旬, 下个月中旬.'],
   usage:'tháng + 上旬 / 中旬 / 下旬. Văn viết, thông báo hay dùng; khẩu ngữ hay nói 月中.',
   collo:['九月中旬','月中旬','上旬','下旬'],
   ex_zh:'九月中旬的一天早晨，詹森照常提前出门。',ex_py:'Jiǔ yuè zhōngxún de yì tiān zǎochen, Zhānsēn zhàocháng tíqián chūmén.',ex_vn:'Một buổi sáng trung tuần tháng Chín, Jensen như thường lệ ra khỏi nhà sớm.',
   exList:[
     {zh:'九月中旬的一天早晨，詹森照常提前出门。',py:'Jiǔ yuè zhōngxún de yì tiān zǎochen, Zhānsēn zhàocháng tíqián chūmén.',vn:'Một buổi sáng trung tuần tháng Chín, Jensen như thường lệ ra khỏi nhà sớm.'},
     {zh:'我们学校的期中考试一般安排在十月中旬。',py:'Wǒmen xuéxiào de qīzhōng kǎoshì yìbān ānpái zài shí yuè zhōngxún.',vn:'Kỳ thi giữa kỳ của trường tôi thường xếp vào trung tuần tháng Mười.'},
     {zh:'这批货最晚下个月上旬就能到。',py:'Zhè pī huò zuì wǎn xià ge yuè shàngxún jiù néng dào.',vn:'Lô hàng này muộn nhất thượng tuần tháng sau là đến.'}
   ],
   colloFull:[
     {zh:'九月中旬',py:'jiǔ yuè zhōngxún',vn:'trung tuần tháng Chín'},
     {zh:'月中旬',py:'yuè zhōngxún',vn:'giữa tháng'},
     {zh:'上旬',py:'shàngxún',vn:'thượng tuần (ngày 1–10)'},
     {zh:'下旬',py:'xiàxún',vn:'hạ tuần (ngày 21–cuối tháng)'},
     {zh:'下个月中旬',py:'xià ge yuè zhōngxún',vn:'giữa tháng sau'}
   ],
   patterns:[
     {s:'số + 月 + 上旬 / 中旬 / 下旬',m:'Mốc thời gian 10 ngày trong tháng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đến Bắc Kinh vào trung tuần tháng Bảy.',answer:'他是七月中旬到北京的。',answerPy:'Tā shì qī yuè zhōngxún dào Běijīng de.',
      note:'是……的 nhấn mạnh thời gian.',pair:'是……的'},
     {promptLang:'vi',prompt:'Vừa đến trung tuần tháng Mười Hai, trời liền lạnh hẳn.',answer:'一到十二月中旬，天气就冷起来了。',answerPy:'Yí dào shí\'èr yuè zhōngxún, tiānqì jiù lěng qǐlai le.',
      note:'一到 + mốc thời gian + 就…….',pair:'一……就……'}
   ]},

  {n:18,zh:'照常',py:'zhàocháng',pos:'Phó từ / Động từ',vn:'như thường lệ, vẫn như thường',hv:'chiếu thường',em:'🔁',lesson:1,
   explain:['Động từ: giống như bình thường, không thay đổi — thường đứng cuối câu: 一切照常, 商业活动照常.','Phó từ: tình hình vẫn tiếp tục không đổi — đứng trước động từ: 照常举行, 照常上班, 照常提前出门.'],
   usage:'一切照常 / ……照常 (vị ngữ); 照常 + 营业 / 上课 / 举行 / 上班 (trạng ngữ). Hay đi với 虽然……但…… hoặc 还是: 虽然下雨了，比赛还是照常举行.',
   collo:['一切照常','照常营业','照常举行','照常上班'],
   ex_zh:'九月中旬的一天早晨，詹森照常提前出门赶在早高峰之前去交通部。',ex_py:'Jiǔ yuè zhōngxún de yì tiān zǎochen, Zhānsēn zhàocháng tíqián chūmén gǎn zài zǎo gāofēng zhīqián qù jiāotōngbù.',ex_vn:'Một buổi sáng trung tuần tháng Chín, Jensen như thường lệ ra khỏi nhà sớm để kịp đến Ban Giao thông trước giờ cao điểm.',
   exList:[
     {zh:'九月中旬的一天早晨，詹森照常提前出门赶在早高峰之前去交通部。',py:'Jiǔ yuè zhōngxún de yì tiān zǎochen, Zhānsēn zhàocháng tíqián chūmén gǎn zài zǎo gāofēng zhīqián qù jiāotōngbù.',vn:'Một buổi sáng trung tuần tháng Chín, Jensen như thường lệ ra khỏi nhà sớm để kịp đến Ban Giao thông trước giờ cao điểm.'},
     {zh:'虽然战争临近，但这里的日常生活，一切照常。',py:'Suīrán zhànzhēng línjìn, dàn zhèli de rìcháng shēnghuó, yíqiè zhàocháng.',vn:'Tuy chiến tranh đến gần, nhưng cuộc sống hằng ngày ở đây vẫn như thường.'},
     {zh:'第二天早晨他还是照常第一个来到单位。',py:'Dì-èr tiān zǎochen tā háishi zhàocháng dì-yī ge láidào dānwèi.',vn:'Sáng hôm sau anh ấy vẫn như thường lệ là người đầu tiên đến cơ quan.'}
   ],
   colloFull:[
     {zh:'一切照常',py:'yíqiè zhàocháng',vn:'mọi thứ vẫn như thường'},
     {zh:'照常营业',py:'zhàocháng yíngyè',vn:'vẫn mở cửa kinh doanh'},
     {zh:'照常举行',py:'zhàocháng jǔxíng',vn:'vẫn tổ chức như thường'},
     {zh:'照常上班',py:'zhàocháng shàngbān',vn:'vẫn đi làm như thường'},
     {zh:'照常上课',py:'zhàocháng shàngkè',vn:'vẫn lên lớp như thường'}
   ],
   patterns:[
     {s:'……，一切照常 / ……照常',m:'Động từ làm vị ngữ, cuối câu'},
     {s:'（虽然……，）S + 还是 + 照常 + V',m:'Phó từ: vẫn làm như bình thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy trời mưa to, nhưng buổi chào cờ vẫn tổ chức như thường.',answer:'虽然下大雨，但是升旗仪式还是照常举行。',answerPy:'Suīrán xià dà yǔ, dànshì shēngqí yíshì háishi zhàocháng jǔxíng.',
      note:'照常 + 举行; 还是 nhấn mạnh "vẫn".',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Tết cửa hàng đó vẫn mở cửa như thường, cậu cứ yên tâm.',answer:'那家商店春节是照常营业的，你放心吧。',answerPy:'Nà jiā shāngdiàn Chūn Jié shì zhàocháng yíngyè de, nǐ fàngxīn ba.',
      note:'照常营业 — cụm cố định (đáp án luyện tập 练一练 (3)).',pair:'是……的'}
   ]},

  {n:19,zh:'健身',py:'jiànshēn',pos:'Động từ',vn:'tập thể dục, rèn luyện thân thể',hv:'kiện thân',em:'🏃',lesson:1,
   explain:['Tập luyện để cơ thể khoẻ mạnh: 健 = khoẻ, 身 = thân thể.','Động từ li hợp kiểu V + O, KHÔNG mang tân ngữ phía sau: 去健身房健身, không nói ✗ 健身身体.'],
   usage:'去健身 / 健身房 (phòng gym) / 健身的人 / 健身运动. Muốn nói "rèn luyện thân thể" có tân ngữ thì dùng 锻炼身体.',
   collo:['健身房','去健身','健身的人','健身运动'],
   ex_zh:'他看到一个健身的人慢跑通过一个有过街天桥的路口。',ex_py:'Tā kàndào yí ge jiànshēn de rén mànpǎo tōngguò yí ge yǒu guòjiē tiānqiáo de lùkǒu.',ex_vn:'Anh thấy một người đang tập thể dục chạy chậm qua một giao lộ có cầu vượt cho người đi bộ.',
   exList:[
     {zh:'他看到一个健身的人慢跑通过一个有过街天桥的路口。',py:'Tā kàndào yí ge jiànshēn de rén mànpǎo tōngguò yí ge yǒu guòjiē tiānqiáo de lùkǒu.',vn:'Anh thấy một người đang tập thể dục chạy chậm qua một giao lộ có cầu vượt cho người đi bộ.'},
     {zh:'我爸爸每天下班后都去健身房健身。',py:'Wǒ bàba měi tiān xiàbān hòu dōu qù jiànshēnfáng jiànshēn.',vn:'Bố tôi ngày nào tan làm cũng đến phòng gym tập.'},
     {zh:'每天早上，公园里都有很多健身的老人。',py:'Měi tiān zǎoshang, gōngyuán li dōu yǒu hěn duō jiànshēn de lǎorén.',vn:'Sáng nào trong công viên cũng có rất nhiều cụ già tập thể dục.'}
   ],
   colloFull:[
     {zh:'健身房',py:'jiànshēnfáng',vn:'phòng tập gym'},
     {zh:'去健身',py:'qù jiànshēn',vn:'đi tập thể dục'},
     {zh:'健身的人',py:'jiànshēn de rén',vn:'người tập thể dục'},
     {zh:'健身运动',py:'jiànshēn yùndòng',vn:'môn vận động rèn luyện sức khoẻ'},
     {zh:'健身教练',py:'jiànshēn jiàoliàn',vn:'huấn luyện viên thể hình'}
   ],
   patterns:[
     {s:'去 + 健身房 + 健身',m:'Đi tập ở phòng gym'},
     {s:'健身的 + 人 / 老人',m:'Người đang tập thể dục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần kiên trì tập thể dục thì cơ thể sẽ ngày càng khoẻ.',answer:'只要坚持健身，身体就会越来越好。',answerPy:'Zhǐyào jiānchí jiànshēn, shēntǐ jiù huì yuè lái yuè hǎo.',
      note:'健身 không mang tân ngữ. Ôn 坚持.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ đi phòng gym tập.',answer:'我从来没去健身房健过身。',answerPy:'Wǒ cónglái méi qù jiànshēnfáng jiànguo shēn.',
      note:'Động từ li hợp: 过 chen giữa → 健过身.',pair:'从来没……过'}
   ]},

  {n:20,zh:'图',py:'tú',pos:'Động từ',vn:'ham, mưu cầu, nhắm vào (cái lợi)',hv:'đồ',em:'🎯',lesson:1,
   explain:['Động từ: mưu cầu, ham muốn có được (thường là cái lợi nhỏ, sự tiện lợi): 图省事, 图方便, 图便宜, 图什么.','Nghĩa khác (danh từ): bức vẽ, hình — 地图, 图片. Chữ trong bài dùng nghĩa động từ.'],
   usage:'图 + 省事 / 方便 / 便宜 / 快 / 名利; 为(了)图……; 你图什么? (cậu làm vậy để được gì?). Thường mang ý chê nhẹ: vì ham lợi trước mắt mà làm sai.',
   collo:['图省事','图方便','图便宜','图什么'],
   ex_zh:'他为图省事没上天桥，而是横穿马路。',ex_py:'Tā wèi tú shěngshì méi shàng tiānqiáo, ér shì héngchuān mǎlù.',ex_vn:'Để đỡ phiền, anh ta không lên cầu vượt mà băng ngang qua đường.',
   exList:[
     {zh:'他为图省事没上天桥，而是横穿马路。',py:'Tā wèi tú shěngshì méi shàng tiānqiáo, ér shì héngchuān mǎlù.',vn:'Để đỡ phiền, anh ta không lên cầu vượt mà băng ngang qua đường.'},
     {zh:'很多人图方便，买了一大堆一次性的饭盒。',py:'Hěn duō rén tú fāngbiàn, mǎile yí dà duī yícìxìng de fànhé.',vn:'Nhiều người ham tiện, mua cả đống hộp cơm dùng một lần.'},
     {zh:'他每天帮助邻居，也不图什么，就是觉得高兴。',py:'Tā měi tiān bāngzhù línjū, yě bù tú shénme, jiù shì juéde gāoxìng.',vn:'Ngày nào anh ấy cũng giúp hàng xóm, chẳng mưu cầu gì, chỉ thấy vui thôi.'}
   ],
   colloFull:[
     {zh:'图省事',py:'tú shěngshì',vn:'ham đỡ phiền'},
     {zh:'图方便',py:'tú fāngbiàn',vn:'ham tiện'},
     {zh:'图便宜',py:'tú piányi',vn:'ham rẻ'},
     {zh:'图什么',py:'tú shénme',vn:'nhắm vào cái gì, để được gì'},
     {zh:'不图名利',py:'bù tú mínglì',vn:'không màng danh lợi'}
   ],
   patterns:[
     {s:'为(了) + 图 + 省事 / 方便，……',m:'Vì ham tiện mà làm gì (thường là sai)'},
     {s:'不图什么，就是……',m:'Chẳng mưu cầu gì, chỉ là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì ham rẻ, cô ấy mua một chiếc điện thoại, kết quả dùng một tuần đã hỏng.',answer:'她图便宜买了一个手机，结果用了一个星期就坏了。',answerPy:'Tā tú piányi mǎile yí ge shǒujī, jiéguǒ yòngle yí ge xīngqī jiù huài le.',
      note:'图便宜 thường dẫn tới kết quả không hay.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Anh ta vì ham đỡ phiền mà băng qua đường, bị xe đâm ngã.',answer:'他为图省事横穿马路，被车撞倒了。',answerPy:'Tā wèi tú shěngshì héngchuān mǎlù, bèi chē zhuàngdǎo le.',
      note:'为图省事 — câu của bài khoá; vế sau là câu 被.',pair:'被'}
   ]},

  {n:21,zh:'受伤',py:'shòu shāng',pos:'Động từ',vn:'bị thương',hv:'thụ thương',em:'🩹',lesson:1,
   explain:['Sách ghi 受(伤): 受 = chịu, bị (nhận lấy điều gì); 受伤 = bị thương.','Là động từ li hợp: chen thành phần vào giữa được — 受了点轻伤, 受过伤, 受了重伤. 受 còn đi với 受欢迎, 受影响, 受批评, 受感动.'],
   usage:'受伤了 / 受了(点)轻伤 / 受了重伤; 手受伤了; 在……中受伤. Không nói ✗ 受伤了手 (phải nói 手受伤了 / 伤了手).',
   collo:['受了点轻伤','受重伤','受过伤','受欢迎'],
   ex_zh:'虽然最后他只是受了点轻伤，而且有保险可以赔偿，但司机还是被吓得不轻。',ex_py:'Suīrán zuìhòu tā zhǐ shì shòule diǎnr qīngshāng, érqiě yǒu bǎoxiǎn kěyǐ péicháng, dàn sījī háishi bèi xià de bù qīng.',ex_vn:'Tuy cuối cùng anh ta chỉ bị thương nhẹ, lại có bảo hiểm bồi thường, nhưng người tài xế vẫn bị một phen hoảng hồn.',
   exList:[
     {zh:'虽然最后他只是受了点轻伤，而且有保险可以赔偿，但司机还是被吓得不轻。',py:'Suīrán zuìhòu tā zhǐ shì shòule diǎnr qīngshāng, érqiě yǒu bǎoxiǎn kěyǐ péicháng, dàn sījī háishi bèi xià de bù qīng.',vn:'Tuy cuối cùng anh ta chỉ bị thương nhẹ, lại có bảo hiểm bồi thường, nhưng người tài xế vẫn bị một phen hoảng hồn.'},
     {zh:'他踢足球的时候腿受伤了，一个月不能上体育课。',py:'Tā tī zúqiú de shíhou tuǐ shòu shāng le, yí ge yuè bù néng shàng tǐyùkè.',vn:'Cậu ấy bị thương ở chân khi đá bóng, một tháng không được học thể dục.'},
     {zh:'这次事故中，有三个人受了重伤。',py:'Zhè cì shìgù zhōng, yǒu sān ge rén shòule zhòngshāng.',vn:'Trong vụ tai nạn này, có ba người bị thương nặng.'}
   ],
   colloFull:[
     {zh:'受了点轻伤',py:'shòule diǎnr qīngshāng',vn:'bị thương nhẹ'},
     {zh:'受重伤',py:'shòu zhòngshāng',vn:'bị thương nặng'},
     {zh:'受过伤',py:'shòuguo shāng',vn:'từng bị thương'},
     {zh:'受欢迎',py:'shòu huānyíng',vn:'được hoan nghênh'},
     {zh:'腿受伤了',py:'tuǐ shòu shāng le',vn:'chân bị thương'}
   ],
   patterns:[
     {s:'（bộ phận cơ thể）+ 受伤了',m:'Bị thương ở đâu'},
     {s:'受了 + 点 / 很重的 + 伤',m:'Chen thành phần vào giữa 受 và 伤'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy bị xe đạp đâm, tay bị thương rồi.',answer:'他被自行车撞了，手受伤了。',answerPy:'Tā bèi zìxíngchē zhuàng le, shǒu shòu shāng le.',
      note:'手受伤了 — bộ phận cơ thể làm chủ ngữ; không nói ✗ 受伤了手.',pair:'被'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ bị thương khi chơi thể thao.',answer:'我运动的时候从来没受过伤。',answerPy:'Wǒ yùndòng de shíhou cónglái méi shòuguo shāng.',
      note:'Li hợp: 过 chen vào giữa → 受过伤.',pair:'从来没……过'}
   ]},

  {n:22,zh:'保险',py:'bǎoxiǎn',pos:'Danh từ / Tính từ',vn:'bảo hiểm; chắc chắn, an toàn',hv:'bảo hiểm',em:'🛡️',lesson:1,
   explain:['Danh từ: bảo hiểm, hợp đồng bảo hiểm — 买保险, 保险公司, 汽车保险.','Tính từ (khẩu ngữ): chắc ăn, an toàn, đáng tin — 这样做比较保险; 派他去不太保险 (bài tập 1 của sách).'],
   usage:'买 / 上 + 保险; 保险公司; 有保险可以赔偿. Tính từ: 不太保险, 为了保险起见 (để chắc chắn). Không nói ✗ 很保险公司.',
   collo:['买保险','保险公司','不太保险','为了保险起见'],
   ex_zh:'他只是受了点轻伤，而且有保险可以赔偿。',ex_py:'Tā zhǐ shì shòule diǎnr qīngshāng, érqiě yǒu bǎoxiǎn kěyǐ péicháng.',ex_vn:'Anh ta chỉ bị thương nhẹ, lại có bảo hiểm bồi thường.',
   exList:[
     {zh:'他只是受了点轻伤，而且有保险可以赔偿。',py:'Tā zhǐ shì shòule diǎnr qīngshāng, érqiě yǒu bǎoxiǎn kěyǐ péicháng.',vn:'Anh ta chỉ bị thương nhẹ, lại có bảo hiểm bồi thường.'},
     {zh:'小李办事太马虎，你派他去可不太保险。',py:'Xiǎo Lǐ bàn shì tài mǎhu, nǐ pài tā qù kě bú tài bǎoxiǎn.',vn:'Tiểu Lý làm việc cẩu thả quá, cử cậu ta đi thì không chắc ăn lắm đâu.'},
     {zh:'为了保险起见，出门前我们再检查一遍护照吧。',py:'Wèile bǎoxiǎn qǐjiàn, chūmén qián wǒmen zài jiǎnchá yí biàn hùzhào ba.',vn:'Để cho chắc, trước khi ra khỏi nhà mình kiểm tra hộ chiếu thêm một lượt nhé.'}
   ],
   colloFull:[
     {zh:'买保险',py:'mǎi bǎoxiǎn',vn:'mua bảo hiểm'},
     {zh:'保险公司',py:'bǎoxiǎn gōngsī',vn:'công ty bảo hiểm'},
     {zh:'不太保险',py:'bú tài bǎoxiǎn',vn:'không chắc ăn lắm'},
     {zh:'为了保险起见',py:'wèile bǎoxiǎn qǐjiàn',vn:'để cho chắc chắn'},
     {zh:'汽车保险',py:'qìchē bǎoxiǎn',vn:'bảo hiểm ô tô'}
   ],
   patterns:[
     {s:'有保险 + 可以 + 赔偿',m:'Có bảo hiểm chi trả'},
     {s:'这样做 + 比较 / 不太 + 保险',m:'Tính từ: cách làm chắc ăn hay không'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xe của anh ấy bị đâm rồi, may mà đã mua bảo hiểm.',answer:'他的车被撞了，幸亏买了保险。',answerPy:'Tā de chē bèi zhuàng le, xìngkuī mǎile bǎoxiǎn.',
      note:'买保险; ôn 幸亏 (may mà).',pair:'被'},
     {promptLang:'vi',prompt:'Tuy đi taxi nhanh hơn, nhưng đi tàu điện ngầm chắc ăn hơn, không sợ tắc đường.',answer:'虽然打车比较快，但是坐地铁更保险，不怕堵车。',answerPy:'Suīrán dǎchē bǐjiào kuài, dànshì zuò dìtiě gèng bǎoxiǎn, bú pà dǔchē.',
      note:'保险 làm tính từ: chắc ăn.',pair:'虽然……但是……'}
   ]},

  {n:23,zh:'赔偿',py:'péicháng',pos:'Động từ',vn:'bồi thường, đền bù',hv:'bồi thường',em:'💰',lesson:1,
   explain:['Trả lại tiền hoặc vật cho người bị thiệt hại vì mình gây ra tổn thất.','Tân ngữ: 损失 (bài tập 3 của sách: 赔偿损失), 钱, 医药费. Danh từ hoá: 赔偿手续, 得到赔偿.'],
   usage:'赔偿 + 损失 / 医药费; 向……赔偿; 给……赔偿……; 办理赔偿手续; 得到赔偿. Khẩu ngữ hay nói gọn là 赔: 赔钱.',
   collo:['赔偿损失','赔偿手续','得到赔偿','赔偿医药费'],
   ex_zh:'车的问题已经处理好了，保险公司正在办理赔偿手续。',ex_py:'Chē de wèntí yǐjīng chǔlǐ hǎo le, bǎoxiǎn gōngsī zhèngzài bànlǐ péicháng shǒuxù.',ex_vn:'Chuyện chiếc xe đã xử lý xong, công ty bảo hiểm đang làm thủ tục bồi thường.',
   exList:[
     {zh:'车的问题已经处理好了，保险公司正在办理赔偿手续。',py:'Chē de wèntí yǐjīng chǔlǐ hǎo le, bǎoxiǎn gōngsī zhèngzài bànlǐ péicháng shǒuxù.',vn:'Chuyện chiếc xe đã xử lý xong, công ty bảo hiểm đang làm thủ tục bồi thường.'},
     {zh:'你把我的书弄坏了，得赔偿我。',py:'Nǐ bǎ wǒ de shū nònghuài le, děi péicháng wǒ.',vn:'Cậu làm hỏng sách của tớ rồi, phải đền cho tớ đấy.'},
     {zh:'这次事故的损失都由对方赔偿。',py:'Zhè cì shìgù de sǔnshī dōu yóu duìfāng péicháng.',vn:'Thiệt hại trong vụ tai nạn này đều do bên kia bồi thường.'}
   ],
   colloFull:[
     {zh:'赔偿损失',py:'péicháng sǔnshī',vn:'bồi thường thiệt hại'},
     {zh:'赔偿手续',py:'péicháng shǒuxù',vn:'thủ tục bồi thường'},
     {zh:'得到赔偿',py:'dédào péicháng',vn:'được bồi thường'},
     {zh:'赔偿医药费',py:'péicháng yīyàofèi',vn:'bồi thường tiền thuốc men'},
     {zh:'由……赔偿',py:'yóu…… péicháng',vn:'do … bồi thường'}
   ],
   patterns:[
     {s:'（由）A + 赔偿 + B + 的损失',m:'A bồi thường thiệt hại cho B'},
     {s:'办理 + 赔偿手续',m:'Làm thủ tục bồi thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu làm vỡ cửa sổ nhà người ta thì phải bồi thường.',answer:'你把人家的窗户打破了，就得赔偿。',answerPy:'Nǐ bǎ rénjia de chuānghu dǎpò le, jiù děi péicháng.',
      note:'Câu 把 kể nguyên nhân; 赔偿 = đền bù.',pair:'把'},
     {promptLang:'vi',prompt:'Tất cả thiệt hại đều đã được công ty bảo hiểm bồi thường.',answer:'所有的损失都已经被保险公司赔偿了。',answerPy:'Suǒyǒu de sǔnshī dōu yǐjīng bèi bǎoxiǎn gōngsī péicháng le.',
      note:'Câu 被: 损失 + 被 + 保险公司 + 赔偿了.',pair:'被'}
   ]},

  {n:24,zh:'政府',py:'zhèngfǔ',pos:'Danh từ',vn:'chính phủ, chính quyền',hv:'chính phủ',em:'🏛️',lesson:1,
   explain:['Cơ quan hành chính nhà nước: 中央政府 (chính phủ trung ương), 市政府 (chính quyền thành phố).','Trong bài, 政府 là chính quyền thành phố — người phê duyệt các biện pháp cải cách của Jensen.'],
   usage:'政府 + 批准 / 决定 / 规定 / 支持; 市政府 / 地方政府; 政府部门. Tiếng Việt phân biệt "chính phủ" (trung ương) với "chính quyền" (địa phương); tiếng Trung đều là 政府.',
   collo:['政府批准','市政府','政府部门','地方政府'],
   ex_zh:'经过多次努力，政府批准了他提出的改革措施。',ex_py:'Jīngguò duō cì nǔlì, zhèngfǔ pīzhǔnle tā tíchū de gǎigé cuòshī.',ex_vn:'Sau nhiều lần nỗ lực, chính quyền đã phê duyệt các biện pháp cải cách anh đề xuất.',
   exList:[
     {zh:'经过多次努力，政府批准了他提出的改革措施。',py:'Jīngguò duō cì nǔlì, zhèngfǔ pīzhǔnle tā tíchū de gǎigé cuòshī.',vn:'Sau nhiều lần nỗ lực, chính quyền đã phê duyệt các biện pháp cải cách anh đề xuất.'},
     {zh:'市政府决定明年在这里新建一个公园。',py:'Shì zhèngfǔ juédìng míngnián zài zhèli xīnjiàn yí ge gōngyuán.',vn:'Chính quyền thành phố quyết định sang năm xây mới một công viên ở đây.'},
     {zh:'这个问题应该反映给有关的政府部门。',py:'Zhège wèntí yīnggāi fǎnyìng gěi yǒuguān de zhèngfǔ bùmén.',vn:'Vấn đề này nên phản ánh lên các cơ quan chính quyền liên quan.'}
   ],
   colloFull:[
     {zh:'政府批准',py:'zhèngfǔ pīzhǔn',vn:'chính quyền phê duyệt'},
     {zh:'市政府',py:'shì zhèngfǔ',vn:'chính quyền thành phố'},
     {zh:'政府部门',py:'zhèngfǔ bùmén',vn:'cơ quan chính quyền'},
     {zh:'地方政府',py:'dìfāng zhèngfǔ',vn:'chính quyền địa phương'},
     {zh:'中央政府',py:'zhōngyāng zhèngfǔ',vn:'chính phủ trung ương'}
   ],
   patterns:[
     {s:'政府 + 批准 / 决定 / 规定 + ……',m:'Chính quyền phê duyệt / quyết định / quy định'},
     {s:'反映给 + 政府部门',m:'Phản ánh lên cơ quan nhà nước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch này đã được chính quyền thành phố phê duyệt.',answer:'这个计划已经被市政府批准了。',answerPy:'Zhège jìhuà yǐjīng bèi shì zhèngfǔ pīzhǔn le.',
      note:'被 + 政府 + 批准.',pair:'被'},
     {promptLang:'vi',prompt:'Chính quyền không chỉ xây thêm đường mà cũng ra sức phát triển giao thông công cộng.',answer:'政府不仅新建了道路，也大力发展了公共交通。',answerPy:'Zhèngfǔ bùjǐn xīnjiànle dàolù, yě dàlì fāzhǎnle gōnggòng jiāotōng.',
      note:'Ôn 大力 + V (ra sức).',pair:'不仅……也……'}
   ]},

  {n:25,zh:'批准',py:'pīzhǔn',pos:'Động từ',vn:'phê chuẩn, phê duyệt, cho phép',hv:'phê chuẩn',em:'✅',lesson:1,
   explain:['Cấp trên đồng ý, cho phép đề nghị / kế hoạch của cấp dưới.','Tân ngữ: 计划, 方案 (bài tập 3 của sách: 批准方案), 申请, 措施. Hay dùng bị động: 得到批准, 被批准.'],
   usage:'（上级）批准 + 计划 / 方案 / 申请 / 请假; 经……批准; 得到批准. Chủ ngữ phải là người / cơ quan có quyền: 政府, 学校, 领导, 老师.',
   collo:['批准方案','批准申请','得到批准','经……批准'],
   ex_zh:'政府批准了他提出的改革措施。',ex_py:'Zhèngfǔ pīzhǔnle tā tíchū de gǎigé cuòshī.',ex_vn:'Chính quyền đã phê duyệt các biện pháp cải cách anh đề xuất.',
   exList:[
     {zh:'政府批准了他提出的改革措施。',py:'Zhèngfǔ pīzhǔnle tā tíchū de gǎigé cuòshī.',vn:'Chính quyền đã phê duyệt các biện pháp cải cách anh đề xuất.'},
     {zh:'我向老师请了两天假，老师已经批准了。',py:'Wǒ xiàng lǎoshī qǐngle liǎng tiān jià, lǎoshī yǐjīng pīzhǔn le.',vn:'Tôi đã xin thầy nghỉ hai ngày, thầy đã đồng ý rồi.'},
     {zh:'没有经过学校批准，任何人不能在校园里开车。',py:'Méiyǒu jīngguò xuéxiào pīzhǔn, rènhé rén bù néng zài xiàoyuán li kāichē.',vn:'Không có sự cho phép của nhà trường, bất kỳ ai cũng không được lái xe trong sân trường.'}
   ],
   colloFull:[
     {zh:'批准方案',py:'pīzhǔn fāng\'àn',vn:'phê duyệt phương án'},
     {zh:'批准申请',py:'pīzhǔn shēnqǐng',vn:'duyệt đơn đăng ký'},
     {zh:'得到批准',py:'dédào pīzhǔn',vn:'được phê duyệt'},
     {zh:'经……批准',py:'jīng…… pīzhǔn',vn:'được … phê duyệt'},
     {zh:'批准请假',py:'pīzhǔn qǐngjià',vn:'duyệt cho nghỉ phép'}
   ],
   patterns:[
     {s:'（上级）+ 批准 + 计划 / 方案 / 申请',m:'Cấp trên phê duyệt'},
     {s:'经(过) + 机构 + 批准，……',m:'Được cơ quan nào cho phép'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đơn xin nghỉ của cậu ấy đã được thầy chủ nhiệm duyệt.',answer:'他的请假申请已经被班主任批准了。',answerPy:'Tā de qǐngjià shēnqǐng yǐjīng bèi bānzhǔrèn pīzhǔn le.',
      note:'被 + người có quyền + 批准.',pair:'被'},
     {promptLang:'vi',prompt:'Kế hoạch này là do hiệu trưởng phê duyệt.',answer:'这个计划是校长批准的。',answerPy:'Zhège jìhuà shì xiàozhǎng pīzhǔn de.',
      note:'是……的 nhấn mạnh người phê duyệt.',pair:'是……的'}
   ]},

  {n:26,zh:'改革',py:'gǎigé',pos:'Động từ / Danh từ',vn:'cải cách, đổi mới',hv:'cải cách',em:'🔧',lesson:1,
   explain:['Thay đổi những phần không hợp lý của một chế độ, hệ thống để nó tốt hơn.','Chủ ngữ / đối tượng: 社会 / 制度 / 政治 / 经济 / 技术 / 课程 / 工资 + 改革 (bảng 搭配 của sách). Danh từ: 改革措施, 进行改革.'],
   usage:'进行改革; 改革 + 制度 / 考试方法; 教育改革 / 经济改革; 改革措施. 改革 dùng cho CHẾ ĐỘ, HỆ THỐNG lớn; thay đổi thói quen cá nhân dùng 改变 / 改正.',
   collo:['改革措施','经济改革','进行改革','课程改革'],
   ex_zh:'政府批准了他提出的改革措施。',ex_py:'Zhèngfǔ pīzhǔnle tā tíchū de gǎigé cuòshī.',ex_vn:'Chính quyền đã phê duyệt các biện pháp cải cách anh đề xuất.',
   exList:[
     {zh:'政府批准了他提出的改革措施。',py:'Zhèngfǔ pīzhǔnle tā tíchū de gǎigé cuòshī.',vn:'Chính quyền đã phê duyệt các biện pháp cải cách anh đề xuất.'},
     {zh:'这几年，我们学校进行了课程改革，选修课越来越多。',py:'Zhè jǐ nián, wǒmen xuéxiào jìnxíngle kèchéng gǎigé, xuǎnxiūkè yuè lái yuè duō.',vn:'Mấy năm nay trường tôi tiến hành cải cách chương trình học, môn tự chọn ngày càng nhiều.'},
     {zh:'经济改革使这个国家变得越来越繁荣。',py:'Jīngjì gǎigé shǐ zhège guójiā biàn de yuè lái yuè fánróng.',vn:'Cải cách kinh tế đã khiến đất nước này ngày càng thịnh vượng.'}
   ],
   colloFull:[
     {zh:'改革措施',py:'gǎigé cuòshī',vn:'biện pháp cải cách'},
     {zh:'经济改革',py:'jīngjì gǎigé',vn:'cải cách kinh tế'},
     {zh:'进行改革',py:'jìnxíng gǎigé',vn:'tiến hành cải cách'},
     {zh:'课程改革',py:'kèchéng gǎigé',vn:'cải cách chương trình học'},
     {zh:'工资改革',py:'gōngzī gǎigé',vn:'cải cách tiền lương'}
   ],
   patterns:[
     {s:'（制度 / 经济 / 课程）+ 改革',m:'Cải cách lĩnh vực nào'},
     {s:'对 + N + 进行改革',m:'Tiến hành cải cách cái gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kể từ khi cải cách, đời sống của người dân ngày càng tốt lên.',answer:'改革以后，人们的生活越来越好了。',answerPy:'Gǎigé yǐhòu, rénmen de shēnghuó yuè lái yuè hǎo le.',
      note:'改革 làm chủ ngữ thời gian: 改革以后.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy cải cách gặp rất nhiều khó khăn, nhưng hiệu quả rất rõ rệt.',answer:'虽然改革遇到了很多困难，但是效果非常明显。',answerPy:'Suīrán gǎigé yùdàole hěn duō kùnnan, dànshì xiàoguǒ fēicháng míngxiǎn.',
      note:'效果明显 (câu trong bài).',pair:'虽然……但是……'}
   ]},

  {n:27,zh:'取消',py:'qǔxiāo',pos:'Động từ',vn:'huỷ bỏ, xoá bỏ, bãi bỏ',hv:'thủ tiêu',em:'❌',lesson:1,
   explain:['Làm cho điều đã có / đã định không còn hiệu lực nữa, do CON NGƯỜI chủ động quyết định.','Tân ngữ: 资格, 会议, 计划, 比赛, 活动, 成绩, 限制, 约会 (bảng 搭配 của sách). Phân biệt với 消失 xem phần 词语辨析.'],
   usage:'取消 + 会议 / 比赛 / 航班 / 资格 / 限制; 被取消了. Chú ý: "thủ tiêu" tiếng Việt thường nghĩa là giết, phi tang — 取消 chỉ là HUỶ BỎ.',
   collo:['取消比赛','取消资格','取消限制','取消约会'],
   ex_zh:'在主要十字路口取消地下通道，让行人从地下重返地面。',ex_py:'Zài zhǔyào shízì lùkǒu qǔxiāo dìxià tōngdào, ràng xíngrén cóng dìxià chóng fǎn dìmiàn.',ex_vn:'Bỏ hầm đi bộ ở các ngã tư chính, để người đi bộ từ dưới lòng đất trở lại mặt đất.',
   exList:[
     {zh:'在主要十字路口取消地下通道，让行人从地下重返地面。',py:'Zài zhǔyào shízì lùkǒu qǔxiāo dìxià tōngdào, ràng xíngrén cóng dìxià chóng fǎn dìmiàn.',vn:'Bỏ hầm đi bộ ở các ngã tư chính, để người đi bộ từ dưới lòng đất trở lại mặt đất.'},
     {zh:'学校规定，旷课达到60节以上的学生取消其考试的资格。',py:'Xuéxiào guīdìng, kuàngkè dádào liùshí jié yǐshàng de xuésheng qǔxiāo qí kǎoshì de zīgé.',vn:'Nhà trường quy định, học sinh bỏ học từ 60 tiết trở lên sẽ bị huỷ tư cách dự thi.'},
     {zh:'因为下大雨，今天下午的足球比赛取消了。',py:'Yīnwèi xià dà yǔ, jīntiān xiàwǔ de zúqiú bǐsài qǔxiāo le.',vn:'Vì mưa to, trận bóng đá chiều nay bị huỷ rồi.'}
   ],
   colloFull:[
     {zh:'取消比赛',py:'qǔxiāo bǐsài',vn:'huỷ trận đấu'},
     {zh:'取消资格',py:'qǔxiāo zīgé',vn:'huỷ tư cách'},
     {zh:'取消限制',py:'qǔxiāo xiànzhì',vn:'bãi bỏ hạn chế'},
     {zh:'取消约会',py:'qǔxiāo yuēhuì',vn:'huỷ cuộc hẹn'},
     {zh:'取消会议',py:'qǔxiāo huìyì',vn:'huỷ cuộc họp'}
   ],
   patterns:[
     {s:'取消 + 会议 / 比赛 / 资格 / 限制',m:'Huỷ bỏ cái đã định'},
     {s:'N + 被取消了 / 取消了',m:'(Cái gì) bị huỷ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì cậu ấy gian lận nên bị huỷ thành tích.',answer:'因为他作弊，所以他的成绩被取消了。',answerPy:'Yīnwèi tā zuòbì, suǒyǐ tā de chéngjì bèi qǔxiāo le.',
      note:'取消成绩 (bảng 搭配).',pair:'被'},
     {promptLang:'vi',prompt:'Hễ trời mưa là hoạt động ngoài trời liền bị huỷ.',answer:'一下雨，户外活动就取消了。',answerPy:'Yí xià yǔ, hùwài huódòng jiù qǔxiāo le.',
      note:'Chủ ngữ là sự việc: 活动取消了 (bị động ý nghĩa).',pair:'一……就……'}
   ]},

  {n:28,zh:'行人',py:'xíngrén',pos:'Danh từ',vn:'người đi bộ, người đi đường',hv:'hành nhân',em:'🚶',lesson:1,
   explain:['Người đi bộ trên đường (phân biệt với người lái xe).','Hay gặp trên biển báo: 行人通道 (lối đi cho người đi bộ), 行人请走人行道.'],
   usage:'行人 + 通道 / 过马路; 让行人……; 礼让行人 (nhường người đi bộ). Chú ý: 行 đọc xíng; còn 人行道 (vỉa hè) là từ khác.',
   collo:['行人通道','礼让行人','过路的行人','行人过马路'],
   ex_zh:'在主要十字路口取消地下通道，让行人从地下重返地面。',ex_py:'Zài zhǔyào shízì lùkǒu qǔxiāo dìxià tōngdào, ràng xíngrén cóng dìxià chóng fǎn dìmiàn.',ex_vn:'Bỏ hầm đi bộ ở các ngã tư chính, để người đi bộ từ dưới lòng đất trở lại mặt đất.',
   exList:[
     {zh:'在主要十字路口取消地下通道，让行人从地下重返地面。',py:'Zài zhǔyào shízì lùkǒu qǔxiāo dìxià tōngdào, ràng xíngrén cóng dìxià chóng fǎn dìmiàn.',vn:'Bỏ hầm đi bộ ở các ngã tư chính, để người đi bộ từ dưới lòng đất trở lại mặt đất.'},
     {zh:'你从行人的地下通道过来，大厦楼下有个咖啡馆。',py:'Nǐ cóng xíngrén de dìxià tōngdào guòlai, dàshà lóu xià yǒu ge kāfēiguǎn.',vn:'Cậu đi qua hầm đi bộ sang đây, dưới toà nhà có một quán cà phê.'},
     {zh:'司机开车经过学校门口时，一定要礼让行人。',py:'Sījī kāichē jīngguò xuéxiào ménkǒu shí, yídìng yào lǐràng xíngrén.',vn:'Tài xế lái xe qua cổng trường nhất định phải nhường người đi bộ.'}
   ],
   colloFull:[
     {zh:'行人通道',py:'xíngrén tōngdào',vn:'lối đi cho người đi bộ'},
     {zh:'礼让行人',py:'lǐràng xíngrén',vn:'nhường đường cho người đi bộ'},
     {zh:'过路的行人',py:'guòlù de xíngrén',vn:'người qua đường'},
     {zh:'行人过马路',py:'xíngrén guò mǎlù',vn:'người đi bộ sang đường'},
     {zh:'行人和车辆',py:'xíngrén hé chēliàng',vn:'người đi bộ và xe cộ'}
   ],
   patterns:[
     {s:'让 / 礼让 + 行人 + ……',m:'Để / nhường người đi bộ'},
     {s:'行人 + 通道 / 过马路',m:'Cụm hay gặp trên biển báo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người đi bộ vừa bước lên vạch kẻ đường là xe phải dừng lại.',answer:'行人一走上斑马线，车就要停下来。',answerPy:'Xíngrén yì zǒushàng bānmǎxiàn, chē jiù yào tíng xiàlai.',
      note:'斑马线 = vạch kẻ đường cho người đi bộ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Người đi bộ đó bị một chiếc xe máy đâm ngã.',answer:'那个行人被一辆摩托车撞倒了。',answerPy:'Nàge xíngrén bèi yí liàng mótuōchē zhuàngdǎo le.',
      note:'摩托车 — từ trong phần 扩展 của sách.',pair:'被'}
   ]},

  {n:29,zh:'广场',py:'guǎngchǎng',pos:'Danh từ',vn:'quảng trường; trung tâm (mua sắm)',hv:'quảng trường',em:'🏟️',lesson:1,
   explain:['Khoảng đất rộng lớn trong thành phố: 天安门广场, 东方广场.','Còn dùng trong tên các trung tâm thương mại lớn: 购物广场 (trung tâm mua sắm), 万达广场.'],
   usage:'在广场上 + V (跳舞 / 散步); 购物广场; 城市广场. Lượng từ: 个 / 座.',
   collo:['购物广场','天安门广场','在广场上','广场舞'],
   ex_zh:'在购物广场、商务大厦的附近不建停车场。',ex_py:'Zài gòuwù guǎngchǎng, shāngwù dàshà de fùjìn bú jiàn tíngchēchǎng.',ex_vn:'Không xây bãi đỗ xe gần các trung tâm mua sắm, cao ốc thương mại.',
   exList:[
     {zh:'在购物广场、商务大厦的附近不建停车场。',py:'Zài gòuwù guǎngchǎng, shāngwù dàshà de fùjìn bú jiàn tíngchēchǎng.',vn:'Không xây bãi đỗ xe gần các trung tâm mua sắm, cao ốc thương mại.'},
     {zh:'在东方广场的迎新活动照常举行。',py:'Zài Dōngfāng Guǎngchǎng de yíngxīn huódòng zhàocháng jǔxíng.',vn:'Hoạt động đón năm mới ở quảng trường Phương Đông vẫn diễn ra như thường.'},
     {zh:'每天晚上，很多阿姨在广场上跳广场舞。',py:'Měi tiān wǎnshang, hěn duō āyí zài guǎngchǎng shang tiào guǎngchǎngwǔ.',vn:'Tối nào cũng có nhiều cô bác nhảy dân vũ trên quảng trường.'}
   ],
   colloFull:[
     {zh:'购物广场',py:'gòuwù guǎngchǎng',vn:'trung tâm mua sắm'},
     {zh:'天安门广场',py:'Tiān\'ānmén Guǎngchǎng',vn:'quảng trường Thiên An Môn'},
     {zh:'在广场上',py:'zài guǎngchǎng shang',vn:'trên quảng trường'},
     {zh:'广场舞',py:'guǎngchǎngwǔ',vn:'nhảy dân vũ ở quảng trường'},
     {zh:'城市广场',py:'chéngshì guǎngchǎng',vn:'quảng trường thành phố'}
   ],
   patterns:[
     {s:'在 + 广场上 + V',m:'Làm gì trên quảng trường'},
     {s:'购物广场 / 商务大厦 + 附近',m:'Gần trung tâm mua sắm / cao ốc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuối tuần trung tâm mua sắm đó ngày càng đông.',answer:'周末那个购物广场越来越拥挤了。',answerPy:'Zhōumò nàge gòuwù guǎngchǎng yuè lái yuè yōngjǐ le.',
      note:'Ôn 拥挤 (số 5).',pair:'越来越'},
     {promptLang:'vi',prompt:'Tấm ảnh này là chụp ở quảng trường Thiên An Môn.',answer:'这张照片是在天安门广场拍的。',answerPy:'Zhè zhāng zhàopiàn shì zài Tiān\'ānmén Guǎngchǎng pāi de.',
      note:'是……的 nhấn mạnh nơi chốn.',pair:'是……的'}
   ]},

  {n:30,zh:'商务',py:'shāngwù',pos:'Danh từ',vn:'thương mại, công việc kinh doanh',hv:'thương vụ',em:'💼',lesson:1,
   explain:['Các hoạt động, công việc liên quan đến buôn bán, kinh doanh.','Hay làm định ngữ: 商务大厦 (cao ốc thương mại), 商务活动, 商务英语, 商务旅行 (chuyến công tác).'],
   usage:'商务 + 大厦 / 中心 / 活动 / 会议 / 汉语. Chú ý: "thương vụ" tiếng Việt thường là MỘT vụ làm ăn cụ thể; 商务 là lĩnh vực kinh doanh nói chung (một vụ làm ăn là 一笔生意).',
   collo:['商务大厦','商务活动','商务汉语','商务中心'],
   ex_zh:'在购物广场、商务大厦的附近不建停车场等。',ex_py:'Zài gòuwù guǎngchǎng, shāngwù dàshà de fùjìn bú jiàn tíngchēchǎng děng.',ex_vn:'Không xây bãi đỗ xe gần các trung tâm mua sắm, cao ốc thương mại, v.v.',
   exList:[
     {zh:'在购物广场、商务大厦的附近不建停车场等。',py:'Zài gòuwù guǎngchǎng, shāngwù dàshà de fùjìn bú jiàn tíngchēchǎng děng.',vn:'Không xây bãi đỗ xe gần các trung tâm mua sắm, cao ốc thương mại, v.v.'},
     {zh:'在十字路口西北角有个蓝天商务大厦。',py:'Zài shízì lùkǒu xīběijiǎo yǒu ge Lántiān Shāngwù Dàshà.',vn:'Ở góc tây bắc ngã tư có toà cao ốc thương mại Lam Thiên.'},
     {zh:'我姐姐大学学的是商务汉语，现在在一家中国公司工作。',py:'Wǒ jiějie dàxué xué de shì shāngwù Hànyǔ, xiànzài zài yì jiā Zhōngguó gōngsī gōngzuò.',vn:'Chị tôi học đại học ngành tiếng Trung thương mại, giờ làm ở một công ty Trung Quốc.'}
   ],
   colloFull:[
     {zh:'商务大厦',py:'shāngwù dàshà',vn:'cao ốc thương mại'},
     {zh:'商务活动',py:'shāngwù huódòng',vn:'hoạt động thương mại'},
     {zh:'商务汉语',py:'shāngwù Hànyǔ',vn:'tiếng Trung thương mại'},
     {zh:'商务中心',py:'shāngwù zhōngxīn',vn:'trung tâm thương mại'},
     {zh:'商务旅行',py:'shāngwù lǚxíng',vn:'chuyến công tác'}
   ],
   patterns:[
     {s:'商务 + 大厦 / 中心 / 活动 / 汉语',m:'Làm định ngữ chỉ lĩnh vực kinh doanh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa bao giờ học tiếng Trung thương mại.',answer:'我从来没学过商务汉语。',answerPy:'Wǒ cónglái méi xuéguo shāngwù Hànyǔ.',
      note:'商务汉语 — cụm cố định.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Toà cao ốc thương mại đó không chỉ có văn phòng, mà cũng có quán cà phê.',answer:'那座商务大厦不仅有办公室，也有咖啡馆。',answerPy:'Nà zuò shāngwù dàshà bùjǐn yǒu bàngōngshì, yě yǒu kāfēiguǎn.',
      note:'Lượng từ của 大厦: 座.',pair:'不仅……也……'}
   ]},

  {n:31,zh:'大厦',py:'dàshà',pos:'Danh từ',vn:'cao ốc, toà nhà lớn',hv:'đại hạ',em:'🏢',lesson:1,
   explain:['Toà nhà cao lớn (thường là văn phòng, thương mại). 厦 = nhà lớn.','Hay dùng trong tên toà nhà: 蓝天商务大厦, 国际大厦. Lượng từ: 座 / 栋.'],
   usage:'一座大厦; 商务大厦; 大厦楼下 / 大厦门口. Chú ý: 厦 ở đây đọc shà (ở tên thành phố 厦门 đọc xià).',
   collo:['商务大厦','一座大厦','大厦楼下','高楼大厦'],
   ex_zh:'你从行人的地下通道过来，大厦楼下有个咖啡馆，我在那儿等你。',ex_py:'Nǐ cóng xíngrén de dìxià tōngdào guòlai, dàshà lóu xià yǒu ge kāfēiguǎn, wǒ zài nàr děng nǐ.',ex_vn:'Cậu đi qua hầm đi bộ sang đây, dưới toà nhà có một quán cà phê, tớ đợi cậu ở đó.',
   exList:[
     {zh:'你从行人的地下通道过来，大厦楼下有个咖啡馆，我在那儿等你。',py:'Nǐ cóng xíngrén de dìxià tōngdào guòlai, dàshà lóu xià yǒu ge kāfēiguǎn, wǒ zài nàr děng nǐ.',vn:'Cậu đi qua hầm đi bộ sang đây, dưới toà nhà có một quán cà phê, tớ đợi cậu ở đó.'},
     {zh:'这座大厦有六十多层，是我们城市最高的楼。',py:'Zhè zuò dàshà yǒu liùshí duō céng, shì wǒmen chéngshì zuì gāo de lóu.',vn:'Toà cao ốc này có hơn sáu mươi tầng, là toà nhà cao nhất thành phố chúng tôi.'},
     {zh:'十年前这里还是农田，现在到处都是高楼大厦。',py:'Shí nián qián zhèli hái shì nóngtián, xiànzài dàochù dōu shì gāolóu dàshà.',vn:'Mười năm trước nơi này vẫn là ruộng, bây giờ đâu đâu cũng là nhà cao tầng.'}
   ],
   colloFull:[
     {zh:'商务大厦',py:'shāngwù dàshà',vn:'cao ốc thương mại'},
     {zh:'一座大厦',py:'yí zuò dàshà',vn:'một toà cao ốc'},
     {zh:'大厦楼下',py:'dàshà lóu xià',vn:'tầng dưới toà nhà'},
     {zh:'高楼大厦',py:'gāolóu dàshà',vn:'nhà cao tầng'},
     {zh:'国际大厦',py:'guójì dàshà',vn:'cao ốc quốc tế'}
   ],
   patterns:[
     {s:'一座 + 大厦',m:'Lượng từ của 大厦'},
     {s:'大厦 + 楼下 / 门口 / 附近',m:'Chỉ vị trí quanh toà nhà'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Toà cao ốc này là xây năm ngoái.',answer:'这座大厦是去年建成的。',answerPy:'Zhè zuò dàshà shì qùnián jiànchéng de.',
      note:'是……的 nhấn mạnh thời gian.',pair:'是……的'},
     {promptLang:'vi',prompt:'Thành phố của chúng tôi nhà cao tầng ngày càng nhiều.',answer:'我们城市的高楼大厦越来越多了。',answerPy:'Wǒmen chéngshì de gāolóu dàshà yuè lái yuè duō le.',
      note:'高楼大厦 — cụm cố định.',pair:'越来越'}
   ]},

  {n:32,zh:'自愿',py:'zìyuàn',pos:'Tính từ',vn:'tự nguyện, tự ý',hv:'tự nguyện',em:'🙋',lesson:1,
   explain:['Tự mình muốn làm, không bị ai ép buộc.','Hay làm trạng ngữ: 自愿(地) + 参加 / 报名 / 退学 / 担任 / 放弃 / 从事 (bảng 搭配 của sách). Cũng làm vị ngữ: 这是我自愿的.'],
   usage:'自愿 + V; 出于自愿 (xuất phát từ tự nguyện); 是……自愿的; 自愿者 hiếm dùng — "tình nguyện viên" là 志愿者.',
   collo:['自愿参加','自愿报名','自愿放弃','出于自愿'],
   ex_zh:'效果非常明显，自愿放弃开私家车出门的人越来越多。',ex_py:'Xiàoguǒ fēicháng míngxiǎn, zìyuàn fàngqì kāi sījiāchē chūmén de rén yuè lái yuè duō.',ex_vn:'Hiệu quả rất rõ rệt, số người tự nguyện bỏ đi xe riêng ra ngoài ngày càng nhiều.',
   exList:[
     {zh:'效果非常明显，自愿放弃开私家车出门的人越来越多。',py:'Xiàoguǒ fēicháng míngxiǎn, zìyuàn fàngqì kāi sījiāchē chūmén de rén yuè lái yuè duō.',vn:'Hiệu quả rất rõ rệt, số người tự nguyện bỏ đi xe riêng ra ngoài ngày càng nhiều.'},
     {zh:'这次活动大家自愿报名，不想参加的可以不参加。',py:'Zhè cì huódòng dàjiā zìyuàn bàomíng, bù xiǎng cānjiā de kěyǐ bù cānjiā.',vn:'Hoạt động lần này mọi người tự nguyện đăng ký, ai không muốn tham gia thì có thể không tham gia.'},
     {zh:'没有人逼我，学中文完全是我自愿的。',py:'Méiyǒu rén bī wǒ, xué Zhōngwén wánquán shì wǒ zìyuàn de.',vn:'Không ai ép tôi cả, học tiếng Trung hoàn toàn là tôi tự nguyện.'}
   ],
   colloFull:[
     {zh:'自愿参加',py:'zìyuàn cānjiā',vn:'tự nguyện tham gia'},
     {zh:'自愿报名',py:'zìyuàn bàomíng',vn:'tự nguyện đăng ký'},
     {zh:'自愿放弃',py:'zìyuàn fàngqì',vn:'tự nguyện từ bỏ'},
     {zh:'出于自愿',py:'chūyú zìyuàn',vn:'xuất phát từ tự nguyện'},
     {zh:'自愿担任',py:'zìyuàn dānrèn',vn:'tự nguyện đảm nhận'}
   ],
   patterns:[
     {s:'自愿(地) + 参加 / 报名 / 放弃 / 担任',m:'Tự nguyện làm gì'},
     {s:'……是 + (某人) + 自愿的',m:'Việc … là (ai đó) tự nguyện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc lao động dọn dẹp lần này là do học sinh tự nguyện tham gia.',answer:'这次大扫除是学生们自愿参加的。',answerPy:'Zhè cì dàsǎochú shì xuéshengmen zìyuàn cānjiā de.',
      note:'是……的 nhấn mạnh tính tự nguyện.',pair:'是……的'},
     {promptLang:'vi',prompt:'Người tự nguyện đi xe đạp đến trường ngày càng nhiều.',answer:'自愿骑自行车上学的人越来越多。',answerPy:'Zìyuàn qí zìxíngchē shàngxué de rén yuè lái yuè duō.',
      note:'自愿 + V làm định ngữ cho 人.',pair:'越来越'}
   ]},

  {n:33,zh:'难怪',py:'nánguài',pos:'Động từ / Phó từ',vn:'có thể hiểu được, khó trách; thảo nào, hèn chi',hv:'nan quái',em:'💡',lesson:1,
   explain:['Động từ: không nên trách, có thể thông cảm (mang giọng thấu hiểu, tha thứ) — thường nói 这也难怪 (điều này cũng dễ hiểu thôi).','Phó từ: đã hiểu ra nguyên nhân nên không còn thấy lạ nữa — "thảo nào, hèn chi": 你的抽屉真乱，难怪总是找不到东西.'],
   usage:'这也难怪，……(giải thích) | (nguyên nhân)，难怪 + kết quả. 难怪 có thể đứng trước hoặc sau chủ ngữ. Khác 难道 (chẳng lẽ — câu hỏi tu từ).',
   collo:['这也难怪','难怪他……','难怪呢','也难怪'],
   ex_zh:'这也难怪，与其堵在路上浪费时间和汽油，污染环境，倒不如改乘公交出行。',ex_py:'Zhè yě nánguài, yǔqí dǔ zài lù shang làngfèi shíjiān hé qìyóu, wūrǎn huánjìng, dào bùrú gǎi chéng gōngjiāo chūxíng.',ex_vn:'Điều này cũng dễ hiểu thôi: thay vì tắc trên đường, lãng phí thời gian và xăng, lại gây ô nhiễm môi trường, chẳng thà chuyển sang đi xe buýt.',
   exList:[
     {zh:'这也难怪，与其堵在路上浪费时间和汽油，污染环境，倒不如改乘公交出行。',py:'Zhè yě nánguài, yǔqí dǔ zài lù shang làngfèi shíjiān hé qìyóu, wūrǎn huánjìng, dào bùrú gǎi chéng gōngjiāo chūxíng.',vn:'Điều này cũng dễ hiểu thôi: thay vì tắc trên đường, lãng phí thời gian và xăng, lại gây ô nhiễm môi trường, chẳng thà chuyển sang đi xe buýt.'},
     {zh:'你的抽屉真乱，难怪总是找不到东西。',py:'Nǐ de chōuti zhēn luàn, nánguài zǒngshì zhǎo bu dào dōngxi.',vn:'Ngăn kéo của cậu bừa bộn thật, thảo nào lúc nào cũng không tìm được đồ.'},
     {zh:'汽油明天要涨价了，难怪加油站又有车在排队加油呢。',py:'Qìyóu míngtiān yào zhǎng jià le, nánguài jiāyóuzhàn yòu yǒu chē zài páiduì jiā yóu ne.',vn:'Mai xăng sắp tăng giá, thảo nào ở cây xăng lại có xe xếp hàng đổ xăng.'}
   ],
   colloFull:[
     {zh:'这也难怪',py:'zhè yě nánguài',vn:'điều này cũng dễ hiểu thôi'},
     {zh:'难怪他……',py:'nánguài tā……',vn:'thảo nào anh ấy …'},
     {zh:'难怪呢',py:'nánguài ne',vn:'thảo nào!'},
     {zh:'也难怪',py:'yě nánguài',vn:'cũng khó trách'},
     {zh:'难怪大家都……',py:'nánguài dàjiā dōu……',vn:'thảo nào mọi người đều …'}
   ],
   patterns:[
     {s:'nguyên nhân，难怪 + (S) + kết quả',m:'Phó từ: thảo nào'},
     {s:'这也难怪，+ lời giải thích',m:'Động từ: điều này cũng dễ hiểu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoá ra cậu ấy lớn lên ở Trung Quốc, thảo nào tiếng Trung nói trôi chảy thế.',answer:'原来他是在中国长大的，难怪汉语说得这么流利。',answerPy:'Yuánlái tā shì zài Zhōngguó zhǎngdà de, nánguài Hànyǔ shuō de zhème liúlì.',
      note:'原来 (hoá ra) + 难怪 (thảo nào) hay đi cùng nhau.',pair:'是……的'},
     {promptLang:'vi',prompt:'Hễ trời mưa là thành phố tắc, thảo nào mọi người đều thích đi tàu điện ngầm.',answer:'一下雨城市就堵车，难怪大家都喜欢坐地铁。',answerPy:'Yí xià yǔ chéngshì jiù dǔchē, nánguài dàjiā dōu xǐhuan zuò dìtiě.',
      note:'Vế trước là nguyên nhân, 难怪 dẫn kết quả.',pair:'一……就……'}
   ]},

  {n:34,zh:'与其',py:'yǔqí',pos:'Liên từ',vn:'thà … còn hơn …, thay vì …',hv:'dữ kỳ',em:'⚖️',lesson:1,
   explain:['Dùng khi so sánh hai lựa chọn: 与其 đứng ở vế BỊ BỎ (không chọn); vế sau dùng 不如 / 倒不如 / 宁可 dẫn ra lựa chọn được chọn.','与其 A，不如 B = thay vì A, chẳng thà B; 与其 A，宁可 B = thà B còn hơn A.'],
   usage:'与其……，(倒)不如…… / 与其……，(我)宁可…… / 与其说……，不如说…… (nói là … chẳng bằng nói là …). Vế sau KHÔNG dùng 还是 / 而是.',
   collo:['与其……不如……','与其……宁可……','与其说……不如说……','倒不如'],
   ex_zh:'与其堵在路上浪费时间和汽油，污染环境，倒不如改乘公交出行。',ex_py:'Yǔqí dǔ zài lù shang làngfèi shíjiān hé qìyóu, wūrǎn huánjìng, dào bùrú gǎi chéng gōngjiāo chūxíng.',ex_vn:'Thay vì tắc trên đường, lãng phí thời gian và xăng, lại gây ô nhiễm môi trường, chẳng thà chuyển sang đi xe buýt.',
   exList:[
     {zh:'与其堵在路上浪费时间和汽油，污染环境，倒不如改乘公交出行。',py:'Yǔqí dǔ zài lù shang làngfèi shíjiān hé qìyóu, wūrǎn huánjìng, dào bùrú gǎi chéng gōngjiāo chūxíng.',vn:'Thay vì tắc trên đường, lãng phí thời gian và xăng, lại gây ô nhiễm môi trường, chẳng thà chuyển sang đi xe buýt.'},
     {zh:'与其说是采访，不如说是向他学习。',py:'Yǔqí shuō shì cǎifǎng, bùrú shuō shì xiàng tā xuéxí.',vn:'Nói là phỏng vấn, chẳng bằng nói là học hỏi ông ấy.'},
     {zh:'与其找个不认真的小时工，我宁可自己打扫。',py:'Yǔqí zhǎo ge bú rènzhēn de xiǎoshígōng, wǒ nìngkě zìjǐ dǎsǎo.',vn:'Thà tôi tự dọn còn hơn thuê một người giúp việc theo giờ làm không cẩn thận.'}
   ],
   colloFull:[
     {zh:'与其……不如……',py:'yǔqí…… bùrú……',vn:'thay vì … chẳng thà …'},
     {zh:'与其……宁可……',py:'yǔqí…… nìngkě……',vn:'thà … còn hơn …'},
     {zh:'与其说……不如说……',py:'yǔqí shuō…… bùrú shuō……',vn:'nói là … chẳng bằng nói là …'},
     {zh:'倒不如',py:'dào bùrú',vn:'chi bằng, chẳng thà'},
     {zh:'与其等车',py:'yǔqí děng chē',vn:'thay vì đợi xe'}
   ],
   patterns:[
     {s:'与其 + A (bỏ)，(倒)不如 + B (chọn)',m:'Thay vì A, chẳng thà B'},
     {s:'与其 + A，S + 宁可 + B',m:'Thà B còn hơn A (ý chí mạnh hơn)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thay vì đợi xe buýt ở đây, chẳng thà đi bộ qua đó, chỉ cần mười phút là tới.',answer:'与其在这儿等公交车，不如走过去，只要十分钟就到了。',answerPy:'Yǔqí zài zhèr děng gōngjiāochē, bùrú zǒu guòqu, zhǐyào shí fēnzhōng jiù dào le.',
      note:'与其 (bỏ) + 不如 (chọn). 只要……就…… ở đây: chỉ cần (bao lâu) là ….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy người khác có lỗi, nhưng thay vì phàn nàn họ, chẳng thà thay đổi chính mình.',answer:'虽然别人有错，但是与其抱怨别人，不如改变自己。',answerPy:'Suīrán biérén yǒu cuò, dànshì yǔqí bàoyuàn biérén, bùrú gǎibiàn zìjǐ.',
      note:'Ôn 抱怨 (bài 1).',pair:'虽然……但是……'}
   ]},

  {n:35,zh:'汽油',py:'qìyóu',pos:'Danh từ',vn:'xăng',hv:'khí du',em:'⛽',lesson:1,
   explain:['Nhiên liệu dùng cho ô tô, xe máy. 加油站 = cây xăng; 加油 = đổ xăng (cũng là "cố lên").','Từ trong phần 扩展 (chủ đề 交通) của sách.'],
   usage:'浪费汽油 / 节省汽油; 汽油涨价了; 一升汽油. Chú ý: "khí du" không phải "dầu khí"; dầu ăn là 食用油, dầu diesel là 柴油.',
   collo:['浪费汽油','汽油涨价','加油站','节省汽油'],
   ex_zh:'与其堵在路上浪费时间和汽油，倒不如改乘公交出行。',ex_py:'Yǔqí dǔ zài lù shang làngfèi shíjiān hé qìyóu, dào bùrú gǎi chéng gōngjiāo chūxíng.',ex_vn:'Thay vì tắc trên đường, lãng phí thời gian và xăng, chẳng thà chuyển sang đi xe buýt.',
   exList:[
     {zh:'与其堵在路上浪费时间和汽油，倒不如改乘公交出行。',py:'Yǔqí dǔ zài lù shang làngfèi shíjiān hé qìyóu, dào bùrú gǎi chéng gōngjiāo chūxíng.',vn:'Thay vì tắc trên đường, lãng phí thời gian và xăng, chẳng thà chuyển sang đi xe buýt.'},
     {zh:'汽油明天要涨价了，难怪加油站又有车在排队加油呢。',py:'Qìyóu míngtiān yào zhǎng jià le, nánguài jiāyóuzhàn yòu yǒu chē zài páiduì jiā yóu ne.',vn:'Mai xăng sắp tăng giá, thảo nào ở cây xăng lại có xe xếp hàng đổ xăng.'},
     {zh:'这辆车很省油，一百公里只用五升汽油。',py:'Zhè liàng chē hěn shěng yóu, yìbǎi gōnglǐ zhǐ yòng wǔ shēng qìyóu.',vn:'Chiếc xe này rất tiết kiệm xăng, một trăm cây số chỉ tốn năm lít xăng.'}
   ],
   colloFull:[
     {zh:'浪费汽油',py:'làngfèi qìyóu',vn:'lãng phí xăng'},
     {zh:'汽油涨价',py:'qìyóu zhǎng jià',vn:'xăng tăng giá'},
     {zh:'加油站',py:'jiāyóuzhàn',vn:'cây xăng, trạm xăng'},
     {zh:'节省汽油',py:'jiéshěng qìyóu',vn:'tiết kiệm xăng'},
     {zh:'一升汽油',py:'yì shēng qìyóu',vn:'một lít xăng'}
   ],
   patterns:[
     {s:'浪费 / 节省 + 汽油',m:'Lãng phí / tiết kiệm xăng'},
     {s:'汽油 + 涨价 / 降价',m:'Giá xăng lên / xuống'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giá xăng ngày càng đắt, nhiều người bắt đầu đi xe buýt.',answer:'汽油越来越贵，很多人开始坐公交车了。',answerPy:'Qìyóu yuè lái yuè guì, hěn duō rén kāishǐ zuò gōngjiāochē le.',
      note:'汽油 + 贵 / 涨价.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tắc đường không chỉ lãng phí thời gian mà cũng lãng phí xăng.',answer:'堵车不仅浪费时间，也浪费汽油。',answerPy:'Dǔchē bùjǐn làngfèi shíjiān, yě làngfèi qìyóu.',
      note:'浪费 + 时间 / 汽油 (câu trong bài).',pair:'不仅……也……'}
   ]},

  {n:36,zh:'明确',py:'míngquè',pos:'Tính từ / Động từ',vn:'rõ ràng, minh bạch; làm rõ',hv:'minh xác',em:'🎯',lesson:1,
   explain:['Tính từ: rõ ràng, dứt khoát, không mơ hồ — tả MỤC TIÊU, THÁI ĐỘ, Ý KIẾN, CÂU TRẢ LỜI: 目标很明确, 明确表示.','Động từ: làm cho rõ — 明确任务, 明确责任. Khác 清楚 (tả âm thanh, chữ viết, hình ảnh, sự hiểu biết).'],
   usage:'目标 / 态度 / 答复 + 很明确; 明确(地) + 表示 / 提出 / 回答; 明确 + 目标 / 任务 (động từ). Nhìn / nghe rõ thì dùng 清楚: 看清楚, 听清楚, không nói ✗ 看明确.',
   collo:['目标明确','明确表示','明确的答复','明确任务'],
   ex_zh:'詹森的目标很明确，就是期待能够解放城市。',ex_py:'Zhānsēn de mùbiāo hěn míngquè, jiù shì qīdài nénggòu jiěfàng chéngshì.',ex_vn:'Mục tiêu của Jensen rất rõ ràng: mong có thể giải phóng thành phố.',
   exList:[
     {zh:'詹森的目标很明确，就是期待能够解放城市。',py:'Zhānsēn de mùbiāo hěn míngquè, jiù shì qīdài nénggòu jiěfàng chéngshì.',vn:'Mục tiêu của Jensen rất rõ ràng: mong có thể giải phóng thành phố.'},
     {zh:'调查发现，有60%的人明确表示愿意选择公交出行。',py:'Diàochá fāxiàn, yǒu bǎi fēn zhī liùshí de rén míngquè biǎoshì yuànyì xuǎnzé gōngjiāo chūxíng.',vn:'Điều tra phát hiện, 60% số người đã bày tỏ rõ ràng là sẵn lòng chọn đi lại bằng xe buýt.'},
     {zh:'上高三以后，我的学习目标越来越明确了。',py:'Shàng gāosān yǐhòu, wǒ de xuéxí mùbiāo yuè lái yuè míngquè le.',vn:'Từ khi lên lớp 12, mục tiêu học tập của tôi ngày càng rõ ràng.'}
   ],
   colloFull:[
     {zh:'目标明确',py:'mùbiāo míngquè',vn:'mục tiêu rõ ràng'},
     {zh:'明确表示',py:'míngquè biǎoshì',vn:'bày tỏ rõ ràng'},
     {zh:'明确的答复',py:'míngquè de dáfù',vn:'câu trả lời dứt khoát'},
     {zh:'明确任务',py:'míngquè rènwu',vn:'làm rõ nhiệm vụ'},
     {zh:'态度明确',py:'tàidu míngquè',vn:'thái độ dứt khoát'}
   ],
   patterns:[
     {s:'目标 / 态度 / 意见 + 很明确',m:'Tính từ làm vị ngữ'},
     {s:'明确(地) + 表示 / 提出 / 回答',m:'Làm trạng ngữ: nói rõ ràng, dứt khoát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thầy đã hỏi mấy lần, nhưng cô ấy bày tỏ rõ ràng là không muốn tham gia cuộc thi này.',answer:'虽然老师问了好几次，但是她明确表示不想参加这次比赛。',answerPy:'Suīrán lǎoshī wènle hǎo jǐ cì, dànshì tā míngquè biǎoshì bù xiǎng cānjiā zhè cì bǐsài.',
      note:'明确 + 表示 (bài tập 2 của sách).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần mục tiêu rõ ràng thì sẽ không lãng phí thời gian.',answer:'只要目标明确，就不会浪费时间。',answerPy:'Zhǐyào mùbiāo míngquè, jiù bú huì làngfèi shíjiān.',
      note:'目标明确 — chủ vị.',pair:'只要……就……'}
   ]},

  {n:37,zh:'期待',py:'qīdài',pos:'Động từ',vn:'mong đợi, kỳ vọng, trông chờ',hv:'kỳ đãi',em:'🤞',lesson:1,
   explain:['Mong chờ, hy vọng điều tốt đẹp sẽ đến; trang trọng hơn 盼望 / 希望.','Tân ngữ có thể là danh từ hoặc cả mệnh đề: 期待(着)你的回信; 期待能够解放城市. Danh từ: 父母的期待 (kỳ vọng của bố mẹ).'],
   usage:'期待 + N / mệnh đề; 期待着……; 充满期待; 不辜负……的期待 (không phụ kỳ vọng). Khi chỉ mong ai đó "đến" dùng 等待 (chờ đợi) — 期待 nhấn mạnh sự mong mỏi trong lòng.',
   collo:['期待胜利','期待着','父母的期待','充满期待'],
   ex_zh:'詹森的目标很明确，就是期待能够解放城市，使之更适合人类生活。',ex_py:'Zhānsēn de mùbiāo hěn míngquè, jiù shì qīdài nénggòu jiěfàng chéngshì, shǐ zhī gèng shìhé rénlèi shēnghuó.',ex_vn:'Mục tiêu của Jensen rất rõ ràng: mong có thể giải phóng thành phố, làm cho nó phù hợp hơn với cuộc sống con người.',
   exList:[
     {zh:'詹森的目标很明确，就是期待能够解放城市，使之更适合人类生活。',py:'Zhānsēn de mùbiāo hěn míngquè, jiù shì qīdài nénggòu jiěfàng chéngshì, shǐ zhī gèng shìhé rénlèi shēnghuó.',vn:'Mục tiêu của Jensen rất rõ ràng: mong có thể giải phóng thành phố, làm cho nó phù hợp hơn với cuộc sống con người.'},
     {zh:'全校同学都在期待着这场比赛的胜利。',py:'Quán xiào tóngxué dōu zài qīdàizhe zhè chǎng bǐsài de shènglì.',vn:'Học sinh cả trường đều đang mong đợi chiến thắng trong trận đấu này.'},
     {zh:'我一定要努力学习，不辜负父母的期待。',py:'Wǒ yídìng yào nǔlì xuéxí, bù gūfù fùmǔ de qīdài.',vn:'Tôi nhất định phải chăm chỉ học tập, không phụ kỳ vọng của bố mẹ.'}
   ],
   colloFull:[
     {zh:'期待胜利',py:'qīdài shènglì',vn:'mong đợi chiến thắng'},
     {zh:'期待着',py:'qīdàizhe',vn:'đang mong đợi'},
     {zh:'父母的期待',py:'fùmǔ de qīdài',vn:'kỳ vọng của bố mẹ'},
     {zh:'充满期待',py:'chōngmǎn qīdài',vn:'đầy mong đợi'},
     {zh:'期待你的回信',py:'qīdài nǐ de huíxìn',vn:'mong thư hồi âm của bạn'}
   ],
   patterns:[
     {s:'期待(着) + N / mệnh đề',m:'Mong đợi điều gì'},
     {s:'不辜负 + 某人 + 的期待',m:'Không phụ kỳ vọng của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mọi người đều mong đợi chiến thắng, kết quả trận đấu lại bị huỷ.',answer:'大家都期待着胜利，结果比赛却被取消了。',answerPy:'Dàjiā dōu qīdàizhe shènglì, jiéguǒ bǐsài què bèi qǔxiāo le.',
      note:'期待 + 胜利 (bài tập 3 của sách); ôn 取消.',pair:'被'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ mong đợi một kỳ nghỉ như vậy.',answer:'我从来没这么期待过一个假期。',answerPy:'Wǒ cónglái méi zhème qīdàiguo yí ge jiàqī.',
      note:'过 đặt sau 期待.',pair:'从来没……过'}
   ]},

  {n:38,zh:'解放',py:'jiěfàng',pos:'Động từ',vn:'giải phóng, thả tự do',hv:'giải phóng',em:'🕊️',lesson:1,
   explain:['Làm cho thoát khỏi sự trói buộc, kìm hãm: 解放城市 (giải phóng thành phố khỏi ô tô), 解放思想 (giải phóng tư tưởng).','Khẩu ngữ vui: làm xong việc nặng nhọc, thấy nhẹ nhõm — 考完试，终于解放了!'],
   usage:'解放 + 城市 / 思想 / 双手 / 自己; 终于解放了; 得到解放. Tiếng Việt dùng "giải phóng" nhiều về chính trị, tiếng Trung dùng rộng hơn, cả trong đời thường.',
   collo:['解放城市','解放思想','解放双手','终于解放了'],
   ex_zh:'詹森的目标就是期待能够解放城市，使之更适合人类生活。',ex_py:'Zhānsēn de mùbiāo jiù shì qīdài nénggòu jiěfàng chéngshì, shǐ zhī gèng shìhé rénlèi shēnghuó.',ex_vn:'Mục tiêu của Jensen chính là mong có thể giải phóng thành phố, làm cho nó phù hợp hơn với cuộc sống con người.',
   exList:[
     {zh:'詹森的目标就是期待能够解放城市，使之更适合人类生活。',py:'Zhānsēn de mùbiāo jiù shì qīdài nénggòu jiěfàng chéngshì, shǐ zhī gèng shìhé rénlèi shēnghuó.',vn:'Mục tiêu của Jensen chính là mong có thể giải phóng thành phố, làm cho nó phù hợp hơn với cuộc sống con người.'},
     {zh:'洗碗机把妈妈的双手从家务中解放了出来。',py:'Xǐwǎnjī bǎ māma de shuāngshǒu cóng jiāwù zhōng jiěfàngle chūlai.',vn:'Máy rửa bát đã giải phóng đôi tay của mẹ khỏi việc nhà.'},
     {zh:'最后一门考完了，我终于解放了！',py:'Zuìhòu yì mén kǎowán le, wǒ zhōngyú jiěfàng le!',vn:'Thi xong môn cuối rồi, cuối cùng tôi cũng được giải phóng!'}
   ],
   colloFull:[
     {zh:'解放城市',py:'jiěfàng chéngshì',vn:'giải phóng thành phố'},
     {zh:'解放思想',py:'jiěfàng sīxiǎng',vn:'giải phóng tư tưởng'},
     {zh:'解放双手',py:'jiěfàng shuāngshǒu',vn:'giải phóng đôi tay'},
     {zh:'终于解放了',py:'zhōngyú jiěfàng le',vn:'cuối cùng cũng được giải phóng'},
     {zh:'得到解放',py:'dédào jiěfàng',vn:'được giải phóng'}
   ],
   patterns:[
     {s:'把 + A + 从 + B + 中解放出来',m:'Giải phóng A khỏi B'},
     {s:'（做完某事）+ 终于解放了',m:'Khẩu ngữ: xong việc, nhẹ cả người'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Robot đã giải phóng con người khỏi những công việc nặng nhọc.',answer:'机器人把人们从辛苦的工作中解放了出来。',answerPy:'Jīqìrén bǎ rénmen cóng xīnkǔ de gōngzuò zhōng jiěfàngle chūlai.',
      note:'把 + A + 从……中 + 解放出来.',pair:'把'},
     {promptLang:'vi',prompt:'Vừa thi xong là cậu ấy hét lên: "Mình được giải phóng rồi!"',answer:'一考完试，他就喊：“我解放了！”',answerPy:'Yì kǎowán shì, tā jiù hǎn: “Wǒ jiěfàng le!”',
      note:'Nghĩa khẩu ngữ vui của 解放.',pair:'一……就……'}
   ]},

  {n:39,zh:'佩·詹森',py:'Pèi Zhānsēn',pos:'Danh từ riêng',vn:'Pay Jensen (nhân vật chính của bài, chuyên gia giao thông)',hv:'Bội Chiêm Sâm',em:'👨‍💼',lesson:1,
   explain:['Nhân vật chính: nhân viên Ban Giao thông của Cơ quan Bảo vệ Môi trường châu Âu, người nghĩ ra cách "dùng tắc trị tắc".','Trong bài, sau lần đầu gọi đủ tên 佩·詹森, các lần sau chỉ gọi họ 詹森. Dấu chấm giữa (·) ngăn cách tên và họ người nước ngoài.'],
   usage:'佩·詹森 / 詹森. Tên người nước ngoài phiên âm tiếng Trung: tên trước, họ sau, giữa có dấu ·.',
   collo:['佩·詹森的故事','詹森'],
   ex_zh:'这里我们不妨听听佩·詹森的故事。',ex_py:'Zhèli wǒmen bùfáng tīngting Pèi Zhānsēn de gùshi.',ex_vn:'Ở đây chúng ta thử nghe câu chuyện của Pay Jensen xem.',
   exList:[
     {zh:'这里我们不妨听听佩·詹森的故事。',py:'Zhèli wǒmen bùfáng tīngting Pèi Zhānsēn de gùshi.',vn:'Ở đây chúng ta thử nghe câu chuyện của Pay Jensen xem.'},
     {zh:'詹森的目标很明确，就是期待能够解放城市。',py:'Zhānsēn de mùbiāo hěn míngquè, jiù shì qīdài nénggòu jiěfàng chéngshì.',vn:'Mục tiêu của Jensen rất rõ ràng: mong có thể giải phóng thành phố.'}
   ],
   colloFull:[
     {zh:'佩·詹森的故事',py:'Pèi Zhānsēn de gùshi',vn:'câu chuyện của Pay Jensen'},
     {zh:'詹森',py:'Zhānsēn',vn:'Jensen (gọi theo họ)'},
     {zh:'詹森的妙招',py:'Zhānsēn de miàozhāo',vn:'tuyệt chiêu của Jensen'}
   ],
   patterns:[
     {s:'佩·詹森 → 詹森',m:'Lần đầu gọi đủ tên, sau gọi họ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Jensen vừa về làm việc đã nhận được một nhiệm vụ khó.',answer:'詹森一到那儿工作，就接到了一个很难的任务。',answerPy:'Zhānsēn yí dào nàr gōngzuò, jiù jiēdàole yí ge hěn nán de rènwu.',
      note:'Câu trong bài: 詹森一到……工作，就…….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cách "dùng tắc trị tắc" là do Jensen nghĩ ra.',answer:'“以堵治堵”的办法是詹森想出来的。',answerPy:'“Yǐ dǔ zhì dǔ” de bànfǎ shì Zhānsēn xiǎng chūlai de.',
      note:'是……的 nhấn mạnh người nghĩ ra.',pair:'是……的'}
   ]},

  {n:40,zh:'欧洲环境保护署',py:'Ōuzhōu Huánjìng Bǎohù Shǔ',pos:'Danh từ riêng',vn:'Cơ quan Bảo vệ Môi trường châu Âu',hv:'Âu Châu Hoàn Cảnh Bảo Hộ Thự',em:'🇪🇺',lesson:1,
   explain:['Cơ quan về môi trường của châu Âu, nơi Jensen làm việc (ở Ban Giao thông — 交通部).','署 (shǔ) = cơ quan, sở (trong tên cơ quan nhà nước).'],
   usage:'在欧洲环境保护署工作; 欧洲环境保护署交通部. Chú ý: 环境 ở đây là "môi trường" chứ không phải "hoàn cảnh".',
   collo:['欧洲环境保护署','交通部'],
   ex_zh:'詹森一到欧洲环境保护署交通部工作，就接到了研究如何解决城市拥堵问题的任务。',ex_py:'Zhānsēn yí dào Ōuzhōu Huánjìng Bǎohù Shǔ jiāotōngbù gōngzuò, jiù jiēdàole yánjiū rúhé jiějué chéngshì yōngdǔ wèntí de rènwu.',ex_vn:'Jensen vừa về làm ở Ban Giao thông của Cơ quan Bảo vệ Môi trường châu Âu đã nhận nhiệm vụ nghiên cứu cách giải quyết ùn tắc đô thị.',
   exList:[
     {zh:'詹森一到欧洲环境保护署交通部工作，就接到了研究如何解决城市拥堵问题的任务。',py:'Zhānsēn yí dào Ōuzhōu Huánjìng Bǎohù Shǔ jiāotōngbù gōngzuò, jiù jiēdàole yánjiū rúhé jiějué chéngshì yōngdǔ wèntí de rènwu.',vn:'Jensen vừa về làm ở Ban Giao thông của Cơ quan Bảo vệ Môi trường châu Âu đã nhận nhiệm vụ nghiên cứu cách giải quyết ùn tắc đô thị.'},
     {zh:'欧洲环境保护署很关注城市的空气污染问题。',py:'Ōuzhōu Huánjìng Bǎohù Shǔ hěn guānzhù chéngshì de kōngqì wūrǎn wèntí.',vn:'Cơ quan Bảo vệ Môi trường châu Âu rất quan tâm vấn đề ô nhiễm không khí đô thị.'}
   ],
   colloFull:[
     {zh:'欧洲环境保护署',py:'Ōuzhōu Huánjìng Bǎohù Shǔ',vn:'Cơ quan Bảo vệ Môi trường châu Âu'},
     {zh:'交通部',py:'jiāotōngbù',vn:'Ban / Bộ Giao thông'},
     {zh:'环境保护',py:'huánjìng bǎohù',vn:'bảo vệ môi trường'}
   ],
   patterns:[
     {s:'在 + 欧洲环境保护署 + 工作',m:'Làm việc ở cơ quan nào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy vừa đến Cơ quan Bảo vệ Môi trường châu Âu làm việc thì được giao một nhiệm vụ.',answer:'他一到欧洲环境保护署工作，就接到了一个任务。',answerPy:'Tā yí dào Ōuzhōu Huánjìng Bǎohù Shǔ gōngzuò, jiù jiēdàole yí ge rènwu.',
      note:'一……就…… (câu trong bài).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nhiệm vụ này là do Cơ quan Bảo vệ Môi trường châu Âu giao cho anh ấy.',answer:'这个任务是欧洲环境保护署交给他的。',answerPy:'Zhège rènwu shì Ōuzhōu Huánjìng Bǎohù Shǔ jiāo gěi tā de.',
      note:'是……的 nhấn mạnh chủ thể.',pair:'是……的'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (file nghe 33-1), 9 đoạn như sách (tr. 130–132)
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 以堵治堵——缓解交通有妙招',
  preQuiz:[
    {q:'城市汽车数量迅速增长，最初被视为什么？',opts:['社会发展、经济繁荣的体现','交通拥堵的原因','环境污染的开始'],ans:0},
    {q:'在大城市中，什么已经成了家常便饭？',opts:['开私家车','堵车','坐公交车'],ans:1},
    {q:'什么方法被公认为解决拥堵最基本的方法？',opts:['增设红绿灯','大力发展公共交通','新建或加宽道路'],ans:2},
    {q:'为什么加宽道路没有用？',opts:['道路扩建的速度跟不上车流量增加的速度','政府没有钱','司机不喜欢宽的道路'],ans:0},
    {q:'詹森到欧洲环境保护署交通部工作后，接到了什么任务？',opts:['修建过街天桥','研究如何解决城市拥堵问题','管理公共交通'],ans:1},
    {q:'为了完成任务，詹森没有做下面哪件事？',opts:['展开调查','虚心咨询有关专家','马上新建道路'],ans:2},
    {q:'那个健身的人为什么没上天桥？',opts:['为了图省事','天桥坏了','他没看见天桥'],ans:0},
    {q:'那个健身的人被车撞倒后怎么样了？',opts:['受了重伤','只受了点轻伤','司机受伤了'],ans:1},
    {q:'这件事给了詹森什么启发？',opts:['应该多修天桥','应该给司机买保险','让城市先堵起来，以堵治堵'],ans:2},
    {q:'下面哪项不是政府批准的改革措施？',opts:['新建很多停车场','增设红绿灯','取消地下通道'],ans:0},
    {q:'半年以后，效果怎么样？',opts:['市民都很满意，没有抱怨','自愿放弃开私家车的人越来越多','道路比以前更拥堵了'],ans:1},
    {q:'詹森的目标是什么？',opts:['让所有人都买汽车','多建商务大厦','解放城市，使之更适合人类生活'],ans:2}
  ],
  lines:[
    {sp:0,zh:'城市汽车的数量迅速增长，最初还被视为是社会发展、经济繁荣的体现。但很快人们就发现了问题。随着车流量的增加，道路变得格外拥挤，堵车在大城市中已经成了家常便饭。',
     py:'Chéngshì qìchē de shùliàng xùnsù zēngzhǎng, zuìchū hái bèi shìwéi shì shèhuì fāzhǎn, jīngjì fánróng de tǐxiàn. Dàn hěn kuài rénmen jiù fāxiànle wèntí. Suízhe chēliúliàng de zēngjiā, dàolù biàn de géwài yōngjǐ, dǔchē zài dà chéngshì zhōng yǐjīng chéngle jiācháng biànfàn.',
     vn:'Số lượng ô tô trong thành phố tăng nhanh chóng, ban đầu còn được coi là biểu hiện của xã hội phát triển, kinh tế phồn thịnh. Nhưng chẳng bao lâu người ta đã phát hiện ra vấn đề. Cùng với sự gia tăng lưu lượng xe, đường sá trở nên đông nghịt khác thường, tắc đường ở các thành phố lớn đã thành chuyện cơm bữa.'},
    {sp:0,zh:'解决交通拥堵的问题就要减少单位面积道路内的汽车数量，新建或加宽道路被公认为最基本的方法。但事实证明这只是我们美好的主观愿望，道路扩建的速度远远跟不上车流量增加的速度，面积的增加并未使道路空出空间来，甚至还会无形之中鼓励更多的司机开车上路，使得市中心的道路更加拥挤。',
     py:'Jiějué jiāotōng yōngdǔ de wèntí jiù yào jiǎnshǎo dānwèi miànjī dàolù nèi de qìchē shùliàng, xīnjiàn huò jiākuān dàolù bèi gōngrèn wéi zuì jīběn de fāngfǎ. Dàn shìshí zhèngmíng zhè zhǐ shì wǒmen měihǎo de zhǔguān yuànwàng, dàolù kuòjiàn de sùdù yuǎnyuǎn gēn bu shàng chēliúliàng zēngjiā de sùdù, miànjī de zēngjiā bìng wèi shǐ dàolù kòngchū kōngjiān lai, shènzhì hái huì wúxíng zhī zhōng gǔlì gèng duō de sījī kāichē shànglù, shǐde shì zhōngxīn de dàolù gèngjiā yōngjǐ.',
     vn:'Muốn giải quyết vấn đề ùn tắc giao thông thì phải giảm số ô tô trên một đơn vị diện tích đường; xây mới hoặc mở rộng đường được mọi người công nhận là cách cơ bản nhất. Nhưng thực tế đã chứng minh đây chỉ là mong muốn chủ quan tốt đẹp của chúng ta: tốc độ mở rộng đường còn lâu mới theo kịp tốc độ tăng lưu lượng xe, diện tích tăng lên cũng chẳng làm đường trống ra thêm chỗ, thậm chí còn vô hình trung khuyến khích thêm nhiều tài xế lái xe ra đường, khiến đường ở trung tâm thành phố càng đông nghịt hơn.'},
    {sp:0,zh:'那么，如何根治交通拥堵呢？这里我们不妨听听佩·詹森的故事。',
     py:'Nàme, rúhé gēnzhì jiāotōng yōngdǔ ne? Zhèli wǒmen bùfáng tīngting Pèi Zhānsēn de gùshi.',
     vn:'Vậy, làm thế nào để trị tận gốc ùn tắc giao thông? Ở đây chúng ta thử nghe câu chuyện của Pay Jensen xem.'},
    {sp:0,zh:'詹森一到欧洲环境保护署交通部工作，就接到了研究如何解决城市拥堵问题的任务。于是，他开始展开调查，研究收集上来的数据，归纳问题特点，并虚心咨询了有关专家。',
     py:'Zhānsēn yí dào Ōuzhōu Huánjìng Bǎohù Shǔ jiāotōngbù gōngzuò, jiù jiēdàole yánjiū rúhé jiějué chéngshì yōngdǔ wèntí de rènwu. Yúshì, tā kāishǐ zhǎnkāi diàochá, yánjiū shōují shànglai de shùjù, guīnà wèntí tèdiǎn, bìng xūxīn zīxúnle yǒuguān zhuānjiā.',
     vn:'Jensen vừa về làm việc ở Ban Giao thông của Cơ quan Bảo vệ Môi trường châu Âu đã nhận được nhiệm vụ nghiên cứu cách giải quyết vấn đề ùn tắc đô thị. Thế là anh bắt đầu tiến hành điều tra, nghiên cứu các số liệu thu thập được, tổng kết đặc điểm của vấn đề, và khiêm tốn hỏi ý kiến các chuyên gia liên quan.'},
    {sp:0,zh:'九月中旬的一天早晨，詹森照常提前出门赶在早高峰之前去交通部。他看到一个健身的人慢跑通过一个有过街天桥的路口时，为图省事没上天桥，而是横穿马路。结果，他被一辆车撞倒在地，虽然最后他只是受了点轻伤，而且有保险可以赔偿，但司机还是被吓得不轻。',
     py:'Jiǔ yuè zhōngxún de yì tiān zǎochen, Zhānsēn zhàocháng tíqián chūmén gǎn zài zǎo gāofēng zhīqián qù jiāotōngbù. Tā kàndào yí ge jiànshēn de rén mànpǎo tōngguò yí ge yǒu guòjiē tiānqiáo de lùkǒu shí, wèi tú shěngshì méi shàng tiānqiáo, ér shì héngchuān mǎlù. Jiéguǒ, tā bèi yí liàng chē zhuàngdǎo zài dì, suīrán zuìhòu tā zhǐ shì shòule diǎnr qīngshāng, érqiě yǒu bǎoxiǎn kěyǐ péicháng, dàn sījī háishi bèi xià de bù qīng.',
     vn:'Một buổi sáng trung tuần tháng Chín, Jensen như thường lệ ra khỏi nhà sớm để kịp đến Ban Giao thông trước giờ cao điểm buổi sáng. Anh thấy một người đang tập thể dục chạy chậm qua một giao lộ có cầu vượt cho người đi bộ; để đỡ phiền, người đó không lên cầu vượt mà băng ngang qua đường. Kết quả, anh ta bị một chiếc xe đâm ngã xuống đất; tuy cuối cùng anh ta chỉ bị thương nhẹ, lại có bảo hiểm bồi thường, nhưng người tài xế vẫn bị một phen hoảng hồn.'},
    {sp:0,zh:'不过这件事倒是给了詹森启发：开车出行是为了省时省力，但如果情况相反呢？他决定要改变市民出行的观念，反其道而行之——让城市先堵起来，给司机制造麻烦，以堵治堵。',
     py:'Búguò zhè jiàn shì dào shì gěile Zhānsēn qǐfā: kāichē chūxíng shì wèile shěng shí shěng lì, dàn rúguǒ qíngkuàng xiāngfǎn ne? Tā juédìng yào gǎibiàn shìmín chūxíng de guānniàn, fǎn qí dào ér xíng zhī——ràng chéngshì xiān dǔ qǐlai, gěi sījī zhìzào máfan, yǐ dǔ zhì dǔ.',
     vn:'Có điều chuyện này lại cho Jensen một gợi ý: lái xe đi lại là để tiết kiệm thời gian và sức lực, nhưng nếu tình hình ngược lại thì sao? Anh quyết định thay đổi quan niệm đi lại của người dân, làm ngược lại hoàn toàn — để thành phố tắc trước đã, gây phiền phức cho tài xế, dùng tắc để trị tắc.'},
    {sp:0,zh:'经过多次努力，政府批准了他提出的改革措施，比如，增设红绿灯，让车辆不得不走走停停；在主要十字路口取消地下通道，让行人从地下重返地面；在购物广场、商务大厦的附近不建停车场等。同时，大力发展公共交通。',
     py:'Jīngguò duō cì nǔlì, zhèngfǔ pīzhǔnle tā tíchū de gǎigé cuòshī, bǐrú, zēngshè hónglǜdēng, ràng chēliàng bùdébù zǒuzǒu-tíngtíng; zài zhǔyào shízì lùkǒu qǔxiāo dìxià tōngdào, ràng xíngrén cóng dìxià chóng fǎn dìmiàn; zài gòuwù guǎngchǎng, shāngwù dàshà de fùjìn bú jiàn tíngchēchǎng děng. Tóngshí, dàlì fāzhǎn gōnggòng jiāotōng.',
     vn:'Sau nhiều lần nỗ lực, chính quyền đã phê duyệt các biện pháp cải cách anh đề xuất, chẳng hạn: lắp thêm đèn xanh đèn đỏ, khiến xe cộ buộc phải đi đi dừng dừng; bỏ hầm đi bộ ở các ngã tư chính, để người đi bộ từ dưới lòng đất trở lại mặt đất; không xây bãi đỗ xe gần các trung tâm mua sắm, cao ốc thương mại, v.v. Đồng thời, ra sức phát triển giao thông công cộng.'},
    {sp:0,zh:'半年过去了，虽然市民们有些抱怨，但效果非常明显，自愿放弃开私家车出门的人越来越多。这也难怪，与其堵在路上浪费时间和汽油，污染环境，倒不如改乘公交出行。这样一来，道路拥堵大为缓解。',
     py:'Bàn nián guòqu le, suīrán shìmínmen yǒuxiē bàoyuàn, dàn xiàoguǒ fēicháng míngxiǎn, zìyuàn fàngqì kāi sījiāchē chūmén de rén yuè lái yuè duō. Zhè yě nánguài, yǔqí dǔ zài lù shang làngfèi shíjiān hé qìyóu, wūrǎn huánjìng, dào bùrú gǎi chéng gōngjiāo chūxíng. Zhèyàng yì lái, dàolù yōngdǔ dà wéi huǎnjiě.',
     vn:'Nửa năm trôi qua, tuy người dân có đôi chút phàn nàn, nhưng hiệu quả rất rõ rệt: số người tự nguyện bỏ đi xe riêng ra ngoài ngày càng nhiều. Điều này cũng dễ hiểu thôi: thay vì tắc trên đường, lãng phí thời gian và xăng, lại gây ô nhiễm môi trường, chẳng thà chuyển sang đi xe buýt. Như vậy, tình trạng ùn tắc đường sá đã giảm đi rất nhiều.'},
    {sp:0,zh:'城市本是为人而建，如今却被汽车占有，詹森的目标很明确，就是期待能够解放城市，使之更适合人类生活。',
     py:'Chéngshì běn shì wèi rén ér jiàn, rújīn què bèi qìchē zhànyǒu, Zhānsēn de mùbiāo hěn míngquè, jiù shì qīdài nénggòu jiěfàng chéngshì, shǐ zhī gèng shìhé rénlèi shēnghuó.',
     vn:'Thành phố vốn được xây cho con người, nay lại bị ô tô chiếm giữ. Mục tiêu của Jensen rất rõ ràng: mong có thể giải phóng thành phố, làm cho nó phù hợp hơn với cuộc sống của con người.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 表现/体现 lấy từ sách (tr. 134–135)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'表现 — 体现',
   same:'Đều là động từ, đều có nghĩa "thể hiện, bày ra cho thấy".',
   sameEx:{zh:'这部电影表现／体现出鲜明的时代特点。',vn:'Bộ phim này thể hiện rõ nét đặc điểm của thời đại.'},
   items:[
     {word:'表现',points:[
       'Nghiêng về phản ánh PHONG CÁCH, TÌNH CẢM, THÁI ĐỘ của người / sự vật: 表现得很乐观.',
       'Còn có nghĩa cố ý phô bày ưu điểm của mình, thường mang nghĩa xấu: 拼命地表现自己.',
       'Còn làm DANH TỪ: tình hình lời nói, hành động — 你的表现很好, ……是……的表现.'
     ],ex:[{zh:'他总是乐呵呵的，对什么事都表现得很乐观。',vn:'Anh ấy lúc nào cũng tươi cười, việc gì cũng tỏ ra rất lạc quan.'},
          {zh:'我们对你的表现很满意，你下周一能来上班吗？',vn:'Chúng tôi rất hài lòng với biểu hiện của anh, thứ Hai tuần sau anh đi làm được không?'}]},
     {word:'体现',points:[
       'Nhấn mạnh một hiện tượng, tính chất, tư tưởng, tinh thần được thể hiện CỤ THỂ QUA một người / sự vật.',
       'Không có nghĩa "khoe khoang bản thân".',
       'Không làm danh từ chỉ biểu hiện của người (✗ 你的体现很好); chỉ dùng trong kết cấu ……的体现 (biểu hiện của một điều trừu tượng).'
     ],ex:[{zh:'不同文化的差异在语言特别是词语上体现得最突出。',vn:'Khác biệt văn hoá thể hiện rõ nhất ở ngôn ngữ, đặc biệt là ở từ ngữ.'},
          {zh:'这次比赛充分体现了我们班的团队精神。',vn:'Cuộc thi lần này thể hiện đầy đủ tinh thần đồng đội của lớp chúng tôi.'}]}
   ],
   quiz:[
     {sentence:'用表格来说明问题是一种有条理的思考方法的＿＿。',options:['表现','体现'],answer:1,
      why:'Một phương pháp tư duy được thể hiện cụ thể qua việc dùng bảng → 体现 (câu mẫu của sách).'},
     {sentence:'人们一直认为，哭是胆小、软弱的＿＿。',options:['表现','体现'],answer:0,
      why:'Khóc là biểu hiện (hành vi) của sự nhút nhát → 表现 làm danh từ.'},
     {sentence:'丽丽是不会错过这个在大家面前＿＿自己的机会的。',options:['表现','体现'],answer:0,
      why:'Phô bày bản thân trước mọi người → 表现自己; 体现 không có nghĩa này.'},
     {sentence:'人生的价值不＿＿在你口袋里有多少钱，而在于你为社会做出了多少贡献。',options:['表现','体现'],answer:1,
      why:'Giá trị (khái niệm trừu tượng) được thể hiện cụ thể qua … → 体现在…….'}
   ],
   sgk:{
     chung:{t:'都是动词，都有显示出来的意思。',vn:'Đều là động từ, đều có nghĩa là bày ra cho thấy.',vd:'这部电影表现／体现出鲜明的时代特点。',vdVn:'Bộ phim này thể hiện rõ nét đặc điểm của thời đại.'},
     khac:[
       {a:{t:'侧重反映人或事物的某种风格、感情、态度等。',vn:'Nghiêng về phản ánh phong cách, tình cảm, thái độ… của người hoặc sự vật.',vd:'他总是乐呵呵的，对什么事都表现得很乐观。',vdVn:'Anh ấy lúc nào cũng tươi cười, việc gì cũng tỏ ra rất lạc quan.'},
        b:{t:'强调某种现象、性质或思想、精神等通过某人或事物具体表现出来。',vn:'Nhấn mạnh một hiện tượng, tính chất hay tư tưởng, tinh thần… được thể hiện cụ thể qua một người hay sự vật nào đó.',vd:'不同文化的差异在语言特别是词语上体现得最突出。',vdVn:'Sự khác biệt giữa các nền văn hoá thể hiện rõ nhất ở ngôn ngữ, đặc biệt là ở từ ngữ.'}},
       {a:{t:'还有故意显示自己的优点、长处的意思，多含贬义。',vn:'Còn có nghĩa cố ý phô bày ưu điểm, sở trường của mình, thường mang nghĩa xấu.',vd:'为了得到领导的欣赏，他拼命地表现自己。',vdVn:'Để được lãnh đạo đánh giá cao, anh ta ra sức thể hiện bản thân.'},
        b:{t:'没有这个意思。',vn:'Không có nghĩa này.'}},
       {a:{t:'还可做名词，指言语行动的状况。',vn:'Còn có thể làm danh từ, chỉ tình hình lời nói, hành động.',vd:'我们对你的表现很满意，你下周一能来上班吗？',vdVn:'Chúng tôi rất hài lòng với biểu hiện của anh, thứ Hai tuần sau anh đi làm được không?'},
        b:{t:'没有这个用法。',vn:'Không có cách dùng này.'}}
     ],
     lamThu:[
       {s:'用表格来说明问题是一种有条理的思考方法的＿＿。',dap:[false,true],mau:true,
        giai:'Phương pháp tư duy mạch lạc được thể hiện cụ thể qua việc dùng bảng → 体现 (câu mẫu của sách).'},
       {s:'人们一直认为，哭是胆小、软弱的＿＿。',dap:[true,false],
        giai:'……是……的表现: hành vi khóc là biểu hiện của sự nhút nhát, yếu đuối → 表现 làm danh từ.'},
       {s:'丽丽是不会错过这个在大家面前＿＿自己的机会的。',dap:[true,false],
        giai:'Phô bày bản thân trước mọi người → 表现自己. 体现 không có nghĩa này.'},
       {s:'人生的价值不＿＿在你口袋里有多少钱，而在于你为社会做出了多少贡献。',dap:[false,true],
        giai:'Giá trị cuộc đời (trừu tượng) được thể hiện cụ thể qua … → 体现在…….'}
     ]
   }},

  {pair:'虚心 — 谦虚',
   same:'Đều là tính từ, đều chỉ người không kiêu ngạo, không tự mãn.',
   sameEx:{zh:'他成绩很好，但一直很虚心／谦虚。',vn:'Cậu ấy học rất giỏi nhưng luôn khiêm tốn.'},
   items:[
     {word:'虚心',points:[
       'Nhấn mạnh THÁI ĐỘ SẴN SÀNG TIẾP THU: chịu nghe, chịu học ý kiến người khác.',
       'Hay làm trạng ngữ trước động từ tiếp thu: 虚心请教 / 学习 / 咨询 / 接受批评 / 听取意见.',
       'Không dùng để tả cách nói hạ mình khi được khen.'
     ],ex:[{zh:'他归纳问题特点，并虚心咨询了有关专家。',vn:'Anh tổng kết đặc điểm vấn đề, và khiêm tốn hỏi ý kiến chuyên gia.'},
          {zh:'一个好的领导能虚心听取不同的意见。',vn:'Một lãnh đạo giỏi có thể khiêm tốn lắng nghe ý kiến khác nhau.'}]},
     {word:'谦虚',points:[
       'Nhấn mạnh THÁI ĐỘ KHIÊM NHƯỜNG khi nói về bản thân: không khoe, hạ thấp mình.',
       'Hay dùng khi được khen: 你太谦虚了, 谦虚地说…….',
       'Cũng làm động từ: 你就别谦虚了 (đừng khiêm tốn nữa).'
     ],ex:[{zh:'别人夸他汉语好，他谦虚地说：“哪里哪里，还差得远呢。”',vn:'Người ta khen tiếng Trung của anh ấy giỏi, anh ấy khiêm tốn nói: "Đâu có, còn kém xa lắm."'},
          {zh:'你唱得这么好，就别谦虚了！',vn:'Cậu hát hay thế, đừng khiêm tốn nữa!'}]}
   ],
   quiz:[
     {sentence:'一个好的领导能＿＿听取不同的意见。',options:['谦虚','虚心'],answer:1,
      why:'Làm trạng ngữ trước động từ tiếp thu (听取意见) → 虚心 (bài tập 2 của sách).'},
     {sentence:'老师夸她作文写得好，她＿＿地说：“我还要继续努力。”',options:['谦虚','虚心'],answer:0,
      why:'Được khen, nói hạ mình → 谦虚.'},
     {sentence:'有不懂的地方，要＿＿向别人请教。',options:['谦虚','虚心'],answer:1,
      why:'虚心 + 请教 (bảng 搭配 của sách).'},
     {sentence:'你已经是冠军了，就别＿＿了！',options:['谦虚','虚心'],answer:0,
      why:'别谦虚了 = đừng khiêm tốn nữa; 虚心 không dùng kiểu này.'}
   ]},

  {pair:'取消 — 消失',
   same:'Đều là động từ, đều có chữ 消, kết quả là cái gì đó "không còn nữa".',
   sameEx:{zh:'比赛取消了，大家脸上的笑容也消失了。',vn:'Trận đấu bị huỷ, nụ cười trên mặt mọi người cũng biến mất.'},
   items:[
     {word:'取消',points:[
       'CON NGƯỜI chủ động làm cho điều đã có / đã định mất hiệu lực: huỷ bỏ, bãi bỏ.',
       'Mang tân ngữ: 取消比赛 / 会议 / 资格 / 限制 / 约会.',
       'Có thể dùng câu 被: 资格被取消了.'
     ],ex:[{zh:'学校规定，旷课达到60节以上的学生取消其考试的资格。',vn:'Học sinh bỏ học từ 60 tiết trở lên bị huỷ tư cách dự thi.'},
          {zh:'在主要十字路口取消地下通道。',vn:'Bỏ hầm đi bộ ở các ngã tư chính.'}]},
     {word:'消失',points:[
       'Sự vật TỰ dần dần không còn thấy nữa: biến mất, tan biến.',
       'KHÔNG mang tân ngữ: 笑容消失了, 消失在人群中.',
       'Không dùng câu 被.'
     ],ex:[{zh:'他的身影很快消失在人群中。',vn:'Bóng anh ấy nhanh chóng mất hút trong đám đông.'},
          {zh:'很多传统的手艺正在慢慢消失。',vn:'Nhiều nghề thủ công truyền thống đang dần mai một.'}]}
   ],
   quiz:[
     {sentence:'学校规定，旷课达到60节以上的学生＿＿其考试的资格。',options:['取消','消失'],answer:0,
      why:'Có tân ngữ (资格), do nhà trường quyết định → 取消 (bài tập 2 của sách).'},
     {sentence:'太阳出来以后，大雾慢慢＿＿了。',options:['取消','消失'],answer:1,
      why:'Sương mù tự tan đi, không có tân ngữ → 消失.'},
     {sentence:'因为下大雨，运动会被＿＿了。',options:['取消','消失'],answer:0,
      why:'Câu 被, do người quyết định → 取消.'},
     {sentence:'听到这个消息，她脸上的笑容一下子＿＿了。',options:['取消','消失'],answer:1,
      why:'Nụ cười tự biến mất → 消失.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'繁荣',hv:'phồn vinh',vn:'phồn vinh, thịnh vượng',note:'Trùng khít: 经济繁荣 = kinh tế phồn vinh.'},
    {zh:'体现',hv:'thể hiện',vn:'thể hiện',note:'Trùng khít. Phân biệt với 表现 (biểu hiện) ở phần 词语辨析.'},
    {zh:'面积',hv:'diện tích',vn:'diện tích',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'主观',hv:'chủ quan',vn:'chủ quan',note:'Trùng nghĩa "theo ý riêng". NHƯNG không có nghĩa "lơ là, coi thường" như tiếng Việt (đừng chủ quan = 别大意).'},
    {zh:'展开',hv:'triển khai',vn:'triển khai, tiến hành',note:'Trùng khít: 展开调查 = triển khai điều tra.'},
    {zh:'中旬',hv:'trung tuần',vn:'trung tuần, giữa tháng',note:'Trùng khít: 上旬 thượng tuần, 下旬 hạ tuần.'},
    {zh:'保险',hv:'bảo hiểm',vn:'bảo hiểm',note:'Trùng khít. Thêm nghĩa tính từ "chắc ăn": 这样比较保险.'},
    {zh:'赔偿',hv:'bồi thường',vn:'bồi thường',note:'Trùng khít: 赔偿损失 = bồi thường thiệt hại.'},
    {zh:'政府',hv:'chính phủ',vn:'chính phủ, chính quyền',note:'Tiếng Trung dùng cả cho chính quyền địa phương: 市政府.'},
    {zh:'批准',hv:'phê chuẩn',vn:'phê chuẩn, phê duyệt',note:'Trùng khít.'},
    {zh:'改革',hv:'cải cách',vn:'cải cách',note:'Trùng khít: 经济改革 = cải cách kinh tế.'},
    {zh:'广场',hv:'quảng trường',vn:'quảng trường',note:'Trùng khít. Thêm nghĩa "trung tâm mua sắm": 购物广场.'},
    {zh:'自愿',hv:'tự nguyện',vn:'tự nguyện',note:'Trùng khít.'},
    {zh:'解放',hv:'giải phóng',vn:'giải phóng',note:'Trùng khít; tiếng Trung dùng cả trong đời thường: 考完试终于解放了.'},
    {zh:'根治',hv:'căn trị',vn:'trị tận gốc',note:'"Căn" = gốc rễ (căn nguyên), "trị" = chữa → chữa từ gốc.'},
    {zh:'归纳',hv:'quy nạp',vn:'tổng kết, quy nạp',note:'"Quy nạp" trong toán / logic; đời thường dịch là "tổng kết, tóm tắt".'}
  ],
  idiom:[
    {zh:'家常便饭',hv:'gia thường tiện phạn',vn:'chuyện cơm bữa',note:'Trong bài: 堵车……已经成了家常便饭.'},
    {zh:'以堵治堵',hv:'dĩ đổ trị đổ',vn:'dùng tắc trị tắc',note:'Tên bài; theo kiểu 以毒攻毒 (dĩ độc trị độc).'},
    {zh:'反其道而行之',hv:'phản kỳ đạo nhi hành chi',vn:'làm ngược lại hoàn toàn',note:'Trong bài: 反其道而行之——让城市先堵起来.'},
    {zh:'省时省力',hv:'tỉnh thời tỉnh lực',vn:'tiết kiệm thời gian và sức lực',note:'省 = tiết kiệm (không phải "tỉnh").'},
    {zh:'无形之中',hv:'vô hình chi trung',vn:'vô hình trung',note:'Trùng với "vô hình trung" của tiếng Việt.'}
  ],
  trap:[
    {zh:'取消',hv:'thủ tiêu',vn:'huỷ bỏ, bãi bỏ',
     warn:'BẪY lớn: "thủ tiêu" tiếng Việt là giết người / phi tang. 取消 chỉ là HUỶ BỎ: 取消比赛 = huỷ trận đấu.'},
    {zh:'扩大',hv:'khuếch đại',vn:'mở rộng',
     warn:'"Khuếch đại" tiếng Việt là phóng to (âm thanh) hoặc phóng đại sự thật. 扩大 là MỞ RỘNG: 扩大范围, 扩大影响.'},
    {zh:'虚心',hv:'hư tâm',vn:'khiêm tốn (tiếp thu)',
     warn:'"Hư" tiếng Việt gợi nghĩa hỏng, xấu. 虚 ở đây là TRỐNG → lòng trống để tiếp thu → khiêm tốn.'},
    {zh:'咨询',hv:'tư tuân',vn:'tư vấn, hỏi ý kiến',
     warn:'"Tư tuân" không dùng trong tiếng Việt. Người Việt nói "tư vấn" nhưng 顾问 mới là "cố vấn", còn 咨询 là HỎI Ý KIẾN / tư vấn.'},
    {zh:'图',hv:'đồ',vn:'ham, mưu cầu',
     warn:'图 quen thuộc là "bức vẽ" (地图). Làm động từ nghĩa là HAM, MƯU CẦU: 图省事 = ham đỡ phiền (cũng như "mưu đồ").'},
    {zh:'汽油',hv:'khí du',vn:'xăng',
     warn:'Không phải "dầu khí" hay "khí đốt". 汽油 = XĂNG; dầu diesel là 柴油.'},
    {zh:'商务',hv:'thương vụ',vn:'thương mại, kinh doanh',
     warn:'"Thương vụ" tiếng Việt là một vụ làm ăn. 商务 là lĩnh vực kinh doanh nói chung: 商务大厦 = cao ốc thương mại.'},
    {zh:'大厦',hv:'đại hạ',vn:'cao ốc, toà nhà lớn',
     warn:'厦 không phải 夏 (mùa hè). 厦 = nhà lớn; đọc shà (riêng 厦门 đọc Xiàmén).'},
    {zh:'难怪',hv:'nan quái',vn:'thảo nào; khó trách',
     warn:'Không hiểu từng chữ "khó + quái lạ". 难怪 = THẢO NÀO (hiểu ra nguyên nhân) hoặc "cũng dễ hiểu".'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 của sách (tr. 134) + bài tập 3 (tr. 136) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'展开',right:'辩论'},
  {left:'扩大',right:'影响'},
  {left:'归纳',right:'观点'},
  {left:'批准',right:'方案'},
  {left:'缓解',right:'矛盾'},
  {left:'取消',right:'限制'},
  {left:'赔偿',right:'损失'},
  {left:'期待',right:'胜利'},
  {left:'缓解',right:'压力'},
  {left:'取消',right:'资格'},
  {left:'主观的',right:'愿望'},
  {left:'繁荣的',right:'经济'},
  {left:'自愿',right:'报名'},
  {left:'虚心',right:'请教'},
  {left:'课程',right:'改革'},
  {left:'车厢',right:'拥挤'},
  {left:'家常',right:'便饭'},
  {left:'单位',right:'面积'},
  {left:'商务',right:'大厦'},
  {left:'购物',right:'广场'},
  {left:'图',right:'省事'},
  {left:'解放',right:'城市'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'道路修通后，灾民饮水困难的问题得到了',blank:'缓解',post:'。',hint:'(giảm bớt)',ans:'缓解'},
  {pre:'以堵治堵——缓解交通有妙',blank:'招',post:'。',hint:'(chiêu)',ans:'招'},
  {pre:'三十年前这里还是小渔村，现在已经变成了一个',blank:'繁荣',post:'的城市。',hint:'(thịnh vượng)',ans:'繁荣'},
  {pre:'不同文化的差异在语言特别是词语上',blank:'体现',post:'得最突出。',hint:'(thể hiện)',ans:'体现'},
  {pre:'每当体育馆有比赛举行，周围的交通就会出现',blank:'拥挤',post:'情况。',hint:'(đông nghịt)',ans:'拥挤'},
  {pre:'堵车在大城市中已经成了',blank:'家常',post:'便饭。',hint:'(chuyện thường ngày)',ans:'家常'},
  {pre:'我们学校的图书馆',blank:'面积',post:'不大，但是书很多。',hint:'(diện tích)',ans:'面积'},
  {pre:'这条河有两百多米',blank:'宽',post:'。',hint:'(rộng)',ans:'宽'},
  {pre:'你的看法太',blank:'主观',post:'了，应该多听听别人的意见。',hint:'(chủ quan)',ans:'主观'},
  {pre:'这次活动',blank:'扩大',post:'了汉语在我们学校的影响。',hint:'(mở rộng)',ans:'扩大'},
  {pre:'这种病现在还无法',blank:'根治',post:'，只能靠药物缓解。',hint:'(chữa dứt)',ans:'根治'},
  {pre:'这道题你要是不会做，',blank:'不妨',post:'去问问老师。',hint:'(cứ thử)',ans:'不妨'},
  {pre:'为了赢得顾客，双方一定会在服务方面',blank:'展开',post:'竞争。',hint:'(triển khai)',ans:'展开'},
  {pre:'请把这篇文章的大意',blank:'归纳',post:'一下。',hint:'(tóm tắt)',ans:'归纳'},
  {pre:'一个好的领导能',blank:'虚心',post:'听取不同的意见。',hint:'(khiêm tốn)',ans:'虚心'},
  {pre:'手术有风险，小明父母',blank:'咨询',post:'了许多专家后，还是决定做。',hint:'(hỏi ý kiến)',ans:'咨询'},
  {pre:'我们学校的期中考试一般安排在十月',blank:'中旬',post:'。',hint:'(trung tuần)',ans:'中旬'},
  {pre:'虽然战争临近，但这里的日常生活，一切',blank:'照常',post:'。',hint:'(như thường)',ans:'照常'},
  {pre:'我爸爸每天下班后都去健身房',blank:'健身',post:'。',hint:'(tập thể dục)',ans:'健身'},
  {pre:'他为',blank:'图',post:'省事没上天桥，而是横穿马路。',hint:'(ham)',ans:'图'},
  {pre:'他踢足球的时候腿',blank:'受伤',post:'了，一个月不能上体育课。',hint:'(bị thương)',ans:'受伤'},
  {pre:'小李办事太马虎，你派他去可不太',blank:'保险',post:'。',hint:'(chắc ăn)',ans:'保险'},
  {pre:'车的问题已经处理好了，保险公司正在办理',blank:'赔偿',post:'手续。',hint:'(bồi thường)',ans:'赔偿'},
  {pre:'市',blank:'政府',post:'决定明年在这里新建一个公园。',hint:'(chính quyền)',ans:'政府'},
  {pre:'我向老师请了两天假，老师已经',blank:'批准',post:'了。',hint:'(phê duyệt)',ans:'批准'},
  {pre:'这几年，我们学校进行了课程',blank:'改革',post:'，选修课越来越多。',hint:'(cải cách)',ans:'改革'},
  {pre:'因为下大雨，今天下午的足球比赛',blank:'取消',post:'了。',hint:'(huỷ)',ans:'取消'},
  {pre:'司机开车经过学校门口时，一定要礼让',blank:'行人',post:'。',hint:'(người đi bộ)',ans:'行人'},
  {pre:'每天晚上，很多阿姨在',blank:'广场',post:'上跳舞。',hint:'(quảng trường)',ans:'广场'},
  {pre:'我姐姐大学学的是',blank:'商务',post:'汉语。',hint:'(thương mại)',ans:'商务'},
  {pre:'这座',blank:'大厦',post:'有六十多层，是我们城市最高的楼。',hint:'(cao ốc)',ans:'大厦'},
  {pre:'这次活动大家',blank:'自愿',post:'报名，不想参加的可以不参加。',hint:'(tự nguyện)',ans:'自愿'},
  {pre:'你的抽屉真乱，',blank:'难怪',post:'总是找不到东西。',hint:'(thảo nào)',ans:'难怪'},
  {pre:'',blank:'与其',post:'说是采访，不如说是向他学习。',hint:'(thay vì)',ans:'与其'},
  {pre:'这辆车很省油，一百公里只用五升',blank:'汽油',post:'。',hint:'(xăng)',ans:'汽油'},
  {pre:'调查发现，有60%的人',blank:'明确',post:'表示愿意选择公交出行。',hint:'(rõ ràng)',ans:'明确'},
  {pre:'全校同学都在',blank:'期待',post:'着这场比赛的胜利。',hint:'(mong đợi)',ans:'期待'},
  {pre:'最后一门考完了，我终于',blank:'解放',post:'了！',hint:'(giải phóng)',ans:'解放'},
  {pre:'这里我们不妨听听',blank:'佩·詹森',post:'的故事。',hint:'(Pay Jensen)',ans:'佩·詹森'},
  {pre:'詹森一到',blank:'欧洲环境保护署',post:'交通部工作，就接到了一个任务。',hint:'(Cơ quan Bảo vệ Môi trường châu Âu)',ans:'欧洲环境保护署'},
  {pre:'第二天早晨他还是',blank:'照常',post:'第一个来到单位。',hint:'(như thường lệ)',ans:'照常'},
  {pre:'听音乐可以',blank:'缓解',post:'考试前的紧张情绪。',hint:'(làm dịu)',ans:'缓解'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (照常 · 难怪 · 与其) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['虽然','下雨了','，','但是','比赛','还是','照常','举行','。'],ans:'虽然下雨了，但是比赛还是照常举行。',audio:'虽然下雨了，但是比赛还是照常举行。'},
  {words:['第二天','早晨','他','还是','照常','第一个','来到','单位','。'],ans:'第二天早晨他还是照常第一个来到单位。',audio:'第二天早晨他还是照常第一个来到单位。'},
  {words:['春节','期间','，','那家','超市','照常','营业','。'],ans:'春节期间，那家超市照常营业。',audio:'春节期间，那家超市照常营业。'},
  {words:['你的','抽屉','真乱','，','难怪','总是','找不到','东西','。'],ans:'你的抽屉真乱，难怪总是找不到东西。',audio:'你的抽屉真乱，难怪总是找不到东西。'},
  {words:['汽油','明天','要涨价了','，','难怪','加油站','有这么多车','。'],ans:'汽油明天要涨价了，难怪加油站有这么多车。',audio:'汽油明天要涨价了，难怪加油站有这么多车。'},
  {words:['这','也','难怪','，','他','每天','那么','忙','。'],ans:'这也难怪，他每天那么忙。',audio:'这也难怪，他每天那么忙。'},
  {words:['与其','在这儿','等车','，','不如','走','过去','。'],ans:'与其在这儿等车，不如走过去。',audio:'与其在这儿等车，不如走过去。'},
  {words:['与其','抱怨','别人','，','不如','改变','自己','。'],ans:'与其抱怨别人，不如改变自己。',audio:'与其抱怨别人，不如改变自己。'},
  {words:['与其','找个','不认真的','小时工','，','我','宁可','自己','打扫','。'],ans:'与其找个不认真的小时工，我宁可自己打扫。',audio:'与其找个不认真的小时工，我宁可自己打扫。'},
  {words:['请','把','这篇文章的','大意','归纳','一下','。'],ans:'请把这篇文章的大意归纳一下。',audio:'请把这篇文章的大意归纳一下。'},
  {words:['不公平竞争','使','这里','繁荣的','商业','遭到了','破坏','。'],ans:'不公平竞争使这里繁荣的商业遭到了破坏。',audio:'不公平竞争使这里繁荣的商业遭到了破坏。'},
  {words:['政府','批准了','他','提出的','改革措施','。'],ans:'政府批准了他提出的改革措施。',audio:'政府批准了他提出的改革措施。'},
  {words:['自愿','放弃','开私家车','的人','越来越多','。'],ans:'自愿放弃开私家车的人越来越多。',audio:'自愿放弃开私家车的人越来越多。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'用表格来说明问题是一种有条理的思考方法的____。',opts:['表现','体现','表示','表达'],ans:1,
   exp:'Phương pháp tư duy được thể hiện cụ thể qua … → 体现 (câu mẫu phần 词语辨析 của sách).'},
  {wrong:'人们一直认为，哭是胆小、软弱的____。',opts:['体现','表现','发现','出现'],ans:1,
   exp:'……是……的表现: 表现 làm danh từ chỉ biểu hiện hành vi. 体现 không có cách dùng này với người.'},
  {wrong:'丽丽是不会错过这个在大家面前____自己的机会的。',opts:['体现','表现','实现','发现'],ans:1,
   exp:'表现自己 = phô bày bản thân; 体现 không có nghĩa này.'},
  {wrong:'学校规定，旷课达到60节以上的学生____其考试的资格。',opts:['消失','取消','消除','取得'],ans:1,
   exp:'Nhà trường chủ động huỷ, có tân ngữ 资格 → 取消 (bài tập 2 của sách). 消失 không mang tân ngữ.'},
  {wrong:'汽油明天要涨价了，____加油站又有车在排队加油呢。',opts:['难道','难怪','难免','难过'],ans:1,
   exp:'Hiểu ra nguyên nhân nên không thấy lạ → 难怪 (bài tập 2 của sách). 难道 dùng cho câu hỏi tu từ.'},
  {wrong:'一个好的领导能____听取不同的意见。',opts:['谦虚','虚心','小心','用心'],ans:1,
   exp:'虚心 + 听取 / 请教 / 接受: thái độ sẵn lòng tiếp thu (bài tập 2 của sách).'},
  {wrong:'调查发现，有60%的人____表示愿意选择公交出行。',opts:['清楚','明确','明白','准确'],ans:1,
   exp:'明确表示 = bày tỏ rõ ràng, dứt khoát (bài tập 2 của sách). 清楚 tả âm thanh, hình ảnh, sự hiểu biết.'},
  {wrong:'____其堵在路上浪费时间和汽油，倒不如改乘公交出行。',opts:['与','以','所','尤'],ans:0,
   exp:'与其……倒不如……: thay vì … chẳng thà … (注释 3 của sách).'},
  {wrong:'与其说是采访，____说是向他学习。',opts:['而是','不如','还是','就是'],ans:1,
   exp:'与其说……，不如说…… — vế sau dùng 不如, không dùng 而是 / 还是.'},
  {wrong:'快过年了，那家超市春节____营业，你放心吧。',opts:['平常','照常','经常','通常'],ans:1,
   exp:'照常营业 = vẫn mở cửa như thường (注释 1 của sách). 经常 / 通常 chỉ tần suất.'},
  {wrong:'每当体育馆有比赛举行，周围的交通就会出现____情况。',opts:['拥挤','拥抱','拥有','热闹'],ans:0,
   exp:'交通拥挤 (bài tập 1 của sách). 热闹 là tính từ tốt (náo nhiệt), không hợp với giao thông tắc.'},
  {wrong:'为了赢得顾客，双方一定会在服务方面____竞争。',opts:['展开','打开','展示','开展'],ans:0,
   exp:'展开竞争 (bài tập 1 của sách). 开展 hay đi với 活动 / 工作; 展示 là trưng bày.'},
  {wrong:'考试前听听音乐，可以____紧张的情绪。',opts:['缓解','解决','解放','取消'],ans:0,
   exp:'缓解 + (紧张)情绪 (bảng 搭配 của sách). 解决 đi với 问题 / 困难.'},
  {wrong:'城市汽车数量迅速增长，最初被视为是经济____的体现。',opts:['繁荣','繁忙','热烈','富有'],ans:0,
   exp:'经济繁荣 = kinh tế phồn thịnh. 富有 dùng cho người / nước giàu có, không đi với 经济 theo cách này.'},
  {wrong:'但事实证明这只是我们美好的____愿望。',opts:['主要','主观','主动','主张'],ans:1,
   exp:'主观愿望 = mong muốn chủ quan (câu trong bài; bảng 搭配 của sách).'},
  {wrong:'这里我们____听听佩·詹森的故事。',opts:['不妨','不必','不然','不但'],ans:0,
   exp:'不妨 + VV = cứ thử làm (gợi ý nhẹ nhàng). 不必 = không cần.'},
  {wrong:'詹森的目标很明确，就是____能够解放城市。',opts:['等待','期待','对待','招待'],ans:1,
   exp:'期待 + mệnh đề = mong có thể …. 等待 là chờ đợi (một thời gian).'},
  {wrong:'城市本是为人而建，如今却被汽车____。',opts:['占有','拥有','具有','所有'],ans:0,
   exp:'被……占有 = bị chiếm giữ (câu trong bài). 拥有 / 具有 không dùng với 被.'},
  {wrong:'他为图省事没上天桥，而是____穿马路。',opts:['横','直','过','走'],ans:0,
   exp:'横穿马路 = băng ngang qua đường (câu trong bài).'},
  {wrong:'詹森一到交通部工作，就接到了研究如何解决城市____问题的任务。',opts:['拥堵','拥抱','拥有','拥护'],ans:0,
   exp:'城市拥堵问题 = vấn đề ùn tắc đô thị. 拥堵 = 拥挤 + 堵塞.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tuy trời mưa, nhưng trận đấu vẫn diễn ra như thường.',zh:'虽然下雨了，但是比赛还是照常举行。',py:'Suīrán xià yǔ le, dànshì bǐsài háishi zhàocháng jǔxíng.'},
  {vi:'Tết siêu thị ấy vẫn mở cửa như thường.',zh:'春节那家超市照常营业。',py:'Chūn Jié nà jiā chāoshì zhàocháng yíngyè.'},
  {vi:'Cậu ấy ngày nào cũng tập luyện, thảo nào chạy nhanh thế.',zh:'他每天都锻炼，难怪跑得这么快。',py:'Tā měi tiān dōu duànliàn, nánguài pǎo de zhème kuài.'},
  {vi:'Điều này cũng dễ hiểu thôi, cô ấy mới học tiếng Trung được ba tháng.',zh:'这也难怪，她学汉语才三个月。',py:'Zhè yě nánguài, tā xué Hànyǔ cái sān ge yuè.'},
  {vi:'Thay vì đợi xe ở đây, chẳng thà đi bộ qua đó.',zh:'与其在这儿等车，不如走过去。',py:'Yǔqí zài zhèr děng chē, bùrú zǒu guòqu.'},
  {vi:'Thà tôi tự làm còn hơn nhờ người khác.',zh:'与其麻烦别人，我宁可自己做。',py:'Yǔqí máfan biérén, wǒ nìngkě zìjǐ zuò.'},
  {vi:'Nghe nhạc có thể giảm bớt áp lực học tập.',zh:'听音乐可以缓解学习压力。',py:'Tīng yīnyuè kěyǐ huǎnjiě xuéxí yālì.'},
  {vi:'Trận đấu bị huỷ vì mưa to.',zh:'比赛因为下大雨被取消了。',py:'Bǐsài yīnwèi xià dà yǔ bèi qǔxiāo le.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Tắc đường ở các thành phố lớn đã thành chuyện cơm bữa.',zh:'堵车在大城市中已经成了家常便饭。',py:'Dǔchē zài dà chéngshì zhōng yǐjīng chéngle jiācháng biànfàn.'},
  {vi:'Nhưng thực tế chứng minh đây chỉ là mong muốn chủ quan tốt đẹp của chúng ta.',zh:'但事实证明这只是我们美好的主观愿望。',py:'Dàn shìshí zhèngmíng zhè zhǐ shì wǒmen měihǎo de zhǔguān yuànwàng.'},
  {vi:'Vậy làm thế nào để trị tận gốc ùn tắc giao thông?',zh:'那么，如何根治交通拥堵呢？',py:'Nàme, rúhé gēnzhì jiāotōng yōngdǔ ne?'},
  {vi:'Anh ấy khiêm tốn hỏi ý kiến các chuyên gia liên quan.',zh:'他虚心咨询了有关专家。',py:'Tā xūxīn zīxúnle yǒuguān zhuānjiā.'},
  {vi:'Để đỡ phiền, anh ta không lên cầu vượt mà băng ngang qua đường.',zh:'他为图省事没上天桥，而是横穿马路。',py:'Tā wèi tú shěngshì méi shàng tiānqiáo, ér shì héngchuān mǎlù.'},
  {vi:'Chính quyền đã phê duyệt các biện pháp cải cách anh ấy đề xuất.',zh:'政府批准了他提出的改革措施。',py:'Zhèngfǔ pīzhǔnle tā tíchū de gǎigé cuòshī.'},
  {vi:'Số người tự nguyện bỏ đi xe riêng ngày càng nhiều.',zh:'自愿放弃开私家车的人越来越多。',py:'Zìyuàn fàngqì kāi sījiāchē de rén yuè lái yuè duō.'},
  {vi:'Mục tiêu của anh ấy rất rõ ràng: mong có thể giải phóng thành phố.',zh:'他的目标很明确，就是期待能够解放城市。',py:'Tā de mùbiāo hěn míngquè, jiù shì qīdài nénggòu jiěfàng chéngshì.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 绿色出行，从我做起)
// ══════════════════════════════════════════
var writingData = {
  words:['拥挤','缓解','自愿','与其','期待'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với chủ đề "绿色出行，从我做起" (Đi lại xanh, bắt đầu từ chính tôi) — nói cách nhìn của em về việc giải quyết ùn tắc giao thông.',
  outline:[
    'Câu mở: thực trạng — xe ngày càng nhiều, đường đông nghịt, không khí ô nhiễm (dùng 越来越, 拥挤).',
    'Thân 1: quan điểm — muốn giảm tải giao thông thì mỗi người phải bắt đầu từ mình (dùng 缓解).',
    'Thân 2: cách làm — thay vì đi xe riêng, chẳng thà đi xe đạp / xe buýt; bạn bè đã tự nguyện làm (dùng 与其……不如……, 自愿).',
    'Kết: kêu gọi + mong ước về thành phố tương lai (dùng 只要……就……, 期待).'
  ],
  model:{
    zh:'城市里的汽车越来越多，道路非常拥挤。要缓解交通压力，每个人都应该从自己做起。与其坐私家车堵在路上，不如坐公交车上学。我们班很多同学已经自愿选择绿色出行了。只要大家一起努力，城市就会变得更美。我期待城市天更蓝、路更通。',
    py:'Chéngshì li de qìchē yuè lái yuè duō, dàolù fēicháng yōngjǐ. Yào huǎnjiě jiāotōng yālì, měi ge rén dōu yīnggāi cóng zìjǐ zuò qǐ. Yǔqí zuò sījiāchē dǔ zài lù shang, bùrú zuò gōngjiāochē shàngxué. Wǒmen bān hěn duō tóngxué yǐjīng zìyuàn xuǎnzé lǜsè chūxíng le. Zhǐyào dàjiā yìqǐ nǔlì, chéngshì jiù huì biàn de gèng měi. Wǒ qīdài chéngshì tiān gèng lán, lù gèng tōng.',
    vn:'Ô tô trong thành phố ngày càng nhiều, đường sá rất đông nghịt. Muốn giảm tải giao thông, mỗi người đều nên bắt đầu từ chính mình. Thay vì ngồi xe riêng tắc trên đường, chẳng thà đi xe buýt đến trường. Lớp tôi đã có nhiều bạn tự nguyện chọn cách đi lại xanh. Chỉ cần mọi người cùng cố gắng, thành phố sẽ đẹp hơn. Tôi mong thành phố trời xanh hơn, đường thông thoáng hơn.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '拥挤 có dùng như tính từ (道路很拥挤 / 拥挤的公交车) không — không đặt trực tiếp trước danh từ mà thiếu 的?',
    'Câu có 与其 đã có 不如 / 宁可 ở vế sau chưa? Vế sau 与其 có phải là lựa chọn bị BỎ không?',
    '缓解 có đi với 压力 / 交通 / 拥堵 (không viết ✗ 缓解问题)? Câu có 只要 đã có 就 chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，以“绿色出行，从我做起”为题，谈谈你对治理交通拥堵的看法。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'拥挤', loai:'tính từ', cach:'道路 / 交通 / 车厢 + (很 / 非常) + 拥挤 · 拥挤的 + N · 变得更加拥挤',
     sai:[{re:'拥挤(公交车|地铁|马路|道路|车厢|城市|人群)', sua:'拥挤的公交车 / 公交车很拥挤', giai:'拥挤 là tính từ hai âm tiết, đứng trước danh từ phải có 的: 拥挤的公交车.'},
          {re:'拥挤(着|过)', sua:'很拥挤', giai:'拥挤 (tính từ) không thêm 着 / 过.', nhe:true}]},
    {tu:'缓解', loai:'động từ', cach:'缓解 + 压力 / 交通 / 拥堵 / 紧张情绪 · 得到缓解 · 大为缓解',
     sai:[{re:'缓解(了)?(这个|这些)?(问题|困难)', sua:'解决问题 / 缓解压力', giai:'缓解 chỉ làm DỊU BỚT (压力, 拥堵, 疼痛); với 问题 / 困难 dùng 解决.'}]},
    {tu:'自愿', loai:'tính từ', cach:'自愿(地) + 参加 / 选择 / 放弃 · 是……自愿的',
     sai:[{re:'(被|让)[^，。]{0,4}自愿', sua:'自愿参加 / 是自愿的', giai:'自愿 = tự mình muốn; không đi với 被 / 让 (bị ép thì không phải tự nguyện).'},
          {re:'自愿者', sua:'志愿者', giai:'"Tình nguyện viên" là 志愿者, không phải 自愿者.', nhe:true}]},
    {tu:'与其', loai:'liên từ', cach:'与其 + A (bỏ)，(倒)不如 / 宁可 + B (chọn)',
     sai:[{re:'与其[^。！？]*，(还是|而是|但是|就)', sua:'与其……，不如……', giai:'Vế sau của 与其 phải dùng 不如 / 倒不如 / 宁可, không dùng 还是 / 而是 / 但是.'},
          {re:'与其[^。！？，]*。', sua:'与其……，不如……', giai:'Câu có 与其 phải có vế thứ hai (不如 ……).', nhe:true}]},
    {tu:'期待', loai:'động từ', cach:'期待(着) + N / mệnh đề · 充满期待 · 父母的期待',
     sai:[{re:'期待(于|给)', sua:'期待 + tân ngữ', giai:'期待 mang tân ngữ trực tiếp, không thêm 于 / 给.'},
          {re:'(很|非常)期待着', sua:'很期待 / 期待着', giai:'Có phó từ mức độ (很, 非常) thì bỏ 着: 很期待.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'与其……，不如……', nhan:'与其', vd:'与其堵在路上浪费时间，不如坐地铁上学。', khi:'So sánh hai lựa chọn, nêu giải pháp — thân đoạn.'},
    {ten:'……，难怪……', nhan:'难怪', vd:'路上的车越来越多，难怪每天都堵车。', khi:'Giải thích nguyên nhân của thực trạng — câu mở.'},
    {ten:'……照常……', nhan:'照常', vd:'下大雨的时候，他照常骑车上学。', khi:'Kể một tấm gương kiên trì — thân đoạn.'},
    {ten:'越来越 + Adj', nhan:'越来越', vd:'城市里的汽车越来越多，道路越来越拥挤。', khi:'Mô tả xu hướng — câu mở.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要每个人都少开一天车，交通就会好很多。', khi:'Điều kiện đủ — kêu gọi ở phần kết.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然坐公交车没有开车方便，但是能缓解交通压力。', khi:'Thừa nhận bất tiện rồi nêu lợi ích.'},
    {ten:'不仅……，也……', nhan:'不仅', vd:'绿色出行不仅能锻炼身体，也能保护环境。', khi:'Nêu hai lợi ích cùng lúc — phần kết.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['归纳一下','请把','这篇文章的','大意'],
     dap:'请把这篇文章的大意归纳一下。',
     vn:'Hãy tóm tắt ý chính của bài văn này.',
     giai:'Câu 29 sách bài tập. Câu 把 cầu khiến: 请 + 把 + tân ngữ (这篇文章的大意) + 归纳一下.'},
    {manh:['照常','第二天早晨','第一个来到单位','他还是'],
     dap:'第二天早晨他还是照常第一个来到单位。',
     chap:['他第二天早晨还是照常第一个来到单位。'],
     vn:'Sáng hôm sau anh ấy vẫn như thường lệ là người đầu tiên đến cơ quan.',
     giai:'Câu 30 sách bài tập. Thời gian → chủ ngữ → 还是 + 照常 (trạng ngữ) → 第一个来到单位.'},
    {manh:['遭到了破坏','不公平竞争','繁荣的商业','使这里'],
     dap:'不公平竞争使这里繁荣的商业遭到了破坏。',
     vn:'Cạnh tranh không lành mạnh đã khiến nền thương mại phồn thịnh ở đây bị phá hoại.',
     giai:'Câu 31 sách bài tập. Câu kiêm ngữ với 使: A + 使 + B + V: 不公平竞争 + 使 + 这里繁荣的商业 + 遭到了破坏.'},
    {manh:['不如','与其','改乘公交','堵在路上'],
     dap:'与其堵在路上，不如改乘公交。',
     vn:'Thay vì tắc trên đường, chẳng thà chuyển sang đi xe buýt.',
     giai:'与其 + vế bị bỏ (堵在路上)，不如 + vế được chọn (改乘公交).'},
    {manh:['总是找不到东西','你的抽屉真乱','难怪'],
     dap:'你的抽屉真乱，难怪总是找不到东西。',
     vn:'Ngăn kéo của cậu bừa bộn thật, thảo nào lúc nào cũng không tìm được đồ.',
     giai:'Nguyên nhân đứng trước, 难怪 dẫn ra kết quả không còn thấy lạ.'},
    {manh:['批准了','政府','改革措施','他提出的'],
     dap:'政府批准了他提出的改革措施。',
     vn:'Chính quyền đã phê duyệt các biện pháp cải cách anh ấy đề xuất.',
     giai:'Câu của bài khoá: chủ ngữ 政府 → 批准了 → định ngữ 他提出的 + 改革措施.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 出行方式
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (出行方式 · 交通拥堵). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 拥挤 · 缓解 · 根治 · 与其 · 难怪 · 照常 · 自愿 · 取消 · 改革 · 期待.',
  questions:[
    {q_zh:'你们国家道路交通情况怎么样？',
     q_vn:'Tình hình giao thông đường bộ ở nước em thế nào?',
     hint:'Tả thực trạng + giải thích nguyên nhân, dùng 越来越 và 难怪',
     sample:'越南的大城市里摩托车特别多，一到上下班时间，马路上就非常拥挤。现在汽车也越来越多，难怪堵车成了家常便饭。',
     sample_vn:'Ở các thành phố lớn của Việt Nam xe máy cực kỳ nhiều, hễ đến giờ đi làm tan làm là đường sá rất đông nghịt. Bây giờ ô tô cũng ngày càng nhiều, thảo nào tắc đường thành chuyện cơm bữa.',
     note:'Dùng 一……就…… cho quy luật "hễ … là …"; 家常便饭 cho "chuyện cơm bữa".'},
    {q_zh:'你平时出行一般采用何种方式？你家有私家车吗？使用情况如何？',
     q_vn:'Bình thường em đi lại bằng cách nào? Nhà em có xe riêng không? Dùng thế nào?',
     hint:'Nói phương tiện của em + của gia đình, dùng 照常 hoặc 虽然……但是……',
     sample:'我平时骑自行车上学，下雨天也照常骑车。我家有一辆汽车，虽然很方便，但是爸爸只在周末用，平时他坐公交车上班。',
     sample_vn:'Bình thường em đi xe đạp đến trường, ngày mưa cũng vẫn đạp xe như thường. Nhà em có một chiếc ô tô, tuy rất tiện nhưng bố chỉ dùng vào cuối tuần, ngày thường bố đi xe buýt đi làm.',
     note:'照常 + V: vẫn làm như thường lệ dù có hoàn cảnh đặc biệt.'},
    {q_zh:'你认为造成交通拥堵现象的主要原因是什么？应该如何解决？',
     q_vn:'Em cho rằng nguyên nhân chính gây ra ùn tắc giao thông là gì? Nên giải quyết thế nào?',
     hint:'1 nguyên nhân + 1–2 giải pháp, dùng 与其……不如…… và 缓解 / 根治',
     sample:'我觉得主要原因是私家车太多。只加宽道路是不能根治拥堵的。与其修更多的路，不如大力发展公共交通，这样才能真正缓解交通压力。',
     sample_vn:'Em thấy nguyên nhân chính là xe riêng quá nhiều. Chỉ mở rộng đường thì không trị tận gốc được ùn tắc. Thay vì làm thêm nhiều đường, chẳng thà ra sức phát triển giao thông công cộng, như vậy mới thật sự giảm tải được giao thông.',
     note:'根治 (trị tận gốc) mạnh hơn 缓解 (giảm bớt) — dùng cả hai để thể hiện ý sâu.'},
    {q_zh:'你觉得“以堵治堵”的办法适合你们的城市吗？为什么？',
     q_vn:'Em thấy cách "dùng tắc trị tắc" có hợp với thành phố của em không? Vì sao?',
     hint:'Nêu ý kiến rõ ràng, dùng 明确 / 不妨 / 期待',
     sample:'我觉得有些办法我们不妨试一试，比如在市中心取消一些停车场。但是得先让公交车更方便，不然市民会抱怨。我期待我们的城市越来越适合人们生活。',
     sample_vn:'Em thấy có một số cách mình cứ thử xem, ví dụ bỏ bớt một số bãi đỗ xe ở trung tâm. Nhưng trước hết phải làm xe buýt tiện hơn, nếu không người dân sẽ phàn nàn. Em mong thành phố của chúng ta ngày càng đáng sống.',
     note:'不妨 + VV: gợi ý nhẹ nhàng, rất hợp khi đưa ý kiến.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 33.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第33课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'我们得快一点儿了，要不然赶不上2号线的末班车了。'},
            {sp:'男',zh:'别着急，拐过前边的路口就到地铁进站口了。'}],
     q:'女的为什么着急？',qvn:'Vì sao người phụ nữ sốt ruột?',
     opts:['找不到地铁站','男的走得太慢','怕赶不上末班车','2号线停运了'],ans:2,
     why:'要不然赶不上2号线的末班车了 = nếu không sẽ không kịp chuyến tàu cuối tuyến số 2.',
     words:[]},

    {n:2,
     lines:[{sp:'男',zh:'我觉得他们配合得还不太熟练，歌词记得也不过关。'},
            {sp:'女',zh:'他们这一组是上个月刚组成的，时间比较短。'}],
     q:'男的认为他们怎么样？',qvn:'Người đàn ông cho rằng họ thế nào?',
     opts:['配合得不太熟练','唱得非常好','组成的时间很长','歌词写得不好'],ans:0,
     why:'配合得还不太熟练 = phối hợp còn chưa thành thạo lắm; 歌词记得不过关 là nhớ lời chưa đạt, không phải lời viết dở.',
     words:[]},

    {n:3,
     lines:[{sp:'女',zh:'先生，对不起！飞机马上就要降落了，现在卫生间暂停使用了。'},
            {sp:'男',zh:'好吧，谢谢。'}],
     q:'女的提醒男的什么事？',qvn:'Người phụ nữ nhắc người đàn ông việc gì?',
     opts:['飞机晚点了','卫生间暂停使用','要系好安全带','飞机已经降落了'],ans:1,
     why:'卫生间暂停使用了 = nhà vệ sinh tạm ngừng sử dụng. Máy bay "sắp" (马上就要) hạ cánh chứ chưa hạ cánh.',
     words:[]},

    {n:4,
     lines:[{sp:'女',zh:'师傅，我好像记错路了，刚才那个路口应该向左拐。'},
            {sp:'男',zh:'好的，我到下一个路口再调头回来。'}],
     q:'男的接下来打算做什么？',qvn:'Người đàn ông tiếp theo định làm gì?',
     opts:['马上向左拐','到下一个路口调头','停车问路','继续往前开'],ans:1,
     why:'我到下一个路口再调头回来 = đến ngã tư tiếp theo tôi sẽ quay đầu lại.',
     words:[]},

    {n:5,
     lines:[{sp:'男',zh:'你好，请问南航在哪儿办理登机牌？'},
            {sp:'女',zh:'您走过了，南航的服务台在H区，您往回走。'}],
     q:'说话人现在最可能在哪儿？',qvn:'Người nói bây giờ nhiều khả năng đang ở đâu?',
     opts:['火车站','地铁站','机场','酒店'],ans:2,
     why:'南航 (China Southern Airlines), 登机牌 (thẻ lên máy bay) → đang ở sân bay.',
     words:[]},

    {n:6,
     lines:[{sp:'女',zh:'糟糕，行李箱的钥匙怎么没了？我记得就放口袋里了呀。'},
            {sp:'男',zh:'别着急，好好想想，你一般不是都放在随身的小背包里吗？'}],
     q:'女的怎么了？',qvn:'Người phụ nữ bị làm sao?',
     opts:['行李箱丢了','背包丢了','找不到行李箱的钥匙','口袋破了'],ans:2,
     why:'行李箱的钥匙怎么没了 = chìa khoá vali đâu mất rồi → không tìm thấy chìa khoá.',
     words:[]},

    {n:7,
     lines:[{sp:'女',zh:'你跟卖电视的售货员咨询了吗？'},
            {sp:'男',zh:'问过了，不过现在的新技术、新名词我也听不太懂。'},
            {sp:'女',zh:'那你打算怎么办？'},
            {sp:'男',zh:'依我看，功能越简单越好，没必要赶时髦。'}],
     q:'关于买电视，男的想怎么办？',qvn:'Về chuyện mua tivi, người đàn ông định thế nào?',
     opts:['买功能简单的','买最新技术的','再去咨询售货员','先不买了'],ans:0,
     why:'功能越简单越好，没必要赶时髦 = chức năng càng đơn giản càng tốt, không cần chạy theo mốt.',
     words:['咨询']},

    {n:8,
     lines:[{sp:'男',zh:'你坐地铁到丰联广场，在十字路口西北角有个蓝天商务大厦。'},
            {sp:'女',zh:'然后呢？'},
            {sp:'男',zh:'你从行人的地下通道过来，大厦楼下有个咖啡馆，我在那儿等你。'},
            {sp:'女',zh:'好，我马上过来。'}],
     q:'女的接下来应该做什么？',qvn:'Người phụ nữ tiếp theo nên làm gì?',
     opts:['坐地铁去丰联广场','去咖啡馆买咖啡','在大厦楼下等男的','去十字路口找男的'],ans:0,
     why:'Bước đầu tiên trong lời chỉ đường: 你坐地铁到丰联广场 — đi tàu điện ngầm đến quảng trường Phong Liên.',
     words:['广场','商务','大厦','行人']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn em hỏi: mai có bão nhỏ, trường có cho nghỉ học không.',
     a:{sp:'Bạn',zh:'明天有台风，学校还上课吗？',vn:'Mai có bão, trường còn học không?'},
     need:['Dùng 照常','Trả lời rằng trường vẫn học bình thường'],
     sample:'老师说台风不大，明天照常上课，大家别迟到。',
     samplePy:'Lǎoshī shuō táifēng bú dà, míngtiān zhàocháng shàngkè, dàjiā bié chídào.',
     sampleVn:'Cô bảo bão không lớn, mai vẫn học như thường, mọi người đừng đến muộn.',
     tip:'照常 + 上课 / 营业 / 举行 — mẫu 练一练 của sách.'},

    {scene:'Bạn cùng lớp kể: bạn Lan học tiếng Trung từ năm 6 tuổi.',
     a:{sp:'Bạn',zh:'你知道吗？兰从六岁就开始学汉语了。',vn:'Cậu biết không? Lan học tiếng Trung từ năm 6 tuổi rồi.'},
     need:['Dùng 难怪','Nói ra điều em đã thấy lạ trước đó'],
     sample:'难怪她的发音那么标准，原来学了这么多年了！',
     samplePy:'Nánguài tā de fāyīn nàme biāozhǔn, yuánlái xuéle zhème duō nián le!',
     sampleVn:'Thảo nào phát âm của cậu ấy chuẩn thế, hoá ra học lâu vậy rồi!',
     tip:'难怪 + kết quả; hay đi với 原来 (hoá ra).'},

    {scene:'Đang giờ cao điểm, bạn rủ em gọi taxi đi xem phim.',
     a:{sp:'Bạn',zh:'咱们打车去电影院吧？',vn:'Mình gọi taxi đến rạp nhé?'},
     need:['Dùng 与其……不如……','Đề xuất đi tàu điện ngầm / xe buýt'],
     sample:'现在是晚高峰，与其打车堵在路上，不如坐地铁，又快又便宜。',
     samplePy:'Xiànzài shì wǎn gāofēng, yǔqí dǎchē dǔ zài lù shang, bùrú zuò dìtiě, yòu kuài yòu piányi.',
     sampleVn:'Bây giờ đang giờ cao điểm tối, thay vì đi taxi tắc trên đường, chẳng thà đi tàu điện ngầm, vừa nhanh vừa rẻ.',
     tip:'与其 đặt ở lựa chọn BỊ BỎ, 不如 ở lựa chọn được chọn.'},

    {scene:'Em trai than thở học bài mãi mà vẫn quên.',
     a:{sp:'Em trai',zh:'这些生词我背了好几遍，还是记不住。',vn:'Mấy từ mới này em học thuộc mấy lượt rồi mà vẫn không nhớ.'},
     need:['Dùng 不妨','Gợi ý một cách học mới'],
     sample:'你不妨把生词写在小卡片上，每天坐车的时候看一看。',
     samplePy:'Nǐ bùfáng bǎ shēngcí xiě zài xiǎo kǎpiàn shang, měi tiān zuò chē de shíhou kàn yi kàn.',
     sampleVn:'Em cứ thử viết từ mới lên thẻ nhỏ, mỗi ngày lúc ngồi xe thì xem một chút.',
     tip:'不妨 + V: gợi ý nhẹ nhàng; ôn câu 把.'},

    {scene:'Bạn em lo lắng vì trước kỳ thi rất căng thẳng.',
     a:{sp:'Bạn',zh:'下周就考试了，我紧张得睡不着觉。',vn:'Tuần sau thi rồi, tớ căng thẳng đến mất ngủ.'},
     need:['Dùng 缓解','Khuyên bạn một cách thư giãn'],
     sample:'睡前听听音乐或者去跑跑步，都能缓解紧张的情绪。',
     samplePy:'Shuì qián tīngting yīnyuè huòzhě qù pǎopao bù, dōu néng huǎnjiě jǐnzhāng de qíngxù.',
     sampleVn:'Trước khi ngủ nghe nhạc hoặc đi chạy bộ một chút, đều giúp giảm bớt căng thẳng.',
     tip:'缓解 + 紧张情绪 / 压力 (bảng 搭配 của sách).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Thông báo của siêu thị dán ở cửa trước Tết.',
     a:'春节期间本超市照常营业，欢迎广大顾客光临。',b:'过年我们也开门，来买东西吧！',better:'a',
     why:'Thông báo của cửa hàng dùng văn viết trang trọng: 本超市, 照常营业, 欢迎……光临. Câu b như nói miệng với bạn.'},

    {scene:'Em nhắn tin cho bạn thân rủ đi xe buýt thay vì gọi xe.',
     a:'别打车了，坐公交吧，又便宜又不堵！',b:'为缓解交通压力，建议您选择公共交通出行。',better:'a',
     why:'Nhắn bạn thân cần tự nhiên, thân mật. Câu b là giọng khẩu hiệu tuyên truyền của thành phố.'},

    {scene:'Biển báo của sở giao thông đặt ở ngã tư.',
     a:'过马路的时候小心点儿啊！',b:'行人请走地下通道，请勿横穿马路。',better:'b',
     why:'Biển báo công cộng dùng văn viết ngắn gọn, trang trọng: 行人请……, 请勿……. Câu a như lời mẹ dặn con.'},

    {scene:'Em hỏi nhân viên quầy tư vấn ở sân bay.',
     a:'喂，南航在哪儿？',b:'您好，请问南航在哪儿办理登机牌？',better:'b',
     why:'Hỏi nhân viên phục vụ cần lịch sự: 您好, 请问 (bài nghe số 5). Câu a (喂) cộc lốc, thiếu lịch sự.'},

    {scene:'Bài báo phân tích tình hình giao thông đô thị.',
     a:'堵车堵得烦死了，谁都受不了！',b:'随着车流量的增加，道路变得格外拥挤，堵车已经成了家常便饭。',better:'b',
     why:'Văn báo chí dùng lối viết khách quan: 随着……, 格外, 成了家常便饭 (câu trong bài). Câu a là cảm xúc cá nhân, khẩu ngữ.'},

    {scene:'Bạn được cô giáo khen, em muốn trêu bạn một chút.',
     a:'老师夸你呢，你就别谦虚了！',b:'你应当虚心接受老师的肯定。',better:'a',
     why:'Trêu bạn nói thân mật: 你就别谦虚了! Câu b cứng nhắc như lời phát biểu.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 136)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Sách chia 3 phần: 城市交通的问题 → 启发詹森的一件事 → 詹森的妙招及其效果. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'城市交通的问题', cue:'汽车数量迅速增长……道路变得格外拥挤，堵车成了……', words:['繁荣','体现','拥挤','家常']},
    {step:'加宽道路没有用', cue:'新建或加宽道路……但道路扩建的速度远远跟不上……', words:['面积','宽','主观','扩大']},
    {step:'詹森接到任务', cue:'如何根治交通拥堵？詹森一到……就……，于是他展开调查……', words:['根治','不妨','佩·詹森','欧洲环境保护署','展开','归纳','虚心','咨询']},
    {step:'启发詹森的一件事', cue:'九月中旬的一天，詹森照常……一个健身的人为图省事……', words:['中旬','照常','健身','图','受伤','保险','赔偿']},
    {step:'詹森的妙招', cue:'让城市先堵起来，以堵治堵：政府批准了……增设红绿灯，取消……', words:['招','政府','批准','改革','取消','行人','广场','商务','大厦']},
    {step:'妙招的效果', cue:'半年过去了……自愿放弃开私家车的人越来越多。这也难怪，与其……', words:['自愿','难怪','与其','汽油','缓解']},
    {step:'詹森的目标', cue:'城市本是为人而建……詹森的目标很明确……', words:['明确','期待','解放']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: vấn đề giao thông → chuyện gợi ý cho Jensen → tuyệt chiêu và hiệu quả?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có giải thích được vì sao mở rộng đường KHÔNG giải quyết được ùn tắc không?',
    'Có dùng được cấu trúc 与其……不如…… khi kể phần hiệu quả không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 135–136) — trò "Bài tập SGK" ở bước Luyện tập
// (Bài 3 画线连接 và bài 4 复述 không thuộc 3 dạng này — bài 3 đưa vào matchData, bài 4 vào retellData.
//  Sách bài này không có dạng 给括号里的词选择适当的位置.)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['保险','缓解','赔偿','拥挤','咨询','展开'],
   cau:[
     {s:'每当体育馆有比赛举行，周围的交通就会出现＿＿情况。', dap:['拥挤']},
     {s:'手术有风险，小明父母＿＿了许多专家后，还是决定做。', dap:['咨询']},
     {s:'为了赢得顾客，双方一定会在服务方面＿＿竞争。', dap:['展开']},
     {s:'小李办事太马虎，你派他去可不太＿＿。', dap:['保险']},
     {s:'车的问题已经处理好了，保险公司正在办理＿＿手续。', dap:['赔偿']},
     {s:'道路修通后，灾民饮水困难的问题得到了＿＿。', dap:['缓解']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'学校规定，旷课达到60节以上的学生＿＿其考试的资格。', opts:['取消','消失'], ans:0, giai:'Có tân ngữ (其考试的资格) và do nhà trường chủ động quyết định → 取消 (huỷ bỏ). 消失 (biến mất) là sự vật tự không còn, không mang tân ngữ.'},
     {s:'汽油明天要涨价了，＿＿加油站又有车在排队加油呢。', opts:['难怪','难道'], ans:0, giai:'Vế trước nêu nguyên nhân (xăng sắp tăng giá), vế sau là hiện tượng không còn thấy lạ → 难怪 (thảo nào). 难道 dùng trong câu hỏi tu từ (难道……吗？), ở đây câu kết thúc bằng 呢 kể sự việc.'},
     {s:'一个好的领导能＿＿听取不同的意见。', opts:['谦虚','虚心'], ans:1, giai:'Làm trạng ngữ trước động từ tiếp thu (听取意见) → 虚心: sẵn lòng lắng nghe. 谦虚 nhấn mạnh thái độ khiêm nhường khi nói về mình (被夸时很谦虚).'},
     {s:'调查发现，有60%的人＿＿表示愿意选择公交出行。', opts:['明确','清楚'], ans:0, giai:'明确表示 = bày tỏ rõ ràng, dứt khoát (thái độ, ý kiến). 清楚 tả sự rõ ràng khi nhìn, nghe, hiểu (看清楚, 说清楚), không đi với 表示 theo cách này.'}
   ]}
];
