// ══════════════════════════════════════════
// DATA — HSK3 Bài 7: 我跟她都认识五年了 (Tôi và cô ấy quen nhau được năm năm rồi)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'同事',py:'tóngshì',pos:'Danh từ',vn:'đồng nghiệp',em:'👔',lesson:1,
   explain:['Người cùng làm việc trong một cơ quan, công ty.'],
   usage:'Danh từ; làm định ngữ với 的 hoặc trực tiếp trước danh từ khác: 新同事.',
   collo:['新同事','老同事','我的同事'],
   ex_zh:'那个漂亮的新同事是谁？',ex_py:'Nàge piàoliang de xīn tóngshì shì shéi?',ex_vn:'Đồng nghiệp mới xinh đẹp kia là ai vậy?',
   exList:[
     {zh:'那个漂亮的新同事是谁？',py:'Nàge piàoliang de xīn tóngshì shì shéi?',vn:'Đồng nghiệp mới xinh đẹp kia là ai vậy?'},
     {zh:'你今天的工作我还没做完，你来帮帮我好吗？',py:'Jīntiān de gōngzuò wǒ hái méi zuòwán, nǐ lái bāngbang wǒ hǎo ma?',vn:'Công việc hôm nay tôi vẫn chưa làm xong, bạn qua giúp tôi được không?'},
     {zh:'她是我们公司新来的同事。',py:'Tā shì wǒmen gōngsī xīn lái de tóngshì.',vn:'Cô ấy là đồng nghiệp mới đến công ty chúng tôi.'},
   ],
   hanzi:[
     {c:'事',p:'shì',type:'独体字 · Chữ đơn',st:8,ord:'nét liền',rad:'亅 (quyết)',mean:'việc, sự việc',
      tip:'Chữ tượng hình mô phỏng tay cầm dụng cụ làm việc → nghĩa CÔNG VIỆC, SỰ VIỆC; 同(cùng)+事(việc) = người cùng làm việc.',
      cf:'吏 (lì – "quan lại", gần giống phần trên")',w:'同事 / 事情 / 没事'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy làm việc ở công ty này ba năm rồi.',answer:'她在这家公司工作三年了。',answerPy:'Tā zài zhè jiā gōngsī gōngzuò sān nián le.',
      note:'Sub+V+了+thời lượng diễn tả khoảng thời gian hành động kéo dài (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Vì cô ấy vừa đến công ty nên mọi người chưa quen cô ấy.',answer:'因为她刚来公司，所以大家还不认识她。',answerPy:'Yīnwèi tā gāng lái gōngsī, suǒyǐ dàjiā hái bú rènshi tā.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:2,zh:'以前',py:'yǐqián',pos:'Danh từ',vn:'trước đây, trước kia',em:'⏳',lesson:1,
   explain:['Khoảng thời gian đã qua so với hiện tại.'],
   usage:'Danh từ, thường đứng đầu câu hoặc trước động từ: 以前 + [câu].',
   collo:['以前工作','以前在哪儿','以前没有'],
   ex_zh:'以前她在哪儿工作？',ex_py:'Yǐqián tā zài nǎr gōngzuò?',ex_vn:'Trước đây cô ấy làm việc ở đâu?',
   exList:[
     {zh:'以前她在哪儿工作？',py:'Yǐqián tā zài nǎr gōngzuò?',vn:'Trước đây cô ấy làm việc ở đâu?'},
     {zh:'我以前在学校工作，现在在银行工作。',py:'Wǒ yǐqián zài xuéxiào gōngzuò, xiànzài zài yínháng gōngzuò.',vn:'Trước đây tôi làm việc ở trường học, bây giờ làm ở ngân hàng.'},
     {zh:'你为什么不在书店工作了？那不是我以前喜欢的。',py:'Nǐ wèishénme bú zài shūdiàn gōngzuò le? Nà bú shì wǒ yǐqián xǐhuan de.',vn:'Sao bạn không làm ở hiệu sách nữa? Đó không phải điều tôi từng thích.'},
   ],
   hanzi:[
     {c:'前',p:'qián',type:'上下结构 · Trên-dưới',st:9,ord:'⺈+月 trên → 刂 dưới',rad:'刂 (đao)',mean:'trước, phía trước',
      tip:'Chữ mô phỏng chiếc thuyền đi VỀ PHÍA TRƯỚC → mở rộng nghĩa THỜI GIAN TRƯỚC (以前 = khoảng trước đây).',
      cf:'剪 (jiǎn – "cắt", có 刀 trên thay vì 月")',w:'以前 / 前边 / 前年'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước đây tôi thích chơi thể thao, bây giờ thích nghe nhạc hơn.',answer:'我以前喜欢运动，现在更喜欢听音乐。',answerPy:'Wǒ yǐqián xǐhuan yùndòng, xiànzài gèng xǐhuan tīng yīnyuè.',
      note:'以前……现在…… diễn tả sự đối lập giữa quá khứ và hiện tại.'},
     {promptLang:'vi',prompt:'Tuy trước đây tôi không thích âm nhạc nhưng bây giờ lại rất thích.',answer:'虽然我以前不喜欢音乐，但是现在很喜欢。',answerPy:'Suīrán wǒ yǐqián bù xǐhuan yīnyuè, dànshì xiànzài hěn xǐhuan.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:3,zh:'银行',py:'yínháng',pos:'Danh từ',vn:'ngân hàng',em:'🏦',lesson:1,
   explain:['Tổ chức tài chính nhận gửi tiền, cho vay và các dịch vụ liên quan.'],
   usage:'Danh từ; đi cùng động từ 在/去: 在银行工作, 去银行.',
   collo:['在银行工作','去银行','银行经理'],
   ex_zh:'她在银行工作了两年以后来的我们公司。',ex_py:'Tā zài yínháng gōngzuòle liǎng nián yǐhòu lái de wǒmen gōngsī.',ex_vn:'Cô ấy làm việc ở ngân hàng hai năm rồi mới đến công ty chúng tôi.',
   exList:[
     {zh:'她在银行工作了两年以后来的我们公司。',py:'Tā zài yínháng gōngzuòle liǎng nián yǐhòu lái de wǒmen gōngsī.',vn:'Cô ấy làm việc ở ngân hàng hai năm rồi mới đến công ty chúng tôi.'},
     {zh:'欢迎你来我们银行。',py:'Huānyíng nǐ lái wǒmen yínháng.',vn:'Hoan nghênh bạn đến ngân hàng chúng tôi.'},
     {zh:'我是2010年开始工作的，在银行工作了两年以后，来到了这家公司。',py:'Wǒ shì èr líng yī líng nián kāishǐ gōngzuò de, zài yínháng gōngzuòle liǎng nián yǐhòu, láidàole zhè jiā gōngsī.',vn:'Tôi bắt đầu làm việc từ năm 2010, làm ở ngân hàng hai năm rồi mới đến công ty này.'},
   ],
   hanzi:[
     {c:'银',p:'yín',type:'左右结构 · Trái-phải',st:11,ord:'钅 trái → 艮 phải',rad:'钅 (kim – kim loại)',mean:'bạc',
      tip:'钅(kim loại) + 艮(cứng, bền) → kim loại quý bền chắc = BẠC; 银行 vốn nghĩa "cửa hàng đổi bạc" thời cổ.',
      cf:'很 (hěn – "rất", có 彳 thay vì 钅")',w:'银行 / 银色'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu bạn cần đổi tiền thì đi ngân hàng đi.',answer:'如果你需要换钱，就去银行吧。',answerPy:'Rúguǒ nǐ xūyào huàn qián, jiù qù yínháng ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
     {promptLang:'vi',prompt:'Đồng nghiệp mới của tôi trước đây làm việc ở ngân hàng.',answer:'我的新同事以前在银行工作。',answerPy:'Wǒ de xīn tóngshì yǐqián zài yínháng gōngzuò.',
      note:'以前 diễn tả thời điểm trong quá khứ (ôn lại 同事/以前 vừa học trong bài này).'},
   ]},

  {n:4,zh:'久',py:'jiǔ',pos:'Tính từ',vn:'lâu, lâu dài',em:'⏱️',lesson:2,
   explain:['Khoảng thời gian dài.'],
   usage:'Tính từ, thường dùng trong câu hỏi 多久 (bao lâu) hoặc 很久 (rất lâu).',
   collo:['多久','很久','等了很久'],
   ex_zh:'你们唱了多久？',ex_py:'Nǐmen chàngle duō jiǔ?',ex_vn:'Các bạn hát bao lâu?',
   exList:[
     {zh:'你们唱了多久？',py:'Nǐmen chàngle duō jiǔ?',vn:'Các bạn hát bao lâu?'},
     {zh:'男的看了多长时间电影？很久。',py:'Nánde kànle duō cháng shíjiān diànyǐng? Hěn jiǔ.',vn:'Người nam xem phim bao lâu? Rất lâu.'},
     {zh:'我在这儿等了很久了。',py:'Wǒ zài zhèr děngle hěn jiǔ le.',vn:'Tôi đợi ở đây rất lâu rồi.'},
   ],
   hanzi:[
     {c:'久',p:'jiǔ',type:'独体字 · Chữ đơn',st:3,ord:'nét liền',rad:'丿 (phiệt)',mean:'lâu',
      tip:'Chữ cổ mô phỏng hình người bị giữ lại phía sau (chân bị kéo) → ý nghĩa KÉO DÀI THỜI GIAN = LÂU.',
      cf:'夂 (zhǐ – bộ thủ "đi chậm", hình dáng gần giống")',w:'多久 / 很久 / 长久'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn đợi thêm chút nữa thôi, không lâu đâu.',answer:'只要你再等一会儿，不会很久的。',answerPy:'Zhǐyào nǐ zài děng yíhuìr, bú huì hěn jiǔ de.',
      note:'只要……就…… (ở đây rút gọn 就) diễn tả điều kiện đủ.'},
     {promptLang:'vi',prompt:'Bà tôi làm việc ở ngân hàng rất lâu rồi.',answer:'我奶奶在银行工作很久了。',answerPy:'Wǒ nǎinai zài yínháng gōngzuò hěn jiǔ le.',
      note:'很久了 diễn tả khoảng thời gian dài (ôn lại 银行 đã học trong bài này).'},
   ]},

  {n:5,zh:'感兴趣',py:'gǎn xìngqù',pos:'Cụm động từ',vn:'có hứng thú, thích',em:'✨',lesson:2,
   explain:['Cảm thấy hứng thú, quan tâm đến điều gì đó.'],
   usage:'Cấu trúc: 对 + [đối tượng] + (phó từ mức độ) + 感兴趣; phủ định: 对……不感兴趣.',
   collo:['对……感兴趣','很感兴趣','不感兴趣'],
   ex_zh:'你们都对音乐感兴趣吗？',ex_py:'Nǐmen dōu duì yīnyuè gǎn xìngqù ma?',ex_vn:'Cả hai đều thích âm nhạc à?',
   exList:[
     {zh:'你们都对音乐感兴趣吗？',py:'Nǐmen dōu duì yīnyuè gǎn xìngqù ma?',vn:'Cả hai đều thích âm nhạc à?'},
     {zh:'她对音乐感兴趣，我对她更感兴趣。',py:'Tā duì yīnyuè gǎn xìngqù, wǒ duì tā gèng gǎn xìngqù.',vn:'Cô ấy thích âm nhạc, còn tôi thích cô ấy hơn.'},
     {zh:'我对爬山不感兴趣，爬山太累了。',py:'Wǒ duì páshān bù gǎn xìngqù, páshān tài lèi le.',vn:'Tôi không thích leo núi, leo núi mệt lắm.'},
   ],
   hanzi:[
     {c:'趣',p:'qù',type:'半包围结构 · Bán bao vây',st:15,ord:'走 bao ngoài → 取 trong',rad:'走 (tẩu – đi)',mean:'thú vị, hứng thú',
      tip:'走(đi, hướng đến) + 取(chọn lấy) → hướng đến, chọn lấy điều mình thích = HỨNG THÚ.',
      cf:'取 (qǔ – "lấy", không có bộ 走")',w:'感兴趣 / 有意思 / 兴趣'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn thích môn thể thao nào?',answer:'你对什么运动感兴趣？',answerPy:'Nǐ duì shénme yùndòng gǎn xìngqù?',
      note:'对 + đối tượng + 感兴趣 hỏi về sở thích.'},
     {promptLang:'vi',prompt:'Nếu bạn thích âm nhạc thì cùng đi nghe hòa nhạc với tôi đi.',answer:'如果你对音乐感兴趣，就跟我一起去听音乐会吧。',answerPy:'Rúguǒ nǐ duì yīnyuè gǎn xìngqù, jiù gēn wǒ yìqǐ qù tīng yīnyuèhuì ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 音乐会 đã học ở Bài 6).'},
   ]},

  {n:6,zh:'结婚',py:'jiéhūn',pos:'Động từ',vn:'kết hôn, cưới',em:'💍',lesson:3,
   explain:['Nam nữ chính thức trở thành vợ chồng.'],
   usage:'Động từ ly hợp; thường đi cùng 跟/和 + người: 跟她结婚.',
   collo:['跟她结婚','下个月结婚','结婚了'],
   ex_zh:'我跟小丽下个月结婚，到时候欢迎你来。',ex_py:'Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.',ex_vn:'Tháng sau tôi và Tiểu Lệ kết hôn, đến lúc đó hoan nghênh bạn đến nhé.',
   exList:[
     {zh:'我跟小丽下个月结婚，到时候欢迎你来。',py:'Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.',vn:'Tháng sau tôi và Tiểu Lệ kết hôn, đến lúc đó hoan nghênh bạn đến nhé.'},
     {zh:'什么？结婚？',py:'Shénme? Jié hūn?',vn:'Gì cơ? Kết hôn?'},
     {zh:'你跟她结婚，那我怎么办啊？',py:'Nǐ gēn tā jié hūn, nà wǒ zěnme bàn a?',vn:'Bạn cưới cô ấy, vậy tôi phải làm sao đây?'},
   ],
   hanzi:[
     {c:'婚',p:'hūn',type:'左右结构 · Trái-phải',st:11,ord:'女 trái → 昏 phải',rad:'女 (nữ)',mean:'kết hôn, hôn nhân',
      tip:'女(người phụ nữ) + 昏(hoàng hôn, thời cổ rước dâu vào buổi chiều tối) → nghi lễ CƯỚI HỎI = KẾT HÔN.',
      cf:'昏 (hūn – "hoàng hôn, mê man", không có bộ 女")',w:'结婚 / 结婚了 / 婚礼'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tháng sau chúng tôi kết hôn, hoan nghênh bạn đến.',answer:'我们下个月结婚，欢迎你来。',answerPy:'Wǒmen xià ge yuè jié hūn, huānyíng nǐ lái.',
      note:'欢迎你来 = lời mời trang trọng (ôn lại 欢迎 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Anh trai tôi và vợ anh ấy quen nhau bảy năm rồi mới kết hôn.',answer:'我哥哥和他妻子认识七年了才结婚。',answerPy:'Wǒ gēge hé tā qīzi rènshi qī nián le cái jiéhūn.',
      note:'认识……了才…… diễn tả phải sau một khoảng thời gian mới xảy ra việc gì (ôn lại 妻子 đã học ở Bài 6).'},
   ]},

  {n:7,zh:'欢迎',py:'huānyíng',pos:'Động từ',vn:'hoan nghênh, chào mừng',em:'🎉',lesson:3,
   explain:['Vui vẻ đón tiếp, mời gọi ai đó đến.'],
   usage:'Động từ, mang tân ngữ trực tiếp là người hoặc mệnh đề: 欢迎 + [người] + [V].',
   collo:['欢迎你来','欢迎光临','受欢迎'],
   ex_zh:'我跟小丽下个月结婚，到时候欢迎你来。',ex_py:'Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.',ex_vn:'Tháng sau tôi và Tiểu Lệ kết hôn, đến lúc đó hoan nghênh bạn đến nhé.',
   exList:[
     {zh:'我跟小丽下个月结婚，到时候欢迎你来。',py:'Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.',vn:'Tháng sau tôi và Tiểu Lệ kết hôn, đến lúc đó hoan nghênh bạn đến nhé.'},
     {zh:'欢迎你来我们银行。',py:'Huānyíng nǐ lái wǒmen yínháng.',vn:'Hoan nghênh bạn đến ngân hàng chúng tôi.'},
     {zh:'经理您好，我一定好好儿工作。',py:'Jīnglǐ nín hǎo, wǒ yídìng hǎohāor gōngzuò.',vn:'Chào giám đốc, tôi nhất định sẽ làm việc chăm chỉ.'},
   ],
   hanzi:[
     {c:'迎',p:'yíng',type:'半包围结构 · Bán bao vây',st:7,ord:'辶 bao ngoài → 卬 trong',rad:'辶 (sước – đi)',mean:'đón tiếp',
      tip:'辶(đi) + 卬(ngẩng đầu trông ngóng) → đi ra NGÊNH ĐÓN người khác = ĐÓN TIẾP, HOAN NGHÊNH.',
      cf:'仰 (yǎng – "ngưỡng mộ", có 亻 thay vì 辶")',w:'欢迎 / 迎接'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn có thời gian, chúng tôi rất hoan nghênh bạn đến.',answer:'只要你有时间，我们就很欢迎你来。',answerPy:'Zhǐyào nǐ yǒu shíjiān, wǒmen jiù hěn huānyíng nǐ lái.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
     {promptLang:'vi',prompt:'Đồng nghiệp mới rất được mọi người hoan nghênh.',answer:'新同事很受大家欢迎。',answerPy:'Xīn tóngshì hěn shòu dàjiā huānyíng.',
      note:'受欢迎 = được yêu mến, hoan nghênh (ôn lại 同事 vừa học trong bài này).'},
   ]},

  {n:8,zh:'迟到',py:'chídào',pos:'Động từ',vn:'đến muộn',em:'⏰',lesson:4,
   explain:['Đến trễ hơn thời gian đã hẹn hoặc quy định.'],
   usage:'Động từ ly hợp, thường đi cùng 了 hoặc thời lượng: 迟到了, 迟到了一刻钟.',
   collo:['迟到了','没迟到','怎么迟到了'],
   ex_zh:'你看看手表，怎么迟到了？',ex_py:'Nǐ kànkan shǒubiǎo, zěnme chídào le?',ex_vn:'Bạn xem đồng hồ đi, sao lại đến muộn vậy?',
   exList:[
     {zh:'你看看手表，怎么迟到了？',py:'Nǐ kànkan shǒubiǎo, zěnme chídào le?',vn:'Bạn xem đồng hồ đi, sao lại đến muộn vậy?'},
     {zh:'没迟到啊。',py:'Méi chídào a.',vn:'Không có muộn đâu.'},
     {zh:'不是我迟到了，是你的表快了一刻钟。',py:'Bú shì wǒ chídào le, shì nǐ de biǎo kuàile yí kè zhōng.',vn:'Không phải tôi đến muộn, mà là đồng hồ của bạn chạy nhanh mười lăm phút.'},
   ],
   hanzi:[
     {c:'迟',p:'chí',type:'半包围结构 · Bán bao vây',st:7,ord:'辶 bao ngoài → 尺 trong',rad:'辶 (sước – đi)',mean:'muộn, trễ',
      tip:'辶(đi) + 尺(cây thước, ý chỉ đo lường chậm) → đi CHẬM hơn mức quy định = MUỘN, TRỄ.',
      cf:'尺 (chǐ – "cái thước", không có bộ 辶")',w:'迟到 / 迟早'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn không phải nói 8 giờ đến đón tôi sao? Bạn đến muộn rồi.',answer:'你不是说八点来接我吗？你迟到了。',answerPy:'Nǐ bú shì shuō bā diǎn lái jiē wǒ ma? Nǐ chídào le.',
      note:'不是……吗 diễn tả nhắc lại điều đã hẹn (ôn lại 接 sẽ học ngay bên dưới trong bài này).'},
     {promptLang:'vi',prompt:'Chỉ cần bạn đến sớm mười lăm phút thì sẽ không muộn.',answer:'只要你早来一刻钟，就不会迟到。',answerPy:'Zhǐyào nǐ zǎo lái yí kè zhōng, jiù bú huì chídào.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 刻 sẽ học ngay bên dưới trong bài này).'},
   ]},

  {n:9,zh:'半',py:'bàn',pos:'Số từ',vn:'một nửa, rưỡi',em:'🕧',lesson:4,
   explain:['Một nửa của một đơn vị; dùng trong giờ để chỉ 30 phút.'],
   usage:'Số từ, đứng sau giờ để chỉ 30 phút: [giờ] + 半 (七点半 = 7 giờ rưỡi); hoặc trước lượng từ: 半个小时.',
   collo:['七点半','半个小时','一半'],
   ex_zh:'你不是说七点半来接我吗？',ex_py:'Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma?',ex_vn:'Chẳng phải bạn nói 7h30 đến đón tôi sao?',
   exList:[
     {zh:'你不是说七点半来接我吗？',py:'Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma?',vn:'Chẳng phải bạn nói 7h30 đến đón tôi sao?'},
     {zh:'我都在这儿坐了半个小时了。',py:'Wǒ dōu zài zhèr zuòle bàn ge xiǎoshí le.',vn:'Tôi ngồi đây nửa tiếng rồi đấy.'},
     {zh:'我坐出租车半个小时就回去了。',py:'Wǒ zuò chūzūchē bàn ge xiǎoshí jiù huíqu le.',vn:'Tôi đi taxi nửa tiếng là về đến nhà rồi.'},
   ],
   hanzi:[
     {c:'半',p:'bàn',type:'独体字 · Chữ đơn',st:5,ord:'nét liền',rad:'八 (bát – tám, chia)',mean:'một nửa',
      tip:'Chữ tượng hình mô phỏng vật bị CHIA làm đôi (nét 八 ở trên chỉ sự phân chia) → MỘT NỬA.',
      cf:'伴 (bàn – "bạn đồng hành", có 亻 thêm vào")',w:'一半 / 半个 / 点半'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn có thể đến đón tôi lúc 7 giờ rưỡi không?',answer:'你能七点半来接我吗？',answerPy:'Nǐ néng qī diǎn bàn lái jiē wǒ ma?',
      note:'[giờ]+半 = giờ rưỡi (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Anh ấy đợi tôi ở cửa công ty nửa tiếng rồi.',answer:'他在公司门口等了我半个小时了。',answerPy:'Tā zài gōngsī ménkǒu děngle wǒ bàn ge xiǎoshí le.',
      note:'半个小时 = nửa tiếng, làm bổ ngữ thời lượng.'},
   ]},

  {n:10,zh:'接',py:'jiē',pos:'Động từ',vn:'đón',em:'🚗',lesson:4,
   explain:['Ra đón ai đó đến một nơi.'],
   usage:'Động từ, mang tân ngữ trực tiếp là người: 接 + [người] (接我, 接你).',
   collo:['来接我','接人','去接'],
   ex_zh:'你不是说七点半来接我吗？',ex_py:'Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma?',ex_vn:'Chẳng phải bạn nói 7h30 đến đón tôi sao?',
   exList:[
     {zh:'你不是说七点半来接我吗？',py:'Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma?',vn:'Chẳng phải bạn nói 7h30 đến đón tôi sao?'},
     {zh:'就是那天来公司接你的那个？',py:'Jiùshì nàtiān lái gōngsī jiē nǐ de nàge?',vn:'Chính là người hôm đó đến công ty đón bạn đấy à?'},
     {zh:'我已经等了半个小时了，你在哪儿呢？',py:'Wǒ yǐjīng děngle bàn ge xiǎoshí le, nǐ zài nǎr ne?',vn:'Tôi đã đợi nửa tiếng rồi, bạn đang ở đâu vậy?'},
   ],
   hanzi:[
     {c:'接',p:'jiē',type:'左右结构 · Trái-phải',st:11,ord:'扌 trái → 妾 phải',rad:'扌 (thủ – tay)',mean:'đón, tiếp nhận',
      tip:'扌(tay) + 妾(người phụ nữ được đón về) → dùng TAY đón nhận ai đó = ĐÓN.',
      cf:'妾 (qiè – "thiếp", không có bộ 扌")',w:'接我 / 接人 / 迎接'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ai đến đón bạn ở sân bay vậy?',answer:'谁来机场接你？',answerPy:'Shéi lái jīchǎng jiē nǐ?',
      note:'接 + người diễn tả hành động đón ai đó.'},
     {promptLang:'vi',prompt:'Nếu bạn đến muộn thì tôi sẽ không đến đón bạn nữa.',answer:'如果你迟到，我就不来接你了。',answerPy:'Rúguǒ nǐ chídào, wǒ jiù bù lái jiē nǐ le.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 迟到 vừa học trong bài này).'},
   ]},

  {n:11,zh:'刻',py:'kè',pos:'Lượng từ',vn:'mười lăm phút',em:'🕒',lesson:4,
   explain:['Đơn vị thời gian bằng 15 phút, dùng để nói giờ hoặc khoảng thời gian.'],
   usage:'Lượng từ; đứng sau số từ: 一刻 (15 phút), 三刻 (45 phút); 一刻钟 là cách nói đầy đủ chỉ khoảng thời gian.',
   collo:['一刻钟','三刻','差一刻'],
   ex_zh:'你迟到了一刻钟。',ex_py:'Nǐ chídàole yí kè zhōng.',ex_vn:'Bạn đến muộn mười lăm phút rồi.',
   exList:[
     {zh:'你迟到了一刻钟。',py:'Nǐ chídàole yí kè zhōng.',vn:'Bạn đến muộn mười lăm phút rồi.'},
     {zh:'不是我迟到了，是你的表快了一刻钟。',py:'Bú shì wǒ chídào le, shì nǐ de biǎo kuàile yí kè zhōng.',vn:'Không phải tôi đến muộn, mà là đồng hồ của bạn chạy nhanh mười lăm phút.'},
     {zh:'现在差一刻九点。',py:'Xiànzài chà yí kè jiǔ diǎn.',vn:'Bây giờ là kém mười lăm phút nữa 9 giờ.'},
   ],
   hanzi:[
     {c:'刻',p:'kè',type:'左右结构 · Trái-phải',st:8,ord:'亥 trái → 刂 phải',rad:'刂 (đao – dao)',mean:'khắc, chạm',
      tip:'亥(một khoảng thời gian trong 12 canh giờ cổ) + 刂(dao, dùng để khắc vạch trên đồng hồ nước cổ) → mở rộng thành đơn vị 15 PHÚT.',
      cf:'该 (gāi – "nên, phải", có 讠 thay vì 刂")',w:'一刻钟 / 三刻 / 立刻'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bây giờ là kém mười lăm phút nữa 6 giờ, chúng ta đi thôi.',answer:'现在差一刻六点，我们走吧。',answerPy:'Xiànzài chà yí kè liù diǎn, wǒmen zǒu ba.',
      note:'差+一刻+giờ = cách nói giờ kém (điểm ngữ pháp bài này, ôn lại 差 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Chúng tôi hát hai tiếng đồng hồ, rất vui.',answer:'我们唱了两个小时歌，很高兴。',answerPy:'Wǒmen chàngle liǎng ge xiǎoshí gē, hěn gāoxìng.',
      note:'唱了+thời lượng+歌 diễn tả khoảng thời gian hành động kéo dài.'},
   ]},

  {n:12,zh:'差',py:'chà',pos:'Động từ',vn:'kém, thiếu',em:'➖',lesson:4,
   explain:['Còn thiếu, chưa đủ; dùng trong cách nói giờ để chỉ "còn thiếu bao nhiêu phút nữa đến giờ tròn".'],
   usage:'Động từ; cấu trúc nói giờ: 差 + [khoảng thời gian] + [giờ] (差一刻八点 = 7:45).',
   collo:['差一刻','差五分','差不多'],
   ex_zh:'已经差一刻八点了！',ex_py:'Yǐjīng chà yí kè bā diǎn le!',ex_vn:'Đã kém mười lăm phút nữa là 8 giờ rồi!',
   exList:[
     {zh:'已经差一刻八点了！',py:'Yǐjīng chà yí kè bā diǎn le!',vn:'Đã kém mười lăm phút nữa là 8 giờ rồi!'},
     {zh:'我都在这儿坐了半个小时了。',py:'Wǒ dōu zài zhèr zuòle bàn ge xiǎoshí le.',vn:'Tôi ngồi đây nửa tiếng rồi đấy.'},
     {zh:'现在差五分十二点。',py:'Xiànzài chà wǔ fēn shí\'èr diǎn.',vn:'Bây giờ là kém 5 phút nữa 12 giờ.'},
   ],
   hanzi:[
     {c:'差',p:'chà',type:'上下结构 · Trên-dưới',st:9,ord:'𝒁+羊(biến thể) trên → 工 dưới',rad:'工 (công)',mean:'kém, thiếu; sai lệch',
      tip:'Chữ cổ vốn chỉ sự SAI LỆCH, không đồng đều → mở rộng nghĩa THIẾU, KÉM so với mức chuẩn.',
      cf:'着 (zhe/zháo – hình trên gần giống nhưng bộ khác")',w:'差一刻 / 差不多 / 差点儿'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bây giờ là kém mười lăm phút nữa 9 giờ, chúng ta phải đi nhanh thôi.',answer:'现在差一刻九点，我们得快点儿走了。',answerPy:'Xiànzài chà yí kè jiǔ diǎn, wǒmen děi kuài diǎnr zǒu le.',
      note:'差+一刻+giờ = cách nói giờ kém.'},
     {promptLang:'vi',prompt:'Nếu đồng hồ của bạn chạy chậm thì bạn sẽ đến muộn đấy.',answer:'如果你的表慢了，你就会迟到的。',answerPy:'Rúguǒ nǐ de biǎo màn le, nǐ jiù huì chídào de.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 迟到 vừa học trong bài này).'},
   ]},
];

const wuData = [
  {img:'👔',label:'同事',py:'tóngshì',letter:'A'},
  {img:'🏦',label:'银行',py:'yínháng',letter:'B'},
  {img:'💍',label:'结婚',py:'jiéhūn',letter:'C'},
  {img:'⏰',label:'迟到',py:'chídào',letter:'D'},
  {img:'🎉',label:'欢迎',py:'huānyíng',letter:'E'},
  {img:'🚗',label:'接',py:'jiē',letter:'F'},
];

var dialogData = [
  {scene:'在办公室 · Trong văn phòng',
   preQuiz:[
     {q:'小丽是谁？',opts:['新同事','经理','客人'],ans:0},
     {q:'小丽在北京工作多久了？',opts:['三年','一年','五年'],ans:0},
     {q:'小丽以前在哪儿工作？',opts:['银行','学校','超市'],ans:0},
   ],
   lines:[
     {sp:0,zh:'那个漂亮的新同事是谁？',py:'Nàge piàoliang de xīn tóngshì shì shéi?',vn:'Đồng nghiệp mới xinh đẹp kia là ai vậy?'},
     {sp:1,zh:'那是小丽。',py:'Nà shì Xiǎolì.',vn:'Đó là Tiểu Lệ.'},
     {sp:0,zh:'她刚来北京吗？',py:'Tā gāng lái Běijīng ma?',vn:'Cô ấy vừa đến Bắc Kinh à?'},
     {sp:1,zh:'不，她在北京工作三年了。',py:'Bù, tā zài Běijīng gōngzuò sān nián le.',vn:'Không, cô ấy làm việc ở Bắc Kinh ba năm rồi.'},
     {sp:0,zh:'以前她在哪儿工作？',py:'Yǐqián tā zài nǎr gōngzuò?',vn:'Trước đây cô ấy làm việc ở đâu?'},
     {sp:1,zh:'她在银行工作了两年以后来的我们公司。',py:'Tā zài yínháng gōngzuòle liǎng nián yǐhòu lái de wǒmen gōngsī.',vn:'Cô ấy làm việc ở ngân hàng hai năm rồi mới đến công ty chúng tôi.'},
   ]},
  {scene:'在休息室 · Trong phòng giải lao (kể chuyện cuối tuần)',
   preQuiz:[
     {q:'小刚和小丽周末做了什么？',opts:['去唱歌','去爬山','去公园'],ans:0},
     {q:'他们唱了多久的歌？',opts:['两个小时','一个小时','三个小时'],ans:0},
     {q:'小刚对什么更感兴趣？',opts:['小丽','音乐','唱歌'],ans:0},
   ],
   lines:[
     {sp:0,zh:'周末你跟小丽去哪儿玩儿了？',py:'Zhōumò nǐ gēn Xiǎolì qù nǎr wánr le?',vn:'Cuối tuần bạn với Tiểu Lệ đi chơi đâu vậy?'},
     {sp:1,zh:'我们去唱歌了。',py:'Wǒmen qù chàng gē le.',vn:'Chúng tôi đi hát rồi.'},
     {sp:0,zh:'你们唱了多久？',py:'Nǐmen chàngle duō jiǔ?',vn:'Các bạn hát bao lâu?'},
     {sp:1,zh:'我们唱了两个小时歌，晚上还去听音乐会了。',py:'Wǒmen chàngle liǎng ge xiǎoshí gē, wǎnshang hái qù tīng yīnyuèhuì le.',vn:'Chúng tôi hát hai tiếng, buổi tối còn đi nghe hòa nhạc nữa.'},
     {sp:0,zh:'你们都对音乐感兴趣吗？',py:'Nǐmen dōu duì yīnyuè gǎn xìngqù ma?',vn:'Cả hai đều thích âm nhạc à?'},
     {sp:1,zh:'她对音乐感兴趣，我对她更感兴趣。',py:'Tā duì yīnyuè gǎn xìngqù, wǒ duì tā gèng gǎn xìngqù.',vn:'Cô ấy thích âm nhạc, còn tôi thích cô ấy hơn.'},
   ]},
  {scene:'在休息室 · Trong phòng giải lao (tin kết hôn)',
   preQuiz:[
     {q:'小刚下个月要做什么？',opts:['结婚','搬家','出国'],ans:0},
     {q:'小刚和小丽认识多久了？',opts:['五年','一年','两年'],ans:0},
     {q:'同事听到消息后是什么反应？',opts:['很惊讶','很高兴','没有反应'],ans:0},
   ],
   lines:[
     {sp:1,zh:'我跟小丽下个月结婚，到时候欢迎你来。',py:'Wǒ gēn Xiǎolì xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.',vn:'Tháng sau tôi và Tiểu Lệ kết hôn, đến lúc đó hoan nghênh bạn đến nhé.'},
     {sp:0,zh:'什么？结婚？',py:'Shénme? Jié hūn?',vn:'Gì cơ? Kết hôn?'},
     {sp:1,zh:'对啊，突然吗？',py:'Duì a, tūrán ma?',vn:'Đúng vậy, bất ngờ à?'},
     {sp:0,zh:'你们不是刚认识吗？',py:'Nǐmen bú shì gāng rènshi ma?',vn:'Các bạn chẳng phải mới quen nhau sao?'},
     {sp:1,zh:'我跟她都认识五年了。',py:'Wǒ gēn tā dōu rènshi wǔ nián le.',vn:'Tôi và cô ấy quen nhau năm năm rồi.'},
     {sp:0,zh:'你跟她结婚，那我怎么办啊？',py:'Nǐ gēn tā jié hūn, nà wǒ zěnme bàn a?',vn:'Bạn cưới cô ấy, vậy tôi phải làm sao đây?'},
   ]},
  {scene:'在公司门口 · Ở trước cửa công ty',
   preQuiz:[
     {q:'小刚迟到了吗？',opts:['他说没有','迟到了半小时','迟到了一小时'],ans:0},
     {q:'小丽在那儿坐了多久？',opts:['半个小时','一刻钟','一个小时'],ans:0},
     {q:'最后发现是什么原因？',opts:['小丽的表快了','小刚起晚了','堵车了'],ans:0},
   ],
   lines:[
     {sp:1,zh:'你看看手表，怎么迟到了？',py:'Nǐ kànkan shǒubiǎo, zěnme chídào le?',vn:'Bạn xem đồng hồ đi, sao lại đến muộn vậy?'},
     {sp:0,zh:'没迟到啊。',py:'Méi chídào a.',vn:'Không có muộn đâu.'},
     {sp:1,zh:'你不是说七点半来接我吗？你迟到了一刻钟。',py:'Nǐ bú shì shuō qī diǎn bàn lái jiē wǒ ma? Nǐ chídàole yí kè zhōng.',vn:'Chẳng phải bạn nói 7h30 đến đón tôi sao? Bạn đến muộn mười lăm phút rồi.'},
     {sp:0,zh:'现在不是七点半吗？',py:'Xiànzài bú shì qī diǎn bàn ma?',vn:'Bây giờ chẳng phải 7h30 sao?'},
     {sp:1,zh:'已经差一刻八点了！我都在这儿坐了半个小时了。',py:'Yǐjīng chà yí kè bā diǎn le! Wǒ dōu zài zhèr zuòle bàn ge xiǎoshí le.',vn:'Đã kém mười lăm phút nữa là 8 giờ rồi! Tôi ngồi đây nửa tiếng rồi đấy.'},
     {sp:0,zh:'不是我迟到了，是你的表快了一刻钟。',py:'Bú shì wǒ chídào le, shì nǐ de biǎo kuàile yí kè zhōng.',vn:'Không phải tôi đến muộn, mà là đồng hồ của bạn chạy nhanh mười lăm phút.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'新',right:'同事'},
  {left:'在',right:'银行'},
  {left:'对……',right:'感兴趣'},
  {left:'下个月',right:'结婚'},
  {left:'欢迎',right:'你来'},
  {left:'来',right:'接我'},
  {left:'一',right:'刻'},
  {left:'因为她刚来公司，',right:'所以我们都不认识她。'},
  {left:'虽然我们刚认识，',right:'但是觉得很好。'},
  {left:'如果你对音乐感兴趣，',right:'就来听音乐会吧。'},
  {left:'只要你七点半来接我，',right:'我们就不会迟到。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'办公室里那位很热情的新',blank:'同事',post:'姓什么？',hint:'(đồng nghiệp)',ans:'同事'},
  {pre:'',blank:'以前',post:'你去过银行工作吗？',hint:'(trước đây)',ans:'以前'},
  {pre:'她在',blank:'银行',post:'工作了两年。',hint:'(ngân hàng)',ans:'银行'},
  {pre:'你们在银行门口等了很',blank:'久',post:'，是吗？',hint:'(lâu)',ans:'久'},
  {pre:'你同事对什么运动比较',blank:'感兴趣',post:'？',hint:'(có hứng thú)',ans:'感兴趣'},
  {pre:'我跟小丽下个月',blank:'结婚',post:'。',hint:'(kết hôn)',ans:'结婚'},
  {pre:'',blank:'欢迎',post:'你来。',hint:'(hoan nghênh)',ans:'欢迎'},
  {pre:'都八点半了，你怎么又',blank:'迟到',post:'了？',hint:'(đến muộn)',ans:'迟到'},
  {pre:'我们八点',blank:'半',post:'在公司门口见面，好吗？',hint:'(rưỡi)',ans:'半'},
  {pre:'谁明天去机场',blank:'接',post:'新同事？',hint:'(đón)',ans:'接'},
  {pre:'我们在这儿等了一',blank:'刻',post:'了，他还没来。',hint:'(mười lăm phút)',ans:'刻'},
  {pre:'你看，都',blank:'差',post:'五分六点了，我们该走了。',hint:'(kém, thiếu)',ans:'差'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['那位','新','同事','虽然','刚','来','，','但是','大家','都','很','喜欢','她','。'],ans:'那位新同事虽然刚来，但是大家都很喜欢她。',audio:'那位新同事虽然刚来，但是大家都很喜欢她。'},
  {words:['如果','你','想','去','银行','工作','，','就','得','先','问问','经理','。'],ans:'如果你想去银行工作，就得先问问经理。',audio:'如果你想去银行工作，就得先问问经理。'},
  {words:['虽然','我','对','唱歌','不','感兴趣','，','但是','我','很','喜欢','听','音乐会','。'],ans:'虽然我对唱歌不感兴趣，但是我很喜欢听音乐会。',audio:'虽然我对唱歌不感兴趣，但是我很喜欢听音乐会。'},
  {words:['我','朋友','明年','春天','结婚','，','你','一定','要','来','。'],ans:'我朋友明年春天结婚，你一定要来。',audio:'我朋友明年春天结婚，你一定要来。'},
  {words:['因为','她','刚','来','公司','，','所以','我们','都','不','认识','她','。'],ans:'因为她刚来公司，所以我们都不认识她。',audio:'因为她刚来公司，所以我们都不认识她。'},
  {words:['虽然','我们','刚','认识','，','但是','觉得','很好','。'],ans:'虽然我们刚认识，但是觉得很好。',audio:'虽然我们刚认识，但是觉得很好。'},
  {words:['如果','你','对','音乐','感兴趣','，','就','来','听','音乐会','吧','。'],ans:'如果你对音乐感兴趣，就来听音乐会吧。',audio:'如果你对音乐感兴趣，就来听音乐会吧。'},
  {words:['如果','车','再','不','来','，','我们','就','要','迟到','一','刻','了','。'],ans:'如果车再不来，我们就要迟到一刻了。',audio:'如果车再不来，我们就要迟到一刻了。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'她工作三年了在北京。',
   opts:['她在北京工作三年了。','她工作三年了在北京。','她三年了在北京工作。','她在北京三年了工作。'],ans:0,
   exp:'Cấu trúc "Sub+V+了+thời lượng": bổ ngữ thời lượng (三年) phải đứng ngay sau động từ (工作), không tách khỏi động từ.'},
  {wrong:'我很对音乐感兴趣。',
   opts:['我对音乐很感兴趣。','我很对音乐感兴趣。','我对很音乐感兴趣。','我音乐对很感兴趣。'],ans:0,
   exp:'Phó từ mức độ (很) phải đặt NGAY TRƯỚC 感兴趣, không đặt trước giới từ 对.'},
  {wrong:'已经一刻差八点了。',
   opts:['已经差一刻八点了。','已经一刻差八点了。','已经八点一刻差了。','已经差八点一刻了。'],ans:0,
   exp:'Cấu trúc nói giờ kém: 差 + [khoảng thời gian] + [giờ] (差一刻八点), không đảo thứ tự.'},
  {wrong:'我跟她结婚了都认识五年。',
   opts:['我跟她都认识五年了。','我跟她结婚了都认识五年。','我跟她认识都五年了。','我都跟她认识五年了。'],ans:0,
   exp:'Cấu trúc "Sub+V+了+thời lượng+了": 都 (đều/đã) đặt trước động từ 认识, 了 đặt cuối câu.'},
  {wrong:'同事迟到了小时半个。',
   opts:['同事迟到了半个小时。','同事迟到了小时半个。','同事半个小时了迟到。','同事迟到小时了半个。'],ans:0,
   exp:'Bổ ngữ số lượng "半个小时" (số từ+lượng từ+danh từ: 半+个+小时) phải đứng nguyên vẹn sau 了, không đảo thành "小时半个".'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'小丽以前在哪儿工作？现在在哪儿工作？',
     q_vn:'Trước đây Tiểu Lệ làm việc ở đâu? Bây giờ làm ở đâu?',
     hint:'以前在银行工作，现在在小刚的公司',
     sample:'小丽以前在银行工作了两年，后来来了小刚的公司工作。',
     sample_vn:'Trước đây Tiểu Lệ làm việc ở ngân hàng hai năm, sau đó đến công ty của Tiểu Cương làm việc.',
     note:'Sub+V+了+thời lượng diễn tả khoảng thời gian hành động kéo dài (điểm ngữ pháp bài này).'},
    {q_zh:'小刚和小丽周末做了什么？他们对什么感兴趣？',
     q_vn:'Cuối tuần Tiểu Cương và Tiểu Lệ đã làm gì? Họ thích điều gì?',
     hint:'去唱歌，听音乐会，小刚对小丽更感兴趣',
     sample:'他们周末去唱歌，晚上还听了音乐会，小丽对音乐感兴趣，小刚对小丽更感兴趣。',
     sample_vn:'Cuối tuần họ đi hát, buổi tối còn nghe hòa nhạc, Tiểu Lệ thích âm nhạc, còn Tiểu Cương thích Tiểu Lệ hơn.',
     note:'对……感兴趣 diễn tả sự hứng thú với điều gì đó.'},
    {q_zh:'小刚要做什么大事？他和小丽认识多久了？',
     q_vn:'Tiểu Cương sắp làm việc trọng đại gì? Anh ấy và Tiểu Lệ quen nhau bao lâu rồi?',
     hint:'下个月结婚，认识五年了',
     sample:'小刚下个月要跟小丽结婚，他们都认识五年了。',
     sample_vn:'Tháng sau Tiểu Cương sẽ kết hôn với Tiểu Lệ, họ quen nhau năm năm rồi.',
     note:'Sub+V+了+thời lượng+了 diễn tả khoảng thời gian đã trôi qua và vẫn tiếp diễn.'},
    {q_zh:'小刚迟到了吗？后来发现是什么原因？',
     q_vn:'Tiểu Cương có đến muộn không? Sau đó phát hiện ra nguyên nhân là gì?',
     hint:'他说没有，是小丽的表快了一刻钟',
     sample:'小刚说他没迟到，后来发现是小丽的表快了一刻钟。',
     sample_vn:'Tiểu Cương nói mình không đến muộn, sau đó phát hiện ra là đồng hồ của Tiểu Lệ chạy nhanh mười lăm phút.',
     note:'一刻钟 = mười lăm phút (điểm ngữ pháp bài này).'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Vì đồng nghiệp mới vừa đến công ty, nên tôi phải giúp cô ấy nhiều.', zh:'因为新同事刚来公司，所以我得多帮她。', py:'Yīnwèi xīn tóngshì gāng lái gōngsī, suǒyǐ wǒ děi duō bāng tā.'},
  {vi:'Trước đây chúng tôi làm việc ở ngân hàng, bây giờ đều làm ở công ty này.', zh:'我们以前在银行工作，现在都在这家公司工作。', py:'Wǒmen yǐqián zài yínháng gōngzuò, xiànzài dōu zài zhè jiā gōngsī gōngzuò.'},
  {vi:'Bạn có hứng thú với công việc mới không?', zh:'你对新工作感兴趣吗？', py:'Nǐ duì xīn gōngzuò gǎn xìngqù ma?'},
  {vi:'Đồng nghiệp của tôi tháng sau kết hôn, hoan nghênh mọi người đến.', zh:'我同事下个月结婚，欢迎大家来。', py:'Wǒ tóngshì xià ge yuè jié hūn, huānyíng dàjiā lái.'},
  {vi:'Bạn không phải nói chín giờ đến đón tôi sao? Bạn đến muộn nửa tiếng rồi.', zh:'你不是说九点来接我吗？你迟到了半个小时。', py:'Nǐ bú shì shuō jiǔ diǎn lái jiē wǒ ma? Nǐ chídàole bàn ge xiǎoshí.'},
  {vi:'Bây giờ là kém mười lăm phút nữa 3 giờ, buổi họp sắp bắt đầu rồi.', zh:'现在差一刻三点，会议快要开始了。', py:'Xiànzài chà yí kè sān diǎn, huìyì kuàiyào kāishǐ le.'},
  {vi:'Chúng tôi hát ở đó nửa tiếng, tuy mệt nhưng rất vui.', zh:'我们在那儿唱了半个小时，虽然累，但是很高兴。', py:'Wǒmen zài nàr chàngle bàn ge xiǎoshí, suīrán lèi, dànshì hěn gāoxìng.'},
  {vi:'Nếu bạn thích thể thao thì cuối tuần chúng ta cùng đi xem bóng đá đi.', zh:'如果你对运动感兴趣，我们周末就一起去看足球吧。', py:'Rúguǒ nǐ duì yùndòng gǎn xìngqù, wǒmen zhōumò jiù yìqǐ qù kàn zúqiú ba.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vì giám đốc mới đến công ty làm việc, nên các đồng nghiệp đều rất hoan nghênh anh ấy.', zh:'因为经理刚来公司工作，所以同事们都很欢迎他。', py:'Yīnwèi jīnglǐ gāng lái gōngsī gōngzuò, suǒyǐ tóngshìmen dōu hěn huānyíng tā.'},
  {vi:'Chỉ cần bạn đến sớm nửa tiếng, chúng ta sẽ không cần vội vàng.', zh:'只要你早来半个小时，我们就不用着急了。', py:'Zhǐyào nǐ zǎo lái bàn ge xiǎoshí, wǒmen jiù búyòng zháojí le.'},
  {vi:'Tuy đồng hồ của tôi chạy nhanh nhưng tôi vẫn đến đúng giờ.', zh:'虽然我的表快了，但是我还是准时到了。', py:'Suīrán wǒ de biǎo kuài le, dànshì wǒ háishi zhǔnshí dào le.'},
  {vi:'Tiểu Lệ và bạn trai cô ấy quen nhau năm năm rồi mới kết hôn.', zh:'小丽和她男朋友认识五年了才结婚。', py:'Xiǎolì hé tā nánpéngyou rènshi wǔ nián le cái jiéhūn.'},
  {vi:'Bà tôi đã hơn 80 tuổi rồi nhưng vẫn thích nghe nhạc trẻ.', zh:'我奶奶已经80多岁了，但是还喜欢听年轻人的音乐。', py:'Wǒ nǎinai yǐjīng bāshí duō suì le, dànshì hái xǐhuan tīng niánqīngrén de yīnyuè.'},
  {vi:'Tiểu Cương đã đợi ở cửa ngân hàng nửa tiếng rồi, sao bạn còn chưa đến?', zh:'小刚已经在银行门口等了半个小时了，你怎么还没到？', py:'Xiǎogāng yǐjīng zài yínháng ménkǒu děngle bàn ge xiǎoshí le, nǐ zěnme hái méi dào?'},
  {vi:'Con trai hai tuổi của tôi rất thích nghe nhạc.', zh:'我两岁的儿子很喜欢听音乐。', py:'Wǒ liǎng suì de érzi hěn xǐhuan tīng yīnyuè.'},
  {vi:'Bạn có thể đến công ty đón tôi lúc tám giờ kém mười lăm không?', zh:'你能差一刻八点来公司接我吗？', py:'Nǐ néng chà yí kè bā diǎn lái gōngsī jiē wǒ ma?'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 7)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-7/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'男', pre:'', blank:'你看看，只有半个小时了，快要迟到了', post:'。',
       py:'Nǐ kànkan, zhǐ yǒu bàn ge xiǎoshí le, kuàiyào chídào le.', vn:'Bạn xem, chỉ còn nửa tiếng thôi, sắp muộn rồi.'},
      {speaker:'女', pre:'你别着急，', blank:'走路十五分钟就到了', post:'。',
       py:'Nǐ bié zháojí, zǒulù shíwǔ fēnzhōng jiù dào le.', vn:'Bạn đừng vội, đi bộ mười lăm phút là đến rồi.'},
    ]},
    {num:2, lines:[
      {speaker:'女', pre:'', blank:'你都睡了十几个钟头了，快要迟到了', post:'！',
       py:'Nǐ dōu shuìle shí jǐ ge zhōngtóu le, kuàiyào chídào le!', vn:'Bạn ngủ mười mấy tiếng rồi, sắp muộn rồi đấy!'},
      {speaker:'男', pre:'', blank:'我想多睡会儿，太累了', post:'。',
       py:'Wǒ xiǎng duō shuì huìr, tài lèi le.', vn:'Tôi muốn ngủ thêm chút nữa, mệt quá.'},
    ]},
    {num:3, lines:[
      {speaker:'女1', pre:'', blank:'你慢点儿走', post:'。',
       py:'Nǐ màn diǎnr zǒu.', vn:'Bạn đi chậm chút thôi.'},
      {speaker:'女2', pre:'', blank:'刚爬了几分钟，你就累了', post:'？',
       py:'Gāng pále jǐ fēnzhōng, nǐ jiù lèi le?', vn:'Vừa leo mấy phút mà bạn đã mệt rồi à?'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'', blank:'我都看了二十分钟报纸了，车怎么还不来', post:'？',
       py:'Wǒ dōu kànle èrshí fēnzhōng bàozhǐ le, chē zěnme hái bù lái?', vn:'Tôi đã đọc báo hai mươi phút rồi, sao xe vẫn chưa đến vậy?'},
      {speaker:'女', pre:'', blank:'再等等，快来了', post:'。',
       py:'Zài děngdeng, kuài lái le.', vn:'Đợi thêm chút nữa, sắp đến rồi.'},
    ]},
    {num:5, lines:[
      {speaker:'男1', pre:'', blank:'欢迎你来我们银行', post:'。',
       py:'Huānyíng nǐ lái wǒmen yínháng.', vn:'Hoan nghênh bạn đến ngân hàng chúng tôi.'},
      {speaker:'男2', pre:'经理您好，', blank:'我一定好好儿工作', post:'。',
       py:'Jīnglǐ nín hǎo, wǒ yídìng hǎohāor gōngzuò.', vn:'Chào giám đốc, tôi nhất định sẽ làm việc chăm chỉ.'},
    ]},
    {num:6, lines:[
      {pre:'我是2010年开始工作的，', blank:'在银行工作了两年以后，来到了这家公司', post:'。',
       py:'Wǒ shì èr líng yī líng nián kāishǐ gōngzuò de, zài yínháng gōngzuòle liǎng nián yǐhòu, láidàole zhè jiā gōngsī.', vn:'Tôi bắt đầu làm việc từ năm 2010, làm ở ngân hàng hai năm rồi mới đến công ty này.'},
    ]},
    {num:7, lines:[
      {pre:'飞机可能晚到十分钟，', blank:'您再等一会儿吧', post:'。',
       py:'Fēijī kěnéng wǎn dào shí fēnzhōng, nín zài děng yíhuìr ba.', vn:'Máy bay có thể sẽ trễ mười phút, bạn đợi thêm chút nữa nhé.'},
    ]},
    {num:8, lines:[
      {pre:'我对爬山不感兴趣，', blank:'爬山太累了', post:'。',
       py:'Wǒ duì páshān bù gǎn xìngqù, páshān tài lèi le.', vn:'Tôi không thích leo núi, leo núi mệt lắm.'},
    ]},
    {num:9, lines:[
      {pre:'小刚在门口站了一个小时，', blank:'小方也没出来', post:'。',
       py:'Xiǎogāng zài ménkǒu zhànle yí ge xiǎoshí, Xiǎofāng yě méi chūlai.', vn:'Tiểu Cương đứng trước cửa một tiếng, Tiểu Phương cũng chưa ra.'},
    ]},
    {num:10, lines:[
      {pre:'她已经80多岁了，', blank:'可是身体好，爱运动，还喜欢听年轻人唱的歌', post:'。',
       py:'Tā yǐjīng bāshí duō suì le, kěshì shēntǐ hǎo, ài yùndòng, hái xǐhuan tīng niánqīngrén chàng de gē.', vn:'Bà ấy đã hơn 80 tuổi rồi, nhưng sức khỏe tốt, thích vận động, còn thích nghe bài hát người trẻ hát.'},
    ]},
  ],
  mc: [
    {num:11, options:['打车','坐公共汽车','走路'], ans:0,
     lines:[
       {speaker:'男', pre:'雨下得这么大，', blank:'你家离这儿太远了，怎么办啊', post:'？', py:'Yǔ xià de zhème dà, nǐ jiā lí zhèr tài yuǎn le, zěnme bàn a?', vn:'Mưa to thế này, nhà bạn xa đây quá, làm sao đây?'},
       {speaker:'女', pre:'没关系，', blank:'我坐出租车半个小时就回去了', post:'。', py:'Méi guānxi, wǒ zuò chūzūchē bàn ge xiǎoshí jiù huíqu le.', vn:'Không sao đâu, tôi đi taxi nửa tiếng là về đến nhà rồi.'},
     ],
     explain:'男：雨下得这么大，你家离这儿太远了，怎么办啊？女：没关系，我坐出租车半个小时就回去了。问：女的准备怎么回去？ → 打车。'},
    {num:12, options:['她病了','她迟到了','她没去工作'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'你哪儿不舒服', post:'？', py:'Nǐ nǎr bù shūfu?', vn:'Bạn chỗ nào không khỏe?'},
       {speaker:'女', pre:'白医生，', blank:'我头疼了一个星期了，都没去上课。怎么办呢', post:'？', py:'Bái yīshēng, wǒ tóu téngle yí ge xīngqī le, dōu méi qù shàngkè. Zěnme bàn ne?', vn:'Bác sĩ Bạch ơi, đầu tôi đau cả tuần rồi, không đi học được. Làm sao bây giờ?'},
     ],
     explain:'男：你哪儿不舒服？女：白医生，我头疼了一个星期了，都没去上课。怎么办呢？问：女的怎么了？ → 她病了。'},
    {num:13, options:['看电视','运动','周末'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'你周末喜欢做什么', post:'？', py:'Nǐ zhōumò xǐhuan zuò shénme?', vn:'Cuối tuần bạn thích làm gì?'},
       {speaker:'女', pre:'我不爱运动，', blank:'周末就在家看看电视', post:'。', py:'Wǒ bú ài yùndòng, zhōumò jiù zài jiā kànkan diànshì.', vn:'Tôi không thích vận động, cuối tuần chỉ ở nhà xem tivi thôi.'},
     ],
     explain:'男：你周末喜欢做什么？女：我不爱运动，周末就在家看看电视。问：女的对什么没有兴趣？ → 运动。'},
    {num:14, options:['同学','同事','师生'], ans:1,
     lines:[
       {speaker:'男', pre:'今天的工作我还没做完，', blank:'你来帮帮我好吗', post:'？', py:'Jīntiān de gōngzuò wǒ hái méi zuòwán, nǐ lái bāngbang wǒ hǎo ma?', vn:'Công việc hôm nay tôi vẫn chưa làm xong, bạn qua giúp tôi được không?'},
       {speaker:'女', pre:'行啊，不过', blank:'到时候你要请我吃饭', post:'。', py:'Xíng a, búguò dào shíhou nǐ yào qǐng wǒ chīfàn.', vn:'Được đấy, nhưng lúc đó bạn phải mời tôi ăn cơm.'},
     ],
     explain:'男：今天的工作我还没做完，你来帮帮我好吗？女：行啊，不过到时候你要请我吃饭。问：男的和女的可能是什么关系？ → 同事。'},
    {num:15, options:['一会儿','十二个小时','很久'], ans:2,
     lines:[
       {speaker:'男', pre:'这是什么电影啊？', blank:'我看了半天也没看懂', post:'。', py:'Zhè shì shénme diànyǐng a? Wǒ kànle bàntiān yě méi kàndǒng.', vn:'Đây là phim gì vậy? Tôi xem lâu rồi mà vẫn không hiểu.'},
       {speaker:'女', pre:'很多人都是这样，', blank:'你再看一会儿就明白了', post:'。', py:'Hěn duō rén dōu shì zhèyàng, nǐ zài kàn yíhuìr jiù míngbai le.', vn:'Nhiều người cũng vậy, bạn xem thêm chút nữa là hiểu thôi.'},
     ],
     explain:'男：这是什么电影啊？我看了半天也没看懂。女：很多人都是这样，你再看一会儿就明白了。问：男的看了多长时间电影？ → 很久。'},
    {num:16, options:['欢迎男的来公司','要结婚了','在迎接新同事'], ans:1,
     lines:[
       {speaker:'女', pre:'我下个月结婚，', blank:'到时候欢迎你来', post:'。', py:'Wǒ xià ge yuè jié hūn, dào shíhou huānyíng nǐ lái.', vn:'Tháng sau tôi kết hôn, đến lúc đó hoan nghênh bạn đến nhé.'},
       {speaker:'男', pre:'', blank:'什么？结婚', post:'？', py:'Shénme? Jié hūn?', vn:'Gì cơ? Kết hôn?'},
       {speaker:'女', pre:'突然吗？', blank:'其实我和我男朋友认识已经五年了', post:'。', py:'Tūrán ma? Qíshí wǒ hé wǒ nánpéngyou rènshi yǐjīng wǔ nián le.', vn:'Bất ngờ à? Thực ra tôi và bạn trai quen nhau năm năm rồi.'},
       {speaker:'男', pre:'', blank:'就是那天来公司接你的那个', post:'？', py:'Jiùshì nàtiān lái gōngsī jiē nǐ de nàge?', vn:'Chính là người hôm đó đến công ty đón bạn đấy à?'},
     ],
     explain:'女：我下个月结婚，到时候欢迎你来。男：什么？结婚？女：突然吗？其实我和我男朋友认识已经五年了。男：就是那天来公司接你的那个？问：关于女的，可以知道什么？ → 要结婚了。'},
    {num:17, options:['等车','接人','买东西'], ans:1,
     lines:[
       {speaker:'男', pre:'喂，', blank:'我已经等了半个小时了，你在哪儿呢', post:'？', py:'Wéi, wǒ yǐjīng děngle bàn ge xiǎoshí le, nǐ zài nǎr ne?', vn:'Alo, tôi đã đợi nửa tiếng rồi, bạn đang ở đâu vậy?'},
       {speaker:'女', pre:'我刚下飞机，', blank:'我穿着红衣服，你呢', post:'？', py:'Wǒ gāng xià fēijī, wǒ chuānzhe hóng yīfu, nǐ ne?', vn:'Tôi vừa xuống máy bay, tôi mặc áo đỏ, còn bạn?'},
       {speaker:'男', pre:'我穿着白裤子，', blank:'你看见我了吗', post:'？', py:'Wǒ chuānzhe bái kùzi, nǐ kànjiàn wǒ le ma?', vn:'Tôi mặc quần trắng, bạn thấy tôi chưa?'},
       {speaker:'女', pre:'', blank:'看见了，看见了', post:'。', py:'Kànjiàn le, kànjiàn le.', vn:'Thấy rồi, thấy rồi.'},
     ],
     explain:'男：喂，我已经等了半个小时了，你在哪儿呢？女：我刚下飞机，我穿着红衣服，你呢？男：我穿着白裤子，你看见我了吗？女：看见了，看见了。问：男的在做什么？ → 接人。'},
    {num:18, options:['银行','书店','学校'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'你为什么不在书店工作了', post:'？', py:'Nǐ wèishénme bú zài shūdiàn gōngzuò le?', vn:'Sao bạn không làm ở hiệu sách nữa?'},
       {speaker:'女', pre:'那不是我喜欢的。', blank:'我在那儿工作了半年以后，就来了这家银行', post:'。', py:'Nà bú shì wǒ xǐhuan de. Wǒ zài nàr gōngzuòle bàn nián yǐhòu, jiù láile zhè jiā yínháng.', vn:'Đó không phải điều tôi thích. Tôi làm ở đó nửa năm rồi liền đến ngân hàng này.'},
       {speaker:'男', pre:'', blank:'现在的工作怎么样', post:'？', py:'Xiànzài de gōngzuò zěnmeyàng?', vn:'Công việc hiện tại thế nào?'},
       {speaker:'女', pre:'很好，', blank:'我很喜欢', post:'。', py:'Hěn hǎo, wǒ hěn xǐhuan.', vn:'Rất tốt, tôi rất thích.'},
     ],
     explain:'男：你为什么不在书店工作了？女：那不是我喜欢的。我在那儿工作了半年以后，就来了这家银行。男：现在的工作怎么样？女：很好，我很喜欢。问：女的现在在哪儿工作？ → 银行。'},
    {num:19, options:['唱歌','吃饭','看电视'], ans:0,
     lines:[
       {speaker:'女', pre:'', blank:'我两岁大的儿子对音乐感兴趣', post:'。', py:'Wǒ liǎng suì dà de érzi duì yīnyuè gǎn xìngqù.', vn:'Con trai hai tuổi của tôi rất thích âm nhạc.'},
       {speaker:'男', pre:'是吗？', blank:'你是怎么知道的', post:'？', py:'Shì ma? Nǐ shì zěnme zhīdào de?', vn:'Vậy à? Bạn biết bằng cách nào?'},
       {speaker:'女', pre:'电视上有人唱歌，', blank:'他也一起唱。有时候大家在吃饭，他也唱', post:'。', py:'Diànshì shang yǒu rén chàng gē, tā yě yìqǐ chàng. Yǒu shíhou dàjiā zài chīfàn, tā yě chàng.', vn:'Trên tivi có người hát, cháu cũng hát theo. Có lúc mọi người đang ăn cơm, cháu cũng hát.'},
     ],
     explain:'女：我两岁大的儿子对音乐感兴趣。男：是吗？你是怎么知道的？女：电视上有人唱歌，他也一起唱。有时候大家在吃饭，他也唱。问：女的的儿子喜欢什么？ → 唱歌。'},
    {num:20, options:['电影','运动','音乐'], ans:2,
     lines:[
       {speaker:'男', pre:'祝你生日快乐，', blank:'这个送给你', post:'。', py:'Zhù nǐ shēngrì kuàilè, zhège sòng gěi nǐ.', vn:'Chúc bạn sinh nhật vui vẻ, cái này tặng bạn.'},
       {speaker:'女', pre:'', blank:'什么啊', post:'？', py:'Shénme a?', vn:'Cái gì vậy?'},
       {speaker:'男', pre:'', blank:'打开看看', post:'。', py:'Dǎkāi kànkan.', vn:'Mở ra xem thử đi.'},
       {speaker:'女', pre:'音乐会的票！', blank:'我太喜欢了，谢谢你', post:'。', py:'Yīnyuèhuì de piào! Wǒ tài xǐhuan le, xièxie nǐ.', vn:'Vé buổi hòa nhạc! Tôi thích quá, cảm ơn bạn.'},
     ],
     explain:'男：祝你生日快乐，这个送给你。女：什么啊？男：打开看看。女：音乐会的票！我太喜欢了，谢谢你。问：女的对什么感兴趣？ → 音乐。'},
  ],
};
