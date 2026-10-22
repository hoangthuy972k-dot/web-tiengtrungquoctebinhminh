// ══════════════════════════════════════════
// DATA — HSK6 Bài 31: 运动的学问 (Kiến thức tập thể dục)
// 第八单元 人体探秘 · Nguồn: HSK标准教程6下 (tr. 112–121) + đáp án sách
// Bài khoá: 运动的学问 (1318字, dạng phỏng vấn: 记者 = A, 王老师 = B) · 54 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'忠实',py:'zhōngshí',pos:'Tính từ',vn:'trung thành, trung thực; đúng với sự thật',hv:'trung thực',em:'🤝',lesson:1,
   explain:['Hết lòng, trước sau như một với một người, một đội, một chương trình…: 忠实观众 (khán giả trung thành), 忠实的朋友, 忠实的读者.','Còn có nghĩa "đúng với nguyên bản, sự thật": 忠实于原文 (dịch sát nguyên văn), 忠实地记录. Chú ý: tiếng Việt "trung thực" = thật thà (诚实), còn 忠实 nhấn "trung thành".'],
   usage:'忠实 + 的 + 观众 / 读者 / 朋友 / 粉丝; 忠实于 + 原文 / 事实; 忠实地 + 记录 / 反映.',
   collo:['忠实观众','忠实的朋友','忠实于原文','忠实地记录'],
   ex_zh:'今天来的都是您的忠实观众，大家特别愿意和您这样的大专家进行交流。',ex_py:'Jīntiān lái de dōu shì nín de zhōngshí guānzhòng, dàjiā tèbié yuànyì hé nín zhèyàng de dà zhuānjiā jìnxíng jiāoliú.',ex_vn:'Những người đến hôm nay đều là khán giả trung thành của ông, mọi người đặc biệt muốn được giao lưu với một chuyên gia lớn như ông.',
   exList:[
     {zh:'我是这个节目的忠实观众，十年来几乎一期也没错过。',py:'Wǒ shì zhège jiémù de zhōngshí guānzhòng, shí nián lái jīhū yì qī yě méi cuòguo.',vn:'Tôi là khán giả trung thành của chương trình này, mười năm nay gần như chưa bỏ lỡ số nào.'},
     {zh:'翻译不但要忠实于原文，还要让读者读起来通顺自然。',py:'Fānyì búdàn yào zhōngshí yú yuánwén, hái yào ràng dúzhě dú qǐlái tōngshùn zìrán.',vn:'Dịch không những phải sát với nguyên văn mà còn phải để người đọc thấy trôi chảy, tự nhiên.'},
     {zh:'这本日记忠实地记录了爷爷那一代人艰难的生活。',py:'Zhè běn rìjì zhōngshí de jìlùle yéye nà yí dài rén jiānnán de shēnghuó.',vn:'Cuốn nhật ký này ghi lại chân thực cuộc sống gian khổ của thế hệ ông nội.'}
   ],
   colloFull:[
     {zh:'忠实观众',py:'zhōngshí guānzhòng',vn:'khán giả trung thành'},
     {zh:'忠实的朋友',py:'zhōngshí de péngyou',vn:'người bạn trung thành'},
     {zh:'忠实于原文',py:'zhōngshí yú yuánwén',vn:'sát với nguyên văn'},
     {zh:'忠实地记录',py:'zhōngshí de jìlù',vn:'ghi lại chân thực'},
     {zh:'忠实读者',py:'zhōngshí dúzhě',vn:'độc giả trung thành'}
   ],
   patterns:[
     {s:'是 + ……的 + 忠实 + 观众 / 读者',m:'Là khán giả / độc giả trung thành của …'},
     {s:'忠实于 + 原文 / 事实',m:'Trung thành với nguyên văn / sự thật'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy chương trình này đã phát sóng hai mươi năm, nhưng vẫn có rất nhiều khán giả trung thành.',answer:'这个节目虽然已经播了二十年，但是仍然有很多忠实观众。',answerPy:'Zhège jiémù suīrán yǐjīng bōle èrshí nián, dànshì réngrán yǒu hěn duō zhōngshí guānzhòng.',
      note:'虽然……但是……仍然……: tuy … nhưng vẫn ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ khi dịch sát nguyên văn, người đọc mới hiểu được ý thật của tác giả.',answer:'只有忠实于原文，读者才能理解作者的真实意思。',answerPy:'Zhǐyǒu zhōngshí yú yuánwén, dúzhě cái néng lǐjiě zuòzhě de zhēnshí yìsi.',
      note:'只有……才……: chỉ có … mới …; 忠实于 + N = trung thành với ….',pair:'只有……才……'}
   ]},

  {n:2,zh:'不敢当',py:'bùgǎndāng',pos:'Động từ (lời khiêm tốn)',vn:'không dám nhận, đâu dám',hv:'bất cảm đương',em:'🙇',lesson:1,
   explain:['Lời đáp khiêm tốn khi được khen, được gọi bằng danh xưng cao hoặc được đối xử quá trọng thị: "Không dám nhận đâu".','Thường đứng một mình (不敢当，不敢当) hoặc sau danh xưng được khen: “专家”不敢当. Văn phong lịch sự, dùng với người lớn tuổi, người lạ, dịp trang trọng.'],
   usage:'（……）不敢当; 不敢当，不敢当; “专家 / 老师”不敢当; 实在不敢当.',
   collo:['实在不敢当','“专家”不敢当','不敢当，不敢当','愧不敢当'],
   ex_zh:'“专家”不敢当，有这样的机会，我也很高兴。',ex_py:'“Zhuānjiā” bùgǎndāng, yǒu zhèyàng de jīhuì, wǒ yě hěn gāoxìng.',ex_vn:'"Chuyên gia" thì tôi không dám nhận, có dịp như thế này tôi cũng rất vui.',
   exList:[
     {zh:'您叫我“老师”，我实在不敢当，我只是比大家早学了几年而已。',py:'Nín jiào wǒ “lǎoshī”, wǒ shízài bùgǎndāng, wǒ zhǐshì bǐ dàjiā zǎo xuéle jǐ nián éryǐ.',vn:'Anh gọi tôi là "thầy" thì tôi thật không dám nhận, tôi chỉ học trước mọi người mấy năm mà thôi.'},
     {zh:'A：你对中国了解得如此深入，真是个中国通。B：不敢当，我还差得远呢。',py:'A: Nǐ duì Zhōngguó liǎojiě de rúcǐ shēnrù, zhēn shì ge Zhōngguótōng. B: Bùgǎndāng, wǒ hái chà de yuǎn ne.',vn:'A: Anh hiểu Trung Quốc sâu sắc đến vậy, đúng là "người sành Trung Quốc". B: Không dám nhận đâu, tôi còn kém xa lắm.'},
     {zh:'主人亲自到门口迎接，客人连忙说：“不敢当，不敢当。”',py:'Zhǔrén qīnzì dào ménkǒu yíngjiē, kèrén liánmáng shuō: “Bùgǎndāng, bùgǎndāng.”',vn:'Chủ nhà đích thân ra tận cửa đón, khách vội nói: "Không dám, không dám."'}
   ],
   colloFull:[
     {zh:'实在不敢当',py:'shízài bùgǎndāng',vn:'thật không dám nhận'},
     {zh:'“专家”不敢当',py:'“zhuānjiā” bùgǎndāng',vn:'"chuyên gia" thì không dám nhận'},
     {zh:'不敢当，不敢当',py:'bùgǎndāng, bùgǎndāng',vn:'không dám, không dám'},
     {zh:'愧不敢当',py:'kuì bù gǎn dāng',vn:'hổ thẹn không dám nhận'},
     {zh:'您太客气了，不敢当',py:'nín tài kèqi le, bùgǎndāng',vn:'ông khách sáo quá, tôi không dám'}
   ],
   patterns:[
     {s:'“danh xưng” + 不敢当',m:'Danh xưng ấy thì không dám nhận'},
     {s:'不敢当，我还差得远呢',m:'Không dám đâu, tôi còn kém xa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Được mọi người khen, cô ấy vội nói: "Không dám nhận đâu, đây là công lao của cả nhóm."',answer:'听到大家的称赞，她连忙说：“不敢当，这是整个小组的功劳。”',answerPy:'Tīngdào dàjiā de chēngzàn, tā liánmáng shuō: “Bùgǎndāng, zhè shì zhěnggè xiǎozǔ de gōngláo.”',
      note:'连忙 = vội vàng; 功劳 (bài 23) = công lao.',pair:'连忙 + V'},
     {promptLang:'vi',prompt:'Chữ "chuyên gia" thì tôi không dám nhận, nhưng về mặt này quả thực tôi có chút kinh nghiệm.',answer:'“专家”不敢当，不过在这方面我确实有一点儿经验。',answerPy:'“Zhuānjiā” bùgǎndāng, búguò zài zhè fāngmiàn wǒ quèshí yǒu yìdiǎnr jīngyàn.',
      note:'不过 nối ý chuyển nhẹ; 在……方面 = về mặt ….',pair:'在……方面'}
   ]},

  {n:3,zh:'走廊',py:'zǒuláng',pos:'Danh từ',vn:'hành lang, hàng hiên',hv:'tẩu lang',em:'🏛️',lesson:1,
   explain:['Lối đi có mái che nối các phòng, các toà nhà, hoặc dãy hiên dài trong công viên, trường học.','Lượng từ: 一条走廊. Hay đi với 在走廊上 / 走廊里 / 走廊那儿; nghĩa bóng: 经济走廊 (hành lang kinh tế).'],
   usage:'在 + 走廊 + 上 / 里 / 那儿; 一条长长的走廊; 教学楼的走廊; 经济走廊.',
   collo:['公园走廊','在走廊上','长长的走廊','经济走廊'],
   ex_zh:'那天采访您，在公园走廊那儿，您和您徒弟是练气功还是练太极剑呢？',ex_py:'Nà tiān cǎifǎng nín, zài gōngyuán zǒuláng nàr, nín hé nín túdì shì liàn qìgōng háishi liàn tàijíjiàn ne?',ex_vn:'Hôm phỏng vấn ông ở chỗ hành lang công viên, ông và đồ đệ của ông đang tập khí công hay tập thái cực kiếm vậy?',
   exList:[
     {zh:'下课铃一响，走廊里立刻挤满了说说笑笑的学生。',py:'Xiàkè líng yì xiǎng, zǒuláng li lìkè jǐmǎnle shuōshuō-xiàoxiào de xuésheng.',vn:'Chuông tan học vừa reo, hành lang lập tức chật kín học sinh cười cười nói nói.'},
     {zh:'下雨天，爷爷们就在公园的长廊里下棋、练气功。',py:'Xiàyǔ tiān, yéyemen jiù zài gōngyuán de chángláng li xiàqí, liàn qìgōng.',vn:'Những hôm mưa, các cụ ông lại đánh cờ, tập khí công dưới dãy hành lang dài trong công viên.'},
     {zh:'请大家不要在走廊上奔跑，以免撞到别人。',py:'Qǐng dàjiā bú yào zài zǒuláng shang bēnpǎo, yǐmiǎn zhuàngdào biérén.',vn:'Mọi người đừng chạy trên hành lang, để tránh va vào người khác.'}
   ],
   colloFull:[
     {zh:'公园走廊',py:'gōngyuán zǒuláng',vn:'hành lang công viên'},
     {zh:'在走廊上',py:'zài zǒuláng shang',vn:'ở trên hành lang'},
     {zh:'长长的走廊',py:'chángcháng de zǒuláng',vn:'hành lang dài dằng dặc'},
     {zh:'经济走廊',py:'jīngjì zǒuláng',vn:'hành lang kinh tế'},
     {zh:'走廊尽头',py:'zǒuláng jìntóu',vn:'cuối hành lang'}
   ],
   patterns:[
     {s:'在 + 走廊 + 上 / 里 + V',m:'Làm gì ở hành lang'},
     {s:'走廊（的）尽头 + 是……',m:'Cuối hành lang là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phòng thí nghiệm ở cuối hành lang, bạn đi thẳng là thấy.',answer:'实验室在走廊的尽头，你一直往前走就看见了。',answerPy:'Shíyànshì zài zǒuláng de jìntóu, nǐ yìzhí wǎng qián zǒu jiù kànjiàn le.',
      note:'一直往前走 = đi thẳng; ……就…… = là (kết quả đến ngay).',pair:'一直往前走'},
     {promptLang:'vi',prompt:'Nhà trường quy định không được chạy nhảy trên hành lang, để tránh xảy ra tai nạn.',answer:'学校规定不许在走廊上打闹，以免发生事故。',answerPy:'Xuéxiào guīdìng bù xǔ zài zǒuláng shang dǎnào, yǐmiǎn fāshēng shìgù.',
      note:'以免 (bài 21) = để tránh; 不许 = không được phép.',pair:'……，以免……'}
   ]},

  {n:4,zh:'徒弟',py:'túdì',pos:'Danh từ',vn:'học trò, đồ đệ',hv:'đồ đệ',em:'🥋',lesson:1,
   explain:['Người theo thầy (师傅) học nghề, học võ, học kỹ năng — quan hệ thầy trò kiểu truyền nghề.','Đối lại là 师傅 / 师父. Hay đi với 收徒弟 (nhận đồ đệ), 带徒弟 (dạy đồ đệ), 当徒弟. Trong trường học thường nói 学生, không nói 徒弟.'],
   usage:'收 / 带 + 徒弟; 当 + 某人 + 的徒弟; 师傅和徒弟 (师徒); 大徒弟 / 小徒弟.',
   collo:['收徒弟','带徒弟','师傅和徒弟','好几个徒弟'],
   ex_zh:'那天采访您，您和您徒弟是练气功还是练太极剑呢？',ex_py:'Nà tiān cǎifǎng nín, nín hé nín túdì shì liàn qìgōng háishi liàn tàijíjiàn ne?',ex_vn:'Hôm phỏng vấn ông, ông và đồ đệ của ông đang tập khí công hay thái cực kiếm vậy?',
   exList:[
     {zh:'现在广大群众的健身意识都增强了，我还收了好几个徒弟呢。',py:'Xiànzài guǎngdà qúnzhòng de jiànshēn yìshi dōu zēngqiáng le, wǒ hái shōule hǎo jǐ ge túdì ne.',vn:'Bây giờ ý thức rèn luyện sức khoẻ của đông đảo quần chúng đều đã tăng lên, tôi còn nhận mấy đồ đệ nữa đấy.'},
     {zh:'老师傅手把手地把技术传授给徒弟，一点儿也不保留。',py:'Lǎo shīfu shǒu bǎ shǒu de bǎ jìshù chuánshòu gěi túdì, yìdiǎnr yě bù bǎoliú.',vn:'Ông thợ cả cầm tay chỉ việc truyền nghề cho đồ đệ, không giấu nghề chút nào.'},
     {zh:'他十五岁就当了木匠的徒弟，吃了不少苦才学成手艺。',py:'Tā shíwǔ suì jiù dāngle mùjiang de túdì, chīle bù shǎo kǔ cái xuéchéng shǒuyì.',vn:'Mười lăm tuổi anh ấy đã làm học trò thợ mộc, chịu không ít vất vả mới học thành nghề.'}
   ],
   colloFull:[
     {zh:'收徒弟',py:'shōu túdì',vn:'nhận đồ đệ'},
     {zh:'带徒弟',py:'dài túdì',vn:'dạy, kèm đồ đệ'},
     {zh:'师傅和徒弟',py:'shīfu hé túdì',vn:'thầy và trò'},
     {zh:'好几个徒弟',py:'hǎo jǐ ge túdì',vn:'mấy người đồ đệ'},
     {zh:'当徒弟',py:'dāng túdì',vn:'làm học trò'}
   ],
   patterns:[
     {s:'收 + 了 + 数量 + 徒弟',m:'Nhận bao nhiêu đồ đệ'},
     {s:'把 + 技术 + 传授给 + 徒弟',m:'Truyền nghề cho đồ đệ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy không những dạy võ cho đồ đệ, mà còn dạy họ cách làm người.',answer:'他不但教徒弟武术，而且教他们怎么做人。',answerPy:'Tā búdàn jiāo túdì wǔshù, érqiě jiāo tāmen zěnme zuòrén.',
      note:'不但……而且……: không những … mà còn …; 教 + người + việc (song tân ngữ).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Nếu anh thật lòng muốn học, tôi có thể nhận anh làm đồ đệ.',answer:'如果你真心想学，我可以收你当徒弟。',answerPy:'Rúguǒ nǐ zhēnxīn xiǎng xué, wǒ kěyǐ shōu nǐ dāng túdì.',
      note:'收 + người + 当/做 + 徒弟 = nhận ai làm đồ đệ (kiêm ngữ).',pair:'如果……（就）……'}
   ]},

  {n:5,zh:'气功',py:'qìgōng',pos:'Danh từ',vn:'khí công',hv:'khí công',em:'🧘',lesson:1,
   explain:['Phương pháp rèn luyện sức khoẻ truyền thống của Trung Quốc, kết hợp điều hoà hơi thở, tư thế và tập trung tinh thần.','Động từ đi kèm: 练气功 (tập khí công). Theo bài khoá, khí công có thể 增强体质, 促进慢性病康复, 辅助治疗某些疾病.'],
   usage:'练 + 气功; 气功 + 爱好者 / 协会 / 师傅; 气功的作用.',
   collo:['练气功','气功爱好者','气功协会','气功的作用'],
   ex_zh:'气功还是中国独特的健身方法之一，可以增强体质，促进慢性病康复。',ex_py:'Qìgōng hái shì Zhōngguó dútè de jiànshēn fāngfǎ zhī yī, kěyǐ zēngqiáng tǐzhì, cùjìn mànxìngbìng kāngfù.',ex_vn:'Khí công còn là một trong những phương pháp rèn luyện sức khoẻ độc đáo của Trung Quốc, có thể tăng cường thể chất, thúc đẩy bệnh mãn tính hồi phục.',
   exList:[
     {zh:'每天清晨，公园里都有不少老人在练气功、打太极拳。',py:'Měi tiān qīngchén, gōngyuán li dōu yǒu bù shǎo lǎorén zài liàn qìgōng, dǎ tàijíquán.',vn:'Mỗi sáng sớm, trong công viên đều có không ít người già tập khí công, đánh thái cực quyền.'},
     {zh:'很多人误解了气功，以为它只是一种能劈砖的功夫。',py:'Hěn duō rén wùjiěle qìgōng, yǐwéi tā zhǐshì yì zhǒng néng pī zhuān de gōngfu.',vn:'Nhiều người hiểu sai về khí công, cứ tưởng nó chỉ là một loại võ công bổ được gạch.'},
     {zh:'医生说练气功可以辅助治疗，但不能代替吃药。',py:'Yīshēng shuō liàn qìgōng kěyǐ fǔzhù zhìliáo, dàn bù néng dàitì chī yào.',vn:'Bác sĩ nói tập khí công có thể hỗ trợ điều trị, nhưng không thể thay thế uống thuốc.'}
   ],
   colloFull:[
     {zh:'练气功',py:'liàn qìgōng',vn:'tập khí công'},
     {zh:'气功爱好者',py:'qìgōng àihàozhě',vn:'người yêu thích khí công'},
     {zh:'气功协会',py:'qìgōng xiéhuì',vn:'hội khí công'},
     {zh:'气功的作用',py:'qìgōng de zuòyòng',vn:'tác dụng của khí công'},
     {zh:'气功师傅',py:'qìgōng shīfu',vn:'thầy dạy khí công'}
   ],
   patterns:[
     {s:'练气功 + 可以 + 增强 / 促进 / 辅助……',m:'Tập khí công có thể tăng cường / thúc đẩy / hỗ trợ …'},
     {s:'是练气功还是练太极剑？',m:'Tập khí công hay tập thái cực kiếm? (câu hỏi lựa chọn)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi tập khí công, sức khoẻ của bà nội ngày càng tốt.',answer:'自从练了气功，奶奶的身体越来越好了。',answerPy:'Zìcóng liànle qìgōng, nǎinai de shēntǐ yuè lái yuè hǎo le.',
      note:'自从……（以后）: kể từ khi …; 越来越 + Adj = ngày càng ….',pair:'自从……'},
     {promptLang:'vi',prompt:'Khí công không những có thể tăng cường thể chất, mà còn có thể giúp người ta thả lỏng tinh thần.',answer:'气功不仅可以增强体质，还可以帮助人们放松精神。',answerPy:'Qìgōng bùjǐn kěyǐ zēngqiáng tǐzhì, hái kěyǐ bāngzhù rénmen fàngsōng jīngshén.',
      note:'不仅……还……: không chỉ … mà còn ….',pair:'不仅……还……'}
   ]},

  {n:6,zh:'剑',py:'jiàn',pos:'Danh từ',vn:'thanh gươm, thanh kiếm',hv:'kiếm',em:'🗡️',lesson:1,
   explain:['Vũ khí cổ có lưỡi dài, thẳng, hai cạnh sắc, có chuôi — nay chủ yếu dùng trong võ thuật, thể thao.','Lượng từ: 一把剑. Hay gặp: 太极剑 (thái cực kiếm — môn tập dưỡng sinh), 击剑 (môn đấu kiếm), 宝剑; thành ngữ 刀光剑影.'],
   usage:'一把 + 剑; 练 + 太极剑; 舞剑; 宝剑; 击剑比赛.',
   collo:['太极剑','一把剑','舞剑','击剑比赛'],
   ex_zh:'您和您徒弟是练气功还是练太极剑呢？',ex_py:'Nín hé nín túdì shì liàn qìgōng háishi liàn tàijíjiàn ne?',ex_vn:'Ông và đồ đệ của ông tập khí công hay tập thái cực kiếm vậy?',
   exList:[
     {zh:'爷爷退休以后迷上了太极剑，每天早上都要练一个小时。',py:'Yéye tuìxiū yǐhòu míshàngle tàijíjiàn, měi tiān zǎoshang dōu yào liàn yí ge xiǎoshí.',vn:'Ông nội từ khi nghỉ hưu thì mê thái cực kiếm, sáng nào cũng tập một tiếng.'},
     {zh:'博物馆里陈列着一把两千多年前的宝剑，至今仍然十分锋利。',py:'Bówùguǎn li chénlièzhe yì bǎ liǎng qiān duō nián qián de bǎojiàn, zhìjīn réngrán shífēn fēnglì.',vn:'Trong bảo tàng trưng bày một thanh bảo kiếm hơn hai nghìn năm tuổi, đến nay vẫn rất sắc bén.'},
     {zh:'击剑是一项对速度和反应要求都很高的运动。',py:'Jījiàn shì yí xiàng duì sùdù hé fǎnyìng yāoqiú dōu hěn gāo de yùndòng.',vn:'Đấu kiếm là môn thể thao đòi hỏi cao cả về tốc độ lẫn phản xạ.'}
   ],
   colloFull:[
     {zh:'太极剑',py:'tàijíjiàn',vn:'thái cực kiếm'},
     {zh:'一把剑',py:'yì bǎ jiàn',vn:'một thanh kiếm'},
     {zh:'舞剑',py:'wǔ jiàn',vn:'múa kiếm'},
     {zh:'击剑比赛',py:'jījiàn bǐsài',vn:'thi đấu kiếm'},
     {zh:'宝剑',py:'bǎojiàn',vn:'bảo kiếm'}
   ],
   patterns:[
     {s:'练 / 舞 + 剑',m:'Tập / múa kiếm'},
     {s:'一把 + 锋利的 + 剑',m:'Một thanh kiếm sắc bén (锋利 — bài 4)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ đã tập thái cực kiếm được ba năm, sức khoẻ tốt hơn trước nhiều.',answer:'妈妈练太极剑已经练了三年了，身体比以前好多了。',answerPy:'Māma liàn tàijíjiàn yǐjīng liànle sān nián le, shēntǐ bǐ yǐqián hǎo duō le.',
      note:'V + O + V + 了 + thời lượng + 了: đã làm … được bao lâu (vẫn tiếp tục); 比……好多了.',pair:'V + O + V + 了 + thời lượng'},
     {promptLang:'vi',prompt:'Thanh kiếm này là ông nội để lại, cả nhà đều coi nó như báu vật.',answer:'这把剑是爷爷留下来的，全家人都把它当作宝贝。',answerPy:'Zhè bǎ jiàn shì yéye liú xiàlái de, quán jiā rén dōu bǎ tā dàngzuò bǎobèi.',
      note:'是……的 nhấn người thực hiện; 把……当作…… = coi … như ….',pair:'把……当作……'}
   ]},

  {n:7,zh:'哦',py:'ò',pos:'Thán từ',vn:'ồ, à (chợt hiểu ra)',hv:'nga',em:'💡',lesson:1,
   explain:['Thán từ đọc thanh 4 (ò) biểu thị chợt hiểu ra, chợt nhớ ra, hoặc đã nghe hiểu: "À, ra thế", "Ồ".','Thường đứng đầu câu, sau có dấu phẩy: 哦，不是徒弟……; 哦，原来是这样. Đọc ó (thanh 2) khi nửa tin nửa ngờ: 哦？真的吗？'],
   usage:'哦（ò），原来是……; 哦，我想起来了; 哦（ó）？ (nghi ngờ).',
   collo:['哦，原来是这样','哦，我明白了','哦，想起来了','哦，不是……'],
   ex_zh:'哦，不是徒弟，是气功协会的气功爱好者。',ex_py:'Ò, bú shì túdì, shì qìgōng xiéhuì de qìgōng àihàozhě.',ex_vn:'À, không phải đồ đệ, là những người yêu thích khí công của hội khí công.',
   exList:[
     {zh:'哦，原来你们早就认识啊，那我就不用介绍了。',py:'Ò, yuánlái nǐmen zǎo jiù rènshi a, nà wǒ jiù búyòng jièshào le.',vn:'À, hoá ra các bạn quen nhau từ lâu rồi, vậy tôi khỏi phải giới thiệu nữa.'},
     {zh:'哦，我想起来了，钥匙放在走廊的柜子里了。',py:'Ò, wǒ xiǎng qǐlái le, yàoshi fàng zài zǒuláng de guìzi li le.',vn:'À, tôi nhớ ra rồi, chìa khoá để trong tủ ở hành lang.'},
     {zh:'哦，你是说运动之后要补充蛋白质，对吧？',py:'Ò, nǐ shì shuō yùndòng zhīhòu yào bǔchōng dànbáizhì, duì ba?',vn:'À, ý cậu là sau khi vận động phải bổ sung protein, đúng không?'}
   ],
   colloFull:[
     {zh:'哦，原来是这样',py:'ò, yuánlái shì zhèyàng',vn:'à, hoá ra là thế'},
     {zh:'哦，我明白了',py:'ò, wǒ míngbai le',vn:'à, tôi hiểu rồi'},
     {zh:'哦，想起来了',py:'ò, xiǎng qǐlái le',vn:'à, nhớ ra rồi'},
     {zh:'哦，不是……',py:'ò, bú shì……',vn:'à, không phải …'},
     {zh:'哦？真的吗？',py:'ó? zhēn de ma?',vn:'ồ? thật à? (nghi ngờ)'}
   ],
   patterns:[
     {s:'哦，原来 + 是……',m:'À, hoá ra là …'},
     {s:'哦，不是 A，是 B',m:'À, không phải A mà là B (đính chính)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'À, hoá ra bạn không phải người Bắc Kinh, thảo nào khẩu âm hơi khác.',answer:'哦，原来你不是北京人，怪不得口音有点儿不一样。',answerPy:'Ò, yuánlái nǐ bú shì Běijīngrén, guàibude kǒuyīn yǒudiǎnr bù yíyàng.',
      note:'原来 = hoá ra; 怪不得 = thảo nào; 口音 (bài 3).',pair:'怪不得……'},
     {promptLang:'vi',prompt:'À, không phải tôi không muốn đi, mà là hôm nay thực sự không có thời gian.',answer:'哦，不是我不想去，而是今天实在没有时间。',answerPy:'Ò, bú shì wǒ bù xiǎng qù, ér shì jīntiān shízài méiyǒu shíjiān.',
      note:'不是……而是……: không phải … mà là ….',pair:'不是……而是……'}
   ]},

  {n:8,zh:'协会',py:'xiéhuì',pos:'Danh từ',vn:'hội, hiệp hội',hv:'hiệp hội',em:'👥',lesson:1,
   explain:['Tổ chức quần chúng do những người cùng nghề nghiệp, cùng sở thích lập ra để cùng hoạt động, trao đổi.','Cấu tạo: lĩnh vực + 协会: 气功协会, 作家协会, 消费者协会, 足球协会. 会 (hội) còn tạo nhiều từ: 学会, 商会, 工会, 会长, 会员, 会费 (xem 热身 2).'],
   usage:'……协会; 加入 / 成立 + 协会; 协会 + 的成员 / 会员 / 会长.',
   collo:['气功协会','加入协会','协会成员','成立协会'],
   ex_zh:'哦，不是徒弟，是气功协会的气功爱好者。',ex_py:'Ò, bú shì túdì, shì qìgōng xiéhuì de qìgōng àihàozhě.',ex_vn:'À, không phải đồ đệ, là những người yêu thích khí công của hội khí công.',
   exList:[
     {zh:'我是武术协会的成员，每天我们都在公园里练习。',py:'Wǒ shì wǔshù xiéhuì de chéngyuán, měi tiān wǒmen dōu zài gōngyuán li liànxí.',vn:'Tôi là thành viên hội võ thuật, ngày nào chúng tôi cũng luyện tập trong công viên.'},
     {zh:'为了保护消费者的权利，他们成立了消费者协会。',py:'Wèile bǎohù xiāofèizhě de quánlì, tāmen chénglìle xiāofèizhě xiéhuì.',vn:'Để bảo vệ quyền lợi người tiêu dùng, họ đã thành lập hội người tiêu dùng.'},
     {zh:'只要交一点儿会费，就可以加入我们的摄影协会。',py:'Zhǐyào jiāo yìdiǎnr huìfèi, jiù kěyǐ jiārù wǒmen de shèyǐng xiéhuì.',vn:'Chỉ cần đóng một ít hội phí là có thể gia nhập hội nhiếp ảnh của chúng tôi.'}
   ],
   colloFull:[
     {zh:'气功协会',py:'qìgōng xiéhuì',vn:'hội khí công'},
     {zh:'加入协会',py:'jiārù xiéhuì',vn:'gia nhập hội'},
     {zh:'协会成员',py:'xiéhuì chéngyuán',vn:'thành viên hội'},
     {zh:'成立协会',py:'chénglì xiéhuì',vn:'thành lập hội'},
     {zh:'武术协会',py:'wǔshù xiéhuì',vn:'hội võ thuật'}
   ],
   patterns:[
     {s:'是 + ……协会 + 的成员 / 会员',m:'Là thành viên / hội viên của hội …'},
     {s:'成立 / 加入 + ……协会',m:'Thành lập / gia nhập hội …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hội nhiếp ảnh của trường đã thành lập được năm năm, số thành viên tăng lên từng năm.',answer:'学校的摄影协会已经成立五年了，成员逐年增加。',answerPy:'Xuéxiào de shèyǐng xiéhuì yǐjīng chénglì wǔ nián le, chéngyuán zhúnián zēngjiā.',
      note:'Động từ không kéo dài (成立) + thời lượng + 了 = đã … được bao lâu; 逐年 (điểm ngữ pháp 1).',pair:'V + thời lượng + 了'},
     {promptLang:'vi',prompt:'Bất kể bạn là người mới hay người cũ, chỉ cần thích võ thuật là đều có thể gia nhập hội của chúng tôi.',answer:'不管你是新手还是老手，只要喜欢武术，都可以加入我们协会。',answerPy:'Bùguǎn nǐ shì xīnshǒu háishi lǎoshǒu, zhǐyào xǐhuan wǔshù, dōu kěyǐ jiārù wǒmen xiéhuì.',
      note:'不管……都……: bất kể … đều …; 只要 = chỉ cần.',pair:'不管……都……'}
   ]},

  {n:9,zh:'爆发',py:'bàofā',pos:'Động từ',vn:'bùng nổ, bột phát, bùng lên',hv:'bạo phát',em:'💥',lesson:1,
   explain:['(Núi lửa, sức mạnh, cảm xúc) đột nhiên phun trào, bùng ra dữ dội: 火山爆发, 力量一爆发, 爆发出掌声.','(Chiến tranh, cách mạng, sự kiện lớn) đột ngột nổ ra: 战争爆发, 爆发了第三次世界大战 (nói đùa — 大词小用 của bài). Khác 暴发 (lũ bùng phát; phất lên nhanh).'],
   usage:'火山 / 战争 / 危机 + 爆发; 爆发 + 出 + 掌声 / 笑声 / 力量; 力量一爆发; 爆发力.',
   collo:['力量一爆发','火山爆发','爆发战争','爆发出掌声'],
   ex_zh:'你们的气功不是那种力量一爆发，能瞬间把好几块砖就给劈开的啊？',ex_py:'Nǐmen de qìgōng bú shì nà zhǒng lìliang yí bàofā, néng shùnjiān bǎ hǎo jǐ kuài zhuān jiù gěi pīkāi de a?',ex_vn:'Khí công của các ông chẳng phải là loại sức mạnh vừa bùng ra là trong tích tắc bổ đôi được mấy viên gạch đó sao?',
   exList:[
     {zh:'他的演讲一结束，台下就爆发出热烈的掌声。',py:'Tā de yǎnjiǎng yì jiéshù, tái xià jiù bàofā chū rèliè de zhǎngshēng.',vn:'Bài diễn thuyết của anh ấy vừa kết thúc, dưới khán đài liền vang lên tràng pháo tay nhiệt liệt.'},
     {zh:'这座火山上一次爆发是在一百多年前。',py:'Zhè zuò huǒshān shàng yí cì bàofā shì zài yìbǎi duō nián qián.',vn:'Lần phun trào trước của ngọn núi lửa này là hơn một trăm năm trước.'},
     {zh:'短跑运动员需要很强的爆发力，起跑的一瞬间就决定了胜负。',py:'Duǎnpǎo yùndòngyuán xūyào hěn qiáng de bàofālì, qǐpǎo de yíshùnjiān jiù juédìngle shèngfù.',vn:'Vận động viên chạy ngắn cần sức bật rất mạnh, khoảnh khắc xuất phát đã quyết định thắng thua.'}
   ],
   colloFull:[
     {zh:'力量一爆发',py:'lìliang yí bàofā',vn:'sức mạnh vừa bùng ra'},
     {zh:'火山爆发',py:'huǒshān bàofā',vn:'núi lửa phun trào'},
     {zh:'爆发战争',py:'bàofā zhànzhēng',vn:'nổ ra chiến tranh'},
     {zh:'爆发出掌声',py:'bàofā chū zhǎngshēng',vn:'vang lên tràng pháo tay'},
     {zh:'爆发力',py:'bàofālì',vn:'sức bật, sức bùng nổ'}
   ],
   patterns:[
     {s:'……一爆发，就……',m:'… vừa bùng ra thì …'},
     {s:'（台下）爆发出 + 掌声 / 笑声',m:'Vang lên tiếng vỗ tay / tiếng cười'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy nhịn rất lâu, cuối cùng không nhịn được nữa, cơn giận bùng lên.',answer:'他忍了很久，终于忍不住了，愤怒一下子爆发了出来。',answerPy:'Tā rěnle hěn jiǔ, zhōngyú rěn bu zhù le, fènnù yíxiàzi bàofāle chūlái.',
      note:'忍不住 = không nhịn được; 愤怒 (bài 4); V + 了 + 出来 chỉ bộc lộ ra ngoài.',pair:'忍不住'},
     {promptLang:'vi',prompt:'Vừa nghe tin đội nhà thắng, cả khán phòng lập tức vang lên tiếng reo hò.',answer:'一听到主队赢了的消息，全场立刻爆发出一片欢呼声。',answerPy:'Yì tīngdào zhǔduì yíngle de xiāoxi, quán chǎng lìkè bàofā chū yí piàn huānhūshēng.',
      note:'一……就 / 立刻……: vừa … là …; 爆发出 + tiếng động.',pair:'一……就……'}
   ]},

  {n:10,zh:'劈',py:'pī',pos:'Động từ',vn:'bổ, chẻ, chặt',hv:'phách',em:'🪓',lesson:1,
   explain:['Dùng dao, rìu hoặc cạnh bàn tay bổ mạnh từ trên xuống cho vật tách ra: 劈柴 (bổ củi), 劈开砖 (bổ đôi viên gạch).','Hay đi với bổ ngữ kết quả 开 / 成 / 断: 劈开, 劈成两半. Còn dùng cho sét đánh: 大树被雷劈了.'],
   usage:'劈 + 柴 / 砖 / 木头; 劈开 / 劈成两半; 把……（给）劈开; 被雷劈了.',
   collo:['劈开','劈柴','劈成两半','把砖劈开'],
   ex_zh:'你们的气功不是那种能瞬间把好几块砖就给劈开的啊？',ex_py:'Nǐmen de qìgōng bú shì nà zhǒng néng shùnjiān bǎ hǎo jǐ kuài zhuān jiù gěi pīkāi de a?',ex_vn:'Khí công của các ông chẳng phải là loại trong tích tắc bổ đôi được mấy viên gạch đó sao?',
   exList:[
     {zh:'小时候，我常常帮外公劈柴、烧火。',py:'Xiǎoshíhou, wǒ chángcháng bāng wàigōng pī chái, shāo huǒ.',vn:'Hồi nhỏ, tôi thường giúp ông ngoại bổ củi, nhóm lửa.'},
     {zh:'表演者一掌下去，三块砖就被劈成了两半，观众都看呆了。',py:'Biǎoyǎnzhě yì zhǎng xiàqù, sān kuài zhuān jiù bèi pīchéngle liǎng bàn, guānzhòng dōu kàndāi le.',vn:'Người biểu diễn chặt một chưởng xuống, ba viên gạch đã bị bổ làm đôi, khán giả đều sững sờ.'},
     {zh:'昨晚打雷，院子里那棵老树被雷劈断了。',py:'Zuó wǎn dǎléi, yuànzi li nà kē lǎo shù bèi léi pīduàn le.',vn:'Tối qua có sấm, cây cổ thụ trong sân bị sét đánh gãy.'}
   ],
   colloFull:[
     {zh:'劈开',py:'pīkāi',vn:'bổ ra, chẻ ra'},
     {zh:'劈柴',py:'pī chái',vn:'bổ củi'},
     {zh:'劈成两半',py:'pīchéng liǎng bàn',vn:'bổ làm đôi'},
     {zh:'把砖劈开',py:'bǎ zhuān pīkāi',vn:'bổ đôi viên gạch'},
     {zh:'被雷劈断',py:'bèi léi pīduàn',vn:'bị sét đánh gãy'}
   ],
   patterns:[
     {s:'把 + N + （给）劈 + 开 / 成……',m:'Bổ N ra / thành …'},
     {s:'N + 被 + （雷）+ 劈 + 断 / 开',m:'N bị (sét) đánh gãy / bổ ra'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông nội tuy đã hơn bảy mươi tuổi, nhưng bổ củi vẫn nhanh hơn thanh niên.',answer:'爷爷虽然七十多岁了，但劈起柴来还是比年轻人快。',answerPy:'Yéye suīrán qīshí duō suì le, dàn pī qǐ chái lái háishi bǐ niánqīngrén kuài.',
      note:'V + 起 + O + 来: khi làm việc gì thì …; 比 so sánh.',pair:'V起……来'},
     {promptLang:'vi',prompt:'Nó dùng dao bổ quả dưa hấu làm đôi, chia cho mọi người mỗi người một nửa.',answer:'他用刀把西瓜劈成两半，分给大家一人一半。',answerPy:'Tā yòng dāo bǎ xīguā pīchéng liǎng bàn, fēn gěi dàjiā yì rén yí bàn.',
      note:'把 + O + V + 成 + kết quả; 一人一半 = mỗi người một nửa.',pair:'把……V成……'}
   ]},

  {n:11,zh:'误解',py:'wùjiě',pos:'Động từ / Danh từ',vn:'hiểu sai, hiểu lầm',hv:'ngộ giải',em:'🤔',lesson:1,
   explain:['Hiểu không đúng (ý người khác, bản chất sự việc): 误解气功, 误解了我的意思. Làm danh từ: 产生误解, 消除误解.','Gần nghĩa 误会: 误会 thiên về hiểu lầm giữa người với người (thường khẩu ngữ: 别误会); 误解 thiên về hiểu sai nội dung, khái niệm, dùng được cả với sự vật (误解气功, 误解这句话).'],
   usage:'误解 + 某人 / 某事 / ……的意思; 产生 / 消除 / 引起 + 误解; 对……有误解.',
   collo:['误解气功','误解了我的意思','产生误解','消除误解'],
   ex_zh:'看来我是误解气功了。',ex_py:'Kànlái wǒ shì wùjiě qìgōng le.',ex_vn:'Xem ra tôi đã hiểu sai về khí công rồi.',
   exList:[
     {zh:'你误解了我的意思，我不是不想帮你，而是真的帮不上忙。',py:'Nǐ wùjiěle wǒ de yìsi, wǒ bú shì bù xiǎng bāng nǐ, ér shì zhēn de bāng bu shàng máng.',vn:'Cậu hiểu sai ý tớ rồi, tớ không phải không muốn giúp mà là thật sự không giúp được.'},
     {zh:'不同文化之间容易产生误解，所以要多沟通。',py:'Bùtóng wénhuà zhījiān róngyì chǎnshēng wùjiě, suǒyǐ yào duō gōutōng.',vn:'Giữa các nền văn hoá khác nhau dễ nảy sinh hiểu lầm, vì thế phải trao đổi nhiều hơn.'},
     {zh:'很多人误解“宽容”，以为宽容就是什么都不管。',py:'Hěn duō rén wùjiě “kuānróng”, yǐwéi kuānróng jiù shì shénme dōu bù guǎn.',vn:'Nhiều người hiểu sai chữ "khoan dung", cứ tưởng khoan dung là chuyện gì cũng mặc kệ.'}
   ],
   colloFull:[
     {zh:'误解气功',py:'wùjiě qìgōng',vn:'hiểu sai về khí công'},
     {zh:'误解了我的意思',py:'wùjiěle wǒ de yìsi',vn:'hiểu sai ý tôi'},
     {zh:'产生误解',py:'chǎnshēng wùjiě',vn:'nảy sinh hiểu lầm'},
     {zh:'消除误解',py:'xiāochú wùjiě',vn:'xoá bỏ hiểu lầm'},
     {zh:'对……有误解',py:'duì…… yǒu wùjiě',vn:'có hiểu lầm về …'}
   ],
   patterns:[
     {s:'看来我是误解 + N + 了',m:'Xem ra tôi đã hiểu sai về N'},
     {s:'为了消除误解，……',m:'Để xoá bỏ hiểu lầm, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để tránh bị người khác hiểu sai, tốt nhất bạn nên nói rõ ràng ngay từ đầu.',answer:'为了避免被别人误解，你最好一开始就把话说清楚。',answerPy:'Wèile bìmiǎn bèi biérén wùjiě, nǐ zuìhǎo yì kāishǐ jiù bǎ huà shuō qīngchu.',
      note:'为了避免…… = để tránh …; 把话说清楚 (câu 把 + bổ ngữ kết quả).',pair:'把 + O + V + 清楚'},
     {promptLang:'vi',prompt:'Hoá ra đây là một hiểu lầm, sau khi hai người nói chuyện thẳng thắn thì làm lành rồi.',answer:'原来这是一场误解，两个人把话说开以后就和好了。',answerPy:'Yuánlái zhè shì yì chǎng wùjiě, liǎng ge rén bǎ huà shuōkāi yǐhòu jiù héhǎo le.',
      note:'一场误解 (lượng từ 场); 把话说开 = nói thẳng cho ra lẽ.',pair:'原来……'}
   ]},

  {n:12,zh:'群众',py:'qúnzhòng',pos:'Danh từ',vn:'quần chúng, người dân',hv:'quần chúng',em:'👨‍👩‍👧‍👦',lesson:1,
   explain:['Đông đảo người dân bình thường (trong xã hội, trong một địa phương), đối lập với cán bộ, lãnh đạo, chuyên gia.','Hay đi với 广大群众 (đông đảo quần chúng), 人民群众, 群众路线; 群众 + 的 + 意见 / 健身意识 / 生活.'],
   usage:'广大群众; 人民群众; 群众 + 的 + 意识 / 意见 / 利益; 深入群众; 发动群众.',
   collo:['广大群众','人民群众','群众的意见','深入群众'],
   ex_zh:'最近有个调查，广大群众的健身意识在逐年提升。',ex_py:'Zuìjìn yǒu ge diàochá, guǎngdà qúnzhòng de jiànshēn yìshi zài zhúnián tíshēng.',ex_vn:'Gần đây có một cuộc điều tra, ý thức rèn luyện sức khoẻ của đông đảo quần chúng đang tăng lên từng năm.',
   exList:[
     {zh:'政府在制定政策之前，应该广泛听取群众的意见。',py:'Zhèngfǔ zài zhìdìng zhèngcè zhīqián, yīnggāi guǎngfàn tīngqǔ qúnzhòng de yìjiàn.',vn:'Trước khi ban hành chính sách, chính quyền nên lắng nghe rộng rãi ý kiến của người dân.'},
     {zh:'这位医生经常深入农村，为群众免费看病。',py:'Zhè wèi yīshēng jīngcháng shēnrù nóngcūn, wèi qúnzhòng miǎnfèi kànbìng.',vn:'Vị bác sĩ này thường xuyên về nông thôn khám bệnh miễn phí cho bà con.'},
     {zh:'公园免费开放以后，来锻炼的群众越来越多。',py:'Gōngyuán miǎnfèi kāifàng yǐhòu, lái duànliàn de qúnzhòng yuè lái yuè duō.',vn:'Từ khi công viên mở cửa miễn phí, người dân đến tập thể dục ngày càng đông.'}
   ],
   colloFull:[
     {zh:'广大群众',py:'guǎngdà qúnzhòng',vn:'đông đảo quần chúng'},
     {zh:'人民群众',py:'rénmín qúnzhòng',vn:'quần chúng nhân dân'},
     {zh:'群众的意见',py:'qúnzhòng de yìjiàn',vn:'ý kiến của người dân'},
     {zh:'深入群众',py:'shēnrù qúnzhòng',vn:'đi sâu vào quần chúng'},
     {zh:'群众的健身意识',py:'qúnzhòng de jiànshēn yìshi',vn:'ý thức rèn luyện của người dân'}
   ],
   patterns:[
     {s:'广大群众 + 的 + N + 在逐年提升',m:'N của đông đảo quần chúng đang tăng lên từng năm'},
     {s:'为群众 + V',m:'Làm gì cho người dân'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Theo điều tra, người dân ngày càng coi trọng sức khoẻ của mình.',answer:'据调查，群众越来越重视自己的健康了。',answerPy:'Jù diàochá, qúnzhòng yuè lái yuè zhòngshì zìjǐ de jiànkāng le.',
      note:'据 + 调查 / 报道 = theo …; 越来越 + V tâm lý.',pair:'据……'},
     {promptLang:'vi',prompt:'Chỉ có lắng nghe ý kiến của người dân, công việc mới có thể làm tốt được.',answer:'只有听取群众的意见，工作才能做好。',answerPy:'Zhǐyǒu tīngqǔ qúnzhòng de yìjiàn, gōngzuò cái néng zuòhǎo.',
      note:'只有……才……: chỉ có … mới ….',pair:'只有……才……'}
   ]},

  {n:13,zh:'逐年',py:'zhúnián',pos:'Phó từ',vn:'từng năm, năm này qua năm khác',hv:'trục niên',em:'📈',lesson:1,
   explain:['Theo từng năm một, năm sau hơn năm trước (tăng / giảm dần): 逐年提升, 逐年增加, 逐年减少.','Cấu tạo theo điểm ngữ pháp 1 (逐 = lần lượt theo thứ tự): 逐日, 逐月, 逐步, 逐个, 逐一. Đứng trước động từ chỉ sự thay đổi; không dùng với động từ tức thời.'],
   usage:'逐年 + 增加 / 减少 / 提高 / 上升 / 下降; 在逐年 + V; 呈逐年上升的趋势.',
   collo:['逐年提升','逐年增加','逐年减少','逐年下降'],
   ex_zh:'最近有个调查，广大群众的健身意识在逐年提升。',ex_py:'Zuìjìn yǒu ge diàochá, guǎngdà qúnzhòng de jiànshēn yìshi zài zhúnián tíshēng.',ex_vn:'Gần đây có một cuộc điều tra, ý thức rèn luyện sức khoẻ của đông đảo quần chúng đang tăng lên từng năm.',
   exList:[
     {zh:'产品的销量逐年增加，公司的规模也越来越大。',py:'Chǎnpǐn de xiāoliàng zhúnián zēngjiā, gōngsī de guīmó yě yuè lái yuè dà.',vn:'Doanh số sản phẩm tăng lên từng năm, quy mô công ty cũng ngày càng lớn.'},
     {zh:'由于环境污染，这种鸟的数量逐年减少，已经濒临灭绝。',py:'Yóuyú huánjìng wūrǎn, zhè zhǒng niǎo de shùliàng zhúnián jiǎnshǎo, yǐjīng bīnlín mièjué.',vn:'Do ô nhiễm môi trường, số lượng loài chim này giảm dần qua từng năm, đã đứng trước nguy cơ tuyệt chủng.'},
     {zh:'近几年，近视的中小学生人数呈逐年上升的趋势。',py:'Jìn jǐ nián, jìnshì de zhōng-xiǎo xuéshēng rénshù chéng zhúnián shàngshēng de qūshì.',vn:'Mấy năm gần đây, số học sinh phổ thông bị cận thị có xu hướng tăng lên theo từng năm.'}
   ],
   colloFull:[
     {zh:'逐年提升',py:'zhúnián tíshēng',vn:'nâng lên từng năm'},
     {zh:'逐年增加',py:'zhúnián zēngjiā',vn:'tăng lên từng năm'},
     {zh:'逐年减少',py:'zhúnián jiǎnshǎo',vn:'giảm dần qua từng năm'},
     {zh:'逐年下降',py:'zhúnián xiàjiàng',vn:'sụt giảm từng năm'},
     {zh:'呈逐年上升的趋势',py:'chéng zhúnián shàngshēng de qūshì',vn:'có xu hướng tăng dần qua các năm'}
   ],
   patterns:[
     {s:'N + 在逐年 + 提升 / 增加',m:'N đang tăng lên từng năm'},
     {s:'呈逐年 + 上升 / 下降 + 的趋势',m:'Có xu hướng tăng / giảm theo từng năm (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì ngày càng nhiều người thích chạy bộ, số người tham gia marathon tăng lên từng năm.',answer:'因为越来越多的人喜欢跑步，参加马拉松的人数逐年增加。',answerPy:'Yīnwèi yuè lái yuè duō de rén xǐhuan pǎobù, cānjiā mǎlāsōng de rénshù zhúnián zēngjiā.',
      note:'越来越多的 + N; 逐年 + 增加.',pair:'因为……'},
     {promptLang:'vi',prompt:'Tuy thu nhập của người dân tăng lên từng năm, nhưng giá nhà tăng còn nhanh hơn.',answer:'虽然居民的收入逐年提高，但是房价涨得更快。',answerPy:'Suīrán jūmín de shōurù zhúnián tígāo, dànshì fángjià zhǎng de gèng kuài.',
      note:'虽然……但是……; bổ ngữ trạng thái 涨得更快.',pair:'虽然……但是……'}
   ]},

  {n:14,zh:'要素',py:'yàosù',pos:'Danh từ',vn:'yếu tố (cấu thành)',hv:'yếu tố',em:'🧩',lesson:1,
   explain:['Thành phần cơ bản, không thể thiếu để cấu thành một sự vật: 健康五要素 (năm yếu tố của sức khoẻ), 构成要素.','Gần 因素 nhưng khác: 要素 là bộ phận CẤU THÀNH (thiếu là không thành); 因素 là nhân tố ẢNH HƯỞNG, nguyên nhân (影响健康的因素).'],
   usage:'……（的）+ 数 + 要素; 构成 + 要素; 基本要素; 三要素 / 五要素.',
   collo:['健康五要素','基本要素','构成要素','三要素'],
   ex_zh:'甚至有人提出健康五要素，包括身体、情绪、智力、精神和社交。',ex_py:'Shènzhì yǒu rén tíchū jiànkāng wǔ yàosù, bāokuò shēntǐ, qíngxù, zhìlì, jīngshén hé shèjiāo.',ex_vn:'Thậm chí có người đưa ra năm yếu tố của sức khoẻ, gồm thể chất, cảm xúc, trí tuệ, tinh thần và giao tiếp xã hội.',
   exList:[
     {zh:'时间、地点、人物是记叙文的基本要素。',py:'Shíjiān, dìdiǎn, rénwù shì jìxùwén de jīběn yàosù.',vn:'Thời gian, địa điểm, nhân vật là những yếu tố cơ bản của văn tự sự.'},
     {zh:'这五个要素共同构成了健康的完美状态，缺一不可。',py:'Zhè wǔ ge yàosù gòngtóng gòuchéngle jiànkāng de wánměi zhuàngtài, quē yī bù kě.',vn:'Năm yếu tố này cùng cấu thành trạng thái sức khoẻ hoàn hảo, thiếu một cũng không được.'},
     {zh:'人才、资金和技术是企业发展的三大要素。',py:'Réncái, zījīn hé jìshù shì qǐyè fāzhǎn de sān dà yàosù.',vn:'Nhân tài, vốn và công nghệ là ba yếu tố lớn cho sự phát triển của doanh nghiệp.'}
   ],
   colloFull:[
     {zh:'健康五要素',py:'jiànkāng wǔ yàosù',vn:'năm yếu tố của sức khoẻ'},
     {zh:'基本要素',py:'jīběn yàosù',vn:'yếu tố cơ bản'},
     {zh:'构成要素',py:'gòuchéng yàosù',vn:'yếu tố cấu thành'},
     {zh:'三要素',py:'sān yàosù',vn:'ba yếu tố'},
     {zh:'缺一不可的要素',py:'quē yī bù kě de yàosù',vn:'yếu tố thiếu một cũng không được'}
   ],
   patterns:[
     {s:'A、B、C 是 + N + 的基本要素',m:'A, B, C là những yếu tố cơ bản của N'},
     {s:'这几个要素共同构成了……',m:'Mấy yếu tố này cùng cấu thành …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn viết một bài văn tự sự hay, trước hết phải viết rõ ràng mấy yếu tố cơ bản.',answer:'要想写好一篇记叙文，首先要把几个基本要素写清楚。',answerPy:'Yào xiǎng xiěhǎo yì piān jìxùwén, shǒuxiān yào bǎ jǐ ge jīběn yàosù xiě qīngchu.',
      note:'要想……，首先要……: muốn … thì trước hết phải ….',pair:'要想……，首先……'},
     {promptLang:'vi',prompt:'Sức khoẻ không chỉ là không bị bệnh, mà còn bao gồm nhiều yếu tố khác.',answer:'健康不仅是不生病，还包括很多其他要素。',answerPy:'Jiànkāng bùjǐn shì bù shēngbìng, hái bāokuò hěn duō qítā yàosù.',
      note:'不仅……还……; 包括 = bao gồm.',pair:'不仅……还……'}
   ]},

  {n:15,zh:'智力',py:'zhìlì',pos:'Danh từ',vn:'trí lực, trí tuệ, trí thông minh',hv:'trí lực',em:'🧠',lesson:1,
   explain:['Năng lực nhận thức, hiểu biết, suy nghĩ, ghi nhớ, giải quyết vấn đề của con người.','Hay đi với 智力开发 (phát triển trí tuệ), 智力游戏, 智力测验, 智力水平; đối với 体力 (thể lực).'],
   usage:'开发 + 智力; 智力 + 水平 / 游戏 / 测验 / 发展; 智力和体力.',
   collo:['开发智力','智力游戏','智力水平','智力测验'],
   ex_zh:'健康五要素包括身体、情绪、智力、精神和社交。',ex_py:'Jiànkāng wǔ yàosù bāokuò shēntǐ, qíngxù, zhìlì, jīngshén hé shèjiāo.',ex_vn:'Năm yếu tố của sức khoẻ gồm thể chất, cảm xúc, trí tuệ, tinh thần và giao tiếp xã hội.',
   exList:[
     {zh:'经常玩儿一些智力游戏，对开发孩子的智力很有帮助。',py:'Jīngcháng wánr yìxiē zhìlì yóuxì, duì kāifā háizi de zhìlì hěn yǒu bāngzhù.',vn:'Thường xuyên chơi trò chơi trí tuệ rất có ích cho việc phát triển trí thông minh của trẻ.'},
     {zh:'研究发现，坚持运动不但能增强体力，还能提高智力水平。',py:'Yánjiū fāxiàn, jiānchí yùndòng búdàn néng zēngqiáng tǐlì, hái néng tígāo zhìlì shuǐpíng.',vn:'Nghiên cứu phát hiện, kiên trì vận động không những tăng cường thể lực mà còn nâng cao trí lực.'},
     {zh:'这道题不仅考知识，更考智力。',py:'Zhè dào tí bùjǐn kǎo zhīshi, gèng kǎo zhìlì.',vn:'Câu này không chỉ kiểm tra kiến thức mà càng kiểm tra trí thông minh.'}
   ],
   colloFull:[
     {zh:'开发智力',py:'kāifā zhìlì',vn:'phát triển trí tuệ'},
     {zh:'智力游戏',py:'zhìlì yóuxì',vn:'trò chơi trí tuệ'},
     {zh:'智力水平',py:'zhìlì shuǐpíng',vn:'mức độ trí tuệ'},
     {zh:'智力测验',py:'zhìlì cèyàn',vn:'bài trắc nghiệm trí tuệ'},
     {zh:'智力和体力',py:'zhìlì hé tǐlì',vn:'trí lực và thể lực'}
   ],
   patterns:[
     {s:'对开发 + 智力 + 很有帮助',m:'Rất có ích cho việc phát triển trí tuệ'},
     {s:'既考 + 知识，又考 + 智力',m:'Vừa kiểm tra kiến thức vừa kiểm tra trí tuệ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhiều phụ huynh cho rằng học đàn piano có thể giúp trẻ phát triển trí tuệ.',answer:'很多家长认为学钢琴可以帮助孩子开发智力。',answerPy:'Hěn duō jiāzhǎng rènwéi xué gāngqín kěyǐ bāngzhù háizi kāifā zhìlì.',
      note:'帮助 + người + V (kiêm ngữ).',pair:'帮助 + 人 + V'},
     {promptLang:'vi',prompt:'Bất kể trí thông minh cao hay thấp, chỉ cần chịu khó, ai cũng có thể thành công.',answer:'不管智力高低，只要肯努力，谁都可以成功。',answerPy:'Bùguǎn zhìlì gāodī, zhǐyào kěn nǔlì, shéi dōu kěyǐ chénggōng.',
      note:'不管 + 高低 (cặp trái nghĩa); 谁都 = ai cũng.',pair:'不管……都……'}
   ]},

  {n:16,zh:'预期',py:'yùqī',pos:'Động từ / Danh từ',vn:'dự tính, mong đợi (trước)',hv:'dự kỳ',em:'🎯',lesson:1,
   explain:['Mong đợi, dự tính trước (kết quả sẽ đạt được): 达到预期的效果, 预期的目标. Chủ yếu dùng làm định ngữ hoặc tân ngữ.','Hay đi với 达到预期 / 超出预期 / 不如预期 / 预期效果 / 预期目标. Văn viết, dùng nhiều trong báo cáo, kinh tế, y học.'],
   usage:'达到 / 超出 / 低于 + 预期; 预期 + 的 + 效果 / 目标 / 结果; 比预期 + 好 / 差.',
   collo:['达到预期效果','超出预期','预期目标','不如预期'],
   ex_zh:'当然要达到预期效果，怎样运动很重要。',ex_py:'Dāngrán yào dádào yùqī xiàoguǒ, zěnyàng yùndòng hěn zhòngyào.',ex_vn:'Tất nhiên muốn đạt được hiệu quả mong đợi thì vận động như thế nào là rất quan trọng.',
   exList:[
     {zh:'补钙也不能急于求成，只要每天坚持，就能达到预期的效果。',py:'Bǔ gài yě bù néng jíyú qiú chéng, zhǐyào měi tiān jiānchí, jiù néng dádào yùqī de xiàoguǒ.',vn:'Bổ sung canxi cũng không thể nóng vội, chỉ cần kiên trì mỗi ngày là sẽ đạt hiệu quả như mong đợi.'},
     {zh:'这次活动的效果远远超出了我们的预期。',py:'Zhè cì huódòng de xiàoguǒ yuǎnyuǎn chāochūle wǒmen de yùqī.',vn:'Hiệu quả của hoạt động lần này vượt xa dự tính của chúng tôi.'},
     {zh:'新产品的销量不如预期，公司正在寻找原因。',py:'Xīn chǎnpǐn de xiāoliàng bùrú yùqī, gōngsī zhèngzài xúnzhǎo yuányīn.',vn:'Doanh số sản phẩm mới không như kỳ vọng, công ty đang tìm nguyên nhân.'}
   ],
   colloFull:[
     {zh:'达到预期效果',py:'dádào yùqī xiàoguǒ',vn:'đạt hiệu quả mong đợi'},
     {zh:'超出预期',py:'chāochū yùqī',vn:'vượt dự tính'},
     {zh:'预期目标',py:'yùqī mùbiāo',vn:'mục tiêu dự kiến'},
     {zh:'不如预期',py:'bùrú yùqī',vn:'không như mong đợi'},
     {zh:'比预期好',py:'bǐ yùqī hǎo',vn:'tốt hơn dự tính'}
   ],
   patterns:[
     {s:'要达到预期（的）效果，……很重要',m:'Muốn đạt hiệu quả mong đợi thì … rất quan trọng'},
     {s:'……远远超出了 / 不如 + （某人的）预期',m:'… vượt xa / không bằng dự tính của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mọi người phối hợp tốt, chắc chắn sẽ đạt được mục tiêu dự kiến.',answer:'只要大家配合好，就一定能达到预期的目标。',answerPy:'Zhǐyào dàjiā pèihé hǎo, jiù yídìng néng dádào yùqī de mùbiāo.',
      note:'只要……就……: chỉ cần … là ….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Kết quả thi lần này tốt hơn dự tính, cả lớp đều rất vui.',answer:'这次考试的结果比预期的好，全班同学都很高兴。',answerPy:'Zhè cì kǎoshì de jiéguǒ bǐ yùqī de hǎo, quán bān tóngxué dōu hěn gāoxìng.',
      note:'A 比 B + Adj; 预期的 = kết quả dự tính.',pair:'A比B……'}
   ]},

  {n:17,zh:'首要',py:'shǒuyào',pos:'Tính từ',vn:'hàng đầu, quan trọng nhất',hv:'thủ yếu',em:'🥇',lesson:1,
   explain:['Quan trọng nhất, đứng ở vị trí thứ nhất: 首要问题, 首要任务, 首要条件. Chỉ làm định ngữ, không nói 很首要.','首 = đầu, thứ nhất (xem 热身 2: 首都, 首批, 首富, 首届, 首席…).'],
   usage:'首要 + 问题 / 任务 / 条件 / 目标; ……的首要任务是……; 把……放在首要位置.',
   collo:['首要问题','首要任务','首要条件','放在首要位置'],
   ex_zh:'要健康，首要问题是勤于运用大脑，人的大脑不用也会生锈。',ex_py:'Yào jiànkāng, shǒuyào wèntí shì qínyú yùnyòng dànǎo, rén de dànǎo bú yòng yě huì shēng xiù.',ex_vn:'Muốn khoẻ mạnh, vấn đề hàng đầu là chăm chỉ sử dụng bộ não, bộ não con người không dùng cũng sẽ "gỉ sét".',
   exList:[
     {zh:'面对市场竞争，首要任务是保证产品质量。',py:'Miànduì shìchǎng jìngzhēng, shǒuyào rènwu shì bǎozhèng chǎnpǐn zhìliàng.',vn:'Đối mặt với cạnh tranh thị trường, nhiệm vụ hàng đầu là bảo đảm chất lượng sản phẩm.'},
     {zh:'对学生来说，首要的是学会自主学习。',py:'Duì xuésheng lái shuō, shǒuyào de shì xuéhuì zìzhǔ xuéxí.',vn:'Đối với học sinh, điều quan trọng hàng đầu là học được cách tự học.'},
     {zh:'发生火灾时，要把人的安全放在首要位置。',py:'Fāshēng huǒzāi shí, yào bǎ rén de ānquán fàng zài shǒuyào wèizhi.',vn:'Khi xảy ra hoả hoạn, phải đặt sự an toàn của con người lên hàng đầu.'}
   ],
   colloFull:[
     {zh:'首要问题',py:'shǒuyào wèntí',vn:'vấn đề hàng đầu'},
     {zh:'首要任务',py:'shǒuyào rènwu',vn:'nhiệm vụ hàng đầu'},
     {zh:'首要条件',py:'shǒuyào tiáojiàn',vn:'điều kiện tiên quyết'},
     {zh:'放在首要位置',py:'fàng zài shǒuyào wèizhi',vn:'đặt lên hàng đầu'},
     {zh:'首要目标',py:'shǒuyào mùbiāo',vn:'mục tiêu hàng đầu'}
   ],
   patterns:[
     {s:'要……，首要问题是……',m:'Muốn …, vấn đề hàng đầu là …'},
     {s:'把 + N + 放在首要位置',m:'Đặt N lên hàng đầu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn học tốt ngoại ngữ, vấn đề hàng đầu là dám mở miệng nói.',answer:'要想学好外语，首要问题是敢于开口说。',answerPy:'Yào xiǎng xuéhǎo wàiyǔ, shǒuyào wèntí shì gǎnyú kāikǒu shuō.',
      note:'敢于 + V = dám …; 首要问题是 + V.',pair:'要想……，首要……'},
     {promptLang:'vi',prompt:'Dù làm việc gì, đều nên đặt an toàn lên hàng đầu.',answer:'无论做什么事，都应该把安全放在首要位置。',answerPy:'Wúlùn zuò shénme shì, dōu yīnggāi bǎ ānquán fàng zài shǒuyào wèizhi.',
      note:'无论……都……; 把 + O + 放在 + nơi.',pair:'无论……都……'}
   ]},

  {n:18,zh:'生锈',py:'shēng xiù',pos:'Động từ (li hợp)',vn:'bị gỉ; (nghĩa bóng) bị trì độn, cùn đi',hv:'sinh tú',em:'🔩',lesson:1,
   explain:['(Kim loại) bị oxy hoá, sinh gỉ: 铁门生锈了. Là động từ li hợp: 生了锈, 生了一层锈.','Nghĩa bóng: (đầu óc, kỹ năng) lâu không dùng thì cùn đi, chậm chạp: 大脑不用也会生锈. 生 = sinh ra (热身 2: 生病, 生财, 生疑…).'],
   usage:'N + 生锈（了）; 生了（一层）锈; 大脑 / 脑子 + 生锈; 防止生锈.',
   collo:['大脑生锈','铁门生锈了','生了一层锈','防止生锈'],
   ex_zh:'要健康，首要问题是勤于运用大脑，人的大脑不用也会生锈。',ex_py:'Yào jiànkāng, shǒuyào wèntí shì qínyú yùnyòng dànǎo, rén de dànǎo bú yòng yě huì shēng xiù.',ex_vn:'Muốn khoẻ mạnh, vấn đề hàng đầu là chăm chỉ sử dụng bộ não, bộ não con người không dùng cũng sẽ "gỉ sét".',
   exList:[
     {zh:'那辆自行车在院子里放了一个冬天，车链子都生锈了。',py:'Nà liàng zìxíngchē zài yuànzi li fàngle yí ge dōngtiān, chē liànzi dōu shēng xiù le.',vn:'Chiếc xe đạp để ngoài sân cả một mùa đông, xích xe gỉ hết cả.'},
     {zh:'放了一个暑假，我的脑子好像生了锈，连简单的题都算错了。',py:'Fàngle yí ge shǔjià, wǒ de nǎozi hǎoxiàng shēngle xiù, lián jiǎndān de tí dōu suàncuò le.',vn:'Nghỉ một kỳ hè, đầu óc tôi như bị gỉ, đến bài đơn giản cũng tính sai.'},
     {zh:'刀用完以后要擦干，防止生锈。',py:'Dāo yòngwán yǐhòu yào cāgān, fángzhǐ shēng xiù.',vn:'Dao dùng xong phải lau khô để tránh bị gỉ.'}
   ],
   colloFull:[
     {zh:'大脑生锈',py:'dànǎo shēng xiù',vn:'đầu óc "gỉ sét"'},
     {zh:'铁门生锈了',py:'tiěmén shēng xiù le',vn:'cửa sắt bị gỉ'},
     {zh:'生了一层锈',py:'shēngle yì céng xiù',vn:'phủ một lớp gỉ'},
     {zh:'防止生锈',py:'fángzhǐ shēng xiù',vn:'chống gỉ'},
     {zh:'很容易生锈',py:'hěn róngyì shēng xiù',vn:'rất dễ bị gỉ'}
   ],
   patterns:[
     {s:'N + 不用也会生锈',m:'N không dùng cũng sẽ gỉ (cùn đi)'},
     {s:'……好像生了锈',m:'… như bị gỉ sét (chậm chạp)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đầu óc cũng như máy móc, lâu không dùng sẽ bị "gỉ".',answer:'大脑就像机器一样，长时间不用就会生锈。',answerPy:'Dànǎo jiù xiàng jīqì yíyàng, cháng shíjiān bú yòng jiù huì shēng xiù.',
      note:'像……一样 = giống như …; 不……就会…… = không … thì sẽ ….',pair:'像……一样'},
     {promptLang:'vi',prompt:'Chiếc khoá này đã gỉ rồi, mở thế nào cũng không mở được.',answer:'这把锁已经生锈了，怎么也打不开。',answerPy:'Zhè bǎ suǒ yǐjīng shēng xiù le, zěnme yě dǎ bu kāi.',
      note:'怎么也 + V不 + bổ ngữ = làm thế nào cũng không … được.',pair:'怎么也……不……'}
   ]},


  {n:19,zh:'放射',py:'fàngshè',pos:'Động từ',vn:'phóng ra, toả ra, phát ra',hv:'phóng xạ',em:'✨',lesson:1,
   explain:['(Ánh sáng, tia, nhiệt…) từ một điểm toả ra xung quanh: 放射光芒, 放射出光和热. Nghĩa bóng: 思维放射出新的火花 (tư duy loé lên tia sáng mới).','Chú ý: tiếng Việt "phóng xạ" thường chỉ bức xạ hạt nhân (中文 là 放射性 / 辐射). 放射 rộng hơn: mọi sự toả ra từ một tâm.'],
   usage:'放射 + 出 + 光芒 / 光和热 / 火花; 向四周放射; 放射性物质; 放射科 (khoa chẩn đoán hình ảnh).',
   collo:['放射出火花','放射光芒','向四周放射','放射性物质'],
   ex_zh:'左右脑交替使用，思维常可以放射出新的火花。',ex_py:'Zuǒ-yòu nǎo jiāotì shǐyòng, sīwéi cháng kěyǐ fàngshè chū xīn de huǒhuā.',ex_vn:'Sử dụng luân phiên não trái và não phải, tư duy thường có thể loé lên những tia sáng mới.',
   exList:[
     {zh:'太阳每时每刻都在向宇宙放射出巨大的光和热。',py:'Tàiyáng měi shí měi kè dōu zài xiàng yǔzhòu fàngshè chū jùdà de guāng hé rè.',vn:'Mặt trời lúc nào cũng toả ra vũ trụ ánh sáng và nhiệt lượng khổng lồ.'},
     {zh:'这座城市的道路以广场为中心，向四周放射出去。',py:'Zhè zuò chéngshì de dàolù yǐ guǎngchǎng wéi zhōngxīn, xiàng sìzhōu fàngshè chūqù.',vn:'Đường sá của thành phố này lấy quảng trường làm trung tâm, toả ra bốn phía.'},
     {zh:'放射性物质对人体危害很大，必须严格管理。',py:'Fàngshèxìng wùzhì duì réntǐ wēihài hěn dà, bìxū yángé guǎnlǐ.',vn:'Chất phóng xạ rất có hại cho cơ thể người, phải quản lý nghiêm ngặt.'}
   ],
   colloFull:[
     {zh:'放射出火花',py:'fàngshè chū huǒhuā',vn:'loé lên tia lửa'},
     {zh:'放射光芒',py:'fàngshè guāngmáng',vn:'toả ánh hào quang'},
     {zh:'向四周放射',py:'xiàng sìzhōu fàngshè',vn:'toả ra bốn phía'},
     {zh:'放射性物质',py:'fàngshèxìng wùzhì',vn:'chất phóng xạ'},
     {zh:'放射出光和热',py:'fàngshè chū guāng hé rè',vn:'phát ra ánh sáng và nhiệt'}
   ],
   patterns:[
     {s:'N + 放射出 + 光芒 / 火花',m:'N toả ra ánh sáng / loé tia lửa'},
     {s:'以 A 为中心，向四周放射',m:'Lấy A làm tâm, toả ra bốn phía'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi mọi người cùng nhau thảo luận, thường có thể loé lên những ý tưởng mới.',answer:'大家一起讨论的时候，常常能放射出新的思想火花。',answerPy:'Dàjiā yìqǐ tǎolùn de shíhou, chángcháng néng fàngshè chū xīn de sīxiǎng huǒhuā.',
      note:'……的时候 = khi …; 思想火花 = tia sáng ý tưởng.',pair:'……的时候'},
     {promptLang:'vi',prompt:'Viên kim cương dưới ánh đèn toả ra ánh sáng lấp lánh.',answer:'钻石在灯光下放射出耀眼的光芒。',answerPy:'Zuànshí zài dēngguāng xià fàngshè chū yàoyǎn de guāngmáng.',
      note:'在……下 = dưới …; 耀眼 / 光芒 (bài 26).',pair:'在……下'}
   ]},

  {n:20,zh:'夫人',py:'fūrén',pos:'Danh từ',vn:'phu nhân, vợ (cách gọi tôn trọng)',hv:'phu nhân',em:'👩',lesson:1,
   explain:['Cách gọi tôn trọng vợ của người khác (thường là người có địa vị): 钱学森的夫人, 总统夫人, 王夫人.','Không dùng để gọi vợ mình trong khẩu ngữ thường ngày (nói 我爱人 / 我太太 / 老婆); 夫人 trang trọng, hay dùng trong ngoại giao, báo chí.'],
   usage:'某人 + 的夫人; 总统 / 大使 + 夫人; 姓 + 夫人; 夫人 + 陪同.',
   collo:['钱学森的夫人','总统夫人','在夫人的陪同下','王夫人'],
   ex_zh:'著名科学家钱学森的夫人是音乐家。',ex_py:'Zhùmíng kēxuéjiā Qián Xuésēn de fūrén shì yīnyuèjiā.',ex_vn:'Phu nhân của nhà khoa học nổi tiếng Tiền Học Sâm là một nhạc sĩ.',
   exList:[
     {zh:'总统在夫人的陪同下参观了这所学校。',py:'Zǒngtǒng zài fūrén de péitóng xià cānguānle zhè suǒ xuéxiào.',vn:'Tổng thống cùng phu nhân đến thăm ngôi trường này.'},
     {zh:'老教授和他的夫人结婚五十年，一直相亲相爱。',py:'Lǎo jiàoshòu hé tā de fūrén jiéhūn wǔshí nián, yìzhí xiāngqīn-xiāng\'ài.',vn:'Vị giáo sư già và phu nhân kết hôn năm mươi năm, luôn yêu thương nhau.'},
     {zh:'晚会上，大使夫人用流利的汉语向大家问好。',py:'Wǎnhuì shang, dàshǐ fūrén yòng liúlì de Hànyǔ xiàng dàjiā wènhǎo.',vn:'Trong buổi dạ hội, phu nhân đại sứ dùng tiếng Hán lưu loát chào hỏi mọi người.'}
   ],
   colloFull:[
     {zh:'钱学森的夫人',py:'Qián Xuésēn de fūrén',vn:'phu nhân của Tiền Học Sâm'},
     {zh:'总统夫人',py:'zǒngtǒng fūrén',vn:'phu nhân tổng thống'},
     {zh:'在夫人的陪同下',py:'zài fūrén de péitóng xià',vn:'có phu nhân đi cùng'},
     {zh:'王夫人',py:'Wáng fūrén',vn:'bà Vương (phu nhân họ Vương)'},
     {zh:'大使夫人',py:'dàshǐ fūrén',vn:'phu nhân đại sứ'}
   ],
   patterns:[
     {s:'某人 + 在夫人的陪同下 + V',m:'Ai đó cùng phu nhân làm gì'},
     {s:'某人 + 的夫人 + 是……',m:'Phu nhân của ai là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói phu nhân của vị giám đốc ấy từng là vận động viên, thảo nào bà ấy trông khoẻ mạnh thế.',answer:'听说那位经理的夫人以前是运动员，怪不得她看起来那么健康。',answerPy:'Tīngshuō nà wèi jīnglǐ de fūrén yǐqián shì yùndòngyuán, guàibude tā kàn qǐlái nàme jiànkāng.',
      note:'听说 = nghe nói; 怪不得 = thảo nào; 看起来 = trông có vẻ.',pair:'怪不得……'},
     {promptLang:'vi',prompt:'Ông ấy đã thành công như vậy, một nửa là nhờ sự ủng hộ của phu nhân.',answer:'他能取得这样的成功，一半要归功于夫人的支持。',answerPy:'Tā néng qǔdé zhèyàng de chénggōng, yíbàn yào guīgōng yú fūrén de zhīchí.',
      note:'归功于 = quy công cho, nhờ vào.',pair:'归功于……'}
   ]},

  {n:21,zh:'端端正正',py:'duānduānzhèngzhèng',pos:'Tính từ (dạng lặp của 端正)',vn:'ngay ngắn, nghiêm chỉnh, đàng hoàng',hv:'đoan đoan chính chính',em:'🪑',lesson:1,
   explain:['Dạng lặp AABB của 端正 (duānzhèng — ngay ngắn, cân đối, đoan trang), nhấn mạnh mức độ và mang sắc thái miêu tả: 端端正正地坐着 (ngồi ngay ngắn nghiêm chỉnh), 字写得端端正正.','端正 còn là động từ "chấn chỉnh cho đúng": 端正态度 (sửa lại thái độ cho đúng). Dạng lặp 端端正正 chỉ dùng miêu tả, không mang tân ngữ.'],
   usage:'端端正正地 + 坐 / 站 / 写; 写得端端正正; 端正 + 态度 / 作风 (động từ); 五官端正.',
   collo:['端端正正地坐着','写得端端正正','端正态度','五官端正'],
   ex_zh:'钱学森的很多重要科学理论不是端端正正地坐在桌子前面想出来的，而是听过音乐之后冒出来的。',ex_py:'Qián Xuésēn de hěn duō zhòngyào kēxué lǐlùn bú shì duānduānzhèngzhèng de zuò zài zhuōzi qiánmian xiǎng chūlái de, ér shì tīngguo yīnyuè zhīhòu mào chūlái de.',ex_vn:'Nhiều lý thuyết khoa học quan trọng của Tiền Học Sâm không phải do ngồi ngay ngắn trước bàn mà nghĩ ra, mà là nảy ra sau khi nghe nhạc.',
   exList:[
     {zh:'小学生们端端正正地坐在教室里，认真听老师讲课。',py:'Xiǎoxuéshēngmen duānduānzhèngzhèng de zuò zài jiàoshì li, rènzhēn tīng lǎoshī jiǎngkè.',vn:'Các em học sinh tiểu học ngồi ngay ngắn trong lớp, chăm chú nghe cô giảng bài.'},
     {zh:'他的字虽然不算漂亮，但写得端端正正，看起来很舒服。',py:'Tā de zì suīrán bú suàn piàoliang, dàn xiě de duānduānzhèngzhèng, kàn qǐlái hěn shūfu.',vn:'Chữ cậu ấy tuy không tính là đẹp nhưng viết rất ngay ngắn, nhìn dễ chịu.'},
     {zh:'要想提高成绩，首先得端正学习态度。',py:'Yào xiǎng tígāo chéngjì, shǒuxiān děi duānzhèng xuéxí tàidu.',vn:'Muốn nâng cao thành tích, trước hết phải chấn chỉnh thái độ học tập.'}
   ],
   colloFull:[
     {zh:'端端正正地坐着',py:'duānduānzhèngzhèng de zuòzhe',vn:'ngồi ngay ngắn'},
     {zh:'写得端端正正',py:'xiě de duānduānzhèngzhèng',vn:'viết rất ngay ngắn'},
     {zh:'端正态度',py:'duānzhèng tàidu',vn:'chấn chỉnh thái độ'},
     {zh:'五官端正',py:'wǔguān duānzhèng',vn:'ngũ quan cân đối'},
     {zh:'端端正正地挂着',py:'duānduānzhèngzhèng de guàzhe',vn:'treo ngay ngắn'}
   ],
   patterns:[
     {s:'端端正正地 + V（坐 / 站 / 挂）',m:'Làm gì một cách ngay ngắn, nghiêm chỉnh'},
     {s:'不是……想出来的，而是……冒出来的',m:'Không phải … nghĩ ra, mà là … nảy ra'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chụp ảnh thẻ thì phải ngồi ngay ngắn, không được nghiêng đầu.',answer:'拍证件照的时候要端端正正地坐好，不能歪着头。',answerPy:'Pāi zhèngjiànzhào de shíhou yào duānduānzhèngzhèng de zuòhǎo, bù néng wāizhe tóu.',
      note:'Dạng lặp AABB + 地 + V; 歪着头 = nghiêng đầu (V + 着 chỉ trạng thái).',pair:'AABB + 地 + V'},
     {promptLang:'vi',prompt:'Chỉ cần thái độ đúng đắn, cho dù tiến bộ chậm một chút cũng không sao.',answer:'只要态度端正，即使进步慢一点儿也没关系。',answerPy:'Zhǐyào tàidu duānzhèng, jíshǐ jìnbù màn yìdiǎnr yě méi guānxi.',
      note:'即使……也……: cho dù … cũng ….',pair:'即使……也……'}
   ]},

  {n:22,zh:'潜力',py:'qiánlì',pos:'Danh từ',vn:'tiềm năng, tiềm lực',hv:'tiềm lực',em:'🌱',lesson:1,
   explain:['Năng lực, sức mạnh đang tiềm ẩn bên trong, chưa được phát huy hết: 大脑潜力巨大, 有潜力的年轻人.','Hay đi với 发挥 / 挖掘 / 激发 + 潜力; 潜力 + 巨大 / 无穷; 很有潜力; 市场潜力. Tiếng Việt thường dịch "tiềm năng".'],
   usage:'有 / 很有 + 潜力; 发挥 / 挖掘 / 激发 + 潜力; 潜力 + 巨大 / 无限; 市场潜力.',
   collo:['潜力巨大','发挥潜力','很有潜力','挖掘潜力'],
   ex_zh:'大脑潜力巨大，它是人体衰退最慢的器官。',ex_py:'Dànǎo qiánlì jùdà, tā shì réntǐ shuāituì zuì màn de qìguān.',ex_vn:'Tiềm năng của bộ não rất lớn, đó là cơ quan suy thoái chậm nhất của cơ thể người.',
   exList:[
     {zh:'教练认为这个小运动员很有潜力，将来一定能拿冠军。',py:'Jiàoliàn rènwéi zhège xiǎo yùndòngyuán hěn yǒu qiánlì, jiānglái yídìng néng ná guànjūn.',vn:'Huấn luyện viên cho rằng vận động viên nhỏ tuổi này rất có tiềm năng, tương lai chắc chắn sẽ giành chức vô địch.'},
     {zh:'好老师善于激发学生的潜力，让每个人都发挥出最好的水平。',py:'Hǎo lǎoshī shànyú jīfā xuésheng de qiánlì, ràng měi ge rén dōu fāhuī chū zuì hǎo de shuǐpíng.',vn:'Thầy giỏi biết khơi dậy tiềm năng của học sinh, để ai cũng phát huy được trình độ tốt nhất.'},
     {zh:'专家认为，农村旅游市场的潜力还远远没有被开发出来。',py:'Zhuānjiā rènwéi, nóngcūn lǚyóu shìchǎng de qiánlì hái yuǎnyuǎn méiyǒu bèi kāifā chūlái.',vn:'Chuyên gia cho rằng tiềm năng của thị trường du lịch nông thôn còn lâu mới được khai thác hết.'}
   ],
   colloFull:[
     {zh:'潜力巨大',py:'qiánlì jùdà',vn:'tiềm năng to lớn'},
     {zh:'发挥潜力',py:'fāhuī qiánlì',vn:'phát huy tiềm năng'},
     {zh:'很有潜力',py:'hěn yǒu qiánlì',vn:'rất có tiềm năng'},
     {zh:'挖掘潜力',py:'wājué qiánlì',vn:'khai thác tiềm năng'},
     {zh:'市场潜力',py:'shìchǎng qiánlì',vn:'tiềm năng thị trường'}
   ],
   patterns:[
     {s:'N + 潜力巨大',m:'N có tiềm năng rất lớn'},
     {s:'激发 / 挖掘 + 某人的潜力',m:'Khơi dậy / khai thác tiềm năng của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi người đều có tiềm năng rất lớn, then chốt là có dám thử hay không.',answer:'每个人都有巨大的潜力，关键在于敢不敢尝试。',answerPy:'Měi ge rén dōu yǒu jùdà de qiánlì, guānjiàn zàiyú gǎn bu gǎn chángshì.',
      note:'关键在于 + V不V = then chốt ở chỗ có … hay không; 尝试 (bài 4).',pair:'关键在于……'},
     {promptLang:'vi',prompt:'Nhờ thầy động viên, tiềm năng của cậu ấy được phát huy trọn vẹn.',answer:'在老师的鼓励下，他的潜力得到了充分的发挥。',answerPy:'Zài lǎoshī de gǔlì xià, tā de qiánlì dédàole chōngfèn de fāhuī.',
      note:'在……下 = dưới (sự) …; 得到 + 充分的发挥 (bị động ý nghĩa).',pair:'在……下'}
   ]},

  {n:23,zh:'衰退',py:'shuāituì',pos:'Động từ',vn:'suy giảm, suy thoái, sa sút',hv:'suy thoái',em:'📉',lesson:1,
   explain:['(Sức khoẻ, năng lực, ý chí) yếu dần, kém đi: 记忆力衰退, 视力衰退, 体力衰退, 大脑衰退.','(Kinh tế, chính trị) sa sút: 经济衰退. 衰 = suy, yếu (练习1: 衰老, 衰弱, 衰败…).'],
   usage:'记忆力 / 视力 / 体力 / 大脑 + 衰退; 经济衰退; 防止 / 延缓 + 衰退; 逐渐衰退.',
   collo:['记忆力衰退','衰退最慢','经济衰退','防止衰退'],
   ex_zh:'大脑潜力巨大，它是人体衰退最慢的器官。',ex_py:'Dànǎo qiánlì jùdà, tā shì réntǐ shuāituì zuì màn de qìguān.',ex_vn:'Tiềm năng của bộ não rất lớn, đó là cơ quan suy thoái chậm nhất của cơ thể người.',
   exList:[
     {zh:'人上了年纪，记忆力会逐渐衰退，所以要经常用脑。',py:'Rén shàngle niánjì, jìyìlì huì zhújiàn shuāituì, suǒyǐ yào jīngcháng yòng nǎo.',vn:'Người có tuổi thì trí nhớ sẽ dần suy giảm, cho nên phải thường xuyên dùng não.'},
     {zh:'长时间玩手机，很多孩子的视力都衰退了。',py:'Cháng shíjiān wán shǒujī, hěn duō háizi de shìlì dōu shuāituì le.',vn:'Chơi điện thoại trong thời gian dài, thị lực của rất nhiều đứa trẻ đều giảm sút.'},
     {zh:'经济衰退期间，不少工厂不得不裁员。',py:'Jīngjì shuāituì qījiān, bù shǎo gōngchǎng bùdébù cáiyuán.',vn:'Trong thời kỳ suy thoái kinh tế, không ít nhà máy buộc phải cắt giảm nhân sự.'}
   ],
   colloFull:[
     {zh:'记忆力衰退',py:'jìyìlì shuāituì',vn:'trí nhớ suy giảm'},
     {zh:'衰退最慢',py:'shuāituì zuì màn',vn:'suy thoái chậm nhất'},
     {zh:'经济衰退',py:'jīngjì shuāituì',vn:'suy thoái kinh tế'},
     {zh:'防止衰退',py:'fángzhǐ shuāituì',vn:'ngăn ngừa suy giảm'},
     {zh:'视力衰退',py:'shìlì shuāituì',vn:'thị lực giảm sút'}
   ],
   patterns:[
     {s:'N（能力）+ 逐渐衰退',m:'Năng lực N dần suy giảm'},
     {s:'……是……衰退最慢 / 最快的……',m:'… là … suy thoái chậm / nhanh nhất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không kiên trì rèn luyện, thể lực sẽ ngày càng giảm sút.',answer:'如果不坚持锻炼，体力就会越来越衰退。',answerPy:'Rúguǒ bù jiānchí duànliàn, tǐlì jiù huì yuè lái yuè shuāituì.',
      note:'如果……就……; 越来越 + V.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Dùng não thường xuyên có thể làm chậm sự suy giảm của trí nhớ.',answer:'经常用脑可以延缓记忆力的衰退。',answerPy:'Jīngcháng yòng nǎo kěyǐ yánhuǎn jìyìlì de shuāituì.',
      note:'衰退 làm danh từ sau 的; 延缓 = làm chậm lại.',pair:'……的衰退'}
   ]},

  {n:24,zh:'著作',py:'zhùzuò',pos:'Danh từ',vn:'tác phẩm, trước tác (sách chuyên môn)',hv:'trứ tác',em:'📚',lesson:1,
   explain:['Tác phẩm viết ra, thường là sách mang tính học thuật, chuyên môn, có giá trị: 养生著作, 学术著作, 历史著作.','Lượng từ: 一部著作. Khác 作品: 作品 rộng (văn, nhạc, tranh…); 著作 thiên về sách, công trình nghiên cứu. 著 = viết sách (著名 = nổi tiếng).'],
   usage:'一部 + 著作; 学术 / 养生 / 历史 + 著作; ……著作中指出; 出版著作.',
   collo:['养生著作','学术著作','一部著作','著作中指出'],
   ex_zh:'一些养生著作中指出，人用脑越勤，大脑各神经细胞之间的联系越多。',ex_py:'Yìxiē yǎngshēng zhùzuò zhōng zhǐchū, rén yòng nǎo yuè qín, dànǎo gè shénjīng xìbāo zhījiān de liánxì yuè duō.',ex_vn:'Một số sách dưỡng sinh chỉ ra rằng, người càng chăm dùng não thì liên kết giữa các tế bào thần kinh trong não càng nhiều.',
   exList:[
     {zh:'这位教授一生出版了十几部学术著作。',py:'Zhè wèi jiàoshòu yìshēng chūbǎnle shí jǐ bù xuéshù zhùzuò.',vn:'Vị giáo sư này cả đời xuất bản mười mấy công trình học thuật.'},
     {zh:'《史记》是中国历史上最重要的历史著作之一。',py:'《Shǐjì》 shì Zhōngguó lìshǐ shang zuì zhòngyào de lìshǐ zhùzuò zhī yī.',vn:'"Sử ký" là một trong những bộ sử quan trọng nhất trong lịch sử Trung Quốc.'},
     {zh:'他的著作被翻译成了二十多种语言，在全世界广泛流传。',py:'Tā de zhùzuò bèi fānyì chéngle èrshí duō zhǒng yǔyán, zài quán shìjiè guǎngfàn liúchuán.',vn:'Tác phẩm của ông được dịch ra hơn hai mươi thứ tiếng, lưu truyền rộng rãi khắp thế giới.'}
   ],
   colloFull:[
     {zh:'养生著作',py:'yǎngshēng zhùzuò',vn:'sách dưỡng sinh'},
     {zh:'学术著作',py:'xuéshù zhùzuò',vn:'công trình học thuật'},
     {zh:'一部著作',py:'yí bù zhùzuò',vn:'một bộ tác phẩm'},
     {zh:'著作中指出',py:'zhùzuò zhōng zhǐchū',vn:'trong sách chỉ ra'},
     {zh:'出版著作',py:'chūbǎn zhùzuò',vn:'xuất bản tác phẩm'}
   ],
   patterns:[
     {s:'（一些）……著作中指出，……',m:'Trong một số sách … chỉ ra rằng …'},
     {s:'……是……最重要的著作之一',m:'… là một trong những tác phẩm quan trọng nhất của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để viết luận văn, cậu ấy đã đọc hết các tác phẩm quan trọng trong lĩnh vực này.',answer:'为了写论文，他把这个领域的重要著作都读了一遍。',answerPy:'Wèile xiě lùnwén, tā bǎ zhège lǐngyù de zhòngyào zhùzuò dōu dúle yí biàn.',
      note:'为了 + mục đích; 把……都 V 了一遍 = đã … hết một lượt.',pair:'为了……'},
     {promptLang:'vi',prompt:'Tuy tác phẩm của ông ấy không nhiều, nhưng bộ nào cũng rất có giá trị.',answer:'他的著作虽然不多，但每一部都很有价值。',answerPy:'Tā de zhùzuò suīrán bù duō, dàn měi yí bù dōu hěn yǒu jiàzhí.',
      note:'每一部都…… = bộ nào cũng …; 部 là lượng từ của sách lớn.',pair:'虽然……但……'}
   ]},

  {n:25,zh:'反射',py:'fǎnshè',pos:'Động từ / Danh từ',vn:'phản xạ; phản chiếu',hv:'phản xạ',em:'🪞',lesson:1,
   explain:['(Vật lý) Ánh sáng, âm thanh gặp bề mặt thì dội lại: 镜子反射阳光, 反射光.','(Sinh lý) Phản ứng tự động của cơ thể trước kích thích qua hệ thần kinh: 条件反射 (phản xạ có điều kiện), 膝跳反射. 射 = bắn ra (热身 2: 放射, 照射, 折射, 辐射…).'],
   usage:'反射 + 阳光 / 光线; 条件反射; 形成 + 反射; 反射 + 出 / 到…….',
   collo:['条件反射','反射阳光','形成反射','反射光线'],
   ex_zh:'人用脑越勤，大脑各神经细胞之间的联系越多，形成的条件反射也越多。',ex_py:'Rén yòng nǎo yuè qín, dànǎo gè shénjīng xìbāo zhījiān de liánxì yuè duō, xíngchéng de tiáojiàn fǎnshè yě yuè duō.',ex_vn:'Người càng chăm dùng não thì liên kết giữa các tế bào thần kinh trong não càng nhiều, phản xạ có điều kiện hình thành cũng càng nhiều.',
   exList:[
     {zh:'雪地会反射大量的阳光，所以滑雪时一定要戴墨镜。',py:'Xuědì huì fǎnshè dàliàng de yángguāng, suǒyǐ huáxuě shí yídìng yào dài mòjìng.',vn:'Mặt tuyết phản xạ rất nhiều ánh nắng, nên khi trượt tuyết nhất định phải đeo kính râm.'},
     {zh:'一听到下课铃，他就条件反射似的站起来往外跑。',py:'Yì tīngdào xiàkè líng, tā jiù tiáojiàn fǎnshè shìde zhàn qǐlái wǎng wài pǎo.',vn:'Vừa nghe chuông tan học, cậu ấy đã như phản xạ có điều kiện đứng dậy chạy ra ngoài.'},
     {zh:'湖面像一面镜子，把远处的山反射得清清楚楚。',py:'Húmiàn xiàng yí miàn jìngzi, bǎ yuǎnchù de shān fǎnshè de qīngqīngchǔchǔ.',vn:'Mặt hồ như một tấm gương, phản chiếu rõ mồn một những ngọn núi phía xa.'}
   ],
   colloFull:[
     {zh:'条件反射',py:'tiáojiàn fǎnshè',vn:'phản xạ có điều kiện'},
     {zh:'反射阳光',py:'fǎnshè yángguāng',vn:'phản xạ ánh nắng'},
     {zh:'形成反射',py:'xíngchéng fǎnshè',vn:'hình thành phản xạ'},
     {zh:'反射光线',py:'fǎnshè guāngxiàn',vn:'phản xạ tia sáng'},
     {zh:'条件反射似的',py:'tiáojiàn fǎnshè shìde',vn:'như phản xạ có điều kiện'}
   ],
   patterns:[
     {s:'……形成的条件反射也越多',m:'Phản xạ có điều kiện hình thành cũng càng nhiều'},
     {s:'像条件反射似的 + V',m:'Làm gì như một phản xạ tự nhiên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tập luyện lâu ngày, động tác này đã trở thành phản xạ có điều kiện của anh ấy.',answer:'经过长期训练，这个动作已经成了他的条件反射。',answerPy:'Jīngguò chángqī xùnliàn, zhège dòngzuò yǐjīng chéngle tā de tiáojiàn fǎnshè.',
      note:'经过…… = trải qua …; 成了 = đã trở thành.',pair:'经过……'},
     {promptLang:'vi',prompt:'Kính cửa sổ phản chiếu ánh nắng, chói đến mức không mở mắt được.',answer:'窗户玻璃反射着阳光，刺得人睁不开眼睛。',answerPy:'Chuānghu bōli fǎnshèzhe yángguāng, cì de rén zhēng bu kāi yǎnjing.',
      note:'V + 着 chỉ trạng thái đang tiếp diễn; 得 + bổ ngữ khả năng phủ định.',pair:'V得 + 不开'}
   ]},

  {n:26,zh:'弱点',py:'ruòdiǎn',pos:'Danh từ',vn:'nhược điểm, điểm yếu',hv:'nhược điểm',em:'🎯',lesson:1,
   explain:['Chỗ yếu, chỗ kém, dễ bị tấn công hoặc dễ phạm sai lầm của người / sự vật: 懒惰是人天生的弱点.','Hay đi với 克服弱点, 抓住（对方的）弱点, 暴露弱点; đối lập với 优点 / 长处. Gần 缺点 nhưng 弱点 nhấn "chỗ yếu, dễ tổn thương" hơn là "khuyết điểm".'],
   usage:'克服 / 暴露 / 抓住 + 弱点; 天生的弱点; 对方的弱点; 人性的弱点.',
   collo:['天生的弱点','克服弱点','抓住弱点','人性的弱点'],
   ex_zh:'懒惰是人天生的弱点，所以不要迁就自己。',ex_py:'Lǎnduò shì rén tiānshēng de ruòdiǎn, suǒyǐ bú yào qiānjiù zìjǐ.',ex_vn:'Lười biếng là nhược điểm bẩm sinh của con người, vì vậy đừng chiều theo bản thân.',
   exList:[
     {zh:'教练仔细研究了对手的比赛录像，终于找到了他们的弱点。',py:'Jiàoliàn zǐxì yánjiūle duìshǒu de bǐsài lùxiàng, zhōngyú zhǎodàole tāmen de ruòdiǎn.',vn:'Huấn luyện viên nghiên cứu kỹ băng ghi hình trận đấu của đối thủ, cuối cùng đã tìm ra điểm yếu của họ.'},
     {zh:'每个人都有弱点，重要的是敢于面对并努力克服。',py:'Měi ge rén dōu yǒu ruòdiǎn, zhòngyào de shì gǎnyú miànduì bìng nǔlì kèfú.',vn:'Ai cũng có điểm yếu, quan trọng là dám đối mặt và cố gắng khắc phục.'},
     {zh:'骗子常常利用老年人怕孤独的弱点来骗钱。',py:'Piànzi chángcháng lìyòng lǎoniánrén pà gūdú de ruòdiǎn lái piàn qián.',vn:'Kẻ lừa đảo thường lợi dụng điểm yếu sợ cô đơn của người già để lừa tiền.'}
   ],
   colloFull:[
     {zh:'天生的弱点',py:'tiānshēng de ruòdiǎn',vn:'nhược điểm bẩm sinh'},
     {zh:'克服弱点',py:'kèfú ruòdiǎn',vn:'khắc phục điểm yếu'},
     {zh:'抓住弱点',py:'zhuāzhù ruòdiǎn',vn:'nắm lấy điểm yếu'},
     {zh:'人性的弱点',py:'rénxìng de ruòdiǎn',vn:'điểm yếu của nhân tính'},
     {zh:'暴露弱点',py:'bàolù ruòdiǎn',vn:'để lộ điểm yếu'}
   ],
   patterns:[
     {s:'A 是 + 人天生的弱点',m:'A là nhược điểm bẩm sinh của con người'},
     {s:'利用 + 某人……的弱点 + 来 + V',m:'Lợi dụng điểm yếu … của ai để làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi biết rõ điểm yếu của mình, mới có thể tiến bộ nhanh hơn.',answer:'只有清楚自己的弱点，才能进步得更快。',answerPy:'Zhǐyǒu qīngchu zìjǐ de ruòdiǎn, cái néng jìnbù de gèng kuài.',
      note:'只有……才……; 进步得更快 (bổ ngữ trạng thái).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Điểm yếu lớn nhất của nó là mềm lòng, ai nhờ gì cũng không nỡ từ chối.',answer:'他最大的弱点是心太软，谁求他帮忙他都不忍心拒绝。',answerPy:'Tā zuì dà de ruòdiǎn shì xīn tài ruǎn, shéi qiú tā bāngmáng tā dōu bù rěnxīn jùjué.',
      note:'谁……都…… = ai … cũng …; 不忍心 = không nỡ.',pair:'谁……都……'}
   ]},

  {n:27,zh:'迁就',py:'qiānjiù',pos:'Động từ',vn:'nhân nhượng, chiều theo, nuông chiều',hv:'thiên tựu',em:'🙆',lesson:1,
   explain:['Nhượng bộ, hạ yêu cầu để chiều theo người khác hoặc chiều theo bản thân (thường mang ý không nên): 迁就自己, 迁就孩子.','Đối tượng là người hoặc khuyết điểm, thói quen: 一味迁就, 不能迁就孩子的坏习惯. Khác 照顾 (quan tâm chăm sóc, tích cực).'],
   usage:'迁就 + 某人 / 自己; 一味 / 过分 + 迁就; 不能迁就 + 坏习惯; 互相迁就.',
   collo:['迁就自己','一味迁就','互相迁就','迁就孩子'],
   ex_zh:'懒惰是人天生的弱点，所以不要迁就自己，要以坚定的意志、坚韧的精神克服惰性。',ex_py:'Lǎnduò shì rén tiānshēng de ruòdiǎn, suǒyǐ bú yào qiānjiù zìjǐ, yào yǐ jiāndìng de yìzhì, jiānrèn de jīngshén kèfú duòxìng.',ex_vn:'Lười biếng là nhược điểm bẩm sinh của con người, vì vậy đừng chiều theo bản thân, phải dùng ý chí kiên định, tinh thần bền bỉ để khắc phục tính lười.',
   exList:[
     {zh:'对孩子的坏习惯不能一味迁就，否则会害了他。',py:'Duì háizi de huài xíguàn bù néng yíwèi qiānjiù, fǒuzé huì hàile tā.',vn:'Đối với thói xấu của trẻ không thể cứ nuông chiều mãi, nếu không sẽ hại nó.'},
     {zh:'夫妻之间要互相迁就，才能过得和睦。',py:'Fūqī zhījiān yào hùxiāng qiānjiù, cái néng guò de hémù.',vn:'Vợ chồng phải nhường nhịn nhau mới sống hoà thuận được.'},
     {zh:'为了迁就大家的时间，会议改在了周六下午。',py:'Wèile qiānjiù dàjiā de shíjiān, huìyì gǎi zàile zhōuliù xiàwǔ.',vn:'Để chiều theo thời gian của mọi người, cuộc họp đổi sang chiều thứ bảy.'}
   ],
   colloFull:[
     {zh:'迁就自己',py:'qiānjiù zìjǐ',vn:'chiều theo bản thân'},
     {zh:'一味迁就',py:'yíwèi qiānjiù',vn:'cứ nuông chiều mãi'},
     {zh:'互相迁就',py:'hùxiāng qiānjiù',vn:'nhường nhịn nhau'},
     {zh:'迁就孩子',py:'qiānjiù háizi',vn:'nuông chiều con'},
     {zh:'迁就大家的时间',py:'qiānjiù dàjiā de shíjiān',vn:'chiều theo thời gian của mọi người'}
   ],
   patterns:[
     {s:'对 + N + 不能一味迁就',m:'Đối với N không thể cứ nhân nhượng mãi'},
     {s:'为了迁就 + 某人，……',m:'Để chiều theo ai, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu cứ chiều theo bản thân mãi thì kế hoạch nào cũng không thực hiện được.',answer:'如果总是迁就自己，那么什么计划都落实不了。',answerPy:'Rúguǒ zǒngshì qiānjiù zìjǐ, nàme shénme jìhuà dōu luòshí bu liǎo.',
      note:'什么……都…… = … nào cũng …; V + 不了 = không … được.',pair:'如果……那么……'},
     {promptLang:'vi',prompt:'Cậu cứ nhường nhịn cậu ta như vậy, chỉ khiến cậu ta càng ngày càng quá đáng.',answer:'你这样一味地迁就他，只会让他越来越过分。',answerPy:'Nǐ zhèyàng yíwèi de qiānjiù tā, zhǐ huì ràng tā yuè lái yuè guòfèn.',
      note:'只会 + V = chỉ khiến / chỉ có thể dẫn đến ….',pair:'只会……'}
   ]},

  {n:28,zh:'坚定',py:'jiāndìng',pos:'Tính từ / Động từ',vn:'kiên định, vững vàng',hv:'kiên định',em:'🗿',lesson:1,
   explain:['(Lập trường, ý chí, niềm tin) vững vàng, không dao động: 坚定的意志, 态度坚定, 坚定地说.','Làm động từ: làm cho vững vàng — 坚定信心 (củng cố niềm tin). 坚 = vững chắc (练习1: 坚韧, 坚持, 坚强, 坚决).'],
   usage:'坚定的 + 意志 / 信念 / 立场; 态度 + 坚定; 坚定地 + V; 坚定 + 信心 (động từ).',
   collo:['坚定的意志','态度坚定','坚定地说','坚定信心'],
   ex_zh:'要以坚定的意志、坚韧的精神克服惰性，下狠心咬牙坚持，绝不能半途而废。',ex_py:'Yào yǐ jiāndìng de yìzhì, jiānrèn de jīngshén kèfú duòxìng, xià hěnxīn yǎoyá jiānchí, jué bù néng bàntú\'érfèi.',ex_vn:'Phải dùng ý chí kiên định, tinh thần bền bỉ để khắc phục tính lười, quyết tâm nghiến răng kiên trì, tuyệt đối không được bỏ dở nửa chừng.',
   exList:[
     {zh:'不管父母怎么劝，他都坚定地说：“我一定要当医生。”',py:'Bùguǎn fùmǔ zěnme quàn, tā dōu jiāndìng de shuō: “Wǒ yídìng yào dāng yīshēng.”',vn:'Mặc cho bố mẹ khuyên thế nào, cậu ấy vẫn kiên định nói: "Con nhất định phải làm bác sĩ."'},
     {zh:'遇到挫折的时候，更要坚定信心。',py:'Yùdào cuòzhé de shíhou, gèng yào jiāndìng xìnxīn.',vn:'Khi gặp thất bại càng phải vững vàng niềm tin.'},
     {zh:'她的态度非常坚定，谁也改变不了她的决定。',py:'Tā de tàidu fēicháng jiāndìng, shéi yě gǎibiàn bu liǎo tā de juédìng.',vn:'Thái độ của cô ấy vô cùng kiên định, không ai thay đổi được quyết định của cô ấy.'}
   ],
   colloFull:[
     {zh:'坚定的意志',py:'jiāndìng de yìzhì',vn:'ý chí kiên định'},
     {zh:'态度坚定',py:'tàidu jiāndìng',vn:'thái độ kiên định'},
     {zh:'坚定地说',py:'jiāndìng de shuō',vn:'nói một cách kiên quyết'},
     {zh:'坚定信心',py:'jiāndìng xìnxīn',vn:'vững vàng niềm tin'},
     {zh:'坚定的信念',py:'jiāndìng de xìnniàn',vn:'niềm tin kiên định'}
   ],
   patterns:[
     {s:'以 + 坚定的意志 + V',m:'Bằng ý chí kiên định mà làm gì'},
     {s:'不管……，都坚定地 + V',m:'Mặc cho …, vẫn kiên định làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần có ý chí kiên định, khó khăn lớn đến đâu cũng có thể vượt qua.',answer:'只要有坚定的意志，再大的困难也能克服。',answerPy:'Zhǐyào yǒu jiāndìng de yìzhì, zài dà de kùnnan yě néng kèfú.',
      note:'再 + Adj + 的 + N + 也…… = … đến đâu cũng ….',pair:'再……也……'},
     {promptLang:'vi',prompt:'Anh ấy kiên định lắc đầu, tỏ ý tuyệt đối không nhân nhượng.',answer:'他坚定地摇了摇头，表示绝不迁就。',answerPy:'Tā jiāndìng de yáoleyáo tóu, biǎoshì jué bù qiānjiù.',
      note:'V了V (摇了摇头); 绝不 = tuyệt đối không.',pair:'绝不……'}
   ]},

  {n:29,zh:'坚韧',py:'jiānrèn',pos:'Tính từ',vn:'bền bỉ, dẻo dai, kiên cường',hv:'kiên nhận',em:'🎋',lesson:1,
   explain:['(Tinh thần, tính cách) bền bỉ, dẻo dai, chịu đựng được áp lực và gian khổ lâu dài mà không gục ngã: 坚韧的精神, 坚韧不拔.','(Vật chất) vừa chắc vừa dẻo, khó đứt: 竹子很坚韧. 韧 = dẻo dai (韧性). Khác 坚定 (nhấn không dao động về lập trường).'],
   usage:'坚韧的 + 精神 / 性格 / 意志; 坚韧不拔; 质地坚韧.',
   collo:['坚韧的精神','坚韧不拔','性格坚韧','质地坚韧'],
   ex_zh:'要以坚定的意志、坚韧的精神克服惰性。',ex_py:'Yào yǐ jiāndìng de yìzhì, jiānrèn de jīngshén kèfú duòxìng.',ex_vn:'Phải dùng ý chí kiên định, tinh thần bền bỉ để khắc phục tính lười.',
   exList:[
     {zh:'马拉松比的不只是速度，更是坚韧的意志。',py:'Mǎlāsōng bǐ de bù zhǐ shì sùdù, gèng shì jiānrèn de yìzhì.',vn:'Marathon không chỉ thi tốc độ mà hơn thế là ý chí bền bỉ.'},
     {zh:'凭着坚韧不拔的精神，他终于从失败中站了起来。',py:'Píngzhe jiānrèn-bùbá de jīngshén, tā zhōngyú cóng shībài zhōng zhànle qǐlái.',vn:'Nhờ tinh thần kiên cường bất khuất, anh ấy cuối cùng đã đứng dậy từ thất bại.'},
     {zh:'竹子质地坚韧，可以用来编织各种生活用品。',py:'Zhúzi zhìdì jiānrèn, kěyǐ yònglái biānzhī gè zhǒng shēnghuó yòngpǐn.',vn:'Tre có chất liệu dẻo dai, có thể dùng để đan đủ loại đồ dùng sinh hoạt.'}
   ],
   colloFull:[
     {zh:'坚韧的精神',py:'jiānrèn de jīngshén',vn:'tinh thần bền bỉ'},
     {zh:'坚韧不拔',py:'jiānrèn-bùbá',vn:'kiên cường bất khuất'},
     {zh:'性格坚韧',py:'xìnggé jiānrèn',vn:'tính cách kiên cường'},
     {zh:'质地坚韧',py:'zhìdì jiānrèn',vn:'chất liệu dẻo dai'},
     {zh:'坚韧的意志',py:'jiānrèn de yìzhì',vn:'ý chí bền bỉ'}
   ],
   patterns:[
     {s:'凭着 + 坚韧的精神，……',m:'Nhờ tinh thần bền bỉ, …'},
     {s:'比的不只是 A，更是 + 坚韧的意志',m:'Không chỉ thi A mà hơn thế là ý chí bền bỉ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cô ấy trông yếu đuối, nhưng tính cách lại vô cùng kiên cường.',answer:'她虽然看起来很柔弱，性格却非常坚韧。',answerPy:'Tā suīrán kàn qǐlái hěn róuruò, xìnggé què fēicháng jiānrèn.',
      note:'虽然……却……: tuy … nhưng lại ….',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Người leo núi phải có không chỉ thể lực tốt mà còn cả ý chí bền bỉ.',answer:'登山的人不但要有好的体力，还要有坚韧的意志。',answerPy:'Dēngshān de rén búdàn yào yǒu hǎo de tǐlì, hái yào yǒu jiānrèn de yìzhì.',
      note:'不但……还…….',pair:'不但……还……'}
   ]},

  {n:30,zh:'狠心',py:'hěnxīn',pos:'Danh từ / Động từ',vn:'quyết tâm lớn (dứt khoát); nhẫn tâm',hv:'ngận tâm',em:'😤',lesson:1,
   explain:['Quyết tâm dứt khoát, gạt bỏ do dự, chấp nhận khó khăn để làm một việc: 下狠心 (hạ quyết tâm), 狠了狠心.','Làm tính từ: nhẫn tâm, tàn nhẫn — 心太狠, 狠心的父母. Ở bài khoá: 下狠心咬牙坚持 = quyết tâm nghiến răng kiên trì.'],
   usage:'下 + 狠心; 狠了狠心; 狠下心来; 狠心 + 的 + 人 (nhẫn tâm).',
   collo:['下狠心','狠了狠心','狠下心来','咬牙下狠心'],
   ex_zh:'要以坚定的意志、坚韧的精神克服惰性，下狠心咬牙坚持，绝不能半途而废。',ex_py:'Yào yǐ jiāndìng de yìzhì, jiānrèn de jīngshén kèfú duòxìng, xià hěnxīn yǎoyá jiānchí, jué bù néng bàntú\'érfèi.',ex_vn:'Phải dùng ý chí kiên định, tinh thần bền bỉ để khắc phục tính lười, quyết tâm nghiến răng kiên trì, tuyệt đối không được bỏ dở nửa chừng.',
   exList:[
     {zh:'为了减肥，她下了狠心，晚上再也不吃零食了。',py:'Wèile jiǎnféi, tā xiàle hěnxīn, wǎnshang zài yě bù chī língshí le.',vn:'Để giảm cân, cô ấy hạ quyết tâm, buổi tối không bao giờ ăn vặt nữa.'},
     {zh:'他狠了狠心，把玩了三年的游戏删掉了。',py:'Tā hěnlehěn xīn, bǎ wánle sān nián de yóuxì shāndiào le.',vn:'Cậu ấy đành dứt khoát xoá trò chơi đã chơi suốt ba năm.'},
     {zh:'妈妈狠下心来，让孩子自己去学校，锻炼他的独立能力。',py:'Māma hěn xià xīn lái, ràng háizi zìjǐ qù xuéxiào, duànliàn tā de dúlì nénglì.',vn:'Mẹ đành cứng lòng để con tự đi học, rèn khả năng tự lập cho con.'}
   ],
   colloFull:[
     {zh:'下狠心',py:'xià hěnxīn',vn:'hạ quyết tâm'},
     {zh:'狠了狠心',py:'hěnlehěn xīn',vn:'đành dứt khoát'},
     {zh:'狠下心来',py:'hěn xià xīn lái',vn:'cứng lòng lại'},
     {zh:'咬牙下狠心',py:'yǎoyá xià hěnxīn',vn:'nghiến răng quyết tâm'},
     {zh:'狠心的人',py:'hěnxīn de rén',vn:'người nhẫn tâm'}
   ],
   patterns:[
     {s:'为了……，某人下了狠心 + V',m:'Để …, ai đó hạ quyết tâm làm gì'},
     {s:'狠下心来 + V',m:'Cứng lòng mà làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi hạ quyết tâm thật sự thì mới có thể bỏ được thói quen xấu này.',answer:'只有真正下狠心，才能改掉这个坏习惯。',answerPy:'Zhǐyǒu zhēnzhèng xià hěnxīn, cái néng gǎidiào zhège huài xíguàn.',
      note:'只有……才……; 改掉 = bỏ đi (bổ ngữ 掉).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Tuy rất không nỡ, nhưng cô ấy vẫn cứng lòng từ chối anh ta.',answer:'虽然很舍不得，但她还是狠下心来拒绝了他。',answerPy:'Suīrán hěn shěbude, dàn tā háishi hěn xià xīn lái jùjuéle tā.',
      note:'舍不得 = không nỡ; 还是 = vẫn.',pair:'虽然……但……还是……'}
   ]},

  {n:31,zh:'半途而废',py:'bàntú\'érfèi',pos:'Thành ngữ',vn:'bỏ dở nửa chừng',hv:'bán đồ nhi phế',em:'🚧',lesson:1,
   explain:['Đi được nửa đường thì dừng lại (半途 = nửa đường, 废 = bỏ) → làm việc gì không đến nơi đến chốn, giữa chừng thì bỏ.','Thường dùng trong lời khuyên, phủ định: 不能 / 绝不能 / 千万别 + 半途而废. Trái nghĩa: 坚持到底, 锲而不舍 (bài 15).'],
   usage:'不能 / 绝不能 / 千万别 + 半途而废; 做事 + 半途而废; 学了一半就半途而废了.',
   collo:['绝不能半途而废','做事半途而废','千万别半途而废','半途而废的人'],
   ex_zh:'下狠心咬牙坚持，绝不能半途而废。',ex_py:'Xià hěnxīn yǎoyá jiānchí, jué bù néng bàntú\'érfèi.',ex_vn:'Quyết tâm nghiến răng kiên trì, tuyệt đối không được bỏ dở nửa chừng.',
   exList:[
     {zh:'无论做什么事情都不能半途而废。',py:'Wúlùn zuò shénme shìqing dōu bù néng bàntú\'érfèi.',vn:'Dù làm việc gì cũng không được bỏ dở nửa chừng.'},
     {zh:'他学过钢琴、画画儿、游泳，可每样都是半途而废。',py:'Tā xuéguo gāngqín, huà huàr, yóuyǒng, kě měi yàng dōu shì bàntú\'érfèi.',vn:'Cậu ấy từng học piano, vẽ, bơi lội, nhưng môn nào cũng bỏ giữa chừng.'},
     {zh:'论文已经写了一大半了，现在放弃就等于半途而废。',py:'Lùnwén yǐjīng xiěle yí dà bàn le, xiànzài fàngqì jiù děngyú bàntú\'érfèi.',vn:'Luận văn đã viết được quá nửa rồi, giờ bỏ cuộc thì chẳng khác gì bỏ dở nửa chừng.'}
   ],
   colloFull:[
     {zh:'绝不能半途而废',py:'jué bù néng bàntú\'érfèi',vn:'tuyệt đối không được bỏ dở'},
     {zh:'做事半途而废',py:'zuò shì bàntú\'érfèi',vn:'làm việc bỏ dở nửa chừng'},
     {zh:'千万别半途而废',py:'qiānwàn bié bàntú\'érfèi',vn:'nhất định đừng bỏ dở'},
     {zh:'半途而废的人',py:'bàntú\'érfèi de rén',vn:'người hay bỏ dở'},
     {zh:'不能半途而废',py:'bù néng bàntú\'érfèi',vn:'không được bỏ dở'}
   ],
   patterns:[
     {s:'无论……，都不能半途而废',m:'Dù …, cũng không được bỏ dở nửa chừng'},
     {s:'现在放弃就等于半途而废',m:'Bây giờ bỏ cuộc thì chẳng khác gì bỏ dở nửa chừng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã quyết định chạy marathon thì phải kiên trì luyện tập, nhất định đừng bỏ dở nửa chừng.',answer:'既然决定跑马拉松，就要坚持训练，千万别半途而废。',answerPy:'Jìrán juédìng pǎo mǎlāsōng, jiù yào jiānchí xùnliàn, qiānwàn bié bàntú\'érfèi.',
      note:'既然……就……: đã … thì ….',pair:'既然……就……'},
     {promptLang:'vi',prompt:'Cậu ấy làm việc gì cũng bỏ giữa chừng, nên đến giờ vẫn chẳng làm nên chuyện gì.',answer:'他做什么事都半途而废，所以到现在还一事无成。',answerPy:'Tā zuò shénme shì dōu bàntú\'érfèi, suǒyǐ dào xiànzài hái yíshì-wúchéng.',
      note:'什么……都……; 一事无成 = chẳng làm nên trò trống gì.',pair:'什么……都……'}
   ]},

  {n:32,zh:'虐待',py:'nüèdài',pos:'Động từ',vn:'ngược đãi, hành hạ',hv:'ngược đãi',em:'⛓️',lesson:1,
   explain:['Đối xử tàn nhẫn, độc ác bằng thủ đoạn tàn bạo (本指“用残暴狠毒的手段对待”): 虐待动物, 虐待老人 — việc làm bị pháp luật nghiêm cấm.','Trong bài khoá, 记者 nói 我就不想虐待自己 là dùng phép 大词小用 (từ "lớn" dùng cho việc nhỏ): chỉ là không kiên trì tập luyện nổi — tạo sắc thái hài hước.'],
   usage:'虐待 + 动物 / 儿童 / 老人; 受到虐待; 禁止虐待; 虐待自己 (nói đùa).',
   collo:['虐待自己','虐待动物','受到虐待','禁止虐待'],
   ex_zh:'王老师，您怎么好像在说我呢？我就不想虐待自己，所以很难坚持。',ex_py:'Wáng lǎoshī, nín zěnme hǎoxiàng zài shuō wǒ ne? Wǒ jiù bù xiǎng nüèdài zìjǐ, suǒyǐ hěn nán jiānchí.',ex_vn:'Thầy Vương, sao thầy như đang nói tôi vậy? Tôi chính là không muốn "hành hạ" bản thân nên rất khó kiên trì.',
   exList:[
     {zh:'虐待动物是一种不道德的行为，在很多国家还是违法的。',py:'Nüèdài dòngwù shì yì zhǒng bú dàodé de xíngwéi, zài hěn duō guójiā hái shì wéifǎ de.',vn:'Ngược đãi động vật là hành vi vô đạo đức, ở nhiều nước còn là phạm pháp.'},
     {zh:'这只小狗以前受到过主人的虐待，所以一见生人就害怕。',py:'Zhè zhī xiǎo gǒu yǐqián shòudàoguo zhǔrén de nüèdài, suǒyǐ yí jiàn shēngrén jiù hàipà.',vn:'Chú chó nhỏ này trước đây từng bị chủ ngược đãi, nên hễ thấy người lạ là sợ.'},
     {zh:'天天只吃青菜减肥，你这简直是在虐待自己的胃。',py:'Tiāntiān zhǐ chī qīngcài jiǎnféi, nǐ zhè jiǎnzhí shì zài nüèdài zìjǐ de wèi.',vn:'Ngày nào cũng chỉ ăn rau để giảm cân, cậu đúng là đang "hành hạ" dạ dày của mình.'}
   ],
   colloFull:[
     {zh:'虐待自己',py:'nüèdài zìjǐ',vn:'hành hạ bản thân'},
     {zh:'虐待动物',py:'nüèdài dòngwù',vn:'ngược đãi động vật'},
     {zh:'受到虐待',py:'shòudào nüèdài',vn:'bị ngược đãi'},
     {zh:'禁止虐待',py:'jìnzhǐ nüèdài',vn:'cấm ngược đãi'},
     {zh:'虐待儿童',py:'nüèdài értóng',vn:'ngược đãi trẻ em'}
   ],
   patterns:[
     {s:'受到（过）+ 某人的虐待',m:'(Từng) bị ai ngược đãi'},
     {s:'你这简直是在虐待 + ……',m:'Cậu thế này đúng là đang hành hạ … (nói đùa, 大词小用)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Pháp luật quy định, bất kỳ ai cũng không được ngược đãi người già và trẻ em.',answer:'法律规定，任何人都不得虐待老人和儿童。',answerPy:'Fǎlǜ guīdìng, rènhé rén dōu bùdé nüèdài lǎorén hé értóng.',
      note:'任何……都…… = bất kỳ … đều …; 不得 = không được (văn viết).',pair:'任何……都……'},
     {promptLang:'vi',prompt:'Tập thể dục một chút thì sao lại là hành hạ bản thân được chứ?',answer:'锻炼一下身体，怎么会是虐待自己呢？',answerPy:'Duànliàn yíxià shēntǐ, zěnme huì shì nüèdài zìjǐ ne?',
      note:'怎么会……呢？ = sao lại … được chứ (phản vấn).',pair:'怎么会……呢？'}
   ]},

  {n:33,zh:'落实',py:'luòshí',pos:'Động từ',vn:'thực hiện đầy đủ, đưa vào thực tế, thi hành',hv:'lạc thực',em:'✅',lesson:1,
   explain:['Làm cho kế hoạch, chính sách, biện pháp được thực hiện cụ thể, đến nơi đến chốn (không chỉ nằm trên giấy): 落实计划, 落实政策.','Trong bài: 有计划，有落实 = có kế hoạch và có thực hiện. Hay đi với 落实到……, 得到落实, 抓落实. Văn phong công việc, báo chí.'],
   usage:'落实 + 计划 / 政策 / 措施 / 责任; 落实到 + 每个人 / 实处; 得到落实; 有计划，有落实.',
   collo:['有计划，有落实','落实计划','落实到每个人','得到落实'],
   ex_zh:'你以后联系我，我带你锻炼。咱们有计划，有落实。',ex_py:'Nǐ yǐhòu liánxì wǒ, wǒ dài nǐ duànliàn. Zánmen yǒu jìhuà, yǒu luòshí.',ex_vn:'Sau này anh liên hệ với tôi, tôi dẫn anh tập. Chúng ta có kế hoạch, có thực hiện.',
   exList:[
     {zh:'计划制订得再好，不落实也是一句空话。',py:'Jìhuà zhìdìng de zài hǎo, bú luòshí yě shì yí jù kōnghuà.',vn:'Kế hoạch lập ra dù hay đến đâu, không thực hiện thì cũng chỉ là lời nói suông.'},
     {zh:'学校要把安全责任落实到每一个老师身上。',py:'Xuéxiào yào bǎ ānquán zérèn luòshí dào měi yí ge lǎoshī shēnshang.',vn:'Nhà trường phải giao trách nhiệm an toàn cụ thể đến từng giáo viên.'},
     {zh:'新政策出台半年了，还没有得到真正的落实。',py:'Xīn zhèngcè chūtái bàn nián le, hái méiyǒu dédào zhēnzhèng de luòshí.',vn:'Chính sách mới ban hành nửa năm rồi mà vẫn chưa được thực hiện thật sự.'}
   ],
   colloFull:[
     {zh:'有计划，有落实',py:'yǒu jìhuà, yǒu luòshí',vn:'có kế hoạch, có thực hiện'},
     {zh:'落实计划',py:'luòshí jìhuà',vn:'thực hiện kế hoạch'},
     {zh:'落实到每个人',py:'luòshí dào měi ge rén',vn:'giao cụ thể đến từng người'},
     {zh:'得到落实',py:'dédào luòshí',vn:'được thực hiện'},
     {zh:'落实政策',py:'luòshí zhèngcè',vn:'thực thi chính sách'}
   ],
   patterns:[
     {s:'把 + 责任 / 任务 + 落实到 + ……',m:'Giao trách nhiệm / nhiệm vụ cụ thể đến …'},
     {s:'……再好，不落实也是一句空话',m:'… hay đến đâu, không thực hiện cũng chỉ là lời suông'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch ôn thi của cậu rất chi tiết, vấn đề là có thực hiện được hay không.',answer:'你的复习计划很详细，问题是能不能落实。',answerPy:'Nǐ de fùxí jìhuà hěn xiángxì, wèntí shì néng bu néng luòshí.',
      note:'问题是 + 能不能 V = vấn đề là có … được không.',pair:'问题是……'},
     {promptLang:'vi',prompt:'Chỉ khi mỗi nhiệm vụ được giao cụ thể đến từng người, công việc mới tiến triển thuận lợi.',answer:'只有把每项任务都落实到人，工作才能顺利进行。',answerPy:'Zhǐyǒu bǎ měi xiàng rènwu dōu luòshí dào rén, gōngzuò cái néng shùnlì jìnxíng.',
      note:'只有……才……; 把……落实到人.',pair:'只有……才……'}
   ]},

  {n:34,zh:'归根到底',py:'guīgēn-dàodǐ',pos:'Thành ngữ (xen ngữ)',vn:'suy cho cùng, xét đến cùng',hv:'quy căn đáo để',em:'🌳',lesson:1,
   explain:['Xen ngữ (插入语), biểu thị "xét từ gốc rễ, về bản chất mà nói" — dùng để nêu kết luận căn bản. Cũng nói 归根结底 (điểm ngữ pháp 2).','Vị trí linh hoạt: đầu câu, sau chủ ngữ, trước vị ngữ: 运动健身归根到底是自己的事. Cách nói gần nghĩa: 说到底, 从根本上说, 一句话, 说白了, 说穿了.'],
   usage:'（S +）归根到底 + 是……; 归根到底，……; 归根结底; 说到底 / 说白了 / 说穿了.',
   collo:['归根到底是自己的事','归根结底','归根到底，……','说到底'],
   ex_zh:'运动健身归根到底是自己的事，胡乱对付其实是在骗自己。',ex_py:'Yùndòng jiànshēn guīgēn-dàodǐ shì zìjǐ de shì, húluàn duìfu qíshí shì zài piàn zìjǐ.',ex_vn:'Vận động rèn luyện sức khoẻ suy cho cùng là việc của bản thân, làm qua loa chiếu lệ thật ra là đang tự lừa mình.',
   exList:[
     {zh:'学习成绩不好，归根到底是因为方法不对。',py:'Xuéxí chéngjì bù hǎo, guīgēn-dàodǐ shì yīnwèi fāngfǎ bú duì.',vn:'Thành tích học tập không tốt, suy cho cùng là vì phương pháp không đúng.'},
     {zh:'世界是你们的，也是我们的，但归根结底是你们的。',py:'Shìjiè shì nǐmen de, yě shì wǒmen de, dàn guīgēn-jiédǐ shì nǐmen de.',vn:'Thế giới là của các bạn, cũng là của chúng tôi, nhưng suy cho cùng là của các bạn.'},
     {zh:'父母可以给建议，但选什么专业，归根到底还得你自己决定。',py:'Fùmǔ kěyǐ gěi jiànyì, dàn xuǎn shénme zhuānyè, guīgēn-dàodǐ hái děi nǐ zìjǐ juédìng.',vn:'Bố mẹ có thể góp ý, nhưng chọn ngành gì, xét cho cùng vẫn phải do con tự quyết định.'}
   ],
   colloFull:[
     {zh:'归根到底是自己的事',py:'guīgēn-dàodǐ shì zìjǐ de shì',vn:'suy cho cùng là việc của bản thân'},
     {zh:'归根结底',py:'guīgēn-jiédǐ',vn:'suy cho cùng (cách nói khác)'},
     {zh:'归根到底，……',py:'guīgēn-dàodǐ, ……',vn:'xét đến cùng thì …'},
     {zh:'说到底',py:'shuō dào dǐ',vn:'nói cho cùng'},
     {zh:'归根到底是因为……',py:'guīgēn-dàodǐ shì yīnwèi……',vn:'suy cho cùng là vì …'}
   ],
   patterns:[
     {s:'S + 归根到底 + 是……',m:'S suy cho cùng là …'},
     {s:'……，但归根结底 + ……',m:'…, nhưng suy cho cùng thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy cô chỉ có thể dẫn đường, học hay không suy cho cùng vẫn là việc của chính học sinh.',answer:'老师只能引导，学不学归根到底还是学生自己的事。',answerPy:'Lǎoshī zhǐ néng yǐndǎo, xué bu xué guīgēn-dàodǐ háishi xuésheng zìjǐ de shì.',
      note:'V不V làm chủ ngữ; 归根到底 đứng trước vị ngữ.',pair:'V不V + 归根到底……'},
     {promptLang:'vi',prompt:'Xét cho cùng, sức khoẻ quan trọng hơn tiền bạc.',answer:'归根结底，健康比金钱更重要。',answerPy:'Guīgēn-jiédǐ, jiànkāng bǐ jīnqián gèng zhòngyào.',
      note:'归根结底 đầu câu + dấu phẩy; A比B更…….',pair:'A比B更……'}
   ]},

  {n:35,zh:'胡乱',py:'húluàn',pos:'Phó từ',vn:'qua quýt, bừa bãi, tuỳ tiện',hv:'hồ loạn',em:'🌀',lesson:1,
   explain:['Làm việc cẩu thả, không nghiêm túc, không có căn cứ hay trật tự: 胡乱对付, 胡乱写几笔, 胡乱吃两口.','Chỉ là PHÓ TỪ: chỉ đứng trước động từ, không làm vị ngữ, không bổ nghĩa cho danh từ, không có dạng lặp AABB (词语辨析 胡乱—随便).'],
   usage:'胡乱 + V（对付 / 写 / 画 / 吃 / 猜 / 花钱）; 胡乱 + V + 了 + 几下 / 两口.',
   collo:['胡乱对付','胡乱画了几笔','胡乱吃了两口','胡乱花钱'],
   ex_zh:'运动健身归根到底是自己的事，胡乱对付其实是在骗自己。',ex_py:'Yùndòng jiànshēn guīgēn-dàodǐ shì zìjǐ de shì, húluàn duìfu qíshí shì zài piàn zìjǐ.',ex_vn:'Vận động rèn luyện sức khoẻ suy cho cùng là việc của bản thân, làm qua loa chiếu lệ thật ra là đang tự lừa mình.',
   exList:[
     {zh:'他在纸上胡乱画了几笔，就说画完了。',py:'Tā zài zhǐ shang húluàn huàle jǐ bǐ, jiù shuō huàwán le.',vn:'Cậu ấy vẽ bừa mấy nét lên giấy rồi bảo là vẽ xong rồi.'},
     {zh:'早上起晚了，我胡乱吃了两口就跑去上课了。',py:'Zǎoshang qǐwǎn le, wǒ húluàn chīle liǎng kǒu jiù pǎo qù shàngkè le.',vn:'Sáng dậy muộn, tôi ăn qua loa hai miếng rồi chạy đi học.'},
     {zh:'不会的题目别胡乱猜，先把会的做完。',py:'Bú huì de tímù bié húluàn cāi, xiān bǎ huì de zuòwán.',vn:'Câu nào không biết thì đừng đoán bừa, làm xong câu biết trước đã.'}
   ],
   colloFull:[
     {zh:'胡乱对付',py:'húluàn duìfu',vn:'làm qua loa chiếu lệ'},
     {zh:'胡乱画了几笔',py:'húluàn huàle jǐ bǐ',vn:'vẽ bừa mấy nét'},
     {zh:'胡乱吃了两口',py:'húluàn chīle liǎng kǒu',vn:'ăn qua loa hai miếng'},
     {zh:'胡乱花钱',py:'húluàn huā qián',vn:'tiêu tiền bừa bãi'},
     {zh:'胡乱猜',py:'húluàn cāi',vn:'đoán bừa'}
   ],
   patterns:[
     {s:'胡乱 + V + 了 + 几笔 / 两口 + 就……',m:'Làm qua quýt vài cái rồi …'},
     {s:'别胡乱 + V',m:'Đừng làm bừa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài tập về nhà phải làm nghiêm túc, không được làm qua loa cho xong.',answer:'作业要认真做，不能胡乱对付。',answerPy:'Zuòyè yào rènzhēn zuò, bù néng húluàn duìfu.',
      note:'Tân ngữ đưa lên đầu câu làm chủ đề; 胡乱 + V.',pair:'不能胡乱 + V'},
     {promptLang:'vi',prompt:'Chưa hiểu rõ tình hình thì đừng nói bừa, kẻo gây hiểu lầm.',answer:'没弄清楚情况就别胡乱说，免得引起误解。',answerPy:'Méi nòng qīngchu qíngkuàng jiù bié húluàn shuō, miǎnde yǐnqǐ wùjiě.',
      note:'免得 (bài 14) = kẻo; 引起误解.',pair:'……，免得……'}
   ]},

  {n:36,zh:'间接',py:'jiànjiē',pos:'Tính từ',vn:'gián tiếp',hv:'gián tiếp',em:'↪️',lesson:1,
   explain:['Thông qua một khâu trung gian (người, sự việc) mới có quan hệ hoặc tác động, đối lập với 直接: 间接体现, 间接影响.','Làm trạng ngữ (间接 + V / 间接地 + V) hoặc định ngữ (间接原因, 间接经验). 间 ở đây đọc jiàn (thanh 4).'],
   usage:'间接 + 体现 / 影响 / 反映 / 了解; 间接的 + 原因 / 经验; 直接或间接.',
   collo:['间接体现','间接影响','间接原因','直接或间接'],
   ex_zh:'看来运动真不是小事，还间接体现着我们的品行呢。',ex_py:'Kànlái yùndòng zhēn bú shì xiǎoshì, hái jiànjiē tǐxiànzhe wǒmen de pǐnxíng ne.',ex_vn:'Xem ra vận động thật chẳng phải chuyện nhỏ, nó còn gián tiếp thể hiện phẩm hạnh của chúng ta nữa.',
   exList:[
     {zh:'父母的言行会直接或间接地影响孩子的性格。',py:'Fùmǔ de yánxíng huì zhíjiē huò jiànjiē de yǐngxiǎng háizi de xìnggé.',vn:'Lời nói và hành động của cha mẹ sẽ ảnh hưởng trực tiếp hoặc gián tiếp đến tính cách con cái.'},
     {zh:'我是通过朋友间接了解到这个消息的。',py:'Wǒ shì tōngguò péngyou jiànjiē liǎojiě dào zhège xiāoxi de.',vn:'Tôi biết được tin này một cách gián tiếp qua bạn bè.'},
     {zh:'书本上的知识大多是间接经验，还需要在实践中检验。',py:'Shūběn shang de zhīshi dàduō shì jiànjiē jīngyàn, hái xūyào zài shíjiàn zhōng jiǎnyàn.',vn:'Kiến thức trong sách phần lớn là kinh nghiệm gián tiếp, còn cần được kiểm nghiệm trong thực tế.'}
   ],
   colloFull:[
     {zh:'间接体现',py:'jiànjiē tǐxiàn',vn:'gián tiếp thể hiện'},
     {zh:'间接影响',py:'jiànjiē yǐngxiǎng',vn:'ảnh hưởng gián tiếp'},
     {zh:'间接原因',py:'jiànjiē yuányīn',vn:'nguyên nhân gián tiếp'},
     {zh:'直接或间接',py:'zhíjiē huò jiànjiē',vn:'trực tiếp hoặc gián tiếp'},
     {zh:'间接经验',py:'jiànjiē jīngyàn',vn:'kinh nghiệm gián tiếp'}
   ],
   patterns:[
     {s:'A + 还间接体现着 + B',m:'A còn gián tiếp thể hiện B'},
     {s:'直接或间接地 + 影响……',m:'Ảnh hưởng trực tiếp hoặc gián tiếp đến …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy chuyện này không liên quan trực tiếp đến bạn, nhưng lại ảnh hưởng gián tiếp đến bạn.',answer:'这件事虽然跟你没有直接关系，但是会间接影响到你。',answerPy:'Zhè jiàn shì suīrán gēn nǐ méiyǒu zhíjiē guānxi, dànshì huì jiànjiē yǐngxiǎng dào nǐ.',
      note:'跟……有 / 没有关系; 虽然……但是…….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cách một người đối xử với động vật cũng gián tiếp phản ánh phẩm hạnh của người đó.',answer:'一个人怎样对待动物，也间接反映了他的品行。',answerPy:'Yí ge rén zěnyàng duìdài dòngwù, yě jiànjiē fǎnyìngle tā de pǐnxíng.',
      note:'Mệnh đề 怎样…… làm chủ ngữ; 间接 + 反映.',pair:'怎样……，也……'}
   ]},


  {n:37,zh:'品行',py:'pǐnxíng',pos:'Danh từ',vn:'phẩm hạnh, hạnh kiểm',hv:'phẩm hạnh',em:'🏅',lesson:1,
   explain:['Phẩm chất đạo đức thể hiện qua cách cư xử, hành động của một người: 品行端正 (phẩm hạnh đoan chính), 品行不好.','Gần 品德 / 人品; 品行 nhấn hành vi thực tế. Trong trường học: 品行评语 (nhận xét hạnh kiểm).'],
   usage:'品行 + 端正 / 优良 / 不端; 体现 / 考察 + 品行; ……的品行.',
   collo:['体现品行','品行端正','品行不端','考察品行'],
   ex_zh:'看来运动真不是小事，还间接体现着我们的品行呢。',ex_py:'Kànlái yùndòng zhēn bú shì xiǎoshì, hái jiànjiē tǐxiànzhe wǒmen de pǐnxíng ne.',ex_vn:'Xem ra vận động thật chẳng phải chuyện nhỏ, nó còn gián tiếp thể hiện phẩm hạnh của chúng ta nữa.',
   exList:[
     {zh:'公司招人不但看能力，还要考察一个人的品行。',py:'Gōngsī zhāo rén búdàn kàn nénglì, hái yào kǎochá yí ge rén de pǐnxíng.',vn:'Công ty tuyển người không chỉ xem năng lực mà còn phải xem xét phẩm hạnh của người đó.'},
     {zh:'这个孩子学习好，品行也端正，老师们都很喜欢他。',py:'Zhège háizi xuéxí hǎo, pǐnxíng yě duānzhèng, lǎoshīmen dōu hěn xǐhuan tā.',vn:'Đứa trẻ này học giỏi, hạnh kiểm cũng đoan chính, các thầy cô đều rất quý nó.'},
     {zh:'从一些小事上，往往最能看出一个人的品行。',py:'Cóng yìxiē xiǎoshì shang, wǎngwǎng zuì néng kànchū yí ge rén de pǐnxíng.',vn:'Từ những chuyện nhỏ thường dễ nhìn ra phẩm hạnh của một người nhất.'}
   ],
   colloFull:[
     {zh:'体现品行',py:'tǐxiàn pǐnxíng',vn:'thể hiện phẩm hạnh'},
     {zh:'品行端正',py:'pǐnxíng duānzhèng',vn:'phẩm hạnh đoan chính'},
     {zh:'品行不端',py:'pǐnxíng bù duān',vn:'phẩm hạnh không đứng đắn'},
     {zh:'考察品行',py:'kǎochá pǐnxíng',vn:'xem xét phẩm hạnh'},
     {zh:'品行优良',py:'pǐnxíng yōuliáng',vn:'hạnh kiểm tốt'}
   ],
   patterns:[
     {s:'从 + 小事 + 上 + 看出 + 某人的品行',m:'Nhìn ra phẩm hạnh của ai từ chuyện nhỏ'},
     {s:'不但看能力，还要看品行',m:'Không chỉ xem năng lực mà còn xem phẩm hạnh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một người dù có tài đến đâu, nếu phẩm hạnh không tốt thì cũng không được mọi người tôn trọng.',answer:'一个人不管多有才能，如果品行不好，也得不到大家的尊重。',answerPy:'Yí ge rén bùguǎn duō yǒu cáinéng, rúguǒ pǐnxíng bù hǎo, yě dé bu dào dàjiā de zūnzhòng.',
      note:'不管多 + Adj = dù … đến đâu; 得不到 = không nhận được.',pair:'不管……也……'},
     {promptLang:'vi',prompt:'Bố mẹ coi trọng hạnh kiểm của con hơn thành tích.',answer:'父母比起成绩来更看重孩子的品行。',answerPy:'Fùmǔ bǐqǐ chéngjì lái gèng kànzhòng háizi de pǐnxíng.',
      note:'比起……来，更…… = so với … thì càng ….',pair:'比起……来'}
   ]},

  {n:38,zh:'紫外线',py:'zǐwàixiàn',pos:'Danh từ',vn:'tia tử ngoại, tia cực tím (UV)',hv:'tử ngoại tuyến',em:'☀️',lesson:1,
   explain:['Loại tia không nhìn thấy nằm ngoài vùng ánh sáng tím của quang phổ, có nhiều trong ánh nắng mặt trời.','Lượng vừa phải có tác dụng 消毒 (khử trùng), giúp cơ thể hấp thụ canxi; quá nhiều thì hại da, hại mắt: 防紫外线, 紫外线很强.'],
   usage:'紫外线 + 强 / 弱; 防 + 紫外线; 紫外线 + 的作用; 紫外线灯 (đèn UV).',
   collo:['紫外线很强','防紫外线','紫外线的消毒作用','紫外线灯'],
   ex_zh:'冬天阳光中的紫外线对人体有消毒作用，还能促进对钙的吸收。',ex_py:'Dōngtiān yángguāng zhōng de zǐwàixiàn duì réntǐ yǒu xiāo dú zuòyòng, hái néng cùjìn duì gài de xīshōu.',ex_vn:'Tia tử ngoại trong ánh nắng mùa đông có tác dụng khử trùng cho cơ thể, còn thúc đẩy việc hấp thụ canxi.',
   exList:[
     {zh:'中午紫外线最强，出门最好戴帽子、涂防晒霜。',py:'Zhōngwǔ zǐwàixiàn zuì qiáng, chūmén zuìhǎo dài màozi, tú fángshàishuāng.',vn:'Buổi trưa tia cực tím mạnh nhất, ra ngoài tốt nhất nên đội mũ, bôi kem chống nắng.'},
     {zh:'医院常用紫外线灯给病房消毒。',py:'Yīyuàn cháng yòng zǐwàixiàndēng gěi bìngfáng xiāo dú.',vn:'Bệnh viện thường dùng đèn UV để khử trùng phòng bệnh.'},
     {zh:'这副眼镜能防紫外线，在海边戴正合适。',py:'Zhè fù yǎnjìng néng fáng zǐwàixiàn, zài hǎibiān dài zhèng héshì.',vn:'Cặp kính này chống được tia UV, đeo ở bãi biển là vừa hợp.'}
   ],
   colloFull:[
     {zh:'紫外线很强',py:'zǐwàixiàn hěn qiáng',vn:'tia cực tím rất mạnh'},
     {zh:'防紫外线',py:'fáng zǐwàixiàn',vn:'chống tia UV'},
     {zh:'紫外线的消毒作用',py:'zǐwàixiàn de xiāo dú zuòyòng',vn:'tác dụng khử trùng của tia UV'},
     {zh:'紫外线灯',py:'zǐwàixiàndēng',vn:'đèn UV'},
     {zh:'阳光中的紫外线',py:'yángguāng zhōng de zǐwàixiàn',vn:'tia tử ngoại trong ánh nắng'}
   ],
   patterns:[
     {s:'紫外线 + 对 + N + 有……作用',m:'Tia tử ngoại có tác dụng … đối với N'},
     {s:'……的时候紫外线最强，……',m:'Lúc … tia cực tím mạnh nhất, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy tia cực tím có thể khử trùng, nhưng phơi nắng quá lâu cũng có hại cho da.',answer:'紫外线虽然能消毒，但是晒太阳太久对皮肤也有害。',answerPy:'Zǐwàixiàn suīrán néng xiāo dú, dànshì shài tàiyáng tài jiǔ duì pífū yě yǒuhài.',
      note:'对……有害 = có hại cho ….',pair:'对……有害'},
     {promptLang:'vi',prompt:'Mùa hè ra ngoài nhất định phải chú ý chống tia cực tím.',answer:'夏天出门一定要注意防紫外线。',answerPy:'Xiàtiān chūmén yídìng yào zhùyì fáng zǐwàixiàn.',
      note:'注意 + V = chú ý làm gì.',pair:'注意 + V'}
   ]},

  {n:39,zh:'消毒',py:'xiāo dú',pos:'Động từ (li hợp)',vn:'khử trùng, tiêu độc',hv:'tiêu độc',em:'🧴',lesson:1,
   explain:['Dùng hoá chất, nhiệt, tia… để diệt vi khuẩn gây bệnh: 给餐具消毒, 消毒作用. Là động từ li hợp: 消过毒, 消一下毒.','Đi với 给 / 对 + N + 消毒; 消毒液 (dung dịch sát khuẩn), 高温消毒. Tiếng Việt quen nói "khử trùng", "sát khuẩn".'],
   usage:'给 / 对 + N + 消毒; 消毒 + 作用 / 液 / 柜; 高温消毒; 消过毒.',
   collo:['消毒作用','给餐具消毒','消毒液','高温消毒'],
   ex_zh:'冬天阳光中的紫外线对人体有消毒作用。',ex_py:'Dōngtiān yángguāng zhōng de zǐwàixiàn duì réntǐ yǒu xiāo dú zuòyòng.',ex_vn:'Tia tử ngoại trong ánh nắng mùa đông có tác dụng khử trùng cho cơ thể.',
   exList:[
     {zh:'饭店的碗筷每次用完都要高温消毒。',py:'Fàndiàn de wǎnkuài měi cì yòngwán dōu yào gāowēn xiāo dú.',vn:'Bát đũa của nhà hàng mỗi lần dùng xong đều phải khử trùng ở nhiệt độ cao.'},
     {zh:'伤口先用消毒液清洗一下，再贴上创可贴。',py:'Shāngkǒu xiān yòng xiāodúyè qīngxǐ yíxià, zài tiēshang chuàngkětiē.',vn:'Vết thương trước hết rửa bằng dung dịch sát khuẩn, rồi mới dán băng cá nhân.'},
     {zh:'被子拿到太阳底下晒一晒，也能起到消毒的作用。',py:'Bèizi nádào tàiyáng dǐxia shài yi shài, yě néng qǐdào xiāo dú de zuòyòng.',vn:'Mang chăn ra phơi nắng một chút cũng có tác dụng khử trùng.'}
   ],
   colloFull:[
     {zh:'消毒作用',py:'xiāo dú zuòyòng',vn:'tác dụng khử trùng'},
     {zh:'给餐具消毒',py:'gěi cānjù xiāo dú',vn:'khử trùng bát đĩa'},
     {zh:'消毒液',py:'xiāodúyè',vn:'dung dịch sát khuẩn'},
     {zh:'高温消毒',py:'gāowēn xiāo dú',vn:'khử trùng nhiệt độ cao'},
     {zh:'消过毒',py:'xiāoguo dú',vn:'đã khử trùng'}
   ],
   patterns:[
     {s:'给 / 对 + N + 消毒',m:'Khử trùng cho N'},
     {s:'起到 + 消毒的作用',m:'Có tác dụng khử trùng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những dụng cụ này đã khử trùng rồi, bạn có thể yên tâm sử dụng.',answer:'这些工具都已经消过毒了，你可以放心使用。',answerPy:'Zhèxiē gōngjù dōu yǐjīng xiāoguo dú le, nǐ kěyǐ fàngxīn shǐyòng.',
      note:'Li hợp: 消 + 过 + 毒.',pair:'V + 过 + O (li hợp)'},
     {promptLang:'vi',prompt:'Để phòng bệnh, mỗi ngày trường học đều khử trùng các lớp học một lần.',answer:'为了预防疾病，学校每天都给教室消一次毒。',answerPy:'Wèile yùfáng jíbìng, xuéxiào měi tiān dōu gěi jiàoshì xiāo yí cì dú.',
      note:'Động lượng từ chen giữa: 消一次毒; 疾病 (bài 12).',pair:'给……消毒'}
   ]},

  {n:40,zh:'钙',py:'gài',pos:'Danh từ',vn:'canxi (calcium)',hv:'cái',em:'🦴',lesson:1,
   explain:['Nguyên tố hoá học (Ca), chất khoáng quan trọng tạo nên xương và răng.','Hay đi với 补钙 (bổ sung canxi), 缺钙 (thiếu canxi), 吸收钙 / 对钙的吸收, 钙片 (viên canxi). Ánh nắng (紫外线) giúp cơ thể hấp thụ canxi.'],
   usage:'补 / 缺 + 钙; 对钙的吸收; 钙片; 含钙; 钙质.',
   collo:['补钙','缺钙','对钙的吸收','钙片'],
   ex_zh:'冬天阳光中的紫外线还能促进对钙的吸收。',ex_py:'Dōngtiān yángguāng zhōng de zǐwàixiàn hái néng cùjìn duì gài de xīshōu.',ex_vn:'Tia tử ngoại trong ánh nắng mùa đông còn thúc đẩy việc hấp thụ canxi.',
   exList:[
     {zh:'最近的一次体检结果显示，我有点儿缺钙。',py:'Zuìjìn de yí cì tǐjiǎn jiéguǒ xiǎnshì, wǒ yǒudiǎnr quē gài.',vn:'Kết quả lần khám sức khoẻ gần nhất cho thấy tôi hơi thiếu canxi.'},
     {zh:'牛奶和豆腐里含有丰富的钙，老人应该多吃。',py:'Niúnǎi hé dòufu li hányǒu fēngfù de gài, lǎorén yīnggāi duō chī.',vn:'Sữa và đậu phụ chứa nhiều canxi, người già nên ăn nhiều.'},
     {zh:'补钙也不能急于求成，吃太多钙片反而对身体不好。',py:'Bǔ gài yě bù néng jíyú qiú chéng, chī tài duō gàipiàn fǎn\'ér duì shēntǐ bù hǎo.',vn:'Bổ sung canxi cũng không được nóng vội, uống quá nhiều viên canxi ngược lại không tốt cho cơ thể.'}
   ],
   colloFull:[
     {zh:'补钙',py:'bǔ gài',vn:'bổ sung canxi'},
     {zh:'缺钙',py:'quē gài',vn:'thiếu canxi'},
     {zh:'对钙的吸收',py:'duì gài de xīshōu',vn:'việc hấp thụ canxi'},
     {zh:'钙片',py:'gàipiàn',vn:'viên canxi'},
     {zh:'含有丰富的钙',py:'hányǒu fēngfù de gài',vn:'giàu canxi'}
   ],
   patterns:[
     {s:'促进 + 对钙的吸收',m:'Thúc đẩy hấp thụ canxi'},
     {s:'N + 里含有丰富的钙',m:'Trong N chứa nhiều canxi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trẻ đang tuổi lớn nếu thiếu canxi thì sẽ ảnh hưởng đến chiều cao.',answer:'正在长身体的孩子如果缺钙，就会影响身高。',answerPy:'Zhèngzài zhǎng shēntǐ de háizi rúguǒ quē gài, jiù huì yǐngxiǎng shēngāo.',
      note:'长身体 (zhǎng) = đang lớn; 如果……就…….',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Bác sĩ dặn bà nội mỗi ngày phơi nắng nhiều một chút để giúp hấp thụ canxi.',answer:'医生嘱咐奶奶每天多晒晒太阳，帮助钙的吸收。',answerPy:'Yīshēng zhǔfù nǎinai měi tiān duō shàishai tàiyáng, bāngzhù gài de xīshōu.',
      note:'嘱咐 (bài 25) = dặn dò; động từ lặp 晒晒.',pair:'嘱咐 + 人 + V'}
   ]},

  {n:41,zh:'二氧化碳',py:'èryǎnghuàtàn',pos:'Danh từ',vn:'khí cacbonic, CO₂',hv:'nhị dưỡng hoá thán',em:'🌫️',lesson:1,
   explain:['Khí không màu, không mùi (CO₂), sinh ra khi con người thở ra, khi đốt nhiên liệu; là khí gây hiệu ứng nhà kính chính.','Cấu tạo: 二 (hai) + 氧 (ôxy) + 化 (hoá) + 碳 (cacbon). Hay đi với 二氧化碳浓度, 排放二氧化碳, 吸收二氧化碳.'],
   usage:'二氧化碳 + 浓度 / 排放; 排放 / 吸收 + 二氧化碳; 减少二氧化碳排放.',
   collo:['二氧化碳浓度','排放二氧化碳','吸收二氧化碳','减少二氧化碳排放'],
   ex_zh:'冬天空气中二氧化碳浓度比夏天低，所以冬天运动对身体更为有利。',ex_py:'Dōngtiān kōngqì zhōng èryǎnghuàtàn nóngdù bǐ xiàtiān dī, suǒyǐ dōngtiān yùndòng duì shēntǐ gèng wéi yǒulì.',ex_vn:'Mùa đông nồng độ khí CO₂ trong không khí thấp hơn mùa hè, vì thế vận động vào mùa đông càng có lợi cho cơ thể.',
   exList:[
     {zh:'树木能吸收二氧化碳，放出氧气。',py:'Shùmù néng xīshōu èryǎnghuàtàn, fàngchū yǎngqì.',vn:'Cây cối có thể hấp thụ CO₂ và thải ra khí ôxy.'},
     {zh:'为了减少二氧化碳排放，很多城市鼓励市民骑自行车出行。',py:'Wèile jiǎnshǎo èryǎnghuàtàn páifàng, hěn duō chéngshì gǔlì shìmín qí zìxíngchē chūxíng.',vn:'Để giảm phát thải CO₂, nhiều thành phố khuyến khích người dân đi lại bằng xe đạp.'},
     {zh:'教室里人多，二氧化碳浓度高，要经常开窗通风。',py:'Jiàoshì li rén duō, èryǎnghuàtàn nóngdù gāo, yào jīngcháng kāi chuāng tōngfēng.',vn:'Trong lớp đông người, nồng độ CO₂ cao, phải thường xuyên mở cửa sổ cho thoáng khí.'}
   ],
   colloFull:[
     {zh:'二氧化碳浓度',py:'èryǎnghuàtàn nóngdù',vn:'nồng độ CO₂'},
     {zh:'排放二氧化碳',py:'páifàng èryǎnghuàtàn',vn:'thải khí CO₂'},
     {zh:'吸收二氧化碳',py:'xīshōu èryǎnghuàtàn',vn:'hấp thụ CO₂'},
     {zh:'减少二氧化碳排放',py:'jiǎnshǎo èryǎnghuàtàn páifàng',vn:'giảm phát thải CO₂'},
     {zh:'呼出二氧化碳',py:'hūchū èryǎnghuàtàn',vn:'thở ra CO₂'}
   ],
   patterns:[
     {s:'A 的二氧化碳浓度 + 比 B + 低 / 高',m:'Nồng độ CO₂ của A thấp / cao hơn B'},
     {s:'为了减少二氧化碳排放，……',m:'Để giảm phát thải CO₂, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cây xanh ban ngày hấp thụ CO₂, vì thế trồng nhiều cây có thể cải thiện không khí.',answer:'绿色植物白天吸收二氧化碳，所以多种树可以改善空气。',answerPy:'Lǜsè zhíwù báitiān xīshōu èryǎnghuàtàn, suǒyǐ duō zhòng shù kěyǐ gǎishàn kōngqì.',
      note:'种 (zhòng) = trồng; 所以 nêu kết quả.',pair:'……，所以……'},
     {promptLang:'vi',prompt:'Nếu phòng đóng kín cửa quá lâu, nồng độ CO₂ sẽ ngày càng cao.',answer:'如果房间门窗关得太久，二氧化碳浓度就会越来越高。',answerPy:'Rúguǒ fángjiān ménchuāng guān de tài jiǔ, èryǎnghuàtàn nóngdù jiù huì yuè lái yuè gāo.',
      note:'关得太久 (bổ ngữ trạng thái); 越来越 + Adj.',pair:'如果……就……'}
   ]},

  {n:42,zh:'舒畅',py:'shūchàng',pos:'Tính từ',vn:'thư thái, khoan khoái, dễ chịu',hv:'thư sướng',em:'😌',lesson:1,
   explain:['(Tâm trạng, cơ thể) thoải mái, thông suốt, không bị dồn nén: 心情舒畅, 浑身舒畅.','Gần 舒服 nhưng 舒畅 thiên về tinh thần, cảm giác "thông thoáng, nhẹ nhõm" sau khi được giải toả; hay nói 使人心情舒畅.'],
   usage:'心情 + 舒畅; 使 / 让 + 人 + 心情舒畅; 浑身 / 全身 + 舒畅; 感到舒畅.',
   collo:['心情舒畅','使人心情舒畅','浑身舒畅','感到舒畅'],
   ex_zh:'运动还可以使人心情舒畅。',ex_py:'Yùndòng hái kěyǐ shǐ rén xīnqíng shūchàng.',ex_vn:'Vận động còn có thể giúp tâm trạng con người thư thái.',
   exList:[
     {zh:'出了一身汗以后，我觉得浑身舒畅，烦恼也都忘了。',py:'Chūle yì shēn hàn yǐhòu, wǒ juéde húnshēn shūchàng, fánnǎo yě dōu wàng le.',vn:'Sau khi đổ một trận mồ hôi, tôi thấy toàn thân khoan khoái, phiền muộn cũng quên hết.'},
     {zh:'把心里话都说出来以后，她感到心情舒畅多了。',py:'Bǎ xīnlǐhuà dōu shuō chūlái yǐhòu, tā gǎndào xīnqíng shūchàng duō le.',vn:'Sau khi nói hết những điều trong lòng, cô ấy thấy nhẹ nhõm hơn nhiều.'},
     {zh:'住在这样安宁的小镇，每天都过得很舒畅。',py:'Zhù zài zhèyàng ānníng de xiǎozhèn, měi tiān dōu guò de hěn shūchàng.',vn:'Sống ở một thị trấn yên bình như vậy, ngày nào cũng thật thư thái.'}
   ],
   colloFull:[
     {zh:'心情舒畅',py:'xīnqíng shūchàng',vn:'tâm trạng thư thái'},
     {zh:'使人心情舒畅',py:'shǐ rén xīnqíng shūchàng',vn:'khiến lòng người khoan khoái'},
     {zh:'浑身舒畅',py:'húnshēn shūchàng',vn:'toàn thân khoan khoái'},
     {zh:'感到舒畅',py:'gǎndào shūchàng',vn:'cảm thấy dễ chịu'},
     {zh:'过得很舒畅',py:'guò de hěn shūchàng',vn:'sống rất thư thái'}
   ],
   patterns:[
     {s:'A + 可以使人 + 心情舒畅',m:'A có thể khiến tâm trạng thư thái'},
     {s:'……以后，觉得浑身舒畅',m:'Sau khi …, thấy toàn thân khoan khoái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi khi áp lực học tập lớn, tôi lại đi chạy bộ, chạy xong tâm trạng thư thái hẳn.',answer:'每当学习压力大的时候，我就去跑步，跑完心情舒畅多了。',answerPy:'Měi dāng xuéxí yālì dà de shíhou, wǒ jiù qù pǎobù, pǎowán xīnqíng shūchàng duō le.',
      note:'每当……的时候，就…… = mỗi khi … thì ….',pair:'每当……就……'},
     {promptLang:'vi',prompt:'Bầu không khí ở văn phòng khiến mọi người làm việc rất thoải mái.',answer:'办公室的气氛让大家工作得很舒畅。',answerPy:'Bàngōngshì de qìfēn ràng dàjiā gōngzuò de hěn shūchàng.',
      note:'让 + người + V + 得 + bổ ngữ.',pair:'让……V得……'}
   ]},

  {n:43,zh:'宣扬',py:'xuānyáng',pos:'Động từ',vn:'quảng bá, tuyên truyền rộng rãi, phô trương',hv:'tuyên dương',em:'📢',lesson:1,
   explain:['Tuyên truyền, nói to cho nhiều người biết: 宣扬能够促进健康 (quảng cáo là có thể tăng cường sức khoẻ). Thường mang sắc thái trung tính hoặc chê (khuếch trương, phô trương): 大肆宣扬, 到处宣扬.','Chú ý: tiếng Việt "tuyên dương" = khen ngợi công khai (表扬 / 表彰). 宣扬 không có nghĩa khen thưởng.'],
   usage:'宣扬 + 观点 / 好处 / 作用; 到处 / 大肆 + 宣扬; 宣扬 + 能 / 可以 + V.',
   collo:['宣扬能够促进健康','到处宣扬','大肆宣扬','宣扬……的好处'],
   ex_zh:'许多保健食品都宣扬能够促进健康，其实运动才是维护健康最好的方法。',ex_py:'Xǔduō bǎojiàn shípǐn dōu xuānyáng nénggòu cùjìn jiànkāng, qíshí yùndòng cái shì wéihù jiànkāng zuì hǎo de fāngfǎ.',ex_vn:'Nhiều thực phẩm chức năng đều quảng cáo là có thể tăng cường sức khoẻ, thật ra vận động mới là cách tốt nhất để giữ gìn sức khoẻ.',
   exList:[
     {zh:'这种药到处宣扬“包治百病”，一听就是骗人的。',py:'Zhè zhǒng yào dàochù xuānyáng “bāo zhì bǎi bìng”, yì tīng jiù shì piàn rén de.',vn:'Loại thuốc này quảng cáo khắp nơi là "chữa bách bệnh", nghe là biết lừa người.'},
     {zh:'他帮了别人的忙，从来不到处宣扬。',py:'Tā bāngle biérén de máng, cónglái bú dàochù xuānyáng.',vn:'Anh ấy giúp người khác xong chưa bao giờ đi khoe khắp nơi.'},
     {zh:'这部电影宣扬了勇敢和善良，很适合孩子看。',py:'Zhè bù diànyǐng xuānyángle yǒnggǎn hé shànliáng, hěn shìhé háizi kàn.',vn:'Bộ phim này đề cao lòng dũng cảm và sự lương thiện, rất hợp cho trẻ con xem.'}
   ],
   colloFull:[
     {zh:'宣扬能够促进健康',py:'xuānyáng nénggòu cùjìn jiànkāng',vn:'quảng cáo là tăng cường sức khoẻ'},
     {zh:'到处宣扬',py:'dàochù xuānyáng',vn:'rêu rao khắp nơi'},
     {zh:'大肆宣扬',py:'dàsì xuānyáng',vn:'rùm beng quảng bá'},
     {zh:'宣扬……的好处',py:'xuānyáng…… de hǎochù',vn:'quảng bá lợi ích của …'},
     {zh:'宣扬传统文化',py:'xuānyáng chuántǒng wénhuà',vn:'quảng bá văn hoá truyền thống'}
   ],
   patterns:[
     {s:'N + 都宣扬 + 能够 + V',m:'N đều quảng cáo là có thể …'},
     {s:'（从来）不到处宣扬',m:'(Chưa bao giờ) đi rêu rao khắp nơi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng tin những quảng cáo rêu rao "một tuần giảm năm cân", sức khoẻ phải dựa vào vận động.',answer:'别相信那些宣扬“一周减五公斤”的广告，健康要靠运动。',answerPy:'Bié xiāngxìn nàxiē xuānyáng “yì zhōu jiǎn wǔ gōngjīn” de guǎnggào, jiànkāng yào kào yùndòng.',
      note:'Cụm 宣扬…… làm định ngữ cho 广告; 靠 = dựa vào.',pair:'靠……'},
     {promptLang:'vi',prompt:'Chuyện này bạn biết là được rồi, ngàn vạn lần đừng đi nói khắp nơi.',answer:'这件事你知道就行了，千万别到处宣扬。',answerPy:'Zhè jiàn shì nǐ zhīdào jiù xíng le, qiānwàn bié dàochù xuānyáng.',
      note:'……就行了 = … là được rồi; 千万别 = nhất định đừng.',pair:'千万别……'}
   ]},

  {n:44,zh:'孔',py:'kǒng',pos:'Danh từ',vn:'lỗ, khe hở',hv:'khổng',em:'🕳️',lesson:1,
   explain:['Lỗ nhỏ, khe hở: 毛孔 (lỗ chân lông), 小孔, 鼻孔, 针孔. Thường là hình vị trong từ ghép.','Còn là lượng từ cho hang động, cầu vòm (一孔桥). 孔 cũng là họ (孔子 — Khổng Tử).'],
   usage:'毛孔 / 鼻孔 / 针孔 / 小孔; 打 / 钻 + 孔; 一个小孔.',
   collo:['毛孔','小孔','鼻孔','打孔'],
   ex_zh:'运动能令全身排汗，毛孔内的垃圾及多余油脂会被排走，皮肤自然会更好。',ex_py:'Yùndòng néng lìng quánshēn pái hàn, máokǒng nèi de lājī jí duōyú yóuzhī huì bèi páizǒu, pífū zìrán huì gèng hǎo.',ex_vn:'Vận động làm toàn thân đổ mồ hôi, chất bẩn và dầu thừa trong lỗ chân lông sẽ bị thải ra, da tự nhiên sẽ đẹp hơn.',
   exList:[
     {zh:'这个塑料瓶底下有个小孔，水一直往外漏。',py:'Zhège sùliàopíng dǐxia yǒu ge xiǎo kǒng, shuǐ yìzhí wǎng wài lòu.',vn:'Đáy chai nhựa này có một lỗ nhỏ, nước cứ rỉ ra ngoài.'},
     {zh:'天热的时候，毛孔张开，身体通过出汗来散热。',py:'Tiān rè de shíhou, máokǒng zhāngkāi, shēntǐ tōngguò chū hàn lái sàn rè.',vn:'Khi trời nóng, lỗ chân lông giãn ra, cơ thể toả nhiệt bằng cách đổ mồ hôi.'},
     {zh:'他在木板上打了两个孔，把它挂在了墙上。',py:'Tā zài mùbǎn shang dǎle liǎng ge kǒng, bǎ tā guà zàile qiáng shang.',vn:'Anh ấy khoan hai lỗ trên tấm ván, rồi treo nó lên tường.'}
   ],
   colloFull:[
     {zh:'毛孔',py:'máokǒng',vn:'lỗ chân lông'},
     {zh:'小孔',py:'xiǎo kǒng',vn:'lỗ nhỏ'},
     {zh:'鼻孔',py:'bíkǒng',vn:'lỗ mũi'},
     {zh:'打孔',py:'dǎ kǒng',vn:'khoan lỗ, đục lỗ'},
     {zh:'毛孔内的垃圾',py:'máokǒng nèi de lājī',vn:'chất bẩn trong lỗ chân lông'}
   ],
   patterns:[
     {s:'在 + N + 上 + 打 + 数 + 个孔',m:'Khoan / đục mấy lỗ trên N'},
     {s:'N + 上有个小孔',m:'Trên N có một lỗ nhỏ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rửa mặt xong nên dùng nước lạnh vỗ nhẹ, như vậy có thể làm se lỗ chân lông.',answer:'洗完脸以后最好用冷水拍一拍，这样可以收缩毛孔。',answerPy:'Xǐwán liǎn yǐhòu zuìhǎo yòng lěngshuǐ pāi yi pāi, zhèyàng kěyǐ shōusuō máokǒng.',
      note:'V一V; 这样 = như vậy (nêu cách làm → kết quả).',pair:'这样可以……'},
     {promptLang:'vi',prompt:'Cái lốp này bị thủng một lỗ nhỏ, phải vá ngay mới đi được.',answer:'这个轮胎扎了一个小孔，得马上补好才能骑。',answerPy:'Zhège lúntāi zhāle yí ge xiǎo kǒng, děi mǎshàng bǔhǎo cái néng qí.',
      note:'扎 (bài 20) = đâm, chọc; 得……才能…….',pair:'得……才能……'}
   ]},

  {n:45,zh:'循序渐进',py:'xúnxù-jiànjìn',pos:'Thành ngữ',vn:'tiến dần từng bước, theo trình tự',hv:'tuần tự tiệm tiến',em:'🪜',lesson:1,
   explain:['Làm theo đúng trình tự, từ dễ đến khó, từ ít đến nhiều, tiến bộ dần dần (循 = theo, 序 = thứ tự, 渐 = dần dần, 进 = tiến).','Trái nghĩa với 急于求成 / 拔苗助长 (bài 18). Hay dùng về học tập, luyện tập, cải cách: 学习要循序渐进.'],
   usage:'要 / 应该 + 循序渐进; 循序渐进地 + V; 学习 / 运动 / 训练 + 循序渐进.',
   collo:['运动健身要循序渐进','循序渐进地学习','循序渐进的原则','循序渐进，不能急'],
   ex_zh:'运动健身要循序渐进，不要急于求成。',ex_py:'Yùndòng jiànshēn yào xúnxù-jiànjìn, bú yào jíyú qiú chéng.',ex_vn:'Vận động rèn luyện sức khoẻ phải tiến dần từng bước, đừng nóng vội muốn thành công ngay.',
   exList:[
     {zh:'学外语要循序渐进，先打好基础，再慢慢提高。',py:'Xué wàiyǔ yào xúnxù-jiànjìn, xiān dǎhǎo jīchǔ, zài mànmàn tígāo.',vn:'Học ngoại ngữ phải đi từng bước, trước hết xây nền cho vững, rồi mới nâng cao dần.'},
     {zh:'刚开始跑步的人应该循序渐进，第一周每天跑两公里就够了。',py:'Gāng kāishǐ pǎobù de rén yīnggāi xúnxù-jiànjìn, dì-yī zhōu měi tiān pǎo liǎng gōnglǐ jiù gòu le.',vn:'Người mới bắt đầu chạy bộ nên tăng dần, tuần đầu mỗi ngày chạy hai cây số là đủ.'},
     {zh:'改革必须循序渐进，不可能一下子解决所有问题。',py:'Gǎigé bìxū xúnxù-jiànjìn, bù kěnéng yíxiàzi jiějué suǒyǒu wèntí.',vn:'Cải cách phải từng bước, không thể giải quyết mọi vấn đề trong chốc lát.'}
   ],
   colloFull:[
     {zh:'运动健身要循序渐进',py:'yùndòng jiànshēn yào xúnxù-jiànjìn',vn:'tập luyện phải từng bước'},
     {zh:'循序渐进地学习',py:'xúnxù-jiànjìn de xuéxí',vn:'học tập từ từ từng bước'},
     {zh:'循序渐进的原则',py:'xúnxù-jiànjìn de yuánzé',vn:'nguyên tắc tiến dần từng bước'},
     {zh:'循序渐进，不能急',py:'xúnxù-jiànjìn, bù néng jí',vn:'từng bước một, không được vội'},
     {zh:'训练要循序渐进',py:'xùnliàn yào xúnxù-jiànjìn',vn:'huấn luyện phải tăng dần'}
   ],
   patterns:[
     {s:'……要循序渐进，不要急于求成',m:'… phải từng bước, đừng nóng vội'},
     {s:'先……，再慢慢……，循序渐进',m:'Trước …, rồi dần dần …, đi từng bước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giảm cân phải từ từ từng bước, giảm quá nhanh ngược lại có hại cho sức khoẻ.',answer:'减肥要循序渐进，减得太快反而对健康有害。',answerPy:'Jiǎnféi yào xúnxù-jiànjìn, jiǎn de tài kuài fǎn\'ér duì jiànkāng yǒuhài.',
      note:'反而 = ngược lại (kết quả trái mong muốn).',pair:'……反而……'},
     {promptLang:'vi',prompt:'Chỉ có học theo trình tự, nền tảng mới vững chắc được.',answer:'只有循序渐进地学习，基础才能打得扎实。',answerPy:'Zhǐyǒu xúnxù-jiànjìn de xuéxí, jīchǔ cái néng dǎ de zhāshi.',
      note:'只有……才……; 打得扎实 (bổ ngữ trạng thái).',pair:'只有……才……'}
   ]},

  {n:46,zh:'急于求成',py:'jíyú qiú chéng',pos:'Thành ngữ',vn:'nóng vội muốn thành công ngay',hv:'cấp ư cầu thành',em:'⏩',lesson:1,
   explain:['Vội vã muốn đạt được thành công ngay, không chịu đi từng bước (急于 = vội muốn; 求成 = cầu thành công). Mang nghĩa chê.','Thường dùng trong lời khuyên phủ định: 不要 / 不能 / 切忌 + 急于求成; trái nghĩa với 循序渐进.'],
   usage:'不要 / 不能 / 切忌 + 急于求成; 太急于求成了; 急于求成的心态.',
   collo:['不要急于求成','不能急于求成','急于求成的心态','切忌急于求成'],
   ex_zh:'运动健身要循序渐进，不要急于求成。',ex_py:'Yùndòng jiànshēn yào xúnxù-jiànjìn, bú yào jíyú qiú chéng.',ex_vn:'Vận động rèn luyện sức khoẻ phải tiến dần từng bước, đừng nóng vội muốn thành công ngay.',
   exList:[
     {zh:'但是补钙也不能急于求成，只要每天坚持，就能达到预期的效果。',py:'Dànshì bǔ gài yě bù néng jíyú qiú chéng, zhǐyào měi tiān jiānchí, jiù néng dádào yùqī de xiàoguǒ.',vn:'Nhưng bổ sung canxi cũng không được nóng vội, chỉ cần kiên trì mỗi ngày là đạt được hiệu quả mong đợi.'},
     {zh:'他太急于求成了，刚学了三个月就想参加比赛。',py:'Tā tài jíyú qiú chéng le, gāng xuéle sān ge yuè jiù xiǎng cānjiā bǐsài.',vn:'Cậu ấy nóng vội quá, mới học ba tháng đã muốn đi thi đấu.'},
     {zh:'急于求成的心态往往会让人做出错误的决定。',py:'Jíyú qiú chéng de xīntài wǎngwǎng huì ràng rén zuòchū cuòwù de juédìng.',vn:'Tâm lý nóng vội thường khiến người ta đưa ra quyết định sai lầm.'}
   ],
   colloFull:[
     {zh:'不要急于求成',py:'bú yào jíyú qiú chéng',vn:'đừng nóng vội'},
     {zh:'不能急于求成',py:'bù néng jíyú qiú chéng',vn:'không được nóng vội'},
     {zh:'急于求成的心态',py:'jíyú qiú chéng de xīntài',vn:'tâm lý nóng vội'},
     {zh:'切忌急于求成',py:'qièjì jíyú qiú chéng',vn:'tối kỵ nóng vội'},
     {zh:'太急于求成了',py:'tài jíyú qiú chéng le',vn:'nóng vội quá'}
   ],
   patterns:[
     {s:'……也不能急于求成，只要……，就……',m:'… cũng không được nóng vội, chỉ cần … là …'},
     {s:'太急于求成了，刚……就……',m:'Nóng vội quá, vừa … đã …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm việc gì cũng không nên nóng vội, nếu không thì dục tốc bất đạt.',answer:'做什么事都不应该急于求成，否则就会欲速则不达。',answerPy:'Zuò shénme shì dōu bù yīnggāi jíyú qiú chéng, fǒuzé jiù huì yù sù zé bù dá.',
      note:'否则 = nếu không thì; 欲速则不达 = dục tốc bất đạt.',pair:'……，否则……'},
     {promptLang:'vi',prompt:'Chính vì quá nóng vội nên anh ấy mới bị thương khi tập luyện.',answer:'正是因为太急于求成，他才在训练中受了伤。',answerPy:'Zhèng shì yīnwèi tài jíyú qiú chéng, tā cái zài xùnliàn zhōng shòule shāng.',
      note:'正是因为……才…… = chính vì … nên mới ….',pair:'正是因为……才……'}
   ]},

  {n:47,zh:'剧烈',py:'jùliè',pos:'Tính từ',vn:'mạnh, dữ dội, kịch liệt',hv:'kịch liệt',em:'🔥',lesson:1,
   explain:['(Vận động, thay đổi, cơn đau, phản ứng) mạnh mẽ, dữ dội: 剧烈运动 (vận động mạnh), 剧烈的疼痛, 剧烈变化.','Chú ý: tiếng Việt "kịch liệt" thường cho tranh luận, phản đối (激烈 trong tiếng Trung). 剧烈 thiên về cường độ thể chất / thay đổi; 激烈 thiên về tranh luận, cạnh tranh (竞争激烈).'],
   usage:'剧烈 + 运动 / 疼痛 / 变化 / 咳嗽; 剧烈地 + V; 避免剧烈运动.',
   collo:['剧烈运动','剧烈的疼痛','剧烈变化','避免剧烈运动'],
   ex_zh:'不适合自己身体状况的剧烈运动或大幅度动作尽量别勉强。',ex_py:'Bú shìhé zìjǐ shēntǐ zhuàngkuàng de jùliè yùndòng huò dà fúdù dòngzuò jǐnliàng bié miǎnqiǎng.',ex_vn:'Những môn vận động mạnh hoặc động tác biên độ lớn không phù hợp với tình trạng cơ thể mình thì cố gắng đừng miễn cưỡng.',
   exList:[
     {zh:'饭后马上做剧烈运动，容易引起肚子疼。',py:'Fàn hòu mǎshàng zuò jùliè yùndòng, róngyì yǐnqǐ dùzi téng.',vn:'Ăn xong mà vận động mạnh ngay thì dễ bị đau bụng.'},
     {zh:'他突然感到胸口一阵剧烈的疼痛，马上被送进了医院。',py:'Tā tūrán gǎndào xiōngkǒu yí zhèn jùliè de téngtòng, mǎshàng bèi sòngjìnle yīyuàn.',vn:'Anh ấy đột nhiên thấy một cơn đau dữ dội ở ngực, lập tức được đưa vào viện.'},
     {zh:'这几十年，家乡的面貌发生了剧烈的变化。',py:'Zhè jǐ shí nián, jiāxiāng de miànmào fāshēngle jùliè de biànhuà.',vn:'Mấy chục năm nay, diện mạo quê hương đã thay đổi mạnh mẽ.'}
   ],
   colloFull:[
     {zh:'剧烈运动',py:'jùliè yùndòng',vn:'vận động mạnh'},
     {zh:'剧烈的疼痛',py:'jùliè de téngtòng',vn:'cơn đau dữ dội'},
     {zh:'剧烈变化',py:'jùliè biànhuà',vn:'thay đổi mạnh mẽ'},
     {zh:'避免剧烈运动',py:'bìmiǎn jùliè yùndòng',vn:'tránh vận động mạnh'},
     {zh:'剧烈地咳嗽',py:'jùliè de késou',vn:'ho dữ dội'}
   ],
   patterns:[
     {s:'……后（马上）做剧烈运动，容易……',m:'Sau … mà vận động mạnh ngay thì dễ …'},
     {s:'发生了剧烈的变化',m:'Đã có sự thay đổi mạnh mẽ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bác sĩ nói trong thời gian bị ốm tốt nhất đừng vận động mạnh.',answer:'医生说生病期间最好不要做剧烈运动。',answerPy:'Yīshēng shuō shēngbìng qījiān zuìhǎo bú yào zuò jùliè yùndòng.',
      note:'……期间 = trong thời gian …; 最好不要 = tốt nhất đừng.',pair:'最好不要……'},
     {promptLang:'vi',prompt:'Trước khi vận động mạnh nhất định phải khởi động kỹ, kẻo bị thương.',answer:'做剧烈运动之前一定要做好准备活动，免得受伤。',answerPy:'Zuò jùliè yùndòng zhīqián yídìng yào zuòhǎo zhǔnbèi huódòng, miǎnde shòushāng.',
      note:'……之前 = trước khi …; 免得 = kẻo.',pair:'……，免得……'}
   ]},

  {n:48,zh:'幅度',py:'fúdù',pos:'Danh từ',vn:'biên độ, mức độ (thay đổi), phạm vi',hv:'phúc độ',em:'📏',lesson:1,
   explain:['Độ rộng của một chuyển động (vung tay, dao động): 大幅度动作 (động tác biên độ lớn), 动作幅度.','Mức độ tăng giảm, thay đổi của sự vật: 价格上涨的幅度, 大幅度提高. Hay dùng trong kinh tế: 涨幅, 降幅.'],
   usage:'大 / 小 + 幅度; 大幅度（地）+ 提高 / 增加 / 下降; ……的幅度 + 很大 / 不大.',
   collo:['大幅度动作','动作幅度','大幅度提高','上涨的幅度'],
   ex_zh:'不适合自己身体状况的剧烈运动或大幅度动作尽量别勉强。',ex_py:'Bú shìhé zìjǐ shēntǐ zhuàngkuàng de jùliè yùndòng huò dà fúdù dòngzuò jǐnliàng bié miǎnqiǎng.',ex_vn:'Những môn vận động mạnh hoặc động tác biên độ lớn không phù hợp với tình trạng cơ thể mình thì cố gắng đừng miễn cưỡng.',
   exList:[
     {zh:'老年人练太极拳，动作幅度不要太大。',py:'Lǎoniánrén liàn tàijíquán, dòngzuò fúdù bú yào tài dà.',vn:'Người già tập thái cực quyền, biên độ động tác đừng quá lớn.'},
     {zh:'今年蔬菜价格上涨的幅度比去年小。',py:'Jīnnián shūcài jiàgé shàngzhǎng de fúdù bǐ qùnián xiǎo.',vn:'Năm nay mức tăng giá rau nhỏ hơn năm ngoái.'},
     {zh:'经过一个学期的努力，他的成绩大幅度提高了。',py:'Jīngguò yí ge xuéqī de nǔlì, tā de chéngjì dà fúdù tígāo le.',vn:'Sau một học kỳ cố gắng, thành tích của cậu ấy tăng lên đáng kể.'}
   ],
   colloFull:[
     {zh:'大幅度动作',py:'dà fúdù dòngzuò',vn:'động tác biên độ lớn'},
     {zh:'动作幅度',py:'dòngzuò fúdù',vn:'biên độ động tác'},
     {zh:'大幅度提高',py:'dà fúdù tígāo',vn:'nâng cao đáng kể'},
     {zh:'上涨的幅度',py:'shàngzhǎng de fúdù',vn:'mức tăng'},
     {zh:'小幅度下降',py:'xiǎo fúdù xiàjiàng',vn:'giảm nhẹ'}
   ],
   patterns:[
     {s:'N + 大幅度 + 提高 / 下降 + 了',m:'N tăng / giảm mạnh'},
     {s:'……的幅度 + 比…… + 小 / 大',m:'Mức … nhỏ / lớn hơn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi dùng phương pháp mới, hiệu suất làm việc của nhà máy đã nâng cao đáng kể.',answer:'采用新方法以后，工厂的工作效率大幅度提高了。',answerPy:'Cǎiyòng xīn fāngfǎ yǐhòu, gōngchǎng de gōngzuò xiàolǜ dà fúdù tígāo le.',
      note:'大幅度 làm trạng ngữ trước động từ.',pair:'大幅度 + V'},
     {promptLang:'vi',prompt:'Vừa phẫu thuật xong, động tác của cậu đừng quá mạnh.',answer:'你刚做完手术，动作的幅度别太大。',answerPy:'Nǐ gāng zuòwán shǒushù, dòngzuò de fúdù bié tài dà.',
      note:'别太 + Adj = đừng quá ….',pair:'别太……'}
   ]},

  {n:49,zh:'蛋白质',py:'dànbáizhì',pos:'Danh từ',vn:'protein, chất đạm',hv:'đản bạch chất',em:'🥚',lesson:1,
   explain:['Chất dinh dưỡng cơ bản cấu tạo nên tế bào, cơ bắp; có nhiều trong trứng, sữa, thịt, cá, đậu.','Cấu tạo: 蛋白 (lòng trắng trứng) + 质 (chất). Hay đi với 补充蛋白质, 富含蛋白质, 优质蛋白质.'],
   usage:'补充 / 摄入 + 蛋白质; 富含 / 含有 + 蛋白质; 优质蛋白质; 蛋白质、水和维生素.',
   collo:['补充蛋白质','富含蛋白质','优质蛋白质','蛋白质、水和维生素'],
   ex_zh:'锻炼后是肌肉细胞的“进食时间”，它们渴望得到足够的蛋白质、水和维生素。',ex_py:'Duànliàn hòu shì jīròu xìbāo de “jìnshí shíjiān”, tāmen kěwàng dédào zúgòu de dànbáizhì, shuǐ hé wéishēngsù.',ex_vn:'Sau khi tập luyện là "giờ ăn" của tế bào cơ, chúng khao khát được cung cấp đủ protein, nước và vitamin.',
   exList:[
     {zh:'鸡蛋、牛奶和鱼肉都富含优质蛋白质。',py:'Jīdàn, niúnǎi hé yúròu dōu fùhán yōuzhì dànbáizhì.',vn:'Trứng gà, sữa bò và thịt cá đều giàu protein chất lượng cao.'},
     {zh:'大夫让我多晒晒太阳，多补充蛋白质。',py:'Dàifu ràng wǒ duō shàishai tàiyáng, duō bǔchōng dànbáizhì.',vn:'Bác sĩ bảo tôi phơi nắng nhiều hơn, bổ sung thêm protein.'},
     {zh:'青少年正在长身体，每天都需要摄入足够的蛋白质。',py:'Qīng-shàonián zhèngzài zhǎng shēntǐ, měi tiān dōu xūyào shèrù zúgòu de dànbáizhì.',vn:'Thanh thiếu niên đang tuổi lớn, mỗi ngày đều cần nạp đủ protein.'}
   ],
   colloFull:[
     {zh:'补充蛋白质',py:'bǔchōng dànbáizhì',vn:'bổ sung protein'},
     {zh:'富含蛋白质',py:'fùhán dànbáizhì',vn:'giàu protein'},
     {zh:'优质蛋白质',py:'yōuzhì dànbáizhì',vn:'protein chất lượng cao'},
     {zh:'蛋白质、水和维生素',py:'dànbáizhì, shuǐ hé wéishēngsù',vn:'protein, nước và vitamin'},
     {zh:'摄入蛋白质',py:'shèrù dànbáizhì',vn:'nạp protein'}
   ],
   patterns:[
     {s:'N + 富含 + 蛋白质',m:'N giàu protein'},
     {s:'运动后要及时补充 + 蛋白质',m:'Sau vận động phải kịp thời bổ sung protein'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn tăng cơ thì ngoài tập luyện ra, còn phải bổ sung nhiều protein.',answer:'要想增加肌肉，除了锻炼以外，还要多补充蛋白质。',answerPy:'Yào xiǎng zēngjiā jīròu, chúle duànliàn yǐwài, hái yào duō bǔchōng dànbáizhì.',
      note:'除了……以外，还…… = ngoài … ra còn ….',pair:'除了……以外，还……'},
     {promptLang:'vi',prompt:'Đậu phụ tuy rẻ nhưng lại chứa nhiều protein.',answer:'豆腐虽然便宜，却含有丰富的蛋白质。',answerPy:'Dòufu suīrán piányi, què hányǒu fēngfù de dànbáizhì.',
      note:'虽然……却…….',pair:'虽然……却……'}
   ]},

  {n:50,zh:'维生素',py:'wéishēngsù',pos:'Danh từ',vn:'vitamin, sinh tố',hv:'duy sinh tố',em:'🍊',lesson:1,
   explain:['Nhóm chất cơ thể cần một lượng nhỏ nhưng không thể thiếu để duy trì sự sống và phát triển bình thường: 维生素A, 维生素C.','Có nhiều trong rau quả tươi. Hay đi với 补充维生素, 缺乏维生素, 富含维生素, 维生素片.'],
   usage:'补充 / 缺乏 + 维生素; 富含 + 维生素 + C / A; 维生素片.',
   collo:['补充维生素','缺乏维生素','富含维生素C','维生素片'],
   ex_zh:'它们渴望得到足够的蛋白质、水和维生素。',ex_py:'Tāmen kěwàng dédào zúgòu de dànbáizhì, shuǐ hé wéishēngsù.',ex_vn:'Chúng khao khát được cung cấp đủ protein, nước và vitamin.',
   exList:[
     {zh:'橙子和猕猴桃富含维生素C，可以增强免疫力。',py:'Chéngzi hé míhóutáo fùhán wéishēngsù C, kěyǐ zēngqiáng miǎnyìlì.',vn:'Cam và kiwi giàu vitamin C, có thể tăng cường sức đề kháng.'},
     {zh:'长期不吃蔬菜水果，身体就会缺乏维生素。',py:'Chángqī bù chī shūcài shuǐguǒ, shēntǐ jiù huì quēfá wéishēngsù.',vn:'Lâu ngày không ăn rau quả, cơ thể sẽ thiếu vitamin.'},
     {zh:'与其吃维生素片，不如多吃新鲜水果。',py:'Yǔqí chī wéishēngsùpiàn, bùrú duō chī xīnxiān shuǐguǒ.',vn:'Uống viên vitamin chẳng bằng ăn nhiều hoa quả tươi.'}
   ],
   colloFull:[
     {zh:'补充维生素',py:'bǔchōng wéishēngsù',vn:'bổ sung vitamin'},
     {zh:'缺乏维生素',py:'quēfá wéishēngsù',vn:'thiếu vitamin'},
     {zh:'富含维生素C',py:'fùhán wéishēngsù C',vn:'giàu vitamin C'},
     {zh:'维生素片',py:'wéishēngsùpiàn',vn:'viên vitamin'},
     {zh:'多种维生素',py:'duō zhǒng wéishēngsù',vn:'nhiều loại vitamin'}
   ],
   patterns:[
     {s:'N + 富含维生素 + C / A',m:'N giàu vitamin C / A'},
     {s:'与其……，不如……',m:'Thay vì … chẳng bằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mùa đông rau quả tươi ít, dễ bị thiếu vitamin.',answer:'冬天新鲜的蔬菜水果少，容易缺乏维生素。',answerPy:'Dōngtiān xīnxiān de shūcài shuǐguǒ shǎo, róngyì quēfá wéishēngsù.',
      note:'容易 + V = dễ ….',pair:'容易……'},
     {promptLang:'vi',prompt:'Vitamin tuy quan trọng, nhưng uống quá nhiều cũng không tốt cho cơ thể.',answer:'维生素虽然重要，但是吃得太多对身体也不好。',answerPy:'Wéishēngsù suīrán zhòngyào, dànshì chī de tài duō duì shēntǐ yě bù hǎo.',
      note:'对……不好 = không tốt cho ….',pair:'虽然……但是……'}
   ]},

  {n:51,zh:'不愧',py:'búkuì',pos:'Phó từ',vn:'xứng đáng, không hổ danh',hv:'bất quý',em:'🏆',lesson:1,
   explain:['Xứng đáng với danh hiệu, danh xưng nào đó (không phải xấu hổ vì không xứng): 不愧是专家. Dùng để khen.','Cấu trúc cố định: 不愧是 + N / 不愧为 + N (văn viết). Phía trước thường có 真 / 果然. Không dùng cho nghĩa xấu.'],
   usage:'（真 / 果然）不愧是 + N; 不愧为 + N; ……，不愧是……',
   collo:['真不愧是专家','不愧是行业楷模','不愧为','果然不愧是'],
   ex_zh:'王老师，您真不愧是这方面的专家。',ex_py:'Wáng lǎoshī, nín zhēn búkuì shì zhè fāngmiàn de zhuānjiā.',ex_vn:'Thầy Vương, thầy thật xứng đáng là chuyên gia về mặt này.',
   exList:[
     {zh:'他在这个专业成就非凡，不愧是行业楷模。',py:'Tā zài zhège zhuānyè chéngjiù fēifán, búkuì shì hángyè kǎimó.',vn:'Ông ấy có thành tựu phi thường trong chuyên ngành này, thật xứng đáng là tấm gương của ngành.'},
     {zh:'这道菜做得太地道了，你不愧是厨师的儿子。',py:'Zhè dào cài zuò de tài dìdao le, nǐ búkuì shì chúshī de érzi.',vn:'Món này làm chuẩn vị quá, cậu đúng là không hổ danh con trai đầu bếp.'},
     {zh:'黄山的风景果然名不虚传，不愧为“天下第一奇山”。',py:'Huáng Shān de fēngjǐng guǒrán míng bù xū chuán, búkuì wéi “tiānxià dì-yī qí shān”.',vn:'Phong cảnh Hoàng Sơn quả nhiên danh bất hư truyền, xứng đáng là "ngọn núi kỳ vĩ nhất thiên hạ".'}
   ],
   colloFull:[
     {zh:'真不愧是专家',py:'zhēn búkuì shì zhuānjiā',vn:'thật xứng là chuyên gia'},
     {zh:'不愧是行业楷模',py:'búkuì shì hángyè kǎimó',vn:'xứng đáng là tấm gương của ngành'},
     {zh:'不愧为',py:'búkuì wéi',vn:'xứng đáng là (văn viết)'},
     {zh:'果然不愧是',py:'guǒrán búkuì shì',vn:'quả nhiên không hổ danh là'},
     {zh:'不愧是冠军',py:'búkuì shì guànjūn',vn:'không hổ danh nhà vô địch'}
   ],
   patterns:[
     {s:'S + 真不愧是 + N',m:'S thật xứng đáng là N'},
     {s:'……，不愧为“……”',m:'…, xứng đáng là "…" (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ nghe một lần mà cậu đã hát được rồi, đúng là không hổ danh người đi học nhạc.',answer:'只听了一遍你就会唱了，真不愧是学音乐的。',answerPy:'Zhǐ tīngle yí biàn nǐ jiù huì chàng le, zhēn búkuì shì xué yīnyuè de.',
      note:'只……就…… = chỉ … đã …; 学音乐的 = người học nhạc.',pair:'只……就……'},
     {promptLang:'vi',prompt:'Trận này họ thắng rất đẹp, quả nhiên xứng đáng là nhà vô địch năm ngoái.',answer:'这场比赛他们赢得很漂亮，果然不愧是去年的冠军。',answerPy:'Zhè chǎng bǐsài tāmen yíng de hěn piàoliang, guǒrán búkuì shì qùnián de guànjūn.',
      note:'果然 = quả nhiên (đúng như dự đoán).',pair:'果然……'}
   ]},

  {n:52,zh:'定期',py:'dìngqī',pos:'Tính từ',vn:'định kỳ, theo kỳ hạn',hv:'định kỳ',em:'📅',lesson:1,
   explain:['Theo thời hạn, chu kỳ cố định: 定期检查 (kiểm tra định kỳ), 定期交流, 定期存款 (tiền gửi có kỳ hạn).','Thường làm trạng ngữ trước động từ (定期 + V) hoặc định ngữ (定期存款). Trái nghĩa: 不定期.'],
   usage:'定期 + 检查 / 体检 / 交流 / 打扫 / 更新; 定期存款; 不定期.',
   collo:['定期交流','定期体检','定期检查','定期存款'],
   ex_zh:'以后要是能定期和您做些交流就好了。',ex_py:'Yǐhòu yàoshi néng dìngqī hé nín zuò xiē jiāoliú jiù hǎo le.',ex_vn:'Sau này nếu có thể định kỳ giao lưu với thầy thì tốt quá.',
   exList:[
     {zh:'大夫让我多补充蛋白质，然后定期到医院检查。',py:'Dàifu ràng wǒ duō bǔchōng dànbáizhì, ránhòu dìngqī dào yīyuàn jiǎnchá.',vn:'Bác sĩ bảo tôi bổ sung thêm protein, rồi định kỳ đến bệnh viện kiểm tra.'},
     {zh:'公司每年都安排员工定期体检。',py:'Gōngsī měi nián dōu ānpái yuángōng dìngqī tǐjiǎn.',vn:'Công ty năm nào cũng sắp xếp cho nhân viên khám sức khoẻ định kỳ.'},
     {zh:'电脑里的杀毒软件要定期更新，才能防止病毒。',py:'Diànnǎo li de shādú ruǎnjiàn yào dìngqī gēngxīn, cái néng fángzhǐ bìngdú.',vn:'Phần mềm diệt virus trong máy tính phải cập nhật định kỳ mới chống được virus.'}
   ],
   colloFull:[
     {zh:'定期交流',py:'dìngqī jiāoliú',vn:'giao lưu định kỳ'},
     {zh:'定期体检',py:'dìngqī tǐjiǎn',vn:'khám sức khoẻ định kỳ'},
     {zh:'定期检查',py:'dìngqī jiǎnchá',vn:'kiểm tra định kỳ'},
     {zh:'定期存款',py:'dìngqī cúnkuǎn',vn:'tiền gửi có kỳ hạn'},
     {zh:'定期更新',py:'dìngqī gēngxīn',vn:'cập nhật định kỳ'}
   ],
   patterns:[
     {s:'要是能定期 + V + 就好了',m:'Nếu có thể định kỳ … thì tốt quá'},
     {s:'……要定期 + V，才能……',m:'… phải định kỳ … mới có thể …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người già tốt nhất nửa năm khám sức khoẻ định kỳ một lần.',answer:'老年人最好每半年定期体检一次。',answerPy:'Lǎoniánrén zuìhǎo měi bàn nián dìngqī tǐjiǎn yí cì.',
      note:'每 + thời gian + V + số lần.',pair:'每……一次'},
     {promptLang:'vi',prompt:'Chỉ khi định kỳ bảo dưỡng, xe mới có thể dùng được lâu hơn.',answer:'只有定期保养，汽车才能用得更久。',answerPy:'Zhǐyǒu dìngqī bǎoyǎng, qìchē cái néng yòng de gèng jiǔ.',
      note:'只有……才……; 保养 = bảo dưỡng.',pair:'只有……才……'}
   ]},

  {n:53,zh:'联络',py:'liánluò',pos:'Động từ',vn:'liên lạc, giữ liên hệ',hv:'liên lạc',em:'📞',lesson:1,
   explain:['Giữ liên hệ, qua lại, thông tin với nhau: 多联络, 保持联络, 跟……联络. Làm danh từ: 失去联络, 联络方式.','Gần 联系 nhưng 联络 thiên về giữ mối qua lại giữa người với người (联络感情 = vun đắp tình cảm), không dùng cho "liên hệ" giữa các sự vật (×理论联络实际). Xem 词语辨析.'],
   usage:'跟 / 和 + 某人 + 联络; 多 / 保持 + 联络; 失去联络; 联络感情; 联络人.',
   collo:['多联络','保持联络','失去联络','联络感情'],
   ex_zh:'这是我的联系方式，以后我们可以多联络。',ex_py:'Zhè shì wǒ de liánxì fāngshì, yǐhòu wǒmen kěyǐ duō liánluò.',ex_vn:'Đây là thông tin liên lạc của tôi, sau này chúng ta có thể liên lạc nhiều hơn.',
   exList:[
     {zh:'毕业以后，我和几个老同学一直保持着联络。',py:'Bìyè yǐhòu, wǒ hé jǐ ge lǎo tóngxué yìzhí bǎochízhe liánluò.',vn:'Từ khi tốt nghiệp, tôi và mấy người bạn cũ vẫn luôn giữ liên lạc.'},
     {zh:'登山队在山上失去了联络，大家都很着急。',py:'Dēngshānduì zài shān shang shīqùle liánluò, dàjiā dōu hěn zháojí.',vn:'Đội leo núi bị mất liên lạc trên núi, mọi người đều rất sốt ruột.'},
     {zh:'周末聚一聚，吃顿饭，也是联络感情的好办法。',py:'Zhōumò jù yi jù, chī dùn fàn, yě shì liánluò gǎnqíng de hǎo bànfǎ.',vn:'Cuối tuần tụ tập ăn bữa cơm cũng là cách hay để vun đắp tình cảm.'}
   ],
   colloFull:[
     {zh:'多联络',py:'duō liánluò',vn:'liên lạc nhiều hơn'},
     {zh:'保持联络',py:'bǎochí liánluò',vn:'giữ liên lạc'},
     {zh:'失去联络',py:'shīqù liánluò',vn:'mất liên lạc'},
     {zh:'联络感情',py:'liánluò gǎnqíng',vn:'vun đắp tình cảm'},
     {zh:'跟他联络',py:'gēn tā liánluò',vn:'liên lạc với anh ấy'}
   ],
   patterns:[
     {s:'和 + 某人 + 一直保持着联络',m:'Luôn giữ liên lạc với ai'},
     {s:'……也是联络感情的好办法',m:'… cũng là cách hay để vun đắp tình cảm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy chúng tôi ở hai thành phố khác nhau, nhưng tuần nào cũng liên lạc.',answer:'虽然我们在两个不同的城市，但是每个星期都联络。',answerPy:'Suīrán wǒmen zài liǎng ge bùtóng de chéngshì, dànshì měi ge xīngqī dōu liánluò.',
      note:'每……都…… = … nào cũng ….',pair:'每……都……'},
     {promptLang:'vi',prompt:'Đến nơi rồi nhớ liên lạc với nhà, đừng để bố mẹ lo.',answer:'到了以后记得跟家里联络，别让父母担心。',answerPy:'Dàole yǐhòu jìde gēn jiāli liánluò, bié ràng fùmǔ dānxīn.',
      note:'记得 + V = nhớ làm gì; 别让…… = đừng để ….',pair:'记得……'}
   ]},

  {n:54,zh:'保重',py:'bǎozhòng',pos:'Động từ',vn:'bảo trọng, giữ gìn sức khoẻ',hv:'bảo trọng',em:'🙏',lesson:1,
   explain:['Lời dặn, lời chúc người khác chú ý giữ gìn sức khoẻ, bản thân — thường dùng khi chia tay, trong thư: 多多保重, 请保重身体.','Chủ yếu dùng cho người khác (lời chúc), không nói về mình. Hay đi với 多 / 多多 / 一定要 + 保重.'],
   usage:'（请）保重 + 身体; 多多保重; 一定要保重; 各自保重.',
   collo:['多多保重','保重身体','一定要保重','请多保重'],
   ex_zh:'希望大家回去以后坚持锻炼，多多保重。',ex_py:'Xīwàng dàjiā huíqù yǐhòu jiānchí duànliàn, duōduō bǎozhòng.',ex_vn:'Mong mọi người về rồi kiên trì tập luyện, giữ gìn sức khoẻ thật tốt.',
   exList:[
     {zh:'爸爸，天冷了，您一个人在家要多保重身体。',py:'Bàba, tiān lěng le, nín yí ge rén zài jiā yào duō bǎozhòng shēntǐ.',vn:'Bố ơi, trời lạnh rồi, bố ở nhà một mình phải giữ gìn sức khoẻ nhé.'},
     {zh:'分别的时候，老朋友握着我的手说：“一路平安，多多保重！”',py:'Fēnbié de shíhou, lǎo péngyou wòzhe wǒ de shǒu shuō: “Yílù píng\'ān, duōduō bǎozhòng!”',vn:'Lúc chia tay, người bạn cũ nắm tay tôi nói: "Thượng lộ bình an, bảo trọng nhé!"'},
     {zh:'工作再忙，也要保重身体，别太累了。',py:'Gōngzuò zài máng, yě yào bǎozhòng shēntǐ, bié tài lèi le.',vn:'Công việc bận đến đâu cũng phải giữ gìn sức khoẻ, đừng quá mệt.'}
   ],
   colloFull:[
     {zh:'多多保重',py:'duōduō bǎozhòng',vn:'bảo trọng nhé'},
     {zh:'保重身体',py:'bǎozhòng shēntǐ',vn:'giữ gìn sức khoẻ'},
     {zh:'一定要保重',py:'yídìng yào bǎozhòng',vn:'nhất định phải bảo trọng'},
     {zh:'请多保重',py:'qǐng duō bǎozhòng',vn:'xin hãy bảo trọng'},
     {zh:'各自保重',py:'gèzì bǎozhòng',vn:'mỗi người tự bảo trọng'}
   ],
   patterns:[
     {s:'……再忙，也要保重身体',m:'… bận đến đâu cũng phải giữ sức khoẻ'},
     {s:'一路平安，多多保重',m:'Thượng lộ bình an, bảo trọng nhé (lời chia tay)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con đi học xa, mẹ không ở bên, con phải tự chăm sóc bản thân cho tốt.',answer:'你去外地上学，妈妈不在身边，你要多保重。',answerPy:'Nǐ qù wàidì shàngxué, māma bú zài shēnbiān, nǐ yào duō bǎozhòng.',
      note:'外地 = nơi khác; 身边 = bên cạnh.',pair:'……，你要多保重'},
     {promptLang:'vi',prompt:'Dù công việc bận thế nào, ông cũng phải giữ gìn sức khoẻ nhé.',answer:'不管工作多忙，您都要保重身体啊。',answerPy:'Bùguǎn gōngzuò duō máng, nín dōu yào bǎozhòng shēntǐ a.',
      note:'不管多 + Adj，都…….',pair:'不管……都……'}
   ]}
];


// ══════════════════════════════════════════
// BÀI KHOÁ — dạng phỏng vấn: A (sp:0) = 记者 phóng viên, B (sp:1) = 王老师 thầy Vương
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 运动的学问（A 记者 · B 王老师）',
   preQuiz:[
     {q:'记者说今天来的观众都是什么人？',opts:['王老师的学生','王老师的忠实观众','气功协会的成员'],ans:1},
     {q:'在公园走廊那儿和王老师一起练习的是谁？',opts:['气功协会的气功爱好者','王老师的徒弟','电视台的记者'],ans:0},
     {q:'记者一开始以为气功是什么？',opts:['一种治疗慢性病的药','一种太极剑','力量一爆发就能把砖劈开的功夫'],ans:2},
     {q:'下面哪一项不是王老师说的气功的作用？',opts:['增强体质','辅助治疗某些疾病','提高御寒能力'],ans:2},
     {q:'调查显示，广大群众的健身意识怎么样？',opts:['在逐年下降','在逐年提升','没有什么变化'],ans:1},
     {q:'健康五要素不包括哪一项？',opts:['财富','智力','社交'],ans:0},
     {q:'王老师认为，要健康，首要问题是什么？',opts:['勤于运用大脑','多吃保健食品','每天做剧烈运动'],ans:0},
     {q:'钱学森的很多重要科学理论是怎么来的？',opts:['在实验室里做实验得出来的','端端正正地坐在桌子前面想出来的','听过音乐之后冒出来的'],ans:2},
     {q:'王老师说，人体衰退最慢的器官是什么？',opts:['心脏','大脑','皮肤'],ans:1},
     {q:'为什么说运动贵在坚持？',opts:['因为运动的效果很快就能看到','因为懒惰是人天生的弱点','因为保健食品没有用'],ans:1},
     {q:'冬天运动对身体更为有利的原因之一是什么？',opts:['冬天阳光中没有紫外线','冬天人们吃得更多','冬天空气中二氧化碳浓度比夏天低'],ans:2},
     {q:'补充营养的最佳时机是什么时候？',opts:['运动后的两小时','运动前一小时','第二天早上'],ans:0}
   ],
   lines:[
    {sp:0,zh:'王老师，欢迎您到我们节目来做客。今天来的都是您的忠实观众，大家特别愿意和您这样的大专家进行交流。',
     py:'Wáng lǎoshī, huānyíng nín dào wǒmen jiémù lái zuòkè. Jīntiān lái de dōu shì nín de zhōngshí guānzhòng, dàjiā tèbié yuànyì hé nín zhèyàng de dà zhuānjiā jìnxíng jiāoliú.',
     vn:'(Phóng viên) Thầy Vương, chào mừng thầy đến làm khách của chương trình chúng tôi. Những người đến hôm nay đều là khán giả trung thành của thầy, mọi người đặc biệt muốn được giao lưu với một chuyên gia lớn như thầy.'},
    {sp:1,zh:'“专家”不敢当，有这样的机会，我也很高兴。',
     py:'“Zhuānjiā” bùgǎndāng, yǒu zhèyàng de jīhuì, wǒ yě hěn gāoxìng.',
     vn:'(Thầy Vương) Chữ "chuyên gia" thì tôi không dám nhận, có dịp như thế này tôi cũng rất vui.'},
    {sp:0,zh:'那天采访您，在公园走廊那儿，您和您徒弟是练气功还是练太极剑呢？',
     py:'Nà tiān cǎifǎng nín, zài gōngyuán zǒuláng nàr, nín hé nín túdì shì liàn qìgōng háishi liàn tàijíjiàn ne?',
     vn:'Hôm phỏng vấn thầy ở chỗ hành lang công viên, thầy và đồ đệ của thầy đang tập khí công hay tập thái cực kiếm vậy?'},
    {sp:1,zh:'哦，不是徒弟，是气功协会的气功爱好者。',
     py:'Ò, bú shì túdì, shì qìgōng xiéhuì de qìgōng àihàozhě.',
     vn:'À, không phải đồ đệ đâu, là những người yêu thích khí công của hội khí công.'},
    {sp:0,zh:'你们的气功不是那种力量一爆发，能瞬间把好几块砖就给劈开的啊？',
     py:'Nǐmen de qìgōng bú shì nà zhǒng lìliang yí bàofā, néng shùnjiān bǎ hǎo jǐ kuài zhuān jiù gěi pīkāi de a?',
     vn:'Khí công của các thầy không phải loại sức mạnh vừa bùng ra là trong tích tắc bổ đôi được mấy viên gạch à?'},
    {sp:1,zh:'那只是气功的一种。气功还是中国独特的健身方法之一，可以增强体质，促进慢性病康复，还可以辅助治疗某些疾病。',
     py:'Nà zhǐshì qìgōng de yì zhǒng. Qìgōng hái shì Zhōngguó dútè de jiànshēn fāngfǎ zhī yī, kěyǐ zēngqiáng tǐzhì, cùjìn mànxìngbìng kāngfù, hái kěyǐ fǔzhù zhìliáo mǒuxiē jíbìng.',
     vn:'Đó chỉ là một loại khí công thôi. Khí công còn là một trong những phương pháp rèn luyện sức khoẻ độc đáo của Trung Quốc, có thể tăng cường thể chất, giúp bệnh mãn tính hồi phục, còn có thể hỗ trợ điều trị một số bệnh.'},
    {sp:0,zh:'看来我是误解气功了。最近有个调查，广大群众的健身意识在逐年提升。对于健康，您能对我们说点儿什么吗？',
     py:'Kànlái wǒ shì wùjiě qìgōng le. Zuìjìn yǒu ge diàochá, guǎngdà qúnzhòng de jiànshēn yìshi zài zhúnián tíshēng. Duìyú jiànkāng, nín néng duì wǒmen shuō diǎnr shénme ma?',
     vn:'Xem ra tôi đã hiểu sai về khí công rồi. Gần đây có một cuộc điều tra, ý thức rèn luyện sức khoẻ của đông đảo quần chúng đang tăng lên từng năm. Về sức khoẻ, thầy có thể nói với chúng tôi đôi điều không?'},
    {sp:1,zh:'健康的新概念不仅是不生病，还包括心理健康和社会交往方面的能力，甚至有人提出健康五要素，包括身体、情绪、智力、精神和社交，这五个方面共同构成健康的完美状态。有句名言：生命在于运动，其实健康也在于运动。当然要达到预期效果，怎样运动很重要。',
     py:'Jiànkāng de xīn gàiniàn bùjǐn shì bù shēngbìng, hái bāokuò xīnlǐ jiànkāng hé shèhuì jiāowǎng fāngmiàn de nénglì, shènzhì yǒu rén tíchū jiànkāng wǔ yàosù, bāokuò shēntǐ, qíngxù, zhìlì, jīngshén hé shèjiāo, zhè wǔ ge fāngmiàn gòngtóng gòuchéng jiànkāng de wánměi zhuàngtài. Yǒu jù míngyán: shēngmìng zàiyú yùndòng, qíshí jiànkāng yě zàiyú yùndòng. Dāngrán yào dádào yùqī xiàoguǒ, zěnyàng yùndòng hěn zhòngyào.',
     vn:'Khái niệm mới về sức khoẻ không chỉ là không bị bệnh, mà còn bao gồm sức khoẻ tâm lý và năng lực giao tiếp xã hội; thậm chí có người đưa ra năm yếu tố của sức khoẻ, gồm thể chất, cảm xúc, trí tuệ, tinh thần và giao tiếp xã hội, năm mặt này cùng cấu thành trạng thái sức khoẻ hoàn hảo. Có câu danh ngôn: sự sống nằm ở vận động, thật ra sức khoẻ cũng nằm ở vận động. Tất nhiên muốn đạt hiệu quả mong đợi thì vận động như thế nào là rất quan trọng.'},
    {sp:0,zh:'那您就着重跟我们谈谈运动的学问吧。',
     py:'Nà nín jiù zhuózhòng gēn wǒmen tántan yùndòng de xuéwen ba.',
     vn:'Vậy thầy hãy tập trung nói với chúng tôi về kiến thức vận động nhé.'},
    {sp:1,zh:'要健康，首要问题是勤于运用大脑，人的大脑不用也会生锈。大家知道，人脑左半球主管抽象思维，右半球主管形象思维，二者有分工有联系。左右脑交替使用，思维常可以放射出新的火花。著名科学家钱学森的夫人是音乐家，钱学森的很多重要科学理论不是端端正正地坐在桌子前面想出来的，而是听过音乐之后冒出来的。科学运用左右脑，工作的高效和防止脑衰就成为了可能。大脑潜力巨大，它是人体衰退最慢的器官。一些养生著作中指出，人用脑越勤，大脑各神经细胞之间的联系越多，形成的条件反射也越多。',
     py:'Yào jiànkāng, shǒuyào wèntí shì qínyú yùnyòng dànǎo, rén de dànǎo bú yòng yě huì shēng xiù. Dàjiā zhīdào, rénnǎo zuǒ bànqiú zhǔguǎn chōuxiàng sīwéi, yòu bànqiú zhǔguǎn xíngxiàng sīwéi, èrzhě yǒu fēngōng yǒu liánxì. Zuǒ-yòu nǎo jiāotì shǐyòng, sīwéi cháng kěyǐ fàngshè chū xīn de huǒhuā. Zhùmíng kēxuéjiā Qián Xuésēn de fūrén shì yīnyuèjiā, Qián Xuésēn de hěn duō zhòngyào kēxué lǐlùn bú shì duānduānzhèngzhèng de zuò zài zhuōzi qiánmian xiǎng chūlái de, ér shì tīngguo yīnyuè zhīhòu mào chūlái de. Kēxué yùnyòng zuǒ-yòu nǎo, gōngzuò de gāoxiào hé fángzhǐ nǎo shuāi jiù chéngwéile kěnéng. Dànǎo qiánlì jùdà, tā shì réntǐ shuāituì zuì màn de qìguān. Yìxiē yǎngshēng zhùzuò zhōng zhǐchū, rén yòng nǎo yuè qín, dànǎo gè shénjīng xìbāo zhījiān de liánxì yuè duō, xíngchéng de tiáojiàn fǎnshè yě yuè duō.',
     vn:'Muốn khoẻ mạnh, vấn đề hàng đầu là chăm chỉ sử dụng bộ não, não người không dùng cũng sẽ "gỉ sét". Mọi người đều biết, bán cầu não trái phụ trách tư duy trừu tượng, bán cầu não phải phụ trách tư duy hình tượng, hai bên vừa phân công vừa liên kết. Dùng luân phiên não trái và não phải, tư duy thường có thể loé lên những tia sáng mới. Phu nhân của nhà khoa học nổi tiếng Tiền Học Sâm là nhạc sĩ; nhiều lý thuyết khoa học quan trọng của ông không phải do ngồi ngay ngắn trước bàn mà nghĩ ra, mà là nảy ra sau khi nghe nhạc. Dùng não trái và não phải một cách khoa học thì làm việc hiệu quả cao và ngăn ngừa não suy thoái sẽ trở thành hiện thực. Tiềm năng của não rất lớn, đó là cơ quan suy thoái chậm nhất của cơ thể. Một số sách dưỡng sinh chỉ ra rằng người càng chăm dùng não thì liên kết giữa các tế bào thần kinh trong não càng nhiều, phản xạ có điều kiện được hình thành cũng càng nhiều.'},
    {sp:0,zh:'大脑就像我们身体的指挥中心，大脑不健康，人就谈不上健康。',
     py:'Dànǎo jiù xiàng wǒmen shēntǐ de zhǐhuī zhōngxīn, dànǎo bú jiànkāng, rén jiù tán bu shàng jiànkāng.',
     vn:'Bộ não giống như trung tâm chỉ huy của cơ thể chúng ta, não không khoẻ thì con người chẳng thể nói là khoẻ mạnh.'},
    {sp:1,zh:'对。其次呢，运动贵在坚持。懒惰是人天生的弱点，所以不要迁就自己，要以坚定的意志，坚韧的精神克服惰性，下狠心咬牙坚持，绝不能半途而废。',
     py:'Duì. Qícì ne, yùndòng guì zài jiānchí. Lǎnduò shì rén tiānshēng de ruòdiǎn, suǒyǐ bú yào qiānjiù zìjǐ, yào yǐ jiāndìng de yìzhì, jiānrèn de jīngshén kèfú duòxìng, xià hěnxīn yǎoyá jiānchí, jué bù néng bàntú\'érfèi.',
     vn:'Đúng vậy. Thứ hai, vận động quý ở sự kiên trì. Lười biếng là nhược điểm bẩm sinh của con người, vì vậy đừng chiều theo bản thân, phải dùng ý chí kiên định, tinh thần bền bỉ để khắc phục tính lười, hạ quyết tâm nghiến răng kiên trì, tuyệt đối không được bỏ dở nửa chừng.'},
    {sp:0,zh:'王老师，您怎么好像在说我呢？我就不想虐待自己，所以很难坚持。',
     py:'Wáng lǎoshī, nín zěnme hǎoxiàng zài shuō wǒ ne? Wǒ jiù bù xiǎng nüèdài zìjǐ, suǒyǐ hěn nán jiānchí.',
     vn:'Thầy Vương, sao thầy như đang nói tôi vậy? Tôi chính là không muốn "ngược đãi" bản thân nên rất khó kiên trì.'},
    {sp:1,zh:'怎么会是虐待呢？你以后联系我，我带你锻炼。咱们有计划，有落实。运动健身归根到底是自己的事，胡乱对付其实是在骗自己，坚持运动也是培养人的意志力、完善人格的过程。',
     py:'Zěnme huì shì nüèdài ne? Nǐ yǐhòu liánxì wǒ, wǒ dài nǐ duànliàn. Zánmen yǒu jìhuà, yǒu luòshí. Yùndòng jiànshēn guīgēn-dàodǐ shì zìjǐ de shì, húluàn duìfu qíshí shì zài piàn zìjǐ, jiānchí yùndòng yě shì péiyǎng rén de yìzhìlì, wánshàn réngé de guòchéng.',
     vn:'Sao lại là ngược đãi được? Sau này anh liên hệ tôi, tôi dẫn anh tập. Chúng ta có kế hoạch, có thực hiện. Vận động rèn luyện sức khoẻ suy cho cùng là việc của bản thân, làm qua loa chiếu lệ thật ra là đang tự lừa mình; kiên trì vận động cũng là quá trình rèn luyện ý chí, hoàn thiện nhân cách của con người.'},
    {sp:0,zh:'看来运动真不是小事，还间接体现着我们的品行呢。',
     py:'Kànlái yùndòng zhēn bú shì xiǎoshì, hái jiànjiē tǐxiànzhe wǒmen de pǐnxíng ne.',
     vn:'Xem ra vận động thật chẳng phải chuyện nhỏ, nó còn gián tiếp thể hiện phẩm hạnh của chúng ta nữa.'},
    {sp:1,zh:'另外，冬季健身好处很多，可以提高人的御寒能力；冬天阳光中的紫外线对人体有消毒作用，还能促进对钙的吸收；冬天空气中二氧化碳浓度比夏天低，所以冬天运动对身体更为有利；运动还可以使人心情舒畅。许多保健食品都宣扬能够促进健康，其实运动才是维护健康最好的方法。',
     py:'Lìngwài, dōngjì jiànshēn hǎochù hěn duō, kěyǐ tígāo rén de yùhán nénglì; dōngtiān yángguāng zhōng de zǐwàixiàn duì réntǐ yǒu xiāo dú zuòyòng, hái néng cùjìn duì gài de xīshōu; dōngtiān kōngqì zhōng èryǎnghuàtàn nóngdù bǐ xiàtiān dī, suǒyǐ dōngtiān yùndòng duì shēntǐ gèng wéi yǒulì; yùndòng hái kěyǐ shǐ rén xīnqíng shūchàng. Xǔduō bǎojiàn shípǐn dōu xuānyáng nénggòu cùjìn jiànkāng, qíshí yùndòng cái shì wéihù jiànkāng zuì hǎo de fāngfǎ.',
     vn:'Ngoài ra, tập luyện mùa đông có rất nhiều lợi ích: có thể nâng cao khả năng chống rét; tia tử ngoại trong ánh nắng mùa đông có tác dụng khử trùng cho cơ thể, còn thúc đẩy việc hấp thụ canxi; mùa đông nồng độ CO₂ trong không khí thấp hơn mùa hè, nên vận động mùa đông càng có lợi cho cơ thể; vận động còn giúp tâm trạng thư thái. Nhiều thực phẩm chức năng đều quảng cáo là có thể tăng cường sức khoẻ, thật ra vận động mới là cách tốt nhất để giữ gìn sức khoẻ.'},
    {sp:0,zh:'运动对皮肤是不是也有好处？',
     py:'Yùndòng duì pífū shì bu shì yě yǒu hǎochù?',
     vn:'Vận động có phải cũng có lợi cho da không?'},
    {sp:1,zh:'运动能令全身排汗，毛孔内的垃圾及多余油脂会被排走，皮肤自然会更好。',
     py:'Yùndòng néng lìng quánshēn pái hàn, máokǒng nèi de lājī jí duōyú yóuzhī huì bèi páizǒu, pífū zìrán huì gèng hǎo.',
     vn:'Vận động khiến toàn thân đổ mồ hôi, chất bẩn và dầu thừa trong lỗ chân lông sẽ bị thải ra, da tự nhiên sẽ đẹp hơn.'},
    {sp:0,zh:'运动是不是也要讲究科学？',
     py:'Yùndòng shì bu shì yě yào jiǎngjiu kēxué?',
     vn:'Vận động có phải cũng cần chú trọng tính khoa học không?'},
    {sp:1,zh:'当然。运动健身要循序渐进，不要急于求成；不适合自己身体状况的剧烈运动或大幅度动作尽量别勉强。',
     py:'Dāngrán. Yùndòng jiànshēn yào xúnxù-jiànjìn, bú yào jíyú qiú chéng; bú shìhé zìjǐ shēntǐ zhuàngkuàng de jùliè yùndòng huò dà fúdù dòngzuò jǐnliàng bié miǎnqiǎng.',
     vn:'Đương nhiên. Vận động rèn luyện phải tiến dần từng bước, đừng nóng vội muốn thành công ngay; những môn vận động mạnh hoặc động tác biên độ lớn không phù hợp với tình trạng cơ thể mình thì cố gắng đừng miễn cưỡng.'},
    {sp:0,zh:'运动之后，我们常常觉得又渴又饿，运动和饮食之间有什么讲究吗？',
     py:'Yùndòng zhīhòu, wǒmen chángcháng juéde yòu kě yòu è, yùndòng hé yǐnshí zhījiān yǒu shénme jiǎngjiu ma?',
     vn:'Sau khi vận động, chúng ta thường thấy vừa khát vừa đói, giữa vận động và ăn uống có điều gì cần chú ý không?'},
    {sp:1,zh:'锻炼后是肌肉细胞的“进食时间”，它们渴望得到足够的蛋白质、水和维生素。运动后的两小时，是补充营养的最佳时机。',
     py:'Duànliàn hòu shì jīròu xìbāo de “jìnshí shíjiān”, tāmen kěwàng dédào zúgòu de dànbáizhì, shuǐ hé wéishēngsù. Yùndòng hòu de liǎng xiǎoshí, shì bǔchōng yíngyǎng de zuì jiā shíjī.',
     vn:'Sau khi tập luyện là "giờ ăn" của tế bào cơ, chúng khao khát được cung cấp đủ protein, nước và vitamin. Hai tiếng sau khi vận động là thời điểm tốt nhất để bổ sung dinh dưỡng.'},
    {sp:0,zh:'王老师，您真不愧是这方面的专家，以后要是能定期和您做些交流就好了。',
     py:'Wáng lǎoshī, nín zhēn búkuì shì zhè fāngmiàn de zhuānjiā, yǐhòu yàoshi néng dìngqī hé nín zuò xiē jiāoliú jiù hǎo le.',
     vn:'Thầy Vương, thầy thật xứng đáng là chuyên gia về lĩnh vực này, sau này nếu có thể định kỳ giao lưu với thầy thì tốt quá.'},
    {sp:1,zh:'这是我的联系方式，以后我们可以多联络。希望大家回去以后坚持锻炼，多多保重。',
     py:'Zhè shì wǒ de liánxì fāngshì, yǐhòu wǒmen kěyǐ duō liánluò. Xīwàng dàjiā huíqù yǐhòu jiānchí duànliàn, duōduō bǎozhòng.',
     vn:'Đây là thông tin liên lạc của tôi, sau này chúng ta có thể liên lạc nhiều hơn. Mong mọi người về rồi kiên trì tập luyện, giữ gìn sức khoẻ thật tốt.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 胡乱—随便 lấy từ sách (tr. 117–118, 做一做 判断正误 — đáp án sách: √ × × √); 坚定—坚韧, 联络—联系 tự thêm (đều có trong bài khoá)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'胡乱 — 随便',
   same:'Đều có thể biểu thị "qua loa, không nghiêm túc" (马虎、不认真), đều đứng được trước động từ.',
   sameEx:{zh:'他胡乱／随便吃了两口就走了。',vn:'Anh ấy ăn qua loa hai miếng rồi đi.'},
   items:[
     {word:'胡乱',points:[
       'Là PHÓ TỪ: chỉ đứng trước động từ; không làm vị ngữ, không bổ nghĩa cho danh từ (không nói 说话很胡乱, 胡乱的人).',
       'KHÔNG có dạng lặp AABB (không nói 胡胡乱乱).',
       'Không có cách dùng như liên từ.'
     ],ex:[{zh:'他在纸上胡乱画了几笔。',vn:'Cậu ấy vẽ bừa mấy nét lên giấy.'},
          {zh:'胡乱对付其实是在骗自己。',vn:'Làm qua loa chiếu lệ thật ra là đang tự lừa mình.'}]},
     {word:'随便',points:[
       'Là TÍNH TỪ: làm vị ngữ được (A：中午吃什么呢？B：随便。), bổ nghĩa cho danh từ được (他不是个随便的人).',
       'Có dạng lặp AABB: 随随便便 (我对他这种随随便便的工作态度很不满).',
       'Làm LIÊN TỪ, nghĩa "bất kể, dù" (= 无论): 随便我怎么说，他就是不听.'
     ],ex:[{zh:'A：中午吃什么呢？B：随便。',vn:'A: Trưa ăn gì nhỉ? B: Gì cũng được.'},
          {zh:'随便我怎么说，他就是不听。',vn:'Dù tôi nói thế nào anh ấy cũng không nghe.'}]}
   ],
   quiz:[
     {sentence:'这是正式场合，穿得太＿＿了不合适。',options:['胡乱','随便'],answer:1,why:'Đứng sau 太 làm bổ ngữ / vị ngữ → cần tính từ 随便; 胡乱 là phó từ, không làm vị ngữ.'},
     {sentence:'考试的时候不会的题目别＿＿猜。',options:['胡乱','随便'],answer:0,both:true,why:'Đứng trước động từ 猜 → cả hai đều được; 胡乱猜 nhấn "đoán bừa, không có căn cứ" hợp hơn.'},
     {sentence:'＿＿你去不去，我反正要去。',options:['胡乱','随便'],answer:1,why:'Nghĩa "bất kể" (= 无论) → liên từ 随便; 胡乱 không có cách dùng này.'},
     {sentence:'他做事总是随随便便的，让人很不放心。',options:['胡乱','随便'],answer:1,why:'Dạng lặp AABB 随随便便 — chỉ 随便 có; không có 胡胡乱乱.'}
   ],
   sgk:{
     chung:{t:'都可以表示“马虎、不认真”。',vn:'Đều có thể biểu thị "qua loa, không nghiêm túc".',vd:'他胡乱／随便吃了两口就走了。',vdVn:'Anh ấy ăn qua loa hai miếng rồi đi.'},
     khac:[
       {a:{t:'副词，只能用在动词前边，不能做谓语，不能修饰名词。',vn:'Là phó từ, chỉ đứng trước động từ, không làm vị ngữ, không bổ nghĩa cho danh từ.',vd:'① 他在纸上胡乱画了几笔。（√）　② 他这个人说话很胡乱。（×）',vdVn:'① Cậu ấy vẽ bừa mấy nét lên giấy. (đúng)　② "说话很胡乱" là sai.'},
        b:{t:'形容词，可以做谓语，可以修饰名词。',vn:'Là tính từ, có thể làm vị ngữ, có thể bổ nghĩa cho danh từ.',vd:'① A：中午吃什么呢？B：随便。（√）　② 他不是个随便的人。（√）',vdVn:'① A: Trưa ăn gì nhỉ? B: Gì cũng được. (đúng)　② Anh ấy không phải người tuỳ tiện. (đúng)'}},
       {a:{t:'没有“AABB”的重叠形式。',vn:'Không có dạng lặp AABB.',vd:'胡胡乱乱（×）',vdVn:'"胡胡乱乱" là sai.'},
        b:{t:'有“AABB”的重叠形式。',vn:'Có dạng lặp AABB.',vd:'我对他这种随随便便的工作态度很不满。（√）',vdVn:'Tôi rất không hài lòng với thái độ làm việc tuỳ tiện như thế của anh ta. (đúng)'}},
       {a:{t:'没有右边这个用法。',vn:'Không có cách dùng như cột bên phải.'},
        b:{t:'可以做连词，表示“无论”的意思。',vn:'Có thể làm liên từ, mang nghĩa "bất kể / dù".',vd:'随便我怎么说，他就是不听。',vdVn:'Dù tôi nói thế nào anh ấy cũng không nghe.'}}
     ],
     deLam:'判断正误 — Tích vào cột đúng (√) hay sai (×) cho từng câu',
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'我当时只是随便答应的，没想到他认真了。',dap:[true,false],
        giai:'ĐÚNG (đáp án sách √). 随便 đứng trước động từ 答应 với nghĩa "qua loa, không nghiêm túc" — cách dùng chung của cả hai từ.'},
       {s:'A：假期想去哪儿玩儿？B：胡乱。',dap:[false,true],
        giai:'SAI (đáp án sách ×). Câu trả lời một mình = làm vị ngữ → phải dùng tính từ 随便 (B：随便。); 胡乱 là phó từ, không đứng một mình, không làm vị ngữ.'},
       {s:'话剧也好，京剧也好，胡乱什么戏，他都爱看。',dap:[false,true],
        giai:'SAI (đáp án sách ×). Ở đây cần nghĩa "bất kể" (= 无论) → liên từ 随便: 随便什么戏，他都爱看; 胡乱 không có cách dùng này.'},
       {s:'无数事实告诉我们：没有人可以随随便便成功。',dap:[true,false],
        giai:'ĐÚNG (đáp án sách √). 随便 có dạng lặp AABB 随随便便 (dễ dàng, không cần cố gắng) làm trạng ngữ trước 成功.'}
     ]
   }},

  {pair:'坚定 — 坚韧',
   same:'Đều là tính từ mang nghĩa tốt, đều tả ý chí, tinh thần mạnh mẽ; bài khoá dùng cả hai: 以坚定的意志，坚韧的精神克服惰性.',
   sameEx:{zh:'他有坚定／坚韧的意志。',vn:'Anh ấy có ý chí kiên định / bền bỉ.'},
   items:[
     {word:'坚定',points:[
       'Nhấn VỮNG VÀNG, KHÔNG DAO ĐỘNG về lập trường, niềm tin, thái độ, quyết định: 坚定的立场 / 信念, 态度坚定.',
       'Làm trạng ngữ: 坚定地说 / 坚定地走下去; làm động từ mang tân ngữ: 坚定信心 (củng cố niềm tin).'
     ],ex:[{zh:'她的态度非常坚定，谁也改变不了她的决定。',vn:'Thái độ của cô ấy vô cùng kiên định, không ai thay đổi được quyết định của cô.'},
          {zh:'遇到挫折时，更要坚定信心。',vn:'Khi gặp thất bại càng phải vững vàng niềm tin.'}]},
     {word:'坚韧',points:[
       'Nhấn BỀN BỈ, DẺO DAI, CHỊU ĐỰNG được gian khổ, áp lực lâu dài mà không gục ngã: 坚韧的性格, 坚韧不拔.',
       'Tả được vật chất "vừa chắc vừa dẻo" (竹子很坚韧); không mang tân ngữ, không nói 坚韧地说.'
     ],ex:[{zh:'凭着坚韧不拔的精神，他终于走出了困境。',vn:'Nhờ tinh thần kiên cường bất khuất, anh ấy cuối cùng đã thoát khỏi nghịch cảnh.'},
          {zh:'竹子质地坚韧，不容易折断。',vn:'Tre có chất liệu dẻo dai, không dễ gãy.'}]}
   ],
   quiz:[
     {sentence:'面对记者的提问，他＿＿地说：“我绝不会放弃。”',options:['坚定','坚韧'],answer:0,why:'Làm trạng ngữ tả thái độ khi nói, không dao động → 坚定地说; 坚韧 không dùng như vậy.'},
     {sentence:'这种绳子很＿＿，挂再重的东西也不会断。',options:['坚定','坚韧'],answer:1,why:'Tả vật liệu chắc và dẻo, khó đứt → 坚韧.'},
     {sentence:'只有＿＿信心，才能战胜困难。',options:['坚定','坚韧'],answer:0,why:'Làm động từ mang tân ngữ (坚定信心 = củng cố niềm tin) → chỉ 坚定.'},
     {sentence:'马拉松最考验一个人＿＿不拔的毅力。',options:['坚定','坚韧'],answer:1,why:'Thành ngữ cố định 坚韧不拔 = bền bỉ, kiên cường.'}
   ]},

  {pair:'联络 — 联系',
   same:'Đều là động từ, đều chỉ việc giữ liên lạc, qua lại giữa người với người; bài khoá: 你以后联系我…… / 以后我们可以多联络.',
   sameEx:{zh:'毕业以后我们一直保持联络／联系。',vn:'Sau khi tốt nghiệp chúng tôi vẫn luôn giữ liên lạc.'},
   items:[
     {word:'联络',points:[
       'Chỉ dùng cho quan hệ, qua lại giữa NGƯỜI với người, tổ chức với tổ chức; hay đi với 联络感情 (vun đắp tình cảm), 联络人, 失去联络.',
       'Ít dùng hơn, văn phong hơi trang trọng; KHÔNG chỉ mối liên hệ giữa các sự vật, khái niệm.'
     ],ex:[{zh:'以后我们可以多联络。',vn:'Sau này chúng ta có thể liên lạc nhiều hơn.'},
          {zh:'聚会是联络感情的好机会。',vn:'Họp mặt là dịp tốt để vun đắp tình cảm.'}]},
     {word:'联系',points:[
       'Dùng rộng hơn: vừa là liên lạc giữa người với người (联系我, 联系方式), vừa là MỐI LIÊN HỆ giữa các sự vật (二者有分工有联系, 理论联系实际).',
       'Làm danh từ rất thường gặp: 有联系, 没有联系, 密切的联系.'
     ],ex:[{zh:'大脑各神经细胞之间的联系越多，形成的条件反射也越多。',vn:'Liên kết giữa các tế bào thần kinh trong não càng nhiều, phản xạ có điều kiện càng nhiều.'},
          {zh:'学习要理论联系实际。',vn:'Học tập phải gắn lý luận với thực tế.'}]}
   ],
   quiz:[
     {sentence:'人脑左半球和右半球有分工也有＿＿。',options:['联络','联系'],answer:1,why:'Mối liên hệ giữa hai sự vật (hai bán cầu não) → chỉ dùng 联系.'},
     {sentence:'周末一起吃顿饭，也是＿＿感情的好办法。',options:['联络','联系'],answer:0,why:'Cụm cố định 联络感情 = vun đắp tình cảm.'},
     {sentence:'到了以后记得跟家里＿＿。',options:['联络','联系'],answer:1,both:true,why:'Liên lạc giữa người với người → cả hai đều được; khẩu ngữ thường dùng 联系 hơn.'},
     {sentence:'学习要理论＿＿实际。',options:['联络','联系'],answer:1,why:'理论联系实际 = gắn lý luận với thực tế (quan hệ giữa hai khái niệm) → 联系.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'徒弟',hv:'đồ đệ',vn:'đồ đệ, học trò',note:'Trùng khít; 收徒弟 = nhận đồ đệ.'},
    {zh:'气功',hv:'khí công',vn:'khí công',note:'Trùng khít; 练气功 = tập khí công.'},
    {zh:'协会',hv:'hiệp hội',vn:'hội, hiệp hội',note:'Trùng khít; 气功协会 = hội khí công.'},
    {zh:'群众',hv:'quần chúng',vn:'quần chúng, người dân',note:'Trùng khít; 广大群众 = đông đảo quần chúng.'},
    {zh:'要素',hv:'yếu tố',vn:'yếu tố',note:'Trùng khít (yếu tố cấu thành); 健康五要素.'},
    {zh:'夫人',hv:'phu nhân',vn:'phu nhân, vợ',note:'Trùng khít; cách gọi tôn trọng vợ người khác.'},
    {zh:'潜力',hv:'tiềm lực',vn:'tiềm năng',note:'Tiếng Việt quen nói "tiềm năng"; 很有潜力 = rất có tiềm năng.'},
    {zh:'衰退',hv:'suy thoái',vn:'suy giảm, suy thoái',note:'Trùng khít; 记忆力衰退 = trí nhớ suy giảm.'},
    {zh:'弱点',hv:'nhược điểm',vn:'nhược điểm, điểm yếu',note:'Trùng khít.'},
    {zh:'坚定',hv:'kiên định',vn:'kiên định',note:'Trùng khít; 坚定的意志 = ý chí kiên định.'},
    {zh:'虐待',hv:'ngược đãi',vn:'ngược đãi',note:'Trùng khít; bài khoá dùng đùa (大词小用): 不想虐待自己.'},
    {zh:'间接',hv:'gián tiếp',vn:'gián tiếp',note:'Trùng khít; 间 đọc jiàn.'},
    {zh:'品行',hv:'phẩm hạnh',vn:'phẩm hạnh, hạnh kiểm',note:'Trùng khít.'},
    {zh:'紫外线',hv:'tử ngoại tuyến',vn:'tia tử ngoại',note:'紫 = tử (tím), 外 = ngoại, 线 = tuyến (tia).'},
    {zh:'消毒',hv:'tiêu độc',vn:'khử trùng, tiêu độc',note:'Tiếng Việt cũng nói "tiêu độc"; hay dùng "khử trùng".'},
    {zh:'反射',hv:'phản xạ',vn:'phản xạ',note:'Trùng khít; 条件反射 = phản xạ có điều kiện.'},
    {zh:'定期',hv:'định kỳ',vn:'định kỳ',note:'Trùng khít; 定期体检 = khám sức khoẻ định kỳ.'},
    {zh:'联络',hv:'liên lạc',vn:'liên lạc',note:'Trùng khít; 保持联络 = giữ liên lạc.'},
    {zh:'保重',hv:'bảo trọng',vn:'bảo trọng',note:'Trùng khít; lời chúc khi chia tay.'},
    {zh:'维生素',hv:'duy sinh tố',vn:'vitamin, sinh tố',note:'Tiếng Việt "sinh tố" (vitamin) cùng gốc 生素.'}
  ],
  idiom:[
    {zh:'半途而废',hv:'bán đồ nhi phế',vn:'bỏ dở nửa chừng',note:'半途 = nửa đường, 废 = bỏ → đi nửa đường thì bỏ.'},
    {zh:'循序渐进',hv:'tuần tự tiệm tiến',vn:'tiến dần từng bước',note:'循 = theo, 序 = thứ tự, 渐 = dần, 进 = tiến.'},
    {zh:'急于求成',hv:'cấp ư cầu thành',vn:'nóng vội muốn thành công',note:'急于 = vội muốn, 求成 = cầu thành → trái với 循序渐进.'},
    {zh:'归根到底',hv:'quy căn đáo để',vn:'suy cho cùng',note:'归根 = trở về gốc, 到底 = đến đáy → xét đến tận gốc (điểm ngữ pháp 2).'},
    {zh:'端端正正',hv:'đoan đoan chính chính',vn:'ngay ngắn, nghiêm chỉnh',note:'Dạng lặp AABB của 端正 (đoan chính).'},
    {zh:'二氧化碳',hv:'nhị dưỡng hoá thán',vn:'khí CO₂',note:'二 = hai, 氧 = ôxy (dưỡng khí), 化 = hoá, 碳 = than (cacbon).'}
  ],
  trap:[
    {zh:'忠实',hv:'trung thực',vn:'trung thành',
     warn:'"Trung thực" tiếng Việt = thật thà (诚实). 忠实 chủ yếu là TRUNG THÀNH: 忠实观众 = khán giả trung thành, không phải "khán giả thật thà"; hoặc "sát với nguyên bản": 忠实于原文.'},
    {zh:'宣扬',hv:'tuyên dương',vn:'rêu rao, quảng bá',
     warn:'"Tuyên dương" tiếng Việt = khen ngợi công khai (表扬 / 表彰). 宣扬 là tuyên truyền, nói to cho mọi người biết, hay mang ý chê: 保健食品都宣扬能够促进健康 = quảng cáo rùm beng là tăng cường sức khoẻ.'},
    {zh:'剧烈',hv:'kịch liệt',vn:'(vận động) mạnh, dữ dội',
     warn:'"Kịch liệt" tiếng Việt hay dùng cho phản đối, tranh cãi (= 激烈). 剧烈 chủ yếu tả cường độ thể chất: 剧烈运动 = vận động mạnh, 剧烈的疼痛 = cơn đau dữ dội.'},
    {zh:'放射',hv:'phóng xạ',vn:'toả ra, phát ra',
     warn:'"Phóng xạ" tiếng Việt gần như chỉ bức xạ hạt nhân. 放射 là toả ra từ một tâm: 思维放射出新的火花 = tư duy loé lên tia sáng mới, không liên quan phóng xạ.'},
    {zh:'落实',hv:'lạc thực',vn:'thực hiện đến nơi đến chốn',
     warn:'Âm "lạc thực" không dùng trong tiếng Việt, đừng đoán theo chữ 落 (rơi). 落实计划 = đưa kế hoạch vào thực hiện cụ thể.'},
    {zh:'迁就',hv:'thiên tựu',vn:'nhân nhượng, chiều theo',
     warn:'迁 (thiên = dời) + 就 (tựu = đến gần) → "dời mình lại gần" ý người khác = nhân nhượng. Không liên quan "thiên" (trời).'},
    {zh:'幅度',hv:'phúc độ',vn:'biên độ, mức độ',
     warn:'Tiếng Việt nói "biên độ", không nói "phúc độ". 大幅度提高 = tăng mạnh, 动作幅度 = biên độ động tác.'},
    {zh:'不愧',hv:'bất quý',vn:'xứng đáng, không hổ danh',
     warn:'愧 = hổ thẹn (không phải 贵 "quý giá"). 不愧是专家 = không hổ danh là chuyên gia — lời khen.'},
    {zh:'狠心',hv:'ngận tâm',vn:'quyết tâm dứt khoát; nhẫn tâm',
     warn:'下狠心 = hạ quyết tâm (nghĩa tốt), nhưng 狠心的人 = người nhẫn tâm (nghĩa xấu) — phân biệt theo ngữ cảnh.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'忠实',right:'观众'},
  {left:'练气功还是练',right:'太极剑'},
  {left:'气功',right:'协会'},
  {left:'力量一',right:'爆发'},
  {left:'把砖',right:'劈开'},
  {left:'增强',right:'体质'},
  {left:'辅助治疗',right:'某些疾病'},
  {left:'健身意识在逐年',right:'提升'},
  {left:'健康五',right:'要素'},
  {left:'达到',right:'预期效果'},
  {left:'勤于运用',right:'大脑'},
  {left:'放射出新的',right:'火花'},
  {left:'形成的条件',right:'反射'},
  {left:'人天生的',right:'弱点'},
  {left:'克服',right:'惰性'},
  {left:'下狠心',right:'咬牙坚持'},
  {left:'有计划，有',right:'落实'},
  {left:'间接体现着',right:'品行'},
  {left:'促进对钙的',right:'吸收'},
  {left:'使人心情',right:'舒畅'},
  {left:'补充',right:'蛋白质'},
  {left:'定期',right:'体检'},
  {left:'多多',right:'保重'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'王老师夸我汉语说得好，我连忙说：“',blank:'不敢当',post:'，我还差得远呢。”',hint:'(không dám nhận)',ans:'不敢当'},
  {pre:'下课铃一响，',blank:'走廊',post:'里立刻挤满了说说笑笑的学生。',hint:'(hành lang)',ans:'走廊'},
  {pre:'老师傅把自己的手艺毫无保留地传授给了',blank:'徒弟',post:'。',hint:'(đồ đệ)',ans:'徒弟'},
  {pre:'每天清晨，公园里都有不少老人在练',blank:'气功',post:'、打太极拳。',hint:'(khí công)',ans:'气功'},
  {pre:'爷爷退休以后迷上了太极',blank:'剑',post:'，每天早上都要练一个小时。',hint:'(kiếm)',ans:'剑'},
  {pre:'',blank:'哦',post:'，原来你们早就认识啊，那我就不用介绍了。',hint:'(à — chợt hiểu ra)',ans:'哦'},
  {pre:'我是武术',blank:'协会',post:'的成员，每个周末都和大家一起练习。',hint:'(hội)',ans:'协会'},
  {pre:'表演者一掌下去，三块砖就被',blank:'劈',post:'成了两半。',hint:'(bổ, chặt)',ans:'劈'},
  {pre:'政府在制定政策之前，应该广泛听取',blank:'群众',post:'的意见。',hint:'(quần chúng)',ans:'群众'},
  {pre:'由于环境污染，这种鸟的数量',blank:'逐年',post:'减少，已经濒临灭绝。',hint:'(từng năm)',ans:'逐年'},
  {pre:'经常玩儿一些益智游戏，对开发孩子的',blank:'智力',post:'很有帮助。',hint:'(trí tuệ)',ans:'智力'},
  {pre:'面对市场竞争，',blank:'首要',post:'任务是保证产品质量。',hint:'(hàng đầu)',ans:'首要'},
  {pre:'那辆自行车在院子里放了一个冬天，车链子都',blank:'生锈',post:'了。',hint:'(bị gỉ)',ans:'生锈'},
  {pre:'总统在',blank:'夫人',post:'的陪同下参观了这所学校。',hint:'(phu nhân)',ans:'夫人'},
  {pre:'小学生们',blank:'端端正正',post:'地坐在教室里，认真听老师讲课。',hint:'(ngay ngắn)',ans:'端端正正'},
  {pre:'教练认为这个小运动员很有',blank:'潜力',post:'，将来一定能拿冠军。',hint:'(tiềm năng)',ans:'潜力'},
  {pre:'这位教授一生出版了十几部学术',blank:'著作',post:'。',hint:'(tác phẩm, công trình)',ans:'著作'},
  {pre:'雪地会',blank:'反射',post:'大量的阳光，所以滑雪时一定要戴墨镜。',hint:'(phản xạ)',ans:'反射'},
  {pre:'骗子常常利用老年人怕孤独的',blank:'弱点',post:'来骗钱。',hint:'(điểm yếu)',ans:'弱点'},
  {pre:'为了减肥，她下了',blank:'狠心',post:'，晚上再也不吃零食了。',hint:'(quyết tâm)',ans:'狠心'},
  {pre:'论文已经写了一大半了，现在放弃就等于',blank:'半途而废',post:'。',hint:'(bỏ dở nửa chừng)',ans:'半途而废'},
  {pre:'',blank:'虐待',post:'动物是一种不道德的行为，在很多国家还是违法的。',hint:'(ngược đãi)',ans:'虐待'},
  {pre:'计划制订得再好，不',blank:'落实',post:'也是一句空话。',hint:'(thực hiện)',ans:'落实'},
  {pre:'父母可以给建议，但选什么专业，',blank:'归根到底',post:'还得你自己决定。',hint:'(suy cho cùng)',ans:'归根到底'},
  {pre:'公司招人不但看能力，还要考察一个人的',blank:'品行',post:'。',hint:'(phẩm hạnh)',ans:'品行'},
  {pre:'中午',blank:'紫外线',post:'最强，出门最好戴帽子、涂防晒霜。',hint:'(tia cực tím)',ans:'紫外线'},
  {pre:'饭店的碗筷每次用完都要高温',blank:'消毒',post:'。',hint:'(khử trùng)',ans:'消毒'},
  {pre:'最近的一次体检结果显示，我有点儿缺',blank:'钙',post:'。',hint:'(canxi)',ans:'钙'},
  {pre:'树木能吸收',blank:'二氧化碳',post:'，放出氧气。',hint:'(khí CO₂)',ans:'二氧化碳'},
  {pre:'运动能令全身排汗，毛',blank:'孔',post:'内的垃圾会被排走。',hint:'(lỗ)',ans:'孔'},
  {pre:'学外语要',blank:'循序渐进',post:'，先打好基础，再慢慢提高。',hint:'(từng bước một)',ans:'循序渐进'},
  {pre:'他太',blank:'急于求成',post:'了，刚学了三个月就想参加比赛。',hint:'(nóng vội)',ans:'急于求成'},
  {pre:'鸡蛋、牛奶和鱼肉都富含优质',blank:'蛋白质',post:'。',hint:'(protein)',ans:'蛋白质'},
  {pre:'橙子和猕猴桃富含',blank:'维生素',post:'C，可以增强免疫力。',hint:'(vitamin)',ans:'维生素'},
  {pre:'公司每年都安排员工',blank:'定期',post:'体检。',hint:'(định kỳ)',ans:'定期'},
  {pre:'爸爸，天冷了，您一个人在家要多',blank:'保重',post:'身体。',hint:'(giữ gìn)',ans:'保重'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (逐 · 归根到底) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['广大群众','的','健身意识','在','逐年','提升','。'],ans:'广大群众的健身意识在逐年提升。',audio:'广大群众的健身意识在逐年提升。'},
  {words:['雨季快到了','，','对大大小小的水库','，','要','逐个','检查','。'],ans:'雨季快到了，对大大小小的水库，要逐个检查。',audio:'雨季快到了，对大大小小的水库，要逐个检查。'},
  {words:['他','逐字逐句地','反复推敲','，','终于','完成了','翻译工作','。'],ans:'他逐字逐句地反复推敲，终于完成了翻译工作。',audio:'他逐字逐句地反复推敲，终于完成了翻译工作。'},
  {words:['由于','经营有道','，','小店的','营业额','逐日','增加','。'],ans:'由于经营有道，小店的营业额逐日增加。',audio:'由于经营有道，小店的营业额逐日增加。'},
  {words:['运动健身','归根到底','是','自己的事','。'],ans:'运动健身归根到底是自己的事。',audio:'运动健身归根到底是自己的事。'},
  {words:['世界','是你们的','，','也是我们的','，','但','归根结底','是你们的','。'],ans:'世界是你们的，也是我们的，但归根结底是你们的。',audio:'世界是你们的，也是我们的，但归根结底是你们的。'},
  {words:['所谓史学','，','说到底','就是','研究人类社会历史','的','一门学科','。'],ans:'所谓史学，说到底就是研究人类社会历史的一门学科。',audio:'所谓史学，说到底就是研究人类社会历史的一门学科。'},
  {words:['他','却告诉我','没钱','，','说穿了','就是','不想借','。'],ans:'他却告诉我没钱，说穿了就是不想借。',audio:'他却告诉我没钱，说穿了就是不想借。'},
  {words:['懒惰','是','人','天生的','弱点','，','所以','不要','迁就自己','。'],ans:'懒惰是人天生的弱点，所以不要迁就自己。',audio:'懒惰是人天生的弱点，所以不要迁就自己。'},
  {words:['运动健身','要','循序渐进','，','不要','急于求成','。'],ans:'运动健身要循序渐进，不要急于求成。',audio:'运动健身要循序渐进，不要急于求成。'},
  {words:['运动后的','两小时','，','是','补充营养','的','最佳时机','。'],ans:'运动后的两小时，是补充营养的最佳时机。',audio:'运动后的两小时，是补充营养的最佳时机。'},
  {words:['您','真','不愧是','这方面的','专家','。'],ans:'您真不愧是这方面的专家。',audio:'您真不愧是这方面的专家。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'我是这个节目的____观众，十年来几乎一期也没错过。',opts:['忠实','诚实','老实','真实'],ans:0,
   exp:'忠实观众 = khán giả trung thành. 诚实 / 老实 = thật thà (tả tính cách, không đi với 观众 theo nghĩa này); 真实 = chân thực (tả sự việc).'},
  {wrong:'他的话音刚落，台下就____出一阵热烈的掌声。',opts:['发生','爆发','发布','爆炸'],ans:1,
   exp:'爆发出 + 掌声 / 笑声 = vang lên (bùng lên). 发生 = xảy ra (không đi với 出 + 掌声); 发布 = công bố; 爆炸 = nổ (bom).'},
  {wrong:'你____了我的意思，我不是批评你，而是想提醒你。',opts:['理解','了解','误解','解释'],ans:2,
   exp:'Vế sau đính chính (我不是……而是……) → trước đó người kia đã HIỂU SAI → 误解. 理解 = thấu hiểu; 了解 = tìm hiểu; 解释 = giải thích.'},
  {wrong:'时间、地点、人物是记叙文的三个基本____。',opts:['因素','要点','要求','要素'],ans:3,
   exp:'Thành phần CẤU THÀNH không thể thiếu → 要素 (记叙文的要素). 因素 = nhân tố ảnh hưởng, nguyên nhân; 要点 = ý chính; 要求 = yêu cầu.'},
  {wrong:'这次活动的效果远远超出了我们的____，参加的人比去年多了一倍。',opts:['预报','预期','预防','预约'],ans:1,
   exp:'超出预期 = vượt dự tính, vượt mong đợi. 预报 = dự báo (thời tiết); 预防 = phòng ngừa; 预约 = đặt hẹn.'},
  {wrong:'左右脑交替使用，思维常可以____出新的火花。',opts:['发射','反射','放松','放射'],ans:3,
   exp:'放射出火花 = toả ra, loé lên tia sáng (từ một tâm). 发射 = phóng (tên lửa, vệ tinh); 反射 = phản xạ, dội lại; 放松 = thả lỏng.'},
  {wrong:'人上了年纪，记忆力会逐渐____，所以要经常动脑。',opts:['衰退','后退','撤退','退休'],ans:0,
   exp:'记忆力衰退 = trí nhớ suy giảm. 后退 = lùi về sau (vị trí); 撤退 = rút lui (quân đội — bài 27 扩展); 退休 = nghỉ hưu.'},
  {wrong:'对孩子的坏习惯不能一味____，否则会害了他。',opts:['照顾','将就','迁就','讲究'],ans:2,
   exp:'迁就 + khuyết điểm / người = nuông chiều, nhân nhượng. 照顾 = chăm sóc (nghĩa tốt); 将就 (bài 14) = tạm bợ, ưng tạm; 讲究 = chú trọng.'},
  {wrong:'不管别人怎么劝，她的态度都非常____，谁也改变不了她的决定。',opts:['坚硬','坚韧','稳定','坚定'],ans:3,
   exp:'态度坚定 = thái độ kiên định, không dao động (词语辨析 坚定—坚韧). 坚硬 (bài 20) = cứng (vật); 坚韧 = bền bỉ, dẻo dai (không đi với 态度); 稳定 = ổn định (tình hình, giá cả).'},
  {wrong:'竹子质地____，可以用来编织各种生活用品。',opts:['坚定','坚韧','坚决','坚持'],ans:1,
   exp:'Tả vật liệu vừa chắc vừa dẻo → 坚韧. 坚定 / 坚决 tả thái độ, ý chí; 坚持 là động từ.'},
  {wrong:'他在纸上____画了几笔，就说画完了。',opts:['混乱','乱七八糟','胡乱','糊涂'],ans:2,
   exp:'Phó từ 胡乱 + V = làm bừa, qua quýt. 混乱 = hỗn loạn (tính từ); 乱七八糟 = lộn xộn (tả trạng thái, không đứng ngay trước 画); 糊涂 = hồ đồ.'},
  {wrong:'父母的一言一行都会直接或____地影响孩子。',opts:['间接','连接','接连','迎接'],ans:0,
   exp:'直接或间接 = trực tiếp hoặc gián tiếp. 连接 = nối liền; 接连 (bài 5) = liên tiếp; 迎接 = đón tiếp.'},
  {wrong:'许多保健食品都____能够促进健康，其实运动才是维护健康最好的方法。',opts:['表扬','发扬','宣布','宣扬'],ans:3,
   exp:'宣扬 = rêu rao, quảng bá rộng rãi. 表扬 = khen ngợi; 发扬 = phát huy (truyền thống); 宣布 = tuyên bố (quyết định, tin tức).'},
  {wrong:'饭后马上做____运动，容易引起肚子疼。',opts:['激烈','热烈','剧烈','强烈'],ans:2,
   exp:'剧烈运动 = vận động mạnh. 激烈 dùng cho 竞争 / 争论 / 比赛; 热烈 = nhiệt liệt (掌声, 欢迎); 强烈 = mãnh liệt (愿望, 反对, 阳光).'},
  {wrong:'经过一个学期的努力，他的成绩大____提高了。',opts:['程度','幅度','角度','温度'],ans:1,
   exp:'大幅度 + 提高 = tăng mạnh. 程度 = mức độ (không nói 大程度提高); 角度 = góc độ; 温度 = nhiệt độ.'},
  {wrong:'他在这个专业成就非凡，____是行业楷模。',opts:['不愧','不免','不妨','不禁'],ans:0,
   exp:'不愧是 + N = xứng đáng là N (khen). 不免 (bài 21) = khó tránh khỏi; 不妨 (bài 12) = cứ việc; 不禁 (bài 15) = không kìm được.'},
  {wrong:'毕业十年了，我和几个老同学一直保持着____。',opts:['联合','联想','联络','络绎'],ans:2,
   exp:'保持联络 = giữ liên lạc. 联合 = liên hợp, hợp lại; 联想 = liên tưởng; 络绎 chỉ dùng trong 络绎不绝.'},
  {wrong:'出了一身汗以后，我觉得浑身____，烦恼也都忘了。',opts:['顺利','畅销','通畅','舒畅'],ans:3,
   exp:'浑身舒畅 = toàn thân khoan khoái. 顺利 = thuận lợi (công việc); 畅销 (bài 16) = bán chạy; 通畅 = thông suốt (đường sá, ống dẫn).'}
];



// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ HSK 6 bài 1–27 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Lười biếng là nhược điểm bẩm sinh của con người, vì vậy muốn kiên trì tập luyện thì đừng chiều theo bản thân.',zh:'懒惰是人天生的弱点，所以要想坚持锻炼，就不要迁就自己。',py:'Lǎnduò shì rén tiānshēng de ruòdiǎn, suǒyǐ yào xiǎng jiānchí duànliàn, jiù bú yào qiānjiù zìjǐ.',goiY:['天生','弱点','要想……就……','迁就'],giai:'天生 (bài 7) = bẩm sinh; 迁就 + 自己 = chiều theo bản thân; 要想……，就…… = muốn … thì …; "đừng" trong lời khuyên dùng 不要.'},
  {vi:'Kế hoạch lập ra dù hay đến đâu, nếu không thực hiện đến nơi đến chốn thì cũng chỉ là lời nói suông.',zh:'计划制订得再好，如果不落实，也只是一句空话。',py:'Jìhuà zhìdìng de zài hǎo, rúguǒ bú luòshí, yě zhǐ shì yí jù kōnghuà.',goiY:['再……也……','落实','空话'],giai:'V得再 + Adj，也…… = dù … đến đâu cũng …; "thực hiện đến nơi đến chốn" = 落实 (không dịch 实行 — bài 1, dùng cho chế độ, chính sách).'},
  {vi:'Dù làm việc gì cũng không được bỏ dở nửa chừng, suy cho cùng, thành công phải dựa vào sự kiên trì.',zh:'无论做什么事情都不能半途而废，归根到底，成功要靠坚持。',py:'Wúlùn zuò shénme shìqing dōu bù néng bàntú\'érfèi, guīgēn-dàodǐ, chénggōng yào kào jiānchí.',goiY:['无论……都……','半途而废','归根到底','靠'],giai:'Đáp án sách 练习2 (5): 无论做什么事情都不能半途而废; 归根到底 là xen ngữ (điểm ngữ pháp 2), tách bằng dấu phẩy khi đứng đầu vế.'},
  {vi:'Học ngoại ngữ phải tiến dần từng bước, nếu quá nóng vội thì ngược lại sẽ mất nhiều hơn được.',zh:'学外语要循序渐进，如果太急于求成，反而会得不偿失。',py:'Xué wàiyǔ yào xúnxù-jiànjìn, rúguǒ tài jíyú qiú chéng, fǎn\'ér huì dé bù cháng shī.',goiY:['循序渐进','急于求成','反而','得不偿失'],giai:'循序渐进 ↔ 急于求成 là cặp trái nghĩa của bài; 反而 = ngược lại; 得不偿失 (bài 20) = được không bù mất.'},
  {vi:'Tuy thực phẩm chức năng đều quảng cáo là có thể tăng cường sức khoẻ, nhưng vận động mới là cách tốt nhất để giữ gìn sức khoẻ.',zh:'虽然保健食品都宣扬能够促进健康，但运动才是维护健康最好的方法。',py:'Suīrán bǎojiàn shípǐn dōu xuānyáng nénggòu cùjìn jiànkāng, dàn yùndòng cái shì wéihù jiànkāng zuì hǎo de fāngfǎ.',goiY:['虽然……但……','宣扬','才是','维护'],giai:'"quảng cáo rùm beng" = 宣扬 (không phải "tuyên dương" = 表扬); ……才是…… nhấn "mới là"; 维护 (bài 23) + 健康.'},
  {vi:'Theo điều tra, ý thức rèn luyện sức khoẻ của người dân đang tăng lên từng năm, người đến công viên tập khí công cũng ngày càng đông.',zh:'据调查，群众的健身意识在逐年提升，到公园练气功的人也越来越多。',py:'Jù diàochá, qúnzhòng de jiànshēn yìshi zài zhúnián tíshēng, dào gōngyuán liàn qìgōng de rén yě yuè lái yuè duō.',goiY:['据调查','群众','逐年','气功'],giai:'逐年 + V (điểm ngữ pháp 1: 逐 = lần lượt theo từng …); "đang" = 在 trước 逐年; 意识 (bài 1).'},
  {vi:'Người già vận động không nên quá mạnh, những động tác biên độ lớn không hợp với tình trạng cơ thể thì tốt nhất đừng miễn cưỡng.',zh:'老年人运动不宜太剧烈，不适合身体状况的大幅度动作最好别勉强。',py:'Lǎoniánrén yùndòng bùyí tài jùliè, bú shìhé shēntǐ zhuàngkuàng de dà fúdù dòngzuò zuìhǎo bié miǎnqiǎng.',goiY:['不宜','剧烈','幅度','勉强'],giai:'"vận động mạnh" = 剧烈 (không dùng 激烈); 大幅度动作 = động tác biên độ lớn; 勉强 (bài 5) = miễn cưỡng, cố quá sức; 不宜 = không nên (văn viết).'},
  {vi:'Kết quả khám sức khoẻ cho thấy tôi hơi thiếu canxi, bác sĩ dặn tôi phơi nắng nhiều hơn và định kỳ đến bệnh viện kiểm tra.',zh:'体检结果显示我有点儿缺钙，医生嘱咐我多晒太阳，并定期到医院检查。',py:'Tǐjiǎn jiéguǒ xiǎnshì wǒ yǒudiǎnr quē gài, yīshēng zhǔfù wǒ duō shài tàiyáng, bìng dìngqī dào yīyuàn jiǎnchá.',goiY:['缺钙','嘱咐','并','定期'],giai:'嘱咐 (bài 25) + người + V = dặn ai làm gì; 并 nối hai việc được dặn; 定期 đứng trước động từ làm trạng ngữ.'},
  {vi:'Cô ấy không hổ danh là vận động viên marathon, không những thể lực tốt mà còn có ý chí vô cùng bền bỉ.',zh:'她不愧是马拉松运动员，不但体力好，而且有着非常坚韧的意志。',py:'Tā búkuì shì mǎlāsōng yùndòngyuán, búdàn tǐlì hǎo, érqiě yǒuzhe fēicháng jiānrèn de yìzhì.',goiY:['不愧是','不但……而且……','坚韧','意志'],giai:'不愧是 + N = không hổ danh là N; "ý chí bền bỉ" = 坚韧的意志 (坚定 nhấn không dao động — xem 词语辨析); 意志 (bài 7).'},
  {vi:'Nếu thường xuyên dùng não thì trí nhớ sẽ không suy giảm quá nhanh; ngược lại, não không dùng cũng sẽ "gỉ sét".',zh:'如果经常用脑，记忆力就不会衰退得太快；反之，大脑不用也会生锈。',py:'Rúguǒ jīngcháng yòng nǎo, jìyìlì jiù bú huì shuāituì de tài kuài; fǎnzhī, dànǎo bú yòng yě huì shēng xiù.',goiY:['如果……就……','衰退','反之','生锈'],giai:'衰退得太快 (bổ ngữ trạng thái); 反之 = ngược lại (văn viết); 生锈 nghĩa bóng "cùn đi, trì độn" — lấy từ lời thầy Vương.'}
];

// Chiều Trung → Việt — bám ý bài khoá
var translateDataRev = [
  {vi:'Khí công còn là một trong những phương pháp rèn luyện sức khoẻ độc đáo của Trung Quốc, có thể tăng cường thể chất, còn có thể hỗ trợ điều trị một số bệnh.',zh:'气功还是中国独特的健身方法之一，可以增强体质，还可以辅助治疗某些疾病。',py:'Qìgōng hái shì Zhōngguó dútè de jiànshēn fāngfǎ zhī yī, kěyǐ zēngqiáng tǐzhì, hái kěyǐ fǔzhù zhìliáo mǒuxiē jíbìng.',goiY:['气功 = khí công','增强体质 = tăng cường thể chất','辅助治疗 = hỗ trợ điều trị'],giai:'……之一 = một trong những …; 辅助 (bài 12) = hỗ trợ, không dịch "phụ trợ" cho câu văn tự nhiên.'},
  {vi:'Khái niệm mới về sức khoẻ không chỉ là không bị bệnh, mà còn bao gồm sức khoẻ tâm lý và năng lực giao tiếp xã hội.',zh:'健康的新概念不仅是不生病，还包括心理健康和社会交往方面的能力。',py:'Jiànkāng de xīn gàiniàn bùjǐn shì bù shēngbìng, hái bāokuò xīnlǐ jiànkāng hé shèhuì jiāowǎng fāngmiàn de nénglì.',goiY:['不仅……还…… = không chỉ … mà còn …','社会交往 = giao tiếp xã hội'],giai:'……方面的能力 = năng lực về mặt …; dịch gọn "năng lực giao tiếp xã hội".'},
  {vi:'Muốn khoẻ mạnh, vấn đề hàng đầu là chăm chỉ sử dụng bộ não, não người không dùng cũng sẽ "gỉ sét".',zh:'要健康，首要问题是勤于运用大脑，人的大脑不用也会生锈。',py:'Yào jiànkāng, shǒuyào wèntí shì qínyú yùnyòng dànǎo, rén de dànǎo bú yòng yě huì shēng xiù.',goiY:['首要 = hàng đầu','勤于 = chăm (làm gì)','生锈 = gỉ sét'],giai:'生锈 ở đây là nghĩa bóng (đầu óc cùn đi) — giữ hình ảnh "gỉ sét" trong ngoặc kép cho sinh động.'},
  {vi:'Dùng luân phiên não trái và não phải, tư duy thường có thể loé lên những tia sáng mới.',zh:'左右脑交替使用，思维常可以放射出新的火花。',py:'Zuǒ-yòu nǎo jiāotì shǐyòng, sīwéi cháng kěyǐ fàngshè chū xīn de huǒhuā.',goiY:['交替 = luân phiên','放射出火花 = loé lên tia sáng'],giai:'放射 không dịch "phóng xạ"; 火花 nghĩa bóng = ý tưởng loé lên.'},
  {vi:'Nhiều lý thuyết quan trọng của Tiền Học Sâm không phải do ngồi ngay ngắn trước bàn mà nghĩ ra, mà là nảy ra sau khi nghe nhạc.',zh:'钱学森的很多重要理论不是端端正正地坐在桌子前面想出来的，而是听过音乐之后冒出来的。',py:'Qián Xuésēn de hěn duō zhòngyào lǐlùn bú shì duānduānzhèngzhèng de zuò zài zhuōzi qiánmian xiǎng chūlái de, ér shì tīngguo yīnyuè zhīhòu mào chūlái de.',goiY:['不是……而是…… = không phải … mà là …','端端正正 = ngay ngắn','冒出来 = nảy ra'],giai:'Khung 是……的 nhấn cách thức ra đời của lý thuyết; 冒 = bật ra, trồi lên → "nảy ra".'},
  {vi:'Một số sách dưỡng sinh chỉ ra rằng, người càng chăm dùng não thì phản xạ có điều kiện được hình thành cũng càng nhiều.',zh:'一些养生著作中指出，人用脑越勤，形成的条件反射也越多。',py:'Yìxiē yǎngshēng zhùzuò zhōng zhǐchū, rén yòng nǎo yuè qín, xíngchéng de tiáojiàn fǎnshè yě yuè duō.',goiY:['养生著作 = sách dưỡng sinh','越……越…… = càng … càng …','条件反射 = phản xạ có điều kiện'],giai:'A 越……，B 也越…… = A càng … thì B cũng càng …; 著作 dịch "sách" cho tự nhiên.'},
  {vi:'Lười biếng là nhược điểm bẩm sinh của con người, vì vậy phải hạ quyết tâm nghiến răng kiên trì, tuyệt đối không được bỏ dở nửa chừng.',zh:'懒惰是人天生的弱点，所以要下狠心咬牙坚持，绝不能半途而废。',py:'Lǎnduò shì rén tiānshēng de ruòdiǎn, suǒyǐ yào xià hěnxīn yǎoyá jiānchí, jué bù néng bàntú\'érfèi.',goiY:['弱点 = nhược điểm','下狠心 = hạ quyết tâm','半途而废 = bỏ dở nửa chừng'],giai:'下狠心 ở đây là nghĩa tốt (quyết tâm dứt khoát), không dịch "nhẫn tâm"; 绝不能 = tuyệt đối không được.'},
  {vi:'Vận động rèn luyện sức khoẻ suy cho cùng là việc của bản thân, làm qua loa chiếu lệ thật ra là đang tự lừa mình.',zh:'运动健身归根到底是自己的事，胡乱对付其实是在骗自己。',py:'Yùndòng jiànshēn guīgēn-dàodǐ shì zìjǐ de shì, húluàn duìfu qíshí shì zài piàn zìjǐ.',goiY:['归根到底 = suy cho cùng','胡乱对付 = làm qua loa chiếu lệ'],giai:'归根到底 là xen ngữ (điểm ngữ pháp 2); 对付 ở đây = làm cho có, đối phó cho xong.'},
  {vi:'Tia tử ngoại trong ánh nắng mùa đông có tác dụng khử trùng cho cơ thể, còn thúc đẩy việc hấp thụ canxi.',zh:'冬天阳光中的紫外线对人体有消毒作用，还能促进对钙的吸收。',py:'Dōngtiān yángguāng zhōng de zǐwàixiàn duì réntǐ yǒu xiāo dú zuòyòng, hái néng cùjìn duì gài de xīshōu.',goiY:['紫外线 = tia tử ngoại','消毒 = khử trùng','钙 = canxi'],giai:'对……有……作用 = có tác dụng … đối với …; 对钙的吸收 dịch động từ hoá: "việc hấp thụ canxi".'},
  {vi:'Vận động rèn luyện phải tiến dần từng bước, đừng nóng vội; những môn vận động mạnh hoặc động tác biên độ lớn thì cố gắng đừng miễn cưỡng.',zh:'运动健身要循序渐进，不要急于求成，剧烈运动或大幅度动作尽量别勉强。',py:'Yùndòng jiànshēn yào xúnxù-jiànjìn, bú yào jíyú qiú chéng, jùliè yùndòng huò dà fúdù dòngzuò jǐnliàng bié miǎnqiǎng.',goiY:['循序渐进 = tiến dần từng bước','急于求成 = nóng vội','剧烈 = mạnh','幅度 = biên độ'],giai:'剧烈运动 = vận động mạnh (không dịch "vận động kịch liệt"); 尽量别 = cố gắng đừng.'}
];


// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 121): viết bài "运动健身好处多", ≥400 chữ (không phải 缩写)
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'这篇课文告诉我们健康包括哪些方面，要想身体健康，应该怎样运动。运动的学问很大，不但包括身体的运动，还包括大脑的运动。你喜欢运动吗？你运动健身的方式是什么？请以“运动健身好处多”为题写一写你是怎样通过运动保持身体健康的，字数不少于400字。',
  prompt:'Bài khoá cho chúng ta biết sức khoẻ bao gồm những mặt nào, muốn cơ thể khoẻ mạnh thì nên vận động như thế nào. Kiến thức về vận động rất rộng, không chỉ gồm vận động cơ thể mà còn gồm cả vận động trí não. Em có thích vận động không? Cách em vận động rèn luyện sức khoẻ là gì? Hãy lấy "运动健身好处多" (Vận động rèn luyện có nhiều lợi ích) làm nhan đề, viết về việc em giữ gìn sức khoẻ bằng vận động như thế nào, không dưới 400 chữ.',
  dan:[
    {hoi:'题目 + 开头：你喜欢运动吗？',goiY:'①题目：运动健身好处多 ②有句名言：“生命在于运动。”其实健康也在于运动 ③我从……开始喜欢上了……'},
    {hoi:'你运动健身的方式是什么？（身体的运动 + 大脑的运动）',goiY:'①身体的运动：跑步 / 游泳 / 打球 / 练太极剑…… ②大脑的运动：读书、下棋、听音乐，让左右脑交替使用'},
    {hoi:'你是怎样坚持下来的？',goiY:'①懒惰是人天生的弱点：不迁就自己，下狠心…… ②有计划，有落实 ③循序渐进，不急于求成，不做太剧烈的运动'},
    {hoi:'运动给你带来了哪些好处？',goiY:'①身体：增强体质、很少生病 ②心情：出一身汗，心情舒畅 ③意志：变得更坚定 / 坚韧'},
    {hoi:'结尾：你的体会',goiY:'①归根到底，健康是自己的事 ②每个人都有巨大的潜力 ③只要……，绝不半途而废，就……'}
  ],
  tuNen:['循序渐进','急于求成','迁就','落实','逐……','舒畅','坚定','潜力','归根到底','半途而废'],
  cauTruc:[
    {ten:'以“运动健身好处多”为题', nhan:'Nhan đề', vd:'（题目：运动健身好处多）', khi:'Ghi đúng nhan đề đề bài yêu cầu ở dòng đầu.'},
    {ten:'有句名言：“……”其实……也……', nhan:'Mở bài bằng danh ngôn', vd:'有句名言说：“生命在于运动。”其实健康也在于运动。', khi:'Mượn câu danh ngôn trong bài khoá để mở bài — tu từ 引用 đã học ở bài 27.'},
    {ten:'刚开始的时候……，可是……，就……', nhan:'Kể quá trình', vd:'刚开始的时候，我跑不了多远就气喘吁吁。', khi:'Kể khó khăn lúc đầu, rồi cách em vượt qua — bài viết có "câu chuyện" sẽ sinh động hơn liệt kê.'},
    {ten:'每……逐步 / 逐渐 + V', nhan:'Điểm ngữ pháp 1 · 逐', vd:'每周逐步增加一点儿距离。', khi:'Tả việc tăng dần mức tập — dùng 逐步 / 逐月 / 逐年 của bài.'},
    {ten:'除了……，我也很重视……', nhan:'Chuyển ý: vận động trí não', vd:'除了身体的运动，我也很重视大脑的运动。', khi:'Đề bài nhắc "không chỉ vận động cơ thể mà còn cả trí não" — phải có đoạn này.'},
    {ten:'……给我带来了很多好处：首先……，其次……，更重要的是……', nhan:'Liệt kê lợi ích', vd:'更重要的是，坚持运动让我的意志变得更坚定了。', khi:'Sắp xếp lợi ích từ cơ thể → tâm trạng → ý chí, đúng tinh thần nhan đề "好处多".'},
    {ten:'归根到底，……', nhan:'Kết bài · điểm ngữ pháp 2', vd:'归根到底，健康是自己的事，谁也代替不了。', khi:'Rút ra kết luận căn bản bằng xen ngữ 归根到底 / 说到底.'}
  ],
  checklist:[
    'Đã ghi nhan đề "运动健身好处多" chưa?',
    'Đủ ít nhất 400 chữ Hán chưa (không đếm dấu câu)?',
    'Có nói cả vận động cơ thể LẪN vận động trí não như đề bài gợi ý không?',
    'Có kể cụ thể em đã kiên trì thế nào và vận động mang lại những lợi ích gì cho em không?',
    'Đã dùng 逐 (逐步 / 逐渐…), 归根到底 và ít nhất 6 từ mới của bài chưa?'
  ],
  model:{
    zh:'（题目：运动健身好处多）有句名言说：“生命在于运动。”其实健康也在于运动。我从初中开始喜欢上了跑步，到现在已经坚持了三年多。刚开始的时候，我跑不了多远就气喘吁吁，第二天腿还疼得厉害。我曾经想过放弃，可是一想到“懒惰是人天生的弱点”，就下狠心不再迁就自己。我给自己订了计划：每天早上跑二十分钟，每周逐步增加一点儿距离。运动要循序渐进，不能急于求成，所以我从来不做太剧烈的运动。有计划，有落实，慢慢地，我能轻松地跑完五公里了。除了身体的运动，我也很重视大脑的运动。周末我常常和爷爷下棋，晚上睡觉前读半小时书。学习累了的时候，我会听听音乐，让左右脑交替休息，这样思维反而更清楚。运动给我带来了很多好处。以前我一到冬天就感冒，现在身体比以前结实多了，很少生病。每次跑完步，出一身汗，心情都特别舒畅，学习的压力也减轻了不少。更重要的是，坚持运动让我的意志变得更坚定了，遇到困难时我不再轻易放弃。归根到底，健康是自己的事，谁也代替不了。我相信每个人都有巨大的潜力，只要找到适合自己的运动方式，并且绝不半途而废，就一定能享受到运动的好处。',
    py:'(Tímù: Yùndòng jiànshēn hǎochù duō) Yǒu jù míngyán shuō: “Shēngmìng zàiyú yùndòng.” Qíshí jiànkāng yě zàiyú yùndòng. Wǒ cóng chūzhōng kāishǐ xǐhuan shàngle pǎobù, dào xiànzài yǐjīng jiānchíle sān nián duō. Gāng kāishǐ de shíhou, wǒ pǎo bu liǎo duō yuǎn jiù qìchuǎn-xūxū, dì-èr tiān tuǐ hái téng de lìhai. Wǒ céngjīng xiǎngguo fàngqì, kěshì yì xiǎngdào “lǎnduò shì rén tiānshēng de ruòdiǎn”, jiù xià hěnxīn bú zài qiānjiù zìjǐ. Wǒ gěi zìjǐ dìngle jìhuà: měi tiān zǎoshang pǎo èrshí fēnzhōng, měi zhōu zhúbù zēngjiā yìdiǎnr jùlí. Yùndòng yào xúnxù-jiànjìn, bù néng jíyú qiú chéng, suǒyǐ wǒ cónglái bú zuò tài jùliè de yùndòng. Yǒu jìhuà, yǒu luòshí, mànmàn de, wǒ néng qīngsōng de pǎowán wǔ gōnglǐ le. Chúle shēntǐ de yùndòng, wǒ yě hěn zhòngshì dànǎo de yùndòng. Zhōumò wǒ chángcháng hé yéye xiàqí, wǎnshang shuìjiào qián dú bàn xiǎoshí shū. Xuéxí lèile de shíhou, wǒ huì tīngting yīnyuè, ràng zuǒ-yòu nǎo jiāotì xiūxi, zhèyàng sīwéi fǎn\'ér gèng qīngchu. Yùndòng gěi wǒ dàiláile hěn duō hǎochù. Yǐqián wǒ yí dào dōngtiān jiù gǎnmào, xiànzài shēntǐ bǐ yǐqián jiēshi duō le, hěn shǎo shēngbìng. Měi cì pǎowán bù, chū yì shēn hàn, xīnqíng dōu tèbié shūchàng, xuéxí de yālì yě jiǎnqīngle bù shǎo. Gèng zhòngyào de shì, jiānchí yùndòng ràng wǒ de yìzhì biàn de gèng jiāndìng le, yùdào kùnnan shí wǒ bú zài qīngyì fàngqì. Guīgēn-dàodǐ, jiànkāng shì zìjǐ de shì, shéi yě dàitì bu liǎo. Wǒ xiāngxìn měi ge rén dōu yǒu jùdà de qiánlì, zhǐyào zhǎodào shìhé zìjǐ de yùndòng fāngshì, bìngqiě jué bú bàntú\'érfèi, jiù yídìng néng xiǎngshòu dào yùndòng de hǎochù.',
    vn:'(Nhan đề: Vận động rèn luyện có nhiều lợi ích) Có câu danh ngôn: "Sự sống nằm ở vận động." Thật ra sức khoẻ cũng nằm ở vận động. Em bắt đầu thích chạy bộ từ hồi cấp hai, đến nay đã kiên trì được hơn ba năm. Lúc mới bắt đầu, em chạy chưa được bao xa đã thở hồng hộc, hôm sau chân còn đau dữ dội. Em từng nghĩ đến chuyện bỏ cuộc, nhưng hễ nghĩ tới câu "lười biếng là nhược điểm bẩm sinh của con người" là em lại hạ quyết tâm không chiều theo bản thân nữa. Em lập cho mình một kế hoạch: mỗi sáng chạy hai mươi phút, mỗi tuần tăng dần quãng đường một chút. Vận động phải tiến dần từng bước, không được nóng vội, nên em chưa bao giờ tập những môn quá mạnh. Có kế hoạch, có thực hiện, dần dần em đã có thể chạy hết năm cây số một cách nhẹ nhàng. Ngoài vận động cơ thể, em cũng rất coi trọng vận động trí não. Cuối tuần em thường đánh cờ với ông, tối trước khi ngủ đọc sách nửa tiếng. Những lúc học mệt, em nghe chút nhạc để não trái và não phải luân phiên nghỉ ngơi, như vậy đầu óc ngược lại còn minh mẫn hơn. Vận động đã mang lại cho em rất nhiều lợi ích. Trước đây cứ đến mùa đông là em bị cảm, bây giờ cơ thể rắn chắc hơn trước nhiều, rất ít khi ốm. Mỗi lần chạy xong, đổ một trận mồ hôi, tâm trạng em đều đặc biệt thư thái, áp lực học tập cũng giảm đi không ít. Quan trọng hơn cả, kiên trì vận động khiến ý chí của em trở nên kiên định hơn, gặp khó khăn em không còn dễ dàng bỏ cuộc nữa. Suy cho cùng, sức khoẻ là việc của chính mình, không ai làm thay được. Em tin rằng ai cũng có tiềm năng to lớn, chỉ cần tìm được cách vận động phù hợp với mình và tuyệt đối không bỏ dở nửa chừng, thì nhất định sẽ tận hưởng được lợi ích của vận động.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> (dựa vào gợi ý, trình bày ngắn gọn nội dung chính của bài khoá). Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'气功的作用有哪些？',
     q_vn:'Khí công có những tác dụng gì?',
     hint:'健身、增强……、促进……、辅助治疗……',
     sample:'气功不只是那种力量一爆发就能把砖劈开的功夫，它还是中国独特的健身方法之一。练气功可以健身，可以增强体质，促进慢性病康复，还可以辅助治疗某些疾病。',
     sample_vn:'Khí công không chỉ là loại công phu sức mạnh bùng ra là bổ đôi được gạch, nó còn là một trong những phương pháp rèn luyện sức khoẻ độc đáo của Trung Quốc. Tập khí công có thể rèn luyện sức khoẻ, tăng cường thể chất, thúc đẩy bệnh mãn tính hồi phục, còn có thể hỗ trợ điều trị một số bệnh.',
     note:'Bốn ý của gợi ý → xếp thành chuỗi: 可以……，可以……，促进……，还可以……; điền đủ tân ngữ: 增强体质, 促进慢性病康复, 辅助治疗某些疾病.'},
    {q_zh:'健康包括哪些方面？',
     q_vn:'Sức khoẻ bao gồm những mặt nào?',
     hint:'①不生病、心理、社会交往 ②健康五要素',
     sample:'健康的新概念不仅是不生病，还包括心理健康和社会交往方面的能力。甚至有人提出了健康五要素，包括身体、情绪、智力、精神和社交，这五个方面共同构成健康的完美状态。',
     sample_vn:'Khái niệm mới về sức khoẻ không chỉ là không bị bệnh, mà còn bao gồm sức khoẻ tâm lý và năng lực giao tiếp xã hội. Thậm chí có người đưa ra năm yếu tố của sức khoẻ, gồm thể chất, cảm xúc, trí tuệ, tinh thần và giao tiếp xã hội; năm mặt này cùng cấu thành trạng thái sức khoẻ hoàn hảo.',
     note:'Ý ① dùng 不仅……还包括……; ý ② mở bằng 甚至 (thậm chí) để nâng cấp, rồi kể đủ 5 yếu tố.'},
    {q_zh:'运动的学问有哪些？',
     q_vn:'Kiến thức về vận động gồm những gì?',
     hint:'①勤于运用大脑：左脑……，右脑…… ②贵在坚持：不要迁就、不能半途而废、有计划、有落实 ③冬季健身好处多：紫外线、二氧化碳、心情、皮肤 ④讲究科学：循序渐进、锻炼后进食',
     sample:'第一，要勤于运用大脑：左脑主管抽象思维，右脑主管形象思维，左右脑交替使用，思维常能放射出新的火花。第二，运动贵在坚持：不要迁就自己，绝不能半途而废，要有计划，有落实。第三，冬季健身好处多：阳光中的紫外线有消毒作用，还能促进钙的吸收；冬天空气中二氧化碳浓度低；运动还能使人心情舒畅，排汗让皮肤更好。第四，运动要讲究科学：要循序渐进，不要急于求成；锻炼后的两小时要及时补充蛋白质、水和维生素。',
     sample_vn:'Thứ nhất, phải chăm dùng não: não trái phụ trách tư duy trừu tượng, não phải phụ trách tư duy hình tượng, dùng luân phiên hai bên thì tư duy thường loé lên tia sáng mới. Thứ hai, vận động quý ở kiên trì: đừng chiều theo bản thân, tuyệt đối không bỏ dở nửa chừng, phải có kế hoạch, có thực hiện. Thứ ba, tập luyện mùa đông nhiều lợi ích: tia tử ngoại trong nắng có tác dụng khử trùng, còn giúp hấp thụ canxi; không khí mùa đông nồng độ CO₂ thấp; vận động còn làm tâm trạng thư thái, đổ mồ hôi giúp da đẹp hơn. Thứ tư, vận động phải khoa học: tiến dần từng bước, đừng nóng vội; trong hai tiếng sau khi tập phải kịp thời bổ sung protein, nước và vitamin.',
     note:'Bốn ý ①–④ → nối bằng 第一 / 第二 / 第三 / 第四 (hoặc 首先 / 其次 / 另外 / 最后 như thầy Vương); mỗi ý nêu tiêu đề trước rồi giải thích.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. ' +
         'Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 31',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你不是说每天都去跑步吗？怎么才坚持了一个星期就不去了？'},
            {sp:'男',zh:'第一天我就跑了十公里，结果腿疼了好几天，现在一想到跑步就害怕。'}],
     q:'男的为什么不去跑步了？',qvn:'Vì sao người đàn ông không đi chạy nữa?',
     opts:['工作太忙了','天气太冷了','一开始跑得太多，腿疼','找不到一起跑步的人'],ans:2,
     why:'第一天我就跑了十公里，结果腿疼了好几天 → tập quá sức ngay từ đầu (急于求成), không phải bận hay trời lạnh.',
     words:['急于求成']},

    {n:2,
     lines:[{sp:'男',zh:'王老师，听说您收了好几个徒弟？'},
            {sp:'女',zh:'哪儿啊，他们都是太极剑协会的会员，大家一起练，我只是比他们早学了几年。'}],
     q:'关于那些人，可以知道什么？',qvn:'Về những người đó, có thể biết điều gì?',
     opts:['是太极剑协会的会员','是王老师的学生','都比王老师年纪大','刚开始学气功'],ans:0,
     why:'他们都是太极剑协会的会员 → họ là hội viên của hội thái cực kiếm, không phải đồ đệ.',
     words:['徒弟','剑','协会']},

    {n:3,
     lines:[{sp:'女',zh:'医生，我最近常常头晕，是不是得吃点儿保健品？'},
            {sp:'男',zh:'保健品广告宣扬得再好，也不能代替运动。你先每天散散步，多晒晒太阳，以后定期来医院检查就行。'}],
     q:'医生建议女的怎么做？',qvn:'Bác sĩ khuyên người phụ nữ làm gì?',
     opts:['马上住院','多吃保健品','做剧烈运动','每天散步、晒太阳'],ans:3,
     why:'你先每天散散步，多晒晒太阳 → mỗi ngày đi dạo, phơi nắng; bác sĩ nói thực phẩm chức năng không thay được vận động.',
     words:['宣扬','定期']},

    {n:4,
     lines:[{sp:'男',zh:'你的皮肤最近怎么变得这么好？用了什么新的化妆品？'},
            {sp:'女',zh:'什么也没用。我每天下班去游泳，出一身汗，毛孔里的脏东西都排出来了，皮肤自然就好了。'}],
     q:'女的皮肤为什么变好了？',qvn:'Vì sao da người phụ nữ đẹp lên?',
     opts:['用了新化妆品','坚持游泳，出汗排毒','每天吃水果','睡得比以前早'],ans:1,
     why:'我每天下班去游泳，出一身汗，毛孔里的脏东西都排出来了 → nhờ bơi, đổ mồ hôi.',
     words:['孔']},

    {n:5,
     lines:[{sp:'女',zh:'这次期末考试你进步这么大，有什么秘诀吗？'},
            {sp:'男',zh:'也没什么秘诀。以前我总是迁就自己，想玩就玩。这学期我订了计划，每天都按计划落实，归根到底还是坚持的结果。'}],
     q:'男的认为自己进步的原因是什么？',qvn:'Người đàn ông cho rằng nguyên nhân mình tiến bộ là gì?',
     opts:['坚持按计划学习','找到了好老师','考试题很简单','上了补习班'],ans:0,
     why:'每天都按计划落实，归根到底还是坚持的结果 → kiên trì làm theo kế hoạch.',
     words:['迁就','落实','归根到底']},

    {n:6,
     lines:[{sp:'男',zh:'我爷爷七十多岁了，他也想跟我去健身房锻炼，你觉得可以吗？'},
            {sp:'女',zh:'可以是可以，不过老人不适合做剧烈运动，动作的幅度也不能太大。我看让他先练练太极拳，循序渐进比较好。'}],
     q:'女的是什么意思？',qvn:'Ý của người phụ nữ là gì?',
     opts:['老人不应该锻炼','老人应该去健身房','老人锻炼要循序渐进','老人只能散步'],ans:2,
     why:'不适合做剧烈运动……先练练太极拳，循序渐进比较好 → người già tập phải từ từ; A sai vì cô ấy nói 可以.',
     words:['剧烈','幅度','循序渐进']},

    {n:7,
     lines:[{sp:'女',zh:'人的大脑潜力巨大，据说一般人只用了很小的一部分。大脑也和身体一样，越用越灵活，不用就会生锈。科学家发现，经常读书、下棋、学外语的老人，记忆力衰退得比较慢。所以，想要健康长寿，不但要锻炼身体，还要经常锻炼大脑。'}],
     q:'这段话主要想告诉我们什么？',qvn:'Đoạn này chủ yếu muốn nói với chúng ta điều gì?',
     opts:['老人应该多学外语','大脑也需要经常锻炼','下棋比读书更有用','记忆力一定会衰退'],ans:1,
     why:'不但要锻炼身体，还要经常锻炼大脑 → câu kết là ý chính; A, C chỉ là ví dụ, D không đúng (chỉ nói suy giảm chậm hơn).',
     words:['潜力','生锈','衰退']},

    {n:8,
     lines:[{sp:'男',zh:'很多人以为冬天天气冷，不适合运动。其实冬季健身的好处很多：冬天阳光中的紫外线有消毒作用，还能帮助人体吸收钙；冬天空气中二氧化碳的浓度比夏天低，运动起来对身体更有利。当然，冬天运动前一定要做好准备活动，以免受伤。'}],
     q:'根据这段话，下列哪项正确？',qvn:'Theo đoạn này, câu nào dưới đây đúng?',
     opts:['冬天不适合运动','冬天的紫外线对人体有害','冬天运动前不用做准备活动','冬天阳光能帮助人体吸收钙'],ans:3,
     why:'冬天阳光中的紫外线……还能帮助人体吸收钙 → D đúng; A là quan niệm sai được bác bỏ (其实), C trái với 一定要做好准备活动.',
     words:['紫外线','消毒','钙','二氧化碳']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Thầy giáo khen em nói tiếng Trung như người bản xứ.',
     a:{sp:'Thầy giáo',zh:'你的汉语说得这么地道，简直就是个中国通！',vn:'Tiếng Trung của em nói chuẩn thế, đúng là "người sành Trung Quốc"!'},
     need:['Dùng 不敢当'],
     sample:'老师，不敢当，我还差得远呢，以后还得请您多指导。',
     samplePy:'Lǎoshī, bùgǎndāng, wǒ hái chà de yuǎn ne, yǐhòu hái děi qǐng nín duō zhǐdǎo.',
     sampleVn:'Thưa thầy, em không dám nhận đâu, em còn kém xa lắm, sau này còn phải nhờ thầy chỉ bảo nhiều.',
     tip:'不敢当 + 我还差得远呢 là cách đáp lời khen khiêm tốn rất tự nhiên (đáp án sách 练习2 (1)).'},

    {scene:'Bạn định bỏ lớp học bơi vì thấy mệt sau hai buổi.',
     a:{sp:'Bạn',zh:'学游泳太累了，我才去了两次就不想去了。',vn:'Học bơi mệt quá, tớ mới đi hai buổi đã chẳng muốn đi nữa.'},
     need:['Dùng 半途而废','Dùng 循序渐进 hoặc 急于求成'],
     sample:'刚开始累是正常的，学游泳要循序渐进，你可千万别半途而废啊。',
     samplePy:'Gāng kāishǐ lèi shì zhèngcháng de, xué yóuyǒng yào xúnxù-jiànjìn, nǐ kě qiānwàn bié bàntú\'érfèi a.',
     sampleVn:'Mới đầu mệt là bình thường, học bơi phải từ từ từng bước, cậu nhất định đừng bỏ dở nửa chừng nhé.',
     tip:'千万别 + 半途而废 = nhất định đừng bỏ dở; 可 nhấn giọng khuyên.'},

    {scene:'Em trai kể: mẹ cứ để nó chơi game bao lâu cũng được.',
     a:{sp:'Em trai',zh:'妈妈说我想玩多久就玩多久，反正放假了。',vn:'Mẹ bảo em muốn chơi bao lâu thì chơi, dù sao cũng nghỉ hè rồi.'},
     need:['Dùng 迁就'],
     sample:'妈妈这是在迁就你，可你自己要有计划，不能一玩就是一整天。',
     samplePy:'Māma zhè shì zài qiānjiù nǐ, kě nǐ zìjǐ yào yǒu jìhuà, bù néng yì wán jiù shì yì zhěng tiān.',
     sampleVn:'Mẹ đang chiều em đấy, nhưng bản thân em phải có kế hoạch, không thể cứ chơi là chơi cả ngày.',
     tip:'迁就 + người = nuông chiều; 一 V 就是 + thời lượng = hễ làm là làm cả ….'},

    {scene:'Bạn hỏi vì sao em thích tập thể dục buổi sáng mùa đông dù trời lạnh.',
     a:{sp:'Bạn',zh:'冬天早上那么冷，你还出去跑步，不怕冻着吗？',vn:'Sáng mùa đông lạnh thế mà cậu vẫn ra ngoài chạy, không sợ bị lạnh à?'},
     need:['Dùng 舒畅','Dùng 归根到底 hoặc 说到底'],
     sample:'跑完步出一身汗，心情特别舒畅。说到底，锻炼是为了自己的健康，冷一点儿怕什么？',
     samplePy:'Pǎowán bù chū yì shēn hàn, xīnqíng tèbié shūchàng. Shuō dào dǐ, duànliàn shì wèile zìjǐ de jiànkāng, lěng yìdiǎnr pà shénme?',
     sampleVn:'Chạy xong đổ một trận mồ hôi, tâm trạng khoan khoái lắm. Nói cho cùng, tập luyện là vì sức khoẻ của mình, lạnh một chút thì sợ gì?',
     tip:'说到底 / 归根到底 đặt đầu vế nêu kết luận căn bản (điểm ngữ pháp 2).'},

    {scene:'Bạn cùng lớp khen bố em (là huấn luyện viên) hướng dẫn tập rất bài bản.',
     a:{sp:'Bạn',zh:'你爸爸教我们的方法真科学，才练了一个月，我就能跑三公里了。',vn:'Bố cậu dạy bọn tớ cách tập khoa học thật, mới tập một tháng tớ đã chạy được ba cây số rồi.'},
     need:['Dùng 不愧'],
     sample:'那当然，他当了二十年教练，不愧是这方面的专家。',
     samplePy:'Nà dāngrán, tā dāngle èrshí nián jiàoliàn, búkuì shì zhè fāngmiàn de zhuānjiā.',
     sampleVn:'Đương nhiên rồi, bố tớ làm huấn luyện viên hai mươi năm, không hổ danh là chuyên gia về mặt này.',
     tip:'不愧是 + N — lời khen (câu cuối của phóng viên trong bài khoá).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'MC mở đầu chương trình truyền hình, chào vị khách mời là chuyên gia.',
     a:'王老师，欢迎您到我们节目来做客。',b:'老王，来啦？坐吧坐吧。',better:'a',
     why:'Trên truyền hình với khách mời chuyên gia cần lịch sự: 欢迎您到……来做客. Câu b (老王，来啦) chỉ hợp với người quen thân.'},

    {scene:'Nhắn tin rủ bạn thân sáng mai đi chạy bộ.',
     a:'明早六点公园门口见，一起跑步去！',b:'兹定于明日清晨六时于公园正门集合，开展晨跑活动。',better:'a',
     why:'Tin nhắn cho bạn thân dùng khẩu ngữ ngắn gọn. Câu b (兹定于, 开展……活动) là giọng thông báo hành chính.'},

    {scene:'Bài báo khoa học về sức khoẻ.',
     a:'研究表明，适度运动可以增强体质，促进慢性病康复。',b:'我跟你说，动一动身体倍儿棒，病也好得快。',better:'a',
     why:'Văn báo chí khoa học dùng 研究表明, 增强体质, 促进……康复. Câu b (倍儿棒) là tiếng lóng khẩu ngữ.'},

    {scene:'Chia tay người bạn già trước khi ông về quê.',
     a:'您一路平安，多多保重！',b:'请您于返程途中注意人身安全。',better:'a',
     why:'Lời chia tay cần thân tình: 一路平安，多多保重. Câu b như biển báo, loa phát thanh — lạnh lùng.'},

    {scene:'Em trả lời bạn cùng lớp hỏi: "Trưa ăn gì?"',
     a:'随便，你定吧。',b:'本人对午餐无特殊要求，由阁下决定即可。',better:'a',
     why:'Hội thoại bạn bè: 随便 (tính từ làm vị ngữ — 词语辨析). Câu b (本人, 阁下, 即可) quá trang trọng, nghe như đùa.'},

    {scene:'Thông báo của hội khí công dán ở bảng tin công viên.',
     a:'本协会每周六上午在公园走廊举行气功练习活动，欢迎广大群众参加。',b:'周六早上来走廊那儿一块儿练练呗。',better:'a',
     why:'Thông báo công khai của một tổ chức dùng văn viết: 本协会, 举行……活动, 欢迎广大群众参加. Câu b (呗, 一块儿) chỉ hợp khi rủ người quen.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Dựa vào bảng bài tập 5 trong sách (<b>根据提示，简述课文主要内容</b>), kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'气功的作用有哪些？', cue:'健身、增强……、促进……、辅助治疗……', words:['气功','协会','爆发','劈','误解']},
    {step:'健康包括哪些方面？', cue:'①不生病、心理、社会交往 ②健康五要素', words:['群众','逐年','要素','智力','预期']},
    {step:'运动的学问有哪些？', cue:'①勤于运用大脑：左脑……，右脑…… ②贵在坚持：不要迁就、不能半途而废、有计划、有落实 ③冬季健身好处多：紫外线、二氧化碳、心情、皮肤 ④讲究科学：循序渐进、锻炼后进食', words:['首要','生锈','放射','端端正正','潜力','衰退','反射','弱点','迁就','坚定','坚韧','狠心','半途而废','落实','归根到底','紫外线','消毒','钙','二氧化碳','舒畅','孔','循序渐进','急于求成','剧烈','幅度','蛋白质','维生素']}
  ],
  checklist: [
    'Kể đủ 3 ý theo đúng thứ tự bảng chưa?',
    'Ý 1 có nêu đủ tác dụng của khí công: rèn luyện sức khoẻ, tăng cường thể chất, giúp bệnh mãn tính hồi phục, hỗ trợ điều trị không?',
    'Ý 2 có nói "không chỉ là không bị bệnh" và kể đủ năm yếu tố (身体、情绪、智力、精神、社交) không?',
    'Ý 3 có đủ bốn điều ①–④ (dùng não · kiên trì · tập mùa đông · khoa học) không?',
    'Có dùng 逐年 và 归根到底 (hoặc 说到底 / 说白了) ít nhất một lần khi kể không?'
  ]
};




// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 116–121) — đáp án theo đáp án sách
// (注释1 练一练 "把6个小句组合成3个连贯的语段" là bài GHÉP → dạng kho (khung = 3 câu đi sau C / E / F);
//  注释2 练一练 chọn vị trí xen ngữ → vitri; 篇章修辞 · 修辞(7) 大词小用 练一练 → ab;
//  练习4 của bài này là 指出语段中大词小用的例子 (không phải 模仿造句) → ab;
//  扩展 chỉ có 词汇 "熟悉下列词语的语素义" (không có bài tập, không có 病句) → chuyển thành 2 phần kho ghép nghĩa hình vị → từ;
//  热身 (thảo luận sức khoẻ + nhóm từ 会/首/生/射) không có đáp án, không đưa vào; 练习5 đã thành luyện nói / kể lại)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'请把下列6个小句组合成3个连贯的语段（注释1 · 练一练）', vn:'Ghép 6 câu nhỏ A–F thành 3 đoạn văn liền mạch (Chú thích 1 · Luyện tập). Mỗi đoạn cho sẵn câu đứng đầu (A, B, D) — chọn câu đi tiếp trong khung (C, E, F). Đáp án sách: (1) A C　(2) B E　(3) D F. Mẹo: để ý các từ có 逐 (逐步 → truyền kinh nghiệm cho đời sau; 逐日 doanh thu từng ngày của cửa hàng nhỏ; 逐月 sản lượng từng tháng của doanh nghiệp).',
   tu:['F 产品产量逐月提高，资金迅速回笼','C 并把更成熟、完善的经验传给下一代','E 同时符合市场需求，营业额逐日增加'],
   cau:[
     {s:'A 人类要生存和发展，社会要延续和进步，就必须将社会实践中积累起来的经验逐步完善起来，＿＿。', dap:['C 并把更成熟、完善的经验传给下一代']},
     {s:'B 他们的小店开门了，由于经营有道，＿＿。', dap:['E 同时符合市场需求，营业额逐日增加']},
     {s:'D 想当年他们的企业也是国内名牌，短短几个月就开发了十来个新品投放市场，＿＿。', dap:['F 产品产量逐月提高，资金迅速回笼']}
   ]},

  {kieu:'vitri', de:'为括号中的插入语选择合适的位置（注释2 · 练一练）', vn:'Chọn vị trí thích hợp cho xen ngữ trong ngoặc (Chú thích 2 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'A他爸爸上周B刚给他寄来了生活费，C他却告诉我没钱，D就是不想借。', tu:'说穿了', ans:'D',
      giai:'Đáp án sách: D. 说穿了 (nói trắng ra) đứng trước vế nêu bản chất thật bị che giấu: "nói trắng ra là không muốn cho mượn" — sau khi kể sự việc (bố vừa gửi tiền mà lại bảo không có tiền).'},
     {s:'从今天起，A她的电话、短信、邮件，B我一概不理，C凡是与她有关的消息我也不听，D我和她彻底绝交了。', tu:'一句话，', ans:'C',
      giai:'Đáp án sách: C. 一句话 (tóm lại một câu) dùng để khái quát sau khi liệt kê: điện thoại, tin nhắn, email đều không thèm để ý — "tóm lại, hễ tin gì liên quan đến cô ấy tôi cũng không nghe" (凡是 là lời khái quát hoá). Đặt ở D nghe cũng thuận, nhưng sách chọn C.'},
     {s:'所谓史学，A就是B研究和阐述人类社会历史C发展过程D及其规律的一门学科和科学。', tu:'说到底', ans:'A',
      giai:'Đáp án sách: A. 说到底 (nói cho cùng) đặt ngay trước phần định nghĩa bản chất 就是……: "sử học, nói cho cùng, chính là môn khoa học nghiên cứu…". Không chen vào giữa cụm động từ (B, C, D).'}
   ]},

  {kieu:'ab', de:'下列哪句没有使用大词小用的修辞手法（篇章修辞 · 修辞（7）大词小用 · 练一练）', vn:'Tu từ văn bản · Tu từ (7) ĐẠI TỪ TIỂU DỤNG (大词小用 — dùng từ có phạm vi, khái niệm LỚN cho sự việc NHỎ để làm nổi bật, gây ấn tượng, thường hài hước; vd trong bài: 虐待自己 — thật ra chỉ là không chịu tập thể dục). Luyện tập: câu nào dưới đây KHÔNG dùng phép này? — đáp án sách: (1)',
   cau:[
     {s:'下列哪句没有使用大词小用的修辞手法？',
      opts:['昨天我们俩还一块儿逛街，今天他就不理我了，我一定得找他问个明白。','经过几次谈判，我终于和父母签订了每周打游戏的条约。','小儒放学回家，要看电视。可是又着急上厕所，担心爸爸占用电视，连忙冲妈妈喊：“妈妈，您赶紧来帮我捍卫电视，免得被爸爸占领了！”'], ans:0,
      giai:'Đáp án sách: (1). Câu (1) chỉ dùng từ ngữ bình thường, đúng phạm vi (逛街, 不理我, 问个明白). Câu (2) dùng từ ngoại giao 谈判 (đàm phán), 签订条约 (ký hiệp ước) cho việc thoả thuận giờ chơi game với bố mẹ; câu (3) dùng từ quân sự 捍卫 (bảo vệ lãnh thổ), 占领 (chiếm đóng) cho việc giành cái ti vi — đều là 大词小用.'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'坚定', chu:'坚', ds:['坚韧','坚持','坚强','坚决']},
   cau:[
     {tu:'走廊', chu:'廊', dap:['廊子','长廊','画廊','游廊'], them:['回廊','连廊','廊道','廊桥'],
      giai:'廊 = hành lang, dãy hiên có mái che (长廊 = hành lang dài; 画廊 = hành lang vẽ tranh / phòng tranh; 游廊 = hành lang nối các khu trong vườn; 回廊 = hành lang vòng quanh).'},
     {tu:'误解', chu:'解', dap:['解释','解除','解锁','解开'], them:['理解','了解','见解','讲解','费解','不解'],
      giai:'解 trong 误解 = hiểu (理解, 了解, 见解 — bài 8, 费解 = khó hiểu). Đáp án sách còn lấy 解释 (giải thích = làm cho hiểu) và 解除 / 解锁 / 解开 (cởi, gỡ — nghĩa gốc của 解): cùng chữ nhưng nghĩa khác.'},
     {tu:'预期', chu:'期', dap:['期盼','期望','期间','期限'], them:['期待','期许','日期','到期','定期','学期'],
      giai:'期 trong 预期 = mong đợi (期盼, 期望, 期待 — bài 3 có 期望). Đáp án sách còn lấy 期间, 期限 (期 = thời hạn, kỳ): 定期, 到期, 学期 cũng thuộc nghĩa này.'},
     {tu:'衰退', chu:'衰', dap:['衰老','衰败','衰弱','衰微'], them:['衰落','衰竭','衰减','兴衰','盛衰'],
      giai:'衰 = suy, yếu dần (衰老 = già yếu; 衰弱 = suy nhược; 衰败 / 衰落 = suy tàn; 兴衰 = hưng suy).'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语完成句子', vn:'Dùng từ cho sẵn hoàn thành câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'A：你对中国了解得如此深入，真是个中国通。B：＿＿。', tu:'不敢当', dap:'A：你对中国了解得如此深入，真是个中国通。B：不敢当。',
      giai:'Được khen là 中国通 (người sành Trung Quốc) → đáp khiêm tốn 不敢当 (không dám nhận); có thể nói thêm 我还差得远呢.'},
     {s:'产品的销量＿＿。', tu:'逐年', dap:'产品的销量逐年增加。',
      giai:'逐年 + động từ chỉ thay đổi (增加 / 提高 / 下降) — điểm ngữ pháp 1: 逐 = lần lượt theo từng (năm).'},
     {s:'面对市场竞争，＿＿。', tu:'首要', dap:'面对市场竞争，首要任务是保证产品质量。',
      giai:'首要 chỉ làm định ngữ: 首要任务 / 首要问题 + 是……; không nói 很首要.'},
     {s:'对孩子的坏习惯＿＿。', tu:'迁就', dap:'对孩子的坏习惯不能一味迁就。',
      giai:'对 + N + 不能一味迁就 = không thể cứ nuông chiều mãi; 一味 = một mực, cứ thế.'},
     {s:'无论做什么事情＿＿。', tu:'半途而废', dap:'无论做什么事情都不能半途而废。',
      giai:'无论……都…… + 不能半途而废 = dù làm gì cũng không được bỏ dở nửa chừng.'},
     {s:'他在这个专业成就非凡，＿＿。', tu:'不愧', dap:'他在这个专业成就非凡，不愧是行业楷模。',
      giai:'不愧是 + N = xứng đáng là N; 楷模 = tấm gương mẫu mực.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['气功','徒弟','群众','协会','剑'],
   cau:[
     {s:'我是武术＿＿的成员，每天我们都在公园里练习，有时练习＿＿，有时练习太极＿＿。现在广大＿＿的健身意识都增强了，我还收了好几个＿＿呢。',
      dap:['协会','气功','剑','群众','徒弟']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['预期','定期','钙','蛋白质','急于求成'],
   cau:[
     {s:'最近的一次体检结果显示，我有点儿缺＿＿。大夫让我多晒晒太阳，多补充＿＿，然后＿＿到医院检查。但是补钙也不能＿＿，只要每天坚持，就能达到＿＿的效果。',
      dap:['钙','蛋白质','定期','急于求成','预期']}
   ]},

  {kieu:'ab', de:'请指出下列语段中大词小用的例子', vn:'Chỉ ra ví dụ ĐẠI TỪ TIỂU DỤNG (大词小用) trong các đoạn văn sau (bài tập 4) — đáp án theo sách',
   cau:[
     {s:'平静的教室里爆发了第三次世界大战。', opts:['平静','教室里','第三次世界大战','平静的教室'], ans:2,
      giai:'Đáp án sách: "第三次世界大战". Một trận cãi nhau / đùa nghịch ầm ĩ trong lớp được gọi là "Thế chiến thứ ba" — từ chỉ sự kiện cực lớn dùng cho chuyện nhỏ để gây cười.'},
     {s:'我从小就喜欢读书。开始，我读的是带拼音的童话书，年龄稍长，我的野心膨胀，开始了移民扩张：获奖的作文和古典名著都成了我涉猎的对象。', opts:['移民扩张','带拼音的童话书','古典名著','涉猎的对象'], ans:0,
      giai:'Đáp án sách: "移民扩张". 移民扩张 (di dân bành trướng lãnh thổ) là từ về quốc gia, lịch sử, ở đây chỉ việc mở rộng phạm vi đọc sách từ truyện có phiên âm sang văn đạt giải, danh tác cổ điển.'},
     {s:'初学自行车的我，竟想对一个小土坡发起进攻。我先后退几步，然后上车猛骑过去，“砰！轰！”沙土飞溅，灰尘飞扬，我连人带车摔了个四脚朝天。', opts:['小土坡','沙土飞溅','四脚朝天','发起进攻'], ans:3,
      giai:'Đáp án sách: "发起进攻". 发起进攻 (phát động tấn công) là thuật ngữ quân sự, dùng cho việc đạp xe lên một gò đất nhỏ — càng làm nổi bật cú ngã "bốn vó chổng lên trời" buồn cười.'},
     {s:'爸爸、妈妈和我，在家里谁也不服谁，形成了三国鼎立之势。', opts:['谁也不服谁','三国鼎立','在家里','爸爸、妈妈和我'], ans:1,
      giai:'Đáp án sách: "三国鼎立". 三国鼎立 (thế chân vạc Tam Quốc Nguỵ – Thục – Ngô) dùng để tả ba người trong nhà không ai chịu ai.'}
   ]},

  {kieu:'kho', de:'熟悉下列词语的语素义（扩展 · 词汇）', vn:'Mở rộng · Từ vựng (1): làm quen nghĩa của từng hình vị (语素义). Sách chỉ cho sơ đồ để làm quen — ở đây chuyển thành bài ghép: đọc nghĩa hai hình vị, chọn từ tương ứng trong khung (theo sơ đồ sách tr. 121)',
   tu:['倾斜','名额','偏差','清除','致辞','屏障'],
   cau:[
     {s:'偏：不正，倾斜 ＋ 差：差错 → ＿＿', dap:['偏差']},
     {s:'名：名字 ＋ 额：规定的数目 → ＿＿', dap:['名额']},
     {s:'致：向人表达 ＋ 辞：言辞 → ＿＿', dap:['致辞']},
     {s:'屏：遮挡 ＋ 障：用来遮挡或防卫的东西 → ＿＿', dap:['屏障']},
     {s:'倾：不正，歪 ＋ 斜：不正 → ＿＿', dap:['倾斜']},
     {s:'清：一点儿不留 ＋ 除：去掉 → ＿＿', dap:['清除']}
   ]},
  {kieu:'kho', de:'熟悉下列词语的语素义（扩展 · 词汇）', vn:'Mở rộng · Từ vựng (2): tiếp tục ghép nghĩa hai hình vị với từ tương ứng. Chú ý: 压 trong 压榨 (ép bằng lực) và 压制 (dùng sức mạnh khuất phục) mang nghĩa khác nhau.',
   tu:['挽回','压制','手势','挑衅','威力','压榨'],
   cau:[
     {s:'手：人体上肢，腕以下的部分 ＋ 势：姿势 → ＿＿', dap:['手势']},
     {s:'挽：扭转，拉 ＋ 回：还，返回 → ＿＿', dap:['挽回']},
     {s:'威：使人敬畏的声势 ＋ 力：力量，能力 → ＿＿', dap:['威力']},
     {s:'挑：搬弄是非，引起纠纷 ＋ 衅：争端 → ＿＿', dap:['挑衅']},
     {s:'压：对物体施加压力 ＋ 榨：用力压出 → ＿＿', dap:['压榨']},
     {s:'压：用强力制服 ＋ 制：限定，用强力约束 → ＿＿', dap:['压制']}
   ]}
];
