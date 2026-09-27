// ══════════════════════════════════════════
// DATA — HSK5 Bài 6: 除夕的由来 (Nguồn gốc đêm giao thừa)
// Unit 2 谈古说今 · Nguồn: HSK标准教程5上 (tr. 55–63) + 练习册 第6课
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'除夕',py:'chúxī',pos:'Danh từ',vn:'đêm giao thừa, đêm trừ tịch',hv:'trừ tịch',em:'🏮',lesson:1,
   explain:['Đêm cuối cùng của năm âm lịch (tối ba mươi tháng Chạp). 除 = trừ bỏ, 夕 = đêm → đêm tiễn năm cũ.'],
   usage:'Hay đi thành cụm: 除夕夜, 除夕晚上, 过除夕. Là DANH TỪ, không dùng như động từ (✗ 我们除夕了).',
   collo:['除夕夜','过除夕','除夕晚上'],
   ex_zh:'在中国，人们把农历十二月三十日这一年中的最后一天叫作除夕。',ex_py:'Zài Zhōngguó, rénmen bǎ nónglì shí\'èr yuè sānshí rì zhè yì nián zhōng de zuìhòu yì tiān jiàozuò chúxī.',ex_vn:'Ở Trung Quốc, người ta gọi ngày cuối cùng của năm — ngày ba mươi tháng Chạp âm lịch — là đêm trừ tịch.',
   exList:[
     {zh:'在中国，人们把农历十二月三十日这一年中的最后一天叫作除夕。',py:'Zài Zhōngguó, rénmen bǎ nónglì shí\'èr yuè sānshí rì zhè yì nián zhōng de zuìhòu yì tiān jiàozuò chúxī.',vn:'Ở Trung Quốc, người ta gọi ngày cuối cùng của năm — ngày ba mươi tháng Chạp âm lịch — là đêm trừ tịch.'},
     {zh:'除夕晚上，全家人会一起吃年夜饭。',py:'Chúxī wǎnshang, quánjiā rén huì yìqǐ chī niányèfàn.',vn:'Tối giao thừa, cả nhà sẽ cùng nhau ăn bữa cơm tất niên.'},
     {zh:'今年除夕我不能回家，只好跟父母视频拜年。',py:'Jīnnián chúxī wǒ bù néng huí jiā, zhǐhǎo gēn fùmǔ shìpín bàinián.',vn:'Giao thừa năm nay tôi không về nhà được, đành gọi video chúc Tết bố mẹ.'}
   ],
   colloFull:[{zh:'除夕夜',py:'chúxī yè',vn:'đêm giao thừa'},{zh:'过除夕',py:'guò chúxī',vn:'đón giao thừa'},{zh:'除夕晚上',py:'chúxī wǎnshang',vn:'tối giao thừa'},{zh:'除夕的由来',py:'chúxī de yóulái',vn:'nguồn gốc đêm giao thừa'}],
   patterns:[{s:'除夕 + 夜 / 晚上',m:'Đêm / tối giao thừa'},{s:'在除夕 + (这天) + V',m:'Làm gì vào đêm giao thừa'}],
   checkList:[
     {promptLang:'vi',prompt:'Tối giao thừa, cả nhà vừa ăn xong cơm tất niên là ra ngoài xem pháo hoa.',answer:'除夕晚上，全家人一吃完年夜饭就出去看烟花。',answerPy:'Chúxī wǎnshang, quánjiā rén yì chīwán niányèfàn jiù chūqu kàn yānhuā.',note:'除夕晚上 làm trạng ngữ thời gian, đứng đầu câu.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Giao thừa năm nay tuy tôi không về nhà được nhưng đã gọi video chúc Tết bố mẹ.',answer:'今年除夕我虽然不能回家，但是跟父母视频拜年了。',answerPy:'Jīnnián chúxī wǒ suīrán bù néng huí jiā, dànshì gēn fùmǔ shìpín bàinián le.',note:'今年除夕 = giao thừa năm nay; đặt trước chủ ngữ hoặc sau chủ ngữ đều được.',pair:'虽然……但是……'}
   ]},

  {n:2,zh:'由来',py:'yóulái',pos:'Danh từ',vn:'nguồn gốc, lai lịch',hv:'do lai',em:'📜',lesson:1,
   explain:['Nguồn gốc, lý do mà một sự vật, phong tục, tên gọi ra đời. Thiên về văn viết.'],
   usage:'Thường dùng: ……的由来 (节日的由来, 名字的由来). Động từ hay đi kèm: 讲/介绍/了解 + 由来.',
   collo:['节日的由来','名字的由来','了解……的由来'],
   ex_zh:'你知道春节的由来吗？',ex_py:'Nǐ zhīdào Chūnjié de yóulái ma?',ex_vn:'Bạn có biết nguồn gốc của Tết Nguyên đán không?',
   exList:[
     {zh:'你知道春节的由来吗？',py:'Nǐ zhīdào Chūnjié de yóulái ma?',vn:'Bạn có biết nguồn gốc của Tết Nguyên đán không?'},
     {zh:'老师给我们讲了除夕的由来。',py:'Lǎoshī gěi wǒmen jiǎngle chúxī de yóulái.',vn:'Thầy giáo kể cho chúng tôi nghe nguồn gốc của đêm giao thừa.'},
     {zh:'每个名字都有它的由来。',py:'Měi ge míngzi dōu yǒu tā de yóulái.',vn:'Mỗi cái tên đều có nguồn gốc của nó.'}
   ],
   colloFull:[{zh:'节日的由来',py:'jiérì de yóulái',vn:'nguồn gốc ngày lễ'},{zh:'名字的由来',py:'míngzi de yóulái',vn:'nguồn gốc cái tên'},{zh:'了解……的由来',py:'liǎojiě…… de yóulái',vn:'tìm hiểu nguồn gốc của …'},{zh:'讲……的由来',py:'jiǎng…… de yóulái',vn:'kể về nguồn gốc của …'}],
   patterns:[{s:'N + 的 + 由来',m:'Nguồn gốc của …'},{s:'讲 / 介绍 / 了解 + ……的由来',m:'Kể / giới thiệu / tìm hiểu nguồn gốc …'}],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả người Trung Quốc cũng chưa chắc biết nguồn gốc của ngày lễ này.',answer:'连中国人都不一定知道这个节日的由来。',answerPy:'Lián Zhōngguó rén dōu bù yídìng zhīdào zhège jiérì de yóulái.',note:'由来 là danh từ, đi sau 的.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Nguồn gốc của cái tên này là do ông nội kể cho tôi.',answer:'这个名字的由来是爷爷告诉我的。',answerPy:'Zhège míngzi de yóulái shì yéye gàosu wǒ de.',note:'Nhấn mạnh người thực hiện: 是 + 爷爷告诉我 + 的.',pair:'是……的'}
   ]},

  {n:3,zh:'农历',py:'nónglì',pos:'Danh từ',vn:'âm lịch, nông lịch',hv:'nông lịch',em:'🌙',lesson:1,
   explain:['Lịch truyền thống của Trung Quốc (và Việt Nam), tính theo tuần trăng. Đối lập với 公历 (dương lịch).'],
   usage:'农历 + tháng/ngày: 农历八月十五, 农历新年. Đối: 公历 gōnglì (dương lịch).',
   collo:['农历新年','农历八月十五','按农历算'],
   ex_zh:'中秋节是农历八月十五。',ex_py:'Zhōngqiū Jié shì nónglì bā yuè shíwǔ.',ex_vn:'Tết Trung thu là ngày rằm tháng Tám âm lịch.',
   exList:[
     {zh:'中秋节是农历八月十五。',py:'Zhōngqiū Jié shì nónglì bā yuè shíwǔ.',vn:'Tết Trung thu là ngày rằm tháng Tám âm lịch.'},
     {zh:'人们把农历十二月三十日叫作除夕。',py:'Rénmen bǎ nónglì shí\'èr yuè sānshí rì jiàozuò chúxī.',vn:'Người ta gọi ngày ba mươi tháng Chạp âm lịch là đêm trừ tịch.'},
     {zh:'奶奶过生日一直是按农历算的。',py:'Nǎinai guò shēngrì yìzhí shì àn nónglì suàn de.',vn:'Bà nội xưa nay đều tính ngày sinh nhật theo âm lịch.'}
   ],
   colloFull:[{zh:'农历新年',py:'nónglì xīnnián',vn:'năm mới âm lịch'},{zh:'农历八月十五',py:'nónglì bā yuè shíwǔ',vn:'rằm tháng Tám âm lịch'},{zh:'按农历算',py:'àn nónglì suàn',vn:'tính theo âm lịch'},{zh:'农历和公历',py:'nónglì hé gōnglì',vn:'âm lịch và dương lịch'}],
   patterns:[{s:'农历 + tháng + ngày',m:'Ngày … tháng … âm lịch'},{s:'按农历算',m:'Tính theo âm lịch'}],
   checkList:[
     {promptLang:'vi',prompt:'Tuy Việt Nam và Trung Quốc đều ăn Tết âm lịch nhưng phong tục không hoàn toàn giống nhau.',answer:'虽然越南和中国都过农历新年，但是风俗不完全一样。',answerPy:'Suīrán Yuènán hé Zhōngguó dōu guò nónglì xīnnián, dànshì fēngsú bù wánquán yíyàng.',note:'农历新年 = Tết âm lịch; đối với 公历 (dương lịch).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Sinh nhật bà nội đều tính theo âm lịch, nên năm nào cũng không giống nhau.',answer:'奶奶的生日都是按农历算的，所以每年都不一样。',answerPy:'Nǎinai de shēngrì dōu shì àn nónglì suàn de, suǒyǐ měi nián dōu bù yíyàng.',note:'按农历算 = tính theo âm lịch.',pair:'是……的'}
   ]},

  {n:4,zh:'守岁',py:'shǒusuì',pos:'Động từ',vn:'thức đón giao thừa',hv:'thủ tuế',em:'🕛',lesson:1,
   explain:['Đêm giao thừa cả nhà thức đến quá nửa đêm để tiễn năm cũ, đón năm mới. 守 = canh giữ, 岁 = năm.'],
   usage:'Nội động từ, không mang tân ngữ: 除夕夜守岁, 全家一起守岁. Thường đi cùng 熬夜.',
   collo:['除夕守岁','一起守岁','守岁的习惯'],
   ex_zh:'除夕这一天，全家人会一起吃年夜饭，守岁。',ex_py:'Chúxī zhè yì tiān, quánjiā rén huì yìqǐ chī niányèfàn, shǒusuì.',ex_vn:'Ngày giao thừa, cả nhà sẽ cùng ăn cơm tất niên và thức đón giao thừa.',
   exList:[
     {zh:'除夕这一天，全家人会一起吃年夜饭，守岁。',py:'Chúxī zhè yì tiān, quánjiā rén huì yìqǐ chī niányèfàn, shǒusuì.',vn:'Ngày giao thừa, cả nhà sẽ cùng ăn cơm tất niên và thức đón giao thừa.'},
     {zh:'中国人过春节时有“守岁”的习惯。',py:'Zhōngguó rén guò Chūnjié shí yǒu "shǒusuì" de xíguàn.',vn:'Người Trung Quốc ăn Tết có tục "thức đón giao thừa".'},
     {zh:'小时候我总想跟大人一起守岁，可每次都没到十二点就睡着了。',py:'Xiǎo shíhou wǒ zǒng xiǎng gēn dàren yìqǐ shǒusuì, kě měi cì dōu méi dào shí\'èr diǎn jiù shuìzháo le.',vn:'Hồi nhỏ tôi luôn muốn thức đón giao thừa cùng người lớn, nhưng lần nào cũng ngủ thiếp đi trước mười hai giờ.'}
   ],
   colloFull:[{zh:'除夕守岁',py:'chúxī shǒusuì',vn:'thức đón giao thừa'},{zh:'一起守岁',py:'yìqǐ shǒusuì',vn:'cùng thức đón giao thừa'},{zh:'守岁的习惯',py:'shǒusuì de xíguàn',vn:'tục thức đón giao thừa'},{zh:'熬夜守岁',py:'áoyè shǒusuì',vn:'thức khuya đón giao thừa'}],
   patterns:[{s:'(在)除夕夜 + 守岁',m:'Đêm giao thừa thức đón năm mới'},{s:'有 + 守岁的习惯',m:'Có tục thức đón giao thừa'}],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa từng thức đón giao thừa cùng ông bà nội.',answer:'我从来没跟爷爷奶奶一起守过岁。',answerPy:'Wǒ cónglái méi gēn yéye nǎinai yìqǐ shǒuguo suì.',note:'守岁 là ly hợp từ: 过 chen vào giữa → 守过岁.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Càng ngày càng ít người trẻ thức đón giao thừa.',answer:'守岁的年轻人越来越少了。',answerPy:'Shǒusuì de niánqīng rén yuè lái yuè shǎo le.',note:'守岁 làm định ngữ: 守岁的年轻人.',pair:'越来越……'}
   ]},

  {n:5,zh:'怪物',py:'guàiwù',pos:'Danh từ',vn:'quái vật',hv:'quái vật',em:'👹',lesson:1,
   explain:['Sinh vật kỳ dị, đáng sợ trong truyền thuyết, truyện cổ tích.'],
   usage:'Lượng từ: 个/只: 一个怪物. Hay gặp: 可怕的怪物, 传说中的怪物.',
   collo:['一个怪物','可怕的怪物','传说中的怪物'],
   ex_zh:'传说在很久以前，有个叫作“夕”的怪物。',ex_py:'Chuánshuō zài hěn jiǔ yǐqián, yǒu ge jiàozuò "Xī" de guàiwù.',ex_vn:'Truyền thuyết kể rằng rất lâu về trước có một con quái vật tên là "Tịch".',
   exList:[
     {zh:'传说在很久以前，有个叫作“夕”的怪物。',py:'Chuánshuō zài hěn jiǔ yǐqián, yǒu ge jiàozuò "Xī" de guàiwù.',vn:'Truyền thuyết kể rằng rất lâu về trước có một con quái vật tên là "Tịch".'},
     {zh:'弟弟最喜欢看有怪物的动画片。',py:'Dìdi zuì xǐhuan kàn yǒu guàiwù de dònghuàpiàn.',vn:'Em trai tôi thích nhất xem phim hoạt hình có quái vật.'},
     {zh:'这个怪物虽然样子可怕，但是其实很善良。',py:'Zhège guàiwù suīrán yàngzi kěpà, dànshì qíshí hěn shànliáng.',vn:'Con quái vật này tuy trông đáng sợ nhưng thật ra rất hiền lành.'}
   ],
   colloFull:[{zh:'一个怪物',py:'yí ge guàiwù',vn:'một con quái vật'},{zh:'可怕的怪物',py:'kěpà de guàiwù',vn:'quái vật đáng sợ'},{zh:'传说中的怪物',py:'chuánshuō zhōng de guàiwù',vn:'quái vật trong truyền thuyết'},{zh:'打败怪物',py:'dǎbài guàiwù',vn:'đánh bại quái vật'}],
   patterns:[{s:'一个 / 一只 + 怪物',m:'Một con quái vật'},{s:'被怪物 + V',m:'Bị quái vật …'}],
   checkList:[
     {promptLang:'vi',prompt:'Cô bé ngây thơ ấy đã bị quái vật ăn thịt.',answer:'那个天真的女孩被怪物吃掉了。',answerPy:'Nàge tiānzhēn de nǚhái bèi guàiwù chīdiào le.',note:'Câu bị động: A + 被 + 怪物 + V + bổ ngữ.',pair:'被'},
     {promptLang:'vi',prompt:'Con quái vật này không những xấu xí mà còn rất đáng sợ.',answer:'这个怪物不仅样子难看，而且非常可怕。',answerPy:'Zhège guàiwù bùjǐn yàngzi nánkàn, érqiě fēicháng kěpà.',note:'怪物 làm chủ ngữ; 这个 + 怪物.',pair:'不仅……而且……'}
   ]},

  {n:6,zh:'伤害',py:'shānghài',pos:'Động từ',vn:'làm hại, làm tổn thương',hv:'thương hại',em:'💢',lesson:1,
   explain:['Gây tổn hại cho cơ thể, tình cảm hoặc lợi ích của người khác. Vừa là động từ, vừa dùng như danh từ (对……的伤害).'],
   usage:'伤害 + người/身体/感情. Danh từ hoá: 对身体的伤害很大. BẪY Hán–Việt: không phải "thương hại" (thương xót)!',
   collo:['伤害百姓','伤害身体','伤害别人的感情','对……的伤害'],
   ex_zh:'“夕”经常出来伤害百姓。',ex_py:'"Xī" jīngcháng chūlái shānghài bǎixìng.',ex_vn:'"Tịch" thường ra ngoài làm hại dân lành.',
   exList:[
     {zh:'“夕”经常出来伤害百姓。',py:'"Xī" jīngcháng chūlái shānghài bǎixìng.',vn:'"Tịch" thường ra ngoài làm hại dân lành.'},
     {zh:'经常熬夜对身体的伤害极大。',py:'Jīngcháng áoyè duì shēntǐ de shānghài jí dà.',vn:'Thường xuyên thức khuya gây hại cực lớn cho cơ thể.'},
     {zh:'说话的时候要注意，别伤害了别人的感情。',py:'Shuōhuà de shíhou yào zhùyì, bié shānghàile biérén de gǎnqíng.',vn:'Khi nói chuyện phải chú ý, đừng làm tổn thương tình cảm của người khác.'}
   ],
   colloFull:[{zh:'伤害百姓',py:'shānghài bǎixìng',vn:'làm hại dân lành'},{zh:'伤害身体',py:'shānghài shēntǐ',vn:'hại sức khoẻ'},{zh:'伤害别人的感情',py:'shānghài biérén de gǎnqíng',vn:'làm tổn thương tình cảm người khác'},{zh:'对……的伤害',py:'duì…… de shānghài',vn:'sự tổn hại đối với …'}],
   patterns:[{s:'伤害 + người / 身体 / 感情',m:'Làm hại / làm tổn thương …'},{s:'对 + N + 的伤害 + 很大',m:'Gây hại lớn cho …'}],
   checkList:[
     {promptLang:'vi',prompt:'Câu nói ấy của anh ta đã làm tổn thương cô ấy.',answer:'她被他的那句话伤害了。',answerPy:'Tā bèi tā de nà jù huà shānghài le.',note:'伤害 dùng được trong câu 被 với nghĩa tổn thương tình cảm.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần ngủ đủ giấc thì sẽ giảm được tác hại của việc thức khuya đối với cơ thể.',answer:'只要睡够觉，就能减少熬夜对身体的伤害。',answerPy:'Zhǐyào shuìgòu jiào, jiù néng jiǎnshǎo áoyè duì shēntǐ de shānghài.',note:'对 + N + 的伤害: 伤害 dùng như danh từ.',pair:'只要……就……'}
   ]},

  {n:7,zh:'恨',py:'hèn',pos:'Động từ',vn:'căm ghét, oán hận',hv:'hận',em:'😠',lesson:1,
   explain:['Ghét cay ghét đắng, oán hận ai/cái gì. Ngược nghĩa với 爱.'],
   usage:'恨 + người/việc. Thành ngữ trong bài: 恨之入骨 (căm đến tận xương). Mức độ nặng hơn 讨厌 nhiều.',
   collo:['恨他','恨之入骨','又爱又恨'],
   ex_zh:'百姓对“夕”恨之入骨，但是又十分无奈。',ex_py:'Bǎixìng duì "Xī" hèn zhī rù gǔ, dànshì yòu shífēn wúnài.',ex_vn:'Dân chúng căm hận "Tịch" đến tận xương tuỷ nhưng lại hết cách.',
   exList:[
     {zh:'百姓对“夕”恨之入骨，但是又十分无奈。',py:'Bǎixìng duì "Xī" hèn zhī rù gǔ, dànshì yòu shífēn wúnài.',vn:'Dân chúng căm hận "Tịch" đến tận xương tuỷ nhưng lại hết cách.'},
     {zh:'我不恨他，我只是不想再见到他。',py:'Wǒ bú hèn tā, wǒ zhǐshì bù xiǎng zài jiàndào tā.',vn:'Tôi không hận anh ta, tôi chỉ không muốn gặp lại anh ta nữa.'},
     {zh:'对手机，很多家长是又爱又恨。',py:'Duì shǒujī, hěn duō jiāzhǎng shì yòu ài yòu hèn.',vn:'Với điện thoại, nhiều phụ huynh vừa yêu vừa ghét.'}
   ],
   colloFull:[{zh:'恨他',py:'hèn tā',vn:'hận anh ta'},{zh:'恨之入骨',py:'hèn zhī rù gǔ',vn:'căm đến tận xương tuỷ'},{zh:'又爱又恨',py:'yòu ài yòu hèn',vn:'vừa yêu vừa ghét'},{zh:'恨自己',py:'hèn zìjǐ',vn:'giận chính mình'}],
   patterns:[{s:'恨 + người / việc',m:'Căm ghét ai / cái gì'},{s:'对 + N + 恨之入骨',m:'Căm hận … đến tận xương'}],
   checkList:[
     {promptLang:'vi',prompt:'Tuy anh ấy đã làm sai nhiều chuyện nhưng tôi không hận anh ấy.',answer:'虽然他做错了很多事，但是我不恨他。',answerPy:'Suīrán tā zuòcuòle hěn duō shì, dànshì wǒ bú hèn tā.',note:'恨 + người: mang tân ngữ trực tiếp.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Tôi hận bản thân mình chưa từng nói với bà một câu "cháu yêu bà".',answer:'我恨自己从来没对奶奶说过一句“我爱您”。',answerPy:'Wǒ hèn zìjǐ cónglái méi duì nǎinai shuōguo yí jù "wǒ ài nín".',note:'恨自己 = giận/hận chính mình vì đã (không) làm gì.',pair:'从来没……过'}
   ]},

  {n:8,zh:'骨头',py:'gǔtou',pos:'Danh từ',vn:'xương',hv:'cốt đầu',em:'🦴',lesson:1,
   explain:['Xương của người hoặc động vật. Khi đứng trong từ ghép/thành ngữ thường chỉ dùng 骨 (gǔ): 恨之入骨.'],
   usage:'Lượng từ: 块/根: 一块骨头. Khi đứng một mình đọc gǔtou (tou thanh nhẹ); trong thành ngữ đọc gǔ.',
   collo:['一块骨头','啃骨头','恨之入骨'],
   ex_zh:'小狗叼着一块骨头跑了。',ex_py:'Xiǎo gǒu diāozhe yí kuài gǔtou pǎo le.',ex_vn:'Con chó con ngoạm một khúc xương chạy mất.',
   exList:[
     {zh:'小狗叼着一块骨头跑了。',py:'Xiǎo gǒu diāozhe yí kuài gǔtou pǎo le.',vn:'Con chó con ngoạm một khúc xương chạy mất.'},
     {zh:'他踢球的时候摔断了腿上的骨头。',py:'Tā tī qiú de shíhou shuāiduànle tuǐ shang de gǔtou.',vn:'Cậu ấy ngã gãy xương chân khi đá bóng.'},
     {zh:'多喝牛奶对骨头有好处。',py:'Duō hē niúnǎi duì gǔtou yǒu hǎochu.',vn:'Uống nhiều sữa tốt cho xương.'}
   ],
   colloFull:[{zh:'一块骨头',py:'yí kuài gǔtou',vn:'một khúc xương'},{zh:'啃骨头',py:'kěn gǔtou',vn:'gặm xương'},{zh:'恨之入骨',py:'hèn zhī rù gǔ',vn:'căm đến tận xương'},{zh:'摔断骨头',py:'shuāiduàn gǔtou',vn:'ngã gãy xương'}],
   patterns:[{s:'一块 / 一根 + 骨头',m:'Một khúc / một cái xương'},{s:'对骨头有好处',m:'Tốt cho xương'}],
   checkList:[
     {promptLang:'vi',prompt:'Chó nhà tôi vừa thấy xương là chạy ngay tới.',answer:'我家的狗一看见骨头就跑过来。',answerPy:'Wǒ jiā de gǒu yí kànjiàn gǔtou jiù pǎo guòlai.',note:'骨头 làm tân ngữ của 看见.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cậu ấy không cẩn thận làm gãy xương chân, bác sĩ bảo phải nghỉ ba tháng.',answer:'他不小心把腿上的骨头摔断了，医生说要休息三个月。',answerPy:'Tā bù xiǎoxīn bǎ tuǐ shang de gǔtou shuāiduàn le, yīshēng shuō yào xiūxi sān ge yuè.',note:'Câu 把: 把 + 骨头 + 摔断了.',pair:'把'}
   ]},

  {n:9,zh:'无奈',py:'wúnài',pos:'Động từ',vn:'không biết làm sao, đành chịu',hv:'vô nại',em:'🤷',lesson:1,
   explain:['Không có cách nào khác, đành bó tay. Hay dùng như tính từ để tả tâm trạng: 很无奈, 无奈的样子.'],
   usage:'十分/很 + 无奈; 无奈地 + động từ (无奈地笑了笑); đầu câu: 无奈，…… (đành phải…).',
   collo:['十分无奈','无奈的样子','无奈地笑了笑'],
   ex_zh:'姑娘脸上表现出很无奈的样子。',ex_py:'Gūniang liǎn shang biǎoxiàn chū hěn wúnài de yàngzi.',ex_vn:'Trên mặt cô gái lộ vẻ rất bất lực.',
   exList:[
     {zh:'姑娘脸上表现出很无奈的样子。',py:'Gūniang liǎn shang biǎoxiàn chū hěn wúnài de yàngzi.',vn:'Trên mặt cô gái lộ vẻ rất bất lực.'},
     {zh:'百姓对“夕”恨之入骨，但是又十分无奈。',py:'Bǎixìng duì "Xī" hèn zhī rù gǔ, dànshì yòu shífēn wúnài.',vn:'Dân chúng căm hận "Tịch" đến tận xương tuỷ nhưng lại chẳng biết làm sao.'},
     {zh:'下大雨了，我们只好无奈地取消了比赛。',py:'Xià dàyǔ le, wǒmen zhǐhǎo wúnài de qǔxiāole bǐsài.',vn:'Trời mưa to, chúng tôi đành ngậm ngùi huỷ trận đấu.'}
   ],
   colloFull:[{zh:'十分无奈',py:'shífēn wúnài',vn:'rất bất lực'},{zh:'无奈的样子',py:'wúnài de yàngzi',vn:'vẻ bất lực'},{zh:'无奈地笑了笑',py:'wúnài de xiàole xiào',vn:'cười một cách bất lực'},{zh:'出于无奈',py:'chūyú wúnài',vn:'vì bất đắc dĩ'}],
   patterns:[{s:'很 / 十分 + 无奈',m:'Rất bất lực, hết cách'},{s:'无奈地 + V',m:'Làm gì một cách bất đắc dĩ'}],
   checkList:[
     {promptLang:'vi',prompt:'Mưa càng lúc càng to, chúng tôi đành bất lực huỷ chuyến đi.',answer:'雨越来越大，我们只好无奈地取消了旅行。',answerPy:'Yǔ yuè lái yuè dà, wǒmen zhǐhǎo wúnài de qǔxiāole lǚxíng.',note:'无奈地 + động từ: làm gì trong thế bất đắc dĩ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Mẹ bị con làm cho bất lực, chỉ biết lắc đầu.',answer:'妈妈被孩子弄得很无奈，只好摇了摇头。',answerPy:'Māma bèi háizi nòng de hěn wúnài, zhǐhǎo yáole yáo tóu.',note:'无奈 dùng như tính từ sau 很.',pair:'被'}
   ]},

  {n:10,zh:'英雄',py:'yīngxióng',pos:'Danh từ',vn:'anh hùng',hv:'anh hùng',em:'🦸',lesson:1,
   explain:['Người tài giỏi, dũng cảm, làm việc lớn vì mọi người.'],
   usage:'Lượng từ: 个/位: 一位英雄. Cụm: 民族英雄, 大英雄, 英雄人物.',
   collo:['一位英雄','民族英雄','成为英雄'],
   ex_zh:'当时有个英雄叫作七郎。',ex_py:'Dāngshí yǒu ge yīngxióng jiàozuò Qīláng.',ex_vn:'Khi ấy có một anh hùng tên là Thất Lang.',
   exList:[
     {zh:'当时有个英雄叫作七郎。',py:'Dāngshí yǒu ge yīngxióng jiàozuò Qīláng.',vn:'Khi ấy có một anh hùng tên là Thất Lang.'},
     {zh:'他救了落水的孩子，大家都叫他小英雄。',py:'Tā jiùle luò shuǐ de háizi, dàjiā dōu jiào tā xiǎo yīngxióng.',vn:'Cậu ấy cứu đứa trẻ bị rơi xuống nước, mọi người đều gọi cậu là người hùng nhỏ.'},
     {zh:'在我心里，爸爸就是一位英雄。',py:'Zài wǒ xīn li, bàba jiù shì yí wèi yīngxióng.',vn:'Trong lòng tôi, bố chính là một người anh hùng.'}
   ],
   colloFull:[{zh:'一位英雄',py:'yí wèi yīngxióng',vn:'một vị anh hùng'},{zh:'民族英雄',py:'mínzú yīngxióng',vn:'anh hùng dân tộc'},{zh:'成为英雄',py:'chéngwéi yīngxióng',vn:'trở thành anh hùng'},{zh:'小英雄',py:'xiǎo yīngxióng',vn:'người hùng nhỏ tuổi'}],
   patterns:[{s:'一位 / 一个 + 英雄',m:'Một vị anh hùng'},{s:'把……当作英雄',m:'Coi … là anh hùng'}],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy cứu đứa trẻ rơi xuống nước, được mọi người gọi là người hùng.',answer:'他救了落水的孩子，被大家叫作英雄。',answerPy:'Tā jiùle luò shuǐ de háizi, bèi dàjiā jiàozuò yīngxióng.',note:'被 + người + 叫作 + 英雄.',pair:'被'},
     {promptLang:'vi',prompt:'Trong lòng tôi, bố không chỉ là người bố mà còn là một anh hùng.',answer:'在我心里，爸爸不仅是父亲，也是一位英雄。',answerPy:'Zài wǒ xīn li, bàba bùjǐn shì fùqin, yě shì yí wèi yīngxióng.',note:'一位 + 英雄: 位 thể hiện sự kính trọng.',pair:'不仅……也……'}
   ]},

  {n:11,zh:'英俊',py:'yīngjùn',pos:'Tính từ',vn:'anh tuấn, khôi ngô, đẹp trai',hv:'anh tuấn',em:'😎',lesson:1,
   explain:['(Đàn ông) đẹp trai, có khí chất. Trang trọng hơn 帅.'],
   usage:'Chỉ dùng cho NAM giới: 英俊的小伙子, 长得很英俊. Khẩu ngữ tương đương: 帅.',
   collo:['英俊高大','英俊的小伙子','长得很英俊'],
   ex_zh:'七郎英俊高大、力大无比。',ex_py:'Qīláng yīngjùn gāodà, lì dà wú bǐ.',ex_vn:'Thất Lang khôi ngô cao lớn, sức mạnh vô song.',
   exList:[
     {zh:'七郎英俊高大、力大无比。',py:'Qīláng yīngjùn gāodà, lì dà wú bǐ.',vn:'Thất Lang khôi ngô cao lớn, sức mạnh vô song.'},
     {zh:'新来的体育老师长得很英俊。',py:'Xīn lái de tǐyù lǎoshī zhǎng de hěn yīngjùn.',vn:'Thầy thể dục mới đến trông rất điển trai.'},
     {zh:'照片上那个英俊的小伙子是我爷爷年轻的时候。',py:'Zhàopiàn shang nàge yīngjùn de xiǎohuǒzi shì wǒ yéye niánqīng de shíhou.',vn:'Chàng trai khôi ngô trong ảnh chính là ông tôi hồi trẻ.'}
   ],
   colloFull:[{zh:'英俊高大',py:'yīngjùn gāodà',vn:'khôi ngô cao lớn'},{zh:'英俊的小伙子',py:'yīngjùn de xiǎohuǒzi',vn:'chàng trai khôi ngô'},{zh:'长得很英俊',py:'zhǎng de hěn yīngjùn',vn:'trông rất điển trai'},{zh:'英俊潇洒',py:'yīngjùn xiāosǎ',vn:'đẹp trai phong độ'}],
   patterns:[{s:'长得 + 很 + 英俊',m:'Trông rất đẹp trai'},{s:'英俊的 + N (nam)',m:'Chàng … khôi ngô'}],
   checkList:[
     {promptLang:'vi',prompt:'Anh trai tôi càng lớn càng đẹp trai.',answer:'我哥哥越长越英俊了。',answerPy:'Wǒ gēge yuè zhǎng yuè yīngjùn le.',note:'越 V 越 + tính từ; 英俊 chỉ dùng cho nam.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Anh ấy không những khôi ngô mà còn rất tốt bụng.',answer:'他不仅长得英俊，而且心地善良。',answerPy:'Tā bùjǐn zhǎng de yīngjùn, érqiě xīndì shànliáng.',note:'长得英俊: bổ ngữ trình độ với 得.',pair:'不仅……而且……'}
   ]},

  {n:12,zh:'咬',py:'yǎo',pos:'Động từ',vn:'cắn',hv:'giảo',em:'🐕',lesson:1,
   explain:['Dùng răng cắn, ngoạm. 咬住 = cắn chặt không nhả.'],
   usage:'咬 + người/vật; bổ ngữ hay gặp: 咬住, 咬了一口, 咬伤. Câu bị động: 被狗咬了.',
   collo:['咬住','咬了一口','被狗咬了'],
   ex_zh:'这条狗非常勇敢，无论咬住什么都不会松口。',ex_py:'Zhè tiáo gǒu fēicháng yǒnggǎn, wúlùn yǎozhù shénme dōu bú huì sōngkǒu.',ex_vn:'Con chó này vô cùng dũng cảm, hễ cắn được thứ gì thì không bao giờ nhả ra.',
   exList:[
     {zh:'这条狗非常勇敢，无论咬住什么都不会松口。',py:'Zhè tiáo gǒu fēicháng yǒnggǎn, wúlùn yǎozhù shénme dōu bú huì sōngkǒu.',vn:'Con chó này vô cùng dũng cảm, hễ cắn được thứ gì thì không bao giờ nhả ra.'},
     {zh:'七郎的狗追上了“夕”，并死死地咬住了它。',py:'Qīláng de gǒu zhuīshangle "Xī", bìng sǐsǐ de yǎozhùle tā.',vn:'Con chó của Thất Lang đuổi kịp "Tịch" và cắn chặt lấy nó.'},
     {zh:'他咬了一口苹果，说：“真甜！”',py:'Tā yǎole yì kǒu píngguǒ, shuō: "Zhēn tián!"',vn:'Cậu ấy cắn một miếng táo rồi nói: "Ngọt quá!"'}
   ],
   colloFull:[{zh:'咬住',py:'yǎozhù',vn:'cắn chặt'},{zh:'咬了一口',py:'yǎole yì kǒu',vn:'cắn một miếng'},{zh:'被狗咬了',py:'bèi gǒu yǎo le',vn:'bị chó cắn'},{zh:'死死地咬住',py:'sǐsǐ de yǎozhù',vn:'cắn chặt không buông'}],
   patterns:[{s:'咬 + 住 / 伤 / 了一口',m:'Cắn chặt / cắn bị thương / cắn một miếng'},{s:'被 + 狗 / 蚊子 + 咬了',m:'Bị chó / muỗi cắn'}],
   checkList:[
     {promptLang:'vi',prompt:'Hôm qua em trai tôi bị chó nhà hàng xóm cắn.',answer:'昨天我弟弟被邻居家的狗咬了。',answerPy:'Zuótiān wǒ dìdi bèi línjū jiā de gǒu yǎo le.',note:'Câu bị động với 咬: 被 + tác nhân + 咬了.',pair:'被'},
     {promptLang:'vi',prompt:'Con chó này hễ cắn được thứ gì là không bao giờ nhả ra.',answer:'这条狗一咬住什么就不会松口。',answerPy:'Zhè tiáo gǒu yì yǎozhù shénme jiù bú huì sōngkǒu.',note:'咬住 = cắn chặt (bổ ngữ kết quả 住).',pair:'一……就……'}
   ]},

  {n:13,zh:'外公',py:'wàigōng',pos:'Danh từ',vn:'ông ngoại',hv:'ngoại công',em:'👴',lesson:1,
   explain:['Bố của mẹ. Cách gọi phổ biến ở miền Nam Trung Quốc; miền Bắc hay nói 姥爷 (lǎoye).'],
   usage:'Đi đôi với 外婆 (bà ngoại). Phân biệt: 爷爷 là ông NỘI.',
   collo:['外公外婆','去外公家','我的外公'],
   ex_zh:'七郎看到邻居家女孩的外公坐在路边哭。',ex_py:'Qīláng kàndào línjū jiā nǚhái de wàigōng zuò zài lù biān kū.',ex_vn:'Thất Lang thấy ông ngoại của cô bé nhà hàng xóm ngồi khóc bên đường.',
   exList:[
     {zh:'七郎看到邻居家女孩的外公坐在路边哭。',py:'Qīláng kàndào línjū jiā nǚhái de wàigōng zuò zài lù biān kū.',vn:'Thất Lang thấy ông ngoại của cô bé nhà hàng xóm ngồi khóc bên đường.'},
     {zh:'见了外公，你替我向他问好。',py:'Jiànle wàigōng, nǐ tì wǒ xiàng tā wènhǎo.',vn:'Gặp ông ngoại thì con gửi lời hỏi thăm ông giúp mẹ nhé.'},
     {zh:'每年春节，我们都去外公外婆家拜年。',py:'Měi nián Chūnjié, wǒmen dōu qù wàigōng wàipó jiā bàinián.',vn:'Tết năm nào chúng tôi cũng đến nhà ông bà ngoại chúc Tết.'}
   ],
   colloFull:[{zh:'外公外婆',py:'wàigōng wàipó',vn:'ông bà ngoại'},{zh:'去外公家',py:'qù wàigōng jiā',vn:'đến nhà ông ngoại'},{zh:'我的外公',py:'wǒ de wàigōng',vn:'ông ngoại tôi'},{zh:'看望外公',py:'kànwàng wàigōng',vn:'thăm ông ngoại'}],
   patterns:[{s:'外公 ↔ 外婆 (bên ngoại) · 爷爷 ↔ 奶奶 (bên nội)',m:'Phân biệt ông bà nội / ngoại'},{s:'去 + 外公(外婆)家',m:'Về nhà ông bà ngoại'}],
   checkList:[
     {promptLang:'vi',prompt:'Ông ngoại tôi đã hơn tám mươi tuổi mà sức khoẻ càng ngày càng tốt.',answer:'我外公已经八十多岁了，身体却越来越好。',answerPy:'Wǒ wàigōng yǐjīng bāshí duō suì le, shēntǐ què yuè lái yuè hǎo.',note:'外公 = bố của mẹ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Món ăn này là ông ngoại dạy tôi nấu.',answer:'这个菜是外公教我做的。',answerPy:'Zhège cài shì wàigōng jiāo wǒ zuò de.',note:'Nhấn mạnh ai làm: 是 + 外公 + V + 的.',pair:'是……的'}
   ]},

  {n:14,zh:'询问',py:'xúnwèn',pos:'Động từ',vn:'hỏi, hỏi han, hỏi ý kiến',hv:'tuân vấn',em:'🙋',lesson:1,
   explain:['Hỏi để biết tình hình hoặc xin ý kiến; thiên về VĂN VIẾT, trang trọng. Có thể làm danh từ (回答……的询问).'],
   usage:'询问 + người / 情况 / 意见. Không mang bổ ngữ kết quả 到 (✗ 询问到). Trạng ngữ: 仔细地/关心地/急忙/纷纷 + 询问.',
   collo:['询问情况','询问意见','仔细地询问','上前询问'],
   ex_zh:'七郎看到女孩的外公坐在路边哭，于是上前询问。',ex_py:'Qīláng kàndào nǚhái de wàigōng zuò zài lù biān kū, yúshì shàngqián xúnwèn.',ex_vn:'Thất Lang thấy ông ngoại cô bé ngồi khóc bên đường, bèn tiến lại hỏi han.',
   exList:[
     {zh:'七郎看到女孩的外公坐在路边哭，于是上前询问。',py:'Qīláng kàndào nǚhái de wàigōng zuò zài lù biān kū, yúshì shàngqián xúnwèn.',vn:'Thất Lang thấy ông ngoại cô bé ngồi khóc bên đường, bèn tiến lại hỏi han.'},
     {zh:'他仔细地询问了公司近年来的发展情况。',py:'Tā zǐxì de xúnwènle gōngsī jìnnián lái de fāzhǎn qíngkuàng.',vn:'Ông ấy hỏi kỹ về tình hình phát triển của công ty mấy năm gần đây.'},
     {zh:'医生关心地询问了病人的身体情况。',py:'Yīshēng guānxīn de xúnwènle bìngrén de shēntǐ qíngkuàng.',vn:'Bác sĩ ân cần hỏi han tình hình sức khoẻ của bệnh nhân.'}
   ],
   colloFull:[{zh:'询问情况',py:'xúnwèn qíngkuàng',vn:'hỏi tình hình'},{zh:'询问意见',py:'xúnwèn yìjiàn',vn:'hỏi ý kiến'},{zh:'仔细地询问',py:'zǐxì de xúnwèn',vn:'hỏi kỹ'},{zh:'上前询问',py:'shàngqián xúnwèn',vn:'tiến lại hỏi'},{zh:'关心地询问',py:'guānxīn de xúnwèn',vn:'ân cần hỏi han'}],
   patterns:[{s:'询问 + người / 情况 / 意见',m:'Hỏi ai / hỏi tình hình / hỏi ý kiến'},{s:'仔细地 / 关心地 / 急忙 / 纷纷 + 询问',m:'Trạng ngữ hay đi với 询问'}],
   checkList:[
     {promptLang:'vi',prompt:'Tin vừa đưa ra, điện thoại hỏi thăm tình hình gọi đến tới tấp.',answer:'消息一出来，询问情况的电话就纷纷打来。',answerPy:'Xiāoxi yì chūlái, xúnwèn qíngkuàng de diànhuà jiù fēnfēn dǎlái.',note:'询问情况 làm định ngữ cho 电话.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cảnh sát đã hỏi những người hàng xóm từng gặp anh ta hôm đó.',answer:'警察把当天见过他的邻居都询问了一遍。',answerPy:'Jǐngchá bǎ dàngtiān jiànguo tā de línjū dōu xúnwènle yí biàn.',note:'询问 mang tân ngữ chỉ người (đối tượng được hỏi).',pair:'把'}
   ]},

  {n:15,zh:'天真',py:'tiānzhēn',pos:'Tính từ',vn:'ngây thơ, hồn nhiên',hv:'thiên chân',em:'👧',lesson:1,
   explain:['Trong sáng, hồn nhiên như trẻ con. Nói người lớn "天真" thì có khi mang ý CHÊ: ngây thơ, cả tin.'],
   usage:'天真的 + 孩子/性格/想法; 天真可爱. Nói người lớn: 你太天真了 (cậu ngây thơ quá).',
   collo:['天真的孩子','天真可爱','天真的想法'],
   ex_zh:'原来天真可爱的女孩被“夕”吃掉了。',ex_py:'Yuánlái tiānzhēn kě\'ài de nǚhái bèi "Xī" chīdiào le.',ex_vn:'Hoá ra cô bé ngây thơ đáng yêu đã bị "Tịch" ăn thịt.',
   exList:[
     {zh:'原来天真可爱的女孩被“夕”吃掉了。',py:'Yuánlái tiānzhēn kě\'ài de nǚhái bèi "Xī" chīdiào le.',vn:'Hoá ra cô bé ngây thơ đáng yêu đã bị "Tịch" ăn thịt.'},
     {zh:'孩子们天真的笑容让人忘记了烦恼。',py:'Háizimen tiānzhēn de xiàoróng ràng rén wàngjìle fánnǎo.',vn:'Nụ cười hồn nhiên của lũ trẻ khiến người ta quên hết phiền muộn.'},
     {zh:'你以为不复习也能考好？这种想法太天真了。',py:'Nǐ yǐwéi bú fùxí yě néng kǎohǎo? Zhè zhǒng xiǎngfǎ tài tiānzhēn le.',vn:'Cậu tưởng không ôn cũng thi tốt được à? Suy nghĩ ấy ngây thơ quá.'}
   ],
   colloFull:[{zh:'天真的孩子',py:'tiānzhēn de háizi',vn:'đứa trẻ ngây thơ'},{zh:'天真可爱',py:'tiānzhēn kě\'ài',vn:'ngây thơ đáng yêu'},{zh:'天真的想法',py:'tiānzhēn de xiǎngfǎ',vn:'suy nghĩ ngây thơ'},{zh:'天真的性格',py:'tiānzhēn de xìnggé',vn:'tính cách hồn nhiên'}],
   patterns:[{s:'天真的 + 孩子 / 性格 / 想法',m:'(Đứa trẻ / tính cách / suy nghĩ) ngây thơ'},{s:'你太天真了',m:'Cậu ngây thơ quá (ý chê)'}],
   checkList:[
     {promptLang:'vi',prompt:'Cô bé ấy không những ngây thơ mà còn rất đáng yêu.',answer:'那个小女孩不仅天真，而且非常可爱。',answerPy:'Nàge xiǎo nǚhái bùjǐn tiānzhēn, érqiě fēicháng kě\'ài.',note:'天真 làm vị ngữ, tả trẻ nhỏ mang nghĩa khen.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Tuy suy nghĩ này hơi ngây thơ nhưng cũng rất đáng quý.',answer:'这个想法虽然有点儿天真，但是很可贵。',answerPy:'Zhège xiǎngfǎ suīrán yǒudiǎnr tiānzhēn, dànshì hěn kěguì.',note:'Nói ý tưởng/người lớn 天真 thường mang ý chê nhẹ.',pair:'虽然……但是……'}
   ]},

  {n:16,zh:'杀',py:'shā',pos:'Động từ',vn:'giết',hv:'sát',em:'⚔️',lesson:1,
   explain:['Làm cho chết. Bổ ngữ kết quả hay gặp: 杀死, 杀掉.'],
   usage:'杀 + 死/掉 + đối tượng; câu 把: 把……杀掉. Cùng gốc với 自杀 (bài 1).',
   collo:['杀死','杀掉','把……杀掉'],
   ex_zh:'七郎暗暗下定决心一定要杀死“夕”。',ex_py:'Qīláng àn\'àn xiàdìng juéxīn yídìng yào shāsǐ "Xī".',ex_vn:'Thất Lang thầm hạ quyết tâm nhất định phải giết chết "Tịch".',
   exList:[
     {zh:'七郎暗暗下定决心一定要杀死“夕”。',py:'Qīláng àn\'àn xiàdìng juéxīn yídìng yào shāsǐ "Xī".',vn:'Thất Lang thầm hạ quyết tâm nhất định phải giết chết "Tịch".'},
     {zh:'一见到“夕”，大家就一起把“夕”杀掉。',py:'Yí jiàndào "Xī", dàjiā jiù yìqǐ bǎ "Xī" shādiào.',vn:'Hễ thấy "Tịch" là mọi người cùng nhau giết nó.'},
     {zh:'这种药能杀死房间里的蚊子。',py:'Zhè zhǒng yào néng shāsǐ fángjiān li de wénzi.',vn:'Loại thuốc này có thể diệt muỗi trong phòng.'}
   ],
   colloFull:[{zh:'杀死',py:'shāsǐ',vn:'giết chết'},{zh:'杀掉',py:'shādiào',vn:'giết đi'},{zh:'把……杀掉',py:'bǎ…… shādiào',vn:'giết … đi'},{zh:'杀死蚊子',py:'shāsǐ wénzi',vn:'diệt muỗi'}],
   patterns:[{s:'杀 + 死 / 掉',m:'Giết chết'},{s:'把 + N + 杀掉',m:'Giết … đi (câu 把)'}],
   checkList:[
     {promptLang:'vi',prompt:'Mọi người cùng nhau giết con quái vật.',answer:'大家一起把怪物杀掉了。',answerPy:'Dàjiā yìqǐ bǎ guàiwù shādiào le.',note:'Câu 把 + 杀掉: kết quả là đối tượng không còn nữa.',pair:'把'},
     {promptLang:'vi',prompt:'Cuối cùng "Tịch" bị Thất Lang giết chết.',answer:'“夕”最后被七郎杀死了。',answerPy:'"Xī" zuìhòu bèi Qīláng shāsǐ le.',note:'Câu 被: 被 + người làm + 杀死.',pair:'被'}
   ]},

  {n:17,zh:'替',py:'tì',pos:'Động từ / Giới từ',vn:'thay, thay thế; (giới từ) cho, vì',hv:'thế',em:'🔄',lesson:1,
   explain:['Động từ = 代替 (thay thế): 你能替替他吗?','Giới từ = 给 / 为 (cho, vì): 替百姓除掉……, 替他高兴. ĐIỂM NGỮ PHÁP của bài.'],
   usage:'Giới từ: 替 + người + động từ. Động từ: A 替 B (A thay B). Từ đầy đủ: 代替 dàitì.',
   collo:['替我问好','替他高兴','替百姓除害','代替'],
   ex_zh:'见了外公，你替我向他问好。',ex_py:'Jiànle wàigōng, nǐ tì wǒ xiàng tā wènhǎo.',ex_vn:'Gặp ông ngoại thì con gửi lời hỏi thăm ông giúp mẹ nhé.',
   exList:[
     {zh:'见了外公，你替我向他问好。',py:'Jiànle wàigōng, nǐ tì wǒ xiàng tā wènhǎo.',vn:'Gặp ông ngoại thì con gửi lời hỏi thăm ông giúp mẹ nhé.'},
     {zh:'刘老师今天有点儿事来不了了，你能替替他吗？',py:'Liú lǎoshī jīntiān yǒudiǎnr shì lái bu liǎo le, nǐ néng tìti tā ma?',vn:'Hôm nay thầy Lưu có chút việc không đến được, bạn dạy thay thầy ấy được không?'},
     {zh:'李阳要去留学了，我们都替他高兴。',py:'Lǐ Yáng yào qù liúxué le, wǒmen dōu tì tā gāoxìng.',vn:'Lý Dương sắp đi du học, chúng tôi đều mừng cho cậu ấy.'}
   ],
   colloFull:[{zh:'替我问好',py:'tì wǒ wènhǎo',vn:'hỏi thăm giúp tôi'},{zh:'替他高兴',py:'tì tā gāoxìng',vn:'mừng cho anh ấy'},{zh:'替百姓除害',py:'tì bǎixìng chú hài',vn:'trừ hại cho dân'},{zh:'代替',py:'dàitì',vn:'thay thế'},{zh:'替他着急',py:'tì tā zháojí',vn:'sốt ruột thay cho anh ấy'}],
   patterns:[{s:'替 + người + V (giới từ)',m:'Làm gì cho / giúp ai'},{s:'A + 替 + B (động từ)',m:'A làm thay B'}],
   checkList:[
     {promptLang:'vi',prompt:'Bạn yên tâm, tôi sẽ trả tiền thay anh ấy cho bạn.',answer:'你放心吧，我会替他把钱还给你的。',answerPy:'Nǐ fàngxīn ba, wǒ huì tì tā bǎ qián huán gěi nǐ de.',note:'替 + người + (把……) V: làm thay ai.',pair:'把'},
     {promptLang:'vi',prompt:'Tuy mình không đỗ nhưng mình thật lòng mừng cho cậu.',answer:'虽然我没考上，但是我真心替你高兴。',answerPy:'Suīrán wǒ méi kǎoshang, dànshì wǒ zhēnxīn tì nǐ gāoxìng.',note:'替 + người + tính từ tâm trạng: vui/lo cho ai.',pair:'虽然……但是……'}
   ]},

  {n:18,zh:'除',py:'chú',pos:'Động từ',vn:'trừ, trừ khử, loại bỏ',hv:'trừ',em:'🧹',lesson:1,
   explain:['Loại bỏ, diệt trừ cái xấu. Bổ ngữ hay gặp: 除掉, 除去. Cũng là chữ 除 trong 除夕.'],
   usage:'除 + 掉/去 + đối tượng xấu: 除掉怪物, 除去杂草. Thành ngữ: 为民除害 (trừ hại cho dân).',
   collo:['除掉','除去','为民除害'],
   ex_zh:'七郎要替百姓除掉这个制造灾害的东西。',ex_py:'Qīláng yào tì bǎixìng chúdiào zhège zhìzào zāihài de dōngxi.',ex_vn:'Thất Lang muốn trừ khử thứ gây ra tai hoạ này cho dân chúng.',
   exList:[
     {zh:'七郎要替百姓除掉这个制造灾害的东西。',py:'Qīláng yào tì bǎixìng chúdiào zhège zhìzào zāihài de dōngxi.',vn:'Thất Lang muốn trừ khử thứ gây ra tai hoạ này cho dân chúng.'},
     {zh:'除掉“夕”以后，百姓纷纷对七郎表达谢意。',py:'Chúdiào "Xī" yǐhòu, bǎixìng fēnfēn duì Qīláng biǎodá xièyì.',vn:'Sau khi trừ được "Tịch", dân chúng nối nhau bày tỏ lòng biết ơn với Thất Lang.'},
     {zh:'爷爷每天早上都去花园里除草。',py:'Yéye měi tiān zǎoshang dōu qù huāyuán li chú cǎo.',vn:'Sáng nào ông cũng ra vườn nhổ cỏ.'}
   ],
   colloFull:[{zh:'除掉',py:'chúdiào',vn:'trừ khử'},{zh:'除去',py:'chúqù',vn:'loại bỏ'},{zh:'为民除害',py:'wèi mín chú hài',vn:'trừ hại cho dân'},{zh:'除草',py:'chú cǎo',vn:'nhổ cỏ, làm cỏ'}],
   patterns:[{s:'除 + 掉 / 去 + N',m:'Trừ bỏ …'},{s:'把 + N + 除掉',m:'Loại bỏ … (câu 把)'}],
   checkList:[
     {promptLang:'vi',prompt:'Thất Lang quyết tâm trừ khử con quái vật cho dân chúng.',answer:'七郎下定决心替百姓把怪物除掉。',answerPy:'Qīláng xiàdìng juéxīn tì bǎixìng bǎ guàiwù chúdiào.',note:'把 + N + 除掉; 替 + người đứng trước.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần trừ được "Tịch" thì dân chúng có thể sống yên ổn.',answer:'只要除掉“夕”，百姓就能过上安宁的日子。',answerPy:'Zhǐyào chúdiào "Xī", bǎixìng jiù néng guòshang ānníng de rìzi.',note:'除掉 + đối tượng xấu.',pair:'只要……就……'}
   ]},

  {n:19,zh:'制造',py:'zhìzào',pos:'Động từ',vn:'chế tạo, sản xuất; gây ra',hv:'chế tạo',em:'🏭',lesson:1,
   explain:['① Chế tạo, sản xuất: 制造飞机. ② (nghĩa xấu) Gây ra, tạo ra: 制造麻烦, 制造灾害, 制造紧张气氛.'],
   usage:'Tân ngữ trong sách: 飞机/机会/战争/难题. Nghĩa ② thường đi với thứ tiêu cực.',
   collo:['制造飞机','制造机会','制造麻烦','制造灾害'],
   ex_zh:'两岁的果果是我们家最能制造麻烦的人。',ex_py:'Liǎng suì de Guǒguo shì wǒmen jiā zuì néng zhìzào máfan de rén.',ex_vn:'Quả Quả hai tuổi là người "gây rối" giỏi nhất nhà tôi.',
   exList:[
     {zh:'两岁的果果是我们家最能制造麻烦的人。',py:'Liǎng suì de Guǒguo shì wǒmen jiā zuì néng zhìzào máfan de rén.',vn:'Quả Quả hai tuổi là người "gây rối" giỏi nhất nhà tôi.'},
     {zh:'这家工厂是制造飞机的。',py:'Zhè jiā gōngchǎng shì zhìzào fēijī de.',vn:'Nhà máy này chuyên chế tạo máy bay.'},
     {zh:'他想给自己制造一个跟她说话的机会。',py:'Tā xiǎng gěi zìjǐ zhìzào yí ge gēn tā shuōhuà de jīhuì.',vn:'Cậu ấy muốn tạo cho mình một cơ hội được nói chuyện với cô ấy.'}
   ],
   colloFull:[{zh:'制造飞机',py:'zhìzào fēijī',vn:'chế tạo máy bay'},{zh:'制造机会',py:'zhìzào jīhuì',vn:'tạo cơ hội'},{zh:'制造麻烦',py:'zhìzào máfan',vn:'gây rắc rối'},{zh:'制造灾害',py:'zhìzào zāihài',vn:'gây tai hoạ'},{zh:'制造难题',py:'zhìzào nántí',vn:'gây khó dễ'}],
   patterns:[{s:'制造 + 飞机 / 汽车 (sản xuất)',m:'Chế tạo, sản xuất'},{s:'制造 + 麻烦 / 灾害 / 难题 (gây ra)',m:'Gây ra điều xấu'}],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc ô tô này là do Trung Quốc sản xuất.',answer:'这辆汽车是中国制造的。',answerPy:'Zhè liàng qìchē shì Zhōngguó zhìzào de.',note:'是 + nơi sản xuất + 制造 + 的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Cậu ấy không những không giúp mà còn gây thêm rắc rối cho chúng tôi.',answer:'他不仅没帮忙，而且还给我们制造了很多麻烦。',answerPy:'Tā bùjǐn méi bāngmáng, érqiě hái gěi wǒmen zhìzàole hěn duō máfan.',note:'给 + người + 制造麻烦: gây rắc rối cho ai.',pair:'不仅……而且……'}
   ]},

  {n:20,zh:'灾害',py:'zāihài',pos:'Danh từ',vn:'tai hoạ, thiên tai',hv:'tai hại',em:'🌪️',lesson:1,
   explain:['Tai hoạ do thiên nhiên hoặc con người gây ra, thiệt hại lớn. BẪY: tiếng Việt "tai hại" là tính từ (có hại), còn 灾害 là DANH TỪ.'],
   usage:'自然灾害 (thiên tai), 发生灾害, 制造灾害. Không nói ✗ 很灾害.',
   collo:['自然灾害','发生灾害','制造灾害'],
   ex_zh:'七郎要替百姓除掉这个制造灾害的东西。',ex_py:'Qīláng yào tì bǎixìng chúdiào zhège zhìzào zāihài de dōngxi.',ex_vn:'Thất Lang muốn trừ khử thứ gây ra tai hoạ này cho dân chúng.',
   exList:[
     {zh:'七郎要替百姓除掉这个制造灾害的东西。',py:'Qīláng yào tì bǎixìng chúdiào zhège zhìzào zāihài de dōngxi.',vn:'Thất Lang muốn trừ khử thứ gây ra tai hoạ này cho dân chúng.'},
     {zh:'越南中部每年都会发生不少自然灾害。',py:'Yuènán zhōngbù měi nián dōu huì fāshēng bù shǎo zìrán zāihài.',vn:'Miền Trung Việt Nam năm nào cũng xảy ra khá nhiều thiên tai.'},
     {zh:'只要提前做好准备，灾害带来的损失就会小很多。',py:'Zhǐyào tíqián zuòhǎo zhǔnbèi, zāihài dàilái de sǔnshī jiù huì xiǎo hěn duō.',vn:'Chỉ cần chuẩn bị trước thì thiệt hại do thiên tai gây ra sẽ nhỏ hơn nhiều.'}
   ],
   colloFull:[{zh:'自然灾害',py:'zìrán zāihài',vn:'thiên tai'},{zh:'发生灾害',py:'fāshēng zāihài',vn:'xảy ra thiên tai'},{zh:'制造灾害',py:'zhìzào zāihài',vn:'gây tai hoạ'},{zh:'灾害带来的损失',py:'zāihài dàilái de sǔnshī',vn:'thiệt hại do thiên tai'}],
   patterns:[{s:'发生 + 灾害',m:'Xảy ra thiên tai'},{s:'自然灾害',m:'Thiên tai (bão, lũ, động đất…)'}],
   checkList:[
     {promptLang:'vi',prompt:'Mấy năm nay thiên tai ở miền Trung càng ngày càng nhiều.',answer:'这几年，中部地区的自然灾害越来越多了。',answerPy:'Zhè jǐ nián, zhōngbù dìqū de zìrán zāihài yuè lái yuè duō le.',note:'自然灾害 = thiên tai.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ cần chuẩn bị trước thì thiệt hại do thiên tai sẽ ít hơn nhiều.',answer:'只要提前做好准备，灾害带来的损失就会小很多。',answerPy:'Zhǐyào tíqián zuòhǎo zhǔnbèi, zāihài dàilái de sǔnshī jiù huì xiǎo hěn duō.',note:'灾害 là danh từ, làm chủ ngữ của 带来.',pair:'只要……就……'}
   ]},

  {n:21,zh:'逃',py:'táo',pos:'Động từ',vn:'chạy trốn, bỏ chạy',hv:'đào',em:'🏃',lesson:1,
   explain:['Chạy trốn để thoát nguy hiểm. Cũng nói 逃跑.'],
   usage:'往 + hướng + 逃; 逃得 + bổ ngữ (逃得连影子都找不着). Cụm: 逃走, 逃出来.',
   collo:['往外逃','逃走','逃得很快'],
   ex_zh:'“夕”吓得什么似的，急忙往外逃。',ex_py:'"Xī" xià de shénme shìde, jímáng wǎng wài táo.',ex_vn:'"Tịch" sợ hết hồn, vội vàng chạy trốn ra ngoài.',
   exList:[
     {zh:'“夕”吓得什么似的，急忙往外逃。',py:'"Xī" xià de shénme shìde, jímáng wǎng wài táo.',vn:'"Tịch" sợ hết hồn, vội vàng chạy trốn ra ngoài.'},
     {zh:'到天亮前，它又会逃得连影子都找不着了。',py:'Dào tiān liàng qián, tā yòu huì táo de lián yǐngzi dōu zhǎo bu zháo le.',vn:'Trước khi trời sáng, nó lại trốn biệt tăm, đến cái bóng cũng chẳng thấy.'},
     {zh:'小偷一看到警察，就赶紧逃走了。',py:'Xiǎotōu yí kàndào jǐngchá, jiù gǎnjǐn táozǒu le.',vn:'Tên trộm vừa thấy cảnh sát là vội chạy mất.'}
   ],
   colloFull:[{zh:'往外逃',py:'wǎng wài táo',vn:'chạy trốn ra ngoài'},{zh:'逃走',py:'táozǒu',vn:'trốn mất'},{zh:'逃得很快',py:'táo de hěn kuài',vn:'chạy trốn rất nhanh'},{zh:'逃出来',py:'táo chūlái',vn:'trốn thoát ra'}],
   patterns:[{s:'往 + hướng + 逃',m:'Chạy trốn về phía …'},{s:'逃 + 走 / 出来 / 跑',m:'Trốn mất / trốn thoát'}],
   checkList:[
     {promptLang:'vi',prompt:'Tên trộm vừa thấy cảnh sát là chạy mất.',answer:'小偷一看见警察就逃走了。',answerPy:'Xiǎotōu yí kànjiàn jǐngchá jiù táozǒu le.',note:'逃走 = trốn mất.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nó chạy nhanh đến mức đến cái bóng cũng chẳng thấy.',answer:'它逃得连影子都找不着了。',answerPy:'Tā táo de lián yǐngzi dōu zhǎo bu zháo le.',note:'逃得 + bổ ngữ trình độ.',pair:'连……都……'}
   ]},

  {n:22,zh:'影子',py:'yǐngzi',pos:'Danh từ',vn:'bóng, cái bóng',hv:'ảnh tử',em:'👤',lesson:1,
   explain:['Cái bóng do vật che ánh sáng tạo ra. 连影子都找不着 = biệt tăm, không thấy dấu vết gì.'],
   usage:'连影子都没有/找不着 (biệt tăm). Lượng từ: 个. Ghép: 树的影子, 人影.',
   collo:['连影子都找不着','树的影子','自己的影子'],
   ex_zh:'到天亮前，它又会逃得连影子都找不着了。',ex_py:'Dào tiān liàng qián, tā yòu huì táo de lián yǐngzi dōu zhǎo bu zháo le.',ex_vn:'Trước khi trời sáng, nó lại trốn biệt tăm, đến cái bóng cũng chẳng thấy.',
   exList:[
     {zh:'到天亮前，它又会逃得连影子都找不着了。',py:'Dào tiān liàng qián, tā yòu huì táo de lián yǐngzi dōu zhǎo bu zháo le.',vn:'Trước khi trời sáng, nó lại trốn biệt tăm, đến cái bóng cũng chẳng thấy.'},
     {zh:'中午的时候，树的影子最短。',py:'Zhōngwǔ de shíhou, shù de yǐngzi zuì duǎn.',vn:'Vào buổi trưa, bóng cây ngắn nhất.'},
     {zh:'说好八点见面，都九点了，他连个影子都没有。',py:'Shuōhǎo bā diǎn jiànmiàn, dōu jiǔ diǎn le, tā lián ge yǐngzi dōu méiyǒu.',vn:'Hẹn tám giờ gặp, đã chín giờ rồi mà chẳng thấy bóng dáng cậu ta đâu.'}
   ],
   colloFull:[{zh:'连影子都找不着',py:'lián yǐngzi dōu zhǎo bu zháo',vn:'biệt tăm biệt tích'},{zh:'树的影子',py:'shù de yǐngzi',vn:'bóng cây'},{zh:'自己的影子',py:'zìjǐ de yǐngzi',vn:'cái bóng của mình'},{zh:'看不见影子',py:'kàn bu jiàn yǐngzi',vn:'chẳng thấy bóng dáng'}],
   patterns:[{s:'连 + 影子 + 都 + 没有 / 找不着',m:'Chẳng thấy bóng dáng đâu'},{s:'N + 的影子',m:'Cái bóng của …'}],
   checkList:[
     {promptLang:'vi',prompt:'Đã chín giờ rồi mà chẳng thấy bóng dáng cậu ta đâu.',answer:'都九点了，他连影子都没有。',answerPy:'Dōu jiǔ diǎn le, tā lián yǐngzi dōu méiyǒu.',note:'连影子都没有 = biệt tăm, chưa thấy đâu.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Buổi trưa bóng người ngắn nhất, buổi tối thì càng lúc càng dài.',answer:'中午人的影子最短，到了傍晚就越来越长。',answerPy:'Zhōngwǔ rén de yǐngzi zuì duǎn, dàole bàngwǎn jiù yuè lái yuè cháng.',note:'影子 = cái bóng (nghĩa đen).',pair:'越来越……'}
   ]},

  {n:23,zh:'此外',py:'cǐwài',pos:'Liên từ',vn:'ngoài ra, hơn nữa',hv:'thử ngoại',em:'➕',lesson:1,
   explain:['Ngoài những điều vừa nói ra thì còn… Dùng để nối hai câu/hai đoạn, thiên về văn viết.'],
   usage:'Đứng ĐẦU vế sau, thường có dấu phẩy: ……；此外，…… 还/也 ……. Khác 另外: 此外 KHÔNG đứng trước danh từ/động từ với nghĩa "khác" (✗ 此外一个人, ✗ 此外安排).',
   collo:['此外，……还……','此外，……也……'],
   ex_zh:'它一般在太阳落山后出来害人；此外，它还特别害怕声响。',ex_py:'Tā yìbān zài tàiyáng luòshān hòu chūlái hài rén; cǐwài, tā hái tèbié hàipà shēngxiǎng.',ex_vn:'Nó thường ra hại người sau khi mặt trời lặn; ngoài ra, nó còn đặc biệt sợ tiếng động.',
   exList:[
     {zh:'它一般在太阳落山后出来害人；此外，它还特别害怕声响。',py:'Tā yìbān zài tàiyáng luòshān hòu chūlái hài rén; cǐwài, tā hái tèbié hàipà shēngxiǎng.',vn:'Nó thường ra hại người sau khi mặt trời lặn; ngoài ra, nó còn đặc biệt sợ tiếng động.'},
     {zh:'他喜欢音乐、电影、运动，此外还喜欢旅行。',py:'Tā xǐhuan yīnyuè, diànyǐng, yùndòng, cǐwài hái xǐhuan lǚxíng.',vn:'Anh ấy thích âm nhạc, phim ảnh, thể thao, ngoài ra còn thích du lịch.'},
     {zh:'这次考试要带准考证和身份证，此外不能带手机。',py:'Zhè cì kǎoshì yào dài zhǔnkǎozhèng hé shēnfènzhèng, cǐwài bù néng dài shǒujī.',vn:'Kỳ thi này phải mang giấy báo dự thi và căn cước, ngoài ra không được mang điện thoại.'}
   ],
   colloFull:[{zh:'此外，……还……',py:'cǐwài, …… hái ……',vn:'ngoài ra, … còn …'},{zh:'此外，……也……',py:'cǐwài, …… yě ……',vn:'ngoài ra, … cũng …'},{zh:'此外还有',py:'cǐwài hái yǒu',vn:'ngoài ra còn có'},{zh:'此外，我们还需要……',py:'cǐwài, wǒmen hái xūyào ……',vn:'ngoài ra chúng ta còn cần …'}],
   patterns:[{s:'……。此外，…… 还 / 也 ……',m:'Ngoài ra (nối câu, văn viết)'},{s:'✗ 此外 + N (nghĩa "khác") → dùng 另外',m:'此外 không làm định ngữ'}],
   checkList:[
     {promptLang:'vi',prompt:'Nhà hàng này không chỉ đồ ăn ngon mà phục vụ cũng tốt; ngoài ra giá còn rất rẻ.',answer:'这家饭馆不仅菜好吃，服务也很好；此外，价格还很便宜。',answerPy:'Zhè jiā fànguǎn bùjǐn cài hǎochī, fúwù yě hěn hǎo; cǐwài, jiàgé hái hěn piányi.',note:'此外 + 还 + V: bổ sung thêm thông tin.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Tuy phòng này hơi nhỏ nhưng rất sạch sẽ, ngoài ra giá cũng không đắt.',answer:'这个房间虽然小了点儿，但是很干净，此外价格也不贵。',answerPy:'Zhège fángjiān suīrán xiǎole diǎnr, dànshì hěn gānjìng, cǐwài jiàgé yě bú guì.',note:'此外 đứng đầu vế bổ sung, sau đó dùng 也/还.',pair:'虽然……但是……'}
   ]},

  {n:24,zh:'说不定',py:'shuōbudìng',pos:'Phó từ',vn:'có lẽ, không chừng',hv:'thuyết bất định',em:'🤔',lesson:1,
   explain:['Động từ: không nói chắc được (还说不定). Phó từ: phỏng đoán, khả năng khá lớn (说不定下次就成功了). ĐIỂM NGỮ PHÁP của bài.'],
   usage:'Phó từ: 说不定 + vế câu, đứng trước hoặc sau chủ ngữ. Động từ: ……还说不定 (cuối câu). Chữ 不 đọc nhẹ: shuōbudìng.',
   collo:['说不定……呢','还说不定','说不定下次就……'],
   ex_zh:'“夕”说不定晚上要出来伤害大家。',ex_py:'"Xī" shuōbudìng wǎnshang yào chūlái shānghài dàjiā.',ex_vn:'Không chừng tối nay "Tịch" sẽ ra làm hại mọi người.',
   exList:[
     {zh:'“夕”说不定晚上要出来伤害大家。',py:'"Xī" shuōbudìng wǎnshang yào chūlái shānghài dàjiā.',vn:'Không chừng tối nay "Tịch" sẽ ra làm hại mọi người.'},
     {zh:'周末他起得晚，这会儿说不定还在睡觉呢。',py:'Zhōumò tā qǐ de wǎn, zhè huìr shuōbudìng hái zài shuìjiào ne.',vn:'Cuối tuần cậu ấy dậy muộn, giờ này không chừng vẫn đang ngủ.'},
     {zh:'这事儿经理已经同意了，只是出发的时间还说不定。',py:'Zhè shìr jīnglǐ yǐjīng tóngyì le, zhǐshì chūfā de shíjiān hái shuōbudìng.',vn:'Việc này giám đốc đã đồng ý rồi, chỉ là thời gian xuất phát vẫn chưa nói chắc được.'}
   ],
   colloFull:[{zh:'说不定……呢',py:'shuōbudìng …… ne',vn:'không chừng … đấy'},{zh:'还说不定',py:'hái shuōbudìng',vn:'còn chưa chắc'},{zh:'说不定下次就……',py:'shuōbudìng xià cì jiù ……',vn:'không chừng lần sau sẽ …'},{zh:'说不定会下雨',py:'shuōbudìng huì xià yǔ',vn:'không chừng sẽ mưa'}],
   patterns:[{s:'说不定 + (chủ ngữ) + V (phó từ)',m:'Có lẽ, không chừng'},{s:'……还说不定 (động từ)',m:'Còn chưa nói chắc được'}],
   checkList:[
     {promptLang:'vi',prompt:'Đừng hễ gặp khó khăn là bỏ cuộc, không chừng lần sau sẽ thành công.',answer:'别一遇到困难就放弃，说不定下次就成功了。',answerPy:'Bié yí yùdào kùnnan jiù fàngqì, shuōbudìng xià cì jiù chénggōng le.',note:'说不定 + 下次就 + V + 了: phỏng đoán lạc quan.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chỉ cần cậu ra thư viện tìm thêm lần nữa, không chừng sẽ mượn được cuốn sách đó.',answer:'只要你再去图书馆转转，说不定就能借到那本书。',answerPy:'Zhǐyào nǐ zài qù túshūguǎn zhuànzhuan, shuōbudìng jiù néng jièdào nà běn shū.',note:'说不定 đứng đầu vế sau, trước 就能.',pair:'只要……就……'}
   ]},

  {n:25,zh:'熬夜',py:'áoyè',pos:'Động từ',vn:'thức khuya, thức đêm',hv:'ngao dạ',em:'🦉',lesson:1,
   explain:['Thức suốt đêm hoặc đến rất khuya không ngủ. LY HỢP TỪ: 熬了一夜, 熬过夜.'],
   usage:'Ly hợp: 熬了一夜 / 熬了两个晚上的夜 (✗ 熬夜两个晚上). Cụm: 熬夜学习, 熬夜等着, 经常熬夜.',
   collo:['经常熬夜','熬夜学习','熬了一夜'],
   ex_zh:'七郎让大家今晚熬夜等着。',ex_py:'Qīláng ràng dàjiā jīnwǎn áoyè děngzhe.',ex_vn:'Thất Lang bảo mọi người đêm nay thức canh chờ.',
   exList:[
     {zh:'七郎让大家今晚熬夜等着。',py:'Qīláng ràng dàjiā jīnwǎn áoyè děngzhe.',vn:'Thất Lang bảo mọi người đêm nay thức canh chờ.'},
     {zh:'经常熬夜对身体的伤害极大。',py:'Jīngcháng áoyè duì shēntǐ de shānghài jí dà.',vn:'Thường xuyên thức khuya gây hại cực lớn cho cơ thể.'},
     {zh:'为了准备考试，他熬了一夜，第二天上课一直打哈欠。',py:'Wèile zhǔnbèi kǎoshì, tā áole yí yè, dì-èr tiān shàngkè yìzhí dǎ hāqian.',vn:'Để ôn thi, cậu ấy thức trắng một đêm, hôm sau vào học ngáp suốt.'}
   ],
   colloFull:[{zh:'经常熬夜',py:'jīngcháng áoyè',vn:'thường xuyên thức khuya'},{zh:'熬夜学习',py:'áoyè xuéxí',vn:'thức khuya học bài'},{zh:'熬了一夜',py:'áole yí yè',vn:'thức trắng một đêm'},{zh:'熬夜等着',py:'áoyè děngzhe',vn:'thức canh chờ'}],
   patterns:[{s:'熬夜 + V (mục đích)',m:'Thức khuya để làm gì'},{s:'熬了 + 一夜 / 两个晚上的夜',m:'Ly hợp từ: chèn thời lượng vào giữa'}],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa từng thức khuya vì chơi game.',answer:'我从来没为了玩游戏熬过夜。',answerPy:'Wǒ cónglái méi wèile wán yóuxì áoguo yè.',note:'Ly hợp từ: 熬过夜 (không nói 熬夜过).',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Vì hôm qua thức trắng một đêm nên hôm nay cậu ấy mệt rã rời.',answer:'因为昨天熬了一夜，所以他今天累得什么似的。',answerPy:'Yīnwèi zuótiān áole yí yè, suǒyǐ tā jīntiān lèi de shénme shìde.',note:'熬了一夜: thời lượng chen giữa 熬 và 夜.',pair:'因为……所以……'}
   ]},

  {n:26,zh:'赶紧',py:'gǎnjǐn',pos:'Phó từ',vn:'vội, mau, ngay lập tức',hv:'cản khẩn',em:'⏩',lesson:1,
   explain:['Nắm lấy thời cơ, làm ngay không chậm trễ. Dùng được trong câu CẦU KHIẾN, mệnh lệnh (khác 急忙).'],
   usage:'赶紧 + động từ. Câu mệnh lệnh: 你赶紧回去吧! Thường đứng sau 就: 一……就赶紧…….',
   collo:['赶紧回去','赶紧走','一……就赶紧……'],
   ex_zh:'一见到“夕”就赶紧敲打东西。',ex_py:'Yí jiàndào "Xī" jiù gǎnjǐn qiāodǎ dōngxi.',ex_vn:'Hễ thấy "Tịch" là lập tức gõ đập đồ vật.',
   exList:[
     {zh:'一见到“夕”就赶紧敲打东西。',py:'Yí jiàndào "Xī" jiù gǎnjǐn qiāodǎ dōngxi.',vn:'Hễ thấy "Tịch" là lập tức gõ đập đồ vật.'},
     {zh:'不用送了，赶紧回去吧，家里还有别的客人呢。',py:'Búyòng sòng le, gǎnjǐn huíqu ba, jiā li hái yǒu bié de kèrén ne.',vn:'Không cần tiễn đâu, mau về đi, nhà còn khách khác nữa mà.'},
     {zh:'你赶紧给他回个电话，他好像有什么急事找你。',py:'Nǐ gǎnjǐn gěi tā huí ge diànhuà, tā hǎoxiàng yǒu shénme jí shì zhǎo nǐ.',vn:'Cậu gọi lại cho anh ấy ngay đi, hình như anh ấy có việc gấp tìm cậu.'}
   ],
   colloFull:[{zh:'赶紧回去',py:'gǎnjǐn huíqu',vn:'mau về đi'},{zh:'赶紧走',py:'gǎnjǐn zǒu',vn:'mau đi thôi'},{zh:'一……就赶紧……',py:'yī …… jiù gǎnjǐn ……',vn:'hễ … là vội …'},{zh:'赶紧回电话',py:'gǎnjǐn huí diànhuà',vn:'gọi lại ngay'}],
   patterns:[{s:'赶紧 + V (cả câu cầu khiến)',m:'Mau, nhanh chóng làm gì'},{s:'一……就赶紧……',m:'Vừa … là vội …'}],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nghe thấy tiếng động, "Tịch" liền vội vàng bỏ chạy.',answer:'“夕”一听到声响就赶紧逃走了。',answerPy:'"Xī" yì tīngdào shēngxiǎng jiù gǎnjǐn táozǒu le.',note:'一……就赶紧 + V.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Sắp muộn rồi, cậu đi mau đi, thầy giáo sẽ không chờ cậu đâu.',answer:'快迟到了，你赶紧走吧，老师是不会等你的。',answerPy:'Kuài chídào le, nǐ gǎnjǐn zǒu ba, lǎoshī shì bú huì děng nǐ de.',note:'赶紧 dùng được trong câu cầu khiến (急忙 thì không).',pair:'是……的'}
   ]},

  {n:27,zh:'果然',py:'guǒrán',pos:'Phó từ',vn:'quả nhiên, quả là',hv:'quả nhiên',em:'✅',lesson:1,
   explain:['Sự việc xảy ra ĐÚNG như đã nói hoặc đã dự đoán. Ngược sắc thái với 居然 (bài 1: ngoài dự đoán).'],
   usage:'Chủ ngữ + 果然 + vị ngữ; cũng đứng đầu câu: 果然，他没来. Vế trước thường có lời dự đoán.',
   collo:['果然不错','果然来了','果然没错'],
   ex_zh:'到了晚上，“夕”果然出来了。',ex_py:'Dàole wǎnshang, "Xī" guǒrán chūlái le.',ex_vn:'Đến tối, "Tịch" quả nhiên xuất hiện.',
   exList:[
     {zh:'到了晚上，“夕”果然出来了。',py:'Dàole wǎnshang, "Xī" guǒrán chūlái le.',vn:'Đến tối, "Tịch" quả nhiên xuất hiện.'},
     {zh:'还真让你说对了，他果然还不知道这件事。',py:'Hái zhēn ràng nǐ shuō duì le, tā guǒrán hái bù zhīdào zhè jiàn shì.',vn:'Đúng như cậu nói thật, quả nhiên anh ấy vẫn chưa biết chuyện này.'},
     {zh:'天气预报说今天有雨，下午果然下起来了。',py:'Tiānqì yùbào shuō jīntiān yǒu yǔ, xiàwǔ guǒrán xià qǐlái le.',vn:'Dự báo thời tiết nói hôm nay có mưa, chiều quả nhiên mưa thật.'}
   ],
   colloFull:[{zh:'果然不错',py:'guǒrán búcuò',vn:'quả nhiên không tồi'},{zh:'果然来了',py:'guǒrán lái le',vn:'quả nhiên đến thật'},{zh:'果然没错',py:'guǒrán méi cuò',vn:'quả nhiên không sai'},{zh:'果然名不虚传',py:'guǒrán míng bù xū chuán',vn:'quả là danh bất hư truyền'}],
   patterns:[{s:'(dự đoán) ……，Chủ ngữ + 果然 + V',m:'Quả nhiên đúng như dự đoán'},{s:'果然 ↔ 居然 (bài 1)',m:'Đúng dự đoán ↔ ngoài dự đoán'}],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ bảo hôm nay sẽ lạnh, quả nhiên chiều nay trời lạnh hẳn đi.',answer:'妈妈说今天会降温，下午果然越来越冷了。',answerPy:'Māma shuō jīntiān huì jiàngwēn, xiàwǔ guǒrán yuè lái yuè lěng le.',note:'Vế trước là dự đoán, vế sau 果然 xác nhận.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Ai cũng bảo bộ phim này hay, quả nhiên ngay cả mẹ tôi cũng xem đến phát khóc.',answer:'大家都说这部电影好看，果然连我妈妈都看哭了。',answerPy:'Dàjiā dōu shuō zhè bù diànyǐng hǎokàn, guǒrán lián wǒ māma dōu kànkū le.',note:'果然 dùng khi kết quả khớp với lời người khác nói.',pair:'连……都……'}
   ]},

  {n:28,zh:'姑娘',py:'gūniang',pos:'Danh từ',vn:'cô gái, thiếu nữ; con gái',hv:'cô nương',em:'👩',lesson:1,
   explain:['Cô gái trẻ chưa chồng. Khẩu ngữ còn dùng để chỉ con gái của mình: 我家姑娘.'],
   usage:'Lượng từ: 个/位. Cụm: 小姑娘, 漂亮的姑娘. Chữ 娘 đọc thanh nhẹ: gūniang.',
   collo:['小姑娘','一个姑娘','漂亮的姑娘'],
   ex_zh:'它想吃一户人家的姑娘，被这家人发现了。',ex_py:'Tā xiǎng chī yí hù rénjiā de gūniang, bèi zhè jiā rén fāxiàn le.',ex_vn:'Nó định ăn thịt cô gái của một nhà nọ thì bị người nhà phát hiện.',
   exList:[
     {zh:'它想吃一户人家的姑娘，被这家人发现了。',py:'Tā xiǎng chī yí hù rénjiā de gūniang, bèi zhè jiā rén fāxiàn le.',vn:'Nó định ăn thịt cô gái của một nhà nọ thì bị người nhà phát hiện.'},
     {zh:'那个穿红衣服的小姑娘是我妹妹。',py:'Nàge chuān hóng yīfu de xiǎo gūniang shì wǒ mèimei.',vn:'Cô bé mặc áo đỏ kia là em gái tôi.'},
     {zh:'姑娘脸上表现出很无奈的样子。',py:'Gūniang liǎn shang biǎoxiàn chū hěn wúnài de yàngzi.',vn:'Trên mặt cô gái lộ vẻ rất bất lực.'}
   ],
   colloFull:[{zh:'小姑娘',py:'xiǎo gūniang',vn:'cô bé'},{zh:'一个姑娘',py:'yí ge gūniang',vn:'một cô gái'},{zh:'漂亮的姑娘',py:'piàoliang de gūniang',vn:'cô gái xinh đẹp'},{zh:'一户人家的姑娘',py:'yí hù rénjiā de gūniang',vn:'cô gái của một nhà nọ'}],
   patterns:[{s:'小姑娘 / 大姑娘',m:'Cô bé / cô gái lớn'},{s:'一个 / 一位 + 姑娘',m:'Một cô gái'}],
   checkList:[
     {promptLang:'vi',prompt:'Cô gái ấy được mọi người gọi là "hoa khôi của lớp".',answer:'那个姑娘被大家叫作“班花”。',answerPy:'Nàge gūniang bèi dàjiā jiàozuò "bānhuā".',note:'姑娘 làm chủ ngữ câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Cô gái ngồi cạnh tôi không những xinh mà còn rất thông minh.',answer:'坐在我旁边的姑娘不仅漂亮，而且很聪明。',answerPy:'Zuò zài wǒ pángbiān de gūniang bùjǐn piàoliang, érqiě hěn cōngming.',note:'Định ngữ dài + 的 + 姑娘.',pair:'不仅……而且……'}
   ]},

  {n:29,zh:'锅',py:'guō',pos:'Danh từ',vn:'(cái) nồi, chảo',hv:'oa',em:'🍲',lesson:1,
   explain:['Dụng cụ nấu ăn bằng kim loại. Lượng từ 口 hoặc 个.'],
   usage:'一口锅, 一锅饭 (锅 làm lượng từ: một nồi…). Cụm: 锅和盆子, 火锅.',
   collo:['一口锅','一锅饭','锅和盆子'],
   ex_zh:'他们立刻敲响了家中的锅和盆子。',ex_py:'Tāmen lìkè qiāoxiǎngle jiā zhōng de guō hé pénzi.',ex_vn:'Họ lập tức gõ vang nồi và chậu trong nhà.',
   exList:[
     {zh:'他们立刻敲响了家中的锅和盆子。',py:'Tāmen lìkè qiāoxiǎngle jiā zhōng de guō hé pénzi.',vn:'Họ lập tức gõ vang nồi và chậu trong nhà.'},
     {zh:'妈妈煮了一大锅饺子，全家人一起吃年夜饭。',py:'Māma zhǔle yí dà guō jiǎozi, quánjiā rén yìqǐ chī niányèfàn.',vn:'Mẹ nấu một nồi sủi cảo to, cả nhà cùng ăn cơm tất niên.'},
     {zh:'小心，锅还很热！',py:'Xiǎoxīn, guō hái hěn rè!',vn:'Cẩn thận, nồi vẫn còn nóng lắm!'}
   ],
   colloFull:[{zh:'一口锅',py:'yì kǒu guō',vn:'một cái nồi'},{zh:'一锅饭',py:'yì guō fàn',vn:'một nồi cơm'},{zh:'锅和盆子',py:'guō hé pénzi',vn:'nồi và chậu'},{zh:'火锅',py:'huǒguō',vn:'lẩu'}],
   patterns:[{s:'一口 / 一个 + 锅',m:'Lượng từ của 锅'},{s:'一锅 + đồ ăn',m:'锅 làm lượng từ: một nồi …'}],
   checkList:[
     {promptLang:'vi',prompt:'Bạn rửa sạch cái nồi này rồi hẵng nấu cơm.',answer:'你先把这口锅洗干净再做饭。',answerPy:'Nǐ xiān bǎ zhè kǒu guō xǐ gānjìng zài zuòfàn.',note:'把 + 这口锅 + 洗干净.',pair:'把'},
     {promptLang:'vi',prompt:'Sủi cảo đêm giao thừa đều là mẹ nấu bằng cái nồi to này.',answer:'除夕的饺子都是妈妈用这口大锅煮的。',answerPy:'Chúxī de jiǎozi dōu shì māma yòng zhè kǒu dà guō zhǔ de.',note:'这口大锅: lượng từ của 锅 là 口.',pair:'是……的'}
   ]},

  {n:30,zh:'盆子',py:'pénzi',pos:'Danh từ',vn:'chậu, bồn',hv:'bồn tử',em:'🪣',lesson:1,
   explain:['Đồ đựng miệng rộng, đáy nông (chậu rửa, chậu hoa). Cũng nói tắt là 盆.'],
   usage:'Lượng từ: 个. Ghép: 洗脸盆, 花盆 (chậu hoa). Làm lượng từ: 一盆水.',
   collo:['一个盆子','锅和盆子','一盆水'],
   ex_zh:'他们立刻敲响了家中的锅和盆子。',ex_py:'Tāmen lìkè qiāoxiǎngle jiā zhōng de guō hé pénzi.',ex_vn:'Họ lập tức gõ vang nồi và chậu trong nhà.',
   exList:[
     {zh:'他们立刻敲响了家中的锅和盆子。',py:'Tāmen lìkè qiāoxiǎngle jiā zhōng de guō hé pénzi.',vn:'Họ lập tức gõ vang nồi và chậu trong nhà.'},
     {zh:'你拿个盆子来，把这些菜洗一洗。',py:'Nǐ ná ge pénzi lái, bǎ zhèxiē cài xǐ yi xǐ.',vn:'Con lấy cái chậu lại đây, rửa chỗ rau này đi.'},
     {zh:'奶奶在阳台上用旧盆子种了很多花。',py:'Nǎinai zài yángtái shang yòng jiù pénzi zhòngle hěn duō huā.',vn:'Bà dùng chậu cũ trồng rất nhiều hoa ngoài ban công.'}
   ],
   colloFull:[{zh:'一个盆子',py:'yí ge pénzi',vn:'một cái chậu'},{zh:'锅和盆子',py:'guō hé pénzi',vn:'nồi và chậu'},{zh:'一盆水',py:'yì pén shuǐ',vn:'một chậu nước'},{zh:'敲盆子',py:'qiāo pénzi',vn:'gõ chậu'}],
   patterns:[{s:'一个 + 盆子',m:'Một cái chậu'},{s:'一盆 + 水 / 花',m:'盆 làm lượng từ: một chậu …'}],
   checkList:[
     {promptLang:'vi',prompt:'Con mèo làm đổ cái chậu, nước chảy lênh láng khắp sàn.',answer:'猫把盆子弄翻了，水流了一地。',answerPy:'Māo bǎ pénzi nòngfān le, shuǐ liúle yí dì.',note:'把 + 盆子 + 弄翻了.',pair:'把'},
     {promptLang:'vi',prompt:'Hễ nghe tiếng gõ chậu, lũ gà là chạy lại ăn.',answer:'鸡一听到敲盆子的声音就跑过来吃东西。',answerPy:'Jī yì tīngdào qiāo pénzi de shēngyīn jiù pǎo guòlai chī dōngxi.',note:'敲盆子 = gõ chậu (như trong bài).',pair:'一……就……'}
   ]},

  {n:31,zh:'整个',py:'zhěnggè',pos:'Tính từ',vn:'cả, toàn bộ',hv:'chỉnh cá',em:'🌐',lesson:1,
   explain:['Toàn thể, trọn vẹn một đơn vị (cả phòng, cả buổi chiều, cả thị trấn). Chỉ làm ĐỊNH NGỮ, đứng trước danh từ.'],
   usage:'整个 + danh từ (không cần 的): 整个房间/社会/计划/夏天/过程. ✗ 很整个. Khác 所有 (tất cả — số nhiều).',
   collo:['整个镇子','整个下午','整个房间','整个过程'],
   ex_zh:'跟着整个镇子都响了起来。',ex_py:'Gēnzhe zhěnggè zhènzi dōu xiǎngle qǐlái.',ex_vn:'Tiếp theo cả thị trấn đều vang lên.',
   exList:[
     {zh:'跟着整个镇子都响了起来。',py:'Gēnzhe zhěnggè zhènzi dōu xiǎngle qǐlái.',vn:'Tiếp theo cả thị trấn đều vang lên.'},
     {zh:'整个下午，他们都在跳舞。',py:'Zhěnggè xiàwǔ, tāmen dōu zài tiàowǔ.',vn:'Suốt cả buổi chiều, họ đều nhảy múa.'},
     {zh:'整个学院所有的老师同学都在议论这件事。',py:'Zhěnggè xuéyuàn suǒyǒu de lǎoshī tóngxué dōu zài yìlùn zhè jiàn shì.',vn:'Tất cả thầy cô và sinh viên của cả học viện đều đang bàn tán chuyện này.'}
   ],
   colloFull:[{zh:'整个镇子',py:'zhěnggè zhènzi',vn:'cả thị trấn'},{zh:'整个下午',py:'zhěnggè xiàwǔ',vn:'suốt cả buổi chiều'},{zh:'整个房间',py:'zhěnggè fángjiān',vn:'cả căn phòng'},{zh:'整个过程',py:'zhěnggè guòchéng',vn:'toàn bộ quá trình'},{zh:'整个社会',py:'zhěnggè shèhuì',vn:'toàn xã hội'}],
   patterns:[{s:'整个 + N (không cần 的)',m:'Cả …, toàn bộ …'},{s:'整个 + thời gian + 都 + V',m:'Suốt cả … đều …'}],
   checkList:[
     {promptLang:'vi',prompt:'Cả căn phòng bị bọn trẻ làm bừa bộn hết cả.',answer:'整个房间都被孩子们弄乱了。',answerPy:'Zhěnggè fángjiān dōu bèi háizimen nòngluàn le.',note:'整个 + N + 都: nhấn mạnh toàn bộ.',pair:'被'},
     {promptLang:'vi',prompt:'Suốt cả kỳ nghỉ hè cậu ấy chưa từng ra ngoài chơi.',answer:'整个暑假他从来没出去玩过。',answerPy:'Zhěnggè shǔjià tā cónglái méi chūqu wánguo.',note:'整个 + khoảng thời gian làm trạng ngữ.',pair:'从来没……过'}
   ]},

  {n:32,zh:'吓',py:'xià',pos:'Động từ',vn:'doạ, làm cho sợ; sợ hãi',hv:'hách',em:'😱',lesson:1,
   explain:['Làm cho người khác sợ (吓人, 吓了我一跳), hoặc bản thân bị sợ (吓得……).'],
   usage:'吓 + người + 一跳; 吓得 + bổ ngữ (吓得什么似的, 吓得说不出话); 被……吓……. Khẩu ngữ: 吓死我了.',
   collo:['吓了一跳','吓得什么似的','吓哭了'],
   ex_zh:'“夕”吓得什么似的，急忙往外逃。',ex_py:'"Xī" xià de shénme shìde, jímáng wǎng wài táo.',ex_vn:'"Tịch" sợ hết hồn, vội vàng chạy trốn ra ngoài.',
   exList:[
     {zh:'“夕”吓得什么似的，急忙往外逃。',py:'"Xī" xià de shénme shìde, jímáng wǎng wài táo.',vn:'"Tịch" sợ hết hồn, vội vàng chạy trốn ra ngoài.'},
     {zh:'你突然站在我后面，吓了我一跳！',py:'Nǐ tūrán zhàn zài wǒ hòumiàn, xiàle wǒ yí tiào!',vn:'Cậu đột nhiên đứng sau lưng tớ, làm tớ giật cả mình!'},
     {zh:'鞭炮声把小狗吓得躲到了床下。',py:'Biānpào shēng bǎ xiǎo gǒu xià de duǒdàole chuáng xià.',vn:'Tiếng pháo làm con chó con sợ quá chui xuống gầm giường.'}
   ],
   colloFull:[{zh:'吓了一跳',py:'xiàle yí tiào',vn:'giật mình'},{zh:'吓得什么似的',py:'xià de shénme shìde',vn:'sợ hết hồn'},{zh:'吓哭了',py:'xiàkū le',vn:'sợ phát khóc'},{zh:'吓人',py:'xià rén',vn:'đáng sợ'}],
   patterns:[{s:'A + 吓了 + B + 一跳',m:'A làm B giật mình'},{s:'吓得 + bổ ngữ',m:'Sợ đến mức …'}],
   checkList:[
     {promptLang:'vi',prompt:'Em bé bị tiếng pháo làm cho sợ phát khóc.',answer:'孩子被鞭炮声吓哭了。',answerPy:'Háizi bèi biānpào shēng xiàkū le.',note:'被 + tác nhân + 吓 + bổ ngữ kết quả.',pair:'被'},
     {promptLang:'vi',prompt:'Tiếng sấm đột ngột làm con chó sợ chui xuống gầm giường.',answer:'突然的雷声把小狗吓得躲到了床下。',answerPy:'Tūrán de léishēng bǎ xiǎo gǒu xià de duǒdàole chuáng xià.',note:'把 + người/vật + 吓得 + bổ ngữ.',pair:'把'}
   ]},

  {n:33,zh:'似的',py:'shìde',pos:'Trợ từ',vn:'(như) … vậy, dường như',hv:'tự đích',em:'🪞',lesson:1,
   explain:['像/跟/好像 + …… + 似的: giống như…, so sánh. ……得 + 什么似的: vô cùng, hết mức (khoa trương). ĐIỂM NGỮ PHÁP của bài.'],
   usage:'Đứng SAU phần được so sánh: 像做梦似的, 雪片似的. Đọc shìde (không đọc sìde).',
   collo:['像……似的','好像……似的','……得什么似的'],
   ex_zh:'我不敢相信这是真的，好像做梦似的。',ex_py:'Wǒ bù gǎn xiāngxìn zhè shì zhēn de, hǎoxiàng zuòmèng shìde.',ex_vn:'Tôi không dám tin đây là thật, cứ như đang nằm mơ vậy.',
   exList:[
     {zh:'我不敢相信这是真的，好像做梦似的。',py:'Wǒ bù gǎn xiāngxìn zhè shì zhēn de, hǎoxiàng zuòmèng shìde.',vn:'Tôi không dám tin đây là thật, cứ như đang nằm mơ vậy.'},
     {zh:'“夕”吓得什么似的，急忙往外逃。',py:'"Xī" xià de shénme shìde, jímáng wǎng wài táo.',vn:'"Tịch" sợ hết hồn, vội vàng chạy trốn ra ngoài.'},
     {zh:'刘方背着重重的电脑包挤地铁，下班回到家累得什么似的。',py:'Liú Fāng bēizhe zhòngzhòng de diànnǎo bāo jǐ dìtiě, xiàbān huídào jiā lèi de shénme shìde.',vn:'Lưu Phương đeo chiếc túi laptop nặng trịch chen chúc tàu điện ngầm, tan làm về đến nhà mệt rã rời.'}
   ],
   colloFull:[{zh:'像……似的',py:'xiàng …… shìde',vn:'giống như … vậy'},{zh:'好像……似的',py:'hǎoxiàng …… shìde',vn:'cứ như là …'},{zh:'……得什么似的',py:'…… de shénme shìde',vn:'… hết mức'},{zh:'雪片似的',py:'xuěpiàn shìde',vn:'như hoa tuyết (tới tấp)'},{zh:'做梦似的',py:'zuòmèng shìde',vn:'như nằm mơ'}],
   patterns:[{s:'像 / 好像 / 跟 + …… + 似的',m:'Giống như … vậy'},{s:'V/Adj + 得 + 什么似的',m:'… vô cùng (khoa trương)'}],
   checkList:[
     {promptLang:'vi',prompt:'Ông nội tuy đã bảy mươi tuổi nhưng đi lại cứ như thanh niên vậy.',answer:'爷爷虽然七十岁了，但是走起路来像年轻人似的。',answerPy:'Yéye suīrán qīshí suì le, dànshì zǒu qǐ lù lái xiàng niánqīng rén shìde.',note:'像 + N + 似的: giống như … vậy.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Bài kiểm tra vừa phát xuống, cả lớp đã lo đến phát điên.',answer:'试卷一发下来，全班同学就紧张得什么似的。',answerPy:'Shìjuàn yì fā xiàlai, quán bān tóngxué jiù jǐnzhāng de shénme shìde.',note:'Tính từ + 得 + 什么似的: mức độ cực cao.',pair:'一……就……'}
   ]},

  {n:34,zh:'追',py:'zhuī',pos:'Động từ',vn:'đuổi theo, đuổi kịp',hv:'truy',em:'🐾',lesson:1,
   explain:['Chạy theo sau để bắt kịp. Mở rộng: theo đuổi (追求).'],
   usage:'追上 (đuổi kịp), 追不上 (không đuổi kịp), 在后面追. 追 + người/xe.',
   collo:['追上','追不上','在后面追'],
   ex_zh:'七郎的狗追上了“夕”，并死死地咬住了它。',ex_py:'Qīláng de gǒu zhuīshangle "Xī", bìng sǐsǐ de yǎozhùle tā.',ex_vn:'Con chó của Thất Lang đuổi kịp "Tịch" và cắn chặt lấy nó.',
   exList:[
     {zh:'七郎的狗追上了“夕”，并死死地咬住了它。',py:'Qīláng de gǒu zhuīshangle "Xī", bìng sǐsǐ de yǎozhùle tā.',vn:'Con chó của Thất Lang đuổi kịp "Tịch" và cắn chặt lấy nó.'},
     {zh:'公共汽车已经开走了，你追不上了。',py:'Gōnggòng qìchē yǐjīng kāizǒu le, nǐ zhuī bu shàng le.',vn:'Xe buýt chạy mất rồi, cậu không đuổi kịp đâu.'},
     {zh:'他虽然落后了很多，但是一直在后面追。',py:'Tā suīrán luòhòule hěn duō, dànshì yìzhí zài hòumiàn zhuī.',vn:'Tuy bị bỏ lại khá xa nhưng cậu ấy vẫn luôn bám đuổi phía sau.'}
   ],
   colloFull:[{zh:'追上',py:'zhuīshang',vn:'đuổi kịp'},{zh:'追不上',py:'zhuī bu shàng',vn:'không đuổi kịp'},{zh:'在后面追',py:'zài hòumiàn zhuī',vn:'đuổi phía sau'},{zh:'追公共汽车',py:'zhuī gōnggòng qìchē',vn:'đuổi theo xe buýt'}],
   patterns:[{s:'追 + 上 / 不上',m:'Đuổi kịp / không đuổi kịp'},{s:'在后面 + 追',m:'Đuổi theo phía sau'}],
   checkList:[
     {promptLang:'vi',prompt:'Con chó chạy nhanh đến mức ngay cả tôi cũng không đuổi kịp.',answer:'那条狗跑得太快了，连我都追不上。',answerPy:'Nà tiáo gǒu pǎo de tài kuài le, lián wǒ dōu zhuī bu shàng.',note:'追不上 = bổ ngữ khả năng phủ định.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Cuối cùng tên trộm bị cảnh sát đuổi kịp.',answer:'小偷最后被警察追上了。',answerPy:'Xiǎotōu zuìhòu bèi jǐngchá zhuīshang le.',note:'被 + người + 追上.',pair:'被'}
   ]},

  {n:35,zh:'箭',py:'jiàn',pos:'Danh từ',vn:'mũi tên',hv:'tiễn',em:'🏹',lesson:1,
   explain:['Vũ khí bắn đi bằng cung. 一箭 = một phát tên.'],
   usage:'Lượng từ: 支: 一支箭. Cụm: 射箭 (bắn cung), 一箭射死. Thành ngữ: 一箭双雕 (một mũi tên trúng hai đích).',
   collo:['一支箭','射箭','一箭射死'],
   ex_zh:'七郎跑上前去，一箭射死了“夕”。',ex_py:'Qīláng pǎo shàngqián qù, yí jiàn shèsǐle "Xī".',ex_vn:'Thất Lang chạy tới, bắn một mũi tên giết chết "Tịch".',
   exList:[
     {zh:'七郎跑上前去，一箭射死了“夕”。',py:'Qīláng pǎo shàngqián qù, yí jiàn shèsǐle "Xī".',vn:'Thất Lang chạy tới, bắn một mũi tên giết chết "Tịch".'},
     {zh:'他拿起一支箭，瞄准了前面的目标。',py:'Tā náqǐ yì zhī jiàn, miáozhǔnle qiánmiàn de mùbiāo.',vn:'Anh ấy cầm một mũi tên, nhắm vào mục tiêu phía trước.'},
     {zh:'这样做既能锻炼身体，又能交朋友，真是一箭双雕。',py:'Zhèyàng zuò jì néng duànliàn shēntǐ, yòu néng jiāo péngyou, zhēn shì yí jiàn shuāng diāo.',vn:'Làm vậy vừa rèn luyện sức khoẻ vừa kết bạn được, đúng là một công đôi việc.'}
   ],
   colloFull:[{zh:'一支箭',py:'yì zhī jiàn',vn:'một mũi tên'},{zh:'射箭',py:'shè jiàn',vn:'bắn cung'},{zh:'一箭射死',py:'yí jiàn shèsǐ',vn:'một phát tên bắn chết'},{zh:'一箭双雕',py:'yí jiàn shuāng diāo',vn:'một mũi tên trúng hai đích'}],
   patterns:[{s:'一支 + 箭',m:'Lượng từ: 支'},{s:'一箭 + V',m:'Bằng một phát tên …'}],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy chưa từng bắn cung, nhưng mũi tên đầu tiên đã trúng đích.',answer:'他从来没射过箭，可是第一箭就射中了。',answerPy:'Tā cónglái méi shèguo jiàn, kěshì dì-yī jiàn jiù shèzhòng le.',note:'射过箭: 过 chen giữa 射 và 箭.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Mũi tên đó bị gió thổi lệch mất.',answer:'那支箭被风吹偏了。',answerPy:'Nà zhī jiàn bèi fēng chuīpiān le.',note:'一支/那支 + 箭.',pair:'被'}
   ]},

  {n:36,zh:'射',py:'shè',pos:'Động từ',vn:'bắn',hv:'xạ',em:'🎯',lesson:1,
   explain:['Dùng cung, súng… bắn ra. Từ đầy đủ: 射击 (shèjī — bắn, môn bắn súng).'],
   usage:'射 + 死/中 + mục tiêu: 射死, 射中. 射箭 (bắn cung), 射门 (sút bóng vào khung thành).',
   collo:['射死','射中','射箭','射门'],
   ex_zh:'七郎跑上前去，一箭射死了“夕”。',ex_py:'Qīláng pǎo shàngqián qù, yí jiàn shèsǐle "Xī".',ex_vn:'Thất Lang chạy tới, bắn một mũi tên giết chết "Tịch".',
   exList:[
     {zh:'七郎跑上前去，一箭射死了“夕”。',py:'Qīláng pǎo shàngqián qù, yí jiàn shèsǐle "Xī".',vn:'Thất Lang chạy tới, bắn một mũi tên giết chết "Tịch".'},
     {zh:'他第一箭就射中了目标。',py:'Tā dì-yī jiàn jiù shèzhòngle mùbiāo.',vn:'Mũi tên đầu tiên anh ấy đã bắn trúng mục tiêu.'},
     {zh:'比赛最后一分钟，他一脚射门，球进了！',py:'Bǐsài zuìhòu yì fēnzhōng, tā yì jiǎo shèmén, qiú jìn le!',vn:'Phút cuối trận, cậu ấy sút một cú, bóng vào lưới!'}
   ],
   colloFull:[{zh:'射死',py:'shèsǐ',vn:'bắn chết'},{zh:'射中',py:'shèzhòng',vn:'bắn trúng'},{zh:'射箭',py:'shè jiàn',vn:'bắn cung'},{zh:'射门',py:'shèmén',vn:'sút bóng'},{zh:'射击',py:'shèjī',vn:'bắn súng'}],
   patterns:[{s:'射 + 死 / 中 + mục tiêu',m:'Bắn chết / bắn trúng'},{s:'一箭 + 射死 + N',m:'Một phát tên bắn chết …'}],
   checkList:[
     {promptLang:'vi',prompt:'Thất Lang chạy tới, một phát tên đã bắn chết "Tịch".',answer:'七郎跑上前去，一箭就把“夕”射死了。',answerPy:'Qīláng pǎo shàngqián qù, yí jiàn jiù bǎ "Xī" shèsǐ le.',note:'把 + N + 射死.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần cậu tập luyện chăm chỉ thì nhất định sẽ bắn trúng.',answer:'只要你认真练习，就一定能射中。',answerPy:'Zhǐyào nǐ rènzhēn liànxí, jiù yídìng néng shèzhòng.',note:'射中 = bắn trúng (bổ ngữ kết quả 中 đọc zhòng).',pair:'只要……就……'}
   ]},

  {n:37,zh:'纷纷',py:'fēnfēn',pos:'Tính từ / Phó từ',vn:'tới tấp, lả tả; nhao nhao, lần lượt',hv:'phân phân',em:'🍂',lesson:1,
   explain:['Tính từ: (lời bàn tán, vật rơi) nhiều và lộn xộn — 落叶纷纷, 议论纷纷.','Phó từ: nhiều người/vật nối nhau làm một việc — 纷纷 + động từ. ĐIỂM NGỮ PHÁP của bài.'],
   usage:'Phó từ 纷纷: chủ ngữ phải là SỐ NHIỀU (百姓/大家/同学们), không dùng cho một người. ✗ 很纷纷.',
   collo:['纷纷表示','议论纷纷','落叶纷纷','纷纷询问'],
   ex_zh:'除掉“夕”以后，百姓纷纷对七郎表达谢意。',ex_py:'Chúdiào "Xī" yǐhòu, bǎixìng fēnfēn duì Qīláng biǎodá xièyì.',ex_vn:'Sau khi trừ được "Tịch", dân chúng nối nhau bày tỏ lòng biết ơn với Thất Lang.',
   exList:[
     {zh:'除掉“夕”以后，百姓纷纷对七郎表达谢意。',py:'Chúdiào "Xī" yǐhòu, bǎixìng fēnfēn duì Qīláng biǎodá xièyì.',vn:'Sau khi trừ được "Tịch", dân chúng nối nhau bày tỏ lòng biết ơn với Thất Lang.'},
     {zh:'秋风刮起，落叶纷纷。',py:'Qiūfēng guāqǐ, luòyè fēnfēn.',vn:'Gió thu nổi lên, lá rụng lả tả.'},
     {zh:'要下雨了，路上的人纷纷往家里跑。',py:'Yào xià yǔ le, lù shang de rén fēnfēn wǎng jiā li pǎo.',vn:'Sắp mưa rồi, người đi đường nhao nhao chạy về nhà.'}
   ],
   colloFull:[{zh:'纷纷表示',py:'fēnfēn biǎoshì',vn:'nhao nhao bày tỏ'},{zh:'议论纷纷',py:'yìlùn fēnfēn',vn:'bàn tán xôn xao'},{zh:'落叶纷纷',py:'luòyè fēnfēn',vn:'lá rụng lả tả'},{zh:'纷纷询问',py:'fēnfēn xúnwèn',vn:'tới tấp hỏi han'},{zh:'纷纷对……表达谢意',py:'fēnfēn duì …… biǎodá xièyì',vn:'nối nhau cảm ơn …'}],
   patterns:[{s:'Chủ ngữ số nhiều + 纷纷 + V (phó từ)',m:'Nhiều người nối nhau làm gì'},{s:'V / Adj + 纷纷 (tính từ)',m:'(Lời bàn / vật rơi) nhiều và lộn xộn'}],
   checkList:[
     {promptLang:'vi',prompt:'Năm mới càng lúc càng gần, các trung tâm thương mại lớn nhao nhao giảm giá.',answer:'新年越来越近了，各大商场纷纷打折。',answerPy:'Xīnnián yuè lái yuè jìn le, gè dà shāngchǎng fēnfēn dǎzhé.',note:'Chủ ngữ số nhiều + 纷纷 + V.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Vừa thấy gấu trúc, các du khách liền nhao nhao lấy điện thoại ra chụp ảnh.',answer:'游客们一见到熊猫，就纷纷拿出手机拍照。',answerPy:'Yóukèmen yí jiàndào xióngmāo, jiù fēnfēn náchū shǒujī pāizhào.',note:'纷纷 đứng sau 就, trước động từ.',pair:'一……就……'}
   ]},

  {n:38,zh:'表达',py:'biǎodá',pos:'Động từ',vn:'bày tỏ, diễn đạt',hv:'biểu đạt',em:'💬',lesson:1,
   explain:['Dùng lời nói, chữ viết, hành động để nói ra suy nghĩ, tình cảm của mình.'],
   usage:'Tân ngữ trong sách: 思想/决心/心情/感受/意见/看法; + 谢意. Trạng ngữ: 准确地/生动地/形象地 + 表达.',
   collo:['表达谢意','表达心情','表达看法','准确地表达'],
   ex_zh:'人的思想感情是非常丰富的，有些是无法用语言准确表达的。',ex_py:'Rén de sīxiǎng gǎnqíng shì fēicháng fēngfù de, yǒuxiē shì wúfǎ yòng yǔyán zhǔnquè biǎodá de.',ex_vn:'Tư tưởng tình cảm của con người rất phong phú, có những điều không thể diễn đạt chính xác bằng lời.',
   exList:[
     {zh:'人的思想感情是非常丰富的，有些是无法用语言准确表达的。',py:'Rén de sīxiǎng gǎnqíng shì fēicháng fēngfù de, yǒuxiē shì wúfǎ yòng yǔyán zhǔnquè biǎodá de.',vn:'Tư tưởng tình cảm của con người rất phong phú, có những điều không thể diễn đạt chính xác bằng lời.'},
     {zh:'除掉“夕”以后，百姓纷纷对七郎表达谢意。',py:'Chúdiào "Xī" yǐhòu, bǎixìng fēnfēn duì Qīláng biǎodá xièyì.',vn:'Sau khi trừ được "Tịch", dân chúng nối nhau bày tỏ lòng biết ơn với Thất Lang.'},
     {zh:'我中文说得还不太好，有时候不知道如何表达自己的看法。',py:'Wǒ Zhōngwén shuō de hái bú tài hǎo, yǒu shíhou bù zhīdào rúhé biǎodá zìjǐ de kànfǎ.',vn:'Tiếng Trung của tôi còn chưa tốt, có lúc không biết diễn đạt quan điểm của mình thế nào.'}
   ],
   colloFull:[{zh:'表达谢意',py:'biǎodá xièyì',vn:'bày tỏ lòng biết ơn'},{zh:'表达心情',py:'biǎodá xīnqíng',vn:'bày tỏ tâm trạng'},{zh:'表达看法',py:'biǎodá kànfǎ',vn:'nêu quan điểm'},{zh:'准确地表达',py:'zhǔnquè de biǎodá',vn:'diễn đạt chính xác'},{zh:'表达决心',py:'biǎodá juéxīn',vn:'bày tỏ quyết tâm'}],
   patterns:[{s:'表达 + 思想 / 心情 / 感受 / 意见 / 看法',m:'Bày tỏ, diễn đạt …'},{s:'准确地 / 生动地 + 表达',m:'Diễn đạt chính xác / sinh động'}],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy không những nói lưu loát mà còn diễn đạt rất chính xác.',answer:'他不仅说得流利，而且表达得很准确。',answerPy:'Tā bùjǐn shuō de liúlì, érqiě biǎodá de hěn zhǔnquè.',note:'表达得 + bổ ngữ trình độ.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Tuy tôi không biết nói thế nào nhưng tôi muốn bày tỏ lòng biết ơn với thầy.',answer:'虽然我不知道怎么说，但是很想向老师表达谢意。',answerPy:'Suīrán wǒ bù zhīdào zěnme shuō, dànshì hěn xiǎng xiàng lǎoshī biǎodá xièyì.',note:'向/对 + người + 表达谢意.',pair:'虽然……但是……'}
   ]},

  {n:39,zh:'意义',py:'yìyì',pos:'Danh từ',vn:'ý nghĩa, tầm quan trọng',hv:'ý nghĩa',em:'💡',lesson:1,
   explain:['① Nội dung, ý được biểu đạt. ② Giá trị, tác dụng, tầm quan trọng: 很有意义.'],
   usage:'有意义 / 没有意义 / 很有意义 (✗ 很意义). Khác 意思: 意思 còn có nghĩa "thú vị" (有意思), 意义 thì không.',
   collo:['很有意义','重要意义','……的意义'],
   ex_zh:'由于这一天很有意义，人们就在每年的年三十这天晚上整晚不睡觉。',ex_py:'Yóuyú zhè yì tiān hěn yǒu yìyì, rénmen jiù zài měi nián de nián sānshí zhè tiān wǎnshang zhěng wǎn bú shuìjiào.',ex_vn:'Vì ngày này rất có ý nghĩa nên cứ tối ba mươi Tết hằng năm, người ta thức suốt đêm.',
   exList:[
     {zh:'由于这一天很有意义，人们就在每年的年三十这天晚上整晚不睡觉。',py:'Yóuyú zhè yì tiān hěn yǒu yìyì, rénmen jiù zài měi nián de nián sānshí zhè tiān wǎnshang zhěng wǎn bú shuìjiào.',vn:'Vì ngày này rất có ý nghĩa nên cứ tối ba mươi Tết hằng năm, người ta thức suốt đêm.'},
     {zh:'这次去山区支教的活动对我来说非常有意义。',py:'Zhè cì qù shānqū zhījiào de huódòng duì wǒ lái shuō fēicháng yǒu yìyì.',vn:'Chuyến đi dạy tình nguyện ở vùng núi lần này đối với tôi vô cùng ý nghĩa.'},
     {zh:'你知道“福”字倒着贴的意义吗？',py:'Nǐ zhīdào "fú" zì dàozhe tiē de yìyì ma?',vn:'Bạn có biết ý nghĩa của việc dán ngược chữ "Phúc" không?'}
   ],
   colloFull:[{zh:'很有意义',py:'hěn yǒu yìyì',vn:'rất có ý nghĩa'},{zh:'重要意义',py:'zhòngyào yìyì',vn:'ý nghĩa quan trọng'},{zh:'……的意义',py:'…… de yìyì',vn:'ý nghĩa của …'},{zh:'没有意义',py:'méiyǒu yìyì',vn:'vô nghĩa'}],
   patterns:[{s:'很有意义 / 没有意义',m:'Có / không có ý nghĩa (✗ 很意义)'},{s:'对……有 + 重要意义',m:'Có ý nghĩa quan trọng đối với …'}],
   checkList:[
     {promptLang:'vi',prompt:'Hoạt động này càng ngày càng có ý nghĩa với tôi.',answer:'这个活动对我来说越来越有意义了。',answerPy:'Zhège huódòng duì wǒ lái shuō yuè lái yuè yǒu yìyì le.',note:'有意义 = có ý nghĩa; không nói 很意义.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ cần làm việc mình thích thì cuộc sống sẽ rất ý nghĩa.',answer:'只要做自己喜欢的事，生活就会很有意义。',answerPy:'Zhǐyào zuò zìjǐ xǐhuan de shì, shēnghuó jiù huì hěn yǒu yìyì.',note:'很 + 有意义.',pair:'只要……就……'}
   ]},

  {n:40,zh:'鞭炮',py:'biānpào',pos:'Danh từ',vn:'pháo (pháo dây)',hv:'tiên pháo',em:'🧨',lesson:1,
   explain:['Pháo nổ kết thành dây, đốt vào dịp Tết, cưới hỏi. Động từ đi kèm là 放.'],
   usage:'放鞭炮 (đốt pháo), 一挂鞭炮, 鞭炮声. ✗ 打鞭炮 / ✗ 开鞭炮.',
   collo:['放鞭炮','鞭炮声','一挂鞭炮'],
   ex_zh:'就这样一代代传下来，形成了除夕夜守岁、放鞭炮的风俗。',ex_py:'Jiù zhèyàng yí dàidài chuán xiàlái, xíngchéngle chúxī yè shǒusuì, fàng biānpào de fēngsú.',ex_vn:'Cứ thế truyền từ đời này sang đời khác, hình thành phong tục thức đón giao thừa và đốt pháo đêm trừ tịch.',
   exList:[
     {zh:'就这样一代代传下来，形成了除夕夜守岁、放鞭炮的风俗。',py:'Jiù zhèyàng yí dàidài chuán xiàlái, xíngchéngle chúxī yè shǒusuì, fàng biānpào de fēngsú.',vn:'Cứ thế truyền từ đời này sang đời khác, hình thành phong tục thức đón giao thừa và đốt pháo đêm trừ tịch.'},
     {zh:'过年不放鞭炮，好像缺少点儿过年的气氛。',py:'Guònián bú fàng biānpào, hǎoxiàng quēshǎo diǎnr guònián de qìfēn.',vn:'Ăn Tết mà không đốt pháo thì hình như thiếu chút không khí Tết.'},
     {zh:'为了保护环境，很多城市都不让放鞭炮了。',py:'Wèile bǎohù huánjìng, hěn duō chéngshì dōu bú ràng fàng biānpào le.',vn:'Để bảo vệ môi trường, nhiều thành phố đã cấm đốt pháo.'}
   ],
   colloFull:[{zh:'放鞭炮',py:'fàng biānpào',vn:'đốt pháo'},{zh:'鞭炮声',py:'biānpào shēng',vn:'tiếng pháo'},{zh:'一挂鞭炮',py:'yí guà biānpào',vn:'một dây pháo'},{zh:'禁止放鞭炮',py:'jìnzhǐ fàng biānpào',vn:'cấm đốt pháo'}],
   patterns:[{s:'放 + 鞭炮',m:'Đốt pháo (động từ là 放)'},{s:'鞭炮 + 声',m:'Tiếng pháo'}],
   checkList:[
     {promptLang:'vi',prompt:'Giao thừa, pháo vừa nổ là mọi người biết năm mới đã đến.',answer:'除夕夜，鞭炮一响，大家就知道新年到了。',answerPy:'Chúxī yè, biānpào yì xiǎng, dàjiā jiù zhīdào xīnnián dào le.',note:'鞭炮 + 响: pháo nổ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Để bảo vệ môi trường, thành phố này chưa từng cho đốt pháo.',answer:'为了保护环境，这个城市从来没让人放过鞭炮。',answerPy:'Wèile bǎohù huánjìng, zhège chéngshì cónglái méi ràng rén fàngguo biānpào.',note:'放过鞭炮: 过 đứng sau động từ 放.',pair:'从来没……过'}
   ]},

  {n:41,zh:'风俗',py:'fēngsú',pos:'Danh từ',vn:'phong tục, tục lệ',hv:'phong tục',em:'🎎',lesson:1,
   explain:['Thói quen, lễ nghi được truyền lại lâu đời trong một vùng, một dân tộc.'],
   usage:'风俗习惯 (phong tục tập quán), 传统风俗, 形成……的风俗, 按风俗……. Là danh từ: ✗ 很风俗.',
   collo:['风俗习惯','传统风俗','形成……的风俗','按风俗'],
   ex_zh:'就这样一代代传下来，形成了除夕夜守岁、放鞭炮的风俗。',ex_py:'Jiù zhèyàng yí dàidài chuán xiàlái, xíngchéngle chúxī yè shǒusuì, fàng biānpào de fēngsú.',ex_vn:'Cứ thế truyền từ đời này sang đời khác, hình thành phong tục thức đón giao thừa và đốt pháo đêm trừ tịch.',
   exList:[
     {zh:'就这样一代代传下来，形成了除夕夜守岁、放鞭炮的风俗。',py:'Jiù zhèyàng yí dàidài chuán xiàlái, xíngchéngle chúxī yè shǒusuì, fàng biānpào de fēngsú.',vn:'Cứ thế truyền từ đời này sang đời khác, hình thành phong tục thức đón giao thừa và đốt pháo đêm trừ tịch.'},
     {zh:'中国人过年时有很多风俗习惯和庆祝活动。',py:'Zhōngguó rén guònián shí yǒu hěn duō fēngsú xíguàn hé qìngzhù huódòng.',vn:'Người Trung Quốc ăn Tết có rất nhiều phong tục tập quán và hoạt động mừng năm mới.'},
     {zh:'按风俗上讲，“二月二”那天理发能带来一年的好运。',py:'Àn fēngsú shang jiǎng, "èr yuè èr" nà tiān lǐfà néng dàilái yì nián de hǎoyùn.',vn:'Theo phong tục, cắt tóc vào ngày mùng hai tháng hai sẽ mang lại may mắn cả năm.'}
   ],
   colloFull:[{zh:'风俗习惯',py:'fēngsú xíguàn',vn:'phong tục tập quán'},{zh:'传统风俗',py:'chuántǒng fēngsú',vn:'phong tục truyền thống'},{zh:'形成……的风俗',py:'xíngchéng …… de fēngsú',vn:'hình thành tục …'},{zh:'按风俗',py:'àn fēngsú',vn:'theo phong tục'},{zh:'当地的风俗',py:'dāngdì de fēngsú',vn:'phong tục địa phương'}],
   patterns:[{s:'形成 + ……的风俗',m:'Hình thành phong tục …'},{s:'按风俗 (上讲)，……',m:'Theo phong tục thì …'}],
   checkList:[
     {promptLang:'vi',prompt:'Phong tục này là do người xưa truyền lại.',answer:'这个风俗是古人传下来的。',answerPy:'Zhège fēngsú shì gǔrén chuán xiàlai de.',note:'Nhấn mạnh nguồn gốc: 是 + 古人传下来 + 的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Nhiều phong tục cũ càng ngày càng ít người biết đến.',answer:'很多老风俗知道的人越来越少了。',answerPy:'Hěn duō lǎo fēngsú zhīdào de rén yuè lái yuè shǎo le.',note:'风俗 là danh từ, đứng đầu làm chủ đề.',pair:'越来越……'}
   ]},

  {n:42,zh:'夕',py:'Xī',pos:'Danh từ riêng',vn:'Tịch (tên con quái vật)',hv:'tịch',em:'👾',lesson:1,
   explain:['Tên con quái vật trong truyền thuyết. Nghĩa gốc của chữ 夕 là "buổi tối" (夕阳 — mặt trời lặn). 除夕 = trừ "Tịch" → tên đêm giao thừa.'],
   usage:'Trong bài luôn đặt trong ngoặc kép: “夕”. Ghép thường gặp của chữ 夕: 除夕, 夕阳, 七夕 (lễ Thất tịch).',
   collo:['“夕”','除夕','夕阳'],
   ex_zh:'传说在很久以前，有个叫作“夕”的怪物。',ex_py:'Chuánshuō zài hěn jiǔ yǐqián, yǒu ge jiàozuò "Xī" de guàiwù.',ex_vn:'Truyền thuyết kể rằng rất lâu về trước có một con quái vật tên là "Tịch".',
   exList:[
     {zh:'传说在很久以前，有个叫作“夕”的怪物。',py:'Chuánshuō zài hěn jiǔ yǐqián, yǒu ge jiàozuò "Xī" de guàiwù.',vn:'Truyền thuyết kể rằng rất lâu về trước có một con quái vật tên là "Tịch".'},
     {zh:'“夕”特别害怕声响。',py:'"Xī" tèbié hàipà shēngxiǎng.',vn:'"Tịch" đặc biệt sợ tiếng động.'},
     {zh:'把“夕”除掉的那天，就叫“除夕”。',py:'Bǎ "Xī" chúdiào de nà tiān, jiù jiào "chúxī".',vn:'Ngày trừ được "Tịch" thì gọi là "trừ tịch".'}
   ],
   colloFull:[{zh:'“夕”',py:'"Xī"',vn:'"Tịch"'},{zh:'除夕',py:'chúxī',vn:'đêm trừ tịch'},{zh:'夕阳',py:'xīyáng',vn:'mặt trời lặn, hoàng hôn'},{zh:'七夕',py:'Qīxī',vn:'lễ Thất tịch'}],
   patterns:[{s:'除 + “夕” → 除夕',m:'Trừ "Tịch" → đêm trừ tịch'},{s:'夕 = buổi tối (夕阳, 七夕)',m:'Nghĩa gốc của chữ 夕'}],
   checkList:[
     {promptLang:'vi',prompt:'"Tịch" bị tiếng động doạ sợ hết hồn.',answer:'“夕”被声响吓得什么似的。',answerPy:'"Xī" bèi shēngxiǎng xià de shénme shìde.',note:'“夕” làm chủ ngữ câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'"Tịch" vừa nghe tiếng gõ nồi là vội vàng bỏ chạy.',answer:'“夕”一听到敲锅的声音，就赶紧逃走了。',answerPy:'"Xī" yì tīngdào qiāo guō de shēngyīn, jiù gǎnjǐn táozǒu le.',note:'Tên riêng trong ngoặc kép “夕”.',pair:'一……就……'}
   ]},

  {n:43,zh:'七郎',py:'Qīláng',pos:'Danh từ riêng',vn:'Thất Lang (tên người anh hùng)',hv:'thất lang',em:'🛡️',lesson:1,
   explain:['Tên người anh hùng trong truyền thuyết. 郎 là cách gọi đàn ông trẻ thời xưa; 七郎 ≈ "chàng Bảy".'],
   usage:'Tên riêng, không đi với lượng từ. Trong bài: 英雄七郎, 七郎的狗.',
   collo:['英雄七郎','七郎的狗','七郎和“夕”'],
   ex_zh:'当时有个英雄叫作七郎。',ex_py:'Dāngshí yǒu ge yīngxióng jiàozuò Qīláng.',ex_vn:'Khi ấy có một anh hùng tên là Thất Lang.',
   exList:[
     {zh:'当时有个英雄叫作七郎。',py:'Dāngshí yǒu ge yīngxióng jiàozuò Qīláng.',vn:'Khi ấy có một anh hùng tên là Thất Lang.'},
     {zh:'七郎带着他的狗出发了。',py:'Qīláng dàizhe tā de gǒu chūfā le.',vn:'Thất Lang dắt con chó của mình lên đường.'},
     {zh:'七郎跑上前去，一箭射死了“夕”。',py:'Qīláng pǎo shàngqián qù, yí jiàn shèsǐle "Xī".',vn:'Thất Lang chạy tới, bắn một mũi tên giết chết "Tịch".'}
   ],
   colloFull:[{zh:'英雄七郎',py:'yīngxióng Qīláng',vn:'anh hùng Thất Lang'},{zh:'七郎的狗',py:'Qīláng de gǒu',vn:'con chó của Thất Lang'},{zh:'七郎和“夕”',py:'Qīláng hé "Xī"',vn:'Thất Lang và "Tịch"'},{zh:'感谢七郎',py:'gǎnxiè Qīláng',vn:'cảm ơn Thất Lang'}],
   patterns:[{s:'七郎 + V',m:'Thất Lang làm gì'},{s:'对七郎 + 表达谢意',m:'Cảm ơn Thất Lang'}],
   checkList:[
     {promptLang:'vi',prompt:'Thất Lang không những khôi ngô cao lớn mà còn sức mạnh vô song.',answer:'七郎不仅英俊高大，而且力大无比。',answerPy:'Qīláng bùjǐn yīngjùn gāodà, érqiě lì dà wú bǐ.',note:'七郎 làm chủ ngữ.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Dân chúng được Thất Lang cứu ai cũng cảm ơn chàng.',answer:'被七郎救了的百姓都很感谢他。',answerPy:'Bèi Qīláng jiùle de bǎixìng dōu hěn gǎnxiè tā.',note:'被七郎救了 làm định ngữ cho 百姓.',pair:'被'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (file nghe 06-1 đọc liền cả bài), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 除夕的由来',
  preQuiz:[
    {q:'在中国，除夕是哪一天？',opts:['农历正月初一','农历十二月三十日','公历十二月三十一日'],ans:1},
    {q:'除夕这一天，全家人会做什么？',opts:['一起吃年夜饭，守岁','一起去旅游','一起去看电影'],ans:0},
    {q:'“夕”是什么？',opts:['一个英雄','一条狗','一个怪物'],ans:2},
    {q:'百姓对“夕”的态度怎么样？',opts:['恨之入骨，但是又十分无奈','很喜欢它','一点儿也不怕它'],ans:0},
    {q:'七郎的狗有什么特点？',opts:['跑得很慢','非常勇敢，咬住什么都不会松口','特别害怕声响'],ans:1},
    {q:'邻居家女孩的外公为什么坐在路边哭？',opts:['他迷路了','他生病了','天真可爱的女孩被“夕”吃掉了'],ans:2},
    {q:'七郎出发以后，找到“夕”了吗？',opts:['到处打听，但是一直找不到它','第二天就找到了','没有去找'],ans:0},
    {q:'七郎来到热闹的城镇那天是什么日子？',opts:['中秋节','大年三十','正月十五'],ans:1},
    {q:'关于“夕”的情况，下面哪一项不对？',opts:['一般在太阳落山后出来害人','特别害怕声响','白天常常出来害人'],ans:2},
    {q:'七郎让大家今晚怎么做？',opts:['熬夜等着，一见到“夕”就赶紧敲打东西','早点儿睡觉','离开城镇'],ans:0},
    {q:'“夕”出来以后，这家人是怎么发现它的？他们做了什么？',opts:['他们去找七郎','他们立刻敲响了家中的锅和盆子','他们放了鞭炮'],ans:1},
    {q:'“夕”最后是怎么死的？',opts:['被狗咬死的','被锅打死的','被七郎一箭射死的'],ans:2},
    {q:'守岁、放鞭炮的风俗是怎么形成的？',opts:['人们每年年三十像那天一样整晚不睡觉、敲打出响声，一代代传下来','是皇帝规定的','是从外国传来的'],ans:0}
  ],
  lines:[
    {sp:0,zh:'在中国，人们把农历十二月三十日这一年中的最后一天叫作除夕，这一天，全家人会一起吃年夜饭，守岁。但是，人们为什么要把年三十叫作除夕呢？',py:'Zài Zhōngguó, rénmen bǎ nónglì shí\'èr yuè sānshí rì zhè yì nián zhōng de zuìhòu yì tiān jiàozuò chúxī, zhè yì tiān, quánjiā rén huì yìqǐ chī niányèfàn, shǒusuì. Dànshì, rénmen wèi shénme yào bǎ nián sānshí jiàozuò chúxī ne?',vn:'Ở Trung Quốc, người ta gọi ngày cuối cùng trong năm — ngày ba mươi tháng Chạp âm lịch — là "trừ tịch". Ngày này, cả nhà quây quần ăn bữa cơm tất niên và thức đón giao thừa. Nhưng vì sao người ta lại gọi ngày ba mươi Tết là "trừ tịch"?'},
    {sp:0,zh:'传说在很久以前，有个叫作“夕”的怪物，经常出来伤害百姓，百姓对其恨之入骨，但是又十分无奈。当时有个英雄叫作七郎，他英俊高大、力大无比。七郎还有一条狗，这条狗非常勇敢，无论咬住什么都不会松口。',py:'Chuánshuō zài hěn jiǔ yǐqián, yǒu ge jiàozuò "Xī" de guàiwù, jīngcháng chūlái shānghài bǎixìng, bǎixìng duì qí hèn zhī rù gǔ, dànshì yòu shífēn wúnài. Dāngshí yǒu ge yīngxióng jiàozuò Qīláng, tā yīngjùn gāodà, lì dà wú bǐ. Qīláng hái yǒu yì tiáo gǒu, zhè tiáo gǒu fēicháng yǒnggǎn, wúlùn yǎozhù shénme dōu bú huì sōngkǒu.',vn:'Truyền thuyết kể rằng rất lâu về trước, có một con quái vật tên là "Tịch", thường ra ngoài làm hại dân lành; dân chúng căm hận nó đến tận xương tuỷ nhưng lại hết cách. Khi ấy có một anh hùng tên là Thất Lang, chàng khôi ngô cao lớn, sức mạnh vô song. Thất Lang còn có một con chó, con chó này vô cùng dũng cảm, hễ cắn được thứ gì thì không bao giờ nhả ra.'},
    {sp:0,zh:'一天，七郎从外边回来，看到邻居家女孩的外公坐在路边哭，于是上前询问，一问才知道，原来天真可爱的女孩被“夕”吃掉了。七郎暗暗下定决心一定要杀死“夕”，替百姓除掉这个制造灾害的东西。于是七郎带着他的狗出发了，他到处打听“夕”的消息，但是一直找不到它。',py:'Yì tiān, Qīláng cóng wàibian huílái, kàndào línjū jiā nǚhái de wàigōng zuò zài lù biān kū, yúshì shàngqián xúnwèn, yí wèn cái zhīdào, yuánlái tiānzhēn kě\'ài de nǚhái bèi "Xī" chīdiào le. Qīláng àn\'àn xiàdìng juéxīn yídìng yào shāsǐ "Xī", tì bǎixìng chúdiào zhège zhìzào zāihài de dōngxi. Yúshì Qīláng dàizhe tā de gǒu chūfā le, tā dàochù dǎting "Xī" de xiāoxi, dànshì yìzhí zhǎo bu dào tā.',vn:'Một hôm, Thất Lang từ ngoài trở về, thấy ông ngoại của cô bé nhà hàng xóm ngồi khóc bên đường, bèn tiến lại hỏi han; hỏi ra mới biết cô bé ngây thơ đáng yêu đã bị "Tịch" ăn thịt. Thất Lang thầm hạ quyết tâm nhất định phải giết "Tịch", trừ khử thứ gây ra tai hoạ này cho dân chúng. Thế là Thất Lang dắt chó lên đường, chàng đi khắp nơi dò la tin tức về "Tịch" nhưng mãi không tìm thấy nó.'},
    {sp:0,zh:'这样过了差不多一年，这天正好是大年三十，七郎来到了一个热闹的城镇。这一年来，七郎虽然没有找到“夕”，但是了解到了很多关于“夕”的情况：它一般在太阳落山后出来害人，到天亮前又会逃得连影子都找不着了；此外，它还特别害怕声响。于是七郎告诉这里的百姓，“夕”说不定晚上要出来伤害大家，让大家今晚熬夜等着，一见到“夕”就赶紧敲打东西，大家一起把“夕”杀掉。',py:'Zhèyàng guòle chàbuduō yì nián, zhè tiān zhènghǎo shì dà nián sānshí, Qīláng láidàole yí ge rènao de chéngzhèn. Zhè yì nián lái, Qīláng suīrán méiyǒu zhǎodào "Xī", dànshì liǎojiě dàole hěn duō guānyú "Xī" de qíngkuàng: tā yìbān zài tàiyáng luòshān hòu chūlái hài rén, dào tiān liàng qián yòu huì táo de lián yǐngzi dōu zhǎo bu zháo le; cǐwài, tā hái tèbié hàipà shēngxiǎng. Yúshì Qīláng gàosu zhèli de bǎixìng, "Xī" shuōbudìng wǎnshang yào chūlái shānghài dàjiā, ràng dàjiā jīnwǎn áoyè děngzhe, yí jiàndào "Xī" jiù gǎnjǐn qiāodǎ dōngxi, dàjiā yìqǐ bǎ "Xī" shādiào.',vn:'Cứ thế gần một năm trôi qua, hôm ấy đúng vào ngày ba mươi Tết, Thất Lang đến một thị trấn đông vui. Suốt một năm qua, tuy chưa tìm được "Tịch" nhưng Thất Lang đã biết được nhiều điều về nó: nó thường ra hại người sau khi mặt trời lặn, trước khi trời sáng lại trốn biệt tăm, đến cái bóng cũng chẳng thấy; ngoài ra, nó đặc biệt sợ tiếng động. Thế là Thất Lang báo cho dân ở đây rằng tối nay không chừng "Tịch" sẽ ra làm hại mọi người, bảo mọi người đêm nay thức canh, hễ thấy "Tịch" là lập tức gõ đập đồ vật, cùng nhau giết chết "Tịch".'},
    {sp:0,zh:'太阳很快落山了，到了晚上，“夕”果然出来了。它想吃一户人家的姑娘，被这家人发现了，于是他们立刻敲响了家中的锅和盆子，跟着整个镇子都响了起来。“夕”吓得什么似的，急忙往外逃。七郎的狗追上了“夕”，并死死地咬住了它。七郎跑上前去，一箭射死了“夕”。',py:'Tàiyáng hěn kuài luòshān le, dàole wǎnshang, "Xī" guǒrán chūlái le. Tā xiǎng chī yí hù rénjiā de gūniang, bèi zhè jiā rén fāxiàn le, yúshì tāmen lìkè qiāoxiǎngle jiā zhōng de guō hé pénzi, gēnzhe zhěnggè zhènzi dōu xiǎngle qǐlái. "Xī" xià de shénme shìde, jímáng wǎng wài táo. Qīláng de gǒu zhuīshangle "Xī", bìng sǐsǐ de yǎozhùle tā. Qīláng pǎo shàngqián qù, yí jiàn shèsǐle "Xī".',vn:'Mặt trời nhanh chóng lặn, đến tối, "Tịch" quả nhiên xuất hiện. Nó định ăn thịt cô gái của một nhà nọ thì bị người nhà phát hiện; họ lập tức gõ vang nồi và chậu trong nhà, tiếp theo cả thị trấn đều vang lên. "Tịch" sợ hết hồn, vội vàng chạy trốn ra ngoài. Con chó của Thất Lang đuổi kịp "Tịch" và cắn chặt lấy nó. Thất Lang chạy tới, bắn một mũi tên giết chết "Tịch".'},
    {sp:0,zh:'除掉“夕”以后，百姓纷纷对七郎表达谢意。由于这一天很有意义，于是人们就在每年的年三十这天晚上，仍然像那天一样整晚不睡觉，敲打出响声。就这样一代代传下来，形成了除夕夜守岁、放鞭炮的风俗。',py:'Chúdiào "Xī" yǐhòu, bǎixìng fēnfēn duì Qīláng biǎodá xièyì. Yóuyú zhè yì tiān hěn yǒu yìyì, yúshì rénmen jiù zài měi nián de nián sānshí zhè tiān wǎnshang, réngrán xiàng nà tiān yíyàng zhěng wǎn bú shuìjiào, qiāodǎ chū xiǎngshēng. Jiù zhèyàng yí dàidài chuán xiàlái, xíngchéngle chúxī yè shǒusuì, fàng biānpào de fēngsú.',vn:'Sau khi trừ được "Tịch", dân chúng nối nhau bày tỏ lòng biết ơn với Thất Lang. Vì ngày này rất có ý nghĩa nên vào tối ba mươi Tết hằng năm, người ta vẫn thức suốt đêm như hôm ấy, gõ đập tạo ra tiếng vang. Cứ thế truyền từ đời này sang đời khác, hình thành phong tục thức đón giao thừa và đốt pháo trong đêm trừ tịch.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 1 lấy đúng bảng + 做一做 của sách (tr. 60); cặp 2–3 lấy từ bài tập 练习 2 của sách
// ══════════════════════════════════════════
var synonymData = [
  {pair:'打听 — 询问',
   same:'Đều là động từ, đều có nghĩa "hỏi".',
   sameEx:{zh:'他打听／询问了老人的身体和生活情况。',vn:'Anh ấy hỏi thăm tình hình sức khoẻ và cuộc sống của cụ già.'},
   items:[
     {word:'打听',points:[
       'Thiên về KHẨU NGỮ.',
       'Dùng để dò hỏi, tìm hiểu tin tức (thường hỏi người thứ ba, hỏi vòng vo).',
       'Mang được bổ ngữ kết quả 到: 打听到, 没打听到.'
     ],ex:[{zh:'我跟您打听一下，附近有邮局吗？',vn:'Cho tôi hỏi thăm một chút, gần đây có bưu điện không?'},
          {zh:'我到处打听也没打听到这家公司。',vn:'Tôi dò hỏi khắp nơi cũng không hỏi ra công ty này.'}]},
     {word:'询问',points:[
       'Thiên về VĂN VIẾT, trang trọng.',
       'Thường không mang bổ ngữ kết quả 到; còn có nghĩa HỎI Ý KIẾN.',
       'Mang được tân ngữ là NGƯỜI được hỏi; dùng được như danh từ.'
     ],ex:[{zh:'他仔细地询问了公司近年来的发展情况。',vn:'Ông ấy hỏi kỹ tình hình phát triển của công ty mấy năm gần đây.'},
          {zh:'他打电话询问刘教授对论文的意见。',vn:'Anh ấy gọi điện hỏi ý kiến giáo sư Lưu về luận văn.'},
          {zh:'警察询问了当天见过他的邻居。',vn:'Cảnh sát đã hỏi những người hàng xóm từng gặp anh ta hôm đó.'}]}
   ],
   quiz:[
     {sentence:'打扰一下，向您＿＿件事。',options:['打听','询问'],answer:0,
      why:'Câu khẩu ngữ, hỏi thăm tin tức một cách thân mật → 打听. Sách đánh dấu ✓打听 ×询问.'},
     {sentence:'她＿＿到北京有位医生能治这个病，就带着孩子来了。',options:['打听','询问'],answer:0,
      why:'Có bổ ngữ kết quả 到 → chỉ 打听 dùng được; 询问 không mang 到.'},
     {sentence:'我＿＿了一下，附近像这样的房子，差不多都得一百万。',options:['打听','询问'],answer:0,
      why:'Dò hỏi tin tức giá nhà trong khẩu ngữ, không có người được hỏi cụ thể → 打听.'},
     {sentence:'我＿＿了几个修过机器的顾客，他们对小刘的服务都很满意。',options:['打听','询问'],answer:1,
      why:'Tân ngữ là NGƯỜI được hỏi (几个顾客) → 询问. 打听 không mang thẳng tân ngữ chỉ người được hỏi.'}
   ],
   sgk:{
     chung:{t:'都是动词，都有“问”的意思。',vn:'Đều là động từ, đều có nghĩa "hỏi".',vd:'他打听／询问了老人的身体和生活情况。',vdVn:'Anh ấy hỏi thăm tình hình sức khoẻ và cuộc sống của cụ già.'},
     khac:[
       {a:{t:'多用于口语。',vn:'Chủ yếu dùng trong khẩu ngữ.',vd:'我跟您打听一下，附近有邮局吗？',vdVn:'Cho tôi hỏi thăm một chút, gần đây có bưu điện không?'},
        b:{t:'多用于书面语。',vn:'Chủ yếu dùng trong văn viết.',vd:'他仔细地询问了公司近年来的发展情况。',vdVn:'Ông ấy hỏi kỹ tình hình phát triển của công ty mấy năm gần đây.'}},
       {a:{t:'一般用于寻找、了解有关信息，后可跟结果补语“到”。',vn:'Thường dùng để tìm kiếm, tìm hiểu thông tin liên quan; phía sau có thể theo bổ ngữ kết quả "到".',vd:'我到处打听也没打听到这家公司。',vdVn:'Tôi dò hỏi khắp nơi cũng không hỏi ra công ty này.'},
        b:{t:'后面一般不能带结果补语“到”；另外，还有征求意见的意思。',vn:'Phía sau thường không mang bổ ngữ kết quả "到"; ngoài ra còn có nghĩa hỏi ý kiến.',vd:'他打电话询问刘教授对论文的意见。',vdVn:'Anh ấy gọi điện hỏi ý kiến giáo sư Lưu về luận văn.'}},
       {a:{t:'没有这种用法。',vn:'Không có cách dùng này.'},
        b:{t:'后面可跟动作的对象，还可活用为名词。',vn:'Phía sau có thể theo đối tượng của hành động, còn dùng linh hoạt như danh từ.',vd:'警察询问了当天见过他的邻居。他详细地回答了病人的询问。',vdVn:'Cảnh sát đã hỏi những người hàng xóm từng gặp anh ta hôm đó. Anh ấy trả lời cặn kẽ câu hỏi của bệnh nhân.'}}
     ],
     lamThu:[
       {s:'A：打扰一下，向您＿＿件事。你知道王老板有什么兴趣爱好吗？　B：他最大的爱好就是去各地旅游了，平时也喜欢看看书、看看电影什么的。', dap:[true,false], mau:true,
        giai:'Khẩu ngữ, hỏi thăm tin tức về người thứ ba → 打听 (sách đã đánh dấu mẫu).'},
       {s:'她＿＿到北京有位医生能治这个病，就带着孩子来了。', dap:[true,false],
        giai:'Có bổ ngữ kết quả 到 → chỉ 打听 dùng được.'},
       {s:'我＿＿了一下，附近像这样的房子，差不多都得一百万。', dap:[true,false],
        giai:'Dò la thông tin giá nhà, khẩu ngữ, không có người được hỏi làm tân ngữ → 打听.'},
       {s:'我＿＿了几个修过机器的顾客，他们对小刘的服务都很满意。', dap:[false,true],
        giai:'Phía sau là NGƯỜI được hỏi (几个顾客) — cách dùng chỉ 询问 có.'}
     ]
   }},

  {pair:'赶紧 — 急忙',
   same:'Đều là phó từ, đều chỉ làm việc gì một cách nhanh chóng, không chậm trễ.',
   sameEx:{zh:'看到老师进来，他赶紧／急忙把手机收了起来。',vn:'Thấy thầy giáo bước vào, cậu ấy vội cất điện thoại đi.'},
   items:[
     {word:'赶紧',points:[
       'Nhấn mạnh NẮM LẤY thời cơ, làm ngay.',
       'Dùng được trong câu CẦU KHIẾN, mệnh lệnh: 你赶紧……吧!',
       'Dùng được cho việc chưa xảy ra.'
     ],ex:[{zh:'不用送了，赶紧回去吧。',vn:'Không cần tiễn đâu, mau về đi.'},
          {zh:'你赶紧给他回个电话。',vn:'Cậu gọi lại cho anh ấy ngay đi.'}]},
     {word:'急忙',points:[
       'Nhấn mạnh tâm trạng VỘI VÀNG, cuống quýt.',
       'KHÔNG dùng trong câu cầu khiến (✗ 你急忙回去吧).',
       'Thường tả việc ĐÃ xảy ra; còn làm được vị ngữ: 他走得很急忙.'
     ],ex:[{zh:'“夕”吓得什么似的，急忙往外逃。',vn:'"Tịch" sợ hết hồn, vội vàng chạy trốn ra ngoài.'},
          {zh:'他急忙跑过去看。',vn:'Anh ấy vội vàng chạy lại xem.'}]}
   ],
   quiz:[
     {sentence:'你＿＿给他回个电话，他好像有什么急事找你。',options:['赶紧','急忙'],answer:0,
      why:'Câu cầu khiến (bảo người khác làm) → chỉ 赶紧. 急忙 không dùng trong câu mệnh lệnh.'},
     {sentence:'“夕”吓得什么似的，＿＿往外逃。',options:['赶紧','急忙'],answer:1,both:true,
      why:'Tả việc đã xảy ra với tâm trạng cuống quýt — nguyên văn sách dùng 急忙; 赶紧 cũng không sai.'},
     {sentence:'快下雨了，大家＿＿回家吧！',options:['赶紧','急忙'],answer:0,
      why:'Có 吧 — câu đề nghị, cầu khiến → 赶紧.'},
     {sentence:'听到妈妈叫他，他＿＿放下手机跑了出去。',options:['赶紧','急忙'],answer:1,both:true,
      why:'Kể việc đã xảy ra, nhấn mạnh sự vội vàng → 急忙 rất tự nhiên; 赶紧 cũng dùng được.'}
   ]},

  {pair:'果然 — 居然',
   same:'Đều là phó từ, đứng sau chủ ngữ, trước động từ; đều nói về kết quả của một sự việc so với suy nghĩ ban đầu.',
   sameEx:{zh:'我没想到他果然／居然来了。',vn:'Anh ấy đến thật (quả nhiên / không ngờ lại đến).'},
   items:[
     {word:'果然',points:[
       'Kết quả ĐÚNG như đã nói, đã dự đoán.',
       'Vế trước thường có lời dự đoán: 天气预报说……，果然…….',
       'Sắc thái: xác nhận, "đúng như tôi nghĩ".'
     ],ex:[{zh:'到了晚上，“夕”果然出来了。',vn:'Đến tối, "Tịch" quả nhiên xuất hiện.'},
          {zh:'明星的影响力果然不一般。',vn:'Sức ảnh hưởng của ngôi sao quả là không tầm thường.'}]},
     {word:'居然 (bài 1)',points:[
       'Kết quả NGOÀI dự đoán, không ngờ tới.',
       'Sắc thái: ngạc nhiên, bất ngờ.',
       'Hay đi với 也/都/连……都.'
     ],ex:[{zh:'这么简单的题，你居然也不会做？',vn:'Bài dễ thế này mà bạn lại không làm được à?'},
          {zh:'他这么年轻，没想到居然是一位著名的作家。',vn:'Anh ấy trẻ thế, không ngờ lại là một nhà văn nổi tiếng.'}]}
   ],
   quiz:[
     {sentence:'你的担心不是没有道理的，今天李阳＿＿没有通过面试。',options:['果然','居然'],answer:0,
      why:'Có người đã lo trước (dự đoán) và kết quả đúng như vậy → 果然.'},
     {sentence:'他每天都努力复习，＿＿没有通过考试。',options:['果然','居然'],answer:1,
      why:'Ôn chăm chỉ mà lại trượt — trái với dự đoán → 居然.'},
     {sentence:'天气预报说今天有雨，下午＿＿下起来了。',options:['果然','居然'],answer:0,
      why:'Đúng như dự báo → 果然.'},
     {sentence:'才五岁的孩子，＿＿会说三种语言！',options:['果然','居然'],answer:1,
      why:'Điều bất ngờ, gây ngạc nhiên → 居然.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'英雄',hv:'anh hùng',vn:'anh hùng',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'怪物',hv:'quái vật',vn:'quái vật',note:'Trùng khít.'},
    {zh:'风俗',hv:'phong tục',vn:'phong tục',note:'Trùng khít.'},
    {zh:'意义',hv:'ý nghĩa',vn:'ý nghĩa',note:'Trùng khít — nhưng nhớ nói 有意义, không nói 很意义.'},
    {zh:'英俊',hv:'anh tuấn',vn:'khôi ngô, đẹp trai',note:'"Anh tuấn" tiếng Việt cũng là đẹp trai, tài giỏi.'},
    {zh:'除夕',hv:'trừ tịch',vn:'đêm giao thừa',note:'"Trừ tịch" chính là tên cũ của đêm giao thừa trong tiếng Việt.'},
    {zh:'农历',hv:'nông lịch',vn:'âm lịch',note:'Tiếng Việt cũng nói "nông lịch" — lịch dùng cho nhà nông.'},
    {zh:'制造',hv:'chế tạo',vn:'chế tạo; gây ra',note:'Nghĩa "chế tạo" trùng; nhưng 制造麻烦 là "gây rắc rối" — nghĩa rộng hơn tiếng Việt.'},
    {zh:'表达',hv:'biểu đạt',vn:'bày tỏ, diễn đạt',note:'"Biểu đạt" tiếng Việt dùng y hệt.'},
    {zh:'天真',hv:'thiên chân',vn:'ngây thơ',note:'"Thiên chân" = cái thật trời sinh → hồn nhiên, ngây thơ.'},
    {zh:'守岁',hv:'thủ tuế',vn:'thức đón giao thừa',note:'"Thủ" = canh giữ (thủ môn), "tuế" = năm (tuổi) → canh năm cũ.'}
  ],
  idiom:[
    {zh:'恨之入骨',hv:'hận chi nhập cốt',vn:'căm hận đến tận xương tuỷ',note:'Tiếng Việt nói gần giống: "hận thấu xương".'},
    {zh:'力大无比',hv:'lực đại vô tỉ',vn:'sức mạnh vô song',note:'"Vô tỉ" = không gì so được → vô song.'},
    {zh:'一箭双雕',hv:'nhất tiễn song điêu',vn:'một mũi tên trúng hai đích',note:'Tiếng Việt: "một công đôi việc", "một mũi tên trúng hai đích".'}
  ],
  trap:[
    {zh:'伤害',hv:'thương hại',vn:'làm hại, làm tổn thương',
     warn:'BẪY: "thương hại" tiếng Việt là thương xót, tội nghiệp. 伤害 tiếng Trung là LÀM HẠI, gây tổn thương.'},
    {zh:'灾害',hv:'tai hại',vn:'tai hoạ, thiên tai',
     warn:'BẪY: "tai hại" tiếng Việt là tính từ (có hại). 灾害 là DANH TỪ chỉ thảm hoạ: 自然灾害 = thiên tai.'},
    {zh:'无奈',hv:'vô nại',vn:'đành chịu, hết cách',
     warn:'"Vô nại" ít ai dùng trong tiếng Việt, nên phải nhớ theo nghĩa: bất lực, không biết làm sao.'},
    {zh:'姑娘',hv:'cô nương',vn:'cô gái',
     warn:'"Cô nương" nghe kiểu phim kiếm hiệp, nhưng 姑娘 tiếng Trung hiện đại rất bình thường: cô gái, con gái.'},
    {zh:'说不定',hv:'thuyết bất định',vn:'không chừng, có lẽ',
     warn:'Không dịch là "nói không định". Phó từ 说不定 = không chừng, biết đâu.'},
    {zh:'骨头',hv:'cốt đầu',vn:'xương',
     warn:'头 ở đây là hậu tố đọc nhẹ (như 木头, 石头), không phải "cái đầu".'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — lấy bảng 词语搭配 của giáo trình (tr. 59) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'制造',right:'麻烦'},
  {left:'表达',right:'谢意'},
  {left:'天真的',right:'孩子'},
  {left:'整个',right:'房间'},
  {left:'仔细地',right:'询问'},
  {left:'准确地',right:'表达'},
  {left:'除',right:'掉'},
  {left:'吓得',right:'什么似的'},
  {left:'放',right:'鞭炮'},
  {left:'吃',right:'年夜饭'},
  {left:'下定',right:'决心'},
  {left:'打听',right:'消息'},
  {left:'敲响',right:'锅和盆子'},
  {left:'形成',right:'风俗'},
  {left:'一箭',right:'射死'},
  {left:'死死地',right:'咬住'},
  {left:'自然',right:'灾害'},
  {left:'很有',right:'意义'},
  {left:'议论',right:'纷纷'},
  {left:'英俊',right:'高大'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'在中国，人们把农历十二月三十日叫作',blank:'除夕',post:'。',hint:'(đêm giao thừa)',ans:'除夕'},
  {pre:'老师给我们讲了春节的',blank:'由来',post:'，大家听得都很认真。',hint:'(nguồn gốc)',ans:'由来'},
  {pre:'中秋节是',blank:'农历',post:'八月十五，在公历中每年都不固定。',hint:'(âm lịch)',ans:'农历'},
  {pre:'除夕晚上，全家人一起吃完年夜饭，然后熬夜',blank:'守岁',post:'。',hint:'(thức đón giao thừa)',ans:'守岁'},
  {pre:'弟弟最喜欢看有',blank:'怪物',post:'的动画片，可是看完又不敢一个人睡觉。',hint:'(quái vật)',ans:'怪物'},
  {pre:'经常熬夜对身体的',blank:'伤害',post:'极大。',hint:'(sự tổn hại)',ans:'伤害'},
  {pre:'百姓对“夕”',blank:'恨',post:'之入骨，但是又十分无奈。',hint:'(căm hận)',ans:'恨'},
  {pre:'多喝牛奶对',blank:'骨头',post:'有好处。',hint:'(xương)',ans:'骨头'},
  {pre:'姑娘脸上表现出很',blank:'无奈',post:'的样子。',hint:'(bất lực, hết cách)',ans:'无奈'},
  {pre:'他救了落水的孩子，大家都叫他小',blank:'英雄',post:'。',hint:'(anh hùng)',ans:'英雄'},
  {pre:'这条狗非常勇敢，无论',blank:'咬',post:'住什么都不会松口。',hint:'(cắn)',ans:'咬'},
  {pre:'见了',blank:'外公',post:'，你替我向他问好。',hint:'(ông ngoại)',ans:'外公'},
  {pre:'孩子们',blank:'天真',post:'的笑容让人忘记了烦恼。',hint:'(hồn nhiên, ngây thơ)',ans:'天真'},
  {pre:'李阳要去留学了，我们都',blank:'替',post:'他高兴。',hint:'(cho, vì — giới từ)',ans:'替'},
  {pre:'七郎要替百姓',blank:'除',post:'掉这个制造灾害的东西。',hint:'(trừ khử)',ans:'除'},
  {pre:'两岁的果果是我们家最能',blank:'制造',post:'麻烦的人。',hint:'(gây ra)',ans:'制造'},
  {pre:'越南中部每年都会发生不少自然',blank:'灾害',post:'。',hint:'(thiên tai, tai hoạ)',ans:'灾害'},
  {pre:'到天亮前，它又会逃得连',blank:'影子',post:'都找不着了。',hint:'(cái bóng)',ans:'影子'},
  {pre:'他喜欢音乐、电影、运动，',blank:'此外',post:'还喜欢旅行。',hint:'(ngoài ra)',ans:'此外'},
  {pre:'周末他起得晚，这会儿',blank:'说不定',post:'还在睡觉呢。',hint:'(không chừng)',ans:'说不定'},
  {pre:'为了准备考试，他',blank:'熬夜',post:'学习，第二天上课一直打哈欠。',hint:'(thức khuya)',ans:'熬夜'},
  {pre:'还真让你说对了，他',blank:'果然',post:'还不知道这件事。',hint:'(quả nhiên)',ans:'果然'},
  {pre:'它想吃一户人家的',blank:'姑娘',post:'，被这家人发现了。',hint:'(cô gái)',ans:'姑娘'},
  {pre:'他们立刻敲响了家中的锅和',blank:'盆子',post:'。',hint:'(chậu)',ans:'盆子'},
  {pre:'',blank:'整个',post:'下午，他们都在跳舞。',hint:'(cả, suốt cả)',ans:'整个'},
  {pre:'我不敢相信这是真的，好像做梦',blank:'似的',post:'。',hint:'(như … vậy)',ans:'似的'},
  {pre:'七郎跑上前去，一箭',blank:'射',post:'死了“夕”。',hint:'(bắn)',ans:'射'},
  {pre:'要下雨了，路上的人',blank:'纷纷',post:'往家里跑。',hint:'(nhao nhao, nối nhau)',ans:'纷纷'},
  {pre:'人的思想感情是非常丰富的，有些是无法用语言准确',blank:'表达',post:'的。',hint:'(diễn đạt)',ans:'表达'},
  {pre:'过年不放',blank:'鞭炮',post:'，好像缺少点儿过年的气氛。',hint:'(pháo)',ans:'鞭炮'},
  {pre:'就这样一代代传下来，形成了除夕夜守岁、放鞭炮的',blank:'风俗',post:'。',hint:'(phong tục)',ans:'风俗'},
  {pre:'传说在很久以前，有个叫作“',blank:'夕',post:'”的怪物。',hint:'(tên con quái vật)',ans:'夕'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (替 · 说不定 · 似的 · 纷纷) ít nhất 3 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['七郎','要','替','百姓','除掉','这个','怪物','。'],ans:'七郎要替百姓除掉这个怪物。',audio:'七郎要替百姓除掉这个怪物。'},
  {words:['见了外公','，','你','替','我','向他','问好','。'],ans:'见了外公，你替我向他问好。',audio:'见了外公，你替我向他问好。'},
  {words:['路上的人','都','替','他','着急','。'],ans:'路上的人都替他着急。',audio:'路上的人都替他着急。'},
  {words:['“夕”','说不定','晚上','要','出来','伤害大家','。'],ans:'“夕”说不定晚上要出来伤害大家。',audio:'“夕”说不定晚上要出来伤害大家。'},
  {words:['别放弃','，','说不定','下次','就','成功了','。'],ans:'别放弃，说不定下次就成功了。',audio:'别放弃，说不定下次就成功了。'},
  {words:['出发的时间','还','说不定','。'],ans:'出发的时间还说不定。',audio:'出发的时间还说不定。'},
  {words:['“夕”','吓得','什么','似的','，','急忙往外逃','。'],ans:'“夕”吓得什么似的，急忙往外逃。',audio:'“夕”吓得什么似的，急忙往外逃。'},
  {words:['我','不敢相信','这是真的','，','好像','做梦','似的','。'],ans:'我不敢相信这是真的，好像做梦似的。',audio:'我不敢相信这是真的，好像做梦似的。'},
  {words:['他','下班回到家','累得','什么似的','。'],ans:'他下班回到家累得什么似的。',audio:'他下班回到家累得什么似的。'},
  {words:['百姓','纷纷','对','七郎','表达','谢意','。'],ans:'百姓纷纷对七郎表达谢意。',audio:'百姓纷纷对七郎表达谢意。'},
  {words:['要下雨了','，','路上的人','纷纷','往家里','跑','。'],ans:'要下雨了，路上的人纷纷往家里跑。',audio:'要下雨了，路上的人纷纷往家里跑。'},
  {words:['秋风','刮起','，','落叶','纷纷','。'],ans:'秋风刮起，落叶纷纷。',audio:'秋风刮起，落叶纷纷。'},
  {words:['他们','立刻','敲响了','家中的','锅和盆子','。'],ans:'他们立刻敲响了家中的锅和盆子。',audio:'他们立刻敲响了家中的锅和盆子。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'你____给他回个电话，他好像有什么急事找你。',opts:['赶紧','急忙','果然','此外'],ans:0,
   exp:'Câu cầu khiến (bảo người khác làm ngay) → 赶紧. 急忙 không dùng trong câu mệnh lệnh; 果然 (quả nhiên) và 此外 (ngoài ra) không hợp nghĩa.'},
  {wrong:'明星的影响力____不一般。',opts:['果然','居然','赶紧','纷纷'],ans:0,
   exp:'Ai cũng biết ngôi sao có ảnh hưởng lớn — kết quả đúng như dự đoán → 果然. 居然 dùng cho điều bất ngờ; 赶紧 (mau) và 纷纷 (nhao nhao) không hợp.'},
  {wrong:'我到处打听也没____到这家公司。',opts:['打听','询问','表达','伤害'],ans:0,
   exp:'Có bổ ngữ kết quả 到 → 打听 (打听到). 询问 không mang 到; 表达 (bày tỏ) và 伤害 (làm hại) sai nghĩa.'},
  {wrong:'七郎看到女孩的外公坐在路边哭，于是上前____。',opts:['询问','打听','表达','制造'],ans:0,
   exp:'Hỏi trực tiếp người trước mặt, văn kể trang trọng → 询问 (nguyên văn bài). 打听 là dò hỏi tin tức, không dùng "上前打听" với chính người đang khóc; 表达, 制造 sai nghĩa.'},
  {wrong:'你放心吧，他借的钱我会____他还给你的。',opts:['替','被','把','比'],ans:0,
   exp:'替 + người + V: làm thay ai (trả tiền thay anh ấy). 被 là bị động, 把 cần tân ngữ bị xử lý đứng sau (把钱), 比 dùng để so sánh — đều sai.'},
  {wrong:'你看，天阴得这么厉害，____一会儿要下大雨。',opts:['说不定','果然','此外','整个'],ans:0,
   exp:'Phỏng đoán khả năng sắp xảy ra → 说不定. 果然 dùng khi điều đã dự đoán thành sự thật; 此外 (ngoài ra), 整个 (cả) không hợp.'},
  {wrong:'七郎____带着他的狗出发了。',opts:['于是','此外','说不定','似的'],ans:0,
   exp:'于是 nối việc xảy ra tiếp theo (vì vậy mà) — đúng nguyên văn bài. 此外 dùng để bổ sung thông tin; 说不定 là phỏng đoán; 似的 là trợ từ so sánh.'},
    {wrong:'一见到“夕”就赶紧____东西，大家一起把“夕”杀掉。',opts:['敲打','表达','制造','询问'],ans:0,
   exp:'敲打东西 = gõ đập đồ vật tạo tiếng động (vì "Tịch" sợ tiếng động). 表达, 制造, 询问 không kết hợp với 东西 theo nghĩa này.'},
  {wrong:'七郎的狗____上了“夕”，并死死地咬住了它。',opts:['追','逃','射','杀'],ans:0,
   exp:'追上 = đuổi kịp. 逃 là chạy trốn (ngược chủ thể); 射, 杀 không đi với bổ ngữ 上 trong nghĩa này.'},
  {wrong:'“夕”吓得什么似的，急忙往外____。',opts:['逃','追','咬','除'],ans:0,
   exp:'往外逃 = chạy trốn ra ngoài. 追 (đuổi theo) cần đối tượng; 咬 (cắn), 除 (trừ khử) sai nghĩa.'},
  {wrong:'七郎跑上前去，一____射死了“夕”。',opts:['箭','刀','球','锅'],ans:0,
   exp:'一箭射死 = bắn một phát tên chết. 射 đi với 箭 (mũi tên); 刀 (dao) không "bắn"; 球 (quả bóng) và 锅 (cái nồi) không thể bắn chết ai.'},
  {wrong:'七郎____高大、力大无比。',opts:['英俊','天真','无奈','漂亮'],ans:0,
   exp:'Khen đàn ông khôi ngô → 英俊. 漂亮 thường dùng cho nữ; 天真 (ngây thơ), 无奈 (bất lực) sai nghĩa.'},
  {wrong:'当时有个____叫作七郎，他为百姓除掉了“夕”。',opts:['英雄','英俊','怪物','姑娘'],ans:0,
   exp:'Danh từ chỉ người tài giỏi, dũng cảm → 英雄. 英俊 là tính từ; 怪物 là quái vật; 姑娘 là cô gái — không hợp với 七郎.'},
  {wrong:'端午节吃粽子的风俗是怎么来的？你知道它的____吗？',opts:['由来','由于','意义','风俗'],ans:0,
   exp:'Câu hỏi "是怎么来的" (từ đâu mà có) → hỏi 由来 (nguồn gốc). 由于 là liên từ (bởi vì), không làm danh từ; 意义 là ý nghĩa, không phải nguồn gốc; 风俗 đã có ở vế trước.'},
  {wrong:'这次去山区支教的活动很有教育____。',opts:['意义','意思','意见','由来'],ans:0,
   exp:'教育意义 = ý nghĩa giáo dục — cụm cố định. 意思 (thú vị/ý) không đi với 教育; 意见 (ý kiến), 由来 (nguồn gốc) sai nghĩa.'},
  {wrong:'过年的时候，很多人都喜欢放____。',opts:['鞭炮','灾害','箭','锅'],ans:0,
   exp:'放鞭炮 = đốt pháo. 灾害 (tai hoạ), 箭 (mũi tên), 锅 (nồi) đều không đi với 放 theo nghĩa này.'},
  {wrong:'你突然站在我后面，____了我一跳！',opts:['吓','怕','逃','恨'],ans:0,
   exp:'A 吓了 B 一跳 = A làm B giật mình. 怕 (sợ) là trạng thái của người sợ, không nói 怕了我一跳; 逃, 恨 sai nghĩa.'},
  {wrong:'说话的时候要注意，别____了别人的感情。',opts:['伤害','灾害','害怕','吓'],ans:0,
   exp:'伤害 + 感情 = làm tổn thương tình cảm. 灾害 là danh từ (thiên tai); 害怕 là "sợ", không mang tân ngữ 感情; 吓 là doạ cho sợ, không đi với 感情.'},
  {wrong:'这种药能____死房间里的蚊子。',opts:['杀','射','咬','除'],ans:0,
   exp:'杀死 = giết chết (diệt muỗi). 射死 là bắn chết (cần cung/súng); 咬死 là cắn chết; 除 đi với 掉/去 (除掉), không nói 除死.'},
  {wrong:'我不____他，我只是不想再见到他。',opts:['恨','咬','吓','杀'],ans:0,
   exp:'恨 + người = hận ai. Câu sau nói về cảm xúc (không muốn gặp lại) → 恨. 咬, 吓, 杀 là hành động, không hợp.'},
  {wrong:'七郎____下定决心一定要杀死“夕”。',opts:['暗暗','纷纷','整个','果然'],ans:0,
   exp:'暗暗 (bài 1) = thầm, ngầm trong lòng — đúng nguyên văn. 纷纷 cần chủ ngữ số nhiều; 整个 là tính từ làm định ngữ; 果然 dùng khi đúng như dự đoán.'},
    {wrong:'只要你认真练习，就一定能____中目标。',opts:['射','追','咬','逃'],ans:0,
   exp:'射中目标 = bắn trúng mục tiêu. Bổ ngữ 中 (zhòng) đi với 射; 追, 咬, 逃 không kết hợp với 中目标.'},
  {wrong:'那个穿红衣服的小____是我妹妹。',opts:['姑娘','英雄','外公','怪物'],ans:0,
   exp:'小姑娘 = cô bé. Em gái → phải là 姑娘; 英雄, 外公, 怪物 không hợp.'},
    {wrong:'他们立刻敲响了家中的____和盆子。',opts:['锅','箭','鞭炮','骨头'],ans:0,
   exp:'锅和盆子 = nồi và chậu — đồ dùng trong bếp, gõ vào phát ra tiếng vang. 箭, 鞭炮, 骨头 không gõ như vậy.'},
  {wrong:'____是中国人一年中最重要的晚上，全家人都要回家团圆。',opts:['除夕','农历','风俗','由来'],ans:0,
   exp:'除夕 = đêm giao thừa — "buổi tối" quan trọng nhất. 农历 (âm lịch), 风俗 (phong tục), 由来 (nguồn gốc) không phải là "một buổi tối".'},
  {wrong:'中国人过春节时有“____”的习惯：除夕晚上大家一起熬夜，迎接新年。',opts:['守岁','熬夜','除夕','表达'],ans:0,
   exp:'守岁 = thức đón giao thừa — tên riêng của tục này. 熬夜 chỉ là thức khuya nói chung; 除夕 là đêm giao thừa (danh từ), không phải tập tục; 表达 sai.'},
  {wrong:'今年春节，我们去了____外婆家，吃了很多好吃的。',opts:['外公','爷爷','七郎','英雄'],ans:0,
   exp:'外公外婆 = ông bà ngoại (đi thành cặp). 爷爷 đi với 奶奶 (bên nội); 七郎, 英雄 sai.'},
  {wrong:'传说“七郎”和“____”的故事就是除夕的由来。',opts:['夕','七夕','夕阳','除夕'],ans:0,
   exp:'Con quái vật trong truyện tên là “夕”. 七夕 là lễ Thất tịch, 夕阳 là mặt trời lặn, 除夕 là đêm giao thừa.'},
  {wrong:'把“夕”杀死的英雄叫作____。',opts:['七郎','七夕','外公','姑娘'],ans:0,
   exp:'Người anh hùng trong truyện là 七郎 (Thất Lang). 七夕 là tên ngày lễ; 外公, 姑娘 là nhân vật khác.'},
  {wrong:'我们要保护环境，别让工厂____更多的污染。',opts:['制造','制作','表达','伤害'],ans:0,
   exp:'制造 + 污染/麻烦/灾害 = gây ra (điều xấu). 制作 là làm, chế tác (đồ vật, phim); 表达 (bày tỏ); 伤害 cần tân ngữ là người/sức khoẻ, không nói 伤害污染.'},
  {wrong:'今天下大雨，比赛只好取消了，大家都很____。',opts:['无奈','天真','英俊','整个'],ans:0,
   exp:'Việc ngoài khả năng, đành chịu → 无奈. 天真 (ngây thơ), 英俊 (khôi ngô) sai nghĩa; 整个 không làm vị ngữ.'},
  {wrong:'这只小狗叼着一块____跑了。',opts:['骨头','影子','盆子','箭'],ans:0,
   exp:'一块骨头 = một khúc xương — thứ chó hay ngậm. 影子 không "ngậm" được; 盆子 dùng lượng từ 个; 箭 dùng lượng từ 支.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Không chừng sắp mưa đến nơi rồi, nên tụi mình mau về nhà thôi.',zh:'说不定马上就要下雨了，所以我们还是赶紧回家吧。',py:'Shuōbudìng mǎshàng jiù yào xià yǔ le, suǒyǐ wǒmen háishi gǎnjǐn huí jiā ba.',goiY:['说不定','所以','赶紧'],giai:'说不定 = không chừng, biết đâu (phỏng đoán khả năng cao); 赶紧 = mau, nhanh chóng, đứng trước động từ, dùng khi việc gấp.'},
  {vi:'Dạo này cậu đừng thức khuya ôn bài nữa, nếu không bố mẹ lại lo cho cậu đến mất ngủ đấy.',zh:'你最近别再熬夜复习了，否则爸妈又要替你担心得睡不着觉了。',py:'Nǐ zuìjìn bié zài áoyè fùxí le, fǒuzé bà mā yòu yào tì nǐ dānxīn de shuì bu zháo jiào le.',goiY:['熬夜','否则','替……担心'],giai:'替 + người + 担心 = lo lắng cho ai; 否则 = nếu không thì, nêu hậu quả xấu ở vế sau.'},
  {vi:'Thầy bất ngờ gọi tên cậu ấy, thế là cậu ấy giật mình cứ như vừa làm sai chuyện gì vậy.',zh:'老师突然叫了他的名字，结果他吓得像做错了事似的。',py:'Lǎoshī tūrán jiàole tā de míngzi, jiéguǒ tā xià de xiàng zuòcuòle shì shìde.',goiY:['结果','吓得','像……似的'],giai:'像/好像 + … + 似的 = cứ như là…; V + 得 + 像…似的 là bổ ngữ mức độ, tiếng Việt dịch "… cứ như…".'},
  {vi:'Nghe tin cô chủ nhiệm ốm phải nằm viện, các bạn lần lượt vào nhóm lớp hỏi thăm, thế là lớp trưởng đề nghị cuối tuần cả lớp cùng đến bệnh viện thăm cô.',zh:'听说班主任生病住院了，同学们纷纷在群里表达关心，于是班长提议周末一起去医院看望她。',py:'Tīngshuō bānzhǔrèn shēngbìng zhùyuàn le, tóngxuémen fēnfēn zài qún li biǎodá guānxīn, yúshì bānzhǎng tíyì zhōumò yìqǐ qù yīyuàn kànwàng tā.',goiY:['纷纷','表达','于是'],giai:'纷纷 = lần lượt, tới tấp (nhiều người cùng làm), chủ ngữ phải số nhiều; 表达关心 dịch tự nhiên "hỏi thăm, bày tỏ sự quan tâm".'},
  {vi:'Đón Tết không chỉ phải ăn bữa cơm tất niên mà còn phải đi chúc Tết người lớn; ngoài ra, nhiều nơi đến nay vẫn giữ phong tục đốt pháo.',zh:'过春节不仅要吃年夜饭，还要给长辈拜年；此外，很多地方至今还保留着放鞭炮的风俗。',py:'Guò Chūnjié bùjǐn yào chī niányèfàn, hái yào gěi zhǎngbèi bàinián; cǐwài, hěn duō dìfang zhìjīn hái bǎoliúzhe fàng biānpào de fēngsú.',goiY:['不仅……还……','此外','鞭炮','风俗'],giai:'不仅…还… liệt kê tăng tiến; 此外 (= ngoài ra) mở đầu vế bổ sung ý mới, thường có dấu phẩy ngay sau.'},
  {vi:'Thấy bạn thân bị người ta đổ oan, tôi ấm ức thay cho bạn vô cùng, nhưng lại không đưa ra được chứng cứ nào, trong lòng hết sức bất lực.',zh:'看到好朋友被人冤枉，我替她委屈得不行，可是又拿不出证据，心里十分无奈。',py:'Kàndào hǎo péngyou bèi rén yuānwang, wǒ tì tā wěiqu de bùxíng, kěshì yòu ná bu chū zhèngjù, xīnli shífēn wúnài.',goiY:['替','委屈得不行','可是','无奈'],giai:'替 + ai + 委屈 = ấm ức thay cho ai; 无奈 = bất lực, đành chịu — không dịch "vô nại".'},
  {vi:'Phòng cậu ấy còn sáng đèn thì biết đâu lại đang thức khuya chơi game, tôi đẩy cửa nhìn vào, quả nhiên đoán không sai.',zh:'既然他的灯还亮着，说不定又在熬夜打游戏，我推开门一看，果然没猜错。',py:'Jìrán tā de dēng hái liàngzhe, shuōbudìng yòu zài áoyè dǎ yóuxì, wǒ tuīkāi mén yí kàn, guǒrán méi cāicuò.',goiY:['既然','说不定','熬夜','果然'],giai:'既然 + sự thật đã thấy → suy đoán ở vế sau; 果然 = quả nhiên (đúng như dự đoán), khác 居然 (trái với dự đoán).'},
  {vi:'Phát ngôn trên mạng nhất định phải cẩn thận, một khi lỡ lời thì biết đâu sẽ làm tổn thương người khác, đến lúc đó có hối hận cũng không kịp.',zh:'在网上发言一定要小心，一旦说错了话，说不定就会伤害到别人，到时候后悔也来不及了。',py:'Zài wǎngshang fāyán yídìng yào xiǎoxīn, yídàn shuōcuòle huà, shuōbudìng jiù huì shānghài dào biérén, dào shíhou hòuhuǐ yě láibují le.',goiY:['一旦','说不定','伤害'],giai:'一旦 = một khi (giả định điều không mong muốn); 伤害 dùng cho cả thể xác và tình cảm — ở đây dịch "làm tổn thương".'},
  {vi:'Nhà tôi sở dĩ năm nào đêm giao thừa cũng thức đón năm mới là vì ông nội cho rằng cả nhà đoàn tụ là điều ý nghĩa nhất; dù buồn ngủ díp mắt, chúng tôi vẫn ngồi cùng ông đến lúc sang năm mới.',zh:'我们家之所以每年除夕都要守岁，是因为爷爷觉得一家人团圆最有意义；哪怕困得不行，我们也要陪他坐到零点。',py:'Wǒmen jiā zhīsuǒyǐ měi nián chúxī dōu yào shǒusuì, shì yīnwèi yéye juéde yì jiā rén tuányuán zuì yǒu yìyì; nǎpà kùn de bùxíng, wǒmen yě yào péi tā zuò dào língdiǎn.',goiY:['之所以……是因为……','守岁','团圆','哪怕……也……'],giai:'之所以…是因为… nêu lý do; 哪怕…也… = dù có… cũng… (nhượng bộ giả định). 守岁 = thức đón giao thừa, không dịch "giữ tuổi".'},
  {vi:'Chuông tan học vừa reo, học sinh ùa ra khỏi lớp như bị cái gì đuổi theo, mặc cho thầy ở phía sau gọi thế nào cũng không một ai ngoảnh lại.',zh:'放学铃一响，同学们纷纷冲出教室，像被什么追着似的，不管老师在后面怎么喊，都没有一个人回头。',py:'Fàngxué líng yì xiǎng, tóngxuémen fēnfēn chōngchū jiàoshì, xiàng bèi shénme zhuīzhe shìde, bùguǎn lǎoshī zài hòumiàn zěnme hǎn, dōu méiyǒu yí ge rén huítóu.',goiY:['纷纷','像……似的','不管……都……'],giai:'纷纷 + V = lũ lượt, tới tấp; 不管 + từ để hỏi (怎么) + 都… = mặc cho… thế nào cũng…; 像…似的 so sánh ví von.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Giao thừa là ngày cuối cùng của một năm âm lịch, vì vậy tối hôm đó cả nhà đều quây quần ăn bữa cơm tất niên.',zh:'除夕是农历一年中的最后一天，所以这天晚上全家人都会聚在一起吃年夜饭。',py:'Chúxī shì nónglì yì nián zhōng de zuìhòu yì tiān, suǒyǐ zhè tiān wǎnshang quán jiā rén dōu huì jù zài yìqǐ chī niányèfàn.',goiY:['除夕 = đêm giao thừa','农历 = âm lịch','所以 = vì vậy'],giai:'农历 dịch "âm lịch" (không dịch "nông lịch"); 年夜饭 = bữa cơm tất niên đêm 30.'},
  {vi:'Tương truyền “Tịch” là một con quái vật thường ra làm hại dân lành, người dân căm ghét nó thấu xương nhưng lại đành bất lực.',zh:'传说“夕”是一个经常出来伤害百姓的怪物，百姓对它恨之入骨却又十分无奈。',py:'Chuánshuō “Xī” shì yí ge jīngcháng chūlai shānghài bǎixìng de guàiwu, bǎixìng duì tā hèn zhī rù gǔ què yòu shífēn wúnài.',goiY:['怪物 = quái vật','恨之入骨 = căm ghét thấu xương','却又 = nhưng lại','无奈 = bất lực'],giai:'却又 nối hai trạng thái trái ngược cùng tồn tại (căm ghét — nhưng bất lực); 恨之入骨 là thành ngữ, dịch "căm thù đến tận xương tuỷ".'},
  {vi:'Thất Lang là một anh hùng cao lớn, khôi ngô; con chó của chàng hễ đã cắn vào thứ gì thì tuyệt không nhả ra.',zh:'七郎是个英俊高大的英雄，他的狗无论咬住什么都不会松口。',py:'Qīláng shì ge yīngjùn gāodà de yīngxióng, tā de gǒu wúlùn yǎozhù shénme dōu bú huì sōng kǒu.',goiY:['英俊 = khôi ngô, đẹp trai','无论……都…… = bất kể… đều…','咬住 = cắn chặt'],giai:'无论 + từ để hỏi (什么) + 都 = bất kể… cũng…; 松口 = nhả miệng ra — 咬住…不松口 dịch "cắn chặt không nhả".'},
  {vi:'Thất Lang thấy ông ngoại của cô bé nhà hàng xóm ngồi khóc bên đường, bèn tiến lại hỏi han mới biết hoá ra cô bé ngây thơ đáng yêu đã bị “Tịch” ăn thịt.',zh:'七郎看到邻居家女孩的外公坐在路边哭，上前询问后才知道，原来天真可爱的女孩被“夕”吃掉了。',py:'Qīláng kàndào línjū jiā nǚhái de wàigōng zuò zài lùbiān kū, shàngqián xúnwèn hòu cái zhīdào, yuánlái tiānzhēn kě\'ài de nǚhái bèi “Xī” chīdiào le.',goiY:['外公 = ông ngoại','询问 = hỏi han','原来 = hoá ra','天真 = ngây thơ'],giai:'…后才知道，原来… = sau khi… mới biết hoá ra…; 被…吃掉 là câu bị động, 掉 chỉ mất hẳn.'},
  {vi:'Thất Lang thầm hạ quyết tâm: dù có phải tìm khắp thiên hạ cũng nhất định giết cho được “Tịch”, trừ khử con quái vật gây tai hoạ này thay cho dân lành.',zh:'七郎暗暗下定决心，即使找遍天下，也一定要杀死“夕”，替百姓除掉这个制造灾害的怪物。',py:'Qīláng àn\'àn xiàdìng juéxīn, jíshǐ zhǎobiàn tiānxià, yě yídìng yào shāsǐ “Xī”, tì bǎixìng chúdiào zhège zhìzào zāihài de guàiwu.',goiY:['暗暗 = thầm','即使……也…… = dù… cũng…','替 = thay cho','制造灾害 = gây tai hoạ'],giai:'替 + người + V = làm việc gì thay/vì ai; 即使…也… nhấn mạnh quyết tâm không đổi dù hoàn cảnh khó khăn đến đâu.'},
  {vi:'Suốt một năm qua, tuy Thất Lang vẫn chưa tìm được “Tịch”, nhưng đã dò hỏi được rằng trước khi trời sáng nó sẽ trốn mất tăm, ngay cả cái bóng cũng không thấy; ngoài ra, nó còn đặc biệt sợ tiếng động.',zh:'这一年来，七郎虽然一直没找到“夕”，但是打听到它天亮前就会逃得连影子都找不着；此外，它还特别害怕声响。',py:'Zhè yì nián lái, Qīláng suīrán yìzhí méi zhǎodào “Xī”, dànshì dǎtingdào tā tiān liàng qián jiù huì táo de lián yǐngzi dōu zhǎo bu zháo; cǐwài, tā hái tèbié hàipà shēngxiǎng.',goiY:['打听到 = dò hỏi được','逃得连影子都找不着 = trốn mất tăm','此外 = ngoài ra'],giai:'连…都… phóng đại mức độ (ngay cả cái bóng cũng không tìm thấy) — dịch thoát "trốn mất tăm"; 此外 mở ra thông tin bổ sung.'},
  {vi:'Thất Lang cho rằng không chừng đêm nay “Tịch” sẽ ra hại người, thế là bảo dân chúng thức đêm canh chừng, hễ thấy nó là lập tức gõ đập đồ vật.',zh:'七郎觉得“夕”说不定今晚会出来害人，于是让百姓们熬夜等着，一见到它就赶紧敲打东西。',py:'Qīláng juéde “Xī” shuōbudìng jīnwǎn huì chūlai hài rén, yúshì ràng bǎixìngmen áoyè děngzhe, yí jiàndào tā jiù gǎnjǐn qiāodǎ dōngxi.',goiY:['说不定 = không chừng','于是 = thế là','熬夜 = thức đêm','赶紧 = vội, lập tức'],giai:'说不定 đứng sau chủ ngữ 夕, chỉ phỏng đoán; 一…就… = hễ… là…; 熬夜 ở đây là thức đêm canh chừng, không phải "thức khuya" vì học hành.'},
  {vi:'Đến tối, quả nhiên “Tịch” xuất hiện; nó định ăn thịt cô con gái của một gia đình, nhà ấy liền gõ vang nồi và chậu, tiếp đó cả thị trấn đều vang lên theo.',zh:'到了晚上，“夕”果然出来了，它想吃一户人家的姑娘，这家人立刻敲响了锅和盆子，接着整个镇子都响了起来。',py:'Dàole wǎnshang, “Xī” guǒrán chūlai le, tā xiǎng chī yí hù rénjiā de gūniang, zhè jiā rén lìkè qiāoxiǎngle guō hé pénzi, jiēzhe zhěnggè zhènzi dōu xiǎngle qilai.',goiY:['果然 = quả nhiên','立刻 = lập tức','锅和盆子 = nồi và chậu','接着 = tiếp đó'],giai:'果然 xác nhận dự đoán của Thất Lang đã đúng; 响了起来: 起来 ở đây chỉ động tác bắt đầu và tiếp diễn — "vang lên".'},
  {vi:'“Tịch” sợ hết hồn, vội vàng tháo chạy ra ngoài; con chó của Thất Lang đuổi theo cắn chặt lấy nó, thế là Thất Lang chạy tới, bắn một mũi tên giết chết nó.',zh:'“夕”吓得什么似的，急忙往外逃，七郎的狗追上去死死地咬住了它，于是七郎跑上前去，一箭射死了它。',py:'“Xī” xià de shénme shìde, jímáng wǎng wài táo, Qīláng de gǒu zhuī shangqu sǐsǐ de yǎozhùle tā, yúshì Qīláng pǎo shàngqián qu, yí jiàn shèsǐle tā.',goiY:['吓得什么似的 = sợ hết hồn','追 = đuổi','于是 = thế là','一箭射死 = bắn một mũi tên chết'],giai:'V/Adj + 得 + 什么似的 = … đến mức không tả nổi — dịch "sợ hết hồn, sợ chết khiếp"; 一箭射死 = một mũi tên bắn chết (số lượng + động từ + kết quả).'},
  {vi:'Vì ngày hôm đó mang ý nghĩa đặc biệt, nên cứ đến đêm giao thừa hằng năm, người ta lại thức trắng cả đêm, gõ đập tạo ra tiếng động; truyền từ đời này sang đời khác, từ đó hình thành phong tục thức đón giao thừa và đốt pháo.',zh:'由于这一天很有意义，人们每年除夕都整晚不睡，敲打出响声，一代代传下来，从而形成了守岁、放鞭炮的风俗。',py:'Yóuyú zhè yì tiān hěn yǒu yìyì, rénmen měi nián chúxī dōu zhěng wǎn bú shuì, qiāodǎ chū xiǎngshēng, yídàidài chuán xialai, cóng\'ér xíngchéngle shǒusuì, fàng biānpào de fēngsú.',goiY:['由于 = do, vì','意义 = ý nghĩa','从而 = từ đó','风俗 = phong tục'],giai:'由于… nêu nguyên nhân, 从而 dẫn ra kết quả cuối cùng của cả chuỗi sự việc; 守岁 = thức đón giao thừa, 放鞭炮 = đốt pháo.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  words:['除夕','风俗','熬夜','纷纷','意义'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể về đêm giao thừa ở nhà em hoặc ở Việt Nam.',
  outline:[
    'Câu mở: đêm giao thừa (除夕) có ý nghĩa thế nào với người Việt / gia đình em (dùng 意义).',
    'Thân: tối hôm đó cả nhà làm gì — ăn cơm tất niên, thức đón giao thừa (dùng 熬夜).',
    'Khoảnh khắc giao thừa: mọi người/pháo hoa… (dùng 纷纷).',
    'Kết: cảm nghĩ của em về những phong tục ấy (dùng 风俗 + 虽然……但是……).'
  ],
  model:{
    zh:'在越南，除夕是一年中最有意义的晚上。这天晚上，全家人一起吃年夜饭，然后熬夜守岁，等着新年的到来。十二点一到，天空中的烟花纷纷亮了起来，大家互相说“新年快乐”。我觉得这些风俗虽然很简单，但是让一家人的心更近了。',
    py:'Zài Yuènán, chúxī shì yì nián zhōng zuì yǒu yìyì de wǎnshang. Zhè tiān wǎnshang, quánjiā rén yìqǐ chī niányèfàn, ránhòu áoyè shǒusuì, děngzhe xīnnián de dàolái. Shí\'èr diǎn yí dào, tiānkōng zhōng de yānhuā fēnfēn liàngle qǐlái, dàjiā hùxiāng shuō "xīnnián kuàilè". Wǒ juéde zhèxiē fēngsú suīrán hěn jiǎndān, dànshì ràng yì jiā rén de xīn gèng jìn le.',
    vn:'Ở Việt Nam, đêm giao thừa là buổi tối ý nghĩa nhất trong năm. Tối hôm ấy, cả nhà cùng ăn cơm tất niên rồi thức khuya đón giao thừa, chờ năm mới đến. Mười hai giờ vừa điểm, pháo hoa trên bầu trời nối nhau bừng sáng, mọi người chúc nhau "năm mới vui vẻ". Tôi thấy những phong tục ấy tuy đơn giản nhưng khiến lòng người trong nhà gần nhau hơn.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có ít nhất một câu ghép (虽然…但是 / 一…就 / 由于…于是) chưa?',
    '纷纷 có đi với chủ ngữ SỐ NHIỀU không (烟花/大家/亲戚朋友)?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，介绍一下你们家或你们国家是怎么过除夕的。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  tuDung:[
    {tu:'除夕', loai:'danh từ', cach:'过除夕 · 除夕晚上 · 除夕夜',
     sai:[{re:'除夕(了|过)', sua:'过除夕 / 到了除夕', giai:'除夕 là DANH TỪ (đêm giao thừa), không làm động từ nên không mang 了/过 phía sau. Nói 过除夕 (đón giao thừa) hoặc 到了除夕.'}]},
    {tu:'风俗', loai:'danh từ', cach:'……的风俗 · 风俗习惯 · 按风俗',
     sai:[{re:'(很|非常|十分|特别)风俗', sua:'很有特色的风俗 / 很传统', giai:'风俗 là DANH TỪ, không đứng sau 很. Muốn khen: 这个风俗很有意思 / 很有特色.'}]},
    {tu:'熬夜', loai:'động từ (ly hợp)', cach:'熬夜守岁 · 熬夜学习 · 熬了一夜',
     sai:[{re:'熬夜(了)?(一|两|三|几|整)(个)?(晚上|夜|小时)', sua:'熬了一夜 / 熬了两个晚上的夜', giai:'熬夜 là LY HỢP TỪ: thời lượng chen vào giữa (熬了一夜), không đặt sau cả cụm.'},
          {re:'熬夜过', sua:'熬过夜', giai:'Ly hợp từ: 过 chen giữa → 熬过夜.'}]},
    {tu:'纷纷', loai:'phó từ', cach:'Chủ ngữ số nhiều + 纷纷 + V',
     sai:[{re:'(我|你|他|她)纷纷', sua:'大家纷纷…… / 他们纷纷……', giai:'纷纷 chỉ dùng khi NHIỀU người/vật nối nhau làm một việc — chủ ngữ phải số nhiều.'},
          {re:'(很|非常|十分)纷纷', sua:'纷纷 + động từ', giai:'纷纷 không đi sau 很. Dùng thẳng: 大家纷纷拍照.', nhe:true}]},
    {tu:'意义', loai:'danh từ', cach:'很有意义 · 重要的意义 · ……的意义',
     sai:[{re:'(很|非常|十分|特别|最)意义', sua:'很有意义 / 最有意义', giai:'意义 là DANH TỪ: phải có 有 — 很有意义, 最有意义 (không nói 很意义).'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'替 + người + V', nhan:'替', vd:'除夕那天，妈妈替我准备好了新衣服。', khi:'Kể việc ai đó làm CHO / THAY mình — thêm chi tiết tình cảm.'},
    {ten:'说不定 + V', nhan:'说不定', vd:'今年说不定我们能回老家过年。', khi:'Nêu dự đoán, mong ước cho năm mới.'},
    {ten:'……得什么似的 / 像……似的', nhan:'似的', vd:'收到红包，弟弟高兴得什么似的。', khi:'Tả cảm xúc thật sinh động, có chút khoa trương.'},
    {ten:'Chủ ngữ số nhiều + 纷纷 + V', nhan:'纷纷', vd:'十二点一到，亲戚朋友纷纷打电话来拜年。', khi:'Tả cảnh nhiều người cùng làm một việc — không khí Tết.'},
    {ten:'由于……，于是……', nhan:'由于', vd:'由于这一天很有意义，于是人们一直保留着这个风俗。', khi:'Giải thích nguồn gốc, lý do của phong tục.'},
    {ten:'一……就……', nhan:'一……就', vd:'十二点一到，大家就一起放烟花。', khi:'Tả khoảnh khắc giao thừa — hai việc nối tiếp ngay.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'这些风俗虽然很简单，但是很有意义。', khi:'Câu KẾT — nêu cảm nghĩ.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['纷纷','来','亲戚朋友','拜年'],
     dap:'亲戚朋友纷纷来拜年。',
     vn:'Họ hàng bạn bè nối nhau đến chúc Tết.',
     giai:'Chủ ngữ số nhiều 亲戚朋友 → phó từ 纷纷 → động từ 来 + mục đích 拜年. 纷纷 luôn đứng TRƯỚC động từ.'},
    {manh:['替','高兴','我们都','他'],
     dap:'我们都替他高兴。',
     vn:'Chúng tôi đều mừng cho anh ấy.',
     giai:'Giới từ 替 + người (他) đứng trước tính từ tâm trạng 高兴. 都 đi sau chủ ngữ, trước cụm giới từ.'},
    {manh:['说不定','还在','他','睡觉呢'],
     dap:'他说不定还在睡觉呢。', chap:['说不定他还在睡觉呢。'],
     vn:'Không chừng cậu ấy vẫn đang ngủ.',
     giai:'说不定 là phó từ, đứng trước hoặc sau chủ ngữ đều được. 还在 + V + 呢: vẫn đang….'},
    {manh:['吓得','小狗','什么似的','被鞭炮声'],
     dap:'小狗被鞭炮声吓得什么似的。',
     vn:'Con chó con bị tiếng pháo làm cho sợ hết hồn.',
     giai:'Câu 被 (HSK 3–4): Chủ ngữ + 被 + tác nhân + V + 得 + bổ ngữ. ……得什么似的 là cấu trúc của bài.'},
    {manh:['守岁的','中国人','有','习惯'],
     dap:'中国人有守岁的习惯。',
     vn:'Người Trung Quốc có tục thức đón giao thừa.',
     giai:'守岁的 là định ngữ, đứng ngay trước danh từ 习惯. Chủ ngữ + 有 + định ngữ + 的 + danh từ.'},
    {manh:['很有','除夕','对中国人来说','意义'],
     dap:'除夕对中国人来说很有意义。', chap:['对中国人来说除夕很有意义。'],
     vn:'Đối với người Trung Quốc, đêm giao thừa rất có ý nghĩa.',
     giai:'对……来说 (HSK 4) có thể đứng đầu câu hoặc sau chủ ngữ. 很有 + 意义 — không nói 很意义.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo phần 运用 · 话题讨论 của sách
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (lấy theo phần 话题讨论 của sách). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 除夕 · 守岁 · 熬夜 · 鞭炮 · 风俗 · 意义 · 纷纷 · 说不定.',
  questions:[
    {q_zh:'你知道中国的除夕是什么日子吗？除夕和春节有什么关系？',
     q_vn:'Em có biết đêm giao thừa ở Trung Quốc là ngày nào không? Giao thừa và Tết có quan hệ gì?',
     hint:'Dùng 农历 + 叫作 + 除夕',
     sample:'除夕是农历十二月的最后一天，也就是春节的前一天晚上。这天晚上，全家人要一起吃年夜饭、守岁，等着新年的到来。',
     sample_vn:'Giao thừa là ngày cuối cùng của tháng Chạp âm lịch, tức là tối trước ngày mùng một Tết. Tối hôm đó cả nhà cùng ăn cơm tất niên, thức đón giao thừa, chờ năm mới đến.',
     note:'Câu hỏi kiến thức — trả lời rõ "là ngày nào" trước, rồi mới kể thêm hoạt động.'},
    {q_zh:'有关春节的风俗习惯，你比较了解的是什么？',
     q_vn:'Về phong tục Tết, em hiểu rõ nhất phong tục nào?',
     hint:'Chọn MỘT phong tục, kể cụ thể + ý nghĩa của nó',
     sample:'我比较了解放鞭炮的风俗。传说“夕”特别害怕声响，所以人们在除夕夜放鞭炮，希望新的一年平平安安。',
     sample_vn:'Tôi hiểu rõ hơn cả là tục đốt pháo. Truyền thuyết kể rằng "Tịch" rất sợ tiếng động, nên người ta đốt pháo vào đêm giao thừa, mong năm mới bình an.',
     note:'Nói về MỘT phong tục cho sâu sẽ hay hơn liệt kê năm, sáu phong tục.'},
    {q_zh:'越南人和中国人过新年，有什么相同或不同的地方？',
     q_vn:'Người Việt và người Trung Quốc ăn Tết có gì giống và khác nhau?',
     hint:'So sánh, dùng 都…… / 不过…… / 此外……',
     sample:'越南人和中国人都过农历新年，都要吃年夜饭、给孩子红包。不过中国北方人过年吃饺子，我们越南人吃粽子。此外，越南现在已经不让放鞭炮了。',
     sample_vn:'Người Việt và người Trung Quốc đều ăn Tết âm lịch, đều ăn cơm tất niên, lì xì cho trẻ con. Nhưng người miền Bắc Trung Quốc ăn sủi cảo, còn người Việt ăn bánh chưng. Ngoài ra, Việt Nam giờ đã cấm đốt pháo.',
     note:'Dạng so sánh — nói cả điểm GIỐNG lẫn điểm KHÁC mới đủ ý.'},
    {q_zh:'如果你能在中国过春节的话，你最想做的是什么？为什么？',
     q_vn:'Nếu được ăn Tết ở Trung Quốc, em muốn làm gì nhất? Vì sao?',
     hint:'Nêu mong muốn + lý do, có thể dùng 说不定',
     sample:'我最想跟中国朋友一起包饺子、守岁。因为我觉得这样才能真正感受到中国春节的气氛，说不定我还能吃到包着硬币的饺子呢！',
     sample_vn:'Tôi muốn nhất là cùng bạn Trung Quốc gói sủi cảo và thức đón giao thừa. Vì tôi thấy như vậy mới thật sự cảm nhận được không khí Tết Trung Quốc, không chừng tôi còn ăn trúng chiếc sủi cảo có đồng xu nữa!',
     note:'Phải có LÝ DO. 说不定 ở câu cuối giúp câu trả lời tự nhiên, sinh động.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 6.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5上·练习册》第6课 听力',
  items: [
    {n:1,
     lines:[{sp:'男',zh:'你看东边的天已放晴了。夏天，在我家阳台上，有时还能看见彩虹呢。'},
            {sp:'女',zh:'真的？我还一次也没见过呢。'}],
     q:'从对话中可以知道什么？',qvn:'Qua đoạn hội thoại có thể biết điều gì?',
     opts:['现在正在下大雨','女的常常看见彩虹','男的家没有阳台','天已经晴了'],ans:3,
     why:'Câu đầu tiên 东边的天已放晴了 — trời đã hửng nắng. Người phụ nữ nói 一次也没见过 (chưa thấy cầu vồng lần nào), nên B sai; người đàn ông nói 在我家阳台上, nên C sai.',
     words:[]},

    {n:2,
     lines:[{sp:'男',zh:'中国人过春节时有“守岁”的习惯，你听说过吗？'},
            {sp:'女',zh:'守岁说的就是年三十全家团圆后，大家一起熬夜，迎接新年的到来。'}],
     q:'中国人守岁是在哪天？',qvn:'Người Trung Quốc thức đón giao thừa vào ngày nào?',
     opts:['农历年三十','农历正月初一','农历八月十五','农历正月十五'],ans:0,
     why:'年三十 = ngày ba mươi Tết, chính là 除夕 trong bài đọc. 守岁 và 熬夜 đều là từ mới của bài.',
     words:['守岁','熬夜']},

    {n:3,
     lines:[{sp:'男',zh:'妈妈，我想去院子里骑会儿自行车，行吗？'},
            {sp:'女',zh:'你看现在太阳多晒呀，吃完晚饭我陪你去，好不好？'}],
     q:'妈妈为什么不同意孩子骑车？',qvn:'Vì sao mẹ không đồng ý cho con đạp xe?',
     opts:['太阳太晒了','快要下雨了','还没做完作业','自行车坏了'],ans:0,
     why:'现在太阳多晒呀 — nắng gắt quá. Mẹ không cấm hẳn mà hẹn ăn tối xong sẽ đi cùng.',
     words:[]},

    {n:4,
     lines:[{sp:'男',zh:'你听说过《西游记》这本书吗？'},
            {sp:'女',zh:'当然，那是本中国神话故事，很有意思，可惜我现在还看不太懂。'}],
     q:'关于《西游记》，可以知道女的怎么样？',qvn:'Về 《Tây Du Ký》, biết được gì về người phụ nữ?',
     opts:['没听说过这本书','觉得这本书没意思','已经看了好几遍','现在还看不太懂'],ans:3,
     why:'可惜我现在还看不太懂 — tiếc là giờ vẫn chưa đọc hiểu lắm. Cô nói 当然 (dĩ nhiên có nghe) và 很有意思, nên A, B sai.',
     words:[]},

    {n:5,
     lines:[{sp:'男',zh:'我又困了，从欧洲回来三四天了，这时差还是没完全倒过来。'},
            {sp:'女',zh:'可不是，我上次去美国，一个多星期才倒过来。'}],
     q:'男的怎么了？',qvn:'Người đàn ông bị làm sao?',
     opts:['生病了','刚从美国回来','时差还没倒过来','昨晚熬夜了'],ans:2,
     why:'这时差还是没完全倒过来 — vẫn chưa quen lệch múi giờ. Người đàn ông về từ CHÂU ÂU; đi Mỹ là chuyện của người phụ nữ — bẫy thường gặp.',
     words:[]},

    {n:6,
     lines:[{sp:'女',zh:'昨晚的篮球邀请赛你去看了吗？'},
            {sp:'男',zh:'路上遇到堵车，等赶到体育馆，比赛都进行二十多分钟了。'}],
     q:'关于男的，可以知道什么？',qvn:'Về người đàn ông, có thể biết điều gì?',
     opts:['没去看比赛','到的时候比赛已经开始了','是篮球运动员','坐地铁去的'],ans:1,
     why:'比赛都进行二十多分钟了 — trận đấu đã diễn ra hơn hai mươi phút khi anh đến. Anh CÓ đi (A sai), lý do đến muộn là tắc đường (không phải đi tàu điện).',
     words:[]},

    {n:7,
     lines:[{sp:'女',zh:'你们中国的中秋节是8月15号，对吗？'},
            {sp:'男',zh:'没错。'},
            {sp:'女',zh:'可为什么我在日历上看到的中秋节是在9月份呢？'},
            {sp:'男',zh:'哦，是这样，中秋节是农历的8月15号，在公历中每年都不固定，一般是在9月份，有时还会离10月1日国庆节很近呢。'}],
     q:'关于中秋节，可以知道什么？',qvn:'Về Tết Trung thu, có thể biết điều gì?',
     opts:['是公历8月15号','总是在国庆节以后','在公历中日期不固定','总是在10月1日'],ans:2,
     why:'在公历中每年都不固定 — tính theo dương lịch thì năm nào cũng khác. Trung thu là 农历 (âm lịch) 15/8, không phải dương lịch.',
     words:['农历']},

    {n:8,
     lines:[{sp:'男',zh:'今年过年我们还买鞭炮吗？'},
            {sp:'女',zh:'过年不放鞭炮，好像缺少点儿过年的气氛啊！'},
            {sp:'男',zh:'不过，现在提倡保护环境，这些旧习俗也该改改了。'},
            {sp:'女',zh:'那听你的，现在鞭炮很贵，正好可以省点儿钱了。'}],
     q:'关于鞭炮，男的建议怎么做？',qvn:'Về pháo, người đàn ông đề nghị thế nào?',
     opts:['多买一些','买便宜一点儿的','到郊区去放','今年不买了'],ans:3,
     why:'这些旧习俗也该改改了 — tục cũ nên thay đổi, tức là năm nay không mua pháo nữa; người phụ nữ đồng ý 那听你的. Câu 鞭炮很贵 chỉ là lý do phụ.',
     words:['鞭炮']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn Trung Quốc mới quen hỏi em về Tết ở Việt Nam.',
     a:{sp:'Bạn',zh:'你们越南人也过除夕吗？',vn:'Người Việt các cậu cũng đón giao thừa à?'},
     need:['Dùng 除夕 và 风俗','Kể ít nhất MỘT phong tục cụ thể'],
     sample:'当然过！除夕晚上我们全家一起吃年夜饭，然后熬夜守岁。这个风俗跟中国差不多。',
     samplePy:'Dāngrán guò! Chúxī wǎnshang wǒmen quánjiā yìqǐ chī niányèfàn, ránhòu áoyè shǒusuì. Zhège fēngsú gēn Zhōngguó chàbuduō.',
     sampleVn:'Có chứ! Tối giao thừa cả nhà mình cùng ăn cơm tất niên, rồi thức đón giao thừa. Phong tục này cũng giống Trung Quốc.',
     tip:'Trả lời câu hỏi có/không xong phải KỂ THÊM — đừng chỉ nói 过.'},

    {scene:'Bạn cùng lớp bị sốt, không đến buổi sinh hoạt lớp được.',
     a:{sp:'Bạn',zh:'我发烧了，明天的班会去不了了……',vn:'Tớ bị sốt rồi, buổi sinh hoạt lớp ngày mai không đi được…'},
     need:['Dùng 替','Hứa giúp bạn một việc CỤ THỂ'],
     sample:'别担心，我替你跟老师请假，班会的笔记我也替你记好。',
     samplePy:'Bié dānxīn, wǒ tì nǐ gēn lǎoshī qǐngjià, bānhuì de bǐjì wǒ yě tì nǐ jìhǎo.',
     sampleVn:'Đừng lo, tớ xin phép cô giúp cậu, ghi chép buổi sinh hoạt tớ cũng ghi giúp cậu luôn.',
     tip:'替 là giới từ: 替 + người + ĐỘNG TỪ. Đừng viết 我替你 rồi bỏ lửng không có động từ.'},

    {scene:'Đã quá giờ hẹn mà một bạn trong nhóm vẫn chưa đến.',
     a:{sp:'Bạn',zh:'小明怎么还没来？都过了二十分钟了。',vn:'Tiểu Minh sao vẫn chưa đến? Quá hai mươi phút rồi.'},
     need:['Dùng 说不定','Đưa ra một phỏng đoán HỢP LÝ'],
     sample:'他家住得远，说不定路上堵车了。我给他打个电话问问吧。',
     samplePy:'Tā jiā zhù de yuǎn, shuōbudìng lù shang dǔchē le. Wǒ gěi tā dǎ ge diànhuà wènwen ba.',
     sampleVn:'Nhà cậu ấy xa, không chừng bị tắc đường. Để tớ gọi điện hỏi thử.',
     tip:'说不定 dùng cho PHỎNG ĐOÁN — nên có lý do đi kèm (家住得远) thì câu mới thuyết phục.'},

    {scene:'Sáng ra mẹ thấy mắt em thâm quầng.',
     a:{sp:'Mẹ',zh:'你昨晚是不是又熬夜了？',vn:'Tối qua con lại thức khuya đúng không?'},
     need:['Dùng 熬夜 (đúng cách ly hợp từ nếu có thời lượng)','Dùng ……得什么似的'],
     sample:'是的，我熬了半夜复习考试，现在困得什么似的。以后我一定早点儿睡。',
     samplePy:'Shì de, wǒ áole bàn yè fùxí kǎoshì, xiànzài kùn de shénme shìde. Yǐhòu wǒ yídìng zǎo diǎnr shuì.',
     sampleVn:'Vâng, con thức nửa đêm ôn thi, giờ buồn ngủ díp cả mắt. Lần sau con nhất định ngủ sớm.',
     tip:'Ly hợp từ: 熬了半夜 / 熬了一夜 — KHÔNG nói 熬夜了半夜.'},

    {scene:'Cô giáo hỏi về buổi xem biểu diễn chào năm mới của lớp.',
     a:{sp:'Cô',zh:'昨天的新年晚会，同学们觉得怎么样？',vn:'Buổi dạ hội năm mới hôm qua, các em thấy thế nào?'},
     need:['Dùng 纷纷','Chủ ngữ phải là SỐ NHIỀU'],
     sample:'大家都很喜欢！晚会结束以后，同学们纷纷说明年还想再去。',
     samplePy:'Dàjiā dōu hěn xǐhuan! Wǎnhuì jiéshù yǐhòu, tóngxuémen fēnfēn shuō míngnián hái xiǎng zài qù.',
     sampleVn:'Mọi người đều rất thích ạ! Buổi dạ hội kết thúc, các bạn nhao nhao nói sang năm còn muốn đi nữa.',
     tip:'纷纷 không dùng cho một người: ✗ 我纷纷说…….'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em nhắn tin hỏi bạn thân.',
     a:'我跟你打听一下，学校附近有什么好吃的？',b:'我想向你询问一下学校附近餐厅的情况。',better:'a',
     why:'打听 là KHẨU NGỮ, hợp với tin nhắn bạn bè. 询问 thiên văn viết — nói với bạn thân nghe như đang làm khảo sát.'},

    {scene:'Em viết biên bản cuộc họp nộp cho công ty.',
     a:'经理打听了一下项目怎么样了。',b:'经理仔细地询问了项目的进展情况。',better:'b',
     why:'Văn bản công ty là VĂN VIẾT → 询问 + 情况. 打听 nghe như dò la, không hợp ngữ cảnh chính thức.'},

    {scene:'Em viết thư cảm ơn thầy chủ nhiệm cuối năm.',
     a:'谢谢老师啦！',b:'老师，我想借这个机会向您表达我的谢意。',better:'b',
     why:'Thư gửi thầy cô cần trang trọng: 向您表达谢意. Câu a đúng nhưng quá suồng sã cho một bức thư.'},

    {scene:'Đã 11 giờ đêm, em nhắc em trai nhỏ đi ngủ.',
     a:'别玩了，赶紧睡觉！',b:'请你尽快休息。',better:'a',
     why:'Nói với em nhỏ trong nhà, khẩu ngữ tự nhiên là 赶紧 + V. 请你尽快休息 nghe như thông báo của khách sạn.'},

    {scene:'Em viết bài văn kể lại truyền thuyết "Tịch" nộp cho cô.',
     a:'“夕”吓死了，马上跑了。',b:'“夕”吓得什么似的，急忙往外逃。',better:'b',
     why:'Bài văn cần sinh động và thiên văn viết: 吓得什么似的 + 急忙往外逃. Câu a quá khẩu ngữ, nghe như kể chuyện miệng.'},

    {scene:'Em gọi điện chúc Tết ông bà.',
     a:'新年快乐啊！',b:'爷爷奶奶，祝你们新年快乐，身体健康，万事如意！',better:'b',
     why:'Chúc Tết người lớn tuổi phải có xưng hô và lời chúc đầy đủ. Câu a chỉ hợp khi nhắn cho bạn bè.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo 练习 4 của sách (根据下面的提示词复述课文内容)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Mở', cue:'在中国，人们把……叫作除夕，这一天……', words:['农历','除夕','守岁']},
    {step:'"Tịch" và Thất Lang', cue:'很久以前，有个叫作“夕”的……；当时有个英雄叫作……', words:['怪物','伤害','恨','无奈','英雄','英俊','咬']},
    {step:'Hạ quyết tâm', cue:'一天，七郎看到……，于是……', words:['外公','询问','天真','杀','替','除','制造','灾害']},
    {step:'Tìm hiểu về "Tịch"', cue:'七郎了解到：它一般……；此外……', words:['逃','影子','此外','说不定','熬夜','赶紧']},
    {step:'Trừ "Tịch"', cue:'到了晚上，“夕”果然……', words:['果然','姑娘','锅','盆子','整个','吓','似的','追','箭','射']},
    {step:'Phong tục', cue:'除掉“夕”以后，……就这样形成了……', words:['纷纷','表达','意义','鞭炮','风俗']}
  ],
  checklist: [
    'Kể đủ sáu ý trên chưa, có bỏ mất đoạn "tìm hiểu về Tịch" không?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng 替, 说不定, 似的, 纷纷 — bốn điểm ngữ pháp của bài không?',
    'Nói liền mạch khoảng 1–2 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 61) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['赶紧','无奈','制造','果然','伤害','此外'],
   cau:[
     {s:'还真让你说对了，他＿＿还不知道这件事。', dap:['果然']},
     {s:'两岁的果果是我们家最能＿＿麻烦的人。', dap:['制造']},
     {s:'姑娘脸上表现出很＿＿的样子。', dap:['无奈']},
     {s:'他喜欢音乐、电影、运动，＿＿还喜欢旅行。', dap:['此外']},
     {s:'不用送了，＿＿回去吧，家里还有别的客人呢。', dap:['赶紧']},
     {s:'经常熬夜对身体的＿＿极大。', dap:['伤害']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'人的思想感情是非常丰富的，有些是无法用语言准确＿＿的。', opts:['表示','表达'], ans:1, giai:'表达 đi với 思想感情 và trạng ngữ 准确地 (bảng 词语搭配). 表示 thiên về "tỏ ý, cho biết thái độ" (表示感谢, 表示同意), không nói 准确表示 思想感情.'},
     {s:'你＿＿给他回个电话，他好像有什么急事找你。', opts:['急忙','赶紧'], ans:1, giai:'Câu cầu khiến (bảo người khác làm ngay) → 赶紧. 急忙 chỉ tả hành động vội vàng đã/đang xảy ra, không dùng trong câu mệnh lệnh.'},
     {s:'今天是不可能了，你＿＿安排一个时间见面吧。', opts:['此外','另外'], ans:1, giai:'另外 đứng trước động từ với nghĩa "khác, riêng" (另外安排 = sắp xếp thời gian khác). 此外 chỉ là liên từ nối câu "ngoài ra", không bổ nghĩa cho động từ.'},
     {s:'明星的影响力＿＿不一般。', opts:['果然','居然'], ans:0, giai:'Ai cũng biết ngôi sao có sức ảnh hưởng — kết quả khớp với điều đã biết → 果然. 居然 dùng cho điều bất ngờ, trái dự đoán.'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'你的担心不是A没有B道理的，今天李阳C没有D通过面试。', tu:'果然', ans:'C', giai:'果然 là phó từ, đứng sau chủ ngữ 李阳, trước phần phủ định 没有: 今天李阳果然没有通过面试.'},
     {s:'A学院B所有的C老师同学都在议论D这件事。', tu:'整个', ans:'A', giai:'整个 làm định ngữ, đứng trước danh từ 学院: 整个学院所有的老师同学…….'},
     {s:'A路上的人B他着急，拉住C他的马，阻止D他说：“方向错了。”', tu:'替', ans:'B', giai:'替 + người + tính từ tâm trạng: 路上的人替他着急 (người đi đường sốt ruột thay cho anh ta).'},
     {s:'忽然，他A看见小木屋的方向B升起了黑烟，C他D跑过去看。', tu:'急忙', ans:'D', giai:'急忙 là phó từ, đứng sau chủ ngữ 他, trước động từ 跑: 他急忙跑过去看.'}
   ]}
];
