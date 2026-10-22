// ══════════════════════════════════════════
// DATA — HSK5 Bài 9: 别样鲁迅 (Một Lỗ Tấn khác)
// Unit 3 倾听故事 · Nguồn: HSK标准教程5上 (tr. 83–90) + 练习册 bài 9
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'表现',py:'biǎoxiàn',pos:'Động từ / Danh từ',vn:'thể hiện; biểu hiện',hv:'biểu hiện',em:'🌟',lesson:9,
   explain:['Động từ: bộc lộ ra bên ngoài (năng lực, tính cách, đặc điểm) — 表现得很好, 表现出兴趣.','Danh từ: cách một người thể hiện, thành tích trong một thời gian — 他这学期的表现.'],
   usage:'Bảng 词语搭配 của sách: 表现 + (很)好 / 突出 / 稳定. Động từ hay đi với 得: 表现得 + tính từ; 表现出 + N.',
   collo:['表现很好','表现突出','表现稳定','表现得尤其突出'],
   ex_zh:'这一点在民国时期表现得尤其突出。',ex_py:'Zhè yì diǎn zài Mínguó shíqī biǎoxiàn de yóuqí tūchū.',ex_vn:'Điều này thể hiện đặc biệt nổi bật vào thời Dân Quốc.',
   exList:[
     {zh:'这一点在民国时期表现得尤其突出。',py:'Zhè yì diǎn zài Mínguó shíqī biǎoxiàn de yóuqí tūchū.',vn:'Điều này thể hiện đặc biệt nổi bật vào thời Dân Quốc.'},
     {zh:'他平时成绩一般，但在今晚的比赛中表现得很突出。',py:'Tā píngshí chéngjì yìbān, dàn zài jīn wǎn de bǐsài zhōng biǎoxiàn de hěn tūchū.',vn:'Bình thường thành tích của cậu ấy chỉ bình thường, nhưng trong trận đấu tối nay lại thể hiện rất nổi bật.'},
     {zh:'这个学期小明的表现很稳定，老师表扬了他。',py:'Zhège xuéqī Xiǎo Míng de biǎoxiàn hěn wěndìng, lǎoshī biǎoyángle tā.',vn:'Học kỳ này Tiểu Minh thể hiện rất ổn định, cô giáo đã khen cậu ấy.'}
   ],
   colloFull:[
     {zh:'表现很好',py:'biǎoxiàn hěn hǎo',vn:'thể hiện rất tốt'},
     {zh:'表现突出',py:'biǎoxiàn tūchū',vn:'thể hiện nổi bật'},
     {zh:'表现稳定',py:'biǎoxiàn wěndìng',vn:'thể hiện ổn định'},
     {zh:'表现得尤其突出',py:'biǎoxiàn de yóuqí tūchū',vn:'thể hiện đặc biệt nổi bật'},
     {zh:'表现出兴趣',py:'biǎoxiàn chū xìngqù',vn:'tỏ ra hứng thú'}
   ],
   patterns:[
     {s:'Sub + 表现得 + (很) + Adj', m:'Ai đó thể hiện (tốt / nổi bật / ổn định…)'},
     {s:'Sub + 的表现 + 很 + Adj', m:'Biểu hiện / thành tích của ai đó … (danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy mới đến công ty nửa năm, nhưng thể hiện rất nổi bật.',answer:'虽然他来公司才半年，但是表现得很突出。',answerPy:'Suīrán tā lái gōngsī cái bàn nián, dànshì biǎoxiàn de hěn tūchū.',
      note:'表现得 + tính từ: bổ ngữ trạng thái phải có 得.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần em thể hiện tốt trong kỳ thi thì bố sẽ đưa em đi Bắc Kinh.',answer:'只要你在考试中表现得好，爸爸就带你去北京。',answerPy:'Zhǐyào nǐ zài kǎoshì zhōng biǎoxiàn de hǎo, bàba jiù dài nǐ qù Běijīng.',
      note:'在……中表现得好: thể hiện tốt trong ….',pair:'只要……就……'}
   ]},

  {n:2,zh:'突出',py:'tūchū',pos:'Tính từ',vn:'nổi bật, nổi trội',hv:'đột xuất',em:'🏅',lesson:9,
   explain:['Vượt hẳn lên so với những cái xung quanh, dễ thấy, dễ nhận ra.','Cũng làm động từ: 突出重点 (làm nổi bật trọng tâm).'],
   usage:'成绩 / 表现 / 特点 + 突出; 表现得(尤其)突出. BẪY: “đột xuất” tiếng Việt là bất ngờ, không báo trước — nghĩa khác hẳn.',
   collo:['表现突出','成绩突出','特点突出','尤其突出'],
   ex_zh:'她的汉语成绩在全班最突出。',ex_py:'Tā de Hànyǔ chéngjì zài quán bān zuì tūchū.',ex_vn:'Thành tích tiếng Trung của cô ấy nổi bật nhất cả lớp.',
   exList:[
     {zh:'她的汉语成绩在全班最突出。',py:'Tā de Hànyǔ chéngjì zài quán bān zuì tūchū.',vn:'Thành tích tiếng Trung của cô ấy nổi bật nhất cả lớp.'},
     {zh:'这一点在民国时期表现得尤其突出。',py:'Zhè yì diǎn zài Mínguó shíqī biǎoxiàn de yóuqí tūchū.',vn:'Điều này thể hiện đặc biệt nổi bật vào thời Dân Quốc.'},
     {zh:'这家餐馆最突出的特点是菜做得很地道。',py:'Zhè jiā cānguǎn zuì tūchū de tèdiǎn shì cài zuò de hěn dìdao.',vn:'Đặc điểm nổi bật nhất của nhà hàng này là món ăn nấu rất chuẩn vị.'}
   ],
   colloFull:[
     {zh:'表现突出',py:'biǎoxiàn tūchū',vn:'thể hiện nổi bật'},
     {zh:'成绩突出',py:'chéngjì tūchū',vn:'thành tích nổi bật'},
     {zh:'特点突出',py:'tèdiǎn tūchū',vn:'đặc điểm nổi bật'},
     {zh:'尤其突出',py:'yóuqí tūchū',vn:'đặc biệt nổi bật'},
     {zh:'突出重点',py:'tūchū zhòngdiǎn',vn:'làm nổi bật trọng tâm'}
   ],
   patterns:[
     {s:'N + (很 / 尤其) + 突出', m:'… rất / đặc biệt nổi bật'},
     {s:'最突出的 + N + 是……', m:'… nổi bật nhất là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thành tích của cậu ấy càng ngày càng nổi bật.',answer:'他的成绩越来越突出了。',answerPy:'Tā de chéngjì yuè lái yuè tūchū le.',
      note:'越来越 + tính từ; 了 cuối câu chỉ sự thay đổi.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Ngay cả thầy hiệu trưởng cũng biết thành tích của cô ấy rất nổi bật.',answer:'连校长都知道她的成绩很突出。',answerPy:'Lián xiàozhǎng dōu zhīdào tā de chéngjì hěn tūchū.',
      note:'突出 là tính từ, làm vị ngữ sau 很.',pair:'连……都……'}
   ]},

  {n:3,zh:'文学家',py:'wénxuéjiā',pos:'Danh từ',vn:'nhà văn, nhà văn học',hv:'văn học gia',em:'📚',lesson:9,
   explain:['Người có thành tựu lớn trong sáng tác hoặc nghiên cứu văn học.','Hậu tố 家 = người giỏi một lĩnh vực: 作家, 画家, 科学家, 美食家.'],
   usage:'著名的 / 伟大的 + 文学家; 一位文学家 (dùng 位 cho lịch sự).',
   collo:['著名的文学家','一位文学家','伟大的文学家'],
   ex_zh:'例如著名的文学家鲁迅，在吃喝这件事上，就算是个地道的行家。',ex_py:'Lìrú zhùmíng de wénxuéjiā Lǔ Xùn, zài chīhē zhè jiàn shì shang, jiù suàn shì ge dìdao de hángjia.',ex_vn:'Ví dụ như nhà văn nổi tiếng Lỗ Tấn, trong chuyện ăn uống thì cũng được coi là một người sành sỏi thực thụ.',
   exList:[
     {zh:'例如著名的文学家鲁迅，在吃喝这件事上，就算是个地道的行家。',py:'Lìrú zhùmíng de wénxuéjiā Lǔ Xùn, zài chīhē zhè jiàn shì shang, jiù suàn shì ge dìdao de hángjia.',vn:'Ví dụ như nhà văn nổi tiếng Lỗ Tấn, trong chuyện ăn uống thì cũng được coi là một người sành sỏi thực thụ.'},
     {zh:'我从小就想成为一位文学家。',py:'Wǒ cóngxiǎo jiù xiǎng chéngwéi yí wèi wénxuéjiā.',vn:'Từ nhỏ tôi đã muốn trở thành một nhà văn.'},
     {zh:'鲁迅是中国现代最伟大的文学家之一。',py:'Lǔ Xùn shì Zhōngguó xiàndài zuì wěidà de wénxuéjiā zhī yī.',vn:'Lỗ Tấn là một trong những nhà văn vĩ đại nhất Trung Quốc hiện đại.'}
   ],
   colloFull:[
     {zh:'著名的文学家',py:'zhùmíng de wénxuéjiā',vn:'nhà văn nổi tiếng'},
     {zh:'一位文学家',py:'yí wèi wénxuéjiā',vn:'một nhà văn'},
     {zh:'伟大的文学家',py:'wěidà de wénxuéjiā',vn:'nhà văn vĩ đại'},
     {zh:'成为文学家',py:'chéngwéi wénxuéjiā',vn:'trở thành nhà văn'}
   ],
   patterns:[
     {s:'著名的 / 伟大的 + 文学家', m:'Nhà văn nổi tiếng / vĩ đại'},
     {s:'……是……最……的文学家之一', m:'… là một trong những nhà văn … nhất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tác phẩm của nhà văn này không những người lớn thích mà trẻ con cũng thích.',answer:'这位文学家的作品不仅大人喜欢，孩子也喜欢。',answerPy:'Zhè wèi wénxuéjiā de zuòpǐn bùjǐn dàrén xǐhuan, háizi yě xǐhuan.',
      note:'一位 / 这位 + 文学家: dùng 位 khi nói về người đáng kính.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Lỗ Tấn là nhà văn mà tôi thích nhất.',answer:'鲁迅是我最喜欢的文学家。',answerPy:'Lǔ Xùn shì wǒ zuì xǐhuan de wénxuéjiā.',
      note:'Định ngữ 我最喜欢的 đứng trước danh từ 文学家.',pair:'是……的'}
   ]},

  {n:4,zh:'算',py:'suàn',pos:'Động từ',vn:'coi là, xem là',hv:'toán',em:'🧮',lesson:9,
   explain:['Nghĩa trong bài: “认作，当作” — coi như là, được xem là: 就算是个地道的行家.','算了: thôi, bỏ qua, không tính toán nữa. 算得上 / 算不上: đáng / không đáng được coi là.'],
   usage:'算(是) + N; 就算……的 (coi như là …); 算得上 / 算不上 + Adj/N; câu + 算了. Nghĩa gốc “tính toán” (算账) học từ HSK 3.',
   collo:['算是','就算……的','算了','算不上','算得上'],
   ex_zh:'这钱就算我借给你的，将来你有了的时候再还我。',ex_py:'Zhè qián jiù suàn wǒ jiè gěi nǐ de, jiānglái nǐ yǒule de shíhou zài huán wǒ.',ex_vn:'Tiền này coi như tớ cho cậu mượn, sau này khi nào có thì trả tớ.',
   exList:[
     {zh:'这钱就算我借给你的，将来你有了的时候再还我。',py:'Zhè qián jiù suàn wǒ jiè gěi nǐ de, jiānglái nǐ yǒule de shíhou zài huán wǒ.',vn:'Tiền này coi như tớ cho cậu mượn, sau này khi nào có thì trả tớ.'},
     {zh:'广和居算不上豪华，但却很适合朋友在这里聚会。',py:'Guǎnghéjū suàn bu shàng háohuá, dàn què hěn shìhé péngyou zài zhèlǐ jùhuì.',vn:'Quảng Hòa Cư không thể coi là sang trọng, nhưng lại rất hợp để bạn bè tụ họp.'},
     {zh:'不就是一个空瓶子吗？扔掉算了。',py:'Bú jiù shì yí ge kōng píngzi ma? Rēngdiào suàn le.',vn:'Chẳng phải chỉ là một cái chai rỗng thôi sao? Vứt đi cho xong.'}
   ],
   colloFull:[
     {zh:'算是',py:'suàn shì',vn:'được coi là'},
     {zh:'就算……的',py:'jiù suàn …… de',vn:'cứ coi như là …'},
     {zh:'算了',py:'suàn le',vn:'thôi, bỏ đi'},
     {zh:'算不上',py:'suàn bu shàng',vn:'không đáng gọi là'},
     {zh:'算得上',py:'suàn de shàng',vn:'đáng được coi là'}
   ],
   patterns:[
     {s:'A + 算(是) + B', m:'A được coi là B'},
     {s:'A + 算得上 / 算不上 + B', m:'A đáng / không đáng được coi là B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà hàng này tuy không thể coi là sang trọng, nhưng món ăn rất chuẩn vị.',answer:'这家餐馆虽然算不上豪华，但是菜很地道。',answerPy:'Zhè jiā cānguǎn suīrán suàn bu shàng háohuá, dànshì cài hěn dìdao.',
      note:'算不上 + tính từ: không đáng gọi là ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cậu ấy vừa nghe nói phải xếp hàng một tiếng là bảo: “Thôi bỏ đi.”',answer:'他一听说要排一个小时的队，就说：“算了吧。”',answerPy:'Tā yì tīngshuō yào pái yí ge xiǎoshí de duì, jiù shuō: “Suàn le ba.”',
      note:'算了(吧): thôi, không làm nữa — nghĩa “tác bãi” trong 注释 của sách.',pair:'一……就……'}
   ]},

  {n:5,zh:'地道',py:'dìdao',pos:'Tính từ',vn:'đích thực, chân chính, chính cống',hv:'địa đạo',em:'👌',lesson:9,
   explain:['Đúng chất, chuẩn gốc: đồ ăn chuẩn vị vùng miền, giọng nói chuẩn bản xứ, người sành nghề thật sự.','Đọc thanh nhẹ dìdao. Đọc dìdào thì là “đường hầm” — chính là “địa đạo” trong tiếng Việt.'],
   usage:'地道的 + 普通话 / 北京小吃 / 行家 (bảng 词语搭配). Làm vị ngữ: 他的汉语很地道.',
   collo:['地道的行家','地道的普通话','地道的北京小吃','很地道'],
   ex_zh:'他的普通话说得非常地道。',ex_py:'Tā de pǔtōnghuà shuō de fēicháng dìdao.',ex_vn:'Tiếng phổ thông của anh ấy nói rất chuẩn.',
   exList:[
     {zh:'他的普通话说得非常地道。',py:'Tā de pǔtōnghuà shuō de fēicháng dìdao.',vn:'Tiếng phổ thông của anh ấy nói rất chuẩn.'},
     {zh:'在吃喝这件事上，鲁迅就算是个地道的行家。',py:'Zài chīhē zhè jiàn shì shang, Lǔ Xùn jiù suàn shì ge dìdao de hángjia.',vn:'Trong chuyện ăn uống, Lỗ Tấn cũng được coi là một người sành sỏi thực thụ.'},
     {zh:'来北京一定要尝尝地道的北京小吃。',py:'Lái Běijīng yídìng yào chángchang dìdao de Běijīng xiǎochī.',vn:'Đến Bắc Kinh nhất định phải nếm thử món ăn vặt Bắc Kinh chính gốc.'}
   ],
   colloFull:[
     {zh:'地道的行家',py:'dìdao de hángjia',vn:'người sành nghề thực thụ'},
     {zh:'地道的普通话',py:'dìdao de pǔtōnghuà',vn:'tiếng phổ thông chuẩn'},
     {zh:'地道的北京小吃',py:'dìdao de Běijīng xiǎochī',vn:'món ăn vặt Bắc Kinh chính gốc'},
     {zh:'很地道',py:'hěn dìdao',vn:'rất chuẩn, rất đúng vị'},
     {zh:'做得很地道',py:'zuò de hěn dìdao',vn:'nấu rất chuẩn vị'}
   ],
   patterns:[
     {s:'地道的 + N', m:'… chính gốc, chuẩn (định ngữ)'},
     {s:'V + 得 + 很地道', m:'Làm / nói … rất chuẩn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món đậu phụ Ma Bà này nấu chuẩn vị đến mức ngay cả người Tứ Xuyên cũng khen.',answer:'这道麻婆豆腐做得很地道，连四川人都说好。',answerPy:'Zhè dào mápó dòufu zuò de hěn dìdao, lián Sìchuān rén dōu shuō hǎo.',
      note:'V + 得 + 很地道: bổ ngữ trạng thái.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Chỉ cần ngày nào cũng luyện nói thì tiếng Trung của em sẽ ngày càng chuẩn.',answer:'只要每天练习说，你的汉语就会越来越地道。',answerPy:'Zhǐyào měi tiān liànxí shuō, nǐ de Hànyǔ jiù huì yuè lái yuè dìdao.',
      note:'地道 làm vị ngữ, đi sau 越来越.',pair:'只要……就……'}
   ]},

  {n:6,zh:'行家',py:'hángjia',pos:'Danh từ',vn:'người trong nghề, người thạo nghề',hv:'hàng gia',em:'🧑‍🍳',lesson:9,
   explain:['Người rất am hiểu, rất thạo một việc — như “dân sành”, “người trong nghề”.','行 đọc háng (nghề, ngành) như 银行, 行业; không đọc xíng.'],
   usage:'是个(地道的)行家; 在……方面是行家; ……的行家.',
   collo:['地道的行家','是个行家','……方面的行家'],
   ex_zh:'我爸爸是修车的行家，什么车都会修。',ex_py:'Wǒ bàba shì xiū chē de hángjia, shénme chē dōu huì xiū.',ex_vn:'Bố tôi là dân sành sửa xe, xe gì cũng sửa được.',
   exList:[
     {zh:'我爸爸是修车的行家，什么车都会修。',py:'Wǒ bàba shì xiū chē de hángjia, shénme chē dōu huì xiū.',vn:'Bố tôi là dân sành sửa xe, xe gì cũng sửa được.'},
     {zh:'在吃喝这件事上，鲁迅就算是个地道的行家。',py:'Zài chīhē zhè jiàn shì shang, Lǔ Xùn jiù suàn shì ge dìdao de hángjia.',vn:'Trong chuyện ăn uống, Lỗ Tấn cũng được coi là một người sành sỏi thực thụ.'},
     {zh:'你是电脑方面的行家，帮我看看这个问题吧。',py:'Nǐ shì diànnǎo fāngmiàn de hángjia, bāng wǒ kànkan zhège wèntí ba.',vn:'Cậu là dân thạo máy tính, xem giúp tớ vấn đề này với.'}
   ],
   colloFull:[
     {zh:'地道的行家',py:'dìdao de hángjia',vn:'người sành nghề thực thụ'},
     {zh:'是个行家',py:'shì ge hángjia',vn:'là dân thạo nghề'},
     {zh:'……方面的行家',py:'…… fāngmiàn de hángjia',vn:'người thạo về mặt …'},
     {zh:'美食行家',py:'měishí hángjia',vn:'người sành ăn'}
   ],
   patterns:[
     {s:'Sub + 是 + (lĩnh vực) + 的行家', m:'Ai đó là người thạo về …'},
     {s:'在……方面 + Sub + 是行家', m:'Về mặt … thì ai đó là người trong nghề'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy không những biết ăn mà còn biết nấu, đúng là dân sành ăn.',answer:'他不但会吃，而且会做，真是个美食行家。',answerPy:'Tā búdàn huì chī, érqiě huì zuò, zhēn shì ge měishí hángjia.',
      note:'是个 + 行家: 个 đứng trước danh từ chỉ người trong khẩu ngữ.',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Cái điện thoại này là do một người thạo nghề sửa cho tôi.',answer:'这个手机是一个行家帮我修好的。',answerPy:'Zhège shǒujī shì yí ge hángjia bāng wǒ xiūhǎo de.',
      note:'Nhấn mạnh người làm bằng 是……的.',pair:'是……的'}
   ]},

  {n:7,zh:'亲自',py:'qīnzì',pos:'Phó từ',vn:'tự, đích thân',hv:'thân tự',em:'🙋',lesson:9,
   explain:['Tự mình làm, không nhờ người khác — nhấn mạnh sự coi trọng, thường dùng cho người có địa vị hoặc việc không thường làm.','Là PHÓ TỪ: chỉ đứng giữa chủ ngữ và động từ, không làm chủ ngữ/tân ngữ/định ngữ như 自己.'],
   usage:'Sub + 亲自 + V: 亲自动手做, 亲自参加, 亲自去. Phân biệt với 自己 ở phần 词语辨析.',
   collo:['亲自动手','亲自参加','亲自去','亲自做'],
   ex_zh:'鲁迅不但会吃，还会亲自动手做。',ex_py:'Lǔ Xùn búdàn huì chī, hái huì qīnzì dòngshǒu zuò.',ex_vn:'Lỗ Tấn không những biết ăn mà còn tự tay nấu.',
   exList:[
     {zh:'鲁迅不但会吃，还会亲自动手做。',py:'Lǔ Xùn búdàn huì chī, hái huì qīnzì dòngshǒu zuò.',vn:'Lỗ Tấn không những biết ăn mà còn tự tay nấu.'},
     {zh:'这份礼物是市长亲自为生病的小女孩儿做的。',py:'Zhè fèn lǐwù shì shìzhǎng qīnzì wèi shēngbìng de xiǎo nǚháir zuò de.',vn:'Món quà này là do đích thân thị trưởng làm cho cô bé bị ốm.'},
     {zh:'校长亲自来我们班看望大家。',py:'Xiàozhǎng qīnzì lái wǒmen bān kànwàng dàjiā.',vn:'Thầy hiệu trưởng đích thân đến lớp thăm mọi người.'}
   ],
   colloFull:[
     {zh:'亲自动手',py:'qīnzì dòngshǒu',vn:'tự tay làm'},
     {zh:'亲自参加',py:'qīnzì cānjiā',vn:'đích thân tham gia'},
     {zh:'亲自去',py:'qīnzì qù',vn:'đích thân đi'},
     {zh:'亲自做',py:'qīnzì zuò',vn:'tự làm'},
     {zh:'亲自来',py:'qīnzì lái',vn:'đích thân đến'}
   ],
   patterns:[
     {s:'Sub + 亲自 + V', m:'Ai đó đích thân làm gì'},
     {s:'✗ 亲自的事 → ✓ 自己的事', m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món bánh này là mẹ tôi tự tay làm đấy.',answer:'这个点心是我妈妈亲自做的。',answerPy:'Zhège diǎnxin shì wǒ māma qīnzì zuò de.',
      note:'亲自 đứng ngay trước động từ, trong khung 是……的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Việc này quan trọng quá, ngay cả giám đốc cũng đích thân đến.',answer:'这件事太重要了，连经理都亲自来了。',answerPy:'Zhè jiàn shì tài zhòngyào le, lián jīnglǐ dōu qīnzì lái le.',
      note:'Thứ tự: 都 đứng trước 亲自, 亲自 sát động từ.',pair:'连……都……'}
   ]},

  {n:8,zh:'见解',py:'jiànjiě',pos:'Danh từ',vn:'cách nhìn, quan niệm, kiến giải',hv:'kiến giải',em:'💡',lesson:9,
   explain:['Cách hiểu, nhận xét riêng về một sự việc — thường là suy nghĩ có chiều sâu.'],
   usage:'对……有(独特的)见解; 独特 / 深刻 / 自己的 + 见解. Là DANH TỪ: không nói 很见解.',
   collo:['独特的见解','有见解','自己的见解','对……有见解'],
   ex_zh:'他对许多美食都有独特的见解。',ex_py:'Tā duì xǔduō měishí dōu yǒu dútè de jiànjiě.',ex_vn:'Ông ấy có cách nhìn riêng độc đáo về rất nhiều món ngon.',
   exList:[
     {zh:'他对许多美食都有独特的见解。',py:'Tā duì xǔduō měishí dōu yǒu dútè de jiànjiě.',vn:'Ông ấy có cách nhìn riêng độc đáo về rất nhiều món ngon.'},
     {zh:'这个问题每个人都可以说说自己的见解。',py:'Zhège wèntí měi ge rén dōu kěyǐ shuōshuo zìjǐ de jiànjiě.',vn:'Vấn đề này mỗi người đều có thể nói quan điểm của mình.'},
     {zh:'作为这方面的专家，您对这个问题有什么见解？',py:'Zuòwéi zhè fāngmiàn de zhuānjiā, nín duì zhège wèntí yǒu shénme jiànjiě?',vn:'Là chuyên gia về lĩnh vực này, ông có quan điểm gì về vấn đề này?'}
   ],
   colloFull:[
     {zh:'独特的见解',py:'dútè de jiànjiě',vn:'cách nhìn độc đáo'},
     {zh:'有见解',py:'yǒu jiànjiě',vn:'có chính kiến'},
     {zh:'自己的见解',py:'zìjǐ de jiànjiě',vn:'quan điểm của mình'},
     {zh:'对……有见解',py:'duì …… yǒu jiànjiě',vn:'có cách nhìn về …'},
     {zh:'深刻的见解',py:'shēnkè de jiànjiě',vn:'kiến giải sâu sắc'}
   ],
   patterns:[
     {s:'Sub + 对 + N + 有 + (Adj 的) + 见解', m:'Ai đó có cách nhìn … về …'},
     {s:'✗ 他很见解 → ✓ 他很有见解', m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy tuổi còn nhỏ nhưng rất có chính kiến.',answer:'他虽然年纪小，但是很有见解。',answerPy:'Tā suīrán niánjì xiǎo, dànshì hěn yǒu jiànjiě.',
      note:'很 + 有见解 (không nói 很见解).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cô giáo bảo chúng tôi viết ra quan điểm của mình.',answer:'老师让我们把自己的见解写下来。',answerPy:'Lǎoshī ràng wǒmen bǎ zìjǐ de jiànjiě xiě xiàlái.',
      note:'把 + 自己的见解 + 写下来.',pair:'把'}
   ]},

  {n:9,zh:'近代',py:'jìndài',pos:'Danh từ',vn:'thời cận đại',hv:'cận đại',em:'🕰️',lesson:9,
   explain:['Trong lịch sử Trung Quốc: khoảng từ giữa thế kỷ 19 (1840) đến năm 1919.','Sau đó là 现代 (hiện đại, 1919–1949) và 当代 (đương đại). Học sinh hay nhầm 近代 với 现代.'],
   usage:'近代史, 近代文学, 中国近代, 近代新时尚.',
   collo:['近代史','近代新时尚','中国近代','近代文学'],
   ex_zh:'我对从1840年到1919年的中国近代历史很感兴趣。',ex_py:'Wǒ duì cóng yī bā sì líng nián dào yī jiǔ yī jiǔ nián de Zhōngguó jìndài lìshǐ hěn gǎn xìngqù.',ex_vn:'Tôi rất hứng thú với lịch sử cận đại Trung Quốc từ năm 1840 đến 1919.',
   exList:[
     {zh:'我对从1840年到1919年的中国近代历史很感兴趣。',py:'Wǒ duì cóng yī bā sì líng nián dào yī jiǔ yī jiǔ nián de Zhōngguó jìndài lìshǐ hěn gǎn xìngqù.',vn:'Tôi rất hứng thú với lịch sử cận đại Trung Quốc từ năm 1840 đến 1919.'},
     {zh:'这是近代新时尚。',py:'Zhè shì jìndài xīn shíshàng.',vn:'Đây là một mốt mới thời cận đại.'},
     {zh:'这本书介绍了中国近代的很多名人。',py:'Zhè běn shū jièshàole Zhōngguó jìndài de hěn duō míngrén.',vn:'Cuốn sách này giới thiệu nhiều nhân vật nổi tiếng thời cận đại Trung Quốc.'}
   ],
   colloFull:[
     {zh:'近代史',py:'jìndàishǐ',vn:'lịch sử cận đại'},
     {zh:'近代新时尚',py:'jìndài xīn shíshàng',vn:'mốt mới thời cận đại'},
     {zh:'中国近代',py:'Zhōngguó jìndài',vn:'thời cận đại Trung Quốc'},
     {zh:'近代文学',py:'jìndài wénxué',vn:'văn học cận đại'}
   ],
   patterns:[
     {s:'近代 + N (史 / 文学 / 历史)', m:'… thời cận đại'},
     {s:'古代 → 近代 → 现代 → 当代', m:'Thứ tự các thời kỳ lịch sử'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa từng học lịch sử cận đại Trung Quốc.',answer:'我从来没学过中国近代史。',answerPy:'Wǒ cónglái méi xuéguo Zhōngguó jìndàishǐ.',
      note:'近代史 = lịch sử cận đại.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Chỉ cần hiểu lịch sử cận đại thì sẽ hiểu tác phẩm của Lỗ Tấn tốt hơn.',answer:'只要了解了近代历史，就能更好地理解鲁迅的作品。',answerPy:'Zhǐyào liǎojiěle jìndài lìshǐ, jiù néng gèng hǎo de lǐjiě Lǔ Xùn de zuòpǐn.',
      note:'近代 làm định ngữ cho 历史.',pair:'只要……就……'}
   ]},

  {n:10,zh:'时尚',py:'shíshàng',pos:'Danh từ / Tính từ',vn:'mốt, thời trang; hợp thời',hv:'thời thượng',em:'👗',lesson:9,
   explain:['Danh từ: phong cách, thói quen đang được ưa chuộng trong một thời kỳ — 近代新时尚.','Tính từ: hợp mốt — 她穿得很时尚.'],
   usage:'新时尚, 追求时尚, 时尚杂志; 很时尚.',
   collo:['新时尚','很时尚','追求时尚','时尚杂志'],
   ex_zh:'这是近代新时尚。',ex_py:'Zhè shì jìndài xīn shíshàng.',ex_vn:'Đây là mốt mới thời cận đại.',
   exList:[
     {zh:'这是近代新时尚。',py:'Zhè shì jìndài xīn shíshàng.',vn:'Đây là mốt mới thời cận đại.'},
     {zh:'我姐姐穿衣服很时尚。',py:'Wǒ jiějie chuān yīfu hěn shíshàng.',vn:'Chị tôi ăn mặc rất hợp mốt.'},
     {zh:'现在骑自行车上班成了一种新时尚。',py:'Xiànzài qí zìxíngchē shàngbān chéngle yì zhǒng xīn shíshàng.',vn:'Bây giờ đạp xe đi làm đã trở thành một trào lưu mới.'}
   ],
   colloFull:[
     {zh:'新时尚',py:'xīn shíshàng',vn:'mốt mới, trào lưu mới'},
     {zh:'很时尚',py:'hěn shíshàng',vn:'rất hợp mốt'},
     {zh:'追求时尚',py:'zhuīqiú shíshàng',vn:'chạy theo mốt'},
     {zh:'时尚杂志',py:'shíshàng zázhì',vn:'tạp chí thời trang'}
   ],
   patterns:[
     {s:'……成了一种新时尚', m:'… đã trở thành một trào lưu mới'},
     {s:'Sub + 穿得 + 很时尚', m:'Ai đó ăn mặc rất hợp mốt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chị tôi vừa đi làm là mua rất nhiều quần áo hợp mốt.',answer:'我姐姐一工作就买了很多时尚的衣服。',answerPy:'Wǒ jiějie yì gōngzuò jiù mǎile hěn duō shíshàng de yīfu.',
      note:'时尚 làm định ngữ: 时尚的衣服.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Ăn mặc đơn giản ngày càng trở thành một trào lưu mới.',answer:'穿得简单越来越成为一种新时尚。',answerPy:'Chuān de jiǎndān yuè lái yuè chéngwéi yì zhǒng xīn shíshàng.',
      note:'一种 + 新时尚: 时尚 là danh từ.',pair:'越来越……'}
   ]},

  {n:11,zh:'写作',py:'xiězuò',pos:'Động từ',vn:'sáng tác, viết văn',hv:'tả tác',em:'✍️',lesson:9,
   explain:['Viết văn, viết bài, sáng tác (tác phẩm văn học, bài báo…).'],
   usage:'写作水平 / 写作能力 / 写作课; 从事写作. Không mang tân ngữ cụ thể kiểu 写作一篇文章 (nói 写一篇文章).',
   collo:['写作水平','写作能力','喜欢写作','……写作的日记'],
   ex_zh:'仅从这一时期鲁迅写作的日记中，我们发现他去过的知名餐馆就有65家。',ex_py:'Jǐn cóng zhè yì shíqī Lǔ Xùn xiězuò de rìjì zhōng, wǒmen fāxiàn tā qùguo de zhīmíng cānguǎn jiù yǒu liùshíwǔ jiā.',ex_vn:'Chỉ riêng trong nhật ký Lỗ Tấn viết thời kỳ này, chúng ta đã thấy những nhà hàng nổi tiếng ông từng đến có tới 65 nhà.',
   exList:[
     {zh:'仅从这一时期鲁迅写作的日记中，我们发现他去过的知名餐馆就有65家。',py:'Jǐn cóng zhè yì shíqī Lǔ Xùn xiězuò de rìjì zhōng, wǒmen fāxiàn tā qùguo de zhīmíng cānguǎn jiù yǒu liùshíwǔ jiā.',vn:'Chỉ riêng trong nhật ký Lỗ Tấn viết thời kỳ này, chúng ta đã thấy những nhà hàng nổi tiếng ông từng đến có tới 65 nhà.'},
     {zh:'多读书可以提高写作水平。',py:'Duō dú shū kěyǐ tígāo xiězuò shuǐpíng.',vn:'Đọc nhiều sách có thể nâng cao trình độ viết.'},
     {zh:'她从小就喜欢写作，现在是一位作家。',py:'Tā cóngxiǎo jiù xǐhuan xiězuò, xiànzài shì yí wèi zuòjiā.',vn:'Cô ấy từ nhỏ đã thích viết văn, bây giờ là một nhà văn.'}
   ],
   colloFull:[
     {zh:'写作水平',py:'xiězuò shuǐpíng',vn:'trình độ viết'},
     {zh:'写作能力',py:'xiězuò nénglì',vn:'khả năng viết'},
     {zh:'喜欢写作',py:'xǐhuan xiězuò',vn:'thích viết văn'},
     {zh:'……写作的日记',py:'…… xiězuò de rìjì',vn:'nhật ký do … viết'},
     {zh:'从事写作',py:'cóngshì xiězuò',vn:'làm nghề viết'}
   ],
   patterns:[
     {s:'写作 + 水平 / 能力 / 课', m:'Trình độ / khả năng / giờ học viết'},
     {s:'✗ 写作一篇文章 → ✓ 写一篇文章', m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mỗi ngày viết một chút thì khả năng viết sẽ nâng lên.',answer:'只要每天写一点儿，写作能力就会提高。',answerPy:'Zhǐyào měi tiān xiě yìdiǎnr, xiězuò nénglì jiù huì tígāo.',
      note:'写作 + 能力: danh từ ghép; còn “viết một ít” thì dùng 写.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Trình độ viết của cậu ấy càng ngày càng cao.',answer:'他的写作水平越来越高了。',answerPy:'Tā de xiězuò shuǐpíng yuè lái yuè gāo le.',
      note:'写作水平 = trình độ viết.',pair:'越来越……'}
   ]},

  {n:12,zh:'点心',py:'diǎnxin',pos:'Danh từ',vn:'bánh ngọt, điểm tâm',hv:'điểm tâm',em:'🥮',lesson:9,
   explain:['Các loại bánh nhỏ, đồ ăn nhẹ (bánh ngọt, bánh bao nhỏ…) ăn ngoài bữa chính.'],
   usage:'吃点心, 一盒点心, 传统点心; lượng từ: 块 / 盒 / 种.',
   collo:['吃点心','稻香村的点心','传统点心','一盒点心'],
   ex_zh:'他还很爱吃稻香村的点心。',ex_py:'Tā hái hěn ài chī Dàoxiāngcūn de diǎnxin.',ex_vn:'Ông còn rất thích ăn bánh của tiệm Đạo Hương Thôn.',
   exList:[
     {zh:'他还很爱吃稻香村的点心。',py:'Tā hái hěn ài chī Dàoxiāngcūn de diǎnxin.',vn:'Ông còn rất thích ăn bánh của tiệm Đạo Hương Thôn.'},
     {zh:'你快尝尝这地道的传统点心。',py:'Nǐ kuài chángchang zhè dìdao de chuántǒng diǎnxin.',vn:'Cậu mau nếm thử món bánh truyền thống chính gốc này đi.'},
     {zh:'去看奶奶的时候，我带了一盒点心。',py:'Qù kàn nǎinai de shíhou, wǒ dàile yì hé diǎnxin.',vn:'Lúc đi thăm bà, tôi mang theo một hộp bánh.'}
   ],
   colloFull:[
     {zh:'吃点心',py:'chī diǎnxin',vn:'ăn bánh'},
     {zh:'稻香村的点心',py:'Dàoxiāngcūn de diǎnxin',vn:'bánh của tiệm Đạo Hương Thôn'},
     {zh:'传统点心',py:'chuántǒng diǎnxin',vn:'bánh truyền thống'},
     {zh:'一盒点心',py:'yì hé diǎnxin',vn:'một hộp bánh'}
   ],
   patterns:[
     {s:'一盒 / 一块 + 点心', m:'Một hộp / một miếng bánh'},
     {s:'(地方)的 + 点心', m:'Bánh của tiệm / vùng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bánh của tiệm này ngon đến mức ngay cả ông tôi không thích đồ ngọt cũng ăn hai miếng.',answer:'这家店的点心太好吃了，连不爱吃甜的爷爷都吃了两块。',answerPy:'Zhè jiā diàn de diǎnxin tài hǎochī le, lián bú ài chī tián de yéye dōu chīle liǎng kuài.',
      note:'Lượng từ của 点心: 块, 盒.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Hộp bánh này là bạn tôi mang từ Bắc Kinh về.',answer:'这盒点心是我朋友从北京带回来的。',answerPy:'Zhè hé diǎnxin shì wǒ péngyou cóng Běijīng dài huílái de.',
      note:'Nhấn mạnh nơi chốn bằng 是……的.',pair:'是……的'}
   ]},

  {n:13,zh:'作为',py:'zuòwéi',pos:'Động từ / Giới từ',vn:'coi như; với tư cách là',hv:'tác vi',em:'🎓',lesson:9,
   explain:['Động từ: “看作，认为是……” — coi là, lấy làm: 把那儿作为每晚散步的去处.','Giới từ: dẫn ra thân phận của người hoặc tính chất của sự vật — 作为大作家、大学问家，鲁迅对吃很讲究.'],
   usage:'把 A 作为 B; 作为 + thân phận, + câu chính (chủ ngữ của câu chính phải chính là người mang thân phận đó).',
   collo:['作为学生','把……作为……','作为大作家','作为……的表扬'],
   ex_zh:'作为大作家、大学问家，鲁迅对吃很讲究。',ex_py:'Zuòwéi dà zuòjiā, dà xuéwenjiā, Lǔ Xùn duì chī hěn jiǎngjiu.',ex_vn:'Là nhà văn lớn, nhà học giả lớn, Lỗ Tấn rất cầu kỳ trong chuyện ăn.',
   exList:[
     {zh:'作为大作家、大学问家，鲁迅对吃很讲究。',py:'Zuòwéi dà zuòjiā, dà xuéwenjiā, Lǔ Xùn duì chī hěn jiǎngjiu.',vn:'Là nhà văn lớn, nhà học giả lớn, Lỗ Tấn rất cầu kỳ trong chuyện ăn.'},
     {zh:'北海公园离家最近，所以我把那儿作为每晚散步的去处。',py:'Běihǎi Gōngyuán lí jiā zuì jìn, suǒyǐ wǒ bǎ nàr zuòwéi měi wǎn sànbù de qùchù.',vn:'Công viên Bắc Hải gần nhà nhất, nên tôi lấy đó làm nơi đi dạo mỗi tối.'},
     {zh:'经理要请我去吃顿饭，说是作为我加班的表扬。',py:'Jīnglǐ yào qǐng wǒ qù chī dùn fàn, shuō shì zuòwéi wǒ jiābān de biǎoyáng.',vn:'Giám đốc muốn mời tôi đi ăn một bữa, nói là để khen việc tôi làm thêm giờ.'}
   ],
   colloFull:[
     {zh:'作为学生',py:'zuòwéi xuésheng',vn:'là học sinh'},
     {zh:'把……作为……',py:'bǎ …… zuòwéi ……',vn:'lấy … làm …'},
     {zh:'作为大作家',py:'zuòwéi dà zuòjiā',vn:'với tư cách là nhà văn lớn'},
     {zh:'作为……的表扬',py:'zuòwéi …… de biǎoyáng',vn:'coi như lời khen cho …'},
     {zh:'作为礼物',py:'zuòwéi lǐwù',vn:'làm quà'}
   ],
   patterns:[
     {s:'作为 + thân phận，Sub + V……', m:'Với tư cách là …, ai đó … (giới từ)'},
     {s:'把 + A + 作为 + B', m:'Lấy A làm B / coi A là B (động từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Là học sinh, chúng ta không những phải học giỏi mà còn phải rèn luyện thân thể.',answer:'作为学生，我们不仅要学好功课，而且要锻炼身体。',answerPy:'Zuòwéi xuésheng, wǒmen bùjǐn yào xuéhǎo gōngkè, érqiě yào duànliàn shēntǐ.',
      note:'作为 + thân phận đứng đầu câu; chủ ngữ 我们 chính là 学生.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Tôi lấy cuốn sách này làm quà sinh nhật tặng em gái.',answer:'我把这本书作为生日礼物送给了妹妹。',answerPy:'Wǒ bǎ zhè běn shū zuòwéi shēngrì lǐwù sòng gěile mèimei.',
      note:'把 A 作为 B: lấy A làm B.',pair:'把'}
   ]},

  {n:14,zh:'学问',py:'xuéwen',pos:'Danh từ',vn:'tri thức, học thức, học vấn',hv:'học vấn',em:'🧠',lesson:9,
   explain:['Kiến thức có hệ thống, hiểu biết sâu rộng. 大学问家 = nhà học giả lớn.','Đọc thanh nhẹ: xuéwen.'],
   usage:'有学问, 很有学问, 做学问, 大学问家. Khẩu ngữ: 这里面学问可大了 (chuyện này có nhiều điều phải học lắm).',
   collo:['有学问','很有学问','大学问家','做学问'],
   ex_zh:'我们的语文老师很有学问。',ex_py:'Wǒmen de yǔwén lǎoshī hěn yǒu xuéwen.',ex_vn:'Thầy dạy ngữ văn của chúng tôi rất uyên bác.',
   exList:[
     {zh:'我们的语文老师很有学问。',py:'Wǒmen de yǔwén lǎoshī hěn yǒu xuéwen.',vn:'Thầy dạy ngữ văn của chúng tôi rất uyên bác.'},
     {zh:'作为大作家、大学问家，鲁迅对吃很讲究。',py:'Zuòwéi dà zuòjiā, dà xuéwenjiā, Lǔ Xùn duì chī hěn jiǎngjiu.',vn:'Là nhà văn lớn, nhà học giả lớn, Lỗ Tấn rất cầu kỳ trong chuyện ăn.'},
     {zh:'别小看做饭，这里面的学问可大了。',py:'Bié xiǎokàn zuòfàn, zhè lǐmiàn de xuéwen kě dà le.',vn:'Đừng coi thường việc nấu ăn, trong đó có nhiều điều phải học lắm.'}
   ],
   colloFull:[
     {zh:'有学问',py:'yǒu xuéwen',vn:'có học thức'},
     {zh:'很有学问',py:'hěn yǒu xuéwen',vn:'rất uyên bác'},
     {zh:'大学问家',py:'dà xuéwenjiā',vn:'nhà học giả lớn'},
     {zh:'做学问',py:'zuò xuéwen',vn:'làm nghiên cứu, làm học thuật'}
   ],
   patterns:[
     {s:'Sub + 很有学问', m:'Ai đó rất uyên bác'},
     {s:'……里面的学问很大', m:'Trong … có nhiều điều phải học'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy tuy rất uyên bác nhưng chưa bao giờ coi thường người khác.',answer:'他虽然很有学问，但是从来不看不起别人。',answerPy:'Tā suīrán hěn yǒu xuéwen, dànshì cónglái bú kànbuqǐ biérén.',
      note:'很 + 有学问 (không nói 很学问).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Ngay cả việc pha trà cũng có rất nhiều điều phải học.',answer:'连泡茶都有很大的学问。',answerPy:'Lián pào chá dōu yǒu hěn dà de xuéwen.',
      note:'有学问 / 学问很大: trong việc gì có nhiều tri thức.',pair:'连……都……'}
   ]},

  {n:15,zh:'讲究',py:'jiǎngjiu',pos:'Động từ / Tính từ',vn:'chú ý, chú trọng; cầu kỳ, đẹp đẽ',hv:'giảng cứu',em:'🍽️',lesson:9,
   explain:['Động từ: coi trọng, đòi hỏi cao về một mặt nào đó — 讲究吃 / 穿 / 卫生 / 方法.','Tính từ: cầu kỳ, tinh tế — 对吃很讲究. Danh từ (khẩu ngữ): điều cần chú ý — 在使用上有很多讲究.'],
   usage:'Bảng 词语搭配: 讲究 + 吃 / 穿 / 卫生 / 方法. Mẫu tính từ: 对 + N + 很讲究.',
   collo:['讲究吃','讲究穿','讲究卫生','讲究方法','对吃很讲究'],
   ex_zh:'作为大作家、大学问家，鲁迅对吃很讲究。',ex_py:'Zuòwéi dà zuòjiā, dà xuéwenjiā, Lǔ Xùn duì chī hěn jiǎngjiu.',ex_vn:'Là nhà văn lớn, nhà học giả lớn, Lỗ Tấn rất cầu kỳ trong chuyện ăn.',
   exList:[
     {zh:'作为大作家、大学问家，鲁迅对吃很讲究。',py:'Zuòwéi dà zuòjiā, dà xuéwenjiā, Lǔ Xùn duì chī hěn jiǎngjiu.',vn:'Là nhà văn lớn, nhà học giả lớn, Lỗ Tấn rất cầu kỳ trong chuyện ăn.'},
     {zh:'学习要讲究方法，不能只靠时间。',py:'Xuéxí yào jiǎngjiu fāngfǎ, bù néng zhǐ kào shíjiān.',vn:'Học phải chú trọng phương pháp, không thể chỉ dựa vào thời gian.'},
     {zh:'筷子是中餐最主要的进餐用具，在使用上也有很多讲究。',py:'Kuàizi shì zhōngcān zuì zhǔyào de jìncān yòngjù, zài shǐyòng shang yě yǒu hěn duō jiǎngjiu.',vn:'Đũa là dụng cụ ăn chủ yếu nhất của món Trung, cách dùng cũng có rất nhiều điều phải chú ý.'}
   ],
   colloFull:[
     {zh:'讲究吃',py:'jiǎngjiu chī',vn:'cầu kỳ chuyện ăn'},
     {zh:'讲究穿',py:'jiǎngjiu chuān',vn:'chú trọng ăn mặc'},
     {zh:'讲究卫生',py:'jiǎngjiu wèishēng',vn:'giữ vệ sinh'},
     {zh:'讲究方法',py:'jiǎngjiu fāngfǎ',vn:'chú trọng phương pháp'},
     {zh:'对吃很讲究',py:'duì chī hěn jiǎngjiu',vn:'rất cầu kỳ chuyện ăn'}
   ],
   patterns:[
     {s:'讲究 + N (吃 / 穿 / 卫生 / 方法)', m:'Chú trọng … (động từ)'},
     {s:'Sub + 对 + N + 很讲究', m:'Ai đó rất cầu kỳ về … (tính từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ tôi rất chú trọng vệ sinh, chúng tôi vừa về đến nhà là mẹ bắt rửa tay.',answer:'我妈妈很讲究卫生，我们一回家她就让我们洗手。',answerPy:'Wǒ māma hěn jiǎngjiu wèishēng, wǒmen yì huí jiā tā jiù ràng wǒmen xǐ shǒu.',
      note:'讲究 + 卫生: cụm cố định trong bảng 词语搭配.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Ông tôi không những cầu kỳ chuyện ăn mà còn rất chú trọng ăn mặc.',answer:'我爷爷不仅对吃很讲究，也很讲究穿。',answerPy:'Wǒ yéye bùjǐn duì chī hěn jiǎngjiu, yě hěn jiǎngjiu chuān.',
      note:'对 + N + 很讲究 (tính từ) và 讲究 + N (động từ).',pair:'不仅……也……'}
   ]},

  {n:16,zh:'平均',py:'píngjūn',pos:'Động từ / Tính từ',vn:'tính trung bình, bình quân; đều nhau',hv:'bình quân',em:'⚖️',lesson:9,
   explain:['Chia đều, tính bình quân: 平均每周去一次 (trung bình mỗi tuần một lần).','Tính từ: đều, ngang nhau — 分得很平均.'],
   usage:'平均 + 每 + thời gian + V + số lần; 平均数, 平均分, 平均年龄, 平均收入.',
   collo:['平均每周','平均数','平均分','平均年龄'],
   ex_zh:'鲁迅去得最多、最喜欢的是广和居，平均每周都要去一次。',ex_py:'Lǔ Xùn qù de zuì duō, zuì xǐhuan de shì Guǎnghéjū, píngjūn měi zhōu dōu yào qù yí cì.',ex_vn:'Nơi Lỗ Tấn đến nhiều nhất, thích nhất là Quảng Hòa Cư, trung bình tuần nào cũng đi một lần.',
   exList:[
     {zh:'鲁迅去得最多、最喜欢的是广和居，平均每周都要去一次。',py:'Lǔ Xùn qù de zuì duō, zuì xǐhuan de shì Guǎnghéjū, píngjūn měi zhōu dōu yào qù yí cì.',vn:'Nơi Lỗ Tấn đến nhiều nhất, thích nhất là Quảng Hòa Cư, trung bình tuần nào cũng đi một lần.'},
     {zh:'他平均每两个星期要招待一次客人。',py:'Tā píngjūn měi liǎng ge xīngqī yào zhāodài yí cì kèrén.',vn:'Trung bình cứ hai tuần anh ấy lại tiếp khách một lần.'},
     {zh:'这次考试我们班的平均分是85分。',py:'Zhè cì kǎoshì wǒmen bān de píngjūnfēn shì bāshíwǔ fēn.',vn:'Kỳ thi này điểm trung bình của lớp tôi là 85.'}
   ],
   colloFull:[
     {zh:'平均每周',py:'píngjūn měi zhōu',vn:'trung bình mỗi tuần'},
     {zh:'平均数',py:'píngjūnshù',vn:'số trung bình'},
     {zh:'平均分',py:'píngjūnfēn',vn:'điểm trung bình'},
     {zh:'平均年龄',py:'píngjūn niánlíng',vn:'tuổi trung bình'},
     {zh:'分得很平均',py:'fēn de hěn píngjūn',vn:'chia rất đều'}
   ],
   patterns:[
     {s:'Sub + 平均 + 每 + thời gian + V + số lần', m:'Trung bình cứ … lại làm … lần'},
     {s:'……的平均 + 数 / 分 / 年龄', m:'Số / điểm / tuổi trung bình của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần trung bình mỗi ngày học 20 từ mới thì một tháng có thể học được 600 từ.',answer:'只要平均每天学二十个生词，一个月就能学六百个。',answerPy:'Zhǐyào píngjūn měi tiān xué èrshí ge shēngcí, yí ge yuè jiù néng xué liùbǎi ge.',
      note:'平均 + 每天 + V + số lượng.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Điểm trung bình của kỳ thi này là do thầy giáo tính ra.',answer:'这次考试的平均分是老师算出来的。',answerPy:'Zhè cì kǎoshì de píngjūnfēn shì lǎoshī suàn chūlái de.',
      note:'平均分: điểm trung bình; 算出来 = tính ra (nghĩa gốc của 算).',pair:'是……的'}
   ]},

  {n:17,zh:'胡同',py:'hútòng',pos:'Danh từ',vn:'ngõ, hẻm (ở Bắc Kinh)',hv:'hồ đồng',em:'🏘️',lesson:9,
   explain:['Ngõ nhỏ giữa các dãy nhà — đặc trưng của Bắc Kinh cũ.','Lượng từ: 条 hoặc 个 (bảng 词语搭配: 一条 / 个 + 胡同).'],
   usage:'一条胡同, 住在胡同里, 胡同口, 北京胡同.',
   collo:['一条胡同','北京胡同','住在胡同里','胡同口'],
   ex_zh:'广和居的大门就在他当时住的胡同的斜对面。',ex_py:'Guǎnghéjū de dàmén jiù zài tā dāngshí zhù de hútòng de xié duìmiàn.',ex_vn:'Cổng Quảng Hòa Cư nằm ngay chéo đối diện con ngõ ông ở lúc bấy giờ.',
   exList:[
     {zh:'广和居的大门就在他当时住的胡同的斜对面。',py:'Guǎnghéjū de dàmén jiù zài tā dāngshí zhù de hútòng de xié duìmiàn.',vn:'Cổng Quảng Hòa Cư nằm ngay chéo đối diện con ngõ ông ở lúc bấy giờ.'},
     {zh:'我爷爷在北京的一条老胡同里住了几十年。',py:'Wǒ yéye zài Běijīng de yì tiáo lǎo hútòng li zhùle jǐ shí nián.',vn:'Ông tôi sống mấy chục năm trong một con ngõ cổ ở Bắc Kinh.'},
     {zh:'胡同口有一家卖点心的小店。',py:'Hútòng kǒu yǒu yì jiā mài diǎnxin de xiǎo diàn.',vn:'Đầu ngõ có một tiệm nhỏ bán bánh.'}
   ],
   colloFull:[
     {zh:'一条胡同',py:'yì tiáo hútòng',vn:'một con ngõ'},
     {zh:'北京胡同',py:'Běijīng hútòng',vn:'ngõ Bắc Kinh'},
     {zh:'住在胡同里',py:'zhù zài hútòng li',vn:'sống trong ngõ'},
     {zh:'胡同口',py:'hútòng kǒu',vn:'đầu ngõ'}
   ],
   patterns:[
     {s:'一条 / 一个 + 胡同', m:'Lượng từ của 胡同'},
     {s:'住在 + 胡同里', m:'Sống trong ngõ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngõ này hẹp đến mức ngay cả ô tô cũng không vào được.',answer:'这条胡同太窄了，连汽车都开不进去。',answerPy:'Zhè tiáo hútòng tài zhǎi le, lián qìchē dōu kāi bu jìnqù.',
      note:'这条 + 胡同: lượng từ 条 cho vật dài.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tôi vừa đến Bắc Kinh là đi dạo ngõ cổ.',answer:'我一到北京就去逛老胡同。',answerPy:'Wǒ yí dào Běijīng jiù qù guàng lǎo hútòng.',
      note:'逛胡同 = đi dạo trong ngõ.',pair:'一……就……'}
   ]},

  {n:18,zh:'位于',py:'wèiyú',pos:'Động từ',vn:'nằm ở, ở vào',hv:'vị vu',em:'📍',lesson:9,
   explain:['Nằm ở vị trí nào đó — cách nói trang trọng, văn viết của 在.'],
   usage:'A + 位于 + nơi chốn; 位于……的 + N (làm định ngữ, như trong bài). Không dùng cho người.',
   collo:['位于……附近','位于市中心','位于北京'],
   ex_zh:'位于菜市口附近的广和居是北京“八大居”之首。',ex_py:'Wèiyú Càishìkǒu fùjìn de Guǎnghéjū shì Běijīng “bā dà jū” zhī shǒu.',ex_vn:'Quảng Hòa Cư nằm gần Thái Thị Khẩu là quán đứng đầu “tám đại cư” của Bắc Kinh.',
   exList:[
     {zh:'位于菜市口附近的广和居是北京“八大居”之首。',py:'Wèiyú Càishìkǒu fùjìn de Guǎnghéjū shì Běijīng “bā dà jū” zhī shǒu.',vn:'Quảng Hòa Cư nằm gần Thái Thị Khẩu là quán đứng đầu “tám đại cư” của Bắc Kinh.'},
     {zh:'我们学校位于市中心，交通很方便。',py:'Wǒmen xuéxiào wèiyú shì zhōngxīn, jiāotōng hěn fāngbiàn.',vn:'Trường chúng tôi nằm ở trung tâm thành phố, giao thông rất thuận tiện.'},
     {zh:'越南位于东南亚。',py:'Yuènán wèiyú Dōngnányà.',vn:'Việt Nam nằm ở Đông Nam Á.'}
   ],
   colloFull:[
     {zh:'位于……附近',py:'wèiyú …… fùjìn',vn:'nằm gần …'},
     {zh:'位于市中心',py:'wèiyú shì zhōngxīn',vn:'nằm ở trung tâm thành phố'},
     {zh:'位于北京',py:'wèiyú Běijīng',vn:'nằm ở Bắc Kinh'},
     {zh:'位于东南亚',py:'wèiyú Dōngnányà',vn:'nằm ở Đông Nam Á'}
   ],
   patterns:[
     {s:'A + 位于 + nơi chốn', m:'A nằm ở … (văn viết)'},
     {s:'位于 + nơi chốn + 的 + N', m:'… nằm ở … (làm định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khách sạn này tuy nằm ở trung tâm thành phố nhưng giá không đắt.',answer:'这家酒店虽然位于市中心，但是价格不贵。',answerPy:'Zhè jiā jiǔdiàn suīrán wèiyú shì zhōngxīn, dànshì jiàgé bú guì.',
      note:'位于 + nơi chốn: không thêm 在 sau 位于.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Nhà hàng nằm gần trường này được học sinh bình chọn là quán ngon nhất.',answer:'这家位于学校附近的餐馆被学生们评为最好吃的饭馆。',answerPy:'Zhè jiā wèiyú xuéxiào fùjìn de cānguǎn bèi xuéshengmen píngwéi zuì hǎochī de fànguǎn.',
      note:'位于……的 + N làm định ngữ.',pair:'被'}
   ]},

  {n:19,zh:'首',py:'shǒu',pos:'Danh từ / Lượng từ',vn:'người (vật) đứng đầu; bài (thơ, hát)',hv:'thủ',em:'🥇',lesson:9,
   explain:['Danh từ (văn viết): vị trí thứ nhất, đứng đầu — ……之首.','Lượng từ cho bài hát, bài thơ: 一首歌, 一首诗 (bảng 词语搭配).'],
   usage:'A 是 B 之首 (A đứng đầu nhóm B); 一首 + 歌 / 诗.',
   collo:['……之首','一首歌','一首诗','八大居之首'],
   ex_zh:'位于菜市口附近的广和居是北京“八大居”之首。',ex_py:'Wèiyú Càishìkǒu fùjìn de Guǎnghéjū shì Běijīng “bā dà jū” zhī shǒu.',ex_vn:'Quảng Hòa Cư nằm gần Thái Thị Khẩu là quán đứng đầu “tám đại cư” của Bắc Kinh.',
   exList:[
     {zh:'位于菜市口附近的广和居是北京“八大居”之首。',py:'Wèiyú Càishìkǒu fùjìn de Guǎnghéjū shì Běijīng “bā dà jū” zhī shǒu.',vn:'Quảng Hòa Cư nằm gần Thái Thị Khẩu là quán đứng đầu “tám đại cư” của Bắc Kinh.'},
     {zh:'刘半农1920年写了一首题为《教我如何不想她》的小诗，流传至今。',py:'Liú Bànnóng yī jiǔ èr líng nián xiěle yì shǒu tí wéi 《Jiào wǒ rúhé bù xiǎng tā》 de xiǎo shī, liúchuán zhìjīn.',vn:'Năm 1920 Lưu Bán Nông viết một bài thơ ngắn tên “Dạy tôi làm sao không nhớ cô ấy”, lưu truyền đến nay.'},
     {zh:'这首歌我听了很多遍，还是很喜欢。',py:'Zhè shǒu gē wǒ tīngle hěn duō biàn, háishi hěn xǐhuan.',vn:'Bài hát này tôi nghe nhiều lần rồi mà vẫn rất thích.'}
   ],
   colloFull:[
     {zh:'……之首',py:'…… zhī shǒu',vn:'đứng đầu …'},
     {zh:'一首歌',py:'yì shǒu gē',vn:'một bài hát'},
     {zh:'一首诗',py:'yì shǒu shī',vn:'một bài thơ'},
     {zh:'八大居之首',py:'bā dà jū zhī shǒu',vn:'đứng đầu tám đại cư'},
     {zh:'位居行业之首',py:'wèi jū hángyè zhī shǒu',vn:'đứng đầu ngành'}
   ],
   patterns:[
     {s:'A + 是 + B + 之首', m:'A đứng đầu B'},
     {s:'一首 + 歌 / 诗', m:'Một bài hát / bài thơ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài thơ này là tôi tự viết đấy.',answer:'这首诗是我自己写的。',answerPy:'Zhè shǒu shī shì wǒ zìjǐ xiě de.',
      note:'首 là lượng từ của 诗, 歌.',pair:'是……的'},
     {promptLang:'vi',prompt:'Cô ấy vừa nghe bài hát này là khóc.',answer:'她一听这首歌就哭了。',answerPy:'Tā yì tīng zhè shǒu gē jiù kū le.',
      note:'这首歌: không nói 这个歌 trong văn viết.',pair:'一……就……'}
   ]},

  {n:20,zh:'豪华',py:'háohuá',pos:'Tính từ',vn:'sang trọng, lộng lẫy, xa hoa',hv:'hào hoa',em:'💎',lesson:9,
   explain:['Dùng cho đồ vật, nơi chốn: rất sang trọng, tốn kém — 豪华的酒店, 豪华装修.','BẪY: “hào hoa” tiếng Việt thường tả NGƯỜI (hào hoa phong nhã); 豪华 tiếng Trung tả ĐỒ VẬT, NƠI CHỐN.'],
   usage:'豪华的 + 酒店 / 汽车; 很豪华; 算不上豪华.',
   collo:['豪华的酒店','算不上豪华','很豪华','豪华装修'],
   ex_zh:'广和居算不上豪华，但却很适合朋友在这里聚会、热闹。',ex_py:'Guǎnghéjū suàn bu shàng háohuá, dàn què hěn shìhé péngyou zài zhèlǐ jùhuì, rènao.',ex_vn:'Quảng Hòa Cư không thể coi là sang trọng, nhưng lại rất hợp để bạn bè tụ họp vui vẻ ở đây.',
   exList:[
     {zh:'广和居算不上豪华，但却很适合朋友在这里聚会、热闹。',py:'Guǎnghéjū suàn bu shàng háohuá, dàn què hěn shìhé péngyou zài zhèlǐ jùhuì, rènao.',vn:'Quảng Hòa Cư không thể coi là sang trọng, nhưng lại rất hợp để bạn bè tụ họp vui vẻ ở đây.'},
     {zh:'这家酒店非常豪华，住一晚要两千块。',py:'Zhè jiā jiǔdiàn fēicháng háohuá, zhù yì wǎn yào liǎngqiān kuài.',vn:'Khách sạn này vô cùng sang trọng, ở một đêm mất hai nghìn tệ.'},
     {zh:'婚礼不一定要办得很豪华。',py:'Hūnlǐ bù yídìng yào bàn de hěn háohuá.',vn:'Đám cưới không nhất thiết phải tổ chức thật xa hoa.'}
   ],
   colloFull:[
     {zh:'豪华的酒店',py:'háohuá de jiǔdiàn',vn:'khách sạn sang trọng'},
     {zh:'算不上豪华',py:'suàn bu shàng háohuá',vn:'không thể gọi là sang trọng'},
     {zh:'很豪华',py:'hěn háohuá',vn:'rất sang trọng'},
     {zh:'豪华装修',py:'háohuá zhuāngxiū',vn:'trang trí nội thất xa hoa'}
   ],
   patterns:[
     {s:'豪华的 + N (nơi chốn / đồ vật)', m:'… sang trọng'},
     {s:'✗ 他是一个豪华的人 → ✓ 他生活很豪华 / 他很大方', m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà hàng này tuy rất sang trọng nhưng món ăn không ngon.',answer:'这家饭馆虽然很豪华，但是菜不好吃。',answerPy:'Zhè jiā fànguǎn suīrán hěn háohuá, dànshì cài bù hǎochī.',
      note:'豪华 tả nơi chốn.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Căn nhà của họ càng sửa càng xa hoa.',answer:'他们的房子装修得越来越豪华了。',answerPy:'Tāmen de fángzi zhuāngxiū de yuè lái yuè háohuá le.',
      note:'V + 得 + 越来越 + 豪华.',pair:'越来越……'}
   ]},

  {n:21,zh:'光临',py:'guānglín',pos:'Động từ',vn:'đến dự, hạ cố tới (lời kính trọng)',hv:'quang lâm',em:'🚪',lesson:9,
   explain:['Lời lịch sự, tôn trọng khi nói khách đến: 欢迎光临 (hân hạnh đón tiếp).','Chủ ngữ là KHÁCH; không dùng cho chính mình (✗ 我明天光临你家).'],
   usage:'欢迎光临; 欢迎……的光临; 光临本店.',
   collo:['欢迎光临','文人的光临','光临本店'],
   ex_zh:'这里特别欢迎文人的光临。',ex_py:'Zhèlǐ tèbié huānyíng wénrén de guānglín.',ex_vn:'Nơi đây đặc biệt chào đón các văn nhân ghé đến.',
   exList:[
     {zh:'这里特别欢迎文人的光临。',py:'Zhèlǐ tèbié huānyíng wénrén de guānglín.',vn:'Nơi đây đặc biệt chào đón các văn nhân ghé đến.'},
     {zh:'欢迎光临！请问几位？',py:'Huānyíng guānglín! Qǐngwèn jǐ wèi?',vn:'Hân hạnh chào đón quý khách! Xin hỏi mấy người ạ?'},
     {zh:'感谢各位光临本店，今天所有点心打八折。',py:'Gǎnxiè gè wèi guānglín běn diàn, jīntiān suǒyǒu diǎnxin dǎ bā zhé.',vn:'Cảm ơn quý vị đã ghé cửa hàng, hôm nay tất cả các loại bánh giảm 20%.'}
   ],
   colloFull:[
     {zh:'欢迎光临',py:'huānyíng guānglín',vn:'hân hạnh chào đón'},
     {zh:'文人的光临',py:'wénrén de guānglín',vn:'sự ghé đến của văn nhân'},
     {zh:'光临本店',py:'guānglín běn diàn',vn:'ghé cửa hàng'},
     {zh:'欢迎您的光临',py:'huānyíng nín de guānglín',vn:'chào đón quý khách'}
   ],
   patterns:[
     {s:'欢迎 + (Sub 的) + 光临', m:'Chào đón (ai) đến'},
     {s:'✗ 我光临你家 → ✓ 我去你家拜访', m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khách vừa bước vào, nhân viên liền nói “Hân hạnh chào đón quý khách!”.',answer:'客人一进门，服务员就说：“欢迎光临！”',answerPy:'Kèrén yí jìn mén, fúwùyuán jiù shuō: “Huānyíng guānglín!”',
      note:'欢迎光临: câu chào cố định ở cửa hàng.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cảm ơn mọi người đã đến, ngay cả thầy hiệu trưởng cũng đến xem buổi biểu diễn của chúng tôi.',answer:'感谢大家的光临，连校长都来看我们的演出了。',answerPy:'Gǎnxiè dàjiā de guānglín, lián xiàozhǎng dōu lái kàn wǒmen de yǎnchū le.',
      note:'……的光临: danh từ hoá, trang trọng.',pair:'连……都……'}
   ]},

  {n:22,zh:'交际',py:'jiāojì',pos:'Danh từ',vn:'xã giao, sự giao thiệp',hv:'giao tế',em:'🤝',lesson:9,
   explain:['Việc qua lại, tiếp xúc với người khác trong xã hội.'],
   usage:'爱好 / 善于 + 交际; 交际能力; 社会交际.',
   collo:['爱好交际','善于交际','交际能力','社会交际'],
   ex_zh:'他爱好交际，大方好客，常呼朋唤友。',ex_py:'Tā àihào jiāojì, dàfang hàokè, cháng hūpéng huànyǒu.',ex_vn:'Ông thích giao du, rộng rãi mến khách, hay rủ rê bạn bè.',
   exList:[
     {zh:'他爱好交际，大方好客，常呼朋唤友。',py:'Tā àihào jiāojì, dàfang hàokè, cháng hūpéng huànyǒu.',vn:'Ông thích giao du, rộng rãi mến khách, hay rủ rê bạn bè.'},
     {zh:'她很善于交际，到哪儿都能交到朋友。',py:'Tā hěn shànyú jiāojì, dào nǎr dōu néng jiāodào péngyou.',vn:'Cô ấy rất giỏi giao tiếp, đi đâu cũng kết được bạn.'},
     {zh:'学好外语能提高我们的交际能力。',py:'Xuéhǎo wàiyǔ néng tígāo wǒmen de jiāojì nénglì.',vn:'Học giỏi ngoại ngữ có thể nâng cao khả năng giao tiếp của chúng ta.'}
   ],
   colloFull:[
     {zh:'爱好交际',py:'àihào jiāojì',vn:'thích giao du'},
     {zh:'善于交际',py:'shànyú jiāojì',vn:'giỏi giao tiếp'},
     {zh:'交际能力',py:'jiāojì nénglì',vn:'khả năng giao tiếp'},
     {zh:'社会交际',py:'shèhuì jiāojì',vn:'giao tiếp xã hội'}
   ],
   patterns:[
     {s:'Sub + 爱好 / 善于 + 交际', m:'Ai đó thích / giỏi giao tiếp'},
     {s:'交际 + 能力 / 圈', m:'Khả năng / vòng giao tiếp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy không giỏi giao tiếp nhưng đối xử với bạn bè rất chân thành.',answer:'他虽然不善于交际，但是对朋友很真诚。',answerPy:'Tā suīrán bú shànyú jiāojì, dànshì duì péngyou hěn zhēnchéng.',
      note:'善于 + 交际: giỏi giao tiếp.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Tham gia câu lạc bộ không những kết được bạn mà còn nâng cao được khả năng giao tiếp.',answer:'参加俱乐部不仅能交朋友，也能提高交际能力。',answerPy:'Cānjiā jùlèbù bùjǐn néng jiāo péngyou, yě néng tígāo jiāojì nénglì.',
      note:'交际能力: cụm danh từ cố định.',pair:'不仅……也……'}
   ]},

  {n:23,zh:'大方',py:'dàfang',pos:'Tính từ',vn:'rộng rãi, hào phóng; tự nhiên',hv:'đại phương',em:'🎁',lesson:9,
   explain:['Rộng rãi, không tiếc tiền của — 大方好客.','Còn nghĩa: cử chỉ tự nhiên, không rụt rè; ăn mặc trang nhã (穿得很大方). Đọc thanh nhẹ dàfang; đọc dàfāng là “người trong nghề, chuyên gia”.'],
   usage:'很大方, 大方好客, 大大方方地 + V, 穿得很大方.',
   collo:['大方好客','很大方','穿得大方','大大方方'],
   ex_zh:'他爱好交际，大方好客，常呼朋唤友。',ex_py:'Tā àihào jiāojì, dàfang hàokè, cháng hūpéng huànyǒu.',ex_vn:'Ông thích giao du, rộng rãi mến khách, hay rủ rê bạn bè.',
   exList:[
     {zh:'他爱好交际，大方好客，常呼朋唤友。',py:'Tā àihào jiāojì, dàfang hàokè, cháng hūpéng huànyǒu.',vn:'Ông thích giao du, rộng rãi mến khách, hay rủ rê bạn bè.'},
     {zh:'我同桌很大方，常常把零食分给大家。',py:'Wǒ tóngzhuō hěn dàfang, chángcháng bǎ língshí fēn gěi dàjiā.',vn:'Bạn cùng bàn tôi rất hào phóng, hay chia đồ ăn vặt cho mọi người.'},
     {zh:'上台以后，她大大方方地做了自我介绍。',py:'Shàngtái yǐhòu, tā dàdafāngfāng de zuòle zìwǒ jièshào.',vn:'Lên sân khấu, cô ấy tự nhiên giới thiệu bản thân.'}
   ],
   colloFull:[
     {zh:'大方好客',py:'dàfang hàokè',vn:'rộng rãi mến khách'},
     {zh:'很大方',py:'hěn dàfang',vn:'rất hào phóng'},
     {zh:'穿得大方',py:'chuān de dàfang',vn:'ăn mặc trang nhã'},
     {zh:'大大方方',py:'dàdafāngfāng',vn:'tự nhiên, không rụt rè'}
   ],
   patterns:[
     {s:'Sub + 对 + người + 很大方', m:'Ai đó rộng rãi với ai'},
     {s:'大大方方地 + V', m:'Làm gì một cách tự nhiên, không ngại ngùng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy tuy rất hào phóng với bạn bè nhưng với bản thân lại rất tiết kiệm.',answer:'他虽然对朋友很大方，但是对自己很节约。',answerPy:'Tā suīrán duì péngyou hěn dàfang, dànshì duì zìjǐ hěn jiéyuē.',
      note:'对 + người + 很大方.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chị ấy được mọi người khen ăn mặc rất trang nhã.',answer:'她被大家夸穿得很大方。',answerPy:'Tā bèi dàjiā kuā chuān de hěn dàfang.',
      note:'穿得很大方: ăn mặc trang nhã, không lòe loẹt.',pair:'被'}
   ]},

  {n:24,zh:'好客',py:'hàokè',pos:'Động từ',vn:'hiếu khách, mến khách',hv:'hiếu khách',em:'🏡',lesson:9,
   explain:['Thích tiếp đãi khách, đối xử nhiệt tình với khách.','好 ở đây đọc hào (thích) như 爱好; không đọc hǎo.'],
   usage:'热情好客, 大方好客, 好客的主人.',
   collo:['热情好客','大方好客','好客的主人'],
   ex_zh:'越南人热情好客，常常请朋友到家里吃饭。',ex_py:'Yuènánrén rèqíng hàokè, chángcháng qǐng péngyou dào jiā li chīfàn.',ex_vn:'Người Việt Nam nhiệt tình hiếu khách, hay mời bạn bè đến nhà ăn cơm.',
   exList:[
     {zh:'越南人热情好客，常常请朋友到家里吃饭。',py:'Yuènánrén rèqíng hàokè, chángcháng qǐng péngyou dào jiā li chīfàn.',vn:'Người Việt Nam nhiệt tình hiếu khách, hay mời bạn bè đến nhà ăn cơm.'},
     {zh:'他爱好交际，大方好客，常呼朋唤友。',py:'Tā àihào jiāojì, dàfang hàokè, cháng hūpéng huànyǒu.',vn:'Ông thích giao du, rộng rãi mến khách, hay rủ rê bạn bè.'},
     {zh:'好客的主人做了一大桌菜。',py:'Hàokè de zhǔrén zuòle yí dà zhuō cài.',vn:'Chủ nhà hiếu khách nấu cả một bàn đầy thức ăn.'}
   ],
   colloFull:[
     {zh:'热情好客',py:'rèqíng hàokè',vn:'nhiệt tình hiếu khách'},
     {zh:'大方好客',py:'dàfang hàokè',vn:'rộng rãi mến khách'},
     {zh:'好客的主人',py:'hàokè de zhǔrén',vn:'chủ nhà hiếu khách'},
     {zh:'非常好客',py:'fēicháng hàokè',vn:'rất hiếu khách'}
   ],
   patterns:[
     {s:'Sub + 热情好客', m:'Ai đó nhiệt tình hiếu khách'},
     {s:'好客的 + N', m:'… hiếu khách (định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người ở đây rất hiếu khách, vừa thấy khách là mời vào nhà uống trà.',answer:'这里的人很好客，一看见客人就请他们进家喝茶。',answerPy:'Zhèlǐ de rén hěn hàokè, yí kànjiàn kèrén jiù qǐng tāmen jìn jiā hē chá.',
      note:'好客 đọc hàokè.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chủ nhà rất hiếu khách, ngay cả người lạ cũng mời vào nhà ăn cơm.',answer:'主人非常好客，连陌生人都请到家里吃饭。',answerPy:'Zhǔrén fēicháng hàokè, lián mòshēngrén dōu qǐngdào jiā li chīfàn.',
      note:'非常 + 好客.',pair:'连……都……'}
   ]},

  {n:25,zh:'呼朋唤友',py:'hūpéng huànyǒu',pos:'Thành ngữ',vn:'mời mọc bạn bè, tập hợp bạn bè',hv:'hô bằng hoán hữu',em:'📣',lesson:9,
   explain:['呼 = gọi, 唤 = kêu; 朋, 友 = bạn → gọi bạn bè tụ tập lại (đi ăn, đi chơi).','Khi chê có thể mang ý “suốt ngày tụ tập bạn bè” (như câu nghe số 9 của sách bài tập).'],
   usage:'常 / 整天 + 呼朋唤友; làm vị ngữ, không mang tân ngữ.',
   collo:['常呼朋唤友','整天呼朋唤友'],
   ex_zh:'他爱好交际，大方好客，常呼朋唤友。',ex_py:'Tā àihào jiāojì, dàfang hàokè, cháng hūpéng huànyǒu.',ex_vn:'Ông thích giao du, rộng rãi mến khách, hay rủ rê bạn bè.',
   exList:[
     {zh:'他爱好交际，大方好客，常呼朋唤友。',py:'Tā àihào jiāojì, dàfang hàokè, cháng hūpéng huànyǒu.',vn:'Ông thích giao du, rộng rãi mến khách, hay rủ rê bạn bè.'},
     {zh:'整天就知道呼朋唤友，家里的事你根本不管！',py:'Zhěng tiān jiù zhīdào hūpéng huànyǒu, jiā li de shì nǐ gēnběn bù guǎn!',vn:'Suốt ngày chỉ biết tụ tập bạn bè, việc nhà anh chẳng ngó ngàng gì!'},
     {zh:'一到周末，哥哥就呼朋唤友去踢足球。',py:'Yí dào zhōumò, gēge jiù hūpéng huànyǒu qù tī zúqiú.',vn:'Cứ đến cuối tuần là anh tôi lại rủ bạn bè đi đá bóng.'}
   ],
   colloFull:[
     {zh:'常呼朋唤友',py:'cháng hūpéng huànyǒu',vn:'hay rủ rê bạn bè'},
     {zh:'整天呼朋唤友',py:'zhěng tiān hūpéng huànyǒu',vn:'suốt ngày tụ tập bạn bè'},
     {zh:'呼朋唤友去……',py:'hūpéng huànyǒu qù ……',vn:'rủ bạn bè đi …'},
     {zh:'喜欢呼朋唤友',py:'xǐhuan hūpéng huànyǒu',vn:'thích tụ tập bạn bè'}
   ],
   patterns:[
     {s:'Sub + (常 / 整天) + 呼朋唤友', m:'Ai đó hay tụ tập bạn bè'},
     {s:'呼朋唤友 + 去 + V', m:'Rủ bạn bè đi làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vừa được nghỉ là rủ bạn bè đi hát karaoke.',answer:'他一放假就呼朋唤友去唱卡拉OK。',answerPy:'Tā yí fàngjià jiù hūpéng huànyǒu qù chàng kǎlā OK.',
      note:'呼朋唤友 + 去 + V.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy bố tôi thích tụ tập bạn bè nhưng chưa bao giờ về nhà muộn.',answer:'我爸爸虽然喜欢呼朋唤友，但是从来不晚回家。',answerPy:'Wǒ bàba suīrán xǐhuan hūpéng huànyǒu, dànshì cónglái bù wǎn huí jiā.',
      note:'Thành ngữ làm tân ngữ của 喜欢.',pair:'虽然……但是……'}
   ]},

  {n:26,zh:'招待',py:'zhāodài',pos:'Động từ',vn:'chiêu đãi, thết đãi, tiếp đãi',hv:'chiêu đãi',em:'🍵',lesson:9,
   explain:['Tiếp đón và mời khách ăn uống, phục vụ khách.'],
   usage:'招待 + 客人 / 朋友; 热情招待; 在家招待; 招待不周 (lời khách sáo: tiếp đãi không chu đáo).',
   collo:['招待朋友','招待客人','热情招待','在家招待'],
   ex_zh:'有时甚至会直接让广和居送外卖到家里，在家招待朋友。',ex_py:'Yǒushí shènzhì huì zhíjiē ràng Guǎnghéjū sòng wàimài dào jiā li, zài jiā zhāodài péngyou.',ex_vn:'Có khi ông còn bảo thẳng Quảng Hòa Cư mang đồ ăn đến nhà, để đãi bạn tại nhà.',
   exList:[
     {zh:'有时甚至会直接让广和居送外卖到家里，在家招待朋友。',py:'Yǒushí shènzhì huì zhíjiē ràng Guǎnghéjū sòng wàimài dào jiā li, zài jiā zhāodài péngyou.',vn:'Có khi ông còn bảo thẳng Quảng Hòa Cư mang đồ ăn đến nhà, để đãi bạn tại nhà.'},
     {zh:'他平均每两个星期要招待一次客人。',py:'Tā píngjūn měi liǎng ge xīngqī yào zhāodài yí cì kèrén.',vn:'Trung bình cứ hai tuần anh ấy lại tiếp khách một lần.'},
     {zh:'谢谢你们的热情招待！',py:'Xièxie nǐmen de rèqíng zhāodài!',vn:'Cảm ơn các bạn đã tiếp đãi nhiệt tình!'}
   ],
   colloFull:[
     {zh:'招待朋友',py:'zhāodài péngyou',vn:'đãi bạn bè'},
     {zh:'招待客人',py:'zhāodài kèrén',vn:'tiếp khách'},
     {zh:'热情招待',py:'rèqíng zhāodài',vn:'tiếp đãi nhiệt tình'},
     {zh:'在家招待',py:'zài jiā zhāodài',vn:'đãi tại nhà'},
     {zh:'招待不周',py:'zhāodài bù zhōu',vn:'tiếp đãi không chu đáo'}
   ],
   patterns:[
     {s:'Sub + 招待 + 客人 / 朋友', m:'Ai đó tiếp đãi khách / bạn'},
     {s:'谢谢 + (Sub 的) + 热情招待', m:'Cảm ơn sự tiếp đãi nhiệt tình'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn tôi vừa đến Hà Nội là tôi mời cậu ấy ăn phở, tiếp đãi tử tế.',answer:'我朋友一到河内，我就请他吃河粉，好好招待了他。',answerPy:'Wǒ péngyou yí dào Hénèi, wǒ jiù qǐng tā chī héfěn, hǎohāo zhāodàile tā.',
      note:'招待 + người: tân ngữ là khách.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chúng tôi được gia đình bạn học tiếp đãi rất nhiệt tình.',answer:'我们被同学的家人热情地招待了。',answerPy:'Wǒmen bèi tóngxué de jiārén rèqíng de zhāodài le.',
      note:'热情地 + 招待.',pair:'被'}
   ]},

  {n:27,zh:'高档',py:'gāodàng',pos:'Tính từ',vn:'hảo hạng, cao cấp',hv:'cao đương',em:'🥂',lesson:9,
   explain:['Chất lượng tốt, giá cao — hàng hoá, nhà hàng, khách sạn thuộc loại cao cấp.','Trái nghĩa: 低档 (hạng thấp, bình dân).'],
   usage:'Bảng 词语搭配: 高档(的) + 礼品 / 家具 / 服装; 高档酒店, 高档餐厅.',
   collo:['高档的礼品','高档家具','高档服装','高档酒店'],
   ex_zh:'那里的菜既有高档的，也有适合普通百姓的。',ex_py:'Nàli de cài jì yǒu gāodàng de, yě yǒu shìhé pǔtōng bǎixìng de.',ex_vn:'Món ăn ở đó vừa có loại cao cấp, vừa có loại hợp với dân thường.',
   exList:[
     {zh:'那里的菜既有高档的，也有适合普通百姓的。',py:'Nàli de cài jì yǒu gāodàng de, yě yǒu shìhé pǔtōng bǎixìng de.',vn:'Món ăn ở đó vừa có loại cao cấp, vừa có loại hợp với dân thường.'},
     {zh:'你以为这是高档酒店啊，别穷讲究了。',py:'Nǐ yǐwéi zhè shì gāodàng jiǔdiàn a, bié qióng jiǎngjiu le.',vn:'Cậu tưởng đây là khách sạn cao cấp à, đừng làm bộ cầu kỳ nữa.'},
     {zh:'这家店只卖高档服装，价格都很贵。',py:'Zhè jiā diàn zhǐ mài gāodàng fúzhuāng, jiàgé dōu hěn guì.',vn:'Cửa hàng này chỉ bán quần áo cao cấp, giá đều rất đắt.'}
   ],
   colloFull:[
     {zh:'高档的礼品',py:'gāodàng de lǐpǐn',vn:'quà tặng cao cấp'},
     {zh:'高档家具',py:'gāodàng jiājù',vn:'đồ nội thất cao cấp'},
     {zh:'高档服装',py:'gāodàng fúzhuāng',vn:'trang phục cao cấp'},
     {zh:'高档酒店',py:'gāodàng jiǔdiàn',vn:'khách sạn cao cấp'}
   ],
   patterns:[
     {s:'高档(的) + N', m:'… cao cấp'},
     {s:'既有高档的，也有……的', m:'Vừa có loại cao cấp, vừa có loại …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món quà này tuy không phải hàng cao cấp nhưng là do tôi tự làm.',answer:'这份礼物虽然不是高档的，但是是我自己做的。',answerPy:'Zhè fèn lǐwù suīrán bú shì gāodàng de, dànshì shì wǒ zìjǐ zuò de.',
      note:'高档的: “loại cao cấp” — dùng như danh từ sau 是.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Anh ấy không những thích quần áo cao cấp mà còn thích đồ nội thất cao cấp.',answer:'他不仅喜欢高档服装，也喜欢高档家具。',answerPy:'Tā bùjǐn xǐhuan gāodàng fúzhuāng, yě xǐhuan gāodàng jiājù.',
      note:'高档 + danh từ hai âm tiết, thường không cần 的.',pair:'不仅……也……'}
   ]},

  {n:28,zh:'胃口',py:'wèikǒu',pos:'Danh từ',vn:'khẩu vị, sự thèm ăn',hv:'vị khẩu',em:'😋',lesson:9,
   explain:['Cảm giác muốn ăn: 有胃口 (ăn thấy ngon miệng), 没胃口 (chán ăn).','Nghĩa bóng: sở thích — 这本书很对我的胃口 (hợp gu tôi).'],
   usage:'有 / 没(有) + 胃口; 胃口很好 / 不好; 对……的胃口.',
   collo:['有胃口','没胃口','胃口很好','对……的胃口'],
   ex_zh:'那里的菜样样都让人有胃口。',ex_py:'Nàli de cài yàngyàng dōu ràng rén yǒu wèikǒu.',ex_vn:'Món nào ở đó cũng khiến người ta thấy thèm ăn.',
   exList:[
     {zh:'那里的菜样样都让人有胃口。',py:'Nàli de cài yàngyàng dōu ràng rén yǒu wèikǒu.',vn:'Món nào ở đó cũng khiến người ta thấy thèm ăn.'},
     {zh:'我最近胃不太好，吃什么都没胃口。',py:'Wǒ zuìjìn wèi bú tài hǎo, chī shénme dōu méi wèikǒu.',vn:'Dạo này dạ dày tôi không tốt lắm, ăn gì cũng không thấy ngon.'},
     {zh:'这部电影很对我的胃口。',py:'Zhè bù diànyǐng hěn duì wǒ de wèikǒu.',vn:'Bộ phim này rất hợp gu tôi.'}
   ],
   colloFull:[
     {zh:'有胃口',py:'yǒu wèikǒu',vn:'thấy ngon miệng'},
     {zh:'没胃口',py:'méi wèikǒu',vn:'chán ăn'},
     {zh:'胃口很好',py:'wèikǒu hěn hǎo',vn:'ăn rất ngon miệng'},
     {zh:'对……的胃口',py:'duì …… de wèikǒu',vn:'hợp khẩu vị / hợp gu …'}
   ],
   patterns:[
     {s:'……让人有胃口', m:'… khiến người ta thèm ăn'},
     {s:'Sub + 吃什么都没胃口', m:'Ai đó ăn gì cũng không thấy ngon'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời nóng quá, ngay cả món tôi thích nhất tôi cũng không muốn ăn.',answer:'天气太热了，我连最喜欢的菜都没胃口吃。',answerPy:'Tiānqì tài rè le, wǒ lián zuì xǐhuan de cài dōu méi wèikǒu chī.',
      note:'没胃口 = không thấy muốn ăn.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Bà tôi vừa ốm là chán ăn.',answer:'我奶奶一生病就没有胃口。',answerPy:'Wǒ nǎinai yì shēngbìng jiù méiyǒu wèikǒu.',
      note:'胃口 là danh từ: 有 / 没有 + 胃口.',pair:'一……就……'}
   ]},

  {n:29,zh:'明明',py:'míngmíng',pos:'Phó từ',vn:'rõ ràng, rành rành',hv:'minh minh',em:'🔎',lesson:9,
   explain:['Nhấn mạnh sự thật rõ ràng, rồi vế sau thường là điều TRÁI với sự thật đó (mang ý trách, khó hiểu).'],
   usage:'明明……，(但 / 却 / 还)……; 明明 đứng trước động từ/ tính từ hoặc trước chủ ngữ.',
   collo:['明明知道','明明是……','明明……，却……'],
   ex_zh:'鲁迅虽然明明知道自己有胃病，不应该喝酒，但却很难戒掉。',ex_py:'Lǔ Xùn suīrán míngmíng zhīdào zìjǐ yǒu wèibìng, bù yīnggāi hējiǔ, dàn què hěn nán jièdiào.',ex_vn:'Lỗ Tấn tuy biết rõ mình bị đau dạ dày, không nên uống rượu, nhưng lại rất khó bỏ.',
   exList:[
     {zh:'鲁迅虽然明明知道自己有胃病，不应该喝酒，但却很难戒掉。',py:'Lǔ Xùn suīrán míngmíng zhīdào zìjǐ yǒu wèibìng, bù yīnggāi hējiǔ, dàn què hěn nán jièdiào.',vn:'Lỗ Tấn tuy biết rõ mình bị đau dạ dày, không nên uống rượu, nhưng lại rất khó bỏ.'},
     {zh:'这怎么是个缺点呢？明明是个优点呀！',py:'Zhè zěnme shì ge quēdiǎn ne? Míngmíng shì ge yōudiǎn ya!',vn:'Sao đây lại là khuyết điểm được? Rõ ràng là ưu điểm mà!'},
     {zh:'你明明看见我了，为什么不打招呼？',py:'Nǐ míngmíng kànjiàn wǒ le, wèi shénme bù dǎ zhāohu?',vn:'Rõ ràng cậu đã nhìn thấy tớ, sao không chào?'}
   ],
   colloFull:[
     {zh:'明明知道',py:'míngmíng zhīdào',vn:'biết rõ'},
     {zh:'明明是……',py:'míngmíng shì ……',vn:'rõ ràng là …'},
     {zh:'明明……，却……',py:'míngmíng ……, què ……',vn:'rõ ràng …, vậy mà …'},
     {zh:'明明看见了',py:'míngmíng kànjiàn le',vn:'rõ ràng đã thấy'}
   ],
   patterns:[
     {s:'Sub + 明明 + V……，(却 / 还)……', m:'Rõ ràng …, vậy mà … (trách, khó hiểu)'},
     {s:'明明 + 是 + N', m:'Rõ ràng là … (bác bỏ ý người khác)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái cốc rõ ràng là cậu ấy làm vỡ, vậy mà cậu ấy lại nói không phải.',answer:'杯子明明是他打破的，他却说不是。',answerPy:'Bēizi míngmíng shì tā dǎpò de, tā què shuō bú shì.',
      note:'明明 + sự thật, vế sau (却) trái với sự thật.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tuy rõ ràng là lỗi của cậu ấy, nhưng cậu ấy không chịu xin lỗi.',answer:'虽然明明是他的错，但是他不肯道歉。',answerPy:'Suīrán míngmíng shì tā de cuò, dànshì tā bù kěn dàoqiàn.',
      note:'Giống câu trong bài: 虽然明明知道……，但却…….',pair:'虽然……但是……'}
   ]},

  {n:30,zh:'胃',py:'wèi',pos:'Danh từ',vn:'dạ dày, bao tử',hv:'vị',em:'🩺',lesson:9,
   explain:['Cơ quan tiêu hoá chứa thức ăn trong bụng.','Phân biệt: 胃 (dạ dày — bộ phận cơ thể) ≠ 胃口 (sự thèm ăn).'],
   usage:'胃病, 胃疼, 胃不舒服, 伤胃, 养胃.',
   collo:['胃病','胃疼','胃不舒服','伤胃'],
   ex_zh:'我今天胃不太舒服，所以没什么胃口。',ex_py:'Wǒ jīntiān wèi bú tài shūfu, suǒyǐ méi shénme wèikǒu.',ex_vn:'Hôm nay dạ dày tôi hơi khó chịu, nên không thấy thèm ăn gì.',
   exList:[
     {zh:'我今天胃不太舒服，所以没什么胃口。',py:'Wǒ jīntiān wèi bú tài shūfu, suǒyǐ méi shénme wèikǒu.',vn:'Hôm nay dạ dày tôi hơi khó chịu, nên không thấy thèm ăn gì.'},
     {zh:'他因为胃病而戒了酒。',py:'Tā yīnwèi wèibìng ér jièle jiǔ.',vn:'Anh ấy vì bệnh dạ dày mà bỏ rượu.'},
     {zh:'早饭不吃很伤胃。',py:'Zǎofàn bù chī hěn shāng wèi.',vn:'Không ăn sáng rất hại dạ dày.'}
   ],
   colloFull:[
     {zh:'胃病',py:'wèibìng',vn:'bệnh dạ dày'},
     {zh:'胃疼',py:'wèi téng',vn:'đau dạ dày'},
     {zh:'胃不舒服',py:'wèi bù shūfu',vn:'dạ dày khó chịu'},
     {zh:'伤胃',py:'shāng wèi',vn:'hại dạ dày'},
     {zh:'有胃病',py:'yǒu wèibìng',vn:'bị bệnh dạ dày'}
   ],
   patterns:[
     {s:'Sub + 胃 + 不舒服 / 疼', m:'Ai đó bị khó chịu / đau dạ dày'},
     {s:'Sub + 有胃病', m:'Ai đó bị bệnh dạ dày'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy vừa uống cà phê là đau dạ dày.',answer:'他一喝咖啡胃就疼。',answerPy:'Tā yì hē kāfēi wèi jiù téng.',
      note:'胃 làm chủ ngữ của vế sau, 就 đứng sau chủ ngữ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy anh ấy bị bệnh dạ dày nhưng vẫn không chịu ăn uống đúng giờ.',answer:'他虽然有胃病，但是还不按时吃饭。',answerPy:'Tā suīrán yǒu wèibìng, dànshì hái bú ànshí chīfàn.',
      note:'有胃病: bị bệnh dạ dày.',pair:'虽然……但是……'}
   ]},

  {n:31,zh:'戒',py:'jiè',pos:'Động từ',vn:'cai, bỏ',hv:'giới',em:'🚭',lesson:9,
   explain:['Bỏ hẳn một thói quen không tốt: 戒烟, 戒酒.','Thường đi với bổ ngữ 掉: 戒掉 (bỏ hẳn được).'],
   usage:'Bảng 词语搭配: 戒 + 烟 / 酒. 戒掉 / 戒不掉 / 很难戒.',
   collo:['戒烟','戒酒','戒掉','很难戒'],
   ex_zh:'你咳嗽得这么厉害，真得戒烟了！',ex_py:'Nǐ késou de zhème lìhai, zhēn děi jiè yān le!',ex_vn:'Cậu ho dữ thế này, thật sự phải bỏ thuốc lá thôi!',
   exList:[
     {zh:'你咳嗽得这么厉害，真得戒烟了！',py:'Nǐ késou de zhème lìhai, zhēn děi jiè yān le!',vn:'Cậu ho dữ thế này, thật sự phải bỏ thuốc lá thôi!'},
     {zh:'鲁迅明明知道自己有胃病，但却很难戒掉喝酒的习惯。',py:'Lǔ Xùn míngmíng zhīdào zìjǐ yǒu wèibìng, dàn què hěn nán jièdiào hējiǔ de xíguàn.',vn:'Lỗ Tấn biết rõ mình bị đau dạ dày, nhưng lại rất khó bỏ thói quen uống rượu.'},
     {zh:'你不是戒烟了吗？怎么又抽上了？',py:'Nǐ bú shì jiè yān le ma? Zěnme yòu chōushang le?',vn:'Chẳng phải anh bỏ thuốc rồi sao? Sao lại hút nữa?'}
   ],
   colloFull:[
     {zh:'戒烟',py:'jiè yān',vn:'bỏ thuốc lá'},
     {zh:'戒酒',py:'jiè jiǔ',vn:'bỏ rượu'},
     {zh:'戒掉',py:'jièdiào',vn:'bỏ hẳn'},
     {zh:'很难戒',py:'hěn nán jiè',vn:'rất khó bỏ'},
     {zh:'戒不掉',py:'jiè bu diào',vn:'không bỏ được'}
   ],
   patterns:[
     {s:'Sub + 戒 + 烟 / 酒 + 了', m:'Ai đó đã bỏ thuốc / rượu'},
     {s:'把 + thói quen + 戒掉', m:'Bỏ hẳn thói quen …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu nên bỏ hẳn thói quen thức khuya đi.',answer:'你应该把熬夜的习惯戒掉。',answerPy:'Nǐ yīnggāi bǎ áoyè de xíguàn jièdiào.',
      note:'把 + thói quen + 戒掉: bổ ngữ 掉 chỉ kết quả “mất hẳn”.',pair:'把'},
     {promptLang:'vi',prompt:'Bố tôi chưa từng bỏ thuốc thành công.',answer:'我爸爸从来没有成功地戒过烟。',answerPy:'Wǒ bàba cónglái méiyǒu chénggōng de jièguo yān.',
      note:'戒烟 là động–tân: 过 chen vào giữa → 戒过烟.',pair:'从来没……过'}
   ]},

  {n:32,zh:'保存',py:'bǎocún',pos:'Động từ',vn:'giữ gìn, bảo tồn, lưu giữ',hv:'bảo tồn',em:'🗄️',lesson:9,
   explain:['Giữ cho sự vật, tài liệu không mất, không hỏng.','Tin học: lưu (file) — 保存文件.'],
   usage:'Bảng 词语搭配: 保存 + 几百年 / 完好 / 至今. 保存下来; 保存资料 / 文件.',
   collo:['保存资料','保存下来','保存完好','保存至今','保存几百年'],
   ex_zh:'现在保存的历史资料记载，他和郁达夫一起喝酒的次数最多。',ex_py:'Xiànzài bǎocún de lìshǐ zīliào jìzǎi, tā hé Yù Dáfū yìqǐ hējiǔ de cìshù zuì duō.',ex_vn:'Theo tư liệu lịch sử còn lưu giữ đến nay, ông uống rượu cùng Úc Đạt Phu nhiều lần nhất.',
   exList:[
     {zh:'现在保存的历史资料记载，他和郁达夫一起喝酒的次数最多。',py:'Xiànzài bǎocún de lìshǐ zīliào jìzǎi, tā hé Yù Dáfū yìqǐ hējiǔ de cìshù zuì duō.',vn:'Theo tư liệu lịch sử còn lưu giữ đến nay, ông uống rượu cùng Úc Đạt Phu nhiều lần nhất.'},
     {zh:'新鲜的葡萄不易保存，因此其价格也比较高。',py:'Xīnxiān de pútao bú yì bǎocún, yīncǐ qí jiàgé yě bǐjiào gāo.',vn:'Nho tươi không dễ bảo quản, vì thế giá cũng tương đối cao.'},
     {zh:'这些都是宝贵的资料，应该好好儿保存下来。',py:'Zhèxiē dōu shì bǎoguì de zīliào, yīnggāi hǎohāor bǎocún xiàlái.',vn:'Đây đều là tư liệu quý, nên giữ gìn cẩn thận.'}
   ],
   colloFull:[
     {zh:'保存资料',py:'bǎocún zīliào',vn:'lưu giữ tài liệu'},
     {zh:'保存下来',py:'bǎocún xiàlái',vn:'giữ lại được'},
     {zh:'保存完好',py:'bǎocún wánhǎo',vn:'được bảo tồn nguyên vẹn'},
     {zh:'保存至今',py:'bǎocún zhìjīn',vn:'lưu giữ đến nay'},
     {zh:'保存几百年',py:'bǎocún jǐ bǎi nián',vn:'giữ được mấy trăm năm'}
   ],
   patterns:[
     {s:'N + 保存 + 得很完好 / 至今', m:'… được giữ nguyên vẹn / đến nay'},
     {s:'把 + N + 保存下来', m:'Giữ … lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu nhớ lưu file này lại nhé.',answer:'你记得把这个文件保存下来。',answerPy:'Nǐ jìde bǎ zhège wénjiàn bǎocún xiàlái.',
      note:'把 + N + 保存下来.',pair:'把'},
     {promptLang:'vi',prompt:'Ngôi nhà cổ này tuy đã hơn ba trăm năm nhưng vẫn được giữ gìn rất nguyên vẹn.',answer:'这座老房子虽然有三百多年了，但是保存得很完好。',answerPy:'Zhè zuò lǎo fángzi suīrán yǒu sānbǎi duō nián le, dànshì bǎocún de hěn wánhǎo.',
      note:'保存得很完好: bổ ngữ trạng thái.',pair:'虽然……但是……'}
   ]},

  {n:33,zh:'资料',py:'zīliào',pos:'Danh từ',vn:'tài liệu, tư liệu',hv:'tư liệu',em:'📂',lesson:9,
   explain:['Những thứ dùng làm căn cứ để tham khảo, nghiên cứu: sách, số liệu, văn bản…'],
   usage:'查资料, 历史资料, 一份资料, 宝贵的资料, 资料显示 / 记载.',
   collo:['历史资料','查资料','一份资料','宝贵的资料'],
   ex_zh:'现在保存的历史资料记载，他和郁达夫一起喝酒的次数最多。',ex_py:'Xiànzài bǎocún de lìshǐ zīliào jìzǎi, tā hé Yù Dáfū yìqǐ hējiǔ de cìshù zuì duō.',ex_vn:'Theo tư liệu lịch sử còn lưu giữ đến nay, ông uống rượu cùng Úc Đạt Phu nhiều lần nhất.',
   exList:[
     {zh:'现在保存的历史资料记载，他和郁达夫一起喝酒的次数最多。',py:'Xiànzài bǎocún de lìshǐ zīliào jìzǎi, tā hé Yù Dáfū yìqǐ hējiǔ de cìshù zuì duō.',vn:'Theo tư liệu lịch sử còn lưu giữ đến nay, ông uống rượu cùng Úc Đạt Phu nhiều lần nhất.'},
     {zh:'为了写这篇文章，我在图书馆查了很多资料。',py:'Wèile xiě zhè piān wénzhāng, wǒ zài túshūguǎn chále hěn duō zīliào.',vn:'Để viết bài này, tôi đã tra rất nhiều tài liệu ở thư viện.'},
     {zh:'请大家带好自己的资料。',py:'Qǐng dàjiā dàihǎo zìjǐ de zīliào.',vn:'Mời mọi người mang theo tài liệu của mình.'}
   ],
   colloFull:[
     {zh:'历史资料',py:'lìshǐ zīliào',vn:'tư liệu lịch sử'},
     {zh:'查资料',py:'chá zīliào',vn:'tra tài liệu'},
     {zh:'一份资料',py:'yí fèn zīliào',vn:'một bộ tài liệu'},
     {zh:'宝贵的资料',py:'bǎoguì de zīliào',vn:'tư liệu quý'}
   ],
   patterns:[
     {s:'Sub + 查 / 找 / 收集 + 资料', m:'Tra / tìm / thu thập tài liệu'},
     {s:'资料 + 记载 / 显示 + ……', m:'Tài liệu ghi lại / cho thấy …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tài liệu này là thầy giáo đưa cho tôi.',answer:'这份资料是老师给我的。',answerPy:'Zhè fèn zīliào shì lǎoshī gěi wǒ de.',
      note:'Lượng từ: 一份资料.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi đem tài liệu tra được gửi cho cả nhóm.',answer:'我把查到的资料发给了小组的同学。',answerPy:'Wǒ bǎ chádào de zīliào fā gěile xiǎozǔ de tóngxué.',
      note:'查到的资料: tài liệu tra được.',pair:'把'}
   ]},

  {n:34,zh:'曾经',py:'céngjīng',pos:'Phó từ',vn:'đã từng',hv:'tằng kinh',em:'⏳',lesson:9,
   explain:['Biểu thị trước đây đã có hành vi nào đó hoặc đã xuất hiện tình huống nào đó — nay có thể đã kết thúc.','Thường đi với 过 hoặc 了 sau động từ. Phủ định: 没(有)……过 / 不曾, không nói 曾经没.'],
   usage:'Sub + 曾经 + V + 过 / 了; 曾经 + động từ tâm lý (曾经想过).',
   collo:['曾经……过','曾经去过','曾经作诗'],
   ex_zh:'郁达夫在1933年曾经作诗形容他。',ex_py:'Yù Dáfū zài yī jiǔ sān sān nián céngjīng zuò shī xíngróng tā.',ex_vn:'Năm 1933 Úc Đạt Phu từng làm thơ miêu tả ông.',
   exList:[
     {zh:'郁达夫在1933年曾经作诗形容他。',py:'Yù Dáfū zài yī jiǔ sān sān nián céngjīng zuò shī xíngróng tā.',vn:'Năm 1933 Úc Đạt Phu từng làm thơ miêu tả ông.'},
     {zh:'鲁迅曾经说他是将别人喝牛奶、咖啡的时间用来学习。',py:'Lǔ Xùn céngjīng shuō tā shì jiāng biérén hē niúnǎi, kāfēi de shíjiān yònglái xuéxí.',vn:'Lỗ Tấn từng nói ông đem thời gian người khác uống sữa, uống cà phê ra để học.'},
     {zh:'孔子曾经带着学生周游各国14年，传播他的思想。',py:'Kǒngzǐ céngjīng dàizhe xuésheng zhōuyóu gè guó shísì nián, chuánbō tā de sīxiǎng.',vn:'Khổng Tử từng dẫn học trò chu du các nước 14 năm, truyền bá tư tưởng của mình.'}
   ],
   colloFull:[
     {zh:'曾经……过',py:'céngjīng …… guo',vn:'đã từng …'},
     {zh:'曾经去过',py:'céngjīng qùguo',vn:'đã từng đi'},
     {zh:'曾经作诗',py:'céngjīng zuò shī',vn:'từng làm thơ'},
     {zh:'曾经想过',py:'céngjīng xiǎngguo',vn:'từng nghĩ đến'}
   ],
   patterns:[
     {s:'Sub + 曾经 + V + 过 + O', m:'Ai đó đã từng làm gì'},
     {s:'✗ 我曾经没去过 → ✓ 我没去过 / 我不曾去过', m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì tôi từng học tiếng Trung ở Bắc Kinh một năm nên nói khá chuẩn.',answer:'因为我曾经在北京学过一年汉语，所以说得比较地道。',answerPy:'Yīnwèi wǒ céngjīng zài Běijīng xuéguo yì nián Hànyǔ, suǒyǐ shuō de bǐjiào dìdao.',
      note:'曾经 + V + 过 + thời lượng + O.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Tuy anh ấy từng bỏ thuốc, nhưng bây giờ lại hút rồi.',answer:'他虽然曾经戒过烟，但是现在又抽上了。',answerPy:'Tā suīrán céngjīng jièguo yān, dànshì xiànzài yòu chōushang le.',
      note:'曾经 = trước kia đã có, nay có thể đã khác.',pair:'虽然……但是……'}
   ]},

  {n:35,zh:'形容',py:'xíngróng',pos:'Động từ',vn:'hình dung, miêu tả',hv:'hình dung',em:'🖌️',lesson:9,
   explain:['Dùng lời nói, chữ viết để tả hình dạng, tính chất của người hay vật.','BẪY: “hình dung” tiếng Việt thường là “tưởng tượng ra”; 形容 tiếng Trung là “MIÊU TẢ bằng lời”. “Tưởng tượng” nói 想象.'],
   usage:'形容 + người / vật; 用……来形容……; 无法形容 (không tả xiết); 形容词 (tính từ).',
   collo:['形容他','用……来形容','无法形容','形容词'],
   ex_zh:'郁达夫在1933年曾经作诗形容他。',ex_py:'Yù Dáfū zài yī jiǔ sān sān nián céngjīng zuò shī xíngróng tā.',ex_vn:'Năm 1933 Úc Đạt Phu từng làm thơ miêu tả ông.',
   exList:[
     {zh:'郁达夫在1933年曾经作诗形容他。',py:'Yù Dáfū zài yī jiǔ sān sān nián céngjīng zuò shī xíngróng tā.',vn:'Năm 1933 Úc Đạt Phu từng làm thơ miêu tả ông.'},
     {zh:'看到这么美的风景，我的心情简直无法形容。',py:'Kàndào zhème měi de fēngjǐng, wǒ de xīnqíng jiǎnzhí wúfǎ xíngróng.',vn:'Nhìn thấy phong cảnh đẹp thế này, tâm trạng tôi quả thật không tả xiết.'},
     {zh:'你能用一个词来形容你的妈妈吗？',py:'Nǐ néng yòng yí ge cí lái xíngróng nǐ de māma ma?',vn:'Em có thể dùng một từ để miêu tả mẹ em không?'}
   ],
   colloFull:[
     {zh:'形容他',py:'xíngróng tā',vn:'miêu tả ông ấy'},
     {zh:'用……来形容',py:'yòng …… lái xíngróng',vn:'dùng … để miêu tả'},
     {zh:'无法形容',py:'wúfǎ xíngróng',vn:'không tả xiết'},
     {zh:'形容词',py:'xíngróngcí',vn:'tính từ'}
   ],
   patterns:[
     {s:'用 + từ / câu + 来形容 + N', m:'Dùng … để miêu tả …'},
     {s:'……得无法形容', m:'… đến mức không tả xiết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món ăn này ngon đến mức ngay cả nhà văn cũng không tả nổi.',answer:'这道菜好吃得连作家都无法形容。',answerPy:'Zhè dào cài hǎochī de lián zuòjiā dōu wúfǎ xíngróng.',
      note:'无法形容: không thể miêu tả được.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Nếu dùng một từ để miêu tả Lỗ Tấn, tôi sẽ chọn “sành ăn”.',answer:'如果用一个词来形容鲁迅，我就选“讲究”。',answerPy:'Rúguǒ yòng yí ge cí lái xíngróng Lǔ Xùn, wǒ jiù xuǎn “jiǎngjiu”.',
      note:'用……来形容 + đối tượng.',pair:'如果……就……'}
   ]},

  {n:36,zh:'蒙眬',py:'ménglóng',pos:'Tính từ',vn:'lờ mờ, mơ màng, mờ ảo (mắt)',hv:'mông lung',em:'🌫️',lesson:9,
   explain:['Mắt nhìn không rõ vì buồn ngủ hoặc say: 醉眼蒙眬, 睡眼蒙眬.','BẪY: “mông lung” tiếng Việt thường tả suy nghĩ mơ hồ; 蒙眬 tiếng Trung chủ yếu tả ĐÔI MẮT nhìn mờ.'],
   usage:'醉眼蒙眬 (mắt say lờ đờ), 睡眼蒙眬 (mắt ngái ngủ), 蒙眬中 (trong lúc mơ màng).',
   collo:['醉眼蒙眬','睡眼蒙眬','蒙眬中'],
   ex_zh:'醉眼蒙眬上酒楼，彷徨呐喊两悠悠。',ex_py:'Zuì yǎn ménglóng shàng jiǔlóu, Pánghuáng Nàhǎn liǎng yōuyōu.',ex_vn:'Mắt say lờ đờ lên lầu rượu, “Bàng hoàng”, “Gào thét” hai điều thong dong.',
   exList:[
     {zh:'醉眼蒙眬上酒楼，彷徨呐喊两悠悠。',py:'Zuì yǎn ménglóng shàng jiǔlóu, Pánghuáng Nàhǎn liǎng yōuyōu.',vn:'Mắt say lờ đờ lên lầu rượu, “Bàng hoàng”, “Gào thét” hai điều thong dong.'},
     {zh:'早上六点，弟弟睡眼蒙眬地起了床。',py:'Zǎoshang liù diǎn, dìdi shuì yǎn ménglóng de qǐle chuáng.',vn:'Sáu giờ sáng, em trai mắt nhắm mắt mở ngồi dậy.'},
     {zh:'蒙眬中，我听见妈妈在厨房做早饭。',py:'Ménglóng zhōng, wǒ tīngjiàn māma zài chúfáng zuò zǎofàn.',vn:'Trong lúc mơ màng, tôi nghe thấy mẹ đang nấu bữa sáng trong bếp.'}
   ],
   colloFull:[
     {zh:'醉眼蒙眬',py:'zuì yǎn ménglóng',vn:'mắt say lờ đờ'},
     {zh:'睡眼蒙眬',py:'shuì yǎn ménglóng',vn:'mắt ngái ngủ'},
     {zh:'蒙眬中',py:'ménglóng zhōng',vn:'trong lúc mơ màng'},
     {zh:'蒙眬地',py:'ménglóng de',vn:'một cách mơ màng'}
   ],
   patterns:[
     {s:'醉眼 / 睡眼 + 蒙眬', m:'Mắt say / mắt ngái ngủ lờ đờ'},
     {s:'睡眼蒙眬地 + V', m:'Mắt nhắm mắt mở làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi vừa ngủ dậy là mắt nhắm mắt mở đi tìm điện thoại.',answer:'我一起床就睡眼蒙眬地去找手机。',answerPy:'Wǒ yì qǐchuáng jiù shuì yǎn ménglóng de qù zhǎo shǒujī.',
      note:'睡眼蒙眬地 + V: làm trạng ngữ, có 地.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Trong lúc mơ màng, tôi bị tiếng điện thoại đánh thức.',answer:'蒙眬中，我被电话声吵醒了。',answerPy:'Ménglóng zhōng, wǒ bèi diànhuà shēng chǎoxǐng le.',
      note:'蒙眬中 = trong lúc mơ màng; 吵醒 (bài 1).',pair:'被'}
   ]},

  {n:37,zh:'悠悠',py:'yōuyōu',pos:'Tính từ',vn:'thong thả, ung dung; dằng dặc',hv:'du du',em:'🍃',lesson:9,
   explain:['Thong thả, nhàn nhã (白云悠悠 — mây trắng lững lờ).','Còn nghĩa: xa xôi, lâu dài (悠悠岁月). Chủ yếu dùng trong văn thơ.'],
   usage:'白云悠悠, 悠悠地 + V, 两悠悠 (trong câu thơ của bài).',
   collo:['两悠悠','悠悠地','白云悠悠'],
   ex_zh:'蓝天上，白云悠悠地飘着。',ex_py:'Lán tiān shang, báiyún yōuyōu de piāozhe.',ex_vn:'Trên bầu trời xanh, mây trắng lững lờ trôi.',
   exList:[
     {zh:'蓝天上，白云悠悠地飘着。',py:'Lán tiān shang, báiyún yōuyōu de piāozhe.',vn:'Trên bầu trời xanh, mây trắng lững lờ trôi.'},
     {zh:'醉眼蒙眬上酒楼，彷徨呐喊两悠悠。',py:'Zuì yǎn ménglóng shàng jiǔlóu, Pánghuáng Nàhǎn liǎng yōuyōu.',vn:'Mắt say lờ đờ lên lầu rượu, “Bàng hoàng”, “Gào thét” hai điều thong dong.'},
     {zh:'爷爷悠悠地喝着茶，给我们讲过去的故事。',py:'Yéye yōuyōu de hēzhe chá, gěi wǒmen jiǎng guòqù de gùshi.',vn:'Ông thong thả nhấp trà, kể cho chúng tôi nghe chuyện ngày xưa.'}
   ],
   colloFull:[
     {zh:'两悠悠',py:'liǎng yōuyōu',vn:'cả hai đều thong dong'},
     {zh:'悠悠地',py:'yōuyōu de',vn:'một cách thong thả'},
     {zh:'白云悠悠',py:'báiyún yōuyōu',vn:'mây trắng lững lờ'},
     {zh:'悠悠岁月',py:'yōuyōu suìyuè',vn:'năm tháng dằng dặc'}
   ],
   patterns:[
     {s:'悠悠地 + V', m:'Làm gì một cách thong thả'},
     {s:'N + 悠悠', m:'… lững lờ, thong dong (văn thơ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông tôi vừa ăn cơm xong là thong thả ra công viên đi dạo.',answer:'我爷爷一吃完饭就悠悠地去公园散步。',answerPy:'Wǒ yéye yì chīwán fàn jiù yōuyōu de qù gōngyuán sànbù.',
      note:'悠悠地 + V làm trạng ngữ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy công việc rất bận, nhưng cuối tuần cô ấy vẫn thong thả uống trà đọc sách.',answer:'虽然工作很忙，但是周末她还是悠悠地喝茶看书。',answerPy:'Suīrán gōngzuò hěn máng, dànshì zhōumò tā háishi yōuyōu de hē chá kàn shū.',
      note:'悠悠 tả nhịp sống chậm rãi, thư thả.',pair:'虽然……但是……'}
   ]},

  {n:38,zh:'形象',py:'xíngxiàng',pos:'Tính từ / Danh từ',vn:'sinh động; hình ảnh, hình tượng',hv:'hình tượng',em:'🎭',lesson:9,
   explain:['Tính từ (nghĩa trong bài): diễn tả cụ thể, sống động, như thấy tận mắt — 描写得十分形象.','Danh từ: hình ảnh bên ngoài / ấn tượng về một người — 形象好的职员 (nhân viên có ngoại hình, phong thái tốt).'],
   usage:'Bảng 词语搭配: 描写 + (很)形象; 形象的比喻; 形象好; 注意形象.',
   collo:['描写得十分形象','很形象','形象的比喻','形象好'],
   ex_zh:'郁达夫的这首诗描写得十分形象。',ex_py:'Yù Dáfū de zhè shǒu shī miáoxiě de shífēn xíngxiàng.',ex_vn:'Bài thơ này của Úc Đạt Phu miêu tả vô cùng sinh động.',
   exList:[
     {zh:'郁达夫的这首诗描写得十分形象。',py:'Yù Dáfū de zhè shǒu shī miáoxiě de shífēn xíngxiàng.',vn:'Bài thơ này của Úc Đạt Phu miêu tả vô cùng sinh động.'},
     {zh:'公司这次要求招聘形象好的职员。',py:'Gōngsī zhè cì yāoqiú zhāopìn xíngxiàng hǎo de zhíyuán.',vn:'Lần này công ty yêu cầu tuyển nhân viên có ngoại hình, phong thái tốt.'},
     {zh:'老师用了一个很形象的比喻，大家一听就懂了。',py:'Lǎoshī yòngle yí ge hěn xíngxiàng de bǐyù, dàjiā yì tīng jiù dǒng le.',vn:'Thầy dùng một phép so sánh rất sinh động, mọi người vừa nghe là hiểu ngay.'}
   ],
   colloFull:[
     {zh:'描写得十分形象',py:'miáoxiě de shífēn xíngxiàng',vn:'miêu tả vô cùng sinh động'},
     {zh:'很形象',py:'hěn xíngxiàng',vn:'rất sinh động'},
     {zh:'形象的比喻',py:'xíngxiàng de bǐyù',vn:'phép so sánh sinh động'},
     {zh:'形象好',py:'xíngxiàng hǎo',vn:'hình ảnh / ngoại hình tốt'},
     {zh:'注意形象',py:'zhùyì xíngxiàng',vn:'chú ý hình ảnh bản thân'}
   ],
   patterns:[
     {s:'V (描写 / 说 / 比喻) + 得 + 很形象', m:'… rất sinh động (tính từ)'},
     {s:'Sub + 的形象 + 很好', m:'Hình ảnh của ai đó rất tốt (danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy kể chuyện sinh động đến mức ngay cả thầy giáo cũng cười.',answer:'他讲故事讲得太形象了，连老师都笑了。',answerPy:'Tā jiǎng gùshi jiǎng de tài xíngxiàng le, lián lǎoshī dōu xiào le.',
      note:'V + O + V + 得 + 形象.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Cách miêu tả của bạn ấy không những sinh động mà còn rất hài hước.',answer:'她的描写不仅很形象，而且很幽默。',answerPy:'Tā de miáoxiě bùjǐn hěn xíngxiàng, érqiě hěn yōumò.',
      note:'形象 làm vị ngữ tính từ sau 很.',pair:'不仅……而且……'}
   ]},

  // ── 专有名词 (tên riêng) — sách liệt kê 8 tên riêng ──
  {n:39,zh:'鲁迅',py:'Lǔ Xùn',pos:'Danh từ riêng',vn:'Lỗ Tấn (1881–1936), nhà văn nổi tiếng của Trung Quốc',hv:'Lỗ Tấn',em:'🖋️',lesson:9,
   explain:['Tên thật 周树人, người Thiệu Hưng (Chiết Giang). Bút danh “鲁迅” dùng từ năm 1918, khi đăng 《狂人日记》 — truyện ngắn bạch thoại đầu tiên của Trung Quốc.','Từng du học Nhật Bản học y, sau chuyển sang sáng tác văn học. Tác phẩm tiêu biểu: 《呐喊》, 《彷徨》.'],
   usage:'鲁迅先生 (cách gọi kính trọng); 鲁迅的 + 作品 / 小说 / 日记.',
   collo:['鲁迅先生','鲁迅的作品','著名的文学家鲁迅'],
   ex_zh:'你读过鲁迅先生的《彷徨》吗？',ex_py:'Nǐ dúguo Lǔ Xùn xiānsheng de 《Pánghuáng》 ma?',ex_vn:'Cậu đã đọc tập “Bàng hoàng” của Lỗ Tấn chưa?',
   exList:[
     {zh:'你读过鲁迅先生的《彷徨》吗？',py:'Nǐ dúguo Lǔ Xùn xiānsheng de 《Pánghuáng》 ma?',vn:'Cậu đã đọc tập “Bàng hoàng” của Lỗ Tấn chưa?'},
     {zh:'例如著名的文学家鲁迅，在吃喝这件事上，就算是个地道的行家。',py:'Lìrú zhùmíng de wénxuéjiā Lǔ Xùn, zài chīhē zhè jiàn shì shang, jiù suàn shì ge dìdao de hángjia.',vn:'Ví dụ như nhà văn nổi tiếng Lỗ Tấn, trong chuyện ăn uống cũng được coi là một người sành sỏi thực thụ.'},
     {zh:'鲁迅曾经在日本学习医学，后来才开始写作。',py:'Lǔ Xùn céngjīng zài Rìběn xuéxí yīxué, hòulái cái kāishǐ xiězuò.',vn:'Lỗ Tấn từng học y ở Nhật Bản, về sau mới bắt đầu viết văn.'}
   ],
   colloFull:[
     {zh:'鲁迅先生',py:'Lǔ Xùn xiānsheng',vn:'ông Lỗ Tấn'},
     {zh:'鲁迅的作品',py:'Lǔ Xùn de zuòpǐn',vn:'tác phẩm của Lỗ Tấn'},
     {zh:'著名的文学家鲁迅',py:'zhùmíng de wénxuéjiā Lǔ Xùn',vn:'nhà văn nổi tiếng Lỗ Tấn'},
     {zh:'鲁迅的日记',py:'Lǔ Xùn de rìjì',vn:'nhật ký của Lỗ Tấn'}
   ],
   patterns:[
     {s:'鲁迅先生', m:'Cách gọi kính trọng (先生 dùng cho học giả, nhà văn lớn)'},
     {s:'鲁迅的 + 作品 / 小说 / 日记', m:'Tác phẩm / truyện / nhật ký của Lỗ Tấn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa từng đọc tiểu thuyết của Lỗ Tấn.',answer:'我从来没读过鲁迅的小说。',answerPy:'Wǒ cónglái méi dúguo Lǔ Xùn de xiǎoshuō.',
      note:'从来没 + V + 过: chưa từng bao giờ.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Lỗ Tấn không những là nhà văn lớn mà còn là người sành ăn.',answer:'鲁迅不仅是大作家，而且是个美食行家。',answerPy:'Lǔ Xùn bùjǐn shì dà zuòjiā, érqiě shì ge měishí hángjia.',
      note:'Tên riêng 鲁迅 làm chủ ngữ chung cho hai vế.',pair:'不仅……而且……'}
   ]},

  {n:40,zh:'民国',py:'Mínguó',pos:'Danh từ riêng',vn:'Dân Quốc (Trung Hoa Dân Quốc, 1912–1949)',hv:'Dân Quốc',em:'🏛️',lesson:9,
   explain:['Gọi tắt của 中华民国 (Zhōnghuá Mínguó) — giai đoạn lịch sử Trung Quốc từ 1912 đến 1949.'],
   usage:'民国时期, 民国初年, 民国的 + N; nguồn bài đọc: 《民国吃家》.',
   collo:['民国时期','民国初年','民国吃家'],
   ex_zh:'这一点在民国时期表现得尤其突出。',ex_py:'Zhè yì diǎn zài Mínguó shíqī biǎoxiàn de yóuqí tūchū.',ex_vn:'Điều này thể hiện đặc biệt nổi bật vào thời Dân Quốc.',
   exList:[
     {zh:'这一点在民国时期表现得尤其突出。',py:'Zhè yì diǎn zài Mínguó shíqī biǎoxiàn de yóuqí tūchū.',vn:'Điều này thể hiện đặc biệt nổi bật vào thời Dân Quốc.'},
     {zh:'广和居在民国时期非常出名。',py:'Guǎnghéjū zài Mínguó shíqī fēicháng chūmíng.',vn:'Quảng Hòa Cư rất nổi tiếng vào thời Dân Quốc.'},
     {zh:'《民国吃家》讲的是民国名人吃喝的故事。',py:'《Mínguó Chījiā》 jiǎng de shì Mínguó míngrén chīhē de gùshi.',vn:'Cuốn “Những người sành ăn thời Dân Quốc” kể chuyện ăn uống của người nổi tiếng thời Dân Quốc.'}
   ],
   colloFull:[
     {zh:'民国时期',py:'Mínguó shíqī',vn:'thời Dân Quốc'},
     {zh:'民国初年',py:'Mínguó chūnián',vn:'những năm đầu Dân Quốc'},
     {zh:'民国吃家',py:'Mínguó chījiā',vn:'người sành ăn thời Dân Quốc'},
     {zh:'民国名人',py:'Mínguó míngrén',vn:'người nổi tiếng thời Dân Quốc'}
   ],
   patterns:[
     {s:'在民国时期，……', m:'Vào thời Dân Quốc, …'},
     {s:'民国 + 的 / 名人 / 初年', m:'… thời Dân Quốc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà hàng này được mở từ thời Dân Quốc.',answer:'这家餐馆是民国时期开的。',answerPy:'Zhè jiā cānguǎn shì Mínguó shíqī kāi de.',
      note:'Nhấn mạnh thời gian bằng 是……的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Vào thời Dân Quốc, ngay cả nhà văn cũng rất cầu kỳ chuyện ăn.',answer:'在民国时期，连文学家都很讲究吃。',answerPy:'Zài Mínguó shíqī, lián wénxuéjiā dōu hěn jiǎngjiu chī.',
      note:'在民国时期 làm trạng ngữ thời gian đầu câu.',pair:'连……都……'}
   ]},

  {n:41,zh:'稻香村',py:'Dàoxiāngcūn',pos:'Danh từ riêng',vn:'Đạo Hương Thôn (tên tiệm bánh)',hv:'Đạo Hương Thôn',em:'🍰',lesson:9,
   explain:['Tiệm bánh truyền thống nổi tiếng ở Bắc Kinh, bán nhiều loại 点心 kiểu cũ.','稻 = lúa, 香 = thơm, 村 = làng → “làng lúa thơm”.'],
   usage:'稻香村的点心; 去稻香村买点心.',
   collo:['稻香村的点心','去稻香村'],
   ex_zh:'他还很爱吃稻香村的点心。',ex_py:'Tā hái hěn ài chī Dàoxiāngcūn de diǎnxin.',ex_vn:'Ông còn rất thích ăn bánh của tiệm Đạo Hương Thôn.',
   exList:[
     {zh:'他还很爱吃稻香村的点心。',py:'Tā hái hěn ài chī Dàoxiāngcūn de diǎnxin.',vn:'Ông còn rất thích ăn bánh của tiệm Đạo Hương Thôn.'},
     {zh:'去北京玩的朋友常常带稻香村的点心回来。',py:'Qù Běijīng wán de péngyou chángcháng dài Dàoxiāngcūn de diǎnxin huílái.',vn:'Bạn bè đi Bắc Kinh chơi hay mang bánh Đạo Hương Thôn về.'},
     {zh:'稻香村的点心又好看又好吃。',py:'Dàoxiāngcūn de diǎnxin yòu hǎokàn yòu hǎochī.',vn:'Bánh của Đạo Hương Thôn vừa đẹp vừa ngon.'}
   ],
   colloFull:[
     {zh:'稻香村的点心',py:'Dàoxiāngcūn de diǎnxin',vn:'bánh Đạo Hương Thôn'},
     {zh:'去稻香村',py:'qù Dàoxiāngcūn',vn:'đến Đạo Hương Thôn'},
     {zh:'在稻香村买',py:'zài Dàoxiāngcūn mǎi',vn:'mua ở Đạo Hương Thôn'},
     {zh:'稻香村老店',py:'Dàoxiāngcūn lǎo diàn',vn:'tiệm lâu đời Đạo Hương Thôn'}
   ],
   patterns:[
     {s:'稻香村的 + 点心', m:'Bánh của Đạo Hương Thôn'},
     {s:'去 / 在 + 稻香村 + 买点心', m:'Đến / ở Đạo Hương Thôn mua bánh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hộp bánh này là mua ở Đạo Hương Thôn.',answer:'这盒点心是在稻香村买的。',answerPy:'Zhè hé diǎnxin shì zài Dàoxiāngcūn mǎi de.',
      note:'Nhấn mạnh nơi chốn bằng 是……的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi vừa đến Bắc Kinh là đi Đạo Hương Thôn mua bánh.',answer:'我一到北京就去稻香村买点心。',answerPy:'Wǒ yí dào Běijīng jiù qù Dàoxiāngcūn mǎi diǎnxin.',
      note:'Tên riêng làm tân ngữ nơi chốn sau 去.',pair:'一……就……'}
   ]},

  {n:42,zh:'广和居',py:'Guǎnghéjū',pos:'Danh từ riêng',vn:'Quảng Hòa Cư (tên nhà hàng)',hv:'Quảng Hòa Cư',em:'🏮',lesson:9,
   explain:['Nhà hàng nổi tiếng ở Bắc Kinh thời Dân Quốc, nằm gần 菜市口, đứng đầu “八大居” (tám nhà hàng tên “cư”) — nơi Lỗ Tấn hay đến nhất.'],
   usage:'去广和居吃饭; 广和居的菜 / 大门 / 房间.',
   collo:['去广和居','广和居的菜','广和居的大门'],
   ex_zh:'鲁迅去得最多、最喜欢的是广和居。',ex_py:'Lǔ Xùn qù de zuì duō, zuì xǐhuan de shì Guǎnghéjū.',ex_vn:'Nơi Lỗ Tấn đến nhiều nhất và thích nhất là Quảng Hòa Cư.',
   exList:[
     {zh:'鲁迅去得最多、最喜欢的是广和居。',py:'Lǔ Xùn qù de zuì duō, zuì xǐhuan de shì Guǎnghéjū.',vn:'Nơi Lỗ Tấn đến nhiều nhất và thích nhất là Quảng Hòa Cư.'},
     {zh:'广和居的大门就在他当时住的胡同的斜对面。',py:'Guǎnghéjū de dàmén jiù zài tā dāngshí zhù de hútòng de xié duìmiàn.',vn:'Cổng Quảng Hòa Cư nằm ngay chéo đối diện con ngõ ông ở lúc bấy giờ.'},
     {zh:'广和居算不上豪华，但却很适合朋友聚会。',py:'Guǎnghéjū suàn bu shàng háohuá, dàn què hěn shìhé péngyou jùhuì.',vn:'Quảng Hòa Cư không thể coi là sang trọng, nhưng lại rất hợp để bạn bè tụ họp.'}
   ],
   colloFull:[
     {zh:'去广和居',py:'qù Guǎnghéjū',vn:'đến Quảng Hòa Cư'},
     {zh:'广和居的菜',py:'Guǎnghéjū de cài',vn:'món ăn của Quảng Hòa Cư'},
     {zh:'广和居的大门',py:'Guǎnghéjū de dàmén',vn:'cổng Quảng Hòa Cư'},
     {zh:'广和居的房间',py:'Guǎnghéjū de fángjiān',vn:'phòng ở Quảng Hòa Cư'}
   ],
   patterns:[
     {s:'去广和居 + V', m:'Đến Quảng Hòa Cư làm gì'},
     {s:'广和居 + 是 + ……之首', m:'Quảng Hòa Cư đứng đầu …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy Quảng Hòa Cư không sang trọng, nhưng món nào cũng khiến người ta thèm ăn.',answer:'广和居虽然不豪华，但是样样菜都让人有胃口。',answerPy:'Guǎnghéjū suīrán bù háohuá, dànshì yàngyàng cài dōu ràng rén yǒu wèikǒu.',
      note:'Tên nhà hàng làm chủ ngữ.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Lỗ Tấn bị món ăn của Quảng Hòa Cư thu hút, tuần nào cũng đến.',answer:'鲁迅被广和居的菜吸引了，每个星期都去。',answerPy:'Lǔ Xùn bèi Guǎnghéjū de cài xīyǐn le, měi ge xīngqī dōu qù.',
      note:'被 + tác nhân (广和居的菜) + V.',pair:'被'}
   ]},

  {n:43,zh:'菜市口',py:'Càishìkǒu',pos:'Danh từ riêng',vn:'Thái Thị Khẩu (địa danh ở Bắc Kinh)',hv:'Thái Thị Khẩu',em:'🗺️',lesson:9,
   explain:['Một khu phố cổ ở Bắc Kinh. 菜市 = chợ rau, 口 = đầu (phố, ngõ).'],
   usage:'菜市口附近; 位于菜市口.',
   collo:['菜市口附近','位于菜市口','在菜市口'],
   ex_zh:'位于菜市口附近的广和居是北京“八大居”之首。',ex_py:'Wèiyú Càishìkǒu fùjìn de Guǎnghéjū shì Běijīng “bā dà jū” zhī shǒu.',ex_vn:'Quảng Hòa Cư nằm gần Thái Thị Khẩu là quán đứng đầu “tám đại cư” của Bắc Kinh.',
   exList:[
     {zh:'位于菜市口附近的广和居是北京“八大居”之首。',py:'Wèiyú Càishìkǒu fùjìn de Guǎnghéjū shì Běijīng “bā dà jū” zhī shǒu.',vn:'Quảng Hòa Cư nằm gần Thái Thị Khẩu là quán đứng đầu “tám đại cư” của Bắc Kinh.'},
     {zh:'我姑姑家就住在菜市口附近。',py:'Wǒ gūgu jiā jiù zhù zài Càishìkǒu fùjìn.',vn:'Nhà cô tôi ở ngay gần Thái Thị Khẩu.'},
     {zh:'从这儿坐地铁到菜市口只要二十分钟。',py:'Cóng zhèr zuò dìtiě dào Càishìkǒu zhǐ yào èrshí fēnzhōng.',vn:'Từ đây đi tàu điện ngầm đến Thái Thị Khẩu chỉ mất hai mươi phút.'}
   ],
   colloFull:[
     {zh:'菜市口附近',py:'Càishìkǒu fùjìn',vn:'gần Thái Thị Khẩu'},
     {zh:'位于菜市口',py:'wèiyú Càishìkǒu',vn:'nằm ở Thái Thị Khẩu'},
     {zh:'在菜市口',py:'zài Càishìkǒu',vn:'ở Thái Thị Khẩu'},
     {zh:'到菜市口',py:'dào Càishìkǒu',vn:'đến Thái Thị Khẩu'}
   ],
   patterns:[
     {s:'位于 + 菜市口 + 附近', m:'Nằm gần Thái Thị Khẩu'},
     {s:'从……到菜市口', m:'Từ … đến Thái Thị Khẩu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa đến Thái Thị Khẩu là có thể thấy rất nhiều ngõ cổ.',answer:'一到菜市口，就能看到很多老胡同。',answerPy:'Yí dào Càishìkǒu, jiù néng kàndào hěn duō lǎo hútòng.',
      note:'Tên riêng địa danh làm tân ngữ của 到.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nhà hàng này là do một người bạn sống ở Thái Thị Khẩu giới thiệu cho tôi.',answer:'这家饭馆是一个住在菜市口的朋友介绍给我的。',answerPy:'Zhè jiā fànguǎn shì yí ge zhù zài Càishìkǒu de péngyou jièshào gěi wǒ de.',
      note:'住在菜市口的 + N: định ngữ.',pair:'是……的'}
   ]},

  {n:44,zh:'郁达夫',py:'Yù Dáfū',pos:'Danh từ riêng',vn:'Úc Đạt Phu (1896–1945), nhà văn nổi tiếng của Trung Quốc',hv:'Úc Đạt Phu',em:'📜',lesson:9,
   explain:['Nhà văn, nhà thơ nổi tiếng thời hiện đại Trung Quốc, bạn thân của Lỗ Tấn — người uống rượu cùng Lỗ Tấn nhiều lần nhất.'],
   usage:'郁达夫的诗 / 小说; 和郁达夫一起…….',
   collo:['郁达夫的诗','和郁达夫一起','作家郁达夫'],
   ex_zh:'他和郁达夫一起喝酒的次数最多。',ex_py:'Tā hé Yù Dáfū yìqǐ hējiǔ de cìshù zuì duō.',ex_vn:'Ông uống rượu cùng Úc Đạt Phu nhiều lần nhất.',
   exList:[
     {zh:'他和郁达夫一起喝酒的次数最多。',py:'Tā hé Yù Dáfū yìqǐ hējiǔ de cìshù zuì duō.',vn:'Ông uống rượu cùng Úc Đạt Phu nhiều lần nhất.'},
     {zh:'郁达夫在1933年曾经作诗形容他。',py:'Yù Dáfū zài yī jiǔ sān sān nián céngjīng zuò shī xíngróng tā.',vn:'Năm 1933 Úc Đạt Phu từng làm thơ miêu tả ông.'},
     {zh:'郁达夫也是一位著名的文学家。',py:'Yù Dáfū yě shì yí wèi zhùmíng de wénxuéjiā.',vn:'Úc Đạt Phu cũng là một nhà văn nổi tiếng.'}
   ],
   colloFull:[
     {zh:'郁达夫的诗',py:'Yù Dáfū de shī',vn:'thơ của Úc Đạt Phu'},
     {zh:'和郁达夫一起',py:'hé Yù Dáfū yìqǐ',vn:'cùng với Úc Đạt Phu'},
     {zh:'作家郁达夫',py:'zuòjiā Yù Dáfū',vn:'nhà văn Úc Đạt Phu'},
     {zh:'郁达夫的小说',py:'Yù Dáfū de xiǎoshuō',vn:'tiểu thuyết của Úc Đạt Phu'}
   ],
   patterns:[
     {s:'A + 和 + 郁达夫 + 一起 + V', m:'A cùng Úc Đạt Phu làm gì'},
     {s:'作家 + 郁达夫', m:'Chức danh đứng trước tên riêng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài thơ này là Úc Đạt Phu viết tặng Lỗ Tấn.',answer:'这首诗是郁达夫写给鲁迅的。',answerPy:'Zhè shǒu shī shì Yù Dáfū xiě gěi Lǔ Xùn de.',
      note:'Nhấn mạnh người viết bằng 是……的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Úc Đạt Phu không những biết viết tiểu thuyết mà còn biết làm thơ.',answer:'郁达夫不仅会写小说，而且会作诗。',answerPy:'Yù Dáfū bùjǐn huì xiě xiǎoshuō, érqiě huì zuò shī.',
      note:'作诗 = làm thơ (văn viết), như trong bài.',pair:'不仅……而且……'}
   ]},

  {n:45,zh:'彷徨',py:'Pánghuáng',pos:'Danh từ riêng',vn:'“Bàng hoàng” (tên một tập truyện ngắn của Lỗ Tấn)',hv:'bàng hoàng',em:'📕',lesson:9,
   explain:['Tập truyện ngắn của Lỗ Tấn, gồm 11 truyện viết năm 1924–1925. Tên sách viết trong 《》: 《彷徨》.','BẪY: nghĩa gốc của 彷徨 là đi đi lại lại, do dự không biết đi đâu; tiếng Việt “bàng hoàng” lại là sững sờ, choáng váng.'],
   usage:'读《彷徨》; 鲁迅的《彷徨》; 《呐喊》和《彷徨》.',
   collo:['《彷徨》','读《彷徨》','鲁迅的《彷徨》'],
   ex_zh:'你读过鲁迅先生的《彷徨》吗？',ex_py:'Nǐ dúguo Lǔ Xùn xiānsheng de 《Pánghuáng》 ma?',ex_vn:'Cậu đã đọc tập “Bàng hoàng” của Lỗ Tấn chưa?',
   exList:[
     {zh:'你读过鲁迅先生的《彷徨》吗？',py:'Nǐ dúguo Lǔ Xùn xiānsheng de 《Pánghuáng》 ma?',vn:'Cậu đã đọc tập “Bàng hoàng” của Lỗ Tấn chưa?'},
     {zh:'《彷徨》共收录鲁迅1924年到1925年所作的11篇小说。',py:'《Pánghuáng》 gòng shōulù Lǔ Xùn yī jiǔ èr sì nián dào yī jiǔ èr wǔ nián suǒ zuò de shíyī piān xiǎoshuō.',vn:'“Bàng hoàng” gồm 11 truyện ngắn Lỗ Tấn viết từ năm 1924 đến 1925.'},
     {zh:'《呐喊》和《彷徨》是鲁迅的两部小说集。',py:'《Nàhǎn》 hé 《Pánghuáng》 shì Lǔ Xùn de liǎng bù xiǎoshuōjí.',vn:'“Gào thét” và “Bàng hoàng” là hai tập truyện ngắn của Lỗ Tấn.'}
   ],
   colloFull:[
     {zh:'《彷徨》',py:'《Pánghuáng》',vn:'tập “Bàng hoàng”'},
     {zh:'读《彷徨》',py:'dú 《Pánghuáng》',vn:'đọc “Bàng hoàng”'},
     {zh:'鲁迅的《彷徨》',py:'Lǔ Xùn de 《Pánghuáng》',vn:'“Bàng hoàng” của Lỗ Tấn'},
     {zh:'彷徨呐喊两悠悠',py:'Pánghuáng Nàhǎn liǎng yōuyōu',vn:'“Bàng hoàng”, “Gào thét” hai điều thong dong'}
   ],
   patterns:[
     {s:'《彷徨》 + 是 + 鲁迅的小说集', m:'“Bàng hoàng” là tập truyện của Lỗ Tấn'},
     {s:'读 / 看 + 《彷徨》', m:'Đọc “Bàng hoàng”'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đọc “Bàng hoàng” hồi học cấp ba.',answer:'我是上高中的时候读的《彷徨》。',answerPy:'Wǒ shì shàng gāozhōng de shíhou dú de 《Pánghuáng》.',
      note:'是……的 nhấn mạnh thời gian; tân ngữ có thể đứng sau 的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi vừa đọc “Bàng hoàng” là mê ngay truyện của Lỗ Tấn.',answer:'我一读《彷徨》就爱上了鲁迅的小说。',answerPy:'Wǒ yì dú 《Pánghuáng》 jiù àishangle Lǔ Xùn de xiǎoshuō.',
      note:'Tên sách luôn đặt trong 《》.',pair:'一……就……'}
   ]},

  {n:46,zh:'呐喊',py:'Nàhǎn',pos:'Danh từ riêng',vn:'“Gào thét” (tên một tập truyện ngắn của Lỗ Tấn)',hv:'nột hám',em:'📗',lesson:9,
   explain:['Tập truyện ngắn đầu tiên của Lỗ Tấn (1923), có 《狂人日记》, 《孔乙己》, 《阿Q正传》…','Viết thường, 呐喊 (nàhǎn) còn là động từ: hò hét, hô to (cổ vũ) — 为他呐喊加油.'],
   usage:'《呐喊》; 鲁迅的《呐喊》; động từ: 大声呐喊, 为……呐喊.',
   collo:['《呐喊》','鲁迅的《呐喊》','大声呐喊'],
   ex_zh:'《呐喊》和《彷徨》是鲁迅的两部小说集。',ex_py:'《Nàhǎn》 hé 《Pánghuáng》 shì Lǔ Xùn de liǎng bù xiǎoshuōjí.',ex_vn:'“Gào thét” và “Bàng hoàng” là hai tập truyện ngắn của Lỗ Tấn.',
   exList:[
     {zh:'《呐喊》和《彷徨》是鲁迅的两部小说集。',py:'《Nàhǎn》 hé 《Pánghuáng》 shì Lǔ Xùn de liǎng bù xiǎoshuōjí.',vn:'“Gào thét” và “Bàng hoàng” là hai tập truyện ngắn của Lỗ Tấn.'},
     {zh:'《阿Q正传》收在鲁迅的小说集《呐喊》里。',py:'《Ā Q Zhèngzhuàn》 shōu zài Lǔ Xùn de xiǎoshuōjí 《Nàhǎn》 li.',vn:'“AQ chính truyện” nằm trong tập truyện “Gào thét” của Lỗ Tấn.'},
     {zh:'比赛的时候，同学们都在为他呐喊加油。',py:'Bǐsài de shíhou, tóngxuémen dōu zài wèi tā nàhǎn jiāyóu.',vn:'Lúc thi đấu, các bạn đều hò hét cổ vũ cho cậu ấy.'}
   ],
   colloFull:[
     {zh:'《呐喊》',py:'《Nàhǎn》',vn:'tập “Gào thét”'},
     {zh:'鲁迅的《呐喊》',py:'Lǔ Xùn de 《Nàhǎn》',vn:'“Gào thét” của Lỗ Tấn'},
     {zh:'大声呐喊',py:'dàshēng nàhǎn',vn:'hò hét to'},
     {zh:'为……呐喊加油',py:'wèi …… nàhǎn jiāyóu',vn:'hò hét cổ vũ cho …'}
   ],
   patterns:[
     {s:'《呐喊》 + 是 + 鲁迅的第一部小说集', m:'“Gào thét” là tập truyện đầu tiên của Lỗ Tấn'},
     {s:'为 + người + 呐喊加油', m:'Hò hét cổ vũ cho ai (động từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi không những đã đọc “Gào thét” mà còn đọc cả “Bàng hoàng”.',answer:'我不仅读了《呐喊》，也读了《彷徨》。',answerPy:'Wǒ bùjǐn dúle 《Nàhǎn》, yě dúle 《Pánghuáng》.',
      note:'Hai tên sách đều đặt trong 《》.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'“Gào thét” đã được dịch ra rất nhiều thứ tiếng.',answer:'《呐喊》被翻译成了很多种语言。',answerPy:'《Nàhǎn》 bèi fānyì chéngle hěn duō zhǒng yǔyán.',
      note:'被 + V + 成: được dịch thành.',pair:'被'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (file nghe 09-1 đọc liền cả bài), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 别样鲁迅',
  preQuiz:[
    {q:'课文说，美食很大一部分是靠什么推动的？',opts:['名人','饭馆','外国人'],ans:0},
    {q:'在吃喝这件事上，鲁迅是什么样的人？',opts:['只会吃不会做的人','地道的行家','不讲究的人'],ans:1},
    {q:'鲁迅在北京去过的知名餐馆有多少家？',opts:['56家','八家','65家'],ans:2},
    {q:'鲁迅还很爱吃哪儿的点心？',opts:['稻香村','广和居','菜市口'],ans:0},
    {q:'鲁迅去得最多、最喜欢的餐馆是哪家？',opts:['稻香村','广和居','酒楼'],ans:1},
    {q:'鲁迅平均多长时间去一次广和居？',opts:['每天','每个月','每周'],ans:2},
    {q:'鲁迅常去广和居的一个重要原因是什么？',opts:['距离近','价格便宜','非常豪华'],ans:0},
    {q:'关于广和居，下面哪项正确？',opts:['非常豪华','是北京“八大居”之首','不欢迎文人'],ans:1},
    {q:'广和居的房间怎么样？',opts:['只有大房间','都是一个人的房间','有大小不同的各种房间'],ans:2},
    {q:'鲁迅请朋友吃饭，多数是几个人？',opts:['三五个人','一个人','几十个人'],ans:0},
    {q:'鲁迅为什么不应该喝酒？',opts:['他酒量很大','他有胃病','他不爱喝'],ans:1},
    {q:'郁达夫在诗里是怎么形容鲁迅的？',opts:['每顿饭必喝酒','烟不离手','醉眼蒙眬上酒楼'],ans:2}
  ],
  lines:[
   {sp:0,zh:'美食很大一部分是靠名人推动的，这一点在民国时期表现得尤其突出。例如著名的文学家鲁迅，在吃喝这件事上，就算是个地道的行家，不但会吃，还会亲自动手做，对许多美食都有独特的见解。这是近代新时尚。',
    py:'Měishí hěn dà yí bùfen shì kào míngrén tuīdòng de, zhè yì diǎn zài Mínguó shíqī biǎoxiàn de yóuqí tūchū. Lìrú zhùmíng de wénxuéjiā Lǔ Xùn, zài chīhē zhè jiàn shì shang, jiù suàn shì ge dìdao de hángjia, búdàn huì chī, hái huì qīnzì dòngshǒu zuò, duì xǔduō měishí dōu yǒu dútè de jiànjiě. Zhè shì jìndài xīn shíshàng.',
    vn:'Món ngon phần lớn là nhờ người nổi tiếng thúc đẩy, điều này đặc biệt nổi bật vào thời Dân Quốc. Ví dụ như nhà văn nổi tiếng Lỗ Tấn: trong chuyện ăn uống, ông cũng được coi là một người sành sỏi thực thụ, không những biết ăn mà còn tự tay nấu, có cách nhìn độc đáo về rất nhiều món ngon. Đây là một mốt mới thời cận đại.'},
   {sp:0,zh:'北京是鲁迅长期生活过的城市，仅从这一时期鲁迅写作的日记中，我们发现他去过的知名餐馆就有65家，另外，他还很爱吃稻香村的点心。作为大作家、大学问家，鲁迅对吃很讲究，吃的内容在他的日记里占了很大一部分。在众多餐馆里，鲁迅去得最多、最喜欢的是广和居，平均每周都要去一次。',
    py:'Běijīng shì Lǔ Xùn chángqī shēnghuóguo de chéngshì, jǐn cóng zhè yì shíqī Lǔ Xùn xiězuò de rìjì zhōng, wǒmen fāxiàn tā qùguo de zhīmíng cānguǎn jiù yǒu liùshíwǔ jiā, lìngwài, tā hái hěn ài chī Dàoxiāngcūn de diǎnxin. Zuòwéi dà zuòjiā, dà xuéwenjiā, Lǔ Xùn duì chī hěn jiǎngjiu, chī de nèiróng zài tā de rìjì li zhànle hěn dà yí bùfen. Zài zhòngduō cānguǎn li, Lǔ Xùn qù de zuì duō, zuì xǐhuan de shì Guǎnghéjū, píngjūn měi zhōu dōu yào qù yí cì.',
    vn:'Bắc Kinh là thành phố Lỗ Tấn sống trong thời gian dài. Chỉ riêng trong nhật ký ông viết thời kỳ này, chúng ta đã thấy những nhà hàng nổi tiếng ông từng đến có tới 65 nhà; ngoài ra, ông còn rất thích bánh của tiệm Đạo Hương Thôn. Là nhà văn lớn, nhà học giả lớn, Lỗ Tấn rất cầu kỳ trong chuyện ăn, chuyện ăn uống chiếm một phần rất lớn trong nhật ký của ông. Trong vô số nhà hàng, nơi Lỗ Tấn đến nhiều nhất và thích nhất là Quảng Hòa Cư, trung bình tuần nào cũng đến một lần.'},
   {sp:0,zh:'鲁迅经常到这家店的一个重要原因是距离近，广和居的大门就在他当时住的胡同的斜对面。位于菜市口附近的广和居是北京“八大居”之首，在民国时期非常出名。广和居算不上豪华，但却很适合朋友在这里聚会、热闹。这里特别欢迎文人的光临，为他们的聚会创造了很好的条件。广和居院里分成大小不同的各种房间，有一个人的，有三五人小聚的，也有十多个人大聚会的。这大大满足了鲁迅爱和朋友吃饭的要求。他爱好交际，大方好客，常呼朋唤友，多数是三五个人一起吃，有时甚至会直接让广和居送外卖到家里，在家招待朋友。当然最重要的还是因为广和居有鲁迅喜欢的菜。那里的菜既有高档的，也有适合普通百姓的，样样都让人有胃口。',
    py:'Lǔ Xùn jīngcháng dào zhè jiā diàn de yí ge zhòngyào yuányīn shì jùlí jìn, Guǎnghéjū de dàmén jiù zài tā dāngshí zhù de hútòng de xié duìmiàn. Wèiyú Càishìkǒu fùjìn de Guǎnghéjū shì Běijīng “bā dà jū” zhī shǒu, zài Mínguó shíqī fēicháng chūmíng. Guǎnghéjū suàn bu shàng háohuá, dàn què hěn shìhé péngyou zài zhèlǐ jùhuì, rènao. Zhèlǐ tèbié huānyíng wénrén de guānglín, wèi tāmen de jùhuì chuàngzàole hěn hǎo de tiáojiàn. Guǎnghéjū yuàn li fēnchéng dàxiǎo bù tóng de gè zhǒng fángjiān, yǒu yí ge rén de, yǒu sān wǔ rén xiǎo jù de, yě yǒu shí duō ge rén dà jùhuì de. Zhè dàdà mǎnzúle Lǔ Xùn ài hé péngyou chīfàn de yāoqiú. Tā àihào jiāojì, dàfang hàokè, cháng hūpéng huànyǒu, duōshù shì sān wǔ ge rén yìqǐ chī, yǒushí shènzhì huì zhíjiē ràng Guǎnghéjū sòng wàimài dào jiā li, zài jiā zhāodài péngyou. Dāngrán zuì zhòngyào de háishi yīnwèi Guǎnghéjū yǒu Lǔ Xùn xǐhuan de cài. Nàli de cài jì yǒu gāodàng de, yě yǒu shìhé pǔtōng bǎixìng de, yàngyàng dōu ràng rén yǒu wèikǒu.',
    vn:'Một lý do quan trọng khiến Lỗ Tấn thường đến quán này là gần: cổng Quảng Hòa Cư nằm ngay chéo đối diện con ngõ ông ở lúc bấy giờ. Quảng Hòa Cư nằm gần Thái Thị Khẩu, đứng đầu “tám đại cư” của Bắc Kinh, thời Dân Quốc rất nổi tiếng. Quảng Hòa Cư không thể coi là sang trọng, nhưng lại rất hợp để bạn bè tụ tập vui vẻ. Nơi đây đặc biệt chào đón văn nhân ghé đến, tạo điều kiện rất tốt cho những buổi họp mặt của họ. Trong sân Quảng Hòa Cư chia thành đủ loại phòng lớn nhỏ khác nhau: có phòng cho một người, có phòng cho ba năm người tụ họp nhỏ, cũng có phòng cho hơn mười người họp mặt lớn. Điều này rất đáp ứng nhu cầu thích ăn cơm cùng bạn bè của Lỗ Tấn. Ông thích giao du, rộng rãi mến khách, hay rủ rê bạn bè, phần lớn là ba năm người cùng ăn, có khi còn bảo thẳng Quảng Hòa Cư mang đồ ăn đến nhà để đãi bạn tại nhà. Đương nhiên, quan trọng nhất vẫn là vì Quảng Hòa Cư có những món Lỗ Tấn thích. Món ăn ở đó vừa có loại cao cấp, vừa có loại hợp với dân thường, món nào cũng khiến người ta thèm ăn.'},
   {sp:0,zh:'鲁迅也爱喝酒，虽然明明知道自己有胃病，不应该喝酒，但却很难戒掉。他是每顿饭必喝酒的人。现在保存的历史资料记载，他和郁达夫一起喝酒的次数最多。鲁迅酒量不大，经常喝醉，而且在喝酒的过程中烟不离手。郁达夫在1933年曾经作诗形容他：“醉眼蒙眬上酒楼，彷徨呐喊两悠悠”，描写得十分形象。',
    py:'Lǔ Xùn yě ài hējiǔ, suīrán míngmíng zhīdào zìjǐ yǒu wèibìng, bù yīnggāi hējiǔ, dàn què hěn nán jièdiào. Tā shì měi dùn fàn bì hējiǔ de rén. Xiànzài bǎocún de lìshǐ zīliào jìzǎi, tā hé Yù Dáfū yìqǐ hējiǔ de cìshù zuì duō. Lǔ Xùn jiǔliàng bú dà, jīngcháng hēzuì, érqiě zài hējiǔ de guòchéng zhōng yān bù lí shǒu. Yù Dáfū zài yī jiǔ sān sān nián céngjīng zuò shī xíngróng tā: “Zuì yǎn ménglóng shàng jiǔlóu, Pánghuáng Nàhǎn liǎng yōuyōu”, miáoxiě de shífēn xíngxiàng.',
    vn:'Lỗ Tấn cũng thích uống rượu. Tuy biết rõ mình bị đau dạ dày, không nên uống rượu, nhưng ông lại rất khó bỏ. Ông là người bữa nào cũng phải uống rượu. Theo tư liệu lịch sử còn lưu giữ đến nay, ông uống rượu cùng Úc Đạt Phu nhiều lần nhất. Tửu lượng Lỗ Tấn không lớn, thường uống say, hơn nữa trong lúc uống thì thuốc lá không rời tay. Năm 1933, Úc Đạt Phu từng làm thơ miêu tả ông: “Mắt say lờ đờ lên lầu rượu, ‘Bàng hoàng’, ‘Gào thét’ hai điều thong dong”, miêu tả vô cùng sinh động.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析
// Cặp 亲自—自己 lấy từ sách (tr. 88); 曾经—已经 và 表现—表达 lấy từ bài tập 2 của sách
// ══════════════════════════════════════════
var synonymData = [
  {pair:'亲自 — 自己',
   same:'Đều có nghĩa chỉ BẢN THÂN người đó (tự mình làm).',
   sameEx:{zh:'（鲁迅）不但会吃，还会亲自／自己动手做。',vn:'(Lỗ Tấn) không những biết ăn mà còn tự tay nấu.'},
   items:[
     {word:'亲自',points:[
       'PHÓ TỪ — chỉ đứng giữa chủ ngữ và động từ.',
       'Thường dùng cho người có thân phận, địa vị cao, hoặc việc bình thường người đó không hay làm — mang ý coi trọng.',
       'Không làm chủ ngữ, tân ngữ, định ngữ: ✗ 亲自的事.'
     ],ex:[{zh:'老人总是亲自喂养他的猴子。',vn:'Ông cụ lúc nào cũng tự tay nuôi con khỉ của mình.'},
          {zh:'这份礼物是市长亲自为生病的小女孩儿做的。',vn:'Món quà này là đích thân thị trưởng làm cho cô bé bị ốm.'}]},
     {word:'自己',points:[
       'ĐẠI TỪ — làm được chủ ngữ, tân ngữ, định ngữ: 自己的资料.',
       'Nhấn mạnh người thực hiện là bản thân chứ KHÔNG PHẢI người khác.',
       'Dùng cho mọi người, mọi việc hằng ngày.'
     ],ex:[{zh:'请大家带好自己的资料。',vn:'Mời mọi người mang theo tài liệu của mình.'},
          {zh:'你应该自己努力学习，不能总是靠别人。',vn:'Em nên tự mình cố gắng học, không thể lúc nào cũng dựa vào người khác.'}]}
   ],
   quiz:[
     {sentence:'每个学生都有＿＿的性格特点和兴趣爱好。',options:['亲自','自己'],answer:1,
      why:'Làm ĐỊNH NGỮ (…的性格特点) — chỉ đại từ 自己 làm được; 亲自 là phó từ.'},
     {sentence:'希望您能＿＿来参加这次活动。',options:['亲自','自己'],answer:0,
      why:'Lời mời trang trọng người được tôn trọng → 亲自 thể hiện sự coi trọng.'},
     {sentence:'衣服脏了要＿＿洗，别总让妈妈帮你洗。',options:['亲自','自己'],answer:1,
      why:'Việc hằng ngày, nhấn mạnh “tự làm, không nhờ người khác” → 自己.'},
     {sentence:'（鲁迅）不但会吃，还会＿＿动手做。',options:['亲自','自己'],answer:0,both:true,
      why:'Câu “điểm chung” của sách — cả hai đều đúng. 亲自 nhấn mạnh sự coi trọng, 自己 nhấn mạnh không nhờ ai.'}
   ],
   sgk:{
     chung:{t:'都有表示本人的意思。',vn:'Đều có nghĩa chỉ bản thân người đó.',vd:'（鲁迅）不但会吃，还会亲自／自己动手做。',vdVn:'(Lỗ Tấn) không những biết ăn mà còn tự tay nấu.'},
     khac:[
       {a:{t:'副词，常用于主语和动词之间。',vn:'Phó từ, thường đứng giữa chủ ngữ và động từ.',vd:'老人总是亲自喂养他的猴子。',vdVn:'Ông cụ lúc nào cũng tự tay nuôi con khỉ của mình.'},
        b:{t:'代词，可做主语、宾语、定语等。',vn:'Đại từ, có thể làm chủ ngữ, tân ngữ, định ngữ…',vd:'请大家带好自己的资料。',vdVn:'Mời mọi người mang theo tài liệu của mình.'}},
       {a:{t:'一般用于身份地位较高的人，或平时不常做的事。',vn:'Thường dùng cho người có thân phận, địa vị cao, hoặc việc bình thường không hay làm.',vd:'这份礼物是市长亲自为生病的小女孩儿做的。',vdVn:'Món quà này là đích thân thị trưởng làm cho cô bé bị ốm.'},
        b:{t:'强调动作的完成者是本人不是别人。',vn:'Nhấn mạnh người thực hiện hành động là bản thân chứ không phải người khác.',vd:'你应该自己努力学习，不能总是靠别人。',vdVn:'Em nên tự mình cố gắng học, không thể lúc nào cũng dựa vào người khác.'}}
     ],
     lamThu:[
       {s:'这是你＿＿的事，应该＿＿做。',dap:[false,true],mau:true,
        giai:'Chỗ trống 1 là định ngữ (…的事) — chỉ 自己; chỗ trống 2 nhấn mạnh “tự mình làm, không nhờ ai” → 自己.'},
       {s:'今年我的业绩全公司第一，新年晚会上，总裁＿＿给我发了奖金。',dap:[true,false],
        giai:'Tổng giám đốc là người địa vị cao, việc trao thưởng tận tay thể hiện sự coi trọng → 亲自.'},
       {s:'希望您能＿＿来参加这次活动。',dap:[true,false],
        giai:'Lời mời trang trọng, đối phương được tôn trọng → 亲自.'},
       {s:'每个学生都有＿＿的性格特点和兴趣爱好，因此老师在教育学生时应该注意选择合适的方法。',dap:[false,true],
        giai:'Làm định ngữ (…的性格特点) — chỉ đại từ 自己 làm được.'}
     ]
   }},

  {pair:'曾经 — 已经',
   same:'Đều là phó từ chỉ thời gian, đều có thể nói về việc xảy ra trước hiện tại.',
   sameEx:{zh:'这本书我曾经／已经看过。',vn:'Cuốn sách này tôi đã (từng) đọc rồi.'},
   items:[
     {word:'曾经',points:[
       'Việc TRƯỚC ĐÂY từng có, thường nay đã kết thúc, không còn nữa.',
       'Hay đi với 过: 曾经 + V + 过.',
       'Thời gian đã xa; không dùng cho việc vừa xong.'
     ],ex:[{zh:'人们曾经把西红柿当做有害的果子。',vn:'Người ta từng coi cà chua là loại quả có hại.'}]},
     {word:'已经',points:[
       'Việc ĐÃ hoàn thành, kết quả / trạng thái có thể vẫn kéo dài đến hiện tại.',
       'Hay đi với 了: 已经 + V + 了.',
       'Dùng được cho việc vừa xảy ra: 电影已经开始了.'
     ],ex:[{zh:'他已经三天没吃东西了。',vn:'Anh ấy đã ba ngày không ăn gì rồi.'}]}
   ],
   quiz:[
     {sentence:'人们＿＿把西红柿当做有害的果子。',options:['曾经','已经'],answer:0,
      why:'Chuyện trong QUÁ KHỨ, nay người ta không còn nghĩ vậy nữa → 曾经 (bài tập 2 ④ của sách).'},
     {sentence:'快走吧，电影＿＿开始了！',options:['曾经','已经'],answer:1,
      why:'Việc vừa xảy ra, trạng thái còn đến hiện tại → 已经……了.'},
     {sentence:'我＿＿在这家餐馆打过工，所以跟老板很熟。',options:['曾经','已经'],answer:0,
      why:'Kinh nghiệm từng có trước đây, nay đã thôi → 曾经……过.'},
     {sentence:'他＿＿戒烟三年了，身体越来越好。',options:['曾经','已经'],answer:1,
      why:'Trạng thái bỏ thuốc kéo dài đến bây giờ → 已经; 曾经 hàm ý nay không còn nữa, trái với 越来越好.'}
   ]},

  {pair:'表现 — 表达',
   same:'Đều có nghĩa làm cho người khác thấy / biết được một điều gì đó.',
   sameEx:{zh:'他用这首诗表达／表现了对家乡的爱。',vn:'Anh ấy dùng bài thơ này để thể hiện tình yêu với quê hương.'},
   items:[
     {word:'表现',points:[
       'Thể hiện qua HÀNH ĐỘNG, kết quả, thái độ — người khác nhìn thấy được.',
       'Hay đi với 得: 表现得很突出.',
       'Làm được danh từ: 他的表现 (biểu hiện, thành tích).'
     ],ex:[{zh:'他在今晚的比赛中表现得很突出。',vn:'Trong trận đấu tối nay cậu ấy thể hiện rất nổi bật.'}]},
     {word:'表达',points:[
       'Nói ra, viết ra SUY NGHĨ, TÌNH CẢM bằng lời hoặc chữ.',
       'Tân ngữ: 意思, 感情, 想法, 感谢.'
     ],ex:[{zh:'我不知道怎么用汉语表达我的想法。',vn:'Tôi không biết diễn đạt suy nghĩ của mình bằng tiếng Trung thế nào.'}]}
   ],
   quiz:[
     {sentence:'他平时成绩一般，但在今晚的比赛中＿＿得很突出。',options:['表现','表达'],answer:0,
      why:'Nói về thành tích, hành động trong trận đấu → 表现 (bài tập 2 ① của sách).'},
     {sentence:'我想写一封信，＿＿我对老师的感谢。',options:['表现','表达'],answer:1,
      why:'Nói ra tình cảm bằng CHỮ → 表达.'},
     {sentence:'这个学期小明的＿＿很好，老师表扬了他。',options:['表现','表达'],answer:0,
      why:'Danh từ “biểu hiện, thành tích” → 表现.'},
     {sentence:'他说了半天，还是没把自己的意思＿＿清楚。',options:['表现','表达'],answer:1,
      why:'Diễn đạt Ý bằng lời → 表达清楚.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'见解',hv:'kiến giải',vn:'cách nhìn, quan điểm',note:'“Kiến giải” tiếng Việt cũng là cách hiểu, cách giải thích riêng.'},
    {zh:'近代',hv:'cận đại',vn:'thời cận đại',note:'Trùng khít — “lịch sử cận đại”.'},
    {zh:'学问',hv:'học vấn',vn:'học vấn, học thức',note:'Trùng khít: 有学问 = có học vấn.'},
    {zh:'平均',hv:'bình quân',vn:'trung bình',note:'“Bình quân đầu người” = 人均 / 平均每人.'},
    {zh:'招待',hv:'chiêu đãi',vn:'chiêu đãi, tiếp đãi',note:'Trùng khít — “tiệc chiêu đãi”.'},
    {zh:'保存',hv:'bảo tồn',vn:'giữ gìn, lưu giữ',note:'“Bảo tồn di tích” — cũng dùng cho tài liệu, file: 保存文件 = lưu file.'},
    {zh:'资料',hv:'tư liệu',vn:'tài liệu, tư liệu',note:'Trùng khít — “tư liệu lịch sử” = 历史资料.'},
    {zh:'交际',hv:'giao tế',vn:'giao tiếp, xã giao',note:'“Giao tế” trong “nghi thức giao tế” — tức là giao tiếp xã hội.'},
    {zh:'光临',hv:'quang lâm',vn:'đến dự (lời kính trọng)',note:'“Hân hạnh được quý khách quang lâm” — đúng như 欢迎光临.'},
    {zh:'好客',hv:'hiếu khách',vn:'hiếu khách',note:'Trùng khít. Nhớ 好 đọc hào như 爱好.'},
    {zh:'文学家',hv:'văn học gia',vn:'nhà văn',note:'家 = “gia” (nhà …): 作家 tác gia, 画家 hoạ gia.'}
  ],
  idiom:[
    {zh:'呼朋唤友',hv:'hô bằng hoán hữu',vn:'rủ rê, tập hợp bạn bè',note:'Hô = gọi, hoán = kêu, bằng hữu = bạn bè → gọi bạn bè đến.'},
    {zh:'醉眼蒙眬',hv:'tuý nhãn mông lung',vn:'mắt say lờ đờ',note:'Cụm bốn chữ trong câu thơ của Úc Đạt Phu.'}
  ],
  trap:[
    {zh:'地道',hv:'địa đạo',vn:'chính gốc, chuẩn vị',
     warn:'BẪY: “địa đạo” tiếng Việt là đường hầm (địa đạo Củ Chi). 地道 đọc dìdao (thanh nhẹ) = chính cống; chỉ khi đọc dìdào mới là đường hầm.'},
    {zh:'突出',hv:'đột xuất',vn:'nổi bật',
     warn:'BẪY: “đột xuất” tiếng Việt = bất ngờ, không báo trước. 突出 tiếng Trung = nổi bật, nhô lên.'},
    {zh:'豪华',hv:'hào hoa',vn:'sang trọng, xa hoa',
     warn:'BẪY: “hào hoa” tiếng Việt tả người (hào hoa phong nhã). 豪华 tả nơi chốn, đồ vật: 豪华的酒店.'},
    {zh:'形容',hv:'hình dung',vn:'miêu tả',
     warn:'BẪY: “hình dung” tiếng Việt là tưởng tượng ra. 形容 là MIÊU TẢ bằng lời; tưởng tượng phải nói 想象.'},
    {zh:'彷徨',hv:'bàng hoàng',vn:'do dự, đi đi lại lại',
     warn:'BẪY: “bàng hoàng” tiếng Việt là sững sờ, choáng váng. 彷徨 là lưỡng lự không biết đi đâu — và là tên tập truyện của Lỗ Tấn.'},
    {zh:'大方',hv:'đại phương',vn:'hào phóng, tự nhiên',
     warn:'Âm Hán–Việt không gợi nghĩa. 大方 (dàfang) = rộng rãi; đọc dàfāng lại là “người trong nghề”.'},
    {zh:'蒙眬',hv:'mông lung',vn:'(mắt) lờ mờ',
     warn:'Gần nghĩa nhưng khác phạm vi: “mông lung” tiếng Việt tả suy nghĩ mơ hồ; 蒙眬 chủ yếu tả ĐÔI MẮT nhìn mờ vì say, vì buồn ngủ.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — bảng 词语搭配 của giáo trình (tr. 87) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'讲究',right:'卫生'},
  {left:'戒',right:'烟'},
  {left:'地道的',right:'北京小吃'},
  {left:'高档的',right:'家具'},
  {left:'算得上',right:'行家'},
  {left:'保存',right:'至今'},
  {left:'一条',right:'胡同'},
  {left:'一首',right:'诗'},
  {left:'表现',right:'突出'},
  {left:'描写得',right:'十分形象'},
  {left:'独特的',right:'见解'},
  {left:'大方',right:'好客'},
  {left:'呼朋',right:'唤友'},
  {left:'欢迎',right:'光临'},
  {left:'爱好',right:'交际'},
  {left:'在家',right:'招待朋友'},
  {left:'历史',right:'资料'},
  {left:'醉眼',right:'蒙眬'},
  {left:'平均每周',right:'去一次'},
  {left:'位于',right:'菜市口附近'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài là đáp án ít nhất một lần
// ══════════════════════════════════════════
var fillData = [
  {pre:'他平时成绩一般，但在今晚的比赛中',blank:'表现',post:'得很突出。',hint:'(thể hiện)',ans:'表现'},
  {pre:'这一点在民国时期表现得尤其',blank:'突出',post:'。',hint:'(nổi bật)',ans:'突出'},
  {pre:'鲁迅是中国现代最伟大的',blank:'文学家',post:'之一。',hint:'(nhà văn)',ans:'文学家'},
  {pre:'这钱就',blank:'算',post:'我借给你的，将来你有了的时候再还我。',hint:'(coi như)',ans:'算'},
  {pre:'来北京一定要尝尝',blank:'地道',post:'的北京小吃。',hint:'(chính gốc)',ans:'地道'},
  {pre:'我爸爸是修车的',blank:'行家',post:'，什么车都会修。',hint:'(người thạo nghề)',ans:'行家'},
  {pre:'他对许多美食都有独特的',blank:'见解',post:'。',hint:'(cách nhìn, quan điểm)',ans:'见解'},
  {pre:'我对从1840年到1919年的中国',blank:'近代',post:'历史很感兴趣。',hint:'(thời cận đại)',ans:'近代'},
  {pre:'现在骑自行车上班成了一种新',blank:'时尚',post:'。',hint:'(mốt, trào lưu)',ans:'时尚'},
  {pre:'多读书可以提高',blank:'写作',post:'水平。',hint:'(viết văn)',ans:'写作'},
  {pre:'你快尝尝这地道的传统',blank:'点心',post:'。',hint:'(bánh ngọt, điểm tâm)',ans:'点心'},
  {pre:'我们的语文老师读过很多书，很有',blank:'学问',post:'。',hint:'(học thức)',ans:'学问'},
  {pre:'筷子是中餐最主要的进餐用具，在使用上也有很多',blank:'讲究',post:'。',hint:'(điều phải chú ý)',ans:'讲究'},
  {pre:'他',blank:'平均',post:'每两个星期要招待一次客人。',hint:'(trung bình)',ans:'平均'},
  {pre:'我爷爷在北京的一条老',blank:'胡同',post:'里住了几十年。',hint:'(ngõ, hẻm)',ans:'胡同'},
  {pre:'我们学校',blank:'位于',post:'市中心，交通很方便。',hint:'(nằm ở)',ans:'位于'},
  {pre:'刘半农1920年写了一',blank:'首',post:'题为《教我如何不想她》的小诗，流传至今。',hint:'(lượng từ của bài thơ)',ans:'首'},
  {pre:'广和居算不上',blank:'豪华',post:'，但却很适合朋友在这里聚会。',hint:'(sang trọng)',ans:'豪华'},
  {pre:'服务员一看见我们就说：“欢迎',blank:'光临',post:'！请问几位？”',hint:'(quý khách đến — lời kính trọng)',ans:'光临'},
  {pre:'她很善于',blank:'交际',post:'，到哪儿都能交到朋友。',hint:'(giao tiếp)',ans:'交际'},
  {pre:'越南人热情',blank:'好客',post:'，常常请朋友到家里吃饭。',hint:'(hiếu khách)',ans:'好客'},
  {pre:'一到周末，哥哥就',blank:'呼朋唤友',post:'去踢足球。',hint:'(rủ rê bạn bè)',ans:'呼朋唤友'},
  {pre:'谢谢你们的热情',blank:'招待',post:'！',hint:'(tiếp đãi)',ans:'招待'},
  {pre:'这家店只卖',blank:'高档',post:'服装，价格都很贵。',hint:'(cao cấp)',ans:'高档'},
  {pre:'他因为',blank:'胃',post:'病而戒了酒。',hint:'(dạ dày)',ans:'胃'},
  {pre:'新鲜的葡萄不易',blank:'保存',post:'，因此其价格也比较高。',hint:'(bảo quản, giữ gìn)',ans:'保存'},
  {pre:'为了写这篇文章，我在图书馆查了很多',blank:'资料',post:'。',hint:'(tài liệu)',ans:'资料'},
  {pre:'早上六点，弟弟睡眼',blank:'蒙眬',post:'地起了床。',hint:'(lờ mờ, ngái ngủ)',ans:'蒙眬'},
  {pre:'蓝天上，白云',blank:'悠悠',post:'地飘着。',hint:'(lững lờ, thong thả)',ans:'悠悠'},
  {pre:'郁达夫的这首诗描写得十分',blank:'形象',post:'。',hint:'(sinh động)',ans:'形象'},
  {pre:'《阿Q正传》的作者是著名文学家',blank:'鲁迅',post:'。',hint:'(Lỗ Tấn)',ans:'鲁迅'},
  {pre:'广和居在',blank:'民国',post:'时期非常出名。',hint:'(thời Dân Quốc)',ans:'民国'},
  {pre:'鲁迅还很爱吃',blank:'稻香村',post:'的点心。',hint:'(tiệm bánh Đạo Hương Thôn)',ans:'稻香村'},
  {pre:'在众多餐馆里，鲁迅去得最多、最喜欢的是',blank:'广和居',post:'。',hint:'(nhà hàng Quảng Hòa Cư)',ans:'广和居'},
  {pre:'广和居的位置很好，它位于',blank:'菜市口',post:'附近。',hint:'(Thái Thị Khẩu)',ans:'菜市口'},
  {pre:'现在保存的历史资料记载，鲁迅和',blank:'郁达夫',post:'一起喝酒的次数最多。',hint:'(Úc Đạt Phu)',ans:'郁达夫'},
  {pre:'《呐喊》和《',blank:'彷徨',post:'》是鲁迅的两部小说集。',hint:'(“Bàng hoàng”)',ans:'彷徨'},
  {pre:'《阿Q正传》收在鲁迅的第一部小说集《',blank:'呐喊',post:'》里。',hint:'(“Gào thét”)',ans:'呐喊'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (算 · 作为 · 曾经) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['这钱','就算','我','借给你','的','。'],ans:'这钱就算我借给你的。',audio:'这钱就算我借给你的。'},
  {words:['广和居','算不上','豪华','，','但','很适合','朋友聚会','。'],ans:'广和居算不上豪华，但很适合朋友聚会。',audio:'广和居算不上豪华，但很适合朋友聚会。'},
  {words:['不就是','一个空瓶子','吗','？','扔掉','算了','。'],ans:'不就是一个空瓶子吗？扔掉算了。',audio:'不就是一个空瓶子吗？扔掉算了。'},
  {words:['作为','大作家','，鲁迅','对吃','很讲究','。'],ans:'作为大作家，鲁迅对吃很讲究。',audio:'作为大作家，鲁迅对吃很讲究。'},
  {words:['我','把','那儿','作为','每晚散步','的','去处','。'],ans:'我把那儿作为每晚散步的去处。',audio:'我把那儿作为每晚散步的去处。'},
  {words:['郁达夫在1933年','曾经','作诗','形容他','。'],ans:'郁达夫在1933年曾经作诗形容他。',audio:'郁达夫在1933年曾经作诗形容他。'},
  {words:['我曾经','在北京','学过','一年汉语','。'],ans:'我曾经在北京学过一年汉语。',audio:'我曾经在北京学过一年汉语。'},
  {words:['他','曾经','戒过','烟','，','可现在','又抽上了','。'],ans:'他曾经戒过烟，可现在又抽上了。',audio:'他曾经戒过烟，可现在又抽上了。'},
  {words:['鲁迅','平均每周','都要','去一次','广和居','。'],ans:'鲁迅平均每周都要去一次广和居。',audio:'鲁迅平均每周都要去一次广和居。'},
  {words:['他明明','知道','自己有胃病','，','却很难','戒掉','。'],ans:'他明明知道自己有胃病，却很难戒掉。',audio:'他明明知道自己有胃病，却很难戒掉。'},
  {words:['这里','特别欢迎','文人','的','光临','。'],ans:'这里特别欢迎文人的光临。',audio:'这里特别欢迎文人的光临。'},
  {words:['那里的菜','样样','都','让人','有胃口','。'],ans:'那里的菜样样都让人有胃口。',audio:'那里的菜样样都让人有胃口。'},
  {words:['你','快','尝尝','这','地道的','传统点心','。'],ans:'你快尝尝这地道的传统点心。',audio:'你快尝尝这地道的传统点心。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'这份礼物是市长____为生病的小女孩儿做的。',opts:['亲自','自己','自然','自由'],ans:0,
   exp:'Người có địa vị (thị trưởng) tự tay làm, mang ý coi trọng → 亲自 (phó từ đứng trước động từ). 自己 cũng chỉ “tự mình” nhưng không có sắc thái trang trọng này; 自然, 自由 không hợp nghĩa.'},
  {wrong:'请大家带好____的资料。',opts:['自己','亲自','亲身','本来'],ans:0,
   exp:'Làm định ngữ (…的资料) — chỉ đại từ 自己 làm được. 亲自, 亲身 là phó từ, không đứng trước 的; 本来 là “vốn dĩ”.'},
  {wrong:'____大作家、大学问家，鲁迅对吃很讲究。',opts:['作为','成为','因为','认为'],ans:0,
   exp:'Nêu THÂN PHẬN của chủ ngữ ở đầu câu → giới từ 作为. 成为 là “trở thành” (cần chủ ngữ đứng trước); 因为 nêu nguyên nhân; 认为 là “cho rằng”.'},
  {wrong:'人们____把西红柿当做有害的果子。',opts:['曾经','已经','正在','马上'],ans:0,
   exp:'Việc trong quá khứ, nay không còn nữa → 曾经. 已经 nhấn mạnh việc đã xong và còn kéo dài đến nay — không hợp vì bây giờ người ta không nghĩ thế nữa.'},
  {wrong:'这怎么是个缺点呢？____是个优点呀！',opts:['明明','居然','往往','刚刚'],ans:0,
   exp:'Nhấn mạnh sự thật rõ ràng để bác bỏ ý người khác → 明明. 居然 là “không ngờ lại” (bài 1); 往往 là “thường thường”; 刚刚 là “vừa mới”.'},
  {wrong:'你咳嗽得这么厉害，真得____烟了！',opts:['戒','抽','停','改'],ans:0,
   exp:'Bỏ hẳn thói quen hút thuốc → 戒烟 (cụm cố định). 抽烟 là “hút thuốc” — ngược nghĩa; 停, 改 không kết hợp với 烟 như vậy.'},
  {wrong:'我今天胃不太舒服，所以没什么____。',opts:['胃口','口味','胃','味道'],ans:0,
   exp:'没(什么)胃口 = không thấy thèm ăn. 胃 là dạ dày (bộ phận cơ thể); 口味, 味道 là mùi vị của món ăn, không nói về cảm giác muốn ăn của người.'},
  {wrong:'他爱好交际，____好客，常呼朋唤友。',opts:['大方','大家','方便','豪华'],ans:0,
   exp:'Tả tính cách rộng rãi → 大方 (thường đi đôi 大方好客). 豪华 tả nơi chốn/đồ vật sang trọng, không tả người; 大家, 方便 không hợp nghĩa.'},
  {wrong:'郁达夫曾经作诗____他，描写得十分形象。',opts:['形容','形象','想象','表现'],ans:0,
   exp:'Dùng thơ để MIÊU TẢ một người → 形容 (động từ, mang tân ngữ 他). 形象 là tính từ “sinh động”; 想象 là “tưởng tượng”; 表现 là “thể hiện”.'},
  {wrong:'这个学期小明在班里的____很好，老师表扬了他。',opts:['表现','表达','表示','表演'],ans:0,
   exp:'Danh từ “biểu hiện, thành tích” của một người → 表现. 表达 là diễn đạt ý bằng lời; 表示 là “bày tỏ”; 表演 là “biểu diễn”.'},
  {wrong:'我对从1840年到1919年的中国____历史很感兴趣。',opts:['近代','现代','当代','古代'],ans:0,
   exp:'Từ 1840 đến 1919 là thời CẬN ĐẠI (近代) trong lịch sử Trung Quốc. 现代 là sau 1919; 当代 là đương đại; 古代 là cổ đại (trước 1840).'},
  {wrong:'广和居____不上豪华，但却很适合朋友聚会。',opts:['算','看','找','拿'],ans:0,
   exp:'算不上 = không đáng được coi là. 看不上 là “coi thường”, không hợp; 找不上, 拿不上 không mang nghĩa đánh giá.'},
  {wrong:'学习要____方法，不能只靠时间。',opts:['讲究','讲话','讲述','告诉'],ans:0,
   exp:'讲究 + 方法 = chú trọng phương pháp (bảng 词语搭配). 讲话 là “phát biểu”; 讲述 là “kể lại”; 告诉 là “nói cho biết” — đều không đi với 方法 theo nghĩa này.'},
  {wrong:'他的普通话说得非常____，一点儿也听不出是外国人。',opts:['地道','地方','道理','知道'],ans:0,
   exp:'Nói chuẩn như người bản xứ → 地道 (tính từ, đứng sau 非常). 地方, 道理 là danh từ; 知道 là động từ.'},
  {wrong:'这些都是宝贵的资料，应该好好儿____下来。',opts:['保存','保证','保持','保险'],ans:0,
   exp:'Giữ lại tài liệu cho khỏi mất → 保存下来. 保证 là “bảo đảm”; 保持 là “duy trì” (保持安静); 保险 là “bảo hiểm”.'},
  {wrong:'这____歌我听了很多遍，还是很喜欢。',opts:['首','张','本','篇'],ans:0,
   exp:'Lượng từ của bài hát, bài thơ → 首. 张 cho vật phẳng; 本 cho sách; 篇 cho bài văn.'},
  {wrong:'你以为这是____酒店啊，别穷讲究了。',opts:['高档','高兴','高大','高速'],ans:0,
   exp:'Khách sạn cao cấp → 高档酒店. 高兴 là “vui”; 高大 là “to cao”; 高速 là “tốc độ cao”.'},
  {wrong:'越南____东南亚。',opts:['位于','对于','由于','关于'],ans:0,
   exp:'Nằm ở vị trí nào → 位于 + nơi chốn. 对于, 关于 là giới từ “đối với, về”; 由于 là “do, bởi vì”.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Là lớp trưởng, cậu ấy không chỉ học giỏi mà mọi mặt đều thể hiện rất nổi bật.',zh:'作为班长，他不仅成绩好，在各方面的表现也都很突出。',py:'Zuòwéi bānzhǎng, tā bùjǐn chéngjì hǎo, zài gè fāngmiàn de biǎoxiàn yě dōu hěn tūchū.',goiY:['作为','不仅……也……','表现','突出'],giai:'作为 + thân phận đứng đầu câu, sau dấu phẩy phải có chủ ngữ (他…); 表现很突出 = thể hiện nổi bật, không dịch “biểu hiện đột xuất”.'},
  {vi:'Rõ ràng em nhớ là đã lưu tài liệu trong máy tính rồi, sao lại không tìm thấy nhỉ?',zh:'我明明记得把资料保存在电脑里了，怎么却找不到了？',py:'Wǒ míngmíng jìde bǎ zīliào bǎocún zài diànnǎo li le, zěnme què zhǎo bu dào le?',goiY:['明明……却……','保存','资料'],giai:'明明 (rõ ràng) + sự thật, vế sau dùng 却 để nêu điều trái ngược; 保存在 + nơi chốn = lưu ở đâu.'},
  {vi:'Quán nhỏ trước cổng trường tuy chẳng sang trọng gì, nhưng bánh trái bán ở đó vừa rẻ vừa đúng vị.',zh:'学校门口那家小店虽然算不上豪华，可是卖的点心又便宜又地道。',py:'Xuéxiào ménkǒu nà jiā xiǎo diàn suīrán suàn bu shàng háohuá, kěshì mài de diǎnxin yòu piányi yòu dìdao.',goiY:['虽然……可是……','算不上','地道'],giai:'算不上 + tính từ/danh từ = chưa thể coi là, chưa tới mức; 地道 (dìdao) = chính gốc, đúng vị; 又……又…… = vừa… vừa….'},
  {vi:'Em từng nghĩ học tốt ngữ pháp là đủ, về sau mới nhận ra chỉ có đọc nhiều viết nhiều thì khả năng viết văn mới thật sự tiến bộ.',zh:'我曾经以为学好语法就够了，后来才发现，只有多读多写，写作水平才能真正提高。',py:'Wǒ céngjīng yǐwéi xué hǎo yǔfǎ jiù gòu le, hòulái cái fāxiàn, zhǐyǒu duō dú duō xiě, xiězuò shuǐpíng cái néng zhēnzhèng tígāo.',goiY:['曾经','只有……才……','写作'],giai:'曾经 + động từ = đã từng (nay không còn thế); 只有 + điều kiện duy nhất, 才 + kết quả — không dùng 就 sau 只有.'},
  {vi:'Cô em rất cầu kỳ chuyện ăn mặc; tuy không chạy theo hàng hiệu cao cấp nhưng lúc nào cô cũng ăn mặc rất hợp mốt.',zh:'我姑姑对穿衣服特别讲究，她虽然不追求高档品牌，却总能穿得很时尚。',py:'Wǒ gūgu duì chuān yīfu tèbié jiǎngjiu, tā suīrán bù zhuīqiú gāodàng pǐnpái, què zǒng néng chuān de hěn shíshàng.',goiY:['讲究','虽然……却……','高档','时尚'],giai:'对 + lĩnh vực + 讲究 = cầu kỳ, kỹ tính về…; 却 đứng sau chủ ngữ, trước động từ, không đứng đầu vế như 但是.'},
  {vi:'Kỳ thi này điểm trung bình của lớp em được coi là cao nhất khối, đủ thấy công sức cả lớp bỏ ra học kỳ này không uổng phí.',zh:'这次考试我们班的平均分算是全年级最高的，可见大家这学期的努力没有白费。',py:'Zhè cì kǎoshì wǒmen bān de píngjūn fēn suàn shì quán niánjí zuì gāo de, kějiàn dàjiā zhè xuéqī de nǔlì méiyǒu báifèi.',goiY:['算是','平均','可见'],giai:'A 算是 B = A được coi là B (đánh giá tương đối); 可见 = đủ thấy, rút kết luận từ sự việc ở vế trước.'},
  {vi:'Mấy hôm nay em ăn không ngon miệng, món mẹ nấu em chẳng nuốt nổi miếng nào, mẹ đành bảo: “Thôi, muốn ăn gì thì tự gọi đồ ăn ngoài đi.”',zh:'这几天我胃口不好，妈妈做的菜我一口也吃不下，她只好说：“算了，想吃什么自己点外卖吧。”',py:'Zhè jǐ tiān wǒ wèikǒu bù hǎo, māma zuò de cài wǒ yì kǒu yě chī bu xià, tā zhǐhǎo shuō: “Suàn le, xiǎng chī shénme zìjǐ diǎn wàimài ba.”',goiY:['胃口不好','一……也……','只好','算了'],giai:'一 + lượng từ + 也 + phủ định = không… chút nào (一口也吃不下); 只好 = đành; 算了 = thôi, cho qua.'},
  {vi:'Là một người Bắc Kinh chính gốc, cậu em không những thuộc từng con ngõ mà còn có những nhận xét rất riêng về đồ ăn vặt Bắc Kinh.',zh:'作为一个地道的北京人，舅舅不但熟悉每一条胡同，而且对北京小吃也很有自己的见解。',py:'Zuòwéi yí ge dìdao de Běijīngrén, jiùjiu búdàn shúxī měi yì tiáo hútòng, érqiě duì Běijīng xiǎochī yě hěn yǒu zìjǐ de jiànjiě.',goiY:['作为','不但……而且……','胡同','见解'],giai:'作为 + thân phận ở đầu câu (với tư cách là…), chủ ngữ 舅舅 đứng sau dấu phẩy; 有见解 = có cách nhìn riêng, sâu sắc.'},
  {vi:'Mẹ em hào phóng, mến khách; mỗi lần em rủ rê bạn bè đến nhà chơi, mẹ chẳng những không ngại phiền mà còn đích thân vào bếp đãi mọi người.',zh:'妈妈大方好客，每当我呼朋唤友来家里玩，她不但不嫌麻烦，反而亲自下厨招待大家。',py:'Māma dàfang hàokè, měi dāng wǒ hūpéng-huànyǒu lái jiā li wán, tā búdàn bù xián máfan, fǎn\'ér qīnzì xiàchú zhāodài dàjiā.',goiY:['不但不……反而……','呼朋唤友','亲自','招待'],giai:'不但不 A，反而 B = chẳng những không A mà ngược lại còn B; 大方 (dàfang) ở đây = hào phóng, không phải “rộng rãi” về diện tích.'},
  {vi:'Đã coi việc trở thành nhà văn là mục tiêu thì em không thể chỉ đọc tiểu thuyết mạng, mà còn phải quan sát cuộc sống nhiều hơn, nếu không nhân vật dưới ngòi bút của em khó mà sống động được.',zh:'既然你把成为作家作为目标，就不能只看网络小说，还应该多观察生活，否则笔下的人物很难写得形象。',py:'Jìrán nǐ bǎ chéngwéi zuòjiā zuòwéi mùbiāo, jiù bù néng zhǐ kàn wǎngluò xiǎoshuō, hái yīnggāi duō guānchá shēnghuó, fǒuzé bǐ xià de rénwù hěn nán xiě de xíngxiàng.',goiY:['既然……就……','把……作为……','否则','形象'],giai:'把 A 作为 B = lấy A làm B, coi A là B; 否则 = nếu không thì, nêu hậu quả. 形象 ở đây là tính từ: sinh động, sống động.'}
];

// Chiều Trung → Việt — câu của bài đọc
var translateDataRev = [
  {vi:'Lỗ Tấn không chỉ là nhà văn nổi tiếng thời cận đại mà còn là một người sành ăn thực thụ.',zh:'鲁迅不仅是近代著名的文学家，还是一位地道的美食行家。',py:'Lǔ Xùn bùjǐn shì jìndài zhùmíng de wénxuéjiā, hái shì yí wèi dìdao de měishí hángjia.',goiY:['不仅……还…… = không chỉ… mà còn…','地道 = chính cống, thực thụ','行家 = người sành'],giai:'不仅……还…… nối hai thân phận theo kiểu tăng tiến; 行家 = người trong nghề, người sành → dịch theo ngữ cảnh “người sành ăn”.'},
  {vi:'Lỗ Tấn rất cầu kỳ chuyện ăn uống, vì thế ông có cách nhìn độc đáo của riêng mình về rất nhiều món ngon.',zh:'鲁迅对吃很讲究，因此对许多美食都有自己独特的见解。',py:'Lǔ Xùn duì chī hěn jiǎngjiu, yīncǐ duì xǔduō měishí dōu yǒu zìjǐ dútè de jiànjiě.',goiY:['因此 = vì thế','讲究 = cầu kỳ, chú trọng','见解 = cách nhìn, quan điểm'],giai:'因此 nêu kết quả (văn viết hơn 所以); 对……有见解 = có cách nhìn/quan điểm về…'},
  {vi:'Nhật ký của Lỗ Tấn ghi lại tên mấy chục nhà hàng, đủ thấy hồi sống ở Bắc Kinh ông từng là khách quen của các quán ăn.',zh:'鲁迅的日记里记载了几十家饭馆的名字，可见他在北京生活时曾经是饭馆的常客。',py:'Lǔ Xùn de rìjì li jìzǎi le jǐ shí jiā fànguǎn de míngzi, kějiàn tā zài Běijīng shēnghuó shí céngjīng shì fànguǎn de chángkè.',goiY:['记载 = ghi chép lại','可见 = đủ thấy','曾经 = đã từng'],giai:'可见 rút ra kết luận từ bằng chứng ở vế trước → “đủ thấy”; 曾经 chỉ việc đã qua, dịch “từng”.'},
  {vi:'Quảng Hòa Cư nằm gần Thái Thị Khẩu, rất gần con ngõ Lỗ Tấn ở lúc bấy giờ, vì vậy trở thành quán ăn ông hay lui tới.',zh:'广和居位于菜市口附近，离鲁迅当时住的胡同很近，所以成了他经常光临的饭馆。',py:'Guǎnghéjū wèiyú Càishìkǒu fùjìn, lí Lǔ Xùn dāngshí zhù de hútòng hěn jìn, suǒyǐ chéng le tā jīngcháng guānglín de fànguǎn.',goiY:['位于 = nằm ở','所以 = vì vậy','光临 = ghé tới (kính ngữ)'],giai:'位于 + địa điểm = nằm ở (văn viết); 光临 là từ kính trọng chỉ khách đến, dịch “lui tới, ghé”.'},
  {vi:'Món ăn ở đó vừa có loại cao cấp, vừa có loại dân thường ăn được, vì thế Lỗ Tấn hay đãi bạn bè ở đó.',zh:'那里的菜既有高档的，也有普通老百姓吃得起的，因此鲁迅常在那里招待朋友。',py:'Nàli de cài jì yǒu gāodàng de, yě yǒu pǔtōng lǎobǎixìng chī de qǐ de, yīncǐ Lǔ Xùn cháng zài nàli zhāodài péngyou.',goiY:['既……也…… = vừa… vừa…','高档 = cao cấp','招待 = chiêu đãi, thết đãi'],giai:'既……也…… liệt kê hai loại song song; 吃得起 = đủ tiền để ăn (bổ ngữ khả năng), dịch “ăn được, ăn nổi”.'},
  {vi:'Lỗ Tấn thích giao du, hào phóng và mến khách; hễ có bánh trái ngon là ông lại rủ rê bạn bè cùng thưởng thức.',zh:'鲁迅爱好交际，大方好客，只要有好吃的点心，他总是要呼朋唤友一起分享。',py:'Lǔ Xùn àihào jiāojì, dàfang hàokè, zhǐyào yǒu hǎochī de diǎnxin, tā zǒngshì yào hūpéng-huànyǒu yìqǐ fēnxiǎng.',goiY:['只要……总是…… = hễ… là…','大方好客 = hào phóng, mến khách','呼朋唤友 = rủ rê bạn bè'],giai:'只要 + điều kiện, 总是 + thói quen → “hễ… là…”; 爱好交际 = thích giao du, không dịch “yêu thích xã giao”.'},
  {vi:'Là người miền Nam, vậy mà Lỗ Tấn lại đặc biệt thích bánh ngọt của tiệm Đạo Hương Thôn ở Bắc Kinh, thường mua một lần là mấy hộp liền.',zh:'作为一个南方人，鲁迅却特别爱吃北京稻香村的点心，常常一买就是好几盒。',py:'Zuòwéi yí ge nánfāngrén, Lǔ Xùn què tèbié ài chī Běijīng Dàoxiāngcūn de diǎnxin, chángcháng yì mǎi jiù shì hǎo jǐ hé.',goiY:['作为 = là, với tư cách là','却 = lại, vậy mà','一……就是…… = một lần… là…'],giai:'作为 + thân phận nêu tiền đề, 却 cho thấy điều trái kỳ vọng (người miền Nam mà mê bánh Bắc Kinh); 一买就是好几盒 nhấn mạnh số lượng nhiều.'},
  {vi:'Lỗ Tấn biết rõ dạ dày mình không tốt, bác sĩ cũng khuyên ông bỏ thuốc bỏ rượu, thế nhưng ông bỏ mãi không được.',zh:'鲁迅明明知道自己胃不好，医生也劝他戒烟戒酒，可他却怎么也戒不掉。',py:'Lǔ Xùn míngmíng zhīdào zìjǐ wèi bù hǎo, yīshēng yě quàn tā jiè yān jiè jiǔ, kě tā què zěnme yě jiè bu diào.',goiY:['明明……却…… = rõ ràng… mà vẫn…','戒不掉 = bỏ không được'],giai:'明明 nêu sự thật hiển nhiên, 却 nêu hành động trái ngược; 戒不掉 là bổ ngữ khả năng phủ định = không bỏ được.'},
  {vi:'Năm 1933, Úc Đạt Phu từng làm thơ miêu tả Lỗ Tấn; tuy chỉ vỏn vẹn vài câu nhưng đã khắc họa hình ảnh ông vô cùng sống động.',zh:'1933年郁达夫曾经写诗形容鲁迅，虽然只有短短几句，却把他的形象描写得非常生动。',py:'Yī jiǔ sān sān nián Yù Dáfū céngjīng xiě shī xíngróng Lǔ Xùn, suīrán zhǐ yǒu duǎnduǎn jǐ jù, què bǎ tā de xíngxiàng miáoxiě de fēicháng shēngdòng.',goiY:['曾经 = đã từng','虽然……却…… = tuy… nhưng…','形象 = hình ảnh'],giai:'形象 ở đây là danh từ (hình ảnh, hình tượng), khác với tính từ “sinh động”; 却 nối vế trái ngược, dịch “nhưng”.'},
  {vi:'Nhiều người chỉ coi Lỗ Tấn là một nhà văn nghiêm nghị mà không biết ông cũng là người bình thường biết ăn biết chơi; đủ thấy hiểu biết của chúng ta về người nổi tiếng thường rất phiến diện.',zh:'很多人把鲁迅作为严肃的文学家来看，却不知道他也是个懂吃会玩的普通人，可见我们对名人的了解常常很片面。',py:'Hěn duō rén bǎ Lǔ Xùn zuòwéi yánsù de wénxuéjiā lái kàn, què bù zhīdào tā yě shì ge dǒng chī huì wán de pǔtōngrén, kějiàn wǒmen duì míngrén de liǎojiě chángcháng hěn piànmiàn.',goiY:['把……作为……来看 = coi… là…','却 = mà lại','可见 = đủ thấy'],giai:'把 A 作为 B (来看) = coi A là B; 可见 rút ra nhận xét chung từ ví dụ Lỗ Tấn → “đủ thấy”.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// (chủ đề theo phần 命题写作 của sách: 我喜欢的一位名人)
// ══════════════════════════════════════════
var writingData = {
  words:['作为','曾经','讲究','亲自','见解'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ giới thiệu một người nổi tiếng mà em thích.',
  outline:[
    'Câu mở: người đó là ai, thân phận gì (dùng 作为).',
    'Thân 1: một chuyện trong quá khứ của người đó (dùng 曾经).',
    'Thân 2: một nét tính cách, sở thích ít người biết (dùng 讲究 / 亲自 / 见解).',
    'Kết: cảm nghĩ của em về người đó.'
  ],
  model:{
    zh:'我最喜欢的名人是鲁迅。作为中国著名的文学家，他写了很多有名的小说。他曾经在日本学过医，后来觉得改变人的思想更重要，就开始写作。没想到他对吃也很讲究，不但会吃，还会亲自下厨，对美食有独特的见解。我觉得他是一个真实又可爱的人。',
    py:'Wǒ zuì xǐhuan de míngrén shì Lǔ Xùn. Zuòwéi Zhōngguó zhùmíng de wénxuéjiā, tā xiěle hěn duō yǒumíng de xiǎoshuō. Tā céngjīng zài Rìběn xuéguo yī, hòulái juéde gǎibiàn rén de sīxiǎng gèng zhòngyào, jiù kāishǐ xiězuò. Méi xiǎngdào tā duì chī yě hěn jiǎngjiu, búdàn huì chī, hái huì qīnzì xiàchú, duì měishí yǒu dútè de jiànjiě. Wǒ juéde tā shì yí ge zhēnshí yòu kě\'ài de rén.',
    vn:'Người nổi tiếng tôi thích nhất là Lỗ Tấn. Là nhà văn nổi tiếng của Trung Quốc, ông đã viết rất nhiều truyện nổi tiếng. Ông từng học y ở Nhật Bản, về sau thấy thay đổi tư tưởng con người quan trọng hơn nên bắt đầu viết văn. Không ngờ ông cũng rất cầu kỳ chuyện ăn, không những biết ăn mà còn tự tay vào bếp, có cách nhìn độc đáo về món ngon. Tôi thấy ông là một người chân thật và đáng yêu.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Câu 作为…… có chủ ngữ ở vế sau đúng là người mang thân phận đó chưa?',
    'Có ít nhất một câu ghép (不但……还 / 虽然……但是 / 因为……所以) chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，介绍一位你喜欢的名人。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  tuDung:[
    {tu:'作为', loai:'giới từ / động từ', cach:'作为 + thân phận，主语 + …… · 把 A 作为 B',
     sai:[{re:'作为是', sua:'作为 + danh từ', giai:'作为 đã mang nghĩa “với tư cách là”, không thêm 是 phía sau: 作为学生 chứ không 作为是学生.'},
          {re:'作为(?:[^，。]{1,10})，(?:应该|要|必须)', sua:'作为……，我们应该……', giai:'Vế sau câu 作为 cần có CHỦ NGỮ chính là người mang thân phận ấy: 作为学生，我们应该…….', nhe:true}]},
    {tu:'曾经', loai:'phó từ', cach:'主语 + 曾经 + V + 过',
     sai:[{re:'曾经没', sua:'没(有)……过 / 不曾', giai:'Phủ định không nói 曾经没; nói 没(有) + V + 过 hoặc 不曾 + V.'},
          {re:'曾经(?=我|你|他|她|我们|他们)', sua:'他曾经……', giai:'曾经 là PHÓ TỪ, đứng sau chủ ngữ: 他曾经去过 chứ không 曾经他去过.', nhe:true}]},
    {tu:'讲究', loai:'động từ / tính từ', cach:'对 + N + 很讲究 · 讲究 + 吃/穿/卫生/方法',
     sai:[{re:'讲究(?:于|在)', sua:'讲究 + N / 对 + N + 讲究', giai:'讲究 mang tân ngữ trực tiếp (讲究吃) hoặc dùng 对……很讲究; không thêm 于/在 phía sau.'},
          {re:'很讲究(?=吃|穿|卫生|方法)', sua:'对吃很讲究 / 很讲究吃', giai:'“Rất cầu kỳ chuyện ăn” nói 对吃很讲究 là tự nhiên nhất; 很讲究吃 cũng dùng được nhưng dễ nhầm trật tự.', nhe:true}]},
    {tu:'亲自', loai:'phó từ', cach:'主语 + 亲自 + V',
     sai:[{re:'亲自的', sua:'自己的', giai:'亲自 là phó từ, không làm định ngữ. “… của mình” phải dùng 自己的.'},
          {re:'亲自(?=[，。！？])', sua:'亲自 + động từ', giai:'亲自 phải đứng ngay TRƯỚC động từ, không đứng cuối câu.'}]},
    {tu:'见解', loai:'danh từ', cach:'对……有(独特的)见解',
     sai:[{re:'(?:很|非常|十分|特别)见解', sua:'很有见解', giai:'见解 là DANH TỪ, không đi thẳng sau 很; nói 很有见解.'},
          {re:'见解(?=他|她|这|那|我)', sua:'对……有见解', giai:'见解 không làm động từ, không mang tân ngữ. Muốn nói “có quan điểm về …”: 对……有见解.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'作为 + thân phận，……', nhan:'作为', vd:'作为中国著名的文学家，他写了很多有名的小说。', khi:'Giới thiệu thân phận nhân vật — câu mở đoạn.'},
    {ten:'Chủ ngữ + 曾经 + V + 过', nhan:'曾经', vd:'他曾经在日本学过医。', khi:'Kể một chuyện trong quá khứ của nhân vật.'},
    {ten:'对 + N + 很讲究', nhan:'讲究', vd:'他对吃也很讲究。', khi:'Nêu một nét tính cách, sở thích.'},
    {ten:'不但……，还……', nhan:'不但', vd:'他不但会吃，还会亲自下厨。', khi:'Nối hai ý tăng tiến — y như câu trong bài khoá.'},
    {ten:'A 算得上 / 算不上 B', nhan:'算', vd:'在吃喝这件事上，他算得上是个行家。', khi:'Đưa ra đánh giá về nhân vật.'},
    {ten:'虽然明明……，但却……', nhan:'明明', vd:'他虽然明明知道喝酒不好，但却很难戒掉。', khi:'Kể một khuyết điểm rất “người” của nhân vật.'},
    {ten:'我觉得…… / 这让我明白了……', nhan:'我觉得', vd:'我觉得他是一个真实又可爱的人。', khi:'Câu KẾT — nêu cảm nghĩ.'}
  ],

  // 书写 第一部分 · 完成句子 — 3 câu đầu là đáp án 29–31 của sách bài tập
  sapXep:[
    {manh:['戒了酒','他','而','因为胃病'],
     dap:'他因为胃病而戒了酒。',
     vn:'Anh ấy vì bệnh dạ dày mà bỏ rượu.',
     giai:'因为……而…… (văn viết): chủ ngữ 他 → 因为 + nguyên nhân → 而 + kết quả. 而 luôn đứng ngay trước vế kết quả.'},
    {manh:['传统点心','你快','这地道的','尝尝'],
     dap:'你快尝尝这地道的传统点心。',
     vn:'Cậu mau nếm thử món bánh truyền thống chính gốc này đi.',
     giai:'Chủ ngữ + 快 + động từ lặp 尝尝 + tân ngữ. Định ngữ 这地道的 đứng trước danh từ 传统点心.'},
    {manh:['要招待','一次客人','他平均','每两个星期'],
     dap:'他平均每两个星期要招待一次客人。',
     vn:'Trung bình cứ hai tuần anh ấy lại tiếp khách một lần.',
     giai:'平均 + 每 + thời gian đứng trước động từ; số lần 一次 đứng giữa động từ và tân ngữ: 招待一次客人.'},
    {manh:['在北京','曾经','这位作家','生活过'],
     dap:'这位作家曾经在北京生活过。', chap:['这位作家在北京曾经生活过。'],
     vn:'Nhà văn này từng sống ở Bắc Kinh.',
     giai:'Chủ ngữ → 曾经 → 在 + nơi chốn → V + 过. 曾经 thường đứng trước cụm giới từ.'},
    {manh:['算不上','这家餐馆','但菜很地道','豪华，'],
     dap:'这家餐馆算不上豪华，但菜很地道。',
     vn:'Nhà hàng này không thể coi là sang trọng, nhưng món ăn rất chuẩn vị.',
     giai:'A + 算不上 + B: A không đáng được coi là B. Vế sau có 但 lật lại.'},
    {manh:['作为','我们','应该好好学习','学生，'],
     dap:'作为学生，我们应该好好学习。',
     vn:'Là học sinh, chúng ta nên học hành chăm chỉ.',
     giai:'作为 + thân phận đứng đầu câu, vế sau có chủ ngữ 我们 — chính là 学生.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo phần 讨论话题 của sách: 我喜欢的一位名人
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 作为 · 曾经 · 算 · 讲究 · 地道 · 招待 · 胃口.',
  questions:[
    {q_zh:'你喜欢的名人是谁？简单介绍一下有关他/她的情况。',
     q_vn:'Người nổi tiếng em thích là ai? Giới thiệu ngắn gọn về người đó.',
     hint:'Dùng 作为…… + 曾经……',
     sample:'我喜欢的名人是鲁迅。作为中国著名的文学家，他写了《呐喊》和《彷徨》。他曾经在日本学过医。',
     sample_vn:'Người nổi tiếng tôi thích là Lỗ Tấn. Là nhà văn nổi tiếng của Trung Quốc, ông đã viết “Gào thét” và “Bàng hoàng”. Ông từng học y ở Nhật Bản.',
     note:'Câu hỏi trong phần 讨论话题 của sách — nói thành đoạn 3–4 câu: là ai → thân phận → một chuyện nổi bật.'},
    {q_zh:'你如何评价他/她？你喜欢他/她的理由是什么？',
     q_vn:'Em đánh giá người đó thế nào? Lý do em thích người đó là gì?',
     hint:'Dùng 我觉得…… + 因为……',
     sample:'我觉得他不但是个大作家，而且是个很真实的人。因为他也爱吃、爱交朋友，一点儿也不像课本里那么严肃。',
     sample_vn:'Tôi thấy ông không những là nhà văn lớn mà còn là một người rất thật. Vì ông cũng thích ăn, thích kết bạn, chẳng hề nghiêm nghị như trong sách giáo khoa.',
     note:'如何评价 = đánh giá thế nào (如何 — bài 1). Phải nêu LÝ DO cụ thể.'},
    {q_zh:'你跟朋友聚会时常常去哪儿？为什么？',
     q_vn:'Khi tụ tập với bạn bè em hay đi đâu? Vì sao?',
     hint:'Dùng 算不上……，但…… / 平均……',
     sample:'我们常去学校附近的一家小饭馆。那儿算不上豪华，但菜很地道，价格也便宜，我们平均每个月去两次。',
     sample_vn:'Chúng tôi hay đến một quán nhỏ gần trường. Ở đó không thể coi là sang trọng, nhưng món ăn rất chuẩn vị, giá lại rẻ, trung bình mỗi tháng chúng tôi đến hai lần.',
     note:'Câu hỏi này giống phần khởi động 热身 2 của sách — nêu địa điểm + hoạt động + lý do.'},
    {q_zh:'你对吃讲究吗？说说你最喜欢的一道菜。',
     q_vn:'Em có cầu kỳ chuyện ăn không? Kể về món ăn em thích nhất.',
     hint:'Dùng 讲究 / 地道 / 让人有胃口',
     sample:'我对吃不太讲究，但是很喜欢妈妈做的鱼汤。每次一闻到那个味道，就让人特别有胃口。',
     sample_vn:'Tôi không cầu kỳ chuyện ăn lắm, nhưng rất thích món canh cá mẹ nấu. Mỗi lần ngửi thấy mùi là thấy rất thèm ăn.',
     note:'Trả lời “có / không” xong phải có VÍ DỤ cụ thể thì mới đủ ý.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 9.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án:
// 1-8 = D A B B A C C D).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第9课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'难道鲁迅这样的大文学家还会做饭？'},
            {sp:'男',zh:'他不但会做，还对美食很有见解，是个地道的行家。'}],
     q:'关于鲁迅，下列哪项正确？',qvn:'Về Lỗ Tấn, câu nào dưới đây đúng?',
     opts:['不会做饭','只会吃不会做','对美食没有兴趣','是美食行家'],ans:3,
     why:'Người đàn ông nói 是个地道的行家 — là người sành sỏi thực thụ. Câu 难道……还会做饭? của người phụ nữ chỉ là câu hỏi ngạc nhiên, đã bị phủ định bằng 不但会做.',
     words:['文学家','见解','地道','行家']},

    {n:2,
     lines:[{sp:'男',zh:'作为这方面的专家，您对这个问题怎么看？'},
            {sp:'女',zh:'我已经就这个问题专门写了一篇文章。'}],
     q:'男的为什么要问女的的意见？',qvn:'Vì sao người đàn ông hỏi ý kiến người phụ nữ?',
     opts:['女的是专家','女的是记者','女的是他的老师','女的刚出了一本书'],ans:0,
     why:'Từ khoá là 作为这方面的专家 — “với tư cách là chuyên gia lĩnh vực này”. 作为 dẫn ra THÂN PHẬN của người được hỏi — đúng điểm ngữ pháp của bài.',
     words:['作为']},

    {n:3,
     lines:[{sp:'女',zh:'听说那家铺子的点心不错，咱们哪天去尝尝吧？'},
            {sp:'男',zh:'我最近胃不太好，吃什么都没胃口。'}],
     q:'对于女的的建议，男的是什么态度？',qvn:'Người đàn ông có thái độ thế nào với đề nghị của người phụ nữ?',
     opts:['非常赞成','不太想去','马上就去','觉得太贵'],ans:1,
     why:'吃什么都没胃口 = ăn gì cũng không thấy ngon → từ chối khéo, không muốn đi. HSK 5 hay hỏi THÁI ĐỘ ẩn sau lời nói, không nói thẳng “không đi”.',
     words:['点心','胃','胃口']},

    {n:4,
     lines:[{sp:'男',zh:'真没想到这些年老刘的生意做得这么大！'},
            {sp:'女',zh:'是啊，不声不响地，他们公司都位居行业之首了。'}],
     q:'老刘的公司在本行业中地位如何？',qvn:'Công ty của lão Lưu có vị trí thế nào trong ngành?',
     opts:['刚刚成立','排第一','快要倒闭','排在中间'],ans:1,
     why:'位居行业之首 = đứng đầu ngành. 首 ở đây là “vị trí đứng đầu” — giống 北京“八大居”之首 trong bài.',
     words:['首']},

    {n:5,
     lines:[{sp:'女',zh:'这些都是宝贵的资料，应该好好儿保存下来。'},
            {sp:'男',zh:'我那儿还有一大堆呢。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['他那儿资料还很多','资料已经丢了','资料不值得保存','他不想要这些资料'],ans:0,
     why:'我那儿还有一大堆呢 = chỗ tôi còn cả đống — tức là tài liệu còn rất nhiều. Bẫy: dễ hiểu nhầm là “không cần giữ”.',
     words:['资料','保存']},

    {n:6,
     lines:[{sp:'男',zh:'你读过鲁迅先生的《彷徨》吗？'},
            {sp:'女',zh:'当然读过，那是鲁迅的小说作品集，共收录他1924年到1925年所作的11篇小说。'}],
     q:'关于《彷徨》，下列哪项不正确？',qvn:'Về “Bàng hoàng”, câu nào dưới đây KHÔNG đúng?',
     opts:['是鲁迅的作品','是一部小说集','收录了21篇小说','作品写于1924到1925年'],ans:2,
     why:'Nguyên văn là 11篇小说, không phải 21 篇. Chú ý dạng câu hỏi 哪项不正确 — phải tìm câu SAI, đọc đề kỹ trước khi nghe.',
     words:['鲁迅','彷徨']},

    {n:7,
     lines:[{sp:'女',zh:'咱们老同事好久不见了，周末聚聚吧？'},
            {sp:'男',zh:'好啊！去太和居怎么样？'},
            {sp:'女',zh:'我没去过。你觉得好吗？'},
            {sp:'男',zh:'算不上豪华，但很适合朋友聚会。'}],
     q:'男的觉得太和居怎么样？',qvn:'Người đàn ông thấy quán Thái Hòa Cư thế nào?',
     opts:['非常豪华','菜很贵','适合朋友聚会','离家很远'],ans:2,
     why:'算不上豪华，但很适合朋友聚会 — gần như nguyên câu trong bài khoá về 广和居. Vế sau 但 mới là ý chính.',
     words:['算','豪华']},

    {n:8,
     lines:[{sp:'男',zh:'要是经济上有困难，你尽管跟我说。'},
            {sp:'女',zh:'你已经帮我出了不少力了，不能让你再出钱。'},
            {sp:'男',zh:'就算是我借给你的好了，等你赚回来了再还我。'},
            {sp:'女',zh:'我会有办法的。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['想跟男的借钱','想马上还钱','希望男的多出力','不想再麻烦男的'],ans:3,
     why:'不能让你再出钱 + 我会有办法的 → cô không muốn làm phiền thêm. 就算是我借给你的 là cách dùng 算 “coi như” của bài (注释 1).',
     words:['算']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn rủ em đi ăn mừng sinh nhật, hỏi ý em về một quán gần trường.',
     a:{sp:'Bạn',zh:'学校旁边那家饭馆怎么样？环境好吗？',vn:'Quán gần trường thế nào? Không gian có đẹp không?'},
     need:['Dùng 算不上……，但……','Khen một điểm CỤ THỂ của quán'],
     sample:'那家饭馆算不上豪华，但菜很地道，而且很适合朋友聚会。',
     samplePy:'Nà jiā fànguǎn suàn bu shàng háohuá, dàn cài hěn dìdao, érqiě hěn shìhé péngyou jùhuì.',
     sampleVn:'Quán đó không thể coi là sang trọng, nhưng món ăn rất chuẩn vị, lại rất hợp để bạn bè tụ tập.',
     tip:'算不上 + tính từ/danh từ. Đừng viết 不算上豪华 — sai trật tự.'},

    {scene:'Cô giáo hỏi em về một người nổi tiếng em thích.',
     a:{sp:'Cô',zh:'你最喜欢哪位名人？能介绍一下吗？',vn:'Em thích nhất người nổi tiếng nào? Giới thiệu cô nghe được không?'},
     need:['Dùng 作为','Dùng 曾经 kể một chuyện trong quá khứ'],
     sample:'我最喜欢鲁迅。作为一位大作家，他曾经说过，他是把别人喝咖啡的时间都用在了学习上。',
     samplePy:'Wǒ zuì xǐhuan Lǔ Xùn. Zuòwéi yí wèi dà zuòjiā, tā céngjīng shuōguo, tā shì bǎ biérén hē kāfēi de shíjiān dōu yòng zài le xuéxí shang.',
     sampleVn:'Em thích nhất Lỗ Tấn. Là một nhà văn lớn, ông từng nói ông đem thời gian người khác uống cà phê dùng hết vào việc học.',
     tip:'作为 + thân phận xong, vế sau phải có chủ ngữ đúng là người đó (他), đừng đổi sang chủ ngữ khác.'},

    {scene:'Em thấy bố lại cầm điếu thuốc dù bác sĩ đã dặn phải bỏ.',
     a:{sp:'Bố',zh:'就抽一根，没关系的。',vn:'Hút một điếu thôi, không sao đâu.'},
     need:['Dùng 明明','Dùng 戒'],
     sample:'爸爸，您明明知道自己胃不好，医生也让您戒烟，怎么又抽上了？',
     samplePy:'Bàba, nín míngmíng zhīdào zìjǐ wèi bù hǎo, yīshēng yě ràng nín jiè yān, zěnme yòu chōushang le?',
     sampleVn:'Bố ơi, bố biết rõ dạ dày mình không tốt, bác sĩ cũng bảo bố bỏ thuốc, sao lại hút nữa?',
     tip:'明明 + sự thật, vế sau nêu điều trái ngược. Nói với bố mẹ dùng 您 cho lễ phép.'},

    {scene:'Bạn nước ngoài đến nhà em chơi lần đầu, cảm ơn cả nhà.',
     a:{sp:'Bạn',zh:'谢谢你们！今天的菜太好吃了。',vn:'Cảm ơn cả nhà! Món ăn hôm nay ngon quá.'},
     need:['Dùng 招待 hoặc 光临','Giữ giọng khách sáo, lịch sự'],
     sample:'不客气，欢迎你常来！要是招待得不好，请多原谅。',
     samplePy:'Bú kèqi, huānyíng nǐ cháng lái! Yàoshi zhāodài de bù hǎo, qǐng duō yuánliàng.',
     sampleVn:'Không có gì, chào mừng cậu thường xuyên ghé chơi! Nếu tiếp đãi chưa chu đáo thì bỏ quá cho nhé.',
     tip:'Người Trung Quốc hay khiêm tốn: 招待不周 / 招待得不好. Không nói 你光临得很好 — 光临 không đi với bổ ngữ như vậy.'},

    {scene:'Bạn rủ đi ăn lẩu cay nhưng em đang đau dạ dày.',
     a:{sp:'Bạn',zh:'晚上一起去吃火锅吧！',vn:'Tối nay đi ăn lẩu nhé!'},
     need:['Dùng 胃 và 胃口','Từ chối khéo, hẹn lần khác'],
     sample:'真不好意思，我这几天胃不太舒服，吃什么都没胃口。下次吧！',
     samplePy:'Zhēn bù hǎoyìsi, wǒ zhè jǐ tiān wèi bú tài shūfu, chī shénme dōu méi wèikǒu. Xià cì ba!',
     sampleVn:'Thật ngại quá, mấy hôm nay dạ dày tớ không ổn, ăn gì cũng không thấy ngon. Để lần sau nhé!',
     tip:'胃 là dạ dày, 胃口 là cảm giác thèm ăn — đừng dùng lẫn: ✗ 我胃口疼.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体 (đặc trưng riêng của HSK 5)
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Nhân viên nhà hàng chào khách ở cửa.',
     a:'欢迎光临！',b:'你来了！',better:'a',
     why:'光临 là lời kính trọng dành cho KHÁCH — đúng vai nhân viên phục vụ. 你来了 chỉ dùng với người quen.'},

    {scene:'Em viết bài giới thiệu địa điểm cho tạp chí du lịch.',
     a:'广和居就在菜市口旁边。',b:'广和居位于菜市口附近。',better:'b',
     why:'位于 là cách nói VĂN VIẾT, trang trọng — hợp với bài giới thiệu. 就在……旁边 là khẩu ngữ.'},

    {scene:'Em nhắn tin rủ bạn thân đi ăn cuối tuần.',
     a:'周末去那家店吃吧，菜挺地道的！',b:'周末我们前往该店用餐，其菜品十分地道。',better:'a',
     why:'Câu b dùng 前往, 该店, 用餐, 其 — giọng văn công văn, nhắn bạn thân nghe rất buồn cười. Khẩu ngữ thân mật dùng câu a.'},

    {scene:'Lớp em mời thầy hiệu trưởng dự buổi văn nghệ.',
     a:'希望您能亲自来参加我们的活动。',b:'你自己来参加吧。',better:'a',
     why:'Mời người có địa vị cao → 您 + 亲自, thể hiện sự tôn trọng (đúng phần 词语辨析 của bài). Câu b nghe như ra lệnh.'},

    {scene:'Em viết bài thuyết trình lịch sử về Lỗ Tấn.',
     a:'鲁迅那会儿特爱喝酒。',b:'鲁迅生前十分爱喝酒。',better:'b',
     why:'那会儿, 特 là khẩu ngữ. Bài thuyết trình dùng 生前 (lúc sinh thời), 十分 — trang trọng hơn.'},

    {scene:'Bạn cùng phòng hỏi có nên giữ cái chai rỗng không.',
     a:'不就是一个空瓶子吗？扔掉算了。',b:'此物已无保存价值，建议丢弃。',better:'a',
     why:'Chuyện vặt giữa bạn bè, 算了 (thôi bỏ đi) rất tự nhiên — đúng câu ví dụ của sách. Câu b là văn bản hành chính.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo bài tập 4 của sách (tr. 89):
// 鲁迅与美食 · 广和居 · 鲁迅与酒
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Mở', cue:'美食很大一部分是靠名人推动的，这一点在……', words:['民国','表现','突出']},
    {step:'Lỗ Tấn & ẩm thực', cue:'鲁迅在吃喝这件事上……', words:['算','地道','行家','亲自','见解']},
    {step:'Ăn uống ở Bắc Kinh', cue:'作为大作家，鲁迅对吃……', words:['作为','讲究','点心','稻香村']},
    {step:'Quảng Hòa Cư', cue:'鲁迅最喜欢的是广和居，因为……', words:['广和居','平均','位于','胡同','豪华','光临']},
    {step:'Bạn bè', cue:'他爱好交际……', words:['交际','大方','好客','呼朋唤友','招待','胃口']},
    {step:'Lỗ Tấn & rượu', cue:'鲁迅也爱喝酒，虽然明明知道……', words:['胃','明明','戒','保存','资料','郁达夫','曾经','形容']}
  ],
  checklist: [
    'Kể đủ ba phần của sách: 鲁迅与美食 · 广和居 · 鲁迅与酒 chưa?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có dùng đúng 算, 作为, 曾经 — ba điểm ngữ pháp của bài không?',
    'Nói liền mạch khoảng 1–2 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 88–89) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['戒','首','保存','地道','讲究','形象'],
   cau:[
     {s:'著名的文学家、语言学家刘半农1920年写了一＿＿题为《教我如何不想她》的小诗，流传至今。', dap:['首']},
     {s:'筷子是中餐最主要的进餐用具，在使用上也有很多＿＿。', dap:['讲究']},
     {s:'你咳嗽得这么厉害，真得＿＿烟了！', dap:['戒']},
     {s:'作为一家北京的川菜馆，能做出如此＿＿的麻婆豆腐真是不容易。', dap:['地道']},
     {s:'新鲜的葡萄不易＿＿，因此其价格也比较高。', dap:['保存']},
     {s:'公司这次要求招聘＿＿好的职员。', dap:['形象']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'他平时成绩一般，但在今晚的比赛中＿＿得很突出。', opts:['表达','表现'], ans:1, giai:'Nói về thành tích, hành động trong trận đấu → 表现得很突出. 表达 là diễn đạt ý nghĩ, tình cảm bằng lời.'},
     {s:'我对从1840年到1919年的中国＿＿历史很感兴趣。', opts:['近代','现代'], ans:0, giai:'1840–1919 là thời CẬN ĐẠI (近代) của lịch sử Trung Quốc; 现代 bắt đầu từ 1919.'},
     {s:'我今天＿＿不太舒服，所以没什么＿＿。', opts:['胃……胃口','胃口……胃'], ans:0, giai:'Chỗ 1: bộ phận cơ thể khó chịu → 胃 (dạ dày). Chỗ 2: 没什么胃口 = không thấy thèm ăn.'},
     {s:'人们＿＿把西红柿当做有害的果子。', opts:['曾经','已经'], ans:0, giai:'Chuyện trong quá khứ, nay không còn nghĩ vậy nữa → 曾经. 已经 chỉ việc đã xong và còn kéo dài đến nay.'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'这事你找我A商量B找对人C了，这方面我可懂得D不少。', tu:'算', ans:'B', giai:'算 = coi như: 这事你找我商量算找对人了 (việc này tìm tôi bàn là coi như tìm đúng người).'},
     {s:'我A听说总理B将C参加这次活动D。', tu:'亲自', ans:'C', giai:'亲自 là phó từ, đứng ngay trước động từ 参加, sau phó từ thời gian 将: 总理将亲自参加.'},
     {s:'请写下与你A关系最B亲近的六个朋友，记下他们每个人的月收入，然后C算出他们月收入的D数。', tu:'平均', ans:'D', giai:'平均数 = số trung bình: 算出他们月收入的平均数.'},
     {s:'A这B怎么C是个缺点呢？D是个优点呀！', tu:'明明', ans:'D', giai:'明明 nhấn mạnh sự thật để bác bỏ: 明明是个优点呀！(rõ ràng là ưu điểm mà!)'}
   ]}
];
