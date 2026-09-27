// ══════════════════════════════════════════
// DATA — HSK6 Bài 1: 孩子给我们的启示 (Điều con trẻ dạy chúng ta)
// 第一单元 生活点滴 · Nguồn: HSK标准教程6上 (tr. 14–23)
// 课文 698 chữ · 40 từ mới (* 老公, 任 là từ ngoài đề cương)
// Ôn xoáy ốc: ví dụ và bài tập lồng từ + ngữ pháp HSK 4–5
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'启示',py:'qǐshì',pos:'Danh từ',vn:'sự gợi mở, bài học (rút ra)',hv:'khải thị',em:'💡',lesson:1,
   explain:['Điều gợi mở, bài học ta rút ra được từ một sự việc, giúp ta hiểu ra một đạo lý.','Cũng làm động từ: 启示我们…… (gợi cho ta thấy…), nhưng dùng làm danh từ nhiều hơn. Sắc thái văn viết.'],
   usage:'Hay gặp: 给……（带来）启示, 得到启示, 从……中得到启示, 很大的启示.',
   collo:['给我们的启示','得到启示','很大的启示','从中得到启示'],
   ex_zh:'这件小事给了我很大的启示。',ex_py:'Zhè jiàn xiǎo shì gěile wǒ hěn dà de qǐshì.',ex_vn:'Chuyện nhỏ này đã cho tôi một bài học rất lớn.',
   exList:[
     {zh:'这件小事给了我很大的启示。',py:'Zhè jiàn xiǎo shì gěile wǒ hěn dà de qǐshì.',vn:'Chuyện nhỏ này đã cho tôi một bài học rất lớn.'},
     {zh:'从这个故事中，我们可以得到什么启示？',py:'Cóng zhège gùshi zhōng, wǒmen kěyǐ dédào shénme qǐshì?',vn:'Từ câu chuyện này, chúng ta có thể rút ra bài học gì?'},
     {zh:'老师的一句话给了我启示，我终于知道该怎么做了。',py:'Lǎoshī de yí jù huà gěile wǒ qǐshì, wǒ zhōngyú zhīdào gāi zěnme zuò le.',vn:'Một câu nói của thầy đã gợi mở cho tôi, cuối cùng tôi đã biết nên làm thế nào.'}
   ],
   colloFull:[
     {zh:'给我们的启示',py:'gěi wǒmen de qǐshì',vn:'điều gợi mở cho chúng ta'},
     {zh:'得到启示',py:'dédào qǐshì',vn:'rút ra bài học'},
     {zh:'很大的启示',py:'hěn dà de qǐshì',vn:'bài học lớn'},
     {zh:'从中得到启示',py:'cóng zhōng dédào qǐshì',vn:'rút ra bài học từ đó'},
     {zh:'带来启示',py:'dàilái qǐshì',vn:'mang lại sự gợi mở'}
   ],
   patterns:[
     {s:'A 给 B（带来）……的启示',m:'A mang lại cho B bài học / điều gợi mở …'},
     {s:'从……中得到启示',m:'Rút ra bài học từ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu chuyện này tuy ngắn nhưng đã cho tôi một bài học rất lớn.',answer:'这个故事虽然很短，但是给了我很大的启示。',answerPy:'Zhège gùshi suīrán hěn duǎn, dànshì gěile wǒ hěn dà de qǐshì.',
      note:'虽然……但是…… nối hai ý trái chiều; 给 + người + 启示.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Từ thất bại lần này, chúng tôi đã rút ra được nhiều bài học.',answer:'从这次失败中，我们得到了很多启示。',answerPy:'Cóng zhè cì shībài zhōng, wǒmen dédàole hěn duō qǐshì.',
      note:'从……中 + 得到 + 启示 = rút ra bài học từ ….',pair:'从……中'}
   ]},

  {n:2,zh:'老公',py:'lǎogōng',pos:'Danh từ',vn:'chồng (khẩu ngữ)',hv:'lão công',em:'👨',lesson:1,
   explain:['Cách gọi chồng thân mật trong khẩu ngữ (vợ gọi chồng hoặc kể về chồng). Đối lại là 老婆 (vợ — HSK 5 bài 1).','Văn viết, trang trọng dùng 丈夫; giới thiệu với người ngoài lịch sự hơn: 我爱人 / 我先生. Từ ngoài đề cương HSK (*).'],
   usage:'我老公, 她老公, 我和老公. Không dùng trong văn bản trang trọng.',
   collo:['我和老公','我老公','她老公'],
   ex_zh:'我和老公爽快地答应下来。',ex_py:'Wǒ hé lǎogōng shuǎngkuai de dāying xiàlái.',ex_vn:'Tôi và chồng vui vẻ nhận lời ngay.',
   exList:[
     {zh:'我和老公爽快地答应下来。',py:'Wǒ hé lǎogōng shuǎngkuai de dāying xiàlái.',vn:'Tôi và chồng vui vẻ nhận lời ngay.'},
     {zh:'她老公是个医生，工作特别忙。',py:'Tā lǎogōng shì ge yīshēng, gōngzuò tèbié máng.',vn:'Chồng cô ấy là bác sĩ, công việc cực kỳ bận.'},
     {zh:'老公，今天晚上你做饭还是我做饭？',py:'Lǎogōng, jīntiān wǎnshang nǐ zuò fàn háishi wǒ zuò fàn?',vn:'Anh ơi, tối nay anh nấu cơm hay em nấu?'}
   ],
   colloFull:[
     {zh:'我和老公',py:'wǒ hé lǎogōng',vn:'tôi và chồng'},
     {zh:'我老公',py:'wǒ lǎogōng',vn:'chồng tôi'},
     {zh:'她老公',py:'tā lǎogōng',vn:'chồng cô ấy'},
     {zh:'老公和老婆',py:'lǎogōng hé lǎopo',vn:'chồng và vợ'}
   ],
   patterns:[
     {s:'老公 (khẩu ngữ) ↔ 丈夫 (văn viết)',m:'Chọn từ theo hoàn cảnh nói hay viết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chồng tôi không những biết nấu ăn mà còn rất thích làm việc nhà.',answer:'我老公不但会做饭，而且很喜欢做家务。',answerPy:'Wǒ lǎogōng búdàn huì zuò fàn, érqiě hěn xǐhuan zuò jiāwù.',
      note:'不但……而且…… tăng tiến; 家务 là từ HSK 5 (bài 24).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Cô ấy và chồng kết hôn mười năm rồi mà chưa từng cãi nhau.',answer:'她和老公结婚十年了，从来没吵过架。',answerPy:'Tā hé lǎogōng jiéhūn shí nián le, cónglái méi chǎoguo jià.',
      note:'从来没 + V + 过: chưa từng bao giờ; 吵架 là động từ li hợp nên nói 吵过架.',pair:'从来没……过'}
   ]},

  {n:3,zh:'爽快',py:'shuǎngkuai',pos:'Tính từ',vn:'thẳng thắn, dứt khoát, sảng khoái',hv:'sảng khoái',em:'👍',lesson:1,
   explain:['(Tính cách, cách làm việc) thẳng thắn, dứt khoát, không lằng nhằng: được nhờ là nhận lời ngay, có gì nói thẳng.','Cũng có nghĩa (cơ thể, tinh thần) dễ chịu, khoan khoái — nghĩa này ít gặp hơn.'],
   usage:'爽快地答应, 为人爽快, 说话很爽快. Làm trạng ngữ cần 地: 爽快地 + V.',
   collo:['爽快地答应','为人爽快','说话爽快'],
   ex_zh:'我请她帮忙，她想都没想就爽快地答应了。',ex_py:'Wǒ qǐng tā bāngmáng, tā xiǎng dōu méi xiǎng jiù shuǎngkuai de dāying le.',ex_vn:'Tôi nhờ cô ấy giúp, cô ấy chẳng cần nghĩ đã nhận lời ngay.',
   exList:[
     {zh:'我请她帮忙，她想都没想就爽快地答应了。',py:'Wǒ qǐng tā bāngmáng, tā xiǎng dōu méi xiǎng jiù shuǎngkuai de dāying le.',vn:'Tôi nhờ cô ấy giúp, cô ấy chẳng cần nghĩ đã nhận lời ngay.'},
     {zh:'天天的父母想请我们帮忙，我和老公爽快地答应下来。',py:'Tiāntiān de fùmǔ xiǎng qǐng wǒmen bāngmáng, wǒ hé lǎogōng shuǎngkuai de dāying xiàlái.',vn:'Bố mẹ Thiên Thiên muốn nhờ chúng tôi giúp, vợ chồng tôi nhận lời ngay không chút đắn đo.'},
     {zh:'他为人爽快，从来不跟朋友计较。',py:'Tā wéirén shuǎngkuai, cónglái bù gēn péngyou jìjiào.',vn:'Anh ấy tính thẳng thắn, xưa nay không so đo với bạn bè.'}
   ],
   colloFull:[
     {zh:'爽快地答应',py:'shuǎngkuai de dāying',vn:'nhận lời ngay (không đắn đo)'},
     {zh:'为人爽快',py:'wéirén shuǎngkuai',vn:'tính người thẳng thắn'},
     {zh:'说话爽快',py:'shuōhuà shuǎngkuai',vn:'ăn nói thẳng thắn'},
     {zh:'办事爽快',py:'bàn shì shuǎngkuai',vn:'làm việc dứt khoát'}
   ],
   patterns:[
     {s:'爽快地 + 答应 / 同意 / 接受',m:'Nhận lời / đồng ý ngay, không do dự'},
     {s:'为人 + 爽快',m:'Tính cách thẳng thắn, dứt khoát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi vừa mở lời nhờ, cậu ấy đã nhận lời ngay.',answer:'我刚开口请他帮忙，他就爽快地答应了。',answerPy:'Wǒ gāng kāikǒu qǐng tā bāngmáng, tā jiù shuǎngkuai de dāying le.',
      note:'刚……就……: vừa… đã…; 爽快地 làm trạng ngữ, cần 地.',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Không ngờ ông chủ lại đồng ý ngay yêu cầu của chúng tôi.',answer:'没想到老板居然爽快地同意了我们的要求。',answerPy:'Méi xiǎngdào lǎobǎn jūrán shuǎngkuai de tóngyìle wǒmen de yāoqiú.',
      note:'居然 (HSK 5 bài 1) = vậy mà, không ngờ; đặt trước cụm động từ.',pair:'居然'}
   ]},

  {n:4,zh:'巴不得',py:'bābudé',pos:'Động từ',vn:'chỉ mong sao, mong mỏi',hv:'ba bất đắc',em:'🙏',lesson:1,
   explain:['Mong mỏi tha thiết, chỉ mong sao được như thế (迫切盼望). Dùng trong khẩu ngữ. Xem điểm ngữ pháp 1.','Mang tân ngữ là động từ / mệnh đề (巴不得马上回家), hoặc đứng cuối câu kèm 呢 để đáp lại: 我们巴不得呢！'],
   usage:'巴不得 + V / mệnh đề; ……，(我)巴不得呢！ Không nói 很巴不得, không dùng dạng phủ định.',
   collo:['巴不得呢','巴不得马上','巴不得早点儿'],
   ex_zh:'有个孩子和我们的独生女朝夕相处，我们巴不得呢！',ex_py:'Yǒu ge háizi hé wǒmen de dúshēngnǚ zhāoxī xiāngchǔ, wǒmen bābudé ne!',ex_vn:'Có một đứa trẻ ở cùng sớm tối với con gái một của chúng tôi, chúng tôi còn mong chẳng được!',
   exList:[
     {zh:'有个孩子和我们的独生女朝夕相处，我们巴不得呢！',py:'Yǒu ge háizi hé wǒmen de dúshēngnǚ zhāoxī xiāngchǔ, wǒmen bābudé ne!',vn:'Có một đứa trẻ ở cùng sớm tối với con gái một của chúng tôi, chúng tôi còn mong chẳng được!'},
     {zh:'就快到春节了，在外地打工一整年的他巴不得马上回到老家和父母、孩子团聚。',py:'Jiù kuài dào Chūn Jié le, zài wàidì dǎgōng yì zhěng nián de tā bābudé mǎshàng huídào lǎojiā hé fùmǔ, háizi tuánjù.',vn:'Sắp Tết rồi, anh ấy làm thuê ở xa suốt một năm, chỉ mong được về quê ngay để đoàn tụ với bố mẹ, con cái.'},
     {zh:'我巴不得他们能真的和好，从此以后和和睦睦过日子。',py:'Wǒ bābudé tāmen néng zhēn de héhǎo, cóngcǐ yǐhòu héhémùmù guò rìzi.',vn:'Tôi chỉ mong họ thật sự làm lành, từ nay về sau sống hoà thuận với nhau.'}
   ],
   colloFull:[
     {zh:'巴不得呢',py:'bābudé ne',vn:'mong còn chẳng được'},
     {zh:'巴不得马上',py:'bābudé mǎshàng',vn:'chỉ mong ngay lập tức'},
     {zh:'巴不得早点儿',py:'bābudé zǎo diǎnr',vn:'chỉ mong sớm sớm'},
     {zh:'巴不得天天',py:'bābudé tiāntiān',vn:'chỉ mong ngày nào cũng'}
   ],
   patterns:[
     {s:'巴不得 + V / mệnh đề',m:'Chỉ mong sao được làm gì'},
     {s:'……，巴不得呢！',m:'Mong còn chẳng được (đáp lại một đề nghị mình rất thích)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghỉ hè đến rồi, bọn trẻ chỉ mong ngày nào cũng được ra biển chơi.',answer:'暑假到了，孩子们巴不得天天去海边玩儿。',answerPy:'Shǔjià dào le, háizimen bābudé tiāntiān qù hǎibiān wánr.',
      note:'巴不得 + động từ; không nói 很巴不得. 了 cuối vế đầu báo tình huống mới.',pair:'……了 (tình huống mới)'},
     {promptLang:'vi',prompt:'Cậu muốn đi cùng tớ à? Tớ mong còn chẳng được ấy chứ!',answer:'你想跟我一起去？我巴不得呢！',answerPy:'Nǐ xiǎng gēn wǒ yìqǐ qù? Wǒ bābudé ne!',
      note:'巴不得呢 đứng cuối câu để đáp lại: rất sẵn lòng.',pair:'跟……一起'}
   ]},

  {n:5,zh:'嚷',py:'rǎng',pos:'Động từ',vn:'la hét, kêu gào; đòi ầm lên',hv:'nhượng',em:'📢',lesson:1,
   explain:['Kêu to, la lớn (大声喊叫).','Khẩu ngữ: nói ầm lên, đòi bằng được (嚷着要……), hoặc cãi cọ ầm ĩ.'],
   usage:'嚷着要……, 大声嚷, 别嚷了. So với 喊 (HSK 5 bài 1: gọi to) thì 嚷 có sắc thái ồn ào, ầm ĩ.',
   collo:['嚷着要','大声嚷','别嚷了'],
   ex_zh:'林林嚷着要用爸爸最拿手的美味佳肴欢迎天天。',ex_py:'Línlín rǎngzhe yào yòng bàba zuì náshǒu de měiwèi jiāyáo huānyíng Tiāntiān.',ex_vn:'Lâm Lâm đòi ầm lên phải dùng món ngon sở trường nhất của bố để đón Thiên Thiên.',
   exList:[
     {zh:'林林嚷着要用爸爸最拿手的美味佳肴欢迎天天。',py:'Línlín rǎngzhe yào yòng bàba zuì náshǒu de měiwèi jiāyáo huānyíng Tiāntiān.',vn:'Lâm Lâm đòi ầm lên phải dùng món ngon sở trường nhất của bố để đón Thiên Thiên.'},
     {zh:'别嚷了，孩子刚睡着。',py:'Bié rǎng le, háizi gāng shuìzháo.',vn:'Đừng la nữa, con vừa mới ngủ.'},
     {zh:'弟弟一进门就嚷着要吃冰激凌。',py:'Dìdi yí jìn mén jiù rǎngzhe yào chī bīngjīlíng.',vn:'Em trai vừa bước vào nhà đã đòi ăn kem ầm ĩ.'}
   ],
   colloFull:[
     {zh:'嚷着要',py:'rǎngzhe yào',vn:'đòi ầm lên'},
     {zh:'大声嚷',py:'dàshēng rǎng',vn:'la to'},
     {zh:'别嚷了',py:'bié rǎng le',vn:'đừng la nữa'},
     {zh:'又哭又嚷',py:'yòu kū yòu rǎng',vn:'vừa khóc vừa la'}
   ],
   patterns:[
     {s:'嚷着要 + V',m:'Đòi ầm lên (phải làm gì)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa tan học, bọn trẻ đã đòi ầm lên đòi đi công viên.',answer:'一放学，孩子们就嚷着要去公园。',answerPy:'Yí fàngxué, háizimen jiù rǎngzhe yào qù gōngyuán.',
      note:'一……就……: vừa… là…; 嚷着要 + V.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Có chuyện gì thì nói từ từ, đừng la hét nữa.',answer:'有什么事慢慢说，别嚷了。',answerPy:'Yǒu shénme shì mànmàn shuō, bié rǎng le.',
      note:'别……了: khuyên dừng việc đang làm.',pair:'别……了'}
   ]},

  {n:6,zh:'拿手',py:'náshǒu',pos:'Tính từ',vn:'sở trường, giỏi, thành thạo',hv:'nã thủ',em:'👨‍🍳',lesson:1,
   explain:['(Làm việc gì) rất giỏi, thành thạo — là "nghề", là sở trường của mình.','Hay đi thành cụm: 拿手菜 (món ruột), 拿手好戏 (tiết mục / ngón sở trường).'],
   usage:'最拿手的……, 拿手菜, (做)……很拿手. Làm định ngữ hoặc vị ngữ.',
   collo:['拿手菜','最拿手的','拿手好戏'],
   ex_zh:'西红柿炒鸡蛋是他的拿手菜。',ex_py:'Xīhóngshì chǎo jīdàn shì tā de náshǒu cài.',ex_vn:'Trứng xào cà chua là món ruột của anh ấy.',
   exList:[
     {zh:'西红柿炒鸡蛋是他的拿手菜。',py:'Xīhóngshì chǎo jīdàn shì tā de náshǒu cài.',vn:'Trứng xào cà chua là món ruột của anh ấy.'},
     {zh:'林林嚷着要用爸爸最拿手的美味佳肴欢迎天天来我家。',py:'Línlín rǎngzhe yào yòng bàba zuì náshǒu de měiwèi jiāyáo huānyíng Tiāntiān lái wǒ jiā.',vn:'Lâm Lâm đòi phải dùng món ngon sở trường nhất của bố để đón Thiên Thiên đến nhà.'},
     {zh:'唱歌是她的拿手好戏，每次联欢会都少不了她。',py:'Chàng gē shì tā de náshǒu hǎoxì, měi cì liánhuānhuì dōu shǎo bu liǎo tā.',vn:'Ca hát là tiết mục sở trường của cô ấy, buổi liên hoan nào cũng không thể thiếu cô ấy.'}
   ],
   colloFull:[
     {zh:'拿手菜',py:'náshǒu cài',vn:'món ruột'},
     {zh:'最拿手的',py:'zuì náshǒu de',vn:'sở trường nhất'},
     {zh:'拿手好戏',py:'náshǒu hǎoxì',vn:'tiết mục / ngón sở trường'},
     {zh:'很拿手',py:'hěn náshǒu',vn:'rất thạo'}
   ],
   patterns:[
     {s:'……是 + ai + 的拿手菜 / 拿手好戏',m:'… là món ruột / ngón sở trường của ai'},
     {s:'(做)…… + 很拿手',m:'Rất thạo việc gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món sở trường nhất của mẹ tôi là gói sủi cảo, ai ăn cũng khen.',answer:'我妈妈最拿手的是包饺子，谁吃了都夸。',answerPy:'Wǒ māma zuì náshǒu de shì bāo jiǎozi, shéi chīle dōu kuā.',
      note:'谁……都……: ai cũng…; 夸 (HSK 5 bài 19) = khen.',pair:'谁……都……'},
     {promptLang:'vi',prompt:'Nói đến giải toán thì cậu ấy thạo nhất.',answer:'说到做数学题，他最拿手了。',answerPy:'Shuōdào zuò shùxué tí, tā zuì náshǒu le.',
      note:'说到……: nói đến…; 最……了 nhấn mạnh mức cao nhất.',pair:'最……了'}
   ]},

  {n:7,zh:'佳肴',py:'jiāyáo',pos:'Danh từ',vn:'món ngon',hv:'giai hào',em:'🍲',lesson:1,
   explain:['Món ăn ngon (văn viết). 佳 = tốt, đẹp; 肴 = món ăn có thịt cá.','Hay đi thành cụm 美味佳肴 (món ngon vật lạ).'],
   usage:'美味佳肴, 一桌佳肴, 各种佳肴. Khẩu ngữ thường nói 好吃的菜.',
   collo:['美味佳肴','一桌佳肴','各种佳肴'],
   ex_zh:'爸爸做了一桌美味佳肴。',ex_py:'Bàba zuòle yì zhuō měiwèi jiāyáo.',ex_vn:'Bố nấu cả một bàn món ngon.',
   exList:[
     {zh:'爸爸做了一桌美味佳肴。',py:'Bàba zuòle yì zhuō měiwèi jiāyáo.',vn:'Bố nấu cả một bàn món ngon.'},
     {zh:'林林要用爸爸最拿手的美味佳肴欢迎天天。',py:'Línlín yào yòng bàba zuì náshǒu de měiwèi jiāyáo huānyíng Tiāntiān.',vn:'Lâm Lâm muốn dùng món ngon sở trường nhất của bố để chào đón Thiên Thiên.'},
     {zh:'春节的时候，桌子上摆满了各种佳肴。',py:'Chūn Jié de shíhou, zhuōzi shang bǎimǎnle gè zhǒng jiāyáo.',vn:'Dịp Tết, trên bàn bày đầy đủ các món ngon.'}
   ],
   colloFull:[
     {zh:'美味佳肴',py:'měiwèi jiāyáo',vn:'món ngon vật lạ'},
     {zh:'一桌佳肴',py:'yì zhuō jiāyáo',vn:'một bàn món ngon'},
     {zh:'各种佳肴',py:'gè zhǒng jiāyáo',vn:'đủ các món ngon'},
     {zh:'享受佳肴',py:'xiǎngshòu jiāyáo',vn:'thưởng thức món ngon'}
   ],
   patterns:[
     {s:'用 + 美味佳肴 + 招待 / 欢迎 + ai',m:'Dùng món ngon để đãi / đón ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để tiếp đãi khách, mẹ đã chuẩn bị cả một bàn món ngon.',answer:'为了招待客人，妈妈准备了一桌美味佳肴。',answerPy:'Wèile zhāodài kèrén, māma zhǔnbèile yì zhuō měiwèi jiāyáo.',
      note:'为了……: để…, đặt đầu câu; 招待 (HSK 5 bài 9) = tiếp đãi.',pair:'为了……'},
     {promptLang:'vi',prompt:'Món ngon dù nhiều đến đâu cũng không bằng cơm nhà.',answer:'再多的美味佳肴也比不上家里的饭菜。',answerPy:'Zài duō de měiwèi jiāyáo yě bǐ bu shàng jiā li de fàncài.',
      note:'再……也……: dù… đến đâu cũng…; 比不上 = không bằng.',pair:'再……也……'}
   ]},

  {n:8,zh:'异常',py:'yìcháng',pos:'Phó từ',vn:'đặc biệt, cực kỳ; (tính từ) khác thường',hv:'dị thường',em:'⚡',lesson:1,
   explain:['Phó từ: cực kỳ, hết sức (= 非常, 特别), mang sắc thái văn viết: 异常兴奋, 异常勤劳.','Tính từ: khác thường, bất thường (不同于平常): 情况异常, 没有什么异常.'],
   usage:'异常 + tính từ (异常兴奋, 异常省心); 异常的变化; 没有什么异常. Bẫy: trong bài 异常 là "cực kỳ", không phải "bất thường".',
   collo:['异常勤劳','异常兴奋','情况异常','异常省心'],
   ex_zh:'天天还没来，林林就变得异常勤劳。',ex_py:'Tiāntiān hái méi lái, Línlín jiù biànde yìcháng qínláo.',ex_vn:'Thiên Thiên còn chưa đến, Lâm Lâm đã trở nên chăm chỉ lạ thường.',
   exList:[
     {zh:'天天还没来，林林就变得异常勤劳。',py:'Tiāntiān hái méi lái, Línlín jiù biànde yìcháng qínláo.',vn:'Thiên Thiên còn chưa đến, Lâm Lâm đã trở nên chăm chỉ lạ thường.'},
     {zh:'天天的到来，使我和老公的日子过得异常省心。',py:'Tiāntiān de dàolái, shǐ wǒ hé lǎogōng de rìzi guò de yìcháng shěngxīn.',vn:'Thiên Thiên đến ở khiến những ngày của vợ chồng tôi trôi qua cực kỳ nhàn nhã, đỡ lo.'},
     {zh:'医生说他的检查结果没有什么异常。',py:'Yīshēng shuō tā de jiǎnchá jiéguǒ méiyǒu shénme yìcháng.',vn:'Bác sĩ nói kết quả kiểm tra của anh ấy không có gì bất thường.'}
   ],
   colloFull:[
     {zh:'异常勤劳',py:'yìcháng qínláo',vn:'chăm chỉ lạ thường'},
     {zh:'异常兴奋',py:'yìcháng xīngfèn',vn:'cực kỳ phấn khởi'},
     {zh:'情况异常',py:'qíngkuàng yìcháng',vn:'tình hình bất thường'},
     {zh:'异常省心',py:'yìcháng shěngxīn',vn:'cực kỳ nhàn nhã, đỡ lo'},
     {zh:'天气异常',py:'tiānqì yìcháng',vn:'thời tiết bất thường'}
   ],
   patterns:[
     {s:'异常 + tính từ',m:'Cực kỳ … (văn viết, = 非常)'},
     {s:'没有什么异常 / 发现异常',m:'(Không) có gì bất thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe tin mình đỗ đại học, cậu ấy phấn khởi lạ thường, cả đêm không ngủ được.',answer:'听到自己考上大学的消息，他异常兴奋，一晚上都没睡着。',answerPy:'Tīngdào zìjǐ kǎoshàng dàxué de xiāoxi, tā yìcháng xīngfèn, yì wǎnshang dōu méi shuìzháo.',
      note:'异常 đứng trước tính từ = 非常 (văn viết); 一……都没……: cả… cũng không.',pair:'一……都没……'},
     {promptLang:'vi',prompt:'Nếu phát hiện có gì bất thường thì phải báo ngay cho giáo viên.',answer:'如果发现什么异常，就要马上告诉老师。',answerPy:'Rúguǒ fāxiàn shénme yìcháng, jiù yào mǎshàng gàosu lǎoshī.',
      note:'Ở đây 异常 dùng như danh từ: 发现异常; 如果……就…….',pair:'如果……就……'}
   ]},

  {n:9,zh:'勤劳',py:'qínláo',pos:'Tính từ',vn:'siêng năng, cần cù',hv:'cần lao',em:'🧹',lesson:1,
   explain:['Chịu khó làm việc, không sợ vất vả (努力劳动，不怕辛苦).','Thường dùng để khen: 勤劳的人民, 勤劳善良. Khác 勤奋 (chăm chỉ học hành, làm việc trí óc).'],
   usage:'勤劳的双手, 勤劳善良, 变得勤劳.',
   collo:['勤劳的人','勤劳善良','变得勤劳'],
   ex_zh:'我奶奶是个勤劳善良的人。',ex_py:'Wǒ nǎinai shì ge qínláo shànliáng de rén.',ex_vn:'Bà tôi là người cần cù, hiền lành.',
   exList:[
     {zh:'我奶奶是个勤劳善良的人。',py:'Wǒ nǎinai shì ge qínláo shànliáng de rén.',vn:'Bà tôi là người cần cù, hiền lành.'},
     {zh:'天天还没来，林林就变得异常勤劳，将屋子收拾得干干净净。',py:'Tiāntiān hái méi lái, Línlín jiù biànde yìcháng qínláo, jiāng wūzi shōushi de gāngānjìngjìng.',vn:'Thiên Thiên còn chưa đến, Lâm Lâm đã trở nên chăm chỉ lạ thường, dọn nhà sạch bong.'},
     {zh:'只要勤劳，日子就会越过越好。',py:'Zhǐyào qínláo, rìzi jiù huì yuè guò yuè hǎo.',vn:'Chỉ cần chịu khó thì cuộc sống sẽ ngày càng khá lên.'}
   ],
   colloFull:[
     {zh:'勤劳的人',py:'qínláo de rén',vn:'người cần cù'},
     {zh:'勤劳善良',py:'qínláo shànliáng',vn:'cần cù, hiền lành'},
     {zh:'变得勤劳',py:'biànde qínláo',vn:'trở nên siêng năng'},
     {zh:'勤劳的双手',py:'qínláo de shuāngshǒu',vn:'đôi bàn tay cần cù'},
     {zh:'勤劳勇敢',py:'qínláo yǒnggǎn',vn:'cần cù, dũng cảm'}
   ],
   patterns:[
     {s:'变得 + 勤劳',m:'Trở nên siêng năng'},
     {s:'用勤劳的双手 + V',m:'Bằng đôi tay cần cù mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố mẹ tôi dùng đôi bàn tay cần cù nuôi lớn ba chị em tôi.',answer:'我父母用勤劳的双手把我们姐弟三个养大了。',answerPy:'Wǒ fùmǔ yòng qínláo de shuāngshǒu bǎ wǒmen jiědì sān ge yǎngdà le.',
      note:'Câu 把: 把 + tân ngữ + 养大了.',pair:'把 (câu chữ 把)'},
     {promptLang:'vi',prompt:'Từ khi em gái chào đời, anh trai bỗng trở nên siêng năng hẳn.',answer:'自从妹妹出生以后，哥哥突然变得勤劳起来了。',answerPy:'Zìcóng mèimei chūshēng yǐhòu, gēge tūrán biànde qínláo qǐlái le.',
      note:'自从……以后 (HSK 5 bài 22); tính từ + 起来: bắt đầu trở nên.',pair:'自从……以后'}
   ]},

  {n:10,zh:'绅士',py:'shēnshì',pos:'Danh từ',vn:'người lịch thiệp, quý ông',hv:'thân sĩ',em:'🎩',lesson:1,
   explain:['Quý ông — người đàn ông có giáo dục, cư xử lịch sự, biết nhường nhịn phụ nữ (gentleman).','Cũng dùng như tính từ: 很绅士 (rất ga-lăng); 绅士风度 (phong thái quý ông). Trong bài dùng hài hước: bé gái mà "phong thái quý ông".'],
   usage:'绅士风度, 很绅士, 像个绅士.',
   collo:['绅士风度','很绅士','像个绅士'],
   ex_zh:'我家林林虽是女孩，却也绅士风度十足。',ex_py:'Wǒ jiā Línlín suī shì nǚhái, què yě shēnshì fēngdù shízú.',ex_vn:'Lâm Lâm nhà tôi tuy là con gái nhưng cũng rất có phong thái quý ông.',
   exList:[
     {zh:'我家林林虽是女孩，却也绅士风度十足。',py:'Wǒ jiā Línlín suī shì nǚhái, què yě shēnshì fēngdù shízú.',vn:'Lâm Lâm nhà tôi tuy là con gái nhưng cũng rất có phong thái quý ông.'},
     {zh:'他总是让女士先走，特别绅士。',py:'Tā zǒngshì ràng nǚshì xiān zǒu, tèbié shēnshì.',vn:'Anh ấy lúc nào cũng để phụ nữ đi trước, rất ga-lăng.'},
     {zh:'穿上西装，弟弟看起来像个小绅士。',py:'Chuānshang xīzhuāng, dìdi kàn qǐlái xiàng ge xiǎo shēnshì.',vn:'Mặc com-lê vào, em trai trông như một quý ông nhỏ.'}
   ],
   colloFull:[
     {zh:'绅士风度',py:'shēnshì fēngdù',vn:'phong thái quý ông'},
     {zh:'很绅士',py:'hěn shēnshì',vn:'rất lịch thiệp, ga-lăng'},
     {zh:'像个绅士',py:'xiàng ge shēnshì',vn:'như một quý ông'},
     {zh:'真正的绅士',py:'zhēnzhèng de shēnshì',vn:'quý ông thực thụ'}
   ],
   patterns:[
     {s:'很 / 特别 + 绅士',m:'Dùng như tính từ: ga-lăng, lịch thiệp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy tuổi còn nhỏ nhưng cư xử rất lịch thiệp.',answer:'他虽然年纪小，但是做事很绅士。',answerPy:'Tā suīrán niánjì xiǎo, dànshì zuò shì hěn shēnshì.',
      note:'绅士 dùng như tính từ sau 很; 年纪 (HSK 5 bài 20).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Một quý ông thực thụ sẽ không bao giờ chê cười người khác.',answer:'一个真正的绅士是绝对不会嘲笑别人的。',answerPy:'Yí ge zhēnzhèng de shēnshì shì juéduì bú huì cháoxiào biérén de.',
      note:'是……的 nhấn mạnh thái độ khẳng định; 绝对 (HSK 5 bài 15).',pair:'是……的 (khẳng định)'}
   ]},

  {n:11,zh:'风度',py:'fēngdù',pos:'Danh từ',vn:'phong độ, phong thái',hv:'phong độ',em:'🕴️',lesson:1,
   explain:['Dáng vẻ, cử chỉ, thái độ đẹp đẽ, đáng mến của một người (美好的举止姿态).','Lưu ý: tiếng Việt "phong độ" còn chỉ thể lực, phong độ thi đấu — nghĩa này tiếng Trung là 状态.'],
   usage:'有风度, 风度十足, 绅士风度, 失去风度.',
   collo:['有风度','风度十足','绅士风度'],
   ex_zh:'不管输赢，他都很有风度。',ex_py:'Bùguǎn shū yíng, tā dōu hěn yǒu fēngdù.',ex_vn:'Dù thắng hay thua, anh ấy đều rất có phong thái.',
   exList:[
     {zh:'不管输赢，他都很有风度。',py:'Bùguǎn shū yíng, tā dōu hěn yǒu fēngdù.',vn:'Dù thắng hay thua, anh ấy đều rất có phong thái.'},
     {zh:'我家林林虽是女孩，却也绅士风度十足。',py:'Wǒ jiā Línlín suī shì nǚhái, què yě shēnshì fēngdù shízú.',vn:'Lâm Lâm nhà tôi tuy là con gái nhưng cũng rất có phong thái quý ông.'},
     {zh:'不管是挤汽车，还是上电梯，老公都坚持女士优先，风度十足。',py:'Bùguǎn shì jǐ qìchē, háishi shàng diàntī, lǎogōng dōu jiānchí nǚshì yōuxiān, fēngdù shízú.',vn:'Dù chen xe buýt hay lên thang máy, chồng tôi đều nhất định để phụ nữ đi trước, rất có phong độ.'}
   ],
   colloFull:[
     {zh:'有风度',py:'yǒu fēngdù',vn:'có phong thái'},
     {zh:'风度十足',py:'fēngdù shízú',vn:'đầy phong thái'},
     {zh:'绅士风度',py:'shēnshì fēngdù',vn:'phong thái quý ông'},
     {zh:'失去风度',py:'shīqù fēngdù',vn:'mất lịch sự, mất phong thái'}
   ],
   patterns:[
     {s:'很有风度 / 风度十足',m:'Rất có phong thái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù thua trận nhưng họ vẫn bắt tay đối thủ, rất có phong độ.',answer:'虽然输了比赛，他们还是跟对手握了手，很有风度。',answerPy:'Suīrán shūle bǐsài, tāmen háishi gēn duìshǒu wòle shǒu, hěn yǒu fēngdù.',
      note:'对手 (HSK 5 bài 29); 握手 là li hợp: 握了手.',pair:'虽然……还是……'},
     {promptLang:'vi',prompt:'Gặp chuyện gì cũng không nên nổi nóng, như thế mới có phong thái.',answer:'遇到什么事都不应该发脾气，这样才有风度。',answerPy:'Yùdào shénme shì dōu bù yīnggāi fā píqi, zhèyàng cái yǒu fēngdù.',
      note:'什么……都……: bất cứ… đều…; 这样才……: như thế mới….',pair:'什么……都……'}
   ]},

  {n:12,zh:'十足',py:'shízú',pos:'Tính từ',vn:'tràn đầy, đầy đủ, hết mức',hv:'thập túc',em:'💯',lesson:1,
   explain:['Đầy đủ, dồi dào, hết mức (十分充足). Thường đứng SAU danh từ làm vị ngữ: 信心十足, 风度十足, 干劲十足.','Cũng làm định ngữ: 十足的把握 (hoàn toàn chắc chắn).'],
   usage:'Danh từ + 十足; 十足的 + danh từ. Không nói 很十足.',
   collo:['风度十足','信心十足','十足的把握'],
   ex_zh:'比赛前，队员们个个信心十足。',ex_py:'Bǐsài qián, duìyuánmen gègè xìnxīn shízú.',ex_vn:'Trước trận đấu, các cầu thủ ai nấy đều tràn đầy tự tin.',
   exList:[
     {zh:'比赛前，队员们个个信心十足。',py:'Bǐsài qián, duìyuánmen gègè xìnxīn shízú.',vn:'Trước trận đấu, các cầu thủ ai nấy đều tràn đầy tự tin.'},
     {zh:'我家林林虽是女孩，却也绅士风度十足。',py:'Wǒ jiā Línlín suī shì nǚhái, què yě shēnshì fēngdù shízú.',vn:'Lâm Lâm nhà tôi tuy là con gái nhưng cũng rất có phong thái quý ông.'},
     {zh:'这次考试我有十足的把握。',py:'Zhè cì kǎoshì wǒ yǒu shízú de bǎwò.',vn:'Kỳ thi này tôi hoàn toàn nắm chắc.'}
   ],
   colloFull:[
     {zh:'风度十足',py:'fēngdù shízú',vn:'đầy phong thái'},
     {zh:'信心十足',py:'xìnxīn shízú',vn:'tràn đầy tự tin'},
     {zh:'十足的把握',py:'shízú de bǎwò',vn:'nắm chắc hoàn toàn'},
     {zh:'干劲十足',py:'gànjìn shízú',vn:'hăng hái tràn trề'},
     {zh:'精神十足',py:'jīngshen shízú',vn:'tinh thần phấn chấn'}
   ],
   patterns:[
     {s:'Danh từ + 十足',m:'… tràn đầy (信心十足, 风度十足)'},
     {s:'有十足的把握',m:'Hoàn toàn nắm chắc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thời gian chuẩn bị không dài nhưng cậu ấy vẫn tràn đầy tự tin.',answer:'虽然准备的时间不长，但是他仍然信心十足。',answerPy:'Suīrán zhǔnbèi de shíjiān bù cháng, dànshì tā réngrán xìnxīn shízú.',
      note:'Danh từ + 十足; không nói 很十足. 仍然 = vẫn.',pair:'虽然……但是……仍然'},
     {promptLang:'vi',prompt:'Nếu không hoàn toàn chắc chắn thì đừng hứa với người ta.',answer:'如果没有十足的把握，就别答应人家。',answerPy:'Rúguǒ méiyǒu shízú de bǎwò, jiù bié dāying rénjia.',
      note:'十足的 + danh từ làm định ngữ; 人家 = người ta.',pair:'如果……就……'}
   ]},

  {n:13,zh:'督促',py:'dūcù',pos:'Động từ',vn:'đốc thúc, thúc giục',hv:'đốc xúc',em:'⏰',lesson:1,
   explain:['Giám sát và thúc giục (ai) làm việc gì cho xong (监督催促).','Thường là người trên với người dưới: 父母督促孩子, 老师督促学生. So với 催 (HSK 5 bài 1): 催 chỉ giục cho nhanh, 督促 có cả theo dõi, giám sát.'],
   usage:'督促 + ai + V; 在……的督促下; 不用督促.',
   collo:['督促孩子','不用督促','在……的督促下'],
   ex_zh:'两个孩子做作业不用督促。',ex_py:'Liǎng ge háizi zuò zuòyè búyòng dūcù.',ex_vn:'Hai đứa trẻ làm bài tập không cần phải giục.',
   exList:[
     {zh:'两个孩子做作业不用督促。',py:'Liǎng ge háizi zuò zuòyè búyòng dūcù.',vn:'Hai đứa trẻ làm bài tập không cần phải giục.'},
     {zh:'我的工作就是督促食品厂加强卫生管理。',py:'Wǒ de gōngzuò jiù shì dūcù shípǐnchǎng jiāqiáng wèishēng guǎnlǐ.',vn:'Công việc của tôi chính là đốc thúc các nhà máy thực phẩm tăng cường quản lý vệ sinh.'},
     {zh:'在妈妈的督促下，我每天坚持跑步半个小时。',py:'Zài māma de dūcù xià, wǒ měi tiān jiānchí pǎobù bàn ge xiǎoshí.',vn:'Nhờ mẹ đốc thúc, ngày nào tôi cũng kiên trì chạy bộ nửa tiếng.'}
   ],
   colloFull:[
     {zh:'督促孩子',py:'dūcù háizi',vn:'đốc thúc con cái'},
     {zh:'不用督促',py:'búyòng dūcù',vn:'không cần giục'},
     {zh:'在……的督促下',py:'zài……de dūcù xià',vn:'nhờ sự đốc thúc của …'},
     {zh:'督促检查',py:'dūcù jiǎnchá',vn:'đốc thúc, kiểm tra'}
   ],
   patterns:[
     {s:'督促 + ai + V',m:'Đốc thúc ai làm gì'},
     {s:'在 + ai + 的督促下，……',m:'Nhờ ai đốc thúc mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không có bố mẹ đốc thúc, em trai tôi chắc chắn sẽ không làm bài tập.',answer:'要是没有父母的督促，我弟弟肯定不会做作业。',answerPy:'Yàoshi méiyǒu fùmǔ de dūcù, wǒ dìdi kěndìng bú huì zuò zuòyè.',
      note:'要是……: nếu…; 督促 dùng như danh từ: 父母的督促.',pair:'要是……'},
     {promptLang:'vi',prompt:'Nhờ có thầy đốc thúc, điểm tiếng Trung của cả lớp tiến bộ rất nhiều.',answer:'在老师的督促下，全班的汉语成绩进步了很多。',answerPy:'Zài lǎoshī de dūcù xià, quán bān de Hànyǔ chéngjì jìnbùle hěn duō.',
      note:'在……下: trong điều kiện…; 进步 (HSK 5 bài 24).',pair:'在……下'}
   ]},

  {n:14,zh:'打架',py:'dǎ jià',pos:'Động từ',vn:'đánh nhau',hv:'đả giá',em:'🥊',lesson:1,
   explain:['Đánh nhau, ẩu đả (互相争吵、殴斗).','Là động từ LI HỢP: 打了一架, 打过架, 跟……打架; không mang tân ngữ phía sau (không nói 打架他). Bẫy Hán–Việt: 打架 ≠ "đánh giá" (评价).'],
   usage:'跟 / 和 + ai + 打架; 打了一架; 不打架.',
   collo:['不打架','跟……打架','打了一架'],
   ex_zh:'她们不打架，不闹别扭，关系别提多融洽了。',ex_py:'Tāmen bù dǎjià, bú nào bièniu, guānxi biétí duō róngqià le.',ex_vn:'Hai đứa không đánh nhau, không giận dỗi, quan hệ hoà hợp khỏi phải nói.',
   exList:[
     {zh:'她们不打架，不闹别扭，关系别提多融洽了。',py:'Tāmen bù dǎjià, bú nào bièniu, guānxi biétí duō róngqià le.',vn:'Hai đứa không đánh nhau, không giận dỗi, quan hệ hoà hợp khỏi phải nói.'},
     {zh:'小时候我常跟哥哥打架，现在我们却是最好的朋友。',py:'Xiǎoshíhou wǒ cháng gēn gēge dǎjià, xiànzài wǒmen què shì zuì hǎo de péngyou.',vn:'Hồi nhỏ tôi hay đánh nhau với anh trai, bây giờ chúng tôi lại là bạn thân nhất.'},
     {zh:'两个人为了一点儿小事打了一架。',py:'Liǎng ge rén wèile yìdiǎnr xiǎo shì dǎle yí jià.',vn:'Hai người đánh nhau một trận vì một chuyện cỏn con.'}
   ],
   colloFull:[
     {zh:'不打架',py:'bù dǎjià',vn:'không đánh nhau'},
     {zh:'跟……打架',py:'gēn……dǎjià',vn:'đánh nhau với …'},
     {zh:'打了一架',py:'dǎle yí jià',vn:'đánh nhau một trận'},
     {zh:'打起架来',py:'dǎ qǐ jià lái',vn:'lao vào đánh nhau'}
   ],
   patterns:[
     {s:'跟 + ai + 打架',m:'Đánh nhau với ai (li hợp, không có tân ngữ phía sau)'},
     {s:'打了一架 / 打过架',m:'Chèn 了 / 过 / số lượng vào giữa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh em thì phải thương nhau, sao có thể vì một món đồ chơi mà đánh nhau?',answer:'兄弟之间应该互相爱护，怎么能为了一个玩具打架呢？',answerPy:'Xiōngdì zhī jiān yīnggāi hùxiāng àihù, zěnme néng wèile yí ge wánjù dǎjià ne?',
      note:'Câu hỏi tu từ 怎么能……呢？ = không thể…; 爱护 (HSK 5 bài 1).',pair:'怎么能……呢？'},
     {promptLang:'vi',prompt:'Cậu ấy chưa từng đánh nhau với ai.',answer:'他从来没跟别人打过架。',answerPy:'Tā cónglái méi gēn biérén dǎguo jià.',
      note:'Li hợp: 打过架, không nói 打架过.',pair:'从来没……过'}
   ]},

  {n:15,zh:'别扭',py:'bièniu',pos:'Tính từ',vn:'có xích mích, không hợp; khó chịu, gượng',hv:'biệt nữu',em:'😤',lesson:1,
   explain:['(Quan hệ) không hợp nhau, có xích mích: 闹别扭 = giận dỗi, xích mích nhau.','Không thuận, khó chịu, gượng gạo: 心里别扭; 这句话读起来很别扭 (câu này đọc thấy trúc trắc).'],
   usage:'闹别扭, 跟……闹别扭, 觉得别扭, 心里别扭.',
   collo:['闹别扭','心里别扭','读起来别扭'],
   ex_zh:'他们俩又闹别扭了，谁也不理谁。',ex_py:'Tāmen liǎ yòu nào bièniu le, shéi yě bù lǐ shéi.',ex_vn:'Hai người họ lại giận dỗi nhau rồi, chẳng ai thèm nói với ai.',
   exList:[
     {zh:'他们俩又闹别扭了，谁也不理谁。',py:'Tāmen liǎ yòu nào bièniu le, shéi yě bù lǐ shéi.',vn:'Hai người họ lại giận dỗi nhau rồi, chẳng ai thèm nói với ai.'},
     {zh:'她们不打架，不闹别扭，关系别提多融洽了。',py:'Tāmen bù dǎjià, bú nào bièniu, guānxi biétí duō róngqià le.',vn:'Hai đứa không đánh nhau, không giận dỗi, quan hệ hoà hợp khỏi phải nói.'},
     {zh:'这句话读起来有点儿别扭，你再改改吧。',py:'Zhè jù huà dú qǐlái yǒudiǎnr bièniu, nǐ zài gǎigai ba.',vn:'Câu này đọc lên hơi trúc trắc, em sửa lại chút nữa đi.'}
   ],
   colloFull:[
     {zh:'闹别扭',py:'nào bièniu',vn:'giận dỗi, xích mích'},
     {zh:'心里别扭',py:'xīnli bièniu',vn:'trong lòng khó chịu'},
     {zh:'读起来别扭',py:'dú qǐlái bièniu',vn:'đọc lên trúc trắc'},
     {zh:'跟……闹别扭',py:'gēn……nào bièniu',vn:'giận dỗi với …'}
   ],
   patterns:[
     {s:'A 跟 B 闹别扭',m:'A giận dỗi / xích mích với B'},
     {s:'V + 起来 + 别扭',m:'Làm gì thấy gượng, không thuận'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai chúng tôi quan hệ rất tốt, chưa bao giờ giận dỗi nhau.',answer:'我们俩关系很好，从来没闹过别扭。',answerPy:'Wǒmen liǎ guānxi hěn hǎo, cónglái méi nàoguo bièniu.',
      note:'从来没 + V + 过; 过 đặt ngay sau 闹.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Bị người ta chê cười trước mặt mọi người, trong lòng cậu ấy rất khó chịu.',answer:'被人当着大家的面嘲笑，他心里很别扭。',answerPy:'Bèi rén dāngzhe dàjiā de miàn cháoxiào, tā xīnli hěn bièniu.',
      note:'Câu bị động 被 + người + V; 当着……的面 = trước mặt ….',pair:'被 (bị động)'}
   ]},

  {n:16,zh:'融洽',py:'róngqià',pos:'Tính từ',vn:'hoà hợp, hoà thuận, êm ấm',hv:'dung hiệp',em:'🤝',lesson:1,
   explain:['(Quan hệ, không khí) hoà hợp, thân thiện, không có khoảng cách (彼此感情好).','Chủ ngữ thường là 关系, 气氛, hoặc làm bổ ngữ sau 相处得. Xem phần phân biệt 融洽—和睦.'],
   usage:'关系融洽, 气氛融洽, 相处得很融洽. Không mang tân ngữ.',
   collo:['关系融洽','气氛融洽','相处得很融洽'],
   ex_zh:'同事们相处得很融洽，工作起来也特别愉快。',ex_py:'Tóngshìmen xiāngchǔ de hěn róngqià, gōngzuò qǐlái yě tèbié yúkuài.',ex_vn:'Đồng nghiệp sống với nhau rất hoà hợp, làm việc cũng rất vui vẻ.',
   exList:[
     {zh:'同事们相处得很融洽，工作起来也特别愉快。',py:'Tóngshìmen xiāngchǔ de hěn róngqià, gōngzuò qǐlái yě tèbié yúkuài.',vn:'Đồng nghiệp sống với nhau rất hoà hợp, làm việc cũng rất vui vẻ.'},
     {zh:'她们不打架，不闹别扭，关系别提多融洽了。',py:'Tāmen bù dǎjià, bú nào bièniu, guānxi biétí duō róngqià le.',vn:'Hai đứa không đánh nhau, không giận dỗi, quan hệ hoà hợp khỏi phải nói.'},
     {zh:'晚会的气氛非常融洽，大家都舍不得走。',py:'Wǎnhuì de qìfēn fēicháng róngqià, dàjiā dōu shěbude zǒu.',vn:'Không khí buổi liên hoan rất êm ấm, mọi người đều không nỡ về.'}
   ],
   colloFull:[
     {zh:'关系融洽',py:'guānxi róngqià',vn:'quan hệ hoà hợp'},
     {zh:'气氛融洽',py:'qìfēn róngqià',vn:'không khí êm ấm'},
     {zh:'相处得很融洽',py:'xiāngchǔ de hěn róngqià',vn:'sống với nhau rất hoà hợp'},
     {zh:'融洽的家庭',py:'róngqià de jiātíng',vn:'gia đình êm ấm'}
   ],
   patterns:[
     {s:'A 和 B 的关系 + 很融洽',m:'Quan hệ giữa A và B rất hoà hợp'},
     {s:'相处得 + 很融洽',m:'Chung sống rất hoà hợp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi chuyển đến ký túc xá mới, tôi sống với bạn cùng phòng rất hoà hợp.',answer:'自从搬到新宿舍以后，我和室友相处得很融洽。',answerPy:'Zìcóng bāndào xīn sùshè yǐhòu, wǒ hé shìyǒu xiāngchǔ de hěn róngqià.',
      note:'Bổ ngữ trạng thái: 相处得 + 很融洽.',pair:'V + 得 + bổ ngữ trạng thái'},
     {promptLang:'vi',prompt:'Không khí cuộc họp tuy hoà hợp nhưng vấn đề vẫn chưa giải quyết được.',answer:'会议的气氛虽然很融洽，但问题还是没有解决。',answerPy:'Huìyì de qìfēn suīrán hěn róngqià, dàn wèntí háishi méiyǒu jiějué.',
      note:'虽然 có thể đứng sau chủ ngữ; 但 = 但是.',pair:'虽然……但……'}
   ]},

  {n:17,zh:'亲密',py:'qīnmì',pos:'Tính từ',vn:'thân thiết, thân mật',hv:'thân mật',em:'👭',lesson:1,
   explain:['(Quan hệ, tình cảm) gần gũi, khăng khít (感情好，关系密切).','Tiếng Việt "thân mật" hay chỉ thái độ, cử chỉ; 亲密 tiếng Trung chủ yếu chỉ QUAN HỆ rất gần: 亲密的朋友, 亲密无间.'],
   usage:'亲密的朋友, 关系亲密, 这么亲密, 亲密无间.',
   collo:['亲密的朋友','关系亲密','亲密无间'],
   ex_zh:'看到女儿和天天这么亲密，我和老公都有点儿嫉妒了。',ex_py:'Kàndào nǚ\'ér hé Tiāntiān zhème qīnmì, wǒ hé lǎogōng dōu yǒudiǎnr jídù le.',ex_vn:'Thấy con gái và Thiên Thiên thân thiết như thế, vợ chồng tôi đều hơi ghen tị.',
   exList:[
     {zh:'看到女儿和天天这么亲密，我和老公都有点儿嫉妒了。',py:'Kàndào nǚ\'ér hé Tiāntiān zhème qīnmì, wǒ hé lǎogōng dōu yǒudiǎnr jídù le.',vn:'Thấy con gái và Thiên Thiên thân thiết như thế, vợ chồng tôi đều hơi ghen tị.'},
     {zh:'我的疑惑没有了，我们仍然是亲密的朋友。',py:'Wǒ de yíhuò méiyǒu le, wǒmen réngrán shì qīnmì de péngyou.',vn:'Nỗi nghi ngờ của tôi tan biến, chúng tôi vẫn là bạn thân thiết.'},
     {zh:'他们俩从小一起长大，关系亲密无间。',py:'Tāmen liǎ cóngxiǎo yìqǐ zhǎngdà, guānxi qīnmì wújiàn.',vn:'Hai người họ lớn lên cùng nhau từ nhỏ, quan hệ khăng khít không kẽ hở.'}
   ],
   colloFull:[
     {zh:'亲密的朋友',py:'qīnmì de péngyou',vn:'bạn thân thiết'},
     {zh:'关系亲密',py:'guānxi qīnmì',vn:'quan hệ thân thiết'},
     {zh:'亲密无间',py:'qīnmì wújiàn',vn:'khăng khít không kẽ hở'},
     {zh:'亲密合作',py:'qīnmì hézuò',vn:'hợp tác chặt chẽ'}
   ],
   patterns:[
     {s:'A 和 B + 很 / 这么 + 亲密',m:'A và B rất thân thiết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù tốt nghiệp đã mười năm, chúng tôi vẫn là những người bạn thân thiết.',answer:'即使毕业已经十年了，我们也仍然是亲密的朋友。',answerPy:'Jíshǐ bìyè yǐjīng shí nián le, wǒmen yě réngrán shì qīnmì de péngyou.',
      note:'即使……也……: dù… cũng…; 仍然 = vẫn.',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Thấy hai chị em thân thiết như vậy, mẹ rất vui.',answer:'看到姐妹俩这么亲密，妈妈很高兴。',answerPy:'Kàndào jiěmèi liǎ zhème qīnmì, māma hěn gāoxìng.',
      note:'看到 + mệnh đề, vế sau nói cảm xúc.',pair:'看到……，……'}
   ]},

  {n:18,zh:'忽略',py:'hūlüè',pos:'Động từ',vn:'lơ là, bỏ qua, không để ý đến',hv:'hốt lược',em:'🙈',lesson:1,
   explain:['Không chú ý tới, sơ ý bỏ qua (没有注意到，疏忽).','Tân ngữ thường là người, cảm nhận, chi tiết, vấn đề. Khác 忽视 (coi nhẹ): 忽略 thiên về sơ ý không để ý.'],
   usage:'忽略 + N; 被忽略; 不能忽略.',
   collo:['忽略我们','忽略细节','不能忽略'],
   ex_zh:'看到女儿和天天这么亲密，大有忽略我们的趋势。',ex_py:'Kàndào nǚ\'ér hé Tiāntiān zhème qīnmì, dà yǒu hūlüè wǒmen de qūshì.',ex_vn:'Thấy con gái và Thiên Thiên thân thiết như thế, xem chừng nó sắp chẳng để ý gì đến chúng tôi nữa.',
   exList:[
     {zh:'看到女儿和天天这么亲密，大有忽略我们的趋势。',py:'Kàndào nǚ\'ér hé Tiāntiān zhème qīnmì, dà yǒu hūlüè wǒmen de qūshì.',vn:'Thấy con gái và Thiên Thiên thân thiết như thế, xem chừng nó sắp chẳng để ý gì đến chúng tôi nữa.'},
     {zh:'工作再忙，也不能忽略家人的感受。',py:'Gōngzuò zài máng, yě bù néng hūlüè jiārén de gǎnshòu.',vn:'Công việc bận mấy cũng không được lơ là cảm nhận của người nhà.'},
     {zh:'这个细节很容易被忽略。',py:'Zhège xìjié hěn róngyì bèi hūlüè.',vn:'Chi tiết này rất dễ bị bỏ qua.'}
   ],
   colloFull:[
     {zh:'忽略我们',py:'hūlüè wǒmen',vn:'không để ý đến chúng tôi'},
     {zh:'忽略细节',py:'hūlüè xìjié',vn:'bỏ qua chi tiết'},
     {zh:'不能忽略',py:'bù néng hūlüè',vn:'không được bỏ qua'},
     {zh:'被忽略',py:'bèi hūlüè',vn:'bị bỏ qua'},
     {zh:'忽略……的感受',py:'hūlüè……de gǎnshòu',vn:'lơ là cảm nhận của …'}
   ],
   patterns:[
     {s:'忽略 + ai / cái gì',m:'Không để ý đến ai / cái gì'},
     {s:'很容易被忽略',m:'Rất dễ bị bỏ qua'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhiều phụ huynh chỉ quan tâm đến điểm số của con mà lại bỏ qua sức khoẻ của con.',answer:'很多家长只关心孩子的成绩，却忽略了孩子的健康。',answerPy:'Hěn duō jiāzhǎng zhǐ guānxīn háizi de chéngjì, què hūlüèle háizi de jiànkāng.',
      note:'只……却……: chỉ… mà lại…; 却 đứng trước động từ.',pair:'却'},
     {promptLang:'vi',prompt:'Chi tiết dù nhỏ đến đâu cũng không được bỏ qua.',answer:'再小的细节也不能忽略。',answerPy:'Zài xiǎo de xìjié yě bù néng hūlüè.',
      note:'再 + tính từ + 的 + N + 也……: dù… đến đâu cũng….',pair:'再……也……'}
   ]},

  {n:19,zh:'嫉妒',py:'jídù',pos:'Động từ',vn:'ghen tị, đố kỵ',hv:'tật đố',em:'😒',lesson:1,
   explain:['Thấy người khác hơn mình (tài năng, thành tích, được quan tâm…) thì trong lòng khó chịu, ghen ghét.','Nghĩa xấu; trong bài dùng hài hước: bố mẹ "ghen tị" vì con gái mải chơi với bạn.'],
   usage:'嫉妒 + ai; 有点儿嫉妒, 出于嫉妒, 让人嫉妒, 嫉妒心.',
   collo:['嫉妒别人','有点儿嫉妒','出于嫉妒','让人嫉妒'],
   ex_zh:'一定是有人嫉妒我们关系好，故意那么说的。',ex_py:'Yídìng shì yǒu rén jídù wǒmen guānxi hǎo, gùyì nàme shuō de.',ex_vn:'Chắc chắn là có người ghen tị vì chúng mình thân nhau nên cố ý nói vậy.',
   exList:[
     {zh:'一定是有人嫉妒我们关系好，故意那么说的。',py:'Yídìng shì yǒu rén jídù wǒmen guānxi hǎo, gùyì nàme shuō de.',vn:'Chắc chắn là có người ghen tị vì chúng mình thân nhau nên cố ý nói vậy.'},
     {zh:'看到女儿和天天这么亲密，我和老公都有点儿嫉妒了。',py:'Kàndào nǚ\'ér hé Tiāntiān zhème qīnmì, wǒ hé lǎogōng dōu yǒudiǎnr jídù le.',vn:'Thấy con gái và Thiên Thiên thân thiết như thế, vợ chồng tôi đều hơi ghen tị.'},
     {zh:'别人成功了，我们应该祝贺，而不是嫉妒。',py:'Biérén chénggōng le, wǒmen yīnggāi zhùhè, ér bú shì jídù.',vn:'Người khác thành công thì ta nên chúc mừng, chứ không phải ghen tị.'}
   ],
   colloFull:[
     {zh:'嫉妒别人',py:'jídù biérén',vn:'ghen tị với người khác'},
     {zh:'有点儿嫉妒',py:'yǒudiǎnr jídù',vn:'hơi ghen tị'},
     {zh:'出于嫉妒',py:'chūyú jídù',vn:'vì ghen tị'},
     {zh:'让人嫉妒',py:'ràng rén jídù',vn:'khiến người ta ghen tị'},
     {zh:'嫉妒心',py:'jídùxīn',vn:'lòng đố kỵ'}
   ],
   patterns:[
     {s:'嫉妒 + ai（+ 的 N）',m:'Ghen tị với ai / cái gì của ai'},
     {s:'出于嫉妒，……',m:'Vì ghen tị mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ta không phải thật lòng góp ý cho cậu, mà là ghen tị với thành tích của cậu.',answer:'他不是真心给你提意见，而是嫉妒你的成绩。',answerPy:'Tā bú shì zhēnxīn gěi nǐ tí yìjiàn, ér shì jídù nǐ de chéngjì.',
      note:'不是……而是……: không phải… mà là….',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Thành tích của cô ấy tốt đến mức khiến người ta ghen tị.',answer:'她的成绩好得让人嫉妒。',answerPy:'Tā de chéngjì hǎo de ràng rén jídù.',
      note:'Tính từ + 得 + 让人 + V: đến mức khiến người ta….',pair:'……得让人……'}
   ]},

  {n:20,zh:'滔滔不绝',py:'tāotāo bù jué',pos:'Thành ngữ',vn:'thao thao bất tuyệt, nói mãi không dứt',hv:'thao thao bất tuyệt',em:'🗣️',lesson:1,
   explain:['Nói liên tục, nói mãi không ngừng (như dòng nước cuồn cuộn chảy không dứt).','Thường làm trạng ngữ (滔滔不绝地说 / 聊 / 讲) hoặc vị ngữ. Tiếng Việt có sẵn thành ngữ "thao thao bất tuyệt".'],
   usage:'滔滔不绝地 + 说 / 讲 / 聊; 一说起……就滔滔不绝.',
   collo:['滔滔不绝地聊','滔滔不绝地讲','说得滔滔不绝'],
   ex_zh:'两个孩子做完作业，开始滔滔不绝地聊了起来。',ex_py:'Liǎng ge háizi zuòwán zuòyè, kāishǐ tāotāo bù jué de liáole qǐlái.',ex_vn:'Hai đứa làm xong bài tập liền bắt đầu nói chuyện rôm rả không dứt.',
   exList:[
     {zh:'两个孩子做完作业，开始滔滔不绝地聊了起来。',py:'Liǎng ge háizi zuòwán zuòyè, kāishǐ tāotāo bù jué de liáole qǐlái.',vn:'Hai đứa làm xong bài tập liền bắt đầu nói chuyện rôm rả không dứt.'},
     {zh:'一说起足球，他就滔滔不绝，谁也拦不住。',py:'Yì shuōqǐ zúqiú, tā jiù tāotāo bù jué, shéi yě lán bu zhù.',vn:'Hễ nhắc đến bóng đá là anh ấy thao thao bất tuyệt, chẳng ai cản nổi.'},
     {zh:'她不仅爽快，还很健谈，跟谁都能滔滔不绝。',py:'Tā bùjǐn shuǎngkuai, hái hěn jiàntán, gēn shéi dōu néng tāotāo bù jué.',vn:'Cô ấy không chỉ thẳng thắn mà còn rất hoạt ngôn, với ai cũng nói chuyện không dứt.'}
   ],
   colloFull:[
     {zh:'滔滔不绝地聊',py:'tāotāo bù jué de liáo',vn:'nói chuyện không dứt'},
     {zh:'滔滔不绝地讲',py:'tāotāo bù jué de jiǎng',vn:'kể / giảng thao thao'},
     {zh:'说得滔滔不绝',py:'shuō de tāotāo bù jué',vn:'nói thao thao bất tuyệt'},
     {zh:'一说起……就滔滔不绝',py:'yì shuōqǐ……jiù tāotāo bù jué',vn:'hễ nhắc đến … là nói mãi'}
   ],
   patterns:[
     {s:'滔滔不绝地 + 说 / 聊 / 讲',m:'Nói / kể không ngừng'},
     {s:'一说起……就滔滔不绝',m:'Hễ nhắc đến … là nói mãi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ nhắc đến chuyến du lịch Vân Nam là bà tôi nói thao thao bất tuyệt.',answer:'一说起云南的旅行，我奶奶就滔滔不绝。',answerPy:'Yì shuōqǐ Yúnnán de lǚxíng, wǒ nǎinai jiù tāotāo bù jué.',
      note:'一……就……; 说起 = nhắc đến.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cậu ấy thao thao bất tuyệt suốt một tiếng, người nghe đều ngủ mất cả.',answer:'他滔滔不绝地讲了一个小时，听的人都睡着了。',answerPy:'Tā tāotāo bù jué de jiǎngle yí ge xiǎoshí, tīng de rén dōu shuìzháo le.',
      note:'Thành ngữ làm trạng ngữ + 地; thời lượng đứng sau động từ.',pair:'V + 了 + thời lượng'}
   ]},

  {n:21,zh:'嘲笑',py:'cháoxiào',pos:'Động từ',vn:'chê cười, chế nhạo',hv:'trào tiếu',em:'😏',lesson:1,
   explain:['Dùng lời nói cười nhạo, giễu cợt người khác (用言辞笑话对方).','Mang ý xấu, làm tổn thương người bị cười. Khác 笑 (cười) và 开玩笑 (đùa).'],
   usage:'嘲笑 + ai; 被（人）嘲笑; 在背后嘲笑.',
   collo:['嘲笑别人','被人嘲笑','在背后嘲笑'],
   ex_zh:'她就喜欢跟穿得漂亮的同学一起玩儿，还老嘲笑别人。',ex_py:'Tā jiù xǐhuan gēn chuān de piàoliang de tóngxué yìqǐ wánr, hái lǎo cháoxiào biérén.',ex_vn:'Bạn ấy chỉ thích chơi với những bạn ăn mặc đẹp, lại còn hay chê cười người khác.',
   exList:[
     {zh:'她就喜欢跟穿得漂亮的同学一起玩儿，还老嘲笑别人。',py:'Tā jiù xǐhuan gēn chuān de piàoliang de tóngxué yìqǐ wánr, hái lǎo cháoxiào biérén.',vn:'Bạn ấy chỉ thích chơi với những bạn ăn mặc đẹp, lại còn hay chê cười người khác.'},
     {zh:'我听说小丽在背后嘲笑我长得又胖又丑。',py:'Wǒ tīngshuō Xiǎo Lì zài bèihòu cháoxiào wǒ zhǎng de yòu pàng yòu chǒu.',vn:'Tôi nghe nói Tiểu Lệ chê cười sau lưng rằng tôi vừa béo vừa xấu.'},
     {zh:'别人说错了，我们不应该嘲笑，而应该帮助。',py:'Biérén shuōcuò le, wǒmen bù yīnggāi cháoxiào, ér yīnggāi bāngzhù.',vn:'Người khác nói sai, ta không nên chê cười mà nên giúp đỡ.'}
   ],
   colloFull:[
     {zh:'嘲笑别人',py:'cháoxiào biérén',vn:'chê cười người khác'},
     {zh:'被人嘲笑',py:'bèi rén cháoxiào',vn:'bị người ta chê cười'},
     {zh:'在背后嘲笑',py:'zài bèihòu cháoxiào',vn:'chê cười sau lưng'},
     {zh:'嘲笑的眼光',py:'cháoxiào de yǎnguāng',vn:'ánh mắt chế giễu'}
   ],
   patterns:[
     {s:'嘲笑 + ai（+ mệnh đề）',m:'Chê cười ai (vì điều gì)'},
     {s:'被 + ai + 嘲笑',m:'Bị ai chê cười'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ vì nói không rõ mà cậu ấy thường bị bạn cùng lớp chê cười.',answer:'小时候因为说话不清楚，他常常被同学嘲笑。',answerPy:'Xiǎoshíhou yīnwèi shuōhuà bù qīngchu, tā chángcháng bèi tóngxué cháoxiào.',
      note:'Câu bị động: 被 + người + 嘲笑.',pair:'被 (bị động)'},
     {promptLang:'vi',prompt:'Cậu ta không những không giúp mà còn chê cười tôi.',answer:'他不但不帮我，反而嘲笑我。',answerPy:'Tā búdàn bù bāng wǒ, fǎn\'ér cháoxiào wǒ.',
      note:'不但不……反而……: không những không… trái lại còn….',pair:'不但不……反而……'}
   ]},

  {n:22,zh:'讨好',py:'tǎo hǎo',pos:'Động từ',vn:'lấy lòng, nịnh',hv:'thảo hảo',em:'🍎',lesson:1,
   explain:['Cố làm vừa lòng người khác để được thích, được lợi (迎合别人，取得好感). Thường mang nghĩa xấu.','Cụm 吃力不讨好 = mất công mà chẳng được ai ghi nhận.'],
   usage:'讨好 + ai; 讨好老师 / 讨好老板; 吃力不讨好.',
   collo:['讨好老师','讨好别人','吃力不讨好'],
   ex_zh:'我讨厌高春来，他最会讨好老师了。',ex_py:'Wǒ tǎoyàn Gāo Chūnlái, tā zuì huì tǎo hǎo lǎoshī le.',ex_vn:'Tớ ghét Cao Xuân Lai, cậu ta giỏi nịnh thầy cô nhất.',
   exList:[
     {zh:'我讨厌高春来，他最会讨好老师了。',py:'Wǒ tǎoyàn Gāo Chūnlái, tā zuì huì tǎo hǎo lǎoshī le.',vn:'Tớ ghét Cao Xuân Lai, cậu ta giỏi nịnh thầy cô nhất.'},
     {zh:'他总是说些好听的话讨好老板。',py:'Tā zǒngshì shuō xiē hǎotīng de huà tǎo hǎo lǎobǎn.',vn:'Anh ta luôn nói những lời dễ nghe để lấy lòng sếp.'},
     {zh:'这件事吃力不讨好，我可不想干。',py:'Zhè jiàn shì chīlì bù tǎo hǎo, wǒ kě bù xiǎng gàn.',vn:'Việc này tốn công mà chẳng được gì, tôi chẳng muốn làm đâu.'}
   ],
   colloFull:[
     {zh:'讨好老师',py:'tǎo hǎo lǎoshī',vn:'nịnh thầy cô'},
     {zh:'讨好别人',py:'tǎo hǎo biérén',vn:'lấy lòng người khác'},
     {zh:'吃力不讨好',py:'chīlì bù tǎo hǎo',vn:'tốn công mà chẳng được gì'},
     {zh:'讨好老板',py:'tǎo hǎo lǎobǎn',vn:'lấy lòng sếp'}
   ],
   patterns:[
     {s:'讨好 + ai',m:'Lấy lòng ai'},
     {s:'为了讨好……，……',m:'Để lấy lòng … mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để lấy lòng mẹ, em trai chủ động rửa hết bát đĩa.',answer:'为了讨好妈妈，弟弟主动把碗都洗了。',answerPy:'Wèile tǎo hǎo māma, dìdi zhǔdòng bǎ wǎn dōu xǐ le.',
      note:'为了……; câu 把 + 都 + V + 了.',pair:'为了……'},
     {promptLang:'vi',prompt:'Làm người phải chân thành, không cần cố lấy lòng ai cả.',answer:'做人要真诚，不必刻意讨好谁。',answerPy:'Zuòrén yào zhēnchéng, búbì kèyì tǎo hǎo shéi.',
      note:'不必 = không cần; 谁 ở đây phiếm chỉ = bất kỳ ai.',pair:'不必'}
   ]},

  {n:23,zh:'郑重',py:'zhèngzhòng',pos:'Tính từ',vn:'trịnh trọng, nghiêm túc',hv:'trịnh trọng',em:'🎖️',lesson:1,
   explain:['Nghiêm túc, trang nghiêm, cẩn trọng (严肃认真).','Hay làm trạng ngữ: 郑重地说 / 宣布 / 道歉.'],
   usage:'郑重地 + V; 郑重其事 (hết sức nghiêm túc, trịnh trọng).',
   collo:['郑重地说','郑重地宣布','郑重其事'],
   ex_zh:'我郑重地走到她们跟前，严肃地说……',ex_py:'Wǒ zhèngzhòng de zǒudào tāmen gēnqián, yánsù de shuō……',ex_vn:'Tôi nghiêm trang bước đến trước mặt hai đứa, nghiêm nghị nói…',
   exList:[
     {zh:'我郑重地走到她们跟前，严肃地说……',py:'Wǒ zhèngzhòng de zǒudào tāmen gēnqián, yánsù de shuō……',vn:'Tôi nghiêm trang bước đến trước mặt hai đứa, nghiêm nghị nói…'},
     {zh:'校长郑重地宣布：明天学校放假一天。',py:'Xiàozhǎng zhèngzhòng de xuānbù: míngtiān xuéxiào fàngjià yì tiān.',vn:'Thầy hiệu trưởng trịnh trọng tuyên bố: ngày mai trường được nghỉ một ngày.'},
     {zh:'他郑重地向大家道了歉。',py:'Tā zhèngzhòng de xiàng dàjiā dàole qiàn.',vn:'Anh ấy nghiêm túc xin lỗi mọi người.'}
   ],
   colloFull:[
     {zh:'郑重地说',py:'zhèngzhòng de shuō',vn:'nói một cách trịnh trọng'},
     {zh:'郑重地宣布',py:'zhèngzhòng de xuānbù',vn:'trịnh trọng tuyên bố'},
     {zh:'郑重其事',py:'zhèngzhòng qí shì',vn:'hết sức nghiêm túc'},
     {zh:'郑重地道歉',py:'zhèngzhòng de dàoqiàn',vn:'nghiêm túc xin lỗi'}
   ],
   patterns:[
     {s:'郑重地 + 说 / 宣布 / 道歉',m:'Trịnh trọng nói / tuyên bố / xin lỗi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố trịnh trọng nói với tôi rằng từ nay tôi phải tự chịu trách nhiệm về việc mình làm.',answer:'爸爸郑重地对我说，从此以后我要为自己做的事负责。',answerPy:'Bàba zhèngzhòng de duì wǒ shuō, cóngcǐ yǐhòu wǒ yào wèi zìjǐ zuò de shì fùzé.',
      note:'对……说; 为……负责 = chịu trách nhiệm về….',pair:'为……负责'},
     {promptLang:'vi',prompt:'Việc quan trọng như vậy, cậu phải nghiêm túc suy nghĩ rồi hẵng quyết định.',answer:'这么重要的事，你要郑重地考虑以后再决定。',answerPy:'Zhème zhòngyào de shì, nǐ yào zhèngzhòng de kǎolǜ yǐhòu zài juédìng.',
      note:'……以后再……: làm… xong rồi hẵng….',pair:'……以后再……'}
   ]},

  {n:24,zh:'当面',py:'dāngmiàn',pos:'Phó từ',vn:'trước mặt, trực tiếp',hv:'đương diện',em:'👀',lesson:1,
   explain:['Ngay trước mặt, trực tiếp với người đó (在面前，面对面).','Đứng trước động từ: 当面说, 当面问, 当面交给. Đối lập: 背后 (sau lưng).'],
   usage:'当面 + V; 当着 + ai + 的面 + V (trước mặt ai).',
   collo:['当面说','当面问','当面交给'],
   ex_zh:'看到别人有缺点，应该当面说，背后说人家的坏话不好。',ex_py:'Kàndào biérén yǒu quēdiǎn, yīnggāi dāngmiàn shuō, bèihòu shuō rénjia de huàihuà bù hǎo.',ex_vn:'Thấy người khác có khuyết điểm thì nên nói thẳng trước mặt, nói xấu người ta sau lưng là không tốt.',
   exList:[
     {zh:'看到别人有缺点，应该当面说，背后说人家的坏话不好。',py:'Kàndào biérén yǒu quēdiǎn, yīnggāi dāngmiàn shuō, bèihòu shuō rénjia de huàihuà bù hǎo.',vn:'Thấy người khác có khuyết điểm thì nên nói thẳng trước mặt, nói xấu người ta sau lưng là không tốt.'},
     {zh:'我非常吃惊，马上要找她当面问个究竟。',py:'Wǒ fēicháng chījīng, mǎshàng yào zhǎo tā dāngmiàn wèn ge jiūjìng.',vn:'Tôi vô cùng sửng sốt, định đi tìm cô ấy hỏi thẳng cho ra lẽ ngay.'},
     {zh:'这些材料很重要，请你当面交给经理。',py:'Zhèxiē cáiliào hěn zhòngyào, qǐng nǐ dāngmiàn jiāo gěi jīnglǐ.',vn:'Tài liệu này rất quan trọng, anh hãy trao tận tay giám đốc.'}
   ],
   colloFull:[
     {zh:'当面说',py:'dāngmiàn shuō',vn:'nói trực tiếp'},
     {zh:'当面问',py:'dāngmiàn wèn',vn:'hỏi trực tiếp'},
     {zh:'当面交给',py:'dāngmiàn jiāo gěi',vn:'trao tận tay'},
     {zh:'当面道歉',py:'dāngmiàn dàoqiàn',vn:'xin lỗi trực tiếp'}
   ],
   patterns:[
     {s:'当面 + V',m:'Làm gì trực tiếp trước mặt người đó'},
     {s:'当着 + ai + 的面 + V',m:'Làm gì trước mặt ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có ý kiến gì thì cứ nói thẳng trước mặt, đừng bàn tán sau lưng.',answer:'有什么意见就当面说，别在背后议论。',answerPy:'Yǒu shénme yìjiàn jiù dāngmiàn shuō, bié zài bèihòu yìlùn.',
      note:'当面 ↔ 背后; 有什么……就…….',pair:'有什么……就……'},
     {promptLang:'vi',prompt:'Tôi muốn trực tiếp cảm ơn cô ấy.',answer:'我想当面向她表示感谢。',answerPy:'Wǒ xiǎng dāngmiàn xiàng tā biǎoshì gǎnxiè.',
      note:'当面 đứng trước cụm giới từ 向 + ai.',pair:'向……表示感谢'}
   ]},

  {n:25,zh:'人家',py:'rénjia',pos:'Đại từ',vn:'người ta, người khác; (chỉ) người đã nhắc; (chỉ) mình',hv:'nhân gia',em:'🧑‍🤝‍🧑',lesson:1,
   explain:['Chỉ người khác ngoài người nói và người nghe (= 别人): 人家都这么说.','Chỉ một người / nhóm người đã nhắc ở trước (= 他 / 他们).','Chỉ chính người nói (= 我), sắc thái thân mật, nũng nịu, hay dùng khi con gái làm nũng: 人家跟不上. Xem phần phân biệt 人家—别人.'],
   usage:'Đọc rénjia (家 thanh nhẹ). Phân biệt 人家 rénjiā = hộ gia đình (几户人家).',
   collo:['说人家的坏话','对不起人家','还给人家'],
   ex_zh:'背后说人家的坏话不好。',ex_py:'Bèihòu shuō rénjia de huàihuà bù hǎo.',ex_vn:'Nói xấu người ta sau lưng là không tốt.',
   exList:[
     {zh:'背后说人家的坏话不好。',py:'Bèihòu shuō rénjia de huàihuà bù hǎo.',vn:'Nói xấu người ta sau lưng là không tốt.'},
     {zh:'李阳天天帮我复习功课，我要是考不好，都对不起人家。',py:'Lǐ Yáng tiāntiān bāng wǒ fùxí gōngkè, wǒ yàoshi kǎo bu hǎo, dōu duìbuqǐ rénjia.',vn:'Lý Dương ngày nào cũng giúp tôi ôn bài, tôi mà thi không tốt thì thật có lỗi với cậu ấy.'},
     {zh:'你跑慢点儿行不行？人家跟不上。',py:'Nǐ pǎo màn diǎnr xíng bu xíng? Rénjia gēn bu shàng.',vn:'Anh chạy chậm chút được không? Người ta (em) theo không kịp.'}
   ],
   colloFull:[
     {zh:'说人家的坏话',py:'shuō rénjia de huàihuà',vn:'nói xấu người ta'},
     {zh:'对不起人家',py:'duìbuqǐ rénjia',vn:'có lỗi với người ta'},
     {zh:'还给人家',py:'huán gěi rénjia',vn:'trả lại cho người ta'},
     {zh:'人家都这么说',py:'rénjia dōu zhème shuō',vn:'người ta ai cũng nói vậy'}
   ],
   patterns:[
     {s:'人家 = 别人 / 他(们) / 我',m:'Ba cách chỉ người của 人家 (xem phần phân biệt từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người ta đã giúp cậu nhiều như vậy, sao cậu ngay cả một câu cảm ơn cũng không nói?',answer:'人家帮了你这么多，你怎么连一句谢谢都不说？',answerPy:'Rénjia bāngle nǐ zhème duō, nǐ zěnme lián yí jù xièxie dōu bù shuō?',
      note:'连……都……: ngay cả… cũng…; 人家 chỉ người đã nhắc (= 他).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Cậu mượn sách của người ta lâu thế rồi, nên trả lại cho người ta đi.',answer:'你借人家的书那么久了，该还给人家了。',answerPy:'Nǐ jiè rénjia de shū nàme jiǔ le, gāi huán gěi rénjia le.',
      note:'该……了: đã đến lúc phải…; 还 đọc huán.',pair:'该……了'}
   ]},

  {n:26,zh:'附和',py:'fùhè',pos:'Động từ',vn:'phụ hoạ, hùa theo',hv:'phụ hoạ',em:'🔁',lesson:1,
   explain:['Nói theo, làm theo ý kiến, lời nói của người khác (言语、行动跟着别人).','Có thể trung tính (nói thêm cho cùng ý) hoặc hơi chê (hùa theo, không có chính kiến): 随声附和. Chú ý: 和 ở đây đọc hè.'],
   usage:'附和 + ai / 意见; 在旁边附和; 随声附和.',
   collo:['在旁边附和','随声附和','附和别人'],
   ex_zh:'老公也在旁边附和：“大伙儿要和睦相处，对人要宽容。”',ex_py:'Lǎogōng yě zài pángbiān fùhè: “Dàhuǒr yào hémù xiāngchǔ, duì rén yào kuānróng.”',ex_vn:'Chồng tôi cũng phụ hoạ bên cạnh: "Mọi người phải sống hoà thuận, đối với người khác phải bao dung."',
   exList:[
     {zh:'老公也在旁边附和：“大伙儿要和睦相处，对人要宽容。”',py:'Lǎogōng yě zài pángbiān fùhè: “Dàhuǒr yào hémù xiāngchǔ, duì rén yào kuānróng.”',vn:'Chồng tôi cũng phụ hoạ bên cạnh: "Mọi người phải sống hoà thuận, đối với người khác phải bao dung."'},
     {zh:'他没有自己的看法，总是附和别人。',py:'Tā méiyǒu zìjǐ de kànfǎ, zǒngshì fùhè biérén.',vn:'Cậu ta không có chính kiến, lúc nào cũng hùa theo người khác.'},
     {zh:'经理一说完，大家就纷纷附和。',py:'Jīnglǐ yì shuōwán, dàjiā jiù fēnfēn fùhè.',vn:'Giám đốc vừa nói xong, mọi người đã nhao nhao hùa theo.'}
   ],
   colloFull:[
     {zh:'在旁边附和',py:'zài pángbiān fùhè',vn:'phụ hoạ bên cạnh'},
     {zh:'随声附和',py:'suíshēng fùhè',vn:'nói hùa theo'},
     {zh:'附和别人',py:'fùhè biérén',vn:'hùa theo người khác'},
     {zh:'纷纷附和',py:'fēnfēn fùhè',vn:'nhao nhao hùa theo'}
   ],
   patterns:[
     {s:'附和 + ai / ai 的意见',m:'Hùa theo ai / ý kiến của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có suy nghĩ gì thì cứ nói ra, đừng chỉ hùa theo người khác.',answer:'有想法就说出来，不要只是附和别人。',answerPy:'Yǒu xiǎngfǎ jiù shuō chūlái, búyào zhǐshì fùhè biérén.',
      note:'V + 出来: nói ra; 只是 = chỉ.',pair:'V + 出来'},
     {promptLang:'vi',prompt:'Mẹ vừa phê bình em trai xong, bà đã ở bên cạnh phụ hoạ theo.',answer:'妈妈刚批评完弟弟，奶奶就在旁边附和起来。',answerPy:'Māma gāng pīpíng wán dìdi, nǎinai jiù zài pángbiān fùhè qǐlái.',
      note:'刚……就……; V + 起来 = bắt đầu làm.',pair:'刚……就……'}
   ]},

  {n:27,zh:'大伙儿',py:'dàhuǒr',pos:'Đại từ',vn:'mọi người',hv:'đại hoả (nhi)',em:'👥',lesson:1,
   explain:['Mọi người, cả bọn (= 大家), dùng trong khẩu ngữ, nhất là miền Bắc Trung Quốc.','Hay nói 咱们大伙儿, 大伙儿一起……. Văn viết trang trọng dùng 大家 / 各位.'],
   usage:'大伙儿 = 大家 (khẩu ngữ).',
   collo:['大伙儿一起','咱们大伙儿','跟大伙儿商量'],
   ex_zh:'大伙儿要和睦相处，对人要宽容。',ex_py:'Dàhuǒr yào hémù xiāngchǔ, duì rén yào kuānróng.',ex_vn:'Mọi người phải sống hoà thuận, đối với người khác phải bao dung.',
   exList:[
     {zh:'大伙儿要和睦相处，对人要宽容。',py:'Dàhuǒr yào hémù xiāngchǔ, duì rén yào kuānróng.',vn:'Mọi người phải sống hoà thuận, đối với người khác phải bao dung.'},
     {zh:'大伙儿一起动手，一会儿就把教室打扫干净了。',py:'Dàhuǒr yìqǐ dòngshǒu, yíhuìr jiù bǎ jiàoshì dǎsǎo gānjìng le.',vn:'Mọi người cùng bắt tay vào làm, một lát đã dọn sạch lớp học.'},
     {zh:'这件事我得跟大伙儿商量商量。',py:'Zhè jiàn shì wǒ děi gēn dàhuǒr shāngliang shāngliang.',vn:'Việc này tôi phải bàn với mọi người đã.'}
   ],
   colloFull:[
     {zh:'大伙儿一起',py:'dàhuǒr yìqǐ',vn:'mọi người cùng'},
     {zh:'咱们大伙儿',py:'zánmen dàhuǒr',vn:'tất cả chúng ta'},
     {zh:'跟大伙儿商量',py:'gēn dàhuǒr shāngliang',vn:'bàn với mọi người'},
     {zh:'给大伙儿',py:'gěi dàhuǒr',vn:'cho mọi người'}
   ],
   patterns:[
     {s:'大伙儿 + 一起 + V',m:'Mọi người cùng làm gì (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mọi người cùng cố gắng thì không có khó khăn nào không vượt qua được.',answer:'只要大伙儿一起努力，就没有克服不了的困难。',answerPy:'Zhǐyào dàhuǒr yìqǐ nǔlì, jiù méiyǒu kèfú bù liǎo de kùnnan.',
      note:'只要……就……; 克服不了 = không vượt qua nổi (克服 HSK 5 bài 21).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Cô giáo cảm ơn mọi người đã giúp cô chuyển nhà.',answer:'老师感谢大伙儿帮她搬家。',answerPy:'Lǎoshī gǎnxiè dàhuǒr bāng tā bānjiā.',
      note:'感谢 + ai + V (việc người đó làm).',pair:'感谢……'}
   ]},

  {n:28,zh:'和睦',py:'hémù',pos:'Tính từ',vn:'hoà thuận, hoà hợp',hv:'hoà mục',em:'🏡',lesson:1,
   explain:['Chung sống với nhau êm ấm, không cãi cọ (相处融洽友好).','Hay dùng cho gia đình, hàng xóm, các dân tộc, các nước: 家庭和睦, 和睦相处. Dạng lặp: 和和睦睦.'],
   usage:'和睦相处, 家庭和睦, 和和睦睦地过日子. Xem phần phân biệt 融洽—和睦.',
   collo:['和睦相处','家庭和睦','和和睦睦'],
   ex_zh:'他们一家人和和睦睦，从来不吵架。',ex_py:'Tāmen yì jiā rén héhémùmù, cónglái bù chǎojià.',ex_vn:'Cả nhà họ hoà thuận êm ấm, chưa bao giờ cãi nhau.',
   exList:[
     {zh:'他们一家人和和睦睦，从来不吵架。',py:'Tāmen yì jiā rén héhémùmù, cónglái bù chǎojià.',vn:'Cả nhà họ hoà thuận êm ấm, chưa bao giờ cãi nhau.'},
     {zh:'老公附和：“大伙儿要和睦相处，对人要宽容。”',py:'Lǎogōng fùhè: “Dàhuǒr yào hémù xiāngchǔ, duì rén yào kuānróng.”',vn:'Chồng tôi phụ hoạ: "Mọi người phải sống hoà thuận, đối với người khác phải bao dung."'},
     {zh:'我巴不得他们能真的和好，从此以后和和睦睦过日子。',py:'Wǒ bābudé tāmen néng zhēn de héhǎo, cóngcǐ yǐhòu héhémùmù guò rìzi.',vn:'Tôi chỉ mong họ thật sự làm lành, từ nay về sau sống hoà thuận với nhau.'}
   ],
   colloFull:[
     {zh:'和睦相处',py:'hémù xiāngchǔ',vn:'chung sống hoà thuận'},
     {zh:'家庭和睦',py:'jiātíng hémù',vn:'gia đình hoà thuận'},
     {zh:'和和睦睦',py:'héhémùmù',vn:'hoà thuận êm ấm'},
     {zh:'邻里和睦',py:'línlǐ hémù',vn:'hàng xóm hoà thuận'}
   ],
   patterns:[
     {s:'(跟……) 和睦相处',m:'Chung sống hoà thuận (với …)'},
     {s:'和和睦睦（地）+ 过日子',m:'Sống hoà thuận (dạng lặp AABB)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gia đình hoà thuận thì con cái mới có thể lớn lên vui vẻ.',answer:'家庭和睦，孩子才能快乐地成长。',answerPy:'Jiātíng hémù, háizi cái néng kuàilè de chéngzhǎng.',
      note:'Điều kiện + 才……: có… thì mới…; 成长 (HSK 5 bài 28).',pair:'……才……'},
     {promptLang:'vi',prompt:'Dù tính cách khác nhau, anh chị em cũng nên chung sống hoà thuận.',answer:'即使性格不同，兄弟姐妹之间也应该和睦相处。',answerPy:'Jíshǐ xìnggé bù tóng, xiōngdì jiěmèi zhī jiān yě yīnggāi hémù xiāngchǔ.',
      note:'即使……也……; ……之间 = giữa….',pair:'即使……也……'}
   ]},

  {n:29,zh:'宽容',py:'kuānróng',pos:'Động từ',vn:'khoan dung, bao dung',hv:'khoan dung',em:'🤲',lesson:1,
   explain:['Rộng lượng, tha thứ, không so đo, không truy cứu (宽大有气量，不计较或追究).','Làm động từ (宽容别人) hoặc tính từ (很宽容, 宽容的态度). Trong bài: 对自己宽容 = dễ dãi với bản thân.'],
   usage:'对人宽容, 宽容别人, 宽容的态度, 学会宽容.',
   collo:['对人要宽容','宽容别人','宽容的态度'],
   ex_zh:'我们对自己宽容，对孩子严厉。',ex_py:'Wǒmen duì zìjǐ kuānróng, duì háizi yánlì.',ex_vn:'Chúng tôi dễ dãi với bản thân, nghiêm khắc với con cái.',
   exList:[
     {zh:'我们对自己宽容，对孩子严厉。',py:'Wǒmen duì zìjǐ kuānróng, duì háizi yánlì.',vn:'Chúng tôi dễ dãi với bản thân, nghiêm khắc với con cái.'},
     {zh:'大伙儿要和睦相处，对人要宽容。',py:'Dàhuǒr yào hémù xiāngchǔ, duì rén yào kuānróng.',vn:'Mọi người phải sống hoà thuận, đối với người khác phải bao dung.'},
     {zh:'我老公也很宽容，能原谅伤害过他的人。',py:'Wǒ lǎogōng yě hěn kuānróng, néng yuánliàng shānghàiguo tā de rén.',vn:'Chồng tôi cũng rất bao dung, có thể tha thứ cho những người từng làm tổn thương anh ấy.'}
   ],
   colloFull:[
     {zh:'对人要宽容',py:'duì rén yào kuānróng',vn:'đối với người phải bao dung'},
     {zh:'宽容别人',py:'kuānróng biérén',vn:'bao dung người khác'},
     {zh:'宽容的态度',py:'kuānróng de tàidu',vn:'thái độ khoan dung'},
     {zh:'学会宽容',py:'xuéhuì kuānróng',vn:'học cách bao dung'}
   ],
   patterns:[
     {s:'对 + ai + 宽容',m:'Khoan dung / dễ dãi với ai'},
     {s:'宽容 + ai',m:'Bao dung, tha thứ cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học được cách bao dung người khác thì bản thân cũng sẽ sống vui hơn.',answer:'学会宽容别人，自己也会生活得更快乐。',answerPy:'Xuéhuì kuānróng biérén, zìjǐ yě huì shēnghuó de gèng kuàilè.',
      note:'学会 + V: học được cách…; V + 得 + 更 + tính từ.',pair:'学会……'},
     {promptLang:'vi',prompt:'Đối với lỗi lầm của trẻ con, cha mẹ nên bao dung hơn một chút.',answer:'对于孩子的错误，父母应该宽容一些。',answerPy:'Duìyú háizi de cuòwù, fùmǔ yīnggāi kuānróng yìxiē.',
      note:'对于…… đưa đối tượng lên đầu câu; tính từ + 一些: hơn một chút.',pair:'对于……'}
   ]},

  {n:30,zh:'疑惑',py:'yíhuò',pos:'Danh từ',vn:'sự nghi ngờ, băn khoăn, thắc mắc',hv:'nghi hoặc',em:'🤔',lesson:1,
   explain:['Danh từ: điều còn nghi ngờ, chưa hiểu (心里不明白，不相信).','Cũng làm động từ / trạng ngữ: 他疑惑地看着我 (anh ấy nhìn tôi đầy nghi hoặc).'],
   usage:'一脸的疑惑, 心中的疑惑, 疑惑地问 / 看, 解开疑惑.',
   collo:['一脸的疑惑','疑惑地看着','心中的疑惑'],
   ex_zh:'女儿却是一脸的疑惑，反问道……',ex_py:'Nǚ\'ér què shì yì liǎn de yíhuò, fǎnwèn dào……',ex_vn:'Con gái thì mặt đầy vẻ khó hiểu, hỏi ngược lại…',
   exList:[
     {zh:'女儿却是一脸的疑惑，反问道……',py:'Nǚ\'ér què shì yì liǎn de yíhuò, fǎnwèn dào……',vn:'Con gái thì mặt đầy vẻ khó hiểu, hỏi ngược lại…'},
     {zh:'我的疑惑没有了，我们仍然是亲密的朋友。',py:'Wǒ de yíhuò méiyǒu le, wǒmen réngrán shì qīnmì de péngyou.',vn:'Nỗi nghi ngờ của tôi tan biến, chúng tôi vẫn là bạn thân thiết.'},
     {zh:'他疑惑地看着我，好像不相信我说的话。',py:'Tā yíhuò de kànzhe wǒ, hǎoxiàng bù xiāngxìn wǒ shuō de huà.',vn:'Anh ấy nhìn tôi đầy nghi hoặc, như thể không tin lời tôi nói.'}
   ],
   colloFull:[
     {zh:'一脸的疑惑',py:'yì liǎn de yíhuò',vn:'mặt đầy vẻ khó hiểu'},
     {zh:'疑惑地看着',py:'yíhuò de kànzhe',vn:'nhìn đầy nghi hoặc'},
     {zh:'心中的疑惑',py:'xīnzhōng de yíhuò',vn:'nỗi băn khoăn trong lòng'},
     {zh:'解开疑惑',py:'jiěkāi yíhuò',vn:'giải toả thắc mắc'}
   ],
   patterns:[
     {s:'一脸的疑惑',m:'Mặt đầy vẻ khó hiểu'},
     {s:'疑惑地 + V',m:'Làm gì với vẻ nghi hoặc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe thầy giải thích xong, những thắc mắc trong lòng tôi đều được giải toả.',answer:'听完老师的解释，我心中的疑惑都解开了。',answerPy:'Tīngwán lǎoshī de jiěshì, wǒ xīnzhōng de yíhuò dōu jiěkāi le.',
      note:'V + 完: làm xong; 疑惑 làm chủ ngữ.',pair:'V + 完'},
     {promptLang:'vi',prompt:'Em trai nhìn tôi đầy nghi hoặc, dường như không hiểu tôi đang nói gì.',answer:'弟弟疑惑地看着我，似乎不明白我在说什么。',answerPy:'Dìdi yíhuò de kànzhe wǒ, sìhū bù míngbai wǒ zài shuō shénme.',
      note:'似乎 (HSK 5 bài 8) = dường như; 疑惑地 + V.',pair:'似乎'}
   ]},

  {n:31,zh:'反问',py:'fǎnwèn',pos:'Động từ',vn:'hỏi ngược lại, hỏi vặn',hv:'phản vấn',em:'↩️',lesson:1,
   explain:['Hỏi lại người vừa hỏi / vừa nói với mình, hoặc dùng câu hỏi để khẳng định ý ngược lại (câu hỏi tu từ = 反问句).','Trong bài: 反问道 (văn viết) = hỏi ngược lại rằng.'],
   usage:'反问道：“……” / 反问 + ai; 反问句.',
   collo:['反问道','反问他','反问句'],
   ex_zh:'小丽笑了，她反问道：“你觉得我会说那样的话吗？”',ex_py:'Xiǎo Lì xiào le, tā fǎnwèn dào: “Nǐ juéde wǒ huì shuō nàyàng de huà ma?”',ex_vn:'Tiểu Lệ cười, hỏi ngược lại: "Cậu nghĩ tớ lại nói những lời như thế sao?"',
   exList:[
     {zh:'小丽笑了，她反问道：“你觉得我会说那样的话吗？”',py:'Xiǎo Lì xiào le, tā fǎnwèn dào: “Nǐ juéde wǒ huì shuō nàyàng de huà ma?”',vn:'Tiểu Lệ cười, hỏi ngược lại: "Cậu nghĩ tớ lại nói những lời như thế sao?"'},
     {zh:'女儿反问道：“你们不是也有时候说，哪个朋友很自私吗？”',py:'Nǚ\'ér fǎnwèn dào: “Nǐmen bú shì yě yǒu shíhou shuō, nǎge péngyou hěn zìsī ma?”',vn:'Con gái hỏi ngược lại: "Chẳng phải bố mẹ cũng có lúc nói bạn này bạn kia rất ích kỷ sao?"'},
     {zh:'“你不是说今天不来吗？”这是一个反问句。',py:'“Nǐ bú shì shuō jīntiān bù lái ma?” Zhè shì yí ge fǎnwènjù.',vn:'"Chẳng phải cậu nói hôm nay không đến sao?" — đây là một câu hỏi tu từ.'}
   ],
   colloFull:[
     {zh:'反问道',py:'fǎnwèn dào',vn:'hỏi ngược lại rằng'},
     {zh:'反问他',py:'fǎnwèn tā',vn:'hỏi vặn anh ấy'},
     {zh:'反问句',py:'fǎnwènjù',vn:'câu hỏi tu từ'},
     {zh:'用反问的语气',py:'yòng fǎnwèn de yǔqì',vn:'dùng giọng hỏi vặn'}
   ],
   patterns:[
     {s:'反问道：“……？”',m:'Hỏi ngược lại rằng … (văn kể chuyện)'},
     {s:'不是……吗？',m:'Câu hỏi tu từ: chẳng phải … sao?'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi hỏi cậu ấy vì sao đến muộn, cậu ấy lại hỏi ngược lại tôi: "Chẳng phải cậu cũng đến muộn sao?"',answer:'我问他为什么迟到，他却反问我：“你不是也迟到了吗？”',answerPy:'Wǒ wèn tā wèi shénme chídào, tā què fǎnwèn wǒ: “Nǐ bú shì yě chídào le ma?”',
      note:'不是……吗？ là câu hỏi tu từ, ý khẳng định.',pair:'不是……吗？'},
     {promptLang:'vi',prompt:'Cô giáo không trả lời trực tiếp mà hỏi ngược lại chúng tôi một câu.',answer:'老师没有直接回答，而是反问了我们一个问题。',answerPy:'Lǎoshī méiyǒu zhíjiē huídá, ér shì fǎnwènle wǒmen yí ge wèntí.',
      note:'没有……而是……: không… mà là….',pair:'不是 / 没有……而是……'}
   ]},

  {n:32,zh:'瞬间',py:'shùnjiān',pos:'Danh từ',vn:'phút chốc, chốc lát, khoảnh khắc',hv:'thuấn gian',em:'⏱️',lesson:1,
   explain:['Khoảng thời gian cực ngắn, trong nháy mắt (转眼之间). 瞬 = chớp mắt.','Làm trạng ngữ (瞬间，……) hoặc 在……的一瞬间 (ngay khoảnh khắc…). Từ này đã gặp ở HSK 5 bài 10.'],
   usage:'瞬间 + V; 一瞬间; 在……的瞬间; 美好的瞬间.',
   collo:['一瞬间','在……的瞬间','美好的瞬间'],
   ex_zh:'瞬间我和老公被问得说不出话来，屋子里鸦雀无声。',ex_py:'Shùnjiān wǒ hé lǎogōng bèi wèn de shuō bu chū huà lái, wūzi li yāquè wúshēng.',ex_vn:'Trong phút chốc, vợ chồng tôi bị hỏi đến cứng họng, căn phòng im phăng phắc.',
   exList:[
     {zh:'瞬间我和老公被问得说不出话来，屋子里鸦雀无声。',py:'Shùnjiān wǒ hé lǎogōng bèi wèn de shuō bu chū huà lái, wūzi li yāquè wúshēng.',vn:'Trong phút chốc, vợ chồng tôi bị hỏi đến cứng họng, căn phòng im phăng phắc.'},
     {zh:'看到妈妈的那一瞬间，她的眼泪流了下来。',py:'Kàndào māma de nà yí shùnjiān, tā de yǎnlèi liúle xiàlái.',vn:'Khoảnh khắc nhìn thấy mẹ, nước mắt cô ấy trào ra.'},
     {zh:'照片记录下了很多美好的瞬间。',py:'Zhàopiàn jìlù xiàle hěn duō měihǎo de shùnjiān.',vn:'Những bức ảnh đã ghi lại rất nhiều khoảnh khắc đẹp.'}
   ],
   colloFull:[
     {zh:'一瞬间',py:'yí shùnjiān',vn:'trong nháy mắt'},
     {zh:'在……的瞬间',py:'zài……de shùnjiān',vn:'ngay khoảnh khắc …'},
     {zh:'美好的瞬间',py:'měihǎo de shùnjiān',vn:'khoảnh khắc đẹp'},
     {zh:'瞬间变了',py:'shùnjiān biàn le',vn:'thay đổi trong chớp mắt'}
   ],
   patterns:[
     {s:'瞬间，……',m:'Trong phút chốc, …'},
     {s:'V 的那一瞬间，……',m:'Ngay khoảnh khắc làm gì, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe tin này, không khí trong lớp phút chốc trở nên căng thẳng.',answer:'听到这个消息，教室里的气氛瞬间变得紧张起来。',answerPy:'Tīngdào zhège xiāoxi, jiàoshì li de qìfēn shùnjiān biànde jǐnzhāng qǐlái.',
      note:'瞬间 làm trạng ngữ trước động từ; tính từ + 起来.',pair:'变得……起来'},
     {promptLang:'vi',prompt:'Khoảnh khắc bước lên sân khấu, cậu ấy không còn chút hồi hộp nào nữa.',answer:'走上舞台的那一瞬间，他一点儿也不紧张了。',answerPy:'Zǒushàng wǔtái de nà yí shùnjiān, tā yìdiǎnr yě bù jǐnzhāng le.',
      note:'一点儿也不……了: không … chút nào nữa.',pair:'一点儿也不……'}
   ]},

  {n:33,zh:'鸦雀无声',py:'yāquè-wúshēng',pos:'Thành ngữ',vn:'im phăng phắc, lặng ngắt như tờ',hv:'nha tước vô thanh',em:'🤫',lesson:1,
   explain:['Đến tiếng quạ, tiếng chim sẻ cũng không có — hết sức yên lặng (形容非常安静).','Thường làm vị ngữ: 屋子里鸦雀无声, 全场鸦雀无声.'],
   usage:'Nơi chốn + 鸦雀无声; 一下子 / 顿时 + 鸦雀无声.',
   collo:['屋子里鸦雀无声','全场鸦雀无声','一下子鸦雀无声'],
   ex_zh:'老师一走进来，教室里一下子鸦雀无声。',ex_py:'Lǎoshī yì zǒu jìnlái, jiàoshì li yíxiàzi yāquè wúshēng.',ex_vn:'Cô giáo vừa bước vào, cả lớp lập tức im phăng phắc.',
   exList:[
     {zh:'老师一走进来，教室里一下子鸦雀无声。',py:'Lǎoshī yì zǒu jìnlái, jiàoshì li yíxiàzi yāquè wúshēng.',vn:'Cô giáo vừa bước vào, cả lớp lập tức im phăng phắc.'},
     {zh:'瞬间我和老公被问得说不出话来，屋子里鸦雀无声。',py:'Shùnjiān wǒ hé lǎogōng bèi wèn de shuō bu chū huà lái, wūzi li yāquè wúshēng.',vn:'Trong phút chốc, vợ chồng tôi bị hỏi đến cứng họng, căn phòng im phăng phắc.'},
     {zh:'比赛最后一分钟，全场鸦雀无声，大家都盯着那个球。',py:'Bǐsài zuìhòu yì fēnzhōng, quán chǎng yāquè wúshēng, dàjiā dōu dīngzhe nàge qiú.',vn:'Phút cuối trận đấu, cả sân im phăng phắc, mọi người đều dán mắt vào quả bóng.'}
   ],
   colloFull:[
     {zh:'屋子里鸦雀无声',py:'wūzi li yāquè wúshēng',vn:'căn phòng im phăng phắc'},
     {zh:'全场鸦雀无声',py:'quán chǎng yāquè wúshēng',vn:'cả hội trường lặng ngắt'},
     {zh:'一下子鸦雀无声',py:'yíxiàzi yāquè wúshēng',vn:'bỗng chốc im bặt'},
     {zh:'教室里鸦雀无声',py:'jiàoshì li yāquè wúshēng',vn:'lớp học im phăng phắc'}
   ],
   patterns:[
     {s:'Nơi chốn + 鸦雀无声',m:'Ở đâu đó im phăng phắc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hiệu trưởng vừa bước lên sân khấu, cả hội trường liền im phăng phắc.',answer:'校长刚走上台，全场就鸦雀无声了。',answerPy:'Xiàozhǎng gāng zǒushàng tái, quán chǎng jiù yāquè wúshēng le.',
      note:'刚……就……; thành ngữ làm vị ngữ + 了.',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Lúc thi, lớp học im phăng phắc, chỉ nghe thấy tiếng viết bài.',answer:'考试的时候，教室里鸦雀无声，只听得见写字的声音。',answerPy:'Kǎoshì de shíhou, jiàoshì li yāquè wúshēng, zhǐ tīng de jiàn xiě zì de shēngyīn.',
      note:'听得见: bổ ngữ khả năng (nghe thấy được).',pair:'V + 得 + 见 (bổ ngữ khả năng)'}
   ]},

  {n:34,zh:'启蒙',py:'qǐméng',pos:'Động từ',vn:'vỡ lòng, khai tâm, nhập môn',hv:'khải mông',em:'📖',lesson:1,
   explain:['Dạy cho người mới học những kiến thức cơ bản, nhập môn nhất (使初学者得到基本的、入门的知识).','Hay đi thành cụm: 启蒙老师 (người thầy vỡ lòng), 启蒙教育, 启蒙读物.'],
   usage:'启蒙老师, 启蒙教育, 音乐启蒙.',
   collo:['启蒙老师','启蒙教育','音乐启蒙'],
   ex_zh:'人们常说，启蒙老师的重要性不可忽视。',ex_py:'Rénmen cháng shuō, qǐméng lǎoshī de zhòngyàoxìng bù kě hūshì.',ex_vn:'Người ta thường nói, tầm quan trọng của người thầy vỡ lòng không thể xem nhẹ.',
   exList:[
     {zh:'人们常说，启蒙老师的重要性不可忽视。',py:'Rénmen cháng shuō, qǐméng lǎoshī de zhòngyàoxìng bù kě hūshì.',vn:'Người ta thường nói, tầm quan trọng của người thầy vỡ lòng không thể xem nhẹ.'},
     {zh:'我的汉语启蒙老师是一位很有耐心的女老师。',py:'Wǒ de Hànyǔ qǐméng lǎoshī shì yí wèi hěn yǒu nàixīn de nǚ lǎoshī.',vn:'Người đầu tiên dạy tôi tiếng Trung là một cô giáo rất kiên nhẫn.'},
     {zh:'很多父母很重视孩子的音乐启蒙。',py:'Hěn duō fùmǔ hěn zhòngshì háizi de yīnyuè qǐméng.',vn:'Nhiều bố mẹ rất coi trọng việc cho con làm quen với âm nhạc từ sớm.'}
   ],
   colloFull:[
     {zh:'启蒙老师',py:'qǐméng lǎoshī',vn:'người thầy vỡ lòng'},
     {zh:'启蒙教育',py:'qǐméng jiàoyù',vn:'giáo dục vỡ lòng'},
     {zh:'音乐启蒙',py:'yīnyuè qǐméng',vn:'khai tâm âm nhạc'},
     {zh:'启蒙读物',py:'qǐméng dúwù',vn:'sách vỡ lòng'}
   ],
   patterns:[
     {s:'……的启蒙老师',m:'Người thầy vỡ lòng (dạy đầu tiên) của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cha mẹ chính là người thầy vỡ lòng của con cái, vì vậy lời nói việc làm của họ rất quan trọng.',answer:'父母就是孩子的启蒙老师，因此他们的言行非常重要。',answerPy:'Fùmǔ jiù shì háizi de qǐméng lǎoshī, yīncǐ tāmen de yánxíng fēicháng zhòngyào.',
      note:'因此 = vì vậy (văn viết).',pair:'因此'},
     {promptLang:'vi',prompt:'Tuy đã tốt nghiệp nhiều năm nhưng tôi vẫn luôn nhớ người thầy vỡ lòng của mình.',answer:'虽然毕业很多年了，但我一直记得我的启蒙老师。',answerPy:'Suīrán bìyè hěn duō nián le, dàn wǒ yìzhí jìde wǒ de qǐméng lǎoshī.',
      note:'一直 = luôn luôn, suốt.',pair:'虽然……但……'}
   ]},

  {n:35,zh:'任',py:'rèn',pos:'Lượng từ',vn:'(số lần đảm nhiệm chức vụ) đời, khoá, nhiệm kỳ',hv:'nhiệm',em:'🔢',lesson:1,
   explain:['Lượng từ đếm số lần / đời người đảm nhiệm một chức vụ: 第一任老师, 第三任校长, 下一任班长.','Từ ngoài đề cương (*). Cũng là động từ 任 (đảm nhiệm) — gặp trong 任命 (HSK 5 bài 15).'],
   usage:'第 + số + 任 + chức vụ; 上一任 / 下一任.',
   collo:['第一任老师','上一任','下一任'],
   ex_zh:'父母就是孩子的第一任老师。',ex_py:'Fùmǔ jiù shì háizi de dì-yī rèn lǎoshī.',ex_vn:'Cha mẹ chính là người thầy đầu tiên của con cái.',
   exList:[
     {zh:'父母就是孩子的第一任老师。',py:'Fùmǔ jiù shì háizi de dì-yī rèn lǎoshī.',vn:'Cha mẹ chính là người thầy đầu tiên của con cái.'},
     {zh:'他是我们学校的第三任校长。',py:'Tā shì wǒmen xuéxiào de dì-sān rèn xiàozhǎng.',vn:'Ông ấy là hiệu trưởng đời thứ ba của trường chúng tôi.'},
     {zh:'下一任班长由大家投票选出。',py:'Xià yí rèn bānzhǎng yóu dàjiā tóupiào xuǎnchū.',vn:'Lớp trưởng khoá sau sẽ do mọi người bỏ phiếu bầu ra.'}
   ],
   colloFull:[
     {zh:'第一任老师',py:'dì-yī rèn lǎoshī',vn:'người thầy đầu tiên'},
     {zh:'上一任',py:'shàng yí rèn',vn:'người tiền nhiệm, khoá trước'},
     {zh:'下一任',py:'xià yí rèn',vn:'người kế nhiệm, khoá sau'},
     {zh:'第三任校长',py:'dì-sān rèn xiàozhǎng',vn:'hiệu trưởng đời thứ ba'}
   ],
   patterns:[
     {s:'第 + số + 任 + chức vụ',m:'Người giữ chức … đời thứ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy là lớp trưởng khoá trước, rất có trách nhiệm.',answer:'他是上一任班长，非常负责。',answerPy:'Tā shì shàng yí rèn bānzhǎng, fēicháng fùzé.',
      note:'上一任 đọc shàng yí rèn (一 trước thanh 4 → yí).',pair:'上 / 下 + 一任'},
     {promptLang:'vi',prompt:'Nhiều người nói cha mẹ là người thầy đầu tiên của con, lời này quả thật không sai.',answer:'很多人说父母是孩子的第一任老师，这话确实不假。',answerPy:'Hěn duō rén shuō fùmǔ shì háizi de dì-yī rèn lǎoshī, zhè huà quèshí bù jiǎ.',
      note:'这话确实不假 (练习 4) = lời này quả không sai; 第一 là số thứ tự, đọc dì-yī.',pair:'这话确实不假'}
   ]},

  {n:36,zh:'反驳',py:'fǎnbó',pos:'Động từ',vn:'phản bác, bắt bẻ',hv:'phản bác',em:'🙅',lesson:1,
   explain:['Nói ra lý lẽ của mình để phủ định ý kiến, lý lẽ của người khác (说出自己的理由，来否定别人的意见).','Trong bài: câu hỏi vặn của con gái chính là lời 反驳 bố mẹ.'],
   usage:'反驳 + ai / 意见 / 观点; 无法反驳; 当面反驳.',
   collo:['反驳别人','无法反驳','反驳他的观点'],
   ex_zh:'他的理由很充分，大家都无法反驳。',ex_py:'Tā de lǐyóu hěn chōngfèn, dàjiā dōu wúfǎ fǎnbó.',ex_vn:'Lý do của anh ấy rất đầy đủ, mọi người đều không thể phản bác.',
   exList:[
     {zh:'他的理由很充分，大家都无法反驳。',py:'Tā de lǐyóu hěn chōngfèn, dàjiā dōu wúfǎ fǎnbó.',vn:'Lý do của anh ấy rất đầy đủ, mọi người đều không thể phản bác.'},
     {zh:'如果这次不是女儿反驳，我还意识不到自己的问题。',py:'Rúguǒ zhè cì bú shì nǚ\'ér fǎnbó, wǒ hái yìshí bú dào zìjǐ de wèntí.',vn:'Nếu lần này không phải con gái bắt bẻ, tôi vẫn chưa nhận ra vấn đề của chính mình.'},
     {zh:'我刚说完，同桌就站起来反驳我的观点。',py:'Wǒ gāng shuōwán, tóngzhuō jiù zhàn qǐlái fǎnbó wǒ de guāndiǎn.',vn:'Tôi vừa nói xong, bạn cùng bàn đã đứng dậy phản bác quan điểm của tôi.'}
   ],
   colloFull:[
     {zh:'反驳别人',py:'fǎnbó biérén',vn:'phản bác người khác'},
     {zh:'无法反驳',py:'wúfǎ fǎnbó',vn:'không thể phản bác'},
     {zh:'反驳他的观点',py:'fǎnbó tā de guāndiǎn',vn:'phản bác quan điểm của anh ấy'},
     {zh:'当面反驳',py:'dāngmiàn fǎnbó',vn:'phản bác thẳng mặt'}
   ],
   patterns:[
     {s:'反驳 + ai / 观点 / 意见',m:'Phản bác ai / quan điểm nào'},
     {s:'无法反驳',m:'Không thể phản bác'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy nói rất có lý, tôi hoàn toàn không phản bác được.',answer:'他说得很有道理，我根本没法反驳。',answerPy:'Tā shuō de hěn yǒu dàolǐ, wǒ gēnběn méi fǎ fǎnbó.',
      note:'根本 + phủ định: hoàn toàn không; 没法 = 无法.',pair:'根本 + 不 / 没'},
     {promptLang:'vi',prompt:'Nếu cậu không đồng ý thì có thể phản bác, nhưng phải nói ra lý do.',answer:'如果你不同意，可以反驳，但是要说出理由。',answerPy:'Rúguǒ nǐ bù tóngyì, kěyǐ fǎnbó, dànshì yào shuō chū lǐyóu.',
      note:'如果……，可以……; 说出 = nói ra.',pair:'如果……'}
   ]},

  {n:37,zh:'意识',py:'yìshí',pos:'Động từ',vn:'ý thức được, nhận ra',hv:'ý thức',em:'🧠',lesson:1,
   explain:['Động từ: nhận biết, nhận ra được (觉察), thường dùng 意识到 / 意识不到.','Danh từ: ý thức (安全意识, 环保意识) — đã gặp ở HSK 5 bài 10.'],
   usage:'意识到 + N / mệnh đề; 意识不到; 没有意识到. Sách ghi yìshí; khẩu ngữ cũng hay đọc yìshi.',
   collo:['意识到','意识不到','安全意识'],
   ex_zh:'我这才意识到自己错了。',ex_py:'Wǒ zhè cái yìshí dào zìjǐ cuò le.',ex_vn:'Đến lúc này tôi mới nhận ra mình đã sai.',
   exList:[
     {zh:'我这才意识到自己错了。',py:'Wǒ zhè cái yìshí dào zìjǐ cuò le.',vn:'Đến lúc này tôi mới nhận ra mình đã sai.'},
     {zh:'如果这次不是女儿反驳，我还意识不到我们实行的是两套标准。',py:'Rúguǒ zhè cì bú shì nǚ\'ér fǎnbó, wǒ hái yìshí bú dào wǒmen shíxíng de shì liǎng tào biāozhǔn.',vn:'Nếu lần này không phải con gái bắt bẻ, tôi vẫn chưa nhận ra chúng tôi đang áp dụng hai tiêu chuẩn.'},
     {zh:'我们应该从小培养孩子的安全意识。',py:'Wǒmen yīnggāi cóngxiǎo péiyǎng háizi de ānquán yìshí.',vn:'Chúng ta nên bồi dưỡng ý thức an toàn cho trẻ từ nhỏ.'}
   ],
   colloFull:[
     {zh:'意识到',py:'yìshí dào',vn:'nhận ra'},
     {zh:'意识不到',py:'yìshí bú dào',vn:'không nhận ra'},
     {zh:'安全意识',py:'ānquán yìshí',vn:'ý thức an toàn'},
     {zh:'没有意识到',py:'méiyǒu yìshí dào',vn:'chưa nhận ra'},
     {zh:'环保意识',py:'huánbǎo yìshí',vn:'ý thức bảo vệ môi trường'}
   ],
   patterns:[
     {s:'意识到 + mệnh đề',m:'Nhận ra rằng …'},
     {s:'……才意识到……',m:'Đến lúc … mới nhận ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mãi đến khi thi trượt, cậu ấy mới nhận ra tầm quan trọng của việc ôn bài.',answer:'直到考试没通过，他才意识到复习的重要性。',answerPy:'Zhídào kǎoshì méi tōngguò, tā cái yìshí dào fùxí de zhòngyàoxìng.',
      note:'直到……才……: mãi đến… mới….',pair:'直到……才……'},
     {promptLang:'vi',prompt:'Nhiều người vẫn chưa nhận ra rằng rác thải nhựa có hại cho môi trường.',answer:'很多人还没有意识到塑料垃圾对环境有害。',answerPy:'Hěn duō rén hái méiyǒu yìshí dào sùliào lājī duì huánjìng yǒuhài.',
      note:'对……有害 = có hại cho….',pair:'对……有害'}
   ]},

  {n:38,zh:'实行',py:'shíxíng',pos:'Động từ',vn:'thực hiện, thi hành, áp dụng',hv:'thực hành',em:'📋',lesson:1,
   explain:['Đưa (chính sách, chế độ, kế hoạch, tiêu chuẩn…) vào làm trên thực tế (用行动来实现).','Bẫy Hán–Việt: "thực hành" tiếng Việt là luyện tập thực tế (tiếng Trung: 实践 / 实习 / 练习); 实行 = thi hành, áp dụng.'],
   usage:'实行 + 制度 / 政策 / 计划 / 标准; 开始实行.',
   collo:['实行两套标准','实行新制度','开始实行'],
   ex_zh:'我们自己的做法和对孩子的要求实行的是两套标准。',ex_py:'Wǒmen zìjǐ de zuòfǎ hé duì háizi de yāoqiú shíxíng de shì liǎng tào biāozhǔn.',ex_vn:'Cách làm của chính chúng tôi và yêu cầu đối với con cái là áp dụng hai tiêu chuẩn khác nhau.',
   exList:[
     {zh:'我们自己的做法和对孩子的要求实行的是两套标准。',py:'Wǒmen zìjǐ de zuòfǎ hé duì háizi de yāoqiú shíxíng de shì liǎng tào biāozhǔn.',vn:'Cách làm của chính chúng tôi và yêu cầu đối với con cái là áp dụng hai tiêu chuẩn khác nhau.'},
     {zh:'从下个月起，公司开始实行新的上班制度。',py:'Cóng xià ge yuè qǐ, gōngsī kāishǐ shíxíng xīn de shàngbān zhìdù.',vn:'Từ tháng sau, công ty bắt đầu áp dụng chế độ đi làm mới.'},
     {zh:'这个计划实行起来并不容易。',py:'Zhège jìhuà shíxíng qǐlái bìng bù róngyì.',vn:'Kế hoạch này thực hiện ra thì không hề dễ.'}
   ],
   colloFull:[
     {zh:'实行两套标准',py:'shíxíng liǎng tào biāozhǔn',vn:'áp dụng hai tiêu chuẩn'},
     {zh:'实行新制度',py:'shíxíng xīn zhìdù',vn:'áp dụng chế độ mới'},
     {zh:'开始实行',py:'kāishǐ shíxíng',vn:'bắt đầu thi hành'},
     {zh:'实行计划',py:'shíxíng jìhuà',vn:'thực hiện kế hoạch'}
   ],
   patterns:[
     {s:'实行 + 制度 / 政策 / 标准 / 计划',m:'Thi hành, áp dụng (cái gì)'},
     {s:'从……起，开始实行……',m:'Từ … bắt đầu áp dụng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ học kỳ này, trường bắt đầu áp dụng quy định mới: học sinh không được mang điện thoại vào lớp.',answer:'从这个学期起，学校开始实行新规定：学生不能带手机进教室。',answerPy:'Cóng zhège xuéqī qǐ, xuéxiào kāishǐ shíxíng xīn guīdìng: xuésheng bù néng dài shǒujī jìn jiàoshì.',
      note:'从……起: kể từ…; 实行 + quy định.',pair:'从……起'},
     {promptLang:'vi',prompt:'Kế hoạch này nghe thì hay, nhưng thực hiện thì khó.',answer:'这个计划听起来不错，可是实行起来很难。',answerPy:'Zhège jìhuà tīng qǐlái búcuò, kěshì shíxíng qǐlái hěn nán.',
      note:'V + 起来: khi bắt tay làm / khi đánh giá.',pair:'V + 起来'}
   ]},

  {n:39,zh:'严厉',py:'yánlì',pos:'Tính từ',vn:'nghiêm khắc, khắt khe',hv:'nghiêm lệ',em:'😠',lesson:1,
   explain:['Nghiêm khắc và dữ dằn (严肃而厉害), nhấn mạnh thái độ, lời nói, cách xử lý nặng tay.','So với 严格 (nghiêm ngặt, đúng quy định): 严厉 nặng về thái độ hơn. Xem phần phân biệt 严厉—严格.'],
   usage:'对……严厉, 严厉地批评, 严厉的目光.',
   collo:['对孩子严厉','严厉地批评','严厉的老师'],
   ex_zh:'这个老师很严厉，谁不做作业都不行。',ex_py:'Zhège lǎoshī hěn yánlì, shéi bú zuò zuòyè dōu bù xíng.',ex_vn:'Thầy giáo này rất nghiêm khắc, ai không làm bài tập cũng không xong.',
   exList:[
     {zh:'这个老师很严厉，谁不做作业都不行。',py:'Zhège lǎoshī hěn yánlì, shéi bú zuò zuòyè dōu bù xíng.',vn:'Thầy giáo này rất nghiêm khắc, ai không làm bài tập cũng không xong.'},
     {zh:'那便是对自己宽容，对孩子严厉。',py:'Nà biàn shì duì zìjǐ kuānróng, duì háizi yánlì.',vn:'Đó chính là dễ dãi với bản thân, nghiêm khắc với con cái.'},
     {zh:'爸爸严厉地批评了弟弟，弟弟哭了。',py:'Bàba yánlì de pīpíngle dìdi, dìdi kū le.',vn:'Bố nghiêm khắc phê bình em trai, em trai khóc.'}
   ],
   colloFull:[
     {zh:'对孩子严厉',py:'duì háizi yánlì',vn:'nghiêm khắc với con'},
     {zh:'严厉地批评',py:'yánlì de pīpíng',vn:'phê bình gay gắt'},
     {zh:'严厉的老师',py:'yánlì de lǎoshī',vn:'giáo viên nghiêm khắc'},
     {zh:'严厉的目光',py:'yánlì de mùguāng',vn:'ánh mắt nghiêm khắc'}
   ],
   patterns:[
     {s:'对 + ai + 严厉',m:'Nghiêm khắc với ai'},
     {s:'严厉地 + 批评 / 说',m:'Phê bình / nói một cách nghiêm khắc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố tôi tuy nghiêm khắc với tôi, nhưng thật ra rất thương tôi.',answer:'我爸爸虽然对我很严厉，但其实很疼爱我。',answerPy:'Wǒ bàba suīrán duì wǒ hěn yánlì, dàn qíshí hěn téng\'ài wǒ.',
      note:'疼爱 (HSK 5 bài 22); 其实 = thật ra.',pair:'虽然……但其实……'},
     {promptLang:'vi',prompt:'Thầy giáo nhìn chúng tôi bằng ánh mắt nghiêm khắc, không ai dám nói gì.',answer:'老师用严厉的目光看着我们，谁也不敢说话。',answerPy:'Lǎoshī yòng yánlì de mùguāng kànzhe wǒmen, shéi yě bù gǎn shuōhuà.',
      note:'谁也不……: không ai….',pair:'谁也不……'}
   ]},

  {n:40,zh:'约束',py:'yuēshù',pos:'Động từ',vn:'ràng buộc, kiềm chế, giữ gìn',hv:'ước thúc',em:'🔒',lesson:1,
   explain:['Hạn chế, quản lý để không vượt ra khỏi phạm vi cho phép (限制使不越出范围).','Hay dùng: 约束自己 (tự kiềm chế), 约束好自己的言行 (giữ gìn lời nói việc làm), 受到约束 (bị gò bó).'],
   usage:'约束 + ai / 言行; 受（到）约束; 不受约束.',
   collo:['约束自己','约束好自己的言行','受到约束'],
   ex_zh:'想当好父母，首先要约束好自己的言行。',ex_py:'Xiǎng dāng hǎo fùmǔ, shǒuxiān yào yuēshù hǎo zìjǐ de yánxíng.',ex_vn:'Muốn làm cha mẹ tốt, trước hết phải giữ gìn lời nói, việc làm của chính mình.',
   exList:[
     {zh:'想当好父母，首先要约束好自己的言行。',py:'Xiǎng dāng hǎo fùmǔ, shǒuxiān yào yuēshù hǎo zìjǐ de yánxíng.',vn:'Muốn làm cha mẹ tốt, trước hết phải giữ gìn lời nói, việc làm của chính mình.'},
     {zh:'他从小就不喜欢受到约束。',py:'Tā cóngxiǎo jiù bù xǐhuan shòudào yuēshù.',vn:'Từ nhỏ cậu ấy đã không thích bị gò bó.'},
     {zh:'学生要学会约束自己，不能想做什么就做什么。',py:'Xuésheng yào xuéhuì yuēshù zìjǐ, bù néng xiǎng zuò shénme jiù zuò shénme.',vn:'Học sinh phải học cách kiềm chế bản thân, không được muốn làm gì thì làm nấy.'}
   ],
   colloFull:[
     {zh:'约束自己',py:'yuēshù zìjǐ',vn:'kiềm chế bản thân'},
     {zh:'约束好自己的言行',py:'yuēshù hǎo zìjǐ de yánxíng',vn:'giữ gìn lời nói việc làm của mình'},
     {zh:'受到约束',py:'shòudào yuēshù',vn:'bị ràng buộc, gò bó'},
     {zh:'不受约束',py:'bú shòu yuēshù',vn:'không bị gò bó'}
   ],
   patterns:[
     {s:'约束（好）+ 自己 / 言行',m:'Kiềm chế, giữ gìn (bản thân / lời nói việc làm)'},
     {s:'受（到）约束',m:'Bị ràng buộc, gò bó'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn dạy con tốt thì trước hết cha mẹ phải kiềm chế được bản thân.',answer:'要想教育好孩子，父母首先要约束好自己。',answerPy:'Yào xiǎng jiàoyù hǎo háizi, fùmǔ shǒuxiān yào yuēshù hǎo zìjǐ.',
      note:'要想……，首先要……: muốn… thì trước hết phải….',pair:'要想……，首先要……'},
     {promptLang:'vi',prompt:'Không có quy định ràng buộc, có người sẽ muốn làm gì thì làm nấy.',answer:'没有规定的约束，有的人就会想做什么就做什么。',answerPy:'Méiyǒu guīdìng de yuēshù, yǒude rén jiù huì xiǎng zuò shénme jiù zuò shénme.',
      note:'Đại từ nghi vấn lặp lại: 想做什么就做什么 = muốn làm gì thì làm nấy.',pair:'什么……就……什么'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 15–16), mỗi đoạn văn một dòng
// 改编自《爱得有分寸，孩子才优秀》文章《别让孩子抓住你的“把柄”》
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 孩子给我们的启示',
   preQuiz:[
     {q:'天天的父母为什么想请“我们”照看天天？',opts:['他们要出差','他们生病了','他们要搬家'],ans:0},
     {q:'听说天天要来，谁最兴奋？',opts:['“我”的老公','林林','天天'],ans:1},
     {q:'林林想用什么欢迎天天？',opts:['一件漂亮的衣服','爸爸最拿手的美味佳肴','自己画的一张画'],ans:1},
     {q:'天天来之前，林林有什么变化？',opts:['变得异常勤劳','变得不爱说话','变得很爱哭'],ans:0},
     {q:'天天来了以后，“我”和老公的日子过得怎么样？',opts:['异常辛苦','异常省心','异常无聊'],ans:1},
     {q:'两个孩子的关系怎么样？',opts:['常常打架','经常闹别扭','非常融洽'],ans:2},
     {q:'看到两个孩子这么亲密，“我”和老公有什么感觉？',opts:['有点儿嫉妒','非常生气','很担心'],ans:0},
     {q:'这天晚上，两个孩子聊天时在做什么？',opts:['讨论作业','在背后议论同学','商量去哪儿玩儿'],ans:1},
     {q:'“我”严肃地对孩子们说了什么？',opts:['看到别人有缺点，应该当面说','不要跟王朵朵一起玩儿','要多跟老师说话'],ans:0},
     {q:'女儿听了父母的话，有什么反应？',opts:['马上认错','一脸疑惑地反问父母','哭了起来'],ans:1},
     {q:'女儿反问以后，屋子里怎么样？',opts:['大家都笑了','鸦雀无声','吵得很厉害'],ans:1},
     {q:'“我们”对自己和对孩子有什么不同？',opts:['对孩子太宽容','对自己宽容，对孩子严厉','对自己太严厉'],ans:1},
     {q:'这件事给“我”的启示是什么？',opts:['孩子不应该议论别人','想当好父母，首先要约束好自己的言行','父母不应该批评孩子'],ans:1}
   ],
   lines:[
    {sp:0,zh:'林林和天天是同学。天天的父母要出差，想请我们帮忙照看几天女儿，我和老公爽快地答应下来，有个孩子和我们的独生女朝夕相处，我们巴不得呢！最兴奋的是林林，嚷着要用爸爸最拿手的美味佳肴欢迎天天来我家，还提出，她的书桌可以和天天共用。看到女儿对伙伴热情无私，我和老公别提多高兴了。',
     py:'Línlín hé Tiāntiān shì tóngxué. Tiāntiān de fùmǔ yào chūchāi, xiǎng qǐng wǒmen bāngmáng zhàokàn jǐ tiān nǚ\'ér, wǒ hé lǎogōng shuǎngkuai de dāying xiàlái, yǒu ge háizi hé wǒmen de dúshēngnǚ zhāoxī xiāngchǔ, wǒmen bābudé ne! Zuì xīngfèn de shì Línlín, rǎngzhe yào yòng bàba zuì náshǒu de měiwèi jiāyáo huānyíng Tiāntiān lái wǒ jiā, hái tíchū, tā de shūzhuō kěyǐ hé Tiāntiān gòngyòng. Kàndào nǚ\'ér duì huǒbàn rèqíng wúsī, wǒ hé lǎogōng biétí duō gāoxìng le.',
     vn:'Lâm Lâm và Thiên Thiên là bạn cùng lớp. Bố mẹ Thiên Thiên phải đi công tác, muốn nhờ vợ chồng tôi trông giúp con gái họ mấy ngày. Tôi và chồng nhận lời ngay không chút đắn đo — có một đứa trẻ ở cùng sớm tối với con gái một của chúng tôi, chúng tôi còn mong chẳng được! Phấn khởi nhất là Lâm Lâm, con bé đòi ầm lên phải dùng món ngon sở trường nhất của bố để đón Thiên Thiên đến nhà, lại còn đề nghị cho Thiên Thiên dùng chung bàn học với mình. Thấy con gái đối với bạn nhiệt tình, không chút ích kỷ, vợ chồng tôi vui khỏi phải nói.'},
    {sp:0,zh:'天天还没来，林林就变得异常勤劳，将屋子收拾得干干净净，东西摆放得整整齐齐，什么好事都想着天天。我家林林虽是女孩，却也绅士风度十足。',
     py:'Tiāntiān hái méi lái, Línlín jiù biànde yìcháng qínláo, jiāng wūzi shōushi de gāngānjìngjìng, dōngxi bǎifàng de zhěngzhěngqíqí, shénme hǎoshì dōu xiǎngzhe Tiāntiān. Wǒ jiā Línlín suī shì nǚhái, què yě shēnshì fēngdù shízú.',
     vn:'Thiên Thiên còn chưa đến, Lâm Lâm đã trở nên chăm chỉ lạ thường, dọn dẹp nhà cửa sạch bong, đồ đạc bày biện ngăn nắp, việc gì tốt cũng nghĩ đến Thiên Thiên. Lâm Lâm nhà tôi tuy là con gái nhưng cũng rất có phong thái quý ông.'},
    {sp:0,zh:'天天的到来，使我和老公的日子过得异常省心。两个孩子每天早上不用叫就醒了，上学不用接送，做作业不用督促；她们不打架，不闹别扭，关系别提多融洽了。看到女儿和天天这么亲密，大有忽略我们的趋势，我和老公都有点儿嫉妒了。',
     py:'Tiāntiān de dàolái, shǐ wǒ hé lǎogōng de rìzi guò de yìcháng shěngxīn. Liǎng ge háizi měi tiān zǎoshang búyòng jiào jiù xǐng le, shàngxué búyòng jiēsòng, zuò zuòyè búyòng dūcù; tāmen bù dǎjià, bú nào bièniu, guānxi biétí duō róngqià le. Kàndào nǚ\'ér hé Tiāntiān zhème qīnmì, dà yǒu hūlüè wǒmen de qūshì, wǒ hé lǎogōng dōu yǒudiǎnr jídù le.',
     vn:'Thiên Thiên đến ở khiến những ngày của vợ chồng tôi trôi qua nhàn nhã lạ thường. Sáng nào hai đứa cũng tự dậy không cần gọi, đi học không cần đưa đón, làm bài tập không cần giục; hai đứa không đánh nhau, không giận dỗi, quan hệ hoà hợp khỏi phải nói. Thấy con gái và Thiên Thiên thân thiết như thế, xem chừng sắp "bỏ rơi" cả chúng tôi, vợ chồng tôi đều thấy hơi ghen tị.'},
    {sp:0,zh:'这天晚上，两个孩子做完作业，开始滔滔不绝地聊了起来，一个说，我不喜欢王朵朵，她就喜欢跟穿得漂亮的同学一起玩儿，还老嘲笑别人。另一个说我讨厌高春来，他最会讨好老师了……',
     py:'Zhè tiān wǎnshang, liǎng ge háizi zuòwán zuòyè, kāishǐ tāotāo bù jué de liáole qǐlái, yí ge shuō, wǒ bù xǐhuan Wáng Duǒduǒ, tā jiù xǐhuan gēn chuān de piàoliang de tóngxué yìqǐ wánr, hái lǎo cháoxiào biérén. Lìng yí ge shuō wǒ tǎoyàn Gāo Chūnlái, tā zuì huì tǎo hǎo lǎoshī le……',
     vn:'Tối hôm ấy, hai đứa làm xong bài tập liền bắt đầu nói chuyện rôm rả không dứt. Một đứa bảo: con không thích Vương Đoá Đoá, bạn ấy chỉ thích chơi với những bạn ăn mặc đẹp, lại còn hay chê cười người khác. Đứa kia bảo con ghét Cao Xuân Lai, cậu ta giỏi nịnh thầy cô nhất…'},
    {sp:0,zh:'我和老公对视一眼，这么小的孩子怎么学会了背后议论人。我郑重地走到她们跟前，严肃地说：“看到别人有缺点，应该当面说，背后说人家的坏话不好。”老公也在旁边附和：“大伙儿要和睦相处，对人要宽容。”女儿却是一脸的疑惑，反问道：“你们不是也有时候说，哪个朋友好相处，哪个朋友很自私吗？”瞬间我和老公被问得说不出话来，屋子里鸦雀无声。',
     py:'Wǒ hé lǎogōng duìshì yì yǎn, zhème xiǎo de háizi zěnme xuéhuìle bèihòu yìlùn rén. Wǒ zhèngzhòng de zǒudào tāmen gēnqián, yánsù de shuō: “Kàndào biérén yǒu quēdiǎn, yīnggāi dāngmiàn shuō, bèihòu shuō rénjia de huàihuà bù hǎo.” Lǎogōng yě zài pángbiān fùhè: “Dàhuǒr yào hémù xiāngchǔ, duì rén yào kuānróng.” Nǚ\'ér què shì yì liǎn de yíhuò, fǎnwèn dào: “Nǐmen bú shì yě yǒu shíhou shuō, nǎge péngyou hǎo xiāngchǔ, nǎge péngyou hěn zìsī ma?” Shùnjiān wǒ hé lǎogōng bèi wèn de shuō bu chū huà lái, wūzi li yāquè wúshēng.',
     vn:'Vợ chồng tôi đưa mắt nhìn nhau: trẻ con bé thế này sao đã học được cái thói bàn tán người khác sau lưng. Tôi nghiêm trang bước đến trước mặt hai đứa, nghiêm nghị nói: "Thấy người khác có khuyết điểm thì nên nói thẳng trước mặt, nói xấu người ta sau lưng là không tốt." Chồng tôi cũng phụ hoạ bên cạnh: "Mọi người phải sống hoà thuận, đối với người khác phải bao dung." Con gái thì mặt đầy vẻ khó hiểu, hỏi ngược lại: "Chẳng phải bố mẹ cũng có lúc nói bạn này dễ gần, bạn kia ích kỷ lắm sao?" Trong phút chốc, vợ chồng tôi bị hỏi đến cứng họng, căn phòng im phăng phắc.'},
    {sp:0,zh:'人们常说，启蒙老师的重要性不可忽视，父母就是孩子的第一任老师，这话确实不假，可如果这次不是女儿反驳，我还意识不到，我们自己的做法和对孩子的要求实行的是两套标准，那便是对自己宽容，对孩子严厉。孩子也可以是我们的老师啊。',
     py:'Rénmen cháng shuō, qǐméng lǎoshī de zhòngyàoxìng bù kě hūshì, fùmǔ jiù shì háizi de dì-yī rèn lǎoshī, zhè huà quèshí bù jiǎ, kě rúguǒ zhè cì bú shì nǚ\'ér fǎnbó, wǒ hái yìshí bú dào, wǒmen zìjǐ de zuòfǎ hé duì háizi de yāoqiú shíxíng de shì liǎng tào biāozhǔn, nà biàn shì duì zìjǐ kuānróng, duì háizi yánlì. Háizi yě kěyǐ shì wǒmen de lǎoshī a.',
     vn:'Người ta thường nói, tầm quan trọng của người thầy vỡ lòng không thể xem nhẹ, cha mẹ chính là người thầy đầu tiên của con cái. Lời này quả thật không sai. Nhưng nếu lần này không phải con gái bắt bẻ, tôi vẫn chưa nhận ra rằng cách làm của chính chúng tôi và yêu cầu đối với con cái đang áp dụng hai tiêu chuẩn khác nhau: dễ dãi với bản thân, nghiêm khắc với con cái. Con trẻ cũng có thể là thầy của chúng ta đấy.'},
    {sp:0,zh:'说真的，这次是孩子给我上了一课：我深深地感到，想当好父母，首先要约束好自己的言行。',
     py:'Shuō zhēn de, zhè cì shì háizi gěi wǒ shàngle yí kè: wǒ shēnshēn de gǎndào, xiǎng dāng hǎo fùmǔ, shǒuxiān yào yuēshù hǎo zìjǐ de yánxíng.',
     vn:'Nói thật, lần này chính con đã dạy cho tôi một bài học: tôi thấm thía rằng muốn làm cha mẹ tốt, trước hết phải giữ gìn lời nói, việc làm của chính mình.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 人家—别人 lấy từ sách (tr. 18–19, 做一做 bảng 3 cột); 严厉—严格 lấy từ 练习 2 ④; 融洽—和睦 từ bài khoá
// ══════════════════════════════════════════
var synonymData = [
  {pair:'人家 — 别人',
   same:'Đều là ĐẠI TỪ, đều có thể chỉ người ngoài người nói và người nghe, không chỉ đích danh ai (不确指). Ở nghĩa này thay nhau được.',
   sameEx:{zh:'人家／别人都这么说，可是我不相信。',vn:'Người ta ai cũng nói vậy, nhưng tôi không tin.'},
   items:[
     {word:'人家',points:[
       'Chỉ "người khác" chung chung (= 别人).',
       'Chỉ đích danh một người / nhóm người ĐÃ NHẮC ở trước (≈ 他 / 他们).',
       'Chỉ CHÍNH người nói (= 我), giọng thân mật, tinh nghịch — hay dùng khi con gái làm nũng.'
     ],ex:[{zh:'李阳天天帮我复习功课，我要是考不好，都对不起人家（指李阳）。',vn:'Lý Dương ngày nào cũng giúp tôi ôn bài, tôi mà thi không tốt thì thật có lỗi với cậu ấy (chỉ Lý Dương).'},
          {zh:'你跑慢点儿行不行？人家跟不上。',vn:'Anh chạy chậm chút được không? Người ta (em) theo không kịp.'}]},
     {word:'别人',points:[
       'Chỉ người khác ngoài bản thân, không xác định là ai.',
       'KHÔNG dùng để chỉ một người cụ thể đã nhắc ở trước.',
       'KHÔNG dùng để chỉ chính người nói.'
     ],ex:[{zh:'看到别人有缺点，应该当面说。',vn:'Thấy người khác có khuyết điểm thì nên nói thẳng trước mặt.'},
          {zh:'别人的东西不能随便拿。',vn:'Đồ của người khác không được tuỳ tiện lấy.'}]}
   ],
   quiz:[
     {sentence:'我说了我的观点，可是＿＿都不同意。',options:['人家','别人'],answer:0,both:true,
      why:'Chỉ người khác nói chung — cả 人家 và 别人 đều được.'},
     {sentence:'你昨天借了小王100块钱，今天别忘了还给＿＿！',options:['人家','别人'],answer:0,
      why:'Chỉ 小王 đã nhắc ở vế trước (= 他) — chỉ 人家 làm được.'},
     {sentence:'你把我的生日都忘了，＿＿能不生气吗？',options:['人家','别人'],answer:0,
      why:'Chỉ chính người nói (= 我), giọng hờn dỗi — chỉ 人家.'},
     {sentence:'除了小王，＿＿都到了。',options:['人家','别人'],answer:1,
      why:'"Những người còn lại" sau 除了…… dùng 别人; 人家 ở đây nghe không tự nhiên.'}
   ],
   sgk:{
     chung:{t:'都是代词。都可以指说话人或听话人以外的人。不确指。',vn:'Đều là đại từ. Đều có thể chỉ người ngoài người nói và người nghe. Không chỉ đích danh.',vd:'人家／别人都这么说，可是我不相信。',vdVn:'Người ta ai cũng nói vậy, nhưng tôi không tin.'},
     khac:[
       {a:{t:'可以确指某个人或某些人。所说的人在上文已经出现。大致等于“他”或“他们”。',vn:'Có thể chỉ đích danh một người hoặc một số người; người đó đã xuất hiện ở phần trước. Gần bằng 他 hoặc 他们.',vd:'李阳天天帮我复习功课，我要是考不好，都对不起人家（指李阳）。',vdVn:'Lý Dương ngày nào cũng giúp tôi ôn bài, tôi mà thi không tốt thì thật có lỗi với cậu ấy (chỉ Lý Dương).'},
        b:{t:'没有这个用法。',vn:'Không có cách dùng này.'}},
       {a:{t:'可以指说话人自己，等于“我”。（有亲热和俏皮的意味，多在女生撒娇时使用）',vn:'Có thể chỉ chính người nói, bằng 我 (có ý thân mật, tinh nghịch, thường dùng khi con gái làm nũng).',vd:'你跑慢点儿行不行？人家跟不上。',vdVn:'Anh chạy chậm chút được không? Người ta (em) theo không kịp.'},
        b:{t:'没有这个用法。',vn:'Không có cách dùng này.'}}
     ],
     de:'下列句子中的“人家”指的是什么？在正确答案下打钩',
     deVn:'"人家" trong các câu dưới đây chỉ ai? Đánh dấu vào cột đúng.',
     cot:['别人','前边说过的人','说话人自己'],
     lamThu:[
       {s:'我说了我的观点，可是人家都不同意。',dap:[true,false,false],mau:true,
        giai:'人家 ở đây chỉ người khác nói chung (= 别人) — câu mẫu, sách đã đánh dấu sẵn.'},
       {s:'你老给小丽打电话，不知道人家喜欢不喜欢你啊！',dap:[false,true,false],
        giai:'人家 chỉ 小丽 — người đã nhắc ở vế trước (= 她).'},
       {s:'你把我的生日都忘了，人家能不生气吗？',dap:[false,false,true],
        giai:'人家 = 我 (người nói), giọng hờn dỗi, làm nũng.'},
       {s:'你昨天借了小王100块钱，今天别忘了还给人家！',dap:[false,true,false],
        giai:'人家 chỉ 小王 đã nhắc ở vế trước (= 他).'}
     ]
   }},

  {pair:'严厉 — 严格',
   same:'Đều là tính từ, đều nói về sự nghiêm, không dễ dãi; đều nói được 对……很严厉 / 很严格.',
   sameEx:{zh:'王老师对学生很严厉／严格。',vn:'Thầy Vương rất nghiêm với học sinh.'},
   items:[
     {word:'严厉',points:[
       'Nhấn mạnh THÁI ĐỘ, lời lẽ, cách xử lý nghiêm khắc, gay gắt, khiến người ta sợ.',
       'Hay đi với 批评, 目光, 语气, 惩罚.',
       'Chỉ là tính từ, không mang tân ngữ.'
     ],ex:[{zh:'爸爸严厉地批评了弟弟。',vn:'Bố nghiêm khắc phê bình em trai.'},
          {zh:'这个老师很严厉，谁不做作业都不行。',vn:'Thầy giáo này rất nghiêm khắc, ai không làm bài tập cũng không xong.'}]},
     {word:'严格',points:[
       'Nhấn mạnh việc làm đúng QUY ĐỊNH, tiêu chuẩn, không lơi lỏng.',
       'Hay đi với 要求, 管理, 遵守, 标准, 检查.',
       'Còn làm ĐỘNG TỪ: 严格要求自己, 严格纪律.'
     ],ex:[{zh:'我们要严格遵守学校的规定。',vn:'Chúng ta phải tuân thủ nghiêm ngặt quy định của trường.'},
          {zh:'他对自己要求很严格。',vn:'Anh ấy yêu cầu rất nghiêm với bản thân.'}]}
   ],
   quiz:[
     {sentence:'这家工厂的产品质量检查非常＿＿。',options:['严厉','严格'],answer:1,why:'Kiểm tra theo tiêu chuẩn, quy định → 严格.'},
     {sentence:'他＿＿地批评了那个迟到的学生。',options:['严厉','严格'],answer:0,why:'Thái độ phê bình gay gắt → 严厉地批评.'},
     {sentence:'我们要＿＿遵守交通规则。',options:['严厉','严格'],answer:1,why:'Tuân thủ đúng quy tắc → 严格遵守.'},
     {sentence:'老师用＿＿的目光看了我一眼，我马上不说话了。',options:['严厉','严格'],answer:0,why:'Ánh mắt nghiêm khắc (thái độ) → 严厉的目光.'}
   ]},

  {pair:'融洽 — 和睦',
   same:'Đều là tính từ, nói về quan hệ tốt, hoà hợp giữa người với người; đều nói được 相处得很融洽 / 很和睦.',
   sameEx:{zh:'他们一家人相处得很融洽／和睦。',vn:'Cả nhà họ sống với nhau rất hoà thuận.'},
   items:[
     {word:'融洽',points:[
       'Nhấn mạnh tình cảm hoà hợp, gần gũi, không có khoảng cách.',
       'Chủ ngữ rộng: 关系, 气氛, 感情, 同事之间….',
       'Nói được 气氛融洽 (không khí êm ấm) — 和睦 không nói được.'
     ],ex:[{zh:'晚会的气氛非常融洽。',vn:'Không khí buổi liên hoan rất êm ấm.'},
          {zh:'两个孩子关系别提多融洽了。',vn:'Quan hệ của hai đứa hoà hợp khỏi phải nói.'}]},
     {word:'和睦',points:[
       'Nhấn mạnh sống yên ổn, không cãi cọ, không xung đột.',
       'Chủ yếu dùng cho gia đình, hàng xóm, dân tộc, quốc gia: 家庭和睦, 邻里和睦.',
       'Hay đi thành cụm 和睦相处; lặp AABB: 和和睦睦.'
     ],ex:[{zh:'大伙儿要和睦相处，对人要宽容。',vn:'Mọi người phải sống hoà thuận, đối với người khác phải bao dung.'},
          {zh:'我们家一直都很和睦。',vn:'Nhà tôi từ trước đến nay luôn hoà thuận.'}]}
   ],
   quiz:[
     {sentence:'会议的气氛很＿＿，大家有说有笑。',options:['融洽','和睦'],answer:0,why:'Nói về không khí (气氛) → 融洽; 和睦 không đi với 气氛.'},
     {sentence:'家庭＿＿是孩子健康成长的重要条件。',options:['融洽','和睦'],answer:1,why:'Cụm quen dùng 家庭和睦 (gia đình hoà thuận, không cãi cọ).'},
     {sentence:'我希望两国人民永远＿＿相处。',options:['融洽','和睦'],answer:1,why:'Giữa các dân tộc, quốc gia dùng 和睦相处 (chung sống hoà bình).'},
     {sentence:'新同事很快就和大家打成一片，相处得十分＿＿。',options:['融洽','和睦'],answer:0,both:true,
      why:'Làm bổ ngữ sau 相处得 — cả hai đều được; với quan hệ đồng nghiệp 融洽 tự nhiên hơn.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'宽容',hv:'khoan dung',vn:'khoan dung, bao dung',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'郑重',hv:'trịnh trọng',vn:'trịnh trọng, nghiêm túc',note:'Trùng khít.'},
    {zh:'反驳',hv:'phản bác',vn:'phản bác',note:'Trùng khít.'},
    {zh:'疑惑',hv:'nghi hoặc',vn:'nghi hoặc, băn khoăn',note:'Trùng khít.'},
    {zh:'亲密',hv:'thân mật',vn:'thân thiết',note:'Gần khít — tiếng Trung nghiêng về QUAN HỆ thân thiết (亲密的朋友).'},
    {zh:'意识',hv:'ý thức',vn:'ý thức; nhận ra',note:'Tiếng Việt chủ yếu là danh từ; tiếng Trung còn là động từ: 意识到 = nhận ra.'},
    {zh:'嫉妒',hv:'tật đố',vn:'ghen tị, đố kỵ',note:'"Đố" trong "đố kỵ". Tiếng Trung còn có 妒忌 cùng nghĩa.'},
    {zh:'严厉',hv:'nghiêm lệ',vn:'nghiêm khắc',note:'"Nghiêm" = nghiêm, "lệ" = dữ dằn (như "lệ khí") → nghiêm và dữ.'},
    {zh:'和睦',hv:'hoà mục',vn:'hoà thuận',note:'"Hoà mục" là từ cổ của tiếng Việt, nay nói "hoà thuận".'},
    {zh:'启蒙',hv:'khải mông',vn:'vỡ lòng, khai tâm',note:'"Mông" = mờ tối, "khải" = mở ra → mở mang trí óc cho người mới học.'},
    {zh:'瞬间',hv:'thuấn gian',vn:'phút chốc, khoảnh khắc',note:'"Thuấn" = chớp mắt → khoảng thời gian một cái chớp mắt.'}
  ],
  idiom:[
    {zh:'滔滔不绝',hv:'thao thao bất tuyệt',vn:'nói mãi không dứt',note:'Tiếng Việt dùng nguyên thành ngữ này — nghĩa y hệt.'},
    {zh:'鸦雀无声',hv:'nha tước vô thanh',vn:'im phăng phắc, lặng ngắt như tờ',note:'"Quạ, sẻ cũng không kêu" → yên lặng tuyệt đối.'},
    {zh:'美味佳肴',hv:'mỹ vị giai hào',vn:'món ngon vật lạ',note:'Gần với "cao lương mỹ vị", "sơn hào hải vị".'},
    {zh:'朝夕相处',hv:'triêu tịch tương xử',vn:'sớm tối có nhau',note:'"Triêu" = sáng, "tịch" = chiều tối → ở bên nhau suốt ngày.'}
  ],
  trap:[
    {zh:'打架',hv:'đả giá',vn:'đánh nhau',
     warn:'BẪY: không phải "đánh giá"! "Đánh giá" tiếng Trung là 评价. 打架 là ẩu đả, đánh nhau.'},
    {zh:'实行',hv:'thực hành',vn:'thi hành, áp dụng',
     warn:'"Thực hành" tiếng Việt là luyện tập thực tế (tiếng Trung: 实践 / 实习). 实行 là đưa chế độ, chính sách, tiêu chuẩn vào áp dụng.'},
    {zh:'异常',hv:'dị thường',vn:'cực kỳ; khác thường',
     warn:'Tiếng Việt "dị thường" chỉ có nghĩa lạ, bất thường. Trong bài 异常 là PHÓ TỪ = cực kỳ (异常兴奋 = cực kỳ phấn khởi), không dịch "phấn khởi bất thường".'},
    {zh:'风度',hv:'phong độ',vn:'phong thái, cốt cách',
     warn:'"Phong độ" tiếng Việt còn chỉ thể lực, phong độ thi đấu (tiếng Trung: 状态). 风度 chỉ nói về cử chỉ, thái độ đẹp của con người.'},
    {zh:'绅士',hv:'thân sĩ',vn:'quý ông, người lịch thiệp',
     warn:'"Thân sĩ" tiếng Việt là tầng lớp quan lại, người có thế lực ở địa phương thời xưa. 绅士 hiện đại = quý ông (gentleman), 很绅士 = rất ga-lăng.'},
    {zh:'讨好',hv:'thảo hảo',vn:'lấy lòng, nịnh',
     warn:'"Thảo" ở đây không phải cỏ, cũng không phải "thảo luận" — 讨 = xin, đòi → đi xin sự yêu mến = lấy lòng.'},
    {zh:'老公',hv:'lão công',vn:'chồng',
     warn:'Không phải "ông lão". 老公 là cách vợ gọi chồng thân mật; đối lại là 老婆 (vợ).'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá + bảng 扩展 2 词汇：熟悉下列词语搭配 (tr. 23)
// ══════════════════════════════════════════
var matchData = [
  {left:'爽快地',right:'答应'},
  {left:'美味',right:'佳肴'},
  {left:'绅士风度',right:'十足'},
  {left:'闹',right:'别扭'},
  {left:'和睦',right:'相处'},
  {left:'滔滔不绝地',right:'聊了起来'},
  {left:'背后',right:'议论人'},
  {left:'一脸的',right:'疑惑'},
  {left:'对视',right:'一眼'},
  {left:'第一任',right:'老师'},
  {left:'实行',right:'两套标准'},
  {left:'约束好',right:'自己的言行'},
  {left:'对孩子',right:'严厉'},
  {left:'督促',right:'孩子做作业'},
  {left:'关系',right:'融洽'},
  {left:'异常',right:'兴奋'},
  {left:'十分',right:'留恋'},
  {left:'性格',right:'开朗'},
  {left:'说',right:'闲话'},
  {left:'幽默',right:'风趣'},
  {left:'个人',right:'恩怨'},
  {left:'口齿',right:'伶俐'},
  {left:'挑拨',right:'离间'},
  {left:'容貌',right:'秀美'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài một câu
// ══════════════════════════════════════════
var fillData = [
  {pre:'这件小事给了我很大的',blank:'启示',post:'。',hint:'(bài học, sự gợi mở)',ans:'启示'},
  {pre:'天天的父母想请我们帮忙，我和',blank:'老公',post:'爽快地答应下来。',hint:'(chồng — khẩu ngữ)',ans:'老公'},
  {pre:'我请她帮忙，她想都没想就',blank:'爽快',post:'地答应了。',hint:'(thẳng thắn, dứt khoát)',ans:'爽快'},
  {pre:'就快到春节了，在外地打工的他',blank:'巴不得',post:'马上回到老家。',hint:'(chỉ mong sao)',ans:'巴不得'},
  {pre:'弟弟一进门就',blank:'嚷',post:'着要吃冰激凌。',hint:'(la hét, đòi ầm lên)',ans:'嚷'},
  {pre:'西红柿炒鸡蛋是爸爸的',blank:'拿手',post:'菜。',hint:'(sở trường)',ans:'拿手'},
  {pre:'春节的时候，桌子上摆满了美味',blank:'佳肴',post:'。',hint:'(món ngon)',ans:'佳肴'},
  {pre:'听到这个消息，大家',blank:'异常',post:'兴奋，忍不住欢呼起来。',hint:'(cực kỳ — văn viết)',ans:'异常'},
  {pre:'天天还没来，林林就变得异常',blank:'勤劳',post:'，将屋子收拾得干干净净。',hint:'(siêng năng)',ans:'勤劳'},
  {pre:'他总是让女士先走，特别',blank:'绅士',post:'。',hint:'(lịch thiệp, ga-lăng)',ans:'绅士'},
  {pre:'不管输赢，他都很有',blank:'风度',post:'。',hint:'(phong thái)',ans:'风度'},
  {pre:'比赛前，队员们个个信心',blank:'十足',post:'。',hint:'(tràn đầy)',ans:'十足'},
  {pre:'两个孩子上学不用接送，做作业不用',blank:'督促',post:'。',hint:'(đốc thúc)',ans:'督促'},
  {pre:'小时候我常跟哥哥',blank:'打架',post:'，现在我们却是最好的朋友。',hint:'(đánh nhau)',ans:'打架'},
  {pre:'他们俩又闹',blank:'别扭',post:'了，谁也不理谁。',hint:'(giận dỗi, xích mích)',ans:'别扭'},
  {pre:'同事们相处得很',blank:'融洽',post:'，工作起来也特别愉快。',hint:'(hoà hợp)',ans:'融洽'},
  {pre:'看到女儿和天天这么',blank:'亲密',post:'，我和老公都有点儿嫉妒了。',hint:'(thân thiết)',ans:'亲密'},
  {pre:'工作再忙，也不能',blank:'忽略',post:'家人的感受。',hint:'(lơ là, bỏ qua)',ans:'忽略'},
  {pre:'一定是有人',blank:'嫉妒',post:'我们关系好，故意那么说的。',hint:'(ghen tị)',ans:'嫉妒'},
  {pre:'一说起足球，他就',blank:'滔滔不绝',post:'，谁也拦不住。',hint:'(nói mãi không dứt)',ans:'滔滔不绝'},
  {pre:'别人说错了，我们不应该',blank:'嘲笑',post:'，而应该帮助。',hint:'(chê cười)',ans:'嘲笑'},
  {pre:'他总是说些好听的话',blank:'讨好',post:'老板。',hint:'(lấy lòng)',ans:'讨好'},
  {pre:'校长',blank:'郑重',post:'地宣布：明天学校放假一天。',hint:'(trịnh trọng)',ans:'郑重'},
  {pre:'有什么意见就',blank:'当面',post:'说，别在背后议论。',hint:'(trước mặt, trực tiếp)',ans:'当面'},
  {pre:'看到别人有缺点，应该当面说，背后说',blank:'人家',post:'的坏话不好。',hint:'(người ta)',ans:'人家'},
  {pre:'他没有自己的看法，总是',blank:'附和',post:'别人。',hint:'(hùa theo)',ans:'附和'},
  {pre:'别着急，',blank:'大伙儿',post:'一起动手，一会儿就能把教室打扫干净。',hint:'(mọi người — khẩu ngữ)',ans:'大伙儿'},
  {pre:'邻居之间应该',blank:'和睦',post:'相处，互相帮助。',hint:'(hoà thuận)',ans:'和睦'},
  {pre:'我老公很',blank:'宽容',post:'，能原谅伤害过他的人。',hint:'(bao dung)',ans:'宽容'},
  {pre:'女儿却是一脸的',blank:'疑惑',post:'。',hint:'(nghi hoặc, khó hiểu)',ans:'疑惑'},
  {pre:'小丽笑了，',blank:'反问',post:'道：“你觉得我会说那样的话吗？”',hint:'(hỏi ngược lại)',ans:'反问'},
  {pre:'看到妈妈的那一',blank:'瞬间',post:'，她的眼泪流了下来。',hint:'(khoảnh khắc)',ans:'瞬间'},
  {pre:'老师一走进来，教室里一下子',blank:'鸦雀无声',post:'。',hint:'(im phăng phắc)',ans:'鸦雀无声'},
  {pre:'我的汉语',blank:'启蒙',post:'老师是一位很有耐心的女老师。',hint:'(vỡ lòng)',ans:'启蒙'},
  {pre:'他是我们学校的第三',blank:'任',post:'校长。',hint:'(lượng từ: đời, khoá)',ans:'任'},
  {pre:'他的理由很充分，大家都无法',blank:'反驳',post:'。',hint:'(phản bác)',ans:'反驳'},
  {pre:'直到考试没通过，他才',blank:'意识',post:'到复习的重要性。',hint:'(nhận ra)',ans:'意识'},
  {pre:'从下个月起，公司开始',blank:'实行',post:'新的上班制度。',hint:'(thi hành, áp dụng)',ans:'实行'},
  {pre:'爸爸',blank:'严厉',post:'地批评了弟弟，弟弟哭了。',hint:'(nghiêm khắc)',ans:'严厉'},
  {pre:'想当好父母，首先要',blank:'约束',post:'好自己的言行。',hint:'(kiềm chế, giữ gìn)',ans:'约束'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (巴不得 · 别提多……了 · 同义词的语体差别) ít nhất 3 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['我','巴不得','马上','回家','见到妈妈','。'],ans:'我巴不得马上回家见到妈妈。',audio:'我巴不得马上回家见到妈妈。'},
  {words:['有个孩子','和我们的独生女','朝夕相处','，','我们','巴不得呢','！'],ans:'有个孩子和我们的独生女朝夕相处，我们巴不得呢！',audio:'有个孩子和我们的独生女朝夕相处，我们巴不得呢！'},
  {words:['他','巴不得','天天','都','放假','。'],ans:'他巴不得天天都放假。',audio:'他巴不得天天都放假。'},
  {words:['看到女儿对伙伴热情无私','，','我和老公','别提多','高兴','了','。'],ans:'看到女儿对伙伴热情无私，我和老公别提多高兴了。',audio:'看到女儿对伙伴热情无私，我和老公别提多高兴了。'},
  {words:['这件事情','别提多','复杂','了','。'],ans:'这件事情别提多复杂了。',audio:'这件事情别提多复杂了。'},
  {words:['她们俩的','关系','别提多','融洽','了','。'],ans:'她们俩的关系别提多融洽了。',audio:'她们俩的关系别提多融洽了。'},
  {words:['林林','将','屋子','收拾得','干干净净','。'],ans:'林林将屋子收拾得干干净净。',audio:'林林将屋子收拾得干干净净。'},
  {words:['女儿','一脸疑惑地','反问道','：','“你们不是也这样说吗？”'],ans:'女儿一脸疑惑地反问道：“你们不是也这样说吗？”',audio:'女儿一脸疑惑地反问道：“你们不是也这样说吗？”'},
  {words:['那','便是','对自己宽容','，','对孩子严厉','。'],ans:'那便是对自己宽容，对孩子严厉。',audio:'那便是对自己宽容，对孩子严厉。'},
  {words:['两个孩子','开始','滔滔不绝地','聊了','起来','。'],ans:'两个孩子开始滔滔不绝地聊了起来。',audio:'两个孩子开始滔滔不绝地聊了起来。'},
  {words:['看到别人有缺点','，','应该','当面','说','。'],ans:'看到别人有缺点，应该当面说。',audio:'看到别人有缺点，应该当面说。'},
  {words:['想当好父母','，','首先要','约束好','自己的言行','。'],ans:'想当好父母，首先要约束好自己的言行。',audio:'想当好父母，首先要约束好自己的言行。'},
  {words:['我和老公','被','问得','说不出话来','。'],ans:'我和老公被问得说不出话来。',audio:'我和老公被问得说不出话来。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'天天的父母想请我们帮忙，我和老公____地答应下来。',opts:['爽快','严厉','勤劳','别扭'],ans:0,
   exp:'Nhận lời ngay, không đắn đo → 爽快地答应. 严厉 là nghiêm khắc; 勤劳 là siêng năng (không tả cách nhận lời); 别扭 là gượng gạo, khó chịu — trái ý câu.'},
  {wrong:'有人请你玩儿你还不去？这样的好事我____呢！',opts:['巴不得','舍不得','怪不得','来不及'],ans:0,
   exp:'Mong còn chẳng được → 巴不得呢. 舍不得 (HSK 5) là không nỡ; 怪不得 là thảo nào; 来不及 là không kịp.'},
  {wrong:'看到他们两个相处得这么好，我别提多高兴____。',opts:['了','的','过','着'],ans:0,
   exp:'Cấu trúc cố định 别提多……了 — cuối câu phải là 了.'},
  {wrong:'这件事情别提____复杂了，我一个人根本处理不了。',opts:['多','很','太','非常'],ans:0,
   exp:'别提多 + tính từ + 了 là cấu trúc cố định; không thay 多 bằng 很 / 太 / 非常.'},
  {wrong:'她们不____，不闹别扭，关系别提多融洽了。',opts:['打架','打听','打针','打工'],ans:0,
   exp:'Nói về quan hệ không tốt → 打架 (đánh nhau). 打听 là dò hỏi, 打针 là tiêm, 打工 là làm thuê — cùng chữ 打 (练习 1) nhưng nghĩa khác hẳn.'},
  {wrong:'看到别人有缺点，应该____说，背后说人家的坏话不好。',opts:['当面','表面','对面','方面'],ans:0,
   exp:'Đối lập với 背后 (sau lưng) là 当面 (trước mặt). 表面 là bề ngoài; 对面 là phía đối diện; 方面 là phương diện.'},
  {wrong:'老公也在旁边____：“大伙儿要和睦相处，对人要宽容。”',opts:['附和','反驳','嘲笑','嫉妒'],ans:0,
   exp:'Nói theo cho cùng ý với vợ → 附和. 反驳 là phản bác (ngược ý); 嘲笑 là chê cười; 嫉妒 là ghen tị.'},
  {wrong:'女儿却是一脸的____，反问道：“你们不是也有时候说……吗？”',opts:['疑惑','启示','风度','瞬间'],ans:0,
   exp:'Vẻ mặt khó hiểu trước khi hỏi vặn → 一脸的疑惑. 启示 là bài học; 风度 là phong thái; 瞬间 là khoảnh khắc.'},
  {wrong:'父母就是孩子的第一____老师。',opts:['任','次','届','件'],ans:0,
   exp:'Đếm đời / lượt người giữ một vai trò → 第一任老师. 次 đếm số lần; 届 đếm khoá, kỳ (第一届学生); 件 đếm việc, quần áo.'},
  {wrong:'我们对自己宽容，对孩子____，实行的是两套标准。',opts:['严厉','亲密','融洽','爽快'],ans:0,
   exp:'Đối lập với 宽容 (dễ dãi) là 严厉 (nghiêm khắc). Các từ còn lại đều mang nghĩa tích cực, không tạo thế đối lập.'},
  {wrong:'想当好父母，首先要____好自己的言行。',opts:['约束','督促','忽略','实行'],ans:0,
   exp:'Giữ gìn, kiềm chế lời nói việc làm → 约束好自己的言行. 督促 là đốc thúc người khác; 忽略 là bỏ qua; 实行 đi với chế độ, tiêu chuẩn.'},
  {wrong:'看到女儿和天天这么亲密，大有____我们的趋势。',opts:['忽略','讨好','附和','反问'],ans:0,
   exp:'Mải chơi với bạn, không để ý đến bố mẹ → 忽略我们. 讨好 là lấy lòng — ngược nghĩa; 附和 là hùa theo; 反问 là hỏi vặn.'},
  {wrong:'我讨厌高春来，他最会____老师了。',opts:['讨好','督促','反驳','启蒙'],ans:0,
   exp:'Bị ghét vì hay nịnh thầy cô → 讨好老师. 督促 là việc của thầy với trò; 反驳老师 là cãi lại; 启蒙 là dạy vỡ lòng.'},
  {wrong:'她不仅爽快，还很健谈，跟谁都能____，聊起来没完。',opts:['滔滔不绝','鸦雀无声','朝夕相处','目瞪口呆'],ans:0,
   exp:'Nói chuyện không dứt → 滔滔不绝 (练一练 注释 3). 鸦雀无声 là im phăng phắc; 朝夕相处 là sớm tối bên nhau; 目瞪口呆 là sững sờ.'},
  {wrong:'校长一走上台，全场一下子____。',opts:['鸦雀无声','滔滔不绝','水泄不通','目瞪口呆'],ans:0,
   exp:'Cả hội trường im bặt → 鸦雀无声. 滔滔不绝 là nói mãi; 水泄不通 là chật như nêm; 目瞪口呆 là sững sờ (tả người, không tả nơi chốn).'},
  {wrong:'如果这次不是女儿反驳，我还____不到自己的问题。',opts:['意识','意见','知识','常识'],ans:0,
   exp:'Nhận ra → 意识不到 (bổ ngữ khả năng). 意见, 知识, 常识 đều là danh từ, không đi với 不到.'},
  {wrong:'你把我的生日都忘了，____能不生气吗？',opts:['人家','别人','大家','大伙儿'],ans:0,
   exp:'Chỉ chính người nói với giọng hờn dỗi → 人家 (= 我). 别人, 大家, 大伙儿 đều không chỉ được người nói.'},
  {wrong:'我刚说完，同桌就站起来____我的观点，说我的理由不充分。',opts:['反驳','反问','相反','反而'],ans:0,
   exp:'Đưa lý lẽ để bác bỏ quan điểm → 反驳. 反问 là hỏi vặn (không mang 观点 làm tân ngữ); 相反 là tính từ "trái ngược"; 反而 là liên từ "trái lại".'},
  {wrong:'在妈妈的____下，我每天坚持跑步半个小时。',opts:['督促','附和','嚷','启示'],ans:0,
   exp:'在……的督促下 = nhờ ai đốc thúc. 附和 là hùa theo; 嚷 là la hét; 启示 là bài học — không hợp với khung 在……下.'},
  {wrong:'天天还没来，林林就变得____勤劳。',opts:['异常','异样','正常','平常'],ans:0,
   exp:'Phó từ chỉ mức độ trước tính từ → 异常勤劳 (chăm chỉ lạ thường). 异样 là khác lạ (tính từ); 正常 / 平常 là bình thường — trái ý câu.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép 2–3 vế, dùng từ của bài + ôn từ HSK 5 (疼爱, 简直, 自从, 体贴, 与其, 一旦, 自觉, 何况…)
// Chiều Việt → Trung: đời sống học sinh
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tuy thầy chủ nhiệm rất nghiêm khắc với chúng tôi, nhưng ai cũng biết thật ra thầy rất thương học trò.',zh:'虽然班主任对我们很严厉，但是大伙儿都知道他其实很疼爱学生。',py:'Suīrán bānzhǔrèn duì wǒmen hěn yánlì, dànshì dàhuǒr dōu zhīdào tā qíshí hěn téng\'ài xuésheng.',goiY:['虽然……但是……','严厉','大伙儿','疼爱'],giai:'虽然……但是…… nối hai ý trái chiều; "nghiêm khắc với ai" = 对 + ai + 严厉 (giới từ 对 đứng trước tính từ); "ai cũng" trong khẩu ngữ nói 大伙儿都.'},
  {vi:'Hễ nhắc đến món ruột của mình là mẹ tôi nói thao thao bất tuyệt, cứ như không dừng lại được.',zh:'一说起自己的拿手菜，我妈妈就滔滔不绝，简直停不下来。',py:'Yì shuōqǐ zìjǐ de náshǒu cài, wǒ māma jiù tāotāo bù jué, jiǎnzhí tíng bu xiàlái.',goiY:['一……就……','拿手菜','滔滔不绝','简直'],giai:'一 + V1，就 + V2 = hễ… là…; "món ruột" = 拿手菜, đừng dịch từng chữ; 简直 (HSK 5) = gần như, quả thật là.'},
  {vi:'Nếu cậu có ý kiến gì với tớ thì cứ nói thẳng trước mặt, đừng chê cười tớ sau lưng.',zh:'如果你对我有什么意见，就当面说出来，别在背后嘲笑我。',py:'Rúguǒ nǐ duì wǒ yǒu shénme yìjiàn, jiù dāngmiàn shuō chūlái, bié zài bèihòu cháoxiào wǒ.',goiY:['如果……就……','当面','背后','嘲笑'],giai:'当面 (trước mặt) đối lập với 在背后 (sau lưng), cả hai đứng trước động từ; "có ý kiến với ai" = 对 + ai + 有意见.'},
  {vi:'Nghe nói cuối tuần cả lớp sẽ đi dã ngoại, bọn trẻ phấn khởi lạ thường, chỉ mong sao ngày mai là thứ Bảy luôn.',zh:'听说周末全班要去郊游，孩子们异常兴奋，巴不得明天就是星期六。',py:'Tīngshuō zhōumò quán bān yào qù jiāoyóu, háizimen yìcháng xīngfèn, bābudé míngtiān jiù shì xīngqīliù.',goiY:['异常','巴不得'],giai:'巴不得 + mệnh đề = chỉ mong sao…; 异常 + tính từ = cực kỳ (văn viết), đừng dịch thành "phấn khởi bất thường".'},
  {vi:'Từ khi chuyển sang lớp mới, tôi và các bạn sống với nhau hoà hợp khỏi phải nói, chưa từng giận dỗi nhau lần nào.',zh:'自从转到新班级以后，我和同学们相处得别提多融洽了，从来没闹过别扭。',py:'Zìcóng zhuǎndào xīn bānjí yǐhòu, wǒ hé tóngxuémen xiāngchǔ de biétí duō róngqià le, cónglái méi nàoguo bièniu.',goiY:['自从……以后','别提多……了','融洽','别扭'],giai:'"… khỏi phải nói" = 别提多 + tính từ + 了, có thể đứng sau 相处得; 闹别扭 là cụm li hợp nên 过 chen vào giữa: 闹过别扭.'},
  {vi:'Sở dĩ gia đình họ luôn hoà thuận là vì ai cũng biết bao dung và quan tâm đến người khác.',zh:'他们一家之所以一直很和睦，是因为每个人都懂得宽容和体贴别人。',py:'Tāmen yì jiā zhīsuǒyǐ yìzhí hěn hémù, shì yīnwèi měi ge rén dōu dǒngde kuānróng hé tǐtiē biérén.',goiY:['之所以……是因为……','和睦','宽容','体贴'],giai:'之所以 + kết quả, 是因为 + nguyên nhân: nêu kết quả trước, giải thích sau; 之所以 đứng sau chủ ngữ 他们一家. 体贴 (HSK 5 bài 24) = chu đáo, quan tâm.'},
  {vi:'Thay vì ngày nào cũng tìm cách lấy lòng thầy cô, chi bằng biết kiềm chế bản thân và dồn tâm sức vào việc học.',zh:'与其每天想办法讨好老师，不如约束好自己，把精力放在学习上。',py:'Yǔqí měi tiān xiǎng bànfǎ tǎo hǎo lǎoshī, bùrú yuēshù hǎo zìjǐ, bǎ jīnglì fàng zài xuéxí shang.',goiY:['与其……不如……','讨好','约束'],giai:'与其 A，不如 B = thay vì A thì chi bằng B (người nói chọn B); "dồn tâm sức vào…" = 把精力放在……上.'},
  {vi:'Mãi đến khi bà ngoại phải nằm viện, tôi mới nhận ra mấy năm nay mình chỉ lo học, đã quá lơ là người nhà.',zh:'直到外婆住进了医院，我才意识到这些年自己只顾着学习，太忽略家人了。',py:'Zhídào wàipó zhùjìnle yīyuàn, wǒ cái yìshí dào zhèxiē nián zìjǐ zhǐ gùzhe xuéxí, tài hūlüè jiārén le.',goiY:['直到……才……','意识到','忽略'],giai:'直到……才……: mãi đến… mới…; 意识到 + mệnh đề = nhận ra rằng…; 忽略 + người = lơ là, không để ý đến ai.'},
  {vi:'Một khi quy định mới được áp dụng thì dù không có thầy cô đốc thúc, học sinh cũng phải tự giác tuân thủ.',zh:'新规定一旦开始实行，即使没有老师督促，学生也要自觉遵守。',py:'Xīn guīdìng yídàn kāishǐ shíxíng, jíshǐ méiyǒu lǎoshī dūcù, xuésheng yě yào zìjué zūnshǒu.',goiY:['一旦','即使……也……','实行','督促'],giai:'一旦 (HSK 5) đứng sau chủ ngữ 新规定; 即使……也…… = dù… cũng…; "áp dụng quy định" = 实行, không dùng 实践.'},
  {vi:'Mẹ nghiêm khắc bảo tôi bớt chơi điện thoại, tôi bèn ngơ ngác hỏi lại: "Chẳng phải mẹ cũng cầm điện thoại cả ngày sao? Huống hồ bài tập của con đã làm xong từ lâu rồi."',zh:'妈妈严厉地让我少玩儿手机，我便一脸疑惑地反问：“您不是也整天拿着手机吗？何况我的作业早就做完了。”',py:'Māma yánlì de ràng wǒ shǎo wánr shǒujī, wǒ biàn yì liǎn yíhuò de fǎnwèn: “Nín bú shì yě zhěngtiān názhe shǒujī ma? Hékuàng wǒ de zuòyè zǎo jiù zuòwán le.”',goiY:['便','反问','不是……吗','何况'],giai:'便 = 就 (văn viết, đứng sau chủ ngữ); 不是……吗？ là câu hỏi tu từ, ý khẳng định; 何况 = huống hồ, thêm một lý do mạnh hơn. 一脸疑惑地 làm trạng ngữ cho 反问.'}
];

// Chiều Trung → Việt — bám ý bài khoá, diễn đạt lại bằng câu ghép; không trùng câu chiều trên
var translateDataRev = [
  {vi:'Bố mẹ Thiên Thiên phải đi công tác, muốn nhờ chúng tôi trông con gái giúp, vợ chồng tôi nhận lời ngay không chút đắn đo.',zh:'天天的父母要出差，想请我们帮忙照看女儿，我和老公爽快地答应了。',py:'Tiāntiān de fùmǔ yào chūchāi, xiǎng qǐng wǒmen bāngmáng zhàokàn nǚ\'ér, wǒ hé lǎogōng shuǎngkuai de dāying le.',goiY:['爽快 = thẳng thắn, dứt khoát (nhận lời ngay)','老公 = chồng (khẩu ngữ)'],giai:'爽快地答应 dịch "nhận lời ngay / vui vẻ nhận lời", không dịch "sảng khoái nhận lời"; 我和老公 dịch gọn "vợ chồng tôi".'},
  {vi:'Có một đứa trẻ ở cùng sớm tối với con gái một, chúng tôi còn mong chẳng được, huống hồ Lâm Lâm lại cực kỳ quý người bạn này.',zh:'有个孩子和独生女朝夕相处，我们巴不得呢，何况林林对这个伙伴异常热情。',py:'Yǒu ge háizi hé dúshēngnǚ zhāoxī xiāngchǔ, wǒmen bābudé ne, hékuàng Línlín duì zhège huǒbàn yìcháng rèqíng.',goiY:['巴不得呢 = mong còn chẳng được','何况 = huống hồ','异常 = cực kỳ'],giai:'巴不得呢 đứng cuối vế = "còn mong chẳng được"; 何况 thêm lý do mạnh hơn → "huống hồ"; 对……异常热情 dịch tự nhiên là "rất quý, rất nhiệt tình với…".'},
  {vi:'Thiên Thiên còn chưa đến, Lâm Lâm đã dọn nhà sạch bong, rất có phong thái quý ông.',zh:'天天还没来，林林就将屋子收拾得干干净净，绅士风度十足。',py:'Tiāntiān hái méi lái, Línlín jiù jiāng wūzi shōushi de gāngānjìngjìng, shēnshì fēngdù shízú.',goiY:['还没……就…… = chưa… đã…','将 = 把 (văn viết)','风度十足 = đầy phong thái'],giai:'还没 A，就 B = A chưa xảy ra mà B đã xảy ra; 将 là dạng văn viết của 把, dịch như câu 把 bình thường.'},
  {vi:'Hai đứa không những chưa bao giờ đánh nhau mà quan hệ còn hoà hợp khỏi phải nói, đến vợ chồng tôi cũng hơi ghen tị.',zh:'两个孩子不但从不打架，而且关系别提多融洽了，我和老公都有点儿嫉妒。',py:'Liǎng ge háizi búdàn cóng bù dǎjià, érqiě guānxi biétí duō róngqià le, wǒ hé lǎogōng dōu yǒudiǎnr jídù.',goiY:['不但……而且…… = không những… mà còn…','别提多……了 = … khỏi phải nói','嫉妒 = ghen tị'],giai:'不但……而且…… tăng tiến; 别提多融洽了 dịch "hoà hợp khỏi phải nói / hoà hợp vô cùng", không dịch "đừng nhắc tới".'},
  {vi:'Làm xong bài tập, bọn trẻ liền bàn tán không ngớt về bạn bè: đứa này bảo bạn kia hay chê cười người khác, đứa kia bảo bạn nọ hay nịnh thầy cô.',zh:'孩子们做完作业，就滔滔不绝地议论起同学来，一个说这个爱嘲笑人，另一个说那个爱讨好老师。',py:'Háizimen zuòwán zuòyè, jiù tāotāo bù jué de yìlùn qǐ tóngxué lái, yí ge shuō zhège ài cháoxiào rén, lìng yí ge shuō nàge ài tǎo hǎo lǎoshī.',goiY:['滔滔不绝 = nói không dứt','一个……另一个…… = đứa này… đứa kia…','讨好 = nịnh, lấy lòng'],giai:'V + 起 + tân ngữ + 来 = bắt đầu làm gì (议论起同学来); 一个说……另一个说…… dịch "đứa này bảo… đứa kia bảo…".'},
  {vi:'Tôi nghiêm túc nói với hai đứa: thay vì nói xấu người ta sau lưng, chi bằng nói rõ vấn đề ngay trước mặt.',zh:'我郑重地告诉她们，与其在背后说人家的坏话，不如当面把问题说清楚。',py:'Wǒ zhèngzhòng de gàosu tāmen, yǔqí zài bèihòu shuō rénjia de huàihuà, bùrú dāngmiàn bǎ wèntí shuō qīngchu.',goiY:['郑重 = nghiêm túc, trịnh trọng','与其……不如…… = thay vì… chi bằng…','当面 = trước mặt'],giai:'与其 A，不如 B: người nói chọn B; 人家 ở đây = người khác (别人), dịch "người ta".'},
  {vi:'Con gái không những không nghe lời chúng tôi, trái lại còn ngơ ngác hỏi vặn: "Chẳng phải bố mẹ cũng như thế sao?"',zh:'女儿不但没有接受我们的话，反而一脸疑惑地反问道：“你们不是也这样吗？”',py:'Nǚ\'ér búdàn méiyǒu jiēshòu wǒmen de huà, fǎn\'ér yì liǎn yíhuò de fǎnwèn dào: “Nǐmen bú shì yě zhèyàng ma?”',goiY:['不但没有……反而…… = không những không… trái lại còn…','反问道 = hỏi ngược lại (道 = 说, văn viết)'],giai:'不但没有……反而…… nêu kết quả NGƯỢC với mong đợi; 不是……吗？ là câu hỏi tu từ → dịch "chẳng phải… sao?".'},
  {vi:'Trong phút chốc, vợ chồng tôi bị hỏi đến cứng họng, căn phòng im phăng phắc, chẳng ai biết nên trả lời thế nào.',zh:'瞬间我和老公被问得说不出话来，屋子里鸦雀无声，谁也不知道该怎么回答。',py:'Shùnjiān wǒ hé lǎogōng bèi wèn de shuō bu chū huà lái, wūzi li yāquè wúshēng, shéi yě bù zhīdào gāi zěnme huídá.',goiY:['瞬间 = trong phút chốc','鸦雀无声 = im phăng phắc','谁也不…… = chẳng ai…'],giai:'被问得说不出话来 = bị hỏi đến mức không nói được gì → "cứng họng"; thành ngữ 鸦雀无声 dịch bằng thành ngữ tiếng Việt "im phăng phắc / lặng ngắt như tờ".'},
  {vi:'Nếu không nhờ con gái bắt bẻ, tôi vẫn chưa nhận ra rằng chúng tôi đang áp dụng hai tiêu chuẩn: dễ dãi với bản thân, nghiêm khắc với con cái.',zh:'要不是女儿反驳，我还意识不到我们实行的是两套标准：对自己宽容，对孩子严厉。',py:'Yàobúshì nǚ\'ér fǎnbó, wǒ hái yìshí bú dào wǒmen shíxíng de shì liǎng tào biāozhǔn: duì zìjǐ kuānróng, duì háizi yánlì.',goiY:['要不是…… = nếu không phải (nhờ)…','意识不到 = không nhận ra','实行 = áp dụng'],giai:'要不是 + điều kiện trái sự thật, vế sau nêu hậu quả; 对自己宽容 trong ngữ cảnh này dịch "dễ dãi với bản thân" hợp hơn "khoan dung".'},
  {vi:'Cha mẹ đã là người thầy vỡ lòng của con cái thì trước hết phải giữ gìn lời nói việc làm của chính mình, nếu không thì rất khó khiến con tâm phục.',zh:'父母既然是孩子的启蒙老师，就应当首先约束好自己的言行，否则便很难让孩子信服。',py:'Fùmǔ jìrán shì háizi de qǐméng lǎoshī, jiù yīngdāng shǒuxiān yuēshù hǎo zìjǐ de yánxíng, fǒuzé biàn hěn nán ràng háizi xìnfú.',goiY:['既然……就…… = đã… thì…','否则 = nếu không thì','便 = 就 (văn viết)','约束 = kiềm chế, giữ gìn'],giai:'既然 + sự thật đã biết, 就 + kết luận; 否则 nêu hậu quả nếu không làm theo; 信服 = tin phục → "tâm phục".'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 21): 缩写课文 300 字左右
// Dàn ý = đúng bảng 练习 5 「根据提示，简述课文主要内容」
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:300,
  de:'这篇课文通过家庭生活中的一件小事告诉我们：虽然父母是孩子的启蒙老师，可有时孩子也是父母的老师。要想当好父母，首先要约束好自己的言行。请参考练习5，把课文缩写成300字左右的短文。',
  prompt:'Bài khoá qua một chuyện nhỏ trong đời sống gia đình cho chúng ta thấy: tuy cha mẹ là người thầy vỡ lòng của con cái, nhưng có lúc con cái cũng là thầy của cha mẹ. Muốn làm cha mẹ tốt, trước hết phải giữ gìn lời nói, việc làm của chính mình. Hãy tham khảo bài tập 5, viết tóm tắt (缩写) bài khoá thành đoạn văn khoảng 300 chữ.',
  dan:[
    {hoi:'天天要来“我们”家，“我们”全家的态度怎么样？',goiY:'①“我”和老公的态度：　②林林的态度：　③全家别提多……了'},
    {hoi:'天天到来之前，林林有什么变化？',goiY:'①变得异常……　②……收拾得……　③……摆放得……　④什么好事都……'},
    {hoi:'天天来了之后，两个孩子表现如何？',goiY:'早上……，上学……，做作业……，不……，不……，关系……'},
    {hoi:'两个孩子做错了什么？父母怎样教育他们？',goiY:'①一个说……，另一个说……　②“我”严肃地说：“……”　③老公附和：“……”'},
    {hoi:'孩子的疑惑是什么？大人有什么做错了的地方？',goiY:'①女儿反问：“你们不是也……吗？”　②两套标准：对自己……，对孩子……'},
    {hoi:'这个故事告诉我们什么道理？',goiY:'想当好父母，首先要……'}
  ],
  tuNen:['爽快','巴不得','别提多……了','异常','督促','融洽','当面','疑惑','严厉','约束'],
  cauTruc:[
    {ten:'Nhân vật + nguyên nhân (mở bài)', nhan:'出差', vd:'天天的父母要出差，想请我们帮忙照看她几天。', khi:'Câu MỞ: nêu nhân vật và lý do câu chuyện bắt đầu — không cần chép câu 林林和天天是同学.'},
    {ten:'……，我们巴不得呢！ / 别提多……了', nhan:'巴不得', vd:'我和老公爽快地答应了，我们巴不得呢！林林更是别提多高兴了。', khi:'Dòng 1 bảng 练习5: tả thái độ, cảm xúc của cả nhà.'},
    {ten:'还没……，就……', nhan:'还没', vd:'天天还没来，林林就变得异常勤劳。', khi:'Dòng 2: sự thay đổi xảy ra TRƯỚC khi bạn đến.'},
    {ten:'……不用……，……不用……（liệt kê song song）', nhan:'不用', vd:'两个孩子早上不用叫就醒了，上学不用接送，做作业也不用督促。', khi:'Dòng 3: liệt kê gọn nhiều biểu hiện tốt, mỗi vế ngắn.'},
    {ten:'一个说……，另一个说……', nhan:'另一个', vd:'一个说王朵朵爱嘲笑别人，另一个说高春来最会讨好老师。', khi:'Dòng 4: kể lời hai nhân vật một cách ngắn gọn (lời gián tiếp, bỏ ngoặc kép).'},
    {ten:'没想到……', nhan:'没想到', vd:'没想到女儿一脸疑惑地反问：“你们不是也常说哪个朋友很自私吗？”', khi:'Dòng 5: chuyển sang CAO TRÀO — bước ngoặt của câu chuyện.'},
    {ten:'……这才意识到…… / 想……，首先要……', nhan:'意识到', vd:'我这才意识到，我们实行的是两套标准。想当好父母，首先要约束好自己的言行。', khi:'Dòng 6: câu KẾT — rút ra đạo lý.'}
  ],
  checklist:[
    'Đã trả lời đủ 6 dòng của bảng 练习5, đúng thứ tự câu chuyện chưa?',
    'Độ dài khoảng 300 chữ Hán (270–330 chữ) — tóm tắt bằng lời mình, không chép nguyên cả đoạn bài khoá?',
    'Đã dùng ít nhất 6 từ / cấu trúc nên dùng (巴不得, 别提多……了, 异常, 督促, 当面, 严厉, 约束…) chưa?',
    'Giữ đúng ngôi kể "我" (người mẹ), phân biệt rõ 林林 (con mình) và 天天 (con bạn) chưa?',
    'Câu cuối có nêu được đạo lý: muốn làm cha mẹ tốt, trước hết phải giữ gìn lời nói việc làm của mình chưa?'
  ],
  model:{
    zh:'天天的父母要出差，想请我们帮忙照看她几天。我和老公爽快地答应了，有个孩子和女儿林林做伴，我们巴不得呢！林林更是别提多高兴了，嚷着要用爸爸的拿手菜欢迎天天。天天还没来，林林就变得异常勤劳，把屋子收拾得干干净净，东西摆放得整整齐齐，什么好事都想着天天。天天来了以后，两个孩子早上不用叫就醒了，上学不用接送，做作业也不用督促。她们不打架，不闹别扭，关系十分融洽。一天晚上，两个孩子聊起了同学，一个说王朵朵爱嘲笑别人，另一个说高春来最会讨好老师。我严肃地说：“看到别人有缺点，应该当面说，不能在背后议论人家。”老公也附和：“对人要宽容。”没想到女儿一脸疑惑地反问：“你们不是也常说哪个朋友很自私吗？”我们一下子说不出话来。我这才意识到，我们对自己宽容，对孩子严厉，实行的是两套标准。孩子也可以是父母的老师，想当好父母，首先要约束好自己的言行。',
    py:'Tiāntiān de fùmǔ yào chūchāi, xiǎng qǐng wǒmen bāngmáng zhàokàn tā jǐ tiān. Wǒ hé lǎogōng shuǎngkuai de dāying le, yǒu ge háizi hé nǚ\'ér Línlín zuòbàn, wǒmen bābudé ne! Línlín gèng shì biétí duō gāoxìng le, rǎngzhe yào yòng bàba de náshǒu cài huānyíng Tiāntiān. Tiāntiān hái méi lái, Línlín jiù biànde yìcháng qínláo, bǎ wūzi shōushi de gāngānjìngjìng, dōngxi bǎifàng de zhěngzhěngqíqí, shénme hǎoshì dōu xiǎngzhe Tiāntiān. Tiāntiān láile yǐhòu, liǎng ge háizi zǎoshang búyòng jiào jiù xǐng le, shàngxué búyòng jiēsòng, zuò zuòyè yě búyòng dūcù. Tāmen bù dǎjià, bú nào bièniu, guānxi shífēn róngqià. Yì tiān wǎnshang, liǎng ge háizi liáoqǐle tóngxué, yí ge shuō Wáng Duǒduǒ ài cháoxiào biérén, lìng yí ge shuō Gāo Chūnlái zuì huì tǎo hǎo lǎoshī. Wǒ yánsù de shuō: “Kàndào biérén yǒu quēdiǎn, yīnggāi dāngmiàn shuō, bù néng zài bèihòu yìlùn rénjia.” Lǎogōng yě fùhè: “Duì rén yào kuānróng.” Méi xiǎngdào nǚ\'ér yì liǎn yíhuò de fǎnwèn: “Nǐmen bú shì yě cháng shuō nǎge péngyou hěn zìsī ma?” Wǒmen yíxiàzi shuō bu chū huà lái. Wǒ zhè cái yìshí dào, wǒmen duì zìjǐ kuānróng, duì háizi yánlì, shíxíng de shì liǎng tào biāozhǔn. Háizi yě kěyǐ shì fùmǔ de lǎoshī, xiǎng dāng hǎo fùmǔ, shǒuxiān yào yuēshù hǎo zìjǐ de yánxíng.',
    vn:'Bố mẹ Thiên Thiên phải đi công tác, muốn nhờ chúng tôi trông cô bé mấy ngày. Vợ chồng tôi nhận lời ngay: có một đứa trẻ làm bạn với con gái Lâm Lâm, chúng tôi còn mong chẳng được! Lâm Lâm thì càng vui khỏi phải nói, đòi ầm lên phải dùng món ruột của bố để đón Thiên Thiên. Thiên Thiên còn chưa đến, Lâm Lâm đã trở nên chăm chỉ lạ thường, dọn nhà sạch bong, đồ đạc bày biện ngăn nắp, việc gì tốt cũng nghĩ đến Thiên Thiên. Thiên Thiên đến rồi, sáng nào hai đứa cũng tự dậy không cần gọi, đi học không cần đưa đón, làm bài tập cũng không cần giục. Hai đứa không đánh nhau, không giận dỗi, quan hệ rất hoà hợp. Một tối, hai đứa nói chuyện về bạn bè, đứa này bảo Vương Đoá Đoá hay chê cười người khác, đứa kia bảo Cao Xuân Lai giỏi nịnh thầy cô nhất. Tôi nghiêm nghị nói: "Thấy người khác có khuyết điểm thì nên nói thẳng trước mặt, không được bàn tán người ta sau lưng." Chồng tôi cũng phụ hoạ: "Đối với người khác phải bao dung." Không ngờ con gái ngơ ngác hỏi ngược lại: "Chẳng phải bố mẹ cũng hay nói bạn này bạn kia ích kỷ sao?" Vợ chồng tôi lập tức cứng họng. Đến lúc ấy tôi mới nhận ra, chúng tôi dễ dãi với bản thân, nghiêm khắc với con cái — đang áp dụng hai tiêu chuẩn. Con trẻ cũng có thể là thầy của cha mẹ; muốn làm cha mẹ tốt, trước hết phải giữ gìn lời nói, việc làm của chính mình.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习 5 「根据提示，简述课文主要内容」 (tr. 21)
// Mỗi dòng bảng một câu hỏi: cột trái = câu hỏi, cột phải = gợi ý
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — trả lời lần lượt 6 câu hỏi để tóm tắt bài khoá. Bấm loa nghe câu hỏi, nhìn gợi ý (cột phải của bảng trong sách), rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được: 巴不得 · 别提多……了 · 异常 · 督促 · 当面 · 反问 · 严厉 · 约束.',
  questions:[
    {q_zh:'天天要来“我们”家，“我们”全家的态度怎么样？',
     q_vn:'Thiên Thiên sắp đến nhà "chúng tôi", thái độ của cả nhà "chúng tôi" thế nào?',
     hint:'①“我”和老公的态度：　②林林的态度：　③全家别提多……了',
     sample:'天天的父母要出差，想请我们照看她几天，我和老公爽快地答应了，我们巴不得呢！林林嚷着要用爸爸的拿手菜欢迎天天。全家别提多高兴了。',
     sample_vn:'Bố mẹ Thiên Thiên phải đi công tác, muốn nhờ chúng tôi trông cô bé mấy ngày, vợ chồng tôi nhận lời ngay, chúng tôi còn mong chẳng được! Lâm Lâm đòi phải dùng món ruột của bố để đón Thiên Thiên. Cả nhà vui khỏi phải nói.',
     note:'Nói đủ 3 ý theo đúng thứ tự gợi ý ①②③; ý ③ phải dùng khung 别提多 + tính từ + 了.'},
    {q_zh:'天天到来之前，林林有什么变化？',
     q_vn:'Trước khi Thiên Thiên đến, Lâm Lâm có thay đổi gì?',
     hint:'①变得异常……　②……收拾得……　③……摆放得……　④什么好事都……',
     sample:'天天还没来，林林就变得异常勤劳。她把屋子收拾得干干净净，把东西摆放得整整齐齐，什么好事都想着天天。',
     sample_vn:'Thiên Thiên còn chưa đến, Lâm Lâm đã trở nên chăm chỉ lạ thường. Con bé dọn nhà sạch bong, bày biện đồ đạc ngăn nắp, việc gì tốt cũng nghĩ đến Thiên Thiên.',
     note:'Bổ ngữ trạng thái V + 得 + tính từ lặp (干干净净, 整整齐齐) làm câu nói sinh động. Khi nói có thể thay 将 (văn viết) bằng 把.'},
    {q_zh:'天天来了之后，两个孩子表现如何？',
     q_vn:'Sau khi Thiên Thiên đến, hai đứa trẻ thể hiện thế nào?',
     hint:'早上……，上学……，做作业……，不……，不……，关系……',
     sample:'两个孩子早上不用叫就醒了，上学不用接送，做作业不用督促。她们不打架，不闹别扭，关系别提多融洽了。',
     sample_vn:'Hai đứa sáng nào cũng tự dậy không cần gọi, đi học không cần đưa đón, làm bài tập không cần giục. Chúng không đánh nhau, không giận dỗi, quan hệ hoà hợp khỏi phải nói.',
     note:'Chuỗi vế ngắn song song (不用……，不用……) nói nhanh, đều nhịp — đây là điểm cộng khi nói.'},
    {q_zh:'两个孩子做错了什么？父母怎样教育他们？',
     q_vn:'Hai đứa trẻ đã làm sai điều gì? Bố mẹ dạy chúng thế nào?',
     hint:'①一个说……，另一个说……　②“我”严肃地说：“……”　③老公附和：“……”',
     sample:'一天晚上，她们在背后议论同学：一个说王朵朵老嘲笑别人，另一个说高春来最会讨好老师。我严肃地说：“看到别人有缺点，应该当面说。”老公附和：“大伙儿要和睦相处，对人要宽容。”',
     sample_vn:'Một tối, hai đứa bàn tán về bạn bè sau lưng: đứa này bảo Vương Đoá Đoá hay chê cười người khác, đứa kia bảo Cao Xuân Lai giỏi nịnh thầy cô nhất. Tôi nghiêm nghị nói: "Thấy người khác có khuyết điểm thì nên nói thẳng trước mặt." Chồng tôi phụ hoạ: "Mọi người phải sống hoà thuận, đối với người khác phải bao dung."',
     note:'Trả lời 2 câu hỏi: trước nói LỖI (背后议论同学), sau nói CÁCH DẠY. Dẫn lời bằng 严肃地说 / 附和.'},
    {q_zh:'孩子的疑惑是什么？大人有什么做错了的地方？',
     q_vn:'Điều thắc mắc của đứa trẻ là gì? Người lớn đã sai ở chỗ nào?',
     hint:'①女儿反问：“你们不是也……吗？”　②两套标准：对自己……，对孩子……',
     sample:'女儿反问：“你们不是也有时候说哪个朋友很自私吗？”我们这才意识到，我们实行的是两套标准：对自己宽容，对孩子严厉。',
     sample_vn:'Con gái hỏi ngược lại: "Chẳng phải bố mẹ cũng có lúc nói bạn này bạn kia ích kỷ sao?" Đến lúc đó chúng tôi mới nhận ra mình đang áp dụng hai tiêu chuẩn: dễ dãi với bản thân, nghiêm khắc với con cái.',
     note:'Câu hỏi tu từ 你们不是也……吗？ phải lên giọng ở cuối; hai vế 对自己宽容，对孩子严厉 đối nhau — nói chậm, rõ.'},
    {q_zh:'这个故事告诉我们什么道理？',
     q_vn:'Câu chuyện này cho chúng ta đạo lý gì?',
     hint:'想当好父母，首先要……',
     sample:'这个故事告诉我们，孩子也可以是父母的老师。想当好父母，首先要约束好自己的言行。',
     sample_vn:'Câu chuyện cho chúng ta thấy con trẻ cũng có thể là thầy của cha mẹ. Muốn làm cha mẹ tốt, trước hết phải giữ gìn lời nói, việc làm của chính mình.',
     note:'Có thể thêm một câu liên hệ bản thân (我觉得……) để câu trả lời không bị "rỗng".'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói ngắn)
// Sách HSK 6 không có sách bài tập nghe: tự soạn 8 câu theo chủ đề bài 1
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 1',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'听说你们把邻居家的孩子接到家里住了？'},
            {sp:'男',zh:'是啊，她父母出差了，请我们帮忙照看几天。我女儿巴不得呢，天天有人陪她玩儿。'}],
     q:'男的的女儿对这件事是什么态度？',qvn:'Con gái của người đàn ông có thái độ thế nào với việc này?',
     opts:['很不愿意','非常欢迎','无所谓','有点儿担心'],ans:1,
     why:'巴不得呢 = mong còn chẳng được → rất hoan nghênh. Ba phương án kia đều trái nghĩa hoặc không được nhắc tới.',
     words:['巴不得']},

    {n:2,
     lines:[{sp:'男',zh:'你最近怎么这么勤劳？又洗衣服又打扫房间的。'},
            {sp:'女',zh:'下个星期我同学要来我家住，我可不想让她觉得我家乱七八糟的。'}],
     q:'女的为什么变得勤劳了？',qvn:'Vì sao cô gái trở nên siêng năng?',
     opts:['妈妈督促她','同学要来她家住','她要搬家了','她想讨好父母'],ans:1,
     why:'Lý do nằm ở câu trả lời: 下个星期我同学要来我家住 — giống Lâm Lâm trong bài khoá. Không ai nhắc đến mẹ đốc thúc hay chuyển nhà.',
     words:['勤劳']},

    {n:3,
     lines:[{sp:'女',zh:'这两个孩子天天在一起，从来不打架，也不闹别扭。'},
            {sp:'男',zh:'是啊，她们的关系别提多融洽了，连我都有点儿嫉妒了。'}],
     q:'关于两个孩子，可以知道什么？',qvn:'Về hai đứa trẻ, có thể biết được điều gì?',
     opts:['经常吵架','关系很好','互相嫉妒','很少见面'],ans:1,
     why:'别提多融洽了 = hoà hợp khỏi phải nói. Người "ghen tị" là người đàn ông (连我都……嫉妒), không phải hai đứa trẻ ghen tị nhau — phương án C là bẫy.',
     words:['打架','别扭','融洽','嫉妒']},

    {n:4,
     lines:[{sp:'男',zh:'你听说了吗？小王在背后说你的坏话。'},
            {sp:'女',zh:'我不信，我们俩那么亲密。明天我当面问问她就知道了。'}],
     q:'女的打算怎么做？',qvn:'Người phụ nữ định làm gì?',
     opts:['和小王吵架','不再理小王','直接去问小王','让男的去问'],ans:2,
     why:'当面问问她 = hỏi thẳng cô ấy trước mặt → trực tiếp đi hỏi Tiểu Vương. Cô không tin tin đồn nên không cãi nhau hay cạch mặt bạn.',
     words:['亲密','当面']},

    {n:5,
     lines:[{sp:'女',zh:'昨天开会的时候，你怎么一句话也没说？'},
            {sp:'男',zh:'我本来想反驳经理的观点，可看到大家都在附和他，我就没开口。'}],
     q:'男的为什么没说话？',qvn:'Vì sao người đàn ông không nói gì?',
     opts:['他同意经理的观点','他身体不舒服','大家都支持经理','他不知道说什么'],ans:2,
     why:'大家都在附和他 = mọi người đều hùa theo (ủng hộ) giám đốc. Anh ấy vốn muốn 反驳 (phản bác) nên A sai.',
     words:['反驳','附和']},

    {n:6,
     lines:[{sp:'男',zh:'王老师上课的时候，教室里总是鸦雀无声。'},
            {sp:'女',zh:'那当然，她可是出了名的严厉，谁敢说话啊？'}],
     q:'关于王老师，可以知道什么？',qvn:'Về cô giáo Vương, có thể biết được điều gì?',
     opts:['很宽容','很严厉','很年轻','很幽默'],ans:1,
     why:'出了名的严厉 = nổi tiếng nghiêm khắc; 谁敢说话啊 là câu hỏi tu từ = không ai dám nói. 宽容 trái nghĩa.',
     words:['鸦雀无声','严厉']},

    {n:7,
     lines:[{sp:'男',zh:'很多父母要求孩子不要玩儿手机，自己却整天拿着手机不放。其实，父母就是孩子的第一任老师，孩子会模仿父母的一言一行。所以，想让孩子做到的事，父母首先要自己做到，约束好自己的言行。'}],
     q:'这段话主要想告诉我们什么？',qvn:'Đoạn nói này chủ yếu muốn cho chúng ta biết điều gì?',
     opts:['孩子不应该玩儿手机','父母要约束好自己的言行','父母应该对孩子严厉','孩子要多向老师学习'],ans:1,
     why:'Dạng "đoạn nói ngắn" của HSK 6: ý chính thường nằm ở câu kết — 父母首先要自己做到，约束好自己的言行. A chỉ là ví dụ mở đầu.',
     words:['任','约束']},

    {n:8,
     lines:[{sp:'女',zh:'儿子今天问我：“你不是说说谎不好吗？那你为什么让我跟打电话的人说你不在家？”'},
            {sp:'男',zh:'哈哈，被他问得说不出话来了吧？这孩子可给我们上了一课。'}],
     q:'从对话中可以知道什么？',qvn:'Từ đoạn hội thoại có thể biết được điều gì?',
     opts:['儿子说了谎','女的被儿子问住了','男的在批评儿子','女的不在家'],ans:1,
     why:'Câu hỏi vặn 你不是说……吗？ của con khiến mẹ cứng họng (被他问得说不出话来) — giống tình huống trong bài khoá. Người bảo con nói dối là mẹ, và mẹ đang ở nhà.',
     words:[]}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn thân sắp đi du lịch, nhờ em trông giúp con mèo.',
     a:{sp:'Bạn',zh:'我下周要去旅行，能帮我照看几天小猫吗？',vn:'Tuần sau tớ đi du lịch, cậu trông giúp con mèo mấy hôm được không?'},
     need:['Dùng 巴不得','Nhận lời thật thẳng thắn'],
     sample:'当然可以！我早就想养一只猫了，巴不得呢！',
     samplePy:'Dāngrán kěyǐ! Wǒ zǎo jiù xiǎng yǎng yì zhī māo le, bābudé ne!',
     sampleVn:'Được chứ! Tớ muốn nuôi mèo từ lâu rồi, mong còn chẳng được ấy!',
     tip:'巴不得呢 đặt cuối câu để đáp lại một lời đề nghị mình rất thích — giống câu 我们巴不得呢！ trong bài.'},

    {scene:'Bạn hỏi em buổi hoà nhạc tối qua thế nào.',
     a:{sp:'Bạn',zh:'你昨天去看演唱会了？怎么样？',vn:'Hôm qua cậu đi xem hoà nhạc à? Thế nào?'},
     need:['Dùng 别提多……了','Kể thêm một chi tiết'],
     sample:'别提多激动了！我跟着唱了一晚上，嗓子都哑了。',
     samplePy:'Biétí duō jīdòng le! Wǒ gēnzhe chàngle yì wǎnshang, sǎngzi dōu yǎ le.',
     sampleVn:'Phấn khích khỏi phải nói! Tớ hát theo cả buổi tối, khản cả giọng.',
     tip:'别提多 + tính từ + 了 — không thêm 很 vào giữa, không bỏ 了.'},

    {scene:'Bạn cùng lớp nói xấu một bạn khác với em.',
     a:{sp:'Bạn',zh:'你知道吗？小李最会讨好老师了，我真看不起他。',vn:'Cậu biết không? Tiểu Lý giỏi nịnh thầy cô nhất, tớ thật coi thường cậu ta.'},
     need:['Dùng 当面 (hoặc 背后)','Khuyên bạn một cách nhẹ nhàng'],
     sample:'有意见的话，还是当面跟他说吧，在背后议论人家不太好。',
     samplePy:'Yǒu yìjiàn dehuà, háishi dāngmiàn gēn tā shuō ba, zài bèihòu yìlùn rénjia bú tài hǎo.',
     sampleVn:'Nếu có ý kiến thì cứ nói thẳng với cậu ấy đi, bàn tán người ta sau lưng không hay lắm.',
     tip:'Đây chính là lời khuyên của người mẹ trong bài khoá. 还是……吧 làm lời khuyên mềm hơn.'},

    {scene:'Em trai than phiền với em về bố.',
     a:{sp:'Em trai',zh:'爸爸不让我玩儿游戏，他自己却天天玩儿，这公平吗？',vn:'Bố không cho em chơi game, bố thì ngày nào cũng chơi, thế có công bằng không?'},
     need:['Dùng 两套标准 hoặc 约束','Nêu ý kiến của em'],
     sample:'这确实是两套标准。我觉得爸爸应该先约束好自己，再来要求你。',
     samplePy:'Zhè quèshí shì liǎng tào biāozhǔn. Wǒ juéde bàba yīnggāi xiān yuēshù hǎo zìjǐ, zài lái yāoqiú nǐ.',
     sampleVn:'Đúng là hai tiêu chuẩn thật. Anh thấy bố nên tự kiềm chế mình trước, rồi hẵng yêu cầu em.',
     tip:'先……，再…… sắp xếp trình tự hai việc; 约束好自己 đúng như câu kết của bài.'},

    {scene:'Trong giờ thảo luận, ý kiến của bạn bị cả nhóm phản bác nên bạn buồn.',
     a:{sp:'Bạn',zh:'今天讨论的时候，大家都反驳我的观点，我好没面子。',vn:'Hôm nay lúc thảo luận, ai cũng phản bác quan điểm của tớ, tớ mất mặt quá.'},
     need:['Dùng 反驳 hoặc 宽容','An ủi bạn'],
     sample:'别往心里去，大家反驳你的观点，不是看不起你。你也宽容一点儿，听听别人的想法吧。',
     samplePy:'Bié wǎng xīn li qù, dàjiā fǎnbó nǐ de guāndiǎn, bú shì kànbuqǐ nǐ. Nǐ yě kuānróng yìdiǎnr, tīngting biérén de xiǎngfǎ ba.',
     sampleVn:'Đừng để bụng, mọi người phản bác quan điểm của cậu không phải là coi thường cậu. Cậu cũng rộng lượng một chút, nghe thử suy nghĩ của người khác đi.',
     tip:'反驳 + 观点 / 意见; 看不起 (HSK 5 bài 31) = coi thường.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体 (gắn với điểm ngữ pháp 3: 具有语体差别的同义词)
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Bài này học đúng điểm ngữ pháp 3: cùng một nghĩa nhưng có từ văn viết (将、便、道、与、是否) và từ khẩu ngữ (把、就、说、和、是不是).',
  items: [
    {scene:'Em viết bài văn kể chuyện nộp cho cô giáo.',
     a:'天天还没来，林林就变得异常勤劳，将屋子收拾得干干净净。',b:'天天还没来，林林就变得特别勤快，把屋子弄得挺干净的。',better:'a',
     why:'Bài văn cần phong cách văn viết thống nhất: 异常, 将, 收拾得干干净净. Câu b dùng 挺……的, 弄 — rất khẩu ngữ, hợp khi kể chuyện với bạn.'},

    {scene:'Em nhắn tin cho bạn thân về kỳ nghỉ sắp tới.',
     a:'我巴不得马上放假呢！',b:'我迫切盼望假期早日到来。',better:'a',
     why:'巴不得 là khẩu ngữ, thân mật — hợp với tin nhắn cho bạn. Câu b đúng nhưng trang trọng như văn bản, nhắn cho bạn thân nghe rất gượng.'},

    {scene:'Trong tiệc công ty, em (người vợ) giới thiệu chồng với giám đốc của mình.',
     a:'这是我老公。',b:'这是我先生。',better:'b',
     why:'老公 thân mật, dùng trong gia đình, với bạn bè. Giới thiệu với cấp trên, nơi trang trọng nên dùng 我先生 / 我爱人.'},

    {scene:'Em làm MC phát biểu trước toàn trường trong lễ khai giảng.',
     a:'大伙儿安静一下，我说个事儿。',b:'各位同学请安静，下面我宣布一件事。',better:'b',
     why:'大伙儿, 说个事儿 là khẩu ngữ thân mật, hợp khi nói với nhóm bạn. Phát biểu trước toàn trường dùng 各位 + 宣布.'},

    {scene:'Em viết báo cáo khảo sát nộp cho nhà trường.',
     a:'本次调查的目的是了解学生是否喜欢网课。',b:'这次调查就是想看看学生是不是喜欢网课。',better:'a',
     why:'Báo cáo là văn bản trang trọng: 本次, 目的是, 是否 cùng phong cách. Câu b (就是想看看, 是不是) là lời nói hằng ngày.'},

    {scene:'Mẹ hỏi em có muốn uống trà không, em trả lời.',
     a:'我不饮茶，谢谢妈妈。',b:'我不喝茶，谢谢妈妈。',better:'b',
     why:'饮 là từ văn viết (饮茶, 饮料); nói chuyện với mẹ dùng 喝. Dùng 饮 trong khẩu ngữ nghe như đọc sách — đúng điều sách nhắc ở chú thích 3.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 (Cấp 3 · 交际性练习)
// Theo bảng 练习 5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Kể lại TOÀN BỘ câu chuyện bằng lời của chính em, <b>KHÔNG đọc thuộc lòng</b>. Dàn ý bên dưới là đúng 6 dòng của bảng 练习 5 trong sách: ' +
         'nhìn câu hỏi và gợi ý, bấm ghi âm rồi kể liền một mạch khoảng 2 phút.',
  outline: [
    {step:'天天要来“我们”家，“我们”全家的态度怎么样？', cue:'①“我”和老公的态度：　②林林的态度：　③全家别提多……了', words:['老公','爽快','巴不得','嚷','拿手','佳肴']},
    {step:'天天到来之前，林林有什么变化？', cue:'①变得异常……　②……收拾得……　③……摆放得……　④什么好事都……', words:['异常','勤劳','绅士','风度','十足']},
    {step:'天天来了之后，两个孩子表现如何？', cue:'早上……，上学……，做作业……，不……，不……，关系……', words:['督促','打架','别扭','融洽','亲密','忽略','嫉妒']},
    {step:'两个孩子做错了什么？父母怎样教育他们？', cue:'①一个说……，另一个说……　②“我”严肃地说：“……”　③老公附和：“……”', words:['滔滔不绝','嘲笑','讨好','郑重','当面','人家','附和','大伙儿','和睦','宽容']},
    {step:'孩子的疑惑是什么？大人有什么做错了的地方？', cue:'①女儿反问：“你们不是也……吗？”　②两套标准：对自己……，对孩子……', words:['疑惑','反问','瞬间','鸦雀无声','反驳','意识','实行','严厉']},
    {step:'这个故事告诉我们什么道理？', cue:'想当好父母，首先要……', words:['启蒙','任','约束','启示']}
  ],
  checklist: [
    'Kể đủ 6 phần theo đúng thứ tự của bảng 练习 5 chưa?',
    'Phần 1–3 có dùng 巴不得、别提多……了、异常、督促、融洽 không?',
    'Phần 4–5 có dùng 当面、附和、反问、两套标准、严厉 không?',
    'Có kể được câu hỏi vặn của con gái — cao trào của câu chuyện — bằng giọng hỏi không?',
    'Câu cuối có nêu được đạo lý (约束好自己的言行), và có kể bằng LỜI MÌNH chứ không đọc thuộc?'
  ]
};

// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 17–23) — đáp án theo sách đáp án (h6da bài 1)
// Thứ tự: 注释 练一练 (1–3) → 练习 1–4 → 扩展 1 病句
// 练习 5 đã thành Luyện viết / Luyện nói / Kể lại. 扩展 2 词汇 (bảng 搭配, không có bài tập) đưa vào trò Ghép từ.
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', de:'用“巴不得”改写句子（注释1 · 练一练）', vn:'Dùng 巴不得 viết lại câu (Chú thích 1 · Luyện tập). Sách không in đáp án — dưới đây là đáp án gợi ý.',
   cau:[
     {s:'他不来太好了，我就希望他不来呢。', tu:'巴不得', dap:'他不来太好了，我巴不得他不来呢。',
      giai:'希望 → 巴不得 (mong mỏi mạnh hơn, khẩu ngữ); 巴不得 mang cả mệnh đề 他不来 làm tân ngữ.'},
     {s:'有人请你玩儿你还不去？这样的好事我盼还盼不来呢。', tu:'巴不得', dap:'有人请你玩儿你还不去？这样的好事我巴不得呢。',
      giai:'盼还盼不来 (mong còn chẳng được) = 巴不得呢, đứng cuối câu.'},
     {s:'我多么希望你来帮帮我呀，怎么会觉得你多事呢？', tu:'巴不得', dap:'我巴不得你来帮帮我呢，怎么会觉得你多事呢？',
      giai:'多么希望……呀 → 巴不得……呢; bỏ 多么 vì 巴不得 đã chứa nghĩa "rất mong".'}
   ]},

  {kieu:'gx', de:'用“别提多……了”改写句子（注释2 · 练一练）', vn:'Dùng 别提多……了 viết lại câu (Chú thích 2 · Luyện tập). Sách không in đáp án — dưới đây là đáp án gợi ý.',
   cau:[
     {s:'听说女儿把这么好的工作给辞了，妈妈气坏了。', tu:'别提多……了', dap:'听说女儿把这么好的工作给辞了，妈妈别提多生气了。',
      giai:'气坏了 (tức điên lên) → 别提多生气了; giữa 别提多 và 了 là tính từ 生气.'},
     {s:'看到他们两个相处得这么好，我高兴极了。', tu:'别提多……了', dap:'看到他们两个相处得这么好，我别提多高兴了。',
      giai:'……极了 → 别提多……了: cùng chỉ mức độ rất cao, nhưng 别提多 có giọng khoa trương hơn.'},
     {s:'联欢会上，我们自编自演的节目特别特别受欢迎。', tu:'别提多……了', dap:'联欢会上，我们自编自演的节目别提多受欢迎了。',
      giai:'特别特别 → 别提多……了; cụm 受欢迎 đặt được vào giữa, không thêm 很.'}
   ]},

  {kieu:'kho', de:'写出与带点词语相对应的口语词（注释3 · 练一练）', vn:'Viết từ khẩu ngữ tương ứng với từ có dấu chấm (Chú thích 3 · Luyện tập). Từ có dấu chấm trong sách được đánh dấu 【 】.',
   tu:['和','喝','是不是'],
   cau:[
     {s:'在【与】林小雨的相处中，我发现她不仅爽快，还很健谈，跟谁都能滔滔不绝，聊起来没完。　【与】→ ＿＿', dap:['和']},
     {s:'中国是世界上最早种茶、制茶、【饮】茶的国家，种茶的历史已有几千年了。　【饮】→ ＿＿', dap:['喝']},
     {s:'他在信中写道：“我不知道这本书【是否】能让你了解我及我生活的全部，我们努力吧。”　【是否】→ ＿＿', dap:['是不是']}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chứa chữ có dấu chấm, cùng nghĩa với chữ đó).',
   vd:{tu:'反问', chu:'问', ds:['询问','提问','疑问','问题']},
   cau:[
     {tu:'爽快', chu:'快', dap:['痛快','愉快','凉快','赶快'], them:['快乐','快活','畅快','欢快'],
      giai:'快 trong 爽快 là "vui, dễ chịu, thoải mái" (như 痛快, 愉快, 凉快). Đáp án sách có cả 赶快 — ở đó 快 là "nhanh", chỉ cùng chữ.'},
     {tu:'打架', chu:'打', dap:['打听','打针','打工','打包'], them:['打扫','打扮','打算','打扰','打折','打招呼'],
      giai:'打 ở đây là động từ chung "làm, tiến hành một hoạt động" (đánh nhau, dò hỏi, tiêm, làm thuê, đóng gói…); nghĩa gốc "đánh" đã mờ đi.'},
     {tu:'亲密', chu:'亲', dap:['亲戚','亲切','亲情','亲自'], them:['亲人','亲爱','亲近','亲热','亲友'],
      giai:'亲 = gần gũi, thân thiết (quan hệ gần, tình cảm sâu): 亲戚, 亲切, 亲情. Riêng 亲自 (đích thân) thì 亲 là "tự mình" — đáp án sách vẫn chấp nhận.'},
     {tu:'反驳', chu:'反', dap:['反对','反抗','反思','相反'], them:['反问','反感','违反','反面'],
      giai:'反 = ngược lại, chống lại: 反对 (phản đối), 反抗 (phản kháng), 反思 (nghĩ lại, tự xét), 相反 (trái ngược).'}
   ]},

  {kieu:'gx', de:'用所给词语或结构改写句子', vn:'Dùng từ hoặc cấu trúc cho sẵn viết lại câu.',
   cau:[
     {s:'听到这个消息，大家非常兴奋，忍不住欢呼起来。', tu:'异常', dap:'听到这个消息，大家异常兴奋，忍不住欢呼起来。',
      giai:'非常 → 异常: cùng nghĩa "cực kỳ" nhưng 异常 mang sắc thái văn viết; đứng trước tính từ 兴奋.'},
     {s:'他做得最好吃的菜是西红柿炒鸡蛋。', tu:'拿手', dap:'他的拿手菜是西红柿炒鸡蛋。',
      giai:'"Món nấu ngon nhất" = 拿手菜 (món ruột); câu gọn hơn nhiều.'},
     {s:'我的工作就是不断提醒食品厂加强卫生管理。', tu:'督促', dap:'我的工作就是督促食品厂加强卫生管理。',
      giai:'不断提醒 (nhắc nhở liên tục) → 督促 (đốc thúc, giám sát): 督促 + đối tượng + V.'},
     {s:'这个老师很严格，谁不做作业都不行。', tu:'严厉', dap:'这个老师很严厉，谁不做作业都不行。',
      giai:'严格 → 严厉: nhấn mạnh thái độ nghiêm khắc của thầy (xem phân biệt 严厉—严格).'},
     {s:'我非常希望能马上回家见到妈妈。', tu:'巴不得', dap:'我巴不得能马上回家见到妈妈。',
      giai:'非常希望 → 巴不得 (đã chứa nghĩa "rất mong", nên bỏ 非常).'},
     {s:'这件事情太复杂了，我一个人根本处理不了。', tu:'别提多……了', dap:'这件事情别提多复杂了，我一个人根本处理不了。',
      giai:'太……了 → 别提多……了: tính từ 复杂 đặt giữa 别提多 và 了.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn ①).', tu:['和睦','绅士','爽快','宽容','十足'],
   cau:[
     {s:'我老公是个热心人，别人有事需要帮忙时，他总是＿＿地答应；我老公也很＿＿，能原谅伤害过他的人，几乎跟所有的人都能＿＿相处；我老公还很＿＿，不管是挤汽车，还是上电梯，都坚持女士优先，风度＿＿，我身边的朋友都羡慕我找了个好老公。',
      dap:['爽快','宽容','和睦','绅士','十足']}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn ②).', tu:['别扭','亲密','嘲笑','当面','反问'],
   cau:[
     {s:'我和小丽关系很融洽，从来没闹过＿＿。可突然有一天，我听说小丽在背后＿＿我长得又胖又丑，我非常吃惊，马上要找她＿＿问个究竟。小丽听了我的话后，笑了，她＿＿道：“你觉得我会说那样的话吗？一定是有人嫉妒我们关系好，故意那么说的。”我的疑惑没有了，我们仍然是＿＿的朋友。',
      dap:['别扭','嘲笑','当面','反问','亲密']}
   ]},

  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu (phần gạch chân trong sách được bọc trong 【 】).',
   cau:[
     {mau:'这天晚上，两个孩子做完作业，开始滔滔不绝地聊了起来，【一个说】，我不喜欢王朵朵，她就喜欢跟穿得漂亮的同学一起玩儿，还老嘲笑别人。【另一个说】我讨厌高春来，他最会讨好老师了……',
      khung:'刚一下课，他们就争论起来，一个说＿＿，另一个说＿＿。',
      dap:['这次考试太难了，很多题都没见过','考试不难，是我们复习得不够认真'],
      giai:'一个说……，另一个说…… dùng để kể lời của hai người có ý kiến KHÁC nhau (thường là tranh luận). Hai chỗ trống nên là hai ý đối lập về cùng một chuyện.'},
     {mau:'人们常说，启蒙老师的重要性不可忽视，父母就是孩子的第一任老师，【这话确实不假】，【可如果】这次不是女儿反驳我，我还意识不到，我们自己的做法和对孩子的要求实行的是两套标准，那就是对自己宽容，对孩子严厉。',
      khung:'人们常说“有钱就有幸福”，这话确实不假，可如果＿＿。',
      dap:['一个人只有钱，却没有健康和家人的关心，他也不会觉得幸福的'],
      giai:'这话确实不假，可如果…… = thừa nhận câu nói kia có lý, rồi lật lại bằng một giả thiết cho thấy nó không hoàn toàn đúng. Vế sau 可如果 cần nêu điều kiện + kết quả ngược lại.'}
   ]},

  {kieu:'bc', de:'病句类型：词语误用（一）· 例句', vn:'Loại câu sai: dùng sai từ (1) — các câu ví dụ trong sách (tr. 22), kèm phân tích của sách. Tìm từ dùng sai rồi sửa.',
   cau:[
     {s:'在公益行为中，受助者固然得益，助人者也获得了精神的满足。', sai:'行为', loai:'词义范围大小误用',
      dap:'在公益行动中，受助者固然得益，助人者也获得了精神的满足。',
      giai:'"行为" là hoạt động do tư tưởng chi phối, thường mang tính CÁ NHÂN; hoạt động công ích là việc tập thể → 行动.'},
     {s:'他的毕业论文被评为优秀论文，爸妈都为儿子的成就高兴。', sai:'成就', loai:'词义轻重问题',
      dap:'他的毕业论文被评为优秀论文，爸妈都为儿子的成绩高兴。',
      giai:'成就 là thành tựu lớn trong sự nghiệp — quá nặng; luận văn tốt nghiệp đạt loại giỏi chỉ là 成绩.'},
     {s:'飞机还没落地，接机大厅便站满了数百名前来迎接的人群。', sai:'人群', loai:'个体名词与集体名词误用',
      dap:'飞机还没落地，接机大厅便站满了数百名前来迎接的人。',
      giai:'人群 là danh từ tập thể, không đi với số lượng 数百名; đổi thành danh từ cá thể 人.'},
     {s:'网络的隐蔽性，使人在交往中减少了顾虑，就算是初次在聊天室搭话，也可以做到无所拘谨。', sai:'拘谨', loai:'词义侧重点错误',
      dap:'网络的隐蔽性，使人在交往中减少了顾虑，就算是初次在聊天室搭话，也可以做到无所拘束。',
      giai:'拘谨 nhấn mạnh (lời nói, hành động) quá dè dặt; ý câu là "không bó buộc mình" → 无所拘束.'},
     {s:'我们的晚会开得可喧闹了，大家玩儿得高兴极了，直到凌晨才散。', sai:'喧闹', loai:'带褒贬义的词语误用',
      dap:'我们的晚会开得可热闹了，大家玩儿得高兴极了，直到凌晨才散。',
      giai:'喧闹 là từ mang nghĩa xấu (ồn ào khó chịu); buổi liên hoan vui vẻ → dùng từ nghĩa tốt 热闹.'}
   ]},

  {kieu:'bc', de:'指出下列句子的错误，并提出修改建议（扩展1 · 练一练）', vn:'Chỉ ra lỗi sai trong các câu dưới đây và đề xuất cách sửa (Mở rộng 1 · Luyện tập).',
   cau:[
     {s:'看到这样的事情，我惊讶得目瞪口呆，不信任这样离奇的事竟然真的在我眼前发生了。', sai:'信任', loai:'词义范围大小误用',
      dap:'看到这样的事情，我惊讶得目瞪口呆，不相信这样离奇的事竟然真的在我眼前发生了。',
      giai:'信任 = tin tưởng, tín nhiệm một NGƯỜI (phạm vi hẹp); tin một SỰ VIỆC là thật phải dùng 相信 (phạm vi rộng hơn).'},
     {s:'这次比赛暴露出很多思维敏捷、口才出众、演讲能力强的学生。', sai:'暴露', loai:'带褒贬义的词语误用',
      dap:'这次比赛涌现出很多思维敏捷、口才出众、演讲能力强的学生。',
      giai:'暴露 (phơi bày) đi với điều XẤU (暴露问题, 暴露缺点); nhiều học sinh giỏi xuất hiện → từ nghĩa tốt 涌现.'},
     {s:'他们觉得你刚工作，年龄又小，实际上你聪明，能力也很强，你不能太衰弱了，要做生活的强者。', sai:'衰弱', loai:'词义侧重点错误',
      dap:'他们觉得你刚工作，年龄又小，实际上你聪明，能力也很强，你不能太软弱了，要做生活的强者。',
      giai:'衰弱 nhấn mạnh CƠ THỂ suy yếu (身体衰弱); nói về tính cách, ý chí thiếu cứng cỏi → 软弱.'},
     {s:'越是到了冬天，我越爱迟到，这星期我迟到了好几次，老师批判了我，弄得我好没面子。', sai:'批判', loai:'词义轻重问题',
      dap:'越是到了冬天，我越爱迟到，这星期我迟到了好几次，老师批评了我，弄得我好没面子。',
      giai:'批判 rất nặng, dùng cho tư tưởng, hành vi sai trái nghiêm trọng; đi học muộn chỉ bị 批评.'},
     {s:'每到上下班的时候，马路上一辆辆的车辆排成长龙，把马路堵得水泄不通。', sai:'车辆', loai:'个体名词与集体名词误用',
      dap:'每到上下班的时候，马路上一辆辆的车排成长龙，把马路堵得水泄不通。',
      giai:'车辆 là danh từ tập thể, không đi với lượng từ 一辆辆的; đổi thành danh từ cá thể 车.'}
   ]}
];
